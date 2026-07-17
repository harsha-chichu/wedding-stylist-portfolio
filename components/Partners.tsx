import Lines from "./Lines";
import { PARTNERS_COPY, PARTNER_BENEFITS, SECTIONS } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="bg-peepal py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(2.5rem,6vw,5rem)] px-5 sm:px-10 md:grid-cols-2">
        <div>
          <p className="eyebrow reveal mb-4 !text-[#C9DBC9]">{SECTIONS.partners.eyebrow}</p>
          <h2 className="reveal d1 text-[clamp(2rem,4.6vw,3.2rem)] !text-ivory">
            <Lines text={PARTNERS_COPY.heading} />
          </h2>
          <p className="reveal d2 mt-5 max-w-lg text-ivory/80">{PARTNERS_COPY.intro}</p>
        </div>

        <div>
          <ul className="reveal d2 mb-9 grid gap-5">
            {PARTNER_BENEFITS.map((benefit) => (
              <li key={benefit.title} className="relative pl-7">
                <span
                  className="absolute left-0 top-[0.62em] h-px w-3.5 bg-gold"
                  aria-hidden="true"
                />
                <span className="block font-medium text-ivory">{benefit.title}</span>
                <span className="block text-[0.92rem] leading-relaxed text-ivory/70">
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn reveal d3 border-gold text-champagne hover:border-champagne hover:bg-champagne hover:text-peepal-deep"
          >
            Partner with me
          </a>
        </div>
      </div>
    </section>
  );
}
