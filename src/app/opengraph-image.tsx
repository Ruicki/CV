import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { personalInfo } from "@/data/cv-data";

// Imagen de vista previa al compartir el enlace (WhatsApp, Instagram, LinkedIn...).
// WhatsApp e Instagram recortan la miniatura a un cuadrado del centro, así que la foto,
// el nombre y el cargo van centrados dentro de los 630 px centrales.
export const alt = `${personalInfo.name} - ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const photo = await readFile(path.join(process.cwd(), "public", "og-foto.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "radial-gradient(circle at 50% 40%, #13294a 0%, #0a1628 60%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          fontFamily: "sans-serif",
        }}
      >
        {/* Foto: ImageResponse solo admite <img>, no next/image */}
        <img
          src={photoSrc}
          alt={personalInfo.name}
          width={250}
          height={250}
          style={{ borderRadius: 125, border: "6px solid #c9a84c", objectFit: "cover" }}
        />
        <div style={{ fontSize: 66, fontWeight: "bold", color: "#ffffff", letterSpacing: "-1px", marginTop: 8 }}>
          {personalInfo.name}
        </div>
        <div style={{ fontSize: 32, color: "#c9a84c", letterSpacing: "1px" }}>
          {personalInfo.title}
        </div>
        <div style={{ width: 80, height: 4, background: "#c9a84c", borderRadius: 2, marginTop: 4 }} />
        <div style={{ fontSize: 26, color: "#a9b6c4" }}>React · Node.js · TypeScript · Docker</div>
      </div>
    ),
    { ...size }
  );
}
