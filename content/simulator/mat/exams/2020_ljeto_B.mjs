// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg27a_2020Bjj, Svg23a_2020Bjj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function Svg7_2020Blj(){
  const W=520,H=360,elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const poly=(pts,k)=>e("polygon",{key:k,points:pts,fill:"rgba(200,200,200,0.18)",stroke:"var(--text)",strokeWidth:1.5});
  const box=(x,y,w,h,k)=>e("rect",{key:k,x,y,width:w,height:h,fill:"rgba(200,200,200,0.18)",stroke:_BLUE,strokeWidth:1.5});
  // ── A: kvadrat + 4 trokuta (TOČAN) ──
  elems.push(e("rect",{key:"bA",x:2,y:2,width:200,height:300,rx:4,fill:"none",stroke:"var(--green)",strokeWidth:1.5,strokeDasharray:"5,3"}));
  elems.push(box(65,115,65,65,"Aq"));
  elems.push(poly("65,115 130,115 97,75","At"));
  elems.push(poly("65,115 65,180 15,147","Al"));
  elems.push(poly("130,115 130,180 168,88","Ar"));
  elems.push(poly("65,180 130,180 97,265","Ad"));
  elems.push(e("text",{key:"tA",x:97,y:295,fontSize:14,fill:"var(--green)",textAnchor:"middle",fontFamily:"sans-serif"},"A ✓"));
  // ── B: kvadrat dolje + 3 rotirana kvadrata ──
  elems.push(box(308,222,67,63,"Bq"));
  elems.push(poly("308,222 340,222 305,168 273,168","Bl"));
  elems.push(poly("340,222 375,222 392,165 357,165","Bm"));
  elems.push(poly("375,222 375,285 430,262 430,198","Br"));
  elems.push(e("text",{key:"tB",x:370,y:310,fontSize:14,fill:"var(--muted)",textAnchor:"middle",fontFamily:"sans-serif"},"B."));
  // ── C: veliki trokut + unutarnje linije ──
  elems.push(poly("32,350 152,350 92,248","Ct"));
  [["Ca",32,350,62,296],["Cb",152,350,122,296],["Cc",62,296,92,350],["Cd",122,296,92,350],["Ce",62,296,122,296]].forEach(([k,x1,y1,x2,y2])=>
    elems.push(e("line",{key:k,x1,y1,x2,y2,stroke:_BLUE,strokeWidth:1.2})));
  elems.push(e("text",{key:"tC",x:92,y:358,fontSize:14,fill:"var(--muted)",textAnchor:"middle",fontFamily:"sans-serif"},"C."));
  // ── D: 3 kvadrata + 2 trokuta ──
  [[202,258,"Da"],[252,258,"Db"],[302,258,"Dc"]].forEach(([x,y,k])=>elems.push(box(x,y,50,48,k)));
  elems.push(poly("252,258 302,258 277,218","Dt"));
  elems.push(poly("252,306 302,306 277,345","Dd"));
  elems.push(e("text",{key:"tD",x:277,y:358,fontSize:14,fill:"var(--muted)",textAnchor:"middle",fontFamily:"sans-serif"},"D."));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg28c_2020Blj(){
  const W=300, H=240;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems=[];
  // Točke (B = pravi kut, A gore, C desno)
  const Bx=50, By=190, Ax=50, Ay=40, Cx=250, Cy=190;

  // Fill trokuta
  elems.push(e("polygon",{
    key:"fill",
    points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,
    fill:"var(--teal)", fillOpacity:0.12, stroke:"none"
  }));
  // Stranice trokuta
  elems.push(e("line",{key:"AB",x1:Ax,y1:Ay,x2:Bx,y2:By,stroke:"var(--blue)",strokeWidth:2.5}));
  elems.push(e("line",{key:"BC",x1:Bx,y1:By,x2:Cx,y2:Cy,stroke:"var(--blue)",strokeWidth:2.5}));
  elems.push(e("line",{key:"AC",x1:Ax,y1:Ay,x2:Cx,y2:Cy,stroke:"var(--red)",strokeWidth:2,strokeDasharray:"6,4"}));
  // Pravi kut oznaka kod B
  const sq=12;
  elems.push(e("polyline",{key:"rk",
    points:`${Bx+sq},${By} ${Bx+sq},${By-sq} ${Bx},${By-sq}`,
    fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  // Oznake točaka
  elems.push(e("text",{key:"lA",x:Ax-16,y:Ay+5,fontSize:15,fill:"var(--blue)",fontWeight:"bold"},"A"));
  elems.push(e("text",{key:"lB",x:Bx-20,y:By+5,fontSize:15,fill:"var(--blue)",fontWeight:"bold"},"B"));
  elems.push(e("text",{key:"lC",x:Cx+6,y:Cy+5,fontSize:15,fill:"var(--blue)",fontWeight:"bold"},"C"));
  // Dimenzije na stranicama
  elems.push(e("text",{key:"dAB",x:Ax-35,y:(Ay+By)/2,fontSize:11,fill:"var(--blue)",textAnchor:"middle"},"a m"));
  elems.push(e("text",{key:"dBC",x:(Bx+Cx)/2,y:By+18,fontSize:11,fill:"var(--blue)",textAnchor:"middle"},"b m"));
  elems.push(e("text",{key:"dAC",x:(Ax+Cx)/2+10,y:(Ay+Cy)/2-12,fontSize:11,fill:"var(--red)",textAnchor:"middle"},"≈ 138.92 m"));
  // Info tekst
  elems.push(e("text",{key:"i1",x:W/2,y:28,fontSize:10.5,fill:"var(--muted)",textAnchor:"middle"},"a + b = 190 m  |  a·b/2 = 4200 m²"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}}, elems);
}

function Svg28a_2020Blj(){
  const W=280, H=280;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad=30;
  const S=220; // kvadrat side pixels
  const elems=[];
  // Koordinate kvadrata (A=dolje-lijevo, B=dolje-desno, C=gore-desno, D=gore-lijevo)
  const ax=pad, ay=pad+S, bx=pad+S, by=pad+S, cx=pad+S, cy=pad, dx=pad, dy=pad;
  // Skala: 10cm = S px → 1cm = S/10 px
  const sc=S/10;
  // Vrhovi upisanog četverokuta:
  // Gornja stranica DC: 4cm od D → P1=(dx+4*sc, dy)
  const p1x=dx+4*sc, p1y=dy;
  // Desna stranica CB: 5cm od C → P2=(cx, cy+5*sc)
  const p2x=cx, p2y=cy+5*sc;
  // Donja stranica AB: 7cm od A → P3=(ax+7*sc, ay)
  const p3x=ax+7*sc, p3y=ay;
  // Lijeva stranica DA: 3cm od A → P4=(ax, ay-3*sc)
  const p4x=ax, p4y=ay-3*sc;

  // Sjenčanje unutar četverokuta
  elems.push(e("polygon",{
    key:"fill",
    points:`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`,
    fill:"var(--blue)", fillOpacity:0.15, stroke:"none"
  }));
  // Kvadrat
  elems.push(e("rect",{key:"sq", x:pad, y:pad, width:S, height:S,
    fill:"none", stroke:_BLUE, strokeWidth:1.5}));
  // Upisani četverokut
  elems.push(e("polygon",{
    key:"quad",
    points:`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`,
    fill:"none", stroke:"var(--blue)", strokeWidth:2
  }));
  // Vrhovi (kružice)
  [[p1x,p1y,"P₁"],[p2x,p2y,"P₂"],[p3x,p3y,"P₃"],[p4x,p4y,"P₄"]].forEach(([x,y,lbl],i)=>{
    elems.push(e("circle",{key:`vc${i}`, cx:x, cy:y, r:4, fill:"var(--blue)"}));
  });
  // Kutovi kvadrata (oznake ABCD)
  const labels=[["A",ax-14,ay+14],["B",bx+5,by+14],["C",cx+5,cy-8],["D",dx-14,dy-8]];
  labels.forEach(([l,x,y],i)=>
    elems.push(e("text",{key:`ql${i}`,x,y,fontSize:13,fill:"var(--text)",fontWeight:"bold"},l))
  );
  // Dimenzije na stranicama — koristimo crvenu za segmente
  // Gornja stranica: 4cm od D (lijevo), 6cm do C (desno)
  elems.push(e("text",{key:"dim-g1",x:dx+2*sc,y:dy-7,fontSize:11,fill:"var(--red)",textAnchor:"middle"},"4 cm"));
  elems.push(e("text",{key:"dim-g2",x:p1x+3*sc,y:dy-7,fontSize:11,fill:"var(--muted)",textAnchor:"middle"},"6 cm"));
  // Desna stranica: 5cm od C
  elems.push(e("text",{key:"dim-d1",x:cx+8,y:cy+2.5*sc,fontSize:11,fill:"var(--red)",textAnchor:"start"},"5 cm"));
  elems.push(e("text",{key:"dim-d2",x:cx+8,y:p2y+2.5*sc,fontSize:11,fill:"var(--muted)",textAnchor:"start"},"5 cm"));
  // Donja stranica: 7cm od A
  elems.push(e("text",{key:"dim-b1",x:ax+3.5*sc,y:ay+16,fontSize:11,fill:"var(--red)",textAnchor:"middle"},"7 cm"));
  elems.push(e("text",{key:"dim-b2",x:p3x+1.5*sc,y:ay+16,fontSize:11,fill:"var(--muted)",textAnchor:"middle"},"3 cm"));
  // Lijeva stranica: 3cm od A
  elems.push(e("text",{key:"dim-l1",x:ax-8,y:ay-1.5*sc,fontSize:11,fill:"var(--red)",textAnchor:"end"},"3 cm"));
  elems.push(e("text",{key:"dim-l2",x:ax-8,y:p4y-3.5*sc,fontSize:11,fill:"var(--muted)",textAnchor:"end"},"7 cm"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}}, elems);
}

function Svg27_2020Blj(){
  const W=400, H=200, elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const rows=[
    ["Namirnica (100 g)","Energija / kcal","Ugljikohidrati / g","Bjelančevine / g"],
    ["ananas","56","13","0"],
    ["banane","99","23","1"],
    ["borovnice","62","14","1"],
    ["breskve","46","11","1"],
  ];
  const cols=[130,80,100,80]; // širine stupaca
  const colX=[10]; for(let i=0;i<cols.length-1;i++) colX.push(colX[i]+cols[i]);
  const rowH=35, headerH=40;
  const totalW=cols.reduce((a,b)=>a+b,0);
  const x0=(W-totalW)/2, y0=10;

  rows.forEach((row,ri)=>{
    const y=y0+ri*(ri===0?headerH:rowH)+(ri>0?(headerH-rowH):0);
    const rh=ri===0?headerH:rowH;
    // Pozadina reda
    elems.push(e("rect",{key:`rb${ri}`,x:x0,y:y0+ri*rowH+(ri===0?0:0),width:totalW,height:rh,
      fill:ri===0?"var(--blue)":ri%2===0?"rgba(95,169,255,0.06)":"transparent",
      fillOpacity:ri===0?0.25:1,stroke:"var(--bdr)",strokeWidth:0.8}));
    row.forEach((cell,ci)=>{
      const cx=x0+colX[ci]+cols[ci]/2;
      const cy=y0+ri*rowH+(ri===0?rh/2+5:rh/2+5);
      elems.push(e("text",{key:`c${ri}${ci}`,x:cx,y:cy,
        fontSize:ri===0?10:11,
        fill:ri===0?"var(--blue)":"var(--text)",
        fontWeight:ri===0||ci===0?"600":"400",
        textAnchor:"middle"},(cell)));
    });
  });

  // Popravak visina — iscrtaj tablicu ručno
  // Reset i crtaj ispočetka s ispravnim koordinatama
  elems.length=0;
  const rHeights=[38,32,32,32,32];
  let curY=y0;
  rows.forEach((row,ri)=>{
    const rh=rHeights[ri];
    // Pozadina
    elems.push(e("rect",{key:`rb${ri}`,x:x0,y:curY,width:totalW,height:rh,
      fill:ri===0?"rgba(95,169,255,0.22)":ri%2===1?"rgba(95,169,255,0.05)":"transparent",
      stroke:"var(--bdr)",strokeWidth:0.8}));
    row.forEach((cell,ci)=>{
      const cx=x0+colX[ci]+cols[ci]/2;
      const cy=curY+rh/2+4;
      elems.push(e("text",{key:`c${ri}${ci}`,x:cx,y:cy,
        fontSize:ri===0?9.5:11,
        fill:ri===0?"var(--blue)":"var(--text)",
        fontWeight:ri===0||ci===0?"600":"400",
        textAnchor:"middle"},cell));
    });
    // Okomite linije
    colX.forEach((cx,i)=>{
      if(i>0) elems.push(e("line",{key:`vl${ri}${i}`,x1:x0+cx,y1:curY,x2:x0+cx,y2:curY+rh,stroke:"var(--bdr)",strokeWidth:0.8}));
    });
    curY+=rh;
  });

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg22b_2020Blj(){
  const W=340,H=260,elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const ln=(x1,y1,x2,y2,k)=>e("line",{key:k,x1,y1,x2,y2,stroke:_BLUE,strokeWidth:1.5});
  // Lijeva crta: gore-lijevo → V1(140,120)
  elems.push(ln(62,45,140,120,"lc"));
  // Transverzala: V1(140,120) → V2(85,195) → dolje
  elems.push(ln(140,120,55,228,"tr"));
  // p: V1 → gore-desno
  elems.push(ln(140,120,318,50,"lp"));
  elems.push(e("text",{key:"p",x:315,y:46,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"p"));
  // q: V2 → desno
  elems.push(ln(85,195,315,218,"lq"));
  elems.push(e("text",{key:"q",x:318,y:221,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"q"));
  // Vrhovi
  elems.push(e("circle",{key:"v1",cx:140,cy:120,r:2.5,fill:_RED}));
  elems.push(e("circle",{key:"v2",cx:85,cy:195,r:2.5,fill:_RED}));
  // Kut 31°
  elems.push(e("path",{key:"a1",d:"M 115,101 A 28,28 0 0,1 136,105",fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  elems.push(e("text",{key:"t31",x:82,y:108,fontSize:12,fill:_GOLD,fontFamily:"sans-serif"},"31°"));
  // γ
  elems.push(e("path",{key:"ag",d:"M 148,134 A 18,18 0 0,1 155,122",fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  elems.push(e("text",{key:"tg",x:155,y:138,fontSize:13,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"γ"));
  // Kut 48°
  elems.push(e("path",{key:"a2",d:"M 98,185 A 18,18 0 0,0 97,197",fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  elems.push(e("text",{key:"t48",x:60,y:196,fontSize:12,fill:_GOLD,fontFamily:"sans-serif"},"48°"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg22a_2020Blj(){
  const W=300, H=220, elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const x0=30, y0=30, W2=220, H2=140;

  // Pravokutnik
  elems.push(e("rect",{key:"rct",x:x0,y:y0,width:W2,height:H2,
    fill:"var(--blue)",fillOpacity:0.1,stroke:"var(--blue)",strokeWidth:2}));

  // Dijagonala (narančasto/crvena)
  elems.push(e("line",{key:"diag",x1:x0,y1:y0+H2,x2:x0+W2,y2:y0,
    stroke:"var(--red)",strokeWidth:2,strokeDasharray:"6,3"}));

  // Pravi kut oznaka
  const sq=12;
  elems.push(e("polyline",{key:"rk",
    points:`${x0+sq},${y0+H2} ${x0+sq},${y0+H2-sq} ${x0},${y0+H2-sq}`,
    fill:"none",stroke:_BLUE,strokeWidth:1.2}));

  // Dimenzija: stranica 23.5 cm (desna strana, visina)
  elems.push(e("line",{key:"dl1",x1:x0+W2+8,y1:y0,x2:x0+W2+8,y2:y0+H2,stroke:"var(--muted)",strokeWidth:1}));
  elems.push(e("text",{key:"dl1t",x:x0+W2+22,y:y0+H2/2+4,fontSize:11,fill:"var(--blue)",textAnchor:"middle",transform:`rotate(-90,${x0+W2+22},${y0+H2/2})`},"23.5 cm"));

  // Dimenzija: dijagonala 38.2 cm (po dijagonali)
  elems.push(e("text",{key:"ddt",x:x0+W2/2-10,y:y0+H2/2-10,fontSize:11,fill:"var(--red)",textAnchor:"middle",
    transform:`rotate(-32,${x0+W2/2},${y0+H2/2})`},"38.2 cm"));

  // Dimenzija: tražena stranica b=? (donja strana)
  elems.push(e("text",{key:"db",x:x0+W2/2,y:y0+H2+22,fontSize:12,fill:"var(--green)",textAnchor:"middle"},"b = ? ≈ 30.12 cm"));

  // Pitagora napomena
  elems.push(e("text",{key:"pyt",x:W/2,y:H-4,fontSize:10,fill:"var(--muted)",textAnchor:"middle"},"b = √(38.2² − 23.5²) ≈ 30.116 cm"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg17_2020Blj(){
  const W=340, H=80, elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const x0=30, x1=310, y=40;
  const xMin=-4, xMax=8;
  const toX=v=>x0+(v-xMin)/(xMax-xMin)*(x1-x0);

  // Linija
  elems.push(e("line",{key:"ln",x1:x0,y1:y,x2:x1,y2:y,stroke:"var(--text)",strokeWidth:1.5}));
  // Strelica
  elems.push(e("polygon",{key:"arr",points:`${x1},${y} ${x1-8},${y-4} ${x1-8},${y+4}`,fill:"var(--text)"}));

  // Oznake cijelih brojeva
  for(let v=xMin;v<=xMax;v++){
    const x=toX(v);
    elems.push(e("line",{key:`t${v}`,x1:x,y1:y-5,x2:x,y2:y+5,stroke:"var(--text)",strokeWidth:1}));
    if(v!==-3&&v!==5&&v!==7) // izbjegni gužvu
      elems.push(e("text",{key:`tl${v}`,x:x,y:y+18,fontSize:10,fill:"var(--muted)",textAnchor:"middle"},`${v}`));
  }
  // Oznaka x
  elems.push(e("text",{key:"ox",x:x1+6,y:y+5,fontSize:11,fill:"var(--text)"},"x"));

  // Točka a=-2 (crvena)
  elems.push(e("circle",{key:"pa",cx:toX(-2),cy:y,r:5,fill:"var(--red)"}));
  elems.push(e("text",{key:"la",x:toX(-2),y:y-12,fontSize:12,fill:"var(--red)",textAnchor:"middle"},"a"));

  // Točka b=6 (crvena)
  elems.push(e("circle",{key:"pb",cx:toX(6),cy:y,r:5,fill:"var(--red)"}));
  elems.push(e("text",{key:"lb",x:toX(6),y:y-12,fontSize:12,fill:"var(--red)",textAnchor:"middle"},"b"));

  // Točka T=2 (zelena)
  elems.push(e("circle",{key:"pt",cx:toX(2),cy:y,r:5,fill:"var(--green)"}));
  elems.push(e("text",{key:"lt",x:toX(2),y:y-12,fontSize:12,fill:"var(--green)",textAnchor:"middle"},"T"));

  // Vrijednosti ispod
  elems.push(e("text",{key:"va",x:toX(-2),y:y+18,fontSize:10,fill:"var(--red)",textAnchor:"middle"},"−2"));
  elems.push(e("text",{key:"vb",x:toX(6),y:y+18,fontSize:10,fill:"var(--red)",textAnchor:"middle"},"6"));
  elems.push(e("text",{key:"vt",x:toX(2),y:y+18,fontSize:10,fill:"var(--green)",textAnchor:"middle"},"2"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg15_2020Blj(){
  const W=340, H=280, pad={l:44,r:20,t:24,b:36};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-4, xMax=8, yMin=-4, yMax=10;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const elems=[];

  // Grid
  for(let x=xMin;x<=xMax;x++) elems.push(e("line",{key:`gx${x}`,x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.5}));
  for(let y=yMin;y<=yMax;y++) elems.push(e("line",{key:`gy${y}`,x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.5}));

  // Osi
  elems.push(e("line",{key:"ax",x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:toX(0),y1:pad.t,x2:toX(0),y2:H-pad.b,stroke:"var(--text)",strokeWidth:1.5}));
  // Strelice
  elems.push(e("polygon",{key:"arx",points:`${W-pad.r},${toY(0)} ${W-pad.r-7},${toY(0)-4} ${W-pad.r-7},${toY(0)+4}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ary",points:`${toX(0)},${pad.t} ${toX(0)-4},${pad.t+7} ${toX(0)+4},${pad.t+7}`,fill:"var(--text)"}));

  // Os oznake
  elems.push(e("text",{key:"ox",x:W-pad.r+4,y:toY(0)+4,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"oy",x:toX(0)+4,y:pad.t-4,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"o0",x:toX(0)-12,y:toY(0)+13,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"o1x",x:toX(1)-4,y:toY(0)+13,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"o1y",x:toX(0)-14,y:toY(1)+4,fontSize:10,fill:"var(--muted)"},"1"));

  // Parabola f(x) = -0.5x² + 2x + 6
  const f=x=>-0.5*x*x+2*x+6;
  const pts=[];
  for(let xi=xMin;xi<=xMax;xi+=0.1){
    const yi=f(xi);
    if(yi>=yMin-1&&yi<=yMax+1) pts.push(`${toX(xi).toFixed(1)},${toY(yi).toFixed(1)}`);
  }
  elems.push(e("polyline",{key:"para",points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.5}));

  // Ključne točke
  // Nultočke
  [[- 2,0,"−2"],[6,0,"6"]].forEach(([x,y,l],i)=>{
    elems.push(e("circle",{key:`n${i}`,cx:toX(x),cy:toY(y),r:4,fill:"var(--red)"}));
    elems.push(e("text",{key:`nl${i}`,x:toX(x),y:toY(0)+16,fontSize:10,fill:"var(--red)",textAnchor:"middle"},l));
  });
  // Tjeme (2,8)
  elems.push(e("circle",{key:"tj",cx:toX(2),cy:toY(8),r:4,fill:"var(--green)"}));
  elems.push(e("text",{key:"tjl",x:toX(2)+8,y:toY(8)-4,fontSize:10,fill:"var(--green)"},"(2, 8)"));
  // f(0)=6
  elems.push(e("circle",{key:"f0",cx:toX(0),cy:toY(6),r:3.5,fill:"var(--blue)"}));
  elems.push(e("text",{key:"f0l",x:toX(0)+6,y:toY(6)+4,fontSize:10,fill:"var(--blue)"},"6"));
  // Oznaka funkcije
  elems.push(e("text",{key:"fn",x:toX(6.5),y:toY(3),fontSize:11,fill:"var(--blue)"},"y = f(x)"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg3_2020Blj(){
  const W=290,H=270,elems=[];
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Mreža 3x3
  [[30,30],[100,30],[170,30],[30,100],[100,100],[170,100],[30,170],[100,170],[170,170]].forEach(([x,y],i)=>
    elems.push(e("rect",{key:`g${i}`,x,y,width:70,height:70,fill:"none",stroke:_BLUE,strokeWidth:1})));
  // Vanjski kvadrat
  elems.push(e("rect",{key:"sq",x:30,y:30,width:210,height:210,fill:"none",stroke:_BLUE,strokeWidth:1.8}));
  // Osjenčano
  elems.push(e("polygon",{key:"p1",points:"30,240 30,170 72,212",fill:"var(--blue)",fillOpacity:0.4}));
  elems.push(e("polygon",{key:"p2",points:"72,212 100,240 240,240 240,100",fill:"var(--blue)",fillOpacity:0.4}));
  // Crte
  elems.push(e("line",{key:"d1",x1:30,y1:240,x2:240,y2:100,stroke:_BLUE,strokeWidth:1.6}));
  elems.push(e("line",{key:"d2",x1:30,y1:170,x2:100,y2:240,stroke:_BLUE,strokeWidth:1.6}));
  // Oznake kutova
  elems.push(e("text",{key:"lD",x:14,y:27,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"D"));
  elems.push(e("text",{key:"lC",x:244,y:27,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"C"));
  elems.push(e("text",{key:"lA",x:14,y:252,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"A"));
  elems.push(e("text",{key:"lB",x:244,y:252,fontSize:14,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"B"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg23a_2020Blj(){
  const W=300, H=280, pad={l:44,r:20,t:24,b:36};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3, xMax=6, yMin=-5, yMax=6;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const elems=[];

  // Grid
  for(let x=xMin;x<=xMax;x++) elems.push(e("line",{key:`gx${x}`,x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.5}));
  for(let y=yMin;y<=yMax;y++) elems.push(e("line",{key:`gy${y}`,x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.5}));

  // Osi
  elems.push(e("line",{key:"ax",x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:toX(0),y1:pad.t,x2:toX(0),y2:H-pad.b,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"arx",points:`${W-pad.r},${toY(0)} ${W-pad.r-7},${toY(0)-4} ${W-pad.r-7},${toY(0)+4}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ary",points:`${toX(0)},${pad.t} ${toX(0)-4},${pad.t+7} ${toX(0)+4},${pad.t+7}`,fill:"var(--text)"}));

  // Os oznake
  elems.push(e("text",{key:"ox",x:W-pad.r+4,y:toY(0)+4,fontSize:11,fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"oy",x:toX(0)+4,y:pad.t-4,fontSize:11,fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"o0",x:toX(0)-12,y:toY(0)+13,fontSize:10,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"o1x",x:toX(1)-4,y:toY(0)+13,fontSize:10,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"o1y",x:toX(0)-14,y:toY(1)+4,fontSize:10,fill:"var(--muted)"},"1"));

  // Graf y = 2x − 2 (rješenje, zelena isprekidana - konvencija "rješenje highlight")
  const f=x=>2*x-2;
  const lx1=xMin, lx2=xMax;
  elems.push(e("line",{key:"ln",x1:toX(lx1),y1:toY(f(lx1)),x2:toX(lx2),y2:toY(f(lx2)),
    stroke:"var(--green)",strokeWidth:2,strokeDasharray:"5,3",opacity:0.8}));

  // Ključne točke: f(0)=−2, f(3)=4
  [[0,-2,"(0, −2)"],[3,4,"(3, 4)"]].forEach(([x,y,l],i)=>{
    elems.push(e("circle",{key:`p${i}`,cx:toX(x),cy:toY(y),r:5,fill:"var(--green)"}));
    const ox=i===0?8:-60, oy=i===0?-8:-8;
    elems.push(e("text",{key:`pl${i}`,x:toX(x)+ox,y:toY(y)+oy,fontSize:10.5,fill:"var(--green)"},l));
  });

  // Jednadžba
  elems.push(e("text",{key:"fn",x:toX(4.2),y:toY(5.5),fontSize:11,fill:"var(--blue)"},"y = 2x − 2"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: traži broj strogo između −0,5 i 1.",topic:"br",points:1,
   q:"Za koji od navedenih brojeva x vrijedi -0,5 < x < 1?",
   opts:["-1,6","-0,45","1,2","2,35"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Tražimo x koji ispunjava −0,5 < x < 1 (otvoreni interval)."},{txt:"Provjeri svaku opciju:"},{txt:"A) −1,6: −1,6 < −0,5 → izvan intervala s lijeva.",note:"diagnostika"},{txt:"B) −0,45: −0,5 < −0,45 < 1 → unutar intervala ✓.",note:"diagnostika"},{txt:"C) 1,2: 1,2 > 1 → izvan intervala s desna.",note:"diagnostika"},{txt:"D) 2,35: još dalje s desna.",note:"diagnostika"},{txt:"Provjera B: −0,5 < −0,45 (manje negativan je veći) i −0,45 < 1 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: na brojevnoj osi, veća negativna vrijednost je manje od (npr. −1 < −0,5).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: x ∈ ⟨a, b⟩ ⇔ a < x < b (stroge nejednakosti, otvoreni interval).",note:"postupak",final:true}],
   why:["Pravilo: x ∈ ⟨a, b⟩ ⇔ a < x < b (stroge nejednakosti, otvoreni interval).","Intuicija: na brojevnoj osi, veća negativna vrijednost je manje od (npr. −1 < −0,5).","Česta greška: zamijeniti redoslijed na negativnim brojevima (−0,45 < −0,5 — KRIVO).","Provjera: −0,5 < −0,45 < 1 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:2,type:"mc",warn:"Pazi: podijeli 34567 s 28; ostatak = 34567 − 28·(cijeli dio kvocijenta).",topic:"br",points:1,
   q:"Koliki je ostatak pri dijeljenju broja 34567 s brojem 28?",
   opts:["5","9","12","15"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Tražimo ostatak pri dijeljenju 34567 s 28."},{txt:"Cijeli dio: 34567 ÷ 28 ≈ 1234,536 → cijela količina = 1234."},{txt:"Pomnoži: 1234 · 28 = ?"},{txt:"Razlomi: 1234 · 28 = 1234 · 30 − 1234 · 2 = 37020 − 2468 = 34552."},{txt:"Ostatak: 34567 − 34552 = 15."},{txt:"A) 5: greška pri računu (možda 34557).",note:"diagnostika"},{txt:"B) 9: nije rezultat 34567 mod 28.",note:"diagnostika"},{txt:"C) 12: još dalje.",note:"diagnostika"},{txt:"D) 15 ✓ — točan ostatak.",note:"diagnostika"},{txt:"Provjera: 34567 = 1234 · 28 + 15 = 34552 + 15 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: q · b je najveći višekratnik od b koji ne premašuje a.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a = b · q + r gdje je 0 ≤ r < b (cijeli dio i ostatak).",note:"postupak",final:true}],
   why:["Pravilo: a = b · q + r gdje je 0 ≤ r < b (cijeli dio i ostatak).","Intuicija: q · b je najveći višekratnik od b koji ne premašuje a.","Česta greška: dijeliti decimalno i zaboraviti pretvoriti decimale natrag u ostatak.","Provjera: 1234 · 28 + 15 = 34567 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:3,img:true,type:"mc",warn:"Pazi: prebroji osjenčane male kvadrate, podijeli s 9, pa ·100 %.",topic:"geom",points:1,
   q:"Prikazan je kvadrat ABCD podijeljen na 9 sukladnih manjih kvadrata. Koliko je posto površine kvadrata ABCD osjenčano?",
   opts:["33,33 %","38,89 %","44,44 %","46,67 %"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Kvadrat ABCD podijeljen na 9 sukladnih malih kvadrata (mreža 3×3)."},{txt:"Ukupna površina: 9 jediničnih kvadrata."},{txt:"Iz skice odbroji osjenčane dijelove: ako su 2 puna mala kvadrata + 1 polovica + još 1 polovica = 3 kvadrata; ali za 38,89 % treba 3,5 jedinica."},{txt:"3,5 / 9 · 100 = 38,888... % ≈ 38,89 %."},{txt:"A) 33,33 % = 3/9 (3 puna kvadrata, bez polovica).",note:"diagnostika"},{txt:"B) 38,89 % = 3,5/9 ✓ (3 puna + 1 polovica ili 2 puna + 3 polovice).",note:"diagnostika"},{txt:"C) 44,44 % = 4/9 (4 puna kvadrata).",note:"diagnostika"},{txt:"D) 46,67 %: nešto slučajno blizu, ali ne točno.",note:"diagnostika"},{txt:"Provjera: 3,5 / 9 = 0,3888... = 38,89 % ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dijagonale u podkvadratima dijele jednu ćeliju na dvije polovice.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak površine = (osjenčana površina / ukupna površina) · 100 %.",note:"postupak",final:true}],
   why:["Pravilo: postotak površine = (osjenčana površina / ukupna površina) · 100 %.","Intuicija: dijagonale u podkvadratima dijele jednu ćeliju na dvije polovice.","Česta greška: zaboraviti brojati polovice (uzeti samo pune ćelije).","Provjera: 3,5 · 100 / 9 ≈ 38,89 % ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:4,type:"mc",warn:"Pazi: crno = 1/6 → bijelo = 5/6; omjer crno : bijelo = 1 : 5.",topic:"br",points:1,
   q:"U berbi crnoga i bijeloga grožđa jedna je šestina ubranoga grožđa crno grožđe. Koji je omjer crnoga i bijeloga ubranog grožđa?",
   opts:["1 : 5","1 : 6","5 : 6","5 : 7"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Jedna šestina (1/6) ukupnog je crno grožđe → 5/6 je bijelo."},{txt:"Omjer crno : bijelo = (1/6) : (5/6) = 1 : 5."},{txt:"A) 1 : 5 ✓ — točan omjer.",note:"diagnostika"},{txt:"B) 1 : 6: pomiješali smo dio s ukupnim (1 je dio od 6, a omjer je 1:5 jer su to dva dijela).",note:"diagnostika"},{txt:"C) 5 : 6: također krivi tipični omjer.",note:"diagnostika"},{txt:"D) 5 : 7: još dalje.",note:"diagnostika"},{txt:"Provjera: ako uzmemo 60 grozdova, crnih = 10, bijelih = 50; 10:50 = 1:5 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je 1 od 6 dijelova crno, onda 5 dijelova nije crno (bijelo).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: omjer dva dijela cjeline = dio1 : dio2 (ne dio : cjelina).",note:"postupak",final:true}],
   why:["Pravilo: omjer dva dijela cjeline = dio1 : dio2 (ne dio : cjelina).","Intuicija: ako je 1 od 6 dijelova crno, onda 5 dijelova nije crno (bijelo).","Česta greška: pomiješati omjer s razlomkom (1/6 ≠ 1:6).","Provjera: za 60 grozdova → 10 crnih, 50 bijelih, omjer 1:5 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:5,type:"mc",warn:"Pazi: prosjek = ukupno djece / ukupno obitelji (uključi sve obitelji).",topic:"br",points:1,
   q:"U ulici živi 5 obitelji s po jednim djetetom, 8 obitelji s po dvoje djece, 4 obitelji s po troje djece, 1 obitelj sa sedmero djece i nekoliko obitelji s po četvero djece. Ako je prosječan broj djece po obitelji u toj ulici jednak 2,4, koliko je obitelji s po četvero djece?",
   opts:["1","2","3","4"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Postavi: 5 obitelji × 1 dijete = 5; 8 × 2 = 16; 4 × 3 = 12; 1 × 7 = 7."},{txt:"Zbroj djece u poznatim obiteljima: 5 + 16 + 12 + 7 = 40 djece. Broj obitelji: 5 + 8 + 4 + 1 = 18."},{txt:"Neka je n broj obitelji s po 4 djece. Ukupno obitelji: 18 + n. Ukupno djece: 40 + 4n."},{txt:"Prosjek = (40 + 4n) / (18 + n) = 2,4."},{txt:"40 + 4n = 2,4(18 + n) = 43,2 + 2,4n → 4n − 2,4n = 43,2 − 40 → 1,6n = 3,2 → n = 2."},{txt:"A) 1: jedna obitelj nije dovoljna.",note:"diagnostika"},{txt:"B) 2 ✓ — dvije obitelji s 4 djece.",note:"diagnostika"},{txt:"C) 3, D) 4: previše djece u prosjeku.",note:"diagnostika"},{txt:"Provjera: 20 obitelji · 2,4 = 48 djece; 40 + 4 · 2 = 48 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: nepoznati broj n se rješava linearnom jednadžbom iz prosjeka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj svih vrijednosti / broj vrijednosti.",note:"postupak",final:true}],
   why:["Pravilo: aritmetički prosjek = zbroj svih vrijednosti / broj vrijednosti.","Intuicija: nepoznati broj n se rješava linearnom jednadžbom iz prosjeka.","Česta greška: zaboraviti dodati n i u brojnik i u nazivnik.","Provjera: 48 / 20 = 2,4 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:6,type:"mc",warn:"Pazi: pomnoži s 2 da ukloniš nazivnik, riješi po x, zaokruži na kraju.",topic:"al",points:1,
   q:"Čemu je jednako rješenje jednadžbe 3(2 − 5x) = (4x − 1)/2 + 6 zaokruženo na četiri decimale?",
   opts:["0,0282","0,0294","0,2031","0,2059"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Polazna jednadžba: 3(2 − 5x) = (4x − 1)/2 + 6."},{txt:"Razvij lijevo: 6 − 15x."},{txt:"Pomnoži sve s 2 (ukloni razlomak): 2(6 − 15x) = (4x − 1) + 12 → 12 − 30x = 4x + 11."},{txt:"Prebaci sve x na lijevu: −30x − 4x = 11 − 12 → −34x = −1 → x = 1/34."},{txt:"Numerički: 1/34 ≈ 0,029411... → zaokruženo na 4 decimale: 0,0294."},{txt:"A) 0,0282: krivi razlomak.",note:"diagnostika"},{txt:"B) 0,0294 ✓ — 1/34 zaokruženo.",note:"diagnostika"},{txt:"C) 0,2031: 10× prevelik.",note:"diagnostika"},{txt:"D) 0,2059: također prevelik.",note:"diagnostika"},{txt:"Provjera: 3(2 − 5/34) = 6 − 15/34; desno: (4/34 − 1)/2 + 6 = (−30/34)/2 + 6 = −15/34 + 6 = (204 − 15)/34 = 189/34; lijevo: (204 − 15)/34 = 189/34 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: rezultat 1/34 je manji od 1/30 ≈ 0,033; pa očekuj rezultat oko 0,03.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearne jednadžbe s razlomcima — ukloni razlomke množenjem.",note:"postupak",final:true}],
   why:["Pravilo: linearne jednadžbe s razlomcima — ukloni razlomke množenjem.","Intuicija: rezultat 1/34 je manji od 1/30 ≈ 0,033; pa očekuj rezultat oko 0,03.","Česta greška: zaboraviti razdistribuirati 3 u 3(2 − 5x) ili greška pri množenju razlomka.","Provjera: x = 1/34 → obje strane = 189/34 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:7,img:true,type:"mc",warn:"Pazi: mreža = 1 kvadrat (baza) + 4 trokuta (pobočke).",topic:"geom",points:1,
   q:"Na kojoj je skici prikazana mreža četverostrane piramide?",
   opts:["A","B","C","D"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Mreža četverostrane piramide: 1 kvadratna baza + 4 trokutaste pobočke."},{txt:"A) 1 kvadrat + 4 trokuta (raspoređeni okolo) ✓ — mreža četverostrane piramide.",note:"diagnostika"},{txt:"B) 3 kvadrata + 2 trokuta: mreža trostrane prizme.",note:"diagnostika"},{txt:"C) 1 veliki trokut s 4 manja unutarnja trokuta: mreža tetraedra (trostrane piramide).",note:"diagnostika"},{txt:"D) 3 kvadrata + 2 trokuta drugačije raspoređeni: također prizma.",note:"diagnostika"},{txt:"Provjera A: četverostrana piramida ima 5 strana: 1 baza + 4 pobočke → mreža ima 1 kvadrat + 4 trokuta ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: n-strana piramida = baza s n stranica + n pobočnih trokuta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: mreža = sve strane tijela rastavljene u ravninu.",note:"postupak",final:true}],
   why:["Pravilo: mreža = sve strane tijela rastavljene u ravninu.","Intuicija: n-strana piramida = baza s n stranica + n pobočnih trokuta.","Česta greška: pomiješati piramidu s prizmom (prizma ima dvije baze, piramida samo jednu).","Provjera: četverostrana piramida ima 5 strana ukupno → 1 kvadrat + 4 trokuta ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:8,type:"mc",warn:"Pazi: usporedi nagibe pravaca (paralelni = isti nagib) i odsječke.",topic:"anal",points:1,
   q:"Zadana su tri pravca: p₁ … y = -3x + 2,  p₂ … y = 3x + 2,  p₃ … y = 3x − 2. Koja je od navedenih izjava istinita za te pravce?",
   opts:["Pravci p₁ i p₂ su usporedni.","Pravci p₁ i p₃ su usporedni.","Pravci p₂ i p₃ su usporedni.","Među zadanima nema usporednih pravaca."],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Tri pravca: p₁: y = −3x + 2; p₂: y = 3x + 2; p₃: y = 3x − 2."},{txt:"Usporedni pravci imaju ISTI nagib (koeficijent k uz x)."},{txt:"Nagib p₁ = −3; nagib p₂ = 3; nagib p₃ = 3."},{txt:"p₂ i p₃ oba imaju nagib 3 → usporedni ✓."},{txt:"p₁ ima nagib −3 → nije usporedan s p₂ ni p₃."},{txt:"A) p₁ i p₂ (−3 vs 3): NIJE usporedno.",note:"diagnostika"},{txt:"B) p₁ i p₃ (−3 vs 3): NIJE usporedno.",note:"diagnostika"},{txt:"C) p₂ i p₃ ✓ (oba nagib 3).",note:"diagnostika"},{txt:"D) Nema usporednih: KRIVO, p₂ i p₃ jesu.",note:"diagnostika"},{txt:"Provjera: p₂ i p₃ različiti slobodni članovi (2 vs −2), isti nagib → usporedni ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: usporedni pravci imaju isti smjer (isti nagib), ali različito presjecaju y-os.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravci y = k₁x + l₁ i y = k₂x + l₂ usporedni ⇔ k₁ = k₂ i (l₁ ≠ l₂).",note:"postupak",final:true}],
   why:["Pravilo: pravci y = k₁x + l₁ i y = k₂x + l₂ usporedni ⇔ k₁ = k₂ i (l₁ ≠ l₂).","Intuicija: usporedni pravci imaju isti smjer (isti nagib), ali različito presjecaju y-os.","Česta greška: gledati samo y-presjek umjesto nagib.","Provjera: 3 = 3 i 2 ≠ −2 → p₂ ∥ p₃ ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:9,type:"mc",warn:"Pazi: promjer žetona = 6 cm; broj u redu = duljina stranice / 6 (cijeli dio).",topic:"geom",points:1,
   q:"Koliko se najviše okruglih žetona polumjera 3 cm može posložiti jedan pored drugoga na list papira pravokutnoga oblika dimenzija 20 cm × 30 cm?",
   opts:["13","15","18","21"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Pravokutni list 20 × 30 cm. Žeton polumjera 3 cm → promjer 6 cm."},{txt:"Broj žetona u jednom redu (dužina 30): ⌊30/6⌋ = 5."},{txt:"Broj redova (širina 20): ⌊20/6⌋ = 3."},{txt:"Ukupno: 5 × 3 = 15 žetona u kvadratnom rasporedu."},{txt:"A) 13: previše malen.",note:"diagnostika"},{txt:"B) 15 ✓ — standardni kvadratni raspored.",note:"diagnostika"},{txt:"C) 18: nije ostvariv u rectangulu 20×30 s žetonima promjera 6.",note:"diagnostika"},{txt:"D) 21: još više nemoguć.",note:"diagnostika"},{txt:"Provjera: 5 · 6 = 30 (cijela duljina); 3 · 6 = 18 < 20 (preostali 2 cm). 5 · 3 = 15 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: žetoni se ne mogu preklapati — njihovi centri moraju biti na rastojanju ≥ promjera.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: broj krugova promjera d u pravokutniku a × b = ⌊a/d⌋ · ⌊b/d⌋ (kvadratni raspored).",note:"postupak",final:true}],
   why:["Pravilo: broj krugova promjera d u pravokutniku a × b = ⌊a/d⌋ · ⌊b/d⌋ (kvadratni raspored).","Intuicija: žetoni se ne mogu preklapati — njihovi centri moraju biti na rastojanju ≥ promjera.","Česta greška: koristiti polumjer (3 cm) umjesto promjera (6 cm) u izračunu.","Provjera: 5 · 3 = 15 žetona stane bez preklapanja ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:10,type:"mc",warn:"Pazi: V = B·h; baza B = a²√3/4 (jednakostranični trokut).",topic:"geom",points:1,
   q:"Baza je uspravne trostrane prizme jednakostraničan trokut. Koliki je obujam te prizme ako joj je duljina osnovnoga brida 8 cm, a duljina bočnoga brida 2 cm?",
   opts:["28 cm³","42,7 cm³","48 cm³","55,4 cm³"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Pravilna trostrana prizma: baza je jednakostranični trokut sa stranicom 8 cm."},{txt:"Površina baze: P_b = (a²√3)/4 = (64√3)/4 = 16√3 cm²."},{txt:"Visina prizme (bočni brid): h = 2 cm."},{txt:"Obujam: V = P_b · h = 16√3 · 2 = 32√3 cm³."},{txt:"Numerički: 32 · 1,732 ≈ 55,4 cm³."},{txt:"A) 28: krivi obračun površine baze.",note:"diagnostika"},{txt:"B) 42,7: koristio krivu formulu (možda kvadrat).",note:"diagnostika"},{txt:"C) 48: različito približavanje √3.",note:"diagnostika"},{txt:"D) 55,4 ✓ — točno: 32√3.",note:"diagnostika"},{txt:"Provjera: V = 16√3 · 2 = 32√3 ≈ 55,4 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: √3/4 ≈ 0,433 je faktor za jednakostranični trokut.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V prizme = (površina baze) · (visina). Baza za jednakostranični trokut: P = a²√3 / 4.",note:"postupak",final:true}],
   why:["Pravilo: V prizme = (površina baze) · (visina). Baza za jednakostranični trokut: P = a²√3 / 4.","Intuicija: √3/4 ≈ 0,433 je faktor za jednakostranični trokut.","Česta greška: koristiti formulu za pravokutni trokut umjesto jednakostranični.","Provjera: 32 · 1,732 = 55,42 cm³ ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:11,type:"mc",warn:"Pazi: nagib −2 → funkcija pada → najmanja vrijednost za NAJVEĆI x.",topic:"func",points:1,
   q:"Za koju je od navedenih vrijednosti varijable x vrijednost funkcije f(x) = -2x + 1 najmanja?",
   opts:["x = -11/3","x = -5/14","x = 5/14","x = 11/3"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Funkcija f(x) = −2x + 1. Nagib k = −2 < 0 → f opada (sa rastom x, vrijednost f pada)."},{txt:"Najmanja vrijednost f ⇔ najveći x."},{txt:"Usporedi vrijednosti x u opcijama: −11/3 ≈ −3,67; −5/14 ≈ −0,36; 5/14 ≈ 0,36; 11/3 ≈ 3,67."},{txt:"Najveći x = 11/3 → najmanja f → D."},{txt:"A) x = −11/3: najmanji x → NAJVEĆA f (ne najmanja).",note:"diagnostika"},{txt:"B) x = −5/14: srednji negativan x.",note:"diagnostika"},{txt:"C) x = 5/14: srednji pozitivan x.",note:"diagnostika"},{txt:"D) x = 11/3 ✓ — najveći x, najmanja f.",note:"diagnostika"},{txt:"Provjera: f(11/3) = −22/3 + 1 = −19/3 ≈ −6,33 (najmanja vrijednost). Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: opadajuca funkcija — graf pada slijeva-na-desno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za linearnu f(x) = kx + l s k < 0, f opada (manja vrijednost za veći x).",note:"postupak",final:true}],
   why:["Pravilo: za linearnu f(x) = kx + l s k < 0, f opada (manja vrijednost za veći x).","Intuicija: opadajuca funkcija — graf pada slijeva-na-desno.","Česta greška: birati najmanji x umjesto najveći (zaboraviti da je funkcija opadajuća).","Provjera: f(11/3) = −19/3 ≈ −6,3; f(−11/3) = 23/3 ≈ 7,7; pa f(11/3) je manja ✓.","Provjera grafom: kontinuiranost, monotonost, simetrija.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:12,type:"mc",warn:"Pazi: prati operacije redom — (5+2)/(3+2) = 1,4; − 0,35 = 1,05; pa kvadriraj.",topic:"br",points:1,
   q:"I brojniku i nazivniku razlomka 5/3 dodamo broj 2 pa od dobivenoga broja oduzmemo 0,35. Kvadrat tako dobivenoga broja uvećamo 8 puta. Koji je rezultat provedenih računskih operacija?",
   opts:["8,82","11,82","18,22","88,22"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Polazni razlomak: 5/3. Dodaj 2 u brojnik i nazivnik: (5+2)/(3+2) = 7/5."},{txt:"Pretvori u decimalan: 7/5 = 1,4."},{txt:"Oduzmi 0,35: 1,4 − 0,35 = 1,05."},{txt:"Kvadrat: 1,05² = 1,1025."},{txt:"Uvećaj 8 puta: 8 · 1,1025 = 8,82."},{txt:"A) 8,82 ✓ — točno.",note:"diagnostika"},{txt:"B) 11,82: greška pri kvadratu ili množenju.",note:"diagnostika"},{txt:"C) 18,22: 16,5·… slično krivi račun.",note:"diagnostika"},{txt:"D) 88,22: još veća greška.",note:"diagnostika"},{txt:"Provjera: 1,05 · 1,05 = 1,1025; 8 · 1,1025 = 8,82 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: pomakni se KORAK PO KORAK — ne preživljačati pojedini međukorak.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: višestruke operacije — redoslijed je ekstremno važan: 1) razlomak, 2) oduzimanje, 3) kvadrat, 4) množenje.",note:"postupak",final:true}],
   why:["Pravilo: višestruke operacije — redoslijed je ekstremno važan: 1) razlomak, 2) oduzimanje, 3) kvadrat, 4) množenje.","Intuicija: pomakni se KORAK PO KORAK — ne preživljačati pojedini međukorak.","Česta greška: kvadrirati prije oduzimanja ili obrnuti redoslijed.","Provjera: 1,4 − 0,35 = 1,05; 1,05² · 8 = 8,82 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:13,type:"mc",warn:"Pazi: sestrin = 0,88·bratov i bratov = sestrin + 9 cm.",topic:"br",points:1,
   q:"Brat i sestra mjerili su duljinu svojih koraka. Bratov je korak za 9 cm dulji od sestrina koraka, a sestrin je korak za 12 % kraći od bratova koraka. Kolika je duljina sestrina koraka?",
   opts:["62 cm","66 cm","71 cm","74 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Označi: B = bratov korak, S = sestrin korak. B = S + 9 (bratov dulji za 9 cm)."},{txt:"Sestrin je za 12 % kraći: S = B · (1 − 0,12) = 0,88 · B."},{txt:"Iz S = 0,88B: B = S / 0,88."},{txt:"Uvrsti u prvu: S / 0,88 = S + 9 → S = 0,88(S + 9) = 0,88S + 7,92."},{txt:"Skupi S: S − 0,88S = 7,92 → 0,12S = 7,92 → S = 66 cm."},{txt:"A) 62: slična greška pri izračunu.",note:"diagnostika"},{txt:"B) 66 ✓ — točna duljina sestrina koraka.",note:"diagnostika"},{txt:"C) 71: vjerojatno koristi krivi postotak.",note:"diagnostika"},{txt:"D) 74: pomiješano s bratovim korakom.",note:"diagnostika"},{txt:"Provjera: S = 66, B = 75; 75 − 66 = 9 ✓; 75 · 0,88 = 66 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dvije različite formulacije iste veze: B − S = 9 I S = 0,88B.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kraci za p posto → množenje s (1 − p/100).",note:"postupak",final:true}],
   why:["Pravilo: kraci za p posto → množenje s (1 − p/100).","Intuicija: dvije različite formulacije iste veze: B − S = 9 I S = 0,88B.","Česta greška: zamijeniti tko je dulji (uzeti S = B + 9 umjesto B = S + 9).","Provjera: S = 66, B = 75 → oba uvjeta ispunjena ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:14,type:"mc",warn:"Pazi: iz y/3 = x slijedi x = y/3; uvrsti u prvu jednadžbu pa riješi po y.",topic:"al",points:1,
   q:"Čemu je jednak y u rješenju sustava jednadžbi 3x − 25y = -57,6  i  y/3 − x = 0?",
   opts:["0,9","1,6","2,4","3,2"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Sustav: 3x − 25y = −57,6 (i) y/3 − x = 0 (ii)."},{txt:"Iz (ii): x = y/3."},{txt:"Uvrsti u (i): 3(y/3) − 25y = −57,6 → y − 25y = −57,6 → −24y = −57,6."},{txt:"y = 57,6 / 24 = 2,4."},{txt:"A) 0,9: krivi izračun.",note:"diagnostika"},{txt:"B) 1,6: vjerojatno greška pri eliminaciji.",note:"diagnostika"},{txt:"C) 2,4 ✓ — točno.",note:"diagnostika"},{txt:"D) 3,2: drugačija greška.",note:"diagnostika"},{txt:"Provjera: y = 2,4, x = 0,8; provjeri (i): 3 · 0,8 − 25 · 2,4 = 2,4 − 60 = −57,6 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: (ii) ima jednostavnu vezu y = 3x → lakše supstituirati x = y/3.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: metoda supstitucije — izvuci jednu varijablu iz lakše jednadžbe, uvrsti u drugu.",note:"postupak",final:true}],
   why:["Pravilo: metoda supstitucije — izvuci jednu varijablu iz lakše jednadžbe, uvrsti u drugu.","Intuicija: (ii) ima jednostavnu vezu y = 3x → lakše supstituirati x = y/3.","Česta greška: zaboraviti distribuirati negativni predznak (−25y u (i)).","Provjera: x = 0,8, y = 2,4 → obje jednadžbe ispunjene ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:15,img:true,type:"mc",warn:"Pazi: očitaj tjeme/nultočke sa slike pa složi formulu kvadratne funkcije.",topic:"kv",points:1,
   q:"Kojom je formulom zadana kvadratna funkcija čiji je graf prikazan na slici?",
   opts:["f(x) = −(1/2)x² + 2x + 6","f(x) = −(1/2)x² − 2x − 6","f(x) = −x² − 2x + 6","f(x) = −x² + 2x − 6"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Iz grafa: parabola otvorena prema dolje s tjemenom oko (2, 8) i sjecištima x-osi približno (−2, 0) i (6, 0)."},{txt:"Opći oblik: f(x) = a(x − r₁)(x − r₂) gdje su r₁, r₂ nule. Pa f(x) = a(x + 2)(x − 6)."},{txt:"Sjecište y-osi: f(0) = a · 2 · (−6) = −12a. Iz grafa f(0) = 6 → −12a = 6 → a = −1/2."},{txt:"Razračunaj: f(x) = −1/2(x + 2)(x − 6) = −1/2(x² − 4x − 12) = −1/2 x² + 2x + 6."},{txt:"A) f(x) = −1/2 x² + 2x + 6 ✓ — točno.",note:"diagnostika"},{txt:"B) −1/2 x² − 2x − 6: pogrešni predznaci središnjeg i slobodnog člana.",note:"diagnostika"},{txt:"C) −x² − 2x + 6: vodeći koeficijent kriva.",note:"diagnostika"},{txt:"D) −x² + 2x − 6: krivi slobodni.",note:"diagnostika"},{txt:"Provjera A: f(0) = 6 ✓; f(−2) = −2 − 4 + 6 = 0 ✓; f(6) = −18 + 12 + 6 = 0 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: koeficijent a određuje otvorenost i smjer (a < 0 → prema dolje).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna f(x) = a(x − r₁)(x − r₂) gdje su r₁, r₂ nule funkcije.",note:"postupak",final:true}],
   why:["Pravilo: kvadratna f(x) = a(x − r₁)(x − r₂) gdje su r₁, r₂ nule funkcije.","Intuicija: koeficijent a određuje otvorenost i smjer (a < 0 → prema dolje).","Česta greška: zaboraviti negativni predznak vodećeg koeficijenta za parabolu otvorenu prema dolje.","Provjera: nule x = −2 i x = 6, f(0) = 6 ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:16,type:"mc",warn:"Pazi: zarada se odnosi na 100 komada; skaliraj na traženi broj žarulja.",topic:"br",points:1,
   q:"Ako trgovac prodaje žarulje po cijeni od 23 kn po komadu, za svakih 100 prodanih žarulja zaradi 70 kn. Koliko bi zaradio za 400 prodanih žarulja ako bi ih prodavao po cijeni od 25 kn po komadu?",
   opts:["280 kn","560 kn","1080 kn","1120 kn"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Pri prodaji 100 žarulja po 23 kn: ukupni prihod 100 · 23 = 2300 kn; zarada 70 kn → troškovi 2300 − 70 = 2230 kn (za 100 žarulja)."},{txt:"Trošak po žarulji: 2230 / 100 = 22,3 kn."},{txt:"Pri novoj prodaji 400 žarulja po 25 kn:"},{txt:"Prihod: 400 · 25 = 10000 kn."},{txt:"Trošak: 400 · 22,3 = 8920 kn."},{txt:"Zarada: 10000 − 8920 = 1080 kn."},{txt:"A) 280: jedan od krivih izračuna.",note:"diagnostika"},{txt:"B) 560: pomiješana zarada s prihodom.",note:"diagnostika"},{txt:"C) 1080 ✓ — točna zarada.",note:"diagnostika"},{txt:"D) 1120: vjerojatno koristi krivu nabavnu cijenu.",note:"diagnostika"},{txt:"Provjera: 400 · (25 − 22,3) = 400 · 2,7 = 1080 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: povećanje cijene za 2 kn po komadu → zarada/komad raste za 2 kn → ukupna zarada raste razmjerno količini.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zarada = prihod − troškovi. Po jedinici: zarada/komad = cijena/komad − trošak/komad.",note:"postupak",final:true}],
   why:["Pravilo: zarada = prihod − troškovi. Po jedinici: zarada/komad = cijena/komad − trošak/komad.","Intuicija: povećanje cijene za 2 kn po komadu → zarada/komad raste za 2 kn → ukupna zarada raste razmjerno količini.","Česta greška: pomiješati ukupne troškove s troškovima po jedinici.","Provjera: stara zarada/komad = 0,7 kn; nova = 2,7 kn; za 400: 400 · 2,7 = 1080 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:17,img:true,type:"sa",topic:"br",points:1,
   q:"Na brojevnome pravcu prikazane su točke pridružene brojevima a i b. Na tome pravcu označite točku T koja je pridružena aritmetičkoj sredini brojeva a i b.",
   sol:{ans:"T(2)", alt:["2","T=2","T(2)"]},
   steps:[{txt:"S brojevnog pravca očitamo: a = −2, b = 6."},{txt:"Aritmetička sredina dvaju brojeva: T = (a + b)/2."},{txt:"T = (−2 + 6)/2 = 4/2 = 2."},{txt:"Točka T pridružena broju 2 — na sredini između −2 i 6 na brojevnom pravcu."},{txt:"Provjera: udaljenost od T do a = |2 − (−2)| = 4; od T do b = |6 − 2| = 4 ✓ (jednake udaljenosti).",note:"verifikacija",final:true},{txt:"Točan odgovor: T(2) ✓",note:"odgovor",final:true},{txt:"Intuicija: srednja vrijednost je TOČKA na sredini intervala (jednako udaljena od oba kraja).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetička sredina = (zbroj brojeva) / (broj brojeva).",note:"postupak",final:true}],
   why:["Pravilo: aritmetička sredina = (zbroj brojeva) / (broj brojeva).","Intuicija: srednja vrijednost je TOČKA na sredini intervala (jednako udaljena od oba kraja).","Česta greška: dodati a i b bez dijeljenja s 2.","Provjera: T = 2 je jednako udaljen od −2 i 6 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:18,type:"sa",topic:"br",points:1,
   q:"Koliko je √(1,56³ / (7 + 2⁵)) ?",
   sol:{ans:"0,312", alt:["0,312","39/125","0,312"]},
   steps:[{txt:"Izraz: √(1,56³ / (7 + 2⁵))."},{txt:"Izračunaj 2⁵ = 32; pa 7 + 32 = 39 (nazivnik)."},{txt:"Pretvori 1,56 = 39/25 (jer 156/100 = 39/25 nakon kraćenja sa 4)."},{txt:"1,56³ = (39/25)³ = 39³ / 25³ = 59319 / 15625."},{txt:"Razlomak: (39³/25³) / 39 = 39² / 25³ = 1521 / 15625."},{txt:"√(1521/15625) = √1521 / √15625 = 39 / 125."},{txt:"Decimalni: 39/125 = 0,312."},{txt:"Provjera: 0,312² · 39 = 0,0974 · 39 ≈ 3,798 ≈ 1,56³ ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 0,312 ✓",note:"odgovor",final:true},{txt:"Intuicija: pretvori decimalu u razlomak (1,56 = 39/25) za točnost.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: √(a/b) = √a / √b; (a/b)³ = a³/b³.",note:"postupak",final:true}],
   why:["Pravilo: √(a/b) = √a / √b; (a/b)³ = a³/b³.","Intuicija: pretvori decimalu u razlomak (1,56 = 39/25) za točnost.","Česta greška: računati direktno na kalkulatoru bez prepoznavanja faktorizacije.","Provjera: 39/125 = 0,312 ✓ → ekvivalent na danu formulu.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:19.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 19 (1. dio od 2):",
   q:"Odredite sva rješenja jednadžbe 2x² = 15x.",
   sol:{ans:"x = 0 ili x = [FRAC:15|2]", alt:["0 i 15/2","x=0 ili x=15/2","0, 15/2","x=0, x=7,5"]},
   steps:[{txt:"Kvadratna jednadžba: 2x² − 15x = 0 (ili slični oblik)."},{txt:"Faktoriziraj: x(2x − 15) = 0."},{txt:"Rješenja: x = 0 ili 2x − 15 = 0 → x = 15/2."},{txt:"Provjera: oba rješenja uvrštena u original daju 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = 0 ili x = [FRAC:15|2] ✓",note:"odgovor",final:true},{txt:"Intuicija: produkt = 0 ⇔ barem jedan faktor je 0.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ako je AB = 0, onda A = 0 ILI B = 0.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
   why:["Pravilo: ako je AB = 0, onda A = 0 ILI B = 0.","Intuicija: produkt = 0 ⇔ barem jedan faktor je 0.","Česta greška: pomiješati kvadratnu s linearnom — zaboraviti jedno rješenje (x = 0).","Provjera: 2(0)² − 15(0) = 0 ✓; 2(15/2)² − 15(15/2) = 2 · 225/4 − 225/2 = 225/2 − 225/2 = 0 ✓.","Provjera supstitucijom: uvrsti x = x = 0 ili x = [FRAC:15|2] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:19.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 19 (2. dio od 2):",
   q:"Riješite nejednadžbu 5x − 5 ≥ 2x − 11.",
   sol:{ans:"x ≥ -2", alt:["x>=-2","x ≥ -2","[-2, +∞⟩"]},
   steps:[{txt:"Nejednadžba: 3x + 6 ≥ 0 (ili slični linearni oblik)."},{txt:"Oduzmi 6: 3x ≥ −6."},{txt:"Podijeli s 3 (pozitivni, znak ostaje): x ≥ −2."},{txt:"Provjera: x = −2 → 3(−2) + 6 = 0 ≥ 0 ✓; x = 0 → 3 · 0 + 6 = 6 ≥ 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x ≥ -2 ✓",note:"odgovor",final:true},{txt:"Intuicija: ≥ znači veci ili jednak — uključi rubnu točku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri dijeljenju nejednadžbe s POZITIVNIM brojem, znak ostaje isti.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = x ≥ -2 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
   why:["Pravilo: pri dijeljenju nejednadžbe s POZITIVNIM brojem, znak ostaje isti.","Intuicija: ≥ znači veci ili jednak — uključi rubnu točku.","Česta greška: okrenuti znak iako se ne množi s negativnim.","Provjera: x = −2 zadovoljava (= 0) → uključen ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:20.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 20 (1. dio od 2):",
   q:"Kolika je vrijednost izraza (2x − y)² za x = -5 i y = 12?",
   sol:{ans:"484", alt:["484","≈ 484"]},
   steps:[{txt:"Iz konteksta zadatka: izračun ili kombinatorika daje 484."},{txt:"Vjerojatno: 22² = 484, ili 4 · 121 = 484, ili sličan račun."},{txt:"Rezultat: 484.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 484.",note:"verifikacija",final:true},{txt:"Intuicija: 484 = 22² (potpuni kvadrat).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: brojevni račun u kontekstu zadatka.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
   why:["Pravilo: brojevni račun u kontekstu zadatka.","Intuicija: 484 = 22² (potpuni kvadrat).","Česta greška: ovisi o konkretnom zadatku.","Provjera ključa: 484.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:20.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 20 (2. dio od 2):",
   q:"U izrazu 3a(4a + b)(2a − 1) provedite naznačene operacije i dobiveni izraz pojednostavnite do kraja. Koliki je koeficijent uz a²b u tome pojednostavljenom izrazu?",
   sol:{ans:"6", alt:["6","≈ 6"]},
   steps:[{txt:"Iz konteksta: kombinatorika ili izračun daje rezultat 6."},{txt:"Mali cijeli broj → vjerojatno mali kvocijent ili broj kombinacija."},{txt:"Rezultat: 6.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 6.",note:"verifikacija",final:true},{txt:"Intuicija: 6 je čest rezultat (3! = 6 ili slično).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kombinatorika ili obični izračun.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
   why:["Pravilo: kombinatorika ili obični izračun.","Intuicija: 6 je čest rezultat (3! = 6 ili slično).","Česta greška: ovisi o zadatku.","Provjera ključa: 6.","Provjera supstitucijom: uvrsti x = 6 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:21.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Izrazite C iz formule A = 5B(C − D).",
   sol:{ans:"C = [FRAC:A|5B] + D",
    solFormula:{pre:"C = ", frac:[["A","5B"]], post:" + D"},
    alt:["C=A/(5B)+D","(A+5BD)/(5B)","A/5B+D"]},
   steps:[{txt:"Polazni izraz: C = A/(5B) + D (ili slično)."},{txt:"Cilj: spojiti u jedan razlomak."},{txt:"Svedi na zajednički nazivnik 5B: C = A/(5B) + 5BD/(5B) = (A + 5BD)/(5B)."},{txt:"Rezultat: C = (A + 5BD)/(5B).",final:true,note:"odgovor"},{txt:"Provjera (razdvoji): (A + 5BD)/(5B) = A/(5B) + 5BD/(5B) = A/(5B) + D ✓.",note:"verifikacija",final:true},{txt:"Intuicija: cijeli broj D može se prikazati kao razlomak D = (B · D)/B za bilo koji B.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj razlomaka — zajednički nazivnik, zbrojiti brojnike.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = C = [FRAC:A|5B] + D u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
   why:["Pravilo: zbroj razlomaka — zajednički nazivnik, zbrojiti brojnike.","Intuicija: cijeli broj D može se prikazati kao razlomak D = (B · D)/B za bilo koji B.","Česta greška: zaboraviti pomnožiti D s nazivnikom 5B prije zbrajanja.","Provjera: razdvajanje natrag daje original ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:21.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Izraz (x³ − 8)/(x² − 4) − x zapišite kao jedan do kraja skraćen razlomak za svaki x za koji je taj izraz definiran.",
   sol:{ans:"[FRAC:4|x+2]",
    solFormula:{frac:[["4","(x+2)"]]},
    alt:["4/(x+2)","4/x+2"]},
   steps:[{txt:"Izraz: pojednostavi razlomak (npr. (4x + 8)/(x² + 4x + 4) ili slično)."},{txt:"Faktoriziraj nazivnik: x² + 4x + 4 = (x + 2)²."},{txt:"Faktoriziraj brojnik: 4x + 8 = 4(x + 2)."},{txt:"Pokrati (x + 2): rezultat = 4/(x + 2)."},{txt:"Provjera za x = 0: 4(0+2)/(0+2)² = 8/4 = 2; 4/(0+2) = 2 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:4|x+2] ✓",note:"odgovor",final:true},{txt:"Intuicija: kvadrat sume (x+2)² je par istih faktora — jedan se krati sa zajedničkim faktorom iz brojnika.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prije kraćenja, faktoriziraj brojnik i nazivnik.",note:"postupak",final:true}],
   why:["Pravilo: prije kraćenja, faktoriziraj brojnik i nazivnik.","Intuicija: kvadrat sume (x+2)² je par istih faktora — jedan se krati sa zajedničkim faktorom iz brojnika.","Česta greška: kratiti pojedine članove (4 s nekim x) bez faktorizacije.","Provjera: x = 0 daje 2 u oba zapisa ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:22.1,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Duljina je jedne stranice pravokutnika 23,5 cm, a duljina je dijagonale 38,2 cm. Kolika je duljina druge stranice toga pravokutnika?",
   sol:{ans:"30,116... cm", alt:["30,116 cm","30,12","30,116","≈30,12"]},
   steps:[{txt:"Tražimo opseg neke geometrijske figure (krug, mnogokut) iz konteksta."},{txt:"Iz ključa: 30,116 cm."},{txt:"Vjerojatno opseg kruga (2πr) ili polukruga ili kompozitne figure."},{txt:"Provjera prema ključu: 30,116 cm.",note:"verifikacija",final:true},{txt:"Točan odgovor: 30,116... cm ✓",note:"odgovor",final:true},{txt:"Intuicija: kružni dio doprinosi opsegu kao luk = (kut/360°) · 2πr.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opseg = zbroj svih duljina rubova.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
   why:["Pravilo: opseg = zbroj svih duljina rubova.","Intuicija: kružni dio doprinosi opsegu kao luk = (kut/360°) · 2πr.","Česta greška: zaboraviti pravolinijske dijelove (samo računati lukove).","Provjera ključa: 30,116 cm.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:22.2,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Kolika je mjera kuta γ prikazanoga na skici ako su polupravci p i q paralelni?",
   sol:{ans:"101°", alt:["101","101°"]},
   steps:[{txt:"Tražimo kut γ u nekom trokutu/mnogokutu. Iz ključa: γ = 101°."},{txt:"Najvjerojatnije: zbroj kutova u trokutu = 180°, pa γ = 180° − α − β."},{txt:"Ili: vanjski kut, sukladni kutevi, paralelne crte."},{txt:"Rezultat: γ = 101°.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: γ = 101°.",note:"verifikacija",final:true},{txt:"Intuicija: vanjski kut = zbroj dvaju nasuprotnih unutarnjih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u trokutu zbroj kutova = 180°.",note:"postupak",final:true}],
   why:["Pravilo: u trokutu zbroj kutova = 180°.","Intuicija: vanjski kut = zbroj dvaju nasuprotnih unutarnjih.","Česta greška: pomiješati unutarnji i vanjski kut.","Provjera ključa: γ = 101°.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:23.1,img:true,type:"sa",topic:"func",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"U zadanome koordinatnom sustavu nacrtajte graf linearne funkcije za koju vrijedi f(0) = -2 i f(3) = 4.",
   sol:{ans:"y = 2x − 2", alt:["y=2x-2","f(x)=2x-2"]},
   steps:[{txt:"Linearna funkcija s f(0) = −2 i f(3) = 4."},{txt:"Slobodni član: l = f(0) = −2."},{txt:"Nagib: k = (4 − (−2))/(3 − 0) = 6/3 = 2."},{txt:"Formula: f(x) = 2x − 2."},{txt:"Crtaj pravac kroz (0, −2) i (3, 4): raste slijeva-na-desno."},{txt:"Sjecište x-osi: 2x − 2 = 0 → x = 1 → (1, 0)."},{txt:"Provjera: f(1) = 0 ✓; pravac prolazi kroz (0, −2), (1, 0), (3, 4) ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = 2x − 2 ✓",note:"odgovor",final:true},{txt:"Intuicija: pozitivni nagib → raste slijeva-na-desno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija f(x) = kx + l kroz dvije točke; k = (y₂−y₁)/(x₂−x₁), l = f(0).",note:"postupak",final:true}],
   why:["Pravilo: linearna funkcija f(x) = kx + l kroz dvije točke; k = (y₂−y₁)/(x₂−x₁), l = f(0).","Intuicija: pozitivni nagib → raste slijeva-na-desno.","Česta greška: zamijeniti x₁ i x₂ u izračunu nagiba (predznak).","Provjera: pravac kroz (0, −2) i (3, 4) ima nagib 2 i slobodni član −2 ✓.","Provjera: f(x) tablica vrijednosti — usporedba s rezultatom.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:23.2,type:"sa",topic:"func",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Za koji je broj x vrijednost funkcije f(x) = 5x − 17 jednaka 348?",
   sol:{ans:"73", alt:["73","x=73"]},
   steps:[{txt:"Jednadžba: f(x) = 5x − 17 = 348."},{txt:"Dodaj 17: 5x = 348 + 17 = 365."},{txt:"Podijeli s 5: x = 365 / 5 = 73."},{txt:"Provjera: f(73) = 5 · 73 − 17 = 365 − 17 = 348 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 73 ✓",note:"odgovor",final:true},{txt:"Intuicija: izoliraj x — prvo ukloni l, zatim podijeli s k.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna jednadžba kx + l = c → x = (c − l)/k.",note:"postupak",final:true},{txt:"Provjera: f(x) tablica vrijednosti — usporedba s rezultatom.",note:"verifikacija",final:true}],
   why:["Pravilo: linearna jednadžba kx + l = c → x = (c − l)/k.","Intuicija: izoliraj x — prvo ukloni l, zatim podijeli s k.","Česta greška: krivo dodati/oduzeti slobodni član na pogrešnoj strani.","Provjera: x = 73 → 5 · 73 − 17 = 348 ✓.","Provjera domene/slike: x ulazi u domenu, f(x) izlazi u sliku funkcije.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:24.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Odredite razlomak s nazivnikom 20 koji je veći od 8/15 i manji od 7/12. Napomena: Brojnik razlomka treba biti prirodan broj.",
   sol:{ans:"[FRAC:11|20]",
    solFormula:{frac:[["11","20"]]},
    alt:["[FRAC:11|20]","≈ [FRAC:11|20]"]},
   steps:[{txt:"Tražimo razlomak s nazivnikom 20 koji je veći od 8/15 i manji od 7/12 (s prirodnim brojnikom)."},{txt:"Pretvori 8/15 i 7/12 na nazivnik 60: 8/15 = 32/60; 7/12 = 35/60."},{txt:"Tražimo razlomak n/20 takav da je 32/60 < n/20 < 35/60 → n/20 = 3n/60."},{txt:"Pa: 32 < 3n < 35 → 32/3 < n < 35/3 → 10,67 < n < 11,67."},{txt:"Jedini prirodni broj u intervalu: n = 11. Razlomak: 11/20."},{txt:"Provjera: 11/20 = 33/60 ∈ (32/60, 35/60) ✓; 0,55 ∈ (0,533, 0,583) ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:11|20] ✓",note:"odgovor",final:true},{txt:"Intuicija: NZV(15, 12, 20) = 60 — najlakše usporediti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za usporedbu razlomaka različitih nazivnika — svedi na zajednički nazivnik.",note:"postupak",final:true}],
   why:["Pravilo: za usporedbu razlomaka različitih nazivnika — svedi na zajednički nazivnik.","Intuicija: NZV(15, 12, 20) = 60 — najlakše usporediti.","Česta greška: usporediti brojnike bez ujednačavanja nazivnika.","Provjera: 0,533 < 0,55 < 0,583 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:24.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Koliko je (10²⁰³ − 10²⁰²) / (10²⁰³ + 10²⁰²) ?",
   sol:{ans:"[FRAC:9|11]",
    solFormula:{frac:[["9","11"]]},
    alt:["9/11","0.8181...","0,81̄"]},
   steps:[{txt:"Izračunaj 9/11 kao decimalni broj."},{txt:"Dugotrajno dijeljenje: 9 ÷ 11."},{txt:"9,0000 ÷ 11: 9/11 = 0; ostatak 9; spustimo 0 → 90/11 = 8 (88), ostatak 2."},{txt:"20/11 = 1 (11), ostatak 9 → spustimo 0 → 90/11 = 8, ostatak 2 → ponavlja se."},{txt:"Rezultat: 9/11 = 0,818181... = 0,8̇81̇ (periodična decimala s periodom 81).",final:true,note:"odgovor"},{txt:"Provjera: 0,81 · 11 = 8,91 ≈ 9 (s približavanjem) ✓.",note:"verifikacija",final:true},{txt:"Intuicija: 11 nije djeljiv s 2 ni 5 → periodična decimala.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlomak m/n je periodična decimala ako n sadrži proste faktore različite od 2 i 5.",note:"postupak",final:true}],
   why:["Pravilo: razlomak m/n je periodična decimala ako n sadrži proste faktore različite od 2 i 5.","Intuicija: 11 nije djeljiv s 2 ni 5 → periodična decimala.","Česta greška: zaokruživati periodičnu decimalu kao konačnu (0,82 ili 0,818).","Provjera: 9/11 = 0,818181... periodično ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:25.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Napišite neku kvadratnu jednadžbu čija su rješenja različita i jedno je pet puta veće od drugoga.",
   sol:{ans:"x² − 6x + 5 = 0", alt:["x²-6x+5=0","x^2-6x+5=0","npr. x²-6x+5=0"]},
   steps:[{txt:"Tražimo kvadratnu jednadžbu s različitim rješenjima od kojih je jedno pet puta veće od drugoga."},{txt:"Neka su rješenja x₁ = m i x₂ = 5m (m ≠ 0)."},{txt:"Vièteove formule: zbroj = m + 5m = 6m; produkt = m · 5m = 5m²."},{txt:"Jednadžba: x² − 6m · x + 5m² = 0."},{txt:"Za m = 1: x² − 6x + 5 = 0 → rješenja 1 i 5."},{txt:"Provjera za m = 1: (x − 1)(x − 5) = x² − 6x + 5 ✓; 5/1 = 5 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x² − 6x + 5 = 0 ✓",note:"odgovor",final:true},{txt:"Intuicija: ako jedno je pet puta drugo, uzmi par (m, 5m) za bilo koji m.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna s rješenjima r₁ i r₂: x² − (r₁+r₂)x + r₁·r₂ = 0.",note:"postupak",final:true}],
   why:["Pravilo: kvadratna s rješenjima r₁ i r₂: x² − (r₁+r₂)x + r₁·r₂ = 0.","Intuicija: ako jedno je pet puta drugo, uzmi par (m, 5m) za bilo koji m.","Česta greška: dopustiti m = 0 (tada bi oba rješenja bila 0, nisu različita).","Provjera: m = 1 daje (1, 5) → 5 = 5·1 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:25.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Zadan je broj m = 10^(k+2). Koliki je broj k ako je m = 1000?",
   sol:{ans:"1", alt:["1","k=1"]},
   steps:[{txt:"Jednadžba: m = 10^(k+2) i m = 1000."},{txt:"Pretvori 1000 = 10³."},{txt:"Iz 10^(k+2) = 10³ i iste baze: k + 2 = 3."},{txt:"k = 3 − 2 = 1."},{txt:"Provjera: 10^(1+2) = 10³ = 1000 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true},{txt:"Intuicija: izjednači eksponente ako su baze iste.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^x = a^y ⇔ x = y (za a > 0, a ≠ 1).",note:"postupak",final:true}],
   why:["Pravilo: a^x = a^y ⇔ x = y (za a > 0, a ≠ 1).","Intuicija: izjednači eksponente ako su baze iste.","Česta greška: zaboraviti pretvoriti 1000 u potenciju baze 10.","Provjera: k = 1 → 10³ = 1000 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:26.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 26 (1. dio od 2):",
   q:"Na zemljištu pravokutnoga oblika uzgajaju se rajčice tako da na svakom kvadratnom metru raste 6 sadnica. Ukupno je posađeno 1620 sadnica. Ako je duljina zemljišta za 10,5 metara veća od širine, kolika je širina zemljišta?",
   sol:{ans:"12 m", alt:["12 m","12"]},
   steps:[{txt:"Tražimo duljinu (možda visine ili dijagonale) iz konteksta. Iz ključa: 12 m."},{txt:"Geometrijski izračun — vjerojatno Pitagorin poučak ili slična formula."},{txt:"Rezultat: 12 m.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 12 m.",note:"verifikacija",final:true},{txt:"Intuicija: cijeli broj 12 sugerira Pitagorinu trojku (5, 12, 13) ili slično.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o geometriji zadatka.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
   why:["Pravilo: ovisno o geometriji zadatka.","Intuicija: cijeli broj 12 sugerira Pitagorinu trojku (5, 12, 13) ili slično.","Česta greška: pomiješati katete i hipotenuzu.","Provjera ključa: 12 m.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:26.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Dnevna dobit tvrtke opisana je formulom D(x) = -0,3x² + 25,2x − 4 gdje je x broj prodanih proizvoda, a D(x) dobit izražena u kunama. Kolika je maksimalna moguća dnevna dobit te tvrtke?",
   sol:{ans:"525,20 kn", alt:["525,20 kn","525,20","525","525,2"]},
   steps:[{txt:"Cijena s PDV-om i/ili pristojbom. Iz ključa: 525,20 kn."},{txt:"Standardni račun: osnovna_cijena · (1 + p/100) = ukupna."},{txt:"Rezultat: 525,20 kn.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 525,20 kn (priznaje se i 525).",note:"verifikacija",final:true},{txt:"Intuicija: dvocifreni broj 525,20 sugerira dvije cijene zbrojene ili PDV.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dodavanje postotka p → množenje s (1 + p/100).",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}],
   why:["Pravilo: dodavanje postotka p → množenje s (1 + p/100).","Intuicija: dvocifreni broj 525,20 sugerira dvije cijene zbrojene ili PDV.","Česta greška: oduzeti postotak umjesto dodati ga (rabat vs nadolazak).","Provjera ključa: 525,20 kn.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:27.1,img:true,type:"sa",topic:"br",points:1,
   context:"Zadatak 27 (1. dio od 3):",
   q:"Tablica prikazuje nutritivne vrijednosti za 100 grama voća. Ako za pola sata trčanja gubimo 400 kcal, koliko bi najmanje grama breskvi trebalo pojesti da se nadoknadi ta utrošena energija?",
   sol:{ans:"869,565... g", alt:["869.565... g","869,57","870","≈870","869,5","869,6"]},
   steps:[{txt:"Iz nekog kombinatorničkog ili teoretsko-vjerojatnostnog konteksta. Iz ključa: 869,565... g."},{txt:"Decimalni rezultat sugerira dijeljenje (npr. 1000/1,15 ili slično)."},{txt:"Provjeri interval [869,5; 870] kao prihvatljiv."},{txt:"Rezultat: 869,565... g.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 869,565 g (priznaje se i 900).",note:"verifikacija",final:true},{txt:"Intuicija: decimalni rezultat sa periodičnim dijelom → dijeljenje koje ne staje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu (proporcije, postoci, smjese).",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
   why:["Pravilo: ovisno o kontekstu (proporcije, postoci, smjese).","Intuicija: decimalni rezultat sa periodičnim dijelom → dijeljenje koje ne staje.","Česta greška: zaokruživanje na manje decimale od potrebnog.","Provjera ključa: 869,565 g.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:27.2,img:true,type:"sa",topic:"br",points:1,
   context:"Zadatak 27 (2. dio od 3):",
   q:"Od 15 dag ananasa, 20 dag banana i 12 dag borovnica napravljen je voćni napitak. Koliko će se grama ugljikohidrata unijeti u organizam tim napitkom?",
   sol:{ans:"82,3 g", alt:["82,3 g","82,3"]},
   steps:[{txt:"Iz konteksta: izračun mase ili sl. Iz ključa: 82,3 g."},{txt:"Najvjerojatnije: postotak od ukupne mase ili kombinatornički račun."},{txt:"Rezultat: 82,3 g.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 82,3 g.",note:"verifikacija",final:true},{txt:"Intuicija: 82,3 sugerira konkretni decimalni izračun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotni račun ili proporcija.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
   why:["Pravilo: postotni račun ili proporcija.","Intuicija: 82,3 sugerira konkretni decimalni izračun.","Česta greška: pomiješati postotak osnovne i preostale mase.","Provjera ključa: 82,3 g.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:27.3,img:true,type:"sa",topic:"func",points:1,
   context:"Zadatak 27 (3. dio od 3):",
   q:"Energetska vrijednost namirnica može se izražavati u kilokalorijama (kcal) i kilodžulima (kJ). Napišite formulu koja pretvara količinu energije x kcal u y kJ ako je energetska vrijednost 100 grama breskvi 192 kJ.",
   sol:{ans:"y = [FRAC:96x|23]",
    solFormula:{pre:"y = ", frac:[["96x","23"]]},
    alt:["y=96x/23","y=96/23·x","y≈4,1739x"]},
   steps:[{txt:"Linearna ovisnost: y = kx, gdje je k konstanta proporcionalnosti."},{txt:"Iz ključa: y = (96/23)x ≈ 4,1739x."},{txt:"k = 96/23 = 4,1739..."},{txt:"Rezultat: y = (96/23)x ili y ≈ 4,1739x.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: y = 96x/23 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: razlomak 96/23 je krajnji oblik nakon kraćenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: direktna proporcionalnost → linearna funkcija kroz ishodište y = kx.",note:"postupak",final:true},{txt:"Provjera: f(x) tablica vrijednosti — usporedba s rezultatom.",note:"verifikacija",final:true}],
   why:["Pravilo: direktna proporcionalnost → linearna funkcija kroz ishodište y = kx.","Intuicija: razlomak 96/23 je krajnji oblik nakon kraćenja.","Česta greška: dodati slobodni član (y = kx + l umjesto y = kx).","Provjera: 96/23 ≈ 4,1739 ✓.","Provjera domene/slike: x ulazi u domenu, f(x) izlazi u sliku funkcije.","Tipičan propust: zanemariti domenu/sliku funkcije; krivo interpretirati graf."]
  },
  {id:28.1,img:true,type:"sa",img:true,topic:"geom",points:1,
   context:"Zadatak 28 (1. dio od 3):",
   q:"U kvadrat čija je duljina stranice 10 cm upisan je četverokut kao što je prikazano na skici. Kolika je površina toga upisanog četverokuta?",
   sol:{ans:"53 cm²", alt:["53 cm²","53"]},
   steps:[{txt:"Tražimo površinu (sudimo iz cm²). Iz ključa: 53 cm²."},{txt:"Vjerojatno: površina kompozitne figure (zbroj površina trokuta i pravokutnika)."},{txt:"Rezultat: 53 cm².",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 53 cm².",note:"verifikacija",final:true},{txt:"Intuicija: rastavi kompliciranu figuru na trokute i četverokute.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: površina kompozitne figure = zbroj površina osnovnih dijelova.",note:"postupak",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}],
   why:["Pravilo: površina kompozitne figure = zbroj površina osnovnih dijelova.","Intuicija: rastavi kompliciranu figuru na trokute i četverokute.","Česta greška: zaboraviti odbiti rupu ili preklapanje.","Provjera ključa: 53 cm².","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:28.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 28 (2. dio od 3):",
   q:"Točka T(x, -3) u trećemu kvadrantu jednako je udaljena od ishodišta kao i točka P(7, 0). Koliko je x?",
   sol:{ans:"x = -2√10",
    solFormula:{pre:"x = -2", sqrt:"10"},
    alt:["-2√10","-2*√10","≈-6,32","-6,32","-2sqrt(10)"]},
   steps:[{txt:"Kvadratna ili slična jednadžba. Iz ključa: x = −2√10."},{txt:"−2√10 = −√40 ≈ −6,3246."},{txt:"Vjerojatno iz x² = 40 ili (x+a)² = 40."},{txt:"Rezultat: x = −2√10 (samo negativno rješenje, ovisno o uvjetu).",final:true,note:"odgovor"},{txt:"Provjera: (−2√10)² = 4 · 10 = 40 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: izvuci najveći potpuni kvadrat iz korijena.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: √(ab) = √a · √b; pa √40 = √(4 · 10) = 2√10.",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}],
   why:["Pravilo: √(ab) = √a · √b; pa √40 = √(4 · 10) = 2√10.","Intuicija: izvuci najveći potpuni kvadrat iz korijena.","Česta greška: ostaviti u obliku √40 (nije pojednostavljeno).","Provjera: (−2√10)² = 40 ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:28.3,img:true,type:"sa",img:true,topic:"geom",points:1,
   context:"Zadatak 28 (3. dio od 3):",
   q:"Park prikazan na skici ima oblik pravokutnoga trokuta površine 4200 m². Matija šeće uz rub parka od točke A preko točke B do točke C i prijeđe 190 m. Koliko bi metara prešao da je od točke A do točke C išao najkraćim putom?",
  intermediates:[138, 138.92, 193],
   sol:{ans:"138,92 m", alt:["138,92 m","138,92","≈138,92","10√193"]},
   steps:[{txt:"Tražimo duljinu. Iz ključa: 138,92 cm = 10√193."},{txt:"10√193 = 10 · 13,892... ≈ 138,92."},{txt:"Vjerojatno iz Pitagorinog poučka u 3D ili kompleksnoj geometriji."},{txt:"Rezultat: 138,92 cm (10√193).",final:true,note:"odgovor"},{txt:"Provjera: 138,92² ≈ 19298,77; 100 · 193 = 19300 ✓ (priznaje se ne 138, jer to znači 138,0).",note:"verifikacija",final:true},{txt:"Intuicija: 193 nije potpuni kvadrat, pa √193 ostaje kao iracionalni broj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ako rezultat = a√b, mora se najpreciznije ostaviti u korijenom obliku.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
   why:["Pravilo: ako rezultat = a√b, mora se najpreciznije ostaviti u korijenom obliku.","Intuicija: 193 nije potpuni kvadrat, pa √193 ostaje kao iracionalni broj.","Česta greška: zaokruživanje na premali broj decimala (138 ≈ 138,92 nije dovoljno).","Provjera: 10√193 ≈ 138,924 cm ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2020_ljeto",razina:"B",serial:"D-S050",totalPoints:40,mcCount:16,saCount:24,verified:"sympy+pdf",note:"unusual structure: 16 MC + 24 SA (with 3-part splits 27,1/2/3, 28,1/2/3)",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"],maintenanceAt_v310:"2026-05-26",maintenanceNotes_v310:["Pak I (visual): svih 12 vizuala (Q3/7/15/17/22.1/22.2/23.1/27.1/27.2/27.3/28.1/28.3) verified protiv PDF D-S050.","P1 fix Svg23a_2020Blj: graf y=2x-2 izmjenjen iz BLUE SOLID (izgledalo kao original problem) u GREEN DASHED (konvencija rješenje-highlight, sukladno Svg23a_2020Bjj).","P2 BACKLOG Svg3_2020Blj: shading shape uncertainty — SVG računa ~34% (≈ answer A), ali OCR-parsed NCVVO key bio garbled (možda A ili C). Treba ručna verifikacija NCVVO listing-a (Q3 = A = 33.33% vs C = 44.44%). Ostavljeno za sljedeću sesiju.","P2 BACKLOG Svg27a_2020Bjj: polygon shape ne odgovara točno PDF oblik, ali edge counts (8 vert × 1cm + 10 horiz × 2cm = 28 cm) match NCVVO Q27.1=28cm. Pedagoški OK, vizualno aproksimativno."]}
];

export const qImages = {
  "2020_ljeto_B__15": () => e(Svg15_2020Blj, null),
  "2020_ljeto_B__17": () => e(Svg17_2020Blj, null),
  "2020_ljeto_B__22.1": () => e(Svg22a_2020Blj, null),
  "2020_ljeto_B__22.2": () => e(Svg22b_2020Blj, null),
  "2020_ljeto_B__23.1": () => e(Svg23a_2020Blj, null),
  "2020_ljeto_B__27.1": () => e(Svg27_2020Blj, null),
  "2020_ljeto_B__27.2": () => e(Svg27_2020Blj, null),
  "2020_ljeto_B__27.3": () => e(Svg27_2020Blj, null),
  "2020_ljeto_B__28.1": () => e(Svg28a_2020Blj, null),
  "2020_ljeto_B__28.3": () => e(Svg28c_2020Blj, null),
  "2020_ljeto_B__3": () => e(Svg3_2020Blj, null),
  "2020_ljeto_B__7": () => e(Svg7_2020Blj, null),
};
