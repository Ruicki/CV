import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { escapeHtml } from "@/lib/escape-html";
import { isRateLimited } from "@/lib/rate-limit";

// Límites para que nadie use el formulario para mandar textos enormes.
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

// Protección contra robots.
const RATE_LIMIT = 5; // envíos por IP...
const RATE_WINDOW_MS = 10 * 60 * 1000; // ...cada 10 minutos
const MIN_FILL_MS = 2500; // un humano tarda más que esto en llenar el formulario
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

/** Verifica el captcha de Cloudflare Turnstile (solo si hay clave secreta configurada). */
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY ?? "", response: token, remoteip: ip }),
    });
    const data = await res.json();
    return data?.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";
    if (isRateLimited(`contacto:${ip}`, RATE_LIMIT, RATE_WINDOW_MS)) {
      return NextResponse.json(
        { error: "Has enviado varios mensajes seguidos. Intenta de nuevo en unos minutos." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Campo trampa: las personas no lo ven, los robots lo llenan. Se responde "éxito" para no darles pistas.
    if (typeof body?.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Tiempo mínimo: el formulario manda cuándo se abrió la página.
    const openedAt = Number(body?.t);
    const elapsed = Date.now() - openedAt;
    if (!Number.isFinite(openedAt) || elapsed < 0 || elapsed > MAX_FORM_AGE_MS) {
      return NextResponse.json(
        { error: "No se pudo validar el envío. Recarga la página e intenta de nuevo." },
        { status: 400 }
      );
    }
    if (elapsed < MIN_FILL_MS) {
      return NextResponse.json(
        { error: "Espera unos segundos e intenta de nuevo." },
        { status: 400 }
      );
    }

    // Captcha opcional: se exige solo si configuraste TURNSTILE_SECRET_KEY.
    if (process.env.TURNSTILE_SECRET_KEY) {
      const token = typeof body?.turnstileToken === "string" ? body.turnstileToken : "";
      if (!token || !(await verifyTurnstile(token, ip))) {
        return NextResponse.json(
          { error: "No se pudo verificar que eres una persona. Intenta de nuevo." },
          { status: 400 }
        );
      }
    }

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { error: "El mensaje es demasiado largo." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email no es válido." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Falta la variable RESEND_API_KEY");
      return NextResponse.json(
        { error: "El envío de mensajes no está configurado." },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Todo lo que escribe el visitante se escapa: así no puede meter HTML ni enlaces falsos en tu correo.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const subjectName = name.replace(/[\r\n]+/g, " ");

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ruickipinzon@gmail.com",
      replyTo: email,
      subject: `🔔 PORTAFOLIO — Mensaje de ${subjectName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #6366f1; border-radius: 12px; overflow: hidden;">
          <div style="background: #6366f1; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">📬 Nuevo mensaje desde tu portafolio</h1>
          </div>
          <div style="padding: 32px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; width: 100px;">Nombre</td>
                <td style="padding: 10px 0; color: #111;">${safeName}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #6366f1;">${safeEmail}</a></td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Mensaje:</p>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; white-space: pre-wrap; color: #111; line-height: 1.6;">${safeMessage}</div>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${safeEmail}" style="background: #6366f1; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px;">Responder a ${safeName}</a>
            </div>
          </div>
          <div style="background: #f3f4f6; padding: 16px 32px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">Enviado desde tu portafolio · Ricardo Pinzón</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Error inesperado. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
