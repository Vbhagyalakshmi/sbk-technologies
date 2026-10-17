import Link from "next/link";
import type { ReactNode } from "react";

const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric";
const styles = {
  primary: "bg-electric text-white shadow-glow hover:bg-[#114fbe]",
  secondary: "border border-electric bg-white text-electric hover:border-electric hover:bg-wash",
} as const;

export default function Button({ href, children, variant = "primary", external = false, className = "" }: {
  href: string; children: ReactNode; variant?: keyof typeof styles; external?: boolean; className?: string;
}) {
  const cls = `${base} ${styles[variant]} ${className}`;
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}
