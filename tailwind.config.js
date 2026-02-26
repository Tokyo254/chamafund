/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29a6c2',
        secondary: '#193480',
        border: '#dadada',
        third: '#29aecb',
        fourth: '#173381',
        heading: '#3e3e3e',
        body: '#626b7d',
        tertiaryText: '#999999',
        tertiaryBg: '#f6f7fa',
        foreground: '#000000',
        sectionShadow: '#00000029',
      },
      boxShadow: {
        'section': '0px 3px 6px #00000029',
      }
    },
  },
  plugins: [],
}