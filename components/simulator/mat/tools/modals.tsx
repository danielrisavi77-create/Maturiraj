// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Modali i preklapanja: nadogradnja, o aplikaciji, wrapped, odbrojavanje, disclaimer, onboarding, XP i dijeljenje. */
import React from 'react';
import { PLAN_NAME, SUBJECT, TOPIC_LABELS, askUpgrade, planCta } from '../core/state';
import { EXAMS, examTitle, nextMatura } from '../core/exams';
import { LEVEL_NAMES, getLevel, useEscape } from '../core/ui';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function UpgradeModal({onClose}){
  useEscape(true,onClose);
  return e("div",{
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},
    onClick:onClose
  },
    e("div",{
      onClick:ev=>ev.stopPropagation(),
      style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"32px 28px",maxWidth:400,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}
    },
      e("div",{style:{fontSize:44,marginBottom:16}},"✨"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},PLAN_NAME),
      e("div",{style:{fontSize:14,color:"var(--muted)",lineHeight:1.7,marginBottom:24}},
        "AI ocjena tvojeg postupka rješavanja dostupna je na ",
        e("strong",{style:{color:"var(--text)"}},PLAN_NAME+" planu"),
        ".",e("br"),
        PLAN_NAME+" korisnici dobivaju personaliziranu povratnu informaciju  -  AI analizira tvoj postupak, daje djelomične bodove i objašnjava točno gdje si pogriješio."
      ),
      e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
        e("button",{
          className:"btn btn-gold",
          style:{padding:"13px",fontSize:15,width:"100%"},
          onClick:()=>{ askUpgrade(); onClose(); }
        },planCta()),
        e("button",{className:"btn btn-g",style:{padding:"10px",width:"100%"},onClick:onClose},"Ne sada")
      ),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:16}},
        "Standardna objašnjenja s koracima rješenja dostupna su i bez "+PLAN_NAME+" plana."
      )
    )
  );
}
function XpFloater({gains}){
  if(!gains||gains.length===0) return null;
  return e("div",{className:"xp-floater"},
    gains.map((g,i)=>e("div",{key:i,className:"xp-bubble",
      style:{animationDelay:(i*0.3)+"s"}},
      e("span",null,"⚡"),
      e("span",null,"+"+g.xp+" XP"),
      g.levelUp&&e("span",{style:{fontSize:12,opacity:.85}},"↑ "+g.newLevel)
    ))
  );
}
function AboutModal({onClose}){
  return e("div",{
    style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",
      justifyContent:"center",padding:"20px",background:"rgba(10,15,40,.6)",
      backdropFilter:"blur(6px)"},
    onClick:onClose
  },
    e("div",{
      style:{
        maxWidth:440,width:"100%",borderRadius:20,overflow:"hidden",
        background:"linear-gradient(155deg,#0b1b3a 0%,#2d6ad4 50%,#4a90d9 100%)",
        boxShadow:"0 24px 60px rgba(0,0,0,.4)",position:"relative"
      },
      onClick:(ev)=>ev.stopPropagation()
    },
      // Header
      e("div",{style:{padding:"28px 28px 0",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}},
        e("div",null,
          e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
            e("div",{style:{width:44,height:44,borderRadius:12,
              background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:22}},"∑"),
            e("div",null,
              e("div",{style:{fontWeight:700,color:"var(--bg,#060910)",fontSize:16,fontFamily:"var(--fh)"}},
                "Discere "+SUBJECT.name),
              e("div",{style:{fontSize:11,color:"rgba(255,255,255,.55)",marginTop:1}},
                "Simulator državne mature · v2.0")
            )
          )
        ),
        e("button",{onClick:onClose,
          style:{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",
            borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--bg,#060910)",
            fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",
            flexShrink:0,fontFamily:"var(--fb)"}
        },"×")
      ),

      // Sadržaj
      e("div",{style:{padding:"20px 28px 28px",display:"flex",flexDirection:"column",gap:18}},

        // Opis
        e("p",{style:{fontSize:13,color:"rgba(255,255,255,.78)",lineHeight:1.7,margin:0}},
          "Kompletan simulator državne mature iz matematike  -  osnovna (B) i viša (A) razina. "+
          "Svi ispiti od 2010. do 2025., korak-po-korak rješenja, AI objašnjenja i pametno ponavljanje."
        ),

        // Separator
        e("div",{style:{height:1,background:"rgba(255,255,255,.1)"}}),

        // Sekcije
        e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"📚"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Izvor ispita"),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.82)",lineHeight:1.55}},
                "Ispitna pitanja vlasništvo su NCVVO-a (Nacionalni centar za vanjsko vrednovanje obrazovanja). "+
                "Koriste se isključivo u obrazovne svrhe.")
            )
          ),

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"⚖️"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Autorska prava"),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.82)",lineHeight:1.55}},
                "Objašnjenja, AI ocjenjivanje, analitički alati i dizajn aplikacije "+
                "© 2025 Discere. Sva prava pridržana.")
            )
          ),

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"🌐"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Kontakt"),
              e("a",{href:"https://discere.io",target:"_blank",
                style:{fontSize:13,color:"#93b4ff",textDecoration:"none",fontWeight:600}},
                "discere.io ↗")
            )
          )
        ),

        // Zatvori gumb
        e("button",{onClick:onClose,
          style:{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.22)",
            borderRadius:10,padding:"10px",cursor:"pointer",color:"var(--bg,#060910)",
            fontSize:13,fontWeight:600,fontFamily:"var(--fb)",width:"100%",
            marginTop:4}
        },"Zatvori")
      )
    )
  );
}
function _copyText(t){
  try{navigator.clipboard.writeText(t);return true;}
  catch(e){try{const ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);return true;}catch(e2){return false;}}
}
function wrappedToPng(d){
  return (async()=>{
    try{if(document.fonts&&document.fonts.ready)await document.fonts.ready;}catch(e){}
    const W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;
    const x=c.getContext("2d");if(!x)return false;
    const g=x.createRadialGradient(W*0.85,-H*0.15,80,W*0.5,H*0.5,H*1.15);
    g.addColorStop(0,"#2a5cb8");g.addColorStop(.45,"#163769");g.addColorStop(1,"#0a1730");
    x.fillStyle=g;x.fillRect(0,0,W,H);
    x.strokeStyle="rgba(255,255,255,.12)";x.lineWidth=2;x.strokeRect(44,44,W-88,H-88);
    const cx=W/2,serif='"DM Serif Display",Georgia,serif',sans='"Instrument Sans",system-ui,sans-serif';
    x.textAlign="center";x.textBaseline="alphabetic";
    x.fillStyle="#8fb4f5";x.font="600 38px "+sans;x.fillText("\u03a3  Discere",cx,140);
    x.fillStyle="rgba(143,180,245,.9)";x.font="700 24px "+sans;x.fillText("T V O J   M J E S E C",cx,196);
    x.fillStyle="#fff";x.font="76px "+serif;x.fillText(d.monthName+" "+d.year+".",cx,288);
    const trio=(val,lbl,px,yv,yl)=>{x.fillStyle="#fff";x.font="78px "+serif;x.fillText(val,px,yv);
      x.fillStyle="rgba(255,255,255,.6)";x.font="600 22px "+sans;x.fillText(lbl,px,yl);};
    trio(String(d.ispiti),"ISPITA",W*0.25,470,512);
    trio(d.mins+"\u2032","MINUTA",W*0.5,470,512);
    trio(String(d.streak),"DANA NIZ",W*0.75,470,512);
    trio(d.best+"%","NAJBOLJI",W*0.33,650,692);
    trio(d.avg+"%","PROSJEK",W*0.67,650,692);
    x.font="600 32px "+sans;
    let yy=812;
    if(d.topT){x.fillStyle="rgba(255,255,255,.92)";x.fillText("Najja\u010da tema:  "+d.topT.t+"  \u00b7  "+d.topT.p+"%",cx,yy);yy+=52;}
    if(d.weakT){x.fillStyle="rgba(255,255,255,.7)";x.fillText("Fokus za dalje:  "+d.weakT.t+"  \u00b7  "+d.weakT.p+"%",cx,yy);}
    x.strokeStyle="rgba(255,255,255,.15)";x.lineWidth=1;x.beginPath();x.moveTo(W*0.22,H-268);x.lineTo(W*0.78,H-268);x.stroke();
    x.fillStyle="#fff";x.font="52px "+serif;x.fillText("maturiraj.hr",cx,H-176);
    x.fillStyle="#8fb4f5";x.font="italic 30px "+serif;x.fillText("Matura nije sre\u0107a. Matura je priprema.",cx,H-118);
    return await new Promise(res=>{c.toBlob(b=>{
      if(!b){res(false);return;}
      try{const a=document.createElement("a");a.href=URL.createObjectURL(b);
        a.download="discere-"+String(d.monthName).toLowerCase()+"-"+d.year+".png";
        document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},100);res(true);}
      catch(e){res(false);}
    },"image/png");});
  })();
}
function parseHrDate(str){
  if(!str)return null;
  const m=String(str).match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
  return m?{d:+m[1],mo:+m[2],y:+m[3]}:null;
}
function WrappedModal({userData,onClose}){
  useEscape(true,onClose);
  const[copied,setCopied]=React.useState(null);
  const H=userData.history||[];
  const now=new Date();const mm=String(now.getMonth()+1).padStart(2,"0");const yy=now.getFullYear();
  const MJ=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"];
  const month=H.filter(h=>{const p=parseHrDate(h.date);return p&&p.mo===now.getMonth()+1&&p.y===yy;});
  const mins=Math.round(month.reduce((s,h)=>s+Object.values(h.qTimes||{}).reduce((a,b)=>a+b,0),0)/60);
  const best=month.length?Math.max(...month.map(h=>h.pct||0)):0;
  const avg=month.length?Math.round(month.reduce((s,h)=>s+(h.pct||0),0)/month.length):0;
  const agg={};month.forEach(h=>Object.entries(h.topic_breakdown||{}).forEach(([t,v])=>{const a=agg[t]=agg[t]||{c:0,n:0};a.c+=v.correct||0;a.n+=v.total||0;}));
  const tl=Object.entries(agg).filter(([,v])=>v.n>=3).map(([t,v])=>({t:TOPIC_LABELS[t]||t,p:Math.round(v.c/v.n*100)})).sort((a,b)=>b.p-a.p);
  const topT=tl[0],weakT=tl[tl.length-1];
  const week=H.filter(h=>{const p=parseHrDate(h.date);if(!p)return false;const d=new Date(p.y,p.mo-1,p.d);return (now-d)/86400000<=7;});
  const wAvg=week.length?Math.round(week.reduce((s,h)=>s+(h.pct||0),0)/week.length):0;
  const monthTxt="\uD83D\uDCCA Moj "+MJ[now.getMonth()]+" na Discere:\n\u2022 "+month.length+" ispita \u00b7 "+mins+" min u\u010denja\n\u2022 Najbolji rezultat: "+best+"% \u00b7 prosjek "+avg+"%\n\u2022 Streak: "+(userData.streak||0)+" dana \uD83D\uDD25"+(topT?"\n\u2022 Najja\u010da tema: "+topT.t+" ("+topT.p+"%)":"");
  const parentTxt="Pozdrav!\n\nMoj tjedni napredak u pripremi mature (matematika):\n\u2022 Rije\u0161eno ispita: "+week.length+"\n\u2022 Prosje\u010dni rezultat: "+wAvg+"%\n\u2022 Niz u\u010denja: "+(userData.streak||0)+" dana zaredom"+(weakT?"\n\u2022 Trenutni fokus: "+weakT.t:"")+"\n\n\u2014 poslano iz Discere (maturiraj.hr)";
  const stat=(v,l)=>e("div",{style:{textAlign:"center",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)",borderRadius:12,padding:"12px 6px"}},
    e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"#fff",marginBottom:2}},v),
    e("div",{style:{fontSize:9.5,letterSpacing:".05em",textTransform:"uppercase",color:"rgba(255,255,255,.6)"}},l));
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.66)",backdropFilter:"blur(4px)",zIndex:350,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:ev=>{if(ev.target===ev.currentTarget)onClose();}},
    e("div",{style:{width:"100%",maxWidth:420,borderRadius:20,overflow:"hidden",border:"1px solid rgba(74,144,217,.4)",boxShadow:"0 30px 70px -20px rgba(0,0,0,.65)",background:"radial-gradient(130% 130% at 85% -15%,#2a5cb8 0%,#163769 45%,#0a1730 100%)",padding:"24px 22px"}},
      e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}},
        e("div",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"#8fb4f5"}},"Discere \u00b7 Tvoj mjesec"),
        e("button",{onClick:onClose,style:{background:"rgba(255,255,255,.12)",border:"none",borderRadius:8,width:28,height:28,color:"#fff",cursor:"pointer",fontFamily:"var(--fb)"}},"\u2715")),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,color:"#fff",marginBottom:16,textTransform:"capitalize"}},MJ[now.getMonth()]+" "+yy+"."),
      e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}},
        stat(month.length,"ispita"),stat(mins+"\u2032","u\u010denja"),stat((userData.streak||0)+"\uD83D\uDD25","streak")),
      e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}},
        stat(best+"%","najbolji"),stat(avg+"%","prosjek")),
      topT&&e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.85)",marginBottom:4}},"\uD83D\uDCAA Najja\u010da tema: ",e("strong",null,topT.t+" ("+topT.p+"%)")),
      weakT&&tl.length>1&&e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.7)",marginBottom:16}},"\uD83C\uDFAF Fokus za sljede\u0107i mjesec: ",e("strong",null,weakT.t+" ("+weakT.p+"%)")),
      e("button",{onClick:async()=>{setCopied("img-load");const ok=await wrappedToPng({monthName:MJ[now.getMonth()],year:yy,ispiti:month.length,mins,streak:userData.streak||0,best,avg,topT,weakT});setCopied(ok?"img":"err");},
        style:{width:"100%",marginBottom:8,background:"linear-gradient(135deg,#e9b446,#ffd56b)",border:"none",borderRadius:10,padding:"12px",fontFamily:"var(--fb)",fontSize:13.5,fontWeight:800,color:"#3a2e0a",cursor:"pointer",boxShadow:"0 6px 18px -6px rgba(233,180,70,.5)"}},
        copied==="img-load"?"\u23f3 Pripremam sliku\u2026":copied==="img"?"\u2713 Slika spremljena!":"\uD83D\uDCF8 Spremi sliku za dijeljenje"),
      e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        e("button",{onClick:()=>{setCopied(_copyText(monthTxt)?"m":"err");},style:{flex:1,minWidth:140,background:"#fff",border:"none",borderRadius:10,padding:"10px 12px",fontFamily:"var(--fb)",fontSize:12.5,fontWeight:800,color:"#0b1b3a",cursor:"pointer"}},copied==="m"?"\u2713 Kopirano!":"\uD83D\uDCCB Kopiraj tekst"),
        e("button",{onClick:()=>{const ok=_copyText(parentTxt);setCopied(ok?"p":"err");try{window.location.href="mailto:?subject="+encodeURIComponent("Tjedni napredak \u2014 matura matematika")+"&body="+encodeURIComponent(parentTxt);}catch(e2){}},style:{flex:1,minWidth:140,background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.28)",borderRadius:10,padding:"10px 12px",fontFamily:"var(--fb)",fontSize:12.5,fontWeight:800,color:"#fff",cursor:"pointer"}},copied==="p"?"\u2713 Spremno!":"\u2709\uFE0F Tjedni \u2014 roditelju")),
      copied==="err"&&e("div",{style:{fontSize:11,color:"#fca5a5",marginTop:8}},"Kopiranje nije uspjelo \u2014 ozna\u010di tekst ru\u010dno.")
    ));
}
function __pickDDayExam(razina, history){
  try{
    var keys=Object.keys(EXAMS).filter(function(k){return (EXAMS[k]&&EXAMS[k].razina)===razina;});
    if(!keys.length) return null;
    var done={}; (history||[]).forEach(function(h){ if(h&&h.examKey) done[h.examKey]=1; });
    var unused=keys.filter(function(k){return !done[k];});
    var pool=unused.length?unused:keys;
    return pool[Math.floor(Math.random()*pool.length)];
  }catch(e){ return null; }
}
function DDayModal(props){
  var e=React.createElement;
  var razina0=(props.razina==="A")?"A":"B", history=props.history||[], onStart=props.onStart, onClose=props.onClose;
  var _r=React.useState(razina0), raz=_r[0], setRaz=_r[1];
  var _e=React.useState(""), err=_e[0], setErr=_e[1];
  var mat=nextMatura(), days=mat.days;
  function start(){ var key=__pickDDayExam(raz, history); if(!key){ setErr("Nema dostupnih ispita za razinu "+raz+"."); return; } onStart(key); }
  return e("div",{style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,.55)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fi .2s"},onClick:onClose},
    e("div",{onClick:function(ev){ev.stopPropagation();},style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:20,maxWidth:440,width:"100%",padding:"28px 26px",boxShadow:"var(--shadow)",animation:"mcIn .35s"}},
      e("div",{style:{fontSize:42,textAlign:"center",marginBottom:6}},"\ud83c\udf93"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,fontWeight:800,textAlign:"center",marginBottom:6}},"Probna matura"),
      e("p",{style:{color:"var(--muted)",fontSize:13.5,lineHeight:1.6,textAlign:"center",marginBottom:16}},"Generalna proba pod stvarnim uvjetima: nasumi\u010dan pun ispit, s vremenskim ograni\u010denjem i bez pomo\u0107nih alata. Najbolji test prave spremnosti."),
      (days!=null&&!mat.today)&&e("div",{style:{textAlign:"center",marginBottom:18}},e("span",{style:{color:days<=14?"var(--red)":"var(--blue)",fontWeight:800,fontSize:18}},days),e("span",{style:{color:"var(--muted)",fontSize:13}}," "+(days===1?"dan":"dana")+" do "+mat.label)),
      e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginBottom:6}},
        ["A","B"].map(function(r){return e("button",{key:r,onClick:function(){setRaz(r);setErr("");},style:{cursor:"pointer",borderRadius:10,padding:"8px 18px",fontSize:14,fontWeight:700,border:"1px solid "+(raz===r?"var(--blue)":"var(--bdr)"),background:raz===r?"var(--blue-d)":"var(--s2)",color:raz===r?"var(--blue)":"var(--text)",transition:"all .15s"}},"Razina "+r);})),
      e("div",{style:{textAlign:"center",fontSize:11,color:"var(--muted)",marginBottom:18}},"A = vi\u0161a \u00b7 B = osnovna razina"),
      err&&e("div",{style:{textAlign:"center",fontSize:12.5,color:"var(--red)",marginBottom:12}},err),
      e("button",{onClick:start,className:"shimmer-btn",style:{width:"100%",boxSizing:"border-box",background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"13px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px -4px rgba(74,144,217,.55)",marginBottom:8}},"Zapo\u010dni probu \u2192"),
      e("button",{onClick:onClose,style:{width:"100%",background:"none",border:"none",color:"var(--muted)",fontSize:13,fontWeight:600,cursor:"pointer",padding:"4px"}},"Odustani")
    )
  );
}
function DisclaimerModal({onClose}){
  const totalExams=Object.keys(EXAMS).length;
  const totalQs=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.length,0);
  return e("div",{className:"disclaimer-modal-overlay",onClick:onClose},
    e("div",{className:"disclaimer-modal",onClick:ev=>ev.stopPropagation()},
      e("div",{className:"dm-tag"},"ℹ️ O aplikaciji"),
      e("h3",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:10}},"Discere  -  "+SUBJECT.name),
      e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7}},
        "Simulator državne mature iz matematike  -  osnovna (B) i viša (A) razina. Trenutno sadrži ",
        e("strong",null,totalExams+" ispita"),
        " s više od ",
        e("strong",null,totalQs+" zadataka"),
        "  -  uz korak-po-korak rješenja, analitiku napretka i personalizirane preporuke."
      ),
      e("div",{className:"dm-section"},
        e("p",null,
          e("strong",null,"Što simulator nudi: "),
          "simulacija ispita, vježbanje, vježbanje s timerom, virtualni ispit, tematske sesije, dnevni izazov, pametno ponavljanje (SRS), spremljena pitanja, praćenje grešaka i PDF izvještaj."
        ),
        e("p",null,
          e("strong",null,"Ispitna pitanja"),
          " su vlasništvo ",
          e("a",{href:"https://www.ncvvo.hr",target:"_blank",rel:"noopener"},"NCVVO-a"),
          " i preuzeta su iz javno objavljenih ispita državne mature. Discere je autor svih objašnjenja, rješenja i analitičkih alata."
        )
      ),
      e("div",{className:"dm-section"},
        e("p",null,
          e("strong",null,"Format ispita B razine: "),
          "~16 MC + ~12 kratkih odgovora + opisni zadaci. Trajanje: 150 minuta."
        ),
        e("p",null,
          e("strong",null,"Format ispita A razine: "),
          "~15 MC + kratki i produženi odgovori. Trajanje: 180 minuta."
        ),
        e("p",{style:{marginBottom:0}},
          "Kontakt: ",
          e("a",{href:"mailto:info@discere.app",style:{color:"var(--blue)"}},"info@discere.app"),
          " · © "+new Date().getFullYear()+" Discere · Ispitna pitanja: © NCVVO"
        )
      ),
      e("div",{style:{marginTop:20,textAlign:"right"}},
        e("button",{className:"btn btn-gold",onClick:onClose},"Razumijem")
      )
    )
  );
}
function ShareCard({exam,pct,g,gc,cor,total,userData}){
  const[copied,setCopied]=useState(false);
  const gradeEmoji={1:"😔",2:"😐",3:"🙂",4:"😊",5:"🏆"};
  const levelName=LEVEL_NAMES[getLevel(userData?.xp||0)]||"Početnik";

  function copyText(){
    const text=`${SUBJECT.shareTitle}\n${exam.season==="session"?exam.label:exam.year+". "+exam.label} (${exam.razina==="A"?"Viša":"Osnovna"} razina)\n\nOcjena: ${g}/5 (${pct}%)\nTočnih: ${cor}/${total}\n\nVježbao/la na Discere 🎓`;
    navigator.clipboard?.writeText(text).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});
  }

  return e("div",{className:"share-card-wrap"},
    e("div",{className:"share-card-inner"},
      e("div",{className:"share-card-logo"},SUBJECT.shareLogo),
      e("div",{className:"share-grade-big"},gradeEmoji[g]||"🎓"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:56,color:"var(--bg,#060910)",lineHeight:1,marginBottom:6,textShadow:"0 2px 12px rgba(0,0,0,.3)"}},g+"/5"),
      e("div",{className:"share-pct"},pct+"% · "+cor+"/"+total+" točnih"),
      e("div",{className:"share-tags"},
        e("span",{className:"share-tag"},examTitle(exam)),
        e("span",{className:"share-tag"},exam.razina==="A"?"Viša razina (A)":"Osnovna razina (B)"),
        (userData?.xp||0)>0&&e("span",{className:"share-tag"},levelName+" · "+(userData.xp||0)+" XP"),
        (userData?.streak||0)>1&&e("span",{className:"share-tag"},"🔥 "+(userData.streak)+" dana zaredom")
      ),
      e("div",{className:"share-btns"},
        e("button",{className:"btn-share btn-share-copy",onClick:copyText},
          copied?"✓ Kopirano!":"📋 Kopiraj rezultat"
        )
      )
    )
  );
}
function OnboardingModal({initialRazina,initialGrade,onSave,onClose,canClose}){
  const[raz,setRaz]=React.useState(initialRazina||null);
  const[grd,setGrd]=React.useState(initialGrade||null);
  const gCol={2:"var(--red)",3:"var(--gold)",4:"var(--blue)",5:"var(--green)"};
  const razCard=(key,emoji,name,desc)=>{
    const on=raz===key;
    return e("button",{key,onClick:()=>setRaz(key),style:{textAlign:"left",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:14,padding:"15px 16px",border:"2px solid "+(on?"var(--blue)":"var(--bdr)"),background:on?"var(--blue-d)":"var(--s1)",display:"flex",gap:13,alignItems:"flex-start",transition:"all .15s",position:"relative",width:"100%"}},
      e("div",{style:{fontSize:24,flexShrink:0}},emoji),
      e("div",{style:{minWidth:0}},
        e("div",{style:{fontSize:15,fontWeight:800,color:on?"var(--blue)":"var(--text)",marginBottom:3}},name),
        e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},desc)
      ),
      on&&e("div",{style:{position:"absolute",top:12,right:14,width:20,height:20,borderRadius:"50%",background:"var(--blue)",color:"#fff",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}},"\u2713")
    );
  };
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.62)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:16},
    onClick:e2=>{if(canClose&&e2.target===e2.currentTarget)onClose();}},
    e("div",{style:{background:"var(--bg)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",overflow:"auto",boxShadow:"0 30px 70px -20px rgba(0,0,0,.6)",border:"1px solid var(--bdr)"}},
      e("div",{style:{position:"relative",overflow:"hidden",padding:"26px 26px 22px",background:"radial-gradient(135% 130% at 86% -20%,#2a5cb8 0%,#163769 44%,#0a1730 100%)"}},
        e("div",{style:{position:"absolute",right:-12,bottom:-28,fontSize:120,fontFamily:"var(--fh)",color:"rgba(255,255,255,.05)",lineHeight:1,pointerEvents:"none",userSelect:"none"}},"\u2211"),
        canClose&&e("button",{onClick:onClose,style:{position:"absolute",top:14,right:16,background:"rgba(255,255,255,.13)",border:"none",borderRadius:8,width:30,height:30,color:"#fff",fontSize:15,cursor:"pointer",fontFamily:"var(--fb)"}},"\u2715"),
        e("div",{style:{position:"relative",zIndex:1,fontSize:11,fontWeight:800,letterSpacing:".13em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:8}},"Discere"),
        e("div",{style:{position:"relative",zIndex:1,fontFamily:"var(--fh)",fontSize:24,color:"#fff",lineHeight:1.2,marginBottom:6}},"Postavimo tvoj plan"),
        e("div",{style:{position:"relative",zIndex:1,fontSize:13,color:"rgba(255,255,255,.75)",lineHeight:1.55}},"Dvije stvari i sve je prilago\u0111eno tebi \u2014 traje 10 sekundi.")
      ),
      e("div",{style:{padding:"22px 24px 24px"}},
        e("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11}},"Koju razinu mature pola\u017ee\u0161?"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:22}},
          razCard("B","\uD83D\uDCD8","Osnovna razina (B)","Standardna razina. Dovoljna za upis na ve\u0107inu fakulteta."),
          razCard("A","\uD83D\uDCD7","Vi\u0161a razina (A)","Zahtjevnija. Za tehni\u010dke/prirodoslovne fakultete koji tra\u017ee A.")
        ),
        e("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11}},"Ciljana ocjena ",e("span",{style:{fontWeight:500,textTransform:"none",letterSpacing:0,color:"var(--muted)"}},"\u00b7 mo\u017ee\u0161 presko\u010diti")),
        e("div",{style:{display:"flex",gap:8,marginBottom:24}},
          [2,3,4,5].map(g=>{const on=grd===g;return e("button",{key:g,onClick:()=>setGrd(on?null:g),style:{flex:1,cursor:"pointer",fontFamily:"var(--fh)",fontSize:20,fontWeight:700,padding:"12px 0",borderRadius:12,border:"2px solid "+(on?gCol[g]:"var(--bdr)"),background:on?gCol[g]:"var(--s1)",color:on?"#fff":"var(--text)",transition:"all .15s"}},g);})
        ),
        e("button",{onClick:()=>{if(raz)onSave(raz,grd);},disabled:!raz,style:{width:"100%",border:"none",cursor:raz?"pointer":"not-allowed",fontFamily:"var(--fb)",fontSize:15,fontWeight:800,padding:"15px",borderRadius:13,color:raz?"#fff":"var(--muted)",background:raz?"linear-gradient(135deg,#2d6ad4 0%,#143a7a 100%)":"var(--s2)",boxShadow:raz?"0 12px 26px -10px rgba(45,106,212,.6)":"none",transition:"all .15s"}},
          raz?"Kreni \u2192":"Odaberi razinu")
      )
    )
  );
}
export { UpgradeModal, XpFloater, AboutModal, WrappedModal, DDayModal, DisclaimerModal, ShareCard, OnboardingModal };
