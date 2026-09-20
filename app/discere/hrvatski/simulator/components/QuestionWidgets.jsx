'use client';
import React, { useState, useEffect } from 'react';
import { e, LL, postAi } from '../utils/helpers';

function EssayGrader({q,answer,isPro,onPaywall}){
  const[state,setState]=useState("idle");
  const[result,setResult]=useState(null);
  const charCount=(answer||"").length;
  const hasAnswer=charCount>=30;
  const wordCount=(answer||"").trim().split(/\s+/).filter(Boolean).length;

  async function gradeEssay(){
    setState("loading");
    const isEsej=q.type==="es";
    const isSaz=q.type==="saz";
    const prompt=isEsej
      ? "Ti si profesor hrvatskog jezika i književnosti koji ocjenjuje esej ucenika za drzavnu maturu.\n\n"+
        "Zadatak: \""+q.q+"\"\n"+
        "Referentni kljucni sadrzaji: "+(q.sol?.ex||"Analiza knjizevnog teksta s argumentacijom.")+"\n\n"+
        "Ucenikov odgovor:\n\""+answer+"\"\n\n"+
        "Ocijeni odgovor i vrati samo JSON objekt (bez ikakvog dodatnog teksta):\n"+
        "{\"score\":<0-5>,\"verdict\":\"<Nedovoljno|Djelomicno|Solidno|Dobro|Izvrsno>\","+
        "\"elements_found\":[\"opis elementa...\"],\"elements_missing\":[\"opis elementa...\"],"+
        "\"feedback\":\"2-3 recenice povratne informacije\"}"
      : "Ti si profesor hrvatskog jezika koji ocjenjuje sazetak teksta za drzavnu maturu.\n\n"+
        "Originalni tekst (ulomak):\n\""+(q.tekst||"").substring(0,600)+"...\"\n\n"+
        "Uputa: Sazetak u 200-250 rijeci. Vlastite formulacije, bez osobnog misljenja.\n\n"+
        "Ucenikov sazetak ("+wordCount+" rijeci):\n\""+answer+"\"\n\n"+
        "Ocijeni i vrati samo JSON objekt (bez ikakvog dodatnog teksta):\n"+
        "{\"score\":<0-10>,\"verdict\":\"<Nedovoljno|Djelomicno|Solidno|Dobro|Izvrsno>\","+
        "\"word_count_ok\":<true/false>,"+
        "\"elements_found\":[\"opis\"],\"elements_missing\":[\"opis\"],"+
        "\"feedback\":\"2-3 recenice\"}";

    const r=await postAi(prompt,{maxTokens:1000});
    if(!r.ok){setState("error");return;}
    try{
      const clean=(r.text||"{}").split("\`\`\`json").join("").split("\`\`\`").join("").trim();
      setResult(JSON.parse(clean));
      setState("done");
    }catch(err){setState("error");}
  }

  const maxScore=q.type==="es"?5:10;
  const scoreColors={0:"var(--red)",1:"var(--red)",2:"var(--gold)",3:"var(--gold)",4:"var(--blue)",5:"var(--green)",6:"var(--green)",7:"var(--green)",8:"var(--green)",9:"var(--green)",10:"var(--green)"};

  if(state==="idle") return e("div",null,
    e("div",{className:"essay-char-count"},wordCount+" riječi · "+charCount+" znakova"),
    hasAnswer?e("button",{className:"essay-grade-btn",onClick:gradeEssay},"🤖 AI ocijeni moj odgovor"):
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:6}},"Napiši odgovor (min. 30 znakova) za AI ocjenu.")
  );
  if(state==="loading") return e("div",null,
    e("div",{className:"essay-char-count"},wordCount+" riječi"),
    e("button",{className:"essay-grade-btn loading",disabled:true},"🤖 Ocjenjujem..."),
    e("div",{className:"essay-grade-wrap"},e("div",{className:"essay-grade-header",style:{color:"var(--muted)",fontSize:13}},"Analiziram tvoj odgovor..."))
  );
  if(state==="error") return e("div",null,e("button",{className:"essay-grade-btn",onClick:gradeEssay},"🤖 Pokušaj ponovo"));
  if(state==="done"&&result){
    const sc=result.score??0;
    const col=scoreColors[sc]||"var(--gold)";
    return e("div",null,
      e("div",{className:"essay-char-count"},wordCount+" riječi"),
      e("div",{className:"essay-grade-wrap"},
        e("div",{className:"essay-grade-header"},
          e("div",{className:"essay-grade-score"},
            e("div",{className:"essay-grade-circle",style:{borderColor:col,color:col}},sc+"/"+maxScore),
            e("div",{className:"essay-grade-label"},
              e("div",{className:"essay-grade-title",style:{color:col}},result.verdict||""),
              e("div",{className:"essay-grade-sub"},sc+" od "+maxScore+" bodova"+(q.type==="saz"&&result.word_count_ok===false?" · ⚠️ Nije 200–250 riječi":"")))
          ),
          e("div",{className:"essay-criteria"},
            (result.elements_found||[]).map((el,i)=>e("div",{key:"f"+i,className:"essay-criterion"},e("span",{className:"essay-criterion-icon"},"✅"),e("div",{className:"essay-criterion-text"},el))),
            (result.elements_missing||[]).map((el,i)=>e("div",{key:"m"+i,className:"essay-criterion"},e("span",{className:"essay-criterion-icon"},"❌"),e("div",{className:"essay-criterion-text"},el)))
          )
        ),
        result.feedback&&e("div",{className:"essay-feedback"},result.feedback),
        e("button",{className:"essay-grade-btn",onClick:()=>{setState("idle");setResult(null);}},"🔄 Ocijeni ponovo")
      )
    );
  }
  return null;
}

