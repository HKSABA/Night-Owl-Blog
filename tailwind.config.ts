import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./clientComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./blogs/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
export default config;
