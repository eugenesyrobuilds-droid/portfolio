# Case Studies Content — for copy into portfolio pages

> **How to use.** Each section below maps 1:1 to one case study page in the portfolio skeleton. Copy text blocks into the corresponding component props or `<p>` tags. Tables go into `<MetricsTable>` props. Tech stack into `<TechStack>` groups. ProcessNote into the dedicated component.
>
> All content is in English (portfolio is English-only — international healthtech market).

---

# Case Study 1: Medics Quality Indicators

## Header data

- **Title**: Medics Quality Indicators
- **Subtitle**: A Chrome extension that overlays on Ukraine's Medics EMR to surface 13 primary-care quality indicators per patient in real time.
- **Status**: Production
- **Tags**: `Healthcare`, `Chrome Extension`, `AI-assisted dev`
- **Slug**: `medics-quality-indicators`

## TL;DR (for the blue box at top)

> Ukrainian primary care physicians must meet quality indicators set by the Ministry of Health, but the Medics EMR doesn't surface per-patient indicator status — doctors review fields manually, with predictable results: low oncology screening coverage nationwide. I built a Chrome extension that parses the patient view and shows indicator status (done / overdue / partial / missing) in real time. Used by 6 physicians at my clinic. Over 3 months, colorectal screening referrals grew ×27, prostate ×4.7, breast ×5.8 — measured against NSZU performance reports.

## Section: Context

Ukraine's National Health Service (NSZU) ties primary care reimbursement to a set of quality indicators codified by Ministry of Health orders — cancer screenings, cardiovascular risk assessment, TB and HIV screening, age-based preventive exams. A family physician with ~1,800 patients on their declaration list is responsible for hitting these indicators across the entire roster.

The problem is operational. To know which screenings a specific patient still needs, a doctor opens their card in Medics — one of the largest EMRs used in Ukrainian primary care — and manually reviews diagnoses, observations, referrals, and diagnostic reports across multiple collapsed sections. With a 15-minute appointment slot, this isn't done thoroughly. The country-wide outcome is well-documented: low oncology screening coverage, missed cardiovascular risk windows, declining indicator performance year-over-year.

I'm a family physician at a rural Ukrainian outpatient clinic with ~1,800 patients on my list. I saw the same pattern in my own practice: the indicators existed, the EMR contained the data, but bridging the two was manual work that didn't happen consistently.

## Section: Solution

I built a Chrome extension that runs as an overlay on medics.ua. When a doctor opens a patient card, the extension parses the page contents (diagnoses with ICPC-2 / ICD-10 codes, LOINC observations, referrals, diagnostic reports, interaction actions), runs the data through a rule-based matcher encoding the MoH indicator logic, and surfaces a per-patient status panel: which of 13 indicators are done, overdue, partial, or not started.

The extension covers the following indicators:

- Cardiovascular risk score (full assessment)
- Hypertension management
- Diabetes screening
- Prostate cancer screening (referral + result)
- Colorectal cancer screening (referral + result)
- Breast cancer screening (referral + result)
- TB screening (4-symptom WHO)
- HIV screening
- Preventive exam, age 40-64
- Preventive exam, age 65+

The matcher is deliberately rule-based, not LLM-driven. Indicator logic is regulatory — it has to be auditable, predictable, and explainable. A black-box model would create medico-legal liability. Rules are coded against ICPC-2 / ICD-10 whitelists and LOINC observation codes, so when MoH updates the regulation, only the rule definitions change.

A secondary feature auto-collects text for form 027/о (a standard outpatient summary form), pre-filling structured fields from the chart.

## Section: Impact

Five physicians from my clinic (a cohort of family doctors managing parallel rosters) used the extension from February 2026 onward. NSZU sends monthly performance reports to outpatient clinics in Excel — these became the verification source.

Over January → April 2026 the cohort showed measurable shifts in oncology screening behavior:

[INSERT MetricsTable here:]

| Screening | Referrals Jan | Referrals Apr | Change | Actual coverage Jan → Apr |
|---|---|---|---|---|
| **Colorectal cancer** | 0.11% | 2.91% | **×27** | 0.030% → 0.081% (+174%) |
| Prostate cancer | 0.73% | 3.42% | ×4.7 | 0.226% → 0.502% (+123%) |
| Breast cancer | 0.61% | 3.54% | ×5.8 | 0.298% → 0.324% (+9%) |
| HIV screening | 5.71% | 9.72% | +70% | — |
| CV risk assessment | ~61% | ~61% (+0.5%) | Stable | — |

Two observations matter:

