// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Ekrani dana: hero na naslovnici, izazov dana i dnevni sazetak. */
import React from 'react';
import { DS, TOPIC_LABELS } from '../core/state';
import { EXAMS, allExamsLoaded, hasSummary, isExamLoaded, nextMatura, summaryQuestions } from '../core/exams';
import { renderOptContent, renderQText } from '../core/mathText';
import { LL } from '../core/ui';
import { calcXpGain, grade, updateStreak } from '../core/progress';
import { CountUp } from '../viz/charts';
import { getSrsDueCards, srsLoad } from './srs';
const{createElement:e,useState,Fragment}=React;
function TodayHero({userData,onStartErrorSession,onSRS,onDailyChallenge,razina,onEditRazina,onPrepareExams}){
  const history=userData.history||[];
  const et=userData.errorTracker||{};
  const labelOf=t=>TOPIC_LABELS[t]||t;
  const[tgGoal,setTgGoal]=React.useState(()=>{try{return parseInt(DS.get("mat_target_grade"))||null}catch{return null}});
  const[goalEdit,setGoalEdit]=React.useState(false);
  function setHomeGoal(g){try{DS.set("mat_target_grade",String(g))}catch(e){}setTgGoal(g);setGoalEdit(false);}

  // Slabe teme: prvo po broju grešaka, pa po niskoj točnosti (topic_breakdown)
  const errByLabel={};
  Object.values(et).forEach(x=>{ if(x&&x.count>0){ const l=labelOf(x.topic); errByLabel[l]=(errByLabel[l]||0)+x.count; } });
  const accAgg={};
  history.forEach(h=>{ const tb=h.topic_breakdown||{}; Object.keys(tb).forEach(t=>{ const l=labelOf(t); if(!accAgg[l])accAgg[l]={c:0,t:0}; accAgg[l].c+=tb[t].correct||0; accAgg[l].t+=tb[t].total||0; }); });
  const ranked=[];
  Object.keys(errByLabel).sort((a,b)=>errByLabel[b]-errByLabel[a]).forEach(l=>ranked.push(l));
  Object.keys(accAgg).filter(l=>accAgg[l].t>=3 && (accAgg[l].c/accAgg[l].t)<0.7 && ranked.indexOf(l)<0)
    .sort((a,b)=>(accAgg[a].c/accAgg[a].t)-(accAgg[b].c/accAgg[b].t)).forEach(l=>ranked.push(l));
  const targetLabels=ranked.slice(0,3);
  const hasTargets=targetLabels.length>0;

  let srsDue=0; try{ srsDue=getSrsDueCards(srsLoad()).length; }catch(e){}

  // Adaptivni skup (mc+sa) iz ciljnih tema, balansiran.
  // Bazen se racuna iz meta-sazetka (summary.json) — Home tako ne dohvaca nijedan ispit.
  // Elementi su meta-zapisi (id/topic/type), a ne pitanja; stvarna pitanja se uzimaju tek
  // na klik, u _materialize, iz ispita koji su do tada ucitani.
  function buildPool(){
    const out=[];
    summaryQuestions().forEach(q=>{
      if(razina && q.razina!==razina) return;
      if(q.type!=="mc"&&q.type!=="sa") return;
      const l=labelOf(q.topic);
      if(!hasTargets || targetLabels.indexOf(l)>=0) out.push({...q,_examKey:q.examKey,_label:l});
    });
    return out;
  }
  const pool=buildPool();
  function pickBalanced(arr,labels,n){
    if(!labels.length) return [...arr].sort(()=>Math.random()-.5).slice(0,n);
    const byL={}; labels.forEach(l=>byL[l]=[]);
    arr.forEach(q=>{ if(byL[q._label]) byL[q._label].push(q); });
    labels.forEach(l=>byL[l].sort(()=>Math.random()-.5));
    const out=[]; let i=0, guard=0;
    while(out.length<n && guard<n*labels.length+labels.length){
      const l=labels[i%labels.length]; const idx=Math.floor(i/labels.length);
      if(byL[l] && byL[l][idx]) out.push(byL[l][idx]);
      i++; guard++;
    }
    return out.slice(0,n);
  }
  const trainCount=hasTargets?12:10;
  const session=pickBalanced(pool,targetLabels,trainCount);
  // Bazen je poznat cim stigne sazetak (ili su ispiti vec ucitani), pa gumb odmah pokazuje
  // tocan broj pitanja; bez oboga ne laze s "0 pitanja" nego pise da priprema zadatke.
  const examsReady=hasSummary()||allExamsLoaded();

  function _launchTraining(qs){
    if(!qs||!qs.length||!onStartErrorSession) return;
    onStartErrorSession({key:"errors_session",year:"Trening",season:"session",razina:razina||"B",
      label:"Trening dana", qs:[...qs], duration:qs.length*120});
  }
  // Meta-izbor → stvarna pitanja iz ucitanih ispita (isti oblik kao prije: pitanje + _examKey/_label).
  function _materialize(picks){
    const out=[];
    (picks||[]).forEach(p=>{
      const ex=EXAMS[p._examKey];
      const q=ex&&ex.qs?ex.qs.find(x=>String(x.id)===String(p.id)):null;
      if(q) out.push({...q,_examKey:p._examKey,_label:p._label});
    });
    return out;
  }
  function startTraining(){
    // Izbor se radi na klik (ne iz rendera), pa se ucitavaju samo ispiti iz kojih su
    // izabrana pitanja — tipicno par chunkova umjesto cijele banke.
    const picks=pickBalanced(buildPool(),targetLabels,trainCount);
    if(!picks.length){
      // Nema ni sazetka ni ucitanih ispita — jedini izlaz je klasicno ucitavanje.
      if(!examsReady&&onPrepareExams) onPrepareExams(null,function(){ _launchTraining(_materialize(pickBalanced(buildPool(),targetLabels,trainCount))); });
      return;
    }
    const need=[...new Set(picks.map(p=>p._examKey))].filter(k=>!isExamLoaded(k));
    if(need.length){
      if(onPrepareExams) onPrepareExams(need,function(){ _launchTraining(_materialize(picks)); });
      return;
    }
    _launchTraining(_materialize(picks));
  }

  const mat=nextMatura(); const days=mat.days;
  const topicData=targetLabels.map(l=>{
    const a=accAgg[l];
    const acc=(a&&a.t>0)?Math.round(a.c/a.t*100):null;
    return {label:l, acc, errs:errByLabel[l]||0};
  });
  function sevOf(acc){return acc==null?"sev-red":acc<40?"sev-red":acc<70?"sev-gold":"sev-green";}

  return e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:18,padding:"18px 20px",marginBottom:34,boxShadow:"var(--shadow-sm)",position:"relative",overflow:"hidden"}},e("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:"linear-gradient(180deg,var(--blue),var(--blue-2))"}}),e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,marginBottom:4}},e("div",null,e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)",marginBottom:5}},"🎯 Trening dana"),e("div",{style:{fontFamily:"var(--fh)",fontSize:21,color:"var(--text)",lineHeight:1.15}}, hasTargets?"Fokus na slabe točke":"Zagrij se za maturu")),e("div",{style:{textAlign:"right",flexShrink:0,paddingLeft:8}},e("div",{style:{fontSize:19,fontWeight:800,fontFamily:"var(--fh)",color:days<=14?"var(--red)":"var(--blue)",lineHeight:1}}, mat.today?"DANAS":days),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3,maxWidth:92}}, mat.today?"matura — sretno!":(days===1?"dan do mature":"dana do mature")))),e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5,margin:"8px 0 15px"}}, hasTargets?"Sustav je posložio pitanja iz tvojih slabijih tema — vježbaj baš gdje gubiš bodove.":"Kreni s miješanim pitanjima kroz gradivo — sustav slaže plan čim vidi gdje griješiš."),(function(){var TH={5:85,4:70,3:55,2:40};var avg=history.length?Math.round(history.reduce(function(a,h){return a+h.pct;},0)/history.length):null;if(!tgGoal||goalEdit){return e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"}},e("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:600}},"Ciljam ocjenu:"),[3,4,5].map(function(g){return e("button",{key:g,onClick:function(){setHomeGoal(g);},style:{minWidth:40,padding:"6px 12px",borderRadius:9,border:"1px solid var(--bdr)",background:"var(--s2)",color:"var(--text)",fontSize:14,fontWeight:700,cursor:"pointer"}},g);}));}var th=TH[tgGoal],cur=avg||0,reached=cur>=th,p=Math.min(100,Math.round(cur/Math.max(1,th)*100));return e("div",{style:{marginBottom:16}},e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},e("span",{style:{fontSize:12,fontWeight:700,color:"var(--text)"}},"Cilj: ocjena "+tgGoal+" (≥"+th+"%)"),e("button",{onClick:function(){setGoalEdit(true);},style:{background:"none",border:"none",color:"var(--blue)",fontSize:11,fontWeight:600,cursor:"pointer",padding:0}},"promijeni")),e("div",{style:{height:6,borderRadius:99,background:"var(--s3)",overflow:"hidden"}}, e("div",{style:{height:"100%",width:p+"%",borderRadius:99,background:reached?"var(--green)":"linear-gradient(90deg,var(--blue),#7b9fff)",transition:"width .6s ease"}})),avg!=null&&e("div",{style:{fontSize:11,color:reached?"var(--green)":"var(--muted)",marginTop:6}}, reached?"Prosjek ti je iznad cilja 🎉":("Prosjek "+cur+"% · još "+(th-cur)+"% do cilja")));})(),e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"}},e("button",{onClick:startTraining,className:"shimmer-btn",style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--blue)",color:"#fff",border:"none",borderRadius:11,padding:"11px 18px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"🎯 Započni trening",e("span",{style:{opacity:.85,fontWeight:600,fontSize:13}},examsReady?(" · "+session.length+" pitanja"):" · pripremam zadatke…"),e("span",{style:{marginLeft:1,fontSize:15}},"→")),onEditRazina&&e("button",{onClick:onEditRazina,style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,fontWeight:600,cursor:"pointer"}}, "Razina "+(razina||"?")+" · promijeni")));
}
function getDailyChallengeQuestions(){
  const today=new Date();
  const seed=today.getFullYear()*10000+(today.getMonth()+1)*100+today.getDate();
  function seededRand(s){let x=Math.sin(s)*10000;return x-Math.floor(x);}

  // Uzmi sve MC zadatke s exp poljem iz svih ispita
  const pool=[];
  Object.values(EXAMS).forEach(exam=>{
    exam.qs.forEach(q=>{
      if(q.type==="mc"&&q.sol?.cl&&(q.exp||(q.why&&q.why.length))) pool.push({...q,_examKey:exam.key});
    });
  });

  // Fisher-Yates s determinističkim seedom  -  svaki dan ista 5 pitanja
  const arr=[...pool];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(seededRand(seed+i)*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr.slice(0,5).map((q,i)=>({...q,_uid:q._examKey+"__"+q.id+"__"+i}));
}
function DailyChallengeScreen({onBack,userData,onUpdateUserData}){
  const today=new Date().toLocaleDateString("hr");
  const qs=React.useMemo(()=>getDailyChallengeQuestions(),[]);
  const[cur,setCur]=useState(0);
  const[answers,setAnswers]=useState({});
  const[submitted,setSubmitted]=useState(false);
  const[xpGained,setXpGained]=useState(0);
  const[showMissing,setShowMissing]=useState(false);

  const todayKey="dc_"+today.replace(/\./g,"").replace(/ /g,"");
  const alreadyDone=userData?.history?.some(h=>h.examKey===todayKey);

  function selectAnswer(uid,letter){
    if(submitted) return;
    setAnswers(a=>({...a,[uid]:letter}));
  }

  function submit(){
    const missing=qs.length-Object.keys(answers).length;
    if(missing>0){ setShowMissing(true); return; }
    setSubmitted(true);
    const cor=qs.filter(q=>answers[q._uid]===q.sol.cl).length;
    const pct=Math.round(cor/qs.length*100);
    const gained=calcXpGain(pct,qs.length);
    setXpGained(gained);
    window._playSound&&window._playSound(pct>=80?"done":"click");
    if(onUpdateUserData){
      onUpdateUserData(prev=>{
        const streaked=updateStreak(prev);
        const errorTracker={...(prev.errorTracker||{})};
        const topic_breakdown={};
        qs.forEach(q=>{
          const t=q.topic||"ostalo";
          if(!topic_breakdown[t]) topic_breakdown[t]={correct:0,total:0};
          topic_breakdown[t].total++;
          const ok=answers[q._uid]===q.sol.cl;
          if(ok) topic_breakdown[t].correct++;
          const ekey=(q._examKey||"dc")+"__"+q.id;
          if(!ok){
            const ex=errorTracker[ekey]||{count:0,q:(q.q||"").slice(0,80),topic:t,examKey:q._examKey,qid:q.id,type:"mc"};
            errorTracker[ekey]={...ex,count:ex.count+1,lastDate:today};
          } else if(errorTracker[ekey]){
            errorTracker[ekey]={...errorTracker[ekey],count:Math.max(0,errorTracker[ekey].count-1)};
            if(errorTracker[ekey].count===0) delete errorTracker[ekey];
          }
        });
        const newHistory=[...(prev.history||[]),{
          examLabel:"Dnevni izazov "+today, examKey:todayKey,
          date:today,pct, grade:pct>=80?5:pct>=60?4:pct>=40?3:2,
          cor,total:qs.length,mode:"vježbanje",topic_breakdown
        }];
        return {...streaked, xp:(prev.xp||0)+gained, history:newHistory, errorTracker, totalExams:(prev.totalExams||0)+1};
      });
    }
  }

  // Već riješen danas
  if(alreadyDone&&!submitted){
    const entry=userData.history.find(h=>h.examKey===todayKey);
    const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);
    const ttl=tomorrow-new Date();
    const hrs=Math.floor(ttl/3600000);
    const mins=Math.floor((ttl%3600000)/60000);
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"⚡ Dnevni izazov")
      ),
      e("div",{style:{maxWidth:500,margin:"0 auto",padding:"60px 20px",textAlign:"center"}},
        e("div",{style:{fontSize:52,marginBottom:16}},entry?.pct>=80?"🏆":entry?.pct>=60?"✅":"💪"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:28,marginBottom:4}},entry?.cor+"/"+entry?.total+" točnih"),
        e("div",{style:{fontSize:18,fontWeight:700,color:"var(--gold)",marginBottom:20}},entry?.pct+"%"),
        e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:8}},"Dnevni izazov za ",e("strong",null,today)," je gotov! 🎉"),
        e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:24}},"Novi izazov za "+hrs+"h "+mins+"min"),
        e("button",{className:"btn btn-g",style:{padding:"10px 24px"},onClick:onBack},"← Natrag")
      )
    );
  }

  const q=qs[cur];
  const allAnswered=Object.keys(answers).length===qs.length;

  // Rezultati nakon predaje
  if(submitted){
    const cor=qs.filter(q=>answers[q._uid]===q.sol.cl).length;
    const pct=Math.round(cor/qs.length*100);
    const gc=pct===100?"var(--green)":pct>=80?"var(--green)":pct>=60?"var(--gold)":"var(--red)";
    const emoji=pct===100?"🏆":pct>=80?"✅":pct>=60?"💪":"📚";
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"⚡ Dnevni izazov - Rezultat")
      ),
      e("div",{style:{maxWidth:600,margin:"0 auto",padding:"24px 20px 60px"}},

        // Hero rezultata
        e("div",{style:{
          borderRadius:18,padding:"28px 24px",marginBottom:24,textAlign:"center",
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
          position:"relative",overflow:"hidden"
        }},
          e("div",{style:{position:"absolute",right:-8,bottom:-20,fontSize:100,
            fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
          e("div",{style:{fontSize:44,marginBottom:8}},emoji),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:42,color:"#fff",lineHeight:1,marginBottom:6}},pct+"%"),
          e("div",{style:{fontSize:14,color:"rgba(255,255,255,.7)",marginBottom:4}},
            cor+" od "+qs.length+" točnih · "+today),
          xpGained>0&&e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:8,flexWrap:"wrap"}},
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(232,197,71,.2)",border:"1px solid rgba(232,197,71,.4)",color:"#fcd34d"}},"+"+xpGained+" XP"),
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff"}},"🔥 "+(userData?.streak||0)+" dana")
          ),
          e("div",{style:{
            display:"inline-block",marginTop:8,
            fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:99,
            background:pct>=80?"rgba(61,214,140,.2)":pct>=60?"rgba(232,197,71,.2)":"rgba(248,113,113,.2)",
            border:"1px solid "+(pct>=80?"rgba(61,214,140,.4)":pct>=60?"rgba(232,197,71,.4)":"rgba(248,113,113,.4)"),
            color:pct>=80?"#6ee7a0":pct>=60?"#fcd34d":"#fca5a5"
          }},pct>=80?"Odličan rezultat!":pct>=60?"Dobar rezultat":"Ima prostora za napredak")
        ),

        // Sekcija label
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Pregled pitanja"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),

        // Pitanja
        e("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:24}},
          qs.map((q,i)=>{
            const userAns=answers[q._uid];
            const correct=q.sol.cl;
            const ok=userAns===correct;
            const borderCol=ok?"rgba(61,214,140,.3)":"rgba(248,113,113,.3)";
            const bgCol=ok?"rgba(61,214,140,.04)":"rgba(248,113,113,.04)";

            return e("div",{key:i,style:{
              background:"var(--s1)",
              border:"1px solid "+borderCol,
              borderLeft:"3px solid "+(ok?"var(--green)":"var(--red)"),
              borderRadius:"0 14px 14px 0",
              overflow:"hidden"
            }},
              // Header pitanja
              e("div",{style:{padding:"14px 16px",background:bgCol}},
                e("div",{style:{display:"flex",gap:10,alignItems:"center",marginBottom:10}},
                  e("div",{style:{
                    width:28,height:28,borderRadius:8,flexShrink:0,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    background:ok?"var(--green-d)":"var(--red-d)",
                    fontSize:14,fontWeight:800,
                    color:ok?"var(--green)":"var(--red)"
                  }},ok?"✓":"✗"),
                  e("div",{style:{flex:1}},
                    e("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}},
                      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--muted)"}},
                        (i+1)+". zadatak"),
                      e("span",{className:"topic-tag",style:{fontSize:10}},
                        TOPIC_LABELS[q.topic]||q.topic)
                    )
                  )
                ),
                e("div",{style:{fontSize:14,lineHeight:1.65,fontWeight:500}},renderQText(q.q))
              ),

              // Opcije
              e("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:6}},
                q.opts.map((opt,oi)=>{
                  const letter=LL[oi];
                  const isUser=userAns===letter;
                  const isCorrect=correct===letter;
                  let bg="var(--s2)";
                  let border="var(--bdr)";
                  let col="var(--muted)";
                  let badge=null;
                  if(isCorrect){bg="var(--green-d)";border="rgba(61,214,140,.4)";col="var(--green)";badge="✓ Točno";}
                  if(isUser&&!ok){bg="var(--red-d)";border="rgba(248,113,113,.4)";col="var(--red)";badge="✗ Tvoj odgovor";}
                  if(isUser&&ok){badge="✓ Točno";}
                  return e("div",{key:oi,style:{
                    display:"flex",alignItems:"center",gap:10,
                    padding:"8px 12px",borderRadius:9,
                    background:bg,border:"1px solid "+border
                  }},
                    e("div",{style:{
                      width:24,height:24,borderRadius:6,flexShrink:0,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:11,fontWeight:700,color:col,
                      background:"rgba(255,255,255,.06)"
                    }},letter),
                    e("div",{style:{flex:1,fontSize:13,color:isCorrect||isUser?"var(--text)":"var(--muted)",lineHeight:1.4}},renderOptContent(opt)),
                    badge&&e("span",{style:{
                      fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,flexShrink:0,
                      background:isCorrect?"var(--green-d)":"var(--red-d)",
                      color:isCorrect?"var(--green)":"var(--red)",
                      border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"rgba(248,113,113,.3)")
                    }},badge)
                  );
                })
              ),

              // Objašnjenje — uvijek ako postoji, istaknuto za krive
              (q.exp||(Array.isArray(q.why)&&q.why.length))&&e("div",{style:{
                margin:"0 16px 14px",padding:"10px 14px",borderRadius:10,
                background:ok?"rgba(74,144,217,.06)":"rgba(232,197,71,.08)",
                border:"1px solid "+(ok?"rgba(74,144,217,.15)":"rgba(232,197,71,.2)")
              }},
                e("div",{style:{fontSize:11,fontWeight:700,color:ok?"var(--blue)":"var(--gold)",
                  marginBottom:4,letterSpacing:".04em"}},"💡 Objašnjenje"),
                e("div",{style:{fontSize:13,color:"var(--text)",lineHeight:1.65}},q.exp||(Array.isArray(q.why)?q.why[0]:q.why))
              )
            );
          })
        ),

        // Natrag gumb
        e("button",{className:"btn btn-blue",style:{width:"100%",padding:"12px",fontSize:14},
          onClick:onBack},"← Natrag na početak")
      )
    );
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"⚡ Dnevni izazov"),
      e("span",{style:{fontSize:12,color:"var(--muted)"}},today)
    ),
    e("div",{style:{maxWidth:560,margin:"0 auto",padding:"24px 20px 60px"}},
      // Progress dots
      e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginBottom:24}},
        qs.map((_,i)=>{
          const answered=answers[qs[i]._uid];
          const isCur=i===cur;
          return e("div",{key:i,style:{
            width:10,height:10,borderRadius:"50%",cursor:"pointer",transition:"all .2s",
            background:answered?"var(--gold)":isCur?"var(--blue)":"var(--s3)",
            border:isCur?"2px solid var(--blue)":"2px solid transparent"
          },onClick:()=>setCur(i)});
        })
      ),
      e("div",{style:{fontSize:11,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".08em",marginBottom:6,display:"flex",alignItems:"center",gap:10,opacity:.85}},
        e("span",{style:{width:3,height:14,background:"var(--gold)",borderRadius:2,display:"inline-block"}}),
        e("span",null,"Zadatak "+(cur+1)+" od "+qs.length+" · "+(TOPIC_LABELS[q.topic]||q.topic)),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),
      e("div",{className:"qcard",style:{marginBottom:16}},
        e("div",{className:"qtext"},renderQText(q.q))
      ),
      e("div",{className:"opts",style:{marginBottom:20}},
        q.opts.map((opt,i)=>{
          const letter=String.fromCharCode(65+i);
          const sel=answers[q._uid]===letter;
          let cls="opt"+(sel?" sel":"");
          return e("div",{key:i,className:cls,onClick:()=>selectAnswer(q._uid,letter)},
            e("div",{className:"optl"},letter),
            e("div",{className:"optt"},renderOptContent(opt))
          );
        })
      ),
      e("div",{style:{display:"flex",gap:10}},
        cur>0&&e("button",{className:"btn btn-g",onClick:()=>setCur(c=>c-1)},"← Prethodno"),
        cur<qs.length-1&&e("button",{
          className:"btn btn-blue",style:{marginLeft:"auto"},
          onClick:()=>setCur(c=>c+1),disabled:!answers[q._uid]
        },"Sljedeći →"),
        cur===qs.length-1&&e("button",{
          className:"btn btn-gold",
          style:{marginLeft:"auto",opacity:allAnswered?1:.5,cursor:allAnswered?"pointer":"not-allowed"},
          onClick:submit
        },"Predaj ✓ "+(allAnswered?"":"("+( qs.length-Object.keys(answers).length)+" ostalo)"))
      ),
      showMissing&&!allAnswered&&e("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:600,color:"var(--red)",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.25)",borderRadius:8,padding:"8px 12px",marginTop:10}},
        "Odgovori na svih "+qs.length+" pitanja prije predaje ("+(qs.length-Object.keys(answers).length)+" preostalo)"),
      !allAnswered&&cur===qs.length-1&&e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",marginTop:8}},
        "Odgovori na sva pitanja da predaš izazov")
    )
  );
}
function DailySummary({userData,onWrapped,onSetGoal}){
  const history=userData.history||[];
  const today=new Date().toLocaleDateString("hr");
  const todayExams=history.filter(h=>h.date===today);
  const hour=new Date().getHours();
  const greeting=hour<12?"Dobro jutro":hour<18?"Dobar dan":"Dobra večer";

  function estimateTime(h){
    // qTimes su sekunde po pitanju  -  sumiramo i pretvaramo u minute
    if(h.qTimes&&Object.keys(h.qTimes).length>0){
      const totalSec=Object.values(h.qTimes).reduce((s,x)=>s+(x||0),0);
      if(totalSec>=60) return Math.round(totalSec/60); // bar 1 min zabilježeno
    }
    // Fallback: za simulaciju koristimo stvarno trajanje ispita ako znamo examKey
    if(h.examMode||h.mode==="simulacija"){
      const ex=EXAMS[h.examKey];
      if(ex?.duration) return Math.round(ex.duration/60); // 150 ili 180 min
      return 150;
    }
    // Vježbanje  -  gruba procjena ~1.5 min po zadatku
    if(h.total) return Math.min(90, Math.round(h.total*1.5));
    return 35;
  }
  function fmtMins(m){if(m===0)return "0 min";if(m<60)return m+" min";return Math.floor(m/60)+"h "+(m%60>0?m%60+"min":"");}

  const todayMinutes=todayExams.reduce((s,h)=>s+estimateTime(h),0);
  const last7=Array.from({length:7},(_,i)=>{
    const d=new Date(Date.now()-(6-i)*86400000).toLocaleDateString("hr");
    const dayExams=history.filter(h=>h.date===d);
    const mins=dayExams.reduce((s,h)=>s+estimateTime(h),0);
    const label=["Ned","Pon","Uto","Sri","Čet","Pet","Sub"][new Date(Date.now()-(6-i)*86400000).getDay()];
    return {d,hasExam:dayExams.length>0,isToday:d===today,mins,label,exams:dayExams.length};
  });
  const weekMinutes=last7.reduce((s,d)=>s+d.mins,0);
  const maxMins=Math.max(...last7.map(d=>d.mins),1);

  if(history.length===0) return null;

  return e("div",{className:"daily-card"},
    e("div",{className:"daily-head"},
      e("div",null,
        e("div",{className:"daily-greeting"},greeting+" 👋"),
        e("div",{className:"daily-sub"},
          todayExams.length===0
            ?"Nisi još danas vježbao/la. Hoćeš li riješiti zadatak?"
            :"Danas si riješio/la "+todayExams.length+" ispit"+(todayExams.length>1?"a":"")+(todayMinutes>0?" · "+fmtMins(todayMinutes)+" učenja":".")
        )
      ),
      e("div",{style:{display:"flex",gap:6,flexShrink:0,alignItems:"center"}},
        todayExams.length>0&&e("span",{className:"daily-today-chip"},"✅ "+todayExams.length+" danas"),
        onWrapped&&e("button",{onClick:onWrapped,className:"pill pill-blue"},"\uD83D\uDCCA Mjesec"))
    ),
    e("div",{className:"daily-stats"},
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico xp"},"⭐"),
        e("div",{className:"daily-stat-val",style:{color:"var(--gold)"}},e(CountUp,{to:userData.xp||0,duration:800})),
        e("div",{className:"daily-stat-lbl"},"Ukupni XP")
      ),
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico ex"},"📘"),
        e("div",{className:"daily-stat-val",style:{color:"var(--green)"}},e(CountUp,{to:history.length,duration:650})),
        e("div",{className:"daily-stat-lbl"},"Ispita riješeno")
      ),
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico st"},"🔥"),
        e("div",{className:"daily-stat-val",style:{color:"#f97316"}},e(CountUp,{to:userData.streak||0,duration:650})),
        e("div",{className:"daily-stat-lbl"},"Dan streak"),
        (userData.freezes||0)>0&&e("div",{style:{fontSize:9.5,marginTop:3,color:"var(--blue)",fontWeight:800}},"🧊 ×"+userData.freezes+" zaštita"),
        (userData.streak||0)>0&&(userData.streak||0)%7===6&&(userData.freezes||0)<2&&e("div",{style:{fontSize:9,marginTop:2,color:"var(--muted)",fontWeight:600}},"još 1 dan do 🧊")
      )
    ),
    // Tjedna aktivnost  -  bar chart
    e("div",{className:"ds-act",style:{marginBottom:12}},
      e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:8,display:"flex",justifyContent:"space-between"}},
        e("span",null,"Aktivnost  -  zadnjih 7 dana"),
        weekMinutes>0&&e("span",null,fmtMins(weekMinutes)+" ukupno")
      ),
      e("div",{className:"ds-bars"},
        last7.map((d,i)=>e("div",{key:i,style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",gap:3,height:"100%"}},
          d.isToday&&d.mins>0&&e("div",{className:"ds-bar-val"},fmtMins(d.mins)),
          e("div",{title:d.label+": "+fmtMins(d.mins),className:"ds-bar"+(d.isToday?" today":""),style:{
            height:d.mins>0?Math.max(5,Math.round(d.mins/maxMins*40))+"px":"4px",
            background:d.isToday?"linear-gradient(180deg,#ffd989,var(--gold))":d.hasExam?"linear-gradient(180deg,#7ee8dc,var(--teal))":"var(--s3)",
            opacity:d.isToday||d.hasExam?1:.7
          }}),
          e("div",{style:{fontSize:9,color:d.isToday?"var(--gold)":"var(--muted)",fontWeight:d.isToday?800:400}},d.label)
        ))
      ),
      onSetGoal&&(()=>{
        const goal=userData.dailyGoalMin;
        if(!goal) return e("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginTop:12}},
          e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600}},"\uD83C\uDFAF Dnevni cilj:"),
          [15,30,45,60].map(m=>e("button",{key:m,onClick:()=>onSetGoal(m),className:"pill"},m+" min")));
        const p=Math.min(100,Math.round(todayMinutes/goal*100));
        const hit=todayMinutes>=goal;
        return e("div",{style:{marginTop:12}},
          e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:11,marginBottom:5}},
            e("span",{style:{color:"var(--muted)",fontWeight:600}},"\uD83C\uDFAF Dnevni cilj: ",
              e("strong",{style:{color:hit?"var(--green)":"var(--text)"}},Math.round(todayMinutes)+"/"+goal+" min"),
              hit?" \u00b7 ostvaren! \uD83C\uDF89":""),
            e("button",{onClick:()=>onSetGoal(null),title:"Promijeni cilj",
              style:{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"var(--muted)",padding:2}},"\u270e")),
          e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{width:p+"%",height:"100%",borderRadius:99,transition:"width .5s cubic-bezier(.22,1,.36,1)",
              background:hit?"linear-gradient(90deg,var(--green),#7ef0ad)":"linear-gradient(90deg,var(--blue),var(--teal))"}})));
      })()
    ),
    // Trend zadnjih 10 ispita
    history.length>=3&&e("div",{className:"streak-quality-wrap"},
      e("div",{className:"streak-quality-title"},"Trend rezultata (zadnjih "+Math.min(10,history.length)+")"),
      e("div",{className:"streak-quality-bars"},
        history.slice(-10).map((h,i,arr)=>{
          const prev=i>0?arr[i-1].pct:h.pct;
          const dir=h.pct>prev+3?"up":h.pct<prev-3?"down":h.pct>0?"flat":"none";
          return e("div",{key:i,className:"sq-bar-wrap",title:h.pct+"%"},
            e("div",{className:"sq-bar "+dir,style:{height:Math.max(4,h.pct*0.48)+"px"}}),
            e("div",{className:"sq-label"},h.pct+"%")
          );
        })
      )
    ),
    // Insight
    todayExams.length===0&&history.length>0&&e("div",{className:"daily-insight"},
      e("strong",null,"💡 Prijedlog: "),
      "Na zadnjem ispitu si imao/la "+history[history.length-1]?.pct+"%. Pokušaj danas pobiti taj rekord!")
  );
}
export { TodayHero, DailyChallengeScreen, DailySummary };
