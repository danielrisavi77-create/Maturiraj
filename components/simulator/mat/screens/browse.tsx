// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Pregled banke zadataka i spremljenih (bookmarkiranih) pitanja. */
import React from 'react';
import { DS, TOPIC_LABELS } from '../core/state';
import { EXAMS } from '../core/exams';
import { parseMath, renderOptContent, renderOptText, renderQText } from '../core/mathText';
import { LL, TBDG, TLBL } from '../core/ui';
const{createElement:e,useState,Fragment}=React;
function BookmarksScreen({onBack, onStartSession}){
  const[bookmarks,setBookmarks]=useState(()=>{
    try{return JSON.parse(DS.get("mat_bookmarks")||"{}");}catch{return {};}
  });
  const[filter,setFilter]=useState("sve");

  const bkList=Object.entries(bookmarks).map(([key,saved])=>{
    const parts=key.split("__");
    if(parts.length<2) return null;
    const examKey=parts[0], qidStr=parts[1];
    const exam=EXAMS[examKey];
    if(!exam) return null;
    const q=(exam.qs||[]).find(q=>String(q.id)===qidStr);
    if(!q) return null;
    return {key,examKey,q,saved};
  }).filter(Boolean);

  const topics=[...new Set(bkList.map(b=>b.q.topic).filter(Boolean))];
  const filtered=filter==="sve"?bkList:bkList.filter(b=>b.q.topic===filter);

  function removeBookmark(key){
    setBookmarks(prev=>{
      const next={...prev};
      delete next[key];
      DS.set("mat_bookmarks",JSON.stringify(next));
      return next;
    });
  }

  function startSession(){
    if(filtered.length===0) return;
    const qs=filtered.map(b=>({...b.q,_examKey:b.examKey}));
    const shuffled=[...qs].sort(()=>Math.random()-.5);
    onStartSession({
      key:"bookmarks_session",
      year:"Bookmarci",season:"session",razina:"B",
      label:"Bookmarci  -  vježbanje",
      qs:shuffled.slice(0,40),
      duration:60*60
    });
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔖 Spremljena pitanja")
    ),
    e("div",{style:{maxWidth:720,margin:"0 auto",padding:"28px 20px 80px"}},
      bkList.length===0
        ?e("div",{style:{textAlign:"center",padding:"60px 0"}},
            e("div",{style:{fontSize:48,opacity:.3,marginBottom:16}},"🔖"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Tu će se pojaviti označena pitanja"),
            e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:24,lineHeight:1.5,maxWidth:440,margin:"0 auto 24px"}},"Dok rješavaš zadatke, klikni 🔖 ikonu ili pritisni Shift+F da spremiš pitanje za kasniji pregled i ciljano ponavljanje."),
            e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
          )
        :e("div",null,
            // Header kartica — indigo gradijent
            e("div",{style:{
              borderRadius:16,padding:"20px 22px",marginBottom:20,
              background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
              display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-8,bottom:-14,fontSize:70,opacity:.05,
                lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"🔖"),
              e("div",{style:{flex:1}},
                e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--bg,#060910)",lineHeight:1,marginBottom:4}},bkList.length),
                e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)"}},
                  "bookmarkana pitanja · sesija do 40 pitanja nasumično")
              ),
              e("button",{
                onClick:startSession,
                style:{background:"var(--bg,#060910)",color:"#1e1040",border:"none",borderRadius:10,
                  padding:"10px 18px",fontWeight:700,fontSize:13,cursor:"pointer",
                  fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}
              },"▶ Pokreni")
            ),
            // Filter po temi
            topics.length>1&&e("div",{style:{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}},
              e("button",{
                onClick:()=>setFilter("sve"),
                style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
                  border:"1px solid "+(filter==="sve"?"var(--blue-b)":"var(--bdr)"),
                  background:filter==="sve"?"var(--blue-d)":"var(--s1)",
                  color:filter==="sve"?"var(--blue)":"var(--muted)"}
              },"Sve ("+bkList.length+")"),
              topics.map(t=>e("button",{key:t,
                onClick:()=>setFilter(t),
                style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
                  border:"1px solid "+(filter===t?"var(--blue-b)":"var(--bdr)"),
                  background:filter===t?"var(--blue-d)":"var(--s1)",
                  color:filter===t?"var(--blue)":"var(--muted)"}
              },TOPIC_LABELS[t]||t))
            ),
            // Lista bookmarkanih pitanja
            e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
              filtered.map(b=>{
                const q=b.q;
                const isMC=q.type==="mc";
                return e("div",{key:b.key,style:{
                  background:"var(--s1)",border:"1px solid var(--bdr)",
                  borderLeft:"3px solid var(--gold)",
                  borderRadius:"0 12px 12px 0",padding:"14px 16px"
                }},
                  e("div",{style:{display:"flex",alignItems:"flex-start",gap:10}},
                    e("div",{style:{flex:1}},
                      e("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:6,flexWrap:"wrap"}},
                        e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
                        e("span",{style:{fontSize:11,color:"var(--muted)"}},
                          b.examKey.replace("_ljeto_"," Ljetni ").replace("_jesen_"," Jesenski ").replace("_zima_"," Zimski "))
                      ),
                      e("div",{style:{fontSize:13,lineHeight:1.6,marginBottom:isMC?8:0}},q.q),
                      // Opcije za MC pitanja
                      isMC&&q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8}},
                        q.opts.map((opt,oi)=>{
                          const letter=LL[oi];
                          const isCorrect=q.sol?.cl===letter;
                          const hasFormula=false;
                          const optContent=hasFormula
                            ?renderOptText(opt)
                            :(opt&&opt.trim()&&opt.trim()!==letter+"."?renderOptText(opt):e("span",{style:{color:"var(--muted)",fontStyle:"italic"}},"(formula)"));
                          return e("div",{key:oi,style:{
                            fontSize:12,padding:"5px 10px",borderRadius:7,
                            background:isCorrect?"var(--green-d)":"var(--s2)",
                            border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"var(--bdr)"),
                            color:isCorrect?"var(--green)":"var(--muted)",
                            fontWeight:isCorrect?600:400,
                            display:"flex",alignItems:"center",gap:8
                          }},
                            e("span",{style:{fontWeight:700,minWidth:20,flexShrink:0}},letter+")"),
                            e("div",{style:{flex:1}},optContent),
                            isCorrect&&e("span",{style:{marginLeft:"auto"}},"✓")
                          );
                        })
                      ),
                      // Kratko objašnjenje
                      q.exp&&e("div",{style:{
                        marginTop:10,padding:"8px 12px",borderRadius:8,
                        background:"rgba(74,144,217,.06)",border:"1px solid rgba(74,144,217,.15)",
                        fontSize:12,color:"var(--text)",lineHeight:1.6
                      }},e("span",{style:{fontWeight:700,color:"var(--blue)",marginRight:6}},"💡"),q.exp)
                    ),
                    e("button",{
                      onClick:()=>removeBookmark(b.key),
                      title:"Ukloni bookmark",
                      style:{background:"none",border:"none",cursor:"pointer",
                        color:"var(--gold)",fontSize:18,padding:"2px 4px",flexShrink:0}
                    },"🔖")
                  )
                );
              })
            )
          )
    )
  );
}
function BrowseScreen({onBack}){
  const[mode,setMode]=React.useState("pick"); // "pick" | "exam" | "global"
  const[selExam,setSelExam]=React.useState(null);
  const[search,setSearch]=React.useState("");
  const[filterTopic,setFilterTopic]=React.useState("sve");
  const[filterType,setFilterType]=React.useState("sve");
  const[filterRazina,setFilterRazina]=React.useState("sve");
  const[openYear,setOpenYear]=React.useState(null);

  const allQuestions=React.useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(ex=>ex.qs.forEach(q=>qs.push({
      ...q,_examKey:ex.key,_examYear:ex.year,_examRazina:ex.razina,
      _examLabel:ex.year+" - "+(ex.season==="ljeto"?"Ljetni":ex.season==="jesen"?"Jesenski":"Zimski")+" ("+ex.razina+")"
    })));
    return qs;
  },[]);

  const exam=selExam?EXAMS[selExam]:null;
  const sourceQs=mode==="global"?allQuestions:(exam?exam.qs:[]);

  // Mapa svih slug-ova koji pripadaju istoj prikaznoj temi
  const topicAliases=React.useMemo(()=>{
    const m={};
    Object.entries(TOPIC_LABELS).forEach(([slug,lbl])=>{(m[lbl]=m[lbl]||[]).push(slug);});
    return m;
  },[]);

  const questions=sourceQs.filter(q=>{
    if(filterRazina!=="sve"&&q._examRazina&&q._examRazina!==filterRazina) return false;
    if(filterTopic!=="sve"){
      const allowed=topicAliases[TOPIC_LABELS[filterTopic]]||[filterTopic];
      if(!allowed.includes(q.topic)) return false;
    }
    if(filterType!=="sve"&&q.type!==filterType) return false;
    if(search){
      const s=search.toLowerCase();
      return q.q.toLowerCase().includes(s)||
        (q.opts||[]).some(o=>o.toLowerCase().includes(s))||
        (TOPIC_LABELS[q.topic]||"").toLowerCase().includes(s);
    }
    return true;
  });

  // Grupiraj ispite po godini
  const examsByYear={};
  Object.values(EXAMS).sort((a,b)=>b.year-a.year).forEach(ex=>{
    if(!examsByYear[ex.year]) examsByYear[ex.year]={A:[],B:[]};
    examsByYear[ex.year][ex.razina].push(ex);
  });
  const years=Object.keys(examsByYear).sort((a,b)=>b-a);
  const seasonIcon=s=>s==="ljeto"?"☀️":s==="jesen"?"🍂":"❄️";
  const seasonLabel=s=>s==="ljeto"?"Ljetni":s==="jesen"?"Jesenski":"Zimski";
  // Dedupliciraj po prikaznoj oznaci — više slug-ova može mapirati na istu temu
  const availableTopics=(()=>{
    const slugs=[...new Set(sourceQs.map(q=>q.topic||"ostalo"))].filter(t=>TOPIC_LABELS[t]);
    const seen=new Set();
    const out=[];
    slugs.forEach(s=>{
      const lbl=TOPIC_LABELS[s];
      if(!seen.has(lbl)){seen.add(lbl);out.push(s);}
    });
    return out.sort((a,b)=>TOPIC_LABELS[a].localeCompare(TOPIC_LABELS[b],"hr"));
  })();

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:mode==="pick"?onBack:()=>{setMode("pick");setSelExam(null);setSearch("");setFilterTopic("sve");setFilterType("sve");}},
        mode==="pick"?"← Natrag":"← Natrag"),
      e("span",{className:"ntitle"},"🔍 Pretraži pitanja")
    ),
    e("div",{style:{maxWidth:860,margin:"0 auto",padding:"20px 20px 60px"}},

      // ── ODABIR MODA ──
      mode==="pick"&&e("div",null,
        // Dvije opcije
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:28}},
          e("div",{
            onClick:()=>setMode("examPick"),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,
              padding:"22px 20px",cursor:"pointer",transition:"all .18s",position:"relative",overflow:"hidden"}
          },
            e("div",{style:{position:"absolute",right:-6,bottom:-10,fontSize:60,opacity:.05,lineHeight:1,userSelect:"none"}},"📝"),
            e("div",{style:{width:42,height:42,borderRadius:11,background:"var(--blue-d)",
              border:"1px solid var(--blue-b)",display:"flex",alignItems:"center",
              justifyContent:"center",fontSize:20,marginBottom:14}},"📝"),
            e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6}},"Po ispitu"),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},
              "Odaberi godinu i rok pa pretraži pitanja iz tog ispita.")
          ),
          e("div",{
            onClick:()=>setMode("global"),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,
              padding:"22px 20px",cursor:"pointer",transition:"all .18s",position:"relative",overflow:"hidden"}
          },
            e("div",{style:{position:"absolute",right:-6,bottom:-10,fontSize:60,opacity:.05,lineHeight:1,userSelect:"none"}},"🌐"),
            e("div",{style:{width:42,height:42,borderRadius:11,background:"rgba(61,214,140,.1)",
              border:"1px solid rgba(61,214,140,.25)",display:"flex",alignItems:"center",
              justifyContent:"center",fontSize:20,marginBottom:14}},"🌐"),
            e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6}},"Svi ispiti"),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},
              "Pretraži sva pitanja iz svih 70 ispita — filtriraj po temi, tipu i razini.")
          )
        )
      ),

      // ── ODABIR ISPITA ──
      mode==="examPick"&&e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Odaberi ispit"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          years.map(year=>{
            const isOpen=openYear===year;
            const hasA=examsByYear[year].A.length>0;
            const hasB=examsByYear[year].B.length>0;
            return e("div",{key:year,style:{
              background:"var(--s1)",border:"1px solid var(--bdr)",
              borderRadius:14,overflow:"hidden"
            }},
              // Godina header
              e("div",{
                onClick:()=>setOpenYear(o=>o===year?null:year),
                style:{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",
                  cursor:"pointer",background:isOpen?"var(--s2)":"var(--s1)",
                  transition:"background .15s",userSelect:"none"}
              },
                e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--blue)",minWidth:52}},year),
                e("div",{style:{flex:1,fontSize:12,color:"var(--muted)"}},
                  (examsByYear[year].A.length+examsByYear[year].B.length)+" ispita"),
                e("div",{style:{display:"flex",gap:5}},
                  hasA&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                    background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},"A"),
                  hasB&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                    background:"var(--teal-d)",border:"1px solid rgba(52,209,191,.25)",color:"var(--teal)"}},"B")
                ),
                e("span",{style:{fontSize:11,color:"var(--muted)",transition:"transform .2s",
                  transform:isOpen?"rotate(180deg)":"rotate(0deg)",display:"inline-block"}},"▾")
              ),
              // Ispiti unutar godine
              isOpen&&e("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--bdr)",
                display:"flex",flexDirection:"column",gap:6}},
                ["A","B"].map(razina=>{
                  const exList=examsByYear[year][razina];
                  if(!exList.length) return null;
                  const isA=razina==="A";
                  return e("div",{key:razina},
                    e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",
                      textTransform:"uppercase",color:isA?"var(--blue)":"var(--teal)",
                      marginBottom:5,paddingLeft:2}},
                      isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)"),
                    e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
                      exList.sort((a,b)=>({ljeto:0,jesen:1,zima:2}[a.season]||0)-({ljeto:0,jesen:1,zima:2}[b.season]||0))
                      .map(ex=>e("div",{key:ex.key,
                        onClick:()=>{setSelExam(ex.key);setMode("exam");setSearch("");setFilterTopic("sve");},
                        style:{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",
                          background:"var(--bg)",border:"1px solid var(--bdr)",borderRadius:9,
                          cursor:"pointer",transition:"all .15s"}
                      },
                        e("span",{style:{fontSize:14}},seasonIcon(ex.season)),
                        e("div",{style:{flex:1}},
                          e("div",{style:{fontSize:13,fontWeight:600}},seasonLabel(ex.season)+" rok"),
                          e("div",{style:{fontSize:11,color:"var(--muted)"}},ex.qs.length+" zadataka")
                        ),
                        e("span",{style:{fontSize:14,color:"var(--muted)"}},"›")
                      ))
                    )
                  );
                })
              )
            );
          })
        )
      ),

      // ── PRETRAGA (exam ili global) ──
      (mode==="exam"||mode==="global")&&e("div",null,

        // Info header
        e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16,flexWrap:"wrap"}},
          mode==="exam"&&exam&&e("div",{style:{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"var(--blue-d)",border:"1px solid var(--blue-b)",
            borderRadius:99,padding:"4px 12px",fontSize:12,fontWeight:600,color:"var(--blue)"
          }},
            seasonIcon(exam.season)," ",exam.year," - ",seasonLabel(exam.season)," (",exam.razina,")"
          ),
          mode==="global"&&e("div",{style:{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"rgba(61,214,140,.1)",border:"1px solid rgba(61,214,140,.25)",
            borderRadius:99,padding:"4px 12px",fontSize:12,fontWeight:600,color:"var(--green)"
          }},"🌐 Svi ispiti - "+allQuestions.length+" pitanja"),
          e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:"auto"}},
            questions.length+" rezultata")
        ),

        // Filteri
        e("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}},
          e("input",{
            type:"text",placeholder:"🔍 Pretraži tekst pitanja...",value:search,
            onChange:ev=>setSearch(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 14px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)",
              flex:"1 1 200px",outline:"none",minWidth:180}
          }),
          mode==="global"&&e("select",{value:filterRazina,onChange:ev=>setFilterRazina(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 12px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)"}},
            e("option",{value:"sve"},"A i B razina"),
            e("option",{value:"A"},"Viša (A)"),
            e("option",{value:"B"},"Osnovna (B)")
          ),
          e("select",{value:filterType,onChange:ev=>setFilterType(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 12px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)"}},
            e("option",{value:"sve"},"Svi tipovi"),
            Object.entries(TLBL).map(([k,v])=>e("option",{key:k,value:k},v))
          )
        ),

        // Tema filtri
        e("div",{style:{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}},
          e("button",{
            onClick:()=>setFilterTopic("sve"),
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
              border:"1px solid "+(filterTopic==="sve"?"var(--blue-b)":"var(--bdr)"),
              background:filterTopic==="sve"?"var(--blue-d)":"var(--s1)",
              color:filterTopic==="sve"?"var(--blue)":"var(--muted)"}
          },"Sve teme"),
          availableTopics.map(t=>e("button",{key:t,
            onClick:()=>setFilterTopic(t),
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
              border:"1px solid "+(filterTopic===t?"var(--blue-b)":"var(--bdr)"),
              background:filterTopic===t?"var(--blue-d)":"var(--s1)",
              color:filterTopic===t?"var(--blue)":"var(--muted)"}
          },TOPIC_LABELS[t]||t))
        ),

        // Lista pitanja
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          questions.slice(0,60).map((q,i)=>e("div",{
            key:(q._examKey||"")+q.id+i,
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,
              padding:"14px 16px"}
          },
            e("div",{style:{display:"flex",gap:7,marginBottom:10,flexWrap:"wrap",alignItems:"center"}},
              e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600,minWidth:20}},(i+1)+"."),
              e("span",{className:TBDG[q.type]||"b-mc",style:{fontSize:10,fontWeight:700,
                letterSpacing:".07em",textTransform:"uppercase",padding:"2px 8px",borderRadius:99}},
                TLBL[q.type]),
              e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
              mode==="global"&&q._examLabel&&e("span",{style:{
                fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:99,
                background:q._examRazina==="A"?"var(--blue-d)":"var(--teal-d)",
                border:"1px solid "+(q._examRazina==="A"?"var(--blue-b)":"rgba(52,209,191,.25)"),
                color:q._examRazina==="A"?"var(--blue)":"var(--teal)"
              }},q._examLabel),
              q.points>1&&e("span",{style:{fontSize:10,color:"var(--gold)",fontWeight:700,marginLeft:"auto"}},q.points+" bod.")
            ),
            e("div",{style:{fontSize:13,lineHeight:1.6,marginBottom:q.type==="mc"?10:0}},renderQText(q.q)),
            q.type==="mc"&&q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
              q.opts.map((opt,oi)=>{
                const isCorrect=q.sol?.cl===LL[oi];
                // opt može biti string ili objekt (parseMath result) — koristi renderOptContent koji handla obje
                const optContent=renderOptContent(opt);
                return e("div",{key:oi,style:{
                  fontSize:12,padding:"5px 10px",borderRadius:7,
                  background:isCorrect?"var(--green-d)":"var(--s2)",
                  border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"var(--bdr)"),
                  color:isCorrect?"var(--green)":"var(--muted)",
                  fontWeight:isCorrect?600:400,
                  display:"flex",alignItems:"center",gap:8
                }},
                  e("span",{style:{fontWeight:700,minWidth:20,flexShrink:0}},LL[oi]+")"),
                  e("div",{style:{flex:1}},optContent),
                  isCorrect&&e("span",{style:{marginLeft:"auto",flexShrink:0}},"✓")
                );
              })
            ),
            (q.type==="num"||q.type==="calc")&&e("div",{style:{
              marginTop:8,fontSize:12,color:"var(--green)",fontWeight:700,
              background:"var(--green-d)",border:"1px solid rgba(61,214,140,.25)",
              borderRadius:7,padding:"5px 10px",display:"inline-block"
            }},"✓ Odgovor: "+q.sol.ans)
          ))
        ),
        questions.length>60&&e("div",{style:{textAlign:"center",padding:"16px 0",fontSize:12,
          color:"var(--muted)",background:"var(--s2)",borderRadius:10,marginTop:8}},
          "Prikazano 60 od "+questions.length+" pitanja - sužite pretragu filtrom teme ili tipa")
      )
    )
  );
}
export { BookmarksScreen, BrowseScreen };
