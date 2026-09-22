'use client'
// components/discere/paywall/PaywallModal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full-screen modal shown when the simulator free limit is reached.
// User can dismiss it — but content stays locked after closing (handled by parent).
//
// Props:
//   open               — controlled open state
//   onClose            — callback when user dismisses
//   copy               — copy object (defaults to SIMULATOR_COPY)
//   from               — URL tracking string (e.g. "simulator-mat")
//   questionsCompleted — shown in progress hint badge
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { SIMULATOR_COPY } from './paywallCopy'
import UpgradeCTA from './UpgradeCTA'

const KEYFRAMES = `
  @keyframes pw-modal-scale-in {
    from { opacity: 0; transform: scale(.91) translateY(16px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }
  @keyframes pw-bullet-in {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pw-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pw-up {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pw-lock-float {
    0%, 100% { transform: translateY(0) rotate(-4deg); }
    50%      { transform: translateY(-9px) rotate(2deg); }
  }
  @keyframes pw-orb-a {
    0%, 100% { transform: translate(0,0); }
    50%      { transform: translate(20px,-14px); }
  }
  @keyframes pw-orb-b {
    0%, 100% { transform: translate(0,0); }
    50%      { transform: translate(-20px,14px); }
  }
  @keyframes pw-pulse-dot {
    0%, 100% { opacity: 1; }
    50%      { opacity: .3; }
  }
  @keyframes pw-hero-shift {
    0%, 100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }
  @keyframes pw-glow-std {
    0%, 100% {
      box-shadow: 0 0 0 1px rgba(255,107,43,.22),
                  0 10px 36px rgba(255,107,43,.32),
                  0 4px 12px rgba(0,0,0,.3);
    }
    50% {
      box-shadow: 0 0 0 1px rgba(255,107,43,.4),
                  0 14px 52px rgba(255,107,43,.48),
                  0 0 90px rgba(255,107,43,.12);
    }
  }
  @keyframes pw-glow-pro {
    0%, 100% {
      box-shadow: 0 0 0 1px rgba(75,123,255,.22),
                  0 10px 36px rgba(75,123,255,.32),
                  0 4px 12px rgba(0,0,0,.3);
    }
    50% {
      box-shadow: 0 0 0 1px rgba(75,123,255,.4),
                  0 14px 52px rgba(75,123,255,.48),
                  0 0 90px rgba(75,123,255,.12);
    }
  }
`

export default function PaywallModal(props) {
  return props.open ? <PaywallModalSession {...props} /> : null
}

