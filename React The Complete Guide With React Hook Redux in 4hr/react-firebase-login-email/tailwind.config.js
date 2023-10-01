/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    //"./node_modules/@nextui-org/theme/dist/components/button.js",
    //'./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

