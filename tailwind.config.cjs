/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#ee6c4d',
        secondary: '#fdfcdc',
  
      },
      backgroundImage: {
        'hero-photo': "url('/susnat-photo.jpg')",
      }
    },
    fontFamily: {
        'primary': 'Lato',
        'display': 'Playfair Display',
        'hand': 'Dancing Script'
    },
  
  },
  plugins: [],
}
