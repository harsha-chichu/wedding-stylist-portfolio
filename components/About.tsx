import ImageWithFallback from "./ImageWithFallback";
import Lines from "./Lines";
import { ABOUT_COPY, ABOUT_IMG, ROLES, SECTIONS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(2.5rem,6vw,5.5rem)] px-5 sm:px-10 md:grid-cols-[5fr_7fr]">
        <figure className="reveal mx-auto w-full max-w-[380px] md:max-w-none">
          <div className="arch-frame">
            <ImageWithFallback img={ABOUT_IMG} width={800} height={1040} loading="eager" sizes="(min-width: 768px) 40vw, 90vw" />
          </div>
        </figure>

        <div>
          <p className="eyebrow reveal mb-4">{SECTIONS.about.eyebrow}</p>
          <h2 className="reveal d1 text-[clamp(2rem,4.6vw,3.2rem)]">
            <Lines text={ABOUT_COPY.heading} />
          </h2>
          <p className="reveal d2 mt-6 max-w-2xl">{ABOUT_COPY.bio}</p>
          <ul className="reveal d3 mt-7 flex flex-wrap gap-2.5" aria-label="Areas of practice">
            {ROLES.map((role) => (
              <li
                key={role}
                className="rounded-full border border-gold/35 bg-gold/15 px-4 py-2 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-kumkum transition-colors hover:border-haldi hover:bg-haldi/15"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
