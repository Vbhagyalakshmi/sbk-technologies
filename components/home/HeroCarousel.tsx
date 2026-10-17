"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Cpu, Layers3, LayoutDashboard, MonitorSmartphone, Sparkles } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

const slides = [
  {
    eyebrow: "Digital transformation",
    title: ["Transform Your Ideas", "Into Digital Success."],
    description: "Build a powerful online presence with modern websites, custom software, and digital solutions designed to help your business grow.",
    primary: "Start Your Project",
    primaryHref: "https://wa.me/917842206331?text=Hi%20SBK%20Technologies%2C%20I%20need%20digital%20solutions%20for%20my%20business.",
    secondary: "Explore Our Services",
    secondaryHref: "/services",
    visual: "brand",
    visualLabel: "SBK Technologies digital transformation",
  },
  {
    eyebrow: "Software development",
    title: ["Smart Software.", "Powerful Possibilities."],
    description: "From business applications and billing systems to e-commerce platforms and custom web solutions, we develop software around your requirements.",
    primary: "Discuss a Software Project",
    primaryHref: "https://wa.me/917842206331?text=Hi%20SBK%20Technologies%2C%20I%20want%20to%20discuss%20a%20software%20project.",
    secondary: "View Portfolio",
    secondaryHref: "/portfolio",
    visual: "software",
    visualLabel: "A software development dashboard",
  },
  {
    eyebrow: "Final-year projects",
    title: ["Have a Project Idea?", "Let’s Build It."],
    description: "Get development support for software, AI/ML, IoT, embedded systems, and VLSI projects—with implementation, testing, documentation, and technical guidance.",
    primary: "Discuss Your Project Idea",
    primaryHref: "https://wa.me/917842206331?text=Hi%20SBK%20Technologies%2C%20I%20have%20a%20final-year%20project%20idea.",
    secondary: "Explore Project Services",
    secondaryHref: "/final-year-projects",
    visual: "engineering",
    visualLabel: "An electronic circuit board for engineering projects",
  },
  {
    eyebrow: "Business websites",
    title: ["Make Your Business", "Stand Out Online."],
    description: "Create a professional digital presence with responsive websites, engaging user experiences, SEO-ready pages, and reliable deployment.",
    primary: "Build My Website",
    primaryHref: "https://wa.me/917842206331?text=Hi%20SBK%20Technologies%2C%20I%20need%20a%20professional%20business%20website.",
    secondary: "See Our Work",
    secondaryHref: "/portfolio",
    visual: "web",
    visualLabel: "A modern website design workspace",
  },
] as const;

const textVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" as const } },
};

