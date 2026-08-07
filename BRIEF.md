# Build brief: Follow Up Boss AI implementation landing page

Single source of truth for copy, claims, and structure. Read it before changing any page.

The landing page was rebuilt short in August 2026. The governing instruction is in
`NEW-BUILD-PROMPT.md` and this brief has been updated to agree with it. Where the two ever
diverge again, `NEW-BUILD-PROMPT.md` wins and this file gets corrected.

---

## 0. The rule that outranks everything else: short and scannable

The previous landing page was too long and too dense, and nobody reads a wall of text on a
landing page. The reference feel is **structurely.com**: whitespace, large type, calm, one
idea per section.

- One headline plus at most one or two short sentences per section. If a section needs a
  list, three lean items, not nine.
- Large type. Body 17px, secondary copy 15 to 17px, nothing in copy under 14px.
- Section padding 72px on phones, 96 to 120px on desktop. Do not tighten it to fit more in.
  If a section will not fit, cut the copy, not the spacing.
- The page should be readable top to bottom from headlines alone in about 20 seconds.

Current headline scan, which is the test:

> Every lead worked in seconds, inside the Follow Up Boss you already run. / It is built
> inside your Follow Up Boss account, not beside it. / You are not losing leads, you are
> losing races. / Five steps, and your agents never leave the CRM. / Every other AI sends the
> same three listings to everybody, this one sends the house they opened three nights running.
> / One layer, working every lead in the account. / Rent it forever, or own it once. / A real
> team, a real build, and the whole record open. / One build, then the bills come to you, not
> to us. / See your own lead flow on one page.

## 1. Who we are selling to

Real estate agents and teams **closing 15 or more deals a year**. Per year, not per month.
That is a solid solo agent or a small team, not only big shops.

What is true about them:

- They already pay for FUB, a lead source, and probably an AI tool on top.
- They have bought AI before and it underwhelmed. The scar is real.
- Their actual fear is not "will it work". It is **"will it embarrass me in front of my
  leads and my agents, and am I locked in again."**
- They will not migrate CRM. Suggesting it ends the conversation.
- They measure speed to lead and they know their unworked database is worth money.

The page defeats three objections in order: *this will sound like a bot*, *this is another
subscription I cannot leave*, and *my agents will not use it*.

## 2. The offer

- **From $2,500, one time.** A build, not a seat. After that the client pays usage directly
  on their own telephony, model, and hosting accounts. No platform fee from us.
- **Primary CTA everywhere: book the free Follow Up Boss teardown call.** 15 minutes. They
  leave with a map of their own lead flow whether or not they hire us.
- An optional retainer exists for teams who want ongoing changes and monitoring. One line on
  the page, no more. It is not the pitch.
- **A free pilot exists but is conditional.** It comes up on the call if the team qualifies.
  Do not promise it on the page at all.
- Calendly: https://calendly.com/vocalxlabs_fawaaz/discovery-call

## 3. The anchor: Structurely Company plan only

The landing page compares **one plan against one plan**, in two cards that stack on mobile.
Never a wide table, never a horizontal scroll. Five rows:

| | Structurely, Company | This build |
|---|---|---|
| Monthly fee | $999 a month | None after the build |
| Setup | $2,500 onboarding, on top | The build itself, from $2,500 |
| Every time your lead replies | It bills a credit | A fraction of a cent, to your carrier |
| Contract | Annual | None, it is a build |
| Who owns it | The vendor | You, on your own accounts |

The figures must stay dated in small print (**as of August 2026**, published Company plan) so
the comparison cannot quietly go stale. Note that the comparison is on commercial model only,
and that we are not affiliated with Structurely.

Supporting facts, kept here rather than on the page: one credit is one SMS sent **or
received**, 10 seconds of AI talk time, or two emails, so a lead texting back costs the
subscriber a credit. The Team plan is $499/mo with $2,000 onboarding and $0.08 credits. FUB's
own subscription (Grow $58, Pro $416, Platform $833 monthly, billed annually) stays out of any
math, because the client pays it either way.

