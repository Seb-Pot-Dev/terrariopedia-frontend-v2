/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: '#283618',
      },
    },
  },
  plugins: [],
}

