/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both'
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '7%': { transform: 'translateX(1ch)' },
          '14%': { transform: 'translateX(2ch)' },
          '21%': { transform: 'translateX(3ch)' },
          '28%': { transform: 'translateX(4ch)' },
          '35%': { transform: 'translateX(5ch)' },
          '42%': { transform: 'translateX(6ch)' },
          '49%': { transform: 'translateX(7ch)' },
          '56%': { transform: 'translateX(8ch)' },
          '63%': { transform: 'translateX(9ch)' },
          '70%': { transform: 'translateX(10ch)' },
          '77%': { transform: 'translateX(11ch)' },
          '84%': { transform: 'translateX(12ch)' },
          '100%': { transform: 'translateX(14ch)' },
        },
      }
    },
  },
  plugins: [],
}
