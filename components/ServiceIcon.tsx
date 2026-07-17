/** Minimal line-drawn icons for the service cards. */

const PATHS: Record<string, string> = {
  outfit:
    "M16 5 C16 8 13 9 11 11 L5 24 L27 24 L21 11 C19 9 16 8 16 5 M11 11 C14 13 18 13 21 11",
  necklace:
    "M8 8 C8 15 12 20 16 22 C20 20 24 15 24 8 M16 22 L16 25 M13 27 A3 2.4 0 0 0 19 27 A3 2.4 0 0 0 13 27",
  brush: "M22 5 L27 10 L12 25 L6 26 L7 20 Z M19 8 L24 13",
  hair: "M16 4 C10 4 7 9 8 14 C9 19 13 21 13 25 L19 25 C19 21 23 19 24 14 C25 9 22 4 16 4 M12 25 L20 25 M13 28 L19 28",
  flower:
    "M16 6 C18 10 22 10 24 8 C24 14 20 16 16 16 C12 16 8 14 8 8 C10 10 14 10 16 6 M16 16 L16 26 M11 22 C13 20 15 20 16 21 M21 22 C19 20 17 20 16 21",
  blouse:
    "M10 6 L13 9 L16 6 L19 9 L22 6 L22 14 C22 20 19 24 16 26 C13 24 10 20 10 14 Z",
  camera:
    "M6 11 L10 11 L12 8 L20 8 L22 11 L26 11 L26 24 L6 24 Z M16 13 A4.5 4.5 0 1 0 16 22 A4.5 4.5 0 1 0 16 13",
  wardrobe:
    "M12 6 L16 9 L20 6 L25 9 L23 15 L21 13 L21 26 L11 26 L11 13 L9 15 L7 9 Z",
  sherwani:
    "M13 5 L16 8 L19 5 L21 7 L21 27 L11 27 L11 7 Z M16 8 L16 27 M13 12 L14.5 12 M13 16 L14.5 16",
  suit: "M11 6 L16 11 L21 6 L25 8 L22 27 L10 27 L7 8 Z M16 11 L14 15 L16 24 L18 15 Z",
  palette:
    "M16 5 A11 11 0 1 0 16 27 C13 24 13 8 16 5 M5 16 L16 16 M7 10 L16 10 M7 22 L16 22",
  fragrance: "M13 10 L13 6 L19 6 L19 10 M11 10 L21 10 L22 27 L10 27 Z M16 14 L16 22",
  grooming:
    "M8 20 C8 13 12 8 16 8 C20 8 24 13 24 20 M8 20 L8 24 M24 20 L24 24 M12 14 C14 12 18 12 20 14",
  consult:
    "M6 8 L26 8 L26 20 L16 20 L11 25 L11 20 L6 20 Z M11 13 L21 13 M11 16 L18 16",
  footwear:
    "M6 20 C6 16 8 14 11 14 C14 14 15 17 18 18 L26 20 L26 23 L6 23 Z M10 23 L10 20 M18 23 L18 21",
  steam:
    "M8 22 L24 22 L26 27 L6 27 Z M12 18 C11 15 13 14 12 11 M16 18 C15 15 17 14 16 11 M20 18 C19 15 21 14 20 11",
  event:
    "M16 5 L18 11 L24 11 L19 15 L21 21 L16 17 L11 21 L13 15 L8 11 L14 11 Z M9 26 L23 26",
  couple:
    "M11 8 A3.5 3.5 0 1 0 11 15 A3.5 3.5 0 1 0 11 8 M21 8 A3.5 3.5 0 1 0 21 15 A3.5 3.5 0 1 0 21 8 M4 26 C4 20 7 17 11 17 C13 17 14.5 18 16 19 C17.5 18 19 17 21 17 C25 17 28 20 28 26",
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d={PATHS[name] ?? PATHS.outfit}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
