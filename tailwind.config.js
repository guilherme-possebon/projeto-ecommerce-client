/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        HeaderGrid: 'repeat(1, .8fr 1.2fr)',
        NewProductsGrid: 'repeat(1, 1fr 1fr 1fr)'
      },
      colors: {
        primary: '#4c1d95'
      }
    }
  },
  plugins: []
}
