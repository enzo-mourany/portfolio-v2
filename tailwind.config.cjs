/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx,md}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      sourceSerif: ['Source Serif 4', 'serif'],
      cormorant: ['Cormorant Garamond', 'serif'],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '767px',
      lg: '1024px',
      xl: '1280px',
    },
    maxWidth: {
      '4/5': '80%',
      '3/4': '75%',
      '2/3': '66%',
      '1/2': '50%',
      '1/3': '33%',
      '1/4': '25%',
      '1/5': '20%',
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
