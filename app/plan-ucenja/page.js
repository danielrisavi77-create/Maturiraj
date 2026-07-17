'use client'
import { useMemo, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import StepIndicator from './components/StepIndicator'
import SectionTitle from './components/SectionTitle'
import SubjectGrid from './components/SubjectGrid'
import PreviewWeekCard from './components/PreviewWeekCard'
import PlanSidebar from './components/PlanSidebar'
import SavePlanModal from './components/SavePlanModal'
import CelebrationSplash from './components/CelebrationSplash'
import ProUpsellModal from './components/ProUpsellModal'
import { buildFreePlan, buildProPlan, PREDMETI_PLAN } from './lib/planGenerator'
import { useAuth } from '@/lib/hooks/useAuth'
import { useSavePlan } from '@/lib/hooks/useSavePlan'
import { card, MATURA_DATE } from '@/lib/dashboard/helpers'

/* ─── Card surface — glass (dijeljeno s dashboardom) ─────────────── */
const cardStyle = { ...card }

/* ─── Step card — glass + band header layout ──────────── */
const stepCardStyle = { ...card, overflow: 'hidden' }

/* ─── Intensity labels ─────────────────────────── */
const HOURS_OPTIONS = [
  { val: 5,  label: '5h',  tag: 'Lagano',     desc: 'Idealno za završni sprint ili lagani start',    icon: '🌱' },
  { val: 8,  label: '8h',  tag: 'Umjereno',   desc: 'Balans između učenja i slobodnog vremena',       icon: '⚡' },
  { val: 10, label: '10h', tag: 'Solidno',    desc: 'Preporučeno za pouzdanu pripremu mature',        icon: '🎯' },
  { val: 15, label: '15h', tag: 'Intenzivno', desc: 'Za ambiciozne — vidljiv napredak svaki tjedan',  icon: '🔥' },
  { val: 20, label: '20h', tag: 'Maksimalno', desc: 'Sav fokus na maturu — maksimalni potencijal',    icon: '🚀' },
]

/* ─── Difficulty map ───────────────────────────── */
const DIFFICULTY = {
  1.35: { label: 'Teško',     color: '#f87171' },
  1.25: { label: 'Izazovno',  color: '#fb923c' },
  1.20: { label: 'Izazovno',  color: '#fb923c' },
  1.15: { label: 'Srednje',   color: '#fbbf24' },
  1.10: { label: 'Srednje',   color: '#fbbf24' },
  1.05: { label: 'Lakše',     color: '#34d399' },
  1.0:  { label: 'Lakše',     color: '#34d399' },
}
const getDiff = (t) => DIFFICULTY[t] || { label: 'Srednje', color: '#fbbf24' }

export default function PlanUcenja() {
  usePageTracking('plan-ucenja')
  const router = useRouter()
  const { user, isPaid, isPro } = useAuth()
  const { savePlan, saving } = useSavePlan()

  const danas          = new Date()
  const danaDoMature   = Math.max(1, Math.ceil((MATURA_DATE - danas) / (1000 * 60 * 60 * 24)))
  const tjednaDoMature = Math.ceil(danaDoMature / 7)

  const [currentStep,    setCurrentStep]    = useState(1)
  const [isAnimating,    setIsAnimating]    = useState(false)
  const [selPredmeti,    setSelPredmeti]    = useState([])
  const [satiTjedno,     setSatiTjedno]     = useState(10)
  const [planMode,       setPlanMode]       = useState('free')
  const [hoveredPred,    setHoveredPred]    = useState(null)
  const [showSaveModal,    setShowSaveModal]    = useState(false)
  const [saveSuccess,      setSaveSuccess]      = useState(false)
  const [saveError,        setSaveError]        = useState(null)
  const [showCelebration,  setShowCelebration]  = useState(false)
  const [savedPlanType,    setSavedPlanType]    = useState('free')
  const [savedTotalWeeks,  setSavedTotalWeeks]  = useState(0)
  const [showProModal,     setShowProModal]     = useState(false)
  const contentRef = useRef(null)
  const stepTopRef  = useRef(null)

  // PRO status iz useAuth hooka
  const hasPro = isPro
  // Label for the free/standard plan — Standard users paid, don't call it 'besplatni'
  const standardLabel = isPaid && !isPro ? 'Standard plan' : 'Besplatni plan'
  const standardEmoji = isPaid && !isPro ? '⭐' : '⭐'
  const standardEyebrow = isPaid && !isPro ? 'STANDARD' : 'BESPLATNO'

  const groups = useMemo(() => [...new Set(PREDMETI_PLAN.map((p) => p.group))], [])
  const MAX_PREDMETA = 9
  const togglePred = (id) =>
    setSelPredmeti((s) => {
      if (s.includes(id)) return s.filter((x) => x !== id)
      if (s.length >= MAX_PREDMETA) return s
      const pred = PREDMETI_PLAN.find((p) => p.id === id)
      // Auto-deselect any other subject from the same mutex group
      const withoutMutex = pred?.mutexGroup
        ? s.filter((x) => {
            const other = PREDMETI_PLAN.find((p) => p.id === x)
            return other?.mutexGroup !== pred.mutexGroup
          })
        : s
      return [...withoutMutex, id]
    })

  const selectedSubjects = useMemo(
    () => selPredmeti.map((id) => PREDMETI_PLAN.find((p) => p.id === id)).filter(Boolean),
    [selPredmeti]
  )
  const ukupnoSati = satiTjedno * tjednaDoMature

  const previewPlan = useMemo(
    () => buildFreePlan(selectedSubjects, satiTjedno, Math.min(4, Math.max(1, selectedSubjects.length || 1))),
    [selectedSubjects, satiTjedno]
  )
  const freePlan = useMemo(
    () => buildFreePlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 10)),
    [selectedSubjects, satiTjedno, tjednaDoMature]
  )
  const proPlan = useMemo(
    () => buildProPlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 10)),
    [selectedSubjects, satiTjedno, tjednaDoMature]
  )
  const displayedPlan = planMode === 'pro' ? proPlan : freePlan

  const canGoStep2 = selPredmeti.length > 0
  const canGoStep3 = canGoStep2
  const canGoStep4 = canGoStep3

  /* ─── Animated step transition ────────────────── */
  const goToStep = (target) => {
    if (isAnimating) return
    const dir = target > currentStep ? 'forward' : 'back'
    setIsAnimating(true)
    if (stepTopRef.current) {
      stepTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (contentRef.current) {
      contentRef.current.style.transition = 'opacity .22s ease, transform .28s cubic-bezier(.4,0,1,1)'
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = dir === 'forward' ? 'translateX(-28px)' : 'translateX(28px)'
    }
    setTimeout(() => {
      setCurrentStep(target)
      if (contentRef.current) {
        contentRef.current.style.transition = 'none'
        contentRef.current.style.opacity = '0'
        contentRef.current.style.transform = dir === 'forward' ? 'translateX(28px)' : 'translateX(-28px)'
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (contentRef.current) {
            contentRef.current.style.transition = 'opacity .32s ease, transform .38s cubic-bezier(.16,1,.3,1)'
            contentRef.current.style.opacity = '1'
            contentRef.current.style.transform = 'translateX(0)'
          }
          setTimeout(() => setIsAnimating(false), 380)
        })
      })
    }, 240)
  }

  const nextStep   = () => {
    if (currentStep === 1 && !canGoStep2) return
    if (currentStep === 2 && !canGoStep3) return
    if (currentStep === 3 && !canGoStep4) return
    if (currentStep < 4) goToStep(currentStep + 1)
  }
  const prevStepFn = () => { if (currentStep > 1) goToStep(currentStep - 1) }

  /* ─── Save plan logic ──────────────────────────── */
  const handleSavePlan = async (type = 'free') => {
    setSaveError(null)
    if (!user) {
      setShowSaveModal(true)
      return
    }
    const weeks = type === 'pro'
      ? buildProPlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 20))
      : buildFreePlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 20))

    const { planId, error } = await savePlan({
      userId: user?.id,
      selectedSubjects,
      satiTjedno,
      tjednaDoMature,
      planType: type,
    })
    if (error) {
      setSaveError(error)
    } else {
      setSaveSuccess(true)
      setSavedPlanType(type)
      setSavedTotalWeeks(weeks.length)
      setShowCelebration(true)
    }
  }

  const handleModalSuccess = async () => {
    setShowSaveModal(false)
    await handleSavePlan(planMode)
  }

  /* ─── Ambient color ────────────────────────────── */
  const ambientColor = useMemo(() => {
    if (hoveredPred) {
      const p = PREDMETI_PLAN.find(x => x.id === hoveredPred)
      return p?.color || 'rgba(75,123,255,1)'
    }
    if (selectedSubjects.length > 0) return selectedSubjects[0].color
    return 'rgba(75,123,255,1)'
  }, [hoveredPred, selectedSubjects])

  const progressPct = ((currentStep - 1) / 3) * 100
  const stepLabels  = ['Predmeti', 'Tempo', 'Preview', 'Plan']
  const tjednaLabel = tjednaDoMature === 1 ? 'tjedan' : tjednaDoMature < 5 ? 'tjedna' : 'tjedana'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', backgroundImage: 'radial-gradient(rgba(75,123,255,.06) 1px,transparent 1px)', backgroundSize: '48px 48px', overflow: 'hidden', position: 'relative' }}>

      {/* ── Ambient orbs ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: 600, height: 600, borderRadius: '50%',
          background: `radial-gradient(circle, ${ambientColor}20, transparent 65%)`,
          filter: 'blur(40px)', transition: 'background 1.2s ease',
          animation: 'orb-a 14s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '-8%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,92,252,.13), transparent 65%)',
          filter: 'blur(60px)', animation: 'orb-b 18s ease-in-out infinite 3s',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', left: '40%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,.08), transparent 65%)',
          filter: 'blur(50px)', animation: 'orb-a 20s ease-in-out infinite 7s',
        }} />
      </div>

      {/* ── Step progress line — sits on top of nav as 2px accent ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 200, pointerEvents: 'none' }}>
        <div style={{
          height: '100%', width: `${progressPct}%`,
          background: `linear-gradient(90deg, ${ambientColor}, var(--violet))`,
          transition: 'width .6s cubic-bezier(.16,1,.3,1), background 1s ease',
          borderRadius: '0 2px 2px 0',
          boxShadow: `0 0 12px ${ambientColor}80`,
        }} />
      </div>

      {/* ── Page shell ── */}
      <div style={{ paddingTop: 58, position: 'relative', zIndex: 1, marginTop: 42 }}>

        {/* ── Hero header — homepage DNA ── */}
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '44px 44px 0', textAlign: 'center' }}>
          {/* Eyebrow badges — same as homepage Hero */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 22, flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, letterSpacing: '.04em', background: 'rgba(233,180,70,.12)', color: 'var(--gold)', border: '1px solid rgba(233,180,70,.25)' }}>
              <span style={{ animation: 'pulse 2s ease-in-out infinite' }}>●</span>
              Maturiraj.hr · Plan učenja 2026
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 99, background: 'rgba(62,207,110,.08)', border: '1px solid rgba(62,207,110,.2)' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)' }}>{tjednaDoMature} {tjednaLabel} do mature</span>
            </div>
          </div>

          {/* Animated gradient H1 — same treatment as homepage */}
          <h1 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(40px,5.8vw,72px)', fontWeight: 900, lineHeight: .97, letterSpacing: '-.03em', marginBottom: 20 }}>
            {[
              { t: 'Personalizirani',  grad: 'linear-gradient(270deg,#4b7bff,#818cf8,#2dcfbe,#4b7bff)' },
              { t: 'plan mature.',     grad: 'linear-gradient(270deg,#7c5cfc,#c084fc,#f87171,#7c5cfc)' },
            ].map(({ t, grad }) => (
              <span key={t} style={{ display: 'block', background: grad, backgroundSize: '300% 300%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'hero-text-shift 4s ease-in-out infinite' }}>{t}</span>
            ))}
          </h1>

          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 460, margin: '0 auto 18px' }}>
            {selPredmeti.length === 0
              ? 'Odaberi predmete, postavi tempo i generiraj raspored prilagođen tebi — u 4 koraka.'
              : `${selPredmeti.length} predmet${selPredmeti.length === 1 ? '' : 'a'} · ${satiTjedno}h tjedno · ${tjednaDoMature} ${tjednaLabel}`}
          </p>

          {/* Trust strip — same as homepage */}
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            {['✓ Besplatno za početi', '✓ Personalizirani raspored', '✓ PRO adaptivni plan'].map(t => (
              <div key={t} style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="plan-shell">
          <StepIndicator currentStep={currentStep} />

          <div className="plan-main-grid">
            <div className="plan-content">
              <div ref={stepTopRef} style={{ scrollMarginTop: '72px' }} />
              <div ref={contentRef} style={{ willChange: 'opacity, transform' }}>

                {/* ════════ KORAK 1 — Predmeti ════════ */}
                {currentStep === 1 && (
                  <div style={stepCardStyle}>
                    <SectionTitle
                      step={1}
                      eyebrow="Korak 1 od 4"
                      title="Odaberi predmete"
                      text="Označi predmete koje polažeš na maturi. Sustav računa težinu svakog predmeta i prilagođava ritam."
                    />
                    <div className="plan-card-pad">

                    {/* Selection summary bar */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 16px', borderRadius: 16, marginBottom: 22,
                      background: selPredmeti.length > 0
                        ? `linear-gradient(135deg, ${ambientColor}14, rgba(255,255,255,.02))`
                        : 'rgba(255,255,255,.02)',
                      border: selPredmeti.length > 0
                        ? `1px solid ${ambientColor}30`
                        : '1px dashed rgba(255,255,255,.08)',
                      transition: 'all .4s ease',
                    }}>
                      <div style={{ fontSize: 13, color: selPredmeti.length > 0 ? 'var(--text)' : 'var(--muted)' }}>
                        {selPredmeti.length === 0
                          ? 'Klikni na predmete koje polažeš →'
                          : <span>
                              <strong style={{ fontFamily: 'var(--fh)', fontSize: 16 }}>{selPredmeti.length}</strong>
                              <span style={{ color: 'var(--muted)', fontSize: 12 }}> / {MAX_PREDMETA}</span>
                              {' '}{selPredmeti.length === 1 ? 'predmet odabran' : 'predmeta odabrano'}
                              {selPredmeti.length >= MAX_PREDMETA && (
                                <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: '#e9b446', background: 'rgba(233,180,70,.12)', border: '1px solid rgba(233,180,70,.3)', borderRadius: 999, padding: '2px 7px' }}>MAX</span>
                              )}
                            </span>
                        }
                      </div>
                      {selPredmeti.length > 0 && (
                        <div style={{ display: 'flex', gap: 4 }}>
                          {selectedSubjects.slice(0, 5).map(p => (
                            <div key={p.id} style={{
                              width: 28, height: 28, borderRadius: 8,
                              background: `${p.color}22`, border: `1px solid ${p.color}44`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, fontFamily: 'var(--fb)', color: p.color,
                            }}>{p.sym}</div>
                          ))}
                          {selectedSubjects.length > 5 && (
                            <div style={{
                              width: 24, height: 24, borderRadius: 8,
                              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 10, color: 'var(--muted)', fontWeight: 700,
                            }}>+{selectedSubjects.length - 5}</div>
                          )}
                        </div>
                      )}
                    </div>

                    <SubjectGrid
                      selPredmeti={selPredmeti}
                      onToggle={togglePred}
                      maxPredmeta={MAX_PREDMETA}
                    />
                    </div>
                  </div>
                )}

                {/* ════════ KORAK 2 — Tempo ════════ */}
                {currentStep === 2 && (
                  <div style={stepCardStyle}>
                    <SectionTitle
                      step={2}
                      eyebrow="Korak 2 od 4"
                      title="Koliko možeš učiti?"
                      text="Procijeni realni tjedni fond sati. Iskrena procjena daje bolji plan od previsokih ciljeva."
                    />
                    <div className="plan-card-pad">

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                      {HOURS_OPTIONS.map((opt) => {
                        const sel = satiTjedno === opt.val
                        return (
                          <button key={opt.val} onClick={() => setSatiTjedno(opt.val)}
                            style={{
                              width: '100%', padding: '14px 18px', borderRadius: 18,
                              fontFamily: 'var(--fb)', cursor: 'pointer',
                              transition: 'all .2s cubic-bezier(.16,1,.3,1)',
                              border: sel ? '1px solid rgba(75,123,255,.45)' : '1px solid rgba(255,255,255,.07)',
                              background: sel ? 'linear-gradient(135deg, rgba(75,123,255,.18), rgba(124,92,252,.12))' : 'rgba(255,255,255,.025)',
                              transform: sel ? 'translateX(4px)' : 'none',
                              boxShadow: sel ? '0 8px 28px rgba(75,123,255,.15)' : 'none',
                              display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
                            }}
                          >
                            <div style={{
                              width: 44, height: 44, borderRadius: 14, flexShrink: 0,
                              background: sel ? 'rgba(75,123,255,.15)' : 'rgba(255,255,255,.04)',
                              border: sel ? '1px solid rgba(75,123,255,.3)' : '1px solid rgba(255,255,255,.07)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, transition: 'all .2s',
                            }}>
                              {opt.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                                <span style={{ fontSize: 18, fontWeight: 900, fontFamily: 'var(--fh)', color: sel ? 'var(--blue)' : 'var(--text)' }}>{opt.label}</span>
                                <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: sel ? 'rgba(75,123,255,.8)' : 'var(--muted)' }}>{opt.tag}</span>
                              </div>
                              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{opt.desc}</div>
                            </div>
                            {sel && (
                              <div style={{
                                width: 20, height: 20, borderRadius: '50%', background: 'var(--blue)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 10, fontWeight: 900, color: '#fff', flexShrink: 0,
                              }}>✓</div>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {/* Stats + intensity */}
                    <div style={{ borderRadius: 22, overflow: 'hidden', border: '1px solid rgba(75,123,255,.16)' }}>
                      <div style={{
                        padding: '16px 20px',
                        background: 'linear-gradient(135deg, rgba(75,123,255,.12), rgba(124,92,252,.08))',
                        borderBottom: '1px solid rgba(75,123,255,.1)',
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
                      }}>
                        {[
                          { label: 'Sati / tjedan', val: `${satiTjedno}h`, color: 'var(--blue)' },
                          { label: 'Tjedana',        val: tjednaDoMature,   color: 'var(--violet)' },
                          { label: 'Ukupno sati',   val: `${ukupnoSati}h`, color: '#a78bfa' },
                        ].map((stat, i) => (
                          <div key={i} style={{
                            textAlign: 'center', padding: '4px 0',
                            borderRight: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none',
                          }}>
                            <div style={{ fontSize: 24, fontWeight: 900, fontFamily: 'var(--fh)', color: stat.color, lineHeight: 1, marginBottom: 5 }}>{stat.val}</div>
                            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', fontWeight: 700 }}>{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '14px 20px', background: 'rgba(255,255,255,.015)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>
                          <span>Intenzitet pripreme</span>
                          <span style={{ color: 'var(--blue)' }}>{Math.round((satiTjedno / 20) * 100)}%</span>
                        </div>
                        <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%', width: `${(satiTjedno / 20) * 100}%`,
                            background: 'linear-gradient(90deg, var(--blue), var(--violet))',
                            borderRadius: 99, transition: 'width .5s cubic-bezier(.16,1,.3,1)',
                            boxShadow: '0 0 10px rgba(75,123,255,.5)',
                          }} />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                )}

                {/* ════════ KORAK 3 — Preview ════════ */}
                {currentStep === 3 && (
                  <div style={stepCardStyle}>
                    <SectionTitle
                      step={3}
                      eyebrow="Korak 3 od 4"
                      title="Preview plana"
                      text="Prvih nekoliko tjedana tvoje pripreme. Raspored je generiran na osnovu odabranih predmeta i tempa."
                    />
                    <div className="plan-card-pad">

                    {previewPlan.length > 0 ? (
                      <>
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
                          padding: '10px 14px', borderRadius: 12,
                          background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.05)',
                          flexWrap: 'wrap',
                        }}>
                          <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em' }}>
                            Predmeti:
                          </span>
                          {selectedSubjects.map(p => (
                            <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, color: p.color }}>
                              <span>{p.sym}</span> {p.name}
                            </div>
                          ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {previewPlan.map((item, i) => (
                            <div key={`${item.tjedan}-${item.predmet}`}
                              style={{ animation: `up .4s cubic-bezier(.16,1,.3,1) ${i * 0.07}s both` }}>
                              <PreviewWeekCard item={item} />
                            </div>
                          ))}
                        </div>
                        <div style={{
                          marginTop: 16, padding: '12px 16px', borderRadius: 14,
                          background: 'rgba(75,123,255,.06)', border: '1px solid rgba(75,123,255,.12)',
                          fontSize: 12, color: 'var(--muted)', lineHeight: 1.6,
                        }}>
                          💡 Ovo je samo preview — pravi plan generiraš u sljedećem koraku.
                        </div>
                      </>
                    ) : (
                      <div style={{
                        borderRadius: 22, padding: '48px 24px',
                        border: '1px dashed rgba(255,255,255,.08)',
                        background: 'rgba(255,255,255,.012)', textAlign: 'center', color: 'var(--muted)',
                      }}>
                        <div style={{ fontSize: 36, marginBottom: 14 }}>📋</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>Nema predmeta za preview</div>
                        <div style={{ fontSize: 13, lineHeight: 1.65 }}>Vrati se na korak 1 i odaberi barem jedan predmet.</div>
                      </div>
                    )}
                    </div>
                  </div>
                )}

                {/* ════════ KORAK 4 — Plan ════════ */}
                {currentStep === 4 && (
                  <div style={stepCardStyle}>
                    <SectionTitle
                      step={4}
                      eyebrow="Korak 4 od 4"
                      title="Tvoj plan je spreman"
                      text={isPaid && !isPro ? "Usporedi Standard i PRO raspored. Odaberi koji ti više odgovara." : "Usporedi besplatni i PRO raspored. Odaberi koji ti više odgovara i spremi ga."}
                    />
                    <div className="plan-card-pad">

                    {/* Toggle */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', padding: '4px',
                      borderRadius: 18, background: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.08)', marginBottom: 20, gap: 2,
                    }}>
                      {[
                        { mode: 'free', label: `${standardEmoji} ${standardLabel}`, activeColor: '#ff6b2b' },
                        { mode: 'pro',  label: '✨ PRO adaptivni',    activeColor: '#9fb7ff' },
                      ].map(({ mode, label, activeColor }) => (
                        <button key={mode} onClick={() => setPlanMode(mode)} style={{
                          padding: '10px 20px', borderRadius: 14,
                          border: planMode === mode ? `1px solid ${activeColor}40` : '1px solid transparent',
                          fontFamily: 'var(--fb)', fontSize: 13, fontWeight: 800, cursor: 'pointer',
                          transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                          background: planMode === mode ? `linear-gradient(135deg, ${activeColor}22, ${activeColor}0e)` : 'transparent',
                          color: planMode === mode ? activeColor : 'var(--muted)',
                          boxShadow: planMode === mode ? `0 4px 16px ${activeColor}20` : 'none',
                        }}>{label}</button>
                      ))}
                    </div>

                    {/* Mode info banner */}
                    <div style={{
                      marginBottom: 20, padding: '14px 18px', borderRadius: 18,
                      background: planMode === 'pro'
                        ? 'linear-gradient(135deg, rgba(75,123,255,.1), rgba(124,92,252,.06))'
                        : 'linear-gradient(135deg, rgba(255,107,43,.09), rgba(255,107,43,.04))',
                      border: planMode === 'pro' ? '1px solid rgba(75,123,255,.18)' : '1px solid rgba(255,107,43,.16)',
                      display: 'flex', gap: 12, alignItems: 'flex-start', transition: 'all .3s ease',
                    }}>
                      <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{planMode === 'pro' ? '✨' : '⭐'}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4, color: planMode === 'pro' ? 'var(--blue)' : 'var(--orange)' }}>
                          {planMode === 'pro' ? 'PRO adaptivni raspored' : standardLabel}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.65 }}>
                          {planMode === 'pro'
                            ? 'Teži predmeti se pojavljuju češće. Ugrađene mini simulacije ispita i tjedne korekcije rasporeda na temelju napretka.'
                            : 'Stabilan, pregledan raspored bez adaptivnih prilagodbi. Savršen za strukturirani pristup pripremi.'}
                        </div>
                      </div>
                    </div>

                    {/* Plan cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                      {displayedPlan.map((item, i) => (
                        <div key={`${planMode}-${item.tjedan}-${item.predmet}-${item.tema}`}
                          style={{ animation: `up .3s cubic-bezier(.16,1,.3,1) ${i * 0.04}s both` }}>
                          <PreviewWeekCard item={item} pro={planMode === 'pro'} />
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 22 }}>
                      <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>
                        Odaberi plan
                      </div>
                      <div className="plan-result-cta-grid">

                        {/* Free CTA */}
                        <button
                          onClick={() => handleSavePlan('free')}
                          disabled={saving}
                          style={{
                            padding: '22px 20px', borderRadius: 22,
                            border: '1px solid rgba(255,107,43,.25)',
                            background: 'linear-gradient(160deg, rgba(255,107,43,.12), rgba(255,107,43,.04))',
                            cursor: saving ? 'not-allowed' : 'pointer',
                            fontFamily: 'var(--fb)', textAlign: 'left',
                            transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                            position: 'relative', overflow: 'hidden', opacity: saving ? 0.7 : 1,
                          }}
                          onMouseEnter={e => {
                            if (!saving) {
                              e.currentTarget.style.transform = 'translateY(-3px)'
                              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,107,43,.14)'
                              e.currentTarget.style.borderColor = 'rgba(255,107,43,.4)'
                            }
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'none'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.borderColor = 'rgba(255,107,43,.25)'
                          }}
                        >
                          <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,107,43,.08)', filter: 'blur(20px)', pointerEvents: 'none' }} />
                          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 10, opacity: 0.8 }}>{standardEyebrow}</div>
                          <div style={{ fontSize: 18, fontWeight: 900, fontFamily: 'var(--fh)', color: '#ff8c52', marginBottom: 8, lineHeight: 1.15 }}>
                            {saving ? 'Spremam...' : saveSuccess ? '✓ Plan spremljen!' : 'Koristi ovaj plan'}
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>
                            Stabilan raspored za sigurnu pripremu mature.
                          </div>
                          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--orange)' }}>
                            {user ? 'Spremi plan →' : 'Počni odmah →'}
                          </div>
                        </button>

                        {/* PRO CTA */}
                        <button
                          onClick={() => hasPro ? handleSavePlan('pro') : setShowProModal(true)}
                          disabled={saving}
                          style={{
                            padding: '22px 20px', borderRadius: 22,
                            border: hasPro ? 'none' : '1px solid rgba(75,123,255,.2)',
                            background: hasPro
                              ? 'linear-gradient(135deg, var(--blue), var(--violet))'
                              : 'linear-gradient(160deg, rgba(75,123,255,.12), rgba(124,92,252,.06))',
                            cursor: hasPro && !saving ? 'pointer' : 'not-allowed',
                            fontFamily: 'var(--fb)', textAlign: 'left',
                            position: 'relative', overflow: 'hidden',
                            transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                            opacity: saving ? 0.7 : 1,
                          }}
                          onMouseEnter={e => {
                            if (hasPro && !saving) {
                              e.currentTarget.style.transform = 'translateY(-3px)'
                              e.currentTarget.style.boxShadow = '0 20px 50px rgba(75,123,255,.22)'
                            }
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'none'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(75,123,255,.12)', filter: 'blur(20px)', pointerEvents: 'none' }} />
                          {!hasPro && (
                            <div style={{
                              position: 'absolute', top: 14, right: 14,
                              fontSize: 9, fontWeight: 900, padding: '4px 9px', borderRadius: 999,
                              background: 'rgba(75,123,255,.18)', border: '1px solid rgba(75,123,255,.32)',
                              color: 'var(--blue)', letterSpacing: '.08em',
                            }}>🔒 PRO</div>
                          )}
                          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: hasPro ? 'rgba(255,255,255,.7)' : 'var(--blue)', marginBottom: 10 }}>ADAPTIVNO</div>
                          <div style={{ fontSize: 18, fontWeight: 900, fontFamily: 'var(--fh)', color: hasPro ? '#fff' : '#9fb7ff', marginBottom: 8, lineHeight: 1.15 }}>
                            Otključaj PRO plan
                          </div>
                          <div style={{ fontSize: 12, color: hasPro ? 'rgba(255,255,255,.7)' : 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>
                            Adaptivni raspored prilagođen slabijim predmetima.
                          </div>
                          <div style={{ fontSize: 12, fontWeight: 800, color: hasPro ? '#fff' : 'var(--blue)' }}>
                            {hasPro ? (user ? 'Spremi PRO plan →' : 'Počni odmah →') : 'Saznaj što dobivaš →'}
                          </div>
                        </button>
                      </div>

                      {/* Save error */}
                      {saveError && (
                        <div style={{
                          marginTop: 12, padding: '10px 14px', borderRadius: 12,
                          background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)',
                          fontSize: 12, color: '#f87171', lineHeight: 1.5,
                        }}>
                          ⚠️ {saveError}
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ════════ Bottom navigation ════════ */}
              <div style={{
                marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 18px', borderRadius: 22,
                background: 'linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))',
                border: '1px solid rgba(255,255,255,.07)',
                backdropFilter: 'blur(12px)',
              }}>
                <button onClick={prevStepFn} disabled={currentStep === 1 || isAnimating} style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '10px 18px', borderRadius: 12,
                  border: '1px solid rgba(255,255,255,.07)',
                  background: currentStep === 1 ? 'rgba(255,255,255,.02)' : 'rgba(255,255,255,.05)',
                  color: currentStep === 1 ? 'rgba(255,255,255,.15)' : 'var(--muted)',
                  fontSize: 13, fontWeight: 700,
                  cursor: currentStep === 1 || isAnimating ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--fb)', transition: 'all .15s',
                }}>
                  ← Natrag
                </button>

                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} style={{
                      height: 6,
                      width: s === currentStep ? 22 : 6,
                      borderRadius: 3,
                      background: s === currentStep ? ambientColor : s < currentStep ? `${ambientColor}55` : 'rgba(255,255,255,.1)',
                      transition: 'all .35s cubic-bezier(.16,1,.3,1)',
                      boxShadow: s === currentStep ? `0 0 10px ${ambientColor}70` : 'none',
                    }} />
                  ))}
                </div>

                <button
                  onClick={currentStep === 4 ? () => handleSavePlan(planMode) : nextStep}
                  disabled={isAnimating || saving || (currentStep === 1 && !canGoStep2) || (currentStep === 2 && !canGoStep3) || (currentStep === 3 && !canGoStep4)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 22px', borderRadius: 12, border: 'none',
                    background: (currentStep === 1 && !canGoStep2)
                      ? 'rgba(255,255,255,.05)'
                      : currentStep === 4
                      ? saveSuccess
                        ? 'linear-gradient(135deg, var(--green), #1aad52)'
                        : `linear-gradient(135deg, ${ambientColor}, var(--violet))`
                      : `linear-gradient(135deg, ${ambientColor}, var(--violet))`,
                    color: (currentStep === 1 && !canGoStep2) ? 'rgba(255,255,255,.2)' : '#fff',
                    fontSize: 13, fontWeight: 800,
                    cursor: isAnimating || saving || (currentStep === 1 && !canGoStep2) ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--fb)', transition: 'all .2s cubic-bezier(.16,1,.3,1)',
                    boxShadow: (currentStep === 1 && !canGoStep2) ? 'none' : `0 6px 22px ${ambientColor}40`,
                  }}
                >
                  {currentStep === 4
                    ? saving
                      ? 'Spremam...'
                      : saveSuccess
                      ? '✓ Spremljeno!'
                      : '✓ Spremi plan'
                    : 'Dalje →'
                  }
                </button>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="plan-sidebar-wrap">
              <PlanSidebar
                cardStyle={cardStyle}
                hasPro={hasPro}
                selPredmeti={selPredmeti}
                satiTjedno={satiTjedno}
                ukupnoSati={ukupnoSati}
                selectedSubjects={selectedSubjects}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Save modal ── */}
      {showSaveModal && (
        <SavePlanModal
          planType={planMode}
          onSuccess={handleModalSuccess}
          onClose={() => setShowSaveModal(false)}
        />
      )}

      {/* ── PRO upsell modal ── */}
      {showProModal && (
        <ProUpsellModal
          onClose={() => setShowProModal(false)}
          currentPlanWeeks={displayedPlan.length}
          satiTjedno={satiTjedno}
        />
      )}

      {/* ── Celebration splash ── */}
      {showCelebration && (
        <CelebrationSplash
          planType={savedPlanType}
          selectedSubjects={selectedSubjects}
          satiTjedno={satiTjedno}
          tjednaDoMature={tjednaDoMature}
          totalWeeks={savedTotalWeeks}
          onContinue={() => router.push('/plan-ucenja/dashboard')}
        />
      )}

      {/* ── Mobile CSS fixes ── */}
      <style>{`
        @media (max-width: 640px) {
          /* Wizard step layout — stack umjesto side-by-side */
          .wizard-step-grid { grid-template-columns: 1fr !important; }
          /* Preview week cards — ne smiju prelaziti ekran */
          .preview-week-list { overflow-x: hidden !important; }
          /* Plan type cards — stack na mobilu */
          .plan-type-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}