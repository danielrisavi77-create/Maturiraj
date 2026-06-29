'use client'
import { useState, useEffect, useMemo } from 'react'
import { getActiveUrgencies, urgencyColor } from '@/lib/prijemni/urgency'

const DISMISS_KEY = 'mh_urgency_banner_dismissed'
const DISMISS_DURATION_HOURS = 24

function isDismissed(studijId) {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    if (!raw) return false
    const data = JSON.parse(raw)
    const dismissedAt = data[studijId]
    if (!dismissedAt) return false
    return Date.now() - dismissedAt < DISMISS_DURATION_HOURS * 3600 * 1000
  } catch {
    return false
  }
}

function markDismissed(studijId) {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    const data = raw ? JSON.parse(raw) : {}
    data[studijId] = Date.now()
    localStorage.setItem(DISMISS_KEY, JSON.stringify(data))
  } catch {}
}

export default function UrgencyBanner({ fakulteti, onSelectStudij, track }) {
  const [dismissedIds, setDismissedIds] = useState(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const urgencies = useMemo(() => {
    if (!fakulteti) return []
    const allStudiji = fakulteti.flatMap(f =>
      f.studiji.map(s => ({ ...s, fakultet: f }))
    )
    return getActiveUrgencies(allStudiji)
  }, [fakulteti])

  // Stacked summary: 2+ nedismissani urgencies svi ≤7 dana
  const thisWeekUrgencies = useMemo(() => {
    if (!mounted) return []
    return urgencies.filter(u =>
      !dismissedIds.has(u.studij_id) &&
      !isDismissed(u.studij_id) &&
      u.days_left <= 7
    )
  }, [urgencies, dismissedIds, mounted])

  // Filter — samo najbliži među nedismissanima
  const visibleUrgency = useMemo(() => {
    if (!mounted) return null
    return urgencies.find(u => !dismissedIds.has(u.studij_id) && !isDismissed(u.studij_id))
  }, [urgencies, dismissedIds, mounted])

  // Track view (once per studij per session)
  useEffect(() => {
    if (visibleUrgency) {
      track?.('urgency_banner_shown', visibleUrgency.studij_id, null, null, {
        level: visibleUrgency.level,
        days_left: visibleUrgency.days_left,
        deadline_type: visibleUrgency.deadline_type,
      })
    }
  }, [visibleUrgency?.studij_id])

  if (!visibleUrgency && thisWeekUrgencies.length === 0) return null

  // Stacked mode — 2+ urgencies this week
  if (thisWeekUrgencies.length >= 2) {
    const stackColor = '#f59e0b'
    const prijavas = thisWeekUrgencies.filter(u => u.deadline_type === 'prijava_do').length
    const ispiti = thisWeekUrgencies.filter(u => u.deadline_type === 'ispit').length
    const parts = []
    if (prijavas > 0) parts.push(`${prijavas} ${prijavas === 1 ? 'prijava' : 'prijave'}`)
    if (ispiti > 0) parts.push(`${ispiti} ${ispiti === 1 ? 'ispit' : 'ispita'}`)
    const label = parts.join(' i ')
    return (
      <>
        <style dangerouslySetInnerHTML={{__html:`
          @keyframes ub-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
          .ub-stack{
            position:relative;z-index:90;margin-bottom:18px;
            border-radius:14px;overflow:hidden;
            background:linear-gradient(100deg,${stackColor}14 0%,${stackColor}06 60%,transparent 100%);
            border:1px solid ${stackColor}44;
            animation:ub-in .35s cubic-bezier(.16,1,.3,1);
            display:flex;align-items:center;gap:14px;padding:12px 16px;
            cursor:pointer;
          }
          .ub-stack:hover{background:linear-gradient(100deg,${stackColor}22 0%,${stackColor}0a 60%,transparent 100%)}
          .ub-stack-ic{font-size:20px;flex-shrink:0}
          .ub-stack-body{flex:1;min-width:0}
          .ub-stack-lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${stackColor};margin-bottom:2px}
          .ub-stack-txt{font-size:13.5px;color:var(--text);font-weight:500;line-height:1.4}
          .ub-stack-txt strong{color:${stackColor};font-weight:700}
          .ub-stack-arr{color:${stackColor};font-weight:700;font-size:16px;flex-shrink:0}
          @media(max-width:520px){.ub-stack-txt{font-size:12px}.ub-stack-lbl{display:none}}
        `}}/>
        <div className="ub-stack"
          onClick={() => {
            track?.('urgency_banner_stacked_click', null, null, null, { count: thisWeekUrgencies.length })
            // Scroll to list — user can see all
            window.scrollTo({ top: 200, behavior: 'smooth' })
          }}>
          <div className="ub-stack-ic">📋</div>
          <div className="ub-stack-body">
            <div className="ub-stack-lbl">⚡ Ovaj tjedan ističe</div>
            <div className="ub-stack-txt">
              <strong>{label}</strong> ističe ovaj tjedan — provjeri sve deadlinee
            </div>
          </div>
          <div className="ub-stack-arr">→</div>
        </div>
      </>
    )
  }

  if (!visibleUrgency) return null

  // Nađi puni studij objekt
  const studij = fakulteti
    .flatMap(f => f.studiji.map(s => ({ ...s, fakultet: f })))
    .find(s => s.id === visibleUrgency.studij_id)
  if (!studij) return null

  const color = urgencyColor(visibleUrgency.level)
  const dayLabel = visibleUrgency.days_left === 0 ? 'danas' :
                   visibleUrgency.days_left === 1 ? 'sutra' :
                   `za ${visibleUrgency.days_left} dana`
  const actionLabel = visibleUrgency.deadline_type === 'prijava_do'
    ? 'zatvara se prijava'
    : 'je ispit'

  const handleDismiss = (e) => {
    e.stopPropagation()
    markDismissed(visibleUrgency.studij_id)
    setDismissedIds(prev => new Set([...prev, visibleUrgency.studij_id]))
    track?.('urgency_banner_dismissed', visibleUrgency.studij_id, null, null, {
      level: visibleUrgency.level,
    })
  }

  const handleClick = () => {
    track?.('urgency_banner_click', visibleUrgency.studij_id, null, null, {
      level: visibleUrgency.level,
    })
    onSelectStudij?.(studij, studij.fakultet)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes ub-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
        @keyframes ub-pulse{0%,100%{box-shadow:0 0 0 0 ${color}44}50%{box-shadow:0 0 0 6px ${color}00}}
        .ub-root{
          position:relative;z-index:90;margin-bottom:18px;
          border-radius:14px;overflow:hidden;
          background:linear-gradient(100deg,${color}14 0%,${color}06 60%,transparent 100%);
          border:1px solid ${color}44;
          animation:ub-in .35s cubic-bezier(.16,1,.3,1);
          display:flex;align-items:center;gap:14px;padding:12px 14px 12px 16px
        }
        .ub-dot{
          width:10px;height:10px;border-radius:50%;background:${color};
          box-shadow:0 0 8px ${color};flex-shrink:0;
          animation:pr-pulse 1.4s ease-in-out infinite
        }
        .ub-body{flex:1;min-width:0;cursor:pointer}
        .ub-lbl{
          font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:${color};margin-bottom:2px
        }
        .ub-txt{
          font-size:13.5px;color:var(--text);line-height:1.4;
          letter-spacing:-.005em;font-weight:500
        }
        .ub-txt strong{color:${color};font-weight:700}
        .ub-actions{display:flex;align-items:center;gap:6px;flex-shrink:0}
        .ub-btn{
          padding:7px 13px;border-radius:9px;font-size:12px;font-weight:700;
          cursor:pointer;font-family:var(--fb);white-space:nowrap;
          background:${color};color:#160d00;border:none;
          transition:transform .15s
        }
        .ub-btn:hover{transform:translateY(-1px)}
        .ub-close{
          width:28px;height:28px;border-radius:8px;
          background:rgba(255,255,255,.04);border:1px solid var(--bdr);
          color:var(--muted);cursor:pointer;display:flex;align-items:center;
          justify-content:center;font-size:12px;transition:all .15s
        }
        .ub-close:hover{background:rgba(255,255,255,.08);color:var(--text)}
        @media(max-width:520px){
          .ub-root{padding:10px 10px 10px 12px;gap:10px}
          .ub-txt{font-size:12px;line-height:1.35}
          .ub-btn{padding:6px 10px;font-size:11px}
          .ub-lbl{display:none}
        }
      `}}/>

      <div className="ub-root">
        <div className="ub-dot"/>
        <div className="ub-body" onClick={handleClick}>
          <div className="ub-lbl">
            {visibleUrgency.level === 'critical' ? '🔥 Kritično' :
             visibleUrgency.level === 'urgent' ? '⚠️ Uskoro' : '📅 Bliži se'}
          </div>
          <div className="ub-txt">
            <strong>{studij.fak_short} — {studij.naziv}:</strong> {actionLabel} <strong>{dayLabel}</strong>
            {visibleUrgency.deadline_type === 'prijava_do' && studij.prijava_do && (
              <> ({studij.prijava_do})</>
            )}
          </div>
        </div>
        <div className="ub-actions">
          <button className="ub-btn" onClick={handleClick}>
            Otvori →
          </button>
          <button className="ub-close" onClick={handleDismiss} title="Sakrij na 24h">
            ✕
          </button>
        </div>
      </div>
    </>
  )
}
