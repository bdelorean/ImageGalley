/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#D1E0DB",
        secondary:"#2C2C2C",
      }
    },
  },
  plugins: [],
};
