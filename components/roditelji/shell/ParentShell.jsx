'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { childScore, childStatus } from '@/lib/roditelji/roditeljiUtils'

const TABS = [
  { href: '/roditelji/pregled',    label: '🏠 Pregled' },
  { href: '/roditelji/dijete',     label: '👤 Dijete' },
  { href: '/roditelji/uvidi',      label: '📊 Uvidi' },
  { href: '/roditelji/obavijesti', label: '🔔 Obavijesti' },
  { href: '/roditelji/preporuke',  label: '💡 Preporuke' },
  { href: '/roditelji/medicinar',  label: '🩺 Medicinar' },
]

const HEADINGS = {
  '/roditelji/pregled':    { sub: 'Evo kako stoje vaša djeca. Sve važno na jednom mjestu.' },
  '/roditelji/dijete':     { sub: '' },
  '/roditelji/uvidi':      { sub: 'Trendovi, rizici i što to znači — roditeljskim jezikom.' },
  '/roditelji/obavijesti': { sub: 'Sve što zahtijeva vašu pažnju — na jednom mjestu.' },
  '/roditelji/preporuke':  { sub: 'Konkretni koraci koji pomažu — bez pritiska, u vašem ritmu.' },
  '/roditelji/medicinar':  { sub: 'Read-only pregled Medicinar Mode napretka vašeg djeteta.' },
}

