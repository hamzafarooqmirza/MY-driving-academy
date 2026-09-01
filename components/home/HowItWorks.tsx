"use client";

import { useRef } from "react";
import {
  CalendarCheck,
  Car,
  CheckCircle2,
  Compass,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { journeySteps } from "@/lib/homeData";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

const ICONS: Record<string, LucideIcon> = {
  event_available: CalendarCheck,
  person: UserRound,
  directions_car: Car,
  workspace_premium: CheckCircle2,
  explore: Compass,
};

// A gentle wave connecting 5 evenly-spaced stops across a 1000-wide viewBox.
const ROUTE_D =
  "M 20 60 C 140 20, 240 100, 360 60 S 620 20, 740 60 S 960 100, 980 60";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const mobileLineFillRef = useRef<HTMLDivElement>(null);
  const mobileListRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const steps = gsap.utils.toArray<HTMLElement>(".journey-step");
          const icons = gsap.utils.toArray<HTMLElement>(".journey-icon");

          // These start states are applied from JS only, so a visitor with
          // JS disabled (or before hydration) always sees the fully
          // visible, fully colored resting markup rendered by the server.
          gsap.set(steps, { opacity: 0.4, y: 12 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          });

          if (pathRef.current) {
            tl.fromTo(
              pathRef.current,
              { drawSVG: "0%" },
              { drawSVG: "100%", ease: "none" },
              0,
            );
          }

          if (carRef.current && pathRef.current) {
            tl.to(
              carRef.current,
              {
                motionPath: {
                  path: pathRef.current,
                  align: pathRef.current,
                  alignOrigin: [0.5, 0.5],
                },
                ease: "none",
              },
              0,
            );
          }

          tl.to(
            icons,
            {
              backgroundColor: "var(--color-secondary-container)",
              color: "var(--color-on-secondary-fixed-variant)",
              stagger: { each: 0.22, from: "start" },
              ease: "none",
            },
            0,
          ).to(
            steps,
            {
              opacity: 1,
              y: 0,
              stagger: { each: 0.22, from: "start" },
              ease: "none",
            },
            0,
          );
        },
        "(max-width: 1023px)": () => {
          const items = gsap.utils.toArray<HTMLElement>(".journey-step-mobile");
          gsap.from(items, {
            opacity: 0,
            x: -20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: mobileListRef.current, start: "top 80%" },
          });

          if (mobileLineFillRef.current) {
            gsap.fromTo(
              mobileLineFillRef.current,
              { height: "0%" },
              {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: mobileListRef.current,
                  start: "top 75%",
                  end: "bottom 70%",
                  scrub: true,
                },
              },
            );
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-container mb-4">
            Your Journey to Success
          </h2>
          <p className="text-on-surface-variant">
            A clear, structured path to gaining your full UK driving license
            with confidence.
          </p>
        </div>

        {/* Desktop: horizontal journey with a drawn route + moving marker */}
        <div ref={desktopRef} className="hidden lg:block relative">
          <svg
            viewBox="0 0 1000 120"
            className="absolute left-0 right-0 top-[52px] w-full h-[120px] text-outline-variant"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={ROUTE_D}
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeDasharray="1 10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              ref={pathRef}
              d={ROUTE_D}
              stroke="var(--color-secondary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <g ref={carRef}>
              <circle r="7" fill="var(--color-secondary-container)" />
            </g>
          </svg>

          <div className="grid grid-cols-5 gap-4 relative">
            {journeySteps.map((step, index) => {
              const Icon = ICONS[step.icon] ?? Car;
              return (
                <div
                  key={step.title}
                  className="journey-step relative flex flex-col items-center text-center"
                >
                  <div className="journey-icon w-14 h-14 rounded-2xl bg-surface border border-outline-variant/40 text-outline flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-1 right-[calc(50%-38px)] w-6 h-6 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary-container mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed px-2">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: simple vertical journey */}
        <div ref={mobileListRef} className="lg:hidden relative">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px bg-outline-variant/40"
            aria-hidden="true"
          />
          <div
            ref={mobileLineFillRef}
            className="absolute left-[27px] top-2 w-px bg-secondary"
            style={{ height: 0 }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {journeySteps.map((step, index) => {
              const Icon = ICONS[step.icon] ?? Car;
              return (
                <div
                  key={step.title}
                  className="journey-step-mobile relative pl-[76px]"
                >
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-secondary-container/15 text-secondary flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="absolute top-[-4px] left-9 w-6 h-6 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary-container mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
