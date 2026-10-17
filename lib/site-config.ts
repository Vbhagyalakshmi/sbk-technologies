import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
});

const env = envSchema.parse({ NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined });

export const siteConfig = {
  name: "SBK Technologies",
  tagline: "Your Ideas. Our Technology. Digital Success.",
  description:
    "SBK Technologies builds modern websites, custom software, e-commerce platforms, business applications, and innovative engineering solutions. We help businesses strengthen their digital presence and support students in developing and understanding practical software and engineering projects.",
  // Single source of truth for the canonical origin.
  url: env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, ""),
  whatsappNumber: "917842206331",
  whatsappDisplay: "+91 78422 06331",
  instagram: "https://www.instagram.com/sbkt.echnologies/",
  portfolioSite: "https://www.jhansiengineeringworks.in/",
  ogImage: "/branding/og-image.png",
} as const;

export const absoluteUrl = (path = "/") => `${siteConfig.url}${path === "/" ? "" : path}`;
