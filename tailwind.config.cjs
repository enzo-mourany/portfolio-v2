/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx,md}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.600'),
                textDecoration: 'underline',
              },
            },
            h1: {
              fontFamily: theme('fontFamily.sourceSerif'),
              fontWeight: theme('fontWeight.thin'),
              fontSize: theme('fontSize.2xl'),
              lineHeight: theme('lineHeight.tight'),
              letterSpacing: theme('letterSpacing.tight'),
              textTransform: 'uppercase',
              '@screen sm': {
                fontSize: theme('fontSize.4xl'),
              },
              '@screen md': {
                fontSize: theme('fontSize.5xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.6xl'),
              },
            },
            h2: {
              fontFamily: theme('fontFamily.sourceSerif'),
              fontWeight: theme('fontWeight.thin'),
              fontSize: theme('fontSize.xl'),
              lineHeight: theme('lineHeight.tight'),
              letterSpacing: theme('letterSpacing.medium'),
              textTransform: 'uppercase',
              '@screen sm': {
                fontSize: theme('fontSize.2xl'),
              },
              '@screen md': {
                fontSize: theme('fontSize.3xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.4xl'),
              },
            },
            h3: {
              fontFamily: theme('fontFamily.sourceSerif'),
              fontWeight: theme('fontWeight.thin'),
              fontSize: theme('fontSize.2xl'),
              lineHeight: theme('lineHeight.tight'),
              letterSpacing: theme('letterSpacing.tight'),
              textTransform: 'uppercase',
              '@screen sm': {
                fontSize: theme('fontSize.lg'),
              },
              '@screen md': {
                fontSize: theme('fontSize.5xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.2xl'),
              },
            },
            p: {
              fontWeight: theme('fontWeight.normal'),
              fontSize: theme('fontSize.sm'),
              lineHeight: theme('lineHeight.relaxed'),
              letterSpacing: theme('letterSpacing.wide'),
              textTransform: 'none',
              '@screen sm': {
                fontSize: theme('fontSize.base'),
              },
            },
          },
        },
      }),
    },
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
