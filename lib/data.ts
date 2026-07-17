/** All page content in one place so copy edits never require touching markup. */

export type Img = { src: string; fallback: string; alt: string };

/* ---------- Narrative copy ---------- */
/* Multi-line headings are string arrays: each entry is one line on screen. */

export const HERO_COPY = {
  eyebrow: "Ushaswini Munupaly — Lead Fashion Stylist",
  headline: ["The Art of", "Wedding Styling"],
  subline:
    "Timeless bridal experiences through fashion, styling & creative direction.",
};

export const ABOUT_COPY = {
  heading: ["A stylist’s eye,", "a bride’s calm."],
  bio: "I’m Ushaswini — Lead Fashion Stylist at Mysore Saree Udyog, and the person brides call when they want their wedding to look the way it feels. My work lives where Kanchipuram silk meets a modern lens: rooted in tradition, styled for today. I’ve dressed brides, built campaigns, and directed shoots long enough to know that the best looks aren’t assembled — they’re composed. And on your wedding day, I’ll be the calmest person in the room.",
};

export const PHILOSOPHY_QUOTE =
  "Every bride deserves more than a beautiful outfit. She deserves a thoughtfully curated look — where fashion, jewellery, makeup, hair, and personality come together seamlessly.";

export const WHY_STYLIST = {
  without: {
    title: "Without a stylist",
    items: [
      "Outfit decisions made in a fog of opinions — and second-guessed until the last week.",
      "Jewellery that fights the saree instead of finishing it.",
      "Expensive shopping mistakes that never leave the wardrobe again.",
      "Last-minute panic when pleats, dupattas, and timelines collide.",
    ],
  },
  with: {
    title: "With a stylist",
    items: [
      "Every look coordinated — outfit, jewellery, makeup, and hair as one composition.",
      "Confident shopping decisions, made once and made well.",
      "Photographs with editorial polish, from the first ritual to the last dance.",
      "A wedding you actually get to enjoy, because someone else is watching the details.",
    ],
  },
};

export const VENDOR_STATEMENT = {
  quote: ["I act as the creative bridge", "between every artist at your wedding."],
  centerLabel: ["Your", "Stylist"],
};

export const PARTNERS_COPY = {
  heading: ["Add a stylist.", "Elevate everything."],
  intro:
    "Studios I partner with offer their clients something rare: a complete look, not just a service. Together we build higher-value packages, a premium client experience, and social content that markets itself.",
};

/** Eyebrow / heading / lede for each section intro, keyed by section id. */
export const SECTIONS = {
  about: { eyebrow: "About" },
  why: { eyebrow: "The Difference", heading: "Why every bride needs a stylist" },
  journey: {
    eyebrow: "The Process",
    heading: "The wedding journey",
    lede: "Eight quiet, deliberate steps between our first hello and your reception exit.",
  },
  services: { eyebrow: "Services", heading: "For the bride. For the groom." },
  moodboards: {
    eyebrow: "Signature",
    heading: "Editorial moodboards",
    lede: "Eight directions a bridal story can take. Drag to wander through them.",
  },
  portfolio: { eyebrow: "Selected Work", heading: "Portfolio" },
  vendors: { eyebrow: "Collaboration" },
  checklist: {
    eyebrow: "Trust the Details",
    heading: "On your wedding day, I’ve got…",
  },
  packages: {
    eyebrow: "Packages",
    heading: "Choose your level of calm",
    lede: "Every package is tailored after our discovery call. Pricing on request.",
  },
  partners: { eyebrow: "For Makeup Studios & Partners" },
  contact: { heading: ["Let’s create beautiful", "weddings together."] },
};

export const HERO_IMG: Img = {
  src: "/assets/placeholders/hero.jpg",
  fallback: "/assets/placeholders/hero.svg",
  alt: "South Indian bride in a Kanchipuram silk saree and temple jewellery, photographed in warm golden light",
};

export const ABOUT_IMG: Img = {
  src: "/assets/placeholders/about_image_usha.png",
  fallback: "/assets/placeholders/about_image_usha.png",
  alt: "Portrait of Ushaswini Munupaly styling a bridal look",
};

export const ROLES = [
  "Editorial & Campaign Styling",
  "Product & Catalog Styling",
  "Jewellery Styling",
  "Creative Direction",
  "Content Styling",
  "Fashion Visual Storytelling",
];

export const JOURNEY = [
  { title: "Discovery Call", text: "We talk about you — your story, your venues, your taste." },
  { title: "Moodboard", text: "A visual direction for every event, curated to you." },
  { title: "Shopping", text: "Guided sourcing — sarees, outfits, and fabrics, without the overwhelm." },
  { title: "Fittings", text: "Blouse, drape, and silhouette perfected before it matters." },
  { title: "Trial Styling", text: "Full look rehearsal — jewellery, hair, and makeup in concert." },
  { title: "Vendor Coordination", text: "One brief shared with every artist on your day." },
  { title: "Wedding Day Styling", text: "On-site, on-time, watching every pleat and pin." },
  { title: "Reception Styling", text: "A second look, a fresh mood — styled to close the celebration." },
];