**First**, the lag pattern is clean. February (deployment month) showed early adoption (prostate cancer referrals lifted within the first month). March-April is where most of the cohort-wide gains landed — which matches the realistic timeline of doctors integrating a new tool into routine.

**Second**, the cardiovascular risk indicator stayed stable. This is a healthcare-product win, not a healthcare-product disaster — it means the tool improved one outcome without regressing established practice. In tools that surface "what's missing", there's a real risk of attention shift away from what's already working. That didn't happen.

The "actual coverage" column is more informative than the referral column. Referral percentage shows what the doctor *ordered*; coverage shows what patients *actually completed*. Coverage moves slower (patients have to go to imaging centers, return for results), but it's the metric that matters for population health.

## Section: Tech stack & architecture

[INSERT TechStack here:]

- **Frontend**: Pure JavaScript (ES6+) · Chrome Extension Manifest V3 · DOM API
- **Storage**: chrome.storage.sync
- **Matching**: Rule-based engine (no LLM) · ICPC-2 / ICD-10 whitelist · LOINC observations
- **Codebase**: ~3,800 LOC core · 4,887 LOC including TB Module integration

Architecturally the extension separates concerns into:

- `parser.js` (176 LOC) — DOM selectors for medics.ua's AngularJS-based UI
- `data-collector.js` (196 LOC) — interaction with collapsible sections, episode toggles
- `analyzer.js` (898 LOC) — extracted data structured into a patient model
- `indicators-rules.js` (436 LOC) — declarative rules per indicator (MoH regulation as code)
- `indicator-matcher.js` (481 LOC) — pure matching logic against the patient model
- `ui.js` (1,152 LOC) — overlay UI injected into the page

About 30% of the codebase (rules + matcher + helpers, ~1,100 LOC) is platform-agnostic — it would port to a different EMR by writing a new parser. The current design doesn't formalize a `PlatformAdapter` interface, but the separation is clean enough that adapting to Helsi or EMCi is a known-shape engineering task, not a rewrite.

## Section: How this was built (ProcessNote)

[INSERT ProcessNote here:]

- **Ownership**: I identified the clinical problem, specified the indicator logic against MoH regulations, designed the rule-based parser architecture, deployed to my colleagues, and measured adoption against NSZU reports.
- **Collaboration**: AI-assisted development with Claude. AI generated implementation; I owned product, design, and architectural framing decisions. I can read any part of the code and explain what it does; for changes, I work with AI as my development partner.
- **Time invested**: ~6 weeks of part-time work in early 2025; ongoing maintenance.

## Section: What I learned

- **Regulatory logic deserves rule-based code, not AI inference.** Black-box models in clinical decision support create liability and break the audit trail. The instinct to "throw an LLM at it" was wrong here. Hand-encoded rules against ICPC-2 codes give us explainability, reproducibility, and a clear update path when regulations change.
- **Distribution among doctors works socially, not technically.** I never built an install pipeline, an admin panel, or onboarding. Five physicians adopted the tool because they saw it on a colleague's screen and asked for access. For internal clinical tools, professional curiosity is the channel.
- **The most valuable metric was the one the doctors didn't ask for.** Referral % is what doctors track. *Actual coverage* (what patients completed) is what NSZU pays for. Showing both side-by-side reframed the conversation about which indicators matter.
- **The adoption story among older physicians surprised me.** Most of my colleagues are senior doctors near retirement age. I expected resistance to a Chrome extension layered on top of their EMR. What I got instead was curiosity and active use — the metrics confirm it. Worth remembering when designing tools for clinical users: the demographic stereotype about technology adoption breaks down when the tool removes work rather than adding it.
- **Encoding regulatory logic into code was less the bottleneck than choosing the right AI partner.** The MoH indicator rules are precisely written — translating them to ICPC-2 whitelists and observation matching was tractable. What took longer was the meta-problem: this was my first AI-native build, and I cycled through several models and prompting approaches before landing on Claude with a task decomposition that fit my mental model. The lesson generalizes: when you're new to AI-assisted development, the tool selection and workflow design is the real curve, not the project itself.

## Section: Next steps

The extension already covers all 13 indicators currently defined for primary care quality reporting in Ukraine, so the core surface is feature-complete. The active work is integration with the TB Module — already shipped through a monkey-patched display callback that auto-syncs diagnoses and fluorography results into the TB system. A second direction I'm considering is a parallel module for vaccination tracking, which would follow the same pattern: parse the EMR, surface what's due, sync the result. Whether that ships depends on whether the underlying schema rewards it — vaccination tracking lives in a different part of the EMR with different data shape, and a copy-paste of the indicator logic may not be the right approach.

---

# Case Study 2: TB Module

## Header data

