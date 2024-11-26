import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: {
          min: "20em",
        },
        sm: {
          min: "32em",
        },
        md: {
          min: "48em",
        },
        lg: {
          min: "64em",
        },
        xl: {
          min: "74em",
        },
        "2xl": {
          min: "92em",
        },
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        purple: {
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
        },
        "neutral-dark": {
          100: "var(--neutral-dark-100)",
          200: "var(--neutral-dark-200)",
        },
        "semantic-red": {
          100: "var(--semantic-red-100)",
        },
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
export default config;
