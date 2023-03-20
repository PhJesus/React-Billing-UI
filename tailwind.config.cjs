/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{tsx, html}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar': '20% minmax(0, 1fr) auto'
      }
    },
  },
  plugins: [],
}
