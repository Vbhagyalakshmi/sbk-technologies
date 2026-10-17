import Link from "next/link";
import { Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import RemoteImage from "@/components/ui/RemoteImage";
import HeroCarousel from "@/components/home/HeroCarousel";
import { projects } from "@/lib/portfolio";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

export const metadata = {
  ...buildMetadata({
  title: "SBK Technologies | Software Development & Digital Solutions",
  description: "Website development, custom software, e-commerce and final-year project support from SBK Technologies.",
  path: "/",
  }),
  title: { absolute: "SBK Technologies | Software Development & Digital Solutions" },
};

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="h-section max-w-2xl">Services built around your business</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-electric/50">
              <div className="relative aspect-[16/10]"><SafeImage k={s.image} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" /></div>
              <div className="p-5">
                <h3 className="text-xl font-bold"><Link href={`/services/${s.slug}`} className="hover:text-electric">{s.title}</Link></h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <a href={whatsappUrl(s.message)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-electric hover:underline">Enquire on WhatsApp</a>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <section className="bg-wash">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="h-section">Featured project</h2>
        {projects.map((p) => (
          <article key={p.slug} className="mt-8 grid overflow-hidden rounded-2xl border border-line bg-white shadow-card md:grid-cols-2">
            <div className="relative aspect-[16/10]"><RemoteImage src={p.image} alt={p.imageAlt} sizes="(min-width:768px) 50vw, 100vw" /></div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric">{p.category}</p>
              <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3"><Button href={p.caseStudy}>Read case study</Button><Button external variant="secondary" href={p.liveUrl}>Visit website</Button></div>
            </div>
          </article>
        ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="h-section">Have a final-year project idea?</h2>
            <p className="mt-2 max-w-xl text-silver">We help with requirements, planning, implementation, debugging, documentation and understanding your project.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/final-year-projects">Explore Student Projects</Button>
            <Button external variant="secondary" href={siteConfig.instagram}><Instagram size={16} /> Follow us on Instagram</Button>
          </div>
        </div>
      </section>
    </>
  );
}
