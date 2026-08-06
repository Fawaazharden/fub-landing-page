# FUB Landing Page

Full multi-page static website for VocalX Labs’ Follow Up Boss implementation offer.

## Run locally

```bash
npm run start
```

Open `http://localhost:4173`.

## Validate

```bash
npm run check
```

## Pages

- Home
- How it works
- AI calling
- AI texting
- Lead routing
- Lead reactivation
- Timothy FUB implementation case study
- About
- Contact / Calendly
- Privacy and terms

## External assets

The logo, Calendly scheduler, and two client testimonial videos use the public URLs already used by the primary VocalX Labs website.

## Evidence guardrail

The Timothy case study reports verified functional acceptance results and clearly separates them from unverified business-performance metrics. It must not be changed to claim appointments, closings, revenue, or conversion lift without source evidence.

## Deployment

This is dependency-free static HTML/CSS/JS and works on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or standard hosting. `vercel.json`, `robots.txt`, and `sitemap.xml` are included. Canonicals currently point to `https://vocalxlabs.com/fub/`; update them if the final dedicated domain changes.
