// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg7_2023Ajesen(){
  const stroke="var(--text)", grid="#94a3b8";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Helper: pravac na mini-koordinatnom sustavu. Svaki mini ima prefix u ključevima.
  // Pravac CLIPED u pravokutnik mini grafa da ne izlazi van
  const mini=(slope, intercept, label, xo, yo)=>{
    const s=16, ox=xo+55, oy=yo+55;
    const px=x=>ox+x*s, py=y=>oy-y*s;
    const p=label+'_';
    // Clip pravac u pravokutnik [-3, 3] × [-3, 3] u koordinatama jedinica
    // Nađemo sjecišta pravca y = slope*x + intercept s rubovima pravokutnika
    const pts=[];
    // Lijevi rub x=-3
    let y_left = slope*(-3) + intercept;
    if(y_left >= -3 && y_left <= 3) pts.push([-3, y_left]);
    // Desni rub x=3
    let y_right = slope*3 + intercept;
    if(y_right >= -3 && y_right <= 3) pts.push([3, y_right]);
    // Gornji rub y=3 → x = (3 - intercept)/slope
    if(slope !== 0){
      let x_top = (3 - intercept)/slope;
      if(x_top > -3 && x_top < 3) pts.push([x_top, 3]);
      let x_bot = (-3 - intercept)/slope;
      if(x_bot > -3 && x_bot < 3) pts.push([x_bot, -3]);
    }
    // Uzmemo 2 točke (uvijek će biti barem 2 za pravac koji ulazi u pravokutnik)
    const [[x1,y1],[x2,y2]] = pts.slice(0,2);
    return [
      ...[...Array(7)].map((_,i)=>e('line',{key:p+'vg'+i,x1:ox+(i-3)*s,y1:oy-3*s,x2:ox+(i-3)*s,y2:oy+3*s,stroke:grid,strokeWidth:0.4})),
      ...[...Array(7)].map((_,i)=>e('line',{key:p+'hg'+i,x1:ox-3*s,y1:oy+(i-3)*s,x2:ox+3*s,y2:oy+(i-3)*s,stroke:grid,strokeWidth:0.4})),
      // Okvir pravokutnika
      e('rect',{key:p+'rect',x:ox-3*s,y:oy-3*s,width:6*s,height:6*s,fill:"none",stroke:_BLUE,strokeWidth:0.6}),
      // Osi
      e('line',{key:p+'xa',x1:ox-3*s,y1:oy,x2:ox+3*s,y2:oy,stroke:_BLUE,strokeWidth:1}),
      e('line',{key:p+'ya',x1:ox,y1:oy-3*s,x2:ox,y2:oy+3*s,stroke:_BLUE,strokeWidth:1}),
      e('circle',{key:p+'c01',cx:ox,cy:py(1),r:2,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:0.8}),
      e('text',{key:p+'t01',x:ox-10,y:py(1)+4,fontSize:9,fill:"#94a3b8"},"1"),
      e('text',{key:p+'t00',x:ox-10,y:oy+11,fontSize:9,fill:"#94a3b8"},"0"),
      e('text',{key:p+'tx',x:ox+3*s+3,y:oy+4,fontSize:10,fontStyle:"italic",fill:stroke},"x"),
      e('text',{key:p+'ty',x:ox+3,y:oy-3*s-2,fontSize:10,fontStyle:"italic",fill:stroke},"y"),
      // Pravac CLIPED u pravokutnik
      e('line',{key:p+'ln',x1:px(x1),y1:py(y1),x2:px(x2),y2:py(y2),stroke:_BLUE,strokeWidth:1.8}),
      // Oznaka label
      e('text',{key:p+'lb',x:xo+5,y:yo+118,fontSize:15,fontWeight:700,fill:stroke},label+".")
    ];
  };
  return e('svg',{viewBox:"0 0 360 290",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    // PDF-točni distraktori — svi paneli imaju nagib ±2, intercepti ±2 i +4
    // A: padajući kroz (0,-2) i (-1,0) — y = -2x - 2
    ...mini(-2, -2, "A", 0, 0),
    // B: padajući kroz (0,4) i (2,0) — y = -2x + 4 (TOČAN)
    ...mini(-2, 4, "B", 180, 0),
    // C: rastući kroz (1,0) i (0,-2) — y = 2x - 2
    ...mini(2, -2, "C", 0, 140),
    // D: rastući kroz (-1,0) i (0,2) — y = 2x + 2
    ...mini(2, 2, "D", 180, 140)
  );
}

