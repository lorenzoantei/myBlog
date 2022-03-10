module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        lato: ["lato", "sans-serif"],
      },

      animation: {
        fadeout: 'fadeOut 2s ease-in-out',
        fadein: 'fadeIn 10s ease-in-out'
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.white') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        fadeIn: {
          '100%': { backgroundColor: theme('colors.transparent') },
          '0%': { backgroundColor: theme('colors.white.300') },
        },
      }),

    }
  },
  variants: {},
  plugins: [],
}