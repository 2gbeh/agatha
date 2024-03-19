/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: "#dd0031",
        brand_light: "#dd0031",
        brand_dark: "#c3002f",
        accent: "#0d47a1",
        // dark
        dark_bg: "#303030",
        dark_text: "#fafafa",
        dark_btn_bg: "#444444",
        dark_btn_text: "#fafafa",
        dark_hypertext: "#39d0ff",
        // light
        light_aside_bg: "#f2f2f2",
        light_text: "#444444",
        light_btn_bg: "#f4f4f4",
        light_btn_text: "#f4f4f4",
        light_hypertext: "#1976d2",
      },
    },
  },
  plugins: [],
};
