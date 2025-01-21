/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ccn: {
          mint: '#80FD9E',
          dark: '#000000',
          gray: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};