import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get("name") || "Zyroo";
  const money = searchParams.get("money") || "100000";
  const bank = searchParams.get("bank") || "10000";
  const cash = searchParams.get("cash") || "0";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b2a6b",
          width: "100%",
          height: "100%",
          color: "white",
          padding: 40,
          fontSize: 28,
        }}
      >
        <div style={{ fontSize: 40 }}>PROFILE BANK USER</div>
        <div>Nama: {name}</div>
        <div>Money: {money}</div>
        <div>Bank: {bank}</div>
        <div>Cash: {cash}</div>
      </div>
    ),
    { width: 800, height: 400 }
  );
} 