# Arhitektura nove /roditelji aplikacije — Maturiraj.hr

> Verzija: 1.0  
> Datum: 6. travnja 2026.  
> Status: Approved architecture — implementation ready

---

## 1. PRODUCT STRUCTURE SUMMARY

### Što je /roditelji?

**/roditelji** je **zaseban parent product layer** unutar maturiraj.hr.

To NIJE:
- studentski dashboard s parent labelom
- admin panel s lijepim karticama
- generički "insights" ekran

To JEST:
- roditeljevo mjesto unutar platforme
- prostor dizajniran za roditelja koji platforma shvaća ozbiljno
- alat koji roditelju daje jasnoću, mir i korisne preporuke

### Core purpose

> Dati roditelju odgovor na pitanje: **"Kako moje dijete stoji?"** — bez stresa, bez zatrpavanja, bez zadiranja u privatnost djeteta.

### Parent Jobs-to-be-Done (JTBD)

| # | Job | Frekvencija | Emocionalni kontekst |
|---|-----|-------------|---------------------|
| J1 | Vidjeti općenito stanje djeteta u 5 sekundi | Dnevno | "Samo da znam da sve ide OK" |
| J2 | Razumjeti koje predmete dijete radi i koliko | Tjedno | "Uči li dovoljno? Ravnomjerno?" |
| J3 | Saznati ako nešto zahtijeva pažnju | Po potrebi | "Moram li se zabrinuti?" |
| J4 | Vidjeti ključne datume i rokove | Mjesečno | "Kad je prijava? Jesmo li spremni?" |
| J5 | Prebaciti se između djece (ako ih ima više) | Po potrebi | "Imam dvoje maturanata" |
| J6 | Dobiti preporuku što napraviti | Tjedno | "Što je najkorisnije što mogu učiniti?" |
| J7 | Osjećati da se isplati ono što sam platio/la | Stalno | "Vidim da dijete koristi platformu" |

---

## 2. INFORMATION ARCHITECTURE

Aplikacija ima **5 glavnih cjelina** + 1 sistemsku.

### 2.1 PREGLED (Home)

**Čemu služi:** Prva stvar koju roditelj vidi. Odgovara na J1 — "kako stoji dijete" u 5 sekundi.

**Primarni intent:** Brzo skeniranje — zeleno/narančasto/crveno.

**Sadržaj:**
- Status strip: ime djeteta, zadnja aktivnost, ukupno vrijeme ovaj tjedan
- Health score: jednostavan indikator "sve OK" / "pazi na..." / "nema aktivnosti"
- 3 najvažnije kartice: aktivnost, nadolazeći rokovi, preporuka tjedna
- Quick actions: otvori detalje, prebaci dijete

**NE sadržava:**
- Detalje po predmetima (to je u Dijete view)
- Pune notifikacije (to je Obavijesti)
- Postavke profila

---

### 2.2 DIJETE (Child View)

**Čemu služi:** Dubinski pogled na jedno dijete. Odgovara na J2 — "što radi, koliko, na čemu".

**Primarni intent:** Razumijevanje aktivnosti i napretka konkretnog djeteta.

**Sadržaj:**
- Aktivnost po sekciji (Discere, AI Profesor, Skripte, Checklist, Plan...)
- Vrijeme provedeno po danu/tjednu (trend vizualizacija)
- Predmeti koje dijete koristi
- Checklist napredak
- Plan učenja napredak (ako postoji)
- Zadnja 7 dana vs prethodni tjedan

**NE sadržava:**
- Sadržaj onoga što dijete čita/rješava (privatnost!)
- Detaljne odgovore na zadatke
- Chat logove s AI profesorom

---

### 2.3 OBAVIJESTI (Alerts)

**Čemu služi:** Proaktivne obavijesti koje roditelju govore kad nešto zaslužuje pažnju. Odgovara na J3.

**Primarni intent:** "Što moram znati SADA?"

**Sadržaj:**
- Neaktivnost duža od 3 dana
- Pad aktivnosti vs prethodni tjedan
- Nadolazeći rokovi (matura prijave, ispiti)
- Checklist items s deadline-om koji se približava
- Novi tjedni digest (ako je uključen)

**NE sadržava:**
- Real-time notifikacije (nismo instant messaging)
- Push poruke (v1 je web-only)
- Marketing sadržaj