function MatQ({q,a,setA,rev}){
  const cur=a||{};
  const[activeLeft,setActiveLeft]=useState(null);

  // Paleta boja za parove — svaki par dobiva svoju boju
  const PAIR_COLORS=[
    {bg:"rgba(75,123,255,.15)",  border:"rgba(75,123,255,.5)",  text:"#93b4ff", light:"rgba(75,123,255,.08)"},
    {bg:"rgba(62,207,110,.15)",  border:"rgba(62,207,110,.5)",  text:"#6ee89a", light:"rgba(62,207,110,.08)"},
    {bg:"rgba(249,115,22,.15)",  border:"rgba(249,115,22,.5)",  text:"#fdac72", light:"rgba(249,115,22,.08)"},
    {bg:"rgba(75,123,255,.15)",  border:"rgba(168,85,247,.5)",  text:"var(--blue)", light:"rgba(75,123,255,.08)"},
    {bg:"rgba(45,207,190,.15)",  border:"rgba(45,207,190,.5)",  text:"#5de8d9", light:"rgba(45,207,190,.08)"},
    {bg:"rgba(244,63,94,.15)",   border:"rgba(244,63,94,.5)",   text:"#f87096", light:"rgba(244,63,94,.08)"},
  ];

  // Mapiraj svaki lijevi pojam na indeks boje (prema redoslijedu sparivanja)
  // order: redoslijed kojim su sparivani (za konzistentne boje)
  const pairOrder=q.items.map(lft=>cur[lft]?lft:null).filter(Boolean);
  function getPairIndex(lft){return pairOrder.indexOf(lft);}
  function getColor(lft){const i=getPairIndex(lft);return i>=0?PAIR_COLORS[i%PAIR_COLORS.length]:null;}
  function getColorByOpt(opt){
    const lft=Object.entries(cur).find(([k,v])=>v===opt)?.[0];
    return lft?getColor(lft):null;
  }

  function handleLeftClick(lft){
    if(rev) return;
    if(cur[lft]){setA({...cur,[lft]:""});setActiveLeft(null);return;}
    setActiveLeft(lft===activeLeft?null:lft);
  }
  function handleRightClick(opt){
    if(rev||!activeLeft) return;
    const usedBy=Object.entries(cur).find(([k,v])=>v===opt&&k!==activeLeft)?.[0];
    const newA={...cur,[activeLeft]:opt};
    if(usedBy) newA[usedBy]="";
    setA(newA);
    setActiveLeft(null);
  }
  const usedOpts=new Set(Object.values(cur).filter(Boolean));

  return e("div",{className:"mat-mobile"},
    /* Uputa */
    !rev&&e("div",{style:{
      fontSize:12,padding:"8px 12px",borderRadius:"var(--r)",marginBottom:8,
      background:activeLeft?"rgba(75,123,255,.08)":"rgba(233,180,70,.06)",
      border:"1px solid "+(activeLeft?"rgba(75,123,255,.25)":"rgba(233,180,70,.15)"),
      color:activeLeft?"#93b4ff":"var(--gold)",display:"flex",alignItems:"center",gap:6
    }},
      activeLeft
        ? e("span",null,"✦ Odabrano: ",e("strong",null,'"'+activeLeft+'"')," — klikni odgovarajući pojam desno")
        : e("span",null,"👆 Klikni pojam lijevo, zatim ga poveži s odgovorom desno")
    ),

    /* Dva stupca side-by-side */
    e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},

      /* Lijeva strana — pojmovi */
      e("div",null,
        e("div",{className:"mat-mobile-section-title"},"Pojmovi"),
        e("div",{className:"mat-left-list"},
          q.items.map((lft,i)=>{
            const ch=cur[lft]||"";
            const isActive=activeLeft===lft;
            const col=ch?getColor(lft):null;
            const pairNum=ch?getPairIndex(lft)+1:null;
            const cr=q.sol.pairs.find(p=>p.l===lft)?.r;
            const ok=rev&&ch===cr;
            const bad=rev&&ch&&ch!==cr;

            // Stil ovisno o stanju
            let style={};
            if(rev){
              style={background:ok?"var(--green-d)":"var(--red-d)",
                border:"2px solid "+(ok?"var(--green)":"var(--red)"),
                color:ok?"var(--green)":"var(--red)"};
            } else if(isActive){
              style={background:"rgba(75,123,255,.15)",border:"2px solid rgba(75,123,255,.6)",color:"#93b4ff"};
            } else if(col){
              style={background:col.light,border:"2px solid "+col.border,color:col.text};
            } else {
              style={background:"var(--s2)",border:"2px solid var(--bdr)",color:"var(--text)"};
            }

            return e("div",{key:i,
              className:"mat-left-item",
              style:{...style,cursor:rev?"default":"pointer"},
              onClick:()=>handleLeftClick(lft)},
              e("span",{style:{flex:1}},lft),
              // Broj para ili status
              rev
                ? e("span",{style:{fontSize:14,fontWeight:700,flexShrink:0}},ok?"✓":"✗")
                : pairNum
                  ? e("span",{style:{fontSize:11,fontWeight:700,minWidth:20,height:20,borderRadius:"50%",
                      background:col?.border,color:"#000",display:"flex",alignItems:"center",
                      justifyContent:"center",flexShrink:0}},pairNum)
                  : isActive
                    ? e("span",{style:{fontSize:12,flexShrink:0}},"●")
                    : null
            );
          })
        )
      ),

      /* Desna strana — opcije */
      e("div",null,
        e("div",{className:"mat-mobile-section-title"},"Odgovori"),
        e("div",{className:"mat-right-list"},
          q.opts.map((opt,j)=>{
            const isUsed=usedOpts.has(opt);
            const usedByKey=Object.entries(cur).find(([k,v])=>v===opt)?.[0];
            const isSelectable=!!activeLeft&&(!isUsed||(usedByKey!==undefined));
            const col=isUsed?getColorByOpt(opt):null;
            const pairNum=isUsed&&usedByKey?getPairIndex(usedByKey)+1:null;
            const ok=rev&&q.sol.pairs.some(p=>p.r===opt&&cur[p.l]===opt);
            const bad=rev&&isUsed&&!ok;

            let style={};
            if(rev){
              if(isUsed) style={background:ok?"var(--green-d)":"var(--red-d)",
                border:"2px solid "+(ok?"var(--green)":"var(--red)"),color:ok?"var(--green)":"var(--red)"};
              else style={background:"var(--s2)",border:"2px solid var(--bdr)",color:"var(--muted)",opacity:.5};
            } else if(isSelectable){
              style={background:"rgba(75,123,255,.1)",border:"2px solid rgba(75,123,255,.5)",
                color:"#93b4ff",cursor:"pointer"};
            } else if(col){
              style={background:col.light,border:"2px solid "+col.border,color:col.text,cursor:"default"};
            } else {
              style={background:"var(--s2)",border:"2px solid var(--bdr)",color:"var(--text)",
                cursor:activeLeft?"pointer":"default",opacity:isUsed&&!isSelectable?.5:1};
            }

            return e("div",{key:j,
              className:"mat-right-item",
              style,
              onClick:()=>{if(!rev&&isSelectable)handleRightClick(opt);}},
              e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}},
                e("span",{style:{flex:1}},opt),
                // Broj para koji je ovo zauzeo
                !rev&&pairNum&&col&&e("span",{style:{fontSize:11,fontWeight:700,minWidth:20,height:20,
                  borderRadius:"50%",background:col.border,color:"#000",display:"flex",
                  alignItems:"center",justifyContent:"center",flexShrink:0}},pairNum),
                rev&&isUsed&&e("span",{style:{fontSize:14,fontWeight:700,flexShrink:0}},ok?"✓":"✗")
              )
            );
          })
        )
      )
    ),

    /* Gumb poništi */
    !rev&&Object.values(cur).some(Boolean)&&
      e("button",{className:"mat-clear-btn",onClick:()=>{setA({});setActiveLeft(null);}},"✕ Poništi sve"),

    /* Review prikaz točnih odgovora */
    rev&&e("div",{style:{marginTop:12}},
      e("div",{className:"mat-mobile-section-title"},"Točni parovi"),
      e("div",{className:"mat-pairs-summary"},
        q.items.map((lft,i)=>{
          const cr=q.sol.pairs.find(p=>p.l===lft)?.r;
          const ch=cur[lft];const ok=ch===cr;
          return e("div",{key:i,className:"mat-pair-row",
            style:{borderLeft:"3px solid "+(ok?"var(--green)":"var(--red)"),
              background:ok?"rgba(62,207,110,.05)":"rgba(248,113,113,.05)"}},
            e("span",{className:"mat-pair-left",style:{color:ok?"var(--green)":"var(--red)"}},lft),
            e("span",{style:{color:"var(--muted)"}},"→"),
            e("span",{className:"mat-pair-right",style:{color:ok?"var(--green)":"var(--text)"}},
              ch||e("em",{style:{color:"var(--muted)"}},"nije odgovoreno")),
            !ok&&cr&&e("span",{style:{fontSize:11,color:"var(--green)",marginLeft:"auto"}},
              "✓ "+cr)
          );
        })
      )
    )
  );
}

