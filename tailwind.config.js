module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './util/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        custom: 'var(--color)'
      },
      screens: {
        xs: '375px',
        lg: '1035px',
      },
      fontSize: {
        puny: ['0.5rem', '0.75rem'],
      },
      width: {
        '1/7': '14.2857143%',
        '1/15': '6.66666666667%',
        '2/15': '13.3333333333%'
      },
      height: {
        '1/15': '6.66666666667%',
        '2/15': '13.3333333333%',
        calendar: 'calc(80vw * (8 / 100))'
      },
      maxWidth: {
        '1/3': '33%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
        '3/4': '75%',
      },
      margin: {
        calendar: 'calc((80% - (7 * (80% / 7.5))) / 14)'
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      filter: ['hover'],
      fill: ['hover']
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
