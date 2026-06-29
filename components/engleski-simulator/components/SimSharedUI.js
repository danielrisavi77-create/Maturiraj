'use client'
import React, { createElement as e, useState, useEffect, useRef, Fragment } from 'react'
import { nrm, chk } from '@/lib/engleski-simulator/scoring'
import { trackAiHelpRequested } from '@/lib/engleski-simulator/analytics'

const LL = ['A', 'B', 'C', 'D', 'E', 'F']

const _AI_COOLDOWN_MS = 8000
const _AI_SS_KEY = 'eng_ai_last'

const AUDIO_MAP = {
  vis_2015_ljeto: {
    1: '1tvTSXoMOWeEyezLU5l8yNd15XMmkTdBn',
    2: '1KDdDbHDq-sjAIlxRnLnaaYsS0iUZUZC4',
    3: '1cp0j-JbsjW-Jyvi4Ozpft6QlWs7nBJ7P',
    4: '1HYutrILE_RuGmma5NbDbgo-zYY2jCx1Q',
    5: '1BK9WejtBj58dYbYvDE2GmnUKM5-BzC1L',
    6: '1UrERTOIxE2mjd2i0qPbYMY7L8lPooVAY',
    7: '1dZ7bDMjJ3uYwV-GRa2Ws_SAGInPDErnt',
    8: '1zgDSH5aE7YgburdU1gbYCW7oPjsxIAIY',
    9: '11fORSrmJ40YXzj9D3ZJJ9gJla82dycYd',
  },
}

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

function getAudioTrack(examKey, topic, razina) {
  if (!AUDIO_MAP[examKey]) return null
  const taskNum = razina === 'visa' ? TOPIC_TO_TASK_VISA[topic] : TOPIC_TO_TASK_OSN[topic]
  if (!taskNum) return null
  const trackFirst = taskNum * 2
  const trackRepeat = taskNum * 2 + 1
  const idFirst = AUDIO_MAP[examKey][trackFirst]
  const idRepeat = AUDIO_MAP[examKey][trackRepeat]
  if (!idFirst) return null
  return {
    first: 'https://docs.google.com/uc?id=' + idFirst,
    repeat: idRepeat ? 'https://docs.google.com/uc?id=' + idRepeat : null,
    taskNum,
  }
}

export function FocusTrap({ label, onClose, className, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    const getEls = () => Array.from(ref.current?.querySelectorAll('button:not([disabled]),a[href]:not([disabled]),[tabindex="0"]:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="radio"]:not([disabled]),[role="checkbox"]:not([disabled]),[role="option"]:not([disabled])') || [])
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
  }, [onClose])
  return e('div', { className, ref, role: 'dialog', 'aria-modal': 'true', 'aria-label': label }, children)
}

export function MCQ({ q, a, setA, rev }) {
  const containerRef = useRef(null)
  return e('div', { className: 'opts', role: 'radiogroup', ref: containerRef }, q.opts.map((opt, i) => {
    const L = LL[i]
    const sel = a === L
    const ok = rev && L === q.sol.cl
    const bad = rev && sel && L !== q.sol.cl
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
        containerRef.current?.querySelectorAll('[role="radio"]')[ni]?.focus()
      }
    }
    return e('div', { key: i, className: 'opt' + (ok ? ' ok' : bad ? ' bad' : sel ? ' sel' : ''), role: 'radio', 'aria-checked': sel, tabIndex: sel ? 0 : -1, onClick: () => !rev && setA(L), onKeyDown: handleKey },
      e('div', { className: 'optl' }, L), e('div', { className: 'optt' }, opt))
  }))
}

