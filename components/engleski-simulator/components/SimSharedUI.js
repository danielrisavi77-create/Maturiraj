'use client'
import React, { createElement as e, useState, useEffect, useId, useCallback, Fragment } from 'react'
import { nrm, chk } from '@/lib/engleski-simulator/scoring'
import { trackAiHelpRequested } from '@/lib/engleski-simulator/analytics'
import { LL } from '@/lib/engleski-simulator/constants'
import { getExamBlocks, totalMinutes } from '@/lib/engleski-simulator/examStructure'
import { audioUrl } from '@/lib/engleski-simulator/audioBase'
import AUDIO_MAP from '@/lib/data/engleski-simulator/audio-map.json'

const _AI_COOLDOWN_MS = 8000
const _AI_SS_KEY = 'eng_ai_last'

const TOPIC_TO_TASK_VISA = {
  listening_match: 1,
  listening_mc3: 2,
}

const TOPIC_TO_TASK_OSN = {
  listening_a: 1,
  listening_b: 2,
  listening_c: 3,
  listening_d: 4,
}

// Čita audio-map.json (oblik: { <examKey>: { intro, tasks: { <taskNum>: { topic,
// first, repeat, confidence, note } }, extra? } }) i vraća URL-ove (preko
// audioUrl(), koja datoteku spaja s ENG_AUDIO_BASE — GitHub Release, vidi
// lib/engleski-simulator/audioBase.js).
// Prvo traži task čiji je topic jednak zadanom; ako takvog nema u mapi tog ispita,
// pada natrag na TOPIC_TO_TASK_* mapu po rednom broju. Ako datoteka za task ne
// postoji (first je null — npr. stariji ispiti s jednom kombiniranom snimkom),
// vraća null; AudioPlayer tada za pitanje slušanja prikaže tekstualni fallback
// s oznakom nedostupnosti, a za ostale sekcije ne renderira ništa.
// Ispitovo polje 'extra' (dodatni zapisi slušanja koje podaci ispita ne
// razlikuju kao zasebnu temu) se prikaže SAMO uz zadnji task ispita — da se ne
// ponavlja uz svaku temu — OSIM ako su SVI taskovi ispita confidence 'low'
// (nesigurno pozicijsko mapiranje), kad se prikaže uz svaki, jer učenik tada
// ionako ne može pouzdano znati koji je zapis "glavni".
export function getAudioTrack(examKey, topic, razina) {
  const exam = AUDIO_MAP[examKey]
  if (!exam || !exam.tasks) return null
  const taskNums = Object.keys(exam.tasks).map(Number).sort((a, b) => a - b)
  let taskNum = taskNums.find(n => exam.tasks[String(n)]?.topic === topic)
  if (!taskNum) taskNum = razina === 'visa' ? TOPIC_TO_TASK_VISA[topic] : TOPIC_TO_TASK_OSN[topic]
  if (!taskNum) return null
  const track = exam.tasks[String(taskNum)]
  if (!track || !track.first) return null
  const isLastTask = taskNum === taskNums[taskNums.length - 1]
  const allLowConfidence = taskNums.every(n => exam.tasks[String(n)]?.confidence === 'low')
  const showExtra = Array.isArray(exam.extra) && exam.extra.length > 0 && (isLastTask || allLowConfidence)
  return {
    first: audioUrl(track.first),
    repeat: track.repeat ? audioUrl(track.repeat) : null,
    intro: exam.intro ? audioUrl(exam.intro) : null,
    taskNum,
    confidence: track.confidence || null,
    extra: showExtra
      ? exam.extra.map(x => ({ first: audioUrl(x.first), repeat: x.repeat ? audioUrl(x.repeat) : null, note: x.note || '' }))
      : [],
  }
}

