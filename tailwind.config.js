/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'hsl(259, 100%, 65%)',
        },
        secondary: {
          400: 'hsl(0, 100%, 67%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 94%)',
          200: 'hsl(0, 0%, 86%)',
          500: 'hsl(0, 1%, 44%)',
        },
        white: 'hsl(0, 100%, 100%)',
        black: 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}