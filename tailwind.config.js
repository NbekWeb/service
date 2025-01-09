/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: [],
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            // O'zingizning maxsus ranglaringizni qo'shing
            primary: '#1D4358', // Asosiy rang
            "primary-light": '#D9D9D9', // Asosiy rang
            secondary: '#ff6347', // Ikkinchi rang
            green: "#00FF44",
            danger: "#F53F3F",

            customGray: {
               light: '#d3d3d3',
               DEFAULT: '#a9a9a9',
               dark: '#808080',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}