export function FocusTrap({ label, onClose, className, children }) {
  // Element se pronalazi preko stabilnog id-a (useId) umjesto refa da bi se izbjeglo
  // proslijeđivanje refa kroz createElement (vidi napomenu o react-hooks/refs niže u datoteci)
  const domId = 'focus-trap-' + useId()
  useEffect(() => {
    const prev = document.activeElement
    const getEls = () => Array.from(document.getElementById(domId)?.querySelectorAll('button:not([disabled]),a[href]:not([disabled]),[tabindex="0"]:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="radio"]:not([disabled]),[role="checkbox"]:not([disabled]),[role="option"]:not([disabled])') || [])
    const els = getEls()
    if (els[0]) els[0].focus()
    function onKey(ev) {
      if (ev.key === 'Escape') {
        onClose()
        return
      }
      if (ev.key !== 'Tab') return
      const cur = getEls()
      if (!cur.length) return
      if (ev.shiftKey) {
        if (document.activeElement === cur[0]) {
          ev.preventDefault()
          cur[cur.length - 1].focus()
        }
      } else if (document.activeElement === cur[cur.length - 1]) {
        ev.preventDefault()
        cur[0].focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose, domId])
  return e('div', { id: domId, className, role: 'dialog', 'aria-modal': 'true', 'aria-label': label }, children)
}

export function MCQ({ q, a, setA, rev }) {
  return e('div', { className: 'opts', role: 'radiogroup' }, q.opts.map((opt, i) => {
    const L = LL[i]
    const sel = a === L
    const ok = rev && L === q.sol?.cl
    const bad = rev && sel && q.sol?.cl && L !== q.sol.cl
    function handleKey(ev) {
      if (rev) return
      if (ev.key === ' ' || ev.key === 'Enter') {
        ev.preventDefault()
        setA(L)
        return
      }
      const n = q.opts.length
      let ni = -1
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
        ev.preventDefault()
        ni = (i + 1) % n
      } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault()
        ni = (i - 1 + n) % n
      }
      if (ni >= 0) {
        setA(LL[ni])
        // čita se iz eventa (ne iz refa) da izbjegnemo pristup refu tijekom renderiranja
        ev.currentTarget.parentElement?.querySelectorAll('[role="radio"]')[ni]?.focus()
      }
    }
    return e('div', { key: i, className: 'opt' + (ok ? ' ok' : bad ? ' bad' : sel ? ' sel' : ''), role: 'radio', 'aria-checked': sel, tabIndex: sel ? 0 : -1, onClick: () => !rev && setA(L), onKeyDown: handleKey },
      e('div', { className: 'optl' }, L), e('div', { className: 'optt' }, opt))
  }))
}

export function InsQ({ q, a, setA, rev }) {
  const cur = a || ''
  return e('div', { className: 'opts', role: 'radiogroup' },
    q.opts.map((opt, i) => {
      const letter = String.fromCharCode(65 + i)
      const sel = cur === letter
      const ok = rev && letter === q.sol?.cl
      const bad = rev && sel && q.sol?.cl && letter !== q.sol.cl
      function handleKey(ev) {
        if (rev) return
        if (ev.key === ' ' || ev.key === 'Enter') {
          ev.preventDefault()
          setA(sel ? '' : letter)
          return
        }
        const n = q.opts.length
        let ni = -1
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
          ev.preventDefault()
          ni = (i + 1) % n
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
          ev.preventDefault()
          ni = (i - 1 + n) % n
        }
        if (ni >= 0) {
          setA(String.fromCharCode(65 + ni))
          // čita se iz eventa (ne iz refa) da izbjegnemo pristup refu tijekom renderiranja
          ev.currentTarget.parentElement?.querySelectorAll('[role="radio"]')[ni]?.focus()
        }
      }
      return e('div', {
        key: i,
        className: 'opt' + (ok ? ' ok' : bad ? ' bad' : sel ? ' sel' : ''),
        role: 'radio',
        'aria-checked': sel,
        tabIndex: sel ? 0 : -1,
        onClick: () => !rev && setA(sel ? '' : letter),
        onKeyDown: handleKey,
      },
      e('div', { className: 'optl' }, letter),
      e('div', { className: 'optt' }, opt))
    }),
  )
}

