# NEXT_SESSION_BOOT.md

> Load this file at the start of every session to restore full context fast.

---

## What This Project Is

**Maturiraj** — Croatian state exam (matura) prep platform at `maturiraj.hr`
- Stack: Next.js 16 (App Router), React 19, Supabase, Stripe, Anthropic AI
- Root: `c:\Users\Daniel\Desktop\maturiraj`
- Legacy dead app at `d:\maturix` (Vite/React) — ignore

---

## Product Tiers (CRITICAL)

| Tier | DB value | Access |
|------|----------|--------|
| Free | `plan_type = null` | Landing, login, kalkulator (limited) |
| Standard | `plan_type = 'starter'` | Full Discere, study plan |
| Pro | `plan_type = 'pro'` | Everything + AI profesor, AI chat, share, anketa |

**`pro_expires_at`** — if set, must be in the future for plan to count.

---

## Auth Hook — `lib/hooks/useAuth.js`

Returns: `{ user, planType, isPaid, isPro, loading }`

- `planType`: `null | 'starter' | 'pro'`
- `isPaid`: `planType !== null` → use for Discere gating
- `isPro`: `planType === 'pro'` → use for AI features gating
- `loading`: wait for this before rendering gated content

**NEVER** destructure `profile` from `useAuth()` — it is not returned.
Use `user?.user_metadata?.full_name` for display name.

---

## Middleware — `proxy.js`  (Next.js 16 naziv, NIJE `middleware.js`)

| Route prefix | Guard | Redirect if denied |
|---|---|---|
| `/dashboard`, `/plan-ucenja/dashboard` | login only | `/prijava?redirect=...` |
| `/discere/*` | paid plan (starter or pro) | `/pro?from=discere` |
| `/ai-profesor` | Pro plan only | `/pro` |
| `/plan-ucenja/pro`, `/simulacije` | Pro plan only | `/pro` |

Prijavljeni korisnik na `/prijava`/`/registracija` → redirect na `/dashboard`.
Post-login landing (email + OAuth) → `/dashboard`.

---

## Key File Map

```
lib/hooks/useAuth.js              — auth + entitlement hook
proxy.js                          — server-side route protection (NE middleware.js)
app/dashboard/page.js             — command center hub (agregira plan/simulator/skripte/AI)
lib/dashboard/helpers.js          — dijeljeni helperi (MATURA_DATE, getGreeting, daysUntil, progressColor, card)
components/dashboard/ProBlur.jsx  — dijeljeni PRO blur overlay
app/discere/page.js               — subject selector
app/discere/layout.js             — shared nav layout for discere
app/discere/hrvatski/simulator/   — active simulator
  page.jsx                        — Server Component, wraps with PlanGate
  PlanGate.jsx                    — client-side plan defense-in-depth
  HrvatskiSimulator.jsx           — 19,831 line simulator (DO NOT edit lightly)
app/plan-ucenja/page.js           — plan builder (uses isPro from useAuth)
app/plan-ucenja/dashboard/page.js — plan dashboard (uses isPro from useAuth)
app/ai-profesor/page.js           — AI tutor (fetches plan from Supabase directly)
agents/bugs.md                    — bug log
agents/project_brain.md           — project knowledge base
agents/vision.md                  — product philosophy
```

---

## What Was Just Done (Last Session)

### Critical Bug Fixes — Entitlement Overhaul

1. **useAuth rewrite** — Added `planType`, `isPaid` (any paid), fixed `isPro` to be pro-only.
   Was: `isPro = starter OR pro` (wrong — Standard users got pro features)
   Now: `isPaid = starter OR pro`, `isPro = pro only`

2. **Middleware tiered gating**:
   - `/discere` moved from login-only → paid-plan-required
   - `/ai-profesor` moved from login-only → pro-required

3. **Simulator PlanGate** — Created `PlanGate.jsx` defense-in-depth wrapper for simulator

4. **plan-ucenja/page.js** — Fixed `profile` from useAuth (was undefined); now uses `isPro`

5. **plan-ucenja/dashboard/page.js** — Same fix; also fixed full_name to use `user_metadata`

6. **ai-profesor/page.js** — Removed unused `profile` and `isPro` from useAuth destructure

7. **pro/success/page.js** — Removed unused `profile` import and destructure

---

## Current Priority Queue

1. **Discere content expansion** — Only Hrvatski active. Build mat/soc structure + at least 1 more subject MVP
2. **AI hardening** — Validation, error handling, cost control, rate limiting
3. **Mobile UX audit** — Core flows on mobile
4. **Dashboard real data** — Empty states + progress indicators

---

## Things NOT to Do

- Do not touch `HrvatskiSimulator.jsx` (19K lines) unless specifically required
- Do not add `profile` to useAuth return value — fetch from Supabase separately if needed
- Do not bypass middleware by adding new ungated routes for premium content
- Do not add Standard features to Free tier "just for testing"

"UPDATE"

 🚀 SVRHA

Ovaj dokument definira:

➡️ **što agent treba napraviti odmah kada započne novu sesiju**

Bez ovog filea, svaka sesija počinje s:
- gubitkom vremena
- ponovnim analizama
- nejasnim prioritetima

S ovim fileom:
➡️ agent odmah ulazi u fokus i izvršavanje.

---

# 🧭 KONTEKST PROJEKTA (KRATKO)

