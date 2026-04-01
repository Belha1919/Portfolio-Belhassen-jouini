"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (scrollProgress: number) => Math.min(1, 1.001 - Math.pow(2, -10 * scrollProgress)),
      touchMultiplier: 2,
    });

    function animationFrameCallback(timestamp: number) {
      lenisInstance.raf(timestamp);
      requestAnimationFrame(animationFrameCallback);
    }

    requestAnimationFrame(animationFrameCallback);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
