# Build prompt: rebuild the Follow Up Boss landing page, clean and short

Paste this whole file as your first message in a fresh Claude Code session. It is
self-contained. Where it conflicts with the repo's existing `BRIEF.md`, this file wins,
and you should update `BRIEF.md` to match once the build is done.

---

## What this is

Rebuild the main landing page for a service that installs **AI calling, texting,
qualification and lead routing directly inside a real estate team's existing Follow Up Boss
CRM**. Seller is VocalX Labs.

- Repo is already here: `C:\Users\nandha\fub-landing-page`. Rebuild `index.html` and
  `src/styles.css` from scratch. Reuse the assets in `img/` (logo, favicon, the two
  testimonial poster jpgs) and the existing supporting pages.
- It deploys to `https://vocalxlabs.com/fub/`, served from a subdirectory, so keep relative
  paths in the main pages.
- Local preview: the working config is in `C:\.claude\launch.json` under the name
  **`fub-site`** (python http.server on the repo root, port 4173). Start it with
  `preview_start({name:"fub-site"})`. The repo's own `.claude/launch.json` is NOT the one read.

## The single most important instruction: make it SHORT and clean

The previous version was too long and too dense. Nobody reads a wall of text on a landing
page, they scan. Fix that. Reference site for the feel is **structurely.com**: lots of
whitespace, large clear type, calm and professional, minimal decoration, one idea per
section, generous breathing room.

Concretely:
- Each section is one headline plus at most one or two short sentences, and if it needs a
  list, three lean items maximum. No paragraphs stacked on paragraphs.
- Big type. Generous spacing. Nothing cramped. No tiny text anywhere (nothing under 14px in
  body, and secondary text at 15 to 17px, not 11 to 13px).
- Whitespace is the design. Sections should breathe, roughly 80 to 120px of vertical padding
  on desktop, and never feel tightly packed.
- The whole page should be scannable top to bottom in about 20 seconds from headlines alone.

## Audience and offer

- **For real estate agents and teams closing 15 or more deals a year.** Not per month, per
  year. This is a solid solo agent or a small team, not only big shops.
- Offer: a one time build, **from $2,500**, then no monthly platform fee from us. The client
  runs it on their own telephony, model and hosting accounts.
- Primary call to action everywhere: **book a free call** (a short "Follow Up Boss teardown"
  where they leave with a map of their own lead flow). A free pilot exists but is conditional
  and only comes up on the call, so do not promise it outright on the page.
- Calendly: `https://calendly.com/vocalxlabs_fawaaz/discovery-call`

## Voice and claims

Write confident, outcome focused marketing copy. Drop the defensive hedging and constant
disclaiming that made the last version read long and nervous. Illustrative product visuals
and bold plausible framing are fine and do not need a caveat under every one. Say the thing
that converts, cleanly.

One practical guardrail, because it protects the business rather than limiting it: keep
anything attributed to the **real named people** (Ron Jones, Michael) and the **real client**
(Prime Realty Partners, Tim Bowen) truthful. Those are identifiable, and inventing specific
results for them is the one kind of exaggeration that can come back on VocalX Labs. Use their
real words. Everywhere else, use the strongest confident framing you can.

Style rules that still apply (these are house rules, keep them):
- No em dashes or en dashes anywhere, as characters or as HTML entities. Use commas,
  periods, parentheses, or "to" for ranges.
- No "24/7", no "while you sleep", no "never sleeps".
- No AI slop words: transform, revolutionize, unlock, unleash, elevate, empower, leverage,
  seamless, cutting edge, supercharge, game changer, delve, "imagine if", "the future of".
- No emoji.
- Vary sentence length. Specific beats generic.

## Page structure, lean

Keep it to roughly these sections, each short:

1. **Hero.** Headline, one short subhead, one primary button. Plus the animated visual
   described below. No row of three proof points under it (the client dislikes that).
2. **Trust strip.** A quiet line like "Built on the tools you already trust" with a few
   names (Follow Up Boss, Telnyx, Retell AI). One line, minimal.
3. **The problem.** One sharp headline and one or two sentences. If you use points, keep them
   to three, as clean text, not colored numbered cards.
4. **How it works.** The mechanism, in a clean simple flow of four or five steps. NO mockup
   images here. Just clean steps with clear labels and short text. Minimal.
