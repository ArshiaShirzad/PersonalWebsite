module.exports = {
  darkMode: "class",
  content: [    './pages/**/*.{html,js}',"./index.html"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        120: "30rem",
        150: "40rem",
      },
      height: {
        84: "21rem",
        100: "26rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
