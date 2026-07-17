import Lines from "./Lines";
import { SECTIONS, VENDORS, VENDOR_STATEMENT } from "@/lib/data";

export default function Vendors() {
  return (
    <section id="vendors" className="bg-ivory-deep py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">{SECTIONS.vendors.eyebrow}</p>
        <h2 className="reveal d1 mx-auto max-w-3xl text-center text-[clamp(2rem,4.6vw,3.2rem)] font-light italic">
          &ldquo;<Lines text={VENDOR_STATEMENT.quote} />&rdquo;
        </h2>

        <div
          className="reveal d2 mt-14 flex flex-wrap justify-center gap-3 md:relative md:mx-auto md:block md:h-[560px] md:max-w-[720px]"
          aria-label="Vendors Ushaswini coordinates with"
        >
          {/* Wrapper takes the full flex row on mobile so the circle sits alone
              and centered without being stretched; display:contents removes it
              on desktop so the circle positions absolutely in the orbit. */}
          <div className="order-first max-md:mb-6 max-md:flex max-md:basis-full max-md:justify-center md:contents">
            <div className="grid h-32 w-32 flex-none place-items-center rounded-full bg-kumkum text-center font-serif text-lg italic leading-snug text-ivory shadow-[0_0_0_10px_var(--color-ivory-deep),0_0_0_11px_rgba(185,138,62,0.35)] md:absolute md:left-1/2 md:top-1/2 md:h-[138px] md:w-[138px] md:-translate-x-1/2 md:-translate-y-1/2">
              <span>
                <Lines text={VENDOR_STATEMENT.centerLabel} />
              </span>
            </div>
          </div>
          {VENDORS.map((vendor, i) => (
            <span
              key={vendor}
              className="orbit-item whitespace-nowrap rounded-full border border-gold/35 bg-ivory px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-kumkum"
              style={{ "--a": `${i * 36}deg` } as React.CSSProperties}
            >
              {vendor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
