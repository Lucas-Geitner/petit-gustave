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
      colors: {
        "lavande-100": "#E6DFEC",
        "lavande-200": "#D9CFE2",
        "lavande-300": "#CCBED8",
        "lavande-400": "#C0AFCF",
        "lavande-500": "#B49FC6",
        "lavande-600": "#A78FBC",
        "lavande-700": "#9B80B2",
        "lavande-800": "#8E70A9",
        "lavande-900": "#82609F",
        "bles-100": "#FFF3CC",
        "bles-200": "#FFEDB3",
        "bles-300": "#FFE48B",
        "bles-400": "#FFD54C",
        "bles-500": "#FFD033",
        "bles-600": "#FFC300",
        "bles-700": "#E5AF00",
        "bles-800": "#CC9C00",
        "bles-900": "#997500",
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