- **Title**: TB Module
- **Subtitle**: Full digital replacement of paper and Excel-based tuberculosis documentation at a primary care clinic.
- **Status**: Production
- **Tags**: `Healthcare`, `Full-stack web app`, `Supabase`
- **Slug**: `tb-module`

## TL;DR

> Tuberculosis risk-group registries, fluorography records, and case logs at Ukrainian primary care clinics are kept in Excel and on paper. In one of my clinics this meant 28 risk-group sheets, a fluorography file covering ~1,100 patients, and a paper WHO 4-symptom screening questionnaire. I built a self-hosted web module that fully replaces this paper workflow: patient registry with risk groups and TB status, fluorography history with auto-scheduled next-due dates, sputum test tracking, auto-generated referrals, EMR data sync, weekly cron reminders. 1,851 patients migrated. Used by my nurse and me daily. Running cost: $0/month on free tiers.

## Section: Context

Tuberculosis surveillance at the primary care level in Ukraine requires layered documentation: risk-group registries (medical risk: COPD, HIV, diabetes, etc; social risk: prisoners, migrants, contacts of detected cases), fluorography history per patient with annual scheduling, sputum test results from regional labs (GeneXpert / microscopy / culture / PCR), separate logs for detected and contact cases, and a paper-based WHO 4-symptom screening questionnaire (form Appendix 9) administered at each contact.

In my clinic this stack was:

- 14 risk-group Excel sheets × 2 locations (Zaluzhya AZPSM + Bilohirsk AZPSM) = **28 sheets**
- 2 detected/contact registries × 2 locations = **4 sheets**
- 1 fluorography file with ~1,100 patients per location
- ~5 xlsx files total, plus a folder of MoH order PDFs
- Paper Appendix 9 questionnaires, stored in a binder

Updating risk groups required cross-referencing several files. Generating referrals required hand-writing the WHO 4-symptom form. There was no audit trail. Migration risk on disk was real — these were business-critical files held in Excel.

## Section: Solution

A self-hosted (in the sense: I host it; details below) web module that fully replaces the above workflow with structured records:

- **Patient registry** with medical and social risk groups, TB status (none / detected / contact), location, and contact info — imported from EMR declarations via xlsx-diff
- **Fluorography history** with auto-scheduled next-due dates and conclusion text storage (e.g., "Висновок: норма")
- **Sputum test tracking** (GeneXpert / microscopy / culture / PCR), with the result types regional labs report
- **WHO 4-symptom screening** at point-of-care: digital questionnaire, ML-free decision (low_risk / needs_xray / needs_referral), auto-generated PDF referral via `window.print()`
- **MoH order library** linking to PDF/DOCX stored on Google Drive
- **EMR data import** — operator uploads the EMR declarations export (xlsx), the module computes the diff against current registry, operator confirms
- **Weekly cron digest** via Resend, sent Mondays at 06:00 UTC, with patients due for screening that week
- **Integration with the Medics Chrome extension** — extension monkey-patches its `MedicsIndicatorUI.displayResults` callback to POST diagnoses + fluorography results back to this module, keeping both systems in sync via a shared practice PIN

Real data: 1,851 patients in the database, imported from the actual Medics declaration export. The system is used by me and the practice nurse daily. The same PIN auths both of us; the module is single-tenant by design (one practice).

## Section: Impact

The TB Module is too new for adoption metrics — the integrated flow (extension auto-syncing into module) shipped 5 days before this writing. The TLDR-level claim is what the system did at deploy: **eliminated the paper journal contour** and **collapsed 28+ Excel sheets into a single, queryable database**.

A separate operational metric worth naming: **monthly running cost is $0**. The system runs on Supabase free tier (using ~5% of 500 MB allocation), Vercel Hobby (functions at limit: 12/12), Resend free (~8 emails/month sent of 3000 allowance). Migration to Pro tiers would be ~$65/month total — but the current single-practice usage doesn't need it.

Adoption metrics will follow as the system accumulates more usage data. For now, the story is the deployment itself.

## Section: Tech stack & architecture

[INSERT TechStack here:]

- **Frontend**: React 18 · Vite · TypeScript · TailwindCSS v4
- **Backend**: Supabase (PostgreSQL + PostgREST + Storage)
- **Hosting**: Vercel Hobby (Edge / Node serverless functions)
- **Auth**: One practice-wide PIN → bcrypt → JWT HS256 in HttpOnly cookie (30 days)
- **Email**: Resend (sandbox tier); weekly cron Monday 06:00 UTC
- **Excel I/O**: SheetJS (xlsx) — client-side, no server load
- **Data**: TanStack Query + TanStack Table
- **Integration**: Chrome extension (`tb-module-sync.js`, ~921 LOC) monkey-patches the Medics extension's display callback to POST diagnoses → `medical_risk_groups` and fluorography conclusions → `fluorography` table. Auth via shared practice PIN as Bearer header. URL-to-Medics-ID mapping cached in `chrome.storage.sync`.

