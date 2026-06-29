export default function SummaryBox({ title, value, accent }) {
  return (
    <div style={{
      borderRadius: 16,
      padding: '14px 14px 12px',
      background: 'var(--s1)',
      border: `1px solid ${accent}28`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow orb */}
      <div style={{
        position: 'absolute', top: -12, right: -12,
        width: 44, height: 44, borderRadius: '50%',
        background: accent, filter: 'blur(20px)', opacity: .15, pointerEvents: 'none',
      }} />

      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '.1em',
        textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8,
      }}>
        {title}
      </div>
      <div style={{
        fontSize: 24, fontWeight: 900, fontFamily: 'var(--fh)',
        lineHeight: 1, color: accent,
      }}>
        {value}
      </div>
    </div>
  )
}