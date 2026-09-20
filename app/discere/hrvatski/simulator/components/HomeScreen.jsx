'use client';
import React, { useState, useMemo, Fragment } from 'react';
import { EXAMS, ESEJI, SAZECI, LEVEL_NAMES, TOPIC_LABELS, XP_LEVELS } from '../hrvatskiSimulatorData';
import { e, getLevel, xpProgress, xpToNext } from '../utils/helpers';
import { calcTopicMastery, getDueReviews, MASTERY_LEVELS } from '../utils/pedagogy';
import { AnalyticsPanel } from './analytics/AnalyticsPanel';
import { isHrvFreePracticeExam } from '@/components/discere/paywall/paywallHelpers';

// Shared accessibility props for interactive divs (keyboard + screen reader)
const accBtn={role:"button",tabIndex:0,onKeyDown:ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();ev.currentTarget.click();}}};

function YearGroup({year,examList,onExam,isPaid}){
  const yearExams=examList.filter(ex=>ex.year===year);
  const[open,setOpen]=useState(false);
  const[selRazina,setSelRazina]=useState(null);

  const jedinstvenList=yearExams.filter(ex=>ex.jedinstven);
  const imaJedinstven=jedinstvenList.length>0;

  // Godine 2010–2022 uvijek imaju A i B razinu (A možda nije unesena = uskoro)
  const imaRazine=!imaJedinstven&&year>=2010&&year<=2022;

  // Svi sezonski ključevi koji bi trebali postojati za odabranu razinu
  // (za prikaz "uskoro" ako nedostaju)
  const SEZONE_PO_GODINI={
    2010:["ljeto","jesen","zima"],
    2011:["ljeto","jesen","zima"],
    2012:["ljeto","jesen","zima"],
  };
  const expectedSeasons=SEZONE_PO_GODINI[year]||["ljeto","jesen"];

  const imaPrivih=yearExams.some(ex=>ex.pravi);
  const totalQ=yearExams.reduce((a,ex)=>a+ex.qs.length,0);

  function renderSeasonRow(season,razina){
    const examKey=year+"_"+season+(razina?"_"+razina:"");
    const exam=EXAMS[examKey];
    const dostupno=!!(exam&&exam.pravi&&exam.qs.length>0);
    const esejKey=year+"_"+season+"_esej_"+(razina||"B");
    const esejObj=ESEJI[esejKey]||ESEJI[year+"_"+season+"_esej_B"]||ESEJI[year+"_"+season+"_esej_A"]||ESEJI[year+"_"+season+"_esej"];
    const imaEsej=!!esejObj;
    const seasonLabel=season==="ljeto"?"☀️ Ljetni":season==="zima"?"❄️ Zimski":"🍂 Jesenski";
    const seasonClass="exrow-sub-season "+(season==="ljeto"?"ljeto":season==="zima"?"zima":"jesen");

    if(!dostupno){
      return e("div",{key:examKey,className:"exrow-sub",style:{
        opacity:0.45,cursor:"default",
        borderLeft:"3px solid transparent",
        background:"var(--s1)",
      }},
        e("div",{style:{display:"flex",alignItems:"center",gap:8}},
          e("span",{className:seasonClass},seasonLabel),
          e("span",{style:{fontSize:11,color:"var(--muted)"}},"Uskoro dostupno"),
          e("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:99,marginLeft:"auto",
            background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",color:"var(--muted)"}},"⏳")
        )
      );
    }
    return e("div",{key:examKey,className:"exrow-sub exrow-sub--active",
      style:{cursor:"pointer",flexDirection:"column",alignItems:"flex-start",gap:4,
        background:"rgba(62,207,110,.03)",borderLeft:"3px solid rgba(62,207,110,.4)"},
      onClick:()=>onExam(examKey)},
      e("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:8}},
        e("span",{className:seasonClass},seasonLabel),
        e("span",{className:"exrow-sub-info"},exam.qs.length+" pitanja"),
        isHrvFreePracticeExam(examKey)&&(isPaid===undefined||!isPaid)&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:99,
          background:"rgba(62,207,110,.12)",border:"1px solid rgba(62,207,110,.35)",color:"var(--green)"}},"🆓 Besplatno u cijelosti"),
        e("span",{style:{color:"var(--muted)",fontSize:16,marginLeft:"auto"}},"→")
      ),
      e("div",{style:{display:"flex",flexDirection:"column",gap:4,paddingLeft:2}},
        imaEsej&&esejObj&&e("div",{style:{display:"flex",alignItems:"center",gap:6}},
          e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 6px",borderRadius:99,flexShrink:0,
            background:"var(--blue-d)",border:"1px solid rgba(75,123,255,.3)",color:"var(--blue)"}},
            "✍️ Školski esej"),
          e("span",{style:{fontSize:11,color:"var(--muted)",fontStyle:"italic"}},esejObj.naslov)
        ),
        SAZECI[year+"_"+season]&&e("div",{style:{display:"flex",alignItems:"center",gap:6}},
          e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 6px",borderRadius:99,flexShrink:0,
            background:"rgba(100,210,100,.13)",border:"1px solid rgba(100,210,100,.3)",color:"#6dca6d"}},
            "📝 Sažetak"),
          e("span",{style:{fontSize:11,color:"var(--muted)",fontStyle:"italic"}},SAZECI[year+"_"+season].tekstNaslov)
        )
      )
    );
  }

  return e("div",{className:"year-group"},
    
    e("button",{className:"year-group-header"+(open?" open":""),
      onClick:()=>{setOpen(o=>!o);if(open)setSelRazina(null);}},
      e("div",{className:"ygh-year",style:{color:imaPrivih?"var(--green)":"var(--muted)"}},year),
      e("div",{className:"ygh-info"},
        e("span",{className:"ygh-title"},"Hrvatski jezik — "+year+". godina"),
        e("span",{className:"ygh-sub"},
          imaJedinstven
            ? jedinstvenList.length+" ispit"+(jedinstvenList.length>1?"a":"")+" · Jedinstven ispit"
            : imaRazine
              ? "Viša (A) i Osnovna (B) razina · "+totalQ+" pitanja"
              : totalQ+" pitanja"
        )
      ),
      !imaPrivih&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,marginRight:8,
        background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",color:"var(--muted)"}},
        "⏳ Dolazi uskoro"),
      e("span",{className:"ygh-arrow"},"▼")
    ),

    e("div",{className:"year-group-body"+(open?" open":"")},

      imaJedinstven&&jedinstvenList
        .sort((a,b)=>["ljeto","jesen"].indexOf(a.season)-["ljeto","jesen"].indexOf(b.season))
        .map(ex=>renderSeasonRow(ex.season,null)),

      imaRazine&&!selRazina&&e("div",{style:{display:"flex",gap:10}},
        /* A card */
        e("div",{style:{flex:1,background:"rgba(233,180,70,.06)",border:"2px solid var(--gold-b)",
          borderRadius:"var(--rr)",padding:"14px 16px",cursor:"pointer",transition:"all .15s"},
          onClick:()=>setSelRazina("A")},
          e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6}},
            e("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--gold)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:13,fontWeight:700,color:"#160d00"}},"A"),
            e("div",{style:{fontWeight:700,fontSize:14,color:"var(--gold)"}},"Viša razina")
          ),
          e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:6}},
            yearExams.filter(ex=>ex.razina==="A").length+" / "+expectedSeasons.length+" ispita dostupno"
          ),
          expectedSeasons.map(season=>{
            const esejObj=ESEJI[year+"_"+season+"_esej_A"];
            if(!esejObj) return null;
            return e("div",{key:season,style:{display:"flex",alignItems:"center",gap:5,marginTop:3}},
              e("span",{style:{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:99,
                background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)",flexShrink:0}},
                season==="ljeto"?"☀️":season==="zima"?"❄️":"🍂"),
              e("span",{style:{fontSize:10,color:"var(--muted)",fontStyle:"italic",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},
                esejObj.naslov)
            );
          })
        ),
        /* B card */
        e("div",{style:{flex:1,background:"rgba(75,123,255,.06)",border:"2px solid rgba(75,123,255,.25)",
          borderRadius:"var(--rr)",padding:"14px 16px",cursor:"pointer",transition:"all .15s"},
          onClick:()=>setSelRazina("B")},
          e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6}},
            e("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--blue)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:13,fontWeight:700,color:"#fff"}},"B"),
            e("div",{style:{fontWeight:700,fontSize:14,color:"var(--blue)"}},"Osnovna razina")
          ),
          e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:6}},
            yearExams.filter(ex=>ex.razina==="B").length+" / "+expectedSeasons.length+" ispita dostupno"
          ),
          expectedSeasons.map(season=>{
            const esejObj=ESEJI[year+"_"+season+"_esej_B"];
            if(!esejObj) return null;
            return e("div",{key:season,style:{display:"flex",alignItems:"center",gap:5,marginTop:3}},
              e("span",{style:{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:99,
                background:"var(--blue-d)",border:"1px solid rgba(75,123,255,.3)",color:"var(--blue)",flexShrink:0}},
                season==="ljeto"?"☀️":season==="zima"?"❄️":"🍂"),
              e("span",{style:{fontSize:10,color:"var(--muted)",fontStyle:"italic",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},
                esejObj.naslov)
            );
          })
        )
      ),

      imaRazine&&selRazina&&e("div",null,
        e("button",{style:{fontSize:12,background:"var(--s2)",border:"1px solid var(--bdr)",
          borderRadius:"var(--r)",color:"var(--text)",cursor:"pointer",
          padding:"6px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:6},
          onClick:()=>setSelRazina(null)},
          "←",
          e("span",null,"Natrag na odabir razine")),
        e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10}},
          e("div",{style:{width:22,height:22,borderRadius:"50%",
            background:selRazina==="A"?"var(--gold)":"var(--blue)",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:11,fontWeight:700,color:selRazina==="A"?"#160d00":"#fff"}},
            selRazina),
          e("span",{style:{fontSize:13,fontWeight:700,
            color:selRazina==="A"?"var(--gold)":"var(--blue)"}},
            selRazina==="A"?"Viša razina":"Osnovna razina")
        ),
        expectedSeasons.map(season=>renderSeasonRow(season,selRazina))
      )
    )
  );
}

