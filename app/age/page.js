"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

function diff(dob) {
  const d = new Date(dob); const n = new Date();
  if (isNaN(d)) return null;
  let y = n.getFullYear() - d.getFullYear();
  let m = n.getMonth() - d.getMonth();
  let day = n.getDate() - d.getDate();
  if (day < 0) { m -= 1; day += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
  if (m < 0)   { y -= 1; m += 12; }
  const totalDays = Math.floor((n - d) / 86400000);
  return { y, m, day, totalDays };
}

export default function Age() {
  const [dob, setDob] = useState("");
  const r = dob ? diff(dob) : null;

  return (
    <div>
      <PageHeader emoji="🎂" title="Age Calculator" subtitle="Exact age in years, months, and days." />
      <div className="card max-w-md">
        <label className="label">Date of birth</label>
        <input className="input" type="date" value={dob} onChange={e=>setDob(e.target.value)} />
        {r && (
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[["Years", r.y], ["Months", r.m], ["Days", r.day]].map(([k,v])=>(
              <div key={k} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold">{v}</div>
                <div className="text-xs text-white/60">{k}</div>
              </div>
            ))}
            <div className="col-span-3 text-sm text-white/60">Total days lived: <b>{r.totalDays.toLocaleString()}</b></div>
          </div>
        )}
      </div>
    </div>
  );
}
