# PROJECT BRAIN — MATURIRAJ

## 1. PROJECT IDENTITY

**Project name:** Maturiraj  
**Type:** Web application for Croatian state matura preparation  
**Primary users:** High school students preparing for državna matura  
**Main promise:** Reduce chaos, increase control, and help students prepare smarter, calmer, and more effectively.

This is not a toy app.
This is intended to become a serious, production-ready student product.

---

## 2. PRODUCT PHILOSOPHY

Maturiraj exists to solve one core emotional and practical problem:

> Students feel overwhelmed, disorganized, anxious, and inconsistent while preparing for matura.

The product should therefore always optimize for:

- clarity
- simplicity
- structure
- motivation
- calmness
- momentum
- useful guidance
- reduced cognitive overload

Every feature should support one of these outcomes.

If a feature feels noisy, bloated, or distracting, it is probably wrong.

---

## 3. CORE PRODUCT AREAS

The core product is built around these pillars:

### A. Dashboard
The student's control center.
Should show:
- what matters now
- current progress
- next action
- important deadlines
- study momentum

### B. Discere
The exam archive / learning system.
Should provide:
- subject access
- topic structure
- simulator access
- exam-oriented preparation
- clear study pathways

### C. AI Support Layer
The intelligent help system.
Should help students with:
- understanding
- planning
- motivation
- writing
- diagnosis of weak spots
- structured support

### D. Study Plan / Plan Učenja
The action system.
Should reduce chaos and answer:
> “What should I do today?”

### E. Utility Layer
Support tools such as:
- calculator
- formulas
- checklist
- exam terms
- small productivity helpers

These are useful, but secondary to the core product.

---

## 4. CURRENT TECH STACK

Main stack:
- Next.js 16 (App Router) — **maturiraj.hr** (`c:\Users\Daniel\Desktop\maturiraj`)
- React 19
- Supabase (auth + Postgres `profiles`, `subscriptions`)
- Stripe
- Anthropic / AI integrations

**Note:** `d:\maturix` is a **legacy standalone Vite/React app** — dead, no longer active development. All development happens in the Next.js workspace above.

Discere is **NOT a separate product**. It is a core part of the standard maturiraj.hr platform. Students access it via `/discere` after login.

Key hooks:
- `lib/hooks/useAuth.js` → returns `{ user, planType, isPaid, isPro, loading }`
  - `isPaid` = any paid plan (starter OR pro) — gates Discere + kalkulator results
  - `isPro` = pro plan only — gates AI Profesor, adaptive plan, kalkulator advanced tabs
- `lib/hooks/usePageTracking.js` → tracks time spent per section (activity_events table)

Entitlement system:
- `lib/entitlements.js` → single source of truth for all feature access rules
  - `FEATURES` enum — every feature with `minPlan`, `requiresAuth`, human `label`
  - `canAccess(feature, {isPaid, isPro, user})` — boolean access check
  - `getUpgradeTarget(feature, {isPaid, isPro})` — returns 'starter'|'pro'|null
  - `getPlanLabel({isPaid, isPro})` — 'PRO'|'Standard'|'Besplatni'
  - `getUpgradePath(feature, {isPaid, from})` — returns /pro URL with query params
- `components/shared/UpgradePrompt.jsx` → reusable upgrade CTA (compact + full variants)

Feature access map (as of current session):
- FREE (no auth): landing, /termini, /formule, /checklist, /kalkulator (input only), /pro page
- LOGIN REQUIRED (any auth): /dashboard, /skripte, /plan-ucenja
- STANDARD (isPaid): /discere (hrv/mat/soc active), /kalkulator results table, study plan save
- PRO (isPro): /ai-profesor, adaptive plan, kalkulator advanced tabs (preporuke/viz/simulacija/AI/share)

Routing:
- `/dashboard` → student hub (landing after login)
- `/discere` → subject selector
- `/discere/[predmet]/simulator` → individual exam simulator
- `/plan-ucenja` → study plan builder
- `/ai-profesor` → AI tutor (Standard+)
- `/kalkulator` → university score calculator

When editing code:
- inspect existing structure first
- reuse existing patterns
- do not create unnecessary new architecture

---

## 5. CURRENT STATE OF THE PROJECT

### Already relatively strong:
- technical foundation
- product vision
- landing/auth/core setup
- basic UX direction
- premium system
- general code consistency
- project documentation
- agent documentation / structured dev approach

