// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Sim - glavni ekran rjesavanja ispita/vjezbe (pitanje, navigacija, alati, pregled, rezultat). */
import React from 'react';
import { __MAT, IS_PRO, planCta, __rk, DS, TOPIC_LABELS } from '../core/state';
import { EXAMS } from '../core/exams';
import { __imgKey, __aiErrMsg, __aiPost } from '../core/runtime';
import { renderOptText, renderQText, FormulaBlock, renderOptContent } from '../core/mathText';
import { GLBL, GC, useEscape, TLBL, LL, fireConfetti } from '../core/ui';
import { chk, hasAns } from '../core/grading';
import { grade, calcXpGain } from '../core/progress';
import { CountUp, AnimatedRing } from '../viz/charts';
import { FigZoom } from '../viz/figzoom';
import { VizModal, resolveViz } from '../viz/interactive';
import { Calculator, ScratchPad } from '../tools/calc';
import { FormulaModal } from '../tools/formulas';
import { ERROR_TAGS, ErrorTagger, SelfExplain, StuckHelper, WarmupItem, WeakSpotTips } from '../tools/hints';
import { ShareCard, UpgradeModal } from '../tools/modals';
import { AnswerHelper, CalcQuestion, FeedbackBox, MaturaRubric, QToolbar } from '../tools/question';
import { vc, TYPE_ICON, topicColor, fmt2, useTimer, CalcQuestionM, TOPIC_FREQ } from './helpers';
import { createWorkspaceStore, hasWorkspaceWork } from './workspace-store';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function WorkspaceLauncher({store,wsKey,onOpen,examMode}){
  const subscribe=React.useCallback(function(cb){ return store.subscribe(wsKey,cb); },[store,wsKey]);
  const getSnapshot=React.useCallback(function(){ return hasWorkspaceWork(store.get(wsKey)); },[store,wsKey]);
  const getServerSnapshot=React.useCallback(function(){ return false; },[]);
  const _hw=React.useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);
  return e("button",{onClick:onOpen,style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:_hw?"var(--blue-d)":"var(--s2)",border:"1px solid "+(_hw?"var(--blue-b)":"var(--bdr)"),borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
    e("span",{style:{fontSize:18,flexShrink:0}},"✏️"),
    e("div",{style:{flex:1,minWidth:0}},
      e("div",{style:{fontSize:13,fontWeight:700,color:_hw?"var(--blue-b)":"var(--text)"}}, _hw?"Nastavi svoj rad":"Radni prostor"),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}}, _hw?"imaš skicu ili račun za ovo pitanje":(examMode?"skica · kalkulator":"skica · kalkulator · asistent"))),
    _hw&&e("span",{style:{width:8,height:8,borderRadius:99,background:"var(--green)",flexShrink:0}}),
    e("span",{style:{color:"var(--muted)",fontSize:16,flexShrink:0}},"›")
  );
}
export function Sim({exam,practice,examMode,timedPractice=false,onExit,onDone,userData,onPracticeErrors,onPracticeSimilar,onStats,onFilter,onHome,resume,onPatchResult}){
  const QSX=exam.qs;
  function toggleBookmark(qid){
    setBookmarks(prev=>{
      const next={...prev};
      const key=exam.key+"__"+String(qid);
      if(next[key]) delete next[key];
      else next[key]={qid,examKey:exam.key,examLabel:exam.year+"  -  "+exam.label,q:QSX.find(x=>x.id===qid)?.q?.slice(0,80)||""};
      DS.set("mat_bookmarks",JSON.stringify(next));
      return next;
    });
  }
  const[cur,setCur]=useState(()=>resume?.cur||0);
  const[answers,setAnswers]=useState(()=>resume?.answers||{});
  const[rev,setRev]=useState({});
  const[revFilter,setRevFilter]=useState("all");
  const[revCol,setRevCol]=useState({});
  const[selfGrade,setSelfGrade]=useState({});
  const[showUpgradeR,setShowUpgradeR]=useState(false);
  const[aiRes,setAiRes]=useState(null);
  const[aiResState,setAiResState]=useState("idle");
  const[hints,setHints]=useState({});
  const[conf,setConf]=useState(()=>resume?.conf||{});
  const[zen,setZen]=useState(false);
  const[showKbd,setShowKbd]=useState(false);
  const[scratchOpen,setScratchOpen]=useState(false);
  const[spAsk,setSpAsk]=useState(null);
  const[spSeen,setSpSeen]=useState(()=>{try{return !!localStorage.getItem(__rk("mat_sp_seen"));}catch(e){return true;}});
  React.useEffect(()=>{ if(scratchOpen&&!spSeen){ try{localStorage.setItem(__rk("mat_sp_seen"),"1");}catch(e){} setSpSeen(true); } },[scratchOpen]);
  React.useEffect(()=>{ document.body.classList.toggle("sp-docked", scratchOpen); return ()=>document.body.classList.remove("sp-docked"); },[scratchOpen]);
  const[workspace]=React.useState(createWorkspaceStore);
  const[toolsOpen,setToolsOpen]=useState(false);
  const[navMore,setNavMore]=useState(false);
  const[vizOpen,setVizOpen]=useState(null);
  const[helpOpen,setHelpOpen]=useState(false);
  const[warmup,setWarmup]=useState(()=>practice&&!examMode&&!resume&&typeof window!=="undefined"&&!localStorage.getItem(__rk("mat_warmup_off")));
  const[selfExpl,setSelfExpl]=useState({});
  const[zenSeen,setZenSeen]=useState(()=>{try{return DS.get("mat_zen_seen")==="1"}catch(e){return false}});
  const[showReview,setShowReview]=useState(false);
  const[showCalc,setShowCalc]=useState(false);
  const[elim,setElim]=useState({});
  const[zoomFig,setZoomFig]=useState(null);
  useEscape(!!zoomFig,()=>setZoomFig(null));
  const[fbAnim,setFbAnim]=useState(null);
  const[combo,setCombo]=useState(0);
  const[solveToast,setSolveToast]=useState(null);
  const[scrolled,setScrolled]=useState(false);
  const[saved,setSaved]=useState(false);
  const[notes,setNotes]=useState({});
  const[fontScale,setFontScale]=useState(1);
  const[paused,setPaused]=useState(false);
  const[hlMode,setHlMode]=useState(false);
  const[highlights,setHighlights]=useState({});
  const[speaking,setSpeaking]=useState(false);
  const[navTopicFilter,setNavTopicFilter]=useState(null);
  const[hideSolved,setHideSolved]=useState(false);
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
  function navFilterControls(inSheet){
    const labels=[...new Set(QSX.map(qq=>TOPIC_LABELS[qq.topic]||qq.topic))];
    if(labels.length<2)return null;
    return e("div",{className:"nav-filters",style:{display:"flex",flexDirection:"row",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:14}},
      e("select",{value:navTopicFilter||"",onChange:ev=>{const v=ev.target.value||null;setNavTopicFilter(v);if(v){const ix=QSX.findIndex(qq=>(TOPIC_LABELS[qq.topic]||qq.topic)===v);if(ix>=0){goTo(ix);if(inSheet)setShowNav(false);}}},style:{flex:"1 1 160px",minWidth:0,padding:"9px 12px",borderRadius:"var(--r)",border:"1px solid var(--bdr2)",background:"var(--s2)",color:"var(--text)",fontSize:13,fontWeight:600,fontFamily:"var(--fb)",cursor:"pointer"}},
        e("option",{value:""},"\uD83D\uDD0D Filtriraj po temi"),
        labels.map((l,i)=>e("option",{key:l||("__t"+i),value:l},l))),
      e("button",{className:"nf-toggle"+(hideSolved?" on":""),onClick:()=>setHideSolved(v=>!v)},(hideSolved?"\u2713 ":"")+"Sakrij rije\u0161ene"));
  }
  function tokenizeHL(text){const toks=[];let cur="",depth=0;for(const ch of String(text)){if(ch==="[")depth++;else if(ch==="]")depth=Math.max(0,depth-1);if(ch===" "&&depth===0){if(cur)toks.push(cur);toks.push(" ");cur="";}else cur+=ch;}if(cur)toks.push(cur);return toks;}
  function renderHL(text,qid){
    const toks=tokenizeHL(text);const hm=highlights[qid]||{};
    return toks.map((tok,i)=>tok===" "?" ":e("span",{key:i,className:"hl-tok"+(hm[i]?" hl-on":""),
      onClick:()=>setHighlights(p=>({...p,[qid]:{...(p[qid]||{}),[i]:!(p[qid]&&p[qid][i])}}))},renderQText(tok)));
  }
  const[example,setExample]=useState(null);
  const[formulaPeek,setFormulaPeek]=useState({});
  useEscape(!!example,()=>setExample(null));
  const _weakByTopic=(()=>{const et=(userData&&userData.errorTracker)||{};const o={};Object.values(et).forEach(x=>{if(x&&x.topic&&x.count>0)o[x.topic]=(o[x.topic]||0)+x.count;});return o;})();
  const _bestPct=(()=>{const h=((userData&&userData.history)||[]).filter(x=>x.examKey===exam.key&&typeof x.pct==="number");return h.length?Math.max.apply(null,h.map(x=>x.pct)):null;})();
  function showSolvedExample(){
    const pool=[];
    Object.values(EXAMS).forEach(ex=>{(ex.qs||[]).forEach(qq=>{
      if(qq.topic===q.topic&&qq.id!==q.id&&qq.steps&&qq.steps.length>0&&qq.type!=="proof"){pool.push(qq);}
    });});
    if(pool.length)setExample(pool[Math.floor(Math.random()*pool.length)]);
  }
  const[showNav,setShowNav]=useState(false);
  useEscape(showReview,()=>setShowReview(false));
  useEscape(showNav,()=>setShowNav(false));
  const[flag,setFlag]=useState(()=>resume?.flag||{});
  const[bookmarks,setBookmarks]=useState(()=>{
    try{return JSON.parse(DS.get("mat_bookmarks")||"{}");}catch{return {};}
  });
  const[visited,setVisited]=useState({0:true});
  const[modal,setModal]=useState(false);
  const[showFormulas,setShowFormulas]=useState(false);
  const[done,setDone]=useState(false);
  const[qTimes,setQTimes]=useState(()=>resume?.qTimes||{});
  const[shownAnswers,setShownAnswers]=useState({});
  const[timerAlert,setTimerAlert]=useState(null);
  const[flashRed,setFlashRed]=useState(false);
  const[errorTags,setErrorTags]=useState({});
  // Per-question elapsed timer
  const[qElapsed,setQElapsed]=useState(0);
  const qElapsedRef=useRef(0);
  const qStart=useRef(Date.now());
  const timerDur=examMode||timedPractice?((resume&&resume.timerS!=null)?resume.timerS:exam.duration):null;
  // Prosječno vrijeme po zadatku na maturi: 150min/35zad ≈ 257s
  const AVG_Q_TIME=Math.round((exam.duration||9000)/Math.max(QSX.length,1));

  // Tick per-question timer svake sekunde
  useEffect(()=>{
    if(done) return;
    const iv=setInterval(()=>{
      const el=Math.round((Date.now()-qStart.current)/1000);
      qElapsedRef.current=el;
      setQElapsed(el);
    },1000);
    return ()=>clearInterval(iv);
  },[cur,done]);

  function onTimerWarn(sLeft){if(examMode||timedPractice){setTimerAlert(sLeft);setFlashRed(true);setTimeout(()=>setFlashRed(false),500);}}
  function onTimerExpire(){if((examMode||timedPractice)&&!done)finishExam();}
  const timer=useTimer(timerDur||0,!!(timerDur&&!done&&!paused),onTimerExpire,onTimerWarn);
  useEffect(()=>{
    if(done||exam.season==="session"||exam.season==="random")return;
    try{DS.set("mat_resume",JSON.stringify({key:exam.key,examMode,timedPractice,practice,
      answers,cur,flag,conf,timerS:timerDur?timer.s:null,qTimes,ts:Date.now()}));}catch(e2){}
  },[cur,answers,flag,done]);

  function recordTime(fromIdx){
    const elapsed=Math.round((Date.now()-qStart.current)/1000);
    const qid=QSX[fromIdx].id;
    setQTimes(t=>({...t,[qid]:(t[qid]||0)+elapsed}));
    qStart.current=Date.now();
  }
  function goTo(i){recordTime(cur);setCur(i);setVisited(v=>({...v,[i]:true}));if(!practice)setShownAnswers({});qStart.current=Date.now();setQElapsed(0);}
  const qcardRef=React.useRef(null);
  const prevCurRef=React.useRef(cur);
  const touchRef=React.useRef(null);
  const _rm=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches;
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
  function nextBlank(){
    for(let i=cur+1;i<QSX.length;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
    for(let i=0;i<=cur;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
  }
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

  function finishExam(){
    try{DS.set("mat_resume","");}catch(e2){}
    if(done)return;
    recordTime(cur);
    setDone(true);
    window._playSound?.("done");
    // Izračun rezultata i callback
    const autoQ2=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const totalPoints2=autoQ2.reduce((s,q)=>s+(q.points||1),0);
    const earnedPoints2=autoQ2.reduce((s,q)=>{const ok=chk(q,answers[q.id]);return s+(ok===true?(q.points||1):0);},0);
    const pct2=Math.round(earnedPoints2/totalPoints2*100)||0;
    if(pct2===100) fireConfetti();
    const g2=grade(pct2);
    const cor2=autoQ2.filter(q=>chk(q,answers[q.id])===true).length;
    // Bug #1 fix: izgradi topic_breakdown
    const topic_breakdown={};
    autoQ2.forEach(q=>{
      const t=q.topic||"ostalo";
      if(!topic_breakdown[t]) topic_breakdown[t]={correct:0,total:0,points:0,earned:0};
      topic_breakdown[t].total++;
      topic_breakdown[t].points+=(q.points||1);
      if(chk(q,answers[q.id])===true){
        topic_breakdown[t].correct++;
        topic_breakdown[t].earned+=(q.points||1);
      }
    });
    if(onDone){
      setTimeout(()=>onDone({
        examKey:exam.key,
        examLabel:exam.year+"  -  "+exam.label,
        razina:exam.razina||"B",
        pct:pct2,grade:g2,cor:cor2,
        total:autoQ2.length,
        answers,qTimes,
        examMode:!!examMode,
        topic_breakdown,
        errorTags
      }),50);
    }
  }

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
      if(e.key==="f"&&e.shiftKey||e.key==="F"&&e.shiftKey){toggleBookmark(curQ.id);return;}
      if(e.key==="f"||e.key==="F"){setFlag(p=>({...p,[curQ.id]:!p[curQ.id]}));return;}
      if(e.key==="?"){setShowKbd(v=>!v);return;}
      if(e.key==="Escape"){setShowKbd(false);return;}
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[cur,answers,rev,done,QSX,practice]);

  const _cq=QSX[cur];
  useEscape(modal,()=>setModal(false));
  const onAnswerCb=React.useCallback(val=>{if(_cq)setAnswers(p=>({...p,[_cq.id]:val}));},[_cq&&_cq.id]);
  const mcStem=React.useMemo(()=>{
    if(!_cq||!_cq.img)return null;
    const imgKey=__imgKey(_cq._examKey||exam.key,_cq);
    const fn=__MAT.Q_IMAGES[imgKey];return fn?fn():null;
  },[_cq&&_cq.id,_cq&&_cq._examKey,_cq&&_cq._origId]);
  React.useEffect(()=>{
    if(!done||typeof onPatchResult!=="function")return;
    const aQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const sQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gQ=sQ.filter(q=>selfGrade[q.id]!==undefined);
    if(gQ.length===0)return;
    const gT=sQ.filter(q=>selfGrade[q.id]===true);
    const tp=[...aQ,...gQ].reduce((s2,q)=>s2+(q.points||1),0);
    const ep=aQ.reduce((s2,q)=>s2+(chk(q,answers[q.id])===true?(q.points||1):0),0)+gT.reduce((s2,q)=>s2+(q.points||1),0);
    const pc=Math.round(ep/tp*100)||0;
    const cr=aQ.filter(q=>chk(q,answers[q.id])===true).length+gT.length;
    const tot=aQ.length+gQ.length;
    const tb={};
    [...aQ,...gQ].forEach(q=>{const t=q.topic||"ostalo";if(!tb[t])tb[t]={correct:0,total:0,points:0,earned:0};
      tb[t].total++;tb[t].points+=(q.points||1);
      const ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
      if(ok){tb[t].correct++;tb[t].earned+=(q.points||1);}});
    onPatchResult({pct:pc,grade:grade(pc),cor:cr,total:tot,topic_breakdown:tb});
  },[selfGrade,done]);
  // Rezultati
  if(done){
    const autoQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const selfQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gradedQ=selfQ.filter(q=>selfGrade[q.id]!==undefined);
    const gradedTrue=selfQ.filter(q=>selfGrade[q.id]===true);
    const gradedFalse=selfQ.filter(q=>selfGrade[q.id]===false);
    const ungraded=selfQ.length-gradedQ.length;
    const totalPoints=[...autoQ,...gradedQ].reduce((s,q)=>s+(q.points||1),0);
    const earnedPoints=autoQ.reduce((s,q)=>{
      const ok=chk(q,answers[q.id]);
      return s+(ok===true?(q.points||1):0);
    },0)+gradedTrue.reduce((s,q)=>s+(q.points||1),0);
    const pct=Math.round(earnedPoints/totalPoints*100)||0;
    const g=grade(pct);
    const gc=GC[g];
    const heroMsg=pct>=90?"Vrhunski! Ovo je razina za samouvjeren izlazak na maturu. 🏆"
      :pct>=75?"Odličan rezultat — još malo finog brušenja i petica je tu."
      :pct>=50?"Solidno! Pogledaj teme ispod — tu se skrivaju najlakši dodatni bodovi."
      :pct>=25?"Dobar početak. Svaki riješeni ispit otkriva gdje se gube bodovi — kreni od najslabije teme."
      :"Svaki ispit je podatak, ne presuda. \"Vježbaj greške\" je najbrži put do napretka.";
    const cor=autoQ.filter(q=>chk(q,answers[q.id])===true).length+gradedTrue.length;
    const scoredN=autoQ.length+gradedQ.length;
    const manualQ=QSX.filter(q=>q.type==="proof"||q.type==="sa"||q.type==="pa");

    // Update user data  -  poziva se iz finishExam()
    const wrongAutoQ=autoQ.filter(q=>chk(q,answers[q.id])===false);
    const flaggedQ=QSX.filter(q=>flag[q.id]);
    const overconfQ=wrongAutoQ.filter(q=>conf[q.id]===2);
    const _revShow=new Set((revFilter==="wrong"?[...wrongAutoQ,...gradedFalse]:revFilter==="flag"?flaggedQ:revFilter==="manual"?selfQ:revFilter==="overconf"?overconfQ:QSX).map(q=>q.id));
    const revTab=(id,lbl,cnt,col)=>e("button",{key:id,onClick:()=>setRevFilter(id),
      style:{fontSize:11.5,fontWeight:700,padding:"5px 12px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
        border:"1px solid "+(revFilter===id?(col||"var(--blue-b)"):"var(--bdr)"),
        background:revFilter===id?"var(--s2)":"var(--s1)",
        color:revFilter===id?(col||"var(--blue)"):"var(--muted)",transition:"all .15s"}},
      lbl+(cnt!=null?" ("+cnt+")":""));

    async function runAiResults(){
      if(!IS_PRO){setShowUpgradeR(true);return;}
      if(aiResState==="loading")return;
      setAiResState("loading");
      const wrongTopics={};
      [...wrongAutoQ,...gradedFalse].forEach(q=>{const l=TOPIC_LABELS[q.topic]||q.topic;wrongTopics[l]=(wrongTopics[l]||0)+1;});
      const wt=Object.entries(wrongTopics).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([l,n])=>l+" ("+n+"\u00d7)").join(", ")||"nema gre\u0161aka";
      const slow=QSX.filter(q=>(qTimes[q.id]||0)>90).length;
      const prompt="Ti si mentor za hrvatsku dr\u017eavnu maturu iz matematike. U\u010denik je upravo zavr\u0161io ispit ("+(exam.season==="session"||exam.season==="random"?exam.label:exam.year+". "+exam.label)+", razina "+(exam.razina||"B")+").\n"
        +"Rezultat: "+pct+"% ("+cor+"/"+scoredN+" zadataka, "+earnedPoints+"/"+totalPoints+" bodova).\n"
        +"Gre\u0161ke po temama: "+wt+".\nSporih zadataka (>90s): "+slow+".\n"
        +"Vrati ISKLJU\u010cIVO JSON (bez markdown backtickova):\n"
        +'{"dijagnoza":"2-3 re\u010denice ZA\u0160TO se gube bodovi (uzroci, ne samo popis tema)","plan7":["5-7 konkretnih koraka za sljede\u0107ih 7 dana"],"poruka":"kratka motivacija u ti-formi"}';
      try{
        const data=await __aiPost(prompt,900);
        if(data.error||!data.content) throw new Error("api");
        const text=data?.content?.[0]?.text||"{}";
        setAiRes(JSON.parse(text.replace(/```json|```/g,"").trim()));
        setAiResState("done");
      }catch(err){setAiResState("error");}
    }
    return e("div",{className:"results"},
      showUpgradeR&&e(UpgradeModal,{onClose:()=>setShowUpgradeR(false)}),
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        e("span",{className:"ntitle"},exam.year+"  -  Rezultati")
      ),
      e("div",{className:"reshero"},
        e(AnimatedRing,{pct,gc,g}),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:32,color:"#fff",marginBottom:4,
          textShadow:"0 2px 12px rgba(0,0,0,.25)"}},GLBL[g]||""),
        e("div",{className:"res-pct",style:{color:"#fff"}},e(CountUp,{to:pct,suffix:"%",duration:950})),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",marginBottom:4}},
          cor+"/"+scoredN+" zadataka točno · "+earnedPoints+"/"+totalPoints+" bodova"),
        e("div",{style:{display:"inline-flex",gap:8,marginTop:10}},
          e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(233,180,70,.18)",border:"1px solid rgba(233,180,70,.4)",color:"#ffd56b"}},
            "+"+calcXpGain(pct,autoQ.length)+" XP"),
          (userData?.streak||0)>0&&e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.22)",color:"#fff"}},
            "🔥 "+(userData.streak)+" dana"),(function(){var pt=autoQ.filter(function(q){return q.warn;}).length;if(!pt)return null;var pa=autoQ.filter(function(q){return q.warn&&chk(q,answers[q.id])===true;}).length;return e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,background:"rgba(80,200,120,.16)",border:"1px solid rgba(80,200,120,.42)",color:"#7CEBB0"}},"🛡️ "+pa+"/"+pt+" zamki izbjegnuto");})()
        ),
        e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.85)",margin:"12px auto 0",maxWidth:340,lineHeight:1.55}},heroMsg),
      (()=>{
        const _past=((userData&&userData.history)||[]).filter(h=>h.examKey===exam.key&&typeof h.pct==="number");
        if(_past.length===0) return null;
        const _l=_past[_past.length-1];const _lastCur=_l.cor===cor&&_l.total===scoredN&&_l.pct===pct;
        const _priorCount=_lastCur?_past.length-1:_past.length;
        if(_priorCount<1) return null;
        const _first=_past[0].pct;
        const _delta=pct-_first;
        return e("div",{style:{display:"inline-flex",alignItems:"center",gap:9,marginTop:12,padding:"7px 16px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.22)",fontSize:12.5,fontWeight:700,color:"#fff",flexWrap:"wrap",justifyContent:"center"}},
          e("span",{style:{opacity:.75}},"Prvi put "+_first+"%"),
          e("span",{style:{opacity:.45}},"→"),
          e("span",null,"sad "+pct+"%"),
          _delta>0?e("span",{style:{color:"#7CEBB0"}},"▲ +"+_delta+" napretka!"):_delta<0?e("span",{style:{color:"#ffb4b4"}},"▼ "+Math.abs(_delta)):e("span",{style:{opacity:.7}},"isti rezultat — idemo dalje!")
        );
      })(),
        selfQ.length>0&&e("div",{style:{
          fontSize:12,color:ungraded>0?"rgba(255,220,100,.95)":"rgba(140,235,180,.95)",marginTop:8,
          background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
          borderRadius:8,padding:"6px 12px",display:"inline-block"}},
          ungraded>0
            ?"✏️ "+ungraded+(ungraded===1?" opisni zadatak čeka":" opisnih zadataka čeka")+" tvoju ocjenu u pregledu — ocijeni i ulazi u rezultat."
            :"✓ Svi opisni zadaci ocijenjeni i uključeni u rezultat.")
      ),
      e("div",{className:"breakdown-grid"},
        [{label:"Točnih",val:cor,color:GC[5]},{label:"Netočnih",val:scoredN-cor,color:GC[1]},
         {label:"Neodgovoreno",val:autoQ.filter(q=>!hasAns(answers[q.id])).length,color:"var(--muted)"},
         {label:"Bodova",val:earnedPoints+"/"+totalPoints,color:gc}].map((b,i)=>
          e("div",{key:i,className:"bdk"},
            e("div",{className:"bdk-val",style:{color:b.color}},b.val),
            e("div",{className:"bdk-lbl"},b.label)))
      ),
      (function(){
        var byT={};
        autoQ.forEach(function(qq){var k=TOPIC_LABELS[qq.topic]||qq.topic||"Ostalo";var r=chk(qq,answers[qq.id]);if(r===null)return;if(!byT[k])byT[k]={c:0,t:0};byT[k].t++;if(r===true)byT[k].c++;});
        var rows=Object.keys(byT).map(function(k){return {k:k,c:byT[k].c,t:byT[k].t,p:byT[k].t?byT[k].c/byT[k].t:0};});
        if(rows.length<2)return null;
        rows.sort(function(a,b){return a.p-b.p;});
        return e("div",{style:{marginBottom:20}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},"📊 Točnost po temama"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"15px 16px"}},rows.map(function(r,i){
            var col=r.p>=0.7?"var(--green)":(r.p>=0.4?"var(--gold)":"var(--red)");
            return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10}},
              e("div",{style:{width:118,fontSize:12.5,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},r.k),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:Math.round(r.p*100)+"%",height:"100%",background:col,borderRadius:99,transition:"width .5s"}})),
              e("div",{style:{width:36,textAlign:"right",fontSize:12,fontWeight:800,color:col}},r.c+"/"+r.t));
          })),
          e("div",{style:{fontSize:11.5,color:"var(--muted)",marginTop:10,lineHeight:1.5}},"Najslabija tema je na vrhu — ondje najbrže dižeš rezultat ponavljanjem."));
      })(),
      e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,padding:"18px 18px 20px",marginBottom:20,
        background:"radial-gradient(120% 140% at 85% -20%,#2a5cb8 0%,#163769 45%,#0a1730 100%)",
        border:"1px solid rgba(74,144,217,.35)"}},
        e("div",{style:{position:"absolute",top:12,right:14,fontSize:9.5,fontWeight:800,letterSpacing:".1em",
          padding:"3px 9px",borderRadius:99,background:"rgba(233,180,70,.2)",
          border:"1px solid rgba(233,180,70,.45)",color:"#ffd56b"}},"PRO"),
        (aiResState==="done"&&aiRes)
          ?e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:14.5,fontWeight:700,color:"#fff",marginBottom:8}},"\uD83E\uDD16 AI analiza rezultata"),
              aiRes.dijagnoza&&e("div",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.92)",marginBottom:12}},aiRes.dijagnoza),
              Array.isArray(aiRes.plan7)&&e("div",{style:{marginBottom:12}},
                e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                e("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:4}},
                  aiRes.plan7.map((z,j)=>e("li",{key:j,style:{fontSize:12.5,lineHeight:1.55,color:"rgba(255,255,255,.88)"}},z)))),
              aiRes.poruka&&e("div",{style:{fontSize:12,fontStyle:"italic",color:"rgba(255,255,255,.7)",
                borderTop:"1px solid rgba(255,255,255,.15)",paddingTop:10}},"\uD83D\uDCAA "+aiRes.poruka),
              e("button",{onClick:runAiResults,style:{marginTop:10,background:"rgba(255,255,255,.14)",
                border:"1px solid rgba(255,255,255,.25)",color:"#fff",fontFamily:"var(--fb)",fontSize:12,
                fontWeight:600,padding:"7px 14px",borderRadius:8,cursor:"pointer"}},"\u21bb Nova analiza"))
          :e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:15,fontWeight:700,color:"#fff",marginBottom:5}},"\uD83E\uDD16 AI analiza rezultata"),
              e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.8)",marginBottom:13,maxWidth:430}},
                "Claude pregleda tvoje gre\u0161ke, objasni za\u0161to gubi\u0161 bodove na tim temama i slo\u017ei plan za sljede\u0107ih 7 dana."),
              aiResState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:10}},__aiErrMsg()),
              e("button",{onClick:runAiResults,disabled:aiResState==="loading",
                style:{background:IS_PRO?"#fff":"rgba(255,255,255,.16)",color:IS_PRO?"#0b1b3a":"#fff",
                  border:IS_PRO?"none":"1px solid rgba(255,255,255,.3)",fontFamily:"var(--fb)",fontSize:13.5,
                  fontWeight:700,padding:"11px 22px",borderRadius:10,cursor:"pointer",
                  boxShadow:IS_PRO?"0 6px 18px -6px rgba(0,0,0,.4)":"none"}},
                aiResState==="loading"?"\u23f3 Analiziram...":IS_PRO?"\u2728 Generiraj analizu":planCta()),
              !IS_PRO&&aiResState!=="done"&&e("div",{style:{position:"relative",marginTop:14,borderTop:"1px solid rgba(255,255,255,.12)",paddingTop:14}},
                e("div",{"aria-hidden":"true",style:{filter:"blur(3.5px)",opacity:.6,pointerEvents:"none",userSelect:"none"}},
                  e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                  e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}},
                    "Geometrija ti je najslabija (47%) \u2014 ponovi sli\u010dnost trokuta i povr\u0161ine. Dan 1: 8 zadataka iz pitagorinog pou\u010dka. Dan 2\u20133: trigonometrija pravokutnog trokuta\u2026")),
                e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}},
                  e("span",{style:{fontSize:11,fontWeight:700,color:"#fff",background:"rgba(10,23,48,.55)",border:"1px solid rgba(255,255,255,.2)",borderRadius:99,padding:"4px 12px",backdropFilter:"blur(2px)"}},"\uD83D\uDD12 Tvoj personalizirani plan \u2014 uz Pro"))))
      ),
      pct>=70
        ?e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}})
        :e("details",{style:{marginBottom:20}},
            e("summary",{style:{cursor:"pointer",fontSize:12.5,fontWeight:700,color:"var(--muted)",
              padding:"11px 14px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,
              listStyle:"none",userSelect:"none",textAlign:"center"}},"📤 Podijeli rezultat"),
            e("div",{style:{marginTop:10}},
              e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}}))
          ),
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled po temama"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),
      (()=>{
        // Izgradi statistiku po temama
        const topicStats={};
        [...autoQ,...gradedQ].forEach(q=>{
          const _ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
          const t=q.topic||"ostalo";
          if(!topicStats[t]) topicStats[t]={correct:0,total:0,points:0,maxPoints:0};
          topicStats[t].total++;
          topicStats[t].maxPoints+=q.points||1;
          if(_ok){
            topicStats[t].correct++;
            topicStats[t].points+=q.points||1;
          }
        });
        const sorted=Object.entries(topicStats)
          .map(([k,v])=>({k,label:TOPIC_LABELS[k]||k,...v,pct:Math.round(v.correct/v.total*100)}))
          .sort((a,b)=>a.pct-b.pct); // najslabije gore
        return e("div",{style:{marginBottom:24}},
          sorted.map(({k,label,correct,total,pct,points,maxPoints})=>{
            const col=pct>=80?"var(--green)":pct>=50?"var(--gold)":"var(--red)";
            return e("div",{key:k,style:{
              display:"flex",alignItems:"center",gap:10,
              padding:"8px 0",borderBottom:"1px solid var(--bdr)",flexWrap:"wrap"
            }},
              e("div",{style:{width:140,fontSize:12,color:"var(--text)",flexShrink:0}},label),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:pct+"%",height:"100%",background:col,borderRadius:99,transition:"width .4s"}})
              ),
              e("div",{style:{width:44,textAlign:"right",fontSize:12,fontWeight:700,color:col,flexShrink:0}},pct+"%"),
              e("div",{style:{width:48,textAlign:"right",fontSize:11,color:"var(--muted)",flexShrink:0}},correct+"/"+total),
              onPracticeSimilar&&pct<100&&e("button",{
                onClick:()=>onPracticeSimilar(k,label),
                style:{fontSize:11,padding:"3px 9px",borderRadius:6,border:"1px solid var(--bdr)",
                  background:"var(--s2)",color:"var(--muted)",cursor:"pointer",flexShrink:0,
                  whiteSpace:"nowrap"},
                title:"Vježbaj sve zadatke na temu: "+label
              },"🔁 Ponovi")
            );
          })
        );
      })(),
      (function(){var ts={};[...autoQ,...gradedQ].forEach(function(qq){var ok=(qq.type==="proof"||qq.type==="sa")?selfGrade[qq.id]===true:chk(qq,answers[qq.id])===true;var lab=TOPIC_LABELS[qq.topic]||qq.topic||"ostalo";if(!ts[lab])ts[lab]={c:0,n:0,k:qq.topic};ts[lab].n++;if(ok)ts[lab].c++;});var rows=Object.keys(ts).map(function(lab){return{k:ts[lab].k,label:lab,pct:Math.round(ts[lab].c/ts[lab].n*100),n:ts[lab].n};});return e(WeakSpotTips,{rows:rows,onDrill:onPracticeSimilar});})(),
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,marginTop:8,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled zadataka"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),
        (function(){var ids=QSX.filter(function(qq){return _revShow.has(qq.id);}).map(function(qq){return qq.id;});var anyOpen=ids.some(function(id){return !revCol[id];});return e("button",{onClick:function(){var nm={};if(anyOpen){ids.forEach(function(id){nm[id]=true;});}setRevCol(nm);},style:{fontSize:10.5,fontWeight:700,padding:"4px 11px",borderRadius:99,border:"1px solid var(--bdr2)",background:"var(--s1)",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)",textTransform:"none",whiteSpace:"nowrap"}},anyOpen?"⊟ Sažmi sve":"⊞ Proširi sve");})()
      ),
      (function(){
        var buckets={2:{c:0,n:0},1:{c:0,n:0},0:{c:0,n:0}};
        var rated=0;
        autoQ.forEach(function(q){ if(q.type!=="mc") return; var cv=conf[q.id]; if(cv===undefined||cv===null) return; var b=buckets[cv]; if(!b) return; b.n++; if(chk(q,answers[q.id])===true) b.c++; rated++; });
        if(rated<3) return null;
        var rows=[[2,"\uD83D\uDE0E Siguran","var(--green)"],[1,"\uD83E\uDD14 Nisam siguran","var(--gold)"],[0,"\uD83D\uDE2C Poga\u0111am","var(--red)"]];
        var sure=buckets[2], guess=buckets[0];
        var surePct=sure.n?Math.round(sure.c/sure.n*100):null;
        var guessPct=guess.n?Math.round(guess.c/guess.n*100):null;
        var sureWrong=sure.n-sure.c;
        var insight;
        if(surePct!=null && surePct>=85) insight="Kad si siguran/na, gotovo uvijek si u pravu \u2014 vjeruj prvom instinktu i ne gubi vrijeme na predomi\u0161ljanje.";
        else if(surePct!=null && sureWrong>=2 && surePct<70) insight="Oprez: kod \u201eSiguran\u201c grije\u0161i\u0161 \u010de\u0161\u0107e nego \u0161to misli\u0161 ("+sureWrong+"\u00d7). Prije nego potvrdi\u0161 \u201esiguran\u201c odgovor, brzo provjeri korak.";
        else if(guessPct!=null && guessPct>=60 && guess.n>=2) insight="Tvoja \u201enaga\u0111anja\u201c su bolja nego \u0161to misli\u0161 ("+guessPct+"% to\u010dno) \u2014 ima\u0161 dobar instinkt, ne precrtavaj opcije prebrzo.";
        else if(surePct!=null && guessPct!=null && (surePct-guessPct)>=30) insight="Dobra kalibracija \u2014 kad si siguran/na to\u010dniji/a si nego kad naga\u0111a\u0161. Vjeruj toj razlici na maturi.";
        else insight="Prati ovu podjelu kroz ispite \u2014 cilj je da \u201eSiguran\u201c bude \u0161to bli\u017ee 100%, a da rje\u0111e naga\u0111a\u0161.";
        return e("div",{style:{marginBottom:14,padding:"13px 15px",borderRadius:12,background:"var(--s2)",border:"1px solid var(--bdr)"}},
          e("div",{style:{fontSize:12.5,fontWeight:800,color:"var(--text)",marginBottom:3,display:"flex",alignItems:"center",gap:7}},"\uD83E\uDDED Kalibracija \u2014 koliko vjeruje\u0161 sebi"),
          e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:11}},"Tvoja procjena sigurnosti naspram stvarne to\u010dnosti"),
          rows.map(function(r){var b=buckets[r[0]];if(!b.n)return null;var pct=Math.round(b.c/b.n*100);return e("div",{key:r[0],style:{display:"flex",alignItems:"center",gap:10,padding:"5px 0"}},
            e("div",{style:{width:128,fontSize:12.5,color:"var(--text)",flexShrink:0}},r[1]),
            e("div",{style:{flex:1,height:8,background:"var(--s1)",borderRadius:99,overflow:"hidden"}},e("div",{style:{width:pct+"%",height:"100%",background:r[2],borderRadius:99,transition:"width .4s"}})),
            e("div",{style:{width:84,textAlign:"right",fontSize:12,fontWeight:700,color:r[2],flexShrink:0}},pct+"% ("+b.c+"/"+b.n+")")
          );}),
          e("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid var(--bdr)",fontSize:12.5,lineHeight:1.55,color:"var(--text)"}},insight)
        );
      })(),
      overconfQ.length>0&&(()=>{
        var tc={};overconfQ.forEach(function(q){if(!q.topic)return;var l=(typeof TOPIC_LABELS!=="undefined"&&TOPIC_LABELS[q.topic])||q.topic;tc[l]=(tc[l]||0)+1;});
        var top=Object.entries(tc).sort((a,b)=>b[1]-a[1])[0];
        var topPart=(top&&top[1]>=2)?(" Najvi\u0161e u temi \u201e"+top[0]+"\u201c ("+top[1]+"\u00d7) \u2014 tu se precjenjuje\u0161."):"";
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
        background:"var(--red-d)",border:"1px solid rgba(248,113,113,.3)",borderLeft:"3px solid var(--red)",
        borderRadius:10,color:"var(--text)"}},
        "\u26a0\ufe0f Kod "+overconfQ.length+" zadatka si bio/la siguran/na a pogrije\u0161io/la \u2014 to su prvi kandidati za ponavljanje."+topPart);})(),
      (()=>{const cnt={};Object.values(errorTags||{}).forEach(arr=>(arr||[]).forEach(t=>cnt[t]=(cnt[t]||0)+1));
        const lbl={};(typeof ERROR_TAGS!=="undefined"?ERROR_TAGS:[]).forEach(t=>lbl[t.id]=t.label);
        const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0];
        if(!top||top[1]<2)return null;
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
          background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderLeft:"3px solid var(--gold)",
          borderRadius:10,color:"var(--text)"}},
          "\uD83D\uDD01 Uzorak gre\u0161ke: \u201e"+(lbl[top[0]]||top[0])+"\u201c \u00d7"+top[1]+" \u2014 isti tip pogre\u0161ke se ponavlja. Njega prvo razbij.");})(),
      e("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14}},
        revTab("all","Svi",QSX.length,null),
        (wrongAutoQ.length+gradedFalse.length)>0&&revTab("wrong","✗ Netočni",wrongAutoQ.length+gradedFalse.length,"var(--red)"),
        flaggedQ.length>0&&revTab("flag","⚑ Označeni",flaggedQ.length,"var(--gold)"),
        selfQ.length>0&&revTab("manual","✏️ Opisni",selfQ.length,"var(--gold)"),
        overconfQ.length>0&&revTab("overconf","😎 Siguran a kriv",overconfQ.length,"var(--red)")
      ),
      e("div",{className:"revlist"},QSX.map((q,i)=>{
        if(!_revShow.has(q.id)) return null;
        const isM=q.type==="proof"||q.type==="sa"||q.type==="pa";
        const isColl=!!revCol[q.id];
        const a=answers[q.id];
        const ok=isM?null:chk(q,a);
        const sg=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]:undefined;
        const cls=isM?(sg===true?"rok":sg===false?"rbad":"rman"):ok===true?"rok":"rbad";
        const col=isM?(sg===true?"var(--green)":sg===false?"var(--red)":"var(--gold)"):ok===true?"var(--green)":"var(--red)";
        let ad=null,adOk=null;
        if(q.type==="mc"&&a) ad=["Tvoj odgovor: "+a+"  -  ",renderOptText(q.opts[LL.indexOf(a)]||"")];
        if(q.type==="mc"&&ok===false) adOk=["Točno: "+(q.sol?.cl||"")+") ",renderOptText(q.opts?.[LL.indexOf(q.sol?.cl)]||"")];
        if((q.type==="num"||q.type==="calc")&&a) ad=["Tvoj odgovor: "+a+" (točno: ",renderOptText(String(q.sol?.ans??"")),")"];
        if(isM&&a) ad="Odgovor napisan";
        return e("div",{key:q.id,className:"revitem "+cls},
          e("div",{style:{display:"flex",gap:10,alignItems:"flex-start"}},
            e("span",{style:{color:col,fontWeight:700,fontSize:14,minWidth:18}},isM?(sg===true?"✓":sg===false?"✗":"✏️"):ok?"✓":"✗"),
            e("div",{style:{flex:1}},
              e("div",{onClick:()=>setRevCol(p=>({...p,[q.id]:!p[q.id]})),style:{display:"flex",alignItems:"center",gap:8,marginBottom:isColl?0:3,flexWrap:"wrap",cursor:"pointer",userSelect:"none"}},
                e("span",{style:{order:99,marginLeft:"auto",color:"var(--muted)",fontSize:13,fontWeight:800}},isColl?"▾":"▴"),
                e("span",{style:{fontSize:11,color:"var(--muted)"}},(i+1)+". "+TLBL[q.type]),
                e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
                e("span",{style:{fontSize:11,color:"var(--gold)"}},q.points>1?q.points+" boda":""),
                qTimes[q.id]&&e("span",{className:"time-badge "+(qTimes[q.id]>90?"slow":qTimes[q.id]<15?"fast":"")},
                  "⏱ "+qTimes[q.id]+"s"),
                flag[q.id]&&e("span",{style:{fontSize:11,fontWeight:800,color:"var(--red)"}},"⚑ označeno")
              ),
              !isColl&&e("div",null,e("div",{style:{fontSize:13,lineHeight:1.55,marginBottom:5}},renderQText(q.q)),
              (()=>{const ik=__imgKey(q._examKey||exam.key,q);
                const fn=q.img?__MAT.Q_IMAGES[ik]:null;
                return fn&&e("div",{style:{margin:"4px 0 8px",padding:"10px",background:"var(--s2)",
                  border:"1px solid var(--bdr)",borderRadius:10,display:"inline-block",maxWidth:"100%"}},fn());})(),
              ad&&e("div",{style:{fontSize:12,color:"var(--muted)"}},ad),
              adOk&&e("div",{style:{fontSize:12,color:"var(--green)",fontWeight:600,marginTop:2}},adOk),
              e(AnswerHelper,{q,autoExpand:false}),
              (q.type==="proof"||q.type==="sa")&&e(Fragment,null,e(MaturaRubric,{q}),e("div",{style:{marginTop:9,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
                e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Usporedi s rješenjem:"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:true})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===true?"var(--green)":"var(--bdr)"),
                    background:sg===true?"var(--green)":"var(--s1)",color:sg===true?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✓ Riješio/la sam"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:false})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===false?"var(--red)":"var(--bdr)"),
                    background:sg===false?"var(--red)":"var(--s1)",color:sg===false?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✗ Nisam"))))
            )
          )
        );
      })),
      e("div",{style:{marginTop:28,display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",
        padding:"20px 0",borderTop:"1px solid var(--bdr)"}},
        e("button",{className:"btn btn-g",onClick:onExit},"← Natrag"),
        onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna"),
        wrongAutoQ.length>0&&onPracticeErrors&&e("button",{
          className:"btn btn-red",onClick:()=>onPracticeErrors(wrongAutoQ,exam),
          style:{background:"linear-gradient(135deg,var(--red-d),rgba(196,48,48,.15))",
            border:"1px solid rgba(196,48,48,.35)",color:"var(--red)",fontWeight:700}
        },"🔁 Vježbaj greške ("+wrongAutoQ.length+")")
      ),
      (()=>{
        var items=[];
        [...wrongAutoQ,...gradedFalse].forEach(function(q){
          var mw=(q.why||[]).find(function(w){return typeof w==="string"&&/greška|propust/i.test(w);});
          var txt=mw?String(mw).replace(/^(Tipičan propust:|Tipična greška:|Česta greška:|Greška:)\s*/i,"").trim():"";
          if(!txt){var d=(q.steps||[]).find(function(st){return st&&st.note==="diagnostika";});if(d)txt=String(d.txt).replace(/^Analiza distractora:\s*/i,"").replace(/Provjera[\s\S]*$/i,"").replace(/<br>[\s\S]*$/,"").trim();}
          if(txt&&txt.length<240)items.push({topic:TOPIC_LABELS[q.topic]||q.topic,txt:txt});
        });
        if(items.length===0) return null;
        var byTopic={};items.forEach(function(it){(byTopic[it.topic]=byTopic[it.topic]||[]).push(it.txt);});
        return e("div",{style:{marginTop:32}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"📝 Tvoj podsjetnik — na što paziti"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
            Object.entries(byTopic).map(function(en,ti){var tp=en[0],arr=en[1];return e("div",{key:ti,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--gold)",borderRadius:"var(--r)",padding:"12px 14px"}},
              e("div",{style:{fontWeight:800,fontSize:13,color:"var(--gold)",marginBottom:7}},tp),
              e("div",{style:{display:"flex",flexDirection:"column",gap:7}},
                arr.slice(0,3).map(function(t,i){return e("div",{key:i,style:{fontSize:12.5,color:"var(--text)",lineHeight:1.5,display:"flex",gap:8}},
                  e("span",{style:{color:"var(--gold)",flexShrink:0}},"•"),
                  e("span",null,renderOptText(t)));})));})));
      })(),
      e("div",{style:{marginTop:32}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Sljedeći koraci"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{className:"next-steps"},
          e("div",{className:"next-step-card gold",onClick:onExit},
            e("span",{className:"nsc-ico"},"📝"),
            e("div",{className:"nsc-title",style:{color:"var(--gold)"}},"Drugi ispit"),
            e("div",{className:"nsc-desc"},"Odaberi drugi rok ili godinu i nastavi vježbanje.")),
          e("div",{className:"next-step-card blue",onClick:()=>onFilter?onFilter():onExit()},
            e("span",{className:"nsc-ico"},"🎯"),
            e("div",{className:"nsc-title",style:{color:"var(--blue)"}},"Vježbaj po temi"),
            e("div",{className:"nsc-desc"},"Fokusiraj se na teme gdje si bio/la najslabiji/a.")),
          e("div",{className:"next-step-card green",onClick:()=>onStats&&onStats(),style:{cursor:"pointer"}},
            e("span",{className:"nsc-ico"},"📊"),
            e("div",{className:"nsc-title",style:{color:"var(--green)"}},"Statistika"),
            e("div",{className:"nsc-desc"},"Prati napredak, trend i predviđenu ocjenu.")),
          e("div",{className:"next-step-card",style:{cursor:"pointer"},
            onClick:()=>{try{(window.parent||window).postMessage({type:"DISCERE_NAVIGATE",to:"kalkulator",pct,razina:exam.razina||null},"*");}catch(e2){}}},
            e("span",{className:"nsc-ico"},"\uD83C\uDF93"),
            e("div",{className:"nsc-title",style:{color:"var(--teal)"}},"Bodovi za faks"),
            e("div",{className:"nsc-desc"},"Vidi koliko ti ovakav rezultat nosi na upisima \u2014 Kalkulator bodova."))
        )
      )
    );
  }

  // === AKTIVNI ISPIT ===
  const q=QSX[cur];
  const isRev=!!rev[q?.id];
  const a=answers[q?.id];
  const correct=q&&!practice?null:q?chk(q,a):null;
  const pct=Math.round(cur/QSX.length*100);
  const timerCls=timerDur?timer.s<300?"danger":timer.s<600?"warn":"":"";
  const _ghost=(()=>{if(!timerDur)return null;
    const hs=((userData&&userData.history)||[]).filter(h=>h.examKey===exam.key&&h.qTimes&&Object.keys(h.qTimes).length>3);
    return hs.length?hs[hs.length-1]:null;})();
  const bkKey=q?exam.key+"__"+String(q.id):null;
  const isBookmarked=!!(bkKey&&bookmarks[bkKey]);"";
  const _checkedN=practice?QSX.filter(qq=>rev[qq.id]).length:0;
  const _correctN=practice?QSX.filter(qq=>rev[qq.id]&&chk(qq,answers[qq.id])===true).length:0;
  const _accRatio=_checkedN>0?_correctN/_checkedN:0;

  // Sektori  -  dinamički na temelju tipa pitanja
  const mcCount = QSX.filter(q=>q.type==="mc").length;
  const sections=[
    {label:"DIO 1  -  Višestruki izbor",from:0,to:mcCount-1},
    {label:"DIO 2  -  Zadaci s izračunom",from:mcCount,to:QSX.length-1}
  ];
  const currentSection=cur<mcCount?0:1;

  return e("div",{className:(zen?"zen":"")+(readMode?" read-mode":""),style:{minHeight:"100vh"}},
    showCalc&&e(Calculator,{onClose:()=>setShowCalc(false),warnNoCalc:exam.razina==="A"&&cur<mcCount}),
    solveToast&&e("div",{className:"solve-toast"},solveToast),
    scrolled&&!done&&e("div",{className:"sticky-mini"},
      e("span",{className:"sm-q"},"Z "+(cur+1)+"/"+QSX.length),
      e("div",{className:"sm-prog"},e("div",{className:"sm-fill",style:{width:Math.round((cur+1)/QSX.length*100)+"%"}})),
      timerDur&&e("span",{className:"sm-timer "+timerCls,style:{color:timerCls==="danger"?"var(--red)":timerCls==="warn"?"var(--gold)":"var(--muted)"}},timer.d)),
    saved&&!done&&e("div",{className:"save-pulse"},"\u2713 spremljeno"),
    example&&e("div",{className:"ex-overlay",onClick:()=>setExample(null)},
      e("div",{className:"ex-card",onClick:ev=>ev.stopPropagation()},
        e("div",{className:"ex-head"},
          e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"var(--blue)"}},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer \u00b7 "+(TOPIC_LABELS[example.topic]||example.topic)),
          e("button",{onClick:()=>setExample(null),className:"ex-x"},"\u2715")),
        e("div",{className:"ex-q"},renderQText(example.q)),
        example.opts&&e("div",{style:{margin:"10px 0",fontSize:13,color:"var(--muted)"}},example.opts.map((o,oi)=>e("div",{key:oi,style:{padding:"3px 0"}},"ABCD"[oi]+") ",renderOptText(o)))),
        e("div",{className:"ex-steps-label"},"Postupak:"),
        e("div",{className:"ex-steps"},(example.steps||[]).filter(st=>st&&st.note!=="diagnostika").map((st,i)=>{
          const txt=typeof st==="string"?st:(st&&st.txt)||"";
          return e("div",{key:i,className:"ex-step"},e("span",{className:"ex-step-n"},i+1),e("span",null,renderOptText(txt)));
        })),
        e("div",{style:{marginTop:14,fontSize:11.5,color:"var(--muted)",fontStyle:"italic"}},"Ovo je drugi zadatak iste teme \u2014 iskoristi postupak kao predlo\u017eak, pa rije\u0161i svoj.")
      )),
    paused&&e("div",{className:"pause-overlay",onClick:()=>setPaused(false)},
      e("div",{className:"pause-card",onClick:ev=>ev.stopPropagation()},
        e("div",{style:{fontSize:46,marginBottom:8}},"\u23f8\ufe0f"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:6}},"Pauzirano"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18}},timerDur?"Vrijeme je zaustavljeno. Predahni i nastavi kad bude\u0161 spreman/na.":"Predahni i nastavi kad bude\u0161 spreman/na."),
        e("button",{className:"btn btn-blue",style:{padding:"11px 26px",fontSize:15},onClick:()=>setPaused(false)},"\u25b6 Nastavi"))),
    zoomFig&&e(FigZoom,{fig:zoomFig,onClose:()=>setZoomFig(null)}),
    showReview&&(()=>{
      const unans=QSX.filter(qq=>!hasAns(answers[qq.id]));
      const flg=QSX.filter(qq=>flag[qq.id]);
      const idxOf=qq=>QSX.indexOf(qq);
      return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:ev=>{if(ev.target===ev.currentTarget)setShowReview(false);}},
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
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},unans.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));setShowReview(false);},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.35)",color:"var(--red)"}},idxOf(qq)+1)))),
          flg.length>0&&e("div",{style:{marginBottom:16}},
            e("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:".05em"}},"Ozna\u010deni za pregled"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},flg.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));setShowReview(false);},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)"}},idxOf(qq)+1)))),
          unans.length>0&&e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:14,lineHeight:1.5}},"Neodgovoreni zadaci nose 0 bodova. Mo\u017ee\u0161 se vratiti i rije\u0161iti ih prije predaje."),
          e("div",{style:{display:"flex",gap:8}},
            e("button",{onClick:()=>setShowReview(false),className:"btn btn-g",style:{flex:1,padding:"11px"}},"\u2190 Vrati se"),
            e("button",{onClick:()=>{setShowReview(false);finishExam();},className:"btn btn-gold",style:{flex:1,padding:"11px"}},"Predaj ispit \u2713")))
      );
    })(),
    showNav&&e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:ev=>{if(ev.target===ev.currentTarget)setShowNav(false);}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:"1px solid var(--bdr)",padding:"18px 18px calc(18px + env(safe-area-inset-bottom))",width:"100%",maxWidth:560,maxHeight:"70vh",overflowY:"auto",boxShadow:"0 -10px 40px -10px rgba(0,0,0,.4)"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:18}},"Navigator"),
          e("button",{onClick:()=>setShowNav(false),style:{background:"var(--s2)",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--muted)",fontFamily:"var(--fb)"}},"\u2715")),
        navFilterControls(true),
        sections.map((sec,si)=>{
          const range=QSX.slice(sec.from,sec.to+1);
          return e("div",{key:si,style:{marginBottom:12}},
            e("div",{className:"section-divider"},sec.label.split(" - ")[0].trim()),
            e("div",{className:"qgrid"},range.map((qq,ri)=>{
              const qi=sec.from+ri;
              if(hideSolved&&hasAns(answers[qq.id])&&qi!==cur)return null;
              const isAns=hasAns(answers[qq.id]);const isF=flag[qq.id];const _chk2=done||rev[qq.id];const ok2=_chk2?chk(qq,answers[qq.id]):null;
              let cls="qgrid-btn";if(ok2===true)cls+=" ok";else if(ok2===false)cls+=" bad";else if(isAns)cls+=" ans";if(qi===cur)cls+=" cur";if(isF)cls+=" flag";if(navTopicFilter&&(TOPIC_LABELS[qq.topic]||qq.topic)!==navTopicFilter)cls+=" nf-dim";
              return e("button",{key:qi,className:cls,onClick:()=>{goTo(qi);setShowNav(false);}},qi+1,(!examMode&&ok2===null&&!isAns&&qi!==cur&&!isF)&&e("span",{key:"d",className:"qd-dot qd-"+(qq.points>=3?"tesko":qq.points===2?"srednje":"lako")}));
            })));
        }),
        e("div",{style:{marginTop:8,display:"flex",gap:14,flexWrap:"wrap",fontSize:10.5,color:"var(--muted)"}},
          e("span",null,"\u25a0 rije\u0161eno"),e("span",null,"\u2691 ozna\u010deno"),e("span",null,"\u25cb prazno"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--green)"}}),"lako"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--gold)"}}),"srednje"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--red)"}}),"teško"))
      )),
    showKbd&&e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:280,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>setShowKbd(false)},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"24px 26px",maxWidth:380,width:"100%",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:19,marginBottom:14}},"\u2328\uFE0F Pre\u010daci na tipkovnici"),
        [["A \u2013 D","Odaberi odgovor"],["Enter","Provjeri / sljede\u0107i"],["\u2190 / \u2192","Prethodni / sljede\u0107i zadatak"],["F","Ozna\u010di zadatak \u2691"],["Shift + F","Spremi zadatak \uD83D\uDD16"],["?","Ovaj popis"]].map(([k,d],i)=>
          e("div",{key:i,style:{display:"flex",alignItems:"center",gap:12,padding:"7px 0",borderBottom:i<5?"1px solid var(--bdr)":"none"}},
            e("kbd",{style:{fontFamily:"var(--fb)",fontSize:11.5,fontWeight:800,background:"var(--s2)",border:"1px solid var(--bdr2)",borderBottom:"2px solid var(--bdr2)",borderRadius:6,padding:"3px 9px",minWidth:64,textAlign:"center",color:"var(--text)"}},k),
            e("span",{style:{fontSize:12.5,color:"var(--muted)"}},d))),
        e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:12,textAlign:"center"}},"Pritisni ? ili klikni izvan za zatvaranje"))),
    // FORMULA MODAL
    scratchOpen&&React.createElement(ScratchPad,{onClose:()=>{setScratchOpen(false);setSpAsk(null);},wsKey:_cq&&_cq.id,store:workspace,figure:mcStem,qText:_cq&&_cq.q,qOpts:_cq&&_cq.opts,qSteps:_cq&&_cq.steps,qSol:_cq&&_cq.sol,qType:_cq&&_cq.type,answered:!!(_cq&&(hasAns(answers[_cq.id])||done)),seedAsk:spAsk,onSeedUsed:()=>setSpAsk(null),examMode:examMode}),
    showFormulas&&e(FormulaModal,{onClose:()=>setShowFormulas(false),razina:exam&&exam.razina}),

    // NAV
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:()=>setModal(true)},"\u2715",e("span",{className:"nav-btn-txt"}," Izlaz")),
      e("span",{className:"nav-title-hide",style:{fontFamily:"var(--fh)",fontSize:15,marginLeft:4,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,flex:"1 1 auto"}},exam.season==="session"?exam.label:exam.year+"  -  "+exam.label),
      e("span",{style:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99,
    background:exam.razina==="B"?"var(--teal-d)":"var(--blue-d)",
    border:"1px solid "+(exam.razina==="B"?"rgba(45,207,190,.3)":"rgba(74,144,217,.3)"),
    color:exam.razina==="B"?"var(--teal)":"var(--blue)",
    marginLeft:4,whiteSpace:"nowrap"
  }},exam.razina==="B"?e(React.Fragment,null,"B",e("span",{className:"nav-btn-txt"}," \u00b7 osnovna")):e(React.Fragment,null,"A",e("span",{className:"nav-btn-txt"}," \u00b7 vi\u0161a"))),
      e("span",{className:"nsp"}),
      e("button",{
        className:"btn btn-g",title:"Formule",
        style:{fontSize:12,padding:"5px 9px"},
        onClick:()=>setShowFormulas(true)
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
        style:{fontSize:12,padding:"5px 9px"},onClick:()=>setShowNav(true)},"\u2630",e("span",{className:"nav-btn-txt"}," "+(cur+1)+"/"+QSX.length)),
      (!examMode&&_bestPct!=null)&&e("span",{className:"record-pill",title:"Tvoj najbolji rezultat na ovom ispitu"},"\uD83C\uDFC6 "+_bestPct+"%"),
      practice&&_checkedN>0&&e("div",{className:"acc-ring",title:"To\u010dnost u vje\u017ebi: "+_correctN+"/"+_checkedN},
        e("svg",{width:30,height:30,viewBox:"0 0 36 36"},
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:"var(--bdr2)",strokeWidth:3.2}),
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:_accRatio>=0.7?"var(--green)":_accRatio>=0.4?"var(--gold)":"var(--red)",strokeWidth:3.2,strokeDasharray:(_accRatio*97.4).toFixed(1)+" 97.4",strokeLinecap:"round",transform:"rotate(-90 18 18)",style:{transition:"stroke-dasharray .4s"}})),
        e("span",{className:"acc-ring-txt"},_correctN+"/"+_checkedN)),
      practice&&_checkedN>=3&&(()=>{const g=grade(Math.round(_accRatio*100));return e("span",{className:"proj-grade",title:"Projicirana ocjena na temelju dosad provjerenog",style:{background:g>=4?"var(--green-d)":g>=3?"var(--gold-d)":"var(--red-d)",borderColor:g>=4?"rgba(61,214,140,.4)":g>=3?"var(--gold-b)":"rgba(248,113,113,.4)",color:g>=4?"var(--green)":g>=3?"var(--gold)":"var(--red)"}},"\u2248 ocjena "+g);})(),
      practice&&e("span",{className:"nbadge"},"Vježba"),
      timedPractice&&!examMode&&e("span",{className:"nbadge",style:{background:"var(--gold-d)",borderColor:vc("--gold-b"),color:vc("--gold")}},"Timed"),
      timerDur&&e("span",{className:"timer "+timerCls},timer.d),
      
      timerDur&&!done&&mcCount>0&&mcCount<QSX.length&&!examMode&&(()=>{
        let p1=0,p2=0,el1=0,el2=0;
        QSX.forEach((qq,i)=>{const pts=qq.points||1;const t=qTimes[qq.id]||0;if(i<mcCount){p1+=pts;el1+=t;}else{p2+=pts;el2+=t;}});
        const tot=p1+p2||1;const b1=Math.max(1,Math.round(timerDur*p1/tot/60)),b2=Math.max(1,Math.round(timerDur*p2/tot/60));
        const m1=Math.round(el1/60),m2=Math.round(el2/60);
        const seg=(lbl,m,bud)=>{const over=m>bud;const near=m>bud*0.85;return e("div",{className:"tb-seg"},
          e("span",{className:"tb-lbl"},lbl),e("span",{className:"tb-val",style:{color:over?"var(--red)":near?"var(--gold)":"var(--muted)"}},m+"/"+bud+" min"));};
        return e("div",{className:"time-budget"},e("span",{className:"tb-title"},"\u23f1\ufe0f Bud\u017eet vremena"),seg("DIO 1",m1,b1),seg("DIO 2",m2,b2));
      })()
    ),
    (()=>{
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
      if(_ghost&&_ghost.qTimes){
        let priorSum=0,cnt=0;
        QSX.forEach(qq=>{if(hasAns(answers[qq.id])&&_ghost.qTimes[qq.id]!=null){priorSum+=_ghost.qTimes[qq.id];cnt++;}});
        if(cnt>=2){
          const gd=Math.round(priorSum-elapsed);
          const gAhead=gd>=0;
          ghostPill=e("span",{className:"pill"+(gAhead?" pill-blue":"")},
            gAhead?"\uD83D\uDC7B +"+gd+"s ispred pro\u0161log sebe":"\uD83D\uDC7B "+Math.abs(gd)+"s iza pro\u0161log sebe");
        }
      }
      return e("div",{style:{maxWidth:1100,margin:"0 auto",padding:"6px 20px 0",display:"flex",justifyContent:"flex-end",gap:8,flexWrap:"wrap"}},
        ghostPill,
        e("span",{className:"pill "+(ahead?"pill-green":"pill-red")},
          ahead
            ?(lots?"⏱ Odličan tempo — imat ćeš vremena za provjeru"
                  :"⏱ Na ovom tempu završavaš ~"+Math.max(1,delta)+" min ranije")
            :"⏱ Na ovom tempu kasniš ~"+Math.abs(delta)+" min — ubrzaj"));
    })(),

    // WARMUP (K8) + INTERAKTIVNI VIZUAL (K7)
    vizOpen&&e(VizModal,{kind:vizOpen,onClose:()=>setVizOpen(null)}),
    warmup&&e("div",{style:{position:"fixed",inset:0,zIndex:260,background:"rgba(10,15,28,.82)",display:"flex",alignItems:"center",justifyContent:"center",padding:18}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"26px 22px 20px",maxWidth:380,width:"100%",maxHeight:"90vh",overflowY:"auto"}},
        e("div",{style:{fontSize:30,textAlign:"center",marginBottom:6}},"🧠"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:21,textAlign:"center",marginBottom:6}},"Zagrij mozak"),
        e("div",{style:{fontSize:13,color:"var(--muted)",textAlign:"center",lineHeight:1.55,marginBottom:18}},"3 brza zagrijavanja da otključaš fokus prije ispita. Klikni za odgovor."),
        [["7 × 8","56"],["15% od 200","30"],["Površina kvadrata stranice 5","25"]].map((w,i)=>e(WarmupItem,{key:i,q:w[0],a:w[1]})),
        e("div",{style:{display:"flex",gap:9,alignItems:"flex-start",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 12px",marginTop:14,fontSize:12,lineHeight:1.5,color:"var(--muted)"}},
          e("span",{style:{fontSize:15,flexShrink:0}},"\u270f\ufe0f"),
          e("span",null,e("strong",{style:{color:"var(--text)"}},"Radni prostor")," \u2014 ispod svakog zadatka i u zaglavlju (\u270f\ufe0f). Skica, znanstveni kalkulator i rje\u0161ava\u010d jednad\u017ebi, sve uz pitanje.")),
        e("button",{onClick:()=>setWarmup(false),style:{width:"100%",marginTop:14,padding:"13px",borderRadius:"var(--r)",border:"none",background:"var(--blue)",color:"#fff",fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"var(--fb)"}},"Spreman/na — kreni! →"),
        e("div",{style:{display:"flex",justifyContent:"center",gap:18,marginTop:12}},
          e("button",{onClick:()=>setWarmup(false),style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Preskoči"),
          e("button",{onClick:()=>{try{localStorage.setItem(__rk("mat_warmup_off"),"1");}catch(e){}setWarmup(false);},style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Ne prikazuj više"))
      )
    ),

    // EXIT MODAL
    modal&&e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",z:200,display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"28px 24px",maxWidth:360,width:"90%",textAlign:"center"}},
        e("div",{style:{fontSize:28,marginBottom:12}},"⏸"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:8}},"Prekid ispita?"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:20}},(exam.season==="session"||exam.season==="random")?"Napredak neće biti spremljen.":"Bez brige — \"Nastavi ispit\" čeka te na početnoj."),
        e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
          e("button",{className:"btn btn-g",onClick:()=>setModal(false)},"Nastavi"),
          e("button",{className:"btn btn-red",onClick:onExit},"← Natrag"),
          onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna")
        )
      )
    ),

    // TIMER ALERT
    timerAlert!==null&&e("div",{
      style:{position:"fixed",bottom:20,right:20,zIndex:150,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 18px",fontSize:13,fontWeight:600,color:timerAlert===0?"var(--red)":"var(--gold)",boxShadow:"var(--shadow)"},
      onClick:()=>setTimerAlert(null)
    },timerAlert===0?"⏰ Ispit završen!":`⚠️ Preostalo: ${fmt2(timerAlert)}`),

    // MAIN LAYOUT
    React.createElement("div",{className:"exam-layout",style:{background:flashRed?"rgba(196,48,48,.04)":""},onTouchStart:onTouchStart,onTouchEnd:onTouchEnd},
      // LIJEVI STUPAC  -  pitanje
      e("div",null,
        // Progress
        e("div",{className:"prog-bar"},e("div",{className:"prog-fill",style:{width:pct+"%"}})),

        // Sekcija
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--text)",letterSpacing:".09em",
          textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:10,opacity:.85}},
          e("span",{style:{width:3,height:14,background:exam.razina==="A"?"var(--blue)":"var(--teal)",borderRadius:2,display:"inline-block"}}),
          e("span",null,sections[currentSection]?.label),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),

        // Exam mode banner
        examMode&&e("div",{className:"exam-mode-banner"},
          "⏱ Simulacija ispita · uvjeti kao na maturi · dopušteno: kalkulator + papir · bez povratne informacije do kraja"
        ),

        React.createElement("div",{ref:qcardRef,className:"qcard",style:{borderLeft:examMode?"none":"3px solid "+topicColor(q.topic)}},
          !examMode&&e("div",{style:{display:"flex",gap:2,marginBottom:16,height:6,padding:"0 1px"}},QSX.map(function(qq,qi){var ans=hasAns(answers[qq.id]);return e("div",{key:qi,onClick:function(){goTo(qi);},title:examMode?String(qi+1):(qi+1)+". "+(TOPIC_LABELS[qq.topic]||qq.topic),style:{flex:1,minWidth:0,borderRadius:2,cursor:"pointer",background:examMode?"var(--bdr2)":topicColor(qq.topic),opacity:qi===cur?1:(ans?0.85:0.26),boxShadow:qi===cur?"0 0 0 2px var(--text)":"none",transition:"opacity .2s"}});})),
          // Meta
          e("div",{className:"qmeta"},
            e("div",{className:"qmeta-l"},
              e("span",{className:"qnum"},"Zadatak "+(cur+1)+"/"+QSX.length),
              q.points>1&&e("span",{className:"qpts"},q.points+(q.points>=5?" bodova":" boda")),
              (()=>{const dl=(q.points>=3)?["Te\u0161ko","tesko"]:(q.points===2)?["Srednje","srednje"]:["Lako","lako"];
                return examMode?null:e("span",{className:"qdiff qdiff-"+dl[1]},dl[0]);})()
            ),
            e("div",{className:"qmeta-actions"},
              !examMode&&e("button",{className:"qicon"+(flag[q.id]?" on-flag":""),title:(flag[q.id]?"Označeno":"Označi za pregled")+" (F)",onClick:()=>setFlag(p=>({...p,[q.id]:!p[q.id]}))},flag[q.id]?"🚩":"⚑"),
              e("button",{className:"qicon"+(scratchOpen?" on-scratch":"")+((!spSeen)?" sp-pulse":""),title:"Papir za račun — skiciraj i računaj",onClick:()=>setScratchOpen(true)},"✏️"),
              !examMode&&e("div",{style:{position:"relative",display:"inline-flex"}},
                e("button",{className:"qicon"+(toolsOpen?" on-tools":""),title:"Više alata",onClick:()=>setToolsOpen(v=>!v)},"⋯"),
                toolsOpen&&e("div",{onClick:()=>setToolsOpen(false),style:{position:"fixed",inset:0,zIndex:55}}),
                toolsOpen&&e("div",{style:{position:"absolute",top:"112%",right:0,zIndex:56,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",boxShadow:"0 12px 32px -8px rgba(0,0,0,.35)",padding:7,display:"flex",flexDirection:"column",gap:2,minWidth:210}},
                  [[speaking?"⏹️":"🔊", speaking?"Zaustavi čitanje":"Pročitaj naglas", speakQ],
                   ["👁️", readMode?"Standardni prikaz":"Lakše čitanje", ()=>setReadMode(v=>!v)],
                   ["🖍️", hlMode?"Isključi marker":"Marker — označi ključno", ()=>setHlMode(v=>!v)],
                   ["🔖", isBookmarked?"Ukloni spremljeno":"Spremi zadatak", ()=>toggleBookmark(q.id)]
                  ].map((it,ti)=>e("button",{key:ti,onClick:()=>{it[2]();setToolsOpen(false);},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},it[0]),it[1])),
                  e("div",{style:{display:"flex",gap:6,alignItems:"center",padding:"7px 10px",borderTop:"1px solid var(--bdr)",marginTop:3}},
                    e("span",{style:{fontSize:12,color:"var(--muted)",marginRight:"auto"}},"Veličina teksta"),
                    e("button",{className:"qicon",title:"Smanji",onClick:()=>setFontScale(v=>Math.max(0.85,+(v-0.1).toFixed(2)))},e("span",{style:{fontSize:11,fontWeight:800}},"A−")),
                    e("button",{className:"qicon",title:"Povećaj",onClick:()=>setFontScale(v=>Math.min(1.6,+(v+0.1).toFixed(2)))},e("span",{style:{fontSize:15,fontWeight:800}},"A+"))
                  )
                )
              )
            )
          ),
          !examMode&&e("div",{className:"qmeta-sub"},(TOPIC_LABELS[q.topic]||q.topic)+" · "+(TYPE_ICON[q.type]||"")+" "+TLBL[q.type]+" · \u23f1\ufe0f \u2248 "+(q.points>=3?"5 min":q.points===2?"3 min":"1\u20132 min")+(function(){var _n=TOPIC_FREQ.exCnt[q.topic]||0,_t=TOPIC_FREQ.totalExams||1,_r=_n/_t;return _n>=3?" · 📊 "+(_r>=0.55?"vrlo česta":_r>=0.3?"česta":"povremena")+" tema":"";})()+(_ghost&&_ghost.qTimes&&_ghost.qTimes[q.id]?"  ·  \uD83D\uDC7B pro\u0161li put: "+_ghost.qTimes[q.id]+"s":"")),
          
          
          flag[q.id]&&e("input",{className:"flag-note",value:notes[q.id]||"",placeholder:"\uD83D\uDCDD Bilje\u0161ka uz ovaj zadatak (npr. provjeri formulu)...",
            onChange:ev=>setNotes(p=>({...p,[q.id]:ev.target.value}))}),

          // Kontekst zadatka  -  zajednički uvod za pod-pitanja (22a/b, 23a/b, itd.)
          q.context&&e("div",{style:{
            position:"relative",
            background:"linear-gradient(135deg, rgba(74,144,217,.06) 0%, rgba(74,144,217,.02) 100%)",
            borderLeft:"3px solid var(--blue)",
            borderRadius:"6px",
            padding:"12px 16px 14px 18px",
            marginBottom:16,
            boxShadow:"0 1px 0 rgba(74,144,217,.04)"
          }},
            e("div",{style:{
              fontSize:10,fontWeight:700,color:"var(--blue)",
              letterSpacing:".12em",textTransform:"uppercase",
              marginBottom:6,opacity:.85,
              display:"flex",alignItems:"center",gap:6
            }},
              e("svg",{width:11,height:11,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},
                e("circle",{cx:12,cy:12,r:10}),
                e("line",{x1:12,y1:8,x2:12,y2:12}),
                e("line",{x1:12,y1:16,x2:12.01,y2:16})
              ),
              "Kontekst"
            ),
            e("div",{style:{
              fontSize:14,color:"var(--text)",lineHeight:1.55,
              opacity:.92
            }},renderQText(q.context))
          ),

          // Tekst pitanja
          !examMode&&(_weakByTopic[q.topic]||0)>=2&&e("div",{className:"weak-banner"},
            e("span",{style:{fontSize:16}},"\uD83D\uDCAA"),
            e("span",null,"Fokus \u2014 temu ",e("strong",null,TOPIC_LABELS[q.topic]||q.topic)," \u010de\u0161\u0107e grije\u0161i\u0161. Uzmi si vremena i provjeri postupak.")),
          e("div",{className:"qtext"+(hlMode?" hl-mode":""),style:{fontSize:(15*fontScale)+"px"}},hlMode?renderHL(q.q,q.id):renderQText(q.q)),
          hlMode&&e("div",{className:"hl-hint"},"\uD83D\uDD8D\ufe0f Klikni rije\u010di da ozna\u010di\u0161 klju\u010dne podatke"),

          // Per-question timer upozorenje (samo u exam/timedPractice modu)
          timedPractice&&!done&&!isRev&&(()=>{
            if(qElapsed<AVG_Q_TIME) return null;
            const over=qElapsed-AVG_Q_TIME;
            const warn=qElapsed>AVG_Q_TIME*1.5;
            return e("div",{style:{
              display:"flex",alignItems:"center",gap:8,
              padding:"6px 12px",marginBottom:10,borderRadius:"var(--r)",
              background:warn?"rgba(196,48,48,.08)":"rgba(233,180,70,.08)",
              border:"1px solid "+(warn?"rgba(196,48,48,.25)":"rgba(233,180,70,.25)"),
              fontSize:12,color:warn?"var(--red)":"var(--gold)"
            }},
              e("span",null,warn?"⏰":"⚠️"),
              e("span",null,warn
                ? `${over}s iznad prosjeka  -  razmisli o prelasku dalje`
                : `Blizu prosjeka (${AVG_Q_TIME}s/zadatak)  -  ne zapinji`
              )
            );
          })(),

          // Formula blok (višeredne jednadžbe, razlomci...)
          q.formula&&e(FormulaBlock,{lines:q.formula,label:q.formulaLabel||null}),

          // SVG slika (ako postoji za ovo pitanje)
          // Pokušaj s exam-specifičnim ključem, pa s globalnim
          mcStem&&e("div",{className:"fig-zoomable",style:{
              margin:"0 0 16px",padding:"14px",
              background:"var(--s2)",border:"1px solid var(--bdr)",
              borderRadius:"var(--r)",display:"inline-block",maxWidth:"100%"
            },onClick:()=>setZoomFig(mcStem)},mcStem,e("span",{className:"fig-zoom-badge"},"\uD83D\uDD0D uve\u0107aj")),

          // ⚠️ PAZI NA  -  prikazuje se PRIJE rješavanja, skriveno u examMode
          // Samo za MC — CalcQuestion već renderira warn za sa/num/calc/proof
          null,
          null,
          e(QToolbar,{glossaryText:examMode?"":[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" "),warn:(q.type==="mc"&&!isRev&&!done&&!examMode)?q.warn:null,vizKind:examMode?null:resolveViz(q),qid:q.id,onViz:setVizOpen}),
          

          // === OPCIJE ZA MC ===
          q.type==="mc"&&React.createElement("div",null,
            e("div",{className:"opts"},
              q.opts.map((opt,oi)=>{
                const letter=LL[oi];
                let cls="opt";
                if(a===letter) cls+=" sel";
                if((isRev||(!practice&&done))&&a===letter&&correct===true) cls=" opt ok";
                if((isRev||(!practice&&done))&&a===letter&&correct===false) cls=" opt bad";
                if((isRev||(!practice&&done))&&letter===q.sol.cl) cls=(cls.includes("bad")?" opt bad":" opt ok");
                const isElim=!!(elim[q.id]&&elim[q.id][letter]);
                if(isElim&&!(isRev||done)) cls+=" elim";
                if(fbAnim&&fbAnim.qid===q.id&&a===letter) cls+=fbAnim.ok?" fb-ok":" fb-wrong";
                const locked=isRev||done||(examMode&&practice);
                return e("div",{key:oi,className:cls,onClick:()=>{
                  if(locked) return;
                  if(isElim){setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:false}}));return;}
                  setAnswers(p=>({...p,[q.id]:letter}));
                  if(practice) setShownAnswers(p=>({...p,[q.id]:true}));
                }},
                  e("div",{className:"optl"},letter),
                  e("div",{className:"optt"},
                    renderOptContent(opt)
                  ),
                  !locked&&e("button",{className:"opt-elim",title:isElim?"Vrati opciju":"Precrtaj (isključi)",
                    onClick:ev=>{ev.stopPropagation();setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:!isElim}}));}},isElim?"\u21a9":"\u2715")
                );
              })
            ),
            // Radni prostor launcher (otvara pun overlay; pamti rad po pitanju)
            React.createElement(WorkspaceLauncher,{store:workspace,wsKey:q.id,onOpen:()=>setScratchOpen(true),examMode:examMode})
          ),

          // === ZADATCI S POSTUPKOM (num / calc / sa / proof) ===
          (q.type==="num"||q.type==="calc"||q.type==="sa"||q.type==="pa"||q.type==="proof")&&
            e(CalcQuestionM,{
              q,
              answer:a,
              onAnswer:onAnswerCb,
              isReviewed:isRev||done,
              isPractice:practice,
              isExamMode:examMode,
              onViz:setVizOpen
            }),

          // AI profesor — direktan ulaz (prefill pitanja + Asistent tab)
          !examMode&&(()=>{ var _qt=[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" ").replace(/\s+/g," ").trim();
            return e("button",{onClick:()=>{setSpAsk(_qt);setScratchOpen(true);},style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:"linear-gradient(135deg,rgba(233,180,70,.16),rgba(233,180,70,.05))",border:"1px solid rgba(233,180,70,.5)",borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
              e("span",{style:{fontSize:18,flexShrink:0}},"\uD83C\uDF93"),
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:13,fontWeight:700,color:"#e9b446"}},"Pitaj AI profesora"),
                e("div",{style:{fontSize:11,color:"rgba(255,255,255,.5)",marginTop:1}},"objasni ovaj zadatak korak po korak")),
              !IS_PRO&&e("span",{style:{fontSize:9,fontWeight:800,letterSpacing:".05em",color:"#e9b446",background:"rgba(233,180,70,.15)",border:"1px solid rgba(233,180,70,.4)",borderRadius:5,padding:"2px 6px",flexShrink:0}},"PRO"),
              e("span",{style:{color:"rgba(233,180,70,.7)",fontSize:16,flexShrink:0}},"\u203a")
            ); })(),

          // FEEDBACK + standardno rješenje za MC
          // U examMode  -  ništa do završetka ispita
          q.type==="mc"&&!examMode&&(()=>{
            const showFeedback=practice&&isRev;
            const showHelper=hasAns(a)||done||isRev;
            if(!showFeedback&&!showHelper) return null;
            const hist=(userData?.history||[]);
            const avgT=(()=>{
              const times=hist.flatMap(h=>h.qTimes&&h.qTimes[q.id]?[h.qTimes[q.id]]:[]);
              return times.length>=2?Math.round(times.reduce((a,b)=>a+b,0)/times.length):null;
            })();
            return e("div",null,
              showFeedback&&e(FeedbackBox,{q,a,rev:isRev,elapsed:qTimes[q.id]||0,avgTime:avgT}),
              showFeedback&&chk(q,a)===true&&e(SelfExplain,{key:"se"+q.id,val:selfExpl[q.id]||"",onChange:t=>setSelfExpl(p=>({...p,[q.id]:t}))}),
              showFeedback&&chk(q,a)===false&&onPracticeSimilar&&e("button",{className:"similar-btn",
                onClick:()=>onPracticeSimilar(q.topic,TOPIC_LABELS[q.topic]||q.topic)},
                "\u2795 Vje\u017ebaj jo\u0161 zadataka iz teme \u201e"+(TOPIC_LABELS[q.topic]||q.topic)+"\u201d \u2192"),
              // Tagovi grešaka  -  samo u practice modu, nikad u examMode
              showFeedback&&chk(q,a)===false&&e(ErrorTagger,{qid:q.id,errorTags,setErrorTags}),
              showHelper&&e(AnswerHelper,{q,autoExpand:false})
            );
          })(),

          practice&&!isRev&&e("button",{onClick:()=>setHelpOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:7,marginTop:14,padding:"8px 15px",borderRadius:99,background:helpOpen?"var(--blue-d)":"var(--s2)",border:"1px solid "+(helpOpen?"var(--blue-b)":"var(--bdr2)"),color:helpOpen?"var(--blue)":"var(--muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"💡 Pomoć i alati",e("span",{style:{opacity:.7,marginLeft:1}},helpOpen?" ▴":" ▾")),
          practice&&!isRev&&helpOpen&&e(StuckHelper,{key:"stuck"+q.id}),

          // HINT LADDER (vježba): otkrivaj korake jedan po jedan
          practice&&!isRev&&helpOpen&&(()=>{
            const postupak=(q.steps||[]).find(st=>st&&st.note==="postupak");
            const peeked=!!formulaPeek[q.id];
            return e("div",{className:"study-aids"},
              postupak&&e("button",{className:"aid-btn",onClick:()=>setFormulaPeek(p=>({...p,[q.id]:!p[q.id]}))},peeked?"\uD83D\uDCD0 Sakrij formulu":"\uD83D\uDCD0 Klju\u010dna formula"),
              e("button",{className:"aid-btn",onClick:showSolvedExample},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer"),
              peeked&&postupak&&e("div",{className:"formula-peek"},renderOptText(String(postupak.txt).replace(/^Sa\u017eetak postupka:\s*/i,""))));
          })(),
          practice&&!isRev&&helpOpen&&q.steps&&q.steps.length>0&&(()=>{
            const shown=hints[q.id]||0;
            return e("div",{style:{marginTop:14}},
              shown>0&&e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 14px",marginBottom:10}},
                e("div",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"var(--blue)",marginBottom:8}},"💡 Koraci ("+shown+"/"+q.steps.length+")"),
                q.steps.slice(0,shown).map((st,i)=>{
                  const txt=typeof st==="string"?st:(st&&st.txt)||"";
                  return e("div",{key:i,className:"ah-step"},
                    e("span",{className:"ah-step-n"},i+1),
                    e("span",{className:"ah-step-txt"},renderOptText(txt)));
                })),
              shown<q.steps.length&&e("button",{
                onClick:()=>setHints(p=>({...p,[q.id]:shown+1})),
                style:{fontSize:12.5,fontWeight:700,padding:"7px 14px",borderRadius:"var(--r)",cursor:"pointer",fontFamily:"var(--fb)",
                  background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},
                shown===0?"💡 Otkrij prvi korak":"💡 Otkrij sljedeći korak ("+(shown+1)+"/"+q.steps.length+")"));
          })(),

          // CONFIDENCE CHECK (vježba, MC, prije provjere)
          practice&&!isRev&&q.type==="mc"&&hasAns(a)&&e("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}},
            e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Koliko si siguran/na?"),
            [["2","😎 Siguran"],["1","🤔 Nisam siguran"],["0","😬 Pogađam"]].map(([v,lbl])=>
              e("button",{key:v,onClick:()=>setConf(p=>({...p,[q.id]:+v})),
                className:"pill"+(conf[q.id]===+v?" pill-blue":"")},lbl))),

          // NAV GUMBI
          e("div",{className:"qnav"},
            e("button",{className:"btn btn-g",disabled:cur===0,onClick:()=>goTo(cur-1)},"← Prethodni"),
            // "Provjeri" gumb SAMO za MC u vježba modu
            practice&&!isRev&&q.type==="mc"&&hasAns(a)&&React.createElement("button",{className:"btn btn-chk",onClick:()=>{
              setRev(p=>({...p,[q.id]:true}));
              const result=chk(q,a);
              registerCheck(q,result);
              if(result===true)window._playSound?.("correct");
              else if(result===false)window._playSound?.("wrong");
            }},"✓ Provjeri odgovor"),
            cur<QSX.length-1
              ?e("button",{className:"btn btn-blue",onClick:()=>goTo(cur+1)},"Sljedeći →")
              :e("button",{className:"btn btn-gold",onClick:()=>setShowReview(true)},"Završi ispit ✓")
          )
        )
      ),

      // DESNI STUPAC  -  navigator
      e("div",{className:"sidebar"},
        e("h4",null,"Navigator"),
        navFilterControls(false),
        sections.map((sec,si)=>{
          const range=QSX.slice(sec.from,sec.to+1);
          return e("div",{key:si},
            e("div",{className:"section-divider"},sec.label.split(" - ")[0].trim()),
            e("div",{className:"qgrid"},
              range.map((qq,ri)=>{
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
                if(navTopicFilter&&qq.topic!==navTopicFilter) cls+=" nf-dim";
                return e("button",{key:qi,className:cls,onClick:()=>goTo(qi)},qi+1,(!examMode&&ok2===null&&!isAns&&qi!==cur&&!isF)&&e("span",{key:"d",className:"qd-dot qd-"+(qq.points>=3?"tesko":qq.points===2?"srednje":"lako")}));
              })
            )
          );
        }),
        e("div",{style:{marginTop:14,fontSize:11,color:"var(--muted)",lineHeight:1.7}},
          e("div",null,"⚑ F  -  označi pitanje"),
          e("div",null,"🔖 Shift+F  -  spremi za kasnije"),
          e("div",null,"← → tipke  -  navigacija"),
          e("div",null,"A/B/C/D  -  odabir opcije"),
          e("div",null,"Enter  -  provjeri/nastavi")
        )
      )
    )
  );
}
