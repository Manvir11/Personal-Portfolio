/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '3/4': '75vh',
        '4/5': '80vh',
        '5/6': '84vh',
      }

    },
  },
  plugins: [],
}