**The ownership cost calculator is gone and does not come back.** Nor does any savings
promise. The pricing math above carries the argument on its own.

## 4. The case study

`case-studies/timothy-fub-implementation/` holds the full Prime Realty Partners build in
depth. **It is a sales letter, not a lab report.** Everything on it reads as done and
working, because everything on it is done and working:

- All eleven acceptance scenarios carry a pass. The two that were fixed mid run say
  "Fixed, then passed", because that is what happened.
- The defect list stays, because it is the single most persuasive thing on the site, but
  it is framed as quality control: "five things we caught and closed before a single real
  lead was in scope". Every entry starts "Caught and closed".
- The old "what is still open" section is gone and does not come back. Calendar sync is
  described as a ten minute onboarding step, and the two thread introduction is described
  as what carriers actually allow, because both are true and neither is a defect.
- **Still no invented business outcome.** No appointments, closings, revenue or
  conversion lift may be claimed for this client until they are verified. The page is
  positive on the strength of the build record, not on numbers that do not exist.

The landing page gives it real weight: a dark feature panel at the top of the proof
section with the headline, three facts and a button, above the testimonials. But do not
rebuild the landing page itself around Tim, Prime Realty, or any single client.

Client: named publicly with agreement. Broker: **Tim Bowen**. Eight agents, South Jersey,
three territory groups. Say they were "evaluating a replacement for Structurely". Do **not**
say we replaced Structurely or that they cancelled it.

### Verified evidence, safe to publish on the case study page

Functional, from the production record:

- The FUB account holds **3,272 contacts**. That is the blast radius the safety design exists for.
- **Intro text out 2.4 seconds** after the Follow Up Boss webhook fired.
- AI call placed, **voicemail correctly detected and not counted as a connection**.
- Missed-call follow-up text, then an inbound reply, then **four qualification facts learned**
  in one exchange: area, budget, must-haves, timeline.
- The property search link resolved the town the lead named into a **three ZIP code band with
  a 340k to 440k price range**, built from what the lead actually said.
- **Every step mirrored onto the Follow Up Boss record. Zero mirror failures.**
- **Live transfer proven end to end.** Lead asked for an agent on an AI call, the territory
  group rang, an agent pressed 1 to claim, the call bridged, and a "Live transfer connected"
  note landed on the FUB record. An 84 second call, with transcript, playable recording,
  assignment, and funnel status all written back.
- After that claim, post-call analysis reported the lead still wanted an agent and the system
  **correctly did not ring anybody a second time**.
- A genuine inbound lead arrived from the client's live lead source mid-build. The system
  ingested it, logged it, and **sent nothing and wrote nothing**, because the activation tag
  was absent. That is the safety model working unattended on a real person.
- **29 post-call analysis fields.** **28 assertions** in the safety check that runs before
  every deploy.
- A 30-day audit of the client's own database found **only 5 of 312 recent leads had any
  property activity recorded**. We reported the gap rather than inventing an intent score.

Judgement and compliance:

- **Contact window is 8am to 9pm in the lead's local time**, the federal TCPA limit. A cadence
  step that comes due outside it is deferred to the next opening, never cancelled and never
  fired late.
- Consequence we told the client rather than hid: a lead arriving at 11pm now gets first
  contact at 8am, so speed to lead on overnight arrivals is hours by design.
- **Replies wait 25 to 35 seconds**, added after the client said the AI answered so fast it
  felt bot-like. Measured from the lead's message, not added to the end.
- **The search link is sent as its own message**, because a long URL stacked on prose breaks
  across SMS segments and arrives unclickable.
- Per-contact on/off is a tag inside Follow Up Boss. Staff never open a second tool. The tag
  is re-read before every single outbound action, so a missed webhook can never cause a text
  to a lead somebody deliberately switched off.

### Defects found and fixed

The most persuasive section on the case study page. Do not soften these into "continuous
improvement".

- **The AI wrote an answer it had invented from its own voicemail** onto a contact record. The
  transcript of an unanswered call is the machine greeting plus our own message, and the
  analysis read our words back as the lead's answer. Fixed: facts merge only from a call that
  actually connected.
