// @ts-nocheck
'use client';
/* 5.4 (Sim 4/4): pomocni hookovi ekrana rjesavanja, izdvojeni iz sim.tsx bez
   promjene ponasanja.
     useSimReading  - citanje zadatka naglas (TTS), marker po rijecima, laksi
                      nacin citanja i mjerilo teksta;
     useSimGestures - animacija prijelaza medu zadacima i swipe lijevo/desno;
     useSimFeedback - povratna informacija na provjeru (niz tocnih, konfeti),
                      prekretnice, "spremljeno" i sticky zaglavlje pri skrolu.
   Stanje koje su ti dijelovi drzali sada zivi u hooku i vraca se Sim-u, pa se
   nigdje ne duplira; tijela funkcija, efekti i njihove ovisnosti prepisani su
   doslovno. */
import React from 'react';
import { DS } from '../core/state';
import { renderQText } from '../core/mathText';
import { hasAns } from '../core/grading';
import { fireConfetti } from '../core/ui';
const{createElement:e,useState}=React;

// Postovanje "prefers-reduced-motion" dijele animacija kartice i konfeti.
const _rm=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches;

export function useSimReading({q,cur}){
  const[fontScale,setFontScale]=useState(1);
  const[hlMode,setHlMode]=useState(false);
  const[highlights,setHighlights]=useState({});
  const[speaking,setSpeaking]=useState(false);
  const[readMode,setReadMode]=useState(()=>{try{return DS.get("mat_read_mode")==="1"}catch(e){return false}});
  function ttsText(text){return String(text)
    .replace(/\[FRAC:([^|\]]*)\|([^\]]*)\]/g,"$1 kroz $2").replace(/\[SYS:([^\]]*)\]/g,(m,c)=>c.replace(/\|/g," ; "))
    .replace(/\[(?:B|BLOCK):([^\]]*)\]/g,"$1").replace(/\u2212/g," minus ").replace(/\u221a/g," korijen iz ")
    .replace(/\^/g," na ").replace(/[\u27e8\u27e9\[\]]/g,"").replace(/\s+/g," ").trim();}
  function speakQ(){
    try{const synth=window.speechSynthesis;if(!synth)return;
      if(synth.speaking){synth.cancel();setSpeaking(false);return;}
      const u=new SpeechSynthesisUtterance(ttsText(q.q));u.lang="hr-HR";u.rate=0.95;
      const vs=synth.getVoices();const v=vs.find(x=>/hr|croat/i.test(x.lang)||/hr|croat/i.test(x.name));if(v)u.voice=v;
      u.onend=()=>setSpeaking(false);u.onerror=()=>setSpeaking(false);setSpeaking(true);synth.speak(u);
    }catch(e){}
  }
  React.useEffect(()=>{try{if(window.speechSynthesis&&window.speechSynthesis.speaking){window.speechSynthesis.cancel();setSpeaking(false);}}catch(e){}},[cur]);
  React.useEffect(()=>{try{DS.set("mat_read_mode",readMode?"1":"0");}catch(e){}},[readMode]);
  function tokenizeHL(text){const toks=[];let cur="",depth=0;for(const ch of String(text)){if(ch==="[")depth++;else if(ch==="]")depth=Math.max(0,depth-1);if(ch===" "&&depth===0){if(cur)toks.push(cur);toks.push(" ");cur="";}else cur+=ch;}if(cur)toks.push(cur);return toks;}
  function renderHL(text,qid){
    const toks=tokenizeHL(text);const hm=highlights[qid]||{};
    return toks.map((tok,i)=>tok===" "?" ":e("span",{key:i,className:"hl-tok"+(hm[i]?" hl-on":""),
      onClick:()=>setHighlights(p=>({...p,[qid]:{...(p[qid]||{}),[i]:!(p[qid]&&p[qid][i])}}))},renderQText(tok)));
  }
  return{speaking,speakQ,readMode,setReadMode,hlMode,setHlMode,renderHL,fontScale,setFontScale};
}

