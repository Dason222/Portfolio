/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  
],
mode: 'jit',
  theme: {

    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
     
     height : {
      
         ' 100 ' : '27 rem ' ,
         ' 110 ' : '30 rem ',
         large : ' 35rem ' ,
         larger : ' 40rem ' ,
        max : '50 rem '},
    },
  },
  plugins: [],
}

