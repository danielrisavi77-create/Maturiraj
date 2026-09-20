"use client";

import { isParentPortalEnabled } from "@/lib/config/featureFlags";

export default function RoditeljiUrgency({ onRoditelji, onPlan, onSkripte }) {
  const parentPortalEnabled = isParentPortalEnabled();
  return (
    <section style={{background:"var(--bg)",borderTop:"1px solid var(--bdr)",padding:"96px 0",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:"30%",left:"-5%",width:500,height:500,background:"radial-gradient(circle,rgba(233,180,70,.06),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"10%",right:"-5%",width:400,height:400,background:"radial-gradient(circle,rgba(75,123,255,.06),transparent 65%)",pointerEvents:"none"}}/>

      <div className="wrap" style={{position:"relative",zIndex:1}}>

        {/* ── RODITELJSKA SEKCIJA ── */}
        <div className="reveal reveal-up" style={{marginBottom:80}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>

            {/* Lijevo */}
            <div>
              <div className="eye" style={{marginBottom:12}}>Za roditelje</div>
              <h2 className="d3" style={{marginBottom:16,lineHeight:1.2}}>
                Vi plaćate.<br/><span className="g-gold">Neka se isplati.</span>
              </h2>
              <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.85,marginBottom:24}}>
                Znamo — vi niste ti koji će rješavati zadatke. Ali vi ste ti koji brinu hoće li dijete upisati željeni fakultet. Maturiraj vam daje uvid, mirnoću i alate da to stvarno podržite.
              </p>

              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                {[
                  {ic:"📊", t:"Roditeljski uvid",  d:"Pratite napredak djeteta u realnom vremenu — koliko vježba, koji predmeti su slabi.", cta:true},
                  {ic:"📱", t:"Obavijesti na mobitelu", d:"Tjedni izvještaj o napretku — bez zadiranja u privatnost, samo bitne informacije.", cta:false},
                  {ic:"🎯", t:"Kalkulator bodova",      d:"Vidite realnu sliku — koji fakulteti su dostižni s trenutnim znanjem, što treba poboljšati.", cta:false},
                  {ic:"💬", t:"AI profesor 24/7",       d:"Dijete ne mora čekati privatnog učitelja — odgovor dobiva u sekundi, na hrvatskom.", cta:false},
                ].map((f, i) => (
                  <div key={i}
                    onClick={f.cta && parentPortalEnabled ? onRoditelji : undefined}
                    style={{display:"flex",gap:14,alignItems:"flex-start",padding:"14px 16px",borderRadius:12,
                      background:f.cta ? "rgba(233,180,70,.06)" : "transparent",
                      border:f.cta ? "1px solid rgba(233,180,70,.2)" : "1px solid transparent",
                      transition:"all .15s", cursor:f.cta && parentPortalEnabled ? "pointer" : "default"}}
                    onMouseEnter={e => { if(f.cta) e.currentTarget.style.background = "rgba(233,180,70,.1)"; }}
                    onMouseLeave={e => { if(f.cta) e.currentTarget.style.background = "rgba(233,180,70,.06)"; }}>
                    <div style={{width:40,height:40,borderRadius:10,background:"rgba(233,180,70,.1)",border:"1px solid rgba(233,180,70,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>
                      {f.ic}
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:700,fontSize:14,marginBottom:3,display:"flex",alignItems:"center",gap:8}}>
                        {f.t}
                        {f.cta && (
                          <span style={{fontSize:10,fontWeight:700,color:"var(--gold)",background:"rgba(233,180,70,.15)",border:"1px solid rgba(233,180,70,.3)",borderRadius:99,padding:"1px 7px"}}>
                            Otvori →
                          </span>
                        )}
                      </div>
                      <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.6}}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {parentPortalEnabled ? (
                  <button className="btn bo btn-lg" onClick={onRoditelji}>📊 Za roditelje →</button>
                ) : (
                  <button className="btn bo btn-lg" disabled style={{ opacity: 0.55, cursor: "not-allowed" }}>📊 Za roditelje — uskoro</button>
                )}
                <button className="btn bgh btn-lg" onClick={onPlan}>Pogledaj Pro plan</button>
              </div>
            </div>

            {/* Desno */}
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              <div style={{background:"var(--s1)",border:"1px solid rgba(233,180,70,.2)",borderRadius:20,padding:"28px 30px",position:"relative"}}>
                <div style={{fontSize:48,color:"var(--gold)",fontFamily:"var(--fh)",lineHeight:.8,marginBottom:16,opacity:.6}}>"</div>
                <p style={{fontSize:15,lineHeight:1.8,color:"var(--text)",marginBottom:20,fontStyle:"italic"}}>
                  Uložila sam u Maturiraj umjesto u još jednog privatnog učitelja. Kći je imala pristup svim predmetima 24/7 — a ja sam pratila napredak bez da sam je stresirala s pitanjima.
                </p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:42,height:42,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#f5d170)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:18,fontWeight:900,color:"#160d00",flexShrink:0}}>M</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:14}}>Maja P.</div>
                    <div style={{fontSize:12,color:"var(--muted)"}}>Mama maturantice · Zagreb → MEF</div>
                  </div>
                  <div style={{marginLeft:"auto",textAlign:"right"}}>
                    <div style={{fontFamily:"var(--fh)",fontSize:22,fontWeight:900,color:"var(--green)",lineHeight:1}}>189</div>
                    <div style={{fontSize:11,color:"var(--muted)"}}>/ 200 bod.</div>
                  </div>
                </div>
              </div>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[
                  {n:"10×",  l:"manje od tečaja pripreme",  c:"var(--green)"},
                  {n:"24/7", l:"dostupno, svaki dan",        c:"var(--blue)"},
                  {n:"24",   l:"predmeta u jednoj pretplati",c:"var(--gold)"},
                  {n:"100%", l:"online, bez putovanja",      c:"var(--teal)"},
                ].map((s, i) => (
                  <div key={i} style={{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"16px 18px",textAlign:"center"}}>
                    <div style={{fontFamily:"var(--fh)",fontSize:28,fontWeight:900,color:s.c,lineHeight:1,marginBottom:4}}>{s.n}</div>
                    <div style={{fontSize:12,color:"var(--muted)",lineHeight:1.4}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── USIDRIVANJE CIJENE ── */}
        <div className="reveal reveal-up" style={{marginBottom:80}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div className="eye" style={{marginBottom:10}}>Prava vrijednost</div>
            <h2 className="d3">Koliko košta <span className="g-blue">priprema za maturu?</span></h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,maxWidth:860,margin:"0 auto 32px"}}>
            {[
              {
                label:"Privatni učitelj", price:"40–80 €", per:"po satu", color:"var(--red)",
                stavke:["1 predmet","1–2 sata tjedno","Putovanje / čekanje","Raspored fiksan","Nema arhive zadataka"],
                ok:[false,false,false,false,false], hi:false,
              },
              {
                label:"Maturiraj Pro", price:"19,99 €", per:"mjesečno", color:"var(--blue)",
                stavke:["Svih 24 predmeta","Neograničeno, 24/7","Online, odmah","Uči kad ti odgovara","Discere arhiva 2010–2026"],
                ok:[true,true,true,true,true], hi:true, badge:"Najpametnije",
              },
              {
                label:"Pripremni tečaj", price:"200–500 €", per:"po tečaju", color:"var(--muted)",
                stavke:["2–3 predmeta","Fiksni termini","Putovanje obavezno","Grupni rad","Bez personalizacije"],
                ok:[false,false,false,false,false], hi:false,
              },
            ].map((p, i) => (
              <div key={i} style={{borderRadius:20,border:`1px solid ${p.hi?"rgba(75,123,255,.35)":"var(--bdr)"}`,background:p.hi?"linear-gradient(160deg,#0f1630,var(--bg))":"var(--s1)",padding:"28px 24px",position:"relative",animation:p.hi?"glow 5s ease-in-out infinite":"none"}}>
                {p.hi && <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,var(--blue),transparent)",borderRadius:"20px 20px 0 0"}}/>}
                {p.badge && <div style={{position:"absolute",top:16,right:16,fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:99,background:"linear-gradient(135deg,#4b7bff,#7c5cfc)",color:"#fff"}}>{p.badge}</div>}
                <div style={{fontWeight:700,fontSize:15,marginBottom:6}}>{p.label}</div>
                <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:4}}>
                  <span style={{fontFamily:"var(--fh)",fontSize:32,fontWeight:900,color:p.color,lineHeight:1}}>{p.price}</span>
                </div>
                <div style={{fontSize:12,color:"var(--muted)",marginBottom:20}}>{p.per}</div>
                <div style={{display:"flex",flexDirection:"column",gap:9}}>
                  {p.stavke.map((s, j) => (
                    <div key={j} style={{display:"flex",gap:9,alignItems:"center",fontSize:13}}>
                      <span style={{color:p.ok[j]?"var(--green)":"var(--red)",fontWeight:700,flexShrink:0,fontSize:14}}>{p.ok[j]?"✓":"✗"}</span>
                      <span style={{color:p.ok[j]?"var(--text)":"var(--muted)"}}>{s}</span>
                    </div>
                  ))}
                </div>
                {p.hi && (
                  <button className="btn bp btn-md" style={{width:"100%",justifyContent:"center",marginTop:22}} onClick={onPlan}>
                    Počni danas →
                  </button>
                )}
              </div>
            ))}
          </div>

          <p style={{textAlign:"center",fontSize:14,color:"var(--muted)",maxWidth:480,margin:"0 auto"}}>
            Jedna privatna instrukcija = <strong style={{color:"var(--text)"}}>2 mjeseca Maturiraj Pro</strong>. Za cijenu jedne kave tjedno imaš sve predmete, arhivu 15 godina zadataka i AI profesora.
          </p>
        </div>

        {/* ── URGENCY ── */}
        <div className="reveal reveal-up">
          <div style={{background:"linear-gradient(135deg,rgba(248,113,113,.07),rgba(233,180,70,.07))",border:"1px solid rgba(248,113,113,.2)",borderRadius:24,padding:"44px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(248,113,113,.04) 1px,transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{fontSize:13,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#f87171",marginBottom:16}}>
                ⏰ Matura se ne čeka
              </div>
              <h2 className="d3" style={{marginBottom:12}}>
                Ljetni rok počinje <span style={{color:"#f87171"}}>1. lipnja 2026.</span>
              </h2>
              <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.75,maxWidth:520,margin:"0 auto 32px"}}>
                Svaki tjedan bez pripreme je tjedan koji ne možeš vratiti. Maturanti koji počnu 3+ mjeseca ranije ostvaruju prosječno <strong style={{color:"var(--text)"}}>23% bolje rezultate</strong>.
              </p>

              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:16,maxWidth:520,margin:"0 auto 32px"}}>
                {[
                  {l:"Besplatno odmah",      d:"Skripte bez registracije", c:"var(--green)", btn:"Otvori skripte", a:onSkripte},
                  {l:"Standard — 9,99 €/mj", d:"3 predmeta + Discere",     c:"var(--teal)",  btn:"Počni Standard",  a:onPlan},
                  {l:"Pro — 19,99 €/mj",    d:"Sve + AI + roditelji",      c:"var(--blue)",  btn:"Uzmi Pro",       a:onPlan},
                ].map((o, i) => (
                  <div key={i} style={{background:"rgba(7,9,15,.6)",border:`1px solid ${o.c}33`,borderRadius:14,padding:"18px 16px",backdropFilter:"blur(8px)"}}>
                    <div style={{fontWeight:700,fontSize:13,color:o.c,marginBottom:4}}>{o.l}</div>
                    <div style={{fontSize:12,color:"var(--muted)",marginBottom:14,lineHeight:1.5}}>{o.d}</div>
                    <button onClick={o.a}
                      style={{width:"100%",padding:"8px 0",borderRadius:9,border:`1px solid ${o.c}55`,background:`${o.c}18`,color:o.c,fontFamily:"var(--fb)",fontSize:12,fontWeight:700,cursor:"pointer",transition:"all .18s"}}
                      onMouseEnter={e => e.currentTarget.style.background=`${o.c}30`}
                      onMouseLeave={e => e.currentTarget.style.background=`${o.c}18`}>
                      {o.btn} →
                    </button>
                  </div>
                ))}
              </div>

              <div style={{fontSize:13,color:"var(--muted)"}}>
                🔒 Sigurno plaćanje · Otkaži bilo kada · Bez obaveza
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}