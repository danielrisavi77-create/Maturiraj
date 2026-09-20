// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Statistika i analitika: pregled, predikcija ocjene, prognoza bodova i PDF izvjestaj. */
import React from 'react';
import { DS, IS_PRO, SUBJECT, TOPIC_LABELS, planCta } from '../core/state';
import { EXAMS } from '../core/exams';
import { __aiErrMsg, __aiPost } from '../core/runtime';
import { parseMath } from '../core/mathText';
import { GC, GLBL, LL } from '../core/ui';
import { grade } from '../core/progress';
import { KnowledgeMap, TrendChart } from '../viz/charts';
import { UpgradeModal } from '../tools/modals';
const{createElement:e,Fragment}=React;
function PDFReportScreen({userData,onBack}){
  const history=Array.isArray(userData?.history)?userData.history:[];
  const errors=Object.values(userData?.errorTracker||{})
    .filter(e=>e.count>0).sort((a,b)=>b.count-a.count).slice(0,8);
  const totalExams=history.length;
  const avgPct=totalExams?Math.round(history.reduce((s,h)=>s+h.pct,0)/totalExams):0;
  const lastFive=history.slice(-5);
  const trend=lastFive.length>=2
    ?Math.round(lastFive[lastFive.length-1].pct-lastFive[0].pct):null;

  // Teme stats iz historije
  const topicAcc={};
  history.forEach(h=>{
    if(!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([t,d])=>{
      if(!topicAcc[t]) topicAcc[t]={correct:0,total:0};
      topicAcc[t].correct+=d.correct||0;
      topicAcc[t].total+=d.total||0;
    });
  });
  const topicRows=Object.entries(topicAcc)
    .map(([t,v])=>({t,pct:v.total?Math.round(v.correct/v.total*100):null,total:v.total}))
    .filter(r=>r.pct!==null).sort((a,b)=>a.pct-b.pct);
  const weakTopics=topicRows.filter(r=>r.pct<60).slice(0,5);
  const strongTopics=topicRows.filter(r=>r.pct>=70).slice(-3).reverse();
  const today=new Date().toLocaleDateString("hr",{day:"numeric",month:"long",year:"numeric"});

  return e("div",{style:{maxWidth:700,margin:"0 auto",padding:"24px 20px 60px"}},
    // Nav
    e("div",{className:"nav no-print"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📄 PDF Izvještaj"),
      e("button",{className:"btn btn-gold no-print",style:{fontSize:13,padding:"6px 16px"},
        onClick:()=>window.print()
      },"🖨️ Ispiši / Spremi PDF")
    ),

    // PDF sadržaj
    e("div",{className:"pdf-report pdf-report-wrap"},
      // Zaglavlje
      e("div",{style:{
        display:"flex",justifyContent:"space-between",alignItems:"flex-start",
        borderRadius:18,padding:"22px 24px",marginBottom:22,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)"
      }},
        e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:4}},"Discere - "+SUBJECT.name),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:20,color:"var(--bg,#060910)",marginBottom:4}},"Izvještaj o napretku"),
          e("div",{style:{fontSize:12,color:"rgba(255,255,255,.6)"}},today)
        ),
        totalExams>0&&e("div",{style:{textAlign:"right"}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:36,color:"var(--blue)",lineHeight:1}},avgPct+"%"),
          e("div",{style:{fontSize:11,color:"var(--muted)"}},"prosječni rezultat")
        )
      ),

      // Sažetak  -  4 kartice
      e("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:24}},
        [
          {label:"Riješenih ispita",val:totalExams,col:"var(--blue)"},
          {label:"Prosječni %",val:avgPct+"%",col:avgPct>=70?"var(--green)":avgPct>=55?"var(--gold)":"var(--red)"},
          {label:"Trend (zadnjih 5)",val:trend!==null?(trend>0?"+"+trend+"%":trend+"%"):"-",
            col:trend>0?"var(--green)":trend<0?"var(--red)":"var(--muted)"},
          {label:"XP ukupno",val:(userData?.xp||0)+" XP",col:"var(--gold)"},
        ].map((item,i)=>e("div",{key:i,style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,padding:"14px 12px",textAlign:"center"
        }},
          e("div",{style:{fontSize:20,fontWeight:800,color:item.col,fontFamily:"var(--fh)"}},item.val),
          e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2}},item.label)
        ))
      ),

      // Zadnjih 10 ispita
      totalExams>0&&e("div",{style:{marginBottom:24}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}},
          "Zadnjih "+Math.min(10,totalExams)+" ispita"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          history.slice(-10).reverse().map((h,i)=>{
            const col=h.pct>=70?"var(--green)":h.pct>=55?"var(--gold)":"var(--red)";
            return e("div",{key:i,style:{
              display:"flex",alignItems:"center",gap:10,
              padding:"6px 10px",background:"var(--s2)",borderRadius:"var(--r)"
            }},
              e("div",{style:{fontSize:12,color:"var(--muted)",minWidth:90}},h.date||""),
              e("div",{style:{flex:1,fontSize:12,fontWeight:500}},h.examLabel||""),
              e("div",{style:{fontSize:12,fontWeight:800,color:col,minWidth:44,textAlign:"right"}},h.pct+"%"),
              e("div",{style:{minWidth:16,height:16,borderRadius:99,background:col,opacity:.7}})
            );
          })
        )
      ),

      // Teme  -  slabe i jake
      topicRows.length>0&&e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}},
        weakTopics.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--red)",marginBottom:8}},
            "⚠️ Slabe teme"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
            weakTopics.map((r,i)=>e("div",{key:i,style:{
              display:"flex",justifyContent:"space-between",padding:"5px 8px",
              background:"var(--red-d)",borderRadius:"var(--r)",fontSize:12
            }},
              e("span",null,TOPIC_LABELS[r.t]||r.t),
              e("span",{style:{fontWeight:700,color:"var(--red)"}},r.pct+"%")
            ))
          )
        ),
        strongTopics.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--green)",marginBottom:8}},
            "✓ Jake teme"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
            strongTopics.map((r,i)=>e("div",{key:i,style:{
              display:"flex",justifyContent:"space-between",padding:"5px 8px",
              background:"var(--green-d)",borderRadius:"var(--r)",fontSize:12
            }},
              e("span",null,TOPIC_LABELS[r.t]||r.t),
              e("span",{style:{fontWeight:700,color:"var(--green)"}},r.pct+"%")
            ))
          )
        )
      ),

      // Najčešće greške
      errors.length>0&&e("div",{style:{marginBottom:24}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:8}},
          "Najčešće greške"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          errors.map((err,i)=>e("div",{key:i,style:{
            display:"flex",alignItems:"flex-start",gap:8,padding:"6px 10px",
            background:"var(--s2)",borderRadius:"var(--r)"
          }},
            e("div",{style:{
              minWidth:22,height:22,borderRadius:99,background:"var(--red)",
              color:"var(--bg,#060910)",fontSize:10,fontWeight:800,
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0
            }},err.count+"×"),
            e("div",{style:{fontSize:12,lineHeight:1.4}},err.q)
          ))
        )
      ),

      // Footer
      e("div",{style:{
        borderTop:"1px solid var(--bdr)",paddingTop:12,marginTop:8,
        display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--muted)"
      }},
        e("span",null,"Discere · discere.app"),
        e("span",null,"Ispitna pitanja © NCVVO"),
        e("span",null,today)
      )
    ),

    // Print gumb dolje
    e("div",{className:"no-print",style:{textAlign:"center",marginTop:20}},
      e("button",{className:"btn btn-gold",style:{padding:"12px 32px",fontSize:15},
        onClick:()=>window.print()
      },"🖨️ Ispiši / Spremi kao PDF"),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8}},
        "U dijaloškom okviru odaberi 'Spremi kao PDF' umjesto pisača.")
    )
  );
}
function ScoreForecast({history}){
  var data=React.useMemo(function(){
    var hs=(history||[]).filter(function(h){return typeof h.pct==="number";});
    if(hs.length<2) return null;
    var recent=hs.slice(-12);
    var n=recent.length;
    var wsum=0,w=0;
    recent.forEach(function(h,i){var wt=i+1; wsum+=h.pct*wt; w+=wt;});
    var mu=wsum/w;
    var trend=recent[n-1].pct-recent[0].pct;
    mu=Math.max(0,Math.min(100,mu+trend*0.15));
    var mean=recent.reduce(function(a,h){return a+h.pct;},0)/n;
    var variance=recent.reduce(function(a,h){return a+(h.pct-mean)*(h.pct-mean);},0)/Math.max(1,n-1);
    var sd=Math.sqrt(variance);
    sd=Math.max(6,Math.min(18,sd));
    var seed=(Math.floor(mu*1000+sd*7+n)>>>0)||1;
    function rng(){seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}
    function gauss(){var u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
    var M=5000, counts={1:0,2:0,3:0,4:0,5:0};
    for(var k=0;k<M;k++){
      var x=mu+gauss()*sd; if(x<0)x=0; if(x>100)x=100;
      var g=x>=85?5:x>=70?4:x>=55?3:x>=40?2:1;
      counts[g]++;
    }
    var pc={}; [1,2,3,4,5].forEach(function(g){pc[g]=Math.round(counts[g]/M*100);});
    var p4=Math.round((counts[4]+counts[5])/M*100);
    var likely=[1,2,3,4,5].reduce(function(b,g){return counts[g]>counts[b]?g:b;},1);
    return {pc:pc,p4:p4,likely:likely,n:n};
  },[(history||[]).length,(history||[]).map(function(h){return h.pct;}).join(",")]);
  if(!data) return null;
  var COL={5:"#50c878",4:"#86c06a",3:"#e9b446",2:"#e08a3c",1:"#e05252"};
  return e("div",{style:{marginBottom:18,padding:"16px 16px 14px",borderRadius:14,background:"var(--s1)",border:"1px solid var(--bdr)"}},
    e("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}},
      e("div",{style:{fontFamily:"var(--fh)",fontSize:15}},"🎲 Procjena ocjene"),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginLeft:"auto"}},"Monte-Carlo · "+data.n+" ispita")),
    e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:14}},"5000 simuliranih matura na temelju tvojih rezultata"),
    e("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16}},
      e("div",{style:{textAlign:"center",flexShrink:0}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:38,lineHeight:1,color:data.p4>=50?"var(--green)":"var(--gold)"}},data.p4+"%"),
        e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:3,maxWidth:92,lineHeight:1.3}},"šanse za ocjenu 4 ili više")),
      e("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:6}},
        [5,4,3,2,1].map(function(g){var p=data.pc[g];return e("div",{key:g,style:{display:"flex",alignItems:"center",gap:8}},
          e("div",{style:{width:16,fontSize:12.5,fontWeight:800,color:COL[g],textAlign:"center",flexShrink:0}},g),
          e("div",{style:{flex:1,height:14,background:"var(--s2)",borderRadius:7,overflow:"hidden"}},e("div",{style:{height:"100%",width:(p>0?Math.max(3,p):0)+"%",background:COL[g],borderRadius:7,transition:"width .5s"}})),
          e("div",{style:{width:34,textAlign:"right",fontSize:11.5,fontWeight:700,color:"var(--muted)",flexShrink:0}},p+"%"));
        }))),
    e("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",borderRadius:9,background:"var(--s2)",fontSize:12,marginBottom:8}},
      e("span",null,"🎯"),e("span",{style:{color:"var(--text)"}},"Najvjerojatnija ocjena: "),e("span",{style:{fontWeight:800,color:COL[data.likely]}},data.likely)),
    e("div",{style:{fontSize:10.5,color:"var(--muted)",lineHeight:1.45,fontStyle:"italic"}},"Procjena se temelji na tvojim dosadašnjim rezultatima i ne jamči ishod na stvarnoj maturi.")
  );
}
function StatsScreen({userData,onBack,onPDFReport,onStartErrorSession}){
  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📊 Statistika & napredak"),
      e("span",{className:"nsp"}),
      onPDFReport&&e("button",{className:"btn btn-g",style:{fontSize:12,padding:"5px 12px"},onClick:onPDFReport},"📄 PDF izvještaj")
    ),
    e("div",{className:"stats-screen"},
      e(KnowledgeMap,{userData,onTopic:function(k,label){if(!onStartErrorSession)return;var _rz=(typeof DS!=="undefined"&&DS.get)?DS.get("mat_razina"):null;var qs=[];Object.values(EXAMS).forEach(function(ex){if(_rz&&ex.razina&&ex.razina!==_rz)return;(ex.qs||[]).forEach(function(q){if((TOPIC_LABELS[q.topic]||q.topic)===label&&q.type!=="proof"&&q.type!=="sa"){qs.push(Object.assign({},q,{_examKey:ex.key}));}});});if(!qs.length)return;qs=qs.sort(function(){return Math.random()-0.5;}).slice(0,15);onStartErrorSession({key:"map_topic_session",year:"Mapa znanja",season:"session",razina:(userData&&userData.razina)||undefined,label:label,qs:qs,duration:qs.length*120});}}),
      e(AnalyticsPanel,{userData,defaultTab:"pregled",onBack,onStartErrorSession})
    )
  );
}
function AnalyticsPanel({userData,defaultTab,onFilter,onBack,onStartErrorSession}){
  const[tab,setTab]=React.useState(defaultTab||"pregled");
  const[drillTopic,setDrillTopic]=React.useState(null);
  const[calTooltip,setCalTooltip]=React.useState(null);
  const[openTopic,setOpenTopic]=React.useState(null);
  const[viewMonth,setViewMonth]=React.useState(()=>{
    const _p=v=>{if(!v)return null;const a=String(v).replace(/\./g,"").trim().split(/\s+/);if(a.length<3)return null;return new Date(+a[2],+a[1]-1,+a[0]);};
    let _l=null;(userData.history||[]).forEach(h=>{const d=_p(h.date);if(d&&(!_l||d>_l))_l=d;});
    const n=_l||new Date();return{y:n.getFullYear(),m:n.getMonth()};
  });
  const[distGrade,setDistGrade]=React.useState(null);
  const[targetGrade,setTargetGrade]=React.useState(()=>{try{return parseInt(DS.get("mat_target_grade"))||null}catch{return null}});
  const[aiPlanState,setAiPlanState]=React.useState("idle");
  const[aiPlan,setAiPlan]=React.useState(null);
  const[showUpgrade,setShowUpgrade]=React.useState(false);
  const history=userData.history||[];

  const topicStats={};
  history.forEach(h=>{
    if(!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([topic,data])=>{
      if(!topicStats[topic]) topicStats[topic]={correct:0,total:0};
      topicStats[topic].correct+=data.correct||0;
      topicStats[topic].total+=data.total||0;
    });
  });

  const topicList=Object.entries(topicStats)
    .map(([k,v])=>({key:k,label:TOPIC_LABELS[k]||k,...v,pct:v.total?Math.round(v.correct/v.total*100):null}))
    .filter(t=>t.total>0).sort((a,b)=>a.pct-b.pct);

  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);

  const simHistory=history.filter(h=>h.examMode===true||h.mode==="simulacija");
  const vjezbaHistory=history.filter(h=>!h.examMode&&h.mode!=="simulacija");
  const simAvg=simHistory.length?Math.round(simHistory.reduce((a,h)=>a+h.pct,0)/simHistory.length):null;
  const vjezbaAvg=vjezbaHistory.length?Math.round(vjezbaHistory.reduce((a,h)=>a+h.pct,0)/vjezbaHistory.length):null;
  const modeDiff=(simAvg!==null&&vjezbaAvg!==null)?simAvg-vjezbaAvg:null;

  const allTimes=history.flatMap(h=>h.qTimes?Object.values(h.qTimes):[]);
  const avgTime=allTimes.length?Math.round(allTimes.reduce((a,b)=>a+b,0)/allTimes.length):0;
  const avgPct=history.length?Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length):null;
  const best=history.length?Math.max(...history.map(h=>h.pct)):null;
  const totalQSolved=history.reduce((s,h)=>s+(h.total||0),0);

  // NCE podaci za Matematiku (NCVVO godišnji izvještaji — procjene)
  const NCE_DATA={
    2025:{avg:51,pass:68,label:"2024./2025."},
    2024:{avg:50,pass:67,label:"2023./2024."},
    2023:{avg:49,pass:66,label:"2022./2023."},
    2022:{avg:48,pass:65,label:"2021./2022."},
  };

  // Distribucija ocjena
  const gradeDist={1:0,2:0,3:0,4:0,5:0};
  history.forEach(h=>{if(h.grade>=1&&h.grade<=5)gradeDist[h.grade]++;});

  function getRecommendations(){
    const recs=[];
    const topErrors=errors.slice(0,3).filter(e=>e.count>=2);
    if(topErrors.length>0) recs.push({icon:"🔁",title:"Ponavljaš iste greške",desc:"Griješiš "+topErrors.length+"× na pitanjima o "+[...new Set(topErrors.map(e=>TOPIC_LABELS[e.topic]||e.topic))].join(", ")+". Pogledaj tab 'Greške'.",badge:"urgent"});
    if(modeDiff!==null&&modeDiff<-8) recs.push({icon:"⚖️",title:"Simulacija ti ide lošije",desc:"U simulaciji si za "+Math.abs(modeDiff)+"% slabiji/a nego u vježbanju. Uvježbaj više simulacija s timerom.",badge:"urgent"});
    topicList.slice(0,2).forEach(t=>{if(t.pct!==null&&t.pct<50) recs.push({icon:"🎯",title:"Uvježbaj: "+t.label,desc:"Trenutni rezultat "+t.pct+"% - ispod prolazne granice. Koristi 'Vježbaj po temi'.",badge:"urgent"});});
    const strong=[...topicList].reverse().find(t=>t.pct>=80);
    if(strong) recs.push({icon:"💪",title:"Snaga: "+strong.label,desc:strong.pct+"% - izvrsno! Nastavi ovim tempom.",badge:"good"});
    if(avgTime>60) recs.push({icon:"⏱",title:"Radi na brzini",desc:"Prosječno "+avgTime+"s po pitanju. Na maturi imaš ~4 min po pitanju za MAT B, ~3 min za MAT A.",badge:"tip"});
    if(history.length<3) recs.push({icon:"📄",title:"Riješi više ispita",desc:"Što više ispita riješiš, točnija je analiza slabih točaka. Cilj: barem 5 ispita.",badge:"tip"});
    if(best&&best>=85) recs.push({icon:"🏆",title:"Odličan rezultat!",desc:"Postigao/la si "+best+"% - odgovara ocjeni 5. Probaj i drugu razinu (A/B) za raznovrsnost.",badge:"good"});
    return recs.length?recs:[{icon:"📊",title:"Nastavi vježbati",desc:"Riješi još ispita za personalizirane preporuke.",badge:"tip"}];
  }

  const tabs=[
    {id:"pregled",label:"📈 Pregled"},
    {id:"teme",label:"🗺 Teme"},
    {id:"greške",label:"🔁 Greške"},
    {id:"teska",label:"💀 Najteža"},
    {id:"heatmap",label:"🗓 Kalendar"},
    {id:"savjeti",label:"💡 Savjeti"},
  ];
  const noData=e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"40px 24px",textAlign:"center"}},
    e("div",{style:{fontSize:48,opacity:.3,marginBottom:12}},"📊"),
    e("div",{style:{fontSize:15,fontWeight:600,marginBottom:6}},"Nema podataka za prikaz"),
    e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18,lineHeight:1.5}},"Riješi barem jedan ispit da se ovdje pojave statistike."),
    onBack&&e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
  );

  async function runAiPlan(){
    if(!IS_PRO){setShowUpgrade(true);return;}
    if(history.length===0)return;
    setAiPlanState("loading");
    const weak=topicList.slice(0,3).map(t=>t.label+" ("+t.pct+"%)").join(", ")||"nema podataka";
    const strong=[...topicList].reverse().slice(0,2).map(t=>t.label+" ("+t.pct+"%)").join(", ")||"nema podataka";
    const trend=history.length>=2?(history[history.length-1].pct-history[0].pct):0;
    const prompt=`Ti si mentor za hrvatsku državnu maturu iz matematike. Na temelju podataka učenika složi konkretan, izvediv plan učenja.
Podaci:
- Riješeno ispita: ${history.length}
- Prosjek: ${avgPct}% (rekord ${best}%)
- Trend (prvi do zadnji): ${trend>=0?"+":""}${trend}%
- Najslabije teme: ${weak}
- Najjače teme: ${strong}
- Prosječno vrijeme po pitanju: ${avgTime}s

Vrati ISKLJUČIVO JSON (bez markdown backtickova):
{"fokus":"jedna recenica glavni fokus","tjedni":[{"naslov":"Tjedan 1: ...","zadaci":["konkretan zadatak","konkretan zadatak"]}],"savjet":"jedan kratak motivacijski savjet"}
Plan 3-4 tjedna, fokus na najslabije teme, zadaci konkretni i izvedivi.`;
    try{
      const data=await __aiPost(prompt,1200);
      if(data?.error||!data?.content) throw new Error("api");
      const text=data?.content?.[0]?.text||"{}";
      setAiPlan(JSON.parse(text.replace(/```json|```/g,"").trim()));
      setAiPlanState("done");
    }catch(err){setAiPlanState("error");}
  }

  const aiPlanCard = history.length>0 && e("div",{style:{marginBottom:18}},
    e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
      e("span",null,"AI plan u\u010denja"),
      e("span",{style:{fontSize:9,fontWeight:800,letterSpacing:".06em",background:"var(--gold-d)",color:"var(--gold)",border:"1px solid var(--gold-b)",padding:"2px 7px",borderRadius:99}},"PRO"),
      e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
    ),
    e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,border:"1px solid var(--bdr)",background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",color:"#fff",padding:"20px 22px",minHeight:96}},
      e("div",{style:{position:"absolute",right:-10,bottom:-34,fontSize:130,fontFamily:"var(--fh)",opacity:.07,lineHeight:1,userSelect:"none",pointerEvents:"none"}},"\u2211"),
      aiPlanState==="loading"
        ? e("div",{style:{display:"flex",alignItems:"center",gap:12,position:"relative",zIndex:1}},
            e("div",{className:"spinner",style:{borderTopColor:"#fff",borderColor:"rgba(255,255,255,.25)"}}),
            e("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)"}},"Claude analizira tvoje rezultate i sla\u017ee plan\u2026")
          )
        : (aiPlanState==="done"&&aiPlan)
          ? e("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:12}},
              aiPlan.fokus&&e("div",{style:{fontSize:13.5,lineHeight:1.55,color:"#fff"}},e("strong",null,"Fokus: "),aiPlan.fokus),
              Array.isArray(aiPlan.tjedni)&&e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                aiPlan.tjedni.map((w,i)=>e("div",{key:i,style:{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.14)",borderRadius:10,padding:"10px 13px"}},
                  e("div",{style:{fontSize:12.5,fontWeight:700,marginBottom:6,color:"#fff"}},w.naslov||("Tjedan "+(i+1))),
                  Array.isArray(w.zadaci)&&e("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:3}},
                    w.zadaci.map((z,j)=>e("li",{key:j,style:{fontSize:12,lineHeight:1.5,color:"rgba(255,255,255,.88)"}},z))
                  )
                ))
              ),
              aiPlan.savjet&&e("div",{style:{fontSize:12,fontStyle:"italic",color:"rgba(255,255,255,.7)",borderTop:"1px solid rgba(255,255,255,.15)",paddingTop:10}},"\uD83D\uDCA1 "+aiPlan.savjet),
              e("button",{onClick:runAiPlan,style:{alignSelf:"flex-start",marginTop:2,background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.25)",color:"#fff",fontFamily:"var(--fb)",fontSize:12,fontWeight:600,padding:"7px 14px",borderRadius:8,cursor:"pointer"}},"\u21bb Novi plan")
            )
          : e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6,color:"#fff"}},"\uD83E\uDD16 Personalizirani plan u\u010denja"),
              e("div",{style:{fontSize:13,lineHeight:1.6,color:"rgba(255,255,255,.8)",marginBottom:14,maxWidth:440}},
                "Claude analizira tvoj prosjek, trend i najslabije teme"+(topicList[0]?" (npr. "+topicList[0].label+")":"")+" pa sla\u017ee tjedni plan do mature."
              ),
              aiPlanState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:10}},__aiErrMsg()),
              e("button",{onClick:runAiPlan,style:{background:IS_PRO?"#fff":"rgba(255,255,255,.16)",color:IS_PRO?"#0b1b3a":"#fff",border:IS_PRO?"none":"1px solid rgba(255,255,255,.3)",fontFamily:"var(--fb)",fontSize:13.5,fontWeight:700,padding:"11px 22px",borderRadius:10,cursor:"pointer",boxShadow:IS_PRO?"0 6px 18px -6px rgba(0,0,0,.4)":"none"}},
                IS_PRO?"\u2728 Generiraj AI plan":planCta()
              )
            )
    )
  );

  const GOAL_THRESH={5:85,4:70,3:55,2:40};
  function setGoal(g){try{DS.set("mat_target_grade",String(g))}catch(e){}setTargetGrade(g);}
  const goalCard = e("div",{style:{marginBottom:18}},
    e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
      e("span",null,"Moj cilj"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
    !targetGrade
      ? e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"16px 18px"}},
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.5}},"Postavi ciljnu ocjenu \u2014 pratit \u0107u koliko ti jo\u0161 fali do nje."),
          e("div",{style:{display:"flex",gap:8}},
            [3,4,5].map(g=>e("button",{key:g,onClick:()=>setGoal(g),style:{flex:1,cursor:"pointer",fontFamily:"var(--fb)",fontWeight:700,fontSize:14,padding:"10px",borderRadius:10,border:"1px solid var(--bdr2)",background:"var(--s2)",color:GC[g]||"var(--text)"}},"Ocjena "+g))
          )
        )
      : (()=>{const th=GOAL_THRESH[targetGrade];const cur=avgPct||0;const gap=Math.max(0,th-cur);const reached=cur>=th;const pctToGoal=Math.min(100,Math.round(cur/th*100));return e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+(reached?"var(--green)":GC[targetGrade]),borderRadius:"0 14px 14px 0",padding:"16px 18px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:34,lineHeight:1,color:GC[targetGrade]}},targetGrade),
            e("div",{style:{flex:1}},
              e("div",{style:{fontSize:13,fontWeight:700}},"Cilj: ocjena "+targetGrade+" (\u2265"+th+"%)"),
              e("div",{style:{fontSize:12,color:reached?"var(--green)":"var(--muted)",marginTop:2}},reached?"🎉 Cilj dostignut \u2014 prosjek "+cur+"%!":"Trenutno "+cur+"% \u00b7 fali ti jo\u0161 +"+gap+"%")
            ),
            e("button",{onClick:()=>setGoal(null),style:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:11,fontFamily:"var(--fb)"}},"promijeni")
          ),
          e("div",{style:{height:7,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{height:"100%",width:pctToGoal+"%",background:reached?"var(--green)":GC[targetGrade],borderRadius:99,transition:"width .8s ease"}}))
        );})()
  );

  const shareCard = history.length>0 && (()=>{
    const trend=history.length>=2?(history[history.length-1].pct-history[0].pct):0;
    const txt="📊 Moja matura-priprema (Discere):\n\u2022 "+history.length+" ispita rije\u0161eno\n\u2022 Prosjek "+(avgPct||0)+"% (rekord "+(best||0)+"%)\n"+(trend>0?"\u2022 Napredak +"+trend+"% 📈\n":"")+"maturiraj.hr";
    return e("div",{style:{marginBottom:18}},
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Podijeli napredak"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
      e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,border:"1px solid var(--bdr)",background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",color:"#fff",padding:"18px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}},
        e("div",{style:{position:"absolute",right:-8,bottom:-26,fontSize:96,fontFamily:"var(--fh)",opacity:.07,lineHeight:1,userSelect:"none",pointerEvents:"none"}},"\u2211"),
        e("div",{style:{flex:1,minWidth:160,position:"relative",zIndex:1}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:26,lineHeight:1}},(avgPct||0)+"% prosjek"),
          e("div",{style:{fontSize:12,color:"rgba(255,255,255,.8)",marginTop:4}},history.length+" ispita \u00b7 rekord "+(best||0)+"%"+(trend>0?" \u00b7 +"+trend+"% napredak":""))
        ),
        e("button",{onClick:ev=>{try{navigator.clipboard&&navigator.clipboard.writeText(txt);}catch(e){}const b=ev.currentTarget;const o=b.textContent;b.textContent="\u2713 Kopirano";setTimeout(()=>{b.textContent=o;},1800);},
          style:{position:"relative",zIndex:1,background:"#fff",color:"#0b1b3a",border:"none",cursor:"pointer",fontFamily:"var(--fb)",fontSize:13,fontWeight:700,padding:"10px 18px",borderRadius:10,whiteSpace:"nowrap"}},"📋 Kopiraj napredak")
      )
    );
  })();

  const topicTimes=(()=>{const acc={};history.forEach(h=>{if(!h.qTimes)return;const exam=EXAMS[h.examKey];if(!exam)return;Object.entries(h.qTimes).forEach(([qid,t])=>{const q=exam.qs.find(q=>String(q.id)===String(qid));if(!q||!q.topic)return;if(!acc[q.topic])acc[q.topic]={t:0,n:0};acc[q.topic].t+=(+t||0);acc[q.topic].n++;});});return Object.entries(acc).map(([k,v])=>({topic:k,label:TOPIC_LABELS[k]||k,avg:Math.round(v.t/v.n),n:v.n})).filter(x=>x.n>=2).sort((a,b)=>b.avg-a.avg);})();
  const TIME_BUDGET=120;

  function startErrorsSession(errList){
    if(!onStartErrorSession||!errList||!errList.length)return;
    const qs=errList.map(err=>{const exam=EXAMS[err.examKey];if(!exam)return null;const q=exam.qs.find(q=>String(q.id)===String(err.qid));return q?{...q,_examKey:err.examKey}:null;}).filter(Boolean);
    if(!qs.length)return;
    onStartErrorSession({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:qs.length*120});
  }

  function startTopicSession(topicKey,label){
    if(!onStartErrorSession)return;
    const qs=[];
    Object.entries(EXAMS).forEach(([ek,exam])=>{exam.qs.filter(q=>q.topic===topicKey).forEach(q=>qs.push({...q,_examKey:ek}));});
    if(!qs.length)return;
    const sel=[...qs].sort(()=>Math.random()-.5).slice(0,20);
    onStartErrorSession({key:"errors_session",year:label,season:"session",label:"Vježba: "+label,qs:sel,duration:sel.length*120});
  }

  return e("div",{className:"analytics-wrap"},
    showUpgrade&&e(UpgradeModal,{onClose:()=>setShowUpgrade(false)}),
    e("div",{className:"analytics-hdr"},
      e("span",{style:{fontSize:18}},"📊"),
      e("span",{className:"analytics-hdr-title"},"Moja statistika"),
      history.length>0&&e("span",{style:{marginLeft:"auto",fontSize:12,color:"var(--muted)"}},history.length+" ispita · "+totalQSolved+" pitanja")
    ),
    e("div",{className:"analytics-body"},
      // Hero stats
      history.length>0&&e("div",{style:{
        borderRadius:16,padding:"20px 22px 18px",marginBottom:18,
        background:"var(--s1)",border:"1px solid var(--bdr)",boxShadow:"var(--shadow-sm)",
        position:"relative",overflow:"hidden"
      }},
        e("div",{style:{position:"absolute",right:-6,bottom:-24,fontSize:100,fontFamily:"var(--fh)",opacity:.05,color:"var(--blue)",lineHeight:1,userSelect:"none",pointerEvents:"none"}},"∑"),
        e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:12,position:"relative",zIndex:1}},
          [{l:"Ispita",v:history.length,c:"var(--text)"},
           {l:"Pitanja",v:totalQSolved,c:"var(--text)"},
           {l:"Prosjek",v:(avgPct||0)+"%",c:avgPct>=70?"var(--green)":avgPct>=50?"var(--gold)":"var(--red)"},
           {l:"Rekord",v:(best||0)+"%",c:"var(--green)"},
           {l:"Streak",v:(userData.streak||0)+"🔥",c:"var(--gold)"}
          ].map((s,i)=>e("div",{key:i,style:{textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:24,color:s.c,lineHeight:1,marginBottom:3}},s.v),
            e("div",{style:{fontSize:10,fontWeight:600,letterSpacing:".05em",color:"var(--muted)",textTransform:"uppercase"}},s.l)
          ))
        )
      ),

      // Tab bar
      e("div",{className:"analytics-tab-bar"},
        tabs.map(t=>e("button",{key:t.id,className:"analytics-tab"+(tab===t.id?" active":""),onClick:()=>{setTab(t.id);setDrillTopic(null);}},t.label))
      ),

      /* ── PREGLED ── */
      tab==="pregled"&&e("div",null,
        goalCard,
        // Najslabija / Najjača tema
        topicList.length>=2&&e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:18}},
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 12px 12px 0",padding:"14px 16px"}},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--red)",marginBottom:4}},"Najslabija tema"),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:3}},topicList[0].label),
            e("div",{style:{fontSize:22,fontWeight:800,color:"var(--red)",fontFamily:"var(--fh)"}},(topicList[0].pct||0)+"%"),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},topicList[0].correct+"/"+topicList[0].total+" točno")
          ),
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--green)",borderRadius:"0 12px 12px 0",padding:"14px 16px"}},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--green)",marginBottom:4}},"Najjača tema"),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:3}},topicList[topicList.length-1].label),
            e("div",{style:{fontSize:22,fontWeight:800,color:"var(--green)",fontFamily:"var(--fh)"}},(topicList[topicList.length-1].pct||0)+"%"),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},topicList[topicList.length-1].correct+"/"+topicList[topicList.length-1].total+" točno")
          )
        ),
        aiPlanCard,
        // NCE usporedba
        history.length>0&&(()=>{
          const userAvg=avgPct||0;
          const latestYear=Math.max(...history.map(h=>parseInt((h.examKey||"").split("_")[0])||2024));
          const nceBase=NCE_DATA[latestYear]||NCE_DATA[2024];
          const razCount={A:0,B:0};history.forEach(h=>{(h.examKey||"").includes("_A")?razCount.A++:razCount.B++;});
          const dominRaz=razCount.A>razCount.B?"A":"B";
          const nce={...nceBase,avg:Math.max(0,Math.round(nceBase.avg+(dominRaz==="A"?-4:2)))};
          const diff=userAvg-(nce?.avg||50);
          const diffColor=diff>=0?"var(--green)":"var(--red)";
          return e("div",{style:{marginBottom:20}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},e("span",null,"Usporedba s NCE prosjekom ("+dominRaz+" razina)"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
            e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"18px 20px"}},
              e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}},
                e("div",{style:{textAlign:"center",padding:"10px",background:"var(--s2)",borderRadius:"var(--r)"}},e("div",{style:{fontSize:24,fontWeight:800,color:"var(--blue)",fontFamily:"var(--fh)"}},userAvg+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Tvoj prosjek")),
                e("div",{style:{textAlign:"center",padding:"10px",background:"var(--s2)",borderRadius:"var(--r)"}},e("div",{style:{fontSize:24,fontWeight:800,color:"var(--muted)",fontFamily:"var(--fh)"}},(nce?.avg||50)+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"NCE prosjek")),
                e("div",{style:{textAlign:"center",padding:"10px",background:diff>=0?"var(--green-d)":"var(--red-d)",borderRadius:"var(--r)",border:"1px solid "+(diff>=0?"rgba(61,214,140,.2)":"rgba(248,113,113,.2)")}},e("div",{style:{fontSize:24,fontWeight:800,color:diffColor,fontFamily:"var(--fh)"}},(diff>=0?"+":"")+diff+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Razlika"))
              ),
              [["Ti - "+userAvg+"%",userAvg,"var(--blue)"],["NCE prosjek - "+(nce?.avg||50)+"%",nce?.avg||50,"var(--muted)"],["Prolaznost - "+(nce?.pass||67)+"%",nce?.pass||67,"var(--gold)"]].map(([lbl,pct,col],i)=>
                e("div",{key:i,style:{marginBottom:6}},
                  e("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted)",marginBottom:2}},e("span",null,lbl.split(" - ")[0]),e("span",null,lbl.split(" - ")[1])),
                  e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},e("div",{style:{height:"100%",width:Math.min(100,pct)+"%",background:col,borderRadius:99,transition:"width 1s ease"}}))
                )
              ),
              e("div",{style:{fontSize:11,color:"var(--muted)",borderTop:"1px solid var(--bdr)",paddingTop:8,marginTop:6}},
                diff>=10?"🏆 Significantno iznad NCE prosjeka!":diff>=0?"✅ Iznad NCE prosjeka za "+(diff>=0?"+":"")+diff+"%.":diff>=-10?"⚠️ Ispod NCE prosjeka za "+Math.abs(diff)+"%.":" 📚 Daleko ispod NCE prosjeka - intenzivno vježbanje preporučeno.",
                e("span",{style:{float:"right",fontSize:10}},"Izvor: NCVVO, "+(nce?.label||"2023./2024.")+" · "+dominRaz+" razina (procjena)")
              )
            )
          );
        })(),
        // Trend + predikcija
        history.length>=2&&e("div",{style:{marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Trend rezultata"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"trend-wrap"},e(TrendChart,{history}))
        ),
        history.length>=2&&e("div",{style:{marginBottom:18}},e(GradePrediction,{history})),
        history.length>=2&&e(ScoreForecast,{history}),
        // Sim vs vježbanje
        (simHistory.length>0||vjezbaHistory.length>0)&&e("div",{style:{marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Simulacija vs Vježbanje"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:modeDiff!==null?12:0}},
            // Simulacija kartica
            e("div",{style:{
              background:"linear-gradient(135deg,rgba(248,113,113,.08),rgba(248,113,113,.03))",
              border:"1px solid rgba(248,113,113,.2)",borderRadius:14,padding:"18px 16px",position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-6,top:-8,fontSize:48,opacity:.07,lineHeight:1,userSelect:"none"}},"🎓"),
              e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
                color:"var(--red)",marginBottom:12}},"Simulacija"),
              simHistory.length===0
                ?e("div",{style:{fontSize:12,color:"var(--muted)",padding:"8px 0"}},"Još nisi rješavao/la simulaciju.")
                :e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
                  e("div",null,
                    e("div",{style:{fontFamily:"var(--fh)",fontSize:32,fontWeight:400,color:"var(--red)",lineHeight:1}},simAvg+"%"),
                    e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Prosječni rezultat")
                  ),
                  e("div",{style:{display:"flex",gap:16}},
                    e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},simHistory.length),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"ispita")
                    ),
                    [...simHistory].pop()&&e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},
                        [...simHistory].pop().pct+"%"),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"zadnji")
                    )
                  ),
                  e("div",{style:{height:4,background:"rgba(248,113,113,.15)",borderRadius:99,overflow:"hidden"}},
                    e("div",{style:{height:"100%",width:Math.min(100,simAvg||0)+"%",
                      background:"var(--red)",borderRadius:99,transition:"width .6s"}})
                  )
                )
            ),
            // Vježbanje kartica
            e("div",{style:{
              background:"linear-gradient(135deg,rgba(74,144,217,.08),rgba(74,144,217,.03))",
              border:"1px solid rgba(74,144,217,.2)",borderRadius:14,padding:"18px 16px",position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-6,top:-8,fontSize:48,opacity:.07,lineHeight:1,userSelect:"none"}},"🎯"),
              e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
                color:"var(--blue)",marginBottom:12}},"Vježbanje"),
              vjezbaHistory.length===0
                ?e("div",{style:{fontSize:12,color:"var(--muted)",padding:"8px 0"}},"Još nisi vježbao/la.")
                :e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
                  e("div",null,
                    e("div",{style:{fontFamily:"var(--fh)",fontSize:32,fontWeight:400,color:"var(--blue)",lineHeight:1}},vjezbaAvg+"%"),
                    e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Prosječni rezultat")
                  ),
                  e("div",{style:{display:"flex",gap:16}},
                    e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},vjezbaHistory.length),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"ispita")
                    ),
                    [...vjezbaHistory].pop()&&e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},
                        [...vjezbaHistory].pop().pct+"%"),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"zadnji")
                    )
                  ),
                  e("div",{style:{height:4,background:"rgba(74,144,217,.15)",borderRadius:99,overflow:"hidden"}},
                    e("div",{style:{height:"100%",width:Math.min(100,vjezbaAvg||0)+"%",
                      background:"var(--blue)",borderRadius:99,transition:"width .6s"}})
                  )
                )
            )
          ),
          modeDiff!==null&&e("div",{style:{
            display:"flex",alignItems:"center",gap:10,padding:"10px 14px",
            background:modeDiff<-5?"rgba(248,113,113,.06)":modeDiff>5?"rgba(61,214,140,.06)":"rgba(74,144,217,.06)",
            border:"1px solid "+(modeDiff<-5?"rgba(248,113,113,.2)":modeDiff>5?"rgba(61,214,140,.2)":"rgba(74,144,217,.2)"),
            borderRadius:10,fontSize:12
          }},
            e("span",{style:{fontSize:16}},modeDiff<-5?"⚠️":modeDiff>5?"🏆":"✅"),
            e("span",{style:{color:"var(--text)",lineHeight:1.5}},
              modeDiff<-5
                ?e("span",null,e("strong",null,"Razlika od "+Math.abs(modeDiff)+"%.")," Simulacija ti ide lošije - uvježbaj više ispita s timerom.")
                :modeDiff>5
                  ?e("span",null,e("strong",null,"Simulacija ti ide odlično!")," Za "+Math.abs(modeDiff)+"% bolji/a si od vježbanja.")
                  :e("span",null,e("strong",null,"Mala razlika između modova.")," Nastavi redovito.")
            )
          )
        ),
        // Distribucija ocjena
        history.length>0?e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"18px 20px",marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Distribucija ocjena"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"flex",gap:8,alignItems:"flex-end",height:100,paddingTop:20}},
            [1,2,3,4,5].map(g=>{
              const cnt=gradeDist[g]||0;
              const maxCnt=Math.max(...Object.values(gradeDist),1);
              const h=Math.round((cnt/maxCnt)*64);
              const isSel=distGrade===g;
              return e("div",{key:g,onClick:()=>cnt>0&&setDistGrade(isSel?null:g),style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:cnt>0?"pointer":"default",opacity:(distGrade&&!isSel)?.45:1,transition:"opacity .15s"}},
                cnt>0&&e("div",{style:{fontSize:11,fontWeight:700,color:GC[g]||"var(--muted)"}},cnt),
                e("div",{style:{width:"100%",height:h||4,background:cnt>0?(GC[g]||"var(--blue)"):"var(--s3)",borderRadius:"6px 6px 2px 2px",transition:"height .5s cubic-bezier(.22,1,.36,1),box-shadow .15s",minHeight:4,maxWidth:64,marginLeft:"auto",marginRight:"auto",boxShadow:isSel?"0 0 0 2px var(--text)":"none"}}),
                e("div",{style:{fontSize:12,fontWeight:700,color:GC[g]||"var(--muted)"}},GLBL[g]?.charAt(0)||g)
              );
            })
          )
        ):e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"40px 24px",marginBottom:18,textAlign:"center"}},
          e("div",{style:{fontSize:48,opacity:.3,marginBottom:12}},"📊"),
          e("div",{style:{fontSize:15,fontWeight:600,marginBottom:6}},"Statistika će se pojaviti ovdje"),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18,lineHeight:1.5}},"Riješi prvi ispit da vidiš svoju distribuciju ocjena, prosjek, povijest i personalizirane preporuke."),
          e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
        ),
        distGrade&&e("div",{style:{marginBottom:18,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:12,padding:"12px 14px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},
            e("span",{style:{fontSize:12,fontWeight:700,color:GC[distGrade]||"var(--text)"}},"Ispiti s ocjenom "+distGrade+" ("+(GLBL[distGrade]||"")+")"),
            e("button",{onClick:()=>setDistGrade(null),style:{marginLeft:"auto",background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:12,fontFamily:"var(--fb)"}},"✕ ukloni filter")
          ),
          [...history].reverse().filter(h=>h.grade===distGrade).map((h,i)=>e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,fontSize:12,padding:"6px 0",borderBottom:"1px solid var(--bdr)"}},
            e("span",{style:{fontWeight:600,flex:1}},h.examLabel),
            e("span",{style:{color:"var(--muted)"}},h.date),
            e("span",{style:{fontWeight:700,color:GC[distGrade]}},h.pct+"%")
          ))
        ),
        shareCard,
        // Povijest
        history.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Povijest ispita"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"history-list"},
            [...history].reverse().slice(0,8).map((h,i)=>
              e("div",{key:i,className:"history-item"},
                e("div",{className:"history-grade",style:{color:GC[h.grade]||"var(--gold)"}},h.grade),
                e("div",{className:"history-info"},
                  e("strong",{style:{fontSize:13,display:"block",marginBottom:2}},h.examLabel),
                  e("span",{style:{fontSize:11,color:"var(--muted)"}},h.date+" · "+h.pct+"% · "+h.cor+"/"+h.total+" točnih"+(h.mode?" · "+h.mode:""))
                ),
                e("div",{className:"history-bar-wrap"},e("div",{className:"history-bar",style:{width:h.pct+"%",background:GC[h.grade]||"var(--gold)"}})),
                e("div",{style:{fontSize:18,fontWeight:800,color:GC[h.grade]||"var(--gold)",minWidth:44,textAlign:"right"}},h.pct+"%")
              )
            )
          )
        )
      ),

      /* ── TEME ── */
      tab==="teme"&&drillTopic&&(()=>{
        const topicLabel=TOPIC_LABELS[drillTopic]||drillTopic;
        const tStat=topicStats[drillTopic]||{correct:0,total:0};
        const tPct=tStat.total?Math.round(tStat.correct/tStat.total*100):0;
        const tColor=tPct>=70?"var(--green)":tPct>=50?"var(--gold)":"var(--red)";
        const allQs=[];
        Object.values(EXAMS).forEach(exam=>{exam.qs.filter(q=>q.topic===drillTopic).forEach(q=>allQs.push({q,exam}));});
        const wrongOnTopic=Object.values(userData.errorTracker||{}).filter(er=>er.count>0&&er.topic===drillTopic).sort((a,b)=>b.count-a.count);
        return e("div",null,
          e("button",{onClick:()=>setDrillTopic(null),style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",color:"var(--text)",cursor:"pointer",marginBottom:14}},"← Natrag na teme"),
          e("div",{style:{background:"linear-gradient(135deg,var(--blue-d),transparent)",border:"1px solid var(--blue-b)",borderRadius:14,padding:"18px 20px",marginBottom:18,position:"relative",overflow:"hidden"}},
            e("div",{style:{position:"absolute",right:-4,top:-8,fontSize:60,opacity:.06,color:"var(--blue)",lineHeight:1,userSelect:"none",pointerEvents:"none"}},"∑"),
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--blue)",marginBottom:6}},"Tema"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:22,fontWeight:400,marginBottom:12}},topicLabel),
            e("div",{style:{display:"flex",gap:16,alignItems:"flex-end",marginBottom:14}},
              e("div",null,
                e("div",{style:{fontFamily:"var(--fh)",fontSize:40,fontWeight:400,color:tColor,lineHeight:1}},tPct+"%"),
                e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:4}},tStat.correct+"/"+tStat.total+" točnih")
              ),
              e("div",{style:{flex:1,paddingBottom:4}},
                e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:6}},
                  e("div",{style:{height:"100%",width:tPct+"%",background:tColor,borderRadius:99,transition:"width .5s"}})
                ),
                e("div",{style:{fontSize:11,color:"var(--muted)"}},tPct>=70?"✅ Odlično — iznad prolazne granice":tPct>=50?"⚠️ Prolazno — ima prostora za napredak":"🔴 Ispod prolazne granice — treba uvježbati")
              )
            ),
            onStartErrorSession&&e("button",{onClick:()=>startTopicSession(drillTopic,topicLabel),
              style:{width:"100%",border:"none",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:10,padding:"11px",color:"#fff",fontSize:13.5,fontWeight:700,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",boxShadow:"0 6px 16px -8px rgba(45,106,212,.5)"}},"🎯 Vježbaj ovu temu")
          ),
          wrongOnTopic.length>0&&e("div",{style:{marginBottom:18}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},e("span",null,"Tvoje greške na ovu temu ("+wrongOnTopic.length+")"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
            e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
              wrongOnTopic.slice(0,10).map((er,i)=>e("div",{key:i,style:{display:"flex",gap:10,alignItems:"flex-start",background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 10px 10px 0",padding:"10px 13px"}},
                e("div",{style:{width:22,height:22,borderRadius:6,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--red-d)",color:"var(--red)",fontSize:10,fontWeight:700}},er.count+"×"),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{fontSize:12.5,lineHeight:1.5}},parseMath(er.q)||er.q),
                  er.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Zadnji put: "+er.lastDate)
                )
              ))
            )
          ),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Pitanja iz baze ("+allQs.length+")"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"drill-q-list"},
            allQs.slice(0,30).map(({q,exam},i)=>{
              const seasonShort=exam.season==="ljeto"?"☀️":exam.season==="jesen"?"🍂":"❄️";
              const ans=(q.type==="mc"&&q.sol&&q.sol.cl)?(q.sol.cl+" — "+(q.opts[LL.indexOf(q.sol.cl)]||"")):((q.sol&&(q.sol.ans||q.sol.ex))||null);
              return e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,padding:"13px 15px",marginBottom:6}},
                e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"}},
                  e("span",{style:{fontSize:11}},seasonShort),
                  e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600}},exam.year+" · "+exam.label),
                  e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:99,background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},exam.razina==="A"?"Viša (A)":"Osnovna (B)"),
                  q.type&&q.type!=="mc"&&e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:99,background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--muted)"}},q.type==="proof"?"Dokaz":"Otvoreno")
                ),
                e("div",{style:{fontSize:13,lineHeight:1.55}},parseMath(q.q)||q.q),
                ans&&e("details",{style:{marginTop:8}},
                  e("summary",{style:{fontSize:11,color:"var(--blue)",cursor:"pointer",userSelect:"none",listStyle:"none"}},"Prikaži točan odgovor"),
                  e("div",{style:{marginTop:6,fontSize:12,color:"var(--green)",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.2)",borderRadius:6,padding:"6px 10px"}},"✓ ",e("strong",null,typeof ans==="string"?ans:String(ans)))
                )
              );
            }),
            allQs.length>30&&e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",padding:"12px",background:"var(--s2)",borderRadius:10,marginTop:4}},"Prikazano 30 od "+allQs.length+" pitanja")
          )
        );
      })(),
      tab==="teme"&&!drillTopic&&(topicList.length===0?noData:
        e("div",null,
          e("div",{style:{display:"flex",gap:14,marginBottom:14,fontSize:11,color:"var(--muted)",alignItems:"center",flexWrap:"wrap"}},
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--green)"}}),e("span",null,"≥70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--gold)"}}),e("span",null,"50-70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--red)"}}),e("span",null,"<50%")),
            e("div",{style:{marginLeft:"auto"}},"Sortirano: najslabije prvo")
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            topicList.map(t=>{
              const col=t.pct>=70?"var(--green)":t.pct>=50?"var(--gold)":"var(--red)";
              return e("div",{key:t.key,
                onClick:()=>setDrillTopic(t.key),
                style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+col,borderRadius:"0 12px 12px 0",padding:"12px 14px",cursor:"pointer",transition:"background .15s,border-color .15s"},
                onMouseEnter:ev=>{ev.currentTarget.style.background="var(--s2)";},
                onMouseLeave:ev=>{ev.currentTarget.style.background="";}
              },
                e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
                  e("div",{style:{flex:1,minWidth:0,fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t.label),
                  e("div",{style:{fontFamily:"var(--fh)",fontSize:15,fontWeight:400,color:col,flexShrink:0}},t.pct+"%"),
                  e("div",{style:{fontSize:14,color:"var(--muted)",flexShrink:0}},"›")
                ),
                e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:8}},
                  e("div",{style:{height:"100%",width:t.pct+"%",background:col,borderRadius:99,transition:"width .5s cubic-bezier(.4,0,.2,1)"}})
                ),
                e("div",{style:{display:"flex",alignItems:"center",gap:8}},
                  e("div",{style:{fontSize:11,color:"var(--muted)",flex:1}},t.correct+"/"+t.total+" točnih"),
                  onStartErrorSession&&e("button",{onClick:ev=>{ev.stopPropagation();startTopicSession(t.key,t.label);},
                    style:{border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",cursor:"pointer",fontFamily:"var(--fb)",fontSize:11.5,fontWeight:700,borderRadius:8,padding:"6px 12px",flexShrink:0}},
                    "🎯 Vježbaj temu")
                )
              );
            })
          ),
          e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:14,lineHeight:1.5}},"Prikazane su teme koje si već vježbao/la. Riješi više ispita za potpuniju sliku.")
        )
      ),

      /* ── GREŠKE ── */
      tab==="greške"&&(errors.length===0
        ?(history.length===0
          ?noData
          :e("div",{style:{textAlign:"center",padding:"40px 0"}},
              e("div",{style:{fontSize:48,marginBottom:12}},"🎉"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:6}},"Nema ponovljenih grešaka"),
              e("div",{style:{fontSize:13,color:"var(--muted)"}},"Odličan rad - nastavi ovim tempom!")
            )
          )
        :(()=>{
            // Grupiraj po razini → temi
            const byRazina={A:{label:"Viša razina (A)",errors:[],col:"var(--blue)",bg:"var(--blue-d)",bdr:"var(--blue-b)"},
                            B:{label:"Osnovna razina (B)",errors:[],col:"var(--teal)",bg:"var(--teal-d)",bdr:"rgba(52,209,191,.25)"}};
            errors.forEach(err=>{
              const razina=err.examKey?.includes("_A")?"A":"B";
              byRazina[razina].errors.push(err);
            });
            const totalErrors=errors.reduce((s,e)=>s+e.count,0);
            const activeRaz=["A","B"].filter(r=>byRazina[r].errors.length>0);

            return e("div",null,
              // Summary
              e("div",{style:{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}},
                [{l:"Pitanja s greškama",v:errors.length,c:"var(--red)"},
                 {l:"Ukupno pogrešnih",v:totalErrors,c:"var(--gold)"},
                 {l:"Tema zahvaćeno",v:[...new Set(errors.map(e=>e.topic))].length,c:"var(--blue)"}
                ].map((s,i)=>e("div",{key:i,style:{flex:"1 1 80px",background:"var(--s1)",
                  border:"1px solid var(--bdr)",borderRadius:12,padding:"12px 14px",textAlign:"center"}},
                  e("div",{style:{fontFamily:"var(--fh)",fontSize:24,color:s.c,lineHeight:1,marginBottom:3}},s.v),
                  e("div",{style:{fontSize:10,fontWeight:600,letterSpacing:".05em",color:"var(--muted)",textTransform:"uppercase"}},s.l)
                ))
              ),

              onStartErrorSession&&e("button",{onClick:()=>startErrorsSession(errors.slice(0,40)),
                style:{width:"100%",marginBottom:18,border:"none",cursor:"pointer",fontFamily:"var(--fb)",
                  borderRadius:12,padding:"13px 18px",color:"#fff",fontSize:14,fontWeight:700,
                  background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",
                  boxShadow:"0 8px 20px -8px rgba(45,106,212,.5)",display:"flex",alignItems:"center",justifyContent:"center",gap:8}},
                "🎯 Vježbaj sve greške ("+Math.min(errors.length,40)+")"),

              // Razine
              ["A","B"].map(razina=>{
                const rd=byRazina[razina];
                if(rd.errors.length===0) return null;

                // Grupiraj po temi unutar razine
                const byTopic={};
                rd.errors.forEach(err=>{
                  const t=err.topic||"ostalo";
                  if(!byTopic[t]) byTopic[t]={topic:t,label:TOPIC_LABELS[t]||t,errors:[],totalCount:0};
                  byTopic[t].errors.push(err);
                  byTopic[t].totalCount+=err.count;
                });
                const topicGroups=Object.values(byTopic).sort((a,b)=>b.totalCount-a.totalCount);
                const razinaTotalErrors=rd.errors.reduce((s,e)=>s+e.count,0);
                const isRazinaOpen=activeRaz.length===1||openTopic===("razina_"+razina);

                return e("div",{key:razina,style:{marginBottom:12}},
                  // Razina header
                  e("div",{
                    onClick:()=>setOpenTopic(o=>o===("razina_"+razina)?null:("razina_"+razina)),
                    style:{
                      display:"flex",alignItems:"center",gap:12,
                      padding:"14px 18px",cursor:"pointer",
                      background:isRazinaOpen?"var(--s2)":"var(--s1)",
                      border:"1px solid var(--bdr)",
                      borderLeft:"4px solid "+rd.col,
                      borderRadius:isRazinaOpen?"0 14px 0 0":"0 14px 14px 0",
                      transition:"all .15s"
                    },
                    onMouseEnter:ev=>{if(!isRazinaOpen)ev.currentTarget.style.background="var(--s2)"},
                    onMouseLeave:ev=>{if(!isRazinaOpen)ev.currentTarget.style.background="var(--s1)"}
                  },
                    e("div",{style:{
                      width:36,height:36,borderRadius:10,flexShrink:0,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      background:rd.bg,border:"1px solid "+rd.bdr,
                      fontSize:14,fontWeight:800,color:rd.col
                    }},razina),
                    e("div",{style:{flex:1}},
                      e("div",{style:{fontSize:14,fontWeight:700,color:rd.col}},rd.label),
                      e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},
                        rd.errors.length+" pitanja · "+razinaTotalErrors+" grešaka · "+topicGroups.length+" tema")
                    ),
                    e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,
                      transition:"transform .2s",transform:isRazinaOpen?"rotate(180deg)":"rotate(0deg)",
                      display:"inline-block"}},"▾")
                  ),

                  // Teme unutar razine
                  isRazinaOpen&&e("div",{style:{
                    border:"1px solid var(--bdr)",borderTop:"none",
                    borderRadius:"0 0 14px 14px",overflow:"hidden"
                  }},
                    topicGroups.map(({topic,label,errors:terrs,totalCount},ti)=>{
                      const topicKey=razina+"_"+topic;
                      const isTopicOpen=openTopic===topicKey;
                      const isWorst=ti===0;
                      const borderCol=isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--bdr2)";

                      return e("div",{key:topic,style:{borderBottom:ti<topicGroups.length-1?"1px solid var(--bdr)":"none"}},
                        // Tema header
                        e("div",{
                          onClick:()=>setOpenTopic(o=>o===topicKey?("razina_"+razina):topicKey),
                          style:{
                            display:"flex",alignItems:"center",gap:12,
                            padding:"11px 18px 11px 22px",cursor:"pointer",
                            background:isTopicOpen?"rgba(0,0,0,.04)":"var(--s1)",
                            borderLeft:"3px solid "+borderCol,
                            transition:"background .15s"
                          },
                          onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
                          onMouseLeave:ev=>ev.currentTarget.style.background=isTopicOpen?"rgba(0,0,0,.04)":"var(--s1)"
                        },
                          e("div",{style:{
                            width:28,height:28,borderRadius:7,flexShrink:0,
                            display:"flex",alignItems:"center",justifyContent:"center",
                            background:isWorst?"var(--red-d)":totalCount>=3?"var(--gold-d)":"var(--s2)",
                            fontSize:11,fontWeight:800,
                            color:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"
                          }},totalCount+"×"),
                          e("div",{style:{flex:1}},
                            e("div",{style:{fontSize:13,fontWeight:600}},label),
                            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}},terrs.length+" pitanja")
                          ),
                          e("div",{style:{width:50,height:3,background:"var(--s3)",borderRadius:99,overflow:"hidden",flexShrink:0}},
                            e("div",{style:{height:"100%",borderRadius:99,
                              width:Math.min(100,Math.round(totalCount/razinaTotalErrors*100)*3)+"%",
                              background:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"}})
                          ),
                          e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,marginLeft:6,
                            transition:"transform .2s",transform:isTopicOpen?"rotate(180deg)":"rotate(0deg)",
                            display:"inline-block"}},"▾")
                        ),

                        // Pitanja unutar teme
                        isTopicOpen&&e("div",{style:{background:"var(--s2)",borderTop:"1px solid var(--bdr)"}},
                          onStartErrorSession&&e("button",{onClick:ev=>{ev.stopPropagation();startErrorsSession(terrs);},
                            style:{margin:"10px 18px 6px 24px",border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",
                              cursor:"pointer",fontFamily:"var(--fb)",fontSize:12,fontWeight:700,borderRadius:8,padding:"7px 14px"}},
                            "🎯 Vježbaj ovih "+terrs.length+" pitanja"),
                          terrs.map((err,ei)=>e("div",{key:ei,style:{
                            display:"flex",alignItems:"flex-start",gap:10,
                            padding:"10px 18px 10px 24px",
                            borderBottom:ei<terrs.length-1?"1px solid var(--bdr)":"none"
                          }},
                            e("div",{style:{
                              width:22,height:22,borderRadius:6,flexShrink:0,
                              display:"flex",alignItems:"center",justifyContent:"center",
                              background:err.count>=3?"var(--red-d)":"var(--s3)",
                              fontSize:10,fontWeight:700,
                              color:err.count>=3?"var(--red)":"var(--muted)"
                            }},err.count+"×"),
                            e("div",{style:{flex:1,minWidth:0}},
                              e("div",{style:{fontSize:12,lineHeight:1.55,color:"var(--text)"}},
                                parseMath(err.q)||err.q),
                              err.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},
                                "Zadnji put: "+err.lastDate)
                            )
                          ))
                        )
                      );
                    })
                  )
                );
              })
            );
          })()
      ),

      /* ── NAJTEŽA ── */
      tab==="teska"&&(history.length===0?noData:(()=>{
        const hardest=errors.slice(0,20);
        if(hardest.length===0) return e("div",{style:{textAlign:"center",padding:"40px 0"}},e("div",{style:{fontSize:32,marginBottom:12}},"🏆"),e("div",{style:{fontSize:14,color:"var(--muted)"}},"Nema pogrešnih odgovora — odličan rad!"));
        const seasonLbl=ss=>ss==="ljeto"?"Ljetni":ss==="zima"?"Zimski":"Jesenski";
        return e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},e("span",null,"Najteža pitanja — po broju grešaka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          onStartErrorSession&&e("button",{onClick:()=>startErrorsSession(hardest),
            style:{width:"100%",marginBottom:16,border:"none",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:12,padding:"13px 18px",color:"#fff",fontSize:14,fontWeight:700,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",boxShadow:"0 8px 20px -8px rgba(45,106,212,.5)"}},
            "🎯 Vježbaj "+hardest.length+" najtežih"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            hardest.map((err,i)=>{
              const ex=EXAMS[err.examKey];
              const q=ex&&ex.qs.find(qq=>String(qq.id)===String(err.qid));
              const exLabel=ex?(ex.year+" · "+seasonLbl(ex.season)+" ("+ex.razina+")"):err.examKey;
              const ans=(q&&q.type==="mc"&&q.sol&&q.sol.cl)?(q.sol.cl+" — "+(q.opts[LL.indexOf(q.sol.cl)]||"")):((q&&q.sol&&(q.sol.ans||q.sol.ex))||null);
              return e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 12px 12px 0",padding:"12px 14px",display:"flex",gap:12,alignItems:"flex-start"}},
                e("div",{style:{minWidth:44,height:44,borderRadius:10,background:"var(--red-d)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(248,113,113,.2)"}},
                  e("div",{style:{fontSize:15,fontWeight:800,color:"var(--red)",lineHeight:1}},err.count+"×"),
                  e("div",{style:{fontSize:9,color:"var(--muted)"}},err.count===1?"greška":"grešaka")
                ),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{display:"flex",gap:6,marginBottom:4,flexWrap:"wrap",alignItems:"center"}},
                    e("span",{className:"topic-tag",style:{fontSize:10}},TOPIC_LABELS[err.topic]||err.topic),
                    e("span",{style:{fontSize:10,color:"var(--muted)"}},exLabel)
                  ),
                  e("div",{style:{fontSize:13,lineHeight:1.5}},parseMath(err.q)||err.q),
                  ans&&e("details",{style:{marginTop:6}},
                    e("summary",{style:{fontSize:11,color:"var(--blue)",cursor:"pointer",userSelect:"none",listStyle:"none"}},"Prikaži točan odgovor"),
                    e("div",{style:{marginTop:6,fontSize:11,color:"var(--green)",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.2)",borderRadius:6,padding:"5px 9px",display:"inline-block"}},"✓ ",e("strong",null,typeof ans==="string"?ans:String(ans)))
                  )
                )
              );
            })
          )
        );
      })()),

      tab==="heatmap"&&(history.length===0?noData:(()=>{
        const dateMap={};
        history.forEach(h=>{
          if(!h.date) return;
          if(!dateMap[h.date]) dateMap[h.date]={exams:0,totalPct:0};
          dateMap[h.date].exams++;
          dateMap[h.date].totalPct+=h.pct||0;
        });
        function hrToDate(s){if(!s) return null;const p=s.replace(/\./g,"").trim().split(/\s+/);if(p.length<3) return null;return new Date(parseInt(p[2]),parseInt(p[1])-1,parseInt(p[0]));}
        function dateToHr(d){return d.toLocaleDateString("hr");}
        const today=new Date();today.setHours(0,0,0,0);

        // Streak stats
        const totalDays=Object.keys(dateMap).length;
        const maxStreak=(()=>{
          const dates=Object.keys(dateMap).map(d=>hrToDate(d)).filter(Boolean).sort((a,b)=>a-b);
          let ms=0,cs=0,prev=null;
          dates.forEach(d=>{if(prev&&(d-prev)===86400000)cs++;else cs=1;if(cs>ms)ms=cs;prev=d;});
          return ms;
        })();

        // Kalendar za odabrani mjesec
        const {y,m}=viewMonth;
        const monthNames=["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj",
          "Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"];
        const dayNames=["Pon","Uto","Sri","Čet","Pet","Sub","Ned"];

        // Dani u odabranom mjesecu
        const firstDay=new Date(y,m,1);
        const lastDay=new Date(y,m+1,0);
        // Koji dan tjedna je 1. (0=ned→6, 1=pon→0, ...)
        const startDow=(firstDay.getDay()+6)%7; // pretvori u pon=0
        const daysInMonth=lastDay.getDate();

        // Izgradi grid: popuni prazne do prvog dana
        const cells=[];
        for(let i=0;i<startDow;i++) cells.push(null);
        for(let d=1;d<=daysInMonth;d++){
          const date=new Date(y,m,d);
          const dateStr=dateToHr(date);
          cells.push({day:d,dateStr,data:dateMap[dateStr]||null,
            isToday:date.toDateString()===today.toDateString(),
            isFuture:date>today});
        }
        // Dopuni do punog tjedna
        while(cells.length%7!==0) cells.push(null);
        const weeks=[];
        for(let i=0;i<cells.length;i+=7) weeks.push(cells.slice(i,i+7));

        // Navigacija: može li ići naprijed/nazad
        const canPrev=!(y===today.getFullYear()-2&&m===0);
        const canNext=!(y===today.getFullYear()&&m===today.getMonth());

        function prevMonth(){setViewMonth(({y,m})=>m===0?{y:y-1,m:11}:{y,m:m-1});}
        function nextMonth(){setViewMonth(({y,m})=>m===11?{y:y+1,m:0}:{y,m:m+1});}

        // Aktivni dani u ovom mjesecu
        const activeDaysThisMonth=cells.filter(c=>c&&c.data).length;

        return e("div",null,
          // Streak kartice
          e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:8,marginBottom:18}},
            [{label:"Aktivni streak",val:(userData.streak||0)+"🔥",col:"var(--gold)"},
             {label:"Rekord",val:maxStreak+" dana",col:"var(--blue)"},
             {label:"Aktivni dani",val:totalDays,col:"var(--green)"},
             {label:"Ovaj mjesec",val:activeDaysThisMonth+" dana",col:"var(--teal)"}
            ].map((s,i)=>e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",
              borderRadius:10,padding:"10px 12px",textAlign:"center"}},
              e("div",{style:{fontSize:18,fontWeight:800,color:s.col,fontFamily:"var(--fh)",lineHeight:1,marginBottom:3}},s.val),
              e("div",{style:{fontSize:10,color:"var(--muted)",letterSpacing:".04em"}},s.label)
            ))
          ),

          // Navigacija mjeseca
          e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}},
            e("button",{
              onClick:prevMonth,disabled:!canPrev,
              style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8,
                width:32,height:32,cursor:canPrev?"pointer":"not-allowed",
                fontSize:16,color:canPrev?"var(--text)":"var(--muted)",
                opacity:canPrev?1:.4,display:"flex",alignItems:"center",justifyContent:"center"}
            },"‹"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:18,fontWeight:400}},
              monthNames[m]+" "+y),
            e("button",{
              onClick:nextMonth,disabled:!canNext,
              style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8,
                width:32,height:32,cursor:canNext?"pointer":"not-allowed",
                fontSize:16,color:canNext?"var(--text)":"var(--muted)",
                opacity:canNext?1:.4,display:"flex",alignItems:"center",justifyContent:"center"}
            },"›")
          ),

          // Tap detalj (mobile-friendly)
          calTooltip&&e("div",{style:{marginBottom:12,background:"var(--s2)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+(calTooltip.col||"var(--blue)"),borderRadius:"0 10px 10px 0",padding:"10px 14px",display:"flex",alignItems:"center",gap:10}},
            e("span",{style:{fontSize:13,fontWeight:700}},calTooltip.d),
            e("span",{style:{fontSize:12,color:"var(--muted)"}},calTooltip.exams+(calTooltip.exams===1?" ispit":" ispita")+" · prosjek "+calTooltip.avg+"%"),
            e("button",{onClick:()=>setCalTooltip(null),style:{marginLeft:"auto",background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:13,fontFamily:"var(--fb)"}},"✕")
          ),
          // Kalendar grid
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,overflow:"hidden"}},
            // Nazivi dana
            e("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",
              borderBottom:"1px solid var(--bdr)",background:"var(--s2)"}},
              dayNames.map(d=>e("div",{key:d,style:{
                textAlign:"center",padding:"8px 0",
                fontSize:11,fontWeight:700,letterSpacing:".06em",
                color:"var(--muted)",textTransform:"uppercase"
              }},d))
            ),
            // Tjedni
            weeks.map((week,wi)=>e("div",{key:wi,style:{
              display:"grid",gridTemplateColumns:"repeat(7,1fr)",
              borderBottom:wi<weeks.length-1?"1px solid var(--bdr)":"none"
            }},
              week.map((cell,di)=>{
                if(!cell) return e("div",{key:di,style:{
                  minHeight:56,background:"var(--s2)",
                  borderRight:di<6?"1px solid var(--bdr)":"none",
                  opacity:.3
                }});

                const hasData=!!cell.data;
                const avgPct=hasData?Math.round(cell.data.totalPct/cell.data.exams):null;
                const dotCol=avgPct>=70?"var(--green)":avgPct>=50?"var(--gold)":"var(--red)";

                return e("div",{key:di,style:{
                  minHeight:56,padding:"6px 8px",
                  borderRight:di<6?"1px solid var(--bdr)":"none",
                  background:cell.isToday?"color-mix(in srgb,var(--blue) 9%,transparent)":hasData?"color-mix(in srgb,var(--blue) 4%,transparent)":"",
                  position:"relative",
                  cursor:hasData?"pointer":"default",
                  transition:"background .15s"
                },
                  onClick:()=>{if(hasData)setCalTooltip(p=>(p&&p.d===cell.dateStr)?null:{d:cell.dateStr,exams:cell.data.exams,avg:avgPct,col:dotCol});},
                  title:hasData?cell.dateStr+" - "+cell.data.exams+" ispita · prosjek "+avgPct+"%":cell.dateStr,
                  onMouseEnter:ev=>{if(hasData)ev.currentTarget.style.background="color-mix(in srgb,var(--blue) 13%,transparent)"},
                  onMouseLeave:ev=>{ev.currentTarget.style.background=cell.isToday?"color-mix(in srgb,var(--blue) 9%,transparent)":hasData?"color-mix(in srgb,var(--blue) 4%,transparent)":""}
                },
                  // Broj dana
                  e("div",{style:{
                    fontSize:12,fontWeight:cell.isToday?700:400,
                    color:cell.isFuture?"var(--muted)":cell.isToday?"var(--blue)":"var(--text)",
                    lineHeight:1,marginBottom:4
                  }},cell.day),
                  // Indikatori ispita
                  hasData&&e("div",{style:{display:"flex",flexDirection:"column",gap:2}},
                    // Dot + broj ispita
                    e("div",{style:{display:"flex",alignItems:"center",gap:3}},
                      e("div",{style:{width:6,height:6,borderRadius:"50%",background:dotCol,flexShrink:0}}),
                      e("div",{style:{fontSize:10,fontWeight:600,color:dotCol}},
                        cell.data.exams+(cell.data.exams===1?" ispit":" ispita"))
                    ),
                    // Prosjek
                    e("div",{style:{fontSize:10,color:"var(--muted)"}},avgPct+"%")
                  ),
                  // Today marker
                  cell.isToday&&e("div",{style:{
                    position:"absolute",top:4,right:6,
                    width:4,height:4,borderRadius:"50%",
                    background:"var(--blue)"
                  }})
                );
              })
            ))
          ),

          // Legenda
          e("div",{style:{display:"flex",gap:14,marginTop:10,fontSize:11,color:"var(--muted)",flexWrap:"wrap",alignItems:"center"}},
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--green)"}}),
              e("span",null,"≥70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--gold)"}}),
              e("span",null,"50-70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--red)"}}),
              e("span",null,"<50%")),
            e("span",{style:{marginLeft:"auto"}},"Dodirni dan za detalje")
          )
        );
      })()),

      /* ── SAVJETI ── */
      tab==="savjeti"&&e("div",null,

        history.length===0&&noData,

        // Preporuke
        history.length>0&&e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Personalizirane preporuke"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            getRecommendations().map((r,i)=>{
              const badgeMeta={
                urgent:{bg:"var(--red-d)",border:"rgba(248,113,113,.25)",color:"var(--red)",label:"Prioritet",barBg:"rgba(248,113,113,.15)"},
                good:{bg:"var(--green-d)",border:"rgba(61,214,140,.25)",color:"var(--green)",label:"Odlično",barBg:"rgba(61,214,140,.1)"},
                tip:{bg:"var(--blue-d)",border:"var(--blue-b)",color:"var(--blue)",label:"Savjet",barBg:"rgba(74,144,217,.08)"}
              }[r.badge]||{bg:"var(--s2)",border:"var(--bdr)",color:"var(--muted)",label:"Info",barBg:"var(--s2)"};

              return e("div",{key:i,style:{
                background:"var(--s1)",
                border:"1px solid var(--bdr)",
                borderLeft:"3px solid "+badgeMeta.color,
                borderRadius:"0 12px 12px 0",
                padding:"14px 16px",
                display:"flex",gap:14,alignItems:"flex-start",
                transition:"border-color .15s"
              }},
                // Ikona u obojenoj kutijici
                e("div",{style:{
                  width:40,height:40,borderRadius:10,flexShrink:0,
                  background:badgeMeta.bg,
                  border:"1px solid "+badgeMeta.border,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:20
                }},r.icon),
                // Sadržaj
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}},
                    e("div",{style:{fontSize:13,fontWeight:700,color:"var(--text)"}},r.title),
                    e("span",{style:{
                      fontSize:10,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",
                      padding:"2px 8px",borderRadius:99,
                      background:badgeMeta.bg,border:"1px solid "+badgeMeta.border,
                      color:badgeMeta.color,whiteSpace:"nowrap"
                    }},badgeMeta.label)
                  ),
                  e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},r.desc)
                )
              );
            })
          )
        ),

        // Tempo po temama
        topicTimes.length>0&&e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Tempo po temama"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"16px 18px",display:"flex",flexDirection:"column",gap:10}},
            topicTimes.slice(0,6).map((t,i)=>{const slow=t.avg>TIME_BUDGET;const col=slow?"var(--red)":t.avg>TIME_BUDGET*0.6?"var(--gold)":"var(--green)";return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:12}},
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:12.5,fontWeight:600,marginBottom:4}},t.label),
                e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                  e("div",{style:{height:"100%",width:Math.min(100,Math.round(t.avg/(TIME_BUDGET*1.5)*100))+"%",background:col,borderRadius:99}}))
              ),
              e("div",{style:{textAlign:"right",flexShrink:0,minWidth:64}},
                e("div",{style:{fontSize:13,fontWeight:700,color:col}},t.avg+"s"),
                e("div",{style:{fontSize:10,color:"var(--muted)"}},slow?"presporo":"ok"))
            );}),
            e("div",{style:{fontSize:11,color:"var(--muted)",borderTop:"1px solid var(--bdr)",paddingTop:8}},"Budžet ~"+TIME_BUDGET+"s/pitanje · crveno = presporo, treba uvježbati brzinu")
          )
        ),

        // Brzina rješavanja
        allTimes.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Brzina rješavanja"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{
            background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"20px"
          }},
            e("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:18}},
              [
                {val:avgTime+"s",lbl:"Prosjek po pitanju",col:"var(--blue)"},
                {val:avgTime<=60?"Brzo":avgTime<=120?"Dobro":"Sporo",
                 lbl:"Tempo",col:avgTime<=60?"var(--green)":avgTime<=120?"var(--gold)":"var(--red)"},
                {val:Math.round(180*60/(avgTime||60)),lbl:"Pitanja za 180 min",col:"var(--muted)"}
              ].map((s,i)=>e("div",{key:i,style:{textAlign:"center",padding:"12px 8px",
                background:"var(--s2)",borderRadius:10}},
                e("div",{style:{fontFamily:"var(--fh)",fontSize:26,fontWeight:400,
                  color:s.col,lineHeight:1,marginBottom:4}},s.val),
                e("div",{style:{fontSize:11,color:"var(--muted)"}},s.lbl)
              ))
            ),
            // Vizualna skala brzine
            e("div",null,
              e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:6}},
                "Benchmark: ≤60s brzo · 60-120s dobro · >120s sporo"),
              e("div",{style:{position:"relative",height:8,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                // Gradijent skala
                e("div",{style:{position:"absolute",inset:0,
                  background:"linear-gradient(90deg,var(--green) 0%,var(--green) 33%,var(--gold) 33%,var(--gold) 66%,var(--red) 66%)",
                  opacity:.25}}),
                // Marker trenutne brzine
                e("div",{style:{
                  position:"absolute",top:0,bottom:0,
                  left:Math.min(95,Math.round(avgTime/180*100))+"%",
                  width:3,background:"var(--bg,#060910)",borderRadius:99,
                  boxShadow:"0 0 4px rgba(0,0,0,.4)"
                }})
              ),
              e("div",{style:{display:"flex",justifyContent:"space-between",
                fontSize:10,color:"var(--muted)",marginTop:4}},
                e("span",null,"0s"),e("span",null,"60s"),e("span",null,"120s"),e("span",null,"180s+")
              )
            )
          )
        )
      )
    )
  );
}
function GradePrediction({history}){
  if(!history||history.length<2) return e("div",{className:"trend-empty"},
    "📊 Trebaš barem 2 riješena ispita za predviđanje.");

  const GRADE_THRESH={5:85,4:70,3:55,2:40};
  const recent=history.slice(-5);
  const avgPct=Math.round(recent.reduce((a,h)=>a+h.pct,0)/recent.length);
  const weights=recent.map((_,i)=>i+1);
  const totalW=weights.reduce((a,b)=>a+b,0);
  const weightedPct=Math.round(recent.reduce((a,h,i)=>a+h.pct*weights[i],0)/totalW);
  const trend=history.length>=3
    ?(history.slice(-2).reduce((a,h)=>a+h.pct,0)/2)-(history.slice(-4,-2).reduce((a,h)=>a+h.pct,0)/Math.min(2,history.slice(-4,-2).length))
    :0;
  const predicted=Math.max(0,Math.min(100,Math.round(weightedPct+trend*0.3)));
  const g=predicted>=85?5:predicted>=70?4:predicted>=55?3:predicted>=40?2:1;
  const gc=GC[g];
  const confidence=history.length>=5?"Visoka":history.length>=3?"Srednja":"Niska";
  const confColor=confidence==="Visoka"?"var(--green)":confidence==="Srednja"?"var(--gold)":"var(--muted)";
  const best=Math.max(...history.map(h=>h.pct));
  const worst=Math.min(...history.map(h=>h.pct));
  const trendDir=trend>2?"↑ Rasteš":trend<-2?"↓ Padaš":"→ Stagniraš";
  const trendColor=trend>2?"var(--green)":trend<-2?"var(--red)":"var(--muted)";

  return e("div",null,
    e("div",{className:"pred-card"},
      e("div",{className:"pred-grade",style:{color:gc}},g),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:gc,marginBottom:4}},GLBL[g]||""),
      e("div",{className:"pred-label"},"Predviđena ocjena na temelju zadnjih "+recent.length+" ispita"),
      e("div",{className:"pred-confidence",style:{background:confColor+"20",color:confColor,border:"1px solid "+confColor+"40"}},
        "Pouzdanost: "+confidence+" · "+predicted+"%"
      ),
      (()=>{const sw=Math.round((best-worst)*(history.length<5?0.3:0.2));const lo=Math.max(0,predicted-sw),hi=Math.min(100,predicted+sw);return e("div",{style:{fontSize:12,color:"rgba(255,255,255,.78)",marginTop:8}},"Očekivani raspon: "+lo+"–"+hi+"%"+(history.length<5?" · riješi još "+(5-history.length)+" ispita za precizniju procjenu":""));})(),
      e("div",{className:"pred-breakdown"},
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Ponderirani prosjek"),
          e("div",{className:"pred-bd-val"},weightedPct+"%")),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Trend"),
          e("div",{className:"pred-bd-val",style:{color:trendColor}},trendDir)),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Najbolji ispit"),
          e("div",{className:"pred-bd-val",style:{color:"var(--green)"}},best+"%")),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Najslabiji ispit"),
          e("div",{className:"pred-bd-val",style:{color:"var(--red)"}},worst+"%"))
      )
    )
  );
}
export { PDFReportScreen, ScoreForecast, StatsScreen, AnalyticsPanel, GradePrediction };
