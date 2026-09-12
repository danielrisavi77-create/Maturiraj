'use client'

import React, { useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { SimulatorPreviewGate, LockedAnalysisSection, buildUserAccess } from '@/components/discere/paywall'
import { FREE_LIMIT } from '@/components/discere/paywall/paywallHelpers'
import { EXAMS } from '@/lib/engleski-simulator/exams'
import { chk, grade, calcXpGain, updateStreak, validateUserData, validateBookmarks } from '@/lib/engleski-simulator/scoring'
import { MCQ, InsQ, MatQ, FbQ, SaQ, FeedbackBox, AnswerHelper, ContextPanel, AudioPlayer, ModeSelect as EngModeSelect } from './components/SimSharedUI'
import { useTimer, warnMessage } from '@/lib/engleski-simulator/useTimer'
import { LL, TLBL, TBDG, TOPIC_LABELS, LEVEL_NAMES, getLevel, xpProgress, xpToNext } from '@/lib/engleski-simulator/constants'

// GC ostaje lokalno definiran (ne iz constants.js) jer se boje ocjena 2-4 razlikuju
// od dijeljene konstante i ne smiju se tiho promijeniti izvan zadatka 2.3
const GC = { 1: 'var(--red)', 2: 'var(--gold)', 3: 'var(--blue)', 4: 'var(--teal)', 5: 'var(--green)' }
import { deriveRazina } from '@/lib/engleski-simulator/sessionRazina'
import {
  ENG_USER_KEY, ENG_BOOKMARKS_KEY, ENG_SYNCED_AT_KEY,
  buildCloudBlob, parseCloudBlob, shouldHydrateFromCloud, shouldCloudSave, mergeUserData, toSimProgressPayload,
  loadEngCloudState, saveEngCloudState, saveEngSimResult,
} from '@/lib/engleski-simulator/cloudSync'

// Lazy load screens to reduce initial bundle and memory
const Home = lazy(() => import('./screens/HomeScreen').then(m => ({ default: m.Home })))
const Results = lazy(() => import('./screens/ResultsScreen').then(m => ({ default: m.Results })))
const ErrorsScreen = lazy(() => import('./screens/ErrorAndBookmarkScreens').then(m => ({ default: m.ErrorsScreen })))
const BookmarksScreen = lazy(() => import('./screens/ErrorAndBookmarkScreens').then(m => ({ default: m.BookmarksScreen })))
const StatsScreen = lazy(() => import('./screens/StatsAndBrowseScreens').then(m => ({ default: m.StatsScreen })))
const BrowseScreen = lazy(() => import('./screens/StatsAndBrowseScreens').then(m => ({ default: m.BrowseScreen })))
const AnalyticsPanelFull = lazy(() => import('./screens/AnalyticsPanelFull').then(m => ({ default: m.AnalyticsPanelFull })))
const DailyChallengeScreen = lazy(() => import('./screens/DailyChallengeScreen'))
const VocabScreen = lazy(() => import('./screens/VocabScreen'))
const CompareScreen = lazy(() => import('./screens/CompareScreen'))
const PDFReportScreen = lazy(() => import('./screens/PDFReportScreen'))
const GuideScreen = lazy(() => import('./screens/GuideScreen'))
const TopicFilterScreen = lazy(() => import('./screens/TopicFilterScreen'))

// Loading fallback component
function ScreenLoader() {
  return <div style={{ padding: '20px', textAlign: 'center', color: 'var(--muted)' }}>Učitavamo...</div>
}

// Wrapper so AnalyticsPanelFull can be passed as a prop to e()-based screens
function AnalyticsPanelWrapper(props) {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <AnalyticsPanelFull {...props} />
    </Suspense>
  )
}

function fisherYates(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── XpFloater animation component ──
function XpFloater({ amount, x, y }) {
  return (
    <div style={{
      position: 'fixed', left: x, top: y, pointerEvents: 'none', zIndex: 9999,
      fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 22, color: 'var(--gold)',
      textShadow: '0 2px 12px rgba(0,0,0,.5)',
      animation: 'xpFloatUp 1.8s ease-out forwards',
    }} aria-hidden="true">+{amount} XP</div>
  )
}

// ── Sound system ──
let _sharedAudioCtx = null
function _getAudioCtx() {
  if (!_sharedAudioCtx || _sharedAudioCtx.state === 'closed') {
    _sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  if (_sharedAudioCtx.state === 'suspended') _sharedAudioCtx.resume().catch(() => {})
  return _sharedAudioCtx
}
function playSound(type) {
  try {
    const ctx = _getAudioCtx()
    const gain = ctx.createGain()
    gain.connect(ctx.destination)
    if (type === 'correct') {
      const osc = ctx.createOscillator()
      osc.connect(gain)
      osc.frequency.setValueAtTime(880, ctx.currentTime)
      osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.2, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.4)
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator()
      osc.type = 'sawtooth'
      osc.connect(gain)
      osc.frequency.setValueAtTime(330, ctx.currentTime)
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.15)
      gain.gain.setValueAtTime(0.15, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.5)
    } else if (type === 'done') {
      [523, 659, 784].forEach((freq, i) => {
        const osc = ctx.createOscillator()
        osc.connect(gain)
        osc.frequency.value = freq
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.5)
        osc.start(ctx.currentTime + i * 0.12)
        osc.stop(ctx.currentTime + i * 0.12 + 0.5)
      })
    }
  } catch {}
}

