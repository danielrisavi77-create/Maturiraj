"use client";
import {
  SUBJECTS,
  SUBJECTS_OBVEZNI,
  SUBJECTS_PRIRODO,
  SUBJECTS_DRUSTVO,
  SUBJECTS_UMJETNOST,
  SUBJECTS_KLASICNI,
} from "@/lib/data/subjects";
import { FAKULTETI } from "@/lib/data/fakulteti";

const GRUPE = [
  {label:"Obvezni",                  items:SUBJECTS_OBVEZNI},
  {label:"Prirodoslovno-matematički", items:SUBJECTS_PRIRODO},
  {label:"Društveno-humanistički",   items:SUBJECTS_DRUSTVO},
  {label:"Umjetnički",               items:SUBJECTS_UMJETNOST},
  {label:"Klasični jezici",          items:SUBJECTS_KLASICNI},
];

export default function PredmetiPrijemni({ onSkripte, onPrijemni }) {
  return (
    <section style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap" style={{padding:"80px 44px"}}>
        <div className="subjects-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"start"}}>

          {/* Lijevo — predmeti */}
          <div>
            <div className="eye" style={{marginBottom:10}}>Državna matura</div>
            <h2 className="d2" style={{marginBottom:7}}>{SUBJECTS.length} predmeta</h2>
            <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.78,marginBottom:22}}>
              Skripte za sve predmete, besplatno. Discere ispiti s timerom besplatni su uz prijavu, razrada rezultata uz pretplatu.
            </p>

            {GRUPE.map(grp => (
              <div key={grp.label} style={{marginBottom:14}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--muted)",marginBottom:7}}>
                  {grp.label}
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {grp.items.map(s => (
                    <div key={s.id} onClick={onSkripte}
                      style={{display:"flex",alignItems:"center",gap:7,padding:"7px 12px",borderRadius:99,border:`1px solid ${s.color}25`,background:"var(--bg)",cursor:"pointer",transition:"all .18s",fontSize:12,fontWeight:500}}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = s.color+"66";
                        e.currentTarget.style.background  = `${s.color}0d`;
                        e.currentTarget.style.color       = s.color;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = s.color+"25";
                        e.currentTarget.style.background  = "var(--bg)";
                        e.currentTarget.style.color       = "";
                      }}>
                      <span style={{color:s.color,fontSize:13}}>{s.sym}</span>
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desno — fakulteti */}
          <div>
            <div className="eye" style={{marginBottom:10}}>Prijemni ispiti</div>
            <h2 className="d2" style={{marginBottom:7}}>{FAKULTETI.length} studija</h2>
            <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.78,marginBottom:26}}>
              Gradivo, format ispita i Discere arhiva za svaki fakultet posebno.
            </p>

            <div style={{display:"flex",flexDirection:"column",gap:7}}>
              {FAKULTETI.map(f => (
                <div key={f.id} onClick={onPrijemni}
                  style={{display:"flex",alignItems:"center",gap:11,padding:"11px 14px",borderRadius:12,border:`1px solid ${f.color}20`,background:"var(--bg)",cursor:"pointer",transition:"all .18s"}}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = f.color+"44";
                    e.currentTarget.style.transform   = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = f.color+"20";
                    e.currentTarget.style.transform   = "none";
                  }}>
                  <span style={{fontSize:17}}>{f.sym}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:600}}>{f.short}</div>
                    <div style={{fontSize:11,color:"var(--muted)"}}>{f.predmeti.join(", ")}</div>
                  </div>
                  <span style={{fontSize:11,color:f.color,fontWeight:600}}>Info →</span>
                </div>
              ))}
            </div>

            {/* Uskoro */}
            <div style={{marginTop:16,padding:"14px 16px",borderRadius:12,background:"rgba(255,255,255,.02)",border:"1px dashed rgba(255,255,255,.08)"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                <span style={{fontSize:13}}>🔜</span>
                <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:"var(--muted)"}}>Uskoro</span>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {["🦷 Dentalna med.","🐾 Veterina","⚛️ Fizika","🌱 Agronomija","⚖️ Pravo Rijeka"].map(s => (
                  <div key={s} style={{padding:"4px 10px",borderRadius:99,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",fontSize:11,color:"var(--muted)",opacity:.7}}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}