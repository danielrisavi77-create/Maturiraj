// @ts-nocheck
'use client';
/* 5.4 (Sim 4/4): ekran rezultata izdvojen iz sim.tsx bez promjene ponasanja.
   Ovdje zive hero s ocjenom i XP-om, usporedba s prijasnjim pokusajima, razrada
   po temama, kalibracija samopouzdanja, AI analiza rezultata, pregled zadataka
   sa samoocjenom opisnih zadataka, podsjetnik na greske i sljedeci koraci.
   Stanje koje postoji samo na ekranu rezultata (filtar pregleda, sazimanje,
   samoocjena, AI odgovor) preselilo je ovamo jer ga aktivni ispit ne dira;
   ostalo (odgovori, oznake, vremena, tagovi gresaka) stize propsima iz Sim-a.
   JSX, klase, stilovi, stringovi i izracuni prepisani su doslovno iz Sim-a. */
import React from 'react';
import { __MAT, IS_PRO, IS_PAID, planCta, TOPIC_LABELS, MAT_RESULTS_UPGRADE_URL } from '../core/state';
import { __imgKey, __aiErrMsg, __aiPost } from '../core/runtime';
import { renderOptText, renderQText } from '../core/mathText';
import { GLBL, GC, TLBL, LL } from '../core/ui';
import { chk, hasAns } from '../core/grading';
import { grade, calcXpGain } from '../core/progress';
import { CountUp, AnimatedRing } from '../viz/charts';
import { ERROR_TAGS, WeakSpotTips } from '../tools/hints';
import { ShareCard, UpgradeModal } from '../tools/modals';
import { AnswerHelper, MaturaRubric } from '../tools/question';
// Zakljucani placeholder rezultata dijeli se s ostalim predmetima (hrv/eng/soc) umjesto
// vlastite kopije; engine se bundla kroz Next, pa je obican import u redu.
import LockedResultsBlock from '@/components/discere/paywall/LockedResultsBlock';
const{createElement:e,useState,useEffect,Fragment}=React;

