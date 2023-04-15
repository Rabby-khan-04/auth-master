/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#67a7e0",
          secondary: "#f461c3",
          accent: "#9bd850",
          neutral: "#1A1A29",
          "base-100": "#ffffff",
          info: "#80B6F4",
          success: "#5EE898",
          warning: "#FAB20A",
          error: "#E55266",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
