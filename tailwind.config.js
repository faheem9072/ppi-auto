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
          950: '#07080A',
          900: '#0C0D11',
          850: '#12141A',
          800: '#181B23',
          750: '#1F232D',
          700: '#2A2F3D',
          600: '#42495A',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F3EFEA',
          200: '#E7E1D8',
          300: '#D5CCC0',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
