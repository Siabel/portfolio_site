import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a78bfa',
        secondary: '#e0d7f3',
        background: '#121212',
        text: '#f5f5f5',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: 
  [
    require('@tailwindcss/typography'),
  ],
}
export default config