/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
      },
      colors : {
        'white' : '#eaeaea'
      },
      fontFamily: {
        'poppins' : ['poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
