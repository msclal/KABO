/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["var(--font-outfit)"],
        magilio: ["var(--font-magilio)"],
        nevis: ["var(--font-nevis)"],
      },
      colors: {
        kabo: {
          gold: "#FEC430",
          gray: "#242424",
          black: "#1B1B1B",
          offWhite: "#EDEAE1",
        },
      },
    },
  },
  plugins: [],
};
