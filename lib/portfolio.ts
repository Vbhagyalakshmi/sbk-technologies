export const categories = ["All", "Business websites", "E-commerce", "Web applications", "Custom software", "AI and engineering projects"] as const;

export type Project = {
  slug: string; title: string; category: (typeof categories)[number]; summary: string;
  image: string; imageAlt: string; liveUrl: string; caseStudy: string;
};

// Only verified, publicly stated information. Add new entries here.
export const projects: Project[] = [
  {
    slug: "jhansi-engineering-works",
    title: "Jhansi Automobiles Engineering Works",
    category: "Business websites",
    summary: "A business website for an automobile service and engineering workshop in Visakhapatnam, presenting its services, workshop, gallery and booking options.",
    image: "https://www.jhansiengineeringworks.in/images/hero-workshop.png",
    imageAlt: "Automotive workshop with a vehicle and open bonnet, from the Jhansi Automobiles website",
    liveUrl: "https://www.jhansiengineeringworks.in/",
    caseStudy: "/portfolio/jhansi-engineering-works",
  },
];
