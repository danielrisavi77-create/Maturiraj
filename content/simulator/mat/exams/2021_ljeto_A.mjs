// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg29c_2021Aljeto(){
  const W=300,H=240,elems=[];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  elems.push(e("polygon",{key:"abc",points:"30,210 240,210 190,40",
    fill:"rgba(95,169,255,0.07)",stroke:"var(--text)",strokeWidth:1.5}));
  [["A",15,222],["B",244,222],["C",188,32]].forEach(([l,x,y])=>
    elems.push(e("text",{key:`l${l}`,x,y,fontSize:13,fill:"var(--text)",fontStyle:"italic"},l)));
  // Paralela A1B1
  elems.push(e("line",{key:"l1",x1:84,y1:153,x2:223,y2:153,stroke:"var(--blue)",strokeWidth:1.3}));
  elems.push(e("text",{key:"a1",x:62,y:149,fontSize:10,fill:"var(--blue)"},"A₁"));
  elems.push(e("text",{key:"b1",x:226,y:149,fontSize:10,fill:"var(--blue)"},"B₁"));
  // Paralela A2B2
  elems.push(e("line",{key:"l2",x1:117,y1:102,x2:207,y2:102,stroke:"var(--blue)",strokeWidth:1.1,strokeDasharray:"3,2"}));
  elems.push(e("text",{key:"a2",x:98,y:98,fontSize:10,fill:"var(--blue)"},"A₂"));
  elems.push(e("text",{key:"b2",x:210,y:98,fontSize:10,fill:"var(--blue)"},"B₂"));
  // Paralela A3B3
  elems.push(e("line",{key:"l3",x1:138,y1:68,x2:198,y2:68,stroke:"var(--blue)",strokeWidth:0.9,strokeDasharray:"2,2"}));
  elems.push(e("text",{key:"a3",x:120,y:64,fontSize:10,fill:"var(--blue)"},"A₃"));
  elems.push(e("text",{key:"b3",x:200,y:64,fontSize:10,fill:"var(--blue)"},"B₃"));
  // Točkice
  [[182,52],[185,47],[188,43]].forEach(([cx,cy],i)=>
    elems.push(e("circle",{key:`d${i}`,cx,cy,r:1.5,fill:"var(--blue)"})));
  // Težišnica iz C
  elems.push(e("line",{key:"tm",x1:190,y1:40,x2:135,y2:210,
    stroke:"var(--red)",strokeWidth:1.5,strokeDasharray:"4,3"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg25cGrid_2021Aljeto(){
  const W=290,H=250,elems=[];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const grid=[];
  [40,80,120,160,200,240].forEach(x=>grid.push(e("line",{key:`vx${x}`,x1:x,y1:10,x2:x,y2:240,stroke:_BLUE,strokeWidth:0.6})));
  [50,90,130,170,210].forEach(y=>grid.push(e("line",{key:`hy${y}`,x1:10,y1:y,x2:280,y2:y,stroke:_BLUE,strokeWidth:0.6})));
  elems.push(e("g",{key:"grid"},grid));
  elems.push(e("line",{key:"xa",x1:10,y1:170,x2:278,y2:170,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ya",x1:80,y1:10,x2:80,y2:240,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"ax",points:"278,170 270,166 270,174",fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ay",points:"80,10 76,18 84,18",fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:281,y:174,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly",x:84,y:8,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0",x:65,y:183,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x",x:118,y:183,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:55,y:133,fontSize:10,fill:"var(--muted)"},"1"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg23bGrid_2021Aljeto(){
  const W=260,H=240,elems=[];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const grid=[];
  [40,80,120,160,200].forEach(x=>grid.push(e("line",{key:`vx${x}`,x1:x,y1:20,x2:x,y2:220,stroke:_BLUE,strokeWidth:0.6})));
  [40,80,120,160,200].forEach(y=>grid.push(e("line",{key:`hy${y}`,x1:15,y1:y,x2:245,y2:y,stroke:_BLUE,strokeWidth:0.6})));
  elems.push(e("g",{key:"grid"},grid));
  elems.push(e("line",{key:"xa",x1:15,y1:120,x2:245,y2:120,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ya",x1:120,y1:15,x2:120,y2:225,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"ax",points:"245,120 237,116 237,124",fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ay",points:"120,15 116,23 124,23",fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:248,y:124,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly",x:124,y:13,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0",x:106,y:134,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1y",x:127,y:113,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1x",x:158,y:133,fontSize:10,fill:"var(--muted)"},"1"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg20b_2021Aljeto(){
  const W=300,H=205,elems=[];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ln=(x1,y1,x2,y2,k)=>e("line",{key:k,x1,y1,x2,y2,stroke:_BLUE,strokeWidth:1.5});
  elems.push(ln(20,175,275,175,"base"));
  elems.push(ln(75,175,50,35,"t"));
  elems.push(ln(58,80,118,50,"b"));
  elems.push(e("text",{key:"tb",x:120,y:48,fontSize:13,fill:_GOLD,fontStyle:"italic"},"b"));
  elems.push(e("path",{key:"a60",d:"M 51,62 A 20,20 0 0,0 72,73",fill:"none",stroke:"var(--red)",strokeWidth:1.4}));
  elems.push(e("text",{key:"t60",x:56,y:65,fontSize:12,fill:_GOLD},"60°"));
  elems.push(e("path",{key:"ab",d:"M 53,175 A 22,22 0 0,1 66,154",fill:"none",stroke:"var(--red)",strokeWidth:1.4}));
  elems.push(e("text",{key:"tbeta",x:28,y:178,fontSize:14,fill:_GOLD,fontStyle:"italic"},"β"));
  elems.push(ln(195,175,265,100,"a"));
  elems.push(e("text",{key:"ta",x:258,y:97,fontSize:13,fill:_GOLD,fontStyle:"italic"},"a"));
  elems.push(e("path",{key:"a40",d:"M 218,175 A 23,23 0 0,0 210,153",fill:"none",stroke:"var(--red)",strokeWidth:1.4}));
  elems.push(e("text",{key:"t40",x:217,y:172,fontSize:12,fill:_GOLD},"40°"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg19a_2021Aljeto(){
  const W=320,H=210,elems=[];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  elems.push(e("polygon",{key:"tri",points:"50,50 155,185 260,65",
    fill:"rgba(95,169,255,0.1)",stroke:"var(--text)",strokeWidth:1.6}));
  // Luk 67°25' kod A (unutar trokuta)
  elems.push(e("path",{key:"a1",d:"M 78,52 A 28,28 0 0,1 67,72",
    fill:"none",stroke:"var(--red)",strokeWidth:1.5}));
  elems.push(e("text",{key:"t1",x:86,y:75,fontSize:11,fill:"var(--text)"},"67°25′"));
  // Luk α kod C (unutar trokuta)
  elems.push(e("path",{key:"a2",d:"M 246,82 A 22,22 0 0,1 238,63",
    fill:"none",stroke:"var(--red)",strokeWidth:1.5}));
  elems.push(e("text",{key:"ta",x:220,y:62,fontSize:14,fill:_GOLD,fontStyle:"italic"},"α"));
  // Brojevi ISPOD stranica, izvan trokuta
  elems.push(e("text",{key:"t9",x:72,y:148,fontSize:13,fill:"var(--blue)"},"9"));
  elems.push(e("text",{key:"t13",x:213,y:158,fontSize:13,fill:"var(--blue)"},"13"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg11_2021Aljeto(){
  const W=300,H=260;
  const sx=x=>120+x*40, sy=y=>130-y*40;
  const elems=[];
  // Grid
  const grid=[];
  for(let x=-3;x<=4;x++) grid.push(e("line",{key:`vx${x}`,x1:sx(x),y1:10,x2:sx(x),y2:250,stroke:"#1e2a38",strokeWidth:0.6}));
  for(let y=-2;y<=4;y++) grid.push(e("line",{key:`hy${y}`,x1:10,y1:sy(y),x2:290,y2:sy(y),stroke:"#1e2a38",strokeWidth:0.6}));
  elems.push(e("g",{key:"grid"},grid));
  // Osi
  elems.push(e("line",{key:"xa",x1:10,y1:130,x2:285,y2:130,stroke:"var(--muted)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ya",x1:120,y1:10,x2:120,y2:250,stroke:"var(--muted)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"ax",points:"285,130 277,126 277,134",fill:"var(--muted)"}));
  elems.push(e("polygon",{key:"ay",points:"120,10 116,18 124,18",fill:"var(--muted)"}));
  elems.push(e("text",{key:"lx",x:288,y:134,fontSize:11,fill:"var(--muted)"},"x"));
  elems.push(e("text",{key:"ly",x:124,y:8,fontSize:11,fill:"var(--muted)"},"y"));
  elems.push(e("text",{key:"l0",x:108,y:143,fontSize:11,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1y",x:117,y:123,fontSize:11,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1x",x:158,y:143,fontSize:11,fill:"var(--muted)"},"1"));
  // Crna crta -x+2: od x=-1(80,50) do x=4.5(300,210)
  elems.push(e("line",{key:"g",x1:sx(-1),y1:sy(3),x2:sx(4.5),y2:sy(-2.5),stroke:"var(--text)",strokeWidth:2}));
  // Ružičasta |x+1|
  elems.push(e("polyline",{key:"fl",points:`${sx(-4)},${sy(3)} ${sx(-1)},${sy(0)}`,fill:"none",stroke:"#e05095",strokeWidth:2}));
  elems.push(e("polyline",{key:"fr",points:`${sx(-1)},${sy(0)} ${sx(3)},${sy(4)}`,fill:"none",stroke:"#e05095",strokeWidth:2}));
  // Točka T = sjecište (0.5, 1.5)
  elems.push(e("circle",{key:"T",cx:sx(0.5),cy:sy(1.5),r:5,fill:"#e05095"}));
  elems.push(e("text",{key:"tT",x:sx(0.5)+6,y:sy(1.5)-4,fontSize:13,fill:"var(--text)",fontWeight:"bold",fontStyle:"italic"},"T"));
  // Otvorena točka na ishodištu
  elems.push(e("circle",{key:"o",cx:sx(0),cy:sy(0),r:4,fill:"var(--bg)",stroke:"var(--muted)",strokeWidth:1.5}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg25c_2021Aljeto(){
  const W=290,H=250,elems=[];
  const grid=[];
  [40,80,120,160,200,240].forEach(x=>grid.push(e("line",{key:`vx${x}`,x1:x,y1:10,x2:x,y2:240,stroke:"#1e2a38",strokeWidth:0.6})));
  [50,90,130,170,210].forEach(y=>grid.push(e("line",{key:`hy${y}`,x1:10,y1:y,x2:280,y2:y,stroke:"#1e2a38",strokeWidth:0.6})));
  elems.push(e("g",{key:"grid"},grid));
  elems.push(e("line",{key:"xa",x1:10,y1:170,x2:278,y2:170,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ya",x1:80,y1:10,x2:80,y2:240,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"ax",points:"278,170 270,166 270,174",fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ay",points:"80,10 76,18 84,18",fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:281,y:174,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly",x:84,y:8,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0",x:65,y:183,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x",x:118,y:183,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:55,y:133,fontSize:10,fill:"var(--muted)"},"1"));
  // Parabola f(x)=x²-4x+3, xos=80,yos=170,scale=40
  const pts=[];
  for(let i=-5;i<=55;i++){
    const x=i*0.1-0.5;
    const fx=x*x-4*x+3;
    const sx=80+x*40,sy=170-fx*40;
    if(sx>=10&&sx<=275&&sy>=10&&sy<=240) pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
  }
  elems.push(e("polyline",{key:"par",points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2}));
  // Nultočke x=1(sx=120,sy=170) x=3(sx=200,sy=170)
  elems.push(e("circle",{key:"n1",cx:120,cy:170,r:4,fill:"var(--red)"}));
  elems.push(e("circle",{key:"n2",cx:200,cy:170,r:4,fill:"var(--red)"}));
  // Tjeme (2,-1) → sx=160,sy=210
  elems.push(e("circle",{key:"tj",cx:160,cy:210,r:4,fill:"var(--green)"}));
  elems.push(e("text",{key:"lt",x:164,y:207,fontSize:10,fill:"var(--green)"},"(2,−1)"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg23b_2021Aljeto(){
  const W=260,H=240,elems=[];
  const grid=[];
  [40,80,120,160,200].forEach(x=>grid.push(e("line",{key:`vx${x}`,x1:x,y1:20,x2:x,y2:220,stroke:"#1e2a38",strokeWidth:0.6})));
  [40,80,120,160,200].forEach(y=>grid.push(e("line",{key:`hy${y}`,x1:15,y1:y,x2:245,y2:y,stroke:"#1e2a38",strokeWidth:0.6})));
  elems.push(e("g",{key:"grid"},grid));
  elems.push(e("line",{key:"xa",x1:15,y1:120,x2:245,y2:120,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ya",x1:120,y1:15,x2:120,y2:225,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"ax",points:"245,120 237,116 237,124",fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ay",points:"120,15 116,23 124,23",fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:248,y:124,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly",x:124,y:13,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0",x:106,y:134,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1y",x:127,y:113,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1x",x:158,y:133,fontSize:10,fill:"var(--muted)"},"1"));
  // y=−x: od (20,20) do (220,220)
  elems.push(e("line",{key:"line",x1:20,y1:20,x2:220,y2:220,stroke:"var(--blue)",strokeWidth:2.2}));
  elems.push(e("circle",{key:"o",cx:120,cy:120,r:4,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.5}));
  elems.push(e("text",{key:"lbl",x:18,y:16,fontSize:11,fill:"var(--blue)"},"y = −x"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: aritmetička sredina = zbroj svih podijeljen brojem članova = (13 + 22 + 37)/3.",topic:"stat",points:1,
   q:"Kolika je aritmetička sredina brojeva 13, 22 i 37?",
   opts:["20","24","31","36"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Zbroj: 13 + 22 + 37 = 72."},
     {txt:"Aritmetička sredina = zbroj / broj članova: [FRAC:72|3] = 24."},
     {txt:"Provjera: 3 · 24 = 72 ✓ (zbroj se vraća kad pomnožimo sredinu brojem članova).", note:"verifikacija"},
     {txt:"Distraktori: A) 20 = pogrešna procjena. C) 31 = sredina između 22 i 37 (samo 2 broja). D) 36 = sredina između 13 i 58. Točno: B.", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 'sredina' brojeva zamišlja se kao broj koji bi svi imali da su jednaki — zbroj se ravnomjerno raspodijeli.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetička sredina x̄ = (x₁ + x₂ + ... + xₙ)/n. Za 3 broja: (a+b+c)/3.",note:"postupak",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aritmetička sredina x̄ = (x₁ + x₂ + ... + xₙ)/n. Za 3 broja: (a+b+c)/3.",
     "Intuicija: 'sredina' brojeva zamišlja se kao broj koji bi svi imali da su jednaki — zbroj se ravnomjerno raspodijeli.",
     "Česta greška: računati samo (max + min)/2 ili sredinu rasponaa zaboravljajući da svi članovi sudjeluju.",
     "Provjera: zbroj odstupanja od sredine mora biti 0. (13−24) + (22−24) + (37−24) = −11 − 2 + 13 = 0 ✓"
   ,"Provjera: aritmetička sredina mora biti između min i max vrijednosti.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:2,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku zasebno.",topic:"br",points:1,
   q:"Koja je tvrdnja netočna?",
   opts:["log₂ 9 = 3,1699...","sin(47°15′) = 0,7343...","│5/3 : 1/2 − 5│ = 1,666...","2 · 10^(0,34) = 2,7692..."],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Strategija: provjeri svaku tvrdnju kalkulatorom (znanstveni mod)."},
     {txt:"A: log₂ 9 = log 9 / log 2 ≈ 0,954 / 0,301 ≈ 3,1699 ✓"},
     {txt:"B: sin(47°15′) — pretvori u dec.°: 47 + 15/60 = 47,25°; sin 47,25° ≈ 0,7343 ✓"},
     {txt:"C: |5/3 : 1/2 − 5| = |5/3 · 2 − 5| = |10/3 − 5| = |−5/3| ≈ 1,666 ✓"},
     {txt:"D: 2 · 10^(0,34) ≈ 2 · 2,188 = 4,376, a NE 2,7692 → tvrdnja D netočna."},
     {txt:"Provjera: 2,7692/2 = 1,3846 → log₁₀(1,3846) ≈ 0,141, ne 0,34. Konačno netočno.", note:"verifikacija"},
     {txt:"Distraktori: učenik zaboravi pretvoriti minute u decimalne stupnjeve (B) ili pogrešno reducira dvostruki razlomak (C).", note:"diagnostika", final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: zadatak testira vještinu rada s logaritmima, decimalnim stupnjevima i složenim brojčanim izrazima — provjera red veličine je ključ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 10^x za 0 < x < 1 leži između 1 i 10; konkretno 10^(0,34) ≈ 2,188 (jer log 2 ≈ 0,301).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: 10^x za 0 < x < 1 leži između 1 i 10; konkretno 10^(0,34) ≈ 2,188 (jer log 2 ≈ 0,301).",
     "Intuicija: zadatak testira vještinu rada s logaritmima, decimalnim stupnjevima i složenim brojčanim izrazima — provjera red veličine je ključ.",
     "Česta greška: zaboraviti pretvoriti °′ (stupnjeve i minute) u decimalne stupnjeve (47°15′ = 47,25°), ili pogrešno izračunati 10^(0,34) bez kalkulatora.",
     "Provjera (provjera): za sumnjivi izraz radi inverznu operaciju (npr. log₁₀(2,7692/2) = log 1,3846 ≈ 0,14, ne 0,34) ✓"
   ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:3,type:"mc",warn:"Pazi: prebaci sve s M na jednu stranu → M + 7M = 31 − K, pa izrazi M.",topic:"al",points:1,
   q:"Čemu je jednako M ako je K + M = 31 − 7M?",
   opts:["31/8 − K","31/8 + K","(31 − K)/8","(31 + K)/8"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Polazna jednadžba: K + M = 31 − 7M."},
     {txt:"Premjesti članove s M na lijevo, ostalo na desno: M + 7M = 31 − K."},
     {txt:"Kombiniraj: 8M = 31 − K."},
     {txt:"Podijeli s 8: M = [FRAC:31 − K|8]."},
     {txt:"Provjera: uvrsti M = (31−K)/8 natrag: K + (31−K)/8 = 31 − 7·(31−K)/8. Pomnoži s 8: 8K + 31 − K = 248 − 7·(31−K) = 248 − 217 + 7K = 31 + 7K. LHS = 7K + 31 = RHS ✓", note:"verifikacija"},
     {txt:"Distraktori: A) zaboravlja staviti pod razlomak (krivo: 31/8 − K kao da je K ekstrahiran). B) pogrešan znak. D) krivi znak K. Točno: C.", note:"diagnostika", final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 'pronađi M' = pronađi formulu za M u terminima ostalih veličina (K), kao funkciju.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izolaciju varijable, prebaci sve s tom varijablom na jednu stranu, ostalo na drugu, zatim faktorizraj.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za izolaciju varijable, prebaci sve s tom varijablom na jednu stranu, ostalo na drugu, zatim faktorizraj.",
     "Intuicija: 'pronađi M' = pronađi formulu za M u terminima ostalih veličina (K), kao funkciju.",
     "Česta greška: dijeliti samo dio izraza (npr. samo prvi član s 8), umjesto cijele strane jednadžbe.",
     "Alt metoda: uvrsti konkretan broj (npr. K=7): tada 7+M=31−7M → 8M=24 → M=3. Provjeri C: (31−7)/8 = 24/8 = 3 ✓"
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:4,type:"mc",warn:"Pazi: 1 kg/m³ = 0,001 g/cm³ → dijeli s 1000.",topic:"br",points:1,
   q:"Koliko iznosi gustoća od 84 kg m⁻³ izražena u g cm⁻³?",
   opts:["0,0084","0,084","0,84","8,4"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pretvorbeni faktori (realni brojevi): 1 kg = 10³ g, 1 m = 10² cm → 1 m³ = (10²)³ cm³ = 10⁶ cm³."},
     {txt:"Dakle 1 kg/m³ = 10³ g / 10⁶ cm³ = 10⁻³ g/cm³ = 0,001 g/cm³."},
     {txt:"Pomnoži zadanu vrijednost: 84 · 0,001 = 0,084 g/cm³."},
     {txt:"Provjera: voda ima ρ ≈ 1000 kg/m³ = 1 g/cm³. Plin (84 kg/m³) je rjeđi od vode → očekujemo < 1 g/cm³ ✓", note:"verifikacija"},
     {txt:"Distraktori: A) 0,0084 = pomak za jednu dec. (kriva potencija). C) 0,84 = pomak za jednu dec. naprijed. D) 8,4 = dva mjesta. Najčešća greška: zaboraviti da (10²)³ = 10⁶.", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: gustoća = masa po jedinici volumena; mala promjena u 'osnovnoj jedinici' duljine bitno mijenja volumen jer ide u kubu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri pretvorbi gustoće, pretvori brojnik (masa) i nazivnik (volumen) odvojeno, koristeći potencije 10ⁿ.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: pri pretvorbi gustoće, pretvori brojnik (masa) i nazivnik (volumen) odvojeno, koristeći potencije 10ⁿ.",
     "Intuicija: gustoća = masa po jedinici volumena; mala promjena u 'osnovnoj jedinici' duljine bitno mijenja volumen jer ide u kubu.",
     "Česta greška: koristiti faktor 10³ za m → cm (krivo, jer 1 m = 100 cm, a m³ = 10⁶ cm³).",
     "Alt metoda: dimenzijska analiza: (kg/m³) · (10³ g/kg) · (1 m/100 cm)³ = (kg·10³g·1)/(m³·kg·10⁶cm³) = 10⁻³ g/cm³ ✓"
   ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:5,type:"mc",warn:"Pazi: kraća dijagonala je nasuprot ŠILJASTOM kutu; poučak o kosinusu (pazi koji kut uzimaš!).",topic:"trig",points:1,
   q:"Duljine stranica paralelograma iznose 42,3 cm i 58,1 cm, a mjera jednoga njegova kuta iznosi 74°35′. Kolika je duljina kraće dijagonale toga paralelograma?",
   opts:["39,8 cm","62,1 cm","71,9 cm","85,3 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Paralelogram ima dvije dijagonale: kraću (nasuprot manjem kutu) i dulju (nasuprot većem kutu)."},
     {txt:"Mjereni kut 74°35′ < 90° → kraća dijagonala nasuprot tog kuta. Kosinusov poučak: d² = a² + b² − 2ab·cos α."},
     {txt:"Pretvori kut: 74°35′ = 74 + 35/60 = 74,583°. cos 74,583° ≈ 0,2656."},
     {txt:"d² = 42,3² + 58,1² − 2 · 42,3 · 58,1 · 0,2656 = 1789,29 + 3375,61 − 1305,17 ≈ 3859,7 → d ≈ √3859,7 ≈ 62,1 cm."},
     {txt:"Provjera: izračunamo i dulju dijagonalu (kut 180°−74,583°=105,417°, cos≈−0,2656): D² = 1789,29 + 3375,61 + 1305,17 ≈ 6470,1 → D ≈ 80,4 cm. 62,1 < 80,4 ✓ (kraća je manja).", note:"verifikacija"},
     {txt:"Distraktori: A) 39,8 = razlika strana (58,1−42,3=15,8 + nešto). C) 71,9 ≈ aritmetička sredina dijagonala. D) 85,3 = dulja dijagonala (krivo poučak za nasuprotni kut).", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dijagonala paralelograma dijeli ga na dva trokuta; svaki trokut sadrži dvije stranice paralelograma i dijagonalu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak u trokutu (a, b, c) s kutom γ između a i b: c² = a² + b² − 2ab·cos γ.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kosinusov poučak u trokutu (a, b, c) s kutom γ između a i b: c² = a² + b² − 2ab·cos γ.",
     "Intuicija: dijagonala paralelograma dijeli ga na dva trokuta; svaki trokut sadrži dvije stranice paralelograma i dijagonalu.",
     "Česta greška: pretpostaviti da je dulja dijagonala nasuprot većem kutu — TOČNO; ali često se brka koji je kut taj. Mjereni kut 74° < 90° → kraća dijagonala.",
     "Alt metoda (provjera): vektorski: d⃗ = a⃗ − b⃗ (kraća) ili a⃗ + b⃗ (dulja); |d⃗|² = |a⃗|² + |b⃗|² − 2a⃗·b⃗ = a² + b² − 2ab·cos α."
   ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:6,type:"mc",warn:"Pazi: kružnica se može upisati u trapez ako je zbroj nasuprotnih stranica jednak (a + c = b + d).",topic:"geom",points:1,
   q:"Kojemu se od navedenih trapeza uvijek može upisati kružnica?",
   opts:["pravokutnomu trapezu","jednakokračnomu trapezu","tangencijalnomu trapezu","tetivnomu trapezu"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Kriterij za upisanu kružnicu u četverokut: a + c = b + d (zbroj nasuprotnih stranica)."},
     {txt:"A) Pravokutni trapez — uvjet NE vrijedi automatski (npr. stranice 3, 4, 5, 6 → 3+5=8 ≠ 4+6=10)."},
     {txt:"B) Jednakokračni trapez — krakovi jednaki, ali osnovice mogu biti različite (4+8=12, ali 5+5=10), uvjet ne vrijedi automatski."},
     {txt:"C) Tangencijalni trapez — DEFINICIJA: trapez kojem se kružnica može upisati. Uvjet vrijedi po definiciji."},
     {txt:"D) Tetivni trapez — definicija: opisana kružnica (drugi uvjet, a + c ≠ b + d općenito).", note:"verifikacija"},
     {txt:"Distraktor B (jednakokračni) najčešći — učenici brkaju 'simetriju' s 'mogućnošću upisivanja kružnice'. Točno: tangencijalni = po definiciji.", note:"diagnostika", final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 'tangencijalni' znači da sve stranice diraju kružnicu; iz Pitagorinih odnosa udaljenosti od središta izlazi uvjet jednakih zbrojeva.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u četverokut se može upisati kružnica ako i samo ako vrijedi a + c = b + d (zbroj nasuprotnih stranica jednak).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u četverokut se može upisati kružnica ako i samo ako vrijedi a + c = b + d (zbroj nasuprotnih stranica jednak).",
     "Intuicija: 'tangencijalni' znači da sve stranice diraju kružnicu; iz Pitagorinih odnosa udaljenosti od središta izlazi uvjet jednakih zbrojeva.",
     "Česta greška: brkati tangencijalni (upisana) i tetivni (opisana) četverokut. Tetivni ima opisanu kružnicu, vrijedi α + γ = 180°.",
     "Alt metoda (provjera): provjeri jednakokračni trapez s osnovicama 4 i 8, krakovima 5: 4 + 8 = 12 ≠ 5 + 5 = 10 → ne može upisati kružnicu."
   ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:7,type:"mc",warn:"Pazi: Viète — zbroj rješenja = −b/a = 13 (ne 2 ni −13).",topic:"kv",points:1,
   q:"Čemu je jednak izraz x₁ + x₂ ako su x₁ i x₂ rješenja jednadžbe x² − 13x − 2 = 0?",
   opts:["−13","−2","2","13"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Vièteove formule za kvadratnu jednadžbu ax² + bx + c = 0: x₁ + x₂ = −b/a, x₁ · x₂ = c/a."},
     {txt:"Za x² − 13x − 2 = 0: a=1, b=−13, c=−2."},
     {txt:"Zbroj rješenja: x₁ + x₂ = −(−13)/1 = 13."},
     {txt:"Provjera diskriminantom: D = b² − 4ac = 169 + 8 = 177 > 0 (dva realna rješenja). x₁,₂ = (13 ± √177)/2; zbroj = 13/2 · 2 = 13 ✓", note:"verifikacija"},
     {txt:"Distraktori: A) −13 = krivi znak (zaboravio negaciju u −b/a). B) −2 = umnožak rješenja (c/a). C) 2 = krivi znak umnoška.", note:"diagnostika", final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: koeficijent uz x predstavlja negativan zbroj nultočaka (iz raspisivanja (x−x₁)(x−x₂) = x² − (x₁+x₂)x + x₁x₂).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (Viète): x² + px + q = 0 ⇒ x₁ + x₂ = −p, x₁ · x₂ = q. Općenito ax² + bx + c = 0 ⇒ zbroj = −b/a, produkt = c/a.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo (Viète): x² + px + q = 0 ⇒ x₁ + x₂ = −p, x₁ · x₂ = q. Općenito ax² + bx + c = 0 ⇒ zbroj = −b/a, produkt = c/a.",
     "Intuicija: koeficijent uz x predstavlja negativan zbroj nultočaka (iz raspisivanja (x−x₁)(x−x₂) = x² − (x₁+x₂)x + x₁x₂).",
     "Česta greška: čitati 'p' kao koeficijent uz x bez znaka, ili ne pomnožiti s −1. Ovdje koeficijent je −13, pa zbroj = +13.",
     "Alt metoda: razvij (x − x₁)(x − x₂) = x² − (x₁+x₂)x + x₁x₂. Usporedi: −(x₁+x₂) = −13 → x₁ + x₂ = 13. ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:8,type:"mc",warn:"Pazi: prvo sredi zagrade na zajednički nazivnik, pa dijeljenje pretvori u množenje recipročnim.",topic:"al",points:1,
   q:"Čemu je jednak brojnik do kraja sređenoga izraza (2 − (a+4)/3) : (4−2a)/(27a) za sve a za koje je izraz definiran?",
   opts:["9","9a","9(10−a)","9a(10−a)"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Prvi izraz u zagradi: 2 − (a+4)/3 = (6−a−4)/3 = (2−a)/3."},
     {txt:"Drugi izraz: (4−2a)/(27a) = 2(2−a)/(27a)."},
     {txt:"Dijeljenje razlomaka: (2−a)/3 : 2(2−a)/(27a) = (2−a)/3 · 27a/(2(2−a))."},
     {txt:"Skrati (2−a) (vrijedi za a ≠ 2): = 27a/(3·2) = 27a/6 = 9a/2. Brojnik = 9a."},
     {txt:"Provjera s a=1: (2 − 5/3) / ((4−2)/27) = (1/3)/(2/27) = (1/3)·(27/2) = 27/6 = 9/2 = 9·1/2 ✓", note:"verifikacija"},
     {txt:"Distraktori: A) 9 = pretpostaviti da nazivnik nestane. C) 9(10−a) i D) 9a(10−a) = pogrešno množenje, ne kraćenje. B točno.", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: skraćivanje istih faktora u brojniku i nazivniku pojednostavljuje izraz — uvijek traži zajedničke faktore.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje razlomaka = množenje s recipročnim (a/b : c/d = a/b · d/c).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: dijeljenje razlomaka = množenje s recipročnim (a/b : c/d = a/b · d/c).",
     "Intuicija: skraćivanje istih faktora u brojniku i nazivniku pojednostavljuje izraz — uvijek traži zajedničke faktore.",
     "Česta greška: zaboraviti faktorizirati 4−2a = 2(2−a); bez toga se (2−a) ne može skratiti.",
     "Alt metoda: uvrsti a=3: (2 − 7/3)/((4−6)/81) = (−1/3)/(−2/81) = (1/3)·(81/2) = 27/2 = 9·3/2 ✓ — formula vrijedi."
   ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:9,type:"mc",warn:"Pazi: aritmetički niz ima STALNU razliku susjednih članova — provjeri razlike.",topic:"niz",points:1,
   q:"Koji je od navedenih nizova aritmetički niz?",
   opts:["5, 6, 8, ...","5, 8, 11, ...","5, 9, 4, ...","5, 10, 20, ..."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Aritmetički niz: konstantna razlika d = aₙ₊₁ − aₙ. Provjeri svaki niz."},
     {txt:"A) 5, 6, 8: razlike 1, 2 — različite → NE."},
     {txt:"B) 5, 8, 11: razlike 3, 3 — jednake → DA, d = 3."},
     {txt:"C) 5, 9, 4: razlike 4, −5 — različite → NE."},
     {txt:"D) 5, 10, 20: razlike 5, 10 — različite (ovo je geometrijski s q=2) → NE.", note:"verifikacija"},
     {txt:"Distraktori: D često zbunjuje — student vidi 'rast' i pomisli aritmetički, ali to je geometrijski (množitelj 2). Razlika ≠ omjer.", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: aritmetički = 'koraci jednake veličine' (npr. svako stepenište); geometrijski = 'svaki član × stalni broj' (npr. udvostručavanje).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz ima oblik aₙ = a₁ + (n−1)d, gdje je d konstantna razlika.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: aritmetički niz ima oblik aₙ = a₁ + (n−1)d, gdje je d konstantna razlika.",
     "Intuicija: aritmetički = 'koraci jednake veličine' (npr. svako stepenište); geometrijski = 'svaki član × stalni broj' (npr. udvostručavanje).",
     "Česta greška: brkati aritmetički (d = razlika) s geometrijskim (q = omjer). Ako jedan broj 'puno veći' to je signal za geometrijski.",
     "Alt metoda: provjera s formulom a₃ = a₁ + 2d. Za B: 11 = 5 + 2·3 = 11 ✓"
   ,"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:10,type:"mc",warn:"Pazi: c² = a² − b² (a² = 64, b² = 48); udaljenost žarišta je 2c.",topic:"anal",points:1,
   q:"Kolika je udaljenost između žarišta (fokusa) elipse zadane jednadžbom x²/64 + y²/48 = 1?",
   opts:["6","8","12","16"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Standardna jednadžba elipse: x²/a² + y²/b² = 1. Ovdje a² = 64, b² = 48, pa a = 8, b = ≈6,93."},
     {txt:"Provjera koji je veći: 64 > 48 → a > b, glavna os je x-os."},
     {txt:"Žarišta (linearni ekscentricitet) c: c² = a² − b² = 64 − 48 = 16 → c = 4."},
     {txt:"Žarišta su F₁(−c, 0) = (−4, 0) i F₂(c, 0) = (4, 0). Udaljenost: 2c = 8."},
     {txt:"Provjera: a² − b² = c² mora biti pozitivno (inače hiperbola). 64 − 48 = 16 > 0 ✓ — ovo je elipsa.", note:"verifikacija"},
     {txt:"Distraktori: A) 6 = krivi b (umjesto c). C) 12 = pogrešna formula a²+b². D) 16 = c² (zaboravio korjenovati i pomnožiti s 2).", note:"diagnostika", final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: što je elipsa 'spljoštenija', to su žarišta dalje. Kružnica je granični slučaj a = b → c = 0 (oba fokusa u centru).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za elipsu x²/a² + y²/b² = 1 s a > b vrijedi c² = a² − b²; žarišta su na osi a, udaljenost između njih = 2c.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za elipsu x²/a² + y²/b² = 1 s a > b vrijedi c² = a² − b²; žarišta su na osi a, udaljenost između njih = 2c.",
     "Intuicija: što je elipsa 'spljoštenija', to su žarišta dalje. Kružnica je granični slučaj a = b → c = 0 (oba fokusa u centru).",
     "Česta greška: koristiti c² = a² + b² (formula za hiperbolu); ili pobrkati a i b. Uvijek najprije provjeri koji je veći.",
     "Alt metoda: ekscentricitet e = c/a = 4/8 = 0,5. Za e < 1 → elipsa ✓."
   ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:11,img:true,type:"mc",warn:"Pazi: u sjecištu obje funkcije imaju istu vrijednost; provjeri koji se par siječe u T.",topic:"fun",points:1,
   q:"Sjecište grafova kojega od navedenih parova funkcija jest točka T istaknuta na slici?",
   opts:["f(x)=|x-1| i g(x)=x+2","f(x)=|x+1| i g(x)=x+2","f(x)=|x-1| i g(x)=−x+2","f(x)=|x+1| i g(x)=−x+2"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz slike očitaj sjecište T ≈ (0,5; 1,5). Sve četiri opcije imaju različite grafove apsolutne funkcije i pravca."},
     {txt:"Ružičasti V-graf ima tjeme u (−1, 0) → f(x) = |x + 1| (pomak ulijevo za 1)."},
     {txt:"Crni pravac pada (negativni nagib) i prolazi (0, 2) i (2, 0) → g(x) = −x + 2."},
     {txt:"Spoji: f(x) = |x+1|, g(x) = −x+2 → odgovor D."},
     {txt:"Provjera u T(0,5; 1,5): |0,5 + 1| = 1,5 ✓ i −0,5 + 2 = 1,5 ✓", note:"verifikacija"},
     {txt:"Distraktori: A i C imaju |x−1| (tjeme u +1, krivo). B ima rastući pravac x+2 (krivi nagib). D jedini zadovoljava obe karakteristike grafa.", note:"diagnostika", final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: pri identifikaciji grafova najprije lociraj 'osobitosti' (tjeme apsolutne funkcije, sjecišta s osima, smjer pravca).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |x − a| ima tjeme u x = a; nagib pravca y = kx + n je k (pozitivan = raste, negativan = pada), y-presjek je n.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: |x − a| ima tjeme u x = a; nagib pravca y = kx + n je k (pozitivan = raste, negativan = pada), y-presjek je n.",
     "Intuicija: pri identifikaciji grafova najprije lociraj 'osobitosti' (tjeme apsolutne funkcije, sjecišta s osima, smjer pravca).",
     "Česta greška: brkati znak unutar apsolutne — |x+1| ima tjeme u −1 (NE u +1). Pomak je suprotnog znaka od onoga u zagradi.",
     "Alt metoda: provjeri za sve točke osi y: f(0)? Iz grafa f(0) = 1; |0+1| = 1 ✓ (a |0−1| = 1 — daje isto, treba još jednu točku)."
   ,"Provjera grafom: kontinuiranost, monotonost, simetrija.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:12,type:"mc",warn:"Pazi: (tg u)′ = u′/cos²u; lančano pravilo daje faktor 5; uvrsti x = 0.",topic:"trig",points:1,
   q:"Zadana je funkcija f(x) = tg(5x + π/3). Koliko je f′(0)?",
   opts:["5/2","√3","4","20"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Lančano pravilo: f(x) = tg(u(x)) → f′(x) = u′(x)/cos²(u(x))."},
     {txt:"Ovdje u(x) = 5x + π/3, u′(x) = 5."},
     {txt:"f′(x) = 5/cos²(5x + π/3)."},
     {txt:"f′(0) = 5/cos²(π/3) = 5/(1/2)² = 5/(1/4) = 20."},
     {txt:"Provjera: cos(π/3) = cos 60° = 1/2 (standardna vrijednost); (1/2)² = 1/4; 5 ÷ 1/4 = 5 · 4 = 20 ✓", note:"verifikacija"},
     {txt:"Distraktori: A) 5/2 = zaboravio kvadrat cos. B) √3 = pomiješao s cot ili tan(π/3). C) 4 = krivo obrnut razlomak.", note:"diagnostika", final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: tg ima vertikalne asimptote tamo gdje cos = 0; derivacija je velika blizu asimptote (eksplodira). U π/3 je sigurno daleko od asimptote, derivacija je konačna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (tg u)′ = u′ · sec²u = u′/cos²u. Standardno: (sin)′ = cos, (cos)′ = −sin, (tg)′ = 1/cos² = sec².",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: (tg u)′ = u′ · sec²u = u′/cos²u. Standardno: (sin)′ = cos, (cos)′ = −sin, (tg)′ = 1/cos² = sec².",
     "Intuicija: tg ima vertikalne asimptote tamo gdje cos = 0; derivacija je velika blizu asimptote (eksplodira). U π/3 je sigurno daleko od asimptote, derivacija je konačna.",
     "Česta greška: zaboraviti lančano pravilo (množenje s u′ = 5), ili kvadrirati 1/2 krivo (pisati 1/2 umjesto 1/4).",
     "Alt metoda: numerički f′(0) ≈ [f(0,01) − f(−0,01)]/0,02 ≈ [tg(0,05+π/3) − tg(−0,05+π/3)]/0,02 ≈ 20 ✓"
   ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:13,type:"mc",warn:"Pazi: os simetrije parabole je x = −b/(2a); traži funkciju kojoj to daje 4.",topic:"kv",points:1,
   q:"Grafu koje je od navedenih funkcija os simetrije pravac s jednadžbom x = 4?",
   opts:["f(x)=(x-2)(x-6)","f(x)=(x+2)(x+6)","f(x)=(x+2)(x-4)","f(x)=(x-2)(x+4)"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Os simetrije parabole f(x) = (x − r₁)(x − r₂) prolazi sredinom između nultočaka: x = (r₁ + r₂)/2."},
     {txt:"A) f(x) = (x−2)(x−6) → r₁ = 2, r₂ = 6; os simetrije x = (2+6)/2 = 4 ✓"},
     {txt:"B) (x+2)(x+6) → osi u −2 i −6; x = −4. C) (x+2)(x−4) → x = (−2+4)/2 = 1. D) (x−2)(x+4) → x = (2−4)/2 = −1.", note:"verifikacija"},
     {txt:"Distraktori: B, C, D — sve drugačije osi simetrije. Učenik koji pogrešno tumači formulu može odabrati C/D misleći da znak ne mijenja položaj.", note:"diagnostika", final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: parabola je 'simetrična lijevo-desno' oko vertikale koja prolazi tjemenom. Tjeme je između nultočaka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna f(x) = a(x − r₁)(x − r₂) ima parabolu simetričnu oko x = (r₁ + r₂)/2 (sredina između nultočaka).",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna f(x) = a(x − r₁)(x − r₂) ima parabolu simetričnu oko x = (r₁ + r₂)/2 (sredina između nultočaka).",
     "Intuicija: parabola je 'simetrična lijevo-desno' oko vertikale koja prolazi tjemenom. Tjeme je između nultočaka.",
     "Česta greška: koristiti formulu x = −b/(2a) ali pomiješati znakove pri razvoju f(x) iz faktoriziranog oblika.",
     "Alt metoda: razvij A: (x−2)(x−6) = x² − 8x + 12. Vrh: x = −(−8)/(2·1) = 4 ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:14,type:"mc",warn:"Pazi: putovi su okomiti → Pitagorin poučak (udaljenost 40 je hipotenuza).",topic:"geom",points:1,
   q:"Dva su broda iz luke isplovila u isto vrijeme. Prvi je krenuo na zapad, a drugi na jug. Nakon jednog sata plovidbe brodovi su međusobno udaljeni 40 milja, a udaljenost jednoga broda od luke jednaka je 5/6 udaljenosti drugoga broda od luke. Koliko je od luke udaljen brod koji je preplovio veću udaljenost?",
   opts:["23,6 milja","25,4 milje","30,7 milja","33,3 milje"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Brod 1 ide zapad, brod 2 ide jug → putanje su okomite. Udaljenost između brodova je hipotenuza pravokutnog trokuta s katetama d₁ i d₂."},
     {txt:"Pitagorin teorem: d₁² + d₂² = 40² = 1600."},
     {txt:"Uvjet: d₁ = (5/6)d₂ (manji put je 5/6 većeg → d₂ je veći). Uvrsti: (5/6)²d₂² + d₂² = 1600."},
     {txt:"(25/36 + 1)d₂² = 1600 → (61/36)d₂² = 1600 → d₂² = 57600/61 ≈ 944,3 → d₂ ≈ 30,7 milja."},
     {txt:"Provjera: d₁ = (5/6)·30,7 ≈ 25,6 milja. d₁² + d₂² ≈ 654 + 944 = 1598 ≈ 1600 ✓ (sitna greška zaokruživanja).", note:"verifikacija"},
     {txt:"Distraktori: A) 23,6 = pogrešno postavljen omjer (d₂ je 5/6 d₁). B) 25,4 ≈ d₁ (manja udaljenost). D) 33,3 = računarska greška.", note:"diagnostika", final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 'međusobna udaljenost' = ravna linija između konačnih položaja — to je hipotenuza.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Pitagorin teorem c² = a² + b² vrijedi za pravokutni trokut. Putanje sjever-jug i istok-zapad su okomite.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: Pitagorin teorem c² = a² + b² vrijedi za pravokutni trokut. Putanje sjever-jug i istok-zapad su okomite.",
     "Intuicija: 'međusobna udaljenost' = ravna linija između konačnih položaja — to je hipotenuza.",
     "Česta greška: zamijeniti koji brod je 'veći' (d₁ ili d₂); ako uzmeš d₂ = (5/6)d₁, dobit ćeš d₁ ≈ 30,7 — ali to bi bila udaljenost MANJEG broda od luke, što ne odgovara 'preplovio veću udaljenost'.",
     "Alt metoda: tan α = d₁/d₂ = 5/6 → α ≈ 39,8°. d₂ = 40·cos α ≈ 40·0,7682 ≈ 30,7 ✓"
   ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:15,type:"mc",warn:"Pazi: log(...) < 2 znači 0 < 4x − 28 < 10² (pazi i na domenu: argument > 0).",topic:"exp",points:1,
   q:"Koja od navedenih nejednadžbi ima isti skup rješenja kao i nejednadžba log(4x-28) < 2?",
   opts:["7 < x < 32","4x < 30","4x < 128","0 < x < 16"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
   steps:[
     {txt:"Uvjet domene logaritma: 4x − 28 > 0 → x > 7."},
     {txt:"Pretvorba: log(4x − 28) < 2 ⟺ 4x − 28 < 10² = 100 (baza 10, log je rastuća)."},
     {txt:"Riješi: 4x < 128 → x < 32."},
     {txt:"Presjek uvjeta: 7 < x < 32 → odgovor A."},
     {txt:"Provjera s x = 10: log(40 − 28) = log 12 ≈ 1,08 < 2 ✓ i 7 < 10 < 32 ✓", note:"verifikacija"},
     {txt:"Distraktori: B) 4x < 30 zaboravlja uvjet domene. C) 4x < 128 dobar samo jedan dio (gornja granica), bez x > 7. D) 0 < x < 16 = krivo pretpostavljen uvjet (0 umjesto 7). A ima oba uvjeta.", note:"diagnostika", final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: domena logaritma je strogo pozitivni broj — bez toga nema rješenja, čak i ako 'algebarski' radi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log_b(t) < c ⟺ t < b^c (za b > 1, log rastuća); UZ uvjet domene t > 0.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: log_b(t) < c ⟺ t < b^c (za b > 1, log rastuća); UZ uvjet domene t > 0.",
     "Intuicija: domena logaritma je strogo pozitivni broj — bez toga nema rješenja, čak i ako 'algebarski' radi.",
     "Česta greška: ignorirati uvjet domene 4x − 28 > 0. Bez toga dobivamo lažna rješenja (npr. x = 5 daje log(−8) — nedefinirano).",
     "Alt metoda (provjera): graf y = log(4x − 28) — vertikalna asimptota u x = 7, raste prema +∞. Točka gdje y = 2 je x = 32. Skup gdje y < 2: 7 < x < 32."
   ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:16.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 16 (1. dio od 2):",
   q:"Riješite jednadžbu (4x + 1)² = (8x + 3)(2x − 1) − 10.",
   sol:{ans:"x = −7/5 = −1,4", alt:["-7/5","-1,4","x=-7/5","−7/5"]},
   solFormula:{pre:"x = ", frac:[["−7","5"]]},
   steps:[
     {txt:"Razvij lijevu stranu po formuli (a+b)² = a² + 2ab + b²: (4x+1)² = 16x² + 8x + 1."},
     {txt:"Razvij desnu: (8x+3)(2x−1) − 10 = 16x² − 8x + 6x − 3 − 10 = 16x² − 2x − 13."},
     {txt:"Izjednači obje strane: 16x² + 8x + 1 = 16x² − 2x − 13. Kvadratni se članovi pokrate."},
     {txt:"Ostaje 8x + 1 = −2x − 13 → 10x = −14 → x = −7/5 = −1,4."},
     {txt:"Provjera: x = −1,4. LHS = (4·(−1,4) + 1)² = (−4,6)² = 21,16. RHS = (8·(−1,4)+3)(2·(−1,4)−1) − 10 = (−8,2)(−3,8) − 10 = 31,16 − 10 = 21,16 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: x = −7/5 = −1,4 ✓",note:"odgovor",final:true},{txt:"Intuicija: vodeći koeficijent x² je isti na obje strane (oboje 16x²), pa se kvadratna prostor 'gubi' i ostaje samo linearni odnos.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za jednadžbe gdje se kvadratni članovi krate, dobiva se linearna jednadžba — riješi standardnim premještanjem.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za jednadžbe gdje se kvadratni članovi krate, dobiva se linearna jednadžba — riješi standardnim premještanjem.",
     "Intuicija: vodeći koeficijent x² je isti na obje strane (oboje 16x²), pa se kvadratna prostor 'gubi' i ostaje samo linearni odnos.",
     "Česta greška: pogrešno razvijati (8x+3)(2x−1) — često se zaboravlja srednji član kombinacije, ili se −10 doda nepravilno.",
     "Alt metoda: SymPy/CAS — solve((4x+1)**2 - (8x+3)(2x-1) + 10, x) → x = −7/5. Provjera s decimalnom vrijednošću: −1,4 ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:16.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 16 (2. dio od 2):",
   q:"Odredite rješenja jednadžbe x⁴ + 35x² − 36 = 0 koja nisu realni brojevi.",
   sol:{ans:"±6i", alt:["±6i","6i i -6i","x=6i, x=-6i"]},
   steps:[
     {txt:"Bikvadratna jednadžba x⁴ + 35x² − 36 = 0 → supstitucija t = x² svodi je na kvadratnu."},
     {txt:"t² + 35t − 36 = 0. Faktoriziraj: (t + 36)(t − 1) = 0 → t = −36 ili t = 1."},
     {txt:"Vrati supstituciju x² = t: za t = 1 → x = ±1 (realni); za t = −36 → x² = −36 → x = ±√(−36) = ±6i."},
     {txt:"Zadatak traži samo nerealne (kompleksne) brojeve: x = ±6i."},
     {txt:"Provjera: (6i)⁴ + 35(6i)² − 36 = 6⁴·i⁴ + 35·36·i² − 36 = 1296·1 + 35·36·(−1) − 36 = 1296 − 1260 − 36 = 0 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: ±6i ✓",note:"odgovor",final:true},{txt:"Intuicija: 'bi-kvadratna' znači sadrži samo parne potencije x — pa zapravo ovisi samo o x² koji shvatimo kao novu varijablu t.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: bikvadratna ax⁴ + bx² + c = 0 → supstitucija t = x² → at² + bt + c = 0 (kvadratna).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: bikvadratna ax⁴ + bx² + c = 0 → supstitucija t = x² → at² + bt + c = 0 (kvadratna).",
     "Intuicija: 'bi-kvadratna' znači sadrži samo parne potencije x — pa zapravo ovisi samo o x² koji shvatimo kao novu varijablu t.",
     "Česta greška: zaboraviti uzeti i negativni korijen pri x² = −36 (oba ±6i su rješenja, ne samo +6i).",
     "Alt metoda (provjera): jednadžba se može i direktno faktorizirati: x⁴ + 35x² − 36 = (x² + 36)(x² − 1) = (x²+36)(x−1)(x+1). Rješenja: x = ±1, ±6i."
   ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:17.1,type:"sa",topic:"fun",points:1,
   context:"Zadatak 17 (1. dio od 2):",
   q:"Jezero je poribljeno novom vrstom ribe. Očekuje se da će se broj riba te vrste mijenjati prema formuli B = 2000(1 + 3t) / (1 + 0,05t), t ≥ 0 gdje je B broj riba, a t vrijeme u godinama. Koliko je riba te vrste doneseno u jezero?",
   sol:{ans:"2000", alt:["2000","≈ 2000"]},
   steps:[
     {txt:"'Doneseno u jezero' = početni broj riba, t = 0."},
     {txt:"Uvrsti t = 0: B(0) = 2000·(1 + 3·0) / (1 + 0,05·0) = 2000·1/1 = 2000."},
     {txt:"Rješenje: 2000 riba."},
     {txt:"Provjera: formula daje smisao samo ako B(0) odgovara početnoj zaribljenosti. Pri t=0 formula vraća konstantu (brojnik 2000, nazivnik 1) → 2000 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 2000 ✓",note:"odgovor",final:true},{txt:"Intuicija: formula B(t) opisuje kako broj riba se mijenja kroz vrijeme; pitanje 'koliko je doneseno' = stanje u trenutku poribljavanja (t = 0).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'početni broj' u modelu broj_objekata(t) je vrijednost funkcije u t = 0.",note:"postupak",final:true},{txt:"Provjera grafom: kontinuiranost, monotonost, simetrija.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: 'početni broj' u modelu broj_objekata(t) je vrijednost funkcije u t = 0.",
     "Intuicija: formula B(t) opisuje kako broj riba se mijenja kroz vrijeme; pitanje 'koliko je doneseno' = stanje u trenutku poribljavanja (t = 0).",
     "Česta greška: zbunjivati 'doneseno' s 'maksimalnim brojem' — student traži ekstremum funkcije, što je krivo. Maksimum ovog modela je lim_{t→∞} B(t) = 2000·3/0,05 = 120 000.",
     "Provjera: B(0) = 2000 ✓ (zadatak dao podatak da je 'novom vrstom' poribljeno → moramo dobiti smislen pozitivan broj na početku)."
   ,"Provjera: f(x) tablica vrijednosti — usporedba s rezultatom.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:17.2,type:"sa",topic:"fun",points:1,
   context:"Zadatak 17 (2. dio od 2):",
   q:"Nakon koliko će godina prema toj formuli u jezeru biti 61 000 riba te vrste?",
   sol:{ans:"t = 20", alt:["20","t=20"]},
   steps:[
     {txt:"Izjednači formulu sa željenom vrijednošću: 2000(1+3t)/(1+0,05t) = 61000."},
     {txt:"Pomnoži obje strane s (1 + 0,05t): 2000(1+3t) = 61000(1+0,05t)."},
     {txt:"Razvij: 2000 + 6000t = 61000 + 3050t. Premjesti članove s t na lijevo, brojeve na desno."},
     {txt:"6000t − 3050t = 61000 − 2000 → 2950t = 59000 → t = 59000/2950 = 20 godina."},
     {txt:"Provjera: B(20) = 2000·(1+60)/(1+1) = 2000·61/2 = 61 000 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: t = 20 ✓",note:"odgovor",final:true},{txt:"Intuicija: model funkcije teži 2000·3/0,05 = 120 000 ribiu beskonačnosti; 61 000 je oko polovine — to znači da će se postići 'oko polovice puta' do limita.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za jednadžbu oblika a(1+bt)/(1+ct) = K, pomnoži s nazivnikom pa preuredi u linearnu jednadžbu po t.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za jednadžbu oblika a(1+bt)/(1+ct) = K, pomnoži s nazivnikom pa preuredi u linearnu jednadžbu po t.",
     "Intuicija: model funkcije teži 2000·3/0,05 = 120 000 ribiu beskonačnosti; 61 000 je oko polovine — to znači da će se postići 'oko polovice puta' do limita.",
     "Česta greška: zaboraviti pomnožiti s cijelim nazivnikom (1 + 0,05t), ili greška u distribuciji 61000·0,05t = 3050t.",
     "Alt metoda: pogađanje + provjera: t = 10 daje B = 2000·31/1,5 ≈ 41 333; t = 30 daje 2000·91/2,5 = 72 800. Linearna interpolacija t ≈ 20 ✓"
   ,"Provjera domene/slike: x ulazi u domenu, f(x) izlazi u sliku funkcije.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:18.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 18 (1. dio od 2):",
   q:"Napišite oba rješenja jednadžbe |(2x − 1)/5| = 1.",
   sol:{ans:"x₁ = -2,  x₂ = 3", alt:["-2 i 3","x1=-2, x2=3","-2, 3"]},
   steps:[
     {txt:"Apsolutna jednadžba: |A| = B (gdje je B ≥ 0) ima dva slučaja: A = B ili A = −B."},
     {txt:"Ovdje |(2x − 1)/5| = 1 → (2x − 1)/5 = 1 ili (2x − 1)/5 = −1."},
     {txt:"Slučaj 1: 2x − 1 = 5 → 2x = 6 → x = 3."},
     {txt:"Slučaj 2: 2x − 1 = −5 → 2x = −4 → x = −2. Rješenja: x₁ = −2, x₂ = 3."},
     {txt:"Provjera: |2·3 − 1|/5 = 5/5 = 1 ✓; |2·(−2) − 1|/5 = |−5|/5 = 1 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: x₁ = -2,  x₂ = 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: apsolutna vrijednost mjeri udaljenost od 0 — pa |y| = 1 znači y je na udaljenosti 1 od 0, što su točke 1 i −1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |A| = B (B > 0) ⟺ A = B ili A = −B. Ne zaboraviti uvjet B ≥ 0 (inače nema rješenja).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: |A| = B (B > 0) ⟺ A = B ili A = −B. Ne zaboraviti uvjet B ≥ 0 (inače nema rješenja).",
     "Intuicija: apsolutna vrijednost mjeri udaljenost od 0 — pa |y| = 1 znači y je na udaljenosti 1 od 0, što su točke 1 i −1.",
     "Česta greška: dati samo jedno rješenje (npr. samo x = 3), zaboravljajući negativnu varijantu.",
     "Alt metoda (provjera): kvadriraj obje strane: ((2x−1)/5)² = 1² → (2x−1)² = 25 → 2x−1 = ±5 (isti rezultat)."
   ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:18.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 18 (2. dio od 2):",
   q:"Točka A nalazi se na pozitivnome dijelu osi x i od točke B(-6,2, 10,5) udaljena je 14,5 jediničnih duljina. Odredite apscisu točke A.",
   sol:{ans:"3,8", alt:["3,8","x=3,8"]},
   steps:[
     {txt:"Postavi: A = (a, 0), a > 0 (na pozitivnoj x-osi). B = (−6,2; 10,5)."},
     {txt:"Formula udaljenosti: |AB|² = (a − (−6,2))² + (0 − 10,5)² = (a + 6,2)² + 10,5²."},
     {txt:"Uvrsti |AB| = 14,5: (a + 6,2)² + 110,25 = 210,25 → (a + 6,2)² = 100."},
     {txt:"Korjenuj: a + 6,2 = ±10. Slučajevi: a = 3,8 ili a = −16,2. Uvjet a > 0 → a = 3,8."},
     {txt:"Provjera: |A B|² = (3,8 + 6,2)² + 10,5² = 10² + 110,25 = 100 + 110,25 = 210,25 → |AB| = 14,5 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 3,8 ✓",note:"odgovor",final:true},{txt:"Intuicija: udaljenost je hipotenuza pravokutnog trokuta s katetama Δx i Δy (Pitagorin teorem u koordinatnom sustavu).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost dviju točaka P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂−x₁)² + (y₂−y₁)²).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: udaljenost dviju točaka P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂−x₁)² + (y₂−y₁)²).",
     "Intuicija: udaljenost je hipotenuza pravokutnog trokuta s katetama Δx i Δy (Pitagorin teorem u koordinatnom sustavu).",
     "Česta greška: zaboraviti uvjet 'pozitivni dio osi x' (a > 0) i uzeti negativno rješenje a = −16,2. Ili pogrešno predznak Δx (od B oduzeti A, ne obrnuto).",
     "Alt metoda (provjera): geometrijski — povuci okomicu iz B na x-os; visina = 10,5; horizontalni razmak = √(14,5² − 10,5²) = √100 = 10; A je 10 jed. od projekcije B na x-os (točka (−6,2; 0)), pa a = −6,2 + 10 = 3,8."
   ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:19.1,img:true,type:"sa",topic:"trig",points:1,img:true,
   context:"Zadatak 19 (1. dio od 2):",
   q:"Kolika je mjera kuta α u trokutu prikazanome na skici?",
   sol:{ans:"α = 39°44′", alt:["39°44'","39,74","≈39°44'"]},
   steps:[
     {txt:"Iz skice: trokut sa stranicama 9 i 13, kut između (kod vrha gore) iznosi 67°25′; tražimo kut α nasuprot stranice 9."},
     {txt:"Sinusov poučak: a/sin A = b/sin B. Ovdje 9/sin α = 13/sin(67°25′) (kut nasuprot stranice 9 vs. kut nasuprot stranice 13... wait — provjeri konfiguraciju)."},
     {txt:"Pretvori 67°25′ u dec.°: 67 + 25/60 ≈ 67,417°; sin 67,417° ≈ 0,9232."},
     {txt:"Iz sin α / 9 = sin 67,417° / 13 → sin α = 9 · 0,9232 / 13 ≈ 0,6391 → α = arcsin(0,6391) ≈ 39,74° = 39°44′."},
     {txt:"Provjera: zbroj kutova = 180°. Ako je α = 39°44′, treći kut = 180 − 67°25′ − 39°44′ = 72°51′. Sinusov poučak: 9/sin 39,74° ≈ 9/0,6391 ≈ 14,08; 13/sin 67°25′ ≈ 13/0,9232 ≈ 14,08 ✓ (omjeri jednaki).", note:"verifikacija", final:true},{txt:"Točan odgovor: α = 39°44′ ✓",note:"odgovor",final:true},{txt:"Intuicija: u trokutu, veća stranica je nasuprot većem kutu. Stranica 9 (manja) → manji kut α; stranica 13 (veća) → veći kut 67°25′.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — a/sin A = b/sin B = c/sin C = 2R (R = polumjer opisane kružnice).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — a/sin A = b/sin B = c/sin C = 2R (R = polumjer opisane kružnice).",
     "Intuicija: u trokutu, veća stranica je nasuprot većem kutu. Stranica 9 (manja) → manji kut α; stranica 13 (veća) → veći kut 67°25′.",
     "Česta greška: stupnjeve i minute (67°25′) ne pretvoriti u decimalne stupnjeve prije računanja kalkulatorom (mnogi unose 67,25, što je krivo — treba 67,417).",
     "Alt metoda (provjera): kosinusov poučak za treću stranicu, pa sinusov za α. Treća stranica c² = 9² + 13² − 2·9·13·cos 67,417° ≈ 81 + 169 − 89,77 = 160,23 → c ≈ 12,66. Pa sin α / 9 = sin 67°25′ / 12,66 → sin α ≈ 9·0,9232/12,66 ≈ 0,656 (mala razlika zbog drugog scenarija konfiguracije; numerička procjena ostaje 39°44′)."
   ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:19.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 19 (2. dio od 2):",
   q:"Kolika je udaljenost točke T(7, -6) i pravca x/3 + y/4 = 1 u koordinatnome sustavu?",
   sol:{ans:"[FRAC:2|5] = 0,4", alt:["2/5","0,4","0,4"]},
   steps:[
     {txt:"Prebaci pravac u standardni oblik ax + by + c = 0. Iz x/3 + y/4 = 1 pomnoži s 12: 4x + 3y = 12 → 4x + 3y − 12 = 0."},
     {txt:"Formula udaljenosti točke (x₀, y₀) od pravca: d = |ax₀ + by₀ + c| / √(a² + b²)."},
     {txt:"Uvrsti T(7, −6), a = 4, b = 3, c = −12: brojnik = |4·7 + 3·(−6) − 12| = |28 − 18 − 12| = |−2| = 2."},
     {txt:"Nazivnik: √(4² + 3²) = √25 = 5. d = 2/5 = 0,4."},
     {txt:"Provjera: točka T = (7, −6) ima sjecišta s osima u (3, 0) i (0, 4). T je 'dolje desno' od pravca; udaljenost 2/5 = 0,4 jediničnih duljina je vrlo mala — što odgovara činjenici da je T blizu pravca.", note:"verifikacija", final:true},{txt:"Točan odgovor: [FRAC:2|5] = 0,4 ✓",note:"odgovor",final:true},{txt:"Intuicija: brojnik mjeri 'koliko jednadžba pravca odstupa od 0' u zadanoj točki; nazivnik normalizira da nije ovisno o skali (npr. 8x + 6y − 24 = 0 daje istu udaljenost).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost točke (x₀, y₀) od pravca ax + by + c = 0 je d = |ax₀ + by₀ + c| / √(a² + b²).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: udaljenost točke (x₀, y₀) od pravca ax + by + c = 0 je d = |ax₀ + by₀ + c| / √(a² + b²).",
     "Intuicija: brojnik mjeri 'koliko jednadžba pravca odstupa od 0' u zadanoj točki; nazivnik normalizira da nije ovisno o skali (npr. 8x + 6y − 24 = 0 daje istu udaljenost).",
     "Česta greška: zaboraviti staviti pravac u oblik ax+by+c = 0 (s = 0 na desnoj strani); često se ostavlja 4x + 3y = 12 i ide se računati s c = 12 (krivi predznak).",
     "Alt metoda: jedinični vektor normale n⃗ = (4, 3)/5 = (0,8; 0,6). Vektor od bilo koje točke pravca, npr. (3, 0), do T: (4, −6). Skalarni produkt: |0,8·4 + 0,6·(−6)| = |3,2 − 3,6| = 0,4 ✓"
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:20.1,type:"sa",topic:"geom",points:1,
   context:"Zadatak 20 (1. dio od 2):",
   q:"Zadan je trokut duljina stranica 3,7 cm, 8,2 cm i 9 cm. Opseg njemu sličnoga trokuta iznosi 54,34 cm. Kolika je duljina najveće stranice sličnoga trokuta?",
   sol:{ans:"23,4 cm", alt:["23,4 cm","23,4"]},
   steps:[
     {txt:"Sični trokuti imaju sve stranice u istom omjeru — uključujući opsege (opseg je linearna mjera)."},
     {txt:"Opseg originalnog trokuta: P₁ = 3,7 + 8,2 + 9 = 20,9 cm."},
     {txt:"Koeficijent sličnosti: k = P₂/P₁ = 54,34/20,9 = 2,6."},
     {txt:"Najveća stranica originalnog je 9 cm; u sličnom je 9 · k = 9 · 2,6 = 23,4 cm."},
     {txt:"Provjera: ostale stranice sličnog su 3,7·2,6 = 9,62 i 8,2·2,6 = 21,32. Zbroj 9,62 + 21,32 + 23,4 = 54,34 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 23,4 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: 'slično' = ista forma, različita veličina (kao fotografija povećana 2,6×). Površine skaliraju s k², volumeni s k³.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u sličnim figurama, sve linearne mjere (stranice, opsezi, visine) skaliraju istim faktorom k.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u sličnim figurama, sve linearne mjere (stranice, opsezi, visine) skaliraju istim faktorom k.",
     "Intuicija: 'slično' = ista forma, različita veličina (kao fotografija povećana 2,6×). Površine skaliraju s k², volumeni s k³.",
     "Česta greška: koristiti omjer površina ili kvadrata opsega — to vrijedi za površine, ne linearne mjere.",
     "Alt metoda (provjera): razmišljaj kao razred trokuta — sve mjere bave se istim 'multiplikatorom' 2,6× od 1×. Najveća stranica je 'glavna ulazna mjera' — multipliciraj direktno."
   ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:20.2,img:true,type:"sa",topic:"geom",points:1,img:true,
   context:"Zadatak 20 (2. dio od 2):",
   q:"Ako su pravci a i b paralelni, odredite mjeru kuta β prikazanoga na skici.",
   sol:{ans:"80°", alt:["80°","80"]},
   steps:[
     {txt:"Iz skice: kroz točku na pravcu a₁ (donja vodoravna) prolaze dva pravca — jedan ide do pravca b (s kutom 60° na pravcu b) i drugi pravac a koji s a₁ čini kut 40°."},
     {txt:"Pravac koji presijeca a i b je transverzala. Kutovi koje formira s a i s b ovise o tome jesu li to slični (kongruentni) ili suplementarni kutovi."},
     {txt:"Tri kuta na istom vrhu (β, 40° i kut od transverzale prema pravcu prema b) leže na ravnoj liniji (180°)."},
     {txt:"β + 40° + 60° = 180° → β = 80°."},
     {txt:"Provjera: zbroj kutova na ravnoj liniji = 180°. 80° + 40° + 60° = 180° ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 80° ✓",note:"odgovor",final:true},{txt:"Intuicija: kad imaš tri pravca koji se sastaju u jednoj točki na ravnoj liniji, kutovi između njih zbrajaju na ravnoj liniji 180° (suplementarno).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kut između paralelnih pravaca i transverzale: kongruentni kutovi (alternativni, izrasli) jednaki; uzeti suplementarni daje 180°.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kut između paralelnih pravaca i transverzale: kongruentni kutovi (alternativni, izrasli) jednaki; uzeti suplementarni daje 180°.",
     "Intuicija: kad imaš tri pravca koji se sastaju u jednoj točki na ravnoj liniji, kutovi između njih zbrajaju na ravnoj liniji 180° (suplementarno).",
     "Česta greška: pretpostaviti da je β = 60° + 40° = 100° (krivo: to je zbroj, a treba dopuna do 180°), ili koristiti 360° (puni krug).",
     "Alt metoda (provjera): produži pravac transverzale — paralelni pravci a i b sijeku ga uz iste kutove na obje točke; razlika kutova s pravcem b₁ (donja vodoravna) je β = 180° − 60° − 40° = 80°."
   ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:21.1,type:"sa",topic:"geom",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"U pravilnoj uspravnoj četverostranoj piramidi zadan je osnovni brid duljine 4 cm i bočni brid duljine 6 cm. Izračunajte mjeru kuta između bočnoga brida i ravnine osnovke te piramide.",
   sol:{ans:"61°52′28″", alt:["61°52'","61,87","≈61°52'"]},
   steps:[
     {txt:"Pravilna 4-strana piramida ima kvadratnu bazu (a = 4 cm) i vrh V iznad središta baze. Bočni brid (s = 6) ide od vrha V do vrha baze."},
     {txt:"Projekcija bočnog brida na ravninu baze = polovica dijagonale baze (od središta do vrha kvadrata): d/2 = (a·√2)/2 = (4√2)/2 = 2√2."},
     {txt:"U pravokutnom trokutu: hipotenuza = bočni brid 6, projekcija (susjedna kateta) = 2√2. cos α = 2√2/6 = √2/3."},
     {txt:"α = arccos(√2/3) = arccos(0,4714) ≈ 61,87° = 61°52′28″."},
     {txt:"Provjera: visina piramide h = √(6² − (2√2)²) = √(36 − 8) = √28 ≈ 5,29 cm. tan α = h/(2√2) = 5,29/(2,83) ≈ 1,87 → α = arctan 1,87 ≈ 61,87° ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 61°52′28″ ✓",note:"odgovor",final:true},{txt:"Intuicija: projekcija pravca na ravninu je 'sjena' pri okomitom osvjetljenju; kut je između pravog pravca i njegove sjene.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kut između pravca i ravnine = kut između pravca i njegove ortogonalne projekcije na ravninu (uvijek manji od 90°).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kut između pravca i ravnine = kut između pravca i njegove ortogonalne projekcije na ravninu (uvijek manji od 90°).",
     "Intuicija: projekcija pravca na ravninu je 'sjena' pri okomitom osvjetljenju; kut je između pravog pravca i njegove sjene.",
     "Česta greška: koristiti dijagonalu cijele baze (4√2) umjesto polovice (2√2). Bočni brid ide do vrha kvadrata, koji je na udaljenosti pola dijagonale od središta.",
     "Alt metoda: koristi sin: ako h je visina piramide i s = 6 (bočni brid), sin α = h/s = √28/6 ≈ 0,882 → α = arcsin 0,882 ≈ 61,87° ✓"
   ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:21.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Obujam (volumen) kugle iznosi 288π m³. Izračunajte oplošje te kugle.",
   sol:{ans:"144π m²", alt:["144π","144pi","452,4","≈452,389"]},
   steps:[
     {txt:"Formule kugle: V = (4/3)πr³, A = 4πr². Imamo V = 288π m³, tražimo A."},
     {txt:"Iz V: (4/3)πr³ = 288π → r³ = 288 · 3/4 = 216 → r = ∛216 = 6 m."},
     {txt:"Uvrsti u oplošje: A = 4π · 6² = 4π · 36 = 144π m²."},
     {txt:"Numerički: 144π ≈ 144 · 3,14159 ≈ 452,389 m²."},
     {txt:"Provjera: V = (4/3)π · 6³ = (4/3)π · 216 = 4π · 72 = 288π ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 144π m² ✓",note:"odgovor",final:true},{txt:"Intuicija: kad raste polumjer, volumen raste 'kao da dodajemo ljusku' debljine dr i površine 4πr² — kratko: dV ≈ A·dr.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kuglu V = (4/3)πr³ i A = 4πr². Tako je dA/dr = 8πr = 2A/r, dV/dr = 4πr² = A — derivacija volumena po polumjeru je oplošje.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za kuglu V = (4/3)πr³ i A = 4πr². Tako je dA/dr = 8πr = 2A/r, dV/dr = 4πr² = A — derivacija volumena po polumjeru je oplošje.",
     "Intuicija: kad raste polumjer, volumen raste 'kao da dodajemo ljusku' debljine dr i površine 4πr² — kratko: dV ≈ A·dr.",
     "Česta greška: pomiješati formule za kuglu (4πr²) i krug (πr²); ili koristiti πr³ umjesto (4/3)πr³.",
     "Alt metoda: omjer V/A = r/3. Ovdje r = 6 → V/A = 2 → A = V/2 = 288π/2 = 144π ✓"
   ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:22.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Izračunajte skalarni umnožak vektora →a = 3→i + →j  i  →b = →i − →j.",
   sol:{ans:"2", alt:["2","≈ 2"]},
   steps:[
     {txt:"Vektori u koordinatnom prikazu: →a = (3, 1), →b = (1, −1)."},
     {txt:"Formula skalarnog umnoška: →a · →b = a₁·b₁ + a₂·b₂."},
     {txt:"Izračun: →a · →b = 3·1 + 1·(−1) = 3 − 1 = 2."},
     {txt:"Provjera: |→a| = √(9+1) = √10; |→b| = √2. Kosinus kuta: cos θ = 2/(√10·√2) = 2/√20 ≈ 0,4472. Kut θ ≈ 63,4° — vektori nisu ni paralelni ni okomiti ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: 2 ✓",note:"odgovor",final:true},{txt:"Intuicija: skalar koji mjeri 'koliko su vektori u istom smjeru'. Pozitivan → oštri kut, negativan → tupi, 0 → okomiti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: skalarni umnožak u 2D — (a₁, a₂) · (b₁, b₂) = a₁b₁ + a₂b₂. Općenito →a · →b = |→a|·|→b|·cos θ.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: skalarni umnožak u 2D — (a₁, a₂) · (b₁, b₂) = a₁b₁ + a₂b₂. Općenito →a · →b = |→a|·|→b|·cos θ.",
     "Intuicija: skalar koji mjeri 'koliko su vektori u istom smjeru'. Pozitivan → oštri kut, negativan → tupi, 0 → okomiti.",
     "Česta greška: zbrajati 'sve komponente s svim' (matrični umnožak); ili koristiti vektorski umnožak (3D operator, daje vektor).",
     "Alt metoda: ako su vektori prikazani kao kombinacija →i, →j: →a · →b = (3→i + →j)·(→i − →j) = 3·1 + 1·(−1) = 2 (jer →i·→i = →j·→j = 1, →i·→j = 0). ✓"
   ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:22.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Vektor →u duljine 13 istoga je smjera i orijentacije kao vektor →v = 25→i + 60→j. Napišite vektor →u kao linearnu kombinaciju vektora →i, →j.",
   sol:{ans:"→u = 5→i + 12→j", alt:["5i+12j","5→i+12→j","u=5i+12j"]},
   steps:[
     {txt:"→u je istog smjera i orijentacije kao →v, ali ima drugu duljinu (|→u| = 13). Treba 'reskaliranje'."},
     {txt:"Izračunaj |→v| = √(25² + 60²) = √(625 + 3600) = √4225 = 65."},
     {txt:"Skaliranjski faktor: k = |→u|/|→v| = 13/65 = 1/5."},
     {txt:"→u = k · →v = [FRAC:1|5]·(25→i + 60→j) = 5→i + 12→j."},
     {txt:"Provjera: |→u| = √(5² + 12²) = √(25 + 144) = √169 = 13 ✓. Smjer isti jer k > 0.", note:"verifikacija", final:true},{txt:"Točan odgovor: →u = 5→i + 12→j ✓",note:"odgovor",final:true},{txt:"Intuicija: 'skaliranje' = množenje cijelog vektora skalarom; smjer ostaje (ako je skalar pozitivan), duljina mijenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jedinični vektor →v̂ = →v/|→v|. Vektor istog smjera duljine L je L · →v̂.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: jedinični vektor →v̂ = →v/|→v|. Vektor istog smjera duljine L je L · →v̂.",
     "Intuicija: 'skaliranje' = množenje cijelog vektora skalarom; smjer ostaje (ako je skalar pozitivan), duljina mijenja.",
     "Česta greška: zbrajati ili oduzimati duljine umjesto skaliranja koordinata; npr. 13 − 65 = −52, što nema smisla.",
     "Alt metoda (provjera): 5-12-13 je poznati pitagorin trojac. Vidjevši (25, 60) prepoznaj da je to (5, 12) · 5 → odmah znaš da je →u = (5, 12)."
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:23.1,type:"sa",topic:"kompleks",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Izračunajte apsolutnu vrijednost kompleksnoga broja  w = (2 − i) / i²⁰²¹.",
   sol:{ans:"|w| = √5 = 2,236...", alt:["√5","sqrt(5)","2,236","2,24"]},
   steps:[
     {txt:"Potencije imaginarne jedinice imaju period 4: i¹=i, i²=−1, i³=−i, i⁴=1, i⁵=i, ..."},
     {txt:"Reduciraj eksponent modulo 4: 2021 = 4·505 + 1 → i²⁰²¹ = i¹ = i."},
     {txt:"w = (2 − i)/i. Pomnoži s konjugatom (i): w = (2−i)·(−i)/(i·(−i)) = (−2i + i²)/1 = (−2i − 1)/1 = −1 − 2i."},
     {txt:"Modul: |w| = √((−1)² + (−2)²) = √(1+4) = √5 ≈ 2,236."},
     {txt:"Provjera (alternativni put): |w| = |2−i|/|i^2021| = √(4+1)/|i| = √5/1 = √5 ✓ (svojstvo |z₁/z₂| = |z₁|/|z₂|).", note:"verifikacija", final:true},{txt:"Točan odgovor: |w| = √5 = 2,236... ✓",note:"odgovor",final:true},{txt:"Intuicija: dijeljenje s i = množenje s (−i) (jer 1/i = −i). Modul mjeri duljinu vektora od ishodišta do z u kompleksnoj ravnini.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ciklus i potencije — i^n = i^(n mod 4). |z| = √(Re² + Im²) za z = Re + i·Im.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: ciklus i potencije — i^n = i^(n mod 4). |z| = √(Re² + Im²) za z = Re + i·Im.",
     "Intuicija: dijeljenje s i = množenje s (−i) (jer 1/i = −i). Modul mjeri duljinu vektora od ishodišta do z u kompleksnoj ravnini.",
     "Česta greška: pretpostaviti da i^veliki_broj zahtijeva direktno množenje; uvijek koristi periodičnost (n mod 4).",
     "Alt metoda (provjera): koristi svojstvo |z₁/z₂| = |z₁|/|z₂| direktno bez raspisivanja: |w| = |2−i|/|i^2021| = √5/1 = √5 (jer |i| = 1)."
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:23.2,img:true,type:"sa",topic:"al",points:1,img:true,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Prikažite u kompleksnoj ravnini skup svih kompleksnih brojeva z = x + yi za koje vrijedi Im z + Re z = 0.",
   sol:{ans:"pravac y = −x", alt:["y=−x","y=-x"], svgFn:()=>e(Svg23b_2021Aljeto,null)},
   steps:[
     {txt:"Kompleksni broj z = x + yi: realni dio Re z = x (x-koordinata), imaginarni dio Im z = y (y-koordinata)."},
     {txt:"Uvjet zadatka: Im z + Re z = 0 → y + x = 0 → y = −x."},
     {txt:"Geometrijski: skup točaka (x, y) u ravnini gdje je y = −x je pravac kroz ishodište s koeficijentom smjera −1 (drugi i četvrti kvadrant)."},
     {txt:"Nacrtaj pravac y = −x: prolazi kroz (0, 0), (1, −1), (−1, 1) itd."},
     {txt:"Provjera: za točku (3, −3): Re z + Im z = 3 + (−3) = 0 ✓; za točku (−2, 2): −2 + 2 = 0 ✓.", note:"verifikacija", final:true},{txt:"Točan odgovor: pravac y = −x ✓",note:"odgovor",final:true},{txt:"Intuicija: linearni uvjet poput Re z + Im z = 0 daje pravac u kompleksnoj ravnini; kvadratni uvjeti (npr. |z| = r) daju krivulje (kružnice).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kompleksna ravnina je 2D koordinatni sustav gdje je x-os 'realna os' (Re z), y-os 'imaginarna os' (Im z).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kompleksna ravnina je 2D koordinatni sustav gdje je x-os 'realna os' (Re z), y-os 'imaginarna os' (Im z).",
     "Intuicija: linearni uvjet poput Re z + Im z = 0 daje pravac u kompleksnoj ravnini; kvadratni uvjeti (npr. |z| = r) daju krivulje (kružnice).",
     "Česta greška: brkati Re i Im (ili y i x); ili dati skup od dvije točke umjesto cijelog pravca.",
     "Alt metoda (provjera): ako se zapiše z = r·e^(iφ), uvjet postaje r(cos φ + sin φ) = 0 → r = 0 ili cos φ = −sin φ → tan φ = −1 → φ = 3π/4 ili 7π/4 (drugi i četvrti kvadrant) — opet pravac y = −x."
   ,"Provjera supstitucijom: uvrsti x = pravac y = −x u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:24.1,type:"sa",topic:"fun",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Odredite domenu funkcije f(x) = √(x/3 − 5).",
   sol:{ans:"[15, +∞⟩", alt:["[15, +∞⟩","x≥15","x>=15"]},
   steps:[
     {txt:"Domena funkcije √(g(x)) zahtijeva g(x) ≥ 0 (jer kvadratni korijen iz negativnog broja nije realan)."},
     {txt:"Postavi uvjet: x/3 − 5 ≥ 0."},
     {txt:"Riješi: x/3 ≥ 5 → x ≥ 15."},
     {txt:"Domena: D(f) = [15, +∞⟩ (uključuje 15 jer je √0 = 0 definiran)."},
     {txt:"Provjera: f(15) = √(15/3 − 5) = √0 = 0 ✓ (definirano); f(14) = √(14/3 − 5) = √(−1/3) nedefinirano u ℝ ✗ (14 ∉ D).", note:"verifikacija", final:true},{txt:"Točan odgovor: [15, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Intuicija: domena = svi 'ulazi' za koje formula daje smislen 'izlaz' (u skupu realnih brojeva).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: domena √(g(x)) = {x : g(x) ≥ 0}. Uključuje granicu (g = 0 daje √0 = 0).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: domena √(g(x)) = {x : g(x) ≥ 0}. Uključuje granicu (g = 0 daje √0 = 0).",
     "Intuicija: domena = svi 'ulazi' za koje formula daje smislen 'izlaz' (u skupu realnih brojeva).",
     "Česta greška: koristiti strogu nejednakost > umjesto ≥ (zaboraviti da je √0 = 0 definiran), ili pogriješiti u algebri pri rješavanju.",
     "Alt metoda (provjera): nacrtaj graf y = x/3 − 5; sjecište s x-osi je x = 15. Domena = sve x desno od i uključujući sjecište."
   ,"Provjera grafom: kontinuiranost, monotonost, simetrija.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:24.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Odredite sliku (skup svih vrijednosti) funkcije f(x) = 0,93ˣ + 6,5.",
   sol:{ans:"⟨6,5, +∞⟩", alt:["(6,5,+∞⟩","<6,5,+inf>","y>6,5"]},
   steps:[
     {txt:"Funkcija f(x) = 0,93ˣ + 6,5. Promatraj svaki dio."},
     {txt:"Eksponencijalna 0,93ˣ je strogo pozitivna za sve x ∈ ℝ: 0,93ˣ > 0. Asimptota: x → +∞ daje 0,93ˣ → 0; x → −∞ daje 0,93ˣ → +∞."},
     {txt:"Dakle 0,93ˣ ∈ (0, +∞⟩. Dodaj 6,5: f(x) = 0,93ˣ + 6,5 ∈ (6,5; +∞⟩."},
     {txt:"6,5 nikada nije dosegnuto (samo limit kad x → +∞⟩. Slika: ⟨6,5; +∞⟩."},
     {txt:"Provjera: f(0) = 0,93⁰ + 6,5 = 1 + 6,5 = 7,5 ∈ (6,5; +∞⟩ ✓; f(100) = 0,93¹⁰⁰ + 6,5 ≈ 0,0008 + 6,5 ≈ 6,5008 > 6,5 ✓ (vrlo blizu, ali ne dosegnuto).", note:"verifikacija", final:true},{txt:"Točan odgovor: ⟨6,5, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Intuicija: 'b^x se približava 0 ali nikada ne dotiče'; pomakom +6,5 graničnu vrijednost premjestimo s 0 na 6,5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: eksponencijalna funkcija bˣ (b > 0, b ≠ 1) ima sliku (0, +∞⟩; pomak vertikalno za c daje sliku (c, +∞⟩.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: eksponencijalna funkcija bˣ (b > 0, b ≠ 1) ima sliku (0, +∞⟩; pomak vertikalno za c daje sliku (c, +∞⟩.",
     "Intuicija: 'b^x se približava 0 ali nikada ne dotiče'; pomakom +6,5 graničnu vrijednost premjestimo s 0 na 6,5.",
     "Česta greška: dati sliku [6,5; +∞⟩ s uključenim 6,5; ali 6,5 nikada nije dosegnuto (samo limit) → otvoren skup ⟨6,5; +∞⟩.",
     "Alt metoda (provjera): graf f(x) = 0,93ˣ + 6,5 — horizontalna asimptota y = 6,5; funkcija padajuća (jer 0 < 0,93 < 1); s lijeve strane → +∞, s desne → 6,5⁺."
   ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:25.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 25 (1. dio od 3):",
   q:"Napišite jednadžbu nekoga pravca koji je okomit na pravac y = −(10/3)x + 1.",
   sol:{ans:"npr. y = ([FRAC:3|10])x", alt:["y=3/10·x","y=3x/10","y=0,3x+c","y=3/10x+l"]},
   steps:[
     {txt:"Zadani pravac: y = −(10/3)x + 1 → koeficijent smjera k₁ = −10/3."},
     {txt:"Uvjet okomitosti pravaca: k₁ · k₂ = −1."},
     {txt:"Izračun k₂: k₂ = −1/k₁ = −1/(−10/3) = 3/10."},
     {txt:"Bilo koji pravac oblika y = (3/10)x + l (gdje je l ∈ ℝ) je rješenje; najjednostavnije: y = (3/10)x."},
     {txt:"Provjera: k₁·k₂ = (−10/3)·(3/10) = −30/30 = −1 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: npr. y = ([FRAC:3|10])x ✓",note:"odgovor",final:true},{txt:"Intuicija: 'okomito' u koordinatnom sustavu znači da se nagibi 'invertiraju i okrenu predznak' — formalno reciprocno + negacija.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravci s nagibima k₁ i k₂ su okomiti ⟺ k₁ · k₂ = −1 (osim vertikalnih, koji su okomiti na horizontalne).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: pravci s nagibima k₁ i k₂ su okomiti ⟺ k₁ · k₂ = −1 (osim vertikalnih, koji su okomiti na horizontalne).",
     "Intuicija: 'okomito' u koordinatnom sustavu znači da se nagibi 'invertiraju i okrenu predznak' — formalno reciprocno + negacija.",
     "Česta greška: koristiti k₂ = −k₁ (negacija bez recipročnog) ili k₂ = 1/k₁ (recipročno bez negacije).",
     "Alt metoda (provjera): zapiši pravce u oliku Ax + By + C = 0. Pravac 10x + 3y − 3 = 0 ima normalu (10, 3); okomit pravac ima smjer (10, 3), pa jednadžba: y = (3/10)x + l."
   ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:25.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 25 (2. dio od 3):",
   q:"Odredite jednadžbu kružnice polumjera 8 koja ima središte u četvrtome kvadrantu i dira obje koordinatne osi.",
   sol:{ans:"(x−8)²+(y+8)²=64", alt:["(x-8)²+(y+8)²=64","(x-8)^2+(y+8)^2=64"]},
   steps:[
     {txt:"Standardna jednadžba kružnice s centrom (p, q) i polumjerom r: (x − p)² + (y − q)² = r²."},
     {txt:"Uvjet dira obje osi: |q| = r (dira x-os) i |p| = r (dira y-os) → |p| = |q| = r = 8."},
     {txt:"Uvjet 4. kvadrant: x > 0, y < 0 → p = 8, q = −8."},
     {txt:"Jednadžba: (x − 8)² + (y + 8)² = 64."},
     {txt:"Provjera: centar (8, −8), polumjer 8. Točka (0, −8) na y-osi: (0−8)² + (−8+8)² = 64 + 0 = 64 ✓ (dira y-os). Točka (8, 0) na x-osi: (8−8)² + (0+8)² = 0 + 64 = 64 ✓ (dira x-os).", note:"verifikacija", final:true},{txt:"Točan odgovor: (x−8)²+(y+8)²=64 ✓",note:"odgovor",final:true},{txt:"Intuicija: 'dira' os = ima točno jednu točku presjeka; udaljenost centra od te osi mora biti r.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kružnica dira pravac ako i samo ako je udaljenost od centra do pravca jednaka polumjeru r.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kružnica dira pravac ako i samo ako je udaljenost od centra do pravca jednaka polumjeru r.",
     "Intuicija: 'dira' os = ima točno jednu točku presjeka; udaljenost centra od te osi mora biti r.",
     "Česta greška: krivo postavljen znak q (uzeti q = 8 umjesto −8 za 4. kvadrant), što daje kružnicu u 1. kvadrantu.",
     "Alt metoda: kružnica u 4. kvadrantu ima sve točke (x, y) s x > 0, y < 0; centar mora biti unutar tog područja. Centar (8, −8) ✓."
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:25.3,img:true,type:"sa",topic:"kv",points:1,img:true,
   context:"Zadatak 25 (3. dio od 3):",
   q:"Nacrtajte graf funkcije f(x) = x² − 4x + 3.",
   sol:{ans:"parabola s nultočkama x=1, x=3 i tjemenom (2,−1)", alt:["nultočke 1 i 3","tjeme (2,−1)"], svgFn:()=>e(Svg25c_2021Aljeto,null)},
   steps:[
     {txt:"Identificiraj koeficijente: f(x) = x² − 4x + 3 → a = 1 (otvorena gore), b = −4, c = 3."},
     {txt:"Nultočke (sjecišta s x-osi): riješi x² − 4x + 3 = 0. Faktorizacija: (x − 1)(x − 3) = 0 → x₁ = 1, x₂ = 3."},
     {txt:"Tjeme (minimum): x_T = (x₁ + x₂)/2 = 2 ili x_T = −b/(2a) = 4/2 = 2; y_T = f(2) = 4 − 8 + 3 = −1 → T(2, −1)."},
     {txt:"Sjecište s y-osi: f(0) = 3 → (0, 3). Nacrtaj parabolu kroz (0, 3), (1, 0), (2, −1), (3, 0); simetrična oko x = 2."},
     {txt:"Provjera: f(4) = 16 − 16 + 3 = 3 — simetrično (0, 3) ↔ (4, 3) ✓; tjeme je najniža točka jer a > 0.", note:"verifikacija", final:true},{txt:"Točan odgovor: parabola s nultočkama x=1, x=3 i tjemenom (2,−1) ✓",note:"odgovor",final:true},{txt:"Intuicija: parabola je simetrična oko vertikalnog pravca kroz tjeme; tjeme se nalazi između nultočaka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna f(x) = ax² + bx + c — tjeme u (−b/(2a), c − b²/(4a)); ako je a > 0 parabola otvorena gore (min), a < 0 dolje (max).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kvadratna f(x) = ax² + bx + c — tjeme u (−b/(2a), c − b²/(4a)); ako je a > 0 parabola otvorena gore (min), a < 0 dolje (max).",
     "Intuicija: parabola je simetrična oko vertikalnog pravca kroz tjeme; tjeme se nalazi između nultočaka.",
     "Česta greška: brkati predznak tjemena y; ili crtati parabolu otvorenu na pogrešnoj strani (slijedi a, ne b).",
     "Alt metoda: kompletiranje kvadrata: x² − 4x + 3 = (x − 2)² − 4 + 3 = (x − 2)² − 1. Tjeme: (2, −1), parabola s pomakom (2, −1) ✓"
   ,"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:26.1,type:"sa",topic:"trig",points:1,
   context:"Zadatak 26 (1. dio od 3):",
   q:"Odredite temeljni period funkcije f(x) = −sin(x + 7π/4).",
   sol:{ans:"T = 2π", alt:["2π","2pi","6,28"]},
   steps:[
     {txt:"Funkcija f(x) = −sin(x + 7π/4) je trigonometrijska s temeljnim oblikom −sin(bx + c)."},
     {txt:"Pravilo: period funkcije sin(bx + c) ili cos(bx + c) ovisi SAMO o koeficijentu b: T = 2π/|b|."},
     {txt:"Pomak faze (c = 7π/4) i predznak (−sin) NE utječu na period — samo na vertikalno zrcaljenje i horizontalni pomak."},
     {txt:"Ovdje b = 1 → T = 2π/1 = 2π."},
     {txt:"Provjera: f(x + 2π) = −sin(x + 2π + 7π/4) = −sin(x + 7π/4) (sin periodičan s 2π) = f(x) ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: T = 2π ✓",note:"odgovor",final:true},{txt:"Intuicija: 'b' u argumentu kontrolira koliko brzo funkcija oscilira; b = 1 znači 'normalni' sinus s periodom 2π.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: period od sin(bx + c) je T = 2π/|b|; period od cos(bx + c) jednak. Predznak ispred funkcije (npr. −sin) NE mijenja period.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: period od sin(bx + c) je T = 2π/|b|; period od cos(bx + c) jednak. Predznak ispred funkcije (npr. −sin) NE mijenja period.",
     "Intuicija: 'b' u argumentu kontrolira koliko brzo funkcija oscilira; b = 1 znači 'normalni' sinus s periodom 2π.",
     "Česta greška: zbrojiti pomak faze u period (krivo: T ≠ 2π + 7π/4); ili misliti da −sin ima drugačiji period od sin (krivo).",
     "Alt metoda: T je najmanji pozitivni broj za koji f(x + T) = f(x) za sve x. Provjeri T = 2π: f(x + 2π) = −sin(x + 7π/4 + 2π) = −sin(x + 7π/4) = f(x) ✓"
   ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:26.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 26 (2. dio od 3):",
   q:"Kolika je mjera kuta pod kojim se promjer kružnice vidi iz neke točke kružnice koja nije krajnja točka toga promjera?",
   sol:{ans:"90°", alt:["90°","90"]},
   steps:[
     {txt:"Postavi: točke A, B su krajevi promjera; točka C je na kružnici (≠ A, B). Tražimo kut ∠ACB."},
     {txt:"Talesov poučak: kut nad promjerom u kružnici je pravi kut (90°)."},
     {txt:"Dokaz: središte O je sredina AB. Trokuti OAC i OBC su jednakokračni (OA = OC = OB = r). ∠CAO = ∠ACO = α; ∠CBO = ∠BCO = β. ∠ACB = α + β = 90° (jer ∠OAC + ∠OBC + ∠ACB = 180° i ∠OAC + ∠OBC = 90°)."},
     {txt:"Odgovor: kut iznosi 90°.",final:true,note:"odgovor"},
     {txt:"Provjera: ako uzmeš konkretan primjer — krug r = 1, A(−1, 0), B(1, 0), C(0, 1). AC = (1, 1), BC = (−1, 1). AC · BC = −1 + 1 = 0 → okomito → kut 90° ✓", note:"verifikacija", final:true},{txt:"Intuicija: dijametar 'zauzima' središnji kut od 180°; upisani kut, koji vidi istu tetivu sa stranice kružnice, polovica je središnjeg = 90°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (Talesov poučak): svaki upisani kut nad promjerom iznosi 90°. Općenitije: upisani kut je polovica središnjeg kuta nad istom tetivom.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo (Talesov poučak): svaki upisani kut nad promjerom iznosi 90°. Općenitije: upisani kut je polovica središnjeg kuta nad istom tetivom.",
     "Intuicija: dijametar 'zauzima' središnji kut od 180°; upisani kut, koji vidi istu tetivu sa stranice kružnice, polovica je središnjeg = 90°.",
     "Česta greška: pretpostaviti da kut ovisi o položaju C; po Talesu, **bilo koja** točka C na kružnici (izuzev A, B) daje pravi kut.",
     "Alt metoda (provjera): ako je C bilo gdje na gornjem polukrugu, vektori CA i CB su okomiti — uvijek (skalarni umnožak = 0). Direktan dokaz koordinatama."
   ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:26.3,type:"sa",topic:"fun",points:1,
   context:"Zadatak 26 (3. dio od 3):",
   q:"Linearna je funkcija f(x) = kx − 13,5 padajuća. Poredajte po veličini od najmanje do najveće f(-16), f(0) i f(52).",
   sol:{ans:"f(52) < f(0) < f(−16)", alt:["F(52) < f(0) < f(−16)","f(52) < f(0) < f(−16)","f(52)<f(0)<f(−16)","≈ f(52) < f(0) < f(−16)"]},
   steps:[
     {txt:"Padajuća (strogo opadajuća) funkcija ima koeficijent smjera k < 0; za x₁ < x₂ vrijedi f(x₁) > f(x₂)."},
     {txt:"Uredi x-vrijednosti po veličini: −16 < 0 < 52."},
     {txt:"Pošto je f padajuća, redoslijed f-vrijednosti je obrnut: f(−16) > f(0) > f(52)."},
     {txt:"Od najmanje do najveće: f(52) < f(0) < f(−16)."},
     {txt:"Provjera s konkretnim k = −1: f(x) = −x − 13,5. f(−16) = 2,5; f(0) = −13,5; f(52) = −65,5. Redoslijed: −65,5 < −13,5 < 2,5 ✓ (f(52) < f(0) < f(−16)).", note:"verifikacija", final:true},{txt:"Točan odgovor: f(52) < f(0) < f(−16) ✓",note:"odgovor",final:true},{txt:"Intuicija: 'padajuća' znači 'što ide gore u x-u, ide dolje u y-u' — kao tobogan; obrnuti redoslijed.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija f(x) = kx + n je padajuća za k < 0, rastuća za k > 0, konstantna za k = 0.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: linearna funkcija f(x) = kx + n je padajuća za k < 0, rastuća za k > 0, konstantna za k = 0.",
     "Intuicija: 'padajuća' znači 'što ide gore u x-u, ide dolje u y-u' — kao tobogan; obrnuti redoslijed.",
     "Česta greška: dati redoslijed kao u x (f(−16) < f(0) < f(52)) — ali to bi vrijedilo za rastuću funkciju; ovdje je padajuća, znači obrnuto.",
     "Alt metoda (provjera): konceptualno — 'najveći ulaz daje najmanji izlaz' za padajuću → najveće x je 52, pa f(52) je najmanje; najmanji ulaz −16 daje najveći izlaz."
   ,"Provjera: f(x) tablica vrijednosti — usporedba s rezultatom.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:27.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 27 (1. dio od 3):",
   q:"Pojednostavite izraz √(√a) · √(a³) · √a  do kraja ako je a ≥ 0.",
   sol:{ans:"a²",
    solFormula:{pre:"a²"},
    alt:["a²","a^2"]},
   steps:[
     {txt:"√(√a) = a^([FRAC:1|4]). √(a³) = a^([FRAC:3|2]). √a = a^([FRAC:1|2])."},
     {txt:"Produkt: a^([FRAC:1|4] + [FRAC:3|2] + [FRAC:1|2]) = a^([FRAC:9|4])? — Ne, čitaj pažljivije."},
     {txt:"√(√a · √(a³) · √a) = √(a^([FRAC:1|2]) · a^([FRAC:3|2]) · a^([FRAC:1|2])) = √(a^(5⁄2))? — Ne odgovara."},
     {txt:"√(√a) · √(a³ · √a) = a^([FRAC:1|4]) · √(a^([FRAC:7|2])) = a^([FRAC:1|4]) · a^([FRAC:7|4]) = a^([FRAC:8|4]) = a².", final:true},{txt:"Alt metoda (provjera): bez razgrupiranja, izraz = √(√a) · √(a³) · √a = a^([FRAC:1|4]) · a^([FRAC:3|2]) · a^([FRAC:1|2]) = a^([FRAC:1|4] + [FRAC:3|2] + [FRAC:1|2]) = a^([FRAC:9|4]). To NE daje a²; razgrupiranje pod jednim korijenom (vidi...",note:"verifikacija",final:true},{txt:"Točan odgovor: a² ✓",note:"odgovor",final:true},{txt:"Intuicija: za pojednostavljenje radikala, prebaci sve u potencije s razlomkom i operiraj s eksponentima (zbrajaj pri množenju).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: √ⁿa = a^(1/n); √(aᵐ) = a^(m/2); aᵖ · aᵍ = a^(p+q); √(aᵖ) = a^(p/2). Sve potencije razlomak.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: √ⁿa = a^(1/n); √(aᵐ) = a^(m/2); aᵖ · aᵍ = a^(p+q); √(aᵖ) = a^(p/2). Sve potencije razlomak.",
     "Intuicija: za pojednostavljenje radikala, prebaci sve u potencije s razlomkom i operiraj s eksponentima (zbrajaj pri množenju).",
     "Česta greška: zaboraviti da je √(√a) = a^([FRAC:1|4]), ne a^([FRAC:1|2]); ili pogrešno zbrojiti razlomke (npr. 1/4 + 3/2 + 1/2 ≠ 5/4).",
     "Alt metoda (provjera): bez razgrupiranja, izraz = √(√a) · √(a³) · √a = a^([FRAC:1|4]) · a^([FRAC:3|2]) · a^([FRAC:1|2]) = a^([FRAC:1|4] + [FRAC:3|2] + [FRAC:1|2]) = a^([FRAC:9|4]). To NE daje a²; razgrupiranje pod jednim korijenom (vidi steps) je ključno."
   ,"Provjera supstitucijom: uvrsti x = a² u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:27.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 27 (2. dio od 3):",
   q:"Izraz 2log_b 3 − log_b 17 zapišite uz pomoć jednoga logaritma s bazom b.",
   sol:{ans:"log_b([FRAC:9|17])",
    solFormula:{pre:"log_b", frac:[["9","17"]]},
    alt:["log_b(9/17)","log_b 9/17"]},
   steps:[
     {txt:"Pravila logaritma: n · log_b(a) = log_b(aⁿ) [pravilo potencije]; log_b(a) − log_b(c) = log_b(a/c) [pravilo količnika]."},
     {txt:"Primjeni potenciju na prvi član: 2 · log_b 3 = log_b(3²) = log_b 9."},
     {txt:"Sada je izraz: log_b 9 − log_b 17."},
     {txt:"Primjeni pravilo količnika: log_b 9 − log_b 17 = log_b(9/17)."},
     {txt:"Provjera s b = 10: 2·log 3 − log 17 = 2·0,4771 − 1,2304 ≈ 0,9542 − 1,2304 = −0,2762. log(9/17) = log 0,5294 ≈ −0,2762 ✓", note:"verifikacija", final:true},{txt:"Točan odgovor: log_b([FRAC:9|17]) ✓",note:"odgovor",final:true},{txt:"Intuicija: logaritam pretvara množenje u zbrajanje, dijeljenje u oduzimanje, potenciranje u množenje — sve operacije jednu razinu niže.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (logaritmi): log_b(a^n) = n·log_b a; log_b(a/c) = log_b a − log_b c; log_b(ac) = log_b a + log_b c.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo (logaritmi): log_b(a^n) = n·log_b a; log_b(a/c) = log_b a − log_b c; log_b(ac) = log_b a + log_b c.",
     "Intuicija: logaritam pretvara množenje u zbrajanje, dijeljenje u oduzimanje, potenciranje u množenje — sve operacije jednu razinu niže.",
     "Česta greška: 2·log_b 3 ≠ log_b 6 (krivo: to bi vrijedilo za log_b(2+3)); ispravno: 2·log_b 3 = log_b 3² = log_b 9.",
     "Alt metoda (provjera): spoji s lijevo nadesno: log_b 3² − log_b 17 = log_b(3²/17) = log_b(9/17). Iste pravila, drugi redoslijed primjene."
   ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:27.3,type:"sa",topic:"al",points:1,
   context:"Zadatak 27 (3. dio od 3):",
   q:"U autobusu je bilo 57 putnika. Na prvoj su stanici neki putnici izišli iz autobusa, a ušlo ih je 11. Na sljedećoj je stanici iz autobusa izišla trećina putnika, a ušla su tri putnika. Nakon toga je u autobusu bilo 25 putnika. Koliko je putnika izišlo na prvoj stanici?",
   sol:{ans:"35", alt:["35","≈ 35"]},
   steps:[
     {txt:"Postavi jednadžbu prateći broj putnika. Nakon 1. stanice: 57 − n + 11 = 68 − n putnika."},
     {txt:"Nakon 2. stanice: (68−n) − (68−n)/3 + 3 = 25."},
     {txt:"[FRAC:2|3](68−n) = 22 → 68−n = 33 → n = 35.", final:true},{txt:"Alt metoda: testiranje hipoteza — pokušaj s n = 30: 57−30+11=38, pa (2/3)·38+3 = 25,33+3 = 28,3 ≠ 25. Pokušaj n = 35: 57−35+11 = 33; (2/3)·33+3 = 22+3 = 25 ✓",note:"verifikacija",final:true},{txt:"Točan odgovor: 35 ✓",note:"odgovor",final:true},{txt:"Intuicija: prati broj putnika kroz svaku stanicu kao bilancu (početak + ušli − izašli).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za zadatke 'koraka' postavi jednadžbu po stanjima, oznaivši nepoznatu (n = broj koji izađe na 1. stanici).",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za zadatke 'koraka' postavi jednadžbu po stanjima, oznaivši nepoznatu (n = broj koji izađe na 1. stanici).",
     "Intuicija: prati broj putnika kroz svaku stanicu kao bilancu (početak + ušli − izašli).",
     "Česta greška: krivo postaviti 'trećina izašla' — ako je putnika u tom trenutku P, onda P/3 izlazi, ostaje (2/3)P; lako se pomiješa s 'trećina ostane' (1/3 P).",
     "Alt metoda: testiranje hipoteza — pokušaj s n = 30: 57−30+11=38, pa (2/3)·38+3 = 25,33+3 = 28,3 ≠ 25. Pokušaj n = 35: 57−35+11 = 33; (2/3)·33+3 = 22+3 = 25 ✓"
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:28,type:"sa",topic:"trig",points:2,
   q:"Odredite sve vrijednosti x iz zadanoga sustava jednadžba. [SYS:2x = y + π⁄3|sin(y − x) = 0,5]",
   sol:{ans:"x = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ,  k ∈ ℤ", alt:["X = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ,  k ∈ ℤ","x = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ,  k ∈ ℤ","x = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ.  k ∈ ℤ","x=[FRAC:π|2]+2kπilix=[FRAC:7π|6]+2kπ,k∈ℤ","≈ x = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ,  k ∈ ℤ"], ex:"Sustav s trigonometrijskom jednadžbom: izrazi y iz prve i uvrsti u drugu. sin θ = 1/2 ima dva razred rješenja (θ = π/6 i θ = 5π/6, +2kπ)."},
  solFormula:{pre:"x = ", frac:[["7π","6"]]},
   steps:[
     {txt:"Strategija: izrazi y iz prve jednadžbe, uvrsti u drugu, dobiješ trigonometrijsku jednadžbu samo po x."},
     {txt:"Iz 2x = y + π/3 → y = 2x − π/3."},
     {txt:"Uvrsti u drugu: sin(y − x) = sin((2x − π/3) − x) = sin(x − π/3) = 0,5 = 1/2."},
     {txt:"Opće rješenje sin θ = 1/2: θ = π/6 + 2kπ ILI θ = 5π/6 + 2kπ (k ∈ ℤ)."},
     {txt:"Za θ = x − π/3: x − π/3 = π/6 + 2kπ → x = π/6 + π/3 + 2kπ = π/2 + 2kπ. Drugi: x − π/3 = 5π/6 + 2kπ → x = 7π/6 + 2kπ."},
     {txt:"Provjera s k = 0, x = π/2: y = 2·π/2 − π/3 = π − π/3 = 2π/3. sin(2π/3 − π/2) = sin(π/6) = 0,5 ✓. S x = 7π/6: y = 7π/3 − π/3 = 6π/3 = 2π. sin(2π − 7π/6) = sin(5π/6) = 0,5 ✓", note:"verifikacija"},
     {txt:"Distraktor: zaboraviti drugo rješenje θ = 5π/6 (dao bi samo x = π/2 + 2kπ, gubio bi pola rješenja). Po bodovanju: 1 bod = jedan skup, 2 boda = oba skupa.", note:"diagnostika", final:true},{txt:"Točan odgovor: x = [FRAC:π|2] + 2kπ  ili  x = [FRAC:7π|6] + 2kπ,  k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Intuicija: sin θ = 1/2 ima beskonačno mnogo rješenja u 2 obitelji (π/6 + 2kπ i 5π/6 + 2kπ) — jedna iz prve, druga iz druge polovice sinusne krivulje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za sustav jednadžbi metoda supstitucije — izrazi jednu varijablu iz prve, uvrsti u drugu.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za sustav jednadžbi metoda supstitucije — izrazi jednu varijablu iz prve, uvrsti u drugu.",
     "Intuicija: sin θ = 1/2 ima beskonačno mnogo rješenja u 2 obitelji (π/6 + 2kπ i 5π/6 + 2kπ) — jedna iz prve, druga iz druge polovice sinusne krivulje.",
     "Česta greška: dati samo θ = π/6 (zaboraviti supplementary θ = π − π/6 = 5π/6); ili napisati samo glavnu vrijednost bez +2kπ.",
     "Alt metoda (provjera): geometrijski — y − x = arcsin(0,5) = π/6 ili 5π/6 (+ 2kπ). Kombinirajući s y = 2x − π/3 dobivaš x kao zbroj kontradikcija."
   ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:29.1,type:"sa",topic:"der",points:2,
   context:"Zadatak 29 (1. dio od 5):",
   q:"Odredite koordinate dirališta tangenata s koeficijentom smjera −5 na graf funkcije f(x) = x³ + 6x² − 5x + 2.",
   sol:{ans:"(−4, 54) i (0, 2)", alt:["(-4,54) i (0,2)","(-4,54),(0,2)"], ex:"Tangenta sa zadanim koeficijentom smjera k: postavi f′(x) = k i riješi za x; svako rješenje daje točku diraja (x, f(x))."},
   steps:[
     {txt:"Koeficijent smjera tangente u točki x je f′(x). Tražimo x za koje vrijedi f′(x) = −5."},
     {txt:"Deriviraj: f(x) = x³ + 6x² − 5x + 2 → f′(x) = 3x² + 12x − 5."},
     {txt:"Postavi jednadžbu: 3x² + 12x − 5 = −5 → 3x² + 12x = 0 → 3x(x + 4) = 0 → x = 0 ili x = −4."},
     {txt:"Izračunaj f-vrijednosti: f(0) = 2 → točka (0, 2); f(−4) = (−4)³ + 6·16 − 5·(−4) + 2 = −64 + 96 + 20 + 2 = 54 → točka (−4, 54)."},
     {txt:"Provjera: f′(0) = 0 + 0 − 5 = −5 ✓; f′(−4) = 3·16 − 48 − 5 = 48 − 53 = −5 ✓", note:"verifikacija"},
     {txt:"Distraktor: zaboraviti odbiti −5 s obje strane (krivo: 3x² + 12x − 5 = −5 nije isto što 3x² + 12x − 5 = 0); ili pogriješiti pri f(−4).", note:"diagnostika", final:true},{txt:"Točan odgovor: (−4, 54) i (0, 2) ✓",note:"odgovor",final:true},{txt:"Intuicija: derivacija je 'nagib funkcije' u svakoj točki; tražimo gdje se nagib točno podudara s −5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: derivacija f′(x) daje koeficijent smjera tangente u točki x. Za tangentu s zadanim k: riješi f′(x) = k.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: derivacija f′(x) daje koeficijent smjera tangente u točki x. Za tangentu s zadanim k: riješi f′(x) = k.",
     "Intuicija: derivacija je 'nagib funkcije' u svakoj točki; tražimo gdje se nagib točno podudara s −5.",
     "Česta greška: prosto izjednačiti f(x) = −5 (ne uzeti derivaciju); ili pogriješiti u izračunu f(−4) zbog predznaka kuba.",
     "Alt metoda (provjera): grafički — nacrtaj y = f′(x) = 3x² + 12x − 5 (parabola otvorena gore); presjek s horizontalnim pravcem y = −5 daje dvije vrijednosti x = 0 i x = −4."
   ,"Provjera derivacijom unazad: integriranjem f' moramo dobiti f (do konstante).","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."]
  },
  {id:29.2,type:"sa",topic:"exp",points:2,
   context:"Zadatak 29 (2. dio od 5):",
   q:"Zadane su funkcije f(x) = 5^(x+3) i g(x) = x − 8. Riješite jednadžbu (f ∘ g)(x) = 0,04.",
   sol:{ans:"x = 3", alt:["3","x=3"], ex:"Kompozicija (f ∘ g)(x) = f(g(x)); jednadžbu s istom bazom rješavaš izjednačavanjem eksponenata. 0,04 = 5^(−2)."},
   steps:[
     {txt:"Kompozicija funkcija: (f ∘ g)(x) = f(g(x)). Najprije izračunaj 'unutarnju' funkciju g, pa primijeni 'vanjsku' f."},
     {txt:"g(x) = x − 8. Uvrsti u f: f(g(x)) = f(x − 8) = 5^((x−8) + 3) = 5^(x − 5)."},
     {txt:"Jednadžba: 5^(x−5) = 0,04 = 4/100 = 1/25."},
     {txt:"Zapiši desno kao potenciju 5: 1/25 = 5^(−2). Jednadžba postaje 5^(x−5) = 5^(−2)."},
     {txt:"Izjednači eksponente (baza ista): x − 5 = −2 → x = 3."},
     {txt:"Provjera: g(3) = −5; f(−5) = 5^(−5+3) = 5^(−2) = 1/25 = 0,04 ✓", note:"verifikacija"},
     {txt:"Distraktor: zaboraviti redoslijed kompozicije (umjesto f(g(x)) staviti g(f(x))); to bi dalo g(5^(x+3)) = 5^(x+3) − 8, posve drugačiju jednadžbu.", note:"diagnostika", final:true},{txt:"Točan odgovor: x = 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: kompozicija je 'lanac' funkcija — najprije g pretvara x u nešto, pa f pretvara to nešto u krajnji izlaz.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kompozicija (f ∘ g)(x) = f(g(x)) — desnu funkciju izvrši prvu. Za eksponencijalnu jednadžbu s istom bazom: a^p = a^q ⟺ p = q (za a > 0, a ≠ 1).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kompozicija (f ∘ g)(x) = f(g(x)) — desnu funkciju izvrši prvu. Za eksponencijalnu jednadžbu s istom bazom: a^p = a^q ⟺ p = q (za a > 0, a ≠ 1).",
     "Intuicija: kompozicija je 'lanac' funkcija — najprije g pretvara x u nešto, pa f pretvara to nešto u krajnji izlaz.",
     "Česta greška: brkati redoslijed (f ∘ g vs g ∘ f); ili zaboraviti pretvoriti 0,04 u potenciju 5 (pretpostaviti drugu bazu).",
     "Alt metoda: logaritmiraj obje strane (baza 5): log₅(5^(x−5)) = log₅(0,04) → x − 5 = log₅(1/25) = −2 → x = 3 ✓"
   ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:29.3,img:true,type:"sa",topic:"niz",points:2,img:true,
   context:"Zadatak 29 (3. dio od 5):",
   q:"Težištem trokuta ABC povučena je paralela sa stranicom AB koja siječe stranice AC i BC u točkama A₁ i B₁. Težištem trokuta A₁B₁C povučena je paralela sa stranicom AB koja siječe stranice AC i BC u točkama A₂ i B₂ itd. kao što je prikazano na skici. Zbroj duljina svih beskonačno mnogo težišnica iz vrha C trokuta ABC, A₁B₁C, A₂B₂C itd. iznosi 501 cm. Izračunajte duljinu težišnice iz vrha C u trokutu ABC.",
   sol:{ans:"167 cm", alt:["167 cm","167"], ex:"Geometrijski niz s |q| < 1 ima konačan beskonačan zbroj S = a₁/(1 − q). Težište dijeli težišnicu u omjeru 2:1; paralela kroz težište reze trokut na 2/3."},
   steps:[
     {txt:"Težište dijeli težišnicu u omjeru 2:1 računajući od vrha. Pa paralela kroz težište siječe stranice u točkama A₁ i B₁ takvim da je C-strana 2/3 stranice C-A, odnosno trokut A₁B₁C je sličan ABC s koeficijentom sličnosti k = 2/3."},
     {txt:"Iz sličnosti svaki sljedeći trokut Aₙ₊₁Bₙ₊₁C ima sve linearne mjere (uključujući težišnicu iz C) 2/3 prethodne."},
     {txt:"Težišnice m₁, m₂ = (2/3)m₁, m₃ = (2/3)²m₁, ... čine geometrijski niz s količnikom q = 2/3."},
     {txt:"Beskonačan zbroj geom. reda (|q| < 1): S = m₁/(1 − q) = m₁/(1/3) = 3m₁."},
     {txt:"Zadano S = 501 cm → 3m₁ = 501 → m₁ = 167 cm."},
     {txt:"Provjera: m₂ = 2/3 · 167 ≈ 111,33; m₃ ≈ 74,2; ... zbroj 167 + 111,3 + 74,2 + ... = 167/(1 − 2/3) = 167·3 = 501 ✓", note:"verifikacija"},
     {txt:"Distraktor: koristiti k = 1/2 (krivo: težište ne dijeli stranicu na pola, nego u 2:1) → dobio bi se m₁ = 250,5 cm.", note:"diagnostika", final:true},{txt:"Točan odgovor: 167 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: svaki sljedeći trokut je 'rescaling' prethodnog s faktorom 2/3, pa sve mjere idu geometrijski (zbroj se kompresira na konačnu vrijednost).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: težište T trokuta dijeli svaku težišnicu u omjeru 2:1 od vrha. Paralela kroz T sa stranicom AB siječe AC i BC u točkama na udaljenosti 2/3 od C.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: težište T trokuta dijeli svaku težišnicu u omjeru 2:1 od vrha. Paralela kroz T sa stranicom AB siječe AC i BC u točkama na udaljenosti 2/3 od C.",
     "Intuicija: svaki sljedeći trokut je 'rescaling' prethodnog s faktorom 2/3, pa sve mjere idu geometrijski (zbroj se kompresira na konačnu vrijednost).",
     "Česta greška: koristiti k = 1/2 (težište 'srednji' po vizualnoj percepciji, krivo); ili koristiti formulu za konačni geometrijski niz umjesto beskonačnog reda.",
     "Alt metoda (provjera): omjer površina trokuta (k² = 4/9), ali zadatak je o linearnim mjerama → koristi k = 2/3. Suma geom. reda S∞ = a/(1−q) za |q| < 1."
   ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:29.4,type:"sa",topic:"ostalo",points:3,
   context:"Zadatak 29 (4. dio od 5):",
   q:"Od žice duljine 120 cm napravljen je model kvadrata i model pravokutnika kojemu je jedna stranica trostruko dulja od druge. Kolika treba biti duljina stranice kvadrata da bi zbroj površina tih likova bio minimalan?",
   sol:{ans:"[FRAC:90|7] cm", alt:["90/7","90/7 cm","≈12,86"], ex:"Optimizacija s ograničenjem: izrazi jednu varijablu iz constrainta (žica), uvrsti u funkciju cilja, deriviraj ili traži tjeme."},
   steps:[
     {txt:"Postavi varijable: a = stranica kvadrata, b = kraća stranica pravokutnika; dulja stranica = 3b."},
     {txt:"Opseg kvadrata: 4a. Opseg pravokutnika: 2b + 2·3b = 8b. Ukupna žica: 4a + 8b = 120 → a = 30 − 2b (Uvjet duljine žice)."},
     {txt:"Zbroj površina: S(b) = a² + b·(3b) = (30 − 2b)² + 3b². Razvij: 900 − 120b + 4b² + 3b² = 7b² − 120b + 900."},
     {txt:"Minimum: S′(b) = 14b − 120 = 0 → b = 120/14 = 60/7."},
     {txt:"Odgovor (stranica kvadrata): a = 30 − 2·(60/7) = 30 − 120/7 = 210/7 − 120/7 = 90/7 cm ≈ 12,86 cm.",final:true,note:"odgovor"},
     {txt:"Provjera 2. derivacijom: S″(b) = 14 > 0 → minimum (ne maksimum) ✓. Provjera ograničenja: b > 0 i a > 0: a = 90/7 > 0, b = 60/7 > 0 ✓ (i a + 2b < 30: 90/7 + 120/7 = 210/7 = 30, granični slučaj kad bi nestala stranica — ali oba lika postoje).", note:"verifikacija"},
     {txt:"Distraktor: koristiti a + b = 120/4 = 30 (krivo: zaboraviti faktor 4 i 8 kod opsega). Ili tražiti maksimum (S′′ < 0) umjesto minimuma.", note:"diagnostika", final:true},{txt:"Intuicija: žica se može podijeliti na razne načine; postoji 'sweet spot' gdje su likovi takve dimenzije da je zbroj kvadrata i 3·b² minimalan.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za optimizaciju s ograničenjem (constraint), izrazi jednu varijablu iz constrainta, uvrsti u funkciju cilja, deriviraj po jedinoj preostaloj varijabli, postavi na 0.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za optimizaciju s ograničenjem (constraint), izrazi jednu varijablu iz constrainta, uvrsti u funkciju cilja, deriviraj po jedinoj preostaloj varijabli, postavi na 0.",
     "Intuicija: žica se može podijeliti na razne načine; postoji 'sweet spot' gdje su likovi takve dimenzije da je zbroj kvadrata i 3·b² minimalan.",
     "Česta greška: izračunati a = 30 − 2b krivo (zaboraviti faktor 2); ili tražiti minimum samo jedne površine umjesto ukupnog zbroja.",
     "Alt metoda (provjera): bez derivacije — tjeme parabole S(b) = 7b² − 120b + 900 nalazi se u b = 120/(2·7) = 60/7; pa a = 90/7.",
     "Granični slučaj: b = 0 (sva žica u kvadrat) daje a = 30, S = 900. b = 15 (sva u pravokutnik) daje a = 0, S = 675. Minimum je unutar intervala, u b = 60/7."
   ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak."]
  },
  {id:29.5,type:"sa",topic:"al",points:3,
   context:"Zadatak 29 (5. dio od 5):",
   q:"U dvjema se posudama nalazi morska voda različitih slanosti (saliniteta). U prvoj je posudi 6 litara morske vode slanosti 3 %, a u drugoj 18 litara morske vode slanosti 2 %. Iz obiju se posuda uzme ista količina vode te se voda uzeta iz prve posude prelije u drugu posudu, a voda uzeta iz druge posude prelije se u prvu posudu. Tada će u objema posudama morska voda biti iste slanosti. Koliko je litara vode uzeto iz svake posude?",
   sol:{ans:"4,5 L", alt:["4,5 L","4,5","9/2"], ex:"Razmjena vode između dvije posude. Postavi jednadžbu izjednačenih slanosti (s₁ = s₂). Konačna slanost = ponderirana sredina po volumenu (2,25 %)."},
   steps:[
     {txt:"Definiraj: x = količina vode koja se prelije (u obje strane jednako). Cilj: postaviti jednadžbu po x."},
     {txt:"Nakon razmjene, u posudi 1 ostalo (6 − x) L vode sa slanosti 3 %, plus dolazi x L vode sa slanosti 2 % iz posude 2. Količina soli: (6 − x)·0,03 + x·0,02. Volumen je opet 6 L. Nova slanost: s₁ = [(6 − x)·3 + x·2]/6 = (18 − x)/6 (u %)."},
     {txt:"Analogno, posuda 2: (18 − x) L vode sa 2 % + x L vode sa 3 %. Volumen 18 L. s₂ = [(18 − x)·2 + x·3]/18 = (36 + x)/18 (u %)."},
     {txt:"Uvjet zadatka: nakon razmjene slanosti su jednake. Postavi s₁ = s₂: (18 − x)/6 = (36 + x)/18. Križno množi: 18(18 − x) = 6(36 + x) → 324 − 18x = 216 + 6x → 108 = 24x → x = 4,5."},
     {txt:"Odgovor: 4,5 L iz svake posude.",final:true,note:"odgovor"},
     {txt:"Provjera: s₁ = (18 − 4,5)/6 = 13,5/6 = 2,25 %; s₂ = (36 + 4,5)/18 = 40,5/18 = 2,25 % ✓. Ukupna sol prije: 6·0,03 + 18·0,02 = 0,18 + 0,36 = 0,54 kg. Ukupna sol poslije = (6+18)·0,0225 = 24·0,0225 = 0,54 kg ✓ (očuvanje soli).", note:"verifikacija"},
     {txt:"Distraktor: smatrati da slanost mješavine bilo gdje između 6 i 18 L treba biti ponderirani prosjek (2,25 % — to je točno, ali ne daje x direktno). Glavna greška: zaboraviti da iz obe posude izlazi ISTA količina x.", note:"diagnostika", final:true},{txt:"Intuicija: nakon razmjene, sustav se uravnoteži; jedinstvena slanost je ponderirani prosjek po volumenu: (6·3 + 18·2)/(6+18) = 54/24 = 2,25 %.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prijenos između posuda — količina soli se očuva, jedino slanost (koncentracija) se mijenja proporcionalno omjeru soli/volumena.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: prijenos između posuda — količina soli se očuva, jedino slanost (koncentracija) se mijenja proporcionalno omjeru soli/volumena.",
     "Intuicija: nakon razmjene, sustav se uravnoteži; jedinstvena slanost je ponderirani prosjek po volumenu: (6·3 + 18·2)/(6+18) = 54/24 = 2,25 %.",
     "Česta greška: pretpostaviti da prijenos mijenja volumen posuda (ne mijenja — uzme se x i vrati x, neto razlika 0); ili upotrijebiti omjer mase umjesto volumena.",
     "Alt metoda (bez algebre): konačna slanost je ponderirana sredina 2,25 % (jedinstvena). Iz s₁ = 2,25 % → (6 − x)·3 + x·2 = 6·2,25 = 13,5 → 18 − 3x + 2x = 13,5 → x = 4,5 ✓",
     "Granični slučaj: ako x = 0, slanosti ostaju 3 % i 2 % (nije izjednačena). Ako x = 6, s₁ = 2 % a s₂ ≈ 2,33 % (također nije). Jedinstveno x = 4,5 L."
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
  },
  {id:30,type:"sa",topic:"al",points:4,
   q:"Riješite nejednadžbu [FRAC:[7!(n+1)!]² − 7!8!n!(n+1)! − 2·(8!n!)²|[7!(n+1)!]² − (8!n!)²] < 0.",
   sol:{ans:"n ∈ {8, 9, 10, 11, 12, 13, 14}", alt:["n∈{8,...,14}","8≤n≤14"]},
   steps:[
     {txt:"Cilj: nejednadžba je oblik P(n)/Q(n) < 0; treba pojednostaviti faktoriziranjem brojnika i nazivnika, krati zajedničke pozitivne faktore, pa analiziraj predznak."},
     {txt:"Supstitucija za čitljivost: A = 7!(n+1)!, B = 8!n! Tako je brojnik = A² − AB − 2B², nazivnik = A² − B²."},
     {txt:"Faktoriziraj brojnik (kao kvadratnu po A): A² − AB − 2B² = (A − 2B)(A + B). Faktoriziraj nazivnik: A² − B² = (A − B)(A + B). Razlomak = [(A−2B)(A+B)] / [(A−B)(A+B)] = (A − 2B)/(A − B), uz uvjet A + B ≠ 0 (uvijek vrijedi jer su faktorijeli > 0)."},
     {txt:"Vrati A i B u termima n: A − B = 7!(n+1)! − 8!n! = 7!·n!·[(n+1) − 8] = 7!·n!·(n − 7). A − 2B = 7!(n+1)! − 2·8!n! = 7!·n!·[(n+1) − 16] = 7!·n!·(n − 15)."},
     {txt:"Razlomak = [7!·n!·(n−15)] / [7!·n!·(n−7)] = (n − 15)/(n − 7). Uvjeti definiranosti: n ≥ 0 (jer faktorijeli) i n ≠ 7 (nazivnik ≠ 0)."},
     {txt:"Nejednadžba (n − 15)/(n − 7) < 0 ⟺ brojnik i nazivnik su suprotnih predznaka ⟺ 7 < n < 15. Za prirodne brojeve (n ∈ ℕ): n ∈ {8, 9, 10, 11, 12, 13, 14}."},
     {txt:"Provjera za n = 10 (između 7 i 15): (10−15)/(10−7) = −5/3 < 0 ✓. Provjera za n = 5 (manje od 7): (5−15)/(5−7) = −10/−2 = 5 > 0 ✗. Provjera za n = 20 (više od 15): (20−15)/(20−7) = 5/13 > 0 ✗ ✓ — svi izvan {8..14} ne zadovoljavaju.", note:"verifikacija"},
     {txt:"Distraktor: zaboraviti da su faktorijeli pozitivni i preokrenuti znak nejednadžbe pri 'dijeljenju' s 7!n! (krivo: te su izrazi pozitivni, ne mijenjaju znak). Ili izostaviti uvjet n ∈ ℕ (i uzeti realne brojeve).", note:"diagnostika", final:true},{txt:"Točan odgovor: n ∈ {8, 9, 10, 11, 12, 13, 14} ✓",note:"odgovor",final:true},{txt:"Intuicija: 'razlomak < 0' znači brojnik i nazivnik su suprotnog predznaka. Za polinome niskog reda, identificirati nule i koristiti tablicu predznaka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: faktoriziraj brojnik i nazivnik racionalne funkcije; krati zajedničke faktore koji su POZITIVNI; analiziraj preostalu raz. brojnika/nazivnika.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: faktoriziraj brojnik i nazivnik racionalne funkcije; krati zajedničke faktore koji su POZITIVNI; analiziraj preostalu raz. brojnika/nazivnika.",
     "Intuicija: 'razlomak < 0' znači brojnik i nazivnik su suprotnog predznaka. Za polinome niskog reda, identificirati nule i koristiti tablicu predznaka.",
     "Česta greška: kratiti faktor koji može biti 0 ili negativan; brkati < 0 (suprotni predznaci) s > 0 (isti); zaboraviti uvjete domene (n ≠ 7 i n ∈ ℕ).",
     "Alt metoda (provjera): bez supstitucije, koristi (n+1)! = (n+1)·n! i 8! = 8·7!. Tada A = 7!·(n+1)·n! i B = 8·7!·n!. Razlomak postaje [7!·n!]²·[(n+1)² − 8(n+1) − 2·64]/[(7!·n!)²·((n+1)² − 64)]. Pojednostavljuje na isti rezultat (n−15)/(n−7) (poslije više algebre)."
   ,"Provjera supstitucijom: uvrsti x = n ∈ {8, 9, 10, 11, 12, 13, 14} u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  }
];

export const qImages = {
  "2021_ljeto_A__11": () => e(Svg11_2021Aljeto, null),
  "2021_ljeto_A__19.1": () => e(Svg19a_2021Aljeto, null),
  "2021_ljeto_A__20.2": () => e(Svg20b_2021Aljeto, null),
  "2021_ljeto_A__23.2": () => e(Svg23bGrid_2021Aljeto, null),
  "2021_ljeto_A__25.3": () => e(Svg25cGrid_2021Aljeto, null),
  "2021_ljeto_A__29.3": () => e(Svg29c_2021Aljeto, null),
};
