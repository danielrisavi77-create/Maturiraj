'use client';
import React, { useState, useMemo, Fragment } from 'react';
import { FixedSizeList } from 'react-window';
import { EXAMS, ESEJI, SAZECI, TOPIC_LABELS } from '../hrvatskiSimulatorData';
import { e, LL, chk, lsSave } from '../utils/helpers';
import { PojmovnikModal } from './modals/Modals';

function ModeSelect({examKey,onExamMode,onPractice,onBack,onEsej,onSazetak}){
  const[showSimPojmovnik,setShowSimPojmovnik]=useState(false);
  const exam=EXAMS[examKey];
  const baseParts=examKey.split("_");
  const baseKey=baseParts[0]+"_"+baseParts[1]; // "2024_ljeto"

  const examA=EXAMS[baseKey+"_A"];
  const examB=EXAMS[baseKey+"_B"];
  const examJedinstven=exam?.jedinstven?exam:null;

  // Je li razina već eksplicitno odabrana u ključu (dolazi iz YearGroup)
  const razinaDolazi=exam?.razina||null; // "A", "B", ili null za jedinstven
  const hasBothRazine=!!(examA&&examB)&&!examJedinstven;
  // Prikaži selector razine samo ako NIJE eksplicitno odabrana
  const showRazinaSelector=hasBothRazine&&!razinaDolazi&&!examJedinstven;

  const defaultRazina=razinaDolazi||(hasBothRazine?"B":"B");
  const[razina,setRazina]=useState(defaultRazina);

  // Stvarni ključ koji se koristi za pokretanje ispita
  const selectedExamKey=examJedinstven?examKey:(baseKey+"_"+razina);
  const selectedExam=EXAMS[selectedExamKey]||exam;

  const esejKeyA=baseParts[0]+"_"+baseParts[1]+"_esej_A";
  const esejKeyB=baseParts[0]+"_"+baseParts[1]+"_esej_B";
  const esejA=ESEJI[esejKeyA];
  const esejB=ESEJI[esejKeyB];
  const aktualniEsejKey=examJedinstven?(esejKeyB):(razina==="A"?(esejA?esejKeyA:null):(esejB?esejKeyB:null));
  const aktualniEsej=aktualniEsejKey?ESEJI[aktualniEsejKey]:null;

  // Sažetak — dostupan samo za 2023+
  const sazetakObj=SAZECI[baseKey];
  const hasSazetak=!!(sazetakObj&&examJedinstven);

    return e(Fragment,null,
    showSimPojmovnik&&e(PojmovnikModal,{onClose:()=>setShowSimPojmovnik(false)}),
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},exam?.year+" — "+(exam?.season==="ljeto"?"Ljetni":exam?.season==="zima"?"Zimski":"Jesenski")+" rok")
    ),
    e("div",{className:"modeselect-screen screen-enter"},
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:6}},examJedinstven||razinaDolazi?"Odaberi mod":"Odaberi razinu i mod"),
      e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:28}},
        examJedinstven?"Ovaj ispit nema podjele na razine.":
        razinaDolazi?(razinaDolazi==="A"?"Viša razina (A)":"Osnovna razina (B)"):
        hasBothRazine?"Najprije odaberi razinu, zatim način rješavanja.":
        "Ovaj ispit dostupan je samo na osnovnoj razini (B)."),

      showRazinaSelector&&e("div",{style:{marginBottom:28}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12}},"Razina ispita"),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          e("div",{
            style:{background:"var(--s1)",border:"2px solid "+(razina==="A"?"var(--gold)":"var(--bdr)"),borderRadius:"var(--rr)",padding:"18px 20px",cursor:"pointer",transition:"all .2s"},
            onClick:()=>setRazina("A")
          },
            e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
              e("div",{style:{width:28,height:28,borderRadius:"50%",background:razina==="A"?"var(--gold)":"var(--s3)",border:"2px solid "+(razina==="A"?"var(--gold)":"var(--bdr2)"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:razina==="A"?"#160d00":"var(--muted)",transition:"all .2s"}},"A"),
              e("div",{style:{fontWeight:700,fontSize:15,color:razina==="A"?"var(--gold)":"var(--text)"}},"Viša razina")
            ),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},"Složeniji zahtjevi. Više bodova za fakultetske prijave (npr. Pravni ZG: 200 bod.).")
          ),
          e("div",{
            style:{background:"var(--s1)",border:"2px solid "+(razina==="B"?"var(--blue)":"var(--bdr)"),borderRadius:"var(--rr)",padding:"18px 20px",cursor:"pointer",transition:"all .2s"},
            onClick:()=>setRazina("B")
          },
            e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
              e("div",{style:{width:28,height:28,borderRadius:"50%",background:razina==="B"?"var(--blue)":"var(--s3)",border:"2px solid "+(razina==="B"?"var(--blue)":"var(--bdr2)"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:razina==="B"?"#fff":"var(--muted)",transition:"all .2s"}},"B"),
              e("div",{style:{fontWeight:700,fontSize:15,color:razina==="B"?"var(--blue)":"var(--text)"}},"Osnovna razina")
            ),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},"Niži zahtjevi. Dovoljna za upis većine studijskih programa.")
          )
        )
      ),

      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12}},"Način rješavanja"),
      e("div",{className:"modecard",onClick:()=>onPractice(selectedExamKey)},
        e("h3",null,"🎯 Vježbanje"),
        e("p",null,"Rješavaj bez vremenskog ograničenja. Odmah vidiš točan odgovor i AI objašnjenje. Idealno za učenje.")
      ),
      e("div",{className:"modecard",onClick:()=>onExamMode(selectedExamKey)},
        e("h3",null,"🎓 Ispitni mod ("+(parseInt(baseParts[0])>=2017?"100":"72")+" min)"),
        e("p",null,"Simulacija stvarne mature s timerom. Odgovori se ocjenjuju na kraju. Testiraj se pod pritiskom.")
      ),

      aktualniEsej&&e("div",{
        className:"modecard",
        style:{background:"rgba(75,123,255,.04)",borderColor:"rgba(75,123,255,.25)"},
        onClick:()=>onEsej(aktualniEsejKey)
      },
        e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
          e("h3",{style:{color:"var(--blue)",margin:0}},"✍️ Školski esej (160 min)"),
          e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
            background:razina==="A"?"var(--gold-d)":"var(--blue-d)",
            border:"1px solid "+(razina==="A"?"var(--gold-b)":"rgba(75,123,255,.3)"),
            color:razina==="A"?"var(--gold)":"var(--blue)"}},
            "Razina "+razina),
          e("span",{className:"esej-pro-badge",style:{marginLeft:"auto"}},"PRO")
        ),
        e("p",null,"Piši školski esej prema zadanim tekstovima i smjernicama. AI ocjenjivanje po NCVVO kriterijima."),
        e("div",{style:{marginTop:8,fontSize:12,color:"var(--muted)"}},
          "📄 Tema: ",e("span",{style:{color:"var(--text)",fontWeight:600}},aktualniEsej.naslov)
        )
      ),
      hasSazetak&&e("div",{
        className:"modecard",
        style:{background:"rgba(100,210,100,.04)",borderColor:"rgba(100,210,100,.25)"},
        onClick:()=>onSazetak&&onSazetak(baseKey)
      },
        e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
          e("h3",{style:{color:"#6dca6d",margin:0}},"📝 Sažetak (80 min)")
        ),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:10}},sazetakObj&&sazetakObj.tekstNaslov),
        e("div",{style:{fontSize:12,color:"var(--muted)"}},
          "Napiši sažetak zadanog teksta u 200–250 riječi prateći smjernice. AI profesor ocjenjuje tvoj rad."
        )
      ),
      /* Obavijest ako esej postoji samo za drugu razinu */
      !aktualniEsej&&(esejA||esejB)&&e("div",{style:{
        background:"rgba(75,123,255,.04)",border:"1px solid rgba(75,123,255,.15)",
        borderRadius:"var(--r)",padding:"12px 16px",fontSize:12,color:"var(--muted)"
      }},
        "✍️ Školski esej dostupan je za razinu ",
        e("strong",{style:{color:"var(--blue)"}},esejA?"A":"B"),
        " — odaberi je gore za pristup."
      )
    )
  );
}

