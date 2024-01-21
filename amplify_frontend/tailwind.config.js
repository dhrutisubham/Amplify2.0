/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // this is used to create any custom class in our tailwind
      // in tailwind standard fontFamily class we are making custom class poppins with the following info
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      backgroundColor: {
        "app-black": "#121212",
      },
    },
  },
  plugins: [],
};
