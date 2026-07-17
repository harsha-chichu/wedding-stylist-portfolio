/** All page content in one place so copy edits never require touching markup. */

export type Img = { src: string; fallback: string; alt: string };

/* ---------- Narrative copy ---------- */
/* Multi-line headings are string arrays: each entry is one line on screen. */

export const HERO_COPY = {
  eyebrow: "Ushaswini Munupaly — Lead Fashion Stylist",
  headline: ["The Art of", "Bridal Styling"],
  subline:
    "Timeless bridal experiences through fashion, styling & creative direction.",
};

export const ABOUT_COPY = {
  heading: ["A stylist’s eye,", "a bride’s calm."],
  bio: "Fashion is where artistry meets intention and where style becomes a timeless narrative. Specializing in editorial, campaign, product, catalogue, and jewelry styling, I blend creative direction with refined aesthetics to craft timeless imagery that is both emotionally resonant and commercially impactful. Rooted in craftsmanship, precision, and an appreciation for elegance, my work transforms concepts into thoughtfully curated visual narratives that celebrate individuality, evoke emotion, inspire confidence, and leave a lasting impression.",
};

export const PHILOSOPHY_QUOTE =
  "Every bride deserves a look that is as unforgettable as the moment itself. Through thoughtful styling, every detail — from fashion and jewellery to hair, makeup, and personal expression — is curated to create a seamless and timeless bridal identity.";

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
    "Integrating bridal styling into your existing services creates a more elevated client experience while strengthening your studio's market position. By offering a complete styling journey — from fashion and jewellery to beauty coordination — you not only enhance the client's wedding experience but also unlock new opportunities for growth, collaboration, and brand value.",
};

/** Eyebrow / heading / lede for each section intro, keyed by section id. */
export const SECTIONS = {
  about: { eyebrow: "About" },
  why: {
    eyebrow: "The Difference",
    heading: "The Bridal Styling Experience",
    lede: "A wedding is one of life's most meaningful celebrations, and every detail deserves thoughtful attention. A bridal stylist brings clarity, cohesion, and confidence to the entire journey — ensuring every choice feels intentional and beautifully aligned.",
  },
  journey: {
    eyebrow: "The Process",
    heading: "The wedding journey",
    lede: "Twelve quiet, deliberate steps between our first hello and your reception exit.",
  },
  services: {
    eyebrow: "Services",
    heading: "For the bride. For the groom.",
    note: "For couples who want a beautifully cohesive wedding aesthetic, a dedicated styling experience ensures both partners complement one another while maintaining their individuality.",
  },
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
  {
    title: "Discovery Consultation",
    text: "Understanding your wedding vision, celebrations, lifestyle, preferences, and styling expectations.",
  },
  {
    title: "Personal Style & Aesthetic Discovery",
    text: "Exploring your personality, signature style, cultural influences, inspirations, and the overall aesthetic that reflects you.",
  },
  {
    title: "Colour Analysis & Silhouette Consultation",
    text: "Identifying the colours, silhouettes, fabrics, and design details that best complement your complexion, body proportions, and natural features.",
  },
  {
    title: "Bespoke Styling Concept",
    text: "Creating a personalized moodboard and visual direction for every celebration, including fashion, jewellery, beauty, hairstyles, and styling references.",
  },
  {
    title: "Curated Shopping Experience",
    text: "Guided shopping with carefully selected designers and brands to build a cohesive wardrobe while making thoughtful, value-driven purchases.",
  },
  {
    title: "Jewellery & Accessory Curation",
    text: "Selecting jewellery, footwear, bags, and accessories that elevate every bridal ensemble with balance and elegance.",
  },
  {
    title: "Beauty Direction",
    text: "Curating makeup and hairstyling concepts that seamlessly complement your outfits, features, and overall bridal aesthetic.",
  },
  {
    title: "Fittings & Refinement",
    text: "Perfecting every garment through fittings, alterations, and styling refinements to ensure impeccable fit and comfort.",
  },
  {
    title: "Editorial Styling Preview",
    text: "A complete styling rehearsal where every element is brought together to visualize the final bridal look before the celebrations.",
  },
  {
    title: "Creative Vendor Collaboration",
    text: "Coordinating with designers, jewellers, makeup artists, hairstylists, photographers, and other creative partners to maintain a unified styling vision.",
  },
  {
    title: "Wedding Day Styling",
    text: "Providing on-site styling, draping, accessorizing, wardrobe management, and final finishing touches for a seamless wedding day experience.",
  },
  {
    title: "Celebration Styling",
    text: "Styling for receptions and post-wedding events, ensuring every look feels distinct while remaining beautifully connected to your overall bridal story.",
  },
];

export type Service = { icon: string; title: string; text: string };

