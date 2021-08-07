module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './util/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '375px',
        lg: '1035px',
      },
      fontSize: {
        puny: ['0.5rem', '0.75rem'],
      },
      maxWidth: {
        '1/3': '33%',
        '4/5': '80%',
      },
      minWidth: {
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      filter: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
