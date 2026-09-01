"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives Lenis smooth scrolling and keeps GSAP's ScrollTrigger in sync with
 * it. Renders nothing - it only wires up side effects on the real window
 * scroll. Disabled entirely under prefers-reduced-motion, so reduced-motion
 * visitors get native, instant scrolling with no smoothing.
 */
export default function SmoothScroll() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: false,
      anchors: {
        // Keep anchor targets clear of the fixed header (68px mobile /
        // 84px desktop, matching Navbar + layout.tsx's main padding-top).
        // Lenis only accepts a fixed number here, not a responsive
        // function, so use a value that comfortably covers both.
        offset: -92,
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return null;
}
