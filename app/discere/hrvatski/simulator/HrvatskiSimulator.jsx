'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { buildUserAccess } from '@/components/discere/paywall';
import confetti from 'canvas-confetti';
import { EXAMS, ESEJI, SAZECI } from './hrvatskiSimulatorData';
import './hrvatski-simulator-scoped.css';
import { e, chk, calcXpGain, useUserData, updateStreak, playSuccessSound, renumberSessionQs, trimHistory } from './utils/helpers';
import { sm2Update, generateStrategyTips, calcTopicMastery, getDueReviews, calcTopicWeights, selectWarmupQuestions, selectAdaptiveMix, buildTrackerUpdate } from '@/lib/learning/hrv-engine';
import { checkNewAchievements } from './utils/achievements';
import { loadSimState, saveSimState } from '@/lib/discere-sim-state';
import { saveSimResult } from '@/lib/sim-progress';
import { isGameModeEnabled } from '@/lib/config/featureFlags';

function AchievementToast({ badge, onDismiss }) {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.12 }, scalar: 0.9, colors: ['#e8a830','#3ecf6e','#5b9fff','#f0f0f0','#ff6b9d'] });
    playSuccessSound();
    const t = setTimeout(onDismiss, 4500);
    return () => clearTimeout(t);
  }, [onDismiss]);
  return e('div', { className: 'ach-toast', onClick: onDismiss },
    e('div', { className: 'ach-toast-inner' },
      e('div', { className: 'ach-toast-emoji' }, badge.emoji),
      e('div', { className: 'ach-toast-text' },
        e('div', { className: 'ach-toast-label' }, 'Novi badge ostvaren!'),
        e('div', { className: 'ach-toast-title' }, badge.title),
        e('div', { className: 'ach-toast-desc' }, badge.desc)
      ),
      e('button', { className: 'ach-toast-close', onClick: ev => { ev.stopPropagation(); onDismiss(); } }, '×')
    )
  );
}
// Ekrani čiji ispit postoji samo u memoriji (nije ključ u EXAMS) — ne smiju se vraćati iz URL-a.
const VIRTUAL_SESSION_SCREENS=["filter_session","errors_session","bookmark_session","vsession","practice_list_session"];

// ── DDay: odbrojavanje do mature + probna matura (pun nasumičan ispit pod uvjetima) ──
const HRV_MATURA_ROKOVI=[{m:5,d:1,label:"ljetnog roka mature"},{m:7,d:21,label:"jesenskog roka"}];
function nextMaturaHrv(){
  const now=new Date(); now.setHours(0,0,0,0);
  const yr=now.getFullYear(); const cands=[];
  for(const r of HRV_MATURA_ROKOVI){ cands.push({t:new Date(yr,r.m,r.d),label:r.label}); cands.push({t:new Date(yr+1,r.m,r.d),label:r.label}); }
  cands.sort((a,b)=>a.t-b.t);
  const next=cands.find(c=>c.t>=now)||cands[0];
  return {days:Math.round((next.t-now)/86400000),label:next.label};
}
function DDayModal({ onStart, onClose }){
  const mat=nextMaturaHrv(); const days=mat.days;
  const keys=Object.keys(EXAMS);
  function start(){ if(!keys.length) return; const k=keys[Math.floor(Math.random()*keys.length)]; onStart(k); }
  return e("div",{onClick:onClose,style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,.55)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}},
    e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:20,maxWidth:440,width:"100%",padding:"28px 26px",boxShadow:"var(--shadow-lg)"}},
      e("div",{style:{fontSize:42,textAlign:"center",marginBottom:6}},"🎓"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,fontWeight:800,textAlign:"center",marginBottom:6}},"Probna matura"),
      e("p",{style:{color:"var(--muted)",fontSize:13.5,lineHeight:1.6,textAlign:"center",marginBottom:16}},"Generalna proba pod stvarnim uvjetima: nasumičan pun ispit s vremenskim ograničenjem. Najbolji test prave spremnosti."),
      (days!=null&&days>0)&&e("div",{style:{textAlign:"center",marginBottom:18}},
        e("span",{style:{color:days<=14?"var(--red)":"var(--blue)",fontWeight:800,fontSize:18}},days),
        e("span",{style:{color:"var(--muted)",fontSize:13}}," "+(days===1?"dan":"dana")+" do "+mat.label)),
      e("button",{onClick:start,style:{width:"100%",boxSizing:"border-box",background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"13px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:8}},"Započni probu →"),
      e("button",{onClick:onClose,style:{width:"100%",background:"none",border:"none",color:"var(--muted)",fontSize:13,fontWeight:600,cursor:"pointer",padding:"4px"}},"Odustani")
    )
  );
}
import { OnboardingScreen } from './components/OnboardingAndLists';
import { ProPaywallModal, GlossaryModal, PojmovnikModal, ImporterModal, DisclaimerModal } from './components/modals/Modals';
import { YearGroup, Home, UputeModal } from './components/HomeScreen';
import SkriptaModal from './components/SkriptaModal';
import { skriptaUrl } from './data/lektiraSkripta';
import { trackEvent } from '@/lib/analytics/tracker';

