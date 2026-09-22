// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Sim - glavni ekran rjesavanja ispita/vjezbe (pitanje, navigacija, alati, pregled, rezultat). */
import React from 'react';
import { __MAT, __rk, DS } from '../core/state';
import { EXAMS } from '../core/exams';
import { __imgKey } from '../core/runtime';
import { useEscape } from '../core/ui';
import { chk, hasAns } from '../core/grading';
import { FigZoom } from '../viz/figzoom';
import { VizModal } from '../viz/interactive';
import { Calculator, ScratchPad } from '../tools/calc';
import { FormulaModal } from '../tools/formulas';
import { useExamSession } from './useExamSession';
// Sim 2/4: zaglavlje, sat i navigacija po pitanjima zive u vlastitim komponentama.
import { SimHeader } from './SimHeader';
import { StickyMini, TimerAlert, PaceHint } from './SimTimer';
import { SimNavSheet, SimSidebar } from './SimNav';
// Sim 3/4: kartica zadatka (QuestionPanel) i unos odgovora po tipu (AnswerInput).
import { QuestionPanel } from './SimQuestion';
// Sim 4/4: ekran rezultata, modali ekrana rjesavanja i pomocni hookovi.
import { ResultsView } from './SimResults';
import { ExampleModal, PauseOverlay, ReviewSheet, KbdHelp, WarmupModal, ExitModal } from './SimOverlays';
import { useSimReading, useSimGestures, useSimFeedback } from './useSimUx';
import { useSimKeyboard } from './useSimKeyboard';
const{createElement:e,useState}=React;
export function Sim({exam,practice,examMode,timedPractice=false,onExit,onDone,userData,onPracticeErrors,onPracticeSimilar,onStats,onFilter,onHome,resume,onPatchResult}){
  const QSX=exam.qs;
  // Sim 1/4: stanje sesije (odgovori, pozicija, vremena, oznake, tajmer, pauza, predaja)
  // zivi u useExamSession; ovdje ostaju samo imena koja Sim koristi.
  const{
    cur,answers,setAnswers,conf,setConf,flag,setFlag,bookmarks,
    done,paused,setPaused,qTimes,setShownAnswers,
    timerAlert,setTimerAlert,flashRed,errorTags,setErrorTags,
    qElapsed,timer,timerDur,AVG_Q_TIME,
    goTo,nextBlank,toggleBookmark,finishExam,
  }=useExamSession({exam,QSX,practice,examMode,timedPractice,resume,onDone});
  const[rev,setRev]=useState({});
  const[hints,setHints]=useState({});
  const[zen,setZen]=useState(false);
  const[showKbd,setShowKbd]=useState(false);
  const[scratchOpen,setScratchOpen]=useState(false);
  const[spAsk,setSpAsk]=useState(null);
  const[spSeen,setSpSeen]=useState(()=>{try{return !!localStorage.getItem(__rk("mat_sp_seen"));}catch(e){return true;}});
  React.useEffect(()=>{ if(scratchOpen&&!spSeen){ try{localStorage.setItem(__rk("mat_sp_seen"),"1");}catch(e){} setSpSeen(true); } },[scratchOpen]);
  React.useEffect(()=>{ document.body.classList.toggle("sp-docked", scratchOpen); return ()=>document.body.classList.remove("sp-docked"); },[scratchOpen]);
  const workspaceRef=React.useRef({});
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
  const[notes,setNotes]=useState({});
  const[navTopicFilter,setNavTopicFilter]=useState(null);
  const[hideSolved,setHideSolved]=useState(false);
  // Sim 4/4: citanje zadatka naglas, marker, laksi nacin citanja i mjerilo teksta.
  const{speaking,speakQ,readMode,setReadMode,hlMode,setHlMode,renderHL,fontScale,setFontScale}=useSimReading({q:QSX[cur],cur});
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
  const[modal,setModal]=useState(false);
  const[showFormulas,setShowFormulas]=useState(false);
  // Sekcije ispita (DIO 1 / DIO 2) dijele zaglavlje, navigator i prekretnice.
  const mcCount = QSX.filter(q=>q.type==="mc").length;
  // Sim 4/4: animacija prijelaza medu zadacima i swipe po karticama.
  const{qcardRef,onTouchStart,onTouchEnd}=useSimGestures({QSX,cur,goTo});
  // Sim 4/4: povratna informacija na provjeru, prekretnice, "spremljeno", sticky zaglavlje.
  const{fbAnim,registerCheck,solveToast,scrolled,saved}=useSimFeedback({QSX,answers,cur,done,mcCount});
  // Sim 4/4: precaci na tipkovnici.
  useSimKeyboard({QSX,cur,answers,rev,done,practice,examMode,setAnswers,setShownAnswers,
    setRev,setFlag,setShowKbd,registerCheck,goTo,toggleBookmark});

  const _cq=QSX[cur];
  useEscape(modal,()=>setModal(false));
  const onAnswerCb=React.useCallback(val=>{if(_cq)setAnswers(p=>({...p,[_cq.id]:val}));},[_cq&&_cq.id]);
  const mcStem=React.useMemo(()=>{
    if(!_cq||!_cq.img)return null;
    const imgKey=__imgKey(_cq._examKey||exam.key,_cq);
    const fn=__MAT.Q_IMAGES[imgKey];return fn?fn():null;
  },[_cq&&_cq.id,_cq&&_cq._examKey,_cq&&_cq._origId]);
  // Rezultati (Sim 4/4): cijeli ekran rezultata zivi u SimResults.tsx.
  if(done) return e(ResultsView,{exam,QSX,answers,flag,conf,qTimes,errorTags,userData,done,
    onExit,onHome,onStats,onFilter,onPracticeErrors,onPracticeSimilar,onPatchResult});

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

  // Sektori  -  dinamički na temelju tipa pitanja (mcCount je izracunat gore)
  const sections=[
    {label:"DIO 1  -  Višestruki izbor",from:0,to:mcCount-1},
    {label:"DIO 2  -  Zadaci s izračunom",from:mcCount,to:QSX.length-1}
  ];
  const currentSection=cur<mcCount?0:1;

  return e("div",{className:(zen?"zen":"")+(readMode?" read-mode":""),style:{minHeight:"100vh"}},
    showCalc&&e(Calculator,{onClose:()=>setShowCalc(false),warnNoCalc:exam.razina==="A"&&cur<mcCount}),
    solveToast&&e("div",{className:"solve-toast"},solveToast),
    scrolled&&!done&&e(StickyMini,{cur,QSX,timerDur,timer,timerCls}),
    saved&&!done&&e("div",{className:"save-pulse"},"\u2713 spremljeno"),
    example&&e(ExampleModal,{example,onClose:()=>setExample(null)}),
    paused&&e(PauseOverlay,{timerDur,onResume:()=>setPaused(false)}),
    zoomFig&&e(FigZoom,{fig:zoomFig,onClose:()=>setZoomFig(null)}),
    showReview&&e(ReviewSheet,{QSX,answers,flag,rev,goTo,finishExam,onClose:()=>setShowReview(false)}),
    showNav&&e(SimNavSheet,{QSX,sections,cur,answers,flag,rev,done,examMode,hideSolved,setHideSolved,navTopicFilter,setNavTopicFilter,goTo,onClose:()=>setShowNav(false)}),
    showKbd&&e(KbdHelp,{onClose:()=>setShowKbd(false)}),
    // FORMULA MODAL
    scratchOpen&&e(ScratchPad,{onClose:()=>{setScratchOpen(false);setSpAsk(null);},wsKey:_cq&&_cq.id,store:workspaceRef.current,figure:mcStem,qText:_cq&&_cq.q,qOpts:_cq&&_cq.opts,qSteps:_cq&&_cq.steps,qSol:_cq&&_cq.sol,qType:_cq&&_cq.type,answered:!!(_cq&&(hasAns(answers[_cq.id])||done)),seedAsk:spAsk,onSeedUsed:()=>setSpAsk(null),examMode:examMode}),
    showFormulas&&e(FormulaModal,{onClose:()=>setShowFormulas(false),razina:exam&&exam.razina}),

    // NAV
    e(SimHeader,{exam,QSX,cur,answers,qTimes,practice,examMode,timedPractice,done,mcCount,timer,timerDur,timerCls,zen,setZen,zenSeen,setZenSeen,navMore,setNavMore,showCalc,setShowCalc,onExitAsk:()=>setModal(true),onFormulas:()=>setShowFormulas(true),onOpenNav:()=>setShowNav(true),nextBlank,setPaused,bestPct:_bestPct,checkedN:_checkedN,correctN:_correctN,accRatio:_accRatio}),
    e(PaceHint,{QSX,answers,timerDur,timer,done,examMode,ghost:_ghost}),

    // WARMUP (K8) + INTERAKTIVNI VIZUAL (K7)
    vizOpen&&e(VizModal,{kind:vizOpen,onClose:()=>setVizOpen(null)}),
    warmup&&e(WarmupModal,{onClose:()=>setWarmup(false)}),

    // EXIT MODAL
    modal&&e(ExitModal,{exam,onExit,onHome,onClose:()=>setModal(false)}),

    // TIMER ALERT
    timerAlert!==null&&e(TimerAlert,{timerAlert,onDismiss:()=>setTimerAlert(null)}),

    // MAIN LAYOUT
    e("div",{className:"exam-layout",style:{background:flashRed?"rgba(196,48,48,.04)":""},onTouchStart:onTouchStart,onTouchEnd:onTouchEnd},
      // LIJEVI STUPAC  -  pitanje (Sim 3/4: QuestionPanel + AnswerInput)
      e(QuestionPanel,{
        exam,QSX,cur,q,a,correct,answers,pct,sections,currentSection,mcStem,
        practice,examMode,timedPractice,done,isRev,qElapsed,AVG_Q_TIME,userData,qTimes,
        qcardRef,goTo,setAnswers,setShownAnswers,onAnswerCb,setRev,registerCheck,setShowReview,
        flag,setFlag,notes,setNotes,conf,setConf,elim,setElim,fbAnim,
        hints,setHints,formulaPeek,setFormulaPeek,helpOpen,setHelpOpen,showSolvedExample,
        selfExpl,setSelfExpl,errorTags,setErrorTags,onPracticeSimilar,
        scratchOpen,setScratchOpen,spSeen,toolsOpen,setToolsOpen,workspaceRef,setSpAsk,
        speaking,speakQ,readMode,setReadMode,hlMode,setHlMode,renderHL,fontScale,setFontScale,
        isBookmarked,toggleBookmark,setZoomFig,setVizOpen,_ghost,_weakByTopic}),

      // DESNI STUPAC  -  navigator
      e(SimSidebar,{QSX,sections,cur,answers,flag,rev,done,examMode,hideSolved,setHideSolved,navTopicFilter,setNavTopicFilter,goTo})
    )
  );
}