function HeroVisual({ visual, label }: { visual: (typeof slides)[number]["visual"]; label: string }) {
  if (visual === "brand") {
    return (
      <div className="hero-visual hero-visual-brand" role="img" aria-label={label}>
        <div className="hero-brand-glow" />
        <div className="hero-brand-ring hero-brand-ring-one" />
        <div className="hero-brand-ring hero-brand-ring-two" />
        <div className="hero-brand-cube hero-brand-cube-one" />
        <div className="hero-brand-cube hero-brand-cube-two" />
        <Image src="/branding/sbk-mark.png" alt="" width={820} height={580} priority className="hero-brand-logo" />
        <span className="hero-float-chip hero-brand-chip"><Sparkles size={16} /> Digital solutions</span>
        <span className="hero-float-chip hero-brand-chip-secondary"><Layers3 size={16} /> Built for growth</span>
      </div>
    );
  }

  const image = visual === "engineering" ? "vlsi" : visual === "web" ? "web" : "software";

  return (
    <div className={`hero-visual hero-visual-${visual}`} role="img" aria-label={label}>
      <div className="hero-visual-glow" />
      <div className="hero-visual-image">
        <SafeImage k={image} sizes="(min-width:1024px) 48vw, 100vw" />
      </div>
      {visual === "software" && (
        <>
          <div className="hero-ui-card hero-dashboard">
            <div className="hero-ui-top"><span /><span /><span /><b>Project overview</b></div>
            <div className="hero-ui-dashboard">
              <div className="hero-ui-sidebar"><i /><i /><i /></div>
              <div className="hero-ui-content"><b /><b /><div /><div /><div /></div>
            </div>
            <span className="hero-ui-caption"><LayoutDashboard size={16} /> Business software</span>
          </div>
          <div className="hero-float-chip hero-software-chip"><Code2 size={16} /> Custom built</div>
        </>
      )}
      {visual === "engineering" && (
        <>
          <svg className="hero-waveform" viewBox="0 0 260 100" fill="none" aria-hidden="true">
            <path d="M0 50h38l12-32 20 64 18-50 14 18h26l12-32 18 64 18-50 14 18h70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="hero-float-chip hero-engineering-chip"><Cpu size={16} /> Embedded systems</div>
        </>
      )}
      {visual === "web" && (
        <>
          <div className="hero-browser hero-browser-back"><span /><span /><span /></div>
          <div className="hero-browser hero-browser-front">
            <div className="hero-browser-bar"><span /><span /><span /><i /></div>
            <div className="hero-browser-screen"><b /><b /><b /><i /></div>
          </div>
          <div className="hero-float-chip hero-web-chip"><MonitorSmartphone size={16} /> Responsive design</div>
        </>
      )}
    </div>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);
  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") {
      pointerStart.current = event.clientX;
    }
  };
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > 48) goTo(active + (delta < 0 ? 1 : -1));
  };

  const slide = slides[active];

  return (
    <section
      aria-label="Featured SBK Technologies services"
      aria-roledescription="carousel"
      className={`hero-section hero-slide-${slide.visual} relative isolate overflow-hidden bg-gradient-to-br from-[#EAF2FF] via-white to-ink`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => { pointerStart.current = null; }}
    >
      <div className="hero-backdrop absolute -top-32 left-1/2 -z-10 size-[20rem] -translate-x-1/2 rounded-full bg-electric/10 blur-[100px] sm:size-[28rem] lg:size-[38rem] lg:blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[650px] lg:grid-cols-2 lg:gap-10 lg:py-20">
        <div className="relative z-10 flex flex-col">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              className="hero-copy"
            >
              <motion.p variants={itemVariants} className="text-xs font-semibold uppercase tracking-[0.18em] text-electric sm:text-sm">
                {slide.eyebrow}
              </motion.p>
              <h1 className="h-hero mt-5 max-w-2xl font-sans font-bold tracking-tight text-heading">
                {slide.title.map((line) => (
                  <motion.span key={line} variants={itemVariants} className="block">{line}</motion.span>
                ))}
              </h1>
              <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-base leading-relaxed text-silver sm:mt-6 sm:text-lg">
                {slide.description}
              </motion.p>
              <motion.div variants={itemVariants} className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                <a href={slide.primaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:bg-[#114fbe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:px-6">
                  {slide.primary} <ArrowRight size={16} />
                </a>
                <a href={slide.secondaryHref} className="inline-flex min-h-11 items-center justify-center rounded-full border border-electric bg-white px-5 py-3 text-center text-sm font-semibold text-electric transition hover:bg-wash focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:px-6">
                  {slide.secondary}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-3 sm:mt-10">
            <button type="button" aria-label="Previous slide" onClick={() => goTo(active - 1)} className="grid size-10 place-items-center rounded-full border border-line bg-white text-heading transition hover:border-electric hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric">
              <ArrowLeft size={17} />
            </button>
            <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
                  aria-current={active === index ? "true" : undefined}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ${active === index ? "w-8 bg-electric" : "w-2.5 bg-[#B7C9E3] hover:bg-secondary"}`}
                />
              ))}
            </div>
            <button type="button" aria-label="Next slide" onClick={() => goTo(active + 1)} className="grid size-10 place-items-center rounded-full border border-line bg-white text-heading transition hover:border-electric hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric">
              <ArrowRight size={17} />
            </button>
            <span className="ml-1 text-xs font-medium tabular-nums text-muted" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-1 lg:max-w-none">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.visual}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, rotateY: -8, y: 12 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, rotateY: 5 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.7, ease: "easeOut" }}
              className="w-full"
            >
              <HeroVisual visual={slide.visual} label={slide.visualLabel} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">Slide {active + 1} of {slides.length}: {slide.eyebrow}</span>
    </section>
  );
}
