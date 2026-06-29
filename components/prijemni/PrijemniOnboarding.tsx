'use client'
import { useState, useEffect } from 'react'
import { useOnboarding } from '@/lib/prijemni/onboardingStore'
import { getNextActionRecommendation } from '@/lib/prijemni/personalize'
import { useRouter } from 'next/navigation'

// ─── Data ─────────────────────────────────────────────────────────────────────
const INTERESI = [
  { id: 'medicina',     label: '🩺 Medicina / Zdravstvo' },
  { id: 'tehnika',      label: '⚙️ Tehnika / Inženjerstvo' },
  { id: 'pravo',        label: '⚖️ Pravo / Društvene znanosti' },
  { id: 'ekonomija',    label: '📊 Ekonomija / Poslovni' },
  { id: 'humanistika',  label: '📚 Humanistika / Filologija' },
  { id: 'umjetnost',    label: '🎨 Umjetnost / Dizajn' },
]

const RAZREDI = [
  { id: 1, label: '1. razred' },
  { id: 2, label: '2. razred' },
  { id: 3, label: '3. razred' },
  { id: 4, label: '4. razred (matura!)' },
]

const PROSJECI = [
  { id: 'sub3',  label: 'Ispod 3.0',  color: '#f87171' },
  { id: '3-4',   label: '3.0 – 4.0',  color: '#fb923c' },
  { id: '4-45',  label: '4.0 – 4.5',  color: '#facc15' },
  { id: '45+',   label: '4.5 – 5.0',  color: '#4ade80' },
]

const GRADOVI = [
  { id: 'zg',       label: '🏙 Zagreb' },
  { id: 'ri',       label: '🌊 Rijeka' },
  { id: 'st',       label: '☀️ Split' },
  { id: 'os',       label: '🌾 Osijek' },
  { id: 'svejedno', label: '🗺 Svejedno' },
]

// ─── Style tokens ─────────────────────────────────────────────────────────────
const T = {
  bg: 'rgba(7,9,15,.96)',
  card: 'rgba(13,17,23,.98)',
  border: 'rgba(255,255,255,.07)',
  borderHl: 'rgba(75,123,255,.35)',
  blue: '#4b7bff',
  violet: '#7c5cfc',
  text: '#e8edf5',
  muted: '#8a95a8',
  dim: '#4a5568',
  fh: "var(--fh, 'Space Grotesk', sans-serif)",
  fm: "var(--fm, 'DM Mono', monospace)",
}

const CHIP = (active) => ({
  padding: '9px 14px',
  borderRadius: 10,
  border: `1px solid ${active ? T.borderHl : T.border}`,
  background: active ? 'rgba(75,123,255,.14)' : 'rgba(255,255,255,.03)',
  color: active ? '#93c5fd' : T.text,
  fontSize: 13,
  fontWeight: active ? 700 : 500,
  cursor: 'pointer',
  transition: 'all .15s',
  textAlign: 'left' as const,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})

const BTN_PRIMARY = {
  padding: '13px 28px',
  borderRadius: 12,
  border: 'none',
  background: `linear-gradient(135deg, ${T.blue}, ${T.violet})`,
  color: '#fff',
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(75,123,255,.35)',
  transition: 'opacity .15s',
}

const BTN_GHOST = {
  padding: '10px 18px',
  borderRadius: 10,
  border: `1px solid ${T.border}`,
  background: 'transparent',
  color: T.muted,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
}

// ─── Progress dots ────────────────────────────────────────────────────────────
function ProgressDots({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{
          width: i === step ? 20 : 6,
          height: 6,
          borderRadius: 3,
          background: i < step ? T.blue : i === step ? `linear-gradient(90deg, ${T.blue}, ${T.violet})` : T.border,
          transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        }} />
      ))}
    </div>
  )
}

