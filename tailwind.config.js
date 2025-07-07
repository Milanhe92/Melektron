// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quantum-primary': '#6d28d9',
        'quantum-secondary': '#0ea5e9',
        'quantum-dark': '#0f172a',
      }
    },
  },
  plugins: [],
}