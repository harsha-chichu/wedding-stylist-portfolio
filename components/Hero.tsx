import ImageWithFallback from "./ImageWithFallback";
import Lines from "./Lines";
import { HERO_COPY, HERO_IMG } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative grid min-h-svh place-items-center overflow-hidden text-center">
      <div className="absolute inset-0">
        <ImageWithFallback
          img={HERO_IMG}
          width={2000}
          height={1250}
          priority
          className="kenburns h-full w-full object-cover"
          sizes="100vw"
        />
        {/* Two-layer scrim: a base gradient plus a soft radial pool of maroon
            behind the text block, so copy stays legible over light images
            while the edges of the photograph stay bright. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgba(43,20,24,0.5)] via-[rgba(43,20,24,0.34)] to-[rgba(43,20,24,0.72)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_62%_48%_at_50%_56%,rgba(43,20,24,0.52),transparent_72%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-6 pb-20 pt-28">
        <p className="eyebrow reveal !text-champagne [text-shadow:0_1px_3px_rgba(43,20,24,0.9),0_2px_14px_rgba(43,20,24,0.7)]">
          {HERO_COPY.eyebrow}
        </p>
        <h1 className="reveal d1 mt-4 text-[clamp(2.9rem,8vw,5.5rem)] font-light !text-ivory [text-shadow:0_2px_6px_rgba(43,20,24,0.55),0_6px_36px_rgba(43,20,24,0.6)]">
          <Lines text={HERO_COPY.headline} />
        </h1>
        <p className="reveal d2 mt-6 text-[clamp(1rem,2vw,1.2rem)] tracking-wide text-ivory [text-shadow:0_1px_3px_rgba(43,20,24,0.85),0_2px_16px_rgba(43,20,24,0.65)]">
          {HERO_COPY.subline}
        </p>
        <div className="reveal d3 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#portfolio"
            className="btn border-champagne bg-ivory/95 text-kumkum shadow-[0_10px_30px_-12px_rgba(43,20,24,0.7)] hover:border-gold hover:bg-champagne hover:text-kumkum-deep max-sm:w-full"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="btn border-champagne/70 bg-kumkum text-ivory shadow-[0_10px_30px_-12px_rgba(43,20,24,0.7)] hover:border-champagne hover:bg-kumkum-deep max-sm:w-full"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
