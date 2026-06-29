'use client';
import React, { useState, Fragment } from 'react';
import { EXAMS, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e } from '../utils/helpers';
import { POJMOVNIK, POJMOVNIK_HRV } from '../data/pojmovnikData';
import { YearGroup } from './HomeScreen';

function OnboardingScreen({onDone}){
  const[step,setStep]=useState(0);
  const[razred,setRazred]=useState(null);
  const[slabeTeme,setSlabeTeme]=useState(new Set());
  const[cilj,setCilj]=useState(20);

  const teme=[
    {k:"jez_gram",l:"Gramatika"},
    {k:"jez_pravopis",l:"Pravopis"},
    {k:"jez_stil",l:"Stilistika"},
    {k:"jez_leks",l:"Leksikologija"},
    {k:"knj_analiza",l:"Književna analiza"},
    {k:"knj_moderna",l:"Moderna i avangarda"},
    {k:"knj_svjetska",l:"Svjetska književnost"},
    {k:"knj_versif",l:"Versifikacija"},
  ];

  const ciljevi=[
    {v:10,l:"Lagano",d:"10 pitanja · ~10 min"},
    {v:20,l:"Redovito",d:"20 pitanja · ~20 min"},
    {v:40,l:"Intenzivno",d:"40 pitanja · ~40 min"},
    {v:80,l:"Maratonski",d:"80 pitanja · ~80 min"},
  ];

  function togTema(k){
    setSlabeTeme(prev=>{
      const next=new Set(prev);
      next.has(k)?next.delete(k):next.add(k);
      return next;
    });
  }

  function finish(){
    onDone({
      razred,
      slabeTeme:[...slabeTeme],
      dnevniCilj:cilj,
      onboarded:true,
    });
  }

  const stepStyle={maxWidth:520,margin:"0 auto",padding:"0 20px"};
  const btnNext={
    className:"btn btn-p",
    style:{width:"100%",padding:"13px",fontSize:15,marginTop:24,borderRadius:"var(--r)"}
  };

  return e("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 0",background:"var(--bg)"}},
    /* Progress dots */
    e("div",{style:{display:"flex",gap:8,marginBottom:40}},
      [0,1,2].map(i=>e("div",{key:i,style:{
        width:i===step?24:8,height:8,borderRadius:99,
        background:i<=step?"var(--blue)":"var(--s3)",
        transition:"all .3s"
      }}))
    ),

    step===0&&e("div",{style:stepStyle,className:"up"},
      e("div",{style:{fontSize:32,marginBottom:16,textAlign:"center"}},"👋"),
      e("h2",{style:{fontFamily:"var(--fh)",fontSize:28,marginBottom:8,textAlign:"center",letterSpacing:"-.02em"}},"Dobrodošao/la u Discere"),
      e("p",{style:{color:"var(--muted)",fontSize:15,lineHeight:1.7,textAlign:"center",marginBottom:32}},"Brzo postavljanje da ti prilagodimo iskustvo."),
      e("div",{style:{fontSize:13,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12}},"Koji si razred?"),
      e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}},
        ["3. razred","4. razred — matura ove godine","Maturant/ica — druga šansa","Učenik/ica — ponavljam gradivo"].map(r=>
          e("button",{key:r,onClick:()=>setRazred(r),
            style:{padding:"14px 16px",borderRadius:"var(--r)",border:`2px solid ${razred===r?"var(--blue)":"var(--bdr2)"}`,
              background:razred===r?"var(--blue-d)":"var(--s2)",
              color:razred===r?"var(--blue)":"var(--text)",
              fontFamily:"var(--fb)",fontSize:13,fontWeight:razred===r?700:400,
              cursor:"pointer",transition:"all .15s",textAlign:"left"}},r)
        )
      ),
      e("button",{...btnNext,onClick:()=>razred&&setStep(1),
        style:{...btnNext.style,opacity:razred?1:.4,cursor:razred?"pointer":"default"}},
        "Dalje →")
    ),

    step===1&&e("div",{style:stepStyle,className:"up"},
      e("div",{style:{fontSize:32,marginBottom:16,textAlign:"center"}},"🎯"),
      e("h2",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:8,textAlign:"center",letterSpacing:"-.02em"}},"Gdje si najslabiji/a?"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.7,textAlign:"center",marginBottom:24}},"Odaberi teme — prilagodit ćemo preporuke. Možeš preskočiti."),
      e("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:8}},
        teme.map(({k,l})=>
          e("button",{key:k,onClick:()=>togTema(k),
            style:{padding:"8px 16px",borderRadius:99,
              border:`1px solid ${slabeTeme.has(k)?"var(--blue)":"var(--bdr2)"}`,
              background:slabeTeme.has(k)?"var(--blue-d)":"var(--s2)",
              color:slabeTeme.has(k)?"var(--blue)":"var(--muted)",
              fontFamily:"var(--fb)",fontSize:13,fontWeight:slabeTeme.has(k)?600:400,
              cursor:"pointer",transition:"all .15s"}},l)
        )
      ),
      e("button",{...btnNext,onClick:()=>setStep(2)},"Dalje →"),
      e("button",{className:"btn btn-g",
        style:{width:"100%",padding:"10px",fontSize:13,marginTop:8,borderRadius:"var(--r)"},
        onClick:()=>setStep(2)},"Preskočiti →")
    ),

    step===2&&e("div",{style:stepStyle,className:"up"},
      e("div",{style:{fontSize:32,marginBottom:16,textAlign:"center"}},"🔥"),
      e("h2",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:8,textAlign:"center",letterSpacing:"-.02em"}},"Postavi dnevni cilj"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.7,textAlign:"center",marginBottom:24}},"Koliko pitanja želiš riješiti svaki dan? Možeš promijeniti kasnije."),
      e("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:8}},
        ciljevi.map(({v,l,d})=>
          e("button",{key:v,onClick:()=>setCilj(v),
            style:{padding:"14px 18px",borderRadius:"var(--r)",
              border:`2px solid ${cilj===v?"var(--blue)":"var(--bdr2)"}`,
              background:cilj===v?"var(--blue-d)":"var(--s2)",
              fontFamily:"var(--fb)",cursor:"pointer",transition:"all .15s",
              display:"flex",justifyContent:"space-between",alignItems:"center"}},
            e("span",{style:{fontSize:14,fontWeight:700,color:cilj===v?"var(--blue)":"var(--text)"}},l),
            e("span",{style:{fontSize:12,color:"var(--muted)"}},d)
          )
        )
      ),
      e("button",{...btnNext,onClick:finish},"Počni vježbati! 🚀")
    )
  );
}

