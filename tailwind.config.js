module.exports = {
  mode: "jit",
  purge: ["./views/*.ejs", "./views/*/*.ejs", "./views/*/*/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: { "1/5": "20%" },
      left: { "4/5": "80%" },
      right: { "1/5": "20%" },
      colors: {
        "main-green": "#d7e2e8",
      },
    },
  },
  variants: {
    extend: {
      // width: ["hover"],
      // visibility: ["hover", "focus", "responsive", "group-hover"],
      // padding: ["hover", "focus", "responsive", "group-hover"],
      // display: ["hover", "focus", "responsive", "group-hover"],
      // margin: ["hover", "focus", "responsive", "group-hover"],
      // transitionDuration: ["hover", "focus", "responsive", "group-hover"],
    },
  },
  plugins: [],
};
