@AGENTS.md

## Component reuse

Before building any new page, read the landing page file and identify reusable components. Reuse them instead of building new ones from scratch. Specifically:

- Landing page location: `src/app/page.tsx`
- Shared components folder: `src/app/` (Navbar.tsx, Footer.tsx, and any shared UI components live here alongside the landing page)

Always check these locations first. If a component already exists for what you need (hero, card grid, tab component, CTA section, FAQ block, etc.), import and reuse it. Do not rebuild components that already exist. If a component is close but not quite right, extend it with props rather than duplicating it.

## Page composition rules

The site visual style is inspired by wisprflow.ai/features. Every feature page must use varied component types, not a single repeating layout. A flat page that is just hero + bulleted list + FAQ is not acceptable.

### Required ingredients on every feature page
- Hero with one italicized accent word in the H1 (e.g., "Des questionnaires conçus pour *votre* cabinet")
- Anchor nav linking to each major section below the hero
- At least 3 different section layouts on the page. Do not repeat the same card grid for every section.
- Icons (SVG, lucide-react) next to every sub-feature
- At least one tabbed component or interactive element
- At least one product visual (screenshot, illustration, or diagram)
- Final CTA card with a background image or gradient

### Section layout types to rotate between
- 3-up or 4-up icon card grid
- Tabbed component with switching content panels
- Horizontal feature row (headline + 3-4 short blurbs in a line)
- Big background image with inline feature blocks overlaid
- Platform / logo strip (for "works with X, Y, Z")
- Side-by-side: copy on one side, visual on the other

### What not to do
- Do not use the same card grid layout for every section on a page
- Do not write a feature page as one long markdown document with H2s and bullets
- Do not skip icons or visuals
- Do not put all content in plain text blocks

### Banned UI patterns

- Eyebrow / category pill tags above page headlines (e.g., a small pill that says "QUESTIONNAIRES PERSONNALISÉS" right above an H1 that says the same thing). Do not add these. The H1 is enough. If a category label is genuinely needed, it must be discussed first, not added by default.
- Generic "category label above headline" patterns in any section. If a section has a clear H2, it does not also need a small pre-headline tag above it.

# Product scope

Formio supports all federal and Quebec immigration demande types. Never frame the product around a specific number of templates or a list of supported programs. Pre-built templates exist as starting points, but they are not a feature to highlight, and they are not a limit. Copy should always imply full coverage of federal and provincial demandes.

# Writing style guide

When writing any prose for this project — blog posts, landing pages, marketing copy, comparison pages, FAQs, or any other written content — match the voice and patterns described below.

## Voice and tone

- **Authoritative but not salesy.** Write like someone who knows the operational reality of the space, not like a marketing team trying to sound knowledgeable. Mention the product matter-of-factly. Never use hype words like "revolutionary," "game-changing," "best-in-class," "cutting-edge," or "world-class." Let numbers and concrete details do the persuasion.
- **Plainspoken professional.** Educational and informative, but never academic or stiff. Use contractions ("don't," "doesn't," "isn't," "it's"). Don't get casual or chatty — no jokes, no "Hey there!", no rhetorical questions to the reader.
- **Quietly confident.** Make declarative statements without hedging. Don't say "it might be worth considering" or "you may want to think about." State the fact.
- **Author is invisible.** Never use "I" or "we." Write in third person about the product, second person about the reader ("your team," "your staff," "your business").

## Sentence patterns

- **Short-to-medium sentences dominate.** Most sentences are 10–20 words. Avoid long, winding sentences with multiple subordinate clauses. When sentences go longer, it's to pack in concrete detail, not to sound sophisticated.
- **Use comma-spliced expansions.** Use commas where many writers would use a colon, em dash, or period. Examples of this pattern: "another 10–15 minutes." / "at X per Y, that's a significant chunk..." / "tools built for the US market connect to American insurance networks, they don't support Canadian carriers." This gives the prose a flowing rhythm without being informal. It is a signature move — use it, but don't overdo it (mix in periods and em dashes for variety).
- **Use fragments for emphasis.** Drop a key data point at the end of a section as a fragment. Example: "Total per verification: 15–30 minutes."
- **Keep parallel structure in inline lists.** "no portal logins and no time on hold," "with no hold times and no staff involvement."

