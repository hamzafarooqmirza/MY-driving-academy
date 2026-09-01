"use client";

import { useEffect, useState } from "react";

function getInitial() {
  // SSR/no-JS default: "not reduced". There's no way to know the real
  // preference without a browser, and this matches the rest of the site's
  // rule of always shipping visible, animated-by-default markup. On the
  // client this initializer runs synchronously during the first render -
  // before any layout effects in child components - so consumers never
  // see a stale/default value racing against the real one.
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(getInitial);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
