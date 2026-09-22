'use client'
import { useState, useMemo } from 'react'
import { TOPIC_LABELS, GC, GRADE_NOTE, LEVEL_NAMES, getLevel, xpProgress, xpToNext, grade, LL } from '@/lib/engleski-simulator/constants'
import { chk } from '@/lib/engleski-simulator/scoring'
import { getLoadedSync } from '@/lib/engleski-simulator/examsLoader'

// ── TrendGraph ────────────────────────────────────────────────────
function TrendGraph({ history }) {
  const [tooltip, setTooltip] = useState(null)
  if (!history || history.length === 0)
    return <div className="trend-empty">📈 Nema podataka — riješi barem jedan ispit.</div>

  const W = 560, H = 180, PAD = { t: 20, r: 20, b: 40, l: 40 }
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b
  const data = history.slice(-10)
  const n = data.length
  const xStep = n > 1 ? iW / (n - 1) : 0
  const xPos = i => PAD.l + (n > 1 ? i * xStep : iW / 2)
  const yPos = pct => PAD.t + iH - (pct / 100) * iH
  const pts = data.map((h, i) => xPos(i) + ',' + yPos(h.pct))
  const linePath = pts.join(' ')
  const areaPath = `M${xPos(0)},${PAD.t + iH} ` +
    data.map((h, i) => `L${xPos(i)},${yPos(h.pct)}`).join(' ') +
    ` L${xPos(n - 1)},${PAD.t + iH} Z`
  const gridLines = [40, 55, 70, 85]
  const avgPct = Math.round(data.reduce((a, h) => a + h.pct, 0) / n)
  const trend = n >= 3
    ? data.slice(-3).reduce((a, h) => a + h.pct, 0) / 3 -
      data.slice(0, Math.min(3, n)).reduce((a, h) => a + h.pct, 0) / Math.min(3, n)
    : 0

  return (
    <div className="trend-wrap">
      <svg className="trend-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        {gridLines.map(pct => (
          <g key={pct}>
            <line x1={PAD.l} y1={yPos(pct)} x2={W - PAD.r} y2={yPos(pct)} stroke="var(--bdr2)" strokeWidth={1} strokeDasharray="4 4" />
            <text x={PAD.l - 4} y={yPos(pct) + 4} textAnchor="end" fontSize={9} fill="var(--muted)">{pct}%</text>
          </g>
        ))}
        {n > 1 && <path d={areaPath} fill="var(--gold)" fillOpacity={0.06} />}
        {n > 1 && <polyline points={linePath} fill="none" stroke="var(--gold)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />}
        {n >= 3 && <line x1={PAD.l} y1={yPos(avgPct)} x2={W - PAD.r} y2={yPos(avgPct)} stroke="rgba(255,255,255,.2)" strokeWidth={1} strokeDasharray="6 3" />}
        {data.map((h, i) => (
          <text key={i} x={xPos(i)} y={H - 6} textAnchor="middle" fontSize={9} fill="var(--muted)">
            {(h.examLabel || '').slice(0, 8)}
          </text>
        ))}
        {data.map((h, i) => (
          <circle key={i} className="trend-point"
            cx={xPos(i)} cy={yPos(h.pct)} r={5}
            fill={GC[h.grade] || 'var(--gold)'} stroke="var(--bg)" strokeWidth={2}
            onMouseEnter={ev => setTooltip({ x: xPos(i), y: yPos(h.pct), data: h })}
            onMouseLeave={() => setTooltip(null)}
          />
        ))}
      </svg>
      {tooltip && (
        <div className="trend-tooltip" style={{ left: Math.min((tooltip.x / 560 * 100), 75) + '%', top: (tooltip.y / 180 * 100 - 20) + '%' }}>
          <strong style={{ color: GC[tooltip.data.grade] || 'var(--gold)' }}>Ocjena {tooltip.data.grade} — {tooltip.data.pct}%</strong>
          <span>{tooltip.data.examLabel}</span><br />
          <span style={{ color: 'var(--muted)' }}>{tooltip.data.date} · {tooltip.data.cor}/{tooltip.data.total} točnih</span>
        </div>
      )}
      <div className="trend-legend">
        <div className="trend-legend-item">
          <div className="trend-legend-line" style={{ background: 'var(--gold)' }} />
          Tvoj rezultat
        </div>
        {n >= 3 && <div className="trend-legend-item">
          <div className="trend-legend-line" style={{ background: 'rgba(255,255,255,.2)' }} />
          Prosjek {avgPct}%
        </div>}
        {n >= 3 && <div className="trend-legend-item" style={{ marginLeft: 'auto', fontWeight: 600 }}>
          {trend > 3 ? <span className="pred-trend-up">↑ Rastući trend (+{Math.round(trend)}%)</span>
            : trend < -3 ? <span className="pred-trend-down">↓ Padajući trend ({Math.round(trend)}%)</span>
            : <span className="pred-trend-flat">→ Stabilan</span>}
        </div>}
      </div>
      {n < 3 && <div className="trend-need-more">💡 Riješi još {3 - n} ispita za prikaz trenda</div>}
    </div>
  )
}

