import { Breadcrumbs, Card, CtaBand, PageHero, Section, Tick } from "@/components/sections/Bits";
import SafeImage from "@/components/ui/SafeImage";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { WA_MESSAGES } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";

export const metadata = buildMetadata({
  title: "VLSI & Embedded Systems Projects",
  description: "Support for Verilog, SystemVerilog, RTL, FPGA, STM32 and Arduino-compatible projects: design, simulation, testbenches and documentation.",
  path: "/vlsi-projects",
});

export default function Vlsi() {
  return (
    <>
      <PageHero eyebrow="VLSI & electronics" title="VLSI and embedded systems project support">
        Digital design, simulation and microcontroller projects, explained step by step so you understand what you build.
      </PageHero>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "VLSI Projects", path: "/vlsi-projects" }] } />
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-card"><SafeImage k="vlsi" sizes="(min-width:1024px) 50vw, 100vw" priority /></div>
          <div>
            <h2 className="h-section">Digital design</h2>
            <div className="mt-5"><Tick items={["Verilog", "SystemVerilog", "RTL design", "Digital logic design", "FPGA-based prototypes", "Simulation and waveform analysis", "Testbench development", "Open-source EDA flows where suitable"]} /></div>
            <div className="mt-6">
              <Button external variant="secondary" href={siteConfig.instagram}><Instagram size={16} /> Follow us on Instagram</Button>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Embedded and IoT" className="bg-wash">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Microcontrollers">STM32 and Arduino-compatible development, with sensors and actuators.</Card>
          <Card title="Hardware-software integration">Firmware and application layers working together.</Card>
          <Card title="IoT dashboards">Visualise sensor data through a web dashboard.</Card>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">Tools, licences, boards and pricing depend on your project. We aim to help you understand, simulate and explain your design, not to promise results or grades.</p>
      </Section>
      <CtaBand title="Need help with a VLSI project?" text="Share your topic and tools, and we will discuss the best way forward." message={WA_MESSAGES.vlsi} secondary={{ href: "/final-year-projects", label: "All student projects" }} />
    </>
  );
}
