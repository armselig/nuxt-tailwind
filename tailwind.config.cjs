const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*', './layouts/**/*', './pages/**/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#00061d', // deep purple
      white: '#fff',
      primary: '#624da1', // bright purple
      secondary: {
        default: '#a2d5ee', // sky blue
        darker: '#89B0C8', // gray blue
        dark: '#7288A4', // stormy blue
      },
      tertiary: '#00061d',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
