'use client';
// components/discere/mat/MatFullSimulator.jsx
// Full native Discere math simulator: renders the engine's top-level <App/> (home + all
// modes: vježba, SRS, flashcards, formule, statistika, adaptivni, AI asistent…) inside the
// platform's React tree — NOT an iframe. Keeps login (route-level), tier-gate, and Supabase
// progress by driving the engine's built-in bridge protocol in-process.
//
// Bridge (engine ↔ here), same protocol it uses for the iframe build:
//   engine → here : DISCERE_SAVE {key,value} (debounced DS writes), DISCERE_READY, DISCERE_UPGRADE
//                   (routed via window.__DISCERE_NATIVE_SAVE__ — see build-engine toParent patch)
//   here → engine : window.__DISCERE_HYDRATE__ (+ DISCERE_HYDRATE event) and DISCERE_CONFIG {isPro}
//
// Data: the engine's EXAMS/Q_IMAGES were externalized at build; cross-exam modes (practice,
// SRS, browse, adaptive…) need every question, so we eager-load all exam chunks here. This
// loads only on /discere/matematika (route-level split) — never in the main app bundle.
import { useEffect, useRef, useState, createElement as h, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { allowedExamKeys } from '@/lib/discere-access';
import { loadSimState, saveSimState } from '@/lib/discere-sim-state';
import { saveSimResult } from '@/lib/sim-progress';
import { isPaidTier, isProTier } from '@/lib/billing/getEffectiveTier';
import { upgradeOffer } from '@/lib/billing/plans';

const REAL_EXAM = /^\d{4}_[a-zšđčćž]+_[AB]$/; // skip virtual/practice sessions for sim_progress

function Loader({ label }) {
  return h('div', { style: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: '#9fb2d4', fontFamily: 'system-ui, sans-serif', fontSize: 14 } }, label || 'Učitavam simulator…');
}

