"use client";

import { useEffect, useRef, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import { SECTIONS, WORKS, WORK_FILTERS, type Work, type WorkCategory } from "@/lib/data";

export default function Portfolio() {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const [lightbox, setLightbox] = useState<Work | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const visible = WORKS.filter((w) => filter === "all" || w.cat === filter);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      lastTrigger.current?.focus();
    };
  }, [lightbox]);

  return (
    <section id="portfolio" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">{SECTIONS.portfolio.eyebrow}</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          {SECTIONS.portfolio.heading}
        </h2>

        <div
          className="reveal d2 my-9 flex flex-wrap justify-center gap-2.5"
          role="group"
          aria-label="Filter portfolio by category"
        >
          {WORK_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`cursor-pointer rounded-full border px-4.5 py-2 text-[0.7rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                filter === f.id
                  ? "border-haldi bg-haldi font-semibold text-kumkum-deep"
                  : "border-gold/35 font-medium text-ink-soft hover:border-gold hover:text-kumkum"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="reveal d3 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((work) => (
            <figure key={work.img.src} className="mb-5 break-inside-avoid">
              <button
                type="button"
                className="work-btn block w-full cursor-pointer text-left"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setLightbox(work);
                }}
              >
                <ImageWithFallback
                  img={work.img}
                  width={800}
                  height={1050}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full rounded-sm"
                />
                <figcaption className="sr-only">{work.caption}</figcaption>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            ref={closeBtn}
            type="button"
            aria-label="Close viewer"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-4 cursor-pointer p-2 text-4xl leading-none text-ivory hover:text-haldi"
          >
            &times;
          </button>
          <figure className="grid max-h-[86vh] w-full max-w-[900px] justify-items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- lightbox shows the already-loaded image at natural size */}
            <img
              src={lightbox.img.src}
              alt={lightbox.img.alt}
              onError={(e) => {
                e.currentTarget.src = lightbox.img.fallback;
              }}
              className="max-h-[76vh] max-w-full border border-gold/35 object-contain"
            />
            <figcaption className="text-[0.78rem] uppercase tracking-[0.18em] text-champagne">
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
