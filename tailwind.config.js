/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0A',
          card: '#121212',
          surface: '#1A1A1A',
          border: '#262626',
          muted: '#8E8E93',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0C15A',
          dark: '#A6831A',
          glow: 'rgba(201, 162, 39, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(201, 162, 39, 0.15)',
        'gold-glow-lg': '0 0 40px rgba(201, 162, 39, 0.25)',
      }
    },
  },
  plugins: [],
}
