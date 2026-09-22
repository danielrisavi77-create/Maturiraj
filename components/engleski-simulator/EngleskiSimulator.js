'use client'

import React, { useEffect, useState, useMemo, lazy, Suspense } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { SimulatorPreviewGate, LockedAnalysisSection, LockedResultsBlock, buildUserAccess } from '@/components/discere/paywall'
import { FREE_LIMIT, canSeeDiscereAnalysis } from '@/components/discere/paywall/paywallHelpers'
import { getExamsIndex, getLoadedSync, isRazinaLoaded, loadRazina, razinaForKey, RAZINE } from '@/lib/engleski-simulator/examsLoader'
import { chk, grade, calcXpGain, updateStreak, validateUserData, validateBookmarks } from '@/lib/engleski-simulator/scoring'
import { MCQ, InsQ, MatQ, FbQ, SaQ, FeedbackBox, AnswerHelper, ContextPanel, AudioPlayer, ModeSelect as EngModeSelect } from './components/SimSharedUI'
import { useTimer, warnMessage } from '@/lib/engleski-simulator/useTimer'
import { getExamBlocks, totalMinutes, sectionScores, weightedEstimate } from '@/lib/engleski-simulator/examStructure'
import { LL, TLBL, TBDG, TOPIC_LABELS, GC, LEVEL_NAMES, getLevel, xpProgress, xpToNext } from '@/lib/engleski-simulator/constants'
import { deriveRazina } from '@/lib/engleski-simulator/sessionRazina'
import { ENG_USER_KEY, ENG_BOOKMARKS_DELETED_KEY, toSimProgressPayload, saveEngSimResult } from '@/lib/engleski-simulator/cloudSync'
import { useEngCloudSync } from '@/lib/engleski-simulator/useEngCloudSync'

// Lagani indeks ispita (bez pitanja) — jedini podaci o ispitima u početnom bundleu.
const EXAMS_INDEX = getExamsIndex()

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

// Ekrani koji analiziraju cijelu povijest ili sva pitanja trebaju OBJE razine —
// bez njih bi analitika, filter i PDF tiho radili samo s učitanom razinom.
const FULL_EXAMS_SCREENS = ['stats', 'browse', 'errors', 'bookmarks', 'daily', 'filter', 'vocab', 'compare', 'pdf_report', 'analytics']

// Ekrani koji pokazuju točne odgovore, obrazloženja ili analizu cijele banke —
// po politici su to Standard sadržaj, pa za free tier u njih uopće ne ulazimo:
// ni ispiti se ne dovlače ni sadržaj ne dolazi u DOM, nego se prikaže placeholder
// s CTA-om. Ispitni mod i vježbanje (FREE_LIMIT) idu svojim putem i ostaju ovdje.
// 'stats' NIJE ovdje: vlastiti rezultati, XP i povijest su besplatni — zaključana je
// samo analitika unutar njega (AnalyticsPanelBound).
const PAID_SCREENS = ['browse', 'vocab', 'bookmarks', 'errors', 'analytics', 'pdf_report']