The single-PIN auth is a deliberate simplification. The user model is "one practice, two staff members, no patient access" — adding per-user accounts would have been overhead without value. If the system later expands to multi-tenant (multiple practices), this is the first thing to redesign.

The Vercel Hobby 12-function limit is the live constraint. Next iteration (Phase 5) needs to consolidate endpoints.

## Section: How this was built (ProcessNote)

[INSERT ProcessNote here:]

- **Ownership**: I identified the documentation problem, specified the schema against the existing paper and Excel workflow, made stack choices (free tiers, single-PIN auth, monkey-patching the extension instead of building a new sync layer), and shipped to my own clinic.
- **Collaboration**: AI-assisted development with Claude Code. AI generated implementation; I owned product framing, schema design, and deployment decisions.
- **Time invested**: ~40-60 hours over ~7 days of active build, plus ongoing iteration. (Estimated; git tracks commits, not hours.)

## Section: What I learned

- **Replacing paper with software is mostly a schema design problem.** The hardest part wasn't the React UI or the Supabase setup — it was deciding what to model. "Risk group" turns out to be a relationship, not an attribute. "Detected" and "contact" are statuses, not separate registries. Getting the data model right first meant the UI fell out cleanly.
- **Free tiers cover real clinical workloads if your scope is bounded.** A practice with ~1,800 patients and two daily users fits comfortably in Supabase + Vercel + Resend free allocations. The cost story isn't a footnote — for a primary care clinic considering digitization, "$0/month if used at our scale" is the most important fact.
- **Monkey-patching an existing tool is a legitimate integration strategy.** I could have built a separate sync API and rewritten the extension's data flow. Instead I wrap the extension's display callback and let it feed the module passively. Result: 921 LOC of glue, no changes to the extension's core logic, automatic backfill of any patient the doctor opens.
- **A blocking overlay turned out to be the right UX answer for an indicator workflow doctors otherwise skipped.** The Medics extension originally required a button click to run the indicator analysis — 15-20 seconds of compute, but worse, a friction pause that broke flow. Doctors quietly stopped using it. When I integrated with the TB Module and made it mandatory to check the last X-ray date, I added a blocking overlay on the patient card: it appears as soon as the card opens, runs the indicator analysis automatically, syncs the X-ray date to TB Module, then drops away. Counter-intuitively this was better UX than the optional button: removing the choice removed the skip. The lesson generalizes — in clinical workflows, "make it easy to use" is often weaker than "make it the default path."
- **Free tier economics for a primary-care clinic are extremely forgiving.** Supabase + Vercel + Resend free allocations have absorbed both this module (1,851 patients) and the Studioverse platform (37 users, 22 projects) simultaneously without hitting a ceiling. Whatever "scale" means at the rural-clinic level, free tier covers it.

## Section: Next steps

The active priority is extending the same pattern to the other journals that primary care has to maintain: vaccination, HIV, cardiovascular risk, oncology screening. The TB module already proves the architecture works — patient registry + scheduled events + EMR sync + cron reminders is a generalizable shape. Each new module needs its own schema and rules, but the underlying frame transfers. Secondary backlog items: audit log triggers (table exists, wiring incomplete), attachments UI (table exists, no UI), and PIN-change from the settings UI (currently env-var only). Multi-practice / multi-tenant rewrite is explicitly out of scope for now — the single-PIN simplicity is worth preserving until there's real demand from another clinic.

---

# Case Study 3: Multi-Tenant Platform for AI Video Production Agency

## Header data

- **Title**: Multi-Tenant Platform for AI Video Production Agency
- **Subtitle**: A SaaS platform for managing artist hiring, studio operations, and client projects at an AI-video agency.
- **Status**: Production
- **Tags**: `B2B SaaS`, `AI integrations`, `Multi-tenant`
- **Slug**: `studioverse-platform`

## TL;DR

> An AI video production agency was managing hiring, project intake, and operations across Slack threads, Google Forms, and spreadsheets. I designed and built a multi-tenant SaaS platform that consolidated the workflow: AI-driven test-assignment matching, AI order intake chatbot, multi-tenant studios with capability-based permissions, real-time chat, project kanban, client portal, audit trail. In 7 weeks of development: 181 commits, 6 studios, 37 users across 5 roles, 22 projects, 60 tasks. First full revenue month produced $1,752 in client revenue with 59% gross margin. Built as the sole engineer through AI-assisted development.

