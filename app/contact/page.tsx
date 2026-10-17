import { Instagram, MessageCircle } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { Breadcrumbs, PageHero, Section } from "@/components/sections/Bits";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact & Enquiries",
  description: "Start a project with SBK Technologies. Enquire on WhatsApp, follow us on Instagram or use the enquiry form.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start a project with SBK Technologies">Tell us what you need. The fastest way to reach us is WhatsApp.</PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3"><EnquiryForm /></div>
          <aside className="space-y-4 lg:col-span-2">
            <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-electric">
              <MessageCircle className="text-[#25D366]" /><span><strong className="block text-heading">WhatsApp</strong><span className="text-sm text-muted">{siteConfig.whatsappDisplay}</span></span></a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-electric">
              <Instagram className="text-electric" /><span><strong className="block text-heading">Instagram</strong><span className="text-sm text-muted">@sbkt.echnologies</span></span></a>
            <p className="text-sm text-muted">Instagram links open our profile. Use its available contact options to message us.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
