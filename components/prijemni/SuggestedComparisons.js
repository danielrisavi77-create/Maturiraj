'use client'
import { useState, useEffect, useRef } from 'react'
import { useCompare, MAX_FREE, MAX_PRO } from '@/lib/prijemni/compareStore'

const CSS = `
.sc-wrap{
  margin:0 0 20px;
}
.sc-label{
  font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  color:var(--muted);margin-bottom:9px;display:flex;align-items:center;gap:6px;
}
.sc-chips{
  display:flex;flex-wrap:wrap;gap:7px;
}
.sc-chip{
  display:inline-flex;align-items:center;gap:7px;
  padding:7px 12px;border-radius:99px;
  font-size:12px;font-weight:600;font-family:var(--fb);
  cursor:pointer;border:none;
  transition:transform .12s,box-shadow .12s,opacity .12s;
  background:var(--s2);border:1px solid var(--bdr);color:var(--text);
}
.sc-chip:hover{
  transform:translateY(-1px);
  box-shadow:0 4px 14px rgba(0,0,0,.3);
}
.sc-chip:active{transform:none;}
.sc-chip.in-compare{
  background:rgba(75,123,255,.14);
  border-color:rgba(75,123,255,.4);
  color:#93b4ff;
}
.sc-chip.in-compare:hover{
  background:rgba(75,123,255,.20);
}
.sc-chip-dot{
  width:7px;height:7px;border-radius:50%;flex-shrink:0;
}
.sc-chip-fak{
  color:var(--muted);font-size:10px;font-weight:500;
}
`

/**
 * "Korisnici često uspoređuju zajedno s:" chips.
 *
 * Props:
 *   studijId      string       — current studij
 *   allFakulteti  array        — full fakulteti array (for lookup)
 *   isPro         boolean
 *   onMaxReached  () => void   — called if user tries to add when at limit
 */
export default function SuggestedComparisons({ studijId, allFakulteti, isPro = false, onMaxReached }) {
  const compare = useCompare()
  const [suggestions, setSuggestions] = useState([])
  const prevId = useRef(null)

  // Build flat studij map from allFakulteti
  const studijMap = (() => {
    if (!allFakulteti) return new Map()
    const m = new Map()
    for (const f of allFakulteti) {
      for (const s of f.studiji ?? []) m.set(s.id, { ...s, fak_short: f.short, fak_color: f.color })
    }
    return m
  })()

  useEffect(() => {
    if (!studijId || studijId === prevId.current) return
    prevId.current = studijId
    setSuggestions([])

    fetch(`/api/prijemni/compare-suggestions?studijId=${encodeURIComponent(studijId)}`)
      .then(r => r.json())
      .then(d => {
        if (!Array.isArray(d.suggestions)) return
        // Filter out studiji we can't look up locally
        setSuggestions(d.suggestions.filter(s => studijMap.has(s.studijId)))
      })
      .catch(() => {})
  }, [studijId])

  if (!suggestions.length) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sc-wrap">
        <div className="sc-label">
          <span>👥</span> Korisnici često uspoređuju zajedno s:
        </div>
        <div className="sc-chips">
          {suggestions.map(({ studijId: peerId }) => {
            const s = studijMap.get(peerId)
            if (!s) return null
            const inCompare = compare.has(peerId)
            const max = isPro ? MAX_PRO : MAX_FREE

            return (
              <button
                key={peerId}
                className={`sc-chip${inCompare ? ' in-compare' : ''}`}
                onClick={() => {
                  if (inCompare) {
                    compare.remove(peerId)
                    return
                  }
                  const { ok } = compare.toggle(peerId, isPro)
                  if (!ok) onMaxReached?.()
                }}
                title={inCompare ? 'Ukloni iz usporedbe' : `Dodaj u usporedbu (${compare.count}/${max})`}
              >
                <span
                  className="sc-chip-dot"
                  style={{ background: s.color ?? s.fak_color ?? 'var(--blue)' }}
                />
                <span>{s.naziv ?? s.ime}</span>
                <span className="sc-chip-fak">{s.fak_short}</span>
                {inCompare && <span style={{ fontSize: 10 }}>✓</span>}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
