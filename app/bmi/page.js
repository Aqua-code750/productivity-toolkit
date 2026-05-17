"use client";
import { useMemo, useState } from "react";
import PageHeader from "../../components/PageHeader";

export default function BMI() {
  const [unit, setUnit] = useState("metric");
  const [h, setH] = useState("");
  const [w, setW] = useState("");

  const bmi = useMemo(() => {
    const hv = parseFloat(h), wv = parseFloat(w);
    if (!hv || !wv) return null;
    if (unit === "metric") return wv / Math.pow(hv / 100, 2);
    // imperial: h in inches, w in lbs
    return (wv / (hv * hv)) * 703;
  }, [h, w, unit]);

  const cat = bmi == null ? "" :
    bmi < 18.5 ? "Underweight" :
    bmi < 25   ? "Normal" :
    bmi < 30   ? "Overweight" : "Obese";

  return (
    <div>
      <PageHeader emoji="⚖️" title="BMI Calculator" subtitle="Body Mass Index in metric or imperial." />
      <div className="card max-w-md">
        <div className="flex gap-2 mb-4">
          {["metric","imperial"].map(u => (
            <button key={u} onClick={() => setUnit(u)}
              className={`px-3 py-1.5 rounded-lg text-sm ${unit===u ? "bg-accent" : "bg-white/5 hover:bg-white/10"}`}>{u}</button>
          ))}
        </div>
        <label className="label">Height ({unit==="metric"?"cm":"in"})</label>
        <input className="input mb-3" value={h} onChange={e=>setH(e.target.value)} type="number" placeholder={unit==="metric"?"170":"67"} />
        <label className="label">Weight ({unit==="metric"?"kg":"lb"})</label>
        <input className="input" value={w} onChange={e=>setW(e.target.value)} type="number" placeholder={unit==="metric"?"65":"143"} />
        {bmi != null && (
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-white/60">Your BMI</div>
            <div className="text-3xl font-bold">{bmi.toFixed(1)}</div>
            <div className="text-accent mt-1">{cat}</div>
          </div>
        )}
      </div>
    </div>
  );
}