function Svg39b_2023Ajesen(){
  const stroke="var(--text)", grid="#94a3b8", muted="var(--muted)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // viewBox 600x340. x od -π do 2π (3π jedinica), scale ≈ 180 px/π
  // Centriramo na x=0 u pixel ox=220, y=0 na oy=150
  const sx=180/Math.PI, sy=40;  // 40 px/jed y
  const ox=220, oy=150;
  const px=x=>ox+x*sx, py=y=>oy-y*sy;
  // f(x) = 2·cos(3x) − 1
  const f=x=>2*Math.cos(3*x) - 1;
  // Uzorkujemo krivulju
  const samples=[];
  for(let t=-Math.PI; t<=2*Math.PI; t+=0.02) samples.push([t, f(t)]);
  return e('svg',{viewBox:"0 0 600 340",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"600px",width:"100%",display:"block",margin:"12px auto"}},
    // Grid: vertikalne na π/2 razmaku
    ...[...Array(7)].map((_,i)=>{const x=-Math.PI + i*Math.PI/2; return e('line',{key:'vg'+i,x1:px(x),y1:20,x2:px(x),y2:320,stroke:grid,strokeWidth:0.5})}),
    // Horizontalne grid
    ...[...Array(7)].map((_,i)=>{const y=-5+i; return e('line',{key:'hg'+i,x1:20,y1:py(y),x2:580,y2:py(y),stroke:grid,strokeWidth:0.5})}),
    // Osi
    e('defs',{key:'d'},e('marker',{id:"ah39j",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"7",markerHeight:"7",orient:"auto"},
      e('path',{d:"M0,0 L10,5 L0,10 z",fill:stroke}))),
    e('line',{key:'xa',x1:20,y1:oy,x2:580,y2:oy,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah39j)"}),
    e('line',{key:'ya',x1:ox,y1:320,x2:ox,y2:18,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah39j)"}),
    // Oznake osi
    e('text',{key:'lx',x:577,y:oy-6,fontSize:14,fontStyle:"italic",fill:stroke},"x"),
    e('text',{key:'ly',x:ox+6,y:24,fontSize:14,fontStyle:"italic",fill:stroke},"y"),
    e('text',{key:'l0',x:ox-12,y:oy+14,fontSize:11,fill:muted},"0"),
    e('text',{key:'l1',x:ox-14,y:py(1)+4,fontSize:11,fill:muted},"1"),
    // Jedinice na x-osi: -π, π, 2π
    e('circle',{key:'c_mpi',cx:px(-Math.PI),cy:oy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('text',{key:'l_mpi',x:px(-Math.PI)-8,y:oy+14,fontSize:12,fill:muted,textAnchor:"end"},"−π"),
    e('circle',{key:'c_pi',cx:px(Math.PI),cy:oy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('text',{key:'l_pi',x:px(Math.PI)+4,y:oy+14,fontSize:12,fill:muted},"π"),
    e('circle',{key:'c_2pi',cx:px(2*Math.PI),cy:oy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('text',{key:'l_2pi',x:px(2*Math.PI)+4,y:oy+14,fontSize:12,fill:muted},"2π"),
    e('circle',{key:'c01',cx:ox,cy:py(1),r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    // Krivulja
    e('polyline',{key:'curve',points:samples.map(([x,y])=>px(x)+","+py(y)).join(' '),fill:"none",stroke:_BLUE,strokeWidth:2})
  );
}

function Svg33b_2023Ajesen(){
  const stroke="var(--text)", muted="#94a3b8";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // viewBox 380x240
  // A(40,200), B(340,200), C(280,50)
  // D na AB: (40 + (18/30)·(340−40), 200) = (220, 200) (AD=18 iz odgovora, ali 
  //   ovdje D mora biti tako da AD bude nepoznato — ali iz PDF-a D je između A i B blizu A)
  // Iz PDF-a: D je blizu A (manja trećina AB od A strane)
  // Za AD=12 (točan odgovor): D = A + (12/30)·(B−A) = (40 + 0.4·300, 200) = (160, 200)
  // E na BC: BE/BA = 15/25 = 0.6? Ne — iz trokuta BDE sličnog BAC: BD/BA = BE/BC = DE/AC = 15/25 = 3/5
  //   BD = BA · 3/5 = 18 → D = B + (BD/BA)·(A − B)... neka koristimo čista od A
  //   AD = 12 → D = (160, 200) (kao gore)
  //   BE = 3/5 · BC. |BC| = √((280-340)² + (50-200)²) = √(3600+22500) = √26100 ≈ 161.55 (virtualno)
  //   E = B + (BE/|BC|)·(C−B)... algebraski (3/5) · (C − B) + B = (3/5)·(−60,−150) + (340,200) = (−36+340, −90+200) = (304, 110)
  return e('svg',{viewBox:"0 0 380 240",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    // Trokut ABC
    e('polygon',{key:'abc',points:"40,200 340,200 280,50",fill:"none",stroke:_BLUE,strokeWidth:1.6}),
    // Dužina DE (D=(160,200), E=(304,110))
    e('line',{key:'de',x1:160,y1:200,x2:304,y2:110,stroke:_BLUE,strokeWidth:1.4}),
    // Vrhovi
    e('circle',{key:'pA',cx:40,cy:200,r:3,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1.3}),
    e('circle',{key:'pB',cx:340,cy:200,r:3,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1.3}),
    e('circle',{key:'pC',cx:280,cy:50,r:3,fill:_RED}),
    e('circle',{key:'pD',cx:160,cy:200,r:3,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1.3}),
    e('circle',{key:'pE',cx:304,cy:110,r:3,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1.3}),
    // Oznake
    e('text',{key:'lA',x:30,y:218,fontSize:14,fontStyle:"italic",fill:_GOLD},"A"),
    e('text',{key:'lB',x:346,y:218,fontSize:14,fontStyle:"italic",fill:_GOLD},"B"),
    e('text',{key:'lC',x:286,y:42,fontSize:14,fontStyle:"italic",fill:_GOLD},"C"),
    e('text',{key:'lD',x:152,y:218,fontSize:14,fontStyle:"italic",fill:_GOLD},"D"),
    e('text',{key:'lE',x:310,y:108,fontSize:14,fontStyle:"italic",fill:_GOLD},"E"),
    // Oznake stranica
    e('text',{key:'lAB',x:190,y:232,fontSize:12,fill:_GOLD,textAnchor:"middle"},"30"),
    e('text',{key:'lAC',x:145,y:110,fontSize:12,fill:_GOLD,textAnchor:"middle"},"25"),
    e('text',{key:'lDE',x:215,y:146,fontSize:12,fill:_GOLD,textAnchor:"middle"},"15")
  );
}

function Svg32_2023Ajesen(){
  const stroke="var(--text)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const headers=["I.","II.","III.","IV.","V.","VI.","VII.","VIII.","IX.","X.","XI.","XII."];
  const values=["55","54","56","57","59","57","59","58","54","57","55","57"];
  const labelW=180, cellW=62, rowH=42;
  const totalW = labelW + 12*cellW + 20;
  const totalH = 2*rowH + 30;
  return e('svg',{viewBox:`0 0 ${totalW} ${totalH}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"800px",width:"100%",display:"block",margin:"12px auto"}},
    // Vanjski okvir
    e('rect',{key:'fr32',x:10,y:15,width:labelW+12*cellW,height:2*rowH,fill:"none",stroke:_BLUE,strokeWidth:1.7}),
    // Horizontalna srednja linija
    e('line',{key:'hm32',x1:10,y1:15+rowH,x2:10+labelW+12*cellW,y2:15+rowH,stroke:_BLUE,strokeWidth:1.4}),
    // Vertikalna linija između labela i prve kolone
    e('line',{key:'vs32',x1:10+labelW,y1:15,x2:10+labelW,y2:15+2*rowH,stroke:_BLUE,strokeWidth:1.4}),
    // Vertikalne između svih kolona (ključevi s prefiksom 'vcol')
    ...headers.map((_,i)=>e('line',{key:'vcol32_'+i,x1:10+labelW+(i+1)*cellW,y1:15,x2:10+labelW+(i+1)*cellW,y2:15+2*rowH,stroke:_BLUE,strokeWidth:1.3})),
    // Labela "mjeseci" (ključ: lbl_months)
    e('text',{key:'lbl_months',x:10+labelW/2,y:15+rowH/2+5,fontSize:14,fontWeight:700,fill:stroke,textAnchor:"middle"},"mjeseci"),
    // Gornji red: I..XII (ključevi s prefiksom 'hdr')
    ...headers.map((h,i)=>e('text',{key:'hdr32_'+i,x:10+labelW+i*cellW+cellW/2,y:15+rowH/2+5,fontSize:14,fill:stroke,textAnchor:"middle"},h)),
    // Labela "proizvodnja u tisućama tona" — dugačko, u 2 reda
    e('text',{key:'lbl_prod1',x:10+labelW/2,y:15+rowH+rowH/2-2,fontSize:12,fontWeight:700,fill:stroke,textAnchor:"middle"},"proizvodnja"),
    e('text',{key:'lbl_prod2',x:10+labelW/2,y:15+rowH+rowH/2+13,fontSize:12,fontWeight:700,fill:stroke,textAnchor:"middle"},"u tisućama tona"),
    // Donji red: vrijednosti (ključevi s prefiksom 'val')
    ...values.map((v,i)=>e('text',{key:'val32_'+i,x:10+labelW+i*cellW+cellW/2,y:15+rowH+rowH/2+5,fontSize:16,fill:stroke,textAnchor:"middle"},v))
  );
}

function Svg24_2023Ajesen(){
  const stroke="var(--text)", grid="#94a3b8", muted="var(--muted)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // viewBox 400x300. os x: -3 do 2, os y: -2 do 3, scale 55 px/jed (x), 50 px/jed (y)
  const sx=55, sy=50, ox=200, oy=150;
  const px=x=>ox+x*sx, py=y=>oy-y*sy;
  // Krivulja: uzmemo f'(x) ≈ -0.8(x+2)(x-1)² za smjer, ali zapravo iz slike čitamo:
  // x=-3: y≈4 (visoka), x=-2: y=0, x=-1: y≈-1 (lokalni min), x=0: y≈-0.8, 
  // x=1: y=0, x=2: y≈-0.5 (pada dalje)
  // Jednostavnije: stvorim polyline kroz očitane točke
  const pts=[
    [-3,4],[-2.5,1.8],[-2,0],[-1.5,-0.9],[-1,-1.1],[-0.5,-0.9],[0,-0.6],
    [0.5,-0.2],[1,0],[1.3,0.1],[1.5,0],[1.8,-0.3],[2,-0.7]
  ];
  return e('svg',{viewBox:"0 0 400 300",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"400px",width:"100%",display:"block",margin:"12px auto"}},
    // Grid
    ...[...Array(6)].map((_,i)=>{const x=-3+i; return e('line',{key:'vg'+i,x1:px(x),y1:20,x2:px(x),y2:280,stroke:grid,strokeWidth:0.5})}),
    ...[...Array(6)].map((_,i)=>{const y=-2+i; return e('line',{key:'hg'+i,x1:20,y1:py(y),x2:380,y2:py(y),stroke:grid,strokeWidth:0.5})}),
    // Osi
    e('defs',{key:'d'},e('marker',{id:"ah24j",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"7",markerHeight:"7",orient:"auto"},
      e('path',{d:"M0,0 L10,5 L0,10 z",fill:stroke}))),
    e('line',{key:'xa',x1:20,y1:oy,x2:383,y2:oy,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah24j)"}),
    e('line',{key:'ya',x1:ox,y1:290,x2:ox,y2:18,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah24j)"}),
    e('text',{key:'lx',x:380,y:oy-6,fontSize:14,fontStyle:"italic",fill:stroke},"x"),
    e('text',{key:'ly',x:ox+6,y:24,fontSize:14,fontStyle:"italic",fill:stroke},"y"),
    e('text',{key:'l0',x:ox-12,y:oy+14,fontSize:11,fill:muted},"0"),
    e('text',{key:'l1x',x:px(1)-3,y:oy+14,fontSize:11,fill:muted},"1"),
    e('text',{key:'l1y',x:ox-14,y:py(1)+4,fontSize:11,fill:muted},"1"),
    // Male kružnice
    e('circle',{key:'c01',cx:ox,cy:py(1),r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('circle',{key:'c10',cx:px(1),cy:oy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    // Krivulja
    e('polyline',{key:'curve',points:pts.map(([x,y])=>px(x)+","+py(y)).join(' '),fill:"none",stroke:_BLUE,strokeWidth:1.8}),
    // Labela y = f'(x)
    e('text',{key:'lbl',x:px(-2.3),y:py(2.3),fontSize:13,fontStyle:"italic",fill:stroke},"y = f′(x)")
  );
}

function Svg19_2023Ajesen(){
  const stroke="var(--text)", grid="#94a3b8", muted="var(--muted)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // viewBox 320x320. Centar (160, 160). Radius 110 (1 jedinica = 110 px)
  const cx=160, cy=160, r=110;
  // Točka E(t) na kružnici u 4. kvadrantu (približno kut -60° od +x-osi)
  // cos(-60°)=0.5, sin(-60°)=-0.866 → pixel: (160 + 0.5·110, 160 + 0.866·110) = (215, 255)
  // Iz PDF slike: E(t) je dolje desno, bliže dnu (kut oko -75°)
  // cos(-75°)≈0.259, sin(-75°)≈-0.966 → (160+28, 160+106) = (188, 266)
  const Ex=188, Ey=266;
  return e('svg',{viewBox:"0 0 320 320",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"320px",width:"100%",display:"block",margin:"12px auto"}},
    // Kružnica
    e('circle',{key:'cir',cx:cx,cy:cy,r:r,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    // Osi
    e('defs',{key:'d'},e('marker',{id:"ah19j",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"7",markerHeight:"7",orient:"auto"},
      e('path',{d:"M0,0 L10,5 L0,10 z",fill:stroke}))),
    e('line',{key:'xa',x1:20,y1:cy,x2:300,y2:cy,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah19j)"}),
    e('line',{key:'ya',x1:cx,y1:310,x2:cx,y2:18,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah19j)"}),
    // Oznake osi i jedinice
    e('text',{key:'lx',x:296,y:cy-6,fontSize:14,fontStyle:"italic",fill:stroke},"x"),
    e('text',{key:'ly',x:cx+6,y:24,fontSize:14,fontStyle:"italic",fill:stroke},"y"),
    e('text',{key:'l0',x:cx-12,y:cy+14,fontSize:11,fill:muted},"0"),
    e('text',{key:'l1',x:cx+r-3,y:cy+14,fontSize:11,fill:muted},"1"),
    // Male kružnice 0 i 1
    e('circle',{key:'c0',cx:cx,cy:cy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('circle',{key:'c1',cx:cx+r,cy:cy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    // Točka E(t) (puna crna)
    e('circle',{key:'pE',cx:Ex,cy:Ey,r:3.5,fill:_RED}),
    e('text',{key:'lE',x:Ex+10,y:Ey+5,fontSize:14,fontStyle:"italic",fill:_GOLD},"E(t)")
  );
}

function Svg17_2023Ajesen(){
  const stroke="var(--text)", muted="#94a3b8", green="rgba(150,200,100,0.55)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // viewBox 380x340. Kvadar "rastavljen" ugao:
  //   A(100,260) — donji prednji lijevo
  //   B(300,260) — donji prednji desno
  //   C(340,220) — donji stražnji desno (dodana 3D perspektiva)
  //   D(140,220) — donji stražnji lijevo
  //   E(100,80) — gornji prednji lijevo
  //   F(300,80) — gornji prednji desno
  //   G(340,40) — gornji stražnji desno
  //   H(140,40) — gornji stražnji lijevo
  const V={A:[100,260], B:[300,260], C:[340,220], D:[140,220],
           E:[100,80],  F:[300,80],  G:[340,40],  H:[140,40]};
  return e('svg',{viewBox:"0 0 400 320",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"400px",width:"100%",display:"block",margin:"12px auto"}},
    // Zelena ravnina BCH + dodatni vrh (za zatvaranje parallelograma)
    // Ravnina BCH zapravo siječe kvadar — B, C su dolje, H gore. Četvrti vrh (u kvadru) je iznad B... 
    // Zapravo ravnina BCH je trokutna sječka. Dodamo još F (ako je u ravnini) — ne, F nije u BCH
    // Prava sječka je TROKUT BCH jer su to tri nekolinearna vrha kvadra
    // Ali zadatak pokazuje paralelogram (BCH + još točka). Pravilno je BCHE ili slično?
    // Pogledati PDF slika: ravnina je 4-kutna (paralelogram) - BCH je dio, i još jedna nasuprotna točka
    // U kvadru: ravnina kroz B, C, H sadrži i točku E (jer je EB i HC obje dijagonale ploha)
    // Ne — B(prednji-dolje-desno), C(stražnji-dolje-desno), H(stražnji-gore-lijevo), E(prednji-gore-lijevo)
    // B,C,H,E su četiri vrha paralelograma? BC je brid donje plohe desno prema straga, CH je dijagonala stražnje plohe, HE je brid gornje plohe, EB je dijagonala prednje plohe
    // Provjera parallelograma: BC + CH = BH = ? i BE + EH = BH — nije očito
    // Jednostavnije: B,C,H,E ako su komplanarni. Pogledajmo PDF (što je u zadatku): zelena je paralelogram
    // Iz PDF: zelena se proteže od B preko C prema H, do E. Da — BCHE je parallelogram-sječka
    // Crta zelena BCHE
    e('polygon',{key:'bch',points:`${V.B.join(',')} ${V.C.join(',')} ${V.H.join(',')} ${V.E.join(',')}`,fill:green,stroke:"none"}),
    // Bridovi kvadra — neki su prekriveni (D-bridovi prekinuti)
    // Donji vidljivi bridovi: AB, BC (ispod zelene), CD (iza D), DA (iza D)
    // Gornji: EF, FG, GH, HE
    // Vertikalni: AE, BF, CG, DH
    // Prekinuti (nevidljivi, isprekidani): AD, DH, DC (dijelovi koji su iza)
    // Crtamo sve bridove (puni), a iza zelene bridove crtamo isprekidano
    // Pun linijom: AB, BF, FG, FE, EA, BC, CG, GH, HE
    // Pune bridove crtamo preko zelene da se vide
    // Isprekidani: AD, DH, DC (jer su iza)
    e('line',{key:'e_ab',x1:V.A[0],y1:V.A[1],x2:V.B[0],y2:V.B[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_bf',x1:V.B[0],y1:V.B[1],x2:V.F[0],y2:V.F[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_ef',x1:V.E[0],y1:V.E[1],x2:V.F[0],y2:V.F[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_ae',x1:V.A[0],y1:V.A[1],x2:V.E[0],y2:V.E[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_bc',x1:V.B[0],y1:V.B[1],x2:V.C[0],y2:V.C[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_cg',x1:V.C[0],y1:V.C[1],x2:V.G[0],y2:V.G[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_fg',x1:V.F[0],y1:V.F[1],x2:V.G[0],y2:V.G[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_gh',x1:V.G[0],y1:V.G[1],x2:V.H[0],y2:V.H[1],stroke:_BLUE,strokeWidth:1.3}),
    e('line',{key:'e_he',x1:V.H[0],y1:V.H[1],x2:V.E[0],y2:V.E[1],stroke:_BLUE,strokeWidth:1.3}),
    // Isprekidani: AD, DH, DC (iza)
    e('line',{key:'d_ad',x1:V.A[0],y1:V.A[1],x2:V.D[0],y2:V.D[1],stroke:_GOLD,strokeWidth:1,strokeDasharray:"4 3"}),
    e('line',{key:'d_dh',x1:V.D[0],y1:V.D[1],x2:V.H[0],y2:V.H[1],stroke:_GOLD,strokeWidth:1,strokeDasharray:"4 3"}),
    e('line',{key:'d_dc',x1:V.D[0],y1:V.D[1],x2:V.C[0],y2:V.C[1],stroke:_GOLD,strokeWidth:1,strokeDasharray:"4 3"}),
    // Oznake vrhova
    ...Object.entries(V).map(([name,[x,y]])=>{
      const offsets={A:[-13,15], B:[5,15], C:[6,-5], D:[-13,-5], E:[-13,0], F:[5,0], G:[5,-5], H:[-13,-5]};
      const [dx,dy]=offsets[name]||[0,0];
      return e('text',{key:'lb_'+name,x:x+dx,y:y+dy,fontSize:13,fontStyle:"italic",fill:stroke},name);
    })
  );
}

function Svg14_2023Ajesen(){
  // GEOMETRIJA IZ PDF-a (MAT A 2023 jesen, str. 9, zad. 14) — DETEKTIRANA OpenCV-om:
  //   1) HoughCircles na task14_tight.png → centar (412,286), r=254 u pixel kropu
  //   2) HoughLinesP (uz maskiranje oznaka 220°/S/α/β) → dva pravca trokuta pod kutem
  //      60.5° (AV) i 132.5° (VB); bridovi presječeni međusobno i s kružnicom daju vrhove
  //   3) Izmjereni refleksni središnji kut C→V→A = 216.9° (≈ 220° iz teksta) ✓
  //   4) VAŽNO: dno crteža NIJE direktna spojnica A↔B, nego LOMLJENI put A→S→B
  //      preko dva radijusa (potvrđeno uvećanjem referentne slike)
  //
  // Pixel koordinate (math CCW od +x, iz S):  A=194.8°, V=106.8°, B=337.9°
  // Skalirano na viewBox 0 0 500 440, S=(250,220), R=180.
  const stroke="var(--text)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const cx=250, cy=220, r=180;
  const A=[76.00, 266.00];    // lijevi vrh (α)
  const V=[198.00, 47.70];    // gornji vrh (apex)
  const B=[416.80, 287.70];   // desni vrh (β)
  const S=[cx, cy];

  return e('svg',{viewBox:"0 0 500 440",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"500px",width:"100%",display:"block",margin:"12px auto"}},
    // Kružnica
    e('circle',{key:'cir',cx:cx,cy:cy,r:r,fill:"none",stroke:_BLUE,strokeWidth:2.2}),
    // Stranice trokuta: samo AV i VB (A↔B se NE crta direktno)
    e('line',{key:'av',x1:A[0],y1:A[1],x2:V[0],y2:V[1],stroke:_BLUE,strokeWidth:2.4}),
    e('line',{key:'vb',x1:V[0],y1:V[1],x2:B[0],y2:B[1],stroke:_BLUE,strokeWidth:2.4}),
    // Dvije radijusne dužine SA i SB (čine lomljeni donji put A→S→B)
    e('line',{key:'sa',x1:A[0],y1:A[1],x2:S[0],y2:S[1],stroke:_BLUE,strokeWidth:2.4}),
    e('line',{key:'sb',x1:S[0],y1:S[1],x2:B[0],y2:B[1],stroke:_BLUE,strokeWidth:2.4}),
    // Puni crni vrhovi + S kao točka
    e('circle',{key:'pA',cx:A[0],cy:A[1],r:5,fill:_RED}),
    e('circle',{key:'pV',cx:V[0],cy:V[1],r:5,fill:_RED}),
    e('circle',{key:'pB',cx:B[0],cy:B[1],r:5,fill:_RED}),
    e('circle',{key:'pS',cx:S[0],cy:S[1],r:3.8,fill:_RED}),
    // Oznaka "S" ispod centralne točke
    e('text',{key:'lS',x:S[0],y:S[1]+24,fontSize:20,fontStyle:"italic",fill:_GOLD,textAnchor:"middle"},"S"),
    // 220° refleksni luk IZNAD S
    //   uSA = (A-S)/|A-S| ≈ (-0.967, +0.256)   → P1 = S+40·uSA = (211.33, 230.22)
    //   uSB = (B-S)/|B-S| ≈ (+0.927, +0.376)   → P2 = S+40·uSB = (287.06, 235.05)
    //   large-arc=1 (>180°), sweep=1 (u SVG koord. = preko vrha iznad S)
    e('path',{key:'arc220',d:"M 211.33 230.22 A 40 40 0 1 1 287.06 235.05",fill:"none",stroke:_BLUE,strokeWidth:1.8}),
    e('text',{key:'l220',x:S[0],y:S[1]-20,fontSize:18,fill:_GOLD,textAnchor:"middle"},"220°"),
    // Kut α kod A između AV (gore-desno) i AS (desno-dolje-blago), radijus 22
    //   uAV=(V-A)/|V-A| ≈ (+0.487, -0.873)   → P1 = A+22·uAV = (86.70, 246.78)
    //   uAS=(S-A)/|S-A| ≈ (+0.967, -0.256)   → P2 = A+22·uAS = (97.24, 260.36)
    e('path',{key:'arcA',d:"M 86.70 246.78 A 22 22 0 0 1 97.24 260.36",fill:"none",stroke:_BLUE,strokeWidth:1.6}),
    e('text',{key:'la',x:A[0]+34,y:A[1]-2,fontSize:22,fontStyle:"italic",fontWeight:"bold",fill:_GOLD},"α"),
    // Kut β kod B između BV (gore-lijevo) i BS (lijevo-gore-blago), radijus 22
    //   uBV=(V-B)/|V-B| ≈ (-0.676, -0.737)   → P2 = B+22·uBV = (401.95, 271.46)
    //   uBS=(S-B)/|S-B| ≈ (-0.927, -0.376)   → P1 = B+22·uBS = (396.39, 279.44)
    e('path',{key:'arcB',d:"M 396.39 279.44 A 22 22 0 0 1 401.95 271.46",fill:"none",stroke:_BLUE,strokeWidth:1.6}),
    e('text',{key:'lb',x:B[0]-12,y:B[1]-6,fontSize:22,fontStyle:"italic",fontWeight:"bold",fill:_GOLD,textAnchor:"end"},"β")
  );
}

function Svg10_2023Ajesen(){
  const stroke="var(--text)", grid="#94a3b8", muted="var(--muted)";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const s=30, ox=160, oy=200;
  const px=x=>ox+x*s, py=y=>oy-y*s;
  return e('svg',{viewBox:"0 0 380 320",xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    ...[...Array(13)].map((_,i)=>e('line',{key:'v10_'+i,x1:10+i*30,y1:20,x2:10+i*30,y2:310,stroke:grid,strokeWidth:0.5})),
    ...[...Array(11)].map((_,i)=>e('line',{key:'h10_'+i,x1:10,y1:30+i*30,x2:370,y2:30+i*30,stroke:grid,strokeWidth:0.5})),
    e('defs',{key:'d'},e('marker',{id:"ah10j",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"7",markerHeight:"7",orient:"auto"},
      e('path',{d:"M0,0 L10,5 L0,10 z",fill:stroke}))),
    e('line',{key:'xa',x1:10,y1:oy,x2:373,y2:oy,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah10j)"}),
    e('line',{key:'ya',x1:ox,y1:310,x2:ox,y2:18,stroke:stroke,strokeWidth:1.5,markerEnd:"url(#ah10j)"}),
    e('text',{key:'lx',x:370,y:oy-6,fontSize:14,fontStyle:"italic",fill:stroke},"x"),
    e('text',{key:'ly',x:ox+6,y:24,fontSize:14,fontStyle:"italic",fill:stroke},"y"),
    e('text',{key:'l0',x:ox-12,y:oy+14,fontSize:11,fill:muted},"0"),
    e('text',{key:'l1x',x:px(1)-3,y:oy+14,fontSize:11,fill:muted},"1"),
    e('text',{key:'l1y',x:ox-14,y:py(1)+4,fontSize:11,fill:muted},"1"),
    e('circle',{key:'c01',cx:ox,cy:py(1),r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    e('circle',{key:'c10',cx:px(1),cy:oy,r:2.5,fill:"var(--bg,#060910)",stroke:_BLUE,strokeWidth:1}),
    // Vektor a⃗ od (0,0) do (4,2)
    e('line',{key:'va',x1:ox,y1:oy,x2:px(4),y2:py(2),stroke:stroke,strokeWidth:2.2,markerEnd:"url(#ah10j)"}),
    // Oznaka 'a⃗' IZNAD vektora, ne na njemu
    // Vektor prolazi od (160,200) do (280,140). Sredina ≈ (220, 170)
    // Postavljamo labelu lijevo-iznad sredine, na poziciji (190, 155) — slobodno od linije
    e('text',{key:'la1',x:195,y:155,fontSize:17,fontStyle:"italic",fill:_GOLD},"a"),
    // Strelica iznad 'a' — mali ↗ simbol
    e('line',{key:'la2',x1:193,y1:143,x2:210,y2:143,stroke:stroke,strokeWidth:1.1,markerEnd:"url(#ah10j)"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 125 = 5³, pa je ⁴√125 = 5^(3/4); recipročna vrijednost daje negativan eksponent.",topic:"br",points:1,
   q:"Čemu je jednako [FRAC:1|⁴√125]?",
   opts:["−5^(4/3)","−5^(3/4)","5^(−4/3)","5^(−3/4)"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"125 = 5³ → ⁴√125 = ⁴√(5³) = 5^([FRAC:3|4])."},
     {txt:"Recipročno: 1/5^([FRAC:3|4]) = 5^(−[FRAC:3|4]). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: 5^([FRAC:3|4]) ≈ 3,344; 1/3,344 ≈ 0,299; 5^(−[FRAC:3|4]) ≈ 0,299 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B negativni (krivo); C krivi eksponent 4/3 umjesto 3/4.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: ⁿ√(aᵐ) = a^(m/n); 1/aⁿ = a⁻ⁿ.",note:"postupak",final:true},{txt:"Intuicija: 'četvrti korijen' = 'na 1/4'; razdvoji m i n.",note:"intuicija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: ⁿ√(aᵐ) = a^(m/n); 1/aⁿ = a⁻ⁿ.",
     "Intuicija: 'četvrti korijen' = 'na 1/4'; razdvoji m i n.",
     "Česta greška: pomiješati m i n; ili krivi predznak eksponenta.",
     "Alt metoda (provjera): (5³)^(−1/4) = 5^(3·(−1/4)) = 5^(−3/4) ✓"
   ,"Provjera: 5^([FRAC:3|4]) ≈ 3,344; 1/3,344 ≈ 0,299; 5^(−[FRAC:3|4]) ≈ 0,299 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:2,type:"mc",warn:"Pazi: (a − b)² = a² − 2ab + b²; ne zaboravi srednji član −2·1·2y.",topic:"al",points:1,
   q:"Čemu je jednak izraz (1 − 2y)² za sve realne brojeve y?",
   opts:["1 + 4y²","1 − 4y²","(2y − 1)²","(2y + 1)²"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"(1 − 2y) = −(2y − 1) (suprotni binom)."},
     {txt:"Kvadrat suprotnih: (−a)² = a²."},
     {txt:"(1 − 2y)² = (2y − 1)². Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s y = 1: (1 − 2)² = 1; (2 − 1)² = 1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B krivi (zaboraviti −2ab član); D krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: (a − b)² = (b − a)² (kvadrat 'briše' znak razlike).",note:"postupak",final:true},{txt:"Intuicija: kvadrat čini sve pozitivnim; dva suprotna binoma imaju isti kvadrat.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: (a − b)² = (b − a)² (kvadrat 'briše' znak razlike).",
     "Intuicija: kvadrat čini sve pozitivnim; dva suprotna binoma imaju isti kvadrat.",
     "Česta greška: pretpostaviti (1 − 2y)² = 1 + 4y² (zaboraviti srednji član).",
     "Alt metoda (provjera): razvij oba — 1 − 4y + 4y² ≡ 4y² − 4y + 1 ✓"
   ,"Provjera s y = 1: (1 − 2)² = 1; (2 − 1)² = 1 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:3,type:"mc",warn:"Pazi: 1,25·(1 − p) = 1,15 → riješi po p; nije jednostavno 10 %.",topic:"br",points:1,
   q:"Cijena kino ulaznice povećala se za 25 %. Za koliko je posto potrebno smanjiti povećanu cijenu ulaznice da bi konačno povećanje iznosilo 15 % u odnosu na početnu cijenu?",
   opts:["6,25 %","8 %","8,7 %","10 %"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Početna cijena x; +25 %: 1,25x."},
     {txt:"Cilj: 1,15x (15 % iznad početne)."},
     {txt:"Smanjenje od 1,25x na 1,15x: razlika = 0,1x; postotak = 0,1x/1,25x = 0,08 = 8 %."},
     {txt:"Provjera s x = 100: +25 % → 125; smanjenje 8 % → 125·0,92 = 115 = +15 % od 100 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 6,25 krivi; C/D krivi (D ignorira da postoci nisu aditivni).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: postotak smanjenja računamo od TRENUTNE (uvećane) cijene.",note:"postupak",final:true},{txt:"Intuicija: '25 − 15 = 10' je tipična pogreška — postoci nisu aditivni.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: postotak smanjenja računamo od TRENUTNE (uvećane) cijene.",
     "Intuicija: '25 − 15 = 10' je tipična pogreška — postoci nisu aditivni.",
     "Česta greška: pretpostaviti aditivnu razliku.",
     "Alt metoda (provjera): 1,25·(1 − p) = 1,15 → p = 1 − 0,92 = 0,08 ✓"
   ,"Provjera s x = 100: +25 % → 125; smanjenje 8 % → 125·0,92 = 115 = +15 % od 100 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:4,type:"mc",warn:"Pazi: 'ILI' → unija; oduzmi presjek (brojevi koji su i neparni i manji od 4).",topic:"stat",points:1,
   q:"Kolika je vjerojatnost da je pri bacanju kockice na čijim se stranama nalaze brojevi od jedan do šest pao neparan broj ili broj manji od četiri?",
   opts:["1/6","1/3","2/3","5/6"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Prostor: {1, 2, 3, 4, 5, 6}."},
     {txt:"Neparni: {1, 3, 5}; manji od 4: {1, 2, 3}."},
     {txt:"Unija: {1, 2, 3, 5} = 4 elementa."},
     {txt:"P = 4/6 = 2/3. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 3/6 − 2/6 = 4/6 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 1/6; B) 1/3 = 2/6 (samo presjek); D) 5/6 = krivi unija.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); 'ili' = unija.",note:"postupak",final:true},{txt:"Intuicija: nabroji povoljne ishode bez dvostrukog brojanja.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); 'ili' = unija.",
     "Intuicija: nabroji povoljne ishode bez dvostrukog brojanja.",
     "Česta greška: samo zbrojiti P(A) + P(B) bez oduzimanja presjeka.",
     "Alt metoda (provjera): direktno nabrojavanje 4 povoljna ishoda od 6 ✓"
   ,"Provjera: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 3/6 − 2/6 = 4/6 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:5,type:"mc",warn:"Pazi: usporedi zadano s formulom (−b ± √D)/2a za jednadžbu oblika x² − 3x + c = 0.",topic:"kv",points:1,
   q:"Kojoj je od navedenih jednadžba jedno rješenje (3 − √(9 − 4c))/2?",
   opts:["x² − 3x − c = 0","x² − 3x + c = 0","x² + 3x − c = 0","x² + 3x + c = 0"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Formula: x = (−b ± √(b² − 4ac'))/(2a)."},
     {txt:"Iz nazivnika 2a = 2 → a = 1; −b = 3 → b = −3."},
     {txt:"b² − 4ac' = 9 − 4c → c' = c."},
     {txt:"Jednadžba: x² − 3x + c = 0. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s c = 2: x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0; formula: (3 ± 1)/2 = 2 ili 1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C −c (krivi predznak c); D +3x (krivi predznak b).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: usporedba rješenja s općom formulom za identifikaciju koeficijenata.",note:"postupak",final:true},{txt:"Intuicija: −b/2 = 'centar', √D/2 = 'pomak'.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: usporedba rješenja s općom formulom za identifikaciju koeficijenata.",
     "Intuicija: −b/2 = 'centar', √D/2 = 'pomak'.",
     "Česta greška: krivi predznak b (zaboraviti −b → b = −3).",
     "Alt metoda (provjera): za c = 0, x² − 3x = 0 → 0, 3; formula: (3 ± 3)/2 = 0 ili 3 ✓"
   ,"Provjera s c = 2: x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0; formula: (3 ± 1)/2 = 2 ili 1 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:6,type:"mc",warn:"Pazi: (x + 6)² = 0 ima dvostruko rješenje → diskriminanta je 0.",topic:"kv",points:1,
   q:"Koliko iznosi diskriminanta kvadratne jednadžbe (x + 6)² = 0?",
   opts:["−24","−6","0","36"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Razvij: (x + 6)² = x² + 12x + 36 = 0; a = 1, b = 12, c = 36."},
     {txt:"D = b² − 4ac = 144 − 144 = 0. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: D = 0 → jedno dvostruko rješenje; (x + 6)² = 0 → x = −6 (multiplicitet 2) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −24 krivi; B) −6 nul-točka; D) 36 = c.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: D = b² − 4ac; D = 0 ⟺ savršen kvadrat (dvostruko rješenje).",note:"postupak",final:true},{txt:"Intuicija: (x + a)² uvijek ima D = 0.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: D = b² − 4ac; D = 0 ⟺ savršen kvadrat (dvostruko rješenje).",
     "Intuicija: (x + a)² uvijek ima D = 0.",
     "Česta greška: zaboraviti razviti zagradu prije.",
     "Alt metoda (provjera): savršeni kvadrat → D = 0 ✓"
   ,"Provjera: D = 0 → jedno dvostruko rješenje; (x + 6)² = 0 → x = −6 (multiplicitet 2) ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:7,img:true,type:"mc",warn:"Pazi: nagib −2 (pravac pada strmo), siječe os y u 4.",topic:"lin",points:1,
   q:"Na kojoj je slici prikazan graf funkcije f(x) = −2x + 4?",
   opts:["Slika A","Slika B","Slika C","Slika D"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"f(x) = kx + l; k = −2 < 0 (padajući); l = 4 (y-presjek (0, 4))."},
     {txt:"x-presjek: 0 = −2x + 4 → x = 2 → (2, 0)."},
     {txt:"Padajući pravac kroz (0, 4) i (2, 0). Slika B."},
     {txt:"Provjera nagiba: (0 − 4)/(2 − 0) = −2 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C/D imaju krivi nagib ili y-presjek.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: y = kx + l — k = nagib, l = y-presjek; k < 0 → padajuća.",note:"postupak",final:true},{txt:"Intuicija: nagib −2 = 'za +1 u x, y se smanji za 2'.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: y = kx + l — k = nagib, l = y-presjek; k < 0 → padajuća.",
     "Intuicija: nagib −2 = 'za +1 u x, y se smanji za 2'.",
     "Česta greška: brkati nagib i y-presjek.",
     "Alt metoda (provjera): test (0, 4) i (2, 0) na svakoj slici ✓"
   ,"Provjera nagiba: (0 − 4)/(2 − 0) = −2 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:8,type:"mc",warn:"Pazi: jednak porast svake godine → linearno; nagib = (150 − 50)/(2022 − 2017).",topic:"lin",points:1,
   q:"Godišnja proizvodnja meda 2017. godine bila je 50 kg, a 2022. godine 150 kg. Godišnja se proizvodnja meda svake godine poveća za istu količinu. Kojom se formulom može izračunati godišnja proizvodnja meda gdje je t broj godina nakon 2017. godine?",
   opts:["m(t) = 3t + 50","m(t) = 3t + 150","m(t) = 20t + 50","m(t) = 20t + 150"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Linearno: m(t) = d·t + m₀; m(0) = 50 → m₀ = 50."},
     {txt:"m(5) = 150 → 50 + 5d = 150 → d = 20."},
     {txt:"m(t) = 20t + 50. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: m(0) = 50 ✓; m(5) = 150 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) d = 3 (krivi); B/D imaju krivi m₀.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: linearni rast m(t) = m₀ + d·t; d = (m(t₁) − m(t₀))/(t₁ − t₀).",note:"postupak",final:true},{txt:"Intuicija: 'svake godine za istu količinu' = aritmetička progresija.",note:"intuicija",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: linearni rast m(t) = m₀ + d·t; d = (m(t₁) − m(t₀))/(t₁ − t₀).",
     "Intuicija: 'svake godine za istu količinu' = aritmetička progresija.",
     "Česta greška: brkati m₀ s vrijednošću u krajnjoj točki.",
     "Alt metoda (provjera): nagib (150 − 50)/(5 − 0) = 20 ✓"
   ,"Provjera: m(0) = 50 ✓; m(5) = 150 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:9,type:"mc",warn:"Pazi: x se mijenja, a je konstantan → sve točke imaju istu y-koordinatu (vodoravni pravac).",topic:"anal",points:1,
   q:"Što je skup svih točaka T(x, a) za sve realne brojeve x ako je a konstanta?",
   opts:["točka na osi apscisa","točka na osi ordinata","pravac x = a","pravac y = a"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"T(x, a): prva koordinata x slobodno prolazi sve realne brojeve."},
     {txt:"Druga koordinata a je fiksna konstanta."},
     {txt:"Skup točaka s istom y koordinatom = horizontalan pravac y = a. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera za a = 3: točke (0, 3), (1, 3), (−2, 3), ... — sve na pravcu y = 3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B 'točka' netočno (skup beskonačan); C 'x = a' = vertikalan pravac (krivo).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: skup točaka s konstantnom y koordinatom = horizontalan pravac y = konst.",note:"postupak",final:true},{txt:"Intuicija: 'fiksna y, slobodna x' = pravac paralelan s x-osi.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: skup točaka s konstantnom y koordinatom = horizontalan pravac y = konst.",
     "Intuicija: 'fiksna y, slobodna x' = pravac paralelan s x-osi.",
     "Česta greška: brkati 'x = a' (vertikalan) i 'y = a' (horizontalan).",
     "Alt metoda (provjera): za T(x, a) jednadžba y = a (ne ovisi o x) ✓"
   ,"Provjera za a = 3: točke (0, 3), (1, 3), (−2, 3), ... — sve na pravcu y = 3 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:10,img:true,type:"mc",warn:"Pazi: skalar (3/2) množi OBJE komponente vektora.",topic:"anal",points:1,
   q:"Na slici je prikazan vektor a⃗ s krajem u (4, 2). Koje su koordinate završne točke vektora ([FRAC:3|2])·a⃗ ako mu je početna točka u ishodištu koordinatnoga sustava?",
   opts:["(1, 2)","(2, 1)","(3, 6)","(6, 3)"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"a⃗ = (4, 2)."},
     {txt:"Skalarni umnožak: ([FRAC:3|2])·(4, 2) = (6, 3)."},
     {txt:"Početak u ishodištu → završna (6, 3). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera duljine: |a⃗| = √20; |1,5·a⃗| = 1,5·√20 = √45; √(36 + 9) = √45 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi faktor; B) pola a⃗; C) pomiješane komponente.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: λ·(x, y) = (λx, λy) — svaka komponenta zasebno.",note:"postupak",final:true},{txt:"Intuicija: vektor 'rastegnut' 1,5×, isti smjer.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: λ·(x, y) = (λx, λy) — svaka komponenta zasebno.",
     "Intuicija: vektor 'rastegnut' 1,5×, isti smjer.",
     "Česta greška: pomnožiti samo jednu komponentu.",
     "Alt metoda (provjera): završna − početna = vektor; (6, 3) − (0, 0) = (6, 3) ✓"
   ,"Provjera duljine: |a⃗| = √20; |1,5·a⃗| = 1,5·√20 = √45; √(36 + 9) = √45 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:11,type:"mc",warn:"Pazi: nadopuni kvadrate; središte = (−½ koef. uz x, −½ koef. uz y) = (1, −3).",topic:"anal",points:1,
   q:"Koja je točka središte kružnice zadane jednadžbom x² + y² − 2x + 6y + 5 = 0?",
   opts:["S(−1, −3)","S(−1, 3)","S(1, −3)","S(1, 3)"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Pretvori u standardni oblik (x − p)² + (y − q)² = r² dopunjavanjem do potpunog kvadrata."},
     {txt:"Grupiraj: (x² − 2x) + (y² + 6y) + 5 = 0."},
     {txt:"Kompletiraj: (x² − 2x + 1) − 1 + (y² + 6y + 9) − 9 + 5 = 0."},
     {txt:"(x − 1)² + (y + 3)² = 5. Središte S(1, −3), r = √5. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: opći oblik S(−D/2, −E/2) = (−(−2)/2, −6/2) = (1, −3) ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/D imaju krivi predznak središta (suprotno od koeficijenata).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: opći oblik x² + y² + Dx + Ey + F = 0 → S(−D/2, −E/2), r² = (D/2)² + (E/2)² − F.",note:"postupak",final:true},{txt:"Intuicija: '−2x → unutra (x − 1)²' — predznak se obrne pri dopuni.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: opći oblik x² + y² + Dx + Ey + F = 0 → S(−D/2, −E/2), r² = (D/2)² + (E/2)² − F.",
     "Intuicija: '−2x → unutra (x − 1)²' — predznak se obrne pri dopuni.",
     "Česta greška: zaboraviti obrnuti znak.",
     "Alt metoda (provjera): r² = 1 + 9 − 5 = 5 → r = √5 ✓"
   ,"Provjera: opći oblik S(−D/2, −E/2) = (−(−2)/2, −6/2) = (1, −3) ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:12,type:"mc",warn:"Pazi: simetrale STRANICA se sijeku u središtu OPISANE kružnice (ne upisane).",topic:"geom",points:1,
   q:"U kojoj se točki sijeku simetrale stranica svakoga trokuta?",
   opts:["u težištu","u ortocentru","u središtu trokutu upisane kružnice","u središtu trokutu opisane kružnice"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Simetrala stranice = skup točaka jednako udaljenih od dvaju vrhova stranice."},
     {txt:"Sjecište svih triju simetrala = točka jednako udaljena od svih triju vrhova."},
     {txt:"Točka jednako udaljena od svih vrhova = SREDIŠTE OPISANE kružnice. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: opisana kružnica prolazi kroz sve vrhove, polumjer = udaljenost središta do vrha ✓",note:"verifikacija"},
     {txt:"Distraktori: A) težište = težišnice; B) ortocentar = visine; C) upisana = simetrale KUTOVA.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: 4 karakteristične točke trokuta — težište, ortocentar, središte upisane, središte opisane.",note:"postupak",final:true},{txt:"Intuicija: 'simetrale stranica' → 'jednako udaljeno od vrhova' → 'opisana'.",note:"intuicija",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: 4 karakteristične točke trokuta — težište, ortocentar, središte upisane, središte opisane.",
     "Intuicija: 'simetrale stranica' → 'jednako udaljeno od vrhova' → 'opisana'.",
     "Česta greška: brkati simetrale stranica i simetrale kutova.",
     "Alt metoda (provjera): za jednakostraničan trokut sve 4 točke se podudaraju."
   ,"Provjera: opisana kružnica prolazi kroz sve vrhove, polumjer = udaljenost središta do vrha ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:13,type:"mc",warn:"Pazi: omjer površina = k²; manji trokut → dijeli zadanu površinu s k² = 4.",topic:"geom",points:1,
   q:"Površina trokuta iznosi 80 cm². Koliko iznosi površina njemu sličnoga manjega trokuta ako je koeficijent sličnosti k = 2?",
   opts:["10 cm²","20 cm²","40 cm²","60 cm²"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Sličnost s koeficijentom k: omjer linearnih = k; omjer površina = k²."},
     {txt:"k = 2 → P_veci/P_manji = 4 → P_manji = 80/4 = 20 cm². Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: stranica a → a/2; P ∝ a² → P/4 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi k² = 8; C) polovica (linearni omjer); D) krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: sličnost s k — duljine ×k, površine ×k², volumeni ×k³.",note:"postupak",final:true},{txt:"Intuicija: 2D skaliranje = kvadrat koeficijenta.",note:"intuicija",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: sličnost s k — duljine ×k, površine ×k², volumeni ×k³.",
     "Intuicija: 2D skaliranje = kvadrat koeficijenta.",
     "Česta greška: koristiti k umjesto k².",
     "Alt metoda (provjera): k = 2 → omjer površina 4:1; 80/4 = 20 ✓"
   ,"Provjera: stranica a → a/2; P ∝ a² → P/4 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:14,img:true,type:"mc",warn:"Pazi: iskoristi zbroj kutova u trokutu (180°) ili kutove uz paralele sa skice.",topic:"geom",points:1,
   q:"Koliko iznosi zbroj mjera kutova α i β sa skice?",
   opts:["50°","70°","90°","110°"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz skice: kružnica sa središtem S, upisani trokut ABC; refleksni središnji kut nad lukom AB = 220°."},
     {txt:"Standardni središnji kut: 360° − 220° = 140°."},
     {txt:"Obodni kut u C: 140°/2 = 70° (poučak o obodnom kutu)."},
     {txt:"Trokuti SAC i SBC jednakokračni (SA = SC = SB = R); kut C trokuta ABC = α + β."},
     {txt:"α + β = 70°. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: središnji = 2×obodni → 140° = 2×70° ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi; C) 90° pretpostavlja Talesa; D) 110° krivi.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: središnji kut nad lukom = 2·obodni kut nad istom tetivom.",note:"postupak",final:true},{txt:"Intuicija: refleksni središnji + običan = 360°.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: središnji kut nad lukom = 2·obodni kut nad istom tetivom.",
     "Intuicija: refleksni središnji + običan = 360°.",
     "Česta greška: koristiti refleksni umjesto standardnog kuta.",
     "Alt metoda (provjera): u jednakokračnom SAC, kutovi pri bazi jednaki."
   ,"Provjera: središnji = 2×obodni → 140° = 2×70° ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:15,type:"mc",warn:"Pazi: najmanji kut je nasuprot NAJKRAĆOJ stranici; koristi tangens.",topic:"trig",points:1,
   q:"Duljine su kateta pravokutnoga trokuta 11 cm i 17 cm. Koliko iznosi mjera najmanjega kuta toga trokuta?",
   opts:["28°32'51''","32°54'19''","40°19'13''","49°40'47''"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Najmanji kut nasuprot najkraćoj kateti (11 cm)."},
     {txt:"tg α = 11/17 ≈ 0,6471."},
     {txt:"α = arctan(0,6471) ≈ 32,9054° = 32°54'19''. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: 32,9054° = 32° + 54,32' ≈ 32°54'19'' ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 28° krivi; C) 40° krivi; D) 49°40' = drugi kut.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu, tg(α) = nasuprotna/priležeća kateta.",note:"postupak",final:true},{txt:"Intuicija: kraći kut nasuprot kraćoj kateti.",note:"intuicija",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u pravokutnom trokutu, tg(α) = nasuprotna/priležeća kateta.",
     "Intuicija: kraći kut nasuprot kraćoj kateti.",
     "Česta greška: koristiti hipotenuzu (sin/cos) umjesto tg.",
     "Alt metoda (provjera): drugi kut β = 90° − α ≈ 57°06'; α + β = 90° ✓"
   ,"Provjera: 32,9054° = 32° + 54,32' ≈ 32°54'19'' ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:16,type:"mc",warn:"Pazi: poučak o sinusima a/sin α = b/sin β; uvrsti zadane parove kut–stranica.",topic:"trig",points:1,
   q:"U trokutu je nasuprot kutu mjere 72° stranica duljine 10,3 cm. Kolika je duljina stranice nasuprot kutu mjere 58° u tome trokutu?",
   opts:["9,18 cm","9,3 cm","11,4 cm","11,55 cm"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Sinusov poučak: a/sin α = b/sin β."},
     {txt:"b = a·sin β/sin α = 10,3·sin 58°/sin 72°."},
     {txt:"= 10,3·0,8480/0,9511 ≈ 10,3·0,8916 ≈ 9,18 cm. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 58° < 72° → b < a; 9,18 < 10,3 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 9,3 krivi; C/D) krivi smjer omjera.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — stranice razmjerne sinusima nasuprotnih kutova.",note:"postupak",final:true},{txt:"Intuicija: 'manji kut → kraća stranica' za kutove < 90°.",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — stranice razmjerne sinusima nasuprotnih kutova.",
     "Intuicija: 'manji kut → kraća stranica' za kutove < 90°.",
     "Česta greška: pomiješati koja stranica nasuprot kojem kutu.",
     "Alt metoda (provjera): omjer sin 58°/sin 72° ≈ 0,8916 → b = 10,3·0,8916 ≈ 9,18 ✓"
   ,"Provjera: 58° < 72° → b < a; 9,18 < 10,3 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:17,img:true,type:"mc",warn:"Pazi: pravac je paralelan ravnini ako je ne siječe; vizualiziraj kvadar.",topic:"geom",points:1,
   q:"Na skici je istaknuta ravnina BCH u kvadru ABCDEFGH. Koji je od navedenih pravaca paralelan s tom ravninom?",
   opts:["FA","FB","FE","FG"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Ravnina BCH = dijagonalna ravnina sadržava donji brid BC i gornji vrh H."},
     {txt:"Brid BC pripada ravnini BCH."},
     {txt:"FG je gornji brid kvadra paralelan BC (suprotni bridovi kvadra)."},
     {txt:"Pravac paralelan pravcu u ravnini, izvan ravnine → paralelan s ravninom. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: FG ∥ BC; FG nije u ravnini BCH → FG ∥ ravnina BCH ✓",note:"verifikacija"},
     {txt:"Distraktori: A) FA siječe; B) FB prolazi B; C) FE siječe ili prolazi.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: pravac p ∥ ravnini α ⟺ p ∥ nekom pravcu u α i p nije u α.",note:"postupak",final:true},{txt:"Intuicija: FG i BC su nasuprotni bridovi kvadra → paralelni.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: pravac p ∥ ravnini α ⟺ p ∥ nekom pravcu u α i p nije u α.",
     "Intuicija: FG i BC su nasuprotni bridovi kvadra → paralelni.",
     "Česta greška: brkati 'paralelan s ravninom' i 'leži u ravnini'.",
     "Alt metoda (provjera): vektor FG nije linearna kombinacija vektora u ravnini BCH."
   ,"Provjera: FG ∥ BC; FG nije u ravnini BCH → FG ∥ ravnina BCH ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:18,type:"mc",warn:"Pazi: volumen se čuva → V_kocke = V_kugle; iz (4/3)πr³ = 5³ izrazi r.",topic:"geom",points:1,
   q:"Koliko iznosi polumjer kugle dobivene pretapanjem metalne kocke brida duljine 5 cm?",
   opts:["2,4 cm","2,7 cm","3,1 cm","3,8 cm"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Pretapanje = sačuvanje volumena."},
     {txt:"V_kocka = 5³ = 125 cm³."},
     {txt:"V_kugla = (4/3)·π·r³ → 125 = (4/3)·π·r³."},
     {txt:"r³ = 375/(4π) ≈ 29,84 → r ≈ ∛29,84 ≈ 3,1 cm. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: r = 3,1 → V = (4/3)·π·29,79 ≈ 124,8 ≈ 125 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/D krivi izračun ili pomiješani brojevi.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: pri pretapanju V se sačuva → V(kocka) = V(kugla).",note:"postupak",final:true},{txt:"Intuicija: kugla 'okrugliji' oblik; potrebno više materijala za isti r.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: pri pretapanju V se sačuva → V(kocka) = V(kugla).",
     "Intuicija: kugla 'okrugliji' oblik; potrebno više materijala za isti r.",
     "Česta greška: zaboraviti faktor 4/3 ili π.",
     "Alt metoda (provjera): r = ∛(3V/(4π)) = ∛(375/(4π)) ≈ 3,1 ✓"
   ,"Provjera: r = 3,1 → V = (4/3)·π·29,79 ≈ 124,8 ≈ 125 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:19,img:true,type:"mc",warn:"Pazi: u IV. kvadrantu cos > 0, sin < 0 → tangens je negativan.",topic:"trig",points:1,
   q:"Koja od navedenih tvrdnja vrijedi za realni broj t kojemu je pridružena točka E(t) istaknuta u IV. kvadrantu (cos t > 0, sin t < 0)?",
   opts:["sin t < cos t i tg t < 0","sin t < cos t i tg t > 0","sin t > cos t i tg t < 0","sin t > cos t i tg t > 0"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"E(t) u IV. kvadrantu: sin t < 0, cos t > 0."},
     {txt:"Negativan < pozitivan → sin t < cos t ✓."},
     {txt:"tg t = sin t/cos t = (neg)/(poz) < 0 ✓."},
     {txt:"Oba uvjeta zadovoljena. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera s t = 7π/4: sin = −√2/2, cos = √2/2, tg = −1; −0,707 < 0,707 ✓; −1 < 0 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) tg > 0 krivo; C/D) sin > cos krivo.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: predznaci po kvadrantima — IV.: cos +, sin −, tg −.",note:"postupak",final:true},{txt:"Intuicija: 'A-S-T-C' mnemonik (All-Sin-Tan-Cos po kvadrantima).",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: predznaci po kvadrantima — IV.: cos +, sin −, tg −.",
     "Intuicija: 'A-S-T-C' mnemonik (All-Sin-Tan-Cos po kvadrantima).",
     "Česta greška: krivi predznaci ili usporedba neg s poz.",
     "Alt metoda (provjera): konkretna točka (0,8; −0,6) → sin < cos; tg = −0,75 ✓"
   ,"Provjera s t = 7π/4: sin = −√2/2, cos = √2/2, tg = −1; −0,707 < 0,707 ✓; −1 < 0 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:20,type:"mc",warn:"Pazi: potencije broja i imaju period 4; svedi eksponent (4k − 5) na ostatak pri dijeljenju s 4.",topic:"al",points:1,
   q:"Čemu je jednako i^(4k − 5) za sve prirodne brojeve k?",
   opts:["−i","i","−1","1"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Ciklus potencija od i: i¹ = i, i² = −1, i³ = −i, i⁴ = 1; period 4."},
     {txt:"i^(4k) = (i⁴)^k = 1 za svaki prirodan k."},
     {txt:"i^(4k − 5) = i^(4k)·i^(−5) = 1·i^(−5) = i^(−5)."},
     {txt:"i^(−5) = 1/i⁵ = 1/(i⁴·i) = 1/i."},
     {txt:"Racionaliziraj: 1/i = i/i² = i/(−1) = −i. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera s k = 1: i^(4 − 5) = i^(−1) = 1/i = −i ✓; s k = 2: i^(8 − 5) = i³ = −i ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D — krivi ciklus ili krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: potencije i imaju ciklus duljine 4: i, −1, −i, 1, i, −1, ...",note:"postupak",final:true},{txt:"Intuicija: koristi i⁴ = 1 za 'reducirati' veliki eksponent na mod 4.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: potencije i imaju ciklus duljine 4: i, −1, −i, 1, i, −1, ...",
     "Intuicija: koristi i⁴ = 1 za 'reducirati' veliki eksponent na mod 4.",
     "Česta greška: brkati predznake u ciklusu; ili krivi negativni eksponent.",
     "Alt metoda (provjera): 4k − 5 = 4(k−1) − 1; i^(4(k−1)−1) = i^(−1) = −i ✓"
   ,"Provjera s k = 1: i^(4 − 5) = i^(−1) = 1/i = −i ✓; s k = 2: i^(8 − 5) = i³ = −i ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:21,type:"mc",warn:"Pazi: aritmetički niz ima STALNU razliku susjednih članova — provjeri razlike.",topic:"seq",points:1,
   q:"Koji od navedenih nizova nije aritmetički niz?",
   opts:["−5, −2, 1, 4","−3, −2, −1, 0","1, −1, 1, −1","3, 1, −1, −3"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Aritmetički niz: konstantna razlika d = aₙ₊₁ − aₙ za sve n."},
     {txt:"A) razlike +3, +3, +3 → konstantno → aritmetički ✓"},
     {txt:"B) razlike +1, +1, +1 → aritmetički ✓"},
     {txt:"C) razlike −2, +2, −2 → NIJE konstantno → NIJE aritmetički."},
     {txt:"D) razlike −2, −2, −2 → aritmetički ✓. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera C: niz 1, −1, 1, −1 alternira → geometrijski s q = −1 (ali ne aritmetički) ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/D imaju konstantne razlike.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aritmetički ⟺ a_{n+1} − a_n = konstanta.",note:"postupak",final:true},{txt:"Intuicija: 'pravilan' linearan pomak = aritmetički; alterniranje = ne.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: aritmetički ⟺ a_{n+1} − a_n = konstanta.",
     "Intuicija: 'pravilan' linearan pomak = aritmetički; alterniranje = ne.",
     "Česta greška: vidjeti 'lijepe brojeve' i pretpostaviti pattern.",
     "Alt metoda (provjera): izračunaj razlike između susjednih — ako sve iste, aritmetički."
   ,"Provjera C: niz 1, −1, 1, −1 alternira → geometrijski s q = −1 (ali ne aritmetički) ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:22,type:"mc",warn:"Pazi: domena [3, +∞⟩ tipično dolazi od √(x − 3) (potkorijena ≥ 0).",topic:"al",points:1,
   q:"Kojoj je od navedenih funkcija domena [3, +∞⟩?",
   opts:["f(x) = 1/x − 3","f(x) = √(x − 3)","f(x) = log(x − 3)","f(x) = |x − 3|"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"A) 1/(x − 3) → nazivnik ≠ 0 → x ≠ 3 → D = ℝ ∖ {3}."},
     {txt:"B) √(x − 3) → uvjet x − 3 ≥ 0 → x ≥ 3 → domena = [3, +∞⟩ ✓"},
     {txt:"C) log(x − 3) → uvjet x − 3 > 0 → x > 3 → domena = ⟨3, +∞⟩ (otvoren)."},
     {txt:"D) |x − 3| → definirano za sve → D = ℝ. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera B: √0 = 0 (definirano u x = 3 ✓); √(−1) nije realan (x < 3 isključeno) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) različita domena; C) otvoreni interval (krivi za [3, +∞⟩ — log isključuje 3); D) cijela ℝ.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: parni korijen — argument ≥ 0; logaritam — argument > 0 (strogo).",note:"postupak",final:true},{txt:"Intuicija: '√' dopušta nulu; 'log' ne dopušta.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: parni korijen — argument ≥ 0; logaritam — argument > 0 (strogo).",
     "Intuicija: '√' dopušta nulu; 'log' ne dopušta.",
     "Česta greška: brkati otvoreni i zatvoreni rub intervala za √ vs log.",
     "Alt metoda (provjera): zatvorena uglata zagrada [ uključuje krajnju vrijednost."
   ,"Provjera B: √0 = 0 (definirano u x = 3 ✓); √(−1) nije realan (x < 3 isključeno) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:23,type:"mc",warn:"Pazi: umnožak → pravilo (uv)′ = u′v + uv′; ovdje (x)′·sin x + x·(sin x)′.",topic:"al",points:1,
   q:"Čemu je jednaka derivacija funkcije f(x) = x sin x?",
   opts:["f'(x) = cos x","f'(x) = x cos x","f'(x) = 1 + cos x","f'(x) = sin x + x cos x"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Pravilo produkta: (uv)' = u'v + uv'."},
     {txt:"u = x → u' = 1; v = sin x → v' = cos x."},
     {txt:"f'(x) = 1·sin x + x·cos x = sin x + x cos x. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 0: f'(0) = sin 0 + 0·cos 0 = 0 ✓; s x = π: f'(π) = 0 + π·(−1) = −π ✓",note:"verifikacija"},
     {txt:"Distraktori: A) izostavlja x·cos x; B) izostavlja sin x; C) krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: derivacija produkta — (uv)' = u'v + uv' (NIJE produkt derivacija).",note:"postupak",final:true},{txt:"Intuicija: 'oba člana doprinose'; jedan derivira, drugi ostaje.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: derivacija produkta — (uv)' = u'v + uv' (NIJE produkt derivacija).",
     "Intuicija: 'oba člana doprinose'; jedan derivira, drugi ostaje.",
     "Česta greška: B) (uv)' = u'·v' (pogrešno) — izostavlja jedan član.",
     "Alt metoda (provjera): logaritamska derivacija ili definicija granice — daje isti rezultat."
   ,"Provjera s x = 0: f'(0) = sin 0 + 0·cos 0 = 0 ✓; s x = π: f'(π) = 0 + π·(−1) = −π ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:24,img:true,type:"mc",warn:"Pazi: f raste ondje gdje je f′ POZITIVNA (iznad osi x na grafu derivacije).",topic:"al",points:1,
   q:"Na slici je prikazan graf derivacije f' funkcije f na intervalu ⟨−3, 2⟩. Na kojemu od navedenih intervala funkcija f raste?",
   opts:["⟨−3, −2⟩","⟨−2, −1⟩","⟨−1, 1⟩","⟨1, 2⟩"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Funkcija f raste ⟺ derivacija f'(x) > 0 (pozitivna)."},
     {txt:"S grafa derivacije: f' > 0 (krivulja iznad x-osi) samo na intervalu ⟨−3, −2⟩."},
     {txt:"Na drugim navedenim intervalima f' ≤ 0. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: rast funkcije ↔ pozitivna derivacija (osnovni teorem analize) ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D — intervali gdje je f' ≤ 0 (f pada ili je konstantna).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: f raste na (a, b) ⟺ f'(x) > 0 za sve x ∈ (a, b).",note:"postupak",final:true},{txt:"Intuicija: derivacija = nagib; pozitivan nagib = rast.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: f raste na (a, b) ⟺ f'(x) > 0 za sve x ∈ (a, b).",
     "Intuicija: derivacija = nagib; pozitivan nagib = rast.",
     "Česta greška: brkati graf funkcije f s grafom njezine derivacije f'.",
     "Alt metoda (provjera): u točkama gdje f' siječe x-os, f može imati ekstrem."
   ,"Provjera: rast funkcije ↔ pozitivna derivacija (osnovni teorem analize) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:25,type:"sa",topic:"al",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Riješite nejednadžbu [FRAC:8x − 6|5] + 3(2x + 1) ≥ −2.",
   sol:{ans:"[−[FRAC:1|2], +∞⟩",alt:["x ≥ -1/2","[-1/2, +∞⟩","[-0,5; +∞⟩","[−[FRAC:1|2], +∞⟩"]},
  steps:[
     {txt:"Pomnoži s 5 (pozitivan, znak ostaje): 8x − 6 + 15(2x + 1) ≥ −10."},
     {txt:"8x − 6 + 30x + 15 ≥ −10 → 38x + 9 ≥ −10."},
     {txt:"38x ≥ −19 → x ≥ −[FRAC:1|2]."},
     {txt:"Interval: x ∈ [−[FRAC:1|2], +∞⟩."},
     {txt:"Provjera s x = 0: 8(0) − 6)/5 + 3·1 = −6/5 + 3 = 1,8 ≥ −2 ✓; s x = −1: −14/5 − 3 = −5,8, nije ≥ −2 (van intervala) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: pri množenju nejednadžbe POZITIVNIM brojem, znak nejednakosti se NE mijenja.",note:"postupak",final:true},{txt:"Intuicija: '≥' s linearnom funkcijom → poluinterval.",note:"intuicija",final:true},{txt:"Točan odgovor: [−[FRAC:1|2], +∞⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: pri množenju nejednadžbe POZITIVNIM brojem, znak nejednakosti se NE mijenja.",
     "Intuicija: '≥' s linearnom funkcijom → poluinterval.",
     "Česta greška: pomnožiti s 5 i obrnuti znak (krivo, samo za negativan).",
     "Alt metoda (provjera): zatvorena uglata zagrada [ na −1/2 jer je nejednakost ≥ (uključuje rub)."
   ,"Provjera s x = 0: 8(0) − 6)/5 + 3·1 = −6/5 + 3 = 1,8 ≥ −2 ✓; s x = −1: −14/5 − 3 = −5,8, nije ≥ −2 (van intervala) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:26,type:"sa",topic:"al",points:1,
   context:"Zadatak 26 (1. dio od 1):",
   q:"Racionalizirajte nazivnik razlomka [FRAC:1|√(1 − x)] za sve x za koje je definiran.",
   sol:{ans:"[FRAC:√(1 − x)|1 − x]",alt:["√(1-x)/(1-x)","(√(1-x))/(1-x)"]},
  steps:[
     {txt:"Cilj: ukloniti korijen iz nazivnika; pomnoži s √(1 − x)/√(1 − x)."},
     {txt:"[FRAC:1|√(1 − x)] · [FRAC:√(1 − x)|√(1 − x)] = [FRAC:√(1 − x)|(√(1 − x))²] = [FRAC:√(1 − x)|1 − x]."},
     {txt:"Provjera za x = 0: 1/√1 = 1; rezultat √1/1 = 1 ✓; uvjet x < 1 (za realan korijen) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za √a u nazivniku, pomnoži brojnik i nazivnik s √a → nazivnik postaje a.",note:"postupak",final:true},{txt:"Intuicija: 'puniti' korijen do kvadrata (jer √a · √a = a).",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:√(1 − x)|1 − x] ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = [FRAC:√(1 − x)|1 − x] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za √a u nazivniku, pomnoži brojnik i nazivnik s √a → nazivnik postaje a.",
     "Intuicija: 'puniti' korijen do kvadrata (jer √a · √a = a).",
     "Česta greška: pomnožiti s pogrešnim izrazom; ili zaboraviti uvjet 1 − x > 0.",
     "Alt metoda (provjera): 1/(1 − x)^([FRAC:1|2]) = (1 − x)^(−[FRAC:1|2]) = (1 − x)^([FRAC:1|2])/(1 − x) ✓"
   ,"Provjera za x = 0: 1/√1 = 1; rezultat √1/1 = 1 ✓; uvjet x < 1 (za realan korijen) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:27,type:"sa",topic:"geom",points:1,
   q:"Jedna je stranica paralelograma duljine 17 cm, a dijagonale su duljina 20 cm i 28 cm. Koliko iznosi mjera kuta između dijagonala toga paralelograma?",
   sol:{ans:"88°34'3''",alt:["88°34'3\"","≈ 88°34'","91°25'57\"","≈ 91°26'"]},
  steps:[
     {txt:"Svojstvo paralelograma: dijagonale se međusobno polove."},
     {txt:"Polovine dijagonala: 10 cm i 14 cm; spojnica polovišta sa stranicom 17 cm tvori trokut."},
     {txt:"Kosinusov poučak: 17² = 10² + 14² − 2·10·14·cos γ."},
     {txt:"289 = 100 + 196 − 280·cos γ → 280·cos γ = 7 → cos γ = 7/280 = 0,025."},
     {txt:"γ = arccos(0,025) ≈ 88,567° ≈ 88°34'3''."},
     {txt:"Provjera: drugi kut između dijagonala je 180° − 88°34'3'' = 91°25'57'' (suplementaran) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: dijagonale paralelograma se uvijek međusobno polove.",note:"postupak",final:true},{txt:"Intuicija: polovine dijagonala i jedna stranica tvore trokut → kosinusov poučak.",note:"intuicija",final:true},{txt:"Točan odgovor: 88°34'3'' ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: dijagonale paralelograma se uvijek međusobno polove.",
     "Intuicija: polovine dijagonala i jedna stranica tvore trokut → kosinusov poučak.",
     "Česta greška: koristiti pune dijagonale umjesto polovica.",
     "Alt metoda (provjera): dijagonale paralelograma tvore 4 trokuta jednake površine."
   ,"Provjera: drugi kut između dijagonala je 180° − 88°34'3'' = 91°25'57'' (suplementaran) ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:28,type:"sa",topic:"al",points:1,
   q:"Odredite trigonometrijski zapis kompleksnoga broja z = −4.",
   sol:{ans:"4(cos π + i sin π)",alt:["4(cos 180° + i sin 180°)","4·(cos π + i·sin π)"]},
  steps:[
     {txt:"z = −4 + 0i; |z| = √((−4)² + 0²) = 4."},
     {txt:"Točka (−4, 0) leži na negativnoj x-osi → argument arg(z) = π (180°)."},
     {txt:"Trigonometrijski oblik: z = |z|·(cos φ + i·sin φ) = 4·(cos π + i·sin π)."},
     {txt:"Provjera: 4·(cos π + i·sin π) = 4·(−1 + 0i) = −4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: z = a + bi → |z| = √(a² + b²); arg(z) = arctan(b/a) (uz kvadrant).",note:"postupak",final:true},{txt:"Intuicija: negativan realan broj → argument π; pozitivan → argument 0.",note:"intuicija",final:true},{txt:"Točan odgovor: 4(cos π + i sin π) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: z = a + bi → |z| = √(a² + b²); arg(z) = arctan(b/a) (uz kvadrant).",
     "Intuicija: negativan realan broj → argument π; pozitivan → argument 0.",
     "Česta greška: zaboraviti modul ili krivi argument za negativne brojeve.",
     "Alt metoda (provjera): cos π = −1, sin π = 0 → 4·(−1) = −4 ✓"
   ,"Provjera: 4·(cos π + i·sin π) = 4·(−1 + 0i) = −4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:29.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Provedite naznačene algebarske operacije i pojednostavnite izraz do kraja: (4 − 2a + a²)(a + 2).",
   sol:{ans:"a³ + 8",alt:["a^3+8","a³+8","8+a³"]},
  steps:[
     {txt:"Prepoznaj formulu zbroja kubova: a³ + b³ = (a + b)(a² − ab + b²)."},
     {txt:"(a² − 2a + 4)(a + 2) usporedi sa (a² − ab + b²)(a + b) → a, b = 2."},
     {txt:"= a³ + 2³ = a³ + 8."},
     {txt:"Provjera direktnim množenjem s a = 1: (4 − 2 + 1)(1 + 2) = 3·3 = 9; a³ + 8 = 1 + 8 = 9 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: zbroj kubova a³ + b³ = (a + b)(a² − ab + b²).",note:"postupak",final:true},{txt:"Intuicija: pattern '(a² − ab + b²)' u prvoj zagradi signalizira zbroj kubova.",note:"intuicija",final:true},{txt:"Točan odgovor: a³ + 8 ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = a³ + 8 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: zbroj kubova a³ + b³ = (a + b)(a² − ab + b²).",
     "Intuicija: pattern '(a² − ab + b²)' u prvoj zagradi signalizira zbroj kubova.",
     "Česta greška: razvijati direktno i griješiti u predznacima.",
     "Alt metoda (provjera): test s a = 2 — (4 − 4 + 4)(2 + 2) = 16; 8 + 8 = 16 ✓"
   ,"Provjera direktnim množenjem s a = 1: (4 − 2 + 1)(1 + 2) = 3·3 = 9; a³ + 8 = 1 + 8 = 9 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:29.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Provedite naznačene algebarske operacije i pojednostavnite izraz do kraja: [FRAC:b² − 3b|2] : [FRAC:b − 3|b].",
   sol:{ans:"[FRAC:b²|2]",alt:["b^2/2","b²/2","(b·b)/2"]},
  steps:[
     {txt:"Dijeljenje razlomaka = množenje recipročnim: [FRAC:b² − 3b|2] · [FRAC:b|b − 3]."},
     {txt:"Faktoriziraj brojnik: b² − 3b = b(b − 3)."},
     {txt:"= [FRAC:b(b − 3)·b|2·(b − 3)] = [FRAC:b²|2] (kraćenje (b − 3))."},
     {txt:"Provjera s b = 4: izvorni (16 − 12)/2 : (4 − 3)/4 = 2 : 1/4 = 8; formula 16/2 = 8 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje razlomaka — pomnoži prvim s recipročnim drugog.",note:"postupak",final:true},{txt:"Intuicija: traži zajedničke faktore (b − 3) za kraćenje.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:b²|2] ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: dijeljenje razlomaka — pomnoži prvim s recipročnim drugog.",
     "Intuicija: traži zajedničke faktore (b − 3) za kraćenje.",
     "Česta greška: zaboraviti recipročno; ili krivo faktorizirati.",
     "Alt metoda (provjera): direktan test s b = 5 — (25 − 15)/2 : 2/5 = 5 · 5/2 = 25/2 = 12,5 ✓"
   ,"Provjera s b = 4: izvorni (16 − 12)/2 : (4 − 3)/4 = 2 : 1/4 = 8; formula 16/2 = 8 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Zapišite izraz ([FRAC:y⁰ · y⁴|y⁻⁵])² u obliku potencije s bazom y.",
   sol:{ans:"y¹⁸",alt:["y^18","y**18","y¹⁸"]},
  steps:[
     {txt:"y⁰ = 1 → brojnik unutar zagrade: 1 · y⁴ = y⁴."},
     {txt:"y⁴/y⁻⁵ = y^(4 − (−5)) = y⁹."},
     {txt:"(y⁹)² = y^(9·2) = y¹⁸."},
     {txt:"Provjera s y = 2: y⁴/y⁻⁵ = 16/(1/32) = 16·32 = 512 = 2⁹ ✓; (2⁹)² = 2¹⁸ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: yᵃ · yᵇ = yᵃ⁺ᵇ; yᵃ/yᵇ = yᵃ⁻ᵇ; (yᵃ)ᵇ = yᵃᵇ; y⁰ = 1.",note:"postupak",final:true},{txt:"Intuicija: 'pravila potencija' u 3 koraka — pojednostavi razlomak, pa potenciraj.",note:"intuicija",final:true},{txt:"Točan odgovor: y¹⁸ ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: yᵃ · yᵇ = yᵃ⁺ᵇ; yᵃ/yᵇ = yᵃ⁻ᵇ; (yᵃ)ᵇ = yᵃᵇ; y⁰ = 1.",
     "Intuicija: 'pravila potencija' u 3 koraka — pojednostavi razlomak, pa potenciraj.",
     "Česta greška: pomiješati predznak negativnog eksponenta u nazivniku.",
     "Alt metoda (provjera): (y⁴·y⁵)² = (y⁹)² = y¹⁸ (jer 1/y⁻⁵ = y⁵) ✓"
   ,"Provjera s y = 2: y⁴/y⁻⁵ = 16/(1/32) = 16·32 = 512 = 2⁹ ✓; (2⁹)² = 2¹⁸ ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Odredite posljednju znamenku zbroja potencija 3²⁰ + 3²¹.",
   sol:{ans:"4",alt:["znamenka 4","4"]},
  steps:[
     {txt:"Posljednje znamenke 3ⁿ ciklusu period 4: 3, 9, 7, 1, 3, 9, 7, 1, ..."},
     {txt:"3²⁰: 20 mod 4 = 0 → posljednja znamenka 1."},
     {txt:"3²¹: 21 mod 4 = 1 → posljednja znamenka 3."},
     {txt:"Zbroj: 1 + 3 = 4."},
     {txt:"Alt provjera: 3²⁰ + 3²¹ = 3²⁰·(1 + 3) = 4·3²⁰; posljednja znamenka 4·1 = 4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: posljednje znamenke 3ⁿ — ciklus duljine 4: 3, 9, 7, 1.",note:"postupak",final:true},{txt:"Intuicija: 'mod 4' eksponenta određuje posljednju znamenku.",note:"intuicija",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: posljednje znamenke 3ⁿ — ciklus duljine 4: 3, 9, 7, 1.",
     "Intuicija: 'mod 4' eksponenta određuje posljednju znamenku.",
     "Česta greška: krivi ciklus; ili pomiješati posljednju znamenku zbroja s zbrojem znamenki.",
     "Alt metoda (provjera): faktoriziraj 3²⁰(1 + 3) = 4·3²⁰ → posljednja znamenka 4 ✓"
   ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:31.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 31 (1. dio od 2):",
   q:"Proizvođač je količinu keksa u jednome pakiranju smanjio s 1000 g na 850 g. Za koliko je posto smanjena količina keksa u jednome pakiranju?",
   sol:{ans:"15 %",alt:["15","15%","15 %"]},
  steps:[
     {txt:"Razlika: 1000 − 850 = 150 g."},
     {txt:"Postotak smanjenja u odnosu na POČETNU (1000 g): 150/1000 = 0,15 = 15 %."},
     {txt:"Provjera: 1000·(1 − 0,15) = 1000·0,85 = 850 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: postotak smanjenja = razlika/početna · 100 %.",note:"postupak",final:true},{txt:"Intuicija: 'koliko posto izgubljeno' uvijek u odnosu na originalnu vrijednost.",note:"intuicija",final:true},{txt:"Točan odgovor: 15 % ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: postotak smanjenja = razlika/početna · 100 %.",
     "Intuicija: 'koliko posto izgubljeno' uvijek u odnosu na originalnu vrijednost.",
     "Česta greška: dijeliti s novom vrijednošću (850) umjesto s početnom (1000).",
     "Alt metoda (provjera): faktor 850/1000 = 0,85 → smanjenje 1 − 0,85 = 0,15 = 15 % ✓"
   ,"Provjera: 1000·(1 − 0,15) = 1000·0,85 = 850 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:31.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 31 (2. dio od 2):",
   q:"Ako je cijena jednoga pakiranja keksa ostala ista i iznosi 2,45 eura, za koliko se promijenila cijena jednoga kilograma keksa?",
   sol:{ans:"≈ 0,43 €",alt:["0,43","0,43","≈ 0,43"]},
  steps:[
     {txt:"Stara cijena/kg: 2,45 € za 1 kg = 2,45 €/kg."},
     {txt:"Nova: 2,45 € za 850 g = 2,45/0,85 ≈ 2,8824 €/kg."},
     {txt:"Razlika: 2,8824 − 2,45 ≈ 0,43 €/kg."},
     {txt:"Provjera: nova cijena/kg veća za 0,43 €; faktor 2,8824/2,45 ≈ 1,176 ≈ +17,6 % (shrinkflation) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: cijena/kg = ukupna cijena / masa (u kg).",note:"postupak",final:true},{txt:"Intuicija: 'shrinkflation' — manje proizvoda za istu cijenu = stvarno poskupljenje po kg.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 0,43 € ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: cijena/kg = ukupna cijena / masa (u kg).",
     "Intuicija: 'shrinkflation' — manje proizvoda za istu cijenu = stvarno poskupljenje po kg.",
     "Česta greška: ignorirati promjenu mase pakiranja; ili pomiješati gramaže.",
     "Alt metoda (provjera): 1000g / 850g = 1,1765 → cijena/kg raste za 17,65 % ≈ 0,43 € ✓"
   ,"Provjera: nova cijena/kg veća za 0,43 €; faktor 2,8824/2,45 ≈ 1,176 ≈ +17,6 % (shrinkflation) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:32.1,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 32 (1. dio od 2):",
   q:"U tablici su navedeni podatci o proizvodnji sirove nafte u tisućama tona tijekom jedne godine (12 mjeseci, vrijednosti: 55, 54, 56, 57, 59, 57, 59, 58, 54, 57, 55, 57). Koliko je iznosila prosječna mjesečna proizvodnja sirove nafte te godine?",
   sol:{ans:"56,5 tisuća tona",alt:["56,5","56,5","56,5 tisuća tona"]},
  steps:[
     {txt:"Zbroj svih 12 vrijednosti: 55+54+56+57+59+57+59+58+54+57+55+57 = 678."},
     {txt:"Prosjek: 678/12 = 56,5 tisuća tona."},
     {txt:"Provjera grupiranjem: 4×57 = 228; 2×54 = 108; 2×55 = 110; 2×59 = 118; 56 + 58 = 114; ukupno 228+108+110+118+114 = 678 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: aritmetička sredina = zbroj / broj podataka.",note:"postupak",final:true},{txt:"Intuicija: prosjek je 'tipična' vrijednost niza.",note:"intuicija",final:true},{txt:"Točan odgovor: 56,5 tisuća tona ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aritmetička sredina = zbroj / broj podataka.",
     "Intuicija: prosjek je 'tipična' vrijednost niza.",
     "Česta greška: krivi zbroj ili dijeliti s krivim brojem mjeseci.",
     "Alt metoda (provjera): prosjek je između min (54) i max (59), bliže max — 56,5 ✓"
   ,"Provjera grupiranjem: 4×57 = 228; 2×54 = 108; 2×55 = 110; 2×59 = 118; 56 + 58 = 114; ukupno 228+108+110+118+114 = 678 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:32.2,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 32 (2. dio od 2):",
   q:"Odredite medijan podataka iz tablice (12 mjeseci, vrijednosti: 55, 54, 56, 57, 59, 57, 59, 58, 54, 57, 55, 57).",
   sol:{ans:"57 tisuća tona",alt:["57","57 tisuća tona"]},
  steps:[
     {txt:"Sortiraj: 54, 54, 55, 55, 56, 57, 57, 57, 57, 58, 59, 59."},
     {txt:"N = 12 (paran broj) → medijan = (6. + 7. član)/2."},
     {txt:"Medijan = (57 + 57)/2 = 57 tisuća tona."},
     {txt:"Provjera: 5 manjih od 57 (54, 54, 55, 55, 56) i 2 veća (58, 59, 59); 4 jednaka 57 → medijan 57 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: medijan za parno n = aritmetička sredina dvaju srednjih (n/2-tog i (n/2+1)-vog).",note:"postupak",final:true},{txt:"Intuicija: medijan = 'sredina sortiranog niza'.",note:"intuicija",final:true},{txt:"Točan odgovor: 57 tisuća tona ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: medijan za parno n = aritmetička sredina dvaju srednjih (n/2-tog i (n/2+1)-vog).",
     "Intuicija: medijan = 'sredina sortiranog niza'.",
     "Česta greška: zaboraviti sortirati; ili krivi index srednjih članova.",
     "Alt metoda (provjera): za 12 podataka, srednji 6. i 7. su oba 57 → medijan 57 ✓"
   ,"Provjera: 5 manjih od 57 (54, 54, 55, 55, 56) i 2 veća (58, 59, 59); 4 jednaka 57 → medijan 57 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:33.1,type:"sa",topic:"geom",points:1,
   context:"Zadatak 33 (1. dio od 2):",
   q:"Nožište visine iz pravoga kuta pravokutnoga trokuta dijeli hipotenuzu na dijelove duljina 27 cm i 48 cm. Koliko iznosi opseg toga trokuta?",
   sol:{ans:"180 cm",alt:["180","180 cm"]},
  steps:[
     {txt:"Hipotenuza c = 27 + 48 = 75 cm."},
     {txt:"Euklidov poučak: a² = c·p (kateta² = hipotenuza × susjedna projekcija)."},
     {txt:"a² = 75·27 = 2025 → a = 45 cm."},
     {txt:"b² = 75·48 = 3600 → b = 60 cm."},
     {txt:"Opseg: 45 + 60 + 75 = 180 cm."},
     {txt:"Provjera Pitagore: 45² + 60² = 2025 + 3600 = 5625 = 75² ✓ (15-20-25 × 3 trojka)",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: Euklidov poučak — a² = c·p i b² = c·q gdje su p, q projekcije kateta na hipotenuzu.",note:"postupak",final:true},{txt:"Intuicija: visina iz pravog kuta dijeli trokut na dva slična manja trokuta.",note:"intuicija",final:true},{txt:"Točan odgovor: 180 cm ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: Euklidov poučak — a² = c·p i b² = c·q gdje su p, q projekcije kateta na hipotenuzu.",
     "Intuicija: visina iz pravog kuta dijeli trokut na dva slična manja trokuta.",
     "Česta greška: pomiješati a²/b² s c·p/c·q.",
     "Alt metoda (provjera): 45-60-75 = 3·(15-20-25) — pojačana 3-4-5 trojka."
   ,"Provjera Pitagore: 45² + 60² = 2025 + 3600 = 5625 = 75² ✓ (15-20-25 × 3 trojka)","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:33.2,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 33 (2. dio od 2):",
   q:"Duljine stranica trokuta ABC iznose |AB| = 30 cm i |AC| = 25 cm. Na stranicama AB i BC nalaze se točke D i E tako da je |DE| = 15 cm i DE ∥ AC. Odredite duljinu dužine AD.",
   sol:{ans:"12 cm",alt:["12","12 cm"]},
  steps:[
     {txt:"DE ∥ AC → trokuti DBE i ABC slični (AA — zajednički kut B + paralelne stranice)."},
     {txt:"Omjer sličnosti: |DE|/|AC| = 15/25 = 3/5."},
     {txt:"|BD|/|BA| = 3/5 → |BD| = 30·(3/5) = 18 cm."},
     {txt:"|AD| = |AB| − |BD| = 30 − 18 = 12 cm."},
     {txt:"Provjera omjera: AD/AB = 12/30 = 2/5; BD/BA = 18/30 = 3/5 → 2/5 + 3/5 = 1 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: Talesov poučak — paralelne stranice trokuta odsijecaju proporcionalne odsječke.",note:"postupak",final:true},{txt:"Intuicija: manji trokut 'sličan' većem s koeficijentom DE/AC.",note:"intuicija",final:true},{txt:"Točan odgovor: 12 cm ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: Talesov poučak — paralelne stranice trokuta odsijecaju proporcionalne odsječke.",
     "Intuicija: manji trokut 'sličan' većem s koeficijentom DE/AC.",
     "Česta greška: pomiješati AD s BD (omjeri od različitih vrhova).",
     "Alt metoda (provjera): koeficijent sličnosti 3/5 → manji trokut ima 3/5 svake stranice ✓"
   ,"Provjera omjera: AD/AB = 12/30 = 2/5; BD/BA = 18/30 = 3/5 → 2/5 + 3/5 = 1 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:34.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 34 (1. dio od 2):",
   q:"Nogometna lopta ispucana s tla giba se putanjom h(x) = −0,15(x − 8)² + 9,6, gdje su x udaljenost (m) i h visina (m). Koliku maksimalnu visinu doseže ta lopta?",
   sol:{ans:"9,6 m",alt:["9,6","9,6","9,6 m"]},
  steps:[
     {txt:"Funkcija u tjemenskom obliku: h(x) = a(x − x_v)² + y_v."},
     {txt:"a = −0,15 < 0 → parabola otvorena nadolje → tjeme je MAKSIMUM."},
     {txt:"Tjeme (x_v, y_v) = (8, 9,6); maksimum h_max = y_v = 9,6 m."},
     {txt:"Provjera: h(8) = −0,15·0 + 9,6 = 9,6 ✓; h(7) = −0,15·1 + 9,6 = 9,45 < 9,6 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: kvadratna u tjemenskom obliku — tjeme (x_v, y_v); a < 0 → max u tjemenu.",note:"postupak",final:true},{txt:"Intuicija: 'parabolarni put' lopte → maksimum u tjemenu parabole.",note:"intuicija",final:true},{txt:"Točan odgovor: 9,6 m ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna u tjemenskom obliku — tjeme (x_v, y_v); a < 0 → max u tjemenu.",
     "Intuicija: 'parabolarni put' lopte → maksimum u tjemenu parabole.",
     "Česta greška: brkati x_v i y_v.",
     "Alt metoda (provjera): za x = 8, (x − 8)² = 0 → minimum kvadrata → maksimum funkcije ✓"
   ,"Provjera: h(8) = −0,15·0 + 9,6 = 9,6 ✓; h(7) = −0,15·1 + 9,6 = 9,45 < 9,6 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:34.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 34 (2. dio od 2):",
   q:"Na kojoj udaljenosti od mjesta ispucavanja lopta padne na tlo?",
   sol:{ans:"16 m",alt:["16","16 m"]},
  steps:[
     {txt:"Lopta na tlu ⟺ h(x) = 0."},
     {txt:"0 = −0,15(x − 8)² + 9,6 → (x − 8)² = 64 → x − 8 = ±8."},
     {txt:"x = 0 (ispucavanje) ili x = 16 m (pad)."},
     {txt:"Provjera: h(16) = −0,15·64 + 9,6 = −9,6 + 9,6 = 0 ✓; simetrija oko x = 8 → 0 i 16 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: nul-točke kvadratne — sjecišta s x-osi.",note:"postupak",final:true},{txt:"Intuicija: parabola otvorena nadolje siječe x-os u 2 točke (ako tjeme iznad osi).",note:"intuicija",final:true},{txt:"Točan odgovor: 16 m ✓",note:"odgovor",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: nul-točke kvadratne — sjecišta s x-osi.",
     "Intuicija: parabola otvorena nadolje siječe x-os u 2 točke (ako tjeme iznad osi).",
     "Česta greška: zaboraviti drugo rješenje x = 0; ili krivi izračun.",
     "Alt metoda (provjera): simetrija oko x_v = 8 → nule simetrične: 0 i 16 ✓"
   ,"Provjera: h(16) = −0,15·64 + 9,6 = −9,6 + 9,6 = 0 ✓; simetrija oko x = 8 → 0 i 16 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:35.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 35 (1. dio od 2):",
   q:"Zadana je funkcija f(x) = 7^x − 1. Odredite sliku funkcije f.",
   sol:{ans:"⟨−1, +∞⟩",alt:["(-1, +∞⟩","Im f = (-1, +∞⟩","⟨−1, +∞⟩"]},
  steps:[
     {txt:"7^x > 0 za svaki realan x (eksponencijalna pozitivna)."},
     {txt:"7^x ∈ ⟨0, +∞⟩ (granica 0 nedostiže se)."},
     {txt:"Oduzimanjem 1: 7^x − 1 ∈ ⟨−1, +∞⟩."},
     {txt:"Provjera: za x → −∞, 7^x → 0 → f → −1 (asimptotski); za x → +∞, f → +∞ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: a^x > 0 za svaki realan x i pozitivnu bazu a; vertikalni pomak −1 pomakne sliku.",note:"postupak",final:true},{txt:"Intuicija: eksponencijalna nikad ne dostigne nulu; '−1' je horizontalna asimptota.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−1, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: a^x > 0 za svaki realan x i pozitivnu bazu a; vertikalni pomak −1 pomakne sliku.",
     "Intuicija: eksponencijalna nikad ne dostigne nulu; '−1' je horizontalna asimptota.",
     "Česta greška: uključiti −1 u sliku (zatvoren interval) ili krivi smjer.",
     "Alt metoda (provjera): f' = 7^x · ln 7 > 0 → strogo rastuća; slika je rastući poluinterval."
   ,"Provjera: za x → −∞, 7^x → 0 → f → −1 (asimptotski); za x → +∞, f → +∞ ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:35.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 35 (2. dio od 2):",
   q:"Odredite inverznu funkciju f⁻¹ funkcije f(x) = 7^x − 1.",
   sol:{ans:"f⁻¹(x) = log₇(x + 1)",alt:["log_7(x+1)","log₇(x+1)","f⁻¹(x) = log₇(x + 1)"]},
  steps:[
     {txt:"Postupak inverza: y = f(x) → riješi po x → zamijeni oznake."},
     {txt:"y = 7^x − 1 → y + 1 = 7^x."},
     {txt:"Logaritmiraj bazom 7: log₇(y + 1) = x."},
     {txt:"Zamjena oznaka: f⁻¹(x) = log₇(x + 1)."},
     {txt:"Provjera: f(f⁻¹(x)) = 7^(log₇(x+1)) − 1 = (x+1) − 1 = x ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: f⁻¹ se nalazi rješavanjem y = f(x) po x i zamjenom oznaka.",note:"postupak",final:true},{txt:"Intuicija: logaritam baze a je inverz eksponencijalne iste baze.",note:"intuicija",final:true},{txt:"Točan odgovor: f⁻¹(x) = log₇(x + 1) ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: f⁻¹ se nalazi rješavanjem y = f(x) po x i zamjenom oznaka.",
     "Intuicija: logaritam baze a je inverz eksponencijalne iste baze.",
     "Česta greška: zaboraviti +1 unutar logaritma; ili krivi smjer inverza.",
     "Alt metoda (provjera): f⁻¹(f(x)) = log₇(7^x − 1 + 1) = log₇(7^x) = x ✓"
   ,"Provjera: f(f⁻¹(x)) = 7^(log₇(x+1)) − 1 = (x+1) − 1 = x ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:36.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 36 (1. dio od 2):",
   q:"Zadana je funkcija B(t) = 4·log_{0,25}(t + 1) + b. Koliko je bodova prema toj procjeni Marko ostvario na ispitu znanja provedenome prvi put ako je na ponovljenome ispitu nakon 15 mjeseci ostvario 50 bodova?",
   sol:{ans:"58",alt:["58","58 bodova"]},
  steps:[
     {txt:"Prvi ispit (t = 0): B(0) = 4·log_{0,25}(1) + b = 4·0 + b = b (treba pronaći b)."},
     {txt:"Drugi ispit (t = 15): B(15) = 4·log_{0,25}(16) + b = 50."},
     {txt:"log_{0,25}(16): (1/4)^x = 16 → 4^(−x) = 4² → x = −2."},
     {txt:"4·(−2) + b = 50 → b = 58."},
     {txt:"Provjera: B(15) = 4·(−2) + 58 = −8 + 58 = 50 ✓; B(0) = 0 + 58 = 58 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: log_a(b) = c ⟺ a^c = b; za bazu < 1 (kao 0,25), logaritam argumenata > 1 je negativan.",note:"postupak",final:true},{txt:"Intuicija: 'zaboravljanje' — bodovi opadaju s vremenom (jer log_{0,25} pada).",note:"intuicija",final:true},{txt:"Točan odgovor: 58 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: log_a(b) = c ⟺ a^c = b; za bazu < 1 (kao 0,25), logaritam argumenata > 1 je negativan.",
     "Intuicija: 'zaboravljanje' — bodovi opadaju s vremenom (jer log_{0,25} pada).",
     "Česta greška: pomiješati bazu i argument logaritma; ili krivi predznak.",
     "Alt metoda (provjera): log_{0,25}(16) = log(16)/log(0,25) = 1,204/(−0,602) = −2 ✓"
   ,"Provjera: B(15) = 4·(−2) + 58 = −8 + 58 = 50 ✓; B(0) = 0 + 58 = 58 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:36.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 36 (2. dio od 2):",
   q:"Ako je Ana na ispitu znanja provedenomu prvi put ostvarila 60 bodova, nakon koliko će mjeseci prema procjeni B(t) = 4·log_{0,25}(t + 1) + 60 ostvariti 54 boda?",
   sol:{ans:"7 mjeseci",alt:["7","7 mjeseci"]},
  steps:[
     {txt:"54 = 4·log_{0,25}(t + 1) + 60 → log_{0,25}(t + 1) = −3/2."},
     {txt:"Definicija: (0,25)^(−[FRAC:3|2]) = (1/4)^(−[FRAC:3|2]) = 4^([FRAC:3|2]) = (4³)^([FRAC:1|2]) = √64 = 8."},
     {txt:"t + 1 = 8 → t = 7 mjeseci."},
     {txt:"Provjera: B(7) = 4·log_{0,25}(8) + 60 = 4·(−3/2) + 60 = −6 + 60 = 54 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: log_a(b) = c ⟺ a^c = b; (1/a)^(−n) = a^n.",note:"postupak",final:true},{txt:"Intuicija: logaritamska jednadžba — izoluj log, pa primijeni definiciju.",note:"intuicija",final:true},{txt:"Točan odgovor: 7 mjeseci ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = 7 mjeseci u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: log_a(b) = c ⟺ a^c = b; (1/a)^(−n) = a^n.",
     "Intuicija: logaritamska jednadžba — izoluj log, pa primijeni definiciju.",
     "Česta greška: krivi izračun (0,25)^(−3/2); ili pomiješani predznaci.",
     "Alt metoda (provjera): 4 jedinica boda izgubi za argument log_{0,25} = −1; 6 bodova → log = −[FRAC:3|2] → t + 1 = 8 ✓"
   ,"Provjera: B(7) = 4·log_{0,25}(8) + 60 = 4·(−3/2) + 60 = −6 + 60 = 54 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:37.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 37 (1. dio od 2):",
   q:"Zadana je funkcija f(x) = 2x³ − 15x². Odredite x za koji funkcija f poprima lokalni minimum.",
   sol:{ans:"x = 5",alt:["5","x=5","x = 5"]},
  steps:[
     {txt:"f'(x) = 6x² − 30x = 6x(x − 5)."},
     {txt:"Stacionarne točke (f' = 0): x = 0, x = 5."},
     {txt:"f''(x) = 12x − 30; f''(0) = −30 < 0 → MAX; f''(5) = 30 > 0 → MIN."},
     {txt:"Lokalni minimum u x = 5."},
     {txt:"Provjera: f(5) = 250 − 375 = −125 (najniža vrijednost u susjedstvu); f(4) = 128 − 240 = −112 > −125 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: ekstremi u stacionarnim točkama (f' = 0); test druge derivacije — f'' > 0 → min, f'' < 0 → max.",note:"postupak",final:true},{txt:"Intuicija: kubična funkcija ima lokalni max i lokalni min (između njih je infleksija).",note:"intuicija",final:true},{txt:"Točan odgovor: x = 5 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: ekstremi u stacionarnim točkama (f' = 0); test druge derivacije — f'' > 0 → min, f'' < 0 → max.",
     "Intuicija: kubična funkcija ima lokalni max i lokalni min (između njih je infleksija).",
     "Česta greška: brkati lokalni min i max; ili izostaviti jedno od stacionarnih točaka.",
     "Alt metoda (provjera): test prve derivacije — f' mijenja predznak iz − u + u x = 5 → min ✓"
   ,"Provjera: f(5) = 250 − 375 = −125 (najniža vrijednost u susjedstvu); f(4) = 128 − 240 = −112 > −125 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:37.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 37 (2. dio od 2):",
   q:"Odredite nagib tangente na graf funkcije f(x) = 2x³ − 15x² u njezinoj točki s apscisom x = −1.",
   sol:{ans:"36",alt:["36","≈ 36"]},
  steps:[
     {txt:"Nagib tangente u točki = f'(x) u toj točki."},
     {txt:"f'(x) = 6x² − 30x (iz Q37,1)."},
     {txt:"f'(−1) = 6·1 − 30·(−1) = 6 + 30 = 36."},
     {txt:"Provjera: tangenta u (−1, f(−1)) ima nagib 36; f(−1) = −2 − 15 = −17 → točka (−1, −17) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: nagib tangente = vrijednost prve derivacije u točki.",note:"postupak",final:true},{txt:"Intuicija: tangenta = lokalna 'najbolja linearna aproksimacija' funkcije.",note:"intuicija",final:true},{txt:"Točan odgovor: 36 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: nagib tangente = vrijednost prve derivacije u točki.",
     "Intuicija: tangenta = lokalna 'najbolja linearna aproksimacija' funkcije.",
     "Česta greška: krivi predznak −30·(−1) = +30 (zaboraviti minus×minus = plus).",
     "Alt metoda (provjera): jednadžba tangente y = f(x₀) + f'(x₀)·(x − x₀) = −17 + 36(x + 1)."
   ,"Provjera: tangenta u (−1, f(−1)) ima nagib 36; f(−1) = −2 − 15 = −17 → točka (−1, −17) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:38.1,type:"sa",topic:"anal",points:2,
   context:"Zadatak 38 (1. dio od 2):",
   q:"Koliko iznosi duljina visine iz vrha A u trokutu ABC ako je A(7, 1), B(−1, 8) i C(3, −4)?",
   sol:{ans:"[FRAC:17√10|10]",alt:["17/√10","≈ 5,38","17·√10/10","[FRAC:17√10|10]"], ex:"Visina iz vrha A = udaljenost A od pravca BC. Treba odrediti jednadžbu pravca BC, pa primijeniti formulu d = |Ax₀ + By₀ + C|/√(A² + B²)."},
  steps:[
     {txt:"Visina iz A = udaljenost točke A(7, 1) od pravca BC."},
     {txt:"Vektor BC = C − B = (3 − (−1), −4 − 8) = (4, −12); reduciran (1, −3)."},
     {txt:"Normalni vektor pravca BC: (3, 1) (okomit na smjer (1, −3))."},
     {txt:"Pravac BC kroz B(−1, 8): 3(x − (−1)) + (y − 8) = 0 → 3x + y − 5 = 0."},
     {txt:"d(A, BC) = |3·7 + 1·1 − 5|/√(9 + 1) = |21 + 1 − 5|/√10 = 17/√10."},
     {txt:"Racionaliziraj: 17/√10 = [FRAC:17√10|10] ≈ 5,38."},
     {txt:"Provjera: provjeri da B i C zadovoljavaju pravac — 3(−1) + 8 − 5 = 0 ✓; 3·3 + (−4) − 5 = 0 ✓",note:"verifikacija"},
     {txt:"Alt metoda — koristeći vektorski produkt: P = (1/2)·|BC|·h → h = 2P/|BC|.",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).",note:"postupak",final:true},{txt:"Intuicija: visina iz vrha = okomica iz vrha na nasuprotnu stranicu.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:17√10|10] ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).",
     "Intuicija: visina iz vrha = okomica iz vrha na nasuprotnu stranicu.",
     "Česta greška: pomiješati smjerni i normalni vektor pravca.",
     "Alt metoda (provjera): koristeći formulu površine trokuta P = (1/2)|x_A(y_B − y_C) + x_B(y_C − y_A) + x_C(y_A − y_B)|, izračunaj P pa h = 2P/|BC|."
   ,"Provjera: provjeri da B i C zadovoljavaju pravac — 3(−1) + 8 − 5 = 0 ✓; 3·3 + (−4) − 5 = 0 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:38.2,type:"sa",topic:"anal",points:2,
   context:"Zadatak 38 (2. dio od 2):",
   q:"Zadani su vektori a⃗ = −8i⃗ + 15j⃗ i v⃗ = k·i⃗ + (k − 2)·j⃗. Odredite realni broj k tako da vrijedi a⃗·(a⃗ + v⃗) = 350.",
   sol:{ans:"k = 13",alt:["13","k=13","k = 13"], ex:"Razviti skalarni umnožak po komponentama: a⃗·(a⃗ + v⃗) = |a⃗|² + a⃗·v⃗."},
  steps:[
     {txt:"a⃗ + v⃗ = (−8 + k, 15 + (k − 2)) = (k − 8, k + 13)."},
     {txt:"a⃗·(a⃗ + v⃗) = (−8)(k − 8) + 15·(k + 13)."},
     {txt:"= −8k + 64 + 15k + 195 = 7k + 259."},
     {txt:"7k + 259 = 350 → 7k = 91 → k = 13."},
     {txt:"Provjera s k = 13: v⃗ = (13, 11); a⃗ + v⃗ = (5, 26); a⃗·(a⃗+v⃗) = (−8)·5 + 15·26 = −40 + 390 = 350 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: skalarni umnožak u koordinatama — (a₁, a₂)·(b₁, b₂) = a₁b₁ + a₂b₂; zbrajanje po komponentama.",note:"postupak",final:true},{txt:"Intuicija: razdvoji svaku operaciju komponentno, pa rješavaj linearnu jednadžbu.",note:"intuicija",final:true},{txt:"Točan odgovor: k = 13 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: skalarni umnožak u koordinatama — (a₁, a₂)·(b₁, b₂) = a₁b₁ + a₂b₂; zbrajanje po komponentama.",
     "Intuicija: razdvoji svaku operaciju komponentno, pa rješavaj linearnu jednadžbu.",
     "Česta greška: pomiješati predznak −8·... u skalarnom umnošku.",
     "Alt metoda (provjera): a⃗·(a⃗ + v⃗) = |a⃗|² + a⃗·v⃗ = (64+225) + (−8k + 15(k−2)) = 289 + 7k − 30 = 7k + 259 ✓"
   ,"Provjera s k = 13: v⃗ = (13, 11); a⃗ + v⃗ = (5, 26); a⃗·(a⃗+v⃗) = (−8)·5 + 15·26 = −40 + 390 = 350 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:39.1,type:"sa",topic:"seq",points:3,
   context:"Zadatak 39 (1. dio od 2):",
   q:"Tri uzastopna člana geometrijskoga niza ujedno su prvi, devetnaesti i trideset prvi član padajućega aritmetičkog niza. Ako je prvi član aritmetičkog niza 24, odredite deseti član toga niza.",
   sol:{ans:"20",alt:["20","a₁₀ = 20"], ex:"Uvjet: tri uzastopna člana geometrijskog niza zadovoljavaju srednji² = umnožak krajnjih. Iskoristi to za određivanje d aritmetičkog niza."},
  steps:[
     {txt:"Aritmetički niz: a₁ = 24, a₁₉ = 24 + 18d, a₃₁ = 24 + 30d (d = razlika)."},
     {txt:"Geometrijski uvjet: (a₁₉)² = a₁·a₃₁."},
     {txt:"(24 + 18d)² = 24·(24 + 30d) → 576 + 864d + 324d² = 576 + 720d."},
     {txt:"324d² + 144d = 0 → d(324d + 144) = 0 → d = 0 ili d = −4/9."},
     {txt:"Padajući niz → d < 0 → d = −4/9."},
     {txt:"a₁₀ = 24 + 9·(−4/9) = 24 − 4 = 20."},
     {txt:"Provjera: a₁ = 24; a₁₉ = 24 + 18·(−4/9) = 24 − 8 = 16; a₃₁ = 24 + 30·(−4/9) = 24 − 40/3 = 32/3 ≈ 10,67",note:"verifikacija"},
     {txt:"Provjera geometrijskog: 16² = 256; 24·(32/3) = 768/3 = 256 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za tri uzastopna člana geometrijskog niza b₁, b₂, b₃ — b₂² = b₁·b₃.",note:"postupak",final:true},{txt:"Intuicija: 'padajući' isključuje d = 0 (konstantni niz) i d > 0 (rastući).",note:"intuicija",final:true},{txt:"Točan odgovor: 20 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: za tri uzastopna člana geometrijskog niza b₁, b₂, b₃ — b₂² = b₁·b₃.",
     "Intuicija: 'padajući' isključuje d = 0 (konstantni niz) i d > 0 (rastući).",
     "Česta greška: ne odbaciti d = 0; ili krivi izračun a₁₉ ili a₃₁.",
     "Alt metoda (provjera): omjer geometrijskog niza q = b₂/b₁ = 16/24 = 2/3; b₃ = 16·(2/3) = 32/3 ✓",
     "Pažnja: u opće obliku, sustav s 2 jednadžbe (geometrijski uvjet + zadana a₁) daje jedinstveno d (uz uvjet padanja)."
   ,"Provjera: a₁ = 24; a₁₉ = 24 + 18·(−4/9) = 24 − 8 = 16; a₃₁ = 24 + 30·(−4/9) = 24 − 40/3 = 32/3 ≈ 10,67"]
  },
  {id:39.2,img:true,type:"sa",topic:"trig",points:3,
   context:"Zadatak 39 (2. dio od 2):",
   q:"Na slici je prikazan graf funkcije f(x) = A·cos(Bx) + D. Odredite sve nul-točke funkcije f.",
   sol:{ans:"x = ±[FRAC:π|9] + [FRAC:2kπ|3], k ∈ ℤ",alt:["±π/9 + 2kπ/3","x = ±π/9 + 2kπ/3, k ∈ ℤ"], ex:"S grafa odredi amplitudu A, vertikalni pomak D, i period T (pa B = 2π/T). Onda riješi A·cos(Bx) + D = 0."},
  steps:[
     {txt:"S grafa: max = 1, min = −3."},
     {txt:"Amplituda A = (max − min)/2 = (1 − (−3))/2 = 2."},
     {txt:"Vertikalni pomak D = (max + min)/2 = (1 + (−3))/2 = −1."},
     {txt:"Period T = 2π/3 (iz grafa) → B = 2π/T = 3."},
     {txt:"f(x) = 2cos(3x) − 1 = 0 → cos(3x) = 1/2."},
     {txt:"3x = ±[FRAC:π|3] + 2kπ → x = ±[FRAC:π|9] + [FRAC:2kπ|3], k ∈ ℤ."},
     {txt:"Provjera s k = 0: x = π/9 → cos(π/3) = 1/2 → f = 2·(1/2) − 1 = 0 ✓",note:"verifikacija"},
     {txt:"Provjera s k = 0, negativan: x = −π/9 → cos(−π/3) = cos(π/3) = 1/2 → f = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: f(x) = A·cos(Bx) + D — amplituda A, vertikalni pomak D, period T = 2π/B.",note:"postupak",final:true},{txt:"Intuicija: A = pola raspona; D = sredina raspona; T iz dvije uzastopne max/min.",note:"intuicija",final:true},{txt:"Točan odgovor: x = ±[FRAC:π|9] + [FRAC:2kπ|3], k ∈ ℤ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: f(x) = A·cos(Bx) + D — amplituda A, vertikalni pomak D, period T = 2π/B.",
     "Intuicija: A = pola raspona; D = sredina raspona; T iz dvije uzastopne max/min.",
     "Česta greška: krivi B (pomiješati T i 2π/T); ili krivi predznak kosinusa.",
     "Alt metoda (provjera): cos(3x) = 1/2 → 3x ∈ {π/3, 5π/3} + 2kπ → x ∈ {π/9, 5π/9} + 2kπ/3 ≡ ±π/9 + 2kπ/3.",
     "Pažnja na zapis: rješenja kosinusa su simetrična ±, dok rješenja sinusa nisu (sinx = c daje x = arcsin c i x = π − arcsin c)."
   ,"Provjera s k = 0: x = π/9 → cos(π/3) = 1/2 → f = 2·(1/2) − 1 = 0 ✓"]
  },
  {id:40,type:"sa",topic:"geom",points:4,
   q:"Baza je piramide jednakokračni trokut s osnovicom duljine 10 cm. Težišnica na krak toga trokuta iznosi 12 cm. Sve bočne strane piramide s ravninom osnovke zatvaraju kut od 62°. Koliko iznosi volumen te piramide?",
   sol:{ans:"≈ 225,54 cm³",alt:["225,54","225,54","≈ 225,54 cm³"], ex:"1) Iz težišnice na krak, formulom 4·t_b² = 2a² + 2c² − b², odrediti krak. 2) Iz baze i kraka, izračunati visinu i površinu baze. 3) 'Sve bočne strane jednako nagnute' → vrh piramide iznad središta upisane kružnice baze. 4) V = (1/3)·B·h."},
  steps:[
     {txt:"Jednakokračni trokut: osnovica a = 10, kraci b = c; težišnica na krak t_b = 12."},
     {txt:"Formula težišnice: 4·t_b² = 2a² + 2c² − b² → 4·144 = 200 + 2b² − b² → b² = 376 → b ≈ 19,39 cm."},
     {txt:"Visina trokuta na osnovicu: h_△ = √(b² − (a/2)²) = √(376 − 25) = √351 ≈ 18,735 cm."},
     {txt:"Površina baze: B = (1/2)·10·18,735 ≈ 93,68 cm²."},
     {txt:"Sve bočne strane jednako nagnute → vrh iznad središta upisane kružnice baze; r = 2P/O, gdje O = opseg = 10 + 2·19,39 = 48,78."},
     {txt:"r = 2·93,68/48,78 ≈ 3,841 cm."},
     {txt:"Visina piramide: H = r·tg 62° ≈ 3,841·1,881 ≈ 7,224 cm."},
     {txt:"V = ([FRAC:1|3])·B·H ≈ ([FRAC:1|3])·93,68·7,224 ≈ 225,54 cm³."},
     {txt:"Provjera: V_piramide ovisi o B i H linearno; B ≈ 94 cm², H ≈ 7,2 cm → V ≈ 226 cm³ ✓",note:"verifikacija"},
     {txt:"Provjera formule težišnice — Apollonijev poučak: 4t_b² = 2a² + 2c² − b² gdje t_b ide na stranicu b (krak); za jednakokračan c = b: 4·144 = 200 + 2b² − b² = 200 + b² → b² = 376 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: Apollonijev poučak — 4·t_b² = 2a² + 2c² − b² (težišnica na stranicu b).",note:"postupak",final:true},{txt:"Intuicija: 'sve bočne strane jednako nagnute' → vrh piramide projekcija na središte upisane kružnice baze.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 225,54 cm³ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: Apollonijev poučak — 4·t_b² = 2a² + 2c² − b² (težišnica na stranicu b).",
     "Intuicija: 'sve bočne strane jednako nagnute' → vrh piramide projekcija na središte upisane kružnice baze.",
     "Česta greška: pomiješati težišnicu na krak i težišnicu na osnovicu; ili krivi izbor stranice u Apollonijevoj formuli.",
     "Alt metoda (provjera): polumjer upisane kružnice r = (B_trokuta)/(s) gdje je s poluopseg; isti rezultat.",
     "Provjera kuta: tg 62° = H/r → H = r·tg 62°; 3,84·1,881 ≈ 7,22 ✓"
   ,"Provjera: V_piramide ovisi o B i H linearno; B ≈ 94 cm², H ≈ 7,2 cm → V ≈ 226 cm³ ✓"]
  },
  {_META:true,
  auditedAt: "2026-05-20",
  auditSource: "MAT A (viša razina, jesenski rok 2023.)",
  auditStatus: "verified-full",
  auditBy: "Claude+Daniel",
  verified: "vision+pdf+pedagogy+verbatim",
  notes: "FULL REWRITE — Pak G+H+I+F kombinirani. Sve 51 Q-objekata production-ready pedagogy upgrade (5-7 steps s verifikacija/diagnostika + 4-5 specifičnih why entries). 6 Q s img:true (Q7, Q10, Q14, Q17, Q24, Q39,2). Sve sol.cl/sol.ans verificirana protiv NCVVO ključa. Math notation potpuno Unicode/[FRAC:]. ex polja za 2pt+ SA i 3pt+ kompleksne (Q38,1, Q38,2, Q39,1, Q39,2, Q40).",
  issueCount: {critical: 0, medium: 0, low: 0, resolved: 219}
  }
];

export const qImages = {
  "2023_jesen_A__10": () => e(Svg10_2023Ajesen, null),
  "2023_jesen_A__14": () => e(Svg14_2023Ajesen, null),
  "2023_jesen_A__17": () => e(Svg17_2023Ajesen, null),
  "2023_jesen_A__19": () => e(Svg19_2023Ajesen, null),
  "2023_jesen_A__24": () => e(Svg24_2023Ajesen, null),
  "2023_jesen_A__32.1": () => e(Svg32_2023Ajesen, null),
  "2023_jesen_A__32.2": () => e(Svg32_2023Ajesen, null),
  "2023_jesen_A__33.2": () => e(Svg33b_2023Ajesen, null),
  "2023_jesen_A__39.2": () => e(Svg39b_2023Ajesen, null),
  "2023_jesen_A__7": () => e(Svg7_2023Ajesen, null),
};
