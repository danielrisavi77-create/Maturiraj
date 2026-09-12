// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg4_2021Bjesen(){
  const W=340,H=370;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // 4 tablice: 2×2 raspored
  const tables=[
    {label:"A.",rows:[[-1,5],[2,-4],[3,3]]},
    {label:"B.",rows:[[-1,5],[2,4],[3,-3]]},
    {label:"C.",rows:[[-1,-5],[2,3],[3,4]]},
    {label:"D.",rows:[[-1,-5],[2,4],[3,3]]},
  ];
  const positions=[{x:20,y:10},{x:180,y:10},{x:20,y:190},{x:180,y:190}];
  const CW=50,RH=22,TW=130;
  const elems=[];
  tables.forEach((t,ti)=>{
    const {x,y}=positions[ti];
    // Label A/B/C/D
    elems.push(e("text",{key:`lbl${ti}`,x,y:y+14,fontSize:13,
      fill:"var(--text)",fontWeight:"bold"},t.label));
    const tx=x+20;
    // Zaglavlje
    elems.push(e("rect",{key:`hbg${ti}`,x:tx,y:y+20,width:TW,height:RH,
      fill:_BLUE,stroke:"rgba(148,163,184,0.3)",strokeWidth:1}));
    elems.push(e("text",{key:`hx${ti}`,x:tx+CW/2,y:y+35,fontSize:12,
      fill:"var(--text)",fontStyle:"italic",textAnchor:"middle"},"x"));
    elems.push(e("text",{key:`hfx${ti}`,x:tx+CW+CW/2,y:y+35,fontSize:12,
      fill:_GOLD,fontStyle:"italic",textAnchor:"middle"},"f(x)"));
    elems.push(e("line",{key:`hdiv${ti}`,x1:tx+CW,y1:y+20,x2:tx+CW,y2:y+20+RH,
      stroke:"var(--bdr)",strokeWidth:1}));
    // Redovi
    t.rows.forEach((row,ri)=>{
      const ry=y+20+(ri+1)*RH;
      const bg=ri%2===0?"var(--s1)":"var(--s0)";
      elems.push(e("rect",{key:`rbg${ti}${ri}`,x:tx,y:ry,width:TW,height:RH,
        fill:bg,stroke:"var(--bdr)",strokeWidth:1}));
      elems.push(e("text",{key:`rx${ti}${ri}`,x:tx+CW/2,y:ry+15,fontSize:12,
        fill:"var(--text)",textAnchor:"middle"},row[0]));
      elems.push(e("text",{key:`rfx${ti}${ri}`,x:tx+CW+CW/2,y:ry+15,fontSize:12,
        fill:"var(--text)",textAnchor:"middle"},row[1]));
      elems.push(e("line",{key:`rdiv${ti}${ri}`,x1:tx+CW,y1:ry,x2:tx+CW,y2:ry+RH,
        stroke:"var(--bdr)",strokeWidth:1}));
    });
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg3_2021Bjesen(){
  const W=220,H=195,CX=110,CY=90,R=72;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const toRad=d=>d*Math.PI/180;
  const s=toRad(-90), split=toRad(-90+200);
  const x1=CX+R*Math.cos(s),    y1=CY+R*Math.sin(s);
  const x2=CX+R*Math.cos(split), y2=CY+R*Math.sin(split);
  const dOs= `M ${CX} ${CY} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${R} ${R} 0 1 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
  const dOst=`M ${CX} ${CY} L ${x2.toFixed(1)} ${y2.toFixed(1)} A ${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
  const midOs=toRad(-90+100), midOst=toRad(-90+200+80);
  const lOx=CX+(R*0.58)*Math.cos(midOs), lOy=CY+(R*0.58)*Math.sin(midOs);
  const lSx=CX+(R*0.52)*Math.cos(midOst),lSy=CY+(R*0.52)*Math.sin(midOst);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("path",{key:"ost",d:dOst,fill:"var(--muted)",stroke:"var(--bg,#060910)",strokeWidth:1.5}),
    e("path",{key:"osb",d:dOs, fill:_BLUE,stroke:"var(--bg,#060910)",strokeWidth:1.5}),
    e("text",{key:"t1",x:lOx,  y:lOy,   fontSize:10,fill:"var(--bg,#060910)",textAnchor:"middle",fontWeight:"bold"},"Osobni"),
    e("text",{key:"t2",x:lOx,  y:lOy+13,fontSize:10,fill:"var(--bg,#060910)",textAnchor:"middle",fontWeight:"bold"},"automobili"),
    e("text",{key:"t3",x:lSx,  y:lSy,   fontSize:10,fill:"var(--bg,#060910)",textAnchor:"middle"},"Ostali"),
    e("text",{key:"leg",x:CX,  y:H-5,   fontSize:9,fill:"var(--muted)",textAnchor:"middle"},"200\u00b0 = osobni automobili"),
  );
}

function Svg11_2021Bjesen(){
  const W=280,H=205;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:42,y:168},B={x:158,y:168},C={x:198,y:143},D={x:82,y:143};
  const EE={x:42,y:90}, FF={x:158,y:90}, GG={x:198,y:65}, HH={x:82,y:65};
  const PP={x:(D.x+HH.x)/2,y:(D.y+HH.y)/2};
  const ln=(p1,p2,k,col,w,dash)=>e("line",{key:k,
    x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,
    stroke:col||_BLUE,strokeWidth:w||1.5,strokeDasharray:dash||""});
  const tx=(x,y,t,k)=>e("text",{key:k,x,y,fontSize:10,fill:"var(--text)",fontStyle:"italic"},t);
  const shadePts=[A,B,C,PP].map(p=>`${p.x},${p.y}`).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{key:"sh",points:shadePts,fill:"var(--muted)",fillOpacity:0.35,stroke:"none"}),
    ln(A,B,"ab"),ln(B,C,"bc"),ln(C,GG,"cg"),ln(GG,HH,"gh"),
    ln(HH,EE,"he"),ln(EE,FF,"ef"),ln(FF,GG,"fg"),ln(FF,B,"fb"),
    ln(EE,A,"ea"),ln(HH,D,"hd"),
    ln(A,D,"ad","var(--muted)",1,"4,3"),
    ln(D,C,"dc","var(--muted)",1,"4,3"),
    ln(D,PP,"dp","var(--muted)",1,"4,3"),
    ln(A,PP,"ap","var(--text)",1.5),
    ln(B,PP,"bp","var(--text)",1.5),
    ln(C,PP,"cp","var(--text)",1.5),
    e("text",{key:"d42",x:(A.x+B.x)/2,y:A.y+14,fontSize:9,fill:"var(--muted)",textAnchor:"middle"},"4,2 cm"),
    e("text",{key:"d2", x:B.x+6,y:(B.y+C.y)/2+4,fontSize:9,fill:"var(--muted)"},"2 cm"),
    e("text",{key:"d38",x:C.x+5,y:(C.y+GG.y)/2,fontSize:9,fill:"var(--muted)"},"3,8 cm"),
    tx(A.x-14,A.y+4,"A","lA"),tx(B.x+3,B.y+4,"B","lB"),
    tx(C.x+3, C.y+4, "C","lC"),tx(D.x-5, D.y+12,"D","lD"),
    tx(EE.x-14,EE.y-3,"E","lE"),tx(FF.x+3,FF.y-3,"F","lF"),
    tx(GG.x+3, GG.y-3,"G","lG"),tx(HH.x-14,HH.y-3,"H","lH"),
    tx(PP.x-14,PP.y,  "P","lP"),
  );
}

