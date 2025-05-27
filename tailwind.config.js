/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html" // optional if you reference Tailwind in public templates
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
