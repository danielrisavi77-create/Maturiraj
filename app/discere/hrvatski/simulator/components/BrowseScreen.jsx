'use client';
import React, { useState, useMemo, Fragment } from 'react';
import { EXAMS, TOPIC_LABELS, ESEJI, SAZECI, TLBL } from '../hrvatskiSimulatorData';
import { e, LL, chk } from '../utils/helpers';

const TBDG={mc:"b-mc",sa:"b-sa",es:"b-es",saz:"b-sa",mat:"b-mat"};

function BrowseScreen({onBack,initialSearch,initialGlobal}){
  const[selExam,setSelExam]=useState(null);
  const[search,setSearch]=useState(typeof initialSearch==="string"?initialSearch:"");
  const[filterTopic,setFilterTopic]=useState("sve");
  const[filterType,setFilterType]=useState("sve");
  const[globalSearch,setGlobalSearch]=useState(!!(initialGlobal||initialSearch));
  const[expanded,setExpanded]=useState({});

  const exam=selExam?EXAMS[selExam]:null;

  const allQuestions=useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(ex=>{
      // Uključi sve: A, B i jedinstven ispite
      if(!ex.pravi||!Array.isArray(ex.qs)||ex.qs.length===0) return;
      if(ex.razina!=="A" && !ex.jedinstven) return;
      ex.qs.forEach(q=>qs.push({...q,_examKey:ex.key,_examLabel:ex.year+" — "+(ex.season==="ljeto"?"Ljetni":ex.season==="zima"?"Zimski":"Jesenski")}));
    });
    return qs;
  },[]);

  const sourceQs=globalSearch?allQuestions:(exam?exam.qs:[]);
  const questions=sourceQs.filter(q=>{
    if(filterTopic!=="sve"&&q.topic!==filterTopic) return false;
    if(filterType!=="sve"&&q.type!==filterType) return false;
    if(search){
      const s=String(search).toLowerCase();
      if(!q.q.toLowerCase().includes(s)&&!(q.opts||[]).some(o=>o.toLowerCase().includes(s))&&!(q.sol?.ans||q.sol?.ex||"").toLowerCase().includes(s)&&!(TOPIC_LABELS[q.topic]||"").toLowerCase().includes(s)) return false;
    }
    return true;
  });

  // Samo unikatni ispiti (A razina)
  const examList=Object.values(EXAMS).filter(ex=>ex.pravi&&Array.isArray(ex.qs)&&ex.qs.length>0).sort((a,b)=>b.year-a.year||(a.season==="ljeto"?-1:1)||(a.razina==="A"?-1:1));
  const years=[...new Set(examList.map(ex=>ex.year))];
  const availableTopics=[...new Set(sourceQs.map(q=>q.topic||"ostalo"))].sort();
  const availableTypes=[...new Set(sourceQs.map(q=>q.type))];

  function renderQuestion(q,i,showExam){
    return e("div",{key:(q.id||i)+(q._examKey||""),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"16px 18px",boxShadow:"var(--shadow-sm)"}},
      e("div",{style:{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap",alignItems:"center"}},
        e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600}},(i+1)+"."),
        e("span",{className:"fqp-badge "+(TBDG[q.type]||"b-mc"),style:{fontSize:10,background:"var(--blue-d)",color:"var(--blue)",border:"1px solid rgba(75,123,255,.25)"}},TLBL[q.type]||q.type),
        e("span",{className:"topic-tag",style:{fontSize:11}},TOPIC_LABELS[q.topic]||q.topic),
        showExam&&q._examLabel&&e("span",{style:{fontSize:11,color:"var(--muted)"}},q._examLabel)
      ),
      e("div",{style:{fontSize:13,marginBottom:10,lineHeight:1.6,fontWeight:500}},q.q),
      q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:10}},
        q.opts.map((opt,j)=>{
          const marked=q.sol?.cl===LL[j];
          return e("div",{key:j,style:{fontSize:12,padding:"6px 11px",borderRadius:"var(--r)",background:marked?"var(--green-d)":"var(--s2)",border:"1px solid "+(marked?"rgba(30,122,62,.35)":"var(--bdr)"),color:marked?"var(--green)":"var(--text)",fontWeight:marked?700:400,display:"flex",alignItems:"center",gap:8}},
            marked&&e("span",{style:{fontSize:10}},"✓"),LL[j]+". "+opt
          );
        })
      ),
      (q.sol?.ans||q.sol?.ex)&&e("div",{style:{fontSize:12,color:"var(--green)",background:"var(--green-d)",border:"1px solid rgba(30,122,62,.25)",borderRadius:"var(--r)",padding:"8px 11px",lineHeight:1.5}},
        e("span",{style:{fontWeight:700,marginRight:6}},"✓"),(q.sol.ans||q.sol.ex)
      ),
      q.exp&&e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:8,fontStyle:"italic",borderTop:"1px solid var(--bdr)",paddingTop:6}},"💡 "+q.exp)
    );
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:selExam&&!globalSearch?()=>{setSelExam(null);setSearch("");setFilterTopic("sve");setFilterType("sve");}:onBack
      },"← Natrag"),
      e("span",{className:"ntitle"},globalSearch?"🔍 Pretraga pitanja":"📖 Pregled ispita"),
      selExam&&!globalSearch&&!exam.jedinstven&&e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:4}},exam.year+" — "+(exam.season==="ljeto"?"Ljetni":exam.season==="zima"?"Zimski":"Jesenski")+" (Razina "+exam.razina+")")
    ),
    e("div",{className:"screen-enter",style:{maxWidth:760,margin:"0 auto",padding:"24px 20px 80px"}},
      e("div",{style:{display:"flex",gap:8,marginBottom:16,alignItems:"center",flexWrap:"wrap"}},
        e("button",{className:"btn "+(globalSearch?"btn-gold":"btn-g"),style:{fontSize:12,padding:"6px 14px"},onClick:()=>{setGlobalSearch(g=>!g);setSelExam(null);setSearch("");}},
          globalSearch?"🔍 Globalna pretraga (uklj.)":"🔍 Pretraži sve ispite"),
        !globalSearch&&!selExam&&e("span",{style:{fontSize:12,color:"var(--muted)"}},"ili odaberi ispit ispod")
      ),
      (selExam||globalSearch)&&e("div",{style:{marginBottom:12}},
        e("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",marginBottom:8}},
          e("input",{type:"text",placeholder:"Pretraži pitanja, odgovore, teme...",value:search,onChange:ev=>setSearch(ev.target.value),
            autoFocus:!!(initialSearch||initialGlobal),
            style:{flex:1,minWidth:200,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"8px 12px",color:"var(--text)",fontSize:13,fontFamily:"var(--fb)"}}),
          e("select",{value:filterType,onChange:ev=>setFilterType(ev.target.value),
            style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"8px 10px",color:"var(--text)",fontSize:13,fontFamily:"var(--fb)",cursor:"pointer"}},
            e("option",{value:"sve"},"Svi tipovi"),
            availableTypes.map(t=>e("option",{key:t,value:t},TLBL[t]||t))
          )
        ),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("button",{className:"filter-chip"+(filterTopic==="sve"?" active":""),onClick:()=>setFilterTopic("sve")},"Sve teme"),
          availableTopics.map(t=>e("button",{key:t,className:"filter-chip"+(filterTopic===t?" active":""),onClick:()=>setFilterTopic(filterTopic===t?"sve":t)},TOPIC_LABELS[t]||t))
        )
      ),
      (selExam||globalSearch)&&e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:12}},
        questions.length+" pitanja"+(search||filterTopic!=="sve"||filterType!=="sve"?" (filtrirano)":"")+(globalSearch?" · svi ispiti":"")),
      (selExam||globalSearch)&&e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
        questions.slice(0,100).map((q,i)=>renderQuestion(q,i,globalSearch)),
        questions.length>100&&e("div",{style:{textAlign:"center",padding:"16px 0",fontSize:13,color:"var(--muted)"}},"Prikazano 100 od "+questions.length+" — preciznom pretragom smanji broj rezultata.")
      ),
      !selExam&&!globalSearch&&e("div",null,
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:16}},"Odaberi ispit za pregled svih pitanja i točnih odgovora ili klikni 🔍 za globalnu pretragu:"),
        years.map(year=>{
          const yExams=examList.filter(ex=>ex.year===year);
          const open=expanded[year]!==false;
          return e("div",{key:year,style:{marginBottom:8}},
            e("button",{style:{width:"100%",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 16px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,color:"var(--text)"},onClick:()=>setExpanded(p=>({...p,[year]:!open}))},
              e("span",{style:{fontFamily:"var(--fh)",color:"var(--gold)"}},year+"."),
              e("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:400}},yExams.length+" ispit"+(yExams.length>1?"a":"")+" · "+(open?"▲":"▼"))
            ),
            open&&e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:4}},
              yExams.map(ex=>{
                // Pronađi vezani sažetak i eseje za ovaj rok
                const sazKey=ex.year+"_"+ex.season;
                const saz=SAZECI[sazKey];
                const esejRazina=ex.jedinstven?"B":(ex.razina||"B");
                const esejKey=ex.year+"_"+ex.season+"_esej_"+esejRazina;
                const esejAKey=ex.year+"_"+ex.season+"_esej_A";
                const esej=ESEJI[esejKey];
                const esejA=ex.razina==="A"?null:ESEJI[esejAKey]; // za B razinu pokaži i A
                const seasonLabel=ex.season==="ljeto"?"☀️ Ljetni":ex.season==="zima"?"❄️ Zimski":"🍂 Jesenski";
                const seasonClass="exrow-sub-season "+(ex.season==="ljeto"?"ljeto":ex.season==="zima"?"zima":"jesen");
                return e("div",{key:ex.key,style:{marginBottom:4}},
                  /* Ispit red */
                  e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:saz||esej?"var(--r) var(--r) 0 0":"var(--r)",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .15s"},
                    onClick:()=>{setSelExam(ex.key);setSearch("");setFilterTopic("sve");setFilterType("sve");},
                    onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
                    onMouseLeave:ev=>ev.currentTarget.style.background="var(--s1)"},
                    e("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
                      e("span",{className:seasonClass},seasonLabel),
                      ex.razina&&e("span",{className:"exrow-razina "+(ex.razina==="A"?"A":"B")},ex.razina==="A"?"Viša (A)":"Osnov. (B)"),
                      ex.jedinstven&&e("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:4,background:"rgba(100,210,100,.13)",border:"1px solid rgba(100,210,100,.3)",color:"#6dca6d",fontWeight:600}},"Jedinstven"),
                      e("span",{style:{fontSize:13,fontWeight:600}},ex.year+". — "+(ex.season==="ljeto"?"Ljetni":ex.season==="zima"?"Zimski":"Jesenski")+" rok"+(ex.razina?" · Razina "+ex.razina:""))
                    ),
                    e("span",{style:{fontSize:12,color:"var(--muted)",flexShrink:0}},ex.qs.length+" pit. →")
                  ),
                  /* Sažetak — samo jednom (uz jedinstven ili B razinu) */
                  saz&&(ex.jedinstven||(ex.razina==="B"&&!yExams.find(e2=>e2.season===ex.season&&e2.jedinstven)))&&
                  e("div",{style:{background:"rgba(100,210,100,.04)",border:"1px solid rgba(100,210,100,.2)",borderTop:"none",padding:"9px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:(!esej&&!ESEJI[esejAKey])?"0 0 var(--r) var(--r)":"0",cursor:"default"}},
                    e("div",{style:{display:"flex",alignItems:"center",gap:8}},
                      e("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:4,background:"rgba(100,210,100,.15)",border:"1px solid rgba(100,210,100,.3)",color:"#6dca6d",fontWeight:700,flexShrink:0}},"📝 Sažetak"),
                      e("span",{style:{fontSize:12,color:"var(--muted)"}},saz.tekstNaslov)
                    ),
                    e("span",{style:{fontSize:11,color:"#6dca6d",flexShrink:0}},saz.minRijeci+"–"+saz.maxRijeci+" rij.")
                  ),
                  /* Esej */
                  esej&&e("div",{style:{background:"rgba(75,123,255,.04)",border:"1px solid rgba(75,123,255,.18)",borderTop:"none",padding:"9px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:"0 0 var(--r) var(--r)",cursor:"default"}},
                    e("div",{style:{display:"flex",alignItems:"center",gap:8}},
                      e("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:4,background:"var(--blue-d)",border:"1px solid rgba(75,123,255,.25)",color:"var(--blue)",fontWeight:700,flexShrink:0}},"✍️ Esej"),
                      e("span",{style:{fontSize:12,color:"var(--muted)"}},(esej.naslov||"Školski esej")+(ex.razina?" · Razina "+ex.razina:""))
                    ),
                    e("span",{style:{fontSize:11,color:"var(--blue)",flexShrink:0}},esej.minRijeci+"–"+esej.maxRijeci+" rij.")
                  )
                );
              })
            )
          );
        })
      )
    )
  );
}

function EssayTekstCard({tekst,index}){
  const[open,setOpen]=useState(index===0);
  return e("div",{className:"esej-tekst-card"},
    e("button",{
      className:"esej-tekst-header",
      style:{width:"100%",cursor:"pointer",background:"none",border:"none",textAlign:"left"},
      onClick:()=>setOpen(o=>!o)
    },
      "📄 "+tekst.naslov,
      e("span",{style:{marginLeft:"auto",fontSize:10,color:"var(--gold)"}},(open?"▲":"▼"))
    ),
    open&&e("div",{className:"esej-tekst-body"},
      tekst.tekst.split("\n\n").map((p,j)=>e("p",{key:j,style:{marginBottom:10}},p))
    )
  );
}


export { BrowseScreen, EssayTekstCard };
