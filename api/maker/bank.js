export default async function handler(req, res) {
  const { searchParams } = new URL(req.url, "http://localhost");

  const name = searchParams.get("name") || "Renza";
  const money = searchParams.get("money") || "100000";
  const bank = searchParams.get("bank") || "10000";
  const cash = searchParams.get("cash") || "0";

  const html = `
  <html>
  <body style="
  background:#0b2a6b;
  width:800px;
  height:400px;
  color:white;
  font-family:sans-serif;
  padding:40px">
  
  <h1>PROFILE BANK USER</h1>
  <p>Nama: ${name}</p>
  <p>Money: ${money}</p>
  <p>Bank: ${bank}</p>
  <p>Cash: ${cash}</p>

  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res