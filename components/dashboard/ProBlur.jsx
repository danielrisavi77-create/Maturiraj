'use client'
// ── ProBlur ──────────────────────────────────────────────────────────────────
// Blur overlay za PRO-only sadržaj. Prikazuje zamućeni sadržaj + CTA na /pro.
// Dijeljeno između dashboard huba i plan dashboarda.
// ─────────────────────────────────────────────────────────────────────────────

export default function ProBlur({ children, onUpgrade, label = 'PRO feature', compact = false }) {
  return (
    <div style={{ position: 'relative', borderRadius: 'inherit' }}>
      <div style={{ filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none', opacity: 0.5 }}>
        {children}
      </div>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit',
        background: 'linear-gradient(to bottom, rgba(7,9,15,.2), rgba(7,9,15,.8))',
        gap: compact ? 6 : 8, padding: '16px',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--blue)', background: 'rgba(75,123,255,.15)', border: '1px solid rgba(75,123,255,.3)', padding: '3px 10px', borderRadius: 999 }}>✨ {label}</div>
        {!compact && <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', textAlign: 'center', lineHeight: 1.5, maxWidth: 200 }}>Otključaj puni dashboard uz PRO plan</div>}
        <button onClick={onUpgrade} style={{ padding: compact ? '7px 14px' : '9px 20px', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg,var(--blue),var(--violet))', color: '#fff', fontSize: compact ? 11 : 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)', boxShadow: '0 4px 14px rgba(75,123,255,.35)' }}>
          Otključaj PRO →
        </button>
      </div>
    </div>
  )
}
