import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants/site";

export const alt = SITE_CONFIG.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8F8F6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Domain — top left */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            color: "#A3A3A0",
            fontSize: "18px",
            letterSpacing: "0.02em",
          }}
        >
          {SITE_CONFIG.url.replace(/^https?:\/\//, "")}
        </div>

        {/* Name */}
        <div
          style={{
            color: "#111110",
            fontSize: "80px",
            fontWeight: "700",
            lineHeight: "1",
            marginBottom: "20px",
          }}
        >
          {SITE_CONFIG.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#57574F",
            fontSize: "28px",
            lineHeight: "1.4",
          }}
        >
          Product Engineer — Building real products, end to end.
        </div>
      </div>
    ),
    { ...size }
  );
}
