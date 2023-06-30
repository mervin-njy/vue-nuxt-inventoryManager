module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
};
