import Button from "@/components/ui/Button";
import RemoteImage from "@/components/ui/RemoteImage";
import { Breadcrumbs, Card, CtaBand, PageHero, Section, Tick } from "@/components/sections/Bits";
import { projects } from "@/lib/portfolio";
import { buildMetadata } from "@/lib/seo";
import { WA_MESSAGES } from "@/lib/whatsapp";

const p = projects[0];
const site = (path: string) => `https://www.jhansiengineeringworks.in/images/workshop/${path}`;

export const metadata = buildMetadata({
  title: "Case Study: Jhansi Automobiles Engineering Works",
  description: "A business website for an automobile service and engineering workshop in Visakhapatnam: services, workshop gallery and service booking.",
  path: p.caseStudy,
});

const services = ["General Car Service", "Engine Diagnostics", "Engine Repair", "Brake Service", "Suspension & Steering", "AC & Climate Service", "Electrical & Battery", "Periodic Maintenance", "Mechanical Engineering", "Vehicle Inspection"];
const steps = ["Vehicle inspection", "Diagnosis", "Service discussion", "Repair / maintenance", "Quality check", "Vehicle delivery"];

export default function Jhansi() {
  return (
    <>
      <PageHero eyebrow="Case study · Business website" title="Jhansi Automobiles Engineering Works">
        An automobile service and engineering workshop in Visakhapatnam, Andhra Pradesh, presenting its services and workshop online.
      </PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }, { name: "Jhansi Automobiles Engineering Works", path: p.caseStudy }]} />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-card"><RemoteImage src={p.image} alt={p.imageAlt} sizes="(min-width:1024px) 50vw, 100vw" priority /></div>
          <div>
            <h2 className="h-section">Project overview</h2>
            <p className="mt-4 text-silver">The website presents a workshop that states 30+ years of automotive experience, with a focus on Mitsubishi Pajero, Pajero Sport and modern-generation vehicles. Visitors can see the services, workshop photos and opening hours, and can book a service by WhatsApp or call.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button external href={p.liveUrl}>Visit the live website</Button>
              <Button variant="secondary" href="/contact">Discuss a similar website</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="What the website presents" className="bg-wash">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Clear site structure">Home, About, Services, Workshop, Gallery and Contact pages, each reachable from the main navigation.</Card>
          <Card title="Easy booking">A &quot;Book a Service&quot; button opens WhatsApp with a prefilled message, and a Call Now option dials the workshop directly.</Card>
          <Card title="Visitor information">Workshop address in Visakhapatnam, opening hours (Monday to Saturday, 9:00 AM to 8:00 PM; Sunday closed) and a map link.</Card>
        </div>
      </Section>

      <Section title="Services listed on the website"><Tick items={services} /></Section>

      <Section title="Service process shown to customers" className="bg-white">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => <li key={s} className="rounded-xl border border-line bg-white px-4 py-3 text-sm shadow-card"><span className="mr-2 font-semibold text-electric">{String(i + 1).padStart(2, "0")}</span>{s}</li>)}
        </ol>
      </Section>

      <Section title="Workshop gallery" className="bg-wash">
        <div className="grid gap-4 sm:grid-cols-3">
          {[["workshop-interior.webp", "Inside the Jhansi Automobiles workshop"], ["workshop-vehicles.webp", "SUVs inside the workshop"], ["service-bay.webp", "A service bay at the workshop"]].map(([f, alt]) => (
            <div key={f} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line shadow-card"><RemoteImage src={site(f)} alt={alt} sizes="(min-width:640px) 33vw, 100vw" /></div>
          ))}
        </div>
      </Section>

      <Section title="Search and sharing features visible on the site" className="bg-white">
        <Tick items={["Descriptive page title and meta description", "Canonical URL set to the www address", "Open Graph and Twitter card metadata with a preview image", "Indian English locale (en_IN)", "Skip-to-content link for keyboard users", "Mobile viewport configuration"]} />
        <p className="mt-6 text-sm text-muted">Information on this page is taken from the public website. We do not publish technology or delivery details we have not confirmed.</p>
      </Section>

      <CtaBand title="Need a website for your business?" text="Tell us about your services and customers, and we will plan a site that makes it easy to get in touch." message={WA_MESSAGES.website} secondary={{ href: "/services/web-development", label: "Website development" }} />
    </>
  );
}
