"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import PageHeader from "../../components/PageHeader";

export default function QR() {
  const [text, setText] = useState("https://vercel.com");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!text) return setUrl("");
    QRCode.toDataURL(text, { width: 320, margin: 1, color: { dark: "#ffffff", light: "#0b0f17" } })
      .then(setUrl).catch(()=>setUrl(""));
  }, [text]);

  return (
    <div>
      <PageHeader emoji="🔳" title="QR Code Generator" subtitle="Turn any text or link into a scannable QR code." />
      <div className="card max-w-xl">
        <label className="label">Text or URL</label>
        <input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder="https://..." />
        {url && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <img src={url} alt="QR" className="rounded-xl border border-white/10" />
            <a href={url} download="qrcode.png" className="btn">Download PNG</a>
          </div>
        )}
      </div>
    </div>
  );
}
