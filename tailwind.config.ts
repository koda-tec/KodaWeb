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
        'koda-blue-deep': '#003366',
        'koda-blue-marino': '#0050A1',
        'koda-green-emerald': '#1EAD4E',
        'koda-dark': '#333333',
        'koda-gray-light': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
export default config