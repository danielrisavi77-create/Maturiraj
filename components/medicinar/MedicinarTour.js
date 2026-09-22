'use client'
import { useState, useEffect, useMemo, useSyncExternalStore } from 'react'

const TOUR_KEY = 'medicinar_tour_done_v1'

function buildSteps(isPro) {
  const steps = [
    {
      target: 'mm-tour-progress',
      title: '📚 Gradivo po predmetima',
      body: 'Ovdje pratiš koliko si prošao/la skripti i koliko dobro rješavaš vježbe za svaki predmet.',
    },
    {
      target: 'mm-tour-weakness',
      title: '🔥 Slabe teme',
      body: 'AI automatski detektira teme gdje griješiš — fokusiraj se na njih za brze pomake.',
    },
    {
      target: 'mm-tour-simulator',
      title: '⏱ Simulator prijemnog',
      body: 'Odradi timed simulator (kao pravi ispit) da vidiš gdje se rankiraš i koliko bodova osvajaš.',
    },
  ]
  if (isPro) {
    steps.push({
      target: 'mm-tour-briefing',
      title: '🤖 AI tjedni plan (Pro)',
      body: 'Svaki ponedjeljak generiraj personalizirani tjedni plan — AI analizira cijeli tvoj progress i daje konkretne akcije.',
    })
  }
  return steps
}

function getTargetRect(id) {
  const el = document.getElementById(id)
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { top: r.top, left: r.left, width: r.width, height: r.height, viewportWidth: window.innerWidth }
}

function createTargetRectStore(target) {
    let rect = null
    return {
      getSnapshot: () => rect,
      subscribe(listener) {
        if (!target) return () => {}
        function update() {
          const next = getTargetRect(target)
          if (next === null && rect === null) return
          if (next && rect && ['top', 'left', 'width', 'height', 'viewportWidth'].every(key => next[key] === rect[key])) return
          rect = next
          listener()
        }
        update()
        window.addEventListener('resize', update)
        window.addEventListener('scroll', update, true)
        return () => {
          window.removeEventListener('resize', update)
          window.removeEventListener('scroll', update, true)
        }
      },
    }
}

function useTargetRect(target) {
  const store = useMemo(() => createTargetRectStore(target), [target])
  return useSyncExternalStore(store.subscribe, store.getSnapshot, () => null)
}

const ARROW_SIZE = 12

