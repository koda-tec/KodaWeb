// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tu nueva paleta de colores:
        'koda-blue-deep': '#003366',       // Azul Profundo (Inicio del degradado)
        'koda-blue-marino': '#0050A1',     // Azul Marino (Fin del degradado)
        'koda-green-emerald': '#1EAD4E',  // Verde Esmeralda (Acentos y botones)
        'koda-dark': '#333333',           // Negro/Gris Oscuro (Textos)
        'koda-gray-light': '#F5F5F5',      // Gris claro para el fondo de las tarjetas
      },
    },
  },
  plugins: [],
}
export default config