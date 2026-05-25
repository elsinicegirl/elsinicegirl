/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
 theme: {
  extend: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'], // Or similar high-contrast serif
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      'forest-green': '#4d6a33',
      'accent-gold': '#f5b026',
    },
  },
},
  plugins: [],
}