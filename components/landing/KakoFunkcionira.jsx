"use client";

const KORACI = [
  {
    n:"01", col:"var(--green)", borderCol:"rgba(62,207,110,.35)", bgCol:"rgba(62,207,110,.08)",
    badge:"b-green", bl:"Besplatno · uvijek", ic:"📖", t:"Otvori skripte",
    d:"Bez registracije, bez plaćanja. Skripte za sve predmete mature po razinama — odmah dostupne svima.",
  },
  {
    n:"02", col:"var(--orange)", borderCol:"rgba(255,107,43,.35)", bgCol:"rgba(255,107,43,.07)",
    badge:"b-gold", bl:"Ispiti besplatni uz prijavu", ic:"⭐", t:"Pristup Discere",
    d:"Prijavi se i radi prave ispite s timerom besplatno. Pregled odgovora, obrazloženja i analiza po temama dolaze uz Standard.",
  },
  {
    n:"03", col:"var(--blue)", borderCol:"rgba(75,123,255,.35)", bgCol:"rgba(75,123,255,.08)",
    badge:"b-blue", bl:"Pro plan", ic:"🤖", t:"AI Profesor 24/7",
    d:"Postavi pitanje o gradivu u bilo koje doba. AI profesor odgovara na hrvatskom, s primjerima.",
  },
];

export default function KakoFunkcionira() {
  return (
    <section className="sec" style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap">

        <div className="reveal reveal-up" style={{textAlign:"center",marginBottom:60}}>
          <div className="eye" style={{marginBottom:11}}>Kako funkcionira</div>
          <h2 className="d2">Počni besplatno, nadogradi kad trebaš</h2>
        </div>

        <div style={{display:"flex",alignItems:"flex-start",gap:0,position:"relative"}}>
          {KORACI.map((s, i) => (
            <div key={i} className="reveal reveal-up"
              style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",position:"relative",padding:"0 24px"}}>

              {/* Connector linija između koraka */}
              {i < 2 && (
                <div style={{position:"absolute",top:26,left:"calc(50% + 26px)",right:"calc(-50% + 26px)",height:"1px",background:`linear-gradient(90deg,${s.col}40,transparent)`,zIndex:0}}/>
              )}

              {/* Broj */}
              <div style={{width:52,height:52,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:20,fontWeight:900,marginBottom:20,position:"relative",zIndex:1,border:`1.5px solid ${s.borderCol}`,background:s.bgCol,color:s.col,boxShadow:`0 0 20px ${s.col}18`}}>
                {s.n}
              </div>

              <span className={`badge ${s.badge}`} style={{marginBottom:16}}>{s.bl}</span>
              <div style={{fontSize:28,marginBottom:12}}>{s.ic}</div>
              <div style={{fontWeight:700,fontSize:16,marginBottom:10,color:"var(--text)"}}>{s.t}</div>
              <div style={{color:"var(--muted)",fontSize:13,lineHeight:1.78,maxWidth:240}}>{s.d}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}