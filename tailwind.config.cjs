/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#43C982",

          "secondary": "#A0CF23",

          "accent": "#000000",

          "neutral": "#FFFFFF",

          "base-100": "#F0F0F0",

          "info": "#86D5E9",

          "success": "#165A2F",

          "warning": "#F4D125",

          "error": "#EF2540",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}