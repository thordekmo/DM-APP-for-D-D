import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// === ROUTE DI TEST ===
app.get("/api/ping", (_req, res) => {
  res.json({ ok: true, message: "pong" });
});

// === AVVIO SERVER ===
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Backend avviato su http://localhost:${port}`);
});
