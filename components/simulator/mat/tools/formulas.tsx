// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Formule: modal uz zadatak i samostalni ekran formula. */
import React from 'react';
import { FORMULE_DATA, SUBJECT } from '../core/state';
import { renderOptText } from '../core/mathText';
import { useEscape } from '../core/ui';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function FormulaModal({onClose,razina}){
  useEscape(true,onClose);
  const r=razina||"B";
  const sec={
    borderBottom:"1px solid var(--bdr)",
    paddingBottom:14,marginBottom:14
  };
  const h={
    fontSize:11,fontWeight:700,textTransform:"uppercase",
    letterSpacing:".07em",color:"var(--muted)",marginBottom:10
  };
  // SVG razlomak helper
  function Fr({n,d,pre="",post=""}){
    return e("span",{style:{display:"inline-flex",alignItems:"center",verticalAlign:"middle",gap:2}},
      pre&&e("span",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)"}},pre),
      e("span",{className:"mfrac",style:{margin:"0 2px"}},
        e("span",{className:"mfrac-num",style:{fontSize:12,fontFamily:"'DM Sans',sans-serif"}},n),
        e("span",{className:"mfrac-bar"}),
        e("span",{className:"mfrac-den",style:{fontSize:12,fontFamily:"'DM Sans',sans-serif"}},d)
      ),
      post&&e("span",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)"}},post)
    );
  }
  // Redak formule
  function F({children,label}){
    return e("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:"1px solid var(--bdr)",flexWrap:"wrap"}},
      e("div",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)",flex:1}},children),
      label&&e("div",{style:{fontSize:11,color:"var(--muted)",minWidth:120}},label)
    );
  }
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:16},
    onClick:e2=>{if(e2.target===e2.currentTarget)onClose();}},
    e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",
      width:"100%",maxWidth:580,maxHeight:"90vh",overflow:"auto",padding:"24px 28px",boxShadow:"var(--shadow)"}},
      // Header
      e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}},
        e("div",null,
          e("div",{style:{fontFamily:"var(--fh)",fontSize:18,fontWeight:700}},"📐 Knjižica formula"),
          e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:2}},SUBJECT.name+" · "+(r==="A"?"viša razina (A)":"osnovna razina (B)")+" · identična onoj na maturi")
        ),
        e("button",{onClick:onClose,style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"var(--muted)",padding:"4px 8px"}},"✕")
      ),

      // POTENCIJE I ALGEBRA
      e("div",{style:sec},
        e("div",{style:h},"Potencije"),
        e(F,{label:"produkt istih baza"},"aᵐ · aⁿ = aᵐ⁺ⁿ"),
        e(F,{label:"kvocijent istih baza"},"aᵐ : aⁿ = aᵐ⁻ⁿ   (a ≠ 0)"),
        e(F,{label:"negativni eksponent"},e("span",null,"a⁻ᵐ = ",e(Fr,{n:"1",d:"aᵐ"}),"   (a ≠ 0)")),
      ),

      // ALGEBARSKI IDENTITETI
      e("div",{style:sec},
        e("div",{style:h},"Algebarski identiteti"),
        e(F,{label:"kvadrat zbroja/razlike"},"(a ± b)² = a² ± 2ab + b²"),
        e(F,{label:"razlika kvadrata"},"a² − b² = (a − b)(a + b)"),
      ),

      // KVADRATNA JEDNADŽBA
      e("div",{style:sec},
        e("div",{style:h},"Kvadratna jednadžba"),
        e(F,{},"ax² + bx + c = 0,   a ≠ 0"),
        e(F,{label:"rješenja"},e("span",null,"x₁,₂ = ",e(Fr,{n:"−b ± √(b²−4ac)",d:"2a"}))),
        e(F,{label:"tjeme parabole"},e("span",null,"T = (",e(Fr,{n:"−b",d:"2a"}),",  ",e(Fr,{n:"4ac−b²",d:"4a"}),")")),
      ),

      // GEOMETRIJA  -  POVRŠINE
      e("div",{style:sec},
        e("div",{style:h},"Površine i opsezi"),
        e(F,{label:"trokut"},e("span",null,"P = ",e(Fr,{n:"a · vₐ",d:"2"}))),
        e(F,{label:"paralelogram"},"P = a · vₐ"),
        e(F,{label:"krug"},"P = r²π"),
        e(F,{label:"opseg kruga"},"O = 2rπ"),
      ),

      // GEOMETRIJA  -  TIJELA
      e("div",{style:sec},
        e("div",{style:h},"Tijela  (B = površina baze, h = visina, r = polumjer)"),
        e(F,{label:"prizma i valjak  -  obujam"},"V = B · h"),
        e(F,{label:"prizma  -  oplošje"},"O = 2B + P"),
        e(F,{label:"piramida i stožac  -  obujam"},e("span",null,"V = ",e(Fr,{n:"1",d:"3"})," · B · h")),
        e(F,{label:"piramida  -  oplošje"},"O = B + P"),
        e(F,{label:"kugla  -  obujam"},e("span",null,"V = ",e(Fr,{n:"4",d:"3"}),"r³π")),
      ),

      // ANALITIČKA GEOMETRIJA
      e("div",{style:sec},
        e("div",{style:h},"Analitička geometrija"),
        e(F,{label:"udaljenost točaka T₁, T₂"},"d = √[(x₂−x₁)² + (y₂−y₁)²]"),
        e(F,{label:"jednadžba pravca"},"y − y₁ = k(x − x₁)"),
        e(F,{label:"nagib kroz 2 točke"},e("span",null,"k = ",e(Fr,{n:"y₂−y₁",d:"x₂−x₁"}))),
        e(F,{label:"usporedni pravci"},"k₁ = k₂"),
      ),

      // POSTOTNI RAČUN
      e("div",{},
        e("div",{style:h},"Postotni račun  (S = osnovica, p = postotak, P = iznos)"),
        e(F,{label:"postotni iznos"},e("span",null,"P = ",e(Fr,{n:"S · p",d:"100"}))),
        e(F,{label:"postotak"},e("span",null,"p = ",e(Fr,{n:"P · 100",d:"S"}))),
        e(F,{label:"osnovica"},e("span",null,"S = ",e(Fr,{n:"P · 100",d:"p"}))),
      ),

      // ═══════ VIŠA RAZINA (A) — dodatne formule ═══════
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Logaritmi  (a > 0, a ≠ 1)"),
        e(F,{label:"definicija"},e("span",null,"log",e("sub",null,"a"),"(x) = y  ⇔  a^y = x")),
        e(F,{label:"produkt"},e("span",null,"log",e("sub",null,"a"),"(xy) = log",e("sub",null,"a"),"(x) + log",e("sub",null,"a"),"(y)")),
        e(F,{label:"kvocijent"},e("span",null,"log",e("sub",null,"a"),"(x/y) = log",e("sub",null,"a"),"(x) − log",e("sub",null,"a"),"(y)")),
        e(F,{label:"potencija"},e("span",null,"log",e("sub",null,"a"),"(xⁿ) = n · log",e("sub",null,"a"),"(x)")),
        e(F,{label:"promjena baze"},e("span",null,"log",e("sub",null,"a"),"(x) = ",e(Fr,{n:"log(x)",d:"log(a)"}))),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Trigonometrija  -  dodatne formule"),
        e(F,{label:"osnovni identitet"},"sin²x + cos²x = 1"),
        e(F,{label:"tangens"},e("span",null,"tg(x) = ",e(Fr,{n:"sin(x)",d:"cos(x)"}))),
        e(F,{label:"zbroj kutova (sin)"},"sin(α±β) = sinα cosβ ± cosα sinβ"),
        e(F,{label:"zbroj kutova (cos)"},"cos(α±β) = cosα cosβ ∓ sinα sinβ"),
        e(F,{label:"dvostruki kut"},e("span",null,"sin(2x) = 2 sin(x) cos(x)")),
        e(F,{label:"dvostruki kut"},"cos(2x) = cos²x − sin²x = 1 − 2sin²x"),
        e(F,{label:"poučak o sinusu"},e("span",null,e(Fr,{n:"a",d:"sin A"})," = ",e(Fr,{n:"b",d:"sin B"})," = ",e(Fr,{n:"c",d:"sin C"})," = 2R")),
        e(F,{label:"poučak o kosinusu"},"a² = b² + c² − 2bc · cos A"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Derivacije"),
        e(F,{label:"konstanta"},"(c)' = 0"),
        e(F,{label:"potencija"},"(xⁿ)' = n · xⁿ⁻¹"),
        e(F,{label:"trigonometrijske"},"(sin x)' = cos x,   (cos x)' = −sin x"),
        e(F,{label:"eksponencijalna"},"(eˣ)' = eˣ,   (aˣ)' = aˣ · ln(a)"),
        e(F,{label:"logaritamska"},e("span",null,"(ln x)' = ",e(Fr,{n:"1",d:"x"}))),
        e(F,{label:"zbroj/razlika"},"(f ± g)' = f' ± g'"),
        e(F,{label:"produkt"},"(f · g)' = f' · g + f · g'"),
        e(F,{label:"kvocijent"},e("span",null,"(f/g)' = ",e(Fr,{n:"f'·g − f·g'",d:"g²"}))),
        e(F,{label:"lančano pravilo"},"(f(g(x)))' = f'(g(x)) · g'(x)"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Integrali  (osnovni)"),
        e(F,{label:"potencija"},e("span",null,"∫ xⁿ dx = ",e(Fr,{n:"xⁿ⁺¹",d:"n+1"})," + C   (n ≠ −1)")),
        e(F,{label:"1/x"},e("span",null,"∫ ",e(Fr,{n:"1",d:"x"})," dx = ln|x| + C")),
        e(F,{label:"eksponencijalna"},"∫ eˣ dx = eˣ + C"),
        e(F,{label:"trigonometrijske"},"∫ sin x dx = −cos x + C,   ∫ cos x dx = sin x + C"),
        e(F,{label:"linearnost"},"∫ (af + bg) dx = a∫f dx + b∫g dx"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Nizovi"),
        e(F,{label:"aritmetički — opći član"},"aₙ = a₁ + (n−1) · d"),
        e(F,{label:"aritmetički — suma"},e("span",null,"Sₙ = ",e(Fr,{n:"n(a₁ + aₙ)",d:"2"}))),
        e(F,{label:"geometrijski — opći član"},"aₙ = a₁ · qⁿ⁻¹"),
        e(F,{label:"geometrijski — suma"},e("span",null,"Sₙ = a₁ · ",e(Fr,{n:"qⁿ − 1",d:"q − 1"})," (q ≠ 1)")),
        e(F,{label:"beskonačni geom."},e("span",null,"S = ",e(Fr,{n:"a₁",d:"1 − q"})," (|q| < 1)")),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Kompleksni brojevi"),
        e(F,{label:"algebarski oblik"},"z = a + bi"),
        e(F,{label:"modul"},"|z| = √(a² + b²)"),
        e(F,{label:"trigonometrijski"},"z = |z| · (cos φ + i sin φ)"),
        e(F,{label:"Moivreova"},"zⁿ = |z|ⁿ · (cos(nφ) + i sin(nφ))"),
        e(F,{label:"konjugiranje"},e("span",null,"z̄ = a − bi,   z · z̄ = |z|²")),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Vektori i analitička (proširena)"),
        e(F,{label:"duljina vektora"},"|a⃗| = √(a₁² + a₂² + a₃²)"),
        e(F,{label:"skalarni produkt"},"a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ = |a⃗||b⃗| cos φ"),
        e(F,{label:"kut između vektora"},e("span",null,"cos φ = ",e(Fr,{n:"a⃗ · b⃗",d:"|a⃗||b⃗|"}))),
        e(F,{label:"krug"},"(x − p)² + (y − q)² = r²"),
        e(F,{label:"elipsa"},e("span",null,e(Fr,{n:"x²",d:"a²"})," + ",e(Fr,{n:"y²",d:"b²"})," = 1")),
        e(F,{label:"parabola"},"y² = 4px   (s tjemenom u ishodištu)"),
      ),

      e("div",{style:{marginTop:18,textAlign:"center"}},
        e("button",{className:"btn btn-blue",onClick:onClose},"Zatvori")
      )
    )
  );
}
function FormulaSheet({onExit,onHome}){
  var _m=React.useState("browse"),mode=_m[0],setMode=_m[1];
  var _q=React.useState(""),query=_q[0],setQuery=_q[1];
  var _open=React.useState(function(){var o={};FORMULE_DATA.forEach(function(s,i){o[i]=i<3;});return o;}),openSec=_open[0],setOpenSec=_open[1];
  var FR=function(str){return renderOptText(str);};

  // ---------- GAME (spoji parove) ----------
  var gamePool=React.useMemo(function(){
    var arr=[],id=0;
    FORMULE_DATA.forEach(function(s){s.items.forEach(function(it){
      if(it.n.length<=30 && it.f.length<=46) arr.push({id:id++,n:it.n,f:it.f});
    });});
    return arr;
  },[]);
  var _round=React.useState([]),round=_round[0],setRound=_round[1];
  var _names=React.useState([]),names=_names[0],setNames=_names[1];
  var _forms=React.useState([]),forms=_forms[0],setForms=_forms[1];
  var _selN=React.useState(null),selN=_selN[0],setSelN=_selN[1];
  var _matched=React.useState({}),matched=_matched[0],setMatched=_matched[1];
  var _wrong=React.useState(null),wrong=_wrong[0],setWrong=_wrong[1];
  var _moves=React.useState(0),moves=_moves[0],setMoves=_moves[1];
  var _t0=React.useState(0),t0=_t0[0],setT0=_t0[1];
  var _now=React.useState(0),nowT=_now[0],setNow=_now[1];
  var tickRef=React.useRef(null);
  var SIZE=5;
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function newRound(){
    var pick=shuffle(gamePool).slice(0,Math.min(SIZE,gamePool.length));
    setRound(pick); setNames(shuffle(pick)); setForms(shuffle(pick));
    setSelN(null); setMatched({}); setWrong(null); setMoves(0);
    setT0(Date.now()); setNow(Date.now());
  }
  React.useEffect(function(){
    if(mode==="game"&&round.length===0) newRound();
    if(mode==="game"){
      tickRef.current=setInterval(function(){setNow(Date.now());},250);
      return function(){clearInterval(tickRef.current);};
    }
  },[mode]);
  var doneCount=Object.keys(matched).length;
  var solved=round.length>0&&doneCount===round.length;
  React.useEffect(function(){ if(solved&&tickRef.current){clearInterval(tickRef.current);} },[solved]);
  function tapName(id){ if(matched[id]!==undefined||solved) return; setSelN(id); setWrong(null); }
  function tapForm(id){
    if(matched[id]!==undefined||solved) return;
    if(selN===null){ return; }
    setMoves(function(m){return m+1;});
    if(selN===id){ setMatched(function(o){var n=Object.assign({},o);n[id]=true;return n;}); setSelN(null); setWrong(null); }
    else { setWrong({n:selN,f:id}); var sv=selN; setSelN(null); setTimeout(function(){setWrong(null);},520); }
  }
  var secs=Math.max(0,Math.round((( solved? nowT : nowT)-t0)/1000));

  // ---------- RENDER ----------
  var header=e("div",{className:"nav"},
    e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
    e("span",{className:"ntitle"},"📐 Formule i tablice"),
    e("span",{className:"nsp"}));

  var modeTabs=e("div",{style:{display:"flex",gap:8,margin:"6px 0 16px"}},
    [["browse","📖 Formule"],["game","🎮 Spoji formule"]].map(function(m){var on=mode===m[0];
      return e("button",{key:m[0],onClick:function(){setMode(m[0]);},style:{flex:1,padding:"9px 12px",borderRadius:10,border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"var(--blue-d)":"var(--s1)",color:on?"var(--blue)":"var(--muted)",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"var(--fb)"}},m[1]);}));

  if(mode==="game"){
    var gameBody = gamePool.length<SIZE
      ? e("div",{style:{textAlign:"center",color:"var(--muted)",padding:20}},"Nedovoljno formula za igru.")
      : e("div",null,
        e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14,fontSize:13,fontWeight:700,color:"var(--muted)"}},
          e("span",null,"✅ "+doneCount+"/"+round.length),
          e("span",null,"⏱ "+secs+"s"),
          e("span",null,"🎯 "+moves+" poteza"),
          e("button",{onClick:newRound,style:{marginLeft:"auto",fontSize:11.5,fontWeight:700,padding:"5px 12px",borderRadius:99,border:"1px solid var(--bdr2)",background:"var(--s1)",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)"}},"↻ Nova runda")),
        solved&&e("div",{style:{padding:"14px 16px",borderRadius:12,background:"var(--green-d, rgba(80,200,120,.15))",border:"1px solid rgba(80,200,120,.4)",marginBottom:14,textAlign:"center"}},
          e("div",{style:{fontSize:16,fontWeight:800,color:"var(--green)",marginBottom:4}},"🎉 Sve spojeno!"),
          e("div",{style:{fontSize:13,color:"var(--text)"}},round.length+"/"+round.length+" u "+secs+"s · "+moves+" poteza"),
          e("button",{className:"btn btn-blue",style:{marginTop:12},onClick:newRound},"▶ Nova runda")),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:2}},"Naziv"),
            names.map(function(it){var done=matched[it.id]!==undefined;var sel=selN===it.id;var isW=wrong&&wrong.n===it.id;
              return e("div",{key:it.id,onClick:function(){tapName(it.id);},style:{padding:"11px 12px",borderRadius:10,fontSize:12.5,fontWeight:600,cursor:done?"default":"pointer",lineHeight:1.3,
                border:"1px solid "+(done?"rgba(80,200,120,.45)":isW?"var(--red)":sel?"var(--blue-b)":"var(--bdr)"),
                background:done?"rgba(80,200,120,.14)":isW?"var(--red-d)":sel?"var(--blue-d)":"var(--s1)",
                color:done?"var(--green)":sel?"var(--blue)":"var(--text)",opacity:done?.7:1,transition:"all .15s"}},it.n);})),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:2}},"Formula"),
            forms.map(function(it){var done=matched[it.id]!==undefined;var isW=wrong&&wrong.f===it.id;
              return e("div",{key:it.id,onClick:function(){tapForm(it.id);},style:{padding:"11px 12px",borderRadius:10,fontSize:13,cursor:done?"default":"pointer",lineHeight:1.4,minHeight:20,
                border:"1px solid "+(done?"rgba(80,200,120,.45)":isW?"var(--red)":"var(--bdr)"),
                background:done?"rgba(80,200,120,.14)":isW?"var(--red-d)":"var(--s1)",
                color:done?"var(--green)":"var(--text)",opacity:done?.7:1,transition:"all .15s"}},FR(it.f));}))
        ),
        e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:14,fontStyle:"italic"}},"Dodirni naziv pa pripadnu formulu."));
    return e("div",{className:"home",style:{maxWidth:680,margin:"0 auto",padding:"14px 16px"}}, header, modeTabs, gameBody);
  }

  // browse mode
  var ql=query.trim().toLowerCase();
  return e("div",{className:"home",style:{maxWidth:680,margin:"0 auto",padding:"14px 16px"}},
    header, modeTabs,
    e("input",{value:query,onChange:function(ev){setQuery(ev.target.value);},placeholder:"🔍 Traži formulu (npr. kvadratna, sinus, kugla)…",
      style:{width:"100%",padding:"11px 14px",borderRadius:10,border:"1px solid var(--bdr)",background:"var(--s1)",color:"var(--text)",fontSize:13.5,fontFamily:"var(--fb)",marginBottom:14,boxSizing:"border-box"}}),
    FORMULE_DATA.map(function(sec,si){
      var items=ql?sec.items.filter(function(it){return it.n.toLowerCase().indexOf(ql)>=0;}):sec.items;
      if(ql&&items.length===0) return null;
      var isOpen=ql?true:!!openSec[si];
      return e("div",{key:si,style:{marginBottom:10,border:"1px solid var(--bdr)",borderRadius:12,overflow:"hidden",background:"var(--s1)"}},
        e("div",{onClick:function(){if(!ql)setOpenSec(function(o){var n=Object.assign({},o);n[si]=!n[si];return n;});},
          style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",cursor:ql?"default":"pointer",background:"var(--s2)"}},
          e("span",{style:{fontSize:17}},sec.ic),
          e("span",{style:{fontFamily:"var(--fh)",fontSize:14.5,flex:1}},sec.t),
          sec.vsa&&e("span",{style:{fontSize:9.5,fontWeight:700,padding:"2px 7px",borderRadius:99,background:"var(--gold-d)",color:"var(--gold)",border:"1px solid var(--gold-b)"}},"VIŠA"),
          !ql&&e("span",{style:{fontSize:13,color:"var(--muted)"}},isOpen?"▲":"▼")),
        isOpen&&e("div",{style:{padding:"4px 0"}},
          items.map(function(it,ii){
            return e("div",{key:ii,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderTop:ii>0?"1px solid var(--bdr)":"none"}},
              e("div",{style:{flex:"0 0 38%",fontSize:12.5,fontWeight:600,color:"var(--muted)",lineHeight:1.3}},it.n),
              e("div",{style:{flex:1,fontSize:13.5,color:"var(--text)",lineHeight:1.5,wordBreak:"break-word"}},FR(it.f)));
          }))
      );
    }),
    e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:8,padding:"12px",lineHeight:1.5,fontStyle:"italic"}},
      "Pregled ključnih formula za državnu maturu iz matematike (razine A i B). Viša razina uključuje derivacije i integrale.")
  );
}
export { FormulaModal, FormulaSheet };
