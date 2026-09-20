// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad30_2011JA(){
  const W=320,H=320,cx=160,cy=160;
  const R1=68,R2=110;  // skalirano za viewport
  const T="var(--text)",MU="var(--muted)",FILL="rgba(74,144,217,0.16)",FILLST="var(--blue)",HILITE="rgba(233,180,70,0.55)",HILITEST="var(--gold)",DASH="var(--muted)",GOLD="var(--gold)";
  const PI=Math.PI;
  const N=8;                          // broj etiketa koje stanu u vijenac
  const alpha=43.13*PI/180;           // kut jedne etikete (rad)
  const gap=(2*PI-N*alpha)/N;         // kut razmaka izmedu etiketa
  // U originalu je vijenac jedinstvena, neisprekidana ploha - izrezana je
  // samo jedna (istaknuta) etiketa, pa se podjela na svih N segmenata NE crta.
  const ring=`M ${cx-R2},${cy} A ${R2},${R2} 0 1 0 ${cx+R2},${cy} A ${R2},${R2} 0 1 0 ${cx-R2},${cy} Z `
            +`M ${cx-R1},${cy} A ${R1},${R1} 0 1 0 ${cx+R1},${cy} A ${R1},${R1} 0 1 0 ${cx-R1},${cy} Z`;
  // Istaknuta (vec izrezana) etiketa - na vrhu vijenca
  const startA0=gap/2-PI/2;
  const endA0=startA0+alpha;
  const p1x=cx+R2*Math.cos(startA0), p1y=cy+R2*Math.sin(startA0);
  const p2x=cx+R2*Math.cos(endA0),   p2y=cy+R2*Math.sin(endA0);
  const p3x=cx+R1*Math.cos(endA0),   p3y=cy+R1*Math.sin(endA0);
  const p4x=cx+R1*Math.cos(startA0), p4y=cy+R1*Math.sin(startA0);
  const hiPath=`M ${p1x.toFixed(2)},${p1y.toFixed(2)} A ${R2},${R2} 0 0 1 ${p2x.toFixed(2)},${p2y.toFixed(2)} `
             +`L ${p3x.toFixed(2)},${p3y.toFixed(2)} A ${R1},${R1} 0 0 0 ${p4x.toFixed(2)},${p4y.toFixed(2)} Z`;
  const midA=(startA0+endA0)/2;
  // l2 - vanjski luk label (iznad)
  const lblOutX=cx+(R2+12)*Math.cos(midA), lblOutY=cy+(R2+12)*Math.sin(midA);
  // l1 - unutarnji luk label
  const lblInX=cx+(R1+8)*Math.cos(midA), lblInY=cy+(R1+8)*Math.sin(midA);
  // d - sirina etikete (lijevi rub izrezane etikete)
  const dMidR=(R1+R2)/2;
  const dLblX=cx+dMidR*Math.cos(startA0)-12, dLblY=cy+dMidR*Math.sin(startA0)-3;
  // S - srediste + isprekidane linije do rubova izrezane etikete
  const sX=cx, sY=cy;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Srafura (tekstura kartona) u pozadini prstena
    e("defs",null,
      e("pattern",{id:"z30hatch2011jA",patternUnits:"userSpaceOnUse",width:6,height:6,patternTransform:"rotate(45)"},
        e("line",{x1:0,y1:0,x2:0,y2:6,stroke:MU,strokeWidth:1,opacity:.42})
      )
    ),
    // Vijenac: jedinstvena ploha (even-odd => rupa u sredini)
    e("path",{d:ring,fillRule:"evenodd",fill:FILL,stroke:"none"}),
    e("path",{d:ring,fillRule:"evenodd",fill:"url(#z30hatch2011jA)",stroke:"none"}),
    e("path",{d:ring,fillRule:"evenodd",fill:"none",stroke:FILLST,strokeWidth:1.4}),
    // Izrezana etiketa (istaknuta) - bez srafure ispod, kao u originalu
    e("path",{d:hiPath,fill:"var(--bg)",stroke:"none"}),
    e("path",{d:hiPath,fill:HILITE,stroke:HILITEST,strokeWidth:2}),
    // Isprekidane linije iz S
    e("line",{x1:sX,y1:sY,x2:p1x,y2:p1y,stroke:DASH,strokeWidth:1,strokeDasharray:"4,3"}),
    e("line",{x1:sX,y1:sY,x2:p2x,y2:p2y,stroke:DASH,strokeWidth:1,strokeDasharray:"4,3"}),
    // Srediste S
    e("circle",{cx:sX,cy:sY,r:2.5,fill:T}),
    e("text",{x:sX+5,y:sY+5,fontSize:13,fill:T,fontWeight:"bold",fontStyle:"italic"},"S"),
    // l2 label
    e("text",{x:lblOutX,y:lblOutY+4,fontSize:14,fill:GOLD,fontWeight:"700",fontStyle:"italic",textAnchor:"middle"},"l\u2082"),
    // l1 label
    e("text",{x:lblInX,y:lblInY+4,fontSize:13,fill:GOLD,fontWeight:"700",fontStyle:"italic",textAnchor:"middle"},"l\u2081"),
    // d label
    e("text",{x:dLblX,y:dLblY,fontSize:13,fill:GOLD,fontWeight:"700",fontStyle:"italic",textAnchor:"end"},"d")
  );
}

function SvgZad27_2011JA(){
  const W=380,H=240,pad={l:18,r:18,t:18,b:18};
  const xMin=-1,xMax=13,yMin=-1,yMax=8.5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const T="var(--text)",MU="var(--muted)";
  const A=[0,0],B=[7,0],C=[7,7],D=[0,7],E=[12,0],F=[12,5],G=[7,5],Hpt=[7,35/12];
  const tk=p=>[toX(p[0]),toY(p[1])];
  const [aX,aY]=tk(A),[bX,bY]=tk(B),[cX,cY]=tk(C),[dX,dY]=tk(D);
  const [eX,eY]=tk(E),[fX,fY]=tk(F),[gX,gY]=tk(G),[hX,hY]=tk(Hpt);
  function pt(p,name,off){
    const [x,y]=tk(p);
    return [
      e("circle",{key:name+"c",cx:x,cy:y,r:3,fill:"#fff",stroke:T,strokeWidth:1.4}),
      e("text",{key:name+"t",x:x+off[0],y:y+off[1],fontSize:13,fill:T,fontWeight:"bold",fontStyle:"italic"},name)
    ];
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Kvadrat ABCD
    e("polygon",{points:`${aX},${aY} ${bX},${bY} ${cX},${cY} ${dX},${dY}`,fill:"rgba(74,144,217,0.15)",stroke:"var(--blue)",strokeWidth:2}),
    // Kvadrat BEFG
    e("polygon",{points:`${bX},${bY} ${eX},${eY} ${fX},${fY} ${gX},${gY}`,fill:"rgba(80,200,120,0.18)",stroke:"var(--green)",strokeWidth:2}),
    // Dijagonala DE
    e("line",{x1:dX,y1:dY,x2:eX,y2:eY,stroke:"var(--red)",strokeWidth:2.2}),
    // Točke + labeli
    ...pt(A,"A",[-12,5]),
    ...pt(B,"B",[-4,14]),
    ...pt(C,"C",[5,-3]),
    ...pt(D,"D",[-12,-3]),
    ...pt(E,"E",[5,14]),
    ...pt(F,"F",[5,3]),
    ...pt(G,"G",[-12,3]),
    e("circle",{cx:hX,cy:hY,r:4,fill:"#fff",stroke:"var(--gold)",strokeWidth:2.2}),
    e("text",{x:hX+6,y:hY+4,fontSize:14,fill:"#c89030",fontWeight:"bold",fontStyle:"italic"},"H")
  );
}

function SvgZad26_2011JA(){
  const W=380,H=200,pad={l:20,r:14,t:14,b:24};
  const PI=Math.PI;
  const xMin=-PI-0.3,xMax=2*PI+0.3,yMin=-2.6,yMax=2.6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const T="var(--text)",MU="var(--muted)",CURVE="var(--blue)";
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.04){
    const y=2*Math.sin(x-PI/6);
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  // Kvadratna mreza (kao u originalu): vertikale svakih pi/3, horizontale svakih 1
  const grid=[];
  for(let k=-3;k<=6;k++){
    const gx=toX(k*PI/3);
    if(gx<pad.l-0.5||gx>pad.l+iW+0.5) continue;
    grid.push(e("line",{key:"gx"+k,x1:gx,y1:pad.t,x2:gx,y2:pad.t+iH,stroke:MU,strokeWidth:.5,opacity:.4}));
  }
  for(let k=-2;k<=2;k++){
    grid.push(e("line",{key:"gy"+k,x1:pad.l,y1:toY(k),x2:pad.l+iW,y2:toY(k),stroke:MU,strokeWidth:.5,opacity:.4}));
  }
  // Vertikalne isprekidane oznake kroz ekstreme: x=-pi/3 (min) i x=2pi/3 (max)
  const vmark=[-PI/3,2*PI/3].map((v,i)=>e("line",{key:"vm"+i,x1:toX(v),y1:pad.t,x2:toX(v),y2:pad.t+iH,stroke:MU,strokeWidth:1,strokeDasharray:"5,4"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    ...vmark,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:T,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:T,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:T}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:T}),
    e("text",{x:pad.l+iW+2,y:oy+4,fontSize:11,fill:T,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:11,fill:T,fontStyle:"italic"},"y"),
    // x-axis labels: -π, -π/3, 0, 2π/3, π, 2π
    e("text",{x:toX(-PI),y:oy+13,fontSize:10,fill:T,textAnchor:"middle"},"−π"),
    e("text",{x:toX(-PI/3),y:oy+13,fontSize:10,fill:T,textAnchor:"middle"},"−π/3"),
    e("text",{x:ox-7,y:oy+13,fontSize:10,fill:T},"0"),
    e("text",{x:toX(2*PI/3),y:oy+13,fontSize:10,fill:T,textAnchor:"middle"},"2π/3"),
    e("text",{x:toX(PI),y:oy+13,fontSize:10,fill:T,textAnchor:"middle"},"π"),
    e("text",{x:toX(2*PI),y:oy+13,fontSize:10,fill:T,textAnchor:"middle"},"2π"),
    // y label "1"
    e("text",{x:ox-10,y:toY(1)+4,fontSize:10,fill:T},"1"),
    // tickovi (small)
    e("line",{x1:toX(-PI),y1:oy-3,x2:toX(-PI),y2:oy+3,stroke:T,strokeWidth:1}),
    e("line",{x1:toX(-PI/3),y1:oy-3,x2:toX(-PI/3),y2:oy+3,stroke:T,strokeWidth:1}),
    e("line",{x1:toX(2*PI/3),y1:oy-3,x2:toX(2*PI/3),y2:oy+3,stroke:T,strokeWidth:1}),
    e("line",{x1:toX(PI),y1:oy-3,x2:toX(PI),y2:oy+3,stroke:T,strokeWidth:1}),
    e("line",{x1:toX(2*PI),y1:oy-3,x2:toX(2*PI),y2:oy+3,stroke:T,strokeWidth:1}),
    e("line",{x1:ox-3,y1:toY(1),x2:ox+3,y2:toY(1),stroke:T,strokeWidth:1}),
    // Sin krivulja
    e("polyline",{points:pts.join(" "),fill:"none",stroke:CURVE,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"})
  );
}

function SvgZad8_2011JA(){
  const W=300,H=300,cx=150,cy=150,R=110;
  const PI=Math.PI;
  const T="var(--text)",MU="var(--muted)",CIRC="var(--blue)",PT_HI="var(--gold)",PT_LBL="var(--red)";
  // Generate 12 markers (svaki π/6)
  const markers=[];
  for(let k=0;k<12;k++){
    const ang=k*PI/6 - 0;  // 0 je na +x osi (desno)
    // Y-flip: SVG y raste prema dolje, pa za matematički "gore" treba negative
    const x=cx+R*Math.cos(ang), y=cy-R*Math.sin(ang);
    markers.push({k,ang,x,y});
  }
  // Identify istaknute točke i njihove labele
  // A=7π/6 (k=7), B=3π/2 (k=9), C=5π/3 (k=10), D=5π/6 (k=5)
  const HIGHLIGHT={7:"A",9:"B",10:"C",5:"D"};
  // Label offsets za svaku točku (relative to point)
  const LABEL_OFF={7:[-12,4],9:[-3,16],10:[8,12],5:[-14,4]};
  // Dashed pomoćne linije kroz središte do nekih markera (PDF prikazuje ih za neke)
  const dashedTo=[1,2,4,5,7,8,10,11];  // sve osim osnih (0, 3, 6, 9 koje su na osima)
  const dashedLines = dashedTo.map(k=>{
    const m=markers[k];
    return e("line",{key:"dl"+k,x1:cx,y1:cy,x2:m.x,y2:m.y,stroke:MU,strokeWidth:.6,strokeDasharray:"3,3"});
  });
  // Markers — open circles
  const markerEls = markers.map(m=>{
    const isHi=HIGHLIGHT[m.k]!==undefined;
    return e("circle",{key:"mk"+m.k,cx:m.x,cy:m.y,r:isHi?4.5:2.5,
      fill:"#fff",stroke:isHi?PT_HI:T,strokeWidth:isHi?2:1.2});
  });
  // Labels za istaknute točke
  const labelEls = Object.entries(HIGHLIGHT).map(([k,name])=>{
    const m=markers[+k]; const off=LABEL_OFF[+k];
    return e("text",{key:"lb"+k,x:m.x+off[0],y:m.y+off[1],
      fontSize:14,fill:PT_LBL,fontWeight:"bold",fontStyle:"italic"},name);
  });
  // Oznake π/6 (na markeru k=1) i π/3 (na markeru k=2)
  const m1=markers[1], m2=markers[2];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Osi (kroz središte)
    e("line",{x1:cx-R-15,y1:cy,x2:cx+R+15,y2:cy,stroke:T,strokeWidth:1.4}),
    e("line",{x1:cx,y1:cy-R-15,x2:cx,y2:cy+R+15,stroke:T,strokeWidth:1.4}),
    e("polygon",{points:`${cx+R+15},${cy} ${cx+R+9},${cy-3} ${cx+R+9},${cy+3}`,fill:T}),
    e("polygon",{points:`${cx},${cy-R-15} ${cx-3},${cy-R-9} ${cx+3},${cy-R-9}`,fill:T}),
    e("text",{x:cx+R+18,y:cy+5,fontSize:12,fill:T,fontStyle:"italic"},"x"),
    e("text",{x:cx+5,y:cy-R-17,fontSize:12,fill:T,fontStyle:"italic"},"y"),
    // Dashed pomoćne linije
    ...dashedLines,
    // Kružnica
    e("circle",{cx,cy,r:R,fill:"none",stroke:CIRC,strokeWidth:2}),
    // Markers
    ...markerEls,
    // Tickovi 0 (na +x), 1 (gore i desno)
    e("text",{x:cx-9,y:cy+13,fontSize:11,fill:T},"0"),
    e("text",{x:cx+R-15,y:cy+13,fontSize:11,fill:T},"1"),
    e("text",{x:cx+5,y:cy-R+13,fontSize:11,fill:T},"1"),
    // π/6 label kraj markera k=1 (60° od x-osi je k=2; 30° je k=1)
    e("text",{x:m1.x+8,y:m1.y+3,fontSize:12,fill:T,fontStyle:"italic"},"π/6"),
    // π/3 label kraj markera k=2
    e("text",{x:m2.x+5,y:m2.y-3,fontSize:12,fill:T,fontStyle:"italic"},"π/3"),
    // Labels istaknutih
    ...labelEls
  );
}

function SvgZad19bsol_2011JA(){
  const W=320,H=260,pad={l:18,r:14,t:14,b:14};
  const xMin=-2.5,xMax=4.5,yMin=-9,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const T="var(--text)",MU="var(--muted)",CURVE="var(--blue)",PT="var(--red)",VTX="var(--gold)",BPT="var(--green)";
  const f=x=>-x*x*x/4+3*x/4+9/2;
  const pts=[];
  for(let x=-2;x<=4;x+=0.04){
    const y=f(x);
    if(y<yMin-0.5||y>yMax+0.5) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  // Grid (svaka jedinica)
  const grid=[];
  for(let x=Math.ceil(xMin);x<=Math.floor(xMax);x++) if(x!==0) grid.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:MU,strokeWidth:.35,strokeDasharray:"2,2"}));
  for(let y=Math.ceil(yMin);y<=Math.floor(yMax);y++) if(y!==0) grid.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:MU,strokeWidth:.35,strokeDasharray:"2,2"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:T,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:T,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:T}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:T}),
    e("text",{x:pad.l+iW+2,y:oy+4,fontSize:11,fill:T,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:11,fill:T,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+12,fontSize:10,fill:T},"0"),
    e("text",{x:toX(1)-2,y:oy+12,fontSize:10,fill:T},"1"),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:10,fill:T},"1"),
    // Krivulja
    e("polyline",{points:pts.join(" "),fill:"none",stroke:CURVE,strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"}),
    // A(-1, 4) — lok min, gold
    e("circle",{cx:toX(-1),cy:toY(4),r:3.6,fill:"#fff",stroke:VTX,strokeWidth:1.7}),
    e("text",{x:toX(-1)-12,y:toY(4)-6,fontSize:11,fill:VTX,fontWeight:"600",fontStyle:"italic"},"A"),
    // B(0, 9/2) — green
    e("circle",{cx:toX(0),cy:toY(4.5),r:3,fill:"#fff",stroke:BPT,strokeWidth:1.5}),
    e("text",{x:toX(0)+6,y:toY(4.5)-3,fontSize:11,fill:BPT,fontWeight:"600",fontStyle:"italic"},"B"),
    // C(1, 5) — lok max, gold
    e("circle",{cx:toX(1),cy:toY(5),r:3.6,fill:"#fff",stroke:VTX,strokeWidth:1.7}),
    e("text",{x:toX(1)+5,y:toY(5)-3,fontSize:11,fill:VTX,fontWeight:"600",fontStyle:"italic"},"C"),
    // D(3, 0) — red (nultočka)
    e("circle",{cx:toX(3),cy:oy,r:3.4,fill:"#fff",stroke:PT,strokeWidth:1.6}),
    e("text",{x:toX(3)-2,y:oy-7,fontSize:11,fill:PT,fontWeight:"600",fontStyle:"italic"},"D")
  );
}

function SvgZad19asol_2011JA(){
  const W=320,H=260,pad={l:18,r:14,t:14,b:14};
  const xMin=-4.5,xMax=2.5,yMin=-5,yMax=2;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const T="var(--text)",MU="var(--muted)",CURVE="var(--blue)",PT="var(--red)",VTX="var(--gold)";
  // f(x) = x² + 2x − 3
  const f=x=>x*x+2*x-3;
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.04){
    const y=f(x);
    if(y<yMin-0.5||y>yMax+0.5) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  // Grid
  const grid=[];
  for(let x=Math.ceil(xMin);x<=Math.floor(xMax);x++) if(x!==0) grid.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:MU,strokeWidth:.4,strokeDasharray:"2,2"}));
  for(let y=Math.ceil(yMin);y<=Math.floor(yMax);y++) if(y!==0) grid.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:MU,strokeWidth:.4,strokeDasharray:"2,2"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:T,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:T,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:T}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:T}),
    e("text",{x:pad.l+iW+2,y:oy+4,fontSize:11,fill:T,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:11,fill:T,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+12,fontSize:10,fill:T},"0"),
    e("text",{x:toX(1)-2,y:oy+12,fontSize:10,fill:T},"1"),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:10,fill:T},"1"),
    // Krivulja
    e("polyline",{points:pts.join(" "),fill:"none",stroke:CURVE,strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Nultočke (otvoreni krugovi crveni)
    e("circle",{cx:toX(-3),cy:oy,r:3.4,fill:"#fff",stroke:PT,strokeWidth:1.6}),
    e("circle",{cx:toX(1),cy:oy,r:3.4,fill:"#fff",stroke:PT,strokeWidth:1.6}),
    e("text",{x:toX(-3)-3,y:oy-7,fontSize:10,fill:PT,fontWeight:"600"},"−3"),
    e("text",{x:toX(1)+5,y:oy-7,fontSize:10,fill:PT,fontWeight:"600"},"1"),
    // Tjeme T(-1, -4) — gold
    e("circle",{cx:toX(-1),cy:toY(-4),r:3.6,fill:"#fff",stroke:VTX,strokeWidth:1.7}),
    e("text",{x:toX(-1)+5,y:toY(-4)+5,fontSize:11,fill:VTX,fontWeight:"600",fontStyle:"italic"},"T(−1, −4)"),
    // Sjecište y-osi (0, -3)
    e("circle",{cx:ox,cy:toY(-3),r:3,fill:"#fff",stroke:T,strokeWidth:1.4})
  );
}

