module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: theme => ({
        'background': ""

      }),
      zIndex: {
        '-20': '-20',
        '-10': '-10',
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        'auto': 'auto',
      }
    },
    screen: {
      // => uses this device with the property and upper
      'xs': '799px',
      'sm': '640px',
      // => @media (min-width: 768px) {}
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px'
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],

}
