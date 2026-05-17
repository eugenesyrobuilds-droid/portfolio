import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0F1714",
          800: "#181818",
          700: "#2C3A33",
          500: "#6B7B72",
          400: "#8B9C92",
          300: "#9BA3A0",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          tint: "#F4F7F2",
          deep: "#E8EDE5",
          edge: "rgba(61, 107, 87, 0.10)",
        },
        accent: {
          50: "#EAF0EC",
          100: "#CFE0D7",
          400: "#5F9078",
          500: "#3D6B57",
          600: "#2E5544",
          700: "#1F3D30",
          glow: "rgba(61, 107, 87, 0.30)",
          border: "rgba(61, 107, 87, 0.08)",
        },
        success: {
          500: "#16A34A",
          50: "#ECFDF5",
        },
        warning: {
          500: "#D97706",
          50: "#FFFBEB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-sora)", "Sora", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Instrument Serif", "Georgia", "serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }],
        h1: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        h3: ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em", fontWeight: "600" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      maxWidth: {
        "prose-narrow": "38rem",
        "prose-wide": "52rem",
        container: "71.25rem",
      },
      spacing: {
        section: "6rem",
      },
      borderRadius: {
        pill: "68px",
        card: "24px",
        input: "12px",
        chip: "14px",
        soft: "16px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        soft: "0 2px 12px rgba(0,0,0,0.04)",
        pill: "0 2px 20px rgba(0,0,0,0.06)",
        glow: "0 4px 16px rgba(61,107,87,0.30)",
        modal: "0 24px 64px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, #C8D5CC 0%, #E4ECDF 28%, #FFFFFF 65%)",
        "accent-gradient":
          "linear-gradient(135deg, #3D6B57 0%, #5F9078 50%, #1F3D30 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