export function MatQ({ q, a, setA, rev }) {
  const cur = a || {}
  const [activeLeft, setActiveLeft] = useState(null)
  const PAIR_COLORS = [
    { bg: 'rgba(32,69,184,.12)', border: 'rgba(32,69,184,.4)', text: 'var(--blue)' },
    { bg: 'rgba(12,138,122,.12)', border: 'rgba(12,138,122,.4)', text: 'var(--teal)' },
    { bg: 'rgba(233,180,70,.15)', border: 'rgba(233,180,70,.5)', text: 'var(--gold)' },
    { bg: 'rgba(168,85,247,.12)', border: 'rgba(168,85,247,.4)', text: '#9b6ef3' },
    { bg: 'rgba(239,68,68,.12)', border: 'rgba(239,68,68,.4)', text: 'var(--red)' },
    { bg: 'rgba(34,197,94,.12)', border: 'rgba(34,197,94,.4)', text: 'var(--green)' },
  ]
  const colorMap = {}
  q.items.forEach((lft, i) => { colorMap[lft] = i % PAIR_COLORS.length })

  function handleLeftClick(lft) {
    if (rev) return
    if (cur[lft]) {
      setA({ ...cur, [lft]: '' })
      setActiveLeft(null)
      return
    }
    setActiveLeft(lft === activeLeft ? null : lft)
  }
  function handleRightClick(opt) {
    if (rev || !activeLeft) return
    const usedBy = Object.entries(cur).find(([k, v]) => v === opt && k !== activeLeft)?.[0]
    const newA = { ...cur, [activeLeft]: opt }
    if (usedBy) newA[usedBy] = ''
    setA(newA)
    setActiveLeft(null)
  }
  const usedOpts = new Set(Object.values(cur).filter(Boolean))
  function getOwner(opt) { return Object.entries(cur).find(([k, v]) => v === opt)?.[0] || null }

  return e('div', { className: 'mat-mobile' },
    !rev && !activeLeft && e('div', { style: { fontSize: 12, color: 'var(--gold)', marginBottom: 4 } },
      '👉 Klikni stavku s lijeve strane, zatim odaberi odgovor s desne.'),
    !rev && activeLeft && e('div', { style: { fontSize: 12, color: 'var(--blue)', marginBottom: 4 } },
      '❖ Odabrano: "' + activeLeft + '" — klikni odgovarajući opis s desne.'),
    e('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
      e('div', null,
        e('div', { className: 'mat-mobile-section-title' }, 'Stavke'),
        e('div', { className: 'mat-left-list' },
          q.items.map((lft, i) => {
            const colIdx = colorMap[lft]
            const col = PAIR_COLORS[colIdx]
            const cr = q.sol?.pairs?.find(p => p.l.trim() === lft.trim())?.r
            const ch = cur[lft] || ''
            const isActive = activeLeft === lft
            const isMatched = !!ch
            const ok = rev && ch.trim() === (cr || '').trim()
            const bad = rev && ch && ch.trim() !== (cr || '').trim()
            let style = {}
            if (!rev && isMatched && !isActive) style = { background: col.bg, borderColor: col.border, color: col.text }
            else if (!rev && isActive) style = { background: 'var(--blue-d)', borderColor: 'var(--blue)', color: 'var(--blue)' }
            else if (rev && ok) style = { background: 'var(--green-d)', borderColor: 'var(--green)', color: 'var(--green)' }
            else if (rev && bad) style = { background: 'var(--red-d)', borderColor: 'var(--red)', color: 'var(--red)' }
            return e('div', {
              key: i,
              className: 'mat-left-item idle',
              style,
              role: 'button',
              tabIndex: rev ? -1 : 0,
              'aria-pressed': isActive,
              'aria-label': lft + (isMatched && !rev ? ' — spareno' : '') + (!rev && isActive ? ' — odabrano, klikni desnu stavku' : ''),
              onClick: () => handleLeftClick(lft),
              onKeyDown: ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); handleLeftClick(lft) } },
            },
            e('span', null, lft),
            isMatched && !rev && e('span', { style: { fontSize: 11, fontWeight: 700, color: col.text, marginLeft: 4 }, 'aria-hidden': 'true' }, '✓ ' + (i + 1)))
          }))),
      e('div', null,
        e('div', { className: 'mat-mobile-section-title' }, 'Odgovori'),
        e('div', { className: 'mat-right-list' },
          q.rights.map((opt, j) => {
            const owner = getOwner(opt)
            const isUsed = usedOpts.has(opt)
            const usedByKey = Object.entries(cur).find(([k, v]) => v === opt)?.[0]
            const isSelectable = !!activeLeft && (!isUsed || usedByKey !== undefined)
            const ok = rev && !!q.sol?.pairs?.some(p => p.r.trim() === opt.trim() && (cur[p.l.trim()] || '').trim() === opt.trim())
            const bad = rev && isUsed && !ok
            let style = {}
            if (!rev && owner) {
              const col = PAIR_COLORS[colorMap[owner]]
              style = { background: col.bg, borderColor: col.border, color: col.text }
            } else if (!rev && isSelectable) {
              style = { background: 'var(--blue-d)', borderColor: 'rgba(32,69,184,.3)', cursor: 'pointer' }
            } else if (!rev && isUsed) {
              style = { opacity: 0.35, cursor: 'not-allowed' }
            } else if (rev && ok) {
              style = { background: 'var(--green-d)', borderColor: 'var(--green)', color: 'var(--green)' }
            } else if (rev && bad) {
              style = { background: 'var(--red-d)', borderColor: 'var(--red)', color: 'var(--red)' }
            }
            return e('div', {
              key: j,
              className: 'mat-right-item idle',
              style,
              role: 'button',
              tabIndex: rev || (!activeLeft && !isUsed) ? -1 : 0,
              'aria-disabled': !isSelectable || undefined,
              'aria-label': opt + (owner && !rev ? ' — spareno s: ' + owner : '') + (rev && ok ? ' — točno' : rev && bad ? ' — netočno' : ''),
              onClick: () => isSelectable && handleRightClick(opt),
              onKeyDown: ev => { if ((ev.key === 'Enter' || ev.key === ' ') && isSelectable) { ev.preventDefault(); handleRightClick(opt) } },
            }, opt, owner && !rev && e('span', { style: { fontSize: 11, fontWeight: 700, color: PAIR_COLORS[colorMap[owner]]?.text, marginLeft: 4 }, 'aria-hidden': 'true' }, q.items.indexOf(owner) + 1))
          })))),
    Object.entries(cur).some(([, v]) => v) && !rev && e('div', { style: { marginTop: 8, textAlign: 'right' } },
      e('button', { className: 'mat-clear-btn', onClick: () => { setA({}); setActiveLeft(null) } }, '✕ Poništi sve')),
    rev && e('div', { className: 'mat-pairs-summary', style: { marginTop: 12 } },
      q.items.map((lft, i) => {
        const cr = q.sol?.pairs?.find(p => p.l.trim() === lft.trim())?.r
        const ch = cur[lft]
        const ok = (ch || '').trim() === (cr || '').trim()
        return e('div', {
          key: i,
          className: 'mat-pair-row',
          style: { borderLeft: '3px solid ' + (ok ? 'var(--green)' : 'var(--red)'), paddingLeft: 8 },
        },
        e('span', { className: 'mat-pair-left' }, lft),
        e('span', null, '→'),
        e('span', { className: 'mat-pair-right', style: { color: ok ? 'var(--green)' : 'var(--red)' } }, ch || e('em', null, '(nije odgovoreno)')),
        !ok && e('span', { style: { fontSize: 11, color: 'var(--muted)', marginLeft: 8 } }, '✓ ' + cr))
      })),
  )
}

