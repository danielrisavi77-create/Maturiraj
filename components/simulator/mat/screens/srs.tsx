// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Ponavljanje s razmakom (SM-2) i kartice. */
import React from 'react';
import { DS, SUBJECT, TOPIC_LABELS } from '../core/state';
import { EXAMS } from '../core/exams';
import { renderOptText, renderQText } from '../core/mathText';
import { updateStreak } from '../core/progress';
const{createElement:e,Fragment}=React;
const SRS_KEY="mat_srs";
function srsLoad(){try{return JSON.parse(DS.get(SRS_KEY)||"{}");}catch(e){return {};}}
function srsSave(data){try{DS.set(SRS_KEY,JSON.stringify(data));}catch(e){}}
function today_ord(){return Math.floor(Date.now()/86400000);}
function sm2Update(card,quality){
  const ef=Math.max(1.3,(card.ef||2.5)+0.1-(2-quality)*(0.08+(2-quality)*0.02));
  let interval;
  if(quality===0) interval=1;
  else if(!card.interval||card.interval<1) interval=1;
  else if(card.interval===1) interval=6;
  else interval=Math.round(card.interval*ef);
  return{ef,interval,due:today_ord()+interval,reps:(card.reps||0)+1};
}
const SRS_NEW_PER_DAY=15;
function srsEligible(q){
  if(!q||!q.sol) return false;
  if(q.type==="mc") return !!q.sol.cl;
  if(q.type==="sa"||q.type==="num"||q.type==="proof") return !!(q.sol.ans||q.sol.ex||(q.steps&&q.steps.length));
  return false;
}
function srsNewBank(srsData){
  let n=0;
  Object.values(EXAMS).forEach(ex=>ex.qs.forEach(q=>{ if(srsEligible(q)&&!srsData[ex.key+"__"+q.id]) n++; }));
  return n;
}
function getSrsDueCards(srsData){
  const tod=today_ord();
  // Pravi SRS: sva dospjela ponavljanja + ograničen broj NOVIH kartica po danu
  const introToday=Object.values(srsData).filter(c=>c&&c.intro===tod).length;
  const newAllowed=Math.max(0,SRS_NEW_PER_DAY-introToday);
  const reviews=[],news=[];
  Object.values(EXAMS).forEach(exam=>{
    exam.qs.forEach(q=>{
      if(!srsEligible(q)) return;
      const key=exam.key+"__"+q.id;
      const card=srsData[key];
      if(card){ if(card.due<=tod) reviews.push({...q,_examKey:exam.key,_srsKey:key,_card:card}); }
      else news.push({...q,_examKey:exam.key,_srsKey:key,_card:null});
    });
  });
  reviews.sort((a,b)=>(a._card.due||0)-(b._card.due||0));
  const newPick=news.sort(()=>Math.random()-.5).slice(0,newAllowed);
  return [...reviews,...newPick];
}
function SpacedRepetitionScreen({onBack,userData,onUpdateUserData}){
  const[srsData,setSrsData]=React.useState(()=>srsLoad());
  const dueCards=React.useMemo(()=>getSrsDueCards(srsData),[srsData]);
  const[sessionCards,setSessionCards]=React.useState(()=>dueCards.slice(0,20));
  const[cur,setCur]=React.useState(0);
  const[flipped,setFlipped]=React.useState(false);
  const[done,setDone]=React.useState(false);
  const[stats,setStats]=React.useState({easy:0,hard:0,again:0});
  const answered=stats.easy+stats.hard+stats.again;
  const xpGained=done&&answered>0?10+answered*2+(stats.easy>=Math.ceil(answered*0.7)?10:0):0;
  const awardedRef=React.useRef(false);
  const[ioMsg,setIoMsg]=React.useState(null);

  const totalSeen=Object.keys(srsData).length;
  const totalDue=dueCards.length;
  const totalMC=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.filter(srsEligible).length,0);
  const _tod=today_ord();
  const dueTomorrow=Object.values(srsData).filter(c=>c&&c.due===_tod+1).length;
  const dueWeek=Object.values(srsData).filter(c=>c&&c.due>_tod&&c.due<=_tod+7).length;
  const introToday=Object.values(srsData).filter(c=>c&&c.intro===_tod).length;
  const newBank=srsNewBank(srsData);

  function answer(quality){
    const q=sessionCards[cur];
    const updated=sm2Update(q._card||{},quality);
    if(!q._card) updated.intro=today_ord();
    const newSrs={...srsData,[q._srsKey]:updated};
    setSrsData(newSrs);
    srsSave(newSrs);
    setStats(s=>({...s,easy:s.easy+(quality===2?1:0),hard:s.hard+(quality===1?1:0),again:s.again+(quality===0?1:0)}));
    setFlipped(false);
    if(cur+1>=sessionCards.length) setDone(true);
    else setCur(c=>c+1);
  }

  React.useEffect(()=>{
    if(done||sessionCards.length===0) return;
    function onKey(e){
      if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
      if(e.code==="Space"){e.preventDefault();setFlipped(f=>!f);}
      if(!flipped) return;
      if(e.key==="1") answer(0);
      if(e.key==="2") answer(1);
      if(e.key==="3") answer(2);
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[flipped,done,sessionCards,cur]);

  React.useEffect(()=>{
    if(done&&!awardedRef.current){
      awardedRef.current=true;
      if(answered>0){
        const gained=xpGained;
        window._playSound&&window._playSound("done");
        if(onUpdateUserData) onUpdateUserData(prev=>{const ss=updateStreak(prev);return{...ss,xp:(prev.xp||0)+gained};});
      }
    }
  },[done]);

  // Nema kartica za danas
  if(sessionCards.length===0) return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Ponavljanje")
    ),
    e("div",{style:{maxWidth:500,margin:"0 auto",padding:"60px 20px",textAlign:"center"}},
      e("div",{style:{fontSize:52,marginBottom:16}},"✅"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:8}},introToday>0?"Današnja porcija gotova!":"Sve naučeno!"),
      e("div",{style:{color:"var(--muted)",marginBottom:16,fontSize:14}},
        newBank>0
          ?"Odradio/la si "+introToday+" novih + sva ponavljanja za danas. Sutra te čeka novih "+Math.min(SRS_NEW_PER_DAY,newBank)+" — bez gomilanja."
          :"Nema kartica za danas - odlično!"),
      e("div",{style:{background:"var(--blue-d)",border:"1px solid var(--blue-b)",borderRadius:12,
        padding:"14px 18px",marginBottom:20,fontSize:13,color:"var(--text)",lineHeight:1.65,textAlign:"left"}},
        e("div",{style:{fontWeight:700,color:"var(--blue)",marginBottom:6}},"Kako ovo funkcionira?"),
        e("div",null,"Svaki put kad odgovoriš na pitanje, sustav pamti koliko dobro to znaš. Ako znaš dobro — vraća ti pitanje za tjedan dana. Ako ne znaš — vraća ga sutra. Cilj je da ponavljaš ",e("strong",null,"točno kad počinješ zaboravljati"),", ne ranije ni kasnije.")
      ),
      e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"14px 18px",marginBottom:20,textAlign:"left"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6}},
          e("span",{style:{color:"var(--muted)",fontSize:13}},"Naučenih zadataka"),
          e("span",{style:{fontWeight:700}},totalSeen+" / "+totalMC)
        ),
        e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
          e("div",{style:{height:"100%",width:Math.round(totalSeen/Math.max(totalMC,1)*100)+"%",background:"var(--green)",borderRadius:99}})
        )
      ),
      (dueTomorrow>0||dueWeek>0)&&e("div",{style:{fontSize:12.5,color:"var(--muted)",marginBottom:20}},
        "📅 Sutra na redu: ",e("strong",{style:{color:"var(--text)"}},dueTomorrow)," · ovaj tjedan: ",e("strong",{style:{color:"var(--text)"}},dueWeek)),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
        e("button",{className:"btn btn-g",style:{padding:"10px 24px"},onClick:onBack},"← Natrag"),
        Object.keys(srsData).length>0&&e("button",{
          className:"btn btn-g",style:{padding:"10px 24px"},
          onClick:()=>{
            const blob=new Blob([JSON.stringify({exported:new Date().toISOString(),version:1,cards:srsData},null,2)],{type:"application/json"});
            const url=URL.createObjectURL(blob);
            const a=document.createElement("a");
            a.href=url;a.download="discere_mat_srs_"+new Date().toISOString().slice(0,10)+".json";
            a.click();URL.revokeObjectURL(url);
          }
        },"💾 Backup podataka"),
        e("label",{className:"btn btn-g",style:{padding:"10px 24px",cursor:"pointer"}},
          "📂 Uvezi backup",
          e("input",{type:"file",accept:".json",style:{display:"none"},
            onChange:ev=>{
              const file=ev.target.files?.[0];if(!file) return;
              const reader=new FileReader();
              reader.onload=ev2=>{
                try{
                  const data=JSON.parse(ev2.target.result);
                  if(data.cards&&typeof data.cards==="object"){
                    const merged={...srsData,...data.cards};
                    setSrsData(merged);srsSave(merged);
                    setIoMsg({ok:true,txt:"Uvezeno "+Object.keys(data.cards).length+" kartica."});
                  } else setIoMsg({ok:false,txt:"Nevažeći format datoteke."});
                }catch(e3){setIoMsg({ok:false,txt:"Greška pri čitanju datoteke."});}
              };
              reader.readAsText(file);ev.target.value="";
            }
          })
        )
      ),
      ioMsg&&e("div",{style:{marginTop:10,fontSize:12.5,fontWeight:600,
        color:ioMsg.ok?"var(--green)":"var(--red)"}},
        (ioMsg.ok?"✅ ":"❌ ")+ioMsg.txt)
    )
  );

  // Sesija završena
  if(done) return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Sesija završena")
    ),
    e("div",{style:{maxWidth:500,margin:"0 auto",padding:"40px 20px",textAlign:"center"}},
      e("div",{style:{fontSize:48,marginBottom:12}},"🎓"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:20}},"Sesija gotova!"),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:24}},
        [{bg:"var(--green-d)",bc:"rgba(61,214,140,.3)",c:"var(--green)",v:"✓ "+stats.easy,l:"Znao/la sam"},
         {bg:"var(--gold-d)",bc:"var(--gold-b)",c:"var(--gold)",v:"~ "+stats.hard,l:"Djelomično"},
         {bg:"var(--red-d)",bc:"rgba(248,113,113,.3)",c:"var(--red)",v:"✗ "+stats.again,l:"Nisam znao/la"}
        ].map((s,i)=>e("div",{key:i,style:{background:s.bg,border:"1px solid "+s.bc,borderRadius:"var(--r)",padding:"12px 18px",textAlign:"center"}},
          e("div",{style:{fontSize:22,fontWeight:800,color:s.c}},s.v),
          e("div",{style:{fontSize:11,color:"var(--muted)"}},s.l)
        ))
      ),
      xpGained>0&&e("div",{style:{display:"inline-flex",gap:8,marginBottom:18}},
        e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)"}},"+"+xpGained+" XP"),
        e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--text)"}},"🔥 "+(userData?.streak||0)+" dana")
      ),
      (dueTomorrow>0||dueWeek>0)&&e("div",{style:{fontSize:12.5,color:"var(--muted)",marginBottom:6}},
        "📅 Sutra na redu: ",e("strong",{style:{color:"var(--text)"}},dueTomorrow)," · ovaj tjedan: ",e("strong",{style:{color:"var(--text)"}},dueWeek)),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:18}},
        "🆕 Novih danas: ",e("strong",{style:{color:"var(--text)"}},introToday+"/"+SRS_NEW_PER_DAY)," · banka: ",e("strong",{style:{color:"var(--text)"}},newBank)),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center"}},
        dueCards.length>0
          ?React.createElement("button",{className:"btn btn-gold",style:{padding:"10px 20px"},
              onClick:()=>{setSessionCards(dueCards.slice(0,20));setCur(0);setFlipped(false);setDone(false);setStats({easy:0,hard:0,again:0});awardedRef.current=false;}},
              "▶ Nastavi (+"+dueCards.length+")")
          :null,
        e("button",{className:"btn btn-g",style:{padding:"10px 20px"},onClick:onBack},"← Natrag")
      )
    )
  );

  const q=sessionCards[cur];
  const progress=Math.round((cur/sessionCards.length)*100);
  const isNew=!q._card;
  const daysOverdue=q._card?Math.max(0,today_ord()-q._card.due):null;

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Ponavljanje"),
      e("span",{style:{fontSize:12,color:"var(--muted)"}},(cur+1)+"/"+sessionCards.length)
    ),
    e("div",{style:{maxWidth:600,margin:"0 auto",padding:"24px 20px 80px"}},
      e("div",{style:{height:4,background:"var(--s3)",borderRadius:99,marginBottom:16,overflow:"hidden"}},
        e("div",{style:{height:"100%",width:progress+"%",background:"var(--teal)",borderRadius:99,transition:"width .3s"}})
      ),
      e("div",{style:{display:"flex",gap:6,marginBottom:14,alignItems:"center"}},
        e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
        isNew
          ?e("span",{style:{fontSize:11,color:"var(--blue)",background:"var(--blue-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"🆕 Novo · "+Math.min(introToday+1,SRS_NEW_PER_DAY)+"/"+SRS_NEW_PER_DAY+" danas")
          :daysOverdue>0
            ?e("span",{style:{fontSize:11,color:"var(--red)",background:"var(--red-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"⏰ Kasni "+daysOverdue+(daysOverdue===1?" dan":" dana"))
            :e("span",{style:{fontSize:11,color:"var(--green)",background:"var(--green-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"📅 Na redu"),
        e("span",{style:{fontSize:11,color:"var(--muted)",marginLeft:"auto"}},"Interval: "+(q._card?.interval||0)+" dana")
      ),
      // Kartica
      e("div",{
        onClick:()=>setFlipped(f=>!f),
        style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",
          padding:"28px 24px",minHeight:200,cursor:"pointer",boxShadow:"var(--shadow)",
          marginBottom:16,userSelect:"none",position:"relative"
        }
      },
        e("div",{style:{position:"absolute",top:12,right:14,fontSize:11,color:"var(--muted)",fontWeight:600}},
          flipped?"↑ Odgovor":"↓ Klikni za odgovor"),
        e("div",{style:{fontSize:15,lineHeight:1.65,fontWeight:500,marginBottom:flipped?14:0}},renderQText(q.q)),
        flipped&&e("div",{style:{borderTop:"1px solid var(--bdr)",paddingTop:14}},
          e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:6}}, q.type==="proof"?"Rješenje:":"Točan odgovor:"),
          e("div",{style:{fontSize:15,fontWeight:700,color:"var(--green)",marginBottom:(q.exp||(q.why&&q.why.length)||(q.steps&&q.steps.length))?8:0}},
            q.type==="mc"
              ? [q.sol.cl+") ", renderOptText(q.opts?.["ABCDE".indexOf(q.sol.cl)]||"")]
              : ((q.sol&&q.sol.ans) ? renderOptText(String(q.sol.ans)) : "Vidi postupak \u2193")),
          (q.exp||(Array.isArray(q.why)&&q.why.length))&&e("div",{style:{fontSize:12,color:"var(--muted)",fontStyle:"italic",marginBottom:(q.steps&&q.steps.length)?8:0}}, e("span",{style:{marginRight:4}}, "💡"), renderOptText(q.exp||q.why[0])),
          (q.steps&&q.steps.length)&&e("details",{style:{marginTop:2}},
            e("summary",{style:{fontSize:12,color:"var(--blue)",cursor:"pointer",userSelect:"none",fontWeight:600,listStyle:"none"}},"Prikaži postupak"),
            e("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:6,maxHeight:240,overflowY:"auto"}},
              q.steps.filter(st=>st&&st.txt).map((st,i)=>
                e("div",{key:i,style:{fontSize:12.5,lineHeight:1.6,color:"var(--text)",paddingLeft:10,borderLeft:"2px solid var(--bdr)"}}, renderOptText(st.txt)))
            )
          )
        )
      ),
      // Gumbi za ocjenu
      flipped
        ?e("div",null,
            e("div",{style:{fontSize:12,color:"var(--muted)",textAlign:"center",marginBottom:8}},"Jesi li znao/la odgovor?"),
            e("div",{style:{display:"flex",gap:8}},
              e("button",{onClick:()=>answer(0),style:{flex:1,padding:"14px 8px",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.4)",color:"var(--red)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"✗"),e("br"),e("span",{style:{fontSize:12}},"Nisam znao/la"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"(vraća se sutra)")),
              e("button",{onClick:()=>answer(1),style:{flex:1,padding:"14px 8px",background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"~"),e("br"),e("span",{style:{fontSize:12}},"Djelomično"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"("+Math.round((q._card?.interval||1)*((q._card?.ef||2.5)*0.8))+" dana)")),
              e("button",{onClick:()=>answer(2),style:{flex:1,padding:"14px 8px",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.4)",color:"var(--green)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"✓"),e("br"),e("span",{style:{fontSize:12}},"Znao/la sam!"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"("+Math.round((q._card?.interval||1)*(q._card?.ef||2.5))+" dana)"))
            ),
            e("div",{style:{textAlign:"center",fontSize:11,color:"var(--muted)",marginTop:6}},
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"1"),
              " Nisam znao · ",
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"2"),
              " Djelomično · ",
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"3"),
              " Znao sam"
            )
          )
        :e("div",{style:{textAlign:"center",color:"var(--muted)",fontSize:13,padding:"8px 0"}},
            "Klikni karticu pa ocijeni koliko ti je bilo lako")
    )
  );
}
function FlashcardScreen({onBack,userData,onUpdateUserData}){
  // ── Baza formula i pojmova (SUBJECT.flashcards overrides for fiz/kem/bio) ──
  const FORMULA_CARDS=SUBJECT.flashcards||[
    // TRIGONOMETRIJA
    {id:"t1",topic:"trig",front:"Što je osnovni trigonometrijski identitet?",back:"sin²x + cos²x = 1",hint:"Vrijedi za svaki kut x"},
    {id:"t2",topic:"trig",front:"Koliko iznosi sin 30°?",back:"sin 30° = 1/2",hint:"Upamti: 30-60-90 trokut"},
    {id:"t3",topic:"trig",front:"Koliko iznosi cos 60°?",back:"cos 60° = 1/2",hint:"Isti rezultat kao sin 30°"},
    {id:"t4",topic:"trig",front:"Koliko iznosi sin 90°?",back:"sin 90° = 1",hint:"Na vrhu jediničnog kružnice"},
    {id:"t5",topic:"trig",front:"Koliko iznosi cos 0°?",back:"cos 0° = 1",hint:"Na desnoj strani jediničnog kružnice"},
    {id:"t6",topic:"trig",front:"Što je formula za tan x?",back:"tan x = sin x / cos x",hint:"Vrijedi za sve x ≠ 90° + k·180°"},
    {id:"t7",topic:"trig",front:"Koliko iznosi sin 45°?",back:"sin 45° = √2 / 2",hint:"Jednakokračni pravokutni trokut"},
    {id:"t8",topic:"trig",front:"Koliko iznosi cos 30°?",back:"cos 30° = √3 / 2",hint:"30-60-90 trokut"},
    {id:"t9",topic:"trig",front:"Formula za sinus dvostrukog kuta?",back:"sin 2x = 2 · sin x · cos x",hint:"Važna formula za transformacije"},
    {id:"t10",topic:"trig",front:"Formula za kosinus dvostrukog kuta?",back:"cos 2x = cos²x - sin²x",hint:"Alternativno: 1 - 2sin²x ili 2cos²x - 1"},
    // KVADRATNA JEDNADŽBA
    {id:"k1",topic:"kv",front:"Što je kvadratna jednadžba i njeno opće rješenje?",back:"ax² + bx + c = 0\nx = (-b ± √(b²-4ac)) / 2a",hint:"Formula za rješavanje kvadratne jednadžbe"},
    {id:"k2",topic:"kv",front:"Što je diskriminanta kvadratne jednadžbe?",back:"D = b² - 4ac",hint:"D > 0: dva rješenja, D = 0: jedno, D < 0: nijedno realno"},
    {id:"k3",topic:"kv",front:"Vieteovi teoremi: suma i produkt korijena?",back:"x₁ + x₂ = -b/a\nx₁ · x₂ = c/a",hint:"Vrijedi za ax² + bx + c = 0"},
    {id:"k4",topic:"kv",front:"Tjeme parabole y = ax² + bx + c?",back:"x_T = -b / 2a\ny_T = c - b² / 4a",hint:"Ili uvrstiti x_T natrag u jednadžbu"},
    {id:"k5",topic:"kv",front:"Kada parabola ima tjeme ispod x-osi i otvara se prema gore?",back:"a > 0 i D > 0\n(dva presjeka s x-osi)",hint:"a > 0 = otvara gore, D > 0 = dva korijena"},
    // EKSPONENCIJALNE I LOG
    {id:"e1",topic:"exp",front:"Što je osnovno pravilo logaritma?",back:"logₐ(x·y) = logₐx + logₐy",hint:"Množenje ↔ zbrajanje u logaritmima"},
    {id:"e2",topic:"exp",front:"Logaritam potencije?",back:"logₐ(xⁿ) = n · logₐx",hint:"Eksponent izlazi kao faktor"},
    {id:"e3",topic:"exp",front:"Promjena baze logaritma?",back:"logₐx = log x / log a = ln x / ln a",hint:"Korisno za računanje na kalkulatoru"},
    {id:"e4",topic:"exp",front:"Koliko iznosi log 1?",back:"logₐ1 = 0",hint:"Vrijedi za svaku bazu a > 0, a ≠ 1"},
    {id:"e5",topic:"exp",front:"Koliko iznosi logₐa?",back:"logₐa = 1",hint:"Logaritam baze jednak je 1"},
    {id:"e6",topic:"exp",front:"Veza između eˣ i ln x?",back:"eˡⁿ ˣ = x i ln(eˣ) = x",hint:"Prirodni logaritam i e su inverzne funkcije"},
    {id:"e7",topic:"exp",front:"Što vrijedi za aˣ · aʸ?",back:"aˣ · aʸ = aˣ⁺ʸ",hint:"Osnovno pravilo potencija"},
    {id:"e8",topic:"exp",front:"Što vrijedi za (aˣ)ʸ?",back:"(aˣ)ʸ = aˣ·ʸ",hint:"Potencija potencije — množimo eksponente"},
    // DERIVACIJE
    {id:"d1",topic:"al",front:"Derivacija xⁿ?",back:"(xⁿ)' = n · xⁿ⁻¹",hint:"Eksponent postaje faktor, eksponent se smanji za 1"},
    {id:"d2",topic:"al",front:"Derivacija konstante c?",back:"(c)' = 0",hint:"Konstanta ne mijenja, njen prirast je nula"},
    {id:"d3",topic:"al",front:"Derivacija sin x?",back:"(sin x)' = cos x",hint:"Sinus ↔ kosinus pri deriviranju"},
    {id:"d4",topic:"al",front:"Derivacija cos x?",back:"(cos x)' = -sin x",hint:"Pazi na minus predznak!"},
    {id:"d5",topic:"al",front:"Derivacija eˣ?",back:"(eˣ)' = eˣ",hint:"Jedina funkcija koja je sama sebi derivacija"},
    {id:"d6",topic:"al",front:"Derivacija ln x?",back:"(ln x)' = 1/x",hint:"Vrijedi za x > 0"},
    {id:"d7",topic:"al",front:"Pravilo umnoška (u·v)?",back:"(u·v)' = u'·v + u·v'",hint:"Deriviraj prvu, ostavi drugu + ostavi prvu, deriviraj drugu"},
    {id:"d8",topic:"al",front:"Pravilo kvocijenta (u/v)?",back:"(u/v)' = (u'·v - u·v') / v²",hint:"Imenovalac se kvadrira"},
    // INTEGRALI
    {id:"i1",topic:"al",front:"Integral od xⁿ (n ≠ -1)?",back:"∫xⁿ dx = xⁿ⁺¹/(n+1) + C",hint:"Suprotno od deriviranja"},
    {id:"i2",topic:"al",front:"Integral od 1/x?",back:"∫(1/x) dx = ln|x| + C",hint:"Apsolutna vrijednost zbog definicijskog područja"},
    {id:"i3",topic:"al",front:"Integral od eˣ?",back:"∫eˣ dx = eˣ + C",hint:"Jedini integral jednak samoj funkciji"},
    {id:"i4",topic:"al",front:"Integral od sin x?",back:"∫sin x dx = -cos x + C",hint:"Pazi na minus!"},
    {id:"i5",topic:"al",front:"Integral od cos x?",back:"∫cos x dx = sin x + C",hint:"Bez minusa"},
    {id:"i6",topic:"al",front:"Što je Newton-Leibnizova formula?",back:"∫ₐᵇ f(x)dx = F(b) - F(a)",hint:"F je primitivna funkcija od f"},
    // ANALITIČKA GEOMETRIJA
    {id:"ag1",topic:"anal",front:"Jednadžba pravca kroz dvije točke?",back:"(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)",hint:"Ili: y = kx + l gdje k = (y₂-y₁)/(x₂-x₁)"},
    {id:"ag2",topic:"anal",front:"Nagib pravca kroz (x₁,y₁) i (x₂,y₂)?",back:"k = (y₂ - y₁) / (x₂ - x₁)",hint:"Promjena y / promjena x"},
    {id:"ag3",topic:"anal",front:"Uvjet paralelnosti dvaju pravaca?",back:"k₁ = k₂ (isti nagib)",hint:"Paralelni pravci imaju isti nagib, ali različit odsječak"},
    {id:"ag4",topic:"anal",front:"Uvjet okomitosti dvaju pravaca?",back:"k₁ · k₂ = -1",hint:"Umnožak nagiba okomitih pravaca je -1"},
    {id:"ag5",topic:"anal",front:"Jednadžba kružnice sa središtem (a,b) i polumjerom r?",back:"(x-a)² + (y-b)² = r²",hint:"Udaljenost točke od središta = r"},
    {id:"ag6",topic:"anal",front:"Udaljenost dviju točaka (x₁,y₁) i (x₂,y₂)?",back:"d = √((x₂-x₁)² + (y₂-y₁)²)",hint:"Pitagorin poučak u koordinatama"},
    {id:"ag7",topic:"anal",front:"Polovište segmenta (x₁,y₁)-(x₂,y₂)?",back:"H = ((x₁+x₂)/2 , (y₁+y₂)/2)",hint:"Aritmetičke sredine koordinata"},
    // NIZOVI
    {id:"n1",topic:"seq",front:"n-ti član aritmetičkog niza?",back:"aₙ = a₁ + (n-1)·d",hint:"a₁ = prvi član, d = razlika"},
    {id:"n2",topic:"seq",front:"Suma prvih n članova aritmetičkog niza?",back:"Sₙ = n · (a₁ + aₙ) / 2",hint:"Ili: Sₙ = n·a₁ + n(n-1)d/2"},
    {id:"n3",topic:"seq",front:"n-ti član geometrijskog niza?",back:"aₙ = a₁ · qⁿ⁻¹",hint:"a₁ = prvi član, q = kvocijent"},
    {id:"n4",topic:"seq",front:"Suma prvih n članova geometrijskog niza (q ≠ 1)?",back:"Sₙ = a₁ · (qⁿ - 1) / (q - 1)",hint:"Za q = 1: Sₙ = n·a₁"},
    {id:"n5",topic:"seq",front:"Suma beskonačnog geometrijskog niza (|q| < 1)?",back:"S = a₁ / (1 - q)",hint:"Vrijedi samo za |q| < 1"},
    // KOMBINATORIKA
    {id:"c1",topic:"comb",front:"Formula za permutacije n elemenata?",back:"Pₙ = n!",hint:"n! = 1·2·3·...·n"},
    {id:"c2",topic:"comb",front:"Formula za kombinacije C(n,k)?",back:"C(n,k) = n! / (k! · (n-k)!)",hint:"Broj načina odabira k iz n bez reda"},
    {id:"c3",topic:"comb",front:"Binomni teorem — razvoj (a+b)ⁿ?",back:"(a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ",hint:"Koeficijenti su binomni koeficijenti"},
    {id:"c4",topic:"comb",front:"Klasična definicija vjerojatnosti?",back:"P(A) = m / n",hint:"m = broj povoljnih, n = ukupni broj jednako mogućih ishoda"},
    {id:"c5",topic:"comb",front:"Vjerojatnost suprotnog događaja?",back:"P(Ā) = 1 - P(A)",hint:"P(A) + P(Ā) = 1 uvijek"},
    {id:"c6",topic:"comb",front:"Vjerojatnost unije dva međusobno isključiva događaja?",back:"P(A∪B) = P(A) + P(B)",hint:"Ako A i B ne mogu biti istovremeni"},
    // MATRICE
    {id:"m1",topic:"mat",front:"Kada je sustav linearnih jednadžbi određen?",back:"D ≠ 0 (determinanta matrice koeficijenata)",hint:"D ≠ 0 → jedno rješenje"},
    {id:"m2",topic:"mat",front:"Determinanta 2×2 matrice [[a,b],[c,d]]?",back:"det = a·d - b·c",hint:"Dijagonala minus antidijagonala"},
    {id:"m3",topic:"mat",front:"Cramerovo pravilo — rješenje x₁?",back:"x₁ = D₁ / D",hint:"D₁ = det matrice gdje je 1. stupac zamijenjen slobodnim članovima"},
    // FINANCIJSKA MATEMATIKA
    {id:"f1",topic:"fin",front:"Formula za složene kamate?",back:"K = K₀ · (1 + p/100)ⁿ",hint:"K₀ = početni kapital, p = kamatna stopa, n = broj perioda"},
    {id:"f2",topic:"fin",front:"Formula za jednostavne kamate?",back:"K = K₀ · (1 + n·p/100)",hint:"Kamata se ne pripisuje glavnici"},
    {id:"f3",topic:"fin",front:"Što je anuitet?",back:"Jednaki periodični iznosi za otplatu kredita ili štednju",hint:"Svaki anuitet = dio glavnice + kamata"},
    {id:"f4",topic:"fin",front:"Dekurzivno vs anticipativno obračunavanje?",back:"Dekurzivno: kamata na kraju perioda\nAnticipativno: kamata na početku perioda",hint:"Na maturi češće dekurzivno"},
    // SKUPOVI I BROJEVI
    {id:"b1",topic:"br",front:"Što su prirodni, cijeli, racionalni i realni brojevi?",back:"ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",hint:"Svaki skup je podskup sljedećeg"},
    {id:"b2",topic:"br",front:"Formula za apsolutnu vrijednost?",back:"|x| = x ako x≥0, -x ako x<0",hint:"Uvijek nenegativan broj"},
    {id:"b3",topic:"br",front:"Pitagorin poučak?",back:"a² + b² = c²",hint:"c = hipotenuza (najdulja stranica)"},
    {id:"b4",topic:"br",front:"Površina trokuta s osnovicom b i visinom h?",back:"P = b·h / 2",hint:"Polovica umnožka osnovice i visine"},
    {id:"b5",topic:"br",front:"Opseg i površina kružnice polumjera r?",back:"opseg = 2πr\npovršina = πr²",hint:"Opseg = duljina kružnice, površina = disk"},
  ];

  const TOPIC_NAMES={
    trig:"Trigonometrija",al:"Derivacije & Integrali",kv:"Kvadratna jednadžba",
    exp:"Eksponencijalne & Log.",anal:"Analitička geometrija",seq:"Nizovi",
    comb:"Kombinatorika",mat:"Matrice",fin:"Financijska matematika",br:"Skupovi & Brojevi"
  };

  const FC_KEY="mat_fc";
  const[fcStore,setFcStore]=React.useState(()=>{try{return JSON.parse(DS.get(FC_KEY)||"{}")}catch(e){return {}}});
  function saveFc(next){setFcStore(next);try{DS.set(FC_KEY,JSON.stringify(next))}catch(e){}}
  function cardStat(id){return fcStore[id]||{box:0,known:0,review:0};}
  const[selectedTopic,setSelectedTopic]=React.useState("sve");
  const[sessionCards,setSessionCards]=React.useState(null);
  const[cur,setCur]=React.useState(0);
  const[flipped,setFlipped]=React.useState(false);
  const[known,setKnown]=React.useState([]);
  const[review,setReview]=React.useState([]);
  const[done,setDone]=React.useState(false);
  const[xpGained,setXpGained]=React.useState(0);
  const awardedRef=React.useRef(false);
  function masteredCount(cards){return cards.filter(c=>(cardStat(c.id).box||0)>=4).length;}

  const topics=["sve",...[...new Set(FORMULA_CARDS.map(c=>c.topic))]];

  // Nagrada (XP + streak) na kraju sesije — jednom
  React.useEffect(()=>{
    if(done&&!awardedRef.current&&sessionCards&&sessionCards.length){
      awardedRef.current=true;
      const kp=Math.round(known.length/sessionCards.length*100);
      const gained=10+known.length*2+(kp>=80?15:0);
      setXpGained(gained);
      window._playSound&&window._playSound(kp>=80?"done":"click");
      if(onUpdateUserData) onUpdateUserData(prev=>{const ss=updateStreak(prev);return{...ss,xp:(prev.xp||0)+gained};});
    }
  },[done]);

  // Tipkovnica: space/Enter=flip, Z=znam, R=ponovi (samo u aktivnoj sesiji)
  React.useEffect(()=>{
    if(!sessionCards||done) return;
    function onKey(ev){
      if(ev.target&&/INPUT|TEXTAREA/.test(ev.target.tagName)) return;
      if(ev.code==="Space"||ev.code==="Enter"){ev.preventDefault();setFlipped(f=>!f);}
      else if(flipped&&(ev.key==="z"||ev.key==="Z")) markKnown();
      else if(flipped&&(ev.key==="r"||ev.key==="R")) markReview();
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[sessionCards,done,flipped,cur]);

  function startSession(){
    const pool=selectedTopic==="sve"
      ?FORMULA_CARDS
      :FORMULA_CARDS.filter(c=>c.topic===selectedTopic);
    // Weak-first: nepoznate/slabije kartice (niži box) prvo, nasumično unutar istog boxa
    const ordered=[...pool].map(c=>({c,box:cardStat(c.id).box||0,r:Math.random()}))
      .sort((a,b)=>a.box-b.box||a.r-b.r).map(x=>x.c);
    setSessionCards(ordered);
    setCur(0);setFlipped(false);setKnown([]);setReview([]);setDone(false);
    awardedRef.current=false;
  }

  function markKnown(){
    const id=sessionCards[cur].id;const st=cardStat(id);
    saveFc({...fcStore,[id]:{box:Math.min(5,(st.box||0)+1),known:(st.known||0)+1,review:st.review||0,last:Date.now()}});
    setKnown(k=>[...k,id]);
    next();
  }
  function markReview(){
    const id=sessionCards[cur].id;const st=cardStat(id);
    saveFc({...fcStore,[id]:{box:Math.max(0,(st.box||0)-1),known:st.known||0,review:(st.review||0)+1,last:Date.now()}});
    setReview(r=>[...r,id]);
    next();
  }
  function next(){
    setFlipped(false);
    setTimeout(()=>{
      if(cur>=sessionCards.length-1) setDone(true);
      else setCur(c=>c+1);
    },200);
  }

  // Odabir teme — početni ekran
  if(!sessionCards){
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"🃏 Flashcards — Formule & Pojmovi")
      ),
      e("div",{style:{maxWidth:560,margin:"0 auto",padding:"32px 20px 60px"}},
        e("div",{style:{
          borderRadius:18,padding:"28px 24px 24px",marginBottom:28,
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
          position:"relative",overflow:"hidden"
        }},
          e("div",{style:{position:"absolute",right:-8,bottom:-20,fontSize:100,
            fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"rgba(255,255,255,.55)",marginBottom:8}},"Flashcards"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:26,color:"#fff",marginBottom:8}},
            "Formule i pojmovi"),
          e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",lineHeight:1.6,marginBottom:14}},
            FORMULA_CARDS.length+" kartica · "+masteredCount(FORMULA_CARDS)+" savladano"),
          (()=>{const mp=Math.round(masteredCount(FORMULA_CARDS)/FORMULA_CARDS.length*100);return e("div",{style:{position:"relative",zIndex:1}},
            e("div",{style:{height:7,background:"rgba(255,255,255,.15)",borderRadius:99,overflow:"hidden"}},
              e("div",{style:{height:"100%",width:mp+"%",background:"linear-gradient(90deg,#6ee7a0,#50c878)",borderRadius:99,transition:"width .6s"}})),
            e("div",{style:{fontSize:11,color:"rgba(255,255,255,.6)",marginTop:5}},mp+"% formula savladano")
          );})()
        ),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Odaberi temu"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:24}},
          topics.map(t=>e("div",{key:t,
            onClick:()=>setSelectedTopic(t),
            style:{
              display:"flex",alignItems:"center",gap:12,padding:"12px 16px",
              background:selectedTopic===t?"var(--blue-d)":"var(--s1)",
              border:"1px solid "+(selectedTopic===t?"var(--blue-b)":"var(--bdr)"),
              borderRadius:11,cursor:"pointer",transition:"all .15s"
            }
          },
            e("div",{style:{
              width:8,height:8,borderRadius:"50%",flexShrink:0,
              background:selectedTopic===t?"var(--blue)":"var(--s3)"
            }}),
            e("div",{style:{flex:1,fontSize:13,fontWeight:selectedTopic===t?700:400,
              color:selectedTopic===t?"var(--blue)":"var(--text)"}},
              t==="sve"?"Sve teme ("+FORMULA_CARDS.length+" kartica)":(TOPIC_NAMES[t]||t)+" ("+FORMULA_CARDS.filter(c=>c.topic===t).length+" kartica)"
            ),
            (()=>{const tc=t==="sve"?FORMULA_CARDS:FORMULA_CARDS.filter(c=>c.topic===t);const mc=masteredCount(tc);return e("div",{style:{display:"flex",alignItems:"center",gap:6,flexShrink:0}},
              e("div",{style:{width:42,height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{height:"100%",width:Math.round(mc/tc.length*100)+"%",background:mc===tc.length?"var(--green)":"var(--gold)",borderRadius:99}})),
              e("span",{style:{fontSize:11,color:"var(--muted)",minWidth:30,textAlign:"right"}},mc+"/"+tc.length)
            );})()
          ))
        ),
        e("button",{className:"btn btn-blue",style:{width:"100%",padding:"14px",fontSize:15},
          onClick:startSession},"Kreni →")
      )
    );
  }

  // Završetak sesije
  if(done){
    const total=sessionCards.length;
    const knownPct=Math.round(known.length/total*100);
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
          onClick:()=>setSessionCards(null)},"← Natrag"),
        e("span",{className:"ntitle"},"🃏 Flashcards — Gotovo")
      ),
      e("div",{style:{maxWidth:560,margin:"0 auto",padding:"32px 20px 60px"}},
        e("div",{style:{
          borderRadius:18,padding:"32px 24px",marginBottom:24,textAlign:"center",
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)"
        }},
          e("div",{style:{fontSize:44,marginBottom:12}},knownPct>=80?"🏆":knownPct>=60?"✅":"📚"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:38,color:"#fff",marginBottom:6}},knownPct+"%"),
          e("div",{style:{fontSize:14,color:"rgba(255,255,255,.7)"}},
            "znaš "+known.length+" od "+total+" kartica"),
          xpGained>0&&e("div",{style:{display:"inline-flex",gap:8,marginTop:10}},
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(232,197,71,.2)",border:"1px solid rgba(232,197,71,.4)",color:"#fcd34d"}},"+"+xpGained+" XP"),
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff"}},"🔥 "+(userData?.streak||0)+" dana")
          )
        ),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}},
          e("div",{style:{background:"var(--green-d)",border:"1px solid rgba(61,214,140,.25)",
            borderRadius:14,padding:"16px",textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--green)"}},known.length),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Znam ✓")
          ),
          e("div",{style:{background:"var(--red-d)",border:"1px solid rgba(248,113,113,.25)",
            borderRadius:14,padding:"16px",textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--red)"}},review.length),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Za ponavljanje 🔁")
          )
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
          review.length>0&&e("button",{
            className:"btn btn-blue",style:{width:"100%",padding:"12px"},
            onClick:()=>{
              const reviewCards=sessionCards.filter(c=>review.includes(c.id));
              setSessionCards(reviewCards.sort(()=>Math.random()-.5));
              setCur(0);setFlipped(false);setKnown([]);setReview([]);setDone(false);
            }
          },"🔁 Ponovi greške ("+review.length+")"),
          e("button",{className:"btn btn-g",style:{width:"100%",padding:"12px"},
            onClick:startSession},"🔀 Nova sesija"),
          e("button",{className:"btn btn-g",style:{width:"100%",padding:"12px"},
            onClick:()=>setSessionCards(null)},"← Promijeni temu")
        )
      )
    );
  }

  // Aktivna sesija — kartica
  const card=sessionCards[cur];
  const progress=(cur/sessionCards.length)*100;

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:()=>setSessionCards(null)},"← Natrag"),
      e("span",{className:"ntitle"},"🃏 "+( TOPIC_NAMES[card.topic]||card.topic)),
      e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:"auto"}},
        (cur+1)+"/"+sessionCards.length)
    ),
    e("div",{style:{maxWidth:520,margin:"0 auto",padding:"20px 20px 60px"}},
      // Progress bar
      e("div",{className:"fc-progress"},
        e("div",{className:"fc-progress-fill",style:{width:progress+"%"}})
      ),

      // Kartica
      e("div",{className:"fc-scene",onClick:()=>setFlipped(f=>!f)},
        e("div",{className:"fc-card"+(flipped?" flipped":""),style:{minHeight:220}},
          // Prednja strana
          e("div",{className:"fc-face fc-front"},
            e("div",{className:"fc-label"},"Pitanje - klikni za odgovor"),
            e("div",{className:"fc-q",style:{flexDirection:"column",alignItems:"flex-start"}},
              e("div",null,card.front)
            ),
            e("div",{className:"fc-hint"},"👆 Klikni za prikaz odgovora")
          ),
          // Stražnja strana
          e("div",{className:"fc-face fc-back"},
            e("div",{className:"fc-label"},"Odgovor"),
            e("div",{className:"fc-q",style:{flexDirection:"column",alignItems:"flex-start",gap:8}},
              e("div",{className:"fc-formula"},card.back),
              card.hint&&e("div",{style:{fontSize:12,color:"rgba(255,255,255,.6)",
                marginTop:4,lineHeight:1.55}},
                "💡 "+card.hint)
            )
          )
        )
      ),

      // Gumbi — prikazani samo kad je flippano
      flipped
        ?e("div",{className:"fc-btns"},
            e("button",{className:"fc-btn-review",onClick:markReview},"🔁 Ponovi"),
            e("button",{className:"fc-btn-know",onClick:markKnown},"✓ Znam!")
          )
        :e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",padding:"8px 0"}},
            "Pokušaj se sjetiti odgovora, pa klikni karticu"),

      // Mini statistika
      e("div",{style:{display:"flex",justifyContent:"center",gap:20,marginTop:16,fontSize:12,color:"var(--muted)"}},
        e("span",{style:{color:"var(--green)"}},known.length+" ✓"),
        e("span",{style:{color:"var(--red)"}},review.length+" 🔁"),
        e("span",null,sessionCards.length-cur-1+" preostalo")
      )
    )
  );
}
export { srsLoad, getSrsDueCards, SpacedRepetitionScreen, FlashcardScreen };
