// @ts-nocheck
'use client';
/* 5.4 (Sim 4/4): modali i preklapanja ekrana rjesavanja izdvojeni iz sim.tsx
   bez promjene ponasanja: rijesen slican primjer, pauza, pregled prije predaje,
   popis precaca na tipkovnici, zagrijavanje i modal prekida ispita.
   Stanje i dalje zivi u Sim-u i stize propsima; jedina razlika je da se
   zatvaranje predaje kao onClose / onResume, a predaja ispita kao finishExam.
   JSX, klase, stilovi i stringovi prepisani su doslovno iz Sim-a. */
import React from 'react';
import { __rk, TOPIC_LABELS } from '../core/state';
import { renderOptText, renderQText } from '../core/mathText';
import { chk, hasAns } from '../core/grading';
import { grade } from '../core/progress';
import { WarmupItem } from '../tools/hints';
const{createElement:e}=React;

// Rijesen slican primjer iz iste teme (otvara ga "Pokazi slican rijeseni zadatak").
export function ExampleModal({example,onClose}){
  return e("div",{className:"ex-overlay",onClick:onClose},
      e("div",{className:"ex-card",onClick:ev=>ev.stopPropagation()},
        e("div",{className:"ex-head"},
          e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"var(--blue)"}},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer \u00b7 "+(TOPIC_LABELS[example.topic]||example.topic)),
          e("button",{onClick:onClose,className:"ex-x"},"\u2715")),
        e("div",{className:"ex-q"},renderQText(example.q)),
        example.opts&&e("div",{style:{margin:"10px 0",fontSize:13,color:"var(--muted)"}},example.opts.map((o,oi)=>e("div",{key:oi,style:{padding:"3px 0"}},"ABCD"[oi]+") ",renderOptText(o)))),
        e("div",{className:"ex-steps-label"},"Postupak:"),
        e("div",{className:"ex-steps"},(example.steps||[]).filter(st=>st&&st.note!=="diagnostika").map((st,i)=>{
          const txt=typeof st==="string"?st:(st&&st.txt)||"";
          return e("div",{key:i,className:"ex-step"},e("span",{className:"ex-step-n"},i+1),e("span",null,renderOptText(txt)));
        })),
        e("div",{style:{marginTop:14,fontSize:11.5,color:"var(--muted)",fontStyle:"italic"}},"Ovo je drugi zadatak iste teme \u2014 iskoristi postupak kao predlo\u017eak, pa rije\u0161i svoj.")
      ));
}

// Pauza ispita - zaustavlja sat i prekriva ekran.
export function PauseOverlay({timerDur,onResume}){
  return e("div",{className:"pause-overlay",onClick:onResume},
      e("div",{className:"pause-card",onClick:ev=>ev.stopPropagation()},
        e("div",{style:{fontSize:46,marginBottom:8}},"\u23f8\ufe0f"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:6}},"Pauzirano"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18}},timerDur?"Vrijeme je zaustavljeno. Predahni i nastavi kad bude\u0161 spreman/na.":"Predahni i nastavi kad bude\u0161 spreman/na."),
        e("button",{className:"btn btn-blue",style:{padding:"11px 26px",fontSize:15},onClick:onResume},"\u25b6 Nastavi")));
}

// Pregled prije predaje: neodgovoreni, oznaceni i projicirana ocjena.
export function ReviewSheet({QSX,answers,flag,rev,goTo,finishExam,onClose}){
      const unans=QSX.filter(qq=>!hasAns(answers[qq.id]));
      const flg=QSX.filter(qq=>flag[qq.id]);
      const idxOf=qq=>QSX.indexOf(qq);
      return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:ev=>{if(ev.target===ev.currentTarget)onClose();}},
        e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:420,width:"100%",maxHeight:"82vh",overflowY:"auto",boxShadow:"var(--shadow-lg)"}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:21,marginBottom:6}},"Pregled prije predaje"),
          e("div",{style:{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}},
            e("span",{className:"pill pill-green"},"\u2713 "+(QSX.length-unans.length)+" rije\u0161eno"),
            unans.length>0&&e("span",{className:"pill pill-red"},"\u25cb "+unans.length+" neodgovoreno"),
            flg.length>0&&e("span",{className:"pill pill-gold"},"\u2691 "+flg.length+" ozna\u010deno")),
          (()=>{const ch=QSX.filter(qq=>rev[qq.id]).length;if(ch<1)return null;const co=QSX.filter(qq=>rev[qq.id]&&chk(qq,answers[qq.id])===true).length;const g=grade(Math.round(co/ch*100));return e("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,marginBottom:14,background:g>=4?"var(--green-d)":g>=3?"var(--gold-d)":"var(--red-d)",border:"1px solid "+(g>=4?"rgba(61,214,140,.35)":g>=3?"var(--gold-b)":"rgba(248,113,113,.35)")}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:34,lineHeight:1,color:g>=4?"var(--green)":g>=3?"var(--gold)":"var(--red)"}},g),
            e("div",null,e("div",{style:{fontSize:12.5,fontWeight:700,color:"var(--text)"}},"Projicirana ocjena"),e("div",{style:{fontSize:11,color:"var(--muted)"}},"na temelju "+co+"/"+ch+" to\u010dnih dosad")));})(),
          unans.length>0&&e("div",{style:{marginBottom:14}},
            e("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:".05em"}},"Neodgovoreni \u2014 klikni za skok"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},unans.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));onClose();},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.35)",color:"var(--red)"}},idxOf(qq)+1)))),
          flg.length>0&&e("div",{style:{marginBottom:16}},
            e("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:".05em"}},"Ozna\u010deni za pregled"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},flg.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));onClose();},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)"}},idxOf(qq)+1)))),
          unans.length>0&&e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:14,lineHeight:1.5}},"Neodgovoreni zadaci nose 0 bodova. Mo\u017ee\u0161 se vratiti i rije\u0161iti ih prije predaje."),
          e("div",{style:{display:"flex",gap:8}},
            e("button",{onClick:()=>onClose(),className:"btn btn-g",style:{flex:1,padding:"11px"}},"\u2190 Vrati se"),
            e("button",{onClick:()=>{onClose();finishExam();},className:"btn btn-gold",style:{flex:1,padding:"11px"}},"Predaj ispit \u2713")))
      );
}

