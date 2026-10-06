import { ImageResponse } from "next/og";
export const alt =
  "ESM Empreiteira — Construção e reformas em Lagarto e Sergipe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#122c4a",
        color: "#fff",
        padding: "70px 80px",
        borderBottom: "16px solid #ed7734",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 68, fontWeight: 700 }}>ESM</span>
        <span style={{ fontSize: 20, letterSpacing: 5 }}>EMPREITEIRA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ fontSize: 58, fontWeight: 700 }}>
          Sua ideia. Nossa próxima obra.
        </span>
        <span style={{ fontSize: 26, color: "#ffab77" }}>
          Construção e reformas em Lagarto e Sergipe
        </span>
      </div>
      <span style={{ fontSize: 23 }}>
        (79) 99870-8819 · Solicite um orçamento
      </span>
    </div>,
    size,
  );
}
