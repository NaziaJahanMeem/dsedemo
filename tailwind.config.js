/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors:{
        searchbar:'#014f5b',
        navmain:'#00778f',
        cardcolor:'#c8e1ee',
        directorBandSell:'#e2d5cd',
        report:'#dbe2d2',
      },
      backgroundColor: ['even'],
      backgroundColor: ['odd'],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwind-scrollbar'),
  ],
}