/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        emlakText: "#15803d", 
        'my-bg': '#f0fdf4', // özel açık yeşil ton
        navbar: '#f0ece2',
        tas: '#dfd3c3',
        kahve: '#c7b198',
        lacivert: '#596e79',
      },
    },
  },
  plugins: [],
}

