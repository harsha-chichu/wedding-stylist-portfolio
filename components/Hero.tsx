import ImageWithFallback from "./ImageWithFallback";
import { HERO_IMG } from "@/lib/data";

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
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgba(43,20,24,0.45)] via-[rgba(43,20,24,0.25)] to-[rgba(43,20,24,0.62)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-6 pb-20 pt-28">
        <p className="eyebrow reveal !text-champagne">
          Ushaswini Munupaly — Lead Fashion Stylist
        </p>
        <h1 className="reveal d1 mt-4 text-[clamp(2.9rem,8vw,5.5rem)] font-light !text-ivory">
          The Art of
          <br />
          Wedding Styling
        </h1>
        <p className="reveal d2 mt-6 text-[clamp(1rem,2vw,1.2rem)] tracking-wide text-ivory/85">
          Timeless bridal experiences through fashion, styling &amp; creative direction.
        </p>
        <div className="reveal d3 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#portfolio"
            className="btn border-gold text-champagne hover:border-champagne hover:bg-champagne hover:text-kumkum-deep max-sm:w-full"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="btn border-kumkum bg-kumkum text-ivory hover:border-kumkum-deep hover:bg-kumkum-deep max-sm:w-full"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