## Section: Context

An AI video production agency (client identity withheld; built under contract via DevBrother) operated through a patchwork of tools: artist applications came in through Slack and forms, project intake from clients arrived as free-text emails or DMs, hiring decisions were tracked in spreadsheets, project work happened in unsynced messaging threads, no single source of truth for who was working on what.

The agency's bottleneck was operational throughput, not creative work. With multiple studio directors hiring in parallel and clients requesting custom video work daily, the team needed:

- One pipeline for artist hiring (apply → test → review → accept) with no overlap between studio directors competing for the same candidate
- Structured order intake that converted client free-text into actionable project briefs
- A project / task system where artist, reviewer, studio director, and client could all see status
- Per-user notification preferences and an audit trail of who did what

I joined as the sole engineer to build this from scratch.

## Section: Solution

A multi-tenant SaaS platform with the following surfaces:

**Hiring / Talent acquisition**

- Public artist application funnel with two paths: video test or portfolio submission
- AI test-assignment matcher (Google Gemini ranks open briefs against candidate skills)
- Pipeline review UI for studio directors and evaluators (1-5 rubric scoring)
- Accept flow: into a specific studio, or into a shared distribution pool
- Public artist profiles (no-auth URL, shareable in Slack)

**Studios and projects**

- Multi-tenant studio model with per-studio data scoping
- Projects with many-to-many client relationships
- Task kanban (To Do → Rough Cut → Fine Cut → Final Cut → Approved) with drag-and-drop
- Task health indicators (deadline tracking, block/unblock states)
- Per-task artist assignment, fee tracking, paid flag, artist payouts

**Communication**

- Per-project chat sidebar (staff ↔ client)
- Studio-wide chat channels, DMs, threads, @-mentions
- Edit/delete with 10-minute window
- Real-time via Supabase broadcast, fallback polling
- Task comments with rich editor and mention picker

**Order intake**

- Public AI-chatbot funnel (Gemini) that parses free-text client requests into structured orders
- Studio director accepts an order → platform auto-creates project, task, and client account

**Notifications**

- In-app Activity Center (32 audit event types)
- Email notifications via Brevo (25 transactional templates)
- Push notifications via Expo (mobile app integration)
- Per-user preferences, mute, HMAC unsubscribe tokens
- Cron-based deadline reminders

**Customer success**

- Customer Health tab with weekly check-ins, health score 1-5, traffic-light status by days-since-contact

**Admin**

- Team management with multi-role assignment
- Audit log feed
- Feedback inbox with kanban
- Test assignment library

The role and permission model is capability-based with per-studio scoping. A user can hold multiple roles simultaneously — e.g., studio director of Studio A and artist in Studio B — with an "Acting As" switcher in the header. Studio directors see candidates and projects scoped to their studio; platform owner bypasses all scope checks.

## Section: Impact

[INSERT MetricCards here in a grid of 3-4 across:]

- **37 users** across 5 roles
- **6 studios** active
- **22 projects** in pipeline
- **60 tasks**, 34 approved (57% completion)
- **46 artist applications**, 25 accepted (54% acceptance rate)
- **~41 hours** median time-to-decision in hiring
- **190 events / week** peak platform activity

**Revenue (April 2026, first full month of revenue):**

- Client revenue: **$1,752**
- Artist payouts: **$714**
- Gross margin: **$1,038 (59%)**
- Paid tasks: **23**

Positive unit economics confirmed in the first month of revenue. The platform went from MVP to operational revenue in 7 weeks of solo build.

**Engineering throughput**: 181 commits across the 7-week build period. Auto-deploy to production on every push to `main`. Test infrastructure included Vitest for unit tests, Playwright for E2E, with a parallel test schema in Supabase for isolated runs.

## Section: Tech stack & architecture

[INSERT TechStack here:]

- **Frontend**: Next.js 14.2 (App Router) · React 18 · inline styles (no Tailwind, no CSS-in-JS)
- **Backend**: Next.js API routes on Vercel serverless
- **Database**: Supabase (PostgreSQL + pgcrypto)
- **Auth**: Cookie-based session (no JWT) parsed server-side
- **Realtime**: Supabase broadcast channels for chat
- **Email**: Brevo (transactional, 25 templates)
- **AI**: Google Gemini 2.5 Flash Lite (test matcher + order chatbot)
- **Anti-bot**: Google reCAPTCHA v3 on public forms
- **Push**: Expo Push API for mobile
- **Hosting**: Vercel (auto-deploy on push to main)
- **Tests**: Vitest (unit + API) + Playwright (E2E) against an isolated test schema