// Lazy-loaded screens — code split until the route is first visited
const _lz = (fn, name) => React.lazy(() => fn().then(m => ({ default: m[name] })));
const Sim               = _lz(() => import('./components/Sim'),                   'Sim');
const ModeSelect        = _lz(() => import('./components/ExamScreens'),            'ModeSelect');
const TopicFilterScreen = _lz(() => import('./components/ExamScreens'),            'TopicFilterScreen');
const ErrorsScreen      = _lz(() => import('./components/ExamScreens'),            'ErrorsScreen');
const BookmarksScreen   = _lz(() => import('./components/ExamScreens'),            'BookmarksScreen');
const StatsScreen       = _lz(() => import('./components/StatsScreen'),            'StatsScreen');
const PdfReport         = _lz(() => import('./components/PdfReport'),               'PdfReport');
const BrowseScreen      = _lz(() => import('./components/BrowseScreen'),           'BrowseScreen');
const EssayListScreen   = _lz(() => import('./components/essay/EssayScreens'),     'EssayListScreen');
const EssayMode         = _lz(() => import('./components/essay/EssayScreens'),     'EssayMode');
const SazetakListScreen = _lz(() => import('./components/essay/EssayScreens'),     'SazetakListScreen');
const SazetakMode       = _lz(() => import('./components/essay/EssayScreens'),     'SazetakMode');
const PracticeListScreen= _lz(() => import('./components/OnboardingAndLists'),     'PracticeListScreen');
const LektireScreen     = _lz(() => import('./components/LektireScreen'),          'LektireScreen');
const ScratchPad        = React.lazy(() => import('./components/ScratchPad'));
const WrappedCard       = React.lazy(() => import('./components/WrappedCard'));
const StudyPlanModal    = React.lazy(() => import('./components/StudyPlanModal'));