function Home({onExam,onPractice,onPracticeList,onFilter,onErrors,onBookmarks,onStats,onBrowse,onEsej,onSazetak,onLektire,onPojmovnik,onImporter,onDDay,onDaily,onAdaptive,onGameMode,onWrapped,onAIPlan,customQs,onClearCustom,onShowDisclaimer,userData,toggles,isPaid}){
  const examList=Object.values(EXAMS).filter(ex=>Array.isArray(ex.qs));
  const[bookmarkCount]=useState(()=>{try{return Object.keys(JSON.parse(localStorage.getItem("discere_hrv_bookmarks")||"{}")).length;}catch(err){return 0;}});
  const[showTopics,setShowTopics]=useState(false);
  return e(Fragment,null,
    e("div",{className:"nav"},
      e("span",{className:"ntitle",style:{fontFamily:"var(--fh)"}},"Discere"),
      e("span",{style:{color:"var(--muted)",fontSize:13,margin:"0 4px"}},"›"),
      e("span",{className:"ntitle"},"Hrvatski jezik"),
      e("span",{className:"nbadge"},"Simulator mature"),
      e("span",{className:"nsp"}),
      toggles
    ),
    e("div",{className:"home screen-enter"},
      e("div",{className:"hero"},
        e("div",{className:"hero-icon"},"🇭🇷"),
        e("h1",null,"Hrvatski jezik ",e("br"),e("em",null,"Simulator mature")),
        e("p",null,"Vježbaj stvarne ispite državne mature iz Hrvatskog jezika. Gramatika, književnost, sažetak i interpretativni esej — s AI ocjenjivanjem i objašnjenjima.")
      ),
      userData&&userData.xp>=0&&e("div",{style:{maxWidth:480,margin:"-16px auto 36px",padding:"0 4px"}},
        e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}},
          e("div",{className:"level-badge"},"⭐ "+(LEVEL_NAMES[getLevel(userData.xp||0)]||"Početnik")),
          userData.streak>0&&e("div",{className:"streak-badge"},e("span",null,"🔥"),userData.streak+" "+(userData.streak===1?"dan":"dana")+" zaredom"),
          e("div",{style:{fontSize:12,color:"var(--muted)"}},(userData.xp||0)+" XP")
        ),
        e("div",{className:"xp-bar-wrap"},e("div",{className:"xp-bar",style:{width:xpProgress(userData.xp||0)+"%"}})),
        e("div",{className:"xp-label"},e("span",null,"Razina "+(getLevel(userData.xp||0)+1)),xpToNext(userData.xp||0)>0&&e("span",null,xpToNext(userData.xp||0)+" XP do sl. razine"))
      ),

      e("div",{style:{maxWidth:480,margin:"-16px auto 20px",padding:"0 4px"}},
        e("div",{style:{position:"relative"}},
          e("input",{
            type:"text",
            placeholder:"🔍  Pretraži 4800+ pitanja...",
            onFocus:()=>onBrowse(""),
            readOnly:true,
            style:{
              width:"100%",background:"var(--s1)",
              border:"1px solid var(--bdr2)",borderRadius:"var(--r)",
              padding:"10px 16px",color:"var(--muted)",
              fontSize:14,fontFamily:"var(--fb)",cursor:"pointer",
              boxShadow:"var(--shadow-sm)",transition:"all .15s"
            },
            onMouseEnter:e2=>{e2.target.style.borderColor="var(--blue)";e2.target.style.boxShadow="0 0 0 3px rgba(45,84,196,.1)"},
            onMouseLeave:e2=>{e2.target.style.borderColor="var(--bdr2)";e2.target.style.boxShadow="var(--shadow-sm)"}
          })
        )
      ),

      (()=>{
        const cilj=userData?.dnevniCilj||20;
        const today=new Date().toLocaleDateString("hr");
        const history=userData?.history||[];
        const todayExams=history.filter(h=>h.date===today);
        function countQ(h){return h.numQ||h.correct+h.wrong||0;}
        const todayQ=todayExams.reduce((s,h)=>s+countQ(h),0);
        const pct=Math.min(100,Math.round(todayQ/cilj*100));
        const done=todayQ>=cilj;
        return e("div",{style:{maxWidth:480,margin:"-8px auto 28px",padding:"0 4px"}},
          e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            e("div",{style:{fontSize:13,fontWeight:600,color:done?"var(--green)":"var(--text)"}},
              done?"✅ Dnevni cilj ispunjen!":"🎯 Dnevni cilj"),
            e("div",{style:{fontSize:13,fontWeight:700,color:done?"var(--green)":"var(--blue)"}},
              todayQ+"/"+cilj+" pitanja")
          ),
          e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{
              height:"100%",
              width:pct+"%",
              background:done?"var(--green)":"linear-gradient(90deg,var(--blue),#7b9fff)",
              borderRadius:99,
              transition:"width .6s cubic-bezier(.4,0,.2,1)"
            }})
          ),
          !done&&todayQ>0&&e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:4}},
            "Još "+(cilj-todayQ)+" pitanja do cilja"
          )
        );
      })(),
      e("div",{className:"home-guided"},

        /* ── Recommended exam card ── */
        (()=>{
          const history=userData?.history||[];
          const usedKeys=new Set(history.map(h=>h.examKey));
          const examArr=Object.values(EXAMS).filter(ex=>ex.pravi&&Array.isArray(ex.qs)&&ex.qs.length>0);
          const unused=examArr.filter(ex=>!usedKeys.has(ex.key));
          // Smart: pick exam covering user's weakest topic
          const topicStats={};
          history.forEach(h=>{
            if(!h.topic_breakdown) return;
            Object.entries(h.topic_breakdown).forEach(([t,d])=>{
              if(!topicStats[t]) topicStats[t]={c:0,n:0};
              topicStats[t].c+=d.correct||0; topicStats[t].n+=d.total||0;
            });
          });
          const slabaTema=Object.entries(topicStats)
            .filter(([,d])=>d.n>=3)
            .sort(([,a],[,b])=>(a.c/a.n)-(b.c/b.n))[0]?.[0];
          let rec=null;
          if(slabaTema&&unused.length>0){
            rec=unused
              .map(ex=>({ex,cnt:ex.qs.filter(q=>q.topic===slabaTema).length}))
              .sort((a,b)=>b.cnt-a.cnt)
              .find(({cnt})=>cnt>2)?.ex;
          }
          if(!rec) rec=(unused.length>0?unused:examArr).sort((a,b)=>b.year-a.year||(a.season==="ljeto"?-1:1))[0];
          if(!rec) return null;
          const isNew=!usedKeys.has(rec.key);
          const rokIco=rec.season==="ljeto"?"☀️":rec.season==="zima"?"❄️":"🍂";
          const rokNaziv=(rec.season==="ljeto"?"Ljetni":rec.season==="zima"?"Zimski":"Jesenski")+" rok "+rec.year+(rec.razina?" · Razina "+rec.razina:"");
          const hint=slabaTema&&rec.qs.filter(q=>q.topic===slabaTema).length>2
            ?"Sadrži "+rec.qs.filter(q=>q.topic===slabaTema).length+" pit. iz: "+(TOPIC_LABELS[slabaTema]||slabaTema)
            :isNew?rec.qs.length+" pitanja · Još nisi rješavao/la"
                  :"Ponovi za bolji rezultat";
          return e("div",{className:"hg-rec"},
            e("div",{className:"hg-rec-label"},isNew?"✨ Preporučeno za tebe":"↩ Nastavi učenje"),
            e("div",{className:"hg-rec-rok"},rokIco," ",rokNaziv),
            e("div",{className:"hg-rec-hint"},hint),
            e("button",{className:"btn btn-p hg-rec-btn",onClick:()=>onExam(rec.key)},"Pokreni ispit →")
          );
        })(),

        /* ── Primary action — full-width card ── */
        e("div",{className:"hg-label"},"Vježbanje"),
        e("div",{...accBtn,className:"hg-action-primary",onClick:onPracticeList},
          e("span",{className:"hg-act-ico"},"🎯"),
          e("div",{className:"hg-act-body"},
            e("div",{className:"hg-act-title"},"Vježbanje"),
            e("div",{className:"hg-act-sub"},"Odmah vidiš AI objašnjenja")
          ),
          e("span",{className:"hg-act-cta"},"Počni →")
        ),

        /* ── Secondary actions — 2-col grid ── */
        e("div",{className:"hg-actions"},
          onGameMode&&e("div",{...accBtn,className:"hg-action",onClick:onGameMode},
            e("span",{className:"hg-act-ico"},"🎮"),
            e("div",{className:"hg-act-body"},
              e("div",{className:"hg-act-title"},"Game Mode"),
              e("div",{className:"hg-act-sub"},"10 pitanja · oko 5 minuta")
            )
          ),
          e("div",{...accBtn,className:"hg-action",onClick:onFilter},
            e("span",{className:"hg-act-ico"},"🔍"),
            e("div",{className:"hg-act-body"},
              e("div",{className:"hg-act-title"},"Po temi"),
              e("div",{className:"hg-act-sub"},"Filtriraj po kategoriji")
            )
          ),
          e("div",{...accBtn,className:"hg-action",onClick:onErrors},
            e("span",{className:"hg-act-ico"},"🔁"),
            e("div",{className:"hg-act-body"},
              e("div",{className:"hg-act-title"},"Greške"),
              e("div",{className:"hg-act-sub"},
                userData&&Object.keys(userData.errorTracker||{}).length>0
                  ?Object.keys(userData.errorTracker||{}).length+" pitanja čeka"
                  :"Ponavljaj greške")
            )
          ),
          onAdaptive&&e("div",{...accBtn,className:"hg-action",onClick:onAdaptive},
            e("span",{className:"hg-act-ico"},"🎯"),
            e("div",{className:"hg-act-body"},
              e("div",{className:"hg-act-title"},"Adaptivni trening"),
              e("div",{className:"hg-act-sub"},"Fokus na slabe teme")
            )
          ),
          onDaily&&e("div",{...accBtn,className:"hg-action",onClick:onDaily},
            e("span",{className:"hg-act-ico"},"📅"),
            e("div",{className:"hg-act-body"},
              e("div",{className:"hg-act-title"},"Dnevni izazov"),
              e("div",{className:"hg-act-sub"},"Brza dnevna sesija")
            )
          )
        ),

        /* ── 2-column secondary cards ── */
        e("div",{className:"hg-grid"},
          e("div",{...accBtn,className:"hg-grid-card",
            onClick:()=>document.getElementById("exams")?.scrollIntoView({behavior:"smooth"})},
            e("div",{className:"hg-gc-top"},
              e("span",{className:"hg-gc-ico"},"📄"),
              e("span",{className:"hg-gc-cnt"},examList.length+" dostupna")
            ),
            e("div",{className:"hg-gc-title"},"Originalni ispiti"),
            e("div",{className:"hg-gc-sub"},"Pravi ispiti s mjeračem vremena")
          ),
          e("div",{...accBtn,className:"hg-grid-card",onClick:onStats},
            e("div",{className:"hg-gc-top"},
              e("span",{className:"hg-gc-ico"},"📊"),
              userData&&(userData.history||[]).length>0&&
                e("span",{className:"hg-gc-cnt"},(userData.history||[]).length+" ispita")
            ),
            e("div",{className:"hg-gc-title"},"Statistike"),
            e("div",{className:"hg-gc-sub"},"Napredak, XP i streak")
          ),
          onDDay&&e("div",{...accBtn,className:"hg-grid-card",onClick:onDDay},
            e("div",{className:"hg-gc-top"},
              e("span",{className:"hg-gc-ico"},"🎓")
            ),
            e("div",{className:"hg-gc-title"},"Probna matura"),
            e("div",{className:"hg-gc-sub"},"Pun ispit + odbrojavanje")
          ),
          onWrapped&&e("div",{...accBtn,className:"hg-grid-card",onClick:onWrapped},
            e("div",{className:"hg-gc-top"},
              e("span",{className:"hg-gc-ico"},"📸")
            ),
            e("div",{className:"hg-gc-title"},"Podijeli napredak"),
            e("div",{className:"hg-gc-sub"},"Slika za društvene mreže")
          ),
          onAIPlan&&e("div",{...accBtn,className:"hg-grid-card",onClick:onAIPlan},
            e("div",{className:"hg-gc-top"},
              e("span",{className:"hg-gc-ico"},"🗓️")
            ),
            e("div",{className:"hg-gc-title"},"AI plan učenja"),
            e("div",{className:"hg-gc-sub"},"Personalizirano, do mature")
          )
        ),

        /* ── Topic Mastery Path ── */
        (()=>{
          const history=userData?.history||[];
          if(history.length<2) return null;
          const mastery=calcTopicMastery(history);
          const topics=Object.entries(mastery).sort((a,b)=>a[1].accuracy-b[1].accuracy);
          if(topics.length===0) return null;
          return e("div",{className:"hg-mastery"},
            e("div",{className:"hg-label",style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",userSelect:"none"},onClick:()=>setShowTopics(t=>!t)},
              "Napredak po temama",
              e("span",{style:{fontSize:12,transition:"transform .2s",transform:showTopics?"rotate(180deg)":"rotate(0deg)"}},"▼")
            ),
            showTopics&&e("div",{className:"hg-mastery-grid"},
              topics.map(([topic,data])=>
                e("div",{key:topic,className:"hg-mastery-item hg-ml-"+data.level},
                  e("div",{className:"hg-mastery-bar"},
                    e("div",{className:"hg-mastery-fill",style:{width:Math.max(4,data.accuracy)+"%"}})
                  ),
                  e("div",{className:"hg-mastery-info"},
                    e("span",{className:"hg-mastery-name"},TOPIC_LABELS[topic]||topic),
                    e("span",{className:"hg-mastery-pct"},data.accuracy+"%"),
                    data.trend!==0&&e("span",{className:"hg-mastery-trend "+(data.trend>0?"up":"down")},
                      data.trend>0?"↑":"↓",Math.abs(data.trend)+"%"
                    )
                  ),
                  e("div",{className:"hg-mastery-level"},data.icon," ",data.label)
                )
              )
            )
          );
        })(),

        /* ── Pre-exam Warmup CTA ── */
        (()=>{
          const dueCount=getDueReviews(userData?.errorTracker).length;
          const history=userData?.history||[];
          if(history.length<1&&dueCount===0) return null;
          return e("div",{...accBtn,className:"hg-warmup",onClick:onErrors},
            e("span",{className:"hg-warmup-ico"},"🔥"),
            e("div",{className:"hg-warmup-body"},
              e("div",{className:"hg-warmup-title"},"Zagrijavanje"),
              e("div",{className:"hg-warmup-sub"},
                dueCount>0
                  ?dueCount+" pitanja za ponavljanje danas"
                  :"Brzo ponovi 5 pitanja iz slabih tema"
              )
            ),
            e("span",{className:"hg-warmup-cta"},"Kreni →")
          );
        })(),

        /* ── Resource & tool chips ── */
        e("div",{className:"hg-label"},"Resursi i alati"),
        e("div",{className:"hg-chips"},
          e("button",{className:"hg-chip",onClick:onLektire},"📚 Lektire"),
          e("button",{className:"hg-chip",onClick:onPojmovnik},"📖 Pojmovnik"),
          e("button",{className:"hg-chip",onClick:onEsej},
            "✍️ Esej ",e("span",{className:"hg-chip-pro"},"PRO")
          ),
          e("button",{className:"hg-chip",onClick:onSazetak},
            "📝 Sažetak ",e("span",{className:"hg-chip-pro"},"PRO")
          ),
          e("button",{className:"hg-chip",onClick:onBrowse},"🔎 Pregled ispita"),
          e("button",{className:"hg-chip",onClick:onBookmarks},
            "🔖 Bookmarks",bookmarkCount>0&&e("span",{className:"hg-chip-cnt"},bookmarkCount)
          ),
          e("button",{className:"hg-chip",onClick:onImporter},
            "📥 Vlastita",customQs?.length>0&&e("span",{className:"hg-chip-cnt"},customQs.length)
          )
        ),

      ),
      
      (()=>{
        const history=userData?.history||[];
        const topicStats={};
        history.forEach(h=>{
          if(!h.topic_breakdown) return;
          Object.entries(h.topic_breakdown).forEach(([topic,data])=>{
            if(!topicStats[topic]) topicStats[topic]={correct:0,total:0};
            topicStats[topic].correct+=data.correct||0;
            topicStats[topic].total+=data.total||0;
          });
        });
        // Dodaj i errorTracker podatke
        Object.values(userData?.errorTracker||{}).forEach(err=>{
          if(!err.topic) return;
          if(!topicStats[err.topic]) topicStats[err.topic]={correct:0,total:0,errors:0};
          topicStats[err.topic].errors=(topicStats[err.topic].errors||0)+err.count;
        });
        const topics=Object.entries(topicStats)
          .filter(([,d])=>d.total>0)
          .map(([k,d])=>({k,l:TOPIC_LABELS[k]||k,pct:Math.round(d.correct/d.total*100),total:d.total,errors:d.errors||0}))
          .sort((a,b)=>a.pct-b.pct);
        if(topics.length===0) return null;
        const barColor=pct=>pct>=80?"var(--green)":pct>=60?"var(--gold)":"var(--red)";
        return e("div",{style:{marginBottom:28}},
          e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,cursor:"pointer",userSelect:"none"},onClick:()=>setShowTopics(t=>!t)},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)",display:"flex",alignItems:"center",gap:6}},
              "Napredak po temama",
              e("span",{style:{fontSize:10,transition:"transform .2s",display:"inline-block",transform:showTopics?"rotate(180deg)":"rotate(0deg)"}},"▼")
            ),
            showTopics&&e("button",{onClick:ev=>{ev.stopPropagation();onStats();},style:{background:"none",border:"none",color:"var(--blue)",fontSize:12,fontWeight:600,cursor:"pointer",padding:0,fontFamily:"var(--fb)"}},"Detalji →")
          ),
          showTopics&&e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:8}},
            topics.slice(0,6).map(({k,l,pct,total,errors})=>
              e("div",{key:k,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 12px"}},
                e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
                  e("div",{style:{fontSize:12,fontWeight:600,color:"var(--text)",lineHeight:1.2}},l),
                  e("div",{style:{fontSize:12,fontWeight:700,color:barColor(pct)}},pct+"%")
                ),
                e("div",{style:{height:4,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:4}},
                  e("div",{style:{height:"100%",width:pct+"%",background:barColor(pct),borderRadius:99,transition:"width .6s ease"}})
                ),
                e("div",{style:{fontSize:10,color:"var(--muted)"}},
                  total+" pitanja"+(errors>0?" · "+errors+"× greška":""))
              )
            )
          )
        );
      })(),

      (()=>{
        const history=userData?.history||[];
        const rijeseni=new Set(history.map(h=>h.examKey));
        const examArr=Object.values(EXAMS).filter(ex=>ex.pravi&&Array.isArray(ex.qs)&&ex.qs.length>0);
        // Neriješeni ispiti
        const nerijeseni=examArr.filter(ex=>!rijeseni.has(ex.key));
        if(nerijeseni.length===0) return null;

        // Pronađi najslabiju temu
        const topicStats={};
        history.forEach(h=>{
          if(!h.topic_breakdown) return;
          Object.entries(h.topic_breakdown).forEach(([t,d])=>{
            if(!topicStats[t]) topicStats[t]={c:0,n:0};
            topicStats[t].c+=d.correct||0; topicStats[t].n+=d.total||0;
          });
        });
        const slabaTema=Object.entries(topicStats)
          .filter(([,d])=>d.n>=3)
          .sort(([,a],[,b])=>(a.c/a.n)-(b.c/b.n))[0]?.[0];

        // Odaberi preporučeni ispit
        let rec=null;
        if(slabaTema){
          // Ispit s najviše pitanja iz slabe teme
          rec=nerijeseni
            .map(ex=>({ex,cnt:ex.qs.filter(q=>q.topic===slabaTema).length}))
            .sort((a,b)=>b.cnt-a.cnt)
            .find(({cnt})=>cnt>2)?.ex;
        }
        if(!rec){
          // Najnoviji neriješeni
          rec=[...nerijeseni].sort((a,b)=>b.year-a.year||(a.season==="ljeto"?-1:1))[0];
        }
        if(!rec) return null;

        const rok=(rec.season==="ljeto"?"☀️ Ljetni":rec.season==="zima"?"❄️ Zimski":"🍂 Jesenski")+" rok "+rec.year+".";
        const razlog=slabaTema&&rec.qs.filter(q=>q.topic===slabaTema).length>2
          ? "Sadrži "+rec.qs.filter(q=>q.topic===slabaTema).length+" pitanja iz teme gdje si najslabiji/a: "+TOPIC_LABELS[slabaTema]
          : "Najnoviji ispit koji još nisi rješavao/la";

        return e("div",{style:{
          background:"linear-gradient(135deg,rgba(45,84,196,.08),rgba(45,84,196,.03))",
          border:"1px solid rgba(45,84,196,.2)",borderRadius:"var(--rr)",
          padding:"16px 20px",marginBottom:20,
          display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"
        }},
          e("div",{style:{flex:1,minWidth:200}},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".1em",
              textTransform:"uppercase",color:"var(--blue)",marginBottom:4}},"✨ Preporučeno za tebe"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:17,marginBottom:3}},rok),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},razlog),
            rec.razina&&e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 7px",
              borderRadius:99,background:"var(--blue-d)",color:"var(--blue)",
              border:"1px solid rgba(45,84,196,.3)",display:"inline-block",marginTop:4}},
              "Razina "+rec.razina)
          ),
          e("button",{
            className:"btn btn-p",
            style:{flexShrink:0,padding:"10px 20px",fontSize:14},
            onClick:()=>onExam(rec.key)
          },"Pokreni →")
        );
      })(),

      e("div",{id:"exams"},
        e("div",{className:"exhdr",style:{padding:"14px 4px",fontSize:11}},"Dostupni ispiti"),
        (()=>{
          const years=[...new Set(examList.map(ex=>ex.year))].sort((a,b)=>b-a);
          return years.map(year=>e(YearGroup,{key:year,year,examList,onExam,isPaid}));
        })()
      ),

      userData&&typeof userData==="object"&&(userData.history||[]).length>0&&e(AnalyticsPanel,{userData,defaultTab:"danas"}),
      e("div",{className:"disclaimer-banner"},
        "📋 ",e("strong",null,"Napomena: "),
        "Ispitna pitanja vlasništvo su ",
        e("a",{href:"https://www.ncvvo.hr",target:"_blank",rel:"noopener"},"NCVVO-a"),
        ". Objašnjenja, AI ocjenjivanje i svi analitički alati autorsko su djelo Discerea. ",
        e("button",{onClick:()=>onShowDisclaimer&&onShowDisclaimer(),style:{background:"none",border:"none",color:"var(--blue)",cursor:"pointer",fontSize:12,padding:0,textDecoration:"underline"}},"Više o aplikaciji")
      ),
      e("div",{className:"disclaimer-footer"},
        "© "+new Date().getFullYear()+" Discere · ",
        "Ispitna pitanja: © NCVVO · Sva prava pridržana · ",
        e("button",{onClick:()=>onShowDisclaimer&&onShowDisclaimer(),style:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:11,padding:0,textDecoration:"underline"}},"Pravna napomena")
      )
    )
  );
}

