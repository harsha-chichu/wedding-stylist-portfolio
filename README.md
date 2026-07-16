# Ushaswini Munupaly — Bridal & Wedding Stylist Portfolio

A single-page portfolio website for Ushaswini Munupaly, Lead Fashion Stylist
specializing in Indian bridal styling. Luxury editorial magazine meets a South
Indian wedding — modern in structure, traditional Indian in soul.

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no frameworks.
Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Design system — "Silk & Zari"

| Token | Hex | Use |
|---|---|---|
| Ivory Silk | `#FAF6EF` | primary background |
| Kumkum | `#6B1F2A` | display text, headers |
| Antique Gold | `#B98A3E` | accents, borders, hover |
| Turmeric Haldi | `#E0A526` | tags, active states |
| Peepal Green | `#3E5C48` | B2B + contact sections |
| Charcoal Ink | `#2B2624` | body text |

Type: **Fraunces** (display serif) + **Work Sans** (body), via Google Fonts.

## Images

All photography is demo/placeholder. Each `<img>` points at an Unsplash demo
photo and falls back to an on-brand SVG placeholder in `assets/placeholders/`
if the remote image is unavailable. To use real photography, replace the
`src` attributes in `index.html` (the `alt` text describes what belongs in
each frame).

## Placeholder contact details to replace

- Instagram: `@ushaswini.styles` (hero of `#contact`)
- Phone / WhatsApp: `+91 90000 00000` (contact links and the floating
  WhatsApp button `wa.me` URL)
- Email: `hello@ushaswinistyles.com` (contact link and the enquiry form's
  `mailto:` handler in `js/main.js`)
