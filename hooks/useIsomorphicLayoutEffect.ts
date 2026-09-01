"use client";

import { useEffect, useLayoutEffect } from "react";

// Avoids the SSR "useLayoutEffect does nothing on the server" warning while
// still firing before paint on the client, where our GSAP setup lives.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
