/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00E575',
          'green-dark': '#00B85C',
          'green-glow': 'rgba(0, 229, 117, 0.25)',
          'green-light': '#E8FDF2',
        },
        obsidian: {
          950: '#050505',
          900: '#070707',
          850: '#0E0F12',
          800: '#15171C',
          750: '#1C1F26',
          700: '#262A34',
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Inter', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
