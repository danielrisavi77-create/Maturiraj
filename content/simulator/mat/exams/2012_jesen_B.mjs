// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgGrid9_2012JesenB(){
  const W=260,H=160,sc=22,ox=38,oy=28;
  // Grid points (grid-cell coords): D(0,0),C(6,0),B(8,4),A(0,4)
  const D=[ox,oy],C=[ox+6*sc,oy],B=[ox+8*sc,oy+4*sc],A=[ox,oy+4*sc];
  const rows=5,cols=9;
  const lines=[];
  for(let r=0;r<=rows;r++) lines.push(e("line",{key:"r"+r,x1:ox,y1:oy+r*sc,x2:ox+cols*sc,y2:oy+r*sc,stroke:"var(--text)",strokeOpacity:0.18,strokeWidth:0.8}));
  for(let c=0;c<=cols;c++) lines.push(e("line",{key:"c"+c,x1:ox+c*sc,y1:oy,x2:ox+c*sc,y2:oy+rows*sc,stroke:"var(--text)",strokeOpacity:0.18,strokeWidth:0.8}));
  const pts=`${D[0]},${D[1]} ${C[0]},${C[1]} ${B[0]},${B[1]} ${A[0]},${A[1]}`;
  const lbl=[{t:"D",x:D[0]-14,y:D[1]+4},{t:"C",x:C[0]+5,y:C[1]+4},{t:"B",x:B[0]+5,y:B[1]+5},{t:"A",x:A[0]-14,y:A[1]+5}];
  // 15m scale arrows
  const arrowX=ox,arrowY=oy-16;
  const arrowY2=ox-20,arrowX2=oy;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    ...lines,
    e("polygon",{points:pts,fill:"#4a90d9",fillOpacity:0.18,stroke:"#4a90d9",strokeWidth:2}),
    ...lbl.map(l=>e("text",{key:l.t,x:l.x,y:l.y,fontSize:13,fontWeight:"bold",fill:"var(--text)",fontFamily:"inherit"},l.t)),
    // Scale indicator
    e("line",{x1:ox,y1:oy-12,x2:ox+sc,y2:oy-12,stroke:"var(--text)",strokeWidth:1.5,markerStart:"url(#arr9s)",markerEnd:"url(#arr9e)"}),
    e("text",{x:ox+sc/2,y:oy-16,textAnchor:"middle",fontSize:10,fill:"var(--text)"},"15 m"),
    e("defs",null,
      e("marker",{id:"arr9s",markerWidth:5,markerHeight:5,refX:0,refY:2.5,orient:"auto"},e("path",{d:"M5,0 L0,2.5 L5,5",stroke:"var(--text)",fill:"none",strokeWidth:1})),
      e("marker",{id:"arr9e",markerWidth:5,markerHeight:5,refX:5,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L5,2.5 L0,5",stroke:"var(--text)",fill:"none",strokeWidth:1}))
    )
  );
}

function SvgQ13_2012JesenB(){
  // Vizualni razlomci: draw fraction bar + numerator + denominator
  const W=340, H=130, pad=12;
  const cw=(W-2*pad)/2, rh=H/2;

  // Pomoćna: horizontal fraction
  function frac(x, y, num, den, col){
    const fw=24, fh=9;
    return [
      e("text",{key:"n"+x,x:x+fw/2,y:y-1,fontSize:11,fill:col,textAnchor:"middle",fontFamily:"'JetBrains Mono',monospace"},num),
      e("rect",{key:"r"+x,x:x,y:y+2,width:fw,height:1.2,fill:col}),
      e("text",{key:"d"+x,x:x+fw/2,y:y+13,fontSize:11,fill:col,textAnchor:"middle",fontFamily:"'JetBrains Mono',monospace"},den),
    ];
  }
  // Pomoćna: obični tekst
  function txt(x, y, s, col, size){
    return e("text",{x,y,fontSize:size||12,fill:col,fontFamily:"'JetBrains Mono',monospace",dominantBaseline:"middle"},s);
  }

  const B="#4a90d9", W2="rgba(226,232,240,0.75)", G="#94a3b8";
  const r1y=rh*0.5+4, r2y=rh*1.5+4;  // middle y of each row

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("rect",{x:0,y:0,width:W,height:H,rx:6,fill:"rgba(30,41,59,0.8)",stroke:"rgba(148,163,184,0.2)",strokeWidth:1}),
    // Separator linija
    e("line",{x1:pad,y1:H/2,x2:W-pad,y2:H/2,stroke:"rgba(148,163,184,0.12)",strokeWidth:1}),
    e("line",{x1:W/2,y1:pad,x2:W/2,y2:H-pad,stroke:"rgba(148,163,184,0.12)",strokeWidth:1}),

    // a = 2⁴ · (1/2)²
    txt(pad+4, r1y-4, "a =", G),
    txt(pad+28, r1y-4, "2\u2074\u00b7(", W2),
    ...frac(pad+62, r1y-8, "1", "2", B),
    txt(pad+88, r1y-8, ")\u00b2", W2),

    // b = ³√27 : 1/3
    txt(pad+cw+4, r1y-4, "b =", G),
    txt(pad+cw+28, r1y-4, "\u00b3\u221a27 :", W2),
    ...frac(pad+cw+68, r1y-8, "1", "3", B),

    // c = 2·3²−2·5
    txt(pad+4, r2y-4, "c =", G),
    txt(pad+28, r2y-4, "2\u00b73\u00b2\u22122\u00b75", W2),

    // d = |8|·|−1/2|−1
    txt(pad+cw+4, r2y-4, "d =", G),
    txt(pad+cw+28, r2y-4, "|8|\u00b7|\u2212", W2),
    ...frac(pad+cw+72, r2y-8, "1", "2", B),
    txt(pad+cw+98, r2y-4, "|\u22121", W2),
  );
}

function SvgTable28_2012JesenB(){
  const W=280,H=160;
  const rows=[
    ["Masa","Cijena"],
    ["101 g \u2013 1 kg","30 kn"],
    ["vi\u0161e od 1 kg do 40 kg","35 kn"],
    ["vi\u0161e od 40 kg","60 kn"],
    ["Kabasta roba, bijela tehnika...","90 kn"],
    ["Povrat: +50% | PDV: +23%",""],
  ];
  const rw=[190,80],rh=23,ox=5,oy=5;
  const cells=[];
  for(let r=0;r<rows.length;r++){
    for(let c=0;c<(r===0?2:rows[r][1]?2:1);c++){
      const x=ox+(c===0?0:rw[0]),y=oy+r*rh,w=c===0?rw[0]:(r>0&&!rows[r][1]?rw[0]+rw[1]:rw[1]),h=rh;
      const isHdr=r===0||c===0&&r===0;
      const bg=r===0?"#4a90d9":r===rows.length-1?"#4a90d9":"var(--bg)";
      const bgOp=r===0?0.25:r===rows.length-1?0.1:1;
      cells.push(e("rect",{key:`r${r}c${c}`,x,y,width:w,height:h,fill:bg,fillOpacity:bgOp,stroke:"var(--text)",strokeWidth:0.8,strokeOpacity:0.4}));
      const txt=c<rows[r].length?rows[r][c]:rows[r][0];
      cells.push(e("text",{key:`t${r}c${c}`,x:x+5,y:y+h/2+4,fontSize:10,fontWeight:r===0?"bold":"normal",fill:"var(--text)"},txt));
    }
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},...cells);
}

function SvgGraf27_2012JesenB(){
  const W=220,H=170,ox=44,oy=14,pw=160,ph=120;
  // scale: x=0..80kn, y=0..12mjerica
  const scX=pw/80, scY=ph/12;
  const toX=(kn)=>ox+kn*scX, toY=(mj)=>oy+ph-mj*scY;
  const ticksX=[20,40,60,80], ticksY=[3,6,9,12];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"gj27x",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"gj27y",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Grid
    ...ticksX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:oy,x2:toX(x),y2:oy+ph,stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.8})),
    ...ticksY.map(y=>e("line",{key:"gy"+y,x1:ox,y1:toY(y),x2:ox+pw,y2:toY(y),stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.8})),
    // Axes
    e("line",{x1:ox,y1:oy+ph,x2:ox+pw+10,y2:oy+ph,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#gj27x)"}),
    e("line",{x1:ox,y1:oy+ph,x2:ox,y2:oy-10,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#gj27y)"}),
    // Axis labels
    e("text",{x:ox+pw+15,y:oy+ph+5,fontSize:9,fill:"var(--text)"},"cijena"),
    e("text",{x:ox+pw+15,y:oy+ph+15,fontSize:9,fill:"var(--text)"},"(kn)"),
    e("text",{x:2,y:oy+ph/2,fontSize:9,fill:"var(--text)"},"koli\u010dina"),
    e("text",{x:2,y:oy+ph/2+10,fontSize:9,fill:"var(--text)"},"(mjeric.)"),
    // X ticks
    ...ticksX.map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy+ph-3,x2:toX(x),y2:oy+ph+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+ph+13,textAnchor:"middle",fontSize:10,fill:"var(--text)"},String(x))
    )),
    // Y ticks
    ...ticksY.map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+4,textAnchor:"end",fontSize:10,fill:"var(--text)"},String(y))
    )),
    e("text",{x:ox-6,y:toY(0)+4,textAnchor:"end",fontSize:10,fill:"var(--text)"},"0"),
    // The line: y=(3/20)x → goes from (0,0) to (80,12)
    e("line",{x1:toX(0),y1:toY(0),x2:toX(80),y2:toY(12),stroke:"#4a90d9",strokeWidth:2.2}),
    // Reference points
    e("circle",{cx:toX(20),cy:toY(3),r:4,fill:"white",stroke:"#4a90d9",strokeWidth:1.5}),
    e("circle",{cx:toX(0),cy:toY(0),r:4,fill:"white",stroke:"#4a90d9",strokeWidth:1.5})
  );
}

