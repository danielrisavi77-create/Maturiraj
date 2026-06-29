'use client'
// components/discere/paywall/LockedFeatureCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium locked feature card — used in LockedAnalysisSection (results page).
// Shows icon, title, teaser, blurred fake content lines, and a lock badge.
// Hover reveals subtle glow. onClick → upgrade flow.
//
// Props:
//   icon    — emoji
//   title   — feature name (Fraunces headline)
//   teaser  — one-line description
//   accent  — hex color for glow/icon tinting (e.g. '#4b7bff')
//   index   — stagger delay index (0-based)
//   onClick — upgrade click handler
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'

const KEYFRAMES = `
  @keyframes pw-card-in {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

export default function LockedFeatureCard({
  icon    = '🔒',
  title   = 'Zaključana funkcija',
  teaser  = '',
  accent  = '#4b7bff',
  index   = 0,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const delay = `${0.065 * index}s`

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position:            'relative',
          padding:             '22px 20px 20px',
          borderRadius:        18,
          background:          hovered
            ? 'linear-gradient(148deg, rgba(14,18,32,.98), rgba(22,28,46,.92))'
            : 'linear-gradient(148deg, rgba(14,18,32,.88), rgba(20,24,40,.76))',
          border:              hovered
            ? '1px solid rgba(255,255,255,.12)'
            : '1px solid rgba(255,255,255,.07)',
          backdropFilter:      'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow:           hovered
            ? `0 18px 48px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06)`
            : '0 8px 24px rgba(0,0,0,.22)',
          cursor:              onClick ? 'pointer' : 'default',
          transition:          'all .22s ease',
          animation:           `pw-card-in .5s ${delay} cubic-bezier(.16,1,.3,1) both`,
          overflow:            'hidden',
        }}
      >
        {/* Ambient glow orb — top-right */}
        <div style={{
          position:    'absolute',
          top:         -22,
          right:       -22,
          width:       90,
          height:      90,
          borderRadius: '50%',
          background:  accent,
          opacity:     hovered ? 0.1 : 0.04,
          filter:      'blur(28px)',
          transition:  'opacity .3s ease',
          pointerEvents: 'none',
        }} />

        {/* Lock badge — top-right corner */}
        <div style={{
          position:       'absolute',
          top:            14,
          right:          14,
          width:          26,
          height:         26,
          borderRadius:   8,
          background:     'rgba(255,255,255,.06)',
          border:         '1px solid rgba(255,255,255,.1)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       12,
        }}>
          🔒
        </div>

        {/* Feature icon */}
        <div style={{
          width:          44,
          height:         44,
          borderRadius:   14,
          background:     `${accent}22`,
          border:         `1px solid ${accent}38`,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       20,
          marginBottom:   14,
          boxShadow:      `0 4px 16px ${accent}20`,
          flexShrink:     0,
          transition:     'box-shadow .2s ease',
          ...(hovered && { boxShadow: `0 6px 22px ${accent}35` }),
        }}>
          {icon}
        </div>

        {/* Title */}
        <div style={{
          fontFamily:   'var(--fh)',
          fontSize:     15,
          fontWeight:   700,
          lineHeight:   1.3,
          color:        hovered ? 'var(--text)' : 'rgba(228,237,255,.72)',
          marginBottom: 6,
          paddingRight: 28,
          transition:   'color .2s ease',
        }}>
          {title}
        </div>

        {/* Teaser */}
        <div style={{
          fontSize:   12,
          color:      'var(--muted)',
          lineHeight: 1.6,
        }}>
          {teaser}
        </div>

        {/* Blurred fake content lines (visual "preview" of locked data) */}
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[82, 64, 88].map((w, i) => (
            <div key={i} style={{
              height:       7,
              width:        `${w}%`,
              borderRadius: 4,
              background:   'rgba(255,255,255,.07)',
              filter:       'blur(3.5px)',
            }} />
          ))}
        </div>
      </div>
    </>
  )
}
