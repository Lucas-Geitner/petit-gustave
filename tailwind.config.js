// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
        mono: ["Josefin Slab", ...defaultTheme.fontFamily.mono]
      },

    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
