/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'steam-dark': '#171a21',    // Main Background
        'steam-gray': '#2a475e',    // Secondary panels
        'steam-blue': '#66c0f4',    // Links and highlights
        'steam-accent': '#c7d5e0',  // Text color
      },
    },
  },
  plugins: [],
}