/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'system-ui']
      },
      colors: {
        primary: {
          cyan: 'hsl(179, 62%, 43%)',
          'bright-yellow': 'hsl(71, 73%, 54%)'
        },
        secondary: {
          'light-gray': 'hsl(204, 43%, 93%)',
          'gray-blue': 'hsl(218, 22%, 67%)'
        }
      }
    }
  },
  plugins: []
}