---

### 2.4 PREPORUKE (Recommendations)

**Čemu služi:** Konkretne, akcijske preporuke za roditelja. Odgovara na J6.

**Primarni intent:** "Što je najkorisnije što mogu napraviti?"

**Sadržaj:**
- Preporuka tjedna (jedna, jasna)
- Kontekstualne preporuke bazirane na aktivnosti djeteta
- Savjeti za podršku bez pritiska
- Linkovi prema relevantnim sekcijama (checklist, plan, skripte)

**NE sadržava:**
- Generičke edukacijske članke
- AI-generirane eseje
- Reklame za upgrade

---

### 2.5 ROKOVI (Deadlines / Calendar)

**Čemu služi:** Pregled svih bitnih datuma. Odgovara na J4.

**Primarni intent:** "Kad je što?"

**Sadržaj:**
- Maturalni rokovi (prijava, ispiti, rezultati)
- Prijemni ispiti po fakultetima (ako dijete koristi /prijemni)
- Plan učenja milestoneovi
- Custom reminderi (v2)

**NE sadržava:**
- Puni kalendar (nije Google Calendar)
- Studentske obaveze po predmetima

---

### 2.6 POSTAVKE (Settings) — sistemska

**Čemu služi:** Konfiguracija roditeljskog računa.

**Sadržaj:**
- Upravljanje povezanom djecom
- Dodavanje/uklanjanje djeteta
- Jezik obavijesti
- Frekvencija tjednog digesta
- Upravljanje pretplatom (link na Stripe portal)

---

## 3. ROUTE ARCHITECTURE

```
/roditelji                          → Redirect na /roditelji/pregled
/roditelji/pregled                  → Parent Home (status strip + 3 kartice)
/roditelji/dijete/[childId]         → Child deep view (aktivnost + predmeti + trend)
/roditelji/obavijesti               → Alerts lista
/roditelji/preporuke                → Preporuke feed
/roditelji/rokovi                   → Deadline calendar/lista
/roditelji/postavke                 → Settings + child management
/roditelji/povezi                   → Onboarding: poveži prvo dijete
```

### Route detalji

| Route | Tip | Layout | Auth | Opis |
|-------|-----|--------|------|------|
| `/roditelji` | Redirect | — | Required | Šalje na `/roditelji/pregled` |
| `/roditelji/pregled` | Page | ParentShell | Required + Role:parent | Glavni pregled |
| `/roditelji/dijete/[childId]` | Dynamic | ParentShell | Required + owns child | Detalji po djetetu |
| `/roditelji/obavijesti` | Page | ParentShell | Required | Alerts lista |
| `/roditelji/preporuke` | Page | ParentShell | Required | Recommendations |
| `/roditelji/rokovi` | Page | ParentShell | Required | Deadlines |
| `/roditelji/postavke` | Page | ParentShell | Required | Settings |
| `/roditelji/povezi` | Page | Minimal | Required | Onboarding — link child |

### Canonical entry point
`/roditelji/pregled` — sve ga koristi kao "home".

### Child switching
- Child switcher je **u ParentShell headeru** — dostupan na svakoj ruti
- Na `/roditelji/pregled` → prikazuje podatke aktivnog djeteta
- Na `/roditelji/dijete/[childId]` → URL direktno specificira dijete
- Aktivno dijete se čuva u **URL query param ili context** — NOT localStorage

### Deep links
- `/roditelji/dijete/abc123` → otvara direktno to dijete
- `/roditelji/obavijesti?child=abc123` → filtrira obavijesti za to dijete
- Sve rute osim `/dijete/[childId]` rade s "aktivnim djetetom" iz contexta

---

## 4. NAVIGATION ARCHITECTURE

### Primary Nav (Desktop)
Vertikalni side nav ili horizontal top tabs unutar ParentShell:

```
📊 Pregled          → /roditelji/pregled
👤 [Ime djeteta] ▾  → child switcher dropdown
🔔 Obavijesti (3)   → /roditelji/obavijesti
💡 Preporuke        → /roditelji/preporuke
📅 Rokovi           → /roditelji/rokovi
⚙️ Postavke         → /roditelji/postavke
```

### Primary Nav (Mobile)
Bottom tab bar s 4 itema + more:

