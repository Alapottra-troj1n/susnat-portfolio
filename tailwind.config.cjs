/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#FFC024',
        secondary: '#662E30',
  
      },
      backgroundImage: {
        'hero-photo': "url('/susnat-photo.jpg')",
      }
    },
    fontFamily: {
        'primary': 'Urbanist',
        'display': 'Philosopher',
        'hand': 'Covered By Your Grace'
    },
  
  },
  plugins: [],
}
