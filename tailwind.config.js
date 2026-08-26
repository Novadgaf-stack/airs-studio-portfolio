/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#131C48',
          ivory: '#FFF8EB',
          gold: '#996527'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
