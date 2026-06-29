# Discere → maturiraj.hr — KOMPLETAN CC INTEGRACIJSKI PLAN

Sekvencijalni promptovi za Claude Code. **Paste jedan po jedan, redom. Ne prelazi na sljedeći dok prethodni ne prođe verifikaciju.** Svaki prompt ima gate ("javi rezultat").

## Što imati spremno
- **`mat-content.zip`** (priloži u CC) — sadrži: `content/simulator/mat/**`, `components/simulator/**`, `lib`-helpere (u `.md`), `sim_progress.sql`, scripte, `exam-loaders.ts`. **Sve je već build-ano i verificirano.**
- **`mat_sim_v3_7_13_formule-mixed__2_.html`** (priloži) — izvorni monolit, source-of-truth + za regen (Appendix B). U normalnom tijeku ga NE diraš.
- Repo otvoren u CC, `pnpm dev` radi.

## Redoslijed (rizik-first)
0. Setup + recon → 1. **Render test (KRITIČNO)** → 2. Supabase shema + lib → 3. Tier state → 4. DiscereApp (hub+gate+save) → 5. Cleanup + Stripe (P0)

---

## PROMPT 0 — Setup + recon (ne integriraj još)

```
Priložen je mat-content.zip s pre-build-anim i verificiranim simulator engineom + sadržajem.

Napravi SAMO ovo, ništa više:
1. Otpakiraj mat-content.zip. Stavi `content/simulator/mat/**` i `components/simulator/**`
   u repo tako da path alias `@/` ispravno resolva na njih (provjeri tsconfig/jsconfig
   "paths" — ako je `@/*` → `src/*`, stavi foldere u src/; ako root, u root).
   exam-loaders.ts mora završiti na `@/content/simulator/mat/exam-loaders.ts`.
2. Inspektiraj projekt i javi mi (kratko, bullet):
   - Framework: Next.js (App ili Pages router?) ili Vite? Verzija.
   - Gdje se maturix.jsx (ili glavna App komponenta) renderira / mounta?
   - Path alias za `@/` (točan mapping).
   - Postoji li već Supabase client? Gdje (npr. lib/supabase)? Kako se kreira?
   - Postoji li ikakav tier/userTier/profiles sustav u kodu? Gdje?
   - React verzija (mora biti 19; ako 18, reci).
NE mijenjaj maturix.jsx. NE radi integraciju. Samo files + report.
```
**Gate:** dobiješ izvještaj o strukturi. Zapamti framework + alias — trebaju u sljedećem.

---

## PROMPT 1 — 🎯 Izolirani render test (KRITIČNO — validira cijeli port)

> Engine je verificiran u Node SSR harnessu (loada, veže se, 6/6 ispita daje točan HTML), ali NE u tvom stvarnom buildu (React 19 + Tailwind + tvoj bundler, effecti/timer/interaktivnost). Ovo to dokazuje prije bilo čega drugog.

```
Napravi PRIVREMENI izolirani render test za simulator engine. Statični import jednog
ispita — bez huba, bez gatea, bez dynamic importa (to su odvojeni rizici, kasnije).

Ako je Next App Router → kreiraj app/_test-sim/page.tsx:
  'use client';
  import dynamic from 'next/dynamic';
  import { qs, qImages } from '@/content/simulator/mat/exams/2025_ljeto_A.mjs';
  import '@/content/simulator/mat/styles/mat-engine.css';
  const MatEngine = dynamic(() => import('@/components/simulator/MatEngine'), { ssr: false });
  export default function T(){
    return <MatEngine examKey="2025_ljeto_A" qs={qs} qImages={qImages} duration={10800}
                      onExit={()=>console.log('exit')} onDone={(r)=>console.log('DONE', r)} userData={{}} />;
  }

Ako je Vite/Pages → ekvivalent: privremena ruta/komponenta koja isto renderira MatEngine
client-side (MatEngine je 'use client'; u Viteu samo normalan import, bez next/dynamic).

Pokreni pnpm dev. Otvori rutu. Provjeri i javi:
1. Renderira li se simulator (vidiš pitanja, nav, ✕ Izlaz)?
2. Možeš li odgovoriti MC pitanje i kliknuti dalje?
3. Završi ispit (ili "Predaj") → loga li se 'DONE' s payloadom u konzoli?
4. Renderiraju li se SVG slike u pitanjima koja ih imaju?
Ako pukne — pošalji TOČAN error (stack) i NE nastavljaj. Ako radi sve 4 → javi PASS.
```
**Gate:** PASS na sve 4. Ako error → vidi Appendix A (known issues) ili mi pošalji error.

---

## PROMPT 2 — Supabase shema + lib helperi

```
1. Pokreni sim_progress.sql (iz zipa) u Supabaseu — preko Supabase SQL editora (ja ću
   pokrenuti) ILI ako imaš migracije, dodaj kao novu migraciju i primijeni. Reci koji
   način. Shema je idempotentna (sim_progress + profiles.tier + RLS + trigger).
2. Kreiraj lib/sim-progress.ts:
   import { supabase } from '@/lib/supabase';   // prilagodi putanju postojećem clientu
   export type SimResult = { examKey:string; examLabel:string; razina:'A'|'B';
     pct:number; grade:string; cor:number; total:number;
     answers:Record<string,unknown>; qTimes:Record<string,number>; examMode:boolean;
     topic_breakdown:Record<string,{correct:number;total:number;points:number;earned:number}>;
     errorTags:unknown };
   export async function saveSimResult(r:SimResult, durationSec?:number){
     const { data:{ user } } = await supabase.auth.getUser();
     if(!user) return;
     const { error } = await supabase.from('sim_progress').insert({
       user_id:user.id, subject:'mat', exam_key:r.examKey, exam_label:r.examLabel,
       razina:r.razina, pct:r.pct, grade:r.grade, correct:r.cor, total:r.total,
       exam_mode:r.examMode, answers:r.answers, q_times:r.qTimes,
       topic_breakdown:r.topic_breakdown, error_tags:(r.errorTags ?? []),
       duration_sec: durationSec ?? null });
     if(error) console.error('saveSimResult', error);
   }
3. Kreiraj lib/discere-access.ts:
   import index from '@/content/simulator/mat/index.json';
   type Tier='free'|'standard'|'pro';
   export function allowedExamKeys(tier:Tier):Set<string>{
     if(tier!=='free') return new Set(index.exams.map((e:any)=>e.key));
     const flagged=index.exams.filter((e:any)=>e.demo);
     const pool=flagged.length?flagged:pickNewestPerRazina(index.exams);
     return new Set(pool.map((e:any)=>e.key));
   }
   function pickNewestPerRazina(ex:any[]){const n:Record<string,any>={};
     for(const e of ex) if(!n[e.razina]||e.key>n[e.razina].key) n[e.razina]=e;
     return Object.values(n);}
Provjeri da lib/supabase putanja odgovara postojećem clientu (iz Prompta 0). Javi.
```
**Gate:** SQL primijenjen (tablice postoje), dva lib filea kreirana, supabase import točan.

---

## PROMPT 3 — Tier state (userTier iz profiles)

```
Trenutno SPA nema userTier. Dodaj ga, minimalno i čisto:
1. Nakon uspješne prijave (i na app load ako je user već logiran), dohvati tier:
   const { data } = await supabase.from('profiles').select('tier').eq('id', user.id).single();
   const userTier = data?.tier ?? 'free';
2. Drži userTier u state-u na razini App-a (ili lagani context useAuth() ako preferiraš),
   default 'free' dok se ne dohvati / za anon.
3. Proslijedi userTier tamo gdje treba (Discere gate, kasnije AI profesor limiti).
Ne diraj postojeći auth flow (DiscereAuth, demo kod "DISCERE") osim dodavanja tier-fetcha.
Javi gdje si stavio userTier i kako se prosljeđuje.
```
**Gate:** `userTier` dostupan u App-u, default 'free', dohvaća se iz profiles nakon logina.

---

## PROMPT 4 — DiscereApp: hub + gate + runner + save (zamjena placeholdera)

> Trenutno: `{page==="discere-app" && <DiscerePayWall .../>}` je placeholder. Ovo ga zamjenjuje pravim simulatorom. Dynamic import ide preko `exam-loaders.ts` (bulletproof code-split).

```
Napravi pravu Discere aplikaciju i ukloni placeholder. Koristi exam-loaders.ts za
lazy-load (NE template-literal import).

1. Komponenta DiscereApp({ tier, onBack }):
   - import { examLoaders } from '@/content/simulator/mat/exam-loaders';
   - import index from '@/content/simulator/mat/index.json';
   - import '@/content/simulator/mat/styles/mat-engine.css';
   - import { allowedExamKeys } from '@/lib/discere-access';
   - import { saveSimResult } from '@/lib/sim-progress';
   - MatEngine lazy: u Next-u `dynamic(()=>import('@/components/simulator/MatEngine'),{ssr:false})`,
     u Viteu React.lazy + Suspense.
   - state: examKey|null, exam|null. allowed = useMemo(()=>allowedExamKeys(tier),[tier]).
   - open(key): meta=index.exams.find; const m=await examLoaders[key](); setExam({key,meta,qs:m.qs,qImages:m.qImages}).
   - render:
       ako exam && !allowed.has(exam.key) → <DiscerePayWall onBack={()=>setExam(null)} onPlan={onBack}/>
       ako exam → <Suspense fallback="Učitavam…"><MatEngine examKey qs qImages
                    duration={exam.meta.durationSec} onExit={()=>setExam(null)}
                    onDone={(r)=>saveSimResult(r, exam.meta.durationSec)} userData={{}}/></Suspense>
       inače → <DiscereHub .../>

2. Komponenta DiscereHub({ index, allowed, onOpen, onBack }):
   - Lista ispita grupiranih po razina (A/B) pa po godini (desc), iz index.exams.
   - Svaka kartica: label (e.g. "Ljeto 2025 — razina A"), broj pitanja, trajanje.
   - Ako !allowed.has(key) → lock badge "🔒 Standard" + klik vodi na onBack/paywall;
     inače klik → onOpen(key).
   - Koristi projektni CSS: .wrap, .card, .btn bp, var(--text)/var(--muted)/var(--blue).
     Mobile-first, čist, premium. Bez <form>, bez display:none (koristi {cond && ...}).

3. App routing: zamijeni `{page==="discere-app" && <DiscerePayWall .../>}` s
   `{page==="discere-app" && <DiscereApp tier={userTier} onBack={goHome}/>}`.

Pokreni pnpm dev. Testiraj: paywall→auth→discere-app → vidiš hub → otvori ODOBREN demo
ispit → renderira, završiš → red u sim_progress (provjeri Supabase). Otvori ZAKLJUČAN
ispit kao free → paywall. Javi rezultat + screenshot huba.
```
**Gate:** hub radi, demo ispit se otvara + renderira + sprema u sim_progress; zaključani → paywall.

---

## PROMPT 5 — Cleanup + Stripe webhook (P0)

```
1. Obriši privremenu test rutu/komponentu iz Prompta 1 (app/_test-sim ili ekvivalent).
2. Stripe webhook → profiles.tier (P0 pre-launch). Implementiraj server endpoint
   (Next route handler app/api/stripe/webhook/route.ts ili ekvivalent) koji:
   - verificira Stripe potpis (STRIPE_WEBHOOK_SECRET),
   - na checkout.session.completed / customer.subscription.updated|deleted mapira
     price/plan → tier ('standard'|'pro') odn. 'free' na cancel,
   - piše tier u profiles SERVICE-ROLE clientom (NE anon — RLS se zaobilazi service-role
     keyem; user ne smije sam mijenjati tier).
   - poveži Stripe customer/subscription s user.id (metadata ili customer email → profiles).
Javi koje price ID-eve mapiraš na koji tier (ili reci da ih trebam dati).
```
**Gate:** webhook postavljen, tier se piše service-role-om, plan→tier mapping potvrđen.

---

## APPENDIX A — Known issues (iz porta — ako Prompt 1 pukne)

| Error | Uzrok | Fix |
|---|---|---|
| `Invalid hook call` / hooks null | dvije React kopije (engine vs app) | osiguraj jedan react/react-dom u repo; MatEngine importa peer react, ne bundla svoju |
| `window is not defined` / SSR crash | engine je client-only | Next: `dynamic(...,{ssr:false})` + `'use client'`; Vite: render samo client |
| Stilovi ne rade | CSS nije importan | `import '@/content/simulator/mat/styles/mat-engine.css'` jednom (global/layout ili u DiscereApp) |
| `Cannot find module '@/content/...'` | alias ne resolva | provjeri tsconfig paths; foldere stavi pod `@/` root (src/ ili root) |
| Tailwind "purga" engine klase | engine koristi vlastiti CSS (.fm/.nav/.btn-g…), ne Tailwind | mat-engine.css je samostalan; ne treba Tailwind; ne purgaj te klase ako se preklapaju |
| ekran prazan, nema errora | exam modul prazan / kriva putanja | provjeri da `examLoaders[key]()` vraća `{qs,qImages}`, qs.length>0 |
| dynamic import ne code-splita | template-literal u Turbopack/Vite | koristi `exam-loaders.ts` (eksplicitni importi) — već u zipu |

Engine je `// @ts-nocheck` (hyperscript, ne JSX) — to je namjerno, ne diraj.

---

## APPENDIX B — Regen iz monolita (opcionalno, samo ako mijenjaš sadržaj)

> Normalno NE treba — pre-build je verificiran. Koristi samo ako ažuriraš monolit i želiš
> re-generirati content+engine reproducibilno.

```
U zipu su 3 node skripte. Regeneriraj iz priloženog monolita:
  pnpm add -D acorn esbuild react-dom   # devDeps za extract+verify
  node extract-exams.mjs <putanja_do_monolita.html> content/simulator/mat
  node colocate-svg.mjs   <putanja_do_monolita.html> content/simulator/mat
  node build-engine.mjs   <putanja_do_monolita.html> components/simulator/MatEngine.tsx
  node -e '...'  # regeneriraj exam-loaders.ts iz index.json (vidi original)
Redoslijed je obavezan (extract → colocate → build). Svaka skripta na kraju ispisuje
verifikaciju (broj ispita, qImages thunkovi, dropped regije). Javi izlaze.
```

---

## TL;DR redoslijed
1. Prompt 0 (files + recon) → 2. **Prompt 1 (render test — GATE)** → 3. Prompt 2 (SQL+lib) → 4. Prompt 3 (tier) → 5. Prompt 4 (DiscereApp) → 6. Prompt 5 (cleanup+Stripe).

Najvažnije: **ne prelaziš Prompt 1 dok render ne radi.** Sve ostalo je standardni wiring.
