// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Korisnicki napredak u DS storeu: preuzimanje uvezene kopije i useUserData hook. */
import React from 'react';
import { DS } from '../core/state';
const{useState}=React;
try{
  const _imp=DS.get("mat_import_pending");
  if(_imp){
    const _d=JSON.parse(_imp);
    Object.keys(_d).forEach(k=>{if(k.indexOf("mat_")===0&&k!=="mat_import_pending")DS.set(k,_d[k]);});
    DS.set("mat_import_pending","");
  }
}catch(_eImp){}
function useUserData(){
  const KEY="mat_sim_v1";
  const init=()=>{try{const d=DS.get(KEY);return d?JSON.parse(d):{xp:0,streak:0,history:[],errorTracker:{},lastLogin:null}}catch(e){return{xp:0,streak:0,history:[],errorTracker:{},lastLogin:null}}};
  const[ud,setUd]=useState(init);
  function update(fn){setUd(prev=>{const next=typeof fn==="function"?fn(prev):fn;DS.set(KEY,JSON.stringify(next));return next});}
  function reload(){setUd(init());}
  return[ud,update,reload];
}
export { useUserData };
