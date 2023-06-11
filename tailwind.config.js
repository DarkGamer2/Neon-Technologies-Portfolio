/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lobster: ["lobster"],
        outfit: ["outfit"],
        spaceGrotesk: ["Space Grotesk"],
        vitaSans: ["Vita Sans"],
        SignikaNegative: "Signika Negative",
      },
    },
  },
  plugins: [],
};
