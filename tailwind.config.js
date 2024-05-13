/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    // "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif'] // Define Abel font
      }
    },
  },
  plugins: [],
}

