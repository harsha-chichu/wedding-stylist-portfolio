import { PARTNER_BENEFITS } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="bg-peepal py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(2.5rem,6vw,5rem)] px-5 sm:px-10 md:grid-cols-2">
        <div>
          <p className="eyebrow reveal mb-4 !text-[#C9DBC9]">
            For Makeup Studios &amp; Partners
          </p>
          <h2 className="reveal d1 text-[clamp(2rem,4.6vw,3.2rem)] !text-ivory">
            Add a stylist.
            <br />
            Elevate everything.
          </h2>
          <p className="reveal d2 mt-5 max-w-lg text-ivory/80">
            Studios I partner with offer their clients something rare: a
            complete look, not just a service. Together we build higher-value
            packages, a premium client experience, and social content that
            markets itself.
          </p>
        </div>

        <div>
          <ul className="reveal d2 mb-9 grid gap-3.5">
            {PARTNER_BENEFITS.map((benefit) => (
              <li key={benefit} className="relative pl-7 text-ivory/90">
                <span
                  className="absolute left-0 top-[0.62em] h-px w-3.5 bg-gold"
                  aria-hidden="true"
                />
                {benefit}
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