```
[Pregled] [Dijete] [Obavijesti] [Rokovi] [...Više]
```

"Više" otvara drawer s Preporuke + Postavke.

### Child Switcher
- Uvijek vidljiv u headeru (desktop) ili kao pill bar (mobile)
- Dropdown/pill s imenom djeteta + status dot (active/inactive)
- Klikom se mijenja aktivno dijete → svi podaci na stranici se refreshaju
- Ako postoji samo jedno dijete → switcher se ne prikazuje

### Navigation depth
- Maksimalno **2 razine** (nav item → stranica sa sekcijama)
- Bez nested sidebara, bez breadcrumbova
- Child view koristi kartice/tabove za pod-sekcije (Aktivnost | Predmeti | Plan)

### Alert-driven navigation
- Obavijest "Marko nije bio aktivan 5 dana" → klik vodi na `/roditelji/dijete/[markoId]`
- Obavijest "Rok za prijavu za 7 dana" → klik vodi na `/roditelji/rokovi`

---

## 5. COMPONENT ARCHITECTURE

### A. APP SHELL

```
ParentShell (layout)
├── ParentHeader
│   ├── Logo / "Za roditelje" badge
│   ├── ChildSwitcher
│   ├── NotificationBell (count badge)
│   └── UserMenu (logout, settings)
├── ParentNav
│   ├── NavItem (Pregled)
│   ├── NavItem (Dijete)
│   ├── NavItem (Obavijesti)
│   ├── NavItem (Preporuke)
│   ├── NavItem (Rokovi)
│   └── NavItem (Postavke)
├── ParentMobileNav (bottom tabs)
└── PageContainer (children slot)
```

**Reusable:** ParentShell je shared layout za sve /roditelji/* rute.  
**Page-specific:** Svaka ruta ima svoj page content.

### B. PAGE SECTIONS

**Pregled page:**
```
StatusStrip          → ime + zadnja aktivnost + health dot
WeekSummaryCard      → sati ovaj tjedan + trend vs prošli
AlertPreviewCard     → top 2 obavijesti (expandable)
RecommendationCard   → preporuka tjedna
UpcomingCard         → sljedeća 2 roka
```

**Dijete page:**
```
ChildHeader          → ime + avatar + membership badge
ActivityChart        → bar chart po danu (zadnjih 14 dana)
SectionBreakdown     → koliko vremena po sekciji (Discere, AI, Skripte...)
SubjectProgress      → predmeti + napredak bars
ChecklistSummary     → X/Y checklist items done
PlanProgress         → ako ima plan — progress ring
```

**Obavijesti page:**
```
AlertsList           → filterable list (sve / hitno / informativno)
AlertRow             → icon + tekst + timestamp + action link
EmptyAlerts          → "Nema novih obavijesti — sve je u redu! ✅"
```

**Preporuke page:**
```
WeeklyRecommendation → istaknuta kartica s preporukom tjedna
RecommendationFeed   → lista kontekstualnih preporuka
```

**Rokovi page:**
```
DeadlineTimeline     → vertikalna timeline s datumima
DeadlineCard         → datum + opis + urgentnost badge
```

### C. SHARED UI COMPONENTS

Ovo su **parent-app-specific** komponente, NE globalne:

```
components/roditelji/ui/
├── PCard.jsx              → parent card (glass style, consistent padding)
├── PBadge.jsx             → status badge (ok / warning / alert)
├── PProgressBar.jsx       → progress bar s bojom prema %
├── PTrendIndicator.jsx    → ↑12% / ↓8% / → isto
├── PEmptyState.jsx        → "Nema podataka" placeholder
├── PAlertRow.jsx          → reusable alert row
├── PMetricBox.jsx         → big number + label + sub-text
├── PHealthDot.jsx         → zeleni/narančasti/crveni dot
├── PChildPill.jsx         → child name pill s avatar
├── PInsightBlock.jsx      → tekst + ikona insight block
└── PSkeleton.jsx          → loading skeleton za parent pages
```

### D. DATA / STATE CONTROLLERS

```
lib/roditelji/
├── useParentData.js       → main hook: fetches children + overview data
├── useChildDetail.js      → hook for specific child detail view
├── useParentAlerts.js     → computes alerts from activity data
├── useParentRokovi.js     → deadlines from static + dynamic data
├── parentContext.js        → React Context: activeChildId, children list
├── parentHelpers.js       → formatters, time helpers, health score calc
├── parentTypes.js         → JSDoc type definitions (no TypeScript needed)
└── parentRecommendations.js → recommendation engine (rules-based)
```

---

## 6. DATA ARCHITECTURE

### 6.1 Database Entities (New)

#### `parent_children` (NOVA TABLICA)
```sql
create table public.parent_children (
  id          uuid primary key default gen_random_uuid(),
  parent_id   uuid not null references auth.users(id) on delete cascade,
  child_id    uuid references auth.users(id) on delete set null,
  child_email text not null,
  child_name  text,
  status      text not null default 'pending',  -- 'pending' | 'linked' | 'declined'
  linked_at   timestamptz,
  created_at  timestamptz not null default now(),
  
  unique(parent_id, child_email)
);
```

**Zašto ne user_metadata:** Metadata ne podržava višestruku djecu, nema relational integrity, ne može se queryati efikasno.

#### `parent_preferences` (NOVA TABLICA)
```sql
create table public.parent_preferences (
  parent_id       uuid primary key references auth.users(id) on delete cascade,
  digest_enabled  boolean not null default true,
  digest_day      smallint not null default 1,  -- 1=monday
  locale          text not null default 'hr',
  updated_at      timestamptz not null default now()
);
```

### 6.2 Existing Tables Used

| Tablica | Koristi se za | Pristup |
|---------|--------------|---------|
| `profiles` | Ime djeteta, plan_type | Čita parent via child_id |
| `activity_events` | Aktivnost djeteta po sekciji | Čita parent via child_id |
| `checklist_progress` | Checklist napredak | Count via child_id |
| `study_plans` + `plan_weeks` | Plan učenja napredak | Via child_id |
| `subscriptions` | Je li dijete na plaćenom planu | Via child_id |

### 6.3 RLS Policy Pattern

Parent može čitati podatke **samo za svoju povezanu, linkanu djecu**:

```sql
-- Pattern za sve tablice koje parent čita:
create policy "parent_read_child_data"
  on public.activity_events for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );
```

### 6.4 Data Shapes (Normalized for UI)

#### ParentOverview
```js
/** @typedef {Object} ParentOverview
 * @property {ChildSummary[]} children
 * @property {Alert[]} topAlerts
 * @property {Recommendation|null} weeklyRecommendation
 * @property {Deadline[]} upcomingDeadlines
 */