function PaywallModalSession({
  open               = false,
  onClose,
  copy               = SIMULATOR_COPY,
  from               = 'simulator',
  questionsCompleted = 3,
  previewScore       = null,
  tier               = 'standard',
}) {
  // Small delay so scale animation fires after mount
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setVisible(true), 12)
      return () => clearTimeout(t)
    }
  }, [open])

  // Escape to close
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  if (!open) return null

  const isStd = tier === 'standard'
  const accentColor = isStd ? '#ff6b2b' : '#4b7bff'
  const accentAlpha = isStd ? 'rgba(255,107,43' : 'rgba(75,123,255'
  const glowAnim = isStd ? 'pw-glow-std' : 'pw-glow-pro'

  return (
    <>
      <style>{KEYFRAMES}</style>

      {/* ── Backdrop ────────────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Otključaj simulator"
        style={{
          position:            'fixed',
          inset:               0,
          zIndex:              1000,
          display:             'flex',
          alignItems:          'center',
          justifyContent:      'center',
          padding:             '16px',
          background:          'rgba(4,6,14,.88)',
          backdropFilter:      'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          animation:           'pw-backdrop-in .22s ease both',
        }}
      >
        {/* ── Ambient orbs behind card ──────────────────────────────────── */}
        <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:`radial-gradient(circle,${accentAlpha},.11),transparent 65%)`, top:'10%', left:'15%', pointerEvents:'none', animation:'pw-orb-a 20s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,92,252,.08),transparent 65%)', bottom:'5%', right:'10%', pointerEvents:'none', animation:'pw-orb-b 25s ease-in-out infinite' }} />

        {/* ── Card ──────────────────────────────────────────────────────── */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position:        'relative',
            width:           '100%',
            maxWidth:        480,
            background:      'var(--s1)',
            backgroundImage: `linear-gradient(148deg, ${accentAlpha},.06) 0%, transparent 55%)`,
            border:          `1px solid ${accentAlpha},.22)`,
            borderRadius:    28,
            boxShadow:       `0 48px 120px rgba(0,0,0,.75), 0 0 0 1px ${accentAlpha},.09), inset 0 1px 0 rgba(255,255,255,.07)`,
            overflow:        'hidden',
            animation:       visible ? 'pw-modal-scale-in .42s cubic-bezier(.16,1,.3,1) both' : undefined,
          }}
        >
          {/* Top gradient accent line */}
          <div style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     2,
            background: isStd
              ? 'linear-gradient(90deg, transparent 5%, #ff6b2b 40%, #f97316 70%, transparent 95%)'
              : 'linear-gradient(90deg, transparent 5%, #4b7bff 40%, #7c5cfc 70%, transparent 95%)',
          }} />

          {/* Dot grid texture */}
          <div style={{
            position:            'absolute',
            inset:               0,
            backgroundImage:     `radial-gradient(${accentAlpha},.06) 1px,transparent 1px)`,
            backgroundSize:      '36px 36px',
            pointerEvents:       'none',
            zIndex:              0,
          }} />

          {/* Corner glow */}
          <div style={{
            position:   'absolute',
            top:        '-30%',
            right:      '-20%',
            width:      300,
            height:     300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accentAlpha},.12), transparent 65%)`,
            pointerEvents: 'none',
            zIndex:     0,
          }} />

          {/* Close button */}
          <button
            aria-label="Zatvori"
            onClick={onClose}
            style={{
              position:       'absolute',
              top:            16,
              right:          16,
              zIndex:         2,
              width:          32,
              height:         32,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              borderRadius:   8,
              border:         '1px solid rgba(255,255,255,.08)',
              background:     'rgba(255,255,255,.04)',
              color:          'var(--muted)',
              cursor:         'pointer',
              fontSize:       18,
              lineHeight:     1,
              fontFamily:     'var(--fb)',
              transition:     'all .15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,.09)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,.04)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
          >
            ×
          </button>

          {/* ── Body ──────────────────────────────────────────────────── */}
          <div style={{ padding: '40px 32px 32px', position: 'relative', zIndex: 1 }}>

            {/* Floating lock icon */}
            <div style={{
              fontSize:      40,
              marginBottom:  20,
              display:       'inline-block',
              animation:     'pw-lock-float 3.2s ease-in-out infinite',
              filter:        `drop-shadow(0 8px 18px ${accentAlpha},.4))`,
            }}>
              🔒
            </div>

            {/* Progress badge — with pulsing dot */}
            <div style={{
              display:       'flex',
              alignItems:    'center',
              gap:           6,
              marginBottom:  16,
              animation:     'pw-up .45s .05s cubic-bezier(.16,1,.3,1) both',
            }}>
              <div style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           6,
                padding:       '4px 12px',
                borderRadius:  99,
                background:    `${accentAlpha},.1)`,
                border:        `1px solid ${accentAlpha},.26)`,
                fontSize:      11,
                fontFamily:    'var(--fb)',
                fontWeight:    700,
                color:         accentColor,
                letterSpacing: '.04em',
              }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:accentColor, display:'inline-block', animation:'pw-pulse-dot 1.8s ease-in-out infinite' }} />
                {questionsCompleted} {questionsCompleted === 1 ? 'pitanje' : 'pitanja'} gotovo
              </div>
            </div>

            {/* Mini score feedback */}
            {previewScore && previewScore.total > 0 && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 18, animation: 'pw-up .45s .1s cubic-bezier(.16,1,.3,1) both' }}>
                <div style={{
                  flex: 1, background: 'rgba(62,207,110,.08)',
                  border: '1px solid rgba(62,207,110,.2)', borderRadius: 12, padding: '11px 14px',
                }}>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 4, letterSpacing:'.06em', textTransform:'uppercase', fontWeight:700 }}>✔ Točno</div>
                  <div style={{ fontFamily: 'var(--fh)', fontWeight: 900, fontSize: 24, color: 'var(--green)', lineHeight: 1 }}>
                    {previewScore.correct}<span style={{fontSize:14,opacity:.6}}>/{previewScore.total}</span>
                  </div>
                </div>
                <div style={{
                  flex: 1, background: `${accentAlpha},.08)`,
                  border: `1px solid ${accentAlpha},.2)`, borderRadius: 12, padding: '11px 14px',
                }}>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 4, letterSpacing:'.06em', textTransform:'uppercase', fontWeight:700 }}>📈 Trenutno</div>
                  <div style={{ fontFamily: 'var(--fh)', fontWeight: 900, fontSize: 24, color: accentColor, lineHeight: 1 }}>
                    ~{Math.round(previewScore.correct / previewScore.total * 100)}<span style={{fontSize:14,opacity:.6}}>%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Animated gradient headline */}
            <h2 style={{
              fontFamily:          'var(--fh)',
              fontSize:            24,
              fontWeight:          900,
              lineHeight:          1.2,
              marginBottom:        8,
              letterSpacing:       '-0.025em',
              background:          isStd
                ? 'linear-gradient(270deg,#ff6b2b,#f97316,#fbbf24,#ff6b2b)'
                : 'linear-gradient(270deg,#4b7bff,#818cf8,#2dcfbe,#4b7bff)',
              backgroundSize:      '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:      'text',
              animation:           'pw-up .45s .15s cubic-bezier(.16,1,.3,1) both, pw-hero-shift 4s ease-in-out infinite',
            }}>
              {copy.headline}
            </h2>

            {/* Subline */}
            <p style={{
              color:        'var(--muted)',
              fontSize:     14,
              lineHeight:   1.72,
              marginBottom: 20,
              animation:    'pw-up .45s .2s cubic-bezier(.16,1,.3,1) both',
            }}>
              {copy.subline}
            </p>

            {/* Bullets — staggered */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 26 }}>
              {copy.bullets.map((b, i) => {
                const text = typeof b === 'string' ? b : b.text
                return (
                  <div
                    key={i}
                    style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        10,
                      fontSize:   13.5,
                      color:      'var(--text)',
                      animation:  `pw-bullet-in .4s ${0.25 + 0.07 * i}s cubic-bezier(.16,1,.3,1) both`,
                    }}
                  >
                    <span style={{
                      width:          22,
                      height:         22,
                      borderRadius:   7,
                      background:     `${accentAlpha},.14)`,
                      border:         `1px solid ${accentAlpha},.28)`,
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      fontSize:       11,
                      flexShrink:     0,
                      color:          accentColor,
                      fontWeight:     800,
                    }}>
                      ✓
                    </span>
                    {text}
                  </div>
                )
              })}
            </div>

            {/* Primary CTA — with glow animation */}
            <div style={{ animation: 'pw-up .45s .45s cubic-bezier(.16,1,.3,1) both' }}>
              <UpgradeCTA
                label={copy.cta}
                variant="primary"
                tier={tier}
                from={from}
                fullWidth
                style={{ fontSize: 14, padding: '13px 24px', animation: `${glowAnim} 2.4s 1s ease-in-out infinite` }}
              />
            </div>

            {/* Secondary nudge + psychological trigger */}
            <p style={{
              textAlign:  'center',
              marginTop:  14,
              fontSize:   12,
              color:      'var(--muted)',
              lineHeight: 1.6,
              animation:  'pw-up .45s .52s cubic-bezier(.16,1,.3,1) both',
            }}>
              {copy.ctaSecondary}
            </p>

          </div>
        </div>
      </div>
    </>
  )
}