## Vocabulary

- **Concrete and operational.** Favor specific nouns over abstract ones. Use words people actually use in the workplace, not business-speak.
- **Quantify everything.** Almost every claim should have a number behind it. Use ranges with en dashes (15–30 minutes, $10,000–$15,000 per year), not hyphens or "to."
- **Words to use freely:** actually, directly, typically, automatically, your team, your staff.
- **Words to avoid:** leverage, robust, seamless, streamline, empower, solution (as a generic term), delve, navigate (as a verb metaphor), tapestry, comprehensive, holistic, "in today's [adjective] world," "it's important to note," "moreover," "furthermore," "in conclusion."
- **Banned vocabulary in French copy:**
  - "formulaire d'accueil" → use "questionnaire client" or "questionnaire"
  - "libellé" / "libellés" → use "question," "texte," or rewrite the sentence
  - Em dashes and hyphens as pauses → use commas, periods, or colons instead
- **No marketing superlatives.** Avoid "the best," "the easiest," "the most powerful," "the leading." Describe what the product does, not how great it is.

## Structural habits

- **Opening pattern: punchy claim → context → what this article covers.** Start with a concrete fact or stat. Follow with one or two sentences of context. Then a sentence telling the reader what the article will do.
- **Question-form H2s.** Use real questions as headers when appropriate ("What is X?", "How does X work?", "Why does X matter?"). They double as SEO-friendly and reader-friendly.
- **Bullets for genuine lists, prose for arguments.** Use bullets when there is an actual list (steps, items, criteria). Use prose for reasoning and explanation. Don't over-bullet.
- **The contrast move.** When introducing the product, use the pattern "Manual X takes Y. [Product] does it in Z." This is the standard closing move for most sections. It's a translation of effort/cost/pain into a clear before-and-after.
- **"That's [outcome]" sentences.** Translate stats into meaningful takeaways. "That's a significant chunk of the workday." "That's hours of time reclaimed every day."
- **FAQ section at the end.** Always include one. Use question-form H3s. Keep answers to 1–3 sentences. Echo the keyword phrasing of the question in the answer (helps with SEO).
- **Inline links, not standalone CTAs.** Link to related pages naturally inside sentences, not as separate "Click here" lines.

## Persuasion strategy

- **Specificity as proof.** Don't say "saves time" — say "1–3 hours reclaimed per day." Don't say "supports many providers" — list them. Concreteness is the persuasion.
- **Numbers do the lifting.** Wherever there's a claim, anchor it to a number, a range, or a named example.
- **Describe, don't sell.** When introducing the product, write a calm factual description of what it does and what the user sees. Never pitch.

## Writing samples

These samples are from a different domain than the current project, but the voice and structural patterns are what to match — not the topic.

### Sample 1: CDCP eligibility verification guide

August 18, 2025

CDCP eligibility verification for dental offices: a complete guide
The Canadian Dental Care Plan (CDCP) now covers millions of Canadians, and dental offices are seeing CDCP patients in their schedules every day. But CDCP verification works differently from standard private insurance verification, and getting it wrong can mean treating a patient who isn't actually covered, or missing coordination requirements that leave money on the table.

This guide covers everything dental offices need to know about verifying CDCP eligibility before appointments.

What is the CDCP?
The Canadian Dental Care Plan is a federal government program that provides dental coverage for eligible Canadians who do not have access to private dental insurance. It launched in 2024 and is administered by Sun Life on behalf of the federal government.

Eligibility is income-based: Canadians with an adjusted family net income under $90,000 may qualify. Those with income under $70,000 pay no co-payment, those between $70,000 and $79,999 pay a 40% co-payment, and those between $80,000 and $89,999 pay a 60% co-payment.

