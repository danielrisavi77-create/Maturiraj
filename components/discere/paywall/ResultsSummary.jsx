'use client'
// components/discere/paywall/ResultsSummary.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Always-visible score card shown at the top of the results page.
// Never gated — all tiers see this.
// Features: count-up score animation, percentage, correct/incorrect pills, status badge.
//
// Props:
//   simulatorState — { score, totalQuestions, correctCount, incorrectCount }
//   subjectLabel   — e.g. "Matematika — Simulator 2025"
//   userAccess     — for showing the Pro badge next to the status
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { getScoreStatus } from './paywallHelpers'
import PremiumBadge from './PremiumBadge'

const KEYFRAMES = `
  @keyframes pw-score-reveal {
    from { opacity: 0; transform: translateY(18px) scale(.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pw-stat-in {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const STAT_ITEMS = [
  {
    key:    'correct',
    label:  'Točno',
    icon:   '✓',
    color:  '#3ecf6e',
    bg:     'rgba(62,207,110,.1)',
    border: 'rgba(62,207,110,.25)',
  },
  {
    key:    'incorrect',
    label:  'Netočno',
    icon:   '✗',
    color:  '#f87171',
    bg:     'rgba(248,113,113,.1)',
    border: 'rgba(248,113,113,.25)',
  },
  {
    key:    'total',
    label:  'Ukupno',
    icon:   '#',
    color:  'var(--muted)',
    bg:     'rgba(255,255,255,.05)',
    border: 'rgba(255,255,255,.1)',
  },
]

export default function ResultsSummary({
  simulatorState,
  subjectLabel = 'Simulator',
  userAccess,
}) {
  const { score, totalQuestions, correctCount, incorrectCount } = simulatorState
  const pct    = Math.round((score / Math.max(1, totalQuestions)) * 100)
  const status = getScoreStatus({ score, totalQuestions })

  // Count-up animation
  const [displayScore, setDisplayScore] = useState(0)
  const [displayPct,   setDisplayPct]   = useState(0)
  const animated = useRef(false)

  useEffect(() => {
    if (animated.current) return
    animated.current = true

    const STEPS    = 44
    const DURATION = 920
    let   step = 0

    const timer = setInterval(() => {
      step++
      const t = step / STEPS
      // Ease-out cubic: t => 1 - (1-t)^3
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplayScore(Math.round(score * eased))
      setDisplayPct(  Math.round(pct   * eased))
      if (step >= STEPS) {
        clearInterval(timer)
        setDisplayScore(score)
        setDisplayPct(pct)
      }
    }, DURATION / STEPS)

    return () => clearInterval(timer)
  }, [score, pct])

  const statValues = {
    correct:   correctCount,
    incorrect: incorrectCount,
    total:     totalQuestions,
  }

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div style={{
        position:            'relative',
        borderRadius:        24,
        background:          'linear-gradient(155deg, rgba(14,18,32,.92), rgba(20,24,40,.82))',
        border:              '1px solid rgba(255,255,255,.08)',
        backdropFilter:      'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow:           '0 24px 68px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.06)',
        padding:             '32px 28px',
        overflow:            'hidden',
        animation:           'pw-score-reveal .6s cubic-bezier(.16,1,.3,1) both',
      }}>

        {/* Background glow orb — matches status color */}
        <div style={{
          position:     'absolute',
          top:          -44,
          right:        -44,
          width:        220,
          height:       220,
          borderRadius: '50%',
          background:   status.color,
          opacity:      0.07,
          filter:       'blur(52px)',
          pointerEvents: 'none',
        }} />

        {/* ── Header row ──────────────────────────────────────────────── */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          marginBottom:   24,
          flexWrap:       'wrap',
          gap:            10,
        }}>
          <div style={{
            fontSize:      12,
            fontWeight:    600,
            color:         'var(--muted)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily:    'var(--fb)',
          }}>
            {subjectLabel}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {/* Status badge */}
            <div style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           5,
              padding:       '4px 11px',
              borderRadius:  99,
              background:    `${status.color}1a`,
              border:        `1px solid ${status.color}40`,
              fontSize:      11,
              fontWeight:    700,
              color:         status.color,
              fontFamily:    'var(--fb)',
              letterSpacing: '0.04em',
              animation:     'badge-pop .4s .3s cubic-bezier(.16,1,.3,1) both',
            }}>
              {status.emoji} {status.label}
            </div>

            {/* Plan badge */}
            {userAccess?.subscriptionTier === 'pro'      && <PremiumBadge tier="pro" />}
            {userAccess?.subscriptionTier === 'standard' && <PremiumBadge tier="standard" />}
          </div>
        </div>

        {/* ── Score + percentage ───────────────────────────────────────── */}
        <div style={{
          display:     'flex',
          alignItems:  'flex-end',
          gap:         22,
          marginBottom: 24,
          flexWrap:    'wrap',
        }}>
          {/* Numeric score */}
          <div>
            <div style={{
              fontFamily:    'var(--fh)',
              fontSize:      62,
              fontWeight:    900,
              lineHeight:    1,
              color:         'var(--text)',
              letterSpacing: '-0.03em',
            }}>
              {displayScore}
              <span style={{
                fontSize:   28,
                color:      'var(--muted)',
                fontWeight: 400,
                marginLeft: 2,
              }}>
                /{totalQuestions}
              </span>
            </div>
            <div style={{
              fontSize:   12,
              color:      'var(--muted)',
              marginTop:  4,
              fontFamily: 'var(--fb)',
            }}>
              ukupan rezultat
            </div>
          </div>

          {/* Percentage */}
          <div style={{ paddingBottom: 12 }}>
            <div style={{
              fontFamily:           'var(--fh)',
              fontSize:             38,
              fontWeight:           700,
              lineHeight:           1,
              background:           `linear-gradient(135deg, ${status.color} 30%, ${status.color}88)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              {displayPct}%
            </div>
          </div>
        </div>

        {/* ── Stats pills ─────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {STAT_ITEMS.map((s, i) => (
            <div
              key={s.key}
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          7,
                padding:      '8px 14px',
                borderRadius: 10,
                background:   s.bg,
                border:       `1px solid ${s.border}`,
                animation:    `pw-stat-in .44s ${0.08 * (i + 1)}s cubic-bezier(.16,1,.3,1) both`,
              }}
            >
              <span style={{ fontSize: 13, color: s.color, fontWeight: 800 }}>{s.icon}</span>
              <span style={{
                fontSize:   21,
                fontFamily: 'var(--fh)',
                fontWeight: 700,
                color:      'var(--text)',
                lineHeight: 1,
              }}>
                {statValues[s.key]}
              </span>
              <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
