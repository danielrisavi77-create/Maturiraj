'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

/* ─── Confetti particle ────────────────────────── */
const CONFETTI_COLORS = [
  '#4b7bff', '#7c5cfc', '#e9b446', '#f5d170',
  '#3ecf6e', '#2dd4bf', '#f87171', '#c084fc',
  '#fbbf24', '#38bdf8',
]

const CONFETTI_COUNT = 80

function generateParticles() {
  // Fixed decorative layout keeps server markup and hydration identical.
  let seed = 61723
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 4294967296
  }
  const randomBetween = (a, b) => a + random() * (b - a)
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    id: i,
    x: randomBetween(5, 95),           // % from left
    delay: randomBetween(0, 1.2),      // s
    duration: randomBetween(2.4, 4.2), // s
    size: randomBetween(6, 13),        // px
    color: CONFETTI_COLORS[Math.floor(random() * CONFETTI_COLORS.length)],
    rotation: randomBetween(-180, 180),
    shape: random() > 0.5 ? 'rect' : 'circle',
    swayX: randomBetween(-60, 60),     // horizontal drift px
  }))
}

const PARTICLES = generateParticles()

/* ─── Stats card ───────────────────────────────── */
function StatCard({ icon, label, value, color, delay }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      padding: '18px 22px', borderRadius: 20,
      background: `linear-gradient(160deg, ${color}18, rgba(255,255,255,.02))`,
      border: `1px solid ${color}30`,
      animation: `celebUp .5s cubic-bezier(.16,1,.3,1) ${delay}s both`,
      minWidth: 100,
    }}>
      <div style={{ fontSize: 26 }}>{icon}</div>
      <div style={{
        fontFamily: 'var(--fh)', fontSize: 28, fontWeight: 900,
        color, lineHeight: 1,
      }}>{value}</div>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>
        {label}
      </div>
    </div>
  )
}

