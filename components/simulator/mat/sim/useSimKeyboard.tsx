// @ts-nocheck
'use client';
/* 5.4 (Sim 4/4): precaci na tipkovnici ekrana rjesavanja, izdvojeni iz sim.tsx
   bez promjene ponasanja - odabir MC opcije (1-4 / a-d), Enter (provjeri ili
   sljedeci), strelice, F (oznaci), Shift+F (spremi) i ? (popis precaca).
   Efekt, njegovo tijelo i ovisnosti [cur,answers,rev,done,QSX,practice]
   prepisani su doslovno; sve sto dira stize kao argument hooka. */
import React from 'react';
import { chk, hasAns } from '../core/grading';
const{useEffect}=React;

export function useSimKeyboard({QSX,cur,answers,rev,done,practice,examMode,
  setAnswers,setShownAnswers,setRev,setFlag,setShowKbd,registerCheck,goTo,toggleBookmark}){
  // Keyboard shortcuts
  useEffect(()=>{
    if(done)return;
    function onKey(e){
      if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
      const curQ=QSX[cur];
      const curIsRev=!!rev[curQ?.id]||done;
      if(curQ.type==="mc"&&!curIsRev&&["1","2","3","4"].includes(e.key)){
        const ix=+e.key-1;
        if(ix<(curQ.opts||[]).length){
          setAnswers(p=>({...p,[curQ.id]:"ABCD"[ix]}));
          if(practice)setShownAnswers(p=>({...p,[curQ.id]:true}));
        }
        return;
      }
      if(curQ.type==="mc"&&!curIsRev&&["a","b","c","d"].includes(e.key.toLowerCase())){
        const idx=["a","b","c","d"].indexOf(e.key.toLowerCase());
        if(idx<(curQ.opts||[]).length){
          setAnswers(p=>({...p,[curQ.id]:e.key.toUpperCase()}));
          if(practice)setShownAnswers(p=>({...p,[curQ.id]:true}));
        }
        return;
      }
      if(e.key==="Enter"){
        e.preventDefault();
        if(practice&&!curIsRev&&hasAns(answers[curQ.id])){
          setRev(p=>({...p,[curQ.id]:true}));
          const result=chk(curQ,answers[curQ.id]);
          registerCheck(curQ,result);
          if(result===true)window._playSound?.("correct");
          else if(result===false)window._playSound?.("wrong");
        } else if(cur<QSX.length-1){goTo(cur+1);}
        return;
      }
      if(e.key==="ArrowRight"&&cur<QSX.length-1){goTo(cur+1);return;}
      if(e.key==="ArrowLeft"&&cur>0){goTo(cur-1);return;}
      if(e.key==="f"&&e.shiftKey||e.key==="F"&&e.shiftKey){if(!examMode)toggleBookmark(curQ.id);return;}
      if(e.key==="f"||e.key==="F"){setFlag(p=>({...p,[curQ.id]:!p[curQ.id]}));return;}
      if(e.key==="?"){setShowKbd(v=>!v);return;}
      if(e.key==="Escape"){setShowKbd(false);return;}
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[cur,answers,rev,done,QSX,practice]);
}
