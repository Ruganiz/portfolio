"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Update ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis updates with GSAP's ticker for unified animation frame timing
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);

    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        // Only intercept if it's a hash link on the same page
        if (href && href.startsWith("#")) {
          e.preventDefault();
          lenis.scrollTo(href, { offset: -80 }); // Offset for the fixed header
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      document.removeEventListener("click", handleHashClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
