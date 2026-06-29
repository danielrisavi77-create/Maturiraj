'use client'
import { useRouter } from 'next/navigation'

const PRO_FEATURES = [
  {
    icon: '✨',
    title: 'Adaptivni raspored',
    desc: 'Teži predmeti se pojavljuju češće. Plan se automatski prilagođava na temelju tvoje težine svakog predmeta.',
    color: 'var(--blue)',
    colorRgb: '75,123,255',
  },
  {
    icon: '🎯',
    title: 'Mini simulacije ispita',
    desc: 'Svaki 6. tjedan PRO automatski ubacuje simulacijski tjedan s analizom slabih točaka.',
    color: 'var(--violet)',
    colorRgb: '124,92,252',
  },
  {
    icon: '🔁',
    title: 'Korekcije rasporeda',
    desc: 'Svaki 4. tjedan PRO vraća slabije teme ranije nego u klasičnom planu — učvršćuješ znanje na vrijeme.',
    color: '#2dd4bf',
    colorRgb: '45,212,191',
  },
  {
    icon: '📊',
    title: 'Dashboard napretka',
    desc: 'Heatmapa učenja, predviđanje rezultata, streak i napredak po svakom predmetu.',
    color: 'var(--green)',
    colorRgb: '62,207,110',
  },
  {
    icon: '🤖',
    title: 'AI Profesor s kontekstom',
    desc: 'AI zna tvoj plan i raspored — odgovara kontekstualno, ne generički.',
    color: 'var(--gold)',
    colorRgb: '233,180,70',
  },
  {
    icon: '⭐',
    title: 'Discere arhiva — svi predmeti',
    desc: 'Pristup svim zadacima s državnih matura od 2010. do danas za sve predmete.',
    color: '#f87171',
    colorRgb: '248,113,113',
  },
]

export default function ProUpsellModal({ onClose, currentPlanWeeks = 0, satiTjedno = 10 }) {
  const router = useRouter()

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 600,
        background: 'rgba(7,9,15,.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn .2s ease',
        overflowY: 'auto',
      }}
    >
      <div style={{
        width: '100%', maxWidth: 560,
        background: 'linear-gradient(160deg, rgba(255,255,255,.052), rgba(255,255,255,.014))',
        border: '1px solid rgba(75,123,255,.28)',
        borderRadius: 32,
        boxShadow: '0 40px 100px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07)',
        backdropFilter: 'blur(24px)',
        overflow: 'hidden',
        animation: 'up .35s cubic-bezier(.16,1,.3,1)',
        position: 'relative',
      }}>
        {/* Top gradient bar */}
        <div style={{
          height: 3,
          background: 'linear-gradient(90deg, var(--blue), var(--violet), #2dd4bf)',
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 30, height: 30, borderRadius: 8,
            border: '1px solid rgba(255,255,255,.1)',
            background: 'rgba(255,255,255,.05)',
            color: 'var(--muted)', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--fb)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >×</button>

        <div style={{ padding: '28px 28px 32px' }}>
          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 14,
              padding: '5px 12px', borderRadius: 999,
              background: 'rgba(75,123,255,.12)', border: '1px solid rgba(75,123,255,.25)',
              fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'var(--blue)',
            }}>
              ✨ PRO plan učenja
            </div>

            <div style={{
              fontFamily: 'var(--fh)', fontSize: 'clamp(22px, 4vw, 30px)',
              fontWeight: 900, letterSpacing: '-.025em', lineHeight: 1.1, marginBottom: 10,
            }}>
              Adaptivni plan koji raste<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>zajedno s tobom.</span>
            </div>

            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
              Besplatni plan daje raspored. PRO plan ga prilagođava —
              teži predmeti dolaze češće, slabe točke se ispravljaju automatski.
            </div>
          </div>

          {/* Comparison: Free vs PRO */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22,
          }}>
            {/* Free */}
            <div style={{
              padding: '14px', borderRadius: 16,
              background: 'rgba(233,180,70,.06)', border: '1px solid rgba(233,180,70,.16)',
            }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--gold)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                ⭐ Besplatni plan
              </div>
              {[
                'Fiksni raspored predmeta',
                'Tjedne teme po redu',
                'Ponavljanje svakih 4 tjedna',
                'Simulacija svakih 8 tjedana',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 6, fontSize: 12, color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>

            {/* PRO */}
            <div style={{
              padding: '14px', borderRadius: 16,
              background: 'rgba(75,123,255,.08)', border: '1px solid rgba(75,123,255,.22)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -15, right: -15, width: 60, height: 60,
                borderRadius: '50%', background: 'rgba(75,123,255,.15)', filter: 'blur(16px)',
                pointerEvents: 'none',
              }} />
              <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--blue)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                ✨ PRO plan
              </div>
              {[
                'Adaptivni težinski raspored',
                'Teži predmeti se ponavljaju češće',
                'Korekcija slabih točaka svakih 4 tjedan',
                'Mini simulacije svakih 6 tjedana',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 6, fontSize: 12, color: 'var(--text)' }}>
                  <span style={{ color: 'var(--blue)', flexShrink: 0, marginTop: 1 }}>✨</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* PRO features grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
            {PRO_FEATURES.map(f => (
              <div key={f.title} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '12px 14px', borderRadius: 14,
                background: `rgba(${f.colorRgb},.05)`,
                border: `1px solid rgba(${f.colorRgb},.14)`,
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: `rgba(${f.colorRgb},.14)`,
                  border: `1px solid rgba(${f.colorRgb},.24)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 17,
                }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 2, color: 'var(--text)' }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div style={{
            padding: '18px', borderRadius: 18, marginBottom: 14,
            background: 'linear-gradient(135deg, rgba(75,123,255,.12), rgba(124,92,252,.08))',
            border: '1px solid rgba(75,123,255,.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, marginBottom: 4 }}>PRO plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>
                  19,99€
                </span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>/mj</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 700, marginTop: 3 }}>
                Ili 120€/god — uštedi 50%
              </div>
            </div>
            <button
              onClick={() => { onClose(); router.push('/pro') }}
              style={{
                padding: '13px 24px', borderRadius: 14, border: 'none',
                background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 14, fontWeight: 900,
                cursor: 'pointer', fontFamily: 'var(--fb)',
                boxShadow: '0 8px 24px rgba(75,123,255,.35)',
                transition: 'all .2s cubic-bezier(.16,1,.3,1)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              Otključaj PRO →
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>
            🔒 Sigurno plaćanje · Stripe &nbsp;·&nbsp; ↩ Otkaži bilo kada &nbsp;·&nbsp; ⚡ Pristup odmah
          </div>
        </div>
      </div>
    </div>
  )
}