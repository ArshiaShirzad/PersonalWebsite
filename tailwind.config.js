module.exports = {
  darkMode: "class",
  content: [
    "./src//partials/Header.html",
    "./src/partials/Footer.html",
    "./src/Home.html",
    "./src/Login.html",
    "./src/Verification.html",
    "./src/NumberEnter.html",
    "./src/ProductPage.html",
    "./src/404.html",
  ],
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