function TopicFilterScreen({onStart,onBack,userData}){
  const ALL_TOPICS=Object.keys(TOPIC_LABELS);
  const ALL_YEARS=[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  const ALL_DIFF=["sve","nezapoceto","lako","srednje","tesko"];
  const DIFF_LABELS={sve:"Sve",nezapoceto:"Nezapočeto",lako:"Lako",srednje:"Srednje",tesko:"Teško"};
  const DIFF_COLORS={sve:"var(--text)",nezapoceto:"var(--muted)",lako:"var(--green)",srednje:"var(--gold)",tesko:"var(--red)"};

  const[selTopics,setSelTopics]=useState(new Set(ALL_TOPICS));
  const[selYears,setSelYears]=useState(new Set(ALL_YEARS));
  const[selDiff,setSelDiff]=useState("sve");

  const errorTracker=userData?.errorTracker||{};

  function getQDiff(q,examKey){
    // Nađi sve zapise u errorTrackeru koji se odnose na ovo pitanje
    const key=examKey+"_"+q.id;
    const entry=errorTracker[key];
    if(!entry) return "nezapoceto";
    const total=(entry.count||0)+(entry.correctCount||0);
    if(total===0) return "nezapoceto";
    const errRate=(entry.count||0)/total;
    if(errRate>=0.5) return "tesko";
    if(errRate<=0.2) return "lako";
    return "srednje";
  }

  function tog(set,setFn,val){setFn(prev=>{const next=new Set(prev);next.has(val)?next.delete(val):next.add(val);return next;});}
  function togAll(set,setFn,all){setFn(set.size===all.length?new Set():new Set(all));}

  const matchingQs=useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(exam=>{
      if(!selYears.has(exam.year)) return;
      if(!exam.qs?.length) return;
      exam.qs.forEach(q=>{
        // Samo mc — bodovanje sesije (Sim.submitExam) računa isključivo mc pitanja.
        if(q.type!=="mc") return;
        if(!selTopics.has(q.topic||"ostalo")) return;
        if(selDiff!=="sve"){
          const diff=getQDiff(q,exam.key);
          if(diff!==selDiff) return;
        }
        qs.push({...q,_examKey:exam.key});
      });
    });
    return qs;
  },[selTopics,selYears,selDiff,userData?.errorTracker]);

  function startSession(){
    if(matchingQs.length===0) return;
    const shuffled=[...matchingQs].sort(()=>Math.random()-.5).slice(0,Math.min(matchingQs.length,80));
    onStart({key:"filter_custom",label:"Vježbanje po filteru",qs:shuffled,year:0,season:"",razina:""});
  }

  const secStyle={marginBottom:20};
  const labelStyle={fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",justifyContent:"space-between",alignItems:"center"};

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🎯 Vježbaj po filteru"),
      matchingQs.length>0&&e("span",{className:"nbadge"},matchingQs.length+" pitanja")
    ),
    e("div",{className:"screen-enter",style:{maxWidth:720,margin:"0 auto",padding:"24px 16px 80px"}},

      e("div",{style:secStyle},
        e("div",{style:labelStyle},
          e("span",null,"Tema"),
          e("button",{className:"btn btn-g",style:{fontSize:11,padding:"2px 8px"},
            onClick:()=>togAll(selTopics,setSelTopics,ALL_TOPICS)},
            selTopics.size===ALL_TOPICS.length?"Ništa":"Sve")
        ),
        e("div",{style:{display:"flex",flexWrap:"wrap",gap:6}},
          ALL_TOPICS.map(t=>
            e("div",{key:t,className:"filter-chip"+(selTopics.has(t)?" sel":""),
              onClick:()=>tog(selTopics,setSelTopics,t)},
              TOPIC_LABELS[t]||t)
          )
        )
      ),

      e("div",{style:secStyle},
        e("div",{style:labelStyle},
          e("span",null,"Godina ispita"),
          e("button",{className:"btn btn-g",style:{fontSize:11,padding:"2px 8px"},
            onClick:()=>togAll(selYears,setSelYears,ALL_YEARS)},
            selYears.size===ALL_YEARS.length?"Ništa":"Sve")
        ),
        e("div",{style:{display:"grid",gridTemplateColumns:"repeat(8,1fr)",gap:6}},
          ALL_YEARS.map(y=>
            e("div",{key:y,className:"filter-chip"+(selYears.has(y)?" sel":""),
              style:{textAlign:"center",fontSize:12},
              onClick:()=>tog(selYears,setSelYears,y)},y+".")
          )
        )
      ),

      e("div",{style:secStyle},
        e("div",{style:labelStyle},
          e("span",null,"Težina (osobna)"),
          e("span",{style:{fontSize:10,color:"var(--muted)",fontWeight:400}},"Na osnovu tvojih grešaka")
        ),
        e("div",{style:{display:"flex",flexWrap:"wrap",gap:6}},
          ALL_DIFF.map(d=>
            e("div",{key:d,
              className:"filter-chip"+(selDiff===d?" sel":""),
              style:{color:selDiff===d?DIFF_COLORS[d]:"var(--muted)"},
              onClick:()=>setSelDiff(d)},
              DIFF_LABELS[d])
          )
        ),
        selDiff!=="sve"&&e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:6}},
          selDiff==="nezapoceto"?"Pitanja koja još nisi riješio/la.":
          selDiff==="lako"?"Pitanja koja rješavaš s manje od 20% grešaka.":
          selDiff==="srednje"?"Pitanja s 20–50% grešaka.":
          "Pitanja koja griješiš u više od 50% slučajeva."
        )
      ),

      e("div",{style:{position:"sticky",bottom:16,paddingTop:8}},
        e("button",{
          className:"btn btn-p",
          disabled:matchingQs.length===0,
          style:{width:"100%",padding:"14px",fontSize:16,borderRadius:"var(--r)",
            opacity:matchingQs.length===0?.5:1},
          onClick:startSession
        },
          matchingQs.length===0
            ? "Nema pitanja za odabrane filtre"
            : "▶ Vježbaj "+matchingQs.length+" pitanja"+(matchingQs.length>80?" (max 80)":"")
        )
      )
    )
  );
}

