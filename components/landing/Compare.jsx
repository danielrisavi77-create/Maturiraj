"use client";
import { COMPARE } from "@/lib/data/compare";

export default function Compare({ onPlan }) {
  return (
    <section className="sec">
      <div className="wrap">

        <div style={{textAlign:"center",marginBottom:56}} className="reveal reveal-up">
          <div className="eye" style={{marginBottom:11}}>Usporedba</div>
          <h2 className="d2">Maturiraj.hr vs klasične pripreme</h2>
          <p style={{color:"var(--muted)",fontSize:15,marginTop:14,maxWidth:460,margin:"14px auto 0",lineHeight:1.75}}>
            Iste informacije — dostupne 24/7, bez putovanja, za 10× manju cijenu.
          </p>
        </div>

        <div className="cmp-grid" style={{display:"grid",gridTemplateColumns:"1fr 52px 1fr",alignItems:"stretch",maxWidth:920,margin:"0 auto"}}>

          {/* Maturiraj.hr */}
          <div className="cmp-left reveal reveal-left" style={{background:"linear-gradient(160deg,#070e22,#060a18)",border:"1px solid rgba(75,123,255,.3)",borderRadius:"22px 0 0 22px",padding:"32px 28px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-60,right:-40,width:260,height:260,background:"radial-gradient(circle,rgba(75,123,255,.14),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",bottom:-30,left:-20,width:180,height:180,background:"radial-gradient(circle,rgba(124,92,252,.08),transparent 65%)",pointerEvents:"none"}}/>

            <div style={{position:"relative",marginBottom:24}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:"var(--blue)",boxShadow:"0 0 12px var(--blue)",animation:"pulse 2s ease-in-out infinite"}}/>
                  <span style={{fontFamily:"var(--fh)",fontSize:19,fontWeight:900,letterSpacing:"-.02em"}}>Maturiraj.hr</span>
                </div>
                <div className="badge b-green" style={{fontSize:10}}>Preporučujemo</div>
              </div>
              <div style={{display:"flex",alignItems:"flex-end",gap:6,marginBottom:4}}>
                <span className="cmp-price-big" style={{fontFamily:"var(--fh)",fontSize:38,fontWeight:900,lineHeight:1,background:"linear-gradient(135deg,var(--blue),var(--violet))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>9,99 €</span>
                <span style={{fontSize:13,color:"var(--muted)",marginBottom:6}}>/mj</span>
              </div>
              <div style={{fontSize:12,color:"var(--muted)"}}>ili 7,49 €/mj godišnje · otkaži kad hoćeš</div>
              <div style={{marginTop:12,display:"inline-flex",alignItems:"center",gap:6,padding:"5px 11px",borderRadius:99,background:"rgba(62,207,110,.08)",border:"1px solid rgba(62,207,110,.2)"}}>
                <span style={{color:"var(--green)",fontSize:11,fontWeight:700}}>✓</span>
                <span style={{fontSize:11,color:"var(--green)",fontWeight:600}}>Uštedi 89–390 € godišnje vs klasične</span>
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:7,position:"relative"}}>
              {[
                {t:"Besplatne skripte",        sub:"24 predmeta · odmah · bez registracije", c:"var(--green)", ic:"📖", hi:false},
                {t:"Discere arhiva 2010.–2026.",sub:"Svi zadaci, riješeni odgovori, filtri",  c:"var(--gold)",  ic:"⭐", hi:false},
                {t:"AI Profesor 24/7",          sub:"Odgovor za 2s · na hrvatskom",           c:"var(--blue)",  ic:"🤖", hi:true},
                {t:"Prijemni ispiti",           sub:"MEF, FER, Pravni, AFZ, EFZG, SFZG",     c:"#fb923c",      ic:"🏛", hi:false},
                {t:"Roditeljski uvid",     sub:"Napredak u realnom vremenu",             c:"#a78bfa",      ic:"📊", hi:false},
                {t:"Praćenje po temama",        sub:"Vidi točno gdje si najslabiji",          c:"var(--teal)",  ic:"🎯", hi:false},
                {t:"Dostupno 24/7, svuda",      sub:"Zagreb, Split, Sarajevo, EU — svejedno", c:"var(--teal)", ic:"🌐", hi:false},
              ].map(({t,sub,c,ic,hi},i) => (
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",borderRadius:11,
                  background:hi?"rgba(75,123,255,.07)":"rgba(255,255,255,.025)",
                  border:hi?"1px solid rgba(75,123,255,.2)":"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{width:30,height:30,borderRadius:8,background:`${c}14`,border:`1px solid ${c}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>{ic}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="cmp-feat-label" style={{fontSize:12,fontWeight:600,color:hi?"var(--blue)":"var(--text)"}}>{t}</div>
                    <div style={{fontSize:10,color:"var(--muted)",marginTop:1}}>{sub}</div>
                  </div>
                  <div style={{width:18,height:18,borderRadius:5,background:"rgba(62,207,110,.12)",border:"1px solid rgba(62,207,110,.25)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--green)",fontSize:10,fontWeight:700,flexShrink:0}}>✓</div>
                </div>
              ))}
            </div>

            <button className="btn bp btn-md" onClick={onPlan} style={{width:"100%",justifyContent:"center",marginTop:22,position:"relative"}}>
              Isprobaj Maturiraj.hr →
            </button>
          </div>

          {/* VS separator */}
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2}}>
            <div style={{flex:1,width:1,background:"linear-gradient(to bottom,transparent,var(--bdr) 25%,var(--bdr) 75%,transparent)"}}/>
            <div style={{width:40,height:40,borderRadius:"50%",background:"var(--s2)",border:"1px solid var(--bdr-hi)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:12,fontWeight:900,color:"var(--muted)",flexShrink:0,margin:"10px 0",boxShadow:"0 4px 20px rgba(0,0,0,.5)"}}>VS</div>
            <div style={{flex:1,width:1,background:"linear-gradient(to bottom,var(--bdr) 25%,var(--bdr) 75%,transparent)"}}/>
          </div>

          {/* Klasične pripreme */}
          <div className="cmp-right reveal reveal-right" style={{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"0 22px 22px 0",padding:"32px 28px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,.008) 20px,rgba(255,255,255,.008) 21px)",pointerEvents:"none"}}/>

            <div style={{marginBottom:24,position:"relative"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:"var(--muted)",opacity:.4}}/>
                <span style={{fontFamily:"var(--fh)",fontSize:19,fontWeight:900,color:"var(--muted)",letterSpacing:"-.02em"}}>Klasične pripreme</span>
              </div>
              <div style={{display:"flex",alignItems:"flex-end",gap:6,marginBottom:4}}>
                <span className="cmp-price-big" style={{fontFamily:"var(--fh)",fontSize:38,fontWeight:900,lineHeight:1,color:"var(--muted)"}}>150–400 €</span>
              </div>
              <div style={{fontSize:12,color:"var(--muted)",opacity:.7}}>po predmetu · fiksni termini · fizički dolazak</div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:7}}>
              {[
                {t:"Skripte",           ok:false,    sub:"Nisu uključene — kupuješ posebno"},
                {t:"Arhiva zadataka",   ok:false,    sub:"Ograničeno, tek uz nadoplatu"},
                {t:"AI Profesor",       ok:false,    sub:"Ne postoji"},
                {t:"Prijemni ispiti",   ok:"partial",sub:"Fizičke grupe, ograničen broj mjesta"},
                {t:"Roditeljski uvid",  ok:false,    sub:"Nema digitalnog praćenja"},
                {t:"Praćenje po temama",ok:"partial",sub:"Ovisi o predavaču, nema statistika"},
                {t:"Dostupnost 24/7",   ok:false,    sub:"Samo fiksni termini, fizički dolazak"},
              ].map(({t,ok,sub},i) => (
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",borderRadius:11,background:"rgba(255,255,255,.015)",border:"1px solid rgba(255,255,255,.04)",opacity:ok?1:.65}}>
                  <div style={{width:30,height:30,borderRadius:8,background:"rgba(255,255,255,.03)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0,color:"var(--muted)"}}>—</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="cmp-feat-label" style={{fontSize:12,fontWeight:600,color:"var(--muted)",textDecoration:ok?"none":"line-through",textDecorationColor:"rgba(248,113,113,.25)"}}>{t}</div>
                    <div style={{fontSize:10,color:"var(--muted)",opacity:.55,marginTop:1}}>{sub}</div>
                  </div>
                  <div style={{width:18,height:18,borderRadius:5,
                    background:ok==="partial"?"rgba(233,180,70,.08)":"rgba(248,113,113,.08)",
                    border:`1px solid ${ok==="partial"?"rgba(233,180,70,.2)":"rgba(248,113,113,.2)"}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:10,fontWeight:700,
                    color:ok==="partial"?"var(--gold)":"rgba(248,113,113,.5)",
                    flexShrink:0}}>
                    {ok==="partial"?"~":"✗"}
                  </div>
                </div>
              ))}
            </div>

            <div style={{marginTop:22,padding:"13px 14px",borderRadius:11,background:"rgba(248,113,113,.04)",border:"1px solid rgba(248,113,113,.1)",fontSize:12,color:"rgba(248,113,113,.65)",lineHeight:1.65}}>
              Za tipična <strong style={{color:"rgba(248,113,113,.8)"}}>3 predmeta</strong> godišnje to je ukupno:<br/>
              <strong style={{color:"rgba(248,113,113,.85)",fontFamily:"var(--fh)",fontSize:20}}>450 – 1.200 €</strong>
              <span style={{fontSize:11,opacity:.7}}> · samo za nastavu</span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="reveal reveal-up" style={{maxWidth:920,margin:"20px auto 0",padding:"16px 24px",borderRadius:14,background:"rgba(75,123,255,.05)",border:"1px solid rgba(75,123,255,.12)",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <span style={{fontSize:18}}>💡</span>
          <p style={{fontSize:13,color:"var(--muted)",flex:1,lineHeight:1.65,minWidth:200}}>
            Maturiraj.hr <strong style={{color:"var(--text)"}}>ne zamjenjuje</strong> profesionalne pripreme — <strong style={{color:"var(--text)"}}>nadopunjuje ih</strong>. Gradivo uvijek imaš pri ruci, 24/7, za cijenu jedne kave tjedno.
          </p>
          <button className="btn bp btn-sm" onClick={onPlan} style={{flexShrink:0}}>Počni besplatno →</button>
        </div>

      </div>
    </section>
  );
}