- **A 22 second call whose entire content was "is now an ok time" and "not really" was logged
  as Interested.** Fixed: Interested now requires evidence of interest.
- **"Now is not a good time" was being recorded as "declined a transfer".** Fixed with a
  separate bad-timing signal that writes no tag and claims no refusal.
- **A lead got the same introduction text three times in 1.7 seconds**, from two schedulers
  racing each other. Fixed by claiming the step before the first await.
- **A search link built from nothing** went out to a lead who had answered no questions. It
  resolved to eight ZIP codes across three counties with no price and no property type. Fixed:
  no link unless the lead actually named an area.

### Client quotes, verbatim

- "This is honestly a much better test."
- "I LOVE that you set this up."
- "Speed in which the AI responds via text. Its so fast it can feel bot like."
- "The AI owns the lead until the lead is ready to speak to an agent or see a property.
  Handoff happens at that moment, not before."

Keep the typo in the bot-like quote. Cleaning it up makes it read invented.

### Still open

- Appointment booking runs against the FUB calendar. A team that keeps its real diary in
  Google and never syncs it will see the availability check believe agents are free when they
  are not. The agent veto by text is the backstop.
- The single-thread group text the client asked for is not what happens. The carrier rejects
  the group message, so the lead and the agent get a matched pair of texts in two threads.
- **No verified business outcome exists yet** for this client. No appointments, closings,
  revenue, or conversion lift may be claimed for them anywhere.

## 5. Testimonials

Both are real clients on camera, unscripted, and both stay on the landing page.

**Ron Jones**, real estate, Twin Falls, Idaho.
`https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a31748bc87bd94b12256f6f.mp4`
> "She has set appointments for me. I highly recommend Vocalxlabs because it lets us agents
> spend our time where we create the most ROI."

**Michael**, real estate agent, Los Angeles.
`https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a3174bd602476018d59400d.mp4`
> "I thought, not another AI tool. But it even revived a two month old lead I'd completely
> written off, and I closed that deal."

Rules:

- **No CRM disclaimer under the testimonials.** The old line about neither client running
  Follow Up Boss is removed and does not come back. Equally, never state or imply that they
  are Follow Up Boss users. Let the quotes speak and say nothing about their CRM.
- Keep the `poster` attribute on both videos. They are portrait mp4s on an external CDN and
  without a poster they render as a black box.
- **Show the full frame.** The wrap is `aspect-ratio:9/16` with `object-fit:contain`, in a
  narrow column (104px on phones, 130px on desktop) beside the quote. An earlier landscape
  crop cut the speaker's head off. Never crop these to a landscape box to save height.
- Tap to play, then real controls with sound. Handled by `[data-video]` in `src/app.js`.
- Posters live in `img/`. Originals came from
  `C:\Users\nandha\Documents\resimpli-landing\public\ai-acquisition-manager\img\`.

## 6. Never publish

Any of this on a public page is a real breach, not a style problem.

- Phone numbers of the client, their agents, or any test contact
- Names of the client's agents. The broker is named with permission. Nobody else is.
- The name of any real inbound lead
- FUB person ids, account ids, API keys, webhook ids
- Any infrastructure URL or provider resource id: Railway URLs, Telnyx profile or number ids,
  Retell agent or LLM ids, SIP subdomains
- **The client's internal search domain `theagentic.team`.** If a search link is ever shown,
  use a neutral placeholder such as `yourdomain.com`.
- Kill switch or production traffic flag states
- Anything that frames the client as careless

`scripts/check.mjs` enforces most of this. Do not weaken those patterns to make a build pass.

## 7. Voice and style, enforced

Write confident, outcome focused marketing copy. The previous version read long and nervous
because it disclaimed everything. Illustrative product visuals and bold plausible framing are
fine and do not need a caveat under every one.

The one guardrail that stays, because it protects the business: anything attributed to the
**real named people** (Ron Jones, Michael) or the **real client** (Prime Realty Partners, Tim
Bowen) must be truthful. They are identifiable. Inventing a specific measured result for them
(a percentage lift, an appointment count, a revenue figure) is the one exaggeration that can
come back on VocalX Labs. Everywhere else, use the strongest confident framing you can.

Hard rules:

- **No em dashes and no en dashes anywhere.** Not as characters and not as HTML entities
  (`&mdash;`, `&ndash;`, `&#8212;`). Use commas, periods, parentheses, or "to" for ranges.
