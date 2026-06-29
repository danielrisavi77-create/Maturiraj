export default function KakoFunkcionira() {
  return (
    <section style={{background:"var(--s1)", borderTop:"1px solid var(--bdr)", borderBottom:"1px solid var(--bdr)", overflow:"hidden"}}>
      <div style={{maxWidth:1080, margin:"0 auto", padding:"88px 44px"}}>

        <div style={{textAlign:"center", marginBottom:60}}>
          <div style={{fontSize:11, fontWeight:600, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:11}}>Kako funkcionira</div>
          <h2 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,48px)", fontWeight:700, lineHeight:1.08, letterSpacing:"-.025em"}}>Počni besplatno, nadogradi kad trebaš</h2>
        </div>

        <div style={{display:"flex", alignItems:"flex-start", gap:0, position:"relative"}}>
          {[
            {n:"01", col:"var(--green)", borderCol:"rgba(62,207,110,.35)", bgCol:"rgba(62,207,110,.08)", bl:"Besplatno · uvijek", ic:"📖", t:"Otvori skripte", d:"Bez registracije, bez plaćanja. Skripte za sve predmete mature po razinama — odmah dostupne svima."},
            {n:"02", col:"var(--gold)",  borderCol:"rgba(233,180,70,.35)",  bgCol:"rgba(233,180,70,.07)", bl:"Uz pretplatu",      ic:"⭐", t:"Pristup Discere",  d:"Arhiva svih zadataka s matura od 2010. do danas. Filtriraj po predmetu, razini, godini i temi."},
            {n:"03", col:"var(--blue)",  borderCol:"rgba(75,123,255,.35)",  bgCol:"rgba(75,123,255,.08)", bl:"Pro plan",          ic:"🤖", t:"AI Profesor 24/7", d:"Postavi pitanje o gradivu u bilo koje doba. AI profesor odgovara na hrvatskom, s primjerima."},
          ].map((s, i) => (
            <div key={i} style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", padding:"0 24px"}}>

              {/* Connector linija */}
              {i < 2 && (
                <div style={{position:"absolute", top:26, left:"calc(50% + 26px)", right:"calc(-50% + 26px)", height:1, background:`linear-gradient(90deg,${s.col}40,transparent)`, zIndex:0}}/>
              )}

              {/* Broj */}
              <div style={{width:52, height:52, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--fh)", fontSize:20, fontWeight:900, marginBottom:20, position:"relative", zIndex:1, border:`1.5px solid ${s.borderCol}`, background:s.bgCol, color:s.col, boxShadow:`0 0 20px ${s.col}18`}}>
                {s.n}
              </div>

              {/* Badge */}
              <div style={{display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:600, marginBottom:16, background:`${s.bgCol}`, color:s.col, border:`1px solid ${s.borderCol}`}}>
                {s.bl}
              </div>

              <div style={{fontSize:28, marginBottom:12}}>{s.ic}</div>
              <div style={{fontWeight:700, fontSize:16, marginBottom:10, color:"var(--text)"}}>{s.t}</div>
              <div style={{color:"var(--muted)", fontSize:13, lineHeight:1.78, maxWidth:240}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}