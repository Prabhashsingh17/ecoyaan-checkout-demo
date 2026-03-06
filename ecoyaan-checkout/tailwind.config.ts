import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B815A",
          light: "#4CC9A6",
          dark: "#066144",
        },
      },
      boxShadow: {
        card: "0 10px 25px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

