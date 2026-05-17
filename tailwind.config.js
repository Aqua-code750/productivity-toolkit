/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f17",
        panel: "#121826",
        accent: "#7c5cff"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
