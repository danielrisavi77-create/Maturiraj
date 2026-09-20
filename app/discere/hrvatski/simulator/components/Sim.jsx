'use client';
import React, { useState, useEffect, useMemo, useRef, Fragment } from 'react';
import confetti from 'canvas-confetti';
import { EXAMS, TOPIC_LABELS, ESEJI, SAZECI, TLBL } from '../hrvatskiSimulatorData';
import { e, LL, chk, hasAns, lsSave, lsGet, playWrongSound, calcXpGain, xpProgress, getLevel, qIdentity, computeSecLeft } from '../utils/helpers';
import ShareStoryCard from '@/components/shared/ShareStoryCard';
import { FREE_LIMIT, canSeeHrvAnalysis, isHrvFreePracticeExam } from '@/components/discere/paywall/paywallHelpers';
import LockedAnalysisSection from '@/components/discere/paywall/LockedAnalysisSection';
import { generateStrategyTips } from '../utils/pedagogy';
import { skriptaZaPitanje, skriptaUrl } from '../data/lektiraSkripta';
import { EssayGrader, MatQ, SaAiHelper, AnswerHelper, ContextPanel } from './QuestionWidgets';
import { isGameModeEnabled } from '@/lib/config/featureFlags';

// Compute ambient exam overlay opacities based on time remaining
function computeAmbientOpacities(secLeft, total) {
  if (!total || secLeft === null || secLeft <= 0) return { gold: 0, red: 0 };
  const ratio = secLeft / total;
  if (ratio > 0.5) return { gold: 0, red: 0 };
  const lastTenRatio = Math.min(600 / total, 0.45);
  if (ratio > lastTenRatio) {
    const t = (0.5 - ratio) / (0.5 - lastTenRatio); // 0→1
    return { gold: t, red: 0 };
  }
  const t = (lastTenRatio - ratio) / lastTenRatio; // 0→1 as time runs out
  return { gold: 1 - t * 0.7, red: t };
}

// Generate smart algorithmic insights from exam timing + accuracy data
function computeSmartInsights(qTimes, answers, questions) {
  const mcQs = questions.filter(q => q.type === 'mc');
  const tvals = mcQs
    .map(q => ({ id: q.id, topic: q.topic, t: qTimes?.[q.id], correct: chk(q, answers?.[q.id]) === true }))
    .filter(v => v.t > 0 && v.t < 600);
  if (tvals.length < 5) return [];
  const avgTime = Math.round(tvals.reduce((a, v) => a + v.t, 0) / tvals.length);
  const byTopic = {};
  tvals.forEach(v => {
    if (!v.topic) return;
    if (!byTopic[v.topic]) byTopic[v.topic] = { sum: 0, count: 0, wrong: 0 };
    byTopic[v.topic].sum += v.t;
    byTopic[v.topic].count++;
    if (!v.correct) byTopic[v.topic].wrong++;
  });
  const ins = [];
  ins.push({ icon: '⏱', text: `Prosječno si odgovarao/la za ${avgTime}s po pitanju.` });
  const slowTopic = Object.entries(byTopic)
    .map(([t, d]) => ({ t, avg: Math.round(d.sum / d.count) }))
    .filter(x => x.avg > avgTime * 1.5 && byTopic[x.t].count >= 2)
    .sort((a, b) => b.avg - a.avg)[0];
  if (slowTopic) {
    const ratio = Math.round(slowTopic.avg / avgTime * 10) / 10;
    ins.push({ icon: '📊', text: `Na pitanjima iz ${TOPIC_LABELS[slowTopic.t] || slowTopic.t} trošiš ${slowTopic.avg}s — ${ratio}× više od prosjeka. Razmisli o time managementu.` });
  }
  const worstTopic = Object.entries(byTopic)
    .map(([t, d]) => ({ t, errRate: d.wrong / d.count, wrong: d.wrong, count: d.count }))
    .filter(x => x.errRate > 0.5 && x.count >= 2)
    .sort((a, b) => b.errRate - a.errRate)[0];
  if (worstTopic) {
    ins.push({ icon: '🎯', text: `${worstTopic.wrong}/${worstTopic.count} krivo u ${TOPIC_LABELS[worstTopic.t] || worstTopic.t} — najslabija tema ovog ispita.` });
  }
  return ins.slice(0, 3);
}

const HRV_RESULTS_UPGRADE_URL="/pro?from=hrv-results&plan=standard";

// Zamjena za zaključani dio rezultata. Pravi sadržaj se namjerno uopće ne renderira —
// free korisnik ne smije doći do točnih odgovora ni kopiranjem DOM-a — pa se prikazuju
// samo zamućeni placeholder redovi ispod overlaya s CTA-om. Placeholder je pozadinski sloj
// (position:absolute), a CTA je u normalnom toku i diktira visinu — obrnuto bi se, uz
// minHeight + overflow:hidden na spremniku, gumb odsjekao na užim ekranima.
function LockedResultsBlock({label,note,rows=4,minHeight=150}){
  return e("div",{style:{position:"relative",marginBottom:22,borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s1)",overflow:"hidden"}},
    e("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,filter:"blur(6px)",pointerEvents:"none",userSelect:"none",padding:"20px 22px",display:"flex",flexDirection:"column",gap:13}},
      Array.from({length:rows},(_,i)=>e("div",{key:i,style:{height:12,borderRadius:6,background:"var(--s3)",width:(52+(i*19)%42)+"%"}}))
    ),
    e("div",{role:"region","aria-label":label,style:{position:"relative",minHeight,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:9,textAlign:"center",padding:"18px 20px",background:"var(--lock-scrim)"}},
      e("div",{style:{fontSize:24}},"🔒"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:15,fontWeight:800,color:"var(--text)"}},label),
      e("div",{style:{fontSize:12.5,color:"var(--text)",opacity:.8,maxWidth:380,lineHeight:1.6}},
        note||"Ocjena, postotak i bodovi ostaju besplatni. Detaljna razrada rezultata dolazi sa Standard planom."),
      e("a",{href:HRV_RESULTS_UPGRADE_URL,className:"btn btn-gold",style:{textDecoration:"none"}},"Otključaj razradu → Standard")
    )
  );
}

// Shared accessibility props for interactive divs
const accBtn={role:"button",tabIndex:0,onKeyDown:ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();ev.currentTarget.click();}}};