### Already implemented in meaningful form:
- landing page
- auth flow: useAuth returns `{ user, planType, isPaid, isPro, loading }`
  - `isPaid` = any paid plan (starter OR pro) — gates Discere + kalkulator results
  - `isPro` = pro plan only — gates AI profesor + advanced kalkulator + adaptive plan
- tiered middleware entitlement:
  - `/discere/*` requires paid plan → redirects to `/pro?from=discere` if free
  - `/ai-profesor` requires Pro plan
  - `/dashboard`, `/plan-ucenja/dashboard`, `/skripte` require login only
- complete entitlement module (`lib/entitlements.js`) with FEATURES enum + helper functions
- reusable `UpgradePrompt` component (`components/shared/UpgradePrompt.jsx`)
- AI professor / AI features (Pro-gated at middleware level)
- study plan with correct Pro gating via `useAuth.isPro`; plan-aware labels (Standard not "Besplatno")
- kalkulator: Standard sees full results table; Pro gets advanced analytics tabs
- formulas, checklist, exam terms (fully free)
- Discere: Hrvatski + Sociologija simulators active (Starter-gated); minPlan field on all subjects
- Stripe/payment structure; `/pro` pricing page with accurate tier feature copy
- `/dashboard` student hub with plan-aware product grid + free-user upgrade banner
- shared `Nav.js` used across `/discere/*` and `/dashboard` via sub-layouts

### Known weaknesses:
- Discere incomplete (only Hrvatski active; mat/soc routes may be stubs)
- AI system not fully validated end-to-end
- Mobile UX not fully audited
- Performance/load behavior not fully audited
- DB schema/migrations may be incomplete or under-documented
- Dashboard shows empty state until user creates a plan

---

## 6. CURRENT DEVELOPMENT PRIORITIES

These priorities are NOT random.
They must be followed in order unless there is a critical bug.

### Priority 1 — Real Dashboard Data
Goal:
Turn dashboard into a real control center using actual user data instead of mock-like placeholders.

Expected outcomes:
- real metrics
- real progress indicators
- real next actions
- meaningful empty states

### Priority 2 — Discere Completion
Goal:
Expand Discere into a genuinely useful core product area.

First subjects to prioritize:
1. Engleski
2. Njemački
3. Fizika
4. Kemija
5. Biologija

Do not fake content.
Build scalable structure first, then useful MVP subject experiences.

### Priority 3 — AI Hardening
Goal:
Make AI layer reliable, cheaper, safer, and more production-ready.

Must improve:
- validation
- error handling
- cost control
- rate limiting / safeguards
- premium backend enforcement
- observability

### Priority 4 — Mobile UX Audit
Goal:
Make core flows excellent on mobile, because many students will use the app primarily on phones.

Must improve:
- readability
- touch usability
- layout clarity
- overflow handling
- mobile flow smoothness

### Priority 5 — Performance & Load Reliability
Goal:
Ensure app feels fast, stable, and production-safe under realistic usage.

Must improve:
- render efficiency
- data fetching efficiency
- API responsiveness
- perceived speed
- reliability under load

---

## 7. WHAT SHOULD NOT BE PRIORITIZED YET

Do NOT prioritize these before the core product is strong:

- flashy animations
- overly complex dashboards
- social/community features
- parent dashboards
- advanced gamification
- speculative AI features
- overengineered analytics
- “startup theatre” features

These may be useful later, but not now.

The app wins by being useful and reliable first.

---

## 8. PRODUCT DECISION RULE

Before building any feature, ask:

1. Does this reduce student chaos?
2. Does this increase student control?
3. Does this help them know what to do next?
4. Does this make preparation clearer, calmer, or more effective?

If the answer is “no”, it is likely not a priority.

---

## 9. ENGINEERING RULES

### Stability first
Do not break working code.

### Minimal edits
Prefer small, safe changes over giant rewrites.

### Reuse before create
Always inspect existing:
- components
- hooks
- utilities
- route patterns
- data structures

### Backend is source of truth
Critical logic must be enforced server-side.

### No fake data
Never invent:
- exam content
- progress data
- user metrics
- unsupported features

If something is missing:
- show empty state
- create scalable structure
- document what is missing

### Fail safely
Every feature should handle:
- loading
- empty state
- errors
- bad input

### Mobile matters
Every important UI change must be mobile-safe.

### Performance matters
Avoid:
- heavy client-side logic
- duplicate fetching
- unnecessary re-renders
- bloated components

