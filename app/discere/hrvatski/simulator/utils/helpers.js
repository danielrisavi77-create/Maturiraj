import React, { useState, useEffect, useRef } from 'react';
import { XP_LEVELS } from '../hrvatskiSimulatorData';

const e = React.createElement;
const LL = ["A","B","C","D","E","F"];

function getLevel(xp){let l=0;XP_LEVELS.forEach((v,i)=>{if(xp>=v)l=i;});return l;}
function xpProgress(xp){const l=getLevel(xp);const cur=XP_LEVELS[l],next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.min(100,Math.round((xp-cur)/(next-cur)*100));}
function xpToNext(xp){const l=getLevel(xp);const next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.max(0,next-xp);}
function calcXpGain(pct,total){return Math.round((pct/100)*total*2+(pct>=70?20:0));}

function lsSave(key, value){
  try{
    localStorage.setItem(key, value);
    return true;
  }catch(e){
    // QuotaExceededError — pokušaj osloboditi prostor
    if(e.name==="QuotaExceededError"||e.code===22||e.code===1014){
      try{
        // Ukloni najstarije history entrije
        const userData=JSON.parse(localStorage.getItem("discere_hrv_user")||"{}");
        if(userData.history&&userData.history.length>10){
          userData.history=userData.history.slice(-10);
          localStorage.setItem("discere_hrv_user",JSON.stringify(userData));
          // Pokušaj ponovo
          localStorage.setItem(key,value);
          return true;
        }
        // Ukloni progress saves
        Object.keys(localStorage).filter(k=>k.startsWith("discere_prog_")).forEach(k=>{
          try{localStorage.removeItem(k);}catch(e2){}
        });
        localStorage.setItem(key,value);
        return true;
      }catch(e2){
        console.warn("localStorage pun, ne mogu spremiti:",key);
        return false;
      }
    }
    return false;
  }
}

function lsGet(key, fallback){
  try{return localStorage.getItem(key);}catch(e){return fallback||null;}
}

function useUserData(){
  const KEY="discere_hrv_user";
  const[data,setData]=useState(()=>{try{return JSON.parse(lsGet(KEY)||"{}")||{};}catch(e){return {};}});
  // Cross-tab sync — ako korisnik ima dva taba, sinkroniziraj state
  useEffect(()=>{
    const h=ev=>{
      if(ev.key===KEY){
        try{
          const incoming=JSON.parse(ev.newValue)||{};
          setData(prev=>{
            // Only accept incoming update if its version is newer than what we have
            if((incoming._v||0)>=(prev._v||0)) return incoming;
            return prev;
          });
        }catch(e){}
      }
    };
    window.addEventListener("storage",h);
    return()=>window.removeEventListener("storage",h);
  },[]);
  function update(fn){setData(prev=>{const next={...fn(prev),_v:(prev._v||0)+1};lsSave(KEY,JSON.stringify(next));return next;});}
  return[data,update];
}
function updateStreak(prev){
  const today=new Date().toLocaleDateString("hr");
  const last=prev.lastDate;
  let streak=prev.streak||0;
  if(last===today){return{...prev,lastDate:today};}
  const yesterday=new Date(Date.now()-86400000).toLocaleDateString("hr");
  if(last===yesterday){streak++;}else{streak=1;}
  return{...prev,streak,lastDate:today};
}


// ── Zvuk za achievement unlock ──
function playSuccessSound(){
  if(typeof window==='undefined') return;
  if(window._soundOn===false) return;
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    // Rising arpeggio: C4-E4-G4-C5
    [[261,0],[329,0.09],[392,0.18],[523,0.27]].forEach(([freq,delay])=>{
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type="sine"; osc.frequency.value=freq;
      gain.gain.setValueAtTime(0,ctx.currentTime+delay);
      gain.gain.linearRampToValueAtTime(0.18,ctx.currentTime+delay+0.04);
      gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+delay+0.5);
      osc.start(ctx.currentTime+delay);
      osc.stop(ctx.currentTime+delay+0.55);
    });
  }catch(e){}
}

