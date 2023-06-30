module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
};
