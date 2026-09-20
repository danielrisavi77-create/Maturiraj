// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Kalkulator/solver engine: tokenizacija, RPN, numericko rjesavanje i formatiranje. */
function _calcTokenize(raw, allowVar, vars){
  var s=String(raw).replace(/,/g,".").replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/·/g,"*").replace(/²/g,"^2").replace(/³/g,"^3").replace(/\s/g,"");
  if(!s) throw "Prazno";
  var tokens=[],i=0,funcs=["sqrt","sin","cos","tan","asin","acos","atan","log","ln","abs"];
  while(i<s.length){
    var ch=s[i];
    if(/[0-9.]/.test(ch)){var n="";while(i<s.length&&/[0-9.]/.test(s[i])){n+=s[i++];}tokens.push({t:"num",v:parseFloat(n)});continue;}
    if(/[a-zA-Z]/.test(ch)){var w="";while(i<s.length&&/[a-zA-Z]/.test(s[i])){w+=s[i++];}
      if(w==="PI")tokens.push({t:"num",v:Math.PI});
      else if(w==="e"||w==="E")tokens.push({t:"num",v:Math.E});
      else if(allowVar&&(w==="x"||w==="X"))tokens.push({t:"var"});
      else if(vars&&typeof vars[w]==="number")tokens.push({t:"num",v:vars[w]});
      else if(funcs.indexOf(w)>=0)tokens.push({t:"func",v:w});
      else throw "Nepoznato: "+w;
      continue;}
    if(ch==="√"){tokens.push({t:"func",v:"sqrt"});i++;continue;}
    if(ch==="π"){tokens.push({t:"num",v:Math.PI});i++;continue;}
    if("+-*/^".indexOf(ch)>=0){tokens.push({t:"op",v:ch});i++;continue;}
    if(ch==="("){tokens.push({t:"lp"});i++;continue;}
    if(ch===")"){tokens.push({t:"rp"});i++;continue;}
    if(ch==="!"){tokens.push({t:"fact"});i++;continue;}
    throw "Neispravan znak";
  }
  var t2=[];
  for(var k=0;k<tokens.length;k++){
    if(k>0){ var L=tokens[k-1].t, R=tokens[k].t;
      if((L==="num"||L==="var"||L==="rp"||L==="fact")&&(R==="num"||R==="var"||R==="func"||R==="lp")) t2.push({t:"op",v:"*"}); }
    t2.push(tokens[k]);
  }
  return t2;
}
function _calcRPN(tokens){
  var out=[],ops=[],prec={"+":2,"-":2,"*":3,"/":3,"^":4,"u-":4},rt={"^":1,"u-":1},prev=null;
  for(var k=0;k<tokens.length;k++){
    var tk=tokens[k];
    if(tk.t==="num"||tk.t==="fact"||tk.t==="var")out.push(tk);
    else if(tk.t==="func")ops.push(tk);
    else if(tk.t==="op"){
      var o=tk.v;
      if(o==="-"&&(prev===null||prev.t==="op"||prev.t==="lp"))o="u-";
      while(ops.length){
        var top=ops[ops.length-1];
        if(top.t==="op"&&(rt[o]?prec[top.v]>prec[o]:prec[top.v]>=prec[o]))out.push(ops.pop());
        else if(top.t==="func")out.push(ops.pop());
        else break;
      }
      ops.push({t:"op",v:o});
    }
    else if(tk.t==="lp")ops.push(tk);
    else if(tk.t==="rp"){
      while(ops.length&&ops[ops.length-1].t!=="lp")out.push(ops.pop());
      if(!ops.length)throw "Zagrade ne valjaju";
      ops.pop();
      if(ops.length&&ops[ops.length-1].t==="func")out.push(ops.pop());
    }
    prev=tk;
  }
  while(ops.length){var z=ops.pop();if(z.t==="lp")throw "Zagrade ne valjaju";out.push(z);}
  return out;
}
function _calcEvalRPN(out, deg, xVal){
  var st=[],d2r=deg?Math.PI/180:1;
  function fact(x){if(x<0||x!==Math.floor(x)||x>170)return NaN;var r=1;for(var j=2;j<=x;j++)r*=j;return r;}
  for(var m=0;m<out.length;m++){
    var t2=out[m];
    if(t2.t==="num")st.push(t2.v);
    else if(t2.t==="var")st.push(xVal);
    else if(t2.t==="fact"){if(!st.length)throw "Izraz";st.push(fact(st.pop()));}
    else if(t2.t==="op"){
      if(t2.v==="u-"){if(!st.length)throw "Izraz";st.push(-st.pop());}
      else{if(st.length<2)throw "Izraz";var b=st.pop(),a=st.pop();st.push(t2.v==="+"?a+b:t2.v==="-"?a-b:t2.v==="*"?a*b:t2.v==="/"?a/b:Math.pow(a,b));}
    }
    else if(t2.t==="func"){
      if(!st.length)throw "Izraz";var x=st.pop(),r;
      if(t2.v==="sqrt")r=Math.sqrt(x);
      else if(t2.v==="sin")r=Math.sin(x*d2r);
      else if(t2.v==="cos")r=Math.cos(x*d2r);
      else if(t2.v==="tan")r=Math.tan(x*d2r);
      else if(t2.v==="asin")r=Math.asin(x)/d2r;
      else if(t2.v==="acos")r=Math.acos(x)/d2r;
      else if(t2.v==="atan")r=Math.atan(x)/d2r;
      else if(t2.v==="log")r=Math.log(x)/Math.LN10;
      else if(t2.v==="ln")r=Math.log(x);
      else if(t2.v==="abs")r=Math.abs(x);
      else r=NaN;
      st.push(r);
    }
  }
  if(st.length!==1||isNaN(st[0]))throw "Neispravan izraz";
  return st[0];
}
function calcEval(raw, deg, vars){ return _calcEvalRPN(_calcRPN(_calcTokenize(raw,false,vars)), deg, undefined); }
function calcCompile(raw){ var out=_calcRPN(_calcTokenize(raw,true)); return function(x){ return _calcEvalRPN(out, false, x); }; }
function _bisectRoot(f,a,b){ var fa; try{fa=f(a);}catch(e){return null;} if(!isFinite(fa))return null; for(var k=0;k<50;k++){ var m=(a+b)/2,fm; try{fm=f(m);}catch(e){return null;} if(!isFinite(fm))return null; if(Math.abs(fm)<1e-10)return m; if((fa<0)===(fm<0)){a=m;fa=fm;}else b=m; } return (a+b)/2; }
function _bisectDiff(f,g,a,b){ var fa; try{fa=f(a)-g(a);}catch(e){return null;} if(!isFinite(fa))return null; for(var k=0;k<50;k++){ var m=(a+b)/2,fm; try{fm=f(m)-g(m);}catch(e){return null;} if(!isFinite(fm))return null; if(Math.abs(fm)<1e-10)return m; if((fa<0)===(fm<0)){a=m;fa=fm;}else b=m; } return (a+b)/2; }
function _refineExt(f,xc,step,isMin){ var bx=xc,by; try{by=f(xc);}catch(e){return null;} if(!isFinite(by))return null; var a=xc-step,b=xc+step,M=50; for(var i=0;i<=M;i++){ var x=a+(b-a)*i/M,y; try{y=f(x);}catch(e){continue;} if(!isFinite(y))continue; if(isMin?(y<by):(y>by)){by=y;bx=x;} } return {x:bx,y:by}; }
function computeKeyPts(f,x0,x1){
  var out=[],N=1400,step=(x1-x0)/N,pX=null,pY=null,pS=null;
  function add(x,y,kind){ for(var i=0;i<out.length;i++){ if(out[i].kind===kind&&Math.abs(out[i].x-x)<0.06) return; } out.push({x:x,y:y,kind:kind}); }
  try{ var y0=f(0); if(x0<=0&&x1>=0&&isFinite(y0)) add(0,y0,"y"); }catch(e){}
  for(var i=0;i<=N;i++){
    var x=x0+i*step,y; try{y=f(x);}catch(e){y=NaN;}
    if(isFinite(y)){
      if(pY!=null&&isFinite(pY)&&((pY<0&&y>=0)||(pY>0&&y<=0))){ var zx=_bisectRoot(f,pX,x); if(zx!=null) add(zx,0,"zero"); }
      if(pY!=null&&isFinite(pY)){ var s=y-pY; if(pS!=null&&((pS<0&&s>0)||(pS>0&&s<0))){ var _r=_refineExt(f,pX,step,s>0); if(_r) add(_r.x,_r.y,s>0?"min":"max"); } pS=s; } else pS=null;
    } else pS=null;
    pX=x; pY=y; if(out.length>80) break;
  }
  return out;
}
function computeIntersections(arr,x0,x1){
  var out=[],on=[]; (arr||[]).forEach(function(f){ if(f.on&&f.compiled) on.push(f); });
  for(var a=0;a<on.length;a++)for(var b2=a+1;b2<on.length;b2++){
    var f=on[a].compiled,g=on[b2].compiled,N=1400,step=(x1-x0)/N,pX=null,pD=null;
    for(var i=0;i<=N;i++){ var x=x0+i*step,fv,gv; try{fv=f(x);gv=g(x);}catch(e){fv=NaN;gv=NaN;} var d=fv-gv;
      if(isFinite(d)){ if(pD!=null&&isFinite(pD)&&((pD<0&&d>=0)||(pD>0&&d<=0))){ var ix=_bisectDiff(f,g,pX,x); if(ix!=null){ var iy; try{iy=f(ix);}catch(e){iy=NaN;} if(isFinite(iy)) out.push({x:ix,y:iy}); } } pX=x; pD=d; } else pD=null;
      if(out.length>60) break;
    }
  }
  return out;
}
function _fmtN(n){ if(!isFinite(n))return "\u221e"; if(Math.abs(n-Math.round(n))<1e-9) return (""+Math.round(n)).replace("-","\u2212"); var r=Math.round(n*1e4)/1e4; var s=""+r; if(Math.abs(n)>=1e9) s=n.toExponential(4); return s.replace(/-/g,"\u2212").replace(".",","); }
function _polyStr(a,b,c){
  var parts=[];
  function term(coef,suf){ if(Math.abs(coef)<1e-9) return null; var sign=(parts.length===0)?(coef<0?"\u2212":""):(coef<0?" \u2212 ":" + "); var ac=Math.abs(coef); var num=(Math.abs(ac-1)<1e-9&&suf)?"":_fmtN(ac); return sign+num+suf; }
  var t1=term(a,"x\u00b2"); if(t1)parts.push(t1);
  var t2=term(b,"x"); if(t2)parts.push(t2);
  var t3=term(c,""); if(t3)parts.push(t3);
  return parts.length?parts.join(""):"0";
}
function numericSolve(f){
  var roots=[],x0=-30,x1=30,N=3000,step=(x1-x0)/N,pX=null,pY=null;
  for(var i=0;i<=N;i++){ var x=x0+i*step,y; try{y=f(x);}catch(e){y=NaN;}
    if(isFinite(y)){ if(pY!=null&&isFinite(pY)&&((pY<0&&y>=0)||(pY>0&&y<=0))){ var r=_bisectRoot(f,pX,x); if(r!=null){ var dup=false; for(var k=0;k<roots.length;k++) if(Math.abs(roots[k]-r)<1e-4)dup=true; if(!dup)roots.push(r); } } }
    pX=x; pY=y; if(roots.length>12)break;
  }
  if(roots.length===0) return {ok:true,steps:["Nije linearna ni kvadratna \u2014 rje\u0161avam numeri\u010dki.","Nema realnih rje\u0161enja u rasponu \u27e8\u221230, 30\u27e9."],result:"Nema realnih rje\u0161enja (u \u27e8\u221230, 30\u27e9)",roots:[]};
  return {ok:true,steps:["Nije linearna ni kvadratna \u2014 rje\u0161avam numeri\u010dki (pribli\u017eno).","Nulto\u010dke izraza LHS \u2212 RHS:"],result:roots.map(function(r){return "x \u2248 "+_fmtN(r);}).join(",  "),roots:roots,numeric:true};
}
function extractSolverEq(t){
  if(!t) return null;
  var s=String(t).replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3").replace(/\u2074/g,"^4").replace(/\u2075/g,"^5").replace(/\u2212/g,"-").replace(/[\u00b7\u22c5\u00d7]/g,"*");
  var re=/[0-9xX().,^\-+*\/\s]*=[0-9xX().,^\-+*\/\s]+/g, m, out=null;
  while((m=re.exec(s))){
    var cand=m[0];
    if(cand.indexOf("x")<0&&cand.indexOf("X")<0) continue;
    if(!/[0-9]/.test(cand)) continue;
    var norm=cand.replace(/X/g,"x").replace(/([0-9]),([0-9])/g,"$1.$2").replace(/\s+/g,"").replace(/^[*\/^).,=+\-]+/,"").replace(/[+\-*\/^.,=]+$/,"");
    if(norm.indexOf("=")<0||norm.length<3) continue;
    var _L=norm.split("=")[0]; if(/^[a-zA-Z]?\(x\)$/.test(_L)||/^[yY]$/.test(_L)) continue;
    try{ var r=solveEquation(norm); if(r&&r.ok&&!r.error&&((r.roots&&r.roots.length)||/dvostruko|kompleks/.test(r.result||""))){ out=norm; break; } }catch(e){}
  }
  return out;
}
function solveEquation(raw){
  if(!raw||!String(raw).trim()) return null;
  var parts=String(raw).split("=");
  if(parts.length>2) return {error:"Previ\u0161e znakova ="};
  var lhs=parts[0], rhs=parts.length===2?parts[1]:"0";
  var f;
  try{ var fl=calcCompile(lhs), fr=calcCompile(rhs); f=function(x){return fl(x)-fr(x);}; }
  catch(e){ return {error:"Ne razumijem izraz"+(typeof e==="string"?(": "+e):"")}; }
  var f0,f1,fm1,f2,f3;
  try{ f0=f(0); f1=f(1); fm1=f(-1); f2=f(2); f3=f(3); }catch(e){ return {error:"Gre\u0161ka u ra\u010dunanju"}; }
  if(!([f0,f1,fm1,f2,f3].every(isFinite))) return numericSolve(f);
  var c=f0, a=(f1+fm1)/2-c, b=(f1-fm1)/2;
  if(Math.abs(4*a+2*b+c-f2)>1e-6*(1+Math.abs(f2)) || Math.abs(9*a+3*b+c-f3)>1e-6*(1+Math.abs(f3))) return numericSolve(f);
  if(Math.abs(a)<1e-9)a=0; if(Math.abs(b)<1e-9)b=0; if(Math.abs(c)<1e-9)c=0;
  var steps=["Svedeno na oblik:  "+_polyStr(a,b,c)+" = 0"];
  if(a===0){
    if(b===0){ var res0=(Math.abs(c)<1e-9)?"Beskona\u010dno rje\u0161enja (identitet)":"Nema rje\u0161enja"; steps.push(res0); return {ok:true,steps:steps,result:res0,roots:[]}; }
    steps.push("Linearna jednad\u017eba (a = 0).");
    steps.push("x = \u2212c / b = \u2212("+_fmtN(c)+") / ("+_fmtN(b)+")");
    var xr=-c/b;
    return {ok:true,steps:steps,result:"x = "+_fmtN(xr),roots:[xr]};
  }
  steps.push("Kvadratna:  a = "+_fmtN(a)+",  b = "+_fmtN(b)+",  c = "+_fmtN(c));
  var D=b*b-4*a*c;
  steps.push("Diskriminanta:  D = b\u00b2 \u2212 4ac = ("+_fmtN(b)+")\u00b2 \u2212 4\u00b7("+_fmtN(a)+")\u00b7("+_fmtN(c)+") = "+_fmtN(D));
  if(D>1e-9){
    var sq=Math.sqrt(D);
    steps.push("D > 0 \u2192 dva realna rje\u0161enja:  x = (\u2212b \u00b1 \u221aD) / (2a)");
    steps.push("x = ("+_fmtN(-b)+" \u00b1 "+_fmtN(sq)+") / "+_fmtN(2*a));
    return {ok:true,steps:steps,result:"x\u2081 = "+_fmtN((-b+sq)/(2*a))+",   x\u2082 = "+_fmtN((-b-sq)/(2*a)),roots:[(-b+sq)/(2*a),(-b-sq)/(2*a)]};
  } else if(D>-1e-9){
    steps.push("D = 0 \u2192 jedno (dvostruko) rje\u0161enje:  x = \u2212b / (2a)");
    return {ok:true,steps:steps,result:"x = "+_fmtN(-b/(2*a))+"   (dvostruko)",roots:[-b/(2*a)]};
  } else {
    var sqi=Math.sqrt(-D), re=-b/(2*a), im=sqi/(2*a);
    steps.push("D < 0 \u2192 dva kompleksna rje\u0161enja:  x = (\u2212b \u00b1 \u221aD) / (2a)");
    return {ok:true,steps:steps,result:"x\u2081\u2082 = "+_fmtN(re)+" \u00b1 "+_fmtN(Math.abs(im))+"i",roots:[],complex:true};
  }
}
function _toFrac(x){ if(!isFinite(x))return null; var neg=x<0; x=Math.abs(x); var h1=1,h0=0,k1=0,k0=1,b=x; for(var i=0;i<40;i++){ var a=Math.floor(b); var h2=a*h1+h0,k2=a*k1+k0; if(k2>100000)break; h0=h1;h1=h2;k0=k1;k1=k2; if(Math.abs(h1/k1-x)<1e-10)break; var fr=b-a; if(fr<1e-12)break; b=1/fr; } if(k1>0&&Math.abs(h1/k1-x)<1e-9) return {p:(neg?-1:1)*h1,q:k1}; return null; }
function _simpRad(n){ n=Math.round(n); if(n<=0)return null; var a=1; for(var d=2;d*d<=n;d++){ while(n%(d*d)===0){ n=n/(d*d); a=a*d; } } return {coef:a,rad:n}; }
function exactFmt(x){
  if(!isFinite(x)) return calcFmt(x);
  if(Math.abs(x-Math.round(x))<1e-9) return (""+Math.round(x)).replace("-","\u2212");
  var fr=_toFrac(x); if(fr&&fr.q!==1&&fr.q<=10000){ return (fr.p<0?"\u2212":"")+Math.abs(fr.p)+"/"+fr.q; }
  var sq=x*x;
  if(Math.abs(sq-Math.round(sq))<1e-7){ var sr=_simpRad(Math.round(sq)); if(sr&&sr.rad>1){ return (x<0?"\u2212":"")+(sr.coef!==1?sr.coef:"")+"\u221a"+sr.rad; } }
  return calcFmt(x);
}
function calcFmt(n){
  if(!isFinite(n))return n<0?"−∞":"∞";
  if(n===0||Math.abs(n)<1e-12)return "0";
  var a=Math.abs(n),s;
  if(a>=1e12||a<1e-6)s=n.toExponential(6);
  else s=""+parseFloat(n.toFixed(8));
  return s.replace(".",",").replace("e","·10^").replace("^+","^");
}
export { calcEval, calcCompile, computeKeyPts, computeIntersections, extractSolverEq, solveEquation, exactFmt, calcFmt };