Who is eligible for the CDCP?
To qualify, a patient must:

Be a Canadian resident who has filed a tax return
Have an adjusted family net income under $90,000
Not have access to private dental insurance, including through an employer, a union, or a professional organization
The last point is critical for dental offices: a patient who has access to private dental insurance, even if they don't use it, is not eligible for the CDCP. Verifying this before treatment is part of the office's responsibility.

How to verify CDCP eligibility
Manual CDCP verification involves:

Logging into Sun Life Direct (the provider portal)
Looking up the patient using their CDCP member ID and plan number
Confirming active enrollment and coverage dates
Checking for any private insurance that would disqualify the patient
Identifying the patient's co-payment tier based on income bracket
Checking for any coordination requirements with provincial programs
For patients who also hold coverage under provincial programs such as Healthy Smiles Ontario, CDCP is the primary payer and the provincial program is secondary. This coordination check must also be completed before treatment. Learn more about Ontario-specific verification complexity.

Manual CDCP verification typically takes 15–30 minutes per patient.

What CDCP verification looks like with Cleer
Cleer's AI agent handles CDCP verification automatically before each scheduled appointment. It checks enrollment, confirms no private coverage disqualification, identifies the co-payment tier, checks for provincial program coordination, and delivers all results to your team before the patient arrives.

Your team sees a complete CDCP verification summary before the appointment, with no portal logins and no time on hold.

Common CDCP verification mistakes to avoid
Not checking for private insurance access. Patients sometimes don't disclose private coverage. Cleer flags this during verification.

Skipping provincial coordination checks. For patients in Ontario, the Healthy Smiles Ontario coordination step is required where applicable.

Verifying too far in advance, CDCP eligibility can change if a patient gains access to private coverage. Verify close to the appointment date, not weeks ahead.

Frequently Asked Questions
How do I verify CDCP eligibility for a patient?
Manual verification is done through the Sun Life provider portal. Cleer automates this, handling the portal check and delivering results to your team before the appointment.

What happens if a CDCP patient also has private dental insurance?
Having access to private dental insurance disqualifies a patient from CDCP coverage, even if they don't actively use that private plan. Cleer checks for this during verification and flags any issues before the appointment.

Does CDCP coordinate with Healthy Smiles Ontario?
Yes. For eligible Ontario patients, CDCP is the primary payer and Healthy Smiles Ontario acts as secondary. Cleer handles this coordination check automatically.

How far in advance should I verify CDCP eligibility?
Verify close to the appointment date, ideally 24 to 72 hours before, rather than weeks in advance, as eligibility can change.

Does the CDCP require pre-authorization for any procedures?
Yes. Complex services such as partial dentures and crowns require pre-authorization from Sun Life before treatment begins.

How long does CDCP verification take with Cleer vs manually?
Manual CDCP verification through the Sun Life portal typically takes 15–30 minutes per patient. Cleer completes it in minutes with no staff involvement.

### Sample 2: How dental insurance verification works in Canada

How dental insurance verification works in Canada, and why it's different from the US
Canadian dental offices spend 1–3 hours per day on manual insurance verification calls. With over 30 dental insurers operating across Canadian provinces, plus the newly introduced Canadian Dental Care Plan (CDCP), verification has become one of the most complex administrative tasks in Canadian dentistry.

This guide explains how dental insurance verification works in Canada, what makes it different from the US system, and how automation is changing the process.

What dental insurance verification actually involves
Dental insurance verification means contacting the insurer directly, by phone or through their provider portal, to get a full coverage breakdown for a specific patient before their appointment. This is different from submitting a claim; verification happens before treatment, not after.

A complete verification returns: deductibles, annual maximums, coverage percentages by category (preventive, basic, major, orthodontics), frequency limits for procedures like recalls and scaling, waiting periods, and any plan-specific restrictions or downgrades.

This information allows the dental office to give patients accurate cost estimates, avoid surprise write-offs from denied claims, and plan treatment with full knowledge of what the patient's plan actually covers.

