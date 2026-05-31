import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0a1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 13,
          fontWeight: "bold",
          color: "#c9a84c",
          letterSpacing: "0.5px",
        }}
      >
        RP
      </div>
    ),
    { ...size }
  );
}
