"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  nums:  "0123456789",
  syms:  "!@#$%^&*()-_=+[]{};:,.<>/?",
};

export default function Password() {
  const [len, setLen] = useState(16);
  const [opts, setOpts] = useState({ lower: true, upper: true, nums: true, syms: false });
  const [pw, setPw] = useState("");
  const [copied, setCopied] = useState(false);

  function gen() {
    const pool = Object.keys(opts).filter(k => opts[k]).map(k => SETS[k]).join("");
    if (!pool) return setPw("");
    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    let out = "";
    for (let i=0; i<len; i++) out += pool[arr[i] % pool.length];
    setPw(out); setCopied(false);
  }

  async function copy() {
    if (!pw) return;
    await navigator.clipboard.writeText(pw);
    setCopied(true); setTimeout(()=>setCopied(false), 1200);
  }

  return (
    <div>
      <PageHeader emoji="🔐" title="Password Generator" subtitle="Cryptographically random — generated in your browser." />
      <div className="card max-w-xl">
        <div className="flex items-center gap-2 bg-black/40 rounded-xl p-3 border border-white/10 font-mono break-all min-h-[3rem]">
          {pw || <span className="text-white/40">Click Generate</span>}
        </div>
        <div className="flex gap-2 mt-3">
          <button className="btn" onClick={gen}>Generate</button>
          <button className="btn-ghost" onClick={copy} disabled={!pw}>{copied ? "Copied!" : "Copy"}</button>
        </div>

        <div className="mt-5">
          <label className="label">Length: {len}</label>
          <input type="range" min="6" max="64" value={len} onChange={e=>setLen(+e.target.value)} className="w-full accent-accent" />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          {Object.keys(SETS).map(k => (
            <label key={k} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg cursor-pointer">
              <input type="checkbox" checked={opts[k]} onChange={e=>setOpts({...opts, [k]: e.target.checked})} />
              <span className="capitalize">{k}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
