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
        'koda-blue': '#003366',      // Azul marino oscuro
        'koda-green': '#009933',     // Verde brillante para acentos y botones
        'koda-green-dark': '#006633', // Verde oscuro para el footer
        'koda-dark': '#333333',       // Texto principal
        'koda-gray-light': '#F5F5F5', // Fondo de tarjetas
      },
    },
  },
  plugins: [],
}
export default config