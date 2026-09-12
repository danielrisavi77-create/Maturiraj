'use client'
import { useState } from 'react'
import { EXAMS } from '@/lib/engleski-simulator/exams'
import { TOPIC_LABELS } from '@/lib/engleski-simulator/constants'

const SEASONS = { ljeto: 'Ljetni', zima: 'Zimski', jesen: 'Jesenski', proljeće: 'Proljetni' }
const LEVELS = { osnovna: 'Osnovna razina (B)', visa: 'Viša razina (A)' }

export default function TopicFilterScreen({ userData, onStartExam, onBack, mode = 'filter' }) {
  const allKeys = Object.keys(EXAMS || {})
  // Collect all years
  const years = [...new Set(allKeys.map(k => EXAMS[k].year).filter(Boolean))].sort((a, b) => b - a)
  const seasons = [...new Set(allKeys.map(k => EXAMS[k].season).filter(Boolean))]
  const razine = [...new Set(allKeys.map(k => EXAMS[k].razina).filter(Boolean))]

  const [selTopic, setSelTopic] = useState(null)
  const [selYear, setSelYear] = useState(null)
  const [selSeason, setSelSeason] = useState(null)
  const [selRazina, setSelRazina] = useState(null)
  const [selType, setSelType] = useState(null)
  const [minPct, setMinPct] = useState(0)
  const [maxPct, setMaxPct] = useState(100)

  // Compute topicStats from history
  const topicStats = {}
  ;(userData?.history || []).forEach(h => {
    if (!h.topic_breakdown) return
    Object.entries(h.topic_breakdown).forEach(([t, d]) => {
      if (!topicStats[t]) topicStats[t] = { correct: 0, total: 0 }
      topicStats[t].correct += d.correct || 0
      topicStats[t].total += d.total || 0
    })
  })

  // Build filtered questions
  const filtered = allKeys.flatMap(k => {
    const ex = EXAMS[k]
    if (!ex) return []
    if (selYear && ex.year !== selYear) return []
    if (selSeason && ex.season !== selSeason) return []
    if (selRazina && ex.razina !== selRazina) return []
    return (ex.qs || []).filter(q => {
      if (selTopic && q.topic !== selTopic) return false
      if (selType && q.type !== selType) return false
      return true
    }).map(q => ({ ...q, examKey: k, _examKey: k }))
  })

  const countByTopic = {}
  allKeys.forEach(k => {
    (EXAMS[k]?.qs || []).forEach(q => {
      if (!countByTopic[q.topic]) countByTopic[q.topic] = 0
      countByTopic[q.topic]++
    })
  })

  const hasFilters = selTopic || selYear || selSeason || selRazina || selType

  function clearFilters() {
    setSelTopic(null); setSelYear(null); setSelSeason(null); setSelRazina(null); setSelType(null)
  }

  function startFiltered() {
    if (!filtered.length) return
    const MAX_QS = 30
    const pool = filtered.length > MAX_QS
      ? [...filtered].sort(() => Math.random() - 0.5).slice(0, MAX_QS)
      : filtered
    onStartExam({ qs: pool, label: buildLabel(), isFiltered: true })
  }

  function buildLabel() {
    const parts = []
    if (selTopic) parts.push(TOPIC_LABELS[selTopic] || selTopic)
    if (selYear) parts.push(selYear)
    if (selSeason) parts.push(SEASONS[selSeason] || selSeason)
    if (selRazina) parts.push(LEVELS[selRazina] || selRazina)
    if (selType) parts.push(selType.toUpperCase())
    return parts.length ? parts.join(' · ') : 'Filtrirano vježbanje'
  }

  const TYPES = [
    { key: 'mc', label: 'MC', title: 'Višestruki izbor', color: 'var(--blue)' },
    { key: 'ms', label: 'MS', title: 'Višestruke kombin.', color: 'var(--teal)' },
    { key: 'mat', label: 'MAT', title: 'Povezivanje', color: 'var(--gold)' },
    { key: 'fb', label: 'FB', title: 'Dopunjavanje', color: '#c084fc' },
    { key: 'ins', label: 'INS', title: 'Umetanje', color: 'var(--blue)' },
    { key: 'sa', label: 'SA', title: 'Kratki odgovor', color: 'var(--green)' },
  ]

  return (
    <div className="eng-sim">
      <div className="sim-card">
        <div className="exam-header" style={{ marginBottom: 20 }}>
          <button className="btn btn-ghost exam-header-back" onClick={onBack}>← Natrag</button>
          <div className="exam-header-info">
            <div className="exam-title">🔍 Filtrirano vježbanje</div>
            <div className="exam-meta">{filtered.length} pitanja odgovara</div>
          </div>
        </div>

        {/* Topic selector */}
        <div className="filter-group">
          <div className="filter-group-label">
            Tema
            {selTopic && <button className="filter-clear-btn" onClick={() => setSelTopic(null)}>×</button>}
          </div>
          <div className="heatmap-grid" style={{ marginTop: 8 }}>
            {Object.keys(TOPIC_LABELS).map(key => {
              const stats = topicStats[key]
              const pct = stats && stats.total ? Math.round(stats.correct / stats.total * 100) : null
              const cls = pct === null ? 'empty' : pct >= 70 ? 'hot' : pct >= 50 ? 'mid' : 'cold'
              const isSelected = selTopic === key
              return (
                <div key={key}
                  className={'heatmap-cell ' + cls + (isSelected ? ' selected' : '')}
                  style={{
                    cursor: 'pointer',
                    outline: isSelected ? '2px solid var(--gold)' : 'none',
                    outlineOffset: 2,
                  }}
                  onClick={() => setSelTopic(isSelected ? null : key)}>
                  <div className="heatmap-topic">{TOPIC_LABELS[key]}</div>
                  <div className="heatmap-pct">{pct === null ? '—' : pct + '%'}</div>
                  <div className="heatmap-sub">{countByTopic[key] || 0} pitanja</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Type selector */}
        <div className="filter-group">
          <div className="filter-group-label">
            Vrsta pitanja
            {selType && <button className="filter-clear-btn" onClick={() => setSelType(null)}>×</button>}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
            {TYPES.map(({ key, label, title, color }) => (
              <button key={key}
                className={'filter-type-btn' + (selType === key ? ' on' : '')}
                style={{ '--tc': color }}
                onClick={() => setSelType(selType === key ? null : key)}
                title={title}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Year / Season / Razina selectors */}
        <div className="filter-row-3">
          <div className="filter-group">
            <div className="filter-group-label">Godina{selYear && <button className="filter-clear-btn" onClick={() => setSelYear(null)}>×</button>}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {years.map(yr => (
                <button key={yr}
                  className={'filter-chip' + (selYear === yr ? ' on' : '')}
                  onClick={() => setSelYear(selYear === yr ? null : yr)}>{yr}</button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-group-label">Rok{selSeason && <button className="filter-clear-btn" onClick={() => setSelSeason(null)}>×</button>}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {seasons.map(s => (
                <button key={s}
                  className={'filter-chip' + (selSeason === s ? ' on' : '')}
                  onClick={() => setSelSeason(selSeason === s ? null : s)}>
                  {SEASONS[s] || s}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-group-label">Razina{selRazina && <button className="filter-clear-btn" onClick={() => setSelRazina(null)}>×</button>}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {razine.map(r => (
                <button key={r}
                  className={'filter-chip' + (selRazina === r ? ' on' : '')}
                  onClick={() => setSelRazina(selRazina === r ? null : r)}>
                  {r === 'osnovna' ? 'Osnovna (B)' : r === 'visa' ? 'Viša (A)' : r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview + Action */}
        <div className="filter-preview">
          {hasFilters && (
            <div className="filter-active-pills">
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>Aktivni filtri:</span>
              {selTopic && <span className="filter-pill">{TOPIC_LABELS[selTopic] || selTopic}</span>}
              {selType && <span className="filter-pill">{selType.toUpperCase()}</span>}
              {selYear && <span className="filter-pill">{selYear}.</span>}
              {selSeason && <span className="filter-pill">{SEASONS[selSeason] || selSeason}</span>}
              {selRazina && <span className="filter-pill">{selRazina === 'osnovna' ? 'Osnovna' : 'Viša'}</span>}
              <button className="filter-clear-all" onClick={clearFilters}>Očisti sve ×</button>
            </div>
          )}

          <div className="filter-result-row">
            <div className="filter-count">
              <span style={{ fontFamily: 'var(--fh)', fontSize: 28, fontWeight: 800, color: filtered.length > 0 ? 'var(--gold)' : 'var(--muted)' }}>{filtered.length}</span>
              <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 6 }}>pitanja odgovara</span>
            </div>
            <button className="btn btn-primary"
              style={{ padding: '10px 20px', opacity: filtered.length ? 1 : 0.5 }}
              disabled={!filtered.length}
              onClick={startFiltered}>
              Vježbaj {filtered.length > 30 ? '30 nasumičnih' : filtered.length + ' pitanja'} →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
