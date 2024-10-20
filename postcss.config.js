module.exports = {
  parser: require("postcss-comment"),
  plugins: {
    cssnano: {},
    "postcss-import": {},
    "postcss-url": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
