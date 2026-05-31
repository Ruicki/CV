import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
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

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ruickipinzon@gmail.com",
      replyTo: email,
      subject: `🔔 PORTAFOLIO — Mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #6366f1; border-radius: 12px; overflow: hidden;">
          <div style="background: #6366f1; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">📬 Nuevo mensaje desde tu portafolio</h1>
          </div>
          <div style="padding: 32px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; width: 100px;">Nombre</td>
                <td style="padding: 10px 0; color: #111;">${name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Mensaje:</p>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; white-space: pre-wrap; color: #111; line-height: 1.6;">${message}</div>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="background: #6366f1; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px;">Responder a ${name}</a>
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
