'use client'
import { useState } from 'react'
import { getLoadedSync } from '@/lib/engleski-simulator/examsLoader'
import { grade } from '@/lib/engleski-simulator/scoring'

// ── Tab: Usporedi ispite ──
// Deklarirano izvan CompareScreen-a (na razini modula) da se komponenta ne stvara iznova pri svakom renderu
function SelfCompare({ history, examsMap }) {
  const EXAMS = examsMap || getLoadedSync()
  if (history.length < 2) return (
    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--muted)' }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>⚖️</div>
      Trebaš barem 2 riješena ispita za usporedbu.
    </div>
  )

  const sorted = [...history].sort((a, b) => b.pct - a.pct)
  const best = sorted[0], worst = sorted[sorted.length - 1]
  const last5 = history.slice(-5)
  const last5Avg = last5.length ? Math.round(last5.reduce((s, h) => s + h.pct, 0) / last5.length) : 0
  const allAvg = Math.round(history.reduce((s, h) => s + h.pct, 0) / history.length)
  const diff = last5Avg - allAvg
  const diffColor = diff >= 5 ? 'var(--green)' : diff <= -5 ? 'var(--red)' : 'var(--muted)'

  return (
    <div>
      <div className="nap-card">
        <div className="nap-card-hdr">
          <div className="nap-card-title">Usporedba: zadnjih 5 vs. ukupni prosjek</div>
        </div>
        <div className="nap-mode-grid">
          {[
            { label: '📊 Ukupni prosjek', avg: allAvg, n: history.length, col: 'var(--blue)' },
            { label: '🆕 Zadnjih 5', avg: last5Avg, n: last5.length, col: 'var(--teal)' },
          ].map(({ label, avg, n, col }) => (
            <div key={label} className="nap-mode-card">
              <div className="nap-mode-label">{label}</div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 28, fontWeight: 800, color: col, textAlign: 'center', padding: '10px 0' }}>{avg}%</div>
              <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted)' }}>{n} ispita</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, fontSize: 14, fontWeight: 600, color: diffColor }}>
          {diff > 5 ? `↑ Napreduješ! Zadnjih 5 ispita za ${diff}% bolji/a.`
            : diff < -5 ? `↓ Pad od ${Math.abs(diff)}% u zadnjih 5 ispita.`
            : '→ Stabilan rezultat.'}
        </div>
      </div>

      <div className="nap-card">
        <div className="nap-card-hdr">
          <div className="nap-card-title">Tvoji ekstremi</div>
        </div>
        {[
          { label: '🏆 Tvoj najbolji ispit', h: best, col: 'var(--green)' },
          { label: '📉 Tvoj najslabiji ispit', h: worst, col: 'var(--red)' },
        ].map(({ label, h, col }) => (
          <div key={label} style={{ background: 'var(--s2)', borderRadius: 'var(--r)', padding: '12px 14px', marginBottom: 8 }}>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{h.examLabel || h.examKey}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{h.date} · {h.mode}</div>
              </div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 800, color: col }}>{h.pct}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* Year comparison */}
      {(() => {
        const byYear = {}
        history.forEach(h => {
          if (!h.examKey) return
          const ex = EXAMS[h.examKey]
          if (!ex) return
          if (!byYear[ex.year]) byYear[ex.year] = []
          byYear[ex.year].push(h)
        })
        const years = Object.keys(byYear).map(Number).sort((a, b) => b - a).slice(0, 4)
        if (years.length < 2) return null
        return (
          <div className="nap-card">
            <div className="nap-card-hdr"><div className="nap-card-title">Prosjek po godištu ispita</div></div>
            {years.map(yr => {
              const sessions = byYear[yr]
              const avg = Math.round(sessions.reduce((s, h) => s + h.pct, 0) / sessions.length)
              const col = avg >= 70 ? 'var(--green)' : avg >= 55 ? 'var(--gold)' : 'var(--red)'
              return (
                <div key={yr} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 13 }}>
                    <span style={{ fontWeight: 600 }}>{yr}. godina</span>
                    <span style={{ color: col, fontWeight: 700 }}>{avg}%</span>
                  </div>
                  <div style={{ height: 8, background: 'var(--s3)', borderRadius: 99 }}>
                    <div style={{ height: '100%', width: avg + '%', background: col, borderRadius: 99, transition: 'width .8s' }} />
                  </div>
                </div>
              )
            })}
          </div>
        )
      })()}
    </div>
  )
}

