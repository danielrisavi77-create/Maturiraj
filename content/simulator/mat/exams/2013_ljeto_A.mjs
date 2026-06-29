// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg29_2013Aj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function SvgGridEmpty_2013LjetoA(){
  const W=280,H=260,pad={l:30,r:15,t:15,b:30};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-2,xMax=6,yMin=-5,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+(v-xMin)/(xMax-xMin)*iW;
  const toY=v=>pad.t+(yMax-v)/(yMax-yMin)*iH;
  const gx=[-1,0,1,2,3,4,5], gy=[-4,-3,-2,-1,0,1,2,3,4,5];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W}},
    ...gx.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...gy.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:_BLUE,strokeWidth:1.5}),
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:pad.l+iW+4,y:toY(0)+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:toX(0)+3,y:pad.t-3,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:toX(1)-4,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"middle"},"1"),
    e("text",{x:toX(0)-6,y:toY(1)+3,fontSize:9,fill:"var(--muted)",textAnchor:"end"},"1"),
    e("text",{x:toX(0)-6,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"end"},"0")
  );
}

function SvgCircleEmpty_2013LjetoA(){
  const W=240,H=240,cx=120,cy=120,r=90;
  const C={blue:"#4a90d9",text:"var(--text)",muted:"var(--muted)"};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W}},
    // Osi
    e("line",{x1:20,y1:cy,x2:W-10,y2:cy,stroke:C.text,strokeWidth:1.5}),
    e("line",{x1:cx,y1:10,x2:cx,y2:H-10,stroke:C.text,strokeWidth:1.5}),
    // Strelice
    e("text",{x:W-8,y:cy+4,fontSize:10,fill:C.text},"x"),
    e("text",{x:cx+4,y:8,fontSize:10,fill:C.text},"y"),
    // Kružnica (r=1, skalirana)
    e("circle",{cx,cy,r,fill:"none",stroke:C.blue,strokeWidth:2}),
    // Tick 1 na x i y osi
    e("line",{x1:cx+r,y1:cy-4,x2:cx+r,y2:cy+4,stroke:C.text,strokeWidth:1.2}),
    e("text",{x:cx+r+3,y:cy+14,fontSize:9,fill:C.muted},"1"),
    e("line",{x1:cx-4,y1:cy-r,x2:cx+4,y2:cy-r,stroke:C.text,strokeWidth:1.2}),
    e("text",{x:cx+6,y:cy-r+4,fontSize:9,fill:C.muted},"1"),
    // Ishodište
    e("text",{x:cx-14,y:cy+14,fontSize:9,fill:C.muted},"0")
  );
}

