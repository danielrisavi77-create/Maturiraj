// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Izbor nacina rada nad ispitom i vodic kroz simulator. */
import React from 'react';
import { SUBJECT, TOPIC_LABELS } from '../core/state';
import { EXAMS, examQCount, examTitle } from '../core/exams';
const{createElement:e,Fragment}=React;
function ModeSelect({examKey,onExamMode,onPractice,onPracticeTimer,onVirtual,onBack}){
  const exam=EXAMS[examKey];
  if(!exam) return null;
  const isA=exam.razina==="A";
  const seasonIcon=exam.season==="ljeto"?"☀️":exam.season==="jesen"?"🍂":"❄️";

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},examTitle(exam)),
      e("span",{className:"nsp"})
    ),
    e("div",{className:"mode-select-wrap"},

      // ── HERO kartice ispita ──
      e("div",{className:"ms-hero"},
        e("div",{className:"ms-razina"},
          isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)"
        ),
        e("div",{className:"ms-title"},
          exam.season==="session"?exam.label:[seasonIcon," ",exam.year,".  -  ",exam.label]
        ),
        e("div",{className:"ms-meta"},
          examQCount(exam)+" zadataka · "+Math.floor(exam.duration/60)+" minuta"
        )
      ),
      (function(){
        var labs={};(exam.qs||[]).forEach(function(q){if(!q.topic)return;var l=TOPIC_LABELS[q.topic]||q.topic;labs[l]=(labs[l]||0)+1;});
        var arr=Object.keys(labs).sort(function(a,b){return labs[b]-labs[a];});
        if(!arr.length)return null;
        var mc=(exam.qs||[]).filter(function(q){return q.type==="mc";}).length;
        var open=(exam.qs||[]).length-mc;
        return e("div",{style:{marginBottom:18,padding:"15px 16px",borderRadius:"var(--rr)",background:"var(--s2)",border:"1px solid var(--bdr)"}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11,display:"flex",justifyContent:"space-between",alignItems:"center"}},
            e("span",null,"\uD83D\uDCDA Što te čeka · "+arr.length+" tema"),
            e("span",{style:{fontWeight:600,textTransform:"none",letterSpacing:0}},mc+" × izbor · "+open+" × otvoreno")),
          e("div",{style:{display:"flex",flexWrap:"wrap",gap:7}},arr.map(function(l){return e("span",{key:l,style:{fontSize:11.5,fontWeight:600,padding:"5px 10px",borderRadius:99,background:"var(--s1)",border:"1px solid var(--bdr)",color:"var(--text)"}},l+" · "+labs[l]);})));
      })(),

      // ── Odaberi način ──
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Odaberi način vježbanja"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),

      e("div",{className:"ms-grid"},

        // Simulacija ispita
        e("div",{className:"mode-card sim",onClick:()=>onExamMode(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"⏱️"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--red)"}},"Ispit · "+Math.floor(exam.duration/60)+" min"),
              e("div",{className:"mc-title"},"Simulacija ispita"),
              e("div",{className:"mc-desc"},
                "Vremensko ograničenje, nema provjere između zadataka. Identično pravoj maturi.")
            )
          ),
          e("div",{className:"mc-tag",
            style:{background:"var(--red-d)",border:"1px solid rgba(248,113,113,.3)",color:"var(--red)"}},
            "MATURA MODE")
        ),

        // Vježbanje
        e("div",{className:"mode-card vjezba",onClick:()=>onPractice(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"📚"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--blue)"}},"Vježbanje · bez limita"),
              e("div",{className:"mc-title"},"Vježbanje"),
              e("div",{className:"mc-desc"},
                "Odmah vidi je li odgovor točan, provjeri rješenje korak po korak i zatraži AI objašnjenje.")
            )
          )
        ),

        // Vježba s timerom
        e("div",{className:"mode-card timed",onClick:()=>onPracticeTimer(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"⚡"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--gold)"}},"Timed vježba · s pritiskom"),
              e("div",{className:"mc-title"},"Vježba s timerom"),
              e("div",{className:"mc-desc"},
                "Vremenski pritisak uz trenutnu povratnu informaciju. Dobra priprema za realne uvjete.")
            )
          )
        ),

        // Separator
        e("div",{className:"ms-sep"},
          e("span",null,"ili probaj nešto novo")
        ),

        // Virtualni ispit
        e("div",{className:"mode-card virtual",onClick:()=>onVirtual&&onVirtual(exam.razina)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"🎲"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"#b97cf3"}},"Generiran ispit · nasumično"),
              e("div",{className:"mc-title"},"Virtualni ispit"),
              e("div",{className:"mc-desc"},
                "~36 nasumičnih zadataka iz svih ispita iste razine  -  nikad isti dvaput.")
            )
          )
        )
      )
    )
  );
}
function GuideScreen({onBack}){
  const totalExams=Object.keys(EXAMS).length;
  const totalQs=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.length,0);
  const[open,setOpen]=React.useState("modovi"); // otvoreno defaultno

  const sections=[
    {
      id:"sto",icon:"📚",title:SUBJECT.onboardingTitle,
      content:e("div",null,
        e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},
          "Simulator državne mature iz matematike - osnovna (B) i viša (A) razina. Sva originalna pitanja NCVVO-a s korak-po-korak rješenjima i AI objašnjenjima."),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
          [{ico:"🗂️",label:totalExams+" ispita",sub:"B i A razina, 2010-2025"},
           {ico:"❓",label:totalQs+" zadataka",sub:"MC, numerički, kratki odg."},
           {ico:"📐",label:"Korak-po-korak",sub:"Rješenja svih zadataka"},
           {ico:"🤖",label:"AI objašnjenja",sub:"Za svaki zadatak"}
          ].map((item,i)=>e("div",{key:i,style:{
            background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:12,padding:"14px 14px"
          }},
            e("div",{style:{fontSize:22,marginBottom:6}},item.ico),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:2}},item.label),
            e("div",{style:{fontSize:11,color:"var(--muted)"}},item.sub)
          ))
        )
      )
    },
    {
      id:"modovi",icon:"🎮",title:"Načini vježbanja",
      content:e("div",{style:{display:"flex",flexDirection:"column",gap:0}},
        [{ico:"🎓",name:"Simulacija ispita",col:"var(--red)",desc:"Timer 150/180 min, bez feedbacka, samo skica i osnovni kalkulator — identično pravoj maturi."},
         {ico:"📚",name:"Vježbanje",col:"var(--blue)",desc:"Instant feedback, korak-po-korak rješenja, AI objašnjenja."},
         {ico:"⚡",name:"Vježbanje s timerom",col:"var(--gold)",desc:"Feedback uz vremenski pritisak - dobra priprema za realne uvjete."},
         {ico:"🎲",name:"Virtualni ispit",col:"#b97cf3",desc:"~36 nasumičnih zadataka iz svih ispita iste razine. Nikad isti dvaput."},
         {ico:"🎯",name:"Vježbaj po temi",col:"var(--teal)",desc:"Filtriraj zadatke po temi, vrsti, godini i razini."},
         {ico:"🔁",name:"Pametno ponavljanje",col:"#b97cf3",desc:"Sustav pamti što griješiš i vraća ti pitanje točno kad ga trebaš ponoviti."},
         {ico:"⚡",name:"Dnevni izazov",col:"var(--gold)",desc:"5 zadataka svaki dan - mijenja se u ponoć."},
         {ico:"🃏",name:"Flashcards",col:"var(--blue)",desc:"Formule i pojmovi - okreni karticu, provjeri se sam/sama."},
         {ico:"🔖",name:"Spremljena pitanja",col:"var(--gold)",desc:"Spremi zadatke za kasniji pregled i sesiju ponavljanja."}
        ].map((m,i,arr)=>e("div",{key:i,style:{
          display:"flex",gap:12,padding:"11px 0",
          borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",
          alignItems:"flex-start"
        }},
          e("div",{style:{
            width:36,height:36,borderRadius:9,flexShrink:0,
            display:"flex",alignItems:"center",justifyContent:"center",
            background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",
            fontSize:18
          }},m.ico),
          e("div",null,
            e("div",{style:{fontWeight:700,fontSize:13,color:m.col,marginBottom:2}},m.name),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},m.desc)
          )
        ))
      )
    },
{
      id:"prostor",icon:"✏️",title:"Radni prostor i alati",
      content:e("div",null,e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},"Digitalni papir za račun uz svaki zadatak. Otvori ga ikonom ✏️ u zaglavlju ili karticom „Radni prostor” ispod zadatka — sve se pamti po pitanju."),e("div",{style:{display:"flex",flexDirection:"column",gap:0}},[{ico:"✏️",name:"Skica",col:"var(--blue)",desc:"Beskonačno platno: olovka, ravnalo, kvadratići, gumica, zoom. Upiši f(x) pa ti nacrta graf s nultočkama, tjemenima i sjecištima. Uvuci sliku iz zadatka i crtaj ili mjeri po njoj."},{ico:"🧮",name:"Računalo",col:"var(--teal)",desc:"Znanstveni kalkulator. Spremi međurezultate (STO → A–D), egzaktni mod (razlomci, √)."},{ico:"📐",name:"Asistent",col:"var(--gold)",desc:"Upiši izraz ili jednadžbu i dobiješ rješenje korak po korak: jednadžbe, sustavi, nejednadžbe (s intervalima), faktorizacija, razmnožavanje, derivacije, integrali i trigonometrijska opća rješenja (x = … + 2kπ)."}].map((m,i,arr)=>e("div",{key:i,style:{display:"flex",gap:12,padding:"11px 0",borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",alignItems:"flex-start"}},e("div",{style:{width:36,height:36,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",fontSize:18}},m.ico),e("div",null,e("div",{style:{fontWeight:700,fontSize:13,color:m.col,marginBottom:2}},m.name),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},m.desc))))),e("div",{style:{marginTop:14,display:"flex",gap:10,alignItems:"flex-start",background:"rgba(224,82,82,.08)",border:"1px solid rgba(224,82,82,.3)",borderRadius:10,padding:"11px 13px"}},e("span",{style:{fontSize:15,flexShrink:0}},"🎓"),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},e("strong",{style:{color:"#f0a8a8"}},"U Simulaciji ispita:")," radni prostor je sveden na Skicu i osnovni kalkulator — bez Asistenta, AI-a i grafera, točno kao na pravoj maturi.")))
    },
    {
      id:"ai",icon:"🎓",title:"AI profesor",
      content:e("div",null,e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},"Zapeo/la na zadatku? Klikni „🎓 Pitaj AI profesora” ispod zadatka — otvara se Asistent s već upisanim zadatkom, a AI ti ga objasni korak po korak na hrvatskom."),e("div",{style:{display:"flex",flexDirection:"column",gap:6}},[["🎯","Baš taj zadatak","Objašnjenje je vezano uz konkretan zadatak, ne generičko."],["📝","Korak po korak","Razlaže postupak, ključnu ideju i tipičnu grešku."],["✨","Uz Pro","AI profesor je dio Pro pretplate."]].map(function(it,i){return e("div",{key:i,style:{display:"flex",gap:10,padding:"10px 12px",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10}},e("span",{style:{fontSize:16,flexShrink:0}},it[0]),e("div",null,e("div",{style:{fontWeight:700,fontSize:12,color:"var(--gold)",marginBottom:2}},it[1]),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},it[2])));})),e("div",{style:{marginTop:14,display:"flex",gap:10,alignItems:"flex-start",background:"rgba(224,82,82,.08)",border:"1px solid rgba(224,82,82,.3)",borderRadius:10,padding:"11px 13px"}},e("span",{style:{fontSize:15,flexShrink:0}},"🔒"),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},e("strong",{style:{color:"#f0a8a8"}},"U Simulaciji ispita:")," AI profesor nije dostupan — kao ni na pravoj maturi.")))
    },
    {
      id:"analitika",icon:"📊",title:"Statistike i praćenje napretka",
      content:e("div",null,
        e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.6}},
          "Otvori Statistika iz izbornika. Ima 6 tabova:"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
          [["📈","Pregled","Trend rezultata, predviđena ocjena, NCE usporedba, Sim vs Vježbanje"],
           ["🗺️","Teme","Uspješnost po temama - klikni temu za detalje i sva pitanja"],
           ["🔁","Greške","Greške grupirane po razini A/B i temi"],
           ["💀","Najteža","Pitanja s najviše grešaka kroz sve ispite"],
           ["🗓️","Kalendar","Pregled aktivnosti po danima - koji dani si vježbao/la"],
           ["💡","Savjeti","Personalizirane preporuke i analiza brzine rješavanja"]
          ].map(([ico,tab,desc],i)=>e("div",{key:i,style:{
            display:"flex",gap:10,padding:"10px 12px",
            background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:10
          }},
            e("span",{style:{fontSize:16,flexShrink:0}},ico),
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:12,color:"var(--blue)",marginBottom:2}},tab),
              e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},desc)
            )
          ))
        )
      )
    },
    {
      id:"savjeti",icon:"🎯",title:"Preporučeni redoslijed pripreme",
      content:e("div",{style:{display:"flex",flexDirection:"column",gap:0}},
        [["1-2 tjedan","var(--blue)","Rješavaj originalne ispite u modu Vježbanje. Prati koje teme su ti teže."],
         ["3-4 tjedan","var(--teal)","Pametno ponavljanje svaki dan (10-15 min) + barem 1 ispit dnevno. Koristi Tematske sesije za slabe teme."],
         ["5-6 tjedan","var(--gold)","Simulacija ispita u realnim uvjetima. Provjeri statistiku - fokusiraj što je najslabije."],
         ["Zadnji tjedan","var(--red)","Virtualni ispiti + Dnevni izazov + Pametno ponavljanje za utvrđivanje gradiva."],
         ["Dan prije","var(--green)","Kratka sesija Flashcards. Pregledaj formule. Odmori se - glava treba biti svježa."]
        ].map(([period,col,desc],i,arr)=>e("div",{key:i,style:{
          display:"flex",gap:12,padding:"12px 0",
          borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",
          alignItems:"flex-start"
        }},
          e("div",{style:{
            width:90,flexShrink:0,fontWeight:700,fontSize:11,
            color:col,lineHeight:1.4,paddingTop:2
          }},period),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},desc)
        ))
      )
    },
    {
      id:"precaci",icon:"⌨️",title:"Tipkovni prečaci",
      content:e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}},
        [["A / B / C / D","Odaberi MC odgovor"],["Enter","Provjeri / Sljedeće"],
         ["→ / ←","Naprijed / Natrag"],["B","Bookmark zadatak"],
         ["F","Označi zadatak"],["Space (SRS)","Okreni karticu"],
         ["1 / 2 / 3","Nisam znao / Djelomično / Znao sam (SRS)"],["Esc","Zatvori modal"]
        ].map(([k,d],i)=>e("div",{key:i,style:{
          display:"flex",alignItems:"center",gap:8,fontSize:12,
          padding:"8px 10px",background:"var(--s2)",
          border:"1px solid var(--bdr)",borderRadius:9
        }},
          e("kbd",{style:{
            background:"var(--s1)",border:"1px solid var(--bdr2)",
            borderRadius:5,padding:"2px 8px",fontFamily:"monospace",
            fontSize:11,fontWeight:700,flexShrink:0,minWidth:50,
            textAlign:"center",color:"var(--blue)"
          }},k),
          e("span",{style:{color:"var(--muted)"}},d)
        ))
      )
    }
  ];

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📖 Upute za korištenje")
    ),
    e("div",{style:{maxWidth:680,margin:"0 auto",padding:"24px 20px 60px"}},

      // Hero
      e("div",{style:{
        borderRadius:18,padding:"24px 24px 20px",marginBottom:24,
        background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
        position:"relative",overflow:"hidden"
      }},
        e("div",{style:{position:"absolute",right:-8,bottom:-18,fontSize:100,
          fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"rgba(255,255,255,.5)",marginBottom:8}},"Discere "+SUBJECT.name),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--bg,#060910)",marginBottom:6}},
          "Sve što trebaš znati"),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.65)",lineHeight:1.6}},
          totalExams+" ispita · "+totalQs+" zadataka · radni prostor s rješavačem · AI profesor")
      ),

      // Accordion sekcije
      e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
        sections.map(s=>e("div",{key:s.id,style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",
          borderRadius:14,overflow:"hidden"
        }},
          // Header
          e("button",{
            onClick:()=>setOpen(o=>o===s.id?null:s.id),
            style:{
              width:"100%",display:"flex",alignItems:"center",gap:12,
              padding:"14px 18px",background:"none",border:"none",
              cursor:"pointer",textAlign:"left",fontFamily:"var(--fb)",
              background:open===s.id?"var(--s2)":"transparent"
            }
          },
            e("div",{style:{
              width:38,height:38,borderRadius:10,flexShrink:0,
              display:"flex",alignItems:"center",justifyContent:"center",
              background:"var(--blue-d)",border:"1px solid var(--blue-b)",fontSize:18
            }},s.icon),
            e("span",{style:{flex:1,fontWeight:700,fontSize:14,color:"var(--text)",textAlign:"left"}},s.title),
            e("span",{style:{
              fontSize:11,color:"var(--muted)",
              transition:"transform .2s",display:"inline-block",
              transform:open===s.id?"rotate(180deg)":"rotate(0deg)"
            }},"▾")
          ),
          // Sadržaj
          open===s.id&&e("div",{style:{
            padding:"4px 18px 18px",borderTop:"1px solid var(--bdr)"
          }},s.content)
        ))
      )
    )
  );
}
export { ModeSelect, GuideScreen };