The role/permission system warrants its own note. Roles live in `users.role`: `platform_owner`, `studio_director`, `studio_manager`, `artist`, `client`. An artist can additionally be `is_evaluator=true`. A user can hold multiple capabilities simultaneously — for example a studio director in Studio A who is also an artist in Studio B — and switch context via an "Acting As" toggle. Permissions are derived: a studio director sees pipeline candidates only for studios where they're director; a studio manager sees projects only for studios they're in.

## Section: How this was built (ProcessNote)

[INSERT ProcessNote here:]

- **Ownership**: I made all product decisions (what to build, in what order, for which user), all architectural framing (multi-tenant model, capability-based permissions, choice of stack), and shipped solo over 7 weeks.
- **Collaboration**: AI-assisted development with Claude Code. AI generated implementation; I owned product, design, and architectural decisions. I can read any part of the code and explain what it does; for changes, I work with AI as my development partner.
- **Time invested**: 181 commits over 7 weeks of active build (March 27 – May 15, 2026). Approximately 60-90 hours of my time across that window.

## Section: What I learned

- **The "Acting As" pattern was the elegant solution to a problem that almost broke the role model.** The agency's reality was that one person could be both an artist and a studio manager. With strict role-based access control (artists see X, managers see X + Y, directors see X + Y + Z across studios), this collapses immediately. Two accounts per person was a non-starter — duplicate identities, broken audit trails, user confusion. The fix was a capability-based permission model with an "Acting As" header switcher that lets a single account hold multiple capabilities and toggle context. Once that was in place, the strict tiered access (artist sees their work; manager sees their studio's artists + projects; director sees multiple studios + their own module) fell out cleanly. UX-wise it's a small switcher; architecturally it's the keystone of the whole system.
- **AI integrations cost ~5% of build time and unlock ~30% of value.** Gemini ranks test assignments and parses order intake. Both could have been form-based UIs requiring manual work. Both ended up as automated workflows that reduced studio director overhead by an order of magnitude. The integration code is small; the leverage is large.
- **A 7-week build is a different category of project from a 7-month build.** Decisions that would normally need careful weighing — choosing inline styles over Tailwind, JSON cookie sessions over JWT, Supabase broadcasts over a dedicated message queue — were made in minutes by picking the option that was simplest to ship. Some of those decisions will need revisiting at scale. Most of them won't.
- **Strategic alignment with the client's product roadmap was the lesson I learned the hard way.** This is honest: the agency has been developing its own internal platform in parallel, with overlapping ambitions in project management and operations. Their stack is different from mine — different framework, different database, different conventions. By the time this surfaced, my platform was already a 7-week investment with 181 commits, and the code couldn't be ported into theirs. The mistake was a planning one I'd recognize as a rookie product move: I didn't ask, on day one, *what is the long-term plan for the system this will eventually integrate with?* I optimized for shipping fast and proving the model, which I did — but the integration story is now strained. The takeaway I'm carrying forward: with internal-client builds, the first design conversation is about exit and integration paths, not feature scope.

## Section: Next steps

The platform is in production and continues to handle real operations at the agency. Active backlog items: Stripe billing (currently on a feature branch, not yet on main), time-tracking (designed but not built), a reports / analytics dashboard (Activity Log and earnings tab exist; a dedicated reporting UI does not), per-studio Slack integrations (currently only one global webhook). A near-term architectural constraint to resolve is Vercel Hobby's 12-function limit — already at the ceiling, so the next iteration needs endpoint consolidation. Strategic question outstanding: given the integration limitations described above, whether the platform's long-term home is this client or whether the codebase becomes a reusable artifact for other agencies with similar operational patterns.

---

# Case Study 4: Pre-Trip Driver Medical Checkups

## Header data

- **Title**: Pre-Trip Driver Medical Checkups
- **Subtitle**: Digital pre-trip medical screening system with USB-synchronized breathalyzer integration.
- **Status**: Functional · Pending regulatory approval
- **Tags**: `Healthcare`, `Device integration`, `Compliance & encryption`
- **Slug**: `driver-medical-checkups`

## TL;DR

> Ukrainian commercial drivers require a pre-trip medical check before each shift: pulse, blood pressure, temperature, and breathalyzer reading, all logged in a paper journal. As one of the physicians performing these checks, I built a digital system that replaces the journal — the medic enters readings on a web app, plugs the Drager iBlow 10 breathalyzer into USB at end-of-shift, and a desktop agent reconciles software-entered records with the device's onboard memory using time-windowed matching to confirm legitimacy. Production-grade: AES-256 encryption on medical fields, JWT auth, signed PDFs with JKS-based electronic signature, row-level multi-tenancy. Functional today; the regulatory path to replacing the paper journal is open but uncertain.