function App(){
  const[screen,setScreen]=useState("home");
  const[showGlossary,setShowGlossary]=useState(false);
  const[glossaryTerm,setGlossaryTerm]=useState("");
  const[showImporter,setShowImporter]=useState(false);
  const[customExams,setCustomExams]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("discere_custom_exams")||"{}")||{};} catch{return {};}
  });
  const[paywallFeature,setPaywallFeature]=useState(null);
  const[pendingHighlight,setPendingHighlight]=useState(null);
  const[showPojmovnik,setShowPojmovnik]=useState(false);
  const[showDDay,setShowDDay]=useState(false);
  const[showWrapped,setShowWrapped]=useState(false);
  const[showPlan,setShowPlan]=useState(false);
  const[skriptaModal,setSkriptaModal]=useState(null); // {url,fullUrl,title,chapter} — skripta u modalu
  const[customQs,setCustomQs]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("discere_custom_qs")||"[]")||[];}catch(e){return[];}
  });

  function handleImport(qs){
    const next=[...customQs,...qs];
    setCustomQs(next);
    try{localStorage.setItem("discere_custom_qs",JSON.stringify(next));}catch(e){}
  }
  function deleteCustomQ(id){
    const next=customQs.filter(q=>q.id!==id);
    setCustomQs(next);
    try{localStorage.setItem("discere_custom_qs",JSON.stringify(next));}catch(e){}
  }
  function clearCustomQs(){
    setCustomQs([]);
    try{localStorage.removeItem("discere_custom_qs");}catch(e){}
  }
  const[browseSearch,setBrowseSearch]=useState("");
  const[activeExam,setActiveExam]=useState(null);
  const[virtualExam,setVirtualExam]=useState(null);
  const[examKey,setExamKey]=useState("2024_ljeto_A");
  const[pendingExamKey,setPendingExamKey]=useState("2024_ljeto_A");
  const[prevScreen,setPrevScreen]=useState("home");
  const[soundOn,setSoundOn]=useState(()=>{try{return typeof localStorage!=='undefined'&&localStorage.getItem("discere_sound")!=="0";}catch(e){return true;}});
  const[showDisclaimer,setShowDisclaimer]=useState(false);
  const[darkMode,setDarkMode]=useState(()=>{try{return typeof localStorage!=='undefined'&&localStorage.getItem("discere_hrv_dark")==="1";}catch(e){return false;}});
  const[cbMode,setCbMode]=useState(()=>{try{return typeof localStorage!=='undefined'&&localStorage.getItem("discere_hrv_cb")==="1";}catch(e){return false;}});
  const[dysMode,setDysMode]=useState(()=>{try{return typeof localStorage!=='undefined'&&localStorage.getItem("discere_hrv_dys")==="1";}catch(e){return false;}});
  const[userData,updateUserData]=useUserData();
  const[achievementToast,setAchievementToast]=useState(null);
  // PRO status — ISKLJUČIVO Supabase auth (localStorage userData je klijentski
  // upravljiv, pa bi fallback bio paywall bypass: setItem('discere_hrv_user',{isPro:true})).
  const { user: authUser, isPro: authIsPro, isPaid } = useAuth();
  const isPro = authIsPro;
  const userAccess = useMemo(() => buildUserAccess({ user: authUser, isPro, isPaid }), [authUser, isPro, isPaid]);
  // Proširi EXAMS s uvezenim ispitima
  const ALL_EXAMS=Object.assign({},EXAMS,customExams);
  const[showOnboarding,setShowOnboarding]=useState(()=>{
    if(typeof localStorage==='undefined') return true;
    try{const d=JSON.parse(localStorage.getItem("discere_hrv_user")||"{}");return !d.onboarded;}
    catch(e){return true;}
  });

  useEffect(()=>{
    try{localStorage.setItem("discere_hrv_dark",darkMode?"1":"0");}catch(e){}
  },[darkMode]);
  useEffect(()=>{
    try{localStorage.setItem("discere_hrv_cb",cbMode?"1":"0");}catch(e){}
  },[cbMode]);
  useEffect(()=>{
    try{localStorage.setItem("discere_hrv_dys",dysMode?"1":"0");}catch(e){}
  },[dysMode]);
  if(showOnboarding&&userData?.onboarded) setShowOnboarding(false);
  // Migracija starih korisnika: history je nekad rastao bez granice (answers+qTimes na
  // svakom zapisu). Jednom pri mountu obreži na trimHistory pravila ako već nije trimano.
  const _historyTrimmed=useRef(false);
  useEffect(()=>{
    if(_historyTrimmed.current) return;
    _historyTrimmed.current=true;
    updateUserData(prev=>{
      if(!prev.history||!prev.history.length) return prev;
      const trimmed=trimHistory(prev.history);
      if(trimmed===prev.history) return prev;
      return{...prev,history:trimmed};
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  useEffect(()=>{
    try{localStorage.setItem("discere_sound",soundOn?"1":"0");}catch(e){}
    window._soundOn=soundOn;
  },[soundOn]);

  // ── Cross-device cloud sync (Supabase discere_sim_state, subject='hrv') ──
  // Hydrate on mount if cloud is newer than this device's last sync; then debounce-save on change.
  const _hydrated=useRef(false);
  const _saveTimer=useRef(null);
  useEffect(()=>{
    let cancelled=false;
    if(!authUser){_hydrated.current=true;return;}
    (async()=>{
      const blob=await loadSimState('hrv');
      if(cancelled){return;}
      try{
        const cloudUser=blob&&blob['discere_hrv_user']?JSON.parse(blob['discere_hrv_user']):null;
        const cloudAt=Number((blob&&blob._savedAt)||0);
        const localAt=Number((typeof localStorage!=='undefined'&&localStorage.getItem('discere_hrv_synced_at'))||0);
        if(cloudUser&&cloudAt>localAt){
          try{if(blob['discere_hrv_bookmarks'])localStorage.setItem('discere_hrv_bookmarks',blob['discere_hrv_bookmarks']);}catch(e){}
          try{if(blob['discere_lektire_prog'])localStorage.setItem('discere_lektire_prog',blob['discere_lektire_prog']);}catch(e){}
          // Vrati napredak ispita i nacrte (esej/sažetak) s clouda.
          try{
            Object.keys(blob).forEach(k=>{
              if((k.startsWith('discere_prog_')||k.startsWith('discere_esej_')||k.startsWith('discere_sazetak_'))&&blob[k]!=null){
                localStorage.setItem(k,blob[k]);
              }
            });
          }catch(e){}
          try{localStorage.setItem('discere_hrv_synced_at',String(cloudAt));}catch(e){}
          updateUserData(()=>cloudUser);
        }
      }catch(e){}
      _hydrated.current=true;
    })();
    return()=>{cancelled=true;};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[authUser]);
  useEffect(()=>{
    if(!_hydrated.current||!authUser) return;
    clearTimeout(_saveTimer.current);
    _saveTimer.current=setTimeout(()=>{
      const at=Date.now();
      try{localStorage.setItem('discere_hrv_synced_at',String(at));}catch(e){}
      // Pokupi napredak ispita i nacrte (esej/sažetak) da se ne izgube pri promjeni uređaja.
      const extra={};
      try{
        if(typeof localStorage!=='undefined'){
          for(let i=0;i<localStorage.length;i++){
            const k=localStorage.key(i);
            if(k&&(k.startsWith('discere_prog_')||k.startsWith('discere_esej_')||k.startsWith('discere_sazetak_'))){
              const v=localStorage.getItem(k); if(v!=null) extra[k]=v;
            }
          }
        }
      }catch(e){}
      saveSimState({
        'discere_hrv_user':JSON.stringify(userData||{}),
        'discere_hrv_bookmarks':(typeof localStorage!=='undefined'&&localStorage.getItem('discere_hrv_bookmarks'))||'',
        'discere_lektire_prog':(typeof localStorage!=='undefined'&&localStorage.getItem('discere_lektire_prog'))||'',
        ...extra,
        _savedAt:String(at),
      },'hrv');
    },1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userData,authUser,screen]);

  function goHome(){setScreen("home");setBrowseSearch("");window.scrollTo(0,0);}
  function goModeSelect(k){setPendingExamKey(k);setScreen("modeselect");window.scrollTo(0,0);}
  function goPractice(k){
    if(k==="custom_session"){
      if(!customQs||customQs.length===0) return;
      setActiveExam({key:"custom_session",year:"Vlastita",season:"session",
        label:"Vlastita pitanja",qs:[...customQs].sort(()=>Math.random()-.5)});
      setScreen("practice_list_session");
      window.scrollTo(0,0);
      return;
    }setExamKey(k||"2024_ljeto_A");setScreen("practice");window.scrollTo(0,0);}
  function goPracticeList(){setScreen("practice_list");window.scrollTo(0,0);}
  function goExamMode(k){const _k=k||pendingExamKey||"2024_ljeto_A";try{ trackEvent({name:'discere_exam_started',meta:{subject:'hrv',examKey:_k,mode:'ispit'}}); }catch(e){}setExamKey(_k);setScreen("exammode");window.scrollTo(0,0);}
  function goFilter(){setScreen("filter");window.scrollTo(0,0);}
  function goFilterSession(ve){setVirtualExam({...ve,qs:renumberSessionQs(ve.qs)});setScreen("filter_session");window.scrollTo(0,0);}
  function goErrors(){setScreen("errors");window.scrollTo(0,0);}
  function goErrorSession(ve){setVirtualExam({...ve,qs:renumberSessionQs(ve.qs)});setScreen("errors_session");window.scrollTo(0,0);}
  function goBookmarks(){setScreen("bookmarks");window.scrollTo(0,0);}
  function goBookmarkSession(ve){setVirtualExam({...ve,qs:renumberSessionQs(ve.qs)});setScreen("bookmark_session");window.scrollTo(0,0);}
  function goStats(){setScreen("stats");window.scrollTo(0,0);}
  function handleResetOnboarding(opts){
    if(opts?.resetOnboarding){
      updateUserData(prev=>({...prev,onboarded:false}));
      setShowOnboarding(true);
      setScreen("home");
      return;
    }
    if(opts?.dnevniCilj){
      updateUserData(prev=>({...prev,dnevniCilj:opts.dnevniCilj}));
      return;
    }
    if(opts?.clearType==="napredak"){
      updateUserData(prev=>({...prev,history:[],errorTracker:{},xp:0,streak:0,totalExams:0}));
      try{localStorage.removeItem("discere_hrv_bookmarks");}catch(e){}
      return;
    }
    if(opts?.clearType==="sve"){
      try{
        localStorage.removeItem("discere_hrv_user");
        localStorage.removeItem("discere_hrv_bookmarks");
        localStorage.removeItem("discere_hrv_dark");
      }catch(e){}
      updateUserData(()=>({}));
      setShowOnboarding(true);
      setScreen("home");
    }
  }
  function goBrowse(q){setBrowseSearch(typeof q==="string"?q:"");setScreen("browse");window.scrollTo(0,0);}
  function goLektire(){setScreen("lektire");window.scrollTo(0,0);}
  function goEsejList(){setScreen("esej_list");window.scrollTo(0,0);}
    function goSazetakList(){setScreen("sazeci_list");window.scrollTo(0,0);}
    function goSazetak(k){setSazetakKey(k);setScreen("sazetak");window.scrollTo(0,0);}
  const[esejKey,setEsejKey]=useState(null);
  const[sazetakKey,setSazetakKey]=useState(null);
  // Deep-link iz skripti: ?lektira=<djelo>&autor=<autor> → otvori to djelo u Lektirama
  const[lektiraDeep,setLektiraDeep]=useState(null);
  function goEsej(key){setEsejKey(key);setScreen("esej");window.scrollTo(0,0);}
  // Otvori skriptu u modalu (ostaje u simulatoru, čisti embed prikaz)
  function openSkripta(map,djelo){
    if(!map||!map.slug)return;
    try{ trackEvent({name:'discere_skripta_opened',meta:{subject:'hrv',slug:map.slug,djelo:djelo||map.autor||''}}); }catch(e){}
    setSkriptaModal({
      url:skriptaUrl(map,{anchor:true,embed:true}),
      fullUrl:skriptaUrl(map,{anchor:true}),
      title:djelo||map.autor||"Skripta",
      chapter:map.chapter||""
    });
  }
  function goPracticeExamErrors(wrongQs,srcExam){
    const ve={key:"exam_errors_session",year:srcExam.year,season:srcExam.season,label:srcExam.label+" — Greške",
      qs:renumberSessionQs(wrongQs.map(q=>Object.assign({},q,{_examKey:q._examKey||srcExam.key})).sort(()=>Math.random()-.5))};
    setVirtualExam(ve);setScreen("errors_session");window.scrollTo(0,0);
  }

  const allMcPool=useMemo(()=>{
    const out=[];
    Object.values(EXAMS).forEach(ex=>{(ex.qs||[]).forEach(q=>{ if(q.type==="mc"&&q.topic) out.push(Object.assign({},q,{_examKey:ex.key})); });});
    return out;
  },[]);
  function goAdaptive(){
    const weights=calcTopicWeights(userData.history);
    let qs=selectAdaptiveMix(allMcPool,weights,15);
    if(!qs.length) qs=allMcPool.slice().sort(()=>Math.random()-.5).slice(0,15);
    if(!qs.length) return;
    qs=renumberSessionQs(qs);
    setVirtualExam({key:"adaptive_session",year:"Adaptivni trening",season:"session",label:"Adaptivni trening",qs});
    setScreen("vsession");window.scrollTo(0,0);
  }
  function goDaily(){
    const tracker=userData.errorTracker||{};
    const due=getDueReviews(tracker);
    const qs=[]; const seen=new Set();
    due.forEach(d=>{ const ex=EXAMS[d.examKey]; if(!ex)return; const q=(ex.qs||[]).find(x=>String(x.id)===String(d.qid)); if(q&&q.type==="mc"){ const k=d.examKey+"_"+q.id; if(!seen.has(k)){seen.add(k);qs.push(Object.assign({},q,{_examKey:d.examKey}));} } });
    if(qs.length<8){ const weights=calcTopicWeights(userData.history); const fill=selectAdaptiveMix(allMcPool,weights,12); fill.forEach(q=>{ const k=q._examKey+"_"+q.id; if(qs.length<8&&!seen.has(k)){seen.add(k);qs.push(q);} }); }
    let out=qs.slice(0,8);
    if(!out.length) return;
    out=renumberSessionQs(out);
    setVirtualExam({key:"daily_session",year:"Dnevni izazov",season:"session",label:"Dnevni izazov",qs:out});
    setScreen("vsession");window.scrollTo(0,0);
  }
  function onExamDone(result){
    try{ trackEvent({name:'discere_exam_completed',meta:{subject:'hrv',examKey:result.examKey,pct:result.pct,grade:result.grade,mode:result.examMode?'ispit':'vjezba'}}); }catch(e){}
    const xpGain=calcXpGain(result.pct,result.total);
    // Virtualne sesije (dnevni izazov, adaptivni trening, filter, greške, oznake) nemaju
    // svoj ključ u EXAMS, pa pitanja stižu iz rezultata; errorTracker se vodi po izvornom
    // ispitu i izvornom id-u jer sesije mogu prenumerirati pitanja.
    const examQs=(result.qs&&result.qs.length)?result.qs:(EXAMS[result.examKey]?.qs||[]);
    // topic breakdown za analytics
    const topicBreakdown={};
    examQs.forEach(q=>{
      if(q.type!=="mc") return;
      const topic=q.topic||"ostalo";
      if(!topicBreakdown[topic]) topicBreakdown[topic]={correct:0,total:0};
      topicBreakdown[topic].total++;
      if(chk(q,result.answers?.[q.id])===true) topicBreakdown[topic].correct++;
    });
    // ── Check achievements (uses current userData snapshot) ──
    const { newAchievements, newBadges } = checkNewAchievements(userData, result, topicBreakdown);
    if (newBadges.length > 0) {
      newBadges.slice(0, 2).forEach((badge, i) => {
        setTimeout(() => {
          setAchievementToast(badge);
          setTimeout(() => setAchievementToast(null), 4500);
        }, 1400 + i * 5200);
      });
    }

    updateUserData(prev=>{
      const updated=updateStreak(prev);
      const errorTracker=buildTrackerUpdate(examQs,result.answers,prev.errorTracker,result.examKey,sm2Update);
      // ── Confidence log merge ──
      const confidenceLog={...(prev.confidenceLog||{})};
      if(result.confidenceLog){
        Object.assign(confidenceLog,result.confidenceLog);
      }
      const newHistory=[...(prev.history||[]),{
        examLabel:result.examLabel,examKey:result.examKey,
        date:new Date().toLocaleDateString("hr"),pct:result.pct,grade:result.grade,
        cor:result.cor,total:result.total,numQ:result.total||0,qTimes:result.qTimes||{},
        mode:result.examMode?"simulacija":"vježbanje",
        topic_breakdown:topicBreakdown,
        answers:result.answers||{}
      }];
      return{...updated,xp:(prev.xp||0)+xpGain,history:trimHistory(newHistory),errorTracker,confidenceLog,achievements:newAchievements,totalExams:(prev.totalExams||0)+1};
    });
    // ── sim_progress red (subject='hrv') za analitiku / roditeljski dashboard ──
    // Samo pravi ispiti (godina_rok_razina); virtualne sesije (daily/adaptive/errors) preskačemo.
    try{ if(/^\d{4}_/.test(result.examKey||"")){
      const _m=/_([AB])$/.exec(result.examKey||"");
      saveSimResult({
        examKey:result.examKey, examLabel:result.examLabel, razina:_m?_m[1]:null,
        pct:result.pct, grade:String(result.grade), cor:result.cor, total:result.total,
        answers:result.answers||{}, qTimes:result.qTimes||{},
        examMode:!!result.examMode, topic_breakdown:topicBreakdown, errorTags:[],
      }, undefined, 'hrv');
      fetch('/api/game/discere-attempts',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({attemptId:crypto.randomUUID(),examKey:result.examKey,answers:result.answers||{},qTimes:result.qTimes||{},examMode:!!result.examMode})
      }).catch(()=>{});
    } }catch(e){}
  }


  const exam=EXAMS[examKey];
  // Bez fallbacka na EXAMS[examKey]: virtualna sesija koja je izgubila svoja pitanja ne smije
  // tiho postati neki drugi ispit.
  const resolvedExam=VIRTUAL_SESSION_SCREENS.includes(screen)?(screen==="practice_list_session"?activeExam:virtualExam):exam;
  const _sessionRef=useRef(null);
  useLayoutEffect(()=>{_sessionRef.current={virtualExam,activeExam};},[virtualExam,activeExam]);

  const toggles=e("div",{style:{display:"flex",gap:6,marginLeft:"auto"}},
    e("button",{onClick:()=>setShowDisclaimer(true),title:"O aplikaciji",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}},
      "ℹ️"),
    e("button",{onClick:()=>setSoundOn(s=>!s),title:soundOn?"Isključi zvuk":"Uključi zvuk",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:soundOn?"var(--text)":"var(--muted)"}},
      soundOn?"🔊":"🔇"),
    e("button",{onClick:()=>{setPrevScreen(screen);setScreen("upute");},title:"Upute za korištenje",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--muted)",display:"flex",alignItems:"center",gap:5}},
      "📖",e("span",{style:{fontSize:12,fontWeight:600}},"Upute")),
    e("button",{onClick:()=>setCbMode(v=>!v),title:cbMode?"Isključi mod za daltonizam":"Mod za daltonizam",
      style:{background:cbMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:cbMode?"var(--blue)":"var(--muted)"}},
      "👁️"),
    e("button",{onClick:()=>setDysMode(v=>!v),title:dysMode?"Standardni tekst":"Disleksija — lakše čitanje",
      style:{background:dysMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:dysMode?"var(--blue)":"var(--muted)"}},
      "🔤"),
    e("button",{onClick:()=>setDarkMode(d=>!d),title:darkMode?"Svijetli mod":"Tamni mod",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}},
      darkMode?"☀️":"🌙")
  );

  function handleOnboardingDone(data){
    updateUserData(prev=>({...prev,...data,onboarded:true}));
    setShowOnboarding(false);
  }

  // Offline detekcija — hooks must be before any conditional return (Rules of Hooks)
  const[isOffline,setIsOffline]=useState(()=>typeof navigator!=='undefined'?!navigator.onLine:false);
  useEffect(()=>{
    if(typeof window==='undefined') return;
    const goOff=()=>setIsOffline(true);
    const goOn=()=>setIsOffline(false);
    window.addEventListener("offline",goOff);
    window.addEventListener("online",goOn);
    return()=>{window.removeEventListener("offline",goOff);window.removeEventListener("online",goOn);};
  },[]);

  // ── #5 URL routing — browser back/forward support ──
  const _isPopstate=useRef(false);
  const _screenInited=useRef(false);
  // Sync screen → URL (push state on every screen change except the very first render)
  useEffect(()=>{
    if(!_screenInited.current){_screenInited.current=true;return;}
    if(_isPopstate.current){_isPopstate.current=false;return;}
    if(typeof window==='undefined') return;
    if(screen==="home"){
      window.history.pushState({screen:"home"},"",window.location.pathname);
    } else {
      const p=new URLSearchParams({s:screen});
      if(examKey) p.set("exam",examKey);
      if(esejKey) p.set("esej",esejKey);
      if(sazetakKey) p.set("saz",sazetakKey);
      window.history.pushState({screen,examKey,pendingExamKey,esejKey,sazetakKey},"","?"+p.toString());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[screen]);
  // On mount: init screen from URL + listen for popstate
  useEffect(()=>{
    if(typeof window==='undefined') return;
    const p=new URLSearchParams(window.location.search);
    const s=p.get("s"); const ek=p.get("exam");
    const deepLektira=p.get("lektira");
    // Sesija je živjela samo u state-u; nakon reloada je nema pa se vraćamo na početnu.
    const deadSession=!!s&&VIRTUAL_SESSION_SCREENS.includes(s);
    if(deepLektira){
      // Dolazak iz skripte: otvori Lektire na zadanom djelu
      _isPopstate.current=true;
      setLektiraDeep({djelo:deepLektira,autor:p.get("autor")||""});
      setScreen("lektire");
    } else if(s&&s!=="home"&&!deadSession){
      _isPopstate.current=true;
      setScreen(s);
      if(ek){setExamKey(ek);setPendingExamKey(ek);}
    }
    if(deadSession) window.history.replaceState({screen:"home"},"",window.location.pathname);
    else window.history.replaceState({screen:s||"home",examKey:ek||"2024_ljeto_A"},"",window.location.href);
    const onPop=ev=>{
      const st=ev.state;
      if(!st) return;
      _isPopstate.current=true;
      if(st.screen){
        const ses=_sessionRef.current||{};
        const alive=st.screen==="practice_list_session"?!!ses.activeExam:!!ses.virtualExam;
        setScreen(VIRTUAL_SESSION_SCREENS.includes(st.screen)&&!alive?"home":st.screen);
      }
      if(st.examKey) setExamKey(st.examKey);
      if(st.pendingExamKey) setPendingExamKey(st.pendingExamKey);
      if(st.esejKey!==undefined) setEsejKey(st.esejKey||null);
      if(st.sazetakKey!==undefined) setSazetakKey(st.sazetakKey||null);
      window.scrollTo(0,0);
    };
    window.addEventListener("popstate",onPop);
    return()=>window.removeEventListener("popstate",onPop);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(showOnboarding) return e("div",{className:"hrv-sim"+(darkMode?" dark-mode":"")+(cbMode?" cb-mode":"")+(dysMode?" dys-mode":"")},e(OnboardingScreen,{onDone:handleOnboardingDone}));

  return e("div",{className:"hrv-sim"+(darkMode?" dark-mode":"")+(cbMode?" cb-mode":"")+(dysMode?" dys-mode":"")},
    isOffline&&e("div",{style:{
      position:"fixed",bottom:0,left:0,right:0,zIndex:500,
      background:"var(--gold)",color:"#160d00",
      padding:"8px 16px",fontSize:13,fontWeight:600,
      textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:8
    }},
      "📡 Offline — AI funkcije nisu dostupne. Ispiti i vježbanje rade normalno."
    ),
    showDisclaimer&&e(DisclaimerModal,{onClose:()=>setShowDisclaimer(false)}),
    paywallFeature&&e(ProPaywallModal,{feature:paywallFeature,onClose:()=>setPaywallFeature(null)}),
    showPojmovnik&&e(PojmovnikModal,{onClose:()=>setShowPojmovnik(false)}),
    showDDay&&e(DDayModal,{onClose:()=>setShowDDay(false),onStart:(k)=>{setShowDDay(false);goExamMode(k);}}),
    skriptaModal&&e(SkriptaModal,{...skriptaModal,onClose:()=>setSkriptaModal(null)}),
    showWrapped&&e(React.Suspense,{fallback:null},e(WrappedCard,{userData,onClose:()=>setShowWrapped(false)})),
    showPlan&&e(React.Suspense,{fallback:null},e(StudyPlanModal,{userData,isPro,weeks:Math.max(1,Math.round(nextMaturaHrv().days/7)),onClose:()=>setShowPlan(false),onPaywall:(f)=>setPaywallFeature(f)})),
    showImporter&&e(ImporterModal,{onClose:()=>setShowImporter(false),onImport:handleImport,customQs,onDelete:deleteCustomQ}),
    achievementToast&&e(AchievementToast,{badge:achievementToast,onDismiss:()=>setAchievementToast(null)}),
    e(React.Suspense,{fallback:e("div",{className:"sim-skeleton-wrap",role:"status","aria-live":"polite"},
      e("div",{className:"sim-skeleton sim-skeleton-nav"}),
      e("div",{className:"sim-skeleton-body"},
        e("div",{className:"sim-skeleton sim-skeleton-title"}),
        e("div",{className:"sim-skeleton sim-skeleton-line"}),
        e("div",{className:"sim-skeleton sim-skeleton-line sim-skeleton-line--short"}),
        e("div",{style:{display:"flex",gap:12,marginTop:20}},
          e("div",{className:"sim-skeleton sim-skeleton-card"}),
          e("div",{className:"sim-skeleton sim-skeleton-card"}),
          e("div",{className:"sim-skeleton sim-skeleton-card"})
        )
      )
    )},
    e("div",{key:screen,className:"screen-slide"},
    screen==="upute"&&e(UputeModal,{onClose:()=>{setScreen(prevScreen);window.scrollTo(0,0);}}),
    screen==="home"&&e(Home,{key:screen,onExam:goModeSelect,onPractice:goPractice,onFilter:goFilter,onErrors:goErrors,onBookmarks:goBookmarks,onStats:goStats,onBrowse:goBrowse,onEsej:goEsejList,onSazetak:goSazetakList,onShowDisclaimer:()=>setShowDisclaimer(true),onPracticeList:goPracticeList,onLektire:goLektire,onPojmovnik:()=>setShowPojmovnik(true),onImporter:()=>setShowImporter(true),onDDay:()=>setShowDDay(true),onDaily:goDaily,onAdaptive:goAdaptive,onGameMode:isGameModeEnabled()?()=>window.location.assign('/game'):undefined,onWrapped:()=>setShowWrapped(true),onAIPlan:()=>setShowPlan(true),customQs,onClearCustom:clearCustomQs,userData,toggles,isPaid}),
    screen==="modeselect"&&e(ModeSelect,{key:screen,examKey:pendingExamKey,onExamMode:goExamMode,onPractice:goPractice,onBack:goHome,onEsej:goEsej,onSazetak:goSazetak,isPaid}),
    screen==="filter"&&e(TopicFilterScreen,{key:screen,onStart:goFilterSession,onBack:goHome,userData}),
    screen==="errors"&&e(ErrorsScreen,{key:screen,userData,onStart:goErrorSession,onBack:goHome}),
    screen==="bookmarks"&&e(BookmarksScreen,{key:screen,onBack:goHome,onStartSession:goBookmarkSession}),
    screen==="stats"&&e(StatsScreen,{key:screen,userData,onBack:goHome,isPro,onPaywall:(f)=>setPaywallFeature(f),onPdfReport:()=>{setScreen("pdfreport");window.scrollTo(0,0);}}),
    screen==="pdfreport"&&e(PdfReport,{key:screen,userData,onBack:goStats}),
    screen==="lektire"&&e(LektireScreen,{key:screen,onBack:goHome,userData,updateUserData,
        initialDjelo:lektiraDeep&&lektiraDeep.djelo,initialAutor:lektiraDeep&&lektiraDeep.autor,
        onOpenSkripta:openSkripta,
        onGoToExam:(examKey,qid)=>{
          setPendingHighlight({examKey,qid});
          goExamMode(examKey);
        }}),
    screen==="browse"&&e(BrowseScreen,{key:screen,onBack:goHome,initialSearch:browseSearch,initialGlobal:!!browseSearch}),
    screen==="esej_list"&&e(EssayListScreen,{key:screen,onBack:goHome,onEsej:goEsej}),
    screen==="esej"&&esejKey&&e(EssayMode,{esejKey,onBack:goEsejList,userData,isPro,onPaywall:(f)=>setPaywallFeature(f)}),
    screen==="sazeci_list"&&e(SazetakListScreen,{key:screen,onBack:goHome,onSazetak:goSazetak}),
    screen==="sazetak"&&sazetakKey&&e(SazetakMode,{sazetakKey,onBack:goSazetakList,isPro,onPaywall:(f)=>setPaywallFeature(f)}),
    screen==="practice_list_session"&&e(Sim,{exam:resolvedExam,practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="filter_session"&&e(Sim,{exam:resolvedExam,practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="errors_session"&&e(Sim,{exam:resolvedExam,practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="bookmark_session"&&e(Sim,{exam:resolvedExam,practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="vsession"&&e(Sim,{exam:resolvedExam,practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="practice_list"&&e(PracticeListScreen,{key:screen,onBack:goHome,onPractice:goPractice,onExamMode:goExamMode,userData,customQs,onImporter:()=>setShowImporter(true)}),
    screen==="practice"&&e(Sim,{exam:exam||{qs:[]},practice:true,examMode:false,onExit:goHome,onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:null,onOpenSkripta:openSkripta}),
    screen==="exammode"&&e(Sim,{exam:exam||{qs:[]},practice:false,examMode:true,onGoToExam:goExamMode,onExit:()=>{const fromLektire=!!pendingHighlight;setPendingHighlight(null);fromLektire?setScreen("lektire"):goHome();window.scrollTo(0,0);},onDone:onExamDone,userData,isPro,isPaid,userAccess,onPracticeErrors:goPracticeExamErrors,onStats:goStats,onFilter:goFilter,highlightQid:pendingHighlight?.examKey===examKey?pendingHighlight?.qid:null,onOpenSkripta:openSkripta})
  )),
  ["practice","exammode","vsession","filter_session","errors_session","bookmark_session","practice_list_session"].includes(screen)&&e(React.Suspense,{fallback:null},e(ScratchPad))
  );
}

class SimErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, errMsg: "", errStack: "" }; }
  static getDerivedStateFromError(err) { return { hasError: true, errMsg: err?.message||String(err), errStack: err?.stack||"" }; }
  componentDidCatch(err, info) { console.error("[Simulator Error]", err, info); console.error("[Simulator Stack]", err?.stack); console.error("[Simulator Component Stack]", info?.componentStack); }
  render() {
    if (this.state.hasError) {
      return e("div", { className: "hrv-sim", style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 16, padding: 40 } },
        e("div", { style: { fontSize: 48 } }, "⚠️"),
        e("h2", { style: { fontFamily: "var(--fh)", fontSize: 22, color: "var(--text)" } }, "Nešto je pošlo po krivu"),
        e("p", { style: { color: "var(--muted)", fontSize: 14, maxWidth: 400, textAlign: "center", lineHeight: 1.6 } },
          "Pokušaj osvježiti stranicu. Ako se problem nastavi, obriši podatke u Postavkama."),
        e("pre", { style: { background:"var(--s2)", color:"var(--red)", fontSize:11, padding:"10px 14px", borderRadius:8, maxWidth:700, overflowX:"auto", textAlign:"left", whiteSpace:"pre-wrap", wordBreak:"break-all" } },
          this.state.errMsg+"\n\n"+this.state.errStack),
        e("button", {
          className: "btn btn-p",
          style: { padding: "10px 24px", fontSize: 14 },
          onClick: () => { this.setState({ hasError: false, errMsg: "", errStack: "" }); window.location.reload(); }
        }, "🔄 Osvježi stranicu")
      );
    }
    return this.props.children;
  }
}

export default function HrvatskiSimulator() {
  return e(SimErrorBoundary, null, e(App, null));
}
