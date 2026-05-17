"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

// Tiny markdown renderer (no deps). Safe-ish — escapes HTML first.
function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function render(md) {
  let s = esc(md);
  s = s.replace(/^### (.*)$/gm, '<h3 class="text-lg font-semibold mt-3">$1</h3>');
  s = s.replace(/^## (.*)$/gm,  '<h2 class="text-xl font-bold mt-4">$1</h2>');
  s = s.replace(/^# (.*)$/gm,   '<h1 class="text-2xl font-bold mt-4">$1</h1>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1 rounded">$1</code>');
  s = s.replace(/\[(.+?)\]\((https?:[^)]+)\)/g, '<a href="$2" class="text-accent underline" target="_blank">$1</a>');
  s = s.replace(/^(?:- )(.+)$/gm, '<li>$1</li>');
  s = s.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul class="list-disc ml-6 my-2">${m}</ul>`);
  s = s.replace(/\n\n/g, '<br/><br/>');
  return s;
}

const SAMPLE = `# Hello, Markdown
Type on the **left**, see it on the *right*.

## Features
- Headings (# ## ###)
- **Bold**, *italic*, \`code\`
- [Links](https://vercel.com)

> Tip: try editing this text!`;

export default function Markdown() {
  const [md, setMd] = useState(SAMPLE);
  return (
    <div>
      <PageHeader emoji="📰" title="Markdown Previewer" subtitle="Live-render markdown as you type." />
      <div className="grid md:grid-cols-2 gap-4">
        <textarea className="input h-96 font-mono" value={md} onChange={e=>setMd(e.target.value)} />
        <div className="card prose prose-invert max-w-none h-96 overflow-auto"
             dangerouslySetInnerHTML={{ __html: render(md) }} />
      </div>
    </div>
  );
}
