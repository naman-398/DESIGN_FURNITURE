/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '100%' : '100% 100%'
      },
      fontFamily:{
        'roboto' : 'Roboto, sans-serif',
        'poppins' : 'Poppins, sans-serif '
      },
      screens:{
        'lg992' : '992px',
        'sm576' : '576px',
        'xs450px' : '450px',
        'lg1500' : '1500px'
      }
    },
  },
  plugins: [],
}