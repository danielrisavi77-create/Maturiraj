'use client'
import { useState, useMemo } from 'react'
import { chk, grade } from '@/lib/engleski-simulator/scoring'
import { TOPIC_LABELS } from '@/lib/engleski-simulator/constants'
import { MCQ, MatQ, FbQ, FeedbackBox } from '@/components/engleski-simulator/components/SimSharedUI'

// broj pitanja po tipu u dnevnom izazovu — dijeli se s HomeScreen radi točnog prikaza
export const DAILY_TARGETS = { mc: 10, mat: 4, fb: 6 }
export const DAILY_COUNT = Object.values(DAILY_TARGETS).reduce((a, b) => a + b, 0)

function getDailyChallengeQuestions(examsMap) {
  const seed = Math.floor(Date.now() / 86400000)
  function pseudoRandom(n, s) {
    let x = Math.sin(s + n) * 10000
    return x - Math.floor(x)
  }
  const allKeys = Object.keys(examsMap || {})
  if (!allKeys.length) return []

  function pickFromType(type, count, usedIds = new Set()) {
    const pool = allKeys.flatMap(k => (examsMap[k].qs || []).filter(q => q.type === type && !usedIds.has(q.id)))
    const indexMap = new Map(pool.map((q, i) => [q, i]))
    const shuffled = [...pool].sort((a, b) => pseudoRandom(indexMap.get(a), seed) - pseudoRandom(indexMap.get(b), seed))
    const picked = shuffled.slice(0, count)
    picked.forEach(q => usedIds.add(q.id))
    return picked
  }

  const usedIds = new Set()
  const targets = DAILY_TARGETS
  const qs = []
  Object.entries(targets).forEach(([type, cnt]) => {
    qs.push(...pickFromType(type, cnt, usedIds))
  })

  const qsIndexMap = new Map(qs.map((q, i) => [q, i]))
  return qs.sort((a, b) => pseudoRandom(qsIndexMap.get(a), seed + 1) - pseudoRandom(qsIndexMap.get(b), seed + 1))
    .map((q, i) => ({ ...q, dailyId: 'daily_' + seed + '_' + i }))
}

