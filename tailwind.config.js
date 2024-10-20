/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{php,html,js,md}", "!./node_modules/"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Urbanist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        nhs: "#005EB8",
      },
      keyframes: {
        ping_animation: {
          "75%, 100%": {
            transform: "scale(1.2)",
            opacity: "0",
          },
        },
      },
      animation: {
        ping: "ping_animation 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      nav: "900px",
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