The major Canadian dental insurers
The most commonly held dental plans in Canada include:

Sun Life Financial, one of Canada's largest group dental insurers and the administrator of the CDCP. Patients may hold both a Sun Life group plan and CDCP coverage, requiring a coordination-of-benefits check.

Manulife, one of Canada's most widely held group dental plans, covering employees across a broad range of employer benefit programs.

Canada Life, covers a large share of Canadian employer dental plans, including plans formerly held under Great-West Life and London Life following the consolidation of the Great-West Lifeco group in 2020.

GreenShield, one of the country's largest not-for-profit benefits carriers, widely held across employer plans in Ontario and beyond.

RBC Insurance, provides group and individual dental benefits across Canada.

Empire Life, a Canadian insurer with a significant group dental benefits book of business.

Equitable Life, one of Canada's largest mutual life companies, widely held across employer plans.

Pacific Blue Cross, BC's leading not-for-profit benefits provider, the most commonly held plan in British Columbia.

Blue Cross, operates as a network of independent regional plans across Canadian provinces.

What is the CDCP and why does it matter for dental offices?
The Canadian Dental Care Plan launched in 2024 and is administered by Sun Life on behalf of the federal government. It provides dental coverage for eligible Canadians who do not have access to private dental insurance.

For dental offices, the CDCP adds a new verification step: before treating a patient with CDCP coverage, the office must confirm eligibility through Sun Life's provider portal and check whether the patient holds any private coverage, because having access to private insurance disqualifies a patient from CDCP.

Where a patient also holds coverage under a provincial program such as Healthy Smiles Ontario, CDCP is the primary payer and the provincial program acts as secondary.

Manual verification vs. automated verification
Traditional manual verification involves a staff member calling the insurer's benefits line or logging into their portal, providing patient details, waiting for a response, and manually recording coverage details. Each verification takes 15–30 minutes depending on the carrier and plan complexity.

With automated verification, an AI agent contacts the insurance company directly and returns results to your team before the appointment, the same information that took 30 minutes to retrieve manually, delivered in minutes with no staff involvement.

The difference in practice: a dental office that previously spent 1–3 hours per day on verification calls gets that time back entirely.

Why Canadian dental insurance verification is harder than in the US
Regional variation, provincial fee guides, regional Blue Cross plans, and provincial public programs mean that a patient's coverage in Ontario may work differently from the same insurer's coverage in Alberta, British Columbia, Manitoba, or Saskatchewan.

CDCP coordination, the CDCP is a uniquely Canadian layer that US verification tools simply don't support. Offices must check CDCP eligibility, confirm no private coverage disqualification, and handle coordination with provincial programs.

More insurers, more variation, Canada has dozens of dental insurers including national carriers, regional Blue Cross plans, and third-party administrators like Johnston Group, RWAM, Group Health, and Group Source. Each has its own portal, phone system, and plan structures.

US tools don't cover Canadian carriers, tools built for the US market connect to American insurance networks. They don't support Canadian carriers, the CDCP, or provincial programs.

Frequently Asked Questions
Who are the main dental insurance providers in Canada?
The major Canadian dental insurers include Sun Life, Manulife, Canada Life, Great-West Life, RBC, Empire Life, GreenShield, Equitable Life, Pacific Blue Cross, and regional Blue Cross plans. The Canadian Dental Care Plan (CDCP) is also now a major source of dental coverage for eligible Canadians.

What does a dental insurance verification include?
A full verification returns a coverage breakdown including deductibles, annual maximums, coverage percentages by category, frequency limits, waiting periods, and any plan-specific restrictions. For CDCP patients, it also includes eligibility confirmation and co-payment tier.

How does the CDCP affect insurance verification for dental offices?
The CDCP requires a separate eligibility check through Sun Life before each appointment. Dental offices must also confirm the patient does not hold private dental insurance, and check for coordination of benefits with any applicable provincial programs.