export default function MatFullSimulator({ tier = 'free' }) {
  const router = useRouter();
  const [phase, setPhase] = useState('loading'); // loading | ready | error
  const partsRef = useRef(null); // { App, ErrorBoundary }
  const [coachTips, setCoachTips] = useState(null); // Strategy coach overlay (post-exam)
  const [importOpen, setImportOpen] = useState(false);
  const [remountKey, setRemountKey] = useState(0); // bump to remount App after importing a custom exam
  const coreRef = useRef(null);
  const examsRef = useRef(null);

  useEffect(() => {
    function onCoach(ev) { if (ev && ev.detail && ev.detail.length) setCoachTips(ev.detail); }
    window.addEventListener('mat-coach', onCoach);
    return () => window.removeEventListener('mat-coach', onCoach);
  }, []);

  // ── engine stylesheet: inject only while mounted (full-screen light/dark takeover) ──
  // Fontovi (DM Serif Display + Instrument Sans) su self-hosted @font-face u mat-engine.css (2.3),
  // više se ne dovlače s Google Fonts CDN-a.
  useEffect(() => {
    const ID = 'mat-engine-styles';
    if (typeof document !== 'undefined') {
      if (!document.getElementById(ID)) {
        const link = document.createElement('link');
        link.id = ID; link.rel = 'stylesheet'; link.href = '/sim/mat-engine.css';
        document.head.appendChild(link);
      }
    }
    return () => {
      document.getElementById(ID)?.remove();
      // engine toggles these on <body>; clear them so the rest of the app isn't affected
      document.body.classList.remove('dark-mode', 'light-mode', 'cb-mode', 'dys-mode');
    };
  }, []);

  // ── Cross-tab sync: when another tab changes engine state (mat_* keys), re-hydrate this tab.
  // Reuses the engine's built-in discere-hydrate bridge (DS.hydrate + reloadUserData). ──
  useEffect(() => {
    function onStorage(ev) {
      if (!ev || !ev.key || ev.key.indexOf('mat_') !== 0) return;
      try {
        const state = {};
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.indexOf('mat_') === 0) state[k] = localStorage.getItem(k);
        }
        window.__DISCERE_HYDRATE__ = state;
        window.dispatchEvent(new CustomEvent('discere-hydrate'));
      } catch (e) { /* ignore */ }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [core, loadersMod, indexMod] = await Promise.all([
          import('@/components/simulator/MatEngineCore'),
          import('@/content/simulator/mat/exam-loaders'),
          import('@/content/simulator/mat/index.json'),
          ensureNerdamer(), // symbolic-math lib → window.nerdamer (CAS: solver, exact calc, verify)
        ]);
        const { examLoaders } = loadersMod;
        const index = indexMod.default || indexMod;
        const metaByKey = {};
        index.exams.forEach((e) => { metaByKey[e.key] = e; });

        // eager-load every exam chunk → rebuild EXAMS + merged Q_IMAGES
        const keys = Object.keys(examLoaders);
        const mods = await Promise.all(keys.map((k) => examLoaders[k]()));
        if (cancelled) return;
        const EXAMS = {};
        const QIMG = {};
        const allowed = allowedExamKeys(tier);
        keys.forEach((k, i) => {
          const m = mods[i];
          const meta = metaByKey[k] || {};
          EXAMS[k] = {
            key: k, year: meta.year, season: meta.season, razina: meta.razina,
            label: meta.label, duration: meta.durationSec, qs: (m.qs || []).filter(q => q && !q._META),
            locked: !allowed.has(k), // free tier → demo only; gate per discere-access
          };
          Object.assign(QIMG, m.qImages || {});
        });

        // saved cross-device state (Supabase) → hydrate engine before App mounts
        const saved = await loadSimState('mat');
        if (cancelled) return;

        setupBridge(saved, router);
        if (typeof window !== 'undefined') window.__DISCERE_HYDRATE__ = saved;

        // merge user-imported custom exams (persisted) so they show in the engine's exam list
        try {
          const custom = JSON.parse(localStorage.getItem('mat_custom_exams') || '{}') || {};
          Object.keys(custom).forEach((k) => { EXAMS[k] = custom[k]; });
        } catch {}
        coreRef.current = core;
        examsRef.current = EXAMS;

        core.__setExams(EXAMS);
        core.__setQImages(QIMG);
        // pro features (AI asistent/analiza/plan) — engine reads IS_PRO via DISCERE_CONFIG.
        // Tier pravilo dolazi iz lib/billing (isto pravilo kao proxy i requirePro).
        // NAPOMENA: engine iz ove poruke trenutno čita SAMO `isPro`; planName/price
        // šaljemo unaprijed, ali cijena je u MatEngineCore još hardkodirana u
        // paywall stringovima, pa promjena PLANS.pro.priceLabel NIJE dovoljna sama
        // za sebe — treba je i u engineu preuzeti iz DISCERE_CONFIG.
        try {
          const offer = upgradeOffer();
          window.postMessage({
            type: 'DISCERE_CONFIG',
            tier,
            isPro: isProTier(tier),
            isPaid: isPaidTier(tier),
            planName: offer.planName,
            price: offer.price,
          }, '*');
        } catch {}

        partsRef.current = { App: core.App, ErrorBoundary: core.ErrorBoundary };
        setPhase('ready');
      } catch (e) {
        console.error('[MatFullSimulator] load failed', e);
        if (!cancelled) setPhase('error');
      }
    })();
    return () => { cancelled = true; };
  }, [tier, router]);

  function importExam(jsonText) {
    let parsed;
    try { parsed = JSON.parse(jsonText); } catch { return 'Neispravan JSON.'; }
    let qs, label, razina, duration;
    if (Array.isArray(parsed)) { qs = parsed; }
    else if (parsed && Array.isArray(parsed.qs)) { qs = parsed.qs; label = parsed.label; razina = parsed.razina; duration = parsed.duration; }
    else return 'Očekujem niz pitanja ili objekt { label, qs }.';
    if (!qs.length) return 'Nema pitanja u uvozu.';
    for (const q of qs) {
      if (!q || typeof q.q !== 'string') return 'Svako pitanje treba tekstualno polje "q".';
      if ((q.type || 'mc') === 'mc' && (!Array.isArray(q.opts) || !q.sol || q.sol.cl == null)) return 'MC pitanja trebaju "opts" i "sol.cl".';
    }
    const clean = qs.map((q, i) => ({ ...q, id: i + 1, type: q.type || 'mc' }));
    const key = 'custom_' + Date.now();
    const exam = { key, year: 9000, season: 'ljeto', razina: razina === 'A' ? 'A' : 'B', label: label || 'Uvezeni ispit', duration: (Number(duration) || 60) * 60, qs: clean, custom: true };
    try {
      const custom = JSON.parse(localStorage.getItem('mat_custom_exams') || '{}') || {};
      custom[key] = exam;
      localStorage.setItem('mat_custom_exams', JSON.stringify(custom));
    } catch { return 'Ne mogu spremiti (localStorage pun?).'; }
    if (examsRef.current && coreRef.current) { examsRef.current[key] = exam; coreRef.current.__setExams(examsRef.current); }
    setImportOpen(false);
    setRemountKey((k) => k + 1); // remount App so it re-reads EXAMS
    return null;
  }

  if (phase === 'error') {
    return h(Loader, { label: 'Greška pri učitavanju simulatora. Osvježi stranicu.' });
  }
  if (phase !== 'ready' || !partsRef.current) {
    return h(Loader, { label: 'Učitavam simulator…' });
  }
  const { App, ErrorBoundary } = partsRef.current;
  return h(Fragment, null,
    h(ErrorBoundary, null, h(App, { key: remountKey })),
    coachTips && h(CoachOverlay, { tips: coachTips, onClose: () => setCoachTips(null) }),
    h('button', {
      onClick: () => setImportOpen(true), title: 'Uvezi vlastiti ispit (JSON)',
      style: { position: 'fixed', right: 16, bottom: 'calc(16px + env(safe-area-inset-bottom))', zIndex: 175, width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--bdr)', background: 'var(--s1)', color: 'var(--text)', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', fontSize: 18 },
    }, '📥'),
    importOpen && h(MatImporter, { onClose: () => setImportOpen(false), onImport: importExam }),
  );
}

