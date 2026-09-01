"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Service } from "@/lib/nav";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  service: Service;
  Icon: LucideIcon;
  index: number;
};

export default function ServiceCard({ service, Icon, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 220, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 220, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  useIsomorphicLayoutEffect(() => {
    const card = cardRef.current;
    if (!card || reducedMotion) return;

    const ctx = gsap.context(() => {
      const fromX = index % 2 === 0 ? -32 : 32;
      gsap.from(card, {
        opacity: 0,
        x: fromX,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
      });

      const image = card.querySelector<HTMLElement>("[data-service-image]");
      if (image) {
        gsap.fromTo(
          image,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      }
    }, card);

    return () => ctx.revert();
  }, [index, reducedMotion]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    if (glowRef.current) {
      glowRef.current.style.setProperty("--glow-x", `${relX * 100}%`);
      glowRef.current.style.setProperty("--glow-y", `${relY * 100}%`);
    }
    tiltX.set(relX - 0.5);
    tiltY.set(relY - 0.5);
  };

  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <div ref={cardRef} style={{ perspective: 1000 }}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={
          reducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative bg-surface-container-low rounded-xl overflow-hidden ambient-shadow border border-outline-variant/30 flex flex-col h-full"
      >
        {/* Pointer-following border glow */}
        <div
          ref={glowRef}
          className="pointer-glow pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        <Link href={`/${service.slug}`} className="relative flex flex-col h-full focus-visible:outline-none">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div data-service-image className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1200px) 380px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 w-10 h-10 bg-surface/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-container shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-on-surface mb-2">
              {service.name}
            </h3>
            <p className="text-on-surface-variant mb-6 flex-grow">
              {service.description}
            </p>
            <span className="text-primary-container font-semibold text-sm flex items-center gap-2 group-hover:text-secondary-container transition-colors mt-auto">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-secondary-container origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Link>
      </motion.div>
    </div>
  );
}