// ── Zvuk za krivi odgovor ──
function playWrongSound(){
  if(typeof window==='undefined') return;
  if(window._soundOn===false) return;
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type="square";
    osc.frequency.setValueAtTime(180,ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100,ctx.currentTime+0.15);
    gain.gain.setValueAtTime(0.15,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime+0.2);
  }catch(e){}
}

// ── AI proxy poziv ──
// Šalje jedan korisnički prompt na /api/ai-simulator (server proxy s API ključem).
// NIKAD ne zovi api.anthropic.com izravno iz preglednika (nema ključa, CORS).
// Vraća { ok:true, text } ili { ok:false, error } gdje je error korisniku-čitljiva poruka.
async function postAi(prompt, opts){
  const { maxTokens=600, timeoutMs=30000 } = opts||{};
  if(typeof navigator!=="undefined" && navigator.onLine===false){
    return { ok:false, error:"Nema internetske veze — AI funkcije nisu dostupne." };
  }
  const ctrl = typeof AbortController!=="undefined" ? new AbortController() : null;
  const t = ctrl ? setTimeout(()=>ctrl.abort(), timeoutMs) : null;
  try{
    const res=await fetch("/api/ai-simulator",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({messages:[{role:"user",content:String(prompt||"")}],max_tokens:maxTokens}),
      signal:ctrl?ctrl.signal:undefined,
    });
    if(!res.ok){
      if(res.status===429) return { ok:false, error:"Previše zahtjeva — pričekaj nekoliko sekundi pa pokušaj ponovo." };
      if(res.status===401) return { ok:false, error:"Prijavi se za AI funkcije." };
      return { ok:false, error:"AI trenutno nije dostupan (greška "+res.status+")." };
    }
    const data=await res.json();
    const text=data?.content?.[0]?.text||"";
    if(!text) return { ok:false, error:"AI je vratio prazan odgovor. Pokušaj ponovo." };
    return { ok:true, text };
  }catch(err){
    if(err&&err.name==="AbortError") return { ok:false, error:"AI predugo ne odgovara (isteklo vrijeme). Pokušaj ponovo." };
    return { ok:false, error:"Greška u vezi s AI-em. Provjeri internet i pokušaj ponovo." };
  }finally{
    if(t) clearTimeout(t);
  }
}

// ── Pristupačnost modala: Esc zatvara, Tab ostaje unutar modala, fokus se vraća ──
// Vrati ref koji prikvačiš na panel modala (postavi i tabIndex:-1 na taj element).
function useModalTrap(onClose){
  const ref=useRef(null);
  useEffect(()=>{
    const prev=typeof document!=='undefined'?document.activeElement:null;
    const node=ref.current;
    const SEL='a[href],button:not([disabled]),textarea,input:not([disabled]),select,[tabindex]:not([tabindex="-1"])';
    const focusables=()=>node?Array.from(node.querySelectorAll(SEL)).filter(el=>el.offsetParent!==null):[];
    const tid=setTimeout(()=>{const f=focusables();(f[0]||node)&&(f[0]||node).focus&&(f[0]||node).focus();},0);
    function onKey(ev){
      if(ev.key==="Escape"){ev.preventDefault();onClose&&onClose();return;}
      if(ev.key==="Tab"&&node){
        const f=focusables();if(!f.length)return;
        const first=f[0],last=f[f.length-1];
        if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}
        else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}
      }
    }
    document.addEventListener("keydown",onKey,true);
    return()=>{
      clearTimeout(tid);
      document.removeEventListener("keydown",onKey,true);
      try{prev&&prev.focus&&prev.focus();}catch(e){}
    };
  },[onClose]);
  return ref;
}

