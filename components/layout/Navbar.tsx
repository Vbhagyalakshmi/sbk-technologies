"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Instagram, Menu, X } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/final-year-projects", label: "Final-Year Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDd(false); setMobile(false); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  const close = () => { setDd(false); setMobile(false); };
  const item = "rounded px-3 py-2 text-sm text-heading transition-colors hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link href="/" onClick={close} aria-label="SBK Technologies home" className="shrink-0">
          <Image src="/branding/sbk-mark.png" alt="SBK Technologies" width={820} height={580} priority className="h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/" className={item}>Home</Link>
          <div ref={ddRef} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button type="button" aria-expanded={dd} aria-haspopup="true" onClick={() => setDd(!dd)} className={`${item} inline-flex items-center gap-1`}>
              Services <ChevronDown size={14} aria-hidden />
            </button>
            {dd && (
              <ul className="absolute left-0 top-full w-72 rounded-xl border border-line bg-white p-2 shadow-card">
                <li><Link href="/services" onClick={close} className="block rounded px-3 py-2 text-sm font-semibold text-electric hover:bg-wash">All services</Link></li>
                {services.map((s) => (
                  <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close} className="block rounded px-3 py-2 text-sm text-silver hover:bg-wash hover:text-electric">{s.title}</Link></li>
                ))}
              </ul>
            )}
          </div>
          {links.map((l) => <Link key={l.href} href={l.href} className={item}>{l.label}</Link>)}
        </div>

        <div className="flex items-center gap-2">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="SBK Technologies on Instagram" className="hidden rounded p-2 text-silver hover:text-electric sm:block"><Instagram size={20} /></a>
          <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
             className="hidden min-h-11 items-center rounded-full bg-electric px-5 text-sm font-semibold text-white shadow-glow hover:bg-[#114fbe] sm:inline-flex">Start a Project</a>
          <button type="button" className="rounded p-2 text-heading hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric lg:hidden" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile ? "Close menu" : "Open menu"} onClick={() => setMobile(!mobile)}>
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div id="mobile-menu" className="max-h-[80vh] overflow-y-auto border-t border-line bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            <li><Link href="/" onClick={close} className="block rounded px-3 py-3 text-heading hover:text-electric">Home</Link></li>
            <li><Link href="/services" onClick={close} className="block rounded px-3 py-3 font-semibold text-electric">Services</Link>
              <ul className="ml-3 border-l border-line">
                {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close} className="block px-4 py-2 text-sm text-muted hover:text-electric">{s.title}</Link></li>)}
              </ul></li>
            {links.map((l) => <li key={l.href}><Link href={l.href} onClick={close} className="block rounded px-3 py-3 text-heading hover:text-electric">{l.label}</Link></li>)}
            <li className="pt-2"><a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center rounded-full bg-electric text-sm font-semibold text-white">Start a Project</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
