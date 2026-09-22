// @ts-nocheck
'use client';
/* 5.4 (Sim 3/4): lijevi stupac aktivnog ispita izdvojen iz sim.tsx bez promjene
   ponasanja. QuestionPanel drzi traku napretka, oznaku sekcije, karticu zadatka
   (meta, alati, kontekst, tekst, slika, pomoc, tagovi gresaka, samopouzdanje i
   navigacijske gumbe), a AnswerInput sam unos odgovora po tipu pitanja:
   opcije za MC (s precrtavanjem i radnim prostorom) te zadatke s postupkom
   (num / calc / sa / pa / proof) preko CalcQuestionM.
   Stanje ostaje u Sim-u i stize propsima — nista se ne duplira. JSX, klase,
   stilovi i stringovi prepisani su doslovno iz Sim-a. */
import React from 'react';
import { IS_PRO, TOPIC_LABELS } from '../core/state';
import { renderOptText, renderQText, FormulaBlock, renderOptContent } from '../core/mathText';
import { TLBL, LL } from '../core/ui';
import { chk, hasAns } from '../core/grading';
import { resolveViz } from '../viz/interactive';
import { ErrorTagger, SelfExplain, StuckHelper } from '../tools/hints';
import { AnswerHelper, FeedbackBox, QToolbar } from '../tools/question';
import { TYPE_ICON, topicColor, CalcQuestionM, TOPIC_FREQ } from './helpers';
const{createElement:e,Fragment}=React;

// Unos odgovora ovisi samo o tipu zadatka: MC dobiva opcije (s precrtavanjem i
// launcherom radnog prostora), ostali tipovi idu kroz CalcQuestionM. Uvjeti su
// medusobno iskljucivi, pa se u karticu i dalje renderira tocno jedan blok.
export function AnswerInput({
  q,a,correct,isRev,done,practice,examMode,elim,setElim,fbAnim,
  setAnswers,setShownAnswers,workspaceRef,setScratchOpen,onAnswerCb,setVizOpen
}){
  return e(Fragment,null,
          // === OPCIJE ZA MC ===
          q.type==="mc"&&e("div",null,
            e("div",{className:"opts"},
              q.opts.map((opt,oi)=>{
                const letter=LL[oi];
                let cls="opt";
                if(a===letter) cls+=" sel";
                if((isRev||(!practice&&done))&&a===letter&&correct===true) cls=" opt ok";
                if((isRev||(!practice&&done))&&a===letter&&correct===false) cls=" opt bad";
                if((isRev||(!practice&&done))&&letter===q.sol.cl) cls=(cls.includes("bad")?" opt bad":" opt ok");
                const isElim=!!(elim[q.id]&&elim[q.id][letter]);
                if(isElim&&!(isRev||done)) cls+=" elim";
                if(fbAnim&&fbAnim.qid===q.id&&a===letter) cls+=fbAnim.ok?" fb-ok":" fb-wrong";
                const locked=isRev||done||(examMode&&practice);
                return e("div",{key:oi,className:cls,onClick:()=>{
                  if(locked) return;
                  if(isElim){setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:false}}));return;}
                  setAnswers(p=>({...p,[q.id]:letter}));
                  if(practice) setShownAnswers(p=>({...p,[q.id]:true}));
                }},
                  e("div",{className:"optl"},letter),
                  e("div",{className:"optt"},
                    renderOptContent(opt)
                  ),
                  !locked&&e("button",{className:"opt-elim",title:isElim?"Vrati opciju":"Precrtaj (isključi)",
                    onClick:ev=>{ev.stopPropagation();setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:!isElim}}));}},isElim?"\u21a9":"\u2715")
                );
              })
            ),
            // Radni prostor launcher (otvara pun overlay; pamti rad po pitanju)
            (()=>{ const _ws=workspaceRef.current&&workspaceRef.current[q.id]; const _hw=!!(_ws&&((_ws.strokes&&_ws.strokes.length)||(_ws.calcHist&&_ws.calcHist.length)||(_ws.solveInput&&(""+_ws.solveInput).trim())||(_ws.funcs&&_ws.funcs.length)||_ws.figOn));
              return e("button",{onClick:()=>setScratchOpen(true),style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:_hw?"var(--blue-d)":"var(--s2)",border:"1px solid "+(_hw?"var(--blue-b)":"var(--bdr)"),borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
                e("span",{style:{fontSize:18,flexShrink:0}},"\u270f\ufe0f"),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{fontSize:13,fontWeight:700,color:_hw?"var(--blue-b)":"var(--text)"}}, _hw?"Nastavi svoj rad":"Radni prostor"),
                  e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}}, _hw?"ima\u0161 skicu ili ra\u010dun za ovo pitanje":(examMode?"skica \u00b7 kalkulator":"skica \u00b7 kalkulator \u00b7 asistent"))),
                _hw&&e("span",{style:{width:8,height:8,borderRadius:99,background:"var(--green)",flexShrink:0}}),
                e("span",{style:{color:"var(--muted)",fontSize:16,flexShrink:0}},"\u203a")
              ); })()
          ),

          // === ZADATCI S POSTUPKOM (num / calc / sa / proof) ===
          (q.type==="num"||q.type==="calc"||q.type==="sa"||q.type==="pa"||q.type==="proof")&&
            e(CalcQuestionM,{
              q,
              answer:a,
              onAnswer:onAnswerCb,
              isReviewed:isRev||done,
              isPractice:practice,
              isExamMode:examMode,
              onViz:setVizOpen
            })
  );
}

