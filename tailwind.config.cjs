/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'blue-card': 'url("/lines.png"), linear-gradient(45deg, #0968e5, #091970)',
        'gray-card': 'url("/lines.png"), linear-gradient(90deg, #211f2f, #918ca9)',
        'invalid-card': 'url("/lines.png"), linear-gradient(90deg, #6d90b9, #bbc7dc)',
      },
    },
  },
  plugins: [],
}
