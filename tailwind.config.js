/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#183690', // Azul principal
          light: '#3553b3',  // Azul claro
          dark: '#0f1e4d',   // Azul escuro
        },
        secondary: {
          DEFAULT: '#06b6d4', // Ciano para destaques
          dark: '#0891b2',
        },
        tertiary: {
          DEFAULT: '#1FCB8C',
          dark: '#006E46',
        },  
        backgroundPrimary: {
          DEFAULT: '#183690', // Azul principal
          light: '#3553b3',
          dark: '#0f1e4d',
        },
        backgroundSecondary: {
          DEFAULT: '#f8fafc', // Fundo claro
          dark: '#0f172a',    // Fundo escuro
        },
        surface: {
          DEFAULT: '#ffffff', // Cartões, áreas elevadas
          dark: '#1e293b',
        },
        text: {
          DEFAULT: '#1e293b', // Texto principal
          light: '#e2e8f0',   // Texto claro
        },
        border: {
          DEFAULT: '#cbd5e1', // Bordas
          dark: '#334155',
        },
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom 4s linear infinite alternate',
        'star-movement-top': 'star-movement-top 4s linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}; 