/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  
],
  theme: {
    extend: {
     
     height : {
     } ,
         ' 100 ' : '27 rem ' ,
         ' 110 ' : '30 rem ',
         large : ' 35rem ' ,
         larger : ' 40rem ' ,
        max : '50 rem '
    },
  },
  plugins: [],
}
