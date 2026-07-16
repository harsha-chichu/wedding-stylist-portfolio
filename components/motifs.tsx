/** Hand-drawn single-line SVG motifs shared across sections. */

export function PaisleyMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 8 C33 10 38 18 37 26 C36 35 29 41 22 39 C16 37 13 31 15 26 C17 21 23 20 26 24 C28 27 26 31 23 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GopuramMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 10 L24 20 M24 20 C18 20 14 25 14 31 L34 31 C34 25 30 20 24 20 M12 34 L36 34 M16 38 L32 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JasmineMotif({
  className,
  flipped = false,
}: {
  className?: string;
  flipped?: boolean;
}) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path
        d={
          flipped
            ? "M20 34 C15 28 15 22 20 16 C25 22 25 28 20 34 Z M20 16 L20 6 M14 10 C16 13 18 14 20 14 M26 10 C24 13 22 14 20 14"
            : "M20 6 C25 12 25 18 20 24 C15 18 15 12 20 6 Z M20 24 L20 34 M14 30 C16 27 18 26 20 26 M26 30 C24 27 22 26 20 26"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 10.5 L8.5 15 L16 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ZariDivider({ motif = "paisley" }: { motif?: "paisley" | "gopuram" }) {
  const Motif = motif === "gopuram" ? GopuramMotif : PaisleyMotif;
  return (
    <div
      className="mx-auto flex max-w-[1180px] items-center gap-5 px-5 text-gold sm:px-10"
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <Motif className="h-[30px] w-[30px] flex-none opacity-85" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
    </div>
  );
}
