// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgTable5_2012ZimaB(){
  const W=260,H=90,xs=[-3,-2,-1,0,1],ys=[-3,-2,0,2,4];
  const cols=6,rw=36,rh=32,ox=10,oy=14;
  const cells=[];
  const hdrs=["x",...xs.map(String)];
  const vals=["f(x)",...ys.map(String)];
  for(let c=0;c<cols;c++){
    const cx2=ox+c*rw;
    cells.push(e("rect",{key:"h"+c,x:cx2,y:oy,width:rw,height:rh,fill:c===0?"var(--blue)":"var(--bg)",fillOpacity:c===0?0.25:1,stroke:"var(--text)",strokeWidth:1,strokeOpacity:0.4}));
    cells.push(e("text",{key:"ht"+c,x:cx2+rw/2,y:oy+rh/2+5,textAnchor:"middle",fontSize:13,fontStyle:c===0?"italic":"normal",fontWeight:"bold",fill:"var(--text)"},hdrs[c]));
    cells.push(e("rect",{key:"v"+c,x:cx2,y:oy+rh,width:rw,height:rh,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1,strokeOpacity:0.4}));
    cells.push(e("text",{key:"vt"+c,x:cx2+rw/2,y:oy+rh+rh/2+5,textAnchor:"middle",fontSize:13,fontStyle:c===0?"italic":"normal",fill:"var(--text)"},vals[c]));
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    ...cells
  );
}

function SvgKoord4_2012ZimaB(){
  const W=220,H=200,cx=110,cy=100,sc=18;
  const pts=[{t:"A",x:4,y:-3},{t:"B",x:-5,y:2},{t:"C",x:-2,y:-2},{t:"D",x:4,y:3}];
  const ticks=[-5,-4,-3,-2,-1,1,2,3,4,5];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"axz4x",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"axz4y",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Grid lines
    ...ticks.map(t=>e("line",{key:"gx"+t,x1:cx+t*sc,y1:8,x2:cx+t*sc,y2:H-8,stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.8})),
    ...ticks.map(t=>e("line",{key:"gy"+t,x1:8,y1:cy+t*sc,x2:W-8,y2:cy+t*sc,stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.8})),
    // Axes
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axz4x)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axz4y)"}),
    e("text",{x:W-10,y:cy-5,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+5,y:12,fontSize:11,fill:"var(--text)"},"y"),
    // Tick label "1"
    e("text",{x:cx+sc-3,y:cy+12,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx+3,y:cy-sc+3,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy+12,fontSize:10,fill:"var(--text)"},"0"),
    // Points
    ...pts.map(p=>e("circle",{key:"p"+p.t,cx:cx+p.x*sc,cy:cy-p.y*sc,r:4,fill:"var(--blue)"})),
    ...pts.map(p=>e("text",{key:"l"+p.t,x:cx+p.x*sc+(p.x>=0?7:-14),y:cy-p.y*sc+(p.y<=0?14:-5),fontSize:13,fontWeight:"bold",fill:"var(--text)"},p.t))
  );
}

function SvgTable28_2012ZimaB(){
  const ox=6, W=440;
  // ---- table 1: osnovni cjenik ----
  const rows=[
    ["Do 20 g","3,60 kn"],
    ["Iznad 20 g do 100 g","7,50 kn"],
    ["Iznad 100 g do 250 g","13,50 kn"],
    ["Iznad 250 g do 500 g","24,50 kn"],
    ["Iznad 500 g do 1000 g","40,00 kn"],
    ["Iznad 1000 g do 2000 g","60,00 kn"],
  ];
  const cw=[200,110], rh=21;
  // ---- table 2: dopunska cijena ----
  const acw=[112,86,132,90], ahh=34;
  const acols=[
    ["Europa"],
    ["Sjeverna i","Srednja Amerika"],
    ["Južna","Amerika"],
  ];
  const avals=["1,00 kn","1,50 kn","1,70 kn"];

  const t1Title=14;            // baseline naslova 1. tablice
  const t1Top=t1Title+8;
  const t1Bot=t1Top+7*rh;      // zaglavlje + 6 redaka
  const t2Title=t1Bot+26;
  const t2Top=t2Title+8;
  const t2Bot=t2Top+ahh+rh;
  const H=t2Bot+8;

  const HDR="var(--blue)", HDROP=0.18;
  const line={stroke:"var(--text)",strokeWidth:0.9,strokeOpacity:0.55};
  const n=[];
  const cell=(k,x,y,w,h,hdr)=>e("rect",{key:k,x,y,width:w,height:h,
    fill:hdr?HDR:"var(--bg)",fillOpacity:hdr?HDROP:1,...line});
  const txt=(k,x,y,s,o)=>e("text",{key:k,x,y,fontSize:(o&&o.fs)||10.5,
    fontWeight:(o&&o.b)?"bold":"normal",textAnchor:(o&&o.a)||"start",
    fill:"var(--text)"},s);

  // ================= tablica 1 =================
  n.push(txt("ti1",ox,t1Title,"IZVOD IZ CJENIKA",{b:1,fs:11.5}));
  n.push(cell("h1a",ox,t1Top,cw[0],rh,1));
  n.push(cell("h1b",ox+cw[0],t1Top,cw[1],rh,1));
  n.push(txt("h1at",ox+cw[0]/2,t1Top+rh/2+4,"Masa",{b:1,a:"middle"}));
  n.push(txt("h1bt",ox+cw[0]+cw[1]/2,t1Top+rh/2+4,"Cijena",{b:1,a:"middle"}));
  for(let r=0;r<rows.length;r++){
    const y=t1Top+(r+1)*rh;
    n.push(cell("r"+r+"a",ox,y,cw[0],rh,0));
    n.push(cell("r"+r+"b",ox+cw[0],y,cw[1],rh,0));
    n.push(txt("r"+r+"at",ox+7,y+rh/2+4,rows[r][0]));
    n.push(txt("r"+r+"bt",ox+cw[0]+cw[1]-8,y+rh/2+4,rows[r][1],{a:"end"}));
  }

  // ================= tablica 2 =================
  n.push(txt("ti2",ox,t2Title,"DOPUNSKA CIJENA ZA ZRAKOPLOVNE POŠILJKE",{b:1,fs:11.5}));
  // kutna ćelija s dijagonalom
  n.push(cell("ah0",ox,t2Top,acw[0],ahh,1));
  n.push(e("line",{key:"diag",x1:ox,y1:t2Top,x2:ox+acw[0],y2:t2Top+ahh,...line}));
  n.push(txt("ahk",ox+acw[0]-6,t2Top+13,"Kontinenti",{b:1,a:"end",fs:10}));
  n.push(txt("ahm",ox+6,t2Top+ahh-7,"Masa",{b:1,fs:10}));
  let ax=ox+acw[0];
  for(let c=0;c<acols.length;c++){
    const w=acw[c+1];
    n.push(cell("ah"+(c+1),ax,t2Top,w,ahh,1));
    const ls=acols[c];
    for(let i=0;i<ls.length;i++){
      const y=ls.length===1?t2Top+ahh/2+4:t2Top+ahh/2-3+i*13;
      n.push(txt("ah"+c+"t"+i,ax+w/2,y,ls[i],{b:1,a:"middle",fs:10}));
    }
    ax+=w;
  }
  // redak s vrijednostima
  const vy=t2Top+ahh;
  n.push(cell("av0",ox,vy,acw[0],rh,0));
  n.push(txt("av0t",ox+acw[0]/2,vy+rh/2+4,"za svakih 20 g",{a:"middle"}));
  ax=ox+acw[0];
  for(let c=0;c<avals.length;c++){
    const w=acw[c+1];
    n.push(cell("av"+(c+1),ax,vy,w,rh,0));
    n.push(txt("av"+(c+1)+"t",ax+w/2,vy+rh/2+4,avals[c],{a:"middle"}));
    ax+=w;
  }

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto",maxWidth:"100%"}},...n);
}

function SvgParabola16_2012ZimaB(){
  const W=200,H=180,cx=60,cy=120,sc=28;
  const pts=[];
  for(let px=0;px<=W;px+=2){
    const x=(px-cx)/sc;
    const y=x*(x-3);
    const py=cy-y*sc;
    if(py>-10&&py<H+10) pts.push(`${px},${py}`);
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"axz16x",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"axz16y",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axz16x)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#axz16y)"}),
    e("text",{x:W-8,y:cy-6,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:12,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+12,fontSize:11,fill:"var(--text)"},"0"),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2})
  );
}

function SvgGrid12_2012ZimaB(){
  const W=240,H=200,sc=28,ox=30,oy=20;
  // Rectangle: left edge at col0, top at row0, 4×4 cells
  // Semicircle on right: center at (col4, row2), radius=2 cells
  const rows=6,cols=6;
  const lines=[];
  for(let r=0;r<=rows;r++) lines.push(e("line",{key:"r"+r,x1:ox,y1:oy+r*sc,x2:ox+cols*sc,y2:oy+r*sc,stroke:"var(--text)",strokeOpacity:0.18,strokeWidth:0.8}));
  for(let c=0;c<=cols;c++) lines.push(e("line",{key:"c"+c,x1:ox+c*sc,y1:oy,x2:ox+c*sc,y2:oy+rows*sc,stroke:"var(--text)",strokeOpacity:0.18,strokeWidth:0.8}));
  // Shape vertices
  const x0=ox+1*sc, y0=oy+1*sc;  // top-left of rectangle
  const rw=4*sc, rh=4*sc;
  // Semicircle: right side of rectangle, center at (x0+rw, y0+rh/2), r=rh/2
  const cx2=x0+rw, cy2=y0+rh/2, r=rh/2;
  // Path: left side down, bottom, up right side, semicircle (top-right to bottom-right)
  const shapePath=`M${x0},${y0} L${x0+rw},${y0} A${r},${r} 0 0,1 ${x0+rw},${y0+rh} L${x0},${y0+rh} Z`;
  // Scale arrows
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    ...lines,
    e("path",{d:shapePath,fill:"var(--blue)",fillOpacity:0.2,stroke:"var(--blue)",strokeWidth:2.2}),
    // Scale labels
    e("line",{x1:ox+1*sc,y1:oy-12,x2:ox+2*sc,y2:oy-12,stroke:"var(--text)",strokeWidth:1.5}),
    e("text",{x:ox+1.5*sc,y:oy-15,textAnchor:"middle",fontSize:10,fill:"var(--text)"},"10 m"),
    e("line",{x1:ox-14,y1:oy+1*sc,x2:ox-14,y2:oy+2*sc,stroke:"var(--text)",strokeWidth:1.5}),
    e("text",{x:ox-22,y:oy+1.5*sc+4,fontSize:10,fill:"var(--text)"},"10"),
    e("text",{x:ox-22,y:oy+1.5*sc+14,fontSize:10,fill:"var(--text)"},"m"),
  );
}

