# Pokhara Heaven

Website for **Pokhara Heaven**, a Nepali / Himalayan-Indian restaurant in Madrid.
Two pages — **Home** (`/`) and **La carta / Menu** (`/carta`) — plus a reservations
form with a serverless email endpoint. Built from the design handoff in
`design_handoff_pokhara_heaven/`.

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **[Astro](https://astro.build) 5** (hybrid) | Ships ~zero JS — pages are static HTML for the fastest possible first paint. Total client JS is ~1 kB gzipped (menu filters + home animations). |
| Hosting | **Vercel** (`@astrojs/vercel`) | Static pages on the edge + one on-demand serverless function for reservations. |
| Images | **`astro:assets`** + Vercel Image CDN | AVIF/WebP, responsive `srcset`, lazy-loading, zero layout shift. Sharp in dev/build, Vercel's optimizer in prod. |
| Reservations | Serverless route → **Resend** (REST, no SDK dep) | A single `/api/reservar` endpoint emails the restaurant. |
| SEO | `@astrojs/sitemap`, OpenGraph, canonical URLs | |

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/  (+ .vercel/output)
```

> `astro preview` is not supported by the Vercel adapter — use `npm run dev`, or
> deploy to a Vercel preview.

## Project structure

```
src/
  data/
    menu.ts        ← the 145-dish dataset (single source of truth) + derived counts
    site.ts        ← contact, hours, delivery links (shared by nav/footer/forms)
  styles/
    global.css     ← design tokens (CSS custom properties), keyframes, shared classes
  components/
    PrayerFlag · Nav · Footer · ImageSlot · DishCard · GalleryCard
    MenuSection · FilterBar · ReservationForm
  layouts/Base.astro     ← <head>, fonts, SEO/OG, skip-link
  pages/
    index.astro    ← Home
    carta.astro    ← Menu (+ the search/filter logic, ported verbatim)
    gracias.astro  ← reservation thank-you (no-JS fallback target)
    api/reservar.ts← reservations endpoint (serverless)
public/            ← favicon, robots.txt
```

The **menu is data-driven**: edit a dish in `src/data/menu.ts` and it updates the
Menu page, the gallery, the jump-to-category list, and the counts.

## Replacing the placeholder photography

Every photo in the design is a **drop-zone**. Until a real image is supplied, each
renders a tasteful gradient placeholder. To add a real photo, drop the file in
`src/assets/` and pass it to the slot — it's then optimized automatically:

```astro
---
import heroImg from '../assets/hero.jpg';
---
<ImageSlot src={heroImg} alt="Momos al vapor humeantes" priority sizes="100vw" />
```

Slots to fill: **Home** — hero, story background, 6 dish cards, quote background, map.
**Menu** — hero + 8 gallery cards. `priority` is already set on both hero slots (LCP).

## Reservations — email setup

The `/api/reservar` endpoint validates the form and emails the restaurant via
[Resend](https://resend.com). Without a key it still accepts submissions and logs
them to the server console, so local dev works out of the box.

```bash
cp .env.example .env      # then fill in:
#   RESEND_API_KEY=...
#   RESERVATION_TO_EMAIL=hola@pokharaheaven.es       (who receives requests)
#   RESERVATION_FROM_EMAIL=reservas@pokharaheaven.es (verified Resend sender)
```

On Vercel, set the same three as Environment Variables. The form is
progressively enhanced: with JS it submits via `fetch` and shows an inline
confirmation; without JS it does a normal POST and redirects to `/gracias`.
A honeypot field blocks basic spam bots.

## Deploy (Vercel)

1. Push to a Git repo and import it in Vercel (framework auto-detected as Astro).
2. Add the three reservation env vars.
3. Deploy. Static pages are served from the edge; `/api/reservar` runs as a function.

## Production notes / decisions

- **Brand red consolidated** to `#9E2B25` (the handoff used two reds; this is its
  recommended "more premium" one). The spicy-indicator red `#C0392B` is kept as a
  distinct *semantic* color. Both live as tokens in `src/styles/global.css`.
- **Dish count is 145**, derived from the data (the handoff prose said "144" — the
  dataset actually contains 145 food dishes; drinks aren't counted as "platos").
  The hero stat and the live filter count now agree.
- **Placeholder content to replace:** address, phone, email (`src/data/site.ts`),
  delivery deep-links (currently `#`), and the Google Maps URL.
- **Mobile nav:** like the handoff, nav links hide below 720px and there is no
  hamburger menu yet — add one before launch. (The "Reservar" button stays visible.)
- **Fonts** load from Google Fonts (matches the handoff, incl. Devanagari
  subsetting). Self-hosting them via Fontsource is an easy future speed win.
- `prefers-reduced-motion` disables reveal-on-scroll, parallax, steam, and smooth
  scroll. The whole site works with JavaScript disabled.
```
