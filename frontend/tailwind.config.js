/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#C9956C',
        blush: '#F2D4C8',
        cream: '#FDF6F0',
        plum: '#5C2D4E',
        champagne: '#EDD9A3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #F2D4C8 0%, #FDF6F0 50%, #EDD9A333 100%)',
      },
    },
  },
  plugins: [],
}