---

## 10. LOCAL DEVELOPMENT RULE

**CRITICAL: NEVER USE LOCAL MULTI-AGENT MODE**

In this project, local agent orchestration is forbidden because it causes:
- lag
- high RAM usage
- high CPU usage
- unstable editor behavior
- fragmented development

Only use:

> SINGLE AGENT MODE

That means:
- no sub-agents
- no background agents
- no parallel agent workflows
- no autonomous local orchestration

All work should happen in one linear, focused execution flow.

---

## 11. HOW TO WORK ON THIS PROJECT

For every task, follow this exact sequence:

1. Inspect current implementation
2. Understand what already exists
3. Explain the current state briefly
4. Propose the smallest safe plan
5. Implement step by step
6. Explain what changed
7. Identify what still remains

Do not jump blindly into coding.

---

## 12. DEFINITION OF GOOD WORK

A change is “good” only if it is:

- useful
- stable
- readable
- maintainable
- mobile-safe
- production-minded
- aligned with product vision

Good work is not:
- flashy
- overcomplicated
- random
- fake-complete
- technically impressive but user-useless

---

## 13. FINAL PROJECT MINDSET

Maturiraj should feel like:

> “A calm, intelligent operating system for surviving and mastering matura.”

Everything should reinforce that feeling.

If unsure:
choose the simpler, calmer, more useful solution.

"UPDATE"

## 🧠 ŠTO JE OVO

Ovo je dokument koji definira **kako razmišljamo o ovom proizvodu**.

Ne opisuje samo featuree.
Ne opisuje samo što je trenutno gotovo.

Ovaj file definira:
- kako donosimo odluke
- što je stvarno važno
- što je dobar smjer
- što je loš smjer
- kako razlikujemo napredak od lažnog napretka

Ako postoji konflikt između:
- “zvuči zanimljivo”
i
- “stvarno pomaže proizvodu”

…uvijek biramo ono što **stvarno pomaže proizvodu**.

---

# 1) GLAVNO PRAVILO PROIZVODA

> **Ne gradimo više featurea. Gradimo bolji sustav.**

To znači:

Loša logika:
- “dodaj još jednu stvar”
- “ubaci još jedan alat”
- “napravi još jedan page”
- “to bi bilo fora”

Dobra logika:
- “je li ovo čini proizvod jasnijim?”
- “je li ovo čini proizvod korisnijim?”
- “je li ovo čini proizvod vrjednijim za plaćanje?”
- “je li ovo čini proizvod manje kaotičnim?”
- “je li ovo povećava šansu da korisnik ostane i vrati se?”

Ako nešto ne jača sustav, vrlo vjerojatno nije prioritet.

---

# 2) OVO JE PROIZVOD, NE KOLEKCIJA ALATA

Najveći rizik za ovaj projekt je da postane:

- zbirka featurea
- hrpa odvojenih alata
- random dashboard
- “sve i svašta za maturu”

To se NE SMIJE dogoditi.

Korisnik ne smije imati osjećaj:

> “ovdje ima puno stvari, ali ne znam što da radim”

Korisnik mora imati osjećaj:

> “ovo me vodi”

Zato svaki feature mora biti dio većeg user flowa.

---

# 3) DISCERE I MATURIRAJ MORAJU BITI JEDAN PROIZVOD

Ovo je jedna od najvažnijih strateških istina projekta.

Discere ne smije ostati:
- poseban sloj
- poseban mentalni proizvod
- poseban UX
- poseban “mini app”

Discere mora biti:
> **ugrađeni core learning experience unutar maturiraj.hr**

Ako korisnik osjeti da koristi “dvije aplikacije”, to je neuspjeh.

---

# 4) FREE / STANDARD / PRO LOGIKA JE SVETA

Monetizacija nije sporedna stvar.
Monetizacija je dio arhitekture proizvoda.

To znači:

Ako je monetizacija loše postavljena:
- proizvod djeluje zbunjujuće
- korisnik ne razumije što kupuje
- standard djeluje preslabo
- pro djeluje nepotrebno
- free previše daje i ubija konverziju

Zato vrijedi ovo pravilo:

## FREE
mora:
- pokazati vrijednost
- izazvati želju
- stvoriti conversion pressure

ali ne smije:
- dati puni proizvod

## STANDARD
mora biti:
> **pravi proizvod**

Ako Standard nije dovoljno jak, proizvod je komercijalno slab.

## PRO
mora biti:
> **pojačanje i edge**

