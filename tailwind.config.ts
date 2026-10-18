import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // design system palette (mapped to existing semantic tokens)
        ink: "#F7FAFF", /* main background */
        navy: "#FFFFFF", /* white background */
        wash: "#EDF4FF", /* alternate section background */
        pale: "#EAF2FF",
        cyan: "#E6FAFF", /* light cyan accent */
        electric: "#2563EB", /* primary blue */
        secondary: "#38BDF8", /* electric/accent blue */
        heading: "#10213D", /* dark navy headings */
        silver: "#53647C", /* body text */
        muted: "#53647C",
        line: "#DCE6F3", /* borders */
        footer: "#E8EFF9",
        "footer-text": "#53647C",
      },
      fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-display)", "serif"] },
      boxShadow: {
        glow: "0 8px 24px -12px rgba(37,99,235,.30)",
        card: "0 12px 32px -18px rgba(16,33,61,.06)",
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(.2,.9,.2,1)'
      }
    },
  },
  plugins: [],
};
export default config;
