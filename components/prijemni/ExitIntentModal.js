'use client'
import { useState, useEffect, useRef } from 'react'
import { getActiveUrgencies, urgencyColor } from '@/lib/prijemni/urgency'

const SHOWN_KEY = 'mh_exit_intent_shown'
const SESSION_KEY = 'mh_exit_intent_session'
const COOLDOWN_HOURS = 72

function alreadyShown() {
  if (typeof window === 'undefined') return false
  try {
    const shown = localStorage.getItem(SHOWN_KEY)
    if (shown && Date.now() - parseInt(shown) < COOLDOWN_HOURS * 3600 * 1000) return true
    // Also: max 1 per session
    const session = sessionStorage.getItem(SESSION_KEY)
    if (session) return true
  } catch {}
  return false
}

function markShown() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(SHOWN_KEY, String(Date.now()))
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {}
}

export default function ExitIntentModal({ fakulteti, onAction, track }) {
  const [visible, setVisible] = useState(false)
  const [urgencies, setUrgencies] = useState([])
  const triggeredRef = useRef(false)
  const timeOnPageRef = useRef(null)

  useEffect(() => { timeOnPageRef.current = Date.now() }, [])

  useEffect(() => {
    if (!fakulteti || alreadyShown()) return

    // Potrebna je ≥ 1 urgency < 14 dana da opravdamo exit modal
    const allStudiji = fakulteti.flatMap(f =>
      f.studiji.map(s => ({ ...s, fakultet: f }))
    )
    const active = getActiveUrgencies(allStudiji)
    if (active.length === 0) return

    // Trigger:
    // 1. Desktop: mouseleave preko top edge
    // 2. Mobile: scroll up rapidly OR pagehide (tab change / close)
    // 3. Minimum 15s on page — inače ne znamo da je engagement stvaran

    const shouldTrigger = () => {
      if (triggeredRef.current) return false
      if (Date.now() - timeOnPageRef.current < 15_000) return false
      return true
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && shouldTrigger()) {
        triggeredRef.current = true
        setUrgencies(active.slice(0, 3))
        setVisible(true)
        markShown()
        track?.('exit_intent_shown', null, null, null, {
          trigger: 'mouseleave',
          urgencies_count: active.length,
          time_on_page: Date.now() - timeOnPageRef.current,
        })
      }
    }

    let lastScrollY = window.scrollY
    let lastScrollT = Date.now()
    const handleScroll = () => {
      const now = Date.now()
      const y = window.scrollY
      const dt = now - lastScrollT
      const dy = y - lastScrollY
      // Fast scroll up (> 100px in < 200ms) near top
      if (dy < -100 && dt < 200 && y < 200 && shouldTrigger()) {
        triggeredRef.current = true
        setUrgencies(active.slice(0, 3))
        setVisible(true)
        markShown()
        track?.('exit_intent_shown', null, null, null, {
          trigger: 'scroll_up',
          urgencies_count: active.length,
        })
      }
      lastScrollY = y
      lastScrollT = now
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fakulteti, track])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [visible])

  if (!visible || urgencies.length === 0) return null

  const handleAction = (urgency) => {
    track?.('exit_intent_action', urgency.studij_id, null, null, {
      action: 'open_studij',
      level: urgency.level,
    })
    const studij = fakulteti
      .flatMap(f => f.studiji.map(s => ({ ...s, fakultet: f })))
      .find(s => s.id === urgency.studij_id)
    if (studij) onAction?.(studij, studij.fakultet)
    setVisible(false)
  }

  const handleSubscribe = async () => {
    track?.('exit_intent_action', null, null, null, { action: 'subscribe_reminders' })
    // Redirect na /reminders/new?studij=... ili pokazuj mini opt-in form
    window.location.href = '/reminders/new?studiji=' + urgencies.map(u => u.studij_id).join(',')
  }

  const handleClose = () => {
    track?.('exit_intent_action', null, null, null, { action: 'close' })
    setVisible(false)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes eim-fade{from{opacity:0}to{opacity:1}}
        @keyframes eim-up{from{opacity:0;transform:translateY(24px) scale(.96)}to{opacity:1;transform:none}}
        .eim-backdrop{
          position:fixed;inset:0;z-index:220;background:rgba(7,9,15,.82);
          backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
          display:flex;align-items:center;justify-content:center;padding:20px;
          animation:eim-fade .25s ease
        }
        .eim-sheet{
          max-width:520px;width:100%;
          background:linear-gradient(165deg,#101628 0%,#0a0f1e 100%);
          border:1px solid rgba(251,146,60,.28);
          border-radius:22px;
          box-shadow:0 40px 120px rgba(0,0,0,.6),0 0 0 1px rgba(251,146,60,.08);
          animation:eim-up .32s cubic-bezier(.16,1,.3,1);
          position:relative;overflow:hidden
        }
        .eim-glow{
          position:absolute;top:-80px;left:50%;transform:translateX(-50%);
          width:400px;height:160px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(251,146,60,.22),transparent 70%);
          filter:blur(40px);pointer-events:none
        }
        .eim-close{
          position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:9px;
          background:rgba(255,255,255,.05);border:1px solid var(--bdr);
          color:var(--muted);cursor:pointer;display:flex;align-items:center;justify-content:center;
          font-size:14px;z-index:2;transition:all .15s
        }
        .eim-close:hover{background:rgba(255,255,255,.1);color:var(--text)}
        .eim-head{padding:36px 30px 22px;position:relative;text-align:center}
        .eim-ic{
          display:inline-flex;align-items:center;justify-content:center;
          width:58px;height:58px;border-radius:16px;margin-bottom:14px;
          background:linear-gradient(135deg,rgba(251,146,60,.2),rgba(248,113,113,.14));
          border:1px solid rgba(251,146,60,.3);font-size:28px
        }
        .eim-title{
          font-family:var(--fh);font-size:24px;font-weight:800;letter-spacing:-.025em;
          line-height:1.15;margin-bottom:8px
        }
        .eim-sub{
          font-size:13.5px;color:var(--muted);line-height:1.55;max-width:380px;margin:0 auto
        }
        .eim-list{padding:0 26px 22px;display:flex;flex-direction:column;gap:8px}
        .eim-item{
          display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;
          background:rgba(255,255,255,.03);border:1px solid var(--bdr);
          cursor:pointer;transition:border-color .15s,transform .15s
        }
        .eim-item:hover{transform:translateY(-1px)}
        .eim-item-dot{
          width:8px;height:8px;border-radius:50%;flex-shrink:0;
          animation:pr-pulse 1.5s ease-in-out infinite
        }
        .eim-item-body{flex:1;min-width:0}
        .eim-item-name{
          font-size:13px;font-weight:700;color:var(--text);
          margin-bottom:2px;letter-spacing:-.01em
        }
        .eim-item-sub{font-size:11px;color:var(--muted);line-height:1.4}
        .eim-item-arrow{color:var(--muted);font-size:16px;flex-shrink:0}
        .eim-foot{
          padding:16px 26px 22px;border-top:1px solid var(--bdr);
          display:flex;flex-direction:column;gap:10px
        }
        .eim-btn{
          padding:12px 20px;border-radius:11px;font-size:14px;font-weight:700;
          cursor:pointer;font-family:var(--fb);border:none;transition:all .15s;
          width:100%;display:flex;align-items:center;justify-content:center;gap:8px
        }
        .eim-btn-p{
          background:linear-gradient(135deg,#fb923c,#f59e0b);color:#160d00;
          box-shadow:0 4px 16px rgba(251,146,60,.3)
        }
        .eim-btn-p:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(251,146,60,.45)}
        .eim-btn-s{
          background:transparent;color:var(--muted);border:1px solid var(--bdr);font-size:12px;
          padding:9px 16px
        }
        .eim-btn-s:hover{color:var(--text);border-color:var(--bdr-hi)}
        @media(max-width:520px){
          .eim-sheet{max-height:90vh;overflow-y:auto}
          .eim-head{padding:28px 22px 18px}
          .eim-title{font-size:20px}
          .eim-list{padding:0 18px 18px}
          .eim-foot{padding:14px 18px 20px}
        }
      `}}/>

      <div className="eim-backdrop" onClick={handleClose}>
        <div className="eim-sheet" onClick={e => e.stopPropagation()}>
          <div className="eim-glow"/>
          <button className="eim-close" onClick={handleClose} aria-label="Zatvori">✕</button>

          <div className="eim-head">
            <div className="eim-ic">⏰</div>
            <h2 className="eim-title">
              Prije nego kreneš — <span style={{color:'#fb923c'}}>uskoro su deadline-i</span>
            </h2>
            <p className="eim-sub">
              Ne propusti prijavu za fakultete koji te zanimaju. Možemo te podsjetiti.
            </p>
          </div>

          <div className="eim-list">
            {urgencies.map(u => {
              const studij = fakulteti
                .flatMap(f => f.studiji.map(s => ({ ...s, fakultet: f })))
                .find(s => s.id === u.studij_id)
              if (!studij) return null
              const color = urgencyColor(u.level)
              return (
                <div key={u.studij_id} className="eim-item" onClick={() => handleAction(u)}
                  onMouseEnter={e => e.currentTarget.style.borderColor = color + '55'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}>
                  <div className="eim-item-dot" style={{background: color, boxShadow: `0 0 6px ${color}`}}/>
                  <div className="eim-item-body">
                    <div className="eim-item-name">{studij.fak_short} — {studij.naziv}</div>
                    <div className="eim-item-sub" style={{color}}>
                      <strong>{u.label}</strong>
                      {u.deadline_type === 'prijava_do' && studij.prijava_do && ` • ${studij.prijava_do}`}
                    </div>
                  </div>
                  <div className="eim-item-arrow">→</div>
                </div>
              )
            })}
          </div>

          <div className="eim-foot">
            <button className="eim-btn eim-btn-p" onClick={handleSubscribe}>
              🔔 Podsjeti me na sve deadline-ove
            </button>
            <button className="eim-btn eim-btn-s" onClick={handleClose}>
              Možda kasnije
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
