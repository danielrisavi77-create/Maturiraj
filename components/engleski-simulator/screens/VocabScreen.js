'use client'
import { useState, useMemo, useEffect } from 'react'
import { EXAMS } from '@/lib/engleski-simulator/exams'
import { chk } from '@/lib/engleski-simulator/scoring'

// Pick fill-in-blank vocab questions from exams
function getVocabQuestions(limit = 30) {
  const allKeys = Object.keys(EXAMS || {})
  const pool = allKeys.flatMap(k =>
    (EXAMS[k].qs || []).filter(q =>
      (q.type === 'fb' || q.type === 'sa') && q.q && q.q.length < 200
    ).map(q => ({ ...q, examKey: k }))
  )
  // Shuffle deterministically
  return [...pool].sort(() => Math.random() - 0.5).slice(0, limit)
}

export default function VocabScreen({ userData, onBack }) {
  const qs = useMemo(() => getVocabQuestions(30), [])
  const [mode, setMode] = useState('menu') // menu | quiz | results
  const [idx, setIdx] = useState(0)
  const [input, setInput] = useState('')
  const [answers, setAnswers] = useState({})
  const [showFb, setShowFb] = useState(false)
  const [startTime] = useState(Date.now())

  if (!qs.length) return (
    <div className="eng-sim">
      <div className="sim-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontSize: 44, marginBottom: 16 }}>📚</div>
        <div style={{ fontFamily: 'var(--fh)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Nema pitanja</div>
        <div style={{ color: 'var(--muted)', marginBottom: 24 }}>Nema dostupnih vocabulary pitanja.</div>
        <button className="btn btn-ghost" onClick={onBack}>← Natrag</button>
      </div>
    </div>
  )

  if (mode === 'menu') return (
    <div className="eng-sim">
      <div className="sim-card">
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={onBack}>← Natrag</button>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📚</div>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Vocabulary vježba</div>
          <div style={{ color: 'var(--muted)', fontSize: 14 }}>Dopuni rečenice odgovarajućim riječima / izrazima</div>
        </div>
        <div className="vocab-stats-row">
          {[
            { label: 'Pitanja', val: qs.length },
            { label: 'Dosad riješeno', val: (userData?.history?.filter(h => h.examKey?.startsWith('vocab')).length || 0) + '×' },
            { label: 'Procj. trajanje', val: Math.ceil(qs.length * 25 / 60) + ' min' },
          ].map(s => (
            <div key={s.label} className="vocab-stat-box">
              <div className="vocab-stat-val">{s.val}</div>
              <div className="vocab-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--s2)', borderRadius: 'var(--r)', padding: '14px 16px', marginBottom: 20, fontSize: 13 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>📋 Upute:</div>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)', lineHeight: 1.8 }}>
            <li>Pročitaj rečenicu i upiši nedostajuću riječ</li>
            <li>Provjeri odgovor i nastavi dalje</li>
            <li>Klikni "Pokaži savjet" za pomoć</li>
          </ul>
        </div>
        <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }} onClick={() => setMode('quiz')}>
          🚀 Kreni
        </button>
      </div>
    </div>
  )

  if (mode === 'results') {
    const correct = qs.filter(q => {
      const a = answers[q.id]
      return a && chk(q, a) === true
    }).length
    const pct = Math.round(correct / qs.length * 100)
    const elapsed = Math.round((Date.now() - startTime) / 1000)
    const mins = Math.floor(elapsed / 60), secs = elapsed % 60
    const gc = pct >= 70 ? 'var(--green)' : pct >= 50 ? 'var(--gold)' : 'var(--red)'
    return (
      <div className="eng-sim">
        <div className="sim-card">
          <div style={{ textAlign: 'center', padding: '24px 0 20px' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>📚</div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Vocabulary završeno!</div>
            <div className="results-big-pct" style={{ color: gc }}>{pct}%</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, margin: '16px 0' }}>
              {[
                { val: correct, lbl: 'Točnih', col: 'var(--green)' },
                { val: qs.length - correct, lbl: 'Grešaka', col: 'var(--red)' },
                { val: mins + ':' + String(secs).padStart(2, '0'), lbl: 'Trajanje', col: 'var(--teal)' },
              ].map(s => (
                <div key={s.lbl} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, color: s.col }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-ghost" style={{ flex: 1 }} onClick={onBack}>← Natrag</button>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => { setMode('menu'); setIdx(0); setAnswers({}); setShowFb(false) }}>
              🔁 Ponovi
            </button>
          </div>
        </div>
      </div>
    )
  }

  // quiz mode
  const q = qs[idx]
  const qId = q.id
  const ans = answers[qId] || ''
  const pctDone = Math.round((idx / qs.length) * 100)

  function submit() {
    if (!input.trim()) return
    setAnswers(prev => ({ ...prev, [qId]: input.trim() }))
    setShowFb(true)
  }
  function goNext() {
    setShowFb(false)
    setInput('')
    if (idx < qs.length - 1) setIdx(idx + 1)
    else setMode('results')
  }

  const isCorrect = chk(q, ans) === true
  const hasAnswer = ans.trim().length > 0

  return (
    <div className="eng-sim">
      <div className="sim-card">
        <div className="exam-header">
          <button className="btn btn-ghost exam-header-back" onClick={onBack}>← Natrag</button>
          <div className="exam-header-info">
            <div className="exam-title">📚 Vocabulary</div>
            <div className="exam-meta">{idx + 1} / {qs.length}</div>
          </div>
        </div>
        <div className="sim-progress">
          <div className="sim-progress-bar" style={{ width: pctDone + '%' }} />
        </div>

        <div className="vocab-card">
          <div className="q-title">{q.q}</div>
          {q.context && <div className="q-context" style={{ marginBottom: 12 }}>{q.context}</div>}

          {!showFb ? (
            <div style={{ marginTop: 16 }}>
              <input
                type="text"
                className="vocab-input"
                placeholder="Upiši odgovor..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && input.trim() && submit()}
                autoFocus
              />
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 10 }}
                disabled={!input.trim()} onClick={submit}>
                Provjeri
              </button>
            </div>
          ) : (
            <div>
              <div className={'fb-box ' + (isCorrect ? 'correct' : 'wrong')} style={{ marginTop: 12 }}>
                {isCorrect
                  ? '✓ Točno! Odgovor: ' + ans
                  : <>✗ Netočno. Tvoj odgovor: <strong>{ans}</strong>. Točno: <strong>{q.sol?.ans || q.sol?.cl || '—'}</strong></>}
                {q.exp && <div style={{ marginTop: 6, fontSize: 12, opacity: 0.9 }}>💡 {q.exp}</div>}
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 8 }} onClick={goNext}>
                {idx === qs.length - 1 ? 'Završi →' : 'Dalje →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
