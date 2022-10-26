const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondpage1-2': "url('/img/fondpage1-2.jpg')",
      },
      "colors": {
        "bleu": "#d0dfe4",

      },
      "fontFamily": {
        "playfair-display": "Playfair Display",
        "fasthand": "Fasthand"
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
