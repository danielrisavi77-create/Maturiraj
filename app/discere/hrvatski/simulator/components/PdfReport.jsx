'use client';
// Puni PDF/ispisni izvještaj napretka za hrvatski (paritet s engleskim simulatorom).
// Koristi window.print() + print CSS koji sakrije sve osim #hrv-pdf-report.
// Sadržaj je svijetlo obojen (neovisno o dark modu) radi ispisa.
import React from 'react';
import { TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e } from '../utils/helpers';

function predGrade(avg){ if(avg>=90)return 5; if(avg>=75)return 4; if(avg>=60)return 3; if(avg>=50)return 2; return 1; }
function pctColor(p){ return p>=70?"#1e7a3e":p>=55?"#a8720a":"#c43030"; }

export default function PdfReport({userData,onBack}){
  const[printing,setPrinting]=React.useState(false);
  const history=userData?.history||[];
  const avg=history.length?Math.round(history.reduce((s,h)=>s+(h.pct||0),0)/history.length):null;
  const last10=[...history].reverse().slice(0,10);

  const topicStats={};
  history.forEach(h=>{
    if(!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([t,d])=>{
      if(!topicStats[t]) topicStats[t]={correct:0,total:0};
      topicStats[t].correct+=d.correct||0;
      topicStats[t].total+=d.total||0;
    });
  });
  const weak=Object.entries(topicStats)
    .map(([k,v])=>({k,pct:v.total?Math.round(v.correct/v.total*100):null}))
    .filter(t=>t.pct!==null&&t.pct<60)
    .sort((a,b)=>a.pct-b.pct).slice(0,6);

  const today=new Date().toLocaleDateString("hr");
  function doPrint(){ setPrinting(true); setTimeout(()=>{ try{window.print();}catch(e){} setPrinting(false); },300); }

  const card={background:"#fff",color:"#15110c",borderRadius:12,border:"1px solid #e6ded2",padding:"28px 30px"};
  const statBox={flex:"1 1 90px",textAlign:"center",padding:"12px 8px",background:"#faf7f1",border:"1px solid #ece4d6",borderRadius:10};
  const th={textAlign:"left",fontSize:11,textTransform:"uppercase",letterSpacing:".05em",color:"#8a7d68",padding:"6px 8px",borderBottom:"2px solid #ece4d6"};
  const td={padding:"7px 8px",borderBottom:"1px solid #f0ebe1",fontSize:13};

  return e("div",{className:"hrv-sim"},
    // ── Kontrole (ne ispisuje se) ──
    e("div",{className:"no-print",style:{display:"flex",alignItems:"center",gap:10,maxWidth:860,margin:"0 auto",padding:"16px 20px"}},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("div",{style:{flex:1}}),
      e("button",{className:"btn",style:{fontSize:13,padding:"8px 16px",background:"var(--blue)",color:"#fff",border:"none",borderRadius:"var(--r)",cursor:"pointer",fontWeight:700},
        onClick:doPrint,disabled:printing},printing?"Priprema…":"🖨️ Ispiši / spremi PDF")
    ),

    // ── Izvještaj (ispisuje se) ──
    e("div",{id:"hrv-pdf-report",style:{maxWidth:860,margin:"0 auto 60px",padding:"0 20px"}},
      e("div",{style:card},
        // Header
        e("div",{style:{display:"flex",alignItems:"center",gap:14,paddingBottom:16,borderBottom:"2px solid #ece4d6",marginBottom:20}},
          e("div",{style:{fontSize:34}},"📘"),
          e("div",{style:{flex:1}},
            e("div",{style:{fontSize:19,fontWeight:800,letterSpacing:"-.01em"}},"Maturiraj.hr — Izvještaj o napretku"),
            e("div",{style:{fontSize:13,color:"#8a7d68"}},"Hrvatski jezik — Matura simulator")
          ),
          e("div",{style:{fontSize:12,color:"#8a7d68"}},today)
        ),

        // Pregled
        history.length===0
          ? e("div",{style:{padding:"30px 0",textAlign:"center",color:"#8a7d68"}},"Još nema riješenih ispita — riješi barem jedan da generiraš izvještaj.")
          : e("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24}},
              e("div",{style:statBox},e("div",{style:{fontSize:24,fontWeight:800,color:pctColor(avg)}},avg+"%"),e("div",{style:{fontSize:11,color:"#8a7d68"}},"Prosjek")),
              e("div",{style:statBox},e("div",{style:{fontSize:24,fontWeight:800,color:pctColor(avg)}},predGrade(avg)+"/5"),e("div",{style:{fontSize:11,color:"#8a7d68"}},"Predikcija")),
              e("div",{style:statBox},e("div",{style:{fontSize:24,fontWeight:800}},history.length),e("div",{style:{fontSize:11,color:"#8a7d68"}},"Ispita")),
              e("div",{style:statBox},e("div",{style:{fontSize:24,fontWeight:800}},(userData?.streak||0)+"🔥"),e("div",{style:{fontSize:11,color:"#8a7d68"}},"Streak")),
              e("div",{style:statBox},e("div",{style:{fontSize:24,fontWeight:800}},userData?.xp||0),e("div",{style:{fontSize:11,color:"#8a7d68"}},"XP"))
            ),

        // Zadnjih N ispita
        history.length>0&&e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:14,fontWeight:700,marginBottom:8}},"Zadnjih "+last10.length+" ispita"),
          e("table",{style:{width:"100%",borderCollapse:"collapse"}},
            e("thead",null,e("tr",null,
              e("th",{style:th},"Ispit"),e("th",{style:th},"Način"),e("th",{style:th},"Datum"),
              e("th",{style:{...th,textAlign:"right"}},"Rezultat"),e("th",{style:{...th,textAlign:"right"}},"Ocjena"))),
            e("tbody",null,
              last10.map((h,i)=>e("tr",{key:i},
                e("td",{style:td},h.examLabel||h.examKey),
                e("td",{style:{...td,color:"#8a7d68"}},h.mode||"—"),
                e("td",{style:{...td,color:"#8a7d68"}},h.date||"—"),
                e("td",{style:{...td,textAlign:"right",fontWeight:700,color:pctColor(h.pct||0)}},(h.pct||0)+"%"),
                e("td",{style:{...td,textAlign:"right",fontWeight:700}},h.grade)
              ))
            )
          )
        ),

        // Slabe teme
        weak.length>0&&e("div",{style:{marginBottom:20}},
          e("div",{style:{fontSize:14,fontWeight:700,marginBottom:10}},"⚠️ Slabe teme (ispod 60%)"),
          weak.map(({k,pct})=>e("div",{key:k,style:{display:"flex",alignItems:"center",gap:10,marginBottom:7}},
            e("span",{style:{flex:"0 0 200px",fontSize:12}},TOPIC_LABELS[k]||k),
            e("div",{style:{flex:1,height:8,background:"#f0ebe1",borderRadius:99,overflow:"hidden"}},
              e("div",{style:{width:pct+"%",height:"100%",background:"#c43030"}})),
            e("span",{style:{flex:"0 0 38px",textAlign:"right",fontSize:12,fontWeight:700,color:"#c43030"}},pct+"%")
          ))
        ),

        // Footer
        e("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid #ece4d6",fontSize:11,color:"#8a7d68"}},
          e("span",null,"Generirano na maturiraj.hr"),
          e("span",null,today)
        )
      )
    ),

    e("style",null,
      "@media print{body *{visibility:hidden!important}"+
      "#hrv-pdf-report,#hrv-pdf-report *{visibility:visible!important}"+
      "#hrv-pdf-report{position:absolute;left:0;top:0;width:100%;max-width:100%;margin:0;padding:0}"+
      "#hrv-pdf-report .hrv-pdf-card,#hrv-pdf-report>div{border:none!important}}"
    )
  );
}
