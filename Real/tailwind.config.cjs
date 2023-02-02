/** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      fontFamily:{
        zector: "'zectorregular', serif",
        vegawanty: "'vegawantyregular', serif"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
