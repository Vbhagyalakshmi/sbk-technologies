"use client";
import Image from "next/image";
import { useState } from "react";
import { IMAGES, imageUrl, type ImageKey } from "@/lib/images";

/** Remote Unsplash photo with a branded gradient fallback if it fails to load. */
export default function SafeImage({ k, sizes, priority = false, className = "" }: {
  k: ImageKey; sizes: string; priority?: boolean; className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return <div role="img" aria-label={IMAGES[k].alt} className={`absolute inset-0 bg-gradient-to-br from-[#EAF2FF] via-white to-electric/20 ${className}`} />;
  return (
    <Image src={imageUrl(k)} alt={IMAGES[k].alt} fill sizes={sizes} priority={priority}
      onError={() => setFailed(true)} className={`object-cover ${className}`} />
  );
}
