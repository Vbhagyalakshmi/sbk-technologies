import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer text-footer-text">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/branding/sbk-mark.png" alt="SBK Technologies" width={820} height={580} className="h-20 w-auto" />
          <p className="mt-4 text-sm text-footer-text">{siteConfig.tagline}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-footer-text">
            {services.map((s) => <li key={s.slug}><Link className="hover:text-secondary" href={`/services/${s.slug}`}>{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-3 space-y-2 text-sm text-footer-text">
            {[["/about","About"],["/portfolio","Portfolio"],["/final-year-projects","Final-Year Projects"],["/vlsi-projects","VLSI Projects"],["/contact","Contact"],["/privacy-policy","Privacy Policy"]].map(([h,l]) =>
              <li key={h}><Link className="hover:text-secondary" href={h}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Talk to us</h2>
          <div className="mt-3 flex flex-col gap-3 text-sm">
            <a className="inline-flex items-center gap-2 text-footer-text hover:text-secondary" href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp {siteConfig.whatsappDisplay}</a>
            <a className="inline-flex items-center gap-2 text-footer-text hover:text-secondary" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Follow us on Instagram</a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-footer-text">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