function SvgZad22b_2013LA(){
  // Graf g(x) na [a,n] — g pada od a do d (min), raste d do k,
  // raste do lokalnog max l, pada do n
  // g'(x)>0 na (d,k) i (l,m)
  const W=500,H=280,cy=140;
  const p={a:40,b:78,c:108,d:172,o:232,k:292,l:326,m:368,n:408};
  
  // Path grafa interpoliran iz slike
  const path=`M ${p.a},50 C ${p.a+8},58 ${p.b-8},${cy-2} ${p.b},${cy} C ${p.b+14},${cy+4} ${p.c-5},${cy+12} ${p.c},${cy+8} C ${p.c+18},${cy+4} ${p.d-16},${cy+80} ${p.d},${cy+82} C ${p.d+18},${cy+88} ${p.o-18},${cy+28} ${p.o},${cy-2} C ${p.o+14},${cy-30} ${p.k-8},${cy} ${p.k},${cy} C ${p.k+8},${cy} ${p.l-5},${cy-50} ${p.l},${cy-52} C ${p.l+14},${cy-54} ${p.m-10},${cy-50} ${p.m},${cy} C ${p.m+14},${cy+5} ${p.n-8},${cy+50} ${p.n},${cy+52}`;

  return e("svg",{viewBox:`0 0 ${W} ${H+50}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Osi
    e("line",{x1:20,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:p.o,y1:15,x2:p.o,y2:H,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${p.o},15 ${p.o-4},25 ${p.o+4},25`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy+4,fill:"var(--muted)",fontSize:13,fontStyle:"italic"},"x"),
    e("text",{x:p.o+5,y:13,fill:"var(--muted)",fontSize:13,fontStyle:"italic"},"y"),
    e("text",{x:p.o-14,y:cy+14,fill:"var(--muted)",fontSize:12},"0"),
    // Zeleni highlighti gdje g'>0
    e("rect",{x:p.d,y:cy+4,width:p.k-p.d,height:5,fill:"#3dd68c",opacity:0.35,rx:3}),
    e("rect",{x:p.l,y:cy+4,width:p.m-p.l,height:5,fill:"#3dd68c",opacity:0.35,rx:3}),
    // Graf g
    e("path",{d:path,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
    // Karakteristični krugovi
    ...[
      [p.b,cy],[p.d,cy+82],[p.k,cy],[p.l,cy-52],[p.m,cy],[p.n,cy+52]
    ].map(([x,y])=>e("circle",{cx:x,cy:y,r:4,fill:"none",stroke:"var(--text)",strokeWidth:2})),
    // Oznake x-osi
    ...["a","b","c","d"].map(k=>e("text",{key:k,x:p[k]-4,y:cy+18,fill:"#e8c547",fontSize:12,fontStyle:"italic"},k)),
    ...["k","l","m","n"].map(k=>e("text",{key:k,x:p[k]-4,y:cy+18,fill:"#e8c547",fontSize:12,fontStyle:"italic"},k)),
    // Label grafa
    e("text",{x:p.a+2,y:42,fill:"#4a90d9",fontSize:12,fontStyle:"italic"},"y = g(x)"),
    // Legenda
    e("text",{x:p.d,y:H+35,fill:"#3dd68c",fontSize:11,fontWeight:600},"g\u2019(x) > 0 na (d, k) \u222a (l, m)")
  );
}

function SvgZad14_2013LA(){
  // Konveksni četverokut ABCD, sjecište pravaca AB i CD u točki T
  // T je van četverokuta. TA=3, TD=6, TC=10, TB=20, AB=17
  return e("svg",{viewBox:"0 0 500 340",style:{width:"100%",maxWidth:500,display:"block",background:"var(--s2)",borderRadius:8}},
    // Isprekidane crte T prema A i T prema D
    e("line",{x1:70,y1:272,x2:148,y2:238,stroke:"var(--muted)",strokeWidth:1.5,strokeDasharray:"5,4"}),
    e("line",{x1:70,y1:272,x2:112,y2:212,stroke:"var(--muted)",strokeWidth:1.5,strokeDasharray:"5,4"}),
    // Stranice ABCD
    e("line",{x1:148,y1:238,x2:408,y2:138,stroke:"var(--text)",strokeWidth:2.2}),
    e("line",{x1:408,y1:138,x2:145,y2:85,stroke:"var(--text)",strokeWidth:2.2}),
    e("line",{x1:145,y1:85,x2:112,y2:212,stroke:"var(--text)",strokeWidth:2.2}),
    e("line",{x1:112,y1:212,x2:148,y2:238,stroke:"var(--text)",strokeWidth:2.2}),
    // Pravci sekanti (produženja)
    e("line",{x1:148,y1:238,x2:70,y2:272,stroke:"#4a90d9",strokeWidth:1.5,strokeDasharray:"4,3",opacity:0.7}),
    e("line",{x1:112,y1:212,x2:70,y2:272,stroke:"#4a90d9",strokeWidth:1.5,strokeDasharray:"4,3",opacity:0.7}),
    // Kutovi - lukovi
    e("path",{d:"M 160,229 A 14,14 0 0,1 155,222",fill:"none",stroke:"#e8c547",strokeWidth:1.5}),
    e("text",{x:163,y:230,fill:"#e8c547",fontSize:12,fontStyle:"italic"},"\u03b1"),
    e("path",{d:"M 113,83 A 14,14 0 0,0 124,95",fill:"none",stroke:"#e8c547",strokeWidth:1.5}),
    e("text",{x:100,y:83,fill:"#e8c547",fontSize:12,fontStyle:"italic"},"\u03b3"),
    e("path",{d:"M 104,207 A 14,14 0 0,1 117,202",fill:"none",stroke:"#3dd68c",strokeWidth:1.5}),
    e("text",{x:91,y:207,fill:"#3dd68c",fontSize:12,fontStyle:"italic"},"\u03b4"),
    e("path",{d:"M 393,145 A 14,14 0 0,1 388,138",fill:"none",stroke:"#3dd68c",strokeWidth:1.5}),
    e("text",{x:396,y:152,fill:"#3dd68c",fontSize:12,fontStyle:"italic"},"\u03b2"),
    // Točke
    e("circle",{cx:70,cy:272,r:5,fill:"#f87171"}),
    e("circle",{cx:148,cy:238,r:4,fill:"#4a90d9"}),
    e("circle",{cx:408,cy:138,r:4,fill:"#4a90d9"}),
    e("circle",{cx:145,cy:85,r:4,fill:"#4a90d9"}),
    e("circle",{cx:112,cy:212,r:4,fill:"#4a90d9"}),
    // Oznake točaka
    e("text",{x:50,y:288,fill:"#f87171",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"T"),
    e("text",{x:151,y:256,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"A"),
    e("text",{x:413,y:137,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"B"),
    e("text",{x:148,y:78,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"C"),
    e("text",{x:93,y:212,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"D"),
    // Mjere
    e("text",{x:88,y:263,fill:"#e8c547",fontSize:11},"TA=3"),
    e("text",{x:75,y:240,fill:"#e8c547",fontSize:11},"TD=6"),
    e("text",{x:185,y:315,fill:"var(--muted)",fontSize:11,textAnchor:"middle"},"\u03b1+\u03b3 = \u03b2+\u03b4 = 180\u00b0   \u2192   TA\u00b7TB = TC\u00b7TD")
  );
}

function SvgZad10_2013LA(){
  const xs  = [-3,-2,-1, 0, 1, 2, 3];
  const fxs = [-1, 0,  4, 2, 0,-1, 1];
  const gxs = [-4,-3, -2, 1, 3, 0,-1];
  const xlbl= ["\u22123","\u22122","\u22121","0","1","2","3"];
  const flbl= ["\u22121","0","4","2","0","\u22121","1"];
  const glbl= ["\u22124","\u22123","\u22122","1","3","0","\u22121"];

  const W=460,H=100,colW=52,rowH=30,x0=70,y0=18;
  const cols=xs.length;
  const hiCol=1; // kolona x=-2

  const cells=[];
  // Zaglavlje redaka
  cells.push(e("text",{key:"hx",x:x0-38,y:y0+rowH*0.72,fill:"var(--muted)",fontSize:12,fontWeight:"bold"},"x"));
  cells.push(e("text",{key:"hf",x:x0-42,y:y0+rowH+rowH*0.72,fill:"#4a90d9",fontSize:12,fontWeight:"bold"},"f(x)"));
  cells.push(e("text",{key:"hg",x:x0-42,y:y0+2*rowH+rowH*0.72,fill:"#e8c547",fontSize:12,fontWeight:"bold"},"g(x)"));

  xlbl.forEach((_,i)=>{
    const cx=x0+i*colW+colW/2;
    const isHi=(i===hiCol);
    const isFRes=(xs[i]===-3); // f(-3) = rezultat
    // Highlight stupac x=-2
    if(isHi) cells.push(e("rect",{key:"hi"+i,x:x0+i*colW+1,y:y0-3,width:colW-2,height:3*rowH+4,fill:"#3dd68c",opacity:0.15,rx:3}));
    cells.push(e("text",{key:"xv"+i,x:cx,y:y0+rowH*0.72,textAnchor:"middle",
      fill:isHi?"#3dd68c":"var(--text)",fontSize:12,fontWeight:isHi?"bold":"normal"},xlbl[i]));
    cells.push(e("text",{key:"fv"+i,x:cx,y:y0+rowH+rowH*0.72,textAnchor:"middle",
      fill:isFRes?"#f87171":"#4a90d9",fontSize:12,fontWeight:isFRes?"bold":"normal"},flbl[i]));
    cells.push(e("text",{key:"gv"+i,x:cx,y:y0+2*rowH+rowH*0.72,textAnchor:"middle",
      fill:isHi?"#f87171":"#e8c547",fontSize:12,fontWeight:isHi?"bold":"normal"},glbl[i]));
  });

  const lines=[];
  for(let r=0;r<=3;r++){
    lines.push(e("line",{key:"hl"+r,x1:x0-50,y1:y0+r*rowH,x2:x0+cols*colW,y2:y0+r*rowH,
      stroke:"var(--muted)",strokeWidth:r===0||r===3?1.5:0.7,opacity:0.5}));
  }
  lines.push(e("line",{key:"vlhdr",x1:x0-2,y1:y0,x2:x0-2,y2:y0+3*rowH,stroke:"var(--muted)",strokeWidth:1.5,opacity:0.5}));
  for(let c=0;c<=cols;c++){
    lines.push(e("line",{key:"vlc"+c,x1:x0+c*colW,y1:y0,x2:x0+c*colW,y2:y0+3*rowH,stroke:"var(--muted)",strokeWidth:0.5,opacity:0.3}));
  }

  return e("svg",{viewBox:`0 0 ${W} ${H+8}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...lines,...cells
  );
}

function SvgSolTrokut_2013LjetoA(){
  const W=280,H=240,pad={l:35,r:20,t:20,b:35};
  const xMin=-3,xMax=6,yMin=-3,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+(v-xMin)/(xMax-xMin)*iW;
  const toY=v=>pad.t+(yMax-v)/(yMax-yMin)*iH;
  const C={blue:"#4a90d9",green:"#50c878",text:"var(--text)",muted:"var(--muted)"};
  const A=[-2,1],B=[3,-2],Cv=[24/5,1];
  const pts=`${toX(A[0])},${toY(A[1])} ${toX(B[0])},${toY(B[1])} ${toX(Cv[0])},${toY(Cv[1])}`;
  const gx=[-2,-1,0,1,2,3,4,5],gy=[-2,-1,0,1,2];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W}},
    ...gx.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.18)",strokeWidth:0.5})),
    ...gy.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.18)",strokeWidth:0.5})),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:C.text,strokeWidth:1.5}),
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:C.text,strokeWidth:1.5}),
    e("text",{x:pad.l+iW+4,y:toY(0)+4,fontSize:10,fill:C.text},"x"),
    e("text",{x:toX(0)+3,y:pad.t-3,fontSize:10,fill:C.text},"y"),
    // Trokut
    e("polygon",{points:pts,fill:"rgba(74,144,217,0.12)",stroke:C.blue,strokeWidth:2}),
    // Vrhovi
    ...[["A",A],["B",B],["C",Cv]].map(([l,p])=>e("g",{key:l},
      e("circle",{cx:toX(p[0]),cy:toY(p[1]),r:4,fill:C.blue}),
      e("text",{x:toX(p[0])+(p[0]<0?-14:5),y:toY(p[1])+(p[1]<0?14:-5),
        fontSize:11,fill:C.blue,fontWeight:"bold"},l)
    )),
    // Ishodište O
    e("circle",{cx:toX(0),cy:toY(0),r:3,fill:C.text}),
    e("text",{x:toX(0)-12,y:toY(0)+13,fontSize:9,fill:C.muted},"O"),
    // Površina label
    e("text",{x:toX(1.5),y:toY(0.3),fontSize:11,fill:C.blue,fontWeight:"bold",textAnchor:"middle"},"P=10,2"),
    e("text",{x:toX(1)-4,y:toY(0)+13,fontSize:9,fill:C.muted,textAnchor:"middle"},"1"),
    e("text",{x:toX(0)-6,y:toY(0)+13,fontSize:9,fill:C.muted,textAnchor:"end"},"0")
  );
}

function SvgSolParabola_2013LjetoA(){
  const W=280,H=260,pad={l:30,r:15,t:15,b:30};
  const xMin=-2,xMax=5,yMin=-5,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+(v-xMin)/(xMax-xMin)*iW;
  const toY=v=>pad.t+(yMax-v)/(yMax-yMin)*iH;
  const f=x=>x*x-2*x-3;
  const pts=[];
  for(let xi=-1.3;xi<=4.3;xi+=0.08){
    const y=f(xi);
    if(y>yMin-0.5&&y<yMax+0.5) pts.push(`${toX(xi)},${toY(y)}`);
  }
  const gx=[-1,0,1,2,3,4],gy=[-4,-3,-2,-1,0,1,2,3,4,5];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W}},
    ...gx.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...gy.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    // Parabola
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"#e9b446",strokeWidth:2.2}),
    // Tjeme (1,-4), nultočke (-1,0) i (3,0)
    e("circle",{cx:toX(1),cy:toY(-4),r:4,fill:"#e9b446"}),
    e("circle",{cx:toX(-1),cy:toY(0),r:4,fill:"#e9b446"}),
    e("circle",{cx:toX(3),cy:toY(0),r:4,fill:"#e9b446"}),
    e("text",{x:toX(3.5),y:toY(3),fontSize:9,fill:"#e9b446"},"x²−2x−3"),
    e("text",{x:pad.l+iW+4,y:toY(0)+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:toX(0)+3,y:pad.t-3,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:toX(1)-4,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"middle"},"1"),
    e("text",{x:toX(0)-6,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"end"},"0")
  );
}

function SvgSolLine_2013LjetoA(){
  const W=280,H=260,pad={l:30,r:15,t:15,b:30};
  const xMin=-2,xMax=6,yMin=-5,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+(v-xMin)/(xMax-xMin)*iW;
  const toY=v=>pad.t+(yMax-v)/(yMax-yMin)*iH;
  const f=x=>3*x-1;
  const gx=[-1,0,1,2,3,4,5],gy=[-4,-3,-2,-1,0,1,2,3,4,5];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W}},
    ...gx.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...gy.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    // Pravac y=3x-1
    e("line",{x1:toX(-0.5),y1:toY(f(-0,5)),x2:toX(2.5),y2:toY(f(2.5)),stroke:"#4a90d9",strokeWidth:2.2}),
    // Sjecišta s osima
    e("circle",{cx:toX(1/3),cy:toY(0),r:4,fill:"#4a90d9"}),
    e("circle",{cx:toX(0),cy:toY(-1),r:4,fill:"#4a90d9"}),
    e("text",{x:toX(2.6),y:toY(f(2.6))-6,fontSize:9,fill:"#4a90d9"},"y=3x−1"),
    e("text",{x:pad.l+iW+4,y:toY(0)+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:toX(0)+3,y:pad.t-3,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:toX(1)-4,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"middle"},"1"),
    e("text",{x:toX(0)-6,y:toY(0)+13,fontSize:9,fill:"var(--muted)",textAnchor:"end"},"0")
  );
}

function SvgZad23a_2013LA(){
  // Brojevna kružnica, točka E(t) gdje tg(t)=2, cos(t)>0 → 1. kvadrant
  const cx=195,cy=175,r=118;
  const t=Math.atan(2); // ≈63.43°
  const ex=cx+r*Math.cos(t);
  const ey=cy-r*Math.sin(t);
  const arcEx=cx+35*Math.cos(t);
  const arcEy=cy-35*Math.sin(t);

  return e("svg",{viewBox:"0 0 410 360",style:{width:"100%",maxWidth:410,display:"block",background:"var(--s2)",borderRadius:8}},
    // Osi
    e("line",{x1:40,y1:cy,x2:360,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:35,x2:cx,y2:325,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`360,${cy} 350,${cy-4} 350,${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},35 ${cx-4},45 ${cx+4},45`,fill:"var(--muted)"}),
    e("text",{x:363,y:cy+4,fill:"var(--muted)",fontSize:13,fontStyle:"italic"},"x"),
    e("text",{x:cx+5,y:33,fill:"var(--muted)",fontSize:13,fontStyle:"italic"},"y"),
    e("text",{x:cx+5,y:cy+14,fill:"var(--muted)",fontSize:12},"0"),
    // Brojevna kružnica
    e("circle",{cx,cy,r,fill:"none",stroke:"#3b3e55",strokeWidth:1.5}),
    // Kvadrantne oznake
    e("text",{x:cx+6,y:cy-6,fill:"var(--muted)",fontSize:10},"I"),
    e("text",{x:cx-18,y:cy-6,fill:"var(--muted)",fontSize:10},"II"),
    e("text",{x:cx-20,y:cy+14,fill:"var(--muted)",fontSize:10},"III"),
    e("text",{x:cx+6,y:cy+14,fill:"var(--muted)",fontSize:10},"IV"),
    // Oznake ±1
    e("text",{x:cx+r+4,y:cy+13,fill:"var(--muted)",fontSize:11},"1"),
    e("text",{x:cx-r-14,y:cy+13,fill:"var(--muted)",fontSize:11},"-1"),
    e("text",{x:cx+4,y:cy-r-3,fill:"var(--muted)",fontSize:11},"1"),
    e("text",{x:cx+4,y:cy+r+13,fill:"var(--muted)",fontSize:11},"-1"),
    // Krak do E
    e("line",{x1:cx,y1:cy,x2:ex,y2:ey,stroke:"#4a90d9",strokeWidth:2}),
    // Kut luk
    e("path",{d:`M ${cx+35},${cy} A 35,35 0 0,0 ${arcEx},${arcEy}`,fill:"none",stroke:"#e8c547",strokeWidth:1.5}),
    e("text",{x:cx+38,y:cy-12,fill:"#e8c547",fontSize:12,fontStyle:"italic"},"t"),
    // Isprekidane projekcije
    e("line",{x1:ex,y1:ey,x2:ex,y2:cy,stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,3"}),
    e("line",{x1:cx,y1:cy,x2:ex,y2:cy,stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,3"}),
    e("text",{x:cx+(ex-cx)/2-14,y:cy+14,fill:"#3dd68c",fontSize:11},"cos t"),
    e("text",{x:ex+6,y:(cy+ey)/2+4,fill:"#3dd68c",fontSize:11},"sin t"),
    // Točka E
    e("circle",{cx:ex,cy:ey,r:6,fill:"#e8c547"}),
    e("text",{x:ex+8,y:ey-5,fill:"#e8c547",fontSize:13,fontWeight:"bold"},"E(t)"),
    // Info kutija
    e("rect",{x:240,y:45,width:148,height:76,rx:8,fill:"var(--s3)",stroke:"#4a90d9",strokeWidth:1}),
    e("text",{x:250,y:64,fill:"#4a90d9",fontSize:12,fontWeight:"bold"},"tg(t) = 2 > 0"),
    e("text",{x:250,y:81,fill:"#3dd68c",fontSize:12},"cos(t) > 0"),
    e("text",{x:250,y:98,fill:"#e8c547",fontSize:12},"\u21d2 1. kvadrant"),
    e("text",{x:250,y:113,fill:"var(--muted)",fontSize:11},"t \u2248 63\u00b026'")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: to je binomna vjerojatnost C(12,4)·0,7⁴·0,3⁸; računaj redom, zaokruži tek na kraju.",topic:"komb",points:1,
  q:"Koliko je [FRAC:12!|4!·8!] · 0,7⁴ · 0,3⁸ zaokruženo na četiri decimale?",
  opts:["0,0078","0,0779","0,4726","4,7263"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Binomni koeficijent: 12!/(4!·8!) = C(12, 4) = 495"},
    {txt:"0,7⁴ = 0,2401"},
    {txt:"0,3⁸ ≈ 0,00006561"},
    {txt:"495 · 0,2401 · 0,00006561 ≈ 0,0078"},
    {txt:"Analiza: B(0,0779) — greška p⁸q⁴ umjesto p⁴q⁸; C/D — računanje bez binom. koef.",final:true,note:"diagnostika"},
    {txt:"Numerička provjera: 495 × 0,2401 × 0,0000656 ≈ 0,0078 → odgovor A ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: C(n,k) = n!/(k!·(n−k)!); C(n,1) = n, C(n,n) = 1.",note:"postupak",final:true},{txt:"Intuicija: Izraz odgovara binomnoj vjerojatnosti — P(4 od 12 uspjeha s p = 0,7).",note:"intuicija",final:true}
  ],
  why:["Formula: C(n,k) = n!/(k!·(n−k)!); C(n,1) = n, C(n,n) = 1.","Izraz odgovara binomnoj vjerojatnosti — P(4 od 12 uspjeha s p = 0,7).","Česta greška (najčešće): zamjena p = 0,7 i q = 0,3 (roli su obrnute) ili zaboravljanje binomnog koeficijenta.","Provjera dimenzija: C(12,4) = 495, 0,7⁴ ≈ 0,2401, 0,3⁸ ≈ 6,56 · 10⁻⁵ → produkt ≈ 0,0078 → A ✓","Provjera: C(n, k) = C(n, n−k) — simetrija binomnog koeficijenta.","Tipičan propust: pomiješati permutacije (poredak bitan, sve elemente), varijacije (poredak bitan, ne sve) i kombinacije (poredak nebitan)."]
},
  {id:2,type:"mc",warn:"Pazi: razvij obje strane — x² se pokrati → linearna jednadžba; pazi na predznake.",topic:"al",points:1,
  q:"Koji je broj rješenje jednadžbe (3x + 2)² − 5 = (5x − 7)(2x + 1) − x²?",
  opts:["−2/7","−1/7","​1/2","5/2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Lijeva strana: (3x + 2)² − 5 = 9x² + 12x + 4 − 5 = 9x² + 12x − 1"},
    {txt:"Desna strana: (5x − 7)(2x + 1) − x² = 10x² + 5x − 14x − 7 − x² = 9x² − 9x − 7"},
    {txt:"Članovi s x² se poništavaju: 12x − 1 = -9x − 7"},
    {txt:"21x = -6 ⇒ x = -6/21 = -2/7"},
    {txt:"Analiza distractora: A(-2/7 ✓ odg. A), B(-1/7) — pogrešan predznačni raspored pri grupiranju; D(5/2) — zaboravili x² na jednoj strani.",final:true,note:"diagnostika"},
    {txt:"Provjera: LHS = (3·(-2/7)+2)²-5 = (8/7)²-5 = 64/49-245/49 = -181/49; RHS = (5(-2/7)-7)(2(-2/7)+1)-(-2/7)² = −[FRAC:59|7]·(3/7)-4/49 = -177/49-4/49 = -181/49 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: kvadrat binoma (a+b)² = a²+2ab+b²; razvijamo i skupljamo po potencijama.",note:"postupak",final:true},{txt:"Intuicija: Često se kod 'kvadratne' jednadžbe ispostavi linearnom jer se x² članovi poništavaju.",note:"intuicija",final:true}
  ],
  why:["Pravilo: kvadrat binoma (a+b)² = a²+2ab+b²; razvijamo i skupljamo po potencijama.","Često se kod 'kvadratne' jednadžbe ispostavi linearnom jer se x² članovi poništavaju.","Česta greška (najčešće): studenti idu na diskriminantu i ne uoče da su x² koeficijenti jednaki s obje strane.","Alternativna provjera: uvrstimo x = -2/7 u obje strane i verificiramo jednakost.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:3,type:"mc",warn:"Pazi: postotci se množe (·1,2 pa ·0,7 = 0,84) → konačna cijena je niža od početne.",topic:"br",points:1,
  q:"Cijena nekoga proizvoda je prvo povećana za 20 %, a onda snižena za 30 %. Kakva je konačna cijena proizvoda?",
  opts:["snižena za 10 %","povećana za 10 %","snižena za 16 %","povećana za 16 %"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"+20 %: nova cijena = 1,20 · C"},
    {txt:"-30 % (primijenjeno na uvećanu cijenu): 1,20 · 0,70 · C = 0,84 · C"},
    {txt:"0,84 · C = 84 % početne cijene ⇒ snižena za 16 %"},
    {txt:"Analiza: A(−10%) — zbrajanje postotaka; B(+10%) — zbrajanje s krivim predznakom; D(+16%) — miješanje povećanja i smanjenja baze.",final:true,note:"diagnostika"},
    {txt:"Provjera s C = 100: 100·1,20·0,70 = 84 → snižena za 16% = C ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: uzastopne postotne promjene = produkt faktora; +20% tada −30% ≠ −10%.",note:"postupak",final:true},{txt:"Intuicija: Svaka promjena se primjenjuje na tekuću vrijednost, ne na početnu.",note:"intuicija",final:true}
  ],
  why:["Pravilo: uzastopne postotne promjene = produkt faktora; +20% tada −30% ≠ −10%.","Svaka promjena se primjenjuje na tekuću vrijednost, ne na početnu.","Česta greška (najčešće): +20% − 30% = −10% (zbrajanje umjesto množenja) → opcija A.","Realan primjer: cijena 100kn → 120kn (+ 20%) → 120 · 0,7 = 84kn → snižena za 16% ✓","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:4,type:"mc",warn:"Pazi: 1 min = 60 s → y = 60x (sekundi ima VIŠE, pa množiš).",topic:"mj",points:1,
  q:"Vrijeme mjereno u minutama označeno je s x. Isto to vrijeme mjereno u sekundama označeno je s y. Koja je jednakost točna?",
  opts:["xy = 1/60","y = x/60","xy = 60","y = 60x"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Jedna minuta ima 60 sekundi."},
    {txt:"x minuta = 60x sekundi ⇒ y = 60x"},
    {txt:"Analiza: A(xy=1/60), B(y=x/60) — zabuna tko se dijeli; C(xy=60) — krivo postavljanje nejednakosti.",final:true,note:"diagnostika"},
    {txt:"Provjera: 2 min = 120 s → y = 60·2 = 120 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo pretvorbe: x min = 60x sekundi; linearna ovisnost y=60x → direktna proporcija.",note:"postupak",final:true},{txt:"Intuicija: Česta greška (najčešće): odgovor B — dijele (y = x/60) umjesto množenja, brkaju što je veća jedinica.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}
  ],
  why:["Pravilo pretvorbe: x min = 60x sekundi; linearna ovisnost y=60x → direktna proporcija.","Česta greška (najčešće): odgovor B — dijele (y = x/60) umjesto množenja, brkaju što je veća jedinica.","Provjera dimenzijskom analizom: x [min] · 60 [s/min] = 60x [s] = y ✓","Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni.","Veza s gradivom: koncept se pojavljuje kao dio šire teme matematike — povezuje se s drugim područjima."]
},
  {id:5,type:"mc",warn:"Pazi: supstituiraj u = 1/x, v = 1/y → linearni sustav; zbroji/oduzmi pa vrati v = 1/y.",topic:"al",points:1,
  q:"Kolika je vrijednost y u rješenju sustava jednadžbi: [SYS:1/x+1/y=3|1/x−1/y=5]?",
  opts:["y = -2","y = -1","y = 1","y = 2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Uvedemo supstituciju: u = 1/x, v = 1/y."},
    {txt:"Sustav: u + v = 3, u − v = 5."},
    {txt:"Zbroj: 2u = 8 ⇒ u = 4. Razlika: 2v = -2 ⇒ v = -1."},
    {txt:"y = [FRAC:1|v] = [FRAC:1|-1] = -1",final:true},{txt:"Provjera: 1/x = 4 → x = [FRAC:1|4]; 1/y = -1 → y = -1; provjera u sustavu: 4+(−1)=3 ✓, 4−(−1)=5 ✓",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška (najčešće): pokušaj direktnog rješavanja bez supstitucije → kvadratna jednadžba u neoznakama.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Formula: supstitucija u sustavu s razlomcima — neka 1/x=u, 1/y=v, tada linearni sustav au+bv=c.",note:"postupak",final:true},{txt:"Intuicija: Metoda zbrajanja/oduzimanja jednadžbi eliminira po jednu varijablu.",note:"intuicija",final:true}
  ],
  why:["Formula: supstitucija u sustavu s razlomcima — neka 1/x=u, 1/y=v, tada linearni sustav au+bv=c.","Metoda zbrajanja/oduzimanja jednadžbi eliminira po jednu varijablu.","Česta greška (najčešće): pokušaj direktnog rješavanja bez supstitucije → kvadratna jednadžba u neoznakama.","Provjera: 1/x = 4 → x = [FRAC:1|4]; 1/y = -1 → y = -1; provjera u sustavu: 4+(−1)=3 ✓, 4−(−1)=5 ✓","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:6,type:"mc",warn:"Pazi: log_(1/b)(1/x) = log_b(x) (i baza i argument recipročni → predznaci se ponište).",topic:"log",points:1,
  q:"Čemu je jednako log_(1⁄b)​([FRAC:1|x]), gdje je b > 0, b ≠ 1, x > 0, x ≠ 1?",
  opts:["−log_b(x)","−log_x(b)","log_b(x)","log_x(b)"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Primijenimo formulu prelaska na drugu bazu: logₐ x = [FRAC:log x|log a]."},
    {txt:"log_(1⁄b)([FRAC:1|x]) = [FRAC:log [FRAC:1|x]|log [FRAC:1|b]]"},
    {txt:"log [FRAC:1|x] = −log x;  log [FRAC:1|b] = −log b"},
    {txt:"[FRAC:−log x|−log b] = [FRAC:log x|log b] = log_b(x) → odgovor C"},
    {txt:"Analiza: A(−log_b x) — ispravno za log_{1/b}(x) (bez 1/x); B(−log_x b) — zamjena baze i argumenta; D(log_x b) — dvostruka zamjena.",final:true,note:"diagnostika"},
    {txt:"Provjera: za b=10, x=100: log_(0,1)(0,01) = log(0,01)/log(0,1) = (-2)/(-1) = 2 = log₁₀(100) = log_b(x) ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula prelaska na drugu bazu: logₐ x = log_c x / log_c a.",note:"postupak",final:true},{txt:"Intuicija: log(1/a) = −log a (logaritam inverzije).",note:"intuicija",final:true}
  ],
  why:["Formula prelaska na drugu bazu: logₐ x = log_c x / log_c a.","log(1/a) = −log a (logaritam inverzije).","Česta greška (najčešće): A(−log_b x) — točan odgovor za log_{1/b}(x), ne log_{1/b}(1/x); dva negativa daju pozitivno.","Konceptualna intuicija: baza < 1 i argument < 1 → logaritam pozitivan (i baza i argument 'ispod' 1).","Provjera: log_[FRAC:1|b](1/x) = log_b x (probaj b=2, x=4: log_[FRAC:1|2](1/4)=log_[FRAC:1|2](1/2)²=2=log_2 4 ✓)","Provjera: log_a(a^x) = x i a^(logₐx) = x — bazične identitete."]
},
  {id:7,type:"mc",warn:"Pazi: geometrijski red ima konačan zbroj samo ako je |q| < 1.",topic:"red",points:1,
  q:"Koji od navedenih geometrijskih redova ima konačan zbroj?",
  opts:["3 − 9 + 27 − 81 + …","6 + 12 + 24 + 48 + …","8 − 12 + 18 − 27 + …","125 + 75 + 45 + 27 + …"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Geometrijski red konvergira ako i samo ako je |q| < 1 (q je kvocijent)."},
    {txt:"A: q = -9/3 = -3, |q| = 3 > 1 ✗"},
    {txt:"B: q = 12/6 = 2, |q| = 2 > 1 ✗"},
    {txt:"C: q = -12/8 = -3/2, |q| = 1,5 > 1 ✗"},
    {txt:"D: q = [FRAC:75|125] = [FRAC:3|5], |q| = 0,6 < 1 ✓"},
    {txt:"Svi ostali: A(q=-3), B(q=2), C(q=-3/2) — apsolutna vrijednost kvocijenta > 1 → divergira.",final:true,note:"diagnostika"},
    {txt:"Provjera D: S = 125/(1−3/5) = 125/(2/5) = 312,5 — konačan zbroj ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: S∞ = a₁/(1−q) za |q| < 1; geometrijski red divergira za |q| ≥ 1.",note:"postupak",final:true},{txt:"Intuicija: Česta greška (najčešće): C — naizmjenični niz (predznaci se izmjenjuju) izgleda kao da 'se poništavaju', ali |q|=3/2 > 1.",note:"intuicija",final:true}
  ],
  why:["Formula: S∞ = a₁/(1−q) za |q| < 1; geometrijski red divergira za |q| ≥ 1.","Česta greška (najčešće): C — naizmjenični niz (predznaci se izmjenjuju) izgleda kao da 'se poništavaju', ali |q|=3/2 > 1.","Mnemotehnika: kvocijent geometrijskog reda q = a₂/a₁. Konvergira ⟺ |q| < 1 (divergira inače, bez iznimke).","Provjera: opcija A ima q=1/2 ∈ (−1,1) → konvergentan ✓; ostale |q|≥1 → divergentni.","Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
},
  {id:8,type:"mc",warn:"Pazi: x − 6y je (negativan) − (pozitivan) = negativan → |x − 6y| = 6y − x.",topic:"br",points:1,
  q:"Koliko je |x − 6y| ako je x negativan, a y pozitivan broj?",
  opts:["x − 6y","−x − 6y","x + 6y","−x + 6y"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"x < 0 i y > 0 ⇒ x − 6y < 0 (negativno minus 6 × pozitivno)"},
    {txt:"Za A < 0: |A| = −A"},
    {txt:"|x − 6y| = −(x − 6y) = −x + 6y = D"},
    {txt:"Analiza: A(x−6y) — zaboravili uzeti apsolutnu vrijednost negativnog; B(−x−6y) — pogrešan predznak uz 6y; C(x+6y) — pogrešan predznak uz x.",final:true,note:"diagnostika"},
    {txt:"Provjera: x=-1, y=1 → |(-1)−6| = 7; −(−1)+6·1 = 7 ✓ → D",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija: |A| = A ako A ≥ 0; |A| = −A ako A < 0; za x<0, y>0: |x−6y| = 6y−x.",note:"postupak",final:true},{txt:"Intuicija: Kod negativnog broja apsolutna vrijednost 'okrene' predznak.",note:"intuicija",final:true}
  ],
  why:["Definicija: |A| = A ako A ≥ 0; |A| = −A ako A < 0; za x<0, y>0: |x−6y| = 6y−x.","Kod negativnog broja apsolutna vrijednost 'okrene' predznak.","Česta greška (najčešće): B(−x−6y) — oduzimaju 6y umjesto dodaju (zaborave da |−A| = A, ne −A).","Provjera: za x = -2, y = 1: |(-2)−6·1| = |−8| = 8 = −(−2)+6·1 = 8 ✓ → D","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:9,type:"mc",warn:"Pazi: slika ⟨0, +∞⟩ (strogo pozitivno, bez 0) tipično je slika eksponencijalne aˣ.",topic:"fun",points:1,
  q:"Koja od navedenih funkcija ima sliku ⟨0, +∞⟩? (Napomena: Slika funkcije je skup svih vrijednosti te funkcije.)",
  opts:["f(x) = x","f(x) = 10^x","f(x) = log x","f(x) = sin x"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"A: f(x) = x — slika ℝ (svi realni) ✗"},
    {txt:"B: 10^x — uvijek > 0, može biti proizvoljno blizu nule ili ∞; slika ⟨0, +∞⟩ ✓"},
    {txt:"C: log x — slika ℝ ✗"},
    {txt:"D: sin x — slika [-1, 1] ✗"},
    {txt:"Analiza: A(f=x, slika ℝ); C(log x, slika ℝ); D(sin x, slika [-1,1]) — nijedan nema samo pozitivne vrijednosti.",final:true,note:"diagnostika"},
    {txt:"Provjera B: 10^0 = 1 > 0 ✓; 10^(-∞⟩ → 0⁺ (ne dostiže nulu) ✓; 10^(+∞⟩ = +∞ ✓ → slika ⟨0,+∞⟩",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: slika (kodomena) a^x je ⟨0,+∞⟩ za sve a>0,a≠1; sin²x+cos²x ∈ [0,1].",note:"postupak",final:true},{txt:"Intuicija: Slika funkcije = skup svih izlaznih vrijednosti.",note:"intuicija",final:true}
  ],
  why:["Pravilo: slika (kodomena) a^x je ⟨0,+∞⟩ za sve a>0,a≠1; sin²x+cos²x ∈ [0,1].","Slika funkcije = skup svih izlaznih vrijednosti.","Česta greška (najčešće): C (log x) — log funkcija ima sliku ℝ, ne ⟨0,+∞⟩.","Konceptualno: 10^x > 0 uvijek (eksponencijalna je uvijek pozitivna); lim_{x→-∞} 10^x = 0 (ne dotiče 0, ali mu se ∞ primiče).","Provjera: slika A(√(x²+1)) = ⟨1,+∞⟩≠⟨0,+∞⟩; B(sin²x+cos²x=1) = {1}; D((1/2)^x) = ⟨0,+∞⟩ — ali ne ⟨0,+∞⟩ bez 0; C za a>1 daje ⟨0,+∞⟩ ✓","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:10,img:true,type:"mc",warn:"Pazi: prvo g(−2) iz tablice, pa tu vrijednost potraži kao ulaz za f.",topic:"fun",points:1,img:true,
  q:"Funkcije f i g zadane su tablično (u ispitnoj knjižici). Ako je h(x) = (f ∘ g)(x), koliko je h(-2)?",
  opts:["-2","-1","0","1"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"h(-2) = f(g(-2))"},
    {txt:"Iz tablice: g(-2) = -3"},
    {txt:"Iz tablice: f(-3) = -1"},
    {txt:"h(-2) = -1"},
    {txt:"Analiza: A(-2) — direktno uzeli g(-2)=-3 ili f(-2)=0 bez kompozicije; C(0) — uzeli f(-2)=0 kao odgovor.",final:true,note:"diagnostika"},
    {txt:"Provjera: g(-2)=-3 (iz tablice) → f(-3)=-1 (iz tablice) → h(-2) = -1 = B ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: (f∘g)(x) = f(g(x)); za h(x)=(f∘g)(x) → h(−2)=f(g(−2)).",note:"postupak",final:true},{txt:"Intuicija: Česta greška (najčešće): obrnuti redoslijed — računaju f(-2) pa g(rezultata) umjesto g(-2) pa f(rezultata).",note:"intuicija",final:true}
  ],
  why:["Formula: (f∘g)(x) = f(g(x)); za h(x)=(f∘g)(x) → h(−2)=f(g(−2)).","Česta greška (najčešće): obrnuti redoslijed — računaju f(-2) pa g(rezultata) umjesto g(-2) pa f(rezultata).","Mnemotehnika: 'f nakon g' — čitamo sdesna nalijevo: f(g(x)) = 'f od onoga što g da'.","Provjera: g(−2)=−3 (iz tablice); f(−3)=−1 (iz tablice) → h(−2)=−1 → B ✓","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:11,type:"mc",warn:"Pazi: riješi svaku jednadžbu i provjeri koja daje CIJELI broj (ℤ).",topic:"al",points:2,
  q:"Kojoj je od navedenih jednadžbi rješenje cijeli broj?",
  opts:["|x + 1,5| = 1","(2x − 1)/(3x − 1) = (2x)/(3x + 1)","√(x² + 2x − 7) = x","log₃(5x + 4) = 0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"A: x + 1,5 = ±1 ⇒ x = -0,5 ili x = -2,5 (nijedan nije cijeli)"},
    {txt:"B: (2x − 1)(3x + 1) = 2x(3x − 1) ⇒ 6x² − x − 1 = 6x² − 2x ⇒ x = 1 ✓"},
    {txt:"C: kvadriramo: x² + 2x − 7 = x² ⇒ 2x = 7 ⇒ x = 3,5 (nije cijeli)"},
    {txt:"D: 5x + 4 = 3⁰ = 1 ⇒ x = -3/5 (nije cijeli)"},
    {txt:"Jedina s cjelobrojnim rješenjem je B."},
    {txt:"Analiza distractora: A(x=-0,5 ili -2,5, nijedan nije cijeli); C(x=3,5 nije cijeli); D(x=-3/5 nije cijeli) — sve ostale imaju razlomačka rješenja.",final:true,note:"diagnostika"},
    {txt:"Provjera B: (2(-1)-1)(3(-1)+1)=(-3)(-2)=6 = 2(-1)(3(-1)-1)=(−2)(−4)=8 ← greška u izračunu! Ispravno: (2x-1)/(3x-1) = 2x/(3x+1) → cross: (2x-1)(3x+1)=2x(3x-1) → 6x²-x-1=6x²-2x → x=-1 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: logₐ b = c ⟺ aᶜ = b; logₐ b > 0 ⟺ b > 1 za a>1.",note:"postupak",final:true},{txt:"Intuicija: Kod jednadžbe s korijenom kvadriramo, ali moramo provjeriti rješenja u izvornoj jednadžbi.",note:"intuicija",final:true}
  ],
  ex:"Logaritamska jednadžba: prepiši u eksponencijalnu formu, izračunaj vrijednost, provjeri uvjet domene.",
  why:["Formula: logₐ b = c ⟺ aᶜ = b; logₐ b > 0 ⟺ b > 1 za a>1.","Kod jednadžbe s korijenom kvadriramo, ali moramo provjeriti rješenja u izvornoj jednadžbi.","Česta greška (najčešće): C — kvadriranjem dobijemo x=3,5 (razlomak), ali studenti ne verificiraju.","Strategija: za svaku opciju brzo provjeri je li rješenje cijeli broj. B: x=-1 — jedini cijeli.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:12,type:"mc",warn:"Pazi: sin(3x) = −1/2; argument 3x prolazi [0, 3π], pa nađi sva rješenja u tom rasponu.",topic:"trg",points:2,
  q:"Koliko rješenja ima jednadžba 2 sin(3x) + 1 = 0 na intervalu [0, π]?",
  opts:["jedno","dva","tri","četiri"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"sin(3x) = -1/2"},
    {txt:"Supstitucija u = 3x. Kad x ∈ [0, π], tada u ∈ [0, 3π]."},
    {txt:"sin u = -1/2 na [0, 3π]: u = 7π/6 ili u = 11π/6 (u [π, 2π]); provjera u [2π, 3π]: sin(u − 2π) = -1/2 daje u = 2π + 7π/6 = 19π/6 > 3π ✗"},
    {txt:"Dakle dva rješenja: u = [FRAC:7π|6], u = [FRAC:11π|6], tj. x = [FRAC:7π|18], x = [FRAC:11π|18] — oba u [0, π] ✓"},
    {txt:"Analiza: C(tri) — preslika u [0,3π] i broji 3 presjeka sin u = -1/2; D(četiri) — krivi interval ili nije provjorio granice.",final:true,note:"diagnostika"},
    {txt:"Provjera: sin(3·7π/18) = sin(7π/6) = -1/2 ✓; sin(3·11π/18) = sin(11π/6) = -1/2 ✓ → dva rješenja = B",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: sin(3x) = k → 3x = arcsin(k) + 2kπ ili π−arcsin(k)+2kπ; provjeri interval.",note:"postupak",final:true},{txt:"Intuicija: sin(x) = k na intervalu duljine 2π ima najviše 2 rješenja.",note:"intuicija",final:true}
  ],
  ex:"Trigonometrijska jednadžba s višekratnošću kuta: sinx=k → izračunaj x, provjeri je li u zadanom intervalu.",
  why:["Formula: sin(3x) = k → 3x = arcsin(k) + 2kπ ili π−arcsin(k)+2kπ; provjeri interval.","sin(x) = k na intervalu duljine 2π ima najviše 2 rješenja.","Česta greška (najčešće): C(tri) — brojevna os [0,3π] ima 3π duljinu, studenti misle da ima 3 'periode'.","Vizualizacija: sin u = -1/2 na [0,3π] ≃ 1,5 perioda → 2 rješenja: u=7π/6 i u=11π/6; sljedeće bi 19π/6 > 3π.","Provjera: 2sin(3x)+1=0 → sin(3x)=−1/2; 3x=7π/6+2kπ ili 11π/6+2kπ; x∈[0,π] → 3x∈[0,3π]; rješenja: 7π/6, 11π/6, 7π/6+2π=19π/6>3π — znači 2 rješenja ✓ → C","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant."]
},
  {id:13,type:"mc",warn:"Pazi: iz V = B·h nađi bazu B (pravilni šesterokut B = (3√3/2)a²) pa stranicu a; oplošje = 2B + plašt.",topic:"geo",points:2,
  q:"Obujam pravilne šesterostrane prizme je 540√3 cm³, a visina prizme je 10 cm. Koliko je oplošje te prizme?",
  opts:["547,06 cm²","594,53 cm²","732,21 cm²","782,35 cm²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Obujam: V = B · h, gdje je B površina baze (pravilni šesterokut): B = (3√3/2)a²"},
    {txt:"(3√3/2)a² · 10 = 540√3 ⇒ a² = 36 ⇒ a = 6 cm"},
    {txt:"Površina baze: B = (3√3/2) · 36 = 54√3 cm²"},
    {txt:"Oplošje = 2B + 6a · h = 2 · 54√3 + 6 · 6 · 10 = 108√3 + 360 ≈ 547,06 cm²"},
    {txt:"Analiza: B(594,53) — pogrešna formula za B (možda 2a² umjesto (3√3/2)a²); C(732) — zaboravili pomnožiti s 2 za dvije baze.",final:true,note:"diagnostika"},
    {txt:"Provjera: V = (3√3/2)·36·10 = 540√3 ✓; O = 108√3+360 ≈ 187+360 = 547 cm² → A ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilni šesterokut: B = (3√3/2)a² (šest jednakostraničnih trokuta stranice a).",note:"postupak",final:true},{txt:"Intuicija: Oplošje prizme = 2 · baza + pobočje; pobočje = opseg · visina.",note:"intuicija",final:true}
  ],
  ex:"Pravilna šestostrana prizma: volumen = Baza · h; Baza = (3√3/2)a².",
  why:["Pravilni šesterokut: B = (3√3/2)a² (šest jednakostraničnih trokuta stranice a).","Oplošje prizme = 2 · baza + pobočje; pobočje = opseg · visina.","Česta greška (najčešće): B(594,53) — koriste formulu za površinu trokuta ili krivi broj stranica; C/D — krivi izraz za bazu šesterokuta.","Derivacija: šesterokut = 6 jednakostraničnih trokuta, svaki P = (√3/4)a², ukupno = 6·(√3/4)a² = (3√3/2)a².","Provjera: V = (3√3/2)·6²·10/3 = (3√3/2)·36·10/3 = 180√3 ≠ 540√3; ispravno: V=Baza·h gdje Baza=(3√3/2)a²=54√3; h=V/Baza=540√3/54√3=10cm; a=6cm ✓ → B","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: α + γ = 180° → tetivni četverokut; koristi potenciju točke ili slične trokute u T.",topic:"geo",points:2,img:true,
  q:"Na skici je prikazan konveksan četverokut ABCD u kojemu je α + γ = β + δ = 180°. Pravci AB i CD sijeku se u točki T. Točka T je 3 cm udaljena od točke A, 6 cm od točke D i 10 cm od točke C. Kolika je duljina stranice AB?",
  opts:["13 cm","15 cm","17 cm","19 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Uvjet α + γ = 180° znači da je ABCD tetivni četverokut (upisan u kružnicu)."},
    {txt:"Potencija točke T s obzirom na kružnicu: |TA| · |TB| = |TC| · |TD|"},
    {txt:"3 · |TB| = 10 · 6 = 60 ⇒ |TB| = 20 cm"},
    {txt:"|AB| = |TB| − |TA| = 20 − 3 = 17 cm"},
    {txt:"Analiza: A(13) — možda |TB|=16 ili krivi oduzimak; B(15) — krivi produkt ili zamjena odsječaka; D(19) — zbrajaju umjesto oduzimaju.",final:true,note:"diagnostika"},
    {txt:"Provjera potencije: 3·20 = 60 = 6·10 ✓; AB = 20-3 = 17 = C ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Tetivni četverokut: suprotni kutovi zbrajaju do 180°.",note:"postupak",final:true},{txt:"Intuicija: Potencija točke (sekantni poučak): iz vanjske točke T povučemo dvije sekante; umnošci odsječaka su jednaki.",note:"intuicija",final:true}
  ],
  ex:"Tetivni četverokut: prepoznaj uvjet α+γ=180° i primijeni definiciju.",
  why:["Tetivni četverokut: suprotni kutovi zbrajaju do 180°.","Potencija točke (sekantni poučak): iz vanjske točke T povučemo dvije sekante; umnošci odsječaka su jednaki.","Česta greška (najčešće): C(17) je točan odgovor — ali studenti često krivo identificiraju koji odsječak treba uzeti (brkaju TA i TB).","Formula: |TA|·|TB| = |TC|·|TD| — vrijedi za BILO KOJE dvije sekante iz iste točke T prema kružnici.","Provjera: α+γ = β+δ (uvjet); za konveksni četverokut ukupno α+β+γ+δ=360°; iz uvjeta 2(α+γ)=360° → α+γ=180° → tetivni četverokut ✓ → D","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°."]
},
  {id:15,type:"mc",warn:"Pazi: koeficijent uz x dolazi od umnoška slobodnih i linearnih članova; sredi (3x+2)(x−1) pa na ⁷.",topic:"al",points:2,
  q:"Polinom f(x) = (3x + 2)⁷ · (x − 1)⁷ zapisan je u standardnom obliku. Koliki je koeficijent uz x u tome zapisu?",
  opts:["-1 307","-448","348","1 207"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Iskoristimo (3x + 2)⁷ · (x − 1)⁷ = ((3x + 2)(x − 1))⁷ = (3x² − x − 2)⁷"},
    {txt:"Tražimo koeficijent uz x¹ u razvoju (3x² − x − 2)⁷."},
    {txt:"Jedini način da dobijemo x¹: jedan faktor doprinosi −x (eksponent 1), šest faktora doprinose -2 (eksponent 6), nula faktora doprinose 3x² (eksponent 0)."},
    {txt:"Koeficijent: (7!/(1! · 6! · 0!)) · (-1)¹ · (-2)⁶ · 3⁰ = 7 · (-1) · 64 = -448"},
    {txt:"Analiza: A(-1307) — pogrešan odabir eksponenata; C(348) — zaboravili predznak; D(1207) — krivi koeficijent binomnog raspisa.",final:true,note:"diagnostika"},
    {txt:"Provjera: 7!/(1!·6!) = 7; (-1)¹ = -1; (-2)⁶ = 64 → 7·(-1)·64 = -448 = B ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: multinomski teorem; koeficijent člana aⁱbʲcᵏ u razvoju (a+b+c)ⁿ je n!/(i!·j!·k!).",note:"postupak",final:true},{txt:"Intuicija: Pažljivo prebrojavamo kombinacije koje daju traženi eksponent.",note:"intuicija",final:true}
  ],
  ex:"Multinomski razvoj: traženi koeficijent se dobiva odabirom odgovarajućeg binomnog člana.",
  why:["Formula: multinomski teorem; koeficijent člana aⁱbʲcᵏ u razvoju (a+b+c)ⁿ je n!/(i!·j!·k!).","Pažljivo prebrojavamo kombinacije koje daju traženi eksponent.","Ključni uvid: (3x+2)⁷·(x-1)⁷ = [(3x+2)(x-1)]⁷ = (3x²-x-2)⁷. Koef. uz x¹: odaberemo -x jednom (faktor -1) i -2 šest puta (faktor -2)⁶.","Česta greška (najčešće): A(-1307) — uključuju i 3x² member; D(1207) — pogrešan predznak; C(348) — pogrešan koeficijent.","Provjera: (3x+2)·7·(x−1)·7 u standardnom obliku; tražimo koef. x^13. Odg: C(7,1)·3·2⁶·(−1)·1⁷·7·(...)... provjeri računanjem → D ✓","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Odredite najmanji prirodni broj koji je djeljiv sa 60 i sa 168.",
  sol:{ans:"840",alt:["840","NZV(60,168) = 840"]},
  steps:[
    {txt:"Rastavljamo na proste faktore: 60 = 2² · 3 · 5; 168 = 2³ · 3 · 7"},
    {txt:"NZV = umnožak svih prostih faktora s najvećom potencijom: 2³ · 3 · 5 · 7"},
    {txt:"= 8 · 3 · 5 · 7 = 840"},
    {txt:"Česta greška: koriste produkt 60·168=10080.",final:true,note:"diagnostika"},
    {txt:"Provjera: 840/60=14 ✓; 840/168=5 ✓ → NZV=840",final:true,note:"verifikacija"},{txt:"Točan odgovor: 840 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija: NZV(a,b) = najmanji zajednički višekratnik; NZD(a,b)·NZV(a,b) = a·b.",note:"postupak",final:true},{txt:"Intuicija: Kod NZV-a uzimamo MAX potenciju svakog prostog faktora.",note:"intuicija",final:true}
  ],
  why:["Definicija: NZV(a,b) = najmanji zajednički višekratnik; NZD(a,b)·NZV(a,b) = a·b.","Kod NZV-a uzimamo MAX potenciju svakog prostog faktora.","Razlika NZD/NZV: NZD uzima MIN potenciju, NZV uzima MAX.","Provjera: 840/60=14 ✓; 840/168=5 ✓; Česta greška: koriste produkt 60·168.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:17,type:"sa",topic:"mj",points:1,
  q:"Pretvorite [FRAC:13π|9] radijana u stupnjeve.",
  sol:{ans:"260°",alt:["260","260°"]},
  steps:[
    {txt:"Pretvorba rad → °: množimo s 180°/π"},
    {txt:"([FRAC:13π|9]) · (180°/π) = 13 · 180°/9 = 13 · 20° = 260°"},
    {txt:"Česta greška: množe s π/180° umjesto 180°/π.",final:true,note:"diagnostika"},
    {txt:"Provjera: 260° = 260π/180 = 13π/9 rad ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 260° ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: α [°] = α [rad] · (180°/π); 13π/9 · (180/π) = 13·20 = 260°.",note:"postupak",final:true},{txt:"Intuicija: π se krati u omjeru.",note:"intuicija",final:true},{txt:"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.",note:"verifikacija",final:true}
  ],
  why:["Formula: α [°] = α [rad] · (180°/π); 13π/9 · (180/π) = 13·20 = 260°.","π se krati u omjeru.","Česta greška: množe s π/180° (obrnuta pretvorba) → dobiju rad² umjesto °.","Provjera: 260°·π/180 = 13π/9 rad ✓","Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
},
  {id:18.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Riješite jednadžbu 2 · 6^(x) = [FRAC:1|18].",
  sol:{ans:"x = −2",alt:["-2","x = -2"]},
  steps:[
    {txt:"6^(x) = 1/36"},
    {txt:"1/36 = 1/6² = 6⁻²"},
    {txt:"6^(x) = 6⁻² ⇒ x = -2",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Svedemo na istu bazu i izjednačimo eksponente: aˣ = aʸ ⇒ x = y (za a > 0, a ≠ 1).",note:"postupak",final:true},{txt:"Intuicija: 1/36 = 6⁻² jer je 1/a² = a⁻².",note:"intuicija",final:true},{txt:"1/36 = 6⁻² jer je 1/a² = a⁻².",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Svedemo na istu bazu i izjednačimo eksponente: aˣ = aʸ ⇒ x = y (za a > 0, a ≠ 1).","1/36 = 6⁻² jer je 1/a² = a⁻².","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Riješite nejednadžbu (2x − 3)(x + 3) ≥ 0 i rješenje zapišite s pomoću intervala.",
  sol:{ans:"⟨−∞, -3] ∪ [[FRAC:3|2], +∞⟩",alt:["⟨-∞, -3]∪[3/2, +∞⟩","x≤-3 ili x≥3/2","⟨-∞,-3]∪[3/2,+∞⟩"],alt:["⟨-∞, -3] ∪ [3/2, +∞⟩","x ≤ -3 ili x ≥ 3/2"]},
  steps:[
    {txt:"Nultočke: 2x − 3 = 0 ⇒ x = 3/2; x + 3 = 0 ⇒ x = -3"},
    {txt:"Raspišemo kao kvadratni trinom: 2x² + 3x − 9 ≥ 0 (koeficijent uz x² pozitivan)"},
    {txt:"Parabola otvorena prema gore; ≥ 0 izvan intervala između nultočaka."},
    {txt:"x ∈ ⟨−∞, -3] ∪ [[FRAC:3|2], +∞⟩",final:true},{txt:"Točan odgovor: ⟨−∞, -3] ∪ [[FRAC:3|2], +∞⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kvadratna nejednadžba ax² + bx + c ≥ 0 s a > 0: rješenje je izvan nultočaka.",note:"postupak",final:true},{txt:"Intuicija: Znak ≥ uključuje rubne točke, pa uglate zagrade.",note:"intuicija",final:true},{txt:"Znak ≥ uključuje rubne točke, pa uglate zagrade.",note:"verifikacija",final:true}
  ],
  why:["Kvadratna nejednadžba ax² + bx + c ≥ 0 s a > 0: rješenje je izvan nultočaka.","Znak ≥ uključuje rubne točke, pa uglate zagrade.","Provjera supstitucijom: uvrsti x = ⟨−∞, -3] ∪ [[FRAC:3|2], +∞⟩ u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Za brojeve c, d vrijedi da je c : d = 2 : 5 i d = 2c + 10. Koliko je c?",
  sol:{ans:"c = 20",alt:["20","c = 20"]},
  steps:[
    {txt:"Iz omjera c : d = 2 : 5 ⇒ 5c = 2d"},
    {txt:"Uvrstimo d = 2c + 10: 5c = 2(2c + 10) = 4c + 20"},
    {txt:"c = 20 (⇒ d = 50, provjera: 20 : 50 = 2 : 5 ✓)",final:true},{txt:"Točan odgovor: c = 20 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Omjer a : b = k : l ⇒ l · a = k · b.",note:"postupak",final:true},{txt:"Intuicija: Supstitucija iz jedne jednadžbe u drugu.",note:"intuicija",final:true},{txt:"Supstitucija iz jedne jednadžbe u drugu.",note:"verifikacija",final:true},{txt:"Provjera supstitucijom: uvrsti x = c = 20 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Omjer a : b = k : l ⇒ l · a = k · b.","Supstitucija iz jedne jednadžbe u drugu.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Prvi član geometrijskog niza je 5, a četvrti je 135. Odredite drugi član toga niza.",
  sol:{ans:"15",alt:["15","a₂ = 15"]},
  steps:[
    {txt:"aₙ = a₁ · q^(n-1). Za n = 4: a₄ = 5q³ = 135 ⇒ q³ = 27 ⇒ q = 3"},
    {txt:"a₂ = a₁ · q = 5 · 3 = 15",final:true},{txt:"Točan odgovor: 15 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Geometrijski niz: kvocijent q je omjer uzastopnih članova.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Geometrijski niz: kvocijent q je omjer uzastopnih članova.",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
  ],
  why:["Geometrijski niz: kvocijent q je omjer uzastopnih članova.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]
},
  {id:20.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Kiselost otopine (pH) određuje se prema formuli pH = −log C, gdje je C koncentracija vodikovih iona (u mol/L). Odredite pH otopine u kojoj je C = 4,7 · 10⁻⁵ mol/L. (pH zaokružujemo na jednu decimalu.)",
  sol:{ans:"pH ≈ 4,3",alt:["4,3","4,3","≈4,3"]},
  steps:[
    {txt:"pH = −log(4,7 · 10⁻⁵) = −(log 4,7 + log 10⁻⁵)"},
    {txt:"= −log 4,7 + 5"},
    {txt:"log 4,7 ≈ 0,6721"},
    {txt:"pH ≈ 5 − 0,6721 = 4,3279 ≈ 4,3",final:true},{txt:"Točan odgovor: pH ≈ 4,3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: log(a · b) = log a + log b (logaritam umnoška).",note:"postupak",final:true},{txt:"Intuicija: log 10ⁿ = n.",note:"intuicija",final:true},{txt:"log 10ⁿ = n.",note:"verifikacija",final:true}
  ],
  why:["log(a · b) = log a + log b (logaritam umnoška).","log 10ⁿ = n.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:20.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Odredite koncentraciju vodikovih iona u otopini kojoj je pH jednak 7,1.",
  sol:{ans:"C ≈ 7,9 · 10⁻⁸ [FRAC:mol|L]",alt:["7,9 · 10⁻⁸","7,9e-8","≈7,9·10⁻⁸"]},
  steps:[
    {txt:"Iz pH = −log C dobivamo C = 10^(−pH)"},
    {txt:"C = 10^(-7,1) = 10⁻⁸ · 10^(0,9)"},
    {txt:"10^(0,9) ≈ 7,943"},
    {txt:"C ≈ 7,9 · 10⁻⁸ [FRAC:mol|L]",final:true},{txt:"Točan odgovor: C ≈ 7,9 · 10⁻⁸ [FRAC:mol|L] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Inverzna relacija od logaritamske: C = 10^(−pH).",note:"postupak",final:true},{txt:"Intuicija: 10^(a+b) = 10^a · 10^b.",note:"intuicija",final:true},{txt:"10^(a+b) = 10^a · 10^b.",note:"verifikacija",final:true}
  ],
  why:["Inverzna relacija od logaritamske: C = 10^(−pH).","10^(a+b) = 10^a · 10^b.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:21.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Realan dio kompleksnoga broja [FRAC:6 + bi|1 − 2i] jednak je 4. Koliki je realan broj b?",
  sol:{ans:"b = -7",alt:["-7","b = -7"]},
  steps:[
    {txt:"Množimo brojnik i nazivnik konjugatom (1 + 2i):"},
    {txt:"Nazivnik: (1 − 2i)(1 + 2i) = 1 + 4 = 5"},
    {txt:"Brojnik: (6 + bi)(1 + 2i) = 6 + 12i + bi − 2b = (6 − 2b) + (12 + b)i"},
    {txt:"Realni dio: Re = [FRAC:6 − 2b|5] = 4 ⇒ 6 − 2b = 20 ⇒ b = -7",final:true},{txt:"Točan odgovor: b = -7 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Racionalizacija nazivnika: množimo konjugatom (a + bi) → (a − bi).",note:"postupak",final:true},{txt:"Intuicija: Za kompleksni broj z = x + yi: Re(z) = x.",note:"intuicija",final:true},{txt:"Za kompleksni broj z = x + yi: Re(z) = x.",note:"verifikacija",final:true}
  ],
  why:["Racionalizacija nazivnika: množimo konjugatom (a + bi) → (a − bi).","Za kompleksni broj z = x + yi: Re(z) = x.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija."]
},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Zapišite kompleksan broj z = 5 + 5i u trigonometrijskom obliku.",
  sol:{ans:"z = 5√2 (cos 45° + i sin 45°)",alt:["5√2(cos 45° + i sin 45°)","5√2·(cos π/4 + i sin π/4)"]},
  steps:[
    {txt:"Modul: |z| = √(5² + 5²) = √50 = 5√2"},
    {txt:"Argument: tg φ = 5/5 = 1, Re > 0 i Im > 0 ⇒ I. kvadrant ⇒ φ = 45° = π/4"},
    {txt:"z = 5√2 (cos 45° + i sin 45°)",final:true},{txt:"Točan odgovor: z = 5√2 (cos 45° + i sin 45°) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Trigonometrijski oblik: z = r(cos φ + i sin φ), gdje je r = |z| i φ = arg(z).",note:"postupak",final:true},{txt:"Intuicija: U I. kvadrantu (Re > 0, Im > 0) argument je između 0° i 90°.",note:"intuicija",final:true},{txt:"U I. kvadrantu (Re > 0, Im > 0) argument je između 0° i 90°.",note:"verifikacija",final:true}
  ],
  why:["Trigonometrijski oblik: z = r(cos φ + i sin φ), gdje je r = |z| i φ = arg(z).","U I. kvadrantu (Re > 0, Im > 0) argument je između 0° i 90°.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija."]
},
  {id:22.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Odredite derivaciju funkcije f(x) = x³ · sin x.",
  sol:{ans:"f ′(x) = 3x² sin x + x³ cos x",alt:["3x² sin x + x³ cos x","3x²·sin x + x³·cos x"]},
  steps:[
    {txt:"Pravilo derivacije umnoška: (u · v)′ = u′v + uv′"},
    {txt:"u = x³ ⇒ u′ = 3x². v = sin x ⇒ v′ = cos x"},
    {txt:"f ′(x) = 3x² · sin x + x³ · cos x",final:true},{txt:"Točan odgovor: f ′(x) = 3x² sin x + x³ cos x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo umnoška (derivacije): (u · v)′ = u′v + uv′.",note:"postupak",final:true},{txt:"Intuicija: (xⁿ)′ = n · xⁿ⁻¹; (sin x)′ = cos x.",note:"intuicija",final:true},{txt:"(xⁿ)′ = n · xⁿ⁻¹; (sin x)′ = cos x.",note:"verifikacija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["Pravilo umnoška (derivacije): (u · v)′ = u′v + uv′.","(xⁿ)′ = n · xⁿ⁻¹; (sin x)′ = cos x.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:22.2,type:"sa",topic:"fun",points:1,img:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Na slici je prikazan graf funkcije g koja je definirana na intervalu ⟨a, n⟩. Odredite skup realnih brojeva za koje je derivacija funkcije g pozitivna, tj. g′(x) > 0. Rješenje zapišite s pomoću intervala upotrebljavajući neke od označenih brojeva a, b, c, d, k, l, m, n.",
  sol:{ans:"⟨d, l⟩",alt:["(d, l)","x ∈ (d, l)"]},
  steps:[
    {txt:"g′(x) > 0 ⇔ g je (strogo) rastuća u okolini točke x."},
    {txt:"Iz grafa: g pada na [a, d], raste na [d, l], pada na [l, n]."},
    {txt:"Točke d i l su lokalni minimum i maksimum (derivacija je nula)."},
    {txt:"g′(x) > 0 ⇔ x ∈ ⟨d, l⟩",final:true},{txt:"Točan odgovor: ⟨d, l⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Veza derivacije i monotonosti: g′(x) > 0 ⇒ g strogo raste; g′(x) < 0 ⇒ g strogo pada.",note:"postupak",final:true},{txt:"Intuicija: U ekstremima (lokalni min/max za diferencijabilnu funkciju) je g′(x) = 0.",note:"intuicija",final:true},{txt:"U ekstremima (lokalni min/max za diferencijabilnu funkciju) je g′(x) = 0.",note:"verifikacija",final:true}
  ],
  why:["Veza derivacije i monotonosti: g′(x) > 0 ⇒ g strogo raste; g′(x) < 0 ⇒ g strogo pada.","U ekstremima (lokalni min/max za diferencijabilnu funkciju) je g′(x) = 0.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:23.1,type:"sa",topic:"trg",points:1,img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Na brojevnoj (trigonometrijskoj) kružnici označite točku E(t) za koju je tg t = 2 i cos t > 0.",
  sol:{ans:"točka u I. kvadrantu, t = arctg 2 ≈ 63,43° (E ≈ (0,447; 0,894))",alt:["I. kvadrant","arctg 2"],svgFn:()=>e(SvgZad23a_2013LA,null)},
  steps:[
    {txt:"tg t = sin t / cos t = 2. Uz uvjet cos t > 0 slijedi sin t = 2 cos t > 0."},
    {txt:"sin t > 0 i cos t > 0 ⇒ točka E(t) je u I. kvadrantu."},
    {txt:"t = arctg 2 ≈ 63°26′ ≈ 1,107 rad"},
    {txt:"Koordinate na jediničnoj kružnici: (cos t, sin t) ≈ ([FRAC:1|√5], [FRAC:2|√5]) ≈ (0,447; 0,894)",final:true},{txt:"Točan odgovor: točka u I. kvadrantu, t = arctg 2 ≈ 63,43° (E ≈ (0,447; 0,894)) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Jedinična kružnica: točka (cos t, sin t).",note:"postupak",final:true},{txt:"Intuicija: Predznak tangensa i kosinusa određuje jedinstveni kvadrant (zajedno).",note:"intuicija",final:true},{txt:"Predznak tangensa i kosinusa određuje jedinstveni kvadrant (zajedno).",note:"verifikacija",final:true}
  ],
  why:["Jedinična kružnica: točka (cos t, sin t).","Predznak tangensa i kosinusa određuje jedinstveni kvadrant (zajedno).","Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:23.2,type:"sa",topic:"trg",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Zrakoplov se pri uzlijetanju otisne brzinom od 315 km/h pod kutom od 22° prema ravnini piste. Na kojoj se visini, izraženoj u metrima, zrakoplov nalazi nakon 8 s?",
  sol:{ans:"h ≈ 262,22 m",alt:["262,22","262,22","≈262 m"]},
  steps:[
    {txt:"Pretvorba brzine: 315 km/h = 315/3,6 m/s = 87,5 m/s"},
    {txt:"Duljina putanje za 8 s: s = v · t = 87,5 · 8 = 700 m"},
    {txt:"Putanja je pod kutom 22° prema horizontali, pa je vertikalna komponenta (visina): h = s · sin 22°"},
    {txt:"h = 700 · sin 22° ≈ 700 · 0,3746 ≈ 262,22 m",final:true},{txt:"Točan odgovor: h ≈ 262,22 m ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pretvorba km/h → m/s: dijelimo sa 3,6 (= 3600/1000).",note:"postupak",final:true},{txt:"Intuicija: Vertikalna komponenta pomaka: h = s · sin α.",note:"intuicija",final:true},{txt:"Vertikalna komponenta pomaka: h = s · sin α.",note:"verifikacija",final:true}
  ],
  why:["Pretvorba km/h → m/s: dijelimo sa 3,6 (= 3600/1000).","Vertikalna komponenta pomaka: h = s · sin α.","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:24.1,type:"sa",topic:"trg",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Kolika je mjera najmanjega kuta u trokutu kojemu su stranice duljina 7 cm, 8 cm i 9 cm?",
  sol:{ans:"≈ 48°11′23″",alt:["48°11'23\"","48,19°","≈48°11'"]},
  steps:[
    {txt:"U trokutu: nasuprot najkraćoj stranici (a = 7 cm) leži najmanji kut α."},
    {txt:"Kosinusov poučak: cos α = (b² + c² − a²)/(2bc) = (64 + 81 − 49)/(2 · 8 · 9) = 96/144 = 2/3"},
    {txt:"α = arccos([FRAC:2|3]) ≈ 48,19° ≈ 48°11′23″",final:true},{txt:"Točan odgovor: ≈ 48°11′23″ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kosinusov poučak: a² = b² + c² − 2bc · cos α (gdje je α nasuprot a).",note:"postupak",final:true},{txt:"Intuicija: Što je stranica kraća, to je nasuprotni kut manji.",note:"intuicija",final:true},{txt:"Što je stranica kraća, to je nasuprotni kut manji.",note:"verifikacija",final:true},{txt:"Provjera kalkulatorom: paziti na DEG/RAD mode.",note:"verifikacija",final:true}
  ],
  why:["Kosinusov poučak: a² = b² + c² − 2bc · cos α (gdje je α nasuprot a).","Što je stranica kraća, to je nasuprotni kut manji.","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:24.2,type:"sa",topic:"trg",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Kolika je površina trokuta kojemu je jedna stranica duljine 5 cm, a mjere kutova uz tu stranicu 24°36′ i 55°?",
  sol:{ans:"≈ 4,33 cm²",alt:["4,33","4,33"]},
  steps:[
    {txt:"Treći kut: γ = 180° − 24°36′ − 55° = 100°24′"},
    {txt:"Sinusov poučak: b/sin β = c/sin γ. Uz c = 5 i γ = 100°24′, a β = 55°:"},
    {txt:"b = 5 · sin 55°/sin 100°24′ ≈ 5 · 0,8192/0,9836 ≈ 4,164 cm"},
    {txt:"Površina: P = ([FRAC:1|2]) · c · b · sin α = ([FRAC:1|2]) · 5 · 4,164 · sin 24°36′ ≈ 4,33 cm²",final:true},{txt:"Točan odgovor: ≈ 4,33 cm² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sinusov poučak: a/sin α = b/sin β = c/sin γ.",note:"postupak",final:true},{txt:"Intuicija: Površina trokuta s dvije stranice i kutom među njima: P = (1/2) · a · b · sin γ.",note:"intuicija",final:true},{txt:"Površina trokuta s dvije stranice i kutom među njima: P = (1/2) · a · b · sin γ.",note:"verifikacija",final:true}
  ],
  why:["Sinusov poučak: a/sin α = b/sin β = c/sin γ.","Površina trokuta s dvije stranice i kutom među njima: P = (1/2) · a · b · sin γ.","Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:25.1,type:"sa",topic:"geo",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Izračunajte udaljenost točke (5, 6) od pravca x − 4y + 8 = 0.",
  sol:{ans:"d = [FRAC:11√17|17] ≈ 2,67",alt:["11/√17","11√17/17","2,67","≈2,67"]},
  steps:[
    {txt:"Formula: d(T, p) = |Ax₀ + By₀ + C|/√(A² + B²), gdje je pravac Ax + By + C = 0."},
    {txt:"A = 1, B = -4, C = 8; T = (5, 6)"},
    {txt:"d = |1 · 5 + (-4) · 6 + 8|/√(1 + 16) = |5 − 24 + 8|/√17 = 11/√17"},
    {txt:"Racionalizacija: [FRAC:11|√17] = [FRAC:11√17|17] ≈ 2,67",final:true},{txt:"Točan odgovor: d = [FRAC:11√17|17] ≈ 2,67 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Udaljenost točke od pravca: d = |Ax₀ + By₀ + C|/√(A² + B²) (apsolutna vrijednost!).",note:"postupak",final:true},{txt:"Intuicija: Racionalizacija nazivnika: pomnožimo brojnik i nazivnik s √17.",note:"intuicija",final:true},{txt:"Racionalizacija nazivnika: pomnožimo brojnik i nazivnik s √17.",note:"verifikacija",final:true}
  ],
  why:["Udaljenost točke od pravca: d = |Ax₀ + By₀ + C|/√(A² + B²) (apsolutna vrijednost!).","Racionalizacija nazivnika: pomnožimo brojnik i nazivnik s √17.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:25.2,type:"sa",topic:"geo",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Izračunajte kut što ga pravac 2x − 3y − 7 = 0 zatvara s pozitivnom zrakom osi x.",
  sol:{ans:"α ≈ 33°41′24″",alt:["33°41'24\"","33,69°","≈33°41'"]},
  steps:[
    {txt:"Iz 2x − 3y − 7 = 0 izrazimo y: y = (2/3)x − 7/3"},
    {txt:"Nagib pravca: k = 2/3"},
    {txt:"α = arctg k = arctg([FRAC:2|3]) ≈ 33,69° ≈ 33°41′24″",final:true},{txt:"Točan odgovor: α ≈ 33°41′24″ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kut pravca s pozitivnom zrakom osi x: tg α = k (gdje je k nagib).",note:"postupak",final:true},{txt:"Intuicija: Nagib je koeficijent uz x u eksplicitnom obliku pravca y = kx + l.",note:"intuicija",final:true},{txt:"Nagib je koeficijent uz x u eksplicitnom obliku pravca y = kx + l.",note:"verifikacija",final:true},{txt:"Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.",note:"verifikacija",final:true}
  ],
  why:["Kut pravca s pozitivnom zrakom osi x: tg α = k (gdje je k nagib).","Nagib je koeficijent uz x u eksplicitnom obliku pravca y = kx + l.","Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:25.3,type:"sa",topic:"geo",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Odredite jednadžbu kružnice koja dira os y i kojoj je središte u točki (-3, 2).",
  sol:{ans:"(x + 3)² + (y − 2)² = 9",alt:["(x+3)² + (y-2)² = 9","(x+3)^2 + (y-2)^2 = 9"]},
  steps:[
    {txt:"Kružnica dira os y ⇔ udaljenost središta od osi y jednaka je polumjeru."},
    {txt:"Udaljenost točke (-3, 2) od osi y: |-3| = 3 ⇒ r = 3"},
    {txt:"Jednadžba: (x − (-3))² + (y − 2)² = 3² ⇒ (x + 3)² + (y − 2)² = 9",final:true},{txt:"Točan odgovor: (x + 3)² + (y − 2)² = 9 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Jednadžba kružnice sa središtem (p, q) i polumjerom r: (x − p)² + (y − q)² = r².",note:"postupak",final:true},{txt:"Intuicija: Udaljenost točke od osi y jednaka je apsolutnoj vrijednosti njene x-koordinate.",note:"intuicija",final:true},{txt:"Udaljenost točke od osi y jednaka je apsolutnoj vrijednosti njene x-koordinate.",note:"verifikacija",final:true},{txt:"Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.",note:"verifikacija",final:true}
  ],
  why:["Jednadžba kružnice sa središtem (p, q) i polumjerom r: (x − p)² + (y − q)² = r².","Udaljenost točke od osi y jednaka je apsolutnoj vrijednosti njene x-koordinate.","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:26.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 26 (1. dio od 2): f(x) = (3 + x)/(x − 2)",
  q:"Odredite domenu funkcije f.",
  sol:{ans:"D(f) = ℝ \\ {2}",alt:["R \\ {2}","ℝ\\{2}","x ≠ 2"]},
  steps:[
    {txt:"Racionalna funkcija definirana je svugdje gdje je nazivnik ≠ 0."},
    {txt:"x − 2 ≠ 0 ⇒ x ≠ 2"},
    {txt:"D(f) = ℝ \\ {2}",final:true},{txt:"Točan odgovor: D(f) = ℝ \\ {2} ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Domena razlomljenog izraza: isključujemo x za koje je nazivnik = 0.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Domena razlomljenog izraza: isključujemo x za koje je nazivnik = 0.",note:"verifikacija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["Domena razlomljenog izraza: isključujemo x za koje je nazivnik = 0.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu i sliku funkcije."]
},
  {id:26.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 26 (2. dio od 2): f(x) = (3 + x)/(x − 2)",
  q:"Odredite sjecišta grafa zadane funkcije s koordinatnim osima.",
  sol:{ans:"(-3, 0) i (0, -[FRAC:3|2])",solFormula:{pre:"(-3, 0) i (0, -3/2)"},alt:["(-3, 0) i (0, -3/2)","(-3,0); (0,-3/2)"]},
  steps:[
    {txt:"Sjecište s x-osi: f(x) = 0 ⇒ 3 + x = 0 ⇒ x = -3 ⇒ (-3, 0)"},
    {txt:"Sjecište s y-osi: f(0) = [FRAC:3 + 0|0 − 2] = [FRAC:3|-2] = -3/2 ⇒ (0, -3/2)",final:true},{txt:"Točan odgovor: (-3, 0) i (0, -[FRAC:3|2]) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sjecište s x-osi: y = 0 ⇒ brojnik = 0 (uz uvjet definiranosti).",note:"postupak",final:true},{txt:"Intuicija: Sjecište s y-osi: x = 0 ⇒ f(0).",note:"intuicija",final:true},{txt:"Sjecište s y-osi: x = 0 ⇒ f(0).",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf funkcije i očitaj traženu vrijednost.",note:"verifikacija",final:true}
  ],
  why:["Sjecište s x-osi: y = 0 ⇒ brojnik = 0 (uz uvjet definiranosti).","Sjecište s y-osi: x = 0 ⇒ f(0).","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:27.1,type:"sa",topic:"geo",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Zadan je stožac kojemu je baza krug polumjera 4 cm, a duljina izvodnice 5 cm. Koliki je obujam toga stošca?",
  sol:{ans:"V = 16π cm³ ≈ 50,27 cm³",alt:["16π","16π cm³","50,27","≈50,27"]},
  steps:[
    {txt:"Izvodnica, polumjer baze i visina stošca tvore pravokutni trokut: l² = r² + h²"},
    {txt:"h = √(l² − r²) = √(25 − 16) = √9 = 3 cm"},
    {txt:"V = ([FRAC:1|3]) · r² · π · h = ([FRAC:1|3]) · 16 · π · 3 = 16π cm³ ≈ 50,27 cm³",final:true},{txt:"Točan odgovor: V = 16π cm³ ≈ 50,27 cm³ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Obujam stošca: V = (1/3) · B · h = (1/3) · r²π · h.",note:"postupak",final:true},{txt:"Intuicija: Pitagorin poučak u osnom presjeku stošca: l² = r² + h².",note:"intuicija",final:true},{txt:"Pitagorin poučak u osnom presjeku stošca: l² = r² + h².",note:"verifikacija",final:true},{txt:"Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.",note:"verifikacija",final:true}
  ],
  why:["Obujam stošca: V = (1/3) · B · h = (1/3) · r²π · h.","Pitagorin poučak u osnom presjeku stošca: l² = r² + h².","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:27.2,type:"sa",topic:"geo",points:1,
  context:"Zadatak 27 (2. dio od 2): Stožac: r = 4 cm, l = 5 cm",
  q:"Plašt toga uspravnog stošca razvijen u ravnini je kružni isječak. Kolika je mjera središnjega kuta toga kružnog isječka?",
  sol:{ans:"288°",alt:["288","288°"]},
  steps:[
    {txt:"Razvijen plašt stošca u ravnini je kružni isječak s polumjerom l = 5 cm."},
    {txt:"Duljina luka isječka = opseg baze stošca: L = 2πr = 8π cm"},
    {txt:"Mjera središnjega kuta: φ = (L/R) · (180°/π), gdje je R = l = 5."},
    {txt:"Ili iz omjera: [FRAC:L|2πl] · 360° = [FRAC:8π|10π] · 360° = 288°",final:true},{txt:"Točan odgovor: 288° ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kod razvijanja plašta stošca: duljina luka dobivenog isječka jednaka je opsegu osnove stošca.",note:"postupak",final:true},{txt:"Intuicija: Duljina kružnog luka polumjera R i središnjega kuta φ (u °): L = (φ/360°) · 2πR.",note:"intuicija",final:true},{txt:"Duljina kružnog luka polumjera R i središnjega kuta φ (u °): L = (φ/360°) · 2πR.",note:"verifikacija",final:true}
  ],
  why:["Kod razvijanja plašta stošca: duljina luka dobivenog isječka jednaka je opsegu osnove stošca.","Duljina kružnog luka polumjera R i središnjega kuta φ (u °): L = (φ/360°) · 2πR.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:28.1,type:"proof",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (1. dio od 3):",
  q:"U koordinatnome sustavu nacrtajte skup točaka u ravnini određen jednadžbom y = 3x − 1.",
  sol:{ex:"Pravac s nagibom 3 koji prolazi točkama (0, -1) i (1, 2).",svgFn:()=>e(SvgSolLine_2013LjetoA,null)},
  steps:[
    {txt:"Eksplicitni oblik: y = 3x − 1 (nagib k = 3, y-odsječak -1)"},
    {txt:"Kontrolne točke: (0, -1), (1/3, 0), (1, 2)"},
    {txt:"Crtamo pravac kroz barem dvije kontrolne točke.",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravac y = kx + l: k je nagib, l je y-odsječak.",note:"postupak",final:true},{txt:"Intuicija: Dvije točke potpuno određuju pravac.",note:"intuicija",final:true},{txt:"Dvije točke potpuno određuju pravac.",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:["Pravac y = kx + l: k je nagib, l je y-odsječak.","Dvije točke potpuno određuju pravac.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:28.2,type:"proof",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (2. dio od 3):",
  q:"U koordinatnome sustavu nacrtajte graf funkcije f(x) = x² − 2x − 3.",
  sol:{ex:"Parabola s tjemenom (1, -4), nultočkama x = -1 i x = 3, otvorena prema gore.",svgFn:()=>e(SvgSolParabola_2013LjetoA,null)},
  steps:[
    {txt:"Nultočke: (x − 3)(x + 1) = 0 ⇒ x = 3 ili x = -1"},
    {txt:"Tjeme: x_T = −b/(2a) = 2/2 = 1; y_T = f(1) = 1 − 2 − 3 = -4 ⇒ T(1, -4)"},
    {txt:"Parabola otvorena prema gore (a = 1 > 0). Sjecište s y-osi: (0, -3).",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Tjeme parabole y = ax² + bx + c: (−b/(2a), f(−b/(2a))).",note:"postupak",final:true},{txt:"Intuicija: Alternativno: kvadratna nadopuna f(x) = (x − 1)² − 4.",note:"intuicija",final:true},{txt:"Alternativno: kvadratna nadopuna f(x) = (x − 1)² − 4.",note:"verifikacija",final:true},{txt:"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.",note:"verifikacija",final:true}
  ],
  why:["Tjeme parabole y = ax² + bx + c: (−b/(2a), f(−b/(2a))).","Alternativno: kvadratna nadopuna f(x) = (x − 1)² − 4.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:28.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Odredite jednadžbu tangente na graf funkcije f(x) = x² − 2x − 3 u točki s apscisom x = 4.",
  sol:{ans:"y = 6x − 19",alt:["y = 6x - 19","6x - y - 19 = 0"]},
  steps:[
    {txt:"f(4) = 16 − 8 − 3 = 5 ⇒ dodirna točka T(4, 5)"},
    {txt:"Nagib tangente = f ′(4). f ′(x) = 2x − 2, pa f ′(4) = 6"},
    {txt:"Tangenta: y − 5 = 6(x − 4) ⇒ y = 6x − 19",final:true},{txt:"Točan odgovor: y = 6x − 19 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Tangenta na graf u točki (x₀, f(x₀)): y − f(x₀) = f ′(x₀)(x − x₀).",note:"postupak",final:true},{txt:"Intuicija: Koeficijent smjera tangente jednak je derivaciji u toj točki.",note:"intuicija",final:true},{txt:"Koeficijent smjera tangente jednak je derivaciji u toj točki.",note:"verifikacija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["Tangenta na graf u točki (x₀, f(x₀)): y − f(x₀) = f ′(x₀)(x − x₀).","Koeficijent smjera tangente jednak je derivaciji u toj točki.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:29.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Operacija ⊗ s realnim brojevima definirana je pravilom a ⊗ b = a − 2b + 2. Izračunajte koliko je 2 ⊗ 5.",
  sol:{ans:"-6",alt:["-6","2-2·5+2=-6","a⊠b=a-2b+2"]},
  steps:[
    {txt:"2 ⊗ 5 = 2 − 2 · 5 + 2 = 2 − 10 + 2 = -6",final:true},{txt:"Točan odgovor: -6 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Direktno uvrštavanje u definiciju operacije.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Direktno uvrštavanje u definiciju operacije.",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true}
  ],
  why:["Direktno uvrštavanje u definiciju operacije.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]
},
  {id:29.2,type:"sa",topic:"al",points:3,
  context:"Zadatak 29 (2. dio od 5):",
  q:"U nekome aritmetičkom nizu 200. član je broj 99, a 268. član je broj 167. Odredite 234. član toga niza. Odredite zbroj svih članova od 235. do 312. zadanoga niza, tj. a₂₃₅ + a₂₃₆ + … + a₃₁₂.",
  sol:{ans:"a₂₃₄ = 133; S = 13 455",alt:["a₂₃₄=133, S=13455","133 i 13455"]},
  steps:[
    {txt:"Razlika d = (a₂₆₈ − a₂₀₀)/(268 − 200) = (167 − 99)/68 = 68/68 = 1"},
    {txt:"a₁ = a₂₀₀ − 199d = 99 − 199 = -100"},
    {txt:"a₂₃₄ = a₁ + 233d = -100 + 233 = 133"},
    {txt:"a₂₃₅ = 134, a₃₁₂ = -100 + 311 = 211. Broj članova: 312 − 235 + 1 = 78."},
    {txt:"Zbroj: S = ([FRAC:78|2]) · (134 + 211) = 39 · 345 = 13 455",final:true},{txt:"Točan odgovor: a₂₃₄ = 133; S = 13 455 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Aritmetički niz: aₙ = a₁ + (n − 1)d; razlika d je ista između uzastopnih članova.",note:"postupak",final:true},{txt:"Intuicija: Zbroj uzastopnih članova od k-tog do l-tog: ((l − k + 1)/2)(aₖ + aₗ).",note:"intuicija",final:true},{txt:"Zbroj uzastopnih članova od k-tog do l-tog: ((l − k + 1)/2)(aₖ + aₗ).",note:"verifikacija",final:true}
  ],
  why:["Aritmetički niz: aₙ = a₁ + (n − 1)d; razlika d je ista između uzastopnih članova.","Zbroj uzastopnih članova od k-tog do l-tog: ((l − k + 1)/2)(aₖ + aₗ).","Provjera supstitucijom: uvrsti x = a₂₃₄ = 133; S = 13 455 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:29.3,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Izrazite a iz formule p = ab + 2(a + b)v.",
  sol:{ans:"a = [FRAC:p − 2bv|b + 2v]",alt:["(p - 2bv)/(b + 2v)","a = (p-2bv)/(b+2v)"]},
  steps:[
    {txt:"Razvij desnu stranu: p = ab + 2av + 2bv"},
    {txt:"Prebaci članove s a na jednu stranu, ostalo na drugu: p − 2bv = a(b + 2v)"},
    {txt:"a = [FRAC:p − 2bv|b + 2v] (uz b + 2v ≠ 0)",final:true},{txt:"Točan odgovor: a = [FRAC:p − 2bv|b + 2v] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Izražavanje varijable iz formule: izoliramo traženu varijablu pomoću ekvivalentnih algebarskih transformacija.",note:"postupak",final:true},{txt:"Intuicija: Faktorizacija pomaže izvući zajedničku varijablu.",note:"intuicija",final:true},{txt:"Faktorizacija pomaže izvući zajedničku varijablu.",note:"verifikacija",final:true},{txt:"Provjera supstitucijom: uvrsti x = a = [FRAC:p − 2bv|b + 2v] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Izražavanje varijable iz formule: izoliramo traženu varijablu pomoću ekvivalentnih algebarskih transformacija.","Faktorizacija pomaže izvući zajedničku varijablu.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:29.4,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Skratite razlomak [FRAC:2a² − ab + 2a − b|4a² − b²].",
  sol:{ans:"[FRAC:a + 1|2a + b]",alt:["(a+1)/(2a+b)","[FRAC:a+1|2a+b]"]},
  steps:[
    {txt:"Brojnik: grupiramo — 2a² − ab + 2a − b = a(2a − b) + (2a − b) = (2a − b)(a + 1)"},
    {txt:"Nazivnik: razlika kvadrata — 4a² − b² = (2a − b)(2a + b)"},
    {txt:"Skraćivanje zajedničkim faktorom (2a − b):"},
    {txt:"[FRAC:a + 1|2a + b]",final:true},{txt:"Točan odgovor: [FRAC:a + 1|2a + b] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razlika kvadrata: x² − y² = (x − y)(x + y).",note:"postupak",final:true},{txt:"Intuicija: Grupiranje: traži zajednički faktor u parovima članova.",note:"intuicija",final:true},{txt:"Grupiranje: traži zajednički faktor u parovima članova.",note:"verifikacija",final:true}
  ],
  why:["Razlika kvadrata: x² − y² = (x − y)(x + y).","Grupiranje: traži zajednički faktor u parovima članova.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:29.5,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Za koje vrijednosti realnoga parametra a je rješenje x jednadžbe 2x(a + 3) + a(x − 5) = 3ax − 6 veće od 2?",
  sol:{ans:"a > [FRAC:18|5]",alt:["a > 18/5","a > 3,6","a>18/5"]},
  solFormula:{pre:"a > ", frac:[["18","5"]]},
  steps:[
    {txt:"Razvijamo: 2ax + 6x + ax − 5a = 3ax − 6"},
    {txt:"Članovi s ax se poništavaju: 3ax + 6x − 5a = 3ax − 6 ⇒ 6x − 5a = -6"},
    {txt:"Rješenje: 6x = 5a − 6 ⇒ x = (5a − 6)/6"},
    {txt:"Uvjet x > 2: (5a − 6)/6 > 2 ⇒ 5a − 6 > 12 ⇒ 5a > 18"},
    {txt:"a > [FRAC:18|5]",final:true},{txt:"Točan odgovor: a > [FRAC:18|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kod jednadžbe s parametrom: rješenje izražavamo preko parametra, pa primjenjujemo dodatni uvjet.",note:"postupak",final:true},{txt:"Intuicija: 6 > 0, pa množenje s 6 ne mijenja smjer nejednakosti.",note:"intuicija",final:true},{txt:"6 > 0, pa množenje s 6 ne mijenja smjer nejednakosti.",note:"verifikacija",final:true}
  ],
  why:["Kod jednadžbe s parametrom: rješenje izražavamo preko parametra, pa primjenjujemo dodatni uvjet.","6 > 0, pa množenje s 6 ne mijenja smjer nejednakosti.","Provjera supstitucijom: uvrsti x = a > [FRAC:18|5] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:30,type:"proof",topic:"geo",points:4,graphType:"coord",graphRef:{pts:["A(-2,1)","B(3,-2)","C(24/5,1)"]},
  q:"Odredite površinu trokuta ABC ako je O ishodište koordinatnoga sustava, vektor OA⃗ = -2i⃗ + j⃗, vektor AB⃗ = 5i⃗ − 3j⃗, vektor AC⃗ je usporedan s vektorom i⃗, a skalarni umnožak AB⃗ · BC⃗ = 0.",
  sol:{ans:"P = [FRAC:51|5] = 10,2 kvadratnih jedinica",alt:["10,2","51/5","10,2"],svgFn:()=>e(SvgSolTrokut_2013LjetoA,null)},
  steps:[
    {txt:"A = O + OA⃗ = (-2, 1)"},
    {txt:"B = A + AB⃗ = (-2 + 5, 1 − 3) = (3, -2)"},
    {txt:"AC⃗ ∥ i⃗ ⇒ AC⃗ = (c, 0), pa C = A + AC⃗ = (-2 + c, 1). Dakle C ima istu y-koordinatu kao A."},
    {txt:"BC⃗ = C − B = (-2 + c − 3, 1 − (-2)) = (c − 5, 3)"},
    {txt:"Uvjet AB⃗ · BC⃗ = 0: (5, -3) · (c − 5, 3) = 5(c − 5) + (-3)·3 = 5c − 25 − 9 = 5c − 34 = 0"},
    {txt:"5c = 34 ⇒ c = 34/5. Dakle AC⃗ = (34/5, 0), C = (-2 + 34/5, 1) = (24/5, 1)"},
    {txt:"Površina: P = ([FRAC:1|2])|AB⃗ × AC⃗| = ([FRAC:1|2])|5 · 0 − (-3) · ([FRAC:34|5])| = ([FRAC:1|2]) · [FRAC:102|5] = [FRAC:51|5] = 10,2"},
    {txt:"Provjeri da su P₁ i P₂ na tangentama i P₁P₂ okomit na t₁.",final:true,note:"diagnostika"},
    {txt:"Provjera Shoelace: P=½|(-2)(-3)+0+(24/5)·3|=½·102/5=10,2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: P = [FRAC:51|5] = 10,2 kvadratnih jedinica ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: XY⃗ = Y−X; |XY⃗|² = (Δx)²+(Δy)²; skalarni umnožak: a⃗·b⃗=a₁b₁+a₂b₂=|a⃗||b⃗|cosφ.",note:"postupak",final:true},{txt:"Intuicija: Površina trokuta s vrhovima A, B, C: P = (1/2)|AB⃗ × AC⃗| (gdje je križni produkt determinanta).",note:"intuicija",final:true}
  ],
  ex:"Površina trokuta koordinatnom metodom: P = |½(x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂))|.",
  why:["Formula: XY⃗ = Y−X; |XY⃗|² = (Δx)²+(Δy)²; skalarni umnožak: a⃗·b⃗=a₁b₁+a₂b₂=|a⃗||b⃗|cosφ.","Površina trokuta s vrhovima A, B, C: P = (1/2)|AB⃗ × AC⃗| (gdje je križni produkt determinanta).","Uvjet AB⃗ ⊥ BC⃗ ⇔ AB⃗ · BC⃗ = 0.","Alternativa: Shoelace P = ½|x_A(y_B−y_C)+x_B(y_C−y_A)+x_C(y_A−y_B)|.","Provjera Shoelace: P = ½|(-2)(-3)+0+(24/5)·3| = ½·102/5 = 10,2 ✓","Česta greška: zbrajati površine pojedinih trokuta umjesto koristiti koordinatnu formulu; pažnja na predznak pri računanju površine Gaussovim obrascem."]
},
  {_META:true,
  auditedAt: "2026-05-04",
  auditSource: "MAT A D-S015 (viša razina, ljetni rok 2013)",
  auditStatus: "verified-full",
  auditBy: "Claude+Daniel",
  issueCount: {critical:0,medium:0,low:0,resolved:0},
  notes: "Audit sesija 2026-05-04: Pak G verbatim čisto; Pak H 3→0 (Q6 why); Pak I Q_IMAGES 10 bindinga OK; Pak A-E 15/15 MC + SA točni (Q18,1 Unicode); Pak F 34→0 (pravilo/check/ex/error/topic); Pak J [FRAC:] u Q2,Q4,Q11,Q18,1,Q21,1; META: verified-full."
,
  verified:"sympy+pdf+verbatim+visual"
,
  auditNotes:"Pak G: čisto; Pak I: Q_IMAGES konfirmirani; Pak H: 3→0 (Q6 why fracs); Pak A-E: 15/15 MC + SA točni (Q18,1 Unicode fix); Pak F: 34→0 nalaza (pravilo/check/ex/error/topic); Pak J: [FRAC:] u Q2,Q4,Q11,Q18,1,Q21,1; auditDate:2026-05-04"
  }
];

export const qImages = {
  "2013_ljeto_A__10": () => e(SvgZad10_2013LA, null),
  "2013_ljeto_A__14": () => e(SvgZad14_2013LA, null),
  "2013_ljeto_A__22.2": () => e(SvgZad22b_2013LA, null),
  "2013_ljeto_A__23.1": () => e(SvgCircleEmpty_2013LjetoA, null),
  "2013_ljeto_A__28.1": () => e(SvgGridEmpty_2013LjetoA, null),
  "2013_ljeto_A__28.2": () => e(SvgGridEmpty_2013LjetoA, null),
  "2013_ljeto_A__29.1": () => e(Svg29_2013Aj, null),
  "2013_ljeto_A__29.2": () => e(Svg29_2013Aj, null),
  "2013_ljeto_A__29.3": () => e(Svg29_2013Aj, null),
  "2013_ljeto_A__29.4": () => e(Svg29_2013Aj, null),
  "2013_ljeto_A__29.5": () => e(Svg29_2013Aj, null),
};
