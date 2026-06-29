"use client";
import { useState } from "react";
import { FAQS } from "@/lib/data/faqs";

const CATS = ["Sve", "Sadržaj", "Plaćanje", "Tehničko"];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCat, setActiveCat] = useState("Sve");

  const filtered = FAQS.filter(f => activeCat === "Sve" || f.cat === activeCat);

  return (
    <section className="sec" style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap" style={{maxWidth:800,margin:"0 auto"}}>

        {/* Header */}
        <div style={{textAlign:"center",marginBottom:52}} className="reveal reveal-up">
          <div className="eye" style={{marginBottom:11}}>Pitanja</div>
          <h2 className="d2">Česta pitanja</h2>
          <p style={{color:"var(--muted)",fontSize:15,marginTop:14,lineHeight:1.75}}>
            Nije pronađeno? Piši nam na <span style={{color:"var(--blue)"}}>kontakt@maturiraj.hr</span>
          </p>
        </div>

        {/* Category tabs */}
        <div style={{display:"flex",gap:6,marginBottom:28,flexWrap:"wrap"}} className="reveal reveal-up">
          {CATS.map(c => (
            <button key={c} onClick={() => { setActiveCat(c); setOpenFaq(null); }}
              style={{padding:"7px 16px",borderRadius:99,fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .15s",
                background:activeCat===c ? "var(--blue)" : "rgba(255,255,255,.04)",
                border:activeCat===c ? "1px solid transparent" : "1px solid var(--bdr)",
                color:activeCat===c ? "#fff" : "var(--muted)",
                fontFamily:"var(--fb)"}}>
              {c}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="reveal reveal-up">
          {filtered.map(f => {
            const gi = FAQS.indexOf(f);
            const isOpen = openFaq === gi;
            return (
              <div key={gi} className={`acc${isOpen ? " open" : ""}`}>
                <div className="acc-h" onClick={() => setOpenFaq(isOpen ? null : gi)}>
                  <div className="acc-ic">{f.ic}</div>
                  <span className="acc-q">{f.q}</span>
                  <div className="acc-arr">+</div>
                </div>
                <div className="acc-b">{f.a}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal reveal-up" style={{marginTop:40,padding:"20px 24px",borderRadius:14,background:"rgba(75,123,255,.05)",border:"1px solid rgba(75,123,255,.12)",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div style={{fontSize:22}}>💬</div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:2}}>Još uvijek imaš pitanje?</div>
            <div style={{fontSize:13,color:"var(--muted)"}}>Odgovaramo u roku od 24h · Instagram @maturiraj.hr · kontakt@maturiraj.hr</div>
          </div>
          <button className="btn bp btn-sm" onClick={() => window.open("mailto:kontakt@maturiraj.hr")}>
            Kontaktiraj nas →
          </button>
        </div>

      </div>
    </section>
  );
}