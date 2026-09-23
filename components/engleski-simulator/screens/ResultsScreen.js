'use client'
import React, { createElement as e, useState, useEffect, Fragment } from 'react'
import ShareStoryCard from '@/components/shared/ShareStoryCard'
import { LockedResultsBlock } from '@/components/discere/paywall'
import { sectionScores, weightedEstimate, scoringUnits } from '@/lib/engleski-simulator/examStructure'
import { isRealExamKey } from '@/lib/engleski-simulator/cloudSync'
import { GRADE_NOTE, GRADE_NOTE_WRITING, GC_HEX } from '@/lib/engleski-simulator/constants'

const UPGRADE_HREF = '/pro?from=eng-results&plan=standard'

function AnimatedRing({ pct, gc, g }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const [dash, setDash] = React.useState(0)
  React.useEffect(() => {
    const t = setTimeout(() => setDash(circ * (pct / 100)), 100)
    return () => clearTimeout(t)
  }, [pct, circ])
  return e('div', { className: 'score-ring score-anim' },
    e('svg', { width: 140, height: 140, viewBox: '0 0 140 140' },
      e('circle', { cx: 70, cy: 70, r, fill: 'none', stroke: 'var(--s3)', strokeWidth: 10 }),
      e('circle', {
        cx: 70,
        cy: 70,
        r,
        fill: 'none',
        stroke: gc,
        strokeWidth: 10,
        strokeDasharray: circ,
        strokeDashoffset: circ - dash,
        style: { transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)' },
        strokeLinecap: 'round',
      }),
    ),
    e('div', { className: 'score-ring-text' },
      e('div', { className: 'score-ring-num', style: { color: gc } }, g),
      e('div', { className: 'score-ring-pct' }, pct + '%'),
    ),
  )
}

function BreakdownCard({ label, correct, total, color }) {  const pct = total ? Math.round(correct / total * 100) : 0
  return e('div', { className: 'bd-card' },
    e('div', { className: 'bd-card-label' }, label),
    e('div', { className: 'bd-bar-wrap' },
      e('div', { className: 'bd-bar', style: { width: pct + '%', background: color } }),
    ),
    e('div', { className: 'bd-score', style: { color } }, correct + ' / ' + total,
      e('span', { style: { color: 'var(--muted)', fontWeight: 400, marginLeft: 6 } }, pct + '%'),
    ),
  )
}

// Rana zaštita: bez ispita (npr. povratak na 'results' bez odabranog ispita)
// renderiranje bi palo na exam.qs — roditelj u tom slučaju prikazuje fallback.
// Guard je u omotaču da hookovi u ResultsInner nikad ne budu uvjetni.
export function Results(props) {
  if (!props.exam || !Array.isArray(props.exam.qs)) return null
  return e(ResultsInner, props)
}