export function ResultsView({exam,QSX,answers,flag,conf,qTimes,errorTags,userData,done,
  onExit,onHome,onStats,onFilter,onPracticeErrors,onPracticeSimilar,onPatchResult}){
  const[revFilter,setRevFilter]=useState("all");
  const[revCol,setRevCol]=useState({});
  const[selfGrade,setSelfGrade]=useState({});
  const[showUpgradeR,setShowUpgradeR]=useState(false);
  const[aiRes,setAiRes]=useState(null);
  const[aiResState,setAiResState]=useState("idle");
  React.useEffect(()=>{
    if(!done||typeof onPatchResult!=="function")return;
    const aQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const sQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gQ=sQ.filter(q=>selfGrade[q.id]!==undefined);
    if(gQ.length===0)return;
    const gT=sQ.filter(q=>selfGrade[q.id]===true);
    const tp=[...aQ,...gQ].reduce((s2,q)=>s2+(q.points||1),0);
    const ep=aQ.reduce((s2,q)=>s2+(chk(q,answers[q.id])===true?(q.points||1):0),0)+gT.reduce((s2,q)=>s2+(q.points||1),0);
    const pc=Math.round(ep/tp*100)||0;
    const cr=aQ.filter(q=>chk(q,answers[q.id])===true).length+gT.length;
    const tot=aQ.length+gQ.length;
    const tb={};
    [...aQ,...gQ].forEach(q=>{const t=q.topic||"ostalo";if(!tb[t])tb[t]={correct:0,total:0,points:0,earned:0};
      tb[t].total++;tb[t].points+=(q.points||1);
      const ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
      if(ok){tb[t].correct++;tb[t].earned+=(q.points||1);}});
    onPatchResult({pct:pc,grade:grade(pc),cor:cr,total:tot,topic_breakdown:tb});
  },[selfGrade,done]);
    const autoQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const selfQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gradedQ=selfQ.filter(q=>selfGrade[q.id]!==undefined);
    const gradedTrue=selfQ.filter(q=>selfGrade[q.id]===true);
    const gradedFalse=selfQ.filter(q=>selfGrade[q.id]===false);
    const ungraded=selfQ.length-gradedQ.length;
    const totalPoints=[...autoQ,...gradedQ].reduce((s,q)=>s+(q.points||1),0);
    const earnedPoints=autoQ.reduce((s,q)=>{
      const ok=chk(q,answers[q.id]);
      return s+(ok===true?(q.points||1):0);
    },0)+gradedTrue.reduce((s,q)=>s+(q.points||1),0);
    const pct=Math.round(earnedPoints/totalPoints*100)||0;
    const g=grade(pct);
    const gc=GC[g];
    const heroMsg=pct>=90?"Vrhunski! Ovo je razina za samouvjeren izlazak na maturu. 🏆"
      :pct>=75?"Odličan rezultat — još malo finog brušenja i petica je tu."
      :pct>=50?"Solidno! Pogledaj teme ispod — tu se skrivaju najlakši dodatni bodovi."
      :pct>=25?"Dobar početak. Svaki riješeni ispit otkriva gdje se gube bodovi — kreni od najslabije teme."
      :"Svaki ispit je podatak, ne presuda. \"Vježbaj greške\" je najbrži put do napretka.";
    const cor=autoQ.filter(q=>chk(q,answers[q.id])===true).length+gradedTrue.length;
    const scoredN=autoQ.length+gradedQ.length;
    const manualQ=QSX.filter(q=>q.type==="proof"||q.type==="sa"||q.type==="pa");
    // Ocjena, postotak, bodovi i XP su besplatni; razrada (tocni odgovori, obrazlozenja,
    // analiza po temama, savjeti, vjezbanje gresaka) ide od Standard plana navise.
    const canSeeDetails=IS_PAID;

    // Update user data  -  poziva se iz finishExam()
    const wrongAutoQ=autoQ.filter(q=>chk(q,answers[q.id])===false);
    const flaggedQ=QSX.filter(q=>flag[q.id]);
    const overconfQ=wrongAutoQ.filter(q=>conf[q.id]===2);
    const _revShow=new Set((revFilter==="wrong"?[...wrongAutoQ,...gradedFalse]:revFilter==="flag"?flaggedQ:revFilter==="manual"?selfQ:revFilter==="overconf"?overconfQ:QSX).map(q=>q.id));
    const revTab=(id,lbl,cnt,col)=>e("button",{key:id,onClick:()=>setRevFilter(id),
      style:{fontSize:11.5,fontWeight:700,padding:"5px 12px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
        border:"1px solid "+(revFilter===id?(col||"var(--blue-b)"):"var(--bdr)"),
        background:revFilter===id?"var(--s2)":"var(--s1)",
        color:revFilter===id?(col||"var(--blue)"):"var(--muted)",transition:"all .15s"}},
      lbl+(cnt!=null?" ("+cnt+")":""));

    async function runAiResults(){
      if(!IS_PRO){setShowUpgradeR(true);return;}
      if(aiResState==="loading")return;
      setAiResState("loading");
      const wrongTopics={};
      [...wrongAutoQ,...gradedFalse].forEach(q=>{const l=TOPIC_LABELS[q.topic]||q.topic;wrongTopics[l]=(wrongTopics[l]||0)+1;});
      const wt=Object.entries(wrongTopics).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([l,n])=>l+" ("+n+"\u00d7)").join(", ")||"nema gre\u0161aka";
      const slow=QSX.filter(q=>(qTimes[q.id]||0)>90).length;
      const prompt="Ti si mentor za hrvatsku dr\u017eavnu maturu iz matematike. U\u010denik je upravo zavr\u0161io ispit ("+(exam.season==="session"||exam.season==="random"?exam.label:exam.year+". "+exam.label)+", razina "+(exam.razina||"B")+").\n"
        +"Rezultat: "+pct+"% ("+cor+"/"+scoredN+" zadataka, "+earnedPoints+"/"+totalPoints+" bodova).\n"
        +"Gre\u0161ke po temama: "+wt+".\nSporih zadataka (>90s): "+slow+".\n"
        +"Vrati ISKLJU\u010cIVO JSON (bez markdown backtickova):\n"
        +'{"dijagnoza":"2-3 re\u010denice ZA\u0160TO se gube bodovi (uzroci, ne samo popis tema)","plan7":["5-7 konkretnih koraka za sljede\u0107ih 7 dana"],"poruka":"kratka motivacija u ti-formi"}';
      try{
        const data=await __aiPost(prompt,900);
        if(data.error||!data.content) throw new Error("api");
        const text=data?.content?.[0]?.text||"{}";
        setAiRes(JSON.parse(text.replace(/```json|```/g,"").trim()));
        setAiResState("done");
      }catch(err){setAiResState("error");}
    }
    return e("div",{className:"results"},
      showUpgradeR&&e(UpgradeModal,{onClose:()=>setShowUpgradeR(false)}),
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        e("span",{className:"ntitle"},exam.year+"  -  Rezultati")
      ),
      e("div",{className:"reshero"},
        e(AnimatedRing,{pct,gc,g}),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:32,color:"#fff",marginBottom:4,
          textShadow:"0 2px 12px rgba(0,0,0,.25)"}},GLBL[g]||""),
        e("div",{className:"res-pct",style:{color:"#fff"}},e(CountUp,{to:pct,suffix:"%",duration:950})),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",marginBottom:4}},
          cor+"/"+scoredN+" zadataka točno · "+earnedPoints+"/"+totalPoints+" bodova"),
        e("div",{style:{display:"inline-flex",gap:8,marginTop:10}},
          e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(233,180,70,.18)",border:"1px solid rgba(233,180,70,.4)",color:"#ffd56b"}},
            "+"+calcXpGain(pct,autoQ.length)+" XP"),
          (userData?.streak||0)>0&&e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.22)",color:"#fff"}},
            "🔥 "+(userData.streak)+" dana"),(function(){var pt=autoQ.filter(function(q){return q.warn;}).length;if(!pt)return null;var pa=autoQ.filter(function(q){return q.warn&&chk(q,answers[q.id])===true;}).length;return e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,background:"rgba(80,200,120,.16)",border:"1px solid rgba(80,200,120,.42)",color:"#7CEBB0"}},"🛡️ "+pa+"/"+pt+" zamki izbjegnuto");})()
        ),
        e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.85)",margin:"12px auto 0",maxWidth:340,lineHeight:1.55}},heroMsg),
      (()=>{
        const _past=((userData&&userData.history)||[]).filter(h=>h.examKey===exam.key&&typeof h.pct==="number");
        if(_past.length===0) return null;
        const _l=_past[_past.length-1];const _lastCur=_l.cor===cor&&_l.total===scoredN&&_l.pct===pct;
        const _priorCount=_lastCur?_past.length-1:_past.length;
        if(_priorCount<1) return null;
        const _first=_past[0].pct;
        const _delta=pct-_first;
        return e("div",{style:{display:"inline-flex",alignItems:"center",gap:9,marginTop:12,padding:"7px 16px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.22)",fontSize:12.5,fontWeight:700,color:"#fff",flexWrap:"wrap",justifyContent:"center"}},
          e("span",{style:{opacity:.75}},"Prvi put "+_first+"%"),
          e("span",{style:{opacity:.45}},"→"),
          e("span",null,"sad "+pct+"%"),
          _delta>0?e("span",{style:{color:"#7CEBB0"}},"▲ +"+_delta+" napretka!"):_delta<0?e("span",{style:{color:"#ffb4b4"}},"▼ "+Math.abs(_delta)):e("span",{style:{opacity:.7}},"isti rezultat — idemo dalje!")
        );
      })(),
        canSeeDetails&&selfQ.length>0&&e("div",{style:{
          fontSize:12,color:ungraded>0?"rgba(255,220,100,.95)":"rgba(140,235,180,.95)",marginTop:8,
          background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
          borderRadius:8,padding:"6px 12px",display:"inline-block"}},
          ungraded>0
            ?"✏️ "+ungraded+(ungraded===1?" opisni zadatak čeka":" opisnih zadataka čeka")+" tvoju ocjenu u pregledu — ocijeni i ulazi u rezultat."
            :"✓ Svi opisni zadaci ocijenjeni i uključeni u rezultat.")
      ),
      e("div",{className:"breakdown-grid"},
        [{label:"Točnih",val:cor,color:GC[5]},{label:"Netočnih",val:scoredN-cor,color:GC[1]},
         {label:"Neodgovoreno",val:autoQ.filter(q=>!hasAns(answers[q.id])).length,color:"var(--muted)"},
         {label:"Bodova",val:earnedPoints+"/"+totalPoints,color:gc}].map((b,i)=>
          e("div",{key:i,className:"bdk"},
            e("div",{className:"bdk-val",style:{color:b.color}},b.val),
            e("div",{className:"bdk-lbl"},b.label)))
      ),
      (function(){
        if(!canSeeDetails) return e(LockedResultsBlock,{label:"Analiza po temama",rows:3,minHeight:150,upgradeHref:MAT_RESULTS_UPGRADE_URL,
          note:"Ocjena, postotak, bodovi i XP ostaju besplatni. Točnost po temama, najslabije teme i savjeti dolaze sa Standard planom."});
        var byT={};
        autoQ.forEach(function(qq){var k=TOPIC_LABELS[qq.topic]||qq.topic||"Ostalo";var r=chk(qq,answers[qq.id]);if(r===null)return;if(!byT[k])byT[k]={c:0,t:0};byT[k].t++;if(r===true)byT[k].c++;});
        var rows=Object.keys(byT).map(function(k){return {k:k,c:byT[k].c,t:byT[k].t,p:byT[k].t?byT[k].c/byT[k].t:0};});
        if(rows.length<2)return null;
        rows.sort(function(a,b){return a.p-b.p;});
        return e("div",{style:{marginBottom:20}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},"📊 Točnost po temama"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"15px 16px"}},rows.map(function(r,i){
            var col=r.p>=0.7?"var(--green)":(r.p>=0.4?"var(--gold)":"var(--red)");
            return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10}},
              e("div",{style:{width:118,fontSize:12.5,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},r.k),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:Math.round(r.p*100)+"%",height:"100%",background:col,borderRadius:99,transition:"width .5s"}})),
              e("div",{style:{width:36,textAlign:"right",fontSize:12,fontWeight:800,color:col}},r.c+"/"+r.t));
          })),
          e("div",{style:{fontSize:11.5,color:"var(--muted)",marginTop:10,lineHeight:1.5}},"Najslabija tema je na vrhu — ondje najbrže dižeš rezultat ponavljanjem."));
      })(),
      e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,padding:"18px 18px 20px",marginBottom:20,
        background:"radial-gradient(120% 140% at 85% -20%,#2a5cb8 0%,#163769 45%,#0a1730 100%)",
        border:"1px solid rgba(74,144,217,.35)"}},
        e("div",{style:{position:"absolute",top:12,right:14,fontSize:9.5,fontWeight:800,letterSpacing:".1em",
          padding:"3px 9px",borderRadius:99,background:"rgba(233,180,70,.2)",
          border:"1px solid rgba(233,180,70,.45)",color:"#ffd56b"}},"PRO"),
        (aiResState==="done"&&aiRes)
          ?e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:14.5,fontWeight:700,color:"#fff",marginBottom:8}},"\uD83E\uDD16 AI analiza rezultata"),
              aiRes.dijagnoza&&e("div",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.92)",marginBottom:12}},aiRes.dijagnoza),
              Array.isArray(aiRes.plan7)&&e("div",{style:{marginBottom:12}},
                e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                e("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:4}},
                  aiRes.plan7.map((z,j)=>e("li",{key:j,style:{fontSize:12.5,lineHeight:1.55,color:"rgba(255,255,255,.88)"}},z)))),
              aiRes.poruka&&e("div",{style:{fontSize:12,fontStyle:"italic",color:"rgba(255,255,255,.7)",
                borderTop:"1px solid rgba(255,255,255,.15)",paddingTop:10}},"\uD83D\uDCAA "+aiRes.poruka),
              e("button",{onClick:runAiResults,style:{marginTop:10,background:"rgba(255,255,255,.14)",
                border:"1px solid rgba(255,255,255,.25)",color:"#fff",fontFamily:"var(--fb)",fontSize:12,
                fontWeight:600,padding:"7px 14px",borderRadius:8,cursor:"pointer"}},"\u21bb Nova analiza"))
          :e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:15,fontWeight:700,color:"#fff",marginBottom:5}},"\uD83E\uDD16 AI analiza rezultata"),
              e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.8)",marginBottom:13,maxWidth:430}},
                "Claude pregleda tvoje gre\u0161ke, objasni za\u0161to gubi\u0161 bodove na tim temama i slo\u017ei plan za sljede\u0107ih 7 dana."),
              aiResState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:10}},__aiErrMsg()),
              e("button",{onClick:runAiResults,disabled:aiResState==="loading",
                style:{background:IS_PRO?"#fff":"rgba(255,255,255,.16)",color:IS_PRO?"#0b1b3a":"#fff",
                  border:IS_PRO?"none":"1px solid rgba(255,255,255,.3)",fontFamily:"var(--fb)",fontSize:13.5,
                  fontWeight:700,padding:"11px 22px",borderRadius:10,cursor:"pointer",
                  boxShadow:IS_PRO?"0 6px 18px -6px rgba(0,0,0,.4)":"none"}},
                aiResState==="loading"?"\u23f3 Analiziram...":IS_PRO?"\u2728 Generiraj analizu":planCta()),
              !IS_PRO&&aiResState!=="done"&&e("div",{style:{position:"relative",marginTop:14,borderTop:"1px solid rgba(255,255,255,.12)",paddingTop:14}},
                e("div",{"aria-hidden":"true",style:{filter:"blur(3.5px)",opacity:.6,pointerEvents:"none",userSelect:"none"}},
                  e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                  e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}},
                    "Geometrija ti je najslabija (47%) \u2014 ponovi sli\u010dnost trokuta i povr\u0161ine. Dan 1: 8 zadataka iz pitagorinog pou\u010dka. Dan 2\u20133: trigonometrija pravokutnog trokuta\u2026")),
                e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}},
                  e("span",{style:{fontSize:11,fontWeight:700,color:"#fff",background:"rgba(10,23,48,.55)",border:"1px solid rgba(255,255,255,.2)",borderRadius:99,padding:"4px 12px",backdropFilter:"blur(2px)"}},"\uD83D\uDD12 Tvoj personalizirani plan \u2014 uz Pro"))))
      ),
      pct>=70
        ?e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}})
        :e("details",{style:{marginBottom:20}},
            e("summary",{style:{cursor:"pointer",fontSize:12.5,fontWeight:700,color:"var(--muted)",
              padding:"11px 14px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,
              listStyle:"none",userSelect:"none",textAlign:"center"}},"📤 Podijeli rezultat"),
            e("div",{style:{marginTop:10}},
              e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}}))
          ),
      canSeeDetails&&e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled po temama"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),
      canSeeDetails&&(()=>{
        // Izgradi statistiku po temama
        const topicStats={};
        [...autoQ,...gradedQ].forEach(q=>{
          const _ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
          const t=q.topic||"ostalo";
          if(!topicStats[t]) topicStats[t]={correct:0,total:0,points:0,maxPoints:0};
          topicStats[t].total++;
          topicStats[t].maxPoints+=q.points||1;
          if(_ok){
            topicStats[t].correct++;
            topicStats[t].points+=q.points||1;
          }
        });
        const sorted=Object.entries(topicStats)
          .map(([k,v])=>({k,label:TOPIC_LABELS[k]||k,...v,pct:Math.round(v.correct/v.total*100)}))
          .sort((a,b)=>a.pct-b.pct); // najslabije gore
        return e("div",{style:{marginBottom:24}},
          sorted.map(({k,label,correct,total,pct,points,maxPoints})=>{
            const col=pct>=80?"var(--green)":pct>=50?"var(--gold)":"var(--red)";
            return e("div",{key:k,style:{
              display:"flex",alignItems:"center",gap:10,
              padding:"8px 0",borderBottom:"1px solid var(--bdr)",flexWrap:"wrap"
            }},
              e("div",{style:{width:140,fontSize:12,color:"var(--text)",flexShrink:0}},label),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:pct+"%",height:"100%",background:col,borderRadius:99,transition:"width .4s"}})
              ),
              e("div",{style:{width:44,textAlign:"right",fontSize:12,fontWeight:700,color:col,flexShrink:0}},pct+"%"),
              e("div",{style:{width:48,textAlign:"right",fontSize:11,color:"var(--muted)",flexShrink:0}},correct+"/"+total),
              onPracticeSimilar&&pct<100&&e("button",{
                onClick:()=>onPracticeSimilar(k,label),
                style:{fontSize:11,padding:"3px 9px",borderRadius:6,border:"1px solid var(--bdr)",
                  background:"var(--s2)",color:"var(--muted)",cursor:"pointer",flexShrink:0,
                  whiteSpace:"nowrap"},
                title:"Vježbaj sve zadatke na temu: "+label
              },"🔁 Ponovi")
            );
          })
        );
      })(),
      canSeeDetails&&(function(){var ts={};[...autoQ,...gradedQ].forEach(function(qq){var ok=(qq.type==="proof"||qq.type==="sa")?selfGrade[qq.id]===true:chk(qq,answers[qq.id])===true;var lab=TOPIC_LABELS[qq.topic]||qq.topic||"ostalo";if(!ts[lab])ts[lab]={c:0,n:0,k:qq.topic};ts[lab].n++;if(ok)ts[lab].c++;});var rows=Object.keys(ts).map(function(lab){return{k:ts[lab].k,label:lab,pct:Math.round(ts[lab].c/ts[lab].n*100),n:ts[lab].n};});return e(WeakSpotTips,{rows:rows,onDrill:onPracticeSimilar});})(),
      !canSeeDetails&&e(LockedResultsBlock,{label:"Pregled zadataka i točni odgovori",rows:5,minHeight:200,upgradeHref:MAT_RESULTS_UPGRADE_URL,
        note:"Točna rješenja, obrazloženja korak po korak i pregled svakog zadatka otključaješ Standard planom."}),
      canSeeDetails&&e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,marginTop:8,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled zadataka"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),
        (function(){var ids=QSX.filter(function(qq){return _revShow.has(qq.id);}).map(function(qq){return qq.id;});var anyOpen=ids.some(function(id){return !revCol[id];});return e("button",{onClick:function(){var nm={};if(anyOpen){ids.forEach(function(id){nm[id]=true;});}setRevCol(nm);},style:{fontSize:10.5,fontWeight:700,padding:"4px 11px",borderRadius:99,border:"1px solid var(--bdr2)",background:"var(--s1)",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)",textTransform:"none",whiteSpace:"nowrap"}},anyOpen?"⊟ Sažmi sve":"⊞ Proširi sve");})()
      ),
      canSeeDetails&&(function(){
        var buckets={2:{c:0,n:0},1:{c:0,n:0},0:{c:0,n:0}};
        var rated=0;
        autoQ.forEach(function(q){ if(q.type!=="mc") return; var cv=conf[q.id]; if(cv===undefined||cv===null) return; var b=buckets[cv]; if(!b) return; b.n++; if(chk(q,answers[q.id])===true) b.c++; rated++; });
        if(rated<3) return null;
        var rows=[[2,"\uD83D\uDE0E Siguran","var(--green)"],[1,"\uD83E\uDD14 Nisam siguran","var(--gold)"],[0,"\uD83D\uDE2C Poga\u0111am","var(--red)"]];
        var sure=buckets[2], guess=buckets[0];
        var surePct=sure.n?Math.round(sure.c/sure.n*100):null;
        var guessPct=guess.n?Math.round(guess.c/guess.n*100):null;
        var sureWrong=sure.n-sure.c;
        var insight;
        if(surePct!=null && surePct>=85) insight="Kad si siguran/na, gotovo uvijek si u pravu \u2014 vjeruj prvom instinktu i ne gubi vrijeme na predomi\u0161ljanje.";
        else if(surePct!=null && sureWrong>=2 && surePct<70) insight="Oprez: kod \u201eSiguran\u201c grije\u0161i\u0161 \u010de\u0161\u0107e nego \u0161to misli\u0161 ("+sureWrong+"\u00d7). Prije nego potvrdi\u0161 \u201esiguran\u201c odgovor, brzo provjeri korak.";
        else if(guessPct!=null && guessPct>=60 && guess.n>=2) insight="Tvoja \u201enaga\u0111anja\u201c su bolja nego \u0161to misli\u0161 ("+guessPct+"% to\u010dno) \u2014 ima\u0161 dobar instinkt, ne precrtavaj opcije prebrzo.";
        else if(surePct!=null && guessPct!=null && (surePct-guessPct)>=30) insight="Dobra kalibracija \u2014 kad si siguran/na to\u010dniji/a si nego kad naga\u0111a\u0161. Vjeruj toj razlici na maturi.";
        else insight="Prati ovu podjelu kroz ispite \u2014 cilj je da \u201eSiguran\u201c bude \u0161to bli\u017ee 100%, a da rje\u0111e naga\u0111a\u0161.";
        return e("div",{style:{marginBottom:14,padding:"13px 15px",borderRadius:12,background:"var(--s2)",border:"1px solid var(--bdr)"}},
          e("div",{style:{fontSize:12.5,fontWeight:800,color:"var(--text)",marginBottom:3,display:"flex",alignItems:"center",gap:7}},"\uD83E\uDDED Kalibracija \u2014 koliko vjeruje\u0161 sebi"),
          e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:11}},"Tvoja procjena sigurnosti naspram stvarne to\u010dnosti"),
          rows.map(function(r){var b=buckets[r[0]];if(!b.n)return null;var pct=Math.round(b.c/b.n*100);return e("div",{key:r[0],style:{display:"flex",alignItems:"center",gap:10,padding:"5px 0"}},
            e("div",{style:{width:128,fontSize:12.5,color:"var(--text)",flexShrink:0}},r[1]),
            e("div",{style:{flex:1,height:8,background:"var(--s1)",borderRadius:99,overflow:"hidden"}},e("div",{style:{width:pct+"%",height:"100%",background:r[2],borderRadius:99,transition:"width .4s"}})),
            e("div",{style:{width:84,textAlign:"right",fontSize:12,fontWeight:700,color:r[2],flexShrink:0}},pct+"% ("+b.c+"/"+b.n+")")
          );}),
          e("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid var(--bdr)",fontSize:12.5,lineHeight:1.55,color:"var(--text)"}},insight)
        );
      })(),
      canSeeDetails&&overconfQ.length>0&&(()=>{
        var tc={};overconfQ.forEach(function(q){if(!q.topic)return;var l=(typeof TOPIC_LABELS!=="undefined"&&TOPIC_LABELS[q.topic])||q.topic;tc[l]=(tc[l]||0)+1;});
        var top=Object.entries(tc).sort((a,b)=>b[1]-a[1])[0];
        var topPart=(top&&top[1]>=2)?(" Najvi\u0161e u temi \u201e"+top[0]+"\u201c ("+top[1]+"\u00d7) \u2014 tu se precjenjuje\u0161."):"";
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
        background:"var(--red-d)",border:"1px solid rgba(248,113,113,.3)",borderLeft:"3px solid var(--red)",
        borderRadius:10,color:"var(--text)"}},
        "\u26a0\ufe0f Kod "+overconfQ.length+" zadatka si bio/la siguran/na a pogrije\u0161io/la \u2014 to su prvi kandidati za ponavljanje."+topPart);})(),
      canSeeDetails&&(()=>{const cnt={};Object.values(errorTags||{}).forEach(arr=>(arr||[]).forEach(t=>cnt[t]=(cnt[t]||0)+1));
        const lbl={};(typeof ERROR_TAGS!=="undefined"?ERROR_TAGS:[]).forEach(t=>lbl[t.id]=t.label);
        const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0];
        if(!top||top[1]<2)return null;
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
          background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderLeft:"3px solid var(--gold)",
          borderRadius:10,color:"var(--text)"}},
          "\uD83D\uDD01 Uzorak gre\u0161ke: \u201e"+(lbl[top[0]]||top[0])+"\u201c \u00d7"+top[1]+" \u2014 isti tip pogre\u0161ke se ponavlja. Njega prvo razbij.");})(),
      canSeeDetails&&e("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14}},
        revTab("all","Svi",QSX.length,null),
        (wrongAutoQ.length+gradedFalse.length)>0&&revTab("wrong","✗ Netočni",wrongAutoQ.length+gradedFalse.length,"var(--red)"),
        flaggedQ.length>0&&revTab("flag","⚑ Označeni",flaggedQ.length,"var(--gold)"),
        selfQ.length>0&&revTab("manual","✏️ Opisni",selfQ.length,"var(--gold)"),
        overconfQ.length>0&&revTab("overconf","😎 Siguran a kriv",overconfQ.length,"var(--red)")
      ),
      canSeeDetails&&e("div",{className:"revlist"},QSX.map((q,i)=>{
        if(!_revShow.has(q.id)) return null;
        const isM=q.type==="proof"||q.type==="sa"||q.type==="pa";
        const isColl=!!revCol[q.id];
        const a=answers[q.id];
        const ok=isM?null:chk(q,a);
        const sg=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]:undefined;
        const cls=isM?(sg===true?"rok":sg===false?"rbad":"rman"):ok===true?"rok":"rbad";
        const col=isM?(sg===true?"var(--green)":sg===false?"var(--red)":"var(--gold)"):ok===true?"var(--green)":"var(--red)";
        let ad=null,adOk=null;
        if(q.type==="mc"&&a) ad=["Tvoj odgovor: "+a+"  -  ",renderOptText(q.opts[LL.indexOf(a)]||"")];
        if(q.type==="mc"&&ok===false) adOk=["Točno: "+(q.sol?.cl||"")+") ",renderOptText(q.opts?.[LL.indexOf(q.sol?.cl)]||"")];
        if((q.type==="num"||q.type==="calc")&&a) ad=["Tvoj odgovor: "+a+" (točno: ",renderOptText(String(q.sol?.ans??"")),")"];
        if(isM&&a) ad="Odgovor napisan";
        return e("div",{key:q.id,className:"revitem "+cls},
          e("div",{style:{display:"flex",gap:10,alignItems:"flex-start"}},
            e("span",{style:{color:col,fontWeight:700,fontSize:14,minWidth:18}},isM?(sg===true?"✓":sg===false?"✗":"✏️"):ok?"✓":"✗"),
            e("div",{style:{flex:1}},
              e("div",{onClick:()=>setRevCol(p=>({...p,[q.id]:!p[q.id]})),style:{display:"flex",alignItems:"center",gap:8,marginBottom:isColl?0:3,flexWrap:"wrap",cursor:"pointer",userSelect:"none"}},
                e("span",{style:{order:99,marginLeft:"auto",color:"var(--muted)",fontSize:13,fontWeight:800}},isColl?"▾":"▴"),
                e("span",{style:{fontSize:11,color:"var(--muted)"}},(i+1)+". "+TLBL[q.type]),
                e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
                e("span",{style:{fontSize:11,color:"var(--gold)"}},q.points>1?q.points+" boda":""),
                qTimes[q.id]&&e("span",{className:"time-badge "+(qTimes[q.id]>90?"slow":qTimes[q.id]<15?"fast":"")},
                  "⏱ "+qTimes[q.id]+"s"),
                flag[q.id]&&e("span",{style:{fontSize:11,fontWeight:800,color:"var(--red)"}},"⚑ označeno")
              ),
              !isColl&&e("div",null,e("div",{style:{fontSize:13,lineHeight:1.55,marginBottom:5}},renderQText(q.q)),
              (()=>{const ik=__imgKey(q._examKey||exam.key,q);
                const fn=q.img?__MAT.Q_IMAGES[ik]:null;
                return fn&&e("div",{style:{margin:"4px 0 8px",padding:"10px",background:"var(--s2)",
                  border:"1px solid var(--bdr)",borderRadius:10,display:"inline-block",maxWidth:"100%"}},fn());})(),
              ad&&e("div",{style:{fontSize:12,color:"var(--muted)"}},ad),
              adOk&&e("div",{style:{fontSize:12,color:"var(--green)",fontWeight:600,marginTop:2}},adOk),
              e(AnswerHelper,{q,autoExpand:false}),
              (q.type==="proof"||q.type==="sa")&&e(Fragment,null,e(MaturaRubric,{q}),e("div",{style:{marginTop:9,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
                e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Usporedi s rješenjem:"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:true})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===true?"var(--green)":"var(--bdr)"),
                    background:sg===true?"var(--green)":"var(--s1)",color:sg===true?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✓ Riješio/la sam"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:false})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===false?"var(--red)":"var(--bdr)"),
                    background:sg===false?"var(--red)":"var(--s1)",color:sg===false?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✗ Nisam"))))
            )
          )
        );
      })),
      !canSeeDetails&&e(LockedResultsBlock,{label:"Vježbanje grešaka i savjeti",rows:2,minHeight:130,upgradeHref:MAT_RESULTS_UPGRADE_URL,
        note:"Ciljano ponavljanje promašenih zadataka i savjeti po temama dolaze sa Standard planom."}),
      e("div",{style:{marginTop:28,display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",
        padding:"20px 0",borderTop:"1px solid var(--bdr)"}},
        e("button",{className:"btn btn-g",onClick:onExit},"← Natrag"),
        onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna"),
        canSeeDetails&&wrongAutoQ.length>0&&onPracticeErrors&&e("button",{
          className:"btn btn-red",onClick:()=>onPracticeErrors(wrongAutoQ,exam),
          style:{background:"linear-gradient(135deg,var(--red-d),rgba(196,48,48,.15))",
            border:"1px solid rgba(196,48,48,.35)",color:"var(--red)",fontWeight:700}
        },"🔁 Vježbaj greške ("+wrongAutoQ.length+")")
      ),
      canSeeDetails&&(()=>{
        var items=[];
        [...wrongAutoQ,...gradedFalse].forEach(function(q){
          var mw=(q.why||[]).find(function(w){return typeof w==="string"&&/greška|propust/i.test(w);});
          var txt=mw?String(mw).replace(/^(Tipičan propust:|Tipična greška:|Česta greška:|Greška:)\s*/i,"").trim():"";
          if(!txt){var d=(q.steps||[]).find(function(st){return st&&st.note==="diagnostika";});if(d)txt=String(d.txt).replace(/^Analiza distractora:\s*/i,"").replace(/Provjera[\s\S]*$/i,"").replace(/<br>[\s\S]*$/,"").trim();}
          if(txt&&txt.length<240)items.push({topic:TOPIC_LABELS[q.topic]||q.topic,txt:txt});
        });
        if(items.length===0) return null;
        var byTopic={};items.forEach(function(it){(byTopic[it.topic]=byTopic[it.topic]||[]).push(it.txt);});
        return e("div",{style:{marginTop:32}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"📝 Tvoj podsjetnik — na što paziti"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
            Object.entries(byTopic).map(function(en,ti){var tp=en[0],arr=en[1];return e("div",{key:ti,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--gold)",borderRadius:"var(--r)",padding:"12px 14px"}},
              e("div",{style:{fontWeight:800,fontSize:13,color:"var(--gold)",marginBottom:7}},tp),
              e("div",{style:{display:"flex",flexDirection:"column",gap:7}},
                arr.slice(0,3).map(function(t,i){return e("div",{key:i,style:{fontSize:12.5,color:"var(--text)",lineHeight:1.5,display:"flex",gap:8}},
                  e("span",{style:{color:"var(--gold)",flexShrink:0}},"•"),
                  e("span",null,renderOptText(t)));})));})));
      })(),
      e("div",{style:{marginTop:32}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Sljedeći koraci"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{className:"next-steps"},
          e("div",{className:"next-step-card gold",onClick:onExit},
            e("span",{className:"nsc-ico"},"📝"),
            e("div",{className:"nsc-title",style:{color:"var(--gold)"}},"Drugi ispit"),
            e("div",{className:"nsc-desc"},"Odaberi drugi rok ili godinu i nastavi vježbanje.")),
          canSeeDetails&&e("div",{className:"next-step-card blue",onClick:()=>onFilter?onFilter():onExit()},
            e("span",{className:"nsc-ico"},"🎯"),
            e("div",{className:"nsc-title",style:{color:"var(--blue)"}},"Vježbaj po temi"),
            e("div",{className:"nsc-desc"},"Fokusiraj se na teme gdje si bio/la najslabiji/a.")),
          e("div",{className:"next-step-card green",onClick:()=>onStats&&onStats(),style:{cursor:"pointer"}},
            e("span",{className:"nsc-ico"},"📊"),
            e("div",{className:"nsc-title",style:{color:"var(--green)"}},"Statistika"),
            e("div",{className:"nsc-desc"},"Prati napredak, trend i predviđenu ocjenu.")),
          e("div",{className:"next-step-card",style:{cursor:"pointer"},
            onClick:()=>{try{(window.parent||window).postMessage({type:"DISCERE_NAVIGATE",to:"kalkulator",pct,razina:exam.razina||null},"*");}catch(e2){}}},
            e("span",{className:"nsc-ico"},"\uD83C\uDF93"),
            e("div",{className:"nsc-title",style:{color:"var(--teal)"}},"Bodovi za faks"),
            e("div",{className:"nsc-desc"},"Vidi koliko ti ovakav rezultat nosi na upisima \u2014 Kalkulator bodova."))
        )
      )
    );
}
