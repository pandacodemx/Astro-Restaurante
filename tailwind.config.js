/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        white: "var(--color-white)",
      },
      fontFamily: {
        base: ["var(--font-base)"],
        titulo: ["var(--font-titulo)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
