/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx,md}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.black'),
              textDecoration: theme('textDecoration.underline'),
              '&:hover': {
                color: theme('colors.blue.600'),
                textDecoration: 'none',
              },
            },
            h1: {
              color: theme('colors.blue'),
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
              color: theme('colors.blue'),
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
              color: theme('colors.blue'),
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
              color: theme('colors.black'),
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
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'w-xxs': '1vw',
      'w-xs': '2vw',
      'w-s': '3vw',
      'w-base': '4vw',
      'w-sm': '5vw',
      'w-lg': '6vw',
      'w-xl': '8vw',
      'w-2xl': '9vw',
      'w-3xl': '10vw',
      'w-4xl': '11vw',
    },
    lineHeight: {
      none: '1',
      tight: '1.15',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '767px',
      lg: '980px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
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
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#EFEBE4',
      gray: {
        50: '#f9fafb',
        100: '#E9E4DC',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
      },
      blue: '#5160F0',
      cyan: '#0095e7',
      red: '#ff005d',
      purple: '#c238ff',
      pink: '#cea9f3',
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
