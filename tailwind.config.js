/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/Images/architect.jpg')",
        backone: "url('/Images/arch1.jpg')",
        backtwo: "url('/Images/arch2.jpg')",
        backthree: "url('/Images/arch3.jpg')",
        backfour: "url('/Images/arch5.jpg')",
        backfive: "url('/Images/arch6.jpg')",
        backsix: "url('/Images/arch7.jpg')",
        backseven: "url('/Images/arch8.jpg')",
        backeight: "url('/Images/arch9.jpg')",
      },
    },
  },
  plugins: [],
};
