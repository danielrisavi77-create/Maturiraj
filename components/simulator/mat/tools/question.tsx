// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Alati uz pitanje: traka, upozorenje, pomoc pri odgovoru, rubrika, radni prostor i unos izracuna. */
import React from 'react';
import { IS_PRO, PLAN_NAME, TOPIC_LABELS } from '../core/state';
import { __aiErrMsg, __aiPost, __ensureNerdamer } from '../core/runtime';
import { FractionSVG, renderOptContent, renderOptText } from '../core/mathText';
import { chk, hasAns } from '../core/grading';
import { GraphInput } from '../viz/graph';
import { ZoomableFig } from '../viz/figzoom';
import { resolveViz } from '../viz/interactive';
import { GLOSSARY } from './hints';
import { UpgradeModal } from './modals';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function MaturaRubric({q}){
  var st=useState(false),open=st[0],setOpen=st[1];
  var st2=useState({}),checks=st2[0],setChecks=st2[1];
  var META={intuicija:1,verifikacija:1,odgovor:1,diagnostika:1,postupak:1};
  var all=(q.steps||[]).map(function(s,i){return{i:i,s:s};}).filter(function(o){return o.s!=="───"&&o.s!=="---";});
  var steps=all.filter(function(o){var s=o.s;if(typeof s==="string")return !(s.indexOf("Točan odgovor")===0||s.indexOf("Sažetak")===0);return !(s.note&&META[s.note]);});
  if(steps.length<2) steps=all;
  var pts=q.points||1;
  if(steps.length<2||pts<2) return null;
  var done=steps.filter(function(o){return checks[o.i];}).length;
  var est=Math.round(pts*done/steps.length);
  var txt=function(s){return typeof s==="string"?s:(s.txt||"");};
  return e("div",{style:{marginTop:8,width:"100%"}},
    e("button",{onClick:function(){setOpen(!open);},style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)"}},(open?"▾ ":"▸ ")+"⚖️ Boduj po koracima (kao matura)"),
    open&&e("div",{style:{marginTop:8,padding:"12px 14px",borderRadius:12,background:"var(--s2)",border:"1px solid var(--bdr)"}},
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:9,lineHeight:1.5}},"Označi korake koje si stvarno napravio/la. Na maturi se bodovi dijele po koracima — ne sve-ili-ništa."),
      steps.map(function(o){return e("label",{key:o.i,style:{display:"flex",gap:9,alignItems:"flex-start",padding:"6px 0",cursor:"pointer",fontSize:12.5,lineHeight:1.5}},
        e("input",{type:"checkbox",checked:!!checks[o.i],onChange:function(){var n={};for(var kk in checks)n[kk]=checks[kk];n[o.i]=!n[o.i];setChecks(n);},style:{marginTop:2,width:16,height:16,accentColor:"var(--blue)",flexShrink:0}}),
        e("span",{style:{color:"var(--text)"}},renderOptText(txt(o.s)))
      );}),
      e("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid var(--bdr)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}},
        e("span",{style:{fontSize:13.5,fontWeight:800,color:est>=pts?"var(--green)":est>0?"var(--gold)":"var(--muted)"}},"Procjena: "+est+"/"+pts+" "+(pts===1?"bod":(pts<5?"boda":"bodova"))+" ("+Math.round(done/steps.length*100)+"%)"),
        e("span",{style:{fontSize:11,color:"var(--muted)"}},done+"/"+steps.length+" koraka")
      )
    )
  );
}
function AnswerHelper({q,autoExpand,hideToggle}){
  const[open,setOpen]=useState(!!autoExpand);
  const[whyOpen,setWhyOpen]=useState(false);
  const[stepsShown,setStepsShown]=useState(1);
  const[playing,setPlaying]=useState(false);
  const _playRef=React.useRef(null);
  function _stopPlay(){if(_playRef.current){clearInterval(_playRef.current);_playRef.current=null;}setPlaying(false);}
  function _playSteps(total){if(_playRef.current){clearInterval(_playRef.current);_playRef.current=null;}setStepsShown(1);setPlaying(true);_playRef.current=setInterval(function(){setStepsShown(function(n){var nx=n+1;if(nx>=total){clearInterval(_playRef.current);_playRef.current=null;setPlaying(false);return total;}return nx;});},1100);}
  useEffect(function(){return function(){if(_playRef.current)clearInterval(_playRef.current);};},[]);
  useEffect(()=>{setOpen(!!autoExpand);setWhyOpen(false);setStepsShown(1);_stopPlay();},[q.id]);

  if(!open) return hideToggle?null:e("button",{
    className:"ah-toggle-btn",onClick:()=>setOpen(true)
  },"📐 Pogledaj rješenje");

  // ── Točan odgovor ──────────────────────────────────────────────────
  const ansContent=(()=>{
    if(q.type==="mc"){
      const idx=["A","B","C","D"].indexOf(q.sol.cl);
      const optFrac=null;
      const optTxt=(q.opts?.[idx]||"").replace(/^[A-D]\.\s*/,"");
      return e("span",{style:{display:"inline-flex",alignItems:"center",gap:8}},
        e("span",{style:{
          display:"inline-flex",alignItems:"center",justifyContent:"center",
          width:26,height:26,borderRadius:6,
          background:"var(--green)",color:"#0f1118",fontWeight:800,fontSize:14
        }},q.sol.cl),
        optFrac
          ? e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},renderOptContent(optFrac))
          : renderOptText(optTxt)
      );
    }
    if(q.sol?.solFormula){
      const sf=q.sol.solFormula;
      return e("span",{style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"}},
        sf.pre&&e("span",null,sf.pre+" "),
        sf.frac&&e(FractionSVG,{fracs:sf.frac,ops:sf.ops||[],pre:"",post:""}),
        sf.post&&e("span",null," "+sf.post)
      );
    }
    return renderOptText(q.sol?.ans||q.sol?.ex||"—");
  })();

  // ── Koraci rješavanja ───────────────────────────────────────────────
  const stepsEl=(()=>{
    if(!q.steps||q.steps.length===0) return null;
    const _total=q.steps.length;
    const _shown=Math.min(stepsShown,_total);
    let num=0;
    return e("div",{className:"ah-steps"},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2}},e("div",{className:"ah-steps-label",style:{marginBottom:0}},"📐 Postupak rješavanja"),_total>1&&e("button",{onClick:function(){playing?_stopPlay():_playSteps(_total);},title:playing?"Zaustavi reprodukciju":"Pusti korak po korak",style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:99,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",fontWeight:700,fontSize:11.5,cursor:"pointer",fontFamily:"var(--fb)"}},playing?"⏸ Stop":"▶ Pusti korake")),
      q.steps.slice(0,_shown).map((step,i)=>{
        if(step==="───"||step==="---")
          return e("div",{key:i,className:"ah-step-sep"});
        const s=typeof step==="string"
          ?{txt:step,note:null,final:step.startsWith("→")||step.startsWith("∴")||step.startsWith("Provjera")}
          :step;
        const isFinal=s.final||(i===q.steps.length-1);
        if(!isFinal) num++;
        return e("div",{key:i,className:"ah-step"+(isFinal?" ah-step-final":"")},
          e("span",{className:"ah-step-n"},isFinal?"→":num),
          e("span",{className:"ah-step-txt"},renderOptText(s.txt)),
          s.note&&typeof s.note==="string"&&e("span",{className:"ah-step-note"},s.note)
        );
      }),
      _shown<_total&&e("div",{style:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}},
        e("button",{onClick:()=>setStepsShown(n=>n+1),style:{flex:"1 1 auto",padding:"8px 12px",borderRadius:8,border:"1px solid var(--bdr)",background:"var(--s2)",color:"var(--text)",fontWeight:700,fontSize:13,cursor:"pointer"}},"▸ Sljedeći korak ("+_shown+"/"+_total+")"),
        e("button",{onClick:()=>setStepsShown(_total),style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--bdr)",background:"transparent",color:"var(--muted)",fontWeight:600,fontSize:12,cursor:"pointer"}},"Otkrij sve")
      )
    );
  })();

  // ── Zašto (sklopivo) ────────────────────────────────────────────────
  const whyEl=q.why&&q.why.length>0&&e("div",{className:"ah-why"},
    e("div",{className:"ah-why-header",onClick:()=>setWhyOpen(p=>!p)},
      e("span",null,"💡 Zašto tako?"),
      e("span",{style:{fontSize:11,opacity:.6}},whyOpen?"▲ sakrij":"▼ prikaži")
    ),
    whyOpen&&e("div",{className:"ah-why-body"},
      q.why.map((line,i)=>{const txt=typeof line==="string"?line:(line&&line.txt)||String(line);const note=typeof line==="object"&&line?line.note:null;const isFinal=typeof line==="object"&&line?line.final:false;return e("div",{key:i,className:"ah-why-line"+(isFinal?" ah-step-final":"")},renderOptText(txt),note&&e("span",{className:"ah-step-note"},note));})
    )
  );

  // ── Napomena (exp) ──────────────────────────────────────────────────
  const expEl=q.exp&&q.type!=="mc"&&e("div",{className:"ah-exp"},
    e("div",{className:"ah-exp-label"},"📖 Napomena"),
    e("div",{className:"ah-exp-text"},renderOptText(q.exp))
  );

  // ── Standardni graf rješenja (za proof zadatke s grafom) ──────────────
  const svgEl=q.sol?.svgFn&&e("div",{className:"ah-steps",style:{marginTop:8}},
    e("div",{className:"ah-steps-label"},"📐 Točan graf"),
    e("div",{style:{margin:"8px 0",display:"flex",justifyContent:"center"}},
      e(ZoomableFig,{fig:e(q.sol.svgFn,null)})
    )
  );

  return e("div",{className:"ah-wrap"},
    e("div",{className:"ah-answer"},
      e("div",{className:"ah-answer-label"},e("span",null,"✓")," Točan odgovor"),
      e("div",{className:"ah-answer-content"},ansContent)
    ),
    svgEl,
    stepsEl,
    whyEl,
    expEl,
    !hideToggle&&e("button",{
      className:"ah-toggle-btn",onClick:()=>setOpen(false)
    },"▲ Sakrij rješenje")
  );
}
function QToolbar({glossaryText,warn,vizKind,qid,onViz}){
  const[panel,setPanel]=useState(null);
  const[selTerm,setSelTerm]=useState(null);
  useEffect(()=>{setPanel(null);setSelTerm(null);},[qid]);
  const terms=[];
  if(glossaryText){
    const low=" "+(""+glossaryText).toLowerCase()+" ";
    for(const term in GLOSSARY){
      const esc=term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
      const re=new RegExp("(^|[^a-zA-Zšđčćž])"+esc,"i");
      if(re.test(low)){terms.push(term);if(terms.length>=4)break;}
    }
  }
  const hasGloss=terms.length>0;
  if(!hasGloss&&!warn&&!vizKind) return null;
  function chip(key,bg,bd,col,onClick,label,caret){
    return e("button",{key:key,onClick:onClick,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 10px",borderRadius:999,border:"1px solid "+bd,background:bg,color:col,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.15,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"}},label,caret!=null?e("span",{key:"c",style:{opacity:.55,fontSize:10,marginLeft:1}},caret):null);
  }
  return e("div",null,
    e("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:panel?10:16}},
      hasGloss?chip("g","var(--s2)","var(--bdr2)","var(--muted)",function(){setSelTerm(null);setPanel(panel==="gloss"?null:"gloss");},"📖 Pojmovi",panel==="gloss"?"▴":"▾"):null,
      warn?chip("w","rgba(233,180,70,.09)","rgba(233,180,70,.42)","var(--gold)",function(){setPanel(panel==="warn"?null:"warn");},"⚠️ Česta greška",panel==="warn"?"▴":"▾"):null,
      vizKind?chip("v","var(--teal-d)","var(--teal-b)","var(--teal)",function(){onViz&&onViz(vizKind);},"🎛️ Prikaz",null):null
    ),
    (panel==="gloss"&&hasGloss)?e("div",{style:{marginBottom:16}},
      e("div",{style:{display:"flex",flexWrap:"wrap",gap:6}},terms.map(function(t,i){return e("button",{key:i,onClick:function(){setSelTerm(selTerm===t?null:t);},style:{padding:"5px 9px",borderRadius:8,border:"1px solid "+(selTerm===t?"var(--blue-b)":"var(--bdr)"),background:selTerm===t?"var(--blue-d)":"var(--s1)",color:selTerm===t?"var(--blue)":"var(--text)",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"var(--fb)",textTransform:"capitalize"}},t);})),
      selTerm?e("div",{style:{marginTop:10,padding:"11px 14px",borderRadius:"var(--r)",background:"var(--blue-d)",border:"1px solid var(--blue-b)",fontSize:13,lineHeight:1.55,color:"var(--text)"}},e("strong",{style:{color:"var(--blue)",textTransform:"capitalize"}},selTerm),": "+GLOSSARY[selTerm]):null
    ):null,
    (panel==="warn"&&warn)?e("div",{style:{display:"flex",alignItems:"flex-start",gap:9,padding:"11px 14px",marginBottom:16,borderRadius:"var(--r)",background:"rgba(233,180,70,.08)",border:"1px solid rgba(233,180,70,.32)",fontSize:12.5,color:"var(--gold)",lineHeight:1.62}},e("span",{style:{flexShrink:0,marginTop:1}},"⚠️"),e("span",{style:{flex:1}},warn)):null
  );
}
function CalcQuestion({q,answer,onAnswer,isReviewed,isPractice,isExamMode,onViz}){
  const[postupak,setPostupak]=useState("");
  const inpRef=React.useRef(null);
  function insSym(sym){const el=inpRef.current;if(!el){onAnswer((answer||"")+sym);return;}const st=el.selectionStart??(answer||"").length,en=el.selectionEnd??st;const nv=(answer||"").slice(0,st)+sym+(answer||"").slice(en);onAnswer(nv);requestAnimationFrame(()=>{try{el.focus();el.setSelectionRange(st+sym.length,st+sym.length);}catch(e){}});}
  const[showUpgrade,setShowUpgrade]=useState(false);
  const[aiState,setAiState]=useState("idle");
  const[aiResult,setAiResult]=useState(null);
  const[showSolution,setShowSolution]=useState(true);
  const[checked,setChecked]=useState(false);
  const[,_bumpNd]=useState(0);

  useEffect(()=>{
    setPostupak("");setAiState("idle");setAiResult(null);
    setShowSolution(false);setChecked(false);
  },[q.id]);

  const needsFinalAnswer=q.type==="num"||q.type==="calc"||q.type==="sa"||q.type==="pa";
  const finalCorrect=needsFinalAnswer?(hasAns(answer)?chk(q,answer):null):null;

  function handleCheck(){
    // 2.2: CAS se ucitava tek na provjeru; kad stigne, ponovo ocijeni.
    __ensureNerdamer().then(function(nd){ if(nd) _bumpNd(function(x){ return x+1; }); });
    setChecked(true);
    if(finalCorrect===true) window._playSound?.("correct");
    else if(finalCorrect===false) window._playSound?.("wrong");
  }

  async function runAiGrade(){
    if(!IS_PRO){setShowUpgrade(true);return;}
    if(!postupak.trim()||postupak.trim().length<10) return;
    setAiState("loading");
    const refAnswer=q.steps?q.steps.join("\n"):(q.sol.ex||q.sol.ans||"");
    const prompt=`Ti si profesor matematike za državnu maturu (osnovna razina B) u Hrvatskoj.
Ocijeni učenikov POSTUPAK rješavanja matematičkog zadatka.

Zadatak: "${q.q}"
Maksimalni bodovi: ${q.points||2}
Točan postupak:
${refAnswer}

Učenikov postupak:
"${postupak}"
${needsFinalAnswer?`Učenikov konačni odgovor: ${answer||"(nije upisao)"}  Točan odgovor: ${q.sol.ans}`:""}

Ocijeni postupak i vrati ISKLJUČIVO JSON (bez markdown backtickova):
{
  "bodovi": 0,
  "max_bodovi": ${q.points||2},
  "ocjena": "Točno",
  "točno": ["element postupka koji je točan"],
  "netočno": ["element postupka koji nedostaje"],
  "feedback": "2-3 recenice savjeta",
  "savjet": "1 kratak savjet"
}`;
    try{
      const data=await __aiPost(prompt,1024);
      if(data?.error||!data?.content) throw new Error("api");
      const text=data?.content?.[0]?.text||"{}";
      setAiResult(JSON.parse(text.replace(/```json|```/g,"").trim()));
      setAiState("done");
    }catch(err){setAiState("error");}
  }

  return e(Fragment,null,
    showUpgrade&&e(UpgradeModal,{onClose:()=>setShowUpgrade(false)}),
    e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

      // ⚠️ Pazi na  -  prikazuje se prije rješavanja, skriveno u examMode
      e(QToolbar,{glossaryText:[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" "),warn:(!isReviewed&&!isExamMode)?q.warn:null,vizKind:isExamMode?null:resolveViz(q),qid:q.id,onViz:onViz}),

      // Textarea za postupak
      e("div",null,
        e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},"\uD83D\uDCDD Postupak rješavanja"),
        e("textarea",{
          className:"ta",rows:4,
          placeholder:"Napisi ovdje postupak rješavanja  -  korak po korak...",
          value:postupak,
          disabled:isReviewed&&!isPractice,
          onChange:ev=>setPostupak(ev.target.value)
        })
      ),

      // Konačni odgovor + Provjeri gumb
      needsFinalAnswer&&e("div",null,
        e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},"\uD83C\uDFAF Konačni odgovor"),
        !checked&&!isReviewed&&e("div",{className:"symbar"},
          ["\u221a","\u03c0","\u00b2","\u00b3","\u00b7","\u00f7","\u00b1","\u2264","\u2265","\u00b0","\u221e","\u2208"].map(sym=>
            e("button",{key:sym,type:"button",className:"symbar-btn",onMouseDown:ev=>ev.preventDefault(),onClick:()=>insSym(sym)},sym))),
        e("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}},
          e("input",{
            ref:inpRef,
            type:"text",
            inputMode:(q.type==="sa"||q.type==="pa")?"text":"decimal",
            placeholder:(q.type==="sa"||q.type==="pa")?"Upiši odgovor...":"Upiši numeričku vrijednost...",
            className:"finp"+((checked||isReviewed)?(finalCorrect?" ok":" bad"):""),
            style:{flex:"1 1 180px",maxWidth:280,textAlign:(q.type==="sa"||q.type==="pa")?"left":"center"},
            value:answer||"",
            disabled:checked||isReviewed,
            onChange:ev=>onAnswer(ev.target.value)
          }),
          !checked&&!isReviewed&&hasAns(answer)&&e("button",{
            className:"btn btn-chk",
            style:{padding:"10px 18px",flexShrink:0},
            onClick:handleCheck
          },"\u2713 Provjeri odgovor")
        ),
        (checked||isReviewed)&&finalCorrect!==null&&e(FeedbackBox,{
          q,a:answer,rev:true,elapsed:0,avgTime:null
        })
      ),

      // GRAPH QUESTION  -  za proof zadatke s crtanjem grafa
      q.type==="proof"&&q.graphType&&e(GraphInputM,{
        q,answer,onAnswer,isReviewed,isPractice
      }),

      // Obični proof (bez grafa)  -  kratka napomena
      q.type==="proof"&&!q.graphType&&e("div",{style:{
        fontSize:12,color:"var(--muted)",fontStyle:"italic",
        padding:"8px 12px",background:"var(--s2)",borderRadius:"var(--r)",
        border:"1px solid var(--bdr)"
      }},
        "📐 Na pravoj maturi crtat ćeš olovkom na papiru. Ovdje opiši što bi nacrtao ili koristi AI ocjenu."
      ),

      // AI ocjena gumb (Pro)  -  samo kad je nesto upisano u postupak
      isPractice&&postupak.trim().length>=10&&e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        e("button",{
          className:"ah-ai-btn",
          onClick:runAiGrade,
          style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px"}
        },
          IS_PRO
            ?"\uD83E\uDD16 AI ocijeni postupak"
            :e(Fragment,null,"\u2728 AI ocjena postupka ",
               e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99,background:"rgba(233,180,70,.2)",color:"var(--gold)",border:"1px solid rgba(233,180,70,.3)"}},"PRO"))
        )
      ),

      // AI rezultat
      aiState==="loading"&&e("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--muted)",padding:"8px 0"}},
        e("div",{style:{width:14,height:14,border:"2px solid var(--blue)",borderTopColor:"transparent",borderRadius:"50%",animation:"spin .8s linear infinite"}}),
        "AI analizira tvoj postupak..."
      ),
      aiState==="error"&&e("div",{style:{fontSize:13,color:"var(--red)"}},
        __aiErrMsg()+" ",e("button",{className:"ah-ai-btn",onClick:runAiGrade},"Pokusaj ponovo")
      ),
      aiState==="done"&&aiResult&&(()=>{
        const bodovi=aiResult.bodovi??0;
        const maxB=aiResult.max_bodovi||q.points||2;
        const col=bodovi>=maxB?"var(--green)":bodovi>0?"var(--gold)":"var(--red)";
        return e("div",{style:{background:"var(--s2)",border:"1px solid "+col+"40",borderLeft:"3px solid "+col,borderRadius:"var(--r)",padding:"14px 16px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:10}},
            e("div",{style:{width:46,height:46,borderRadius:"50%",border:"2px solid "+col,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},
              e("div",{style:{fontFamily:"var(--fh)",fontSize:15,fontWeight:800,color:col}},bodovi+"/"+maxB)
            ),
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:14,color:col}},aiResult.ocjena||""),
              e("div",{style:{fontSize:11,color:"var(--muted)"}},"AI ocjena \u00B7 "+PLAN_NAME)
            )
          ),
          (aiResult.točno||[]).map((t,i)=>e("div",{key:"t"+i,style:{fontSize:12,color:"var(--green)",marginBottom:3}},"\u2705 "+t)),
          (aiResult.netočno||[]).map((t,i)=>e("div",{key:"n"+i,style:{fontSize:12,color:"var(--red)",marginBottom:3}},"\u274C "+t)),
          aiResult.feedback&&e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.65,borderTop:"1px solid var(--bdr)",paddingTop:8,marginTop:6}},aiResult.feedback),
          aiResult.savjet&&e("div",{style:{fontSize:12,fontWeight:600,color:"var(--blue)",marginTop:6}},"\uD83D\uDCA1 "+aiResult.savjet),
          e("button",{className:"ah-ai-btn",style:{marginTop:10},onClick:()=>{setAiState("idle");setAiResult(null);}},"\uD83D\uDD04 Ocijeni ponovo")
        );
      })(),

      // Standardno rješenje  -  skriveno u examMode
      !isExamMode&&e("div",null,
        e("button",{
          className:"ah-toggle-btn",
          onClick:()=>setShowSolution(s=>!s),
          style:{marginTop:0}
        },showSolution?"▲ Sakrij rješenje":"📐 Pogledaj standardno rješenje"),
        showSolution&&e(AnswerHelper,{q,autoExpand:true,hideToggle:true})
      )
    )
  );
}
const GraphInputM=React.memo(GraphInput);
function FeedbackBox({q,a,rev,elapsed,avgTime}){
  if(!rev||q.type==="proof") return null;

  // Timing badge
  function timingBadge(){
    if(!elapsed||elapsed<=0) return null;
    const isSlower=avgTime&&elapsed>avgTime*1.5;
    const isFaster=avgTime&&elapsed<avgTime*0.7;
    const col=elapsed>90?"var(--red)":elapsed>45?"var(--gold)":"var(--green)";
    return e("div",{style:{
      display:"inline-flex",alignItems:"center",gap:6,
      fontSize:11,color:"var(--muted)",marginTop:6
    }},
      e("span",{style:{
        fontWeight:700,color:col,
        background:elapsed>90?"var(--red-d)":elapsed>45?"var(--gold-d)":"var(--green-d)",
        padding:"2px 7px",borderRadius:99
      }},elapsed+"s"),
      avgTime&&e("span",null,
        "· prosjek "+avgTime+"s · ",
        isSlower
          ?e("span",{style:{color:"var(--red)"}},"sporije od prosjeka")
          :isFaster
            ?e("span",{style:{color:"var(--green)"}},"brže od prosjeka ✓")
            :e("span",{style:{color:"var(--muted)"}},"u prosjeku")
      )
    );
  }

  // SA pitanja  -  samo timing, bez točno/netočno
  if(q.type==="sa"||q.type==="pa"){
    return elapsed>0?e("div",{className:"fb info",style:{marginTop:12}},
      e("div",{className:"fbtitle"},"✏️ Otvoren odgovor"),
      e("div",{className:"fbtext"},"Provjeri svoj odgovor s rješenjem."),
      timingBadge()
    ):null;
  }

  const ok=chk(q,a);
  if(ok===null) return null;
  const _diag=(q.steps||[]).find(st=>st&&st.note==="diagnostika");
  const _diagTxt=_diag?String(_diag.txt).replace(/^(Analiza distractora:|Diagnostika:)\s*/i,"").replace(/<br>\s*Rje\u0161enje:[\s\S]*$/i,"").trim():"";
  const _mistake=(q.why||[]).find(w=>typeof w==="string"&&/gre\u0161k|propust/i.test(w));
  const _mistakeTxt=_mistake?String(_mistake).replace(/^(Tipi\u010dan propust:|Tipi\u010dna gre\u0161ka:|\u010cesta gre\u0161ka:|Gre\u0161ka:)\s*/i,"").trim():"";
  const _topicLbl=TOPIC_LABELS[q.topic]||q.topic;
  return e("div",{className:"fb "+(ok?"ok":"bad"),style:{marginTop:12}},
    e("div",{className:"fbtitle"},ok?"✓ Točno!":"✗ Netočno"),
    // MC  -  pokaži točan odgovor
    ok&&q.warn&&e("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginTop:2,marginBottom:4,padding:"4px 11px",borderRadius:99,background:"var(--green-d)",border:"1px solid rgba(30,122,62,.4)",color:"var(--green)",fontSize:11.5,fontWeight:800}},"🛡️ Izbjegnuta česta greška"),
    !ok&&q.type==="mc"&&q.sol?.cl&&e("div",{className:"fbtext"},
      "Točan odgovor: "+q.sol.cl+"  -  "+(q.opts?.["ABCD".indexOf(q.sol.cl)]||"")
    ),
    // #1 ANALIZA DISTRAKTORA (netočan MC)
    !ok&&q.type==="mc"&&_diagTxt&&e("div",{className:"fb-diag"},
      e("div",{className:"fb-diag-label"},"\uD83D\uDD0D Za\u0161to su ostale opcije krive"),
      e("div",{className:"fb-diag-text"},renderOptText(_diagTxt))),
    // #2 ČESTA GREŠKA
    !ok&&_mistakeTxt&&e("div",{className:"fb-mistake"},
      e("div",{className:"fb-mistake-label"},"\u26a0\ufe0f \u010cesta gre\u0161ka"),
      e("div",{className:"fb-mistake-text"},renderOptText(_mistakeTxt))),
    // Num/calc  -  pokaži točan broj
    !ok&&(q.type==="num"||q.type==="calc")&&q.sol?.ans&&e("div",{className:"fbtext"},
      e("span",null, "Točan odgovor: ", renderOptText(q.sol.ans), q.sol.alt?.length ? e("span",{style:{opacity:.7}}, " (ili: ", q.sol.alt.join(", "), ")") : null)
    ),
    // Exp  -  kratko objašnjenje
    q.exp&&e("div",{className:"fbtext",style:{
      marginTop:6,paddingTop:6,
      borderTop:"1px solid rgba(255,255,255,.06)",
      fontStyle:"italic"
    }}, e("span",{style:{marginRight:6}}, "💡"), renderOptText(q.exp)),
    q.topic&&_topicLbl&&e("div",null,e("button",{className:"fb-topic-link",
      onClick:()=>{try{(window.parent||window).postMessage({type:"DISCERE_NAVIGATE",to:"skripte",topic:q.topic,topicLabel:_topicLbl},"*");}catch(e){}}},
      "\uD83D\uDCD6 Ponovi: "+_topicLbl+" \u2192")),
    timingBadge()
  );
}
export { MaturaRubric, AnswerHelper, QToolbar, CalcQuestion, FeedbackBox };
