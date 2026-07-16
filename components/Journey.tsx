import { JOURNEY } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">The Process</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          The wedding journey
        </h2>
        <p className="reveal d2 mx-auto mt-4 max-w-xl text-center text-ink-soft">
          Eight quiet, deliberate steps between our first hello and your
          reception exit.
        </p>
      </div>

      <div
        className="reveal d3 mx-auto mt-14 grid max-w-[1244px] px-5 sm:px-10 md:auto-cols-[minmax(240px,1fr)] md:grid-flow-col md:overflow-x-auto"
        role="list"
      >
        {JOURNEY.map((step, i) => (
          <div key={step.title} className="journey-step" role="listitem">
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