export default function ParentShell({ children }) {
  const pathname = usePathname()
  const router   = useRouter()
  const { parent, djeca, activeChild, activeChildId, setActiveChildId } = useParentContext()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const totalUnread = djeca.flatMap(c => c.obavijesti.filter(o => !o.read)).length

  function go(href) {
    router.push(href)
    setDrawerOpen(false)
  }

  function switchChild(id) {
    setActiveChildId(id)
    if (!pathname.startsWith('/roditelji/pregled')) router.push('/roditelji/pregled')
    setDrawerOpen(false)
  }

  function handleLogout() {
    router.replace('/')
  }

  // Dynamic heading based on current route
  const heading = (() => {
    const base = HEADINGS[pathname]
    if (pathname === '/roditelji/pregled') {
      return {
        h: <><span>Dobar dan, </span><span className="r-g-gold">{parent.firstName}</span></>,
        sub: base?.sub,
      }
    }
    if (pathname === '/roditelji/dijete') {
      return {
        h: <><span>Profil: </span><span className="r-g-blue">{activeChild?.name}</span></>,
        sub: `Detaljni pregled napretka za ${activeChild?.firstName}.`,
      }
    }
    if (pathname === '/roditelji/uvidi') {
      return {
        h: <><span>Uvidi za </span><span className="r-g-blue">{activeChild?.firstName}</span></>,
        sub: base?.sub,
      }
    }
    if (pathname === '/roditelji/obavijesti') {
      return {
        h: <>Obavijesti{totalUnread > 0 && <span style={{ fontFamily: 'var(--fb)', fontSize: 16, fontWeight: 600, color: 'var(--red)', marginLeft: 10 }}>({totalUnread})</span>}</>,
        sub: base?.sub,
      }
    }
    if (pathname === '/roditelji/preporuke') {
      return { h: <>Preporuke za ovaj tjedan</>, sub: base?.sub }
    }
    if (pathname === '/roditelji/medicinar') {
      return { h: <><span>Medicinar Mode — </span><span className="r-g-blue">praćenje</span></>, sub: base?.sub }
    }
    return { h: <>Roditeljski portal</>, sub: '' }
  })()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* ── Fixed top nav ── */}
      <nav className="r-pnav">
        <div className="r-pnav-in">
          <div className="r-pnav-logo">
            <span>Maturiraj</span>
            <div className="r-pnav-dot" />
            <span className="r-badge r-b-gold" style={{ fontSize: 10, marginLeft: 2 }}>Roditelji PRO</span>
          </div>

          <div className="r-pnav-tabs">
            {TABS.map(t => (
              <Link key={t.href} href={t.href} className={`r-pntab${pathname === t.href ? ' on' : ''}`}>
                {t.label}
                {t.href === '/roditelji/obavijesti' && totalUnread > 0 && <span className="r-pip" />}
              </Link>
            ))}
          </div>

          <div className="r-pnav-right">
            <Link href="/" className="r-btn r-bgh r-btn-sm" style={{ fontSize: 12, textDecoration: 'none' }}>← Početna</Link>
            <button className="r-btn r-bgh r-btn-sm" style={{ fontSize: 12 }} onClick={handleLogout}>Odjava</button>
            <button className={`r-burger${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(v => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="r-mdrawer">
          {TABS.map(t => (
            <button key={t.href} className={`r-pntab${pathname === t.href ? ' on' : ''}`} onClick={() => go(t.href)}>
              {t.label}
              {t.href === '/roditelji/obavijesti' && totalUnread > 0 && (
                <span style={{ fontSize: 11, color: 'var(--red)', fontWeight: 700, marginLeft: 4 }}>({totalUnread})</span>
              )}
            </button>
          ))}
          <div className="r-mdrawer-foot">
            <Link href="/" className="r-btn r-bgh r-btn-sm" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>← Početna</Link>
            <button className="r-btn r-bgh r-btn-sm" style={{ width: '100%', marginTop: 8 }} onClick={handleLogout}>Odjava</button>
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div style={{ flex: 1, paddingTop: 60 }}>
        {/* Section hero */}
        <div className="r-shero">
          <div className="r-orb" style={{ width: 380, height: 380, top: '-60%', right: '6%', background: 'radial-gradient(circle,rgba(75,123,255,.08),transparent 65%)', animation: 'orb-a 20s ease-in-out infinite' }} />
          <div className="r-orb" style={{ width: 280, height: 280, bottom: '-60%', left: '8%', background: 'radial-gradient(circle,rgba(233,180,70,.06),transparent 65%)', animation: 'orb-b 24s ease-in-out infinite' }} />

          <div className="r-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 28, alignItems: 'center' }} className="r-shero-grid">
              <div>
                <div className="r-eye" style={{ marginBottom: 9 }}>Roditeljski portal · PRO</div>
                <h1 className="r-d3 r-fu" style={{ marginBottom: 6 }}>{heading.h}</h1>
                {heading.sub && <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.78, maxWidth: 460 }}>{heading.sub}</p>}
              </div>

              {/* Child switcher */}
              <div>
                <div className="r-eye" style={{ marginBottom: 8 }}>Vaša djeca</div>
                <div className="r-csw">
                  {djeca.map(c => {
                    const cWarns = c.obavijesti.filter(o => o.tip === 'warn' && !o.read).length
                    const isActive = c.id === activeChildId
                    return (
                      <button key={c.id} className={`r-cbtn${isActive ? ' on' : ''}`}
                        style={isActive ? { borderColor: `${c.color}38`, background: `${c.color}0a` } : {}}
                        onClick={() => switchChild(c.id)}>
                        <div className="r-cav" style={{ background: c.colorBg, color: c.color }}>{c.avatar}</div>
                        <div style={{ textAlign: 'left' }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: isActive ? 'var(--text)' : 'var(--muted)' }}>{c.firstName}</div>
                          <div style={{ fontSize: 11, color: 'var(--muted)' }}>{c.razred}</div>
                        </div>
                        {cWarns > 0 && <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 8px var(--red)', flexShrink: 0, animation: 'pulse-ring 2s ease-in-out infinite' }} />}
                        {isActive && cWarns === 0 && <div style={{ width: 6, height: 6, borderRadius: '50%', background: c.color, boxShadow: `0 0 8px ${c.color}`, flexShrink: 0 }} />}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="r-wrap" style={{ paddingTop: 32, paddingBottom: 80 }}>
          {children}
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--bdr)', background: 'var(--s1)' }}>
          <div className="r-wrap" style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--fh)', fontSize: 14, fontWeight: 900 }}>Maturiraj</span>
              <span className="r-badge r-b-gold" style={{ fontSize: 10 }}>PRO Roditelji</span>
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['🔒 GDPR zaštita', '✓ PRO plan aktivan', '🇭🇷 Hrvatska'].map(t => (
                <span key={t} style={{ fontSize: 11, color: 'var(--muted)' }}>{t}</span>
              ))}
            </div>
            <button className="r-btn r-bgh r-btn-xs" onClick={handleLogout} style={{ fontSize: 11 }}>Odjava</button>
          </div>
        </div>
      </div>
    </div>
  )
}
