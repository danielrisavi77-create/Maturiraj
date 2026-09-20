// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Privatni pomocnici glavnog ekrana ispita (Sim): boje tema, format vremena, odbrojavanje,
   memoizirani CalcQuestion i ucestalost tema. */
import React from 'react';
import { EXAMS } from '../core/exams';
import { CalcQuestion } from '../tools/question';
const{useState,useEffect}=React;
export function vc(n){return"var("+n+")";}
export const TYPE_ICON={mc:"\u25c9",num:"\u2211",calc:"\u2211",sa:"\u270e",pa:"\u270e",proof:"\u270e"};
const _TOPIC_COLORS=["#4a90d9","#50c878","#e9b446","#e05252","#2dcfbe","#a78bfa","#f59e0b","#ec4899"];
export function topicColor(t){if(!t)return _TOPIC_COLORS[0];let h=0;for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;return _TOPIC_COLORS[h%_TOPIC_COLORS.length];}
export function fmt2(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
export function useTimer(tot,run,onExpire,onWarn){
  const[s,setS]=useState(tot);
  const warned=React.useRef({ten:false,five:false,zero:false});
  const previous=React.useRef(tot);
  useEffect(()=>{
    if(!run||s<=0)return;
    const id=setInterval(()=>setS(x=>Math.max(0,x-1)),1000);
    return()=>clearInterval(id);
  },[run,s]);
  useEffect(()=>{
    const before=previous.current;
    previous.current=s;
    if(before>600&&s<=600&&!warned.current.ten){warned.current.ten=true;if(onWarn)onWarn(600);}
    if(before>300&&s<=300&&!warned.current.five){warned.current.five=true;if(onWarn)onWarn(300);}
    if(s<=0&&!warned.current.zero){warned.current.zero=true;if(onExpire)onExpire();}
  },[s,onExpire,onWarn]);
  return{s,d:fmt2(s)};
}
export const CalcQuestionM=React.memo(CalcQuestion);
export const TOPIC_FREQ=(()=>{const cnt={},exCnt={};try{Object.values(EXAMS).forEach(function(ex){const seen={};(ex.qs||[]).forEach(function(q){if(!q||!q.topic)return;cnt[q.topic]=(cnt[q.topic]||0)+1;if(!seen[q.topic]){seen[q.topic]=1;exCnt[q.topic]=(exCnt[q.topic]||0)+1;}});});}catch(_e){}return{cnt:cnt,exCnt:exCnt,totalExams:Object.keys(EXAMS).length};})();
