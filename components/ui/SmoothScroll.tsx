"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // @ts-ignore
    window.lenis = lenis;

    return () => lenis.destroy();
  }, []);

  useAnimationFrame((time) => {
    // @ts-ignore
    window.lenis?.raf(time);
  });

  return <>{children}</>;
}
