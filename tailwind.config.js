const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainColor: "#5F8670",
      secondColor: "#E3651D",
      thirdColor: "#607274",
    },
  },
  plugins: [],
});
