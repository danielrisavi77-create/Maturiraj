"use client";
import { useState, useEffect } from "react";
import { SUBJECTS } from "@/lib/data/subjects";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import HeroCountdown from "@/components/landing/HeroCountdown";

export default function Hero({ onSkripte, onPlan, onChat, onPrijemni, onKalkulator, onTermini, trialDismissed, onStartTrial }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const showTrial = mounted && !trialDismissed;

  return (
    <section style={{position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"}}>
      {/* Orbs */}
      <div className="orb" style={{width:700,height:700,top:"-15%",left:"-8%",background:"radial-gradient(circle,rgba(75,123,255,.13),transparent 65%)",animation:"orb-a 22s ease-in-out infinite"}}/>
      <div className="orb" style={{width:600,height:600,bottom:"-12%",right:"-4%",background:"radial-gradient(circle,rgba(124,92,252,.09),transparent 65%)",animation:"orb-b 26s ease-in-out infinite"}}/>
      <div className="orb" style={{width:400,height:400,top:"30%",right:"20%",background:"radial-gradient(circle,rgba(45,207,190,.06),transparent 65%)",animation:"orb-a 18s ease-in-out infinite 3s"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(75,123,255,.04) 1px,transparent 1px)",backgroundSize:"48px 48px",zIndex:0}}/>

      <div className="wrap" style={{paddingTop:100,paddingBottom:80,position:"relative",zIndex:1,width:"100%"}}>
        <div className="hero-split">

          {/* LEFT: text */}
          <div className="hero-text">
            <div className="up" style={{marginBottom:22,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <div className="badge b-gold" style={{animation:"badge-pop .6s ease both"}}>
                <span style={{animation:"pulse 2s ease-in-out infinite"}}>●</span>
                Maturiraj.hr · AI-powered priprema
              </div>
              <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 10px",borderRadius:99,background:"rgba(62,207,110,.08)",border:"1px solid rgba(62,207,110,.2)"}}>
                <div className="social-proof-dot"/>
                <span style={{fontSize:11,fontWeight:600,color:"var(--green)"}}>aktivno danas</span>
              </div>
            </div>

            <h1 className="d1 up" style={{animationDelay:".06s",marginBottom:22,lineHeight:1.15}}>
              {[
                {t:"Bez straha.",  grad:"linear-gradient(270deg,#4b7bff,#818cf8,#2dcfbe,#4b7bff)"},
                {t:"Bez brige.",   grad:"linear-gradient(270deg,#7c5cfc,#c084fc,#f87171,#7c5cfc)"},
                {t:"Maturiraj.hr", grad:"linear-gradient(270deg,#e9b446,#2dcfbe,#3ecf6e,#e9b446)"},
              ].map(({t, grad}) => (
                <span key={t} style={{display:"block",background:grad,backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"hero-text-shift 4s ease-in-out infinite"}}>
                  {t}
                </span>
              ))}
            </h1>

            <p className="up" style={{animationDelay:".13s",fontSize:17,lineHeight:1.82,color:"var(--muted)",marginBottom:32,maxWidth:480}}>
              Besplatne skripte za sve predmete mature i{" "}
              <strong style={{color:"var(--gold)"}}>Discere</strong> ispiti s timerom, besplatni uz prijavu. Razrada rezultata, AI profesor i roditeljski uvid uz pretplatu.
            </p>

            <div className="up" style={{animationDelay:".2s",display:"flex",gap:10,flexWrap:"wrap",marginBottom:14}}>
              <button className="btn bg btn-lg" onClick={onSkripte}>📖 Besplatne skripte</button>
              <button className="btn bp btn-lg" onClick={onPlan}>Pogledaj planove →</button>
            </div>

            {showTrial && (
              <div className="up" style={{animationDelay:".22s",marginBottom:14}}>
                <button onClick={onStartTrial} className="hero-trial-btn">
                  <span style={{fontSize:16}}>🎁</span>
                  <div style={{textAlign:"left"}}>
                    <div style={{fontSize:13,fontWeight:700,color:"var(--green)"}}>3 dana Pro plana besplatno</div>
                    <div style={{fontSize:11,color:"var(--muted)"}}>Bez kartice · Otkaži kad hoćeš</div>
                  </div>
                  <span style={{color:"var(--green)",fontSize:14,marginLeft:4}}>→</span>
                </button>
              </div>
            )}

            <div className="trust-strip up" style={{animationDelay:".25s",marginBottom:16}}>
              {[{ico:"✓",txt:"Bez kartice za početak"},{ico:"✓",txt:"Otkaži kad hoćeš"},{ico:"✓",txt:"GDPR · Hrvatska"}].map(({ico,txt}) => (
                <div key={txt} className="trust-item">
                  <span style={{color:"var(--green)",fontWeight:700,fontSize:13}}>{ico}</span>{txt}
                </div>
              ))}
            </div>

            <div className="social-proof up" style={{animationDelay:".3s"}}>
              <div className="sp-avatars">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="sp-avatar" style={{background:`${t.color}20`,color:t.color}}>{t.init}</div>
                ))}
                <div className="sp-avatar" style={{background:"rgba(75,123,255,.15)",color:"var(--blue)",fontSize:9,fontWeight:900}}>+</div>
              </div>
              <div className="sp-text">
                <strong>247 učenika</strong> aktivno danas<br/>
                <span style={{fontSize:11}}>★★★★★ prosječna ocjena 4.9/5</span>
              </div>
            </div>

            <div className="up" style={{animationDelay:".36s",display:"flex",gap:6,marginTop:18,flexWrap:"wrap"}}>
              {[
                {l:"🤖 AI Profesor",  a:onChat},
                {l:"🏛 Prijemni",     a:onPrijemni},
                {l:"🎯 Kalkulator",   a:onKalkulator},
                {l:"📅 Termini 2026.",a:onTermini},
              ].map(({l, a}) => (
                <button key={l} className="btn bgh btn-sm" style={{borderRadius:99,fontSize:12}} onClick={a}>{l}</button>
              ))}
            </div>
          </div>

          {/* RIGHT: floating product preview */}
          <div className="hero-visual up" style={{animationDelay:".18s"}}>

            {/* Card 1 — Kalkulator */}
            <div className="hero-card c1">
              <div className="hero-card-label">🎯 Kalkulator bodova · live preview</div>
              <div style={{display:"flex",alignItems:"flex-end",gap:8,marginBottom:4}}>
                <div className="hero-card-score">724</div>
                <div style={{fontSize:12,color:"var(--muted)",marginBottom:8,fontWeight:500}}>/ 1000 bod</div>
              </div>
              <div className="hero-card-rows">
                {[
                  {l:"Hrvatski jezik",v:78,c:"#f87171"},
                  {l:"Matematika A",  v:65,c:"#818cf8"},
                  {l:"Engleski jezik",v:82,c:"#c084fc"},
                  {l:"Biologija",     v:71,c:"#34d399"},
                ].map(({l, v, c}) => (
                  <div key={l} className="hero-card-row">
                    <span style={{color:"var(--muted)",minWidth:90,fontSize:11}}>{l}</span>
                    <div className="hero-card-bar">
                      <div className="hero-card-fill" style={{width:`${v}%`,background:c,opacity:.8}}/>
                    </div>
                    <span style={{color:"var(--text)",fontWeight:700,fontSize:11,minWidth:28,textAlign:"right"}}>{v}%</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:12,paddingTop:10,borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:6,flexWrap:"wrap"}}>
                {[
                  {l:"Dobra šansa",   c:"var(--green)", bg:"rgba(62,207,110,.1)"},
                  {l:"FER ↑ trend",   c:"var(--teal)",  bg:"rgba(45,207,190,.1)"},
                  {l:"MEF Granično",  c:"var(--gold)",  bg:"rgba(233,180,70,.1)"},
                ].map(({l, c, bg}) => (
                  <span key={l} style={{fontSize:9,fontWeight:700,color:c,background:bg,border:`1px solid ${c}30`,borderRadius:99,padding:"2px 7px",textTransform:"uppercase",letterSpacing:".06em"}}>
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 — AI Profesor */}
            <div className="hero-card c2">
              <div className="hero-card-label">🤖 AI Profesor · odgovor za 2s</div>
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                <div style={{alignSelf:"flex-end",background:"rgba(75,123,255,.15)",border:"1px solid rgba(75,123,255,.22)",borderRadius:"10px 10px 2px 10px",padding:"7px 10px",fontSize:12,maxWidth:"80%"}}>
                  Objasni mi derivaciju složene funkcije
                </div>
                <div style={{alignSelf:"flex-start",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"10px 10px 10px 2px",padding:"7px 10px",fontSize:12,maxWidth:"90%",color:"var(--muted)",lineHeight:1.5}}>
                  Koristimo <strong style={{color:"var(--text)"}}>pravilo lanca</strong>: (f∘g)′ = f′(g(x)) · g′(x). Na primjeru sin(x²)...
                </div>
              </div>
            </div>

            {/* Notification */}
            <div className="hero-notify">
              <span style={{fontSize:16}}>🎓</span>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:"var(--green)"}}>Lucija M. upravo upisala FER</div>
                <div style={{fontSize:10,color:"var(--muted)"}}>Nakon 3 tjedna uz Maturiraj.hr · Split → Zagreb</div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats traka */}
        <div className="up" style={{animationDelay:".42s",display:"flex",justifyContent:"center",paddingTop:48,marginTop:48,borderTop:"1px solid var(--bdr)"}}>
          {[
            {n:`${SUBJECTS.length}`, l:"predmeta mature",       ico:"📚"},
            {n:"100+",               l:"studija u kalkulatoru", ico:"🎯"},
            {n:"2010–2026",          l:"arhiva zadataka",       ico:"⭐"},
            {n:"100%",               l:"besplatne skripte",     ico:"✓"},
          ].map(({n, l, ico}, i) => (
            <div key={i} className="stat-item" style={{animationDelay:`${.42+i*.06}s`,borderRight:i<3?"1px solid var(--bdr)":undefined}}>
              <div style={{fontSize:13,marginBottom:4,opacity:.6}}>{ico}</div>
              <div className="stat-n">{n}</div>
              <div className="stat-l">{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}