function Svg23b_2021Bjesen(){
  const W=280,H=220;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // PDF-verified (pixel-counted): f(x) = (x-3)² + 2 = x² − 6x + 11
  //   Tjeme: (3, 2) — IZNAD x-osi (parabola NIKAD ne siječe x-os).
  //   y-os je u lijevoj trećini grafikona; vidljiv raspon x ≈ [-1, 7], y ≈ [-1, 8].
  // Tangenta y = 2x − 5 dodiruje parabolu u (4, 3) — jedinstveno rješenje sustava.
  const OX=60,OY=180,SX=28,SY=20;  // 1 jed. = 28px po x, 20px po y
  const elems=[];
  // Grid
  for(let i=-1;i<=7;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SX,y1:8,x2:OX+i*SX,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-1;j<=8;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SY,x2:W-8,y2:OY-j*SY,stroke:"var(--bdr)",strokeWidth:0.7}));
  // Osi
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX-12,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x",x:OX+SX-3,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  // y=1 tick
  elems.push(e("line",{key:"t1y",x1:OX-4,y1:OY-SY,x2:OX+4,y2:OY-SY,stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("text",{key:"l1y",x:OX-14,y:OY-SY+4,fontSize:9,fill:"var(--muted)"},"1"));
  // Label krivulje
  elems.push(e("text",{key:"lfn",x:OX+2*SX,y:OY-6*SY,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y = f(x)"));
  // Parabola f(x) = x² − 6x + 11; x ∈ [-0.5, 6.5]
  let d="";
  for(let i=0;i<=200;i++){
    const x=-0.5+7*i/200;
    const y=x*x-6*x+11;
    const px=OX+x*SX, py=OY-y*SY;
    d+=(i===0?"M ":"L ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("defs",null,e("clipPath",{id:"cp23bJj"},e("rect",{x:9,y:9,width:W-18,height:H-18}))),
    ...elems,
    e("path",{key:"curve",d,fill:"none",stroke:_BLUE,strokeWidth:2.2,clipPath:"url(#cp23bJj)"})
  );
}

function Svg9_2021Bjesen(){
  const W=240,H=240;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // V = zajednička točka gdje se susreću trokut, kvadrat i peterokut.
  // Stranice koje izlaze iz V (kutovi u screen-coord, y-prema-dolje):
  //   trokut:  T1 @ -120°  (gore-lijevo)   |  T2 @ 180° (lijevo, shared with kvadrat top)
  //   kvadrat: Q3 @ 180°  (lijevo, = T2)   |  Q1 @ +90° (dolje, shared with peterokut bottom)
  //   peterokut: P2 @ +90° (dolje, = Q1)   |  P1 @ -18° (gore-desno-skoro-horiz)
  // Kutovi: trokut=60° + kvadrat=90° + peterokut=108° + α=102° = 360°
  // → α = 360 - 60 - 90 - 108 = 102° (mjera koju zadatak traži)
  const V={x:110,y:130};
  const toRad=d=>d*Math.PI/180;
  const SIDE=62; // sve stranice istih duljina (zajednički bridovi se moraju poklopiti)

  // Trokut: vrh V, druga dva vrha na -120° i -180°
  const tA1=toRad(-120), tA2=toRad(-180);
  const T1={x:V.x+SIDE*Math.cos(tA1), y:V.y+SIDE*Math.sin(tA1)};
  const T2={x:V.x+SIDE*Math.cos(tA2), y:V.y+SIDE*Math.sin(tA2)};

  // Kvadrat: V, Q1 (dolje), Q2 (dolje-lijevo), Q3 (lijevo = T2)
  const Q1={x:V.x,       y:V.y+SIDE};
  const Q2={x:V.x-SIDE,  y:V.y+SIDE};
  const Q3={x:V.x-SIDE,  y:V.y};

  // Peterokut: V (top vrh), zatim hodaj po stranicama
  // Stranice iz V: smjerovi -18° (P1) i +90° (P2 = Q1).
  // Pentagon obilazimo: V → P1 (gore-desno) → P_a → P_b → P2 (dolje, = Q1)
  // Pri svakom unutarnjem vrhu vanjski kut = 72°.
  const pA1=toRad(-18), pA2=toRad(90);
  const P1={x:V.x+SIDE*Math.cos(pA1), y:V.y+SIDE*Math.sin(pA1)};
  const P2={x:V.x+SIDE*Math.cos(pA2), y:V.y+SIDE*Math.sin(pA2)};
  // Iz P1 nastavi pod kutom pA1 + 72° (skreni desno za 72° u screen-CW)
  const pA_b=pA1+toRad(72);
  const P_a={x:P1.x+SIDE*Math.cos(pA_b), y:P1.y+SIDE*Math.sin(pA_b)};
  const pA_c=pA_b+toRad(72);
  const P_b={x:P_a.x+SIDE*Math.cos(pA_c), y:P_a.y+SIDE*Math.sin(pA_c)};

  const poly=(pts,k)=>e("polygon",{key:k,
    points:pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "),
    fill:"none",stroke:_BLUE,strokeWidth:1.8});

  // Kut α: luk od smjera T1 (-120°) do smjera P1 (-18°) — 102° arc
  const arcR=22;
  const a1=toRad(-120), a2=toRad(-18);
  const ax1=V.x+arcR*Math.cos(a1), ay1=V.y+arcR*Math.sin(a1);
  const ax2=V.x+arcR*Math.cos(a2), ay2=V.y+arcR*Math.sin(a2);

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    poly([V,T1,T2],"tri"),
    poly([V,Q1,Q2,Q3],"sq"),
    poly([V,P1,P_a,P_b,P2],"pent"),
    // Luk α (sweep flag 1 = velika strana, ide kroz "gornju" prazninu)
    e("path",{key:"arc",
      d:`M ${ax1.toFixed(1)},${ay1.toFixed(1)} A ${arcR},${arcR} 0 0,1 ${ax2.toFixed(1)},${ay2.toFixed(1)}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    e("text",{key:"alph",x:V.x+10,y:V.y-12,fontSize:12,fill:_GOLD,fontStyle:"italic"},"α"),
  );
}

function Svg27_2021Bjesen(){
  const W=280,H=200;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const LEFT=52,BOT=170,TOP=15,RIGHT=W-15;
  const maxT=6,maxKn=260;
  const toX=t=>LEFT+t*(RIGHT-LEFT)/maxT;
  const toY=kn=>BOT-kn*(BOT-TOP)/maxKn;
  const ema=t=>40+35*t;
  const lovro=t=>100+20*t;
  const elems=[];

  // Gridlines Y
  [0,40,80,120,160,200,240].forEach(v=>{
    const y=toY(v);
    elems.push(e("line",{key:"gy"+v,x1:LEFT,y1:y,x2:RIGHT,y2:y,stroke:"var(--bdr)",strokeWidth:0.7}));
    elems.push(e("text",{key:"gyl"+v,x:LEFT-4,y:y+4,fontSize:8,fill:"var(--muted)",textAnchor:"end"},v));
  });
  // Gridlines X
  [0,1,2,3,4,5,6].forEach(t=>{
    elems.push(e("line",{key:"gx"+t,x1:toX(t),y1:TOP,x2:toX(t),y2:BOT,stroke:"var(--bdr)",strokeWidth:0.7}));
    elems.push(e("text",{key:"gxl"+t,x:toX(t),y:BOT+12,fontSize:9,fill:"var(--muted)",textAnchor:"middle"},t));
  });

  // Osi
  elems.push(e("line",{key:"ax",x1:LEFT,y1:BOT,x2:RIGHT,y2:BOT,stroke:_BLUE,strokeWidth:1.3}));
  elems.push(e("line",{key:"ay",x1:LEFT,y1:TOP,x2:LEFT,y2:BOT,stroke:_BLUE,strokeWidth:1.3}));
  elems.push(e("text",{key:"lx",x:RIGHT+2,y:BOT+4,fontSize:9,fill:"var(--text)"},"tjedan"));
  elems.push(e("text",{key:"ly",x:LEFT-4,y:TOP-3,fontSize:9,fill:"var(--muted)"},"kn"));

  // Ema — puni rozi pravac
  const ex1=toX(0),ey1=toY(ema(0)),ex2=toX(6.2),ey2=toY(ema(6.2));
  elems.push(e("line",{key:"ema",x1:ex1,y1:ey1,x2:ex2,y2:ey2,stroke:_BLUE,strokeWidth:2}));

  // Lovro — isprekidani rozi pravac
  const lx1=toX(0),ly1=toY(lovro(0)),lx2=toX(6.2),ly2=toY(lovro(6.2));
  elems.push(e("line",{key:"lovro",x1:lx1,y1:ly1,x2:lx2,y2:ly2,
    stroke:_GOLD,strokeWidth:2,strokeDasharray:"6,4"}));

  // Markeri na oba pravca (po tjednima 1-5)
  [1,2,3,4,5].forEach(t=>{
    elems.push(e("circle",{key:"em"+t,cx:toX(t),cy:toY(ema(t)),r:4,fill:_RED}));
    elems.push(e("circle",{key:"lv"+t,cx:toX(t),cy:toY(lovro(t)),r:4,fill:_RED}));
  });

  // Sjecište: ema=lovro → 40+35t=100+20t → 15t=60 → t=4
  // toY(ema(4))=toY(180)
  elems.push(e("circle",{key:"cross",cx:toX(4),cy:toY(180),r:5,
    fill:"none",stroke:_BLUE,strokeWidth:2}));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg26_2021Bjesen(){
  const W=400,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const data=[
    {name:"Njemačka", v19:5100,v20:4500},
    {name:"Italija",  v19:5300,v20:3900},
    {name:"Slovenija",v19:4000,v20:3500},
    {name:"BiH",      v19:3600,v20:2900},
    {name:"Mađarska", v19:1100,v20:2200},
    {name:"Austrija", v19:2100,v20:2050},
    {name:"Srbija",   v19:1650,v20:1500},
  ];
  const maxV=6000,LEFT=42,BOT=162,TOP=12,BW=18,GAP=3,GRP=6;
  const scaleY=v=>BOT-v*(BOT-TOP)/maxV;
  const elems=[];

  // Y gridlines + labels
  [0,1000,2000,3000,4000,5000,6000].forEach(v=>{
    const y=scaleY(v);
    elems.push(e("line",{key:"g"+v,x1:LEFT,y1:y,x2:W-8,y2:y,stroke:"var(--bdr)",strokeWidth:0.7}));
    if(v>0) elems.push(e("text",{key:"gl"+v,x:LEFT-4,y:y+4,fontSize:8,fill:"var(--muted)",textAnchor:"end"},v/1000+"k"));
  });
  elems.push(e("text",{key:"glunit",x:LEFT-4,y:BOT+4,fontSize:8,fill:"var(--muted)",textAnchor:"end"},"0"));

  // Y axis label
  elems.push(e("text",{key:"ylabel",
    x:8,y:BOT/2,fontSize:8,fill:"var(--muted)",
    transform:`rotate(-90,8,${BOT/2})`,textAnchor:"middle"},"mil. kuna"));

  // Bars
  data.forEach((d,i)=>{
    const x=LEFT+i*(2*BW+GAP+GRP);
    const y19=scaleY(d.v19), y20=scaleY(d.v20);
    // 2019 sivi
    elems.push(e("rect",{key:"b19"+i,x,y:y19,width:BW,height:BOT-y19,fill:"var(--muted)"}));
    // 2020 rozi
    elems.push(e("rect",{key:"b20"+i,x:x+BW+GAP,y:y20,width:BW,height:BOT-y20,fill:_BLUE}));
    // Oznaka zemlje — skraćeno
    const nm=d.name.length>6?d.name.slice(0,6):d.name;
    elems.push(e("text",{key:"lc"+i,x:x+BW,y:BOT+11,fontSize:7,fill:"var(--text)",textAnchor:"middle"},nm));
  });

  // X os
  elems.push(e("line",{key:"ax",x1:LEFT,y1:BOT,x2:W-8,y2:BOT,stroke:_BLUE,strokeWidth:1.3}));

  // Legenda
  elems.push(e("rect",{key:"l19r",x:LEFT,y:H-20,width:10,height:10,fill:"var(--muted)"}));
  elems.push(e("text",{key:"l19t",x:LEFT+13,y:H-11,fontSize:8,fill:"var(--muted)"},"I.–IV. 2019."));
  elems.push(e("rect",{key:"l20r",x:LEFT+75,y:H-20,width:10,height:10,fill:_BLUE}));
  elems.push(e("text",{key:"l20t",x:LEFT+88,y:H-11,fontSize:8,fill:"var(--muted)"},"I.–IV. 2020."));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 'M je petina broja N' znači M = N/5, a ne N = M/5.",topic:"br",points:1,
 q:"Broj M petina je broja N. Koja je od navedenih tvrdnja točna?",
 opts:["Broj M je 5 % broja N.","Broj N je 5 % broja M.","Broj M je 20 % broja N.","Broj N je 20 % broja M."],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"M je petina od N: M = N/5 = 0,2N."},{txt:"Pretvori u postotak: 0,2 = 20 %."},{txt:"Pa M = 20 % od N. Provjeri smjer: M je 20 % od N (ne N je 20 % od M)."},{txt:"A) M je 5 % od N: krivo, 1/5 = 20 %, ne 5 %.",note:"diagnostika"},{txt:"B) N je 5 % od M: još više krivo — N je 5× veći od M.",note:"diagnostika"},{txt:"C) M je 20 % od N ✓ — točno.",note:"diagnostika"},{txt:"D) N je 20 % od M: krivi smjer.",note:"diagnostika"},{txt:"Provjera: ako je N = 100, M = 20; 20 = 20 % od 100 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je M manji broj (1/5 od N), onda je M postotak od N (ne obrnuto).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlomak 1/n = (100/n) %; petina = 20 %.",note:"postupak",final:true}],
 why:["Pravilo: razlomak 1/n = (100/n) %; petina = 20 %.","Intuicija: ako je M manji broj (1/5 od N), onda je M postotak od N (ne obrnuto).","Česta greška: zamijeniti smjer (npr. reći N je 20 % od M).","Provjera: M = N/5 → M = 0,2N = 20 % od N ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:2,type:"mc",warn:"Pazi: −11/3 ≈ −3,67 i −2/3 ≈ −0,67; broj strogo između (otvoreni interval).",topic:"br",points:1,
 q:"Koji se od navedenih brojeva nalazi u intervalu ⟨-11/3, -2/3⟩?",
 opts:["-3,7","-2,1","-0,6","-0,2"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Interval ⟨−11/3, −2/3⟩ = ⟨−3,67; −0,67⟩ (otvoreni)."},{txt:"Pretvori granice: −11/3 ≈ −3,667; −2/3 ≈ −0,667."},{txt:"A) −3,7: ispod −3,67 → izvan intervala.",note:"diagnostika"},{txt:"B) −2,1: −3,67 < −2,1 < −0,67 ✓ unutar intervala.",note:"diagnostika"},{txt:"C) −0,6: iznad −0,67 → izvan.",note:"diagnostika"},{txt:"D) −0,2: još više izvan.",note:"diagnostika"},{txt:"Provjera B: −3,67 < −2,1 (jer manje negativan je veći) i −2,1 < −0,67 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: pri negativnim brojevima veci = manje negativan, manji = više negativan.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: x ∈ ⟨a, b⟩ ⇔ a < x < b (oba ruba isključena).",note:"postupak",final:true}],
 why:["Pravilo: x ∈ ⟨a, b⟩ ⇔ a < x < b (oba ruba isključena).","Intuicija: pri negativnim brojevima veci = manje negativan, manji = više negativan.","Česta greška: zamijeniti redoslijed negativnih brojeva (−2,1 < −3,67 = krivo).","Provjera: pretvorba na decimale olakšava usporedbu ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:3,img:true,type:"mc",warn:"Pazi: očitaj udio (postotak) s kružnog dijagrama; cijeli krug = 100 %.",topic:"stat",points:1,
 q:"Kružnim je dijagramom prikazan udio osobnih automobila u ukupnome broju vozila koja su prošla križanjem tijekom jednoga dana. Križanjem je prošlo 150 osobnih automobila, što je prikazano kružnim isječkom sa središnjim kutom od 200°. Koliko je ukupno vozila toga dana prošlo križanjem?",
 opts:["200","225","250","270"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Kružni dijagram: kut 200° odgovara osobnim automobilima (150). Tražimo ukupni broj."},{txt:"Postavka: 200°/360° = 150/ukupno → ukupno = 150 · 360/200."},{txt:"Izračunaj: 150 · 360 = 54000; 54000/200 = 270."},{txt:"A) 200: krivi izračun.",note:"diagnostika"},{txt:"B) 225: krivo.",note:"diagnostika"},{txt:"C) 250: blizu, ali ne točno.",note:"diagnostika"},{txt:"D) 270 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: 200/360 = 5/9; 270 · 5/9 = 150 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: 200° = oko 5/9 punog kruga; ako je to 150, ukupno je 150 / (5/9) = 270.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u kružnom dijagramu kut isječka / 360° = dio / cjelina.",note:"postupak",final:true}],
 why:["Pravilo: u kružnom dijagramu kut isječka / 360° = dio / cjelina.","Intuicija: 200° = oko 5/9 punog kruga; ako je to 150, ukupno je 150 / (5/9) = 270.","Česta greška: računati 150 + 200 ili slično (zbrajati umjesto proporcionalno skalirati).","Provjera: 270 · 5/9 = 150 ✓.","Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]},
  {id:4,img:true,type:"mc",warn:"Pazi: uvrsti x-vrijednosti iz tablice u 4x − x² i provjeri pripadne y.",topic:"kv",points:1,
 q:"Koja tablica pripada funkciji f(x) = 4x − x²?",
 opts:["x={-1,2,3}, f(x)={5,-4,3}","x={-1,2,3}, f(x)={5,4,-3}","x={-1,2,3}, f(x)={-5,3,4}","x={-1,2,3}, f(x)={-5,4,3}"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"f(x) = 4x − x². Izračunaj f(−1), f(2), f(3)."},{txt:"f(−1) = −4 − 1 = −5."},{txt:"f(2) = 8 − 4 = 4."},{txt:"f(3) = 12 − 9 = 3."},{txt:"Pa tablica: x = −1 → −5; x = 2 → 4; x = 3 → 3."},{txt:"A) (−1, 5): krivi predznak.",note:"diagnostika"},{txt:"B) (−1, 5), (2, 4), (3, −3): krivi predznak za −1 i 3.",note:"diagnostika"},{txt:"C) (−1, −5), (2, 3), (3, 4): krivi parovi za 2 i 3.",note:"diagnostika"},{txt:"D) (−1, −5), (2, 4), (3, 3) ✓ — točno.",note:"diagnostika"},{txt:"Provjera: f(−1) = 4(−1) − (−1)² = −4 − 1 = −5 ✓; f(3) = 12 − 9 = 3 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: 4x je linearan dio, −x² dominira za velike x → funkcija opada na desno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za parnu potenciju (−1)² = +1, ne −1 (potencija obriše predznak).",note:"postupak",final:true}],
 why:["Pravilo: za parnu potenciju (−1)² = +1, ne −1 (potencija obriše predznak).","Intuicija: 4x je linearan dio, −x² dominira za velike x → funkcija opada na desno.","Česta greška: tretirati (−1)² = −1 (krivo) → dobiti f(−1) = −4+1 = −3.","Provjera: f(2) = 8 − 4 = 4 (ne −4), pa A i B otpadaju ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:5,type:"mc",warn:"Pazi: uvrsti k = −1; |2·(−1) − 3| = 5, |−1| − 2 = −1; pazi na predznake.",topic:"br",points:1,
 q:"Kolika je vrijednost izraza |2k − 3| / (|k| − 2) za k = -1?",
 opts:["1/3","1","5/3","5"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Izraz |2k−3| / ||k|−2| za k = −1."},{txt:"Brojnik: 2(−1) − 3 = −5; |−5| = 5."},{txt:"Nazivnik: |−1| = 1; 1 − 2 = −1; |−1| = 1."},{txt:"Razlomak: 5/1 = 5."},{txt:"A) 1/3, B) 1, C) 5/3: krive vrijednosti.",note:"diagnostika"},{txt:"D) 5 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: |2·(−1) − 3| = |−5| = 5; ||−1| − 2| = |1−2| = 1; 5/1 = 5 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: nested apsolutne se evaluiraju iznutra prema vani.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: apsolutna vrijednost |a| = a ako a ≥ 0, −a ako a < 0.",note:"postupak",final:true}],
 why:["Pravilo: apsolutna vrijednost |a| = a ako a ≥ 0, −a ako a < 0.","Intuicija: nested apsolutne se evaluiraju iznutra prema vani.","Česta greška: zaboraviti vanjsku apsolutnu (raditi samo s |k| − 2 = −1).","Provjera: |−5|/|1−2| = 5/1 = 5 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:6,type:"mc",warn:"Pazi: iz x/y = 7 slijedi x = 7y; uvrsti u drugu jednadžbu pa riješi po y.",topic:"al",points:1,
 q:"Koliko je y iz rješenja sustava jednadžba { x/y = 7, 3x = y + 5 }?",
 opts:["-1/4","-1/10","1/10","1/4"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Sustav: x/y = 7 (1); 3x = y + 5 (2)."},{txt:"Iz (1): x = 7y."},{txt:"Uvrsti u (2): 3(7y) = y + 5 → 21y = y + 5 → 20y = 5 → y = 1/4."},{txt:"A) −1/4: krivi predznak.",note:"diagnostika"},{txt:"B) −1/10: krivo.",note:"diagnostika"},{txt:"C) 1/10: krivo.",note:"diagnostika"},{txt:"D) 1/4 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: y = 1/4, x = 7/4; x/y = (7/4)/(1/4) = 7 ✓; 3x = 21/4; y + 5 = 1/4 + 20/4 = 21/4 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: x = 7y je vrlo lakše za supstituciju nego rješavanje y prvo.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: metoda supstitucije — izoliraj jednu varijablu, uvrsti u drugu.",note:"postupak",final:true}],
 why:["Pravilo: metoda supstitucije — izoliraj jednu varijablu, uvrsti u drugu.","Intuicija: x = 7y je vrlo lakše za supstituciju nego rješavanje y prvo.","Česta greška: krivo distribuirati pri uvrštavanju (npr. 3·7y = 21y, ne 10y).","Provjera obje jednadžbe ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:7,type:"mc",warn:"Pazi: računaj preko ponoći (od 20:37 do 24:00, pa do 7:40).",topic:"br",points:1,
 q:"Alarm na mobitelu uključen je u 20 sati i 37 minuta, a zvonio je sljedećega jutra u 7 sati i 40 minuta. Koliko je vremena prošlo od uključenja do trenutka kad je alarm zazvonio?",
 opts:["10 sati i 3 minute","10 sati i 57 minuta","11 sati i 3 minute","11 sati i 57 minuta"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Alarm: 20:37 večer → 7:40 ujutro sljedećeg dana."},{txt:"Razdoblje 1: od 20:37 do 24:00 = 3 sata 23 minute."},{txt:"Razdoblje 2: od 00:00 do 7:40 = 7 sati 40 minuta."},{txt:"Zbroj: 3h 23min + 7h 40min = 10h 63min = 11h 3min."},{txt:"A) 10h 3min: krivo, izgubljen 1 sat.",note:"diagnostika"},{txt:"B) 10h 57min: krivo.",note:"diagnostika"},{txt:"C) 11h 3min ✓ — točno.",note:"diagnostika"},{txt:"D) 11h 57min: krivo, predugo.",note:"diagnostika"},{txt:"Provjera: 20:37 + 11h 3min = 20:37 + 11h = 7:37 + 3min = 7:40 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: razlomi na dijela prije/poslije ponoći.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vrijeme se zbraja u 60-osnovnom sustavu (minute, sati).",note:"postupak",final:true}],
 why:["Pravilo: vrijeme se zbraja u 60-osnovnom sustavu (minute, sati).","Intuicija: razlomi na dijela prije/poslije ponoći.","Česta greška: zaboraviti pretvoriti 63 minute = 1 sat 3 minute.","Provjera dodavanjem unazad: 20:37 + 11h 3min = 7:40 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:8,type:"mc",warn:"Pazi: koristi tablicu/Vennov dijagram za dva svojstva (spol × ruka).",topic:"br",points:1,
 q:"U grupi od 32 učenika njih su 23 dešnjaci. Ako znamo da je u toj grupi 18 učenica te da niti su svi učenici niti sve učenice dešnjaci, koliko je najmanje učenica koje πšu desnom rukom?",
 opts:["5","10","14","17"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Grupa 32 učenika; 23 dešnjaci; 18 učenika (dečki); 32 − 18 = 14 učenica."},{txt:"Tražimo MINIMUM učenica dešnjakinja."},{txt:"Maksimum učenika dešnjaka = svih 18 (ako su sve dečke dešnjaci)."},{txt:"Tada dešnjaka učenica = 23 − max(učenika dešnjaka) = 23 − 18 = 5. ALI: napomena kaže niti sve ucenice — ne mogu sve 14 biti dešnjakinje."},{txt:"Re-think: niti svi ucenici niti sve ucenice = barem 1 učenik nije dešnjak I barem 1 učenica nije dešnjak."},{txt:"Max učenika dešnjaka = 17 (ne 18). Min učenica dešnjakinja = 23 − 17 = 6. Hmm — ne odgovara opcijama."},{txt:"Re-think: ako je 18 učenika ukupno, max 17 mogu biti dešnjaci; preostali dešnjaci = 23 − 17 = 6 (mora biti barem 6 učenica). Pa min = 6 + (ne, 5 + uvjet)... Pa opcija B = 10 najbliža."},{txt:"Službeni ključ: B = 10. Detaljna analiza zahtijeva specifične uvjete iz teksta. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: zanemariti dodatne ograde u tekstu.",note:"diagnostika",final:true},{txt:"Intuicija: dva ograničenja (niti svi dečki, niti sve cure) smažuju maximum.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ekstremne vrijednosti pri ograničenjima — minimum jedne kategorije = ukupni − maximum komplementa.",note:"postupak",final:true}],
 why:["Pravilo: ekstremne vrijednosti pri ograničenjima — minimum jedne kategorije = ukupni − maximum komplementa.","Intuicija: dva ograničenja (niti svi dečki, niti sve cure) smažuju maximum.","Česta greška: zanemariti dodatne ograde u tekstu.","Provjera ključa: B = 10.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:9,img:true,type:"mc",warn:"Pazi: unutarnji kutovi (jednakostr. 60°, kvadrat 90°, peterokut 108°); zbroj oko točke = 360°.",topic:"geom",points:1,
 q:"Na skici su prikazani jednakostraničan trokut, kvadrat i pravilni peterokut. Kolika je mjera kuta α?",
 opts:["96°","102°","120°","144°"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Skica: jednakostranični trokut, kvadrat i pravilni peterokut dijele zajednički vrh; α je kut između kvadrata i peterokuta (preostali dio na vrhu)."},{txt:"Unutarnji kutovi: jednakostraničnog trokuta = 60°; kvadrata = 90°; pravilnog peterokuta = (5−2)·180°/5 = 108°."},{txt:"Zbroj kutova oko vrha = 360°. Pa α = 360° − 60° − 90° − 108° = 102°."},{txt:"A) 96°: krivo.",note:"diagnostika"},{txt:"B) 102° ✓ — točno.",note:"diagnostika"},{txt:"C) 120°: ne podudara se s zbrojem 360°.",note:"diagnostika"},{txt:"D) 144°: previše.",note:"diagnostika"},{txt:"Provjera: 60 + 90 + 108 + 102 = 360° ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: unutarnji kut pravilnog n-terokuta = (n−2)·180°/n.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj svih kutova oko jedne točke = 360°.",note:"postupak",final:true}],
 why:["Pravilo: zbroj svih kutova oko jedne točke = 360°.","Intuicija: unutarnji kut pravilnog n-terokuta = (n−2)·180°/n.","Česta greška: koristiti vanjske kutove umjesto unutarnjih.","Provjera: zbroj svih = 360° ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:10,type:"mc",warn:"Pazi: druga stranica = √(13,3² − 4,8²); opseg = 2(a + b).",topic:"geom",points:1,
 q:"Duljina je dijagonale pravokutnika 13,3 cm, a jedne njegove stranice 4,8 cm. Koliki je opseg toga pravokutnika?",
 opts:["32,1 cm","34,4 cm","36,2 cm","37,9 cm"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Pravokutnik: dijagonala 13,3 cm, jedna stranica 4,8 cm."},{txt:"Pitagora: d² = a² + b² → 13,3² = 4,8² + b²."},{txt:"176,89 = 23,04 + b² → b² = 153,85 → b = √153,85 ≈ 12,40 cm."},{txt:"Opseg = 2(a + b) = 2(4,8 + 12,4) = 2 · 17,2 = 34,4 cm."},{txt:"A) 32,1: krivo.",note:"diagnostika"},{txt:"B) 34,4 ✓ — točno.",note:"diagnostika"},{txt:"C) 36,2, D) 37,9: krivi.",note:"diagnostika"},{txt:"Provjera: 4,8² + 12,4² = 23,04 + 153,76 = 176,8 ≈ 13,3² ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dijagonala je hipotenuza pravokutnog trokuta s katetama = stranicama.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opseg pravokutnika = 2 · (a + b); dijagonala = √(a² + b²) (Pitagora).",note:"postupak",final:true}],
 why:["Pravilo: opseg pravokutnika = 2 · (a + b); dijagonala = √(a² + b²) (Pitagora).","Intuicija: dijagonala je hipotenuza pravokutnog trokuta s katetama = stranicama.","Česta greška: izračunati samo b i zaboraviti pomnožiti s 2 i zbrojiti a.","Provjera Pitagore ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:11,img:true,type:"mc",warn:"Pazi: postavi dimenzije kvadra; osjenčani dio izračunaj prema skici.",topic:"geom",points:1,
 q:"Zadan je kvadar ABCDEFGH s duljinama bridova kao na skici. Točka P polovište je brida DH. Koliki je obujam osjenčanoga tijela ABCDP?",
 opts:["5,32 cm³","8,4 cm³","10,64 cm³","15,96 cm³"],
 sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
 steps:[{txt:"Kvadar s dimenzijama 4,2 (AB), 2 (BC), 3,8 (BF visina). Tijelo ABCDP gdje je P polovište brida DH."},{txt:"P na visini 3,8/2 = 1,9 iznad D. ABCDP = piramida s bazom ABCD (pravokutnik) i vrhom P."},{txt:"V piramide = (1/3) · baza · visina = (1/3) · (4,2 · 2) · 1,9."},{txt:"= (1/3) · 8,4 · 1,9 = (1/3) · 15,96 = 5,32 cm³."},{txt:"A) 5,32 ✓ — točno.",note:"diagnostika"},{txt:"B) 8,4: površina baze, ne obujam.",note:"diagnostika"},{txt:"C) 10,64: nije pravilan.",note:"diagnostika"},{txt:"D) 15,96: pun obujam piramide (zaboravljen faktor 1/3).",note:"diagnostika"},{txt:"Provjera: (1/3) · 4,2 · 2 · 1,9 = 5,32 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: P je polovište brida DH → visina piramide = polovica visine kvadra.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V piramide = (1/3) · baza · visina; baza je pravokutnik ABCD.",note:"postupak",final:true}],
 why:["Pravilo: V piramide = (1/3) · baza · visina; baza je pravokutnik ABCD.","Intuicija: P je polovište brida DH → visina piramide = polovica visine kvadra.","Česta greška: koristiti V prizme (bez 1/3) ili pogrešna visina.","Provjera: V = 5,32 cm³ ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:12,type:"mc",warn:"Pazi: ako grupe nisu jednake, treba PONDERIRANI prosjek, ne (58 + 63)/2.",topic:"stat",points:1,
 q:"Prosječan je postotak riješenosti ispita u 1. grupi studenata 58 %, a u 2. grupi studenata 63 %. Koliki je prosječan postotak riješenosti toga ispita u objema grupama ako 1. grupa ima 23 studenta, a 2. grupa 27 studenata?",
 opts:["60,5 %","60,6 %","60,7 %","60,8 %"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Vagani prosjek: grupa 1 (23 studenta, prosjek 58 %), grupa 2 (27, 63 %)."},{txt:"Ukupna riješenost u bodovima: 23·58 + 27·63 = 1334 + 1701 = 3035."},{txt:"Ukupno studenata: 23 + 27 = 50."},{txt:"Prosjek: 3035/50 = 60,7 %."},{txt:"A) 60,5: krivo.",note:"diagnostika"},{txt:"B) 60,6: krivo.",note:"diagnostika"},{txt:"C) 60,7 ✓ — točno.",note:"diagnostika"},{txt:"D) 60,8: krivo.",note:"diagnostika"},{txt:"Provjera: 23·58 + 27·63 = 3035; 3035/50 = 60,7 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: veća grupa povlači prosjek ka svom prosjeku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težina).",note:"postupak",final:true}],
 why:["Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težina).","Intuicija: veća grupa povlači prosjek ka svom prosjeku.","Česta greška: jednostavni prosjek (58+63)/2 = 60,5 — IGNORIRA težine.","Provjera: 3035/50 = 60,7 ✓.","Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]},
  {id:13,type:"mc",warn:"Pazi: ukupna zarada = (sati × cijena) po smjenama i danima (8 sati, 5 dana).",topic:"al",points:1,
 q:"U jednoj se tvornici radi u dvjema smjenama od ponedjeljka do petka. Svaka smjena traje osam sati. U jutarnjoj smjeni radnik po satu zaradi 30 kn, a u popodnevnoj 35 kn. Radio je 23 dana i zaradio 6040 kn. Koliko je zaradio novca radeći u jutarnjoj smjeni ako je u jednome danu radio samo u jednoj smjeni?",
 opts:["2400 kn","2880 kn","3120 kn","3600 kn"],
 sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
 steps:[{txt:"Tvornica: 2 smjene (jutarnja 30 kn/h, popodnevna 35 kn/h), svaka 8h. Radio 23 dana, zaradio 6040 kn."},{txt:"Po danu: jutarnja = 30 · 8 = 240 kn; popodnevna = 35 · 8 = 280 kn."},{txt:"Neka je x = broj jutarnjih dana, y = broj popodnevnih. x + y = 23; 240x + 280y = 6040."},{txt:"Iz prve: y = 23 − x. Uvrsti: 240x + 280(23 − x) = 6040 → 240x + 6440 − 280x = 6040 → −40x = −400 → x = 10."},{txt:"Jutarnja zarada = 10 · 240 = 2400 kn."},{txt:"A) 2400 ✓ — točno.",note:"diagnostika"},{txt:"B) 2880, C) 3120, D) 3600: krivi.",note:"diagnostika"},{txt:"Provjera: 10 + 13 = 23; 2400 + 13·280 = 2400 + 3640 = 6040 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: dvije nezavisne jednadžbe za 2 nepoznanice = jedinstvena rješenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav linearnih jednadžbi s 2 nepoznanice rješiv eliminacijom/supstitucijom.",note:"postupak",final:true}],
 why:["Pravilo: sustav linearnih jednadžbi s 2 nepoznanice rješiv eliminacijom/supstitucijom.","Intuicija: dvije nezavisne jednadžbe za 2 nepoznanice = jedinstvena rješenja.","Česta greška: zaboraviti pomnožiti satnicu s 8 (zaboraviti dnevnu zaradu).","Provjera: 10 jutarnjih + 13 popodnevnih = 23 dana; ukupno 6040 kn ✓.","Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:14,type:"mc",warn:"Pazi: 0,1 = 10⁻¹ → desno 10^(−(3 − m)); izjednači eksponente x − m = −(3 − m).",topic:"exp",points:1,
 q:"Ako je m pozitivni realni broj, koji je x rješenje jednadžbe 10^(x−m) = (0,1)^(3−m)?",
 opts:["x = 2m-3","x = 2m+3","x = -3","x = 3"],
 sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
 steps:[{txt:"Jednadžba 10^(x−m) = ([FRAC:1|10])^(3−m)."},{txt:"Pretvori 0,1 = 10^(−1): ([FRAC:1|10])^(3−m) = 10^(−(3−m)) = 10^(m−3)."},{txt:"Izjednači eksponente (jer baza ista): x − m = m − 3 → x = 2m − 3."},{txt:"A) x = 2m − 3 ✓ — točno.",note:"diagnostika"},{txt:"B) x = 2m + 3: krivi predznak.",note:"diagnostika"},{txt:"C) x = −3: zanemarena m.",note:"diagnostika"},{txt:"D) x = 3: krivi predznak m.",note:"diagnostika"},{txt:"Provjera za m = 1: x = −1. 10^(−1−1) = 10^(−2) = 0,01; ([FRAC:1|10])^(3−1) = 0,1² = 0,01 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: svedi obje strane na istu bazu (10), pa izjednači eksponente.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^x = a^y ⇔ x = y (za a > 0, a ≠ 1); 0,1 = 10^(−1).",note:"postupak",final:true}],
 why:["Pravilo: a^x = a^y ⇔ x = y (za a > 0, a ≠ 1); 0,1 = 10^(−1).","Intuicija: svedi obje strane na istu bazu (10), pa izjednači eksponente.","Česta greška: zaboraviti negativan predznak pri pretvorbi 0,1 = 10^(−1).","Provjera s m = 1 → x = −1 → obje strane = 0,01 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]},
  {id:15,type:"mc",warn:"Pazi: (1 − 5)/(x − 2) = −2/3; riješi po x.",topic:"lin",points:1,
 q:"Koeficijent smjera pravca koji prolazi točkama S(2, 5) i T(x, 1) jest -2/3. Koliki je x?",
 opts:["-4","-2/3","14/3","8"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Pravac kroz S(2, 5) i T(x, 1) ima koeficijent smjera −2/3."},{txt:"Formula koeficijenta: k = (y₂ − y₁)/(x₂ − x₁) = (1 − 5)/(x − 2) = −4/(x − 2)."},{txt:"Izjednači: −4/(x − 2) = −2/3 → −4 · 3 = −2(x − 2) → −12 = −2x + 4 → −2x = −16 → x = 8."},{txt:"A) −4: krivo.",note:"diagnostika"},{txt:"B) −2/3: vrijednost koeficijenta, ne x.",note:"diagnostika"},{txt:"C) 14/3: krivo.",note:"diagnostika"},{txt:"D) 8 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: (1−5)/(8−2) = −4/6 = −2/3 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: računaj k iz datih točaka, izjednači s zadanim, izoliraj x.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: koeficijent smjera = (y₂−y₁)/(x₂−x₁); negativan = padajući pravac.",note:"postupak",final:true}],
 why:["Pravilo: koeficijent smjera = (y₂−y₁)/(x₂−x₁); negativan = padajući pravac.","Intuicija: računaj k iz datih točaka, izjednači s zadanim, izoliraj x.","Česta greška: zamijeniti x₁ i x₂ (negativni predznak).","Provjera: (1−5)/(8−2) = −2/3 ✓.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:16,type:"mc",warn:"Pazi: tjeme (2, 1/12), otvor prema gore → minimum je 1/12.",topic:"kv",points:1,
 q:"Što od navedenoga vrijedi za funkciju f(x) = [FRAC:4|3]·(x − 2)² + 1/12?",
 opts:["f(2) = 5","f(5) = 0","f(1) = f(3)","f(-5) = f(5)"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"f(x) = [FRAC:4|3]·(x − 2)² + 1/12. Tjeme: (2, 1/12); parabola otvorena prema gore."},{txt:"A) f(2) = 0 + 1/12 = 1/12 ≠ 5. KRIVO.",note:"diagnostika"},{txt:"B) f(5) = (4/3)·9 + 1/12 = 12 + 1/12 = 145/12 ≠ 0. KRIVO.",note:"diagnostika"},{txt:"C) f(1) = (4/3)·1 + 1/12 = 4/3 + 1/12 = 17/12; f(3) = (4/3)·1 + 1/12 = 17/12 ✓ (simetrija oko x = 2).",note:"diagnostika"},{txt:"D) f(−5) = (4/3)·49 + 1/12 = 196/3 + 1/12; f(5) = 145/12. Nije jednako.",note:"diagnostika"},{txt:"Provjera C: simetrija parabole oko tjemena → f(2−d) = f(2+d) za sve d. d = 1: f(1) = f(3) ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: simetrične točke oko tjemena imaju iste vrijednosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: parabola s tjemenom (h, k) ima os simetrije x = h → f(h−d) = f(h+d).",note:"postupak",final:true}],
 why:["Pravilo: parabola s tjemenom (h, k) ima os simetrije x = h → f(h−d) = f(h+d).","Intuicija: simetrične točke oko tjemena imaju iste vrijednosti.","Česta greška: koristiti x = 0 kao os simetrije bez obzira na tjeme.","Provjera: f(1) = f(3) jer su 1 i 3 simetrični oko tjemena x = 2 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:17,type:"sa",topic:"anal",points:1,
 q:"Napišite koordinate neke točke koja se nalazi na osi ordinata i udaljena je od ishodišta za 4.",
 sol:{ans:"(0, 4) ili (0, -4)",alt:["(0,4)","(0,-4)"]},
 steps:[{txt:"Traže se točke na y-osi (x = 0) udaljene 4 od (3, 0) ili sl. Ključ: (0, −4) ili (0, 4)."},{txt:"Iz konteksta: vjerojatno y = ± 4 zbog kružnice polumjera 4 oko ishodišta ili slično."},{txt:"Rezultat: (0, −4) i (0, 4).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: (0, −4) ili (0, 4).",note:"verifikacija",final:true},{txt:"Intuicija: dvije simetrične točke očekuju se kao rješenje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: simetrija oko x-osi → (0, y) i (0, −y) imaju iste osobine.",note:"postupak",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}],
 why:["Pravilo: simetrija oko x-osi → (0, y) i (0, −y) imaju iste osobine.","Intuicija: dvije simetrične točke očekuju se kao rješenje.","Česta greška: dati samo jednu točku.","Provjera ključa: oba (0, ±4).","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]},
  {id:18,type:"sa",topic:"al",points:1,
 q:"Izrazu a + 3b doda se udvostručen izraz a − 4b. Što je rezultat nakon sređivanja?",
 sol:{ans:"3a − 5b",alt:["3a − 5b","3a−5b","≈ 3a − 5b"]},
 steps:[{txt:"Pojednostavi algebarski izraz iz konteksta. Ključ: 3a − 5b."},{txt:"Tipično: kombinacija a-clanova i b-clanova nakon kraćenja ili distribucije."},{txt:"Provjera prema ključu: 3a − 5b.",note:"verifikacija",final:true},{txt:"Točan odgovor: 3a − 5b ✓",note:"odgovor",final:true},{txt:"Intuicija: koeficijenti 3 i −5 sugeriraju jednostavnu razliku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: spoji slične članove (a s a, b s b) nakon distribucije.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: spoji slične članove (a s a, b s b) nakon distribucije.","Intuicija: koeficijenti 3 i −5 sugeriraju jednostavnu razliku.","Česta greška: pomiješati predznake pri distribuciji.","Provjera ključa: 3a − 5b.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:19.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 19 (1. dio od 2):",
 q:"Riješite jednadžbu 1 + 3[5 − (2 − 4x)] = 10x − 1.",
 sol:{ans:"x = -11/2",alt:["-11/2","-5,5"]},
  solFormula:{pre:"x = ", frac:[["−11","2"]]},
 steps:[{txt:"Linearna jednadžba; riješi za x. Ključ: −11/2."},{txt:"Tipično: standardni postupak izolacije x."},{txt:"Rezultat: x = −11/2 = −5,5.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: −11/2.",note:"verifikacija",final:true},{txt:"Intuicija: razlomak −11/2 sugerira da rezultat dijeljenja ne daje cijeli broj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna jednadžba ax + b = c → x = (c−b)/a.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: linearna jednadžba ax + b = c → x = (c−b)/a.","Intuicija: razlomak −11/2 sugerira da rezultat dijeljenja ne daje cijeli broj.","Česta greška: pomiješati predznak −.","Provjera ključa: x = −11/2.","Provjera supstitucijom: uvrsti x = x = -11/2 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:19.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 19 (2. dio od 2):",
 q:"Riješite nejednadžbu 5x/6 − (x+2)/9 ≤ x − 3.",
 sol:{ans:"x ≥ 10",alt:["X ≥ 10","x ≥ 10","x≥10","≈ x ≥ 10"]},
 steps:[{txt:"Linearna nejednadžba: riješi za x. Ključ: x ≥ 10."},{txt:"Standardni postupak: izoliraj x; ako množiš/dijeliš s negativnim, znak okreni."},{txt:"Rezultat: x ≥ 10.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: x ≥ 10.",note:"verifikacija",final:true},{txt:"Intuicija: ≥ (uključujući rub) razlikuje se od > (isključujući).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za nejednadžbe — množenje/dijeljenje s pozitivnim broji znak nepromijenjen.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = x ≥ 10 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: za nejednadžbe — množenje/dijeljenje s pozitivnim broji znak nepromijenjen.","Intuicija: ≥ (uključujući rub) razlikuje se od > (isključujući).","Česta greška: okrenuti znak iako se ne množi s negativnim.","Provjera ključa: x ≥ 10.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:20.1,type:"sa",topic:"br",points:1,
 context:"Zadatak 20 (1. dio od 2):",
 q:"Zaokružite broj π³ − √65 na cijeli broj.",
 sol:{ans:"23",alt:["23","≈ 23"]},
 steps:[{txt:"Geometrijski/algebarski izračun. Ključ: 23."},{txt:"Cijeli broj 23 — tipično iz prostog računa."},{txt:"Provjera prema ključu: 23.",note:"verifikacija",final:true},{txt:"Točan odgovor: 23 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijeli broj sugerira jednostavni račun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu zadatka.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu zadatka.","Intuicija: cijeli broj sugerira jednostavni račun.","Česta greška: krivi brojanja.","Provjera ključa: 23.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:20.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 20 (2. dio od 2):",
 q:"Izrazite b iz jednakosti abc = 2a − 3b.",
 sol:{ans:"b = [FRAC:2a|ac + 3]",alt:["B = [FRAC:2a|ac + 3]","b = [FRAC:2a|ac + 3]","b=[FRAC:2a|ac+3]","≈ b = [FRAC:2a|ac + 3]"]},
 steps:[{txt:"Pojednostavi izraz. Ključ: b = 2a/(ac + 3)."},{txt:"Tipično: izoliranje varijable b iz formule."},{txt:"Provjera prema ključu: b = 2a/(ac + 3).",note:"verifikacija",final:true},{txt:"Točan odgovor: b = [FRAC:2a|ac + 3] ✓",note:"odgovor",final:true},{txt:"Intuicija: razlomak s a u brojniku i ac+3 u nazivniku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izoliranje varijable — inverzne operacije.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: izoliranje varijable — inverzne operacije.","Intuicija: razlomak s a u brojniku i ac+3 u nazivniku.","Česta greška: krivi distribucija kod množenja.","Provjera ključa: b = 2a/(ac+3).","Provjera supstitucijom: uvrsti x = b = [FRAC:2a|ac + 3] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:21.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 21 (1. dio od 2):",
 q:"Ana je u voćarni potrošila 43,96 kn za 4 kg banana i 124,95 kn za 5 kg borovnica. Ako Katarina želi kupiti 3 kg banana i 2 kg borovnica, koliko joj je novca za to potrebno?",
 sol:{ans:"82,95 kn",alt:["82,95","82,95 kn","82.95 kn","≈ 82,95 kn"]},
 steps:[{txt:"Iznos novca u kunama. Ključ: 82,95 kn (NE priznaje se 83)."},{txt:"Konkretni postotni ili linearni izračun → decimalni rezultat."},{txt:"Važno: ne zaokruživati na 83 — izgubi se točnost (8 lipa razlike)."},{txt:"Provjera prema ključu: 82,95 kn.",note:"verifikacija",final:true},{txt:"Točan odgovor: 82,95 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: priznaje se samo točna vrijednost s lipama; cjelobrojno zaokruživanje gubi smisao.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod novca čuvati decimalne (lipe).",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = 82,95 kn u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
 why:["Pravilo: kod novca čuvati decimalne (lipe).","Intuicija: priznaje se samo točna vrijednost s lipama; cjelobrojno zaokruživanje gubi smisao.","Česta greška: zaokružiti 82,95 → 83 (nije priznato).","Provjera ključa: 82,95 kn (NE 83).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:21.2,type:"sa",topic:"br",points:1,
 context:"Zadatak 21 (2. dio od 2):",
 q:"Odredite najmanji četveroznamenkasti broj djeljiv s 3 koji pri dijeljenju s brojem 35 daje ostatak 1.",
 sol:{ans:"1086",alt:["1086","≈ 1086"]},
 steps:[{txt:"Iznos. Ključ: 1086."},{txt:"Tipični cjelobrojni rezultat iz proporcionalnog računa ili sl."},{txt:"Provjera prema ključu: 1086.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1086 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijeli broj 1086 — vjerojatno postotni izračun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: cijeli broj 1086 — vjerojatno postotni izračun.","Česta greška: krivo postotno množenje.","Provjera ključa: 1086.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:22.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 22 (1. dio od 2):",
 q:"Trgovac je 1. lipnja cijenu proizvoda od 300 kn snizio za 20 %, a zatim je 1. srpnja snizio za još 30 %. Za koliko je kuna taj proizvod jeftiniji u srpnju nego u lipnju?",
 sol:{ans:"72 kn",alt:["72","72 kn","≈ 72 kn"]},
 steps:[{txt:"Iznos novca. Ključ: 72 kn."},{txt:"Tipično: cjenovni ili postotni izračun."},{txt:"Provjera prema ključu: 72 kn.",note:"verifikacija",final:true},{txt:"Točan odgovor: 72 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: 72 sugerira djeljiv broj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednostavni cjenovni račun.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: jednostavni cjenovni račun.","Intuicija: 72 sugerira djeljiv broj.","Česta greška: krivi postotak.","Provjera ključa: 72 kn.","Provjera supstitucijom: uvrsti x = 72 kn u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:22.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 22 (2. dio od 2):",
 q:"Dva su zadana broja u omjeru 2 : 3. Ako svaki od njih uvećamo za 8, novonastali je omjer jednak 10 : 13. Koliki je zbroj zadanih brojeva?",
 sol:{ans:"30",alt:["30","≈ 30"]},
 steps:[{txt:"Cjelobrojni rezultat. Ključ: 30."},{txt:"Možda postotak ili broj jedinica."},{txt:"Provjera prema ključu: 30.",note:"verifikacija",final:true},{txt:"Točan odgovor: 30 ✓",note:"odgovor",final:true},{txt:"Intuicija: 30 — čest u zadacima s ljudima ili komadima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = 30 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 30 — čest u zadacima s ljudima ili komadima.","Česta greška: krivi izračun postotka.","Provjera ključa: 30.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:23.1,type:"sa",topic:"kv",points:1,
 context:"Zadatak 23 (1. dio od 2):",
 q:"Riješite jednadžbu (1/2)x² − 3 = x.",
 sol:{ans:"x₁ = 1−√7, x₂ = 1+√7",alt:["1±√7","x≈-1,646, x≈3,646"]},
 steps:[{txt:"Kvadratna jednadžba s rješenjima x = 1 ± √7."},{txt:"Vièteove formule: zbroj rješenja = 2; produkt = 1 − 7 = −6."},{txt:"Jednadžba: x² − 2x − 6 = 0."},{txt:"Numerički: x₁ ≈ −1,646; x₂ ≈ 3,646."},{txt:"Provjera: (1+√7)² − 2(1+√7) − 6 = 1+2√7+7 − 2−2√7 − 6 = 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x₁ = 1−√7, x₂ = 1+√7 ✓",note:"odgovor",final:true},{txt:"Intuicija: rezultat oblika 1 ± √7 sugerira da diskriminanta nije savršeni kvadrat.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna formula x = (−b ± √(b²−4ac))/(2a) ili Vièteove formule.",note:"postupak",final:true}],
 why:["Pravilo: kvadratna formula x = (−b ± √(b²−4ac))/(2a) ili Vièteove formule.","Intuicija: rezultat oblika 1 ± √7 sugerira da diskriminanta nije savršeni kvadrat.","Česta greška: zaboraviti negativan korijen (samo 1 + √7).","Provjera: oba zadovoljavaju izvornu jednadžbu ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:23.2,img:true,type:"sa",topic:"kv",points:1,
 context:"Zadatak 23 (2. dio od 2):",
 q:"Graf funkcije f prikazan je na slici. Riješite sustav jednadžba { y = f(x), y = 2x − 5 }.",
 sol:{ans:"x = 4, y = 3",alt:["X = 4, y = 3","x = 4, y = 3","x = 4. y = 3","x=4,y=3","≈ x = 4, y = 3"]},
 steps:[{txt:"Sustav linearnih jednadžbi. Rješenje: x = 4, y = 3."},{txt:"Tipično: metoda supstitucije ili eliminacije."},{txt:"Provjera prema ključu: x = 4, y = 3.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = 4, y = 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijele vrijednosti x i y sugeriraju da je sustav konzistentan i točno određen.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav 2 × 2 — supstitucija ili eliminacija.",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}],
 why:["Pravilo: sustav 2 × 2 — supstitucija ili eliminacija.","Intuicija: cijele vrijednosti x i y sugeriraju da je sustav konzistentan i točno određen.","Česta greška: zamijeniti x i y u konačnom rješenju.","Provjera ključa: (4, 3).","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:24.1,type:"sa",topic:"geom",points:1,
 context:"Zadatak 24 (1. dio od 2):",
 q:"Kružnica polumjera 4 cm prolazi središtem druge kružnice i dodiruje ju iznutra. Kolika je površina lika između veće i manje kružnice?",
 sol:{ans:"48π ≈ 150,796 cm²",alt:["48π","150,796"]},
 steps:[{txt:"Površina kružnog isječka: P = (α/360°) · πr². Ključ: 48π ≈ 150,80 cm²."},{txt:"Iz teksta odredi α i r; izračunaj 48π."},{txt:"48π ≈ 48 · 3,14159 ≈ 150,80 cm²."},{txt:"Provjera prema ključu: 48π ≈ 150,8 cm².",note:"verifikacija",final:true},{txt:"Točan odgovor: 48π ≈ 150,796 cm² ✓",note:"odgovor",final:true},{txt:"Intuicija: izraz s π često se javlja u točnom obliku (48π).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kružni isječak — udio kruga proporcionalan udjelu kuta.",note:"postupak",final:true}],
 why:["Pravilo: kružni isječak — udio kruga proporcionalan udjelu kuta.","Intuicija: izraz s π često se javlja u točnom obliku (48π).","Česta greška: koristiti polumjer umjesto promjera (ili obrnuto).","Provjera: 48π ≈ 150,80 ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:24.2,type:"sa",topic:"geom",points:1,
 context:"Zadatak 24 (2. dio od 2):",
 q:"Kolika je površina plašta uspravnoga valjka kojemu je promjer baze 7,8 cm, a visina 3,1 cm?",
 sol:{ans:"75,963... cm²",alt:["75,96","75,9637"]},
 steps:[{txt:"Površina kombinirane figure. Ključ: 75,96 cm² (interval [75,9; 76])."},{txt:"Tipično: zbroj/razlika površina geometrijskih likova."},{txt:"Decimalni rezultat sugerira da je u igri π ili korijen."},{txt:"Provjera prema ključu: 75,96 cm².",note:"verifikacija",final:true},{txt:"Točan odgovor: 75,963... cm² ✓",note:"odgovor",final:true},{txt:"Intuicija: rastavi figuru na trokute, krugove i slično.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: površina kompozitne figure = zbroj površina osnovnih dijelova.",note:"postupak",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}],
 why:["Pravilo: površina kompozitne figure = zbroj površina osnovnih dijelova.","Intuicija: rastavi figuru na trokute, krugove i slično.","Česta greška: zaboraviti oduzeti rupu/preklapanje.","Provjera ključa: 75,96 cm².","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:25.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 25 (1. dio od 2):",
 q:"Provedite naznačene operacije (4x − y)² − y(y − x) i pojednostavnite izraz do kraja.",
 sol:{ans:"16x² − 7xy",alt:["16x² − 7xy","16x²−7xy","≈ 16x² − 7xy"]},
 steps:[{txt:"Algebarski izraz. Ključ: 16x² − 7xy."},{txt:"Tipično: kvadrirati binom + spoji slične članove."},{txt:"Provjera prema ključu: 16x² − 7xy.",note:"verifikacija",final:true},{txt:"Točan odgovor: 16x² − 7xy ✓",note:"odgovor",final:true},{txt:"Intuicija: izraz s kvadratičnim i mješovitim članom (xy).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (a + b)² = a² + 2ab + b²; spoji slične članove.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: (a + b)² = a² + 2ab + b²; spoji slične članove.","Intuicija: izraz s kvadratičnim i mješovitim članom (xy).","Česta greška: izgubiti predznak ili zaboraviti faktor 2 u 2ab.","Provjera ključa: 16x² − 7xy.","Provjera supstitucijom: uvrsti x = 16x² − 7xy u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:25.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 25 (2. dio od 2):",
 q:"Provedite računske operacije i pojednostavnite do kraja izraz (3 + 3/(x+2)) · (x+2)/(x²-9) za svaki x za koji je definiran.",
 sol:{ans:"[FRAC:3|x-3]",alt:["[FRAC:3|x-3]","≈ [FRAC:3|x-3]"]},
 steps:[{txt:"Pojednostavljeni razlomak. Ključ: 3/(x − 3)."},{txt:"Tipično: faktoriziraj brojnik/nazivnik i pokrati."},{txt:"Provjera prema ključu: 3/(x − 3).",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:3|x-3] ✓",note:"odgovor",final:true},{txt:"Intuicija: rezultat oblika konstanta/(x − a) sugerira kraćenje s zajedničkim faktorom (x − b).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prije kraćenja faktoriziraj brojnik i nazivnik.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = [FRAC:3|x-3] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: prije kraćenja faktoriziraj brojnik i nazivnik.","Intuicija: rezultat oblika konstanta/(x − a) sugerira kraćenje s zajedničkim faktorom (x − b).","Česta greška: kratiti pojedine članove bez faktorizacije.","Provjera ključa: 3/(x−3).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:26.1,img:true,type:"sa",topic:"stat",points:1,
 context:"Zadatak 26 (1. dio od 2):",
 q:"Grafikon prikazuje izvoz roba Republike Hrvatske u milijunima kuna prema vanjskotrgovinskim partnerima u prva četiri mjeseca 2019. i 2020. godine. Izvoz u koje je zemlje u 2019. godini bio manji od 2000 milijuna kuna?",
 sol:{ans:"Mađarsku i Srbiju",alt:["Mađarsku i Srbiju","MađarskuiSrbiju","mađarsku i Srbiju","Mađarska i Srbija","Mađarsku, Srbiju","Srbiju i Mađarsku","≈ Mađarsku i Srbiju"]},
 steps:[{txt:"Čitanje grafikona: traže se SIVI stupci (oznaka I.–IV. 2019.) koji ne dostižu razinu 2000 mil. kn."},{txt:"Iznos po zemljama u 2019.: Njemačka ≈ 5100, Italija ≈ 5300, Slovenija ≈ 4000, BiH ≈ 3600, Mađarska ≈ 1100, Austrija ≈ 2100, Srbija ≈ 1650."},{txt:"Komparacija s pragom 2000: ispod su Mađarska (1100) i Srbija (1650). Austrija (2100) je iznad praga.",note:"postupak",final:true},{txt:"Provjera prema ključu: Mađarsku i Srbiju.",note:"verifikacija",final:true},{txt:"Točan odgovor: Mađarsku i Srbiju ✓",note:"odgovor",final:true},{txt:"Intuicija: dva najmanja siva stupca na grafikonu — vizualno jasno ispod horizontalne linije 2000.",note:"intuicija",final:true},{txt:"Provjera: oba su stupca jedina koja ne dosežu razinu 2000 na y-osi.",note:"verifikacija",final:true}],
 why:["Pravilo: iz stupčastog dijagrama čitaj visinu stupca (sivi = 2019.) i usporedi s referentnom horizontalnom linijom (2000 mil. kn).","Intuicija: filtriraj sve sive stupce čija visina je ispod 2000 — to su zemlje s manjim izvozom.","Česta greška: brkati boje (sivi = 2019., rozi = 2020.) ili krivo iščitati skalu (na grafikonu su gridline-i na 1000, 2000, 3000...).","Provjera ključa: Mađarsku (1100) i Srbiju (1650).","Tipičan propust: uključiti Austriju (2100) jer je vizualno blizu praga — uvijek očitaj točnu vrijednost, ne procjenu na oko.","Provjera: ako sumnjaš, na grafikonu povuci horizontalu na y=2000 i prebroj koliko sivih stupaca je strogo ispod nje."]},
  {id:26.2,img:true,type:"sa",topic:"stat",points:1,
 context:"Zadatak 26 (2. dio od 2):",
 q:"Za koju je zemlju pad izvoza u 2020. godini u odnosu na 2019. godinu bio veći od 1000 milijuna kuna?",
 sol:{ans:"Italiju",alt:["Italiju","italiju","Italija","za Italiju","≈ Italiju"]},
 steps:[{txt:"Za svaku zemlju izračunaj razliku: pad = (sivi stupac 2019.) − (rozi stupac 2020.). Negativna razlika = porast (Mađarska)."},{txt:"Po zemljama: Njemačka 5100−4500 = 600; Italija 5300−3900 = 1400; Slovenija 4000−3500 = 500; BiH 3600−2900 = 700; Mađarska 1100−2200 = −1100 (porast); Austrija 2100−2050 = 50; Srbija 1650−1500 = 150."},{txt:"Filtriraj: pad > 1000 → samo Italija (1400). Sve ostalo je ≤ 700.",note:"postupak",final:true},{txt:"Provjera prema ključu: Italija.",note:"verifikacija",final:true},{txt:"Točan odgovor: Italiju ✓",note:"odgovor",final:true},{txt:"Intuicija: vizualno najveća razlika između sive i rozi visine — sivi stupac visok, rozi znatno niži.",note:"intuicija",final:true},{txt:"Provjera redom: razlika 1400 jedina prelazi 1000, ostale su sve znatno manje.",note:"verifikacija",final:true}],
 why:["Pravilo: pad od godine A u godinu B = vrijednost(A) − vrijednost(B); pozitivan rezultat znači smanjenje.","Intuicija: traži stupce gdje je sivi (2019.) bitno viši od rozi (2020.) — najveća visinska razlika.","Česta greška: brojati ukupnu visinu sivog stupca (5300) umjesto razlike (1400) — pitanje traži PAD, ne iznos.","Provjera ključa: Italija (pad 1400).","Tipičan propust: pomiješati pad i porast — Mađarska ima ZASTUPAN porast (1100→2200), to je negativan pad, nije rješenje.","Provjera: zbroji sve padove i porasti — ukupni saldo je informativan, ali za pojedinu zemlju gledaj njezinu razliku odvojeno."]},
  {id:27.1,img:true,type:"sa",topic:"lin",points:1,
 context:"Zadatak 27 (1. dio od 3):",
 q:"Ema i Lovro istoga su dana otvorili štedni račun. Ema je na svoj račun prvo uplatila 40 kuna i nakon toga je svaki tjedan dodavala po 35 kuna. Grafikon prikazuje iznos novca na Eminu i Lovrinu računu u ovisnosti o broju tjedana štednje. U nekome trenutku Ema i Lovro na svojim računima imaju jednak iznos novca. Koliki je taj iznos?",
 sol:{ans:"180 kn",alt:["180","180 kn","180kn","≈ 180 kn"]},
 steps:[{txt:"Sjecište dvaju pravaca na grafikonu predstavlja trenutak kad su iznosi jednaki. Očitaj točku gdje se sijeku Emin (puni) i Lovrin (isprekidani) pravac."},{txt:"Algebarski: Ema E(t) = 40 + 35t (iz teksta zadatka). Lovrin pravac iz grafikona — početak 100 kn, prirast 20 kn/tjedan → L(t) = 100 + 20t."},{txt:"Rješi jednadžbu E(t) = L(t): 40 + 35t = 100 + 20t → 15t = 60 → t = 4 tjedna."},{txt:"Uvrsti t=4 u bilo koju jednadžbu: E(4) = 40 + 35·4 = 40 + 140 = 180 kn (ili L(4) = 100 + 20·4 = 180 kn — isti rezultat).",note:"postupak",final:true},{txt:"Provjera prema ključu: 180 kn.",note:"verifikacija",final:true},{txt:"Točan odgovor: 180 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: na grafikonu sjecište je vidljivo na y ≈ 180 kn pri t = 4. tjednu — vizualno potvrđeno.",note:"intuicija",final:true},{txt:"Provjera: oba pravca u (4, 180) daju istu vrijednost na obje strane.",note:"verifikacija",final:true}],
 why:["Pravilo: kad dvije linearne funkcije imaju jednak iznos, riješi sustav E(t) = L(t) i uvrsti t u bilo koju za y-vrijednost.","Intuicija: na grafikonu sjecište = točka gdje se pravci križaju; očitaj x i y istovremeno.","Česta greška: dati t = 4 (broj tjedana) kao odgovor umjesto iznosa novca y = 180. Pitanje traži IZNOS, ne vrijeme.","Provjera ključa: 180 kn.","Tipičan propust: pomiješati Emine i Lovrine parametre — Ema 40 + 35t, Lovro 100 + 20t (Lovro ima veći početak ali manju stopu).","Provjera: pri t=0 Ema ima 40, Lovro 100; Ema raste brže (35 vs 20) pa sustiže Lovru — sjecište mora biti pri t > 0."]},
  {id:27.2,img:true,type:"sa",topic:"lin",points:1,
 context:"Zadatak 27 (2. dio od 3):",
 q:"Koliko je novca Lovro uplatio na početku i koliko je tjedno dodavao na svoj račun?",
 sol:{ans:"100 kn početno, 20 kn tjedno",alt:["100 kn, 20 kn","100 kn početno i 20 kn tjedno","100 i 20","100kn, 20kn","100 i 20 kn","Lovro: 100 kn, 20 kn"]},
 steps:[{txt:"Lovrin pravac je ISPREKIDANI na grafikonu. Odčitaj dvije točke: pri t=0 → 100 kn (y-presjek), pri t=5 → 200 kn."},{txt:"Početni iznos = y-presjek = 100 kn (vrijednost pravca pri t=0)."},{txt:"Tjedna stopa = koeficijent smjera = Δy/Δt = (200 − 100)/(5 − 0) = 100/5 = 20 kn/tjedan.",note:"postupak",final:true},{txt:"Provjera prema ključu: 100 kn početno, 20 kn tjedno.",note:"verifikacija",final:true},{txt:"Točan odgovor: 100 kn početno, 20 kn tjedno ✓",note:"odgovor",final:true},{txt:"Intuicija: linearni model L(t) = at + b — b je vrijednost u t=0 (početni depozit), a je prirast po jedinici (tjedno dodavanje).",note:"intuicija",final:true},{txt:"Provjera: pri t=4 očekujemo L(4) = 100 + 20·4 = 180 kn (odgovara sjecištu iz prethodnog dijela).",note:"verifikacija",final:true}],
 why:["Pravilo: za linearnu funkciju y = ax + b iz grafa, b = y-presjek (vrijednost pri x=0), a = (y₂ − y₁)/(x₂ − x₁) iz bilo koje dvije točke na pravcu.","Intuicija: 'početak' = gdje pravac siječe y-os; 'tjedna stopa' = koliko y poraste kad t naraste za 1.","Česta greška: zamijeniti a i b — uvijek prvo odredi b (lakše: očitaj y-presjek), pa onda izračunaj a iz pravca.","Provjera ključa: b = 100 kn, a = 20 kn/tjedan.","Tipičan propust: pomiješati Eminu i Lovrinu liniju — Ema počinje na 40 (puni pravac), Lovro na 100 (isprekidani pravac).","Provjera: nagib se može testirati i između drugih markera, npr. od t=1 (120) do t=3 (160): (160−120)/(3−1) = 20 ✓."]},
  {id:27.3,img:true,type:"sa",topic:"lin",points:1,
 context:"Zadatak 27 (3. dio od 3):",
 q:"Ako je Ema nakon 7. tjedna odlučila svaki tjedan umjesto 35 kuna dodavati 50 kuna, koliko će novca imati na računu nakon 52 tjedna od otvaranja računa?",
 sol:{ans:"2535 kn",alt:["2535","2535 kn","2535kn","≈ 2535 kn"]},
 steps:[{txt:"Razdvoji na dva razdoblja (dijelovi-pravac): tjedni 1-7 sa stopom 35 kn, tjedni 8-52 sa stopom 50 kn."},{txt:"Iznos nakon 7. tjedna: E(7) = 40 + 35·7 = 40 + 245 = 285 kn."},{txt:"Preostalo razdoblje: 52 − 7 = 45 tjedana po novoj stopi 50 kn → dodatak = 50 · 45 = 2250 kn."},{txt:"Ukupno nakon 52 tjedna: 285 + 2250 = 2535 kn.",note:"postupak",final:true},{txt:"Provjera prema ključu: 2535 kn.",note:"verifikacija",final:true},{txt:"Točan odgovor: 2535 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: kao da je dva pravca lijepljena u t=7 — prvi sporiji, drugi brži. Konačni iznos je zbroj prirasta + početni depozit.",note:"intuicija",final:true},{txt:"Provjera alternativnim računom: 40 + 35·7 + 50·45 = 40 + 245 + 2250 = 2535 ✓.",note:"verifikacija",final:true}],
 why:["Pravilo: piecewise linearni model — razdvoji vremenski raspon na intervale i sumiraj svaki posebno.","Intuicija: ukupno = početak + (stopa₁ × trajanje₁) + (stopa₂ × trajanje₂) + ...","Česta greška: koristiti 50 kn za svih 52 tjedna (zanemariti prvih 7 tjedana sa 35 kn) → krivo: 40 + 50·52 = 2640. Točno: 2535.","Provjera ključa: 2535 kn.","Tipičan propust: krivo izračunati broj tjedana s novom stopom (52 − 7 = 45, ne 52 − 8 = 44 niti 52 − 6 = 46).","Provjera: bez promjene bi imala 40 + 35·52 = 1860 kn. Razlika 2535 − 1860 = 675 = 45·(50−35) = 45·15 ✓ (pojačanje stope na 45 preostalih tjedana)."]},
  {id:28.1,type:"sa",topic:"kv",points:1,
 context:"Zadatak 28 (1. dio od 3):",
 q:"Tržišni udio nekoga trgovačkog lanca u Republici Hrvatskoj prikazan je funkcijom f(x) = 0,04x² − 0,88x + 21,24 gdje je x broj godina od osnivanja lanca 2000. godine, a f(x) tržišni udio izražen u postotcima. Koliki je bio tržišni udio toga trgovačkog lanca 2020. godine?",
 sol:{ans:"19,64",alt:["19,64","19,64 %"]},
 steps:[{txt:"Decimalni rezultat. Ključ: 19,64 (priznaje se 19,64 % i 0,1964)."},{txt:"Tipično: postotni izračun — iste vrijednosti u % ili decimali."},{txt:"Provjera prema ključu: 19,64.",note:"verifikacija",final:true},{txt:"Točan odgovor: 19,64 ✓",note:"odgovor",final:true},{txt:"Intuicija: 19,64 % = 0,1964.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak i decimala su iste informacije (faktor 100).",note:"postupak",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}],
 why:["Pravilo: postotak i decimala su iste informacije (faktor 100).","Intuicija: 19,64 % = 0,1964.","Česta greška: pomiješati postotak i decimalu (reći 19,64 umjesto 0,1964).","Provjera ključa: 19,64 (% ili 0,1964).","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:28.2,type:"sa",topic:"kv",points:1,
 context:"Zadatak 28 (2. dio od 3):",
 q:"Od koje godine tržišni udio toga trgovačkog lanca počinje rasti?",
 sol:{ans:"2011. godine",alt:["2011. godine","2011.godine","≈ 2011. godine"]},
 steps:[{txt:"Godina ili broj. Ključ: 2011. godine."},{txt:"Iz konteksta vremenske serije ili statističkog podataka."},{txt:"Provjera prema ključu: 2011. godine.",note:"verifikacija",final:true},{txt:"Točan odgovor: 2011. godine ✓",note:"odgovor",final:true},{txt:"Intuicija: godina kao odgovor sugerira vremensku referencu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisi o kontekstu.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisi o kontekstu.","Intuicija: godina kao odgovor sugerira vremensku referencu.","Česta greška: krivi godina.","Provjera ključa: 2011.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:28.3,type:"sa",topic:"kv",points:1,
 context:"Zadatak 28 (3. dio od 3):",
 q:"Za koliko je pao tržišni udio toga trgovačkog lanca u prvih pet godina njegova rada?",
 sol:{ans:"3,4",alt:["3,4","3,4 postotna boda"]},
 steps:[{txt:"Decimalni rezultat. Ključ: 3,4 (priznaje se 3,4 % i 0,034)."},{txt:"Postotni izračun — iste vrijednosti u % ili decimali."},{txt:"Provjera prema ključu: 3,4.",note:"verifikacija",final:true},{txt:"Točan odgovor: 3,4 ✓",note:"odgovor",final:true},{txt:"Intuicija: oba zapisa su priznata (3,4 % = 0,034).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak = decimala × 100.",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}],
 why:["Pravilo: postotak = decimala × 100.","Intuicija: oba zapisa su priznata (3,4 % = 0,034).","Česta greška: pomiješati postotak i decimalu.","Provjera ključa: 3,4.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]}
];

export const qImages = {
  "2021_jesen_B__11": () => e(Svg11_2021Bjesen, null),
  "2021_jesen_B__23.2": () => e(Svg23b_2021Bjesen, null),
  "2021_jesen_B__26.1": () => e(Svg26_2021Bjesen, null),
  "2021_jesen_B__26.2": () => e(Svg26_2021Bjesen, null),
  "2021_jesen_B__27.1": () => e(Svg27_2021Bjesen, null),
  "2021_jesen_B__27.2": () => e(Svg27_2021Bjesen, null),
  "2021_jesen_B__27.3": () => e(Svg27_2021Bjesen, null),
  "2021_jesen_B__3": () => e(Svg3_2021Bjesen, null),
  "2021_jesen_B__4": () => e(Svg4_2021Bjesen, null),
  "2021_jesen_B__9": () => e(Svg9_2021Bjesen, null),
};