// Popis precaca na tipkovnici (otvara se tipkom ?).
export function KbdHelp({onClose}){
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:280,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>onClose()},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"24px 26px",maxWidth:380,width:"100%",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:19,marginBottom:14}},"\u2328\uFE0F Pre\u010daci na tipkovnici"),
        [["A \u2013 D","Odaberi odgovor"],["Enter","Provjeri / sljede\u0107i"],["\u2190 / \u2192","Prethodni / sljede\u0107i zadatak"],["F","Ozna\u010di zadatak \u2691"],["Shift + F","Spremi zadatak \uD83D\uDD16"],["?","Ovaj popis"]].map(([k,d],i)=>
          e("div",{key:i,style:{display:"flex",alignItems:"center",gap:12,padding:"7px 0",borderBottom:i<5?"1px solid var(--bdr)":"none"}},
            e("kbd",{style:{fontFamily:"var(--fb)",fontSize:11.5,fontWeight:800,background:"var(--s2)",border:"1px solid var(--bdr2)",borderBottom:"2px solid var(--bdr2)",borderRadius:6,padding:"3px 9px",minWidth:64,textAlign:"center",color:"var(--text)"}},k),
            e("span",{style:{fontSize:12.5,color:"var(--muted)"}},d))),
        e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:12,textAlign:"center"}},"Pritisni ? ili klikni izvan za zatvaranje")));
}

// Zagrijavanje prije vjezbe (K8).
export function WarmupModal({onClose}){
  return e("div",{style:{position:"fixed",inset:0,zIndex:260,background:"rgba(10,15,28,.82)",display:"flex",alignItems:"center",justifyContent:"center",padding:18}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"26px 22px 20px",maxWidth:380,width:"100%",maxHeight:"90vh",overflowY:"auto"}},
        e("div",{style:{fontSize:30,textAlign:"center",marginBottom:6}},"🧠"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:21,textAlign:"center",marginBottom:6}},"Zagrij mozak"),
        e("div",{style:{fontSize:13,color:"var(--muted)",textAlign:"center",lineHeight:1.55,marginBottom:18}},"3 brza zagrijavanja da otključaš fokus prije ispita. Klikni za odgovor."),
        [["7 × 8","56"],["15% od 200","30"],["Površina kvadrata stranice 5","25"]].map((w,i)=>e(WarmupItem,{key:i,q:w[0],a:w[1]})),
        e("div",{style:{display:"flex",gap:9,alignItems:"flex-start",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 12px",marginTop:14,fontSize:12,lineHeight:1.5,color:"var(--muted)"}},
          e("span",{style:{fontSize:15,flexShrink:0}},"\u270f\ufe0f"),
          e("span",null,e("strong",{style:{color:"var(--text)"}},"Radni prostor")," \u2014 ispod svakog zadatka i u zaglavlju (\u270f\ufe0f). Skica, znanstveni kalkulator i rje\u0161ava\u010d jednad\u017ebi, sve uz pitanje.")),
        e("button",{onClick:()=>onClose(),style:{width:"100%",marginTop:14,padding:"13px",borderRadius:"var(--r)",border:"none",background:"var(--blue)",color:"#fff",fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"var(--fb)"}},"Spreman/na — kreni! →"),
        e("div",{style:{display:"flex",justifyContent:"center",gap:18,marginTop:12}},
          e("button",{onClick:()=>onClose(),style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Preskoči"),
          e("button",{onClick:()=>{try{localStorage.setItem(__rk("mat_warmup_off"),"1");}catch(e){}onClose();},style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Ne prikazuj više"))
      )
    );
}

// Potvrda prekida ispita.
export function ExitModal({exam,onExit,onHome,onClose}){
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",z:200,display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"28px 24px",maxWidth:360,width:"90%",textAlign:"center"}},
        e("div",{style:{fontSize:28,marginBottom:12}},"⏸"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:8}},"Prekid ispita?"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:20}},(exam.season==="session"||exam.season==="random")?"Napredak neće biti spremljen.":"Bez brige — \"Nastavi ispit\" čeka te na početnoj."),
        e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
          e("button",{className:"btn btn-g",onClick:()=>onClose()},"Nastavi"),
          e("button",{className:"btn btn-red",onClick:onExit},"← Natrag"),
          onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna")
        )
      )
    );
}
