// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Korijenska komponenta enginea: navigacija medu ekranima, teme i postavke,
   ucitavanje ispita i upis rezultata u korisnicki napredak. */
import React from 'react';
import { DS, SUBJECT, TOPIC_LABELS } from '../core/state';
import { EXAMS, __onExamsChanged, isExamLoaded, allExamsLoaded, loadExam, loadAllExams } from '../core/exams';
import { getLevel, LEVEL_NAMES, fireConfetti } from '../core/ui';
import { chk } from '../core/grading';
import { calcXpGain, updateStreak } from '../core/progress';
import { FormulaSheet } from '../tools/formulas';
import { DDayModal, DisclaimerModal, OnboardingModal, XpFloater } from '../tools/modals';
import { DailyChallengeScreen } from '../screens/today';
import { ModeSelect, GuideScreen } from '../screens/modes';
import { StatsScreen, PDFReportScreen } from '../screens/stats';
import { AIPractice, TopicFilterScreen, ErrorsScreen, AdaptiveTrening } from '../screens/practice';
import { BookmarksScreen, BrowseScreen } from '../screens/browse';
import { SpacedRepetitionScreen, FlashcardScreen } from '../screens/srs';
import { Sim } from '../sim/sim';
import { ACHIEVEMENTS, achLevel, TIER_MEDAL, TIER_NAME } from './achievements';
import { useUserData } from './userdata';
import { Home } from './home';
const{createElement:e,useState,useEffect}=React;
function App(){
  const[screen,_setScreen]=useState("home");
  const navStackRef=React.useRef([]);
  function setScreen(to){if(typeof to==="string"&&to!==screen){navStackRef.current.push(screen);if(navStackRef.current.length>40)navStackRef.current.shift();}_setScreen(to);}
  function goBack(){pendingResumeRef.current=null;var prev=navStackRef.current.pop();_setScreen(prev||"home");window.scrollTo(0,0);}
  const[examKey,setExamKey]=useState(Object.keys(EXAMS)[0]);
  useEffect(()=>{
    const SEL=".opt,.mc,.exam-btn,.year-card-hdr,.next-step-card,.qicon";
    const stamp=root=>{if(!root||!root.querySelectorAll)return;
      root.querySelectorAll(SEL).forEach(el=>{if(!el.hasAttribute("tabindex")){el.setAttribute("tabindex","0");el.setAttribute("role","button");}});
      root.querySelectorAll("svg:not([role]):not([aria-hidden])").forEach(s=>{var w=s.getAttribute("width");var small=w&&/^\d+(\.\d+)?$/.test(w)&&parseFloat(w)<=24;if(small){s.setAttribute("aria-hidden","true");}else{s.setAttribute("role","img");if(!s.getAttribute("aria-label"))s.setAttribute("aria-label","Matemati\u010dka ilustracija uz zadatak");}});};
    stamp(document);
    const mo=new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)stamp(n);})));
    mo.observe(document.body,{childList:true,subtree:true});
    const onKey=ev=>{const a=document.activeElement;
      if(!a||!a.matches||!a.matches(SEL))return;
      if(ev.key===" "){ev.preventDefault();a.click();}
      else if(ev.key==="Enter"&&!a.matches(".opt")){ev.preventDefault();a.click();}};
    document.addEventListener("keydown",onKey);
    return()=>{mo.disconnect();document.removeEventListener("keydown",onKey);};
  },[]);
  const[pendingExamKey,setPendingExamKey]=useState(null);
  // 2.1: EXAMS se puni lazy — ponovo iscrtaj kad ispit stigne.
  const[,_bumpExams]=useState(0);
  const[examLoad,setExamLoad]=useState(null); // null | {pct}
  const[examErr,setExamErr]=useState(null);   // null | {msg,retry}
  useEffect(()=>__onExamsChanged(()=>_bumpExams(x=>x+1)),[]);
  // Home je iscrtan iz kataloga; ostatak (bez zakljucanih) se dovlaci u pozadini za cross-exam modove.
  useEffect(()=>{const t=setTimeout(()=>{loadAllExams().catch(()=>{});},1500);return()=>clearTimeout(t);},[]);
  // Ucitavanje moze pasti (offline, CDN 404, deploy u tijeku) — tada NE ulazimo u ekran s 0 pitanja,
  // nego korisnik dobije poruku i "Pokusaj ponovno".
  function withExam(k,fn){
    if(!k||isExamLoaded(k)) return fn();
    setExamLoad({pct:0});setExamErr(null);
    loadExam(k).then(()=>{
      setExamLoad(null);
      if(!isExamLoaded(k)) throw new Error("Ispit nije ucitan.");
      fn();
    }).catch(()=>{
      setExamLoad(null);
      setExamErr({msg:"Ne mogu učitati zadatke ovog ispita. Provjeri internetsku vezu.",retry:()=>withExam(k,fn)});
    });
  }
  function withAllExams(fn){
    if(allExamsLoaded()) return fn();
    setExamLoad({pct:0});setExamErr(null);
    loadAllExams(p=>setExamLoad({pct:p})).then((r)=>{
      setExamLoad(null);
      if(r&&r.total&&r.failed>=r.total) throw new Error("Nijedan ispit nije ucitan.");
      fn();
    }).catch(()=>{
      setExamLoad(null);
      setExamErr({msg:"Ne mogu učitati zadatke. Provjeri internetsku vezu.",retry:()=>withAllExams(fn)});
    });
  }
  function goAll(sc){ withAllExams(()=>{setScreen(sc);window.scrollTo(0,0);}); }
  const[dDayOpen,setDDayOpen]=useState(false);
  const[xpGains,setXpGains]=React.useState([]);
  const[darkMode,setDarkMode]=useState(()=>{try{
    const v=DS.get("mat_dark");
    if(v==="1")return true; if(v==="0")return false;
    return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
  }catch{return false}});
  const[soundOn,setSoundOn]=useState(()=>{try{return DS.get("mat_sound")!=="0"}catch{return true}});
  const[cbMode,setCbMode]=useState(()=>{try{return DS.get("mat_cb")==="1"}catch{return false}});
  const[dysMode,setDysMode]=useState(()=>{try{return DS.get("mat_dys")==="1"}catch{return false}});
  const[showDisclaimer,setShowDisclaimer]=useState(false);
  const[userRazina,setUserRazina]=useState(()=>{try{return DS.get("mat_razina")||null}catch(e){return null}});
  const[showOnboarding,setShowOnboarding]=useState(false);
  const[,_bumpResume]=useState(0);
  const[,_bumpPro]=useState(0);
  useEffect(()=>{const f=()=>_bumpPro(x=>x+1);window.addEventListener("discere-pro",f);return()=>window.removeEventListener("discere-pro",f);},[]);
  useEffect(()=>{try{document.title=SUBJECT.docTitleTpl(userRazina);}catch(e){}},[userRazina]);
  const[badgeToast,setBadgeToast]=useState(null);
  function goPatchResult(patch){updateUserData(p=>{const h=[...(p.history||[])];if(!h.length)return p;h[h.length-1]={...h[h.length-1],...patch};return{...p,history:h};});}
  const pendingResumeRef=React.useRef(null);
  const resumeInfo=(()=>{try{const r=JSON.parse(DS.get("mat_resume")||"null");
    return r&&r.key&&EXAMS[r.key]&&Object.keys(r.answers||{}).length>0&&(Date.now()-(r.ts||0)<48*3600*1000)?r:null;}catch(e){return null;}})();
  function goResume(){if(!resumeInfo)return;withExam(resumeInfo.key,()=>{pendingResumeRef.current=resumeInfo;setExamKey(resumeInfo.key);
    setScreen(resumeInfo.examMode?"exammode":resumeInfo.timedPractice?"practice_timed":resumeInfo.practice?"practice":"exam");window.scrollTo(0,0);});}
  function discardResume(){try{DS.set("mat_resume","");}catch(e){}pendingResumeRef.current=null;_bumpResume(x=>x+1);}

  useEffect(()=>{
    document.body.classList.toggle("dark-mode",darkMode);
    document.body.classList.toggle("light-mode",!darkMode);
    DS.set("mat_dark",darkMode?"1":"0");
  },[darkMode]);
  useEffect(()=>{
    document.body.classList.toggle("cb-mode",cbMode);
    document.body.classList.toggle("dys-mode",dysMode);
    DS.set("mat_cb",cbMode?"1":"0");
    DS.set("mat_dys",dysMode?"1":"0");
  },[cbMode,dysMode]);

  function playSound(type){
    if(!soundOn)return;
    try{if(navigator.vibrate){const VP={correct:[15],wrong:[20,50,20],done:[15,40,15,40,70],levelup:[15,40,15,40,70]};if(VP[type])navigator.vibrate(VP[type]);}}catch(eV){}
    try{
      const ctx=new(window.AudioContext||window.webkitAudioContext)();
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      if(type==="correct"){osc.frequency.setValueAtTime(880,ctx.currentTime);osc.frequency.setValueAtTime(1100,ctx.currentTime+.1);gain.gain.setValueAtTime(.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.3);osc.start();osc.stop(ctx.currentTime+.3);}
      else if(type==="wrong"){osc.frequency.setValueAtTime(330,ctx.currentTime);osc.frequency.setValueAtTime(220,ctx.currentTime+.1);gain.gain.setValueAtTime(.1,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.3);osc.type="sawtooth";osc.start();osc.stop(ctx.currentTime+.3);}
      else if(type==="done"){[523,659,784].forEach((f,i)=>{const o2=ctx.createOscillator(),g2=ctx.createGain();o2.connect(g2);g2.connect(ctx.destination);o2.frequency.value=f;g2.gain.setValueAtTime(.12,ctx.currentTime+i*.12);g2.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+i*.12+.25);o2.start(ctx.currentTime+i*.12);o2.stop(ctx.currentTime+i*.12+.25);});}
    }catch(e){}
  }
  window._playSound=playSound;

  const[userData,updateUserData,reloadUserData]=useUserData();
  const achInit=React.useRef(false);
  React.useEffect(()=>{
    if(!userData)return;
    const prevB=userData.badges||{};
    const next={...prevB};let changed=false,up=null,upLv=0;
    ACHIEVEMENTS.forEach(a=>{
      let lv=0;try{lv=achLevel(a,userData);}catch(e){lv=0;}
      const prev=prevB[a.id];
      const prevLv=(typeof prev==="number"&&prev<100)?prev:(prev?1:0);
      if(lv>0){if(prev!==lv){next[a.id]=lv;changed=true;}}else if(prev!=null){delete next[a.id];changed=true;}
      if(achInit.current&&lv>prevLv){up=a;upLv=lv;}
    });
    if(changed)updateUserData(p=>({...p,badges:{...next}}));
    if(up){setBadgeToast({...up,_lv:upLv});fireConfetti();setTimeout(()=>setBadgeToast(null),4200);}
    achInit.current=true;
  },[userData]);

  // ── Parent (Supabase) bridge: signaliziraj READY, primi HYDRATE ──
  useEffect(()=>{
    function applyHydrate(){
      const st=window.__DISCERE_HYDRATE__; if(!st) return;
      DS.hydrate(st);
      reloadUserData();
      try{ setDarkMode(DS.get("mat_dark")==="1"); }catch(e){}
      try{ setSoundOn(DS.get("mat_sound")!=="0"); }catch(e){}
      try{ setUserRazina(DS.get("mat_razina")||null); }catch(e){}
    }
    if(window.__DISCERE_HYDRATE__) applyHydrate();
    window.addEventListener("discere-hydrate",applyHydrate);
    try{ if(window.parent&&window.parent!==window) window.parent.postMessage({type:"DISCERE_READY"},"*"); }catch(e){}
    return()=>window.removeEventListener("discere-hydrate",applyHydrate);
  },[]);

  function goHome(){pendingResumeRef.current=null;navStackRef.current=[];_setScreen("home");window.scrollTo(0,0);}
  function goExam(k){withExam(k,()=>{setExamKey(k);setScreen("exam");window.scrollTo(0,0);});}
  // ModeSelect cita exam.qs (broj zadataka, "Sto te ceka") — zato i ovaj ulaz mora biti gated.
  function goModeSelect(k){withExam(k,()=>{setPendingExamKey(k);setScreen("modeselect");window.scrollTo(0,0);});}
  function goPractice(k){const kk=k||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("practice");window.scrollTo(0,0);});}
  function goPracticeTimer(k){const kk=k||pendingExamKey||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("practice_timed");window.scrollTo(0,0);});}
  function goExamMode(k){const kk=k||pendingExamKey||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("exammode");window.scrollTo(0,0);});}
  function goStats(){goAll("stats");}
  function goAdaptive(){goAll("adaptive");}
  function goFormule(){setScreen("formule");window.scrollTo(0,0);}
  function goPDFReport(){setScreen("pdf_report");window.scrollTo(0,0);}
  function goGuide(){setScreen("guide");window.scrollTo(0,0);}
  function goFilter(){goAll("filter");}
  function goSRS(){goAll("srs");}
  function goAIPractice(){setScreen("aipractice");window.scrollTo(0,0);}
  function goDDay(){setDDayOpen(true);}
  function goFilterSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);
    window._virtualExam=virtualExam;
    setScreen("filter_session");
    window.scrollTo(0,0);
  }
  function goVirtualExam(razina){ withAllExams(()=>__goVirtualExam(razina)); }
  function __goVirtualExam(razina){
    const target=razina||"B";
    const examKeys=Object.keys(EXAMS).filter(k=>EXAMS[k].razina===target && !k.startsWith("_virtual_"));
    const allQs=[];
    examKeys.forEach(k=>{
      (EXAMS[k].qs||[]).forEach(q=>allQs.push(Object.assign({},q,{_srcKey:k,_examKey:k,_origId:q.id})));
    });
    for(let i=allQs.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [allQs[i],allQs[j]]=[allQs[j],allQs[i]];
    }
    const count=target==="A"?36:28;
    const selected=allQs.slice(0,count).map((q,idx)=>Object.assign({},q,{id:idx+1}));
    const vex={
      key:"_virtual_"+target+"_"+Date.now(),
      year:"Virtual",
      season:"random",
      razina:target,
      label:"Virtualni ispit ("+target+" razina)",
      qs:selected,
      duration:(target==="A"?180:150)*60
    };
    vex._loaded=true;
    window._virtualExam=vex;
    EXAMS[vex.key]=vex;
    setExamKey(vex.key);
    setScreen("virtual_exam");
    window.scrollTo(0,0);
  }
  function goErrors(){goAll("errors");}
  function goBrowse(){goAll("browse");}
  // BookmarksScreen je cross-exam (rjesava EXAMS[examKey].qs.find) — treba sve ispite kao i browse/srs.
  function goBookmarks(){goAll("bookmarks");}
  function goBookmarkSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);
    window._virtualExam=virtualExam;
    setScreen("practice");
    window.scrollTo(0,0);
  }
  function goFlashcards(){goAll("flashcards");}
  function goDailyChallenge(){goAll("daily");}

  function goPracticeExamErrors(wrongQs,srcExam){
    const virtualExam={key:"exam_errors_session",year:srcExam.year,season:srcExam.season,label:srcExam.label+"  -  Greške",qs:[...wrongQs].sort(()=>Math.random()-.5),duration:30*60};
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;setScreen("errors_session");window.scrollTo(0,0);
  }
  function goPracticeSimilar(topic,topicLabel){ withAllExams(()=>__goPracticeSimilar(topic,topicLabel)); }
  function __goPracticeSimilar(topic,topicLabel){
    // Skupi sve zadatke iste teme iz SVIH ispita
    const allQs=[];
    Object.values(EXAMS).forEach(exam=>{
      (exam.qs||[]).forEach(q=>{
        if(q.topic===topic&&q.type!=="proof"&&q.type!=="sa"){
          allQs.push({...q,_examLabel:exam.year+" "+exam.label});
        }
      });
    });
    const shuffled=[...allQs].sort(()=>Math.random()-.5);
    const virtualExam={
      key:"similar_session",year:"Slični zadatci",season:"session",
      label:topicLabel||topic,
      qs:shuffled,duration:Math.max(20,shuffled.length*4)*60
    };
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;
    setScreen("similar_session");window.scrollTo(0,0);
  }
  function goMixedTopics(){ withAllExams(()=>__goMixedTopics()); }
  function __goMixedTopics(){
    const lvl=userRazina||"B";
    // slabost iz povijesti (topic_breakdown), >=3 pokušaja i pct<60%
    const acc={};
    ((userData&&userData.history)||[]).forEach(function(h){
      var tb=h&&h.topic_breakdown; if(!tb)return;
      Object.keys(tb).forEach(function(t){ if(!acc[t])acc[t]={c:0,n:0}; acc[t].c+=tb[t].correct||0; acc[t].n+=tb[t].total||0; });
    });
    var weak=Object.keys(acc).map(function(t){return {t:t,pct:acc[t].n?acc[t].c/acc[t].n:1,n:acc[t].n};})
      .filter(function(r){return r.n>=3 && r.pct<0.6;}).sort(function(a,b){return a.pct-b.pct;})
      .slice(0,4).map(function(r){return r.t;});
    // bazen po temi (samo trenutna razina, bez proof/sa za auto-feedback)
    var byTopic={};
    Object.keys(EXAMS).forEach(function(k){ var ex=EXAMS[k]; if(!ex||ex.razina!==lvl||k.indexOf("_virtual_")===0||k.indexOf("mixed_session_")===0)return;
      (ex.qs||[]).forEach(function(q){ if(q.type==="proof"||q.type==="sa"||!q.topic)return; (byTopic[q.topic]=byTopic[q.topic]||[]).push(Object.assign({},q,{_examLabel:ex.year+" "+ex.label})); });
    });
    // fallback: premalo signala -> 4 teme s najviše zadataka (spread)
    if(weak.length<2){ weak=Object.keys(byTopic).sort(function(a,b){return byTopic[b].length-byTopic[a].length;}).slice(0,4); }
    weak=weak.filter(function(t){return byTopic[t]&&byTopic[t].length;});
    if(weak.length<2){ try{alert("Nedovoljno zadataka za miješanu sesiju na ovoj razini.");}catch(e){} return; }
    weak.forEach(function(t){ byTopic[t].sort(function(){return Math.random()-0.5;}); });
    // INTERLEAVING: round-robin po temama do ~20
    var TARGET=20, ptr={}; weak.forEach(function(t){ptr[t]=0;});
    var out=[], added=true;
    while(out.length<TARGET && added){ added=false;
      for(var wi=0; wi<weak.length; wi++){ var t=weak[wi]; if(ptr[t]<byTopic[t].length){ out.push(byTopic[t][ptr[t]++]); added=true; if(out.length>=TARGET)break; } }
    }
    if(out.length<4){ try{alert("Nedovoljno zadataka za miješanu sesiju.");}catch(e){} return; }
    var qs=out.map(function(q,idx){return Object.assign({},q,{id:idx+1});});
    var labels=weak.map(function(t){return TOPIC_LABELS[t]||t;});
    var vex={ key:"mixed_session_"+Date.now(), year:"Mije\u0161ane teme", season:"session", razina:lvl,
      label:labels.slice(0,3).join(" \u00b7 ")+(labels.length>3?" +"+(labels.length-3):""), qs:qs, duration:Math.max(20,qs.length*3)*60 };
    vex._loaded=true;
    setExamKey(vex.key); window._virtualExam=vex; EXAMS[vex.key]=vex;
    setScreen("similar_session"); window.scrollTo(0,0);
  }
  function goErrorSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;setScreen("errors_session");window.scrollTo(0,0);
  }

  function onExamDone(result){
    const xpGain=calcXpGain(result.pct,result.total);
    if(result.pct>=70)window._playSound?.("done");
    // Pokreni XP floater (čita trenutni userData.xp direktno)
    const _oldXp=userData?.xp||0;
    const _newXp=_oldXp+xpGain;
    const _oldLv=getLevel(_oldXp);
    const _newLv=getLevel(_newXp);
    setXpGains([{xp:xpGain,levelUp:_newLv>_oldLv,newLevel:LEVEL_NAMES[_newLv]||""}]);
    setTimeout(()=>setXpGains([]),3000);
    updateUserData(prev=>{
      const updated=updateStreak(prev);
      const errorTracker={...(prev.errorTracker||{})};
      const examQs=EXAMS[result.examKey]?.qs||[];
      examQs.forEach(q=>{
        if(q.type==="proof"||q.type==="sa"||q.type==="pa") return;
        const ok=chk(q,result.answers?.[q.id]);
        const key=result.examKey+"_"+q.id;
        if(ok===false){
          const ex=errorTracker[key]||{count:0,q:q.q.slice(0,80),topic:q.topic||"ostalo",examKey:result.examKey,qid:q.id,type:q.type};
          const tags=result.errorTags?.[q.id]||ex.tags||[];
          errorTracker[key]={...ex,count:ex.count+1,lastDate:new Date().toLocaleDateString("hr"),tags};
        } else if(ok===true&&errorTracker[key]){
          errorTracker[key]={...errorTracker[key],count:Math.max(0,errorTracker[key].count-1)};
          if(errorTracker[key].count===0) delete errorTracker[key];
        }
      });
      // Akumuliraj tagove grešaka globalno
      const globalErrorTags={...(prev.errorTagCounts||{})};
      if(result.errorTags){
        Object.values(result.errorTags).forEach(tags=>{
          (tags||[]).forEach(tag=>{
            globalErrorTags[tag]=(globalErrorTags[tag]||0)+1;
          });
        });
      }
      const newHistory=[...(prev.history||[]),{
        examLabel:result.examLabel,examKey:result.examKey,
        razina:result.razina||"B",
        date:new Date().toLocaleDateString("hr"),hour:new Date().getHours(),pct:result.pct,grade:result.grade,
        cor:result.cor,total:result.total,qTimes:result.qTimes||{},
        mode:result.examMode?"simulacija":"vježbanje",
        topic_breakdown:result.topic_breakdown||{},
        // 1.5: sim_progress treba odgovore i tagove grešaka, ne samo agregat.
        answers:result.answers||{},
        errorTags:result.errorTags||{}
      }];
      const merged={...updated,xp:(prev.xp||0)+xpGain,history:newHistory,errorTracker,errorTagCounts:globalErrorTags,totalExams:(prev.totalExams||0)+1};
      return merged;
    });
  }

  const activeExam=screen==="errors_session"?(window._virtualExam||EXAMS[examKey]):EXAMS[examKey];

  const toggles=e("div",{style:{display:"flex",gap:6,marginLeft:"auto"}},
    e("button",{onClick:()=>setShowDisclaimer(true),
      title:"O aplikaciji",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },"ℹ️"),
    e("button",{onClick:()=>{const n=!soundOn;setSoundOn(n);DS.set("mat_sound",n?"1":"0");},
      title:soundOn?"Isključi zvuk":"Uključi zvuk",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },soundOn?"🔊":"🔇"),
    e("button",{onClick:()=>setCbMode(v=>!v),title:cbMode?"Isključi mod za daltonizam":"Mod za daltonizam",style:{background:cbMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:cbMode?"var(--blue)":"var(--muted)"}},"👁️"),
    e("button",{onClick:()=>setDysMode(v=>!v),title:dysMode?"Standardni tekst":"Disleksija — lakše čitanje",style:{background:dysMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:dysMode?"var(--blue)":"var(--muted)"}},"🔤"),
    e("button",{onClick:()=>setDarkMode(d=>!d),
      title:darkMode?"Svijetli mod":"Tamni mod",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },darkMode?"☀️":"🌙")
  );

  function saveOnboarding(raz,grade){
    setUserRazina(raz); DS.set("mat_razina",raz);
    if(grade) DS.set("mat_target_grade",String(grade));
    setShowOnboarding(false);
  }
  return e("div",{className:"app-shell",style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)"}},
    (showOnboarding||!userRazina)&&e(OnboardingModal,{initialRazina:userRazina,initialGrade:(()=>{const g=parseInt(DS.get("mat_target_grade"));return g>=2&&g<=5?g:null;})(),onSave:saveOnboarding,onClose:()=>setShowOnboarding(false),canClose:!!userRazina}),
    showDisclaimer&&e(DisclaimerModal,{onClose:()=>setShowDisclaimer(false)}),
    // 2.1: progress dok se ispiti dovlace (jedan ispit ili cijeli set za cross-exam modove).
    examLoad&&e("div",{style:{position:"fixed",inset:0,zIndex:320,background:"rgba(6,9,16,.72)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:320,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:12}},"Učitavam zadatke…"),
        e("div",{style:{height:6,borderRadius:99,background:"var(--s3)",overflow:"hidden"}},
          e("div",{style:{height:"100%",width:Math.max(6,Math.round((examLoad.pct||0)*100))+"%",background:"linear-gradient(90deg,var(--blue),#7b9fff)",borderRadius:99,transition:"width .25s ease"}})),
        e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:8}},Math.round((examLoad.pct||0)*100)+"%"))),
    // 2.1: ucitavanje palo — vidljiva poruka + ponovni pokusaj umjesto tihog ulaska u prazan ekran.
    examErr&&e("div",{style:{position:"fixed",inset:0,zIndex:321,background:"rgba(6,9,16,.72)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:340,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontSize:34,marginBottom:10}},"📡"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:18,color:"var(--text)",marginBottom:8}},"Učitavanje nije uspjelo"),
        e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6,marginBottom:16}},examErr.msg),
        e("div",{style:{display:"flex",gap:8}},
          e("button",{onClick:function(){var r=examErr.retry;setExamErr(null);if(r)r();},style:{flex:1,background:"var(--blue)",color:"#fff",border:"none",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 14px",borderRadius:10,cursor:"pointer"}},"↻ Pokušaj ponovno"),
          e("button",{onClick:function(){setExamErr(null);},style:{background:"var(--s2)",color:"var(--text)",border:"1px solid var(--bdr)",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 14px",borderRadius:10,cursor:"pointer"}},"Odustani")))),
    dDayOpen&&React.createElement(DDayModal,{razina:userRazina,history:(userData&&userData.history)||[],onStart:function(k){setDDayOpen(false);goExamMode(k);},onClose:function(){setDDayOpen(false);}}),
    e(XpFloater,{gains:xpGains}),
    badgeToast&&e("div",{style:{position:"fixed",bottom:20,left:20,zIndex:160,display:"flex",gap:10,alignItems:"center",
      background:"linear-gradient(135deg,#143a7a,#2d6ad4)",border:"1px solid rgba(255,255,255,.25)",borderRadius:"var(--rr)",
      padding:"12px 16px",color:"#fff",boxShadow:"0 10px 30px -10px rgba(0,0,0,.5)",animation:"mcIn .4s both",cursor:"pointer"},
      onClick:()=>setBadgeToast(null)},
      e("span",{style:{fontSize:24}},badgeToast._lv?TIER_MEDAL[badgeToast._lv]:badgeToast.ico),
      e("div",null,
        e("div",{style:{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#8fb4f5"}},(badgeToast._lv&&badgeToast._lv>1)?("Nova razina \u00b7 "+(TIER_NAME[badgeToast._lv]||"")):"Novo postignu\u0107e"),
        e("div",{style:{fontSize:13.5,fontWeight:800}},badgeToast.name+(badgeToast._lv?" "+TIER_MEDAL[badgeToast._lv]:"")))),
    screen==="home"&&React.createElement(Home,{onExam:goModeSelect,onPrepareExams:(fn)=>withAllExams(fn||(()=>{})),onPractice:goPractice,onStats:goStats,onAdaptive:goAdaptive,onFormule:goFormule,onErrors:goErrors,onBrowse:goBrowse,onFlashcards:goFlashcards,onDailyChallenge:goDailyChallenge,onBookmarks:goBookmarks,onFilter:goFilter,onMixed:goMixedTopics,onSRS:goSRS,onAIPractice:goAIPractice,onDDay:goDDay,onGuide:goGuide,onStartErrorSession:goErrorSession,razina:userRazina,onEditRazina:()=>setShowOnboarding(true),resume:resumeInfo,onResume:goResume,onDiscardResume:discardResume,onSetGoal:(m)=>updateUserData(p=>({...p,dailyGoalMin:m})),userData,toggles}),
    screen==="modeselect"&&React.createElement(ModeSelect,{examKey:pendingExamKey,onExamMode:goExamMode,onPractice:goPractice,onPracticeTimer:goPracticeTimer,onVirtual:goVirtualExam,onBack:goBack}),
    screen==="adaptive"&&React.createElement(AdaptiveTrening,{userData,onExit:goBack,onHome:goHome,onStartErrorSession:goErrorSession}),
    screen==="formule"&&React.createElement(FormulaSheet,{onExit:goBack,onHome:goHome}),
    screen==="exam"&&React.createElement(Sim,{exam:EXAMS[examKey],practice:false,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="exammode"&&React.createElement(Sim,{exam:EXAMS[examKey],practice:false,examMode:true,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="practice"&&React.createElement(Sim,{exam:EXAMS[examKey],practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="practice_timed"&&React.createElement(Sim,{exam:EXAMS[examKey],practice:true,examMode:false,timedPractice:true,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="errors_session"&&React.createElement(Sim,{exam:activeExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="similar_session"&&React.createElement(Sim,{exam:window._virtualExam||activeExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="stats"&&React.createElement(StatsScreen,{userData,onBack:goBack,onPDFReport:goPDFReport,onStartErrorSession:goErrorSession}),
    screen==="errors"&&React.createElement(ErrorsScreen,{userData,onStart:goErrorSession,onBack:goBack}),
    screen==="browse"&&React.createElement(BrowseScreen,{onBack:goBack}),
    screen==="bookmarks"&&React.createElement(BookmarksScreen,{onBack:goBack,onStartSession:goBookmarkSession}),
    screen==="flashcards"&&React.createElement(FlashcardScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="srs"&&React.createElement(SpacedRepetitionScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="aipractice"&&React.createElement(AIPractice,{onBack:goBack,onHome:goHome,userData,onUpdateUserData:updateUserData}),
    screen==="daily"&&React.createElement(DailyChallengeScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="pdf_report"&&React.createElement(PDFReportScreen,{userData,onBack:goStats}),
    screen==="guide"&&React.createElement(GuideScreen,{onBack:goBack}),
    screen==="filter"&&React.createElement(TopicFilterScreen,{onStart:goFilterSession,onBack:goBack}),
    screen==="filter_session"&&React.createElement(Sim,{exam:window._virtualExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="virtual_exam"&&React.createElement(Sim,{exam:window._virtualExam,practice:false,examMode:true,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
  );
}
export { App };