// ── generateVirtualExam ──
function generateVirtualExam() {
  const targets = { mc: 16, mat: 6, fb: 10, sa: 1 }
  const allKeys = Object.keys(EXAMS)
  const usedIds = new Set()
  function pickType(type, count) {
    const pool = allKeys.flatMap(k => (EXAMS[k].qs || []).filter(q => q.type === type && !usedIds.has(q.id)).map(q => ({ ...q, _examKey: k })))
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, count)
    picked.forEach(q => usedIds.add(q.id))
    return picked
  }
  const qs = Object.entries(targets).flatMap(([type, n]) => pickType(type, n))
    .sort(() => Math.random() - 0.5)
    // Virtualni ispit pooluje pitanja iz VIŠE ispita → izvorni q.id-ovi se mogu
    // ponavljati (npr. dva različita 'mc1'). Dodijeli jedinstven id po poziciji
    // da answers/qTimes/rev/bookmark ne kolidiraju između pitanja.
    .map((q, i) => ({ ...q, id: 'v' + i + '_' + (q.id ?? 'q') }))
  const key = 'virtual_' + Date.now()
  return { key, year: new Date().getFullYear(), season: 'virtualni', label: 'Virtualni ispit', razina: deriveRazina(qs, EXAMS), qs }
}

function AnalyticsPanel({ userData, defaultTab, onFilter, onFilterSession }) {
  const [tab, setTab] = useState('nedavno')
  const history = userData?.history || []

  if (!history.length) return (
    <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--muted)', fontSize: 13 }}>
      Riješi prvi ispit da bi vidio/la statistike! 💪
    </div>
  )

  const avg = Math.round(history.reduce((s, h) => s + h.pct, 0) / history.length)
  const best = Math.max(...history.map(h => h.pct))
  const last5 = history.slice(-5)
  const last5avg = last5.length ? Math.round(last5.reduce((a, b) => a + b.pct, 0) / last5.length) : 0
  const trend = history.length >= 6 ? (last5avg > avg + 3 ? '↑ Rast' : last5avg < avg - 3 ? '↓ Pad' : '→ Stabilno') : '→ Premalo podataka'
  const trendColor = trend.startsWith('↑') ? 'var(--green)' : trend.startsWith('↓') ? 'var(--red)' : 'var(--muted)'
  const recent = [...history].reverse().slice(0, 15)

  const pctColor = p => p >= 85 ? 'var(--green)' : p >= 70 ? 'var(--teal)' : p >= 55 ? 'var(--gold)' : p >= 40 ? '#f97316' : 'var(--red)'

  return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {[{ k: 'nedavno', l: '📋 Nedavni' }, { k: 'napredak', l: '📈 Napredak' }].map(t => (
          <button key={t.k} className={'filter-chip' + (tab === t.k ? ' active' : '')} onClick={() => setTab(t.k)}>{t.l}</button>
        ))}
      </div>

      {tab === 'nedavno' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 18 }}>
            <div className="stat"><div className="statn">{history.length}</div><div className="statl">Ispita</div></div>
            <div className="stat"><div className="statn" style={{ color: pctColor(avg) }}>{avg}%</div><div className="statl">Prosjek</div></div>
            <div className="stat"><div className="statn" style={{ color: 'var(--green)' }}>{best}%</div><div className="statl">Rekord</div></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {recent.map((h, i) => {
              const col = pctColor(h.pct)
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 20, color: col, minWidth: 40, fontWeight: 700 }}>{h.grade}/5</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.examLabel || h.examKey}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{h.date} · {h.cor}/{h.total} točnih · {h.mode || 'vježbanje'}</div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: col, flexShrink: 0 }}>{h.pct}%</div>
                </div>
              )
            })}
          </div>
          {history.length > 15 && (
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 10 }}>Prikazano zadnjih 15 od {history.length} ispita.</div>
          )}
        </div>
      )}

      {tab === 'napredak' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 18 }}>
            <div className="stat"><div className="statn" style={{ color: pctColor(last5avg) }}>{last5avg}%</div><div className="statl">Zadnjih 5</div></div>
            <div className="stat"><div className="statn" style={{ color: 'var(--green)' }}>{best}%</div><div className="statl">Rekord</div></div>
            <div className="stat"><div className="statn" style={{ color: trendColor, fontSize: 12 }}>{trend}</div><div className="statl">Trend</div></div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>Svi ispiti — kronološki (najstariji → najnoviji):</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {history.map((h, i) => {
              const col = pctColor(h.pct)
              return (
                <div key={i} title={`${h.examLabel || h.examKey}: ${h.pct}% — ${h.date}`}
                  style={{ textAlign: 'center', background: col + '18', border: '1px solid ' + col + '44', borderRadius: 8, padding: '7px 9px', minWidth: 50 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: col }}>{h.pct}%</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>{h.grade}/5</div>
                </div>
              )
            })}
          </div>
          {onFilter && (
            <button className="btn btn-g" style={{ marginTop: 16, fontSize: 13 }} onClick={onFilter}>🎯 Vježbaj po temi</button>
          )}
          {onFilterSession && (
            <button className="btn btn-g" style={{ marginTop: 8, fontSize: 13 }} onClick={onFilterSession}>⚡ Vježbaj greške</button>
          )}
        </div>
      )}
    </div>
  )
}

