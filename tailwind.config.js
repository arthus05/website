/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "foreground-color": "var(--foreground-color)"
      },
      animation: {
        type: "typewriter 3.5s steps(40, end), blinkCaret .75s step-end infinite",
        caret: "blinkCaret .75s step-end infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "var(--foreground-color)" },
        },
      },
    },
  },
  plugins: [],
};
