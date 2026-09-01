"use client";

import { usePathname } from "next/navigation";

/** The header is fixed and transparent-over-hero on the homepage only, so
 * the homepage's own hero fills the space behind it. Every other page
 * opens on solid content and needs a spacer the height of the (always
 * solid) header, or that content renders hidden underneath it. */
export default function HeaderSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div className="h-[68px] md:h-[84px]" aria-hidden="true" />;
}