// ─── Step 1: Kontekst (razred + interesi) ────────────────────────────────────
function Step1({ draft, setDraft }) {
  const toggleInterest = (id: string) => {
    setDraft(d => ({
      ...d,
      interesi: d.interesi.includes(id)
        ? d.interesi.filter(x => x !== id)
        : [...d.interesi, id],
    }))
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, color: T.blue, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8, fontFamily: T.fm }}>
          Korak 1 od 3
        </div>
        <h2 style={{ fontFamily: T.fh, fontSize: 22, fontWeight: 800, color: T.text, letterSpacing: '-.02em', marginBottom: 6 }}>
          Reci nam nešto o sebi
        </h2>
        <p style={{ fontSize: 13.5, color: T.muted, lineHeight: 1.6 }}>
          30 sekundi — prilagođavamo prikaz tvojoj situaciji.
        </p>
      </div>

      {/* Razred */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10, fontFamily: T.fm }}>
          Koji si razred?
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {RAZREDI.map(r => (
            <button key={r.id} onClick={() => setDraft(d => ({ ...d, razred: r.id as any }))} style={CHIP(draft.razred === r.id)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interesi */}
      <div>
        <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10, fontFamily: T.fm }}>
          Što te zanima? (odaberi više)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {INTERESI.map(i => (
            <button key={i.id} onClick={() => toggleInterest(i.id)} style={CHIP(draft.interesi.includes(i.id))}>
              {i.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Step 2: Prosjek + grad ───────────────────────────────────────────────────
function Step2({ draft, setDraft }) {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, color: T.blue, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8, fontFamily: T.fm }}>
          Korak 2 od 3
        </div>
        <h2 style={{ fontFamily: T.fh, fontSize: 22, fontWeight: 800, color: T.text, letterSpacing: '-.02em', marginBottom: 6 }}>
          Još malo konteksta
        </h2>
        <p style={{ fontSize: 13.5, color: T.muted, lineHeight: 1.6 }}>
          Koristimo ovo samo za sortirajuće prijedloge — ne dijelimo ni s kim.
        </p>
      </div>

      {/* Prosjek */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10, fontFamily: T.fm }}>
          Otprilike koji ti je prosjek?
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {PROSJECI.map(p => (
            <button key={p.id} onClick={() => setDraft(d => ({ ...d, prosjek_band: p.id as any }))}
              style={{
                ...CHIP(draft.prosjek_band === p.id),
                borderColor: draft.prosjek_band === p.id ? p.color + '66' : T.border,
                color: draft.prosjek_band === p.id ? p.color : T.text,
                background: draft.prosjek_band === p.id ? p.color + '18' : 'rgba(255,255,255,.03)',
              }}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grad */}
      <div>
        <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10, fontFamily: T.fm }}>
          Koji grad preferirate?
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {GRADOVI.map(g => (
            <button key={g.id} onClick={() => setDraft(d => ({ ...d, city_preference: g.id as any }))} style={CHIP(draft.city_preference === g.id)}>
              {g.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Step 3: CTA ──────────────────────────────────────────────────────────────
function Step3({ draft, onMatcher, onCompare, onBrowse }) {
  const rec = getNextActionRecommendation({ ...draft, completed_at: null, skipped: false })
  const interestLabels = draft.interesi
    .map(i => INTERESI.find(x => x.id === i)?.label)
    .filter(Boolean)
    .join(', ')

  const cards = [
    {
      action: 'matcher' as const,
      icon: '🎯',
      title: 'Score Matcher',
      desc: 'Unesi ocjene i predmete — vidjet ćeš točno na kojim studijima imaš realnu šansu.',
      borderBase: 'rgba(75,123,255,.3)',
      bg: 'linear-gradient(135deg,rgba(75,123,255,.1),rgba(124,92,252,.06))',
      onClick: onMatcher,
    },
    {
      action: 'compare' as const,
      icon: '⚖️',
      title: 'Usporedi studije',
      desc: 'Side-by-side usporedba 2-4 studija — rokovi, praga, cijena, format ispita.',
      borderBase: 'rgba(124,92,252,.25)',
      bg: 'linear-gradient(135deg,rgba(124,92,252,.08),rgba(75,123,255,.04))',
      onClick: onCompare,
    },
    {
      action: 'browse' as const,
      icon: '🔍',
      title: 'Istraži sve studije',
      desc: 'Pregledaj popis filtriran prema tvojim interesima i preferenciji grada.',
      borderBase: T.border,
      bg: 'rgba(255,255,255,.02)',
      onClick: onBrowse,
    },
  ]

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, color: '#4ade80', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8, fontFamily: T.fm }}>
          Personalizacija gotova ✓
        </div>
        <h2 style={{ fontFamily: T.fh, fontSize: 22, fontWeight: 800, color: T.text, letterSpacing: '-.02em', marginBottom: 6 }}>
          Gdje krećeš?
        </h2>
        {interestLabels && (
          <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>
            Na temelju interesa za <span style={{ color: '#93c5fd' }}>{interestLabels}</span>.
          </p>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {cards.map(card => {
          const isRec = card.action === rec.action
          return (
            <button key={card.action} onClick={card.onClick} style={{
              padding: '16px 20px', borderRadius: 14,
              border: `1px solid ${card.borderBase}`,
              background: isRec ? card.bg : 'rgba(255,255,255,.02)',
              cursor: 'pointer', textAlign: 'left' as const, color: T.text,
              position: 'relative', overflow: 'hidden',
            }}>
              {isRec && (
                <span style={{
                  position: 'absolute', top: 10, right: 12,
                  fontSize: 9, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase' as const,
                  padding: '2px 7px', borderRadius: 99,
                  background: 'rgba(75,123,255,.18)', color: '#93c5fd',
                  border: '1px solid rgba(75,123,255,.3)',
                }}>Preporučeno</span>
              )}
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{card.icon} {card.title}</div>
              <div style={{ fontSize: 12.5, color: T.muted, lineHeight: 1.5 }}>{card.desc}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Main wizard ──────────────────────────────────────────────────────────────
interface PrijemniOnboardingProps {
  onMatcherOpen?: () => void
  onCompareOpen?: () => void
  onBrowse?: (prefs: any) => void
}

export default function PrijemniOnboarding({ onMatcherOpen, onCompareOpen, onBrowse }: PrijemniOnboardingProps) {
  const { shouldShow, complete, skip } = useOnboarding()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState({
    razred: null as any,
    interesi: [] as string[],
    prosjek_band: null as any,
    city_preference: null as any,
  })

  useEffect(() => {
    setMounted(true)
    // Slight delay so page content renders first
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

  if (!mounted || !shouldShow || !visible) return null

  const handleSkip = () => {
    skip()
  }

  const handleNext = () => {
    if (step < 2) setStep(s => s + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(s => s - 1)
  }

  const handleComplete = (action: 'matcher' | 'compare' | 'browse') => {
    complete(draft)
    if (action === 'matcher') onMatcherOpen?.()
    else if (action === 'compare') onCompareOpen?.()
    else onBrowse?.(draft)
  }

  const canNext = step === 0
    ? (draft.razred !== null || draft.interesi.length > 0)
    : true // step 2 is optional

  return (
    <>
      <style>{`
        @keyframes ob-backdrop { from{opacity:0} to{opacity:1} }
        @keyframes ob-panel { from{opacity:0;transform:translateY(32px) scale(.97)} to{opacity:1;transform:none} }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleSkip}
        style={{
          position: 'fixed', inset: 0, zIndex: 8000,
          background: 'rgba(0,0,0,.6)',
          backdropFilter: 'blur(6px)',
          animation: 'ob-backdrop .3s ease',
        }}
      />

      {/* Panel */}
      <div
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Personaliziraj prikaz"
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 8001,
          width: '100%', maxWidth: 500,
          margin: '0 16px',
          background: T.card,
          border: `1px solid ${T.border}`,
          borderRadius: 20,
          boxShadow: '0 32px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.04)',
          overflow: 'hidden',
          animation: 'ob-panel .35s cubic-bezier(.16,1,.3,1)',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 22px 0',
        }}>
          <ProgressDots step={step} total={3} />
          <button
            onClick={handleSkip}
            style={{ background: 'none', border: 'none', color: T.dim, cursor: 'pointer', fontSize: 12, fontWeight: 600, padding: '4px 8px', borderRadius: 6 }}
          >
            Preskoči →
          </button>
        </div>

        {/* Step content */}
        <div style={{ padding: '22px 22px 0' }}>
          {step === 0 && <Step1 draft={draft} setDraft={setDraft} />}
          {step === 1 && <Step2 draft={draft} setDraft={setDraft} />}
          {step === 2 && (
            <Step3
              draft={draft}
              onMatcher={() => handleComplete('matcher')}
              onCompare={() => handleComplete('compare')}
              onBrowse={() => handleComplete('browse')}
            />
          )}
        </div>

        {/* Footer nav (steps 0 & 1 only) */}
        {step < 2 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 22px 22px', gap: 12,
          }}>
            {step > 0
              ? <button onClick={handleBack} style={BTN_GHOST}>← Natrag</button>
              : <span />
            }
            <button
              onClick={handleNext}
              disabled={!canNext}
              style={{ ...BTN_PRIMARY, opacity: canNext ? 1 : 0.45 }}
            >
              Dalje →
            </button>
          </div>
        )}

        {/* Footer spacing for step 2 */}
        {step === 2 && <div style={{ height: 22 }} />}
      </div>
    </>
  )
}
