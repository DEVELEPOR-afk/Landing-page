/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        navy: {
          900: '#0A0E1F',
          800: '#1A1F35',
          700: '#2A3045',
        },
        violet: {
          500: '#6E3AD3',
          400: '#8C5DE3',
          300: '#A98FF0',
        },
        lavender: {
          500: '#B18CFF',
          400: '#C9B1FF',
          300: '#E1D5FF',
        },
        blue: {
          500: '#2CCCFF',
          400: '#5AD7FF',
          300: '#88E2FF',
        },
        // Accent colors
        pink: {
          500: '#FF2CED',
          400: '#FF5EF1',
          300: '#FF90F5',
        },
        mint: {
          500: '#36F0B0',
          400: '#6FF4C4',
          300: '#A7F8D9',
        },
        gold: {
          500: '#FFD700',
          400: '#FFDF33',
          300: '#FFE766',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6E3AD3 0%, #2CCCFF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF2CED 0%, #B18CFF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0E1F 0%, #1A1F35 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-clash-display)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-inter)', 'DM Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'Roboto Mono', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'feature': '24px',
      },
      boxShadow: {
        'glow': '0 8px 32px rgba(110, 58, 211, 0.25)',
        'card': '0 8px 32px rgba(10, 14, 31, 0.15)',
        'button': '0 4px 16px rgba(44, 204, 255, 0.3)',
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
}; 