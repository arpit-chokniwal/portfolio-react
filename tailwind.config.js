/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lock-background': "url('/public/lockPageBgImage.jpg')",
      }
    },
  },
  plugins: [],
}

