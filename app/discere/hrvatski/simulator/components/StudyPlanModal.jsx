'use client';
// StudyPlanModal — AI plan učenja (4–7 tjedana) iz slabih tema. Pro-gated.
// Reuse postojeće /api/ai-simulator rute (auth + rate-limit na serveru).
import React, { useState, useEffect, useRef } from 'react';
import { calcTopicMastery } from '../utils/pedagogy';
const e = React.createElement;

function renderPlan(text) {
  // lagani markdown: **bold** → jaka linija; ostalo pre-wrap
  return text.split('\n').map((line, i) => {
    const t = line.trim();
    if (!t) return e('div', { key: i, style: { height: 8 } });
    const isHead = /^\*\*.*\*\*$/.test(t) || /^(tjedan|teden|week)\s*\d/i.test(t) || /^#{1,3}\s/.test(t);
    const clean = t.replace(/^#{1,3}\s/, '').replace(/\*\*/g, '');
    return e('div', { key: i, style: { fontSize: isHead ? 14.5 : 13.5, fontWeight: isHead ? 800 : 400, color: isHead ? 'var(--blue)' : 'var(--text)', lineHeight: 1.6, marginTop: isHead ? 12 : 2 } }, clean);
  });
}

export default function StudyPlanModal({ userData, isPro, weeks, onClose, onPaywall }) {
  const [state, setState] = useState('idle'); // idle | loading | done | error
  const [plan, setPlan] = useState('');
  const [err, setErr] = useState('');
  const started = useRef(false);

  useEffect(() => {
    if (!isPro || started.current) return;
    started.current = true;
    (async () => {
      setState('loading');
      try {
        const history = (userData && userData.history) || [];
        const mastery = calcTopicMastery(history);
        const weak = Object.entries(mastery).sort((a, b) => a[1].accuracy - b[1].accuracy).slice(0, 5).map(([t, m]) => `${t} (${m.accuracy}%)`);
        const avgPct = history.length ? Math.round(history.reduce((s, h) => s + (h.pct || 0), 0) / history.length) : 0;
        const wk = Math.max(1, Math.min(7, weeks || 6));
        const prompt = `Ti si mentor za državnu maturu iz Hrvatskoga jezika. Učenik ima prosjek ${avgPct}% na ${history.length} odrađenih ispita. `
          + `Najslabije teme: ${weak.length ? weak.join(', ') : 'još nema dovoljno podataka'}. Do mature je otprilike ${weeks || '?'} tjedana. `
          + `Napravi konkretan plan učenja kroz ${wk} tjedana, s naglaskom na slabe teme i ravnotežom: lektira, školski esej/sažetak, te vježbanje ispitnih zadataka. `
          + `Format: za svaki tjedan naslov "Tjedan N — cilj", pa 2–3 konkretne aktivnosti (kratke natuknice). Piši sažeto, na hrvatskom, bez uvoda i zaključka.`;
        const res = await fetch('/api/ai-simulator', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [{ role: 'user', content: prompt }], max_tokens: 1200 }),
        });
        if (res.status === 429) { setErr('Pričekaj nekoliko sekundi pa pokušaj ponovno.'); setState('error'); return; }
        if (!res.ok) { setErr('AI trenutno nije dostupan. Pokušaj kasnije.'); setState('error'); return; }
        const data = await res.json();
        const text = data?.content?.[0]?.text;
        if (!text) { setErr('Prazan odgovor. Pokušaj ponovno.'); setState('error'); return; }
        setPlan(text); setState('done');
      } catch (e2) { setErr('Greška u mreži. Pokušaj kasnije.'); setState('error'); }
    })();
  }, [isPro, userData, weeks]);

  return e('div', { onClick: onClose, style: { position: 'fixed', inset: 0, zIndex: 220, background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 } },
    e('div', { onClick: ev => ev.stopPropagation(), style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 18, padding: '22px 20px', maxWidth: 480, width: '100%', maxHeight: '86vh', display: 'flex', flexDirection: 'column' } },
      e('div', { style: { display: 'flex', alignItems: 'center', marginBottom: 12 } },
        e('div', { style: { fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 800 } }, '🗓️ AI plan učenja'),
        e('button', { onClick: onClose, style: { marginLeft: 'auto', background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 8, width: 30, height: 30, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--fb)' } }, '✕')
      ),
      !isPro
        ? e('div', { style: { textAlign: 'center', padding: '20px 8px' } },
            e('div', { style: { fontSize: 40, marginBottom: 10 } }, '🔒'),
            e('p', { style: { color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, marginBottom: 18 } }, 'Personalizirani AI plan učenja dio je Pro plana. Otključaj plan prilagođen tvojim slabim temama i datumu mature.'),
            e('button', { onClick: () => { onClose(); onPaywall && onPaywall('ai_plan'); }, style: { background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, 'Otključaj uz Pro →'))
        : state === 'loading'
          ? e('div', { style: { textAlign: 'center', padding: '36px 8px', color: 'var(--muted)', fontSize: 14 } }, '✨ Generiram tvoj plan…')
          : state === 'error'
            ? e('div', { style: { textAlign: 'center', padding: '28px 8px', color: 'var(--red)', fontSize: 13.5 } }, err)
            : e('div', { style: { overflowY: 'auto', paddingRight: 4 } }, renderPlan(plan))
    )
  );
}