## Section: Context

Ukrainian law requires commercial drivers to undergo a pre-trip medical exam before each shift. The medic on duty measures pulse, blood pressure, body temperature, and uses a breathalyzer (Drager-brand or equivalent) to confirm sobriety. Each reading is logged in a paper journal with the driver's name, time, and the medic's signature.

The paper journal is the legal artifact. It's auditable by transport regulators, retained for years, and serves as proof that the check was performed correctly.

Two problems with the paper status quo:

- **Reconciliation is manual.** The breathalyzer device stores its own internal readings log. The paper journal records what the medic *wrote down*. There's no enforced link between the two — a journal can be filled in without an actual breathalyzer test, or vice versa.
- **It's slow.** Logging by hand across pulse, BP, temperature, BAC for each driver, multiplied across a shift, eats into the medic's time and increases transcription errors.

I perform these checks regularly as part of my work. I built the digital system to solve both problems for my own use, with a path to broader deployment if I can get it certified as a legal replacement for the paper journal.

## Section: Solution

A computer-based system where the medic logs each driver's pre-trip check digitally (pulse, BP, temperature, BAC reading, time, driver identity). At the end of a shift, the Drager breathalyzer plugs into USB and the system reads the device's internal log directly.

The system then reconciles: for every BAC reading the medic entered in software, the corresponding reading should exist in the device's onboard memory at approximately the same time. A check is "verified" only when both records match. Mismatches are flagged.

This produces a legitimacy claim that paper can't: the digital log isn't just what the medic claims happened — it's what the medic claimed *and* what the device recorded, cross-referenced.

The function works end-to-end today. What's open is regulatory: legally replacing the paper journal requires authorization from the institutions that mandated the paper form (Ministry of Health and Ministry of Internal Affairs). I've been through the initial outreach with MoH and NSZU, which directed me to file a formal public inquiry with the authorizing ministries — a process with a 30-day nominal response window but unreliable in practice.

## Section: Impact

The system is in functional production at my own workplace but cannot yet legally replace the paper journal — so today it runs alongside paper rather than replacing it. The deployment story will be told properly once regulatory approval is in place.

What the system already proves:

- **The cross-referencing approach works technically.** USB sync against the Drager iBlow 10's internal memory produces a clean time-windowed reconciliation log per shift.
- **A reverse-engineered USB protocol is a sustainable foundation.** The vendor publishes Windows-only software; macOS support was traced manually with a USB sniffer. The protocol now lives in ~500 LOC of TypeScript inside an Electron menu-bar agent.
- **The compliance gap is regulatory, not technical.** The paper journal exists because the law says so, not because the workflow needs it. The system already implements what a regulatory-ready electronic equivalent would need: AES-256-GCM encryption of medical fields, JWT auth with brute-force lockout, electronic signatures on PDF acts via JKS-based pyHanko signing, full audit log with signing IP and user-agent, row-level multi-tenancy via `organization_id`, and per-shift device memory dumps stored for verification.

## Section: Tech stack & architecture

The system is a three-tier application: a web app the medic uses during the shift, a backend handling business logic and storage, and a desktop USB agent that talks to the breathalyzer.

[INSERT TechStack here:]

- **Backend**: Python 3.12 · FastAPI · SQLAlchemy 2.0 (async) · asyncpg · Alembic (8 migrations) · Pydantic v2
- **Frontend**: React 18 · TypeScript · Vite · Tailwind 3.4 · Zustand · react-signature-canvas
- **USB agent**: Electron 33 · TypeScript · serialport 12 · ws (local WebSocket on port 8765)
- **Auth**: JWT (access 30 min / refresh 14 days) · bcrypt · brute-force lockout (5 attempts → 15 min)
- **Encryption**: AES-256-GCM on medical fields (pulse, BP, temperature, BAC) via SQLAlchemy `TypeDecorator`; key in env
- **Multi-tenancy**: row-level via `organization_id` on every table
- **PDF**: WeasyPrint for generation; pyHanko + pyjks for electronic signature (JKS key held in RAM only)
- **Email**: aiosmtplib for SMTP notifications when a driver is ruled unfit
- **Storage**: PostgreSQL 16

**Codebase size**: ~3,000 LOC Python backend (8 API modules + services + models + schemas), ~5,000 LOC TypeScript frontend (8 pages + ~12 components), ~500 LOC USB agent.

