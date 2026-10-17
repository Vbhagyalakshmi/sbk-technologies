"use client";
import Image from "next/image";
import { useState } from "react";

export default function RemoteImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className="absolute inset-0 bg-gradient-to-br from-[#EAF2FF] via-white to-electric/20" />;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} className="object-cover" />;
}