function SaAiHelper({q}){
  return React.createElement(SaAiHelperSession,{key:q.id,q});
}
function SaAiHelperSession({q}){
  const[aiState,setAiState]=useState("idle");
  const[aiText,setAiText]=useState("");
  async function fetchAi(){
    setAiState("loading");
    const prompt="Ti si profesor hrvatskog jezika i književnosti. Učenik uči za državnu maturu.\n\nPitanje: \""+q.q+"\"\nReferentni odgovor: "+q.sol?.ans+"\n\nNapiši kratko obrazloženje (2–4 rečenice) na hrvatskom koje objašnjava i proširuje taj odgovor — zašto je točan, koji pojam ili pravilo stoji iza njega. Budi konkretan i educativan.";
    const r=await postAi(prompt,{maxTokens:500});
    if(!r.ok){setAiState("error");return;}
    setAiText(r.text);
    setAiState("done");
  }
  if(aiState==="idle") return e("button",{className:"ah-ai-btn",style:{marginTop:8,borderRadius:"var(--r)"},onClick:fetchAi},"🤖 AI objašnjenje");
  if(aiState==="loading") return e("button",{className:"ah-ai-btn loading",style:{marginTop:8,borderRadius:"var(--r)"},disabled:true},"🤖 Generira...");
  if(aiState==="error") return e("button",{className:"ah-ai-btn",style:{marginTop:8,borderRadius:"var(--r)"},onClick:fetchAi},"🤖 Pokušaj ponovo");
  return e("div",{className:"ah-ai-content",style:{marginTop:8,borderRadius:"var(--r)"}},
    e("div",{className:"ah-exp-label"},"🤖 AI Profesor"),
    e("div",{className:"ah-ai-text"},aiText),
    e("button",{className:"ah-ai-btn",style:{fontSize:11},onClick:()=>{setAiState("idle");setAiText("");}},"🔄 Ponovo")
  );
}

