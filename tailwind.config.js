/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   "reng1": "#84C4EC",
      //   "#613223": "#613223",
      //   "#E7730D": "#E7730D",
      //   "#E22733": "#E22733",
      // },
      // backgroundColor: {
      //   "#84C4EC": "#84C4EC",
      //   "#613223": "#613223",
      //   "#E7730D": "#E7730D",
      //   "#E22733": "#E22733",
      // },
      boxShadow: {
        'custom1': '0 0 0 10px rgba(254, 212, 85, .22)',
        'custom2': '0 0 0 5px rgba(254, 212, 85, .22)',
      }
    },
  },
  plugins: [],
}