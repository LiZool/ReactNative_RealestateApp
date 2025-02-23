/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // ✅ Correct path
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },

        black: {
          default: "#000000",
          100: '#8C8E98',
          200: '#666876',
          300: '#191D31',
        },

        danger: '#F75555',

        "secondary": "#FFA400",
        "teritiary": "#FFD700",
        "dark": "#1A1A1A",
        "light": "#F5F5F5",
        "white": "#FFFFFF",
      }
    },
  },
  plugins: [],
};