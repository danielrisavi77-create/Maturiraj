// @ts-nocheck
'use client';
/* 5.4 (Sim 2/4): zaglavlje aktivnog ispita izdvojeno iz sim.tsx bez promjene ponasanja.
   Sadrzi izlaz, naslov ispita, oznaku razine, gumbe za formule/kalkulator, izbornik
   "vise opcija" (skok na neodgovoreni, pauza, fokus mod), mobilni gumb navigatora,
   znacke vjezbe/rekorda/tocnosti i sat s budzetom vremena.
   Stanje ostaje u Sim-u i stize propsima; JSX, klase, stilovi i stringovi prepisani
   su doslovno. */
import React from 'react';
import { DS } from '../core/state';
import { grade } from '../core/progress';
import { hasAns } from '../core/grading';
import { vc } from './helpers';
import { TimeBudget } from './SimTimer';
const{createElement:e}=React;

export function SimHeader({
  exam,QSX,cur,answers,qTimes,practice,examMode,timedPractice,done,mcCount,
  timer,timerDur,timerCls,
  zen,setZen,zenSeen,setZenSeen,navMore,setNavMore,showCalc,setShowCalc,
  onExitAsk,onFormulas,onOpenNav,nextBlank,setPaused,
  bestPct,checkedN,correctN,accRatio,
}){
  return e("div",{className:"nav"},
    e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExitAsk},"✕",e("span",{className:"nav-btn-txt"}," Izlaz")),
    e("span",{className:"nav-title-hide",style:{fontFamily:"var(--fh)",fontSize:15,marginLeft:4,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,flex:"1 1 auto"}},exam.season==="session"?exam.label:exam.year+"  -  "+exam.label),
    e("span",{style:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99,
  background:exam.razina==="B"?"var(--teal-d)":"var(--blue-d)",
  border:"1px solid "+(exam.razina==="B"?"rgba(45,207,190,.3)":"rgba(74,144,217,.3)"),
  color:exam.razina==="B"?"var(--teal)":"var(--blue)",
  marginLeft:4,whiteSpace:"nowrap"
}},exam.razina==="B"?e(React.Fragment,null,"B",e("span",{className:"nav-btn-txt"}," · osnovna")):e(React.Fragment,null,"A",e("span",{className:"nav-btn-txt"}," · viša"))),
    e("span",{className:"nsp"}),
    e("button",{
      className:"btn btn-g",title:"Formule",
      style:{fontSize:12,padding:"5px 9px"},
      onClick:onFormulas
    },e("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round"},e("rect",{x:5,y:3,width:14,height:18,rx:2}),e("path",{d:"M9 8h6M9 12h4M9 16h5"})),e("span",{className:"nav-btn-txt"}," Formule")),
    e("button",{className:"btn btn-g",title:"Kalkulator",style:{fontSize:12,padding:"5px 9px",background:showCalc?"var(--blue-d)":undefined,borderColor:showCalc?"var(--blue-b)":undefined,color:showCalc?"var(--blue)":undefined},
      onClick:()=>setShowCalc(v=>!v)},e("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round"},e("rect",{x:5,y:3,width:14,height:18,rx:2}),e("path",{d:"M8 7h8"}),e("path",{d:"M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"})),e("span",{className:"nav-btn-txt"}," Kalkulator")),
    e("div",{style:{position:"relative",display:"inline-flex"}},
      e("button",{className:"btn btn-g",title:"Više opcija",style:{position:"relative",fontSize:12,padding:"5px 9px"},onClick:()=>setNavMore(v=>!v)},"⋯",
        !zenSeen&&!zen&&e("span",{style:{position:"absolute",top:-4,right:-4,width:8,height:8,borderRadius:99,background:"var(--red)",border:"1.5px solid var(--s1)",boxShadow:"0 0 0 2px rgba(248,113,113,.25)"}})),
      navMore&&e("div",{onClick:()=>setNavMore(false),style:{position:"fixed",inset:0,zIndex:55}}),
      navMore&&e("div",{style:{position:"absolute",top:"112%",left:0,zIndex:56,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",boxShadow:"0 12px 32px -8px rgba(0,0,0,.35)",padding:7,display:"flex",flexDirection:"column",gap:2,minWidth:212}},
        QSX.some(qq=>!hasAns(answers[qq.id]))&&e("button",{key:"blank",onClick:()=>{setNavMore(false);nextBlank();},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"⤵"),"Skoči na neodgovoreni"),
        practice&&!examMode&&e("button",{key:"pause",onClick:()=>{setNavMore(false);setPaused(true);},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"⏸"),"Pauziraj"),
        e("button",{key:"zen",onClick:()=>{setNavMore(false);setZen(z=>!z);if(!zenSeen){try{DS.set("mat_zen_seen","1");}catch(e){}setZenSeen(true);}},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:zen?"var(--blue-d)":"transparent",color:zen?"var(--blue)":"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"🧘"),zen?"Izađi iz fokus moda":"Fokus mod")
      )),
    e("button",{className:"btn btn-g nav-mobile-only",title:"Navigator zadataka",
      style:{fontSize:12,padding:"5px 9px"},onClick:onOpenNav},"☰",e("span",{className:"nav-btn-txt"}," "+(cur+1)+"/"+QSX.length)),
    (!examMode&&bestPct!=null)&&e("span",{className:"record-pill",title:"Tvoj najbolji rezultat na ovom ispitu"},"🏆 "+bestPct+"%"),
    practice&&checkedN>0&&e("div",{className:"acc-ring",title:"Točnost u vježbi: "+correctN+"/"+checkedN},
      e("svg",{width:30,height:30,viewBox:"0 0 36 36"},
        e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:"var(--bdr2)",strokeWidth:3.2}),
        e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:accRatio>=0.7?"var(--green)":accRatio>=0.4?"var(--gold)":"var(--red)",strokeWidth:3.2,strokeDasharray:(accRatio*97.4).toFixed(1)+" 97.4",strokeLinecap:"round",transform:"rotate(-90 18 18)",style:{transition:"stroke-dasharray .4s"}})),
      e("span",{className:"acc-ring-txt"},correctN+"/"+checkedN)),
    practice&&checkedN>=3&&(()=>{const g=grade(Math.round(accRatio*100));return e("span",{className:"proj-grade",title:"Projicirana ocjena na temelju dosad provjerenog",style:{background:g>=4?"var(--green-d)":g>=3?"var(--gold-d)":"var(--red-d)",borderColor:g>=4?"rgba(61,214,140,.4)":g>=3?"var(--gold-b)":"rgba(248,113,113,.4)",color:g>=4?"var(--green)":g>=3?"var(--gold)":"var(--red)"}},"≈ ocjena "+g);})(),
    practice&&e("span",{className:"nbadge"},"Vježba"),
    timedPractice&&!examMode&&e("span",{className:"nbadge",style:{background:"var(--gold-d)",borderColor:vc("--gold-b"),color:vc("--gold")}},"Timed"),
    timerDur&&e("span",{className:"timer "+timerCls},timer.d),

    timerDur&&!done&&mcCount>0&&mcCount<QSX.length&&!examMode&&e(TimeBudget,{QSX,qTimes,timerDur,mcCount})
  );
}
