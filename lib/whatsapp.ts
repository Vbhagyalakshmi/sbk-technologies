import { siteConfig } from "./site-config";

/** Official click-to-chat URL with a safely encoded message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
}

export const WA_MESSAGES = {
  general: "Hi SBK Technologies, I would like to know more about your services.",
  hero: "Hi SBK Technologies, I would like to discuss a project.",
  website: "Hi SBK Technologies, I need a professional business website.",
  software: "Hi SBK Technologies, I would like to discuss a custom software project.",
  ecommerce: "Hi SBK Technologies, I need an e-commerce website.",
  mobile: "Hi SBK Technologies, I would like to discuss a mobile or web application.",
  ai: "Hi SBK Technologies, I would like to discuss an AI or automation project.",
  cloud: "Hi SBK Technologies, I need help with cloud deployment or DevOps.",
  seo: "Hi SBK Technologies, I would like to improve my website's search presence.",
  design: "Hi SBK Technologies, I need UI/UX or design help for my product.",
  finalYear: "Hi SBK Technologies, I have a final-year project idea.",
  vlsi: "Hi SBK Technologies, I need help with a VLSI project.",
} as const;
