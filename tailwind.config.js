const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondpage': "url('/img/fondpage1-2.jpg')",
      },
      "colors": {
        "bleu": "#d0dfe4",
        "blanc": "#ffffff",
        "gris": "#f5f5f5",
        "noir": "#000000",
        "bleuf": "#96acb5",
        "grisf": "#8f8f8f"

      },
      "fontFamily": {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "fasthand": ["Fasthand", "sans-serif"]
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
