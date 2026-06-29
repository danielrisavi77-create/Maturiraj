'use client'
import { useMemo, useEffect, useState, useRef } from 'react'
import { getUserScores } from '@/lib/prijemni/scores'
import { matchStudij, hasMinimumScores } from '@/lib/prijemni/matcher'
import { daysUntil, formatDays, pragZona } from './helpers'
import CompareSetsDrawer from './CompareSetsDrawer'
import CompareInsight from './CompareInsight'
import { Sk } from '@/components/ui/Skeleton'

const STATUS_CONFIG = {
  safe:         { label: 'Siguran',  ico: '✅', color: '#3ecf6e' },
  borderline:   { label: 'Granica',  ico: '⚠️', color: '#fb923c' },
  risky:        { label: 'Ispod',    ico: '🚫', color: '#f87171' },
  no_data:      { label: 'Bez match-a', ico: '—', color: 'var(--muted)' },
  incomputable: { label: 'Audicija/test', ico: '🎭', color: 'var(--muted)' },
}

export default function CompareView({ open, onClose, studiji, onRemove, onShare, track, isPro = false, onLoadSet }) {
  const [userScores, setUserScores] = useState(null)
  const [scoresLoaded, setScoresLoaded] = useState(false)
  const [setsOpen, setSetsOpen] = useState(false)

  // Stable ref to the latest studiji objects so memos can depend on
  // the ID-key string instead of the unstable array reference.
  const studijRef = useRef(studiji)
  studijRef.current = studiji
  const studijIdsKey = studiji.map(s => s.id).join(',')

  useEffect(() => {
    if (!open) return
    getUserScores()
      .then(sc => setUserScores(sc && hasMinimumScores(sc) ? sc : null))
      .finally(() => setScoresLoaded(true))
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matches = useMemo(() => {
    if (!userScores) return {}
    const m = {}
    studijRef.current.forEach(s => { m[s.id] = matchStudij(s, userScores) })
    return m
  }, [studijIdsKey, userScores])

  // Union predmeta preko svih studija — za overlap highlight
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allPredmeti = useMemo(() => {
    const set = new Set()
    studijRef.current.forEach(s => s.predmeti?.forEach(p => set.add(p)))
    return Array.from(set)
  }, [studijIdsKey])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allGradivo = useMemo(() => {
    const set = new Set()
    studijRef.current.forEach(s => s.gradivo?.forEach(g => set.add(g)))
    return Array.from(set)
  }, [studijIdsKey])

  if (!open) return null

  const n = studiji.length

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: COMPARE_CSS}}/>

      <div className="cv-backdrop" onClick={onClose}>
        <div className="cv-sheet" style={{'--n': n}} onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="cv-head">
            <div>
              <div className="cv-eye">
                <span className="cv-eye-dot"/>
                Usporedba
              </div>
              <h2 className="cv-title">
                {n} {n === 1 ? 'studij' : n < 5 ? 'studija' : 'studija'} jedan pored drugog
              </h2>
            </div>
            <div className="cv-head-actions">
              {isPro && (
                <button className="cv-btn cv-btn-s" onClick={() => setSetsOpen(true)} title="Spremi ili učitaj usporedbu">
                  🗄️ Spremi
                </button>
              )}
              <button className="cv-btn cv-btn-s" onClick={() => { onShare?.(); track?.('compare_share', null, null, null, { count: n }) }}>
                📤 Podijeli
              </button>
              <button className="cv-btn cv-btn-close" onClick={onClose} aria-label="Zatvori">✕</button>
            </div>
          </div>

          {/* Body scrolling */}
          <div className="cv-body" style={{'--n': n}}>

            {/* AI insight — Pro feature */}
            <CompareInsight
              open={open}
              studiji={studiji}
              userScores={userScores}
              scoresLoaded={scoresLoaded}
              isPro={isPro}
            />

            {/* Column headers — studij identity */}
            <div className="cv-cols">
              <div className="cv-label-col">
                <div style={{fontSize:10,fontWeight:700,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginTop:32}}>
                  Kategorija
                </div>
              </div>
              {studiji.map(s => (
                <div key={s.id} className="cv-col-head" style={{'--fak-color': s.color}}>
                  <button className="cv-col-remove" onClick={() => onRemove(s.id)} aria-label="Ukloni">✕</button>
                  <div className="cv-col-glyph" style={{background: s.glyph_bg}}>{s.sym}</div>
                  <div className="cv-col-fak" style={{color: s.color}}>{s.fak_short}</div>
                  <div className="cv-col-name">{s.naziv}</div>
                </div>
              ))}
            </div>

            {/* Row: User match */}
            {!scoresLoaded ? (
              <CompareSection title="Tvoj match">
                <div className="cv-row">
                  <div className="cv-label"><Sk h={12} w="60%"/></div>
                  {studiji.map(s => (
                    <div key={s.id} className="cv-cell">
                      <Sk variant="pill" w={90} h={28}/>
                    </div>
                  ))}
                </div>
                <div className="cv-row">
                  <div className="cv-label"><Sk h={12} w="45%"/></div>
                  {studiji.map(s => (
                    <div key={s.id} className="cv-cell">
                      <Sk h={22} w={60}/>
                    </div>
                  ))}
                </div>
              </CompareSection>
            ) : scoresLoaded && userScores && (
              <CompareSection title="Tvoj match">
                <div className="cv-row">
                  <div className="cv-label">Status</div>
                  {studiji.map(s => {
                    const m = matches[s.id]
                    const cfg = STATUS_CONFIG[m?.status || 'no_data']
                    return (
                      <div key={s.id} className="cv-cell">
                        <div style={{
                          padding:'8px 12px',borderRadius:10,display:'inline-flex',alignItems:'center',gap:6,
                          background:`${cfg.color}18`,color:cfg.color,border:`1px solid ${cfg.color}33`,fontSize:12,fontWeight:700
                        }}>
                          <span>{cfg.ico}</span>{cfg.label}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="cv-row">
                  <div className="cv-label">Tvoji bodovi</div>
                  {studiji.map(s => {
                    const m = matches[s.id]
                    return (
                      <div key={s.id} className="cv-cell">
                        {m?.bodovi != null
                          ? <span className="cv-big" style={{color: m.razlika >= 0 ? '#3ecf6e' : '#f87171'}}>
                              {m.bodovi}<span style={{fontSize:11,color:'var(--muted)',fontWeight:500,marginLeft:2}}>/1000</span>
                            </span>
                          : <span style={{color:'var(--muted)',fontSize:12}}>—</span>}
                      </div>
                    )
                  })}
                </div>
                <div className="cv-row">
                  <div className="cv-label">Razlika od praga</div>
                  {studiji.map(s => {
                    const m = matches[s.id]
                    return (
                      <div key={s.id} className="cv-cell">
                        {m?.razlika != null ? (
                          <span style={{
                            padding:'3px 9px',borderRadius:99,fontSize:11.5,fontWeight:700,
                            background: m.razlika >= 0 ? 'rgba(62,207,110,.14)' : 'rgba(248,113,113,.14)',
                            color: m.razlika >= 0 ? '#3ecf6e' : '#f87171',
                            border: `1px solid ${m.razlika >= 0 ? 'rgba(62,207,110,.3)' : 'rgba(248,113,113,.3)'}`
                          }}>
                            {m.razlika >= 0 ? '+' : ''}{m.razlika} bod.
                          </span>
                        ) : <span style={{color:'var(--muted)',fontSize:12}}>—</span>}
                      </div>
                    )
                  })}
                </div>
              </CompareSection>
            )}

            {/* Row: Core metrics */}
            <CompareSection title="Bodovi i mjesta">
              <div className="cv-row">
                <div className="cv-label">Prag 2025.</div>
                {studiji.map(s => {
                  const pragColor = pragZona(s.prag_2025)
                  return (
                    <div key={s.id} className="cv-cell">
                      {s.prag_2025
                        ? <span className="cv-big" style={{color: pragColor}}>{s.prag_2025}<span style={{fontSize:11,color:'var(--muted)',fontWeight:500}}>/1000</span></span>
                        : <span style={{color:'var(--muted)',fontSize:12}}>—</span>}
                    </div>
                  )
                })}
              </div>
              <div className="cv-row">
                <div className="cv-label">Trend od 2024.</div>
                {studiji.map(s => {
                  const diff = (s.prag_2025 && s.prag_2024) ? s.prag_2025 - s.prag_2024 : null
                  if (diff === null) return <div key={s.id} className="cv-cell"><span style={{color:'var(--muted)',fontSize:12}}>—</span></div>
                  const color = diff > 0 ? '#f87171' : diff < 0 ? '#3ecf6e' : 'var(--muted)'
                  return (
                    <div key={s.id} className="cv-cell">
                      <span style={{color, fontSize:13, fontWeight:600}}>
                        {diff === 0 ? '= 0' : diff > 0 ? `↑ +${diff}` : `↓ ${diff}`}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="cv-row">
                <div className="cv-label">Upisnih mjesta</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    {s.upisnih_mjesta
                      ? <span className="cv-big">{s.upisnih_mjesta}</span>
                      : <span style={{color:'var(--muted)',fontSize:12}}>—</span>}
                  </div>
                ))}
              </div>
              <div className="cv-row">
                <div className="cv-label">Popularnost</div>
                {studiji.map(s => {
                  const p = s.popularnost
                  const barColor = p >= 80 ? '#fb923c' : p >= 50 ? 'var(--blue)' : 'var(--muted)'
                  return (
                    <div key={s.id} className="cv-cell">
                      <div style={{display:'flex',alignItems:'center',gap:8,minWidth:90}}>
                        <div style={{flex:1,height:6,borderRadius:99,background:'rgba(255,255,255,.06)',overflow:'hidden',minWidth:40}}>
                          <div style={{height:'100%',width:`${p}%`,borderRadius:99,background:barColor}}/>
                        </div>
                        <span style={{fontSize:11.5,fontWeight:700,color:barColor}}>{p}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CompareSection>

            {/* Row: Datumi */}
            <CompareSection title="Datumi">
              <div className="cv-row">
                <div className="cv-label">Do ispita</div>
                {studiji.map(s => {
                  const d = daysUntil(s.ispit_iso)
                  const urgent = d !== null && d <= 30
                  return (
                    <div key={s.id} className="cv-cell">
                      {d !== null ? (
                        <span style={{color: urgent ? '#fb923c' : 'var(--text)', fontWeight:700, fontSize:14}}>
                          {urgent && '🔥 '}{formatDays(d)}
                        </span>
                      ) : <span style={{color:'var(--muted)',fontSize:12}}>—</span>}
                    </div>
                  )
                })}
              </div>
              <div className="cv-row">
                <div className="cv-label">Prijava do</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    <span style={{fontSize:13,color:'var(--text)'}}>{s.prijava_do || '—'}</span>
                  </div>
                ))}
              </div>
              <div className="cv-row">
                <div className="cv-label">Cijena prijave</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    <span style={{fontSize:13,color:'var(--text)'}}>{s.cijena || '—'}</span>
                  </div>
                ))}
              </div>
            </CompareSection>

            {/* Row: Tip upisa */}
            <CompareSection title="Tip upisa">
              <div className="cv-row">
                <div className="cv-label">Kategorija</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    <span style={{
                      padding:'4px 10px',borderRadius:99,fontSize:11,fontWeight:700,letterSpacing:'.04em',
                      background:`${s.color}18`,color:s.color,border:`1px solid ${s.color}33`
                    }}>
                      {s.tip_upisa_label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="cv-row">
                <div className="cv-label">Ima kalkulator</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    <span style={{fontSize:13,color: s.kalk ? '#3ecf6e' : 'var(--muted)'}}>
                      {s.kalk ? '✓ Da' : '✗ Ne'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="cv-row">
                <div className="cv-label">Trajanje</div>
                {studiji.map(s => (
                  <div key={s.id} className="cv-cell">
                    <span style={{fontSize:13}}>{s.trajanje_god ? `${s.trajanje_god} god.` : '—'}</span>
                  </div>
                ))}
              </div>
            </CompareSection>

            {/* Row: Predmeti (venn) */}
            <CompareSection title="Predmeti ispita">
              {allPredmeti.map(predmet => {
                const overlap = studiji.filter(s => s.predmeti?.includes(predmet)).length
                const isCommon = overlap === studiji.length
                return (
                  <div key={predmet} className="cv-row">
                    <div className="cv-label" style={{color: isCommon ? '#3ecf6e' : 'var(--muted)', fontWeight: isCommon ? 700 : 500}}>
                      {isCommon && '⭐ '}{predmet}
                    </div>
                    {studiji.map(s => {
                      const has = s.predmeti?.includes(predmet)
                      return (
                        <div key={s.id} className="cv-cell">
                          {has
                            ? <span style={{
                                display:'inline-flex',alignItems:'center',gap:5,padding:'3px 9px',borderRadius:99,
                                fontSize:11,fontWeight:700,background:`${s.color}18`,color:s.color,border:`1px solid ${s.color}33`
                              }}>✓</span>
                            : <span style={{color:'rgba(255,255,255,.15)',fontSize:14}}>—</span>}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
              {allPredmeti.some(p => studiji.filter(s => s.predmeti?.includes(p)).length === studiji.length) && (
                <div style={{fontSize:11,color:'var(--muted)',paddingTop:8,fontStyle:'italic'}}>
                  ⭐ = zajednički predmet na svim studijima
                </div>
              )}
            </CompareSection>

            {/* Row: Gradivo overlap */}
            <CompareSection title="Gradivo" collapsibleDefault>
              {allGradivo.map(grad => {
                const overlap = studiji.filter(s => s.gradivo?.includes(grad)).length
                const isCommon = overlap === studiji.length
                return (
                  <div key={grad} className="cv-row">
                    <div className="cv-label" style={{color: isCommon ? '#3ecf6e' : 'var(--muted)', fontWeight: isCommon ? 700 : 500, fontSize:12}}>
                      {isCommon && '⭐ '}{grad}
                    </div>
                    {studiji.map(s => (
                      <div key={s.id} className="cv-cell">
                        {s.gradivo?.includes(grad)
                          ? <span style={{color:s.color,fontSize:13,fontWeight:700}}>✓</span>
                          : <span style={{color:'rgba(255,255,255,.1)',fontSize:13}}>—</span>}
                      </div>
                    ))}
                  </div>
                )
              })}
            </CompareSection>

            {/* Akcija — link na detail */}
            <div className="cv-cta-row">
              <div className="cv-label"/>
              {studiji.map(s => (
                <div key={s.id} className="cv-cell">
                  <button className="cv-btn cv-btn-detail" style={{'--fak-color': s.color}}
                    onClick={() => {
                      track?.('compare_to_detail', s.fakultet_id, s.id)
                      onClose()
                      window.dispatchEvent(new CustomEvent('prijemni:navigate', { detail: { fakultetId: s.fakultet_id, studijId: s.id } }))
                    }}>
                    Detalji →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CompareSetsDrawer
        open={setsOpen}
        onClose={() => setSetsOpen(false)}
        currentIds={studiji.map(s => s.id)}
        isPro={isPro}
        onLoad={ids => { onLoadSet?.(ids); setSetsOpen(false) }}
        track={track}
      />
    </>
  )
}

function CompareSection({ title, children, collapsibleDefault = false }) {
  const [collapsed, setCollapsed] = useState(collapsibleDefault)
  return (
    <div className="cv-section">
      <div className="cv-section-head" onClick={() => setCollapsed(c => !c)}>
        <span>{title}</span>
        <span style={{fontSize:11,color:'var(--muted)',transform:collapsed?'rotate(-90deg)':'none',transition:'transform .2s'}}>▾</span>
      </div>
      {!collapsed && <div className="cv-section-body">{children}</div>}
    </div>
  )
}

const COMPARE_CSS = `
  @keyframes cv-in{from{opacity:0}to{opacity:1}}
  @keyframes cv-up{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}

  .cv-backdrop{
    position:fixed;inset:0;z-index:200;background:rgba(7,9,15,.78);
    backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    display:flex;align-items:center;justify-content:center;padding:20px;
    animation:cv-in .25s ease
  }
  .cv-sheet{
    width:100%;max-width:1180px;max-height:92vh;display:flex;flex-direction:column;
    background:linear-gradient(165deg,#0e1425 0%,#0a0f1e 100%);
    border:1px solid rgba(75,123,255,.2);border-radius:24px;
    box-shadow:0 40px 120px rgba(0,0,0,.6);
    animation:cv-up .3s cubic-bezier(.16,1,.3,1);overflow:hidden
  }

  .cv-head{
    display:flex;align-items:center;justify-content:space-between;gap:14px;
    padding:20px 28px;border-bottom:1px solid var(--bdr);flex-shrink:0
  }
  .cv-eye{
    display:inline-flex;align-items:center;gap:7px;font-size:10px;font-weight:700;
    letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px
  }
  .cv-eye-dot{
    width:6px;height:6px;border-radius:50%;background:var(--blue);
    box-shadow:0 0 8px var(--blue);animation:pr-pulse 2s infinite
  }
  .cv-title{font-family:var(--fh);font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.2}
  .cv-head-actions{display:flex;gap:8px;align-items:center;flex-shrink:0}

  .cv-btn{
    padding:9px 15px;border-radius:11px;font-size:13px;font-weight:700;cursor:pointer;
    font-family:var(--fb);border:none;transition:all .15s;white-space:nowrap
  }
  .cv-btn-s{background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--bdr)}
  .cv-btn-s:hover{background:rgba(255,255,255,.1)}
  .cv-btn-close{width:36px;height:36px;padding:0;background:rgba(255,255,255,.05);color:var(--muted);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;font-size:14px}
  .cv-btn-close:hover{background:rgba(255,255,255,.1);color:var(--text)}
  .cv-btn-detail{
    background:linear-gradient(135deg,var(--fak-color,var(--blue)),rgba(124,92,252,.8));
    color:#fff;padding:7px 13px;font-size:12px;
    box-shadow:0 4px 14px rgba(75,123,255,.25)
  }
  .cv-btn-detail:hover{transform:translateY(-1px)}

  .cv-body{
    flex:1;overflow-y:auto;padding:24px 28px;
    scrollbar-width:thin;scrollbar-color:var(--bdr) transparent
  }
  .cv-body::-webkit-scrollbar{width:6px}
  .cv-body::-webkit-scrollbar-thumb{background:var(--bdr);border-radius:99px}

  /* Grid layout — 1fr za label, repeat za studije */
  .cv-cols,.cv-row,.cv-cta-row{
    display:grid;grid-template-columns:180px repeat(var(--n,2),minmax(0,1fr));
    gap:12px;padding:10px 0
  }
  .cv-label-col{grid-column:1}
  .cv-col-head{
    padding:14px 14px 12px;border-radius:14px;
    background:linear-gradient(160deg,rgba(255,255,255,.035),rgba(255,255,255,.01));
    border:1px solid var(--bdr);position:relative;text-align:center;
    display:flex;flex-direction:column;align-items:center;gap:6px
  }
  .cv-col-head::before{
    content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:14px 14px 0 0;
    background:linear-gradient(90deg,var(--fak-color,var(--blue)),transparent)
  }
  .cv-col-remove{
    position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:7px;
    background:rgba(255,255,255,.04);border:1px solid var(--bdr);color:var(--muted);
    display:flex;align-items:center;justify-content:center;font-size:11px;cursor:pointer;
    transition:all .15s
  }
  .cv-col-remove:hover{background:#f8717122;border-color:#f8717133;color:#f87171}
  .cv-col-glyph{
    width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;
    font-size:20px;margin-bottom:4px
  }
  .cv-col-fak{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
  .cv-col-name{font-size:13px;font-weight:700;color:var(--text);line-height:1.3;letter-spacing:-.01em}

  .cv-section{margin-top:18px;border-top:1px solid var(--bdr);padding-top:18px}
  .cv-section:first-child{border-top:none;padding-top:0}
  .cv-section-head{
    display:flex;justify-content:space-between;align-items:center;cursor:pointer;
    padding:6px 0;margin-bottom:4px;user-select:none
  }
  .cv-section-head span:first-child{
    font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)
  }
  .cv-section-body{display:flex;flex-direction:column}

  .cv-row{align-items:center}
  .cv-label{
    font-size:12.5px;color:var(--muted);font-weight:500;padding:8px 0;
    border-top:1px dashed rgba(255,255,255,.04)
  }
  .cv-row:first-child .cv-label{border-top:none}
  .cv-cell{
    padding:8px 0;border-top:1px dashed rgba(255,255,255,.04);
    display:flex;align-items:center;min-height:32px
  }
  .cv-row:first-child .cv-cell{border-top:none}
  .cv-big{font-family:var(--fh);font-size:18px;font-weight:800;letter-spacing:-.015em}

  .cv-cta-row{margin-top:20px;padding-top:16px;border-top:1px solid var(--bdr)}
  .cv-cta-row .cv-cell{border:none;padding:0}

  /* Mobile — stack horizontally scrollable */
  @media(max-width:720px){
    .cv-sheet{max-height:100vh;border-radius:0;border:none}
    .cv-backdrop{padding:0}
    .cv-head{padding:16px 18px}
    .cv-title{font-size:17px}
    .cv-body{padding:18px 18px;overflow-x:auto}
    /* Enable horizontal scroll for 3+ columns on mobile */
    .cv-cols,.cv-row,.cv-cta-row{
      grid-template-columns:130px repeat(var(--n,2),minmax(150px,200px));
      min-width:max-content
    }
    .cv-label-col,.cv-label{font-size:11px}
    .cv-col-glyph{width:32px;height:32px;font-size:16px}
    .cv-col-name{font-size:11.5px}
    .cv-big{font-size:16px}
  }
`
