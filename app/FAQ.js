'use client'
import { useState } from 'react'

const pitanja = [
  {cat:"Sadržaj", q:"Jesu li skripte stvarno besplatne?", a:"Da — skripte za sve predmete državne mature su 100% besplatne, bez registracije i bez vremenskog ograničenja. To je naš trajni poklon svim maturantima u Hrvatskoj i BiH."},
  {cat:"Sadržaj", q:"Što je Discere i kako funkcionira?", a:"Discere je zasebna aplikacija na discere.app — arhiva svih zadataka s državnih matura od 2010. do danas, organizirana po predmetu, razini, godini i temi. Ima quiz engine, XP sustav i statistike po temama. Pristup dobivaš uz bilo koji plaćeni plan."},
  {cat:"Sadržaj", q:"Pokrivaš li prijemne ispite?", a:"Da! Imaš posebne stranice za 6 prijemnih ispita — MEF, FER, Pravni, Arhitektonski, Ekonomski i Stomatološki. Svaka stranica ima gradivo, format ispita, bodovanje i Discere arhivu prijemnih zadataka."},
  {cat:"Sadržaj", q:"Kako funkcionira AI Profesor?", a:"AI Profesor je razgovorni chatbot koji odgovara na pitanja o gradivu na hrvatskom jeziku. Dostupan je 24/7, odgovara za 2–3 sekunde i prilagođava objašnjenja tvom razredu i razini. Dostupan uz Pro plan."},
  {cat:"Plaćanje", q:"Kada dobivam pristup nakon plaćanja?", a:"Odmah — od prvog trenutka, bez čekanja i bez aktivacije. Učiš kad i gdje ti odgovara, 24/7, s bilo kojeg uređaja."},
  {cat:"Plaćanje", q:"Mogu li otkazati pretplatu?", a:"Da, bilo kada, bez troškova ili skrivenih naknada. Nema obaveze vezivanja. Otkaz napraviš u jednom kliku iz postavki profila."},
  {cat:"Plaćanje", q:"Mogu li koristiti Maturiraj.hr ako sam iz BiH?", a:"Apsolutno — platforma je dizajnirana i za učenike iz Bosne i Hercegovine. Sadržaj pokriva hrvatsku državnu maturu, ali gradivo je identično i primjenjivo. Plaćanje funkcionira s karticama iz svih zemalja EU i regije."},
  {cat:"Tehničko", q:"Je li moj podatak siguran?", a:"Da. Koristimo Supabase za autentifikaciju i bazu podataka, Stripe za plaćanje — tvoji financijski podaci nikada ne prolaze kroz naše servere. GDPR kompatibilni smo."},
  {cat:"Tehničko", q:"Što ako imam tehničkih problema?", a:"Kontaktiraj nas na kontakt@maturiraj.hr — odgovaramo u roku od 24h radnim danom. Dostupni smo i na Instagramu @maturiraj.hr."},
]

export default function FAQ() {
  const [otvoren, setOtvoren] = useState(null)

  return (
    <section style={{padding:"96px 24px", borderTop:"1px solid var(--bdr)", background:"var(--s1)"}}>
      <div style={{maxWidth:700, margin:"0 auto"}}>

        {/* Naslov */}
        <div style={{textAlign:"center", marginBottom:56}}>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12}}>
            Često postavljena pitanja
          </div>
          <h2 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,42px)", fontWeight:900, color:"var(--text)"}}>
            Imaš pitanje?<br/>
            <span style={{color:"var(--blue)"}}>Imamo odgovor.</span>
          </h2>
        </div>

        {/* Pitanja */}
        <div style={{display:"flex", flexDirection:"column", gap:8}}>
          {pitanja.map(({q, a, cat}, i) => (
            <div key={i} style={{
              borderRadius:12, border:"1px solid var(--bdr)",
              background:"var(--s2)", overflow:"hidden"
            }}>
              <button onClick={() => setOtvoren(otvoren === i ? null : i)} style={{
                width:"100%", padding:"18px 20px", display:"flex",
                alignItems:"center", justifyContent:"space-between", gap:12,
                background:"transparent", border:"none", cursor:"pointer",
                fontFamily:"var(--fb)", textAlign:"left"
              }}>
                <div style={{display:"flex", alignItems:"center", gap:10}}>
                  <span style={{
                    fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:20,
                    background:"rgba(75,123,255,.1)", color:"var(--blue)",
                    border:"1px solid rgba(75,123,255,.2)", whiteSpace:"nowrap"
                  }}>{cat}</span>
                  <span style={{fontSize:14, fontWeight:600, color:"var(--text)"}}>{q}</span>
                </div>
                <span style={{
                  color:"var(--muted)", fontSize:18, flexShrink:0,
                  transition:"transform .2s",
                  transform: otvoren === i ? "rotate(45deg)" : "rotate(0)"
                }}>+</span>
              </button>
              {otvoren === i && (
                <div style={{
                  padding:"0 20px 18px", fontSize:13,
                  color:"var(--muted)", lineHeight:1.75
                }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}