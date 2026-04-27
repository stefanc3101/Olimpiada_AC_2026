/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#183C28",
        yellow: "#E9C65C",
        silver: "#BEBFC4",
        white: "#FFFFFF",
        black: "#040F0F",
        gray: "#838788",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
    screens: {
      sm: "400px",
      smd: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