function PracticeListScreen({onBack,onPractice,onExamMode,userData,customQs,onImporter}){
  const years=[...new Set(Object.values(EXAMS).map(e=>e.year))].sort((a,b)=>b-a);
  const hasCustom=customQs&&customQs.length>0;
  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🎯 Vježbanje"),
      e("span",{className:"nbadge"},Object.keys(EXAMS).length+" ispita")
    ),
    e("div",{style:{maxWidth:760,margin:"0 auto",padding:"24px 20px 80px"}},
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:6}},"Odaberi ispit"),
      e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:24,lineHeight:1.6}},
        "Klikni na ispit za vježbanje — odmah vidiš točan odgovor i AI objašnjenje uz svako pitanje."),
      /* Vlastita pitanja — uvijek vidljivo */
      hasCustom
        ? e("div",{style:{marginBottom:16,
            background:"rgba(234,179,8,.06)",border:"1px solid rgba(234,179,8,.2)",
            borderRadius:"var(--r)",padding:"12px 16px",display:"flex",alignItems:"center",
            justifyContent:"space-between",cursor:"pointer"},
            onClick:()=>onPractice("custom_session")},
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:14,color:"var(--gold)",marginBottom:2}},
                "📥 Vlastita pitanja ("+customQs.length+")"),
              e("div",{style:{fontSize:12,color:"var(--muted)"}},"Vježbaj iz vlastitog skupa pitanja")
            ),
            e("span",{style:{color:"var(--gold)",fontWeight:700}},"→")
          )
        : e("div",{style:{marginBottom:16,
            background:"rgba(234,179,8,.04)",border:"1px dashed rgba(234,179,8,.25)",
            borderRadius:"var(--r)",padding:"12px 16px",display:"flex",alignItems:"center",
            justifyContent:"space-between",gap:12}},
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:14,color:"var(--gold)",marginBottom:2}},
                "📥 Vlastita pitanja"),
              e("div",{style:{fontSize:12,color:"var(--muted)"}},"Još nisi uvezao/la vlastita pitanja")
            ),
            onImporter&&e("button",{onClick:onImporter,style:{background:"rgba(234,179,8,.15)",
              border:"1px solid rgba(234,179,8,.3)",borderRadius:"var(--r)",
              color:"var(--gold)",fontWeight:700,fontSize:12,cursor:"pointer",
              padding:"6px 12px",whiteSpace:"nowrap",fontFamily:"var(--fb)"}},
              "+ Uvezi pitanja")
          ),
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",overflow:"hidden"}},
        years.map(year=>
          e(YearGroup,{
            key:year,year,
            examList:Object.values(EXAMS).filter(ex=>Array.isArray(ex.qs)),
            onExam:(key)=>onPractice(key)
          })
        )
      )
    )
  );
}

/* ─── POJMOVNIK TIP ─── */
function PojmTip({pojam,children}){
  const[show,setShow]=React.useState(false);
  const _p=pojam.toLowerCase().trim();
  const _SVE=Object.assign({},POJMOVNIK_HRV,POJMOVNIK);
  const _noHR=_p.replace(" (hr)","").replace("(hr)","").trim();
  const _noSlash=_p.includes("/")?_p.split("/")[0].trim():_p;
  const def=_SVE[_p]||_SVE[_noHR]||_SVE[_noSlash]||_SVE[_p.split(" ")[0]];
  if(!def) return e("span",null,children||pojam);

  return e("span",{style:{display:"inline"}},
    e("span",{
      onClick:ev=>{ev.stopPropagation();setShow(s=>!s);},
      style:{
        color:"var(--blue)",cursor:"pointer",fontWeight:600,
        borderBottom:"2px dashed rgba(45,84,196,.5)",
        paddingBottom:1,display:"inline"
      }
    },children||pojam),
    show&&e("span",{style:{
      display:"block",
      margin:"6px 0 2px 0",
      background:"var(--bg)",
      border:"2px solid var(--blue)",
      borderRadius:"var(--r)",
      padding:"10px 12px",
      fontSize:12,lineHeight:1.7,
      color:"var(--text)",
      boxShadow:"0 4px 16px rgba(0,0,0,.15)",
    }},
      e("span",{style:{
        display:"flex",justifyContent:"space-between",
        alignItems:"center",marginBottom:6,gap:8
      }},
        e("strong",{style:{
          fontSize:10,textTransform:"uppercase",letterSpacing:".08em",
          color:"var(--blue)",fontFamily:"var(--fb)"
        }},pojam),
        e("span",{
          onClick:ev=>{ev.stopPropagation();setShow(false);},
          style:{cursor:"pointer",color:"var(--muted)",fontSize:16,lineHeight:1,flexShrink:0}
        },"×")
      ),
      def
    )
  );
}


export { OnboardingScreen, PracticeListScreen, PojmTip };
