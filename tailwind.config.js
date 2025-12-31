/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue palette
        navy: {
          DEFAULT: '#1e3a8a',
          dark: '#172554',
          light: '#1e40af',
        },
        // Accent gold
        gold: {
          DEFAULT: '#c5a059',
        },
        // Background cream colors
        cream: {
          DEFAULT: '#f8f6f1',
          light: '#f9f7f2',
        },
      },
    },
  },
  plugins: [],
}