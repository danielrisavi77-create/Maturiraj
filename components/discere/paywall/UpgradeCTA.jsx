'use client'
// components/discere/paywall/UpgradeCTA.jsx
// ─────────────────────────────────────────────────────────────────────────────
// High-conversion upgrade button — three visual variants.
//
// Variants:
//   primary   — gradient fill + animated glow. Main CTA.
//   secondary — outlined ghost. Secondary action.
//   inline    — compact pill. Used inline with locked content.
//
// Usage:
//   <UpgradeCTA label="Otključaj cijeli simulator" variant="primary" tier="pro" from="simulator-mat" fullWidth />
//   <UpgradeCTA label="Pogledaj planove" variant="secondary" />
//   <UpgradeCTA label="Pro" variant="inline" />
// ─────────────────────────────────────────────────────────────────────────────

import { useRouter } from 'next/navigation'

const KEYFRAMES = `
  @keyframes pw-cta-glow {
    0%, 100% {
      box-shadow: 0 0 0 1px rgba(75,123,255,.2),
                  0 10px 36px rgba(75,123,255,.3),
                  0 4px 12px rgba(0,0,0,.25);
    }
    50% {
      box-shadow: 0 0 0 1px rgba(75,123,255,.4),
                  0 14px 50px rgba(75,123,255,.46),
                  0 0 80px rgba(75,123,255,.1);
    }
  }
  @keyframes pw-cta-glow-std {
    0%, 100% {
      box-shadow: 0 0 0 1px rgba(255,107,43,.2),
                  0 10px 36px rgba(255,107,43,.3),
                  0 4px 12px rgba(0,0,0,.25);
    }
    50% {
      box-shadow: 0 0 0 1px rgba(255,107,43,.4),
                  0 14px 50px rgba(255,107,43,.44),
                  0 0 80px rgba(255,107,43,.1);
    }
  }
  .pw-cta-p:hover { filter: brightness(1.1) !important; transform: translateY(-1px) !important; }
  .pw-cta-p:active { transform: scale(.98) !important; }
`

export default function UpgradeCTA({
  label     = 'Otključaj Pro',
  href,
  variant   = 'primary',
  tier      = 'pro',
  onClick,
  fullWidth = false,
  from      = '',
  style     = {},
}) {
  const router = useRouter()
  const target = href ?? `/pro${from ? `?from=${encodeURIComponent(from)}&plan=${tier}` : `?plan=${tier}`}`

  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) { onClick(); return }
    router.push(target)
  }

  const isPro = tier === 'pro'

  // ── Primary ──────────────────────────────────────────────────────────────
  if (variant === 'primary') {
    return (
      <>
        <style>{KEYFRAMES}</style>
        <button
          className="pw-cta-p"
          onClick={handleClick}
          style={{
            width:          fullWidth ? '100%' : undefined,
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            8,
            padding:        '14px 28px',
            borderRadius:   14,
            border:         'none',
            cursor:         'pointer',
            fontFamily:     'var(--fb)',
            fontSize:       15,
            fontWeight:     700,
            letterSpacing:  '-0.01em',
            color:          '#fff',
            background:     isPro
              ? 'linear-gradient(135deg, #3b6bff 0%, #6b4bff 55%, #4b8bff 100%)'
              : 'linear-gradient(135deg, #ff6b2b 0%, #f5c842 100%)',
            backgroundSize: '200% 100%',
            animation:      isPro ? 'pw-cta-glow 2.8s ease-in-out infinite' : 'pw-cta-glow-std 2.8s ease-in-out infinite',
            transition:     'filter .18s ease, transform .18s ease',
            ...style,
          }}
        >
          {isPro ? '✨' : '⭐'} {label}
        </button>
      </>
    )
  }

  // ── Secondary ─────────────────────────────────────────────────────────────
  if (variant === 'secondary') {
    return (
      <button
        onClick={handleClick}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            6,
          padding:        '10px 22px',
          borderRadius:   12,
          border:         '1px solid rgba(255,255,255,.11)',
          background:     'transparent',
          cursor:         'pointer',
          fontFamily:     'var(--fb)',
          fontSize:       13,
          fontWeight:     500,
          color:          'var(--muted)',
          transition:     'all .18s ease',
          width:          fullWidth ? '100%' : undefined,
          ...style,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'
          e.currentTarget.style.color = 'var(--text)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,.11)'
          e.currentTarget.style.color = 'var(--muted)'
        }}
      >
        {label} →
      </button>
    )
  }

  // ── Inline pill ───────────────────────────────────────────────────────────
  return (
    <button
      onClick={handleClick}
      style={{
        display:       'inline-flex',
        alignItems:    'center',
        gap:           5,
        padding:       '4px 12px',
        borderRadius:  99,
        border:        `1px solid ${isPro ? 'rgba(75,123,255,.35)' : 'rgba(255,107,43,.35)'}`,
        background:    isPro ? 'rgba(75,123,255,.1)' : 'rgba(255,107,43,.1)',
        cursor:        'pointer',
        fontFamily:    'var(--fb)',
        fontSize:      11,
        fontWeight:    700,
        letterSpacing: '0.04em',
        color:         isPro ? '#a8c0ff' : '#ffb48a',
        transition:    'all .15s ease',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = isPro ? 'rgba(75,123,255,.22)' : 'rgba(255,107,43,.22)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = isPro ? 'rgba(75,123,255,.1)' : 'rgba(255,107,43,.1)'
      }}
    >
      🔒 {label}
    </button>
  )
}
