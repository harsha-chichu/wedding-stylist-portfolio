"use client";

import { useRef } from "react";
import ImageWithFallback from "./ImageWithFallback";
import { MOODS, type Mood } from "@/lib/data";

/** Per-theme tint gradients layered over each moodboard image. */
const TINTS: Record<Mood["tint"], string> = {
  temple: "bg-gradient-to-t from-[rgba(74,20,29,0.6)] to-[rgba(107,31,42,0.1)]",
  kanchipuram: "bg-gradient-to-t from-[rgba(74,20,29,0.6)] to-[rgba(107,31,42,0.1)]",
  minimal: "bg-gradient-to-t from-[rgba(43,20,24,0.55)] to-transparent",
  modern: "bg-gradient-to-t from-[rgba(43,20,24,0.55)] to-transparent",
  cocktail: "bg-gradient-to-t from-[rgba(43,20,24,0.55)] to-transparent",
  haldi: "bg-gradient-to-t from-[rgba(160,110,10,0.55)] to-[rgba(224,165,38,0.12)]",
  mehendi: "bg-gradient-to-t from-[rgba(37,58,44,0.6)] to-[rgba(62,92,72,0.12)]",
  reception: "bg-gradient-to-t from-[rgba(120,92,46,0.55)] to-[rgba(216,195,154,0.12)]",
};

export default function Moodboards() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, startX: 0, startLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return; // touch scrolls natively
    const el = scroller.current!;
    drag.current = { down: true, moved: false, startX: e.clientX, startLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    const el = scroller.current!;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4 && !d.moved) {
      d.moved = true;
      el.classList.add("is-dragging");
    }
    if (d.moved) el.scrollLeft = d.startLeft - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
    scroller.current?.classList.remove("is-dragging");
  };

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
    <section id="moodboards" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">Signature</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          Editorial moodboards
        </h2>
        <p className="reveal d2 mx-auto mt-4 max-w-xl text-center text-ink-soft">
          Eight directions a bridal story can take. Drag to wander through them.
        </p>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Moodboard gallery — scroll horizontally"
        className="mood-scroller reveal d3 flex gap-5 overflow-x-auto px-[clamp(1.25rem,6vw,5rem)] pb-8 pt-12"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
      >
        {MOODS.map((mood) => (
          <article
            key={mood.title}
            className="group relative aspect-[7.2/10] flex-none basis-[min(72vw,300px)] snap-center overflow-hidden rounded-sm"
          >
            <ImageWithFallback
              img={mood.img}
              width={720}
              height={1000}
              sizes="300px"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
            />
            <div className={`pointer-events-none absolute inset-0 ${TINTS[mood.tint]}`} aria-hidden="true" />
            <div className="absolute inset-x-4 bottom-4 z-10 border border-gold/35 bg-ivory/90 px-4 py-3.5">
              <h3 className="text-[1.05rem] leading-tight">{mood.title}</h3>
              <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold">
                {mood.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
