/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,html}'],
  theme: {
    extend: {
      colors: {
        'primary-300': '#aac9e7',
        'primary-500': '#95bce2',
        'primary-600': '#86a9cb',
        'primary-700': '#7796b4',
      },
      boxShadow: {
        'right-lg': '10px 0 15px -3px rgb(0,0,0,0.1), 4px 0 6px -4px rgb(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
