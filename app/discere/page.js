'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import { DISCERE_SUBJECTS, getDiscereGroups } from '@/lib/discere/subject-registry'

// Subject list is driven by lib/discere/subject-registry.js (the canonical
// registry ported from feat/all-subjects), which already encodes the four
// existing hardcoded-active subjects (hrv/mat/eng/soc — capabilities.practice.status
// === 'legacy_available') at their exact pre-existing routes, alongside every
// canonical-runtime subject (bio/fiz/kem/pov/geo/etc.) gated by its own
// capabilities.practice.status ('qa' | 'soon' | 'published'). This replaces
// the previously hand-maintained PREDMETI_REG/etaMap/predmetRoutes arrays
// while keeping the same visual design.
export default function Discere() {
  usePageTracking('discere')
  const [activePredmet, setActivePredmet] = useState(null)
  const router = useRouter()
  const groups = getDiscereGroups()

  return (
    <div style={{minHeight:"100vh", background:"var(--bg)", color:"var(--text)", fontFamily:"var(--fb)"}}>
      {/* Ambient orbs */}
      <div style={{position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden"}}>
        <div style={{position:"absolute", width:500, height:500, borderRadius:"50%", top:"-5%", left:"-8%", background:"radial-gradient(circle,rgba(233,180,70,.08),transparent 65%)", animation:"orb-a 18s ease-in-out infinite"}}/>
        <div style={{position:"absolute", width:440, height:440, borderRadius:"50%", bottom:"-5%", right:"-5%", background:"radial-gradient(circle,rgba(75,123,255,.07),transparent 65%)", animation:"orb-b 22s ease-in-out infinite"}}/>
      </div>

      <div style={{position:"relative", zIndex:1}}>
        <div style={{maxWidth:1080, margin:"0 auto", padding:"40px 44px 80px"}}>
            <div style={{marginBottom:40}}>
              <div className="sec-label" style={{marginBottom:10}}>Arhiva maturalnih zadataka</div>
              <h1 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,48px)", fontWeight:700, lineHeight:1.08, letterSpacing:"-.025em", marginBottom:8}}>Koji predmet danas?</h1>
              <p style={{color:"var(--muted)", fontSize:14, lineHeight:1.7, maxWidth:520}}>
                Odaberi predmet i vježbaj s pravim zadacima s državnih matura. Svi zadaci su raspoređeni po godinama, razinama i temama.
              </p>
            </div>

            {groups.map(grp => {
              const predmeti = DISCERE_SUBJECTS.filter(subject => subject.group === grp)
              return (
                <div key={grp} style={{marginBottom:36}}>
                  <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
                    <div style={{fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)"}}>{grp}</div>
                    <div style={{flex:1, height:1, background:"var(--bdr)"}}/>
                    <div style={{fontSize:11, color:"var(--muted)"}}>{predmeti.filter(subject => ['legacy_available','published'].includes(subject.capabilities.practice.status)).length}/{predmeti.length} dostupno</div>
                  </div>

                  <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:10}}>
                    {predmeti.map(subject => {
                      const isActive = ['legacy_available','published'].includes(subject.capabilities.practice.status)
                      const isQa = subject.capabilities.practice.status === 'qa'

                      return (
                        <div
                          key={subject.id}
                          onClick={() => {
                            if (!isActive) return
                            setActivePredmet(subject.id)
                            if (subject.route) router.push(subject.route)
                          }}
                          style={{
                            padding:"18px 16px",
                            borderRadius:14,
                            border:`1px solid ${activePredmet === subject.id ? subject.color+"88" : isActive ? subject.color+"33" : "var(--bdr)"}`,
                            background: activePredmet === subject.id ? subject.color+"12" : isActive ? "var(--s1)" : "rgba(255,255,255,.02)",
                            cursor: isActive ? "pointer" : "default",
                            transition:"all .2s",
                            position:"relative",
                            overflow:"hidden",
                            opacity: isActive ? 1 : isQa ? .72 : .55
                          }}
                          onMouseEnter={e => {
                            if (isActive) {
                              e.currentTarget.style.borderColor = subject.color+"66"
                              e.currentTarget.style.transform = "translateY(-3px)"
                              if (activePredmet !== subject.id) e.currentTarget.style.background = subject.color+"0d"
                            }
                          }}
                          onMouseLeave={e => {
                            if (isActive) {
                              e.currentTarget.style.borderColor = activePredmet === subject.id ? subject.color+"88" : subject.color+"33"
                              e.currentTarget.style.transform = "none"
                              e.currentTarget.style.background = activePredmet === subject.id ? subject.color+"12" : "var(--s1)"
                            }
                          }}
                        >
                          {!isActive && (
                            <div style={{position:"absolute", top:10, right:10, fontSize:10, fontWeight:700, color:"var(--muted)", background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:99, padding:"2px 7px", letterSpacing:".06em"}}>
                              {isQa ? 'U PROVJERI' : 'USKORO'}
                            </div>
                          )}
                          {isActive && (
                            <div style={{position:"absolute", top:10, right:10, width:8, height:8, borderRadius:"50%", background:"var(--green)", boxShadow:"0 0 6px var(--green)"}}/>
                          )}
                          <div style={{fontSize:22, marginBottom:10, color:subject.color}}>{subject.sym}</div>
                          <div style={{fontWeight:700, fontSize:13, lineHeight:1.3, marginBottom:4}}>{subject.name}</div>
                          {isActive && <div style={{fontSize:11, color:subject.color, fontWeight:600, marginTop:4}}>Vježbaj →</div>}
                          {isQa && <div style={{fontSize:11, color:"var(--muted)", marginTop:4}}>Sadržaj prolazi provjeru</div>}
                          {!isActive && !isQa && <div style={{fontSize:11, color:"var(--muted)", marginTop:4}}>Priprema se</div>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            <div style={{marginTop:20, padding:"18px 22px", borderRadius:14, background:"var(--s1)", border:"1px solid var(--bdr)", fontSize:13, color:"var(--muted)", lineHeight:1.65}}>
              <strong style={{color:"var(--text)", display:"block", marginBottom:6}}>📦 Dodavanje novih predmeta</strong>
              Trenutno dostupni: Hrvatski, Matematika, Engleski i Sociologija. Novi predmeti prolaze sadržajnu i tehničku provjeru prije objave.
            </div>
          </div>
        </div>
      </div>
  )
}
