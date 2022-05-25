module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs-xl': '1366px',
        'sm-xl': '1440px'

      },
      colors: {
        'gray-dark': '#222',
        'gray-light': '#999'
      },
    },
  },
  plugins: [],
}