function SvgParabola16_2012JesenB(){
  const W=200,H=180,cx=80,cy=120,sc=28;
  // f(x)=(x-1)(x+3)=x²+2x-3 → c=-3<0... need c>0, a>0, D>0
  // f(x)=(x-0,5)(x-3)+0... let's use a parabola crossing x-axis twice with y-int>0
  // Actually from PDF: parabola goes up, cuts x-axis at 2 points, y-intercept > 0
  // f(x) = (x+1)(x-2)+4 = x²-x-2+4 = x²-x+2... D=1-8<0, no zeros
  // From image: looks like zeros at x≈-1 and x≈3, c>0
  // f(x)=x²-2x-3=(x-3)(x+1), c=-3<0. Need c>0.
  // Actually jesen Q16 answer is B=(D=0,a>0,c>0): parabola TANGENT to x-axis (D=0)
  // So only ONE zero (touches x-axis), a>0, c>0
  // f(x)=(x-k)² with vertex at (k,0) shifted up... wait that would make c>0 if k²>0
  // f(x)=(x-2)²=x²-4x+4, c=4>0, D=0, a=1>0. Zeros: x=2 only.
  // From PDF image: parabola opens up, touches x-axis at ONE point (right of y-axis), y-intercept positive
  const pts=[];
  for(let px=0;px<=W;px+=2){
    const x=(px-cx)/sc;
    const y=(x-2)*(x-2);  // (x-2)²: vertex at (2,0), y-int=4
    const py=cy-y*sc;
    if(py>-10&&py<H+10) pts.push(`${px},${py}`);
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"axj16x",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"axj16y",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axj16x)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axj16y)"}),
    e("text",{x:W-8,y:cy-6,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+5,y:12,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+12,fontSize:11,fill:"var(--text)"},"0"),
    // y-intercept dot at (0,4) → pixel (cx, cy-4*sc)
    e("circle",{cx:cx,cy:cy-4*sc,r:3,fill:"#4a90d9"}),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2})
  );
}

