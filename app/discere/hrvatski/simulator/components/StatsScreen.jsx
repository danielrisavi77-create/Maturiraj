'use client';
import React, { useState, Fragment } from 'react';
import { EXAMS, TOPIC_LABELS, LEVEL_NAMES, XP_LEVELS } from '../hrvatskiSimulatorData';
import { e, getLevel, xpProgress, xpToNext } from '../utils/helpers';
import { AnalyticsPanel } from './analytics/AnalyticsPanel';

function StatsScreen({userData,onBack,onResetOnboarding,isPro,onPaywall,onPdfReport}){
  const[tab,setTab]=useState("statistike");
  const[cilj,setCilj]=useState(userData?.dnevniCilj||20);
  const[potvrda,setPotvrda]=useState(null); // "napredak" | "sve"
  const history=userData?.history||[];

  function TabBtn({id,label}){
    return e("button",{
      onClick:()=>setTab(id),
      style:{
        padding:"7px 16px",borderRadius:99,fontSize:13,fontWeight:600,
        cursor:"pointer",transition:"all .15s",fontFamily:"var(--fb)",
        border:"1px solid "+(tab===id?"var(--blue)":"var(--bdr)"),
        background:tab===id?"var(--blue-d)":"transparent",
        color:tab===id?"var(--blue)":"var(--muted)"
      }
    },label);
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"Statistike & Postavke"),
      history.length>0&&onPdfReport&&e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:onPdfReport,title:"Ispiši / spremi PDF izvještaj napretka"},"🖨️ PDF"),
      history.length>0&&e("span",{className:"nbadge"},history.length+" ispita · "+(userData?.xp||0)+" XP")
    ),
    e("div",{className:"screen-enter",style:{maxWidth:860,margin:"0 auto",padding:"24px 20px 80px"}},

      /* Tab navigacija */
      e("div",{style:{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"}},
        e(TabBtn,{id:"statistike",label:"📊 Statistike"}),
        e(TabBtn,{id:"postavke",label:"⚙️ Postavke"})
      ),

      tab==="statistike"&&e("div",null,
        userData&&userData.xp>=0&&e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"20px",marginBottom:20}},
          e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12,flexWrap:"wrap"}},
            e("div",{className:"level-badge"},"⭐ "+(LEVEL_NAMES[getLevel(userData.xp||0)]||"Početnik")),
            userData?.streak>0&&e("div",{className:"streak-badge"},e("span",null,"🔥"),userData.streak+" dana zaredom"),
            e("div",{style:{marginLeft:"auto",fontSize:13,color:"var(--muted)"}},(userData.xp||0)+" XP ukupno · "+history.length+" ispita")
          ),
          e("div",{className:"xp-bar-wrap"},e("div",{className:"xp-bar",style:{width:xpProgress(userData.xp||0)+"%"}})),
          e("div",{className:"xp-label"},
            e("span",null,"Razina "+(getLevel(userData.xp||0)+1)),
            xpToNext(userData.xp||0)>0&&e("span",null,xpToNext(userData.xp||0)+" XP do sljedeće razine")
          )
        ),
        history.length===0
          ? e("div",{style:{textAlign:"center",padding:"60px 20px",color:"var(--muted)"}},
              e("div",{style:{fontSize:40,marginBottom:16}},"📊"),
              e("div",{style:{fontSize:16,fontFamily:"var(--fh)",marginBottom:8}},"Nema podataka"),
              e("p",null,"Riješi barem jedan ispit da bi vidio/la statistike.")
            )
          : e(AnalyticsPanel,{userData,defaultTab:"danas",isPro,onPaywall})
      ),

      tab==="postavke"&&e("div",{style:{display:"flex",flexDirection:"column",gap:16}},

        /* Dnevni cilj */
        e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px"}},
          e("div",{style:{fontWeight:700,fontSize:16,marginBottom:4}},"🎯 Dnevni cilj"),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:16,lineHeight:1.6}},
            "Koliko pitanja želiš riješiti svaki dan? Trenutno: "+(userData?.dnevniCilj||20)+" pitanja."),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            [{v:10,l:"Lagano",d:"~10 min"},{v:20,l:"Redovito",d:"~20 min"},{v:40,l:"Intenzivno",d:"~40 min"},{v:80,l:"Maratonski",d:"~80 min"}].map(({v,l,d})=>
              e("button",{key:v,
                onClick:()=>{setCilj(v);onResetOnboarding&&onResetOnboarding({dnevniCilj:v});},
                style:{
                  padding:"12px 16px",borderRadius:"var(--r)",cursor:"pointer",
                  display:"flex",justifyContent:"space-between",alignItems:"center",
                  border:"2px solid "+(cilj===v?"var(--blue)":"var(--bdr)"),
                  background:cilj===v?"var(--blue-d)":"var(--s2)",
                  fontFamily:"var(--fb)",transition:"all .15s"
                }},
                e("span",{style:{fontWeight:700,color:cilj===v?"var(--blue)":"var(--text)"}},[v+" pitanja · ",l]),
                e("span",{style:{fontSize:12,color:"var(--muted)"}},d)
              )
            )
          )
        ),

        /* Onboarding */
        e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px"}},
          e("div",{style:{fontWeight:700,fontSize:16,marginBottom:4}},"🔄 Onboarding"),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:16,lineHeight:1.6}},
            "Ponovi postavljanje razreda, slabih tema i dnevnog cilja."),
          e("button",{className:"btn btn-g",
            onClick:()=>onResetOnboarding&&onResetOnboarding({resetOnboarding:true})},
            "Ponovi onboarding →")
        ),

        /* Reset napretka */
        e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px"}},
          e("div",{style:{fontWeight:700,fontSize:16,marginBottom:4}},"🗑️ Brisanje podataka"),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:16,lineHeight:1.6}},
            "Pažnja — ova akcija je nepovratna."),
          e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
            potvrda===null&&e("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},
              e("button",{className:"btn btn-red",style:{fontSize:13},
                onClick:()=>setPotvrda("napredak")},
                "Obriši povijest ispita"),
              e("button",{className:"btn btn-red",style:{fontSize:13},
                onClick:()=>setPotvrda("sve")},
                "Obriši sve podatke")
            ),
            potvrda&&e("div",{style:{background:"var(--red-d)",border:"1px solid rgba(240,106,106,.3)",borderRadius:"var(--r)",padding:"14px 16px"}},
              e("div",{style:{fontSize:14,fontWeight:600,marginBottom:10}},
                potvrda==="napredak"
                  ?"Obrisati svu povijest ispita, greške i bookmarks?"
                  :"Obrisati SVE podatke (uključujući XP, streak, postavke)?"),
              e("div",{style:{display:"flex",gap:8}},
                e("button",{className:"btn btn-red",style:{fontSize:13},
                  onClick:()=>{
                    onResetOnboarding&&onResetOnboarding({clearType:potvrda});
                    setPotvrda(null);
                  }},"Da, obriši"),
                e("button",{className:"btn btn-g",style:{fontSize:13},
                  onClick:()=>setPotvrda(null)},"Odustani")
              )
            )
          )
        )
      )
    )
  );
}


export { StatsScreen };
