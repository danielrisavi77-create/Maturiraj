'use client'

// Shared UI primitives for parent portal

// ── ProgressBar ───────────────────────────────────────────────────────────────
export function ProgressBar({ value, color, style = {} }) {
  return (
    <div className="r-pbar" style={style}>
      <div className="r-pfill" style={{ width: `${value}%`, background: `linear-gradient(90deg,${color},${color}88)` }} />
    </div>
  )
}

// ── StatCard ──────────────────────────────────────────────────────────────────
export function StatCard({ label, value, sub, color, glow, delay = 0 }) {
  return (
    <div className="r-sc">
      <div className="r-sc-glow" style={{ background: glow }} />
      <div className="r-eye">{label}</div>
      <div className="r-sc-n" style={{
        background: `linear-gradient(135deg,${color},#fff)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        animationDelay: `${delay}s`,
      }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{sub}</div>
    </div>
  )
}

// ── SectionTitle ──────────────────────────────────────────────────────────────
export function SectionTitle({ children, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{children}</div>
      {right && <div style={{ fontSize: 12, color: 'var(--muted)' }}>{right}</div>}
    </div>
  )
}

// ── EmptyState ────────────────────────────────────────────────────────────────
export function EmptyState({ ico, title, sub }) {
  return (
    <div className="r-empty">
      <div className="r-empty-ico">{ico}</div>
      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>{title}</div>
      {sub && <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 280, lineHeight: 1.75 }}>{sub}</div>}
    </div>
  )
}

// ── InsightBlock ──────────────────────────────────────────────────────────────
export function InsightBlock({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
      {items.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '12px 14px', background: 'var(--s2)', borderRadius: 10, border: '1px solid var(--bdr)' }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>{s.ico}</span>
          <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{s.txt}</span>
        </div>
      ))}
    </div>
  )
}

// ── Legacy P* compat shims (used by old rokovi, postavke, povezi, dijete/[childId]) ──
const SEV_COLOR = { urgent: 'var(--red)', warning: 'var(--amber)', ok: 'var(--green)', info: 'var(--blue)' }

export function PCard({ children, style }) {
  return <div className="r-card" style={{ padding: '18px 22px', marginBottom: 12, ...style }}>{children}</div>
}
export function PLabel({ children }) {
  return <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>{children}</div>
}
export function PBadge({ severity, children }) {
  const c = SEV_COLOR[severity] || 'var(--muted)'
  return <span style={{ fontSize: 11, fontWeight: 700, color: c, background: `${c}14`, border: `1px solid ${c}28`, padding: '2px 8px', borderRadius: 99 }}>{children}</span>
}
export function PEmptyState({ icon, title, body, style }) {
  return (
    <div className="r-empty" style={style}>
      <div className="r-empty-ico">{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>{title}</div>
      {body && <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 280, lineHeight: 1.75 }}>{body}</div>}
    </div>
  )
}
export function PSkeleton({ height = 48, style }) {
  return <div style={{ height, borderRadius: 12, background: 'rgba(255,255,255,.04)', marginBottom: 12, animation: 'r-pulse 1.5s ease-in-out infinite', ...style }} />
}
export function PProgressBar({ pct, color }) {
  return <ProgressBar value={pct} color={color} />
}