export default function DailyChallengeScreen({ userData, onDone, onBack, examsMap }) {
  const qs = useMemo(() => getDailyChallengeQuestions(examsMap), [examsMap])
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showFb, setShowFb] = useState(false)

  const today = new Date().toLocaleDateString('hr')
  const history = userData?.history || []
  // Izračunato u lazy useState initializeru (ne izravno u tijelu komponente) da render ostane čist
  const [todayKey] = useState(() => Math.floor(Date.now() / 86400000))
  const alreadyDone = history.some(h => h.examKey === 'daily_' + todayKey)

  if (!qs.length) return (
    <div className="eng-sim">
      <div className="sim-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontSize: 44, marginBottom: 16 }}>🎯</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Nema podataka</div>
        <div style={{ color: 'var(--muted)', marginBottom: 24 }}>Nema dostupnih pitanja za dnevni izazov.</div>
        <button className="btn btn-ghost" onClick={onBack}>← Natrag</button>
      </div>
    </div>
  )

  if (submitted) {
    const correct = qs.filter(q => {
      const ans = answers[q.id !== undefined ? q.id : q.dailyId]
      return chk(q, ans) === true
    }).length
    const pct = Math.round(correct / qs.length * 100)
    const g = grade(pct)
    const gc = pct >= 70 ? 'var(--green)' : pct >= 55 ? 'var(--gold)' : 'var(--red)'

    return (
      <div className="eng-sim">
        <div className="sim-card">
          <div style={{ textAlign: 'center', padding: '24px 0 16px' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎯</div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Dnevni izazov završen!</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>{today}</div>
          </div>
          <div className="results-overview">
            <div className="results-big-pct" style={{ color: gc }}>{pct}%</div>
            <div className="results-grade-row">
              <span style={{ color: gc, fontSize: 28, fontWeight: 800 }}>Ocjena {g}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>Orijentacijska ocjena — NCVVO pragove određuje za svaki rok. Pisanje nije bodovano.</div>
            <div className="results-stat-row">
              <div className="results-stat"><div className="results-stat-val">{correct}</div><div className="results-stat-lbl">Točnih</div></div>
              <div className="results-stat"><div className="results-stat-val">{qs.length - correct}</div><div className="results-stat-lbl">Grešaka</div></div>
              <div className="results-stat"><div className="results-stat-val">{qs.length}</div><div className="results-stat-lbl">Ukupno</div></div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {qs.map((q, i) => {
              const qId = q.id !== undefined ? q.id : q.dailyId
              const ans = answers[qId]
              const ok = chk(q, ans)
              return (
                <div key={i} className="fb-item" style={{ borderColor: ok === true ? 'rgba(30,122,62,.3)' : 'rgba(196,48,48,.3)', background: ok === true ? 'var(--green-d)' : 'var(--red-d)' }}>
                  <div className="fb-indicator" style={{ color: ok === true ? 'var(--green)' : 'var(--red)' }}>{ok === true ? '✓' : '✗'}</div>
                  <div className="fb-body">
                    <div className="fb-q">{q.q}</div>
                    {ok !== true && q.type === 'mc' && q.sol?.cl && q.opts && (
                      <div className="fb-correct">Točno: {q.sol.cl}) {q.opts['ABCDE'.indexOf(q.sol.cl)]}</div>
                    )}
                    {ok !== true && q.type === 'mat' && q.sol?.pairs && (
                      <div className="fb-correct">Točni parovi: {q.sol.pairs.map(p => p.l + ' → ' + p.r).join(' · ')}</div>
                    )}
                    {ok !== true && q.type === 'fb' && q.sol?.ans && (
                      <div className="fb-correct">Točno: {Array.isArray(q.sol.ans) ? q.sol.ans.join(' / ') : q.sol.ans}</div>
                    )}
                    {ok !== true && q.exp && <div className="fb-exp">💡 {q.exp}</div>}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <button className="btn btn-ghost" style={{ flex: 1 }} onClick={onBack}>← Natrag</button>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => onDone({
              examKey: 'daily_' + Math.floor(Date.now() / 86400000),
              examLabel: 'Dnevni izazov ' + today,
              mode: 'dnevni', qs, answers,
              cor: correct, total: qs.length, pct, grade: g,
            })}>Spremi + Natrag</button>
          </div>
        </div>
      </div>
    )
  }

  if (alreadyDone) return (
    <div className="eng-sim">
      <div className="sim-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Danas si već završio/la!</div>
        <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>Dnevni izazov se mijenja svaki dan u ponoć.</div>
        <button className="btn btn-ghost" onClick={onBack}>← Natrag</button>
      </div>
    </div>
  )

  const q = qs[idx]
  const qId = q.id !== undefined ? q.id : q.dailyId
  const ans = answers[qId]
  const answered = q.type === 'mat'
    ? (ans && typeof ans === 'object' && Object.values(ans).some(v => v))
    : (ans !== undefined && ans !== null && ans !== '')
  const answeredCount = qs.filter(q => {
    const id = q.id !== undefined ? q.id : q.dailyId
    const a = answers[id]
    return q.type === 'mat'
      ? (a && typeof a === 'object' && Object.values(a).some(v => v))
      : (a !== undefined && a !== null && a !== '')
  }).length
  const pctDone = Math.round(answeredCount / qs.length * 100)

  function handleSelect(val) {
    setAnswers(prev => ({ ...prev, [qId]: val }))
    setShowFb(false)
  }
  function goNext() { setShowFb(false); if (idx < qs.length - 1) setIdx(idx + 1); else setSubmitted(true) }
  function goPrev() { setShowFb(false); if (idx > 0) setIdx(idx - 1) }

  return (
    <div className="eng-sim">
      <div className="sim-card">
        <div className="exam-header">
          <button className="btn btn-ghost exam-header-back" onClick={onBack}>← Natrag</button>
          <div className="exam-header-info">
            <div className="exam-title">🎯 Dnevni izazov</div>
            <div className="exam-meta">{today} · {qs.length} pitanja</div>
          </div>
        </div>

        <div className="sim-progress">
          <div className="sim-progress-bar" style={{ width: pctDone + '%' }} />
        </div>
        <div className="sim-progress-label">{idx + 1} / {qs.length}</div>

        <div className="q-title">{q.q}</div>
        {q.context && <div className="q-context">{q.context}</div>}

        {q.type === 'mc' && <MCQ q={q} a={ans} setA={handleSelect} rev={false} />}
        {q.type === 'mat' && (
          <MatQ
            q={q}
            a={ans || {}}
            setA={val => { setAnswers(prev => ({ ...prev, [qId]: val })); setShowFb(false) }}
            rev={false}
          />
        )}
        {q.type === 'fb' && <FbQ q={q} a={ans} setA={handleSelect} rev={false} />}

        {showFb && answered && <FeedbackBox q={q} a={ans} rev={true} />}

        <div className="exam-nav">
          <button className="btn btn-ghost" disabled={idx === 0} onClick={goPrev}>← Prethodno</button>
          {!showFb && answered && <button className="btn" onClick={() => setShowFb(true)}>Provjeri</button>}
          <button className="btn btn-primary" disabled={!answered} onClick={goNext}>
            {idx === qs.length - 1 ? 'Završi' : 'Dalje →'}
          </button>
        </div>
      </div>
    </div>
  )
}