function ErrorsScreen({userData,onStart,onBack}){
  const[filterTema,setFilterTema]=React.useState("sve");
  const[sortBy,setSortBy]=React.useState("count"); // count | date | review

  // Defensive guard — userData can briefly be null/undefined during hydration
  if(!userData||typeof userData!=="object") return e("div",{style:{padding:40,textAlign:"center",color:"var(--muted)"}},"Učitavam...");

  const errors=Object.values(userData.errorTracker||{});
  const today=new Date().toLocaleDateString("hr");

  // SM-2: split into due (nextReview <= today or undefined) vs scheduled
  function parseCroDate(s){if(!s)return 0;try{const p=s.replace(/\./g,'').trim().split(/\s+/);return new Date(parseInt(p[2]),parseInt(p[1])-1,parseInt(p[0])).getTime();}catch{return 0;}}
  function isdue(err){
    if(!err.nextReview) return true;
    try{
      return parseCroDate(err.nextReview)<=new Date().setHours(0,0,0,0);
    }catch{return true;}
  }
  const dueErrors=errors.filter(isdue);
  const scheduledErrors=errors.filter(e=>!isdue(e));

  // Sortiraj
  const sorted=[...errors].sort((a,b)=>{
    if(sortBy==="count") return b.count-a.count;
    if(sortBy==="date") return parseCroDate(b.lastDate)-parseCroDate(a.lastDate);
    if(sortBy==="review") return parseCroDate(a.nextReview)-parseCroDate(b.nextReview);
    return 0;
  });

  // Filtriraj po temi
  const teme=["sve",...new Set(errors.map(e=>e.topic).filter(Boolean))];
  const filtered=filterTema==="sve"?sorted:sorted.filter(e=>e.topic===filterTema);

  const hot=filtered.filter(e=>e.count>=3).slice(0,3);

  function buildQs(subset){
    const allQs=[];
    subset.forEach(err=>{
      if(!err?.examKey||err.qid==null) return;
      const exam=EXAMS[err.examKey];if(!exam?.qs) return;
      const q=exam.qs.find(q=>String(q.id)===String(err.qid));
      if(q) allQs.push({...q,_examKey:err.examKey});
    });
    return allQs;
  }

  function startSession(subset){
    const qs=buildQs(subset||filtered);
    if(qs.length===0) return;
    const shuffled=[...qs].sort(()=>Math.random()-.5);
    onStart({key:"errors_session",year:"Greške",season:"session",label:"Ponavljanje grešaka",qs:shuffled});
  }

  // Statistika
  const ukupnoGresaka=errors.reduce((s,e)=>s+e.count,0);
  const hotCount=errors.filter(e=>e.count>=3).length;

  if(errors.length===0) return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"Greške")
    ),
    e("div",{style:{maxWidth:600,margin:"80px auto",textAlign:"center",color:"var(--muted)",padding:"0 20px"}},
      e("div",{style:{fontSize:48,marginBottom:16}},"🎉"),
      e("div",{style:{fontSize:20,fontFamily:"var(--fh)",marginBottom:8,color:"var(--text)"}},"Nema grešaka!"),
      e("p",{style:{fontSize:14,lineHeight:1.7}},"Sve si točno odgovorio/la ili još nisi rješavao/la ispite."),
      e("button",{className:"btn btn-p",style:{marginTop:24,padding:"10px 24px"},onClick:onBack},"← Vrati se")
    )
  );

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Greške — ponavljanje"),
      e("span",{className:"nbadge"},errors.length+" pitanja")
    ),
    e("div",{className:"screen-enter",style:{maxWidth:720,margin:"0 auto",padding:"24px 20px 80px"}},

      /* Naslov + stats */
      e("div",{style:{marginBottom:20}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:26,letterSpacing:"-.02em",marginBottom:4}},"Ponavljanje grešaka"),
        e("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}},
          e("span",{style:{fontSize:13,color:"var(--muted)"}},"Ukupno: "+errors.length),
          e("span",{style:{fontSize:13,color:"var(--muted)"}},"·"),
          dueErrors.length>0&&e("span",{style:{fontSize:13,fontWeight:700,color:"var(--red)"}},"🔔 Danas na redu: "+dueErrors.length),
          dueErrors.length>0&&e("span",{style:{fontSize:13,color:"var(--muted)"}},"·"),
          scheduledErrors.length>0&&e("span",{style:{fontSize:13,color:"var(--muted)"}},"📅 Raspoređeno: "+scheduledErrors.length),
          hotCount>0&&e("span",{style:{fontSize:13,color:"var(--muted)"}},"·"),
          hotCount>0&&e("span",{style:{fontSize:13,color:"var(--red)",fontWeight:600}},"🔥 "+hotCount+" problematičnih")
        ),
        dueErrors.length>0&&e("button",{className:"btn btn-p",style:{marginTop:10,padding:"8px 18px",fontSize:13},onClick:()=>startSession(dueErrors)},"▶ Vježbaj danas na redu ("+dueErrors.length+")")
      ),

      /* Hot pitanja */
      hot.length>0&&e("div",{style:{
        background:"rgba(248,113,113,.06)",border:"1px solid rgba(248,113,113,.2)",
        borderRadius:"var(--rr)",padding:"18px 20px",marginBottom:20
      }},
        e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14}},
          e("span",{style:{fontSize:22}},"🔥"),
          e("div",null,
            e("div",{style:{fontWeight:700,fontSize:15,marginBottom:2}},"Najproblematičnija pitanja"),
            e("div",{style:{fontSize:12,color:"var(--muted)"}},"Pogriješio/la si "+hot[0].count+"× ili više")
          )
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:14}},
          hot.map((err,i)=>
            e("div",{key:i,style:{
              display:"flex",alignItems:"flex-start",gap:10,padding:"10px 12px",
              background:"rgba(248,113,113,.06)",borderRadius:"var(--r)",
              border:"1px solid rgba(248,113,113,.12)"
            }},
              e("div",{style:{
                width:28,height:28,borderRadius:"50%",flexShrink:0,marginTop:1,
                background:"rgba(248,113,113,.18)",display:"flex",alignItems:"center",
                justifyContent:"center",fontSize:11,fontWeight:800,color:"var(--red)"
              }},err.count+"×"),
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
                  letterSpacing:".07em",color:"var(--red)",marginBottom:3}},
                  TOPIC_LABELS[err.topic]||err.topic||"Opće"),
                e("div",{style:{fontSize:13,lineHeight:1.5,color:"var(--text)",
                  display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",
                  overflow:"hidden",textOverflow:"ellipsis"}},err.q)
              )
            )
          )
        ),
        e("button",{
          className:"btn btn-p",
          style:{width:"100%",padding:"11px",fontSize:14,borderRadius:"var(--r)"},
          onClick:()=>startSession(errors.filter(e=>e.count>=3))
        },"🎯 Vježbaj "+hot.length+" najteža pitanja")
      ),

      /* Kontrole — filter + sort + akcija */
      e("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}},
        e("div",{style:{display:"flex",gap:4,flexWrap:"wrap",flex:1}},
          teme.map(t=>
            e("button",{key:t,
              onClick:()=>setFilterTema(t),
              style:{
                padding:"5px 12px",borderRadius:99,fontSize:12,fontWeight:600,
                cursor:"pointer",transition:"all .12s",fontFamily:"var(--fb)",
                border:"1px solid "+(filterTema===t?"var(--blue)":"var(--bdr)"),
                background:filterTema===t?"var(--blue-d)":"transparent",
                color:filterTema===t?"var(--blue)":"var(--muted)"
              }
            },t==="sve"?"Sve teme":TOPIC_LABELS[t]||t)
          )
        ),
        e("select",{
          value:sortBy,onChange:ev=>setSortBy(ev.target.value),
          style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",
            padding:"6px 10px",color:"var(--text)",fontSize:12,fontFamily:"var(--fb)",cursor:"pointer"}
        },
          e("option",{value:"count"},"Najviše grešaka"),
          e("option",{value:"date"},"Najnovije"),
          e("option",{value:"review"},"Datum ponavljanja")
        )
      ),

      /* Gumb pokreni sve + info */
      e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",
        marginBottom:14,flexWrap:"wrap",gap:8}},
        e("div",{style:{fontSize:13,color:"var(--muted)"}},
          filtered.length+" pitanja"+(filterTema!=="sve"?" (filtrirano)":"")),
        e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
          e("button",{
            className:"btn btn-g",
            style:{fontSize:13,padding:"8px 14px"},
            onClick:()=>{
              const win=window.open("","_blank");
              if(!win) return;
              const rows=filtered.map((err,i)=>{
                const esc=s=>(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
                const tema=esc(TOPIC_LABELS[err.topic]||err.topic||"Opće");
                const count=err.count+"×";
                const q=esc(err.q||"")
                const dat=esc(err.lastDate||"")
                return "<tr><td>"+(i+1)+"</td><td>"+tema+"</td><td>"+count+"</td><td>"+q+"</td><td>"+dat+"</td></tr>";
              }).join("");
              const html="<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Discere — Moje gre\u0161ke</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#111}h1{font-size:20px;margin-bottom:4px}p{color:#666;font-size:13px;margin-bottom:16px}table{width:100%;border-collapse:collapse;font-size:13px}th{background:#f0f0f0;padding:8px;text-align:left;border:1px solid #ddd;font-size:11px;text-transform:uppercase}td{padding:8px 10px;border:1px solid #eee;vertical-align:top}tr:nth-child(even) td{background:#fafafa}@media print{button{display:none}}</style></head><body><h1>Moje gre\u0161ke — Discere Hrvatski</h1><p>Datum: "+new Date().toLocaleDateString("hr")+" \u00b7 Ukupno: "+filtered.length+" pitanja</p><button onclick='window.print()' style='margin-bottom:16px;padding:8px 16px;cursor:pointer'>\uD83D\uDDA8\uFE0F Ispri\u0161 / Spremi kao PDF</button><table><thead><tr><th>#</th><th>Tema</th><th>Gre\u0161ka</th><th>Pitanje</th><th>Zadnji put</th></tr></thead><tbody>"+rows+"</tbody></table></body></html>";
              win.document.write(html);
              win.document.close();
            }
          },"📄 Izvezi kao PDF"),
          e("button",{
            className:"btn btn-gold",
            style:{fontSize:13,padding:"8px 16px"},
            onClick:()=>startSession(filtered)
          },"▶ Pokreni ponavljanje "+(filterTema!=="sve"?"filtriranih":"svih"))
        )
      ),

      /* Lista pitanja — virtualizirana */
      filtered.length>0&&e(FixedSizeList,{
        height:Math.min(filtered.length*114,560),
        itemCount:filtered.length,
        itemSize:114,
        width:"100%",
        itemData:{filtered,isdue,startSession,TOPIC_LABELS}
      },({index:i,style})=>{
          const err=filtered[i];
          const isHot=err.count>=3;
          const isMed=err.count>=2;
          const borderCol=isHot?"var(--red)":isMed?"var(--gold)":"var(--bdr2)";
          const bgBadge=isHot?"var(--red-d)":isMed?"var(--gold-d)":"var(--s3)";
          const colBadge=isHot?"var(--red)":isMed?"var(--gold)":"var(--muted)";
          const bdBadge=isHot?"rgba(248,113,113,.25)":isMed?"var(--gold-b)":"var(--bdr)";
          return e("div",{
            style:{...style,paddingBottom:6},
            key:i
          },
            e("div",{
              style:{
                background:"var(--s1)",
                border:"1px solid var(--bdr)",
                borderLeft:"3px solid "+borderCol,
                borderRadius:"0 var(--r) var(--r) 0",
                padding:"10px 14px",
                cursor:"pointer",
                height:"calc(100% - 6px)",
                boxSizing:"border-box",
                overflow:"hidden"
              },
              onClick:()=>startSession([err]),
              onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
              onMouseLeave:ev=>ev.currentTarget.style.background="var(--s1)"
            },
              e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}},
                e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                  background:bgBadge,color:colBadge,border:"1px solid "+bdBadge,flexShrink:0}},
                  err.count+"× greška"),
                e("span",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",
                  letterSpacing:".07em",color:"var(--muted)"}},
                  TOPIC_LABELS[err.topic]||err.topic||"Opće"),
                err.nextReview&&e("span",{style:{
                  fontSize:10,padding:"1px 7px",borderRadius:99,flexShrink:0,
                  background:isdue(err)?"rgba(248,113,113,.1)":"rgba(75,123,255,.08)",
                  color:isdue(err)?"var(--red)":"var(--blue)",
                  border:"1px solid "+(isdue(err)?"rgba(248,113,113,.2)":"rgba(75,123,255,.2)")
                }},isdue(err)?"🔔 Danas":"📅 "+err.nextReview),
                e("span",{style:{fontSize:10,color:"var(--muted)",marginLeft:"auto",flexShrink:0}},
                  err.lastDate)
              ),
              e("div",{style:{fontSize:13,lineHeight:1.4,color:"var(--text)",marginBottom:3,
                display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}},err.q),
              e("div",{style:{fontSize:11,color:"var(--blue)"}},
                "→ Klikni za vježbu ovog pitanja")
            )
          );
      })
    )
  );
}



