"use client";

import { useEffect, useRef } from "react";
import { JOURNEY, SECTIONS } from "@/lib/data";

export default function Journey() {
  const scroller = useRef<HTMLDivElement>(null);

  // Translate a vertical wheel/trackpad gesture into horizontal scrolling while
  // the timeline still has room; hand the scroll back to the page at either edge.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return; // nothing to scroll (e.g. mobile stack)

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= maxScroll - 1;
      if ((delta > 0 && atEnd) || (delta < 0 && atStart)) return; // let page scroll

      e.preventDefault();
      el.scrollLeft += delta;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      scroller.current?.scrollBy({
        left: e.key === "ArrowRight" ? 320 : -320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="journey" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">{SECTIONS.journey.eyebrow}</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          {SECTIONS.journey.heading}
        </h2>
        <p className="reveal d2 mx-auto mt-4 max-w-xl text-center text-ink-soft">
          {SECTIONS.journey.lede}
        </p>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Wedding journey timeline — scroll horizontally"
        onKeyDown={onKeyDown}
        className="journey-scroller reveal d3 mx-auto mt-14 grid max-w-[1244px] px-5 sm:px-10 md:auto-cols-[minmax(240px,1fr)] md:grid-flow-col md:overflow-x-auto"
      >
        {JOURNEY.map((step, i) => (
          <div key={step.title} className="journey-step">
            <span className="journey-node" aria-hidden="true" />
            <span className="block font-serif text-[1.05rem] italic text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1.5 text-[1.15rem]">{step.title}</h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
