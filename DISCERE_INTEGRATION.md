# Discere simulator → maturix.jsx integration (handoff za CC)

Engine + data + shema su gotovi i verificirani. Ovo je sve što CC treba za wiring.
Nema Next file-routes — maturix.jsx je SPA s `page`-state routingom; `discere-app` je
trenutno placeholder (`<DiscerePayWall/>`) → zamijeniti pravim simulatorom.

## Artefakti (iz mat-content.zip)
- `components/simulator/MatEngine.tsx` — entry (`'use client'`, thin wrapper)
- `components/simulator/MatEngineCore.tsx` — engine (importan od wrappera)
- `content/simulator/mat/exams/<key>.mjs` — po ispitu, exporta `{ qs, qImages }`
- `content/simulator/mat/mat-shared-svg.mjs` — 8 shared SVG
- `content/simulator/mat/index.json` — registry (key, year, season, razina, label, durationSec, questionCount)
- `content/simulator/mat/styles/mat-engine.css` — global import jednom
- `sim_progress.sql` — Supabase shema (pokreni prvo)

## 1. MatEngine props (contract)
```ts
<MatEngine
  examKey={string}          // "2025_ljeto_A"
  qs={exam.qs}              // iz exam modula
  qImages={exam.qImages}    // iz exam modula
  duration={number}         // index.json durationSec
  onDone={(r) => void}      // poziva se na završetku ispita (payload niže)
  onExit={() => void}       // npr. setPage("discere-app")
  userData={sessionUser}    // {} radi za exam mode; pravi user za xp/srs/razina
/>
```
Engine je client-only (window/localStorage/timer). U SPA-u se renderira tek na page-state,
pa je već client — ali drži ga iza `React.lazy` da 369 KB chunk loada tek na ulasku.

## 2. onDone payload (verbatim iz Sim — mapirano na sim_progress)
```ts
type SimResult = {
  examKey: string; examLabel: string; razina: 'A'|'B';
  pct: number; grade: string; cor: number; total: number;
  answers: Record<string, unknown>; qTimes: Record<string, number>;
  examMode: boolean;
  topic_breakdown: Record<string, {correct:number;total:number;points:number;earned:number}>;
  errorTags: unknown;
};
```

## 3. Save helper (drop-in)
```ts
// lib/sim-progress.ts
import { supabase } from '@/lib/supabase';
export async function saveSimResult(r: SimResult, durationSec?: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;                                  // anon → preskoči (ili lokalno)
  const { error } = await supabase.from('sim_progress').insert({
    user_id: user.id, subject: 'mat',
    exam_key: r.examKey, exam_label: r.examLabel, razina: r.razina,
    pct: r.pct, grade: r.grade, correct: r.cor, total: r.total,
    exam_mode: r.examMode, answers: r.answers, q_times: r.qTimes,
    topic_breakdown: r.topic_breakdown, error_tags: r.errorTags ?? [],
    duration_sec: durationSec ?? null,
  });
  if (error) console.error('saveSimResult', error);
}
```

## 4. Tier gate (free = 1 demo/razina iz index.json)
```ts
// lib/discere-access.ts
import index from '@/content/simulator/mat/index.json';
export function allowedExamKeys(tier: 'free'|'standard'|'pro'): Set<string> {
  if (tier !== 'free') return new Set(index.exams.map((e:any) => e.key)); // svi
  const flagged = index.exams.filter((e:any) => e.demo);                  // opcionalni pin
  const pool = flagged.length ? flagged : pickNewestPerRazina(index.exams);
  return new Set(pool.map((e:any) => e.key));
}
function pickNewestPerRazina(exams:any[]) {
  const n:Record<string,any> = {};
  for (const e of exams) if (!n[e.razina] || e.key > n[e.razina].key) n[e.razina] = e;
  return Object.values(n);                                                // 1×A + 1×B
}
// pin konkretne demo ispite: dodaj "demo": true na te entryje u index.json
```
Gate u runneru: ako `!allowed.has(examKey)` → `<DiscerePayWall onPlan={...}/>` umjesto MatEngine.

## 5. maturix.jsx wiring (zamjena placeholdera)
```jsx
// vrh datoteke
const MatEngine = React.lazy(() => import("./components/simulator/MatEngine"));
import "./content/simulator/mat/styles/mat-engine.css";
import index from "./content/simulator/mat/index.json";
import { allowedExamKeys } from "./lib/discere-access";
import { saveSimResult } from "./lib/sim-progress";

// nova komponenta: hub (lista ispita) + runner
function DiscereApp({ tier, onBack }) {
  const [examKey, setExamKey] = useState(null);
  const [exam, setExam] = useState(null);
  const allowed = useMemo(() => allowedExamKeys(tier), [tier]);

  async function open(key) {
    const meta = index.exams.find(e => e.key === key);
    const mod = await import(`./content/simulator/mat/exams/${key}.mjs`);
    setExam({ key, meta, qs: mod.qs, qImages: mod.qImages });
    setExamKey(key);
  }
  if (exam) {
    if (!allowed.has(exam.key)) return <DiscerePayWall onBack={() => setExam(null)} onPlan={onBack}/>;
    return (
      <React.Suspense fallback={<div className="wrap-sm" style={{padding:48}}>Učitavam…</div>}>
        <MatEngine
          examKey={exam.key} qs={exam.qs} qImages={exam.qImages} duration={exam.meta.durationSec}
          onExit={() => setExam(null)}
          onDone={(r) => saveSimResult(r, exam.meta.durationSec)}
          userData={{}} />
      </React.Suspense>
    );
  }
  // hub: grupa po razina → year, lock badge ako !allowed.has(key)
  return <DiscereHub index={index} allowed={allowed} onOpen={open} onBack={onBack}/>;
}

// App render: zamijeni postojeću discere-app liniju
{page==="discere-app" && <DiscereApp tier={userTier} onBack={goHome}/>}
```

## 6. Što još treba (CC)
- `lib/supabase.ts` — `createClient(url, anonKey)` (env). maturix.jsx već zove `supabase.auth.*` (DiscereAuth) pa client vjerojatno postoji → reuse.
- `userTier` state: fetch `profiles.tier` nakon logina (`select tier from profiles where id=auth.uid()`), default 'free'. Trenutno SPA nema tier-state — dodaj ga (ili context `useAuth`).
- `DiscereHub` UI — lista ispita po razina/godini, lock badge na zaključanima (skill CSS: `.card`, `.btn bp`, `var(--muted)`).
- Stripe webhook → `profiles.tier` (P0, odvojeno).

## Caveat
Engine je verificiran u Node SSR harnessu (loada, veže se, točan initial HTML, 6/6 ispita).
Effecti/timer/interaktivnost/localStorage progress idu client-side → finalna provjera =
render u stvarnom appu (to radiš ovdje u CC).
