const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem',    // 24px
        '4xl': '2rem',       // 32px
        '5xl': '2.5rem',     // 40px
        '6xl': '3rem',       // 48px
        '7xl': '3.5rem',     // 56px
        '8xl': '4rem',       // 64px
        '9xl': '4.5rem',     // 72px
      },
      
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

