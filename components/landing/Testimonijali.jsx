"use client";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function Testimonijali() {
  return (
    <section style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",padding:"88px 0",overflow:"hidden"}}>

      <div style={{textAlign:"center",marginBottom:52}} className="reveal reveal-up">
        <div className="eye" style={{marginBottom:11}}>Što kažu učenici</div>
        <h2 className="d2">Stvarni rezultati</h2>
        <p style={{color:"var(--muted)",fontSize:15,marginTop:14,maxWidth:440,margin:"14px auto 0",lineHeight:1.75}}>
          Maturanti iz cijele Hrvatske i BiH — od Splita do Sarajeva.
        </p>
      </div>

      {/* Red 1 — ide lijevo */}
      <div className="marquee-outer" style={{marginBottom:0}}>
        <div className="marquee-track fwd">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="tcard">
              <div className="stars">★★★★★</div>
              <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:16,flex:1}}>"{t.text}"</p>
              <div style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:99,background:`${t.color}10`,border:`1px solid ${t.color}20`,marginBottom:14,alignSelf:"flex-start"}}>
                <span style={{fontSize:10,color:t.color,fontWeight:700}}>✓</span>
                <span style={{fontSize:11,color:t.color,fontWeight:600}}>{t.ishod}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div className="avatar" style={{background:`${t.color}15`,color:t.color,border:`1.5px solid ${t.color}25`}}>{t.init}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:13}}>{t.name}</div>
                  <div style={{fontSize:11,color:"var(--muted)",marginTop:1}}>{t.grad}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:10,color:"var(--muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",marginBottom:1}}>{t.predmet}</div>
                  <div style={{fontFamily:"var(--fh)",fontSize:16,fontWeight:900,color:t.color}}>{t.ocjena}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div style={{display:"flex",alignItems:"center",gap:16,padding:"18px 44px",opacity:.35}}>
        <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,transparent,var(--bdr))"}}/>
        <div style={{display:"flex",gap:5}}>
          {["★","★","★","★","★"].map((s, i) => (
            <span key={i} style={{fontSize:9,color:"var(--muted)"}}>{s}</span>
          ))}
        </div>
        <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,var(--bdr),transparent)"}}/>
      </div>

      {/* Red 2 — ide desno */}
      <div className="marquee-outer">
        <div className="marquee-track rev">
          {[...TESTIMONIALS.slice(4),...TESTIMONIALS.slice(0,4),...TESTIMONIALS.slice(4),...TESTIMONIALS.slice(0,4)].map((t, i) => (
            <div key={i} className="tcard" style={{background:"var(--bg)",borderColor:"rgba(255,255,255,.06)"}}>
              <div className="stars">★★★★★</div>
              <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:16,flex:1}}>"{t.text}"</p>
              <div style={{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:99,background:`${t.color}10`,border:`1px solid ${t.color}20`,marginBottom:14,alignSelf:"flex-start"}}>
                <span style={{fontSize:10,color:t.color,fontWeight:700}}>✓</span>
                <span style={{fontSize:11,color:t.color,fontWeight:600}}>{t.ishod}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div className="avatar" style={{background:`${t.color}15`,color:t.color,border:`1.5px solid ${t.color}25`}}>{t.init}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:13}}>{t.name}</div>
                  <div style={{fontSize:11,color:"var(--muted)",marginTop:1}}>{t.grad}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:10,color:"var(--muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",marginBottom:1}}>{t.predmet}</div>
                  <div style={{fontFamily:"var(--fh)",fontSize:16,fontWeight:900,color:t.color}}>{t.ocjena}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="reveal reveal-up" style={{display:"flex",justifyContent:"center",gap:40,marginTop:52,flexWrap:"wrap"}}>
        {[["4.9 / 5","prosječna ocjena","★"],["2.400+","učenika do sad","📚"],["92%","upisalo željeni fakultet","🎓"]].map(([n,l,ic]) => (
          <div key={l} style={{textAlign:"center"}}>
            <div style={{fontFamily:"var(--fh)",fontSize:28,fontWeight:900,marginBottom:3}}>{ic} {n}</div>
            <div style={{fontSize:12,color:"var(--muted)"}}>{l}</div>
          </div>
        ))}
      </div>

    </section>
  );
}