export const BRIDE_SERVICES: Service[] = [
  { icon: "consult", title: "Personal Style Consultation", text: "A one-on-one conversation to understand your taste, story, and vision." },
  { icon: "wardrobe", title: "Wardrobe Planning", text: "Every event mapped to a look — colour, fabric, and mood in sequence." },
  { icon: "outfit", title: "Outfit Curation", text: "Outfits sourced and composed for each celebration, never assembled last-minute." },
  { icon: "palette", title: "Colour Analysis", text: "The shades that flatter your complexion, chosen before the shopping begins." },
  { icon: "necklace", title: "Jewellery Curation", text: "Temple gold, polki, or pearls — matched to neckline, drape, and light." },
  { icon: "brush", title: "Makeup Direction", text: "A shared palette and brief so makeup completes the look, never competes." },
  { icon: "hair", title: "Hair Styling Direction", text: "Braids, buns, and flowers directed to suit face, veil, and ritual." },
  { icon: "fragrance", title: "Accessories Styling", text: "Clutches, footwear, and finishing pieces that complete every ensemble." },
  { icon: "flower", title: "Floral Styling", text: "Jasmine, garlands, and fresh flowers styled as part of the look itself." },
  { icon: "blouse", title: "Blouse Design & Styling", text: "Necklines, sleeves, and embroidery designed around your jewellery." },
  { icon: "camera", title: "Editorial Photoshoot Styling", text: "Pre-wedding and portrait sessions styled like the editorials they'll become." },
];

