# Build brief: Follow Up Boss AI implementation landing page

This is the single source of truth for copy, claims, and structure. Read it before changing
any page. Everything in "Verified evidence" is sourced from the real production build record.
Everything in "Never publish" stays out.

---

## 1. Who we are selling to

Real estate teams running Follow Up Boss with multiple agents, or solo agents closing 15+
deals a month. They have budget. They are not shopping on price.

What is true about them:

- They already pay for FUB, a lead source, and probably an AI tool on top.
- They have bought AI before and it underwhelmed. The scar is real.
- Their actual fear is not "will it work". It is **"will it embarrass me in front of my
  leads and my agents, and am I locked in again."**
- They will not migrate CRM. Suggesting it ends the conversation.
- They measure speed to lead and they know their unworked database is worth money.

So the page has to defeat three objections in order: *this will sound like a bot*,
*this is another subscription I cannot leave*, and *my agents will not use it*.

## 2. The offer

- **From $2,500, one time.** A build, not a seat. After that the client pays raw usage
  directly on their own telephony, model, and hosting accounts. No platform fee from us.
- **Primary CTA everywhere: book the Follow Up Boss teardown call.** 15 minutes. They leave
  with a written map of their own lead flow whether or not they hire us.
- **A free pilot exists but is conditional.** It is offered on the call if the team qualifies.
  Do not promise it unconditionally on the page. Phrase it as: if your setup is a fit, we run
  a pilot on your own leads before you pay for a build.
- Calendly: https://calendly.com/vocalxlabs_fawaaz/discovery-call

## 3. The anchor (all figures sourced, verify before changing)

Structurely, the category incumbent and the tool the case-study client was replacing:

| | Team | Company |
|---|---|---|
| Platform fee | $499/mo | $999/mo |
| One-time onboarding | $2,000 | $2,500 |
| Action credits | $0.08 each | $0.06 each |
| Contract | annual (month to month costs 20% more) | same |

One credit is one SMS **sent or received**, 10 seconds of AI talk time, or two emails.
Read that again: when your own lead texts you back, that costs you a credit. A five minute
AI call is 30 credits.

Structurely was acquired by CapStone Holdings in January 2026, with a new CEO appointed the
same month. That is fair to mention as transition risk. It is not fair to imply the product
got worse, because we have no evidence of that.

Follow Up Boss itself: Grow $58/mo, Pro $416/mo, Platform $833/mo, billed annually.
The client keeps paying this either way, so it stays out of any savings math.

**The honest comparison** is first-year platform cost against a one-time build plus raw usage.
Do not claim a savings number as a promise. The calculator on the page is directional and
must say so.

## 4. The case study: Prime Realty Partners

Named publicly with the client's agreement. Broker: Tim Bowen. Eight agents, South Jersey.
Three territory groups. Leads arrive from StreetText/Meta and their AgentFire IDX site.
They were **evaluating a replacement for Structurely**, which was the incumbent on their
warm-lead assignment.

Say "evaluating a replacement for". Do **not** say we replaced Structurely or that they
cancelled it. Structurely was still the active vendor on some records during the build.

### Verified evidence, safe to publish

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
  felt bot-like. Measured from the lead's message, not added to the end, so every reply lands
  in the same window whatever the model did.
- **The search link is sent as its own message**, because a long URL stacked on prose breaks
  across SMS segments and arrives unclickable.
- Per-contact on/off is a tag inside Follow Up Boss. Staff never open a second tool.
  The tag is re-read before every single outbound action, so a missed webhook can never cause
  a text to a lead somebody deliberately switched off.

### Defects we found and fixed, which is the most persuasive section on the page

Do not soften these into "continuous improvement". State them plainly. A premium buyer who
has been sold to by three AI vendors has never once been shown a defect list, and it is the
fastest trust you can buy.

- **The AI wrote an answer it had invented from its own voicemail** onto a contact record. The
  transcript of an unanswered call is the machine greeting plus our own message, and the
  analysis read our words back as the lead's answer. It merged as a fact and the question was
  then never asked again. Fixed: facts merge only from a call that actually connected.
- **A 22 second call whose entire content was "is now an ok time" and "not really" was logged
  as Interested.** That is the field agents filter on to decide who to ring. Fixed: Interested
  now requires evidence of interest.
- **"Now is not a good time" was being recorded as "declined a transfer".** The lead got a tag
  and a note saying they had refused an agent they were never offered. Fixed with a separate
  bad-timing signal that writes no tag and claims no refusal.
- **A lead got the same introduction text three times in 1.7 seconds**, from two schedulers
  racing each other. Fixed by claiming the step before the first await.
- **A search link built from nothing** went out to a lead who had answered no questions. It
  resolved to eight ZIP codes across three counties with no price and no property type. The
  client's own words were "a link to properties with not much context". Fixed: no link unless
  the lead actually named an area.

### Client quotes, verbatim, safe to use

- "This is honestly a much better test."
- "I LOVE that you set this up."
- "Speed in which the AI responds via text. Its so fast it can feel bot like."
- "The AI owns the lead until the lead is ready to speak to an agent or see a property.
  Handoff happens at that moment, not before."