5. **What we build.** The capability set, lean. A clean uniform grid is fine if the cards are
   white, subtle, evenly padded and calm. No colored numbered badges, no icon soup.
6. **Comparison.** Structurely's higher plan versus us only. See the comparison rules below.
   Simple, and it must stack cleanly on mobile with no sideways scrolling.
7. **Proof.** The two on camera testimonials plus one short line linking to the full case
   study. Do not dump the case study onto the landing page.
8. **Offer.** From $2,500, a short clean statement of what is included, and a one line note
   that there is an optional retainer for teams who want ongoing support.
9. **FAQ.** Five or six short questions, no more.
10. **Final call to action.**

That is it. Shorter than the current version by a lot.

## The hero animated visual (this is a specific request, build it well)

The hero has a clean animated mock that **fits within the height of the hero text block**, not
a tall card that towers over it. It is a small motion graphic showing a lead moving along a
timeline, where a marker advances from one point to the next and a little label pops in at
each stop (a text, then a call, then a qualified summary, then a handoff).

- A compact timeline, horizontal on desktop, vertical on mobile, with about five stops:
  New lead, then Text sent, then Call, then Qualified, then Handed to an agent.
- A marker or fill advances stop to stop on a smooth loop, roughly one stop every 1.5
  seconds, looping cleanly.
