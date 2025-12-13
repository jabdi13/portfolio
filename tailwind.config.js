/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'powder': {
          50: '#e0f2ff',
          100: '#b9e5ff',
          200: '#7fcfff',
          300: '#47b9ff',
          400: '#00a8ff',
          500: '#007bc7',  // Main brand color
          600: '#0066a6',
          700: '#004f82',
          800: '#003d64',
          900: '#002742',
        },
        'gold': {
          400: '#ffc845',
          500: '#ffb612',  // Main gold
          600: '#e69a00',
        },
        'navy': '#002244',
      }
    },
  },
  plugins: [],
}
