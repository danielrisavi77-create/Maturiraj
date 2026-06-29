'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { useParentAlerts } from '@/lib/roditelji/useParentAlerts'
import ChildSwitcher from './ChildSwitcher'

const NAV = [
  { href: '/roditelji/pregled',    label: 'Pregled',    icon: GridIcon },
  { href: '/roditelji/obavijesti', label: 'Obavijesti', icon: BellIcon, badge: true },
  { href: '/roditelji/preporuke',  label: 'Preporuke',  icon: BulbIcon },
  { href: '/roditelji/rokovi',     label: 'Rokovi',     icon: CalIcon },
  { href: '/roditelji/postavke',   label: 'Postavke',   icon: CogIcon },
]

export default function ParentNav() {
  const pathname = usePathname()
  const { linkedChildren } = useParentContext()
  const alerts  = useParentAlerts(linkedChildren)
  const urgentCount = alerts.filter(a => a.severity === 'urgent').length

  return (
    <nav style={styles.nav}>
      {NAV.map(({ href, label, icon: Icon, badge }) => {
        const active = pathname.startsWith(href)
        return (
          <Link key={href} href={href} style={{ ...styles.item, ...(active ? styles.active : {}) }}>
            <span style={styles.iconWrap}>
              <Icon active={active} />
              {badge && urgentCount > 0 && (
                <span style={styles.badge}>{urgentCount > 9 ? '9+' : urgentCount}</span>
              )}
            </span>
            <span style={{ ...styles.label, ...(active ? styles.labelActive : {}) }}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

// ── Mobile bottom nav ─────────────────────────────────────────────────────────
export function ParentMobileNav() {
  const pathname = usePathname()
  const { linkedChildren } = useParentContext()
  const alerts   = useParentAlerts(linkedChildren)
  const urgentCount = alerts.filter(a => a.severity === 'urgent').length

  const mobileNav = NAV.slice(0, 4) // pregled, obavijesti, preporuke, rokovi — postavke u "Više"

  return (
    <nav style={styles.mobileNav}>
      {mobileNav.map(({ href, label, icon: Icon, badge }) => {
        const active = pathname.startsWith(href)
        return (
          <Link key={href} href={href} style={{ ...styles.mobileItem, ...(active ? styles.mobileActive : {}) }}>
            <span style={{ position: 'relative' }}>
              <Icon active={active} size={20} />
              {badge && urgentCount > 0 && (
                <span style={{ ...styles.badge, top: -5, right: -7 }}>{urgentCount > 9 ? '9+' : urgentCount}</span>
              )}
            </span>
            <span style={{ fontSize: 10, marginTop: 3, fontWeight: active ? 700 : 500, color: active ? 'var(--blue)' : 'var(--muted)' }}>{label}</span>
          </Link>
        )
      })}
      <Link href="/roditelji/postavke" style={{ ...styles.mobileItem, ...(pathname.startsWith('/roditelji/postavke') ? styles.mobileActive : {}) }}>
        <CogIcon active={pathname.startsWith('/roditelji/postavke')} size={20} />
        <span style={{ fontSize: 10, marginTop: 3, fontWeight: pathname.startsWith('/roditelji/postavke') ? 700 : 500, color: pathname.startsWith('/roditelji/postavke') ? 'var(--blue)' : 'var(--muted)' }}>Više</span>
      </Link>
    </nav>
  )
}

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = {
  nav: {
    display:        'flex',
    flexDirection:  'column',
    gap:            2,
    padding:        '8px 0',
  },
  item: {
    display:       'flex',
    alignItems:    'center',
    gap:           10,
    padding:       '10px 14px',
    borderRadius:  10,
    textDecoration: 'none',
    color:         'var(--muted)',
    fontSize:       14,
    fontWeight:     500,
    transition:     'background 0.15s, color 0.15s',
  },
  active: {
    background: 'rgba(75,123,255,0.1)',
    color:      'var(--blue)',
  },
  iconWrap: {
    position: 'relative',
    display:  'flex',
  },
  badge: {
    position:   'absolute',
    top:        -6,
    right:      -8,
    background: '#f87171',
    color:      '#fff',
    fontSize:   9,
    fontWeight: 800,
    borderRadius: 99,
    padding:    '1px 5px',
    lineHeight: '14px',
  },
  label: {
    color: 'var(--muted)',
  },
  labelActive: {
    color: 'var(--blue)',
  },
  mobileNav: {
    display:        'flex',
    justifyContent: 'space-around',
    alignItems:     'center',
    padding:        '8px 0 max(8px, env(safe-area-inset-bottom))',
    background:     'rgba(14,18,32,0.95)',
    borderTop:      '1px solid var(--bdr)',
    backdropFilter: 'blur(20px)',
    position:       'fixed',
    bottom:         0,
    left:           0,
    right:          0,
    zIndex:         50,
  },
  mobileItem: {
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    textDecoration: 'none',
    padding:        '4px 10px',
  },
  mobileActive: {
    color: 'var(--blue)',
  },
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function GridIcon({ active, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--blue)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )
}
function BellIcon({ active, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--blue)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  )
}
function BulbIcon({ active, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--blue)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  )
}
function CalIcon({ active, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--blue)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function CogIcon({ active, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--blue)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )
}