- As each stop activates, a small clean chip or label pops in near it with a gentle scale and
  fade (for example "Text sent 7:42pm", "Call picked up", "Qualified, Cherry Hill, $340k to
  $440k", "Live transfer connected"). Keep the chips minimal and real looking, not a
  skeuomorphic CRM screenshot.
- Build it dependency free with CSS keyframes, or a tiny JS interval toggling a
  data attribute. No libraries. Keep it lightweight.
- Respect `prefers-reduced-motion`: show the final state with all chips visible and no motion.
- It should look clean and premium, sit inside a simple white surface with a hairline border
  and a soft shadow, and be about the same height as the hero text next to it.

## Remove these completely

- The ownership cost calculator. Gone.
- The row of three proof numbers under the hero. Gone.
- The colored numbered badges on cards (the "01 02 03" tiles). Gone.
- All the mockup images in the mechanism and body sections (the fake CRM record card and the
  fake SMS thread). Gone. The only mock is the clean animated hero visual above.
- The wide comparison table that scrolls sideways on mobile. Replace per the rules below.
- The dedicated stats band and the scattered hard numbers (2.4 seconds, 3,272 contacts, and
  so on). Rework or remove them. Do not build a stats section.
- In the testimonials, remove the line that says neither client runs Follow Up Boss. Just let
  the testimonials speak.
- Do not make the landing page a case study about Tim or Prime Realty. Timothy is case study
  material that lives on its own page and gets a single short link from the landing page.

## Comparison rules

Compare only **Structurely's Company plan** against us. Keep it to about five rows and make it
a clean side by side that becomes two stacked cards on mobile, never a horizontally scrolling
table.

Suggested rows:
- Monthly fee: Structurely $999 a month. Us: none after the build.
- Setup: Structurely $2,500 onboarding on top. Us: the build itself, from $2,500.
- Every time your own lead replies: Structurely bills a credit. Us: a fraction of a cent to
  your carrier.
- Contract: Structurely annual. Us: none, it is a build.
- Who owns it: Structurely, the vendor. Us: you, on your own accounts.

Date the Structurely figures (as of August 2026) in small print and note they are the
published Company plan, so the comparison cannot quietly go stale.

## Testimonials

Two real clients on camera. Use their real quotes, keep the videos, and do not add any
disclaimer about which CRM they use.

- **Ron Jones**, real estate, Twin Falls, Idaho. Poster `img/ron-testimonial-poster.jpg`,
  video `https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a31748bc87bd94b12256f6f.mp4`.
  Quote: "She has set appointments for me. I highly recommend Vocalxlabs because it lets us
  agents spend our time where we create the most ROI."
- **Michael**, real estate agent, Los Angeles. Poster `img/michael-testimonial-poster.jpg`,
  video `https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a3174bd602476018d59400d.mp4`.
  Quote: "I thought, not another AI tool. But it even revived a two month old lead I'd
  completely written off, and I closed that deal."

Keep the videos as a tap to play poster (they are portrait mp4s on an external CDN). Without a
poster they render black, so keep the poster attribute.

## The case study page

Leave the detailed Prime Realty Partners case study page where it is
(`case-studies/timothy-fub-implementation/index.html`) and just link to it once from the
landing page with a short teaser. Do not rebuild the landing page around it.

## Privacy, non negotiable regardless of tone

None of this may appear on any public page, because it is the client's private data and
leaking it is a real breach, not a style choice:
- Phone numbers of the client, their agents, or any test contact.
- Names of the client's individual agents (the broker Tim Bowen may be named). Nobody else.
- The name of any real inbound lead.
- Any CRM person id, account id, API key, webhook id.
- Any infrastructure url or provider resource id, and in particular the client's internal
  search domain `theagentic.team`, which must never be printed. Use a neutral placeholder
  like `yourdomain.com` if a search link is shown at all.

## Mobile, because most visitors are on a phone

- Design mobile first, from 375px up. The page body must never scroll sideways at 320, 375 or
  414px. Any wide element scrolls inside its own container, but prefer designs that simply
  stack instead.
- Tap targets at least 44px. Sticky book a call button at the bottom on mobile, respecting the
  safe area inset.
- The hero headline, subhead and button should land in the first screen on a 375 by 812 phone
  (a real iPhone shows about 635px on load), and the animated visual sits just below or beside.

## Technical gotchas that will cost you time if you miss them

- Put `overflow-x:hidden` on `html`, never on `body`. On `body` it makes body the scroll
  container, which silently zeroes `window.scrollY` and kills every scroll handler (sticky
  CTA, header state).
- In this environment screenshots time out and IntersectionObserver does not fire (the browser
  pane is not compositing). Verify with `javascript_tool` reading computed styles and geometry,
  and force any scroll reveal to its visible state before measuring. If you use a scroll reveal
  animation, gate it behind a `js` class on `html` and add a failsafe timer, so a script
  failure or a non firing observer never leaves content invisible.
- If you add a `prefers-reduced-motion` override for reveals, match the selector specificity
  of the rule that hides them, or the override loses (media queries add no specificity).
- The site deploys under `/fub/`, so `404.html` needs `/fub/` prefixed absolute paths.
- `npm run check` runs `scripts/check.mjs`, which validates required files, the house style
  (no dashes, no banned phrases), privacy leaks, internal links, titles, descriptions and h1
  counts. Keep it passing. It already handles the `/fub/` deploy prefix.

## Suggested copy and numbers you can use

Pick and sharpen, do not copy verbatim.

Hero headline options:
- "Every lead worked in seconds. Inside the Follow Up Boss you already run."
- "Your Follow Up Boss, with an AI that calls, texts and qualifies every lead for you."
- "Keep Follow Up Boss. Add an AI that never lets a lead go cold."

Hero subhead:
- "We build AI calling, texting and routing into your CRM. One setup, from $2,500. No monthly
  platform fee, because you own it."

Button labels:
- "Book my free teardown call" or "Map my lead flow, free" or "See if your team qualifies".

Confident framing that is safe to use because it is not a fabricated client result:
- Speed: "First reply in under a minute, day or night."
- Coverage: "Every lead, every time, not just the ones somebody had time for."
- Database: "Works the whole database you already paid for."
- Ownership: "Your numbers, your accounts, your data. Cancel us and nothing switches off."

Avoid inventing a specific measured client outcome (a percentage lift, a number of
appointments, a revenue figure) attributed to Prime Realty, Ron or Michael. Confident
qualitative claims and the pricing math above carry the page without that risk.

## Definition of done

- Clean, short, scannable page that feels like structurely.com, with real whitespace and
  large type.
- Working animated hero timeline visual that fits the hero height and respects reduced motion.
- No calculator, no proof number row, no colored numbered cards, no body mockup images, no
  sideways scrolling comparison, no stats band.
- Comparison is Company plan versus us, stacking cleanly on mobile.
- Testimonials real, no CRM disclaimer.
- Audience is 15 or more deals a year.
- `npm run check` passes with zero errors, no horizontal overflow at 320, 375 and 414,
  verified by reading geometry in the browser pane.
- Update `BRIEF.md` to reflect this direction so the two documents agree.
