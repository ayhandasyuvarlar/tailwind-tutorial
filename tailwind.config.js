/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logo: "#32445a",
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
