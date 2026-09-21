'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Chi-square test za 2 varijante (df=1)
// p < 0.05 → χ² > 3.84 | p < 0.01 → χ² > 6.63 | p < 0.001 → χ² > 10.83
function chiSquare(a_conv, a_total, b_conv, b_total) {
  if (a_total === 0 || b_total === 0) return null
  const total_conv = a_conv + b_conv
  const total = a_total + b_total
  if (total_conv === 0) return null
  const exp_a = (total_conv / total) * a_total
  const exp_b = (total_conv / total) * b_total
  if (exp_a === 0 || exp_b === 0) return null
  return Math.pow(a_conv - exp_a, 2) / exp_a +
         Math.pow(b_conv - exp_b, 2) / exp_b
}

function estimateNeededConversions(a_conv, a_total, b_conv, b_total) {
  const p_a = a_total > 0 ? a_conv / a_total : 0
  const p_b = b_total > 0 ? b_conv / b_total : 0
  const p_bar = (a_conv + b_conv) / Math.max(a_total + b_total, 1)
  const diff = Math.abs(p_a - p_b)
  if (diff < 0.001 || p_bar === 0 || p_bar === 1) return 100
  const n = Math.ceil(3.84 * 2 * p_bar * (1 - p_bar) / (diff * diff))
  return Math.min(Math.max(n, 30), 1000)
}