function MatImporter({ onClose, onImport }) {
  const [txt, setTxt] = useState('');
  const [err, setErr] = useState('');
  const example = '{\n  "label": "Moj ispit",\n  "razina": "B",\n  "qs": [\n    { "type": "mc", "q": "2 + 2 = ?", "opts": ["3","4","5"], "sol": { "cl": "B" }, "topic": "br" }\n  ]\n}';
  function submit() { const r = onImport(txt); if (r) setErr(r); }
  return h('div', { onClick: onClose, style: { position: 'fixed', inset: 0, zIndex: 230, background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 } },
    h('div', { onClick: (ev) => ev.stopPropagation(), style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 16, padding: 20, maxWidth: 520, width: '100%', maxHeight: '88vh', display: 'flex', flexDirection: 'column' } },
      h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 10 } },
        h('div', { style: { fontFamily: 'var(--fh)', fontSize: 19, fontWeight: 800 } }, '📥 Uvoz vlastitog ispita'),
        h('button', { onClick: onClose, style: { marginLeft: 'auto', background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 8, width: 30, height: 30, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--fb)' } }, '✕')),
      h('p', { style: { color: 'var(--muted)', fontSize: 12.5, lineHeight: 1.55, marginBottom: 8 } }, 'Zalijepi JSON: niz pitanja ili objekt { label, razina, qs }. MC pitanja trebaju opts + sol.cl.'),
      h('textarea', { value: txt, onChange: (e2) => { setTxt(e2.target.value); setErr(''); }, placeholder: example, spellCheck: false, style: { width: '100%', boxSizing: 'border-box', minHeight: 220, fontFamily: 'monospace', fontSize: 12.5, padding: 10, borderRadius: 10, border: '1px solid var(--bdr)', background: 'var(--s2)', color: 'var(--text)', resize: 'vertical' } }),
      err && h('div', { style: { color: 'var(--red)', fontSize: 12.5, marginTop: 8 } }, err),
      h('div', { style: { display: 'flex', gap: 8, marginTop: 12 } },
        h('button', { onClick: submit, style: { flex: 1, background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, 'Uvezi'),
        h('button', { onClick: onClose, style: { background: 'var(--s2)', color: 'var(--text)', border: '1px solid var(--bdr)', borderRadius: 10, padding: '12px 16px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, 'Odustani'))
    )
  );
}

function CoachOverlay({ tips, onClose }) {
  return h('div', { style: { position: 'fixed', left: 16, right: 16, bottom: 'calc(16px + env(safe-area-inset-bottom))', zIndex: 190, display: 'flex', justifyContent: 'center', pointerEvents: 'none' } },
    h('div', { style: { pointerEvents: 'auto', maxWidth: 460, width: '100%', background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 14, boxShadow: 'var(--shadow-lg)', padding: '14px 16px' } },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 } },
        h('span', { style: { fontWeight: 800, fontSize: 14, color: 'var(--text)', fontFamily: 'var(--fb)' } }, '🎯 Savjeti trenera'),
        h('button', { onClick: onClose, style: { marginLeft: 'auto', background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 8, width: 26, height: 26, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--fb)' } }, '✕')),
      ...tips.map((t, i) => h('div', { key: i, style: { display: 'flex', gap: 8, marginBottom: i < tips.length - 1 ? 8 : 0 } },
        h('span', { style: { fontSize: 18, flexShrink: 0 } }, t.icon),
        h('div', null,
          h('div', { style: { fontSize: 13, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--fb)' } }, t.title),
          h('div', { style: { fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'var(--fb)' } }, t.detail))))
    )
  );
}

// Load the bundled nerdamer CAS lib (extracted from the monolith → /sim/nerdamer.js) as a
// classic script so it sets window.nerdamer, which the engine reads for solver/exact/verify.
// Never rejects — CAS features degrade gracefully (engine guards on `if(!ND) return ...`).
function ensureNerdamer() {
  return new Promise((res) => {
    if (typeof window === 'undefined') return res();
    if (window.nerdamer) return res();
    const ID = 'mat-nerdamer';
    const existing = document.getElementById(ID);
    if (existing) {
      if (window.nerdamer) return res();
      existing.addEventListener('load', () => res(), { once: true });
      existing.addEventListener('error', () => res(), { once: true });
      return;
    }
    const s = document.createElement('script');
    s.id = ID; s.src = '/sim/nerdamer.js'; s.async = true;
    s.onload = () => res();
    s.onerror = () => { console.warn('[MatFullSimulator] nerdamer failed to load — CAS features disabled'); res(); };
    document.head.appendChild(s);
  });
}

// ── in-process bridge: capture engine DS writes → Supabase (full blob + per-exam rows) ──
function setupBridge(saved, router) {
  if (typeof window === 'undefined') return;
  const buffer = { ...saved };
  let histLen = 0;
  try { histLen = (JSON.parse(saved['mat_sim_v1'] || '{}').history || []).length; } catch {}
  let timer = null;

  window.__DISCERE_NATIVE_SAVE__ = (msg) => {
    if (!msg) return;
    if (msg.type === 'DISCERE_UPGRADE') { try { router.push('/pro?from=discere'); } catch {} return; }
    if (msg.type !== 'DISCERE_SAVE') return; // DISCERE_READY: hydrate/config already pushed

    if (msg.value == null) delete buffer[msg.key];
    else buffer[msg.key] = msg.value;

    // new completed real-exam attempts → public.sim_progress (analytics / parent dashboard)
    // + post-exam Strategy coach (tips from qTimes + topic_breakdown of the latest attempt)
    if (msg.key === 'mat_sim_v1') {
      try {
        const hist = (JSON.parse(msg.value).history) || [];
        for (let i = histLen; i < hist.length; i++) flushAttempt(hist[i]);
        if (hist.length > histLen) {
          const tips = generateCoachTips(hist[hist.length - 1]);
          if (tips.length) window.dispatchEvent(new CustomEvent('mat-coach', { detail: tips }));
        }
        histLen = hist.length;
      } catch {}
    }

    clearTimeout(timer);
    timer = setTimeout(() => { saveSimState({ ...buffer }, 'mat'); }, 1200);
  };
}

// UPOZORENJE: zapis povijesti koji engine gradi (MatEngineCore, newHistory) NEMA
// per-answer mapu ni tagove grešaka — sadrži samo examLabel/examKey/razina/date/
// hour/pct/grade/cor/total/qTimes/mode/topic_breakdown. `answers` i `errorTags`
// zato u praksi ostaju prazni (puni podatak je samo u result objektu proslijeđenom
// u onDone). Čitamo ih tolerantno da zapis bude potpun čim ih engine počne
// spremati u povijest, ali roditeljski dashboard/analiza grešaka do tada nemaju
// per-answer podatke — nije riješeno ovom promjenom.
function flushAttempt(hRec) {
  if (!hRec || !REAL_EXAM.test(hRec.examKey || '')) return; // skip virtual/practice sessions
  const qTimes = hRec.qTimes || {};
  saveSimResult({
    examKey: hRec.examKey,
    examLabel: hRec.examLabel,
    razina: hRec.razina === 'A' ? 'A' : 'B',
    pct: hRec.pct,
    grade: hRec.grade,
    cor: hRec.cor,
    total: hRec.total,
    answers: hRec.answers || {},
    qTimes,
    examMode: hRec.mode === 'simulacija',
    topic_breakdown: hRec.topic_breakdown || {},
    errorTags: normalizeErrorTags(hRec.errorTags),
  }, durationSec(hRec, qTimes));
}

// error_tags je jsonb niz. Engine tagove drži kao { qid: [tag, ...] }, pa objekt
// spljoštimo u niz — inače bi potrošači koji očekuju niz dobili objekt.
function normalizeErrorTags(raw) {
  if (Array.isArray(raw)) return raw;
  if (!raw || typeof raw !== 'object') return [];
  const out = [];
  for (const tags of Object.values(raw)) {
    if (Array.isArray(tags)) out.push(...tags);
    else if (tags != null) out.push(tags);
  }
  return out;
}

// duration_sec: zapis iz enginea ako postoji, inače zbroj vremena po pitanju.
function durationSec(hRec, qTimes) {
  const direct = Number(hRec.duration_sec ?? hRec.durationSec);
  if (Number.isFinite(direct) && direct > 0) return Math.round(direct);
  let sum = 0;
  for (const k of Object.keys(qTimes)) {
    const t = Number(qTimes[k]);
    if (Number.isFinite(t) && t > 0) sum += t;
  }
  return sum > 0 ? Math.round(sum) : undefined;
}

// Strategy coach: post-exam tips from the saved history entry (qTimes + topic_breakdown).
// Per-question correctness isn't in the blob, so rush/slow-error tips are omitted (vs HRV coach).
function generateCoachTips(h) {
  const tips = [];
  if (!h) return tips;
  const qTimes = h.qTimes || {};
  const times = Object.keys(qTimes).map(k => Number(qTimes[k])).filter(t => t > 0);
  if (times.length >= 6) {
    const half = Math.floor(times.length / 2);
    const first = times.slice(0, half).reduce((a, b) => a + b, 0) / half;
    const second = times.slice(half).reduce((a, b) => a + b, 0) / (times.length - half);
    if (second < first * 0.6) tips.push({ icon: '🔋', title: 'Ubrzavaš pred kraj', detail: `Prva polovica ~${Math.round(first)}s/pitanje, druga ~${Math.round(second)}s. Rasporedi vrijeme ravnomjernije.` });
  }
  if (h.mode === 'simulacija' && times.length) {
    const perQ = times.reduce((a, b) => a + b, 0) / times.length;
    if (perQ > 150) tips.push({ icon: '⏱️', title: 'Upravljanje vremenom', detail: `Prosjek ${Math.round(perQ)}s/pitanje — na pravoj maturi pazi na tempo.` });
  }
  const tb = h.topic_breakdown || {};
  let weak = null;
  Object.keys(tb).forEach(t => { const d = tb[t]; if (d && d.total >= 3) { const acc = d.correct / d.total; if (!weak || acc < weak.acc) weak = { t, acc, d }; } });
  if (weak && weak.acc < 0.6) tips.push({ icon: '📚', title: 'Slaba tema', detail: `${weak.t}: ${weak.d.correct}/${weak.d.total} točnih — vježbaj filtrirano po toj temi.` });
  if (!tips.length && h.pct >= 85) tips.push({ icon: '🏆', title: 'Odlično!', detail: `${h.pct}% — sjajna izvedba. Nastavi tako!` });
  return tips.slice(0, 3);
}
