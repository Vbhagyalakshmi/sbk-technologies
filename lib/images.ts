export type ImageKey =
  | "hero" | "web" | "software" | "ecommerce" | "mobile" | "ai" | "cloud"
  | "seo" | "design" | "security" | "vlsi" | "student";

type Img = { id: string; alt: string; credit: string; page: string };

// Unsplash License: free for commercial use, attribution not required (credited here anyway).
export const IMAGES: Record<ImageKey, Img> = {
  hero:     { id: "photo-1605379399642-870262d3d051", alt: "Developer desk with multiple monitors showing code", credit: "Fotis Fotopoulos", page: "https://unsplash.com/photos/6sAl6aQ4OWI" },
  web:      { id: "photo-1498050108023-c5249f4df085", alt: "Laptop showing lines of code on a busy desk", credit: "Christopher Gower", page: "https://unsplash.com/photos/m_HRfLhgABo" },
  software: { id: "photo-1534972195531-d756b9bfa9f2", alt: "Two dark monitors in a software workspace", credit: "Fotis Fotopoulos", page: "https://unsplash.com/photos/LJ9KY8pIH3E" },
  ecommerce:{ id: "photo-1547658719-da2b51169166", alt: "Monitor displaying digital products", credit: "Daniel Korpai", page: "https://unsplash.com/photos/pKRNxEguRgM" },
  mobile:   { id: "photo-1773332611514-238856b76198", alt: "Person using a smartphone over a notebook", credit: "Microsoft Copilot", page: "https://unsplash.com/photos/qUJ8fgoaLTg" },
  ai:       { id: "photo-1644088379091-d574269d422f", alt: "Abstract blue background of connected lines and dots", credit: "Conny Schneider", page: "https://unsplash.com/photos/xuTJZ7uD7PI" },
  cloud:    { id: "photo-1550751827-4bd374c3f58b", alt: "Teal LED panel resembling server infrastructure", credit: "Adi Goldstein", page: "https://unsplash.com/photos/EUsVwEOsblE" },
  seo:      { id: "photo-1519389950473-47ba0277781c", alt: "People working together at a table of laptops", credit: "Marvin Meyer", page: "https://unsplash.com/photos/SYTO3xs06fU" },
  design:   { id: "photo-1607799279861-4dd421887fb3", alt: "Laptop screen displaying colourful code", credit: "Mohammad Rahmani", page: "https://unsplash.com/photos/8qEB0fTe9Vw" },
  security: { id: "photo-1523961131990-5ea7c61b2107", alt: "Geometric digital pattern suggesting network security", credit: "fabio", page: "https://unsplash.com/photos/oyXis2kALVg" },
  vlsi:     { id: "photo-1518770660439-4636190af475", alt: "Macro photograph of a black circuit board", credit: "Alexandre Debiève", page: "https://unsplash.com/photos/FO7JIlwjOtU" },
  student:  { id: "photo-1581090464777-f3220bbe1b8b", alt: "Blue robotic prosthetic hand against a teal background", credit: "ThisisEngineering", page: "https://unsplash.com/photos/sbVu5zitZt0" },
};

export const imageUrl = (key: ImageKey, w = 1600) =>
  `https://images.unsplash.com/${IMAGES[key].id}?auto=format&fit=crop&w=${w}&q=70`;
