module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding:'2rem'
    },
    extend: {
      colors: {
        primary:'#FEB000'
      },
      fontFamily: {
        primary: "'Outfit', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
