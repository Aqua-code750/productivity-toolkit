"use client";
import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader";

const MODES = {
  focus: { label: "Focus", mins: 25 },
  short: { label: "Short Break", mins: 5 },
  long:  { label: "Long Break", mins: 15 },
};

export default function Pomodoro() {
  const [mode, setMode] = useState("focus");
  const [secs, setSecs] = useState(MODES.focus.mins * 60);
  const [running, setRunning] = useState(false);
  const tick = useRef(null);

  useEffect(() => { setSecs(MODES[mode].mins * 60); setRunning(false); }, [mode]);

  useEffect(() => {
    if (!running) { clearInterval(tick.current); return; }
    tick.current = setInterval(() => {
      setSecs(s => {
        if (s <= 1) {
          clearInterval(tick.current);
          setRunning(false);
          try { new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=").play(); } catch {}
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tick.current);
  }, [running]);

  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  return (
    <div>
      <PageHeader emoji="⏱️" title="Pomodoro Timer" subtitle="Work focused. Rest deliberately." />
      <div className="card max-w-md mx-auto text-center">
        <div className="flex justify-center gap-2 mb-6">
          {Object.entries(MODES).map(([k, v]) => (
            <button key={k} onClick={() => setMode(k)}
              className={`px-3 py-1.5 rounded-lg text-sm ${mode===k ? "bg-accent text-white" : "bg-white/5 text-white/70 hover:bg-white/10"}`}>
              {v.label}
            </button>
          ))}
        </div>
        <div className="text-7xl font-bold tabular-nums tracking-tight">{m}:{s}</div>
        <div className="mt-6 flex justify-center gap-3">
          <button className="btn" onClick={() => setRunning(r => !r)}>{running ? "Pause" : "Start"}</button>
          <button className="btn-ghost" onClick={() => { setRunning(false); setSecs(MODES[mode].mins*60); }}>Reset</button>
        </div>
      </div>
    </div>
  );
}
