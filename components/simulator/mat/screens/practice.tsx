// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Vjezbanje izvan ispita: AI zadaci (CAS provjera), filtar po temama, pogreske i adaptivni trening. */
import React from 'react';
import { DS, IS_PRO, TOPIC_LABELS, __MAT } from '../core/state';
import { EXAMS, isExamLocked } from '../core/exams';
import { __AI_LAST_ERR, __aiPost, __ensureNerdamer, __imgKey } from '../core/runtime';
import { renderOptContent, renderQText } from '../core/mathText';
import { LL, TBDG, TLBL } from '../core/ui';
import { chk } from '../core/grading';
import { grade } from '../core/progress';
import { AnswerHelper } from '../tools/question';
const{createElement:e,useState,Fragment}=React;
var __CASND=(typeof window!=="undefined"&&window.nerdamer)?window.nerdamer:null;
function __casNorm(s){return String(s==null?"":s)
  .replace(/\u2212/g,"-").replace(/\u2264/g,"<=").replace(/\u2265/g,">=")
  .replace(/[\u00b7\u00d7\u2219]/g,"*").replace(/\u221a/g,"sqrt").replace(/\u03c0/g,"pi")
  .replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3")
  .replace(/(\d),(\d)/g,"$1.$2").trim();}
function __casNum(x){try{return parseFloat((__CASND||window.nerdamer)(x).evaluate().text("decimals"));}catch(e){return NaN;}}
function __casDisp(s){s=String(s)
  .replace(/\*\*/g,"^").replace(/sqrt/g,"\u221a").replace(/\bpi\b/g,"\u03c0")
  .replace(/\^(\([^)]*\)|[A-Za-z0-9]+(?:\.[0-9]+)?)/g,function(_,x){return "^"+x;})
  .replace(/\*/g,"\u00b7").replace(/(\d)\.(\d)/g,"$1,$2").replace(/-/g,"\u2212");
  return s;}
