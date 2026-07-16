import { SECTIONS, WHY_STYLIST } from "@/lib/data";

export default function WhyStylist() {
  return (
    <section id="why" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">{SECTIONS.why.eyebrow}</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          {SECTIONS.why.heading}
        </h2>

        <div className="mt-12 grid gap-[clamp(1.5rem,3vw,2.5rem)] md:grid-cols-2">
          <article className="reveal d2 border border-ink/10 bg-ivory-deep px-9 py-10">
            <h3 className="mb-5 text-2xl !text-ink-soft">{WHY_STYLIST.without.title}</h3>
            <ul className="grid gap-3.5">
              {WHY_STYLIST.without.items.map((item) => (
                <li key={item} className="relative pl-5 text-ink-soft">
                  <span className="absolute left-1 font-semibold text-gold" aria-hidden="true">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="pallu-frame reveal d3 bg-ivory px-9 py-10">
            <h3 className="mb-5 text-2xl">{WHY_STYLIST.with.title}</h3>
            <ul className="grid gap-3.5">
              {WHY_STYLIST.with.items.map((item) => (
                <li key={item} className="relative pl-5">
                  <span className="absolute left-0 top-0.5 text-sm text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
