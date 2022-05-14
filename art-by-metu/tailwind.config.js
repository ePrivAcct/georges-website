module.exports = {
  // mode: 'jit',
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*liquid"
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway:["raleway"]
      }
    },
  },
  plugins: [],
};
