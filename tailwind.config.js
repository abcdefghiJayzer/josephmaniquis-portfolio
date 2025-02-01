const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      backgroundImage: {
        'about-background': "url('./../src/assets/7.png')", // Use your actual image path
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'none',

        /* Firefox */
        'scrollbar-width': 'none',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }
    }
    )
  })],
}

