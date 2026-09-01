"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-secondary-container origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