export type Service = { icon: string; title: string; text: string };

export const BRIDE_SERVICES: Service[] = [
  { icon: "outfit", title: "Outfit Planning", text: "Every event mapped to a look — colour, fabric, and mood in sequence." },
  { icon: "necklace", title: "Jewellery Styling", text: "Temple gold, polki, or pearls — matched to neckline, drape, and light." },
  { icon: "brush", title: "Makeup Coordination", text: "A shared palette and brief so makeup completes the look, never competes." },
  { icon: "hair", title: "Hair Styling Direction", text: "Braids, buns, and flowers directed to suit face, veil, and ritual." },
  { icon: "flower", title: "Accessories & Floral Styling", text: "Jasmine, kanjivaram clutches, kamarbandhs — the finishing grammar." },
  { icon: "blouse", title: "Blouse Styling", text: "Necklines, sleeves, and embroidery designed around your jewellery." },
  { icon: "camera", title: "Photoshoot Styling", text: "Pre-wedding and portrait sessions styled like the editorials they'll become." },
];

export const GROOM_SERVICES: Service[] = [
  { icon: "wardrobe", title: "Wardrobe Planning", text: "Every event, one coherent story — from haldi kurta to reception suit." },
  { icon: "sherwani", title: "Sherwani Styling", text: "Cut, drape, and safa styled with the bride's palette in mind." },
  { icon: "suit", title: "Suit Styling", text: "Tailoring guidance and finishing for cocktail and reception evenings." },
  { icon: "palette", title: "Colour Coordination", text: "Couple looks that photograph as a pair, never a coincidence." },
  { icon: "fragrance", title: "Accessories & Fragrance", text: "Brooches, mojaris, pocket squares — and a scent that suits the hour." },
  { icon: "grooming", title: "Hair & Grooming", text: "A grooming timeline that peaks on the right day, not the week after." },
  { icon: "camera", title: "Photoshoot Styling", text: "Couple shoots and portraits, styled and directed frame by frame." },
];

export type Mood = {
  tint: "temple" | "kanchipuram" | "minimal" | "modern" | "cocktail" | "haldi" | "mehendi" | "reception";
  title: string;
  caption: string;
  img: Img;
};

export const MOODS: Mood[] = [
  {
    tint: "temple",
    title: "South Indian Temple Bride",
    caption: "Kumkum maroon · temple gold · jasmine",
    img: {
      src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-temple.svg",
      alt: "South Indian temple bride moodboard — deep maroon Kanchipuram silk and temple gold",
    },
  },
  {
    tint: "kanchipuram",
    title: "Royal Kanchipuram",
    caption: "Regal zari · heirloom polki · grandeur",
    img: {
      src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-kanchipuram.svg",
      alt: "Royal Kanchipuram moodboard — regal silk saree with heavy zari borders",
    },
  },
  {
    tint: "minimal",
    title: "Minimal Bride",
    caption: "Ivory · pearls · quiet luxury",
    img: {
      src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-minimal.svg",
      alt: "Minimal bride moodboard — soft ivory tones and restrained jewellery",
    },
  },
  {
    tint: "modern",
    title: "Modern Bride",
    caption: "Clean lines · statement drape · edge",
    img: {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-modern.svg",
      alt: "Modern bride moodboard — contemporary silhouettes with traditional fabric",
    },
  },
  {
    tint: "cocktail",
    title: "Cocktail",
    caption: "Evening shimmer · sculpted silhouettes",
    img: {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-cocktail.svg",
      alt: "Cocktail evening moodboard — shimmer, silhouette, and evening glamour",
    },
  },
  {
    tint: "haldi",
    title: "Haldi",
    caption: "Turmeric · marigold · morning sun",
    img: {
      src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-haldi.svg",
      alt: "Haldi ceremony moodboard — turmeric yellows, marigolds, and morning light",
    },
  },
  {
    tint: "mehendi",
    title: "Mehendi",
    caption: "Henna green · florals · ease",
    img: {
      src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-mehendi.svg",
      alt: "Mehendi moodboard — henna greens, florals, and afternoon celebration",
    },
  },
  {
    tint: "reception",
    title: "Reception",
    caption: "Champagne · candlelight · last dance",
    img: {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-reception.svg",
      alt: "Reception moodboard — champagne tones and evening elegance",
    },
  },
];

export type WorkCategory = "campaign" | "editorial" | "msu" | "jewellery" | "catalog" | "bts";

