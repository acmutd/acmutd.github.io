module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './util/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': '375px'
    },
    maxWidth: {
      '1/3': '33%',
      '4/5': '80%'
    }
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
