import { ImageResponse } from "next/og";

export const alt = "ZorianPay — Financial Infrastructure for the Digital Asset Economy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0a0a10 0%, #060608 55%, #060608 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(240,185,11,0.35) 0%, rgba(240,185,11,0) 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(240,185,11,0.16) 0%, rgba(240,185,11,0) 65%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 92,
              height: 92,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #ffe08a 0%, #f0b90b 55%, #c8930a 100%)",
              color: "#060608",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: "#f7f7f9" }}>Zorian</span>
            <span style={{ color: "#f0b90b" }}>Pay</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#9b9bab",
            textAlign: "center",
            maxWidth: 880,
            justifyContent: "center",
          }}
        >
          Building the Financial Infrastructure for the Digital Asset Economy
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            gap: 16,
          }}
        >
          {["Universal Merchant QR", "Local Currency Settlement", "Enterprise APIs"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                borderRadius: 9999,
                border: "1px solid rgba(240,185,11,0.35)",
                color: "#f0b90b",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
