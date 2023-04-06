/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1350px',
    },
    extend: {
      fontFamily:{
        Roboto: 'Roboto',
        Alkatra:'Alkatra',
        kh_1:'Odor Mean Chey',
        kh_2:'Koulen',
        Bokor:'Bokor',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}