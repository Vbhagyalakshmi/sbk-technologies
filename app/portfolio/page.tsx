import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { Breadcrumbs, CtaBand, PageHero, Section } from "@/components/sections/Bits";
import { buildMetadata } from "@/lib/seo";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "Selected website and software projects from SBK Technologies, starting with Jhansi Automobiles Engineering Works.",
  path: "/portfolio",
});

export default function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Selected work">A growing collection of real projects. We only list details we can verify.</PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]} />
      <Section><PortfolioGrid /></Section>
      <CtaBand title="Want a website like this?" text="Tell us about your business and we will suggest the right approach." message={WA_MESSAGES.website} secondary={{ href: "/services/web-development", label: "Website development" }} />
    </>
  );
}
