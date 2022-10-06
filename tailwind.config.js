/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-60deg) " },
          "100%": { transform: "rotate(60deg)" },
        },
      },
      animation: {
        rotate: "rotate 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
