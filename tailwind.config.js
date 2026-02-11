/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: '#ADFFA6',
        melrose: '#B0A8FE',
        opalBlack: '#040404',
        opalDark: '#121212',
        opalGray: '#27272A',
        opalTextSecondary: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

