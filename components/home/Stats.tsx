"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { stats } from "@/lib/homeData";

gsap.registerPlugin(ScrollTrigger);

/** Splits "500+" / "98%" into a numeric part to count up and a symbol to
 * keep static, so the layout never shifts as digits change width. */
function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, symbol: value };
  return { number: Number(match[1]), symbol: match[2] };
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-stat-number]");

      if (reducedMotion) {
        items.forEach((el) => {
          const { number } = parseStat(el.dataset.statNumber ?? "0");
          el.textContent = String(number);
        });
        return;
      }

      ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        once: true,
        onEnter: () => {
          items.forEach((el) => {
            const { number } = parseStat(el.dataset.statNumber ?? "0");
            const counter = { value: 0 };
            gsap.to(counter, {
              value: number,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = String(Math.round(counter.value));
              },
            });
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="mt-16 pt-10 border-t border-on-primary/15 grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {stats.map((stat) => {
        const { number, symbol } = parseStat(stat.value);
        return (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary-container tabular-nums">
              <span data-stat-number={stat.value}>{number}</span>
              {symbol}
            </p>
            <p className="text-sm text-on-primary/70 mt-1">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
