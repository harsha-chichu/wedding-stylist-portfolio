import { CheckMotif } from "./motifs";
import { CHECKLIST } from "@/lib/data";

export default function Checklist() {
  return (
    <section id="checklist" className="kolam-bg py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <p className="eyebrow reveal mb-4 text-center">Trust the Details</p>
        <h2 className="reveal d1 text-center text-[clamp(2rem,4.6vw,3.2rem)]">
          On your wedding day, I&rsquo;ve got&hellip;
        </h2>

        <ul className="reveal d2 mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-4">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border border-gold/15 bg-ivory px-5 py-4 text-[0.95rem] font-normal"
            >
              <CheckMotif className="h-[19px] w-[19px] flex-none text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
