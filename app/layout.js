import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Productivity Toolkit",
  description: "Eight handy, fast, free tools in one place.",
};

const tools = [
  { href: "/pomodoro", label: "Pomodoro" },
  { href: "/bmi", label: "BMI" },
  { href: "/password", label: "Password" },
  { href: "/qrcode", label: "QR Code" },
  { href: "/converter", label: "Converter" },
  { href: "/notes", label: "Notes" },
  { href: "/markdown", label: "Markdown" },
  { href: "/age", label: "Age Calc" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 backdrop-blur bg-ink/60 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link href="/" className="font-bold tracking-tight text-lg">
              🧰 <span className="text-white">Toolkit</span>
            </Link>
            <nav className="ml-auto hidden md:flex gap-1 flex-wrap">
              {tools.map(t => (
                <Link key={t.href} href={t.href}
                  className="text-sm px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5">
                  {t.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="max-w-6xl mx-auto px-4 py-10 text-white/40 text-sm">
          Built with Next.js + Tailwind. Open source.
        </footer>
      </body>
    </html>
  );
}