function Sim({exam,practice,examMode,onExit,onDone,onGoToExam,userData,isPro=false,isPaid=false,userAccess,onPracticeErrors,onStats,onFilter,highlightQid,onOpenSkripta}){
  if(!exam||!exam.qs) return e("div",{style:{padding:40,textAlign:"center",color:"var(--muted)"}},
    e("div",{style:{fontSize:14,marginBottom:12}},"Ispit nije pronađen."),
    e("button",{className:"btn btn-g",onClick:onExit},"← Natrag")
  );
  const QSX=exam.qs;
  const _lsKey="discere_prog_"+(exam?.key||"x");
  const _exKey="discere_exam_"+(exam?.key||"x");
  // Virtualne sesije (dnevni izazov, adaptivni trening, filter, greške, oznake, vlastita
  // pitanja) dijele jedan ključ napretka po tipu, a neke od njih renumeriraju id-eve pitanja
  // (1..N), pa bi spremljeni odgovori sjeli na posve druga pitanja. Zato se takav zapis pri
  // mountu odbacuje i sesija uvijek kreće od nule.
  const _isVirtual=!/^\d{4}_/.test(exam?.key||"");
  const[_saved]=useState(()=>{
    if(examMode) return null;
    if(_isVirtual){try{localStorage.removeItem(_lsKey);}catch(e){}return null;}
    try{return JSON.parse(localStorage.getItem(_lsKey)||"null");}catch{return null;}
  });
  // Ispitni mod ima vlastiti zapis jer uz odgovore nosi i rok (deadline) predaje. Zapisu
  // kojem je rok istekao (napušten ispit) ne smijemo se vratiti — nastavak bi značio secLeft=0
  // i trenutnu auto-predaju praznog ispita — pa se briše i ispit kreće ispočetka.
  const[_savedExam]=useState(()=>{
    if(!examMode) return null;
    try{
      const s=JSON.parse(localStorage.getItem(_exKey)||"null");
      if(s&&s.deadline&&computeSecLeft(s.deadline,Date.now())>0) return s;
      localStorage.removeItem(_exKey);
      return null;
    }catch{return null;}
  });
  // Spremljeni indeks može biti izvan granica (ispit je u međuvremenu izgubio pitanja),
  // pa se pozicija primarno vraća po id-u pitanja, a indeks se u svakom slučaju ograniči.
  function _resumeIdx(s){
    const max=Math.max(0,QSX.length-1);
    if(s&&s.curId!=null){const i=QSX.findIndex(x=>String(x.id)===String(s.curId));if(i>=0) return i;}
    return Math.min(Math.max(0,(s&&s.cur)||0),max);
  }
  const[[_initCur,_initAnswers,_initRev,_initFlag]]=useState(()=>{
    const s=examMode?_savedExam:_saved;
    if(!s) return[0,{},{},{}];
    return[_resumeIdx(s),s.answers||{},s.rev||{},s.flag||{}];
  });
  const[cur,setCur]=useState(_initCur);
  useEffect(()=>{
    if(highlightQid&&exam?.qs){
      const idx=exam.qs.findIndex(q=>q.id===highlightQid);
      if(idx>=0){setCur(idx);setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),100);}
    }
  },[highlightQid]);
  const[answers,setAnswers]=useState(_initAnswers);
  const[rev,setRev]=useState(_initRev);
  const[flag,setFlag]=useState(_initFlag);
  const[bookmarks,setBookmarks]=useState(()=>{try{return JSON.parse(localStorage.getItem("discere_hrv_bookmarks")||"{}")||{};}catch(e){return {};}});
  const[visited,setVisited]=useState({0:true});

  const[done,setDone]=useState(false);
  // Autosave napretka (samo u vježbanju)
  useEffect(()=>{
    if(examMode||done) return;
    const data={cur,curId:QSX[cur]?.id,answers,rev,flag};
    lsSave(_lsKey,JSON.stringify(data));
  },[cur,answers,rev,flag,examMode,done]);
  const[modal,setModal]=useState(false);
  const[showKeys,setShowKeys]=useState(false);
  const[showSimPojmovnik,setShowSimPojmovnik]=useState(false);
  const[confettiFired,setConfettiFired]=useState(false);
  const[displayPct,setDisplayPct]=useState(0);
  useEffect(()=>{
    if(!done) return;
    const autoQ2=QSX.filter(q=>q.type==="mc");
    const cor2=autoQ2.filter(q=>chk(q,answers[q.id])===true).length;
    const target=autoQ2.length>0?Math.round(cor2/autoQ2.length*100):0;
    if(target===0){setDisplayPct(0);return;}
    let start=null;const dur=1400;
    function tick(ts){
      if(!start) start=ts;
      const prog=Math.min((ts-start)/dur,1);
      setDisplayPct(Math.round(prog*target));
      if(prog<1) requestAnimationFrame(tick);
    }
    const raf=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf);
  },[done]);
  useEffect(()=>{
    if(!done||confettiFired) return;
    const autoQ2=QSX.filter(q=>q.type==="mc");
    const cor2=autoQ2.filter(q=>chk(q,answers[q.id])===true).length;
    const pct2=autoQ2.length>0?Math.round(cor2/autoQ2.length*100):0;
    if(pct2<70) return;
    const colors=pct2>=90?["#3ecf6e","#5b9fff","#e8a830","#f0f0f0"]:["#5b9fff","#a78bfa","#e8a830"];
    confetti({particleCount:pct2>=90?180:80,spread:pct2>=90?120:80,origin:{y:.55},colors,scalar:pct2>=90?1.2:1});
    const t1=pct2>=90?setTimeout(()=>confetti({particleCount:60,spread:60,origin:{y:.4},colors,angle:60}),350):null;
    const t2=pct2>=90?setTimeout(()=>confetti({particleCount:60,spread:60,origin:{y:.4},colors,angle:120}),500):null;
    setConfettiFired(true);
    return()=>{if(t1)clearTimeout(t1);if(t2)clearTimeout(t2);};
  },[done,confettiFired]);
  // XP bar fill animation
  useEffect(()=>{
    if(!done) return;
    const autoQ2=QSX.filter(q=>q.type==="mc");
    const cor2=autoQ2.filter(q=>chk(q,answers[q.id])===true).length;
    const pct2=autoQ2.length>0?Math.round(cor2/autoQ2.length*100):0;
    const gain=calcXpGain(pct2,autoQ2.length);
    const oldXP=userData?.xp||0;
    const newXP=oldXP+gain;
    const lvlUp=getLevel(newXP)>getLevel(oldXP);
    const startProg=lvlUp?0:xpProgress(oldXP);
    setXpBarFill(startProg);
    const t=setTimeout(()=>setXpBarFill(xpProgress(newXP)),700);
    return()=>clearTimeout(t);
  },[done]);
  const[qTimes,setQTimes]=useState({});
  const[shownAnswers,setShownAnswers]=useState({});
  const[confidence,setConfidence]=useState({}); // { qid: 1|2|3 }
  const[xpBarFill,setXpBarFill]=useState(0);
  const[percentile,setPercentile]=useState(null);
  const[revFilter,setRevFilter]=useState("sve"); // "sve" | "tocni" | "krivi"
  const[revOpen,setRevOpen]=useState(true);
  const[mobGrid,setMobGrid]=useState(false); // mobile question grid sheet
  const touchStartX=useRef(0);
  const qStart=useRef(Date.now());

  // Timer za ispitni mod — od 2017. ispit traje 100 min, ranije 72 min
  const examMinutes=exam?.year>=2017?100:72;
  const TOTAL_SEC=examMode?examMinutes*60:null;
  // Rok predaje je apsolutni timestamp da reload (ili zatvaranje kartice) ne resetira ispit.
  const[deadline]=useState(()=>examMode?(_savedExam?.deadline||Date.now()+TOTAL_SEC*1000):null);
  const[secLeft,setSecLeft]=useState(()=>examMode?computeSecLeft(deadline,Date.now()):null);
  const[timerDone,setTimerDone]=useState(false);
  const[calmMode,setCalmMode]=useState(false);
  // 3-2-1 countdown before exam starts — preskače se pri nastavku prekinutog ispita
  const[examCountdown,setExamCountdown]=useState(examMode&&!_savedExam?3:null);
  useEffect(()=>{
    if(examCountdown===null) return;
    if(examCountdown===0){setExamCountdown(null);return;}
    const t=setTimeout(()=>setExamCountdown(c=>c-1),1000);
    return()=>clearTimeout(t);
  },[examCountdown]);
  useEffect(()=>{
    if(!examMode||secLeft===null||examCountdown!==null) return;
    if(secLeft<=0){setTimerDone(true);return;}
    const t=setTimeout(()=>setSecLeft(s=>Math.min(s-1,computeSecLeft(deadline,Date.now()))),1000);
    return()=>clearTimeout(t);
  },[examMode,secLeft,examCountdown,deadline]);
  // Kartica u pozadini: setTimeout se usporava, pa se pri povratku vrijeme čita iz roka.
  useEffect(()=>{
    if(!examMode||!deadline) return;
    const h=()=>{if(!document.hidden) setSecLeft(computeSecLeft(deadline,Date.now()));};
    document.addEventListener("visibilitychange",h);
    return()=>document.removeEventListener("visibilitychange",h);
  },[examMode,deadline]);
  // Autosave ispitnog moda — rok + odgovori, da se F5 ne pretvori u novi ispit.
  useEffect(()=>{
    if(!examMode||done) return;
    lsSave(_exKey,JSON.stringify({deadline,cur,curId:QSX[cur]?.id,answers,rev,flag}));
  },[examMode,done,deadline,cur,answers,rev,flag]);
  function fmtTimer(s){const m=Math.floor(s/60);const ss=s%60;return m+":"+(ss<10?"0":"")+ss;}

  function bmKeyOf(qq){const id=qIdentity(qq,exam);return id.examKey+"__"+id.qid;}
  // Prima samo pitanje, ne id: u sesijama s pitanjima iz više ispita traženje po id-u vraća
  // prvo pitanje s tim brojem, pa bi se označilo tuđe pitanje.
  function toggleBookmark(src){
    if(!src) return;
    const id=qIdentity(src,exam);
    const srcExam=EXAMS[id.examKey]||exam;
    setBookmarks(prev=>{
      const next={...prev};const key=id.examKey+"__"+id.qid;
      if(next[key])delete next[key];else next[key]={qid:id.qid,examKey:id.examKey,examLabel:srcExam.year+" "+srcExam.season,q:src.q?.slice(0,80)||""};
      try{localStorage.setItem("discere_hrv_bookmarks",JSON.stringify(next))}catch(e){}
      return next;
    });
  }

  function recordTime(idx){const elapsed=Math.round((Date.now()-qStart.current)/1000);if(elapsed>0&&elapsed<600)setQTimes(p=>({...p,[QSX[idx]?.id]:elapsed}));qStart.current=Date.now();}

  const q=QSX[cur];
  const qIdent=qIdentity(q,exam);
  const isRev=!!rev[q?.id]||done;
  const answeredCount=Object.keys(answers).filter(k=>hasAns(answers[k])).length;

  // Keyboard shortcuts
  useEffect(()=>{
    if(done) return;
    function onKey(ev){
      if(ev.target.tagName==="INPUT"||ev.target.tagName==="TEXTAREA"||ev.target.tagName==="SELECT") return;
      const curQ=QSX[cur];
      const curIsRev=!!rev[curQ?.id]||done;
      if(curQ.type==="mc"&&!curIsRev&&["a","b","c","d"].includes(ev.key.toLowerCase())){
        const idx=["a","b","c","d"].indexOf(ev.key.toLowerCase());
        if(idx<(curQ.opts||[]).length){setAnswers(p=>({...p,[curQ.id]:LL[idx]}));if(practice)setShownAnswers(p=>({...p,[curQ.id]:true}));}
        return;
      }
      if(ev.key==="Enter"){
        ev.preventDefault();
        if(practice&&!curIsRev&&hasAns(answers[curQ.id])){setRev(p=>({...p,[curQ.id]:true}));if(curQ.type==="mc"&&chk(curQ,answers[curQ.id])===false)playWrongSound();}
        else if(cur<QSX.length-1){recordTime(cur);const nc=cur+1;setCur(nc);setVisited(v=>({...v,[nc]:true}));}
        return;
      }
      if(ev.key==="ArrowRight"&&cur<QSX.length-1){ev.preventDefault();recordTime(cur);const nc=cur+1;setCur(nc);setVisited(v=>({...v,[nc]:true}));return;}
      if(ev.key==="ArrowLeft"&&cur>0){ev.preventDefault();recordTime(cur);const nc=cur-1;setCur(nc);setVisited(v=>({...v,[nc]:true}));return;}
      if(!examMode&&(ev.key==="b"||ev.key==="B")){toggleBookmark(curQ);return;}
      if(ev.key==="f"||ev.key==="F"){setFlag(p=>({...p,[curQ.id]:!p[curQ.id]}));return;}
      if(ev.key==="?"||ev.key==="/"){setShowKeys(k=>!k);return;}
      if(ev.key==="Escape"){setShowKeys(false);setModal(false);return;}
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[cur,answers,rev,done,QSX,practice,examMode]);

  function getIspitInfo(exam){
    // Točna bodovna skala prema NCVVO ispitnim katalozima
    const y=exam?.year||0;
    const mcPitanja=(exam?.qs||[]).filter(q=>q.type==="mc").length;
    if(y>=2023) return{mcBod:62,esejBod:30,sazBod:18,ukupno:110,mcPitanja};
    if(y>=2017) return{mcBod:80,esejBod:60,ukupno:140,mcPitanja};
    if(y>=2010) return{mcBod:72,esejBod:50,ukupno:122,mcPitanja};
    return{mcBod:60,esejBod:40,ukupno:100,mcPitanja};
  }

  function getOcjena(pct){
    // NCVVO ocjenske granice (aproksimacija — variraju po roku)
    if(pct>=90) return 5;
    if(pct>=75) return 4;
    if(pct>=60) return 3;
    if(pct>=50) return 2;
    return 1;
  }

  // Percentil se traži tek nakon predaje pravog ispita u ispitnom modu; tiho izostaje
  // ako korisnik nije prijavljen, ruta padne ili je uzorak premalen (n<10 → percentile:null).
  function loadPercentile(pct){
    fetch("/api/discere/percentile?subject=hrv&examKey="+encodeURIComponent(exam.key)+"&pct="+pct)
      .then(r=>r.ok?r.json():null)
      .then(d=>{if(d&&typeof d.percentile==="number")setPercentile(d.percentile);})
      .catch(()=>{});
  }

  function submitExam(){
    recordTime(cur);
    try{localStorage.removeItem(_lsKey);localStorage.removeItem(_exKey);}catch(e){}
    setDone(true);
    // Compute score (samo za MC)
    const autoQ=QSX.filter(q=>q.type==="mc");
    const cor=autoQ.filter(q=>chk(q,answers[q.id])===true).length;
    const ispitInfo=getIspitInfo(exam);
    const pct=autoQ.length>0?Math.round(cor/autoQ.length*100):0;
    // Bodovi: cor bodova od ispitInfo.mcBod (skalirano)
    const bodovi=Math.round(cor/Math.max(autoQ.length,1)*ispitInfo.mcBod);
    const g=getOcjena(pct);
    if(examMode&&!_isVirtual) loadPercentile(pct);
    if(onDone) onDone({examKey:exam.key,examLabel:exam.year+" "+exam.label,pct,grade:g,cor,total:autoQ.length,bodovi,ispitInfo,answers,qTimes,examMode,qs:QSX,confidenceLog:(()=>{
      const log={};
      autoQ.forEach(q=>{
        if(confidence[q.id]){
          const key=exam.key+"_"+q.id;
          log[key]={conf:confidence[q.id],correct:chk(q,answers[q.id])===true,topic:q.topic||"ostalo",date:new Date().toLocaleDateString("hr")};
        }
      });
      return Object.keys(log).length>0?log:null;
    })()});
    window.scrollTo(0,0);
  }

  // Auto-predaja ispita kad istekne vrijeme (timerDone). Guard `!done` sprječava dvostruku predaju.
  useEffect(()=>{
    if(timerDone && !done) submitExam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[timerDone,done]);

  if(done){
    const autoQ=QSX.filter(q=>q.type==="mc");
    const manQ=QSX.filter(q=>q.type!=="mc");
    const cor=autoQ.filter(q=>chk(q,answers[q.id])===true).length;
    const pct=autoQ.length>0?Math.round(cor/autoQ.length*100):0;
    const ispitInfo=getIspitInfo(exam);
    const bodovi=Math.round(cor/Math.max(autoQ.length,1)*ispitInfo.mcBod);
    const g=getOcjena(pct);
    const gc={5:"var(--green)",4:"var(--blue)",3:"var(--gold)",2:"var(--gold)",1:"var(--red)"}[g];
    const xpGain=calcXpGain(pct,autoQ.length);
    const wrongAutoQ=autoQ.filter(q=>chk(q,answers[q.id])===false);
    // Ispitni mod je besplatan; zaključava se samo razrada rezultata.
    const canSeeAnalysis=canSeeHrvAnalysis(userAccess);
    const canPracticeErrors=canSeeAnalysis&&wrongAutoQ.length>0&&!!onPracticeErrors;

    // ── Grade accent color ──
    const gradeAccent={5:"#3ecf6e",4:"#5b9fff",3:"#e8a830",2:"#f97316",1:"#ef4444"}[g]||"#5b9fff";
    const rok=(exam.season==="ljeto"?"Ljetni":exam.season==="zima"?"Zimski":"Jesenski")+" rok "+exam.year+(exam.razina?" · Razina "+exam.razina:"");

    return e(Fragment,null,
    e("div",{className:"results"},
      e("div",{className:"reshero"},
        e("div",{className:"gcirc"+(g>=4?" pulsing":""),style:{borderColor:gc,color:gc}},
          e("div",{className:"gnum"},g),
          e("div",{className:"glbl"},"ocjena testa")),
        e("h2",{style:{color:g>=4?"var(--green)":g===3?"var(--gold)":g===2?"#f97316":"var(--red)"}},
          g===5?"Savrseno!":g===4?"Izvrsno!":g===3?"Dobar rezultat!":g===2?"Polozeno — ima napretka":"Za ponavljanje"),
        e("p",{style:{color:"var(--muted)",fontSize:14}},exam.year+" — "+(exam.season==="ljeto"?"Ljetni":exam.season==="zima"?"Zimski":"Jesenski")+" rok",exam.razina&&e("span",{style:{marginLeft:8,fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99,background:exam.razina==="A"?"var(--gold-d)":"var(--blue-d)",color:exam.razina==="A"?"var(--gold)":"var(--blue)"}},"Razina "+exam.razina)),
        manQ.length>0&&e("p",{style:{color:"var(--muted)",fontSize:12,marginTop:2}},"Esej/sažetak nosi dodatne bodove i ocjenjuje se zasebno."),
        e("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginTop:8,
          background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:99,
          padding:"5px 16px",fontSize:12}},
          e("span",{style:{color:"var(--muted)"}},"Bodovi (test):"),
          e("span",{style:{fontWeight:700,color:gc}},bodovi+" / "+ispitInfo.mcBod),
          e("span",{style:{color:"var(--muted)",fontSize:11}},"("+cor+" točnih od "+autoQ.length+" pitanja)")
        ),
        percentile!==null&&e("p",{style:{color:"var(--muted)",fontSize:12.5,marginTop:8}},
          "Bolji/a od "+percentile+" % maturanata koji su rješavali ovaj ispit"),
      ),
      /* ── XP bar ── */
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",overflow:"hidden",padding:"14px 18px 10px",marginBottom:12}},
        e("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",marginBottom:12}},
          e("div",{style:{background:"rgba(251,191,36,.12)",border:"1px solid rgba(251,191,36,.25)",borderRadius:10,padding:"6px 12px",display:"flex",alignItems:"center",gap:8}},
            e("span",{style:{fontSize:16}},"\u2b50"),
            e("div",null,
              e("div",{style:{fontFamily:"var(--fh)",fontSize:18,fontWeight:900,color:"var(--gold)",lineHeight:1}},"+"+xpGain),
              e("div",{style:{fontSize:10,color:"var(--muted)"}},"XP zara\u0111eno")
            )
          ),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5,flex:1}},
            g>=4?"Izvrsno! Nastavi ovim tempom":g===3?"Dobar rezultat! Malo za vrlo dobar":g===2?"Prosao/la si! Ima napretka":"Nije sve \u2014 ponovi slabe teme"
          )
        ),
        e("div",{className:"xp-prog-wrap"},
          e("div",{className:"xp-prog-track"},
            e("div",{className:"xp-prog-fill",style:{width:xpBarFill+"%"}})
          ),
          e("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted)",marginTop:4}},
            e("span",null,"Razina "+(getLevel(userData?.xp||0)+1)),
            e("span",null,(userData?.xp||0)+" \u2192 "+((userData?.xp||0)+xpGain)+" XP")
          )
        )
      ),
      /* ── Share Story Card ── */
      e(ShareStoryCard,{
        score:pct,
        correct:cor,
        total:autoQ.length,
        percentile,
        label:"Hrvatski jezik \u2014 test \u2014 "+rok,
        accentColor:gradeAccent,
        emoji:"\ud83d\udcda",
      }),
      e("div",{style:{marginBottom:20}}),

      e("div",{className:"stats"},
        e("div",{className:"stat"},e("div",{className:"statn",style:{color:gc}},pct+"%"),e("div",{className:"statl"},"Točnost")),
        e("div",{className:"stat"},e("div",{className:"statn"},cor+"/"+autoQ.length),e("div",{className:"statl"},"MC točnih")),
        e("div",{className:"stat"},e("div",{className:"statn",style:{color:gc}},bodovi+"/"+ispitInfo.mcBod),e("div",{className:"statl"},"Bodovi (test)")),
        e("div",{className:"stat"},e("div",{className:"statn"},manQ.length),e("div",{className:"statl"},"Esej/SA/Sažetak")),
      ),      /* Smart Insights */
      !canSeeAnalysis&&e(LockedResultsBlock,{label:"Tvoja analiza",rows:3,minHeight:140}),
      canSeeAnalysis&&(()=>{
        const ins=computeSmartInsights(qTimes,answers,QSX);
        if(!ins||ins.length===0) return null;
        return e("div",{className:"smart-insights"},
          e("div",{className:"si-header"},e("span",{className:"si-header-ico"},"\ud83d\udca1"),"Tvoja analiza"),
          e("div",{className:"si-list"},
            ins.map((item,i)=>e("div",{key:i,className:"si-item"},
              e("span",{className:"si-ico"},item.icon),
              e("span",{className:"si-text"},item.text)
            ))
          )
        );
      })(),      canSeeAnalysis&&manQ.length>0&&e("div",{style:{background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderRadius:"var(--r)",padding:"12px 16px",marginBottom:22,fontSize:13,color:"var(--gold)"}},
        "✏️ "+manQ.length+" otvorenih pitanja (esej, kratki odgovor, sažetak) — provjeri referentne odgovore ispod."),
      !canSeeAnalysis&&e(LockedResultsBlock,{label:"Pregled pitanja",rows:5,minHeight:200,
        note:"Točni odgovori, obrazloženja i poveznice na skripte dostupni su od Standard plana."}),
      canSeeAnalysis&&e("div",{
        style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,
          padding:"10px 14px",background:"var(--s2)",borderRadius:"var(--r)",cursor:"pointer",
          border:"1px solid var(--bdr)"},
        onClick:()=>setRevOpen(o=>!o)
      },
        e("div",{style:{display:"flex",alignItems:"center",gap:8}},
          e("span",{style:{fontSize:13,fontWeight:700,color:"var(--text)"}},(revOpen?"▼":"▶")+" Pregled pitanja"),
          e("span",{style:{fontSize:11,color:"var(--muted)"}},QSX.length+" pitanja")
        ),
        revOpen&&e("div",{style:{display:"flex",gap:6},onClick:ev=>ev.stopPropagation()},
          ["sve","tocni","krivi"].map(f=>
            e("button",{key:f,
              onClick:()=>setRevFilter(f),
              style:{
                fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,cursor:"pointer",
                border:"1px solid "+(f==="sve"?"var(--bdr2)":f==="tocni"?"rgba(62,207,110,.4)":"rgba(248,113,113,.4)"),
                background:revFilter===f?(f==="sve"?"var(--s3)":f==="tocni"?"var(--green-d)":"var(--red-d)"):"transparent",
                color:revFilter===f?(f==="sve"?"var(--text)":f==="tocni"?"var(--green)":"var(--red)"):"var(--muted)",
                transition:"all .15s"
              }
            },f==="sve"?"Sve":f==="tocni"?"✓ Točni":"✗ Krivi")
          )
        )
      ),
      canSeeAnalysis&&revOpen&&e("div",{className:"revlist"},QSX.filter(q=>{
        if(revFilter==="sve") return true;
        const isM=q.type!=="mc";
        if(isM) return revFilter==="sve";
        const a=answers[q.id];const ok=chk(q,a);
        return revFilter==="tocni"?ok===true:ok!==true;
      }).map((q,i)=>{
        const isM=q.type!=="mc";const a=answers[q.id];const ok=isM?null:chk(q,a);
        const cls=isM?"rman":ok===true?"rok":"rbad";
        return e("div",{key:q.id,className:"revitem "+cls},
          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("div",{className:"rev-badge "+(isM?"rb-man":ok?"rb-ok":"rb-bad")},isM?"✏️":ok?"✓":"✗"),
            e("div",{style:{flex:1,minWidth:0}},
              e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"}},
                e("span",{style:{fontSize:10,color:"var(--muted)",fontWeight:600}},(i+1)+"."),
                e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                  background:isM?"rgba(251,191,36,.12)":ok?"rgba(52,212,122,.1)":"rgba(248,113,113,.1)",
                  color:isM?"var(--gold)":ok?"var(--green)":"var(--red)"}},
                  isM?"Otvoreno":ok?"Točno":"Netočno"),
                q.topic&&e("span",{className:"topic-tag",style:{fontSize:10}},TOPIC_LABELS[q.topic]||q.topic),
                qTimes[q.id]&&e("span",{style:{fontSize:10,color:"var(--muted)",background:"var(--s3)",padding:"1px 6px",borderRadius:4}},qTimes[q.id]+"s"),
                /* Lektira → skripta: detaljna obrada djela na koje se pitanje odnosi.
                   Modal ako postoji opener (ostaje u simulatoru), inače link u novom tabu. */
                (()=>{const _qi=qIdentity(q,exam);const sk=skriptaZaPitanje(_qi.examKey,_qi.qid);if(!sk)return null;
                  const _st={fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,textDecoration:"none",
                    background:"rgba(124,92,252,.12)",color:"#a78bfa",whiteSpace:"nowrap",border:"none",cursor:"pointer"};
                  const _ttl="Uči gradivo: "+sk.djelo+" — "+sk.chapter;
                  return onOpenSkripta
                    ?e("button",{style:_st,title:_ttl,onClick:()=>onOpenSkripta(sk,sk.djelo)},"📖 Skripta: "+sk.djelo+" →")
                    :e("a",{href:skriptaUrl(sk,{anchor:true}),target:"_blank",rel:"noopener noreferrer",title:_ttl,style:_st},"📖 Skripta: "+sk.djelo+" →");
                })()
              ),
              e("div",{style:{fontSize:13,lineHeight:1.65,marginBottom:8,fontWeight:500}},q.q),
              q.type==="mc"&&q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:8}},
                q.opts.map((opt,j)=>{
                  const isCorrect=LL[j]===q.sol.cl;
                  const isChosen=LL[j]===a;
                  if(!isCorrect&&!isChosen) return null;
                  const isWrong=isChosen&&!isCorrect;
                  return e("div",{key:j,style:{
                    display:"flex",alignItems:"center",gap:8,padding:"7px 12px",borderRadius:8,fontSize:12,
                    background:isCorrect?"rgba(52,212,122,.08)":isWrong?"rgba(248,113,113,.08)":"transparent",
                    border:"1px solid "+(isCorrect?"rgba(52,212,122,.25)":isWrong?"rgba(248,113,113,.25)":"transparent")
                  }},
                    e("span",{style:{fontSize:11,fontWeight:800,minWidth:16,color:isCorrect?"var(--green)":isWrong?"var(--red)":"var(--muted)"}},LL[j]),
                    e("span",{style:{flex:1,color:isCorrect?"var(--green)":isWrong?"var(--red)":"var(--text)",fontWeight:isCorrect||isWrong?600:400}},opt),
                    isCorrect&&e("span",{style:{fontSize:10,color:"var(--green)",fontWeight:700,whiteSpace:"nowrap"}},"✓ točno"),
                    isWrong&&e("span",{style:{fontSize:10,color:"var(--red)",fontWeight:700,whiteSpace:"nowrap"}},"✗ tvoj")
                  );
                })
              ),
              q.exp&&e("div",{style:{
                fontSize:12,color:"var(--muted)",lineHeight:1.65,
                background:"var(--s2)",borderRadius:8,padding:"8px 12px",marginTop:4
              }},e("span",{style:{fontWeight:700,marginRight:5}},"💡"),q.exp),
              isM&&e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:6,lineHeight:1.6,background:"rgba(251,191,36,.06)",borderRadius:8,padding:"7px 12px"}},
                e("span",{style:{fontWeight:700,color:"var(--gold)",marginRight:5}},"✅"),
                (q.sol?.ans||q.sol?.ex||"").slice(0,200)
              )
            )
          )
        );
      })),

      /* ── NEXT ACTION CTA ── */
      (()=>{
        // Za free korisnika CTA koji vodi na greške zaključan je zajedno s greškama.
        if(!canSeeAnalysis&&onPracticeErrors&&wrongAutoQ.length>0&&g<=3)
          return e(LockedResultsBlock,{label:"Sljedeći korak",rows:2,minHeight:130,
            note:"Ciljano ponavljanje tvojih grešaka dostupno je od Standard plana."});
        const nextExamKey=(()=>{
          const yr=exam.year; const razina=exam.razina||"B";
          const candidates=Object.values(EXAMS).filter(ex=>
            ex.year>yr && ex.qs?.length>0 &&
            (ex.season==="ljeto"||ex.season===exam.season) &&
            (ex.razina===razina||ex.jedinstven)
          ).sort((a,b)=>a.year-b.year);
          return candidates[0]?.key||null;
        })();
        const nextExam=nextExamKey?EXAMS[nextExamKey]:null;
        const prevAttempts=(userData?.history||[]).filter(h=>h.examKey===exam.key);
        const isPB=prevAttempts.length>0&&pct>Math.max(...prevAttempts.map(h=>h.pct||0));
        let icon,title,desc,actionLabel,actionFn,actionClass;
        if(g>=4){
          icon="🎯"; title=isPB?"Novi osobni rekord! "+pct+"%":"Odlični rezultat!";
          desc=nextExam?"Postigao/la si "+pct+"% — spreman/na si za sljedeći izazov.":"Provjeri i druge ispite za maksimalnu pripremu.";
          actionLabel=nextExam?"Sljedeći ispit: "+nextExam.year+" "+nextExam.label+" →":"← Svi ispiti";
          actionFn=nextExam&&onGoToExam?()=>onGoToExam(nextExamKey):()=>onExit(); actionClass="btn btn-p";
        } else if(g<=2){
          icon="🔁"; title="Ima prostora za poboljšanje";
          desc=wrongAutoQ.length>0?"Imaš "+wrongAutoQ.length+" grešaka — ponavljanje odmah povećava rezultat.":"Probaj vježbanje bez vremenskog ograničenja za bolji dojam gradiva.";
          actionLabel=canPracticeErrors?"🔁 Vježbaj greške sada":"← Na početak";
          actionFn=canPracticeErrors?()=>onPracticeErrors(wrongAutoQ,exam):()=>onExit();
          actionClass="btn btn-red";
        } else {
          icon="📈"; title="Solidan rezultat — ima prostora rasti";
          desc="Sada su ti svježe u pamćenju — ponovi "+wrongAutoQ.length+" grešaka za brže učenje.";
          actionLabel=canPracticeErrors?"Ponovi greške ("+wrongAutoQ.length+")":"→ Drugi ispit";
          actionFn=canPracticeErrors?()=>onPracticeErrors(wrongAutoQ,exam):()=>onExit();
          actionClass="btn btn-gold";
        }
        return e("div",{className:"next-action-cta"},
          e("div",{className:"nac-icon"},icon),
          e("div",{className:"nac-body"},
            e("div",{className:"nac-title"},title),
            e("div",{className:"nac-desc"},desc)
          ),
          e("button",{className:actionClass+" nac-btn",onClick:actionFn},actionLabel)
        );
      })(),

      e("div",{style:{marginTop:8,textAlign:"center",display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
        e("button",{className:"btn btn-g",onClick:onExit},"← Na početak"),
        canPracticeErrors&&e("button",{className:"btn btn-red",onClick:()=>onPracticeErrors(wrongAutoQ,exam)},"🔁 Vježbaj greške ("+wrongAutoQ.length+")"),
        canSeeAnalysis&&wrongAutoQ.length>0&&isGameModeEnabled()&&e("button",{className:"btn btn-gold",onClick:()=>window.location.assign('/game?recipe=mistake_review')},"🎮 Ponovi pogreške u Game Modeu"),
        e("button",{className:"btn btn-gold",onClick:()=>{onExit();setTimeout(()=>document.getElementById("exams")?.scrollIntoView({behavior:"smooth"}),100);}},"Pokušaj drugi ispit →")
      ),
      !canSeeAnalysis&&wrongAutoQ.length>0&&g>=4&&e("div",{style:{marginTop:14}},
        e(LockedResultsBlock,{label:"Vježbanje grešaka",rows:2,minHeight:130,
          note:"Ciljano ponavljanje tvojih grešaka dostupno je od Standard plana."})
      ),
      e("div",{style:{marginTop:24}},
        /* ── Strategy Coach ── */
        !canSeeAnalysis&&e(LockedResultsBlock,{label:"Strategijski savjeti",rows:3,minHeight:150}),
        canSeeAnalysis&&(()=>{
          const tips=generateStrategyTips({qTimes,answers,questions:QSX,pct,grade:g,examMode});
          if(!tips||tips.length===0) return null;
          return e("div",{className:"strat-coach"},
            e("div",{className:"strat-header"},
              e("span",{className:"strat-ico"},"🧠"),
              e("span",{className:"strat-title"},"Strategijski savjeti")
            ),
            e("div",{className:"strat-tips"},
              tips.map((tip,i)=>
                e("div",{key:i,className:"strat-tip strat-"+tip.type},
                  e("span",{className:"strat-tip-ico"},tip.icon),
                  e("div",{className:"strat-tip-body"},
                    e("div",{className:"strat-tip-title"},tip.title),
                    e("div",{className:"strat-tip-detail"},tip.detail)
                  )
                )
              )
            )
          );
        })(),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}},"Sljedeći koraci"),
        e("div",{className:"next-steps"},
          e("div",{...accBtn,className:"next-step-card gold",onClick:onExit},e("span",{className:"nsc-ico"},"📄"),e("div",{className:"nsc-title",style:{color:"var(--gold)"}},"Drugi ispit"),e("div",{className:"nsc-desc"},"Probaj drugi rok.")),
          e("div",{...accBtn,className:"next-step-card blue",onClick:onFilter||onExit},e("span",{className:"nsc-ico"},"🎯"),e("div",{className:"nsc-title",style:{color:"var(--blue)"}},"Po temi"),e("div",{className:"nsc-desc"},"Filtriraj po temi gdje si najslabiji.")),
          e("div",{...accBtn,className:"next-step-card green",onClick:onStats||onExit},e("span",{className:"nsc-ico"},"📊"),e("div",{className:"nsc-title",style:{color:"var(--green)"}},"Statistike"),e("div",{className:"nsc-desc"},"Prati napredak kroz ispite."))
        )
      )
    ),
    !canSeeAnalysis&&e(LockedAnalysisSection,{userAccess,from:"hrv-results"})
  );
  }

  const hasSavedProgress=!examMode&&!done&&_saved&&_saved.cur>0;
  const hasExamResume=examMode&&!done&&!!_savedExam;

  const isSazOrEs=q?.type==="es"||q?.type==="saz";
  if(!q) return e("div",{style:{padding:40,textAlign:"center",color:"var(--muted)"}},
    e("div",{style:{fontSize:14,marginBottom:12}},"Pitanje nije pronađeno."),
    e("button",{className:"btn btn-g",onClick:onExit},"← Natrag")
  );

  // ── Paywall gate — free users see first FREE_LIMIT questions only (practice mode) ──
  if (!isPaid && !examMode && !done && cur >= FREE_LIMIT && !isHrvFreePracticeExam(exam?.key)) {
    const _pqsMC = QSX.filter(q=>q.type==="mc").slice(0,FREE_LIMIT);
    const _pCor  = _pqsMC.filter(q=>chk(q,answers[q.id])===true).length;
    const _pPct  = _pqsMC.length>0 ? Math.round(_pCor/_pqsMC.length*100) : 0;

    return e("div",{style:{maxWidth:800,margin:"0 auto",padding:"32px 20px"}},
      e("style",null,"@keyframes sim-glow-std{0%,100%{box-shadow:0 0 0 1px rgba(255,107,43,.2),0 10px 36px rgba(255,107,43,.3),0 4px 12px rgba(0,0,0,.25)}50%{box-shadow:0 0 0 1px rgba(255,107,43,.4),0 14px 50px rgba(255,107,43,.44),0 0 80px rgba(255,107,43,.1)}}"),
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        e("span",{className:"ntitle"},"Vje\u017ebanje"),
        e("span",{className:"nsp"}),
        e("span",{className:"nbadge"},(cur+1)+"/"+QSX.length)
      ),
      /* Gate card */
      e("div",{style:{
        marginTop:20,borderRadius:24,
        background:"var(--s1)",
        border:"1px solid rgba(255,107,43,.22)",
        boxShadow:"0 32px 80px rgba(0,0,0,.5), 0 0 0 1px rgba(255,107,43,.08), inset 0 1px 0 rgba(255,255,255,.06)",
        overflow:"hidden",
        position:"relative"
      }},
        /* Top accent line */
        e("div",{style:{height:2,background:"linear-gradient(90deg,transparent 5%,#ff6b2b 40%,#f97316 70%,transparent 95%)"}}),
        /* Dot grid texture */
        e("div",{style:{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,107,43,.06) 1px,transparent 1px)",backgroundSize:"36px 36px",pointerEvents:"none",zIndex:0}}),
        /* Corner glow */
        e("div",{style:{position:"absolute",top:"-30%",right:"-15%",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,43,.12),transparent 65%)",pointerEvents:"none",zIndex:0}}),
        /* Ambient orb left */
        e("div",{style:{position:"absolute",bottom:"-20%",left:"-10%",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,92,252,.08),transparent 65%)",pointerEvents:"none",zIndex:0,animation:"orb-b 22s ease-in-out infinite"}}),

        e("div",{style:{padding:"40px 32px 36px",position:"relative",zIndex:1}},
          /* Floating lock */
          e("div",{style:{fontSize:42,marginBottom:20,display:"inline-block",animation:"lock-float 3.4s ease-in-out infinite",filter:"drop-shadow(0 8px 18px rgba(255,107,43,.5))"}},"🔒"),
          /* Badge with pulsing dot */
          e("div",{style:{marginBottom:18,animation:"up .45s .05s cubic-bezier(.16,1,.3,1) both"}},
            e("div",{style:{
              display:"inline-flex",alignItems:"center",gap:6,
              padding:"4px 12px",borderRadius:99,
              background:"rgba(255,107,43,.1)",border:"1px solid rgba(255,107,43,.28)",
              fontSize:11,fontWeight:700,color:"#ff6b2b",letterSpacing:".05em"
            }},
              e("span",{style:{width:6,height:6,borderRadius:"50%",background:"#ff6b2b",display:"inline-block",animation:"pulse 1.8s ease-in-out infinite"}}),
              FREE_LIMIT+" pitanja gotovo"
            )
          ),
          /* Mini feedback */
          e("div",{style:{display:"flex",gap:8,marginBottom:20,animation:"up .45s .1s cubic-bezier(.16,1,.3,1) both"}},
            e("div",{style:{flex:1,background:"rgba(62,207,110,.08)",border:"1px solid rgba(62,207,110,.2)",borderRadius:12,padding:"11px 14px"}},
              e("div",{style:{fontSize:10,color:"var(--muted)",marginBottom:4,letterSpacing:".06em",textTransform:"uppercase",fontWeight:700}},"\u2714 To\u010dno"),
              e("div",{style:{fontFamily:"var(--fh)",fontWeight:900,fontSize:24,color:"var(--green)",lineHeight:1}},
                _pCor,e("span",{style:{fontSize:14,opacity:.6}},"/"+_pqsMC.length)
              )
            ),
            e("div",{style:{flex:1,background:"rgba(255,107,43,.08)",border:"1px solid rgba(255,107,43,.2)",borderRadius:12,padding:"11px 14px"}},
              e("div",{style:{fontSize:10,color:"var(--muted)",marginBottom:4,letterSpacing:".06em",textTransform:"uppercase",fontWeight:700}},"\uD83D\uDCC8 Trenutno"),
              e("div",{style:{fontFamily:"var(--fh)",fontWeight:900,fontSize:24,color:"#ff6b2b",lineHeight:1}},
                "~"+_pPct,e("span",{style:{fontSize:14,opacity:.6}},"%")
              )
            )
          ),
          /* Animated gradient headline */
          e("div",{style:{
            fontFamily:"var(--fh)",fontSize:26,fontWeight:900,
            marginBottom:8,letterSpacing:"-.025em",lineHeight:1.2,
            background:"linear-gradient(270deg,#ff6b2b,#f97316,#fbbf24,#ff6b2b)",
            backgroundSize:"300% 300%",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
            animation:"up .45s .15s cubic-bezier(.16,1,.3,1) both, hero-text-shift 4s ease-in-out infinite"
          }},"Koliko bi dobio na maturi?"),
          /* Subline */
          e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:22,lineHeight:1.72,animation:"up .45s .2s cubic-bezier(.16,1,.3,1) both"}},
            "Odgovorio si na prva "+FREE_LIMIT+" pitanja \u2014 sad ide pravi test."),
          /* Value stack — staggered */
          e("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:28}},
            ...["Saznaj svoj realni rezultat na maturi","Otkrij gdje gubi\u0161 najvi\u0161e bodova","Vidi koja pitanja te ru\u0161e ispod praga"].map((txt,i)=>
              e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text)",animation:"up .4s "+(0.25+0.07*i)+"s cubic-bezier(.16,1,.3,1) both"}},
                e("span",{style:{width:22,height:22,borderRadius:7,background:"rgba(255,107,43,.14)",border:"1px solid rgba(255,107,43,.28)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0,color:"#ff6b2b",fontWeight:800}},"\u2713"),
                txt
              )
            )
          ),
          /* Primary CTA with glow */
          e("div",{style:{animation:"up .45s .45s cubic-bezier(.16,1,.3,1) both"}},
            e("a",{
              href:"/pro?from=hrv-simulator&plan=standard",
              style:{
                display:"block",textAlign:"center",
                background:"linear-gradient(135deg,#ff6b2b,#f97316)",
                color:"#fff",fontFamily:"var(--fh)",fontWeight:700,fontSize:15,
                padding:"15px 24px",borderRadius:13,textDecoration:"none",
                boxShadow:"0 0 0 1px rgba(255,107,43,.2), 0 10px 36px rgba(255,107,43,.3), 0 4px 12px rgba(0,0,0,.25)",
                animation:"sim-glow-std 2.8s ease-in-out infinite",
                letterSpacing:"-.01em",marginBottom:10
              }
            },"Nastavi simulator \u2192 Standard")
          ),
          /* Secondary */
          e("button",{
            className:"btn btn-g",
            style:{fontSize:13,width:"100%",marginBottom:10,animation:"up .45s .52s cubic-bezier(.16,1,.3,1) both"},
            onClick:onExit
          },"Vrati se kasnije (napredak je spreman)"),
          /* Psychological trigger */
          e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",animation:"up .45s .58s cubic-bezier(.16,1,.3,1) both"}},
            "Ve\u0107 si po\u010deo \u2014 \u0161teta stati na pola.")
        )
      )
    );
  }

  const answerText=answers[q.id]||"";

  return e(Fragment,null,
    /* Ambient exam mode background overlay */
    examMode&&!done&&secLeft!==null&&examCountdown===null&&(()=>{
      const ao=computeAmbientOpacities(secLeft,TOTAL_SEC);
      return e("div",{className:"ambient-wrap","aria-hidden":"true"},
        e("div",{className:"ambient-gold",style:{opacity:ao.gold}}),
        e("div",{className:"ambient-red",style:{opacity:ao.red}})
      );
    })(),
    /* 3-2-1 Countdown overlay (exam mode only) */
    examCountdown!==null&&e("div",{className:"exam-countdown","aria-live":"assertive"},
      e("div",{className:"ecd-sub"},exam.year+" — "+(exam.season==="ljeto"?"Ljetni":exam.season==="zima"?"Zimski":"Jesenski")+" rok"+(exam.razina?" · Razina "+exam.razina:"")),
      e("div",{key:examCountdown,className:"ecd-num"},examCountdown>0?examCountdown:"Počni!"),
      e("div",{className:"ecd-hint"},examCountdown>0?"Pripremi se...":"Sretno! ⚡")
    ),
    /* Keyboard shortcuts overlay */
    showKeys&&e("div",{
      style:{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:200,
        display:"flex",alignItems:"center",justifyContent:"center",padding:20,
        backdropFilter:"blur(4px)"},
      onClick:()=>setShowKeys(false)
    },
      e("div",{
        style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:"var(--rr)",
          padding:"28px 32px",maxWidth:400,width:"100%"},
        onClick:e2=>e2.stopPropagation()
      },
        e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:20}},"Tipkovni prečaci"),
          e("button",{onClick:()=>setShowKeys(false),
            style:{background:"none",border:"none",color:"var(--muted)",fontSize:18,
              cursor:"pointer",padding:"0 4px",lineHeight:1}},"×")
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          [
            {k:"A / B / C / D", d:"Odaberi odgovor (MC pitanja)"},
            {k:"Enter", d:"Potvrdi odgovor / Sljedeće pitanje"},
            {k:"→ / ←", d:"Sljedeće / Prethodno pitanje"},
            ...(examMode?[]:[{k:"B", d:"Dodaj/ukloni bookmark"}]),
            {k:"F", d:"Označi pitanje (flag)"},
            {k:"? ili /", d:"Otvori/zatvori ove prečace"},
            {k:"Esc", d:"Zatvori overlay"},
          ].map(({k,d})=>
            e("div",{key:k,style:{display:"flex",alignItems:"center",gap:12,
              padding:"8px 0",borderBottom:"1px solid var(--bdr)"}},
              e("kbd",{style:{background:"var(--s2)",border:"1px solid var(--bdr2)",
                borderRadius:6,padding:"3px 8px",fontSize:11,fontWeight:700,
                fontFamily:"var(--fb)",color:"var(--text)",minWidth:80,textAlign:"center",
                flexShrink:0}},k),
              e("span",{style:{fontSize:13,color:"var(--muted)"}},d)
            )
          )
        ),
        e("div",{style:{marginTop:16,fontSize:11,color:"var(--muted)",
          textAlign:"center",opacity:.7}},
          "Klikni bilo gdje izvan za zatvaranje")
      )
    ),
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:()=>setModal(true)},"← Izlaz"),
      e("button",{onClick:()=>setShowKeys(k=>!k),title:"Tipkovni prečaci (?)",
        style:{background:"none",border:"1px solid var(--bdr)",borderRadius:8,
          width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",
          cursor:"pointer",color:"var(--muted)",fontSize:13,fontWeight:700,flexShrink:0,
          transition:"all .15s"}},
        "?"),
      e("span",{className:"ntitle"},exam.year+" — "+(exam.season==="ljeto"?"Ljetni":exam.season==="zima"?"Zimski":"Jesenski")+" rok"),
      exam.razina&&e("span",{style:{fontSize:11,fontWeight:700,padding:"2px 9px",borderRadius:99,background:exam.razina==="A"?"var(--gold-d)":"var(--blue-d)",border:"1px solid "+(exam.razina==="A"?"var(--gold-b)":"rgba(75,123,255,.3)"),color:exam.razina==="A"?"var(--gold)":"var(--blue)",marginLeft:4}},"Razina "+exam.razina),
      examMode&&secLeft!==null&&(()=>{
        const totalSec=examMinutes*60;
        const pct=secLeft/totalSec;
        const r=16; const circ=2*Math.PI*r;
        const dash=pct*circ;
        const isDanger=secLeft<600; const isWarn=secLeft<1200;
        const col=isDanger?"var(--red)":isWarn?"var(--gold)":"var(--blue)";
        return e("div",{onClick:()=>setCalmMode(c=>!c),title:calmMode?"Prikaži vrijeme":"Sakrij vrijeme",style:{display:"flex",alignItems:"center",gap:7,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 10px 4px 6px",userSelect:"none",cursor:"pointer"}},
          e("svg",{width:36,height:36,viewBox:"0 0 36 36",style:{flexShrink:0}},
            e("circle",{cx:18,cy:18,r:r,fill:"none",stroke:"var(--s3)",strokeWidth:3}),
            e("circle",{cx:18,cy:18,r:r,fill:"none",stroke:calmMode?"var(--s3)":col,strokeWidth:3,
              strokeDasharray:calmMode?`${circ} ${circ}`:`${dash} ${circ}`,
              strokeDashoffset:0,
              strokeLinecap:"round",
              transform:"rotate(-90 18 18)",
              style:{transition:"stroke-dasharray .9s linear,stroke .3s"}
            }),
            calmMode
              ?e("text",{x:18,y:22,textAnchor:"middle",fontSize:13,fill:"var(--muted)"},"⏱️")
              :(()=>{
                const timeStr=Math.floor(secLeft/60)+":"+(secLeft%60<10?"0":"")+secLeft%60;
                return e("text",{x:18,y:22,textAnchor:"middle",fontSize:timeStr.length>=6?8:9,fontWeight:700,
                  fill:col,fontFamily:"var(--fb)"},
                  timeStr
                );
              })()
          )
        );
      })(),
      e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:4}},answeredCount+"/"+QSX.length)
    ),
    (hasSavedProgress||hasExamResume)&&cur===_initCur&&e("div",{style:{
      maxWidth:1080,margin:"0 auto",padding:"8px 20px 0"
    }},
      e("div",{style:{
        background:"rgba(45,84,196,.08)",border:"1px solid rgba(45,84,196,.2)",
        borderRadius:"var(--r)",padding:"8px 14px",fontSize:12,
        display:"flex",alignItems:"center",gap:8,color:"var(--blue)"
      }},
        hasExamResume
          ?"⏳ Nastavljaš ispit — preostalo "+Math.ceil((secLeft||0)/60)+" min."
          :"💾 Nastavljaš od pitanja "+(cur+1)+" — napredak je automatski spremljen."
      )
    ),
    e("div",{className:"exam-layout"},
      e("div",null,
        e("div",{className:"prog"},e("div",{className:"progbar",style:{width:((cur+1)/QSX.length*100)+"%"}})),
        e("div",{className:"qcard",
          onTouchStart:ev=>{touchStartX.current=ev.touches[0].clientX;},
          onTouchEnd:ev=>{
            const dx=ev.changedTouches[0].clientX-touchStartX.current;
            if(dx>50&&cur>0){recordTime(cur);const nc=cur-1;setCur(nc);setVisited(v=>({...v,[nc]:true}));}
            else if(dx<-50&&cur<QSX.length-1){recordTime(cur);const nc=cur+1;setCur(nc);setVisited(v=>({...v,[nc]:true}));}
          }},
          e("div",{className:"qmeta"},
            e("span",{className:"qnum"},"Pit. "+(cur+1)+" / "+QSX.length),
            e("span",{className:"qbadge b-"+q.type},TLBL[q.type]||q.type),
            !examMode&&q.topic&&e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
            e("button",{className:"qflag"+(flag[q.id]?" on":""),onClick:()=>setFlag(p=>({...p,[q.id]:!p[q.id]})),title:"Označi pitanje"},flag[q.id]?"🚩 Označeno":"🚩 Označi"),
            !examMode&&e("button",{className:"qflag"+(bookmarks[bmKeyOf(q)]?" on":""),onClick:()=>toggleBookmark(q),title:"Spremi pitanje"},bookmarks[bmKeyOf(q)]?"🔖":"🔖 Spremi")
          ),
          (q.ctx||q.tekst)&&e(ContextPanel,{q}),
          e("div",{className:"qtext"},q.q),
          /* MC */
          q.type==="mc"&&e("div",{className:"opts"},
            (q.opts||[]).map((opt,i)=>{
              const L=LL[i];const sel=answers[q.id]===L;
              const ok=isRev&&L===q.sol.cl;const bad=isRev&&sel&&L!==q.sol.cl;
              return e("div",{...accBtn,key:i,className:"opt"+(sel&&!isRev?" sel":"")+(ok?" ok":"")+(bad?" bad":""),
                onClick:()=>{if(!isRev){setAnswers(p=>({...p,[q.id]:L}));if(practice){setShownAnswers(p=>({...p,[q.id]:true}));if(L!==q.sol?.cl)playWrongSound();}}}},
                e("div",{className:"optl"},L),
                e("div",{className:"optt"},opt));
            })
          ),
          /* MAT */
          q.type==="mat"&&e("div",null,
            e(MatQ,{q,a:answers[q.id],setA:(v)=>setAnswers(p=>({...p,[q.id]:v})),rev:isRev}),
            isRev&&q.exp&&e("div",{className:"fb info",style:{marginTop:12}},
              e("div",{className:"fbtitle"},"📖 Obrazloženje:"),
              e("div",{className:"fbtext"},q.exp))
          ),
          /* SA */
          q.type==="sa"&&e("div",null,
            e("textarea",{className:"ta",placeholder:"Upiši kratki odgovor...",disabled:isRev,
              value:answerText,
              onChange:ev=>setAnswers(p=>({...p,[q.id]:ev.target.value}))}),
            isRev&&e("div",{className:"fb info"},e("div",{className:"fbtitle"},"Referentni odgovor:"),e("div",{className:"fbtext"},q.sol?.ans)),
            isRev&&e(SaAiHelper,{q})
          ),
          /* ES */
          q.type==="es"&&e("div",null,
            e("textarea",{className:"ta",style:{minHeight:200},placeholder:"Napiši interpretativni esej...",
              value:answerText,
              onChange:ev=>setAnswers(p=>({...p,[q.id]:ev.target.value}))}),
            isRev&&e("div",{className:"fb info"},e("div",{className:"fbtitle"},"Referentni ključni sadržaji:"),e("div",{className:"fbtext"},q.sol?.ex)),
            e(EssayGrader,{q,answer,isPro,onPaywall})
          ),
          /* SAŽETAK */
          q.type==="saz"&&e("div",null,
            e("textarea",{className:"ta ta-sazetak",placeholder:"Napiši sažetak teksta u 200–250 riječi...",
              value:answerText,
              onChange:ev=>setAnswers(p=>({...p,[q.id]:ev.target.value}))}),
            (()=>{
              const wc=(answerText||"").trim().split(/\s+/).filter(Boolean).length;
              const cls=wc>=200&&wc<=250?"wc-ok":wc>0?"wc-warn":"wc-neutral";
              return e("div",{className:"essay-word-count "+cls},wc+" / 200–250 riječi "+(wc>=200&&wc<=250?"✓":wc>250?"(previše)":wc>0?"(premalo)":""));
            })(),
            isRev&&e("div",{className:"fb info"},e("div",{className:"fbtitle"},"Što sažetak treba sadržavati:"),e("div",{className:"fbtext"},q.sol?.ex)),
            e(EssayGrader,{q,answer:answerText,isPro,onPaywall})
          ),
          /* Answer helper za MC */
          q.type==="mc"&&(practice||isRev)&&e(AnswerHelper,{q,examKey:qIdent.examKey,qid:qIdent.qid,show:isRev||!!shownAnswers[q.id],autoExpand:isRev,onToggle:()=>setShownAnswers(p=>({...p,[q.id]:true}))}),
          /* Confidence prompt — after MC reveal in practice */
          q.type==="mc"&&practice&&isRev&&!confidence[q.id]&&e("div",{className:"conf-prompt"},
            e("span",{className:"conf-label"},"Koliko si siguran/na u odgovor?"),
            e("div",{className:"conf-btns"},
              e("button",{className:"conf-btn conf-1",onClick:()=>setConfidence(p=>({...p,[q.id]:1}))},"😟 Nisam"),
              e("button",{className:"conf-btn conf-2",onClick:()=>setConfidence(p=>({...p,[q.id]:2}))},"🤔 Djelomično"),
              e("button",{className:"conf-btn conf-3",onClick:()=>setConfidence(p=>({...p,[q.id]:3}))},"😎 Siguran/na")
            )
          ),
          q.type==="mc"&&practice&&isRev&&confidence[q.id]&&e("div",{className:"conf-done"},
            ["","😟 Nisam siguran/na","🤔 Djelomično siguran/na","😎 Potpuno siguran/na"][confidence[q.id]]
          ),
          e("div",{className:"qnav"},
            e("button",{className:"btn btn-g",disabled:cur===0,onClick:()=>{recordTime(cur);const nc=cur-1;setCur(nc);setVisited(v=>({...v,[nc]:true}));}},"← Prethodno"),
            practice&&(q.type==="mc"||q.type==="mat")&&!isRev&&hasAns(answers[q.id])&&
              e("button",{className:"btn btn-chk",onClick:()=>setRev(p=>({...p,[q.id]:true}))},"Provjeri"),
            cur<QSX.length-1
              ?e("button",{className:"btn btn-gold",onClick:()=>{recordTime(cur);const nc=cur+1;setCur(nc);setVisited(v=>({...v,[nc]:true}));}},"Sljedeće →")
              :e("button",{className:"btn btn-gold",onClick:submitExam},"Završi ispit ✓")
          )
        )
      ),
      e("div",{className:"sidebar"},
        e("div",{className:"sbcard",style:{marginBottom:12}},
          e("div",{className:"sbtitle"},"Pitanja"),
          e("div",{className:"qgrid"},
            QSX.map((qi,i)=>{
              const a=answers[qi.id];const isC=cur===i;const rv=rev[qi.id]||done;
              const ok=rv&&chk(qi,a)===true;const bad=rv&&chk(qi,a)===false;
              const man=rv&&(qi.type!=="mc");
              let cls=isC?"cur":ok?"cok":bad?"cbad":man?"cman":hasAns(a)?"ans":flag[qi.id]?"flag":"";
              return e("div",{...accBtn,key:i,className:"qdot "+cls,onClick:()=>{recordTime(cur);setCur(i);setVisited(v=>({...v,[i]:true}));}},i+1);
            })
          )
        ),
        e("div",{className:"sbcard"},
          e("div",{className:"sbtitle"},"Napredak"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.8}},
            e("div",null,"📝 Odgovoreno: ",e("strong",null,answeredCount+"/"+QSX.length)),
            e("div",null,"🚩 Označeno: ",e("strong",null,Object.values(flag).filter(Boolean).length)),
            e("div",null,"🔖 Spremljeno: ",e("strong",null,QSX.filter(qq=>bookmarks[bmKeyOf(qq)]).length))
          ),
          e("div",{style:{marginTop:10,fontSize:11,color:"var(--muted)",lineHeight:1.7}},
            e("span",{style:{fontWeight:600}},"Prečaci: "),examMode?"A–D · Enter · ←→ · F(označi)":"A–D · Enter · ←→ · B(spremi) · F(označi)"
          )
        )
      )
    ),
    /* ── Mobile bottom navigation bar ── */
    e("div",{className:"mob-nav"},
      e("button",{className:"mob-nav-btn",disabled:cur===0,
        onClick:()=>{recordTime(cur);const nc=cur-1;setCur(nc);setVisited(v=>({...v,[nc]:true}));},
        "aria-label":"Prethodno pitanje"},"←"),
      e("button",{...accBtn,className:"mob-nav-center",onClick:()=>setMobGrid(g=>!g),
        "aria-label":"Otvori prikaz pitanja","aria-expanded":mobGrid},
        e("span",{className:"mob-nav-pos"},(cur+1)+"/"+QSX.length),
        e("span",{className:"mob-nav-sub"},answeredCount+" odg. ⊞")
      ),
      cur<QSX.length-1
        ?e("button",{className:"mob-nav-btn",
            onClick:()=>{recordTime(cur);const nc=cur+1;setCur(nc);setVisited(v=>({...v,[nc]:true}));},
            "aria-label":"Sljedeće pitanje"},"→")
        :e("button",{className:"mob-nav-btn mob-nav-end",onClick:submitExam,"aria-label":"Završi ispit"},"✓")
    ),
    /* ── Mobile question grid bottom sheet ── */
    mobGrid&&e("div",{className:"mob-sheet-overlay",onClick:()=>setMobGrid(false),"aria-label":"Zatvori"},
      e("div",{className:"mob-sheet",onClick:ev=>ev.stopPropagation(),"role":"dialog","aria-modal":"true"},
        e("div",{className:"mob-sheet-handle"}),
        e("div",{className:"mob-sheet-head"},
          e("span",{style:{fontWeight:700,fontSize:15}},"Pitanja"),
          e("span",{style:{marginLeft:"auto",fontSize:12,color:"var(--muted)"}},answeredCount+"/"+QSX.length+" odgovoreno"),
          e("button",{className:"mob-sheet-close",onClick:()=>setMobGrid(false),"aria-label":"Zatvori"},"×")
        ),
        e("div",{className:"qgrid mob-sheet-grid"},
          QSX.map((qi,i)=>{
            const a=answers[qi.id];const isC=cur===i;const rv=rev[qi.id]||done;
            const ok=rv&&chk(qi,a)===true;const bad=rv&&chk(qi,a)===false;
            const man=rv&&(qi.type!=="mc");
            let cls=isC?"cur":ok?"cok":bad?"cbad":man?"cman":hasAns(a)?"ans":flag[qi.id]?"flag":"";
            return e("div",{...accBtn,key:i,className:"qdot "+cls,
              onClick:()=>{recordTime(cur);setCur(i);setVisited(v=>({...v,[i]:true}));setMobGrid(false);}},i+1);
          })
        )
      )
    ),
    modal&&e("div",{className:"mlov",onClick:()=>setModal(false)},      e("div",{className:"mlbox",onClick:e=>e.stopPropagation()},
        e("h3",null,"Izaći iz ispita?"),
        e("p",null,"Izaći ćeš iz ispita. Napredak u vježbanju je automatski spremljen."),
        e("div",{className:"mlbtns"},
          e("button",{className:"btn btn-g",onClick:()=>setModal(false)},"Ostani"),
          e("button",{className:"btn btn-red",onClick:()=>{setModal(false);try{localStorage.removeItem(_lsKey);localStorage.removeItem(_exKey);}catch(e2){}onExit();}},"Izađi")
        )
      )
    )
  );
}


export { Sim };
