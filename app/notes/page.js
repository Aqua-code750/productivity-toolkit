"use client";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    try { setNotes(JSON.parse(localStorage.getItem("toolkit-notes") || "[]")); } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("toolkit-notes", JSON.stringify(notes));
  }, [notes]);

  function add() {
    const t = text.trim();
    if (!t) return;
    setNotes([{ id: Date.now(), text: t, ts: new Date().toISOString() }, ...notes]);
    setText("");
  }

  function del(id) { setNotes(notes.filter(n => n.id !== id)); }

  return (
    <div>
      <PageHeader emoji="📝" title="Quick Notes" subtitle="Saved locally in your browser. No signup, no sync." />
      <div className="card max-w-2xl">
        <div className="flex gap-2">
          <input className="input" value={text} onChange={e=>setText(e.target.value)}
            onKeyDown={e=>e.key==="Enter" && add()} placeholder="Write a note and press Enter" />
          <button className="btn" onClick={add}>Add</button>
        </div>
        <ul className="mt-5 space-y-2">
          {notes.length === 0 && <li className="text-white/40 text-sm">No notes yet.</li>}
          {notes.map(n => (
            <li key={n.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex-1">
                <div className="whitespace-pre-wrap">{n.text}</div>
                <div className="text-xs text-white/40 mt-1">{new Date(n.ts).toLocaleString()}</div>
              </div>
              <button className="btn-ghost text-xs" onClick={()=>del(n.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
