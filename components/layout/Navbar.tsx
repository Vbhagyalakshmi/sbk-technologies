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
    const onDoc = (event: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(event.target as Node)) setDd(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDd(false);
        setMobile(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setDd(false);
    setMobile(false);
  };

  const item = "rounded-full px-3 py-2 text-sm font-medium text-[#10213D] transition-all duration-200 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE6F3] bg-white/85 shadow-[0_8px_24px_rgba(37,99,235,0.06)] backdrop-blur-xl">
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
              <ul className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-[#DCE6F3] bg-white p-2 shadow-[0_18px_45px_-24px_rgba(16,33,61,0.28)]">
                <li><Link href="/services" onClick={close} className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#2563EB] hover:bg-[#EDF4FF]">All services</Link></li>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} onClick={close} className="block rounded-xl px-3 py-2 text-sm text-[#53647C] hover:bg-[#EDF4FF] hover:text-[#2563EB]">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={item}>{link.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="SBK Technologies on Instagram" className="hidden rounded-full p-2 text-[#53647C] transition-colors hover:text-[#2563EB] sm:block">
            <Instagram size={18} />
          </a>
          <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center rounded-full bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-[0_18px_35px_-18px_rgba(37,99,235,0.8)] transition-colors hover:bg-[#1d4fd1] sm:inline-flex">
            Start a Project
          </a>
          <button type="button" className="rounded-full p-2 text-[#10213D] transition-colors hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] lg:hidden" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMobile(!mobile)}>
            {mobile ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div id="mobile-menu" className="border-t border-[#DCE6F3] bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            <li><Link href="/" onClick={close} className="block rounded-xl px-3 py-3 text-[#10213D] hover:bg-[#EDF4FF] hover:text-[#2563EB]">Home</Link></li>
            <li>
              <Link href="/services" onClick={close} className="block rounded-xl px-3 py-3 font-semibold text-[#2563EB] hover:bg-[#EDF4FF]">Services</Link>
              <ul className="ml-3 mt-1 border-l border-[#DCE6F3] pl-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} onClick={close} className="block px-3 py-2 text-sm text-[#53647C] hover:text-[#2563EB]">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            {links.map((link) => (
              <li key={link.href}><Link href={link.href} onClick={close} className="block rounded-xl px-3 py-3 text-[#10213D] hover:bg-[#EDF4FF] hover:text-[#2563EB]">{link.label}</Link></li>
            ))}
            <li className="pt-2">
              <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center rounded-full bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-[0_18px_35px_-18px_rgba(37,99,235,0.8)]">Start a Project</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
