/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            'zentry': ['Zentry', 'sans-serif'],
            'general': ['"General Sans"', 'sans-serif'],
            'circular-web': ['"Circular Web"', 'sans-serif'],
            'robert': ['Robert', 'sans-serif'],
            'robert-medium': ['"Robert Medium"', 'sans-serif']
        }
    },
  },
  plugins: [],
}
