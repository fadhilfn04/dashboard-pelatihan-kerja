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
        "brand-blue-3": "#1e40af",
        "brand-blue-4": "#3b82f6",
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
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
