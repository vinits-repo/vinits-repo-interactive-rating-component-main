/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'Orange': 'hsl(25, 97%, 53%)',
        'White': 'hsl(0, 0%, 100%)',
        'Light-Grey': 'hsl(217, 12%, 63%)',
        'lightGrey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'medium-grey-o': 'hsla(216, 12%, 54%, 0.15)',
        'Dark-Blue': 'hsl(213, 19%, 18%)',
        'Very-Dark-Blue': 'hsl(216, 12%, 8%)',
      },

      fontFamily: {
        'Overpass': ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

