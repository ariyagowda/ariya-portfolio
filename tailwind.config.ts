import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          background: "var(--color-background)",
          foreground: "var(--color-foreground)",
          primary: "var(--color-primary)",
          "primary-soft": "var(--color-primary-soft)",
          border: "var(--color-border)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        },
      },
      
  },
  plugins: [],
};

export default config;
