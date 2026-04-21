'use client'
import { useEffect, useState } from 'react'

const TABS = [
  { id: 'info',       icon: '📋', label: 'Info' },
  { id: 'datumi',     icon: '📅', label: 'Datumi' },
  { id: 'kalkulator', icon: '🧮', label: 'Kalk.' },
  { id: 'gradivo',    icon: '📚', label: 'Gradivo' },  // virtual tab — opens sidebar
]

export default function MobileBottomNav({
  activeTab, onTabChange,
  sidebarOpen, onSidebarToggle,
  fakColor, proStatus, track,
}) {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)

  // Hide on scroll down, show on scroll up (iOS-style)
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      if (y > lastY && y > 100) setVisible(false)
      else setVisible(true)
      setLastY(y)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [lastY])

  const handleTab = (id) => {
    if (typeof navigator.vibrate === 'function') navigator.vibrate(10)
    if (id === 'gradivo') {
      onSidebarToggle()
      track?.('mobile_tab_click', null, null, null, { tab: 'gradivo' })
      return
    }
    onTabChange(id)
    track?.('mobile_tab_click', null, null, null, { tab: id })
  }

  // Active state: gradivo if sidebar open, otherwise activeTab
  const activeId = sidebarOpen ? 'gradivo' : activeTab

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes mbn-slide-down{to{transform:translateY(100%)}}
        @keyframes mbn-slide-up{from{transform:translateY(100%)}}

        .mbn-root{
          display:none;
          position:fixed;left:0;right:0;bottom:0;z-index:90;
          padding:6px 6px calc(6px + env(safe-area-inset-bottom)) 6px;
          background:rgba(7,9,15,.95);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
          border-top:1px solid var(--bdr);
          transition:transform .25s cubic-bezier(.16,1,.3,1)
        }
        .mbn-root.hidden{transform:translateY(100%)}
        .mbn-row{display:flex;justify-content:space-around;align-items:stretch;gap:2px}
        .mbn-tab{
          flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;
          padding:8px 4px 4px;border-radius:10px;background:transparent;border:none;cursor:pointer;
          transition:background .15s;font-family:var(--fb);position:relative;min-width:0
        }
        .mbn-tab-icon{
          font-size:20px;line-height:1;transition:transform .2s cubic-bezier(.16,1,.3,1)
        }
        .mbn-tab-label{
          font-size:10px;font-weight:600;color:var(--muted);
          letter-spacing:.02em;transition:color .15s
        }
        .mbn-tab.on .mbn-tab-icon{transform:scale(1.08)}
        .mbn-tab.on .mbn-tab-label{color:var(--fak-color,var(--blue));font-weight:700}
        .mbn-tab.locked .mbn-tab-icon{opacity:.4}
        .mbn-tab-dot{
          position:absolute;top:6px;left:50%;width:5px;height:5px;border-radius:50%;
          background:var(--fak-color,var(--blue));opacity:0;transform:translateX(-50%) scale(.5);
          transition:all .25s cubic-bezier(.16,1,.3,1);
          box-shadow:0 0 6px var(--fak-color,var(--blue))
        }
        .mbn-tab.on .mbn-tab-dot{opacity:1;transform:translateX(-50%) scale(1)}
        .mbn-lock{
          position:absolute;top:6px;right:18%;font-size:9px;opacity:.7
        }

        @media(max-width:640px){
          .mbn-root{display:block}
          /* Push body up to make room */
          body{padding-bottom:calc(60px + env(safe-area-inset-bottom))}
        }
      `}}/>

      <nav className={`mbn-root${visible ? '' : ' hidden'}`} style={{'--fak-color': fakColor}}>
        <div className="mbn-row">
          {TABS.map(t => {
            const locked = proStatus !== 'allowed' && (t.id === 'info' || t.id === 'kalkulator')
            const isActive = activeId === t.id
            return (
              <button key={t.id}
                className={`mbn-tab${isActive ? ' on' : ''}${locked ? ' locked' : ''}`}
                onClick={() => handleTab(t.id)}>
                <span className="mbn-tab-dot"/>
                <span className="mbn-tab-icon">{t.icon}</span>
                <span className="mbn-tab-label">{t.label}</span>
                {locked && <span className="mbn-lock">🔒</span>}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
