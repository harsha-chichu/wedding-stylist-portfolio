import { JasmineMotif } from "./motifs";
import { PHILOSOPHY_QUOTE } from "@/lib/data";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-gradient-to-br from-kumkum-deep to-kumkum py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-5 text-center sm:px-10">
        <JasmineMotif className="reveal h-[34px] w-[34px] text-gold" />
        <blockquote className="reveal d1">
          <p className="mx-auto max-w-4xl font-serif text-[clamp(1.5rem,3.4vw,2.4rem)] font-light italic leading-[1.45] text-ivory">
            &ldquo;{PHILOSOPHY_QUOTE}&rdquo;
          </p>
        </blockquote>
        <JasmineMotif flipped className="reveal d2 h-[34px] w-[34px] text-gold" />
      </div>
    </section>
  );
}
