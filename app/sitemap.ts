import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") =>
    ({ url: absoluteUrl(path), lastModified: now, changeFrequency, priority });
  return [
    entry("/", 1, "weekly"),
    entry("/about", 0.7), entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry("/portfolio", 0.8), entry("/portfolio/jhansi-engineering-works", 0.6),
    entry("/final-year-projects", 0.8), entry("/vlsi-projects", 0.7),
    entry("/contact", 0.8), entry("/privacy-policy", 0.3, "yearly"),
  ];
}
