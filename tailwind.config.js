/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.teal,
        accent: colors.rose,
        neutral: colors.slate,
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/typography"],
};
