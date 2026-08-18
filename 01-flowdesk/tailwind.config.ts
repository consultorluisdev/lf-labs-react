/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F6F3",
        surface: "#FFFFFF",
        surfacealt: "#ECEFEA",
        ink: "#12181A",
        inksoft: "#54615C",
        accent: "#146B5D",
        accentdark: "#0E4E44",
        dark: "#0D1210",
        darksoft: "#B9C4BE",
        border: "#DBE0D9",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        btn: "8px",
        card: "16px",
        cardsm: "12px",
      },
    },
  },
  plugins: [],
};
