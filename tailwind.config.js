/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        //light mode primary variant
        "primary-white-50": "#f7fdff",
        "primary-white-150": "#e4faff",
        "primary-white-200": "#d0f6ff",
        "primary-white-250": "#bcf2ff",
        "primary-white-300": "#a9eeff",
        "primary-white-350": "#95eaff",
        "primary-white-400": "#82e6ff",
        "primary-white-450": "#6ee2ff",
        "primary-white-500": "#5adeff",
        "primary-white-550": "#47daff",
        "primary-white-600": "#33d6ff",
        "primary-white-650": "#20d2ff",
        "primary-white-700": "#0cceff",

        //dark mode primary variant
        "primary-dark-50": "#00c6f7",
        "primary-dark-150": "#00b6e4",
        "primary-dark-200": "#00a6d0",
        "primary-dark-250": "#0097bc",
        "primary-dark-300": "#0087a9",
        "primary-dark-350": "#007795",
        "primary-dark-400": "#006882",
        "primary-dark-450": "#00586e",
        "primary-dark-500": "#00485a",
        "primary-dark-550": "#003947",
        "primary-dark-600": "#002933",
        "primary-dark-650": "#001920",
        "primary-dark-700": "#000a0c",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/forms"),
  ],
};
