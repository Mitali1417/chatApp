/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6eeff",
        secondary: "#dcf7c5",
        green: "#3fe225",
        bgBlue: "#EFF3FD",
        btnBlue: "#4c82ef",
        grey: "#949494",
        medGrey: "#737373",
      },
    },
    screens: {
      xs: "240px",
      ss: "375px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    fontFamily: {
      Poppins: "Poppins, sans-serif",
    },
  },
  plugins: [],
};
