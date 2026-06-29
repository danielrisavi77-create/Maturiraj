'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePageTracking } from '@/lib/hooks/usePageTracking'

// minPlan: 'starter' = Standard or Pro; 'pro' = Pro only
// When more subjects launch: first 3 active = 'starter', rest = 'pro'
const PREDMETI_REG = [
  { id:"hrv",   name:"Hrvatski jezik",          sym:"✍",  color:"#f87171", group:"Obvezni",         status:"active",  minPlan:"starter" },
  { id:"mat",   name:"Matematika",              sym:"π",   color:"#818cf8", group:"Obvezni",         status:"active",  minPlan:"starter" },
  { id:"eng",   name:"Engleski jezik",          sym:"En",  color:"#c084fc", group:"Strani jezici",   status:"active",  minPlan:"starter" },
  { id:"nje",   name:"Njemački jezik",          sym:"De",  color:"#a78bfa", group:"Strani jezici",   status:"soon",    minPlan:"starter" },
  { id:"fra",   name:"Francuski jezik",         sym:"Fr",  color:"#60a5fa", group:"Strani jezici",   status:"soon",    minPlan:"starter" },
  { id:"tal",   name:"Talijanski jezik",        sym:"It",  color:"#34d399", group:"Strani jezici",   status:"soon",    minPlan:"starter" },
  { id:"spn",   name:"Španjolski jezik",        sym:"Es",  color:"#fb923c", group:"Strani jezici",   status:"soon",    minPlan:"starter" },
  { id:"rus",   name:"Ruski jezik",             sym:"Ru",  color:"#f87171", group:"Strani jezici",   status:"soon",    minPlan:"starter" },
  { id:"lat",   name:"Latinski jezik",          sym:"Lat", color:"#ff6b2b", group:"Klasični jezici", status:"soon",    minPlan:"starter" },
  { id:"grk",   name:"Starogrčki jezik",        sym:"Grk", color:"#fbbf24", group:"Klasični jezici", status:"soon",    minPlan:"starter" },
  { id:"bio",   name:"Biologija",               sym:"⊕",   color:"#2dd4bf", group:"Prirodoslovno",   status:"soon",    minPlan:"starter" },
  { id:"kem",   name:"Kemija",                  sym:"⚗",   color:"#34d399", group:"Prirodoslovno",   status:"soon",    minPlan:"starter" },
  { id:"fiz",   name:"Fizika",                  sym:"⚡",  color:"#fbbf24", group:"Prirodoslovno",   status:"soon",    minPlan:"starter" },
  { id:"inf",   name:"Informatika",             sym:"⌨",   color:"#818cf8", group:"Prirodoslovno",   status:"soon",    minPlan:"starter" },
  { id:"pov",   name:"Povijest",                sym:"📜",  color:"#fb923c", group:"Društveno",       status:"soon",    minPlan:"starter" },
  { id:"geo",   name:"Geografija",              sym:"◉",   color:"#38bdf8", group:"Društveno",       status:"soon",    minPlan:"starter" },
  { id:"soc",   name:"Sociologija",             sym:"⚖",   color:"#ff6b2b", group:"Društveno",       status:"active",  minPlan:"starter" },
  { id:"psi",   name:"Psihologija",             sym:"🧠",  color:"#a78bfa", group:"Društveno",       status:"soon",    minPlan:"starter" },
  { id:"pol",   name:"Politika i gospodarstvo", sym:"🏛",  color:"#60a5fa", group:"Društveno",       status:"soon",    minPlan:"starter" },
  { id:"filo",  name:"Filozofija",              sym:"φ",   color:"#f0abfc", group:"Društveno",       status:"soon",    minPlan:"starter" },
  { id:"likov", name:"Likovna umjetnost",       sym:"🎨",  color:"#f472b6", group:"Umjetnički",      status:"soon",    minPlan:"starter" },
  { id:"glaz",  name:"Glazbena umjetnost",      sym:"♪",   color:"#c084fc", group:"Umjetnički",      status:"soon",    minPlan:"starter" },
  { id:"etika", name:"Etika",                   sym:"⚖",   color:"#6ee7b7", group:"Ostali izborni",  status:"soon",    minPlan:"starter" },
  { id:"vjero", name:"Vjeronauk",               sym:"✝",   color:"#fcd34d", group:"Ostali izborni",  status:"soon",    minPlan:"starter" },
]