/* ─── Main component ───────────────────────────── */
export default function CelebrationSplash({
  planType = 'free',
  selectedSubjects = [],
  satiTjedno = 10,
  tjednaDoMature = 9,
  totalWeeks = 0,
  onContinue,
}) {
  const router   = useRouter()
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const particles = PARTICLES
  const timerRef  = useRef(null)

  const isPro      = planType === 'pro'
  const ukupnoSati = satiTjedno * tjednaDoMature

  const handleContinue = () => {
    if (leaving) return
    clearTimeout(timerRef.current)
    setLeaving(true)
    setTimeout(() => {
      if (onContinue) onContinue()
      else router.push('/plan-ucenja/dashboard')
    }, 400)
  }

  useEffect(() => {
    // Kratka pauza pa prikaži
    const t = setTimeout(() => setVisible(true), 80)
    // Auto-redirect nakon 6s
    timerRef.current = setTimeout(() => handleContinue(), 6200)
    return () => { clearTimeout(t); clearTimeout(timerRef.current) }
  }, [])

  return (
    <>
      {/* ── Keyframes injected inline ── */}
      <style>{`
        @keyframes celebFadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes celebFadeOut {
          from { opacity: 1 }
          to   { opacity: 0 }
        }
        @keyframes celebUp {
          from { opacity: 0; transform: translateY(24px) scale(.94) }
          to   { opacity: 1; transform: translateY(0)    scale(1)    }
        }
        @keyframes celebPop {
          0%   { transform: scale(.6);  opacity: 0 }
          60%  { transform: scale(1.08) }
          100% { transform: scale(1);   opacity: 1 }
        }
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(0deg);   opacity: 1 }
          80%  { opacity: 1 }
          100% { transform: translateY(110vh) rotate(var(--rot)); opacity: 0 }
        }
        @keyframes confettiSway {
          0%, 100% { margin-left: 0 }
          50%       { margin-left: var(--sway) }
        }
        @keyframes celebShimmer {
          0%   { background-position: -200% center }
          100% { background-position:  200% center }
        }
        @keyframes celebBounce {
          0%, 100% { transform: translateY(0) }
          50%       { transform: translateY(-8px) }
        }
        @keyframes progressFill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(4,6,12,.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: leaving
          ? 'celebFadeOut .4s ease forwards'
          : visible
          ? 'celebFadeIn .35s ease forwards'
          : 'none',
        opacity: visible ? 1 : 0,
      }}>

        {/* ── Confetti ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {particles.map(p => (
            <div key={p.id} style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: -20,
              width: p.shape === 'circle' ? p.size : p.size * 0.7,
              height: p.shape === 'circle' ? p.size : p.size * 1.4,
              borderRadius: p.shape === 'circle' ? '50%' : 3,
              background: p.color,
              '--rot': `${p.rotation}deg`,
              '--sway': `${p.swayX}px`,
              animation: `
                confettiFall ${p.duration}s ease-in ${p.delay}s both,
                confettiSway ${p.duration * 0.6}s ease-in-out ${p.delay}s infinite
              `,
              opacity: 0,
            }} />
          ))}
        </div>

        {/* ── Ambient glow ── */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 500, height: 300, borderRadius: '50%',
          background: isPro
            ? 'radial-gradient(circle, rgba(75,123,255,.2), transparent 65%)'
            : 'radial-gradient(circle, rgba(233,180,70,.18), transparent 65%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        {/* ── Card ── */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: '100%', maxWidth: 520,
          background: 'linear-gradient(160deg, rgba(255,255,255,.055), rgba(255,255,255,.015))',
          border: `1px solid ${isPro ? 'rgba(75,123,255,.3)' : 'rgba(233,180,70,.28)'}`,
          borderRadius: 32,
          boxShadow: `0 40px 100px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.08)`,
          padding: '40px 36px 36px',
          textAlign: 'center',
          animation: 'celebUp .5s cubic-bezier(.16,1,.3,1) .1s both',
        }}>

          {/* Top badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '6px 14px', borderRadius: 999, marginBottom: 20,
            background: isPro ? 'rgba(75,123,255,.14)' : 'rgba(233,180,70,.12)',
            border: isPro ? '1px solid rgba(75,123,255,.3)' : '1px solid rgba(233,180,70,.28)',
            fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
            color: isPro ? 'var(--blue)' : 'var(--gold)',
            animation: 'celebPop .5s cubic-bezier(.16,1,.3,1) .2s both', opacity: 0,
          }}>
            {isPro ? '✨ PRO plan aktiviran' : '⭐ Plan učenja aktiviran'}
          </div>

          {/* Main emoji */}
          <div style={{
            fontSize: 64, lineHeight: 1, marginBottom: 16,
            animation: 'celebBounce 2s ease-in-out .5s infinite',
            display: 'block',
          }}>
            🎉
          </div>

          {/* Headline */}
          <div style={{
            fontFamily: 'var(--fh)',
            fontSize: 'clamp(26px, 5vw, 38px)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-.03em',
            marginBottom: 10,
            background: isPro
              ? 'linear-gradient(135deg, #6b9bff, #a78bfa)'
              : 'linear-gradient(135deg, #f5d27b, #e9b446)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'celebUp .5s cubic-bezier(.16,1,.3,1) .25s both', opacity: 0,
          }}>
            Tvoj plan je spreman!
          </div>

          <div style={{
            fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 28,
            animation: 'celebUp .5s cubic-bezier(.16,1,.3,1) .35s both', opacity: 0,
          }}>
            Raspored je generiran i čuva se u tvom profilu.<br />
            Svaki tjedan znaš točno što učiš.
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 10, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 28,
          }}>
            <StatCard
              icon="📚"
              label="Predmeta"
              value={selectedSubjects.length}
              color="var(--blue)"
              delay={0.4}
            />
            <StatCard
              icon="📅"
              label="Tjedana"
              value={totalWeeks || tjednaDoMature}
              color="var(--violet)"
              delay={0.5}
            />
            <StatCard
              icon="⏱"
              label="Ukupno sati"
              value={`${ukupnoSati}h`}
              color={isPro ? 'var(--blue)' : 'var(--gold)'}
              delay={0.6}
            />
          </div>

          {/* Subjects preview */}
          {selectedSubjects.length > 0 && (
            <div style={{
              display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap',
              marginBottom: 28,
              animation: 'celebUp .5s cubic-bezier(.16,1,.3,1) .65s both', opacity: 0,
            }}>
              {selectedSubjects.map(s => (
                <div key={s.id} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '5px 10px', borderRadius: 999,
                  background: `${s.color}18`, border: `1px solid ${s.color}30`,
                  fontSize: 12, fontWeight: 700, color: s.color,
                }}>
                  <span>{s.sym}</span> {s.name}
                </div>
              ))}
            </div>
          )}

          {/* CTA button */}
          <button
            onClick={handleContinue}
            style={{
              width: '100%', padding: '15px', borderRadius: 16, border: 'none',
              background: isPro
                ? 'linear-gradient(135deg, var(--blue), var(--violet))'
                : 'linear-gradient(135deg, #f6c453, #e9b446)',
              color: isPro ? '#fff' : '#160d00',
              fontSize: 15, fontWeight: 900, cursor: 'pointer',
              fontFamily: 'var(--fb)',
              boxShadow: isPro
                ? '0 8px 28px rgba(75,123,255,.35)'
                : '0 8px 28px rgba(233,180,70,.3)',
              transition: 'all .2s cubic-bezier(.16,1,.3,1)',
              animation: 'celebUp .5s cubic-bezier(.16,1,.3,1) .7s both', opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = isPro
                ? '0 14px 40px rgba(75,123,255,.45)'
                : '0 14px 40px rgba(233,180,70,.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = isPro
                ? '0 8px 28px rgba(75,123,255,.35)'
                : '0 8px 28px rgba(233,180,70,.3)'
            }}
          >
            Otvori plan učenja →
          </button>

          {/* Auto-redirect progress bar */}
          <div style={{ marginTop: 14 }}>
            <div style={{
              height: 3, borderRadius: 99,
              background: 'rgba(255,255,255,.06)',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 99,
                background: isPro
                  ? 'linear-gradient(90deg, var(--blue), var(--violet))'
                  : 'linear-gradient(90deg, var(--gold), #f5d170)',
                animation: 'progressFill 6s linear .8s both',
                width: '0%',
              }} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, fontWeight: 600 }}>
              Automatski redirect za 6s
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