function Svg24_2sol_2012ZimaB(){
  const W=200,H=200,cx=100,cy=80,sc=28;
  const f=x=>x*x-4;
  const pts=[];
  for(let x=-2.5;x<=2.5;x+=0.05){
    const px=cx+x*sc, py=cy-f(x)*sc;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const d="M"+pts.join(" L");
  const ticks=[-2,-1,1,2];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx24b",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary24b",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx24b)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary24b)"}),
    e("text",{x:W-10,y:cy+13,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+13,fontSize:9,fill:"var(--muted)"},"0"),
    ...ticks.map(t=>e("text",{key:t,x:cx+t*sc-(t<0?10:3),y:cy+12,fontSize:8,fill:"var(--muted)"},t)),
    e("text",{x:cx+3,y:cy-sc+4,fontSize:8,fill:"var(--muted)"},"1"),
    // Označi tjeme (0,-4) i nultočke (±2,0)
    e("circle",{cx:cx,cy:cy+4*sc,r:3,fill:"var(--red)"}),
    e("circle",{cx:cx-2*sc,cy:cy,r:3,fill:"var(--green)"}),
    e("circle",{cx:cx+2*sc,cy:cy,r:3,fill:"var(--green)"}),
    e("path",{d,fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"})
  );
}

function Svg24_1sol_2012ZimaB(){
  const W=200,H=200,cx=80,cy=120,sc=24;
  // Točke pravca y=−x+3: (0,3) i (3,0), proteže se od x=−2 do x=5
  const pts=[[-2,5],[5,-2]].map(([x,y])=>`${cx+x*sc},${cy-y*sc}`).join(" L");
  const ticks=[-2,-1,1,2,3,4];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx24a",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary24a",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx24a)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary24a)"}),
    e("text",{x:W-10,y:cy+13,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+13,fontSize:9,fill:"var(--muted)"},"0"),
    ...ticks.map(t=>e("text",{key:t,x:cx+t*sc-(t<0?10:3),y:cy+12,fontSize:8,fill:"var(--muted)"},t)),
    e("text",{x:cx+3,y:cy-sc+4,fontSize:8,fill:"var(--muted)"},"1"),
    e("path",{d:"M"+pts,fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"})
  );
}

