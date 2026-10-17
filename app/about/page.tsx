import { CtaBand, Card, PageHero, Section } from "@/components/sections/Bits";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "About SBK Technologies",
  description: "SBK Technologies builds websites, custom software and engineering solutions, and supports students with practical projects.",
  path: "/about",
});

const process = [
  ["Understand the requirement", "We listen first: your goals, users and constraints."],
  ["Define the scope", "We agree what will be built, and what will not, in plain language."],
  ["Plan the solution", "Architecture, screens and a realistic plan before code."],
  ["Develop the implementation", "Clean, maintainable code with regular progress updates."],
  ["Test and refine", "We test, fix and polish against the agreed scope."],
  ["Deliver and provide agreed support", "Handover, deployment help and the support we agreed up front."],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Technology built around your ideas">{siteConfig.description}</PageHero>
      <Section title="What we stand for" className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Our mission">To help businesses strengthen their digital presence and to help students build and genuinely understand practical software and engineering projects.</Card>
          <Card title="Digital transformation">We move manual or scattered work into reliable web and software systems, one practical step at a time.</Card>
          <Card title="Engineering project support">From software to embedded and VLSI work, we guide students through requirements, implementation, testing and explanation.</Card>
          <Card title="Quality and maintainability">Readable code, sensible structure and documentation so your solution can keep evolving.</Card>
          <Card title="Communication and planning">Clear scope, honest timelines and direct contact on WhatsApp.</Card>
          <Card title="Integrity">We do not promise guaranteed outcomes, rankings or grades. We aim for work you can understand and stand behind.</Card>
        </div>
      </Section>
      <Section title="Our six-stage process" className="bg-wash">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="text-sm font-semibold text-electric">Stage {i + 1}</span>
              <h3 className="mt-1 text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand title="Let's talk about your project" text="Tell us your idea and we will help you shape it." message={WA_MESSAGES.general} secondary={{ href: "/services", label: "View services" }} />
    </>
  );
}
