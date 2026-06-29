'use client'

const stavke = [
  {ic:"📖", t:"Skripte",             d:"Svi predmeti državne mature — viša i osnovna razina. Besplatno, bez prijave.",        boja:"var(--green)", badge:"Besplatno", url:"/skripte"},
  {ic:"⭐", t:"Discere",             d:"Arhiva svih zadataka s matura od 2010. do danas. XP sustav, statistike, simulacija.", boja:"var(--orange)",  badge:"Starter+",  url:"/discere"},
  {ic:"🤖", t:"AI Profesor",         d:"Postavi pitanje o gradivu u bilo koje doba. Odgovara na hrvatskom za 2–3 sekunde.",   boja:"var(--blue)",  badge:"Pro",        url:"/ai-profesor"},
  {ic:"🏛", t:"Prijemni ispiti",     d:"MEF, FER, Pravni, Arhitektonski, Ekonomski, Stomatološki — gradivo i stari zadaci.", boja:"#fb923c",      badge:"Starter+",  url:"/prijemni"},
  {ic:"🎯", t:"Kalkulator bodova",   d:"Upiši ocjene i vidi koje studije možeš upisati. Preko 100 studija u bazi.",          boja:"var(--teal)",  badge:"Besplatno", url:"/kalkulator"},
  {ic:"📊", t:"Roditeljski uvid",d:"Roditelji prate napredak djeteta u realnom vremenu — XP, streak, statistike.",      boja:"var(--violet)",badge:"Pro",        url:"/roditelji"},
]

export default function Funkcije() {
  return (
    <section id="funkcije" style={{
      padding:"96px 24px", borderTop:"1px solid var(--bdr)",
      background:"var(--s1)"
    }}>
      <div style={{maxWidth:1000, margin:"0 auto"}}>

        {/* Naslov */}
        <div style={{textAlign:"center", marginBottom:56}}>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12}}>
            Što dobivaš
          </div>
          <h2 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,42px)", fontWeight:900, color:"var(--text)"}}>
            Sve što trebaš za uspjeh na ispitu
          </h2>
        </div>

        {/* Kartice */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16
        }}>
          {stavke.map(({ic, t, d, boja, badge, url}, i) => (
            <div key={i}
              onClick={() => window.location.href = url}
              style={{
                padding:"28px 24px", borderRadius:14,
                background:"var(--s2)", border:"1px solid var(--bdr)",
                cursor:"pointer", transition:"border-color .2s"
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--bdr-hi)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--bdr)"}
            >
              <div style={{fontSize:28, marginBottom:12}}>{ic}</div>
              <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
                <div style={{fontWeight:700, fontSize:15, color:"var(--text)"}}>{t}</div>
                <span style={{
                  fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:20,
                  background:`${boja}18`, color:boja, border:`1px solid ${boja}40`
                }}>{badge}</span>
              </div>
              <div style={{fontSize:13, color:"var(--muted)", lineHeight:1.7}}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}