Keep the typo in the bot-like quote. It is a real message from a real person and cleaning it
up makes it read invented.

### Still open, and the page must say so

- Appointment booking runs against the FUB calendar. If a team keeps its real diary in Google
  and never syncs it, the availability check believes agents are free when they are not. The
  agent veto by text is the backstop.
- The single-thread group text the client asked for is not what happens. The carrier rejects
  the group message, so the lead and the agent get a matched pair of texts in two threads.
- **No verified business outcome exists yet.** No appointments, closings, revenue, or
  conversion lift may be claimed for this client. This is not a limitation to hide, it is the
  reason the rest of the page is believable.

## 5. Testimonials

Both are real clients on camera, unscripted. Neither is a Follow Up Boss user, so do not
imply they are. They speak to the same underlying AI engine.

**Ron Jones**, real estate, Twin Falls, Idaho. 1:34.
`https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a31748bc87bd94b12256f6f.mp4`
> "She has set appointments for me. I highly recommend Vocalxlabs because it lets us agents
> spend our time where we create the most ROI."

Trained the AI on his team's scripts and values. Listens back to recorded conversations.

**Michael**, real estate agent, Los Angeles. 1:33.
`https://assets.cdn.filesafe.space/qmXJdLQTCzANbI5LCD8t/media/6a3174bd602476018d59400d.mp4`
> "I thought, 'not another AI tool.' But it even revived a two-month-old lead I'd completely
> written off, and I closed that deal."

Was openly skeptical. Says sellers cannot tell the conversations are automated. Saves 7 to 8
hours a week.

Poster frames exist in the other repo at
`C:\Users\nandha\Documents\resimpli-landing\public\ai-acquisition-manager\img\{ron,michael}-testimonial-poster.jpg`.
Without a poster the videos render as a black box, so copy them in.

## 6. Never publish

Any of this on a public page is a real breach, not a style problem.

- Phone numbers of the client, their agents, or the test lead
- Names of the client's agents. The broker is named with permission. Nobody else is.
- The name of the real inbound lead that arrived mid-build
- FUB person ids, account ids, API keys, webhook ids
- Railway URLs, Telnyx profile or number ids, Retell agent or LLM ids, SIP subdomains
- Kill switch or production traffic flag states
- Anything that frames the client as careless. They ran a sharper acceptance test than most
  vendors run themselves, and the page should read that way.

## 7. Voice and style, enforced

- **No em dashes and no en dashes anywhere.** Not as characters and not as HTML entities
  (`&mdash;`, `&ndash;`, `&#8212;`). Use commas, periods, parentheses, or "to" for ranges.
- **No "24/7", no "while you sleep", no "never sleeps".**
- Banned words: transform, revolutionize, game changer, unlock, unleash, elevate, empower,
  leverage, seamless, cutting edge, supercharge, robust, delve, imagine if, in today's
  fast-paced world, the future of.
- No emoji. No rocket ships.
- **No icon soup.** Decorative glyphs standing in for meaning are the clearest tell that a page
  was generated. Prefer a real number, a real screenshot, a real message thread, a real table.
  If an icon is used it must be a plain geometric mark carrying a label, never a substitute
  for one.
- Vary sentence length hard. Fragments are fine. Perfectly parallel H2s across every section
  read as machine output, so break the pattern on purpose.
- Specific beats superlative every time. "2.4 seconds" beats "lightning fast". "3,272
  contacts" beats "at scale".
- Write like an engineer who has shipped this, not a marketer describing it.

## 8. Section order, and why

Cold premium buyer, arriving from search or a link, on a phone. The order is a sequence of
objections, each one answered before the next can form.

1. **Hero.** The whole sale. Specific outcome, the ownership difference, one action.
2. **Stack strip.** What it is built on. Orientation, not decoration.
3. **The problem**, in their language, with the arithmetic of an unworked lead.
4. **Why the tool they already bought did not fix it.** The subscription and credit model.
5. **What we actually build.** The mechanism, inside FUB, four steps.
6. **A real conversation.** Show the thread. This does more than any feature list.
7. **The capability set.** Calling, texting, routing, reactivation, booking, controls.
8. **The case study.** Prime Realty Partners, in depth, as the sales letter.
9. **The defect list.** Trust through disclosure.
10. **Compliance and control.** TCPA window, opt-outs, kill switch, tag activation.
11. **Video testimonials.** Ron and Michael.
12. **The ownership math.** Comparison table plus the directional calculator.
13. **What you own when it ships.** Deliverables, so $2,500 reads as an engagement.
14. **Who this is not for.** Disqualification builds more trust than any guarantee.
15. **Objections.** Deep, honest, and answering the real ones.
16. **The offer and final CTA.**

## 9. Mobile

Roughly 90% of visitors arrive on a phone. Mobile is the design, not the fallback.

- Every layout decision starts at 375px and grows up.
- Tap targets 44px minimum. Nothing important behind a hover.
- The hero has to land the promise, the proof, and the button inside the first screen at
  375x812 without scrolling.
- Tables scroll inside their own container. The page body never scrolls sideways.
- Videos and the conversation mockup must not force horizontal overflow.
- Sticky bottom CTA on mobile, respecting the safe-area inset.
