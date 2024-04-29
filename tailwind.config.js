/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubic: ['Rubik', 'sans-serif'],
        dosis: ['Dosis', 'serif'],
      },
      colors: {
        primaryColor: '#c3002f',
        secondaryColor: '#222d35'
      },
    },
  },
  plugins: [require("daisyui")],

}

