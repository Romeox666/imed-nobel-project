/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Thai: ["IBM Plex Sans Thai Looped"],
        Monoton: ["Monoton"],
        Inconsolata: ["Inconsolata"],
       },
       colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'header': '#EAEAEA',
        'filter' : '#231F20',
        'dark-gold' : '#8E793E',
        'gold' : '#AD974F',     
      },
    },
  },
  plugins: [],
});