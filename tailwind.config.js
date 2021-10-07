const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["src/**/*.svelte"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "2160px",
      "4xl": "3000px",
      "5xl": "4096px"
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"]
      },
      colors: {
        gray: colors.trueGray,
        agrumes: "#FECF9A",
        rouges: "#FCB0BE",
        giger: "#90CF8E"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
