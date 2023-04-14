/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        grayLayout: "#f5f5f5",
        grayPostBtn: "#f5f6fa",
        blueBtn: "#177EFF",
        grayNum: "#B2C2DF",
        grayTitle: "#667281",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
