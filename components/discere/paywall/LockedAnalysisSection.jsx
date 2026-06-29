'use client'
// components/discere/paywall/LockedAnalysisSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Placed directly below ResultsSummary on the results page.
// Handles both states:
//   — locked  (free / standard): headline + 4 LockedFeatureCards + upgrade CTA
//   — unlocked (pro):            renders children (real analysis UI) or loading skeleton
//
// Props:
//   userAccess   — { subscriptionTier, isLoggedIn }
//   from         — URL tracking string (e.g. "results-mat")
//   isLoading    — show skeleton while Pro analysis loads (Pro only)
//   children     — real analysis content for Pro users
// ─────────────────────────────────────────────────────────────────────────────

import { useRouter } from 'next/navigation'
import LockedFeatureCard from './LockedFeatureCard'
import UpgradeCTA from './UpgradeCTA'
import { RESULTS_COPY } from './paywallCopy'
import { checkResultsAccess } from './paywallHelpers'

const KEYFRAMES = `
  @keyframes pw-analysis-in {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pw-sk-pulse {
    0%, 100% { opacity: .32; }
    50%      { opacity: .7;  }
  }
`

// ── Loading skeleton — Pro analysis not yet ready ─────────────────────────────
function AnalysisLoadingState() {
  return (
    <div style={{
      padding:      '28px 22px',
      borderRadius: 20,
      background:   'linear-gradient(155deg, rgba(14,18,32,.9), rgba(20,24,40,.8))',
      border:       '1px solid rgba(255,255,255,.07)',
    }}>
      <style>{`@keyframes pw-sk-pulse{0%,100%{opacity:.32}50%{opacity:.72}}`}</style>
      {[56, 76, 42, 68, 55, 80, 38].map((w, i) => (
        <div key={i} style={{
          height:       9,
          width:        `${w}%`,
          borderRadius: 5,
          background:   'rgba(255,255,255,.08)',
          marginBottom: 10,
          animation:    `pw-sk-pulse 1.4s ${i * 0.1}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LockedAnalysisSection({
  userAccess,
  from       = 'results',
  isLoading  = false,
  children   = null,
}) {
  const router   = useRouter()
  const access   = checkResultsAccess(userAccess)
  const isLocked = !access.canSeeAnalysis

  // ── Pro user: show real analysis ──────────────────────────────────────────
  if (!isLocked) {
    return (
      <div style={{ marginTop: 20 }}>
        {children ?? (isLoading ? <AnalysisLoadingState /> : null)}
      </div>
    )
  }

  // ── Locked state ──────────────────────────────────────────────────────────
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div style={{
        marginTop: 24,
        animation: 'pw-analysis-in .56s .18s cubic-bezier(.16,1,.3,1) both',
      }}>

        {/* ── Top header strip ──────────────────────────────────────────── */}
        <div style={{
          padding:     '28px 28px 26px',
          borderRadius: '24px 24px 0 0',
          background:  'linear-gradient(155deg, rgba(75,123,255,.07), rgba(124,92,252,.03))',
          border:      '1px solid rgba(75,123,255,.15)',
          borderBottom: 'none',
          textAlign:   'center',
        }}>
          {/* "Locked AI analysis" label */}
          <div style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           6,
            padding:       '4px 12px',
            borderRadius:  99,
            background:    'rgba(75,123,255,.1)',
            border:        '1px solid rgba(75,123,255,.22)',
            fontSize:      11,
            fontWeight:    700,
            color:         '#7fa8ff',
            marginBottom:  16,
            letterSpacing: '0.06em',
            fontFamily:    'var(--fb)',
          }}>
            🔒 ZAKLJUČANA AI ANALIZA
          </div>

          <h3 style={{
            fontFamily:    'var(--fh)',
            fontSize:      24,
            fontWeight:    900,
            lineHeight:    1.24,
            color:         'var(--text)',
            marginBottom:  8,
            letterSpacing: '-0.02em',
          }}>
            {RESULTS_COPY.headline}
          </h3>

          <p style={{
            color:     'var(--muted)',
            fontSize:  14,
            lineHeight: 1.7,
            maxWidth:  440,
            margin:    '0 auto',
          }}>
            {RESULTS_COPY.subline}
          </p>
        </div>

        {/* ── Feature cards grid ────────────────────────────────────────── */}
        <div style={{
          padding:     '0 1px',
          background:  'linear-gradient(180deg, rgba(75,123,255,.04), rgba(124,92,252,.02))',
          border:      '1px solid rgba(75,123,255,.12)',
          borderTop:   'none',
          borderBottom: 'none',
        }}>
          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(218px, 1fr))',
            gap:                 12,
            padding:             '20px',
          }}>
            {RESULTS_COPY.lockedCards.map((card, i) => (
              <LockedFeatureCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                teaser={card.teaser}
                accent={card.accent}
                index={i}
                onClick={() => router.push(`/pro?from=${encodeURIComponent(from)}&plan=pro`)}
              />
            ))}
          </div>
        </div>

        {/* ── CTA footer strip ──────────────────────────────────────────── */}
        <div style={{
          padding:        '26px 28px',
          borderRadius:   '0 0 24px 24px',
          background:     'linear-gradient(155deg, rgba(75,123,255,.05), rgba(14,18,32,.96))',
          border:         '1px solid rgba(75,123,255,.14)',
          borderTop:      '1px solid rgba(75,123,255,.09)',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:            12,
        }}>
          <UpgradeCTA
            label={RESULTS_COPY.cta}
            variant="primary"
            tier="pro"
            from={from}
            fullWidth
            style={{ maxWidth: 400, fontSize: 14, padding: '13px 24px' }}
          />
          <UpgradeCTA
            label={RESULTS_COPY.ctaSecondary}
            variant="secondary"
            tier="pro"
            from={from}
          />
        </div>

      </div>
    </>
  )
}
