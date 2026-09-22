// @ts-nocheck
'use client';
/* 5.4 (Sim 2/4): sat i sve sto visi o njemu, izdvojeno iz sim.tsx bez promjene ponasanja.
   StickyMini  — mini traka na vrhu kad se stranica skrola (broj zadatka, napredak, sat)
   TimerAlert  — obavijest o preostalom vremenu / kraju ispita
   TimeBudget  — podjela vremena na DIO 1 / DIO 2 prema bodovima
   PaceHint    — procjena tempa i usporedba s proslim pokusajem ("duh")
   Tajmer i dalje tece u useExamSession; ovdje se samo prikazuje. */
import React from 'react';
import { hasAns } from '../core/grading';
import { fmt2 } from './helpers';
const{createElement:e}=React;

export function StickyMini({cur,QSX,timerDur,timer,timerCls}){
  return e("div",{className:"sticky-mini"},
    e("span",{className:"sm-q"},"Z "+(cur+1)+"/"+QSX.length),
    e("div",{className:"sm-prog"},e("div",{className:"sm-fill",style:{width:Math.round((cur+1)/QSX.length*100)+"%"}})),
    timerDur&&e("span",{className:"sm-timer "+timerCls,style:{color:timerCls==="danger"?"var(--red)":timerCls==="warn"?"var(--gold)":"var(--muted)"}},timer.d));
}

export function TimerAlert({timerAlert,onDismiss}){
  return e("div",{
    style:{position:"fixed",bottom:20,right:20,zIndex:150,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 18px",fontSize:13,fontWeight:600,color:timerAlert===0?"var(--red)":"var(--gold)",boxShadow:"var(--shadow)"},
    onClick:onDismiss
  },timerAlert===0?"⏰ Ispit završen!":`⚠️ Preostalo: ${fmt2(timerAlert)}`);
}

export function TimeBudget({QSX,qTimes,timerDur,mcCount}){
  let p1=0,p2=0,el1=0,el2=0;
  QSX.forEach((qq,i)=>{const pts=qq.points||1;const t=qTimes[qq.id]||0;if(i<mcCount){p1+=pts;el1+=t;}else{p2+=pts;el2+=t;}});
  const tot=p1+p2||1;const b1=Math.max(1,Math.round(timerDur*p1/tot/60)),b2=Math.max(1,Math.round(timerDur*p2/tot/60));
  const m1=Math.round(el1/60),m2=Math.round(el2/60);
  const seg=(lbl,m,bud)=>{const over=m>bud;const near=m>bud*0.85;return e("div",{className:"tb-seg"},
    e("span",{className:"tb-lbl"},lbl),e("span",{className:"tb-val",style:{color:over?"var(--red)":near?"var(--gold)":"var(--muted)"}},m+"/"+bud+" min"));};
  return e("div",{className:"time-budget"},e("span",{className:"tb-title"},"⏱️ Budžet vremena"),seg("DIO 1",m1,b1),seg("DIO 2",m2,b2));
}

// Procjena tempa; vraca null u istim slucajevima kao zatecena IIFE u Sim-u.
export function PaceHint({QSX,answers,timerDur,timer,done,examMode,ghost}){
  if(!timerDur||done||examMode) return null;
  const answeredN=QSX.filter(qq=>hasAns(answers[qq.id])).length;
  if(answeredN<3) return null;
  const elapsed=timerDur-timer.s;
  const avg=elapsed/answeredN;
  const remaining=QSX.length-answeredN;
  const delta=Math.round((timer.s-remaining*avg)/60);
  if(remaining===0) return null;
  const ahead=delta>=0;
  const lots=delta>Math.round(timerDur/120);
  let ghostPill=null;
  if(ghost&&ghost.qTimes){
    let priorSum=0,cnt=0;
    QSX.forEach(qq=>{if(hasAns(answers[qq.id])&&ghost.qTimes[qq.id]!=null){priorSum+=ghost.qTimes[qq.id];cnt++;}});
    if(cnt>=2){
      const gd=Math.round(priorSum-elapsed);
      const gAhead=gd>=0;
      ghostPill=e("span",{className:"pill"+(gAhead?" pill-blue":"")},
        gAhead?"👻 +"+gd+"s ispred prošlog sebe":"👻 "+Math.abs(gd)+"s iza prošlog sebe");
    }
  }
  return e("div",{style:{maxWidth:1100,margin:"0 auto",padding:"6px 20px 0",display:"flex",justifyContent:"flex-end",gap:8,flexWrap:"wrap"}},
    ghostPill,
    e("span",{className:"pill "+(ahead?"pill-green":"pill-red")},
      ahead
        ?(lots?"⏱ Odličan tempo — imat ćeš vremena za provjeru"
              :"⏱ Na ovom tempu završavaš ~"+Math.max(1,delta)+" min ranije")
        :"⏱ Na ovom tempu kasniš ~"+Math.abs(delta)+" min — ubrzaj"));
}
