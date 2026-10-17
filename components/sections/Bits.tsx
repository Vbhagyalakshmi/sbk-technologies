import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-[#EAF2FF] via-white to-ink">
      <div className="absolute -top-24 right-0 size-96 rounded-full bg-electric/10 blur-[110px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">{eyebrow}</p>
        <h1 className="h-hero mt-4 max-w-4xl" style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)" }}>{title}</h1>
        {children && <div className="mt-5 max-w-3xl text-lg text-silver">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`py-14 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {title && <h2 className="h-section mb-8 max-w-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Card({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <h3 className="text-xl font-bold">{title}</h3>
      {children && <div className="mt-2 text-sm text-muted">{children}</div>}
    </div>
  );
}

export function CtaBand({ title, text, message, secondary }: { title: string; text: string; message: string; secondary?: { href: string; label: string } }) {
  return (
    <section className="border-y border-line bg-wash">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div><h2 className="h-section">{title}</h2><p className="mt-2 max-w-xl text-silver">{text}</p></div>
        <div className="flex flex-wrap gap-3">
          <Button external href={whatsappUrl(message)}>Enquire on WhatsApp</Button>
          {secondary && <Button variant="secondary" href={secondary.href}>{secondary.label}</Button>}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const ld = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })) };
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-muted sm:px-6">
        {items.map((it, i) => (
          <span key={it.path}>{i > 0 && " / "}{i < items.length - 1 ? <Link href={it.path} className="hover:text-electric">{it.name}</Link> : <span aria-current="page" className="text-heading">{it.name}</span>}</span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

export const Tick = ({ items }: { items: string[] }) => (
  <ul className="grid gap-3 sm:grid-cols-2">
    {items.map((t) => <li key={t} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm shadow-card"><span className="text-electric" aria-hidden>✓</span>{t}</li>)}
  </ul>
);