Projekt: **maturiraj.hr + Discere**

Trenutna faza:
➡️ **pre-launch stabilizacija i finalizacija sustava**

Glavni cilj:
➡️ dovesti proizvod u stanje:
> “možeš ga dati stvarnim korisnicima bez srama i bez velikog rizika”

---

# ⚠️ NAJVAŽNIJE PRAVILO

> **Ne širimo proizvod. Učvršćujemo proizvod.**

To znači:

NE radimo:
- nove featuree
- random ideje
- “još samo ovo”

RADIMO:
- integraciju
- jasnoću
- monetizaciju
- stabilnost
- UX poboljšanja

---

# 📌 ŠTO MORAŠ PRVO NAPRAVITI (OBAVEZNO)

## 1. Pročitaj ove fileove prije bilo kakvog rada:

1. vision.md  
2. project_status.md  
3. project_brain.md  
4. monetization.md  
5. roadmap.md  
6. bugs.md  

➡️ Ovo je minimalni kontekst.

Bez ovoga:
- odluke će biti pogrešne
- fokus će biti kriv

---

# 🎯 TRENUTNI FOKUS (REDOSLIJED)

Radi stvari ovim redom:

---

## 1️⃣ Integracija sustava
Cilj:
- Discere i maturiraj moraju djelovati kao jedan proizvod

Provjeri:
- routing
- UX flow
- duple koncepte
- branding
- navigaciju

---

## 2️⃣ Monetizacija / access logika
Cilj:
- FREE / STANDARD / PRO mora biti kristalno jasno

Provjeri:
- što free vidi
- što standard dobiva
- što pro dodaje

Zatvori:
- sve moguće paywall leakove

---

## 3️⃣ Dashboard kao command center
Cilj:
- korisnik mora znati što dalje

Provjeri:
- “next step”
- hijerarhiju
- clutter

---

## 4️⃣ Plan učenja
Cilj:
- plan mora voditi korisnika

Provjeri:
- jasnoću
- akciju
- povezanost s dashboardom

---

## 5️⃣ Simulator
Cilj:
- ozbiljan, premium, exam-like osjećaj

Provjeri:
- flow
- stabilnost
- rezultate
- integraciju s ostatkom sustava

---

## 6️⃣ UI konzistentnost
Cilj:
- ukloniti Frankenstein UI

Provjeri:
- kartice
- spacing
- CTA
- tipografiju

---

## 7️⃣ Launch hardening
Cilj:
- smanjiti rizik prije stvarnih korisnika

Provjeri:
- auth
- routing
- mobile
- error states
- build

---

# 🧨 NAJVEĆI RIZICI KOJE MORAŠ PAZITI

Posebno obrati pažnju na:

### 1. Monetization leak
- free korisnik ne smije dobiti paid value

### 2. Fragmentiran UX
- app ne smije djelovati kao 2 proizvoda

### 3. Nejasan flow
- korisnik ne smije biti izgubljen

### 4. Fake premium
- app ne smije izgledati dobro, ali biti krhak

---

# ⛔ ŠTO NE SMIJEŠ RADITI

- dodavati nove module
- širiti scope
- raditi “cool featuree”
- refactor bez potrebe
- uvoditi kompleksnost bez razloga

Ako nisi siguran:
➡️ nemoj dodavati — popravi postojeće

---

# 🧠 KAKO DONOSIŠ ODLUKE

Ako nisi siguran što napraviti, pitaj:

1. Čini li ovo proizvod jasnijim?
2. Čini li ovo proizvod vrjednijim za plaćanje?
3. Smanjuje li ovo rizik prije launch-a?
4. Pomaže li korisniku da zna što dalje?

Ako odgovor nije “da”:
➡️ vjerojatno nije prioritet

---

# 🔧 KAKO RADITI (OPERATIVNO)

Za svaki task:

1. Prvo kratko analiziraj
2. Identificiraj problem
3. Predloži konkretno rješenje
4. Implementiraj
5. Kratko objasni što si napravio
6. Nastavi dalje

NE:
- ostajati u teoriji
- pisati samo planove
- čekati potvrdu za svaki korak

---

# 📍 GDJE SMO STALI (RUČNO AŽURIRATI)

Zadnje napravljeno:
- ________________________________________
- ________________________________________

Trenutni fokus:
- ________________________________________

Sljedeći konkretan korak:
- ________________________________________

---

# 🧪 ŠTO TESTIRATI NAKON SVAKOG VEĆEG KORAKA

- login / logout
- protected routeovi
- free vs standard vs pro
- dashboard ponašanje
- plan učenja
- simulator flow
- mobile prikaz

---

# 🏁 DEFINICIJA USPJEŠNE SESIJE

Sesija je uspješna ako:

- proizvod je jasniji nego prije
- monetizacija je sigurnija nego prije
- UX je bolji nego prije
- bugovi su smanjeni
- rizici su manji

Sesija NIJE uspješna ako:
- ima više featurea, ali isti problemi

---

# FINALNA UPUTA

Ako ne znaš što raditi:

➡️ vrati se na:
- bugs.md
- roadmap.md (NOW sekcija)

i radi najvažniji problem odozgo.

---

# 🔥 JEDNA REČENICA KOJU MORAŠ SLUŠATI

> Ne dodaj. Ne širi. Ne kompliciraj.  
> Učini proizvod jasnijim, jačim i spremnijim za launch.