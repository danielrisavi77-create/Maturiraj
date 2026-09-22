'use client';
import React, { useState, useEffect, useRef, useMemo, Fragment } from 'react';
import { EXAMS, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e } from '../utils/helpers';
import { POJMOVNIK, POJMOVNIK_HRV } from '../data/pojmovnikData';
import { PojmTip } from './OnboardingAndLists';
import { LEKTIRE, LEKTIRE_PITANJA, PRIMJERI } from '../data/lektireData';
import { LEKTIRA_SKRIPTA, skriptaUrl } from '../data/lektiraSkripta';
import { useClientState } from '@/lib/hooks/useClientState';

function LektireScreen({onBack,userData,updateUserData,onGoToExam,initialDjelo,initialAutor,onOpenSkripta}){
  const deepIndex=initialDjelo?LEKTIRE.findIndex(l=>l.djelo===initialDjelo&&(!initialAutor||l.autor===initialAutor)):-1;
  const[tab,setTab]=React.useState("lektire");
  const[otvorenaDjelo,setOtvorenaDjelo]=React.useState(deepIndex>=0?deepIndex:null);
  const[previousDeep,setPreviousDeep]=React.useState({initialDjelo,initialAutor});
  if(previousDeep.initialDjelo!==initialDjelo||previousDeep.initialAutor!==initialAutor){
    setPreviousDeep({initialDjelo,initialAutor});
    if(deepIndex>=0){setTab("lektire");setOtvorenaDjelo(deepIndex);}
  }

  // Deep-link iz skripti: otvori zadano djelo (uz default filter "sve" → indeks u
  // filtrirane === indeks u LEKTIRE). Pokreće se jednom, na dolasku iz skripte.
  React.useEffect(()=>{
    if(!initialDjelo)return;
    const idx=LEKTIRE.findIndex(l=>l.djelo===initialDjelo&&(!initialAutor||l.autor===initialAutor));
    if(idx<0)return;
    const t=setTimeout(()=>{
      try{const el=document.getElementById("lektira-"+idx);if(el&&el.scrollIntoView)el.scrollIntoView({behavior:"smooth",block:"center"});}catch(e){}
    },220);
    return()=>clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[initialDjelo,initialAutor]);
  const[filterPeriod,setFilterPeriod]=React.useState("sve");
  const[searchLektire,setSearchLektire]=React.useState("");
  const[showSearch,setShowSearch]=React.useState(false);
  const[showFilter,setShowFilter]=React.useState(false);
  function toggleFilter(){setShowFilter(s=>!s);}
  function toggleSearch(){setShowSearch(s=>!s);if(showSearch){setSearchLektire("");}}
  const[uspDjelo1,setUspDjelo1]=React.useState("");
  const[openEre,setOpenEre]=React.useState({});
  function togEra(i){setOpenEre(prev=>({...prev,[i]:!prev[i]}));}
  const[uspDjelo2,setUspDjelo2]=React.useState("");
  // Flashcard state
  const[fcIdx,setFcIdx]=React.useState(0);
  const[fcFlipped,setFcFlipped]=React.useState(false);
  const[fcMode,setFcMode]=React.useState("pojam"); // pojam|lik|pitanje
  const[fcScore,setFcScore]=React.useState({ok:0,skip:0});
  // Progress tracking
  // Progress tracking — localStorage + userData
  const[naučeno,setNaučeno]=React.useState(()=>{
    try{
      const stored=localStorage.getItem("discere_lektire_prog");
      if(stored) return JSON.parse(stored)||{};
      return userData?.lektireNauceno||{};
    }catch(e){return userData?.lektireNauceno||{};}
  });
  function toggleNauceno(djelo){
    const next={...naučeno,[djelo]:!naučeno[djelo]};
    setNaučeno(next);
    try{localStorage.setItem("discere_lektire_prog",JSON.stringify(next));}catch(e){}
    updateUserData&&updateUserData(prev=>({...prev,lektireNauceno:next}));
  }
  const brNaucenih=Object.values(naučeno).filter(Boolean).length;


  const brObveznih=LEKTIRE.filter(l=>l.obvezna).length;
  const brNaucenihObveznih=LEKTIRE.filter(l=>l.obvezna&&naučeno[l.djelo]).length;

  const periodi=["sve","Antika","Renesansa","Romantizam","Realizam","Realizam (HR)","Ekspresionizam","Modernizam","Egzistencijalizam","Moderna (HR)","Avangarda (HR)","Ekspresionizam (HR)","Hrvatska moderna proza"];

  const filtrirane=useMemo(()=>{
    let base=filterPeriod==="sve"?LEKTIRE
      :filterPeriod==="obvezna"?LEKTIRE.filter(l=>l.obvezna)
      :filterPeriod==="dodatna"?LEKTIRE.filter(l=>!l.obvezna)
      :LEKTIRE.filter(l=>l.period===filterPeriod);
    if(searchLektire.trim().length>=2){
      const s=searchLektire.toLowerCase();
      base=base.filter(l=>
        l.djelo.toLowerCase().includes(s)||
        l.autor.toLowerCase().includes(s)||
        l.tema.toLowerCase().includes(s)||
        l.period.toLowerCase().includes(s)
      );
    }
    return base;
  },[filterPeriod,searchLektire]);

  // Flashcard shuffle
  const[fcItems]=useClientState(()=>[...LEKTIRE].sort(()=>Math.random()-.5),LEKTIRE);
  const fcCur=fcItems[fcIdx%fcItems.length];


  function TabBtn({id,label}){
    return e("button",{onClick:()=>{setTab(id);setSearchLektire("");setShowSearch(false);setShowFilter(false);setFilterPeriod("sve");},style:{
      padding:"7px 14px",borderRadius:99,fontSize:12,fontWeight:600,
      cursor:"pointer",transition:"all .15s",fontFamily:"var(--fb)",flexShrink:0,
      border:"1px solid "+(tab===id?"var(--blue)":"var(--bdr)"),
      background:tab===id?"var(--blue-d)":"transparent",
      color:tab===id?"var(--blue)":"var(--muted)"
    }},label);
  }

  return e("div",{className:"screen-enter"},
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📚 Lektire & Esej"),
      brNaucenih>0&&e("span",{className:"nbadge"},brNaucenih+"/"+LEKTIRE.length+" naučeno")
    ),
    e("div",{style:{maxWidth:780,margin:"0 auto",padding:"24px 20px 80px"}},

      e("div",{style:{display:"flex",gap:6,marginBottom:24,flexWrap:"wrap"}},
        e(TabBtn,{id:"lektire",label:"📚 Lektire"}),
        e(TabBtn,{id:"sabloni",label:"🏗 Šablone po djelu"}),
        e(TabBtn,{id:"tablica",label:"📋 Brza tablica"}),
        e(TabBtn,{id:"flashcard",label:"🃏 Flashcards"}),
        e(TabBtn,{id:"primjeri",label:"💡 Dobro/Loše"}),
        e(TabBtn,{id:"kriteriji",label:"📊 Kriteriji"}),
        e(TabBtn,{id:"plan",label:"⏱ Plan ispita"}),
        e(TabBtn,{id:"predlosci",label:"✍️ Predlošci"}),
        e(TabBtn,{id:"usporedi",label:"⚖️ Usporedi"}),
        e(TabBtn,{id:"osa",label:"📅 Vremenska os"}),
      ),

      /* ── LEKTIRE ── */
      tab==="lektire"&&e("div",null,

        /* ── HEADER s progress barom ── */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
            flexWrap:"wrap",gap:12,marginBottom:16}},
            e("div",null,
              e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"📚 Obvezna lektira"),
              e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
                "Klikni djelo za detalje · klikni ✓ za označavanje kao naučeno")
            ),
            e("div",{style:{display:"flex",gap:8,alignItems:"center",flexShrink:0}},
              brNaucenih>0&&e("button",{
                className:"btn btn-g",style:{fontSize:11,padding:"4px 10px"},
                onClick:()=>{setNaučeno({});try{localStorage.removeItem("discere_lektire_prog");}catch(e){}}
              },"↺ Reset")
            )
          ),
          /* Progress bar */
          e("div",{style:{background:"var(--s2)",borderRadius:99,height:8,
            overflow:"hidden",border:"1px solid var(--bdr)",marginBottom:6}},
            e("div",{style:{
              height:"100%",borderRadius:99,
              background:"linear-gradient(90deg,var(--blue),var(--green))",
              width:(brNaucenihObveznih/brObveznih*100)+"%",
              transition:"width .4s ease",
              minWidth:brNaucenihObveznih>0?"8px":"0"
            }})
          ),
          e("div",{style:{display:"flex",justifyContent:"space-between",
            fontSize:12,color:"var(--muted)"}},
            e("span",null,brNaucenihObveznih+" / "+brObveznih+" obveznih naučeno"),
            e("span",{style:{
              fontWeight:700,
              color:brNaucenihObveznih===brObveznih?"var(--green)":"var(--muted)"
            }},
              brNaucenihObveznih===brObveznih?"🎉 Sve naučeno!"
              :Math.round(brNaucenihObveznih/brObveznih*100)+"%"
            )
          )
        ),

        /* ── PRETRAGA ── */
        e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showSearch?10:14}},
          e("button",{
            onClick:toggleSearch,
            style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
              borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
              fontFamily:"var(--fb)",transition:"all .18s",
              border:"1px solid "+(showSearch?"var(--blue)":"var(--bdr)"),
              background:showSearch?"var(--blue-d)":"transparent",
              color:showSearch?"var(--blue)":"var(--muted)"}
          },
            e("span",null,"🔍"),
            e("span",null,showSearch?"Zatvori pretragu":"Pretraži"),
            showSearch&&searchLektire.length>0&&e("span",{style:{
              background:"var(--blue)",color:"#fff",borderRadius:99,
              fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
            }},filtrirane.length)
          )
        ),
        showSearch&&e("div",{style:{position:"relative",marginBottom:10}},
          e("span",{style:{position:"absolute",left:12,top:"50%",
            transform:"translateY(-50%)",fontSize:16,pointerEvents:"none"}},"🔍"),
          e("input",{type:"text",placeholder:"Pretraži djelo, autora, temu, period...",
            value:searchLektire,autoFocus:true,
            onChange:ev=>{setSearchLektire(ev.target.value);setOtvorenaDjelo(null);},
            style:{width:"100%",background:"var(--s1)",border:"1px solid var(--blue)",
              borderRadius:"var(--r)",padding:"10px 14px 10px 38px",fontSize:13,
              color:"var(--text)",fontFamily:"var(--fb)",boxSizing:"border-box",outline:"none"}}),
          searchLektire.length>0&&e("button",{onClick:()=>setSearchLektire(""),
            style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",
              background:"none",border:"none",cursor:"pointer",fontSize:14,
              color:"var(--muted)",lineHeight:1}},"×")
        ),
                e("div",{style:{marginBottom:16}},
          /* Toggle gumb */
          e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showFilter?10:0}},
            e("button",{
              onClick:toggleFilter,
              style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
                borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
                fontFamily:"var(--fb)",transition:"all .18s",
                border:"1px solid "+(showFilter?"var(--blue)":"var(--bdr)"),
                background:showFilter?"var(--blue-d)":"transparent",
                color:showFilter?"var(--blue)":"var(--muted)"}
            },
              e("span",null,"⚙️"),
              e("span",null,showFilter?"Sakrij filtere":"Filtriraj"),
              filterPeriod!=="sve"&&e("span",{style:{
                background:"var(--blue)",color:"#fff",borderRadius:99,
                fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
              }},"✓")
            ),
            filterPeriod!=="sve"&&e("button",{
              onClick:()=>{setFilterPeriod("sve");},
              style:{fontSize:11,color:"var(--muted)",background:"none",
                border:"none",cursor:"pointer",fontFamily:"var(--fb)",padding:"4px 8px"}
            },"× Resetiraj filter")
          ),

          showFilter&&e("div",{style:{animation:"fadeIn .15s ease"}},
            e("div",{style:{display:"flex",gap:6,marginBottom:10}},
              [["sve","Sve lektire",null,"var(--text)"],
               ["obvezna","Obvezne","var(--blue)","var(--blue)"],
               ["dodatna","Dodatne","var(--gold)","var(--gold)"]
              ].map(([id,label,col,tc])=>{
                const active=filterPeriod===id;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(id);setOtvorenaDjelo(null);},
                  style:{flex:1,padding:"9px 8px",borderRadius:10,fontSize:12,
                    fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",
                    transition:"all .18s",textAlign:"center",
                    border:"1px solid "+(active?(col||"var(--bdr2)"):"var(--bdr)"),
                    background:active?(col||"var(--s2)")+(col?"18":""):"var(--s1)",
                    color:active?(tc||"var(--text)"):"var(--muted)",
                    boxShadow:active?"0 2px 8px rgba(0,0,0,.08)":"none"}
                },label);
              })
            ),
            e("div",{
              style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,
                scrollbarWidth:"none",msOverflowStyle:"none",cursor:"grab",userSelect:"none"},
              ref:el=>{
                if(!el||el._dragInit) return;
                el._dragInit=true;
                let down=false,startX=0,scrollLeft=0;
                el.addEventListener("mousedown",ev=>{down=true;startX=ev.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.cursor="grabbing";});
                el.addEventListener("mouseleave",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mouseup",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mousemove",ev=>{if(!down)return;ev.preventDefault();el.scrollLeft=scrollLeft-(ev.pageX-el.offsetLeft-startX)*1.2;});
              }
            },
              [["Antika","🏛","#c084fc"],["Renesansa","🌅","#fb923c"],["Barok","🌹","#f59e0b"],
               ["Romantizam","🌊","#34d399"],["Realizam","🏙","#60a5fa"],["Realizam (HR)","🇭🇷","#3b82f6"],
               ["Simbolizam","🌙","#a78bfa"],["Moderna (HR)","✨","#22d3ee"],["Avangarda (HR)","⚡","#e879f9"],
               ["Ekspresionizam","🔥","#f87171"],["Ekspresionizam (HR)","🔥","#fb7185"],
               ["Modernizam","📖","#4ade80"],["Modernizam (HR)","📖","#34d399"],
               ["Egzistencijalizam","🔍","#fbbf24"],["Preporod","🌱","#86efac"],
               ["Humanizam/Renesansa","🌅","#fb923c"],["Hrvatska moderna proza","🇭🇷","#22d3ee"],
              ].filter(([id])=>LEKTIRE.some(l=>l.period===id))
              .map(([id,iko,boja])=>{
                const active=filterPeriod===id;
                const count=LEKTIRE.filter(l=>l.period===id).length;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(active?"sve":id);setOtvorenaDjelo(null);},
                  style:{display:"flex",flexDirection:"column",alignItems:"center",
                    gap:3,padding:"8px 12px",borderRadius:12,cursor:"pointer",
                    fontFamily:"var(--fb)",transition:"all .18s",flexShrink:0,
                    border:"2px solid "+(active?boja:"var(--bdr)"),
                    background:active?boja+"20":"var(--s1)",
                    boxShadow:active?"0 2px 12px "+boja+"44":"none",minWidth:68}
                },
                  e("span",{style:{fontSize:20,lineHeight:1}},iko),
                  e("span",{style:{fontSize:10,fontWeight:700,color:active?boja:"var(--muted)",
                    textAlign:"center",lineHeight:1.3,maxWidth:64,
                    whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},
                    id.replace(" (HR)","").replace("Hrvatska moderna proza","HR proza")),
                  e("span",{style:{fontSize:9,color:active?boja+"cc":"var(--bdr2)",fontWeight:600}},
                    count+(count===1?" djelo":" djela"))
                );
              })
            )
          )
        ),

        /* ── EMPTY STATE ── */
        filtrirane.length===0&&e("div",{style:{
          textAlign:"center",padding:"40px 20px",color:"var(--muted)"}},
          e("div",{style:{fontSize:36,marginBottom:8}},"🔍"),
          e("div",{style:{fontSize:14,marginBottom:4,fontWeight:600}},"Nema rezultata"),
          e("div",{style:{fontSize:12}},"Pokušaj drugu pretragu ili ukloni filter.")
        ),

        /* ── LISTA LEKTIRA ── */
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          filtrirane.map((l,i)=>{
            const isNauceno=!!naučeno[l.djelo];
            const isOpen=otvorenaDjelo===i;
            const periodBoja=l.obvezna?"var(--blue)":"var(--gold)";
            return e("div",{key:i,id:"lektira-"+i,style:{
              background:"var(--s1)",
              border:"1px solid "+(isNauceno?"rgba(52,212,122,.35)":isOpen?"rgba(45,84,196,.3)":"var(--bdr)"),
              borderRadius:14,
              overflow:"hidden",
              transition:"border-color .2s, box-shadow .2s",
              boxShadow:isOpen?"0 4px 20px rgba(0,0,0,.12)":"none"
            }},

              /* ── KARTICA HEADER ── */
              e("div",{
                style:{padding:"14px 16px",cursor:"pointer",display:"flex",
                  alignItems:"center",gap:12,
                  background:isOpen?"var(--s2)":"transparent",
                  transition:"background .15s"},
                onClick:()=>setOtvorenaDjelo(isOpen?null:i),
                onMouseEnter:ev=>!isOpen&&(ev.currentTarget.style.background="var(--s2)"),
                onMouseLeave:ev=>!isOpen&&(ev.currentTarget.style.background="transparent")
              },
                /* Checkbox krug */
                e("div",{
                  style:{
                    width:28,height:28,borderRadius:"50%",flexShrink:0,
                    background:isNauceno?"var(--green)":"var(--s3)",
                    border:"2px solid "+(isNauceno?"var(--green)":"var(--bdr2)"),
                    display:"flex",alignItems:"center",justifyContent:"center",
                    cursor:"pointer",transition:"all .2s",fontSize:13,
                    boxShadow:isNauceno?"0 0 0 3px rgba(52,212,122,.2)":"none"
                  },
                  onClick:ev=>{ev.stopPropagation();toggleNauceno(l.djelo);}
                },isNauceno?"✓":""),

                /* Info */
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{display:"flex",alignItems:"center",gap:6,
                    marginBottom:3,flexWrap:"wrap"}},
                    e("span",{style:{fontWeight:700,fontSize:14,
                      textDecoration:isNauceno?"line-through":"none",
                      color:isNauceno?"var(--muted)":"var(--text)",
                      transition:"all .2s"}},l.djelo),

                  ),
                  e("div",{style:{fontSize:12,color:"var(--muted)",display:"flex",
                    alignItems:"center",gap:6}},
                    e("span",null,l.autor),
                    e("span",{style:{opacity:.4}},"·"),
                    e(PojmTip,{pojam:l.period},
                      e("span",{style:{color:"var(--blue)",cursor:"pointer"}},l.period))
                  )
                ),

                /* Strelica */
                e("div",{style:{
                  width:24,height:24,borderRadius:"50%",flexShrink:0,
                  background:"var(--s3)",border:"1px solid var(--bdr)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:10,color:"var(--muted)",
                  transform:isOpen?"rotate(180deg)":"rotate(0deg)",
                  transition:"transform .25s ease"
                }},"▼")
              ),

              /* ── EXPANDED CONTENT ── */
              isOpen&&e("div",{style:{
                padding:"16px",
                borderTop:"1px solid var(--bdr)",
                background:"var(--s2)",
                display:"flex",flexDirection:"column",gap:12,
                animation:"fadeIn .15s ease"
              }},
                /* Teme */
                e("div",{style:{
                  padding:"10px 14px",
                  background:"var(--s1)",
                  borderRadius:10,
                  borderLeft:"3px solid var(--blue)"
                }},
                  e("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
                    letterSpacing:".07em",color:"var(--blue)",marginBottom:5}},"📌 Teme"),
                  e("div",{style:{fontSize:13,lineHeight:1.7,color:"var(--text)"}},
                    (()=>{
                      const KNJ_POJMOVI=["romantizam","realizam","ekspresionizam",
                        "modernizam","naturalizam","simbolizam","avangarda",
                        "egzistencijalizam","barok","renesansa","humanizam",
                        "tragedija","komedija","roman","novela","drama","ep",
                        "sonet","metafora","ironija","alegorija","satira",
                        "monolog","dijalog","determinizam","femme fatale",
                        "antijunak","katarza","hamartia","in medias res",
                        "slobodni stih","pastorala","preporod","gradacija",
                        "anafora","personifikacija","hiperbola"];
                      const parts=l.tema.split(", ");
                      return parts.map((part,pi)=>
                        e("span",{key:pi},
                          pi>0?", ":"",
                          KNJ_POJMOVI.some(p=>part.toLowerCase().includes(p))
                            ?e(PojmTip,{pojam:KNJ_POJMOVI.find(p=>part.toLowerCase().includes(p))},part)
                            :part
                        )
                      );
                    })()
                  )
                ),

                /* Likovi + Pitanje u 2 stupca na desktop */
                e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",
                  gap:10}},
                  e("div",{style:{padding:"10px 14px",background:"rgba(124,92,252,.06)",
                    borderRadius:10,border:"1px solid rgba(124,92,252,.15)"}},
                    e("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
                      letterSpacing:".07em",color:"#a78bfa",marginBottom:5}},"👤 Likovi"),
                    e("div",{style:{fontSize:12,lineHeight:1.65,color:"var(--text)"}},l.likovi)
                  ),
                  e("div",{style:{padding:"10px 14px",background:"var(--blue-d)",
                    borderRadius:10,border:"1px solid rgba(45,84,196,.18)"}},
                    e("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
                      letterSpacing:".07em",color:"var(--blue)",marginBottom:5}},"📝 Esejsko pitanje"),
                    e("div",{style:{fontSize:12,lineHeight:1.65,fontStyle:"italic",
                      color:"var(--text)"}},l.pitanje)
                  )
                ),

                /* Pojavljuje se */
                e("div",{style:{fontSize:11,color:"var(--muted)",
                  padding:"6px 10px",background:"var(--s3)",
                  borderRadius:8,lineHeight:1.6}},
                  "📋 "+l.pojavljuje
                ),

                /* Akcije */
                e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
                  e("button",{className:"btn btn-g",
                    style:{fontSize:11,flex:1},
                    onClick:()=>{setTab("sabloni");setOtvorenaDjelo(i+100);}},
                    "✍️ Šablona za esej →"),

                  /* Skripta — detaljna obrada djela (besplatno). Modal ako je dostupan
                     opener (ostaje u simulatoru), inače fallback na link u novom tabu. */
                  (LEKTIRA_SKRIPTA[l.djelo]?(()=>{
                    const _sk=LEKTIRA_SKRIPTA[l.djelo];
                    const _st={fontSize:11,flex:1,textDecoration:"none",textAlign:"center",
                      display:"inline-flex",alignItems:"center",justifyContent:"center",gap:4};
                    const _ttl="Detaljna obrada u skripti — "+_sk.chapter;
                    return onOpenSkripta
                      ?e("button",{className:"btn",style:_st,title:_ttl,
                          onClick:()=>onOpenSkripta(_sk,l.djelo)},"📖 Detaljno u skripti →")
                      :e("a",{className:"btn",style:_st,title:_ttl,
                          href:skriptaUrl(_sk,{anchor:true}),target:"_blank",rel:"noopener noreferrer"},
                          "📖 Detaljno u skripti →");
                  })():null),

                  /* Pitanja iz ispita */
                  (()=>{
                    const kljuc=l.djelo==="Camao, Cvijet sa raskršća, Kip domovine leta 188*"
                      ?l.djelo
                      :l.djelo==="Izbor iz poezije"
                      ?"Izbor iz poezije ("+l.autor.split(" ").pop()+")"
                      :l.djelo;
                    const pitanja=LEKTIRE_PITANJA[kljuc]||LEKTIRE_PITANJA[l.djelo]||[];
                    return pitanja.length>0&&e("div",{style:{
                      display:"flex",gap:5,flexWrap:"wrap",flex:2}},
                      e("span",{style:{fontSize:11,color:"var(--muted)",
                        alignSelf:"center",whiteSpace:"nowrap"}},"📋 Ispiti:"),
                      pitanja.map((p,pi)=>{
                        const[god,rok,raz]=p.exam.split("_");
                        const label=god+"."+(rok==="ljeto"?"🌞":rok==="jesen"?"🍂":"❄️")+(raz==="A"?" A":" B");
                        return e("button",{key:pi,
                          className:"btn btn-g",style:{fontSize:10,padding:"3px 8px"},
                          onClick:()=>{
                            setPendingHighlight({examKey:p.exam,qid:p.qid});
                            goExamMode(p.exam);
                          }},label);
                      })
                    );
                  })()
                )
              )
            );
          })
        )
      ),


      /* ── ŠABLONE PO DJELU ── */
      tab==="sabloni"&&e("div",null,
        e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:4}},"Esej šablone po djelu"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:16,lineHeight:1.6}},
          "Za svako djelo: teza, 2 argumenta i zaključak. Prilagodi vlastitim riječima."),

                /* Pretraga — toggle */
        e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showSearch?10:14}},
          e("button",{
            onClick:toggleSearch,
            style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
              borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
              fontFamily:"var(--fb)",transition:"all .18s",
              border:"1px solid "+(showSearch?"var(--blue)":"var(--bdr)"),
              background:showSearch?"var(--blue-d)":"transparent",
              color:showSearch?"var(--blue)":"var(--muted)"}
          },
            e("span",null,"🔍"),
            e("span",null,showSearch?"Zatvori pretragu":"Pretraži"),
            showSearch&&searchLektire.length>0&&e("span",{style:{
              background:"var(--blue)",color:"#fff",borderRadius:99,
              fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
            }},filtrirane.length)
          )
        ),
        showSearch&&e("div",{style:{position:"relative",marginBottom:10}},
          e("span",{style:{position:"absolute",left:12,top:"50%",
            transform:"translateY(-50%)",fontSize:16,pointerEvents:"none"}},"🔍"),
          e("input",{type:"text",placeholder:"Pretraži djelo, autora, temu, period...",
            value:searchLektire,autoFocus:true,
            onChange:ev=>{setSearchLektire(ev.target.value);setOtvorenaDjelo(null);},
            style:{width:"100%",background:"var(--s1)",border:"1px solid var(--blue)",
              borderRadius:"var(--r)",padding:"10px 14px 10px 38px",fontSize:13,
              color:"var(--text)",fontFamily:"var(--fb)",boxSizing:"border-box",outline:"none"}}),
          searchLektire.length>0&&e("button",{onClick:()=>setSearchLektire(""),
            style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",
              background:"none",border:"none",cursor:"pointer",fontSize:14,
              color:"var(--muted)",lineHeight:1}},"×")
        ),

        /* Period filter */
        e("div",{style:{marginBottom:16}},
          /* Toggle gumb */
          e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showFilter?10:0}},
            e("button",{
              onClick:toggleFilter,
              style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
                borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
                fontFamily:"var(--fb)",transition:"all .18s",
                border:"1px solid "+(showFilter?"var(--blue)":"var(--bdr)"),
                background:showFilter?"var(--blue-d)":"transparent",
                color:showFilter?"var(--blue)":"var(--muted)"}
            },
              e("span",null,"⚙️"),
              e("span",null,showFilter?"Sakrij filtere":"Filtriraj"),
              filterPeriod!=="sve"&&e("span",{style:{
                background:"var(--blue)",color:"#fff",borderRadius:99,
                fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
              }},"✓")
            ),
            filterPeriod!=="sve"&&e("button",{
              onClick:()=>{setFilterPeriod("sve");},
              style:{fontSize:11,color:"var(--muted)",background:"none",
                border:"none",cursor:"pointer",fontFamily:"var(--fb)",padding:"4px 8px"}
            },"× Resetiraj filter")
          ),
          showFilter&&e("div",{style:{animation:"fadeIn .15s ease"}},
            e("div",{style:{display:"flex",gap:6,marginBottom:10}},
              [["sve","Sve lektire",null,"var(--text)"],
               ["obvezna","Obvezne","var(--blue)","var(--blue)"],
               ["dodatna","Dodatne","var(--gold)","var(--gold)"]
              ].map(([id,label,col,tc])=>{
                const active=filterPeriod===id;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(id);setOtvorenaDjelo(null);},
                  style:{flex:1,padding:"9px 8px",borderRadius:10,fontSize:12,
                    fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",
                    transition:"all .18s",textAlign:"center",
                    border:"1px solid "+(active?(col||"var(--bdr2)"):"var(--bdr)"),
                    background:active?(col||"var(--s2)")+(col?"18":""):"var(--s1)",
                    color:active?(tc||"var(--text)"):"var(--muted)",
                    boxShadow:active?"0 2px 8px rgba(0,0,0,.08)":"none"}
                },label);
              })
            ),
            e("div",{
              style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,
                scrollbarWidth:"none",msOverflowStyle:"none",cursor:"grab",userSelect:"none"},
              ref:el=>{
                if(!el||el._dragInit) return;
                el._dragInit=true;
                let down=false,startX=0,scrollLeft=0;
                el.addEventListener("mousedown",ev=>{down=true;startX=ev.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.cursor="grabbing";});
                el.addEventListener("mouseleave",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mouseup",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mousemove",ev=>{if(!down)return;ev.preventDefault();el.scrollLeft=scrollLeft-(ev.pageX-el.offsetLeft-startX)*1.2;});
              }
            },
              [["Antika","🏛","#c084fc"],["Renesansa","🌅","#fb923c"],["Barok","🌹","#f59e0b"],
               ["Romantizam","🌊","#34d399"],["Realizam","🏙","#60a5fa"],["Realizam (HR)","🇭🇷","#3b82f6"],
               ["Simbolizam","🌙","#a78bfa"],["Moderna (HR)","✨","#22d3ee"],["Avangarda (HR)","⚡","#e879f9"],
               ["Ekspresionizam","🔥","#f87171"],["Ekspresionizam (HR)","🔥","#fb7185"],
               ["Modernizam","📖","#4ade80"],["Modernizam (HR)","📖","#34d399"],
               ["Egzistencijalizam","🔍","#fbbf24"],["Preporod","🌱","#86efac"],
               ["Humanizam/Renesansa","🌅","#fb923c"],["Hrvatska moderna proza","🇭🇷","#22d3ee"],
              ].filter(([id])=>LEKTIRE.some(l=>l.period===id))
              .map(([id,iko,boja])=>{
                const active=filterPeriod===id;
                const count=LEKTIRE.filter(l=>l.period===id).length;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(active?"sve":id);setOtvorenaDjelo(null);},
                  style:{display:"flex",flexDirection:"column",alignItems:"center",
                    gap:3,padding:"8px 12px",borderRadius:12,cursor:"pointer",
                    fontFamily:"var(--fb)",transition:"all .18s",flexShrink:0,
                    border:"2px solid "+(active?boja:"var(--bdr)"),
                    background:active?boja+"20":"var(--s1)",
                    boxShadow:active?"0 2px 12px "+boja+"44":"none",minWidth:68}
                },
                  e("span",{style:{fontSize:20,lineHeight:1}},iko),
                  e("span",{style:{fontSize:10,fontWeight:700,color:active?boja:"var(--muted)",
                    textAlign:"center",lineHeight:1.3,maxWidth:64,
                    whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},
                    id.replace(" (HR)","").replace("Hrvatska moderna proza","HR proza")),
                  e("span",{style:{fontSize:9,color:active?boja+"cc":"var(--bdr2)",fontWeight:600}},
                    count+(count===1?" djelo":" djela"))
                );
              })
            )
          )
        ),

        /* Lista šablona — originalni vizual */
        e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
          (()=>{
            let base=filterPeriod==="sve"?LEKTIRE
              :filterPeriod==="obvezna"?LEKTIRE.filter(l=>l.obvezna)
              :filterPeriod==="dodatna"?LEKTIRE.filter(l=>!l.obvezna)
              :LEKTIRE.filter(l=>l.period===filterPeriod);
            if(searchLektire.trim().length>=2){
              const s=searchLektire.toLowerCase();
              base=base.filter(l=>l.djelo.toLowerCase().includes(s)||l.autor.toLowerCase().includes(s));
            }
            if(base.length===0) return e("div",{style:{textAlign:"center",
              padding:"32px",color:"var(--muted)"}},
              e("div",{style:{fontSize:32,marginBottom:8}},"🔍"),
              e("div",{style:{fontSize:14,fontWeight:600}},"Nema rezultata")
            );
            return base.map((l,i)=>{
              const gi=LEKTIRE.indexOf(l);
              const isOpen=otvorenaDjelo===gi+100;
              return e("div",{key:gi,style:{background:"var(--s1)",
                border:"1px solid var(--bdr)",borderRadius:"var(--r)",overflow:"hidden"}},
                e("div",{style:{padding:"11px 14px",cursor:"pointer",display:"flex",
                  alignItems:"center",gap:10,fontWeight:700,fontSize:13},
                  onClick:()=>setOtvorenaDjelo(isOpen?null:gi+100)},
                  e("span",{style:{flex:1}},l.djelo+" — "+l.autor),
                  e("span",{style:{color:"var(--muted)",fontSize:11}},isOpen?"▲":"▼")
                ),
                isOpen&&e(React.Fragment,null,
                  /* Overlay pozadina */
                  e("div",{
                    onClick:()=>setOtvorenaDjelo(null),
                    style:{position:"fixed",inset:0,zIndex:400,
                      background:"rgba(0,0,0,.45)",backdropFilter:"blur(2px)"}
                  }),
                  /* Panel */
                  e("div",{style:{
                    position:"fixed",
                    top:"50%",left:"50%",
                    transform:"translate(-50%,-50%)",
                    zIndex:401,
                    width:"min(680px,95vw)",
                    maxHeight:"85vh",
                    overflowY:"auto",
                    background:"var(--bg)",
                    borderRadius:20,
                    boxShadow:"0 24px 80px rgba(0,0,0,.35)",
                    display:"flex",flexDirection:"column",
                    animation:"fadeIn .2s ease"
                  }},
                    /* Panel header */
                    e("div",{style:{
                      padding:"20px 24px 16px",
                      borderBottom:"1px solid var(--bdr)",
                      position:"sticky",top:0,
                      background:"var(--bg)",zIndex:1,
                      borderRadius:"20px 20px 0 0"
                    }},
                      e("div",{style:{display:"flex",justifyContent:"space-between",
                        alignItems:"flex-start",gap:12}},
                        e("div",null,
                          e("div",{style:{fontFamily:"var(--fh)",fontSize:20,
                            marginBottom:4,lineHeight:1.3}},l.djelo),
                          e("div",{style:{fontSize:13,color:"var(--muted)"}},l.autor)
                        ),
                        e("button",{
                          onClick:()=>setOtvorenaDjelo(null),
                          style:{background:"var(--s2)",border:"1px solid var(--bdr)",
                            borderRadius:"50%",width:32,height:32,cursor:"pointer",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            fontSize:16,color:"var(--muted)",flexShrink:0,lineHeight:1}
                        },"×")
                      ),
                      e("div",{style:{marginTop:10,fontSize:12,color:"var(--muted)",
                        fontStyle:"italic",lineHeight:1.6,
                        padding:"8px 12px",background:"var(--s2)",borderRadius:8}},
                        "❓ "+l.pitanje)
                    ),
                    /* Panel sadržaj */
                    e("div",{style:{padding:"20px 24px",display:"flex",
                      flexDirection:"column",gap:16}},
                      [{label:"💡 Teza",text:l.sablon.teza,col:"var(--blue)",
                        desc:"Napiši ovu tezu u prvoj rečenici uvoda."},
                       {label:"📌 Argument 1",text:l.sablon.arg1,col:"var(--gold)",
                        desc:"Razvij u prvom odlomku razrade s citatom."},
                       {label:"📌 Argument 2",text:l.sablon.arg2,col:"var(--gold)",
                        desc:"Razvij u drugom odlomku razrade s citatom."},
                       {label:"🏁 Zaključak",text:l.sablon.zakljucak,col:"var(--green)",
                        desc:"Sintetiziraj argumente, ne ponavljaj uvod."},
                      ].map(({label,text,col,desc},j)=>
                        e("div",{key:j,style:{
                          borderLeft:"4px solid "+col,
                          paddingLeft:16,
                          paddingTop:8,paddingBottom:8
                        }},
                          e("div",{style:{display:"flex",alignItems:"center",
                            gap:8,marginBottom:6}},
                            e("span",{style:{fontSize:11,fontWeight:800,color:col,
                              textTransform:"uppercase",letterSpacing:".07em"}},label),
                            e("span",{style:{fontSize:11,color:"var(--muted)",
                              fontStyle:"italic"}},desc)
                          ),
                          e("p",{style:{fontSize:14,margin:0,lineHeight:1.8,
                            color:"var(--text)"}},text)
                        )
                      )
                    )
                  )
                )
              );
            });
          })()
        )
      ),

      /* ── BRZA TABLICA ── */
      tab==="tablica"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"📋 Brza tablica"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Sve lektire na jednom mjestu — idealno za zadnje ponavljanje.")
        ),

        /* Pretraga — toggle */
        e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showSearch?10:14}},
          e("button",{
            onClick:toggleSearch,
            style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
              borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
              fontFamily:"var(--fb)",transition:"all .18s",
              border:"1px solid "+(showSearch?"var(--blue)":"var(--bdr)"),
              background:showSearch?"var(--blue-d)":"transparent",
              color:showSearch?"var(--blue)":"var(--muted)"}
          },
            e("span",null,"🔍"),
            e("span",null,showSearch?"Zatvori pretragu":"Pretraži"),
            showSearch&&searchLektire.length>0&&e("span",{style:{
              background:"var(--blue)",color:"#fff",borderRadius:99,
              fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
            }},filtrirane.length)
          )
        ),
        showSearch&&e("div",{style:{position:"relative",marginBottom:10}},
          e("span",{style:{position:"absolute",left:12,top:"50%",
            transform:"translateY(-50%)",fontSize:16,pointerEvents:"none"}},"🔍"),
          e("input",{type:"text",placeholder:"Pretraži djelo, autora, period...",
            value:searchLektire,autoFocus:true,
            onChange:ev=>{setSearchLektire(ev.target.value);},
            style:{width:"100%",background:"var(--s1)",border:"1px solid var(--blue)",
              borderRadius:"var(--r)",padding:"10px 14px 10px 38px",fontSize:13,
              color:"var(--text)",fontFamily:"var(--fb)",boxSizing:"border-box",outline:"none"}}),
          searchLektire.length>0&&e("button",{onClick:()=>setSearchLektire(""),
            style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",
              background:"none",border:"none",cursor:"pointer",fontSize:14,
              color:"var(--muted)",lineHeight:1}},"×")
        ),

        /* Filter */
        e("div",{style:{marginBottom:16}},
          /* Toggle gumb */
          e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:showFilter?10:0}},
            e("button",{
              onClick:toggleFilter,
              style:{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",
                borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",
                fontFamily:"var(--fb)",transition:"all .18s",
                border:"1px solid "+(showFilter?"var(--blue)":"var(--bdr)"),
                background:showFilter?"var(--blue-d)":"transparent",
                color:showFilter?"var(--blue)":"var(--muted)"}
            },
              e("span",null,"⚙️"),
              e("span",null,showFilter?"Sakrij filtere":"Filtriraj"),
              filterPeriod!=="sve"&&e("span",{style:{
                background:"var(--blue)",color:"#fff",borderRadius:99,
                fontSize:10,fontWeight:800,padding:"1px 6px",marginLeft:2
              }},"✓")
            ),
            filterPeriod!=="sve"&&e("button",{
              onClick:()=>{setFilterPeriod("sve");},
              style:{fontSize:11,color:"var(--muted)",background:"none",
                border:"none",cursor:"pointer",fontFamily:"var(--fb)",padding:"4px 8px"}
            },"× Resetiraj filter")
          ),
          showFilter&&e("div",{style:{animation:"fadeIn .15s ease"}},
            e("div",{style:{display:"flex",gap:6,marginBottom:10}},
              [["sve","Sve lektire",null,"var(--text)"],
               ["obvezna","Obvezne","var(--blue)","var(--blue)"],
               ["dodatna","Dodatne","var(--gold)","var(--gold)"]
              ].map(([id,label,col,tc])=>{
                const active=filterPeriod===id;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(id);setOtvorenaDjelo(null);},
                  style:{flex:1,padding:"9px 8px",borderRadius:10,fontSize:12,
                    fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",
                    transition:"all .18s",textAlign:"center",
                    border:"1px solid "+(active?(col||"var(--bdr2)"):"var(--bdr)"),
                    background:active?(col||"var(--s2)")+(col?"18":""):"var(--s1)",
                    color:active?(tc||"var(--text)"):"var(--muted)",
                    boxShadow:active?"0 2px 8px rgba(0,0,0,.08)":"none"}
                },label);
              })
            ),
            e("div",{
              style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,
                scrollbarWidth:"none",msOverflowStyle:"none",cursor:"grab",userSelect:"none"},
              ref:el=>{
                if(!el||el._dragInit) return;
                el._dragInit=true;
                let down=false,startX=0,scrollLeft=0;
                el.addEventListener("mousedown",ev=>{down=true;startX=ev.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.cursor="grabbing";});
                el.addEventListener("mouseleave",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mouseup",()=>{down=false;el.style.cursor="grab";});
                el.addEventListener("mousemove",ev=>{if(!down)return;ev.preventDefault();el.scrollLeft=scrollLeft-(ev.pageX-el.offsetLeft-startX)*1.2;});
              }
            },
              [["Antika","🏛","#c084fc"],["Renesansa","🌅","#fb923c"],["Barok","🌹","#f59e0b"],
               ["Romantizam","🌊","#34d399"],["Realizam","🏙","#60a5fa"],["Realizam (HR)","🇭🇷","#3b82f6"],
               ["Simbolizam","🌙","#a78bfa"],["Moderna (HR)","✨","#22d3ee"],["Avangarda (HR)","⚡","#e879f9"],
               ["Ekspresionizam","🔥","#f87171"],["Ekspresionizam (HR)","🔥","#fb7185"],
               ["Modernizam","📖","#4ade80"],["Modernizam (HR)","📖","#34d399"],
               ["Egzistencijalizam","🔍","#fbbf24"],["Preporod","🌱","#86efac"],
               ["Humanizam/Renesansa","🌅","#fb923c"],["Hrvatska moderna proza","🇭🇷","#22d3ee"],
              ].filter(([id])=>LEKTIRE.some(l=>l.period===id))
              .map(([id,iko,boja])=>{
                const active=filterPeriod===id;
                const count=LEKTIRE.filter(l=>l.period===id).length;
                return e("button",{key:id,
                  onClick:()=>{setFilterPeriod(active?"sve":id);setOtvorenaDjelo(null);},
                  style:{display:"flex",flexDirection:"column",alignItems:"center",
                    gap:3,padding:"8px 12px",borderRadius:12,cursor:"pointer",
                    fontFamily:"var(--fb)",transition:"all .18s",flexShrink:0,
                    border:"2px solid "+(active?boja:"var(--bdr)"),
                    background:active?boja+"20":"var(--s1)",
                    boxShadow:active?"0 2px 12px "+boja+"44":"none",minWidth:68}
                },
                  e("span",{style:{fontSize:20,lineHeight:1}},iko),
                  e("span",{style:{fontSize:10,fontWeight:700,color:active?boja:"var(--muted)",
                    textAlign:"center",lineHeight:1.3,maxWidth:64,
                    whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},
                    id.replace(" (HR)","").replace("Hrvatska moderna proza","HR proza")),
                  e("span",{style:{fontSize:9,color:active?boja+"cc":"var(--bdr2)",fontWeight:600}},
                    count+(count===1?" djelo":" djela"))
                );
              })
            )
          )
        ),

        /* Grid kartica */
        e("div",{style:{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",
          gap:12
        }},
          (()=>{
            const BOJE={"Antika":"#c084fc","Renesansa":"#fb923c","Barok":"#f59e0b",
              "Romantizam":"#34d399","Realizam":"#60a5fa","Realizam (HR)":"#3b82f6",
              "Simbolizam":"#a78bfa","Moderna (HR)":"#22d3ee","Avangarda (HR)":"#e879f9",
              "Ekspresionizam":"#f87171","Ekspresionizam (HR)":"#fb7185",
              "Modernizam":"#4ade80","Modernizam (HR)":"#34d399",
              "Egzistencijalizam":"#fbbf24","Preporod":"#86efac",
              "Humanizam/Renesansa":"#fb923c","Hrvatska moderna proza":"#22d3ee"};
            const IKONE={"Antika":"🏛","Renesansa":"🌅","Barok":"🌹",
              "Romantizam":"🌊","Realizam":"🏙","Realizam (HR)":"🇭🇷",
              "Simbolizam":"🌙","Moderna (HR)":"✨","Avangarda (HR)":"⚡",
              "Ekspresionizam":"🔥","Ekspresionizam (HR)":"🔥",
              "Modernizam":"📖","Modernizam (HR)":"📖",
              "Egzistencijalizam":"🔍","Preporod":"🌱",
              "Humanizam/Renesansa":"🌅","Hrvatska moderna proza":"🇭🇷"};

            let base=filterPeriod==="sve"?LEKTIRE
              :filterPeriod==="obvezna"?LEKTIRE.filter(l=>l.obvezna)
              :filterPeriod==="dodatna"?LEKTIRE.filter(l=>!l.obvezna)
              :LEKTIRE.filter(l=>l.period===filterPeriod);
            if(searchLektire.trim().length>=2){
              const s=searchLektire.toLowerCase();
              base=base.filter(l=>
                l.djelo.toLowerCase().includes(s)||
                l.autor.toLowerCase().includes(s)||
                l.period.toLowerCase().includes(s)||
                l.tema.toLowerCase().includes(s));
            }
            if(base.length===0) return e("div",{style:{
              gridColumn:"1/-1",textAlign:"center",padding:"40px",color:"var(--muted)"}},
              e("div",{style:{fontSize:36,marginBottom:8}},"🔍"),
              e("div",{style:{fontSize:14,fontWeight:600}},"Nema rezultata")
            );
            return base.map((l,i)=>{
              const isNauceno=!!naučeno[l.djelo];
              const boja=BOJE[l.period]||"var(--blue)";
              const ikona=IKONE[l.period]||"📚";
              const tema=l.tema.split(",")[0];
              const prviLik=l.likovi.split(";")[0].trim();
              return e("div",{key:i,style:{
                background:"var(--s1)",
                border:"1px solid "+(isNauceno?"rgba(52,212,122,.3)":"var(--bdr)"),
                borderRadius:16,overflow:"hidden",
                transition:"transform .18s,box-shadow .18s",
                boxShadow:isNauceno?"0 0 0 1px rgba(52,212,122,.2)":"none",
                cursor:"default"
              },
              onMouseEnter:ev=>{ev.currentTarget.style.transform="translateY(-2px)";ev.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,.12)";},
              onMouseLeave:ev=>{ev.currentTarget.style.transform="translateY(0)";ev.currentTarget.style.boxShadow=isNauceno?"0 0 0 1px rgba(52,212,122,.2)":"none";}
              },
                /* Top strip s bojom razdoblja */
                e("div",{style:{
                  height:4,background:"linear-gradient(90deg,"+boja+","+boja+"88)"
                }}),

                /* Kartica sadržaj */
                e("div",{style:{padding:"14px 16px"}},

                  /* Period + naučeno */
                  e("div",{style:{display:"flex",alignItems:"center",
                    justifyContent:"space-between",marginBottom:10}},
                    e("div",{style:{display:"flex",alignItems:"center",gap:5}},
                      e("span",{style:{fontSize:13}},ikona),
                      e("span",{style:{fontSize:10,fontWeight:700,
                        color:boja,letterSpacing:".04em"}},
                        l.period.replace(" (HR)",""))
                    ),
                    e("div",{
                      onClick:()=>toggleNauceno(l.djelo),
                      style:{
                        width:22,height:22,borderRadius:"50%",cursor:"pointer",
                        background:isNauceno?"var(--green)":"var(--s3)",
                        border:"2px solid "+(isNauceno?"var(--green)":"var(--bdr2)"),
                        display:"flex",alignItems:"center",justifyContent:"center",
                        fontSize:11,transition:"all .2s",flexShrink:0,
                        boxShadow:isNauceno?"0 0 0 3px rgba(52,212,122,.2)":"none"
                      }
                    },isNauceno?"✓":"")
                  ),

                  /* Naslov */
                  e("div",{style:{fontWeight:800,fontSize:14,marginBottom:2,
                    lineHeight:1.3,color:isNauceno?"var(--muted)":"var(--text)",
                    textDecoration:isNauceno?"line-through":"none",transition:"all .2s"}},
                    l.djelo),
                  e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:12}},
                    l.autor),

                  /* Divider */
                  e("div",{style:{height:1,background:"var(--bdr)",marginBottom:10}}),

                  /* Tema */
                  e("div",{style:{marginBottom:8}},
                    e("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",
                      letterSpacing:".07em",color:"var(--muted)",marginBottom:3}},"Tema"),
                    e("div",{style:{fontSize:12,color:"var(--text)",lineHeight:1.5}},tema)
                  ),

                  /* Lik */
                  e("div",null,
                    e("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",
                      letterSpacing:".07em",color:"var(--muted)",marginBottom:3}},"Ključni lik"),
                    e("div",{style:{fontSize:12,color:"var(--text)",lineHeight:1.5}},prviLik)
                  )
                )
              );
            });
          })()
        )
      ),

      /* ── FLASHCARDS ── */
      tab==="flashcard"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"🃏 Flashcard kviz"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Provjeri znanje. Odaberi mod, klikni karticu za odgovor.")
        ),

        /* Progress tracker */
        fcIdx<fcItems.length&&e("div",{style:{marginBottom:20}},
          e("div",{style:{display:"flex",justifyContent:"space-between",
            fontSize:12,color:"var(--muted)",marginBottom:6}},
            e("span",null,"Kartica "+(fcIdx+1)+" / "+fcItems.length),
            e("div",{style:{display:"flex",gap:12}},
              e("span",{style:{color:"var(--green)",fontWeight:700}},"✓ "+fcScore.ok),
              e("span",{style:{color:"var(--red)",fontWeight:700}},"✗ "+fcScore.skip)
            )
          ),
          e("div",{style:{height:4,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{
              height:"100%",borderRadius:99,
              background:"linear-gradient(90deg,var(--blue),var(--green))",
              width:(fcIdx/fcItems.length*100)+"%",
              transition:"width .3s ease"
            }})
          )
        ),

        /* Modovi — horizontalni scroll */
        e("div",{style:{
          display:"flex",gap:8,marginBottom:20,
          overflowX:"auto",paddingBottom:4,
          scrollbarWidth:"none"
        }},
          [
            {id:"pojam",label:"📖 Djelo → Tema",desc:"Period i tema"},
            {id:"autor",label:"✍️ Autor → Djelo",desc:"Koje djelo?"},
            {id:"period",label:"🏛 Period → Djela",desc:"Nabroji djela"},
            {id:"lik",label:"👤 Djelo → Likovi",desc:"Ključni likovi"},
            {id:"pitanje",label:"📝 Djelo → Pitanje",desc:"Esejsko pitanje"},
          ].map(({id,label,desc})=>{
            const active=fcMode===id;
            return e("button",{key:id,
              onClick:()=>{setFcMode(id);setFcIdx(0);setFcFlipped(false);setFcScore({ok:0,skip:0});},
              style:{
                display:"flex",flexDirection:"column",alignItems:"center",
                gap:2,padding:"10px 16px",borderRadius:12,cursor:"pointer",
                fontFamily:"var(--fb)",transition:"all .18s",flexShrink:0,
                border:"2px solid "+(active?"var(--blue)":"var(--bdr)"),
                background:active?"var(--blue-d)":"var(--s1)",
                boxShadow:active?"0 2px 12px rgba(45,84,196,.2)":"none"
              }
            },
              e("span",{style:{fontSize:13,fontWeight:700,
                color:active?"var(--blue)":"var(--text)",whiteSpace:"nowrap"}},label),
              e("span",{style:{fontSize:10,color:active?"var(--blue)":"var(--muted)"}},desc)
            );
          })
        ),

        /* Završni ekran */
        fcIdx>=fcItems.length&&e("div",{style:{
          textAlign:"center",padding:"48px 24px",
          background:"linear-gradient(135deg,rgba(52,212,122,.08),rgba(45,84,196,.08))",
          border:"1px solid rgba(52,212,122,.2)",borderRadius:20
        }},
          e("div",{style:{fontSize:56,marginBottom:16}},"🎉"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:8}},"Prošao/la si sve!"),
          e("div",{style:{fontSize:15,color:"var(--muted)",marginBottom:8}},
            "Točnih: ",e("strong",{style:{color:"var(--green)",fontSize:18}},fcScore.ok),
            " / ",e("strong",null,fcScore.ok+fcScore.skip)
          ),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:24}},
            Math.round(fcScore.ok/(fcScore.ok+fcScore.skip||1)*100)+"% uspješnost"
          ),
          e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
            e("button",{className:"btn btn-p",style:{padding:"10px 28px"},
              onClick:()=>{setFcIdx(0);setFcFlipped(false);setFcScore({ok:0,skip:0});}},
              "↺ Ponovi od početka"),
            e("button",{className:"btn btn-g",style:{padding:"10px 28px"},
              onClick:()=>{
                const pogresne=fcItems.filter((_,i)=>i<fcScore.ok+fcScore.skip).slice(0,fcScore.skip);
                setFcIdx(0);setFcFlipped(false);setFcScore({ok:0,skip:0});
              }},
              "📚 Samo propuštene")
          )
        ),

        /* Kartica */
        fcIdx<fcItems.length&&e("div",{
          onClick:()=>setFcFlipped(f=>!f),
          style:{
            minHeight:240,cursor:"pointer",
            borderRadius:20,overflow:"hidden",
            border:"2px solid "+(fcFlipped?"var(--green)":"var(--bdr2)"),
            background:fcFlipped?"linear-gradient(135deg,var(--s1),rgba(52,212,122,.04))":"var(--s1)",
            boxShadow:"0 8px 32px rgba(0,0,0,.1)",
            transition:"border-color .25s,background .25s",
            display:"flex",flexDirection:"column",marginBottom:14,
            position:"relative"
          },
          onMouseEnter:ev=>ev.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,.15)",
          onMouseLeave:ev=>ev.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,.1)"
        },
          /* Top strip — boja moda */
          e("div",{style:{
            height:3,
            background:fcFlipped
              ?"linear-gradient(90deg,var(--green),rgba(52,212,122,.3))"
              :"linear-gradient(90deg,var(--blue),rgba(45,84,196,.3))"
          }}),
          /* Sadržaj kartice */
          e("div",{style:{
            flex:1,display:"flex",flexDirection:"column",
            alignItems:"center",justifyContent:"center",
            padding:"32px 28px",textAlign:"center"
          }},
            (()=>{
              const isAutorMod=fcMode==="autor";
              const isPeriodMod=fcMode==="period";
              const pitanjeLabel={
                pojam:"Koji je period i tema?",
                autor:"Koje je djelo napisao/la ovaj autor?",
                period:"Nabroji barem 2 djela ovog perioda",
                lik:"Tko su ključni likovi?",
                pitanje:"Koje je tipično esejsko pitanje?",
              }[fcMode];
              const naslovPitanja=isAutorMod?fcCur.autor:isPeriodMod?fcCur.period:fcCur.djelo;
              const podnaslov=isAutorMod?"Autor":isPeriodMod?"Period":fcCur.autor;

              return !fcFlipped
                ? e("div",{style:{width:"100%"}},
                    e("div",{style:{
                      display:"inline-block",
                      fontSize:10,fontWeight:800,letterSpacing:".08em",
                      textTransform:"uppercase",color:"var(--blue)",
                      background:"var(--blue-d)",border:"1px solid rgba(45,84,196,.2)",
                      borderRadius:99,padding:"3px 10px",marginBottom:16
                    }},pitanjeLabel),
                    e("div",{style:{fontFamily:"var(--fh)",fontSize:28,
                      marginBottom:8,lineHeight:1.25,color:"var(--text)"}},naslovPitanja),
                    e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:20}},podnaslov),
                    e("div",{style:{
                      display:"inline-flex",alignItems:"center",gap:6,
                      fontSize:12,color:"var(--muted)",
                      border:"1px dashed var(--bdr2)",
                      borderRadius:99,padding:"5px 14px"
                    }},
                      e("span",null,"👆"),
                      e("span",null,"Klikni za odgovor")
                    )
                  )
                : e("div",{style:{width:"100%",textAlign:"left"}},
                    e("div",{style:{
                      display:"inline-block",
                      fontSize:10,fontWeight:800,letterSpacing:".08em",
                      textTransform:"uppercase",color:"var(--green)",
                      background:"var(--green-d)",border:"1px solid rgba(52,212,122,.25)",
                      borderRadius:99,padding:"3px 10px",marginBottom:16
                    }},"✓ Odgovor"),
                    e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:12,
                      textAlign:"center"}},naslovPitanja+" — "+podnaslov),
                    e("div",{style:{fontSize:14,lineHeight:1.8,color:"var(--text)"}},
                      fcMode==="pojam"?e("div",null,
                        e("div",{style:{padding:"10px 14px",background:"var(--s2)",
                          borderRadius:10,marginBottom:8,borderLeft:"3px solid var(--blue)"}},
                          e("span",{style:{fontWeight:700,color:"var(--blue)"}},"Period: "),fcCur.period),
                        e("div",{style:{padding:"10px 14px",background:"var(--s2)",
                          borderRadius:10,borderLeft:"3px solid var(--gold)"}},
                          e("span",{style:{fontWeight:700,color:"var(--gold)"}},"Teme: "),fcCur.tema)
                      ):
                      fcMode==="autor"?e("div",null,
                        e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:6}},fcCur.djelo),
                        e("div",{style:{fontSize:13,color:"var(--muted)"}},fcCur.period)
                      ):
                      fcMode==="period"?e("div",null,
                        e("div",{style:{fontSize:13,fontWeight:700,marginBottom:8,color:"var(--muted)"}},"Djela tog perioda:"),
                        fcItems.filter(x=>x.period===fcCur.period).map((x,xi)=>
                          e("div",{key:x.djelo,style:{
                            display:"flex",alignItems:"center",gap:8,
                            padding:"6px 10px",marginBottom:4,
                            background:"var(--s2)",borderRadius:8,fontSize:13
                          }},
                            e("span",{style:{color:"var(--blue)",fontWeight:700}},""+( xi+1)+"."),
                            e("span",null,x.djelo),
                            e("span",{style:{color:"var(--muted)",fontSize:11}},"("+x.autor+")")
                          )
                        )
                      ):
                      fcMode==="lik"?e("div",null,
                        fcCur.likovi.split(";").map((lik,li)=>
                          e("div",{key:li,style:{
                            padding:"8px 12px",marginBottom:6,
                            background:"var(--s2)",borderRadius:8,fontSize:13,
                            borderLeft:"3px solid #a78bfa"
                          }},lik.trim())
                        )
                      ):
                      e("div",{style:{
                        fontStyle:"italic",fontSize:14,lineHeight:1.7,
                        padding:"12px 16px",background:"var(--s2)",
                        borderRadius:10,borderLeft:"3px solid var(--blue)"
                      }},fcCur.pitanje)
                    )
                  );
            })()
          )
        ),

        /* Kontrole */
        fcIdx<fcItems.length&&e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}},
          e("button",{
            onClick:()=>{setFcScore(s=>({...s,skip:s.skip+1}));setFcIdx(i=>i+1);setFcFlipped(false);},
            style:{padding:"12px 8px",borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",
              fontWeight:700,fontSize:13,transition:"all .15s",
              border:"2px solid rgba(248,113,113,.3)",
              background:"rgba(248,113,113,.08)",color:"var(--red)"}
          },
            e("div",{style:{fontSize:20,marginBottom:2}},"✗"),
            e("div",{style:{fontSize:11}},"Nisam znao/la")
          ),
          e("button",{
            onClick:()=>{setFcIdx(i=>i+1);setFcFlipped(false);},
            style:{padding:"12px 8px",borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",
              fontWeight:700,fontSize:13,transition:"all .15s",
              border:"2px solid var(--bdr)",
              background:"var(--s1)",color:"var(--muted)"}
          },
            e("div",{style:{fontSize:20,marginBottom:2}},"→"),
            e("div",{style:{fontSize:11}},"Preskoči")
          ),
          e("button",{
            onClick:()=>{setFcScore(s=>({...s,ok:s.ok+1}));setFcIdx(i=>i+1);setFcFlipped(false);},
            style:{padding:"12px 8px",borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",
              fontWeight:700,fontSize:13,transition:"all .15s",
              border:"2px solid rgba(52,212,122,.3)",
              background:"rgba(52,212,122,.08)",color:"var(--green)"}
          },
            e("div",{style:{fontSize:20,marginBottom:2}},"✓"),
            e("div",{style:{fontSize:11}},"Znao/la sam!")
          )
        )
      ),


      /* ── PRIMJERI DOBRO/LOŠE ── */
      tab==="primjeri"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"💡 Dobro i loše"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Vidi razliku između odlomka koji nosi bodove i onog koji ih gubi. Svaki primjer je iz stvarnog tipa ispitnog zadatka.")
        ),

        /* Lista primjera */
        e("div",{style:{display:"flex",flexDirection:"column",gap:16}},
          PRIMJERI.map((p,i)=>
            e("div",{key:i,style:{
              background:"var(--s1)",
              border:"1px solid var(--bdr)",
              borderRadius:16,overflow:"hidden"
            }},
              /* Kartica header */
              e("div",{style:{
                padding:"10px 16px",
                background:"var(--s2)",
                borderBottom:"1px solid var(--bdr)",
                display:"flex",alignItems:"center",gap:8
              }},
                e("span",{style:{
                  fontSize:11,fontWeight:800,padding:"2px 10px",
                  borderRadius:99,background:"var(--s3)",
                  color:"var(--muted)",border:"1px solid var(--bdr)",
                  textTransform:"uppercase",letterSpacing:".06em"
                }},p.tip),
                e("span",{style:{fontWeight:700,fontSize:13}},p.djelo)
              ),

              /* Dvije kolone */
              e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}},
                [p.lose,p.dobro].map((primjer,j)=>
                  e("div",{key:j,style:{
                    padding:"14px 16px",
                    borderRight:j===0?"1px solid var(--bdr)":undefined,
                    background:j===0?"transparent":"transparent"
                  }},
                    /* Naslov loše/dobro */
                    e("div",{style:{
                      display:"flex",alignItems:"center",gap:6,marginBottom:10
                    }},
                      e("div",{style:{
                        width:20,height:20,borderRadius:"50%",flexShrink:0,
                        background:j===0?"var(--red)":"var(--green)",
                        display:"flex",alignItems:"center",justifyContent:"center",
                        fontSize:11,color:"#fff",fontWeight:800
                      }},j===0?"✗":"✓"),
                      e("span",{style:{
                        fontWeight:700,fontSize:12,
                        color:j===0?"var(--red)":"var(--green)"
                      }},j===0?"Loše":"Dobro")
                    ),

                    /* Tekst primjera */
                    e("div",{style:{
                      fontSize:12,lineHeight:1.75,
                      fontStyle:"italic",
                      padding:"10px 12px",
                      background:j===0?"rgba(248,113,113,.06)":"rgba(52,212,122,.06)",
                      borderRadius:10,
                      borderLeft:"3px solid "+(j===0?"rgba(248,113,113,.4)":"rgba(52,212,122,.4)"),
                      marginBottom:8,color:"var(--text)"
                    }},primjer.tekst),

                    /* Objašnjenje */
                    e("div",{style:{
                      fontSize:11,color:"var(--muted)",lineHeight:1.6,
                      padding:"6px 8px",
                      background:"var(--s2)",borderRadius:8
                    }},
                      e("span",{style:{
                        fontWeight:700,
                        color:j===0?"var(--red)":"var(--green)"
                      }},j===0?"Zašto pada: ":"Zašto prolazi: "),
                      primjer.zasto
                    )
                  )
                )
              )
            )
          )
        )
      ),

      /* ── KRITERIJI ── */
      tab==="kriteriji"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"📊 Kriteriji ocjenjivanja"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Esej nosi 30 bodova (viša razina) ili 20 bodova (osnovna). Ocjenjuje se prema 5 kriterija A–E.")
        ),

        /* Bodovna skala — od 1 do 5 */
        e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",
            letterSpacing:".07em",color:"var(--muted)",marginBottom:10}},"Ocjena prema ukupnom broju bodova"),
          e("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}},
            [{g:1,od:0,do:9,col:"#f87171",bg:"rgba(248,113,113,.1)"},
             {g:2,od:10,do:14,col:"#fb923c",bg:"rgba(251,146,60,.1)"},
             {g:3,od:15,do:20,col:"#fbbf24",bg:"rgba(251,191,36,.1)"},
             {g:4,od:21,do:26,col:"#60a5fa",bg:"rgba(96,165,250,.1)"},
             {g:5,od:27,do:30,col:"#4ade80",bg:"rgba(74,222,128,.1)"},
            ].map(({g,od,do:d,col,bg})=>
              e("div",{key:g,style:{
                textAlign:"center",padding:"14px 6px",
                background:bg,
                border:"1px solid "+col+"44",
                borderRadius:12,position:"relative",overflow:"hidden"
              }},
                e("div",{style:{fontFamily:"var(--fh)",fontSize:28,
                  color:col,fontWeight:700,lineHeight:1}},""+g),
                e("div",{style:{fontSize:10,color:col,fontWeight:700,
                  marginTop:4,opacity:.8}},[" ","Nedov.","Dovoljan","Dobar","Odličan"][g]||""),
                e("div",{style:{fontSize:10,color:col,opacity:.7,marginTop:2}},od+"–"+d+" bod.")
              )
            )
          )
        ),

        /* Vizualni ukupni max */
        e("div",{style:{
          padding:"12px 16px",background:"var(--s1)",
          border:"1px solid var(--bdr)",borderRadius:12,
          display:"flex",alignItems:"center",gap:16,marginBottom:24,flexWrap:"wrap"
        }},
          e("div",{style:{fontSize:13,color:"var(--muted)",flex:1}},
            "Ukupno: ",e("strong",{style:{color:"var(--text)"}},"30 bod. viša"),
            " · ",e("strong",{style:{color:"var(--text)"}},"20 bod. osnovna")
          ),
          e("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},
            ["A·6","B·8","C·6","D·5","E·5"].map((x,i)=>{
              const [br,bod]=x.split("·");
              const cols=["var(--blue)","var(--green)","#f59e0b","#a78bfa","#f87171"];
              return e("div",{key:i,style:{
                fontSize:11,fontWeight:800,padding:"3px 10px",borderRadius:99,
                background:cols[i]+"18",color:cols[i],border:"1px solid "+cols[i]+"33"
              }},br+" "+bod+"b");
            })
          )
        ),

        /* Kriteriji A–E — od A do E */
        e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
          [
            {br:"A",naziv:"Razumijevanje i interpretacija",max:6,
             col:"var(--blue)",bg:"rgba(45,84,196,.08)",
             ikona:"🎯",
             opis:"Odgovaraš direktno na pitanje i interpretiraš tekst — ne prepričavaš.",
             savjet:"Napiši jasnu tezu u prvoj rečenici uvoda. Ocjenjivač mora odmah znati o čemu pišeš."},
            {br:"B",naziv:"Argumentacija i analiza",max:8,
             col:"var(--green)",bg:"rgba(52,212,122,.06)",
             ikona:"📌",
             opis:"Svaka tvrdnja potkrijepljena citatom ili konkretnim primjerom iz teksta.",
             savjet:"Uvedi citat → komentiraj → zaključi. Minimum 2–3 argumenta s primjerima."},
            {br:"C",naziv:"Kompozicija i struktura",max:6,
             col:"#f59e0b",bg:"rgba(245,158,11,.06)",
             ikona:"🏗",
             opis:"Jasan uvod s tezom, razrada s argumentima, zaključak koji sintetizira.",
             savjet:"Napiši plan eseja (3–5 argumenata) na papiru PRIJE pisanja."},
            {br:"D",naziv:"Stil i izražajnost",max:5,
             col:"#a78bfa",bg:"rgba(167,139,250,.06)",
             ikona:"✒️",
             opis:"Bogat rječnik, varijacija duljine rečenica, preciznost izraza.",
             savjet:"Koristi sinonime, izmjenjuj kratke i duge rečenice, izbjegavaj ponavljanje."},
            {br:"E",naziv:"Jezična točnost",max:5,
             col:"#f87171",bg:"rgba(248,113,113,.06)",
             ikona:"🔤",
             opis:"Pravopis, gramatika i interpunkcija bez grešaka.",
             savjet:"Zadnjih 5 minuta — provjeri zareze, č/ć/dž/đ i padeže."},
          ].map((k,ki)=>
            e("div",{key:k.br,style:{
              background:k.bg,
              border:"1px solid "+k.col+"33",
              borderLeft:"5px solid "+k.col,
              borderRadius:"0 14px 14px 0",
              padding:"16px 18px",
              display:"flex",gap:16,alignItems:"flex-start",
              transition:"transform .15s",
            },
            onMouseEnter:ev=>ev.currentTarget.style.transform="translateX(3px)",
            onMouseLeave:ev=>ev.currentTarget.style.transform="translateX(0)"
            },
              /* Lijevi dio — slovo + ikona */
              e("div",{style:{
                display:"flex",flexDirection:"column",alignItems:"center",
                gap:4,flexShrink:0
              }},
                e("div",{style:{
                  width:36,height:36,borderRadius:"50%",
                  background:k.col,color:"#fff",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:15,fontWeight:900,
                  boxShadow:"0 2px 8px "+k.col+"44"
                }},k.br),
                e("div",{style:{fontSize:16}},k.ikona)
              ),
              /* Desni dio */
              e("div",{style:{flex:1}},
                e("div",{style:{display:"flex",alignItems:"center",
                  justifyContent:"space-between",gap:8,marginBottom:6,flexWrap:"wrap"}},
                  e("span",{style:{fontWeight:800,fontSize:14,color:"var(--text)"}},k.naziv),
                  e("div",{style:{
                    fontSize:12,fontWeight:800,padding:"3px 12px",borderRadius:99,
                    background:k.col,color:"#fff",
                    boxShadow:"0 2px 6px "+k.col+"44",flexShrink:0
                  }},k.max+" bod.")
                ),
                e("div",{style:{fontSize:13,color:"var(--muted)",
                  marginBottom:8,lineHeight:1.6}},k.opis),
                e("div",{style:{
                  fontSize:12,lineHeight:1.6,
                  background:"var(--s1)",
                  borderRadius:8,padding:"8px 12px",
                  color:"var(--text)",
                  border:"1px solid "+k.col+"22"
                }},
                  e("span",{style:{fontWeight:700,color:k.col}},"💡 Savjet: "),
                  k.savjet
                )
              )
            )
          )
        )
      ),

      /* ── PLAN ISPITA ── */
      tab==="plan"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:24}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"⏱ Plan ispita"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Optimalna raspodjela 160 minuta. Svaki korak je bitan.")
        ),

        /* Vizualni timeline bar */
        e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
            letterSpacing:".07em",color:"var(--muted)",marginBottom:8}},
            "160 minuta — vizualni raspored"),
          e("div",{style:{display:"flex",height:32,borderRadius:99,
            overflow:"hidden",gap:2}},
            [
              {min:"0–10",boja:"#c084fc",posto:6},
              {min:"10–70",boja:"#60a5fa",posto:44},
              {min:"70–80",boja:"#34d399",posto:6},
              {min:"80–90",boja:"#22d3ee",posto:6},
              {min:"90–95",boja:"#f59e0b",posto:3},
              {min:"95–150",boja:"#fb923c",posto:34},
              {min:"150–160",boja:"#f87171",posto:6},
            ].map(({min,boja,posto},bi)=>
              e("div",{key:bi,
                style:{
                  width:posto+"%",background:boja,
                  display:"flex",alignItems:"center",
                  justifyContent:"center",
                  fontSize:9,fontWeight:800,color:"#fff",
                  overflow:"hidden",minWidth:posto<8?0:undefined,
                  opacity:.9,transition:"opacity .2s"
                },
                title:min+" min"
              },posto>=8?min:"")
            )
          ),
          e("div",{style:{display:"flex",justifyContent:"space-between",
            fontSize:9,color:"var(--muted)",marginTop:4}},
            e("span",null,"0 min"),
            e("span",null,"80 min"),
            e("span",null,"160 min")
          )
        ),

        /* Koraci */
        e("div",{style:{display:"flex",flexDirection:"column",gap:0,
          marginBottom:20,position:"relative"}},
          /* Vertikalna linija */
          e("div",{style:{
            position:"absolute",left:22,top:0,bottom:0,
            width:2,background:"var(--bdr)",zIndex:0
          }}),
          [
            {min:"0–10",iko:"👁",tit:"Pregled ispita",op:"Pročitaj sva pitanja, odaberi esejsku temu, označi teža MC.",boja:"#c084fc"},
            {min:"10–70",iko:"📝",tit:"Višestruki izbor",op:"Rješavaj MC pitanja. Teža ostavi za kraj, nemoj se zaglaviti.",boja:"#60a5fa"},
            {min:"70–80",iko:"✅",tit:"Provjera MC",op:"Vrati se na preskočena, provjeri nema li praznih mjesta.",boja:"#34d399"},
            {min:"80–90",iko:"🔍",tit:"Čitanje tekstova",op:"Pažljivo čitaj zadane tekstove za esej, podcrtaj ključno.",boja:"#22d3ee"},
            {min:"90–95",iko:"🏗",tit:"Plan eseja",op:"Na papiru: teza, 3–4 argumenta, zaključak. Nikad bez plana!",boja:"#f59e0b"},
            {min:"95–150",iko:"✍️",tit:"Pisanje eseja",op:"Uvod → razrada → zaključak. Svaki argument s citatom.",boja:"#fb923c"},
            {min:"150–160",iko:"🔎",tit:"Korektura",op:"Pravopis, zareze, č/ć/dž/đ. Provjeri nema li praznih mjesta.",boja:"#f87171"},
          ].map(({min,iko,tit,op,boja},i,arr)=>
            e("div",{key:i,style:{
              display:"flex",gap:14,paddingBottom:i<arr.length-1?16:0,
              position:"relative",zIndex:1
            }},
              /* Točka na liniji */
              e("div",{style:{
                width:44,flexShrink:0,display:"flex",
                flexDirection:"column",alignItems:"center",gap:4
              }},
                e("div",{style:{
                  width:28,height:28,borderRadius:"50%",
                  background:boja,border:"3px solid var(--bg)",
                  display:"flex",alignItems:"center",
                  justifyContent:"center",fontSize:14,
                  boxShadow:"0 0 0 2px "+boja+"44",
                  flexShrink:0
                }},iko)
              ),
              /* Sadržaj */
              e("div",{style:{
                flex:1,background:"var(--s1)",
                border:"1px solid var(--bdr)",
                borderLeft:"3px solid "+boja,
                borderRadius:"0 12px 12px 0",
                padding:"10px 14px",marginBottom:0
              }},
                e("div",{style:{
                  display:"flex",alignItems:"center",
                  justifyContent:"space-between",gap:8,marginBottom:4
                }},
                  e("span",{style:{fontWeight:700,fontSize:13}},tit),
                  e("span",{style:{
                    fontSize:10,fontWeight:800,padding:"2px 8px",
                    borderRadius:99,background:boja+"20",
                    color:boja,border:"1px solid "+boja+"44",
                    whiteSpace:"nowrap"
                  }},"⏱ "+min+" min")
                ),
                e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},op)
              )
            )
          )
        ),

        /* Najčešće greške */
        e("div",{style:{
          background:"rgba(248,113,113,.05)",
          border:"1px solid rgba(248,113,113,.2)",
          borderRadius:14,padding:"14px 16px"
        }},
          e("div",{style:{
            fontWeight:800,fontSize:13,marginBottom:10,
            color:"var(--red)",display:"flex",alignItems:"center",gap:6
          }},
            e("span",null,"⚠️"),
            e("span",null,"Najčešće greške")
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            [
              "Ostavljanje MC pitanja praznih — uvijek zaokruži nešto",
              "Esej bez plana — postaje nestrukturiran i gubi bodove",
              "Prepričavanje umjesto analize — kriterij A odmah pada",
              "Ignoriranje smjernica — svaka nosi bodove",
              "Predugački uvod bez jasne teze"
            ].map((g,i)=>
              e("div",{key:i,style:{
                display:"flex",alignItems:"flex-start",gap:8,
                fontSize:12,color:"var(--muted)",lineHeight:1.5
              }},
                e("span",{style:{
                  color:"var(--red)",fontWeight:800,flexShrink:0,marginTop:1
                }},"×"),
                e("span",null,g)
              )
            )
          )
        )
      ),

      /* ── PREDLOŠCI ── */
      tab==="predlosci"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"✍️ Predlošci"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Zamijeni ",e("strong",{style:{color:"var(--text)"}},"[VELIKIM SLOVIMA]"),
            " s podacima iz svog zadatka.")
        ),

        /* Grupe: Uvod / Razrada / Zaključak */
        e("div",{style:{display:"flex",flexDirection:"column",gap:16}},
          [
            {
              grupa:"Uvod",ikona:"📝",boja:"var(--blue)",
              predlosci:[
                {tip:"Uz tezu",pr:"Djelo [NAZIV] autora [AUTOR] jedno je od ključnih ostvarenja [PERIOD]. U njemu se autor bavi temom [TEMA], propitujući [PITANJE]. U ovome eseju analizirat ću [FOKUS] kroz analizu ključnih scena i likova."},
                {tip:"Uz lik",pr:"Lik [IME] u djelu [NAZIV] predstavlja [SIMBOL]. Autor [AUTOR] kroz taj lik propituje [PITANJE], što ću argumentirati analizom ključnih scena."},
                {tip:"Uz sukob",pr:"Sukob između [X] i [Y] središnja je os [NAZIVA]. Autor [AUTOR] kroz taj sukob razotkriva [TEMA], kao što ću pokazati u ovom eseju."},
              ]
            },
            {
              grupa:"Razrada",ikona:"📌",boja:"var(--gold)",
              predlosci:[
                {tip:"Uvođenje citata",pr:"To potvrđuje i sam autor riječima: [CITAT]. Ovim [autor/lik] naglašava [INTERPRETACIJA], što jasno ukazuje na [ZAKLJUČAK]."},
              ]
            },
            {
              grupa:"Zaključak",ikona:"🏁",boja:"var(--green)",
              predlosci:[
                {tip:"Sinteza",pr:"Na temelju analize možemo zaključiti da [AUTOR] kroz [LIK/TEMU] propituje [UNIVERSALNA TEMA]. Djelo time dobiva trajnu aktualnost jer [RAZLOG]."},
                {tip:"Osobni stav",pr:"[NAZIV] ostaje aktualno djelo jer [RAZLOG]. Kroz sudbinu [LIKA] autor nam govori da [PORUKA], što rezonira i u suvremenom kontekstu."},
              ]
            },
          ].map(({grupa,ikona,boja,predlosci},gi)=>
            e("div",{key:gi},
              /* Grupa header */
              e("div",{style:{
                display:"flex",alignItems:"center",gap:8,
                marginBottom:8
              }},
                e("span",{style:{fontSize:16}},ikona),
                e("span",{style:{
                  fontWeight:800,fontSize:12,textTransform:"uppercase",
                  letterSpacing:".07em",color:boja
                }},grupa)
              ),
              /* Predlošci u grupi */
              e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                predlosci.map((p,pi)=>
                  e("div",{key:pi,style:{
                    background:"var(--s1)",border:"1px solid var(--bdr)",
                    borderLeft:"4px solid "+boja,
                    borderRadius:"0 12px 12px 0",overflow:"hidden"
                  }},
                    e("div",{style:{
                      padding:"8px 14px",background:"var(--s2)",
                      borderBottom:"1px solid var(--bdr)",
                      fontSize:11,fontWeight:700,color:boja,
                      letterSpacing:".04em"
                    }},p.tip),
                    e("div",{style:{
                      padding:"12px 14px",
                      fontSize:13,lineHeight:1.85,
                      fontStyle:"italic",color:"var(--text)"
                    }},
                      /* Highlightaj [VARIJABLE] */
                      p.pr.split(/(\[[^\]]+\])/).map((part,idx)=>
                        part.startsWith("[")
                          ? e("span",{key:idx,style:{
                              color:boja,fontWeight:700,fontStyle:"normal",
                              background:boja+"18",
                              borderRadius:4,padding:"0 3px"
                            }},part)
                          : part
                      )
                    )
                  )
                )
              )
            )
          )
        ),

        /* Zlatna pravila */
        e("div",{style:{
          marginTop:16,background:"rgba(52,212,122,.05)",
          border:"1px solid rgba(52,212,122,.2)",
          borderRadius:14,padding:"14px 16px"
        }},
          e("div",{style:{
            fontWeight:800,fontSize:13,marginBottom:10,
            color:"var(--green)",display:"flex",alignItems:"center",gap:6
          }},
            e("span",null,"✅"),
            e("span",null,"Zlatna pravila")
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            [
              {t:"Teza odmah",s:"Prva rečenica uvoda mora biti jasna teza — ne uvod u uvod."},
              {t:"Citat = argument",s:"Svaki argument bez citata ili primjera = izgubljeni bod."},
              {t:"Bez 'ja mislim'",s:"Piši 'Autor pokazuje...' ili 'Djelo dokazuje...' — ne osobno mišljenje."},
              {t:"Zaključak ≠ uvod",s:"Zaključak sintetizira i proširuje — ne ponavlja uvod."},
              {t:"Duljina",s:"350–500 riječi (osnovna) · 400–600 riječi (viša razina)."},
            ].map(({t,s},i)=>
              e("div",{key:i,style:{
                display:"flex",gap:10,alignItems:"flex-start",fontSize:12
              }},
                e("span",{style:{
                  color:"var(--green)",fontWeight:800,flexShrink:0,marginTop:1
                }},"✓"),
                e("div",{style:{lineHeight:1.6}},
                  e("strong",{style:{color:"var(--text)"}},"  "+t+": "),
                  e("span",{style:{color:"var(--muted)"}},s)
                )
              )
            )
          )
        )
      )
      ),

      /* ── USPOREDI DVA DJELA ── */
      tab==="usporedi"&&e("div",null,

        /* Header */
        e("div",{style:{marginBottom:20}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:4}},"⚖️ Usporedi dva djela"),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5}},
            "Odaberi dva djela za automatsku usporedbu — idealno za ispite koji traže usporedbu.")
        ),

        /* Odabir */
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",
          gap:10,alignItems:"center",marginBottom:20}},

          /* Djelo 1 */
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            e("div",{style:{fontSize:10,fontWeight:800,textTransform:"uppercase",
              letterSpacing:".08em",color:"var(--blue)"}},"📘 Prvo djelo"),
            e("select",{value:uspDjelo1,onChange:ev=>setUspDjelo1(ev.target.value),
              style:{width:"100%",background:"var(--s1)",
                border:"2px solid "+(uspDjelo1?"var(--blue)":"var(--bdr)"),
                borderRadius:12,padding:"10px 12px",fontSize:13,
                color:"var(--text)",fontFamily:"var(--fb)",cursor:"pointer",
                outline:"none",transition:"border-color .2s"}},
              e("option",{value:""},"— Odaberi djelo —"),
              LEKTIRE.map(l=>e("option",{key:l.autor+"_"+l.djelo,
                value:l.autor+"|||"+l.djelo},l.djelo+" ("+l.autor+")"))
            ),
            uspDjelo1&&(()=>{
              const d=LEKTIRE.find(l=>(l.autor+"|||"+l.djelo)===uspDjelo1);
              return d&&e("div",{style:{
                fontSize:11,color:"var(--blue)",fontWeight:600,
                padding:"4px 10px",background:"var(--blue-d)",
                borderRadius:99,display:"inline-flex",alignItems:"center",gap:4,
                alignSelf:"flex-start"
              }},
                e("span",null,d.period),
                e("span",{style:{opacity:.5}},"·"),
                e("span",null,d.autor)
              );
            })()
          ),

          /* VS */
          e("div",{style:{
            width:36,height:36,borderRadius:"50%",flexShrink:0,
            background:"var(--s2)",border:"2px solid var(--bdr)",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:11,fontWeight:900,color:"var(--muted)",
            alignSelf:"flex-start",marginTop:22
          }},"VS"),

          /* Djelo 2 */
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            e("div",{style:{fontSize:10,fontWeight:800,textTransform:"uppercase",
              letterSpacing:".08em",color:"#a78bfa"}},"📗 Drugo djelo"),
            e("select",{value:uspDjelo2,onChange:ev=>setUspDjelo2(ev.target.value),
              style:{width:"100%",background:"var(--s1)",
                border:"2px solid "+(uspDjelo2?"#a78bfa":"var(--bdr)"),
                borderRadius:12,padding:"10px 12px",fontSize:13,
                color:"var(--text)",fontFamily:"var(--fb)",cursor:"pointer",
                outline:"none",transition:"border-color .2s"}},
              e("option",{value:""},"— Odaberi djelo —"),
              LEKTIRE.map(l=>e("option",{key:l.autor+"_"+l.djelo,
                value:l.autor+"|||"+l.djelo},l.djelo+" ("+l.autor+")"))
            ),
            uspDjelo2&&(()=>{
              const d=LEKTIRE.find(l=>(l.autor+"|||"+l.djelo)===uspDjelo2);
              return d&&e("div",{style:{
                fontSize:11,color:"#a78bfa",fontWeight:600,
                padding:"4px 10px",background:"rgba(124,92,252,.1)",
                borderRadius:99,display:"inline-flex",alignItems:"center",gap:4,
                alignSelf:"flex-start"
              }},
                e("span",null,d.period),
                e("span",{style:{opacity:.5}},"·"),
                e("span",null,d.autor)
              );
            })()
          )
        ),

        /* Usporedba */
        uspDjelo1&&uspDjelo2&&uspDjelo1!==uspDjelo2&&(()=>{
          const d1=LEKTIRE.find(l=>(l.autor+"|||"+l.djelo)===uspDjelo1||l.djelo===uspDjelo1);
          const d2=LEKTIRE.find(l=>(l.autor+"|||"+l.djelo)===uspDjelo2||l.djelo===uspDjelo2);
          if(!d1||!d2) return null;

          const kw1=new Set(d1.tema.toLowerCase().replace(/[,.]/g," ").split(" ").filter(w=>w.length>4));
          const kw2=new Set(d2.tema.toLowerCase().replace(/[,.]/g," ").split(" ").filter(w=>w.length>4));
          const zajednicke=[...kw1].filter(w=>kw2.has(w));

          const rows=[
            {l:"Autor",v1:d1.autor,v2:d2.autor,ikona:"✍️"},
            {l:"Period",v1:d1.period,v2:d2.period,ikona:"🏛"},
            {l:"Teme",v1:d1.tema,v2:d2.tema,ikona:"💡"},
            {l:"Likovi",v1:d1.likovi,v2:d2.likovi,ikona:"👤"},
            {l:"Esejsko pitanje",v1:d1.pitanje,v2:d2.pitanje,ikona:"📝"},
          ];

          return e("div",{style:{display:"flex",flexDirection:"column",gap:12,animation:"fadeIn .2s ease"}},

            /* Zajedničke teme badge */
            zajednicke.length>0&&e("div",{style:{
              display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",
              padding:"10px 16px",
              background:"var(--blue-d)",border:"1px solid rgba(45,84,196,.2)",
              borderRadius:12
            }},
              e("span",{style:{fontSize:16,flexShrink:0}},"🔗"),
              e("span",{style:{fontSize:12,fontWeight:700,color:"var(--blue)",flexShrink:0}},"Zajedničke teme:"),
              e("div",{style:{display:"flex",gap:5,flexWrap:"wrap"}},
                zajednicke.map(w=>
                  e("span",{key:w,style:{
                    fontSize:11,padding:"2px 10px",borderRadius:99,
                    background:"rgba(45,84,196,.15)",color:"var(--blue)",
                    fontWeight:700
                  }},w.charAt(0).toUpperCase()+w.slice(1))
                )
              )
            ),

            /* Usporedne kartice po kategoriji */
            rows.map((row,ri)=>
              e("div",{key:ri,style:{
                background:"var(--s1)",border:"1px solid var(--bdr)",
                borderRadius:14,overflow:"hidden"
              }},
                /* Kategorija header */
                e("div",{style:{
                  padding:"6px 12px",background:"var(--s2)",
                  borderBottom:"1px solid var(--bdr)",
                  display:"flex",alignItems:"center",gap:5
                }},
                  e("span",{style:{fontSize:12}},row.ikona),
                  e("span",{style:{fontSize:10,fontWeight:800,textTransform:"uppercase",
                    letterSpacing:".07em",color:"var(--muted)"}},row.l)
                ),
                /* Dva stupca */
                e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},
                  e("div",{style:{
                    padding:"10px 12px",fontSize:12,lineHeight:1.65,
                    borderRight:"1px solid var(--bdr)",
                    borderLeft:"3px solid rgba(45,84,196,.4)"
                  }},row.v1),
                  e("div",{style:{
                    padding:"10px 12px",fontSize:12,lineHeight:1.65,
                    borderLeft:"3px solid rgba(124,92,252,.4)"
                  }},row.v2)
                )
              )
            ),

            /* Savjeti za usporedni esej */
            e("div",{style:{
              background:"rgba(52,212,122,.06)",
              border:"1px solid rgba(52,212,122,.2)",
              borderRadius:14,padding:"16px 18px",marginTop:4
            }},
              e("div",{style:{fontWeight:800,fontSize:14,marginBottom:12,
                color:"var(--green)",display:"flex",alignItems:"center",gap:8}},
                e("span",null,"✍️"),
                e("span",null,"Kako pisati usporedni esej")
              ),
              e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                [
                  {br:"1",t:"Uvod",s:"Predstavi oba djela i formuliraj tezu usporedbe — što ih spaja ili razlikuje?"},
                  {br:"2",t:"Razrada",s:"Analiziraj temu A u oba djela → zatim temu B. Ne pišeš o djelu po djelu!"},
                  {br:"3",t:"Poveznice",s:"'Za razliku od...', 'Dok X prikazuje...', 'Slično tome...' — koristiti ove fraze."},
                  {br:"4",t:"Zaključak",s:"Što usporedba otkriva? Koja je dublja sličnost ili razlika između dvaju autora?"},
                ].map(({br,t,s})=>
                  e("div",{key:br,style:{display:"flex",gap:10,alignItems:"flex-start"}},
                    e("div",{style:{
                      width:22,height:22,borderRadius:"50%",flexShrink:0,
                      background:"var(--green)",color:"#fff",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:11,fontWeight:800
                    }},br),
                    e("div",{style:{fontSize:13,lineHeight:1.6}},
                      e("strong",null,t+": "),s)
                  )
                )
              )
            )
          );
        })(),

        /* Hint */
        (!uspDjelo1||!uspDjelo2||uspDjelo1===uspDjelo2)&&e("div",{style:{
          textAlign:"center",padding:"40px 20px",color:"var(--muted)"
        }},
          e("div",{style:{fontSize:48,marginBottom:12}},"⚖️"),
          e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6,color:"var(--text)"}},"Odaberi dva različita djela"),
          e("div",{style:{fontSize:13,lineHeight:1.6,maxWidth:360,margin:"0 auto"}},
            "Usporedba prikazuje teme, likove i esejska pitanja za oba djela — idealno za ispite koji traže usporedbu.")
        )
      ),

      /* ── VREMENSKA OSA ── */
      tab==="osa"&&e("div",null,

        /* ── HEADER ── */
        e("div",{style:{marginBottom:24,textAlign:"center"}},
          e("div",{style:{
            display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:6
          }},
            e("span",{style:{fontSize:24}},"📅"),
            e("div",{style:{
              fontFamily:"var(--fh)",fontSize:26,
              background:"linear-gradient(90deg,#c084fc,#fb923c)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
              backgroundClip:"text",lineHeight:1.2
            }},"Vremenska os")
          ),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},
            "Kronološki pregled svih lektira. ",
            e("span",{style:{color:"var(--text)",fontWeight:600}},
              LEKTIRE.filter(l=>l.obvezna).length+" obveznih"),
            " i ",
            e("span",{style:{color:"var(--text)",fontWeight:600}},
              LEKTIRE.filter(l=>!l.obvezna).length+" dodatnih"),
            " djela."
          )
        ),

        /* ── VIZUALNI TIMELINE ── */
        e("div",{style:{
          position:"relative",marginBottom:28,
          overflowX:"auto",scrollbarWidth:"none",
          msOverflowStyle:"none",
          cursor:"grab",userSelect:"none"
        },
        ref:el=>{
          if(!el||el._dragInit) return;
          el._dragInit=true;
          let down=false,startX=0,scrollLeft=0;
          el.addEventListener("mousedown",ev=>{down=true;startX=ev.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.cursor="grabbing";});
          el.addEventListener("mouseleave",()=>{down=false;el.style.cursor="grab";});
          el.addEventListener("mouseup",()=>{down=false;el.style.cursor="grab";});
          el.addEventListener("mousemove",ev=>{if(!down)return;ev.preventDefault();el.scrollLeft=scrollLeft-(ev.pageX-el.offsetLeft-startX)*1.2;});
        }},
          e("div",{style:{minWidth:700,padding:"8px 4px 4px"}},
            /* Gradijentna linija */
            e("div",{style:{
              position:"relative",height:3,
              background:"linear-gradient(90deg,#c084fc,#fb923c,#f59e0b,#34d399,#60a5fa,#a78bfa,#22d3ee,#f87171,#4ade80,#fbbf24)",
              borderRadius:99,marginBottom:0,
              boxShadow:"0 2px 12px rgba(192,132,252,.3)"
            }}),
            /* Točke i labele */
            e("div",{style:{
              display:"flex",justifyContent:"space-between",
              alignItems:"flex-start",
              marginTop:-6
            }},
              [
                {ti:0,kratko:"Antika",boja:"#c084fc",ikona:"🏛",od:"~500 pr."},
                {ti:1,kratko:"Renesansa",boja:"#fb923c",ikona:"🌅",od:"14. st."},
                {ti:2,kratko:"Barok",boja:"#f59e0b",ikona:"🌹",od:"17. st."},
                {ti:3,kratko:"Romantizam",boja:"#34d399",ikona:"🌊",od:"1800."},
                {ti:4,kratko:"Realizam",boja:"#60a5fa",ikona:"🏙",od:"1850."},
                {ti:5,kratko:"Simbolizam",boja:"#a78bfa",ikona:"🌙",od:"1857."},
                {ti:6,kratko:"Moderna",boja:"#22d3ee",ikona:"✨",od:"1895."},
                {ti:7,kratko:"Ekspres.",boja:"#f87171",ikona:"🔥",od:"1920."},
                {ti:8,kratko:"Egzist.",boja:"#4ade80",ikona:"🔍",od:"1940."},
                {ti:9,kratko:"HR proza",boja:"#fbbf24",ikona:"📖",od:"1960."},
              ].map(({ti,kratko,boja,ikona,od})=>{
                const isOpen=!!openEre[ti];
                return e("div",{key:ti,
                  onClick:()=>togEra(ti),
                  style:{
                    display:"flex",flexDirection:"column",alignItems:"center",
                    gap:0,cursor:"pointer",minWidth:64,
                    transition:"transform .15s"
                  },
                  onMouseEnter:ev=>ev.currentTarget.style.transform="translateY(-2px)",
                  onMouseLeave:ev=>ev.currentTarget.style.transform="translateY(0)"
                },
                  /* Točka */
                  e("div",{style:{
                    width:isOpen?16:12,height:isOpen?16:12,
                    borderRadius:"50%",background:boja,
                    border:"3px solid var(--bg)",
                    boxShadow:"0 0 0 2px "+boja+(isOpen?"66":"44")+", 0 0 12px "+boja+(isOpen?"66":"22"),
                    transition:"all .2s",flexShrink:0
                  }}),
                  /* Ikona */
                  e("div",{style:{fontSize:18,marginTop:6,lineHeight:1}},ikona),
                  /* Kratko ime */
                  e("div",{style:{
                    fontSize:9,fontWeight:700,color:isOpen?boja:"var(--muted)",
                    textAlign:"center",lineHeight:1.3,marginTop:3,
                    transition:"color .2s",maxWidth:60
                  }},kratko),
                  /* Godina */
                  e("div",{style:{
                    fontSize:8,color:"var(--muted)",opacity:.7,
                    textAlign:"center",marginTop:1
                  }},od)
                );
              })
            )
          )
        ),

                /* ── ACCORDION KARTICE ── */
        e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
          [
            {era:"Antika",period:"do 5. st.",boja:"#c084fc",ikona:"🏛",
             djela:["Antigona"]},
            {era:"Renesansa & Humanizam",period:"14.–16. st.",boja:"#fb923c",ikona:"🌅",
             djela:["Kanconijer / izbor","Novela od Stanca","Dundo Maroje","Hamlet"]},
            {era:"Barok",period:"17. st.",boja:"#f59e0b",ikona:"🌹",
             djela:["Dubravka"]},
            {era:"Romantizam",period:"poč. 19. st.",boja:"#34d399",ikona:"🌊",
             djela:["Patnje mladoga Werthera"]},
            {era:"Realizam",period:"sredina 19. st.",boja:"#60a5fa",ikona:"🏙",
             djela:["Smrt Smail-age Čengića","Prijan Lovro","Posljednji Stipančići",
                    "U registraturi","Otac Goriot","Zločin i kazna","Ana Karenjina","Nora (Lutkina kuća)"]},
            {era:"Simbolizam",period:"2. pol. 19. st.",boja:"#a78bfa",ikona:"🌙",
             djela:["Izbor iz poezije (Baudelaire)"]},
            {era:"Hrvatska moderna & Avangarda",period:"1895–1920.",boja:"#22d3ee",ikona:"✨",
             djela:["Camao, Cvijet sa raskršća, Kip domovine leta 188*",
                    "Izbor iz poezije (Ujević)","Izbor iz poezije (Kranjčević)"]},
            {era:"Ekspresionizam & Modernizam (1920–1945)",period:"1920–1945.",boja:"#f87171",ikona:"🔥",
             djela:["Gospoda Glembajevi","Izbor iz poezije (Šimić)",
                    "Kiklop","Preobražaj","Život je san"]},
            {era:"Egzistencijalizam & Modernizam (1940–1960)",period:"1940–1960.",boja:"#4ade80",ikona:"🔍",
             djela:["Stranac","Lovac u žitu"]},
            {era:"Hrvatska moderna proza (1960–)",period:"1960–",boja:"#fbbf24",ikona:"📖",
             djela:["Povratak Filipa Latinovicza","Kratki izlet",
                    "Izbor iz poezije (Nazor)"]},
          ].map((era,ei)=>{
            const eraLektire=LEKTIRE.filter(l=>{
              const ime=l.djelo+(l.djelo==="Izbor iz poezije"?" ("+l.autor.split(" ").pop()+")":"");
              return era.djela.some(d=>ime.includes(d.replace(" (Šimić)","").replace(" (Baudelaire)","").replace(" (Ujević)","").replace(" (Kranjčević)","").replace(" (Nazor)",""))||l.djelo.includes(d.split(" (")[0]));
            });
            const open=!!openEre[ei];
            return e("div",{key:ei,style:{
              border:"1px solid var(--bdr)",borderRadius:12,
              overflow:"hidden",
              borderLeft:"4px solid "+era.boja
            }},
              e("div",{
                style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",
                  cursor:"pointer",background:"var(--s1)",transition:"background .12s",
                  userSelect:"none"},
                onClick:()=>togEra(ei),
                onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
                onMouseLeave:ev=>ev.currentTarget.style.background="var(--s1)"
              },
                e("span",{style:{fontSize:18,flexShrink:0}},era.ikona),
                e("div",{style:{flex:1}},
                  e("div",{style:{fontWeight:700,fontSize:13,marginBottom:1}},era.era),
                  e("div",{style:{fontSize:11,color:"var(--muted)"}},
                    era.period+" · "+eraLektire.length+" "+(eraLektire.length===1?"djelo":"djela"))
                ),
                e("div",{style:{display:"flex",gap:6,alignItems:"center"}},
                  e("span",{style:{color:"var(--muted)",fontSize:11,flexShrink:0}},open?"▲":"▼")
                )
              ),
              open&&e("div",{style:{
                padding:"10px 12px",borderTop:"1px solid var(--bdr)",
                background:"var(--s2)",display:"flex",flexDirection:"column",gap:6
              }},
                eraLektire.length===0
                  ? e("div",{style:{fontSize:13,color:"var(--muted)",fontStyle:"italic",padding:"4px 0"}},
                      "Nema lektira iz ovog razdoblja.")
                  : eraLektire.map((l,li)=>
                      e("div",{key:li,
                        style:{
                          display:"flex",alignItems:"flex-start",gap:10,padding:"9px 12px",
                          background:"var(--s1)",borderRadius:10,
                          border:"1px solid var(--bdr)",
                          cursor:"pointer",transition:"background .12s"
                        },
                        onClick:()=>{setTab("lektire");setOtvorenaDjelo(LEKTIRE.indexOf(l));},
                        onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
                        onMouseLeave:ev=>ev.currentTarget.style.background="var(--s1)"
                      },
                        e("div",{style:{flex:1}},
                          e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2}},
                            e("span",{style:{fontWeight:700,fontSize:13}},
                              l.djelo+(l.djelo==="Izbor iz poezije"?" ("+l.autor.split(" ").pop()+")":"")),
                            !l.obvezna&&e("span",{style:{
                              fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:99,
                              background:"var(--gold-d)",color:"var(--gold)",
                              border:"1px solid var(--gold-b)",flexShrink:0
                            }},"Dod.")
                          ),
                          e("div",{style:{fontSize:11,color:"var(--muted)"}},l.autor),
                          e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2,
                            overflow:"hidden",textOverflow:"ellipsis",
                            display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"}},
                            l.tema.split(",")[0])
                        ),
                        e("span",{style:{fontSize:11,color:era.boja,flexShrink:0,marginTop:2}},"→")
                      )
                    )
              )
            );
          })
        )
      )
  );
}

/* ─── PRO PAYWALL MODAL ─── */

export { LektireScreen };
