"use client";
import Link from "next/link";
import { useState } from "react";
import RemoteImage from "@/components/ui/RemoteImage";
import { categories, projects } from "@/lib/portfolio";

export default function PortfolioGrid() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
            className={`min-h-11 rounded-full border px-4 text-sm transition ${cat === c ? "border-electric bg-electric text-white" : "border-line bg-white text-heading hover:border-electric hover:text-electric"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2" aria-live="polite">
        {list.map((p) => (
          <article key={p.slug} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="relative aspect-[16/9]"><RemoteImage src={p.image} alt={p.imageAlt} sizes="(min-width:768px) 50vw, 100vw" /></div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric">{p.category}</p>
              <h2 className="mt-1 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href={p.caseStudy} className="text-electric hover:underline">Read case study</Link>
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-silver hover:text-electric">Visit live website</a>
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="text-muted">No projects in this category yet. More work will be added here as it is confirmed.</p>}
      </div>
    </>
  );
}
