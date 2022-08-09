/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transform: {
      flashTurn: 'scale(0.95) rotate(2360deg)',
    },
    extend: {
      fontFamily: {
        inter: "font-family: 'Inter', sans-serif",
      },
      colors: {
        button: '#0b60e9',
      },
    },
  },
  plugins: [],
};