export default function MedicinarTour({ isPro }) {
  const [step, setStep] = useState(null) // null = inactive
  const steps = useMemo(() => buildSteps(isPro), [isPro])
  const rect = useTargetRect(step === null ? null : steps[step]?.target)

  // Start tour on mount if not done yet
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(TOUR_KEY)) return
    // Small delay so layout has rendered
    const t = setTimeout(() => setStep(0), 600)
    return () => clearTimeout(t)
  }, [])

  // Listen for external restart trigger (e.g. "Pokreni vodič" button)
  useEffect(() => {
    function handleRestart() {
      localStorage.removeItem(TOUR_KEY)
      setTimeout(() => setStep(0), 150)
    }
    window.addEventListener('tour:start', handleRestart)
    return () => window.removeEventListener('tour:start', handleRestart)
  }, [])

  // Scroll target into view
  useEffect(() => {
    if (step === null) return
    const el = document.getElementById(steps[step].target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [step, steps])

  function dismiss() {
    localStorage.setItem(TOUR_KEY, '1')
    setStep(null)
  }

  function next() {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      dismiss()
    }
  }

  function prev() {
    if (step > 0) setStep(step - 1)
  }

  if (step === null) return null
  if (!rect) return null

  const current = steps[step]
  const isLast = step === steps.length - 1

  // Position popover below target, centred. Clamp to viewport.
  const vpw = rect.viewportWidth
  const POPOVER_W = 300
  let popLeft = rect.left + rect.width / 2 - POPOVER_W / 2
  popLeft = Math.max(12, Math.min(popLeft, vpw - POPOVER_W - 12))
  const popTop = rect.top + rect.height + ARROW_SIZE + 8

  // Arrow horizontal position relative to popover
  const arrowLeft = (rect.left + rect.width / 2) - popLeft - ARROW_SIZE

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TOUR_CSS }} />

      {/* Backdrop */}
      <div className="mt-backdrop" onClick={dismiss} />

      {/* Highlight ring around target */}
      <div
        className="mt-spotlight"
        style={{
          top: rect.top - 6,
          left: rect.left - 6,
          width: rect.width + 12,
          height: rect.height + 12,
        }}
      />

      {/* Popover */}
      <div
        className="mt-popover"
        style={{
          top: popTop,
          left: popLeft,
          width: POPOVER_W,
        }}
      >
        {/* Arrow */}
        <div className="mt-arrow" style={{ left: Math.max(12, Math.min(arrowLeft, POPOVER_W - 24)) }} />

        {/* Step indicator */}
        <div className="mt-dots">
          {steps.map((_, i) => (
            <div key={i} className={`mt-dot${i === step ? ' mt-dot-active' : ''}`} />
          ))}
        </div>

        <div className="mt-title">{current.title}</div>
        <div className="mt-body">{current.body}</div>

        <div className="mt-actions">
          <button className="mt-skip" onClick={dismiss}>Preskoči</button>
          <div style={{ display: 'flex', gap: 8 }}>
            {step > 0 && (
              <button className="mt-btn mt-btn-ghost" onClick={prev}>←</button>
            )}
            <button className="mt-btn" onClick={next}>
              {isLast ? 'Gotovo ✓' : 'Sljedeće →'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const TOUR_CSS = `
  .mt-backdrop {
    position: fixed; inset: 0; z-index: 900;
    background: rgba(7,9,15,.6);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }
  .mt-spotlight {
    position: fixed; z-index: 901;
    border-radius: 14px;
    box-shadow: 0 0 0 4px rgba(75,123,255,.55), 0 0 0 9999px rgba(7,9,15,.6);
    pointer-events: none;
    transition: top .25s, left .25s, width .25s, height .25s;
    animation: mt-pulse-ring 2s ease-in-out infinite;
  }
  @keyframes mt-pulse-ring {
    0%,100% { box-shadow: 0 0 0 4px rgba(75,123,255,.55), 0 0 0 9999px rgba(7,9,15,.6); }
    50%      { box-shadow: 0 0 0 7px rgba(75,123,255,.35), 0 0 0 9999px rgba(7,9,15,.6); }
  }
  .mt-popover {
    position: fixed; z-index: 902;
    background: var(--s2);
    border: 1px solid var(--bdr-hi);
    border-radius: 16px;
    padding: 18px 18px 14px;
    box-shadow: 0 24px 60px rgba(0,0,0,.6);
    transition: top .25s, left .25s;
  }
  .mt-arrow {
    position: absolute; top: -${ARROW_SIZE}px;
    width: 0; height: 0;
    border-left: ${ARROW_SIZE}px solid transparent;
    border-right: ${ARROW_SIZE}px solid transparent;
    border-bottom: ${ARROW_SIZE}px solid var(--bdr-hi);
  }
  .mt-arrow::after {
    content: ''; position: absolute;
    top: 2px; left: -${ARROW_SIZE - 1}px;
    width: 0; height: 0;
    border-left: ${ARROW_SIZE - 1}px solid transparent;
    border-right: ${ARROW_SIZE - 1}px solid transparent;
    border-bottom: ${ARROW_SIZE - 1}px solid var(--s2);
  }
  .mt-dots { display: flex; gap: 5px; margin-bottom: 10px; }
  .mt-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--bdr-hi); transition: all .2s; }
  .mt-dot-active { width: 16px; border-radius: 3px; background: var(--blue); }
  .mt-title { font-family: var(--fh); font-size: 15px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
  .mt-body { font-size: 13px; color: var(--muted); line-height: 1.55; margin-bottom: 14px; }
  .mt-actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .mt-skip { background: none; border: none; font-size: 12px; color: var(--muted); cursor: pointer; font-family: var(--fb); padding: 0; }
  .mt-skip:hover { color: var(--text); }
  .mt-btn {
    padding: 7px 14px; border-radius: 9px; font-size: 13px; font-weight: 600;
    cursor: pointer; font-family: var(--fb); border: none;
    background: var(--blue); color: #fff; transition: opacity .15s;
  }
  .mt-btn:hover { opacity: .85; }
  .mt-btn-ghost {
    background: rgba(255,255,255,.07); color: var(--text);
    border: 1px solid var(--bdr);
  }
`
