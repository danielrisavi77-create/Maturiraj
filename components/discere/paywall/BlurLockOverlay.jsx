'use client'
// components/discere/paywall/BlurLockOverlay.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Absolutely-positioned glass overlay — place inside a `position: relative` container.
// Shows floating lock icon + short message + optional CTA button.
//
// Usage:
//   <div style={{ position: 'relative' }}>
//     <content />
//     <BlurLockOverlay visible lockMessage="Nastavi s Pro planom" onCTAClick={open} ctaLabel="Otključaj" />
//   </div>
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'

const KEYFRAMES = `
  @keyframes pw-overlay-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pw-lock-bounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50%      { transform: translateY(-7px) scale(1.07); }
  }
`

export default function BlurLockOverlay({
  visible     = true,
  lockMessage = 'Sadržaj je zaključan',
  onCTAClick,
  ctaLabel    = 'Otključaj',
}) {
  const [mounted, setMounted] = useState(false)

  // Defer mount so the entry animation plays reliably
  useEffect(() => {
    if (visible) setMounted(true)
  }, [visible])

  if (!mounted && !visible) return null

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        aria-hidden="true"
        style={{
          position:            'absolute',
          inset:               0,
          zIndex:              10,
          display:             'flex',
          flexDirection:       'column',
          alignItems:          'center',
          justifyContent:      'center',
          gap:                 14,
          borderRadius:        'inherit',
          backdropFilter:      'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background:          'radial-gradient(ellipse at 50% 38%, rgba(75,123,255,.09), rgba(7,9,15,.82))',
          border:              '1px solid rgba(75,123,255,.13)',
          opacity:             visible ? 1 : 0,
          transition:          'opacity .3s ease',
          animation:           visible ? 'pw-overlay-in .35s ease both' : undefined,
        }}
      >
        {/* Lock icon */}
        <div
          style={{
            width:           52,
            height:          52,
            borderRadius:    16,
            background:      'linear-gradient(135deg, rgba(75,123,255,.24), rgba(124,92,252,.16))',
            border:          '1px solid rgba(75,123,255,.32)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            fontSize:        24,
            boxShadow:       '0 8px 30px rgba(75,123,255,.22)',
            animation:       'pw-lock-bounce 3.2s ease-in-out infinite',
          }}
        >
          🔒
        </div>

        {/* Message */}
        <div
          style={{
            fontFamily: 'var(--fh)',
            fontSize:   13,
            fontWeight: 700,
            color:      'rgba(228,237,255,.75)',
            textAlign:  'center',
            maxWidth:   180,
            lineHeight: 1.45,
          }}
        >
          {lockMessage}
        </div>

        {/* Optional CTA */}
        {onCTAClick && (
          <button
            onClick={onCTAClick}
            style={{
              padding:    '7px 18px',
              borderRadius: 10,
              border:     '1px solid rgba(75,123,255,.35)',
              background: 'rgba(75,123,255,.14)',
              color:      '#a8c0ff',
              fontFamily: 'var(--fb)',
              fontSize:   12,
              fontWeight: 600,
              cursor:     'pointer',
              transition: 'all .18s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(75,123,255,.28)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(75,123,255,.14)'
              e.currentTarget.style.color = '#a8c0ff'
            }}
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </>
  )
}