function significanceBadge(chi2, winnerVariant, a_conv, a_total, b_conv, b_total) {
  if (chi2 === null) {
    return { label: '🔄 Premalo podataka — čekaj na ~50 konverzija po varijanti', color: 'var(--muted)', bg: 'rgba(255,255,255,.04)', border: 'var(--bdr)' }
  }
  const needed = estimateNeededConversions(a_conv, a_total, b_conv, b_total)
  const w = winnerVariant.toUpperCase()
  if (chi2 >= 10.83) return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.001)`, color: '#3ecf6e', bg: 'rgba(62,207,110,.1)', border: 'rgba(62,207,110,.25)' }
  if (chi2 >= 6.63)  return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.01)`,  color: '#3ecf6e', bg: 'rgba(62,207,110,.08)', border: 'rgba(62,207,110,.2)' }
  if (chi2 >= 3.84)  return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.05)`,  color: '#e9b446', bg: 'rgba(233,180,70,.1)', border: 'rgba(233,180,70,.25)' }
  return { label: `🔄 Još nije dovoljno podataka — čekaj na ~${needed} konverzija po varijanti`, color: 'var(--muted)', bg: 'rgba(255,255,255,.04)', border: 'var(--bdr)' }
}

export default function ABDashboard() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(null)
  const [experiments, setExperiments] = useState([])
  const [selectedExp, setSelectedExp] = useState(null)
  const [conversions, setConversions] = useState([])
  const [loading, setLoading] = useState(false)
  const [previousExperiment, setPreviousExperiment] = useState(selectedExp)
  if (previousExperiment !== selectedExp) {
    setPreviousExperiment(selectedExp)
    setConversions([])
    setLoading(!!selectedExp)
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
      if (profile?.role !== 'admin') { setAuthorized(false); return }
      setAuthorized(true)

      const { data: exps } = await supabase
        .from('ab_experiments')
        .select(`*, assignments:ab_assignments(variant)`)
        .order('created_at', { ascending: false })
      setExperiments(exps || [])
    })()
  }, [router])

  useEffect(() => {
    if (!selectedExp) return
    let cancelled = false

    supabase
      .from('analytics_events')
      .select('meta, created_at')
      .eq('event_name', 'ab_conversion')
      .contains('meta', { experiment: selectedExp.id })
      .order('created_at', { ascending: false })
      .limit(500)
      .then(({ data }) => {
        if (cancelled) return
        setConversions(data || [])
        setLoading(false)
      })
    return () => { cancelled = true }
  }, [selectedExp])

  if (authorized === null) return <div style={{padding:40,color:'var(--muted)'}}>Provjera...</div>
  if (!authorized) return <div style={{padding:40,textAlign:'center'}}>🔒 Nemaš pristup.</div>

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)',padding:'28px 24px',color:'var(--text)',fontFamily:'var(--fb)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{marginBottom:24}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--muted)',marginBottom:6}}>Admin</div>
          <h1 style={{fontFamily:'var(--fh)',fontSize:28,fontWeight:800,letterSpacing:'-.02em'}}>
            A/B Experiments
          </h1>
          <p style={{fontSize:13,color:'var(--muted)',marginTop:6}}>Prati eksperimente i uzimaj podatke-based odluke.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'320px 1fr',gap:20}}>
          {/* Experiment list */}
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:4}}>
              Eksperimenti
            </div>
            {experiments.map(exp => {
              const totalAssigned = exp.assignments?.length || 0
              const byVariant = exp.variants.reduce((acc, v) => {
                acc[v] = (exp.assignments || []).filter(a => a.variant === v).length
                return acc
              }, {})

              return (
                <div key={exp.id}
                  onClick={() => setSelectedExp(exp)}
                  style={{
                    padding:'12px 14px',borderRadius:11,cursor:'pointer',
                    background:selectedExp?.id === exp.id ? 'rgba(75,123,255,.1)' : 'var(--s1)',
                    border:`1px solid ${selectedExp?.id === exp.id ? 'rgba(75,123,255,.3)' : 'var(--bdr)'}`,
                    transition:'all .15s',
                  }}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
                    <div style={{fontWeight:700,fontSize:13}}>{exp.name}</div>
                    <div style={{
                      fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:99,
                      background:exp.status==='active'?'rgba(62,207,110,.12)':'rgba(106,130,168,.12)',
                      color:exp.status==='active'?'#3ecf6e':'var(--muted)',
                      border:`1px solid ${exp.status==='active'?'rgba(62,207,110,.25)':'var(--bdr)'}`,
                      textTransform:'uppercase',letterSpacing:'.04em',
                    }}>{exp.status}</div>
                  </div>
                  <div style={{fontSize:11,color:'var(--muted)',marginBottom:6}}>{exp.id}</div>
                  <div style={{display:'flex',gap:6}}>
                    {exp.variants.map(v => (
                      <div key={v} style={{
                        display:'flex',alignItems:'center',gap:4,padding:'2px 8px',borderRadius:99,
                        background:'rgba(255,255,255,.04)',border:'1px solid var(--bdr)',
                        fontSize:11,color:'var(--muted)',
                      }}>
                        <strong style={{color:'var(--text)'}}>{v.toUpperCase()}</strong>
                        <span>{byVariant[v] || 0}</span>
                      </div>
                    ))}
                    <div style={{fontSize:11,color:'var(--muted)',marginLeft:'auto'}}>{totalAssigned} total</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Experiment details */}
          <div>
            {!selectedExp ? (
              <div style={{padding:60,textAlign:'center',color:'var(--muted)',borderRadius:14,border:'1px dashed var(--bdr)'}}>
                Odaberi eksperiment za detalje
              </div>
            ) : (
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                <div style={{padding:'20px 24px',borderRadius:16,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
                  <h2 style={{fontFamily:'var(--fh)',fontSize:20,fontWeight:700,marginBottom:4}}>{selectedExp.name}</h2>
                  <p style={{fontSize:12,color:'var(--muted)',lineHeight:1.55,marginBottom:14}}>{selectedExp.description}</p>

                  {/* Assignment split */}
                  <div style={{marginBottom:14}}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>
                      Assignment split
                    </div>
                    {selectedExp.variants.map((v, i) => {
                      const total = selectedExp.assignments?.length || 0
                      const count = (selectedExp.assignments || []).filter(a => a.variant === v).length
                      const pct = total > 0 ? Math.round((count / total) * 100) : 0
                      const targetPct = selectedExp.weights[i]
                      return (
                        <div key={v} style={{marginBottom:8}}>
                          <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,fontSize:12}}>
                            <span style={{fontWeight:700,color:'var(--text)'}}>{v.toUpperCase()}</span>
                            <span style={{color:'var(--muted)'}}>{count} ({pct}% actual | {targetPct}% target)</span>
                          </div>
                          <div style={{height:6,borderRadius:99,background:'rgba(255,255,255,.06)',overflow:'hidden'}}>
                            <div style={{height:'100%',width:`${pct}%`,borderRadius:99,background:'var(--blue)'}}/>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Actions */}
                  <div style={{display:'flex',gap:8}}>
                    {selectedExp.status === 'active' && (
                      <button onClick={async () => {
                        const winner = prompt(`Proglasi pobjednika (${selectedExp.variants.join('/')}):`)
                        if (!winner || !selectedExp.variants.includes(winner)) return
                        try {
                          const res = await fetch('/api/admin/ab/conclude', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ experimentId: selectedExp.id, winner }),
                          })
                          const data = await res.json()
                          if (!res.ok) {
                            alert(`Greška: ${data.error}`)
                            return
                          }
                          setExperiments(exps => exps.map(e =>
                            e.id === selectedExp.id ? { ...e, status: 'concluded', winner } : e
                          ))
                          setSelectedExp(exp =>
                            exp?.id === selectedExp.id ? { ...exp, status: 'concluded', winner } : exp
                          )
                          alert(`✅ ${data.note}`)
                        } catch (err) {
                          alert(`Greška: ${err.message}`)
                        }
                      }}
                        style={{padding:'8px 14px',borderRadius:9,fontSize:12,fontWeight:700,cursor:'pointer',background:'rgba(233,180,70,.12)',color:'var(--gold)',border:'1px solid rgba(233,180,70,.25)',fontFamily:'var(--fb)'}}>
                        🏆 Proglasi pobjednika
                      </button>
                    )}
                    {selectedExp.winner && (
                      <div style={{padding:'8px 14px',borderRadius:9,fontSize:12,fontWeight:700,background:'rgba(62,207,110,.12)',color:'#3ecf6e',border:'1px solid rgba(62,207,110,.25)'}}>
                        ✓ Pobjednik: {selectedExp.winner.toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Conversion analysis */}
                <div style={{padding:'20px 24px',borderRadius:16,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
                  <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)',marginBottom:14}}>
                    Conversions by variant
                  </div>
                  {loading ? (
                    <div style={{color:'var(--muted)',fontSize:12}}>Učitavam...</div>
                  ) : conversions.length === 0 ? (
                    <div style={{color:'var(--muted)',fontSize:12}}>Nema konverzija za ovaj eksperiment.</div>
                  ) : (
                    <>
                      {(() => {
                        const byVariant = {}
                        const byEvent = {}
                        conversions.forEach(c => {
                          const v = c.meta?.variant || '?'
                          const ev = c.meta?.conversion_event || '?'
                          byVariant[v] = (byVariant[v] || 0) + 1
                          byEvent[ev] = (byEvent[ev] || 0) + 1
                        })

                        // Statistical significance (only for 2-variant experiments)
                        const variants = selectedExp.variants
                        let sigBadge = null
                        if (variants.length === 2) {
                          const [v0, v1] = variants
                          const a_conv = byVariant[v0] || 0
                          const b_conv = byVariant[v1] || 0
                          const a_total = (selectedExp.assignments || []).filter(a => a.variant === v0).length
                          const b_total = (selectedExp.assignments || []).filter(a => a.variant === v1).length
                          const chi2 = chiSquare(a_conv, a_total, b_conv, b_total)
                          const a_rate = a_total > 0 ? a_conv / a_total : 0
                          const b_rate = b_total > 0 ? b_conv / b_total : 0
                          const winnerVariant = b_rate >= a_rate ? v1 : v0
                          sigBadge = significanceBadge(chi2, winnerVariant, a_conv, a_total, b_conv, b_total)
                        }

                        return (
                          <div>
                            {sigBadge && (
                              <div style={{
                                display:'inline-flex',alignItems:'center',gap:6,
                                padding:'6px 12px',borderRadius:99,marginBottom:14,
                                fontSize:12,fontWeight:700,
                                color:sigBadge.color,background:sigBadge.bg,border:`1px solid ${sigBadge.border}`,
                              }}>
                                <span style={{fontSize:14}}>📊</span> {sigBadge.label}
                              </div>
                            )}

                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10,marginBottom:14}}>
                              {Object.entries(byVariant).map(([v, count]) => {
                                const assigned = (selectedExp.assignments || []).filter(a => a.variant === v).length
                                const rate = assigned > 0 ? ((count / assigned) * 100).toFixed(1) : '—'
                                return (
                                  <div key={v} style={{padding:'14px 16px',borderRadius:11,background:'rgba(75,123,255,.06)',border:'1px solid rgba(75,123,255,.2)'}}>
                                    <div style={{fontSize:11,color:'var(--muted)',marginBottom:4,fontWeight:600,letterSpacing:'.05em',textTransform:'uppercase'}}>{v.toUpperCase()}</div>
                                    <div style={{fontFamily:'var(--fh)',fontSize:22,fontWeight:800,color:'var(--blue)'}}>{count}</div>
                                    <div style={{fontSize:11,color:'var(--muted)',marginTop:3}}>CVR: {rate}%</div>
                                  </div>
                                )
                              })}
                            </div>

                            <div>
                              <div style={{fontSize:11,color:'var(--muted)',marginBottom:8,fontWeight:600}}>Top konverzije:</div>
                              {Object.entries(byEvent).sort(([,a],[,b]) => b-a).slice(0,5).map(([ev, count]) => (
                                <div key={ev} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,.04)',fontSize:12}}>
                                  <span style={{color:'var(--muted)'}}>{ev}</span>
                                  <strong>{count}</strong>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })()}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