function __casCheck(it){
  var ND=__CASND||window.nerdamer; if(!ND||!it||!it.izraz) return {ok:false};
  try{
    var v=it["var"]||"x";
    if(it.tip==="jednadzba"){
      var p=__casNorm(it.izraz).split("="); if(p.length<2) return {ok:false};
      var sol=ND.solve("("+p[0]+")-("+p[1]+")",v);
      var arr=sol.toString().replace(/^\[|\]$/g,"").split(",").map(function(x){return x.trim();}).filter(Boolean);
      var nums=arr.map(__casNum).filter(isFinite);
      if(!nums.length) return {ok:false};
      if(!arr.every(function(r){return !/[a-zA-Z]/.test(r);})) return {ok:false};var clean=arr.every(function(r){var m=r.match(/\/(\d+)/);return !m||parseInt(m[1],10)<=999;});
      if(!clean) return {ok:false};
      return {ok:true, nums:nums.sort(function(a,b){return a-b;}), display:arr.map(__casDisp).join(",  ")};
    }
    if(it.tip==="derivacija"){ var d=ND.diff(__casNorm(it.izraz),v).toString(); return d?{ok:true,sym:d,display:__casDisp(d)}:{ok:false}; }
    if(it.tip==="pojednostavi"){ var ex=ND(__casNorm(it.izraz)).expand().toString(); return ex?{ok:true,sym:ex,display:__casDisp(ex)}:{ok:false}; }
    if(it.tip==="vrijednost"){ var n=__casNum(__casNorm(it.izraz)); return isFinite(n)?{ok:true,val:n,display:__casDisp(String(n))}:{ok:false}; }
    return {ok:false};
  }catch(e){ return {ok:false}; }
}
function __casGrade(it, studentRaw){
  var ND=__CASND||window.nerdamer;
  var chk=__casCheck(it); if(!chk.ok) return {error:1};
  var stv=__casNorm(studentRaw); if(!stv) return {correct:false, expect:chk.display};
  try{
    if(it.tip==="jednadzba"){
      var sn=stv.split(/[,; ]+/).map(__casNum).filter(isFinite).sort(function(a,b){return a-b;});
      if(sn.length!==chk.nums.length) return {correct:false, expect:chk.display};
      return {correct:chk.nums.every(function(x,i){return Math.abs(x-sn[i])<1e-6;}), expect:chk.display};
    }
    if(it.tip==="vrijednost"){ return {correct:Math.abs(__casNum(stv)-chk.val)<1e-6, expect:chk.display}; }
    var diff=ND("("+stv+")-("+chk.sym+")").expand().toString();
    if(diff==="0") return {correct:true, expect:chk.display};
    var ok=true,v=it["var"]||"x"; for(var k=0;k<3;k++){var xv=2+k;
      var a=__casNum(ND(stv).sub(v,xv).toString()), b=__casNum(ND(chk.sym).sub(v,xv).toString());
      if(!(isFinite(a)&&isFinite(b)&&Math.abs(a-b)<1e-6)){ok=false;break;} }
    return {correct:ok, expect:chk.display};
  }catch(e){ return {correct:false, expect:chk.display}; }
}
function __aiGenQuestions(opts){
  var tema=opts.tema||"mije\u0161ano", razina=opts.razina||"B", n=opts.count||6;
  var prompt="Ti si sastavlja\u010d zadataka za hrvatsku dr\u017eavnu maturu iz matematike. Generiraj "+n+" RAZLI\u010cITIH zadataka razine "+razina+" iz teme: "+tema+". "
    +"Dozvoljeni tipovi (SAMO ovi, jer se rje\u0161enje provjerava simboli\u010dkim ra\u010dunalom): "
    +"jednadzba (rije\u0161i jednad\u017ebu), derivacija (deriviraj izraz), pojednostavi (raspi\u0161i/sredi izraz), vrijednost (izra\u010dunaj broj). "
    +"Za 'jednadzba' koristi ISKLJU\u010cIVO cijele ili jednostavne racionalne koeficijente i rje\u0161enja (npr. x=2, x=\u22123, x=1/2); izbjegavaj iracionalna rje\u0161enja. "
    +"Polje 'izraz' MORA biti strojno \u010ditljivo (* za mno\u017eenje, ^ za potenciju, sqrt() za korijen): za jednad\u017ebu obavezno sadr\u017ei '=' (npr. x^2-5*x+6=0), za derivaciju/pojednostavi samo izraz (npr. x^3+2*x), za vrijednost broj\u010dani izraz (npr. 2^5+3*4). "
    +"U polju 'pitanje' koristi lijep zapis (x\u00b2, \u221a, razlomci, \u00b7) i NCVVO stil. "
    +"Vrati ISKLJU\u010cIVO JSON niz (bez markdowna, bez backtickova):\n"
    +'[{"tip":"jednadzba","tema":"kratka tema","pitanje":"Rije\u0161i jednad\u017ebu x\u00b2 \u2212 5x + 6 = 0.","izraz":"x^2-5*x+6=0","var":"x"}]';
  // Rjesenja provjerava CAS, pa ga ucitaj prije poziva.
  return __ensureNerdamer().then(function(){ return __aiPost(prompt,1500); })
    .then(function(data){
      if(data.error||!data.content) throw new Error("api");
      var t=(data.content[0]&&data.content[0].text)||"[]";
      var arr=JSON.parse(t.replace(/```json|```/g,"").trim());
      if(!Array.isArray(arr)) throw new Error("fmt");
      var out=[]; arr.forEach(function(it){ var c=__casCheck(it); if(c.ok){ it._ans=c; out.push(it); } });
      return out;
    });
}
function AIPractice(props){
  var e=React.createElement;
  var onBack=props.onBack, onHome=props.onHome, userData=props.userData, onUpdateUserData=props.onUpdateUserData;
  var _pp=React.useState(0), bump=_pp[1];
  React.useEffect(function(){var f=function(){bump(function(x){return x+1;});};window.addEventListener("discere-pro",f);return function(){window.removeEventListener("discere-pro",f);};},[]);
  var pro=IS_PRO;
  var razina=(userData&&userData.razina)||DS.get("mat_razina")||"B";
  var TOPICS=[
    {id:"mije\u0161ano",label:"Mije\u0161ano"},
    {id:"Linearne i kvadratne jednad\u017ebe",label:"Jednad\u017ebe"},
    {id:"Algebarski izrazi",label:"Izrazi"},
    {id:"Derivacije",label:"Derivacije"},
    {id:"Potencije i korijeni",label:"Potencije"}
  ];
  var _t=React.useState("mije\u0161ano"), tema=_t[0], setTema=_t[1];
  var _s=React.useState("idle"), st=_s[0], setSt=_s[1];
  var _q=React.useState([]), qs=_q[0], setQs=_q[1];
  var _i=React.useState(0), idx=_i[0], setIdx=_i[1];
  var _a=React.useState(""), ans=_a[0], setAns=_a[1];
  var _f=React.useState(null), fb=_f[0], setFb=_f[1];
  var _sc=React.useState({c:0,t:0}), sc=_sc[0], setSc=_sc[1];
  var _e=React.useState(null), expl=_e[0], setExpl=_e[1];
  var _es=React.useState("idle"), explS=_es[0], setExplS=_es[1];

  function generate(){
    if(!pro) return;
    setSt("loading"); setQs([]); setIdx(0); setAns(""); setFb(null); setSc({c:0,t:0}); setExpl(null); setExplS("idle");
    __aiGenQuestions({tema:tema,count:6,razina:razina}).then(function(out){
      if(!out||!out.length){ setSt("error"); return; }
      setQs(out); setSt("active");
    }).catch(function(){ setSt("error"); });
  }
  function submit(){
    if(fb||!ans.trim()) return;
    var g=__casGrade(qs[idx], ans);
    if(g.error){ goNext(); return; }
    setFb(g); setSc(function(p){return {c:p.c+(g.correct?1:0), t:p.t+1};});
  }
  function goNext(){
    setFb(null); setAns(""); setExpl(null); setExplS("idle");
    if(idx+1>=qs.length){ setSt("done"); try{ if(onUpdateUserData) onUpdateUserData(function(p){return Object.assign({},p,{xp:(p.xp||0)+Math.round(sc.c*4)});}); }catch(x){} }
    else setIdx(idx+1);
  }
  function explain(){
    if(explS==="loading") return; var it=qs[idx]; setExplS("loading");
    var prompt="Rije\u0161i korak po korak (hrvatski, pedago\u0161ki, kratko) ovaj maturalni zadatak i objasni svaki korak. Vrati ISKLJU\u010cIVO JSON: {\"koraci\":[\"...\"],\"rjesenje\":\"konacno\"}.\nZadatak: "+it.pitanje+"\nTo\u010dno rje\u0161enje (provjereno): "+(it._ans&&it._ans.display)+"\n";
    __aiPost(prompt,900)
      .then(function(d){var t=(d.content&&d.content[0]&&d.content[0].text)||"{}";var o=JSON.parse(t.replace(/```json|```/g,"").trim());setExpl(o);setExplS("done");}).catch(function(){setExplS("error");});
  }

  var hdr=e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:22}},
    e("button",{onClick:onBack,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"var(--text)",fontSize:13,fontWeight:600}},"\u2190 Natrag"),
    e("div",{style:{fontFamily:"var(--fh)",fontSize:20,fontWeight:800,display:"flex",alignItems:"center",gap:8}},"AI vje\u017eba",
      e("span",{style:{fontSize:10,fontWeight:800,letterSpacing:".06em",color:"var(--gold)",background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderRadius:99,padding:"2px 8px"}},"PRO"))
  );
  function wrap(inner){return e("div",{className:"home",style:{paddingTop:18}}, hdr, inner);}

  if(!pro){
    return wrap(e("div",{style:{textAlign:"center",padding:"48px 20px",maxWidth:440,margin:"0 auto"}},
      e("div",{style:{fontSize:46,marginBottom:10}},"\u2728"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:20,fontWeight:800,marginBottom:8}},"Beskona\u010dno novih zadataka"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:20}},"AI generira sva\u017ee zadatke iz tvojih slabijih tema, a svaki je provjeren simboli\u010dkim ra\u010dunalom prije nego ga vidi\u0161. Dostupno u Pro paketu."),
      e("button",{onClick:function(){try{window.parent.postMessage({type:"DISCERE_UPGRADE"},"*");}catch(x){}},className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"12px 22px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"Otklju\u010daj Pro \u2192")
    ));
  }

  if(st==="idle"){
    return wrap(e("div",{style:{maxWidth:560,margin:"0 auto"}},
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:18}},"Odaberi temu \u2014 AI \u0107e generirati nove zadatke, a to\u010dnost svakog provjerava simboli\u010dko ra\u010dunalo. Razina: ",e("b",{style:{color:"var(--text)"}},razina),"."),
      e("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:24}},
        TOPICS.map(function(tp){return e("button",{key:tp.id,onClick:function(){setTema(tp.id);},
          style:{cursor:"pointer",borderRadius:99,padding:"8px 14px",fontSize:13,fontWeight:600,
            border:"1px solid "+(tema===tp.id?"var(--blue)":"var(--bdr)"),
            background:tema===tp.id?"var(--blue-d)":"var(--s1)",
            color:tema===tp.id?"var(--blue)":"var(--text)",transition:"all .15s"}},tp.label);})
      ),
      e("button",{onClick:generate,className:"shimmer-btn",style:{display:"inline-flex",alignItems:"center",gap:8,background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"13px 24px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px -4px rgba(74,144,217,.55)"}},"\u2728 Generiraj zadatke")
    ));
  }

  if(st==="loading"){
    return wrap(e("div",{style:{maxWidth:620,margin:"0 auto"}},
      e("div",{style:{display:"flex",alignItems:"center",gap:10,color:"var(--muted)",fontSize:14,marginBottom:18}},
        e("span",{className:"ai-spin"}),"AI sastavlja zadatke i provjerava rje\u0161enja\u2026"),
      e("div",{style:{display:"flex",flexDirection:"column",gap:14}},
        [0,1,2].map(function(k){return e("div",{key:k,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,padding:20}},
          e("div",{className:"ai-sk",style:{height:13,width:"38%",marginBottom:14}}),
          e("div",{className:"ai-sk",style:{height:11,width:"86%",marginBottom:8}}),
          e("div",{className:"ai-sk",style:{height:11,width:"64%"}})
        );})
      )
    ));
  }

  if(st==="error"){
    return wrap(e("div",{style:{textAlign:"center",padding:"40px 20px",maxWidth:440,margin:"0 auto"}},
      e("div",{style:{fontSize:40,marginBottom:10}},"\u26a0\ufe0f"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:18}},(__AI_LAST_ERR||"Nije uspjelo dohvatiti zadatke. Provjeri vezu i poku\u0161aj ponovno.")),
      e("button",{onClick:generate,style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"10px 18px",fontSize:14,fontWeight:600,cursor:"pointer",color:"var(--text)"}},"Poku\u0161aj ponovno")
    ));
  }

  if(st==="done"){
    var pct=sc.t?Math.round(sc.c/sc.t*100):0;
    return wrap(e("div",{style:{textAlign:"center",padding:"36px 20px",maxWidth:460,margin:"0 auto"}},
      e("div",{style:{fontSize:48,marginBottom:6}},pct>=80?"\ud83c\udfc6":pct>=50?"\ud83d\udcaa":"\ud83d\udcda"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,fontWeight:800,marginBottom:4}},sc.c+" / "+sc.t),
      e("p",{style:{color:"var(--muted)",fontSize:14,marginBottom:6}},"to\u010dnih odgovora ("+pct+"%)"),
      e("p",{style:{color:"var(--gold)",fontSize:13,fontWeight:700,marginBottom:24}},"+"+Math.round(sc.c*4)+" XP"),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
        e("button",{onClick:generate,className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"\u2728 Novi set"),
        e("button",{onClick:onHome,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:600,cursor:"pointer",color:"var(--text)"}},"Po\u010detna")
      )
    ));
  }

  // st==="active"
  var it=qs[idx];
  var ph=it.tip==="jednadzba"?"npr. 2, 3":it.tip==="vrijednost"?"npr. 44":it.tip==="derivacija"?"npr. 3x^2+2":"npr. x^2+2x+1";
  return wrap(e("div",{style:{maxWidth:620,margin:"0 auto"}},
    e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,fontSize:12,color:"var(--muted)",fontWeight:600}},
      e("span",null,"Zadatak "+(idx+1)+" / "+qs.length),
      e("span",null,it.tema||"")),
    e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:20}},
      e("div",{style:{height:"100%",width:Math.round((idx+(fb?1:0))/qs.length*100)+"%",background:"linear-gradient(90deg,var(--blue),#7b9fff)",borderRadius:99,transition:"width .4s"}})),
    e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:18,padding:"22px 22px",boxShadow:"var(--shadow-sm)"}},
      e("div",{style:{fontSize:17,lineHeight:1.6,color:"var(--text)",marginBottom:18,fontWeight:600}},it.pitanje),
      e("input",{type:"text",value:ans,disabled:!!fb,placeholder:ph,
        onChange:function(ev){setAns(ev.target.value);},
        onKeyDown:function(ev){if(ev.key==="Enter")submit();},
        style:{width:"100%",boxSizing:"border-box",padding:"12px 14px",fontSize:15,borderRadius:11,
          border:"1px solid "+(fb?(fb.correct?"var(--green)":"var(--red)"):"var(--bdr2)"),
          background:"var(--bg)",color:"var(--text)",outline:"none",fontFamily:"var(--fb)"}}),
      !fb&&e("button",{onClick:submit,disabled:!ans.trim(),className:"shimmer-btn",
        style:{marginTop:14,background:ans.trim()?"var(--blue)":"var(--s3)",color:ans.trim()?"#fff":"var(--muted)",border:"none",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:700,cursor:ans.trim()?"pointer":"default",boxShadow:ans.trim()?"0 4px 14px -4px rgba(74,144,217,.55)":"none"}},"Provjeri"),
      fb&&e("div",{style:{marginTop:16,animation:(fb.correct?"fbPulse":"fbShake")+" .4s"}},
        e("div",{style:{display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:15,color:fb.correct?"var(--green)":"var(--red)",marginBottom:6}},
          fb.correct?"\u2713 To\u010dno!":"\u2717 Nije to\u010dno"),
        !fb.correct&&e("div",{style:{fontSize:14,color:"var(--text)"}},"To\u010dan odgovor: ",e("b",{style:{color:"var(--green)"}},fb.expect)),
        e("div",{style:{display:"flex",gap:10,marginTop:14,flexWrap:"wrap"}},
          e("button",{onClick:explain,style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:600,cursor:"pointer",color:"var(--text)"}},explS==="loading"?"\u2026":"\ud83d\udca1 Objasni"),
          e("button",{onClick:goNext,className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:"8px 16px",fontSize:13,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 12px -4px rgba(74,144,217,.5)"}},idx+1>=qs.length?"Zavr\u0161i \u2192":"Sljede\u0107e \u2192")
        ),
        expl&&e("div",{style:{marginTop:14,padding:"14px 16px",background:"var(--s2)",borderRadius:12,border:"1px solid var(--bdr)"}},
          e("ol",{style:{margin:0,paddingLeft:18,fontSize:13.5,lineHeight:1.65,color:"var(--text)"}},
            (expl.koraci||[]).map(function(k,ki){return e("li",{key:ki,style:{marginBottom:6}},__casDisp(k));})),
          expl.rjesenje&&e("div",{style:{marginTop:8,fontSize:13.5,fontWeight:700}},"Rje\u0161enje: ",__casDisp(expl.rjesenje)))
      )
    )
  ));
}
function TopicFilterScreen({onStart,onBack}){
  const ALL_TOPICS=Object.keys(TOPIC_LABELS);
  // Grupiraj alias ključeve (geom/geo/3d→Geometrija) u jedan chip
  const TOPIC_GROUPS=(()=>{const m={};ALL_TOPICS.forEach(t=>{const l=TOPIC_LABELS[t];(m[l]=m[l]||[]).push(t);});return Object.keys(m).map(label=>({label,keys:m[label]}));})();
  const ALL_TYPES=[
    {key:"mc",  label:"Višestruki izbor", color:"sel-blue"},
    {key:"num", label:"Numerički",        color:"sel-blue"},
    {key:"sa",  label:"Kratki odgovor",   color:"sel-teal"},
    {key:"proof",label:"Dokaz/izvod",     color:"sel-teal"},
  ];
  // Ponudi samo godine/rokove/razine iz ispita koje korisnik stvarno moze dobiti. Zakljucan
  // ispit nikad ne dobije pitanja (loadExam ih drzi u __EXAM_ONLY), pa bi free korisnik biranjem
  // npr. 2024. dobio "0 — Nema pitanja za odabrane filtere" i onemogucen gumb: mrtva opcija.
  const AVAIL_EXAMS=Object.values(EXAMS).filter(ex=>!isExamLocked(ex.key));
  const ALL_YEARS=[...new Set(AVAIL_EXAMS.map(ex=>ex.year))].sort((a,b)=>b-a);
  // Isto vrijedi za rok i razinu. Fallback na puni popis dok katalog jos nije stigao —
  // inace bi filtar u praznom stanju ostao bez ijednog chipa.
  const _availRazine=new Set(AVAIL_EXAMS.map(ex=>ex.razina));
  const RAZINA_CHIPS=[
    {key:"B",label:"B  -  Osnovna",bdr:"rgba(52,209,191,.3)",bg:"rgba(52,209,191,.22)",col:"var(--teal)"},
    {key:"A",label:"A  -  Viša",   bdr:"var(--blue-b)",      bg:"rgba(74,144,217,.22)",col:"var(--blue)"},
  ].filter(r=>!AVAIL_EXAMS.length||_availRazine.has(r.key));
  const ALL_RAZINE=RAZINA_CHIPS.map(r=>r.key);
  const _availSeasons=new Set(AVAIL_EXAMS.map(ex=>ex.season));
  const ALL_SEASONS=["ljeto","jesen","zima"].filter(s=>!AVAIL_EXAMS.length||_availSeasons.has(s));

  const[selTopics,setSelTopics]=useState(new Set(ALL_TOPICS));
  const[selTypes,setSelTypes]=useState(new Set(["mc","num","sa","proof"]));
  const[selYears,setSelYears]=useState(new Set(ALL_YEARS));
  const[selRazine,setSelRazine]=useState(new Set(ALL_RAZINE));
  const[selSeasons,setSelSeasons]=useState(new Set(ALL_SEASONS));
  const[showPreview,setShowPreview]=useState(false);
  const ALL_DIFF=["lako","srednje","tesko"];
  const[selDiff,setSelDiff]=useState(new Set(ALL_DIFF));
  const[qCount,setQCount]=useState(0);

  function tog(set,setFn,val){
    setFn(prev=>{const next=new Set(prev);next.has(val)?next.delete(val):next.add(val);return next;});
  }
  function togAll(set,setFn,all){
    setFn(set.size===all.length?new Set():new Set(all));
  }

  const matchingQs=React.useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(exam=>{
      if(isExamLocked(exam.key)) return; // zakljucan ispit ne ulazi u tematsku sesiju
      if(!selYears.has(exam.year)) return;
      if(!selSeasons.has(exam.season)) return;
      if(!selRazine.has(exam.razina)) return;
      exam.qs.forEach(q=>{
        if(!selTopics.has(q.topic||"ostalo")) return;
        if(!selTypes.has(q.type)) return;
        var _d=(q.points>=3)?"tesko":(q.points===2)?"srednje":"lako"; if(!selDiff.has(_d)) return;
        qs.push({...q,_examKey:exam.key,_examYear:exam.year,_examLabel:exam.label});
      });
    });
    return qs;
  },[selTopics,selTypes,selYears,selRazine,selSeasons,selDiff]);

  function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}

  function startSession(){
    if(matchingQs.length===0) return;
    const shuffled=shuffle(matchingQs).slice(0,qCount||60);
    onStart({
      key:"filter_session",year:"Filter",season:"session",razina:"B",
      label:"Tematska sesija",qs:shuffled,duration:60*60
    });
  }

  const typeStats={};
  matchingQs.forEach(q=>{typeStats[q.type]=(typeStats[q.type]||0)+1;});

  const seasonLabel=s=>s==="ljeto"?"☀️ Ljetni":s==="jesen"?"🍂 Jesenski":"❄️ Zimski";

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🎯 Vježbaj po temi")
    ),
    e("div",{style:{maxWidth:720,margin:"0 auto",padding:"20px 20px 60px"}},

      // Preview kartica — indigo gradijent
      e("div",{style:{
        borderRadius:16,padding:"20px 22px",marginBottom:22,
        background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
        display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden",
        flexWrap:"wrap"
      }},
        e("div",{style:{position:"absolute",right:-8,bottom:-14,fontSize:70,opacity:.05,
          lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"∑"),
        e("div",{style:{flex:"1 1 220px",minWidth:0}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:matchingQs.length===0?"rgba(255,255,255,.4)":"#fff",lineHeight:1,marginBottom:4}},matchingQs.length),
          e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",lineHeight:1.4}},
            matchingQs.length===0
              ?"Nema pitanja za odabrane filtere"
              :"pitanja pronađeno · "+Object.entries(typeStats).map(([t,n])=>(TLBL[t]||t)+": "+n).join(" · ")
          )
        ),
        e("button",{
          disabled:matchingQs.length===0,
          onClick:startSession,
          style:{background:matchingQs.length===0?"rgba(255,255,255,.12)":"#ffffff",
            color:matchingQs.length===0?"rgba(255,255,255,.45)":"#1e1040",
            border:"none",borderRadius:10,padding:"12px 22px",fontWeight:700,fontSize:14,
            cursor:matchingQs.length===0?"not-allowed":"pointer",
            fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0,
            boxShadow:matchingQs.length===0?"none":"0 4px 12px rgba(0,0,0,.25)"}
        },"▶ Pokreni "+(qCount?Math.min(matchingQs.length,qCount):Math.min(matchingQs.length,60)))
      ),

      // Filter: Razina
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Razina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selRazine.size===ALL_RAZINE.length?"var(--blue-b)":"var(--bdr)"),background:selRazine.size===ALL_RAZINE.length?"rgba(74,144,217,.22)":"var(--s1)",color:selRazine.size===ALL_RAZINE.length?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selRazine,setSelRazine,ALL_RAZINE)
          },"Obje razine"),
          RAZINA_CHIPS.map(r=>e("div",{
            key:r.key,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selRazine.has(r.key)?r.bdr:"var(--bdr)"),background:selRazine.has(r.key)?r.bg:"var(--s1)",color:selRazine.has(r.key)?r.col:"var(--muted)"},
            onClick:()=>tog(selRazine,setSelRazine,r.key)
          },r.label))
        )
      ),

      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Težina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selDiff.size===ALL_DIFF.length?"var(--blue-b)":"var(--bdr)"),background:selDiff.size===ALL_DIFF.length?"rgba(74,144,217,.22)":"var(--s1)",color:selDiff.size===ALL_DIFF.length?"var(--blue)":"var(--muted)"},onClick:()=>togAll(selDiff,setSelDiff,ALL_DIFF)},"Sve težine"),
          [["lako","Lako","var(--green)","rgba(80,200,120,.18)","rgba(80,200,120,.42)"],["srednje","Srednje","var(--gold)","var(--gold-d)","var(--gold-b)"],["tesko","Teško","var(--red)","var(--red-d)","rgba(248,113,113,.42)"]].map(function(d){var on=selDiff.has(d[0]);return e("div",{key:d[0],style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?d[4]:"var(--bdr)"),background:on?d[3]:"var(--s1)",color:on?d[2]:"var(--muted)"},onClick:()=>tog(selDiff,setSelDiff,d[0])},d[1]);})
        )
      ),

      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Broj zadataka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          [[10,"10"],[20,"20"],[30,"30"],[50,"50"],[0,"Sve"]].map(function(c){var on=qCount===c[0];return e("div",{key:c[1],style:{fontSize:11,fontWeight:600,padding:"4px 15px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"rgba(74,144,217,.22)":"var(--s1)",color:on?"var(--blue)":"var(--muted)"},onClick:()=>setQCount(c[0])},c[1]);})
        )
      ),

      // Filter: Teme
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Teme"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTopics.size===ALL_TOPICS.length?"var(--blue-b)":"var(--bdr)"),background:(selTopics.size===ALL_TOPICS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selTopics.size===ALL_TOPICS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selTopics,setSelTopics,ALL_TOPICS)
          },"Sve teme"),
          TOPIC_GROUPS.map(g=>{
            const on=g.keys.every(k=>selTopics.has(k));
            return e("div",{
              key:g.label,
              style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"rgba(74,144,217,.22)":"var(--s1)",color:on?"var(--blue)":"var(--muted)"},
              onClick:()=>{setSelTopics(p=>{const n=new Set(p);const all=g.keys.every(k=>n.has(k));g.keys.forEach(k=>all?n.delete(k):n.add(k));return n;});}
            },g.label);
          })
        )
      ),

      // Filter: Vrsta pitanja
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Vrsta zadatka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTypes.size===ALL_TYPES.length?"var(--blue-b)":"var(--bdr)"),background:(selTypes.size===ALL_TYPES.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selTypes.size===ALL_TYPES.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selTypes,setSelTypes,ALL_TYPES.map(t=>t.key))
          },"Sve vrste"),
          ALL_TYPES.map(t=>e("div",{
            key:t.key,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTypes.has(t.key)?"var(--blue-b)":"var(--bdr)"),background:selTypes.has(t.key)?"rgba(74,144,217,.22)":"var(--s1)",color:selTypes.has(t.key)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selTypes,setSelTypes,t.key)
          },t.label))
        )
      ),

      // Filter: Rok
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Ispitni rok"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selSeasons.size===ALL_SEASONS.length?"var(--blue-b)":"var(--bdr)"),background:(selSeasons.size===ALL_SEASONS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selSeasons.size===ALL_SEASONS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selSeasons,setSelSeasons,ALL_SEASONS)
          },"Svi rokovi"),
          ALL_SEASONS.map(s=>e("div",{
            key:s,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selSeasons.has(s)?"var(--blue-b)":"var(--bdr)"),background:selSeasons.has(s)?"rgba(74,144,217,.22)":"var(--s1)",color:selSeasons.has(s)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selSeasons,setSelSeasons,s)
          },seasonLabel(s)))
        )
      ),

      // Filter: Godina
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Ispitna godina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selYears.size===ALL_YEARS.length?"var(--blue-b)":"var(--bdr)"),background:(selYears.size===ALL_YEARS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selYears.size===ALL_YEARS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selYears,setSelYears,ALL_YEARS)
          },"Sve godine"),
          ALL_YEARS.map(y=>e("div",{
            key:y,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selYears.has(y)?"var(--blue-b)":"var(--bdr)"),background:selYears.has(y)?"rgba(74,144,217,.22)":"var(--s1)",color:selYears.has(y)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selYears,setSelYears,y)
          },y+"."))
        )
      ),

      // Pregled pitanja (sklopivo)
      matchingQs.length>0&&e("div",{style:{marginBottom:18}},
        e("div",{
          style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:10,cursor:"pointer",userSelect:"none",
            display:"flex",alignItems:"center",gap:8},
          onClick:()=>setShowPreview(p=>!p)
        },e("span",null,"Pregled pitanja"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),
          e("span",null,showPreview?"▲":"▼")),
        showPreview&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          matchingQs.slice(0,20).map((q,i)=>e("div",{key:i,style:{display:"flex",gap:8,alignItems:"flex-start",padding:"7px 10px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8}},
            e("span",{className:"qbadge "+(TBDG[q.type]||"b-mc"),style:{flexShrink:0}},TLBL[q.type]),
            e("span",{style:{color:"var(--muted)"}},q.q.slice(0,90)+(q.q.length>90?"...":""))
          )),
          matchingQs.length>20&&e("div",{style:{fontSize:11,color:"var(--muted)",padding:"6px 0"}},
            "...i još "+(matchingQs.length-20)+" pitanja")
        )
      )
    )
  );
}
function getRecommendations(userData){
  const recs=[];
  const history=userData.history||[];
  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);

  // Ponavljajuće greške
  const topErrors=errors.slice(0,3).filter(e=>e.count>=2);
  if(topErrors.length>0){
    recs.push({
      icon:"🔁",title:"Ponavljaš iste greške",
      desc:"Griješiš "+topErrors.length+"× na pitanjima o "+[...new Set(topErrors.map(e=>TOPIC_LABELS[e.topic]||e.topic))].join(", ")+". Pogledaj tab 'Greške'.",
      badge:"urgent"
    });
  }
  // Pad rezultata
  if(history.length>=4){
    const last4=history.slice(-4);
    const trend=last4[3].pct-last4[0].pct;
    if(trend<-10) recs.push({
      icon:"📉",title:"Pad rezultata",
      desc:"Zadnja 4 ispita pokazuju pad od "+Math.abs(trend)+"%. Provjeri slabe teme i uvježbaj ih.",
      badge:"warn"
    });
  }
  // Još nisi probao/la sve ispite
  const triedKeys=new Set(history.map(h=>h.examKey));
  const notTried=Object.keys(EXAMS).filter(k=>!triedKeys.has(k));
  if(notTried.length>0) recs.push({
    icon:"📄",title:"Neistraženi ispiti",
    desc:"Još nisi riješio/la "+notTried.length+" ispita. Svaki rok je malo drugačiji  -  proba sve!",
    badge:"info"
  });
  // Motivacijska poruka ako nema ništa loše
  if(recs.length===0&&history.length>0){
    const avg=Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length);
    recs.push({
      icon:avg>=70?"🏆":"💪",title:avg>=70?"Sjajan napredak!":"Nastavi vježbati!",
      desc:avg>=70?"Prosjek od "+avg+"% je na razini odličnog. Provjeri slabiie teme za savršen rezultat."
             :"Prosjek od "+avg+"%. Fokusiraj se na teme koje su ti teže i vježbaj svaki dan.",
      badge:"ok"
    });
  }
  return recs;
}
function ErrorsScreen({userData,onStart,onBack}){
  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);
  const[openKey,setOpenKey]=React.useState(null);

  function startSessionAll(){
    if(!errors.length) return;
    const qs=errors.slice(0,40).map(err=>{
      const exam=EXAMS[err.examKey];if(!exam)return null;
      const q=exam.qs.find(q=>String(q.id)===String(err.qid));
      return q?{...q,_examKey:err.examKey}:null;
    }).filter(Boolean);
    if(!qs.length)return;
    onStart({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:40*60});
  }

  function startSessionFiltered(filteredErrors){
    const qs=filteredErrors.map(err=>{
      const exam=EXAMS[err.examKey];if(!exam)return null;
      const q=exam.qs.find(q=>String(q.id)===String(err.qid));
      return q?{...q,_examKey:err.examKey}:null;
    }).filter(Boolean);
    if(!qs.length)return;
    onStart({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:qs.length*120});
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Greške - ponavljanje"),
      e("span",{className:"nsp"})
    ),
    e("div",{style:{maxWidth:700,margin:"0 auto",padding:"24px 20px 60px"}},
      errors.length===0
        ?(userData.history&&userData.history.length>0
          ?e("div",{style:{textAlign:"center",padding:"60px 0"}},
              e("div",{style:{fontSize:48,marginBottom:16}},"🎉"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Nema grešaka!"),
              e("div",{style:{fontSize:14,color:"var(--muted)"}},"Odličan rad! Pokušaj još koji ispit.")
            )
          :e("div",{style:{textAlign:"center",padding:"60px 0"}},
              e("div",{style:{fontSize:48,opacity:.3,marginBottom:16}},"🚨"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Tu će se pojaviti tvoje greške"),
              e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:24,lineHeight:1.5,maxWidth:420,margin:"0 auto 24px"}},"Riješi prvi ispit da vidiš obrasce u kojima griješiš. Sustav će ih grupirati po temi i pomoći ti da ih ciljano vježbaš."),
              e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
            ))
        :e("div",null,

          // Summary + pokretanje sve
          e("div",{style:{
            borderRadius:16,padding:"20px 22px",marginBottom:22,
            background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
            display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden"
          }},
            e("div",{style:{position:"absolute",right:-8,bottom:-16,fontSize:80,opacity:.05,lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"∑"),
            e("div",{style:{flex:1}},
              e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--bg,#060910)",lineHeight:1,marginBottom:4}},errors.length),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)"}},
                "pitanja s greškama · "+errors.reduce((s,e)=>s+e.count,0)+" ukupno pogrešnih odgovora")
            ),
            e("button",{
              onClick:startSessionAll,
              style:{background:"var(--bg,#060910)",color:"#1e1040",border:"none",borderRadius:10,
                padding:"10px 20px",fontWeight:700,fontSize:13,cursor:"pointer",
                fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}
            },"▶ Pokreni sve")
          ),

          // Razine A i B
          ["A","B"].map(razina=>{
            const rd={
              A:{label:"Viša razina (A)",col:"var(--blue)",bg:"var(--blue-d)",bdr:"var(--blue-b)"},
              B:{label:"Osnovna razina (B)",col:"var(--teal)",bg:"var(--teal-d)",bdr:"rgba(52,209,191,.25)"}
            }[razina];

            const razErrors=errors.filter(e=>e.examKey?.includes("_"+razina));
            if(razErrors.length===0) return null;

            // Grupiraj po temi
            const byTopic={};
            razErrors.forEach(err=>{
              const t=err.topic||"ostalo";
              if(!byTopic[t]) byTopic[t]={topic:t,label:TOPIC_LABELS[t]||t,errors:[],totalCount:0};
              byTopic[t].errors.push(err);
              byTopic[t].totalCount+=err.count;
            });
            const topicGroups=Object.values(byTopic).sort((a,b)=>b.totalCount-a.totalCount);
            const razTotal=razErrors.reduce((s,e)=>s+e.count,0);
            const razKey="razina_"+razina;
            const isRazOpen=openKey===razKey||openKey?.startsWith(razKey+"_");

            return e("div",{key:razina,style:{marginBottom:10}},
              // Razina header
              e("div",{
                onClick:()=>setOpenKey(o=>o===razKey?null:razKey),
                style:{
                  display:"flex",alignItems:"center",gap:12,padding:"14px 18px",
                  background:isRazOpen?"var(--s2)":"var(--s1)",
                  border:"1px solid var(--bdr)",
                  borderLeft:"4px solid "+rd.col,
                  borderRadius:isRazOpen?"0 14px 0 0":"0 14px 14px 0",
                  cursor:"pointer",transition:"all .15s",userSelect:"none"
                }
              },
                e("div",{style:{width:38,height:38,borderRadius:10,flexShrink:0,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:rd.bg,border:"1px solid "+rd.bdr,
                  fontSize:16,fontWeight:800,color:rd.col}},razina),
                e("div",{style:{flex:1}},
                  e("div",{style:{fontSize:14,fontWeight:700,color:rd.col}},rd.label),
                  e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},
                    razErrors.length+" pitanja · "+razTotal+" grešaka · "+topicGroups.length+(topicGroups.length===1?" tema":" teme"))
                ),
                e("button",{
                  onClick:ev=>{ev.stopPropagation();startSessionFiltered(razErrors);},
                  style:{background:rd.bg,border:"1px solid "+rd.bdr,color:rd.col,
                    borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:700,
                    cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}
                },"▶ Pokreni"),
                e("div",{style:{fontSize:12,color:"var(--muted)",flexShrink:0,marginLeft:6,
                  transition:"transform .2s",transform:isRazOpen?"rotate(180deg)":"rotate(0deg)",
                  display:"inline-block"}},"▾")
              ),

              // Teme
              isRazOpen&&e("div",{style:{
                border:"1px solid var(--bdr)",borderTop:"none",
                borderRadius:"0 0 14px 14px",overflow:"hidden"
              }},
                topicGroups.map(({topic,label,errors:terrs,totalCount},ti)=>{
                  const topicKey=razKey+"_"+topic;
                  const isTopicOpen=openKey===topicKey;
                  const isWorst=ti===0;
                  const borderCol=isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--bdr2)";

                  return e("div",{key:topic,style:{
                    borderBottom:ti<topicGroups.length-1?"1px solid var(--bdr)":"none"
                  }},
                    // Tema header
                    e("div",{
                      onClick:()=>setOpenKey(o=>o===topicKey?razKey:topicKey),
                      style:{
                        display:"flex",alignItems:"center",gap:12,
                        padding:"11px 18px 11px 24px",cursor:"pointer",
                        background:isTopicOpen?"var(--s2)":"var(--s1)",
                        borderLeft:"3px solid "+borderCol,
                        transition:"background .15s",userSelect:"none"
                      }
                    },
                      e("div",{style:{width:28,height:28,borderRadius:7,flexShrink:0,
                        display:"flex",alignItems:"center",justifyContent:"center",
                        background:isWorst?"var(--red-d)":totalCount>=3?"var(--gold-d)":"var(--s2)",
                        fontSize:11,fontWeight:800,
                        color:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"}},totalCount+"×"),
                      e("div",{style:{flex:1}},
                        e("div",{style:{fontSize:13,fontWeight:600}},label),
                        e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}},terrs.length+" pitanja")
                      ),
                      e("button",{
                        onClick:ev=>{ev.stopPropagation();startSessionFiltered(terrs);},
                        style:{background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--muted)",
                          borderRadius:7,padding:"4px 10px",fontSize:11,fontWeight:600,
                          cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}
                      },"▶"),
                      e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,marginLeft:6,
                        transition:"transform .2s",transform:isTopicOpen?"rotate(180deg)":"rotate(0deg)",
                        display:"inline-block"}},"▾")
                    ),

                    // Pitanja
                    isTopicOpen&&e("div",{style:{background:"var(--s2)",borderTop:"1px solid var(--bdr)"}},
                      terrs.map((err,ei)=>e("div",{key:ei,style:{
                        display:"flex",alignItems:"flex-start",gap:10,
                        padding:"10px 18px 10px 28px",
                        borderBottom:ei<terrs.length-1?"1px solid var(--bdr)":"none"
                      }},
                        e("div",{style:{width:22,height:22,borderRadius:6,flexShrink:0,
                          display:"flex",alignItems:"center",justifyContent:"center",
                          background:err.count>=3?"var(--red-d)":"var(--s3)",
                          fontSize:10,fontWeight:700,
                          color:err.count>=3?"var(--red)":"var(--muted)"}},err.count+"×"),
                        e("div",{style:{flex:1,minWidth:0}},
                          e("div",{style:{fontSize:12,lineHeight:1.55,color:"var(--text)"}},
                            err.q+(err.q?.length>=80?"...":"")),
                          err.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},
                            "Zadnji put: "+err.lastDate)
                        )
                      ))
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
function AdaptiveTrening({userData,onExit,onHome,onStartErrorSession}){
  var rz=(typeof DS!=="undefined"&&DS.get)?DS.get("mat_razina"):null;
  var pool=React.useMemo(function(){
    var arr=[];
    Object.values(EXAMS).forEach(function(ex){
      if(rz&&ex.razina&&ex.razina!==rz) return;
      (ex.qs||[]).forEach(function(q){
        if(q.type!=="mc"||!q.opts||!q.opts.length||!q.sol||!q.sol.cl) return;
        var t=(q.points>=3)?3:(q.points===2?2:1);
        arr.push(Object.assign({},q,{_examKey:ex.key,_tier:t}));
      });
    });
    return arr;
  },[]);
  var TOTAL=12;
  var TIERLBL={1:"Lako",2:"Srednje",3:"Teško"};
  var TIERCOL={1:"var(--green)",2:"var(--gold)",3:"var(--red)"};
  var _t=React.useState(2),tier=_t[0],setTier=_t[1];
  var _c=React.useState(null),curQ=_c[0],setCurQ=_c[1];
  var _s=React.useState(null),sel=_s[0],setSel=_s[1];
  var _k=React.useState(0),streak=_k[0],setStreak=_k[1];
  var _l=React.useState([]),log=_l[0],setLog=_l[1];
  var _d=React.useState(false),done=_d[0],setDone=_d[1];
  var askedRef=React.useRef({});
  var tierRef=React.useRef(2);
  var streakRef=React.useRef(0);

  function pickNext(t){
    var order=[t,t-1,t+1,t-2,t+2].filter(function(x){return x>=1&&x<=3;});
    for(var i=0;i<order.length;i++){
      var cands=pool.filter(function(q){return q._tier===order[i]&&!askedRef.current[q.id];});
      if(cands.length) return cands[Math.floor(Math.random()*cands.length)];
    }
    return null;
  }
  function begin(){
    askedRef.current={}; tierRef.current=2; streakRef.current=0;
    setTier(2); setStreak(0); setLog([]); setDone(false); setSel(null);
    var q=pickNext(2);
    if(q){askedRef.current[q.id]=1; setCurQ(q);} else setCurQ(null);
  }
  React.useEffect(function(){begin();},[]);

  function answer(letter){
    if(sel!==null||!curQ) return;
    setSel(letter);
    var ok=chk(curQ,letter)===true;
    setLog(function(L){return L.concat([{id:curQ.id,topic:curQ.topic,ok:ok,tier:curQ._tier}]);});
    var t=tierRef.current;
    if(ok){
      var ns=streakRef.current+1;
      if(ns>=2&&t<3){t=t+1;ns=0;}
      streakRef.current=ns; setStreak(ns);
    } else {
      if(t>1)t=t-1;
      streakRef.current=0; setStreak(0);
    }
    tierRef.current=t; setTier(t);
  }
  function nextQ(){
    if(log.length>=TOTAL){ setDone(true); return; }
    var q=pickNext(tierRef.current);
    if(!q){ setDone(true); return; }
    askedRef.current[q.id]=1; setCurQ(q); setSel(null);
  }

  if(pool.length<6) return React.createElement("div",{className:"home",style:{maxWidth:560,margin:"0 auto",padding:"18px 16px"}},
    React.createElement("button",{className:"btn btn-g",onClick:onExit},"← Natrag"),
    React.createElement("div",{style:{marginTop:24,textAlign:"center",color:"var(--muted)",fontSize:14}},"Nema dovoljno MC zadataka za adaptivni trening na ovoj razini."));

  if(done){
    var n=log.length, correct=log.filter(function(x){return x.ok;}).length;
    var pct=n?Math.round(correct/n*100):0;
    var byT={1:{c:0,n:0},2:{c:0,n:0},3:{c:0,n:0}};
    log.forEach(function(x){byT[x.tier].n++; if(x.ok)byT[x.tier].c++;});
    var stable=1;
    [1,2,3].forEach(function(t){ if(byT[t].n>=2 && byT[t].c/byT[t].n>=0.6) stable=t; });
    var levelTxt=stable===3?"Napredna razina — spreman/na za najteže zadatke (cilj 5)":stable===2?"Solidna razina — čvrsto stojiš na srednjima (cilj 4)":"Osnovna razina — gradi temelje (cilj 2–3)";
    var gradeEst=grade(pct);
    var wt={}; log.forEach(function(x){ if(!x.ok&&x.topic){var l=TOPIC_LABELS[x.topic]||x.topic; wt[l]=(wt[l]||0)+1;} });
    var weakArr=Object.keys(wt).sort(function(a,b){return wt[b]-wt[a];}).slice(0,3);
    return React.createElement("div",{className:"home",style:{maxWidth:560,margin:"0 auto",padding:"18px 16px"}},
      React.createElement("div",{className:"nav"},
        React.createElement("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        React.createElement("span",{className:"ntitle"},"🎯 Adaptivni rezultat"),
        React.createElement("span",{className:"nsp"})),
      React.createElement("div",{style:{textAlign:"center",padding:"18px 0 8px"}},
        React.createElement("div",{style:{fontFamily:"var(--fh)",fontSize:46,lineHeight:1,color:TIERCOL[stable]}},pct+"%"),
        React.createElement("div",{style:{fontSize:13,color:"var(--muted)",marginTop:6}},correct+"/"+n+" točno · procijenjena ocjena ~"+gradeEst)),
      React.createElement("div",{style:{padding:"14px 16px",borderRadius:14,background:"var(--s2)",border:"1px solid var(--bdr)",margin:"14px 0"}},
        React.createElement("div",{style:{fontSize:13.5,fontWeight:800,color:TIERCOL[stable],marginBottom:4,lineHeight:1.45}},"📊 "+levelTxt),
        React.createElement("div",{style:{display:"flex",gap:8,marginTop:12}},[1,2,3].map(function(t){
          var b=byT[t];var p=b.n?Math.round(b.c/b.n*100):null;
          return React.createElement("div",{key:t,style:{flex:1,background:"var(--s1)",borderRadius:10,padding:"10px 6px",textAlign:"center",border:"1px solid "+(stable===t?TIERCOL[t]:"var(--bdr)")}},
            React.createElement("div",{style:{fontSize:15,fontWeight:800,color:b.n?TIERCOL[t]:"var(--muted)"}},p==null?"—":p+"%"),
            React.createElement("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:2}},TIERLBL[t]+(b.n?(" · "+b.n):"")));
        }))),
      weakArr.length>0&&React.createElement("div",{style:{padding:"12px 15px",borderRadius:12,background:"var(--gold-d)",border:"1px solid var(--gold-b)",marginBottom:14}},
        React.createElement("div",{style:{fontSize:12.5,fontWeight:700,color:"var(--gold)",marginBottom:6}},"🎯 Tu si najviše griješio/la"),
        React.createElement("div",{style:{fontSize:13,color:"var(--text)",lineHeight:1.5}},weakArr.join(" · "))),
      React.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}},
        React.createElement("button",{className:"btn btn-blue",onClick:begin},"🔁 Još jednom"),
        weakArr.length>0&&onStartErrorSession&&React.createElement("button",{className:"btn btn-g",onClick:function(){
          var qs=[]; var labels={}; weakArr.forEach(function(l){labels[l]=1;});
          Object.values(EXAMS).forEach(function(ex){ if(rz&&ex.razina&&ex.razina!==rz)return; (ex.qs||[]).forEach(function(q){ if(q.type==="proof"||q.type==="sa"||q.type==="pa")return; if(labels[TOPIC_LABELS[q.topic]||q.topic]) qs.push(Object.assign({},q,{_examKey:ex.key})); }); });
          qs=qs.sort(function(){return Math.random()-0.5;}).slice(0,12);
          if(qs.length) onStartErrorSession({key:"adaptive_weak",year:"Slabe",season:"session",razina:rz||"B",label:"Slabe teme",qs:qs,duration:qs.length*120});
        }},"📚 Vježbaj slabe teme"),
        React.createElement("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna")));
  }

  if(!curQ) return React.createElement("div",{className:"home",style:{padding:30,textAlign:"center",color:"var(--muted)"}},"Učitavanje…");
  var answered=sel!==null;
  var ik=__imgKey(curQ._examKey,curQ);
  var figFn=curQ.img?__MAT.Q_IMAGES[ik]:null;
  var qnum=log.length+1;
  return React.createElement("div",{className:"home",style:{maxWidth:760,margin:"0 auto",padding:"14px 16px"}},
    React.createElement("div",{className:"nav"},
      React.createElement("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"✕ Izlaz"),
      React.createElement("span",{className:"ntitle"},"🎯 Adaptivni trening"),
      React.createElement("span",{style:{marginLeft:"auto",fontSize:12,fontWeight:700,padding:"4px 11px",borderRadius:99,background:TIERCOL[tier]+"22",color:TIERCOL[tier],border:"1px solid "+TIERCOL[tier]}},TIERLBL[tier])),
    React.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"10px 0 16px"}},
      React.createElement("div",{style:{flex:1,height:7,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},React.createElement("div",{style:{height:"100%",width:Math.round((qnum-1)/TOTAL*100)+"%",background:"var(--blue)",borderRadius:99,transition:"width .3s"}})),
      React.createElement("span",{style:{fontSize:12,fontWeight:700,color:"var(--muted)",flexShrink:0}},qnum+"/"+TOTAL)),
    React.createElement("div",{className:"qcard",style:{borderLeft:"3px solid "+TIERCOL[curQ._tier]}},
      React.createElement("div",{className:"qmeta-sub",style:{marginBottom:12,color:"var(--muted)",fontSize:12,fontWeight:600}},(TOPIC_LABELS[curQ.topic]||curQ.topic||"Zadatak")+" · "+TIERLBL[curQ._tier]),
      curQ.context&&React.createElement("div",{style:{fontSize:13.5,lineHeight:1.55,color:"var(--muted)",marginBottom:12,paddingLeft:12,borderLeft:"3px solid var(--blue)"}},renderQText(curQ.context)),
      figFn&&React.createElement("div",{style:{margin:"4px 0 12px",padding:10,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,display:"inline-block",maxWidth:"100%"}},figFn()),
      React.createElement("div",{className:"qtext",style:{marginBottom:14,fontSize:15.5,lineHeight:1.5}},renderQText(curQ.q)),
      React.createElement("div",{className:"opts"}, curQ.opts.map(function(opt,oi){
        var letter=LL[oi];
        var cls="opt";
        if(sel===letter) cls+=" sel";
        if(answered&&letter===curQ.sol.cl) cls="opt ok";
        else if(answered&&sel===letter&&letter!==curQ.sol.cl) cls="opt bad";
        return React.createElement("div",{key:oi,className:cls,onClick:function(){answer(letter);},style:answered?{cursor:"default"}:null},
          React.createElement("div",{className:"optl"},letter),
          React.createElement("div",{className:"optt"},renderOptContent(opt)));
      })),
      answered&&React.createElement("div",{style:{marginTop:14}},
        React.createElement(AnswerHelper,{q:curQ,autoExpand:true,hideToggle:true}),
        React.createElement("button",{className:"btn btn-blue",style:{marginTop:14,width:"100%"},onClick:nextQ}, log.length>=TOTAL?"Vidi rezultat →":"Sljedeći zadatak →"))
    ));
}
export { AIPractice, TopicFilterScreen, ErrorsScreen, AdaptiveTrening };