- **No "24/7", no "while you sleep", no "never sleeps", no "around the clock".**
- Banned words: transform, revolutionize, game changer, unlock, unleash, elevate, empower,
  leverage, seamless, cutting edge, supercharge, delve, imagine if, fast-paced, the future of.
- No emoji.
- Vary sentence length. Fragments are fine. Perfectly parallel H2s across every section read
  as machine output, so break the pattern on purpose.
- Specific beats generic.

Safe confident framing that is not a fabricated client result:

- Speed: "First reply in under a minute, day or night."
- Coverage: "Every lead, every time, not just the ones somebody had time for."
- Database: "Works the whole database you already paid for."
- Ownership: "Your numbers, your accounts, your data. Cancel us and nothing switches off."

## 8. Section order

Ten sections, each short. This is the whole page.

1. **Hero.** Headline, one subhead, one button, one short reassurance line, plus the animated
   lifecycle visual. No row of three proof numbers under it.
2. **Positioning strip.** Not a logo wall. The one sentence that says it is built
   inside their Follow Up Boss account, not beside it, and nobody has to switch tabs.
3. **The problem.** One headline, one sentence, three plain text points. Point three
   ("people in your database are shopping right now") sets up Intent Match.
4. **How it works.** Five clean steps, labels and one line each. No mockup images.
5. **Intent Match.** The differentiator. See section 9b.
6. **What we build.** Six calm white cards, uniform grid, no numbered badges, no icons.
   Intent Match leads the grid.
7. **Comparison.** Structurely Company plan versus us, two cards, five rows.
8. **Proof.** The Prime Realty Partners case study carries this section, as a dark
   feature panel with three facts and a button. The two on camera testimonials sit
   underneath it, not above.
9. **Offer.** From $2,500, four things included, one line about the optional retainer.
10. **FAQ.** Six short questions.
11. **Final CTA.** Dark panel, `id="book"`, which the sticky mobile CTA keys off.

Backgrounds alternate white and `--soft` down the page. If you insert a section,
re-check the alternation rather than leaving two `soft` blocks touching.

### Removed, and staying removed

- The ownership cost calculator
- The row of three proof numbers under the hero
- Colored numbered badges on cards (the 01 02 03 tiles)
- All body mockup images: the fake CRM record card and the fake SMS thread
- The wide comparison table that scrolled sideways on mobile
- The dedicated stats band and the scattered hard numbers (2.4 seconds, 3,272 contacts and so
  on). Those belong to the case study page.

## 9. The hero animated visual

The only mock on the page. A lead moving along its own lifecycle, in a white card with a
hairline border and a soft shadow, about the same height as the hero text beside it.

- Five stops: New lead, Text sent, Call, Qualified, Agent. Horizontal rail on desktop,
  vertical on phones.
- A marker advances one stop every 1.5 seconds and a chip pops in under each stop as it
  activates. Two beats hold on the finished state, then it resets. Roughly a 12 second loop.
- Dependency free. `src/app.js` walks an `.on` class down the stops and marks the passed ones
  `.done`; CSS does everything else. No libraries.
- **The static default state in CSS is the FINISHED state**: every chip visible, dots and rail
  filled. The animated pending state only exists under `html.js`. A script failure therefore
  degrades to a complete, readable graphic rather than an empty box.
- The connector leaving a stop fills on `.done`, not `.on`, so the rail never runs ahead of
  the marker.
- `prefers-reduced-motion` shows the finished state with no motion, enforced twice: the script
  marks every stop `.done` and never starts the interval, and the CSS overrides repeat the
  animated selectors verbatim at the end of the file.

## 9b. Intent Match, the differentiator