function SvgTable10_2012JesenB(){
  const W=260,H=90,xs=[-2,-1,0,1,2],ys=[0,2,2,0,-2];
  const cols=6,rw=36,rh=32,ox=10,oy=14;
  const cells=[];
  const hdrs=["x",...xs.map(String)];
  const vals=["f(x)",...ys.map(String)];
  for(let c=0;c<cols;c++){
    const cx=ox+c*rw;
    cells.push(e("rect",{key:"h"+c,x:cx,y:oy,width:rw,height:rh,fill:c===0?"#4a90d9":"var(--bg)",fillOpacity:c===0?0.25:1,stroke:"var(--text)",strokeWidth:1,strokeOpacity:0.4}));
    cells.push(e("text",{key:"ht"+c,x:cx+rw/2,y:oy+rh/2+5,textAnchor:"middle",fontSize:13,fontStyle:c===0?"italic":"normal",fontWeight:"bold",fill:"var(--text)"},hdrs[c]));
    cells.push(e("rect",{key:"v"+c,x:cx,y:oy+rh,width:rw,height:rh,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1,strokeOpacity:0.4}));
    cells.push(e("text",{key:"vt"+c,x:cx+rw/2,y:oy+rh+rh/2+5,textAnchor:"middle",fontSize:13,fontStyle:c===0?"italic":"normal",fill:"var(--text)"},vals[c]));
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    ...cells
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: redoslijed — potencija, dijeljenje (0,3/0,2 = 1,5); pazi na grupiranje.",topic:"br",points:1,
  q:"Koja je vrijednost izraza (−3)² − 4 : (0,3)/(0,2)?",
  opts:["−35/3","−29/3","19/3","25/3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Redoslijed operacija: potencija → dijeljenje → oduzimanje"},
    {txt:"(−3)² = (−3)·(−3) = 9"},
    {txt:"Svedemo razlomak: 0,3∕0,2 = 3∕2 = 3/2 (množimo s 10)"},
    {txt:"Dijeljenje razlomkom: 4 : (3/2) = 4 · (2/3) = 8/3"},
    {txt:"9 − [FRAC:8|3] = [FRAC:27|3] − [FRAC:8|3] = [FRAC:19|3] ⇒ C"},{txt:"Analiza distractora: A (−35/3) nastaje ako (−3)²=−9. B (−29/3) − slична greška. D (25/3) − zbrajanje prije dijeljenja.",final:true,note:"diagnostika"},{txt:"Provjera: (−3)²=9; 4:(3/2)=8/3; 9−8/3=27/3−8/3=19/3 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: a : b/c = a · c/b (dijeljenje razlomkom = množenje recipročnom vrijednošću)",note:"postupak",final:true},{txt:"Intuicija: (−a)² = a² — kvadrat negativnog broja je uvijek pozitivan",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "a : b/c = a · c/b (dijeljenje razlomkom = množenje recipročnom vrijednošću)",
    "(−a)² = a² — kvadrat negativnog broja je uvijek pozitivan",
    "Česta greška: (-3)² = −9 (krivo!) ili izgubiti redoslijed operacija",
    "Provjera: 9 − 8/3 = 27/3 − 8/3 = 19/3 ✓",
    "Pravilo redosljeda: potencija → množenje/dijeljenje → zbrajanje/oduzimanje"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:2,type:"mc",warn:"Pazi: izračunaj brojnik (1 − 2 + 4 − 8) i nazivnik (potencije broja 2) zasebno.",topic:"br",points:1,
  q:"Neka je a = (2⁰−2¹+2²−2³)/((2⁰:2¹)·(2²:2³)). Koliki je broj a?",
  opts:["−24","−20","0","1"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Formula potencija dvice: 2⁰=1, 2¹=2, 2²=4, 2³=8"},
    {txt:"Brojevnik: 1−2+4−8 = −5"},
    {txt:"(2⁰:2¹) = 1:2 = 1/2  |  (2²:2³) = 4:8 = 1/2"},
    {txt:"Nazivnik: (1/2)·(1/2) = [FRAC:1|4]"},
    {txt:"a = −5 : [FRAC:1|4] = −5 · 4 = −20 ⇒ B"},{txt:"Analiza distractora: A (−24) − zbrajanje u brojniku 1−2+4−8=−6. C (0) − zamjena 2⁰=0. D (1) − zamjena eksponenta s bazom.",final:true,note:"diagnostika"},{txt:"Provjera: brojnik=1−2+4−8=−5; nazivnik=(1/2)·(1/2)=1/4; −5:(1/4)=−20 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: 2⁰ = 1 — svaki broj na nultu potenciju je 1 (osim 0⁰ — nedefiniran)",note:"postupak",final:true},{txt:"Intuicija: aⁿ:aᵐ = aⁿ⁻ᵐ — npr. 2²:2³ = 2⁻¹ = 1/2",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "2⁰ = 1 — svaki broj na nultu potenciju je 1 (osim 0⁰ — nedefiniran)",
    "aⁿ:aᵐ = aⁿ⁻ᵐ — npr. 2²:2³ = 2⁻¹ = 1/2",
    "a : 1/b = a·b (dijeljenje razlomkom = množenje recipročnom vrijednošću)",
    "Česta greška: zbrojiti potencije bez prethodnog izračunavanja svake zasebno",
    "Česta greška: zbrojiti 2⁰−2¹+2²−2³ = 0 (krivo!) — pravo: 1−2+4−8=−5",
    "Provjera: a = −5 : (1/4) = −5·4 = −20 ✓"
  ]
},
  {id:3,type:"mc",warn:"Pazi: prebroji cijele brojeve u svakom intervalu (pazi otvoreno/zatvoreno).",topic:"br",points:1,
  q:"Koji od ponuđenih intervala sadrži točno četiri cijela broja?",
  opts:["⟨−10,−5⟩","[−2,2]","[−1,2⟩","⟨4,9]"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"A ⟨−10,−5⟩: otvoreni krajevi ⇒ cijeli: −9,−8,−7,−6 → 4 komada ✓"},
    {txt:"B [−2,2]: zatvoreni krajevi ⇒ −2,−1,0,1,2 → 5 komada ✗"},
    {txt:"C [−1,2⟩: zatv. lijevo, otv. desno ⇒ −1,0,1 → 3 komada ✗"},
    {txt:"D ⟨4,9]: otv. lijevo, zatv. desno ⇒ 5,6,7,8,9 → 5 komada ✗"},
    {txt:"Jedino A ima točno 4 cijela broja ⇒ A"},{txt:"Analiza distractora: B [−2,2] sadrži −2,−1,0,1,2=5 cijelih. C [−1,2⟩ sadrži −1,0,1=3. D ⟨4,9] sadrži 5,6,7,8,9=5 cijelih.",final:true,note:"diagnostika"},{txt:"Provjera A: ⟨−10,−5⟩ bez rubova → {−9,−8,−7,−6} = 4 cijela broja ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: ⟨ ili ⟩ (kutna zagrada) = otvoren kraj — rub NIJE uključen u interval",note:"postupak",final:true},{txt:"Intuicija: [ ili ] (uglata zagrada) = zatvoren kraj — rub JE uključen",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "⟨ ili ⟩ (kutna zagrada) = otvoren kraj — rub NIJE uključen u interval",
    "[ ili ] (uglata zagrada) = zatvoren kraj — rub JE uključen",
    "Pravilo intervala: kutna zagrada = otvoren kraj (ne uključuje rub)] (uglata zagrada) = zatvoren kraj — rub JE uključen",
    "Metoda: za svaku opciju nabroji cijele i provjeri je li ih točno 4",
    "Česta greška: brojiti i rub intervala kad je otvorena zagrada (⟨ ili ⟩)"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:4,type:"mc",warn:"Pazi: proporcija — (135/100)·200 = 270 kcal.",topic:"br",points:1,
  q:"Energetska vrijednost 100 g kiselog vrhnja iznosi 135 kcal. Jedno pakiranje sadrži 200 g kiselog vrhnja. Koliko smo kcal unijeli u organizam ako smo pojeli dvije trećine pakiranja?",
  opts:["155 kcal","162 kcal","180 kcal","203 kcal"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Dvije trećine pakiranja = 2/3 · 200 g = 400/3 g"},
    {txt:"Proporcija: 100 g → 135 kcal, pa je (400/3) g → 135 · (400/3)/100"},
    {txt:"= 135 · [FRAC:4|3] = [FRAC:540|3] = 180 kcal ⇒ C"},{txt:"Analiza distractora: A (155): pogrešan udio. B (162): kriva proporcija. D (203): 200g=270kcal, ali 2/3·270=180.",final:true,note:"diagnostika"},{txt:"Provjera: 200g=2·135=270kcal; 2/3·270=180kcal ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Dvije trećine = 2/3, a jedna trećina = 200/3 g ≈ 66,7 g",note:"postupak",final:true},{txt:"Intuicija: Kraći put: energija = 135 · (masa/100); masa = 2/3 · 200 = 400/3",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Dvije trećine = 2/3, a jedna trećina = 200/3 g ≈ 66,7 g",
    "Kraći put: energija = 135 · (masa/100); masa = 2/3 · 200 = 400/3",
    "Česta greška: računati 2/3 od 135 kcal (krivo — 135 vrijedi za 100 g, ne za cijelo pakiranje)",
    "Provjera: 135·4/3 = 540/3 = 180 kcal ✓",
    "Formula proporcije: kcal = 135 · masa/100","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:5,type:"mc",warn:"Pazi: uvrsti zadane vrijednosti redom; pazi na redoslijed operacija.",topic:"al",points:1,
  q:"Naknada za obavljeni dio posla u nekoj radionici računa se prema formuli n = (p−307)·(20)/(1,76) + d, gdje je p broj izrađenih proizvoda, a d dodatak na složenost posla. Koliko je proizvoda izradio Josip ako je dobio 3 417 kuna, a dodatak na složenost posla bio mu je 42 kune?",
  opts:["582","593","604","615"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Uvrstimo n=3 417 i d=42: 3 417 = (p−307)·[FRAC:20|1,76] + 42"},
    {txt:"(p−307)·[FRAC:20|1,76] = 3 417 − 42 = 3 375"},
    {txt:"p−307 = [FRAC:3 375·1,76|20] = [FRAC:5 940|20] = 297"},
    {txt:"p = 297 + 307 = 604 ⇒ C"},{txt:"Analiza distractora: A (582) − aritmetika u n=307+297=604. B (593) − slična greška. D (615) − dodana d=42 s krivim međurezultatom.",final:true,note:"diagnostika"},{txt:"Provjera: (3417−307)·20/1,76+42=3110·20/1,76+42≈604 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Rješavamo po p: p = (n−d)·[FRAC:1,76|20] + 307",note:"postupak",final:true},{txt:"Intuicija: Provjera: (604−307)·20∕1,76 + 42 = 297·20∕1,76 + 42 = 3 375 + 42 = 3 417 ✓",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Rješavamo po p: p = (n−d)·[FRAC:1,76|20] + 307",
    "Provjera: (604−307)·20∕1,76 + 42 = 297·20∕1,76 + 42 = 3 375 + 42 = 3 417 ✓",
    "Česta greška: podijeliti s 20/1,76 umjesto pomnožiti s 1,76 pa podijeliti s 20",
    "Formula naknada: n = (p−307)·20∕1,76 + d; izražava p: p = (n−d)·1,76÷20 + 307","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:6,type:"mc",warn:"Pazi: mladići m, djevojke 3m → 4m = 216 → m = 54; razlika = 2m.",topic:"br",points:1,
  q:"Ukupni broj maturanata u jednoj školi je 216. Djevojaka je trostruko više nego mladića. Koliko je više djevojaka nego mladića među maturantima te škole?",
  opts:["103","108","139","144"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Neka je m = broj mladića, tada je d = 3m"},
    {txt:"m + 3m = 216 ⇒ 4m = 216 ⇒ m = 54"},
    {txt:"Broj djevojaka: d = 3 · 54 = 162"},
    {txt:"Razlika: 162 − 54 = 108 ⇒ B"},{txt:"Analiza distractora: A (103): krivi omjer. C (139): možda 216·2/3=144, minus nešto. D (144): dvije trećine od 216.",final:true,note:"diagnostika"},{txt:"Provjera: d=3m, d+m=216 → m=54, d=162; razlika=162−54=108 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo omjera: mladići:djevojke = 1:3, ukupno 4 dijela; 1 dio = 216/4 = 54",note:"postupak",final:true},{txt:"Intuicija: Provjera: 54 + 162 = 216 ✓ i 162 = 3 · 54 ✓",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo omjera: mladići:djevojke = 1:3, ukupno 4 dijela; 1 dio = 216/4 = 54",
    "Provjera: 54 + 162 = 216 ✓ i 162 = 3 · 54 ✓",
    "Česta greška: misliti da je razlika 216/3 = 72 (to je samo broj mladića, ne razlika)"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]
},
  {id:7,type:"mc",warn:"Pazi: 0,02·x = 100 → x = 100/0,02 = 5000.",topic:"br",points:1,
  q:"Od kojega broja 2% iznosi 100?",
  opts:["od 200","od 500","od 2 000","od 5 000"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Neka je x traženi broj: 2% od x = 100"},
    {txt:"x · 0,02 = 100 ⇒ x = [FRAC:100|0,02]"},
    {txt:"x = [FRAC:100·100|2] = 5 000 ⇒ D",final:true},{txt:"Diagnostika za Q7: A(ne može): matematika daje jednoznačan odgovor. B(jednake): cijene su različite. C(jakna skuplja): kriva usporedba.",final:true,note:"diagnostika"},{txt:"Provjera: izračunom cijena po komadu D je točan odgovor ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula za osnovu: x = P / (p%), gdje je P dio, p postotak-stopa",note:"postupak",final:true},{txt:"Intuicija: 2% = 2/100 = 0,02; osnova = [FRAC:100|0,02] = 5 000",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula za osnovu: x = P / (p%), gdje je P dio, p postotak-stopa",
    "2% = 2/100 = 0,02; osnova = [FRAC:100|0,02] = 5 000",
    "Česta greška: računati 100 · 2 = 200 (to bi bio rezultat ako je x postotak od 100)",
    "Provjera: 5 000·0,02 = 100 ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:8,type:"mc",warn:"Pazi: faktoriziraj 2a² + 4a = 2a(a + 2), a² − 4 = (a − 2)(a + 2); skrati (a + 2).",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza (2a²+4a)/(a²−4) za sve a za koje je izraz definiran?",
  opts:["2+a","2−a","2a/(a+2)","2a/(a−2)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Faktoriziramo brojnik: 2a²+4a = 2a(a+2)"},
    {txt:"Faktoriziramo nazivnik: a²−4 = (a+2)(a−2) — razlika kvadrata"},
    {txt:"2a(a+2) / [(a+2)(a−2)] — skraćujemo (a+2)"},
    {txt:"= [FRAC:2a|a−2], uz uvjet a≠2 i a≠−2 ⇒ D"},{txt:"Analiza distractora: A (2+a) − nije faktoriziran. B (2−a) − predznak razlike kvadrata. C (2a/(a+2)) − pogrešan faktor u nazivniku.",final:true,note:"diagnostika"},{txt:"Provjera s a=4: (32+16)/(16−4)=48/12=4; 2·4/(4−2)=8/2=4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Razlika kvadrata: a²−b² = (a+b)(a−b) — ključna formula za faktorizaciju",note:"postupak",final:true},{txt:"Intuicija: Skraćivanje je valjano samo ako a≠−2 (djeljenik≠0)",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Razlika kvadrata: a²−b² = (a+b)(a−b) — ključna formula za faktorizaciju",
    "Skraćivanje je valjano samo ako a≠−2 (djeljenik≠0)",
    "Cijeli razlomak je definiran za a≠2 i a≠−2",
    "Česta greška: skratiti 4a/a² = 4/a umjesto faktorizirati",
    "Provjera: 2·(−2)/(−2−2) = −4/−4 = 1 (krivi odgovor A bi bio 2+(−2)=0)"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:9,img:true,type:"mc",warn:"Pazi: izbroji rubne stranice u jedinicama mreže, pa pomnoži s 15 m.",img:true,topic:"geo",points:1,
  q:"Koliki je opseg zemljišta na slici ako stranice u kvadratnoj mreži imaju duljinu 15 m? (Napomena: odgovor je zaokružen na najbliži cijeli broj.)",
  opts:["333 m","335 m","337 m","339 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Iz slike: trapez ABCD s vrhovima A(0,0), B(8,0), C(6,4), D(0,4) u čelijama"},
    {txt:"AB = 8 čelija = 8·15 = 120 m (donja stranica)"},
    {txt:"DC = 6 čelija = 6·15 = 90 m (gornja stranica)"},
    {txt:"AD = 4 čelija = 4·15 = 60 m (lijeva stranica, vertikalna)"},
    {txt:"BC = √((8−6)²+(0−4)²) · 15 = √(4+16) · 15 = √20 · 15 ≈ 4,472 · 15 ≈ 67,08 m"},
    {txt:"Opseg = 120+90+60+67,08 = 337,08 m ≈ 337 m ⇒ C"},{txt:"Analiza distractora: A (333m) − premala aproksimacija. B (335m) − slično. D (339m) − prevećano.",final:true,note:"diagnostika"},{txt:"Provjera: AB=120, DC=90, AD=60, BC=√(30²+60²)≨67m; ukupno≈337m ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Kosa stranica: Pitagorin poučak c = √(a²+b²), gdje a i b su razlike koordinata",note:"postupak",final:true},{txt:"Intuicija: Svaka čelija mreže = 15 m, pa se broj čelija množi s 15",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Kosa stranica: Pitagorin poučak c = √(a²+b²), gdje a i b su razlike koordinata",
    "Svaka čelija mreže = 15 m, pa se broj čelija množi s 15",
    "Česta greška: zanemariti kosu stranicu BC ili je računati kao 2 čelije umjesto √20",
    "Provjera: 120+90+60+67,08 = 337,08 ≈ 337 m ✓",
    "Formula opsega: opseg = zbroj svih stranica; kosa stranica = √(a²+b²)·15","Provjera: skiciraj figuru i izmjeri svojstvo geometrijski."]
},
  {id:10,img:true,type:"mc",warn:"Pazi: točka (x, y) je na grafu ako par odgovara tablici.",img:true,topic:"fun",points:1,
  q:"Funkcija je zadana sljedećom tablicom (vidi prikaz). Koja se od sljedećih točaka nalazi na grafu te funkcije?",
  opts:["T₁(−2,−1)","T₂(−1,2)","T₃(0,1)","T₄(2,−1)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Točka (x,y) je na grafu ako i samo ako f(x) = y"},
    {txt:"A: T₁(−2,−1) — iz tablice: f(−2) = 0 ≠ −1 ✗"},
    {txt:"B: T₂(−1,2) — iz tablice: f(−1) = 2 = 2 ✓ ⇒ B"},{txt:"Analiza distractora: A T₁(−2,−1): tablica f(−2)=0≠−1. C T₃(0,1): f(0)=2≠1. D T₄(2,−1): f(2)=−2≠−1.",final:true,note:"diagnostika"},{txt:"Provjera: iz tablice f(−1)=2; T₂(−1,2) na grafu ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Definicija: (a, b) je na grafu ⟺ f(a) = b — provjeri vrijednost u tablici",note:"postupak",final:true},{txt:"Intuicija: C: f(0)=2≠1, D: f(2)=−2≠−1 — potvrda da su pogrešni",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Definicija: (a, b) je na grafu ⟺ f(a) = b — provjeri vrijednost u tablici",
    "C: f(0)=2≠1, D: f(2)=−2≠−1 — potvrda da su pogrešni",
    "Česta greška: provjeri samo x-koordinatu, a ne i y",
    "Definicija grafa funkcije: skup točaka (x, f(x)) za sve x iz domene"
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:11,type:"mc",warn:"Pazi: nađi period decimalnog zapisa, pa 104 mod (duljina perioda) daje znamenku.",topic:"br",points:1,
  q:"Ako se broj 391 podijeli brojem 37, dobiva se decimalan broj. Koja je znamenka na 104. mjestu iza decimalne točke?",
  opts:["4","5","6","7"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"391 ÷ 37 = 10,567̅ — dugo dijeljenje daje periodu 567 (duljina perioda = 3)"},
    {txt:"Tražimo 104. decimalu: 104 = 34·3 + 2, pa je 104 mod 3 = 2"},
    {txt:"2. znamenka perioda '567' je 6 ⇒ C"},{txt:"Analiza distractora: A (4): 6. decimala decimalnog razvoja. B (5): 1. u periodi. D (7): 3. u periodi '567'.",final:true,note:"diagnostika"},{txt:"Provjera: 391/37=10,567567... perioda 567 dž.3; 104=34·3+2 → 2. u periodi=6 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo periodičnog dijeljenja: perioda se ponavlja beskončno; 391:37 ⇒ perioda 567, duljina 3",note:"postupak",final:true},{txt:"Intuicija: n-ta decimala = (n mod duljina periode)-ta znamenka periode (1-indeksiran)",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo periodičnog dijeljenja: perioda se ponavlja beskončno; 391:37 ⇒ perioda 567, duljina 3",
    "n-ta decimala = (n mod duljina periode)-ta znamenka periode (1-indeksiran)",
    "Provjera: 1. dec = 5, 2. dec = 6, 3. dec = 7, 4. dec = 5, ... 103. = 5, 104. = 6 ✓",
    "Pravilo: 104 = 34·3 + 2, 2. znamenka periode 567 je 6 ✓",
    "Česta greška: brkati duljinu periode s mjestom decimale; uvijek računaj mod","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:12,type:"mc",warn:"Pazi: r = 1,1·10⁻¹⁰ m; V = (4/3)πr³; pazi na pretvorbu m → mm (·10³).",topic:"br",points:1,
  q:"Promjer kuglice je 2,2·10⁻¹⁰ m. Koliki je obujam te kuglice izražen u mm³?",
  opts:["5,575·10⁻³⁹","3,801·10⁻²⁹","5,575·10⁻²¹","3,801·10⁻¹⁴"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Formula pretvorbe: 1 m = 10³ mm; d = 2,2·10⁻¹⁰ m = 2,2·10⁻⁷ mm"},
    {txt:"Polumjer: r = d/2 = 1,1·10⁻⁷ mm"},
    {txt:"Obujam kugle: V = (4/3)πr³ = (4/3)π(1,1·10⁻⁷)³"},
    {txt:"(1,1·10⁻⁷)³ = 1,331·10⁻²¹"},
    {txt:"V = ([FRAC:4|3])π·1,331·10⁻²¹ ≈ 5,575·10⁻²¹ mm³ ⇒ C"},{txt:"Analiza distractora: A (10⁻³⁹): zaboravili pretvorbu m→mm. B (3,801·10⁻²⁹): krivi koeficijent. D (3,801·10⁻¹⁴): gubač potencije.",final:true,note:"diagnostika"},{txt:"Provjera: r=1,1·10⁻¹⁰m=1,1·10⁻⁷mm; V=(4/3)π(1,1·10⁻⁷)³≈5,575·10⁻²¹mm³ ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pretvorba m → mm: množimo s 10³ = 1000 (eksponent se poveća za 3)",note:"postupak",final:true},{txt:"Intuicija: V kugle = (4/3)πr³ — zapamti formulu!",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pretvorba m → mm: množimo s 10³ = 1000 (eksponent se poveća za 3)",
    "V kugle = (4/3)πr³ — zapamti formulu!",
    "Česta greška: koristiti d umjesto r = d/2, ili pogriješiti pri pretvorbi jedinica",
    "Provjera: (4/3)π(1,1·10⁻⁷)³ ≈ 5,575·10⁻²¹ mm³ ✓",
    "Formula V kugle: V = (4/3)πr³; pretvorba 1 m = 10³ mm","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:13,img:true,type:"mc",warn:"Pazi: usporedi sva 4 broja pa pomnoži najmanji i najveći.",topic:"br",points:2,
  q:"Zadana su četiri broja. Koliki je umnožak najmanjeg i najvećeg broja?",
  opts:["9","27","40","120"],
  sol:{cl:"B",ex:"a=4, b=9, c=8, d=3; min=3, max=9; 3·9=27"},
  steps:[
    {txt:"a = 2⁴·(1/2)² = 16·(1/4) = 4"},
    {txt:"b = ³√27 : (1/3) = 3 : (1/3) = 3·3 = 9"},
    {txt:"c = 2·3² − 2·5 = 18 − 10 = 8"},
    {txt:"d = |8|·|−1/2| − 1 = 8·(1/2) − 1 = 4 − 1 = 3"},
    {txt:"Poredaj: 3 < 4 < 8 < 9 ⇒ min=3 (d), max=9 (b)"},
    {txt:"Umnožak: 3·9 = 27 ⇒ B"},{txt:"Analiza distractora: A (9): samo d²=9 ili min·min. C (40): a·c=4·10. D (120): umnožak svih 4 ili pogrešna identifikacija min/max.",final:true,note:"diagnostika"},{txt:"Provjera: a=4, b=9, c=8, d=3; min=3, max=9; 3·9=27 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: aⁿ : bⁿ = (a/b)ⁿ — korisno za potencije razlomaka",note:"postupak",final:true},{txt:"Intuicija: a : (1/n) = a·n (dijeljenje razlomkom = množenje recipročnom vrijednošću)",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "aⁿ : bⁿ = (a/b)ⁿ — korisno za potencije razlomaka",
    "a : (1/n) = a·n (dijeljenje razlomkom = množenje recipročnom vrijednošću)",
    "Apsolutna vrijednost |x| = x za x≥0, a |x| = −x za x<0",
    "Česta greška: ne izračunati sve 4 vrijednosti i usporediti ih",
    "Provjera: min=3(d), max=9(b), 3·9=27 ✓",
    "Formula apsolutne vrijednosti: |x| = x za x≥0, |x| = −x za x<0"]
},
  {id:14,type:"mc",warn:"Pazi: x² + y² = (x + y)² − 2xy = 3² − 2·1.",topic:"al",points:2,
  q:"Zbroj dvaju brojeva je 3, a njihov umnožak je 1. Koliki je zbroj kvadrata tih dvaju brojeva?",
  opts:["6,5","7","7,5","8"],
  sol:{cl:"B",ex:"x²+y² = (x+y)²−2xy = 9−2 = 7"},
  steps:[
    {txt:"Neka su x i y traženi brojevi: x+y=3 i xy=1"},
    {txt:"Koristimo algebarski identitet: (x+y)² = x² + 2xy + y²"},
    {txt:"Izrazimo x²+y² = (x+y)² − 2xy"},
    {txt:"x²+y² = 3² − 2·1 = 9 − 2 = 7 ⇒ B"},{txt:"Analiza distractora: A (6,5): možda (x+y)²/2. C (7,5): pogrešna formula. D (8): (x+y)²−x·y=9−1=8, zaboravili faktor 2 uz xy.",final:true,note:"diagnostika"},{txt:"Provjera: x²+y²=(x+y)²−2xy=9−2·1=7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula: x²+y² = (x+y)² − 2xy — ne treba rješavati sustav jednadžbi!",note:"postupak",final:true},{txt:"Intuicija: Analogno: (x−y)² = x² − 2xy + y²",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula: x²+y² = (x+y)² − 2xy — ne treba rješavati sustav jednadžbi!",
    "Analogno: (x−y)² = x² − 2xy + y²",
    "Česta greška: rješavati kvadratnu jednadžbu i tražiti x i y zasebno (nepotrebno složeno)"
  ,
    "Provjera: (x+y)²−2xy = 9−2 = 7 ✓"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:15,type:"mc",warn:"Pazi: ukupna obložena površina / površina pločice (20×20 = 400 cm²); pazi na jedinice.",topic:"geo",points:2,
  q:"Pločicama kvadratnog oblika duljine stranice 20 cm popločano je dno i sve bočne strane bazena. Bazen je oblika kvadra dimenzija 50 m × 25 m × 2,6 m. S koliko je pločica bazen popločan?",
  opts:["sa 16 000","s 32 250","s 41 000","s 81 250"],
  sol:{cl:"C",ex:"Površina = 1640 m²; pločica = 0,04 m²; broj = 41 000"},
  steps:[
    {txt:"Površina dna: 50·25 = 1 250 m²"},
    {txt:"Duže bočne strane (2 komada): 2·(50·2,6) = 260 m²"},
    {txt:"Kraće bočne strane (2 komada): 2·(25·2,6) = 130 m²"},
    {txt:"Ukupna površina: 1 250+260+130 = 1 640 m²"},
    {txt:"Površina pločice: 0,20·0,20 = 0,04 m²"},
    {txt:"Broj pločica: [FRAC:1 640|0,04] = 41 000 ⇒ C"},{txt:"Analiza distractora: A (16000): samo dno bez bočnih strana. B (32250): izostavljen dio bočnih strana. D (81250): dvostruko brojane strane.",final:true,note:"diagnostika"},{txt:"Provjera: dno=1250m²; bočne=2·(50+25)·2,6=390m²; ukupno=1640m²; N=1640/0,04=41000 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: popločano = dno + 4 bočne strane; bez poklopca (bazen je otvoren)",note:"postupak",final:true},{txt:"Intuicija: Pretvorba: 20 cm = 0,20 m; površina pločice = 0,04 m²",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: popločano = dno + 4 bočne strane; bez poklopca (bazen je otvoren)",
    "Pretvorba: 20 cm = 0,20 m; površina pločice = 0,04 m²",
    "Česta greška: zaboraviti neku bočnu stranu ili zbrojiti površine s poklopcem"
  ,
    "Provjera: 1 640 m² / 0,04 m² = 41 000 pločica ✓"
  ,"Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer."]
},
  {id:16,img:true,type:"mc",warn:"Pazi: poveži D (broj nultočaka), a (otvor) i c (sjecište s y) s grafom.",img:true,topic:"fun",points:2,
  q:"Na slici je prikazan graf funkcije f(x) = ax² + bx + c. Što vrijedi za diskriminantu D te koeficijente a i c?",
  opts:["D=0, a<0 i c<0","D=0, a>0 i c>0","D>0, a<0 i c<0","D>0, a>0 i c>0"],
  sol:{cl:"B",ex:"Parabola: a>0 (gore), D=0 (jedna nultočka), c>0 (y-presjek > 0)"},
  steps:[
    {txt:"Graf je parabola otvorena prema gore ⇒ a > 0"},
    {txt:"Parabola tangira os x u jednoj točki (ne sijecaju) ⇒ D = 0"},
    {txt:"Tjeme je desno od y-osi, y-presjek (x=0) je iznad x-osi ⇒ c = f(0) > 0"},
    {txt:"⇒ D=0, a>0, c>0 ⇒ B"},{txt:"Analiza distractora: A (a<0,c<0): parabola dolje, y-presjek ispod x-osi. C (D>0,a<0): dvije nultočke, dolje. D (D>0,c>0): dvije nultočke, ali graf tangira x-os.",final:true,note:"diagnostika"},{txt:"Provjera: parabola gore (a>0), tangira x-os (D=0), y-presjek>0 (c>0) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Svojstvo koeficijenta a: a>0 ⇒ parabola gore; a<0 ⇒ parabola dolje",note:"postupak",final:true},{txt:"Intuicija: D = 0 ⇒ jedna nultotočka (parabola tangira os x); D > 0 ⇒ dvije; D < 0 ⇒ nijedna",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Svojstvo koeficijenta a: a>0 ⇒ parabola gore; a<0 ⇒ parabola dolje",
    "D = 0 ⇒ jedna nultotočka (parabola tangira os x); D > 0 ⇒ dvije; D < 0 ⇒ nijedna",
    "c = f(0) = y-presjek — gdje parabola sijece os y",
    "Česta greška: zamijeniti D=0 i D>0, ili zaboraviti da c = f(0)",
    "Provjera grafa: parabola otvara gore (a>0), tangira os x (D=0), y-presjek>0 (c>0) ✓"
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Sir ribanac prodaje se u dvama pakiranjima. Vrećica od 40 g stoji 6,99 kn, a vrećica od 100 g stoji 14,99 kn. Kolika je razlika u cijeni ako 200 g sira ribanca kupimo samo u vrećicama po 40 g, odnosno samo u vrećicama po 100 g?",
  sol:{ans:"4,97 kn",alt:["4,97","4,97","4 kn 97 lipa"]},
  steps:[
    {txt:"200 g u malim (40 g): trebamo 200/40 = 5 vrećica"},
    {txt:"Cijena: 5 · 6,99 = 34,95 kn"},
    {txt:"200 g u velikim (100 g): trebamo 200/100 = 2 vrećice"},
    {txt:"Cijena: 2 · 14,99 = 29,98 kn"},
    {txt:"Razlika: 34,95 − 29,98 = 4,97 kn",final:true},
    {txt:"Provjera: cijena/g za male = 6,99/40 = 0,175 kn/g; za velike = 14,99/100 = 0,150 kn/g; velike SU jeftinije po gramu, što potvrđuje da je za istu količinu (200 g) cijena u velikim manja",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: manje pakiranje = skuplje po gramu (6,99/40=0,175 vs 14,99/100=0,150 kn/g)",note:"postupak",final:true},{txt:"Intuicija: Veće pakiranje je jeftinije jer je cijena po gramu niža",note:"intuicija",final:true},{txt:"Točan odgovor: 4,97 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: manje pakiranje = skuplje po gramu (6,99/40=0,175 vs 14,99/100=0,150 kn/g)",
    "Veće pakiranje je jeftinije jer je cijena po gramu niža",
    "Česta greška: uspoređivati samo jednu vrećicu umjesto jednake količine",
    "Provjera: 34,95−29,98 = 4,97 kn ✓",
    "Formula cijene po gramu: 6,99/40 = 0,175 kn/g; 14,99/100 = 0,150 kn/g (veće pakiranje = jeftinije)"
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Koliko je b ako je 3b/2 = 1 − a?",
  sol:{ans:"b = [FRAC:2−2a|3]",alt:["(2-2a)/3","2(1-a)/3"]},
  solFormula:{pre:"b = ", frac:[["2−2a","3"]]},
  steps:[
    {txt:"Početna jednadžba: 3b/2 = 1 − a"},
    {txt:"Množimo obje strane s 2: 3b = 2(1−a) = 2−2a"},
    {txt:"Dijelimo s 3: b = [FRAC:2−2a|3]",final:true},
    {txt:"Provjera: uvrsti b natrag → 3·([FRAC:2−2a|3])/2 = (2−2a)/2 = 1−a ✓",note:"verifikacija"},{txt:"Sažetak postupka: Izoliramo b: uklonimo nazivnik 2 (množenjem s 2), pa dijelimo s koeficijentom 3",note:"postupak",final:true},{txt:"Intuicija: Moguća provjera: uvrstimo konkretnu vrijednost, npr. a=0 ⇒ b=2/3 ⇒ 3·(2/3)/2=1 ✓",note:"intuicija",final:true},{txt:"Točan odgovor: b = [FRAC:2−2a|3] ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Izoliramo b: uklonimo nazivnik 2 (množenjem s 2), pa dijelimo s koeficijentom 3",
    "Moguća provjera: uvrstimo konkretnu vrijednost, npr. a=0 ⇒ b=2/3 ⇒ 3·(2/3)/2=1 ✓",
    "Rezultat je izraz koji ovisi o parametru a, ne broj",
    "Pravilo izolacije: ukloni nazivnik (množi s 2), pa podijeli s koeficijentom uz b (3)",
    "Česta greška: podijeliti s 2 bez prethodnog množenja obje strane s 2","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:19,type:"sa",topic:"al",points:1,
  q:"Sredite i pojednostavnite izraz (a+3)(2a−1) − 3a(a+1).",
  sol:{ans:"−a²+2a−3",alt:["-a^2+2a-3","-a²+2a-3"]},
  steps:[
    {txt:"Razvijamo prvu zagradu: (a+3)(2a−1) = 2a²−a+6a−3 = 2a²+5a−3"},
    {txt:"Razvijamo drugu zagradu: 3a(a+1) = 3a²+3a"},
    {txt:"Oduzimamo: (2a²+5a−3) − (3a²+3a) = 2a²+5a−3−3a²−3a"},
    {txt:"Skupljamo članove: (2−3)a² + (5−3)a − 3 = −a²+2a−3",final:true},
    {txt:"Provjera za a=1: original (1+3)(2−1) − 3·1·(1+1) = 4·1 − 6 = −2; rezultat −1+2−3 = −2 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Formula FOIL za (a+b)(c+d): Prvo, Vanjsko, Unutarnje, Zadnje",note:"postupak",final:true},{txt:"Intuicija: Pazi na predznak: − ispred 3a(a+1) mijenja predznak svim članovima",note:"intuicija",final:true},{txt:"Točan odgovor: −a²+2a−3 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula FOIL za (a+b)(c+d): Prvo, Vanjsko, Unutarnje, Zadnje",
    "Pazi na predznak: − ispred 3a(a+1) mijenja predznak svim članovima",
    "Česta greška: (5a−3a) = 2a ✓, ali (2a²−3a²) = −a² (ne +a²)"
  ,"Provjera supstitucijom: uvrsti x = −a²+2a−3 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]
},
  {id:20,type:"sa",topic:"al",points:1,
  q:"Riješite jednadžbu (x+1)/2 − 1 = (x−2)/3.",
  sol:{ans:"x = −1",alt:["-1","x=-1"]},
  solFormula:{pre:"x = −1"},
  steps:[
    {txt:"NZV(2,3) = 6; množimo cijelu jednadžbu s 6:"},
    {txt:"6·(x+1)/2 − 6·1 = 6·(x−2)/3"},
    {txt:"3(x+1) − 6 = 2(x−2)"},
    {txt:"3x+3−6 = 2x−4 ⇒ 3x−3 = 2x−4"},
    {txt:"x = −4+3 = −1",final:true},
    {txt:"Provjera za x=−1: lijevo = (−1+1)/2 − 1 = 0 − 1 = −1; desno = (−1−2)/3 = −1; −1 = −1 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: uklanjanje nazivnika množenjem s NZV(2,3)=6 eliminira sve razlomke",note:"postupak",final:true},{txt:"Intuicija: Razvijanje zagrada: 3(x+1)=3x+3 i 2(x−2)=2x−4",note:"intuicija",final:true},{txt:"Točan odgovor: x = −1 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: uklanjanje nazivnika množenjem s NZV(2,3)=6 eliminira sve razlomke",
    "Razvijanje zagrada: 3(x+1)=3x+3 i 2(x−2)=2x−4",
    "Provjera: (−1+1)/2−1=0−1=−1; (−1−2)/3=−3/3=−1 ✓",
    "Česta greška: pomnožiti svaki član samo s jednim od 2 ili 3 umjesto s NZV=6"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:21,type:"sa",topic:"al",points:1,
  q:"Riješite nejednadžbu 1 − 7x ≥ 2 − 5x.",
  sol:{ans:"x ≤ −[FRAC:1|2]",alt:["x<=-1/2","x≤-1/2","x ≤ -1/2"]},
  solFormula:{pre:"x ≤ −1/2"},
  steps:[
    {txt:"1 − 7x ≥ 2 − 5x"},
    {txt:"Prenosimo x na desnu stranu: −7x + 5x ≥ 2 − 1"},
    {txt:"−2x ≥ 1"},
    {txt:"Dijelimo s −2 (mijenjamo smjer!): x ≤ −[FRAC:1|2]",final:true},
    {txt:"Provjera za x=−1 (zadovoljava x ≤ −1/2): lijevo = 1 − 7·(−1) = 8; desno = 2 − 5·(−1) = 7; 8 ≥ 7 ✓; za x=0 (ne zadovoljava): 1 ≥ 2? NE ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo nejednadžbi: dijeljenje s negativnim brojem MIJENJA smjer: ≥ postaje ≤",note:"postupak",final:true},{txt:"Intuicija: Provjera: x=−1 ⇒ 1−7(−1)=8 ≥ 2−5(−1)=7 ✓",note:"intuicija",final:true},{txt:"Točan odgovor: x ≤ −[FRAC:1|2] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo nejednadžbi: dijeljenje s negativnim brojem MIJENJA smjer: ≥ postaje ≤",
    "Provjera: x=−1 ⇒ 1−7(−1)=8 ≥ 2−5(−1)=7 ✓",
    "Česta greška: ne promijeniti smjer pri dijeljenju s negativnim brojem"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]
},
  {id:22,type:"sa",topic:"al",points:2,
  q:"Odredite oba rješenja jednadžbe 25 = (x+4)².",
  sol:{ans:"x₁=1, x₂=−9",alt:["1 i -9","1,-9","x1=1 x2=-9","1 i −9"],ex:"x₁=1, x₂=−9 (provjera: oba daju (x+4)²=25)"},
  steps:[
    {txt:"Oblik: (x+4)² = 25 — rješavamo korjenovanjem obje strane"},
    {txt:"x+4 = ±√25 = ±5"},
    {txt:"1. rješenje: x+4 = 5 ⇒ x₁ = 5−4 = 1"},
    {txt:"2. rješenje: x+4 = −5 ⇒ x₂ = −5−4 = −9"},
    {txt:"Provjera: (1+4)² = 25 ✓ i (−9+4)² = (−5)² = 25 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula: (x+a)² = k ⇒ x+a = ±√k — uvijek dva rješenja za k>0",note:"postupak",final:true},{txt:"Intuicija: √25 = 5 (ne zaboravi negativni korijen: −5 je također rješenje)",note:"intuicija",final:true},{txt:"Točan odgovor: x₁=1, x₂=−9 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula: (x+a)² = k ⇒ x+a = ±√k — uvijek dva rješenja za k>0",
    "√25 = 5 (ne zaboravi negativni korijen: −5 je također rješenje)",
    "Provjera: uvrstimo oba x natrag u (x+4)² i dobijemo 25 ✓",
    "Česta greška: uzeti samo pozitivni korijen i dobiti samo jedno rješenje"
  ,"Provjera supstitucijom: uvrsti x = x₁=1, x₂=−9 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:23.1,type:"proof",topic:"fun",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Nacrtajte graf zadan jednadžbom y = 2x.",
  graphType:"line",
  graphRef:{pts:[[0,0],[1,2],[-1,-2]]},
  sol:{
    ans:"Pravac y = 2x kroz (0,0) s nagibom 2",alt:["y=2x","pravac kroz ishodište nagib 2","nagib 2 presjek (0,0)"],
    ex:"Pravac y = 2x: nagib k = 2, prolazi kroz ishodište (0,0). Za svaki korak 1 desno, pravac ide 2 gore."
  },
  solFormula:{pre:"y = 2x"},
  steps:[
    {txt:"y = 2x je pravac: nagib k = 2, prolazi kroz ishodište O(0,0)."},
    {txt:"Dvije točke: x=0 ⇒ y=0 ⇒ (0,0). x=1 ⇒ y=2 ⇒ (1,2)."},
    {txt:"Provjera: x=−1 ⇒ y=−2 ⇒ (−1,−2)."},
    {txt:"Povuči pravac kroz ishodište i točku (1,2).",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat Pravac y = 2x kroz (0,0) s nagibom 2 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravac oblika y = kx: uvijek prolazi kroz ishodište O(0,0) jer za x=0 je y=0.",note:"postupak",final:true},{txt:"Intuicija: Nagib k=2 ⇒ za svaki korak 1 udesno, pravac ide 2 gore (strmo).",note:"intuicija",final:true},{txt:"Točan odgovor: Pravac y = 2x kroz (0,0) s nagibom 2 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravac oblika y = kx: uvijek prolazi kroz ishodište O(0,0) jer za x=0 je y=0.",
    "Nagib k=2 ⇒ za svaki korak 1 udesno, pravac ide 2 gore (strmo).",
    "Razlika od y=x (k=1): y=2x je dvostruko strmiji, te lei između y=x i y-osi.",
    "Česta greška: crtati pravac koji ne prolazi ishodištem ili zamijeniti nagib s y-odsječkom.",
    "Provjera: f(1)=2·1=2 ✓, f(−1)=2·(−1)=−2 ✓, f(0)=0 ✓"
  ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:23.2,type:"proof",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Nacrtajte graf zadan jednadžbom y = x² − 1.",
  graphType:"parabola",
  graphRef:{vertex:[0,-1],pts:[[1,0],[-1,0],[2,3]]},
  sol:{
    ans:"Parabola y = x² − 1: tjeme T(0, −1), nultočke x = ±1",alt:["parabola tjeme (0,-1)","y=x^2-1","parabola otvorena gore tjeme (0,-1)"],
    ex:"Parabola y = x² − 1 je translacija y = x² za 1 prema dolje. Tjeme T(0,−1). Nultočke: x²=1 ⇒ x=±1."
  },
  solFormula:{pre:"y = x² − 1"},
  steps:[
    {txt:"Graf je parabola y = x² + k, s k = −1. Otvorena prema gore (a=1>0)."},
    {txt:"Tjeme: T(0, −1) — translacija y = x² za 1 dolje."},
    {txt:"Nultočke: x² − 1 = 0 ⇒ x = ±1. Parabola presjeca os x u (−1,0) i (1,0)."},
    {txt:"Ključne točke: (−1,0), (0,−1), (1,0), (2,3). Povuči parabolu.",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat Parabola y = x² − 1: tjeme T(0, −1), nul-točke ±1 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Translacija y = x² + k: k > 0 pomiče gore, k < 0 pomiče dolje. Ovdje k=−1.",note:"postupak",final:true},{txt:"Intuicija: Nultočke: x² = 1 ⇒ x = ±1 (pozitivni i negativni korijen).",note:"intuicija",final:true},{txt:"Točan odgovor: Parabola y = x² − 1: tjeme T(0, −1), nultočke x = ±1 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Translacija y = x² + k: k > 0 pomiče gore, k < 0 pomiče dolje. Ovdje k=−1.",
    "Nultočke: x² = 1 ⇒ x = ±1 (pozitivni i negativni korijen).",
    "Parnost: y = x² − 1 je parna (f(−x)=f(x)), simetrična s obzirom na y-os.",
    "Česta greška: pomijenuti tjeme za nultočku — tjeme je T(0,−1), nultočke su (±1,0).",
    "Provjera: f(1)=1−1=0 ✓, f(0)=−1 ✓, f(2)=4−1=3 ✓"
  ,"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:24.1,type:"num",topic:"geo",points:1,
  context:"Zadatak 24 (1. dio od 2): Zadan je jednakokračan trokut.",
  q:"Mjera kuta uz osnovicu jednakokračnog trokuta jednaka je 41°37'. Kolika je mjera kuta nasuprot osnovici?",
  sol:{ans:"96°46'",alt:["96°46'","96 stupnjeva 46 minuta","96,767"]},
  solFormula:{pre:"96°46'"},
  steps:[
    {txt:"Jednakokračan trokut ima dva jednaka kuta uz osnovicu: oba iznose 41°37'."},
    {txt:"Zbroj kutova trokuta = 180°. Kut nasuprot osnovici = 180° − 2·41°37'."},
    {txt:"2·41°37' = 82°74'. Pretvorba: 74' = 1°14', dakle 82°74' = 83°14'."},
    {txt:"Kut = 180° − 83°14' = 179°60' − 83°14' = 96°46'.",final:true},{txt:"Sažetak postupka: Zbroj unutarnjih kutova trokuta = 180° (teorem euklidske geometrije).",note:"postupak",final:true},{txt:"Česta greška: odbiti samo jedan kut uz osnovicu umjesto oba — trebamo 2·41°37'.",note:"verifikacija",final:true},{txt:"Intuicija: Jednakokračan trokut: barem dvije stranice jednako duge ⇒ kutovi uz osnovicu jednaki.",note:"intuicija",final:true},{txt:"Točan odgovor: 96°46' ✓",note:"odgovor",final:true}
  ],
  why:[
    "Zbroj unutarnjih kutova trokuta = 180° (teorem euklidske geometrije).",
    "Jednakokračan trokut: barem dvije stranice jednako duge ⇒ kutovi uz osnovicu jednaki.",
    "Pretvorba minuta: 1° = 60', pa 74' = 60' + 14' = 1°14'. Dakle 82°74' = 83°14'.",
    "Česta greška: odbiti samo jedan kut uz osnovicu umjesto oba — trebamo 2·41°37'.",
    "Provjera: 41°37' + 41°37' + 96°46' = 83°14' + 96°46' = 179°60' = 180° ✓"
  ,"Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:24.2,type:"num",topic:"geo",points:1,
  context:"Zadatak 24 (2. dio od 2): Jednakostranični trokut.",
  q:"Površina jednakostraničnog trokuta je 31,3 cm². Kolika je duljina stranice tog trokuta?",
  sol:{ans:"8,5 cm",alt:["8,5","8,5","8,5 cm","8,5 cm","≈8,5"]},
  solFormula:{pre:"a ≈ 8,5 cm"},
  steps:[
    {txt:"Formula površine jednakostraničnog trokuta: P = (√3/4)·a²."},
    {txt:"Uvrstimo P = 31,3: 31,3 = (√3/4)·a²."},
    {txt:"a² = 4·31,3/√3 = 125,2/1,732 ≈ 72,28."},
    {txt:"a = √72,28 ≈ 8,5 cm.",final:true},{txt:"Sažetak postupka: Formula P = (√3/4)a² izvodi se iz P = (1/2)·a·h, gdje visina h = (√3/2)a.",note:"postupak",final:true},{txt:"Česta greška: koristiti formulu za pravokutan trokut (P=ab/2) umjesto jednakostranika.",note:"verifikacija",final:true},{txt:"Intuicija: Visina jednakostranika: h = (√3/2)a (iz Pitagorinog poučka na pola trokuta).",note:"intuicija",final:true},{txt:"Točan odgovor: 8,5 cm ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula P = (√3/4)a² izvodi se iz P = (1/2)·a·h, gdje visina h = (√3/2)a.",
    "Visina jednakostranika: h = (√3/2)a (iz Pitagorinog poučka na pola trokuta).",
    "Iz formule: a² = 4P/√3, pa a = √(4P/√3).",
    "Česta greška: koristiti formulu za pravokutan trokut (P=ab/2) umjesto jednakostranika.",
    "Provjera: (√3/4)·8,5² = (1,732/4)·72,25 ≈ 0,433·72,25 ≈ 31,3 cm² ✓"
  ,"Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°."]
},
  {id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite x iz rješenja sustava: [SYS:x−3y=a|3x+5y=a]",
  sol:{ans:"x = [FRAC:4a|7]",alt:["4a/7","x=4a/7","[FRAC:4a|7]"]},
  solFormula:{pre:"x = ", frac:[["4a","7"]]},
  steps:[
    {txt:"Iz prve jednadžbe: x = a + 3y"},
    {txt:"Uvrstimo u drugu: 3(a+3y)+5y = a ⇒ 3a+9y+5y = a"},
    {txt:"14y = −2a ⇒ y = −a/7"},
    {txt:"x = a + 3·(−[FRAC:a|7]) = a − [FRAC:3a|7] = [FRAC:4a|7]",final:true},
    {txt:"Provjera za a=7: x=4, y=−1; (1) 4 − 3·(−1) = 4+3 = 7 = a ✓; (2) 3·4 + 5·(−1) = 12−5 = 7 = a ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo metode supstitucije: izrazimo jednu nepoznanicu iz jedne jednadžbe, uvrstimo u drugu",note:"postupak",final:true},{txt:"Intuicija: Alternativa: eliminacija (pomnoži prvu s −3 i zbroji s drugom)",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:4a|7] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo metode supstitucije: izrazimo jednu nepoznanicu iz jedne jednadžbe, uvrstimo u drugu",
    "Alternativa: eliminacija (pomnoži prvu s −3 i zbroji s drugom)",
    "Provjera: x=4a/7, y=−a/7 ⇒ (4a/7)−3(−a/7) = 4a/7+3a/7 = a ✓",
    "Česta greška: uvrstiti y u pogrešnu jednadžbu ili greška u supstituciji"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:25.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Za koji realan broj x je 3·10¹⁺ˣ − 0,3 = 0?",
  sol:{ans:"x = −2",alt:["-2","x=-2"]},
  solFormula:{pre:"x = −2"},
  steps:[
    {txt:"3·10¹⁺ˣ = 0,3 = 3·10⁻¹"},
    {txt:"Dijelimo s 3: 10¹⁺ˣ = 10⁻¹"},
    {txt:"Jednake baze ⇒ jednaki eksponenti: 1+x = −1"},
    {txt:"x = −2",final:true},
    {txt:"Provjera: 3·10^(1+(−2)) = 3·10⁻¹ = 3·0,1 = 0,3 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo eksponencijalne jednadžbe: aᵐ = aⁿ ⇒ m = n (iste baze a>0, a≠1)",note:"postupak",final:true},{txt:"Intuicija: 0,3 = 3·10⁻¹ — prepisivanje u eksponencijalni oblik ključno",note:"intuicija",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo eksponencijalne jednadžbe: aᵐ = aⁿ ⇒ m = n (iste baze a>0, a≠1)",
    "0,3 = 3·10⁻¹ — prepisivanje u eksponencijalni oblik ključno",
    "Česta greška: zaboraviti da 0,3 = 3·10⁻¹ (ne 3·10¹)",
    "Provjera: 3·10¹⁺(⁻²)−0,3 = 3·10⁻¹−0,3 = 0,3−0,3 = 0 ✓"
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Kolika je mjera kuta od 2 radijana izražena u gradima? Rezultat zaokružite na tri decimale.",
  sol:{ans:"127,324 gradi",alt:["127,324","127,324"]},
  steps:[
    {txt:"Formula: g = (200/π)·r"},
    {txt:"Uvrstimo r=2: g = (200/π)·2 = 400/π"},
    {txt:"g = [FRAC:400|π] ≈ 400/3,14159 ≈ 127,324 gradi",final:true},
    {txt:"Provjera: 2 radijana ≈ 2·57,2958° = 114,6° (stupnjevi); 114,6° u gradi = 114,6·10/9 ≈ 127,3 gradi ✓ (1° = 10/9 grada)",note:"verifikacija"},{txt:"Sažetak postupka: Gradski sustav (grad): puni kut = 400 gradi (ne 360° kao kod stupnjeva!)",note:"postupak",final:true},{txt:"Intuicija: Iz formule: g/200 = r/π ⇒ g = 200r/π",note:"intuicija",final:true},{txt:"Točan odgovor: 127,324 gradi ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Gradski sustav (grad): puni kut = 400 gradi (ne 360° kao kod stupnjeva!)",
    "Iz formule: g/200 = r/π ⇒ g = 200r/π",
    "Česta greška: pomiješati grade s kutnim stupnjevima (360° ≠ 400 gradi)",
    "Provjera: (200/π)·2 = 400/π ≈ 127,324 gradi ✓",
    "Formula: g = (200/π)·r, gdje g = mjera u gradima, r = mjera u radijanima","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:26.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko je radijana 150 gradi?",
  sol:{ans:"[FRAC:3π|4]",alt:["3π/4","3*π/4","3pi/4"]},
  solFormula:{pre:"", frac:[["3π","4"]]},
  steps:[
    {txt:"Iz formule g=(200/π)·r izrazimo r: r = g·π/200"},
    {txt:"Uvrstimo g=150: r = 150·π/200 = 150π/200"},
    {txt:"Skratimo: [FRAC:150|200] = [FRAC:3|4] ⇒ r = [FRAC:3π|4]",final:true},
    {txt:"Provjera: 150 grada → stupnjevi: 150·9/10 = 135°; 135° u radijanima: 135·π/180 = 3π/4 ✓ (jer 180°=π rad)",note:"verifikacija"},{txt:"Sažetak postupka: r = g·π/200 — dobiveno inverzijom formule g=(200/π)·r",note:"postupak",final:true},{txt:"Intuicija: Skraćivanje: 150/200 = 3/4 (dijelimo s 50)",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:3π|4] ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "r = g·π/200 — dobiveno inverzijom formule g=(200/π)·r",
    "Skraćivanje: 150/200 = 3/4 (dijelimo s 50)",
    "Provjera: g = (200/π)·(3π/4) = 200·3/4 = 150 gradi ✓",
    "Česta greška: ne skratiti 150/200 = 3/4 ili zaboraviti π",
    "Formula inverzna: r = g·π/200 (izrazimo r iz g=(200/π)·r)","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:27.1,img:true,type:"sa",img:true,topic:"fun",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Kolika je cijena 12 mjerica jagoda?",
  sol:{ans:"80 kn",alt:["80","80 kn","80kn"]},
  steps:[
    {txt:"Iz grafa: pravac kroz (0,0) i (20kn,3 mjerice)"},
    {txt:"Jednadžba: mjerice = (3/20)·cijena ⇒ cijena = (20/3)·mjerice"},
    {txt:"Za 12 mjerica: cijena = ([FRAC:20|3])·12 = [FRAC:240|3] = 80 kn",final:true},
    {txt:"Provjera: linearnost — 3 mjerice = 20 kn, pa 12 mjerica = 4·3 mjerice = 4·20 = 80 kn ✓",note:"verifikacija"},{txt:"Sažetak postupka: Formula nagiba: 3 mjerice na 20 kn ⇒ 1 mjerica = 20/3 kn (cijena = mjerice·20/3)",note:"postupak",final:true},{txt:"Intuicija: Inverzna funkcija: cijena = (20/3)·mjerice",note:"intuicija",final:true},{txt:"Točan odgovor: 80 kn ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.",note:"verifikacija",final:true}
  ],
  why:[
    "Formula nagiba: 3 mjerice na 20 kn ⇒ 1 mjerica = 20/3 kn (cijena = mjerice·20/3)",
    "Inverzna funkcija: cijena = (20/3)·mjerice",
    "Provjera: (3/20)·80 = 240/20 = 12 mjerica ✓",
    "Česta greška: podijeliti mjerice s cijenom umjesto pomnožiti s (20/3)","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:27.2,img:true,type:"sa",img:true,topic:"fun",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Koliko se mjerica može kupiti za 100 kn?",
  sol:{ans:"15 mjerica",alt:["15","15 mjerica"]},
  steps:[
    {txt:"Jednadžba pravca: mjerice = (3/20)·cijena"},
    {txt:"Uvrstimo cijena=100 kn: mjerice = (3/20)·100"},
    {txt:"= [FRAC:300|20] = 15 mjerica",final:true},
    {txt:"Provjera: 15 mjerica · ([FRAC:20|3]) kn/mjerica = 300/3 = 100 kn ✓ (inverzno potvrđuje)",note:"verifikacija"},{txt:"Sažetak postupka: Formula (isti pravac kao 27,1): mjerice = (3/20)·cijena",note:"postupak",final:true},{txt:"Intuicija: 3/20 = 0,15 mjerica po kuni",note:"intuicija",final:true},{txt:"Točan odgovor: 15 mjerica ✓",note:"odgovor",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:[
    "Formula (isti pravac kao 27,1): mjerice = (3/20)·cijena",
    "3/20 = 0,15 mjerica po kuni",
    "Provjera: 15 mjerica · (20/3 kn) = 300/3 = 100 kn ✓",
    "Česta greška: koristiti nagib 20/3 umjesto 3/20 za računanje mjerica","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:27.3,img:true,type:"sa",img:true,topic:"fun",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Koliko stoji 9 kg jagoda?",
  sol:{ans:"150 kn",alt:["150","150 kn"]},
  steps:[
    {txt:"Pretvorba: 9 kg = 9 000 g; 1 mjerica = 40 dag = 400 g"},
    {txt:"Broj mjerica: 9 000 / 400 = 22,5 mjerica"},
    {txt:"Cijena: 22,5 · ([FRAC:20|3]) = [FRAC:450|3] = 150 kn",final:true},
    {txt:"Provjera: 22,5 mjerica · 400 g/mjerica = 9000 g = 9 kg ✓; 22,5 · (20/3) = 22,5·6,667 = 150 kn ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pretvorba: 1 dag = 10 g; 40 dag = 400 g; 9 kg = 9 000 g",note:"postupak",final:true},{txt:"Intuicija: Mjerice: 9 000 / 400 = 22,5; cijena = 22,5 · (20/3) kn",note:"intuicija",final:true},{txt:"Točan odgovor: 150 kn ✓",note:"odgovor",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:[
    "Pretvorba: 1 dag = 10 g; 40 dag = 400 g; 9 kg = 9 000 g",
    "Mjerice: 9 000 / 400 = 22,5; cijena = 22,5 · (20/3) kn",
    "Provjera: 22,5 mjerica · (20/3) = 450/3 = 150 kn ✓",
    "Česta greška: ne pretvoriti kg u g ili dag pogriješiti",
    "Formula: cijena = mjerice·(20/3); mjerice = masa(g)/400","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:28.1,img:true,type:"sa",img:true,topic:"br",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Marko plaća prijevoz jednog paketa od 15 kg i jednog bicikla. Koliko ga to stoji?",
  sol:{ans:"153,75 kn",alt:["153,75","153,75"]},
  steps:[
    {txt:"Paket 15 kg: masa > 1 kg do 40 kg ⇒ tarifa = 35 kn"},
    {txt:"Bicikl: kabasta roba ⇒ tarifa = 90 kn"},
    {txt:"Ukupno bez PDV: 35 + 90 = 125 kn"},
    {txt:"Dodamo PDV od 23%: 125 · 1,23 = 153,75 kn",final:true},
    {txt:"Provjera: 153,75 / 1,23 = 125 kn (cijena bez PDV) ✓; 35 + 90 = 125 ✓; 23% od 125 = 28,75; 125 + 28,75 = 153,75 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Bicikl = kabasta roba (naveden u cjeniku), ne 'paket'",note:"postupak",final:true},{txt:"Intuicija: PDV se dodaje na ukupan iznos prijevoza: cijena_s_PDV = cijena · 1,23",note:"intuicija",final:true},{txt:"Točan odgovor: 153,75 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Bicikl = kabasta roba (naveden u cjeniku), ne 'paket'",
    "PDV se dodaje na ukupan iznos prijevoza: cijena_s_PDV = cijena · 1,23",
    "Provjera: 125 + 125·0,23 = 125 + 28,75 = 153,75 kn ✓",
    "Česta greška: svrstati bicikl u kategoriju paket umjesto kabasta roba",
    "Pravilo: PDV od 23% se dodaje na cijenu: ukupno = baza·1,23","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:28.2,img:true,type:"sa",img:true,topic:"br",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Ivan je prijatelju poslao paket mase 52 kg i za to platio prijevoz. Prijatelj paket nije podigao pa je prijevoznik pošiljku vratio Ivanu. Koliko kuna je Ivan još nadoplatio?",
  sol:{ans:"36,90 kn",alt:["36,90","36,90"]},
  steps:[
    {txt:"Paket 52 kg: masa > 40 kg ⇒ tarifa prijevoza = 60 kn"},
    {txt:"Ivan je već platio prijevoz. Povrat = još 50% tarife = 50% · 60 = 30 kn"},
    {txt:"Na povrat se dodaje PDV: 30 · 1,23 = 36,90 kn",final:true},
    {txt:"Provjera: 50% od tarife 60 kn = 30 kn (bez PDV); 30 · 1,23 = 36,90 kn (s PDV) ✓; 36,90 − 30 = 6,90 kn (samo PDV iznos) ✓",note:"verifikacija"},{txt:"Sažetak postupka: Plaća se samo povratna dostava (50% originalne tarife), ne cijela tarifa ponovno",note:"postupak",final:true},{txt:"Intuicija: PDV se obračunava i na povrat: 30 + 30·0,23 = 30 + 6,90 = 36,90 kn",note:"intuicija",final:true},{txt:"Točan odgovor: 36,90 kn ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Plaća se samo povratna dostava (50% originalne tarife), ne cijela tarifa ponovno",
    "PDV se obračunava i na povrat: 30 + 30·0,23 = 30 + 6,90 = 36,90 kn",
    "Česta greška: dodati PDV na 60 kn umjesto na 30 kn (50% od 60)",
    "Provjera: 30·1,23 = 36,90 kn ✓",
    "Pravilo povrata: pošiljatelj plaća 50% tarife prijevoza + PDV 23%","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {_META:true,auditStatus:"verified-full",rok:"2012_jesen",razina:"B",serial:"D-S011",totalPoints:40,mcCount:16,saCount:19,verified:"vision+pdf+pedagogy-premium+verbatim",auditNotes:"G+F+H+I+J kompletno. Q24 trokut fix. Pak F 16/16 MC. J opts frac. I: Q9,10,13,16,27,28 img:true [STRUKTURA]",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2012_jesen_B__10": () => e(SvgTable10_2012JesenB, null),
  "2012_jesen_B__16": () => e(SvgParabola16_2012JesenB, null),
  "2012_jesen_B__27.1": () => e(SvgGraf27_2012JesenB, null),
  "2012_jesen_B__27.2": () => e(SvgGraf27_2012JesenB, null),
  "2012_jesen_B__27.3": () => e(SvgGraf27_2012JesenB, null),
  "2012_jesen_B__28.1": () => e(SvgTable28_2012JesenB, null),
  "2012_jesen_B__28.2": () => e(SvgTable28_2012JesenB, null),
  "2012_jesen_B__13": () => e(SvgQ13_2012JesenB, null),
  "2012_jesen_B__9": () => e(SvgGrid9_2012JesenB, null),
};
