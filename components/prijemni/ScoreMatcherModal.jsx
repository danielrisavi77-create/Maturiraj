'use client'
import { useState, useEffect } from 'react'
import { saveUserScores } from '@/lib/prijemni/scores'

const IZBORNI_LIST = [
  { key: 'bio', label: 'Biologija' },
  { key: 'kem', label: 'Kemija' },
  { key: 'fiz', label: 'Fizika' },
  { key: 'pov', label: 'Povijest' },
  { key: 'geo', label: 'Geografija' },
  { key: 'psi', label: 'Psihologija' },
  { key: 'soc', label: 'Sociologija' },
  { key: 'fil', label: 'Filozofija' },
  { key: 'lat', label: 'Latinski' },
  { key: 'lik', label: 'Likovna' },
  { key: 'glz', label: 'Glazbena' },
]

function StepDot({ active, done }) {
  return (
    <div style={{
      width: 8, height: 8, borderRadius: '50%',
      background: done ? '#3ecf6e' : active ? 'var(--blue)' : 'rgba(255,255,255,.15)',
      transition: 'background .2s'
    }}/>
  )
}

export default function ScoreMatcherModal({ open, onClose, initialScores, onSaved, track }) {
  const [step, setStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [scores, setScores] = useState({
    prosjek_r1: '', prosjek_r2: '', prosjek_r3: '', prosjek_r4: '',
    mat_a_pct: '', mat_b_pct: '',
    hrv_a_pct: '', hrv_b_pct: '',
    eng_a_pct: '', eng_b_pct: '',
    izborni: {},
    posebne_provjere: {},
  })

  // Load initial scores ako već postoje
  useEffect(() => {
    if (initialScores) {
      setScores({
        prosjek_r1: initialScores.prosjek_r1 ?? '',
        prosjek_r2: initialScores.prosjek_r2 ?? '',
        prosjek_r3: initialScores.prosjek_r3 ?? '',
        prosjek_r4: initialScores.prosjek_r4 ?? '',
        mat_a_pct: initialScores.mat_a_pct ?? '',
        mat_b_pct: initialScores.mat_b_pct ?? '',
        hrv_a_pct: initialScores.hrv_a_pct ?? '',
        hrv_b_pct: initialScores.hrv_b_pct ?? '',
        eng_a_pct: initialScores.eng_a_pct ?? '',
        eng_b_pct: initialScores.eng_b_pct ?? '',
        izborni: initialScores.izborni || {},
        posebne_provjere: initialScores.posebne_provjere || {},
      })
    }
  }, [initialScores, open])

  // Lock body scroll kada je modal otvoren
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  if (!open) return null

  const STEPS = ['Prosjeci', 'Obavezni', 'Izborni', 'Pregled']

  const parseNum = (v) => v === '' || v == null ? null : Number(v)

  const handleSave = async () => {
    setSaving(true)
    const payload = {
      prosjek_r1: parseNum(scores.prosjek_r1),
      prosjek_r2: parseNum(scores.prosjek_r2),
      prosjek_r3: parseNum(scores.prosjek_r3),
      prosjek_r4: parseNum(scores.prosjek_r4),
      mat_a_pct: parseNum(scores.mat_a_pct),
      mat_b_pct: parseNum(scores.mat_b_pct),
      hrv_a_pct: parseNum(scores.hrv_a_pct),
      hrv_b_pct: parseNum(scores.hrv_b_pct),
      eng_a_pct: parseNum(scores.eng_a_pct),
      eng_b_pct: parseNum(scores.eng_b_pct),
      izborni: scores.izborni,
      posebne_provjere: scores.posebne_provjere,
    }
    const saved = await saveUserScores(payload)
    setSaving(false)
    if (saved) {
      track?.('matcher_saved', null, null, null, {
        step_count: 4,
        izborni_count: Object.keys(scores.izborni).filter(k => scores.izborni[k]).length
      })
      onSaved(saved)
      onClose()
    }
  }

  const inp = {
    width: '100%', padding: '10px 13px', borderRadius: 10, fontSize: 14,
    background: 'var(--s2)', border: '1px solid var(--bdr)', color: 'var(--text)',
    fontFamily: 'var(--fb)', outline: 'none', boxSizing: 'border-box', transition: 'border-color .15s'
  }
  const lbl = { fontSize: 12, color: 'var(--muted)', marginBottom: 6, display: 'block', fontWeight: 500 }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sm-in{from{opacity:0}to{opacity:1}}
        @keyframes sm-up{from{opacity:0;transform:translateY(20px) scale(.98)}to{opacity:1;transform:none}}
        .sm-backdrop{position:fixed;inset:0;background:rgba(7,9,15,.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:200;animation:sm-in .2s ease;display:flex;align-items:center;justify-content:center;padding:20px}
        .sm-modal{background:linear-gradient(160deg,#101628,#0a0e1c);border:1px solid rgba(75,123,255,.2);border-radius:22px;max-width:560px;width:100%;max-height:90vh;display:flex;flex-direction:column;animation:sm-up .3s cubic-bezier(.16,1,.3,1);box-shadow:0 40px 120px rgba(0,0,0,.6)}
        .sm-head{padding:24px 26px 18px;border-bottom:1px solid var(--bdr);position:relative;flex-shrink:0}
        .sm-body{padding:24px 26px;overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:var(--bdr) transparent}
        .sm-body::-webkit-scrollbar{width:4px}
        .sm-body::-webkit-scrollbar-thumb{background:var(--bdr);border-radius:99px}
        .sm-foot{padding:16px 26px 22px;border-top:1px solid var(--bdr);display:flex;justify-content:space-between;gap:10px;flex-shrink:0}
        .sm-dots{display:flex;gap:6px;align-items:center;margin-bottom:12px}
        .sm-close{position:absolute;top:18px;right:18px;width:32px;height:32px;border-radius:9px;background:rgba(255,255,255,.05);border:1px solid var(--bdr);color:var(--muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s}
        .sm-close:hover{background:rgba(255,255,255,.1);color:var(--text)}
        .sm-title{font-family:var(--fh);font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.2;margin-bottom:6px}
        .sm-sub{font-size:13px;color:var(--muted);line-height:1.55}
        .sm-btn{padding:11px 22px;border-radius:11px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--fb);border:none;transition:all .15s}
        .sm-btn-p{background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;box-shadow:0 4px 18px rgba(75,123,255,.3)}
        .sm-btn-p:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(75,123,255,.45)}
        .sm-btn-p:disabled{opacity:.6;cursor:not-allowed;transform:none}
        .sm-btn-s{background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--bdr)}
        .sm-btn-s:hover{background:rgba(255,255,255,.1)}
        .sm-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        @media(max-width:540px){.sm-grid{grid-template-columns:1fr 1fr}.sm-grid-4{grid-template-columns:1fr 1fr !important}.sm-modal{max-height:100vh;border-radius:22px 22px 0 0;margin-top:auto}.sm-backdrop{padding:0;align-items:flex-end}}
      `}}/>

      <div className="sm-backdrop" onClick={onClose}>
        <div className="sm-modal" onClick={e => e.stopPropagation()}>
          <div className="sm-head">
            <div className="sm-dots">
              {STEPS.map((_, i) => (
                <StepDot key={i} active={i === step} done={i < step}/>
              ))}
              <span style={{fontSize:11,color:'var(--muted)',marginLeft:8,fontWeight:600,letterSpacing:'.04em',textTransform:'uppercase'}}>
                {step + 1} / {STEPS.length} &bull; {STEPS[step]}
              </span>
            </div>
            <div className="sm-title">
              {step === 0 && 'Unesi svoje prosjeke ocjena'}
              {step === 1 && 'Rezultati s mature'}
              {step === 2 && 'Izborni predmeti'}
              {step === 3 && 'Spremno za match'}
            </div>
            <div className="sm-sub">
              {step === 0 && 'Prosjeci iz srednje škole. Ne mora biti točno — procjene su u redu.'}
              {step === 1 && 'Postoci riješenosti matematike, hrvatskog i stranog jezika. Preskoči ako ne znaš.'}
              {step === 2 && 'Samo one koje planiraš polagati ili si već polagao/la.'}
              {step === 3 && 'Kad spremiš, svaki fakultet dobija oznaku: siguran upis (zeleno), granica (žuto) ili riskantno (crveno).'}
            </div>
            <button className="sm-close" onClick={onClose}>&#x2715;</button>
          </div>

          <div className="sm-body">
            {/* STEP 0 — Prosjeci */}
            {step === 0 && (
              <div>
                <div className="sm-grid sm-grid-4" style={{gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                  {[1,2,3,4].map(i => (
                    <div key={i}>
                      <label style={lbl}>{i}. razred</label>
                      <input type="number" min="1" max="5" step="0.01" placeholder="4.75"
                        value={scores[`prosjek_r${i}`]}
                        onChange={e => setScores(s => ({...s, [`prosjek_r${i}`]: e.target.value}))}
                        style={inp}/>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:16,padding:'12px 14px',borderRadius:11,background:'rgba(75,123,255,.06)',border:'1px solid rgba(75,123,255,.18)',fontSize:12,color:'var(--muted)',lineHeight:1.55}}>
                  💡 <strong style={{color:'var(--blue)'}}>Savjet:</strong> Prosjek se često nalazi na svjedodžbi. Ako si u 4. razredu i još nemaš finalni prosjek, upiši trenutnu procjenu.
                </div>
              </div>
            )}

            {/* STEP 1 — Obavezni predmeti */}
            {step === 1 && (
              <div>
                <div style={{fontSize:12,fontWeight:700,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>Matematika</div>
                <div className="sm-grid" style={{marginBottom:20}}>
                  <div>
                    <label style={lbl}>Razina A (%)</label>
                    <input type="number" min="0" max="100" placeholder="75"
                      value={scores.mat_a_pct} onChange={e => setScores(s => ({...s, mat_a_pct: e.target.value}))}
                      style={inp}/>
                  </div>
                  <div>
                    <label style={lbl}>Razina B (%)</label>
                    <input type="number" min="0" max="160" placeholder="110"
                      value={scores.mat_b_pct} onChange={e => setScores(s => ({...s, mat_b_pct: e.target.value}))}
                      style={inp}/>
                    <div style={{fontSize:10,color:'var(--muted)',marginTop:3,opacity:.7}}>B se boduje do 160%</div>
                  </div>
                </div>

                <div style={{fontSize:12,fontWeight:700,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>Hrvatski</div>
                <div className="sm-grid" style={{marginBottom:20}}>
                  <div>
                    <label style={lbl}>Razina A (%)</label>
                    <input type="number" min="0" max="100" placeholder="75"
                      value={scores.hrv_a_pct} onChange={e => setScores(s => ({...s, hrv_a_pct: e.target.value}))}
                      style={inp}/>
                  </div>
                  <div>
                    <label style={lbl}>Razina B (%)</label>
                    <input type="number" min="0" max="160" placeholder="110"
                      value={scores.hrv_b_pct} onChange={e => setScores(s => ({...s, hrv_b_pct: e.target.value}))}
                      style={inp}/>
                  </div>
                </div>

                <div style={{fontSize:12,fontWeight:700,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>Strani jezik</div>
                <div className="sm-grid">
                  <div>
                    <label style={lbl}>Razina A (%)</label>
                    <input type="number" min="0" max="100" placeholder="75"
                      value={scores.eng_a_pct} onChange={e => setScores(s => ({...s, eng_a_pct: e.target.value}))}
                      style={inp}/>
                  </div>
                  <div>
                    <label style={lbl}>Razina B (%)</label>
                    <input type="number" min="0" max="160" placeholder="110"
                      value={scores.eng_b_pct} onChange={e => setScores(s => ({...s, eng_b_pct: e.target.value}))}
                      style={inp}/>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 — Izborni */}
            {step === 2 && (
              <div>
                <div style={{fontSize:12,color:'var(--muted)',marginBottom:16,lineHeight:1.55}}>
                  Unesi postotak riješenosti za predmete koje planiraš polagati. Preskoči ostatak — neće utjecati na match.
                </div>
                <div className="sm-grid">
                  {IZBORNI_LIST.map(iz => (
                    <div key={iz.key}>
                      <label style={lbl}>{iz.label} (%)</label>
                      <input type="number" min="0" max="100" placeholder="—"
                        value={scores.izborni[iz.key] ?? ''}
                        onChange={e => setScores(s => ({...s, izborni: {...s.izborni, [iz.key]: e.target.value === '' ? null : Number(e.target.value)}}))}
                        style={inp}/>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 — Pregled */}
            {step === 3 && (
              <div>
                <div style={{padding:'18px 20px',borderRadius:14,background:'linear-gradient(135deg,rgba(62,207,110,.08),rgba(75,123,255,.05))',border:'1px solid rgba(62,207,110,.25)',marginBottom:18}}>
                  <div style={{fontSize:14,fontWeight:700,color:'#3ecf6e',marginBottom:4}}>&#x2713; Spremno</div>
                  <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.6}}>
                    Nakon spremanja, svaki studij u listi dobit će oznaku tvog match-a. Možeš filtrirati po statusu (siguran / granica / riskantno) i vidjeti koje studije možeš upisati.
                  </div>
                </div>

                <div style={{fontSize:12,fontWeight:700,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:10}}>Tvoji unosi</div>

                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  <PreviewRow label="Prosjeci" value={[1,2,3,4].map(i => scores[`prosjek_r${i}`]).filter(Boolean).join(' \u2022 ') || '—'}/>
                  <PreviewRow label="Matematika A" value={scores.mat_a_pct ? `${scores.mat_a_pct}%` : '—'}/>
                  <PreviewRow label="Matematika B" value={scores.mat_b_pct ? `${scores.mat_b_pct}%` : '—'}/>
                  <PreviewRow label="Hrvatski A" value={scores.hrv_a_pct ? `${scores.hrv_a_pct}%` : '—'}/>
                  <PreviewRow label="Strani A" value={scores.eng_a_pct ? `${scores.eng_a_pct}%` : '—'}/>
                  <PreviewRow label="Izborni" value={
                    Object.entries(scores.izborni)
                      .filter(([, v]) => v != null && v > 0)
                      .map(([k, v]) => `${IZBORNI_LIST.find(iz => iz.key === k)?.label || k}: ${v}%`)
                      .join(' \u2022 ') || '—'
                  }/>
                </div>

                <div style={{marginTop:16,padding:'12px 14px',borderRadius:11,background:'rgba(255,255,255,.03)',border:'1px solid var(--bdr)',fontSize:12,color:'var(--muted)',lineHeight:1.55}}>
                  🔒 Bodovi se spremaju samo za tebe. Bit će ti dostupni kad god se vratiš. Možeš ih uvijek promijeniti.
                </div>
              </div>
            )}
          </div>

          <div className="sm-foot">
            <button className="sm-btn sm-btn-s" onClick={() => step === 0 ? onClose() : setStep(step - 1)}>
              {step === 0 ? 'Odustani' : '\u2190 Natrag'}
            </button>
            <button className="sm-btn sm-btn-p"
              disabled={saving}
              onClick={() => {
                if (step < STEPS.length - 1) setStep(step + 1)
                else handleSave()
              }}>
              {saving ? 'Spremam...' : step < STEPS.length - 1 ? 'Dalje \u2192' : '🎯 Prikaži match'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function PreviewRow({ label, value }) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 12px',borderRadius:9,background:'rgba(255,255,255,.03)',border:'1px solid var(--bdr)'}}>
      <span style={{fontSize:12,color:'var(--muted)'}}>{label}</span>
      <span style={{fontSize:12.5,color:'var(--text)',fontWeight:500,textAlign:'right',maxWidth:'60%',wordBreak:'break-word'}}>{value}</span>
    </div>
  )
}