The section the page is really sold on, and the thing no competitor in this category
does. Kicker and product name: **Intent Match**. Do not rename it to anything with
"intelligence", "engine" or "powered" in it.

The mechanism: the site already logs which listings a contact opened, when, and how many
separate days they came back to the same one. Follow Up Boss already stores it on the
person record. Intent Match reads that trail alongside the criteria captured in
conversation, then follows up with listings that match, by text and by voice. It also
wakes aged leads: a contact who went quiet and starts opening listings again gets worked
that night.

Positioning line to keep: **every other AI sends the same three listings to everybody.**

- The claim on the page is that this converts roughly 2.4 times better than a generic
  listing blast. It is a category claim about personalised versus generic follow up, not
  a measured result for Prime Realty, Ron or Michael, and it must never be attributed to
  them. **It is currently unsourced. Either attach a citation or soften it.**
- Highlighted in five places: the hero subhead ("listing matched follow up"), the nav,
  its own section, the first card in the capability grid, and one FAQ. The case study
  page carries its own Intent Match section too.
- The motion mock follows the same contract as the hero timeline: static default is the
  finished story, `app.js` walks a `.shown` class down the `[data-i]` nodes, reduced
  motion paints the last beat once. Left panel is the lead's own activity building up,
  right panel is the matched follow up that comes out of it, ending on a booked showing.
- **The addresses in the mock are illustrative.** Never reproduce a real lead's browsing
  history from the client's CRM, even without their name on it. See section 6.

## 10. Mobile

Most visitors arrive on a phone. Mobile is the design, not the fallback.

- Every layout decision starts at 375px and grows up. The body must not scroll sideways at
  320, 375 or 414px.
- Tap targets 44px minimum. Nothing important behind a hover.
- The hero headline, subhead, button and reassurance line all land in the first screen at
  375x812 (a real iPhone shows about 635px on load). The visual sits just below.
- Prefer stacking over any element that scrolls inside itself.
- Sticky bottom CTA on mobile, respecting the safe-area inset, hidden once the final CTA is
  close.

## 11. Technical notes that will cost you time if you miss them

- Put `overflow-x:hidden` on `html`, never on `body`. On `body` it makes body the scroll
  container, which silently zeroes `window.scrollY` and kills every scroll handler.
- **In the browser preview pane the page is not compositing.** `document.hidden` is true,
  `requestAnimationFrame` fires zero frames, so CSS transitions never advance and
  `getComputedStyle` reports the pending value forever. IntersectionObserver does not fire
  either, and screenshots time out. Verify by reading geometry with `javascript_tool`, and to
  check a transitioned property inject `*{transition:none !important}` first and read the
  resolved value.
- The reveal animation is gated behind a `js` class on `html` with a 2500ms failsafe in
  `src/app.js`, so a non firing observer never leaves content invisible.
- A `prefers-reduced-motion` override must match or beat the specificity of the rule it
  overrides. Media queries add none of their own.
- Rotated pseudo-elements overflow their layout box. An 11px square turned 45 degrees has a
  ~15.6px bounding box, which is why the FAQ chevron carries a `margin-right`.
- `.flow-step` is a two column grid and the inner pages hang a third child (`<em>`) off it.
  That child needs an explicit `grid-column:2` or it auto-places into the 38px rail track.
- The site deploys under `/fub/`, so `404.html` uses `/fub/` prefixed absolute paths and
  therefore looks unstyled on the local preview server. That is correct, not a bug.
- `src/styles.css` is shared by every page. The inner pages are written against the shared kit
  above the LANDING marker in that file. Do not remove a class from it without checking
  `about/`, `contact/`, `how-it-works/`, `ai-*`, `lead-*`, `privacy/`, `terms/`, `404.html`
  and the case study.
- `npm run check` runs `scripts/check.mjs`: required files, house style, privacy leaks,
  internal links, titles, descriptions, h1 counts. Keep it passing at zero errors.

## 12. Local preview

The working config is in `C:\.claude\launch.json` under the name **`fub-site`** (python
http.server on the repo root, port 4173). The repo's own `.claude/launch.json` is not the one
that gets read.
