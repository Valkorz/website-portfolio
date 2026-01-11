/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  plugins: [typography],
  vite: {
    plugins: [tailwindcss()],
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'steam-dark': '#171a21',    // Main Background
        'steam-gray': '#2a475e',    // Secondary panels
        'steam-blue': '#66c0f4',    // Links and highlights
        'steam-accent': '#c7d5e0',  // Text color
      },
      boxShadow: {
        '2xs': '0 6px 14px -8px rgba(0,0,0,1)',
      },
    },
  }
}