```

#### ChildSummary
```js
/** @typedef {Object} ChildSummary
 * @property {string} childId
 * @property {string} name
 * @property {'active'|'idle'|'inactive'} status
 * @property {number} weekMinutes — minutes this week
 * @property {number} prevWeekMinutes
 * @property {string|null} lastActiveAt — ISO timestamp
 * @property {string|null} topSection — most used section this week
 * @property {number} checklistDone
 * @property {number} checklistTotal
 */
```

#### ChildDetail
```js
/** @typedef {Object} ChildDetail
 * @property {string} childId
 * @property {string} name
 * @property {SectionActivity[]} sections — per-section breakdown
 * @property {DailyActivity[]} daily — last 14 days
 * @property {SubjectProgress[]} subjects
 * @property {PlanProgress|null} plan
 * @property {number} checklistDone
 * @property {number} checklistTotal
 * @property {string|null} lastActiveAt
 */
```

#### Alert
```js
/** @typedef {Object} Alert
 * @property {string} id
 * @property {'inactivity'|'deadline'|'drop'|'milestone'} type
 * @property {'info'|'warning'|'urgent'} severity
 * @property {string} title
 * @property {string} body
 * @property {string|null} actionUrl
 * @property {string|null} childId
 * @property {string} createdAt
 */
```

### 6.5 Data Flow

```
Supabase tables
    ↓
useParentData() / useChildDetail()     ← fetch + normalize
    ↓
ParentContext (activeChildId)           ← state
    ↓
Page components                        ← render
    ↓
