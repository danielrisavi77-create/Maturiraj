const STEP_META = {
  1: {
    accent: '#4b7bff',
    grad: 'linear-gradient(135deg, rgba(75,123,255,.22) 0%, rgba(124,92,252,.1) 60%, rgba(0,0,0,0) 100%)',
    orb: 'rgba(75,123,255,.24)',
  },
  2: {
    accent: '#e9b446',
    grad: 'linear-gradient(135deg, rgba(233,180,70,.2) 0%, rgba(233,180,70,.07) 60%, rgba(0,0,0,0) 100%)',
    orb: 'rgba(233,180,70,.22)',
  },
  3: {
    accent: '#a78bfa',
    grad: 'linear-gradient(135deg, rgba(167,139,250,.2) 0%, rgba(124,92,252,.1) 60%, rgba(0,0,0,0) 100%)',
    orb: 'rgba(167,139,250,.22)',
  },
  4: {
    accent: '#3ecf6e',
    grad: 'linear-gradient(135deg, rgba(62,207,110,.2) 0%, rgba(45,207,190,.1) 60%, rgba(0,0,0,0) 100%)',
    orb: 'rgba(62,207,110,.22)',
  },
}

export default function SectionTitle({ eyebrow, title, text, step }) {
  const meta = STEP_META[step] || STEP_META[1]
  const accent = meta.accent

  return (
    <div style={{
      position: 'relative', padding: '22px 24px 20px', overflow: 'hidden',
      background: meta.grad,
      borderBottom: '1px solid var(--bdr)',
    }}>
      {/* Ambient orb */}
      <div style={{
        position: 'absolute', bottom: -34, right: -34,
        width: 140, height: 140, borderRadius: '50%',
        background: meta.orb, filter: 'blur(36px)', pointerEvents: 'none',
      }} />

      {/* Step badge — top right */}
      {eyebrow && (
        <div style={{
          position: 'absolute', top: 16, right: 20,
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 10px', borderRadius: 999,
          background: `${accent}18`, border: `1px solid ${accent}35`,
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: accent, display: 'block',
            animation: 'pulse 2s ease-in-out infinite', flexShrink: 0,
          }} />
          <span style={{
            fontSize: 10, fontWeight: 800,
            letterSpacing: '.08em', textTransform: 'uppercase',
            color: accent,
          }}>
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 style={{
        fontFamily: 'var(--fh)',
        fontSize: 'clamp(22px,3.2vw,34px)',
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.03em',
        margin: '0 0 10px',
        color: '#fff',
        maxWidth: '80%',
      }}>
        {title}
      </h2>

      {text && (
        <p style={{
          color: 'rgba(255,255,255,.52)',
          fontSize: 13,
          lineHeight: 1.75,
          maxWidth: 560,
          margin: 0,
        }}>
          {text}
        </p>
      )}
    </div>
  )
}