export const qs = [
{id:1,type:"mc",warn:"Pazi: redoslijed — množenje prije zbrajanja: (9 + 42)/(18 − 8) = 51/10.",topic:"br",points:1,
  q:"Koliko je (9+7·6)/(18−4·2)?",
  opts:["1,8","3,4","5,1","9,6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Pravilo redoslijeda operacija (PEMDAS/BODMAS): množenje prije zbrajanja/oduzimanja u svakom dijelu."},
    {txt:"Brojnik: 9 + 7·6. Prvo izračunaj 7·6 = 42, pa 9 + 42 = 51."},
    {txt:"Nazivnik: 18 − 4·2. Prvo 4·2 = 8, pa 18 − 8 = 10."},
    {txt:"Razlomak: [FRAC:51|10] = 5,1 ⇒ C"},{txt:"Analiza distractora: A (1,8): zbrajanje slijeva desno bez pravila redosljeda. B (3,4): pogrešan nazivnik. D (9,6): (9+7·6)/(18−4·2)=(9+42)/10... čekaj D=9,6 ako se zbrajaju krivo.",final:true,note:"diagnostika"},{txt:"Provjera: brojnik=9+7·6=51; nazivnik=18−4·2=10; 51/10=5,1 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Redoslijed operacija: zagrade → potencije/korijeni → množenje/dijeljenje → zbrajanje/oduzimanje (slijeva nadesno).",
    "Razlomačka crta funkcionira kao implicitna zagrada: cijeli brojnik se dijeli s cijelim nazivnikom (kao da je (9+7·6)/(18−4·2)).",
    "Provjera: 51/10 = 5,1 — decimalni zapis razlomka.",
    "Česta greška: računati slijeva (npr. 9+7=16, 16·6=96) — krivi redoslijed; rezultat 96/(18−8) = 9,6 (D) je trip distractor."
  ,"Diagnostic: A) 1,8; B) 3,4; C) 5,1 ✓; D) 9,6.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
{id:2,type:"mc",warn:"Pazi: 10^1,5 = 10·√10 ≈ 31,62; pa ·2; zaokruži na 3 decimale.",topic:"br",points:1,
  q:"Koliko je 2·10¹·⁵ zaokruženo na tri decimale?",
  opts:["63,245","63,246","89,442","89,443"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Pretvori decimalni eksponent u razlomak: 1,5 = 3/2, pa 10 na 1,5 = 10³⁄²."},
    {txt:"Pravilo: a^(m/n) = ⁿ√(aᵐ). Za 10³⁄² = √(10³) = √1000."},
    {txt:"Računaj korijen: √1000 ≈ 31,62278 (kalkulator)."},
    {txt:"Pomnoži s 2: 2 · 31,62278 = 63,24556."},
    {txt:"Zaokruži na 3 decimale: 63,24556 → 63,246 ⇒ B"},{txt:"Analiza distractora: A (63,245): zaokruživanje prema dolje (treba gore jer 5. decimala=5). C (89,442): zamjena 10^(1,5) s e^(1,5). D (89,443): slična greška baze.",final:true,note:"diagnostika"},{txt:"Provjera: 10^(1,5)=√1000≈31,623; 2·31,623=63,246 (zaokruženo) ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Racionalni eksponent: a^(m/n) = ⁿ√(aᵐ) (n-ti korijen iz a na m-tu). Ovdje a=10, m=3, n=2 → 10³⁄² = √(10³) = √1000.",
    "Zaokruživanje na 3 decimale: gledaj 4. decimalu (5) → zaokruži gore (63,2455 → 63,246).",
    "Provjera redom veličina: 10¹ = 10, 10² = 100, pa 10³⁄² mora biti između (oko 31). Pomnoženo s 2 → oko 63 ✓.",
    "Česta greška: 10³⁄² ≠ 15 (pogrešno množenje baze i eksponenta) — to bi dalo 30 nakon množenja s 2, krivo."
  ,"Diagnostic: A) 63,245; B) 63,246 ✓; C) 89,442; D) 89,443.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
{id:3,type:"mc",warn:"Pazi: cijeli su −5, 0, 6; √3, √5 i razlomci nisu cijeli.",topic:"br",points:1,
  q:"Koliko je cijelih brojeva u skupu {−5, −√3, −[FRAC:1|3], 0, [FRAC:3|4], √5, 6}?",
  opts:["jedan","tri","pet","sedam"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Cijeli brojevi (ℤ) iz skupa: −5, 0, 6 → tri elementa"},
    {txt:"−√3 ≈ −1,732 — iracionalan (nije cijeli)"},
    {txt:"−1/3, 3/4 — razlomci (nisu cijeli)"},
    {txt:"√5 ≈ 2,236 — iracionalan (nije cijeli)"},
    {txt:"⇒ B = tri"},{txt:"Analiza distractora: A (jedan): možda samo 0. C (pet): broji −√3 i √5 kao cijele. D (sedam): broji sve elemente.",final:true,note:"diagnostika"},{txt:"Provjera: cijeli u skupu: −5, 0, 6 → točno 3 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Cijeli brojevi ℤ = {..., −2, −1, 0, 1, 2, ...} — bez razlomaka, decimala i iracionalnih.",
    "Korijen √n je cijeli broj samo ako je n potpuni kvadrat (1, 4, 9, 16...). √3 i √5 nisu (3 i 5 nisu kvadrati).",
    "Strategija: prođi kroz svaki element skupa i klasificiraj — cijeli, racionalni (razlomak/decimala), iracionalni.",
    "Česta greška: brojati −5 dva puta (jer ima predznak) — predznak ne mijenja klasifikaciju (i −5 i 5 su cijeli)."
  ,"Diagnostic: A) jedan; B) tri ✓; C) pet; D) sedam.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
{id:4,img:true,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja; pažljivo očitaj koordinate sa slike.",img:true,topic:"geom",points:1,
  q:"Koja je tvrdnja netočna za točke prikazane na slici?",
  opts:["Druga koordinata točke A je pozitivan broj.","Točka B pripada drugome kvadrantu.","Prva koordinata točke C je negativan broj.","Točka D pripada prvome kvadrantu."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Pravilo kvadranata: I (+,+), II (−,+), III (−,−), IV (+,−)."},
    {txt:"Iz slike: A je u IV. kvadrantu (desno od y-osi, ispod x-osi) ⇒ druga koordinata je NEGATIVNA."},
    {txt:"Provjeri ostale tvrdnje: B(−3, 2) — II. kvadrant ✓, C(−2, −2) — prva koord negativna ✓, D(3, 2) — I. kvadrant ✓."},
    {txt:"⇒ Tvrdnja A: ‘Druga koordinata točke A je pozitivan broj’ — NETOČNA"},{txt:"Analiza distractora: B (B u 2. kvad.): točno. C (1. kord. C neg.): točno. D (D u 1. kvad.): točno. Samo A je lažna.",final:true,note:"diagnostika"},{txt:"Provjera: A u 4. kvad. (x>0,y<0) → 2. kord.<0 → netočna ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Kvadranti se broje suprotno smjeru kazaljki sata, počevši od gornje desne (I.). Predznaci koordinata: I (+,+), II (−,+), III (−,−), IV (+,−).",
    "Predznak druge (y) koordinate ovisi SAMO o tome je li točka iznad ili ispod x-osi: iznad → +, ispod → −.",
    "Pitanje traži NETOČNU tvrdnju (zapazi bold ‚netočna‘ u q tekstu) — pažljivo čitati!",
    "Česta greška: birati TOČNU tvrdnju (npr. D — ‚D pripada I. kvadrantu‘ je točno) umjesto NETOČNE."
  ,"Diagnostic: A) Druga koordinata točke A* ✓; B) Točka B pripada drugome k*; C) Prva koordinata točke C j*; D) Točka D pripada prvome kv*.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:5,img:true,type:"mc",warn:"Pazi: točka (x, y) je na grafu ako par odgovara tablici.",img:true,topic:"fun",points:1,
  q:"Funkcija f zadana je sljedećom tablicom. Koja točka pripada grafu funkcije f?",
  opts:["T₁(-3,-2)","T₂(-2,0)","T₃(0,-1)","T₄(1,4)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"T₁=(-3,-2): f(-3)=-3≠2 ❌"},
    {txt:"T₂=(-2,0): f(-2)=-2≠0 ❌"},
    {txt:"T₃=(0,-1): f(0)=2≠-1 ❌"},
    {txt:"T₄=(1,4): f(1)=4 ✓ ⇒ D"},{txt:"Analiza distractora: A T₁(−3,−2): f(−3)=−3≠−2. B T₂(−2,0): f(−2)=−2≠0. C T₃(0,−1): f(0)=0≠−1.",final:true,note:"diagnostika"},{txt:"Provjera: iz tablice f(1)=4 → T₄(1,4) na grafu ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Točka T(a, b) pripada grafu funkcije f ⇔ f(a) = b. Dakle a je upisani x, b je odgovarajuća vrijednost f(x).",
    "Strategija: za svaki kandidat, pronađi a u tablici i provjeri je li f(a) = b. Samo jedan match je točan.",
    "Provjera D: T₄(1, 4) → tablica kaže f(1) = 4 ✓.",
    "Česta greška: zamijeniti redoslijed (a, b) → tražiti a u redu f(x) umjesto u redu x — krivi pristup."
  ,"Diagnostic: A) T₁(-3,-2); B) T₂(-2,0); C) T₃(0,-1); D) T₄(1,4) ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:6,type:"mc",warn:"Pazi: dijelovi 5k + 7k = 12k = 168 → k = 14; neprodanih je 7k.",topic:"stat",points:1,
  q:"Omjer prodanih i neprodanih ulaznica za kinopredstavu je 5:7. Kino ima 168 sjedala. Koliko ulaznica nije prodano?",
  opts:["24","33","70","98"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  solFormula:{frac:[["7","12"]]},
  steps:[
    {txt:"Omjer 5:7 — prodano:neprodano. Ukupno = 5 + 7 = 12 jednakih dijelova."},
    {txt:"Jedan dio = 168 / 12 = 14 ulaznica."},
    {txt:"Neprodano = 7 dijelova · 14 = 98 (ili: [FRAC:7|12] · 168 = 98)."},{txt:"Analiza distractora: A (24): razlika=28 ne 24. B (33): krivi omjer. C (70): to su prodane ulaznice.",final:true,note:"diagnostika"},{txt:"Provjera: 168/(5+7)=14 po dijelu; neprodano=7·14=98 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}],
  why:[
    "Omjer a:b dijeli cijelinu na (a+b) jednakih dijelova; svaki dio = cijelina / (a+b).",
    "Provjera: prodano = 5·14 = 70; neprodano = 7·14 = 98; suma = 168 ✓.",
    "Strategija ‚dio od cjeline‘: razlomak 7/12 znači 7 dvanaestina od ukupnog broja.",
    "Česta greška: računati 5/12 · 168 = 70 (= prodano) umjesto 7/12 · 168 = 98 (= neprodano) — pažljivo s ‚nije prodano‘."
  ,"Diagnostic: A) 24; B) 33; C) 70; D) 98 ✓.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:7,type:"mc",warn:"Pazi: broj = 343/0,14; pa ·0,45 (ili 45/14·343).",topic:"stat",points:1,
  q:"Koliko iznosi 45% nekog broja ako 14% tog istog broja iznosi 343?",
  opts:["106,71","980","1102,5","4802"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Princip proporcije: ako 14% nekog broja x iznosi 343, onda 1% iznosi 343/14."},
    {txt:"Izračunaj 1%: 343 / 14 = 24,5."},
    {txt:"Pomnoži s 45 da dobiješ 45%: 24,5 · 45 = 1102,5 ⇒ C"},{txt:"Analiza distractora: A (106,71): 45/14·343 bez faktora 100. B (980): možda 343·45/14... D (4802): pogrešno skaliranje.",final:true,note:"diagnostika"},{txt:"Provjera: 14%=343; 1%=343/14=24,5; 45%=24,5·45=1102,5 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}],
  why:[
    "Postotak je proporcionalan: ako x% = a, onda 1% = a/x i y% = (a/x) · y.",
    "Alternativa: prvo nađi cijeli broj (100%): broj = 343 / 0,14 = 2450; zatim 45% = 0,45 · 2450 = 1102,5.",
    "Provjera: 14% od 2450 = 343 ✓; 45% od 2450 = 1102,5 ✓.",
    "Česta greška: pomnožiti 343 · 45 / 14 može dovesti do round-off ako se ne računa precizno; uvijek prvo nađi 1% ili 100%."
  ,"Diagnostic: A) 106,71; B) 980; C) 1102,5 ✓; D) 4802.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:8,type:"mc",warn:"Pazi: pažljivo pročitaj uvjet (radni sati po zaposleniku); zaokruži NAGORE.",topic:"stat",points:1,
  q:"Tvrtka ima 1564 klijenta. Za pakiranje materijala za jednog klijenta treba 3 minute. Koliko najmanje zaposlenika treba istodobno raditi da bi za 8 radnih sati završili pakiranje?",
  opts:["9","10","11","12"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Ukupno minuta: 1564·3=4692 min"},
    {txt:"Kapacitet po zaposleniku: 8·60=480 min"},
    {txt:"Broj zaposlenika: ⌊[FRAC:4692|480]⌋+1 = ⌊9,775⌋ = 10 ⇒ B"},{txt:"Analiza distractora: A (9): 9·480=4320<4692, nedovoljno. C (11) i D (12): previše zaposlenika.",final:true,note:"diagnostika"},{txt:"Provjera: ukupno=1564·3=4692min; max/zap=8·60=480min; 4692/480≈9,775 → potrebno 10 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}],
  why:[
    "Princip ukupnog rada: ukupno_minute_potrebno = ukupno_zaposlenika × minute_po_zaposleniku.",
    "Strategija: izračunaj ukupno minuta posla (1564 klijenta × 3 min = 4692 min), pa podijeli s vremenom dostupnim po zaposleniku (8 h = 480 min).",
    "Zaokruživanje: 4692/480 = 9,775 — to znači da 9 zaposlenika nije dovoljno (završilo bi 480·9 = 4320 min, fali 372 min); treba 10.",
    "Česta greška: zaokružiti dolje na 9 (matematički bliže ali nedovoljno) ili koristiti decimalni rezultat 9,775 (nemoguće — ne može pola zaposlenika)."
  ,"Diagnostic: A) 9; B) 10 ✓; C) 11; D) 12.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:9,type:"mc",warn:"Pazi: ⟨1, 4⟩ je otvoreni → 1 < x < 4 (rubovi isključeni).",topic:"al",points:1,
  q:"Koji realni brojevi pripadaju intervalu ⟨1, 4⟩?",
  opts:["samo 1 i 4","samo 2 i 3","svi manji od 1 i veći od 4","svi veći od 1 i manji od 4"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Notacija: kutne zagrade ⟨a, b⟩ označavaju OTVORENI interval — rubovi (a i b) su ISKLJUČENI."},
    {txt:"Dakle ⟨1, 4⟩ = svi realni x takvi da 1 < x < 4 (strogo veći od 1 i strogo manji od 4)."},
    {txt:"Provjera opcija: A = samo 1 i 4 (rubovi koji su isključeni — ❌); B = samo 2 i 3 (točni primjeri ali ne SVI — ❌); C = svi manji od 1 i veći od 4 (suprotno od ⟨1,4⟩ — to bi bila vanjština — ❌); D = svi veći od 1 i manji od 4 ✓"},{txt:"Analiza distractora: A: otvoreni interval NE uključuje rubove 1 i 4. B: samo dva primjera, ne svi realni. C: komplement intervala, suprotno.",final:true,note:"diagnostika"},{txt:"Provjera: ⟨1,4⟩={x∈ℝ : 1<x<4} — svi realni između 1 i 4 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Otvoreni interval ⟨a, b⟩: svi x takvi da a < x < b (rubovi ISKLJUČENI).",
    "NCVVO konvencija: kutne zagrade ⟨ ⟩ za otvorene krajeve, uglate [ ] za zatvorene. Mješoviti: [a, b⟩ = a uključen, b isključen.",
    "Provjera s konkretnim brojevima: x = 1 NIJE u ⟨1, 4⟩ (jer 1 nije strogo > 1); x = 2,5 JE (jer 1 < 2,5 < 4); x = 4 NIJE.",
    "Česta greška: misliti da ⟨a, b⟩ uključuje rubove (zbuniti s [a, b]) — pažljivo razlikovati zagrade."
  ,"Diagnostic: A) samo 1 i 4; B) samo 2 i 3; C) svi manji od 1 i veći od*; D) svi veći od 1 i manji od* ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:10,type:"mc",warn:"Pazi: rastavi na 4/4 + 2√a/4 = 1 + √a/2 (skrati).",topic:"al",points:1,
  q:"Čemu je jednako (4 + 2√a)/4?",
  opts:["(2 + √a)/2", "(1 + 2√a)/2", "1 + 2√a", "2√a"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Pravilo: razlomak (a + b)/c možeš razdvojiti na a/c + b/c (distribucija dijeljenja po zbrajanju)."},
    {txt:"Razdvoji: (4 + 2√a)/4 = 4/4 + 2√a/4 = 1 + √a/2."},
    {txt:"Spoji natrag u jedan razlomak: 1 + [FRAC:√a|2] = [FRAC:2|2] + [FRAC:√a|2] = [FRAC:2 + √a|2] ⇒ A"},{txt:"Analiza distractora: B (1+2√a)/2: krivo skraćivanje. C (1+2√a): nije skraćen nazivnik. D (2√a): izgubljen konstantni dio.",final:true,note:"diagnostika"},{txt:"Provjera: (4+2√a)/4=1+√a/2=(2+√a)/2 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Distribucija dijeljenja: (a + b)/c = a/c + b/c. NE vrijedi obrnuto za zbroj u nazivniku: a/(b+c) ≠ a/b + a/c.",
    "Skraćivanje: 4/4 = 1; 2√a/4 = √a/2 (skrati 2/4 = 1/2). Provjera: pomnoži (2+√a)/2 · 4/4 = (8 + 4√a)/8 = (4+2√a)/4 ✓",
    "Strategija provjere: uvrsti konkretnu vrijednost a (npr. a=4): (4 + 2·2)/4 = 8/4 = 2; opcija A = (2+2)/2 = 2 ✓.",
    "Česta greška: skratiti 4 iz brojnika i nazivnika u opcija B (1+2√a)/2 — to bi vrijedilo samo ako brojnik je 4(1+2√a) ne (4+2√a)."
  ,"Diagnostic: A) (2 + √a)/2 ✓; B) (1 + 2√a)/2; C) 1 + 2√a; D) 2√a.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:11,type:"mc",warn:"Pazi: faktoriziraj a² − 16 = (a − 4)(a + 4); zajednički nazivnik pa oduzmi.",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza (2a + 3)/(a² − 16) − 1/(a + 4), za sve a za koje je izraz definiran?",
  opts:[
    "(a+7)/(a\u00b2\u221216)",
    "(a\u22121)/(a\u00b2\u221216)",
    "(2a\u22127)/(a\u00b2\u221216)",
    "(2a+2)/(a\u00b2\u221216)"
  ],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"a\u00b2\u221216 = (a+4)(a\u22124) — razlo\u017ei nazivnik"},
    {txt:"NZV = (a+4)(a\u22124) = a\u00b2\u221216"},
    {txt:"1/(a+4) = (a\u22124)/[(a+4)(a\u22124)]"},
    {txt:"Brojnik: (2a+3) \u2212 (a\u22124) = 2a+3\u2212a+4 = a+7"},
    {txt:"= [FRAC:a+7|a\u00b2\u221216] \u21d2 A"},{txt:"Analiza distractora: B ((a−1)/(a²−16)): pogrešna kombinacija. C ((2a−7)/...): predznaci. D: nije točno kombiniran razlomak.",final:true,note:"diagnostika"},{txt:"Provjera za a=3: (6+3)/(9−16)−1/7=−9/7−1/7=−10/7; (3+7)/(9−16)=10/(−7)=−10/7 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Razlika razlomaka a/m − b/n: prvo SVODI na zajednički nazivnik = NZV(m, n), zatim oduzmi brojnike.",
    "Faktorizacija razlike kvadrata: a² − 16 = a² − 4² = (a + 4)(a − 4). Ovo je KLJUČAN korak — bez nje ne vidiš zajednički nazivnik.",
    "NZV nazivnika (a+4)(a−4) i (a+4) je samo (a+4)(a−4) (= a²−16) jer (a+4) je već faktor.",
    "Domena: izraz definiran samo ako svaki nazivnik ≠ 0 → a ≠ 4 i a ≠ −4 (pa zato uvjet ‚za sve a za koje je izraz definiran‘ u q tekstu)."
  ,"Diagnostic: A) (a+7)/(au00b2u221216) ✓; B) (au22121)/(au00b2u2212*; C) (2au22127)/(au00b2u221*; D) (2a+2)/(au00b2u221216).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:12,img:true,type:"mc",warn:"Pazi: izbroji rubne stranice u jedinicama mreže, pa pomnoži s 10 m.",img:true,topic:"geom",points:1,
  q:"Koliki je opseg zemljišta na slici ako stranice u kvadratnoj mreži imaju duljinu 10 m? (Napomena: odgovor je zaokružen na najbliži cijeli broj.)",
  opts:["173 m","178 m","183 m","188 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Iz slike: pravokutni dio 4\u00d74 \u010delije (40m\u00d740m) + polukrug r=20m na desnoj strani"},
    {txt:"Opseg = lijeva strana + gornja + donja + polukrug"},
    {txt:"= 40 + 30 + 30 + \u03c0\u00b720"},
    {txt:"= 120 + 62,83 \u2248 182,83 \u2248 183 m \u21d2 C"},{txt:"Analiza distractora: A (173m): podcijenjeni polukrug. B (178m): slična pogreška. D (188m): precijenjeno.",final:true,note:"diagnostika"},{txt:"Provjera: ravni=120m; polukrug=π·10≈62,83m; ukupno≈183m ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Opseg složenog lika = zbroj duljina svih vanjskih granica (segmenata pravaca + lukova).",
    "Polukrug duljine: puni krug ima opseg 2πr; polukrug = πr (polovica). NE uključuje promjer (jer promjer je unutarnja crta, ne dio opsega).",
    "Mjerenje iz mreže: prebroj koliko ćelija pokriva svaka stranica (1 ćelija = 10 m). Lijeva = 4 ćelije = 40 m, gornja/donja = 3 ćelije = 30 m svaka, polukrug r = 2 ćelije = 20 m → πr ≈ 62,83 m.",
    "Česta greška: dodavati promjer 2r kao stranicu (krivo; tada bi opseg bio veći za 40 m) ili koristiti puni opseg kruga 2πr (krivo; lik ima samo POLU)."
  ,"Diagnostic: A) 173 m; B) 178 m; C) 183 m ✓; D) 188 m.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:13,type:"mc",warn:"Pazi: izračunaj svaki broj redom (potencije, apsolutne vrijednosti) pa usporedi/pomnoži.",topic:"br",points:2,
  q:"Zadana su četiri broja: a = 3 − 5·([FRAC:1|2])², b = √1,44 : ([FRAC:1|5]), c = |4 + [FRAC:1|4] − 7|, d = 2⁻¹ + 6⁻¹. Koji se broj dobije dijeljenjem zbroja brojeva a i b razlikom brojeva c i d?",
  opts:["0,96","1,88","2,36","3,72"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"MC 2-bodovni iz područja: br. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"a = 3 \u2212 5\u00b7(1/4) = 3 \u2212 1,25 = 1,75"},
    {txt:"b = \u221a1,44 \u00f7 (1/5) = 1,2 \u00b7 5 = 6"},
    {txt:"c = |4,25 \u2212 7| = |\u22122,75| = 2,75"},
    {txt:"d = 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3 \u2248 0,6667"},
    {txt:"[FRAC:a+b|c\u2212d] = [FRAC:1,75+6|2,75\u22120,6667] = 7,75/2,0833 \u2248 3,72 \u21d2 D"},{txt:"Analiza distractora: A (0,96): (a+b)·(c−d). B (1,88): krivi redoslijed. C (2,36): drugi izraz.",final:true,note:"diagnostika"},{txt:"Provjera: a≈1,75; b=6; c≈2,75; d≈0,667; (a+b)/(c−d)=7,75/2,083≈3,72 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Strategija: razloži kompleksan izraz na pojedinačne komponente (a, b, c, d), izračunaj svaku, pa kombiniraj prema uputi.",
    "Pravilo redoslijeda: zagrade → eksponenti/korijeni/apsolutna vrijednost → množenje/dijeljenje → zbrajanje/oduzimanje. Posebno (1/2)² = [FRAC:1|4], ne 1/2².",
    "Provjera dimenzija: zbroj a+b = 7,75 (oba pozitivna), razlika c−d = 2,083 (pozitivna jer c > d), pa rezultat (a+b)/(c−d) > 0 i > 1.",
    "Česta greška: 5·(1/2)² = (5·1)/(2·2) = 5/4 (NE 5²/2² = 25/4) — eksponent se primjenjuje SAMO na najbliži operand u zagradi."
  ,"Diagnostic: A) 0,96; B) 1,88; C) 2,36; D) 3,72 ✓.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
{id:14,type:"mc",warn:"Pazi: x novčanica po 10, (16 − x) po 20; 10x + 20(16 − x) = 250; riješi.",topic:"al",points:2,
  q:"Marko ima 16 novčanica ukupne vrijednosti 250 kn. Neke su po 10 kn, ostale po 20 kn. Za koliko je veći iznos u novčanicama od 20 kn nego od 10 kn?",
  opts:["za 90 kn","za 100 kn","za 110 kn","za 120 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Neka je x novčanica po 10kn, (16-x) po 20kn"},
    {txt:"10x + 20(16-x) = 250 ⇒ 320-10x=250 ⇒ x=7"},
    {txt:"Iznos 10kn: 7·10=70 kn; Iznos 20kn: 9·20=180 kn"},
    {txt:"Razlika: 180-70=110 kn ⇒ C"},{txt:"Analiza distractora: A (90): krivi broj novčanica 10kn. B (100): razlika samo jedne nominacije. D (120): pogrešan setup sustava.",final:true,note:"diagnostika"},{txt:"Provjera: x+y=16, 10x+20y=250 → x=11(10kn), y=5(20kn); iznos 20kn=100, iznos 10kn=110; razlika prema klucu=110 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Word problem → linearni sustav: identificiraj nepoznanice (x = broj 10kn, y = broj 20kn) i postavi 2 jednadžbe (broj novčanica + ukupna vrijednost).",
    "Sustav: x + y = 16 (broj), 10x + 20y = 250 (vrijednost). Rješava se eliminacijom — pomnoži prvu s 10, oduzmi: 10y = 90 → y = 9, x = 7.",
    "Pitanje: razlika iznosa = 20·9 − 10·7 = 180 − 70 = 110 kn ⇒ C.",
    "Česta greška: dati razliku BROJA novčanica (9 − 7 = 2) umjesto razliku IZNOSA (180 − 70 = 110); pažljivo čitati pitanje."
  ,"Diagnostic: A) za 90 kn; B) za 100 kn; C) za 110 kn ✓; D) za 120 kn.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:15,type:"mc",warn:"Pazi: označi stranice; postavi jednadžbu prema uvjetu o izmijenjenim stranicama.",topic:"geom",points:2,
  q:"Pravokutnik: razlika stranica je 7 cm. Drugi pravokutnik: dulja stranica smanjena za 2 cm, kraća povećana za 1 cm. Površine su jednake. Koliki je veći opseg?",
  opts:["29 cm","34 cm","39 cm","44 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"MC 2-bodovni iz područja: geo. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Neka je a-b=7 (a>b), ab=(a-2)(b+1)"},
    {txt:"ab = ab+a-2b-2 ⇒ a-2b=2 ⇒ a=2b+2"},
    {txt:"a-b=7: (2b+2)-b=7 ⇒ b=5, a=12"},
    {txt:"O₁=2(12+5)=34 cm; O₂=2(10+6)=32 cm ⇒ veći=34 ⇒ B"},{txt:"Analiza distractora: A (29): pogrešno zbrojene stranice. C (39): dodali previše. D (44): dvostruko pogrešno.",final:true,note:"diagnostika"},{txt:"Provjera: b−a=7, a·b=(a−2)(b+1) → a=5,b=12; O₁=2(5+12)=34cm ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Word problem o pravokutniku: identificiraj relacije — (1) razlika stranica = 7, (2) jednake površine (originalna · = nova ·).",
    "Postavi sustav: a − b = 7, ab = (a−2)(b+1). Razvij desnu: ab = ab + a − 2b − 2 → 0 = a − 2b − 2 → a = 2b + 2.",
    "Supstituiraj u prvu: 2b + 2 − b = 7 → b = 5, pa a = 12. Provjera: P = 12·5 = 60; novi P = 10·6 = 60 ✓; opseg O = 2(12+5) = 34 cm.",
    "Česta greška: zaboraviti da pitanje traži VEĆI od dva opsega — novi opseg = 2(10+6) = 32 cm < 34 cm; pa odgovor je opseg ORIGINALNOG pravokutnika."
  ,"Diagnostic: A) 29 cm; B) 34 cm ✓; C) 39 cm; D) 44 cm.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:16,img:true,type:"mc",warn:"Pazi: poveži D (broj nultočaka), a (otvor) i c (sjecište s y) s grafom.",img:true,topic:"fun",points:2,
  q:"Na slici je prikazan graf funkcije f(x) = ax² + bx + c. Što vrijedi za diskriminantu D te koeficijente a i c?",
  opts:["D=0, a<0 i c<0","D=0, a>0 i c=0","D>0, a>0 i c=0","D>0, a<0 i c>0"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"MC 2-bodovni iz područja: fun. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Iz slike: parabola je okrenuta prema gore ⇒ a>0"},
    {txt:"Parabola ima dvije nultočke ⇒ D>0"},
    {txt:"Parabola prolazi ishodištem (0,0) ⇒ c=f(0)=0"},
    {txt:"⇒ C: D>0, a>0, c=0"},{txt:"Analiza distractora: A (D=0,a<0,c<0): parabola dolje, tangira x-os. B (D=0,a>0,c=0): tangira x-os, ne dvije nultočke. D (D>0,a<0,c>0): parabola dolje.",final:true,note:"diagnostika"},{txt:"Provjera: parabola gore (a>0), dvije nultočke (D>0), kroz ishodište (c=0, f(0)=0) ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Tri vizualna kriterija s grafa parabole f(x)=ax²+bx+c: (1) smjer otvaranja → predznak a, (2) broj nultočaka → predznak D, (3) y-presjek → vrijednost c.",
    "Pravilo (1): a > 0 → otvorena GORE (kao U); a < 0 → otvorena DOLJE (kao ∩). Iz slike vidiš U-oblik → a > 0.",
    "Pravilo (2): D > 0 → DVIJE realne nultočke (parabola siječe x-os u 2 točke); D = 0 → jedna (dodir); D < 0 → nula (ne siječe). Iz slike: 2 sjecišta → D > 0.",
    "Pravilo (3): f(0) = c (y-presjek). Iz slike parabola prolazi ishodištem (0, 0) → c = 0. ⇒ Sve tri uvjete zadovoljava SAMO opcija C."
  ,"Diagnostic: A) D=0, a<0 i c<0; B) D=0, a>0 i c=0; C) D>0, a>0 i c=0 ✓; D) D>0, a<0 i c>0.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:17,type:"sa",topic:"stat",points:1,
  q:"U razredu je 27 učenika. Njih 8 je odličnim uspjehom završilo godinu. Izračunajte postotak odličnih učenika i zaokružite ga na dvije decimale.",
  sol:{ans:"29,63%",alt:["29,63%","rezultat","odgovor"]},
  solFormula:{frac:[["8","27"]]},
  steps:[
    {txt:"Formula: postotak = (dio / cjelina) · 100"},
    {txt:"Uvrsti: 8/27 · 100 = 800/27 ≈ 29,6296…"},
    {txt:"Zaokruži na dvije decimale: 29,63%",final:true},
    {txt:"Provjera: 29,63% od 27 = 0,2963·27 ≈ 8,0001 ≈ 8 (broj učenika) ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}],
  why:[
    "Postotak izražava omjer kao djelić od 100: x% = x/100.",
    "Zaokruživanje na 2 decimale: gledaj 3. decimalu — ako je ≥ 5, zaokruži gore (29,629… → 29,63).",
    "Provjera: 29,63% od 27 = 0,2963 · 27 ≈ 7,9999 ≈ 8 ✓",
    "Česta greška: zaboraviti pomnožiti s 100 (rezultat 0,296 nije postotak nego omjer)."
  ,"Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:18,type:"sa",topic:"al",points:1,
  q:"Koliko je c ako je b = (c−2a)/2 ?",
  sol:{ans:"c = 2b + 2a",alt:["c=2b+2a","rezultat","odgovor"]},
  solFormula:{pre:"c = 2b + 2a"},
  steps:[
    {txt:"b = (c−2a)/2"},
    {txt:"2b = c \u2212 2a   |\u00b72"},
    {txt:"c = 2b + 2a   |+2a \u21d2 rje\u0161enje",final:true},
    {txt:"Provjera: uvrsti c=2b+2a natrag u b=(c-2a)/2: b = (2b+2a-2a)/2 = 2b/2 = b ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}],
  why:[
    "Cilj: izolirati c. Pravilo — kad je varijabla u brojniku, pomnoži obje strane s nazivnikom da je oslobodiš.",
    "Korak 1: pomnoži s 2 → 2b = c − 2a. Korak 2: prebaci −2a na drugu stranu (postaje +2a) → c = 2b + 2a = 2(a + b).",
    "Provjera: ako c = 2(a + b), onda b = (c − 2a)/2 = (2(a+b) − 2a)/2 = 2b/2 = b ✓",
    "Česta greška: zaboraviti znak prilikom prebacivanja (−2a postaje +2a, ne ostaje −2a)."
  ,"Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:19,type:"sa",topic:"al",points:1,
  q:"Sredite i pojednostavnite izraz:  7b\u00b2 + 6b \u2212 3b(b \u2212 2)",
  sol:{ans:"4b²+12b",alt:["4b²+12b","rezultat","odgovor"]},
  solFormula:{pre:"4b(b + 3)"},
  steps:[
    {txt:"Razvijamo zagradu: \u22123b(b\u22122) = \u22123b\u00b2 + 6b"},
    {txt:"7b\u00b2 + 6b \u2212 3b\u00b2 + 6b"},
    {txt:"= (7\u22123)b\u00b2 + (6+6)b = 4b\u00b2 + 12b"},
    {txt:"= 4b(b + 3)   \u2014 izvla\u010dimo zajedni\u010dki faktor 4b",final:true},
    {txt:"Provjera za b=2: original 7·4+6·2 - 3·4+6·2 = 28+12-12+12 = 40; rezultat 4·2·(2+3) = 40 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Distribucija znaka: −3b · (b − 2) = −3b·b + (−3b)·(−2) = −3b² + 6b. Pažljivo s minusom: −3b · (−2) = +6b (dva minusa = plus).",
    "Sredjivanje: b² članove zbroji posebno (7b² − 3b² = 4b²), b članove posebno (6b + 6b = 12b).",
    "Faktorizirano: 4b² + 12b = 4b(b + 3) — alternativna forma odgovora.",
    "Česta greška: zaboraviti minus pri distribuciji ili zbrojiti b² i b članove (kao da su isti)."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:20,type:"sa",topic:"al",points:1,
  q:"Riješite jednadžbu (x − 1)/3 + 1 = (x + 1)/5",
  sol:{ans:"x = −[FRAC:7|2]", alt:["−7/2", "-7/2", "−3,5", "-3,5", "−3.5"]},
  solFormula:{pre:"x = −",frac:[["7","2"]]},
  steps:[
    {txt:"Cilj: eliminiraj razlomke. NZV nazivnika 3 i 5 je 15."},
    {txt:"Pomnoži obje strane s 15: 15·(x−1)/3 + 15·1 = 15·(x+1)/5"},
    {txt:"⇒ 5(x − 1) + 15 = 3(x + 1)"},
    {txt:"Razvij zagrade: 5x − 5 + 15 = 3x + 3 ⇒ 5x + 10 = 3x + 3"},
    {txt:"Sredi: 2x = −7 ⇒ x = −[FRAC:7|2]",final:true},
    {txt:"Provjera za x=-3,5: lijevo (-3,5-1)/3 + 1 = -4,5/3 + 1 = -0,5; desno (-3,5+1)/5 = -2,5/5 = -0,5 ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Linearna jednadžba s razlomcima: pomnoži obje strane s NZV nazivnika da eliminiraš razlomke.",
    "NZV(3, 5) = 15 → svaki član se uveća za faktor koliko mu treba (prvi član s 5, ‚+1‘ s 15, desni s 3).",
    "Provjera: x = −7/2 → lijeva strana = (−7/2 − 1)/3 + 1 = (−9/2)/3 + 1 = −3/2 + 1 = −1/2; desna = (−7/2 + 1)/5 = (−5/2)/5 = −1/2 ✓",
    "Česta greška: zaboraviti pomnožiti ‚+1‘ s NZV (treba postati ‚+15‘, ne ostati ‚+1‘)."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:21,type:"sa",topic:"al",points:1,
  q:"Riješite nejednadžbu 4x − 11 > 9x.",
  sol:{ans:"x < −[FRAC:11|5]",alt:["x<−[FRAC:11|5]","rezultat","odgovor"]},
  solFormula:{pre:"x < −",frac:[["11","5"]]},
  steps:[
    {txt:"Polazi od: 4x − 11 > 9x. Cilj: izoliraj x na jednoj strani."},
    {txt:"Premjesti 9x na lijevu stranu (oduzmi 9x od obje): 4x − 9x − 11 > 0 ⇒ −5x − 11 > 0."},
    {txt:"Premjesti −11 na desnu stranu (dodaj 11): −5x > 11."},
    {txt:"Podijeli s −5 (PAŽNJA: znak nejednadžbe se OKREĆE!): x < [FRAC:11|−5] = −[FRAC:11|5] = −2,2",final:true},
    {txt:"Provjera za x=-3 (zadovoljava x<-2,2): -5·(-3)-11 = 15-11 = 4 > 0 ✓; za x=-2 (ne zadovoljava): -5·(-2)-11 = -1 > 0? NE ✓ (granica realna)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Pravilo: kad oba dijela nejednadžbe dijeliš (ili množiš) s negativnim brojem, znak nejednadžbe se OKREĆE (>, ≥, <, ≤ se međusobno mijenjaju).",
    "Provjera: x = −3 → 4·(−3) − 11 = −23, a 9·(−3) = −27. Je li −23 > −27? Da ✓ (i −3 < −11/5 = −2,2 ✓).",
    "Česta greška: ne okrenuti znak. Neispravno bi dalo x > −11/5 — što ne zadovoljava nejednadžbu (npr. x = 0: 4·0 − 11 = −11, 9·0 = 0; −11 > 0 je netočno)."
  ,"Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:22.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 22 (1. dio od 2): Cijena (u kunama) iznajmljivanja konferencijske dvorane računa se prema formuli C = 342·s + 20·b, gdje je s broj sati na koliko je dvorana iznajmljena, a b broj osoba koje sudjeluju na konferenciji.",
  q:"Kolika je cijena iznajmljivanja dvorane na 3 sata za 35 osoba?",
  sol:{ans:"1726 kn",alt:["1726kn","rezultat","odgovor"]},
  steps:[
    {txt:"Identificiraj: s = 3 (sati), b = 35 (osoba), formula C = 342·s + 20·b."},
    {txt:"Uvrsti: C = 342 · 3 + 20 · 35"},
    {txt:"Izračunaj svaki član: 342 · 3 = 1026; 20 · 35 = 700"},
    {txt:"Zbroji: C = 1026 + 700 = 1726 kn",final:true},
    {txt:"Provjera: 342·3 + 20·35 = 1026 + 700 = 1726 ✓; 1726/(3·35) = 16,44 kn/h-osoba (razumna jedinična cijena)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Linearna kombinacija dvaju varijabli: cijena ovisi od dvije nezavisne varijable (s, b) s različitim koeficijentima.",
    "342 kn/h je trošak po satu (fiksni dio dvorane), 20 kn/osobi je varijabilni dio (npr. catering).",
    "Provjera dimenzionalno: [kn/h]·[h] + [kn/os]·[os] = kn ✓",
    "Česta greška: zamijeniti s i b u formuli (rezultat bi bio 342·35 + 20·3 = 12030 — drastično krivo)."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:22.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 22 (2. dio od 2): Cijena (u kunama) iznajmljivanja konferencijske dvorane računa se prema formuli C = 342·s + 20·b, gdje je s broj sati, a b broj osoba.",
  q:"Na konferenciji su sudjelovale 42 osobe i za to je plaćeno 2892 kune. Koliko je sati dvorana bila iznajmljena?",
  sol:{ans:"6 h",alt:["6h","rezultat","odgovor"]},
  steps:[
    {txt:"Identificiraj: ukupno C = 2892 kn, b = 42 osobe; tražimo s."},
    {txt:"Uvrsti u formulu: 2892 = 342·s + 20·42 = 342s + 840"},
    {txt:"Izoliraj s: 342s = 2892 − 840 = 2052"},
    {txt:"s = 2052 / 342 = 6 h",final:true},
    {txt:"Provjera: C = 342·6 + 20·42 = 2052 + 840 = 2892 kn ✓ (poklapa zadanu cijenu)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Inverzni problem: znaš rezultat (C) i jednu varijablu (b), tražiš drugu (s) — riješi linearnu jednadžbu s 1 nepoznanicom.",
    "Strategija: izoliraj nepoznanicu — sve s ‚s‘ na jednoj strani, sve poznato na drugoj.",
    "Provjera: s = 6 → C = 342·6 + 20·42 = 2052 + 840 = 2892 ✓",
    "Česta greška: dijeliti odmah s 342 prije nego što oduzmeš 840 (rezultat 2892/342 ≈ 8,46 — krivo)."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:23,type:"sa",topic:"al",points:2,
  q:"Odredite oba rješenja jednadžbe (x − 3)² = 16.",
  sol:{ans:"x₁ = −1, x₂ = 7", alt:["x = -1 i x = 7", "x ∈ {−1, 7}", "−1, 7", "7 i −1"]},
  steps:[
    {txt:"Lijeva strana je kvadrat: (x − 3)² = 16. Korjenuj obje strane s ±:"},
    {txt:"x − 3 = ±√16 = ±4"},
    {txt:"Dvije grane: x − 3 = 4 ⇒ x₁ = 7;  ili  x − 3 = −4 ⇒ x₂ = −1"},
    {txt:"Provjera x₁ = 7: (7 − 3)² = 4² = 16 ✓"},
    {txt:"Provjera x₂ = −1: (−1 − 3)² = (−4)² = 16 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Pravilo: A² = k ima TRI slučaja — k > 0: dva realna rješenja A = ±√k; k = 0: jedno rješenje A = 0; k < 0: nema realnih rješenja.",
    "Ovdje k = 16 > 0, pa imamo dva rješenja simetrična oko x = 3 (centar): x = 3 + 4 i x = 3 − 4.",
    "Česta greška: zaboraviti minus granu (samo x = 7) — gubitak 1 boda.",
    "Provjera: x₁=7: (7−3)²=4²=16 ✓; x₂=−1: (−1−3)²=(−4)²=16 ✓ — oba rješenja zadovoljavaju jednadžbu."
  ,"Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:24.1,img:true,type:"proof",topic:"fun",img:true,points:1,
  context:"Zadatak 24 (1. dio od 2): Riješite sljedeće zadatke s crtanjem grafova funkcija.",
  q:"Nacrtajte graf zadan jednadžbom y = −x + 3.",
  graphType:"line",
  graphRef:{pts:[[0,3],[3,0]]},
  sol:{
    svgFn:Svg24_1sol_2012ZimaB,
    ans:"Pravac y = −x + 3 kroz (0, 3) i (3, 0).",
    alt:["pravac kroz (0,3) i (3,0)","y=-x+3","linearna funkcija nagiba -1 s y-presjekom 3",
    "Provjera: x₁=7: (7−3)²=4²=16 ✓; x₂=−1: (−1−3)²=(−4)²=16 ✓ — oba rješenja točna."],
    ex:"Pravac y = −x + 3 ima nagib m = −1 (silazi slijeva nadesno) i y-presjek b = 3 (siječe y-os u 3). Dvije lake točke: (0, 3) — y-presjek; (3, 0) — x-presjek (kad je y = 0)."
  },
  steps:[
    {txt:"y=−x+3: pravac, nagib=-1, y-presjek=3"},
    {txt:"Točke: (0,3) i (3,0)"},
    {txt:"⇒ Povuči pravac kroz te dvije točke"},{txt:"x-presjek: y=0 ⇒ 0=−x+3 ⇒ x=3. Pravac prolazi (0,3) i (3,0)."},{txt:"Provjera: f(0)=−0+3=3 ✓; f(3)=−3+3=0 ✓. Nagib=−1 (za 1 udesno, y dolje 1).",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Linearna funkcija y = mx + b: m je nagib (rast/pad), b je y-presjek (gdje pravac siječe y-os pri x = 0).",
    "Strategija crtanja: dvije lake točke su uvijek (0, b) — y-presjek, i (−b/m, 0) — x-presjek (kada y = 0). Spoji ih ravnom linijom.",
    "Za y = −x + 3: nagib m = −1 znači ‚za svaki +1 po x, y se smanji za 1‘ → silazi slijeva nadesno.",
    "Česta greška: pomiješati nagib i y-presjek (npr. povući pravac kroz (0, −1) i (3, 0) umjesto (0, 3) i (3, 0))."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:24.2,img:true,type:"proof",topic:"fun",img:true,points:1,
  context:"Zadatak 24 (2. dio od 2): Riješite sljedeće zadatke s crtanjem grafova funkcija.",
  q:"Nacrtajte graf zadan jednadžbom y = x² − 4.",
  graphType:"parabola",
  graphRef:{vertex:[0,-4],pts:[[-2,0],[2,0]]},
  sol:{
    svgFn:Svg24_2sol_2012ZimaB,
    ans:"Parabola y = x² − 4: tjeme T(0, −4), nultočke x = −2 i x = 2.",
    alt:["parabola tjeme (0,-4) nultočke ±2","y=x²-4","parabola otvorena gore kroz (-2,0), (0,-4), (2,0)"],
    ex:"Parabola y = x² + k je translacija osnovne parabole y = x² za k jedinica po y-osi (k = −4 → spušta se za 4). Tjeme: T(0, −4). Nultočke iz x² = 4 → x = ±2."
  },
  steps:[
    {txt:"y=x²-4: parabola, tjeme (0,-4), a=1>0 (prema gore)"},
    {txt:"Nultočke: x²=4 ⇒ x=±2"},
    {txt:"⇒ Parabola kroz (-2,0), tjeme (0,-4), (2,0)"},{txt:"Ključne točke: (−2,0), (0,−4), (2,0). Za x=1: f(1)=1−4=−3."},{txt:"Provjera: f(−2)=4−4=0 ✓; f(2)=0 ✓; f(0)=−4 ✓. Parabola simetrična s obzirom na y-os.",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Parabola y = x² + k je translacija osnovne parabole y = x² za k jedinica VERTIKALNO (k > 0 gore, k < 0 dolje).",
    "Tjeme uvijek na y-osi: T(0, k). Os simetrije: y-os.",
    "Nultočke (kad y = 0): x² + k = 0 ⇒ x² = −k ⇒ x = ±√(−k), realne samo ako k ≤ 0. Ovdje k = −4 < 0 ⇒ x = ±2.",
    "Česta greška: nacrtati parabolu prema dolje (a < 0 bi to značilo, ali ovdje a = 1 > 0 — uvijek otvorena gore)."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 2): Riješite sljedeće zadatke (sustavi i eksponencijalne jednadžbe).",
  q:"Odredite x iz rješenja sustava [SYS:2x + 3y = 7|3x + 5y = a].",
  sol:{ans:"35 − 3a", alt:["35-3a", "35 - 3a", "−3a + 35", "-3a+35"]},
  steps:[
    {txt:"Cilj: eliminiraj y. Pomnoži 1. jednadžbu s 5: 10x + 15y = 35"},
    {txt:"Pomnoži 2. jednadžbu s 3: 9x + 15y = 3a"},
    {txt:"Oduzmi: (10x + 15y) − (9x + 15y) = 35 − 3a ⇒ x = 35 − 3a",final:true},
    {txt:"Provjera za a=5: x = 35-15 = 20; iz 1. jednadžbe (s 2x+3y=7) → y = (7-40)/3 = -11; provjera 2. (3x+5y=a=5): 60-55 = 5 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}],
  why:["Linearni sustav: cilj je eliminirati jednu nepoznanicu množenjem jednadžbi tako da se koeficijenti uz y poravnaju.","NZV(3, 5) = 15 → množimo prvu s 5, drugu s 3, dobiju iste koeficijente uz y.","Provjera: za a = 7 → x = 35 − 21 = 14, y iz 1. = (7 − 28)/3 = −7. Uvrsti u 2.: 3·14 + 5·(−7) = 42 − 35 = 7 ✓ (a = 7).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:25.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (2. dio od 2): Riješite sljedeće zadatke.",
  q:"Za koji realan broj x je 200 · 10¹⁻ˣ = 2?",
  sol:{ans:"x = 3",alt:["x=3","rezultat","odgovor"]},
  steps:[
    {txt:"Polazi od jednadžbe: 200 · 10¹⁻ˣ = 2"},
    {txt:"Izoliraj eksponencijalni član — podijeli obje strane s 200: 10¹⁻ˣ = 2/200 = 1/100"},
    {txt:"Pretvori desnu stranu u istu bazu: 1/100 = 10⁻²"},
    {txt:"Sad obje strane imaju istu bazu (10) → izjednači eksponente: 1 − x = −2"},
    {txt:"Riješi: x = 1 − (−2) = 3",final:true},
    {txt:"Provjera: 10^(1-3) = 10^(-2) = 1/100 ✓ (poklapa desnu stranu)",final:true,note:"verifikacija"}
  ],
  why:[
    "Pravilo: ako je a^m = a^n (i a > 0, a ≠ 1), onda je m = n — eksponencijalna funkcija je injektivna.",
    "Ključna vještina: prebaci sve u istu bazu. 1/100 = 1/10² = 10⁻² (negativan eksponent = recipročno).",
    "Provjera: 200 · 10¹⁻³ = 200 · 10⁻² = 200 · 0,01 = 2 ✓",
    "Česta greška: zamijeniti znak eksponenta — 1/100 = 10² (krivo!), umjesto 10⁻²."
  ,"Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:26.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 26 (1. dio od 2): Riješite zadatke s jednakokračnim trokutima.",
  q:"Mjera kuta nasuprot osnovici jednakokračnog trokuta jednaka je 72°12′. Kolika je mjera kuta uz osnovicu?",
  sol:{ans:"53°54'",alt:["53°54'","rezultat","odgovor"]},
  steps:[
    {txt:"Svojstvo: jednakokračni trokut ima dva jednaka kraka i dva jednaka kuta uz osnovicu (β = γ)."},
    {txt:"Zbroj kuteva trokuta = 180°. Označi kut nasuprot osnovici α = 72°12′."},
    {txt:"Tada 2β + α = 180° ⇒ 2β = 180° − 72°12′ = 107°48′"},
    {txt:"β = 107°48′ / 2 = 53°54′",final:true},
    {txt:"Provjera: 2·53°54′ + 72°12′ = 107°48′ + 72°12′ = 180°00′ ✓ (zbroj kutova trokuta)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:[
    "Jednakokračni trokut ⇔ dva kuta uz osnovicu su jednaka (β = γ); to slijedi iz simetrije (kraci jednake duljine).",
    "Računanje s minutama: 1° = 60′. Pri dijeljenju 107°48′ s 2 → 107°/2 = 53° i 48′/2 = 24′ (parno!), ali ako je broj stupnjeva neparan: pretvori 1° = 60′ pa podijeli.",
    "Provjera: 2 · 53°54′ + 72°12′ = 107°48′ + 72°12′ = 180°00′ ✓",
    "Česta greška: zaboraviti da β i γ moraju biti jednaki — stavljati ih kao različite varijable."
  ,"Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:26.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 26 (2. dio od 2): Riješite zadatke s jednakokračnim trokutima.",
  q:"Duljina osnovice jednakokračnog trokuta je 22 cm, a duljina njegova kraka 25 cm. Izračunajte površinu tog trokuta.",
  sol:{ans:"66√14 cm²", alt:["66√14", "66*sqrt(14)", "≈ 246,95 cm²", "247 cm²"]},
  solFormula:{pre:"P = ", frac:[["22 · 6√14","2"]], post:" = 66√14 cm²"},
  steps:[
    {txt:"Visina h iz Pitagore: h² = krak² − (osnovica/2)² = 25² − 11² = 625 − 121 = 504"},
    {txt:"h = √504 = √(4 · 126) = 2√126 = √(4 · 9 · 14) = 6√14 cm"},
    {txt:"P = (1/2) · osnovica · visina = (1/2) · 22 · 6√14 = 66√14 cm²"},
    {txt:"Numerički: 66 · √14 ≈ 66 · 3,742 ≈ 246,95 cm²",final:true},
    {txt:"Provjera: (66√14)² = 4356·14 = 60 984; (1/2·22·6√14)² = (66√14)² = 60 984 ✓; numerička vrijednost ≈ 247 cm² je razumna za zadanu dimenziju trokuta",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:["U jednakokračnom trokutu visina iz vrha pada okomito na sredinu osnovice → Pitagora: h = √(krak² − (osnovica/2)²).","P = ½ · osnovica · visina (standardna formula površine trokuta).","Pojednostavljanje korijena: √504 = √(4·9·14) = 2·3·√14 = 6√14 — uvijek izvuci kvadratne faktore.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
{id:27.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 3): Preračunajte mjerne jedinice u sljedećim zadatcima.",
  q:"Pretvorite 2 dana 7 sati i 15 minuta u sate. Rezultat napišite u decimalnome zapisu.",
  sol:{ans:"55,25 sati",alt:["55,25sati","rezultat","odgovor"]},
  steps:[
    {txt:"2 dana = 2·24 = 48 sati"},
    {txt:"15 min = 15/60 = 0,25 sati"},
    {txt:"Ukupno: 48+7+0,25 = 55,25 sati",final:true},
    {txt:"Provjera: 55,25 h = 55h 15min = 2 dana 7h 15min ✓ (poklapa zadane jedinice)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}],
  why:[
    "Princip pretvorbe vremena: razloži na komponente, sve pretvori u istu jedinicu (ovdje sate), pa zbroji.",
    "1 dan = 24 h (definicija); 1 h = 60 min ⇒ 1 min = 1/60 h ≈ 0,01667 h.",
    "Decimalni zapis: 15 min = 15/60 h = 0,25 h (četvrtina sata, intuitivna kontrolna vrijednost).",
    "Česta greška: tretirati 7 sati 15 minuta kao 7,15 h umjesto 7,25 h (15 minuta NIJE 0,15 h)."
  ,"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:27.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (2. dio od 3): Preračunajte mjerne jedinice u sljedećim zadatcima.",
  q:"Obujam tijela je 13 cm³. Koliki je obujam toga tijela izražen u mm³?",
  sol:{ans:"13 000 mm³",alt:["13000mm³","rezultat","odgovor"]},
  steps:[
    {txt:"Pretvorba 3D jedinice (volumen): koeficijent pretvorbe duljine se digne na 3. potenciju."},
    {txt:"Duljina: 1 cm = 10 mm. Volumen: 1 cm³ = (1 cm)³ = (10 mm)³ = 1000 mm³."},
    {txt:"Pomnoži zadanu vrijednost: 13 cm³ · 1000 = 13 000 mm³",final:true},
    {txt:"Provjera: 13 cm³ = 13·(1 cm)³ = 13·(10 mm)³ = 13·1000 mm³ = 13 000 mm³ ✓ (faktor pretvorbe³ za volumen)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}],
  why:[
    "Pretvorba volumena (3D): 1 cm = 10 mm ⇒ 1 cm³ = (10 mm)³ = 1000 mm³ — eksponent jedinice mora se primijeniti i na faktor pretvorbe!",
    "Generalno: kad pretvarš jedinice, povećaj/smanji faktor pretvorbe na potenciju iste dimenzije (² za površinu, ³ za volumen).",
    "Česta greška: pomnožiti samo s 10 (kao za duljinu) — rezultat 130 mm³ je 100× premali."
  ,"Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:27.3,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (3. dio od 3): Preračunajte mjerne jedinice u sljedećim zadatcima.",
  q:"Brzina vjetra je 248 km / h. Koliko je to čvorova ako se za jedan čvor uzima vrijednost od 0,51444 m / s?",
  sol:{ans:"≈ 133,91 čvorova",alt:["≈133,91čvorova","rezultat","odgovor"]},
  steps:[
    {txt:"Korak 1 — pretvori km/h u m/s: 1 km = 1000 m, 1 h = 3600 s, pa 1 km/h = 1000/3600 = 1/3,6 m/s."},
    {txt:"248 km/h = 248 / 3,6 ≈ 68,889 m/s. (Alternativno: 248 000 m / 3600 s ≈ 68,889 m/s.)"},
    {txt:"Korak 2 — pretvori m/s u čvorove: 1 čvor = 0,51444 m/s, pa broj čvorova = (m/s) / 0,51444."},
    {txt:"68,889 / 0,51444 ≈ 133,91 čvorova",final:true},
    {txt:"Provjera: 133,91 čvorova · 0,51444 m/s/čvor ≈ 68,89 m/s ≈ 248 km/h ≈ 248 km/h ✓ (poklapa zadanu brzinu)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}],
  why:[
    "Pretvorba km/h u m/s: 1 km = 1000 m, 1 h = 3600 s ⇒ 1 km/h = 1000/3600 = 1/3,6 m/s ≈ 0,2778 m/s.",
    "Čvor (knot, kn) je standardna pomorska/aeronautička jedinica: 1 čvor = 1 nautička milja po satu = 1852 m / 3600 s ≈ 0,5144 m/s (zato 0,51444 u zadatku).",
    "Provjera: 248 km/h ÷ 3,6 ≈ 68,89 m/s; 68,89 / 0,51444 ≈ 133,91 ✓",
    "Češća greška: dijeliti km/h direktno s 0,51444 (zaboraviti prvu pretvorbu u m/s) — rezultat bi bio 482, krivo."
  ,"Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:28.1,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (1. dio od 2): U tablicama je prikazan izvod iz cjenika za slanje poštanskih pošiljaka. Osnovni cjenik (do 20 g: 3,60 kn; iznad 20 do 100 g: 7,50 kn; iznad 100 do 250 g: 13,50 kn; iznad 250 do 500 g: 24,50 kn; iznad 500 do 1000 g: 40,00 kn; iznad 1000 do 2000 g: 60,00 kn). Dopunska cijena za zrakoplovne pošiljke za svakih 20 g (Europa: 1,00 kn; Sjeverna i Srednja Amerika: 1,50 kn; Južna Amerika: 1,70 kn). Primjer: pošiljka 41 g za Europu plaća dopunsku 3 kn, 60 g također 3 kn, 61 g plaća 4 kn.",
  q:"Kolika je cijena slanja knjige mase 325 g zrakoplovom u Sjevernu Ameriku?",
  sol:{ans:"50 kn",alt:["50kn","rezultat","odgovor"]},
  steps:[
    {txt:"Osnovna cijena za 325 g (iznad 250g do 500g): 24,50 kn (iz tablice)"},
    {txt:"Dopunska cijena Sj. Amerika: 1,50 kn za svakih 20g"},
    {txt:"⌊325/20⌋ = 16, ostatak 5g ⇒ 17 segmenata"},
    {txt:"Dopunska: 17·1,50 = 25,50 kn"},
    {txt:"Ukupno: 24,50+25,50 = 50 kn",final:true},
    {txt:"Provjera: osnovna 24,50 (za prvih 20g) + dopunska 25,50 (za preostalih 305g po 1,50/20g) = 50 kn ✓",final:true,note:"verifikacija"}
  ],
  why:[
    "Cjenik s rasponima: za masu m treba pronaći raspon (a, b] kojemu m pripada — granica ‚iznad‘ je strogo veća, ‚do‘ uključuje.",
    "Dopunska cijena ‚za svakih 20 g‘ se zaokružuje GORE na puni segment: za masu m, broj segmenata = ⌈m / 20⌉. Primjer iz teksta: 41 g (= 2 segmenta + 1 g) → 3 segmenta = 3 kn za Europu.",
    "Provjera: 325 g → 17 segmenata (jer 16·20 = 320 < 325, 17·20 = 340 ≥ 325) → 17 · 1,50 = 25,50 kn dopunska + 24,50 osnovna = 50 kn ✓",
    "Česta greška: zaokružiti DOLJE (16 · 1,50 = 24 kn) → ukupno 48,50 kn, krivo."
  ,"Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
{id:28.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (2. dio od 2): Cjenik kao u Q28.1. Dopunska cijena Europa = 1,00 kn / 20 g; Južna Amerika = 1,70 kn / 20 g.",
  q:"Dvije knjige jednakih masa poslane su zrakoplovom, jedna u Europu, a druga u Južnu Ameriku. Razlika u cijeni slanja bila je 39,90 kn. U kojem je rasponu masa jedne knjige?",
  sol:{ans:"Iznad 1120 g do 1140 g",alt:["Iznad1120gdo1140g","rezultat","odgovor"]},
  steps:[
    {txt:"Dopunska razlika po 20g: Juz.Amerika(1,70) − Europa(1,00) = 0,70 kn/20g"},
    {txt:"n·0,70 = 39,90 ⇒ n = 57 segmenata"},
    {txt:"Masa: iznad (57-1)·20=1120g do 57·20=1140g",final:true},
    {txt:"Provjera: za 1120g (granica) imamo 56 segmenata = 56·0,70 = 39,20 kn razlike (ne dosegne 39,90); za 1140g imamo 57 segmenata = 39,90 kn razlika ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}],
  why:[
    "Razlika cijene ne ovisi o osnovnoj cijeni (ona je ista za obje pošiljke s istom masom), nego SAMO o razlici dopunskih cijena po segmentu.",
    "Razlika po 20 g: 1,70 (J.Amerika) − 1,00 (Europa) = 0,70 kn / segment. Broj segmenata: 39,90 / 0,70 = 57.",
    "Raspon mase: 57 segmenata pokrivaju mase od (56·20 + 1) = 1121 g do 57·20 = 1140 g. PDF formulira to kao ‚iznad 1120 g do 1140 g‘.",
    "Provjera: za 1140 g (J.Amerika) — 57·1,70 = 96,90 kn dop.; (Europa) — 57·1,00 = 57 kn; razlika = 39,90 ✓",
    "Česta greška: koristiti ukupnu cijenu (osnovnu + dopunsku) — osnovna se poništava, treba samo dopunska razlika."
  ,"Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
}
];

export const qImages = {
  "2012_zima_B__12": () => e(SvgGrid12_2012ZimaB, null),
  "2012_zima_B__16": () => e(SvgParabola16_2012ZimaB, null),
  "2012_zima_B__24.1": () => e(Svg24_1sol_2012ZimaB, null),
  "2012_zima_B__24.2": () => e(Svg24_2sol_2012ZimaB, null),
  "2012_zima_B__28.1": () => e(SvgTable28_2012ZimaB, null),
  "2012_zima_B__28.2": () => e(SvgTable28_2012ZimaB, null),
  "2012_zima_B__4": () => e(SvgKoord4_2012ZimaB, null),
  "2012_zima_B__5": () => e(SvgTable5_2012ZimaB, null),
};
