// @ts-nocheck
'use client';
/* 5.4 (Sim 2/4): navigacija po pitanjima izdvojena iz sim.tsx bez promjene ponasanja.
   Ovdje zive filtri navigatora (tema + "sakrij rijesene"), paleta brojeva zadataka
   po sekcijama, mobilni navigator (donji sheet) i desni stupac (sidebar).
   Stanje i dalje zivi u Sim-u i stize propsima — nista se ne duplira.
   JSX, klase, stilovi i stringovi prepisani su doslovno iz Sim-a; jedina razlika
   je da se "skoci na zadatak" i "zatvori sheet" predaju kao onPick/onJump. */
import React from 'react';
import { TOPIC_LABELS } from '../core/state';
import { chk, hasAns } from '../core/grading';
const{createElement:e}=React;

// Filtri iznad palete: odabir teme (skace na prvi zadatak te teme) i "Sakrij rijesene".
// onJump se zove samo kad je skok stvarno izveden — u sheetu zatvara sheet.
export function NavFilterControls({QSX,navTopicFilter,setNavTopicFilter,hideSolved,setHideSolved,goTo,onJump}){
  const labels=[...new Set(QSX.map(qq=>TOPIC_LABELS[qq.topic]||qq.topic))];
  if(labels.length<2)return null;
  return e("div",{className:"nav-filters",style:{display:"flex",flexDirection:"row",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:14}},
    e("select",{value:navTopicFilter||"",onChange:ev=>{const v=ev.target.value||null;setNavTopicFilter(v);if(v){const ix=QSX.findIndex(qq=>(TOPIC_LABELS[qq.topic]||qq.topic)===v);if(ix>=0){goTo(ix);if(onJump)onJump();}}},style:{flex:"1 1 160px",minWidth:0,padding:"9px 12px",borderRadius:"var(--r)",border:"1px solid var(--bdr2)",background:"var(--s2)",color:"var(--text)",fontSize:13,fontWeight:600,fontFamily:"var(--fb)",cursor:"pointer"}},
      e("option",{value:""},"🔍 Filtriraj po temi"),
      labels.map((l,i)=>e("option",{key:l||("__t"+i),value:l},l))),
    e("button",{className:"nf-toggle"+(hideSolved?" on":""),onClick:()=>setHideSolved(v=>!v)},(hideSolved?"✓ ":"")+"Sakrij riješene"));
}

// Paleta brojeva po sekcijama (DIO 1 / DIO 2).
// dimByLabel: sheet je zatecenim kodom usporedivao oznaku teme, sidebar sirovi topic — cuvamo obje varijante.
// sectionStyle: sheet ima marginBottom:12 na omotacu sekcije, sidebar nema.
export function QGridSections({sections,QSX,cur,answers,flag,rev,done,examMode,hideSolved,navTopicFilter,dimByLabel,sectionStyle,onPick}){
  return sections.map((sec,si)=>{
    const range=QSX.slice(sec.from,sec.to+1);
    return e("div",{key:si,style:sectionStyle},
      e("div",{className:"section-divider"},sec.label.split(" - ")[0].trim()),
      e("div",{className:"qgrid"},range.map((qq,ri)=>{
        const qi=sec.from+ri;
        if(hideSolved&&hasAns(answers[qq.id])&&qi!==cur)return null;
        const isAns=hasAns(answers[qq.id]);
        const isF=flag[qq.id];
        const _chk2=done||rev[qq.id];const ok2=_chk2?chk(qq,answers[qq.id]):null;
        let cls="qgrid-btn";
        if(ok2===true) cls+=" ok";
        else if(ok2===false) cls+=" bad";
        else if(isAns) cls+=" ans";
        if(qi===cur) cls+=" cur";
        if(isF) cls+=" flag";
        const _tv=dimByLabel?(TOPIC_LABELS[qq.topic]||qq.topic):qq.topic;
        if(navTopicFilter&&_tv!==navTopicFilter) cls+=" nf-dim";
        return e("button",{key:qi,className:cls,onClick:()=>onPick(qi)},qi+1,(!examMode&&ok2===null&&!isAns&&qi!==cur&&!isF)&&e("span",{key:"d",className:"qd-dot qd-"+(qq.points>=3?"tesko":qq.points===2?"srednje":"lako")}));
      })));
  });
}

// Mobilni navigator — donji sheet preko cijelog ekrana.
export function SimNavSheet({QSX,sections,cur,answers,flag,rev,done,examMode,hideSolved,setHideSolved,navTopicFilter,setNavTopicFilter,goTo,onClose}){
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:ev=>{if(ev.target===ev.currentTarget)onClose();}},
    e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:"1px solid var(--bdr)",padding:"18px 18px calc(18px + env(safe-area-inset-bottom))",width:"100%",maxWidth:560,maxHeight:"70vh",overflowY:"auto",boxShadow:"0 -10px 40px -10px rgba(0,0,0,.4)"}},
      e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:18}},"Navigator"),
        e("button",{onClick:onClose,style:{background:"var(--s2)",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--muted)",fontFamily:"var(--fb)"}},"✕")),
      e(NavFilterControls,{QSX,navTopicFilter,setNavTopicFilter,hideSolved,setHideSolved,goTo,onJump:onClose}),
      e(QGridSections,{sections,QSX,cur,answers,flag,rev,done,examMode,hideSolved,navTopicFilter,dimByLabel:true,sectionStyle:{marginBottom:12},onPick:qi=>{goTo(qi);onClose();}}),
      e("div",{style:{marginTop:8,display:"flex",gap:14,flexWrap:"wrap",fontSize:10.5,color:"var(--muted)"}},
        e("span",null,"■ riješeno"),e("span",null,"⚑ označeno"),e("span",null,"○ prazno"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--green)"}}),"lako"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--gold)"}}),"srednje"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--red)"}}),"teško"))
    ));
}

// Desni stupac — navigator na sirokom ekranu + popis precaca.
export function SimSidebar({QSX,sections,cur,answers,flag,rev,done,examMode,hideSolved,setHideSolved,navTopicFilter,setNavTopicFilter,goTo}){
  return e("div",{className:"sidebar"},
    e("h4",null,"Navigator"),
    e(NavFilterControls,{QSX,navTopicFilter,setNavTopicFilter,hideSolved,setHideSolved,goTo}),
    e(QGridSections,{sections,QSX,cur,answers,flag,rev,done,examMode,hideSolved,navTopicFilter,dimByLabel:false,sectionStyle:undefined,onPick:qi=>goTo(qi)}),
    e("div",{style:{marginTop:14,fontSize:11,color:"var(--muted)",lineHeight:1.7}},
      e("div",null,"⚑ F  -  označi pitanje"),
      e("div",null,"🔖 Shift+F  -  spremi za kasnije"),
      e("div",null,"← → tipke  -  navigacija"),
      e("div",null,"A/B/C/D  -  odabir opcije"),
      e("div",null,"Enter  -  provjeri/nastavi")
    )
  );
}
