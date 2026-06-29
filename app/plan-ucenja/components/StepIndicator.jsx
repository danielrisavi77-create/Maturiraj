import React from 'react';

export default function StepIndicator({ currentStep }) {
  const steps = [
    { id: 1, label: 'Predmeti', sub: 'Odaberi predmete',     icon: '🎯', accent: '#4b7bff' },
    { id: 2, label: 'Tempo',    sub: 'Tjedno opterećenje',   icon: '⚡', accent: '#e9b446' },
    { id: 3, label: 'Preview',  sub: 'Pregled rasporeda',    icon: '🔮', accent: '#a78bfa' },
    { id: 4, label: 'Gotovo',   sub: 'Spremi i počni',       icon: '🚀', accent: '#3ecf6e' },
  ]

  const pct = ((currentStep - 1) / (steps.length - 1)) * 100
  const activeStep = steps[currentStep - 1]

  return (
    <div style={{
      background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: 24,
      boxShadow: '0 16px 48px rgba(0,0,0,.22)',
      backdropFilter: 'blur(20px)',
      padding: '20px 20px 18px',
      marginBottom: 20,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid — homepage DNA */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(75,123,255,.045) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Ambient glow that follows active step */}
      <div style={{
        position: 'absolute', pointerEvents: 'none', zIndex: 0,
        width: 160, height: 160, borderRadius: '50%',
        top: -40, left: `${(currentStep - 1) * 25 + 4}%`,
        background: `radial-gradient(circle, ${activeStep.accent}22, transparent 70%)`,
        transition: 'left .5s cubic-bezier(.16,1,.3,1)',
        filter: 'blur(2px)',
      }} />

      {/* Eyebrow pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 18, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 10px', borderRadius: 999,
          background: `${activeStep.accent}14`, border: `1px solid ${activeStep.accent}30`,
          transition: 'all .3s',
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: activeStep.accent, display: 'block',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: '.08em',
            textTransform: 'uppercase', color: activeStep.accent,
            transition: 'color .3s',
          }}>
            Korak {currentStep} / {steps.length} · {activeStep.label}
          </span>
        </div>
        <span style={{ fontSize: 10, color: 'var(--muted)' }}>{activeStep.sub}</span>
      </div>

      {/* Circles row — connectors drawn inline between circles so they never overlap */}
      <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        {steps.map((step, i) => {
          const active = currentStep === step.id
          const done   = currentStep > step.id
          // connector after this step is filled when we've moved past it
          const connFilled = currentStep > step.id

          return (
            <React.Fragment key={step.id}>
              {/* ── Step column ── */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 8, flexShrink: 0, position: 'relative',
              }}>
                {/* Glow halo on active */}
                {active && (
                  <div style={{
                    position: 'absolute', top: -7, left: '50%', transform: 'translateX(-50%)',
                    width: 52, height: 52, borderRadius: '50%',
                    background: `${step.accent}1a`, border: `1px solid ${step.accent}28`,
                    pointerEvents: 'none',
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                )}

                {/* Circle */}
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: done ? 14 : 17, fontWeight: 900,
                  background: active
                    ? `linear-gradient(135deg, ${step.accent}, ${step.accent}bb)`
                    : done ? 'rgba(75,123,255,.14)' : 'var(--s1)',
                  border: active
                    ? `2px solid ${step.accent}`
                    : done ? '2px solid rgba(75,123,255,.28)' : '2px solid var(--bdr)',
                  boxShadow: active ? `0 0 20px ${step.accent}50, 0 4px 14px rgba(0,0,0,.2)` : 'none',
                  color: active ? '#fff' : done ? 'var(--blue)' : 'var(--muted)',
                  transition: 'all .35s cubic-bezier(.16,1,.3,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  {done ? '✓' : step.icon}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: 11, fontWeight: active ? 800 : 600,
                  letterSpacing: '.01em',
                  color: active ? step.accent : done ? 'var(--text)' : 'var(--muted)',
                  transition: 'color .25s',
                  whiteSpace: 'nowrap',
                }}>
                  {step.label}
                </div>
              </div>

              {/* ── Connector segment between this step and the next ── */}
              {i < steps.length - 1 && (
                <div style={{
                  flex: 1, height: 2, marginTop: 18, position: 'relative',
                  background: 'var(--bdr)', borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 2,
                    background: `linear-gradient(90deg, ${step.accent}, ${steps[i + 1].accent})`,
                    transform: connFilled ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
                  }} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}