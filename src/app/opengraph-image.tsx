import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { personalInfo } from "@/data/cv-data";

// Imagen de vista previa al compartir el enlace (WhatsApp, Instagram, LinkedIn...).
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
          background: "#0a1628",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 70,
          fontFamily: "sans-serif",
        }}
      >
        {/* Foto: ImageResponse solo admite <img>, no next/image */}
        <img
          src={photoSrc}
          alt={personalInfo.name}
          width={340}
          height={340}
          style={{
            borderRadius: 170,
            border: "6px solid #c9a84c",
            objectFit: "cover",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 30, fontWeight: "bold", color: "#c9a84c", letterSpacing: "2px" }}>
            RP.
          </div>
          <div style={{ fontSize: 72, fontWeight: "bold", color: "#ffffff", letterSpacing: "-1px", lineHeight: 1 }}>
            {personalInfo.name}
          </div>
          <div style={{ fontSize: 34, color: "#c9a84c", letterSpacing: "1px" }}>
            {personalInfo.title}
          </div>
          <div style={{ width: 80, height: 4, background: "#c9a84c", borderRadius: 2 }} />
          <div style={{ fontSize: 26, color: "#a9b6c4" }}>
            React · Node.js · TypeScript · Docker
          </div>
          <div style={{ fontSize: 24, color: "#7d8b99" }}>
            Portafolio y proyectos
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
