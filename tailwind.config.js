/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/hero.png')",
      },
      colors: {
        primary: "#232536",
        secondary: "#FFD050",
        purple: "#592EA9",
        darkgrey: "#4C4C4C",
        mediumgrey: "#6D6E76",
      },
    },
  },
  plugins: [],
};
