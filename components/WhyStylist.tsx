const WITHOUT = [
  "Outfit decisions made in a fog of opinions — and second-guessed until the last week.",
  "Jewellery that fights the saree instead of finishing it.",
  "Expensive shopping mistakes that never leave the wardrobe again.",
  "Last-minute panic when pleats, dupattas, and timelines collide.",
];

const WITH = [
  "Every look coordinated — outfit, jewellery, makeup, and hair as one composition.",
  "Confident shopping decisions, made once and made well.",
  "Photographs with editorial polish, from the first ritual to the last dance.",
  "A wedding you actually get to enjoy, because someone else is watching the details.",
];

export default function WhyStylist() {
  return (
    <section id="why" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">The Difference</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          Why every bride needs a stylist
        </h2>

        <div className="mt-12 grid gap-[clamp(1.5rem,3vw,2.5rem)] md:grid-cols-2">
          <article className="reveal d2 border border-ink/10 bg-ivory-deep px-9 py-10">
            <h3 className="mb-5 text-2xl !text-ink-soft">Without a stylist</h3>
            <ul className="grid gap-3.5">
              {WITHOUT.map((item) => (
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
            <h3 className="mb-5 text-2xl">With a stylist</h3>
            <ul className="grid gap-3.5">
              {WITH.map((item) => (
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
