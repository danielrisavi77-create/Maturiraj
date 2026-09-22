// @ts-nocheck
'use client';
/* 5.4 (Sim 1/4): stanje ispitne sesije izdvojeno iz sim.tsx bez promjene ponasanja.
   Ovdje zive odgovori, pozicija, vremena po zadatku, oznake i spremljeni zadaci,
   tajmer s upozorenjima, pauza i predaja ispita — zajedno sa svim set-funkcijama
   i efektima koji ih odrzavaju (tick per-question tajmera, spremanje "mat_resume").
   Sve je prepisano doslovno iz Sim-a: isti inicijalizatori, iste ovisnosti efekata
   i isti redoslijed, pa se ponasanje ne mijenja. */
import React from 'react';
import { DS } from '../core/state';
import { chk, hasAns } from '../core/grading';
import { grade } from '../core/progress';
import { fireConfetti } from '../core/ui';
import { useTimer } from './helpers';
const{useState,useEffect,useRef}=React;

export function useExamSession({exam,QSX,practice,examMode,timedPractice,resume,onDone}){
  const[cur,setCur]=useState(()=>resume?.cur||0);
  const[answers,setAnswers]=useState(()=>resume?.answers||{});
  const[conf,setConf]=useState(()=>resume?.conf||{});
  const[flag,setFlag]=useState(()=>resume?.flag||{});
  const[bookmarks,setBookmarks]=useState(()=>{
    try{return JSON.parse(DS.get("mat_bookmarks")||"{}");}catch{return {};}
  });
  const[visited,setVisited]=useState({0:true});
  const[done,setDone]=useState(false);
  const[paused,setPaused]=useState(false);
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

  function toggleBookmark(qid){
    // Ispitni mod nikad ne sprema oznake: u besplatnom ispitnom modu QSX su pitanja
    // zakljucanog ispita (__EXAM_ONLY), pa bi tekst zadatka zavrsio u mat_bookmarks,
    // u cloud syncu (DISCERE_SAVE) i u korisnikovom backupu — a BookmarksScreen ga
    // ionako ne moze razrijesiti jer EXAMS[key].qs za takav ispit ostaje prazan.
    if(examMode) return;
    setBookmarks(prev=>{
      const next={...prev};
      const key=exam.key+"__"+String(qid);
      if(next[key]) delete next[key];
      else next[key]={qid,examKey:exam.key,examLabel:exam.year+"  -  "+exam.label,q:QSX.find(x=>x.id===qid)?.q?.slice(0,80)||""};
      DS.set("mat_bookmarks",JSON.stringify(next));
      return next;
    });
  }

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
  function nextBlank(){
    for(let i=cur+1;i<QSX.length;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
    for(let i=0;i<=cur;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
  }

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

  return{
    cur,answers,setAnswers,conf,setConf,flag,setFlag,bookmarks,
    done,paused,setPaused,qTimes,setShownAnswers,
    timerAlert,setTimerAlert,flashRed,errorTags,setErrorTags,
    qElapsed,timer,timerDur,AVG_Q_TIME,
    goTo,nextBlank,toggleBookmark,finishExam,
  };
}
