// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Pocetni ekran: spremnost za maturu, postignuca, izbor moda i popis ispita. */
import React from 'react';
import { SUBJECT, DS, TOPIC_LABELS, planCta, standardCta, askUpgrade, isFreeExam } from '../core/state';
import { EXAMS, examQCount, allExamsLoaded, hasSummary, summaryQuestions } from '../core/exams';
import { GC, getLevel, XP_LEVELS, LEVEL_NAMES } from '../core/ui';
import { AboutModal } from '../tools/modals';
import { TodayHero } from '../screens/today';
import { TIER_MEDAL, TIER_NAME, achLevel, achNext, ACHIEVEMENTS } from './achievements';
const{createElement:e}=React;
// Ispit je otvoren za prikaz na Pocetnoj ako se smije barem rijesiti kao ispit:
// zakljucan ispit uz besplatan ispitni mod i dalje ulazi u brojace i pipove.
function exOpen(ex){ return !!ex && (!ex.locked || isFreeExam()); }
function Home({onExam,onPractice,onStats,onAdaptive,onFormule,onErrors,onBrowse,onFlashcards,onDailyChallenge,onBookmarks,onFilter,onMixed,onSRS,onAIPractice,onDDay,onGuide,onStartErrorSession,razina,onEditRazina,onPrepareExams,resume,onResume,onDiscardResume,onSetGoal,userData,toggles}){
  const[ioMsg,setIoMsg]=React.useState(null);
  React.useEffect(()=>{if(!ioMsg)return;const t=setTimeout(()=>setIoMsg(null),3200);return()=>clearTimeout(t);},[ioMsg]);
  const[navScrolled,setNavScrolled]=React.useState(false);
  React.useEffect(function(){var f=function(){setNavScrolled(window.scrollY>16);};window.addEventListener("scroll",f,{passive:true});f();return function(){window.removeEventListener("scroll",f);};},[]);
  const seasonOrder={"ljeto":0,"jesen":1,"zima":2};
  const[showAbout,setShowAbout]=React.useState(false);
  const[achDetail,setAchDetail]=React.useState(null);
  const[showReadiness,setShowReadiness]=React.useState(false);
  const history=userData.history||[];
  const avgPct=history.length?Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length):null;
  const totalSolved=history.length;
  const lv=getLevel(userData.xp||0);

  const allExams=Object.values(EXAMS).sort((a,b)=>b.year-a.year||(seasonOrder[a.season]??9)-(seasonOrder[b.season]??9));
  const newestExam=allExams[0];

  // Accordion za ispite
  const byYear={};
  allExams.forEach(ex=>{
    if(!byYear[ex.year]) byYear[ex.year]={A:[],B:[]};
    byYear[ex.year][ex.razina].push(ex);
  });
  const years=Object.keys(byYear).sort((a,b)=>b-a);
  const[openYear,setOpenYear]=React.useState(years[0]);
  const[showWrapped,setShowWrapped]=React.useState(false);
  const toggleYear=(y)=>setOpenYear(p=>p===y?null:y);
  const seasonLabel=(s)=>s==="ljeto"?"☀️ Ljetni rok":s==="jesen"?"🍂 Jesenski rok":"❄️ Zimski rok";

  // Greške count
  const errCount=userData.errorTracker?Object.keys(userData.errorTracker).filter(k=>userData.errorTracker[k].count>0).length:0;

  // Popis tema dolazi iz meta-sazetka (summary.json) — za pokrivenost gradiva treba samo
  // topic svakog zadatka, pa Home vise ne mora dovuci nijedan ispit.
  const _allTL=(()=>{const set=new Set();summaryQuestions().forEach(q=>{if(razina&&q.razina!==razina)return;if(q.topic)set.add(TOPIC_LABELS[q.topic]||q.topic);});return [...set];})();
  const _topicCov=(()=>{const o={};_allTL.forEach(l=>o[l]={c:0,n:0});history.forEach(h=>{const tb=h.topic_breakdown||{};Object.keys(tb).forEach(t=>{const l=TOPIC_LABELS[t]||t;if(!o[l])o[l]={c:0,n:0};o[l].c+=tb[t].correct||0;o[l].n+=tb[t].total||0;});});return o;})();
  const _totalTopics=_allTL.length||1;
  const _coveredN=_allTL.filter(l=>_topicCov[l]&&_topicCov[l].n>0).length;
  const _coveragePct=Math.round(_coveredN/_totalTopics*100);
  const _accAll=(()=>{let c=0,n=0;Object.values(_topicCov).forEach(x=>{c+=x.c;n+=x.n;});return n>0?Math.round(c/n*100):(avgPct||0);})();
  const _lastDays=(()=>{const pp=v=>{if(!v)return null;const a=String(v).replace(/\./g,"").trim().split(/\s+/);if(a.length<3)return null;return new Date(+a[2],+a[1]-1,+a[0]);};let l=null;history.forEach(h=>{const d=pp(h.date);if(d&&(!l||d>l))l=d;});if(!l)return 999;return Math.max(0,Math.round((Date.now()-l.getTime())/86400000));})();
  const _recMult=_lastDays<=3?1:_lastDays<=7?0.97:_lastDays<=14?0.92:0.85;
  // 2.1: pokrivenost gradiva ima smisla tek kad je popis tema potpun — do tada je _allTL
  // prazan pa bi spremnost ispala lazno niska i poslije bez objasnjenja skocila. Sazetak ga
  // daje odmah; bez sazetka vrijedi stari uvjet (svi otkljucani ispiti ucitani).
  const _topicsReady=(hasSummary()||allExamsLoaded())&&_allTL.length>0;
  const _readiness=history.length===0?0:(_topicsReady?Math.min(100,Math.round((0.55*_accAll+0.45*_coveragePct)*_recMult)):null);
  const _rdReady=_readiness!=null;
  const _rdPct=_rdReady?_readiness:0;
  const _rdTxt=_rdReady?(_readiness+"%"):"…";
  const _rdHint=!_rdReady?"Računam spremnost — još učitavam gradivo…":(()=>{var parts=[];if(_coveragePct<100){var miss=_totalTopics-_coveredN;parts.push("pokrij jo\u0161 "+miss+" "+(miss===1?"temu":"tema"));}var weak=_allTL.filter(l=>_topicCov[l].n>=5).map(l=>({l:l,p:Math.round(_topicCov[l].c/_topicCov[l].n*100)})).sort((a,b)=>a.p-b.p)[0];if(weak&&weak.p<60)parts.push("digni "+weak.l+" ("+weak.p+"%)");if(!parts.length)return _readiness>=85?"Skoro pa spreman/na \u2014 samo nastavi!":"Solidno \u2014 nastavi vje\u017ebati.";return "Do 100%: "+parts.slice(0,2).join(" \u00b7 ");})();
  return e("div",{className:"home"},
    showAbout&&e(AboutModal,{onClose:()=>setShowAbout(false)}),
    showReadiness&&e("div",{onClick:()=>setShowReadiness(false),style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:0}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:"1px solid var(--bdr)",padding:"22px 20px calc(20px + env(safe-area-inset-bottom))",width:"100%",maxWidth:560,maxHeight:"86vh",overflowY:"auto",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:20}},"\uD83C\uDFAF Spremnost za maturu"),
          e("button",{onClick:()=>setShowReadiness(false),style:{background:"var(--s2)",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--muted)",fontFamily:"var(--fb)"}},"\u2715")),
        e("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:18}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:42,lineHeight:1,color:_rdPct>=75?"var(--green)":_rdPct>=50?"var(--gold)":"var(--blue)"}},_rdTxt),
          e("div",{style:{flex:1,fontSize:12,color:"var(--muted)",lineHeight:1.5}},_rdHint)),
        e("div",{style:{display:"flex",gap:8,marginBottom:18}},
          [["To\u010dnost",_accAll+"%"],["Pokrivenost",_topicsReady?(_coveredN+"/"+_totalTopics):"\u2026"],["Aktivnost",_lastDays>=999?"\u2014":(_lastDays===0?"danas":_lastDays+"d")]].map((m,i)=>
            e("div",{key:i,style:{flex:1,background:"var(--s2)",borderRadius:10,padding:"10px 8px",textAlign:"center"}},
              e("div",{style:{fontSize:16,fontWeight:800}},m[1]),
              e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2}},m[0])))),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}},"Pokrivenost gradiva"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:7}},
          !_topicsReady&&e("div",{style:{fontSize:12,color:"var(--muted)",padding:"6px 0"}},"Učitavam popis tema…"),
          _allTL.slice().sort((a,b)=>{var pa=_topicCov[a].n>0?_topicCov[a].c/_topicCov[a].n:-1;var pb=_topicCov[b].n>0?_topicCov[b].c/_topicCov[b].n:-1;return pa-pb;}).map(function(l){
            var x=_topicCov[l];var done=x.n>0;var acc=done?Math.round(x.c/x.n*100):null;
            return e("div",{key:l,style:{display:"flex",alignItems:"center",gap:10}},
              e("span",{style:{fontSize:13,width:14,textAlign:"center",flexShrink:0}},done?(acc>=70?"\u2705":acc>=40?"\uD83D\uDFE1":"\uD83D\uDD34"):"\u2014"),
              e("span",{style:{fontSize:12.5,fontWeight:600,flex:1,minWidth:0,color:done?"var(--text)":"var(--muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},l),
              done?e("div",{style:{width:80,height:6,borderRadius:99,background:"var(--bdr2)",overflow:"hidden",flexShrink:0}},e("div",{style:{height:"100%",width:acc+"%",background:acc>=70?"var(--green)":acc>=40?"var(--gold)":"var(--red)",borderRadius:99}})):e("span",{style:{fontSize:10.5,color:"var(--muted)",flexShrink:0,width:80,textAlign:"right"}},"nije po\u010deto"),
              e("span",{style:{fontSize:11,fontWeight:700,width:34,textAlign:"right",flexShrink:0,color:done?"var(--text)":"transparent"}},done?acc+"%":"\u2014"));
          }))
      )),
    achDetail&&(function(){
      var a=achDetail;var lv=achLevel(a,userData);var pc=a.prog?a.prog(userData):0;var nx=achNext(a,userData);
      var pct=nx?Math.min(100,Math.round(pc/nx*100)):100;
      return e("div",{onClick:()=>setAchDetail(null),style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
        e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid "+(lv>0?"var(--gold-b)":"var(--bdr)"),borderRadius:"var(--rr)",padding:"24px 22px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)",position:"relative"}},
          e("button",{onClick:()=>setAchDetail(null),style:{position:"absolute",top:10,right:12,background:"none",border:"none",fontSize:18,color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)"}},"✕"),
          e("div",{style:{fontSize:50,marginBottom:6,filter:lv>0?"none":"grayscale(1)",opacity:lv>0?1:.55}},a.ico),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:21,marginBottom:3,color:lv>0?"var(--gold)":"var(--text)"}},a.name),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}},lv>0?(TIER_MEDAL[lv]+" "+TIER_NAME[lv]+(lv>=a.tiers.length?" · MAX":"")):"Zaključano"),
          nx?e("div",{style:{marginBottom:16}},
            e("div",{style:{height:9,borderRadius:99,background:"var(--bdr2)",overflow:"hidden",marginBottom:7}},e("div",{style:{height:"100%",width:pct+"%",background:"var(--gold)",borderRadius:99,transition:"width .5s"}})),
            e("div",{style:{fontSize:12.5,color:"var(--muted)",fontWeight:600}},"Još "+Math.max(0,nx-pc)+" do "+TIER_MEDAL[lv+1]+" "+TIER_NAME[lv+1]+" · "+Math.min(pc,nx)+"/"+nx+" "+a.unit)
          ):e("div",{style:{marginBottom:16,fontSize:13,color:"var(--green)",fontWeight:700}},"🏆 Sve razine osvojene! ("+pc+" "+a.unit+")"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            a.tiers.map(function(t,i){var done=lv>=i+1;var isNext=lv===i;
              return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,padding:"7px 11px",borderRadius:9,background:done?"var(--gold-d)":isNext?"var(--s2)":"transparent",border:"1px solid "+(done?"var(--gold-b)":isNext?"var(--bdr2)":"var(--bdr)"),opacity:done||isNext?1:.5}},
                e("span",{style:{fontSize:17,filter:done?"none":"grayscale(1)"}},TIER_MEDAL[i+1]),
                e("span",{style:{fontSize:12.5,fontWeight:700,flex:1,textAlign:"left",color:done?"var(--text)":"var(--muted)"}},TIER_NAME[i+1]),
                e("span",{style:{fontSize:12,fontWeight:700,color:done?"var(--green)":"var(--muted)"}},done?("✓ "+t):String(t)));
            }))
        ));
    })(),

    // ── NAV ──
    e("div",{className:"nav nav-home"+(navScrolled?" nav-scrolled":"")},
      e("span",{className:"ntitle"},SUBJECT.navLabel),
      e("span",{className:"nbadge"},"Simulator mature"),
      e("span",{className:"nsp"}),
      
      e("button",{
        onClick:onGuide,
        style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",
          padding:"5px 12px",cursor:"pointer",fontSize:12,fontWeight:600,
          color:"var(--blue)",fontFamily:"var(--fb)",whiteSpace:"nowrap"}
      },"📖 Upute"),
      toggles
    ),

    // ── #8 TVOJ TRENING DANAS + #5 ODBROJAVANJE (action hub, vrh) ──
    
    
    resume&&(()=>{const ex=EXAMS[resume.key];if(!ex)return null;
      const n=examQCount(ex), ansN=Object.keys(resume.answers||{}).length;
      return e("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",marginBottom:18,
        background:"linear-gradient(135deg,var(--gold-d),var(--s1))",border:"1px solid var(--gold-b)",borderRadius:"var(--rr)"}},
        e("div",{style:{fontSize:22}},"⏸"),
        e("div",{style:{flex:1,minWidth:0}},
          e("div",{style:{fontSize:13.5,fontWeight:800,marginBottom:2}},"Nastavi ispit"),
          e("div",{style:{fontSize:11.5,color:"var(--muted)"}},
            ex.year+". - "+ex.label+" ("+(ex.razina||"")+") \u00b7 zadatak "+((resume.cur||0)+1)+"/"+n+" \u00b7 "+ansN+" odgovoreno"
            +(resume.timerS!=null?" \u00b7 \u23f1 "+Math.round(resume.timerS/60)+" min":""))),
        e("button",{onClick:onResume,className:"btn btn-gold",style:{fontSize:12.5,padding:"8px 16px",flexShrink:0}},"\u25b6 Nastavi"),
        e("button",{onClick:onDiscardResume,title:"Odbaci",style:{background:"none",border:"none",cursor:"pointer",fontSize:15,color:"var(--muted)",padding:6,flexShrink:0}},"\u2715")
      );})(),

    // ── HERO BANNER ── (samo prvi posjet; povratniku je TodayHero akcijski hub)
    e("div",{className:"hero"},e("div",{className:"hero-icon"},"∑"),e("h1",null,"Matura nije ",e("em",null,"sreća."),e("br"),"Matura je ",e("span",{className:"accent"},"priprema.")),e("p",null,"Svi ispiti državne mature 2010.–2025., A i B razina — s rješenjima korak po korak i AI profesorom.")),
      userData&&(function(){var xp=userData.xp||0,lv=getLevel(xp);var cur=XP_LEVELS[lv]||0,nx=XP_LEVELS[lv+1];var p=(nx==null)?100:Math.max(0,Math.min(100,Math.round((xp-cur)/(nx-cur)*100)));var toNext=(nx==null)?0:(nx-xp);return e("div",{style:{maxWidth:480,margin:"0 auto 30px",padding:"0 4px"}},e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}},e("div",{className:"level-badge"},"⭐ "+(LEVEL_NAMES[lv]||"Početnik")),(userData.streak||0)>0&&e("div",{className:"streak-badge"},e("span",null,"🔥"),(userData.streak||0)+" "+((userData.streak||0)===1?"dan":"dana")+" zaredom"),e("div",{style:{fontSize:12,color:"var(--muted)"}},xp+" XP")),e("div",{className:"xp-bar-wrap"},e("div",{className:"xp-bar",style:{width:p+"%"}})),e("div",{className:"xp-label"},e("span",null,"Razina "+(lv+1)),toNext>0&&e("span",null,toNext+" XP do sl. razine")));})(),
      history.length>0&&e("div",{onClick:()=>setShowReadiness(true),style:{display:"flex",alignItems:"center",gap:15,padding:"15px 17px",marginBottom:18,borderRadius:"var(--rr)",background:"var(--s1)",border:"1px solid var(--bdr)",cursor:"pointer"}},
      e("div",{style:{position:"relative",width:62,height:62,flexShrink:0}},
        e("svg",{width:62,height:62,viewBox:"0 0 36 36"},
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:"var(--bdr2)",strokeWidth:3.4}),
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:_rdPct>=75?"var(--green)":_rdPct>=50?"var(--gold)":"var(--blue)",strokeWidth:3.4,strokeDasharray:(_rdPct/100*97.4).toFixed(1)+" 97.4",strokeLinecap:"round",transform:"rotate(-90 18 18)"})),
        e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:16.5}},_rdTxt)),
      e("div",{style:{flex:1,minWidth:0}},
        e("div",{style:{fontSize:13.5,fontWeight:800,marginBottom:3}},"Spremnost za maturu"),
        e("div",{style:{fontSize:11.5,color:"var(--muted)",lineHeight:1.45}},_rdHint)),
      e("span",{style:{color:"var(--muted)",fontSize:20,flexShrink:0}},"\u203a")),
      e("div",{style:{maxWidth:480,margin:"0 auto 34px",padding:"0 4px"}},e("input",{type:"text",readOnly:true,placeholder:"🔍  Pretraži zadatke i rješenja…",onClick:onBrowse,onFocus:onBrowse,style:{width:"100%",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"12px 16px",color:"var(--muted)",fontSize:14,cursor:"pointer",boxShadow:"var(--shadow-sm)",transition:"border-color .15s,box-shadow .15s",outline:"none"},onMouseEnter:ev=>{ev.target.style.borderColor="var(--blue)";ev.target.style.boxShadow="0 0 0 3px rgba(74,144,217,.12)";},onMouseLeave:ev=>{ev.target.style.borderColor="var(--bdr)";ev.target.style.boxShadow="var(--shadow-sm)";}})),

      e(TodayHero,{userData,onStartErrorSession,onSRS,onDailyChallenge,razina,onEditRazina,onPrepareExams}),
      e("div",{className:"modes-section"},
      e("div",{className:"section-label"},"Vježba i testiranje"),

      // Primarni modovi  -  4 na vrhu
      e("div",{className:"modes"},
        e("div",{className:"mc red",onClick:onDDay},e("div",{className:"mc-ico-wrap"},"🎓"),e("h3",null,"Probna matura"),e("p",null,"Generalna proba — pun ispit pod stvarnim uvjetima, kao na maturi."),e("span",{className:"mtag"},"PROBA")),
        e("div",{className:"mc gold",onClick:()=>{var el=document.getElementById("ispiti-lista");if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}},e("div",{className:"mc-ico-wrap"},"📝"),e("h3",null,"Originalni ispiti"),e("p",null,"Riješi prave ispite državne mature — s vremenskim ograničenjem ili u vježbovnom modu."),e("span",{className:"mtag"},allExams.length+" ispita")),
        e("div",{className:"mc blue",onClick:onAdaptive},
          e("div",{className:"mc-ico-wrap"},"🎯"),
          e("h3",null,"Adaptivni trening"),
          e("p",null,"Težina se prilagođava tebi — gađa točno tvoj nivo."),
          e("span",{className:"mtag",style:{color:"var(--blue)",borderColor:"var(--blue-b)",background:"var(--blue-d)"}},"NOVO")
        ),
        e("div",{className:"mc blue",onClick:onAIPractice},e("div",{className:"mc-ico-wrap"},"✨"),e("h3",null,"AI vježba"),e("p",null,"Beskonačno novih zadataka iz tvojih tema — svaki provjeren simboličkim računalom."),e("span",{className:"mtag"},"PRO")),
        e("div",{className:"mc teal",onClick:onFilter},
          e("div",{className:"mc-ico-wrap"},"🎯"),
          e("h3",null,"Vježbaj po temi"),
          e("p",null,"Prilagođena sesija po temi, godini, razini.")
        ),
        e("div",{className:"mc purple",onClick:onMixed},
          e("div",{className:"mc-ico-wrap"},"🔀"),
          e("h3",null,"Miješane teme"),
          e("p",null,"Miješa tvoje slabije teme u jednu sesiju — interleaving za jače pamćenje."),
          e("span",{className:"mtag",style:{color:"#b97cf3",borderColor:"rgba(185,124,243,.4)",background:"rgba(185,124,243,.14)"}},"NOVO")
        ),
        e("div",{className:"mc gold",onClick:onDailyChallenge},
          e("div",{className:"mc-ico-wrap"},"⚡"),
          e("h3",null,"Dnevni izazov"),
          e("p",null,"5 pitanja svaki dan  -  izgradi naviku učenja."),
          e("span",{className:"mtag"},"DAILY")
        )),
      e("div",{className:"section-label",style:{marginTop:30}},"Ponovi i ispravi"),
      e("div",{className:"modes"},
        e("div",{className:"mc red",onClick:onErrors},
          e("div",{className:"mc-ico-wrap"},"🚨"),
          e("h3",null,"Greške"),
          e("p",null,errCount>0?errCount+" pitanja za ponavljanje":"Tu će se pojaviti tvoje greške - lakše ćeš ih pratiti i ponavljati."),
          errCount>0&&e("span",{className:"mtag",
            style:{color:"var(--red)",borderColor:"rgba(248,113,113,.3)",background:"var(--red-d)"}},
            errCount+" pit.")
        ),
        e("div",{className:"mc purple",onClick:onSRS},
          e("div",{className:"mc-ico-wrap"},"🔁"),
          e("h3",null,"Pametno ponavljanje"),
          e("p",null,"Sustav pamti što griješiš i vraća ti to pitanje kad je pravo vrijeme.")
        ),
        e("div",{className:"mc gold",onClick:onBookmarks},
          e("div",{className:"mc-ico-wrap"},"🔖"),
          e("h3",null,"Spremljena pitanja"),
          e("p",null,"Pitanja koja si spremio za kasnije ponavljanje.")
        )),
      e("div",{className:"section-label",style:{marginTop:30}},"Učenje i napredak"),
      e("div",{className:"modes"},
        e("div",{className:"mc blue",onClick:onStats},
          e("div",{className:"mc-ico-wrap"},"📊"),
          e("h3",null,"Statistika"),
          e("p",null,"Statistika, heatmap tema, predviđanje ocjene.")
        ),
        e("div",{className:"mc teal",onClick:onFlashcards},
          e("div",{className:"mc-ico-wrap"},"🃏"),
          e("h3",null,"Flashcards"),
          e("p",null,"Brzo ponavljanje formula i pojmova.")
        ),
        e("div",{className:"mc green",onClick:onFormule},
          e("div",{className:"mc-ico-wrap"},"📐"),
          e("h3",null,"Formule i tablice"),
          e("p",null,"Sve maturalne formule na jednom mjestu + igra za pamćenje."),
          e("span",{className:"mtag",style:{color:"var(--green)",borderColor:"rgba(80,200,120,.4)",background:"rgba(80,200,120,.14)"}},"NOVO · FREE")
        ),
        e("div",{className:"mc purple",onClick:onBrowse},
          e("div",{className:"mc-ico-wrap"},"🔍"),
          e("h3",null,"Pretraži"),
          e("p",null,"Sva pitanja po temi, tipu ili ključnoj riječi.")
        ))
    ),

    // ── POPIS ISPITA ──
    e("div",{className:"modes-section",id:"ispiti-lista"},
    history.length>0&&e("div",{style:{marginBottom:26}},
      e("div",{className:"section-label"},"Postignuća"+(function(){var earned=0,total=0;ACHIEVEMENTS.forEach(function(a){earned+=achLevel(a,userData);total+=a.tiers.length;});return " · "+earned+"/"+total+" razina";})()),
      e("div",{className:"trophy-grid"},
        ACHIEVEMENTS.map(a=>{
          const lv=achLevel(a,userData);const got=lv>0;const nx=achNext(a,userData);const pc=a.prog?a.prog(userData):0;const pr=nx?{cur:pc,tgt:nx}:null;return e("div",{key:a.id,onClick:()=>setAchDetail(a),style:{
            textAlign:"center",padding:"12px 6px 10px",borderRadius:"var(--r)",
            background:got?"var(--s1)":"var(--s2)",border:"1px solid "+(got?"var(--gold-b)":"var(--bdr)"),
            opacity:got?1:.62,cursor:"pointer",position:"relative",transition:"all .15s"}},
            e("span",{style:{position:"absolute",top:5,right:7,fontSize:11}},got?TIER_MEDAL[lv]:"\uD83D\uDD12"),
            e("div",{style:{fontSize:22,marginBottom:4,filter:got?"none":"grayscale(1)",opacity:got?1:.8}},a.ico),
            e("div",{style:{fontSize:9.5,fontWeight:700,lineHeight:1.25,color:got?"var(--text)":"var(--muted)"}},a.name),pr&&pr.tgt>1&&e("div",{style:{marginTop:6}},e("div",{style:{height:4,borderRadius:99,background:"var(--bdr2)",overflow:"hidden"}},e("div",{style:{height:"100%",width:Math.min(100,Math.round(pr.cur/pr.tgt*100))+"%",background:"var(--gold)",borderRadius:99}})),e("div",{style:{fontSize:8.5,fontWeight:700,color:"var(--muted)",marginTop:2}},Math.min(pr.cur,pr.tgt)+"/"+pr.tgt)));
        }))),
      e("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:6,marginTop:12,marginBottom:4,fontSize:11,color:"var(--muted)"}},
        e("span",null,"\uD83D\uDCBE Sigurnosna kopija:"),
        e("button",{onClick:()=>{try{
            const keys=["mat_sim_v1","mat_bookmarks","mat_razina","mat_target_grade","mat_dark","mat_sound","mat_resume"];
            const data={_app:SUBJECT.appId,_v:1,_ts:new Date().toISOString()};
            keys.forEach(k=>{const v=DS.get(k);if(v!=null&&v!=="")data[k]=v;});
            const blob=new Blob([JSON.stringify(data,null,1)],{type:"application/json"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);
            a.download="discere_backup_"+new Date().toISOString().slice(0,10)+".json";
            document.body.appendChild(a);a.click();a.remove();
          }catch(e2){setIoMsg({t:"Izvoz nije uspio. Pokušaj ponovo.",bad:true});}},
          className:"pill"},"\u2b07 Izvezi"),
        e("button",{onClick:()=>{const inp=document.getElementById("ds-import-inp");if(inp)inp.click();},
          className:"pill"},"\u2b06 Uvezi"),
        e("input",{id:"ds-import-inp",type:"file",accept:"application/json,.json",style:{display:"none"},
          onChange:ev=>{const file=ev.target.files&&ev.target.files[0];if(!file)return;
            const rd=new FileReader();
            rd.onload=()=>{try{
                const data=JSON.parse(rd.result);
                if(!data||data._app!==SUBJECT.appId||!data.mat_sim_v1) throw new Error("bad");
                if(!window.confirm("Uvoz zamjenjuje sav trenutni napredak ovom kopijom. Nastaviti?")) return;
                DS.set("mat_import_pending",JSON.stringify(data));
                window.location.reload();
              }catch(e3){setIoMsg({t:"Datoteka nije valjana Discere kopija.",bad:true});}
              finally{ev.target.value="";}};
            rd.readAsText(file);}}),
        ioMsg&&e("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:200,
          background:ioMsg.bad?"var(--red-d)":"var(--green-d)",border:"1px solid "+(ioMsg.bad?"rgba(248,113,113,.4)":"rgba(61,214,140,.4)"),
          color:ioMsg.bad?"var(--red)":"var(--green)",fontSize:12.5,fontWeight:700,padding:"10px 18px",borderRadius:99,
          boxShadow:"var(--shadow)",animation:"mcIn .3s both",maxWidth:"90vw",textAlign:"center"}},ioMsg.t)
      ),
      e("div",{className:"section-label"},"Svi ispiti  -  2010. – 2025."),
      e("div",{className:"exams-grid"},
        years.map(year=>{
          const isOpen=openYear===year;
          const yearExams=Object.values(byYear[year]).flat();
          const done=yearExams.filter(ex=>history.find(h=>h.examKey===ex.key)).length;
          const total=yearExams.filter(exOpen).length;

          return e("div",{key:year,className:"year-card"+(isOpen?" open":"")},
            e("div",{className:"year-card-hdr",onClick:()=>toggleYear(year)},
              e("span",{className:"year-num"},year),
              e("div",{className:"year-meta"},
                e("div",{className:"year-pips"},
                  yearExams.filter(exOpen).map(ex=>
                    e("span",{key:ex.key,className:"ypip"+(history.find(h=>h.examKey===ex.key)?" done":"")}))),
                e("span",{className:"year-meta-sub"},
                  (done>0?done+"/"+total+" riješeno · ":total+" ispita · ")+
                  (byYear[year].A.length>0?"A i ":"")+
                  (byYear[year].B.length>0?"B razina":"razina")
                )
              ),
              e("div",{className:"year-razina-badges"},
                byYear[year].A.length>0&&e("span",{className:"ybadge-a"},"A"),
                byYear[year].B.length>0&&e("span",{className:"ybadge-b"},"B")
              ),
              e("span",{className:"year-arrow"},"▾")
            ),
            isOpen&&e("div",{className:"year-card-body"},
              (razina==="B"?["B","A"]:["A","B"]).map(rz=>{
                const exList=byYear[year][rz];
                if(!exList||exList.length===0) return null;
                const sorted=[...exList].sort((a,b)=>(seasonOrder[a.season]??9)-(seasonOrder[b.season]??9));
                const isA=rz==="A";
                const mine=razina&&rz===razina;
                return e("div",{key:rz},
                  e("div",{className:"razina-label",
                    style:{color:isA?"var(--blue)":"var(--teal)",display:"flex",alignItems:"center",gap:7}},
                    isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)",
                    mine&&e("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:".04em",padding:"2px 7px",borderRadius:99,background:isA?"var(--blue-d)":"var(--teal-d)",border:"1px solid "+(isA?"var(--blue-b)":"rgba(52,209,191,.3)"),textTransform:"uppercase"}},"tvoja razina")),
                  sorted.map(ex=>{
                    const h=history.find(x=>x.examKey===ex.key);
                    // Zakljucan ispit uz besplatan ispitni mod: kartica se otvara (ModeSelect),
                    // ali su ondje vjezbanje i timed vjezba pod katancem.
                    const freeExamOnly=ex.locked&&isFreeExam();
                    const locked=ex.locked&&!isFreeExam();
                    return e("div",{key:ex.key,className:"exam-btn",
                      title:locked?standardCta():undefined,
                      onClick:locked?()=>askUpgrade("mat-practice","standard"):()=>onExam(ex.key),
                      style:{opacity:locked?.55:1,cursor:"pointer",
                        borderLeft:h?"3px solid var(--green)":undefined}},
                      e("span",{className:"exam-btn-ico"},
                        ex.season==="ljeto"?"☀️":ex.season==="jesen"?"🍂":"❄️"),
                      e("div",{className:"exam-btn-info"},
                        e("strong",null,ex.season==="ljeto"?"Ljetni rok":ex.season==="jesen"?"Jesenski rok":"Zimski rok"),
                        e("span",null,locked?standardCta():examQCount(ex)+" zad. · "+Math.floor(ex.duration/60)+" min")
                      ),
                      locked
                        ?e("span",{style:{fontSize:10,fontWeight:800,color:"var(--gold)",background:"var(--gold-d)",padding:"2px 8px",borderRadius:99,border:"1px solid var(--gold-b)"}},"🔒 Otključaj")
                        :h
                          ?e("div",{className:"exam-btn-score"},
                            e("div",{className:"pct",style:{color:GC[h.grade]||"var(--muted)"}},h.pct+"%"),
                            e("div",{className:"dt"},h.date))
                          :freeExamOnly
                            ?e("span",{style:{fontSize:10,fontWeight:800,color:"var(--green)",background:"var(--green-d)",padding:"2px 8px",borderRadius:99,border:"1px solid var(--green-b)",whiteSpace:"nowrap"}},"🎓 Ispit besplatno")
                            :e("span",{style:{fontSize:16,color:"var(--muted)"}},">")
                    );
                  })
                );
              })
            )
          );
        })
      )
    ),

    // ── FOOTER ──
    e("div",{style:{marginTop:40,paddingTop:22,borderTop:"1px solid var(--bdr)",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16}},e("div",{style:{display:"flex",flexDirection:"column",gap:10,flex:1,minWidth:220}},e("span",{style:{fontSize:11.5,color:"var(--muted)",lineHeight:1.65,maxWidth:580}},"Ispitna pitanja vlasništvo su NCVVO-a. Objašnjenja, AI ocjenjivanje i svi analitički alati autorsko su djelo Discerea."),e("button",{onClick:()=>setShowAbout(true),style:{background:"none",border:"none",padding:0,cursor:"pointer",color:"var(--muted)",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",textAlign:"left",alignSelf:"flex-start",transition:"color .15s"},onMouseEnter:ev=>ev.currentTarget.style.color="var(--text)",onMouseLeave:ev=>ev.currentTarget.style.color="var(--muted)"},"Više o aplikaciji →")),e("button",{onClick:onGuide,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,padding:"9px 16px",cursor:"pointer",fontSize:12,fontWeight:600,color:"var(--text)",fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0,boxShadow:"var(--shadow-sm)",transition:"border-color .15s"},onMouseEnter:ev=>ev.currentTarget.style.borderColor="var(--bdr2)",onMouseLeave:ev=>ev.currentTarget.style.borderColor="var(--bdr)"},"📖 Upute za korištenje"))
  );
}
export { Home };
