'use client';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export function useQuestionTimes(){
  const[qTimes,setQTimes]=useState({});
  const latest=useRef({});
  const start=useRef(null);
  useLayoutEffect(()=>{
    start.current=Date.now();
  },[]);
  const recordQuestionTime=useCallback((qid)=>{
    const now=Date.now();
    const elapsed=Math.round((now-start.current)/1000);
    if(elapsed>0&&elapsed<600){
      latest.current={...latest.current,[qid]:elapsed};
      setQTimes(latest.current);
    }
    start.current=now;
    return latest.current;
  },[]);
  return{qTimes,recordQuestionTime};
}
