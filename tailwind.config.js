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
        },
        colors: {
          blue:{
            50: '#DFDFF0',
            70: '#DFDFF2',
            100: '#F0F2FA',
            200: '#101010',
            300: '#4FB7DD',
          },
          violet: {
            300: '#5724FF',
          },
          yellow: {
            100: '#8E983F',
            300: '#EDFF66',
          }
        }
    },
  },
  plugins: [],
}