function BookmarksScreen({onBack,onStartSession}){
  const[bookmarks,setBookmarks]=useState(()=>{try{return JSON.parse(localStorage.getItem("discere_hrv_bookmarks")||"{}")||{};}catch(e){return {};}});

  const bkList=Object.entries(bookmarks).map(([key,saved])=>{
    const parts=key.split("__");if(parts.length<2) return null;
    const[examKey,qidStr]=[parts[0],parts[1]];

  // Ključ je uvijek izvorni ispit + izvorni id pitanja (Sim ga gradi preko qIdentity), pa
  // bookmarci spremljeni u virtualnoj sesiji ovdje razriješe na pravi ispit.
  const exam=EXAMS[examKey];if(!exam) return null;
    const q=(exam.qs||[]).find(q=>String(q.id)===qidStr);if(!q) return null;
    return{key,examKey,q,saved};
  }).filter(Boolean);

  function removeBookmark(key){setBookmarks(prev=>{const next={...prev};delete next[key];lsSave("discere_hrv_bookmarks",JSON.stringify(next));return next;});}
  function startSession(){
    if(bkList.length===0) return;
    const qs=bkList.map(b=>({...b.q,_examKey:b.examKey}));
    onStartSession({key:"bookmarks_session",year:"Spremljeno",season:"session",label:"Spremljena pitanja — vježbanje",qs:[...qs].sort(()=>Math.random()-.5).slice(0,30)});
  }

  return e(Fragment,null,
    e("div",{className:"nav"},e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),e("span",{className:"ntitle"},"🔖 Spremljena pitanja")),
    e("div",{style:{maxWidth:720,margin:"0 auto",padding:"28px 20px 80px"}},
      bkList.length===0
        ? e("div",{style:{textAlign:"center",padding:60,color:"var(--muted)"}},"Nema spremljenih pitanja. Pritisni 🔖 uz pitanje da ga spremiš.")
        : e("div",null,
            e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10}},
              e("div",{style:{fontFamily:"var(--fh)",fontSize:20}},bkList.length+" spremljenih pitanja"),
              e("button",{className:"btn btn-gold",onClick:startSession},"▶ Vježbaj bookmarce")
            ),
            bkList.map(b=>
              e("div",{key:b.key,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"14px",marginBottom:8,display:"flex",gap:12,alignItems:"flex-start"}},
                e("div",{style:{flex:1}},
                  e("div",{style:{fontSize:11,color:"var(--gold)",fontWeight:700,marginBottom:4}},TOPIC_LABELS[b.q.topic]||b.q.topic),
                  e("div",{style:{fontSize:13,lineHeight:1.5}},b.q.q.length>120?b.q.q.slice(0,120)+"...":b.q.q)
                ),
                e("button",{style:{background:"none",border:"1px solid var(--bdr)",borderRadius:6,padding:"4px 8px",cursor:"pointer",fontSize:12,color:"var(--muted)"},onClick:()=>removeBookmark(b.key)},"✕ Ukloni")
              )
            )
          )
    )
  );
}


export { ModeSelect, TopicFilterScreen, ErrorsScreen, BookmarksScreen };
