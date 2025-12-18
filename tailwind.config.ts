import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        border: "var(--color-border)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(2rem, 4vw + 1rem, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(1.75rem, 3vw + 1rem, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2vw + 1rem, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "clamp(1.25rem, 1.5vw + 1rem, 1.875rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

