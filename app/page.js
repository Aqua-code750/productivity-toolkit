import Link from "next/link";

const tools = [
  { href: "/pomodoro",  emoji: "⏱️", title: "Pomodoro Timer", desc: "Focus in 25/5 cycles with audio cues." },
  { href: "/bmi",       emoji: "⚖️", title: "BMI Calculator", desc: "Check body mass index in metric or imperial." },
  { href: "/password",  emoji: "🔐", title: "Password Generator", desc: "Strong, random passwords with options." },
  { href: "/qrcode",    emoji: "🔳", title: "QR Code Generator", desc: "Turn text or URLs into a downloadable QR." },
  { href: "/converter", emoji: "📐", title: "Unit Converter", desc: "Length, weight, and temperature conversions." },
  { href: "/notes",     emoji: "📝", title: "Quick Notes", desc: "Save notes in your browser — no signup." },
  { href: "/markdown",  emoji: "📰", title: "Markdown Previewer", desc: "Live-render markdown as you type." },
  { href: "/age",       emoji: "🎂", title: "Age Calculator", desc: "Exact age in years, months, and days." },
];

export default function Home() {
  return (
    <div>
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Tiny tools that <span className="text-accent">save your day</span>
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Eight everyday utilities in one fast, free, no-signup site.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map(t => (
          <Link key={t.href} href={t.href} className="card hover:border-accent/40 hover:-translate-y-0.5 transition">
            <div className="text-3xl">{t.emoji}</div>
            <div className="mt-3 font-semibold">{t.title}</div>
            <div className="text-sm text-white/60 mt-1">{t.desc}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