function chk(q,a){
  if(!a&&a!==0) return null;
  if(q.type==="mc"){return a===q.sol.cl;}
  if(q.type==="mat"){if(!a||typeof a!=="object") return null; return q.sol.pairs.every(p=>a[p.l]===p.r);}
  return null;
}
// Identitet pitanja: virtualne sesije (dnevni izazov, adaptivni trening, filter, greške,
// oznake) kopiraju pitanja iz više ispita i renumeriraju im id-eve, pa se izvorni ispit i
// izvorni id čuvaju u _examKey/_srcId. Sve što se sprema ili traži po ispitu (bookmarci,
// errorTracker, skripte, distraktori) mora ići preko ovoga, a ne preko exam.key/q.id.
function qIdentity(q,exam){
  return{examKey:q?._examKey??exam?.key,qid:q?._srcId??q?.id};
}
// Virtualne sesije spajaju pitanja iz više ispita, a id-evi teku 1..N unutar svakog ispita,
// pa se sudaraju. Kako su answers/rev/qTimes ključani po q.id, jedan odgovor bi inače vrijedio
// za svako pitanje s tim id-em (i tako lažno skorirao tuđa pitanja u errorTrackeru). Zato
// sesija dobiva vlastite id-eve, a izvorni identitet ostaje u _examKey/_srcId (v. qIdentity).
function renumberSessionQs(qs){
  return(qs||[]).map((q,i)=>({...q,_srcId:q._srcId??q.id,id:i+1}));
}
function computeSecLeft(deadlineTs,nowTs){
  return Math.max(0,Math.ceil((deadlineTs-nowTs)/1000));
}
// history u discere_hrv_user raste bez granice (svaki zapis nosi answers+qTimes za ~80
// pitanja). Zapisi se NE brišu — brojevi riješenih ispita, `usedKeys` na početnom ekranu i
// značke za napredak nemaju drugi izvor — nego se samo svima osim zadnjih `keepDetails`
// skida answers/qTimes; ostaje summary (pct, grade, cor, total, topic_breakdown, date,
// mode, examKey). Ako nema što skinuti, vraća se isti niz da migracija pri mountu ne
// pokreće nepotreban upis u localStorage i sinkronizaciju na cloud.
function trimHistory(history,{keepDetails=10}={}){
  const all=history||[];
  const detailFrom=all.length-keepDetails;
  let changed=false;
  const out=all.map((entry,i)=>{
    if(i>=detailFrom) return entry;
    if(!entry||(entry.answers===undefined&&entry.qTimes===undefined)) return entry;
    changed=true;
    const{answers,qTimes,...summary}=entry;
    return summary;
  });
  return changed?out:all;
}
function hasAns(a){
  if(a===undefined||a===null||a==="") return false;
  if(Array.isArray(a)) return a.length>0;
  if(typeof a==="object") return Object.values(a).some(v=>v);
  return true;
}

export { e, LL, getLevel, xpProgress, xpToNext, calcXpGain, lsSave, lsGet, useUserData, updateStreak, playSuccessSound, playWrongSound, chk, hasAns, qIdentity, renumberSessionQs, computeSecLeft, postAi, useModalTrap, trimHistory };

// Matura datumi — promijeni svake akademske godine
export const MATURA_LJETNI   = new Date(parseInt(process.env.NEXT_PUBLIC_MATURA_LJETNI_YEAR ||"2026"), parseInt(process.env.NEXT_PUBLIC_MATURA_LJETNI_MONTH||"5"), parseInt(process.env.NEXT_PUBLIC_MATURA_LJETNI_DAY||"15"));
export const MATURA_JESENSKI = new Date(parseInt(process.env.NEXT_PUBLIC_MATURA_JESEN_YEAR ||"2026"), parseInt(process.env.NEXT_PUBLIC_MATURA_JESEN_MONTH||"7"), parseInt(process.env.NEXT_PUBLIC_MATURA_JESEN_DAY||"20"));
export const MATURA_PLAN_START = new Date(2025, 8, 1); // rujam 2025. — početak šk. godine
