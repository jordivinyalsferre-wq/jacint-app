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
        primary: "#1A1A2E", // Fons principal
        secondary: "#2d3748", // Fons de targetes i elements
        accent: "#4a5568", // Vores i hovers
        highlight: "#E94560", // Botons i accions principals
        textPrimary: "#e2e8f0", // Text principal
        textSecondary: "#a0aec0", // Text secundari
      },
      boxShadow: {
        soft: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        deep: "0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