export const WORK_FILTERS: { id: WorkCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "campaign", label: "Campaign" },
  { id: "editorial", label: "Editorial" },
  { id: "msu", label: "Mysore Saree Udyog" },
  { id: "jewellery", label: "Jewellery" },
  { id: "catalog", label: "Product & Catalog" },
  { id: "bts", label: "Behind the Scenes" },
];

export type Work = { cat: WorkCategory; caption: string; img: Img };

export const WORKS: Work[] = [
  {
    cat: "campaign",
    caption: "Festive Campaign · Styling & Direction",
    img: {
      src: "https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-campaign-1.svg",
      alt: "Festive campaign styling — model in silk saree against a warm set",
    },
  },
  {
    cat: "editorial",
    caption: "Bridal Editorial · Magazine Feature",
    img: {
      src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-editorial-1.svg",
      alt: "Bridal editorial styling — close portrait with heirloom jewellery",
    },
  },
  {
    cat: "msu",
    caption: "Mysore Saree Udyog · Silk Collection",
    img: {
      src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-msu-1.svg",
      alt: "Mysore Saree Udyog campaign — Kanchipuram silk collection styling",
    },
  },
  {
    cat: "jewellery",
    caption: "Temple Jewellery · Styling",
    img: {
      src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-jewellery-1.svg",
      alt: "Temple jewellery styling — layered gold necklaces on silk",
    },
  },
  {
    cat: "catalog",
    caption: "Catalog · Drape Studies",
    img: {
      src: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-catalog-1.svg",
      alt: "Product and catalog styling — saree flat-lays and drape studies",
    },
  },
  {
    cat: "editorial",
    caption: "Golden Hour · Editorial",
    img: {
      src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-editorial-2.svg",
      alt: "Editorial styling — bride in golden-hour light",
    },
  },
  {
    cat: "campaign",
    caption: "Couple Campaign · Creative Direction",
    img: {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-campaign-2.svg",
      alt: "Couple campaign styling — coordinated wedding looks outdoors",
    },
  },
  {
    cat: "jewellery",
    caption: "Fine Jewellery · Detail Styling",
    img: {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-jewellery-2.svg",
      alt: "Bridal jewellery detail — rings and fine gold work",
    },
  },
  {
    cat: "msu",
    caption: "Mysore Saree Udyog · Festive Edit",
    img: {
      src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-msu-2.svg",
      alt: "Mysore Saree Udyog lookbook — festive edit styling",
    },
  },
  {
    cat: "bts",
    caption: "Behind the Scenes · On Set",
    img: {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-bts-1.svg",
      alt: "Behind the scenes — styling team preparing a bridal shoot",
    },
  },
];

export const VENDORS = [
  "Makeup Artist",
  "Hair Stylist",
  "Photographer",
  "Videographer",
  "Jeweller",
  "Florist",
  "Wedding Planner",
  "Decorator",
  "Designer",
  "Boutique",
];

export const CHECKLIST = [
  "Emergency Kit",
  "Dupatta & Veil Setting",
  "Jewellery Management",
  "Saree Pleats",
  "Steaming",
  "Safety Pins",
  "Touch-ups",
  "Photography-Ready Checks",
  "Timeline Management",
];

export type Package = { name: string; signature?: boolean; items: string[] };

export const PACKAGES: Package[] = [
  {
    name: "Bridal Styling",
    items: [
      "Discovery call & personal moodboard",
      "Outfit & jewellery planning",
      "One guided shopping session",
      "Trial styling session",
      "Wedding day styling on-site",
    ],
  },
  {
    name: "Couple Styling",
    items: [
      "Everything in Bridal Styling",
      "Groom wardrobe planning",
      "Couple colour coordination",
      "Photoshoot styling direction",
      "Two on-site styling events",
    ],
  },
  {
    name: "Wedding Weekend Styling",
    items: [
      "Looks for every event — haldi to reception",
      "Full shopping & fittings support",
      "Vendor briefs for each function",
      "On-site styling across the weekend",
      "Family styling guidance",
    ],
  },
  {
    name: "Luxury Concierge",
    signature: true,
    items: [
      "End-to-end creative direction",
      "Designer & boutique sourcing across cities",
      "Full vendor coordination",
      "Dedicated styling team on all event days",
      "Editorial photoshoot production",
    ],
  },
];

export const PARTNER_BENEFITS = [
  "Higher-value bridal packages",
  "A premium, end-to-end client experience",
  "Stronger, more shareable social content",
  "Natural cross-selling between services",
  "A wider vendor collaboration network",
  "Elevated brand positioning",
];

export const CONTACT = {
  instagram: "ushaswini.styles",
  phone: "+91 77806 81331",
  phoneHref: "+919000000000",
  email: "hello@ushaswinistyles.com",
  whatsappText:
    "Hi Ushaswini, I'd love to talk about styling for my wedding.",
};
