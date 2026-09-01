"use client";

import { useRef } from "react";
import {
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  RotateCw,
  Route,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { services } from "@/lib/nav";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ICONS: Record<string, LucideIcon> = {
  "driving-lessons": CarFront,
  "intensive-courses": Rocket,
  "block-bookings": CalendarCheck,
  "test-prep": ClipboardCheck,
  "motorway-lessons": Route,
  "refresher-classes": RotateCw,
};

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const header = headerRef.current;
    if (!header || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: header, start: "top 88%" },
      });
    }, header);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      className="py-12 bg-surface-container-lowest -mt-8 relative z-20 mx-4 md:mx-10 rounded-xl ambient-shadow max-w-[1200px] xl:mx-auto"
      id="services"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-primary-container mb-4">
            Our Services
          </h2>
          <p className="text-on-surface-variant">
            Comprehensive tuition packages designed to suit every
            learner&apos;s needs, schedule, and experience level.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              Icon={ICONS[service.slug] ?? CarFront}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
