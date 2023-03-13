/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#FFA520',
        secondary: '#662E30',
  
      },
      backgroundImage: {
        'hero-photo': "url('/susnat-photo.jpg')",
      }
    },
    fontFamily: {
        'primary': 'Urbanist',
        'display': 'Philosopher',
        'hand': 'Dancing Script'
    },
  
  },
  plugins: [],
}
