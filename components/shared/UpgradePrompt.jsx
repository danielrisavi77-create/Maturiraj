'use client'
/**
 * components/shared/UpgradePrompt.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable upgrade CTA component.
 * Renders a conversion-smart paywall prompt for any locked feature.
 *
 * Usage:
 *   <UpgradePrompt feature="AI Profesor" target="pro" from="dashboard" />
 *   <UpgradePrompt feature="Kalkulator" target="starter" from="kalkulator" compact />
 */
import { useRouter } from 'next/navigation'

const PLAN_CONFIG = {
  starter: {
    emoji:  '⭐',
    name:   'Starter',
    price:  '6,99€/mj',
    color:  'rgba(255,107,43,1)',
    colorA: 'rgba(255,107,43,.18)',
    colorB: 'rgba(255,107,43,.08)',
    border: 'rgba(255,107,43,.28)',
    gradient: 'linear-gradient(135deg, #ff6b2b, #f5c842)',
    txtColor: '#1a0a00',
  },
  pro: {
    emoji:  '✨',
    name:   'Pro',
    price:  '19,99€/mj',
    color:  'rgba(75,123,255,1)',
    colorA: 'rgba(75,123,255,.18)',
    colorB: 'rgba(75,123,255,.08)',
    border: 'rgba(75,123,255,.28)',
    gradient: 'linear-gradient(135deg, #2a4aff, #6b9bff)',
    txtColor: '#fff',
  },
}

export default function UpgradePrompt({
  /** Name of the locked feature, shown to user */
  feature = 'ovu funkcionalnost',
  /** Minimum plan needed: 'starter' | 'pro' */
  target = 'starter',
  /** Where user came from — appended to /pro?from= */
  from = '',
  /** Short description shown below the feature name */
  description = null,
  /** Bullet list of what they unlock */
  bullets = [],
  /** Compact single-line variant */
  compact = false,
  /** Custom CTA override */
  ctaText = null,
  /** Custom onClick override */
  onClick = null,
}) {
  const router  = useRouter()
  const plan    = PLAN_CONFIG[target] ?? PLAN_CONFIG.starter
  const fromStr = from ? `?from=${from}&plan=${target}` : `?plan=${target}`

  const handleClick = () => {
    if (onClick) { onClick(); return }
    router.push(`/pro${fromStr}`)
  }

  if (compact) {
    return (
      <div
        onClick={handleClick}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 10, cursor: 'pointer',
          background: plan.colorB, border: `1px solid ${plan.border}`,
          fontSize: 12, fontWeight: 700, color: plan.color,
          transition: 'all .18s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = plan.colorA }}
        onMouseLeave={e => { e.currentTarget.style.background = plan.colorB }}
      >
        <span>🔒</span>
        <span>{ctaText ?? `Otključaj uz ${plan.name} — ${plan.price}`}</span>
      </div>
    )
  }

  return (
    <div style={{
      padding: '28px 24px 32px', borderRadius: 20, textAlign: 'center',
      background: `linear-gradient(135deg, ${plan.colorB}, transparent)`,
      border: `1px solid ${plan.border}`,
      backdropFilter: 'blur(4px)',
    }}>
      <div style={{ fontSize: 36, marginBottom: 14 }}>🔒</div>
      <div style={{
        fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 700,
        color: 'var(--txt)', marginBottom: 8,
      }}>
        Otključaj <span style={{ color: plan.color }}>{feature}</span>
      </div>
      {description && (
        <div style={{
          fontSize: 13, color: 'var(--muted)', lineHeight: 1.7,
          maxWidth: 300, margin: '0 auto 20px',
        }}>
          {description}
        </div>
      )}
      {bullets.length > 0 && (
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px',
          marginBottom: 24, textAlign: 'left', maxWidth: 280, margin: '0 auto 24px',
        }}>
          {bullets.map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--txt)' }}>
              <span style={{ color: plan.color, fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleClick}
        style={{
          padding: '13px 28px', borderRadius: 12, border: 'none',
          background: plan.gradient ?? `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
          color: plan.txtColor ?? '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer',
          fontFamily: 'var(--fb)', width: '100%', maxWidth: 320,
          display: 'block', margin: '0 auto',
          boxShadow: `0 0 0 1px ${plan.colorA}, 0 8px 32px ${plan.colorA}`,
          transition: 'transform .15s, box-shadow .15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = `0 0 0 1px ${plan.border}, 0 22px 64px ${plan.border}`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = `0 0 0 1px ${plan.colorA}, 0 8px 32px ${plan.colorA}`
        }}
      >
        {ctaText ?? `Uzmi ${plan.name} — ${plan.price} →`}
      </button>
    </div>
  )
}
