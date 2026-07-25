import { PaisleyMotif } from "./motifs";

export default function Footer() {
  return (
    <footer className="bg-kumkum-deep px-6 pb-10 pt-14 text-center">
      <p className="font-serif text-[1.35rem] text-ivory">Ushaswini Munupally</p>
      <PaisleyMotif className="mx-auto mb-1 mt-3.5 h-[26px] w-[26px] text-gold" />
      <p className="text-[0.95rem] tracking-[0.12em] text-champagne" lang="te">
        శుభమస్తు
      </p>
      <p className="mt-5 text-[0.78rem] tracking-wider text-ivory/45">
        &copy; {new Date().getFullYear()} Ushaswini Munupally · Bridal &amp; Wedding Stylist
      </p>
      <p className="mt-2 text-[0.7rem] tracking-wider text-ivory/30">
        Designed &amp; developed by{" "}
        <a
          href="mailto:harshachinnu129@gmail.com"
          className="underline decoration-ivory/20 underline-offset-2 hover:text-ivory/50"
        >
          harshachinnu129@gmail.com
        </a>
      </p>
    </footer>
  );
}