Ne “drugi proizvod”.
Ne “slučajna zaključavanja”.
Ne “umjetno rezanje Standarda”.

---

# 5) JASNOĆA JE VEĆA OD IMPRESIVNOSTI

Ovo je vrlo važno.

Mnogo proizvoda izgleda “cool”, ali su zapravo:
- nejasni
- naporni
- zbunjujući
- nepraktični

Mi NE gradimo:
- vizualni cirkus
- “wow” bez funkcije
- efekt radi efekta

Mi gradimo:
- jasnoću
- fokus
- osjećaj kontrole
- premium jednostavnost

Ako nešto izgleda lijepo, ali smanjuje jasnoću — to je loša odluka.

---

# 6) KORISNIK MORA UVIJEK ZNATI TRI STVARI

U svakom važnom dijelu proizvoda korisnik mora moći odgovoriti na ova pitanja:

### 1. Gdje sam?
### 2. Što sam već napravio?
### 3. Što je moj sljedeći najbolji korak?

Ako proizvod ne daje ta tri odgovora, UX nije dovoljno dobar.

Ovo posebno vrijedi za:
- dashboard
- plan učenja
- simulator
- rezultate
- premium lock trenutke

---

# 7) DASHBOARD NIJE UKRAS — TO JE COMMAND CENTER

Dashboard ne smije biti:
- hrpa kartica
- vizualni nered
- “sve odjednom”

Dashboard mora biti:
> **glavni operativni centar korisnika**

On mora odgovarati na pitanja:
- što mi je najvažnije danas?
- gdje sam zapeo?
- što dalje?
- što mi najviše diže šansu za uspjeh?

Ako dashboard ne vodi korisnika, onda ne radi svoj posao.

---

# 8) PLAN UČENJA MORA BITI OPERATIVAN, NE DEKORATIVAN

Mnogo aplikacija ima “plan”, ali to je samo lijepo zapakiran popis.

Naš plan mora biti:
- jasan
- motivirajući
- operativan
- koristan

Korisnik ne smije gledati plan i misliti:
> “ok… i što sad?”

Korisnik mora gledati plan i misliti:
> “jasno mi je što trebam napraviti”

Ako plan ne vodi u akciju, onda je slab.

---

# 9) SIMULATOR JE CORE TRUST FEATURE

Simulator nije samo jedna od funkcija.

Simulator je jedna od stvari koja najviše gradi:
- povjerenje
- ozbiljnost
- osjećaj stvarne pripreme

Ako simulator djeluje:
- loše
- neprecizno
- jeftino
- nepovezano

…onda cijeli proizvod gubi težinu.

Simulator mora djelovati:
- ozbiljno
- fokusirano
- exam-like
- premium
- povezano s ostatkom sustava

---

# 10) AI MORA BITI PAMETNA POMOĆ, NE “CHATBOX FEATURE”

Vrlo važno.

Najlakša pogreška je da AI postane:
- “kutija za poruke”
- marketinški gimmick
- nepovezani dodatak

AI mora imati ulogu unutar sustava.

Dobar AI u ovom proizvodu:
- pojašnjava
- usmjerava
- preporučuje
- skraćuje put do razumijevanja
- pomaže korisniku da zna što dalje

AI mora služiti:
> **napretku korisnika**

Ne samo “interakciji”.

---

# 11) SVAKA VAŽNA STRANICA MORA IMATI JEDAN GLAVNI POSAO

Ovo je jako važno pravilo.

Svaka ključna stranica mora imati:
> **jednu dominantnu svrhu**

Primjeri:

### Dashboard
Glavna svrha:
➡️ orijentacija + sljedeći korak

### Plan učenja
Glavna svrha:
➡️ jasan put rada

### Simulator
Glavna svrha:
➡️ ozbiljno rješavanje i evaluacija

### Rezultati
Glavna svrha:
➡️ razumjeti što je dobro, što nije i što dalje

### Pricing / upgrade
Glavna svrha:
➡️ konverzija

Ako stranica pokušava raditi 5 stvari odjednom, obično ne radi nijednu dovoljno dobro.

---

# 12) BOLJE JEDAN ODLIČAN FLOW NEGO PET OSREDNJIH

Vrlo važno za razvoj.

Ne gradimo vrijednost tako da:
- širimo beskonačno

Gradimo vrijednost tako da:
- ključne stvari rade brutalno dobro

