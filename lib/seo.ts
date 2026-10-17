import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

export function buildMetadata(o: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(o.path);
  return {
    title: o.title,
    description: o.description,
    alternates: { canonical: url },
    openGraph: { title: o.title, description: o.description, url, siteName: siteConfig.name,
      images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630, alt: "SBK Technologies logo" }], type: "website" },
    twitter: { card: "summary_large_image", title: o.title, description: o.description, images: [absoluteUrl(siteConfig.ogImage)] },
    robots: { index: true, follow: true },
  };
}
