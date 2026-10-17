import { PageHero, Section } from "@/components/sections/Bits";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SBK Technologies handles information when you use this website, WhatsApp and Instagram links.",
  path: "/privacy-policy",
});

const blocks: [string, string][] = [
  ["What we collect", "This website does not store the details you type into the enquiry form. The form only prepares a message that you can send yourself on WhatsApp. If we later add server-side storage, this policy will be updated before it starts."],
  ["WhatsApp and Instagram", `Links open WhatsApp (${siteConfig.whatsappDisplay}) or our Instagram profile. Once you leave this site, those services' own terms and privacy policies apply. A message is only delivered when you press Send in WhatsApp.`],
  ["Cookies and analytics", "We do not currently add advertising cookies. If analytics are added, we will describe them here."],
  ["Third-party content", "Some photographs are loaded from Unsplash, and the portfolio shows images from the public website of a featured project."],
  ["Your choices", "Contact us on WhatsApp to ask questions about information you have shared with us or to ask us to delete it."],
  ["Updates", "Last updated: October 2026. We may revise this policy and will update the date."],
];

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section className="bg-white"><div className="max-w-3xl space-y-8">{blocks.map(([t, d]) => <div key={t}><h2 className="text-2xl font-bold">{t}</h2><p className="mt-2 text-silver">{d}</p></div>)}</div></Section>
    </>
  );
}