export function InsQ({ q, a, setA, rev }) {
  const cur = a || ''
  const containerRef = useRef(null)
  return e('div', { className: 'opts', role: 'radiogroup', ref: containerRef },
    q.opts.map((opt, i) => {
      const letter = String.fromCharCode(65 + i)
      const sel = cur === letter
      const ok = rev && letter === q.sol.cl
      const bad = rev && sel && letter !== q.sol.cl
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
          containerRef.current?.querySelectorAll('[role="radio"]')[ni]?.focus()
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
            const cr = q.sol.pairs.find(p => p.l.trim() === lft.trim())?.r
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
            const ok = rev && q.sol.pairs.some(p => p.r.trim() === opt.trim() && (cur[p.l.trim()] || '').trim() === opt.trim())
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
        const cr = q.sol.pairs.find(p => p.l.trim() === lft.trim())?.r
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
  const ac = q.sol.alt || (Array.isArray(q.sol.ans) ? q.sol.ans : [q.sol.ans])
  const ok = rev && ac.some(x => nrm(x) === nrm(a))
  const bad = rev && !ok && (a || '').trim().length > 0
  return e('input', { className: 'finp' + (ok ? ' ok' : bad ? ' bad' : ''), type: 'text', placeholder: 'Upiši odgovor...', value: a || '', readOnly: rev, 'aria-label': q.q.slice(0, 80), onChange: ev => !rev && setA(ev.target.value) })
}

export function SaQ({ q, a, setA, rev }) {
  return e(Fragment, null,
    e('textarea', { className: 'ta', rows: 4, style: { minHeight: 100 }, placeholder: 'Upiši odgovor...', value: a || '', readOnly: rev, onChange: ev => !rev && setA(ev.target.value) }),
    rev && e('div', { className: 'fb info' }, e('div', { className: 'fbtitle' }, 'Referentni odgovor'), e('div', { className: 'fbans' }, q.sol.ans)),
  )
}

export function FeedbackBox({ q, a, rev }) {
  if (!rev || q.type === 'sa') return null
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
    !ok && q.type === 'mc' && e('div', { className: 'fbtext' }, 'Točan odgovor: ' + q.sol.cl + ' — ' + q.opts[LL.indexOf(q.sol.cl)]),
    q.exp && e('div', { className: 'fbtext', style: { marginTop: 6, paddingTop: 6, borderTop: '1px solid rgba(0,0,0,.06)', fontStyle: 'italic' } }, q.exp),
  )
}

export function AnswerHelper({ q, show, onToggle, autoExpand }) {
  const [aiState, setAiState] = useState('idle')
  const [aiText, setAiText] = useState('')

  useEffect(() => {
    setAiState('idle')
    setAiText('')
  }, [q.id])

  function getContent() {
    if (q.type === 'mc') {
      const idx = LL.indexOf(q.sol.cl)
      return e('div', { className: 'ah-answer-content' }, e('span', { className: 'ah-correct' }, q.sol.cl + ' — '), q.opts[idx] || '')
    }
    if (q.type === 'mat') return e('div', { className: 'ah-answer-content' }, q.sol.pairs.map((p, i) => e('div', { key: i }, e('span', { className: 'ah-correct' }, p.l), ' → ' + p.r)))
    if (q.type === 'fb') return e('div', { className: 'ah-answer-content' }, e('span', { className: 'ah-correct' }, Array.isArray(q.sol.ans) ? q.sol.ans.join(' / ') : q.sol.ans))
    if (q.type === 'sa') return e('div', { className: 'ah-answer-content' }, q.sol.ans)
    return null
  }

  async function fetchAi() {
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
      const res = await fetch('/api/ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'user', content: userMsg }] }) })
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
  }

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
            ),          e('div', { className: 'mode-card-desc' }, exam.hasListening === false ? 'Uvjeti ispita bez Listening dijela (audio nije dostupan).' : 'Pravi uvjeti ispita: 90 minuta, bez odgovora dok ne predaš.'),
          e('div', { className: 'mode-card-features' },
            e('div', { className: 'mode-feature on' }, '✓ Vremensko ograničenje 90 min'),
            e('div', { className: 'mode-feature off' }, '– Odgovori tek po predaji'),
            e('div', { className: 'mode-feature off' }, '– Nema objašnjenja tijekom ispita'))))))
}

export function AudioPlayer({ examKey, topic, razina }) {
  const audio = getAudioTrack(examKey, topic, razina)
  const [phase, setPhase] = useState('first')
  const [iframeFallback, setIframeFallback] = useState(false)
  const iframeRef = useRef(null)
  const fallbackTimerRef = useRef(null)

  useEffect(() => {
    setPhase('first')
    setIframeFallback(false)
    clearTimeout(fallbackTimerRef.current)
    fallbackTimerRef.current = setTimeout(() => setIframeFallback(true), 5000)
    return () => clearTimeout(fallbackTimerRef.current)
  }, [topic, examKey])

  if (!audio) return null

  const fileId = phase === 'repeat' && audio.repeat
    ? audio.repeat.replace('https://docs.google.com/uc?id=', '')
    : audio.first.replace('https://docs.google.com/uc?id=', '')
  const iframeSrc = 'https://drive.google.com/file/d/' + fileId + '/preview'

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
          phase === 'first' && audio.repeat && e('button', { className: 'btn btn-g', style: { fontSize: 11, padding: '3px 10px' }, onClick: () => setPhase('repeat') }, '▶ Ponavljanje'),
          e('button', { className: 'btn', style: { fontSize: 11, padding: '3px 10px', background: 'var(--green-d)', color: 'var(--green)', border: '1px solid rgba(30,122,62,.3)' }, onClick: () => setPhase('done') }, '✓ Završio/la'))),
      e('div', { className: 'audio-iframe-wrap' },
        e('iframe', {
          ref: iframeRef,
          key: fileId,
          src: iframeSrc,
          allow: 'autoplay',
          title: 'Audio player — ' + topic,
          onLoad: () => { clearTimeout(fallbackTimerRef.current); setIframeFallback(false) },
          style: { width: '100%', height: 54, border: 'none', borderRadius: 8, background: 'var(--s2)', display: iframeFallback ? 'none' : 'block' },
        }),
        iframeFallback && e('div', { className: 'audio-fallback' },
          e('span', { className: 'audio-fallback-icon' }, '⚠️'),
          ' Audio se nije uspio učitati (možda blokiran). ',
          e('a', { href: 'https://drive.google.com/file/d/' + fileId + '/view', target: '_blank', rel: 'noopener noreferrer', style: { color: 'var(--blue)', textDecoration: 'underline' } }, 'Otvori u Google Driveu →'))),
      phase === 'done'
        ? e('div', { style: { fontSize: 11, color: 'var(--green)', fontWeight: 600 } }, '✓ Oba slušanja završena — odgovori na pitanja.')
        : e('div', { className: 'audio-hint' }, phase === 'repeat' ? 'Slušaš ponavljanje. Klikni \'✓ Završio/la\' kad završiš.' : 'Slušaj pažljivo. Klikni \'▶ Ponavljanje\' za drugi put ili \'✓ Završio/la\'.')))
}