function ResultsInner({
  exam,
  answers,
  onBack,
  userData,
  qTimes = {},
  examMode = false,
  onPracticeErrors,
  onGoFilter,
  onGoStats,
  chk,
  grade,
  GC,
  TLBL,
  TOPIC_LABELS,
  LL,
  AnswerHelper,
  AnalyticsPanel,
  LEVEL_NAMES,
  getLevel,
  canSeeAnalysis = true,
}) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const [showRevlist, setShowRevlist] = useState(true)
  const QSR = exam.qs
  const autoQ = QSR.filter(q => q.type !== 'sa' && q.type !== 'es')
  const manQ = QSR.filter(q => q.type === 'sa' || q.type === 'es')
  let cor = 0
  autoQ.forEach(q => { if (chk(q, answers[q.id]) === true) cor++ })
  const pct = autoQ.length ? Math.round(cor / autoQ.length * 100) : 0
  const g = grade(pct)
  const gc = GC[g]
  const wrongAutoQ = autoQ.filter(q => chk(q, answers[q.id]) === false)
  const types = [
    { key: 'mc', label: 'Jedan odgovor', color: 'var(--blue)' },
    { key: 'ms', label: 'Više odgovora', color: 'var(--teal)' },
    { key: 'mat', label: 'Povezivanje', color: 'var(--gold)' },
    { key: 'fb', label: 'Dopunjavanje', color: '#c084fc' },
  ]
  const breakdown = types.map(t => {
    const tqs = QSR.filter(q => q.type === t.key)
    return { ...t, correct: tqs.filter(q => chk(q, answers[q.id]) === true).length, total: tqs.length }
  }).filter(t => t.total > 0)
  const topicBreak = {}
  autoQ.forEach(q => {
    const t = q.topic || 'ostalo'
    if (!topicBreak[t]) topicBreak[t] = { correct: 0, total: 0, label: TOPIC_LABELS[t] || t }
    topicBreak[t].total++
    if (chk(q, answers[q.id]) === true) topicBreak[t].correct++
  })
  // Rezultat po ispitnim cjelinama s NCVVO ponderima. Računa se uvijek iz exam+answers
  // pa radi i za stare stavke povijesti koje u rezultatu nemaju 'sectionScores'.
  const secScores = sectionScores(exam, answers, chk)
  const weighted = weightedEstimate(secScores)
  const hasManualUnit = secScores.some(su => !su.autoGraded)
  // Objašnjenje pondera se generira iz strukture razine, filtrirano na cjeline
  // koje se u ovom ispitu stvarno pojavljuju (npr. ispit bez slušanja).
  const weightNote = scoringUnits(exam.razina)
    .filter(u => secScores.some(su => su.id === u.id))
    .map(u => u.label + ' ' + (Math.abs(u.weight - 1 / 3) < 0.01 ? '1/3' : Math.round(u.weight * 100) + ' %'))
    .join(', ')
  const topicList = Object.values(topicBreak).filter(t => t.total > 0).sort((a, b) => a.correct / a.total - b.correct / b.total)
  const [showAll, setShowAll] = useState(false)

  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, 'Rezultati'),
      e('span', { className: 'nbadge' }, exam.year + ' — ' + exam.label),
    ),
    e('div', { className: 'results' },
      e('div', { className: 'reshero' },
        e('div', { style: { marginBottom: 16 } }, e(AnimatedRing, { pct, gc, g })),
        e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 } },
          e('h2', { style: { margin: 0 } }, exam.year + '. ' + exam.label),
          examMode && e('span', { className: 'exam-mode-chip' }, 'Simulacija'),
        ),
        e('div', { style: { fontSize: 11, color: 'var(--muted)', marginBottom: 6 } }, GRADE_NOTE + (hasManualUnit ? GRADE_NOTE_WRITING : '')),
        e('p', { style: { color: 'var(--muted)', fontSize: 14, marginTop: 6 } },
          (() => {
            const history = (userData?.history || [])
            const streak = userData?.streak || 0
            const totalExams = history.length
            const prevPcts = history.slice(-6, -1).map(h => h.pct)
            const prevAvg = prevPcts.length ? Math.round(prevPcts.reduce((a, b) => a + b, 0) / prevPcts.length) : null
            const improved = prevAvg !== null && pct > prevAvg
            const declined = prevAvg !== null && pct < prevAvg - 10
            const isFirst = totalExams <= 1
            const isStreak = streak >= 3
            const isBigStreak = streak >= 7
            const isPersonalBest = history.length > 1 && pct === Math.max(...history.map(h => h.pct))

            if (pct === 100) return 'Savršeno! 💯 Sve točno — ovo je vrhunski rezultat. Spreman/na si za maturu!'
            if (pct >= 90) {
              if (isBigStreak) return streak + ' dana za redom i ' + pct + '% — nevjerojatan učinak! 🔥 Matura je formalnost.'
              if (isPersonalBest) return 'Novi osobni rekord — ' + pct + '%! 🏆 Ovaj rezultat govori sam za sebe.'
              if (isStreak) return streak + ' dana zaredom i ' + pct + '% — streak se isplati! 🔥'
              return 'Izvanredan rezultat! Još malo vježbanja i matura je sigurna. 🏆'
            }
            if (pct >= 70) {
              if (isPersonalBest) return 'Novi osobni rekord — ' + pct + '%! Pravi smjer, nastavi ovim tempom. 📈'
              if (improved) return 'Napredak! Prošli put ' + prevAvg + '%, sada ' + pct + '% — nastaviš li ovim tempom, prolaz je zajamčen. 📈'
              if (isBigStreak) return streak + ' dana učenja za redom — i vidi se! ' + pct + '% je odličan rezultat. 🔥'
              if (isStreak) return streak + ' dana učenja za redom i prolaz — streak radi! 🔥'
              if (isFirst) return 'Odličan početak! Nastavi vježbati i rezultati će samo rasti.'
              return 'Položio/la si! Fokusiraj se na slabe teme i popni se iznad 80%.'
            }
            if (pct >= 55) {
              if (declined) return 'Malo slabije nego inače (' + prevAvg + '%) — to se dogodi. Pogledaj koje teme su bile problem.'
              if (improved) return 'Bolje nego prošli put (' + prevAvg + '%) — pravi smjer! Još malo i prolaz je siguran. 📈'
              if (isPersonalBest) return 'Novi osobni rekord ' + pct + '% — na pravom si putu! Još malo pa prolaz. 📈'
              if (isStreak) return 'Streak od ' + streak + ' dana radi — još malo i preskočit ćeš granicu prolaza!'
              return 'Na granici prolaza. Vježbaj teme gdje griješiš — napredak dolazi brzo!'
            }
            if (pct >= 40) {
              if (isFirst) return 'Prvi ispit je uvijek najteži. Pogledaj slabe teme i kreni s ponavljanjem — napredak će biti brz.'
              if (improved) return 'Bolje od prošlog puta (' + prevAvg + '%) — gradivo polako pada na mjesto. Nastavi! 📈'
              return 'Nije prošlo ovaj put — ali podaci pokazuju gdje griješiš. Koristi ih i vježbaj slabe teme!'
            }
            if (isFirst) return 'Svaki početak je težak — ovo ti pokazuje što trebaš naučiti. Kreni s greškama i dnevnim izazovom! 💪'
            if (declined) return 'Puno niže od prosjeka (' + prevAvg + '%) — možda umor? Kratka pauza pa intenzivno ponavljanje.'
            return 'Svaki pokušaj otkriva što ne znaš — to je vrijednost vježbanja. Kreni s ponavljanjem! 💪'
          })(),
        ),
        e('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(90px,1fr))', gap: 10, marginTop: 18, maxWidth: 320, margin: '18px auto 0' } },
          e('div', { className: 'stat', style: { minWidth: 90 } }, e('div', { className: 'statn', style: { color: 'var(--green)' } }, cor), e('div', { className: 'statl' }, 'Točnih')),
          e('div', { className: 'stat', style: { minWidth: 90 } }, e('div', { className: 'statn', style: { color: 'var(--red)' } }, autoQ.length - cor), e('div', { className: 'statl' }, 'Netočnih')),
          manQ.length > 0 && e('div', { className: 'stat', style: { minWidth: 90 } }, e('div', { className: 'statn', style: { color: 'var(--gold)' } }, manQ.length), e('div', { className: 'statl' }, 'Za provjeru')),
        ),
      ),
      // Kartica po ispitnim cjelinama ima smisla samo za prave (službene) ispite —
      // virtualne sesije i filtrirana vježbanja nemaju NCVVO strukturu cjelina.
      secScores.length > 0 && isRealExamKey(exam.key) && e('div', { style: { marginBottom: 22 } },
        e('div', { className: 'results-section-title' }, 'Po ispitnim cjelinama'),
        e('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
          secScores.map(su => {
            const udio = Math.round(su.weight * 100)
            const col = su.pct === null ? 'var(--gold)' : su.pct >= 70 ? 'var(--green)' : su.pct >= 50 ? 'var(--gold)' : 'var(--red)'
            return e('div', { key: su.id, style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '10px 14px' } },
              e('div', { style: { fontWeight: 700, fontSize: 13, minWidth: 120 } }, su.label),
              e('div', { style: { fontSize: 12, color: 'var(--muted)' } }, su.correct + ' / ' + su.total),
              e('div', { style: { marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: col, textAlign: 'right' } },
                su.pct === null
                  ? 'nije bodovano (ručno ocjenjivanje, udio ' + udio + ' %)'
                  : su.pct + ' % · udio ' + udio + ' %'),
            )
          }),
        ),
        weighted.pct !== null && e('div', { style: { marginTop: 8, fontSize: 13, fontWeight: 700 } },
          'Ponderirana procjena' + (hasManualUnit ? ' (bez pisanja)' : '') + ': ' + weighted.pct + ' %'),
        e('div', { style: { marginTop: 6, fontSize: 11, color: 'var(--muted)', lineHeight: 1.55 } },
          'NCVVO ponderira ' + weightNote + ' konačne ocjene (bodovi nisu udio).'),
        e('div', { style: { marginTop: 2, fontSize: 11, color: 'var(--muted)', lineHeight: 1.55 } },
          'Ponderirana procjena uzima samo automatski ocijenjene cjeline i ponovno skalira njihove udjele na 100 %.'),
      ),
      canSeeAnalysis && wrongAutoQ.length > 0 && e('div', { style: { marginBottom: 22 } },
        e('div', { className: 'results-section-title' }, 'Pogrešni odgovori (' + wrongAutoQ.length + ')'),
        e('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
          (showAll ? wrongAutoQ : wrongAutoQ.slice(0, 5)).map((q, i) => e('div', { key: i, style: { background: 'var(--red-d)', border: '1px solid rgba(196,48,48,.2)', borderRadius: 'var(--r)', padding: '10px 14px' } },
            e('div', { style: { fontSize: 11, color: 'var(--muted)', marginBottom: 3 } }, TOPIC_LABELS[q.topic] || q.topic),
            e('div', { style: { fontSize: 13, marginBottom: 6, lineHeight: 1.5 } }, q.q),
            q.type === 'mc' && e('div', { style: { fontSize: 12, display: 'flex', flexWrap: 'wrap', gap: 8 } },
              e('span', { style: { color: 'var(--red)' } }, '✗ Tvoj: ' + (answers[q.id] || '—') + ' — ' + (q.opts[LL.indexOf(answers[q.id])] || 'bez odgovora')),
              // Ključ dolazi samo uz plaćeni payload; bez njega ovaj redak
              // izostaje umjesto da sruši cijeli ekran (ADR-001).
              q.sol?.cl && e('span', { style: { color: 'var(--green)' } }, '✓ Točno: ' + q.sol.cl + ' — ' + q.opts[LL.indexOf(q.sol.cl)]),
            ),
            q.exp && e('div', { style: { fontSize: 11, color: 'var(--muted)', marginTop: 6, fontStyle: 'italic', borderTop: '1px solid var(--bdr)', paddingTop: 6 } }, '💡 ' + q.exp),
          )),
        ),
        wrongAutoQ.length > 5 && e('button', { className: 'btn btn-g', style: { marginTop: 8, fontSize: 12 }, onClick: () => setShowAll(s => !s) }, showAll ? 'Sakrij ↑' : 'Prikaži sve (' + wrongAutoQ.length + ') ↓'),
      ),
      e('div', { className: 'results-section-title' }, 'Rezultati po tipu pitanja'),
      e('div', { className: 'breakdown-grid' }, breakdown.map(b => e(BreakdownCard, { key: b.key, label: b.label, correct: b.correct, total: b.total, color: b.color }))),
      canSeeAnalysis && topicList.length > 1 && e('div', { style: { marginBottom: 22 } },
        e('div', { className: 'results-section-title' }, 'Rezultati po temi'),
        e('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 8 } },
          topicList.map((t, i) => {
            const tp = Math.round(t.correct / t.total * 100)
            const col = tp >= 70 ? 'var(--green)' : tp >= 50 ? 'var(--gold)' : 'var(--red)'
            return e('div', { key: i, className: 'topic-result-row' },
              e('div', { className: 'topic-result-pct', style: { color: col } }, tp + '%'),
              e('div', { className: 'topic-result-bar-wrap' }, e('div', { className: 'topic-result-bar', style: { width: tp + '%', background: col } })),
              e('div', { className: 'topic-result-label', title: t.label }, t.label),
            )
          }),
        ),
      ),
      canSeeAnalysis && manQ.length > 0 && e('div', { style: { background: 'var(--gold-d)', border: '1px solid var(--gold-b)', borderRadius: 'var(--r)', padding: '12px 16px', marginBottom: 22, fontSize: 13, color: 'var(--gold)' } }, '✏️ ' + manQ.length + ' pitanja (kratki odgovori i eseji) — provjeri referentne odgovore ispod.'),
      // Free nakon predaje: jedan bit po pitanju (točno/netočno/neocijenjeno) iz
      // serverskih 'scores' — bez teksta pitanja, opcija, ključa i obrazloženja.
      // Vizualno prati navigator pitanja iz ExamPlayScreena (kvadratići 44 px,
      // tokeni --green/--red, wrap da stane i na ~400 px).
      !canSeeAnalysis && autoQ.length > 0 && e('div', { style: { marginBottom: 22 } },
        e('div', { className: 'results-section-title' }, 'Po pitanjima'),
        e('div', { className: 'res-qgrid', role: 'list', style: { display: 'flex', flexWrap: 'wrap', gap: 4 } },
          autoQ.map((q, i) => {
            const ok = chk(q, answers[q.id])
            const st = ok === true ? 'ok' : ok === false ? 'bad' : 'none'
            const col = ok === true ? 'var(--green)' : ok === false ? 'var(--red)' : 'var(--muted)'
            const bg = ok === true ? 'var(--green-d)' : ok === false ? 'var(--red-d)' : 'var(--s2)'
            const ic = ok === true ? '✓' : ok === false ? '✗' : '–'
            return e('div', {
              key: q.id,
              role: 'listitem',
              className: 'res-qcell ' + st,
              title: (i + 1) + '. pitanje — ' + (ok === true ? 'točno' : ok === false ? 'netočno' : 'nije ocijenjeno'),
              style: {
                minWidth: 44, minHeight: 44, borderRadius: 6,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 1, fontSize: 11, fontWeight: 600, lineHeight: 1.1,
                border: '1px solid', borderColor: st === 'none' ? 'var(--bdr)' : col, background: bg, color: col,
              },
            },
              e('span', { className: 'res-qcell-num' }, i + 1),
              e('span', { className: 'res-qcell-mark', style: { fontSize: 13, fontWeight: 700 } }, ic),
            )
          }),
        ),
        e('div', { style: { marginTop: 8, fontSize: 11, color: 'var(--muted)', lineHeight: 1.55 } },
          'Točan odgovor i obrazloženje dolaze uz Standard.'),
      ),
      !canSeeAnalysis && e(LockedResultsBlock, {
        label: 'Pregled pitanja i razrada',
        rows: 5,
        minHeight: 200,
        note: 'Točni odgovori, obrazloženja i analiza po temama dostupni su od Standard plana.',
        upgradeHref: UPGRADE_HREF,
      }),
      canSeeAnalysis && e('div', { className: 'revlist-toggle-hdr' },
        e('div', { className: 'results-section-title', style: { margin: 0, flex: 1 } }, 'Pregled svih pitanja'),
        e('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
          e('span', { style: { fontSize: 12, color: 'var(--muted)' } }, QSR.length + ' pitanja'),
          e('button', { className: 'exams-toggle-btn', onClick: () => setShowRevlist(v => !v) }, showRevlist ? 'Sklopi ▲' : 'Raširi ▼'),
        ),
      ),
      canSeeAnalysis && showRevlist && e('div', { className: 'revlist' }, QSR.map((q, i) => {
        const isM = q.type === 'sa' || q.type === 'es'
        const a = answers[q.id]
        const ok = isM ? null : chk(q, a)
        const cls = isM ? 'rman' : ok === true ? 'rok' : 'rbad'
        const ic = isM ? '✏️' : ok ? '✓' : '✗'
        const col = isM ? 'var(--gold)' : ok ? 'var(--green)' : 'var(--red)'
        let ad = null
        if (q.type === 'mc' && a) ad = 'Tvoj: ' + a + ' — ' + (q.opts[LL.indexOf(a)] || '')
        if (q.type === 'ms' && (a || []).length) ad = 'Odabrano: ' + a.join(', ')
        if (q.type === 'fb' && a) ad = 'Odgovor: ' + a
        if (isM) ad = 'Referentni: ' + (q.sol?.ans || q.sol?.ex || '')
        return e('div', { key: q.id, className: 'revitem ' + cls },
          e('div', { style: { display: 'flex', gap: 10, alignItems: 'flex-start' } },
            e('span', { style: { color: col, fontWeight: 700, fontSize: 14, minWidth: 18 } }, ic),
            e('div', { style: { flex: 1 } },
              e('div', { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' } },
                e('span', { style: { fontSize: 11, color: 'var(--muted)' } }, (i + 1) + '. ' + TLBL[q.type]),
                !examMode && q.topic && e('span', { className: 'topic-tag' }, TOPIC_LABELS[q.topic] || q.topic),
                qTimes[q.id] && e('span', { className: 'time-badge ' + (qTimes[q.id] > 90 ? 'slow' : qTimes[q.id] < 20 ? 'fast' : '') }, '⏱ ' + qTimes[q.id] + 's'),
              ),
              e('div', { style: { fontSize: 13, lineHeight: 1.55, marginBottom: 5 } }, q.q),
              ad && e('div', { style: { fontSize: 12, color: 'var(--muted)' } }, ad),
              ok === false && q.type === 'mc' && q.sol?.cl && e('div', { style: { fontSize: 12, color: 'var(--green)', marginTop: 4 } }, '✓ Točno: ' + q.sol.cl + ' — ' + q.opts[LL.indexOf(q.sol.cl)]),
              ok === false && q.type === 'ms' && q.sol?.cls && e('div', { style: { fontSize: 12, color: 'var(--green)', marginTop: 4 } }, '✓ Točni: ' + q.sol.cls.join(', ')),
              !isM && e(AnswerHelper, { q, show: true, autoExpand: false, onToggle: () => {} }),
            ),
          ),
        )
      })),
      e('div', { style: { marginTop: 28, textAlign: 'center', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' } },
        e('button', { className: 'btn btn-g', onClick: onBack }, '← Na početak'),
        canSeeAnalysis && wrongAutoQ.length > 0 && onPracticeErrors && e('button', { className: 'btn btn-red', style: { background: 'var(--red-d)', color: 'var(--red)', border: '1px solid rgba(196,48,48,.3)' }, onClick: () => onPracticeErrors(wrongAutoQ, exam) }, '🔁 Vježbaj greške (' + wrongAutoQ.length + ')'),
        e('button', { className: 'btn btn-gold', onClick: () => { onBack(); setTimeout(() => document.getElementById('exams')?.scrollIntoView({ behavior: 'smooth' }), 100) } }, 'Pokušaj drugi ispit →'),
      ),
      !canSeeAnalysis && wrongAutoQ.length > 0 && e('div', { style: { marginTop: 14 } },
        e(LockedResultsBlock, {
          label: 'Vježbanje grešaka',
          rows: 2,
          minHeight: 130,
          note: 'Ciljano ponavljanje pitanja koja si promašio/la dostupno je od Standard plana.',
          upgradeHref: UPGRADE_HREF,
        }),
      ),
      e('div', { style: { marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--bdr)' } },
        e('div', { style: { fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 } }, '📸 Podijeli rezultat'),
        e(ShareStoryCard, {
          score: pct,
          correct: cor,
          total: autoQ.length,
          percentile: null,
          label: 'Engleski jezik \u2014 ' + exam.year + '. ' + exam.label,
          // Story kartica crta na <canvas>, koji ne razumije var(--...) — gc odavde
          // (CSS varijabla) tiho pokvari fillStyle i baca SyntaxError u addColorStop.
          accentColor: GC_HEX[g] || '#5b9fff',
          emoji: '\uD83C\uDDEC\uD83C\uDDE7',
        }),
      ),
      e('div', { style: { marginTop: 8, paddingTop: 24, borderTop: '1px solid var(--bdr)' } },
        e('div', { style: { className: 'results-section-title' } }, 'Sljedeći koraci'),
        e('div', { className: 'next-steps' },
          e('button', { className: 'nsc-btn nsc-btn-gold', onClick: onBack },
            e('div', { className: 'nsc-btn-ico' }, '📄'),
            e('div', { className: 'nsc-btn-body' },
              e('div', { className: 'nsc-btn-title' }, 'Drugi ispit'),
              e('div', { className: 'nsc-btn-desc' }, 'Probaj drugi rok ili razinu'),
            ),
            e('div', { className: 'nsc-btn-arrow' }, '→'),
          ),
          e('button', { className: 'nsc-btn nsc-btn-blue', onClick: onGoFilter || undefined },
            e('div', { className: 'nsc-btn-ico' }, '🎯'),
            e('div', { className: 'nsc-btn-body' },
              e('div', { className: 'nsc-btn-title' }, 'Vježbaj po temi'),
              e('div', { className: 'nsc-btn-desc' }, 'Fokusiraj se na slabe točke'),
            ),
            e('div', { className: 'nsc-btn-arrow' }, '→'),
          ),
          e('button', { className: 'nsc-btn nsc-btn-green', onClick: onGoStats || undefined },
            e('div', { className: 'nsc-btn-ico' }, '📊'),
            e('div', { className: 'nsc-btn-body' },
              e('div', { className: 'nsc-btn-title' }, 'Moje statistike'),
              e('div', { className: 'nsc-btn-desc' }, (userData?.history?.length || 0) + ' ispita riješeno'),
            ),
            e('div', { className: 'nsc-btn-arrow' }, '→'),
          ),
        ),
      ),
      !canSeeAnalysis && e('div', { style: { marginTop: 8 } },
        e(LockedResultsBlock, {
          label: 'Analiza napretka',
          rows: 3,
          minHeight: 150,
          note: 'Trendovi kroz ispite, slabe teme i preporuke dolaze sa Standard planom.',
          upgradeHref: UPGRADE_HREF,
        }),
      ),
      canSeeAnalysis && (userData?.history?.length > 0) && e('div', { style: { marginTop: 8 } }, e(AnalyticsPanel, { userData: userData || {} })),
    ),
  )
}
