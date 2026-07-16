"use client";

import { useState } from "react";
import ServiceIcon from "./ServiceIcon";
import { BRIDE_SERVICES, GROOM_SERVICES, SECTIONS, type Service } from "@/lib/data";

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
      {services.map((s) => (
        <article
          key={s.title}
          className="border-t-2 border-gold bg-ivory px-6 py-7 shadow-[0_1px_0_rgba(43,38,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(107,31,42,0.35)]"
        >
          <ServiceIcon name={s.icon} className="mb-4 h-[34px] w-[34px] text-gold" />
          <h3 className="text-xl">{s.title}</h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{s.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"bride" | "groom">("bride");

  return (
    <section id="services" className="bg-ivory-deep py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">{SECTIONS.services.eyebrow}</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          {SECTIONS.services.heading}
        </h2>

        <div
          className="reveal d2 mx-auto my-10 flex w-fit border border-gold/35"
          role="tablist"
          aria-label="Service categories"
        >
          {(["bride", "groom"] as const).map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              onClick={() => setTab(id)}
              className={`cursor-pointer px-8 py-3.5 text-[0.76rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                tab === id ? "bg-kumkum text-ivory" : "text-ink-soft hover:text-kumkum"
              }`}
            >
              {id === "bride" ? "Bridal Styling" : "Groom Styling"}
            </button>
          ))}
        </div>

        <div id="panel-bride" role="tabpanel" aria-labelledby="tab-bride" hidden={tab !== "bride"}>
          <ServiceGrid services={BRIDE_SERVICES} />
        </div>
        <div id="panel-groom" role="tabpanel" aria-labelledby="tab-groom" hidden={tab !== "groom"}>
          <ServiceGrid services={GROOM_SERVICES} />
        </div>
      </div>
    </section>
  );
}
