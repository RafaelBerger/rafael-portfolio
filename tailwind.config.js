/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple-950": "#05040f",
        "dark-purple-900": "#0a0919",
        "dark-purple-800": "#131433",
        "dark-purple-700": "#100f2e",
        "dark-purple-600": "#242549",
        "cyan-accent": "#4ac4c4",
      },
      screens: {
        sm: "450px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      transitionDuration: {
        250: "250ms",
        300: "300ms",
      },
      translate: {
        0.5: "0.125rem",
        1.25: "0.3125rem",
      },
      spacing: {
        0.5: "0.125rem",
        1.25: "0.3125rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
