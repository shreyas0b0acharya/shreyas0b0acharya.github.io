/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        darkBg: "#23272f",
        themeColor: 'rgb(79, 70, 229)',//'rgb(0, 255, 204)'
        grey:"rgb(74, 74, 74)"
        
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      screens: {
        sm: '800px',  
      },
    },
  },
  plugins: [],
}