// Lijevi stupac ekrana rjesavanja: sve od trake napretka do navigacijskih gumba.
export function QuestionPanel({
  exam,QSX,cur,q,a,correct,answers,pct,sections,currentSection,mcStem,
  practice,examMode,timedPractice,done,isRev,qElapsed,AVG_Q_TIME,userData,qTimes,
  qcardRef,goTo,setAnswers,setShownAnswers,onAnswerCb,setRev,registerCheck,setShowReview,
  flag,setFlag,notes,setNotes,conf,setConf,elim,setElim,fbAnim,
  hints,setHints,formulaPeek,setFormulaPeek,helpOpen,setHelpOpen,showSolvedExample,
  selfExpl,setSelfExpl,errorTags,setErrorTags,onPracticeSimilar,
  scratchOpen,setScratchOpen,spSeen,toolsOpen,setToolsOpen,workspaceRef,setSpAsk,
  speaking,speakQ,readMode,setReadMode,hlMode,setHlMode,renderHL,fontScale,setFontScale,
  isBookmarked,toggleBookmark,setZoomFig,setVizOpen,_ghost,_weakByTopic
}){
  return e("div",null,
        // Progress
        e("div",{className:"prog-bar"},e("div",{className:"prog-fill",style:{width:pct+"%"}})),

        // Sekcija
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--text)",letterSpacing:".09em",
          textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:10,opacity:.85}},
          e("span",{style:{width:3,height:14,background:exam.razina==="A"?"var(--blue)":"var(--teal)",borderRadius:2,display:"inline-block"}}),
          e("span",null,sections[currentSection]?.label),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),

        // Exam mode banner
        examMode&&e("div",{className:"exam-mode-banner"},
          "⏱ Simulacija ispita · uvjeti kao na maturi · dopušteno: kalkulator + papir · bez povratne informacije do kraja"
        ),

        e("div",{ref:qcardRef,className:"qcard",style:{borderLeft:examMode?"none":"3px solid "+topicColor(q.topic)}},
          !examMode&&e("div",{style:{display:"flex",gap:2,marginBottom:16,height:6,padding:"0 1px"}},QSX.map(function(qq,qi){var ans=hasAns(answers[qq.id]);return e("div",{key:qi,onClick:function(){goTo(qi);},title:examMode?String(qi+1):(qi+1)+". "+(TOPIC_LABELS[qq.topic]||qq.topic),style:{flex:1,minWidth:0,borderRadius:2,cursor:"pointer",background:examMode?"var(--bdr2)":topicColor(qq.topic),opacity:qi===cur?1:(ans?0.85:0.26),boxShadow:qi===cur?"0 0 0 2px var(--text)":"none",transition:"opacity .2s"}});})),
          // Meta
          e("div",{className:"qmeta"},
            e("div",{className:"qmeta-l"},
              e("span",{className:"qnum"},"Zadatak "+(cur+1)+"/"+QSX.length),
              q.points>1&&e("span",{className:"qpts"},q.points+(q.points>=5?" bodova":" boda")),
              (()=>{const dl=(q.points>=3)?["Te\u0161ko","tesko"]:(q.points===2)?["Srednje","srednje"]:["Lako","lako"];
                return examMode?null:e("span",{className:"qdiff qdiff-"+dl[1]},dl[0]);})()
            ),
            e("div",{className:"qmeta-actions"},
              !examMode&&e("button",{className:"qicon"+(flag[q.id]?" on-flag":""),title:(flag[q.id]?"Označeno":"Označi za pregled")+" (F)",onClick:()=>setFlag(p=>({...p,[q.id]:!p[q.id]}))},flag[q.id]?"🚩":"⚑"),
              e("button",{className:"qicon"+(scratchOpen?" on-scratch":"")+((!spSeen)?" sp-pulse":""),title:"Papir za račun — skiciraj i računaj",onClick:()=>setScratchOpen(true)},"✏️"),
              !examMode&&e("div",{style:{position:"relative",display:"inline-flex"}},
                e("button",{className:"qicon"+(toolsOpen?" on-tools":""),title:"Više alata",onClick:()=>setToolsOpen(v=>!v)},"⋯"),
                toolsOpen&&e("div",{onClick:()=>setToolsOpen(false),style:{position:"fixed",inset:0,zIndex:55}}),
                toolsOpen&&e("div",{style:{position:"absolute",top:"112%",right:0,zIndex:56,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",boxShadow:"0 12px 32px -8px rgba(0,0,0,.35)",padding:7,display:"flex",flexDirection:"column",gap:2,minWidth:210}},
                  [[speaking?"⏹️":"🔊", speaking?"Zaustavi čitanje":"Pročitaj naglas", speakQ],
                   ["👁️", readMode?"Standardni prikaz":"Lakše čitanje", ()=>setReadMode(v=>!v)],
                   ["🖍️", hlMode?"Isključi marker":"Marker — označi ključno", ()=>setHlMode(v=>!v)],
                   ["🔖", isBookmarked?"Ukloni spremljeno":"Spremi zadatak", ()=>toggleBookmark(q.id)]
                  ].map((it,ti)=>e("button",{key:ti,onClick:()=>{it[2]();setToolsOpen(false);},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},it[0]),it[1])),
                  e("div",{style:{display:"flex",gap:6,alignItems:"center",padding:"7px 10px",borderTop:"1px solid var(--bdr)",marginTop:3}},
                    e("span",{style:{fontSize:12,color:"var(--muted)",marginRight:"auto"}},"Veličina teksta"),
                    e("button",{className:"qicon",title:"Smanji",onClick:()=>setFontScale(v=>Math.max(0.85,+(v-0.1).toFixed(2)))},e("span",{style:{fontSize:11,fontWeight:800}},"A−")),
                    e("button",{className:"qicon",title:"Povećaj",onClick:()=>setFontScale(v=>Math.min(1.6,+(v+0.1).toFixed(2)))},e("span",{style:{fontSize:15,fontWeight:800}},"A+"))
                  )
                )
              )
            )
          ),
          !examMode&&e("div",{className:"qmeta-sub"},(TOPIC_LABELS[q.topic]||q.topic)+" · "+(TYPE_ICON[q.type]||"")+" "+TLBL[q.type]+" · \u23f1\ufe0f \u2248 "+(q.points>=3?"5 min":q.points===2?"3 min":"1\u20132 min")+(function(){var _n=TOPIC_FREQ.exCnt[q.topic]||0,_t=TOPIC_FREQ.totalExams||1,_r=_n/_t;return _n>=3?" · 📊 "+(_r>=0.55?"vrlo česta":_r>=0.3?"česta":"povremena")+" tema":"";})()+(_ghost&&_ghost.qTimes&&_ghost.qTimes[q.id]?"  ·  \uD83D\uDC7B pro\u0161li put: "+_ghost.qTimes[q.id]+"s":"")),
          
          
          flag[q.id]&&e("input",{className:"flag-note",value:notes[q.id]||"",placeholder:"\uD83D\uDCDD Bilje\u0161ka uz ovaj zadatak (npr. provjeri formulu)...",
            onChange:ev=>setNotes(p=>({...p,[q.id]:ev.target.value}))}),

          // Kontekst zadatka  -  zajednički uvod za pod-pitanja (22a/b, 23a/b, itd.)
          q.context&&e("div",{style:{
            position:"relative",
            background:"linear-gradient(135deg, rgba(74,144,217,.06) 0%, rgba(74,144,217,.02) 100%)",
            borderLeft:"3px solid var(--blue)",
            borderRadius:"6px",
            padding:"12px 16px 14px 18px",
            marginBottom:16,
            boxShadow:"0 1px 0 rgba(74,144,217,.04)"
          }},
            e("div",{style:{
              fontSize:10,fontWeight:700,color:"var(--blue)",
              letterSpacing:".12em",textTransform:"uppercase",
              marginBottom:6,opacity:.85,
              display:"flex",alignItems:"center",gap:6
            }},
              e("svg",{width:11,height:11,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},
                e("circle",{cx:12,cy:12,r:10}),
                e("line",{x1:12,y1:8,x2:12,y2:12}),
                e("line",{x1:12,y1:16,x2:12.01,y2:16})
              ),
              "Kontekst"
            ),
            e("div",{style:{
              fontSize:14,color:"var(--text)",lineHeight:1.55,
              opacity:.92
            }},renderQText(q.context))
          ),

          // Tekst pitanja
          !examMode&&(_weakByTopic[q.topic]||0)>=2&&e("div",{className:"weak-banner"},
            e("span",{style:{fontSize:16}},"\uD83D\uDCAA"),
            e("span",null,"Fokus \u2014 temu ",e("strong",null,TOPIC_LABELS[q.topic]||q.topic)," \u010de\u0161\u0107e grije\u0161i\u0161. Uzmi si vremena i provjeri postupak.")),
          e("div",{className:"qtext"+(hlMode?" hl-mode":""),style:{fontSize:(15*fontScale)+"px"}},hlMode?renderHL(q.q,q.id):renderQText(q.q)),
          hlMode&&e("div",{className:"hl-hint"},"\uD83D\uDD8D\ufe0f Klikni rije\u010di da ozna\u010di\u0161 klju\u010dne podatke"),

          // Per-question timer upozorenje (samo u exam/timedPractice modu)
          timedPractice&&!done&&!isRev&&(()=>{
            if(qElapsed<AVG_Q_TIME) return null;
            const over=qElapsed-AVG_Q_TIME;
            const warn=qElapsed>AVG_Q_TIME*1.5;
            return e("div",{style:{
              display:"flex",alignItems:"center",gap:8,
              padding:"6px 12px",marginBottom:10,borderRadius:"var(--r)",
              background:warn?"rgba(196,48,48,.08)":"rgba(233,180,70,.08)",
              border:"1px solid "+(warn?"rgba(196,48,48,.25)":"rgba(233,180,70,.25)"),
              fontSize:12,color:warn?"var(--red)":"var(--gold)"
            }},
              e("span",null,warn?"⏰":"⚠️"),
              e("span",null,warn
                ? `${over}s iznad prosjeka  -  razmisli o prelasku dalje`
                : `Blizu prosjeka (${AVG_Q_TIME}s/zadatak)  -  ne zapinji`
              )
            );
          })(),

          // Formula blok (višeredne jednadžbe, razlomci...)
          q.formula&&e(FormulaBlock,{lines:q.formula,label:q.formulaLabel||null}),

          // SVG slika (ako postoji za ovo pitanje)
          // Pokušaj s exam-specifičnim ključem, pa s globalnim
          mcStem&&e("div",{className:"fig-zoomable",style:{
              margin:"0 0 16px",padding:"14px",
              background:"var(--s2)",border:"1px solid var(--bdr)",
              borderRadius:"var(--r)",display:"inline-block",maxWidth:"100%"
            },onClick:()=>setZoomFig(mcStem)},mcStem,e("span",{className:"fig-zoom-badge"},"\uD83D\uDD0D uve\u0107aj")),

          // ⚠️ PAZI NA  -  prikazuje se PRIJE rješavanja, skriveno u examMode
          // Samo za MC — CalcQuestion već renderira warn za sa/num/calc/proof
          null,
          null,
          e(QToolbar,{glossaryText:examMode?"":[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" "),warn:(q.type==="mc"&&!isRev&&!done&&!examMode)?q.warn:null,vizKind:examMode?null:resolveViz(q),qid:q.id,onViz:setVizOpen}),
          

          // Sim 3/4: unos odgovora po tipu pitanja zivi u AnswerInput (MC opcije,
          // radni prostor uz MC i zadaci s postupkom).
          e(AnswerInput,{q,a,correct,isRev,done,practice,examMode,elim,setElim,fbAnim,
            setAnswers,setShownAnswers,workspaceRef,setScratchOpen,onAnswerCb,setVizOpen}),

          // AI profesor — direktan ulaz (prefill pitanja + Asistent tab)
          !examMode&&(()=>{ var _qt=[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" ").replace(/\s+/g," ").trim();
            return e("button",{onClick:()=>{setSpAsk(_qt);setScratchOpen(true);},style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:"linear-gradient(135deg,rgba(233,180,70,.16),rgba(233,180,70,.05))",border:"1px solid rgba(233,180,70,.5)",borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
              e("span",{style:{fontSize:18,flexShrink:0}},"\uD83C\uDF93"),
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:13,fontWeight:700,color:"#e9b446"}},"Pitaj AI profesora"),
                e("div",{style:{fontSize:11,color:"rgba(255,255,255,.5)",marginTop:1}},"objasni ovaj zadatak korak po korak")),
              !IS_PRO&&e("span",{style:{fontSize:9,fontWeight:800,letterSpacing:".05em",color:"#e9b446",background:"rgba(233,180,70,.15)",border:"1px solid rgba(233,180,70,.4)",borderRadius:5,padding:"2px 6px",flexShrink:0}},"PRO"),
              e("span",{style:{color:"rgba(233,180,70,.7)",fontSize:16,flexShrink:0}},"\u203a")
            ); })(),

          // FEEDBACK + standardno rješenje za MC
          // U examMode  -  ništa do završetka ispita
          q.type==="mc"&&!examMode&&(()=>{
            const showFeedback=practice&&isRev;
            const showHelper=hasAns(a)||done||isRev;
            if(!showFeedback&&!showHelper) return null;
            const hist=(userData?.history||[]);
            const avgT=(()=>{
              const times=hist.flatMap(h=>h.qTimes&&h.qTimes[q.id]?[h.qTimes[q.id]]:[]);
              return times.length>=2?Math.round(times.reduce((a,b)=>a+b,0)/times.length):null;
            })();
            return e("div",null,
              showFeedback&&e(FeedbackBox,{q,a,rev:isRev,elapsed:qTimes[q.id]||0,avgTime:avgT}),
              showFeedback&&chk(q,a)===true&&e(SelfExplain,{key:"se"+q.id,val:selfExpl[q.id]||"",onChange:t=>setSelfExpl(p=>({...p,[q.id]:t}))}),
              showFeedback&&chk(q,a)===false&&onPracticeSimilar&&e("button",{className:"similar-btn",
                onClick:()=>onPracticeSimilar(q.topic,TOPIC_LABELS[q.topic]||q.topic)},
                "\u2795 Vje\u017ebaj jo\u0161 zadataka iz teme \u201e"+(TOPIC_LABELS[q.topic]||q.topic)+"\u201d \u2192"),
              // Tagovi grešaka  -  samo u practice modu, nikad u examMode
              showFeedback&&chk(q,a)===false&&e(ErrorTagger,{qid:q.id,errorTags,setErrorTags}),
              showHelper&&e(AnswerHelper,{q,autoExpand:false})
            );
          })(),

          practice&&!isRev&&e("button",{onClick:()=>setHelpOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:7,marginTop:14,padding:"8px 15px",borderRadius:99,background:helpOpen?"var(--blue-d)":"var(--s2)",border:"1px solid "+(helpOpen?"var(--blue-b)":"var(--bdr2)"),color:helpOpen?"var(--blue)":"var(--muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"💡 Pomoć i alati",e("span",{style:{opacity:.7,marginLeft:1}},helpOpen?" ▴":" ▾")),
          practice&&!isRev&&helpOpen&&e(StuckHelper,{key:"stuck"+q.id}),

          // HINT LADDER (vježba): otkrivaj korake jedan po jedan
          practice&&!isRev&&helpOpen&&(()=>{
            const postupak=(q.steps||[]).find(st=>st&&st.note==="postupak");
            const peeked=!!formulaPeek[q.id];
            return e("div",{className:"study-aids"},
              postupak&&e("button",{className:"aid-btn",onClick:()=>setFormulaPeek(p=>({...p,[q.id]:!p[q.id]}))},peeked?"\uD83D\uDCD0 Sakrij formulu":"\uD83D\uDCD0 Klju\u010dna formula"),
              e("button",{className:"aid-btn",onClick:showSolvedExample},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer"),
              peeked&&postupak&&e("div",{className:"formula-peek"},renderOptText(String(postupak.txt).replace(/^Sa\u017eetak postupka:\s*/i,""))));
          })(),
          practice&&!isRev&&helpOpen&&q.steps&&q.steps.length>0&&(()=>{
            const shown=hints[q.id]||0;
            return e("div",{style:{marginTop:14}},
              shown>0&&e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 14px",marginBottom:10}},
                e("div",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"var(--blue)",marginBottom:8}},"💡 Koraci ("+shown+"/"+q.steps.length+")"),
                q.steps.slice(0,shown).map((st,i)=>{
                  const txt=typeof st==="string"?st:(st&&st.txt)||"";
                  return e("div",{key:i,className:"ah-step"},
                    e("span",{className:"ah-step-n"},i+1),
                    e("span",{className:"ah-step-txt"},renderOptText(txt)));
                })),
              shown<q.steps.length&&e("button",{
                onClick:()=>setHints(p=>({...p,[q.id]:shown+1})),
                style:{fontSize:12.5,fontWeight:700,padding:"7px 14px",borderRadius:"var(--r)",cursor:"pointer",fontFamily:"var(--fb)",
                  background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},
                shown===0?"💡 Otkrij prvi korak":"💡 Otkrij sljedeći korak ("+(shown+1)+"/"+q.steps.length+")"));
          })(),

          // CONFIDENCE CHECK (vježba, MC, prije provjere)
          practice&&!isRev&&q.type==="mc"&&hasAns(a)&&e("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}},
            e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Koliko si siguran/na?"),
            [["2","😎 Siguran"],["1","🤔 Nisam siguran"],["0","😬 Pogađam"]].map(([v,lbl])=>
              e("button",{key:v,onClick:()=>setConf(p=>({...p,[q.id]:+v})),
                className:"pill"+(conf[q.id]===+v?" pill-blue":"")},lbl))),

          // NAV GUMBI
          e("div",{className:"qnav"},
            e("button",{className:"btn btn-g",disabled:cur===0,onClick:()=>goTo(cur-1)},"← Prethodni"),
            // "Provjeri" gumb SAMO za MC u vježba modu
            practice&&!isRev&&q.type==="mc"&&hasAns(a)&&e("button",{className:"btn btn-chk",onClick:()=>{
              setRev(p=>({...p,[q.id]:true}));
              const result=chk(q,a);
              registerCheck(q,result);
              if(result===true)window._playSound?.("correct");
              else if(result===false)window._playSound?.("wrong");
            }},"✓ Provjeri odgovor"),
            cur<QSX.length-1
              ?e("button",{className:"btn btn-blue",onClick:()=>goTo(cur+1)},"Sljedeći →")
              :e("button",{className:"btn btn-gold",onClick:()=>setShowReview(true)},"Završi ispit ✓")
          )
        )
  );
}
