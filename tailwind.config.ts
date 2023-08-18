import type { Config } from "tailwindcss";
import { Inter } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: { min: "0", max: "1050px" },
      md: { min: "1050px", max: "1280px" },
      lg: { min: "1280px" },
    },
    backgroundImage: (theme) => ({
      planeta_sm: "url('../public/planeta_sm.png')",
      planeta_md: "url('../public/planeta_md.png')",
      planeta_lg: "url('../public/planeta_lg.jpg')",
    }),
  },
  fontFamily: {
    helvetica: ["Helvetica"],
  },

  plugins: [],
};
export default config;