**Reconciliation logic**. The hardest design decision was how to match a medic-entered exam to the breathalyzer's onboard reading without trusting the medic's claim about which device record corresponds. The solution is time-windowing: when the medic clicks "start exam" in the web app, a window opens. The driver blows into the device during the window. The device stores its reading to onboard memory and resets to ready-state. The medic clicks "end exam", closing the window. At end-of-shift, when the device plugs into USB, the agent reads the device memory and the backend reconciles: for each medic-entered exam, find the device record whose timestamp falls inside that exam's window. Unmatched device records or unmatched exams get flagged. Matched pairs become the verified legal record.

The USB agent runs as a menu-bar Electron app on macOS (Intel + Apple Silicon, distributed as .dmg via electron-builder). The web frontend calls it over a local WebSocket on port 8765 to fetch device records on demand.

**Deployment status.** Currently runs locally on the workplace machine: PostgreSQL in Docker, backend via Uvicorn, frontend via Vite dev server. Production deployment (Caddy + HTTPS, containerized backend, backups) is scoped but not done — gated on the regulatory question below.

## Section: How this was built (ProcessNote)

[INSERT ProcessNote here:]

- **Ownership**: I identified the gap (medic-entered records vs. device-recorded readings unlinked), reverse-engineered the Drager USB protocol, designed the time-window reconciliation logic, built the three-tier architecture, and shipped to my own workplace.
- **Collaboration**: AI-assisted development with Claude. I owned product, security, and architectural decisions; AI partnered on implementation across all three tiers (Python backend, React frontend, Electron agent).
- **Time invested**: ~20 hours of build time. The reverse-engineering phase of the USB protocol added additional time on top.

## Section: What I learned

- **Reverse-engineering a vendor USB protocol is a tractable solo project if you commit to the boring part.** Drager publishes the iBlow 10 with macOS no-go status — software exists only for Windows. To map the protocol I borrowed a Windows laptop, installed a USB sniffer, and ran traffic between the official client and the device for several hours while triggering every operation I could. With enough capture data, the protocol shape emerged. The lesson isn't about USB — it's about timeboxing: most "we'd need vendor access" problems are actually "we'd need a weekend with a sniffer" problems.
- **Time-windowing was the right abstraction for cross-device reconciliation.** I started by trying to match by content (BAC value) and quickly realized that two consecutive drivers with similar readings would alias. Matching by timestamp alone has the same issue if device clock drifts. The breakthrough was reframing: don't match individual records, match windows-and-records. Each exam is a window owned by the medic's UI; each device record is a point in time; one window owns one point. Mismatches are anomalies. This generalized into a clean audit log: every legal record has a verifiable provenance pair.
- **Regulatory inertia is a real product risk and worth pricing in early.** Working code that's not legally usable is, for compliance products, indistinguishable from working code that doesn't exist. To replace the paper journal, an electronic system needs sign-off from the institutions that authorized the paper form — Ministry of Health and Ministry of Internal Affairs. The official channel is a public inquiry; the official response window is ~30 days. In practice, my previous public inquiry to MoH went unanswered for months. I now treat regulatory feedback time as a hard input to the product roadmap, not a polite assumption. For future compliance-bound builds, I'd start the regulatory conversation before the code.

## Section: Next steps

The technical product is functionally complete and could go to production today on the deployment track that's already scoped (Caddy + HTTPS, containerized backend, backups). What's blocking that is regulatory: until MoH and MIA respond to the public inquiry defining requirements for an electronic equivalent of the paper journal, the system can't legally replace the journal, and parallel running has limited value over the paper alone.

Honestly, this is the part of the project I'm reassessing. Months of unresponsive regulatory channels make the path forward unclear, and I'm weighing whether to pause the build and revisit when conditions change, or to look for a different product surface where the same architecture (encrypted medical fields, signed PDFs, USB device sync, multi-tenancy) maps to a use case that doesn't require ministerial approval. An idea in the back of my mind is extending the agent to handle a Bluetooth pulse oximeter — same reconciliation model, broader applicability — but it's speculation, not a plan.

---

# Page-by-page mapping cheat sheet

For each case study page in the skeleton spec, copy as follows:

1. **CaseStudyLayout props** → from "Header data" + "TL;DR"
2. **First `<SectionHeading>Context</SectionHeading>` + `<p>`** → from "Section: Context"
3. **Next sections** → in order from this document
4. **`<MetricsTable>`** → from the markdown table in "Impact"
5. **`<TechStack>`** → from "Tech stack & architecture"
6. **`<ProcessNote>`** → from "How this was built"
7. **`<ul>` in "What I learned"** → one `<li>` per bullet
8. **Final `<p>`** → from "Next steps"

End of content.