const etaMap = {
  hrv:"travanj 2026.", eng:"travanj 2026.", bio:"svibanj 2026.",
  kem:"svibanj 2026.", fiz:"svibanj 2026.", pov:"lipanj 2026.", geo:"lipanj 2026."
}

const predmetRoutes = {
  hrv: '/discere/hrvatski/simulator',
  eng: '/discere/engleski/simulator',
  mat: '/discere/matematika',
  soc: '/discere/sociologija',
}

export default function Discere() {
  usePageTracking('discere')
  const [activePredmet, setActivePredmet] = useState(null)
  const [xp] = useState(0)
  const router = useRouter()
  const { isPaid } = useAuth()

  const groups = [...new Set(PREDMETI_REG.map(p => p.group))]

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
              const predmeti = PREDMETI_REG.filter(p => p.group === grp)
              return (
                <div key={grp} style={{marginBottom:36}}>
                  <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
                    <div style={{fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)"}}>{grp}</div>
                    <div style={{flex:1, height:1, background:"var(--bdr)"}}/>
                    <div style={{fontSize:11, color:"var(--muted)"}}>{predmeti.filter(p => p.status === "active").length}/{predmeti.length} dostupno</div>
                  </div>

                  <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:10}}>
                    {predmeti.map(p => {
                      const isActive = p.status === "active"

                      return (
                        <div
                          key={p.id}
                          onClick={() => {
                            if (!isActive) return
                            setActivePredmet(p.id)
                            const nextRoute = predmetRoutes[p.id]
                            if (nextRoute) router.push(nextRoute)
                          }}
                          style={{
                            padding:"18px 16px",
                            borderRadius:14,
                            border:`1px solid ${activePredmet === p.id ? p.color+"88" : isActive ? p.color+"33" : "var(--bdr)"}`,
                            background: activePredmet === p.id ? p.color+"12" : isActive ? "var(--s1)" : "rgba(255,255,255,.02)",
                            cursor: isActive ? "pointer" : "default",
                            transition:"all .2s",
                            position:"relative",
                            overflow:"hidden",
                            opacity: isActive ? 1 : .55
                          }}
                          onMouseEnter={e => {
                            if (isActive) {
                              e.currentTarget.style.borderColor = p.color+"66"
                              e.currentTarget.style.transform = "translateY(-3px)"
                              if (activePredmet !== p.id) e.currentTarget.style.background = p.color+"0d"
                            }
                          }}
                          onMouseLeave={e => {
                            if (isActive) {
                              e.currentTarget.style.borderColor = activePredmet === p.id ? p.color+"88" : p.color+"33"
                              e.currentTarget.style.transform = "none"
                              e.currentTarget.style.background = activePredmet === p.id ? p.color+"12" : "var(--s1)"
                            }
                          }}
                        >
                          {!isActive && (
                            <div style={{position:"absolute", top:10, right:10, fontSize:10, fontWeight:700, color:"var(--muted)", background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:99, padding:"2px 7px", letterSpacing:".06em"}}>
                              USKORO
                            </div>
                          )}
                          {isActive && (
                            <div style={{position:"absolute", top:10, right:10, width:8, height:8, borderRadius:"50%", background:"var(--green)", boxShadow:"0 0 6px var(--green)"}}/>
                          )}
                          <div style={{fontSize:22, marginBottom:10, color:p.color}}>{p.sym}</div>
                          <div style={{fontWeight:700, fontSize:13, lineHeight:1.3, marginBottom:4}}>{p.name}</div>
                          {isActive && <div style={{fontSize:11, color:p.color, fontWeight:600, marginTop:4}}>Vježbaj →</div>}
                          {!isActive && <div style={{fontSize:11, color:"var(--muted)", marginTop:4}}>ETA: {etaMap[p.id] || "2026./27."}</div>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            <div style={{marginTop:20, padding:"18px 22px", borderRadius:14, background:"var(--s1)", border:"1px solid var(--bdr)", fontSize:13, color:"var(--muted)", lineHeight:1.65}}>
              <strong style={{color:"var(--text)", display:"block", marginBottom:6}}>📦 Dodavanje novih predmeta</strong>
              Svaki predmet se dodaje kao zaseban modul. Trenutno dostupni: Hrvatski, Engleski, Kemija i Sociologija.
              Novi predmeti se dodaju postepeno — pratite obavijesti.
            </div>
          </div>
        </div>
      </div>
  )
}