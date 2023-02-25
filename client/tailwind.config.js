/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "inter, sans-serif"
        ],
        cardo: [
          "cardo, sans-serif"
        ]
      },
      colors: {
        'primary-blue': '#1b3764',
        "secondary-yellow": "#ffca42",
        "yellow-hover": "#ffca00",
        "border-img": "#DBE1E9",
        "white-2": "#F5F5F5"
      },
      boxShadow: {
        'light': '0 35px 60px -15px rgba(0, 0, 0, .4)',
      }
    }

  },
  plugins: [],
}