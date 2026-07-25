# Ushaswini Munupally — Bridal & Wedding Stylist Portfolio

A single-page portfolio website for Ushaswini Munupally, Lead Fashion Stylist
specializing in Indian bridal styling. Luxury editorial magazine meets a South
Indian wedding — modern in structure, traditional Indian in soul.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS 4**
- **TypeScript** / React 19
- `next/font` self-hosted Google Fonts (no runtime font CDN dependency)

```sh
npm install
npm run dev      # local development at http://localhost:3000
npm run build    # static export to ./out — deploy anywhere
```

## Design system — "Silk & Zari"

Defined as Tailwind theme tokens in `app/globals.css`:

| Token | Hex | Use |
|---|---|---|
| `ivory` | `#FAF6EF` | primary background |
| `kumkum` | `#6B1F2A` | display text, headers |
| `gold` | `#B98A3E` | accents, borders, hover |
| `haldi` | `#E0A526` | tags, active states |
| `peepal` | `#3E5C48` | B2B + contact sections |
| `ink` | `#2B2624` | body text |

Type: **Fraunces** (display serif) + **Work Sans** (body).

## Structure

- `app/page.tsx` — assembles the 13 sections in scroll order
- `components/` — one component per section, plus shared primitives
  (`ImageWithFallback`, `RevealInit` scroll animations, `motifs` SVGs)
- `lib/data.ts` — **the single place to edit content**: bio, quotes,
  headlines, section intros, services, packages, image sources, contact
  details. Changing any site text means changing it here, never in a
  component

## Images

All photography is demo/placeholder. Each image points at an Unsplash demo
photo and falls back to an on-brand SVG placeholder in
`public/assets/placeholders/` if the remote image is unavailable
(`components/ImageWithFallback.tsx`). To use real photography, replace the
`src` values in `lib/data.ts` — each entry's `alt` text describes what
belongs in the frame.

## Placeholder contact details to replace

All in `lib/data.ts` (`CONTACT`):

- Instagram: `@ushaswini.styles`
- Phone / WhatsApp: `+91 90000 00000`
- Email: `hello@ushaswinistyles.com`
