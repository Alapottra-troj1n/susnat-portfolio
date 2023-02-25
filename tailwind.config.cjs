/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#ffc300',
        secondary: '#fdfcdc',
  
      },
      backgroundImage: {
        'hero-photo': "url('/susnat-photo.jpg')",
      }
    },
    fontFamily: {
        'primary': 'Open Sans',
        'display': 'Lora'
    },
  
  },
  plugins: [],
}
