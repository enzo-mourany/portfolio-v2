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
  },
  plugins: [require('@tailwindcss/typography'),],
};
