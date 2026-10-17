import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFF", navy: "#FFFFFF", electric: "#145BDB", secondary: "#3478F6",
        cyan: "#00A9D6", silver: "#4B5563", muted: "#6B7280",
        heading: "#111827", line: "#DCE5F2", wash: "#EEF4FF",
        footer: "#101B32", "footer-text": "#C6D1E3",
      },
      fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-display)", "serif"] },
      boxShadow: {
        glow: "0 8px 24px -12px rgba(20,91,219,.45)",
        card: "0 12px 32px -18px rgba(17,24,39,.22)",
      },
    },
  },
  plugins: [],
};
export default config;
