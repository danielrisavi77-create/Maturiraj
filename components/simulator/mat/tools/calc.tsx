// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Kalkulator, AI/CAS matematicki pomocnik i biljeznica (ScratchPad). */
import React from 'react';
import { IS_PRO, __rk, planCta } from '../core/state';
import { __aiErrMsg, __aiPost, __ensureNerdamer } from '../core/runtime';
import { renderOptText, renderQText } from '../core/mathText';
import { calcCompile, calcEval, calcFmt, computeIntersections, computeKeyPts, exactFmt, extractSolverEq, solveEquation } from './calc-engine';
import { UpgradeModal } from './modals';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function Calculator({onClose,warnNoCalc}){
  const[expr,setExpr]=React.useState("");
  const[res,setRes]=React.useState("");
  const[deg,setDeg]=React.useState(true);
  const[evaled,setEvaled]=React.useState(false);
  function push(t){
    setExpr(p=>{ if(evaled&&/[0-9.]/.test(t)){setEvaled(false);return t;} setEvaled(false); return p+t; });
  }
  function clearAll(){setExpr("");setRes("");setEvaled(false);}
  function back(){setExpr(p=>p.slice(0,-1));}
  function compute(){
    try{
      let str=expr;
      const o=(str.match(/\(/g)||[]).length,c=(str.match(/\)/g)||[]).length;
      str+=")".repeat(Math.max(0,o-c));
      str=str.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/\^/g,"**");
      str=str.replace(/log\(/g,"Math.log10(").replace(/ln\(/g,"Math.log(");
      str=str.replace(/sin\(/g,"_sin(").replace(/cos\(/g,"_cos(").replace(/tan\(/g,"_tan(");
      str=str.replace(/√/g,"Math.sqrt");
      str=str.replace(/π/g,"(Math.PI)").replace(/(?<![A-Za-z_])e(?![A-Za-z_])/g,"(Math.E)");
      const D=deg?Math.PI/180:1;
      const _sin=x=>Math.sin(x*D),_cos=x=>Math.cos(x*D),_tan=x=>Math.tan(x*D);
      const fn=new Function("_sin","_cos","_tan","Math","return ("+str+")");
      const r=fn(_sin,_cos,_tan,Math);
      if(r===undefined||r===null||!isFinite(r))throw 0;
      const rounded=Math.round(r*1e10)/1e10;
      setRes(String(rounded));setExpr(String(rounded));setEvaled(true);
    }catch(e){setRes("Greška");}
  }
  const B=(label,act,kind)=>e("button",{key:label,onClick:act,className:"calc-btn"+(kind?" calc-"+kind:"")},label);
  return e("div",{className:"calc-panel",onClick:ev=>ev.stopPropagation()},
    e("div",{className:"calc-head"},
      e("span",{style:{fontSize:12,fontWeight:800,letterSpacing:".05em",color:"var(--muted)"}},"\uD83E\uDDEE KALKULATOR"),
      e("button",{onClick:()=>setDeg(d=>!d),className:"calc-mode"},deg?"DEG":"RAD"),
      e("button",{onClick:onClose,className:"calc-x"},"\u2715")),
    warnNoCalc&&e("div",{className:"calc-warn"},"\u26a0\ufe0f Na maturi A kalkulator nije dopu\u0161ten u 1. dijelu"),
    e("div",{className:"calc-disp"},
      e("div",{className:"calc-expr"},expr||"0"),
      res!==""&&e("div",{className:"calc-res"},"= "+res)),
    e("div",{className:"calc-grid"},
      B("C",clearAll,"fn"),B("(",()=>push("("),"fn"),B(")",()=>push(")"),"fn"),B("\u232b",back,"fn"),B("\u00f7",()=>push("\u00f7"),"op"),
      B("sin",()=>push("sin("),"fn"),B("cos",()=>push("cos("),"fn"),B("tan",()=>push("tan("),"fn"),B("\u00d7",()=>push("\u00d7"),"op"),B("\u221a",()=>push("\u221a("),"fn"),
      B("7",()=>push("7")),B("8",()=>push("8")),B("9",()=>push("9")),B("\u2212",()=>push("\u2212"),"op"),B("x\u00b2",()=>push("^2"),"fn"),
      B("4",()=>push("4")),B("5",()=>push("5")),B("6",()=>push("6")),B("+",()=>push("+"),"op"),B("x\u02b8",()=>push("^"),"fn"),
      B("1",()=>push("1")),B("2",()=>push("2")),B("3",()=>push("3")),B("\u03c0",()=>push("\u03c0"),"fn"),B("log",()=>push("log("),"fn"),
      B("0",()=>push("0")),B(".",()=>push(".")),B("e",()=>push("e"),"fn"),B("ln",()=>push("ln("),"fn"),B("=",compute,"eq")));
}
function MathAssistant({qText,qType,seed}){
  var ND=(typeof window!=="undefined"&&window.nerdamer)?window.nerdamer:(typeof nerdamer!=="undefined"?nerdamer:null);
  var _ndb=React.useState(0),_bumpNdA=_ndb[1];
  React.useEffect(function(){ __ensureNerdamer().then(function(x){ if(x) _bumpNdA(function(y){ return y+1; }); }); },[]);
  var _in=React.useState(seed!=null?String(seed):""),input=_in[0],setInput=_in[1];
  var _op=React.useState("auto"),op=_op[0],setOp=_op[1];
  var _res=React.useState(null),res=_res[0],setRes=_res[1];
  var _ai=React.useState("idle"),aiState=_ai[0],setAiState=_ai[1];
  var _aio=React.useState(null),aiOut=_aio[0],setAiOut=_aio[1];
  var _up=React.useState(false),showUp=_up[0],setShowUp=_up[1];
  var _pp=React.useState(0),_setPp=_pp[1];
  React.useEffect(function(){var f=function(){_setPp(function(x){return x+1;});};window.addEventListener("discere-pro",f);return function(){window.removeEventListener("discere-pro",f);};},[]);
  function pretty(s){return String(s).replace(/\*\*/g,"^").replace(/\bsqrt\s*\(/g,"√(").replace(/\bsqrt\b/g,"√").replace(/\bpi\b/g,"π").replace(/<=/g,"≤").replace(/>=/g,"≥").replace(/\*/g,"·");}
  function askProfessor(){
    var raw=input.trim(); if(!raw){return;}
    if(!IS_PRO){ setShowUp(true); return; }
    if(aiState==="loading")return;
    setAiState("loading"); setAiOut(null);
    var hint=(res&&res.ok&&res.output&&!res.error&&!res.note)?("\nProvjera (simbolicki izracun daje): "+String(res.output).replace(/\n/g," ; ")+". Uskladi rjesenje s time.\n"):"";
    var prompt="Ti si strpljiv profesor matematike za hrvatsku drzavnu maturu. Rijesi zadatak korak po korak, jasno i pedagoski, na hrvatskom jeziku. Objasni SVAKI korak (ne samo sto, nego zasto se radi). Koristi jednostavan zapis: x^2, sqrt(...), razlomci kao a/b, * za mnozenje, pi, <=, >=. Ako je zadatak rijecni ili geometrijski, prvo postavi matematicki model pa rijesi.\n\nZadatak: "+raw+"\n"+hint+"\nVrati ISKLJUCIVO JSON (bez markdown, bez backtickova):\n{\"koraci\":[\"korak 1 s objasnjenjem\",\"korak 2\",\"...\"],\"rjesenje\":\"konacni odgovor, jasno\",\"napomena\":\"cesta greska ILI kljucni uvid, 1 recenica\"}";
    __aiPost(prompt,1100).then(function(data){ if(data.error||!data.content)throw new Error("api"); var t=(data.content[0]&&data.content[0].text)||"{}"; var o=JSON.parse(t.replace(/```json|```/g,"").trim()); if(!o.koraci||!o.koraci.length)throw new Error("fmt"); setAiOut(o); setAiState("done"); }).catch(function(){ setAiState("error"); });
  }

  function norm(s){
    return String(s)
      .replace(/\u2212/g,"-")
      .replace(/\u2264/g,"<=").replace(/\u2265/g,">=")
      .replace(/[\u00b7\u00d7\u2219]/g,"*")
      .replace(/\u221a/g,"sqrt")
      .replace(/\u03c0/g,"pi")
      .replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3")
      .replace(/[\u2070\u00b9\u2074\u2075\u2076\u2077\u2078\u2079]/g,function(c){var m={"\u2070":"0","\u00b9":"1","\u2074":"4","\u2075":"5","\u2076":"6","\u2077":"7","\u2078":"8","\u2079":"9"};return "^"+(m[c]||"");})
      .replace(/(\d),(\d)/g,"$1.$2")
      .trim();
  }
  function disp(s){
    s=String(s);
    s=s.replace(/\*\*/g,"^");
    s=s.replace(/sqrt/g,"\u221a");
    s=s.replace(/\bpi\b/g,"\u03c0");
    s=s.replace(/abs\(([^()]*)\)/g,"|$1|");
    s=s.replace(/\(-(\d+(?:\/\d+)?)\+([a-zA-Z])\)/g,"($2-$1)");
    s=s.replace(/\((\d+(?:\/\d+)?)\+([a-zA-Z])\)/g,"($2+$1)");
    s=s.replace(/\^(\([^)]*\)|[A-Za-z0-9]+(?:\.[0-9]+)?)/g,function(_,e){return e.charAt(0)==="("?"^"+e:"^("+e+")";});
    s=s.replace(/\*/g,"");
    s=s.replace(/(\d)\.(\d)/g,"$1,$2");
    s=s.replace(/-/g,"\u2212");
    return s;
  }
  function detectVar(expr){var m=String(expr).replace(/sqrt|sin|cos|tan|cot|log|ln|pi|abs|exp/g,"").match(/[a-zA-Z]/);return m?m[0]:"x";}
  function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=b;b=a%b;a=t;}return a||1;}
  function toFrac(x,tol){tol=tol||1e-9;if(!isFinite(x))return ""+x;var neg=x<0;x=Math.abs(x);if(Math.abs(x-Math.round(x))<tol)return (neg?-Math.round(x):Math.round(x))+"";var h1=1,h0=0,k1=0,k0=1,bb=x;for(var i=0;i<40;i++){var a=Math.floor(bb);var h2=a*h1+h0,k2=a*k1+k0;if(Math.abs(x-h2/k2)<tol||k2>1e6){var g=gcd(h2,k2);return (neg?"-":"")+(h2/g)+"/"+(k2/g);}h0=h1;h1=h2;k0=k1;k1=k2;bb=1/(bb-a);if(!isFinite(bb))break;}return (neg?-x:x)+"";}
  function evalNum(e){try{return parseFloat(ND(e).evaluate().text("decimals"));}catch(x){return NaN;}}
  function decOf(s){var d=evalNum(s);if(!isFinite(d))return null;if(Math.abs(d-Math.round(d))<1e-9)return null;return ((Math.round(d*1000)/1000)+"").replace(".",",");}
  function fracPi(q){for(var d=1;d<=12;d++){var n=q*d;if(Math.abs(n-Math.round(n))<1e-6){var nn=Math.round(n);var g=gcd(Math.abs(nn),d)||1;return[nn/g,d/g];}}return null;}
  function fmtPi(f){var n=f[0],d=f[1];if(n===0)return"0";if(d===1)return n===1?"\u03C0":n===-1?"\u2212\u03C0":(n<0?"\u2212":"")+Math.abs(n)+"\u03C0";var a=Math.abs(n);return (n<0?"\u2212":"")+(a===1?"":a)+"\u03C0/"+d;}
  function piMinus(f){var n=f[1]-f[0],d=f[1];var g=gcd(Math.abs(n),d)||1;return[n/g,d/g];}

  function solveExact(eqRaw,v){
    var parts=String(eqRaw).split("="); var lhs=parts[0], rhs=parts.length>1?parts[1]:"0";
    var Pstr="("+lhs+")-("+rhs+")";
    function S(val){return ND(Pstr).sub(v,"("+val+")").toString();}
    var c,f1,fm1,f2;
    try{ c=S(0); f1=S(1); fm1=S(-1); f2=S(2); }catch(e){ return {err:1}; }
    if([c,f1,fm1,f2].some(function(x){return /[a-df-hj-zA-DF-HJ-Z]/.test(String(x).replace(/sqrt|pi|exp/gi,""));})) return {err:1};
    var a=ND("(("+f1+")+("+fm1+")-2*("+c+"))/2").toString();
    var b=ND("(("+f1+")-("+fm1+"))/2").toString();
    if(ND("4*("+a+")+2*("+b+")+("+c+")").toString()!==f2) return {err:1};
    if(a==="0"){ if(b==="0") return {roots:[],sp:(c==="0"?"id":"none")}; return {roots:[ND("-("+c+")/("+b+")").toString()]}; }
    var D=ND("("+b+")^2-4*("+a+")*("+c+")").toString();
    if(evalNum(D)<0) return {roots:[],complex:1,D:D};
    var r1=ND("(-("+b+")+sqrt("+D+"))/(2*("+a+"))").toString();
    var r2=ND("(-("+b+")-sqrt("+D+"))/(2*("+a+"))").toString();
    return {roots:(r1===r2)?[r1]:[r1,r2],D:D,sum:ND("-("+b+")/("+a+")").toString(),prod:ND("("+c+")/("+a+")").toString()};
  }

  function solveInequality(raw){
    var m=raw.match(/(<=|>=|<|>|\u2264|\u2265)/); if(!m)return null;
    var opr=m[1].replace("\u2264","<=").replace("\u2265",">=");
    var parts=norm(raw).split(/<=|>=|<|>/); if(parts.length!==2)return {err:1};
    var v=detectVar(parts[0]+parts[1]);
    var f="("+parts[0]+")-("+parts[1]+")";
    var ex; try{ ex=solveExact(f+"=0",v); }catch(e){ return {err:1}; }
    if(!ex||ex.err)return {err:1};
    function fval(x){return parseFloat(ND(f).sub(v,"("+x+")").evaluate().text("decimals"));}
    var incl=(opr===">="||opr==="<="); var want=(opr==="<"||opr==="<=")?-1:1;
    var rn=ex.roots.map(function(r){return {s:r,n:evalNum(r)};}).filter(function(o){return isFinite(o.n);}).sort(function(a,b){return a.n-b.n;});
    if(rn.length===0){ var sg=Math.sign(fval(0)); return {v:v,set:((sg===want)?"\u211D":"\u2205")}; }
    var pts=[rn[0].n-1]; for(var i=0;i<rn.length-1;i++)pts.push((rn[i].n+rn[i+1].n)/2); pts.push(rn[rn.length-1].n+1);
    var sel=pts.map(function(x){return Math.sign(fval(x))===want;});
    var bounds=["\u2212\u221E"].concat(rn.map(function(r){return disp(r.s);})).concat(["+\u221E"]);
    var pieces=[];
    for(var i=0;i<sel.length;i++){ if(sel[i]){ var lc=(i>0&&incl),hc=(i<sel.length-1&&incl); pieces.push((lc?"[":"\u27E8")+bounds[i]+", "+bounds[i+1]+(hc?"]":"\u27E9")); } }
    if(incl){ rn.forEach(function(r,idx){ if(Math.abs(fval(r.n))<1e-7 && !sel[idx] && !sel[idx+1]) pieces.push("{"+disp(r.s)+"}"); }); }
    return {v:v,set:(pieces.length?pieces.join(" \u222A "):"\u2205")};
  }

  function solveTrig(raw,v){
    v=v||"x";
    var fm=raw.match(/(sin|cos|tan|tg)\s*\(\s*([a-zA-Z])\s*\)/i); if(!fm)return null;
    var func=fm[1].toLowerCase(); if(func==="tg")func="tan";
    var arg=fm[2];
    var eqU=norm(raw).replace(new RegExp(func+"\\s*\\(\\s*"+arg+"\\s*\\)","gi"),"u");
    var parts=eqU.split("="); if(parts.length!==2)return null;
    var aStr; try{ aStr=ND.solve("("+parts[0]+")-("+parts[1]+")","u").toString().replace(/^\[|\]$/g,""); }catch(e){ return null; }
    if(aStr===""||/,/.test(aStr))return null;
    var a=evalNum(aStr); if(!isFinite(a))return null;
    if((func==="sin"||func==="cos")&&Math.abs(a)>1+1e-9) return "Nema realnih rješenja ( |"+func+" "+v+"| \u2264 1 ).";
    var p;
    if(func==="sin"){
      if(Math.abs(a)<1e-9)return v+" = k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a-1)<1e-9)return v+" = \u03C0/2 + 2k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a+1)<1e-9)return v+" = \u2212\u03C0/2 + 2k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.asin(a)/Math.PI);
      if(!p)return v+" = arcsin("+disp(aStr)+") + 2k\u03C0   \u2228   "+v+" = \u03C0 \u2212 arcsin("+disp(aStr)+") + 2k\u03C0   (\u2248 "+((Math.round(Math.asin(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = "+fmtPi(p)+" + 2k\u03C0   \u2228   "+v+" = "+fmtPi(piMinus(p))+" + 2k\u03C0,  k \u2208 \u2124";
    }
    if(func==="cos"){
      if(Math.abs(a)<1e-9)return v+" = \u03C0/2 + k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a-1)<1e-9)return v+" = 2k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a+1)<1e-9)return v+" = \u03C0 + 2k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.acos(a)/Math.PI);
      if(!p)return v+" = \u00B1arccos("+disp(aStr)+") + 2k\u03C0   (\u2248 "+((Math.round(Math.acos(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = \u00B1"+fmtPi(p)+" + 2k\u03C0,  k \u2208 \u2124";
    }
    if(func==="tan"){
      if(Math.abs(a)<1e-9)return v+" = k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.atan(a)/Math.PI);
      if(!p)return v+" = arctan("+disp(aStr)+") + k\u03C0   (\u2248 "+((Math.round(Math.atan(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = "+fmtPi(p)+" + k\u03C0,  k \u2208 \u2124";
    }
    return null;
  }

  function detect(raw){
    var s=String(raw).trim(); var expr=s, op=null, want=null;
    if(/(<=|>=|<|>|\u2264|\u2265)/.test(s)){ return {op:"inequality",expr:s.replace(/^\s*(rije[s\u0161]i\s*)?(nejednad[z\u017E]b\w*\s*)?/i,"").trim(),want:null}; }
    if(/\b(zbroj|suma|zbir)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="sum";
    else if(/\b(umno[z\u017E]ak|produkt)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="prod";
    else if(/\b(broj|koliko)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="count";
    if(want){ op="solve"; expr=s.replace(/\b(zbroj|suma|zbir|umno[z\u017E]ak|produkt|broj|koliko\s+je|koliko)\b/gi,"").replace(/rje[s\u0161]enj\w*/gi,"").replace(/jednad[z\u017E]b\w*/gi,"").replace(/\bza\s+koje\b/gi,"").replace(/nulto[c\u010D]k\w*/gi,"").replace(/^[\s:,\-]+|[\s:,\-]+$/g,"").trim(); }
    if(!op){
      var KW=[
        [/\b(deriviraj|derivacij\w*|izvod)\b\s*(od\s+)?/i,"diff"],
        [/\b(integriraj|integral\w*|primitivn\w*|antideriv\w*)\b\s*(od\s+|funkcij\w*\s+)?/i,"integrate"],
        [/\b(faktoriziraj|faktorizacij\w*|rastavi(\s+na\s+faktore)?)\b\s*/i,"factor"],
        [/\b(razmnozi|razmno\u017Ei|raspisi|raspi\u0161i|pomnozi|pomno\u017Ei|umnozak|umno\u017Eak)\b\s*/i,"expand"],
        [/\b(pojednostavi\w*|skrati|sredi)\b\s*/i,"simplify"],
        [/\b(sustav)\b\s*(jednad\u017Eb\w*|jednadzb\w*)?\s*/i,"system"],
        [/\b(rijesi|rije\u0161i|nultock\w*|nulto\u010Dk\w*|rjesenj\w*|rje\u0161enj\w*)\b\s*/i,"solve"],
        [/\b(izracunaj|izra\u010Dunaj|vrijednost\w*)\b\s*/i,"eval"]
      ];
      for(var i=0;i<KW.length;i++){ var ns=expr.replace(KW[i][0],""); if(ns!==expr){ op=KW[i][1]; expr=ns.trim(); break; } }
    }
    var pm=expr.match(/(-?\d+(?:[.,]\d+)?)\s*%\s*(?:od|of)\s*(-?\d+(?:[.,]\d+)?)/i);
    if(pm){ expr="("+pm[1].replace(",",".")+"/100)*"+pm[2].replace(",","."); if(!op)op="eval"; }
    if(op==="diff"||op==="integrate"){ expr=expr.replace(/\u222B/g,"").replace(/d\s*\/\s*dx/gi,"").replace(/\bdx\b/gi,"").replace(/['\u2032]/g,"").replace(/^[\s,]+|[\s,]+$/g,"").trim(); }
    if(!op){
      if(/\u222B/.test(s)||/\bdx\b/i.test(s)){ op="integrate"; expr=expr.replace(/\u222B/g,"").replace(/\bdx\b/gi,"").trim(); }
      else if(/['\u2032]/.test(expr)){ op="diff"; expr=expr.replace(/['\u2032]/g,"").trim(); }
      else { var eqc=(expr.match(/=/g)||[]).length;
        if(eqc>=2) op="system"; else if(eqc===1) op="solve";
        else { var letters=expr.replace(/(sqrt|sin|cos|tan|cot|log|ln|abs|exp|pi)/gi,"").replace(/[eE]/g,"");
          if(!/[a-zA-Z]/.test(letters)&&/\d/.test(expr)) op="eval"; else op="simplify"; } }
    }
    return {op:op,expr:expr,want:want};
  }

  var OPS=[["solve","Riješi ="],["system","Sustav"],["inequality","Nejednadžba"],["simplify","Pojednostavi"],["factor","Faktoriziraj"],["expand","Razmnoži"],["diff","Deriviraj"],["integrate","Integriraj"],["eval","Izračunaj"]];
  var LBL={}; OPS.forEach(function(o){LBL[o[0]]=o[1];});

  function run(forced){
    if(!ND){ setRes({error:"Matematički modul se još učitava — pokušaj za koju sekundu."}); return; }
    var raw=input.trim(); if(!raw){ setRes(null); return; }
    var d=detect(raw);
    var useOp=(forced&&forced!=="auto")?forced:(op!=="auto"?op:d.op);
    var expr=d.expr, want=d.want;
    try{
      if(useOp==="inequality"){
        var iq=solveInequality(raw);
        if(!iq||iq.err){ setRes({ok:true,title:"Nejednadžba",output:"Mogu riješiti linearne i kvadratne nejednadžbe. Za složenije probaj AI profesora.",note:2}); return; }
        setRes({ok:true,title:"Rješenje nejednadžbe",output:iq.v+" \u2208 "+iq.set,plain:true}); return;
      }
      if(useOp==="system"){
        var eqs=norm(expr).split(/[\n;]+/).map(function(x){return x.trim();}).filter(Boolean);
        if(eqs.length<2){ setRes({ok:true,title:"Sustav",output:"Upiši barem dvije jednadžbe (odvojene ; ili u novi red).",note:1}); return; }
        var sol=ND.solveEquations(eqs);
        if(!sol||!sol.length){ setRes({ok:true,title:"Sustav",output:"Nema jednoznačnog rješenja.",note:1}); return; }
        var lines=sol.map(function(p){var fr=toFrac(p[1]);var dd=(/\//.test(fr))?("  (= "+((""+p[1]).replace(".",","))+")"):"";return p[0]+" = "+disp(fr)+dd;});
        setRes({ok:true,title:"Rješenje sustava",output:lines.join("\n"),plain:true}); return;
      }
      if(useOp==="solve"){
        var v=detectVar(norm(expr));
        if(/(sin|cos|tan|tg)\s*\(/i.test(expr)){
          var tr=solveTrig(expr,v);
          if(tr){ setRes({ok:true,title:"Opće rješenje",output:tr,plain:true}); return; }
        }
        var eqN=norm(expr); if(eqN.indexOf("=")<0) eqN+="=0";
        var ex=null; try{ ex=solveExact(eqN,v); }catch(e){ ex=null; }
        if(ex&&!ex.err){
          if(ex.complex){ setRes({ok:true,title:"Rješenja",output:"Nema realnih rješenja (D = "+disp(ex.D)+" < 0).",note:1}); return; }
          if(ex.roots.length===0){ setRes({ok:true,title:"Rješenja",output:ex.sp==="id"?"Beskonačno mnogo rješenja (identitet).":"Nema rješenja.",note:1}); return; }
          var out=ex.roots.map(disp).join(",   ");
          var decs=ex.roots.map(decOf).filter(Boolean);
          if(want==="sum"&&ex.sum!==undefined){ setRes({ok:true,title:"Zbroj rješenja",output:disp(ex.sum),sub:v+" = "+out}); return; }
          if(want==="prod"&&ex.prod!==undefined){ setRes({ok:true,title:"Umnožak rješenja",output:disp(ex.prod),sub:v+" = "+out}); return; }
          if(want==="count"){ setRes({ok:true,title:"Broj rješenja",output:String(ex.roots.length),sub:v+" = "+out}); return; }
          setRes({ok:true,title:v+" =",output:out,dec:decs.length?decs.join(";   "):null,sum:ex.sum!==undefined?disp(ex.sum):null,prod:ex.prod!==undefined?disp(ex.prod):null,roots:ex.roots.length}); return;
        }
        var arr=ND.solve(eqN,v).toString().replace(/^\[|\]$/g,"").split(",").map(function(x){return x.trim();}).filter(Boolean);
        var bad=arr.length>6||arr.some(function(r){return r.replace(/[^0-9]/g,"").length>10;});
        if(arr.length===0||bad){ setRes({ok:true,title:"Rješenje",output:"Ne mogu naći jednostavno egzaktno rješenje — vjerojatno traži numeričku ili trigonometrijsku metodu (probaj AI profesora).",note:2}); return; }
        setRes({ok:true,title:v+" =",output:arr.map(disp).join(",   "),roots:arr.length}); return;
      }
      var exprN=norm(expr).replace(/=.*$/,"").trim();
      if(useOp==="simplify"){ setRes({ok:true,title:"Pojednostavljeno",output:disp(ND("simplify("+exprN+")").toString())}); return; }
      if(useOp==="expand"){ setRes({ok:true,title:"Razmnoženo",output:disp(ND("expand("+exprN+")").toString())}); return; }
      if(useOp==="factor"){ setRes({ok:true,title:"Faktorizirano",output:disp(ND.factor(exprN).toString())}); return; }
      if(useOp==="diff"){ var dv=detectVar(exprN); setRes({ok:true,title:"Derivacija (po "+dv+")",output:disp(ND.diff(exprN,dv).toString())}); return; }
      if(useOp==="integrate"){ var iv=detectVar(exprN); setRes({ok:true,title:"\u222B \u2026 d"+iv,output:disp(ND.integrate(exprN,iv).toString())+" + C"}); return; }
      if(useOp==="eval"){
        var exact=disp(ND(exprN).toString());
        var dnum=null; try{ dnum=ND(exprN).evaluate().text("decimals"); }catch(e){}
        var outE=exact;
        if(dnum&&/[\u221a\/]/.test(exact)){ var sym=/\u221a/.test(exact)?"\u2248":"="; outE=exact+"  ("+sym+" "+((Math.round(parseFloat(dnum)*1000)/1000)+"").replace(".",",")+")"; }
        setRes({ok:true,title:"Rezultat",output:outE,plain:/[\u221a\/]/.test(exact)}); return;
      }
      setRes({ok:true,title:"Rezultat",output:disp(ND(exprN).toString())});
    }catch(err){
      setRes({error:"Ne razumijem izraz. Provjeri zapis — npr. x^2-5x+6=0, x^2-4<0, sin(x)=1/2, sqrt(x)."});
    }
  }

  var det=(op==="auto"&&input.trim())?detect(input):null;
  var inpBg="rgba(255,255,255,.06)", bd="var(--bdr2)";
  function rline(line,i,arr,mode){var small=mode==="small";return e("div",{key:i,style:{fontSize:small?13:(mode==="plain"?15.5:17),color:small?"rgba(255,255,255,.8)":"#fff",fontWeight:small?500:700,lineHeight:1.55,marginBottom:i<arr.length-1?6:0,wordBreak:"break-word"}},mode==="math"?renderOptText(line):line);}
  var rmode=res&&!res.error?(res.note?"small":(res.plain?"plain":"math")):null;
  return e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0,overflowY:"auto"}},
    e("div",{style:{marginBottom:10,flexShrink:0}},
      e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"#9ec5f0",marginBottom:4}},"\uD83D\uDCD0 Matematički asistent"),
      e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.55)",lineHeight:1.4}},"Upiši zadatak prirodno \u2014 sam prepoznaje što treba i daje egzaktan oblik (razlomak/korijen/interval).")),
    e("textarea",{value:input,onChange:function(ev){setInput(ev.target.value);},
      onKeyDown:function(ev){if(ev.key==="Enter"&&!ev.shiftKey){ev.preventDefault();run();}},
      placeholder:"npr.  x^2-5x+6<0   ·   sin(x)=1/2   ·   zbroj rješenja x^2-5x+6=0   ·   deriviraj x^3   ·   2x+3y=8; x-y=1",
      rows:2,style:{width:"100%",boxSizing:"border-box",padding:"11px 13px",borderRadius:10,border:"1px solid "+bd,background:inpBg,color:"#fff",fontSize:15,fontFamily:"var(--fm, monospace)",resize:"vertical",lineHeight:1.4}}),
    det&&e("div",{style:{display:"flex",alignItems:"center",gap:7,margin:"8px 0 2px",fontSize:11.5,color:"rgba(255,255,255,.6)",flexWrap:"wrap"}},
      e("span",{style:{color:"var(--blue)",fontWeight:700}},"\u2728 Prepoznato:"),
      e("span",{style:{fontWeight:700,color:"#fff",padding:"2px 9px",borderRadius:99,background:"var(--blue-d)",border:"1px solid var(--blue-b)"}},(LBL[det.op]||det.op)+(det.want?(" · "+(det.want==="sum"?"zbroj":det.want==="prod"?"umnožak":"broj")):"")),
      e("span",{style:{color:"rgba(255,255,255,.4)"}},"\u2014 promijeni dolje ako želiš")),
    e("div",{style:{display:"flex",flexWrap:"wrap",gap:6,margin:"10px 0"}},
      OPS.map(function(o){var fOn=op===o[0];var aOn=(op==="auto"&&det&&det.op===o[0]);
        return e("button",{key:o[0],onClick:function(){setOp(fOn?"auto":o[0]);if(input.trim())run(fOn?"auto":o[0]);},
          style:{padding:"5px 11px",borderRadius:99,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",
          border:"1px solid "+((fOn||aOn)?"var(--blue-b)":bd),background:fOn?"var(--blue)":aOn?"rgba(74,144,217,.18)":"rgba(255,255,255,.05)",color:fOn?"#fff":aOn?"var(--blue)":"#fff"}},o[1]);})),
    e("button",{onClick:function(){run();},style:{width:"100%",padding:"11px",borderRadius:10,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"var(--fb)",marginBottom:14}},
      "\u25B6 Riješi"+(op==="auto"?(det?(" \u00b7 "+(LBL[det.op]||"")):""):(" \u00b7 "+(LBL[op]||"")))),
    res&&e("div",{style:{borderRadius:12,padding:"13px 15px",marginBottom:14,
      background:res.error?"rgba(248,113,113,.1)":"rgba(80,200,120,.08)",border:"1px solid "+(res.error?"rgba(248,113,113,.4)":"rgba(80,200,120,.4)")}},
      res.error
        ? e("div",{style:{fontSize:13,color:"#fca5a5",lineHeight:1.5}},res.error)
        : e("div",null,
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",color:res.note===2?"var(--gold)":"var(--green)",marginBottom:7}},res.title),
            res.output.split("\n").map(function(l,i,arr){return rline(l,i,arr,rmode);}),
            res.sub&&e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",marginTop:7,lineHeight:1.5}},renderOptText(res.sub)),
            res.dec&&e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.5)",marginTop:6}},"Decimalno: "+res.dec),
            (res.sum!=null||res.prod!=null)&&res.roots>1&&e("div",{style:{display:"flex",gap:16,marginTop:9,paddingTop:9,borderTop:"1px solid var(--bdr2)",fontSize:12.5,color:"rgba(255,255,255,.75)",flexWrap:"wrap"}},
              res.sum!=null&&e("span",null,"Zbroj: ",e("b",{style:{color:"#fff"}},renderOptText(res.sum))),
              res.prod!=null&&e("span",null,"Umnožak: ",e("b",{style:{color:"#fff"}},renderOptText(res.prod)))),
            res.roots>1&&!res.sub&&e("div",{style:{fontSize:11,color:"rgba(255,255,255,.45)",marginTop:6}},res.roots+" rješenja"),
            res.note===2&&e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.6)",marginTop:9,paddingTop:9,borderTop:"1px solid var(--bdr2)",lineHeight:1.5}},"\uD83C\uDF93 Za potpuno rješenje uz korake \u2014 AI profesor (uskoro u radnom prostoru).")
          )),
    input.trim()&&e("div",{style:{marginTop:4,marginBottom:14,paddingTop:14,borderTop:"1px solid var(--bdr2)"}},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7}},
        e("span",{style:{fontSize:13,fontWeight:800,color:"#e9b446"}},"🎓 AI profesor"),
        !IS_PRO&&e("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:".06em",color:"#0b1b3a",background:"#e9b446",borderRadius:99,padding:"2px 7px"}},"PRO")),
      e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.55)",lineHeight:1.45,marginBottom:11}},"Rješenje s objašnjenim koracima — i za riječne, geometrijske i dokazne zadatke koje CAS ne računa."),
      aiState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:9}},__aiErrMsg()),
      (aiState==="done"&&aiOut)?e("div",{style:{borderRadius:12,padding:"13px 15px",background:"rgba(233,180,70,.08)",border:"1px solid rgba(233,180,70,.35)"}},
        e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".05em",textTransform:"uppercase",color:"#e9b446",marginBottom:9}},"Korak po korak"),
        (aiOut.koraci||[]).map(function(k,i){return e("div",{key:i,style:{display:"flex",gap:9,marginBottom:9,fontSize:13,lineHeight:1.55,color:"rgba(255,255,255,.92)"}},e("span",{style:{flexShrink:0,width:20,height:20,borderRadius:99,background:"rgba(233,180,70,.2)",color:"#e9b446",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}},i+1),e("span",null,pretty(k)));}),
        aiOut.rjesenje&&e("div",{style:{marginTop:4,paddingTop:11,borderTop:"1px solid var(--bdr2)",fontSize:14,fontWeight:700,color:"#fff"}},"✅ ",pretty(aiOut.rjesenje)),
        aiOut.napomena&&e("div",{style:{marginTop:9,fontSize:12,color:"rgba(255,255,255,.62)",lineHeight:1.5,fontStyle:"italic"}},"💡 ",pretty(aiOut.napomena)),
        e("button",{onClick:function(){setAiState("idle");setAiOut(null);},style:{marginTop:12,background:"transparent",border:"1px solid var(--bdr2)",color:"rgba(255,255,255,.6)",fontFamily:"var(--fb)",fontSize:11.5,fontWeight:600,padding:"6px 12px",borderRadius:8,cursor:"pointer"}},"↻ Novo pitanje"))
      :e("button",{onClick:askProfessor,disabled:aiState==="loading",style:{width:"100%",padding:"11px",borderRadius:10,fontFamily:"var(--fb)",fontWeight:800,fontSize:13.5,cursor:aiState==="loading"?"default":"pointer",background:IS_PRO?"#e9b446":"rgba(233,180,70,.14)",color:IS_PRO?"#0b1b3a":"#fff",border:IS_PRO?"none":"1px solid rgba(233,180,70,.4)"}},aiState==="loading"?"⏳ Profesor piše…":IS_PRO?"✨ Objasni korak po korak":planCta()),
      (!IS_PRO&&aiState!=="done")&&e("div",{style:{position:"relative",marginTop:12}},
        e("div",{"aria-hidden":"true",style:{filter:"blur(3.5px)",opacity:.55,pointerEvents:"none",userSelect:"none"}},e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}},"1. Prebaci sve na lijevu stranu: x²−5x+6=0.  2. Rastavi na faktore: (x−2)(x−3)=0.  3. Nultočke: x=2 ili x=3…")),
        e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}},e("span",{style:{fontSize:10.5,fontWeight:700,color:"#fff",background:"rgba(10,23,48,.6)",border:"1px solid rgba(255,255,255,.2)",borderRadius:99,padding:"4px 11px",backdropFilter:"blur(2px)"}},"🔒 Koraci s objašnjenjem — uz Pro")))),
    showUp&&e(UpgradeModal,{onClose:function(){setShowUp(false);}}),
    e("div",{style:{fontSize:11,color:"rgba(255,255,255,.4)",lineHeight:1.6,marginTop:"auto",paddingTop:10}},
      e("div",{style:{fontWeight:700,marginBottom:3,color:"rgba(255,255,255,.55)"}},"Zapis:"),
      "x^2 \u00b7 sqrt(x) \u00b7 nejednadžba x^2-4<0 \u00b7 trig sin(x)=1/2 \u00b7 \u201ezbroj rješenja …\u201c \u00b7 Enter = riješi."),
    e("div",{style:{fontSize:10.5,color:"rgba(255,255,255,.35)",fontStyle:"italic",marginTop:8,lineHeight:1.5}},
      "Riječni zadaci, geometrija i dokazi \u2014 koristi AI profesora; CAS računa simbolički, bez koraka."));
}
function ScratchPad({onClose,wsKey,store,figure,qText,qOpts,qSteps,qSol,qType,answered,seedAsk,onSeedUsed,examMode}){
  const saved=React.useMemo(()=>(store&&wsKey&&store[wsKey])||null,[]);
  const cv=React.useRef(null), wrap=React.useRef(null);
  const draw=React.useRef({on:false});
  const gesture=React.useRef(null);
  const strokes=React.useRef(saved&&saved.strokes?saved.strokes:[]);
  const redoStk=React.useRef([]);
  const cur=React.useRef(null);
  const view=React.useRef({s:(saved&&saved.viewS)||1, ox:(saved&&typeof saved.viewOx==="number")?saved.viewOx:null, oy:(saved&&typeof saved.viewOy==="number")?saved.viewOy:null});
  const[zPct,setZPct]=React.useState(Math.round(((saved&&saved.viewS)||1)*100));
  const[mode,setMode]=React.useState(()=>{var _m=(seedAsk!=null)?"asistent":(saved&&saved.mode?saved.mode:"skica");if(_m==="solve")_m="asistent";if(examMode&&_m==="asistent")_m="skica";return _m;});
  React.useEffect(function(){if(seedAsk!=null&&onSeedUsed){onSeedUsed();}},[]);
  const[color,setColor]=React.useState(()=>saved&&saved.color?saved.color:"#1a1a1a");
  const[width,setWidth]=React.useState(()=>saved&&saved.width?saved.width:2.4);
  const[tool,setTool]=React.useState(()=>saved&&saved.tool?saved.tool:"pen");
  const[grid,setGrid]=React.useState(()=>saved?!!saved.grid:true);
  const[axes,setAxes]=React.useState(()=>saved?!!saved.axes:false);
  const[calcExpr,setCalcExpr]=React.useState(()=>saved&&saved.calcExpr?saved.calcExpr:"");
  const[calcHist,setCalcHist]=React.useState(()=>saved&&saved.calcHist?saved.calcHist:[]);
  const[deg,setDeg]=React.useState(()=>saved?(saved.deg!==false):true);
  const[vars,setVars]=React.useState(()=>(saved&&saved.vars)?saved.vars:{});
  const[exact,setExact]=React.useState(()=>saved?!!saved.exact:false);
  const[storeMode,setStoreMode]=React.useState(false);
  const[calcErr,setCalcErr]=React.useState("");
  const[funcs,setFuncs]=React.useState(()=>(saved&&saved.funcs)?saved.funcs:[]);
  const[showGraph,setShowGraph]=React.useState(()=>saved?!!saved.showGraph:false);
  const funcsRef=React.useRef([]);
  const[keyPts,setKeyPts]=React.useState(()=>saved?(saved.keyPts!==false):true);
  const keyPtsRef=React.useRef(true), readRef=React.useRef(null), intersRef=React.useRef([]);
  const[solveInput,setSolveInput]=React.useState(()=>saved&&saved.solveInput?saved.solveInput:"");
  const[solveRes,setSolveRes]=React.useState(null);
  const[figOn,setFigOn]=React.useState(false);
  const figRef=React.useRef(null);
  const figHiddenRef=React.useRef(null);
  const[peek,setPeek]=React.useState(false);
  const[taskOpen,setTaskOpen]=React.useState(()=>!!qText);
  const[showOfficial,setShowOfficial]=React.useState(false);
  const autoEq=React.useMemo(()=>extractSolverEq(qText),[]);
  React.useEffect(()=>{ if(autoEq && !((saved&&saved.solveInput)||"").trim()){ setSolveInput(autoEq); } },[]);
  const[intro,setIntro]=React.useState(()=>{try{return !localStorage.getItem(__rk("mat_ws_intro_v1"));}catch(e){return false;}});
  function dismissIntro(){ try{localStorage.setItem(__rk("mat_ws_intro_v1"),"1");}catch(e){} setIntro(false); }
  const colorRef=React.useRef(color), widthRef=React.useRef(width), toolRef=React.useRef(tool), axesRef=React.useRef(axes), gridRef=React.useRef(grid);
  React.useEffect(()=>{colorRef.current=color;},[color]);
  React.useEffect(()=>{widthRef.current=width;},[width]);
  React.useEffect(()=>{toolRef.current=tool;},[tool]);
  function persistAll(){ if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; var o=store[wsKey]; o.calcExpr=calcExpr;o.calcHist=calcHist;o.deg=deg;o.grid=grid;o.axes=axes;o.tool=tool;o.width=width;o.color=color;o.mode=mode;o.strokes=strokes.current;o.funcs=funcs.map(function(f){return{expr:f.expr,color:f.color,on:f.on};});o.showGraph=showGraph;o.keyPts=keyPts;o.solveInput=solveInput;o.vars=vars;o.exact=exact;o.figOn=figOn;o.viewS=view.current.s;o.viewOx=view.current.ox;o.viewOy=view.current.oy; } }
  React.useEffect(()=>{ persistAll(); },[calcExpr,calcHist,deg,grid,axes,tool,width,color,mode,funcs,showGraph,keyPts,solveInput,vars,exact,figOn]);
  React.useEffect(()=>{ if(figure&&saved&&saved.figOn){ var _t=setTimeout(importFigure,80); return function(){clearTimeout(_t);}; } },[]);
  function persistStrokes(){ if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; store[wsKey].strokes=strokes.current; } }
  function commitView(){ setZPct(Math.round(view.current.s*100)); if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; var o=store[wsKey]; o.viewS=view.current.s;o.viewOx=view.current.ox;o.viewOy=view.current.oy; } }
  function s2w(sx,sy){var v=view.current;return {x:(sx-v.ox)/v.s, y:(sy-v.oy)/v.s};}
  function setXform(ctx,dpr){var v=view.current;ctx.setTransform(dpr*v.s,0,0,dpr*v.s,dpr*v.ox,dpr*v.oy);}
  function drawAxes(ctx,tl,br,sc){
    ctx.strokeStyle="rgba(40,60,90,.7)"; ctx.fillStyle="rgba(40,60,90,.7)"; ctx.lineWidth=1.6/sc; ctx.lineCap="butt";
    ctx.beginPath(); ctx.moveTo(tl.x,0); ctx.lineTo(br.x,0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,tl.y); ctx.lineTo(0,br.y); ctx.stroke();
    ctx.lineWidth=1/sc;
    var x0=Math.ceil(tl.x/24)*24;
    for(var x=x0;x<br.x;x+=24){ if(Math.abs(x)>1){ ctx.beginPath(); ctx.moveTo(x,-3/sc); ctx.lineTo(x,3/sc); ctx.stroke(); } }
    var y0=Math.ceil(tl.y/24)*24;
    for(var y=y0;y<br.y;y+=24){ if(Math.abs(y)>1){ ctx.beginPath(); ctx.moveTo(-3/sc,y); ctx.lineTo(3/sc,y); ctx.stroke(); } }
    ctx.font="italic 600 "+(12/sc)+"px Georgia,serif"; ctx.fillText("O",6/sc,15/sc);
  }
  function importFigure(){
    try{
      var host=figHiddenRef.current; if(!host) return;
      var svg=host.querySelector("svg"); if(!svg) return;
      var vb=svg.viewBox&&svg.viewBox.baseVal;
      var natW=(vb&&vb.width)||svg.clientWidth||240;
      var natH=(vb&&vb.height)||svg.clientHeight||(natW*0.8);
      var clone=svg.cloneNode(true);
      clone.setAttribute("width",natW); clone.setAttribute("height",natH);
      if(!clone.getAttribute("xmlns")) clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
      var str=new XMLSerializer().serializeToString(clone);
      var cs=getComputedStyle(document.documentElement);
      ["text","bg","muted","s1","s2","s3","bdr","bdr2","blue-d","blue-b","blue","gold-d","gold-b","gold","green-d","green-b","green","red-d","red","teal"].forEach(function(k){
        var val=cs.getPropertyValue("--"+k).trim(); if(val){ str=str.split("var(--"+k+")").join(val); }
      });
      var card=(cs.getPropertyValue("--s2").trim())||"#1a1f29";
      var img=new Image();
      img.onload=function(){
        var fw=288, fh=fw*(natH/natW); if(!isFinite(fh)||fh<=0) fh=fw*0.8;
        figRef.current={img:img,x:-fw/2,y:-fh/2,w:fw,h:fh,card:card};
        setFigOn(true); setGrid(false); setAxes(false);
        setColor(function(c){return c==="#1a1a1a"?"#e05252":c;});
        redraw();
      };
      img.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(str);
    }catch(e){}
  }
  function removeFigure(){ figRef.current=null; setFigOn(false); redraw(); }
  function redraw(){
    var c=cv.current; if(!c) return;
    var ctx=c.getContext("2d"); var dpr=window.devicePixelRatio||1;
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,c.width,c.height);
    setXform(ctx,dpr);
    var v=view.current; var Wc=c.width/dpr, Hc=c.height/dpr;
    var tl=s2w(0,0), br=s2w(Wc,Hc);
    if(figRef.current&&figRef.current.img){ var _f=figRef.current; try{ ctx.fillStyle=_f.card; var _p=12; ctx.beginPath(); if(ctx.roundRect){ctx.roundRect(_f.x-_p,_f.y-_p,_f.w+2*_p,_f.h+2*_p,10);}else{ctx.rect(_f.x-_p,_f.y-_p,_f.w+2*_p,_f.h+2*_p);} ctx.fill(); ctx.drawImage(_f.img,_f.x,_f.y,_f.w,_f.h); }catch(e){} }
    if(gridRef.current){
      ctx.strokeStyle="rgba(74,144,217,.16)"; ctx.lineWidth=1/v.s;
      var gx0=Math.floor(tl.x/24)*24;
      for(var gx=gx0;gx<br.x;gx+=24){ ctx.beginPath(); ctx.moveTo(gx,tl.y); ctx.lineTo(gx,br.y); ctx.stroke(); }
      var gy0=Math.floor(tl.y/24)*24;
      for(var gy=gy0;gy<br.y;gy+=24){ ctx.beginPath(); ctx.moveTo(tl.x,gy); ctx.lineTo(br.x,gy); ctx.stroke(); }
    }
    if(axesRef.current) drawAxes(ctx,tl,br,v.s);
    if(funcsRef.current&&funcsRef.current.length){
      var _Wpx=c.width/dpr; var _xs=(br.x-tl.x)/Math.max(60,_Wpx); var _yl=(br.y-tl.y);
      funcsRef.current.forEach(function(fn){
        if(!fn.on||!fn.compiled) return;
        ctx.strokeStyle=fn.color; ctx.lineWidth=2.2/v.s; ctx.lineCap="round"; ctx.lineJoin="round";
        ctx.beginPath(); var _prev=null,_drew=false;
        for(var _wx=tl.x; _wx<=br.x; _wx+=_xs){
          var _ux=_wx/24; var _my; try{ _my=fn.compiled(_ux); }catch(e){ _my=NaN; }
          if(typeof _my!=="number"||!isFinite(_my)){ _prev=null; continue; }
          var _py=-_my*24;
          if(_prev===null){ ctx.moveTo(_wx,_py); }
          else if(Math.abs(_py-_prev)>_yl*4){ ctx.moveTo(_wx,_py); }
          else { ctx.lineTo(_wx,_py); _drew=true; }
          _prev=_py;
        }
        if(_drew) ctx.stroke();
      });
    }
    strokes.current.forEach(function(st){
      ctx.globalCompositeOperation=st.erase?"destination-out":"source-over";
      ctx.strokeStyle=st.color; ctx.lineWidth=st.width; ctx.lineCap="round"; ctx.lineJoin="round";
      ctx.beginPath();
      st.pts.forEach(function(p,i){ if(i===0)ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
      if(st.pts.length===1){ctx.lineTo(st.pts[0].x+0.1/v.s,st.pts[0].y+0.1/v.s);}
      ctx.stroke();
    });
    ctx.globalCompositeOperation="source-over";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    var _V=view.current, _Wc=c.width/dpr;
    function _w2sx(wx){return wx*_V.s+_V.ox;} function _w2sy(wy){return wy*_V.s+_V.oy;}
    function _fc(n){var r=Math.round(n*100)/100; if(Math.abs(r)<1e-9)r=0; return (""+r).replace(".",",");}
    if(keyPtsRef.current){
      (funcsRef.current||[]).forEach(function(fn){
        if(!fn.on||!fn.compiled||!fn.keyPts) return;
        fn.keyPts.forEach(function(kp){
          if(kp.x*24<tl.x||kp.x*24>br.x) return;
          var sx=_w2sx(kp.x*24), sy=_w2sy(-kp.y*24);
          ctx.beginPath(); ctx.arc(sx,sy,4,0,6.2832); ctx.fillStyle=fn.color; ctx.fill(); ctx.lineWidth=1.5; ctx.strokeStyle="#fff"; ctx.stroke();
        });
      });
      (intersRef.current||[]).forEach(function(ip){
        if(ip.x*24<tl.x||ip.x*24>br.x) return;
        var sx=_w2sx(ip.x*24), sy=_w2sy(-ip.y*24);
        ctx.save(); ctx.translate(sx,sy); ctx.rotate(0.785398); ctx.fillStyle="#e9b446"; ctx.fillRect(-4,-4,8,8); ctx.lineWidth=1.5; ctx.strokeStyle="#fff"; ctx.strokeRect(-4,-4,8,8); ctx.restore();
      });
    }
    if(readRef.current){
      var R=readRef.current; var rsx=_w2sx(R.x*24), rsy=_w2sy(-R.y*24);
      ctx.setLineDash([4,4]); ctx.strokeStyle="rgba(40,60,90,.55)"; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(rsx,rsy); ctx.lineTo(rsx,_V.oy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rsx,rsy); ctx.lineTo(_V.ox,rsy); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(rsx,rsy,5,0,6.2832); ctx.fillStyle=R.color; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle="#fff"; ctx.stroke();
      var kn=R.kind?(({zero:"nulto\u010dka",min:"min",max:"max",y:"y-os"})[R.kind]+" "):"";
      var lbl=kn+"("+_fc(R.x)+"; "+_fc(R.y)+")";
      ctx.font="700 12.5px 'Instrument Sans',sans-serif"; var tw=ctx.measureText(lbl).width;
      var lx=rsx+12, ly=rsy-14; if(lx+tw+12>_Wc) lx=rsx-tw-18; if(ly<20) ly=rsy+26;
      ctx.fillStyle="rgba(9,13,26,.94)"; if(ctx.roundRect){ctx.beginPath();ctx.roundRect(lx-7,ly-15,tw+14,22,6);ctx.fill();}else ctx.fillRect(lx-7,ly-15,tw+14,22);
      ctx.fillStyle="#fff"; ctx.fillText(lbl,lx,ly+1);
    }
  }
  function strokeSeg(st,a,b){var ctx=cv.current.getContext("2d");ctx.globalCompositeOperation=st.erase?"destination-out":"source-over";ctx.strokeStyle=st.color;ctx.lineWidth=st.width;ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.globalCompositeOperation="source-over";}
  React.useEffect(()=>{gridRef.current=grid;redraw();},[grid]);
  React.useEffect(()=>{axesRef.current=axes;redraw();},[axes]);
  React.useEffect(()=>{
    const c=cv.current, w=wrap.current; if(!c||!w||mode!=="skica") return;
    function fit(){
      const r=w.getBoundingClientRect(); const dpr=window.devicePixelRatio||1;
      c.width=Math.round(r.width*dpr); c.height=Math.round(r.height*dpr);
      c.style.width=r.width+"px"; c.style.height=r.height+"px";
      if(view.current.ox==null){ view.current.ox=r.width/2; view.current.oy=r.height/2; }
      redraw();
    }
    fit(); window.addEventListener("resize",fit);
    return()=>window.removeEventListener("resize",fit);
  },[mode]);
  React.useEffect(()=>{
    const c=cv.current; if(!c) return;
    function onWheel(ev){ ev.preventDefault(); var r=c.getBoundingClientRect(); var px=ev.clientX-r.left, py=ev.clientY-r.top; var v=view.current; var factor=ev.deltaY<0?1.12:1/1.12; var ns=Math.max(0.3,Math.min(6,v.s*factor)); var wx=(px-v.ox)/v.s, wy=(py-v.oy)/v.s; v.s=ns; v.ox=px-wx*ns; v.oy=py-wy*ns; redraw(); commitView(); }
    c.addEventListener("wheel",onWheel,{passive:false});
    return()=>c.removeEventListener("wheel",onWheel);
  },[mode]);
  function ptScreen(ev){var r=cv.current.getBoundingClientRect();var t=ev.touches&&ev.touches[0]?ev.touches[0]:ev;return{x:t.clientX-r.left,y:t.clientY-r.top};}
  function start(ev){
    ev.preventDefault();
    var ts=ev.touches?Array.prototype.slice.call(ev.touches):[];
    if(ts.length>=2){ var r=cv.current.getBoundingClientRect(); var a={x:ts[0].clientX-r.left,y:ts[0].clientY-r.top}, b={x:ts[1].clientX-r.left,y:ts[1].clientY-r.top}; gesture.current={mode:"pinch",d0:Math.max(1,Math.hypot(b.x-a.x,b.y-a.y)),mid:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},s0:view.current.s,ox0:view.current.ox,oy0:view.current.oy}; draw.current.on=false; cur.current=null; return; }
    if(toolRef.current==="read"){ doReadout(ev); gesture.current={mode:"read"}; return; }
    if(toolRef.current==="pan"){ var pp=ptScreen(ev); gesture.current={mode:"pan",x:pp.x,y:pp.y,ox0:view.current.ox,oy0:view.current.oy}; return; }
    var p=ptScreen(ev); var w=s2w(p.x,p.y); var sw=widthRef.current/view.current.s;
    if(toolRef.current==="line"){cur.current={color:colorRef.current,width:sw,erase:false,line:true,pts:[w,w]};}
    else{cur.current={color:colorRef.current,width:(toolRef.current==="erase"?sw*6:sw),erase:toolRef.current==="erase",pts:[w]};}
    draw.current.on=true;
  }
  function move(ev){
    var g=gesture.current;
    if(g){
      ev.preventDefault();
      if(g.mode==="pinch"){
        var ts=ev.touches?Array.prototype.slice.call(ev.touches):[]; if(ts.length<2) return;
        var r=cv.current.getBoundingClientRect(); var a={x:ts[0].clientX-r.left,y:ts[0].clientY-r.top}, b={x:ts[1].clientX-r.left,y:ts[1].clientY-r.top};
        var d=Math.max(1,Math.hypot(b.x-a.x,b.y-a.y)); var mid={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
        var ns=Math.max(0.3,Math.min(6,g.s0*(d/g.d0)));
        var wmx=(g.mid.x-g.ox0)/g.s0, wmy=(g.mid.y-g.oy0)/g.s0;
        view.current.s=ns; view.current.ox=mid.x-wmx*ns; view.current.oy=mid.y-wmy*ns;
        redraw(); commitView(); return;
      }
      if(g.mode==="read"){ ev.preventDefault(); doReadout(ev); return; }
      if(g.mode==="pan"){ var pp=ptScreen(ev); view.current.ox=g.ox0+(pp.x-g.x); view.current.oy=g.oy0+(pp.y-g.y); redraw(); commitView(); return; }
    }
    if(!draw.current.on)return; ev.preventDefault();
    var p=ptScreen(ev); var w=s2w(p.x,p.y); var st=cur.current;
    if(st.line){st.pts[1]=w; redraw(); strokeSeg(st,st.pts[0],w);}
    else{st.pts.push(w); var n=st.pts.length; strokeSeg(st,st.pts[n-2],w);}
  }
  function end(){ if(gesture.current){gesture.current=null;return;} if(draw.current.on&&cur.current&&cur.current.pts.length){strokes.current.push(cur.current);redoStk.current=[];persistStrokes();} draw.current.on=false; cur.current=null; }
  function undo(){if(strokes.current.length){redoStk.current.push(strokes.current.pop());redraw();persistStrokes();}}
  function redo(){if(redoStk.current.length){strokes.current.push(redoStk.current.pop());redraw();persistStrokes();}}
  function clearAll(){strokes.current=[];redoStk.current=[];readRef.current=null;redraw();persistStrokes();}
  const FCOLORS=["#4a90d9","#e05252","#50c878","#e9b446"];
  React.useEffect(()=>{ funcsRef.current=funcs.map(function(f){var cf=null;if(f.expr){try{cf=calcCompile(f.expr);}catch(e){cf=null;}}return{expr:f.expr,color:f.color,on:f.on,compiled:cf,keyPts:cf?computeKeyPts(cf,-60,60):[]};}); intersRef.current=computeIntersections(funcsRef.current,-60,60); redraw(); },[funcs]);
  React.useEffect(()=>{keyPtsRef.current=keyPts;redraw();},[keyPts]);
  function addFn(){ setAxes(true); setGrid(true); setFuncs(function(fs){ return fs.length>=4?fs:fs.concat([{expr:"",color:FCOLORS[fs.length%4],on:true}]); }); }
  function removeFn(i){ setFuncs(function(fs){ return fs.filter(function(_x,j){return j!==i;}); }); }
  function setFnExpr(i,val){ var vv=val.replace(/^\s*(y|f\(x\))\s*=\s*/i,""); setFuncs(function(fs){ return fs.map(function(f,j){ return j===i?{expr:vv,color:f.color,on:f.on}:f; }); }); }
  function toggleFn(i){ setFuncs(function(fs){ return fs.map(function(f,j){ return j===i?{expr:f.expr,color:f.color,on:!f.on}:f; }); }); }
  function doReadout(ev){
    var p=ptScreen(ev); var V=view.current; var mx=((p.x-V.ox)/V.s)/24;
    var best=null,bestD=1e9;
    (funcsRef.current||[]).forEach(function(fn,fi){ if(!fn.on||!fn.compiled)return; var my; try{my=fn.compiled(mx);}catch(e){return;} if(!isFinite(my))return; var sy=(-my*24)*V.s+V.oy; var d=Math.abs(sy-p.y); if(d<bestD){bestD=d;best={fi:fi,mx:mx,my:my,color:fn.color};} });
    if(!best) return;
    var snap=null,snapD=18;
    (((funcsRef.current[best.fi]||{}).keyPts)||[]).forEach(function(kp){ var sx=(kp.x*24)*V.s+V.ox; var sy=(-kp.y*24)*V.s+V.oy; var dd=Math.hypot(sx-p.x,sy-p.y); if(dd<snapD){snapD=dd;snap=kp;} });
    if(snap) readRef.current={x:snap.x,y:snap.y,color:best.color,kind:snap.kind};
    else readRef.current={x:best.mx,y:best.my,color:best.color,kind:null};
    redraw();
  }
  function doSolve(){ var r; try{ r=solveEquation(solveInput); }catch(e){ r={error:"Ne mogu riješiti"}; } setSolveRes(r); }
  function zoomBy(factor){ var c=cv.current; if(!c)return; var dpr=window.devicePixelRatio||1; var Wc=c.width/dpr,Hc=c.height/dpr; var cxp=Wc/2,cyp=Hc/2; var v=view.current; var wx=(cxp-v.ox)/v.s, wy=(cyp-v.oy)/v.s; var ns=Math.max(0.3,Math.min(6,v.s*factor)); v.s=ns; v.ox=cxp-wx*ns; v.oy=cyp-wy*ns; redraw(); commitView(); }
  function zoomReset(){ var c=cv.current; if(!c)return; var dpr=window.devicePixelRatio||1; var Wc=c.width/dpr,Hc=c.height/dpr; var v=view.current; v.s=1; v.ox=Wc/2; v.oy=Hc/2; redraw(); commitView(); }
  function cins(t){setCalcErr("");setCalcExpr(function(x){return x+t;});}
  function cbksp(){setCalcErr("");setCalcExpr(function(x){if(!x)return x;var tk=["sqrt(","sin(","cos(","tan(","asin(","acos(","atan(","log(","ln(","abs("];for(var i=0;i<tk.length;i++){if(x.slice(-tk[i].length)===tk[i])return x.slice(0,-tk[i].length);}return x.slice(0,-1);});}
  function cans(){setCalcErr("");setCalcExpr(function(x){return x+(calcHist.length?calcHist[calcHist.length-1].r.replace(/·10\^/,"e").replace(/,/,"."):"");});}
  function cequals(){
    var m=calcExpr.match(/^\s*([A-D])\s*=\s*(.+)$/);
    if(m){ try{ var av=calcEval(m[2],deg,vars); setVars(function(vv){var nv=Object.assign({},vv);nv[m[1]]=av;return nv;}); setCalcHist(function(h){return h.concat([{e:m[1]+" =",r:(exact?exactFmt(av):calcFmt(av))}]).slice(-40);}); setCalcExpr(""); setCalcErr(""); }catch(err){ setCalcErr(typeof err==="string"?err:"Neispravan izraz"); } return; }
    try{ var v=calcEval(calcExpr,deg,vars); var r=exact?exactFmt(v):calcFmt(v); setCalcHist(function(h){return h.concat([{e:calcExpr,r:r}]).slice(-40);}); setCalcExpr(r); setCalcErr(""); }catch(err){ setCalcErr(typeof err==="string"?err:"Neispravan izraz"); }
  }
  function storeVar(L){
    var src=calcExpr.trim()?calcExpr:(calcHist.length?(""+calcHist[calcHist.length-1].r).replace(/\u00b710\^/,"e").replace(/,/,"."):"");
    if(!src){ setStoreMode(false); return; }
    try{ var val=calcEval(src,deg,vars); setVars(function(vv){var nv=Object.assign({},vv);nv[L]=val;return nv;}); setCalcHist(function(h){return h.concat([{e:L+" \u2190",r:(exact?exactFmt(val):calcFmt(val))}]).slice(-40);}); setCalcExpr(""); setCalcErr(""); }catch(e){ setCalcErr("Ne mogu spremiti"); }
    setStoreMode(false);
  }
  const COLORS=["#1a1a1a","#4a90d9","#e05252","#50c878"];
  const tbtn={padding:"6px 9px",borderRadius:8,borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(255,255,255,.3)",background:"transparent",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer",whiteSpace:"nowrap"};
  const actBtn=function(on){return Object.assign({},tbtn,on?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{});};
  const zbtn={width:30,height:30,borderRadius:99,border:"none",background:"transparent",color:"#fff",fontWeight:800,fontSize:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"};
  var preview="";
  if(mode==="calc"&&calcExpr.trim()){ var _mm=calcExpr.match(/^\s*([A-D])\s*=\s*(.+)$/); var _ex=_mm?_mm[2]:calcExpr; try{var pv=calcEval(_ex,deg,vars);if(isFinite(pv))preview=(_mm?(_mm[1]+" = "):"")+(exact?exactFmt(pv):calcFmt(pv));}catch(e){} }
  const BTNS=[
    {l:"C",a:()=>{setCalcExpr("");setCalcErr("");},k:"clr"},{l:"(",a:()=>cins("("),k:"par"},{l:")",a:()=>cins(")"),k:"par"},{l:"√",a:()=>cins("√("),k:"fn"},{l:"⌫",a:cbksp,k:"par"},
    {l:"sin",a:()=>cins("sin("),k:"fn"},{l:"cos",a:()=>cins("cos("),k:"fn"},{l:"tan",a:()=>cins("tan("),k:"fn"},{l:"x²",a:()=>cins("^2"),k:"fn"},{l:"^",a:()=>cins("^"),k:"op"},
    {l:"7",a:()=>cins("7"),k:"num"},{l:"8",a:()=>cins("8"),k:"num"},{l:"9",a:()=>cins("9"),k:"num"},{l:"π",a:()=>cins("π"),k:"fn"},{l:"÷",a:()=>cins("÷"),k:"op"},
    {l:"4",a:()=>cins("4"),k:"num"},{l:"5",a:()=>cins("5"),k:"num"},{l:"6",a:()=>cins("6"),k:"num"},{l:"e",a:()=>cins("e"),k:"fn"},{l:"×",a:()=>cins("×"),k:"op"},
    {l:"1",a:()=>cins("1"),k:"num"},{l:"2",a:()=>cins("2"),k:"num"},{l:"3",a:()=>cins("3"),k:"num"},{l:"log",a:()=>cins("log("),k:"fn"},{l:"−",a:()=>cins("−"),k:"op"},
    {l:"0",a:()=>cins("0"),k:"num"},{l:",",a:()=>cins(","),k:"num"},{l:"Ans",a:cans,k:"fn"},{l:"ln",a:()=>cins("ln("),k:"fn"},{l:"+",a:()=>cins("+"),k:"op"}
  ];
  function cbtn(b,i){
    var bg=b.k==="num"?"#fffdf6":b.k==="op"?"rgba(74,144,217,.2)":b.k==="clr"?"rgba(224,82,82,.2)":b.k==="par"?"rgba(255,255,255,.12)":"rgba(255,255,255,.07)";
    var col=b.k==="num"?"#161616":b.k==="clr"?"#ffb4b4":"#fff";
    return e("button",{key:i,onClick:b.a,style:{padding:"13px 0",borderRadius:10,border:"1px solid rgba(255,255,255,.12)",background:bg,color:col,fontWeight:700,fontSize:b.k==="fn"?13.5:16,cursor:"pointer",fontFamily:"var(--fb)"}},b.l);
  }
  return e("div",{className:"scratch-overlay",style:{zIndex:300,background:"rgba(9,13,26,.96)",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",display:"flex",flexDirection:"column",padding:10}},
    intro&&e("div",{style:{position:"absolute",inset:0,zIndex:50,background:"rgba(6,10,20,.93)",WebkitBackdropFilter:"blur(4px)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,overflowY:"auto"}},
      e("div",{style:{maxWidth:440,width:"100%",background:"linear-gradient(160deg,#101829,#0b101c)",border:"1px solid var(--bdr2)",borderRadius:16,padding:"22px 22px 18px",boxShadow:"0 24px 60px rgba(0,0,0,.55)"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:23,marginBottom:4,color:"#fff"}},"Radni prostor"),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.6)",marginBottom:17,lineHeight:1.5}},"Tvoj digitalni papir za ra\u010dun, uz svako pitanje. Evo \u0161to sve mo\u017ee:"),
        [["\u270f\ufe0f","Skica","Crtaj i skiciraj po beskona\u010dnom platnu \u2014 kvadrati\u0107i, ravnalo, gumica, zoom."],
         ["📈","Grafer","U Skici upi\u0161i f(x) \u2014 nacrta graf s nulto\u010dkama, tjemenima i sjeci\u0161tima."],
         ["📋","Figura zadatka","Uvuci sliku iz zadatka i crtaj ili mjeri direktno po njoj."],
         ["🧮","Ra\u010dunalo","Znanstveni kalkulator. Spremi vrijednosti (STO \u2192 A\u2013D), egzaktni mod (razlomci, \u221a)."],
         
         ["👁\ufe0f","Zadatak","Pogledaj tekst i sliku zadatka bez zatvaranja prostora."]
        ].filter(function(r){return !(examMode&&r[1]==="Grafer");}).map(function(r,i){return e("div",{key:i,style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}},
          e("span",{style:{fontSize:19,flexShrink:0,width:26,textAlign:"center",lineHeight:1.3}},r[0]),
          e("div",null,
            e("div",{style:{fontSize:14,fontWeight:800,color:"#fff",marginBottom:1}},r[1]),
            e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.62)",lineHeight:1.45}},r[2])));}),
        e("div",{style:{fontSize:12,color:"rgba(255,255,255,.45)",margin:"4px 0 16px",lineHeight:1.5}},"💾 Sve se pamti uz pitanje \u2014 kad se vrati\u0161, tu je."),
        e("button",{onClick:dismissIntro,style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"var(--fb)"}},"Kreni \u270f\ufe0f")
      )
    ),
    examMode&&e("div",{style:{display:"flex",alignItems:"center",gap:9,background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"8px 12px",marginBottom:10}},e("span",{style:{fontSize:15,flexShrink:0}},"📄"),e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.6)",lineHeight:1.4}},e("strong",{style:{color:"rgba(255,255,255,.85)"}},"Uvjeti mature:")," olovka, papir i osnovni kalkulator \u2014 bez AI-a i rje\u0161ava\u010da.")),
     e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}},
      e("div",{style:{display:"flex",gap:3,marginRight:"auto",background:"rgba(0,0,0,.28)",borderRadius:99,padding:3,overflowX:"auto",maxWidth:"100%"}},
        (examMode?[["skica","✏️ Skica"],["calc","🧮 Računalo"]]:[["skica","✏️ Skica"],["calc","🧮 Računalo"],["asistent","📐 Asistent"]]).map(t=>e("button",{key:t[0],onClick:()=>setMode(t[0]),style:{padding:"6px 11px",borderRadius:99,border:"none",background:mode===t[0]?"var(--blue)":"transparent",color:"#fff",fontWeight:700,fontSize:12.5,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}},t[1]))),
      (qText||figure)&&e("button",{onClick:()=>setPeek(p=>!p),title:"Pogledaj zadatak",style:{padding:"7px 11px",borderRadius:8,border:"1px solid var(--bdr2)",background:peek?"var(--blue)":"rgba(255,255,255,.08)",color:"#fff",fontWeight:700,fontSize:12.5,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap"}},"👁 zadatak"),
      e("button",{onClick:onClose,style:{padding:"7px 13px",borderRadius:8,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer"}},"✓ Gotovo")
    ),
    qText&&e("div",{style:{marginBottom:8,borderRadius:10,border:"1px solid var(--bdr2)",background:"rgba(74,144,217,.08)",overflow:"hidden",flexShrink:0}},e("div",{onClick:()=>setTaskOpen(function(v){return !v;}),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 11px",cursor:"pointer",userSelect:"none"}},e("span",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#9ec5f0"}},"📋 Zadatak"),e("span",{style:{marginLeft:"auto",fontSize:12,color:"rgba(255,255,255,.6)"}},taskOpen?"\u25be sakrij":"\u25b8 prika\u017ei")),taskOpen&&e("div",{style:{padding:"0 12px 11px",maxHeight:"26vh",overflowY:"auto"}},e("div",{style:{fontSize:14,lineHeight:1.55,color:"#fff",marginBottom:(qOpts&&qOpts.length)?8:0}},renderQText(qText)),(qOpts&&qOpts.length>0)&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},qOpts.map(function(opt,i){return e("div",{key:i,style:{fontSize:13,color:"rgba(255,255,255,.9)",display:"flex",gap:7,lineHeight:1.5}},e("span",{style:{fontWeight:800,color:"#9ec5f0",flexShrink:0}},"("+(["A","B","C","D","E","F"][i]||"?")+")"),e("span",null,renderOptText(opt)));})))),
    peek&&e("div",{onClick:()=>setPeek(false),style:{position:"absolute",top:50,left:0,right:0,bottom:0,zIndex:7,background:"rgba(0,0,0,.35)"}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{margin:"6px 8px",maxHeight:"calc(100% - 14px)",overflowY:"auto",background:"rgba(12,16,28,.99)",border:"1px solid var(--bdr2)",borderRadius:12,padding:"12px 14px",boxShadow:"0 18px 44px rgba(0,0,0,.55)"}},
        e("div",{style:{display:"flex",alignItems:"center",marginBottom:8}},
          e("span",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#9ec5f0"}},"Zadatak"),
          e("button",{onClick:()=>setPeek(false),style:{marginLeft:"auto",padding:"4px 10px",borderRadius:7,border:"1px solid var(--bdr2)",background:"transparent",color:"rgba(255,255,255,.7)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)"}},"\u00d7 zatvori")),
        qText&&e("div",{style:{fontSize:14.5,lineHeight:1.6,color:"#fff",marginBottom:(figure||(qOpts&&qOpts.length))?9:0}}, renderQText(qText)),
        figure&&e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,padding:10,display:"inline-block",maxWidth:"100%",marginBottom:(qOpts&&qOpts.length)?9:0}}, figure),
        (qOpts&&qOpts.length>0)&&e("div",{style:{display:"flex",flexDirection:"column",gap:5}}, qOpts.map(function(opt,i){return e("div",{key:i,style:{fontSize:13.5,color:"rgba(255,255,255,.92)",display:"flex",gap:7,lineHeight:1.5}}, e("span",{style:{fontWeight:800,color:"#9ec5f0",flexShrink:0}},"("+(["A","B","C","D","E","F"][i]||"?")+")"), e("span",null,renderOptText(opt)));}))
      )
    ),
    figure&&e("div",{ref:figHiddenRef,"aria-hidden":true,style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none",left:-99999,top:-99999}}, figure),
    mode==="skica"&&e(React.Fragment,null,
      e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"}},
        ...COLORS.map(col=>e("button",{key:col,onClick:()=>{setColor(col);setTool("pen");},title:"Boja",style:{width:24,height:24,borderRadius:99,background:col,border:(color===col&&tool!=="erase"&&tool!=="pan")?"3px solid #fff":"2px solid rgba(255,255,255,.4)",cursor:"pointer",padding:0}})),
        e("button",{onClick:()=>setTool("pen"),title:"Olovka",style:actBtn(tool==="pen")},"✎"),
        e("button",{onClick:()=>setTool("line"),title:"Ravnalo — ravna crta",style:actBtn(tool==="line")},"╱ crta"),
        e("button",{onClick:()=>setTool("erase"),title:"Gumica",style:actBtn(tool==="erase")},"⌫ guma"),
        e("button",{onClick:()=>setTool("pan"),title:"Pomakni (ili 2 prsta)",style:actBtn(tool==="pan")},"✋ pomak"),
        e("button",{onClick:()=>setWidth(w=>w<=2.4?4.2:2.4),title:"Debljina olovke",style:tbtn},width<=2.4?"│":"┃"),
        e("button",{onClick:()=>setGrid(g=>!g),title:"Kvadratići",style:actBtn(grid)},grid?"▦":"▢"),
        e("button",{onClick:()=>setAxes(a=>!a),title:"Koordinatne osi",style:actBtn(axes)},"✛ osi"),
        !examMode&&e("button",{onClick:()=>{ setShowGraph(function(g){ var nv=!g; if(nv){ setAxes(true); setGrid(true); setFuncs(function(fs){return fs.length?fs:[{expr:"",color:FCOLORS[0],on:true}];}); } return nv; }); },title:"Crtaj funkciju f(x)",style:actBtn(showGraph)},"📈 graf"),
        figure&&e("button",{onClick:()=>figOn?removeFigure():importFigure(),title:figOn?"Ukloni figuru":"Uvuci figuru zadatka",style:actBtn(figOn)},figOn?"📋 ukloni":"📋 figura"),
        e("button",{onClick:undo,title:"Poništi potez",style:tbtn},"↶"),
        e("button",{onClick:redo,title:"Ponovi potez",style:tbtn},"↷"),
        e("button",{onClick:clearAll,title:"Očisti sve",style:tbtn},"očisti")
      ),
      (!examMode&&showGraph)&&e("div",{style:{background:"rgba(255,255,255,.06)",borderRadius:10,padding:"9px 10px",marginBottom:8,display:"flex",flexDirection:"column",gap:7}},
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("button",{onClick:()=>setKeyPts(v=>!v),title:"Nultočke, tjemena, sjecišta",style:Object.assign({},tbtn,{fontSize:11.5,padding:"5px 10px"},keyPts?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{})},"• ključne točke"),
          e("button",{onClick:()=>setTool(t=>t==="read"?"pen":"read"),title:"Dodirni krivulju za koordinate",style:Object.assign({},tbtn,{fontSize:11.5,padding:"5px 10px"},tool==="read"?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{})},"📍 očitaj")),
        funcs.length===0?e("div",{style:{color:"rgba(255,255,255,.4)",fontSize:12.5,textAlign:"center"}},"Dodaj funkciju da je nacrtaš"):null,
        funcs.map(function(f,i){ var valid=true; if(f.expr){ try{ calcCompile(f.expr); }catch(e){ valid=false; } } return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:8}},
          e("span",{onClick:()=>toggleFn(i),title:f.on?"Sakrij":"Prikaži",style:{width:15,height:15,borderRadius:99,background:f.color,opacity:f.on?1:.3,flexShrink:0,cursor:"pointer",border:"2px solid rgba(255,255,255,.25)"}}),
          e("span",{style:{color:"rgba(255,255,255,.7)",fontSize:14,fontWeight:700,fontFamily:"var(--fb)"}},"y ="),
          e("input",{value:f.expr,onChange:ev=>setFnExpr(i,ev.target.value),placeholder:"x^2 − 3",spellCheck:false,style:{flex:1,border:"1px solid "+(valid?"rgba(255,255,255,.18)":"#e05252"),background:"rgba(0,0,0,.28)",color:"#fff",borderRadius:8,padding:"7px 10px",fontSize:15,fontFamily:"var(--fb)",outline:"none",boxSizing:"border-box",minWidth:0}}),
          e("button",{onClick:()=>removeFn(i),title:"Ukloni",style:{background:"none",border:"none",color:"rgba(255,255,255,.5)",fontSize:16,cursor:"pointer",padding:"0 4px",flexShrink:0}},"✕")
        ); }),
        funcs.length<4&&e("button",{onClick:addFn,style:{alignSelf:"flex-start",background:"none",border:"1px dashed rgba(255,255,255,.3)",color:"#fff",borderRadius:8,padding:"6px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"+ funkcija")
      ),
      e("div",{ref:wrap,style:{flex:1,position:"relative",background:"#fefdf8",borderRadius:12,overflow:"hidden",boxShadow:"0 10px 40px -10px rgba(0,0,0,.5)",touchAction:"none"}},
        e("canvas",{ref:cv,onMouseDown:start,onMouseMove:move,onMouseUp:end,onMouseLeave:end,onTouchStart:start,onTouchMove:move,onTouchEnd:end,style:{display:"block",cursor:tool==="pan"?"grab":tool==="erase"?"cell":"crosshair"}}),
        e("div",{style:{position:"absolute",right:10,bottom:10,display:"flex",alignItems:"center",gap:2,background:"rgba(9,13,26,.85)",borderRadius:99,padding:"3px 5px",border:"1px solid rgba(255,255,255,.2)"}},
          e("button",{onClick:()=>zoomBy(1/1.25),title:"Smanji",style:zbtn},"−"),
          e("button",{onClick:zoomReset,title:"Vrati na 100%",style:{padding:"0 8px",height:30,borderRadius:99,border:"none",background:"transparent",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer",minWidth:46}},zPct+"%"),
          e("button",{onClick:()=>zoomBy(1.25),title:"Povećaj",style:zbtn},"+")
        )
      )
    ),
    mode==="calc"&&e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0}},
      e("div",{style:{flex:1,overflowY:"auto",marginBottom:8,display:"flex",flexDirection:"column",gap:4,justifyContent:"flex-end"}},
        calcHist.length===0
          ?e("div",{style:{color:"rgba(255,255,255,.32)",fontSize:12,textAlign:"center",padding:"14px 0"}},"Tu se slažu tvoji računi — dodirni rezultat za ponovnu upotrebu")
          :calcHist.map((h,i)=>e("button",{key:i,onClick:()=>setCalcExpr(x=>x+h.r.replace(/·10\^/,"e").replace(/,/,".")),style:{display:"flex",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,.05)",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontFamily:"var(--fb)",textAlign:"left"}},
            e("span",{style:{color:"rgba(255,255,255,.5)",fontSize:12.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},h.e),
            e("span",{style:{color:"#fff",fontSize:13,fontWeight:700,flexShrink:0}},"= "+h.r)))
      ),
      e("div",{style:{display:"flex",gap:6,marginBottom:6,alignItems:"center"}},
        e("button",{onClick:()=>setExact(v=>!v),title:exact?"Decimalni prikaz":"Egzaktno (razlomci, korijeni)",style:{padding:"4px 12px",borderRadius:99,border:"1px solid rgba(255,255,255,.22)",background:exact?"var(--gold)":"transparent",color:exact?"#1a1a1a":"#fff",fontWeight:800,fontSize:11,cursor:"pointer",fontFamily:"var(--fb)"}}, exact?"= egzaktno":"≈ decimala"),
        e("div",{style:{marginLeft:"auto",display:"flex",gap:6}}, ["DEG","RAD"].map(mm=>e("button",{key:mm,onClick:()=>setDeg(mm==="DEG"),title:mm==="DEG"?"Stupnjevi":"Radijani",style:{padding:"4px 12px",borderRadius:99,border:"1px solid rgba(255,255,255,.22)",background:(deg===(mm==="DEG"))?"var(--blue)":"transparent",color:"#fff",fontWeight:700,fontSize:11,cursor:"pointer"}},mm)))),
      e("div",{style:{background:"rgba(0,0,0,.28)",borderRadius:12,padding:"11px 14px",marginBottom:10}},
        e("input",{value:calcExpr,onChange:ev=>{setCalcExpr(ev.target.value);setCalcErr("");},onKeyDown:ev=>{if(ev.key==="Enter"){ev.preventDefault();cequals();}},placeholder:"npr. 2·(3+5)^2 − √16",inputMode:"text",spellCheck:false,style:{width:"100%",border:"none",background:"transparent",color:"#fff",fontSize:22,fontWeight:700,textAlign:"right",outline:"none",fontFamily:"var(--fb)",boxSizing:"border-box"}}),
        e("div",{style:{textAlign:"right",color:calcErr?"#ffb4b4":"rgba(255,255,255,.55)",fontSize:15,fontWeight:600,minHeight:20,marginTop:3}}, calcErr?("⚠ "+calcErr):(preview!==""?("= "+preview):""))
      ),
      e("div",{style:{display:"flex",gap:5,marginBottom:8,alignItems:"center"}},
        e("button",{onClick:()=>setStoreMode(s=>!s),title:storeMode?"Odustani":"Spremi prikaz u varijablu (pa odaberi A\u2013D)",style:{padding:"7px 9px",borderRadius:8,border:"1px solid "+(storeMode?"var(--gold)":"rgba(255,255,255,.16)"),background:storeMode?"var(--gold)":"rgba(255,255,255,.06)",color:storeMode?"#1a1a1a":"#fff",fontSize:12.5,fontWeight:800,cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}}, storeMode?"\u2192 ?":"STO"),
        ["A","B","C","D"].map(function(L){var val=vars[L]; return e("button",{key:L,onClick:()=>{ if(storeMode){storeVar(L);} else {cins(L);} },title:val!=null?(L+" = "+(exact?exactFmt(val):calcFmt(val))):("Umetni "+L),style:{flex:"1 1 0",minWidth:0,padding:"7px 4px",borderRadius:8,border:"1px solid "+(storeMode?"var(--gold)":"rgba(255,255,255,.16)"),background:storeMode?"rgba(233,180,70,.18)":(val!=null?"rgba(80,200,120,.18)":"rgba(255,255,255,.06)"),color:"#fff",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}, val!=null?(L+"="+(exact?exactFmt(val):calcFmt(val))):L);}),
        Object.keys(vars).length>0&&e("button",{onClick:()=>setVars({}),title:"O\u010disti memoriju A\u2013D",style:{padding:"7px 9px",borderRadius:8,border:"1px solid rgba(255,255,255,.16)",background:"transparent",color:"rgba(255,255,255,.6)",fontSize:12,cursor:"pointer",flexShrink:0}},"\u232b")
      ),
      e("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}}, BTNS.map(cbtn)),
      e("button",{onClick:cequals,style:{width:"100%",padding:"15px 0",marginTop:8,borderRadius:12,border:"none",background:"var(--green)",color:"#fff",fontWeight:800,fontSize:19,cursor:"pointer",fontFamily:"var(--fb)"}},"=")
    ),
    (!examMode&&mode==="asistent")&&e(MathAssistant,{qText:qText,qType:qType,seed:seedAsk}),
    mode==="solve"&&e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0}},e("div",{style:{marginBottom:12,flexShrink:0}},e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"#9ec5f0",marginBottom:8}},"📐 Rije\u0161i ovaj zadatak"),(!(qSteps&&qSteps.length))?e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.45)",padding:"2px 0"}},"Za ovaj zadatak nema upisanog postupka \u2014 koristi solver ispod."):!answered?e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.6)",background:"rgba(255,255,255,.05)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"10px 13px",lineHeight:1.5}},"🔒 Prvo rije\u0161i i provjeri zadatak \u2014 slu\u017ebeni postupak se otklju\u010da nakon toga."):!showOfficial?e("button",{onClick:()=>setShowOfficial(true),style:{padding:"9px 14px",borderRadius:10,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"var(--fb)"}},"📐 Prika\u017ei postupak korak po korak"):e("div",{style:{background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr2)",borderRadius:12,padding:"12px 14px"}},(qSol&&(qSol.cl||qSol.ans!=null||qSol.ex))&&e("div",{style:{fontSize:13.5,fontWeight:700,color:"var(--green)",marginBottom:9}},"\u2713 To\u010dno: "+(qSol.cl?qSol.cl:(qSol.ans!=null?String(qSol.ans):qSol.ex))),(function(){var num=0;return qSteps.map(function(step,i){if(step==="\u2500\u2500\u2500"||step==="---")return e("div",{key:i,style:{height:1,background:"var(--bdr)",margin:"7px 0"}});var st=(typeof step==="string")?{txt:step,note:null}:step;var isMeta=st.note&&/intuicija|verifikacija|odgovor|diagnostika|postupak/.test(st.note);var fin=isMeta||(typeof st.txt==="string"&&(st.txt.indexOf("\u2192")===0||st.txt.indexOf("\u2234")===0));if(!fin)num++;return e("div",{key:i,style:{display:"flex",gap:9,alignItems:"flex-start",padding:"4px 0"}},e("span",{style:{width:20,height:20,borderRadius:99,background:fin?"rgba(80,200,120,.2)":"rgba(74,144,217,.2)",color:fin?"var(--green)":"#9ec5f0",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--fb)"}},fin?"\u2192":num),e("span",{style:{fontSize:13.5,color:"#fff",lineHeight:1.5}},renderOptText(st.txt),st.note&&typeof st.note==="string"&&e("span",{style:{marginLeft:6,fontSize:10.5,color:"rgba(255,255,255,.45)",fontStyle:"italic"}},st.note)));});})()),e("div",{style:{height:1,background:"var(--bdr)",margin:"14px 0 10px"}}),e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:8}},"🧩 Ili rije\u0161i svoju jednad\u017ebu")),
      e("div",{style:{display:"flex",gap:8,marginBottom:8}},
        e("input",{value:solveInput,onChange:ev=>setSolveInput(ev.target.value),onKeyDown:ev=>{if(ev.key==="Enter"){ev.preventDefault();doSolve();}},placeholder:"npr. x^2 \u2212 4x + 3 = 0",spellCheck:false,style:{flex:1,border:"1px solid rgba(255,255,255,.2)",background:"rgba(0,0,0,.28)",color:"#fff",borderRadius:10,padding:"11px 13px",fontSize:17,fontWeight:700,fontFamily:"var(--fb)",outline:"none",boxSizing:"border-box",minWidth:0}}),
        e("button",{onClick:doSolve,style:{padding:"0 18px",borderRadius:10,border:"none",background:"var(--green)",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap"}},"Rije\u0161i")
      ),
      e("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}},
        autoEq&&e("button",{onClick:()=>{setSolveInput(autoEq);setSolveRes(solveEquation(autoEq));},title:"Ubaci i rije\u0161i jednad\u017ebu iz zadatka",style:{background:"var(--green-d)",border:"1px solid var(--green)",color:"var(--green)",borderRadius:99,padding:"5px 11px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"📝 Iz zadatka"),
        ["2x+1=5","x^2-4x+3=0","x^2=2x+8","x^2+1=0"].map(function(ex){return e("button",{key:ex,onClick:()=>{setSolveInput(ex);setSolveRes(solveEquation(ex));},style:{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.15)",color:"rgba(255,255,255,.8)",borderRadius:99,padding:"5px 11px",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)"}},ex);})
      ),
      e("div",{style:{flex:1,overflowY:"auto"}},
        !solveRes?e("div",{style:{color:"rgba(255,255,255,.35)",fontSize:13,textAlign:"center",padding:"20px 10px",lineHeight:1.6}},"Upi\u0161i linearnu ili kvadratnu jednad\u017ebu pa Rije\u0161i \u2014 prikazat \u0107u korake i rje\u0161enja."):
        solveRes.error?e("div",{style:{background:"rgba(224,82,82,.14)",border:"1px solid rgba(224,82,82,.4)",borderRadius:10,padding:"12px 14px",color:"#ffb4b4",fontSize:13.5,fontWeight:600}},"\u26a0 "+solveRes.error):
        e("div",null,
          e("div",{style:{display:"flex",flexDirection:"column",gap:9,marginBottom:13}},
            solveRes.steps.map(function(st,i){return e("div",{key:i,style:{display:"flex",gap:10,alignItems:"flex-start"}},
              e("span",{style:{width:22,height:22,borderRadius:99,background:"rgba(74,144,217,.22)",color:"#9ec5f0",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--fb)"}},(i+1)),
              e("span",{style:{fontSize:14.5,color:"#fff",lineHeight:1.55,fontFamily:"var(--fb)",paddingTop:1}},st));})
          ),
          e("div",{style:{background:"var(--green-d)",border:"1px solid var(--green)",borderRadius:12,padding:"14px 16px"}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--green)",marginBottom:5}},"Rje\u0161enje"),
            e("div",{style:{fontSize:19,fontWeight:800,color:"#fff",fontFamily:"var(--fb)"}},solveRes.result))
        )
      )
    )
  );
}
export { Calculator, MathAssistant, ScratchPad };
