/** @type {import('tailwindcss').Config} */
module.exports = {
  // 任意 目录 
  // /*.js
  // /**/*
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "#646A73": "#646A73",
        "#DEE0E3": "#DEE0E3",
        "#3370FF": "#3370FF",
        "#1F2329": "#1F2329"
      }
    },
  },
  plugins: [],
}

