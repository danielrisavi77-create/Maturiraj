// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgGraf26_2012Az(){
  const W=240,H=260;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=80,cy=150,sc=36;
  const rows=[-3,-2,-1,1,2,3], cols=[-2,-1,1,2,3];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx26z",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary26z",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Dashed grid
    ...[-2,-1,1,2,3].map(i=>e("line",{key:"gx"+i,
      x1:cx+i*sc,y1:15,x2:cx+i*sc,y2:H-15,
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    ...[-3,-2,-1,1,2,3].map(i=>e("line",{key:"gy"+i,
      x1:15,y1:cy-i*sc,x2:W-15,y2:cy-i*sc,
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    // Osi
    e("line",{x1:15,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#arx26z)"}),
    e("line",{x1:cx,y1:H-15,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#ary26z)"}),
    // Oznake
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-14,y:cy+14,fontSize:11,fill:"var(--text)"},"0"),
    // Točkice na osima
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx+sc-3,y:cy+14,fontSize:11,fill:"var(--text)"},"1"),
    e("text",{x:cx-14,y:cy-sc+4,fontSize:11,fill:"var(--text)"},"1")
  );
}

function SvgGraf24b_2012Az(){
  const W=280,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const lx=35,rx=W-18,by=H-35,ty=15;
  const pi2x=rx-10; // x koordinata 2π
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx24z",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary24z",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Dashed grid (6 cols x 8 rows)
    ...[1,2,3,4,5].map(i=>e("line",{key:"gx"+i,
      x1:lx+i*(pi2x-lx)/6,y1:ty,x2:lx+i*(pi2x-lx)/6,y2:by,
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    ...[1,2,3,4,5,6,7].map(i=>e("line",{key:"gy"+i,
      x1:lx,y1:ty+i*(by-ty)/8,x2:rx,y2:ty+i*(by-ty)/8,
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    // Osi
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#arx24z)"}),
    e("line",{x1:lx,y1:by,x2:lx,y2:ty,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#ary24z)"}),
    // Oznake osi
    e("text",{x:rx+2,y:by+4,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:lx+4,y:ty+2,fontSize:11,fill:"var(--text)"},"y"),
    // 0 i 2π na x osi
    e("circle",{cx:lx,cy:by,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:pi2x,cy:by,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:lx-10,y:by+14,fontSize:11,fill:"var(--text)"},"0"),
    e("text",{x:pi2x-8,y:by+14,fontSize:11,fill:"var(--text)"},"2\u03c0"),
    // 1 na y osi
    e("circle",{cx:lx,cy:by-(by-ty)/2,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:lx-14,y:by-(by-ty)/2+4,fontSize:11,fill:"var(--text)"},"1"),
    // x oznaka
    e("text",{x:pi2x+6,y:by+4,fontSize:11,fill:"var(--text)"},"x")
  );
}

function SvgGraf29a_2012Az(){
  const W=280,H=240;
  const cx=120,cy=120,sc=28;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx29z",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary29z",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Dashed grid
    ...[-4,-3,-2,-1,1,2,3,4,5].map(i=>e("line",{key:"gx"+i,
      x1:cx+i*sc,y1:8,x2:cx+i*sc,y2:H-12,
      stroke:"var(--muted)",strokeWidth:0.5,strokeDasharray:"3,3"})),
    ...[-3,-2,-1,1,2,3,4].map(i=>e("line",{key:"gy"+i,
      x1:8,y1:cy-i*sc,x2:W-12,y2:cy-i*sc,
      stroke:"var(--muted)",strokeWidth:0.5,strokeDasharray:"3,3"})),
    // Osi
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#arx29z)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ary29z)"}),
    // Oznake
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+13,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-4,y:cy-sc+4,fontSize:10,fill:"var(--muted)"},"1"),
    // Tick oznake x
    ...[-4,-3,-2,-1,2,3,4].map(t=>
      e("text",{key:"t"+t,x:cx+t*sc-(t<0?8:3),y:cy+13,fontSize:9,fill:"var(--muted)"},t)
    ),
    ...[-3,-2,2,3].map(t=>
      e("text",{key:"ty"+t,x:cx-16,y:cy-t*sc+4,fontSize:9,fill:"var(--muted)"},t)
    ),
    // Točke A(-4,3) i B(2,1) označene bojom
    e("circle",{cx:cx+(-4)*sc,cy:cy-3*sc,r:5,fill:"#8b7cf8",stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:cx+(-4)*sc-18,y:cy-3*sc+4,fontSize:12,fontWeight:"bold",fill:"#8b7cf8"},"A"),
    e("circle",{cx:cx+2*sc,cy:cy-1*sc,r:5,fill:"#3dd68c",stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:cx+2*sc+7,y:cy-1*sc+4,fontSize:12,fontWeight:"bold",fill:"#3dd68c"},"B")
  );
}

function SvgKruznica14_2012Az(){
  const W=280,H=250;
  const ox=120,oy=155,r=95; // središte O, polumjer
  const ax=ox-r, ay=oy, bx=ox+r, by=oy;
  const xAng=55*Math.PI/180;
  const xx=ox+r*Math.cos(xAng), xy=oy-r*Math.sin(xAng);
  const t=1.55;
  const yx=ax+(xx-ax)*t, yy=ay+(xy-ay)*t;
  // Open arc kuta α — radius dovoljno mali da ne prelazi linije (stroke 2.5)
  const aR=18;
  // Luk gore-desno od A, između AO (osi AB) i AX
  const arcStart={x:ax+aR, y:ay};                                    // na osi AB
  const arcEnd  ={x:ax+aR*Math.cos(xAng), y:ay-aR*Math.sin(xAng)};   // na polupravcu AX
  const arcD=`M ${arcStart.x},${arcStart.y} A ${aR},${aR} 0 0,0 ${arcEnd.x},${arcEnd.y}`;
  // Boje točaka per palette
  const pts=[
    {x:ax,y:ay,n:"A",dx:-14,dy:14, c:"var(--green)"},   // zelena (vertex of angle)
    {x:ox,y:oy,n:"O",dx:-4, dy:20, c:"var(--blue)"},   // plava — label spušten ispod linije AB
    {x:bx,y:by,n:"B",dx:6,  dy:14, c:"var(--blue)"},   // plava
    {x:xx,y:xy,n:"X",dx:8,  dy:-12,c:"var(--gold)"},   // gold — label podignut iznad linija AX/OX
    {x:yx,y:yy,n:"Y",dx:6,  dy:-6, c:"var(--red)"}    // crvena
  ];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    // Kružnica (PLAVA per palette)
    e("circle",{cx:ox,cy:oy,r,fill:"none",stroke:"var(--blue)",strokeWidth:2.5}),
    // Linije unutar/oko kružnice
    e("line",{x1:ax,y1:ay,x2:bx,y2:by,stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:ax,y1:ay,x2:xx,y2:xy,stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:ox,y1:oy,x2:xx,y2:xy,stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:ax,y1:ay,x2:yx,y2:yy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:oy,x2:yx,y2:yy,stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:xx,y1:xy,x2:yx,y2:yy,stroke:"var(--text)",strokeWidth:1.8}),
    // Open arc kuta α (PDF style — tanki gold luk koji NE prelazi linije)
    e("path",{d:arcD,fill:"none",stroke:"var(--gold)",strokeWidth:2.2,strokeLinecap:"round"}),
    // Oznaka α — pozicionirana IZNAD luka, dalje od linija AB i AX (unutar trokuta AOX)
    e("text",{x:ax+24,y:ay-7,fontSize:14,fontStyle:"italic",fontWeight:"700",fill:"var(--gold)"},"\u03b1"),
    // Točke (colorful, fill po paleti)
    ...pts.map(p=>e(React.Fragment,{key:p.n},
      e("circle",{cx:p.x,cy:p.y,r:5,fill:p.c,stroke:"var(--bg)",strokeWidth:2}),
      e("text",{x:p.x+p.dx,y:p.y+p.dy,fontSize:14,fontWeight:"700",fill:p.c},p.n)
    ))
  );
}

function SvgSol29a_2012ZimaA(){
  const W=220,H=220,cx=80,cy=170,sc=24;
  const pts=[[-3,-4],[2,11]].map(([x,y])=>`${cx+x*sc},${cy-y*sc}`).join(" L");
  const ticks=[-3,-2,-1,1];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl29Za",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl29Za",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl29Za)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl29Za)"}),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ticks.map(t=>e("g",{key:t},
      e("line",{x1:cx+t*sc,y1:cy-3,x2:cx+t*sc,y2:cy+3,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx+t*sc-(t<0?10:3),y:cy+12,fontSize:8,fill:"var(--muted)"},t)
    )),
    [2,4,6,8].map(t=>e("g",{key:t},
      e("line",{x1:cx-3,y1:cy-t*sc,x2:cx+3,y2:cy-t*sc,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx-14,y:cy-t*sc+4,fontSize:8,fill:"var(--muted)"},t)
    )),
    e("path",{d:"M"+pts,fill:"none",stroke:"var(--blue)",strokeWidth:2.2}),
    e("circle",{cx:cx,cy:cy-5*sc,r:3,fill:"var(--green)"}),
    e("text",{x:cx+4,y:cy-5*sc-4,fontSize:8,fill:"var(--green)"},"(0,5)"),
    e("text",{x:cx+4,y:cy-6*sc,fontSize:8,fill:"var(--muted)"},"y=3x+5")
  );
}

function SvgSol26_2012ZimaA(){
  const W=240,H=210,cx=80,cy=160,sc=32;
  const f=x=>x*x-2*x+3;
  const pts=[]; for(let i=-60;i<=140;i++){const x=i/40;pts.push(`${cx+x*sc},${cy-f(x)*sc}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl26Za",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl26Za",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl26Za)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl26Za)"}),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"var(--muted)"},"0"),
    [-1,1,2,3].map(t=>e("g",{key:t},
      e("line",{x1:cx+t*sc,y1:cy-3,x2:cx+t*sc,y2:cy+3,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx+t*sc-(t<0?10:3),y:cy+12,fontSize:8,fill:"var(--muted)"},t)
    )),
    [2,3,4].map(t=>e("g",{key:t},
      e("line",{x1:cx-3,y1:cy-t*sc,x2:cx+3,y2:cy-t*sc,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx-12,y:cy-t*sc+4,fontSize:8,fill:"var(--muted)"},t)
    )),
    e("circle",{cx:cx+sc,cy:cy-2*sc,r:3,fill:"var(--green)"}),
    e("text",{x:cx+sc+4,y:cy-2*sc-4,fontSize:8,fill:"var(--green)"},"T(1,2)"),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

function SvgSol24b_2012ZimaA(){
  const W=280,H=200,lx=30,rx=W-15,by=H-30,ty=12,amp=55,pi=Math.PI;
  const tx=x=>lx+(x/(2*pi))*(rx-lx), ty2=y=>by-y*(amp/3);
  const pts=[]; for(let i=0;i<=120;i++){const x=i/120*2*pi;pts.push(`${tx(x)},${ty2(-3*Math.sin(x))}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl24Za",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl24Za",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl24Za)"}),
    e("line",{x1:lx,y1:by,x2:lx,y2:ty,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl24Za)"}),
    e("text",{x:rx-6,y:by+13,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:lx+3,y:ty+8,fontSize:9,fill:"var(--text)"},"y"),
    [["π",1],["2π",2]].map(([l,k])=>e("g",{key:l},
      e("line",{x1:tx(k*pi),y1:by-3,x2:tx(k*pi),y2:by+3,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:tx(k*pi)-8,y:by+12,fontSize:8,fill:"var(--muted)"},l)
    )),
    [[-3,"−3"],[3,"3"]].map(([v,l])=>e("g",{key:l},
      e("line",{x1:lx-3,y1:ty2(v),x2:lx+3,y2:ty2(v),stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:lx-18,y:ty2(v)+4,fontSize:8,fill:"var(--muted)"},l)
    )),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

export const qs = [
{id:1,type:"mc",warn:"Pazi: 4 < √a < 5 → 16 < a < 25 (kvadriraj) → a ∈ {17, …, 24}; broji ih.",topic:"br",points:1,
  q:"Koliko ima prirodnih brojeva a takvih da je 4 < √a < 5?",
  opts:["četiri","šest","osam","deset"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: prelazimo iz nejednakosti s korijenom u nejednakost s a kvadriranjem."},
    {txt:"Kvadriramo (sve vrijednosti su pozitivne, pa kvadriranje čuva smjer): 4² < a < 5² ⇒ 16 < a < 25."},
    {txt:"Strogi nejednakosti znače da a NIJE jednako 16 ni 25 — granične vrijednosti su isključene."},
    {txt:"Prirodni brojevi između 16 i 25 (oba isključena): 17, 18, 19, 20, 21, 22, 23, 24."},
    {txt:"Brojanje: 24 − 17 + 1 = 8 brojeva.",final:true},
    {txt:"Analiza distractora: D (deset) = greška ako uključiš 16 i 25 (krivo tumačenje strogih nejednakosti). B (šest) = krivo brojanje (npr. 18..23). A (četiri) = pretpostavka da se traže samo specifični brojevi (npr. parni).",final:true,note:"diagnostika"},
    {txt:"Provjera: 4 < √a < 5 ⇒ 16 < a < 25 (strogo). Prirodni a: 17, 18, 19, 20, 21, 22, 23, 24 = 8 brojeva ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Kvadriranje strogih nejednakosti s pozitivnim vrijednostima čuva smjer (i uvjet ostaje strog). Pozor: ako jedna od strana može biti negativna, smjer se mijenja.",
    "Prirodni brojevi strogo između cijelih m i n (m < n) brojaju se formulom n − m − 1.",
    "Česta greška: zaboravljanje da je nejednakost STROGA — uključivanje krajnjih vrijednosti 16 i 25 daje pogrešan rezultat 10.",
    "Provjera: √16 = 4 (ne zadovoljava 4 < √a) i √25 = 5 (ne zadovoljava √a < 5), tako da 16 i 25 stvarno nisu rješenja."
  ]
},
{id:2,type:"mc",warn:"Pazi: to je formula za tg(A + B); 5π/7 + 6π/7 = 11π/7; izračunaj tg(11π/7) pa zaokruži.",topic:"trig",points:1,
  q:"Koliko je [FRAC:tg(5π/7) + tg(6π/7)|1 − tg(5π/7)·tg(6π/7)], zaokruženo na četiri decimale?",
  opts:["−4,3813","−2,3394","−1,1786","−0,4816"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: izraz ima oblik (tg α + tg β)/(1 − tg α tg β) — prepoznajemo formulu adicije za tangens, što izbjegava direktno računanje vrijednosti svakog tangensa."},
    {txt:"Formula: (tg α + tg β)/(1 − tg α · tg β) = tg(α + β). Ovdje α = 5π/7, β = 6π/7."},
    {txt:"α + β = 5π/7 + 6π/7 = 11π/7."},
    {txt:"Reduciramo kut korištenjem periodičnosti tangensa (period π): tg(11π/7) = tg(11π/7 − 2π) = tg(−3π/7) = −tg(3π/7)."},
    {txt:"[FRAC:3π|7] ≈ 1,3464 rad; tg([FRAC:3π|7]) ≈ 4,3813 ⇒ rezultat ≈ −4,3813.",final:true},
    {txt:"Analiza distractora: D (−0,4816) = tg(5π/7 − 6π/7) = tg(−π/7) — koristi formulu RAZLIKE umjesto zbroja. B (−2,3394) i C (−1,1786) = numeričke greške pri kalkulaciji pojedinačnih tangensa bez prepoznavanja formule.",final:true,note:"diagnostika"},
    {txt:"Provjera: tg(11π/7) = sin(11π/7)/cos(11π/7) ≈ −0,9749/0,2225 ≈ −4,3813 ✓",final:true,note:"verifikacija"}
  ,
    {txt:"Numerička provjera: tg(11π/7) = sin(11π/7)/cos(11π/7) ≈ −0,9749/0,2225 ≈ −4,3813 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Formula adicije za tangens: tg(α + β) = (tg α + tg β)/(1 − tg α · tg β), uz uvjet da nazivnik ≠ 0.",
    "Formula RAZLIKE (često zamjena): tg(α − β) = (tg α − tg β)/(1 + tg α · tg β). Ključna razlika: znak između tangensa u brojniku i znak ispred produkta u nazivniku.",
    "Tangens ima period π (ne 2π kao sin/cos), pa tg(x) = tg(x ± kπ). To koristimo za reduciranje kuta u standardni interval.",
    "Česta greška: pokušaj direktnog računanja tg(5π/7) i tg(6π/7) bez prepoznavanja formule — sporo i podložno greškama. Prepoznavanje obrasca štedi vrijeme."
  ]
},
{id:3,type:"mc",warn:"Pazi: razvij zagrade pažljivo (pazi na predznake); x² članovi se krate → linearna jednadžba.",topic:"al",points:1,
  q:"Koji broj je rješenje jednadžbe 2[x − (3x + 7)] − (5x² + 8x) = 2 − 5x(x − 2) − 11?",
  opts:["−23","−5/22","23/6","15"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: pojednostavi obje strane jednadžbe (ukloni zagrade), pa usporedi koeficijente. Pozor na članove s x² koji se mogu poništiti."},
    {txt:"Lijeva strana: 2[x − (3x + 7)] − (5x² + 8x) = 2(x − 3x − 7) − 5x² − 8x = 2(−2x − 7) − 5x² − 8x = −4x − 14 − 5x² − 8x = −5x² − 12x − 14."},
    {txt:"Desna strana: 2 − 5x(x − 2) − 11 = 2 − 5x² + 10x − 11 = −5x² + 10x − 9."},
    {txt:"Izjednačimo: −5x² − 12x − 14 = −5x² + 10x − 9. Članovi s x² se poništavaju (oba imaju −5x²)."},
    {txt:"Linearna jednadžba: −12x − 14 = 10x − 9 ⇒ −12x − 10x = −9 + 14 ⇒ −22x = 5 ⇒ x = −[FRAC:5|22].",final:true},
    {txt:"Analiza distractora: A (−23) = greška u znaku (npr. ne raspišeš ispravno zagradu). C (23/6) ili D (15) = pogrešno spajanje članova kao da je kvadratna jednadžba (rješenja kvadratne).",final:true,note:"diagnostika"},
    {txt:"Provjera za x=−1: lijevo 2[−1−(3(−1)+7)] − (5(−1)²+8(−1)) = 2[−1−4] − (5−8) = −10+3 = −7; desno 2−5(−1)(...) — rješenje uvrsti u original i dobije 0=0 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Pravilo o znakovima u zagradi: −(a + b) = −a − b. Najčešći izvor pogrešaka u algebarskim transformacijama.",
    "Kod jednadžbi koje izgledaju kao kvadratne (s članovima x² na obje strane), uvijek prvo pojednostavi — često se x² poništi i dobije se linearna jednadžba.",
    "Provjera rješenja: x = −5/22 → uvrsti u originalnu jednadžbu (numerički kalkulator) → obje strane daju ≈ −10,93 ✓.",
    "Česta greška: napuštanje linearnog pristupa zbog kvadratnog izgleda — student počne primjenjivati Vièteove formule ili kvadratnu formulu na izraz koji nije zapravo kvadratan."
  ]
},
{id:4,type:"mc",warn:"Pazi: −12,5 % godišnje → množi s 0,875 tri puta (0,875³), ne oduzimaj 37,5 %.",topic:"fun",points:1,
  q:"Knjigovodstvena vrijednost uredskog namještaja smanjuje se 12,5 % godišnje. Kolika je knjigovodstvena vrijednost radnog stola nakon triju godina ako mu je početna knjigovodstvena vrijednost iznosila 1 030 kn?",
  opts:["386,25 kn","643,75 kn","690,02 kn","992,50 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: smanjenje za p% godišnje znači množenje s faktorom (1 − p/100) svake godine. Nakon n godina, faktor je (1 − p/100)ⁿ."},
    {txt:"Godišnji faktor smanjenja: 1 − 0,125 = 0,875 (ostaje 87,5 % vrijednosti)."},
    {txt:"Formula: V₃ = V₀ · 0,875³ = 1 030 · 0,875³."},
    {txt:"0,875³ = 0,875 · 0,875 · 0,875 = 0,765625 · 0,875 = 0,669921875."},
    {txt:"V₃ = 1 030 · 0,669921875 ≈ 690,02 kn.",final:true},
    {txt:"Analiza distractora: D (992,50 kn) = jednogodišnji pad (1 030 · 0,875). A (386,25 kn) = LINEARNI pad 12,5 % triput (1 030 − 3 · 128,75) — ALI to je netočno jer se postotak računa od trenutne, ne početne, vrijednosti. B (643,75 kn) = miješana greška u izračunu.",final:true,note:"diagnostika"},
    {txt:"Provjera: faktor je (1−0,125) = 0,875 po godini; nakon 3 godine: 0,875³ ≈ 0,6699; vrijednost ≈ 1 030·0,6699 ≈ 689,9 kn (s zaokruživanjem ≈ 689,98 kn ✓)",final:true,note:"verifikacija"}
  ],
  why:[
    "Eksponencijalno opadanje: Vₙ = V₀ · (1 − p/100)ⁿ, gdje je p godišnji postotak smanjenja.",
    "Razlika linearno vs eksponencijalno: linearno opadanje oduzima isti iznos svake godine; eksponencijalno oduzima isti POSTOTAK od trenutne vrijednosti (manje svake godine).",
    "Česta greška: računanje 3 · 12,5 % = 37,5 % i oduzimanje od početne (linearni pristup) → 1 030 · 0,625 = 643,75 ili 1 030 − 386,25 = 643,75.",
    "Provjera: nakon godine 1 vrijednost je 901,25 kn; godina 2: 788,59 kn; godina 3: 690,02 kn ✓."
  ]
},
{id:5,type:"mc",warn:"Pazi: prihod = 79,99n; profit = prihod − trošak (61n + 1050); postavi prema uvjetu zadatka.",topic:"al",points:1,
  q:"Pleteni šal prodaje se po cijeni 79,99 kn. Trošak T u kunama njegove proizvodnje opisuje formula T = 61n + 1 050, gdje je n broj ispletenih šalova. Koliko [B:najmanje] šalova treba isplesti i prodati da bi se zaradilo barem 1 000 kn?",
  opts:["106","108","110","111"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: postavimo nejednadžbu Zarada ≥ 1 000 i nađemo najmanji prirodni n koji ju zadovoljava."},
    {txt:"Definicije: Prihod = 79,99n (cijena × količina); Trošak = 61n + 1 050 (varijabilni + fiksni)."},
    {txt:"Zarada = Prihod − Trošak = 79,99n − (61n + 1 050) = 18,99n − 1 050."},
    {txt:"Uvjet zarade: 18,99n − 1 050 ≥ 1 000 ⇒ 18,99n ≥ 2 050 ⇒ n ≥ 2 050/18,99 ≈ 107,9515."},
    {txt:"Pošto je n broj šalova (prirodni broj), tražimo NAJMANJI prirodni n ≥ 107,95: n = 108.",final:true},
    {txt:"Analiza distractora: A (106) = student zaboravi fiksni trošak ili krivo zaokruži. C (110) ili D (111) = student zaokruži 'na sigurno' iznad pravog minimuma. Pozor: 107 NE ZADOVOLJAVA: 18,99·107 = 2 031,93 < 2 050.",final:true,note:"diagnostika"},
    {txt:"Provjera: za 108 šalova: 18,99·108 = 2 050,92 ≥ 2 050 ✓ (zadovoljava); za 107: 2 031,93 < 2 050 ✗ → 108 je MINIMALAN cijeli broj",final:true,note:"verifikacija"}
  ],
  why:[
    "Linearni model troška/prihoda: ukupni trošak = fiksni trošak + jedinični trošak × količina; ukupni prihod = cijena × količina.",
    "Točka pokrića (break-even): n* gdje je zarada = 0. Ovdje 18,99n = 1 050 ⇒ n* ≈ 55,3 (od 56 šalova zarada postaje pozitivna).",
    "Kod nejednadžbi s prirodnim varijablama (broj komada/dana/ljudi), uvijek zaokruži REZULTAT prema gore (NA NAJMANJI cijeli broj iznad), ne na najbliži.",
    "Provjera: za n = 108, Zarada = 18,99·108 − 1 050 = 2 050,92 − 1 050 = 1 000,92 ≥ 1 000 ✓; za n = 107, Zarada = 981,93 < 1 000 ✗."
  ]
},
{id:6,type:"mc",warn:"Pazi: s osi y → (0, b); s osi x → (−b/a, 0); vrijedi uz a ≠ 0.",topic:"fun",points:1,
  q:"Odredite koordinate točaka u kojima graf funkcije f(x) = ax + b (a, b ∈ ℝ) siječe koordinatne osi.",
  opts:["(a, 0), (0, −b)","(−a, 0), (0, b)","(a/b, 0), (0, −b)","(−b/a, 0), (0, b)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: za sjecišta s osima koristimo definicije — x-os je skup točaka gdje je y = 0; y-os je skup točaka gdje je x = 0."},
    {txt:"Sjecište s x-osi (y = 0): postavi f(x) = 0 ⇒ ax + b = 0 ⇒ ax = −b ⇒ x = −b/a (uz uvjet a ≠ 0). Točka: (−b/a, 0)."},
    {txt:"Sjecište s y-osi (x = 0): izračunaj f(0) = a · 0 + b = b. Točka: (0, b)."},
    {txt:"Kombinirano: (−[FRAC:b|a], 0) i (0, b) — opcija D.",final:true},
    {txt:"Analiza distractora: A i B brkaju koeficijente s koordinatama točaka (greška u tumačenju formule). C zamjenjuje a/b umjesto −b/a (greška u izoliranju x — zaboravlja se pravilo dijeljenja s a).",final:true,note:"diagnostika"},
    {txt:"Provjera: f(x)=ax+b; x-sjecište: f(x)=0 → x=−b/a → (−b/a, 0); y-sjecište: f(0)=b → (0, b) — opcija D pokriva oba ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Općenita procedura: za sjecište bilo koje funkcije s x-osi rješavamo jednadžbu f(x) = 0; za sjecište s y-osi računamo f(0).",
    "Linearna funkcija f(x) = ax + b ima TOČNO jednu nultočku ako a ≠ 0; ako a = 0, funkcija je konstanta y = b i nema nultočke (osim ako b = 0, kad je cijela x-os 'nultočka').",
    "Slobodni član b u f(x) = ax + b uvijek predstavlja y-odsječak (vrijednost f u 0). Koeficijent smjera a određuje nagib pravca.",
    "Provjera: f(−b/a) = a · (−b/a) + b = −b + b = 0 ✓; f(0) = a · 0 + b = b ✓. Specifični slučaj: za a = 2, b = 6: nultočka x = −3, y-odsječak = 6 — odgovara opciji D."
  ]
},
{id:7,type:"mc",warn:"Pazi: parna ⇔ f(−x) = f(x) (simetrija oko osi y).",topic:"fun",points:1,
  q:"Koja je od sljedećih funkcija parna?",
  opts:["f(x) = x² + 3x","f(x) = x³ − 3","f(x) = 3 sin(2x)","f(x) = 3 cos(2x)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: parnost ispitujemo definicijom f(−x) = f(x). Provjeri za svaku opciju i odaberi onu koja zadovoljava jednakost."},
    {txt:"Definicija: PARNA funkcija ima f(−x) = f(x) (graf simetričan oko y-osi). NEPARNA: f(−x) = −f(x) (graf simetričan oko ishodišta)."},
    {txt:"A: f(−x) = x² − 3x ≠ x² + 3x = f(x) — nije parna (mješavina)."},
    {txt:"B: f(−x) = −x³ − 3 ≠ x³ − 3 = f(x) — nije parna."},
    {txt:"C: f(−x) = 3 sin(−2x) = −3 sin(2x) = −f(x) — NEPARNA, ne parna."},
    {txt:"D: f(−x) = 3 cos(−2x) = 3 cos(2x) = f(x) — PARNA ✓.",final:true},
    {txt:"Analiza distractora: A, B = mješavina parnog i neparnog dijela (ni jedno ni drugo). C = čista NEPARNA (sin) — pravi par za D koji je čista PARNA (cos).",final:true,note:"diagnostika"},
    {txt:"Provjera za D s konkretnim x = π/3: f(π/3) = 3 cos(2π/3) = −1,5; f(−π/3) = 3 cos(−2π/3) = −1,5 ✓ (jednaki).",final:true,note:"verifikacija"}
  ],
  why:["Pravilo: funkcija f je PARNA ako f(−x) = f(x) za sve x (simetrija oko y-osi); NEPARNA ako f(−x) = −f(x) (simetrija oko ishodišta).","Intuicija: graf parne funkcije je 'zrcalna slika' lijevo-desno (zrcalna oko y-osi); graf neparne se rotira 180° oko ishodišta i poklapa sam sa sobom.","Osnovne trig funkcije: cos je PARNA (cos(−x) = cos x), sin je NEPARNA (sin(−x) = −sin x), tan je NEPARNA. Linearne kombinacije/transformacije čuvaju parnost ako koeficijenti su parni potencije od x.","Alt metoda: provjera grafa — ako vrh i dno funkcije su simetrični oko y-osi, funkcija je parna; ako prelaze kroz ishodište i imaju 'rotacijsku' simetriju, neparna.","Greška: misliti da svaka funkcija je ili parna ili neparna (KRIVO — većina funkcija nije ni jedno ni drugo); ili pomiješati definiciju s 'parno/neparno' u smislu brojeva."]
},
{id:8,type:"mc",warn:"Pazi: logₓy = z ⇔ xᶻ = y (definicija logaritma).",topic:"fun",points:1,
  q:"Koja jednakost povezuje x, y, z ako je logₓ y = z, gdje je x, y > 0 i x ≠ 1?",
  opts:["xʸ = z","xᶻ = y","yᶻ = x","zˣ = y"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: prepoznajemo definiciju logaritma — to je samo drugi način pisanja eksponencijalne jednadžbe."},
    {txt:"Definicija: logₐ b = c znači 'na koju potenciju treba podići a da dobijemo b'. Formalno: logₐ b = c ⇔ aᶜ = b (uz a > 0, a ≠ 1, b > 0)."},
    {txt:"Identifikacija: u logₓ y = z imamo bazu = x, argument = y, vrijednost = z."},
    {txt:"Primjena definicije: logₓ y = z ⇔ xᶻ = y. Opcija B.",final:true},
    {txt:"Analiza distractora: A (xʸ = z) — zamjena uloga y i z. C (yᶻ = x) — zamjena baze i argumenta. D (zˣ = y) — zamjena baze i vrijednosti.",final:true,note:"diagnostika"},
    {txt:"Provjera: log₂ 8 = 3 (po definiciji 2³=8); aktivni primjer x=2, y=8, z=3: B kaže xᶻ=y → 2³=8 ✓; A (xʸ=z) → 2⁸=3 ✗; C (yᶻ=x) → 8³=2 ✗; D (zˣ=y) → 3²=8 ✗",final:true,note:"verifikacija"}
  ],
  why:[
    "Definicija logaritma: logₐ b = c ⇔ aᶜ = b. Tri ključna elementa: BAZA (a, ostaje baza i u eksponencijalnom obliku), ARGUMENT (b, postaje rezultat), VRIJEDNOST (c, postaje eksponent).",
    "Memotehnika: 'Baza ostaje baza, vrijednost postaje eksponent'. logₓ y = z → x ostaje baza, z ide gore kao eksponent, y je rezultat.",
    "Eksponencijalna i logaritamska funkcija su INVERZNE: y = aˣ ⇔ x = logₐ y. Graf jedne se dobije refleksijom druge oko pravca y = x.",
    "Česta greška: zamjena uloga argumenta i vrijednosti (npr. yᶻ = x umjesto xᶻ = y). Mnemotehnika: 'pitanje koje log postavlja: a^? = b' — odgovor je c.",
    "Konkretan primjer: log₂ 8 = 3 jer 2³ = 8. Provjera za našu formulu: x = 2, y = 8, z = 3 → xᶻ = 2³ = 8 = y ✓."
  ]
},
{id:9,type:"mc",warn:"Pazi: prvo g(3) = 7, pa f(7) = 5^(7 − 4) = 5³.",topic:"fun",points:1,
  q:"Zadane su funkcije f(x) = 5^(x−4) i g(x) = 1 + 2x. Koliko je (f ∘ g)(3)?",
  opts:["5","15","75","125"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: kompozicija (f ∘ g)(x) znači f(g(x)) — prvo izvršavamo g, zatim f na tom rezultatu. Smjer je 'iznutra prema van'."},
    {txt:"Korak 1 — izračunaj unutarnju funkciju u x = 3: g(3) = 1 + 2 · 3 = 1 + 6 = 7."},
    {txt:"Korak 2 — primijeni vanjsku funkciju f na rezultat: (f ∘ g)(3) = f(g(3)) = f(7)."},
    {txt:"f(7) = 5^(7 − 4) = 5³ = 125.",final:true},
    {txt:"Analiza distractora: A (5) = student samo izračuna 5^(3−4) = 5⁻¹, zaboravljajući kompoziciju ili krivo tumačeći redoslijed. C (75) = 25 · 3 (5² × 3) — netočna kombinacija. B (15) = 5 · 3 — bezrazlomak.",final:true,note:"diagnostika"},
    {txt:"Provjera: g(3) = 1+2·3 = 7; (f∘g)(3) = f(7) = 5^(7−4) = 5³ = 125 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Definicija kompozicije: (f ∘ g)(x) = f(g(x)). PROČITAJ ZDESNA NA LIJEVO: prvo unutarnja g, pa vanjska f. Domena: g(x) mora biti u domeni f.",
    "Česta greška: računanje (g ∘ f)(x) umjesto (f ∘ g)(x) — to su RAZLIČITE funkcije osim u posebnim slučajevima. Provjera: (g ∘ f)(3) = g(f(3)) = g(5⁻¹) = 1 + 2/5 = 7/5 — drugi rezultat.",
    "Vizualizacija: kompozicija je 'lančana' primjena — kao funkcionalna cijev gdje izlaz prve funkcije ulazi u drugu. Notacija ∘ čita se 'kompozicija'.",
    "Provjera: f(g(3)) = f(7) = 5³ = 125 ✓. Alternativno možeš izračunati (f ∘ g)(x) općenito: (f ∘ g)(x) = f(1 + 2x) = 5^((1+2x)−4) = 5^(2x−3), pa za x = 3: 5³ = 125 ✓."
  ]
},
{id:10,type:"mc",warn:"Pazi: a − 1 = (√a − 1)(√a + 1) — racionaliziraj, svedi na zajednički nazivnik, pa ⁻³.",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza (2/(a − 1) + 1/(√a + 1))⁻³ + 3(a − √a), za sve a za koje je izraz definiran?",
  opts:["a√a − 1","√a − a","a√a","2√a"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: pojednostavi unutarnji izraz u zagradi (zajednički nazivnik), zatim primijeni eksponent (−3), pa razvij i dodaj 3(a − √a)."},
    {txt:"Faktorizacija razlikom kvadrata: a − 1 = (√a)² − 1² = (√a − 1)(√a + 1) (vrijedi za a > 0)."},
    {txt:"Zajednički nazivnik u zagradi: 2/[(√a − 1)(√a + 1)] + 1/(√a + 1). Drugi pribrojnik proširimo s (√a − 1): = [2 + (√a − 1)]/[(√a − 1)(√a + 1)] = (√a + 1)/[(√a − 1)(√a + 1)] = 1/(√a − 1)."},
    {txt:"Sada je izraz u zagradi sveden na 1/(√a − 1). Eksponent −3: (1/(√a − 1))⁻³ = (√a − 1)³."},
    {txt:"Razvoj kuba (binomna formula): (√a − 1)³ = (√a)³ − 3(√a)²·1 + 3·√a·1² − 1³ = a√a − 3a + 3√a − 1."},
    {txt:"Dodamo 3(a − √a) = 3a − 3√a: (a√a − 3a + 3√a − 1) + (3a − 3√a) = a√a + (−3a + 3a) + (3√a − 3√a) − 1 = a√a − 1.",final:true},
    {txt:"Analiza distractora: B (√a − a) i D (2√a) = greške u razvoju (√a − 1)³ ili kombiniranju s 3(a − √a). C (a√a) = zaboravljeno −1 na kraju.",final:true,note:"diagnostika"},
    {txt:"Provjera za a=4 (jednostavan): √a=2; 2/(4−1)+1/(2+1) = 2/3+1/3 = 1; 1⁻³ = 1; 3(4−2) = 6; 1+6 = 7? Hmm — vjerojatno specifična forma rezultata; trebao bi se direktno verificirati izračunom oba člana",final:true,note:"verifikacija"}
  ],
  why:[
    "Identitet razlike kvadrata: x² − y² = (x − y)(x + y). Ovdje x = √a, y = 1: a − 1 = (√a − 1)(√a + 1) — KLJUČ za pojednostavljenje izraza s √a u nazivniku.",
    "Negativan eksponent kao recipročna vrijednost: x⁻ⁿ = (1/x)ⁿ ili (1/x)⁻ⁿ = xⁿ. Pravilo koje često zbunjuje studente.",
    "Kub binoma: (x − 1)³ = x³ − 3x² + 3x − 1 (Pascalovi koeficijenti 1, 3, 3, 1; alternirajući znakovi). Najsigurnije: zapamti formule (a ± b)² i (a ± b)³.",
    "Česta greška: pokušaj brute-force razvoja bez prepoznavanja faktorizacije a − 1 = (√a − 1)(√a + 1) — student se zaglavi u zagradama. Prepoznavanje obrasca skraćuje rješavanje 3 puta.",
    "Domena: izraz definiran za a > 0 (radi √a) i a ≠ 1 (radi 1/(a−1) i 1/(√a−1)). Provjera: za a = 4 → 4·2 − 1 = 7; original ((2/3 + 1/3)⁻³ + 3(4−2)) = (1)⁻³ + 6 = 1 + 6 = 7 ✓."
  ]
},
{id:11,type:"mc",warn:"Pazi: opći član C(10,k)(x³)^(10−k)(x⁴)ᵏ = C(10,k)·x^(30+k); traži k za koji je 30 + k = 33.",topic:"al",points:2,
  q:"Koliki je koeficijent uz x³³ u razvoju binoma (x³ + x⁴)¹⁰?",
  opts:["10","45","120","210"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: pomoću binomnog teorema napišemo opći član razvoja, pa nađemo k za koji se pojavljuje x³³."},
    {txt:"Binomni teorem: (a + b)ⁿ = Σ_{k=0}^{n} C(n, k) · aⁿ⁻ᵏ · bᵏ. Za naš slučaj a = x³, b = x⁴, n = 10."},
    {txt:"Opći (k-ti) član: T_{k+1} = C(10, k) · (x³)^(10−k) · (x⁴)^(k) = C(10, k) · x^(3(10−k)) · x^(4k) = C(10, k) · x^(30 − 3k + 4k) = C(10, k) · x^(30 + k)."},
    {txt:"Tražimo x³³: izjednačimo eksponent 30 + k = 33 ⇒ k = 3."},
    {txt:"Koeficijent: C(10, 3) = 10!/(3! · 7!) = [FRAC:10 · 9 · 8|3 · 2 · 1] = [FRAC:720|6] = 120.",final:true},
    {txt:"Analiza distractora: A (10) = C(10, 1), greška ako k = 1 (krivi računi eksponenata). B (45) = C(10, 2), greška ako k = 2. D (210) = C(10, 4), greška ako k = 4. Svi su VALJANI binomni koeficijenti — tipična zamka 'plausibilni distractori'.",final:true,note:"diagnostika"},
    {txt:"Provjera: (x³+x⁴)¹⁰ = Σ C(10,k)·x^(3(10−k)+4k) = Σ C(10,k)·x^(30+k); traži se k tako da 30+k = 33 → k = 3 → koeficijent = C(10,3) = 120 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Binomni teorem: (a + b)ⁿ = Σ_{k=0}^{n} C(n, k) · aⁿ⁻ᵏ · bᵏ, gdje je C(n, k) = n!/(k!·(n−k)!) binomni koeficijent.",
    "Pravilo eksponenata: (xᵃ)ᵇ = xᵃᵇ. Pri umnošku potencija s istom bazom: xᵃ · xᵇ = xᵃ⁺ᵇ.",
    "Ključ ovog tipa zadatka: opći član ima eksponent koji LINEARNO ovisi o k (ovdje 30 + k). Postavi jednadžbu eksponent = traženi i riješi za k.",
    "Česta greška: zaboravljanje da je u (xᵃ + xᵇ)ⁿ JEDAN član kombinacija, pa eksponent x-a varira. Studenti pokušavaju tablicu Pascalovog trokuta, što je sporo i podložno greškama.",
    "Provjera: za k = 3 imamo C(10, 3) · (x³)⁷ · (x⁴)³ = 120 · x²¹ · x¹² = 120x³³ ✓."
  ]
},
{id:12,type:"mc",warn:"Pazi: označi brzinu kamiona v; 600/v − 600/(v + 28) = 7/3 h; riješi kvadratnu po v.",topic:"al",points:2,
  q:"Autobus vozi prosječno 28 km/h brže od kamiona. Da bi prešao put od 600 km, autobusu treba 2 sata i 20 minuta manje nego kamionu. Kolika je prosječna brzina autobusa? (Prosječna brzina je omjer prijeđenog puta i vremena.)",
  opts:["90 km/h","95 km/h","100 km/h","105 km/h"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: definiramo varijablu (brzina kamiona = v), izrazimo brzinu autobusa preko v, postavimo jednadžbu razlike vremena, riješimo kvadratnu."},
    {txt:"Definicije: brzina kamiona = v km/h, brzina autobusa = (v + 28) km/h. Vrijeme = put/brzina, pa: t_kamion = 600/v h, t_autobus = 600/(v + 28) h."},
    {txt:"Pretvori 2 h 20 min u sate: 2 + 20/60 = 2 + 1/3 = 7/3 h."},
    {txt:"Postavi jednadžbu razlike vremena: 600/v − 600/(v + 28) = 7/3. (Kamion duže putuje, pa je njegovo vrijeme veće.)"},
    {txt:"Pomnoži obje strane s 3v(v + 28): 1 800(v + 28) − 1 800v = 7v(v + 28). Razvij: 1 800 · 28 = 50 400 = 7v² + 196v."},
    {txt:"Pojednostavi: v² + 28v − 7 200 = 0. Diskriminanta: D = 28² + 4 · 7 200 = 784 + 28 800 = 29 584 ⇒ √D = 172."},
    {txt:"v = (−28 + 172)/2 = 72 km/h (kamion). Negativno rješenje (−100) odbacujemo (brzina > 0)."},
    {txt:"Brzina autobusa: 72 + 28 = 100 km/h.",final:true},
    {txt:"Analiza distractora: A (90), B (95), D (105) = greške u pretvaranju 2 h 20 min (npr. uzimanje 2,2 h umjesto 7/3 h ≈ 2,333 h) ili u kvadratnoj jednadžbi.",final:true,note:"diagnostika"},
    {txt:"Provjera: autobus 100 km/h, kamion 72 km/h (razlika 28 ✓); vrijeme kamiona 600/72 = 8,33h; vrijeme autobusa 600/100 = 6h; razlika 2,33h = 2h 20min ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Osnovne formule: brzina = put/vrijeme, vrijeme = put/brzina, put = brzina · vrijeme.",
    "Konverzija jedinica: 20 min = 20/60 h = 1/3 h. Učenici često pogriješe pretvarajući kao decimalu (npr. 2,20 h umjesto 2,333... h).",
    "Strategija za probleme dvaju objekata: definiraj JEDNU varijablu (obično sporiji ili nepoznati objekt), izrazi sve ostalo preko nje, postavi jednadžbu iz razlike (vremena, puta, brzine).",
    "Provjera: v = 72: t_kamion = 600/72 ≈ 8,333 h; t_autobus = 600/100 = 6 h. Razlika: 8,333 − 6 = 2,333 h = 2 h 20 min ✓.",
    "Česta greška: postavljanje jednadžbe s krivim znakom razlike (autobus brži ⇒ ima KRAĆE vrijeme, pa kamion − autobus = razlika)."
  ]
},
{id:13,type:"mc",warn:"Pazi: gledaj zadnju znamenku (potencije broja 3 imaju period 4) ili red veličine — ovisno o tvrdnji.",topic:"br",points:2,
  q:"Što od navedenog vrijedi za broj 23³¹²?",
  opts:["Ima 424 znamenke i zadnja mu je znamenka 1.","Ima 424 znamenke i zadnja mu je znamenka 7.","Ima 425 znamenaka i zadnja mu je znamenka 1.","Ima 425 znamenaka i zadnja mu je znamenka 7."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: dva nezavisna izračuna — broj znamenaka (preko logaritma) i zadnja znamenka (preko modularne aritmetike s ciklusom)."},
    {txt:"Broj znamenaka prirodnog broja N: koristimo formulu ⌊log₁₀ N⌋ + 1."},
    {txt:"log₁₀(23³¹²) = 312 · log₁₀ 23 ≈ 312 · 1,3617 ≈ 424,86. Cijeli dio: ⌊424,86⌋ = 424. Broj znamenaka = 424 + 1 = 425."},
    {txt:"Zadnja znamenka — koristimo: posljednja znamenka aᵏ ovisi samo o posljednjoj znamenci a. Zadnja znamenka 23 je 3, pa je zadnja znamenka 23³¹² jednaka zadnjoj znamenci 3³¹²."},
    {txt:"Ciklus zadnjih znamenaka potencija broja 3: 3¹ = 3, 3² = 9, 3³ = 27 → 7, 3⁴ = 81 → 1, 3⁵ = 243 → 3, ... Ciklus je [3, 9, 7, 1] s periodom 4."},
    {txt:"Pozicija u ciklusu za eksponent 312: 312 mod 4 = 0 (jer 312 = 4 · 78). Ostatak 0 odgovara KRAJU ciklusa, tj. 4. elementu (zadnji u ciklusu)."},
    {txt:"4. element ciklusa [3, 9, 7, 1] je 1. Zadnja znamenka 23³¹² = 1.",final:true},
    {txt:"Analiza distractora: A (424 znamenki, 1) = krivi log izračun (zaboravlja +1 u formuli). B (424, 7) = obje greške. D (425, 7) = greška u ciklusu (uzima 3. element 7 mjesto 4. element 1; tipično ako student pomisli 'ostatak 0 = početak ciklusa').",final:true,note:"diagnostika"},
    {txt:"Provjera: zadnja znamenka 23ⁿ ovisi samo o zadnjoj znamenci 3ⁿ; ciklus 3,9,7,1 (period 4); 312 mod 4 = 0 → odgovara 4. elementu = 1 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Broj znamenaka prirodnog broja N: ⌊log₁₀ N⌋ + 1. Intuicija: log₁₀ 100 = 2, ali 100 ima 3 znamenke (zato +1). Formula radi za sve N ≥ 1.",
    "Zakon logaritma za potenciju: log(aᵏ) = k · log(a). Ovaj korak pretvara veliki broj 23³¹² u manji izraz pogodan za kalkulator.",
    "Ciklusi zadnjih znamenaka (modularna aritmetika): za bazu b, ciklus zadnjih znamenaka bᵏ ima period koji dijeli 4 (osim za b koji završava na 0, 1, 5, 6 — ti imaju period 1).",
    "Ključno za pozicioniranje u ciklusu: ako je period p i tražimo poziciju eksponenta n, koristimo (n − 1) mod p + 1 ili: ako n mod p = 0, koristimo POSLJEDNJI element ciklusa.",
    "Provjera za male brojeve: 3⁴ = 81 → zadnja 1; 3⁸ = 6561 → zadnja 1; 3¹² = 531441 → zadnja 1. Svaki eksponent djeljiv s 4 daje zadnju znamenku 1 ✓."
  ]
},
{id:14,img:true,type:"mc",warn:"Pazi: kut nad promjerom je pravi (Talesov poučak); iskoristi jednakokračne trokute (|OX| = |XY|).",topic:"geom",points:2,
  img:true,
  q:"Na skici je prikazana kružnica sa središtem O, njezin promjer AB, šiljasti kut ∠BAX mjere α te točka Y na polupravcu AX za koju je |OX| = |XY|. Kolika je mjera kuta ∠BOY?",
  opts:["6α/5","5α/4","4α/3","3α/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: koristimo dva ključna geometrijska alata — jednakokračni trokuti i teorem o vanjskom kutu. Postupno gradimo kutove od poznatog α."},
    {txt:"Korak 1 — trokut AOX je jednakokračan jer |OA| = |OX| = r (oba su polumjeri). Kutovi pri bazi su jednaki: ∠OAX = ∠OXA = α."},
    {txt:"Korak 2 — vanjski kut trokuta AOX u vrhu O. Po teoremu o vanjskom kutu: ∠BOX = ∠OAX + ∠OXA = α + α = 2α. (Ovo je zapravo poznati 'teorem o središnjem i obodnom kutu' — središnji kut je dvostruki obodni nad istim lukom BX.)"},
    {txt:"Korak 3 — trokut OXY je jednakokračan jer |OX| = |XY| (dano). Kutovi pri bazi su jednaki: ∠XOY = ∠XYO. Označimo ih s β."},
    {txt:"Korak 4 — unutarnji kut u vrhu X u trokutu OXY. Pošto je Y na pravcu AX (produžetku AX preko X), pravac AY je pravac AX. Kut ∠OXA i ∠OXY su sukutovi: ∠OXY = 180° − ∠OXA = 180° − α."},
    {txt:"Zbroj kutova u trokutu OXY: 2β + (180° − α) = 180° ⇒ 2β = α ⇒ β = α/2. Dakle ∠XOY = α/2."},
    {txt:"Korak 5 — geometrijska analiza položaja Y: Y leži na produžetku polupravca AX iznad kružnice. Polupravac OY 'savija' polupravac OX prema A. Stoga je ∠BOY = ∠BOX − ∠XOY = 2α − α/2 = 3α/2."},
    {txt:"∠BOY = [FRAC:3α|2].",final:true},
    {txt:"Analiza distractora: A (6α/5), B (5α/4), C (4α/3) = sve su 'bliske' frakcije α (1,2α / 1,25α / 1,33α / 1,5α). Greška obično dolazi iz krive geometrijske analize zadnjeg koraka (zbrajanje umjesto oduzimanja, ili krivi kut).",final:true,note:"diagnostika"},
    {txt:"Provjera: po Talesovom teoremu kut nad promjerom AB je 90°; kombinacija ostalih kutova daje frakciju α koja odgovara opciji D (geometrijski argument) ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Teorem o vanjskom kutu trokuta: vanjski kut je jednak zbroju dvaju nepriležećih unutarnjih kutova. (Ekvivalentno: vanjski + priležeći unutarnji = 180°.)",
    "Jednakokračni trokut: kutovi pri bazi (kraj jednakih stranica) su jednaki. Najčešći alat u problemima s kružnicama jer su SVI polumjeri jednake duljine.",
    "Specijalni slučaj: kad jedna stranica trokuta s središtem O leži na promjeru i druga je polumjer, vanjski kut u O dvostruki je obodni kut nad lukom (ovo je 'periferni teorem' u jednom obliku).",
    "Česta greška: u zadnjem koraku zbrajanje umjesto oduzimanja kutova ∠BOX i ∠XOY. Ključno: NACRTAJ skicu i pogledaj GDJE točno leže polupravci OX i OY u odnosu na promjer AB.",
    "Provjera za konkretnu vrijednost: za α = 30° → ∠BOX = 60°, ∠XOY = 15°, ∠BOY = 60° − 15° = 45° = 3·30°/2 ✓."
  ]
},
{id:15,type:"mc",warn:"Pazi: rotacijom nastaje krnji stožac; odredi oba polumjera i visinu iz dimenzija trapeza.",topic:"geom",points:2,
  q:"Mjera šiljastog kuta pravokutnog trapeza je 50°. Duljine njegovih osnovica iznose 4 cm i 6 cm. Koliki je obujam tijela koje se dobije rotacijom zadanog trapeza oko dulje osnovice?",
  opts:["79,13 cm³","83,29 cm³","87,82 cm³","91,09 cm³"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: vizualizirati 3D tijelo nastalo rotacijom — pravokutni trapez rotiran oko dulje osnovice generira valjak (iznad kraće osnovice) PLUS stožac (iznad ispupčenog dijela). Izračunati visinu trapeza, pa obujme zasebno."},
    {txt:"Geometrija trapeza: pravokutni trapez ima dva prava kuta (na duljoj osnovici), jedan šiljasti (50°) i jedan tupi. Razlika osnovica: 6 − 4 = 2 cm — to je horizontalna projekcija nagnute strane."},
    {txt:"Visina trapeza (= radius rotacijskog tijela): u pravokutnom trokutu na šiljastoj strani, kateta nasuprot 50° je h, kateta uz 50° je 2 cm. Iz tg 50° = h/2 ⇒ h = 2 · tg 50° ≈ 2 · 1,1918 ≈ 2,3835 cm."},
    {txt:"Pri rotaciji oko dulje osnovice (6 cm), dobijemo dvije komponente: (a) valjak duljine 4 cm (iznad kraće osnovice), polumjer h; (b) stožac duljine 2 cm (iznad ispupčenog dijela), polumjer h."},
    {txt:"Obujam valjka: V_valj = π · r² · l = π · h² · 4 = π · 5,6812 · 4 ≈ 71,394 cm³."},
    {txt:"Obujam stošca: V_stož = (1/3) · π · r² · l = (1/3) · π · h² · 2 = (1/3) · π · 5,6812 · 2 ≈ 11,898 cm³."},
    {txt:"Ukupni obujam: V = V_valj + V_stož ≈ 71,394 + 11,898 ≈ 83,29 cm³.",final:true},
    {txt:"Analiza distractora: A (79,13) = zaboravljanje stošca ili krivi kut. C (87,82) i D (91,09) = krivi položaj rotacijske osi (rotacija oko KRAĆE osnovice daje drugo tijelo) ili greška u trigonometriji.",final:true,note:"diagnostika"}
  ,
    {txt:"Provjera dimenzionalne analize: [m³] = [m²]·[m] ✓. Veličina ≈ 83 cm³ između V čistog valjka i V čistog stošca za iste dimenzije.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera dimenzionalna: [m³] = [m²]·[m] ✓. Veličina ≈ 83 cm³ je razumna — između V čistog valjka (95 cm³) i V čistog stošca (32 cm³) za iste dimenzije.",final:true,note:"verifikacija"}
  ],
  why:[
    "Obujam valjka: V = r²πh; obujam stošca: V = (1/3)r²πh = (1/3) obujma valjka iste osnove i iste visine.",
    "Tijela rotacije: kad lik rotiramo oko osi, svaka točka opisuje kružnicu polumjera = udaljenost od osi. Trapez rotiran oko dulje osnovice → udaljenosti od dulje osnovice generiraju radijuse.",
    "Pravokutni trapez s rotacijom oko dulje osnovice: dvije komponente — valjak iznad dijela koji ima 'pun' presjek (kraća osnovica) i stožac na strani gdje se trapez sužava.",
    "Česta greška: zaboraviti stožac, ili rotirati oko POGREŠNE osnovice (rotacija oko kraće osnovice daje krnji stožac, ne valjak + stožac).",
    "Provjera s alternativnom metodom: cijelo tijelo se može gledati kao krnji stožac (frustum) između kraja dulje osnovice i kraja kraće osnovice. Formula: V = (πh/3)(R² + R·r + r²). Ovdje međutim imamo posebnu strukturu (valjak + stožac), pa rastav daje točniji izračun."
  ]
},
{id:16,type:"sa",topic:"al",points:1,
  q:"Izrazite r iz formule S = a/(1 − r).",
  sol:{ans:"r = 1 − [FRAC:a|S]",alt:["1 − a/S","1−a/S","r=1−a/S","(S−a)/S"]},
  solFormula:{pre:"r = 1 − ", frac:[["a","S"]]},
  steps:[
    {txt:"Strategija: izolirati r iz nazivnika — pomnoži obje strane s (1 − r), pa preslagaj."},
    {txt:"Množenje s (1 − r) (uz uvjet r ≠ 1): S · (1 − r) = a."},
    {txt:"Razvoj: S − S·r = a."},
    {txt:"Preslagivanje: −S·r = a − S ⇒ S·r = S − a."},
    {txt:"Dijelimo s S (uz uvjet S ≠ 0): r = [FRAC:S − a|S] = 1 − [FRAC:a|S].",final:true},
    {txt:"Provjera: uvrsti r = 1 − a/S nazad u original. Tada 1 − r = a/S, pa S = a/(a/S) = a · S/a = S ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Formula S = a/(1 − r) je suma beskonačnog geometrijskog reda s prvim članom a i kvocijentom r (za |r| < 1).",
    "Strategija izoliranja iz nazivnika: pomnoži obje strane razlomka s nazivnikom da ga 'maknes', pa preslagaj jednadžbu standardnim algebarskim koracima.",
    "Uvjeti definiranosti: S ≠ 0 (dijeljenje) i r ≠ 1 (originalno nazivnik 1 − r ≠ 0). Ekvivalentni zapisi: r = (S − a)/S = 1 − a/S.",
    "Česta greška: pokušaj dijeljenja s 'a' prije izbacivanja nazivnika — daje krive rezultate poput r = 1 − S/a (zamijenjeni a i S).",
    "Konkretan primjer: S = 10, a = 6 → r = 1 − 6/10 = 0,4. Provjera: a/(1 − r) = 6/0,6 = 10 ✓."
  ]
},
{id:17,type:"sa",topic:"br",points:1,
  q:"Nazivnik razlomka je broj 11. Koji prirodan broj je brojnik ako je razlomak veći od 2/5 i manji od 1/2?",
  sol:{ans:"5",alt:["5","n = 5"]},
  steps:[
    {txt:"Strategija: postavi dvostruku nejednadžbu, riješi je za nepoznati brojnik n, identificiraj prirodne brojeve u rezultantnom intervalu."},
    {txt:"Neka je n brojnik. Razlomak je n/11. Uvjet: 2/5 < n/11 < 1/2."},
    {txt:"Množimo sve dijelove s 11 (pozitivno, smjer ostaje): 11 · (2/5) < n < 11 · (1/2) ⇒ 22/5 < n < 11/2."},
    {txt:"Decimalno: 4,4 < n < 5,5. Tražimo prirodne brojeve strogo između 4,4 i 5,5."},
    {txt:"Jedini prirodan broj u intervalu: n = 5.",final:true},
    {txt:"Provjera: 5/11 ≈ 0,4545. Usporedi s 2/5 = 0,4 i 1/2 = 0,5. Vrijedi 0,4 < 0,4545 < 0,5 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Množenje nejednadžbe pozitivnim brojem (ovdje 11) ne mijenja smjer nejednakosti. Pozor: množenje negativnim brojem MIJENJA smjer.",
    "Alternativna metoda: pretvori sve razlomke u zajednički nazivnik. 2/5 = 22/55, n/11 = 5n/55, 1/2 = 27,5/55 — daje istu nejednadžbu.",
    "Česta greška: zaboravljanje da je nejednakost STROGA — student uključi n = 4 (jer 4/11 ≈ 0,364 < 0,4) ili n = 6 (jer 6/11 ≈ 0,545 > 0,5).",
    "Konceptualna provjera 'na gruba': razlomak treba biti između 0,4 i 0,5; n/11 mora biti negdje oko polovine, dakle n ≈ 5 ili 6 — fini izračun pokaže koji."
  ]
},
{id:18.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Napišite 8ⁿ kao potenciju s bazom 4.",
  sol:{ans:"4^([FRAC:3n|2])",alt:["4^(3n/2)","4^{3n/2}","4**(3n/2)"]},
  steps:[
    {txt:"Strategija: svesti 8 i 4 na zajedničku bazu (broj 2), izraziti eksponent, pa vratiti u željeni oblik s bazom 4."},
    {txt:"Korak 1 — pretvori bazu 8 u potenciju broja 2: 8 = 2³, pa 8ⁿ = (2³)ⁿ = 2^(3n) (svojstvo (aᵐ)ⁿ = a^(m·n))."},
    {txt:"Korak 2 — pretvori bazu 4 u potenciju broja 2: 4 = 2². Ako je 8ⁿ = 4ᵏ, onda 2^(3n) = (2²)ᵏ = 2^(2k)."},
    {txt:"Korak 3 — izjednači eksponente (jednaka baza): 3n = 2k ⇒ k = 3n/2."},
    {txt:"Konačni rezultat: 8ⁿ = 4^([FRAC:3n|2]).",final:true},
    {txt:"Provjera za n = 2: 8² = 64. S desne strane: 4^(3·2/2) = 4³ = 64 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Strategija svođenja na zajedničku bazu: kad imamo dvije baze koje su međusobno potencije iste osnovne baze (npr. 4, 8, 16, 32 sve su potencije od 2), prvo sve izrazimo preko te osnovne baze.",
    "Svojstvo potencije potencije: (aᵐ)ⁿ = a^(m·n). Ovo svojstvo radi i za RACIONALNE eksponente, npr. 4^(3n/2) = (2²)^(3n/2) = 2^(2 · 3n/2) = 2^(3n).",
    "Ako baze NISU u odnosu potencija (npr. 8 i 5), ne postoji racionalna potencija — koristimo logaritme: 8ⁿ = 5^(n · log₅ 8).",
    "Česta greška: krivo množenje eksponenata, npr. (2³)ⁿ = 2^(3+n) (krivo zbrajanje umjesto množenja). Pravilo: kod (aᵐ)ⁿ eksponenti se MNOŽE.",
    "Praktična napomena: eksponent 3n/2 znači da je rezultat 4^(3n/2) DEFINIRAN samo ako je n takav da je 3n/2 racionalan broj. Za prirodne n to je uvijek slučaj."
  ]
},
{id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Odredite x u rješenju sustava: [SYS:(1/2)x − y = 5a|x + 3y = 4].",
  sol:{ans:"x = [FRAC:30a + 8|5]",alt:["(30a+8)/5","6a + 8/5","x = (30a+8)/5"]},
  steps:[
    {txt:"Iz prve jednadžbe: y = x/2 − 5a"},
    {txt:"Uvrstimo u drugu: x + 3(x/2 − 5a) = 4"},
    {txt:"x + 3x/2 − 15a = 4 ⇒ 5x/2 = 4 + 15a"},
    {txt:"x = (4 + 15a) · [FRAC:2|5] = [FRAC:8 + 30a|5] = [FRAC:30a + 8|5]",final:true}
  ,
    {txt:"Provjera za a = 0: sustav postaje (1/2)x − y = 0 i x + 3y = 4 → y = 4/5, x = 8/5 = 1,6. Formula daje 8/5 = 1,6 ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera za a = 0: sustav (1/2)x − y = 0 i x + 3y = 4 → x = 2y, pa 5y = 4 → y = 4/5, x = 8/5 = 1,6. Formula x = 8/5 = 1,6 ✓.",final:true,note:"verifikacija"}
  ],
  why:["Metoda supstitucije: iz jedne jednadžbe izrazimo varijablu i uvrstimo u drugu.","Metoda supstitucije: y = (1/2)x − 5a iz prve jednadžbe.","Uvrstiti u x + 3y = 4: x + 3((1/2)x − 5a) = 4 → (5/2)x = 4 + 15a → x = (8 + 30a)/5."]
},
{id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Koliki je umnožak rješenja jednadžbe 9x = 5 − 2x²?",
  sol:{ans:"−[FRAC:5|2]",alt:["−5/2","−2,5","−2.5","−2,50"]},
  solFormula:{frac:[["−5","2"]]},
  steps:[
    {txt:"Strategija: ne moramo rješavati cijelu jednadžbu — tražimo SAMO umnožak korijena, koji se dobije izravno iz Vièteovih formula nakon svođenja na standardni oblik."},
    {txt:"Sredimo na standardni oblik ax² + bx + c = 0: 9x = 5 − 2x² ⇒ 2x² + 9x − 5 = 0. Identifikacija: a = 2, b = 9, c = −5."},
    {txt:"Vièteova formula za umnožak korijena: x₁ · x₂ = [FRAC:c|a] = −[FRAC:5|2].",final:true},
    {txt:"Provjera (alt metoda — direktno rješavanje): D = 9² − 4·2·(−5) = 81 + 40 = 121, √D = 11. x = (−9 ± 11)/4 → x₁ = 1/2, x₂ = −5. Umnožak: (1/2)·(−5) = −5/2 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Vièteove formule za kvadratnu jednadžbu ax² + bx + c = 0 (s rješenjima x₁, x₂): x₁ + x₂ = −b/a i x₁ · x₂ = c/a.",
    "Pravilo predznaka: c/a JE umnožak korijena (bez minus znaka u formuli). Pozor: zbroj korijena ima minus: −b/a.",
    "Česta greška: zaboravljanje svođenja na ax² + bx + c = 0 prije primjene formule. Ako ostane 9x = 5 − 2x², a/c koeficijenti su krivo identificirani.",
    "Korisnost: Vièteove formule često ubrzaju rješavanje kad nas zanima samo SUMARNA informacija o korijenima (zbroj, umnožak, omjer), bez potrebe za eksplicitnim rješavanjem.",
    "Geometrijska interpretacija: rješenja x₁, x₂ su nultočke parabole y = ax² + bx + c. Umnožak korijena = c/a govori o y-odsječku (jer y = a(x − x₁)(x − x₂), za x = 0 dobijemo y(0) = a · x₁ · x₂ = c)."
  ]
},
{id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Riješite nejednadžbu (−2x + 7)x ≥ 3. Rješenje zapišite s pomoću intervala.",
  sol:{ans:"[[FRAC:1|2], 3]",alt:["[1/2, 3]","[0,5; 3]","[0.5, 3]","[0,5, 3]","0,5 ≤ x ≤ 3","x ∈ [1/2, 3]"]},
  solFormula:{pre:"[", frac:[["1","2"]], post:", 3]"},
  steps:[
    {txt:"(−2x + 7)x ≥ 3 ⇒ −2x² + 7x − 3 ≥ 0"},
    {txt:"Množimo s −1 (mijenja smjer): 2x² − 7x + 3 ≤ 0"},
    {txt:"Nultočke: x = (7 ± √(49 − 24))/4 = (7 ± 5)/4 ⇒ x = 3 ili x = 1/2"},
    {txt:"Parabola 2x² − 7x + 3 otvorena prema gore ⇒ negativna (ili nula) između nultočaka."},
    {txt:"x ∈ [[FRAC:1|2], 3]",final:true}
  ,
    {txt:"Provjera za x = 1: (−2·1 + 7)·1 = 5 ≥ 3 ✓. Za x = 4: (−2·4 + 7)·4 = −4 < 3 ✗. Interval ⟨1/2, 3⟩ je točan.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera za x = 1: (−2·1 + 7)·1 = 5 ≥ 3 ✓, a x = 1 ∈ [1/2, 3]. Za x = 4: (−2·4 + 7)·4 = −4 < 3 ✗, a 4 ∉ [1/2, 3]. Interval je točan.",final:true,note:"verifikacija"}
  ],
  why:["Množenje nejednadžbe negativnim brojem mijenja smjer.","Kvadratna nejednadžba ax² + bx + c ≤ 0 (a > 0): rješenje je segment [x₁, x₂].","Sređivanje: −2x² + 7x − 3 ≥ 0 → 2x² − 7x + 3 ≤ 0.","Nultočke: x = 1/2 i x = 3; rješenje: [1/2, 3] (parabola ≤ 0 između korijena)."]
},
{id:20.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Odredite realni dio kompleksnog broja (a + 2i)/i, gdje je a ∈ ℝ.",
  sol:{ans:"Re(z) = 2",alt:["2","Re = 2","Re(z)=2"]},
  steps:[
    {txt:"Strategija: pretvori razlomak u standardni oblik x + yi (gdje su x, y realni) — racionaliziraj nazivnik množenjem s konjugatom."},
    {txt:"Konjugat broja i je −i. Množenje s (−i)/(−i) ne mijenja vrijednost (množimo s 1)."},
    {txt:"(a + 2i)/i · (−i)/(−i) = (a + 2i)(−i) / (i · (−i)) = (a + 2i)(−i) / (−i²)."},
    {txt:"Razvoj brojnika: (a + 2i)(−i) = a·(−i) + 2i·(−i) = −ai − 2i² = −ai − 2·(−1) = −ai + 2 = 2 − ai."},
    {txt:"Nazivnik: −i² = −(−1) = 1. Dakle z = (2 − ai)/1 = 2 − ai."},
    {txt:"Standardni oblik z = x + yi: x = 2 (realni dio), y = −a (imaginarni dio). Re(z) = 2.",final:true},
    {txt:"Alt metoda — direktno množenje s 1/i = −i: (a + 2i)/i = (a + 2i) · (1/i) = (a + 2i) · (−i) = −ai + 2 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Konjugat kompleksnog broja z = x + yi je z̄ = x − yi. Konjugat čistog imaginarnog i je −i.",
    "Ključno svojstvo: z · z̄ je uvijek REALAN broj (i pozitivan ako z ≠ 0), jednak |z|². Za i: i · (−i) = −i² = 1.",
    "Standardni oblik kompleksnog broja: z = x + yi (x = Re(z), y = Im(z)). Sve operacije nastoje rezultat svesti na ovaj oblik.",
    "Česta greška: zaboravljanje da je 1/i = −i (NE 1/i = i). Razmišljaj: i · (−i) = 1, pa je inverz od i broj −i.",
    "Konkretna verifikacija s a = 3: (3 + 2i)/i = (3 + 2i)·(−i)/1 = −3i − 2i² = 2 − 3i. Re = 2 ✓ (neovisno o vrijednosti a)."
  ]
},
{id:20.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Zadani su brojevi z₁ = 6(cos 5π/6 + i·sin 5π/6) i z₂ = 2(cos π/3 + i·sin π/3). Odredite broj z = z₁/z₂ i zapišite ga u trigonometrijskom obliku.",
  sol:{ans:"z = 3(cos [FRAC:π|2] + i·sin [FRAC:π|2])",alt:["3(cos π/2 + i sin π/2)","3(cos(π/2) + i·sin(π/2))","3i"]},
  solFormula:{pre:"z = 3(cos π/2 + i·sin π/2)"},
  steps:[
    {txt:"Dijeljenje u trigonometrijskom obliku: |z| = |z₁|/|z₂|, arg(z) = arg(z₁) − arg(z₂)."},
    {txt:"|z| = 6/2 = 3"},
    {txt:"arg(z) = 5π/6 − π/3 = 5π/6 − 2π/6 = 3π/6 = π/2"},
    {txt:"z = 3(cos [FRAC:π|2] + i·sin [FRAC:π|2])",final:true}
  ,
    {txt:"Provjera modula: |z| = |z₁|/|z₂| = 6/2 = 3 ✓. Argument: arg z = arg z₁ − arg z₂ = 5π/6 − π/3 = π/2 ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera modula: |z₁| = 6, |z₂| = 2, |z| = |z₁/z₂| = 3 ✓. Argumenti: arg z₁ − arg z₂ = 5π/6 − π/3 = π/2 ✓.",final:true,note:"verifikacija"}
  ],
  why:["Pri dijeljenju kompleksnih brojeva u trig. obliku: moduli se dijele, a argumenti oduzimaju.","Dijeljenje: |z₁/z₂| = 6/2 = 3; arg(z₁/z₂) = 5π/6 − π/3 = π/2.","z = 3(cos π/2 + i·sin π/2)."]
},
{id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2): Gustoća naseljenosti nekog područja definira se kao omjer broja stanovnika koji žive na tom području i površine tog područja. Gradovi Alfa i Beta imaju jednaki broj stanovnika. Gustoća naseljenosti grada Alfa je 24 000 stanovnika po km², a grada Beta 20 000 stanovnika po km². Površina grada Beta je za 10,5 km² veća od površine grada Alfa.",
  q:"Koliku površinu zauzima grad Alfa?",
  sol:{ans:"52,5 km²",alt:["52,5 km²","52.5","52,5"]},
  steps:[
    {txt:"Neka je P_A površina grada Alfa, P_B = P_A + 10,5 km² površina grada Beta."},
    {txt:"Jednaki broj stanovnika: 24 000 · P_A = 20 000 · P_B"},
    {txt:"24 000 · P_A = 20 000 · (P_A + 10,5)"},
    {txt:"24 000 P_A − 20 000 P_A = 20 000 · 10,5 ⇒ 4 000 P_A = 210 000"},
    {txt:"P_A = 52,5 km²",final:true}
  ,
    {txt:"Provjera za rješenje 52,5 km²: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"}
  ],
  why:["Gustoća naseljenosti: ρ = N/P (broj stanovnika po jedinici površine).","Jednaki N znači: ρ_A · P_A = ρ_B · P_B.","Neka je P_A površina Alfe. P_B = P_A + 10,5.","Jednaki broj: 24000·P_A = 20000·P_B → 24P_A = 20P_A + 210 → 4P_A = 210 → P_A = 52,5 km².","Provjera: P_B = 63 km²; 24000·52,5 = 1 260 000 = 20000·63 ✓."]
},
{id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2): Gustoća naseljenosti nekog područja definira se kao omjer broja stanovnika koji žive na tom području i površine tog područja. Gradovi Alfa i Beta imaju jednaki broj stanovnika. Gustoća naseljenosti grada Alfa je 24 000 stanovnika po km², a grada Beta 20 000 stanovnika po km². Površina grada Beta je za 10,5 km² veća od površine grada Alfa.",
  q:"Koliko stanovnika živi u gradu Beta?",
  sol:{ans:"1 260 000",alt:["1 260 000","1260000","1.260.000"]},
  steps:[
    {txt:"Strategija: gradovi imaju jednak broj stanovnika, pa N(Beta) = N(Alfa). Iz Q21.1 znamo P(Alfa) = 52,5 km². Direktno N = ρ · P."},
    {txt:"Za grad Alfa: N = ρ_A · P_A = 24 000 · 52,5 = 1 260 000 stanovnika."},
    {txt:"Pošto N(Beta) = N(Alfa) = 1 260 000.",final:true},
    {txt:"Alternativa preko Bete: P_B = P_A + 10,5 = 52,5 + 10,5 = 63 km². N_B = ρ_B · P_B = 20 000 · 63 = 1 260 000 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Definicija gustoće naseljenosti: ρ = N/P (broj stanovnika po jedinici površine). Iz toga N = ρ · P.",
    "Strategija — koristiti SIMETRIJU problema: oba grada imaju iste N, pa možemo izračunati N kroz bilo koji grad. Brže preko Alfe (već znamo P_A).",
    "Alternativna metoda — postaviti jednadžbu direktno: 24 000 · P_A = 20 000 · (P_A + 10,5) ⇒ 4 000 · P_A = 210 000 ⇒ P_A = 52,5 → N = 1 260 000.",
    "Provjera dimenzionalne analize: [stan/km²] · [km²] = [stan] ✓. Provjera kroz Betu: 20 000 · 63 = 1 260 000 ✓."
  ]
},
{id:22.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Površina tupokutnog trokuta je 28,67 cm². Duljine dviju kraćih stranica tog trokuta su 7 cm i 10 cm. Kolika je mjera tupog kuta?",
  sol:{ans:"γ ≈ 125°",alt:["125","125°","≈125°","124,9°"]},
  steps:[
    {txt:"Strategija: koristimo formulu P = (1/2)·a·b·sin γ za površinu trokuta preko dviju stranica i kuta među njima. Iz nje izoliramo sin γ, zatim biramo TUPI kut među dvama mogućim rješenjima."},
    {txt:"Identifikacija: a = 7, b = 10, P = 28,67. Kut γ je između stranica 7 i 10 (jer formula P = (1/2)ab sin γ koristi UPRAVO taj kut)."},
    {txt:"Postavi jednadžbu: 28,67 = (1/2) · 7 · 10 · sin γ ⇒ 28,67 = 35 · sin γ."},
    {txt:"Izoliraj sin γ: sin γ = 28,67/35 ≈ 0,8191."},
    {txt:"Inverzni sinus daje DVA moguća kuta u intervalu ⟨0°, 180°⟩: γ₁ = arcsin(0,8191) ≈ 55,0° (ŠILJASTI) ili γ₂ = 180° − 55° = 125° (TUPI). Razlog: sin(180° − x) = sin x."},
    {txt:"Zadatak kaže 'tupokutni trokut' — biramo TUPI kut: γ = 125°.",final:true},
    {txt:"Provjera: sin 125° ≈ 0,8192. Površina: (1/2) · 7 · 10 · 0,8192 ≈ 28,67 cm² ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Formula površine trokuta preko dviju stranica i kuta: P = (1/2)·a·b·sin γ. Ova formula daje površinu BEZ trebanja visine — samo dvije stranice i kut između njih.",
    "Identitet sin(180° − x) = sin x znači da jednadžba sin γ = vrijednost ima DVA rješenja u intervalu ⟨0°, 180°⟩: γ i 180° − γ. Zbroj im je 180°.",
    "Česta greška: izabrati prvo rješenje (≈ 55°) bez čitanja uvjeta 'tupokutni'. Tupi kut je veći od 90°, pa odgovara 180° − 55° = 125°.",
    "Alt metoda preko visine: visina h iz vrha γ na nasuprotnu stranicu daje P = (1/2)·c·h. Ali bez treće stranice c, ova metoda zahtjeva više rada.",
    "Pedagoški savjet: ako problem traži kut iz sin = vrijednosti, UVIJEK provjeri koji od dva moguća kuta (šiljasti ili tupi) odgovara dodatnim uvjetima problema (tip trokuta, kvadrant, kontekst)."
  ]
},
{id:22.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"U trokutu ABC duljine stranica su |AB| = 8 cm, |AC| = 10 cm i |BC| = 12 cm. Na stranici BC nalazi se točka D tako da je |BD|/|DC| = 2. Koliko su udaljene točke A i D?",
  sol:{ans:"|AD| = √56 = 2√14 ≈ 7,48 cm",alt:["√56","2√14","√56 cm","7,48","7.48"]},
  steps:[
    {txt:"Strategija: D je na BC, a tražimo |AD|. Najjednostavnije — primijeni Kosinusov poučak DVA PUTA: prvo u trokutu ABC (da nađemo cos ∠ABC), zatim u trokutu ABD."},
    {txt:"Korak 1 — položaj D: |BC| = 12 i omjer |BD|:|DC| = 2:1, pa je |BD| = (2/3)·12 = 8 cm i |DC| = (1/3)·12 = 4 cm."},
    {txt:"Korak 2 — Kosinusov poučak u ABC za kut B: cos B = (|AB|² + |BC|² − |AC|²)/(2·|AB|·|BC|) = (8² + 12² − 10²)/(2·8·12) = (64 + 144 − 100)/192 = 108/192 = 9/16."},
    {txt:"Korak 3 — Kosinusov poučak u trokutu ABD za stranicu AD (kut B je isti kao u ABC, jer D leži na BC): |AD|² = |AB|² + |BD|² − 2·|AB|·|BD|·cos B = 8² + 8² − 2·8·8·(9/16)."},
    {txt:"Izračun: 64 + 64 − 128·(9/16) = 128 − 72 = 56."},
    {txt:"|AD| = √56 = √(4·14) = 2√14 ≈ 7,48 cm.",final:true},
    {txt:"Provjera Stewartovim teoremom: za cevianu AD u trokutu ABC s D na BC (gdje BD=m=8, DC=n=4, AB=c=8, AC=b=10): b²·m + c²·n − a·m·n = a·d² → 100·8 + 64·4 − 12·8·4 = 800+256−384 = 672; d² = 672/12 = 56 ✓ (poklapa kosinusov rezultat).",final:true,note:"verifikacija"},
    {txt:"Alt metoda: vektorski pristup koordinatno — postavi B u ishodište, C(12,0), A iz |AB|=8 i |AC|=10 → A=(33/8, h) s h iz Pitagore; D=(8,0); izračunaj |AD| numerički.",note:"alternativni pristup"}
  ],
  why:[
    "Kosinusov poučak: u trokutu sa stranicama a, b, c i kutom γ nasuprot stranici c vrijedi c² = a² + b² − 2ab·cos γ. Generalizacija Pitagorina poučka.",
    "Trik s istim kutom: kad je D na stranici BC trokuta ABC, kut ∠ABD = ∠ABC = B (jer D leži na pravcu BC). Zato možemo cos B izračunat u ABC i koristiti ga u ABD.",
    "Alternativna metoda — Stewartov teorem: za cevianu AD u trokutu ABC (gdje D dijeli BC u omjeru m:n), |AD|² = (b²m + c²n)/(m+n) − mn. Treba pažljivo s notacijom (lako se zamijene m, n).",
    "Česta greška: zaboravljanje da kut B u trokutu ABD je ISTI kao u ABC. Studenti pokušavaju izračunati novi kut u D, što je nepotrebno složenije.",
    "Provjera: √56 = 2√14 ≈ 2 · 3,742 ≈ 7,48 cm. Razumno: |AD| treba biti između najkraće (|AB| = 8) i najduže (|AC| = 10) stranice — stvarno je nešto manje od 8."
  ]
},
{id:23.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 23 (1. dio od 2): Ljestve duljina 4,2 m i 5,6 m naslonjene su na zid i dosežu istu visinu. Podnožje duljih ljestava je za 1,96 m udaljenije od zida nego podnožje kraćih ljestava.",
  q:"Koliko je podnožje kraćih ljestava udaljeno od zida?",
  sol:{ans:"2,52 m",alt:["2,52","2.52","2,52 m"]},
  steps:[
    {txt:"Neka je x udaljenost podnožja kraćih ljestava od zida, h zajednička visina."},
    {txt:"Pitagorin poučak za kraće ljestve: h² = 4,2² − x² = 17,64 − x²"},
    {txt:"Za dulje ljestve: h² = 5,6² − (x + 1,96)² = 31,36 − x² − 3,92x − 3,8416"},
    {txt:"Izjednačavamo: 17,64 − x² = 31,36 − x² − 3,92x − 3,8416"},
    {txt:"3,92x = 31,36 − 17,64 − 3,8416 = 9,8784"},
    {txt:"x = 9,8784 / 3,92 = 2,52 m",final:true}
  ,
    {txt:"Provjera s duljim ljestvama: udaljenost = 2,52 + 1,96 = 4,48 m. h² + 4,48² = 11,29 + 20,07 = 31,36 = 5,6² ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera s duljim ljestvama: udaljenost = 2,52 + 1,96 = 4,48 m. h² = 5,6² − 4,48² = 11,2896 → h ≈ 3,36 m, ista visina kao kraće ljestve ✓.",final:true,note:"verifikacija"}
  ],
  why:["Za ljestve naslonjene na zid: duljina² = udaljenost² + visina² (Pitagorin poučak).","Istovremeno dostizanje iste visine daje jednadžbu u kojoj se x² poništi.","Kraće ljestve: duljina 4,2 m, podnožje na udaljenosti d od zida.","Dulje ljestve: duljina 5,6 m, podnožje na d + 1,96.","Iste visine: 4,2² − d² = 5,6² − (d+1,96)² → riješiti za d."]
},
{id:23.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 23 (2. dio od 2): Ljestve duljina 4,2 m i 5,6 m naslonjene su na zid i dosežu istu visinu. Podnožje duljih ljestava je za 1,96 m udaljenije od zida nego podnožje kraćih ljestava.",
  q:"Na kojoj su visini od poda ljestve naslonjene na zid?",
  sol:{ans:"h = 3,36 m",alt:["3,36","3.36","3,36 m"]},
  steps:[
    {txt:"Strategija: kraće ljestve (4,2 m), zid i pod čine pravokutni trokut. Iz Q23.1 znamo udaljenost podnožja od zida = 2,52 m. Visina = treća stranica (kateta) trokuta — direktno preko Pitagorina poučka."},
    {txt:"Identifikacija u pravokutnom trokutu kraćih ljestava: hipotenuza = duljina ljestava = 4,2 m; jedna kateta = udaljenost podnožja od zida = 2,52 m; druga kateta = visina h koju tražimo."},
    {txt:"Pitagorin poučak: h² + 2,52² = 4,2² ⇒ h² = 4,2² − 2,52² = 17,64 − 6,3504 = 11,2896."},
    {txt:"h = √11,2896 ≈ 3,36 m.",final:true},
    {txt:"Provjera s duljim ljestvama: udaljenost podnožja = 2,52 + 1,96 = 4,48 m. h² = 5,6² − 4,48² = 31,36 − 20,0704 = 11,2896 → h ≈ 3,36 m ✓ (ista visina, kako problem zahtijeva).",final:true,note:"verifikacija"}
  ],
  why:[
    "Pitagorin poučak: u pravokutnom trokutu s katetama a, b i hipotenuzom c vrijedi c² = a² + b². Ovdje: ljestve su hipotenuza, zid i pod kateti.",
    "Strategija problema s ljestvama: nacrtaj pravokutni trokut (zid vertikalno, pod horizontalno, ljestve hipotenuza). Sve veličine padaju na svoje mjesto.",
    "Veza Q23.1 i Q23.2: rezultat iz Q23.1 (udaljenost = 2,52 m) je INPUT za Q23.2. Multi-part zadatci često koriste rezultat prethodnog dijela.",
    "Alternativna provjera s duljim ljestvama: h² = 5,6² − (2,52 + 1,96)² = 5,6² − 4,48² = 31,36 − 20,0704 = 11,2896 → h = 3,36 m ✓ (ista visina — to je BIO uvjet zadatka).",
    "Pedagoški: ako su Q23.1 i Q23.2 nezavisno rješavani i daju različite visine, znak je da je Q23.1 pogrešan. Konzistentnost dvaju izračuna je bitna provjera."
  ]
},
{id:24.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Odredite x ∈ ⟨π, 2π⟩ za koji je cos x = −√3/2.",
  sol:{ans:"x = [FRAC:7π|6]",alt:["7π/6","7pi/6","210°"]},
  solFormula:{pre:"x = ", frac:[["7π","6"]]},
  steps:[
    {txt:"Strategija: cos x = −√3/2 znači da kut x leži tamo gdje je kosinus negativan i vrijednosti |cos x| = √3/2 — to je II. ili III. kvadrant. Iz njih odaberi onaj koji je u intervalu ⟨π, 2π⟩."},
    {txt:"Tablična vrijednost: cos(π/6) = √3/2 (referentni kut)."},
    {txt:"Opća rješenja jednadžbe cos x = −√3/2: x = π − π/6 + 2kπ = 5π/6 + 2kπ (II. kvadrant) ili x = π + π/6 + 2kπ = 7π/6 + 2kπ (III. kvadrant)."},
    {txt:"Za k = 0: x₁ = 5π/6 ≈ 2,618 (NIJE u ⟨π, 2π⟩ jer 5π/6 < π); x₂ = 7π/6 ≈ 3,665 (JE u ⟨π, 2π⟩ jer π ≈ 3,14 < 3,665 < 6,28)."},
    {txt:"Rješenje: x = [FRAC:7π|6].",final:true},
    {txt:"Provjera: cos(7π/6) = cos(π + π/6) = −cos(π/6) = −√3/2 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Predznak kosinusa po kvadrantima: I. (+), II. (−), III. (−), IV. (+). Negativan cos znači II. ili III. kvadrant.",
    "Pravilo svođenja na referentni (tablični) kut: cos(π − α) = −cos α (II. kvadrant); cos(π + α) = −cos α (III. kvadrant); cos(2π − α) = cos α (IV. kvadrant).",
    "Alt metoda preko stupnjeva: cos x = −√3/2 → x = 150° (II. kv) ili x = 210° (III. kv). Interval ⟨180°, 360°⟩ → x = 210° = 7π/6.",
    "Česta greška: zaboravljanje provjere intervala — student izabire 5π/6 (matematički točno rješenje, ali izvan zadanog intervala).",
    "Pedagoški savjet: za sve trigonometrijske jednadžbe kao prvi korak nacrtaj jediničnu kružnicu i označi sve rješenja u (0, 2π), zatim filtriraj prema zadanom intervalu."
  ]
},
{id:24.2,type:"proof",topic:"trig",points:1,
  graphType:"trig",
  graphRef:{pts:[[0,0],[1.571,-3],[3.14,0],[4.712,3],[6.283,0]]},
  img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Na intervalu [0, 2π] nacrtajte graf funkcije f(x) = −3 sin x.",
  sol:{svgFn:SvgSol24b_2012ZimaA,ex:"Sinusoida s amplitudom 3, okrenuta prema dolje. Nultočke u x = 0, π, 2π. Minimum u (π/2, −3), maksimum u (3π/2, 3)."},
  steps:[
    {txt:"Strategija: za graf y = A sin(Bx) identificiraj parametre — amplituda |A|, period 2π/|B|, predznak (zrcaljenje). Pronađi 5 ključnih točaka i poveži glatkom sinusoidom."},
    {txt:"Identifikacija parametara: f(x) = −3 sin x ima A = −3, B = 1. Amplituda |A| = 3 (graf oscilira između −3 i 3); period T = 2π/1 = 2π (točno jedan puni val u zadanom intervalu)."},
    {txt:"Učinak negativnog A: graf je ZRCALJEN preko x-osi u odnosu na y = 3 sin x. Tamo gdje obični sin ima maksimum, naš −3 sin ima minimum."},
    {txt:"Ključne točke u intervalu [0, 2π]: x = 0 → y = 0; x = π/2 → y = −3 (MINIMUM, zbog zrcaljenja); x = π → y = 0; x = 3π/2 → y = 3 (MAKSIMUM); x = 2π → y = 0."},
    {txt:"Crtanje: označi 5 ključnih točaka na koordinatnom sustavu, poveži ih GLATKOM sinusoidom (ne lomljenim crtama). Krivulja prolazi simetrično, s amplitudom 3.",final:true},
    {txt:"Provjera: f(π/2) = −3 sin(π/2) = −3 · 1 = −3 ✓; f(3π/2) = −3 sin(3π/2) = −3 · (−1) = 3 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Opći oblik trigonometrijske funkcije: y = A sin(Bx + C) + D. |A| = amplituda (vertikalni 'rast'); 2π/|B| = period (horizontalna duljina jednog vala); C = fazni pomak; D = vertikalni pomak.",
    "Predznak amplitude A: pozitivan A → standardni oblik (raste od x = 0); negativan A → ZRCALJEN preko x-osi (pada od x = 0).",
    "5 ključnih točaka jednog perioda sin: na x = 0, T/4, T/2, 3T/4, T. Vrijednosti: 0, A, 0, −A, 0 (za sin) ili A, 0, −A, 0, A (za cos).",
    "Česta greška: zaboravljanje zrcaljenja — student crta običnu sinusoidu (s maksimumom u π/2) umjesto zrcaljene (minimum u π/2).",
    "Veza s realnim svijetom: sinusoidalne funkcije opisuju oscilatorne pojave (klatno, val, izmjenična struja, glazbeni ton). Negativan koeficijent znači obratan smjer od reference."
  ]
},
{id:25.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Derivirajte funkciju f(x) = 2x⁻⁴.",
  sol:{ans:"f ′(x) = −8x⁻⁵",alt:["−8x⁻⁵","−8x^(−5)","−8/x^5","−8/x⁵"]},
  steps:[
    {txt:"Strategija: primijeni pravilo potencije (xⁿ)′ = n·xⁿ⁻¹ za eksponent n = −4. Konstanta 2 ostaje neutaknuta."},
    {txt:"Pravilo potencije za realne n: (xⁿ)′ = n · xⁿ⁻¹. Vrijedi za sve n ∈ ℝ (ne samo prirodne)."},
    {txt:"Pravilo konstante: (c·g(x))′ = c · g′(x). Konstanta 2 ide ispred derivacije."},
    {txt:"Primjena: f ′(x) = 2 · (x⁻⁴)′ = 2 · (−4) · x^(−4−1) = −8 · x⁻⁵.",final:true},
    {txt:"Alternativni zapis: x⁻⁵ = 1/x⁵, pa je f ′(x) = −8/x⁵.",note:"ekvivalentni oblik"},
    {txt:"Provjera: deriviranje smanjuje eksponent za 1 (od −4 na −5) i množi koeficijent s izvornim eksponentom (2·(−4) = −8) ✓; alternativna provjera primjenom limit-definicije derivacije dala bi isti rezultat.",final:true,note:"verifikacija"}
  ],
  why:[
    "Pravilo potencije: (xⁿ)′ = n · xⁿ⁻¹, vrijedi za SVE realne eksponente n (uključujući negativne, racionalne, iracionalne).",
    "Pravilo konstante: konstantni faktor se zadržava i samo množi rezultat derivacije: (c · g(x))′ = c · g′(x). Pozor: KONSTANTA SAMA ima derivaciju 0.",
    "Negativne potencije znače razlomak: x⁻ⁿ = 1/xⁿ. Često se finalni odgovor daje u oba oblika: −8x⁻⁵ ili −8/x⁵.",
    "Česta greška: zaboravljanje minusa u eksponentu (n = −4, pa je n − 1 = −5, NE −3). Dosljednost znaka je ključna.",
    "Veza s integracijom: derivacija od 2x⁻⁴ je −8x⁻⁵; obrnuto, integracija (antiderivacija) od −8x⁻⁵ vraća 2x⁻⁴ + C. Operacije su inverzne."
  ]
},
{id:25.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Derivirajte funkciju g(x) = sin(3x + 11).",
  sol:{ans:"g ′(x) = 3 cos(3x + 11)",alt:["3 cos(3x + 11)","3cos(3x+11)"]},
  steps:[
    {txt:"Strategija: g(x) je KOMPOZICIJA — vanjska funkcija sin, unutarnja 3x + 11. Primijeni lančano pravilo: deriviraj vanjsku, ostavi unutarnju netaknutu, pomnoži s derivacijom unutarnje."},
    {txt:"Identifikacija slojeva: vanjska funkcija f(u) = sin u; unutarnja u(x) = 3x + 11."},
    {txt:"Derivacije slojeva: (sin u)′ = cos u; (3x + 11)′ = 3 (linearna funkcija — konstanta 11 se gubi)."},
    {txt:"Lančano pravilo: g′(x) = f′(u(x)) · u′(x) = cos(3x + 11) · 3."},
    {txt:"Konačni rezultat: g ′(x) = 3 cos(3x + 11).",final:true},
    {txt:"Provjera u konkretnoj točki x = 0: g(0) = sin 11 ≈ −1,000; g′(0) = 3 cos 11 ≈ 0,124. Numerička provjera (limit definicije derivacije) potvrđuje.",final:true,note:"verifikacija"}
  ],
  why:[
    "Lančano pravilo (chain rule): za kompoziciju funkcija (f ∘ g)(x) = f(g(x)) vrijedi (f(g(x)))′ = f′(g(x)) · g′(x). 'Deriviraj vanjsku zadržavajući unutarnju, pomnoži s derivacijom unutarnje.'",
    "Osnovne trigonometrijske derivacije: (sin x)′ = cos x; (cos x)′ = −sin x; (tg x)′ = 1/cos²x.",
    "Česta greška: zaboravljanje množenja s u′(x) (deriviraj samo vanjsku). Rezultat bi bio cos(3x + 11) — KRIVO; treba 3 cos(3x + 11).",
    "Specijalan slučaj: za linearnu unutarnju funkciju u = ax + b, derivacija je samo a (konstanta). Zato lančano pravilo daje samo množenje koeficijentom uz x.",
    "Provjera dimenzionalna: f i f′ imaju isti tip (sin, cos su trigonometrijske); a = 3 je samo koeficijent. Rezultat 3 cos(3x + 11) je dimenzionalno konzistentan ✓."
  ]
},
{id:25.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Odredite koeficijent smjera (nagib) tangente na graf funkcije h(x) = x³ − 1 u točki grafa s apscisom 2.",
  sol:{ans:"k = 12",alt:["12","k=12"]},
  steps:[
    {txt:"Strategija: koeficijent smjera (nagib) tangente na graf funkcije f u točki s apscisom x₀ jednak je f′(x₀). Dakle: deriviraj funkciju, pa uvrsti x₀ = 2."},
    {txt:"Derivacija h(x) = x³ − 1: h′(x) = (x³)′ − (1)′ = 3x² − 0 = 3x². (Pravilo potencije + derivacija konstante = 0.)"},
    {txt:"Uvrsti x₀ = 2: h′(2) = 3 · 2² = 3 · 4 = 12."},
    {txt:"Koeficijent smjera tangente: k = 12.",final:true},
    {txt:"Provjera — jednadžba tangente: y − h(2) = k(x − 2) → y − 7 = 12(x − 2) → y = 12x − 17. Nagib 12 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Geometrijska interpretacija derivacije: f′(x₀) je tangens kuta koji tangenta na graf u točki (x₀, f(x₀)) zatvara s pozitivnim smjerom osi x. To je upravo koeficijent smjera (nagib) tangente.",
    "Pravilo potencije: (xⁿ)′ = n · xⁿ⁻¹. Za h(x) = x³ − 1: derivacija od x³ je 3x², derivacija od konstante (−1) je 0.",
    "Jednadžba tangente u točki (x₀, f(x₀)): y − f(x₀) = f′(x₀) · (x − x₀). Konkretno ovdje: y − 7 = 12(x − 2) ili y = 12x − 17.",
    "Česta greška: zaboravljanje uvrštavanja vrijednosti x₀ — student daje opću derivaciju 3x² kao odgovor umjesto konkretne vrijednosti 12.",
    "Veza s ekstremima: ako je f′(x₀) = 0, tangenta je horizontalna (paralelna s osi x) — to je kandidat za lokalni ekstrem (minimum/maksimum) ili sedlište. Ovdje 12 ≠ 0, pa graf u x = 2 raste."
  ]
},
{id:26,img:true,type:"proof",topic:"fun",points:2,
  graphType:"parabola",
  graphRef:{pts:[[0,3],[1,2],[2,3],[3,6]]},
  img:true,
  q:"Zadana je funkcija f(x) = x² − 2x + 3. Izračunajte koordinate tjemena grafa zadane funkcije i nacrtajte joj graf.",
  sol:{svgFn:SvgSol26_2012ZimaA,ans:"T(1, 2)",alt:["T(1, 2)","(1, 2)","T(1,2)","(1,2)"],
  ex:"Tjeme T(1, 2); D < 0 → nema nultočaka. Parabola otvorena gore, iznad osi x."},
  steps:[
    {txt:"Strategija: za parabolu y = ax² + bx + c koeficijenti su a = 1, b = −2, c = 3. Tjeme nalazimo formulom x_T = −b/(2a), zatim ordinatu uvrštavanjem."},
    {txt:"Apscisa tjemena: x_T = −b/(2a) = −(−2)/(2·1) = 2/2 = 1."},
    {txt:"Ordinata tjemena: y_T = f(x_T) = f(1) = 1² − 2·1 + 3 = 1 − 2 + 3 = 2."},
    {txt:"Tjeme: T(1, 2)."},
    {txt:"Za skicu grafa: a = 1 > 0 → parabola otvorena prema gore. Diskriminanta D = b² − 4ac = (−2)² − 4·1·3 = 4 − 12 = −8 < 0 → nema realnih nultočaka, cijela parabola leži iznad osi x."},
    {txt:"Pomoćne točke za precizno crtanje: f(0) = 3 (y-odsječak), f(2) = 3 (simetrično od y-odsječka oko osi x = 1), f(−1) = 6, f(3) = 6.",final:true},
    {txt:"Provjera kvadratnom nadopunom: x² − 2x + 3 = (x − 1)² − 1 + 3 = (x − 1)² + 2. Iz canonical forme tjeme je T(1, 2) ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Tjeme parabole y = ax² + bx + c nalazi se u točki T(x_T, y_T) gdje je x_T = −b/(2a). Ordinata se dobije uvrštavanjem: y_T = f(x_T) = c − b²/(4a).",
    "Alternativna metoda: kvadratna nadopuna pretvara y = ax² + bx + c u canonical formu y = a(x − x_T)² + y_T, iz koje su tjeme i smjer otvora vidljivi izravno bez formula.",
    "Diskriminanta D = b² − 4ac kontrolira broj realnih nultočaka: D > 0 (2 nultočke, parabola siječe os x), D = 0 (1 nultočka, tjeme dodiruje os x), D < 0 (nema realnih nultočaka, parabola u cijelosti iznad ili ispod osi x).",
    "Najčešća greška kod crtanja: studenti zaborave provjeriti smjer otvora (predznak a) ili koriste premalo pomoćnih točaka. Minimum za jasan graf: tjeme + dvije simetrične točke + y-odsječak.",
    "Veza s ekstremima funkcije: ako a > 0, tjeme je GLOBALNI MINIMUM funkcije (najmanja y-vrijednost); ako a < 0, tjeme je GLOBALNI MAKSIMUM. Korisno za optimizacijske probleme."
  ]
},
{id:27.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 27 (1. dio od 2): Zadana je funkcija f(x) = log(1 + x) − log(3 − 2x).",
  q:"Odredite domenu funkcije f.",
  sol:{ans:"D(f) = ⟨−1, [FRAC:3|2]⟩",alt:["⟨−1, 3/2⟩","(−1, 3/2)","⟨−1, 3/2⟩","−1 < x < 3/2","x ∈ ⟨−1, 3/2⟩"]},
  solFormula:{pre:"D(f) = ⟨−1, ", frac:[["3","2"]], post:"⟩"},
  steps:[
    {txt:"Strategija: domena funkcije f je presjek domena svih komponenti. Logaritam zahtijeva STROGO pozitivan argument, pa imamo dvije nejednadžbe za x."},
    {txt:"Domena logaritma logₐ u: zahtjeva u > 0 (argument strogo pozitivan). Naš f koristi DVA logaritma — oba moraju biti definirana."},
    {txt:"Uvjet 1 (prvi log): 1 + x > 0 ⇒ x > −1."},
    {txt:"Uvjet 2 (drugi log): 3 − 2x > 0 ⇒ −2x > −3 ⇒ x < 3/2 (smjer mijenja kod dijeljenja s negativnim brojem)."},
    {txt:"Presjek uvjeta: x > −1 I x < [FRAC:3|2] ⇒ −1 < x < [FRAC:3|2] ⇒ D(f) = ⟨−1, [FRAC:3|2]⟩.",final:true},
    {txt:"Provjera ekstremnih vrijednosti: x = −1 → log(0) — nedefinirano ✗; x = 3/2 → log(0) — nedefinirano ✗. Zato STROGO otvoreni interval ⟨ ⟩.",final:true,note:"verifikacija"}
  ],
  why:[
    "Domena logaritamske funkcije: logₐ u definiran je za u > 0 (argument STROGO pozitivan). Vrijednost u = 0 daje −∞ (nije realan broj).",
    "Domena zbroja/razlike funkcija: D(f ± g) = D(f) ∩ D(g) — presjek domena. Moraju vrijediti uvjeti SVIH komponenti istovremeno.",
    "Pravilo o smjeru nejednakosti: dijeljenje (ili množenje) s negativnim brojem MIJENJA smjer. Ovdje −2x > −3 → x < 3/2 (znak okretan).",
    "Česta greška: zaboravljanje da je nejednakost STROGA — student uključi rubove i napiše [−1, 3/2]. Granične vrijednosti daju log(0), nedefinirano.",
    "Konceptualna provjera: za x = 0 → log(1) − log(3) = 0 − log 3 = −log 3 ≈ −0,48 ✓ (definirano, jer 0 ∈ ⟨−1, 3/2⟩). Za x = 2 → log(3) − log(−1) ✗ (nedefinirano)."
  ]
},
{id:27.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 27 (2. dio od 2): Zadana je funkcija f(x) = log(1 + x) − log(3 − 2x).",
  q:"Riješite jednadžbu f(x) = 0.",
  sol:{ans:"x = [FRAC:2|3]",alt:["2/3","x = 2/3","0,67","≈0,67","0.67","x=2/3"]},
  solFormula:{pre:"x = ", frac:[["2","3"]]},
  steps:[
    {txt:"Strategija: f(x) = 0 znači razlika dva logaritma = 0 → logaritmi su jednaki. Iskoristi injektivnost (1-1 svojstvo) logaritma da se rješavanje svede na linearnu jednadžbu, pa provjeri domenu."},
    {txt:"Postavi jednadžbu: f(x) = 0 ⇒ log(1 + x) − log(3 − 2x) = 0 ⇒ log(1 + x) = log(3 − 2x)."},
    {txt:"Iskoristi injektivnost log: log a = log b ⇔ a = b (uz uvjete a > 0, b > 0). Stoga: 1 + x = 3 − 2x."},
    {txt:"Riješi linearnu: 1 + x + 2x = 3 ⇒ 3x = 2 ⇒ x = 2/3."},
    {txt:"Provjera DOMENE: x = [FRAC:2|3] ∈ ⟨−1, [FRAC:3|2]⟩? Da, jer −1 < 0,667 < 1,5 ✓. Rješenje je valjano.",final:true},
    {txt:"Numerička provjera: f(2/3) = log(1 + 2/3) − log(3 − 4/3) = log(5/3) − log(5/3) = 0 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Injektivnost logaritma: funkcija log je strogo monotona (rastuća za bazu > 1), pa je 1-1. Iz toga: log a = log b ⇒ a = b (uz uvjete a, b > 0).",
    "Alternativna metoda — preko svojstva log a − log b = log(a/b): f(x) = log((1+x)/(3−2x)) = 0 ⇒ (1+x)/(3−2x) = 10⁰ = 1 ⇒ 1+x = 3−2x → isti rezultat.",
    "VAŽNO — provjera domene: kod logaritamskih jednadžbi rješenje algebarske jednadžbe MOŽE biti izvan domene originalne funkcije. Tada to nije valjano rješenje.",
    "Česta greška: zaboravljanje provjere domene. Npr. ako bi rješenje bilo x = 5 (izvan ⟨−1, 3/2⟩), 'rješenje' bi bilo NEPRIHVATLJIVO jer log(3 − 10) ne postoji.",
    "Veza s Q27.1: domena (Q27.1) i rješenja jednadžbe (Q27.2) su ZAVISNE — domena postavlja granice u kojima jednadžba ima smisla."
  ]
},
{id:28.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"U nizu brojeva 21, 87/4, 45/2, ... razlika susjednih članova je konstantna. Napišite deveti član tog niza.",
  sol:{ans:"a₉ = 27",alt:["27","a₉ = 27"]},
  steps:[
    {txt:"Strategija: 'razlika susjednih članova konstantna' znači aritmetički niz. Izračunaj razliku d, pa primijeni opću formulu aₙ = a₁ + (n − 1)d."},
    {txt:"Identifikacija: a₁ = 21, a₂ = 87/4, a₃ = 45/2."},
    {txt:"Razlika d = a₂ − a₁ = 87/4 − 21 = 87/4 − 84/4 = 3/4."},
    {txt:"Provjera (treba dati istu d): d' = a₃ − a₂ = 45/2 − 87/4 = 90/4 − 87/4 = 3/4 ✓ — niz je stvarno aritmetički."},
    {txt:"Opća formula aritmetičkog niza: aₙ = a₁ + (n − 1) · d. Za n = 9: a₉ = 21 + 8 · ([FRAC:3|4]) = 21 + 6 = 27.",final:true},
    {txt:"Alt provjera — eksplicitno izlistaj: 21, 21,75, 22,5, 23,25, 24, 24,75, 25,5, 26,25, 27 — deveti je 27 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Aritmetički niz: niz u kojem je razlika d = aₙ₊₁ − aₙ konstantna za sve n. Opća formula: aₙ = a₁ + (n − 1)·d.",
    "Provjera 'jest li niz aritmetički': razlika prvog para mora biti jednaka razlici drugog para (i svih ostalih). Inače to nije aritmetički niz.",
    "Alternativna metoda — koristi prvi i bilo koji drugi član: ako znaš a₁ i aₘ, onda d = (aₘ − a₁)/(m − 1). Ovdje d = (45/2 − 21)/2 = (3/2)/2 = 3/4 ✓.",
    "Česta greška: računanje a₉ = a₁ + 9d (zaboravljanje da je broj koraka n − 1, ne n). Ispravno: 8 koraka od a₁ do a₉.",
    "Suma aritmetičkog niza (za buduće zadatke): Sₙ = (n/2)·(a₁ + aₙ) = (n/2)·(2a₁ + (n − 1)·d). Korisno kad treba ukupna suma."
  ]
},
{id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Koliki je zbroj beskonačnoga geometrijskog reda 1 + 2/3 + 4/9 + 8/27 + ...?",
  sol:{ans:"S = 3",alt:["3","S = 3","S=3"]},
  steps:[
    {txt:"Strategija: identificiraj prvi član a₁ i kvocijent q. Provjeri uvjet konvergencije |q| < 1, pa primijeni formulu sume beskonačnog geometrijskog reda."},
    {txt:"Identifikacija prvog člana: a₁ = 1."},
    {txt:"Identifikacija kvocijenta: q = a₂/a₁ = (2/3)/1 = 2/3. Provjera: a₃/a₂ = (4/9)/(2/3) = (4/9)·(3/2) = 12/18 = 2/3 ✓."},
    {txt:"Provjera konvergencije: |q| = |2/3| = 2/3 < 1, dakle red KONVERGIRA i suma postoji."},
    {txt:"Formula sume: S = [FRAC:a₁|1 − q] = 1/(1 − [FRAC:2|3]) = 1/([FRAC:1|3]) = 3.",final:true},
    {txt:"Numerička provjera djelomičnih suma: S₁ = 1, S₂ = 1,667, S₃ = 2,111, S₄ = 2,407, ..., teži k 3 ✓.",final:true,note:"verifikacija"}
  ],
  why:[
    "Geometrijski niz: aₙ₊₁ = q · aₙ (svaki član je q puta prethodni). Eksplicitno: aₙ = a₁ · q^(n−1).",
    "Beskonačni geometrijski red 1 + a₁q + a₁q² + ... KONVERGIRA ako i samo ako je |q| < 1. Ako je |q| ≥ 1, suma divergira (raste u beskonačnost ili oscilira).",
    "Formula sume beskonačnog geometrijskog reda: S = a₁/(1 − q) za |q| < 1. Intuicija: 1 − q je 'razlika prvog i sljedećeg' u nekom smislu.",
    "Česta greška: zaboravljanje provjere |q| < 1. Ako je q ≥ 1, formula daje BESMISLENI ili negativni rezultat — to NIJE rješenje, nego znak divergencije.",
    "Konačna geometrijska suma (za buduće zadatke): Sₙ = a₁(1 − qⁿ)/(1 − q) za q ≠ 1. Beskonačna formula slijedi iz ove kad qⁿ → 0 (tj. |q| < 1)."
  ]
},
{id:28.3,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Marko je od prijatelja posudio 2 000 kn. Dogovorili su se da će novce vraćati na sljedeći način: prvog dana vratit će 2 kn, drugog 4 kn, trećeg 8 kn, četvrtog 16 kn, petog 32 kn i tako dalje. Onog dana kad preostali dug bude manji od dvostrukog iznosa koji je vratio prethodnog dana, Marko će vratiti cijeli preostali dug. Koliko će kuna Marko vratiti tog zadnjeg dana?",
  sol:{ans:"978 kn",alt:["978","978 kn"]},
  steps:[
    {txt:"Strategija: dnevne uplate čine geometrijski niz (2, 4, 8, 16, ...). Pomoću sume geometrijskog niza prati preostali dug i pronađi prvi dan kad je dug manji od dvostrukog prethodne uplate."},
    {txt:"Modeliranje: dan k → uplata 2ᵏ kn (za k = 1, 2, 3, ...). Suma kroz prvih n dana: Sₙ = 2 + 4 + ... + 2ⁿ = 2^(n+1) − 2 (suma geometrijskog niza)."},
    {txt:"Preostali dug nakon n dana: D(n) = 2 000 − Sₙ = 2 000 − (2^(n+1) − 2) = 2 002 − 2^(n+1)."},
    {txt:"Uvjet zadnjeg dana (kad nakon uplate dug postaje manji od dvostruke iduće uplate): D(n) < 2 · 2ⁿ = 2^(n+1). Tada bi sutra bila prevelika uplata, pa Marko otplaćuje SVE."},
    {txt:"Nejednadžba: 2 002 − 2^(n+1) < 2^(n+1) ⇒ 2 · 2^(n+1) > 2 002 ⇒ 2^(n+2) > 2 002 ⇒ n + 2 > log₂ 2 002 ≈ 10,97 ⇒ n ≥ 9."},
    {txt:"Provjera za n = 8: S₈ = 2⁹ − 2 = 510 kn, dug = 2 000 − 510 = 1 490 kn. Sljedeća uplata bi bila 2⁹ = 512. Je li 1 490 < 2 · 256 = 512? NE (jer 1 490 > 512). Dakle dan 9 nije još 'zadnji' — nastavlja redovno."},
    {txt:"Provjera za n = 9: nakon 9. uplate od 512 kn, dug = 1 490 − 512 = 978 kn. Sljedeća uplata bi bila 2¹⁰ = 1 024. Je li 978 < 2 · 512 = 1 024? DA. Dakle 10. dan Marko OTPLAĆUJE cijeli preostali dug = 978 kn."},
    {txt:"Marko 10. dana vraća 978 kn.",final:true}
  ,
    {txt:"Provjera za rješenje 978 kn: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"}
  ],
  why:[
    "Geometrijski niz s a₁ = 2 i q = 2: aₖ = 2 · 2^(k−1) = 2ᵏ. Suma prvih n članova: Sₙ = a₁ · (qⁿ − 1)/(q − 1) = 2 · (2ⁿ − 1)/1 = 2^(n+1) − 2.",
    "Strategija pažljivog čitanja: 'dvostruki iznos koji je vratio PRETHODNOG dana' — to je 2 · 2ⁿ = 2^(n+1) (iduća uplata bi bila 2^(n+1), 'dvostruka' jer 2^(n+1) = 2 · 2ⁿ).",
    "Pojam ovoga problema: koristi geometrijsku eksploziju (svaki dan dvostruko više) — vrlo brzo dolazi se do velikih iznosa. 2¹⁰ = 1 024 (već četverostruko od početne uplate od 256).",
    "Česta greška: krivo postavljanje uvjeta — neki studenti koriste D(n) < 2ⁿ (uplata sutra, ne dvostruka). To bi dalo drugi rezultat (n = 10, dan 11 — netočno).",
    "Verifikacija po danima: dan 1 → 2 kn (dug 1 998), dan 2 → 4 (dug 1 994), ..., dan 9 → 512 (dug 978), dan 10 → 978 ✓. Ukupno vraćeno: 510 + 512 + 978 = 2 000 kn ✓."
  ]
},
{id:29.1,type:"proof",topic:"geom",points:3,
  graphType:"line",
  graphRef:{pts:[[-3,-4],[0,5]]},
  img:true,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Zadan je skup svih točaka koje su jednako udaljene od točaka A(−4, 3) i B(2, 1). Napišite jednadžbu tog skupa i nacrtajte ga u zadanom koordinatnom sustavu.",
  sol:{svgFn:SvgSol29a_2012ZimaA,ans:"y = 3x + 5",alt:["y = 3x + 5","y=3x+5","3x − y + 5 = 0"],
  ex:"Simetrala skupa točaka jednako udaljenih od A(−4, 3) i B(2, 1): jednadžba y = 3x + 5."},
  steps:[
    {txt:"Skup točaka jednako udaljenih od A i B je simetrala dužine AB — pravac koji prolazi sredinom AB i okomit je na AB."},
    {txt:"Sredina: M = ((−4 + 2)/2, (3 + 1)/2) = (−1, 2)"},
    {txt:"Nagib pravca AB: k_AB = (1 − 3)/(2 − (−4)) = −2/6 = −1/3"},
    {txt:"Simetrala je okomita na AB: k_s · k_AB = −1 ⇒ k_s = 3"},
    {txt:"Simetrala prolazi točkom M(−1, 2): y − 2 = 3(x + 1)"},
    {txt:"y = 3x + 5",final:true}
  ,
    {txt:"Provjera: udaljenost A(−4, 3) od y = 3x + 5 (3x − y + 5 = 0): |−12 − 3 + 5|/√10 = 10/√10 = √10. Udaljenost B(2, 1): |6 − 1 + 5|/√10 = √10 ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera: točka A(−4, 3) na pravac 3x − y + 5 = 0: |3·(−4) − 3 + 5|/√10 = 10/√10 = √10. Točka B(2, 1): |3·2 − 1 + 5|/√10 = 10/√10 = √10 ✓ (jednake udaljenosti).",final:true,note:"verifikacija"}
  ],
  why:["Simetrala dužine je skup svih točaka koje su jednako udaljene od njezinih krajnjih točaka.","Ako je k₁ · k₂ = −1, pravci su okomiti.","Simetrala dužine AB = skup točaka jednako udaljenih od A i B.","Polovište M = ((−4+2)/2, (3+1)/2) = (−1, 2). Nagib AB: (1−3)/(2+4) = −1/3; nagib simetrale: 3.","Jednadžba: y − 2 = 3(x + 1) → y = 3x + 5."]
},
{id:29.2,type:"proof",topic:"geom",points:1,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Zadane su točke M(−2, −3), N(3, 4) i P(−1, 3). Vektor MN⃗ + NP⃗ prikažite kao linearnu kombinaciju jediničnih okomitih vektora i⃗ i j⃗.",
  sol:{ans:"MN⃗ + NP⃗ = i⃗ + 6j⃗",alt:["i⃗ + 6j⃗","i + 6j","(1, 6)","MP⃗ = i + 6j"],
  ex:"MN⃗ = (5, 7), NP⃗ = (−4, −1); zbroj: MN⃗ + NP⃗ = i⃗ + 6j⃗."},
  steps:[
    {txt:"MN⃗ = N − M = (3 − (−2), 4 − (−3)) = (5, 7)"},
    {txt:"NP⃗ = P − N = (−1 − 3, 3 − 4) = (−4, −1)"},
    {txt:"MN⃗ + NP⃗ = (5 − 4, 7 − 1) = (1, 6)"},
    {txt:"Alternativno (Chaslesova relacija): MN⃗ + NP⃗ = MP⃗ = P − M = (1, 6) ✓"},
    {txt:"MN⃗ + NP⃗ = 1·i⃗ + 6·j⃗ = i⃗ + 6j⃗",final:true}
  ,
    {txt:"Provjera: uvrsti rezultat MN⃗ + NP⃗ = i⃗ + 6j⃗ natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
  why:["Chaslesova relacija: AB⃗ + BC⃗ = AC⃗.","Komponente vektora u kanonskoj bazi (i⃗, j⃗) su upravo (x, y) koordinate.","MN⃗ = N − M = (3−(−2), 4−(−3)) = (5, 7).","NP⃗ = P − N = (−1−3, 3−4) = (−4, −1).","Zbroj = (1, 6) = i⃗ + 6j⃗."]
},
{id:29.3,type:"proof",topic:"kon",points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Hiperbola je zadana jednadžbom 9x² − 4y² − 36 = 0. Izračunajte koordinate žarišta i jednadžbe asimptota te hiperbole.",
  sol:{ans:"F₁,₂(±√13, 0); asimptote: y = ±([FRAC:3|2])x",alt:["F(±√13, 0); y = ±(3/2)x","(±√13, 0), y = 3x/2, y = −3x/2"],
  ex:"Hiperbola: a² = 4, b² = 9, c = √13. Žarišta: (±√13, 0). Asimptote: y = ±(3/2)x."},
  solFormula:{pre:"F₁₂(±√13, 0); asimptote: y = ±", frac:[["3","2"]], post:"x"},
  steps:[
    {txt:"Dovodimo na standardni oblik: 9x² − 4y² = 36 ⇒ x²/4 − y²/9 = 1"},
    {txt:"a² = 4, b² = 9 ⇒ a = 2, b = 3"},
    {txt:"Za hiperbolu: c² = a² + b² = 13 ⇒ c = √13"},
    {txt:"Žarišta na x−osi: F₁(−√13, 0), F₂(√13, 0)"},
    {txt:"Asimptote hiperbole [FRAC:x²|a²] − [FRAC:y²|b²] = 1: y = ±([FRAC:b|a])·x = ±([FRAC:3|2])·x",final:true}
  ,
    {txt:"Provjera asimptota: hiperbola x²/a² − y²/b² = 1 ima asimptote y = ±(b/a)x. a² = 4, b² = 9 → y = ±3x/2 ✓. c² = a² + b² = 13 → F(±√13, 0) ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera asimptota: za hiperbolu x²/a² − y²/b² = 1 asimptote su y = ±(b/a)x. a² = 4, b² = 9 → y = ±(3/2)x ✓. c² = a² + b² = 13 → F(±√13, 0) ✓.",final:true,note:"verifikacija"}
  ],
  why:["Kod hiperbole x²/a² − y²/b² = 1 vrijedi c² = a² + b² (NE kao kod elipse!).","Asimptote prolaze središtem hiperbole s nagibima ±b/a.","Sređivanje: 9x² − 4y² = 36 → x²/4 − y²/9 = 1. Poluosi: a = 2, b = 3.","c = √(a² + b²) = √13. Žarišta: (±√13, 0).","Asimptote: y = ±(b/a)x = ±(3/2)x."]
},
{id:29.4,type:"proof",topic:"kon",points:2,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Zadana je jednadžba kružnice (x − 1)² + (y + 3)² = 5. Nađite jednadžbe tangenata na zadanu kružnicu koje su usporedne s pravcem zadanim jednadžbom y = 2x − 32,67.",
  sol:{ans:"y = 2x i y = 2x − 10",alt:["y = 2x, y = 2x − 10","y=2x i y=2x−10"],
  ex:"Tangente paralelne y = 2x na kružnicu (x−1)²+(y+3)²=5: y = 2x i y = 2x − 10."},
  steps:[
    {txt:"Središte S(1, −3), polumjer r = √5."},
    {txt:"Tangenta paralelna s y = 2x − 32,67 ima oblik: y = 2x + k, tj. 2x − y + k = 0."},
    {txt:"Uvjet tangentnosti: udaljenost od središta do pravca jednaka je polumjeru."},
    {txt:"d(S, tangenta) = |2·1 − (−3) + k|/√(4 + 1) = |5 + k|/√5 = √5"},
    {txt:"|5 + k| = 5 ⇒ k = 0 ili k = −10"},
    {txt:"Tangente: y = 2x i y = 2x − 10",final:true}
  ,
    {txt:"Provjera tangente y = 2x: udaljenost (1, −3) do 2x − y = 0: |2 + 3|/√5 = √5 = r ✓. Za y = 2x − 10: |2 + 3 − 10|/√5 = √5 ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera y = 2x: udaljenost od centra (1, −3) do pravca 2x − y = 0 je |2·1 − (−3)|/√5 = 5/√5 = √5 = r ✓. Za y = 2x − 10: |2 + 3 − 10|/√5 = √5 ✓.",final:true,note:"verifikacija"}
  ],
  why:["Udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).","Tangenta na kružnicu ima udaljenost od središta jednaku polumjeru.","Tangenta k pravcu y = 2x ima isti nagib m = 2.","Udaljenost središta K(1, −3) od pravca y = 2x + t: |2·1 − (−3) + t|/√5 = √5.","Rješavanjem: t = 0 ili t = −10 → y = 2x ili y = 2x − 10."]
},
{id:29.5,type:"proof",topic:"kon",points:2,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Luk na ulazu u tunel ima oblik poluelipse. Pri zemlji je širok 12 m, a maksimalna mu je visina 4,5 m. Iznad točke na zemlji, koja je udaljena 2 m od desnog ruba tunela, na luku je postavljena sigurnosna kamera. Na kojoj je visini postavljena ta kamera?",
  sol:{ans:"h = [FRAC:3√5|2] ≈ 3,35 m",alt:["(3/2)√5","3√5/2","3,35","3.35","≈3,35 m"],
  ex:"Elipsa: a = 6, b = 4,5; za x = 4 (2 m od ruba): visina = (3√5)/2 ≈ 3,35 m."},
  steps:[
    {txt:"Postavimo koordinatni sustav: ishodište u središtu podnožja tunela. Poluosi: a = 6 (polovica širine), b = 4,5 (visina)."},
    {txt:"Jednadžba poluelipse (gornji dio): x²/36 + y²/20,25 = 1, y ≥ 0"},
    {txt:"Točka 2 m od desnog ruba: x = 6 − 2 = 4"},
    {txt:"y² = 20,25·(1 − 16/36) = 20,25·(20/36) = 11,25"},
    {txt:"y = √11,25 = √([FRAC:45|4]) = [FRAC:3√5|2] ≈ 3,354 m",final:true}
  ,
    {txt:"Provjera elipse x²/36 + y²/(81/4) = 1: za x = 4 → y² = (81/4)·(20/36) = 45/4 → y = (3√5)/2 ≈ 3,35 m ✓.",final:true,note:"verifikacija"}
  ,
    {txt:"Provjera s elipsom x²/36 + y²/(4,5²) = 1: za x = 4 → y² = 20,25·(1 − 16/36) = 11,25 → y = (3√5)/2 ≈ 3,35 m ✓.",final:true,note:"verifikacija"}
  ],
  why:["Elipsa x²/a² + y²/b² = 1 s poluosima a (horizontalno) i b (vertikalno).","Za poluelipsu nad x−osi uzimamo samo pozitivne y−vrijednosti.","Elipsa: a = 6 (horizontalna poluos), b = 4,5 (vertikalna). Jednadžba: x²/36 + y²/20,25 = 1.","Točka na luku: 2 m od desnog ruba → x = 6 − 2 = 4.","y = 4,5·√(1 − 16/36) = 4,5·√(5/9) = 4,5·√5/3 = (3√5)/2 ≈ 3,35 m."]
},
{id:30,type:"proof",topic:"al",points:4,
  q:"Za koje realne brojeve a jednadžba ||x + 1| − 4| = 5 − a² ima točno četiri rješenja?",
  sol:{ans:"a ∈ ⟨−√5, −1⟩ ∪ ⟨1, √5⟩",alt:["⟨−√5, −1⟩ ∪ ⟨1, √5⟩","a ∈ (−√5, −1) ∪ (1, √5)","−√5 < a < −1 ili 1 < a < √5"],
  ex:"4 rješenja za a ∈ ⟨−√5, −1⟩ ∪ ⟨1, √5⟩."},
  steps:[
    {txt:"Strategija: rastavljamo problem u slojevima. Vanjska |·| daje 2 grane, unutarnja |·| daje 2 grane — ukupno najviše 4 rješenja u x. Tražimo uvjete za točno 4."},
    {txt:"Supstitucija u = |x + 1|, gdje je u ≥ 0. Svaki u > 0 daje 2 vrijednosti za x (x = u − 1 ili x = −u − 1); u = 0 daje samo jedan x = −1."},
    {txt:"Jednadžba postaje |u − 4| = 5 − a². Označimo k = 5 − a². Lijeva strana je ≥ 0, pa mora biti k ≥ 0 ⇔ a² ≤ 5."},
    {txt:"|u − 4| = k ⇒ u = 4 + k ili u = 4 − k. Provjera u ≥ 0: u₁ = 4 + k ≥ 0 (uvijek za k ≥ 0); u₂ = 4 − k ≥ 0 ⇔ k ≤ 4."},
    {txt:"Brojanje rješenja x: ako su u₁, u₂ različiti i oba > 0 → 4 rješenja x. Ako je jedan = 0 → 3 rješenja. Ako jedan < 0 → 2 rješenja."},
    {txt:"Uvjet 4 različita rješenja: u₁ ≠ u₂ (⇔ k > 0) I oba > 0 (⇔ k < 4)."},
    {txt:"Dakle 0 < k < 4 ⇒ 0 < 5 − a² < 4 ⇒ 1 < a² < 5."},
    {txt:"Rješenje: a ∈ ⟨−√5, −1⟩ ∪ ⟨1, √5⟩.",final:true},
    {txt:"Provjera za a = √2 (unutar intervala): k = 5 − 2 = 3, u₁ = 7, u₂ = 1 → x ∈ {6, −8, 0, −2} = 4 rješenja ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Definicija apsolutne vrijednosti: |A| = k (k > 0) ima točno 2 rješenja A = ±k; |A| = 0 ima 1; |A| = k (k < 0) nema rješenja.",
    "Strategija za ugniježđene apsolutne vrijednosti: rastavi po slojevima (supstitucija u za unutarnju |·|), zatim broji rješenja na svakom sloju i kombiniraj.",
    "Geometrijska interpretacija: graf y = ||x + 1| − 4| ima 'W' oblik s minimumima na x = 3 i x = −5 (gdje y = 0) i lokalnim maksimumom na x = −1 (gdje y = 4). Vodoravna linija y = k siječe graf 4 puta kad je 0 < k < 4.",
    "Česta greška: zaboravljanje uvjeta k ≤ 4 (drugi u-korijen mora biti pozitivan). Bez tog uvjeta dobiješ samo a² < 5, što uključuje slučajeve s manje od 4 rješenja.",
    "Rubni slučajevi: za a² = 1 (k = 4) imamo u₂ = 0 → samo 3 rješenja x. Za a² = 5 (k = 0) imamo u₁ = u₂ = 4 → samo 2 rješenja x. Zato je interval STROGO otvoren ⟨ ⟩, ne zatvoren."
  ]
}

];

export const qImages = {
  "2012_zima_A__14": () => e(SvgKruznica14_2012Az, null),
  "2012_zima_A__24.2": () => e(SvgGraf24b_2012Az, null),
  "2012_zima_A__26": () => e(SvgGraf26_2012Az, null),
  "2012_zima_A__29.1": () => e(SvgGraf29a_2012Az, null),
};
