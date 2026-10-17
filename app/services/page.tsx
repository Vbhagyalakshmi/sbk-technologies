import Link from "next/link";
import { Breadcrumbs, CtaBand, PageHero, Section } from "@/components/sections/Bits";
import SafeImage from "@/components/ui/SafeImage";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Software Development Services",
  description: "Website development, custom software, e-commerce, mobile apps, AI, cloud and DevOps, SEO and UI/UX design from SBK Technologies.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Software and digital services for growing businesses">
        From a first business website to custom software and cloud deployment, we plan, build, test and support the solution you need.
      </PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <Section className="bg-white">
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:grid-cols-5">
              <div className="relative min-h-44 sm:col-span-2"><SafeImage k={s.image} sizes="(min-width:640px) 20vw, 100vw" /></div>
              <div className="p-6 sm:col-span-3">
                <h2 className="text-2xl font-bold"><Link href={`/services/${s.slug}`} className="hover:text-electric">{s.title}</Link></h2>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href={`/services/${s.slug}`} className="text-electric hover:underline">View details</Link>
                  <a href={whatsappUrl(s.message)} target="_blank" rel="noopener noreferrer" className="text-silver hover:text-electric">WhatsApp enquiry</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Not sure which service you need?" text="Tell us what you are trying to achieve and we will suggest a sensible starting point." message={WA_MESSAGES.general} secondary={{ href: "/contact", label: "Use the enquiry form" }} />
    </>
  );
}