Shared UI (PCard, PBadge...)           ← display
```

**Source data:** Raw Supabase rows (activity_events, profiles, etc.)  
**Derived data:** Alerts (computed from activity patterns), Health score, Trends  
**UI-ready data:** ParentOverview, ChildSummary, ChildDetail shapes

---

## 7. STATE ARCHITECTURE

### 7.1 State Map

| State | Scope | Storage | Razlog |
|-------|-------|---------|--------|
| `activeChildId` | Shared | React Context + URL | Svi viewovi trebaju znati aktivno dijete |
| `children[]` | Shared | React Context (fetched) | Lista djece s basic info |
| `childDetail` | Page | Local (per page) | Teški podaci specifični za /dijete/[id] |
| `alerts[]` | Page | Local (computed) | Izvedeni podaci, ne trebaju persist |
| `selectedAlertFilter` | UI | Local state | Privremeni UI filter |
| `navOpen` (mobile) | UI | Local state | Mobile drawer state |
| `period` (7d/30d) | UI | URL query param | `?period=30d` — sharable, bookmarkable |
| `digestEnabled` | Settings | Supabase (parent_preferences) | Persisted preference |

### 7.2 Context Provider

```jsx
// lib/roditelji/parentContext.js
const ParentContext = createContext(null)

// Provider wraps all /roditelji/* routes via layout
// Provides:
// - children: ChildSummary[]
// - activeChildId: string | null
// - setActiveChildId: (id) => void
// - loading: boolean
// - error: string | null
```

### 7.3 Principles

1. **Nikad localStorage za child selection** — URL ili context. Roditelj može imati 2 taba otvorena za 2 djeteta.
2. **Nikad duplicirani fetch** — ParentContext fetcha children jednom, stranice koriste context.
3. **Computed alerts = client-side** — Nema alerts tablice. Alerts se računaju iz activity_events patternsova.
4. **URL query za filtere** — `?period=7d`, `?severity=urgent` — sharable, bookmarkable.

---

## 8. ROLE / ACCESS ARCHITECTURE

### 8.1 Authentication Flow

```
1. Roditelj se registrira na /prijava (role: parent)
2. user_metadata.role = 'parent'
3. Middleware detektira role → dopušta /roditelji/*
4. Ako parent nema linked children → redirect na /roditelji/povezi
5. Ako parent ima children + linked → normalan pristup
```

### 8.2 Access Matrix

| Route | Tko ima pristup | Fallback |
|-------|----------------|----------|
| `/roditelji/*` | `role === 'parent'` + authenticated | Redirect `/prijava?from=roditelji` |
| `/roditelji/dijete/[id]` | Parent tko owna tog childa | 404 ili redirect na pregled |
| `/roditelji/povezi` | Authenticated parent bez djece | — |
| Child data queries | RLS: parent_children.status = 'linked' | Prazni rezultati |

### 8.3 Child Linking Flow

```
1. Roditelj unosi email djeteta na /roditelji/povezi
2. Kreira se parent_children row (status: 'pending')
3. Dijete prima email/in-app obavijest: "Roditelj želi pratiti tvoj napredak"
4. Dijete potvrdi → status = 'linked', child_id populated
5. Roditelj sada vidi podatke djeteta

V1 simplification:
- Preskoči child approval (auto-link ako email postoji u auth.users)
- Dijete može later "unlink" u svojim postavkama
```

### 8.4 Privacy Boundaries

Roditelj NIKAD ne vidi:
- Što dijete piše AI Profesoru
- Konkretne odgovore na zadatke
- Sadržaj bilješki
- Privatne poruke

Roditelj VIDI:
- Koliko vremena dijete provede
- Na kojim sekcijama
- Checklist status (done/total, ne sadržaj)
- Plan napredak (completed weeks, ne detalje)
- Trendove aktivnosti

---

## 9. EDGE / EMPTY / FALLBACK STATES

| Stanje | Što se prikaže | Akcija |
|--------|---------------|--------|
| Parent bez djece | Onboarding: "Poveži dijete" | CTA → /roditelji/povezi |
| Parent s pending djetetom | "Čekamo potvrdu od [ime]" | Status pill + resend option |
| Dijete bez aktivnosti | "Još nema aktivnosti" | Preporuka: ohrabrite dijete |
| Nema obavijesti | "Sve je u redu! ✅ Nema novih obavijesti." | Pozitivno stanje |
| Nema preporuka | "Nastavljamo pratiti — preporuke dolaze uskoro." | — |
| Nema plan-a učenja | "[Ime] još nema plan učenja" | Link na plan-ucenja |
| API error | "Došlo je do greške. Pokušaj ponovo." | Retry button |
| Loading | Skeleton (PSkeleton) za svaku sekciju | Consistent skeleton per card |
| Jedno dijete | Child switcher se skriva | Normalan prikaz |
| Više djece | Child switcher aktivan | Pill bar / dropdown |

---

## 10. SCALABILITY PLAN

### Planirani futuri featurei i kako ih arhitektura podržava:

| Feature | Kako se uklapa | Što treba dodati |
|---------|---------------|-----------------|
| Weekly digest email | `parent_preferences.digest_enabled` + cron job | Email template + Supabase function |
| AI Parent Assistant | Nova ruta `/roditelji/ai` + chat UI | Reuse useChildDetail za context |
| Comparative trends | Proširi ChildDetail s comparative data | Novi query period comparison |
| Parent messaging | Nova tablica `parent_messages` | Nova ruta + API |
| Premium insights | Flag u parent_preferences ili plan_type | Conditional rendering u page sections |
| Custom alerts | Nova tablica `parent_custom_alerts` | Merge s computed alerts u useParentAlerts |
| Shared family planner | Nova tablica + ruta `/roditelji/planer` | Page + hook, koristi PCard UI |
| Exam countdown intelligence | Proširi useParentRokovi | Merge static rokovi + child's exam data |
| Push notifications | Service worker + `parent_preferences.push_enabled` | Web Push API, ne dira UI arch |

### Extensibility princip
- Svaka nova cjelina = nova ruta + novi hook + isti ParentShell
- Shared UI (PCard, PBadge...) pokrivaju 80% novih viewova
- ParentContext ostaje stabilan — novi hookovi samo čitaju iz njega
- Nikada ne treba "veliki rewrite" — samo dodavanje novih ruta

---

## 11. IMPLEMENTATION BLUEPRINT

### 11.1 Folder Structure

```
app/roditelji/
├── layout.jsx                    ← ParentShell wrapper
├── page.jsx                      ← Redirect → /roditelji/pregled
├── pregled/
│   └── page.jsx                  ← Parent Home
├── dijete/
│   └── [childId]/
│       └── page.jsx              ← Child detail view
├── obavijesti/
│   └── page.jsx                  ← Alerts
├── preporuke/
│   └── page.jsx                  ← Recommendations
├── rokovi/
│   └── page.jsx                  ← Deadlines
├── postavke/
│   └── page.jsx                  ← Settings + child management
└── povezi/
    └── page.jsx                  ← Onboarding: link first child

components/roditelji/
├── shell/
│   ├── ParentShell.jsx           ← Main layout (nav + header + container)
│   ├── ParentHeader.jsx          ← Logo + child switcher + notification bell
│   ├── ParentNav.jsx             ← Desktop side/top nav
│   ├── ParentMobileNav.jsx       ← Bottom tab bar (mobile)
│   └── ChildSwitcher.jsx         ← Dropdown/pill bar
├── sections/
│   ├── StatusStrip.jsx
│   ├── WeekSummaryCard.jsx
│   ├── AlertPreviewCard.jsx
│   ├── RecommendationCard.jsx
│   ├── UpcomingCard.jsx
│   ├── ActivityChart.jsx
│   ├── SectionBreakdown.jsx
│   ├── SubjectProgress.jsx
│   ├── ChecklistSummary.jsx
│   ├── PlanProgress.jsx
│   ├── AlertsList.jsx
│   ├── DeadlineTimeline.jsx
│   └── ChildLinkForm.jsx
└── ui/
    ├── PCard.jsx
    ├── PBadge.jsx
    ├── PProgressBar.jsx
    ├── PTrendIndicator.jsx
    ├── PEmptyState.jsx
    ├── PAlertRow.jsx
    ├── PMetricBox.jsx
    ├── PHealthDot.jsx
    ├── PChildPill.jsx
    ├── PInsightBlock.jsx
    └── PSkeleton.jsx

lib/roditelji/
├── parentContext.jsx              ← Context provider + useParentContext
├── useParentData.js               ← Main data fetcher (children + overview)
├── useChildDetail.js              ← Single child detail fetcher
├── useParentAlerts.js             ← Computed alerts from activity patterns
├── useParentRokovi.js             ← Deadlines (static + dynamic)
├── parentRecommendations.js       ← Rule-based recommendation engine
├── parentHelpers.js               ← Formatters, health score, time utils
└── parentTypes.js                 ← JSDoc type defs

supabase/migrations/
├── 20260407000000_parent_children.sql
└── 20260407000001_parent_preferences.sql
```

### 11.2 Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Route pages | `app/roditelji/[section]/page.jsx` | `app/roditelji/pregled/page.jsx` |
| Shell components | `components/roditelji/shell/Parent*.jsx` | `ParentHeader.jsx` |
| Section components | `components/roditelji/sections/*.jsx` | `WeekSummaryCard.jsx` |
| UI primitives | `components/roditelji/ui/P*.jsx` | `PCard.jsx` |
| Hooks | `lib/roditelji/use*.js` | `useParentData.js` |
| Helpers | `lib/roditelji/parent*.js` | `parentHelpers.js` |
| Migrations | `supabase/migrations/YYYYMMDD*_parent_*.sql` | `20260407000000_parent_children.sql` |

### 11.3 Implementation Order

```
PHASE 1 — Foundation (Day 1-2)
├── 1. DB migration: parent_children + parent_preferences
├── 2. RLS policies for parent reading child data
├── 3. ParentContext + useParentData hook (mock-ready)
├── 4. ParentShell layout (header + nav + container)
└── 5. Middleware update: /roditelji/* requires role=parent

PHASE 2 — Core Views (Day 3-5)
├── 6. /roditelji/pregled page (StatusStrip + 3 cards)
├── 7. /roditelji/dijete/[childId] page (activity + sections)
├── 8. /roditelji/povezi page (onboarding flow)
├── 9. ChildSwitcher component
└── 10. UI primitives: PCard, PBadge, PProgressBar, PSkeleton

PHASE 3 — Secondary Views (Day 6-7)
├── 11. /roditelji/obavijesti page + useParentAlerts
├── 12. /roditelji/rokovi page + useParentRokovi
├── 13. /roditelji/preporuke page + parentRecommendations
└── 14. /roditelji/postavke page

PHASE 4 — Polish (Day 8)
├── 15. Mobile nav (ParentMobileNav)
├── 16. Empty states za sve stranice
├── 17. Loading skeletons
└── 18. Edge case handling (no children, pending, error)
```

---

## 12. ARCHITECTURE GUARD CHECKS

Prema architecture-guard-agent.md pravilima:

✅ **Reuse before creating** — Koristi postojeće `activity_events`, `profiles`, `checklist_progress`, `study_plans` tablice  
✅ **Shallow architecture** — Max 2 razine za sve (shell → page sections → UI primitives)  
✅ **Single source of truth** — ParentContext za children list, URL za activeChildId  
✅ **No wrapper hell** — Jedan context provider, jedan layout, zero HOCs  
✅ **Incremental changes** — 4 faze, svaka buildable samostalno  
✅ **Production stability** — Middleware gates, RLS policies, proper auth checks  
✅ **No ghost state** — Sve ili u URL, context, ili Supabase. Nula localStorage.  
✅ **App Router patterns** — Server-renderable layouts, client only where needed  
✅ **Performance** — Single fetch u context, child detail lazy-loaded per route  

---

## 13. ARCHITECTURAL DECISIONS LOG

| Odluka | Zašto | Alternativa koja je odbijena |
|--------|-------|------------------------------|
| Zasebna `parent_children` tablica umjesto metadata | Relational integrity, multi-child, queryable | user_metadata.childEmail (current) |
| Computed alerts, ne tablica | Manje maintenance, uvijek svježe, nema sync | Notification tablica s write-ovima |
| ParentContext samo za children list | Lightweight, ne treba global state manager | Redux / Zustand |
| URL query za period/filter | Sharable, bookmarkable, SSR-friendly | LocalStorage |
| Zasebni `components/roditelji/` folder | Izolacija od studentskog UI | Shared components/ root |
| JSDoc tipovi, ne TypeScript | Projekt je JS-only, konzistentnost | TS za novi code |
| Phase-based implementation | Incremental value delivery | Big-bang rewrite |

---

*Ovaj dokument je živi dokument. Ažurira se prilikom svake značajne arhitektonske odluke.*
