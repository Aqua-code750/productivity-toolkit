# 🧰 Productivity Toolkit

Eight handy, free, no-signup web tools in one fast site. Built with **Next.js 14 (App Router)** + **Tailwind CSS**. Deploys to Vercel in one click.

## ✨ Tools included

| Folder | Tool | What it does |
|---|---|---|
| `app/pomodoro`  | Pomodoro Timer | 25/5/15 work-break cycles |
| `app/bmi`       | BMI Calculator | Metric & imperial |
| `app/password`  | Password Generator | Cryptographically random, configurable |
| `app/qrcode`    | QR Code Generator | Any text → downloadable PNG |
| `app/converter` | Unit Converter | Length, weight, temperature |
| `app/notes`     | Quick Notes | Saved to local storage |
| `app/markdown`  | Markdown Previewer | Live render as you type |
| `app/age`       | Age Calculator | Years, months, days, total days |

## 🚀 Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## ☁️ Deploy to Vercel

1. Push this repo to GitHub (already done if you cloned it).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the defaults (Next.js is auto-detected) and click **Deploy**.

That's it — your toolkit is live.

## 🗂️ Project structure

```
.
├── app/
│   ├── pomodoro/   ⏱️
│   ├── bmi/        ⚖️
│   ├── password/   🔐
│   ├── qrcode/     🔳
│   ├── converter/  📐
│   ├── notes/      📝
│   ├── markdown/   📰
│   ├── age/        🎂
│   ├── layout.js   (shared shell)
│   └── page.js     (home)
├── components/     reusable UI
├── lib/            utilities (room to grow)
├── public/         static assets
└── styles/         global Tailwind CSS
```

## 📜 License
MIT — free to use, modify, and share.
