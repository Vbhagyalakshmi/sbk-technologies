import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import RemoteImage from "@/components/ui/RemoteImage";
import HeroCarousel from "@/components/home/HeroCarousel";
import ServicesCarousel from "@/components/home/ServicesCarousel";
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
      <ServicesCarousel />

      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Why choose us</p>
            <h2 className="h-section mt-3">Technology built around practical business outcomes.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#DCE6F3] bg-[#F7FAFF] p-6 shadow-[0_14px_30px_-20px_rgba(16,33,61,0.18)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#2563EB]">Q</div>
              <h3 className="text-2xl font-semibold text-[#10213D]">Quality-first</h3>
              <p className="mt-3 text-sm leading-6 text-[#53647C]">Clear requirements, maintainable code, and honest communication throughout every project.</p>
            </div>
            <div className="rounded-3xl border border-[#DCE6F3] bg-[#F7FAFF] p-6 shadow-[0_14px_30px_-20px_rgba(16,33,61,0.18)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#2563EB]">C</div>
              <h3 className="text-2xl font-semibold text-[#10213D]">Creative thinking</h3>
              <p className="mt-3 text-sm leading-6 text-[#53647C]">We blend design, engineering, and business goals so the final product feels polished and useful.</p>
            </div>
            <div className="rounded-3xl border border-[#DCE6F3] bg-[#F7FAFF] p-6 shadow-[0_14px_30px_-20px_rgba(16,33,61,0.18)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#2563EB]">R</div>
              <h3 className="text-2xl font-semibold text-[#10213D]">Reliable delivery</h3>
              <p className="mt-3 text-sm leading-6 text-[#53647C]">From planning to deployment, we stay focused on practical outcomes and long-term maintainability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF4FF] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Featured project</p>
              <h2 className="h-section mt-3">Work that moves businesses forward.</h2>
            </div>
          </div>
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-[28px] border border-[#DCE6F3] bg-white shadow-[0_18px_36px_-24px_rgba(16,33,61,0.22)] md:grid md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7FAFF]">
                <RemoteImage src={project.image} alt={project.imageAlt} sizes="(min-width:768px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">{project.category}</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#10213D]">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#53647C]">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={project.caseStudy}>Read case study</Button>
                  <Button external variant="secondary" href={project.liveUrl}>View Project</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#DCE6F3] bg-[#FFFFFF] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Final-year projects</p>
            <h2 className="h-section mt-3">Have an idea for a final-year project?</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#53647C]">We help with requirements, planning, implementation, debugging, documentation, and technical understanding for software, AI, embedded, and VLSI projects.</p>
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
