import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const body = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400", "600"], display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "SBK Technologies | Software Development & Digital Solutions", template: "%s | SBK Technologies" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { siteName: siteConfig.name, type: "website", url: siteConfig.url,
    title: "SBK Technologies | Software Development & Digital Solutions", description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "SBK Technologies logo" }] },
  twitter: { card: "summary_large_image", images: [siteConfig.ogImage] },
};
export const viewport: Viewport = { themeColor: "#F8FAFF", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: absoluteUrl("/branding/sbk-mark.png"),
      description: siteConfig.description, sameAs: [siteConfig.instagram] },
    { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-electric focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
