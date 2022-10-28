/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
      },
      backgroundImage: {
        banner:
          "url('/src\assets\imags\images\ethiopia-tigray-region-axum-woven-baskets-BMK8KX.jpg')",
      },
    },
  },
  plugins: [],
};