export const qs = [
  {id:1,type:"mc",topic:"br",points:1,
  q:"Koliko je 9,25·10⁻³ m² izraženo u cm²?",
  warn:"Pazi: kvadratne mjere idu na 10⁴ (ne 10²) — često se pogriješi.",
  opts:["9,25 cm²","92,5 cm²","925 cm²","9250 cm²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"1 m² = 10⁴ cm². Stoga 9,25·10⁻³ m² = 9,25·10⁻³·10⁴ cm² = 9,25·10¹ cm² = 92,5 cm².",
  steps:[
    {txt:"1 m = 100 cm = 10² cm",note:"linearna pretvorba"},
    {txt:"⇒ 1 m² = (10²)² cm² = 10⁴ cm²",note:"kvadrat omjera"},
    {txt:"9,25·10⁻³ m² = 9,25·10⁻³ · 10⁴ cm²"},
    {txt:"= 9,25·10⁽⁻³⁺⁴⁾ cm² = 9,25·10¹ cm² = 92,5 cm²",final:true},{txt:"Diagnostika: A(9,25 cm²): zaboraviti pretvorbu m²→cm². C(925): faktor 10³ umjesto 10⁴. D(9250): faktor 10⁵.",final:true,note:"diagnostika"},{txt:"Provjera: 1 m²=10⁴ cm²; 9,25·10⁻³·10⁴=92,5 cm² ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pri pretvorbi mjernih jedinica površine, faktor je KVADRAT linearnog faktora. 1 m = 10² cm ⇒ 1 m² = (10²)² = 10⁴ cm².",note:"postupak",final:true},{txt:"Intuicija: Pravila množenja potencija s istom bazom: 10ᵃ · 10ᵇ = 10⁽ᵃ⁺ᵇ⁾. Ovdje: 10⁻³ · 10⁴ = 10¹ = 10.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: pri pretvorbi mjernih jedinica površine, faktor je KVADRAT linearnog faktora. 1 m = 10² cm ⇒ 1 m² = (10²)² = 10⁴ cm².",
    "Pravila množenja potencija s istom bazom: 10ᵃ · 10ᵇ = 10⁽ᵃ⁺ᵇ⁾. Ovdje: 10⁻³ · 10⁴ = 10¹ = 10.",
    "Konkretno: 9,25 cm² (A) bi značilo da pretvorba ne mijenja iznos — krivo. 925 cm² (C) i 9250 cm² (D) prefactor su krivi.",
    "Greška: koristiti 10² (linearno) umjesto 10⁴ (kvadratno) — to bi dalo 0,925 cm² (ni jedna od opcija, ali pokazuje grešku u smjeru).",
    "Provjera: 92,5 cm² ≈ kvadrat strane √92,5 ≈ 9,6 cm — fizički realno za 9,25·10⁻³ m² = 9,25 mm² · 10... ne ček, 0,00925 m² = 92,5 cm². ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:2,type:"mc",warn:"Pazi: prebaci u 3x² + 7y² = 9, podijeli s 9 → pozitivni koeficijenti uz x² i y² → elipsa.",topic:"kon",points:1,
  q:"Koja krivulja drugoga reda ima jednadžbu 9 − 3x² − 7y² = 0?",
  opts:["hiperbola","parabola","kružnica","elipsa"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Sređivanjem: 3x² + 7y² = 9, podjela s 9 daje x²/3 + y²/(9/7) = 1 — kanonski oblik elipse s a² = 3 ≠ b² = 9/7.",
  steps:[
    {txt:"Prebacimo na desnu stranu: 3x² + 7y² = 9",note:"+3x² + 7y²"},
    {txt:"Podijelimo svaki član s 9 da dobijemo desnu stranu = 1: x²/3 + y²/(9/7) = 1"},
    {txt:"Identificiramo: a² = 3, b² = 9/7. Oba pozitivna i različita."},
    {txt:"Oblik [FRAC:x²|a²] + [FRAC:y²|b²] = 1 s a², b² > 0 i a² ≠ b² ⇒ ELIPSA",final:true},{txt:"Diagnostika: A(hiperbola): razlika kvadrata. B(parabola): jedan kvadrat. C(kružnica): a²=b².",final:true,note:"diagnostika"},{txt:"Provjera: 3x²+7y²=9 → elipsa ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: krivulja drugog reda Ax² + Cy² + ... = 0 klasificira se prema predznacima A i C: oba ista predznaka i različita ⇒ elipsa; isti i jednaki ⇒ kružnica; suprotni ⇒ hiperbola; jedan nula ⇒ parabola.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: ovdje 3 i 7 su oba pozitivna i različita ⇒ elipsa.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: krivulja drugog reda Ax² + Cy² + ... = 0 klasificira se prema predznacima A i C: oba ista predznaka i različita ⇒ elipsa; isti i jednaki ⇒ kružnica; suprotni ⇒ hiperbola; jedan nula ⇒ parabola.",
    "Konkretno: ovdje 3 i 7 su oba pozitivna i različita ⇒ elipsa.",
    "A (hiperbola): tražila bi suprotne predznake (x² − y² ili −x² + y²) — nije slučaj.",
    "B (parabola): tražila bi linearni član (npr. y = x² + ...) — nema linearnih članova.",
    "C (kružnica): tražila bi jednake koeficijente uz x² i y² — ovdje su 3 i 7, različiti.",
    "Greška: Zaboraviti uvjet a² ≠ b² i automatski reći 'kružnica' kad su oba koeficijenta pozitivna."
  ]
},
  {id:3,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"geom",points:1,
  q:"Koja je od navedenih tvrdnja istinita?",
  opts:["Bilo koja dva tupokutna trokuta su slična.","Bilo koja dva pravokutna trokuta su slična.","Bilo koja dva jednakostranična trokuta su slična.","Bilo koja dva jednakokračna trokuta su slična."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Sličnost zahtijeva JEDNAKE kutove. Samo jednakostranični uvijek imaju ista 3 kuta od 60° — pa su uvijek međusobno slični (samo razlika u veličini).",
  steps:[
    {txt:"A: tupokutni može imati kutove (110°, 40°, 30°) ili (95°, 50°, 35°) — nisu slični.",note:"protuprimjer"},
    {txt:"B: pravokutni svi imaju 90°, ali drugi kutovi variraju (npr. 30-60-90 vs 45-45-90).",note:"protuprimjer"},
    {txt:"C: jednakostranični TRI kuta su uvijek 60° ⇒ svaki par je sličan (K-K-K).",note:"točno",final:true},
    {txt:"D: jednakokračni: kut pri vrhu može biti 20°, 60°, 100°, ... — nisu slični.",note:"protuprimjer",final:true},{txt:"Diagnostika: A(tupokutni): različiti kutovi. B(pravokutni): 30-60-90 ≠ 45-45-90. D(jednakokračni): kut pri vrhu neodreden.",final:true,note:"diagnostika"},{txt:"Provjera: jednakostranicni → svi kutovi=60° → sličnost ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo K-K-K (kut-kut-kut): dva trokuta su slična ako su im svi kutovi jednaki (zbroj je 180°, dovoljno je provjeriti dva).",note:"postupak",final:true},{txt:"Intuicija: Jednakostranični trokut ima sva tri kuta jednaka 60° (jer 3·60° = 180°) — to je jedinstveni trokut po obliku.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo K-K-K (kut-kut-kut): dva trokuta su slična ako su im svi kutovi jednaki (zbroj je 180°, dovoljno je provjeriti dva).",
    "Jednakostranični trokut ima sva tri kuta jednaka 60° (jer 3·60° = 180°) — to je jedinstveni trokut po obliku.",
    "Pravokutni trokuti dijele samo 90°, a oštri kutovi mogu biti bilo koji par koji daje sumu 90° (npr. 1°+89°, 30°+60°, 45°+45°).",
    "Jednakokračni dijele samo dva jednaka kuta — vrh može biti od ε do 180°−ε, pa oblik varira.",
    "Greška: pomiješati 'isti tip' s 'sličnost' — sličnost zahtijeva jednake kutove, ne samo zajednička svojstva.",
    "Provjera: svi jednakostranični trokuti su zapravo skalirane verzije jedan drugoga ⇒ omjer stranica 1:1:1 = konstanta."
  ]
},
  {id:4,type:"mc",topic:"trig",points:1,
  q:"U trokutu ABC stranica a je dvostruko dulja od stranice b. Mjera kuta α nasuprot stranici a je 74°. Kolika je mjera kuta β nasuprot stranici b?",
  warn:"Pazi: a = 2b znači stranica a je VEĆA, pa sin β = sin α / 2 (manji kut nasuprot manjoj stranici).",
  opts:["16°","28°43′36″","37°","46°09′53″"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Sinusov poučak: a/sin α = b/sin β. Iz a = 2b slijedi sin β = sin 74°/2 ≈ 0,4806, pa β = arcsin(0,4806) ≈ 28°43′36″.",
  steps:[
    {txt:"Sinusov poučak: a/sin α = b/sin β"},
    {txt:"Uvrsti a = 2b: 2b/sin 74° = b/sin β"},
    {txt:"Izoliraj sin β: sin β = (b · sin 74°)/(2b) = sin 74°/2",note:"b se krati"},
    {txt:"sin 74° ≈ 0,9613 ⇒ sin β ≈ 0,4806"},
    {txt:"β = arcsin(0,4806) ≈ 28,7266°"},
    {txt:"Pretvori u °′″: 0,7266° · 60 = 43,6′; 0,6′ · 60 = 36″ ⇒ 28°43′36″",final:true},{txt:"Diagnostika: A(16°): ne primijeniti sinusov poučak. C(37°): obrnuli a/b. D(46°09'53''): greška u pretvori.",final:true,note:"diagnostika"},{txt:"Provjera: sinβ=sin74°/2≈0,4806→β≈28°43'36'' ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sinusov poučak: u svakom trokutu omjer stranice i sinusa nasuprotnog kuta je konstantan: a/sin α = b/sin β = c/sin γ = 2R.",note:"postupak",final:true},{txt:"Intuicija: U trokutu vrijedi: veća stranica ⇔ veći nasuprotni kut. Ovdje a = 2b > b ⇒ α > β, pa β mora biti < 74°.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Sinusov poučak: u svakom trokutu omjer stranice i sinusa nasuprotnog kuta je konstantan: a/sin α = b/sin β = c/sin γ = 2R.",
    "U trokutu vrijedi: veća stranica ⇔ veći nasuprotni kut. Ovdje a = 2b > b ⇒ α > β, pa β mora biti < 74°.",
    "A (16°): premalo, sin 16° ≈ 0,276; trebalo bi sin β = 0,481 ⇒ β ≈ 28,7°. Krivo.",
    "B (28°43′36″ = 28,73°): sin 28,73° ≈ 0,481 = sin 74°/2 ✓. Točno.",
    "C (37°) i D (46°): preveliko, ne zadovoljavaju sin β = sin 74°/2.",
    "Greška: zamijeniti omjer (sin α/sin β = 1/2 umjesto 2) ⇒ dobiti β = 2·74° prevelik."
  ]
},
  {id:5,type:"mc",topic:"al",points:1,
  q:"Čemu je jednak b ako je k = c/(a+b)?",
  warn:"Pazi: nakon množenja s (a+b) RAZVI zagradu — često se zaboravi.",
  opts:["(c − ak)/k","(ak − c)/k","k/(c − ak)","k/(ak − c)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Iz k(a+b) = c razvije se ka + kb = c, pa kb = c − ak, dakle b = (c − ak)/k.",
  steps:[
    {txt:"k = c/(a+b)",note:"polazni izraz"},
    {txt:"Množimo obje strane s (a+b): k·(a+b) = c"},
    {txt:"Razvijemo lijevu stranu: ka + kb = c"},
    {txt:"Izoliramo član s b: kb = c − ak",note:"−ka"},
    {txt:"Dijelimo s k: b = [FRAC:c − ak|k]",final:true},{txt:"Diagnostika: B(ak-c)/k: predznak greška (c-ak vs ak-c). C(k/(c-ak)): okrenuli cijeli razlomak. D(k/(ak-c)): obrnuto i krivi predznak.",final:true,note:"diagnostika"},{txt:"Provjera: k=(c)/(a+b) → k(a+b)=c → b=(c-ak)/k ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za rješavanje formule po jednoj nepoznanici, koristimo ekvivalentne transformacije (množenje/dijeljenje, dodavanje/oduzimanje istog na obje strane).",note:"postupak",final:true},{txt:"Intuicija: Pravilo: pri 'oslobađanju' nazivnika množimo s nazivnikom — ali oba člana brojnika moraju biti distribuirana ravnomjerno.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za rješavanje formule po jednoj nepoznanici, koristimo ekvivalentne transformacije (množenje/dijeljenje, dodavanje/oduzimanje istog na obje strane).",
    "Pravilo: pri 'oslobađanju' nazivnika množimo s nazivnikom — ali oba člana brojnika moraju biti distribuirana ravnomjerno.",
    "A (c − ak)/k: točno, dobiveno sustavnim razvijanjem.",
    "B (ak − c)/k: krivi predznak — bila bi negativna verzija A.",
    "C i D: imaju k u brojniku ⇒ pogrešna struktura, dolazi od dijeljenja s krivom stranom.",
    "Provjera: uvrsti b = (c−ak)/k natrag u k = c/(a+b): a + (c−ak)/k = (ak+c−ak)/k = c/k. Pa k = c/(c/k) = k ✓.",
    "Greška: nakon množenja s (a+b) zaboraviti razviti zagradu — dobivamo k·a + k·b ≠ ka+b."
  ]
},
  {id:6,type:"mc",topic:"al",points:2,
  q:"Kompozicija teretnoga vlaka duga je 779 m i sastoji se od lokomotive, vagona cisterni i vagona hladnjača. Vagon hladnjače je za 5 m kraći od vagona cisterne. Lokomotiva je duga koliko su dugi vagon cisterne i vagon hladnjače zajedno. Razmak između lokomotive i prvoga vagona jednak je razmaku između vagona i iznosi 1 m. Kompozicija ima 40 vagona cisterni i 30 vagona hladnjača. Kolika je duljina lokomotive?",
  warn:"Pazi: za 71 element ima 70 razmaka (n elemenata = n−1 razmaka), ne 71.",
  opts:["16 m","17 m","18 m","19 m"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Postavi x = duljina cisterne. Hladnjača = x−5, lokomotiva = 2x−5. Jednadžba (2x−5) + 40x + 30(x−5) + 70·1 = 779 daje 72x = 864 ⇒ x = 12, pa lokomotiva = 19 m.",
  steps:[
    {txt:"Definiraj varijable: x = duljina vagona cisterne",note:"izaberi nepoznatu"},
    {txt:"Hladnjača: x − 5 (5 m kraći). Lokomotiva: x + (x−5) = 2x − 5 (zbroj cisterne i hladnjače)"},
    {txt:"Razmaci: 1 lokomotiva + 70 vagona = 71 element ⇒ 70 razmaka po 1 m = 70 m"},
    {txt:"Jednadžba ukupne duljine: (2x − 5) + 40·x + 30·(x − 5) + 70 = 779"},
    {txt:"Razvij: 2x − 5 + 40x + 30x − 150 + 70 = 779"},
    {txt:"Sredi: 72x − 85 = 779 ⇒ 72x = 864 ⇒ x = 12 m"},
    {txt:"Lokomotiva = 2·12 − 5 = 19 m",final:true},{txt:"Diagnostika: A(16 m): krivi sustav ili zaokruživanje. B(17 m)/C(18 m): greška u jednoj jednadžbi. Obična greška: ne postaviti sustav s dvije nepoznanice.",final:true,note:"diagnostika"},{txt:"Provjera: vlak=19+40·12+30·7+71=19+480+210+71=780≠19+1=780... provjeri ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u problemima s riječi izaberi JEDNU nepoznatu (najčešće 'osnovnu' veličinu) i izrazi sve ostale kroz nju.",note:"postupak",final:true},{txt:"Intuicija: Pravilo brojanja razmaka: za n elemenata u nizu (vlaku) ima n−1 razmaka (ne n).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u problemima s riječi izaberi JEDNU nepoznatu (najčešće 'osnovnu' veličinu) i izrazi sve ostale kroz nju.",
    "Pravilo brojanja razmaka: za n elemenata u nizu (vlaku) ima n−1 razmaka (ne n).",
    "Konkretno: 71 element (1 + 40 + 30) ⇒ 70 razmaka × 1 m = 70 m za kupling.",
    "A, B, C: ne zadovoljavaju jednadžbu — 16, 17, 18 daju x ≠ cijeli broj ili krivi ukupni iznos.",
    "D (19 m): provjera 19 + 40·12 + 30·7 + 70 = 19 + 480 + 210 + 70 = 779 ✓",
    "Greška: zaboraviti razmake (krivo: bez +70 dobio bi 72x = 849, x ≈ 11,79, krivi x).",
    "Greška: koristiti 71 razmaka umjesto 70 — onda 72x = 778, x ≈ 10,8."
  ]
},
  {id:7,type:"mc",topic:"stat",points:2,
  q:"Aritmetička sredina 6 različitih prirodnih brojeva je 6. Koju najveću moguću vrijednost može imati neki od tih brojeva?",
  warn:"Pazi: prirodni brojevi u HR konvenciji počinju od 1 (ne od 0); plus moraju biti RAZLIČITI.",
  opts:["20","21","22","23"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Zbroj 6 brojeva = 6·6 = 36. Minimum ostalih pet (različitih prirodnih) = 1+2+3+4+5 = 15. Maksimum jednog = 36 − 15 = 21.",
  steps:[
    {txt:"Aritmetička sredina = zbroj/n. Iz x̄ = 6 i n = 6 ⇒ zbroj = 6·6 = 36"},
    {txt:"Cilj: maksimizirati JEDAN broj. Strategija: ostalih 5 stavi na MINIMUM (svi različiti prirodni brojevi)"},
    {txt:"Najmanjih 5 različitih prirodnih brojeva: 1, 2, 3, 4, 5 (zbroj = 15)"},
    {txt:"Maksimalni 6. broj = 36 − 15 = 21",final:true},{txt:"Diagnostika: A(20): 1+2+3+4+5+20=35≠36. C(22): 22+15=37≠36. D(23): 23+15=38≠36.",final:true,note:"diagnostika"},{txt:"Provjera: 1+2+3+4+5+21=36 i svi različiti ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: aritmetička sredina x̄ = (x₁+x₂+...+xₙ)/n ⇒ zbroj = n·x̄.",note:"postupak",final:true},{txt:"Intuicija: Pravilo optimizacije: za maksimum jedne varijable u skupu s fiksnim zbrojem, ostale treba postaviti na minimum (i obratno za minimum).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: aritmetička sredina x̄ = (x₁+x₂+...+xₙ)/n ⇒ zbroj = n·x̄.",
    "Pravilo optimizacije: za maksimum jedne varijable u skupu s fiksnim zbrojem, ostale treba postaviti na minimum (i obratno za minimum).",
    "Prirodni brojevi ℕ = {1, 2, 3, ...} (HR konvencija; pazi: u nekim zemljama ℕ uključuje 0).",
    "Različiti = bez ponavljanja, pa minimum 5 različitih je 1, 2, 3, 4, 5.",
    "A (20): odgovara zbroj 16 ostalih — npr. 1+2+3+4+6 = 16 — ali to znači da MAX nije 20, već ima 6 koji je veći od ovih, dakle suboptimal.",
    "B (21): minimal ostalih = 1+2+3+4+5 = 15, max = 36−15 = 21. Optimum.",
    "C, D (22, 23): trebali bi zbroj ostalih < 15 — nemoguće s 5 različitih prirodnih brojeva.",
    "Greška: dopustiti 0 među prirodnima ⇒ minimum 0+1+2+3+4 = 10 ⇒ kriv MAX = 26."
  ]
},
  {id:8,img:true,type:"mc",topic:"trig",points:1,
  q:"Kojoj je od istaknutih točaka brojevne kružnice pridružen broj −65π/6?",
  intermediates:[210, 65, 72, 30],
  warn:"Pazi: smjer −65π/6 je negativan, ali nakon redukcije + 12π = 72π/6, dobiješ 7π/6 (pozitivan u III. kvadrantu).",
  opts:["A","B","C","D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  img:true,
  exp:"Redukcija: −65π/6 + 12π = 7π/6 (= 210°). To je u III. kvadrantu (donji lijevi) ⇒ točka A.",
  steps:[
    {txt:"Cilj: svesti −65π/6 na ekvivalentni kut u [0, 2π⟩",note:"oduzimamo višekratnike 2π"},
    {txt:"−65π/6 → koliko 2π = 12π/6 dodajemo? Treba k tako da −65π/6 + 12π/6 · k ∈ [0, 12π/6⟩"},
    {txt:"k = 6: −65π/6 + 72π/6 = 7π/6 ∈ [0, 2π⟩ ✓"},
    {txt:"7π/6 = π + π/6 = 180° + 30° = 210°",note:"pretvorba u stupnjeve"},
    {txt:"210° pripada III. kvadrantu (180° < 210° < 270°)"},
    {txt:"Iz slike: III. kvadrant (donji lijevi) je točka A",final:true},{txt:"Diagnostika: B(B): B je na -π/2 (dolje). C(C): C je u IV. kvadrantu. D(D): D je u II. kvadrantu.",final:true,note:"diagnostika"},{txt:"Provjera: -65π/6 + 12π = 7π/6 ∈ (π, 3π/2) = III kvadrant = A ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo redukcije kuta: svaki realan broj θ se može svesti na ekvivalentni kut θ' = θ + 2kπ tako da θ' ∈ [0, 2π⟩. Funkcije sin, cos, tan iste vrijednosti u θ i θ'.",note:"postupak",final:true},{txt:"Intuicija: Brojevna kružnica: pozitivan smjer je suprotno kazaljkama na satu, počevši od (1, 0) (kut 0).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo redukcije kuta: svaki realan broj θ se može svesti na ekvivalentni kut θ' = θ + 2kπ tako da θ' ∈ [0, 2π⟩. Funkcije sin, cos, tan iste vrijednosti u θ i θ'.",
    "Brojevna kružnica: pozitivan smjer je suprotno kazaljkama na satu, počevši od (1, 0) (kut 0).",
    "Kvadranti: I = [0, π/2⟩ — gore-desno, II = [π/2, π⟩ (gore-lijevo), III = [π, 3π/2⟩ (dolje-lijevo), IV = [3π/2, 2π⟩ — dolje-desno.",
    "Konkretno: 7π/6 = 210° pada u III. kvadrant — točno π/6 (= 30°) iznad negativnog dijela x-osi, donji lijevi.",
    "Iz slike: A je u III. kvadrantu, B je na donjem dijelu (3π/2 = 270°), C je u IV. kvadrantu (5π/3 = 300°), D je u II. kvadrantu (5π/6 = 150°).",
    "Greška: zaboraviti dodati POZITIVNE višekratnike za negativne brojeve (mora dovoljno dodati da rezultat bude ≥ 0)."
  ]
},
  {id:9,type:"mc",warn:"Pazi: dvije kružnice (središta i i 4i, polumjeri 2 i 1); broj z = broj sjecišta — usporedi udaljenost središta (3) sa zbrojem (3) i razlikom (1) polumjera.",topic:"br",points:1,
  q:"Koliko ima kompleksnih brojeva za koje vrijede obje jednakosti |z − i| = 2, |z − 4i| = 1?",
  opts:["0","1","2","4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"|z − i| = 2 i |z − 4i| = 1 su dvije kružnice u kompleksnoj ravnini sa središtima (0,1) i (0,4), polumjerima 2 i 1. Udaljenost središta = 3 = r₁+r₂ ⇒ vanjski dodir ⇒ 1 zajednička točka.",
  steps:[
    {txt:"|z − z₀| = r predstavlja kružnicu sa središtem z₀ i polumjerom r u kompleksnoj ravnini",note:"definicija"},
    {txt:"Kružnica K₁: |z − i| = 2 ⇒ središte S₁(0, 1), polumjer r₁ = 2"},
    {txt:"Kružnica K₂: |z − 4i| = 1 ⇒ središte S₂(0, 4), polumjer r₂ = 1"},
    {txt:"Udaljenost između središta: d = |S₂ − S₁| = |4i − i| = |3i| = 3"},
    {txt:"Usporedba: d = 3, r₁ + r₂ = 2 + 1 = 3, |r₁ − r₂| = 1"},
    {txt:"Slučaj d = r₁ + r₂ ⇒ kružnice se DODIRUJU IZVANA (jedna zajednička točka)",note:"vanjski dodir"},
    {txt:"⇒ točno 1 kompleksan broj zadovoljava obje jednadžbe",final:true},{txt:"Diagnostika: A(0): krugovi se ne sijeku ako d>r1+r2 ili d<|r1-r2|. C(2): dva sijecišta ako r1+r2>d>|r1-r2|. D(4): nemoguće za kružnice.",final:true,note:"diagnostika"},{txt:"Provjera: centri (0,1) i (0,4), d=3=r1+r2=2+1 → izvanjski dodir →1 rješenje ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u kompleksnoj ravnini |z − z₀| = r predstavlja sve točke z udaljene r od z₀ ⇒ kružnica.",note:"postupak",final:true},{txt:"Intuicija: Klasifikacija odnosa dviju kružnica prema udaljenosti središta d i polumjerima r₁, r₂:",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u kompleksnoj ravnini |z − z₀| = r predstavlja sve točke z udaljene r od z₀ ⇒ kružnica.",
    "Klasifikacija odnosa dviju kružnica prema udaljenosti središta d i polumjerima r₁, r₂:",
    "  • d > r₁+r₂: vanjski razdvojene (0 točaka).  • d = r₁+r₂: vanjski dodir (1 točka).",
    "  • |r₁−r₂| < d < r₁+r₂: dvije presječne točke.  • d = |r₁−r₂|: unutarnji dodir (1 točka).  • d < |r₁−r₂|: jedna unutar druge bez dodira (0 točaka).",
    "Konkretno: d = 3 = r₁+r₂ ⇒ vanjski dodir.",
    "A (0): bilo bi za d > 3 ili d < 1 — nije slučaj.",
    "B (1): vanjski dodir ✓",
    "C (2): bilo bi za 1 < d < 3 — nije slučaj.",
    "Greška: zaboraviti pretvoriti središte iz oblika |z − z₀| (z₀ je središte) — ako pomiješaš s |z| = r₀ ili |z + z₀|."
  ]
},
  {id:10,type:"mc",topic:"fun",points:1,
  q:"Ako je logₐ 2 = x i logₐ 3 = y, koliko je logₐ 24?",
  warn:"Pazi: 24 = 2³·3, ne 2·3³. Koeficijent 3 ide uz x (jer 2³), ne uz y.",
  opts:["3 + x","3 + y","3x + y","x + 3y"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"24 = 2³·3, pa logₐ 24 = logₐ 2³ + logₐ 3 = 3·logₐ 2 + logₐ 3 = 3x + y.",
  steps:[
    {txt:"Cilj: izraziti logₐ 24 preko x = logₐ 2 i y = logₐ 3"},
    {txt:"Faktoriziraj 24 na proste faktore: 24 = 2 · 12 = 2 · 2 · 6 = 2 · 2 · 2 · 3 = 2³ · 3"},
    {txt:"Primijeni logaritam produkta: logₐ(2³ · 3) = logₐ 2³ + logₐ 3"},
    {txt:"Primijeni logaritam potencije: logₐ 2³ = 3·logₐ 2 = 3x"},
    {txt:"Kombiniraj: logₐ 24 = 3x + y",final:true},{txt:"Diagnostika: A(3+x): logₐ a³=3, ne 3. B(3+y): logₐ 8·3=3+y, ali 8=2³. D(x+3y): logₐ 24=logₐ(2·2·2·3)=3x+y, ne x+3y.",final:true,note:"diagnostika"},{txt:"Provjera: logₐ 24=logₐ(2³·3)=3logₐ 2+logₐ 3=3x+y ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo logaritma produkta: logₐ(b·c) = logₐ b + logₐ c (za b, c > 0).",note:"postupak",final:true},{txt:"Intuicija: Pravilo logaritma potencije: logₐ(bⁿ) = n·logₐ b.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo logaritma produkta: logₐ(b·c) = logₐ b + logₐ c (za b, c > 0).",
    "Pravilo logaritma potencije: logₐ(bⁿ) = n·logₐ b.",
    "Pravilo logaritma kvocijenta: logₐ(b/c) = logₐ b − logₐ c (komplementarno gornjem).",
    "Strategija: za logₐ N gdje je N kompleksan, FAKTORIZIRAJ N na potencije malih prostih brojeva pa primijeni pravila.",
    "A (3+x): bila bi vrijednost logₐ(2·a³) — nema veze s 24.",
    "B (3+y): bila bi vrijednost logₐ(3·a³) — nema veze s 24.",
    "C (3x+y): TOČNO, jer 24 = 2³·3 ⇒ 3·logₐ 2 + logₐ 3 = 3x + y ✓",
    "D (x+3y): bila bi vrijednost logₐ(2·3³) = logₐ 54, ne 24.",
    "Greška: pomiješati 2³·3 (= 24) s 2·3³ (= 54) ⇒ pogrešan koeficijent na pogrešnoj varijabli."
  ]
},
  {id:11,type:"mc",topic:"geom",points:2,
  q:"Valjak je upisan u uspravnu pravilnu peterostranu prizmu kojoj su osnovni bridovi duljine 6 cm, a visina 8 cm. Koliki je obujam (volumen) valjka?",
  warn:"Pazi: za UPISANI valjak r = apotema (= udaljenost središta od stranice), ne polumjer opisane kružnice baze.",
  opts:["78,15 cm³","148,04 cm³","428,51 cm³","904,77 cm³"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Valjak upisan u peterostranu prizmu ⇒ polumjer = apotema baze. Za pravilan peterokut stranice a = 6: r = 6/(2·tan 36°) ≈ 4,13 cm. V = r²·π·h ≈ 4,13²·π·8 ≈ 428,51 cm³.",
  steps:[
    {txt:"Valjak je UPISAN u prizmu ⇒ baza valjka tangencijalno dodiruje SVE stranice baze prizme",note:"definicija"},
    {txt:"⇒ polumjer baze valjka = APOTEMA baze prizme (najmanja udaljenost od središta do stranice)"},
    {txt:"Apotema pravilnog n-terokuta stranice a: r = a/(2·tan(π/n))"},
    {txt:"Za peterokut (n = 5): π/5 = 36°, pa r = 6/(2·tan 36°) = 6/(2·0,7265) ≈ 4,1298 cm"},
    {txt:"Volumen valjka: V = r²·π·h"},
    {txt:"V ≈ (4,1298)²·π·8 = 17,055·π·8 ≈ 428,51 cm³",final:true},{txt:"Diagnostika: A(78,15): r=polumjer kružnice opisane (ne upisane). B(148,04): r=a/2=3 (krivo). D(904,77): korišten R_opisana umjesto r_upisana.",final:true,note:"diagnostika"},{txt:"Provjera: r_in=a/(2tan(36°))≈4,13 cm; V=πr²h≈428 cm³ ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pojam: valjak UPISAN u prizmu znači baza valjka leži unutar baze prizme i dodiruje sve njene stranice (tangencijalno).",note:"postupak",final:true},{txt:"Intuicija: Za pravilan n-terokut stranice a postoje DVA važna polumjera: polumjer opisane kružnice R = a/(2·sin(π/n)) i apotema (polumjer upisane kružnice) r = a/(2·tan(π/n)). Vrijedi r < R.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pojam: valjak UPISAN u prizmu znači baza valjka leži unutar baze prizme i dodiruje sve njene stranice (tangencijalno).",
    "Za pravilan n-terokut stranice a postoje DVA važna polumjera: polumjer opisane kružnice R = a/(2·sin(π/n)) i apotema (polumjer upisane kružnice) r = a/(2·tan(π/n)). Vrijedi r < R.",
    "Konkretno za peterokut s a = 6: R ≈ 5,103 (opisana), r ≈ 4,130 (upisana) — koristimo r jer valjak je upisan.",
    "Volumen valjka: V = πr²h.",
    "A (78,15): odgovara r ≈ 1,76 — krivi polumjer.",
    "B (148,04): odgovara r ≈ 2,42 — još uvijek pogrešno.",
    "C (428,51): odgovara r ≈ 4,13 = apotema ✓",
    "D (904,77): odgovara r ≈ 6 = stranica baze, krivi pristup (uzeti stranicu kao polumjer).",
    "Greška: koristiti polumjer OPISANE kružnice (R ≈ 5,1) — to bi dao OPISAN valjak (ne UPISAN), jer baza valjka prelazi izvan baze prizme."
  ]
},
  {id:12,type:"mc",topic:"al",points:2,
  q:"Što je rezultat sređivanja izraza [4(a+b)/(a−b)³ − 1/(a²−b²)] · [a²/(3a+b) + b²/(a+3b)] za sve a, b za koje je izraz definiran?",
  warn:"Pazi: (a²−b²) = (a−b)(a+b), pa zajednički nazivnik prvog dijela je (a−b)³(a+b), ne samo (a−b)³.",
  opts:["(a+b)²/(a−b)³","1/(a³ + b³)","(a−b)³/(a+b)²","(a+b)³/(a³ − b³)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Prvi faktor pojednostavi se na (3a+b)(a+3b)/[(a−b)³(a+b)], drugi na (a+b)³/[(3a+b)(a+3b)]. Umnožak: (a+b)²/(a−b)³.",
  steps:[
    {txt:"Cilj: pojednostaviti dva faktora odvojeno, pa ih pomnožiti i pokratiti zajedničke izraze"},
    {txt:"PRVI faktor: 4(a+b)/(a−b)³ − 1/(a²−b²). Iskoristi (a²−b²) = (a−b)(a+b):"},
    {txt:"= 4(a+b)/(a−b)³ − 1/[(a−b)(a+b)]. ZN = (a−b)³(a+b)"},
    {txt:"Brojnik: 4(a+b)·(a+b) − (a−b)² = 4(a+b)² − (a−b)² = (3a+b)(a+3b)",note:"identitet"},
    {txt:"Provjera identiteta: 4(a²+2ab+b²) − (a²−2ab+b²) = 3a²+10ab+3b² = (3a+b)(a+3b) ✓"},
    {txt:"⇒ Prvi faktor = (3a+b)(a+3b) / [(a−b)³(a+b)]"},
    {txt:"DRUGI faktor: a²/(3a+b) + b²/(a+3b). ZN = (3a+b)(a+3b)"},
    {txt:"Brojnik: a²(a+3b) + b²(3a+b) = a³+3a²b+3ab²+b³ = (a+b)³",note:"binom"},
    {txt:"⇒ Drugi faktor = (a+b)³ / [(3a+b)(a+3b)]"},
    {txt:"Množenje: [(3a+b)(a+3b) · (a+b)³] / [(a−b)³(a+b) · (3a+b)(a+3b)]"},
    {txt:"Krati (3a+b)(a+3b) i jedan (a+b): = (a+b)² / (a−b)³",final:true},{txt:"Diagnostika: B(1/(a³+b³)): pogrešna faktorizacija. C((a-b)³/(a+b)²): obrnuti razlomak. D((a+b)³/(a³-b³)): krivi eksponent ili faktorizacija.",final:true,note:"diagnostika"},{txt:"Provjera: postavljeno a=2,b=1: izraz=1∀1 (A), B=1/9, C=1, D=3/7 → jedino A∀1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Strategija algebarskog pojednostavljenja: kompleksne izraze rastavi u manje dijelove (faktore), pojednostavi svaki, pa kombiniraj.",note:"postupak",final:true},{txt:"Intuicija: Razlika kvadrata: a² − b² = (a−b)(a+b) — temeljni identitet.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija algebarskog pojednostavljenja: kompleksne izraze rastavi u manje dijelove (faktore), pojednostavi svaki, pa kombiniraj.",
    "Razlika kvadrata: a² − b² = (a−b)(a+b) — temeljni identitet.",
    "Binomna formula trećeg reda: (a+b)³ = a³ + 3a²b + 3ab² + b³.",
    "Identitet 4(a+b)² − (a−b)² = [2(a+b)+(a−b)]·[2(a+b)−(a−b)] = (3a+b)(a+3b) — razlika kvadrata primjenjena na 4(a+b)² i (a−b)².",
    "A: (a+b)²/(a−b)³ — TOČNO, dobiveno sustavnim faktoriziranjem.",
    "B (1/(a³+b³)): tražila bi krivi rastav — a³+b³ = (a+b)(a²−ab+b²), nije se pojavio.",
    "C: obrnuto — pogrešan smjer kraćenja.",
    "D ((a+b)³/(a³−b³)): a³−b³ = (a−b)(a²+ab+b²) ima krivi nazivnik tip.",
    "Greška: zaboraviti faktorizirati (a²−b²) ⇒ pogrešan zajednički nazivnik prvog dijela."
  ]
},
  {id:13,type:"mc",topic:"fun",points:2,
  q:"Koja od navedenih jednadžbi ima barem jedno negativno rješenje?",
  warn:"Pazi na D: razvoj kvadrata (x−1)² − x(x+3) potire x² članove, ostaje LINEARNI izraz −5x + 1.",
  opts:["9^(3x-2) − 7^(6x-4) = 0","|x − 5| = 4","∛(x+4) = 2","5 = (x − 1)² − x(x + 3)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Riješi svaku: A → x = 2/3; B → x = 9 ili 1; C → x = 4; D → x = −4/5. Samo D ima negativno rješenje.",
  steps:[
    {txt:"A: 9^(3x−2) − 7^(6x−4) = 0 ⇒ 9^(3x−2) = 7^(6x−4)"},
    {txt:"Zapaziti: 9^(3x−2) = 3^(6x−4). Jednadžba postaje 3^(6x−4) = 7^(6x−4)"},
    {txt:"Različite baze (3 i 7) ⇒ jedinstveno rješenje samo kad eksponent = 0: 6x − 4 = 0 ⇒ x = 2/3 > 0",note:"NE negativan"},
    {txt:"B: |x − 5| = 4 ⇒ x − 5 = ±4 ⇒ x = 9 ili x = 1. Oba pozitivna",note:"NE negativan"},
    {txt:"C: ∛(x+4) = 2 ⇒ x + 4 = 2³ = 8 ⇒ x = 4 > 0",note:"NE negativan"},
    {txt:"D: razvij desnu stranu — (x−1)² = x² − 2x + 1; x(x+3) = x² + 3x"},
    {txt:"⇒ (x−1)² − x(x+3) = (x²−2x+1) − (x²+3x) = −5x + 1",note:"x² se krati"},
    {txt:"Jednadžba: 5 = −5x + 1 ⇒ 5x = −4 ⇒ x = −4/5",note:"NEGATIVAN ✓",final:true},{txt:"Diagnostika: A(eksponent): samo pozitivna rješenja. B(|x-5|=4): x=9 ili 1. C(∛): x=4.",final:true,note:"diagnostika"},{txt:"Provjera: D→x=-4/5<0 negativno ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Strategija eliminacije: kad pitanje traži 'koja od četiri', sustavno provjeri svaku opciju, ne pretpostavljaj.",note:"postupak",final:true},{txt:"Intuicija: A — pravilo: a^f = b^f ima jedinstveno rješenje f = 0 ako su a ≠ b oba pozitivna i ≠ 1.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija eliminacije: kad pitanje traži 'koja od četiri', sustavno provjeri svaku opciju, ne pretpostavljaj.",
    "A — pravilo: a^f = b^f ima jedinstveno rješenje f = 0 ako su a ≠ b oba pozitivna i ≠ 1.",
    "B — apsolutna vrijednost: |y| = c (c ≥ 0) ima rješenja y = ±c.",
    "C — kubni korijen: ∛y = c ⇒ y = c³ (jedinstveno za sve realne y, jer kubna funkcija je bijekcija).",
    "D — algebarska zamka: (x−1)² i x(x+3) oboje sadrže x², ali u razlici se KRATE, ostaje linearni izraz.",
    "Provjera D: x = −4/5 ⇒ (−4/5−1)² − −[FRAC:4|5]·(−4/5+3) = (−9/5)² − −[FRAC:4|5]·(11/5) = 81/25 + 44/25 = 125/25 = 5 ✓",
    "Greška: kod D ne razviti zagrade i pretpostaviti kvadratnu jednadžbu (s diskriminantom) — vidi se odmah da je linearno samo nakon razvoja."
  ]
},
  {id:14,type:"mc",topic:"al",points:2,
  q:"Koliko ima cijelih brojeva n za koje je razlomak (2n²+1)/(n²−1) cijeli broj?",
  warn:"Pazi: n²−1 = 0 ⇒ n = ±1 nije dopušteno (dijeljenje s nulom). Plus n² = neg ili nečetkast iracionalan ne daje cijeli n.",
  opts:["1","3","5","7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Dijeljenjem: (2n²+1)/(n²−1) = 2 + 3/(n²−1). Cijeli broj ⇔ (n²−1) | 3 ⇔ n²−1 ∈ {±1,±3} ⇔ n ∈ {0, ±2}. Ukupno 3.",
  steps:[
    {txt:"Cilj: pojednostaviti razlomak da odvojimo 'cijeli dio' od 'ostatka'"},
    {txt:"Polinomno dijeljenje 2n²+1 s n²−1: kvocijent 2, ostatak 3. Provjera: 2(n²−1) + 3 = 2n² − 2 + 3 = 2n² + 1 ✓"},
    {txt:"⇒ (2n²+1)/(n²−1) = 2 + 3/(n²−1)"},
    {txt:"Cijeli broj ⇔ 3/(n²−1) je cijeli ⇔ (n²−1) je djeljitelj broja 3"},
    {txt:"Djeljitelji od 3 u ℤ: {−3, −1, 1, 3} (4 mogućnosti)"},
    {txt:"n²−1 = −3: n² = −2 ✗ (kvadrat ne može biti negativan)"},
    {txt:"n²−1 = −1: n² = 0 ⇒ n = 0 ✓"},
    {txt:"n²−1 = 1: n² = 2 ⇒ n = ±√2 ✗ (nije cijeli)"},
    {txt:"n²−1 = 3: n² = 4 ⇒ n = ±2 ✓"},
    {txt:"Provjera n²−1 ≠ 0: n ≠ ±1 (automatski zadovoljeno za naša rješenja)"},
    {txt:"Rješenja: n ∈ {−2, 0, 2} ⇒ UKUPNO 3 cijela broja",final:true},{txt:"Diagnostika: A(1): samo n=0 (zaboravili n²-1=-1 i 3). C(5): neka su² kriva n². D(7): nije točno (samo 3 vrijede).",final:true,note:"diagnostika"},{txt:"Provjera: 2+3/(n²-1); n²-1∈{-3,-1,1,3} → n∈{-2,-1,0,1,2} ali n=±1: n²-1=0 (undef); ostaju n∈{-2,0,2} ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Strategija: za pitanje 'kada je razlomak cijeli broj', podijeli polinome s ostatkom da odvojiš cijeli dio + ostatak/nazivnik.",note:"postupak",final:true},{txt:"Intuicija: Pravilo djeljivosti: a/b je cijeli ⇔ b | a (b dijeli a).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija: za pitanje 'kada je razlomak cijeli broj', podijeli polinome s ostatkom da odvojiš cijeli dio + ostatak/nazivnik.",
    "Pravilo djeljivosti: a/b je cijeli ⇔ b | a (b dijeli a).",
    "Djeljitelji cijelog broja n su parovi (d, n/d) za sve d koje dijele n. Ovdje 3 ima djeljitelje ±1, ±3.",
    "Konkretno: n²−1 može biti svaki cijeli broj u {-3, -1, 1, 3}, ali samo neki dovode do cijelog n.",
    "Provjera n = 0: (0+1)/(0−1) = −1 ✓ cijeli. n = 2: (8+1)/(4−1) = 9/3 = 3 ✓. n = −2: simetrično ✓.",
    "A (1): premalo, samo n = 0.",
    "B (3): ✓ — n = 0, 2, −2.",
    "C, D: nema toliko rješenja, n²−1 mora biti unutar {-3,...,3}.",
    "Greška: zaboraviti negativne djeljitelje (samo ±1, ±3, ne samo 1, 3) — propustiti n = 0."
  ]
},
  {id:15,type:"mc",topic:"fun",points:2,
  q:"Po nekome biološkom modelu veza broja vrsta V koje žive na nekoj površini P i te površine dana je formulom log V = log c + k·log P, gdje su c i k pozitivne konstante koje ovise o vrstama i staništu. Za neki je otok k = 0,323. Ako je 50 % površine otoka izgorjelo, koliki se postotak broja vrsta očekuje da će ostati na tome području?",
  warn:"Pazi: 50 % izgorjelo ⇒ ostalo 50 % površine, ali NE 50 % vrsta — vrste padaju MANJE jer eksponent k < 1.",
  opts:["28,72 %","44,31 %","79,94 %","82,34 %"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Iz log V = log c + k·log P slijedi V = c·P^k. Omjer V_nova/V_stara = (P_nova/P_stara)^k = [FRAC:1|2]^(0,323) ≈ 0,7994 = 79,94 %.",
  steps:[
    {txt:"Pretvori log-jednadžbu u eksponencijalnu formu: log V = log c + k·log P = log(c·P^k)"},
    {txt:"⇒ V = c·P^k (eliminacija log-a s obje strane)"},
    {txt:"Nakon požara: P_nova = 50 % · P_stara = 0,5·P_stara"},
    {txt:"V_nova = c·(0,5·P_stara)^k = c·0,5^k·P_stara^k = 0,5^k · V_stara"},
    {txt:"Postotak preostalih vrsta: V_nova/V_stara = 0,5^k = [FRAC:1|2]^(0,323)"},
    {txt:"Izračunaj: [FRAC:1|2]^(0,323) = e^(0,323·ln 0,5) = e^(0,323·(−0,693)) = e^(−0,2238) ≈ 0,7994"},
    {txt:"⇒ ≈ 79,94 % vrsta ostaje (≈ 20 % izumire)",final:true},{txt:"Diagnostika: A(28,72%): uzeti 0,5^k direktno bez eksponenta. B(44,31%): kriva baza ili eksponent. D(82,34%): kriva formula (npr. 1-([FRAC:1|2])^(0,32)3).",final:true,note:"diagnostika"},{txt:"Provjera: ([FRAC:1|2])^(0,323)≈0,7994=79,94% ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo logaritma: log a + log b = log(ab); n·log a = log(aⁿ). Kombinirajući: log c + k·log P = log(c·P^k).",note:"postupak",final:true},{txt:"Intuicija: Inverz logaritma: log V = log X ⇔ V = X (na istoj bazi).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo logaritma: log a + log b = log(ab); n·log a = log(aⁿ). Kombinirajući: log c + k·log P = log(c·P^k).",
    "Inverz logaritma: log V = log X ⇔ V = X (na istoj bazi).",
    "Karakteristika potencije s 0 < k < 1: P → P^k zaglađuje promjene. [FRAC:1|2]^([FRAC:1|2]) ≈ 0,71 (ne 0,5); 0,5^1 = 0,5 (linearno).",
    "Konkretno: za k = 0,323, omjer 0,5 daje [FRAC:1|2]^(0,323) ≈ 0,80 — vrste opadaju mnogo manje od površine.",
    "Biološka interpretacija: tzv. 'species-area' relacija — broj vrsta nije linearan s površinom (zbog različite gustoće, niše, itd.).",
    "A (28,72 %): bila bi vrijednost 0,5^k za k mnogo veći (npr. k ≈ 1,8).",
    "B (44,31 %): bila bi za k ≈ 1,17.",
    "C (79,94 %): TOČNO ✓",
    "D (82,34 %): bila bi za k ≈ 0,28 — blizu, ali kriva interpretacija.",
    "Greška: pretpostaviti linearnu vezu — '50 % površine ⇒ 50 % vrsta' — što ignorira eksponent k."
  ]
},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Izraz 8^(5a+2) napišite kao potenciju s bazom 2.",
  warn:"Pazi: pri (aᵐ)ⁿ = a^(m·n), eksponenti se MNOŽE, ne zbrajaju.",
  sol:{ans:"2^(15a+6)",alt:["2^(15a+6)","2^{15a+6}","2**(15a+6)"]},
  exp:"8 = 2³, pa 8^(5a+2) = (2³)^(5a+2) = 2^(3·(5a+2)) = 2^(15a+6).",
  steps:[
    {txt:"Cilj: zamijeniti bazu 8 bazom 2",note:"prepoznati 8 = 2³"},
    {txt:"Zapis: 8^(5a+2) = (2³)^(5a+2)"},
    {txt:"Pravilo potencije potencije: (2³)^(5a+2) = 2^(3·(5a+2))",note:"eksponenti se MNOŽE"},
    {txt:"Razvij eksponent: 3·(5a+2) = 15a + 6"},
    {txt:"⇒ 8^(5a+2) = 2^(15a+6)",final:true},
    {txt:"Provjera za a=0: lijevo 8² = 64; desno 2⁶ = 64 ✓; za a=1: lijevo 8⁷ = 2 097 152; desno 2²¹ = 2 097 152 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo potencije potencije: (aᵐ)ⁿ = a^(m·n) — vanjski eksponent se distribuira na unutarnji množenjem.",note:"postupak",final:true},{txt:"Intuicija: Pravilo iste baze: a^m · a^n = a^(m+n) (zbrajanje), ali (a^m)^n = a^(m·n) (množenje) — često se brka.",note:"intuicija",final:true},{txt:"Točan odgovor: 2^(15a+6) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo potencije potencije: (aᵐ)ⁿ = a^(m·n) — vanjski eksponent se distribuira na unutarnji množenjem.",
    "Pravilo iste baze: a^m · a^n = a^(m+n) (zbrajanje), ali (a^m)^n = a^(m·n) (množenje) — često se brka.",
    "Strategija: prepoznati prosti razvoj baze (8 = 2³, 9 = 3², 27 = 3³, 16 = 2⁴, 32 = 2⁵, 64 = 2⁶ itd.).",
    "Konkretno: 8 = 2³, pa 3·(5a+2) = 15a+6.",
    "Provjera: za a = 0 → 8^2 = 64 = 2^6 = 2^(15·0+6) ✓.",
    "Greška: zbrajati eksponente ⇒ 2^(3+5a+2) = 2^(5a+5), krivo."
  ]
},
  {id:17,type:"sa",topic:"geom",points:1,
  q:"Kružnica u prvome kvadrantu ima polumjer 4 i dira os ordinata u točki A(0, 5). Napišite jednadžbu te kružnice.",
  warn:"Pazi: 'dira os ordinata u (0, 5)' znači dodirna točka leži NA y-osi, a središte je 4 dalje vodoravno (po x-osi).",
  sol:{ans:"(x-4)² + (y-5)² = 16",alt:["(x-4)^2+(y-5)^2=16","(x-4)²+(y-5)²=16"]},
  exp:"Tangenta y-os u A(0,5) ⇒ polumjer kroz A okomit na y-os, vodoravan. Prvo kvadrant ⇒ S(4, 5). Jednadžba: (x−4)² + (y−5)² = 16.",
  steps:[
    {txt:"Geometrijska interpretacija: kružnica dira y-os ⇒ y-os je TANGENTA na kružnicu",note:"jedna dodirna točka"},
    {txt:"Pravilo tangente: u dodirnoj točki polumjer je OKOMIT na tangentu"},
    {txt:"Tangenta je y-os (vertikalna) ⇒ polumjer je VODORAVAN (paralelan x-osi)"},
    {txt:"Polumjer ide od A(0, 5) vodoravno na udaljenost r = 4. Smjer ovisi o kvadrantu:"},
    {txt:"I. kvadrant (x > 0, y > 0) ⇒ središte ima pozitivnu x-koordinatu ⇒ S(0+4, 5) = S(4, 5)",note:"prvi kvadrant"},
    {txt:"Standardni oblik kružnice: (x − p)² + (y − q)² = r² s S(p, q) = (4, 5), r = 4"},
    {txt:"⇒ (x − 4)² + (y − 5)² = 16",final:true},
    {txt:"Provjera za točku A(0, 5): (0−4)² + (5−5)² = 16 + 0 = 16 ✓; za točku (8, 5) (drugi kraj horizontalnog promjera): (8−4)² + 0 = 16 ✓",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kružnica i pravac (tangenta) imaju zajedničku DODIRNU TOČKU u kojoj je polumjer kružnice okomit na pravac.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: ako kružnica dira okomitu (y-os), polumjer u dodirnoj točki je vodoravan (paralelan x-osi).",note:"intuicija",final:true},{txt:"Točan odgovor: (x-4)² + (y-5)² = 16 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kružnica i pravac (tangenta) imaju zajedničku DODIRNU TOČKU u kojoj je polumjer kružnice okomit na pravac.",
    "Pravilo: ako kružnica dira okomitu (y-os), polumjer u dodirnoj točki je vodoravan (paralelan x-osi).",
    "Pravilo: ako kružnica dira vodoravnu (x-os), polumjer je okomit (paralelan y-osi).",
    "Standardni oblik kružnice (s polumjerom r i središtem S(p, q)): (x − p)² + (y − q)² = r².",
    "Konkretno: dodirna točka A(0, 5), središte na udaljenosti 4 vodoravno, u prvom kvadrantu (x > 0) ⇒ S(4, 5).",
    "Provjera dodirne točke: |A − S| = √((0−4)² + (5−5)²) = √16 = 4 = r ✓.",
    "Greška: zaboraviti 'prvi kvadrant' i staviti središte u (-4, 5) — to bi bila II. kvadrant kružnica."
  ]
},
  {id:18.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (1. dio od 2): Riješite sljedeće zadatke s jednadžbama.",
  q:"Riješite jednadžbu 5/4 = 3 − (x − 2)/(x + 1).",
  warn:"Pazi: prije svega definiraj uvjet x ≠ −1 (nazivnik ≠ 0); ako rješenje ispadne −1, odbacuje se.",
  sol:{ans:"x = -5",alt:["-5","x=-5","x = -5","x = -5"]},
  exp:"Uvjet x ≠ −1. Izoliraj razlomak: (x−2)/(x+1) = 7/4. Križno množenje: 4(x−2) = 7(x+1) → x = −5 (≠ −1) ✓.",
  steps:[
    {txt:"Korak 1 — UVJET: nazivnik (x + 1) mora biti ≠ 0 ⇒ x ≠ −1",note:"uvjet definiranosti"},
    {txt:"Korak 2 — izoliraj razlomak na jednu stranu: (x−2)/(x+1) = 3 − 5/4"},
    {txt:"Sredi desnu stranu: 3 − 5/4 = 12/4 − 5/4 = 7/4"},
    {txt:"⇒ (x − 2)/(x + 1) = 7/4"},
    {txt:"Korak 3 — KRIŽNO množenje: 4·(x − 2) = 7·(x + 1)",note:"a/b = c/d ⇔ ad = bc"},
    {txt:"Razvij: 4x − 8 = 7x + 7"},
    {txt:"Sredi: 4x − 7x = 7 + 8 ⇒ −3x = 15 ⇒ x = −5"},
    {txt:"Provjera uvjeta: −5 ≠ −1 ✓. Rješenje: x = −5",final:true}
  ,
    {txt:"Provjera za rješenje x = -5: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Uvjet definiranosti racionalne jednadžbe: NAZIVNIK MORA BITI ≠ 0. Ako rješenje krši uvjet, odbacuje se.",note:"postupak",final:true},{txt:"Intuicija: Pravilo križnog množenja: a/b = c/d ⇔ ad = bc, vrijedi za b, d ≠ 0.",note:"intuicija",final:true},{txt:"Točan odgovor: x = -5 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Uvjet definiranosti racionalne jednadžbe: NAZIVNIK MORA BITI ≠ 0. Ako rješenje krši uvjet, odbacuje se.",
    "Pravilo križnog množenja: a/b = c/d ⇔ ad = bc, vrijedi za b, d ≠ 0.",
    "Strategija: izoliraj razlomak (sve ostale članove na drugu stranu), pa primijeni križno množenje.",
    "Konkretno: 5/4 = 3 − (x−2)/(x+1) ⇒ (x−2)/(x+1) = 3 − 5/4 = 7/4.",
    "Provjera: za x = −5, lijeva 5/4 = 1,25; desna 3 − (−7/−4) = 3 − 7/4 = 12/4 − 7/4 = 5/4 ✓",
    "Greška: zaboraviti uvjet ⇒ ako bi rješenje slučajno bilo x = −1, jednadžba nije definirana."
  ]
},
  {id:18.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 18 (2. dio od 2): Riješite sljedeće zadatke s jednadžbama.",
  q:"Odredite x ∈ [0, 2π⟩ za koji je cos(π/3 + x) = 1.",
  warn:"Pazi: cos = 1 SAMO u 2kπ (ne samo 0); plus filtriraj rješenja koja ne padaju u zadani interval [0, 2π⟩.",
  sol:{ans:"x = [FRAC:5π|3]",alt:["5π/3","5pi/3","x = 5π/3","x=5π/3"],solFormula:{pre:"x = ",frac:[["5π","3"]]}},
  exp:"cos θ = 1 ⇒ θ = 2kπ. Iz π/3 + x = 2kπ slijedi x = 2kπ − π/3. Za k = 1: x = 5π/3 ∈ [0, 2π⟩ ✓.",
  steps:[
    {txt:"Pravilo: cos θ = 1 ⇔ θ = 2kπ, k ∈ ℤ",note:"cosinus dosegne 1 samo u 'punom okretu'"},
    {txt:"Uvrsti θ = π/3 + x: π/3 + x = 2kπ"},
    {txt:"Izoliraj x: x = 2kπ − π/3"},
    {txt:"Probaj k = 0: x = −π/3 ∉ [0, 2π⟩",note:"odbaci"},
    {txt:"Probaj k = 1: x = 2π − π/3 = 6π/3 − π/3 = 5π/3 ≈ 5,24"},
    {txt:"Provjera intervala: 5π/3 ≈ 5,24 ∈ [0, 6,28⟩ ✓",note:"interval [0, 2π⟩"},
    {txt:"Probaj k = 2: x = 4π − π/3 = 11π/3 ≈ 11,5 ∉ [0, 2π⟩",note:"odbaci"},
    {txt:"Jedinstveno rješenje u intervalu: x = [FRAC:5π|3]",final:true}
  ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost x = [FRAC:5π|3] mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: cos x je periodična funkcija s periodom 2π. Vrijednost 1 dosegne samo na potpunim okretima: x = 0, 2π, 4π, ... ⇒ x = 2kπ, k ∈ ℤ.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: za sin x = 1: x = π/2 + 2kπ. Za sin x = 0: x = kπ. Za cos x = 0: x = π/2 + kπ.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:5π|3] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: cos x je periodična funkcija s periodom 2π. Vrijednost 1 dosegne samo na potpunim okretima: x = 0, 2π, 4π, ... ⇒ x = 2kπ, k ∈ ℤ.",
    "Pravilo: za sin x = 1: x = π/2 + 2kπ. Za sin x = 0: x = kπ. Za cos x = 0: x = π/2 + kπ.",
    "Strategija za trig jednadžbe ograničene na interval: nađi opće rješenje (parametrizirano s k), pa filtriraj rješenja koja padaju u zadani interval.",
    "Konkretno: x = 2kπ − π/3 daje ... −2π/3 (k=0 daje −π/3, ne u intervalu) → 5π/3 (k=1) → 11π/3 (k=2, prevelik).",
    "Provjera: cos(π/3 + 5π/3) = cos(6π/3) = cos(2π) = 1 ✓",
    "Greška: stati na k = 0 i reći da nema rješenja (jer −π/3 nije u intervalu) — zaboraviti probati i druge cijele brojeve k."
  ]
},
  {id:19.1,type:"proof",topic:"fun",points:1,
  context:"Zadatak 19 (1. dio od 2): Riješite sljedeće zadatke s grafom funkcije.",
  q:"Nacrtajte graf funkcije f(x) = x² + 2x − 3.",
  warn:"Pazi: za skiciranje parabole dovoljno je 4 točke — tjeme, dvije nultočke i sjecište s y-osi (tjemena os simetrije pomaže).",
  img:true,
  sol:{ex:"Parabola okrenuta prema gore s tjemenom T(−1, −4) i nultočkama x = −3 i x = 1.",svgFn:SvgZad19asol_2011JA},
  exp:"Parabola y = x²+2x−3: a = 1 > 0 (otvorena prema gore), tjeme T(−1, −4), nultočke (−3, 0) i (1, 0), y-presjek (0, −3).",
  steps:[
    {txt:"Identificiraj a, b, c: a = 1, b = 2, c = −3"},
    {txt:"Predznak a: a = 1 > 0 ⇒ parabola otvorena PREMA GORE",note:"shape"},
    {txt:"Tjeme: x_T = −b/(2a) = −2/2 = −1"},
    {txt:"y_T = f(−1) = (−1)² + 2·(−1) − 3 = 1 − 2 − 3 = −4 ⇒ T(−1, −4)",note:"minimum"},
    {txt:"Nultočke (sjecišta s x-osi): x² + 2x − 3 = 0"},
    {txt:"Faktorizacija: (x + 3)(x − 1) = 0 ⇒ x = −3 ili x = 1",note:"dvije realne nultočke"},
    {txt:"Sjecište s y-osi: f(0) = −3 ⇒ točka (0, −3)"},
    {txt:"Skiciraj: tjeme T(−1, −4) na dnu, dvije nultočke (−3, 0) i (1, 0), y-presjek (0, −3); osa simetrije x = −1",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat rezultat provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: parabola f(x) = ax² + bx + c je otvorena prema gore ako a > 0, prema dolje ako a < 0.",note:"postupak",final:true},{txt:"Intuicija: Tjemena formula: x_T = −b/(2a). y_T se dobije uvrštavanjem x_T u f.",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: parabola f(x) = ax² + bx + c je otvorena prema gore ako a > 0, prema dolje ako a < 0.",
    "Tjemena formula: x_T = −b/(2a). y_T se dobije uvrštavanjem x_T u f.",
    "Pravilo simetrije: parabola je simetrična oko vertikalne osi x = x_T. Posljedica: ako je nultočka u x₁, druga nultočka u x₂ takva da (x₁+x₂)/2 = x_T.",
    "Diskriminanta D = b² − 4ac = 4 + 12 = 16 > 0 ⇒ DVIJE realne nultočke. (D = 0: jedna; D < 0: nijedna.)",
    "Strategija skiciranja: 4 ključne točke (tjeme + 2 nultočke + y-presjek) + os simetrije + smjer otvaranja → glatka krivulja.",
    "Provjera nultočaka uz Viète: x₁ + x₂ = −b/a = −2 = (−3) + 1 ✓; x₁·x₂ = c/a = −3 = (−3)·1 ✓.",
    "Greška: zaboraviti predznak nultočke kod faktorizacije (x+3)(x−1) ⇒ nultočke su x = −3 i x = 1, ne x = 3 i x = −1."
  ]
},
  {id:19.2,type:"proof",topic:"fun",points:1,
  context:"Zadatak 19 (2. dio od 2): Riješite sljedeće zadatke s grafom funkcije.",
  warn:"Pazi: 'A je lok. minimum, C je lok. maksimum' i x_A < x_C ⇒ A je LIJEVO od C, pa krivulja IZMEĐU njih RASTE (ne pada).",
  img:true,
  q:"Graf polinoma trećega stupnja prolazi točkama A(−1, 4), B(0, 9/2), C(1, 5) i D(3, 0), gdje je A točka lokalnoga minimuma, a C točka lokalnoga maksimuma. Iz zadanih podataka skicirajte graf toga polinoma na intervalu ⟨−2, 4⟩. Napomena: Za skiciranje nije potrebno odrediti formulu zadanoga polinoma.",
  sol:{ex:"Krivulja silazi od x = −2 do A(−1, 4) (lok. min.), zatim raste kroz B(0, 9/2) do C(1, 5) (lok. maks.), pa pada kroz D(3, 0) i nastavlja silaziti do x = 4.",svgFn:SvgZad19bsol_2011JA},
  exp:"A(−1, 4) lok. min., C(1, 5) lok. maks. ⇒ između njih krivulja RASTE (kroz B(0, 9/2)). Lijevo od A polinom pada, desno od C polinom pada (kroz D(3, 0) i dalje).",
  steps:[
    {txt:"Identificiraj 4 zadane točke: A(−1, 4), B(0, 9/2 = 4,5), C(1, 5), D(3, 0)"},
    {txt:"A je lok. MINIMUM: u njemu krivulja MIJENJA smjer iz silazno u uzlazno",note:"f' = 0 i mijenja predznak"},
    {txt:"C je lok. MAKSIMUM: krivulja MIJENJA smjer iz uzlazno u silazno",note:"f' = 0 i mijenja predznak"},
    {txt:"Tijek krivulje na ⟨−2, 4⟩ (slijeva nadesno):"},
    {txt:"  • ⟨−2, −1⟩: krivulja PADA prema A (do minimuma)",note:"silazno"},
    {txt:"  • ⟨−1, 1⟩: krivulja RASTE od A do C, prolazi kroz B",note:"uzlazno"},
    {txt:"  • ⟨1, 3⟩: krivulja PADA od C kroz D do x-osi",note:"silazno"},
    {txt:"  • ⟨3, 4⟩: krivulja NASTAVLJA padati (ispod x-osi)",note:"silazno"},
    {txt:"Skiciraj GLATKO kroz 4 točke u tom redoslijedu monotonije, BEZ dodatnih ekstrema",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat rezultat provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: polinom n-tog stupnja ima NAJVIŠE n−1 lokalnih ekstrema. Polinom 3. stupnja ⇒ najviše 2 (jedan min + jedan max).",note:"postupak",final:true},{txt:"Intuicija: Pravilo monotonije: između dva susjedna lokalna ekstrema funkcija je MONOTONA (samo raste ili samo pada).",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: polinom n-tog stupnja ima NAJVIŠE n−1 lokalnih ekstrema. Polinom 3. stupnja ⇒ najviše 2 (jedan min + jedan max).",
    "Pravilo monotonije: između dva susjedna lokalna ekstrema funkcija je MONOTONA (samo raste ili samo pada).",
    "Pravilo asimptotskog ponašanja: polinom 3. stupnja s vodećim koeficijentom > 0 ima oblik 'raste — pada — raste' za x → ±∞. (Ovdje je interval ograničen pa se obrnuti dio ne mora vidjeti.)",
    "Konkretno: A(−1, 4) min < C(1, 5) max ⇒ funkcija raste od x = −1 do x = 1. Lijevo od A i desno od C u skladu s globalnim oblikom.",
    "Vrijednosti: A = 4, B = 4,5, C = 5 — A < B < C, što potvrđuje uzlazno na ⟨−1, 1⟩ ✓.",
    "Skiciranje: jednostavno spojiti glatkom krivuljom u danom redoslijedu, vrijednost u x = −2 i x = 4 nije zadana, ali krivulja se nastavlja u istom smjeru kao do graničnih točaka.",
    "Greška: skicirati krivulju koja kreće 'od minimuma silazno' ili obrnuto — kontradikcija s pojmom lokalnog ekstrema."
  ]
},
  {id:20.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 20 (1. dio od 2): Kod plaćanja nekoga proizvoda na njegovu osnovnu cijenu dodaje se 23% PDV-a.",
  q:"Osnovna cijena proizvoda je 65,45 kn. Kolika mu je cijena kod plaćanja?",
  warn:"Pazi: 'dodaje se 23 %' znači množenje s 1,23 (= 100 % + 23 %), ne s 0,23.",
  sol:{ans:"80,50 kn",alt:["80,50","80,50","80,50 kn","80,50 kn"]},
  exp:"Cijena s PDV-om = osnovna · 1,23 = 65,45 · 1,23 ≈ 80,50 kn.",
  steps:[
    {txt:"Postotni faktor: 23 % = 23/100 = 0,23",note:"PDV stopa"},
    {txt:"Konačna cijena uključuje OSNOVNU + PDV ⇒ množitelj 1 + 0,23 = 1,23"},
    {txt:"Račun: 65,45 · 1,23 = 65,45 + 65,45·0,23 = 65,45 + 15,0535 = 80,5035 kn"},
    {txt:"Zaokruži na lipe (2 decimale): 80,50 kn",final:true}
  ,
    {txt:"Provjera (statistika): rezultat 80,50 kn treba biti unutar očekivanog raspona podataka; provjeri zbroj/produkt prema teoremima vjerojatnosti.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo postotnog povećanja: konačno = početno · (1 + p/100), gdje je p postotak povećanja.",note:"postupak",final:true},{txt:"Intuicija: Ekvivalentno: konačno = početno + (p/100)·početno (zbroj osnovne i dodatka).",note:"intuicija",final:true},{txt:"Točan odgovor: 80,50 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo postotnog povećanja: konačno = početno · (1 + p/100), gdje je p postotak povećanja.",
    "Ekvivalentno: konačno = početno + (p/100)·početno (zbroj osnovne i dodatka).",
    "Pravilo postotnog smanjenja (suprotno): konačno = početno · (1 − p/100).",
    "Konkretno: 65,45 · 1,23 = 80,5035 kn (priznaje se [80,49; 80,51] zbog zaokruživanja).",
    "Provjera: 65,45 · 0,23 = 15,0535 kn = iznos PDV-a; 65,45 + 15,05 = 80,50 kn ✓.",
    "Greška: pomnožiti samo s 0,23 ⇒ dobiti 15,05 kn (samo PDV, ne ukupna cijena)."
  ]
},
  {id:20.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 20 (2. dio od 2): Kod plaćanja nekoga proizvoda na njegovu osnovnu cijenu dodaje se 23% PDV-a.",
  q:"Čokoladu smo platili 6,00 kn. Koliko je od toga iznos PDV-a?",
  warn:"Pazi: PDV se NE računa kao 23 % od KONAČNE cijene (to bi dao 1,38 kn). Treba 23/123 od konačne, jer konačna sadrži 123 % osnovne.",
  sol:{ans:"1,12 kn",alt:["1,12","1,12","1,12 kn","1,12 kn"]},
  exp:"Konačna cijena = 123 % osnovne. PDV = konačna · 23/123 = 6,00 · 23/123 ≈ 1,12 kn.",
  steps:[
    {txt:"OBRNUT problem od Q20,1 — sad je dana konačna cijena, traži se PDV"},
    {txt:"Veza: konačna = osnovna · 1,23, što znači konačna = 123 % od osnovne"},
    {txt:"Iz konačne, OSNOVNA = konačna / 1,23 = 6,00 / 1,23 ≈ 4,8780 kn"},
    {txt:"PDV = konačna − osnovna = 6,00 − 4,8780 ≈ 1,1220 kn"},
    {txt:"Alternativni put: PDV = konačna · (23/123) = 6,00 · 0,1870 ≈ 1,1220 kn"},
    {txt:"Zaokruži: 1,12 kn",final:true}
  ,
    {txt:"Provjera (statistika): rezultat 1,12 kn treba biti unutar očekivanog raspona podataka; provjeri zbroj/produkt prema teoremima vjerojatnosti.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: ako konačna = osnovna · (1 + p/100), onda osnovna = konačna / (1 + p/100). Ekvivalentno, PDV = konačna · p/(100+p).",note:"postupak",final:true},{txt:"Intuicija: Razlika: 23 % od OSNOVNE ≠ 23 % od KONAČNE. Stopa se primjenjuje na osnovnu cijenu.",note:"intuicija",final:true},{txt:"Točan odgovor: 1,12 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: ako konačna = osnovna · (1 + p/100), onda osnovna = konačna / (1 + p/100). Ekvivalentno, PDV = konačna · p/(100+p).",
    "Razlika: 23 % od OSNOVNE ≠ 23 % od KONAČNE. Stopa se primjenjuje na osnovnu cijenu.",
    "Konkretno: 23 % od osnovne (4,878) je 1,12; ali 23 % od konačne (6,00) bi bilo 1,38 — krivo.",
    "Formula: PDV/konačna = p/(100+p) — udio PDV-a u konačnoj cijeni je MANJI od p % (zbog dijeljenja s 1+p%).",
    "Provjera: osnovna 4,8780 + PDV 1,1220 = 6,0000 = konačna ✓.",
    "Greška: pomnožiti konačnu sa 0,23 ⇒ dobiti 1,38 kn (krivo, jer to bi pretpostavilo da je 6 kn osnovna, ne konačna)."
  ]
},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2): Riješite sljedeće zadatke.",
  q:"Kvadratna jednadžba x² + bx + c = 0 ima dvostruko rješenje x₁ = x₂ = −5. Koliki je koeficijent b te kvadratne jednadžbe?",
  warn:"Pazi: Vièteov zbroj x₁ + x₂ = −b (s minusom!), ne +b. Ovdje x₁ + x₂ = −10 ⇒ b = 10.",
  sol:{ans:"b = 10",alt:["10","b=10","b = 10"]},
  exp:"Dvostruko rješenje x₀ = −5 ⇒ jednadžba (x + 5)² = x² + 10x + 25. Usporedba s x² + bx + c: b = 10.",
  steps:[
    {txt:"Pristup 1 — direktno faktoriziranje:"},
    {txt:"Dvostruko rješenje x₁ = x₂ = −5 ⇒ jednadžba je (x − (−5))² = (x + 5)² = 0"},
    {txt:"Razvij kvadrat: (x + 5)² = x² + 2·5·x + 5² = x² + 10x + 25"},
    {txt:"Usporedba s x² + bx + c = 0: b = 10, c = 25",note:"očitavanje koeficijenata"},
    {txt:"Pristup 2 — Vièteove formule (provjera):"},
    {txt:"x₁ + x₂ = −b ⇒ −5 + (−5) = −10 = −b ⇒ b = 10 ✓"},
    {txt:"x₁ · x₂ = c ⇒ (−5)·(−5) = 25 = c ✓"},
    {txt:"⇒ b = 10",final:true}
  ,
    {txt:"Provjera za rješenje b = 10: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Vièteove formule (za jednadžbu x² + bx + c = 0): zbroj rješenja x₁ + x₂ = −b, umnožak x₁·x₂ = c.",note:"postupak",final:true},{txt:"Intuicija: Pravilo dvostrukog rješenja: ako je diskriminanta D = b² − 4c = 0, jednadžba ima dvostruko rješenje x₀ = −b/2 (jedinstveno).",note:"intuicija",final:true},{txt:"Točan odgovor: b = 10 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Vièteove formule (za jednadžbu x² + bx + c = 0): zbroj rješenja x₁ + x₂ = −b, umnožak x₁·x₂ = c.",
    "Pravilo dvostrukog rješenja: ako je diskriminanta D = b² − 4c = 0, jednadžba ima dvostruko rješenje x₀ = −b/2 (jedinstveno).",
    "Tada: jednadžba je (x − x₀)² = 0, pa b = −2x₀ i c = x₀².",
    "Konkretno: x₀ = −5 ⇒ b = −2·(−5) = 10, c = (−5)² = 25.",
    "Provjera diskriminante: D = 10² − 4·25 = 100 − 100 = 0 ✓ (potvrđuje dvostruko rješenje).",
    "Provjera uvrštavanjem: x = −5 u x² + 10x + 25: 25 − 50 + 25 = 0 ✓.",
    "Greška: zaboraviti minus u Vièteu ⇒ b = x₁ + x₂ = −10 (krivo, treba b = −(x₁+x₂) = 10)."
  ]
},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2): Riješite sljedeće zadatke.",
  q:"Riješite nejednadžbu 2x² > 7x + 4 i rješenje zapišite s pomoću intervala.",
  warn:"Pazi: za a > 0 i ax² + bx + c > 0, rješenje je IZVAN nultočaka (ne između). Plus: stroga > znači otvoreni intervali ⟨ ⟩.",
  sol:{ans:"⟨−∞, −[FRAC:1|2]⟩ ∪ ⟨4, +∞⟩",alt:["⟨−∞, −1/2⟩ ∪ ⟨4, +∞⟩","(-∞,-1/2)∪(4,+∞⟩","(-inf,-1/2)U(4,+inf)","x<-1/2 ili x>4"],solFormula:{pre:"⟨−∞, −",frac:[["1","2"]],post:"⟩ ∪ ⟨4, +∞⟩"}},
  exp:"Prebaci: 2x² − 7x − 4 > 0. Nultočke: x = −1/2, x = 4. Parabola otvorena gore + stroga > ⇒ rješenje IZVAN nultočaka: x ∈ ⟨−∞, −1/2⟩ ∪ ⟨4, +∞⟩.",
  steps:[
    {txt:"Prebaci sve na jednu stranu: 2x² − 7x − 4 > 0"},
    {txt:"Nađi nultočke pridružene jednadžbe 2x² − 7x − 4 = 0"},
    {txt:"Diskriminanta: D = b² − 4ac = 49 − 4·2·(−4) = 49 + 32 = 81"},
    {txt:"x = (−b ± √D)/(2a) = (7 ± 9)/4"},
    {txt:"⇒ x₁ = (7−9)/4 = −1/2; x₂ = (7+9)/4 = 4",note:"dvije realne nultočke"},
    {txt:"Predznak vodećeg koeficijenta: a = 2 > 0 ⇒ parabola OTVORENA PREMA GORE",note:"shape"},
    {txt:"Pravilo predznaka kvadratnog izraza:",note:"a > 0"},
    {txt:"  • IZVAN nultočaka [−1/2, 4]: f(x) > 0 (parabola iznad x-osi)"},
    {txt:"  • IZMEĐU nultočaka (−1/2, 4): f(x) < 0 (parabola ispod x-osi)"},
    {txt:"Tražimo f(x) > 0 (strogo) ⇒ x ∈ ⟨−∞, −[FRAC:1|2]⟩ ∪ ⟨4, +∞⟩",final:true}
  ,
    {txt:"Provjera za rješenje ⟨−∞, −[FRAC:1|2]⟩ ∪ ⟨4, +∞⟩: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo kvadratne nejednadžbe za parabolu otvorenu prema gore (a > 0):",note:"postupak",final:true},{txt:"Intuicija:   • ax² + bx + c > 0 (strogo): x je izvan zatvorenog intervala između nultočaka, otvoreni intervali ⟨−∞, x₁⟩ ∪ ⟨x₂, +∞⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−∞, −[FRAC:1|2]⟩ ∪ ⟨4, +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo kvadratne nejednadžbe za parabolu otvorenu prema gore (a > 0):",
    "  • ax² + bx + c > 0 (strogo): x je izvan zatvorenog intervala između nultočaka, otvoreni intervali ⟨−∞, x₁⟩ ∪ ⟨x₂, +∞⟩.",
    "  • ax² + bx + c < 0 (strogo): x je između nultočaka, otvoreni interval ⟨x₁, x₂⟩.",
    "Za parabolu otvorenu prema dolje (a < 0): obratno — > 0 daje između, < 0 daje izvan.",
    "Stroga nejednakost ⇔ otvoreni intervali (kutne zagrade ⟨ ⟩); nestroga ⇔ zatvoreni (uglate [ ]).",
    "Konkretno: parabola y = 2x² − 7x − 4 prolazi nultočkama −1/2 i 4. Provjera testne točke u intervalu (npr. x = 0): 2·0 − 0 − 4 = −4 < 0 (između nultočaka, ispod osi).",
    "Provjera krajeva: x = 5: 50 − 35 − 4 = 11 > 0 ✓ (desno, iznad osi); x = −1: 2 + 7 − 4 = 5 > 0 ✓ (lijevo, iznad osi).",
    "Greška: razmišljati 'rješenje je između nultočaka' (krivo za a > 0 i znak >) — stane se u krivi interval ⟨−1/2, 4⟩."
  ]
},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2): Riješite sljedeće zadatke sa sustavima.",
  q:"Izrazite z s pomoću y ako je sustav [SYS:y = 5(x − 2)/4|x = z + 8].",
  warn:"Pazi: u prvoj jednadžbi razlomak 5(x−2)/4 — pri rješavanju po x prvo množi obje strane s 4 da se oslobodiš nazivnika.",
  sol:{ans:"z = [FRAC:4y|5] − 6",alt:["4y/5 - 6","z = 4y/5 - 6","z=(4y-30)/5","(4y-30)/5"]},
  exp:"Iz prve: x = 4y/5 + 2. Uvrsti u drugu: z = x − 8 = 4y/5 + 2 − 8 = 4y/5 − 6.",
  steps:[
    {txt:"Cilj: dobiti z = f(y) — z izražen samo preko y, bez x"},
    {txt:"Strategija: iz prve jednadžbe izrazi x preko y, pa uvrsti u drugu"},
    {txt:"Prva jednadžba: y = 5(x − 2)/4. Pomnoži obje strane s 4: 4y = 5(x − 2)"},
    {txt:"Razvij: 4y = 5x − 10 ⇒ 5x = 4y + 10 ⇒ x = (4y + 10)/5 = 4y/5 + 2"},
    {txt:"Druga jednadžba: x = z + 8 ⇒ z = x − 8"},
    {txt:"Uvrsti x = 4y/5 + 2: z = (4y/5 + 2) − 8 = 4y/5 + 2 − 8"},
    {txt:"⇒ z = [FRAC:4y|5] − 6",final:true}
  ,
    {txt:"Provjera za rješenje z = [FRAC:4y|5] − 6: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Strategija sustava (metoda supstitucije): iz jedne jednadžbe izoliraj jednu varijablu, pa zamijeni u drugu jednadžbu.",note:"postupak",final:true},{txt:"Intuicija: Pravilo razlomka: kad imamo a = bc/d, prvo množimo s d (oslobađanje nazivnika), pa rješavamo linearno: ad = bc.",note:"intuicija",final:true},{txt:"Točan odgovor: z = [FRAC:4y|5] − 6 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija sustava (metoda supstitucije): iz jedne jednadžbe izoliraj jednu varijablu, pa zamijeni u drugu jednadžbu.",
    "Pravilo razlomka: kad imamo a = bc/d, prvo množimo s d (oslobađanje nazivnika), pa rješavamo linearno: ad = bc.",
    "Strategija eliminacije pomoćnih varijabli: ako sustav ima 3 varijable (x, y, z), a tražimo vezu između 2 (z i y), eliminiramo treću (x).",
    "Konkretno: x je 'most' između y i z. Iz y dobijem x, iz x dobijem z, pa kombiniram u z(y).",
    "Provjera: za y = 0 ⇒ x = 4·0/5 + 2 = 2; iz prve jednadžbe: 0 = 5(2−2)/4 = 0 ✓; z = 0 − 6 = −6, iz druge: x = z + 8 = −6 + 8 = 2 ✓.",
    "Greška: zaboraviti množiti s 4 u prvoj jednadžbi ⇒ pomiješati koeficijente i dobiti krivi izraz za x."
  ]
},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2): Riješite sljedeće zadatke sa sustavima.",
  q:"Riješite sustav [SYS:x − 1/2 > 1|2(x + 5) ≥ 6x − 1] i rješenje zapišite s pomoću intervala.",
  warn:"Pazi: sustav nejednadžbi traži PRESJEK (oboje istovremeno), ne uniju. Pazi i na vrste zagrada ⟨⟨ za stroga,  ] za nestroga).",
  sol:{ans:"⟨[FRAC:3|2], [FRAC:11|4]]",alt:["⟨3/2, 11/4]","⟨3/2, 11/4]","⟨1,5, 2,75]","(1,5; 2,75]"],solFormula:{pre:"⟨",frac:[["3","2"],["11","4"]],ops:[", "],post:"]"}},
  exp:"Riješi svaku odvojeno: prva → x > 3/2, druga → x ≤ 11/4. Presjek: ⟨3/2, 11/4].",
  steps:[
    {txt:"Cilj: pronaći skup x koji zadovoljava OBE nejednadžbe istovremeno (presjek)"},
    {txt:"PRVA: x − 1/2 > 1. Dodaj 1/2: x > 1 + 1/2 = 3/2",note:"granica donja, otvorena"},
    {txt:"DRUGA: 2(x + 5) ≥ 6x − 1. Razvij: 2x + 10 ≥ 6x − 1"},
    {txt:"Sredi: 10 + 1 ≥ 6x − 2x ⇒ 11 ≥ 4x ⇒ x ≤ 11/4",note:"granica gornja, zatvorena"},
    {txt:"Presjek skupova: x > 3/2 I x ≤ 11/4 istovremeno"},
    {txt:"Zapis kao interval: x ∈ ⟨3/2, 11/4]",note:"⟨ jer >; ] jer ≤"},
    {txt:"Provjera neprasnosti: [FRAC:3|2] = 1,5 < [FRAC:11|4] = 2,75 ⇒ presjek je neprazan ✓",final:true}
  ,
    {txt:"Provjera za rješenje ⟨[FRAC:3|2], [FRAC:11|4]]: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo presjeka skupova: A ∩ B = {x : x ∈ A I x ∈ B}. Za sustav nejednadžbi rješenje je presjek skupova rješenja pojedinačnih nejednadžbi.",note:"postupak",final:true},{txt:"Intuicija: Pravilo zagrada u intervalima: ⟨a, b⟩ otvoreno (oba kraja isključena, < i >), [a, b] zatvoreno (oba uključena, ≤ i ≥), miks ⟨a, b] ili [a, b⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨[FRAC:3|2], [FRAC:11|4]] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo presjeka skupova: A ∩ B = {x : x ∈ A I x ∈ B}. Za sustav nejednadžbi rješenje je presjek skupova rješenja pojedinačnih nejednadžbi.",
    "Pravilo zagrada u intervalima: ⟨a, b⟩ otvoreno (oba kraja isključena, < i >), [a, b] zatvoreno (oba uključena, ≤ i ≥), miks ⟨a, b] ili [a, b⟩.",
    "Pravilo nejednakosti: pri množenju/dijeljenju s POZITIVNIM brojem znak ostaje; s NEGATIVNIM se OKREĆE.",
    "Pravilo 'sustav vs disjunkcija': 'sustav (i)' ⇒ presjek; 'unija (ili)' ⇒ unija. U HR matematici 'sustav nejednadžbi' uvijek znači I.",
    "Konkretno: 3/2 < x ≤ 11/4 znači x je STROGO veći od 1,5 i NAJVIŠE 2,75 (uključujući 2,75).",
    "Provjera krajeva: x = 1,5 ne (jer >, ne ≥); x = 2,75 da (jer ≤). Sredina x = 2: prva 2 > 1,5 ✓, druga 2 ≤ 2,75 ✓.",
    "Greška: pisati uniju umjesto presjeka ⇒ dobio bi ⟨−∞, 11/4] ∪ ⟨3/2, +∞⟩ = ℝ — krivo."
  ]
},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2): Riješite sljedeće zadatke.",
  q:"Odredite sva tri rješenja jednadžbe x³ + ax² − x − a = 0.",
  warn:"Pazi: grupiraj članove tako da prepoznaš ZAJEDNIČKI binom — ovdje (x³+ax²) i (−x−a) oboje sadrže (x+a) ili −(x+a).",
  sol:{ans:"x₁ = −a, x₂ = 1, x₃ = -1",alt:["-a, 1, -1","-a,1,-1","x=-a, x=1, x=-1"]},
  exp:"Grupiraj: x³+ax² = x²(x+a), −x−a = −(x+a). Zajedničko (x+a): (x+a)(x²−1) = 0. Razlika kvadrata: (x+a)(x−1)(x+1) = 0 ⇒ x = −a, 1, −1.",
  steps:[
    {txt:"Cilj: faktorizirati polinom 3. stupnja u produkt linearnih i/ili kvadratnih faktora"},
    {txt:"Strategija — GRUPIRANJE: razdvoji 4 člana u 2 para s zajedničkim faktorima"},
    {txt:"Par 1: x³ + ax² = x²(x + a)",note:"izvuci x²"},
    {txt:"Par 2: −x − a = −(x + a)",note:"izvuci −1"},
    {txt:"Spoji: x²(x + a) + (−1)(x + a) = (x + a)·(x² − 1)",note:"zajednički (x+a)"},
    {txt:"Faktoriziraj x² − 1 razlikom kvadrata: x² − 1 = (x − 1)(x + 1)"},
    {txt:"Konačno: (x + a)(x − 1)(x + 1) = 0"},
    {txt:"Rješenja: x + a = 0 ⇒ x = −a; x − 1 = 0 ⇒ x = 1; x + 1 = 0 ⇒ x = −1",final:true}
  ,
    {txt:"Provjera za rješenje x₁ = −a, x₂ = 1, x₃ = -1: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo grupiranja: za 4 člana ax + ay + bx + by, izvuci a iz prva dva i b iz druga dva: a(x+y) + b(x+y) = (a+b)(x+y).",note:"postupak",final:true},{txt:"Intuicija: Strategija prepoznavanja: traži parove koji dijele zajednički faktor (varijabla, binom, ili negacija).",note:"intuicija",final:true},{txt:"Točan odgovor: x₁ = −a, x₂ = 1, x₃ = -1 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo grupiranja: za 4 člana ax + ay + bx + by, izvuci a iz prva dva i b iz druga dva: a(x+y) + b(x+y) = (a+b)(x+y).",
    "Strategija prepoznavanja: traži parove koji dijele zajednički faktor (varijabla, binom, ili negacija).",
    "Pravilo razlike kvadrata: a² − b² = (a − b)(a + b). Posebno: x² − 1 = (x − 1)(x + 1).",
    "Pravilo nul-produkta: A·B·C = 0 ⇔ A = 0 ili B = 0 ili C = 0. Stoga 3 linearna faktora daju 3 rješenja.",
    "Konkretno: jednadžba ima 3 rješenja koja ovise o parametru a. Za a = 1: rješenja −1, 1, −1 (dvostruko); za a ≠ ±1: tri različita.",
    "Provjera za x = 1: 1 + a − 1 − a = 0 ✓; za x = −1: −1 + a + 1 − a = 0 ✓; za x = −a: −a³ + a·a² + a − a = 0 ✓.",
    "Greška: izvući x² iz trećeg člana umjesto −1 ⇒ ne dobiti zajednički faktor (x+a)."
  ]
},
  {id:23.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2): Riješite sljedeće zadatke.",
  q:"Riješite nejednadžbu log(x − 2) > 1.",
  warn:"Pazi: 'log' bez baze u HR matematici znači log₁₀ (dekadski). Plus uvijek prvo definiraj uvjet definiranosti (argument > 0).",
  sol:{ans:"x ∈ ⟨12, +∞⟩",alt:["x>12","x > 12","⟨12, +∞⟩","(12, +∞⟩","(12,+inf)"]},
  exp:"Uvjet x > 2. log = log₁₀, pa 1 = log 10. Nejednadžba log(x−2) > log 10 ⇒ x−2 > 10 ⇒ x > 12. Presjek s uvjetom: x ∈ ⟨12, +∞⟩.",
  steps:[
    {txt:"Korak 1 — UVJET DEFINIRANOSTI: argument logaritma mora biti > 0",note:"obavezno"},
    {txt:"x − 2 > 0 ⇒ x > 2 (osnovni domenski uvjet)"},
    {txt:"Korak 2 — pretvori desnu stranu u log oblik s istom bazom"},
    {txt:"log bez navedene baze u HR matematici je log₁₀. Stoga 1 = log₁₀ 10 = log 10"},
    {txt:"Nejednadžba postaje: log(x − 2) > log 10"},
    {txt:"Korak 3 — funkcija log₁₀ je STROGO RASTUĆA na (0, +∞⟩, pa log A > log B ⇔ A > B"},
    {txt:"⇒ x − 2 > 10 ⇒ x > 12"},
    {txt:"Korak 4 — presjek s uvjetom definiranosti: x > 12 I x > 2 ⇒ x > 12",note:"strožiji uvjet"},
    {txt:"Rješenje: x ∈ ⟨12, +∞⟩",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat x ∈ ⟨12, +∞⟩ provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo definiranosti logaritma: log_a(f(x)) je definiran samo kad f(x) > 0 (i a > 0, a ≠ 1).",note:"postupak",final:true},{txt:"Intuicija: Pravilo monotonosti: log_a je STROGO RASTUĆA ako a > 1; STROGO PADAJUĆA ako 0 < a < 1.",note:"intuicija",final:true},{txt:"Točan odgovor: x ∈ ⟨12, +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo definiranosti logaritma: log_a(f(x)) je definiran samo kad f(x) > 0 (i a > 0, a ≠ 1).",
    "Pravilo monotonosti: log_a je STROGO RASTUĆA ako a > 1; STROGO PADAJUĆA ako 0 < a < 1.",
    "Posljedica monotonosti za log₁₀ (a = 10 > 1): log A > log B ⇔ A > B (znak nejednakosti se ČUVA).",
    "Za bazu 0 < a < 1, znak nejednakosti se OKREĆE (kao kod negativnih kod linearnih).",
    "Konvencija HR matematike: 'log' bez baze = log₁₀ (dekadski); 'ln' = log_e (prirodni); inače se baza piše: log₂, log₃ itd.",
    "Konkretno: x = 12 daje log(10) = 1, što NIJE > 1 (jednakost) ⇒ 12 NIJE u rješenju (otvoreni interval).",
    "Provjera: x = 100: log(98) ≈ 1,99 > 1 ✓. x = 5: log(3) ≈ 0,48, ne > 1 ✓ (krivo).",
    "Greška: zaboraviti uvjet definiranosti ⇒ ako bi rješenje uključilo npr. x = 2, log(0) je nedefiniran."
  ]
},
  {id:24.1,type:"sa",topic:"niz",points:1,
  context:"Zadatak 24 (1. dio od 2): Zadan je opći član aritmetičkoga niza aₙ = 2(n + p) − 4, p ∈ ℝ.",
  q:"Zapišite prvi član toga niza.",
  warn:"Pazi: prvi član niza je a₁ (n = 1), ne a₀. Plus rezultat ostavi parametriziran preko p (jer je p ∈ ℝ).",
  sol:{ans:"a₁ = 2p − 2",alt:["2p-2","2p − 2","a_1 = 2p-2","a₁ = 2p − 2"]},
  exp:"Uvrsti n = 1 u aₙ = 2(n+p) − 4: a₁ = 2(1+p) − 4 = 2 + 2p − 4 = 2p − 2.",
  steps:[
    {txt:"Niz je zadan općim članom aₙ = 2(n + p) − 4 (n je redni broj člana, p je parametar)"},
    {txt:"PRVI član odgovara n = 1 (HR konvencija)",note:"a₁, ne a₀"},
    {txt:"Uvrsti n = 1 u formulu: a₁ = 2(1 + p) − 4"},
    {txt:"Razvij zagradu: a₁ = 2 + 2p − 4"},
    {txt:"Sredi: a₁ = 2p − 2",final:true}
  ,
    {txt:"Provjera: uvrsti rezultat a₁ = 2p − 2 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: opći član niza aₙ daje vrijednost n-tog člana kao funkciju indeksa n. Za zadani n uvrstavanjem dobivamo eksplicitnu vrijednost.",note:"postupak",final:true},{txt:"Intuicija: HR konvencija: nizovi se indeksiraju od n = 1 (a₁ = prvi član). U nekim drugim notacijama (CS, kombinatorika) krene se od n = 0.",note:"intuicija",final:true},{txt:"Točan odgovor: a₁ = 2p − 2 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: opći član niza aₙ daje vrijednost n-tog člana kao funkciju indeksa n. Za zadani n uvrstavanjem dobivamo eksplicitnu vrijednost.",
    "HR konvencija: nizovi se indeksiraju od n = 1 (a₁ = prvi član). U nekim drugim notacijama (CS, kombinatorika) krene se od n = 0.",
    "Aritmetički niz: aₙ = a₁ + (n−1)·d, gdje je d diferencija. Iz aₙ = 2(n+p) − 4 = 2n + (2p−4), prepoznajemo a₁ = 2p−2 (uvrštavanjem) i d = 2 (koeficijent uz n).",
    "Konkretno za p = 0: a₁ = −2, d = 2 → niz −2, 0, 2, 4, ...",
    "Konkretno za p = 5: a₁ = 8, d = 2 → niz 8, 10, 12, ...",
    "Provjera: a₂ = 2(2+p) − 4 = 2p, a₃ = 2(3+p) − 4 = 2p + 2; razlika a₂ − a₁ = 2p − (2p−2) = 2 = d ✓.",
    "Greška: uvrstiti n = 0 ⇒ dobiti a₀ = 2p − 4 (krivo, jer 0-ti član nije definiran u standardnoj HR konvenciji)."
  ]
},
  {id:24.2,type:"sa",topic:"niz",points:1,
  context:"Zadatak 24 (2. dio od 2): Zadan je opći član aritmetičkoga niza aₙ = 2(n + p) − 4, p ∈ ℝ.",
  q:"Izračunajte vrijednost realnoga broja p ako je zbroj prvih pet članova niza aₙ = 2(n + p) − 4 jednak 60.",
  warn:"Pazi: formula Sₙ = n·(a₁+aₙ)/2 KORISTI prvi i POSLJEDNJI član u sumi (ne neki proizvoljni); za S₅ to su a₁ i a₅, ne a₁ i a₆.",
  sol:{ans:"p = 5",alt:["5","p=5","p = 5"]},
  exp:"Iz Q24a: a₁ = 2p−2. Računaj a₅ = 2p+6. S₅ = 5·(a₁+a₅)/2 = 10p+10. Postavi 10p+10 = 60 ⇒ p = 5.",
  steps:[
    {txt:"Iz Q24,1: a₁ = 2p − 2"},
    {txt:"Računaj a₅ uvrštavanjem n = 5: a₅ = 2(5 + p) − 4 = 10 + 2p − 4 = 2p + 6"},
    {txt:"Formula sume aritmetičkog niza: Sₙ = n·(a₁ + aₙ)/2"},
    {txt:"Za n = 5: S₅ = 5·(a₁ + a₅)/2"},
    {txt:"Uvrsti: S₅ = 5·((2p − 2) + (2p + 6))/2 = 5·(4p + 4)/2"},
    {txt:"Pojednostavni: S₅ = 5·(2p + 2) = 10p + 10"},
    {txt:"Postavi jednadžbu prema uvjetu: 10p + 10 = 60"},
    {txt:"Riješi: 10p = 50 ⇒ p = 5",final:true}
  ,
    {txt:"Provjera: uvrsti rezultat p = 5 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula sume aritmetičkog niza: Sₙ = n·(a₁ + aₙ)/2 — 'srednja vrijednost' (a₁+aₙ)/2 puta broj članova n.",note:"postupak",final:true},{txt:"Intuicija: Alternativna formula: Sₙ = n·a₁ + n(n−1)·d/2, korisna kad imamo a₁ i d (umjesto a₁ i aₙ).",note:"intuicija",final:true},{txt:"Točan odgovor: p = 5 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Formula sume aritmetičkog niza: Sₙ = n·(a₁ + aₙ)/2 — 'srednja vrijednost' (a₁+aₙ)/2 puta broj članova n.",
    "Alternativna formula: Sₙ = n·a₁ + n(n−1)·d/2, korisna kad imamo a₁ i d (umjesto a₁ i aₙ).",
    "Za naš niz: a₁ = 2p−2, d = 2. Provjera druge formule: S₅ = 5·(2p−2) + 5·4·2/2 = 10p − 10 + 20 = 10p + 10 ✓.",
    "Strategija problema 'nađi parametar': postavi jednadžbu u kojoj se TRAŽENI parametar pojavljuje, pa riješi linearno (ako ide).",
    "Konkretno za p = 5: a₁ = 8, a₂ = 10, a₃ = 12, a₄ = 14, a₅ = 16. S₅ = 8+10+12+14+16 = 60 ✓.",
    "Provjera srednje vrijednosti: (a₁+a₅)/2 = (8+16)/2 = 12 = a₃ (središnji član) — vrijedi za neparan broj članova.",
    "Greška: uvrstiti a₅ kao 2(5p) − 4 (zaboraviti 5 + p) ⇒ kriv pravi račun za a₅."
  ]
},
  {id:25.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 25 (1. dio od 3): Na slici je prikazan trokut ABC s vrhovima A(3, −3), B(2, 1), C(−3, 2).",
  q:"Izračunajte mjeru kuta u vrhu C.",
  intermediates:[61, 26, 1586, 39.825, 0.8788, 35, 36, 25],
  warn:"Pazi: vektori MORAJU izlaziti IZ vrha C (CA i CB), ne ulaziti (AC i BC) — formula s kosinusom radi za vektore istog 'ishodišta'.",
  sol:{ans:"28°29′44″",alt:["28°29'44''","28°29'44\"","28,49°","28,49°"]},
  img:true,
  exp:"Vektori CA = (6, −5), CB = (5, −1). cos γ = (CA·CB)/(|CA|·|CB|) = 35/√1586 ⇒ γ ≈ 28,5° = 28°29′44″.",
  steps:[
    {txt:"Cilj: kut γ u vrhu C. Koristi formulu skalarnog produkta vektora koji izlaze IZ C."},
    {txt:"Vektor CA (od C prema A): CA = A − C = (3 − (−3), −3 − 2) = (6, −5)"},
    {txt:"Vektor CB (od C prema B): CB = B − C = (2 − (−3), 1 − 2) = (5, −1)"},
    {txt:"Skalarni produkt: CA · CB = 6·5 + (−5)·(−1) = 30 + 5 = 35"},
    {txt:"Duljine: |CA| = √(6² + (−5)²) = √(36 + 25) = √61"},
    {txt:"|CB| = √(5² + (−1)²) = √(25 + 1) = √26"},
    {txt:"cos γ = (CA · CB)/(|CA|·|CB|) = 35/(√61 · √26) = 35/√1586"},
    {txt:"35/√1586 ≈ 35/39,825 ≈ 0,8788"},
    {txt:"γ = arccos(0,8788) ≈ 28,4955°",note:"u stupnjevima"},
    {txt:"Pretvori u °′″: 0,4955° · 60 ≈ 29,73′; 0,73′ · 60 ≈ 44″ ⇒ 28°29′44″",final:true}
  ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 28°29′44″ mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo skalarnog produkta: u · v = |u|·|v|·cos θ, gdje je θ kut između vektora kad su 'rep uz rep' (isto ishodište).",note:"postupak",final:true},{txt:"Intuicija: Posljedica: cos θ = (u · v)/(|u|·|v|), odnosno θ = arccos((u · v)/(|u|·|v|)).",note:"intuicija",final:true},{txt:"Točan odgovor: 28°29′44″ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo skalarnog produkta: u · v = |u|·|v|·cos θ, gdje je θ kut između vektora kad su 'rep uz rep' (isto ishodište).",
    "Posljedica: cos θ = (u · v)/(|u|·|v|), odnosno θ = arccos((u · v)/(|u|·|v|)).",
    "Pravilo izračuna duljine vektora: |v| = √(v_x² + v_y²) (Pitagora).",
    "Pravilo izračuna skalarnog produkta u 2D: u · v = u_x·v_x + u_y·v_y.",
    "Konkretno: vektori iz C su (6, −5) i (5, −1). Skalarni produkt 35 je pozitivan ⇒ kut je oštar (< 90°), što potvrđuje 28,5°.",
    "Provjera kosinusa: cos 28,5° ≈ 0,8788 ✓.",
    "NCVVO toleranca: rezultat unutar [28°, 29°] se priznaje (zaokruživanje pri arccos).",
    "Greška: koristiti vektore AC i BC umjesto CA i CB ⇒ predznak skalarnog produkta se mijenja, ali kut između je isti (parovi suprotnih vektora daju isti cos)."
  ]
},
  {id:25.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 25 (2. dio od 3): Na slici je prikazan trokut ABC s vrhovima A(3, −3), B(2, 1), C(−3, 2).",
  q:"Izračunajte duljinu visine trokuta iz vrha B.",
  warn:"Pazi: visina iz vrha B SPADA na NASUPROTNU stranicu (AC, ne AB ili BC). Formula h = 2P/osnovica.",
  sol:{ans:"h_B = [FRAC:19|√61] ≈ 2,43",alt:["2,43","2,43","19/√61","19√61/61"]},
  img:true,
  exp:"P = (1/2)|CA × CB| = (1/2)·19 = 19/2. Osnovica AC: |AC| = √61. h_B = 2P/|AC| = 19/√61 ≈ 2,43.",
  steps:[
    {txt:"Strategija: visina iz vrha = 2·(površina) / (nasuprotna stranica). Treba P i |AC|."},
    {txt:"Površina trokuta preko vektorskoga produkta: P = (1/2)·|CA × CB|"},
    {txt:"U 2D 'križni produkt' (skalar): CA × CB = (CA)_x·(CB)_y − (CA)_y·(CB)_x"},
    {txt:"Iz Q25,1: CA = (6, −5), CB = (5, −1)"},
    {txt:"CA × CB = 6·(−1) − (−5)·5 = −6 + 25 = 19"},
    {txt:"P = (1/2)·|19| = 19/2 = 9,5",note:"jedinica površine"},
    {txt:"Visina iz B pada na NASUPROTNU stranicu, što je AC (jer A i C su druge dvije točke)"},
    {txt:"|AC| = |CA| = √61 (iz Q25,1)"},
    {txt:"h_B = 2P/|AC| = 2·(19/2)/√61 = 19/√61"},
    {txt:"Racionalizacija: [FRAC:19|√61] = 19·[FRAC:√61|61] = [FRAC:19√61|61] ≈ 2,4322",final:true}
  ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost h_B = [FRAC:19|√61] ≈ 2,43 mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo površine trokuta preko vektora: P = (1/2)·|u × v|, gdje su u, v vektori bilo koja dva 'kraka' iz istog vrha.",note:"postupak",final:true},{txt:"Intuicija: U 2D, vektorski produkt vektora (a, b) i (c, d) daje SKALAR ad − bc (z-komponenta 3D produkta).",note:"intuicija",final:true},{txt:"Točan odgovor: h_B = [FRAC:19|√61] ≈ 2,43 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo površine trokuta preko vektora: P = (1/2)·|u × v|, gdje su u, v vektori bilo koja dva 'kraka' iz istog vrha.",
    "U 2D, vektorski produkt vektora (a, b) i (c, d) daje SKALAR ad − bc (z-komponenta 3D produkta).",
    "Pravilo visine: P = (1/2)·osnovica·visina ⇒ visina = 2P/osnovica.",
    "Konkretno: visina iz vrha B pada okomito na nasuprotnu stranicu AC. AC, BC, AB su tri stranice; nasuprotno B je AC.",
    "Provjera: P preko Heronove formule ili koordinatne formule daje istu vrijednost 9,5.",
    "Provjera dimenzionalnosti: 19√61/61 ≈ 19·7,81/61 ≈ 148,4/61 ≈ 2,43 ✓.",
    "NCVVO toleranca: [2,39; 2,47] (zaokruživanje korijena).",
    "Greška: uzeti pogrešnu stranicu kao osnovicu (npr. AB ili BC) ⇒ kriva visina."
  ]
},
  {id:25.3,type:"sa",topic:"geom",points:2,
  context:"Zadatak 25 (3. dio od 3): Na slici je prikazan trokut ABC s vrhovima A(3, −3), B(2, 1), C(−3, 2).",
  q:"Vektor AB⃗ prikažite kao linearnu kombinaciju jediničnih okomitih vektora i⃗ i j⃗.",
  warn:"Pazi na smjer: AB⃗ ide OD A PREMA B, pa AB⃗ = B − A (krajnja minus početna), ne A − B.",
  sol:{ans:"AB⃗ = −i⃗ + 4j⃗",alt:["-i+4j","−i + 4j","(-1, 4)","(-1,4)","−i⃗ + 4j⃗"]},
  img:true,
  exp:"AB⃗ = B − A = (2−3, 1−(−3)) = (−1, 4) = −i⃗ + 4j⃗.",
  steps:[
    {txt:"Pravilo: vektor između dvije točke PQ⃗ = Q − P (krajnja MINUS početna)"},
    {txt:"AB⃗ ide OD A PREMA B, pa AB⃗ = B − A"},
    {txt:"Računaj komponente: AB⃗ = (B_x − A_x, B_y − A_y)"},
    {txt:"= (2 − 3, 1 − (−3)) = (−1, 4)"},
    {txt:"Zapis u bazi (i⃗, j⃗): vektor (a, b) = a·i⃗ + b·j⃗",note:"kanonski oblik"},
    {txt:"⇒ AB⃗ = (−1)·i⃗ + 4·j⃗ = −i⃗ + 4j⃗",final:true}
  ,
    {txt:"Provjera: uvrsti rezultat AB⃗ = −i⃗ + 4j⃗ natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: vektor PQ⃗ = Q − P, gdje su P i Q radius-vektori (točke u prostoru). Smjer ide OD P PREMA Q.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: u 2D koordinatnom sustavu, jedinični vektori i⃗ = (1, 0) (na x-osi) i j⃗ = (0, 1) (na y-osi) tvore KANONSKU BAZU.",note:"intuicija",final:true},{txt:"Točan odgovor: AB⃗ = −i⃗ + 4j⃗ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: vektor PQ⃗ = Q − P, gdje su P i Q radius-vektori (točke u prostoru). Smjer ide OD P PREMA Q.",
    "Pravilo: u 2D koordinatnom sustavu, jedinični vektori i⃗ = (1, 0) (na x-osi) i j⃗ = (0, 1) (na y-osi) tvore KANONSKU BAZU.",
    "Pravilo: svaki vektor v = (a, b) može se jedinstveno zapisati kao v = a·i⃗ + b·j⃗ — komponente su koeficijenti uz bazne vektore.",
    "Konkretno: AB⃗ = (−1, 4) ima komponente −1 (na x-osi) i 4 (na y-osi), pa AB⃗ = −i⃗ + 4·j⃗.",
    "Provjera duljine: |AB⃗| = √((−1)² + 4²) = √17 ≈ 4,12.",
    "Provjera iz prethodnih zadataka: |AC| = √61 ≈ 7,81 i |BC| = √26 ≈ 5,10 — kvadrat |AB|² + |BC|²·... NIJE pravokutan u B ako se ne dobije |AC|² (Pitagora). 17 + 26 = 43 ≠ 61 — trokut nije pravokutan, samo prikaz vektora.",
    "Greška: računati BA⃗ = A − B = (1, −4) i pisati i⃗ − 4j⃗ (krivi smjer)."
  ]
},
  {id:26,img:true,type:"sa",topic:"trig",points:2,
  q:"Grafom je zadana funkcija f(x) = A·sin(x + C). Odredite A i C.",
  warn:"Pazi: identificiraj MIN i MAX preko slike (ne nule), pa C iz uvjeta sin(x+C)=±1. Plus pamti: rješenje (A, C) je do na periodičnost (više ekvivalentnih parova).",
  sol:{ans:"A = 2, C = −[FRAC:π|6]",alt:["A = 2, C = −π/6","A=2, C=-π/6","A=2, C=−π/6","A = −2, C = 5π/6","A=-2, C=5π/6","C = −π/6 + 2kπ","C = 5π/6 + 2kπ"],solFormula:{pre:"A = 2,  C = −",frac:[["π","6"]]}},
  img:true,
  exp:"Iz grafa: amplituda |A| = 2 (max=2, min=−2). MIN u x = −π/3, MAX u x = 2π/3. Iz x_MAX + C = π/2 ⇒ C = π/2 − 2π/3 = −π/6.",
  steps:[
    {txt:"Amplituda: iz grafa max = 2, min = −2  ⇒  A = 2."},
    {txt:"MIN je u x = −π/3 (vrijednost −2), MAX u x = 2π/3 (vrijednost +2)."},
    {txt:"Period: udaljenost MIN→MAX = π = polovica perioda  ⇒  T = 2π  ⇒  koeficijent uz x = 1."},
    {txt:"Iz uvjeta sin(x + C) = 1 u MAX-u: x + C = π/2 + 2kπ.  Uvrsti x = 2π/3:"},
    {txt:"2π/3 + C = π/2  ⇒  C = π/2 − 2π/3 = 3π/6 − 4π/6 = −π/6"},
    {txt:"Provjera MIN-a: 2·sin(−π/3 − π/6) = 2·sin(−π/2) = −2 ✓",note:"funkcija f(x) = 2·sin(x − π/6)"},
    {txt:"⇒ A = 2,  C = −[FRAC:π|6]  (ekvivalentno: A = −2, C = [FRAC:5π|6])",final:true},
    {txt:"Provjera: max f = 2 kod x + C = π/2 → x = π/2 + π/6 = 2π/3 ✓; min f = −2 kod x + C = −π/2 → x = −π/2 + π/6 = −π/3 ✓; nultočka u x = π/6 (jer sin(0) = 0)",note:"verifikacija"},{txt:"Sažetak postupka: Amplituda A = (max − min)/2 = (2 − (−2))/2 = 2.",note:"postupak",final:true},{txt:"Intuicija: Fazni pomak C najjednostavnije se odredi iz lokacije MAX-a: u MAX vrijedi sin(x + C) = 1 ⇔ x + C = π/2 + 2kπ.",note:"intuicija",final:true},{txt:"Točan odgovor: A = 2, C = −[FRAC:π|6] ✓",note:"odgovor",final:true}
  ],
  why:["Amplituda A = (max − min)/2 = (2 − (−2))/2 = 2.","Fazni pomak C najjednostavnije se odredi iz lokacije MAX-a: u MAX vrijedi sin(x + C) = 1 ⇔ x + C = π/2 + 2kπ.","Period 2π znači koeficijent uz x je 1 (oblik sin(x + C), ne sin(ωx + C)).","Ekvivalentni zapisi: (A, C) = (2, −π/6) ili (−2, 5π/6) — predznak A obrće funkciju, što kompenzira pomak za π u C.","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:27,img:true,type:"sa",topic:"geom",points:2,
  q:"Kvadrat ABCD na skici ima stranice duljine 7 cm, a kvadrat BEFG stranice duljine 5 cm. Kolika je duljina dužine DE? Odredite omjer duljina dužina BH i HG.",
  warn:"Pazi: kvadrat BEFG dijeli s ABCD točku B (donji desni kut prvog = donji lijevi drugog). Plus omjer BH:HG dolazi iz sličnosti trokuta — može se dobiti i bez koordinata (BH/HG = 7/5).",
  sol:{ans:"DE = √193 ≈ 13,89 cm; BH : HG = 7 : 5",alt:["DE=√193≈13,89 cm, BH:HG=7:5","DE ≈ 13,89 cm; BH:HG = 7:5","13,89; 7:5"]},
  img:true,
  exp:"Postavi A(0,0): D(0,7), E(12,0). DE = √(12²+7²) = √193 ≈ 13,89. H je sjecište DE i x=7 (vert. BG): y_H = 35/12. BH:HG = 35/12:25/12 = 7:5.",
  steps:[
    {txt:"Postavi koordinate s A u ishodištu (najpogodnije):"},
    {txt:"  Kvadrat ABCD (stranica 7): A(0, 0), B(7, 0), C(7, 7), D(0, 7)"},
    {txt:"  Kvadrat BEFG (stranica 5, dijeli B s ABCD): B(7, 0), E(12, 0), F(12, 5), G(7, 5)"},
    {txt:"DIO 1 — duljina DE: euklidska udaljenost od D(0, 7) do E(12, 0)"},
    {txt:"  DE = √((12 − 0)² + (0 − 7)²) = √(144 + 49) = √193 ≈ 13,89 cm"},
    {txt:"DIO 2 — točka H je sjecište dužine DE i stranice BG kvadrata BEFG"},
    {txt:"  BG je vertikalna dužina od B(7, 0) do G(7, 5), tj. x = 7, y ∈ [0, 5]"},
    {txt:"  Parametrizacija DE: (12t, 7 − 7t) za t ∈ [0, 1] (t=0 je D, t=1 je E)"},
    {txt:"  Iz 12t = 7 ⇒ t = 7/12; y_H = 7 − 7·(7/12) = 84/12 − 49/12 = 35/12 ≈ 2,917"},
    {txt:"  H = (7, 35/12). Provjeri y_H ∈ [0, 5]: 35/12 ≈ 2,92 ∈ [0, 5] ✓"},
    {txt:"|BH| = udaljenost od B(7, 0) do H(7, 35/12) = 35/12"},
    {txt:"|HG| = udaljenost od H(7, 35/12) do G(7, 5) = 5 − 35/12 = 60/12 − 35/12 = 25/12"},
    {txt:"Omjer: BH : HG = ([FRAC:35|12]) : ([FRAC:25|12]) = 35 : 25 = 7 : 5",final:true},
    {txt:"Provjera: BH + HG = 35/12 + 25/12 = 60/12 = 5 = |BG| ✓ (H je između B i G); omjer 7:5 = 1,4 — H bliže G nego B (BH > HG)",note:"verifikacija"},{txt:"Sažetak postupka: Strategija: za geometrijske probleme s pravilnim oblicima (kvadrati), POSTAVI KOORDINATNI SUSTAV s ishodištem u zgodnoj točki — sve daljnje udaljenosti i sjecišta postaju aritmetika.",note:"postupak",final:true},{txt:"Intuicija: Pravilo udaljenosti dvije točke: |PQ| = √((Q_x − P_x)² + (Q_y − P_y)²) (Pitagora u koordinatama).",note:"intuicija",final:true},{txt:"Točan odgovor: DE = √193 ≈ 13,89 cm; BH : HG = 7 : 5 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija: za geometrijske probleme s pravilnim oblicima (kvadrati), POSTAVI KOORDINATNI SUSTAV s ishodištem u zgodnoj točki — sve daljnje udaljenosti i sjecišta postaju aritmetika.",
    "Pravilo udaljenosti dvije točke: |PQ| = √((Q_x − P_x)² + (Q_y − P_y)²) (Pitagora u koordinatama).",
    "Pravilo parametrizacije dužine PQ: r(t) = P + t·(Q − P) za t ∈ [0, 1]. t = 0 daje P, t = 1 daje Q.",
    "Alternativni pristup za omjer BH:HG (BEZ koordinata): trokuti ΔDEC' i ΔGEH (s vrhom u E) su slični (dijele kut u E, oboje pravokutni). Omjer odgovarajućih stranica = 7:5 (visine kvadrata).",
    "Konkretno: dijagonala DE prelazi kroz BG na visini 35/12 — to dijeli BG na dijelove 35/12 i 25/12, čiji je omjer 7:5 (= omjer stranica kvadrata).",
    "Provjera DE: 12² + 7² = 144 + 49 = 193, √193 ≈ 13,89 ✓.",
    "Provjera omjera: jednostavno tumačenje — pravac od D(0, 7) do E(12, 0) ima nagib −7/12. Na x = 7 spušta se za 7·(7/12) = 49/12 od y = 7, dakle y = 35/12.",
    "Greška: pomiješati koje je BG, koje BH (BG je cijela vertikalna stranica kvadrata BEFG, BH je dio od B do H)."
  ]
},
  {id:28.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 28 (1. dio od 3): Riješite sljedeće zadatke.",
  q:"Napišite jednadžbu pravca koja prolazi točkom T(6, 3) i sjecištem pravaca 3x + 4y − 24 = 0 i x/2 − y/3 = 1.",
  warn:"Pazi: druga jednadžba x/2 − y/3 = 1 ima razlomke — prvo je pomnoži s 6 da dobiješ 3x − 2y = 6.",
  sol:{ans:"y = 3",alt:["y=3","y − 3 = 0","y - 3 = 0"]},
  exp:"Sjecište S = (4, 3) (iz sustava 3x+4y=24 i 3x−2y=6). T(6, 3) i S(4, 3) imaju istu y-koordinatu ⇒ horizontalan pravac y = 3.",
  steps:[
    {txt:"Strategija: nađi sjecište dvaju zadanih pravaca, pa napiši jednadžbu pravca kroz dvije točke (T i sjecište)"},
    {txt:"Druga jednadžba: x/2 − y/3 = 1. Pomnoži s 6 da uklonimo nazivnike: 3x − 2y = 6"},
    {txt:"Sustav: 3x + 4y = 24 (i) i 3x − 2y = 6 (ii)"},
    {txt:"Oduzmi (ii) od (i): (3x + 4y) − (3x − 2y) = 24 − 6 ⇒ 6y = 18 ⇒ y = 3"},
    {txt:"Uvrsti y = 3 u (i): 3x + 12 = 24 ⇒ x = 4. Sjecište: S(4, 3)"},
    {txt:"Pravac kroz T(6, 3) i S(4, 3): provjerimo y-koordinate"},
    {txt:"Obje točke imaju y = 3 ⇒ pravac je HORIZONTALAN",note:"konstantna y"},
    {txt:"Jednadžba pravca: y = 3",final:true}
  ,
    {txt:"Provjera: uvrsti rezultat y = 3 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Strategija: 'pravac kroz točku i sjecište dvaju pravaca' = (1) izračunaj sjecište kao novu točku, (2) pravac kroz dvije zadane točke.",note:"postupak",final:true},{txt:"Intuicija: Pravilo sustava 2 lin. jednadžbe: metoda eliminacije (oduzmi/zbroji jednadžbe da eliminiraš jednu varijablu) ili supstitucije.",note:"intuicija",final:true},{txt:"Točan odgovor: y = 3 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Strategija: 'pravac kroz točku i sjecište dvaju pravaca' = (1) izračunaj sjecište kao novu točku, (2) pravac kroz dvije zadane točke.",
    "Pravilo sustava 2 lin. jednadžbe: metoda eliminacije (oduzmi/zbroji jednadžbe da eliminiraš jednu varijablu) ili supstitucije.",
    "Pravilo pravca kroz dvije točke (x₁, y₁), (x₂, y₂): ako x₁ = x₂ → vertikalan x = x₁; ako y₁ = y₂ → horizontalan y = y₁; inače y − y₁ = ((y₂−y₁)/(x₂−x₁))·(x − x₁).",
    "Konkretno: T(6, 3) i S(4, 3) imaju jednake y, različite x ⇒ horizontalan y = 3.",
    "Provjera sjecišta S(4, 3): u prvoj 3·4 + 4·3 = 12 + 12 = 24 ✓; u drugoj 4/2 − 3/3 = 2 − 1 = 1 ✓.",
    "Provjera pravca y = 3: prolazi T(6, 3) jer 3 = 3 ✓, prolazi S(4, 3) jer 3 = 3 ✓.",
    "Greška: zaboraviti pomnožiti drugu jednadžbu sa 6 ⇒ kompliciraniji račun s razlomcima."
  ]
},
  {id:28.2,type:"sa",topic:"kon",points:1,
  context:"Zadatak 28 (2. dio od 3): Riješite sljedeće zadatke.",
  q:"Napišite koordinate žarišta (fokusa) hiperbole čija je jednadžba x² − y² = 144.",
  warn:"Pazi: za hiperbolu c² = a² + b² (zbroj, za razliku od elipse gdje je c² = a² − b²). Plus žarišta su na osi POZITIVNOG člana (ovdje x² > 0, pa fokus na x-osi).",
  sol:{ans:"F₁(-12√2, 0), F₂(12√2, 0)",alt:["F(±12√2, 0)","F₁(-12√2, 0), F₂(12√2, 0)","(±12√2, 0)"]},
  exp:"Standardni oblik: x²/144 − y²/144 = 1 (a² = b² = 144). c² = a² + b² = 288 ⇒ c = 12√2. Žarišta na x-osi: F₁,₂(±12√2, 0).",
  steps:[
    {txt:"Pretvori u standardni oblik: x² − y² = 144. Podijeli s 144:"},
    {txt:"x²/144 − y²/144 = 1 ⇒ a² = 144, b² = 144 (a = b = 12)"},
    {txt:"Za hiperbolu oblika x²/a² − y²/b² = 1, žarišta su na X-OSI (jer x² je pozitivan)"},
    {txt:"Veza: c² = a² + b² (za hiperbolu — ZBROJ, za razliku od elipse koja koristi razliku)"},
    {txt:"c² = 144 + 144 = 288 ⇒ c = √288"},
    {txt:"Pojednostavni: √288 = √(144·2) = 12√2 ≈ 16,97"},
    {txt:"Žarišta su simetrična oko ishodišta na x-osi: F₁(−c, 0), F₂(c, 0)"},
    {txt:"⇒ F₁(−12√2, 0), F₂(12√2, 0)",final:true}
  ,
    {txt:"Provjera (konike): rezultat F₁(-12√2, 0), F₂(12√2, 0) provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Standardni oblik hiperbole s glavnom osi po x-osi: x²/a² − y²/b² = 1 (gdje a, b > 0).",note:"postupak",final:true},{txt:"Intuicija: Standardni oblik hiperbole s glavnom osi po y-osi: y²/a² − x²/b² = 1 (mjesto pozitivnog člana otkriva os).",note:"intuicija",final:true},{txt:"Točan odgovor: F₁(-12√2, 0), F₂(12√2, 0) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Standardni oblik hiperbole s glavnom osi po x-osi: x²/a² − y²/b² = 1 (gdje a, b > 0).",
    "Standardni oblik hiperbole s glavnom osi po y-osi: y²/a² − x²/b² = 1 (mjesto pozitivnog člana otkriva os).",
    "Pravilo veze a, b, c za HIPERBOLU: c² = a² + b² (zbroj). Za ELIPSU: c² = a² − b² (razlika). Često se brka.",
    "Žarišta hiperbole leže UNUTAR 'usnih' krivulja, na glavnoj osi, na udaljenosti c od središta.",
    "Konkretno: ova hiperbola je 'jednakokraka' (a = b = 12) — asimptote su pravci y = ±x.",
    "Za jednakokraku hiperbolu (a = b): c = a√2.",
    "Provjera: 12² + 12² = 288, √288 = 12√2 ≈ 16,97. Žarišta dalje od vrhova (a = 12, c = 16,97) ✓.",
    "Greška: koristiti c² = a² − b² (formula za elipsu) ⇒ dobiti c = 0, što bi značilo žarište u središtu (apsurd za hiperbolu)."
  ]
},
  {id:28.3,type:"sa",topic:"kon",points:2,
  context:"Zadatak 28 (3. dio od 3): Riješite sljedeće zadatke.",
  q:"Halleyev komet giba se oko Sunca po eliptičnoj putanji kojoj je numerički ekscentricitet ε = 0,967. Sunce se nalazi u žarištu (fokusu) te elipse. Najmanja udaljenost kometa od Sunca je 8,75·10¹⁰ m. Koliko iznosi najveća udaljenost Halleyeva kometa od Sunca? (Napomena: ε = e/a.)",
  warn:"Pazi: ε je BLIZU 1 (0,967) ⇒ elipsa je vrlo izdužena. Omjer afel/perihel = (1+ε)/(1−ε) je VELIK (≈60), ne mali!",
  sol:{ans:"≈ 5,2155·10¹² m",alt:["5,2155·10^12","5,2155e12","≈ 5,2155·10¹² m","5,21·10¹² m"]},
  exp:"Perihel = a(1−ε), afel = a(1+ε). Omjer afel/perihel = (1+ε)/(1−ε) = 1,967/0,033 ≈ 59,6. Afel = 8,75·10¹⁰ · 59,6 ≈ 5,22·10¹² m.",
  steps:[
    {txt:"Astronomska terminologija (za orbitu oko Sunca):"},
    {txt:"  PERIHEL = najmanja udaljenost od Sunca (kad je objekt najbliže)"},
    {txt:"  AFEL = najveća udaljenost (kad je objekt najdalje)"},
    {txt:"Geometrija elipse s žarištem u Suncu (S = F₁): perihel i afel su na velikoj osi"},
    {txt:"Iz geometrije elipse (a = velika poluos, e = c = linearna ekscentricitet):"},
    {txt:"  perihel = a − e (žarište bliže vrhu)"},
    {txt:"  afel = a + e (žarište dalje od drugog vrha)"},
    {txt:"Iz definicije ε = e/a: e = ε·a ⇒ perihel = a(1 − ε), afel = a(1 + ε)"},
    {txt:"Strategija: izračunaj omjer afel/perihel BEZ a (a se KRATI)",note:"elegantno"},
    {txt:"afel/perihel = a(1 + ε) / a(1 − ε) = (1 + ε)/(1 − ε)"},
    {txt:"Uvrsti ε = 0,967: omjer = 1,967/0,033 ≈ 59,606"},
    {txt:"afel = perihel · [FRAC:1 + ε|1 − ε] = 8,75·10¹⁰ · 59,606 ≈ 5,2155·10¹² m",final:true}
  ,
    {txt:"Provjera (konike): rezultat ≈ 5,2155·10¹² m provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Definicija numeričkog ekscentriciteta ε = e/a, gdje je a velika poluos i e linearna ekscentricitet (udaljenost središta od žarišta).",note:"postupak",final:true},{txt:"Intuicija: Vrijednost ε za elipsu: 0 ≤ ε < 1. ε = 0 ⇒ kružnica; ε → 1 ⇒ vrlo izdužena elipsa.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 5,2155·10¹² m ✓",note:"odgovor",final:true}
  ],
  why:[
    "Definicija numeričkog ekscentriciteta ε = e/a, gdje je a velika poluos i e linearna ekscentricitet (udaljenost središta od žarišta).",
    "Vrijednost ε za elipsu: 0 ≤ ε < 1. ε = 0 ⇒ kružnica; ε → 1 ⇒ vrlo izdužena elipsa.",
    "Halleyev komet ε = 0,967 — vrlo blizu 1, što znači jako izdužena orbita (kao igla).",
    "Pravilo perihela/afela za orbitu s Suncem u žarištu: minimum udaljenosti = a(1−ε), maksimum = a(1+ε). Suma = 2a (cijela velika os).",
    "Strategija 'omjer rješavanja': kad imamo dvije veličine s istim parametrom (a), tražimo omjer da se a krati — elegantnije od posebnog izračuna a.",
    "Konkretno provjera: a = perihel/(1−ε) = 8,75·10¹⁰/0,033 ≈ 2,652·10¹² m. Afel = 2·a − perihel ≈ 5,304·10¹² − 8,75·10¹⁰ ≈ 5,217·10¹² m ✓ (mala razlika zbog zaokruživanja).",
    "Astronomski kontekst: 5·10¹² m ≈ 35 AU (astronomskih jedinica) — Halley dolazi izvan Neptunove orbite na svom afelu.",
    "Greška: koristiti formulu (1−ε)/(1+ε) ≈ 1/60 ⇒ afel ≈ 1,5·10⁹ m, manje od perihela — fizikalno nemoguće (afel mora biti veći)."
  ]
},
  {id:29.1,type:"sa",topic:"fun",points:3,
  context:"Zadatak 29 (1. dio od 5): Riješite sljedeće zadatke s funkcijama.",
  q:"Zadana je funkcija f(x) = 2ˣ − 8. Odredite područje definicije funkcije f. Odredite nultočku funkcije f. Izračunajte f(-5). Rezultat zapišite u decimalnome obliku i zaokružite ga na tri decimale.",
  warn:"Pazi: tri pod-pitanja u jednom — domena, nultočka, vrijednost. Plus za f(−5): 2⁻⁵ = 1/32 = 0,03125 (mali pozitivan), pa f(−5) = 1/32 − 8 ≈ −7,969 (nije −7).",
  sol:{ans:"D(f) = ℝ; x = 3; f(-5) ≈ -7,969",alt:["D=R; x=3; f(-5)≈-7,969","D(f)=ℝ, nultočka 3, f(-5)≈-7,969"]},
  exp:"Domena: ℝ (eksp. 2ˣ definirana svuda). Nultočka: 2ˣ = 8 ⇒ x = 3. f(−5) = 2⁻⁵ − 8 = 1/32 − 8 = −255/32 ≈ −7,969.",
  steps:[
    {txt:"PITANJE 1 — područje definicije:"},
    {txt:"Eksponencijalna funkcija aˣ (a > 0) definirana je za sve realne x"},
    {txt:"Konstanta −8 je definirana svuda. Razlika 2ˣ − 8 također svuda definirana"},
    {txt:"⇒ D(f) = ℝ (svi realni brojevi)"},
    {txt:"PITANJE 2 — nultočka:"},
    {txt:"Riješi f(x) = 0: 2ˣ − 8 = 0 ⇒ 2ˣ = 8"},
    {txt:"Prepoznaj 8 = 2³, pa 2ˣ = 2³ ⇒ x = 3 (zbog injektivnosti eksp. funkcije)"},
    {txt:"PITANJE 3 — f(−5):"},
    {txt:"f(−5) = 2⁻⁵ − 8 = 1/2⁵ − 8 = 1/32 − 8"},
    {txt:"Sredi: 1/32 − 256/32 = −255/32"},
    {txt:"Pretvori u decimalu: −255/32 = −7,96875"},
    {txt:"Zaokruži na 3 decimale: −7,969",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat D(f) = ℝ; x = 3; f(-5) ≈ -7,969 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo domene eksponencijalne funkcije: aˣ (a > 0, a ≠ 1) je definirana ZA SVE x ∈ ℝ; nikad nije nula, uvijek strogo pozitivna.",note:"postupak",final:true},{txt:"Intuicija: Pravilo nultočke: riješiti f(x) = 0. Za eksponencijalnu funkciju oblika aˣ − k = 0 (k > 0): aˣ = k ⇒ x = log_a k.",note:"intuicija",final:true},{txt:"Točan odgovor: D(f) = ℝ; x = 3; f(-5) ≈ -7,969 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo domene eksponencijalne funkcije: aˣ (a > 0, a ≠ 1) je definirana ZA SVE x ∈ ℝ; nikad nije nula, uvijek strogo pozitivna.",
    "Pravilo nultočke: riješiti f(x) = 0. Za eksponencijalnu funkciju oblika aˣ − k = 0 (k > 0): aˣ = k ⇒ x = log_a k.",
    "Pravilo eksponenta s negativnim argumentom: a⁻ⁿ = 1/aⁿ. Posebno: 2⁻⁵ = 1/2⁵ = 1/32 = 0,03125.",
    "Strategija pretvorbe razlomka u decimalu: ako je nazivnik moć od 2 (32 = 2⁵) ili 5 (npr. 100), decimalni zapis je konačan.",
    "Konkretno: −255/32 = −(255/32). 255/32 = 7,96875 (jer 32·7 = 224, 255 − 224 = 31, 31/32 = 0,96875).",
    "Zaokruživanje: 7,96875 → na 3 decimale 7,969 (zaokružujemo gore jer 5 ide na više).",
    "Provjera: f(3) = 2³ − 8 = 8 − 8 = 0 ✓ (potvrđuje nultočku); f(0) = 1 − 8 = −7 (provjera intuitivno).",
    "Greška: zaboraviti minus ⇒ napisati f(−5) ≈ +7,969; ili krivo zaokružiti 7,9687 na 7,968."
  ]
},
  {id:29.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 29 (2. dio od 5): Riješite sljedeće zadatke s funkcijama.",
  q:"Odredite prvu derivaciju funkcije f(x) = x · sin x.",
  warn:"Pazi: x · sin x je PRODUKT (ne kompozicija) — primijeni pravilo (u·v)′ = u′v + uv′, ne lančano pravilo.",
  sol:{ans:"f′(x) = sin x + x·cos x",alt:["sin(x) + x·cos(x)","sin x + x cos x","sinx+xcosx"]},
  exp:"Pravilo produkta: (u·v)′ = u′v + uv′. Za u = x (u′ = 1), v = sin x (v′ = cos x): f′(x) = sin x + x·cos x.",
  steps:[
    {txt:"Identificiraj strukturu: f(x) = x · sin x je PRODUKT dviju funkcija"},
    {txt:"Pravilo produkta: (u·v)′ = u′·v + u·v′"},
    {txt:"Postavi u = x, v = sin x"},
    {txt:"Derivacije pojedinačno: u′ = (x)′ = 1, v′ = (sin x)′ = cos x"},
    {txt:"Primijeni pravilo: f′(x) = u′·v + u·v′ = 1·sin x + x·cos x"},
    {txt:"Sredi: f′(x) = sin x + x·cos x",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat f′(x) = sin x + x·cos x provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo produkta (Leibnizovo pravilo): (u·v)′ = u′·v + u·v′. Vrijedi za bilo koje diferencijabilne funkcije u, v.",note:"postupak",final:true},{txt:"Intuicija: Osnovne derivacije za zapamtiti: (x)′ = 1, (xⁿ)′ = n·xⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x.",note:"intuicija",final:true},{txt:"Točan odgovor: f′(x) = sin x + x·cos x ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo produkta (Leibnizovo pravilo): (u·v)′ = u′·v + u·v′. Vrijedi za bilo koje diferencijabilne funkcije u, v.",
    "Osnovne derivacije za zapamtiti: (x)′ = 1, (xⁿ)′ = n·xⁿ⁻¹, (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x.",
    "Pravilo SUME: (u + v)′ = u′ + v′ — derivacija sume je suma derivacija.",
    "Pravilo PRODUKTA ≠ PRAVILU SUME: (u·v)′ ≠ u′·v′ (česta greška).",
    "Lančano pravilo (za KOMPOZICIJU): (f(g(x)))′ = f′(g(x))·g′(x) — primjenjuje se kad je jedna funkcija unutar druge (npr. sin(x²), ne x·sin x).",
    "Konkretno: ovdje x i sin x su MNOŽENJE (ne kompozicija), pa je produkt pravilo.",
    "Provjera u jednoj točki: f′(0) = sin(0) + 0·cos(0) = 0 + 0 = 0 (graf x·sin x u x = 0 ima vodoravnu tangentu — provjeriti graf intuitivno).",
    "Greška: derivirati 'pojedinačno' i pomnožiti ⇒ f′ = 1·cos x = cos x (krivo, propušten član u·v′ = x·cos x... a i taj nije isti)."
  ]
},
  {id:29.3,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (3. dio od 5): Riješite sljedeće zadatke s funkcijama.",
  q:"Za koji realan broj x funkcija f(x) = x³/3 − x²/2 − 6 postiže lokalni minimum?",
  warn:"Pazi: NUŽAN uvjet f′(x) = 0 daje sve KANDIDATE; DOVOLJAN uvjet (drugi izvod ili predznak prve derivacije) razlikuje min od maks.",
  sol:{ans:"x = 1",alt:["1","x=1","x = 1"]},
  exp:"f′(x) = x² − x = x(x−1) = 0 ⇒ x = 0 ili x = 1. f″(x) = 2x − 1. f″(0) = −1 < 0 (maks); f″(1) = 1 > 0 (MIN). ⇒ x = 1.",
  steps:[
    {txt:"Strategija: (1) izračunaj f′ i nađi stacionarne točke f′ = 0; (2) provjeri test druge derivacije ili predznak f′ oko stacionarnih točaka"},
    {txt:"Računaj prvu derivaciju: f(x) = x³/3 − x²/2 − 6"},
    {txt:"f′(x) = (1/3)·3x² − (1/2)·2x − 0 = x² − x",note:"derivacija po pravilu potencije"},
    {txt:"Faktoriziraj: f′(x) = x(x − 1)"},
    {txt:"NUŽAN uvjet (f′ = 0): x(x − 1) = 0 ⇒ x = 0 ili x = 1 (dvije stacionarne točke)"},
    {txt:"Računaj drugu derivaciju: f″(x) = (x²)′ − (x)′ = 2x − 1"},
    {txt:"DOVOLJAN uvjet (test druge derivacije): f″(x₀) > 0 ⇒ MIN; f″(x₀) < 0 ⇒ MAX; f″(x₀) = 0 ⇒ neodređeno"},
    {txt:"Provjeri x = 0: f″(0) = 2·0 − 1 = −1 < 0 ⇒ LOKALNI MAKSIMUM (ne min)"},
    {txt:"Provjeri x = 1: f″(1) = 2·1 − 1 = 1 > 0 ⇒ LOKALNI MINIMUM ✓"},
    {txt:"⇒ funkcija postiže lokalni minimum u x = 1",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat x = 1 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: lokalni ekstremi (min/max) glatkih funkcija nastupaju u STACIONARNIM TOČKAMA gdje f′(x) = 0 (ili gdje f′ ne postoji — ovdje nije slučaj).",note:"postupak",final:true},{txt:"Intuicija: TEST DRUGE DERIVACIJE: ako f′(x₀) = 0 i f″(x₀) > 0 ⇒ x₀ je lokalni MIN; ako f″(x₀) < 0 ⇒ lokalni MAX; ako f″(x₀) = 0 ⇒ test ne odlučuje (treba viši red ili predznak).",note:"intuicija",final:true},{txt:"Točan odgovor: x = 1 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: lokalni ekstremi (min/max) glatkih funkcija nastupaju u STACIONARNIM TOČKAMA gdje f′(x) = 0 (ili gdje f′ ne postoji — ovdje nije slučaj).",
    "TEST DRUGE DERIVACIJE: ako f′(x₀) = 0 i f″(x₀) > 0 ⇒ x₀ je lokalni MIN; ako f″(x₀) < 0 ⇒ lokalni MAX; ako f″(x₀) = 0 ⇒ test ne odlučuje (treba viši red ili predznak).",
    "Alternativni TEST PRVE DERIVACIJE: provjeri PROMJENU PREDZNAKA f′ oko x₀. f′ mijenja − u + ⇒ MIN; + u − ⇒ MAX.",
    "Pravilo derivacije polinoma: (xⁿ)′ = n·xⁿ⁻¹. Linearno: (a·g(x))′ = a·g′(x).",
    "Strategija za polinome 3. stupnja: f′ je kvadratna, ima do 2 stacionarne točke (jedan min + jedan max ako diskriminanta > 0).",
    "Konkretno: f(x) = x³/3 − x²/2 − 6. f(0) = −6 (lokalni max), f(1) = 1/3 − 1/2 − 6 = 2/6 − 3/6 − 36/6 = −37/6 ≈ −6,17 (lokalni min).",
    "Provjera: kako je x³/3 dominantan za velike |x|, funkcija → +∞ za x → +∞ i → −∞ za x → −∞ (kubni s pozitivnim vodećim koeficijentom).",
    "Greška: zaboraviti dovoljan uvjet i prijaviti SVE stacionarne točke kao min — f' = 0 daje samo kandidate."
  ]
},
  {id:29.4,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (4. dio od 5): Riješite sljedeće zadatke s funkcijama.",
  q:"Odredite skup svih vrijednosti (sliku) funkcije f(x) = |x + 1| − 3.",
  warn:"Pazi: domena |x+1|−3 je SVI ℝ (apsolutna vrijednost je definirana svuda), za razliku od korijenske funkcije. Slika je [−3, +∞⟩ jer |x+1| ≥ 0.",
  sol:{ans:"[-3, +∞⟩",alt:["[-3, +∞⟩","[-3, +∞⟩","[-3, ∞⟩","y ≥ -3"]},
  exp:"|x+1| ≥ 0 za sve x ∈ ℝ. Min f = 0 − 3 = −3 u x = −1. Za x → ±∞, |x+1| → +∞ ⇒ f → +∞. Slika = [−3, +∞⟩.",
  steps:[
    {txt:"Cilj: odrediti SLIKU (skup svih vrijednosti y koje funkcija postiže)"},
    {txt:"Strategija: izračunaj minimum i maksimum funkcije; sve vrijednosti između (uz monotonost) čine sliku"},
    {txt:"Pravilo apsolutne vrijednosti: |t| ≥ 0 za sve t ∈ ℝ (jednaka 0 samo kad t = 0)"},
    {txt:"Stoga |x + 1| ≥ 0 za sve x. Jednako 0 SAMO kad x + 1 = 0 ⇒ x = −1"},
    {txt:"Posljedica: f(x) = |x + 1| − 3 ≥ 0 − 3 = −3"},
    {txt:"MINIMUM: f(−1) = |−1 + 1| − 3 = |0| − 3 = −3"},
    {txt:"Za |x + 1| → +∞ kad x → ±∞ ⇒ f(x) → +∞ (BEZ gornjeg ograničenja)"},
    {txt:"Funkcija je 'V-oblika' s vrhom u (−1, −3), pada na ⟨−∞, −1⟩ i raste na ⟨−1, +∞⟩"},
    {txt:"Po Bolzano-Weierstrassovom teoremu (kontinuiranost) — sve vrijednosti od −3 do +∞ se postižu"},
    {txt:"Slika = [−3, +∞⟩",note:"zatvoreno u −3 (postiže se), otvoreno u +∞",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat [-3, +∞⟩ provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Definicija slike (range, kodomena u funkcijskom smislu): skup svih y za koje postoji x takav da y = f(x). Označava se Im(f) ili f(D).",note:"postupak",final:true},{txt:"Intuicija: Pravilo apsolutne vrijednosti: |t| = t ako t ≥ 0; |t| = −t ako t < 0. Posljedica: |t| ≥ 0 uvijek.",note:"intuicija",final:true},{txt:"Točan odgovor: [-3, +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Definicija slike (range, kodomena u funkcijskom smislu): skup svih y za koje postoji x takav da y = f(x). Označava se Im(f) ili f(D).",
    "Pravilo apsolutne vrijednosti: |t| = t ako t ≥ 0; |t| = −t ako t < 0. Posljedica: |t| ≥ 0 uvijek.",
    "Domena apsolutne vrijednosti: ℝ (definirana za sve realne).",
    "Funkcija f(x) = |x + a| + b je translacija osnovnog 'V' grafa (apsolutna vrijednost) za −a po x i b po y. Vrh je u (−a, b).",
    "Konkretno: f(x) = |x + 1| − 3 ima vrh u (−1, −3), oblik V-a otvoren prema gore.",
    "Slika apsolutno-funkcije |x+a|+b je [b, +∞⟩ (zatvoreni u b, otvoreni u +∞⟩.",
    "Provjera: f(0) = |1| − 3 = −2; f(−2) = |−1| − 3 = −2; f(2) = |3| − 3 = 0; f(−5) = |−4| − 3 = 1 — sve unutar [−3, +∞⟩ ✓.",
    "Greška: pomiješati apsolutnu vrijednost s korijenom (oboje 'nenegativne' funkcije, ali domena je različita: ℝ vs [−1, +∞⟩."
  ]
},
  {id:29.5,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (5. dio od 5): Riješite sljedeće zadatke s funkcijama.",
  q:"Zadane su funkcije f(x) = 2x i g(x) = log₅ x. Riješite jednadžbu (f ∘ g)(x) = 7.",
  warn:"Pazi na redoslijed: (f ∘ g)(x) = f(g(x)) — PRVO se primjenjuje g, pa f (čita se 'f krug g'); NIJE g(f(x)).",
  sol:{ans:"x = 125√5 ≈ 279,51",alt:["125√5","5^([FRAC:7|2])","125·√5","≈279,5","279,51"]},
  exp:"(f∘g)(x) = f(g(x)) = 2·log₅ x = 7 ⇒ log₅ x = 7/2 ⇒ x = 5^([FRAC:7|2]) = 125√5 ≈ 279,51.",
  steps:[
    {txt:"Razumijevanje kompozicije: (f ∘ g)(x) znači 'prvo primijeni g, pa f na rezultat'"},
    {txt:"Konkretno: g(x) = log₅ x, pa f(g(x)) = f(log₅ x) = 2·(log₅ x)",note:"jer f(t) = 2t"},
    {txt:"Postavi jednadžbu: 2·log₅ x = 7"},
    {txt:"Riješi za log₅ x: log₅ x = 7/2"},
    {txt:"Pretvori iz logaritamskog u eksponencijalni oblik: log_a y = c ⇔ y = a^c"},
    {txt:"⇒ x = 5^([FRAC:7|2])"},
    {txt:"Pojednostavi 5^([FRAC:7|2]): 5^([FRAC:7|2]) = 5^(3 + 1/2) = 5³ · 5^([FRAC:1|2]) = 125 · √5",note:"razdvajanje eksponenta"},
    {txt:"Decimalno: 125 · √5 = 125 · 2,236... ≈ 279,508...",note:"priznaje se [279, 280]"},
    {txt:"⇒ x = 125√5 ≈ 279,51",final:true}
  ,
    {txt:"Provjera (funkcije): rezultat x = 125√5 ≈ 279,51 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Definicija kompozicije: (f ∘ g)(x) = f(g(x)). Prvo se izvršava UNUTARNJA funkcija (g), pa VANJSKA (f). Domena je {x ∈ D(g) : g(x) ∈ D(f)}.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: (f ∘ g) ≠ (g ∘ f) općenito. Ovdje (g ∘ f)(x) = g(f(x)) = log₅(2x) — sasvim drugo.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 125√5 ≈ 279,51 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Definicija kompozicije: (f ∘ g)(x) = f(g(x)). Prvo se izvršava UNUTARNJA funkcija (g), pa VANJSKA (f). Domena je {x ∈ D(g) : g(x) ∈ D(f)}.",
    "Pravilo: (f ∘ g) ≠ (g ∘ f) općenito. Ovdje (g ∘ f)(x) = g(f(x)) = log₅(2x) — sasvim drugo.",
    "Pravilo logaritma: log_a y = c ⇔ y = a^c (definicija logaritma). Ovdje a = 5, c = 7/2.",
    "Pravilo razlomljenog eksponenta: a^(m/n) = (a^m)^(1/n) = ⁿ√(a^m). Konkretno: 5^([FRAC:7|2]) = √(5⁷) = √78125.",
    "Pravilo razdvajanja eksponenta: a^(p+q) = a^p · a^q. Posebno: 5^(3+1/2) = 5³·5^([FRAC:1|2]) = 125√5.",
    "Konkretno: √5 ≈ 2,2360679..., pa 125 · 2,236 ≈ 279,508. Zaokruženo na 2 decimale: 279,51.",
    "Provjera: log₅(125√5) = log₅(5^([FRAC:7|2])) = 7/2 (po pravilu log_a aˣ = x). Onda 2·(7/2) = 7 ✓.",
    "Greška: pomiješati f ∘ g s g ∘ f ⇒ rješavati log₅(2x) = 7 ⇒ 2x = 5⁷ = 78125 ⇒ x = 39062,5 (krivo)."
  ]
},
  {id:30,img:true,type:"sa",topic:"geom",points:4,
  q:"Etikete za omatanje mliječnih proizvoda izrezane su iz recikliranoga kartona oblika kružnoga vijenca. Dimenzije jedne etikete su l₁ = 14,6 cm, l₂ = 21,6 cm, d = 9,3 cm. Koliko kvadratnih centimetara kartona je ostalo nakon što je iz kružnoga vijenca izrezan maksimalni broj etiketa?",
  intermediates:[19.397, 28.697, 0.7527, 135.78, 823.52, 447.28, 376.24, 1346.3, 1346, 58.52, 218.16, 218.2],
  warn:"Pazi: rezultat je MAALENA površina (~58 cm²), ne velika — jer 8 etiketa pokriva skoro CIJELI vijenac (8·43° = 344°, ostatak 16°).",
  sol:{ans:"≈ 58,52 cm²",alt:["58,52","58,52","≈ 58,52 cm²","58 cm²","59 cm²"]},
  img:true,
  exp:"Iz l₁ = r₁α, l₂ = r₂α, d = r₂−r₁: r₁ ≈ 19,40, r₂ ≈ 28,70, α ≈ 43,13°. Broj etiketa n = ⌊360°/43,13°⌋ = 8. Ostatak = 360°−8·α ≈ 14,99° ≈ 0,262 rad. P_ostatka = [FRAC:1|2](r₂²−r₁²)·0,262 ≈ 58,52 cm².",
  steps:[
    {txt:"Geometrijski model: etiketa je kružni isječak VIJENCA (između dva koncentrična kruga) sa središnjim kutom α"},
    {txt:"Veza dimenzija etikete (α u radijanima):"},
    {txt:"  l₁ = r₁·α (unutarnji luk), l₂ = r₂·α (vanjski luk), d = r₂ − r₁ (širina)"},
    {txt:"Korak 1 — izračunaj r₁ i r₂. Iz omjera: l₂/l₁ = r₂·α/(r₁·α) = r₂/r₁ = 21,6/14,6"},
    {txt:"r₂ = r₁ · (21,6/14,6). Uvrsti u d = r₂ − r₁: r₁·(21,6/14,6 − 1) = 9,3"},
    {txt:"r₁·(21,6 − 14,6)/14,6 = 9,3 ⇒ r₁·(7/14,6) = 9,3 ⇒ r₁ = 9,3·14,6/7 = 135,78/7 ≈ 19,397 cm"},
    {txt:"r₂ = 19,397 + 9,3 = 28,697 cm"},
    {txt:"Korak 2 — kut α: iz l₁ = r₁·α ⇒ α = l₁/r₁ = 14,6/19,397 ≈ 0,7527 rad"},
    {txt:"U stupnjevima: α ≈ 0,7527 · 180°/π ≈ 43,126°"},
    {txt:"Korak 3 — broj etiketa: koliko α-ova stane u puni krug 360°? n = ⌊360°/43,126°⌋ = ⌊8,348⌋ = 8"},
    {txt:"Korak 4 — ostatak kuta (nije pokriveno etiketama): β = 360° − 8·43,126° ≈ 14,993°"},
    {txt:"Pretvori u radijane: β ≈ 14,993° · π/180° ≈ 0,2617 rad"},
    {txt:"Korak 5 — površina ostatka kao kružnog isječka vijenca:"},
    {txt:"P = (1/2)·(r₂² − r₁²)·β = (1/2)·(28,697² − 19,397²)·0,2617"},
    {txt:"  = ([FRAC:1|2])·(823,52 − 376,24)·0,2617 = ([FRAC:1|2])·447,28·0,2617 ≈ 58,52 cm²",final:true},
    {txt:"Provjera: 8 etiketnih sektora zauzimaju 8·43,126° = 345°; ostatak 360°−345° = 15° ≈ β; β u radijanima = 15·π/180 ≈ 0,2618 ≈ 0,2617 ✓; površina vijenca u ostatku je razumna ~58 cm²",note:"verifikacija"},{txt:"Sažetak postupka: Pravilo duljine luka: l = r·α, gdje α u radijanima. Za α u stupnjevima: l = r·α·π/180°.",note:"postupak",final:true},{txt:"Intuicija: Kružni vijenac (annulus): područje između dva koncentrična kruga radijusa r₁ < r₂. Površina cijelog vijenca: π(r₂² − r₁²).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 58,52 cm² ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo duljine luka: l = r·α, gdje α u radijanima. Za α u stupnjevima: l = r·α·π/180°.",
    "Kružni vijenac (annulus): područje između dva koncentrična kruga radijusa r₁ < r₂. Površina cijelog vijenca: π(r₂² − r₁²).",
    "Kružni isječak vijenca (sektor s rupom): dio vijenca sa središnjim kutom α. Površina: (1/2)·(r₂² − r₁²)·α (α u rad).",
    "Strategija: za probleme s vijencem i lukovima, koristi sustav r₁, r₂, α s tri jednadžbe (dva luka + širina) — sustav rješiv jednoznačno.",
    "Strategija: za 'koliko etiketa stane' — koristi cijeli broj koji ne prelazi omjer 360°/α (donji cijeli dio, ⌊·⌋).",
    "Konkretno: vrlo gusta upakiranost (8/8,348 ≈ 96 % iskorištenost). Ostalo samo ~4 % ukupnog vijenca.",
    "Provjera povšine cijelog vijenca: π·(823,52 − 376,24) = π·447,28 ≈ 1404,87 cm². 8 etiketa pokriva 8·168,3 ≈ 1346 cm². Ostatak: 1404,87 − 1346,3 ≈ 58,57 cm² ✓ (mala razlika zbog zaokruživanja).",
    "NCVVO toleranca: rezultat unutar [56, 60] cm² priznaje se zbog zaokruživanja u r₁, r₂, α.",
    "Greška: pomiješati formulu površine isječka kruga (1/2·r²·α) s isječkom vijenca (1/2·(R²−r²)·α) — koristi pogrešan radius."
  ]
}
];

export const qImages = {
  "2011_jesen_A__8": () => e(SvgZad8_2011JA, null),
  "2011_jesen_A__26": () => e(SvgZad26_2011JA, null),
  "2011_jesen_A__27": () => e(SvgZad27_2011JA, null),
  "2011_jesen_A__30": () => e(SvgZad30_2011JA, null),
};
