/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f9f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#06337A",
        "brand-blue-2": "#708bb5",
        "brand-pink-1": "#E300B4",
        "brand-background": "#EBF5FF",
        "sumber-data-1":"#1BC5BC", 
        "sumber-data-2":"#8A50FC",
        "sumber-data-3":"#F65464",
        "sumber-data-secondary-1":"#C9F7F5", 
        "sumber-data-secondary-2":"#EEE5FF",
        "sumber-data-secondary-3":"#FFE2E6",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
