import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 24,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "#0f2040",
            border: "3px solid #c9a84c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 52,
            fontWeight: "bold",
            color: "#c9a84c",
            letterSpacing: "2px",
          }}
        >
          RP
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          Ricardo Pinzón
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            color: "#c9a84c",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Desarrollador de Software
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#c9a84c",
            borderRadius: 2,
          }}
        />

        {/* Stack */}
        <div
          style={{
            fontSize: 22,
            color: "#8899aa",
            letterSpacing: "1px",
          }}
        >
          React · Next.js · Node.js · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
