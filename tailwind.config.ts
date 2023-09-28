import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentsDashborad/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
          '3xl':'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
      },
      width: {
        sideBarOpen: "15rem",
        sideBarClose: "5rem",
      },
      margin: {
        sideBarOpen: "15rem",
        sideBarClose: "5rem",
      },
      colors: {
        primary: {
          100: "#569f0d",
          500: "#396a08",
          900: "#1c3504",
        },
      },
    },
  },
  plugins: [],
};
export default config;