function UputeModal({onClose}){
  const[openIdx,setOpenIdx]=useState(null);
  function tog(i){setOpenIdx(o=>o===i?null:i);}

  const secs=[
    {icon:"📋",title:"Što je Discere Hrvatski?",items:[
      {tip:"Discere Hrvatski je simulator državne mature iz Hrvatskog jezika s pravim ispitnim materijalima NCVVO-a od 2010. do 2025. godine."},
      {tip:"Sadrži 64 ispita, 4 800+ pitanja s AI objašnjenjima, školske eseje s AI ocjenjivanjem i zadatke pisanja sažetka za 2023–2025."},
      {tip:"Sva pitanja, odgovori i eseji preuzeti su iz originalnih NCVVO ispita — isti materijal koji se pojavljuje na pravoj državnoj maturi."},
    ]},
    {icon:"🎮",title:"Načini vježbanja",items:[
      {label:"Ispitni mod",tip:"Timer 100 min (stariji ispiti 72 min). Rješavaš bez povratnih informacija — baš kao na pravoj maturi. Na kraju vidiš detaljnu statistiku i pregled odgovora."},
      {label:"Vježbanje",tip:"Bez timera. Nakon svakog odgovora odmah vidiš je li točan i možeš otvoriti AI objašnjenje. Idealno za učenje gradiva."},
      {label:"Vježbaj po filteru",tip:"Odaberi temu, vrstu pitanja, godinu i osobnu težinu. Pitanja iz svih 64 ispita se miješaju i prilagođavaju tvojim slabostima."},
      {label:"Školski esej",tip:"Piši esej prema smjernicama NCVVO-a (160 min). AI profesor ocjenjuje sadržaj, kompoziciju, stil i jezik te daje ocjenu 1–5 s detaljnim komentarom."},
      {label:"Sažetak",tip:"Dostupno za ispite 2023–2025. Sažmi zadani tekst u 200–250 riječi. AI ocjenjuje sadržaj, jezik i kompoziciju (0–10 bodova)."},
    ]},
    {icon:"📊",title:"Analitika i praćenje napretka",items:[
      {label:"XP i razine",tip:"Za svako riješeno pitanje i ispit dobiješ XP bodove. Skupljaj XP i napreduj kroz razine — od Početnika do Majstora."},
      {label:"Streak",tip:"Rješavaj ispite svaki dan da zadržiš streak. Streak se resetira ako preskočiš dan bez vježbanja."},
      {label:"Statistike po temama",tip:"U sekciji Statistike vidjet ćeš koliko % točnosti imaš po svakoj temi — gramatika, leksik, stilistika, književna analiza..."},
      {label:"Greške",tip:"Sekcija Greške prikazuje pitanja koja si najčešće krivo riješio. Vježbaj ih zasebno dok ih potpuno ne savladaš."},
      {label:"Osobna težina",tip:"Svako pitanje automatski dobiva kategoriju lako/srednje/teško na osnovu tvoje povijesti. Filtriranje po težini u filteru radi samo za tebe."},
    ]},
    {icon:"🎯",title:"Preporučeni redoslijed pripreme",items:[
      {label:"1. Upoznaj format",tip:"Počni s najnovijim ispitima (2024–2025) u vježbanje modu da vidiš kakva pitanja i tekstove možeš očekivati."},
      {label:"2. Prolazi kronološki",tip:"Rješavaj ispite od 2020. prema natrag. Stariji ispiti imaju nešto drugačiji format i pitanja — dobro je poznavati razlike."},
      {label:"3. Fokusiraj se na greške",tip:"Nakon svakog ispita klikni 'Vježbaj greške'. Pitanja koja griješiš više puta su tvoja slaba točka — vrati se na njih."},
      {label:"4. Filtriraj po temi",tip:"Kad identificiraš slabu temu (npr. morfologija), idi na Vježbaj po filteru i odaberi samo tu temu kroz sve dostupne godine."},
      {label:"5. Piši eseje i sažetke",tip:"Dva tjedna prije mature počni vježbati eseje i sažetke. AI feedback pokazuje konkretno što trebaš popraviti u stilu i argumentaciji."},
    ]},
    {icon:"⌨️",title:"Tipkovnički prečaci",items:[
      {label:"A B C D",tip:"Odaberi odgovor na pitanje višestrukog izbora."},
      {label:"Enter ili →",tip:"Potvrdi odgovor i prijeđi na sljedeće pitanje."},
      {label:"←",tip:"Vrati se na prethodno pitanje."},
      {label:"Space",tip:"U vježbanju — prikaži točan odgovor i AI objašnjenje za trenutno pitanje."},
      {label:"B",tip:"Spremi ili ukloni trenutno pitanje iz Spremljenih pitanja (bookmark)."},
      {label:"F",tip:"Označi pitanje zastavicom za kasniji pregled unutar istog ispita."},
    ]},
  ];

  return e("div",{className:"hrv-sim"},
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onClose},"← Natrag"),
      e("span",{className:"ntitle"},"📖 Upute za korištenje")
    ),
    e("div",{style:{maxWidth:680,margin:"0 auto",padding:"24px 16px 60px"}},
      secs.map(({icon,title,items},si)=>
        e("div",{key:si,style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",
          borderRadius:14,marginBottom:8,overflow:"hidden"
        }},
          e("button",{
            onClick:()=>tog(si),
            style:{
              width:"100%",display:"flex",alignItems:"center",gap:14,
              padding:"18px 20px",background:"none",border:"none",
              cursor:"pointer",textAlign:"left",color:"var(--text)"
            }
          },
            e("span",{style:{fontSize:22,minWidth:30,display:"flex",alignItems:"center",justifyContent:"center"}},icon),
            e("span",{style:{flex:1,fontWeight:700,fontSize:15}},title),
            e("span",{style:{
              fontSize:11,color:"var(--muted)",
              display:"inline-block",
              transition:"transform .25s",
              transform:openIdx===si?"rotate(180deg)":"rotate(0deg)"
            }},"▼")
          ),
          openIdx===si&&e("div",null,
            items.map(({label,tip},ii)=>
              e("div",{key:ii,style:{
                display:"flex",gap:14,
                padding:"12px 20px",
                borderTop:"1px solid var(--bdr)",
                background:"var(--s2)"
              }},
                label
                  ? e("div",{style:{minWidth:130,fontSize:13,fontWeight:600,color:"var(--gold)",flexShrink:0,paddingTop:1}},label)
                  : e("div",{style:{minWidth:8,flexShrink:0}}),
                e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.65}},tip)
              )
            )
          )
        )
      )
    )
  );
}


export { YearGroup, Home, UputeModal };
