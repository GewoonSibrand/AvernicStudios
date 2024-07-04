/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#B29577',
        darkbrown: '#821113',
        darkred: '#AB0000',
        redbrown: '#AC3834',
      },
      animation: {
        spinny: 'spinny 6s ease infinite;',
      },
      keyframes: {
        spinny: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(1440deg)',
          },
          '50.1%': {
            transform: 'rotate(0deg)',
          }
        },
      }
    },
  },
  plugins: [],
};