"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

const CATS = {
  length: {
    units: { m:1, km:1000, cm:0.01, mm:0.001, in:0.0254, ft:0.3048, yd:0.9144, mi:1609.344 },
    base: "m",
  },
  weight: {
    units: { kg:1, g:0.001, mg:1e-6, lb:0.45359237, oz:0.0283495 },
    base: "kg",
  },
  temperature: { units: { C:"C", F:"F", K:"K" }, base: "C" },
};

function convert(cat, from, to, val) {
  const v = parseFloat(val); if (isNaN(v)) return "";
  if (cat === "temperature") {
    let c = v;
    if (from === "F") c = (v - 32) * 5/9;
    else if (from === "K") c = v - 273.15;
    if (to === "C") return c;
    if (to === "F") return c * 9/5 + 32;
    if (to === "K") return c + 273.15;
  }
  const u = CATS[cat].units;
  return (v * u[from]) / u[to];
}

export default function Converter() {
  const [cat, setCat] = useState("length");
  const units = Object.keys(CATS[cat].units);
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const [val, setVal] = useState("1");

  function pickCat(c) {
    setCat(c);
    const u = Object.keys(CATS[c].units);
    setFrom(u[0]); setTo(u[1]);
  }

  const out = convert(cat, from, to, val);
  return (
    <div>
      <PageHeader emoji="📐" title="Unit Converter" subtitle="Length, weight, and temperature." />
      <div className="card max-w-xl">
        <div className="flex gap-2 mb-4 flex-wrap">
          {Object.keys(CATS).map(c => (
            <button key={c} onClick={()=>pickCat(c)}
              className={`px-3 py-1.5 rounded-lg text-sm capitalize ${cat===c?"bg-accent":"bg-white/5 hover:bg-white/10"}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">From</label>
            <input className="input mb-2" value={val} onChange={e=>setVal(e.target.value)} type="number" />
            <select className="input" value={from} onChange={e=>setFrom(e.target.value)}>
              {units.map(u => <option key={u} value={u} className="bg-ink">{u}</option>)}
            </select>
          </div>
          <div>
            <label className="label">To</label>
            <div className="input bg-black/40 min-h-[2.5rem]">{out === "" ? "—" : (typeof out === "number" ? out.toFixed(4) : out)}</div>
            <select className="input mt-2" value={to} onChange={e=>setTo(e.target.value)}>
              {units.map(u => <option key={u} value={u} className="bg-ink">{u}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