To znači da je bolje imati:
- odličan dashboard
- odličan plan
- odličan simulator
- odličan paywall flow

nego:
- 14 prosječnih featurea

---

# 13) NE RADIMO “FAKE PROGRESS”

Fake progress je kada se čini da se puno radi, ali proizvod ne postaje bolji.

Primjeri fake progressa:
- dodavanje novih sekcija bez potrebe
- micro UI promjene bez utjecaja
- random refactor bez koristi
- feature koji zvuči pametno, ali nitko ga ne treba
- “još jedna opcija” bez jasne svrhe

Pravi napredak je kada proizvod postaje:
- jasniji
- vrjedniji
- prodajniji
- stabilniji
- ugodniji za korištenje

Ako nešto ne pomiče jednu od tih osi, možda nije pravi napredak.

---

# 14) KADA NISMO SIGURNI — PITAMO OVO

Kad god postoji dvojba, pitamo:

### A) Pomaže li ovo korisniku da lakše uspije?
### B) Čini li ovo proizvod vrjednijim za plaćanje?
### C) Čini li ovo proizvod jasnijim?
### D) Čini li ovo proizvod manje kaotičnim?
### E) Pomaže li launchu?

Ako odgovor na većinu nije “da”, vjerojatno nije prioritet.

---

# 15) PERFORMANCE I STABILNOST SU DIO PREMIUM DOJMA

Premium dojam nije samo dizajn.

Ako app:
- šteka
- ruši se
- loše renderira
- ima broken stateove
- čudno redirecta

…onda ne djeluje premium, koliko god dobro izgledala.

Zato vrijedi:

> **Stabilnost je dio proizvoda.**

Ne “tehnički detalj”.
Ne “kasnije ćemo”.

---

# 16) UX MORA VODITI PREMA KUPNJI, NE SAMO IZGLEDU

Velika pogreška bi bila da app izgleda dobro, ali ne vodi prema kupnji.

Zato UX mora podržavati:
- razumijevanje vrijednosti
- osjećaj napretka
- želju za otključavanjem
- osjećaj da je Standard “prava stvar”
- osjećaj da je Pro “edge”

To znači:
- lock stateovi moraju biti pametni
- teaser mora biti dobar
- upgrade momenti moraju biti strateški

Ne spammy.
Ne očajni.
Ne jeftini.

---

# 17) NE RADIMO “DEMO APP” — RADIMO PRAVI PROIZVOD

Vrlo važan mentalni okvir.

Ovo nije:
- showcase
- igračka
- “proof of concept”

Ovo mora postati:
> **pravi digitalni proizvod koji ljudi mogu koristiti i platiti**

To znači:
- svaka važna stvar mora biti dovoljno ozbiljna
- ne smijemo ostaviti previše “fake” ili polovičnih flowova
- launch-ready thinking mora biti prisutan rano

---

# 18) ŠTO JE TRENUTNO NAJVAŽNIJE

U ovoj fazi projekta najvažnije je:

### 1. spojiti sustav
### 2. zaključati monetizaciju
### 3. očistiti UX
### 4. učiniti proizvod premium i jasan
### 5. učiniti ga dovoljno stabilnim za launch

Ne:
- širiti scope
- izmišljati nove module
- raditi “cool side featuree”

---

# 19) ŠTO NIKAD NE SMIJEMO RADITI

Ovo su zabranjene mentalne greške projekta:

- “dodajmo još samo ovo”
- “ovo zvuči zanimljivo pa ajmo”
- “nek stoji, možda će trebati”
- “samo da izgleda wow”
- “nije bitno što korisnik ne zna što dalje”
- “riješit ćemo monetizaciju kasnije”
- “stabilnost nije prioritet”
- “nije problem što app djeluje kao više odvojenih proizvoda”

Sve to vodi u loš proizvod.

---

# 20) OPERATIVNA ZAPOVIJED ZA SVE BUDUĆE ODLUKE

Ako neka odluka ne čini proizvod barem jednim od ovoga:

- jasnijim
- jačim
- vrjednijim
- prodajnijim
- stabilnijim
- fokusiranijim
- boljim za launch

…onda vrlo vjerojatno nije dobra odluka sada.

---

# FINALNA REČENICA

Ako agent čita ovaj file, treba razumjeti jednu stvar:

> Tvoj posao nije dodavati stvari.  
> Tvoj posao je učiniti da proizvod konačno djeluje kao ozbiljan, jasan, premium i monetizabilan sustav.