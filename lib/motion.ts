// Shared animation constants. Keep every section's timings, easing, and
// stagger pulled from here so the whole site feels like one system.

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  smooth: "power2.out",
} as const;

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.12,
  loose: 0.18,
} as const;

export const DISTANCE = {
  sm: 24,
  md: 40,
  lg: 64,
} as const;

// Framer Motion variants shared across small interactive components.
export const fadeUp = {
  hidden: { opacity: 0, y: DISTANCE.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = (stagger: number = STAGGER.base) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});