export const GROOM_SERVICES: Service[] = [
  { icon: "consult", title: "Personal Style Consultation", text: "A one-on-one conversation to define a style that feels like you, elevated." },
  { icon: "wardrobe", title: "Wardrobe Planning", text: "Every event, one coherent story — from haldi kurta to reception suit." },
  { icon: "sherwani", title: "Sherwani & Suit Styling", text: "Cut, drape, and tailoring styled with the bride's palette in mind." },
  { icon: "palette", title: "Colour Coordination", text: "Couple looks that photograph as a pair, never a coincidence." },
  { icon: "fragrance", title: "Accessories Styling", text: "Brooches, safas, pocket squares — the details that finish the frame." },
  { icon: "grooming", title: "Hair & Grooming Direction", text: "A grooming timeline that peaks on the right day, not the week after." },
  { icon: "footwear", title: "Footwear & Fragrance Curation", text: "Mojaris to oxfords, and a scent chosen to suit the hour." },
  { icon: "steam", title: "Wedding Day Styling", text: "On-site dressing, draping, and finishing touches through every event." },
  { icon: "camera", title: "Editorial Photoshoot Styling", text: "Couple shoots and portraits, styled and directed frame by frame." },
  { icon: "event", title: "Reception & Event Styling", text: "A distinct look for every evening, connected by one aesthetic thread." },
  { icon: "couple", title: "Couple Style Coordination", text: "Both partners in harmony — complementary, never matching for its own sake." },
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
      src: "https://images.unsplash.com/photo-uhM6J7rvcCs?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-temple.svg",
      alt: "South Indian temple bride moodboard — deep red saree with traditional gold jewellery",
    },
  },
  {
    tint: "kanchipuram",
    title: "Royal Kanchipuram",
    caption: "Regal zari · heirloom polki · grandeur",
    img: {
      src: "https://images.unsplash.com/photo-wcgCFUi_Zws?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-kanchipuram.svg",
      alt: "Royal Kanchipuram moodboard — regal silk saree with heavy gold zari borders",
    },
  },
  {
    tint: "minimal",
    title: "Minimal Bride",
    caption: "Ivory · pearls · quiet luxury",
    img: {
      src: "https://images.unsplash.com/photo-gYCdjq-2830?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-minimal.svg",
      alt: "Minimal bride moodboard — soft tones and restrained jewellery",
    },
  },
  {
    tint: "modern",
    title: "Modern Bride",
    caption: "Clean lines · statement drape · edge",
    img: {
      src: "https://images.unsplash.com/photo-03ob5sImu3s?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-modern.svg",
      alt: "Modern bride moodboard — contemporary saree styling with an editorial, candid feel",
    },
  },
  {
    tint: "cocktail",
    title: "Cocktail",
    caption: "Evening shimmer · sculpted silhouettes",
    img: {
      src: "https://images.unsplash.com/photo-mhkKsgHQbOw?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-cocktail.svg",
      alt: "Cocktail evening moodboard — graceful saree styling for an evening celebration",
    },
  },
  {
    tint: "haldi",
    title: "Haldi",
    caption: "Turmeric · marigold · morning sun",
    img: {
      src: "https://images.unsplash.com/photo-v5sG5-zYthE?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-haldi.svg",
      alt: "Haldi ceremony moodboard — couple showered with marigold flower petals",
    },
  },
  {
    tint: "mehendi",
    title: "Mehendi",
    caption: "Henna green · florals · ease",
    img: {
      src: "https://images.unsplash.com/photo-cAOL2touWXs?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-mehendi.svg",
      alt: "Mehendi moodboard — bride in green surrounded by henna, florals, and afternoon ease",
    },
  },
  {
    tint: "reception",
    title: "Reception",
    caption: "Champagne · candlelight · last dance",
    img: {
      src: "https://images.unsplash.com/photo-BHlJI-Rg0MM?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/mood-reception.svg",
      alt: "Reception moodboard — couple in traditional wedding attire, evening elegance",
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
      src: "https://images.unsplash.com/photo-tQ14OF1UQn0?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-campaign-1.svg",
      alt: "Festive campaign styling — portrait in a red and gold silk saree",
    },
  },
  {
    cat: "editorial",
    caption: "Bridal Editorial · Magazine Feature",
    img: {
      src: "https://images.unsplash.com/photo-c5szA-zveJE?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-editorial-1.svg",
      alt: "Bridal editorial styling — bride adorned in traditional attire",
    },
  },
  {
    cat: "msu",
    caption: "Mysore Saree Udyog · Silk Collection",
    img: {
      src: "https://images.unsplash.com/photo-HGAcJM3p3yk?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-msu-1.svg",
      alt: "Mysore Saree Udyog campaign — silk saree collection styling",
    },
  },
  {
    cat: "jewellery",
    caption: "Temple Jewellery · Styling",
    img: {
      src: "https://images.unsplash.com/photo-9b9SCjrZkXY?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-jewellery-1.svg",
      alt: "Temple jewellery styling — hands adorned with chunky gold rings and bangles",
    },
  },
  {
    cat: "catalog",
    caption: "Catalog · Drape Studies",
    img: {
      src: "https://images.unsplash.com/photo-SsGD7Vjl4AY?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-catalog-1.svg",
      alt: "Product and catalog styling — saree drape studies and styling comparison",
    },
  },
  {
    cat: "editorial",
    caption: "Golden Hour · Editorial",
    img: {
      src: "https://images.unsplash.com/photo-mb-qgRDcz-s?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-editorial-2.svg",
      alt: "Editorial styling — portrait in a red and gold saree",
    },
  },
  {
    cat: "campaign",
    caption: "Couple Campaign · Creative Direction",
    img: {
      src: "https://images.unsplash.com/photo-RIOegGLaUbE?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-campaign-2.svg",
      alt: "Couple campaign styling — coordinated wedding looks in a garden setting",
    },
  },
  {
    cat: "jewellery",
    caption: "Fine Jewellery · Detail Styling",
    img: {
      src: "https://images.unsplash.com/photo-vl46kNcTihA?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-jewellery-2.svg",
      alt: "Bridal jewellery detail — bride and groom's hands at a traditional ceremony",
    },
  },
  {
    cat: "msu",
    caption: "Mysore Saree Udyog · Festive Edit",
    img: {
      src: "https://images.unsplash.com/photo-K-FsaRBbSx8?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-msu-2.svg",
      alt: "Mysore Saree Udyog lookbook — bride in traditional red wedding attire holding flowers",
    },
  },
  {
    cat: "bts",
    caption: "Behind the Scenes · On Set",
    img: {
      src: "https://images.unsplash.com/photo-yTsQX3b6HmI?q=80&w=800&auto=format&fit=crop",
      fallback: "/assets/placeholders/work-bts-1.svg",
      alt: "Behind the scenes — styling team preparing for a fashion shoot",
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

export type Package = { name: string; tagline: string; signature?: boolean };

export const PACKAGES: Package[] = [
  { name: "Bridal Styling", tagline: "A personalized bridal styling journey." },
  { name: "Groom Styling", tagline: "Refined styling for every celebration." },
  { name: "Couple Styling", tagline: "A cohesive aesthetic for the bride & groom." },
  { name: "Wedding Weekend Styling", tagline: "Curated looks across every wedding event." },
  {
    name: "Luxury Styling Concierge",
    tagline: "End-to-end styling and coordination.",
    signature: true,
  },
];

export type PartnerBenefit = { title: string; text: string };

export const PARTNER_BENEFITS: PartnerBenefit[] = [
  {
    title: "Higher-Value Packages",
    text: "Expand your service offerings with premium styling experiences that increase package value.",
  },
  {
    title: "Luxury Client Experience",
    text: "Deliver a seamless, personalized journey that leaves a lasting impression.",
  },
  {
    title: "Editorial-Quality Content",
    text: "Create visually compelling campaigns and wedding imagery that elevate your social media presence.",
  },
  {
    title: "Cross-Selling Opportunities",
    text: "Introduce styling, jewellery, wardrobe planning, and concierge services within existing packages.",
  },
  {
    title: "Strategic Vendor Collaborations",
    text: "Build stronger partnerships with designers, jewellers, photographers, and wedding professionals.",
  },
  {
    title: "Elevated Brand Positioning",
    text: "Establish your studio as a complete luxury bridal destination, offering more than just makeup.",
  },
];

export const CONTACT = {
  instagram: "ushaswini.styles",
  phone: "+91 77806 81331",
  phoneHref: "+917780681331",
  email: "hello@ushaswinistyles.com",
  whatsappText:
    "Hi Ushaswini, I'd love to talk about styling for my wedding.",
};
