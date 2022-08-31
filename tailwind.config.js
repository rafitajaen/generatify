/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "surface-overlay": "#1f2d40",
        "surface-back": "#17212f",
        "surface-card": "#1f2d40",
        "surface-card-hover": "#304562",
        "surface-primary": "#BA68C8",
        "surface-accent": "#fa2862",
      },
    },
  },
  plugins: [],
};