// ── GradePrediction ───────────────────────────────────────────────
function GradePrediction({ history }) {
  if (!history || history.length < 2) return (
    <div className="pred-empty">
      <div className="pred-empty-ico">📊</div>
      Trebaš barem 2 riješena ispita za predviđanje.
    </div>
  )

  const GNAMES = { 1: 'Nedovoljan', 2: 'Dovoljan', 3: 'Dobar', 4: 'Vrlo dobar', 5: 'Odličan' }
  // ilustrativna distribucija ocjena — nema navedenog službenog izvora, ne koristi kao stvarne NCVVO podatke
  const NCE_DIST = { 1: 22, 2: 18, 3: 24, 4: 20, 5: 16 }
  const recent = history.slice(-5)
  const weights = recent.map((_, i) => i + 1)
  const totalW = weights.reduce((a, b) => a + b, 0)
  const weightedPct = Math.round(recent.reduce((a, h, i) => a + h.pct * weights[i], 0) / totalW)
  const avgPct = Math.round(recent.reduce((a, h) => a + h.pct, 0) / recent.length)
  const trend = history.length >= 3
    ? (history.slice(-2).reduce((a, h) => a + h.pct, 0) / 2) -
      (history.slice(-4, -2).reduce((a, h) => a + h.pct, 0) / Math.min(2, history.slice(-4, -2).length))
    : 0
  const predicted = Math.max(0, Math.min(100, Math.round(weightedPct + trend * 0.3)))
  const g = predicted >= 85 ? 5 : predicted >= 70 ? 4 : predicted >= 55 ? 3 : predicted >= 40 ? 2 : 1
  const gc = GC[g]
  const confidence = history.length >= 5 ? 'Visoka' : history.length >= 3 ? 'Srednja' : 'Niska'
  const confColor = confidence === 'Visoka' ? 'var(--green)' : confidence === 'Srednja' ? 'var(--gold)' : 'var(--muted)'
  const best = Math.max(...history.map(h => h.pct))
  const worst = Math.min(...history.map(h => h.pct))
  const trendDir = trend > 2 ? '↑ Rasteš' : trend < -2 ? '↓ Padaš' : '→ Stagniraš'
  const trendColor = trend > 2 ? 'var(--green)' : trend < -2 ? 'var(--red)' : 'var(--muted)'
  const betterThan = Object.entries(NCE_DIST).filter(([gg]) => parseInt(gg) < g).reduce((s, [, p]) => s + p, 0)

  return (
    <div className="pred-wrap">
      <div className="pred-main">
        <div className="pred-grade-block">
          <div className="pred-grade-circle" style={{ borderColor: gc, color: gc }}>
            <div className="pred-grade-num">{g}</div>
            <div className="pred-grade-max">/5</div>
          </div>
          <div className="pred-confidence-badge" style={{ color: confColor, borderColor: confColor + '60', background: confColor + '15' }}>
            {confidence} pouzdanost
          </div>
        </div>
        <div className="pred-main-info">
          <div className="pred-grade-name" style={{ color: gc }}>{GNAMES[g]}</div>
          <div className="pred-grade-sub">Predviđena ocjena na maturi</div>
          <div className="pred-pct" style={{ color: gc }}>{predicted}%</div>
          {betterThan > 0 && <div className="pred-rank">Bolji/a od <strong>{betterThan}%</strong> u ilustrativnoj raspodjeli</div>}
        </div>
      </div>
      <div className="pred-grade-note" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>{GRADE_NOTE}</div>

      <div className="pred-stats">
        {[
          { label: 'Prosjek', val: avgPct + '%', color: 'var(--text)' },
          { label: 'Trend', val: trendDir, color: trendColor },
          { label: 'Najbolji', val: best + '%', color: 'var(--green)' },
          { label: 'Najslabiji', val: worst + '%', color: 'var(--red)' },
        ].map(({ label, val, color }) => (
          <div key={label} className="pred-stat">
            <div className="pred-stat-val" style={{ color }}>{val}</div>
            <div className="pred-stat-lbl">{label}</div>
          </div>
        ))}
      </div>

      <div className="pred-nce">
        <div className="pred-nce-title">Ilustrativna raspodjela ocjena (nije službeni podatak)</div>
        <div className="pred-nce-chart">
          {[1, 2, 3, 4, 5].map(gg => {
            const pct = NCE_DIST[gg]
            const isYours = gg === g
            const col = GC[gg]
            const barH = Math.round(pct / 24 * 64)
            return (
              <div key={gg} className="pred-nce-col">
                <div className="pred-nce-pct" style={{ color: isYours ? col : 'var(--muted)', fontWeight: isYours ? 700 : 400 }}>{pct}%</div>
                <div className="pred-nce-bar-wrap">
                  {isYours && <div className="pred-nce-you" style={{ color: col }}>▼ Ti</div>}
                  <div className={'pred-nce-bar' + (isYours ? ' pred-nce-bar-you' : '')}
                    style={{ height: barH + 'px', background: isYours ? col : 'var(--s3)', borderColor: isYours ? col : 'var(--bdr)' }} />
                </div>
                <div className="pred-nce-g" style={{ color: isYours ? col : 'var(--muted)', fontWeight: isYours ? 700 : 400 }}>{gg}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="pred-insight" style={{
        color: trend > 3 ? 'var(--green)' : trend < -3 ? 'var(--red)' : 'var(--muted)',
        borderColor: trend > 3 ? 'rgba(30,122,62,.2)' : trend < -3 ? 'rgba(196,48,48,.2)' : 'var(--bdr)',
      }}>
        {trend > 3 ? `🚀 Odlično napreduješ! Ako nastaviš ovim tempom, ocjena ${Math.min(5, g + 1)} je dostižna.`
          : trend < -3 ? '⚠️ Pad u rezultatima. Fokusiraj se na slabe teme.'
          : '💪 Stabilan/na si. Za poboljšanje uvježbaj teme ispod 60%.'}
      </div>
    </div>
  )
}

// ── DailySummary ──────────────────────────────────────────────────
function DailySummary({ userData }) {
  const history = userData.history || []
  const today = new Date().toLocaleDateString('hr')
  const todayExams = history.filter(h => h.date === today)
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Dobro jutro' : hour < 18 ? 'Dobar dan' : 'Dobra večer'
  // "Sada" se hvata jednom (lazy initializer), ne poziva izravno u tijelu komponente
  const [nowMs] = useState(() => Date.now())

  function estimateTime(h) {
    if (h.qTimes) {
      const totalSec = Object.values(h.qTimes).reduce((s, t) => s + (t || 0), 0)
      if (totalSec > 60) return Math.round(totalSec / 60)
    }
    return h.mode === 'simulacija' ? 90 : 35
  }

  const todayMinutes = todayExams.reduce((s, h) => s + estimateTime(h), 0)
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(nowMs - (6 - i) * 86400000).toLocaleDateString('hr')
    const dayExams = history.filter(h => h.date === d)
    const mins = dayExams.reduce((s, h) => s + estimateTime(h), 0)
    const label = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'][new Date(nowMs - (6 - i) * 86400000).getDay()]
    return { d, hasExam: dayExams.length > 0, isToday: d === today, mins, label, exams: dayExams.length }
  })
  const weekMinutes = last7.reduce((s, d) => s + d.mins, 0)
  const maxMins = Math.max(...last7.map(d => d.mins), 1)

  function fmtMins(m) {
    if (m === 0) return '0 min'
    if (m < 60) return m + ' min'
    return Math.floor(m / 60) + 'h ' + (m % 60 > 0 ? m % 60 + 'min' : '')
  }

  if (history.length === 0) return null

  return (
    <div className="daily-card">
      <div className="daily-greeting">{greeting} 👋</div>
      <div className="daily-sub">
        {todayExams.length === 0
          ? 'Nisi još danas vježbao/la. Hoćeš li riješiti ispit?'
          : `Danas si riješio/la ${todayExams.length} ispit${todayExams.length > 1 ? 'a' : ''}${todayMinutes > 0 ? ' · ' + fmtMins(todayMinutes) + ' učenja' : ''}.`}
      </div>
      <div className="daily-stats">
        {[
          { val: userData.xp || 0, lbl: 'Ukupni XP', col: 'var(--gold)' },
          { val: history.length, lbl: 'Ispita riješeno', col: 'var(--green)' },
          { val: userData.streak || 0, lbl: 'Dan streak 🔥', col: '#f97316' },
          { val: fmtMins(weekMinutes), lbl: 'Ovaj tjedan ⏱', col: 'var(--teal)' },
        ].map(({ val, lbl, col }) => (
          <div key={lbl} className="daily-stat">
            <div className="daily-stat-val" style={{ color: col }}>{val}</div>
            <div className="daily-stat-lbl">{lbl}</div>
          </div>
        ))}
      </div>

      {/* Weekly activity bars */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>Aktivnost — zadnjih 7 dana</span>
          {weekMinutes > 0 && <span>{fmtMins(weekMinutes)} ukupno</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
          {last7.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div title={d.label + ': ' + fmtMins(d.mins)} style={{
                width: '100%',
                height: d.mins > 0 ? Math.max(4, Math.round(d.mins / maxMins * 36)) + 'px' : '4px',
                background: d.isToday ? 'var(--gold)' : d.hasExam ? 'var(--teal)' : 'var(--s3)',
                borderRadius: 4, transition: 'height .4s ease',
              }} />
              <div style={{ fontSize: 9, color: d.isToday ? 'var(--gold)' : 'var(--muted)', fontWeight: d.isToday ? 700 : 400 }}>{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress quality chart */}
      {history.length >= 2 && (() => {
        const slice = history.slice(-10)
        const last5 = history.slice(-5)
        const trend = last5.length >= 2 ? last5[last5.length - 1].pct - last5[0].pct : 0
        const ups = last5.filter((h, i) => i > 0 && h.pct > last5[i - 1].pct + 3).length
        const downs = last5.filter((h, i) => i > 0 && h.pct < last5[i - 1].pct - 3).length
        const trendMsg = ups >= 3 ? '🚀 Odličan uzlazni trend!'
          : downs >= 3 ? '📉 Padajući trend — fokusiraj se na slabe teme.'
          : trend > 5 ? `📈 +${trend}% u zadnjih 5 ispita`
          : trend < -5 ? `⚠️ -${Math.abs(trend)}% u zadnjih 5 ispita`
          : '→ Stabilan rezultat.'
        const trendColor = ups >= 3 || trend > 5 ? 'var(--green)' : downs >= 3 || trend < -5 ? 'var(--red)' : 'var(--muted)'

        return (
          <div className="sq-wrap">
            <div className="sq-header">
              <div className="sq-title">Kvaliteta napretka</div>
              <div className="sq-subtitle">Zadnjih {slice.length} ispita</div>
            </div>
            <div className="sq-chart">
              <div className="sq-y-labels">
                {['100%', '75%', '50%', '25%'].map(l => <div key={l} className="sq-y-lbl">{l}</div>)}
              </div>
              <div className="sq-bars">
                {slice.map((h, i, arr) => {
                  const prev = i > 0 ? arr[i - 1].pct : h.pct
                  const col = h.pct >= 70 ? 'var(--green)' : h.pct >= 55 ? 'var(--gold)' : 'var(--red)'
                  const colAlpha = h.pct >= 70 ? 'rgba(30,122,62,.15)' : h.pct >= 55 ? 'rgba(168,114,10,.12)' : 'rgba(196,48,48,.12)'
                  const isCurrent = i === slice.length - 1
                  return (
                    <div key={i} className="sq-bar-col" title={`${h.examLabel} — ${h.pct}%`}>
                      <div className="sq-bar-track">
                        <div className={'sq-bar-fill' + (isCurrent ? ' sq-bar-cur' : '')} style={{
                          height: Math.max(4, Math.round(h.pct / 100 * 100)) + '%',
                          background: isCurrent ? col : colAlpha,
                          border: isCurrent ? '2px solid ' + col : '1px solid transparent',
                        }} />
                      </div>
                      <div className="sq-bar-pct" style={{ color: isCurrent ? col : 'var(--muted)' }}>{h.pct}%</div>
                      <div className="sq-bar-idx">{i === 0 ? '1' : i === slice.length - 1 ? '▶' : i + 1}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="sq-trend" style={{ color: trendColor }}>{trendMsg}</div>
          </div>
        )
      })()}
    </div>
  )
}

// ── AnalyticsPanelFull ────────────────────────────────────────────
export function AnalyticsPanelFull({ userData, defaultTab, onFilter, examsMap }) {
  // Ispiti dolaze propom kad ih roditelj ima; inače iz keša loadera (roditelj
  // zajamči loadAllRazine() prije ulaska u ekran koji renderira ovaj panel).
  const EXAMS = examsMap || getLoadedSync()
  const [tab, setTab] = useState(defaultTab || 'danas')
  const [drillTopic, setDrillTopic] = useState(null)
  const [tooltip, setTooltip] = useState(null)
  // Memoizirano da referenca ostane stabilna (koristi je useMemo hook niže)
  const history = useMemo(() => userData?.history || [], [userData])

  const topicStats = {}
  history.forEach(h => {
    if (!h.topic_breakdown) return
    Object.entries(h.topic_breakdown).forEach(([topic, data]) => {
      if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 }
      topicStats[topic].correct += data.correct || 0
      topicStats[topic].total += data.total || 0
    })
  })

  const topicList = Object.entries(topicStats)
    .map(([k, v]) => ({ key: k, label: TOPIC_LABELS[k] || k, ...v, pct: v.total ? Math.round(v.correct / v.total * 100) : null }))
    .filter(t => t.total > 0)
    .sort((a, b) => a.pct - b.pct)

  const errors = Object.values(userData?.errorTracker || {})
    .filter(e => e.count > 0)
    .sort((a, b) => b.count - a.count)

  const simHistory = history.filter(h => h.mode === 'simulacija')
  const vjezbaHistory = history.filter(h => h.mode === 'vježbanje' || !h.mode)
  const simAvg = simHistory.length ? Math.round(simHistory.reduce((a, h) => a + h.pct, 0) / simHistory.length) : null
  const vjezbaAvg = vjezbaHistory.length ? Math.round(vjezbaHistory.reduce((a, h) => a + h.pct, 0) / vjezbaHistory.length) : null
  const modeDiff = (simAvg !== null && vjezbaAvg !== null) ? simAvg - vjezbaAvg : null

  const allTimes = history.flatMap(h => h.qTimes ? Object.values(h.qTimes) : [])
  const avgTime = allTimes.length ? Math.round(allTimes.reduce((a, b) => a + b, 0) / allTimes.length) : 0

  const criticalQs = useMemo(() => {
    const map = {}
    history.forEach(h => {
      if (!h.qTimes || !h.answers || !h.examKey) return
      const exam = EXAMS[h.examKey]
      if (!exam) return
      Object.entries(h.qTimes).forEach(([qid, t]) => {
        if (t < 90) return
        const q = exam.qs.find(q => String(q.id) === String(qid))
        if (!q || q.type === 'sa' || q.type === 'es') return
        const ans = h.answers[qid]
        if (!ans || chk(q, ans) !== true) return
        const key = h.examKey + '__' + qid
        if (!map[key]) map[key] = { q, examKey: h.examKey, totalTime: 0, count: 0 }
        map[key].totalTime += t
        map[key].count++
      })
    })
    return Object.values(map)
      .map(x => ({ ...x, avgTime: Math.round(x.totalTime / x.count) }))
      .sort((a, b) => b.avgTime - a.avgTime).slice(0, 10)
  }, [history, EXAMS])

  function getRecommendations() {
    const recs = []
    const topErrors = errors.slice(0, 3).filter(e => e.count >= 2)
    if (topErrors.length > 0)
      recs.push({ icon: '🔁', title: 'Ponavljaš iste greške', desc: `Griješiš ${topErrors.length}× na pitanjima o ${[...new Set(topErrors.map(e => TOPIC_LABELS[e.topic] || e.topic))].join(', ')}.`, badge: 'urgent' })
    if (modeDiff !== null && modeDiff > 8)
      recs.push({ icon: '⚖️', title: 'Razlika vježbanje vs simulacija', desc: `U simulaciji si za ${Math.abs(modeDiff)}% slabiji nego u vježbanju.`, badge: 'urgent' })
    topicList.slice(0, 2).forEach(t => {
      if (t.pct !== null && t.pct < 60)
        recs.push({ icon: '🎯', title: `Uvježbaj: ${t.label}`, desc: `Trenutni rezultat ${t.pct}% — ispod prolazne granice.`, badge: 'urgent' })
    })
    const strong = [...topicList].reverse().find(t => t.pct >= 80)
    if (strong) recs.push({ icon: '💪', title: `Snaga: ${strong.label}`, desc: `${strong.pct}% — izvrsno!`, badge: 'good' })
    if (avgTime > 45) recs.push({ icon: '⏱', title: 'Radi na brzini', desc: `Prosječno ${avgTime}s po pitanju. Na maturi imaš ~2min po pitanju.`, badge: 'tip' })
    if (history.length < 3) recs.push({ icon: '📄', title: 'Riješi više ispita', desc: 'Cilj: barem 5 ispita.', badge: 'tip' })
    const best = history.length ? Math.max(...history.map(h => h.pct)) : 0
    if (best >= 85) recs.push({ icon: '🏆', title: 'Odličan rezultat!', desc: `Postigao/la si ${best}% — to odgovara ocjeni 5. ${GRADE_NOTE}`, badge: 'good' })
    return recs.length ? recs : [{ icon: '📊', title: 'Nastavi vježbati', desc: 'Riješi još ispita za personalizirane preporuke.', badge: 'tip' }]
  }

  const tabs = [
    { id: 'danas', label: '📅 Danas' },
    { id: 'greske', label: '🔁 Greške' },
    { id: 'napredak', label: '📈 Napredak' },
    { id: 'godine', label: '📅 Po godini' },
    { id: 'heatmap', label: '🗓 Kalendar' },
    { id: 'teska', label: '💀 Najteža' },
    { id: 'teme', label: '🗺 Teme' },
    { id: 'tipovi', label: '📋 Tipovi' },
    { id: 'savjeti', label: '💡 Savjeti' },
  ]

  const noData = (
    <div style={{ color: 'var(--muted)', fontSize: 13, textAlign: 'center', padding: '32px 0' }}>
      📊 Nema dovoljno podataka. Riješi barem jedan ispit.
    </div>
  )

  return (
    <div className="analytics-wrap">
      <div className="analytics-hdr">
        <span style={{ fontSize: 18 }}>📊</span>
        <span className="analytics-hdr-title">Moja statistika</span>
        {history.length > 0 && <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--muted)', fontWeight: 400 }}>{history.length} ispita riješeno</span>}
      </div>
      <div className="analytics-body">
        <div className="analytics-tab-bar">
          {tabs.map(t => (
            <button key={t.id} className={'analytics-tab' + (tab === t.id ? ' on' : '')} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {/* ── Tab: Danas ── */}
        {tab === 'danas' && <DailySummary userData={userData} />}

        {/* ── Tab: Greške ── */}
        {tab === 'greske' && (errors.length === 0
          ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 18, marginBottom: 6 }}>Nema grešaka!</div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                {history.length === 0 ? 'Riješi barem jedan ispit da bi pratio greške.' : 'Nema ponovljenih grešaka — odličan rad!'}
              </div>
            </div>
          ) : (
            <div>
              <div className="err-hdr" style={{ marginBottom: 12 }}>
                <div className="err-hdr-left">
                  <div className="err-hdr-num" style={{ color: errors.length > 20 ? 'var(--red)' : errors.length > 10 ? 'var(--gold)' : 'var(--green)', fontSize: 34 }}>{errors.length}</div>
                  <div className="err-hdr-info">
                    <div className="err-hdr-title">pitanja s greškama</div>
                    <div className="err-hdr-sub">Prikazano {Math.min(errors.length, 15)} najčešćih</div>
                  </div>
                </div>
              </div>
              {(() => {
                const byT = {}
                errors.forEach(e => { const t = e.topic || 'ostalo'; if (!byT[t]) byT[t] = 0; byT[t]++ })
                const tops = Object.entries(byT).sort((a, b) => b[1] - a[1]).slice(0, 4)
                return tops.length > 1 && (
                  <div className="err-topics" style={{ marginBottom: 10 }}>
                    {tops.map(([t, n]) => (
                      <div key={t} className="err-topic-pill">
                        {(TOPIC_LABELS[t] || t).slice(0, 22)}
                        <span className="err-topic-cnt">{n}</span>
                      </div>
                    ))}
                  </div>
                )
              })()}
              <div className="error-list">
                {errors.slice(0, 15).map((err, i) => {
                  const countCls = err.count >= 3 ? 'high' : err.count >= 2 ? 'mid' : 'low'
                  return (
                    <div key={i} className="error-item">
                      <div className={'error-count ' + countCls}>{err.count}×</div>
                      <div className="error-body">
                        <div className="error-q">{err.q?.length > 90 ? err.q.slice(0, 88) + '…' : err.q || '—'}</div>
                        <div className="error-meta">
                          <span className="topic-tag" style={{ fontSize: 10 }}>{TOPIC_LABELS[err.topic] || err.topic || 'Ostalo'}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {errors.length > 15 && <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', paddingTop: 10 }}>Prikazano 15 od {errors.length} — za detalje idi na &apos;Ponovi greške&apos;</div>}
            </div>
          )
        )}

        {/* ── Tab: Napredak ── */}
        {tab === 'napredak' && (
          <div className="nap-wrap">
            {/* NCE usporedba */}
            {history.length > 0 && (() => {
              // ilustrativni podaci — nema navedenog službenog izvora, ne koristi kao stvarne NCVVO podatke
              const NCE_DATA = { 2025: { avg: 61, pass: 78, label: '2024./2025.' }, 2024: { avg: 59, pass: 76, label: '2023./2024.' }, 2023: { avg: 57, pass: 74, label: '2022./2023.' }, 2022: { avg: 56, pass: 73, label: '2021./2022.' } }
              const userAvg = Math.round(history.reduce((s, h) => s + h.pct, 0) / history.length)
              const latestYear = Math.max(...history.map(h => parseInt(h.examKey) || 0))
              const nce = NCE_DATA[latestYear] || NCE_DATA[2024]
              const diff = userAvg - nce.avg
              const diffColor = diff >= 10 ? 'var(--green)' : diff >= 0 ? 'var(--teal)' : diff >= -10 ? 'var(--gold)' : 'var(--red)'
              const msg = diff >= 10 ? '🏆 Značajno iznad orijentacijskog prosjeka!'
                : diff >= 0 ? `✅ Iznad orijentacijskog prosjeka za ${diff}%.`
                : diff >= -10 ? `⚠️ Ispod orijentacijskog prosjeka za ${Math.abs(diff)}%.`
                : '📚 Daleko ispod orijentacijskog prosjeka.'
              return (
                <div className="nap-card">
                  <div className="nap-card-hdr">
                    <div className="nap-card-title">Usporedba s orijentacijskim prosjekom</div>
                    <span className="nap-card-src">Ilustrativna referenca · {nce.label}</span>
                  </div>
                  <div className="nap-card-note" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>
                    Referentne brojke su ilustrativne — nisu službeni podaci NCVVO-a.
                  </div>
                  <div className="nap-nce-stats">
                    {[
                      { val: userAvg + '%', lbl: 'Tvoj prosjek', col: 'var(--blue)' },
                      { val: nce.avg + '%', lbl: 'Orijentacijski prosjek', col: 'var(--muted)' },
                    ].map(s => <div key={s.lbl} className="nap-stat-box"><div className="nap-stat-num" style={{ color: s.col }}>{s.val}</div><div className="nap-stat-lbl">{s.lbl}</div></div>)}
                    <div className="nap-stat-box nap-stat-diff" style={{ background: diff >= 0 ? 'var(--green-d)' : 'var(--red-d)', borderColor: diff >= 0 ? 'rgba(30,122,62,.2)' : 'rgba(196,48,48,.2)' }}>
                      <div className="nap-stat-num" style={{ color: diffColor }}>{(diff >= 0 ? '+' : '') + diff}%</div>
                      <div className="nap-stat-lbl">Razlika</div>
                    </div>
                  </div>
                  <div className="nap-bars">
                    {[{ label: 'Ti', pct: userAvg, color: 'var(--blue)' }, { label: 'Orijentacijski prosjek', pct: nce.avg, color: 'var(--muted)' }, { label: 'Prolaznost', pct: nce.pass, color: 'var(--gold)' }]
                      .map(({ label, pct, color }) => (
                        <div key={label} className="nap-bar-row">
                          <div className="nap-bar-label">{label}</div>
                          <div className="nap-bar-track"><div className="nap-bar-fill" style={{ width: Math.min(100, pct) + '%', background: color }} /></div>
                          <div className="nap-bar-pct">{pct}%</div>
                        </div>
                      ))}
                  </div>
                  <div className="nap-insight" style={{ color: diffColor }}>{msg}</div>
                </div>
              )
            })()}

            {/* Trend */}
            {history.length >= 2 && <div className="nap-card">
              <div className="nap-card-hdr"><div className="nap-card-title">Trend rezultata</div></div>
              <TrendGraph history={history} />
            </div>}

            {/* Predikcija */}
            {history.length >= 2 && <div className="nap-card">
              <div className="nap-card-hdr"><div className="nap-card-title">Predikcija ocjene</div></div>
              <GradePrediction history={history} />
            </div>}

            {/* Simulacija vs Vježbanje */}
            {(simHistory.length > 0 || vjezbaHistory.length > 0) && <div className="nap-card">
              <div className="nap-card-hdr"><div className="nap-card-title">Simulacija vs Vježbanje</div></div>
              <div className="nap-mode-grid">
                {[
                  { label: '🎓 Simulacija', hist: simHistory, avg: simAvg, color: 'var(--blue)' },
                  { label: '🎯 Vježbanje', hist: vjezbaHistory, avg: vjezbaAvg, color: 'var(--teal)' },
                ].map(({ label, hist, avg, color }) => (
                  <div key={label} className="nap-mode-card">
                    <div className="nap-mode-label">{label}</div>
                    {hist.length === 0 ? <div className="nap-mode-empty">Još nema podataka</div> : (
                      <div className="nap-mode-stats">
                        <div className="nap-mode-row"><span>Ispita</span><strong>{hist.length}</strong></div>
                        <div className="nap-mode-row"><span>Prosjek</span><strong style={{ color: avg >= 55 ? 'var(--green)' : 'var(--red)' }}>{avg}%</strong></div>
                        <div className="nap-mode-row"><span>Zadnji</span><strong>{[...hist].pop()?.pct}%</strong></div>
                        <div className="nap-mode-bar"><div style={{ width: Math.min(100, avg) + '%', height: '100%', background: color, borderRadius: 99, transition: 'width .8s ease' }} /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {modeDiff !== null && <div className="nap-insight">
                {modeDiff > 5 ? `💡 Razlika od ${Math.abs(modeDiff)}% između modova — uvježbaj više simulacija.`
                  : modeDiff > 0 ? '✅ Mala razlika između modova. Nastavi sa simulacijama.'
                  : '🏆 Simulacija ti ide odlično!'}
              </div>}
            </div>}

            {/* Zadnjih ispita */}
            {history.length > 0 && <div className="nap-card">
              <div className="nap-card-hdr"><div className="nap-card-title">Zadnjih {Math.min(8, history.length)} ispita</div></div>
              <div className="nap-history">
                {[...history].reverse().slice(0, 8).map((h, i) => {
                  const gc2 = GC[h.grade] || 'var(--gold)'
                  return (
                    <div key={i} className="nap-hist-row">
                      <div className="nap-hist-grade" style={{ color: gc2, borderColor: gc2 }}>{h.grade}</div>
                      <div className="nap-hist-info">
                        <div className="nap-hist-label">{h.examLabel || h.examKey}</div>
                        <div className="nap-hist-meta">
                          {h.date}
                          <span className="nap-hist-pct" style={{ color: gc2 }}>{h.pct}%</span>
                          {h.mode && <span className="nap-hist-mode">{h.mode}</span>}
                        </div>
                      </div>
                      <div className="nap-hist-bar-wrap">
                        <div className="nap-hist-bar" style={{ width: h.pct + '%', background: gc2 }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>}
          </div>
        )}

        {/* ── Tab: Godine ── */}
        {tab === 'godine' && (history.length === 0 ? noData : (() => {
          const byYear = {}
          history.forEach(h => {
            if (!h.examKey) return
            const exam = EXAMS[h.examKey]
            if (!exam) return
            if (!byYear[exam.year]) byYear[exam.year] = []
            byYear[exam.year].push({ ...h, exam })
          })
          const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)
          return (
            <div className="nap-wrap">
              <div className="nap-card">
                <div className="nap-card-hdr"><div className="nap-card-title">Rezultati po godištu ispita</div><span className="nap-card-src">{years.length} godišta</span></div>
                <div className="god-year-list">
                  {years.map(yr => {
                    const sessions = byYear[yr]
                    const avg = Math.round(sessions.reduce((s, h) => s + h.pct, 0) / sessions.length)
                    const best = Math.max(...sessions.map(h => h.pct))
                    const worst = Math.min(...sessions.map(h => h.pct))
                    const col = avg >= 70 ? 'var(--green)' : avg >= 55 ? 'var(--gold)' : 'var(--red)'
                    const osnovne = sessions.filter(h => h.exam.razina === 'osnovna')
                    const vise = sessions.filter(h => h.exam.razina === 'visa')
                    const osAvg = osnovne.length ? Math.round(osnovne.reduce((s, h) => s + h.pct, 0) / osnovne.length) : null
                    const viAvg = vise.length ? Math.round(vise.reduce((s, h) => s + h.pct, 0) / vise.length) : null
                    return (
                      <div key={yr} className="god-year-card">
                        <div className="god-year-hdr">
                          <div className="god-year-num" style={{ color: col }}>{yr}.</div>
                          <div className="god-year-info">
                            <div className="god-year-avg" style={{ color: col }}>{avg}%</div>
                            <div className="god-year-range">{sessions.length} sesija · {worst}% – {best}%</div>
                          </div>
                          <div className="god-year-razine">
                            {osAvg != null && <span className="god-razina-pill">B: {osAvg}%</span>}
                            {viAvg != null && <span className="god-razina-pill god-razina-visa">★A: {viAvg}%</span>}
                          </div>
                        </div>
                        <div className="god-year-bar-wrap">
                          <div className="god-year-bar" style={{ width: Math.min(100, avg) + '%', background: col }} />
                        </div>
                        <div className="god-sessions">
                          {sessions.map((h, i) => {
                            const sc = h.pct >= 70 ? 'var(--green)' : h.pct >= 55 ? 'var(--gold)' : 'var(--red)'
                            return (
                              <div key={i} className="god-session-chip" style={{ color: sc, background: sc.replace('var(', 'rgba(').replace(')', ',.12)'), borderColor: sc.replace('var(', 'rgba(').replace(')', ',.3)') }}>
                                <span>{h.pct}%</span>
                                <span className="god-chip-label">{h.exam.label}{h.exam.razina === 'visa' ? ' ★' : ''}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })())}

        {/* ── Tab: Heatmap ── */}
        {tab === 'heatmap' && (history.length === 0 ? noData : (() => {
          const dateMap = {}
          history.forEach(h => {
            if (!h.date) return
            if (!dateMap[h.date]) dateMap[h.date] = { exams: 0, totalPct: 0, mins: 0 }
            dateMap[h.date].exams++
            dateMap[h.date].totalPct += h.pct || 0
          })
          function dateToHr(d) { return d.toLocaleDateString('hr') }
          const today = new Date(); today.setHours(0, 0, 0, 0)
          const startDay = new Date(today); startDay.setDate(today.getDate() - 182)
          const dow = startDay.getDay()
          startDay.setDate(startDay.getDate() + (dow === 0 ? -6 : 1 - dow))
          const weeks = []
          let cur = new Date(startDay)
          while (cur <= today) {
            const week = []
            for (let d = 0; d < 7; d++) {
              const dateStr = dateToHr(new Date(cur))
              week.push({ date: new Date(cur), dateStr, data: dateMap[dateStr] || null, isToday: cur.toDateString() === today.toDateString(), isFuture: cur > today })
              cur.setDate(cur.getDate() + 1)
            }
            weeks.push(week)
          }
          const months = ['Sij', 'Velj', 'Ožu', 'Tra', 'Svi', 'Lip', 'Srp', 'Kol', 'Ruj', 'Lis', 'Stu', 'Pro']
          const monthLabels = []
          weeks.forEach((week, wi) => {
            if (wi === 0 || week[0].date.getDate() <= 7) monthLabels[wi] = months[week[0].date.getMonth()]
          })
          function cellColor(data, isFuture, isToday) {
            if (isFuture) return 'transparent'
            if (!data || data.exams === 0) return 'var(--s3)'
            const n = data.exams
            if (n >= 3) return 'var(--green)'
            if (n >= 2) return '#2a9e58'
            return '#1e7a3e'
          }
          function cellOpacity(data) {
            if (!data || data.exams === 0) return 1
            const n = data.exams
            return n >= 3 ? 1 : n >= 2 ? 0.75 : 0.5
          }
          const totalDays = Object.keys(dateMap).length
          const totalSessions = history.length
          const currentStreak = userData?.streak || 0

          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Kalendar učenja — zadnjih 26 tjedana</div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                {[
                  { label: 'Aktivni streak', val: currentStreak + '🔥', col: 'var(--gold)' },
                  { label: 'Aktivni dani', val: totalDays, col: 'var(--green)' },
                  { label: 'Ukupno sesija', val: totalSessions, col: 'var(--teal)' },
                ].map((s, ii) => (
                  <div key={ii} style={{ flex: '1 1 80px', minWidth: 80, background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: s.col, fontFamily: 'var(--fh)' }}>{s.val}</div>
                    <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 0, minWidth: 480 }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 4, paddingLeft: 24 }}>
                    {weeks.map((week, wi) => (
                      <div key={wi} style={{ width: 13, fontSize: 9, color: 'var(--muted)', fontWeight: 600, textAlign: 'left', whiteSpace: 'nowrap', overflow: 'visible' }}>
                        {monthLabels[wi] || ''}
                      </div>
                    ))}
                  </div>
                  {['Pon', 'Sri', 'Pet'].map((dayLabel, di) => {
                    const dayIndex = [1, 3, 5][di]
                    return (
                      <div key={di} style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 3 }}>
                        <div style={{ width: 20, fontSize: 9, color: 'var(--muted)', textAlign: 'right', paddingRight: 3, flexShrink: 0 }}>{dayLabel}</div>
                        {weeks.map((week, wi) => {
                          const cell = week[dayIndex]
                          if (!cell) return <div key={wi} style={{ width: 13, height: 13 }} />
                          const bg = cellColor(cell.data, cell.isFuture, cell.isToday)
                          const opacity = cell.data ? cellOpacity(cell.data) : 1
                          return (
                            <div key={wi} style={{
                              width: 13, height: 13, borderRadius: 3, background: bg, opacity,
                              border: cell.isToday ? '2px solid var(--gold)' : '1px solid transparent',
                              cursor: cell.data ? 'pointer' : 'default',
                            }}
                              onMouseEnter={() => cell.data && setTooltip({ ...cell.data, dateStr: cell.dateStr })}
                              onMouseLeave={() => setTooltip(null)}
                            />
                          )
                        })}
                      </div>
                    )
                  })}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, paddingLeft: 24, fontSize: 10, color: 'var(--muted)' }}>
                    Manje
                    {[0, 0.5, 0.75, 1].map((op, ii) => <div key={ii} style={{ width: 13, height: 13, borderRadius: 3, background: 'var(--green)', opacity: op || 0.15 }} />)}
                    Više
                  </div>
                </div>
              </div>
              {tooltip && (
                <div style={{ background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '8px 12px', fontSize: 12, marginTop: 8, display: 'inline-block' }}>
                  <strong>{tooltip.dateStr}</strong>
                  <span style={{ marginLeft: 8, color: 'var(--muted)' }}>{tooltip.exams} sesija</span>
                  {tooltip.exams > 0 && tooltip.totalPct > 0 && (
                    <span style={{ marginLeft: 8, fontWeight: 700, color: Math.round(tooltip.totalPct / tooltip.exams) >= 70 ? 'var(--green)' : Math.round(tooltip.totalPct / tooltip.exams) >= 55 ? 'var(--gold)' : 'var(--red)' }}>
                      · Ø {Math.round(tooltip.totalPct / tooltip.exams)}%
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })())}

        {/* ── Tab: Najteža ── */}
        {tab === 'teska' && (history.length === 0 ? noData : (() => {
          const wrongMap = {}
          history.forEach(h => {
            if (!h.answers || !h.examKey) return
            const exam = EXAMS[h.examKey]
            if (!exam) return
            exam.qs.forEach(q => {
              if (q.type === 'sa' || q.type === 'es') return
              const ans = h.answers[q.id]
              if (ans === undefined || ans === null) return
              const ok = chk(q, ans)
              const key = h.examKey + '__' + q.id
              if (!wrongMap[key]) wrongMap[key] = { q, examKey: h.examKey, wrong: 0, seen: 0 }
              if (ok === false) wrongMap[key].wrong++
              if (ok === true || ok === false) wrongMap[key].seen++
            })
          })
          const hardest = Object.values(wrongMap)
            .filter(x => x.wrong > 0)
            .map(x => ({ ...x, pct: Math.round(x.wrong / (x.seen || 1) * 100) }))
            .sort((a, b) => b.wrong - a.wrong || b.pct - a.pct)
            .slice(0, 20)

          if (hardest.length === 0) return (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🏆</div>
              <div style={{ fontSize: 14, color: 'var(--muted)' }}>Nema pogrešnih odgovora — odličan rad!</div>
            </div>
          )

          return (
            <div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>Pitanja koja si griješio najčešće (iz svih sesija)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {hardest.map((item, i) => {
                  const ex = EXAMS[item.examKey]
                  const exLabel = ex ? ex.year + '. — ' + (ex.season === 'ljeto' ? 'Ljetni' : ex.season === 'zima' ? 'Zimski' : 'Jesenski') : item.examKey
                  return (
                    <div key={i} style={{ background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ minWidth: 44, height: 44, borderRadius: 'var(--r)', background: 'var(--red-d)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(196,48,48,.2)' }}>
                        <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--red)', lineHeight: 1 }}>{item.wrong}×</div>
                        <div style={{ fontSize: 9, color: 'var(--muted)' }}>grešaka</div>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', gap: 6, marginBottom: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                          <span className="topic-tag" style={{ fontSize: 10 }}>{TOPIC_LABELS[item.q.topic] || item.q.topic}</span>
                          <span style={{ fontSize: 10, color: 'var(--muted)' }}>{exLabel}</span>
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.5, marginBottom: item.q.opts ? 6 : 0 }}>{item.q.q}</div>
                        {item.q.opts && item.q.sol?.cl && (
                          <div style={{ fontSize: 11, color: 'var(--green)', background: 'var(--green-d)', padding: '4px 8px', borderRadius: 4, display: 'inline-block' }}>
                            ✓ Točno: {item.q.sol.cl}) {item.q.opts[LL.indexOf(item.q.sol.cl)]}
                          </div>
                        )}
                        {item.q.exp && <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, fontStyle: 'italic' }}>💡 {item.q.exp}</div>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })())}

        {/* ── Tab: Teme ── */}
        {tab === 'teme' && (topicList.length === 0
          ? <div style={{ color: 'var(--muted)', fontSize: 13, textAlign: 'center', padding: '32px 0' }}>📊 Nema podataka. Riješi barem jedan ispit.</div>
          : (
            <div>
              {/* Weak topics shortcuts */}
              {onFilter && (() => {
                const weakTopics = Object.keys(TOPIC_LABELS).map(key => {
                  const t = topicStats[key]
                  const pct = t && t.total ? Math.round(t.correct / t.total * 100) : null
                  return { key, pct }
                }).filter(t => t.pct !== null && t.pct < 60).sort((a, b) => a.pct - b.pct).slice(0, 4)
                if (!weakTopics.length) return null
                return (
                  <div style={{ background: 'var(--red-d)', border: '1px solid rgba(196,48,48,.2)', borderRadius: 'var(--rr)', padding: '14px 16px', marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 10 }}>⚠️ Slabe teme — preporučeno vježbanje</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {weakTopics.map(({ key, pct }) => (
                        <button key={key} className="btn" style={{ fontSize: 12, padding: '5px 12px', background: 'var(--s1)', border: '1px solid rgba(196,48,48,.3)', color: 'var(--red)' }}
                          onClick={() => onFilter(key)}>
                          {(TOPIC_LABELS[key] || key)} {pct}%
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })()}

              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>🟢 ≥70%  🟡 50–70%  🔴 &lt;50%  ⬜ Nema podataka</div>
              <div className="heatmap-grid">
                {Object.keys(TOPIC_LABELS).map(key => {
                  const t = topicStats[key]
                  const pct = t && t.total ? Math.round(t.correct / t.total * 100) : null
                  const cls = pct === null ? 'empty' : pct >= 70 ? 'hot' : pct >= 50 ? 'mid' : 'cold'
                  return (
                    <div key={key} className={'heatmap-cell ' + cls}
                      style={{ cursor: pct !== null ? 'pointer' : 'default' }}
                      onClick={() => pct !== null && setDrillTopic(key)}>
                      <div className="heatmap-topic">{TOPIC_LABELS[key]}</div>
                      <div className="heatmap-pct">{pct === null ? '—' : pct + '%'}</div>
                      <div className="heatmap-sub">{t ? t.correct + '/' + t.total + ' točnih' : 'Nije rješavano'}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        )}

        {/* ── Tab: Tipovi ── */}
        {tab === 'tipovi' && (history.length === 0 ? noData : (() => {
          const TYPE_META = {
            mc: { label: 'Višestruki izbor (MC)', color: 'var(--blue)', icon: '🔵', desc: 'Odabir jednog točnog odgovora od 4' },
            ms: { label: 'Višestruke kombinacije (MS)', color: 'var(--teal)', icon: '🟢', desc: 'Odabir dvaju točnih odgovora' },
            mat: { label: 'Povezivanje (MAT)', color: 'var(--gold)', icon: '🟡', desc: 'Sparivanje pojmova i definicija' },
            fb: { label: 'Dopunjavanje (FB)', color: '#c084fc', icon: '🟣', desc: 'Upisivanje pojma koji nedostaje' },
            sa: { label: 'Kratki odgovor (SA)', color: 'var(--green)', icon: '🟢', desc: 'Rečenica ili dva' },
            ins: { label: 'Umetanje (INS)', color: 'var(--blue)', icon: '🔵', desc: 'Umetanje rečenice u tekst' },
          }
          const typeAcc = {}
          history.forEach(h => {
            if (!h.breakdown) return
            h.breakdown.forEach(b => {
              if (!typeAcc[b.key]) typeAcc[b.key] = { correct: 0, total: 0 }
              typeAcc[b.key].correct += b.correct || 0
              typeAcc[b.key].total += b.total || 0
            })
          })
          // Also compute from answers if breakdown not saved
          history.forEach(h => {
            if (h.breakdown || !h.examKey || !h.answers) return
            const exam = EXAMS[h.examKey]
            if (!exam) return
            exam.qs.forEach(q => {
              if (!typeAcc[q.type]) typeAcc[q.type] = { correct: 0, total: 0 }
              if (q.type === 'sa' || q.type === 'es') return
              typeAcc[q.type].total++
              if (chk(q, h.answers[q.id]) === true) typeAcc[q.type].correct++
            })
          })

          const rows = Object.entries(typeAcc)
            .map(([key, v]) => ({ key, ...(TYPE_META[key] || {}), correct: v.correct, total: v.total, pct: v.total ? Math.round(v.correct / v.total * 100) : null }))
            .filter(r => r.total > 0)
            .sort((a, b) => (b.pct || 0) - (a.pct || 0))

          if (!rows.length) return noData
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rows.map(r => (
                <div key={r.key} style={{ background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--rr)', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: 18 }}>{r.icon || '📊'}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{r.label || r.key}</div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>{r.desc || ''}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 800, color: r.pct >= 70 ? 'var(--green)' : r.pct >= 55 ? 'var(--gold)' : 'var(--red)' }}>
                      {r.pct !== null ? r.pct + '%' : '—'}
                    </div>
                  </div>
                  {r.pct !== null && (
                    <>
                      <div style={{ height: 6, background: 'var(--s3)', borderRadius: 99, overflow: 'hidden', marginBottom: 4 }}>
                        <div style={{ height: '100%', width: r.pct + '%', background: r.pct >= 70 ? 'var(--green)' : r.pct >= 55 ? 'var(--gold)' : 'var(--red)', borderRadius: 99, transition: 'width 1s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)' }}>
                        <span>{r.correct} točnih od {r.total}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )
        })())}

        {/* ── Tab: Savjeti ── */}
        {tab === 'savjeti' && (
          <div className="sav-wrap">
            <div className="nap-card">
              <div className="nap-card-hdr">
                <div className="nap-card-title">Personalizirane preporuke</div>
                <span className="nap-card-src">{getRecommendations().length} savjeta</span>
              </div>
              <div className="rec-list">
                {getRecommendations().map((r, i) => {
                  const badgeColor = r.badge === 'urgent' ? 'var(--red)' : r.badge === 'good' ? 'var(--green)' : 'var(--blue)'
                  const badgeLabel = r.badge === 'urgent' ? 'Prioritet' : r.badge === 'good' ? 'Odlično' : 'Savjet'
                  return (
                    <div key={i} className={'rec-item rec-' + r.badge}>
                      <div className="rec-ico-wrap" style={{ background: badgeColor + '18', borderColor: badgeColor + '30' }}>
                        <span className="rec-icon">{r.icon}</span>
                      </div>
                      <div className="rec-content">
                        <div className="rec-header">
                          <div className="rec-title">{r.title}</div>
                          <span className="rec-badge" style={{ color: badgeColor, background: badgeColor + '15', borderColor: badgeColor + '30' }}>{badgeLabel}</span>
                        </div>
                        <div className="rec-desc">{r.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Brzina rješavanja */}
            {allTimes.length > 0 && (
              <div className="nap-card">
                <div className="nap-card-hdr">
                  <div className="nap-card-title">Brzina rješavanja</div>
                  <span className="nap-card-src">{allTimes.length} pitanja mjereno</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 12 }}>
                  {[
                    { val: avgTime + 's', lbl: 'Prosjek / pitanju', col: 'var(--blue)' },
                    { val: avgTime <= 45 ? '⚡ Brzo' : avgTime <= 90 ? '✓ Dobro' : '⚠ Sporo', lbl: 'Tempo', col: avgTime <= 45 ? 'var(--green)' : avgTime <= 90 ? 'var(--gold)' : 'var(--red)' },
                    { val: Math.round(90 * 60 / (avgTime || 60)).toString(), lbl: 'Pitanja / 90min', col: 'var(--teal)' },
                  ].map(s => (
                    <div key={s.lbl} style={{ background: 'var(--s2)', borderRadius: 'var(--r)', padding: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: s.col, fontFamily: 'var(--fh)' }}>{s.val}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kritična pitanja */}
            {criticalQs.length > 0 && (
              <div className="nap-card">
                <div className="nap-card-hdr">
                  <div className="nap-card-title">⏱ Kritična pitanja — točno ali sporo</div>
                  <span className="nap-card-src">{criticalQs.length} pitanja</span>
                </div>
                <div className="sav-hint">Odgovarao/la si točno, ali sporo (&gt;90s). Možda si pogodio/la — uvježbaj za sigurnost.</div>
                <div className="crit-list">
                  {criticalQs.map((item, i) => {
                    const ex = EXAMS[item.examKey]
                    const exLabel = ex ? ex.year + '. — ' + (ex.season === 'ljeto' ? 'Ljetni' : ex.season === 'zima' ? 'Zimski' : 'Jesenski') : item.examKey
                    const mins = Math.floor(item.avgTime / 60)
                    const secs = item.avgTime % 60
                    const timeStr = mins > 0 ? mins + 'm ' + secs + 's' : secs + 's'
                    return (
                      <div key={i} className="crit-item">
                        <div className="crit-time">
                          <div className="crit-time-val">{timeStr}</div>
                          {item.count > 1 && <div className="crit-time-cnt">{item.count}×</div>}
                        </div>
                        <div className="crit-body">
                          <div className="crit-meta">
                            <span className="topic-tag" style={{ fontSize: 10 }}>{TOPIC_LABELS[item.q.topic] || item.q.topic}</span>
                            <span className="crit-exam">{exLabel}</span>
                          </div>
                          <div className="crit-q">{item.q.q}</div>
                          {item.q.sol?.cl && item.q.opts && (
                            <div className="crit-ans">✓ {item.q.sol.cl}) {item.q.opts[LL.indexOf(item.q.sol.cl)] || ''}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
