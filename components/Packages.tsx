import { PACKAGES } from "@/lib/data";

export default function Packages() {
  return (
    <section id="packages" className="py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">Packages</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          Choose your level of calm
        </h2>
        <p className="reveal d2 mx-auto mt-4 max-w-xl text-center text-ink-soft">
          Every package is tailored after our discovery call. Pricing on request.
        </p>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`reveal d${Math.min(i, 3)} relative flex flex-col px-8 py-10 ${
                pkg.signature
                  ? "border border-gold bg-gradient-to-br from-kumkum-deep to-kumkum shadow-[inset_0_0_0_1px_rgba(185,138,62,0.25),0_24px_48px_-28px_rgba(74,20,29,0.55)]"
                  : "border border-gold/35 bg-ivory"
              }`}
            >
              {pkg.signature && (
                <span className="ribbon absolute -right-2 top-4 bg-haldi px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-kumkum-deep">
                  Signature
                </span>
              )}
              <h3 className={`mb-5 text-[1.35rem] ${pkg.signature ? "!text-ivory" : ""}`}>
                {pkg.name}
              </h3>
              <ul className="mb-7 grid flex-1 gap-3">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className={`relative pl-5 text-[0.92rem] leading-normal ${
                      pkg.signature ? "text-ivory/80" : "text-ink-soft"
                    }`}
                  >
                    <span className="absolute left-0 text-gold" aria-hidden="true">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className={`mb-5 font-serif italic ${
                  pkg.signature ? "text-haldi" : "text-gold"
                }`}
              >
                On request
              </p>
              <a
                href="#contact"
                className={`btn self-start !px-6 !py-3 !text-[0.72rem] ${
                  pkg.signature
                    ? "border-gold bg-gold text-ivory hover:border-gold-dark hover:bg-gold-dark"
                    : "border-gold text-gold hover:bg-gold hover:text-ivory"
                }`}
              >
                Enquire
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
