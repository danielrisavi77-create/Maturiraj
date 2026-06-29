'use client'
import { useEffect, useState } from 'react'
import { useOnboarding } from '@/lib/prijemni/onboardingStore'
import { firePragConfetti } from '@/lib/effects/confetti'
import { useABVariant } from '@/lib/ab/useABVariant'
import {
  RAZRED_OPTIONS, INTERES_OPTIONS, PROSJEK_OPTIONS, CITY_OPTIONS,
  getNextActionRecommendation,
} from '@/lib/prijemni/personalize'

export default function OnboardingWizard({ onComplete, onAction, track, forceOpen: forceOpenProp = false, initialDraft = null, proStatus }) {
  const { shouldShow, complete, skip } = useOnboarding()
  const { getVariant, trackConversion } = useABVariant()
  const variant = getVariant('onboarding_length')  // 'a' | 'b', falls back to 'a' while loading
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState(
    initialDraft ?? {
      razred: null,
      interesi: [],
      prosjek_band: null,
      city_preference: null,
    }
  )

  // Force-open from parent (edit mode)
  useEffect(() => {
    if (forceOpenProp) {
      setStep(0)
      if (initialDraft) setDraft(initialDraft)
      setOpen(true)
    }
  }, [forceOpenProp]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (shouldShow) {
      // Pro users: auto-skip onboarding
      if (proStatus === 'allowed') {
        skip()
        return
      }
      // 600ms delay — daj user-u da vidi page prvo
      const t = setTimeout(() => {
        setOpen(true)
        track?.('onboarding_shown', null, null, null, { variant })
      }, 600)
      return () => clearTimeout(t)
    }
  }, [shouldShow, track, variant])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  if (!open) return null

  // Variant A: full 4-step flow | Variant B: short 2-step flow
  const STEPS = variant === 'b'
    ? ['Razred', 'Interesi']
    : ['Razred', 'Interesi', 'Profil', 'Sljedeći korak']

  const isStepValid = (() => {
    if (step === 0) return draft.razred !== null
    if (step === 1) return draft.interesi.length > 0
    if (step === 2) return draft.prosjek_band !== null && draft.city_preference !== null
    return true
  })()

  const toggleInteres = (key) => {
    setDraft(d => ({
      ...d,
      interesi: d.interesi.includes(key)
        ? d.interesi.filter(x => x !== key)
        : [...d.interesi, key],
    }))
  }

  const handleSkip = () => {
    skip()
    setOpen(false)
    track?.('onboarding_skipped', null, null, null, { step, variant })
  }

  const handleComplete = () => {
    complete(draft)
    setOpen(false)
    track?.('onboarding_completed', null, null, null, { ...draft, variant })
    trackConversion('onboarding_length', 'onboarding_completed')
    // Confetti reward — fires once on first onboarding complete
    setTimeout(() => firePragConfetti('#4b7bff'), 200)
    onComplete?.(draft)
  }

  // Recommendation only in variant a (step 3)
  const recommendation = (variant === 'a' && step === 3)
    ? getNextActionRecommendation({ ...draft, completed_at: 'temp', skipped: false })
    : null

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes ow-fade{from{opacity:0}to{opacity:1}}
        @keyframes ow-up{from{opacity:0;transform:translateY(20px) scale(.97)}to{opacity:1;transform:none}}
        @keyframes ow-step-in{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}
        .ow-back{
          position:fixed;inset:0;z-index:200;background:rgba(7,9,15,.78);
          backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
          display:flex;align-items:center;justify-content:center;padding:20px;
          animation:ow-fade .25s ease
        }
        .ow-sheet{
          background:linear-gradient(160deg,#101628 0%,#0a0e1c 100%);
          border:1px solid rgba(75,123,255,.22);border-radius:24px;
          max-width:560px;width:100%;max-height:92vh;display:flex;flex-direction:column;
          animation:ow-up .32s cubic-bezier(.16,1,.3,1);
          box-shadow:0 40px 120px rgba(0,0,0,.6);
          position:relative;overflow:hidden
        }
        .ow-glow{
          position:absolute;top:-100px;right:-60px;width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(75,123,255,.18),transparent 70%);
          filter:blur(50px);pointer-events:none
        }
        .ow-head{padding:26px 30px 18px;position:relative;flex-shrink:0;z-index:1}
        .ow-progress-track{
          height:3px;border-radius:99px;background:rgba(255,255,255,.06);overflow:hidden;margin-bottom:16px
        }
        .ow-progress-fill{
          height:100%;background:linear-gradient(90deg,var(--blue),var(--violet));
          border-radius:99px;transition:width .35s cubic-bezier(.16,1,.3,1)
        }
        .ow-step-label{
          font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:var(--muted);margin-bottom:6px
        }
        .ow-title{
          font-family:var(--fh);font-size:22px;font-weight:800;letter-spacing:-.02em;
          line-height:1.2;margin-bottom:6px
        }
        .ow-sub{font-size:13px;color:var(--muted);line-height:1.55}
        .ow-skip{
          position:absolute;top:18px;right:18px;
          padding:6px 11px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;
          background:rgba(255,255,255,.04);color:var(--muted);border:1px solid var(--bdr);font-family:var(--fb)
        }
        .ow-skip:hover{background:rgba(255,255,255,.08);color:var(--text)}
        .ow-body{padding:18px 30px 8px;overflow-y:auto;flex:1;position:relative;z-index:1}
        .ow-body > div{animation:ow-step-in .28s cubic-bezier(.16,1,.3,1)}
        .ow-grid{display:grid;gap:9px;margin-bottom:14px}
        .ow-grid-2{grid-template-columns:1fr 1fr}
        .ow-grid-auto{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}
        .ow-card{
          padding:14px 16px;border-radius:12px;cursor:pointer;
          background:rgba(255,255,255,.03);border:1px solid var(--bdr);transition:all .15s;
          display:flex;align-items:center;gap:10px;
          font-size:13px;color:var(--text);font-weight:500;font-family:var(--fb);text-align:left
        }
        .ow-card:hover{background:rgba(255,255,255,.06);border-color:var(--bdr-hi)}
        .ow-card.on{
          background:linear-gradient(135deg,rgba(75,123,255,.12),rgba(124,92,252,.08));
          border-color:rgba(75,123,255,.4);color:var(--text)
        }
        .ow-card.on::before{
          content:'✓';position:absolute;width:18px;height:18px;border-radius:6px;
          background:var(--blue);color:#fff;font-size:10px;font-weight:700;
          display:flex;align-items:center;justify-content:center;
          right:10px;top:50%;transform:translateY(-50%)
        }
        .ow-card-rel{position:relative;padding-right:36px}
        .ow-emoji{font-size:18px;flex-shrink:0;width:24px;text-align:center}
        .ow-card-content{flex:1;min-width:0}
        .ow-card-label{font-size:13px;font-weight:600;color:var(--text);letter-spacing:-.005em}
        .ow-card-hint{font-size:11px;color:var(--muted);margin-top:2px}
        .ow-foot{
          padding:16px 30px 22px;border-top:1px solid var(--bdr);
          display:flex;justify-content:space-between;gap:10px;flex-shrink:0;position:relative;z-index:1
        }
        .ow-btn{
          padding:11px 22px;border-radius:11px;font-size:14px;font-weight:700;cursor:pointer;
          border:none;font-family:var(--fb);transition:all .15s
        }
        .ow-btn-p{background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;box-shadow:0 4px 18px rgba(75,123,255,.3)}
        .ow-btn-p:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(75,123,255,.45)}
        .ow-btn-p:disabled{opacity:.5;cursor:not-allowed;transform:none;box-shadow:none}
        .ow-btn-s{background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--bdr)}
        .ow-btn-s:hover{background:rgba(255,255,255,.1)}
        .ow-section-label{
          font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
          color:var(--muted);margin-bottom:8px;margin-top:14px
        }
        .ow-section-label:first-child{margin-top:0}
        .ow-rec{
          padding:18px 20px;border-radius:14px;margin-bottom:14px;
          background:linear-gradient(135deg,rgba(75,123,255,.1),rgba(124,92,252,.05));
          border:1px solid rgba(75,123,255,.3);display:flex;align-items:center;gap:14px
        }
        .ow-rec-ic{
          width:44px;height:44px;border-radius:12px;flex-shrink:0;
          background:linear-gradient(135deg,var(--blue),var(--violet));
          display:flex;align-items:center;justify-content:center;font-size:22px;
          box-shadow:0 4px 14px rgba(75,123,255,.3)
        }
        .ow-rec-body{flex:1}
        .ow-rec-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);margin-bottom:3px}
        .ow-rec-title{font-size:15px;font-weight:800;color:var(--text);margin-bottom:3px;font-family:var(--fh);letter-spacing:-.01em}
        .ow-rec-hint{font-size:12px;color:var(--muted);line-height:1.5}
        @media(max-width:520px){
          .ow-back{padding:0;align-items:flex-end}
          .ow-sheet{max-height:100vh;border-radius:24px 24px 0 0;margin-top:auto}
          .ow-head{padding:22px 22px 14px}
          .ow-body{padding:14px 22px 8px}
          .ow-foot{padding:14px 22px 20px}
          .ow-grid-2{grid-template-columns:1fr 1fr}
        }
      `}}/>

      <div className="ow-back">
        <div className="ow-sheet">
          <div className="ow-glow"/>
          <div className="ow-head">
            <div className="ow-progress-track">
              <div className="ow-progress-fill" style={{width: `${((step + 1) / STEPS.length) * 100}%`}}/>
            </div>
            <div className="ow-step-label">{step + 1} / {STEPS.length} • {STEPS[step]}</div>
            <div className="ow-title">
              {step === 0 && 'Bok 👋 U kojem si razredu?'}
              {step === 1 && 'Što te zanima?'}
              {step === 2 && variant === 'a' && 'Mali kontekst za personalizaciju'}
              {step === 3 && variant === 'a' && 'Spremno — kreni odavde'}
            </div>
            <div className="ow-sub">
              {step === 0 && 'Personaliziramo prikaz fakulteta za tvoju situaciju.'}
              {step === 1 && variant === 'b' && 'Označi interese — odmah ćemo prilagoditi prikaz.'}
              {step === 1 && variant === 'a' && 'Označi sve što te makar malo zanima — možeš mijenjati kasnije.'}
              {step === 2 && variant === 'a' && 'Bez ovoga preporuka neće biti precizna.'}
              {step === 3 && variant === 'a' && 'Bazirano na tvojim odgovorima, evo što ti najviše pomaže odmah.'}
            </div>
            <button className="ow-skip" onClick={handleSkip}>Preskoči</button>
          </div>

          <div className="ow-body">
            {/* STEP 0 — Razred */}
            {step === 0 && (
              <div>
                <div className="ow-grid ow-grid-2">
                  {RAZRED_OPTIONS.map(opt => (
                    <button key={opt.value}
                      className={`ow-card${draft.razred === opt.value ? ' on ow-card-rel' : ''}`}
                      onClick={() => setDraft(d => ({ ...d, razred: opt.value }))}>
                      <span style={{flex:1}}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1 — Interesi (multi-select) */}
            {step === 1 && (
              <div>
                <div className="ow-grid ow-grid-auto">
                  {INTERES_OPTIONS.map(opt => (
                    <button key={opt.key}
                      className={`ow-card${draft.interesi.includes(opt.key) ? ' on ow-card-rel' : ''}`}
                      onClick={() => toggleInteres(opt.key)}>
                      <span className="ow-emoji">{opt.emoji}</span>
                      <span style={{flex:1,fontSize:12.5}}>{opt.label}</span>
                    </button>
                  ))}
                </div>
                {draft.interesi.length > 0 && (
                  <div style={{fontSize:11,color:'var(--muted)',textAlign:'center',marginTop:8}}>
                    Označeno: <strong style={{color:'var(--blue)'}}>{draft.interesi.length}</strong>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2 — Profil (prosjek + city) */}
            {step === 2 && (
              <div>
                <div className="ow-section-label">Tvoj prosjek ocjena</div>
                <div className="ow-grid ow-grid-2">
                  {PROSJEK_OPTIONS.map(opt => (
                    <button key={opt.value}
                      className={`ow-card${draft.prosjek_band === opt.value ? ' on ow-card-rel' : ''}`}
                      onClick={() => setDraft(d => ({ ...d, prosjek_band: opt.value }))}>
                      <div className="ow-card-content">
                        <div className="ow-card-label">{opt.label}</div>
                        <div className="ow-card-hint">{opt.hint}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="ow-section-label">Grad studiranja</div>
                <div className="ow-grid ow-grid-auto">
                  {CITY_OPTIONS.map(opt => (
                    <button key={opt.value}
                      className={`ow-card${draft.city_preference === opt.value ? ' on ow-card-rel' : ''}`}
                      onClick={() => setDraft(d => ({ ...d, city_preference: opt.value }))}>
                      <span className="ow-emoji">{opt.emoji}</span>
                      <span style={{flex:1,fontSize:12.5}}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 — Recommendation */}
            {step === 3 && recommendation && (
              <div>
                <div className="ow-rec">
                  <div className="ow-rec-ic">
                    {recommendation.action === 'matcher' && '🎯'}
                    {recommendation.action === 'compare' && '⚖️'}
                    {recommendation.action === 'browse' && '🔍'}
                  </div>
                  <div className="ow-rec-body">
                    <div className="ow-rec-label">Preporučujemo</div>
                    <div className="ow-rec-title">{recommendation.label}</div>
                    <div className="ow-rec-hint">{recommendation.hint}</div>
                  </div>
                </div>
                <div style={{
                  padding:'12px 14px',borderRadius:11,background:'rgba(255,255,255,.03)',
                  border:'1px solid var(--bdr)',fontSize:12,color:'var(--muted)',lineHeight:1.55,
                }}>
                  💡 Lista fakulteta će biti personalizirana po tvojim interesima i gradu. Možeš uvijek otključati sve preko filtera na vrhu.
                </div>
              </div>
            )}
          </div>

          <div className="ow-foot">
            <button className="ow-btn ow-btn-s" onClick={() => step === 0 ? handleSkip() : setStep(step - 1)}>
              {step === 0 ? 'Preskoči' : '← Natrag'}
            </button>
            <button className="ow-btn ow-btn-p"
              disabled={!isStepValid}
              onClick={() => {
                if (step < STEPS.length - 1) {
                  setStep(step + 1)
                  track?.('onboarding_step', null, null, null, { step: step + 1, variant })
                } else {
                  handleComplete()
                  if (variant === 'a' && recommendation && onAction) {
                    setTimeout(() => onAction(recommendation.action), 250)
                  } else if (variant === 'b' && onAction) {
                    setTimeout(() => onAction('browse'), 250)
                  }
                }
              }}>
              {step < STEPS.length - 1 ? 'Dalje →'
                : variant === 'b' ? 'Pokaži mi fakultete →'
                : `Idi na ${recommendation?.label || 'start'} →`}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