// ── Tab: Simulacija vs Vježbanje ──
// Deklarirano izvan CompareScreen-a (na razini modula) da se komponenta ne stvara iznova pri svakom renderu
function ModeCompare({ history }) {
  const sim = history.filter(h => h.mode === 'simulacija')
  const vjez = history.filter(h => h.mode === 'vježbanje' || h.mode === 'vježba' || !h.mode)
  const simAvg = sim.length ? Math.round(sim.reduce((s, h) => s + h.pct, 0) / sim.length) : null
  const vjezAvg = vjez.length ? Math.round(vjez.reduce((s, h) => s + h.pct, 0) / vjez.length) : null

  if (!sim.length && !vjez.length) return (
    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--muted)' }}>Nema dovoljno podataka.</div>
  )

  return (
    <div>
      <div className="nap-card">
        <div className="nap-card-hdr"><div className="nap-card-title">🎓 Simulacija vs 🎯 Vježbanje</div></div>
        <div className="nap-mode-grid">
          {[
            { label: '🎓 Simulacija', hist: sim, avg: simAvg, col: 'var(--blue)' },
            { label: '🎯 Vježbanje', hist: vjez, avg: vjezAvg, col: 'var(--teal)' },
          ].map(({ label, hist, avg, col }) => (
            <div key={label} className="nap-mode-card">
              <div className="nap-mode-label">{label}</div>
              {hist.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 12, padding: '12px 0' }}>Nema podataka</div>
              ) : (
                <>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 800, color: avg >= 70 ? 'var(--green)' : avg >= 55 ? 'var(--gold)' : 'var(--red)', textAlign: 'center', padding: '8px 0' }}>{avg}%</div>
                  <div className="nap-mode-stats">
                    {[
                      { lblKey: 'Ispita', val: hist.length },
                      { lblKey: 'Ocjena', val: grade(avg) + '/5' },
                      { lblKey: 'Prolazi', val: hist.filter(h => h.pct >= 55).length + ' od ' + hist.length },
                      { lblKey: 'Zadnji', val: ([...hist].pop()?.pct || '—') + '%' },
                    ].map(({ lblKey, val }) => (
                      <div key={lblKey} className="nap-mode-row"><span>{lblKey}</span><strong>{val}</strong></div>
                    ))}
                  </div>
                  <div style={{ height: 6, background: 'var(--s3)', borderRadius: 99, marginTop: 10 }}>
                    <div style={{ height: '100%', width: Math.min(100, avg || 0) + '%', background: col, borderRadius: 99, transition: 'width .8s' }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {simAvg !== null && vjezAvg !== null && (
          <div className="nap-insight">
            {simAvg > vjezAvg + 5
              ? `🏆 U simulaciji si za ${simAvg - vjezAvg}% bolji/a. Odlično!`
              : simAvg < vjezAvg - 5
              ? `⚠️ U simulaciji si za ${vjezAvg - simAvg}% slabiji/a od vježbanja. Uvježbaj simulator!`
              : '✅ Balansiran rezultat u oba moda.'}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Tab: Razine ──
// Deklarirano izvan CompareScreen-a (na razini modula) da se komponenta ne stvara iznova pri svakom renderu
function RazinaCompare({ history, examsMap }) {
  const EXAMS = examsMap || getLoadedSync()
  const os = history.filter(h => {
    const ex = EXAMS[h.examKey]; return ex && ex.razina === 'osnovna'
  })
  const vi = history.filter(h => {
    const ex = EXAMS[h.examKey]; return ex && ex.razina === 'visa'
  })
  const osAvg = os.length ? Math.round(os.reduce((s, h) => s + h.pct, 0) / os.length) : null
  const viAvg = vi.length ? Math.round(vi.reduce((s, h) => s + h.pct, 0) / vi.length) : null

  if (!os.length && !vi.length) return (
    <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--muted)' }}>Nema dovoljno podataka za usporedbu razina.</div>
  )

  return (
    <div>
      <div className="nap-card">
        <div className="nap-card-hdr"><div className="nap-card-title">Osnovna vs. Viša razina</div></div>
        <div className="nap-mode-grid">
          {[
            { label: '📘 Osnovna razina (B)', hist: os, avg: osAvg, col: 'var(--teal)' },
            { label: '📗 Viša razina (A)', hist: vi, avg: viAvg, col: 'var(--blue)' },
          ].map(({ label, hist, avg, col }) => (
            <div key={label} className="nap-mode-card">
              <div className="nap-mode-label">{label}</div>
              {hist.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 12, padding: '12px 0' }}>Nije rješavano</div>
              ) : (
                <>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 800, color: avg >= 70 ? 'var(--green)' : avg >= 55 ? 'var(--gold)' : 'var(--red)', textAlign: 'center', padding: '8px 0' }}>{avg}%</div>
                  <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted)' }}>{hist.length} ispita</div>
                  <div style={{ height: 6, background: 'var(--s3)', borderRadius: 99, marginTop: 10 }}>
                    <div style={{ height: '100%', width: Math.min(100, avg || 0) + '%', background: col, borderRadius: 99 }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {osAvg !== null && viAvg !== null && (
          <div className="nap-insight">
            {Math.abs(osAvg - viAvg) < 5 ? '✅ Podjednaki rezultati na obje razine.'
              : osAvg > viAvg ? `📘 Osnovna razina za ${osAvg - viAvg}% bollja. Na višoj trebaš više rada.`
              : `📗 Viša razina za ${viAvg - osAvg}% bolja. Razmisli o promjeni razine!`}
          </div>
        )}
      </div>
    </div>
  )
}

export default function CompareScreen({ userData, onBack, examsMap }) {
  const [tab, setTab] = useState('ispiti')
  const history = userData?.history || []

  const tabs = [
    { id: 'ispiti', label: '📊 Moji ispiti' },
    { id: 'modovi', label: '⚖️ Sim vs Vježba' },
    { id: 'razine', label: '📚 Razine' },
  ]

  return (
    <div className="eng-sim">
      <div className="sim-card">
        <div className="exam-header" style={{ marginBottom: 16 }}>
          <button className="btn btn-ghost exam-header-back" onClick={onBack}>← Natrag</button>
          <div className="exam-header-info">
            <div className="exam-title">⚖️ Usporedba</div>
            <div className="exam-meta">{history.length} ispita ukupno</div>
          </div>
        </div>

        <div className="analytics-tab-bar" style={{ marginBottom: 16 }}>
          {tabs.map(t => (
            <button key={t.id} className={'analytics-tab' + (tab === t.id ? ' on' : '')} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {tab === 'ispiti' && <SelfCompare history={history} examsMap={examsMap} />}
        {tab === 'modovi' && <ModeCompare history={history} />}
        {tab === 'razine' && <RazinaCompare history={history} examsMap={examsMap} />}
      </div>
    </div>
  )
}