What is the average time spent on dental insurance verification in Canada?
Manual verification typically takes 15–30 minutes per patient depending on the carrier. Most dental offices spend 1–3 hours per day on verification calls.

Can US dental insurance verification software be used in Canada?
No. US tools are built to connect to American insurance networks and do not support Canadian carriers including CDCP, Sun Life, Manulife, or provincial Blue Cross plans.

What is the best dental insurance verification software for Canadian offices?
Cleer is built specifically for Canadian dental offices, supporting all major Canadian carriers including Sun Life, Manulife, Canada Life, Great-West Life, RBC, Empire Life, GreenShield, Equitable Life, Pacific Blue Cross, and the CDCP. Cleer's AI agents contact insurers directly to retrieve coverage breakdowns, staff never go on hold.

### Sample 3: How long does dental insurance verification take in Canada?

How long does dental insurance verification take in Canada?
Canadian dental offices spend 1–3 hours per day on manual insurance verification. For a practice verifying coverage for 5–10 patients per day, at 15–30 minutes per verification, that's a significant chunk of your admin team's workday, time spent on hold with insurers, navigating portals, and manually recording coverage details.
This article breaks down where the time goes, what it costs, and what changes when verification is automated.
Where the time goes in manual verification
A single manual verification typically involves:

* Locating the patient's insurance card details (2–3 minutes)
* Calling the insurer's benefits line or logging into their portal (2–5 minutes)
* Waiting on hold (5–25 minutes depending on the carrier and time of day)
* Navigating the phone tree or portal to find the right information (2–5 minutes)
* Recording coverage details, deductibles, maximums, frequency limits, waiting periods, for your team (3–5 minutes)
For CDCP patients, add the Sun Life portal check and coordination-of-benefits review: another 10–15 minutes.
Total per verification: 15–30 minutes for standard private insurance, 25–45 minutes for CDCP patients.
What this costs in staff time
At 8 verifications per day, 20 minutes average per verification, a full-time front desk salary of $45,000 per year:

* Roughly 2–3 hours of staff time per day consumed by verification
* Approximately $10,000–$15,000 per year in salary cost attributable to verification alone
* Plus the opportunity cost of staff not being present with patients
These numbers scale with practice size. A multi-location group practice easily spends the equivalent of a full-time employee on verification calls across locations.
What changes with automated verification
Cleer's AI agent contacts the insurance company directly, by phone or portal, to retrieve the most up-to-date coverage information, ensuring accuracy. Your staff submits a request in about 10 seconds, and Cleer delivers a full coverage breakdown within 5–30 minutes in most cases. The same information that took 30 minutes to retrieve manually from carriers like Sun Life or Manulife, with no hold times and no staff involvement.
For a typical practice, that's 1–3 hours of staff time reclaimed every day.
Frequently Asked Questions
How long does dental insurance verification take manually in Canada?
Manual verification takes an average of 15–30 minutes per patient depending on the carrier, the complexity of the plan, and hold times. CDCP verification adds additional time.
How much does manual dental insurance verification cost Canadian dental offices?
At 20 minutes per verification across 5–10 patients per day, a practice spends 1–3 hours of staff time daily on verification, adding up to $10,000–$15,000 per year in salary cost.
How long does dental insurance verification take with Cleer?
It takes about 10 seconds to submit a request. Cleer's AI agent then contacts the insurer directly to retrieve coverage details, delivering a full breakdown within 5–30 minutes in most cases.
Which Canadian insurers does Cleer verify?
Sun Life, Manulife, Canada Life, Great-West Life, RBC, Empire Life, GreenShield, Equitable Life, Pacific Blue Cross, Blue Cross, and the CDCP.

## Quick checklist before finalizing any piece

- Did I open with a punchy, concrete claim?
- Are there numbers behind every important assertion?
- Did I avoid all the banned words?
- Is the product described, not pitched?
- Are sentences varied in length, with at least a few fragments and comma-spliced expansions?
- Does the FAQ section echo real questions a reader would search?
- Would a friend who reads my work recognize the voice?