export function useSimGestures({QSX,cur,goTo}){
  const qcardRef=React.useRef(null);
  const prevCurRef=React.useRef(cur);
  const touchRef=React.useRef(null);
  React.useEffect(()=>{
    const dir=cur>prevCurRef.current?1:cur<prevCurRef.current?-1:0;
    prevCurRef.current=cur;
    const el=qcardRef.current;
    if(dir!==0&&el&&!_rm()){
      try{el.animate([{opacity:0,transform:"translateX("+(dir*22)+"px)"},{opacity:1,transform:"none"}],{duration:280,easing:"cubic-bezier(.22,1,.36,1)"});}catch(e){}
    }
  },[cur]);
  function onTouchStart(ev){const t=ev.touches&&ev.touches[0];if(t)touchRef.current={x:t.clientX,y:t.clientY,t:Date.now()};}
  function onTouchEnd(ev){
    const st=touchRef.current;touchRef.current=null;if(!st)return;
    const tg=ev.target;
    if(tg&&tg.closest&&tg.closest("input,textarea,.calc-panel,.symbar,.opt,button,a,.fig-zoomable")) return;
    const t=ev.changedTouches&&ev.changedTouches[0];if(!t)return;
    const dx=t.clientX-st.x,dy=t.clientY-st.y;
    if(Date.now()-st.t>600)return;
    if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*2){
      if(dx<0&&cur<QSX.length-1)goTo(cur+1);
      else if(dx>0&&cur>0)goTo(cur-1);
    }
  }
  return{qcardRef,onTouchStart,onTouchEnd};
}

export function useSimFeedback({QSX,answers,cur,done,mcCount}){
  const[fbAnim,setFbAnim]=useState(null);
  const[combo,setCombo]=useState(0);
  const[solveToast,setSolveToast]=useState(null);
  const[scrolled,setScrolled]=useState(false);
  const[saved,setSaved]=useState(false);
  const _toastT=React.useRef(null);
  function flashToast(msg){setSolveToast(msg);clearTimeout(_toastT.current);_toastT.current=setTimeout(()=>setSolveToast(null),2200);}
  function comboMsg(n){return n>=5?("\uD83D\uDD25\uD83D\uDD25 "+n+" zaredom \u2014 odli\u010dan niz!"):n>=3?("\uD83D\uDD25 "+n+" u nizu!"):("\uD83D\uDD25 "+n+" u nizu!");}
  function registerCheck(qq,res){
    setFbAnim({qid:qq.id,ok:res});setTimeout(()=>setFbAnim(a=>(a&&a.qid===qq.id?null:a)),700);
    if(res===true){setCombo(c=>{const nc=c+1;if(nc>=2)flashToast(comboMsg(nc));if(nc>0&&nc%5===0&&typeof fireConfetti==="function"&&!_rm())fireConfetti();return nc;});}
    else if(res===false){setCombo(0);}
  }
  const mileRef=React.useRef({half:false,dio1:false});
  React.useEffect(()=>{
    if(done)return;
    const ansN=QSX.filter(qq=>hasAns(answers[qq.id])).length;
    if(!mileRef.current.half&&QSX.length>=6&&ansN>=Math.ceil(QSX.length/2)&&ansN<QSX.length){mileRef.current.half=true;flashToast("Pola puta! \uD83D\uDCAA");}
  },[answers]);
  React.useEffect(()=>{
    if(done)return;
    if(!mileRef.current.dio1&&mcCount>0&&mcCount<QSX.length&&cur===mcCount){mileRef.current.dio1=true;flashToast("DIO 1 gotov \u2014 slijede zadaci s izra\u010dunom \u270f\ufe0f");}
  },[cur]);
  React.useEffect(()=>{
    const onScroll=()=>{const sc=window.scrollY>72;setScrolled(p=>p!==sc?sc:p);};
    window.addEventListener("scroll",onScroll,{passive:true});
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  const prevAnsRef=React.useRef(null);
  const _saveT=React.useRef(null);
  React.useEffect(()=>{
    const n=QSX.filter(qq=>hasAns(answers[qq.id])).length;
    if(prevAnsRef.current===null){prevAnsRef.current=n;return;}
    if(n>prevAnsRef.current&&!done){setSaved(true);clearTimeout(_saveT.current);_saveT.current=setTimeout(()=>setSaved(false),1200);}
    prevAnsRef.current=n;
  },[answers]);
  return{fbAnim,registerCheck,solveToast,scrolled,saved};
}