export function FbQ({ q, a, setA, rev }) {
  const ac = q.sol?.alt || (Array.isArray(q.sol?.ans) ? q.sol.ans : [q.sol?.ans])
  const ok = rev && !!q.sol && ac.some(x => nrm(x) === nrm(a))
  const bad = rev && !ok && (a || '').trim().length > 0
  return e('input', { className: 'finp' + (ok ? ' ok' : bad ? ' bad' : ''), type: 'text', placeholder: 'Upiši odgovor...', value: a || '', readOnly: rev, 'aria-label': q.q.slice(0, 80), onChange: ev => !rev && setA(ev.target.value) })
}

export function SaQ({ q, a, setA, rev }) {
  return e(Fragment, null,
    e('textarea', { className: 'ta', rows: 4, style: { minHeight: 100 }, placeholder: 'Upiši odgovor...', value: a || '', readOnly: rev, onChange: ev => !rev && setA(ev.target.value) }),
    rev && q.sol?.ans && e('div', { className: 'fb info' }, e('div', { className: 'fbtitle' }, 'Referentni odgovor'), e('div', { className: 'fbans' }, q.sol.ans)),
  )
}

export function FeedbackBox({ q, a, rev }) {
  // Bez ključa nema povratne informacije — free korisnik ga u ispitnom modu ne
  // dobiva, a ovaj put se tada uopće ne smije doseći (ADR-001). Ako se doseže,
  // degradacija mora biti tiha, a ne bijeli ekran.
  if (!rev || q.type === 'sa' || !q.sol) return null
  if (q.type === 'mat') {
    const nA = Object.fromEntries(Object.entries(a || {}).map(([k, v]) => [k.trim(), (v || '').trim()]))
    const ok = q.sol.pairs.every(p => nA[p.l.trim()] === p.r.trim())
    return e('div', { className: 'fb ' + (ok ? 'ok' : 'bad') },
      e('div', { className: 'fbtitle' }, ok ? '✓ Točno!' : '✗ Netočno'),
      !ok && e('div', { className: 'fbtext' }, 'Točni parovi: ' + q.sol.pairs.map(p => p.l + ' → ' + p.r).join(' · ')))
  }
  if (q.type === 'fb') {
    const ac = q.sol.alt || (Array.isArray(q.sol.ans) ? q.sol.ans : [q.sol.ans])
    const ok = ac.some(x => nrm(x) === nrm(a))
    return e('div', { className: 'fb ' + (ok ? 'ok' : 'bad') },
      e('div', { className: 'fbtitle' }, ok ? '✓ Točno!' : '✗ Netočno'),
      !ok && e('div', { className: 'fbtext' }, 'Točan odgovor: ' + (Array.isArray(q.sol.ans) ? q.sol.ans.join(' / ') : q.sol.ans)))
  }
  const ok = chk(q, a)
  if (ok === null) return null
  return e('div', { className: 'fb ' + (ok ? 'ok' : 'bad') },
    e('div', { className: 'fbtitle' }, ok ? '✓ Točno!' : '✗ Netočno'),
    !ok && q.type === 'mc' && q.sol.cl && e('div', { className: 'fbtext' }, 'Točan odgovor: ' + q.sol.cl + ' — ' + q.opts[LL.indexOf(q.sol.cl)]),
    q.exp && e('div', { className: 'fbtext', style: { marginTop: 6, paddingTop: 6, borderTop: '1px solid rgba(0,0,0,.06)', fontStyle: 'italic' } }, q.exp),
  )
}

