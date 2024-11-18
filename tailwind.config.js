/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html.js}"],
  theme: {
    extend: {
      fontFamily:{
        "one":'"Montserrat", sans-serif',
      },
      colors:{
         //primary
       "darkCyan": 'hsl(158, 36%, 37%)',
       "cream": 'hsl(30, 38%, 92%)',
        //neutral
        "veryDarkBlue": 'hsl(212, 21%, 14%)',
        "darkGrayishBlue":' hsl(228, 12%, 48%)',
        "white":' hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

