/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/public/assets/desktop/bg-pattern-header.svg')",
        "hero-tablet": "url('/public/assets/tablet/bg-pattern-header.svg')",
        "hero-mobile": "url('/public/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