const PAID_SCREEN_COPY = {
  browse:     { label: 'Pregled svih pitanja', note: 'Pregled banke s točnim odgovorima i obrazloženjima dolazi sa Standard planom. Ispiti s timerom ostaju besplatni.' },
  vocab:      { label: 'Vocabulary vježba', note: 'Vježba s točnim odgovorima i obrazloženjima dolazi sa Standard planom.' },
  bookmarks:  { label: 'Bookmarci', note: 'Spremljena pitanja s točnim odgovorima dolaze sa Standard planom.' },
  errors:     { label: 'Greške — ponavljanje', note: 'Vježbanje grešaka s obrazloženjima dolazi sa Standard planom.' },
  analytics:  { label: 'Analitika', note: 'Analiza po temama i savjeti dolaze sa Standard planom.' },
  pdf_report: { label: 'PDF izvještaj', note: 'Izvještaj s analizom po temama dolazi sa Standard planom.' },
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
    } else if (type === 'warn') {
      // Neutralni kratki dvostruki ton (660 Hz) za upozorenja timera — 'wrong'
      // zvuk je signal greške i na toastu zvuči kao kazna.
      [0, 0.18].forEach(off => {
        const osc = ctx.createOscillator()
        osc.connect(gain)
        osc.frequency.setValueAtTime(660, ctx.currentTime + off)
        gain.gain.setValueAtTime(0.12, ctx.currentTime + off)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + off + 0.12)
        osc.start(ctx.currentTime + off)
        osc.stop(ctx.currentTime + off + 0.12)
      })
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
function generateVirtualExam(EXAMS) {
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

// Timer jedne ispitne cjeline. Roditelj ga MORA renderirati s key={blockIdx} —
// useTimer čita 'totalSeconds' samo pri mountu, pa je remount preko keya način
// resetiranja odbrojavanja bez setState-a u efektu (React Compiler pravila).
function BlockTimer({ totalSeconds, run, onExpire, onWarn, label }) {
  const { d, cls } = useTimer(totalSeconds, run, onExpire, [600, 300], onWarn)
  return (
    <span
      className={`timer${cls ? ' ' + cls : ''}`}
      role="timer"
      aria-label={'Preostalo vrijeme' + (label ? ' — ' + label : '')}
    >{d}</span>
  )
}

// Named export radi testova blokovske navigacije (exam-play-blocks.test.js) —
// ponašanje je nepromijenjeno, default export i dalje je EngleskiSimulator.
export function ExamPlayScreen({ exam, examMode, timedMode, examContext, onExit, onDone, userAccess, isPro, examLookup, soundOn, onBookmarkChange }) {
  const qs = useMemo(() => exam?.qs || [], [exam])
  const [cur, setCur] = useState(0)
  const [answers, setAnswers] = useState({})
  const [rev, setRev] = useState({})
  const [qTimes, setQTimes] = useState({})
  const [bookmarks, setBookmarks] = useState(() => {
    try { return validateBookmarks(JSON.parse(localStorage.getItem('disc_eng_bookmarks') || '{}')) } catch { return {} }
  })
  const [toast, setToast] = useState(null)
  const [blockIdx, setBlockIdx] = useState(0)

  // Simulacija ide blok po blok prema NCVVO strukturi razine (viša 70/75/35,
  // osnovna 75/30); vježbanje i vježbanje s timerom ostaju slobodna navigacija.
  const blocks = useMemo(() => (examMode ? getExamBlocks(exam) : []), [examMode, exam])
  const block = blocks[blockIdx] || null
  const isLastBlock = !block || blockIdx >= blocks.length - 1
  // Globalni indeksi pitanja koja su trenutno dostupna (u simulaciji samo tekući blok)
  const visIdx = useMemo(() => (block ? block.qIdx : qs.map((_, i) => i)), [block, qs])
  // Ako 'cur' ne pripada tekućem bloku (npr. početna nula u ispitu bez čitanja),
  // vrijedi prvo pitanje bloka — izvedena vrijednost, bez setState-a u efektu
  const curIdx = block && !block.qIdx.includes(cur) ? block.qIdx[0] : cur
  // Trajanje timera: po cjelini u simulaciji, ukupno propisano trajanje u timed vježbanju
  const timerSeconds = (block ? block.minutes : totalMinutes(exam) || 90) * 60
  const curQid = qs[curIdx]?.id

  // Vrijeme po pitanju mjerimo u efektu — Date.now() se ne smije zvati tijekom
  // rendera (React Compiler, pravilo čistoće). Cleanup se izvrši kad se pitanje
  // (ili blok) promijeni pa tada pribilježi protekle sekunde.
  useEffect(() => {
    if (!curQid) return
    const startedAt = Date.now()
    return () => {
      const elapsed = Math.max(0, Math.round((Date.now() - startedAt) / 1000))
      if (elapsed > 0) setQTimes(prev => ({ ...prev, [curQid]: (prev[curQid] || 0) + elapsed }))
    }
  }, [curQid])

  if (!exam || !qs.length) {
    return (
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '30px 20px' }}>
        <button className="btn btn-g" onClick={onExit}>← Natrag</button>
        <div style={{ marginTop: 14, color: 'var(--muted)' }}>Ispit nije dostupan.</div>
      </div>
    )
  }

  const q = qs[curIdx]
  const bkKey = `${exam.key}_${q.id}`
  const isBookmarked = !!bookmarks[bkKey]

  function setAnswer(next) {
    setAnswers(prev => ({ ...prev, [q.id]: next }))
  }

  const pos = visIdx.indexOf(curIdx)

  // 'p' je pozicija unutar dostupnih pitanja (u simulaciji: unutar tekućeg bloka)
  function goToPos(p) {
    if (p < 0 || p >= visIdx.length) return
    setCur(visIdx[p])
  }

  function goToBlock(next) {
    const nb = blocks[next]
    if (!nb) return
    setBlockIdx(next)
    setCur(nb.qIdx[0])
  }

  function showToast(msg) {
    setToast(msg)
    if (soundOn) playSound('warn')
    setTimeout(() => setToast(t => (t === msg ? null : t)), 4000)
  }

  function onTimerWarn(seconds) {
    const msg = warnMessage(seconds)
    // Bez naziva cjeline korisnik u simulaciji ne zna na što se upozorenje odnosi
    if (msg) showToast(msg + (block ? ' za ' + block.label : ''))
  }

  // Istek timera: u simulaciji automatski prelaz na sljedeću cjelinu, na zadnjoj predaja.
  // finish() zatvara nad trenutnim renderom `answers` — sigurno jer useTimer u efektu
  // osvježava ref na callback pri svakom renderu, pa interval zove najnoviju verziju.
  function onTimerExpire() {
    if (!examMode) return
    if (!block) { finish(); return }
    showToast('Vrijeme za ' + block.label + ' je isteklo')
    if (isLastBlock) finish()
    else goToBlock(blockIdx + 1)
  }

  function checkAnswer() {
    setRev(prev => ({ ...prev, [q.id]: true }))
  }

  function toggleBookmark() {
    setBookmarks(prev => {
      const next = { ...prev }
      if (next[bkKey]) {
        delete next[bkKey]
        // Tombstone brisanja — bez njega bi se merge s cloudom ponašao kao
        // unija i bookmark bi se vratio s drugog uređaja.
        try {
          const del = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_DELETED_KEY) || '{}')
          del[bkKey] = Date.now()
          localStorage.setItem(ENG_BOOKMARKS_DELETED_KEY, JSON.stringify(del))
        } catch {}
      } else {
        next[bkKey] = {
          qid: q.id,
          examKey: exam.key,
          examLabel: `${exam.year}. — ${exam.label}`,
          q: q.q.slice(0, 200),
          addedAt: Date.now(),
        }
        // Ponovno dodavanje briše stari tombstone (novi addedAt ionako pobjeđuje
        // u mergeu, ali čišćenje drži lokalno stanje malim).
        try {
          const del = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_DELETED_KEY) || '{}')
          delete del[bkKey]
          localStorage.setItem(ENG_BOOKMARKS_DELETED_KEY, JSON.stringify(del))
        } catch {}
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
    // Rezultat po ispitnim cjelinama s NCVVO ponderima; 'pct' ostaje udio točnih
    // auto-ocjenjivih pitanja radi kompatibilnosti s povijesti i statistikama.
    const scores = sectionScores(exam, answers, chk)
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
      sectionScores: scores,
      weighted: weightedEstimate(scores),
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
        <span className="ntitle">{examMode
          ? 'Simulacija' + (block ? ` · ${block.label} (${blockIdx + 1}/${blocks.length})` : '')
          : timedMode ? 'Vježbanje ⏱' : 'Vježbanje'}</span>
        {(examMode || timedMode) && (
          <BlockTimer
            key={examMode ? 'block_' + blockIdx : 'all'}
            totalSeconds={timerSeconds}
            run={true}
            onExpire={onTimerExpire}
            onWarn={onTimerWarn}
            label={block ? block.label : ''}
          />
        )}
        <span className="nsp" />
        <span className="nbadge">{(pos < 0 ? 0 : pos) + 1}/{visIdx.length}</span>
        <button
          className="btn btn-g"
          style={{ fontSize: 15, padding: '4px 9px', color: isBookmarked ? 'var(--gold)' : undefined, borderColor: isBookmarked ? 'var(--gold-b)' : undefined }}
          onClick={toggleBookmark}
          title={isBookmarked ? 'Ukloni bookmark' : 'Dodaj bookmark'}
        >🔖</button>
      </div>
      {examMode && blocks.length > 1 && (
        <div role="list" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
          {blocks.map((b, i) => {
            const state = i < blockIdx ? 'done' : i === blockIdx ? 'active' : 'todo'
            const col = state === 'done' ? 'var(--green)' : state === 'active' ? 'var(--blue)' : 'var(--muted)'
            return (
              <span key={b.id} role="listitem" aria-current={state === 'active' ? 'step' : undefined} style={{
                fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 99,
                border: '1px solid', borderColor: state === 'todo' ? 'var(--bdr2)' : col,
                background: state === 'todo' ? 'var(--s2)' : col + '1a', color: col,
              }}>
                {state === 'done' ? '✓ ' : state === 'active' ? '▶ ' : ''}{b.label} · {b.minutes} min
              </span>
            )
          })}
        </div>
      )}
      <SimulatorPreviewGate
        userAccess={userAccess}
        currentQuestionIndex={curIdx}
        totalQuestions={qs.length}
        from="eng-simulator"
        freeExam={examMode}
        freePractice={!examMode}
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
                {/* Audio se traži po ključu IZVORNOG ispita pitanja: u virtualnom ispitu,
                    filtriranom vježbanju i sesiji grešaka exam.key je sintetički
                    ('virtual_…', 'filter_session_…') i nema ga u audio-map.json. */}
                <AudioPlayer key={(q._examKey || exam.key) + '_' + q.topic} examKey={q._examKey || exam.key} topic={q.topic} razina={exam.razina === 'mixed' ? examLookup?.[q._examKey]?.razina : exam.razina} />
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
              <button className="btn btn-g" disabled={pos <= 0} onClick={() => goToPos(pos - 1)}>← Prethodno</button>
              <button className="btn btn-g" disabled={pos < 0 || pos >= visIdx.length - 1} onClick={() => goToPos(pos + 1)}>Sljedeće →</button>
              <button className="btn btn-gold" style={{ marginLeft: 'auto' }} onClick={() => {
                if (isLocked) { openPaywall(); return }
                if (examMode && !isLastBlock) {
                  if (!window.confirm('Nakon prelaska ne možeš se vratiti na ovaj dio.')) return
                  goToBlock(blockIdx + 1)
                  return
                }
                if (examMode && !window.confirm('Jesi li siguran/na da želiš predati ispit?')) return
                finish()
              }}>{examMode ? (isLastBlock ? 'Predaj ispit' : 'Završi dio →') : 'Vidi rezultate'}</button>
            </div>
          </div>
        )}
      </SimulatorPreviewGate>

      {/* Question navigation grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: '14px 2px 0' }}>
        {visIdx.map((gi, i) => {
          const item = qs[gi]
          const a = answers[item.id]
          const hasA = item.type === 'mat'
            ? (a && typeof a === 'object' && Object.values(a).some(v => v))
            : (a !== undefined && a !== null && a !== '')
          const reviewed = !!rev[item.id]
          const isCur = gi === curIdx
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
              onClick={() => goToPos(i)}
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
  const canSeeAnalysis = canSeeDiscereAnalysis(userAccess)

  const [screen, setScreen] = useState('home')
  const [screenHistory, setScreenHistory] = useState(['home'])
  const [lockedScreen, setLockedScreen] = useState(null)
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
  // Učitane razine ispita (spojena mapa iz examsLoader keša) + indikator učitavanja.
  const [examsMap, setExamsMap] = useState(getLoadedSync)
  const [examsLoading, setExamsLoading] = useState(false)
  // Neuspjelo učitavanje razine ispita — { message, retry } za povratnu informaciju
  const [examsError, setExamsError] = useState(null)
  const [showGuide, setShowGuide] = useState(false)

  const examLookup = useMemo(() => ({ ...examsMap, ...extraExams }), [examsMap, extraExams])

  // Results i Stats ekrani ne prosljeđuju examsMap analitici, pa ga injektiramo
  // ovdje — inače AnalyticsPanelFull pada na fallback s nepotpunom mapom.
  // Analitika pokazuje točne odgovore i obrazloženja pitanja iz cijele povijesti,
  // pa je za free tier zamijenjena placeholderom; vlastiti bodovi i XP iznad nje
  // ostaju besplatni.
  const AnalyticsPanelBound = useMemo(
    () => function AnalyticsPanelInjected(props) {
      if (!canSeeAnalysis) return (
        <LockedResultsBlock
          {...PAID_SCREEN_COPY.analytics}
          rows={5}
          minHeight={200}
          upgradeHref="/pro?from=eng-feature&plan=standard"
        />
      )
      return <AnalyticsPanelWrapper examsMap={examLookup} {...props} />
    },
    [examLookup, canSeeAnalysis],
  )
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
    // Kvota localStoragea (ili privatni mod) ne smije srušiti simulator
    try {
      if (userData) localStorage.setItem(ENG_USER_KEY, JSON.stringify(userData))
    } catch (err) { console.warn('Spremanje napretka u localStorage nije uspjelo:', err) }
  }, [userData])

  // Hidracija i debounce-spremanje u cloud žive u useEngCloudSync (isto
  // ponašanje, samo izvučeno iz komponente radi testabilnosti).
  const { bumpBookmarkRev } = useEngCloudSync({ user, userData, setUserData })

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

  // Ulaz u ekran s plaćenim sadržajem: za free tier ne dovlačimo ispite i ne
  // renderiramo ekran, nego zaključani placeholder s CTA-om.
  const goPaidScreen = target => {
    if (!canSeeAnalysis) {
      setLockedScreen(target)
      navigate('locked')
      return
    }
    ensureAllExams(() => navigate(target))
  }

  const toggles = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginLeft: 'auto' }}>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setShowGuide(true)} title="Vodič za korištenje" aria-label="Vodič za korištenje">ℹ️</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => ensureAllExams(() => navigate('stats'))} title="Statistike" aria-label="Statistike">📊</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setSoundOn(s => !s)} title={soundOn ? 'Isključi zvuk' : 'Uključi zvuk'} aria-label={soundOn ? 'Isključi zvuk' : 'Uključi zvuk'} aria-pressed={!soundOn}>{soundOn ? '🔊' : '🔇'}</button>
      <button className="btn btn-g" style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => setDarkMode(d => !d)} title={darkMode ? 'Svjetli mod' : 'Tamni mod'} aria-label={darkMode ? 'Prebaci na svjetli mod' : 'Prebaci na tamni mod'} aria-pressed={darkMode}>{darkMode ? '☀️' : '🌙'}</button>
    </div>
  )

  // Učitaj tražene razine (keširano i deduplicirano u examsLoaderu) pa izvrši
  // nastavak — navigaciju. Dok traje učitavanje prikazuje se ScreenLoader.
  function ensureExams(razine, then) {
    if (razine.every(r => isRazinaLoaded(r))) {
      then(getLoadedSync())
      return
    }
    setExamsLoading(true)
    setExamsError(null)
    Promise.all(razine.map(r => loadRazina(r)))
      .then(() => {
        const map = getLoadedSync()
        setExamsMap(map)
        setExamsLoading(false)
        then(map)
      })
      .catch(err => {
        console.error('Učitavanje ispita nije uspjelo:', err)
        setExamsLoading(false)
        setExamsError({ message: 'Učitavanje ispita nije uspjelo.', retry: () => ensureExams(razine, then) })
      })
  }

  // Ekrani koji analiziraju cijelu povijest trebaju obje razine.
  function ensureAllExams(then) {
    ensureExams(RAZINE, then)
  }

  // Sigurnosna mreža: ako se na ekran koji treba obje razine dođe putem koji je
  // preskočio ensureAllExams (npr. povratak u povijest ili novi prop), razine se
  // dovlače ovdje. Za 'results' je dovlačenje u pozadini (bez loadera) jer
  // analitika na tom ekranu gleda cijelu povijest.
  useEffect(() => {
    if (!FULL_EXAMS_SCREENS.includes(screen) && screen !== 'results') return
    if (RAZINE.every(r => isRazinaLoaded(r))) return
    let cancelled = false
    const load = () => Promise.all(RAZINE.map(r => loadRazina(r)))
      .then(() => { if (!cancelled) setExamsMap(getLoadedSync()) })
      .catch(err => {
        console.error('Učitavanje ispita nije uspjelo:', err)
        if (!cancelled) setExamsError({ message: 'Učitavanje ispita nije uspjelo.', retry: load })
      })
    void load()
    return () => { cancelled = true }
  }, [screen])

  function onModeSelect(examKey) {
    ensureExams([razinaForKey(examKey)], () => {
      setSelectedExamKey(examKey)
      navigate('modeselect')
    })
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

  // navigateTo: kamo nakon spremanja rezultata. Dnevni izazov ima vlastiti
  // prikaz rezultata pa ide na 'home' — ekran 'results' bez odabranog ispita bi
  // prikazao tuđi/nepostojeći ispit.
  function onExamDone(result, { navigateTo = 'results' } = {}) {
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
            // 'at' daje zapisu jednoznačan identitet pri mergeu dva uređaja
            at: Date.now(),
            pct: result.pct,
            grade: result.grade,
            cor: result.cor,
            total: result.total,
            // Rezultat po NCVVO ponderima (bez cjeline Pisanje, ponderi
            // preračunati na ocijenjene cjeline). Jedina veličina iz zapisa
            // koja je usporediva sa službenim NCVVO prosjekom — 'pct' to nije
            // jer cjeline zbraja po broju pitanja. Vidi ncvvoData.comparablePct.
            weighted: typeof result.weighted?.pct === 'number' ? result.weighted.pct : null,
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

    navigate(navigateTo)
  }

  const renderScreen = () => {
    if (examsLoading) return <ScreenLoader />
    if (examsError) return (
      <div className="eng-sim"><div className="sim-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
        <div style={{ fontSize: 38, marginBottom: 12 }}>⚠️</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{examsError.message}</div>
        <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>Provjeri internetsku vezu pa pokušaj ponovno.</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-gold" onClick={() => { const retry = examsError.retry; setExamsError(null); if (retry) retry() }}>Pokušaj ponovno</button>
          <button className="btn btn-g" onClick={() => { setExamsError(null); goBack() }}>← Natrag</button>
        </div>
      </div></div>
    )
    // Ekran koji treba obje razine ne renderiramo s nepotpunom mapom — effect
    // iznad ih dovlači, a dotad stoji loader.
    if (FULL_EXAMS_SCREENS.includes(screen) && !RAZINE.every(r => isRazinaLoaded(r))) return <ScreenLoader />
    // Sigurnosna mreža: na plaćeni ekran se za free tier ne ulazi ni jednim putem.
    if (screen === 'locked' || (!canSeeAnalysis && PAID_SCREENS.includes(screen))) {
      const copy = PAID_SCREEN_COPY[screen === 'locked' ? lockedScreen : screen] || PAID_SCREEN_COPY.browse
      return (
        <div className="eng-sim"><div className="sim-card" style={{ maxWidth: 640, margin: '24px auto' }}>
          <button className="btn btn-g" style={{ marginBottom: 16 }} onClick={goBack}>← Natrag</button>
          <LockedResultsBlock
            label={copy.label}
            note={copy.note}
            rows={5}
            minHeight={200}
            upgradeHref="/pro?from=eng-feature&plan=standard"
          />
        </div></div>
      )
    }
    const screenContent = (() => {
      switch (screen) {
        case 'home':
          return (
            <Home 
              onModeSelect={onModeSelect}
              userData={userData}
              toggles={toggles}
              goErrors={() => goPaidScreen('errors')}
              goBookmarks={() => goPaidScreen('bookmarks')}
              goStats={() => ensureAllExams(() => navigate('stats'))}
              goBrowse={() => goPaidScreen('browse')}
              goDailyChallenge={() => ensureAllExams(() => navigate('daily'))}
              goVirtualExam={() => ensureAllExams(map => { const v = generateVirtualExam(map); setExtraExams(prev => ({ ...prev, [v.key]: v })); setSelectedExamKey(v.key); navigate('virtual_exam') })}
              goFilter={() => ensureAllExams(() => navigate('filter'))}
              goVocab={() => goPaidScreen('vocab')}
              goCompare={() => ensureAllExams(() => navigate('compare'))}
              visaLoaded={true}
              examsIndex={EXAMS_INDEX}
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
              examsMap={examLookup}
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
              onBookmarkChange={bumpBookmarkRev}
            />
          )

        case 'results':
          // Bez odabranog ispita (npr. povratak u povijesti) nema što prikazati —
          // fallback s povratkom, nikako navigacija tijekom rendera.
          if (!selectedExam || !Array.isArray(selectedExam.qs)) return (
            <div className="eng-sim"><div className="sim-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Rezultati nisu dostupni</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>Riješi ispit pa će se rezultati prikazati ovdje.</div>
              <button className="btn btn-g" onClick={goBack}>← Natrag</button>
            </div></div>
          )
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
                // _examKey zadržava ključ izvornog ispita da AudioPlayer nađe snimku
                // (ključ sesije 'exam_errors_session' nije u audio-map.json).
                const tagged = wrongQs.map(q => (q._examKey ? q : { ...q, _examKey: srcExam.key }))
                const virtual = { key: 'exam_errors_session', year: srcExam.year, season: srcExam.season, label: `${srcExam.label} — Greške`, razina: srcExam.razina, qs: fisherYates(tagged) }
                setSelectedExamKey(virtual.key)
                setExtraExams(prev => ({ ...prev, [virtual.key]: virtual }))
                setExamMode(false)
                navigate('exam')
              }}
              onGoFilter={() => ensureAllExams(() => navigate('filter'))}
              onGoStats={() => ensureAllExams(() => navigate('stats'))}
              chk={chk}
              grade={grade}
              GC={GC}
              TLBL={TLBL}
              TOPIC_LABELS={TOPIC_LABELS}
              LL={LL}
              AnswerHelper={AnswerHelper}
              AnalyticsPanel={AnalyticsPanelBound}
              LEVEL_NAMES={LEVEL_NAMES}
              getLevel={getLevel}
              canSeeAnalysis={canSeeAnalysis}
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
              onFilter={() => ensureAllExams(() => navigate('filter'))}
              onFilterSession={() => goPaidScreen('errors')}
              onPDFReport={() => goPaidScreen('pdf_report')}
              LEVEL_NAMES={LEVEL_NAMES}
              getLevel={getLevel}
              xpProgress={xpProgress}
              xpToNext={xpToNext}
              AnalyticsPanel={AnalyticsPanelBound}
            />
          )
        
        case 'browse':
          return (
            <BrowseScreen 
              onBack={goBack}
              EXAMS={examsMap}
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
              examsMap={examsMap}
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
              examsMap={examsMap}
              topicLabels={TOPIC_LABELS}
              fisherYates={fisherYates}
              validateBookmarks={validateBookmarks}
              onBookmarkChange={bumpBookmarkRev}
            />
          )
        
        case 'daily':
          return (
            <DailyChallengeScreen
              userData={userData}
              examsMap={examLookup}
              userAccess={userAccess}
              onBack={goBack}
              onDone={result => onExamDone(result, { navigateTo: 'home' })}
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
              userAccess={userAccess}
              isPro={isPro}
              examLookup={examLookup}
              soundOn={soundOn}
              onBookmarkChange={bumpBookmarkRev}
            />
          )
        }

        case 'vocab':
          return <VocabScreen userData={userData} onBack={goBack} examsMap={examLookup} />

        case 'compare':
          return <CompareScreen userData={userData} onBack={goBack} examsMap={examLookup} />

        case 'pdf_report':
          return <PDFReportScreen userData={userData} onBack={goBack} examsMap={examLookup} />

        case 'guide':
          return <GuideScreen onBack={goBack} />

        case 'filter':
          return (
            <TopicFilterScreen
              userData={userData}
              onBack={goBack}
              examsMap={examsMap}
              onStartExam={({ qs, label, isFiltered }) => {
                const key = 'filter_session_' + Date.now()
                const fExam = { key, year: new Date().getFullYear(), season: 'filter', label, razina: deriveRazina(qs, examsMap), qs }
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
              <AnalyticsPanelFull userData={userData} examsMap={examsMap} onFilter={() => navigate('filter')} />
            </div></div>
          )

        default:
          return (
            <Home 
              onModeSelect={onModeSelect}
              userData={userData}
              toggles={toggles}
              goErrors={() => goPaidScreen('errors')}
              goBookmarks={() => goPaidScreen('bookmarks')}
              goStats={() => ensureAllExams(() => navigate('stats'))}
              goBrowse={() => goPaidScreen('browse')}
              goDailyChallenge={() => ensureAllExams(() => navigate('daily'))}
              goVirtualExam={() => ensureAllExams(map => { const v = generateVirtualExam(map); setExtraExams(prev => ({ ...prev, [v.key]: v })); setSelectedExamKey(v.key); navigate('virtual_exam') })}
              goFilter={() => ensureAllExams(() => navigate('filter'))}
              goVocab={() => goPaidScreen('vocab')}
              goCompare={() => ensureAllExams(() => navigate('compare'))}
              visaLoaded={true}
              examsIndex={EXAMS_INDEX}
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
