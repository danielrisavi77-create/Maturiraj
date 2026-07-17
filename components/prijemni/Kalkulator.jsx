'use client'
import { useState, useEffect, useRef } from 'react'
import { usePragConfetti } from '@/lib/effects/usePragConfetti'
import { useCopy } from '@/lib/content/useCopy'

/**
 * Animated count-up hook.
 * Easing: cubic ease-out. Handles negative→positive transitions smoothly.
 */
function useCountUp(target, duration = 600) {
  const [val, setVal] = useState(0)
  const prevRef = useRef(0)

  useEffect(() => {
    const start = prevRef.current
    const diff = target - start
    const t0 = performance.now()
    let raf

    const step = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(start + diff * eased))
      if (p < 1) raf = requestAnimationFrame(step)
      else prevRef.current = target
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return val
}

export default function Kalkulator({ studij, fakColor, onResult }) {
  const k = studij.kalk
  const { c } = useCopy()
  const [prosjeci, setProsjeci] = useState({ r1: '', r2: '', r3: '', r4: '' })
  const [matura, setMatura] = useState({})
  const [posebno, setPosebno] = useState('')

  // Računanje bodova — k može biti null (audicija/psihomotorika bez formule).
  // Rani return je premješten NAKON svih hookova (rules-of-hooks), pa se ove
  // funkcije moraju čuvati od null-a jer se izvršavaju i kad formule nema.
  const ocjeneBod = () => {
    if (!k) return 0
    const vals = [prosjeci.r1, prosjeci.r2, prosjeci.r3, prosjeci.r4].map(v => parseFloat(v) || 0)
    return (vals.reduce((a, b) => a + b, 0) / 4 / 5) * k.ocjene_max
  }
  const maturaBod = () => (k?.polja || []).reduce((sum, p) => {
    const pct = parseFloat(matura[p.id]) || 0
    const bod = p.razina === 'B' ? (pct / 160) * p.max : (pct / 100) * p.max
    return sum + Math.min(bod, p.max)
  }, 0)
  const posebnoBod = () => k?.posebno ? ((parseFloat(posebno) || 0) / 100) * k.posebno.max : 0

  const ukupno = Math.round(ocjeneBod() + maturaBod() + posebnoBod())
  const animated = useCountUp(ukupno)

  const prag = studij.prag_2025
  const razlika = prag ? ukupno - prag : null
  const prikazano = prosjeci.r1 || prosjeci.r2 || prosjeci.r3 || prosjeci.r4 || Object.keys(matura).length > 0 || posebno

  // Confetti — one-shot per studij per session
  const { tryFire } = usePragConfetti(studij.id ?? null, fakColor || '#3ecf6e')
  useEffect(() => {
    if (ukupno > 0 && studij.prag_2025) {
      tryFire(ukupno, studij.prag_2025)
    }
  }, [ukupno, studij.prag_2025, tryFire])

  // Dojava rezultata roditelju kad se promijeni ukupan broj bodova.
  // Prije je išlo preko inline ref callbacka (ref={el => onResult?.(ukupno)}) koji React
  // detacha/reattacha na SVAKOM renderu → onResult (analytics track()) je pucao desetke
  // puta tijekom count-up animacije. Sada okida samo kad se `ukupno` stvarno promijeni
  // i kad je nešto uneseno. `onResult` je namjerno izostavljen iz deps (parent ga šalje
  // inline pa mijenja identitet svaki render — pratimo vrijednost, ne referencu).
  useEffect(() => {
    if (prikazano) onResult?.(ukupno)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ukupno, prikazano])

  // Rani return SADA nakon svih hookova (audicija/psihomotorika bez formule).
  if (!k) {
    return (
      <div style={{padding:'40px 24px',textAlign:'center',borderRadius:14,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
        <div style={{fontSize:40,marginBottom:14,opacity:.7}}>🧮</div>
        <div style={{fontSize:14,color:'var(--text)',fontWeight:600,marginBottom:8}}>Kalkulator nije dostupan</div>
        <div style={{fontSize:13,color:'var(--muted)',maxWidth:460,margin:'0 auto',lineHeight:1.65}}>
          {c('kalkulator.no_kalk', { STUDIJ: studij.naziv })}
        </div>
        <div style={{marginTop:20,padding:'14px 18px',borderRadius:11,background:'rgba(233,180,70,.06)',border:'1px solid rgba(233,180,70,.2)',fontSize:12.5,color:'var(--muted)',textAlign:'left',lineHeight:1.6}}>
          💡 <strong style={{color:'var(--gold)'}}>Što možeš?</strong> Vidi karticu &quot;Info&quot; za gradivo i proces prijave, te &quot;Datumi&quot; za rokove. Pratiti službenu stranicu fakulteta za točna pravila bodovanja.
        </div>
      </div>
    )
  }

  const isAbovePrag = razlika !== null && razlika >= 0

  // Gap analysis: što bi se dogodilo s malim boostom?
  const gapHints = (() => {
    if (!prikazano || razlika === null || razlika >= 0) return []
    const hints = []

    // Matematika/polje mature boost
    k.polja.forEach(p => {
      const curr = parseFloat(matura[p.id]) || 0
      if (curr < 90) {
        const delta = Math.min(15, 100 - curr)
        const newVal = curr + delta
        const gain = p.razina === 'B'
          ? ((newVal - curr) / 160) * p.max
          : ((newVal - curr) / 100) * p.max
        hints.push({ source: p.label, delta: `+${delta}%`, gain: Math.round(gain) })
      }
    })

    // Prosjek boost
    const currAvg = [prosjeci.r1, prosjeci.r2, prosjeci.r3, prosjeci.r4]
      .map(v => parseFloat(v) || 0)
      .reduce((a, b) => a + b, 0) / 4
    if (currAvg > 0 && currAvg < 4.8) {
      const newAvg = Math.min(5, currAvg + 0.3)
      const gain = ((newAvg - currAvg) / 5) * k.ocjene_max
      hints.push({ source: 'Prosjek ocjena', delta: `+0.3`, gain: Math.round(gain) })
    }

    return hints
      .filter(h => h.gain > 0)
      .sort((a, b) => b.gain - a.gain)
      .slice(0, 3)
  })()

  const inp = {
    width: '100%', padding: '10px 13px', borderRadius: 10, fontSize: 13,
    background: 'var(--s2)', border: '1px solid var(--bdr)', color: 'var(--text)',
    fontFamily: 'var(--fb)', outline: 'none', boxSizing: 'border-box', transition: 'border-color .15s'
  }
  const lbl = { fontSize: 12, color: 'var(--muted)', marginBottom: 6, display: 'block', fontWeight: 500 }
  const step = (n) => (
    <div style={{width:22,height:22,borderRadius:6,background:`${fakColor}14`,border:`1px solid ${fakColor}33`,display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:fakColor}}>{n}</div>
  )

  return (
    <div>
      {/* Step 1: Prosjeci */}
      <div style={{marginBottom:24}}>
        <div style={{fontSize:13,fontWeight:700,marginBottom:14,display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
          {step('1')} Prosjeci ocjena
          <span style={{fontSize:11,color:'var(--muted)',fontWeight:500}}>max {k.ocjene_max} bod.</span>
        </div>
        <div className="pr-kalk-r" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:10}}>
          {['r1','r2','r3','r4'].map((r,i) => (
            <div key={r}>
              <label style={lbl}>{i+1}. razred</label>
              <input type="number" min="1" max="5" step="0.01" placeholder="4.75"
                value={prosjeci[r]} onChange={e => setProsjeci(p => ({...p, [r]: e.target.value}))}
                onFocus={e => e.target.style.borderColor = fakColor + '66'}
                onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
                style={inp}/>
            </div>
          ))}
        </div>
        {(prosjeci.r1 || prosjeci.r2 || prosjeci.r3 || prosjeci.r4) && (
          <div style={{fontSize:12,color:'var(--muted)',marginTop:8}}>→ {Math.round(ocjeneBod())} od max {k.ocjene_max} bod.</div>
        )}
      </div>

      {/* Step 2: Matura */}
      <div style={{marginBottom:24}}>
        <div style={{fontSize:13,fontWeight:700,marginBottom:14,display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
          {step('2')} Rezultati mature (%)
        </div>
        <div className="pr-kalk-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {k.polja.map(p => (
            <div key={p.id}>
              <label style={lbl}>{p.label} <span style={{color:fakColor}}>max {p.max}</span></label>
              <input type="number" min="0" max="100" placeholder="75"
                value={matura[p.id] || ''} onChange={e => setMatura(m => ({...m, [p.id]: e.target.value}))}
                onFocus={e => e.target.style.borderColor = fakColor + '66'}
                onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
                style={inp}/>
              {matura[p.id] && (
                <div style={{fontSize:11,color:'var(--muted)',marginTop:4}}>
                  → {Math.round(p.razina === 'B'
                    ? (parseFloat(matura[p.id]) / 160) * p.max
                    : (parseFloat(matura[p.id]) / 100) * p.max)} bod.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 3: Posebno */}
      {k.posebno && (
        <div style={{marginBottom:24}}>
          <div style={{fontSize:13,fontWeight:700,marginBottom:10,display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
            {step('3')} {k.posebno.label}
            <span style={{fontSize:11,color:'var(--muted)',fontWeight:500}}>max {k.posebno.max} bod.</span>
          </div>
          <div style={{fontSize:12,color:'var(--muted)',marginBottom:10,lineHeight:1.6}}>{k.posebno.napomena}</div>
          <input type="number" min="0" max="100" placeholder="% riješenosti"
            value={posebno} onChange={e => setPosebno(e.target.value)}
            onFocus={e => e.target.style.borderColor = fakColor + '66'}
            onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
            style={{...inp, maxWidth: 260}}/>
        </div>
      )}

      {/* Rezultat */}
      {prikazano && (
        <div
          className="pr-krez"
          style={{
            background: razlika === null
              ? 'var(--s1)'
              : razlika >= 0
                ? 'linear-gradient(135deg,rgba(62,207,110,.10),rgba(62,207,110,.02))'
                : 'linear-gradient(135deg,rgba(248,113,113,.10),rgba(248,113,113,.02))',
            border: `1px solid ${razlika === null ? 'var(--bdr)' : razlika >= 0 ? 'rgba(62,207,110,.3)' : 'rgba(248,113,113,.3)'}`
          }}>
          <div className="pr-krez-grid">
            <div>
              <div style={{fontSize:11,color:'var(--muted)',marginBottom:6,letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>
                Tvoji procijenjeni bodovi
              </div>
              <div className="pr-krez-big" style={{color: razlika === null ? 'var(--text)' : razlika >= 0 ? '#3ecf6e' : '#f87171'}}>
                {animated}<span style={{fontSize:16,color:'var(--muted)',fontWeight:400}}>/1000</span>
              </div>
              {isAbovePrag && (
                <div style={{
                  display:'flex',alignItems:'center',gap:8,marginTop:8,padding:'6px 12px',borderRadius:99,
                  background:'rgba(62,207,110,.12)',border:'1px solid rgba(62,207,110,.25)',
                  width:'fit-content',
                  animation:'pr-up .4s cubic-bezier(.16,1,.3,1) both',
                }}>
                  <span style={{fontSize:16}}>🎉</span>
                  <span style={{fontSize:12.5,fontWeight:700,color:'#3ecf6e'}}>
                    {c('kalkulator.above_prag', { X: String(razlika) })}
                  </span>
                </div>
              )}
              {razlika !== null && (
                <div className="pr-krez-diff" style={{
                  background: razlika >= 0 ? 'rgba(62,207,110,.15)' : 'rgba(248,113,113,.15)',
                  color: razlika >= 0 ? '#3ecf6e' : '#f87171',
                  border: `1px solid ${razlika >= 0 ? 'rgba(62,207,110,.3)' : 'rgba(248,113,113,.3)'}`
                }}>
                  {razlika >= 0
                    ? c('kalkulator.above_prag', { X: String(razlika) })
                    : c('kalkulator.below_prag', { X: String(Math.abs(razlika)) })}
                </div>
              )}
            </div>
            {prag && (
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:11,color:'var(--muted)',marginBottom:6,letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>
                  Prag 2025.
                </div>
                <div style={{fontSize:30,fontWeight:800,fontFamily:'var(--fh)',color:'var(--muted)',letterSpacing:'-.02em'}}>
                  {prag}
                </div>
              </div>
            )}
          </div>

          {razlika !== null && (
            <div style={{marginTop:16,height:6,borderRadius:99,background:'rgba(255,255,255,.05)',overflow:'hidden'}}>
              <div style={{
                height: '100%',
                width: `${Math.min((ukupno/1000)*100, 100)}%`,
                borderRadius: 99,
                background: `linear-gradient(90deg, ${razlika >= 0 ? '#3ecf6e' : '#f87171'}, ${razlika >= 0 ? '#7cf5a8' : '#fca5a5'})`,
                transition: 'width .5s cubic-bezier(.16,1,.3,1)'
              }}/>
            </div>
          )}

          {/* Gap analysis — actionable hints ispod rezultata */}
          {gapHints.length > 0 && (
            <div style={{marginTop:20,paddingTop:18,borderTop:'1px solid rgba(255,255,255,.08)'}}>
              <div style={{fontSize:12,fontWeight:700,color:'var(--text)',marginBottom:12,display:'flex',alignItems:'center',gap:8}}>
                💡 <span>Kako možeš prijeći prag</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {gapHints.map((h, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderRadius:10,background:'rgba(255,255,255,.03)',border:'1px solid var(--bdr)'}}>
                    <div style={{width:24,height:24,borderRadius:6,background:'rgba(62,207,110,.15)',border:'1px solid rgba(62,207,110,.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#3ecf6e',flexShrink:0}}>
                      {i+1}
                    </div>
                    <div style={{flex:1,fontSize:13}}>
                      <strong style={{color:'var(--text)'}}>{h.source}</strong>
                      <span style={{color:'var(--muted)',marginLeft:6}}>{h.delta}</span>
                    </div>
                    <div style={{fontFamily:'var(--fh)',fontSize:16,fontWeight:800,color:'#3ecf6e'}}>
                      +{h.gain} bod.
                    </div>
                  </div>
                ))}
                {gapHints.reduce((s, h) => s + h.gain, 0) + ukupno >= prag && (
                  <div style={{marginTop:4,padding:'10px 14px',borderRadius:10,background:'rgba(62,207,110,.08)',border:'1px solid rgba(62,207,110,.25)',fontSize:12,color:'#3ecf6e',fontWeight:600,textAlign:'center'}}>
                    🎯 S ovim boost-ovima si iznad praga!
                  </div>
                )}
              </div>
              <button
                onClick={() => window.location.href = '/plan-ucenja?target=' + studij.id}
                style={{marginTop:14,width:'100%',padding:'11px',borderRadius:10,fontSize:13,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:`linear-gradient(135deg,${fakColor},${fakColor}dd)`,color:'#fff',border:'none',boxShadow:`0 4px 16px ${fakColor}33`}}>
                {c('kalkulator.gap_cta', { STUDIJ: studij.short || studij.naziv })}
              </button>
            </div>
          )}

          <div style={{marginTop:12,fontSize:11,color:'var(--muted)',opacity:.75,display:'flex',alignItems:'center',gap:6}}>
            <span>⚠</span>
            Procjena — bodovi mogu varirati ovisno o pravilima fakulteta za 2026.
          </div>
        </div>
      )}
    </div>
  )
}