export function AnswerHelper({ q, show, onToggle, autoExpand }) {
  // Reset AI stanja pri promjeni pitanja postiže se preko `key={q.id}` na pozivatelju
  // (vidi EngleskiSimulator.js), umjesto efekta koji resetira state — izbjegava se
  // setState-in-effect obrazac.
  const [aiState, setAiState] = useState('idle')
  const [aiText, setAiText] = useState('')

  function getContent() {
    if (!q.sol) return null
    if (q.type === 'mc') {
      const idx = LL.indexOf(q.sol.cl)
      return e('div', { className: 'ah-answer-content' }, e('span', { className: 'ah-correct' }, q.sol.cl + ' — '), q.opts[idx] || '')
    }
    if (q.type === 'mat') return e('div', { className: 'ah-answer-content' }, q.sol.pairs.map((p, i) => e('div', { key: i }, e('span', { className: 'ah-correct' }, p.l), ' → ' + p.r)))
    if (q.type === 'fb') return e('div', { className: 'ah-answer-content' }, e('span', { className: 'ah-correct' }, Array.isArray(q.sol.ans) ? q.sol.ans.join(' / ') : q.sol.ans))
    if (q.type === 'sa') return e('div', { className: 'ah-answer-content' }, q.sol.ans)
    return null
  }

  const fetchAi = useCallback(async () => {
    trackAiHelpRequested({ topic: q.topic || 'ostalo', question_type: q.type, examKey: q.examKey || '' })
    const now = Date.now()
    const lastMs = Number(sessionStorage.getItem(_AI_SS_KEY) || 0)
    if (now - lastMs < _AI_COOLDOWN_MS) {
      setAiState('error')
      setAiText('Pričekaj malo prije sljedećeg AI zahtjeva.')
      return
    }
    sessionStorage.setItem(_AI_SS_KEY, String(now))
    setAiState('loading')
    const correctAns = q.type === 'mc'
      ? q.sol.cl + ' — ' + q.opts[LL.indexOf(q.sol.cl)]
      : q.type === 'mat'
        ? q.sol.pairs.map(p => p.l + ' → ' + p.r).join('; ')
        : q.type === 'fb'
          ? q.sol.ans
          : q.sol.ans || ''
    const userMsg = 'Pitanje: "' + q.q + '"\nTočan odgovor: ' + correctAns + '\n\nNapiši kratko obrazloženje (2-4 rečenice) na hrvatskom koje objašnjava ZAŠTO je taj odgovor točan — koji gramatički ili leksički pojam objašnjava odluku. Budi konkretan i educativan. Ne ponavljaj pitanje.'
    try {
      const res = await fetch('/api/ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: 'explain', messages: [{ role: 'user', content: userMsg }] }) })
      if (!res.ok) {
        setAiState('error')
        return
      }
      const reader = res.body.getReader()
      const dec = new TextDecoder()
      let text = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = dec.decode(value).split('\n')
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const d = JSON.parse(line.slice(6))
              if (d?.delta?.text) {
                text += d.delta.text
                setAiText(text)
              }
            } catch {}
          }
        }
      }
      if (!text) text = 'Nije moguće generirati objašnjenje.'
      setAiText(text)
      setAiState('done')
    } catch {
      setAiState('error')
    }
  }, [q])

  // Bez ključa nema što pokazati — gumb "Pokaži odgovor" vodio bi u prazno. Po
  // politici je točan odgovor Standard sadržaj, pa se to za free tier izvan
  // prvih FREE_LIMIT pitanja vježbanja i ne smije dogoditi (ADR-001).
  if (!q?.sol) return null
  if (!show && !autoExpand) return e('button', { className: 'ah-toggle-btn', onClick: onToggle }, '💡 Pokaži odgovor')
  return e('div', { className: 'ah-wrap' },
    e('div', { className: 'ah-answer' }, e('div', { className: 'ah-answer-label' }, '💡 Točan odgovor'), getContent()),
    q.exp && e('div', { className: 'ah-exp' }, e('div', { className: 'ah-exp-label' }, '📖 Objašnjenje'), e('div', { className: 'ah-exp-text' }, q.exp)),
    !q.exp && (() => {
      if (aiState === 'idle') return e('button', { className: 'ah-ai-btn', onClick: fetchAi }, '🤖 AI objašnjenje')
      if (aiState === 'loading') return e('button', { className: 'ah-ai-btn loading', disabled: true }, '🤖 Generira...')
      if (aiState === 'error') return e('button', { className: 'ah-ai-btn', onClick: fetchAi }, '🤖 Pokušaj ponovo')
      return e('div', { className: 'ah-ai-content' }, e('div', { className: 'ah-exp-label' }, '🤖 AI Profesor'), e('div', { className: 'ah-ai-text' }, aiText))
    })(),
  )
}

