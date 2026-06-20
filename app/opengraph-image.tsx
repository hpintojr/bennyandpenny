import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Benny & Penny's — A Tech Company | Hamilton Pinto Jr.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteUrl = "https://bennyandpenny.com";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "linear-gradient(120deg, #fffdf7 0%, #edf8f2 55%, #f9eeee 100%)",
          color: "#103f3f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            position: "relative",
            padding: "52px 70px 20px",
          }}
        >
          <div
            style={{
              width: "57%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#1b6662",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.16em",
                marginBottom: 24,
              }}
            >
              SOFTWARE ARCHITECT&nbsp;&nbsp;•&nbsp;&nbsp;CREATIVE TECHNOLOGIST&nbsp;&nbsp;•&nbsp;&nbsp;PUBLISHER
            </div>

            <img
              src={`${siteUrl}/images/logo-horizontal-transparent.png`}
              width="480"
              height="142"
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                marginLeft: -10,
                marginBottom: 10,
              }}
            />

            <div
              style={{
                display: "flex",
                fontSize: 44,
                fontWeight: 750,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                marginTop: 5,
              }}
            >
              Hamilton Pinto Jr.
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#506d6b",
                fontSize: 23,
                lineHeight: 1.35,
                marginTop: 16,
              }}
            >
              <span>Vision, translated into real-world solutions.</span>
              <span>Built with heart. Built to work.</span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: 32,
              top: 35,
              width: 460,
              height: 430,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={`${siteUrl}/images/home-hero-brandmark.webp`}
              width="460"
              height="430"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div
          style={{
            height: 144,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 70px",
            background: "#103f3f",
            color: "#fffdf9",
            borderTop: "3px solid #78bdb3",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 29,
                fontWeight: 800,
                letterSpacing: "0.025em",
              }}
            >
              A TECH COMPANY
            </div>
            <div style={{ display: "flex", marginTop: 10, color: "#bce9e1", fontSize: 25 }}>
              bennyandpenny.com
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#c2e8e1",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.13em",
            }}
          >
            CUSTOM APIS&nbsp;&nbsp;•&nbsp;&nbsp;CONSULTING&nbsp;&nbsp;•&nbsp;&nbsp;BRAND + PUBLISHING
          </div>
        </div>
      </div>
    ),
    size,
  );
}
