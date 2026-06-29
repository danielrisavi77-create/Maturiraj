'use client'
// components/discere/paywall/PremiumBadge.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Tiny inline plan badge — "PRO" or "STANDARD"
// Usage: <PremiumBadge tier="pro" /> | <PremiumBadge tier="standard" size="lg" />
// ─────────────────────────────────────────────────────────────────────────────

const BADGE_CFG = {
  pro: {
    label:    'PRO',
    gradient: 'linear-gradient(135deg, #3b6bff, #7c5cfc)',
    shadow:   '0 2px 10px rgba(75,123,255,.4)',
  },
  standard: {
    label:    'STANDARD',
    gradient: 'linear-gradient(135deg, #ff6b2b, #f5c842)',
    shadow:   '0 2px 10px rgba(255,107,43,.4)',
  },
}

export default function PremiumBadge({ tier = 'pro', size = 'sm' }) {
  const cfg  = BADGE_CFG[tier] ?? BADGE_CFG.pro
  const isLg = size === 'lg'

  return (
    <span
      style={{
        display:       'inline-flex',
        alignItems:    'center',
        padding:       isLg ? '4px 10px' : '2px 7px',
        borderRadius:  99,
        fontSize:      isLg ? 11 : 9,
        fontFamily:    'var(--fb)',
        fontWeight:    800,
        letterSpacing: '0.09em',
        color:         '#fff',
        background:    cfg.gradient,
        boxShadow:     cfg.shadow,
        verticalAlign: 'middle',
        flexShrink:    0,
        animation:     'badge-pop .4s cubic-bezier(.16,1,.3,1) both',
      }}
    >
      {cfg.label}
    </span>
  )
}
