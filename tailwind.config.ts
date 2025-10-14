// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  // La parte MÁS IMPORTANTE: define dónde buscar tus clases.
  // ¡Esto debe quedarse!
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // La sección 'theme' puede quedar completamente vacía, 
  // ya que ahora manejarás todo desde tu globals.css.
  theme: {
    extend: {},
  },

  plugins: [],
}
export default config