export function ContextPanel({ examKey, qid, examContext }) {
  const [open, setOpen] = useState(true)
  if (examContext === null) return e('div', { style: { height: 36, borderRadius: 8, background: 'var(--s2)', marginBottom: 12, display: 'flex', alignItems: 'center', paddingLeft: 14, fontSize: 12, color: 'var(--muted)' } }, '⏳ Učitavanje konteksta...')
  const ctx = examContext?.[examKey]
  if (!ctx) return null
  let taskCtx = ctx.tasks[String(qid)]
  if (taskCtx?.sharedWith) taskCtx = ctx.tasks[taskCtx.sharedWith]
  if (!taskCtx) return null
  const isListening = taskCtx.text.startsWith('⚠️ Listening')
  return e('div', { className: 'ctx-panel' },
    e('button', { className: 'ctx-toggle' + (open ? ' open' : ''), onClick: () => setOpen(o => !o), 'aria-expanded': open, 'aria-controls': 'ctx-body-' + qid },
      e('span', null, '📄 ' + taskCtx.label),
      e('span', { className: 'ctx-arrow' }, open ? '▲' : '▼')),
    e('div', { className: 'ctx-body' + (open ? ' open' : ''), id: 'ctx-body-' + qid },
      isListening && e('div', { className: 'ctx-listening' }, '🎧 Listening zadatak — u stvarnom ispitu slušaš audio. Odgovori su iz ključa NCVVO-a.'),
      e('div', { className: 'ctx-text' }, taskCtx.text)))
}

