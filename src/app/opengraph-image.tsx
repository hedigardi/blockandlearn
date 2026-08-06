import { ImageResponse } from "next/og";

export const alt =
  "Block & Learn — easy-to-understand lessons on Bitcoin, blockchain, and digital finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#151a28",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(250,158,45,0.35), transparent), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(250,158,45,0.15), transparent)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 104,
              height: 104,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 26,
              background: "linear-gradient(135deg, rgba(250,158,45,0.9), rgba(250,158,45,0.5))",
              color: "#151a28",
              fontSize: 60,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -1 }}>
            Block &amp; Learn
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(248,250,252,0.75)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Easy-to-understand lessons on Bitcoin, blockchain, and the new world
          of digital finance.
        </div>
      </div>
    ),
    { ...size }
  );
}
