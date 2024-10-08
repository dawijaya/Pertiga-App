import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A752C",
        textprimary: "#FFFFA0",
        secondary: "#FFFFFF",
        accent: "#F4A300",
        netral: "#333333",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mons: ["Montserrat"],
        pops: ["Poppins"],
      },
    },
  },
  plugins: [],
};
export default config;
