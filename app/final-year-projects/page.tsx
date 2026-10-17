import { Breadcrumbs, Card, CtaBand, PageHero, Section, Tick } from "@/components/sections/Bits";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";

export const metadata = buildMetadata({
  title: "Final-Year Project Development",
  description: "Guidance for final-year software, AI/ML, IoT, embedded and VLSI projects: requirements, implementation, debugging, documentation and understanding.",
  path: "/final-year-projects",
});

const groups = [
  ["Software projects", ["Java full-stack", "React and Next.js", "Spring Boot", "Python", "PHP", "Database applications", "Cloud-based applications"]],
  ["AI and ML", ["Machine learning", "Computer vision", "Data analytics", "AI-powered prototypes"]],
  ["IoT and embedded systems", ["STM32", "Arduino-compatible development", "Sensors and actuators", "IoT dashboards", "Microcontroller projects", "Hardware-software integration"]],
  ["VLSI and digital design", ["Verilog", "SystemVerilog", "RTL design", "Digital logic design", "FPGA-based prototypes", "Simulation and waveform analysis", "Testbench development", "Open-source EDA flows where suitable"]],
] as const;

export default function FinalYear() {
  return (
    <>
      <PageHero eyebrow="For students" title="HAVE AN IDEA? LET'S BUILD YOUR PROJECT.">
        SBK Technologies can help with requirements, planning, implementation, debugging, documentation and technical understanding, so you can build, test and explain your own project with confidence.
      </PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Final-Year Projects", path: "/final-year-projects" }]} />
      <Section className="bg-white">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-line shadow-card"><SafeImage k="student" sizes="100vw" /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button external href={whatsappUrl(WA_MESSAGES.finalYear)}>Discuss your idea on WhatsApp</Button>
          <Button external variant="secondary" href={siteConfig.instagram}><Instagram size={16} /> Follow us on Instagram</Button>
        </div>
      </Section>
      <Section title="Project categories" className="bg-wash">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map(([t, items]) => <Card key={t} title={t}><ul className="mt-2 grid gap-1 sm:grid-cols-2">{items.map((i) => <li key={i}>• {i}</li>)}</ul></Card>)}
        </div>
      </Section>
      <Section title="What you can receive" className="bg-white">
        <Tick items={["Requirements document", "System architecture", "Source code", "Simulation or prototype", "Testing and debugging", "Documentation", "Project poster and presentation assistance", "Technical walkthrough", "Demonstration preparation"]} />
        <p className="mt-6 text-sm text-muted">Deliverables, timelines, software licences, hardware and pricing depend on the project you select. We confirm them with you before starting.</p>
      </Section>
      <Section title="Our approach to academic integrity" className="bg-wash">
        <p className="max-w-3xl text-silver">We encourage you to understand, test and explain every part of your project. We do not promise grades, fabricate results or help misrepresent work. Follow your institution&apos;s rules on external help, and be open with your guide about the support you use.</p>
      </Section>
      <CtaBand title="Tell us your project idea" text="Share your topic, branch and deadline, and we will discuss a realistic plan." message={WA_MESSAGES.finalYear} secondary={{ href: "/contact", label: "Enquiry form" }} />
    </>
  );
}
