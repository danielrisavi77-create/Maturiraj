"use client";
import NewsletterInput from "@/components/widgets/NewsletterInput";

export default function Footer({ onSkripte, onPlan, onPrijemni, onKalkulator, onTermini }) {
  // Gumb „na vrh" dolazi iz globalnog ScrollToTopButton (app/layout) — bez duplikata ovdje.
  return (
    <>
      <footer style={{borderTop:"1px solid var(--bdr)",background:"var(--bg)",paddingTop:64}}>
        <div className="wrap">

          {/* Top grid */}
          <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"1.6fr 1fr 1fr 1fr",gap:40,marginBottom:44,alignItems:"start"}}>

            {/* Brand */}
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                <div className="nav-logo-dot"/>
                <span style={{fontFamily:"var(--fh)",fontSize:20,fontWeight:900,letterSpacing:"-.02em"}}>Maturiraj.hr</span>
              </div>
              <p style={{color:"var(--muted)",fontSize:13,lineHeight:1.8,maxWidth:220,marginBottom:20}}>
                AI-powered priprema za državnu maturu i prijemne ispite. Hrvatska i BiH.
              </p>

              {/* Social icons */}
              <div style={{display:"flex",gap:7,marginBottom:20}}>
                {[
                  {s:"ig", ic:"📷", color:"#e1306c"},
                  {s:"tt", ic:"🎵", color:"#fff"},
                  {s:"fb", ic:"👥", color:"#1877f2"},
                  {s:"yt", ic:"▶",  color:"#ff0000"},
                ].map(({s,ic,color}) => (
                  <div key={s} className="surface"
                    style={{width:34,height:34,borderRadius:9,background:"var(--s2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",flexShrink:0}}>
                    {ic}
                  </div>
                ))}
              </div>

              <NewsletterInput/>

              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                {["🇭🇷 Hrvatska","🇧🇦 BiH","🔒 GDPR"].map(b => (
                  <div key={b} style={{padding:"3px 9px",borderRadius:99,background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",fontSize:11,color:"var(--muted)"}}>{b}</div>
                ))}
              </div>
            </div>

            {/* Platforma */}
            <div>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}}>Platforma</div>
              {[
                {l:"📖 Skripte",         a:onSkripte,   c:"var(--green)"},
                {l:"⭐ Discere",         a:onPlan,      c:"var(--orange)"},
                {l:"🤖 AI Profesor",     a:onPlan,      c:"var(--blue)"},
                {l:"🏛 Prijemni ispiti", a:onPrijemni,  c:"#fb923c"},
                {l:"🎯 Kalkulator",      a:onKalkulator,c:"var(--teal)"},
                {l:"📅 Termini 2026",    a:onTermini,   c:"#a78bfa"},
                {l:"💎 Cijene",          a:() => document.getElementById("cijene")?.scrollIntoView({behavior:"smooth"}), c:"var(--orange)"},
              ].map(({l,a,c}) => (
                <div key={l} onClick={a}
                  style={{fontSize:13,color:"var(--muted)",marginBottom:9,cursor:"pointer",transition:"color .14s",display:"flex",alignItems:"center",gap:6}}
                  onMouseEnter={e => e.currentTarget.style.color = c}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                  {l}
                </div>
              ))}
            </div>

            {/* Planovi */}
            <div>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}}>Planovi</div>
              {[
                {l:"Besplatno — Skripte",   sub:"uvijek besplatno",     c:"var(--green)"},
                {l:"Standard — 9,99 €/mj",  sub:"3 predmeta + Discere", c:"var(--orange)"},
                {l:"Pro — 19,99 €/mj",     sub:"sve + AI + roditelji",  c:"var(--blue)"},
                {l:"Godišnji — 120 €/god", sub:"Pro + uštedi 50%",      c:"var(--blue)"},
              ].map(({l,sub,c}) => (
                <div key={l} onClick={onPlan}
                  style={{marginBottom:10,cursor:"pointer",padding:"7px 10px",borderRadius:10,transition:"background .15s"}}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.03)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <div style={{fontSize:13,color:"var(--muted)",fontWeight:600,marginBottom:1,transition:"color .14s"}}
                    onMouseEnter={e => e.currentTarget.style.color = c}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                    {l}
                  </div>
                  <div style={{fontSize:11,color:"var(--muted)",opacity:.55}}>{sub}</div>
                </div>
              ))}
            </div>

            {/* Kompanija */}
            <div>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}}>Kompanija</div>
              {["O nama","Blog","Karijere","Kontakt","Uvjeti korištenja","Privatnost","Kolačići"].map(l => (
                <div key={l}
                  style={{fontSize:13,color:"var(--muted)",marginBottom:9,cursor:"pointer",transition:"color .14s"}}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                  {l}
                </div>
              ))}
              <div style={{marginTop:16,padding:"10px 12px",borderRadius:10,background:"var(--s2)",border:"1px solid var(--bdr)"}}>
                <div style={{fontSize:10,color:"var(--muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",marginBottom:4}}>Kontakt</div>
                <div style={{fontSize:12,color:"var(--text)"}}>kontakt@maturiraj.hr</div>
                <div style={{fontSize:11,color:"var(--muted)",marginTop:2}}>Odg. u roku 24h</div>
              </div>
            </div>
          </div>

          {/* Mini stats strip */}
          <div style={{display:"flex",gap:0,marginBottom:28,borderRadius:14,background:"var(--s2)",border:"1px solid var(--bdr)",overflow:"hidden"}}>
            {[
              {ic:"📚", n:"24",        l:"predmeta"},
              {ic:"⭐", n:"2010–2026", l:"Discere arhiva"},
              {ic:"🎓", n:"92%",       l:"upisalo željeni faks"},
              {ic:"🤖", n:"24/7",      l:"AI Profesor"},
              {ic:"🇭🇷",n:"HR + BiH",  l:"podrška"},
            ].map(({ic,n,l},i,arr) => (
              <div key={l} style={{flex:1,padding:"14px 16px",textAlign:"center",borderRight:i<arr.length-1?"1px solid var(--bdr)":"none"}}>
                <div style={{fontSize:16,marginBottom:3}}>{ic}</div>
                <div style={{fontFamily:"var(--fh)",fontSize:14,fontWeight:800,marginBottom:1}}>{n}</div>
                <div style={{fontSize:10,color:"var(--muted)"}}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{height:1,background:"var(--bdr)",marginBottom:18}}/>

          {/* Bottom bar */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,paddingBottom:28}}>
            <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
              <div style={{fontSize:12,color:"var(--muted)"}}>
                © 2026 Maturiraj.hr · Napravljeno s <span style={{color:"#f87171"}}>❤️</span> u Hrvatskoj 🇭🇷
              </div>
              <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 9px",borderRadius:99,background:"rgba(75,123,255,.07)",border:"1px solid rgba(75,123,255,.15)"}}>
                <span style={{fontSize:11}}>🔒</span>
                <span style={{fontSize:11,color:"var(--blue)",fontWeight:600}}>GDPR · Stripe · Supabase</span>
              </div>
            </div>
            <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              {["Uvjeti","Privatnost","Kolačići","kontakt@maturiraj.hr"].map(l => (
                <span key={l}
                  style={{fontSize:12,color:"var(--muted)",cursor:"pointer",transition:"color .14s"}}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                  {l}
                </span>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}