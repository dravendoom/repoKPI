const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],

  variants: {
    overflow: ['responsive', 'hover', 'hidden'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '18xl': '18.75rem',
      },
      spacing: {
      '3/4': '75%',
      '1': '0.25rem',
      '64': '16rem',
      '96': '24rem',
      '128': '32rem',
      '144': '36rem',

      'p-5': '3rem',
      'p-12': '3rem',
      },
      height: {
        '3/4': '75%',
        '1': '0.25rem',
        '64': '16rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
  
        'p-5': '3rem',
        'p-12': '3rem',
        },
      inset: {
        '1/2': '50%'
      },

      },
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
