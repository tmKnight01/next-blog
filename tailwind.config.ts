import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "custom-width": "calc(100% - 40px);",
      },
      colors: {
        "header-light": "hsla(0, 0%, 100%, .6)",
      },
      
      screens: {
        ml: "1000px",
      },
      borderColor:{
        "border-color": "hsla(0,0%,100%,.1)" 
      }
    },
  },
  plugins: [
    // require('@tailwindcss/transition')
  ],
};
export default config;
