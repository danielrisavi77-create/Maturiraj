'use client'
import { useState } from 'react'
import { getLoadedSync } from '@/lib/engleski-simulator/examsLoader'
import { TOPIC_LABELS } from '@/lib/engleski-simulator/constants'
import { grade } from '@/lib/engleski-simulator/scoring'

export default function PDFReportScreen({ userData, history: propHistory, exam, examKey, onBack, examsMap }) {
  const EXAMS = examsMap || getLoadedSync()
  const [printing, setPrinting] = useState(false)
  const history = propHistory || userData?.history || []
  const last10 = [...history].reverse().slice(0, 10)
  const avg = history.length ? Math.round(history.reduce((s, h) => s + h.pct, 0) / history.length) : null
  const g = avg !== null ? grade(avg) : null

  const topicStats = {}
  history.forEach(h => {
    if (!h.topic_breakdown) return
    Object.entries(h.topic_breakdown).forEach(([topic, data]) => {
      if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 }
      topicStats[topic].correct += data.correct || 0
      topicStats[topic].total += data.total || 0
    })
  })
  const weakTopics = Object.entries(topicStats)
    .map(([k, v]) => ({ k, pct: v.total ? Math.round(v.correct / v.total * 100) : null }))
    .filter(t => t.pct !== null && t.pct < 60)
    .sort((a, b) => a.pct - b.pct).slice(0, 5)

  function doPrint() {
    setPrinting(true)
    setTimeout(() => { window.print(); setPrinting(false) }, 300)
  }

  const today = new Date().toLocaleDateString('hr')
  const gcColor = avg >= 70 ? '#1e7a3e' : avg >= 55 ? '#a8720a' : '#c43030'

  return (
    <div className="eng-sim">
      <div className="sim-card">
        {/* Screen-only header */}
        <div className="pdf-screen-header no-print">
          <button className="btn btn-ghost" onClick={onBack}>← Natrag</button>
          <div style={{ flex: 1 }} />
          <button className="btn btn-primary" onClick={doPrint} disabled={printing}>
            {printing ? 'Priprema…' : '🖨️ Ispiši izvještaj'}
          </button>
        </div>

        {/* Print content */}
        <div className="pdf-report" id="pdf-report-content">
          <div className="pdf-header">
            <div className="pdf-logo">📘</div>
            <div>
              <div className="pdf-title">Maturiraj.com — Izvještaj o napretku</div>
              <div className="pdf-subtitle">Engleski jezik — Matura simulator</div>
            </div>
            <div className="pdf-date">{today}</div>
          </div>

          {avg !== null && (
            <div className="pdf-overview">
              <div className="pdf-stat" style={{ '--c': gcColor }}>
                <div className="pdf-stat-val">{avg}%</div>
                <div className="pdf-stat-lbl">Prosjek</div>
              </div>
              <div className="pdf-stat" style={{ '--c': gcColor }}>
                <div className="pdf-stat-val">{g}/5</div>
                <div className="pdf-stat-lbl">Predikcija</div>
              </div>
              <div className="pdf-stat">
                <div className="pdf-stat-val">{history.length}</div>
                <div className="pdf-stat-lbl">Ispita</div>
              </div>
              <div className="pdf-stat">
                <div className="pdf-stat-val">{userData?.streak || 0}🔥</div>
                <div className="pdf-stat-lbl">Streak</div>
              </div>
              <div className="pdf-stat">
                <div className="pdf-stat-val">{userData?.xp || 0}</div>
                <div className="pdf-stat-lbl">XP</div>
              </div>
            </div>
          )}

          <div className="pdf-section">
            <div className="pdf-section-title">Zadnjih {last10.length} ispita</div>
            <table className="pdf-table">
              <thead>
                <tr>
                  <th>Ispit</th><th>Modo</th><th>Datum</th><th>Rezultat</th><th>Ocjena</th>
                </tr>
              </thead>
              <tbody>
                {last10.map((h, i) => (
                  <tr key={i}>
                    <td>{h.examLabel || h.examKey}</td>
                    <td>{h.mode || '—'}</td>
                    <td>{h.date}</td>
                    <td style={{ fontWeight: 700, color: h.pct >= 70 ? '#1e7a3e' : h.pct >= 55 ? '#a8720a' : '#c43030' }}>{h.pct}%</td>
                    <td style={{ fontWeight: 700 }}>{h.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {weakTopics.length > 0 && (
            <div className="pdf-section">
              <div className="pdf-section-title">⚠️ Slabe teme (ispod 60%)</div>
              <div className="pdf-weak-list">
                {weakTopics.map(({ k, pct }) => (
                  <div key={k} className="pdf-weak-row">
                    <span>{TOPIC_LABELS[k] || k}</span>
                    <div className="pdf-weak-bar-wrap">
                      <div className="pdf-weak-bar" style={{ width: pct + '%', background: '#c43030' }} />
                    </div>
                    <span className="pdf-weak-pct" style={{ color: '#c43030' }}>{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {examKey && EXAMS[examKey] && (() => {
            const ex = EXAMS[examKey]
            return (
              <div className="pdf-section">
                <div className="pdf-section-title">Ispit: {ex.year} — {ex.label}</div>
                {exam?.qs && exam.qs.slice(0, 5).map((q, i) => (
                  <div key={i} className="pdf-q-block">
                    <div className="pdf-q-num">Pitanje {i + 1}</div>
                    <div className="pdf-q-text">{q.q}</div>
                  </div>
                ))}
              </div>
            )
          })()}

          <div className="pdf-footer">
            <span>Generirano na maturiraj.com</span>
            <span>{today}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          .pdf-report { padding: 0; }
          body { background: white; }
          .sim-card { border: none; box-shadow: none; padding: 0; max-width: 100%; }
        }
      `}</style>
    </div>
  )
}
