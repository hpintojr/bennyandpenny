import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#fbf7ef",
          color: "#123c3a",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 74% 18%, rgba(174, 239, 226, .52), transparent 20%), radial-gradient(circle at 13% 85%, rgba(196, 113, 77, .15), transparent 30%), linear-gradient(135deg, #fffdf9 0%, #fbf7ef 52%, #edf8f4 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -210,
            width: 590,
            height: 590,
            display: "flex",
            border: "10px solid rgba(182, 118, 84, .42)",
            borderRadius: 999,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -350,
            left: -240,
            width: 710,
            height: 710,
            display: "flex",
            border: "16px solid rgba(95, 192, 177, .35)",
            borderRadius: 999,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 74px 58px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "baseline", letterSpacing: "-0.14em", lineHeight: 0.8 }}>
              <span
                style={{
                  color: "#bc7655",
                  fontSize: 126,
                  fontWeight: 700,
                  textShadow: "0 8px 18px rgba(96, 53, 33, .16)",
                }}
              >
                B
              </span>
              <span
                style={{
                  marginLeft: -4,
                  color: "#6fc0b1",
                  fontSize: 126,
                  fontWeight: 700,
                  textShadow: "0 8px 18px rgba(37, 118, 105, .14)",
                }}
              >
                P
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: 7 }}>
              <span style={{ fontSize: 46, fontWeight: 600, letterSpacing: "-0.04em" }}>Benny &amp; Penny&apos;s</span>
              <span
                style={{
                  marginTop: 10,
                  color: "#4d9389",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                }}
              >
                A TECH COMPANY
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 850 }}>
            <span style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.045em" }}>
              Vision, translated into real-world solutions.
            </span>
            <span
              style={{
                marginTop: 24,
                color: "#436365",
                fontFamily: "Arial, sans-serif",
                fontSize: 25,
                lineHeight: 1.35,
              }}
            >
              Software architecture · Creative technology · Publishing
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "2px solid rgba(18, 60, 58, .2)",
              paddingTop: 19,
              color: "#1b5552",
              fontFamily: "Arial, sans-serif",
              fontSize: 21,
              fontWeight: 700,
            }}
          >
            <span>Hamilton Pinto Jr.</span>
            <span>bennyandpenny.com</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
