import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, PageHero, Section, Tick } from "@/components/sections/Bits";
import SafeImage from "@/components/ui/SafeImage";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return buildMetadata({ title: s.title, description: s.short, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const ld = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.short,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, url: absoluteUrl(`/services/${s.slug}`) };
  return (
    <>
      <PageHero eyebrow="Service" title={s.title}>{s.intro}</PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]} />
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-card"><SafeImage k={s.image} sizes="(min-width:1024px) 50vw, 100vw" priority /></div>
          <div>
            <h2 className="h-section">Why it matters</h2>
            <ul className="mt-5 space-y-3">{s.benefits.map((b) => <li key={b} className="flex gap-3"><span className="text-electric" aria-hidden>✓</span>{b}</li>)}</ul>
            <div className="mt-8"><Button external href={whatsappUrl(s.message)}>Enquire on WhatsApp</Button></div>
          </div>
        </div>
      </Section>
      <Section title="What we deliver" className="bg-wash"><Tick items={s.offers} />
        <p className="mt-6 text-sm text-muted">Deliverables, timelines, third-party licences and pricing depend on your project. We confirm them with you before work begins.</p>
      </Section>
      <Section title="Frequently asked questions" className="bg-white">
        <dl className="grid gap-4 md:grid-cols-2">
          {s.faqs.map((f) => <div key={f.q} className="rounded-2xl border border-line bg-white p-6 shadow-card"><dt className="font-bold text-heading">{f.q}</dt><dd className="mt-2 text-sm text-muted">{f.a}</dd></div>)}
        </dl>
      </Section>
      <CtaBand title={`Discuss ${s.title.toLowerCase()}`} text="Send us a message on WhatsApp or use the enquiry form." message={s.message} secondary={{ href: "/contact", label: "Enquiry form" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
