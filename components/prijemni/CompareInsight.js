'use client'
import { useState, useEffect, useRef } from 'react'

const CSS = `
.ci-wrap{
  margin:0 0 4px;
  padding:14px 18px 16px;
  background:linear-gradient(135deg,rgba(124,92,252,.09) 0%,rgba(75,123,255,.07) 100%);
  border:1px solid rgba(124,92,252,.22);
  border-radius:14px;
  position:relative;
  overflow:hidden;
}
.ci-wrap::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 80% at 0% 50%,rgba(124,92,252,.06),transparent);
  pointer-events:none;
}
.ci-label{
  display:flex;align-items:center;gap:6px;
  font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--violet);margin-bottom:9px;
}
.ci-star{font-size:13px;line-height:1;}
.ci-text{
  margin:0;line-height:1.65;font-size:13.5px;
  color:var(--text);opacity:.92;
}
.ci-err{margin:0;font-size:13px;color:var(--muted);}

/* Skeleton */
.ci-skeleton{display:flex;flex-direction:column;gap:7px;}
.ci-sk-line{
  height:13px;border-radius:6px;
  background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.11) 50%,rgba(255,255,255,.06) 75%);
  background-size:200% 100%;
  animation:ci-shimmer 1.4s infinite;
}
@keyframes ci-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* Pro gate */
.ci-gate{
  display:flex;align-items:center;gap:10px;
  padding:11px 16px;
  background:rgba(255,255,255,.03);
  border:1px solid var(--bdr);
  border-radius:12px;
  margin:0 0 4px;
  font-size:12.5px;color:var(--muted);
}
.ci-gate-ico{font-size:15px;}
.ci-gate strong{color:var(--gold);font-weight:700;}
`

/**
 * AI-generated insight for a set of compared studiji.
 *
 * Props:
 *   open          boolean      — whether CompareView is open
 *   studiji       array        — full studij objects being compared
 *   userScores    object|null  — user's prijemni scores
 *   scoresLoaded  boolean      — whether getUserScores() has resolved
 *   isPro         boolean
 */
export default function CompareInsight({ open, studiji, userScores, scoresLoaded, isPro }) {
  const [insight, setInsight]   = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const prevKeyRef              = useRef(null)

  const key = studiji.map(s => s.id).sort().join(',')

  useEffect(() => {
    if (!open || !isPro || !scoresLoaded) return
    if (studiji.length < 2) return
    if (key === prevKeyRef.current) return

    prevKeyRef.current = key
    setInsight(null)
    setError(null)
    setLoading(true)

    fetch('/api/prijemni/compare-insight', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Ključevi (ime/fakultet/trajanje) su ugovor s /api/prijemni/compare-insight;
        // vrijednosti moraju doći iz STVARNIH polja Studij objekta (lib/types/prijemni.js):
        // naziv, fak_name/fak_short, trajanje_god. Prije su slana s.ime/s.fakultet_ime/
        // s.trajanje (ne postoje) → AI je dobivao prazne nazive i davao beskoristan uvid.
        studiji: studiji.map(s => ({
          ime:       s.naziv,
          fakultet:  s.fak_name ?? s.fak_short,
          prag_2025: s.prag_2025,
          trajanje:  s.trajanje_god,
          predmeti:  s.predmeti,
        })),
        scores: userScores,
      }),
    })
      .then(r => r.json())
      .then(d => {
        if (d.insight) setInsight(d.insight)
        else setError('AI uvid trenutno nije dostupan.')
      })
      .catch(() => setError('Greška pri dohvatu AI uvida.'))
      .finally(() => setLoading(false))
  }, [open, isPro, scoresLoaded, key])

  // Reset when modal closes
  useEffect(() => {
    if (!open) prevKeyRef.current = null
  }, [open])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {!isPro ? (
        <div className="ci-gate">
          <span className="ci-gate-ico">✨</span>
          <span>AI sažetak usporedbe dostupan je za <strong>Pro</strong> korisnike.</span>
        </div>
      ) : (
        (loading || insight || error) && (
          <div className="ci-wrap">
            <div className="ci-label">
              <span className="ci-star">✨</span> AI uvid
            </div>
            {loading && (
              <div className="ci-skeleton">
                <div className="ci-sk-line" style={{ width: '93%' }} />
                <div className="ci-sk-line" style={{ width: '80%' }} />
                <div className="ci-sk-line" style={{ width: '58%' }} />
              </div>
            )}
            {insight && <p className="ci-text">{insight}</p>}
            {error   && <p className="ci-err">{error}</p>}
          </div>
        )
      )}
    </>
  )
}
