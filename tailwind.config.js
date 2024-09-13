/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1680px",
        "1lg": "1156px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      color: {
        "white-white": "#d9d9d9",
      },
    },
  },
  plugins: [],
};
