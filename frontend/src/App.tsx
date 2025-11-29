import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [status, setStatus] = useState("⏳ Checking backend...");

  useEffect(() => {
    fetch("/api/ping")
      .then(res => res.json())
      .then(data => setStatus("✅ Backend says: " + data.message))
      .catch(() => setStatus("❌ Backend non raggiungibile"));
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: "20vh" }}>
      <h1>DM-APP SRD 5.2 Tool</h1>
      <p>{status}</p>
    </div>
  );
}