export function ModeSelect({ examKey, examObj, examsMap, onExamMode, onPractice, onPracticeTimer, onBack, toggles }) {
  const exam = (examsMap && examsMap[examKey]) || examObj || {}
  // Trajanje po ispitnim cjelinama prema NCVVO katalogu (viša 180, osnovna 105 min)
  const blocks = getExamBlocks(exam)
  const totalMin = totalMinutes(exam)
  const blocksLabel = blocks.map(b => b.label + ' ' + b.minutes).join(', ')
  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, exam.year + '. — ' + exam.label),
      exam.razina === 'visa'
        ? e('span', { className: 'razina-badge visa' }, '★ Viša razina (A)')
        : e('span', { className: 'razina-badge osnovna' }, 'Osnovna razina (B)'),
      toggles),
    e('div', { style: { maxWidth: 700, margin: '0 auto', padding: '40px 20px 80px' } },
      e('div', { style: { fontFamily: 'var(--fh)', fontSize: 26, marginBottom: 6 } }, 'Odaberi način rješavanja'),
      e('div', { style: { fontSize: 14, color: 'var(--muted)', marginBottom: 28 } },
        'Engleski jezik (' + (exam.razina === 'visa' ? 'viša' : 'osnovna') + ' razina) — ' + exam.year + '. — ' + exam.label + ' · ' + exam.qs.length + ' pitanja'),
      e('div', { className: 'mode-select-grid' },
        e('div', { className: 'mode-card practice', onClick: () => onPractice(examKey) },
          e('span', { className: 'mode-card-ico' }, '💡'),
          e('div', { className: 'mode-card-title' }, 'Vježbanje'),
          e('div', { className: 'mode-card-desc' }, 'Rješavaj pitanje po pitanje uz trenutnu povratnu informaciju.'),
          e('div', { className: 'mode-card-features' },
            e('div', { className: 'mode-feature on' }, '✓ Odmah vidiš točan odgovor'),
            e('div', { className: 'mode-feature on' }, '✓ Objašnjenja i AI profesor'),
            e('div', { className: 'mode-feature off' }, '– Bez vremenskog ograničenja'))),
        e('div', { className: 'mode-card timed', onClick: () => onPracticeTimer(examKey) },
          e('span', { className: 'mode-card-ico' }, '⏱️'),
          e('div', { className: 'mode-card-title' }, 'Vježbanje s timerom'),
          e('div', { className: 'mode-card-desc' }, 'Vježbanje s mjerenjem vremena, ali bez pritiska predaje.'),
          e('div', { className: 'mode-card-features' },
            e('div', { className: 'mode-feature on' }, '✓ Odmah vidiš točan odgovor'),
            e('div', { className: 'mode-feature on' }, '✓ Mjeri se vrijeme po pitanju'),
            e('div', { className: 'mode-feature off' }, '– Nema vremenskog limita za ispit'))),
        e('div', { className: 'mode-card exam', onClick: () => onExamMode(examKey) },
          e('span', { className: 'mode-card-ico' }, '🎓'),
          e('div', { className: 'mode-card-title' }, 'Simulacija ispita'),            (exam.hasListening === false || exam.hasReading === false) && e('div', { style: { display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 6 } },
              exam.hasListening === false && e('span', { style: { fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: 'rgba(233,180,70,.12)', border: '1px solid rgba(233,180,70,.25)', color: 'var(--gold)' } }, 'bez 🎧'),
              exam.hasReading === false && e('span', { style: { fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: 'rgba(32,69,184,.1)', border: '1px solid rgba(32,69,184,.25)', color: 'var(--blue)' } }, 'bez 📖'),
            ),          e('div', { className: 'mode-card-desc' }, exam.hasListening === false ? 'Uvjeti ispita bez Listening dijela (audio nije dostupan).' : 'Pravi uvjeti ispita: ' + totalMin + ' min po ispitnim cjelinama, bez povratka na prethodni dio.'),
          e('div', { className: 'mode-card-features' },
            e('div', { className: 'mode-feature on' }, '✓ Vremensko ograničenje ' + totalMin + ' min (' + blocksLabel + ')'),
            e('div', { className: 'mode-feature off' }, '– Odgovori tek po predaji'),
            e('div', { className: 'mode-feature off' }, '– Nema objašnjenja tijekom ispita'))))))
}

const AUDIO_MISSING_NOTE = ' Audio nije dostupan — u stvarnom ispitu slušaš snimku; odgovori su iz ključa NCVVO-a.'

// role="status" (aria-live polite): poruka se pojavi tek nakon neuspjele provjere
// ili onError, pa je čitač ekrana inače ne bi najavio.
function fallbackBox(note) {
  return e('div', { className: 'audio-fallback', role: 'status' },
    e('span', { className: 'audio-fallback-icon' }, '⚠️'), note)
}

// Jedan <audio> element s tekstualnim fallbackom kad snimke nema.
//
// `preload: 'metadata'`, ne `'none'`: nedostupnost snimke otkriva isključivo
// sam <audio> element. Provjera fetchom (HEAD) ovdje ne radi i ne može raditi:
//   - `connect-src` u next.config.mjs ne uključuje bazu snimaka, pa CSP odbija
//     zahtjev prije nego što ode na mrežu (violation u konzoli na svakom
//     pitanju slušanja);
//   - produkcijska baza je GitHub Release, čiji `https://github.com/...`
//     odgovara 302 bez `Access-Control-Allow-Origin`, pa bi fetch pao kao
//     TypeError i da CSP-a nema.
// Učitavanje medija preko <audio> nije pod CORS-om (nema `crossorigin`
// atributa), pa `preload='metadata'` pouzdano hvata 404 i odmah prikazuje
// fallback — s `'none'` bi se nedostajuća snimka otkrila tek nakon klika na
// Play. Cijena je zaglavlje MP3-a po pitanju slušanja; detekcija bez klika i
// zagrijana veza za Play to opravdavaju. Vidi public/audio/eng/README.md.
function NativeAudio({ src, label, note, style }) {
  const [errored, setErrored] = useState(false)
  if (errored) return fallbackBox(note)
  return e('audio', {
    controls: true,
    preload: 'metadata',
    src,
    'aria-label': label,
    onError: () => setErrored(true),
    style,
  })
}

