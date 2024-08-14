/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Blue: {
          light: "#E6EDFF",
          medium: "#7C8DB5",
          dark: "#347AE2",
        },
        Red: {
          primary: "#FF3B30",
        },
        Green: {
          primary: "#34C759",
        },
        Orange: {
          primary: "#FF9500",
        },
      },
      boxShadow: {
        customLight: "0 2px 4px rgba(0, 0, 0, 0.1)",
        customDark: "0 2px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
