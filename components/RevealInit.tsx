"use client";

import { useEffect } from "react";

/**
 * Wires the scroll-reveal animation: every element with the `reveal` class
 * fades in and rises 20px the first time it enters the viewport.
 * Renders nothing; mounts once from the page.
 */
export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
