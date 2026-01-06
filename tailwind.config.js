/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "glow-blue": "#4169E1",
        "glow-orange": "#FF6B35",
      },
    },
  },
  plugins: [],
};
