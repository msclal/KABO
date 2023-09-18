/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        outfit: ["var(--font-outfit)"],
        magilio: ["var(--font-magilio)"],
        nevis: ["var(--font-nevis)"],
      },
      colors: {
        kabo: {
          gold: "#FEC430",
          gray: "#242424",
          black: "#1B1B1B",
          white: "#EDEAE1",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        // infiniteSlider: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": {
        //     transform: "translateX(calc(-250px * 15))",
        //   },
        // },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