// qid je izvorni id pitanja (u virtualnim sesijama q.id je prenumeriran), pa distraktori
// moraju ići po njemu, a ne po q.id.
function AnswerHelper(props){
  const {q,examKey,qid}=props;
  return React.createElement(AnswerHelperSession,{...props,key:JSON.stringify([examKey??null,qid??q.id,q.id])});
}
function AnswerHelperSession({q,show,onToggle,autoExpand,examKey,qid}){
  const _qid=qid!=null?qid:q.id;
  const[aiState,setAiState]=useState("idle");
  const[aiText,setAiText]=useState("");
  const[dState,setDState]=useState("idle"); // analiza distraktora (zašto su ostali krivi)
  const[dText,setDText]=useState("");
  const[staticD,setStaticD]=useState(null); // unaprijed generirani distraktori (lazy-load)
  useEffect(()=>{
    let alive=true;
    if(q.type==="mc"&&examKey!=null){
      import('../data/distraktoriData.js').then(m=>{ if(alive) setStaticD(m.getDistraktori(examKey,_qid)); }).catch(()=>{});
    }
    return ()=>{alive=false;};
  },[_qid,examKey,q.type]);

  async function fetchDistractors(){
    setDState("loading");
    const opts=(q.opts||[]).map((o,i)=>LL[i]+") "+o).join("\n");
    const prompt=`Ti si profesor hrvatskog jezika i književnosti. Učenik uči za državnu maturu.

Pitanje: "${q.q}"
Ponuđeni odgovori:
${opts}
Točan odgovor je ${q.sol.cl}.

Za svaki NETOČAN ponuđeni odgovor napiši jednu kratku rečenicu zašto je pogrešan, u formatu "X) razlog" (svaki u novom retku). Na kraju, u jednoj rečenici, zašto je ${q.sol.cl} točan. Piši na hrvatskom, konkretno i kratko, bez ponavljanja teksta pitanja.`;
    const r=await postAi(prompt,{maxTokens:600});
    if(!r.ok){setDState("error");return;}
    setDText(r.text||"Nije moguće generirati analizu.");
    setDState("done");
  }

  function getAnswerContent(){
    if(q.type==="mc"){const idx=LL.indexOf(q.sol.cl);return e("div",{className:"ah-answer-content"},e("span",{className:"ah-correct"},q.sol.cl+" — "),q.opts[idx]||"");}
    if(q.type==="sa"){return e("div",{className:"ah-answer-content"},q.sol.ans);}
    return null;
  }

  async function fetchAi(){
    setAiState("loading");
    const correctAns=q.type==="mc"?`${q.sol.cl} — ${q.opts[LL.indexOf(q.sol.cl)]}`:q.sol.ans||"";
    const prompt=`Ti si profesor hrvatskog jezika i književnosti. Učenik uči za državnu maturu.

Pitanje: "${q.q}"
Točan odgovor: ${correctAns}

Napiši kratko obrazloženje (2–4 rečenice) na hrvatskom koje objašnjava ZAŠTO je taj odgovor točan — kojim jezičnim pravilom, književnim pojmom ili teorijom. Budi konkretan. Ne ponavljaj pitanje.`;
    const r=await postAi(prompt,{maxTokens:1000});
    if(!r.ok){setAiState("error");return;}
    setAiText(r.text||"Nije moguće generirati objašnjenje.");
    setAiState("done");
  }

  if(!show&&!autoExpand) return e("button",{className:"ah-toggle-btn",onClick:onToggle},"💡 Pokaži odgovor");

  return e("div",{className:"ah-wrap"},
    e("div",{className:"ah-answer"},
      e("div",{className:"ah-answer-label"},"💡 Točan odgovor"),
      getAnswerContent()
    ),
    q.exp&&e("div",{className:"ah-exp"},
      e("div",{className:"ah-exp-label"},"📖 Obrazloženje"),
      e("div",{className:"ah-exp-text"},q.exp)
    ),
    !q.exp&&(()=>{
      if(aiState==="idle") return e("button",{className:"ah-ai-btn",onClick:fetchAi},"🤖 AI objašnjenje");
      if(aiState==="loading") return e("button",{className:"ah-ai-btn loading",disabled:true},"🤖 Generira...");
      if(aiState==="error") return e("button",{className:"ah-ai-btn",onClick:fetchAi},"🤖 Pokušaj ponovo");
      return e("div",{className:"ah-ai-content"},e("div",{className:"ah-exp-label"},"🤖 AI Profesor"),e("div",{className:"ah-ai-text"},aiText));
    })(),

    /* Distraktori — "zašto su ostali krivi". Prvenstveno STATIČKI (0 troška, trenutno);
       AI gumb samo kao fallback ako za to pitanje još nema generiranih podataka. */
    q.type==="mc"&&q.opts&&(staticD
      ? e("div",{className:"ah-exp",style:{marginTop:8}},
          e("div",{className:"ah-exp-label"},"📖 Zašto su ostali krivi"),
          e("div",{className:"ah-exp-text"},
            Object.keys(staticD).sort().map(L=>e("div",{key:L,style:{marginBottom:4}},
              e("strong",null,L+") "),staticD[L])))
        )
      : (()=>{
          if(dState==="idle") return e("button",{className:"ah-ai-btn",style:{marginTop:8},onClick:fetchDistractors},"🤖 Zašto su ostali krivi?");
          if(dState==="loading") return e("button",{className:"ah-ai-btn loading",style:{marginTop:8},disabled:true},"🤖 Analiziram...");
          if(dState==="error") return e("button",{className:"ah-ai-btn",style:{marginTop:8},onClick:fetchDistractors},"🤖 Pokušaj ponovo");
          return e("div",{className:"ah-ai-content",style:{marginTop:8}},
            e("div",{className:"ah-exp-label"},"🤖 Analiza distraktora"),
            e("div",{className:"ah-ai-text",style:{whiteSpace:"pre-line"}},dText));
        })())
  );
}

function ContextPanel({q}){
  const[open,setOpen]=useState(true);
  if(!q.tekst&&!q.ctx) return null;
  const content=q.ctx||q.tekst;
  const title=q.ctxNaslov||(q.type==="saz"?"Tekst za sažetak":"Tekst uz pitanje");
  const paragraphi=content.split("\n\n");
  return e("div",{className:"ctx-panel"},
    e("button",{className:"ctx-toggle"+(open?" open":""),onClick:()=>setOpen(o=>!o)},
      "📋 ",title,e("span",{className:"ctx-arrow"},"▼")),
    e("div",{className:"ctx-body"+(open?" open":"")},
      e("div",{className:"ctx-scroll-inner"},
        e("div",{className:"ctx-article"},
          paragraphi.map((para,i)=>{
            const redci=para.split("\n");
            if(redci.length>1){
              return e("p",{key:i,style:{whiteSpace:"pre-line",fontStyle:"italic",lineHeight:1.9,marginBottom:12}},para);
            }
            return e("p",{key:i,style:{marginBottom:8}},para);
          })
        )
      )
    )
  );
}


export { EssayGrader, MatQ, SaAiHelper, AnswerHelper, ContextPanel };
