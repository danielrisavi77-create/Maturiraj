'use client'
import { useEffect, useState } from 'react'

// #4 — Mobile bottom nav for the list view (Matcher | Compare | Filter | Share)
// Only visible at ≤640px. Separate from MobileBottomNav which is detail-view only.
export default function ListViewBottomNav({
  onOpenMatcher,
  onOpenCompare,
  onOpenFilter,
  track,
}) {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      if (y > lastY && y > 80) setVisible(false)
      else setVisible(true)
      setLastY(y)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [lastY])

  const handleAction = (id) => {
    if (typeof navigator.vibrate === 'function') navigator.vibrate(10)
    track?.('list_bottom_nav_click', null, null, null, { action: id })
    if (id === 'matcher') onOpenMatcher?.()
    else if (id === 'compare') onOpenCompare?.()
    else if (id === 'filter') onOpenFilter?.()
    else if (id === 'share') {
      if (typeof navigator.share === 'function') {
        navigator.share({
          title: 'Maturiraj.hr — Prijemni 2026',
          text: 'Provjeri prijemne ispite i pronađi savršen studij!',
          url: window.location.href,
        }).catch(() => {})
      } else {
        navigator.clipboard?.writeText(window.location.href).catch(() => {})
      }
    }
  }

  const ACTIONS = [
    { id: 'matcher', icon: '🎯', label: 'Matcher' },
    { id: 'compare', icon: '⚖️', label: 'Usporedi' },
    { id: 'filter', icon: '⚙️', label: 'Filteri' },
    { id: 'share', icon: '📤', label: 'Dijeli' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .lvb-root{
          display:none;
          position:fixed;left:0;right:0;bottom:0;z-index:90;
          padding:6px 6px calc(6px + env(safe-area-inset-bottom)) 6px;
          background:rgba(7,9,15,.95);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
          border-top:1px solid var(--bdr);
          transition:transform .25s cubic-bezier(.16,1,.3,1)
        }
        .lvb-root.hidden{transform:translateY(100%)}
        .lvb-row{display:flex;justify-content:space-around;align-items:stretch;gap:2px}
        .lvb-tab{
          flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;
          padding:8px 4px 4px;border-radius:10px;background:transparent;border:none;cursor:pointer;
          transition:background .15s;font-family:var(--fb);min-width:0
        }
        .lvb-tab:active{background:rgba(255,255,255,.07)}
        .lvb-tab-icon{font-size:20px;line-height:1}
        .lvb-tab-label{font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.02em}
        @media(max-width:640px){
          .lvb-root{display:block}
          body{padding-bottom:calc(60px + env(safe-area-inset-bottom))}
        }
      `}}/>

      <nav className={`lvb-root${visible ? '' : ' hidden'}`}>
        <div className="lvb-row">
          {ACTIONS.map(a => (
            <button key={a.id} className="lvb-tab" onClick={() => handleAction(a.id)}>
              <span className="lvb-tab-icon">{a.icon}</span>
              <span className="lvb-tab-label">{a.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