export function AudioPlayer({ examKey, topic, razina }) {
  // Napomena: pozivatelj mora renderirati ovu komponentu s key={examKey + '_' + topic}
  // da bi se phase/showIntro ispravno resetirali pri promjeni pitanja (remount);
  // stanje greške pojedine snimke živi u NativeAudio i resetira se preko key={src}.
  const audio = getAudioTrack(examKey, topic, razina)
  const [phase, setPhase] = useState('first')
  const [showIntro, setShowIntro] = useState(false)

  const missingNote = AUDIO_MISSING_NOTE

  // Nema zapisa u audio-map.json: za pitanje slušanja to je nedostajuća snimka, pa
  // ostaje tekstualni fallback s jasnom oznakom (klauzula plana 3.4). Za ostale
  // sekcije audio uopće ne pripada pitanju, pa se player i dalje ne renderira.
  if (!audio) {
    if (!String(topic || '').startsWith('listening')) return null
    return e('div', { className: 'audio-player' },
      e('div', { className: 'audio-player-inner' }, fallbackBox(missingNote)))
  }

  const src = phase === 'repeat' && audio.repeat ? audio.repeat : audio.first

  return e('div', { className: 'audio-player' },
    e('div', { className: 'audio-player-inner' },
      e('div', { className: 'audio-meta' },
        e('span', { className: 'audio-task-label' }, '🎧 Task ' + audio.taskNum),
        e('span', {
          className: 'audio-phase-badge',
          style: {
            background: phase === 'done' ? 'var(--green-d)' : phase === 'repeat' ? 'var(--gold-d)' : 'var(--blue-d)',
            color: phase === 'done' ? 'var(--green)' : phase === 'repeat' ? 'var(--gold)' : 'var(--blue)',
          },
        }, phase === 'done' ? '✓ Završeno' : phase === 'repeat' ? 'Ponavljanje' : '1. slušanje'),
        phase !== 'done' && e('div', { style: { marginLeft: 'auto', display: 'flex', gap: 6 } },
          audio.intro && e('button', { className: 'btn btn-g', style: { fontSize: 11, padding: '3px 10px' }, onClick: () => setShowIntro(s => !s) }, '📋 Upute'),
          phase === 'first' && audio.repeat && e('button', { className: 'btn btn-g', style: { fontSize: 11, padding: '3px 10px' }, onClick: () => setPhase('repeat') }, '▶ Ponavljanje'),
          e('button', { className: 'btn', style: { fontSize: 11, padding: '3px 10px', background: 'var(--green-d)', color: 'var(--green)', border: '1px solid rgba(30,122,62,.3)' }, onClick: () => setPhase('done') }, '✓ Završio/la'))),
      showIntro && audio.intro && e('div', { className: 'audio-intro-wrap', style: { marginBottom: 8 } },
        e('div', { style: { fontSize: 11, color: 'var(--muted)', marginBottom: 4 } }, '📋 Upute (uvodna snimka):'),
        e(NativeAudio, {
          key: audio.intro,
          src: audio.intro,
          label: 'Upute — ' + topic,
          note: ' Uvodna snimka nije dostupna.',
          style: { width: '100%', height: 36 },
        })),
      e('div', { className: 'audio-native-wrap' },
        e(NativeAudio, {
          key: src,
          src,
          label: 'Audio player — ' + topic,
          note: missingNote,
          style: { width: '100%', height: 40 },
        })),
      phase === 'done'
        ? e('div', { style: { fontSize: 11, color: 'var(--green)', fontWeight: 600 } }, '✓ Oba slušanja završena — odgovori na pitanja.')
        : e('div', { className: 'audio-hint' }, phase === 'repeat' ? 'Slušaš ponavljanje. Klikni \'✓ Završio/la\' kad završiš.' : 'Slušaj pažljivo. Klikni \'▶ Ponavljanje\' za drugi put ili \'✓ Završio/la\'.'),
      audio.extra.length > 0 && e('div', { className: 'audio-extra-wrap', style: { marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(0,0,0,.08)' } },
        e('div', { style: { fontSize: 12, fontWeight: 600, marginBottom: 6 } }, '🎧 Dodatni zapisi slušanja'),
        audio.extra.map((ex, i) => e('div', { key: i, style: { marginBottom: 8 } },
          ex.note && e('div', { style: { fontSize: 11, color: 'var(--muted)', marginBottom: 4 } }, ex.note),
          e(NativeAudio, {
            key: ex.first,
            src: ex.first,
            label: 'Dodatni zapis ' + (i + 1) + ' — 1. slušanje',
            note: ' Dodatni zapis ' + (i + 1) + ' nije dostupan.',
            style: { width: '100%', height: 36 },
          }),
          ex.repeat && e(NativeAudio, {
            key: ex.repeat,
            src: ex.repeat,
            label: 'Dodatni zapis ' + (i + 1) + ' — ponavljanje',
            note: ' Ponavljanje dodatnog zapisa ' + (i + 1) + ' nije dostupno.',
            style: { width: '100%', height: 36, marginTop: 4 },
          }))))))
}