function ExamPlayScreen({ exam, examMode, timedMode, examContext, onExit, onDone, userAccess, isPro, examLookup, soundOn, onBookmarkChange }) {
  const qs = exam?.qs || []
  const [cur, setCur] = useState(0)
  const [answers, setAnswers] = useState({})
  const [rev, setRev] = useState({})
  const [qTimes, setQTimes] = useState({})
  const [bookmarks, setBookmarks] = useState(() => {
    try { return validateBookmarks(JSON.parse(localStorage.getItem('disc_eng_bookmarks') || '{}')) } catch { return {} }
  })
  const [toast, setToast] = useState(null)
  const startedAtRef = useRef(Date.now())

  const { d: timerDisplay, cls: timerClass } = useTimer(
    90 * 60,
    !!(examMode || timedMode),
    // finish() closes over the current render's `answers` state — safe because React
    // re-registers the interval callback every render, so this always invokes the latest finish().
    () => { if (examMode) finish() },
    [600, 300],
    seconds => {
      const msg = warnMessage(seconds)
      if (!msg) return
      setToast(msg)
      if (soundOn) playSound('wrong')
      setTimeout(() => setToast(t => (t === msg ? null : t)), 4000)
    },
  )

  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [cur])

  if (!exam || !qs.length) {
    return (
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '30px 20px' }}>
        <button className="btn btn-g" onClick={onExit}>← Natrag</button>
        <div style={{ marginTop: 14, color: 'var(--muted)' }}>Ispit nije dostupan.</div>
      </div>
    )
  }

  const q = qs[cur]
  const bkKey = `${exam.key}_${q.id}`
  const isBookmarked = !!bookmarks[bkKey]

  function setAnswer(next) {
    setAnswers(prev => ({ ...prev, [q.id]: next }))
  }

  function goTo(i) {
    const elapsed = Math.max(0, Math.round((Date.now() - startedAtRef.current) / 1000))
    setQTimes(prev => ({ ...prev, [q.id]: (prev[q.id] || 0) + elapsed }))
    setCur(Math.max(0, Math.min(qs.length - 1, i)))
  }

  function checkAnswer() {
    setRev(prev => ({ ...prev, [q.id]: true }))
  }

  function toggleBookmark() {
    setBookmarks(prev => {
      const next = { ...prev }
      if (next[bkKey]) {
        delete next[bkKey]
      } else {
        next[bkKey] = {
          qid: q.id,
          examKey: exam.key,
          examLabel: `${exam.year}. — ${exam.label}`,
          q: q.q.slice(0, 200),
        }
      }
      try { localStorage.setItem('disc_eng_bookmarks', JSON.stringify(next)) } catch {}
      return next
    })
    // Signal roditelju da pokrene cloud debounce (bookmarki nisu dio userData).
    if (onBookmarkChange) onBookmarkChange()
  }

  function finish() {
    const autoQ = qs.filter(x => x.type !== 'sa' && x.type !== 'es')
    const cor = autoQ.filter(x => chk(x, answers[x.id]) === true).length
    const pct = autoQ.length ? Math.round((cor / autoQ.length) * 100) : 0
    const g = grade(pct)
    onDone({
      examKey: exam.key,
      examLabel: `${exam.year}. — ${exam.label}`,
      pct,
      grade: g,
      cor,
      total: autoQ.length,
      answers,
      qTimes,
      examMode,
    })
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '16px 20px 70px' }}>
      {toast && (
        <div role="status" aria-live="polite" style={{
          position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999,
          background: 'var(--gold-d)', border: '1px solid var(--gold-b)', color: 'var(--gold)',
          borderRadius: 'var(--r)', padding: '8px 16px', fontSize: 13, fontWeight: 600,
          boxShadow: '0 4px 16px rgba(0,0,0,.2)',
        }}>⏱ {toast}</div>
      )}
      <div className="nav">
        <button className="btn btn-g" style={{ fontSize: 13, padding: '6px 12px' }} onClick={() => {
          if (examMode && !window.confirm('Izaći bez predaje? Napredak neće biti spremljen.')) return
          onExit()
        }}>← Natrag</button>
        <span className="ntitle">{examMode ? 'Simulacija' : timedMode ? 'Vježbanje ⏱' : 'Vježbanje'}</span>
        {(examMode || timedMode) && (
          <span className={`timer${timerClass ? ' ' + timerClass : ''}`}>{timerDisplay}</span>
        )}
        <span className="nsp" />
        <span className="nbadge">{cur + 1}/{qs.length}</span>
        <button
          className="btn btn-g"
          style={{ fontSize: 15, padding: '4px 9px', color: isBookmarked ? 'var(--gold)' : undefined, borderColor: isBookmarked ? 'var(--gold-b)' : undefined }}
          onClick={toggleBookmark}
          title={isBookmarked ? 'Ukloni bookmark' : 'Dodaj bookmark'}
        >🔖</button>
      </div>
      <SimulatorPreviewGate
        userAccess={userAccess}
        currentQuestionIndex={cur}
        totalQuestions={qs.length}
        from="eng-simulator"
        previewScore={(() => {
          const pqs = qs.filter(x => x.type !== 'sa' && x.type !== 'es').slice(0, FREE_LIMIT)
          return { correct: pqs.filter(x => chk(x, answers[x.id]) === true).length, total: pqs.length }
        })()}
      >
        {({ isLocked, openPaywall }) => (
          <div className="card" style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
              <span className="topic-tag">{TOPIC_LABELS[q.topic] || q.topic || 'Tema'}</span>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>{TLBL[q.type] || q.type}</span>
            </div>
            {isLocked ? (
              /* Zaključano: NE renderiraj stvarni sadržaj pitanja (tekst/opcije/audio/context).
                 Prije su bili u DOM-u iza samo kozmetičkog blura → čitljivi preko devtoolsa
                 (zaobilaženje paywalla). Skeleton teaser; BlurLockOverlay ide preko njega. */
              <div aria-hidden="true" style={{ padding: '4px 0 8px' }}>
                {[92, 76, 84, 58].map((w, i) => (
                  <div key={i} style={{ height: 14, width: `${w}%`, borderRadius: 6, background: 'var(--s2)', margin: '12px 0' }} />
                ))}
              </div>
            ) : (
              <>
                <AudioPlayer key={exam.key + '_' + q.topic} examKey={exam.key} topic={q.topic} razina={exam.razina === 'mixed' ? examLookup?.[q._examKey]?.razina : exam.razina} />
                <ContextPanel examKey={exam.key} qid={q.id} examContext={examContext} />
                <div style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 16, whiteSpace: 'pre-wrap' }}>{q.q}</div>

                {q.type === 'mc' && <MCQ q={q} a={answers[q.id]} setA={setAnswer} rev={!!rev[q.id]} />}
                {q.type === 'ins' && <InsQ q={q} a={answers[q.id]} setA={setAnswer} rev={!!rev[q.id]} />}
                {q.type === 'mat' && <MatQ q={q} a={answers[q.id]} setA={setAnswer} rev={!!rev[q.id]} />}
                {q.type === 'fb' && <FbQ q={q} a={answers[q.id]} setA={setAnswer} rev={!!rev[q.id]} />}
                {(q.type === 'sa' || q.type === 'es') && <SaQ q={q} a={answers[q.id]} setA={setAnswer} rev={!!rev[q.id]} />}

                {!!rev[q.id] && <FeedbackBox q={q} a={answers[q.id]} rev={true} />}
                {!examMode && <AnswerHelper key={q.id} q={q} show={!!rev[q.id]} autoExpand={false} onToggle={checkAnswer} />}
              </>
            )}

            <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              {!examMode && !rev[q.id] && <button className="btn btn-g" onClick={isLocked ? openPaywall : checkAnswer}>Provjeri</button>}
              <button className="btn btn-g" disabled={cur === 0} onClick={() => goTo(cur - 1)}>← Prethodno</button>
              <button className="btn btn-g" disabled={cur === qs.length - 1} onClick={() => goTo(cur + 1)}>Sljedeće →</button>
              <button className="btn btn-gold" style={{ marginLeft: 'auto' }} onClick={() => {
                if (isLocked) { openPaywall(); return }
                if (examMode && !window.confirm('Jesi li siguran/na da želiš predati ispit?')) return
                finish()
              }}>{examMode ? 'Predaj ispit' : 'Vidi rezultate'}</button>
            </div>
          </div>
        )}
      </SimulatorPreviewGate>

      {/* Question navigation grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: '14px 2px 0' }}>
        {qs.map((item, i) => {
          const a = answers[item.id]
          const hasA = item.type === 'mat'
            ? (a && typeof a === 'object' && Object.values(a).some(v => v))
            : (a !== undefined && a !== null && a !== '')
          const reviewed = !!rev[item.id]
          const isCur = i === cur
          const isCorrect = reviewed ? chk(item, a) === true : null
          const isWrong = reviewed ? chk(item, a) === false : null
          const btnColor = isCur
            ? 'var(--blue)'
            : reviewed
              ? (isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--muted)')
              : (hasA ? 'var(--muted)' : null)
          return (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              style={{
                minWidth: 44, minHeight: 44, borderRadius: 6,
                fontSize: 11, fontWeight: isCur ? 800 : 600,
                cursor: 'pointer', border: '1px solid',
                borderColor: isCur ? 'var(--blue)' : (btnColor || 'var(--bdr2)'),
                background: isCur ? 'var(--blue-d)' : (btnColor ? btnColor + '1a' : 'var(--s2)'),
                color: btnColor || 'var(--muted)',
                transition: 'all .15s',
              }}
            >{i + 1}</button>
          )
        })}
      </div>
    </div>
  )
}

export default function EngleskiSimulator() {
  const { user, isPro, isPaid } = useAuth()
  const userAccess = useMemo(() => buildUserAccess({ user, isPro, isPaid }), [user, isPro, isPaid])

  const [screen, setScreen] = useState('home')
  const [screenHistory, setScreenHistory] = useState(['home'])
  const [selectedExamKey, setSelectedExamKey] = useState(null)
  const [examMode, setExamMode] = useState(false)
  const [timedMode, setTimedMode] = useState(false)
  const [examAnswers, setExamAnswers] = useState({})
  const [userData, setUserData] = useState(() => {
    try {
      const stored = localStorage.getItem('engleski_simulator_user')
      const parsed = stored ? JSON.parse(stored) : null
      return validateUserData(parsed)
    } catch (err) {
      console.error('Error loading user data:', err)
      return { xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] }
    }
  })
  const [qTimes, setQTimes] = useState({})
  const [examContext, setExamContext] = useState(null)
  const [xpFloaters, setXpFloaters] = useState([])
  const [xpLiveMsg, setXpLiveMsg] = useState('')
  const [darkMode, setDarkMode] = useState(() => { try { return localStorage.getItem('eng_dark') === '1' } catch { return false } })
  const [soundOn, setSoundOn] = useState(() => { try { return localStorage.getItem('eng_sound') !== '0' } catch { return true } })
  const [filteredExam, setFilteredExam] = useState(null)
  const [extraExams, setExtraExams] = useState({})
  const [showGuide, setShowGuide] = useState(false)
  // Brojač promjena bookmarka — samo okidač za cloud debounce (bookmarki žive u localStorageu).
  const [bookmarkRev, setBookmarkRev] = useState(0)

  const examLookup = useMemo(() => ({ ...EXAMS, ...extraExams }), [extraExams])
  const selectedExam = selectedExamKey ? examLookup[selectedExamKey] : null

  // Dark mode effect
  useEffect(() => {
    if (darkMode) document.body.classList.add('dark-mode')
    else document.body.classList.remove('dark-mode')
    try { localStorage.setItem('eng_dark', darkMode ? '1' : '0') } catch {}
  }, [darkMode])

  // Persist sound setting
  useEffect(() => {
    try { localStorage.setItem('eng_sound', soundOn ? '1' : '0') } catch {}
  }, [soundOn])

  useEffect(() => {
    fetch('/engleski-simulator/exam-context.json')
      .then(r => r.json())
      .then(data => setExamContext(data))
      .catch(() => setExamContext({}))
  }, [])

  useEffect(() => {
    if (userData) localStorage.setItem('engleski_simulator_user', JSON.stringify(userData))
  }, [userData])

  // ── Cross-device cloud sync (Supabase discere_sim_state, subject 'eng') ──
  // Na mountu s prijavljenim korisnikom: hidriraj ako je cloud noviji, a ako je
  // cloud prazan a lokalno ima povijest — migriraj lokalno stanje u cloud.
  // Neprijavljeni korisnik ne radi nijedan Supabase poziv.
  // _hydrated je ref jer se mora zatvoriti sinkrono (useAuth() prvo vrati null,
  // pa user tek naknadno postane pravi), a hydrateRev je samo okidač koji efekt
  // spremanja ponovno pokreće kad hidracija završi.
  const _hydrated = useRef(false)
  const [hydrateRev, setHydrateRev] = useState(0)
  const _saveTimer = useRef(null)

  useEffect(() => {
    let cancelled = false
    // Svaka promjena korisnika (npr. null → prijavljen) zatvara vrata spremanju
    // i otkazuje već zakazani upload dok se cloud stanje ne pročita i spoji.
    _hydrated.current = false
    clearTimeout(_saveTimer.current)
    if (!user) return
    ;(async () => {
      const blob = await loadEngCloudState()
      if (cancelled) return
      const { userData: cloudUser, bookmarks: cloudBm, savedAt: cloudAt } = parseCloudBlob(blob)
      let localAt = 0
      try { localAt = Number(localStorage.getItem(ENG_SYNCED_AT_KEY) || 0) } catch {}
      if (cloudUser && shouldHydrateFromCloud(cloudAt, localAt)) {
        let localBm = {}
        try { localBm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
        try { localStorage.setItem(ENG_BOOKMARKS_KEY, JSON.stringify({ ...localBm, ...cloudBm })) } catch {}
        try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(cloudAt)) } catch {}
        if (!cancelled) {
          setUserData(prev => mergeUserData(prev, cloudUser))
          setBookmarkRev(r => r + 1)
        }
      } else if (!cloudUser) {
        // Prva prijava: pošalji postojeće lokalno stanje u cloud.
        let localUser = null
        try { localUser = JSON.parse(localStorage.getItem(ENG_USER_KEY) || 'null') } catch {}
        if (localUser && Array.isArray(localUser.history) && localUser.history.length) {
          let localBm = {}
          try { localBm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
          const at = Date.now()
          try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(at)) } catch {}
          await saveEngCloudState(buildCloudBlob({ userData: localUser, bookmarks: localBm, savedAt: at }))
        }
      }
      if (!cancelled) {
        _hydrated.current = true
        setHydrateRev(r => r + 1)
      }
    })()
    return () => { cancelled = true }
  }, [user])

  // Debounce-spremanje cijelog stanja (userData + bookmarki) u cloud.
  useEffect(() => {
    void hydrateRev // ovisnost-okidač: efekt se ponovno vrti nakon hidracije
    if (!shouldCloudSave(user, _hydrated.current)) return
    clearTimeout(_saveTimer.current)
    _saveTimer.current = setTimeout(() => {
      let bm = {}
      try { bm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
      const at = Date.now()
      try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(at)) } catch {}
      saveEngCloudState(buildCloudBlob({ userData: userData || {}, bookmarks: bm, savedAt: at }))
    }, 1500)
    return () => clearTimeout(_saveTimer.current)
  }, [userData, bookmarkRev, user, hydrateRev])

  const navigate = (newScreen) => {
    setScreen(newScreen)
    setScreenHistory(prev => [...prev, newScreen])
  }

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1)
      setScreenHistory(newHistory)
      setScreen(newHistory[newHistory.length - 1])
    } else {
      setScreen('home')
      setScreenHistory(['home'])
    }
  }

  const updateUserData = updateFn => setUserData(prev => updateFn(prev || {}))

  const toggles = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginLeft: 'auto' }}>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setShowGuide(true)} title="Vodič za korištenje" aria-label="Vodič za korištenje">ℹ️</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => navigate('stats')} title="Statistike" aria-label="Statistike">📊</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setSoundOn(s => !s)} title={soundOn ? 'Isključi zvuk' : 'Uključi zvuk'} aria-label={soundOn ? 'Isključi zvuk' : 'Uključi zvuk'} aria-pressed={!soundOn}>{soundOn ? '🔊' : '🔇'}</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setDarkMode(d => !d)} title={darkMode ? 'Svjetli mod' : 'Tamni mod'} aria-label={darkMode ? 'Prebaci na svjetli mod' : 'Prebaci na tamni mod'} aria-pressed={darkMode}>{darkMode ? '☀️' : '🌙'}</button>
    </div>
  )

  function onModeSelect(examKey) {
    setSelectedExamKey(examKey)
    navigate('modeselect')
  }

  function onStartExam(mode) {
    setExamMode(mode === 'exam')
    setTimedMode(mode === 'timed')
    setExamAnswers({})
    setQTimes({})
    navigate('exam')
  }

  function showXpFloat(xpGain) {
    const id = Date.now()
    const x = Math.random() * (window.innerWidth * 0.5) + window.innerWidth * 0.25
    const y = Math.random() * 100 + 100
    setXpFloaters(prev => [...prev, { id, amount: xpGain, x, y }])
    setXpLiveMsg('+' + xpGain + ' XP')
    setTimeout(() => setXpFloaters(prev => prev.filter(f => f.id !== id)), 1800)
  }

  function onExamDone(result) {
    setExamAnswers(result.answers || {})
    setQTimes(result.qTimes || {})
    // Build topic_breakdown
    const topic_breakdown = {}
    const ex = result.qs ? { qs: result.qs } : examLookup[result.examKey]
    if (ex) {
      ex.qs.forEach(q => {
        if (q.type === 'sa' || q.type === 'es') return
        const topic = q.topic || 'ostalo'
        if (!topic_breakdown[topic]) topic_breakdown[topic] = { correct: 0, total: 0 }
        topic_breakdown[topic].total++
        if (chk(q, result.answers?.[q.id]) === true) topic_breakdown[topic].correct++
      })
    }
    const xpGain = calcXpGain(result.pct)
    showXpFloat(xpGain)
    if (soundOn) playSound('done')
    updateUserData(prev => {
      const base = updateStreak(prev)
      const next = {
        ...base,
        xp: (base.xp || 0) + xpGain,
        totalExams: (base.totalExams || 0) + 1,
        history: [
          ...(base.history || []),
          {
            examKey: result.examKey,
            examLabel: result.examLabel,
            date: new Date().toLocaleDateString('hr'),
            pct: result.pct,
            grade: result.grade,
            cor: result.cor,
            total: result.total,
            mode: result.examMode ? 'simulacija' : result.mode || 'vježbanje',
            qTimes: result.qTimes || {},
            answers: result.answers || {},
            topic_breakdown,
          },
        ],
      }

      const errTrack = { ...(next.errorTracker || {}) }
      const ex = examLookup[result.examKey]
      if (ex) {
        ex.qs.forEach(q => {
          if (q.type === 'sa' || q.type === 'es') return
          const ans = result.answers?.[q.id]
          const ok = chk(q, ans)
          const key = `${result.examKey}_${q.id}`
          if (ok === false) {
            const prevErr = errTrack[key] || { q: q.q, topic: q.topic || 'ostalo', examKey: result.examKey, qid: q.id, count: 0 }
            errTrack[key] = { ...prevErr, count: prevErr.count + 1, lastDate: new Date().toLocaleDateString('hr') }
          } else if (ok === true && errTrack[key]) {
            errTrack[key] = { ...errTrack[key], count: Math.max(0, (errTrack[key].count || 0) - 1) }
            if (errTrack[key].count === 0) delete errTrack[key]
          }
        })
      }
      next.errorTracker = errTrack
      return next
    })

    // Pravi ispit (ne virtualna sesija) → jedan red u sim_progress, subject 'eng'.
    if (user) {
      try {
        const payload = toSimProgressPayload(result, topic_breakdown, examLookup[result.examKey]?.razina)
        if (payload) saveEngSimResult(payload)
      } catch {}
    }

    navigate('results')
  }

  const renderScreen = () => {
    const screenContent = (() => {
      switch (screen) {
        case 'home':
          return (
            <Home 
              onModeSelect={onModeSelect}
              userData={userData}
              toggles={toggles}
              goErrors={() => navigate('errors')}
              goBookmarks={() => navigate('bookmarks')}
              goStats={() => navigate('stats')}
              goBrowse={() => navigate('browse')}
              goDailyChallenge={() => navigate('daily')}
              goVirtualExam={() => { const v = generateVirtualExam(); setExtraExams(prev => ({ ...prev, [v.key]: v })); setSelectedExamKey(v.key); navigate('virtual_exam') }}
              goFilter={() => navigate('filter')}
              goVocab={() => navigate('vocab')}
              goCompare={() => navigate('compare')}
              visaLoaded={true}
              examsMap={EXAMS}
              levelNames={LEVEL_NAMES}
              getLevel={getLevel}
              xpProgress={xpProgress}
              xpToNext={xpToNext}
            />
          )

        case 'modeselect':
          return (
            <EngModeSelect
              examKey={selectedExamKey}
              examsMap={EXAMS}
              onBack={goBack}
              onPractice={() => onStartExam('practice')}
              onPracticeTimer={() => onStartExam('timed')}
              onExamMode={() => onStartExam('exam')}
              toggles={toggles}
            />
          )

        case 'exam':
          return (
            <ExamPlayScreen
              exam={selectedExam}
              examMode={examMode}
              timedMode={timedMode}
              examContext={examContext}
              onExit={goBack}
              onDone={onExamDone}
              userAccess={userAccess}
              isPro={isPro}
              examLookup={examLookup}
              soundOn={soundOn}
              onBookmarkChange={() => setBookmarkRev(r => r + 1)}
            />
          )

        case 'results':
          if (!selectedExam) navigate('home')
          return (
            <>
            <Results
              exam={selectedExam}
              answers={examAnswers}
              qTimes={qTimes}
              userData={userData}
              onBack={goBack}
              onPracticeErrors={(wrongQs, srcExam) => {
                if (!wrongQs?.length) return
                const virtual = { key: 'exam_errors_session', year: srcExam.year, season: srcExam.season, label: `${srcExam.label} — Greške`, razina: srcExam.razina, qs: fisherYates([...wrongQs]) }
                setSelectedExamKey(virtual.key)
                setExtraExams(prev => ({ ...prev, [virtual.key]: virtual }))
                setExamMode(false)
                navigate('exam')
              }}
              onGoFilter={() => navigate('filter')}
              onGoStats={() => navigate('stats')}
              chk={chk}
              grade={grade}
              GC={GC}
              TLBL={TLBL}
              TOPIC_LABELS={TOPIC_LABELS}
              LL={LL}
              AnswerHelper={AnswerHelper}
              AnalyticsPanel={AnalyticsPanelWrapper}
              LEVEL_NAMES={LEVEL_NAMES}
              getLevel={getLevel}
            />
            <LockedAnalysisSection
              userAccess={userAccess}
              from="eng-results"
            />
            </>
          )
        
        case 'stats':
          return (
            <StatsScreen 
              userData={userData}
              onBack={goBack}
              onFilter={() => navigate('filter')}
              onFilterSession={() => navigate('errors')}
              onPDFReport={() => navigate('pdf_report')}
              LEVEL_NAMES={LEVEL_NAMES}
              getLevel={getLevel}
              xpProgress={xpProgress}
              xpToNext={xpToNext}
              AnalyticsPanel={AnalyticsPanelWrapper}
            />
          )
        
        case 'browse':
          return (
            <BrowseScreen 
              onBack={goBack}
              EXAMS={EXAMS}
              TLBL={TLBL}
              TBDG={TBDG}
              TOPIC_LABELS={TOPIC_LABELS}
            />
          )
        
        case 'errors':
          return (
            <ErrorsScreen 
              userData={userData}
              onStart={ve => {
                setExtraExams(prev => ({ ...prev, [ve.key]: ve }))
                setSelectedExamKey(ve.key)
                setExamMode(false)
                navigate('exam')
              }}
              onBack={goBack}
              examsMap={EXAMS}
              topicLabels={TOPIC_LABELS}
              fisherYates={fisherYates}
            />
          )
        
        case 'bookmarks':
          return (
            <BookmarksScreen 
              onBack={goBack}
              onStartSession={ve => {
                setExtraExams(prev => ({ ...prev, [ve.key]: ve }))
                setSelectedExamKey(ve.key)
                setExamMode(false)
                navigate('exam')
              }}
              examsMap={EXAMS}
              topicLabels={TOPIC_LABELS}
              fisherYates={fisherYates}
              validateBookmarks={validateBookmarks}
            />
          )
        
        case 'daily':
          return (
            <DailyChallengeScreen
              userData={userData}
              examsMap={examLookup}
              onBack={goBack}
              onDone={onExamDone}
            />
          )

        case 'virtual_exam': {
          const vExam = selectedExamKey ? examLookup[selectedExamKey] : null
          if (!vExam) return <div className="eng-sim"><div className="sim-card"><button className="btn btn-ghost" onClick={goBack}>← Natrag</button><p>Greška: nema ispita.</p></div></div>
          return (
            <ExamPlayScreen
              exam={vExam}
              examMode={false}
              timedMode={false}
              examContext={examContext}
              onExit={goBack}
              onDone={onExamDone}
              examLookup={examLookup}
              soundOn={soundOn}
              onBookmarkChange={() => setBookmarkRev(r => r + 1)}
            />
          )
        }

        case 'vocab':
          return <VocabScreen userData={userData} onBack={goBack} />

        case 'compare':
          return <CompareScreen userData={userData} onBack={goBack} />

        case 'pdf_report':
          return <PDFReportScreen userData={userData} onBack={goBack} />

        case 'guide':
          return <GuideScreen onBack={goBack} />

        case 'filter':
          return (
            <TopicFilterScreen
              userData={userData}
              onBack={goBack}
              onStartExam={({ qs, label, isFiltered }) => {
                const key = 'filter_session_' + Date.now()
                const fExam = { key, year: new Date().getFullYear(), season: 'filter', label, razina: deriveRazina(qs, EXAMS), qs }
                setExtraExams(prev => ({ ...prev, [key]: fExam }))
                setSelectedExamKey(key)
                setExamMode(false)
                navigate('exam')
              }}
            />
          )

        case 'analytics':
          return (
            <div className="eng-sim"><div className="sim-card">
              <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={goBack}>← Natrag</button>
              <AnalyticsPanelFull userData={userData} onFilter={() => navigate('filter')} />
            </div></div>
          )

        default:
          return (
            <Home 
              onModeSelect={onModeSelect}
              userData={userData}
              toggles={toggles}
              goErrors={() => navigate('errors')}
              goBookmarks={() => navigate('bookmarks')}
              goStats={() => navigate('stats')}
              goBrowse={() => navigate('browse')}
              goDailyChallenge={() => navigate('daily')}
              goVirtualExam={() => { const v = generateVirtualExam(); setExtraExams(prev => ({ ...prev, [v.key]: v })); setSelectedExamKey(v.key); navigate('virtual_exam') }}
              goFilter={() => navigate('filter')}
              goVocab={() => navigate('vocab')}
              goCompare={() => navigate('compare')}
              visaLoaded={true}
              examsMap={EXAMS}
              levelNames={LEVEL_NAMES}
              getLevel={getLevel}
              xpProgress={xpProgress}
              xpToNext={xpToNext}
            />
          )
      }
    })()

    return (
      <Suspense fallback={<ScreenLoader />}>
        {screenContent}
      </Suspense>
    )
  }

  return (
    <div className="eng-sim">
      {renderScreen()}
      {xpFloaters.map(f => <XpFloater key={f.id} amount={f.amount} x={f.x} y={f.y} />)}
      <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{xpLiveMsg}</div>
      {showGuide && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,.6)', overflowY: 'auto', padding: '20px 12px 40px' }}
          onClick={e => { if (e.target === e.currentTarget) setShowGuide(false) }}
        >
          <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }}>
            <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>Učitavam…</div>}>
              <GuideScreen onBack={() => setShowGuide(false)} />
            </Suspense>
          </div>
        </div>
      )}
      <style>{`
        @keyframes xpFloatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          60% { opacity: 1; transform: translateY(-60px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-120px) scale(0.8); }
        }
      `}</style>
    </div>
  )
}
