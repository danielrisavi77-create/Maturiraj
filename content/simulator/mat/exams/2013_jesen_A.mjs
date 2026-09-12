// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg29_2013Aj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function SvgEmptyGrid29_2013Aj(){
  const W=280,H=260,cx=100,cy=150,sc=28;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"ge29aj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"axe29",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"aye29",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#ge29aj)"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#axe29)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#aye29)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("text",{x:cx-11,y:cy+13,fontSize:10,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-13,y:cy-sc+5,fontSize:10,fill:"var(--text)"},"1")
  );
}

function SvgGraf29_2013Aj(){
  const W=340,H=260,cx=95,cy=175,sc=27;
  const blue="var(--blue)", red="var(--red)", gold="var(--gold)", text="var(--text)", muted="var(--muted)";
  // Asimptota x=4
  const asymX=cx+4*sc;
  // Grid
  const gLines=[];
  for(let xi=-2;xi<=9;xi++) gLines.push(
    e("line",{key:"gx"+xi,x1:cx+xi*sc,y1:10,x2:cx+xi*sc,y2:H-20,
      stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})
  );
  for(let yi=-3;yi<=5;yi++) gLines.push(
    e("line",{key:"gy"+yi,x1:10,y1:cy-yi*sc,x2:W-10,y2:cy-yi*sc,
      stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})
  );
  // Lijeva grana: kroz (-5,0), max A(1,1), kroz (3,0), →-∞ pri x→4⁻
  const leftPath=`M ${cx-5*sc},${cy} C ${cx-4*sc},${cy+sc} ${cx-3*sc},${cy-0.5*sc} ${cx+1*sc},${cy-1*sc} C ${cx+2*sc},${cy-sc*0.5} ${cx+3*sc},${cy} ${cx+3*sc},${cy} C ${cx+3.3*sc},${cy+sc} ${cx+3.7*sc},${cy+3*sc} ${cx+3.95*sc},${cy+4.5*sc}`;
  // Desna grana: +∞→min B(7,4)→+∞
  const rightPath=`M ${cx+4.05*sc},${cy-5*sc} C ${cx+4.3*sc},${cy-4.5*sc} ${cx+5*sc},${cy-4.5*sc} ${cx+7*sc},${cy-4*sc} C ${cx+8.5*sc},${cy-3.8*sc} ${cx+9*sc},${cy-4.5*sc} ${cx+9.5*sc},${cy-5*sc}`;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    ...gLines,
    // Osi
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:text,strokeWidth:1.5}),
    e("line",{x1:cx,y1:10,x2:cx,y2:H-10,stroke:text,strokeWidth:1.5}),
    e("text",{x:W-8,y:cy+4,fontSize:10,fill:text},"x"),
    e("text",{x:cx+4,y:8,fontSize:10,fill:text},"y"),
    e("text",{x:cx+sc-4,y:cy+14,fontSize:9,fill:muted},"1"),
    e("text",{x:cx-8,y:cy-sc+4,fontSize:9,fill:muted},"1"),
    e("text",{x:cx-14,y:cy+14,fontSize:9,fill:muted},"0"),
    // Asimptota x=4 (crvena dashed)
    e("line",{x1:asymX,y1:10,x2:asymX,y2:H-10,stroke:red,strokeWidth:1.5,strokeDasharray:"6,4"}),
    e("text",{x:asymX+3,y:20,fontSize:9,fill:red},"x=4"),
    // Krivulja (plava)
    e("path",{d:leftPath,fill:"none",stroke:blue,strokeWidth:2.2}),
    e("path",{d:rightPath,fill:"none",stroke:blue,strokeWidth:2.2}),
    // Nultočke — otvoreni kružići
    e("circle",{cx:cx-5*sc,cy:cy,r:4.5,fill:"white",stroke:blue,strokeWidth:1.8}),
    e("circle",{cx:cx+3*sc,cy:cy,r:4.5,fill:"white",stroke:blue,strokeWidth:1.8}),
    // A(1,1) lokalni max — gold
    e("circle",{cx:cx+sc,cy:cy-sc,r:5,fill:"white",stroke:gold,strokeWidth:2.2}),
    e("text",{x:cx+sc+6,y:cy-sc-6,fontSize:10,fill:gold,fontWeight:"bold"},"A(1, 1)"),
    // B(7,4) lokalni min — gold
    e("circle",{cx:cx+7*sc,cy:cy-4*sc,r:5,fill:"white",stroke:gold,strokeWidth:2.2}),
    e("text",{x:cx+7*sc+5,y:cy-4*sc+14,fontSize:10,fill:gold,fontWeight:"bold"},"B(7, 4)")
  );
}

function SvgHiperbola28_2013Aj(){
  const W=280,H=250,cx=130,cy=125,sc=36;
  const a=2,b=Math.sqrt(3);
  // Generiranje točaka hiperbole
  const ptR=[],ptL=[];
  for(let x=a;x<=4.5;x+=0.05){
    const y=Math.sqrt(3*(x*x/4-1));
    if(!isNaN(y)){
      ptR.push(`${cx+x*sc},${cy-y*sc}`);
      ptR.push(`${cx+x*sc},${cy+y*sc}`);
    }
  }
  // Desna grana - sortiraj
  const rPts=[];
  for(let x=a;x<=4.5;x+=0.05){
    const y=Math.sqrt(3*(x*x/4-1));
    if(!isNaN(y)) rPts.push({x:cx+x*sc,y:cy-y*sc});
  }
  const rPtsDown=[...rPts].reverse().map(p=>({x:p.x,y:cy+(cy-p.y)}));
  const rAll=[...rPts,...rPtsDown];
  const dR=rAll.map((p,i)=>i===0?`M${p.x},${p.y}`:`L${p.x},${p.y}`).join(' ');
  const lPts=[];
  for(let x=a;x<=4.5;x+=0.05){
    const y=Math.sqrt(3*(x*x/4-1));
    if(!isNaN(y)) lPts.push({x:cx-x*sc,y:cy-y*sc});
  }
  const lPtsDown=[...lPts].reverse().map(p=>({x:p.x,y:cy+(cy-p.y)}));
  const lAll=[...lPts,...lPtsDown];
  const dL=lAll.map((p,i)=>i===0?`M${p.x},${p.y}`:`L${p.x},${p.y}`).join(' ');

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"gh28aj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"axh28",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ayh28",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gh28aj)"}),
    // Asimptote
    e("line",{x1:cx-4.5*sc,y1:cy-4.5*sc*b/a,x2:cx+4.5*sc,y2:cy+4.5*sc*b/a,stroke:"var(--muted)",strokeWidth:0.9,strokeDasharray:"5,4"}),
    e("line",{x1:cx-4.5*sc,y1:cy+4.5*sc*b/a,x2:cx+4.5*sc,y2:cy-4.5*sc*b/a,stroke:"var(--muted)",strokeWidth:0.9,strokeDasharray:"5,4"}),
    // Osi
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#axh28)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ayh28)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:13,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx-10,y:cy+12,fontSize:9,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+12,fontSize:9,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:9,fill:"var(--text)"},"1"),
    // Hiperbola
    e("path",{d:dR,fill:"none",stroke:"var(--blue)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),
    e("path",{d:dL,fill:"none",stroke:"var(--blue)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Označene točke tjemena
    e("circle",{cx:cx+a*sc,cy,r:4,fill:"var(--text)"}),
    e("circle",{cx:cx-a*sc,cy,r:4,fill:"var(--text)"})
  );
}

function SvgGridEmpty_2013JesenA(){
  const W=280,H=260,cx=100,cy=170,sc=32;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g28jaj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",
          stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})
      )
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g28jaj)"}),
    e("line",{x1:20,y1:cy,x2:W-10,y2:cy,stroke:_BLUE,strokeWidth:1.5}),
    e("line",{x1:cx,y1:10,x2:cx,y2:H-10,stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:W-8,y:cy+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:8,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:cx+sc-4,y:cy+14,fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:cx-8,y:cy-sc+4,fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:cy+14,fontSize:9,fill:"var(--muted)"},"0")
  );
}

function SvgParalelogram23_2013Aj(){
  const W=300,H=210;
  const A={x:30,y:180}, B={x:190,y:180};
  const D={x:80,y:55}, Cv={x:240,y:55};
  const S={x:(A.x+Cv.x)/2,y:(A.y+Cv.y)/2};
  const T={x:(B.x+S.x)/2,y:(B.y+S.y)/2};
  const pt=p=>`${p.x},${p.y}`;
  const blue="var(--blue)", green="var(--green)", gold="var(--gold)", txt="var(--text)", muted="var(--muted)";
  const hBaseY=A.y;
  const labels=[["A",A.x-14,A.y+5],["B",B.x+5,B.y+5],["C",Cv.x+5,Cv.y],["D",D.x-14,D.y]];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("polygon",{points:`${pt(A)} ${pt(B)} ${pt(Cv)} ${pt(D)}`,
      fill:"rgba(74,144,217,0.06)",stroke:blue,strokeWidth:1.8}),
    e("line",{x1:A.x,y1:A.y,x2:Cv.x,y2:Cv.y,stroke:muted,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:B.x,y1:B.y,x2:D.x,y2:D.y,stroke:muted,strokeWidth:1,strokeDasharray:"5,3"}),
    e("polygon",{points:`${pt(A)} ${pt(B)} ${pt(T)}`,
      fill:"rgba(80,200,120,0.25)",stroke:green,strokeWidth:2}),
    e("line",{x1:D.x,y1:D.y,x2:D.x,y2:hBaseY,
      stroke:gold,strokeWidth:1.5,strokeDasharray:"4,3"}),
    e("rect",{x:D.x,y:hBaseY-9,width:9,height:9,fill:"none",stroke:gold,strokeWidth:1.2}),
    e("text",{x:D.x+6,y:(D.y+hBaseY)/2+4,fontSize:10,fill:gold},"8 cm"),
    e("text",{x:(A.x+B.x)/2,y:A.y+16,fontSize:11,fill:txt,textAnchor:"middle"},"5 cm"),
    ...labels.map(([l,x,y])=>e("text",{key:l,x,y,fontSize:12,fill:txt,fontWeight:"bold"},l)),
    e("circle",{cx:S.x,cy:S.y,r:4,fill:"white",stroke:txt,strokeWidth:1.5}),
    e("text",{x:S.x+5,y:S.y-5,fontSize:10,fill:txt,fontWeight:"bold"},"S"),
    e("circle",{cx:T.x,cy:T.y,r:4,fill:green}),
    e("text",{x:T.x+5,y:T.y+4,fontSize:10,fill:green,fontWeight:"bold"},"T")
  );
}

function SvgKompleks22_2013Aj(){
  const W=260,H=250,cx=120,cy=130,sc=40;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const r=4*sc;  // modul = 4
  const ang=120*Math.PI/180;
  // z je u 2. kvadrantu pod kutom 120° od pozitivne x-osi
  const zx=cx+r*Math.cos(Math.PI-ang);   // = cx - r*cos(60°)
  const zy=cy-r*Math.sin(ang);            // = cy - r*sin(120°)
  // Kut luk (od 0 do 120°)
  const arcR=38;
  const arcEnd={x:cx+arcR*Math.cos(Math.PI-ang), y:cy-arcR*Math.sin(ang)};

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"gkz2",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"axkz2",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"aykz2",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gkz2)"}),
    // Velika kružnica r=4 (skalirana na sc=40px/jed)
    e("circle",{cx,cy,r:r,fill:"none",stroke:_BLUE,strokeWidth:2}),
    // Jedinična kružnica (tanka, za referencu)
    e("circle",{cx,cy,r:sc,fill:"none",stroke:"var(--muted)",strokeWidth:0.7,strokeDasharray:"3,3"}),
    // Šrafirani sektor kuta (sivi, od 0 do 120°)
    e("path",{
      d:`M ${cx},${cy} L ${cx+arcR},${cy} A ${arcR} ${arcR} 0 0 0 ${arcEnd.x},${arcEnd.y} Z`,
      fill:"rgba(180,180,180,0.35)",stroke:"none"
    }),
    // Luk kuta
    e("path",{
      d:`M ${cx+arcR},${cy} A ${arcR} ${arcR} 0 0 0 ${arcEnd.x},${arcEnd.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.3
    }),
    // Oznaka 120°
    e("text",{x:cx+14,y:cy-20,fontSize:12,fontWeight:"700",fill:"var(--text)"},"120\u00b0"),
    // Osi
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#axkz2)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#aykz2)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--text)"},"y"),
    // Skala 0, 1
    e("circle",{cx:cx+sc,cy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx,cy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.3}),
    e("text",{x:cx+sc-3,y:cy+14,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-14,y:cy-sc+5,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-11,y:cy+14,fontSize:10,fill:"var(--text)"},"0"),
    // Vektor od ishodišta do z
    e("line",{x1:cx,y1:cy,x2:zx,y2:zy,stroke:"var(--text)",strokeWidth:2.2}),
    // Točka z — prazan kružić kao na slici
    e("circle",{cx:zx,cy:zy,r:5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:2}),
    // Label "z" — izvan kružice, u slobodnom prostoru
    e("text",{x:zx-22,y:zy-10,fontSize:13,fontWeight:"700",fontStyle:"italic",fill:_GOLD},"z")
  );
}

function SvgTrokut14_2013Aj(){
  const W=300,H=200;
  const A={x:55,y:175}, B={x:245,y:175};
  const ang=23*Math.PI/180;
  const sc=5;
  const C={x:B.x-30*sc*Math.cos(ang), y:B.y-30*sc*Math.sin(ang)};
  const pt=(p)=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  // Colors
  const blue="var(--blue)", gold="var(--gold)", red="var(--red)", text="var(--text)", muted="var(--muted)";
  // Kut arc u B
  const r=22, ang0=Math.PI, ang1=Math.PI-ang;
  const ax0=B.x+r*Math.cos(ang0), ay0=B.y+r*Math.sin(ang0);
  const ax1=B.x+r*Math.cos(ang1), ay1=B.y+r*Math.sin(ang1);
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    // Trokut (plav fill)
    e("polygon",{points:`${pt(A)} ${pt(B)} ${pt(C)}`,
      fill:"rgba(74,144,217,0.1)",stroke:blue,strokeWidth:2}),
    // Visina iz B (dashed, crvena)
    e("line",{x1:B.x,y1:B.y,x2:B.x,y2:C.y+10,
      stroke:red,strokeWidth:1.4,strokeDasharray:"5,3"}),
    // Stranice labeli
    e("text",{x:(A.x+B.x)/2,y:A.y+14,fontSize:12,fill:text,textAnchor:"middle"},"20 cm"),
    e("text",{x:(B.x+C.x)/2+14,y:(B.y+C.y)/2,fontSize:12,fill:blue,textAnchor:"middle",
      transform:`rotate(-68,${(B.x+C.x)/2+14},${(B.y+C.y)/2})`},"30 cm"),
    // Kut B arc (gold)
    e("path",{d:`M ${ax0} ${ay0} A ${r} ${r} 0 0 0 ${ax1} ${ay1}`,
      fill:"rgba(233,180,70,0.2)",stroke:gold,strokeWidth:1.5}),
    e("text",{x:B.x-38,y:B.y-8,fontSize:11,fill:gold},"23°"),
    // Vrh labels
    e("text",{x:A.x-12,y:A.y+5,fontSize:13,fill:text,fontWeight:"bold"},"A"),
    e("text",{x:B.x+5,y:B.y+5,fontSize:13,fill:text,fontWeight:"bold"},"B"),
    e("text",{x:C.x-14,y:C.y-5,fontSize:13,fill:text,fontWeight:"bold"},"C"),
    // Točke
    e("circle",{cx:A.x,cy:A.y,r:3,fill:text}),
    e("circle",{cx:B.x,cy:B.y,r:3,fill:text}),
    e("circle",{cx:C.x,cy:C.y,r:3,fill:text})
  );
}

function SvgGrid28_2013Aj(){
  const W=280,H=260,cx=100,cy=170,sc=32;
  // Pravac x/5+y/2=1: sjecišta (5,0) i (0,2)
  const x1px=cx+5*sc, y1px=cy;        // (5,0)
  const x2px=cx, y2px=cy-2*sc;         // (0,2)
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g28aj2",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ax28aj2",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ay28aj2",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g28aj2)"}),
    // Osi
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ax28aj2)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ay28aj2)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--text)"},"y"),
    // Skala
    e("circle",{cx:cx+sc,cy,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy,r:3,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-14,y:cy-sc+5,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-11,y:cy+13,fontSize:10,fill:"var(--text)"},"0"),
    // Pravac x/5+y/2=1 produžen malo iza sjecišta
    e("line",{x1:x1px+20,y1:cy+8,x2:x2px-8,y2:y2px-13,
      stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"}),
    // Sjecišta naglašena
    e("circle",{cx:x1px,cy:y1px,r:4.5,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:2}),
    e("circle",{cx:x2px,cy:y2px,r:4.5,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:2}),
    // Oznake sjecišta
    e("text",{x:x1px-3,y:cy+14,fontSize:10,textAnchor:"middle",fill:"var(--text)"},"5"),
    e("text",{x:cx-14,y:y2px+5,fontSize:10,fill:"var(--text)"},"2")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: −11/4 = −2,75; cijeli od −2 do 2 (3 je isključen) — broji ih.",topic:"br",points:1,
  q:"Koliko cijelih brojeva ima u intervalu [−[FRAC:11|4], 3⟩?",
  opts:["4","5","6","7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"-11/4 = -2,75. Interval je [-2,75; 3⟩, uključuje lijevi rub, isključuje desni."},
    {txt:"Cijeli brojevi u intervalu: -2, -1, 0, 1, 2"},
    {txt:"Ukupno 5 brojeva."},
    {txt:"Analiza: A(4)—broje od -3; C(6)—uključuju -3; D(7)—uključuju 3.",final:true,note:"diagnostika"},
    {txt:"Provjera: {-2,-1,0,1,2} ⊂ [-2,75; 3⟩ i -3 ∉ i 3 ∉ → 5 = B ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: zatvorena zagrada [ uključuje rub, otvorena ⟨ ne uključuje.",note:"postupak",final:true},{txt:"Intuicija: -11/4 = -2,75 — prvi cijeli broj veći od ili jednak: -2.",note:"intuicija",final:true}
  ],
  ex:"Eksponencijalna jednadžba: prepiši baze, izjednači eksponente, provjeri je li rješenje u skupu.",
  why:["Pravilo: zatvorena zagrada [ uključuje rub, otvorena ⟨ ne uključuje.","-11/4 = -2,75 — prvi cijeli broj veći od ili jednak: -2.","Česta greška (najčešće): A(4) — uključuju -3 misleći da [-11/4,3⟩ počinje od -3; ili D(7) — uključuju i 3 koji nije u skupu.","Provjera: cijeli u [-2,75; 3⟩ = {-2,-1,0,1,2} = 5 elemenata = B ✓","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:2,type:"mc",warn:"Pazi: prati redoslijed — zbroj u zagradi, pa dijeljenje s C, pa množenje s D.",topic:"br",points:1,
  q:"Učenik je na džepnome računalu zbrojio brojeve A i B. Dobiveni rezultat podijelio je s C. Taj je rezultat pomnožio s D. Koji izraz opisuje taj račun?",
  opts:["(A + B)/(CD)","(A + B)·D/C","(A + B) : C · D","A + B : C/D"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Korak 1: zbroj A + B"},
    {txt:"Korak 2: podijeliti s C: (A + B)/C"},
    {txt:"Korak 3: pomnožiti s D: ([FRAC:A + B|C]) · D = (A + B)·[FRAC:D|C]"},
    {txt:"Analiza: A(AB/CD)—dijele s CD; C—netočan zapis; D—krivi raspored.",final:true,note:"diagnostika"},
    {txt:"Provjera: A=2,B=3,C=4,D=6 → (2+3)·6/4 = 7,5 = B ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: redoslijed računskih operacija — najprije zbrajanje (A+B), pa dijeljenje s C, pa množenje s D.",note:"postupak",final:true},{txt:"Intuicija: Opcija C je ekvivalentna, ali prema standardu zapisa s razlomkom je B (bez znaka dijeljenja).",note:"intuicija",final:true}
  ],
  why:["Pravilo: redoslijed računskih operacija — najprije zbrajanje (A+B), pa dijeljenje s C, pa množenje s D.","Opcija C je ekvivalentna, ali prema standardu zapisa s razlomkom je B (bez znaka dijeljenja).","Česta greška (najčešće): A(AB/CD) — dijele s umnoškom CD, ali treba dijeliti samo s C pa množiti s D.","Provjera: A=2,B=3,C=4,D=5 → (2+3)/4·5 = 5/4·5 = 6,25; B: (2+3)·5/4 = 6,25 ✓","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:3,type:"mc",warn:"Pazi: 1 g/cm³ = 1000 kg/m³ → množi s 1000.",topic:"ostalo",points:1,
  q:"Kolika je gustoća od 1,8 g/cm³ izražena u kg/m³?",
  opts:["1,8 kg/m³","18 kg/m³","180 kg/m³","1 800 kg/m³"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Pretvorbe: 1 g = 10⁻³ kg i 1 cm³ = 10⁻⁶ m³"},
    {txt:"1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = 10³ kg/m³ = 1 000 kg/m³"},
    {txt:"1,8 · 1 000 = 1 800 kg/m³"},
    {txt:"Analiza: A(1,8)—bez pretvorbe; B(18)—×10; C(180)—×100.",final:true,note:"diagnostika"},
    {txt:"Provjera: 1,8×10³ = 1 800 kg/m³ ✓ → D",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: 1 g/cm³ = 1 000 kg/m³; opći postupak: dijeli gram s 10⁻³ i cm³ s 10⁻⁶.",note:"postupak",final:true},{txt:"Intuicija: Izvod: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = 10³ kg/m³ = 1 000 kg/m³.",note:"intuicija",final:true}
  ],
  why:["Formula: 1 g/cm³ = 1 000 kg/m³; opći postupak: dijeli gram s 10⁻³ i cm³ s 10⁻⁶.","Izvod: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = 10³ kg/m³ = 1 000 kg/m³.","Česta greška (najčešće): B(18) ili C(180) — dijele umjesto množenja ili miješaju pretvorbeni faktor.","Mnemotehnika: gustoća vode = 1 g/cm³ = 1 000 kg/m³ — zapamtiti kao referentnu točku.","Provjera: 1,8 × 1000 = 1800 kg/m³ → D ✓","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti."]
},
  {id:4,type:"mc",warn:"Pazi: označi 2k i 5k; (2k − 1,6)/(5k − 1,6) = 2/7; riješi po k pa razlika = 5k − 2k.",topic:"al",points:1,
  q:"Omjer duljina dviju dužina bio je 2 : 5. Svaka dužina skraćena je za 1,6 cm te je omjer skraćenih dužina 2 : 7. Kolika je bila razlika njihovih duljina prije skraćivanja?",
  opts:["3 cm","5 cm","6 cm","10 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Neka su izvorne duljine 2x i 5x."},
    {txt:"Jednadžba: (2x − 1,6)/(5x − 1,6) = 2/7"},
    {txt:"Križno: 7(2x − 1,6) = 2(5x − 1,6) ⇒ 14x − 11,2 = 10x − 3,2"},
    {txt:"4x = 8 ⇒ x = 2 cm"},
    {txt:"Duljine: 4 cm i 10 cm. Razlika: 10 − 4 = 6 cm"},
    {txt:"Analiza: A(3)—x=1,5; B(5)—miješaju; D(10)—daju veću dužinu.",final:true,note:"diagnostika"},
    {txt:"Provjera: 4:10=2:5 ✓; 2,4:8,4=2:7 ✓; razlika=6 → C ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Iz omjera a : b = k : l slijedi da postoji x takav da a = kx i b = lx.",note:"postupak",final:true},{txt:"Intuicija: Promjena oba izraza za istu konstantu mijenja omjer.",note:"intuicija",final:true}
  ],
  why:["Pravilo: Iz omjera a : b = k : l slijedi da postoji x takav da a = kx i b = lx.","Promjena oba izraza za istu konstantu mijenja omjer.","Česta greška (najčešće): A(3) ili B(5) — ne postave sustav jednadžbi, pogađaju.","Provjera: duljine 4 i 10 → omjer 4:10 = 2:5 ✓; skraćene: 2,4 i 8,4 → 2,4:8,4 = 2:7 ✓","Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:5,type:"mc",warn:"Pazi: C(n,2) = n(n − 1)/2; izjednači s ½n² − 3, pa riješi (dio s n² se krati).",topic:"al",points:1,
  q:"Koji broj n je rješenje jednadžbe C(n, 2) = [FRAC:1|2]n² − 3? (Napomena: C(n, k) = n!/(k!·(n − k)!))",
  opts:["n = 3","n = 4","n = 5","n = 6"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"C(n, 2) = n(n − 1)/2 = (n² − n)/2"},
    {txt:"(n² − n)/2 = (1/2)n² − 3"},
    {txt:"Pomnožimo s 2: n² − n = n² − 6"},
    {txt:"−n = -6 ⇒ n = 6"},
    {txt:"Analiza: A(n=3)—C(3,2)=3≠-1,5; B(n=4)—C(4,2)=6≠5; C(n=5)—C(5,2)=10≠9,5.",final:true,note:"diagnostika"},
    {txt:"Provjera: C(6,2)=15=(1/2)·36-3 ✓ → D",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: C(n, 2) = n(n − 1)/2; C(n, k) = n!/(k!(n−k)!).",note:"postupak",final:true},{txt:"Intuicija: Članovi s n² se poništavaju, preostaje linearna jednadžba.",note:"intuicija",final:true}
  ],
  why:["Formula: C(n, 2) = n(n − 1)/2; C(n, k) = n!/(k!(n−k)!).","Članovi s n² se poništavaju, preostaje linearna jednadžba.","Česta greška (najčešće): A ili B — ne postave C(n,2) kao n(n-1)/2 ili ne reduciraju ispravno.","Provjera: C(6,2) = 15; (1/2)·36-3 = 18-3 = 15 ✓ → D","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:6,type:"mc",warn:"Pazi: dva slučaja (2x − 3 = ±(3x + 5)); nađi oba rješenja pa ih pomnoži.",topic:"al",points:1,
  q:"Koliki je umnožak rješenja jednadžbe |2x − 3| = |3x + 5|?",
  opts:["16/5","64/5","20","80"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Kod |A| = |B| imamo dva slučaja: A = B ili A = −B"},
    {txt:"Slučaj 1: 2x − 3 = 3x + 5 ⇒ −x = 8 ⇒ x₁ = -8"},
    {txt:"Slučaj 2: 2x − 3 = −(3x + 5) ⇒ 2x − 3 = -3x − 5 ⇒ 5x = -2 ⇒ x₂ = -2/5"},
    {txt:"Provjera oba rješenja u izvornoj jednadžbi — oba zadovoljavaju."},
    {txt:"Umnožak: x₁ · x₂ = (-8) · (-2/5) = [FRAC:16|5]"},
    {txt:"Analiza: B(64/5)—greška množenja; C(20)—zbrajaju; D(80)—krivi faktori.",final:true,note:"diagnostika"},
    {txt:"Provjera: |2(-8)-3|=19=|3(-8)+5| ✓; produkt=16/5 → A ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Za |A| = |B|: dva slučaja, A = B ili A = −B (nije isto kao |A| = B koje ima dodatni uvjet B ≥ 0).",note:"postupak",final:true},{txt:"Intuicija: Uvijek provjeriti rješenja u izvornoj jednadžbi.",note:"intuicija",final:true}
  ],
  why:["Za |A| = |B|: dva slučaja, A = B ili A = −B (nije isto kao |A| = B koje ima dodatni uvjet B ≥ 0).","Uvijek provjeriti rješenja u izvornoj jednadžbi.","Česta greška (najčešće): B(64/5) — greška u množenju x₁·x₂ (npr. pogriješili predznak); C(20) — zbrajanje umjesto množenje.","Vièteova formula: za ax²+bx+c=0 vrijedi x₁·x₂ = c/a (provjera bez direktnog množenja).","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:7,type:"mc",warn:"Pazi: logₐ(b·x) = 2 → b·x = a² → x = a²/b.",topic:"al",points:1,
  q:"Koji realan broj x je rješenje jednadžbe logₐ b + logₐ x = 2, gdje je a > 0, a ≠ 1, b > 0?",
  opts:["x = a²/b","x = b²/a","x = 2a/b","x = 2b/a"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Zbroj logaritama: logₐ(bx) = 2"},
    {txt:"bx = a² ⇒ x = [FRAC:a²|b]"},
    {txt:"Alternativna provjera: logₐ b + logₐ(a²/b) = logₐ(a²) = 2 ✓",final:true,note:"diagnostika"},
    {txt:"Provjera: a=4,b=2 → x=8; log₄2+log₄8=1/2+3/2=2 ✓ → A",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: logₐ b + logₐ x = logₐ(bx); logₐ y = c ⟺ y = aᶜ.",note:"postupak",final:true},{txt:"Intuicija: logₐ y = c ⇔ y = aᶜ.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Formula: logₐ b + logₐ x = logₐ(bx); logₐ y = c ⟺ y = aᶜ.","logₐ y = c ⇔ y = aᶜ.","Česta greška (najčešće): B(b²/a) — miješaju x = logₐ(2/b) ili slično; D(2b/a) — krivi eksponent.","Provjera: logₐ b + logₐ(a²/b) = logₐ b + 2 − logₐ b = 2 ✓ → A","Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:8,type:"mc",warn:"Pazi: tg i ctg imaju period π → tg(x − 15π) = tg x, ctg(x − 18π) = ctg x; pa sredi.",topic:"trig",points:1,
  q:"Čemu je, nakon pojednostavljivanja, jednak izraz [FRAC:tg(x − 15π) + 5 tg x|ctg x + 2 ctg(x − 18π)]?",
  opts:["−4/3ctg²x","−4/3tg²x","2 ctg²x","2 tg²x"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Periodičnost: tg(x) ima period π i ctg(x) ima period π."},
    {txt:"tg(x − 15π) = tg(x) (jer je 15π cjelobrojni višekratnik perioda π)"},
    {txt:"ctg(x − 18π) = ctg(x)"},
    {txt:"Brojnik: tg x + 5 tg x = 6 tg x"},
    {txt:"Nazivnik: ctg x + 2 ctg x = 3 ctg x"},
    {txt:"Kvocijent: [FRAC:6 tg x|3 ctg x] = 2 · tg x · tg x = 2 tg²x  (jer [FRAC:1|ctg] x = tg x)"},
    {txt:"Analiza: A(−4/3·ctg²x)—krivo svodi; B—zamjena tg/ctg.",final:true,note:"diagnostika"},
    {txt:"Provjera x=π/4: (1+5)/(1+2)=2=2·1²=2tg²(π/4) ✓ → D",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: periodičnost — tg i ctg imaju period π; tg(x − kπ) = tg x za svaki k ∈ ℤ.",note:"postupak",final:true},{txt:"Intuicija: ctg x = 1/tg x.",note:"intuicija",final:true}
  ],
  why:["Pravilo: periodičnost — tg i ctg imaju period π; tg(x − kπ) = tg x za svaki k ∈ ℤ.","ctg x = 1/tg x.","Česta greška (najčešće): A(−4/3·ctg²x) — krivo svode 6tg x / 3ctg x umjesto 2tg²x; koriste 15 i 18 kao broj perioda.","Provjera: za x=π/4 → (tg(π/4)+5·1)/(ctg(π/4)+2·1) = 6/3 = 2 = 2tg²(π/4) = 2 ✓","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:9,type:"mc",warn:"Pazi: za y² = 4ax je 4a = 12 → a = 3; direktrisa x = −a; udaljenost = x_T + a.",topic:"kon",points:1,
  q:"Točka T(27, 18) leži na paraboli y² = 12x. Koliko je točka T udaljena od ravnalice (direktrise) te parabole?",
  opts:["30 jediničnih duljina","35 jediničnih duljina","39 jediničnih duljina","45 jediničnih duljina"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Standardni oblik parabole: y² = 4px. Ovdje 4p = 12 ⇒ p = 3."},
    {txt:"Žarište: F(p, 0) = (3, 0). Ravnalica: x = −p = -3."},
    {txt:"Udaljenost točke (x₀, y₀) od okomite ravnalice x = -3: d = x₀ − (-3) = x₀ + 3"},
    {txt:"d(T, direktrisa) = 27 + 3 = 30"},
    {txt:"Analiza: B(35)—udaljenost od žarišta; C/D—krivi p.",final:true,note:"diagnostika"},
    {txt:"Provjera: 18²=324=12·27 ✓; d=27+3=30 ✓ → A",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Parabola y² = 4px: žarište F(p, 0), ravnalica x = −p.",note:"postupak",final:true},{txt:"Intuicija: Definicija parabole: skup točaka jednako udaljenih od žarišta i ravnalice.",note:"intuicija",final:true}
  ],
  why:["Parabola y² = 4px: žarište F(p, 0), ravnalica x = −p.","Definicija parabole: skup točaka jednako udaljenih od žarišta i ravnalice.","Česta greška (najčešće): B(35) — računaju udaljenost od žarišta F(3,0) umjesto ravnalice; A(30) je točan jer ravnalica x=-3.","Provjera definicijom: d(T,F) = d(T,ravnalica) → udaljenost T(27,18) od x=-3 je 27+3=30 = A ✓","Provjera kompleksnog broja: realni dio + imaginarni dio (i² = −1).","Tipičan propust: i² = −1 (ne 1); konjugiranje mijenja samo predznak imaginarnog."]
},
  {id:10,type:"mc",warn:"Pazi: prirodna domena (npr. korijena) traži potkorijenu ≥ 0 → poveži s nejednadžbom f(x) ≥ 0.",topic:"fun",points:1,
  q:"Zadana je funkcija f kojoj je domena skup ℝ. Kojoj je od navedenih funkcija prirodna domena jednaka skupu svih rješenja nejednadžbe f(x) ≥ 0?",
  opts:["g(x) = 1/f(x)","h(x) = √f(x)","k(x) = 2^(f(x))","l(x) = log(f(x))"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"g(x) = 1/f(x): domena = {x : f(x) ≠ 0} (ne {x : f(x) ≥ 0})"},
    {txt:"h(x) = √f(x): izraz pod korijenom mora biti ≥ 0 ⇒ domena = {x : f(x) ≥ 0} ✓"},
    {txt:"k(x) = 2^f(x): definirana za sve x ∈ ℝ (bez ograničenja)"},
    {txt:"l(x) = log(f(x)): argument log-a mora biti strogo > 0, ne samo ≥ 0"},
    {txt:"Analiza: A(1/f)—domena ℝ{f=0}; D(log f)—domena {f>0} strogo.",final:true,note:"diagnostika"},
    {txt:"Provjera: √f(x) def ⟺ f(x)≥0 ≡ skup rješenja → B ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: D(√u) = {x: u(x) ≥ 0}, D(log u) = {x: u(x) > 0}.",note:"postupak",final:true},{txt:"Intuicija: Logaritam: argument mora biti strogo > 0 (bez 0).",note:"intuicija",final:true}
  ],
  why:["Pravilo: D(√u) = {x: u(x) ≥ 0}, D(log u) = {x: u(x) > 0}.","Logaritam: argument mora biti strogo > 0 (bez 0).","Ključ: domena √(f(x)) = {x: f(x) ≥ 0} = skup rješenja f(x) ≥ 0 — direktno podudaranje s uvjetom.","Česta greška (najčešće): D(log(f(x))) — domena log(f(x)) zahtijeva f(x)>0, ne f(x)≥0 (stroga nejednakost).","Provjera: h(x)=√f(x) → D(h)={x:f(x)≥0}=rješenja f(x)≥0 → B ✓","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
},
  {id:11,type:"mc",warn:"Pazi: riješi svaku pa provjeri pripada li rješenje otvorenom intervalu ⟨1, 3⟩.",topic:"al",points:2,
  q:"Koja od navedenih jednadžbi ima rješenje u skupu ⟨1, 3⟩?",
  opts:["(2 − x)/3 + 1/2 = 2x","5^(x − 3) = 0,2","log₂ x = −3","(x − 5)² = 0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"A: 2(2 − x) + 3 = 12x ⇒ 4 − 2x + 3 = 12x ⇒ 14x = 7 ⇒ x = 1/2, nije u ⟨1, 3⟩"},
    {txt:"B: 0,2 = 1/5 = 5⁻¹, pa 5^(x − 3) = 5⁻¹ ⇒ x − 3 = -1 ⇒ x = 2, u ⟨1, 3⟩ ✓"},
    {txt:"C: log₂ x = -3 ⇒ x = 2⁻³ = 1/8, nije u ⟨1, 3⟩"},
    {txt:"D: (x − 5)² = 0 ⇒ x = 5, nije u ⟨1, 3⟩"},
    {txt:"Analiza: A(x=1/2 ∉ ⟨1,3⟩); C(x=1/8 ∉ ⟨1,3⟩); D(x=5 ∉ ⟨1,3⟩).",final:true,note:"diagnostika"},
    {txt:"Provjera B: 5^(2-3)=5^(-1)=0,2 ✓; x=2 ∈ ⟨1,3⟩ ✓ → B",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: aˣ = aʸ ⟺ x = y (za a > 0, a ≠ 1); 0,2 = 1/5 = 5⁻¹.",note:"postupak",final:true},{txt:"Intuicija: Interval ⟨1, 3⟩ je otvoren — rubovi nisu uključeni.",note:"intuicija",final:true}
  ],
  ex:"Eksponencijalna jednadžba: prepiši baze, izjednači eksponente, provjeri je li rješenje u skupu.",
  why:["Pravilo: aˣ = aʸ ⟺ x = y (za a > 0, a ≠ 1); 0,2 = 1/5 = 5⁻¹.","Interval ⟨1, 3⟩ je otvoren — rubovi nisu uključeni.","B: 5^(x-3) = 0,2 = 5^(-1) → x-3 = -1 → x = 2 ∈ ⟨1,3⟩ ✓ — jedina s rješenjem u skupu.","Česta greška (najčešće): D((x-5)²=0 → x=5 ∉ ⟨1,3⟩) ili C(log₂x=-3 → x=1/8 ∉ ⟨1,3⟩) — ne provjere je li rješenje u skupu.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:12,type:"mc",warn:"Pazi: jednak iznos pada svake godine → linearno; pad/god = (početna − krajnja)/12.",topic:"br",points:2,
  q:"Automobil je kupljen za 18 000 €. Procjenjuje se da će njegova vrijednost svake godine padati za jednaki iznos. Nakon 12 godina vrijednost automobila iznosit će 10 % njegove početne vrijednosti. Nakon koliko će godina, prema toj procjeni, vrijednost automobila iznositi 40 % njegove početne vrijednosti?",
  opts:["nakon 6 god.","nakon 7 god.","nakon 8 god.","nakon 9 god."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"10 % od 18 000 € = 1 800 €. Linearni pad: od 18 000 € do 1 800 € za 12 godina."},
    {txt:"Godišnji pad: (18 000 − 1 800)/12 = 16 200/12 = 1 350 €/god"},
    {txt:"40 % od 18 000 € = 7 200 €. Treba pasti: 18 000 − 7 200 = 10 800 €"},
    {txt:"Broj godina: 10 [FRAC:800|1] 350 = 8 god."},
    {txt:"Analiza: A(6)—krivi pad; B(7)—zaokružuju 7,33; D(9)—netočna aritmetika.",final:true,note:"diagnostika"},
    {txt:"Provjera: V(8)=18000-1350·8=7200=40%·18000 ✓ → C",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija: linearna amortizacija = jednaki iznos Δ pada vrijednosti svake godine; V(n) = V₀ − n·Δ.",note:"postupak",final:true},{txt:"Intuicija: Iz dva poznata stanja (0. i 12. godina) računamo godišnji pad.",note:"intuicija",final:true}
  ],
  ex:"Linearna amortizacija: izračunaj godišnji pad, potom nađi godinu u kojoj vrijednost padne na željeni postotak.",
  why:["Definicija: linearna amortizacija = jednaki iznos Δ pada vrijednosti svake godine; V(n) = V₀ − n·Δ.","Iz dva poznata stanja (0. i 12. godina) računamo godišnji pad.","Godišnji pad: (18000 - 1800)/12 = 1350 €/god. Vrijednost nakon n god.: V(n) = 18000 - 1350n.","Česta greška (najčešće): B(7) ili D(9) — krivi izračun ili izjednačavanje s krivim postotkom.","Provjera: Δ=1350€/god; V(8)=18000−10800=7200; 7200/18000=40% ✓ → C","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:13,type:"mc",warn:"Pazi: izračunaj c = a + b i d = a − b (komponente), pa cos φ = (c · d)/(|c|·|d|).",topic:"vek",points:2,
  q:"Zadani su vektori a⃗ = 2i⃗ − 3j⃗ i b⃗ = −i⃗ − 7j⃗. Kolika je mjera kuta između vektora c⃗ i d⃗, gdje je c⃗ = a⃗ + b⃗ i d⃗ = a⃗ − b⃗?",
  opts:["41°49′","42°35′","137°25′","138°11′"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"c⃗ = a⃗ + b⃗ = (2 − 1, -3 − 7) = (1, -10)"},
    {txt:"d⃗ = a⃗ − b⃗ = (2 − (-1), -3 − (-7)) = (3, 4)"},
    {txt:"c⃗ · d⃗ = 1 · 3 + (-10) · 4 = 3 − 40 = -37"},
    {txt:"|c⃗| = √(1 + 100) = √101 ≈ 10,05; |d⃗| = √(9 + 16) = √25 = 5"},
    {txt:"cos φ = (c⃗ · d⃗)/(|c⃗|·|d⃗|) = -37/(5√101) ≈ -0,7363"},
    {txt:"φ = arccos(-0,7363) ≈ 137°25′"},
    {txt:"Analiza: A/B—akutni kut; D(138°11')—netočna aritmetika.",final:true,note:"diagnostika"},
    {txt:"Provjera: c⃗·d⃗=-37; cos φ≈-0,736 → 137°25' → C ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: a⃗ · b⃗ = a₁b₁ + a₂b₂ = |a⃗|·|b⃗|·cos φ; φ tup ⟺ a⃗·b⃗ < 0.",note:"postupak",final:true},{txt:"Intuicija: Negativna vrijednost skalarnog umnoška ⇒ tupi kut (između 90° i 180°).",note:"intuicija",final:true}
  ],
  ex:"Vektori c⃗ i d⃗ su zbroj/razlika zadanih; kut se izračunava skalarnim umnoškom i modulima.",
  why:["Formula: a⃗ · b⃗ = a₁b₁ + a₂b₂ = |a⃗|·|b⃗|·cos φ; φ tup ⟺ a⃗·b⃗ < 0.","Negativna vrijednost skalarnog umnoška ⇒ tupi kut (između 90° i 180°).","c⃗ = a⃗+b⃗ = (1,-10), d⃗ = a⃗-b⃗ = (3,4); c⃗·d⃗ = 3-40 = -37 < 0 → kut tupi.","Česta greška (najčešće): A(41°49') — uzimaju akutni kut arccos(37/50,25) umjesto tupog suplementa.","Provjera: c⃗·d⃗=3−40=−37<0 → tupi kut; cos φ≈−0,737 → φ≈137°25' → C ✓","Provjera modulom: |a→| = √(aₓ² + a_y²) — mora biti pozitivan."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: visina iz B na AC; iz površine ½·AB·BC·sin B = ½·AC·h nađi h (prvo AC poučkom o kosinusu).",topic:"trig",points:2,img:true,
  q:"U tupokutnome trokutu ABC mjera kuta u vrhu B je 23°, a duljine stranica su |AB| = 20 cm i |BC| = 30 cm. Kolika je duljina visine iz vrha B?",
  intermediates:[1300, 1104.49],
  opts:["14,77 cm","15,77 cm","16,77 cm","17,77 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Površina: P = (1/2) · |AB| · |BC| · sin(∠B) = (1/2) · 20 · 30 · sin 23° ≈ 117,22 cm²"},
    {txt:"Kosinusov poučak: |AC|² = |AB|² + |BC|² − 2 · |AB| · |BC| · cos(∠B)"},
    {txt:"|AC|² = 400 + 900 − 1 200 · cos 23° ≈ 1 300 − 1 104,49 ≈ 195,51 ⇒ |AC| ≈ 13,98 cm"},
    {txt:"h_B = 2P/|AC| = 234,44/13,98 ≈ 16,77 cm"},
    {txt:"Analiza: A(14,77)—krivi sin B; B(15,77)—aritmetika; D(17,77)—krivi |AC|.",final:true,note:"diagnostika"},
    {txt:"Provjera: P≈117,2; |AC|≈13,98; h_B≈16,77 → C ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: P = (1/2)·|AB|·|BC|·sin(∠B); h_B = 2P/|AC| (visina iz B).",note:"postupak",final:true},{txt:"Intuicija: Izjednačavanjem dobivamo h_c = 2P/c.",note:"intuicija",final:true}
  ],
  ex:"Visina iz vrha: P = (1/2)·a·b·sin C daje površinu; h = 2P/c daje visinu.",
  why:["Formula: P = (1/2)·|AB|·|BC|·sin(∠B); h_B = 2P/|AC| (visina iz B).","Izjednačavanjem dobivamo h_c = 2P/c.","Česta greška (najčešće): A(14,77) ili B(15,77) — netočan izračun kosinusom ili površinom; kut B koriste krivo.","Provjera: P = (1/2)·20·30·sin23° ≈ 117,2; |AC| ≈ 13,98; h_B = 2·117,2/13,98 ≈ 16,77.","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:15,type:"mc",warn:"Pazi: ab i ba su dvoznamenkasti (10a + b i 10b + a); postavi K + L i usporedi sa zadanim zbrojem.",topic:"br",points:2,
  q:"Zadani su realni brojevi K = ab · 10¹⁴ i L = ba · 10¹³, pri čemu su a i b brojevi iz skupa {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. Zbroj brojeva K i L je 9,49 · 10¹⁵. Koliko je a − b? (Napomena: Oznaka ab označava dvoznamenkasti broj kojemu je a znamenka desetica, a b znamenka jedinica.)",
  opts:["4","5","6","7"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"ab = 10a + b, ba = 10b + a"},
    {txt:"K + L = (10a + b) · 10¹⁴ + (10b + a) · 10¹³ = 10¹³[10(10a + b) + (10b + a)]"},
    {txt:"= 10¹³ · (101a + 20b) = 9,49 · 10¹⁵"},
    {txt:"101a + 20b = 949"},
    {txt:"Jer je a, b ∈ {0, …, 9} i a ≠ 0 (vodeća znamenka): 101a ≤ 949 ⇒ a ≤ 9. Provjera a = 9: 909 + 20b = 949 ⇒ b = 2 ✓"},
    {txt:"a − b = 9 − 2 = 7"},
    {txt:"Analiza: A/C—krivo 101a+20b=949; B—aritmetička greška.",final:true,note:"diagnostika"},
    {txt:"Provjera: K=92·10¹⁴; L=29·10¹³; K+L=9,49·10¹⁵ ✓; a-b=7 → D ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: Dvoznamenkasti broj ab = 10a + b u dekadskoj notaciji.",note:"postupak",final:true},{txt:"Intuicija: Sustavno testiranje vrijednosti: 101a mora biti blizu 949, najvjerojatnije a = 9.",note:"intuicija",final:true}
  ],
  ex:"Oznaka ab je dvoznamenkasti broj = 10a+b; postavi sustav iz uvjeta K+L i riješite za a i b.",
  why:["Formula: Dvoznamenkasti broj ab = 10a + b u dekadskoj notaciji.","Sustavno testiranje vrijednosti: 101a mora biti blizu 949, najvjerojatnije a = 9.","Jednadžba 101a+20b=949: za a=9 → 909+20b=949 → b=2 → a-b=7.","Česta greška (najčešće): C(6) — pogrešna jednadžba (npr. 100a+20b); A(4) — krivo smanjeni 101a ili b.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:16,type:"sa",topic:"al",points:1,
  q:"Iz formule F = G · [FRAC:m · M|r²] izrazite m.",
  sol:{ans:"m = [FRAC:r²F|GM]",alt:["Fr²/(GM)","r²F/(GM)","r^2 F/(GM)"]},
  steps:[
    {txt:"Pomnožimo obje strane s r²: F · r² = G · m · M"},
    {txt:"Podijelimo s GM (uz G, M ≠ 0): m = [FRAC:r²F|GM]"},
    {txt:"Greška: dijele F·r² s G umjesto GM.",final:true,note:"diagnostika"},
    {txt:"Provjera: m=r²F/(GM) ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: m = [FRAC:r²F|GM] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Newtonov zakon gravitacije: F = GmM/r². Izražavanje jedne varijable — algebarska manipulacija.",note:"postupak",final:true},{txt:"Intuicija: Česta greška: dijele F·r² s G umjesto s GM.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  ex:"Postavi sustav: c+t=600 (stare cijene); 0,7c+0,5t=364 (nove cijene); riješite za c i t.",
  why:["Newtonov zakon gravitacije: F = GmM/r². Izražavanje jedne varijable — algebarska manipulacija.","Česta greška: dijele F·r² s G umjesto s GM.","Provjera: m=r²F/(GM) ✓","Provjera supstitucijom: uvrsti x = m = [FRAC:r²F|GM] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]
},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Mljekar od dnevne proizvodnje mlijeka [FRAC:3|4] proda, 24 % preradi u sir, a 3 litre mlijeka mu ostane. Kolika je dnevna proizvodnja mlijeka?",
  sol:{ans:"300 L",alt:["300","300 L","300 litara"]},
  steps:[
    {txt:"Ostatak = ukupno − prodano − prerađeno"},
    {txt:"3/4 = 0,75. Prerađeno: 24 % = 0,24. Ostatak: 1 − 0,75 − 0,24 = 0,01 (1 %)"},
    {txt:"Uvjet: 0,01 · x = 3 ⇒ x = 300 L"},
    {txt:"Česta greška: 3/4 od nepoznatog broja kao od 3/4 poznatog.",final:true,note:"diagnostika"},
    {txt:"Provjera: 300·0,01=3 L ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 300 L ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: 3/4 + 24/100 + ostatak = 1 (ukupna dnevna proizvodnja = 100%).",note:"postupak",final:true},{txt:"Intuicija: Česta greška: uzimaju 3/4 od broja koji traže, ne od x.",note:"intuicija",final:true}
  ],
  why:["Pravilo: 3/4 + 24/100 + ostatak = 1 (ukupna dnevna proizvodnja = 100%).","Česta greška: uzimaju 3/4 od broja koji traže, ne od x.","Provjera: 300·(3/4)+300·0,24+3=225+72+3=300 ✓","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]
},
  {id:18.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 18 (1. dio od 2): Procjenjuje se da radnik, nakon T sati uvježbavanja rada na stroju, može u jednome danu izraditi N proizvoda, gdje se N računa prema formuli N = 40(1 − 10^(-0,052T)).",
  q:"Koliko proizvoda dnevno može zgotoviti radnik nakon 5 sati uvježbavanja?",
  sol:{ans:"18 proizvoda",alt:["18","≈18"]},
  steps:[
    {txt:"Uvrštavamo T = 5: N = 40(1 − 10^(-0,26))"},
    {txt:"10^(-0,26) ≈ 0,5495"},
    {txt:"N ≈ 40 · (1 − 0,5495) = 40 · 0,4505 ≈ 18,02 ≈ 18",final:true},{txt:"Točan odgovor: 18 proizvoda ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: N(T) = 40(1 − 10^(−0,052T)); uvrsti T=5 direktno.",note:"postupak",final:true},{txt:"Intuicija: model eksponencijalnog rasta kapaciteta — asimptota je N=40 (maksimalni kapacitet), radnik nikad ne prelazi 40 komada.",note:"intuicija",final:true},{txt:"Provjera: N(5)=40(1−10^(−0,26))≈40·0,451≈18,0 ≈ 18 ✓; dim: broj komada (bezdimenzioni).",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:["Formula: N(T) = 40(1 − 10^(−0,052T)); uvrsti T=5 direktno.","Intuicija: model eksponencijalnog rasta kapaciteta — asimptota je N=40 (maksimalni kapacitet), radnik nikad ne prelazi 40 komada.","Česta greška: koristiti ln umjesto log₁₀; formula koristi potenciju od 10 (dekadski logaritam).","Provjera: N(5)=40(1−10^(−0,26))≈40·0,451≈18,0 ≈ 18 ✓; dim: broj komada (bezdimenzioni).","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:18.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 18 (2. dio od 2): N = 40(1 − 10^(-0,052T))",
  q:"Nakon koliko najmanje sati uvježbavanja radnik može izraditi 33 proizvoda dnevno?",
  sol:{ans:"15 sati",alt:["15","15 sati"]},
  steps:[
    {txt:"33 = 40(1 − 10^(-0,052T))"},
    {txt:"1 − 10^(-0,052T) = 33/40 = 0,825 ⇒ 10^(-0,052T) = 0,175"},
    {txt:"Logaritmiramo: -0,052T = log 0,175 ≈ -0,7570"},
    {txt:"T = 0,7570/0,052 ≈ 14,56"},
    {txt:"Najmanje cjelobrojno T ≥ 14,56 je T = 15 sati",final:true},{txt:"Točan odgovor: 15 sati ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: iz N=40(1−10^(−0,052T)) izoliramo T logaritmiranjem.",note:"postupak",final:true},{txt:"Intuicija: inverzija eksponenta — exprimiramo 10^(−0,052T) pa logaritmiramo; ključ je da 33/40 > 0 pa možemo dijeliti.",note:"intuicija",final:true},{txt:"Provjera: N(15)=40(1−10^(−0,78))≈33,4>33 ✓; N(14)=40(1−10^(−0,728))≈32,6<33 → min=15 ✓",note:"verifikacija",final:true}
  ],
  why:["Formula: iz N=40(1−10^(−0,052T)) izoliramo T logaritmiranjem.","Intuicija: inverzija eksponenta — exprimiramo 10^(−0,052T) pa logaritmiramo; ključ je da 33/40 > 0 pa možemo dijeliti.","Česta greška: zaokružiti T=14,56 prema dolje (T=14); 'najmanje' znači zaokruži GORE jer N(14)<33 ne zadovoljava uvjet.","Provjera: N(15)=40(1−10^(−0,78))≈33,4>33 ✓; N(14)=40(1−10^(−0,728))≈32,6<33 → min=15 ✓","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Riješite jednadžbu x − 6/x = 5.",
  sol:{ans:"x₁ = 6; x₂ = -1",alt:["6 i -1","6; -1","x₁ = 6, x₂ = -1"]},
  steps:[
    {txt:"Uvjet: x ≠ 0. Pomnožimo s x: x² − 6 = 5x"},
    {txt:"x² − 5x − 6 = 0 ⇒ (x − 6)(x + 1) = 0"},
    {txt:"x₁ = 6, x₂ = -1 (oba ≠ 0, pa su valjani)",final:true},{txt:"Točan odgovor: x₁ = 6; x₂ = -1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: racionalna jednadžba → pomnoži NZV (x), uvjet x≠0.",note:"postupak",final:true},{txt:"Intuicija: množenje s x uklanja nazivnik i pretvara jednadžbu u kvadratnu — klasičan pristup za x−k/x=c.",note:"intuicija",final:true},{txt:"Alt metoda: supstitucija u=x−6/x — ali direktno množenje je brže ovdje.",note:"verifikacija",final:true},{txt:"Provjera supstitucijom: uvrsti x = x₁ = 6; x₂ = -1 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: racionalna jednadžba → pomnoži NZV (x), uvjet x≠0.","Intuicija: množenje s x uklanja nazivnik i pretvara jednadžbu u kvadratnu — klasičan pristup za x−k/x=c.","Česta greška: zaboraviti provjeriti uvjet x≠0; oba rješenja x=6 i x=−1 zadovoljavaju uvjet.","Alt metoda: supstitucija u=x−6/x — ali direktno množenje je brže ovdje.","Provjera: x₁=6: 6−6/6=5 ✓; x₂=−1: −1−6/(−1)=−1+6=5 ✓","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Riješite jednadžbu √(2 − x) = 5.",
  sol:{ans:"x = -23",alt:["-23","x=-23"]},
  steps:[
    {txt:"Uvjet: 2 − x ≥ 0 ⇒ x ≤ 2"},
    {txt:"Kvadriramo obje strane: 2 − x = 25"},
    {txt:"−x = 23 ⇒ x = -23 (zadovoljava uvjet x ≤ 2)",final:true},{txt:"Točan odgovor: x = -23 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: kvadriranje obje strane jednadžbe oblika √A = B (gdje je B≥0) je ekvivalentna transformacija.",note:"postupak",final:true},{txt:"Intuicija: √(2−x)=5 ⇒ desna strana je 5>0, pa kvadriranje ne uvodi lažna rješenja — ali uvjet 2−x≥0 treba provjeriti.",note:"intuicija",final:true},{txt:"Provjera: √(2−(−23))=√25=5 ✓; uvjet x≤2 → −23≤2 ✓",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: kvadriranje obje strane jednadžbe oblika √A = B (gdje je B≥0) je ekvivalentna transformacija.","Intuicija: √(2−x)=5 ⇒ desna strana je 5>0, pa kvadriranje ne uvodi lažna rješenja — ali uvjet 2−x≥0 treba provjeriti.","Česta greška: kvadrirati bez provjere uvjeta — ovdje je jedino rješenje x=−23, a 2−(−23)=25≥0 ✓.","Provjera: √(2−(−23))=√25=5 ✓; uvjet x≤2 → −23≤2 ✓","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:20.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Izraz a² − 2ab − 3b² napišite kao umnožak dvaju binoma.",
  sol:{ans:"(a − 3b)(a + b)",alt:["(a - 3b)(a + b)","(a+b)(a-3b)"]},
  steps:[
    {txt:"Tražimo faktore (a + pb)(a + qb) = a² + (p + q)ab + pq·b²"},
    {txt:"p + q = -2 i pq = -3"},
    {txt:"Rješenje: p = -3, q = 1 (ili obrnuto)"},
    {txt:"a² − 2ab − 3b² = (a − 3b)(a + b)",final:true},{txt:"Točan odgovor: (a − 3b)(a + b) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: faktorizacija oblika (a+pb)(a+qb) traži p+q=−2, pq=−3.",note:"postupak",final:true},{txt:"Intuicija: tretiraj izraz kao kvadratni trinomial u varijabli a; diskriminanta daje faktore (a−3b)(a+b).",note:"intuicija",final:true},{txt:"Alt metoda: Viètove formule — tražimo p,q takve da p+q=−2 i pq=−3; probati: p=−3,q=1 → p+q=−2 ✓, pq=−3 ✓.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: faktorizacija oblika (a+pb)(a+qb) traži p+q=−2, pq=−3.","Intuicija: tretiraj izraz kao kvadratni trinomial u varijabli a; diskriminanta daje faktore (a−3b)(a+b).","Česta greška: predznak — (a−3b)(a+b) = a²+ab−3ab−3b² = a²−2ab−3b², ne a²+2ab−3b².","Alt metoda: Viètove formule — tražimo p,q takve da p+q=−2 i pq=−3; probati: p=−3,q=1 → p+q=−2 ✓, pq=−3 ✓.","Provjera: (a−3b)(a+b) = a²+ab−3ab−3b² = a²−2ab−3b² ✓","Provjera supstitucijom: uvrsti x = (a − 3b)(a + b) u L = D; rezultati se moraju podudarati."]
},
  {id:20.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Što je rezultat sređivanja izraza [FRAC:x³ − y³|x³ + x²y + xy²] + [FRAC:2y² − xy|xy] za sve x, y za koje je izraz definiran?",
  sol:{ans:"[FRAC:y|x]",alt:["y/x","[FRAC:y|x]"]},
  steps:[
    {txt:"Faktoriziramo prvi razlomak: x³ − y³ = (x − y)(x² + xy + y²); x³ + x²y + xy² = x(x² + xy + y²)"},
    {txt:"Prvi razlomak = (x − y)/x"},
    {txt:"Drugi razlomak: (2y² − xy)/(xy) = y(2y − x)/(xy) = (2y − x)/x"},
    {txt:"Zbroj: [FRAC:x − y|x] + [FRAC:2y − x|x] = [FRAC:x − y + 2y − x|x] = [FRAC:y|x]",final:true},{txt:"Točan odgovor: [FRAC:y|x] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: razlika kubova x³−y³=(x−y)(x²+xy+y²); skraćivanje zajedničkog faktora x²+xy+y².",note:"postupak",final:true},{txt:"Intuicija: imenilac prvog razlomka je x(x²+xy+y²) = x·(x²+xy+y²), te se s brojevnikom (x−y)(x²+xy+y²) skraćuje na (x−y)/x.",note:"intuicija",final:true},{txt:"Alt metoda: faktorizirati imenilac prvog razlomka drugačije — x³+x²y+xy²=x·(x+y)²? Provjeri: x(x+y)²=x(x²+2xy+y²)≠x²+xy+y². Dakle jedino ispravno je x(x²+xy+y²).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: razlika kubova x³−y³=(x−y)(x²+xy+y²); skraćivanje zajedničkog faktora x²+xy+y².","Intuicija: imenilac prvog razlomka je x(x²+xy+y²) = x·(x²+xy+y²), te se s brojevnikom (x−y)(x²+xy+y²) skraćuje na (x−y)/x.","Česta greška: ne skratiti zajednički faktor (x²+xy+y²) ili krivo faktorizirati x³+x²y+xy²=x(x²+xy+y²).","Alt metoda: faktorizirati imenilac prvog razlomka drugačije — x³+x²y+xy²=x·(x+y)²? Provjeri: x(x+y)²=x(x²+2xy+y²)≠x²+xy+y². Dakle jedino ispravno je x(x²+xy+y²).","Provjera: za x=2, y=1: (8−1)/(8+4+2)+(2−2)/2=7/14+0=1/2=y/x ✓","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:21.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Točka (2, 3) je točka maksimuma funkcije f(x) = ax² + bx. Odredite vrijednost koeficijenta a.",
  sol:{ans:"a = -3/4",alt:["-3/4","-3/4","-0,75"]},
  solFormula:{pre:"a = ", frac:[["−3","4"]]},
  steps:[
    {txt:"U maksimumu: f ′(2) = 0. f ′(x) = 2ax + b ⇒ 4a + b = 0 ⇒ b = -4a"},
    {txt:"Vrijednost funkcije: f(2) = 3 ⇒ 4a + 2b = 3"},
    {txt:"Uvrstimo b = -4a: 4a − 8a = 3 ⇒ -4a = 3 ⇒ a = -3/4",final:true},{txt:"Točan odgovor: a = -3/4 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: u točki lokalnog maksimuma f′(x₀)=0 (nužni uvjet za diferencijalnu funkciju).",note:"postupak",final:true},{txt:"Intuicija: dvije informacije o točki (2,3): (1) točka leži na grafu → f(2)=3; (2) maksimum → f′(2)=0. Sustav od 2 jednadžbe, 2 nepoznanice (a, b).",note:"intuicija",final:true},{txt:"Alt metoda: tjeme kvadratne funkcije ax²+bx je na x=−b/(2a)=2 → b=−4a; zatim f(2)=4a+2b=4a−8a=−4a=3 → a=−3/4.",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: u točki lokalnog maksimuma f′(x₀)=0 (nužni uvjet za diferencijalnu funkciju).","Intuicija: dvije informacije o točki (2,3): (1) točka leži na grafu → f(2)=3; (2) maksimum → f′(2)=0. Sustav od 2 jednadžbe, 2 nepoznanice (a, b).","Česta greška: koristiti samo jedan uvjet (samo f(2)=3) i dobiti previše slobode; oba uvjeta su neophodna.","Alt metoda: tjeme kvadratne funkcije ax²+bx je na x=−b/(2a)=2 → b=−4a; zatim f(2)=4a+2b=4a−8a=−4a=3 → a=−3/4.","Provjera: a=−3/4, b=3; f(x)=−3/4·x²+3x; f(2)=−3+6=3 ✓; f′(x)=−3/2·x+3; f′(2)=−3+3=0 ✓","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Riješite kvadratnu nejednadžbu -6x² + x + 1 ≥ 0 i rješenje zapišite u obliku intervala.",
  sol:{ans:"[-[FRAC:1|3], [FRAC:1|2]]",solFormula:{pre:"[-1/3, 1/2]"},alt:["[-1/3, 1/2]","[-1/3; 1/2]","x ∈ [-1/3, 1/2]"]},
  steps:[
    {txt:"Pomnožimo s -1 (obrće smjer): 6x² − x − 1 ≤ 0"},
    {txt:"Diskriminanta: D = 1 + 24 = 25, √D = 5"},
    {txt:"Nultočke: x = (1 ± 5)/12 ⇒ x₁ = -1/3, x₂ = 1/2"},
    {txt:"a = 6 > 0, parabola otvorena prema gore; ≤ 0 između nultočaka."},
    {txt:"x ∈ [-1/3, [FRAC:1|2]]",final:true},{txt:"Točan odgovor: [-[FRAC:1|3], [FRAC:1|2]] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna nejednadžba ax²+bx+c≥0 (a<0) je ispunjena IZVAN nultočaka (ili se množi s −1).",note:"postupak",final:true},{txt:"Intuicija: parabola s a<0 je otvorena prema dolje — ≥0 između (ili izvan) nultočaka. Množimo s −1 da dobijemo a>0 pa je ≤0 između nultočaka — standardni slučaj.",note:"intuicija",final:true},{txt:"Alt metoda: direktno analizirati −6x²+x+1≥0; nultočke x=−1/3 i x=1/2; parabola ide prema dolje (a=−6<0) → ≥0 između nultočaka.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: kvadratna nejednadžba ax²+bx+c≥0 (a<0) je ispunjena IZVAN nultočaka (ili se množi s −1).","Intuicija: parabola s a<0 je otvorena prema dolje — ≥0 između (ili izvan) nultočaka. Množimo s −1 da dobijemo a>0 pa je ≤0 između nultočaka — standardni slučaj.","Česta greška: množenje s −1 ne obrće smjer nejednakosti — OBRNUTO, množenje s negativnim brojem MIJENJA smjer ≥ u ≤.","Alt metoda: direktno analizirati −6x²+x+1≥0; nultočke x=−1/3 i x=1/2; parabola ide prema dolje (a=−6<0) → ≥0 između nultočaka.","Provjera: x=0∈[−1/3,1/2]: −6·0+0+1=1>0 ✓; x=1∉[−1/3,1/2]: −6+1+1=−4<0 ✓ (izvan intervala)","Provjera supstitucijom: uvrsti x = [-[FRAC:1|3], [FRAC:1|2]] u L = D; rezultati se moraju podudarati."]
},
  {id:22.1,type:"sa",topic:"br",points:1,img:true,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Broj z prikazan je u kompleksnoj ravnini. Iz slike: modul |z| = 4, argument = 120°. Zapišite ga ili u trigonometrijskome ili u standardnome obliku.",
  sol:{ans:"z = 4(cos 120° + i sin 120°) = -2 + 2i√3",alt:["4(cos120°+isin120°)","-2+2i√3","-2 + 2i√3"]},
  steps:[
    {txt:"Trigonometrijski: z = 4(cos 120° + i · sin 120°)"},
    {txt:"cos 120° = -1/2; sin 120° = √3/2"},
    {txt:"Standardni: z = 4 · (-1/2) + 4 · i · ([FRAC:√3|2]) = -2 + 2i√3",final:true},{txt:"Točan odgovor: z = 4(cos 120° + i sin 120°) = -2 + 2i√3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: trigonometrijski oblik z=r(cosφ+i sinφ) gdje r=|z| (modul) i φ=arg(z) (argument).",note:"postupak",final:true},{txt:"Intuicija: iz dijagrama čitamo: r=4 (dužina od ishodišta do točke), φ=120° (kut s pozitivnom x-osi). Standardni oblik slijedi iz trig. vrijednosti.",note:"intuicija",final:true},{txt:"Alt metoda: iz koordinata točke z u kompleksnoj ravnini: Re(z)=r·cosφ=4·(−1/2)=−2; Im(z)=r·sinφ=4·√3/2=2√3.",note:"verifikacija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: trigonometrijski oblik z=r(cosφ+i sinφ) gdje r=|z| (modul) i φ=arg(z) (argument).","Intuicija: iz dijagrama čitamo: r=4 (dužina od ishodišta do točke), φ=120° (kut s pozitivnom x-osi). Standardni oblik slijedi iz trig. vrijednosti.","Česta greška: zamjena cos i sin, ili krivi kut — φ=120° je u 2. kvadrantu: cos120°=−1/2 (negativan!), sin120°=√3/2 (pozitivan).","Alt metoda: iz koordinata točke z u kompleksnoj ravnini: Re(z)=r·cosφ=4·(−1/2)=−2; Im(z)=r·sinφ=4·√3/2=2√3.","Provjera: |z|=√(4+12)=√16=4 ✓; arg=arctan(2√3/(−2))=arctan(−√3)=120° (2. kvadrant) ✓","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:22.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Zapišite broj z = 3i³³ − 2i²³ + 4i¹⁰ u standardnom obliku (z = x + yi, x, y ∈ ℝ).",
  sol:{ans:"z = -4 + 5i",alt:["-4 + 5i","-4+5i"]},
  steps:[
    {txt:"Potencije od i su periodične s periodom 4: i¹ = i, i² = -1, i³ = −i, i⁴ = 1"},
    {txt:"i³³ = i^(33 mod 4) = i¹ = i"},
    {txt:"i²³ = i^(23 mod 4) = i³ = −i"},
    {txt:"i¹⁰ = i^(10 mod 4) = i² = -1"},
    {txt:"z = 3i − 2(−i) + 4(-1) = 3i + 2i − 4 = -4 + 5i",final:true},{txt:"Točan odgovor: z = -4 + 5i ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: ciklus i¹=i, i²=−1, i³=−i, i⁴=1; za iⁿ izračunaj n mod 4.",note:"postupak",final:true},{txt:"Intuicija: potencije od i se ponavljaju svakih 4 koraka — to je jedino što trebamo znati za ovaj tip zadatka. Nikad ne tražimo iⁿ direktnim računanjem.",note:"intuicija",final:true},{txt:"Alt metoda: pisati potencije: i³³=(i⁴)⁸·i=1·i=i; i²³=(i⁴)⁵·i³=1·(−i)=−i; i¹⁰=(i⁴)²·i²=1·(−1)=−1.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: ciklus i¹=i, i²=−1, i³=−i, i⁴=1; za iⁿ izračunaj n mod 4.","Intuicija: potencije od i se ponavljaju svakih 4 koraka — to je jedino što trebamo znati za ovaj tip zadatka. Nikad ne tražimo iⁿ direktnim računanjem.","Česta greška: pogrješno računanje ostatka: 33÷4=8 ostatak 1 (ne 0!); 23÷4=5 ostatak 3; 10÷4=2 ostatak 2.","Alt metoda: pisati potencije: i³³=(i⁴)⁸·i=1·i=i; i²³=(i⁴)⁵·i³=1·(−i)=−i; i¹⁰=(i⁴)²·i²=1·(−1)=−1.","Provjera: z=3i−2(−i)+4(−1)=3i+2i−4=−4+5i ✓; standardni oblik z=x+yi gdje x=−4, y=5 ✓","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:23.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"U trokutu KLM pravi kut je u vrhu L. Duljina stranice KM je 5 cm, a mjera kuta u vrhu M je 27°. Kolika je duljina najkraće stranice toga trokuta?",
  sol:{ans:"|KL| ≈ 2,27 cm",alt:["2,27","2,27","≈2,27 cm"]},
  steps:[
    {txt:"Trokut je pravokutan u L; KM je hipotenuza (nasuprot pravom kutu)."},
    {txt:"Kutovi: ∠L = 90°, ∠M = 27°, ∠K = 63°."},
    {txt:"Najmanji kut (27°) je u M, pa mu je nasuprot najkraća stranica: KL."},
    {txt:"|KL| = |KM| · sin ∠M = 5 · sin 27° ≈ 5 · 0,4540 ≈ 2,27 cm",final:true},{txt:"Točan odgovor: |KL| ≈ 2,27 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu kateta=hipotenuza·sin(nasuprotnog kuta).",note:"postupak",final:true},{txt:"Intuicija: ∠L=90° (pravi kut), KM je hipotenuza (nasuprot pravog kuta). Najmanji kut je ∠M=27°, njemu nasuprot leži najkraća kateta KL.",note:"intuicija",final:true},{txt:"Alt metoda: KL=LM·tan27° (koristiti kut M i drugu katetu LM=KM·cos27°≈4,46 cm, pa KL=4,46·tan27°≈2,27 cm) — isti rezultat.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: u pravokutnom trokutu kateta=hipotenuza·sin(nasuprotnog kuta).","Intuicija: ∠L=90° (pravi kut), KM je hipotenuza (nasuprot pravog kuta). Najmanji kut je ∠M=27°, njemu nasuprot leži najkraća kateta KL.","Česta greška: koristiti KL=KM·cos27° (to bi bila kateta nasuprot 63°, tj. LM, a ne KL).","Alt metoda: KL=LM·tan27° (koristiti kut M i drugu katetu LM=KM·cos27°≈4,46 cm, pa KL=4,46·tan27°≈2,27 cm) — isti rezultat.","Provjera: sin27°≈0,454; KL≈5·0,454≈2,27 cm ✓; KL²+LM²=KM²: 2,27²+4,46²≈5,15+19,9≈25,0=5² ✓","Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi."]
},
  {id:23.2,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Na skici je prikazan paralelogram ABCD kojemu je stranica AB duljine 5 cm, a visina na tu stranicu 8 cm. Točka S je sjecište njegovih dijagonala, a točka T polovište dužine BS. Izračunajte površinu trokuta ABT.",
  sol:{ans:"P(ABT) = 5 cm²",alt:["5","5 cm²"]},
  steps:[
    {txt:"Površina paralelograma: P(ABCD) = 5 · 8 = 40 cm²"},
    {txt:"Dijagonala BD dijeli paralelogram na dva sukladna trokuta: P(ABD) = 20 cm²"},
    {txt:"Sjecište dijagonala S je polovište svake dijagonale: S je polovište BD"},
    {txt:"Trokut ABS i ABD imaju istu osnovicu AB; visina ABS = polovina visine ABD = 4 cm"},
    {txt:"P(ABS) = 5 · 4/2 = 10 cm² (također P(ABS) = P(ABD)/2)"},
    {txt:"T je polovište BS ⇒ trokut ABT ima istu osnovicu AB, ali visina = polovina visine ABS = 2 cm"},
    {txt:"P(ABT) = 5 · [FRAC:2|2] = 5 cm²",final:true},{txt:"Točan odgovor: P(ABT) = 5 cm² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: trokut s istom osnovicom i visinom ima iste površine — T je polovište BS, pa visina trokuta ABT = 1/2 visine trokuta ABS.",note:"postupak",final:true},{txt:"Intuicija: S dijeli paralelogram na 4 sukladna trokuta svaki s površinom 1/4·P(ABCD). T halvira BS → trokut ABT je 1/2 od trokuta ABS = 1/8·P(ABCD) = 1/8·40 = 5 cm².",note:"intuicija",final:true},{txt:"Alt metoda: koordinatna metoda — A=(0,0), B=(5,0), S=(2,5;4), T=(3,75;2); P=|½(xA(yB−yT)+xB(yT−yA)+xT(yA−yB))|=5 cm².",note:"verifikacija",final:true}
  ],
  why:["Pravilo: trokut s istom osnovicom i visinom ima iste površine — T je polovište BS, pa visina trokuta ABT = 1/2 visine trokuta ABS.","Intuicija: S dijeli paralelogram na 4 sukladna trokuta svaki s površinom 1/4·P(ABCD). T halvira BS → trokut ABT je 1/2 od trokuta ABS = 1/8·P(ABCD) = 1/8·40 = 5 cm².","Česta greška: uzeti visinu trokuta ABT kao punu visinu paralelograma (8 cm) umjesto 1/4 visine = 2 cm.","Alt metoda: koordinatna metoda — A=(0,0), B=(5,0), S=(2,5;4), T=(3,75;2); P=|½(xA(yB−yT)+xB(yT−yA)+xT(yA−yB))|=5 cm².","Provjera: P(ABCD)=5·8=40; P(ABT)=1/8·40=5 cm² ✓; ili P(ABT)=(1/2)·|AB|·h_T=(1/2)·5·2=5 ✓","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°."]
},
  {id:24.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliki je obujam (volumen) kuglice polumjera 2 cm?",
  sol:{ans:"V = [FRAC:32π|3] cm³ ≈ 33,51 cm³",alt:["32π/3","32π/3 cm³","≈33,51"]},
  steps:[
    {txt:"Formula obujma kugle: V = (4/3)πr³"},
    {txt:"V = (4/3)π · 2³ = (4/3)π · 8 = 32π/3 cm³"},
    {txt:"V ≈ 33,51 cm³",final:true},{txt:"Točan odgovor: V = [FRAC:32π|3] cm³ ≈ 33,51 cm³ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: V=(4/3)πr³; za r=2: V=(4/3)π·8=32π/3.",note:"postupak",final:true},{txt:"Intuicija: formula za volumen kugle je analogna formuli za opseg kruga (πr²) — sjetite se: sfera≈'krug u 3D'; V=4/3·π·r³ s faktorom 4/3 koji dolazi iz integracije.",note:"intuicija",final:true},{txt:"Provjera: V=32π/3≈33,51 cm³; dimenzija: cm³ ✓; za r=1 bi bilo V=4π/3≈4,19 cm³ (poznata referentna vrijednost) ✓",note:"verifikacija",final:true},{txt:"Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.",note:"verifikacija",final:true}
  ],
  why:["Formula: V=(4/3)πr³; za r=2: V=(4/3)π·8=32π/3.","Intuicija: formula za volumen kugle je analogna formuli za opseg kruga (πr²) — sjetite se: sfera≈'krug u 3D'; V=4/3·π·r³ s faktorom 4/3 koji dolazi iz integracije.","Česta greška: koristiti V=4πr² (to je površina kugle, ne volumen!) ili zaboraviti faktor 4/3.","Provjera: V=32π/3≈33,51 cm³; dimenzija: cm³ ✓; za r=1 bi bilo V=4π/3≈4,19 cm³ (poznata referentna vrijednost) ✓","Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer."]
},
  {id:24.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Koliki će biti polumjer kugle ako se 12 željeznih kuglica polumjera 2 cm taljenjem preoblikuje u tu kuglu?",
  sol:{ans:"R = ∛96 ≈ 4,58 cm",alt:["∛96","4,58","∛(96) cm"]},
  steps:[
    {txt:"Očuvanje obujma: 12 · V_kuglica = V_kugla"},
    {txt:"12 · (4/3)π · 2³ = (4/3)π · R³"},
    {txt:"12 · 8 = R³ ⇒ R³ = 96"},
    {txt:"R = ∛96 ≈ 4,579 ≈ 4,58 cm",final:true},{txt:"Točan odgovor: R = ∛96 ≈ 4,58 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: taljenje čuva volumen — 12·V_kuglice = V_kugla.",note:"postupak",final:true},{txt:"Intuicija: 12 kuglica r=2 taljenjem preoblikuje se u jednu veliku kuglu. Ukupni materijal (volumen) se čuva, samo oblik se mijenja.",note:"intuicija",final:true},{txt:"Alt metoda: R³=12·r³=12·8=96; log R=(1/3)·log96≈(1/3)·1,9823≈0,6608; R≈10^(0,6608)≈4,58 cm.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: taljenje čuva volumen — 12·V_kuglice = V_kugla.","Intuicija: 12 kuglica r=2 taljenjem preoblikuje se u jednu veliku kuglu. Ukupni materijal (volumen) se čuva, samo oblik se mijenja.","Česta greška: R=∛(12·8)=∛96 ≠ 12·2 i ≠ √(12·4). Nije R³=12·2³=96 direktno bez računanja, pa je R=∛96≈4,58 (ne zaokružiti na 4 ili 5).","Alt metoda: R³=12·r³=12·8=96; log R=(1/3)·log96≈(1/3)·1,9823≈0,6608; R≈10^(0,6608)≈4,58 cm.","Provjera: V_kugla=(4/3)π·(∛96)³=(4/3)π·96=128π; 12·V_kuglice=12·(4/3)π·8=128π ✓","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Odredite pozitivan broj a tako da brojevi 72, a, 162 budu tri uzastopna člana geometrijskog niza.",
  sol:{ans:"a = 108",alt:["108","a=108"]},
  steps:[
    {txt:"U geometrijskom nizu: a² = a_prethodni · a_sljedeći (geometrijska sredina)"},
    {txt:"a² = 72 · 162 = 11 664"},
    {txt:"a = √11 664 = 108 (pozitivan broj)",final:true},{txt:"Točan odgovor: a = 108 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: u geometrijskom nizu a², a₁, a₃ uzastopni: a²=a₁·a₃ (geometrijska sredina).",note:"postupak",final:true},{txt:"Intuicija: u geometrijskom nizu svaki član je geometrijska sredina susjeda — to je definicija. Stoga a=√(72·162).",note:"intuicija",final:true},{txt:"Alt metoda: iz uvjeta a/72=162/a → a²=72·162=11664 → a=108; ili faktorizirati 72=8·9 i 162=2·81 → a=√(8·9·2·81)=√11664=108.",note:"verifikacija",final:true},{txt:"Provjera supstitucijom: uvrsti x = a = 108 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: u geometrijskom nizu a², a₁, a₃ uzastopni: a²=a₁·a₃ (geometrijska sredina).","Intuicija: u geometrijskom nizu svaki član je geometrijska sredina susjeda — to je definicija. Stoga a=√(72·162).","Česta greška: koristiti aritmetičku sredinu a=(72+162)/2=117 umjesto geometrijske; ili uzeti a=√(72+162) što je potpuno pogrješno.","Alt metoda: iz uvjeta a/72=162/a → a²=72·162=11664 → a=108; ili faktorizirati 72=8·9 i 162=2·81 → a=√(8·9·2·81)=√11664=108.","Provjera: 108/72=3/2; 162/108=3/2 → q=3/2 ✓; a=108>0 ✓ (zadovoljava uvjet pozitivnosti)","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:25.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Koliki je zbroj svih prirodnih brojeva manjih od 1 000 koji su djeljivi s 13?",
  sol:{ans:"S = 38 038",alt:["38038","38 038","S = 38 038"]},
  steps:[
    {txt:"Najveći broj < 1 000 djeljiv s 13: 988 = 13 · 76"},
    {txt:"Aritmetički niz: a₁ = 13, aₙ = 988, d = 13"},
    {txt:"Broj članova: n = (988 − 13)/13 + 1 = 76"},
    {txt:"Zbroj: Sₙ = n[FRAC:a₁ + aₙ|2] = 76 · [FRAC:13 + 988|2] = 76 · 1 [FRAC:001|2] = 38 · 1 001 = 38 038",final:true},{txt:"Točan odgovor: S = 38 038 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: višekratnici 13 manji od 1000 tvore aritmetički niz: 13, 26, 39, …, 988.",note:"postupak",final:true},{txt:"Intuicija: identificiraj niz (a₁=13, d=13, aₙ=988), izračunaj n=76, pa primijeni formulu S=n(a₁+aₙ)/2.",note:"intuicija",final:true},{txt:"Alt metoda: S=13·(1+2+3+…+76)=13·76·77/2=13·2926=38038; koristimo formulu za zbroj prvih n prirodnih brojeva.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: višekratnici 13 manji od 1000 tvore aritmetički niz: 13, 26, 39, …, 988.","Intuicija: identificiraj niz (a₁=13, d=13, aₙ=988), izračunaj n=76, pa primijeni formulu S=n(a₁+aₙ)/2.","Česta greška: uzeti aₙ=1000 (nije djeljivo s 13) ili n=77 (previše članova); provjeri: 13·76=988<1000 ✓, 13·77=1001>1000 ✓.","Alt metoda: S=13·(1+2+3+…+76)=13·76·77/2=13·2926=38038; koristimo formulu za zbroj prvih n prirodnih brojeva.","Provjera: S=76·(13+988)/2=76·1001/2=76·500,5=38038 ✓","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:25.3,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Za koje sve vrijednosti pozitivnoga realnog broja x geometrijski red x + [FRAC:1|2]x² + [FRAC:1|4]x³ + [FRAC:1|8]x⁴ + … ima konačan zbroj?",
  sol:{ans:"0 < x < 2",alt:["x ∈ ⟨0, 2⟩","(0, 2)","0<x<2"]},
  steps:[
    {txt:"Član niza: aₙ = x · (x/2)^(n-1). Prvi član a₁ = x, kvocijent q = x/2."},
    {txt:"Geometrijski red ima konačan zbroj ako i samo ako je |q| < 1."},
    {txt:"|x/2| < 1 ⇒ |x| < 2 ⇒ -2 < x < 2"},
    {txt:"Uvjet x > 0: 0 < x < 2",final:true},{txt:"Točan odgovor: 0 < x < 2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: beskonačni geometrijski red S=Σa₁qⁿ konvergira ⟺ |q|<1; zbroj S=a₁/(1−q).",note:"postupak",final:true},{txt:"Intuicija: svaki sljedeći član je q=x/2 puta manji. Ako je x<2, svaki korak dodaje sve manje — niz se 'skuplja' prema konačnoj sumi.",note:"intuicija",final:true},{txt:"Alt metoda: direktno: q=x/2; |q|<1 ⟺ |x|<2 ⟺ −2<x<2; s uvjetom x>0 → 0<x<2.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: beskonačni geometrijski red S=Σa₁qⁿ konvergira ⟺ |q|<1; zbroj S=a₁/(1−q).","Intuicija: svaki sljedeći član je q=x/2 puta manji. Ako je x<2, svaki korak dodaje sve manje — niz se 'skuplja' prema konačnoj sumi.","Česta greška: uzeti x=2 kao rješenje (|q|=1, red divergira) ili zanemariti uvjet x>0 (zadan u zadatku).","Alt metoda: direktno: q=x/2; |q|<1 ⟺ |x|<2 ⟺ −2<x<2; s uvjetom x>0 → 0<x<2.","Provjera: x=1 → q=0,5 → S=1/(1−0,5)=2 (konačan ✓); x=2 → q=1 → S divergira ✓; x=3 → q=1,5>1 → divergira ✓","Provjera supstitucijom: uvrsti x = 0 < x < 2 u L = D; rezultati se moraju podudarati."]
},
  {id:26,type:"sa",topic:"al",points:2,
  q:"Prije sniženja cipele i torba koštale su ukupno 600 kn. Nakon što su cipele snižene 30 %, a torba 50 %, ukupna cijena bila je 364 kn. Kolika je bila njihova pojedinačna cijena prije sniženja?",
  sol:{ans:"Cipele 320 kn, torba 280 kn",alt:["320 i 280","320; 280"]},
  steps:[
    {txt:"Neka je c cijena cipela, t cijena torbe prije sniženja."},
    {txt:"Sustav: c + t = 600 i 0,7c + 0,5t = 364"},
    {txt:"Iz prve jednadžbe: t = 600 − c"},
    {txt:"0,7c + 0,5(600 − c) = 364 ⇒ 0,7c + 300 − 0,5c = 364 ⇒ 0,2c = 64"},
    {txt:"c = 320 kn, t = 600 − 320 = 280 kn"},
    {txt:"Greška: postoci na ukupnu cijenu 600 umjesto na svaku.",final:true,note:"diagnostika"},
    {txt:"Provjera: 0,7·320+0,5·280=364 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: Cipele 320 kn, torba 280 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: sniženje p% → nova cijena = (1−p/100)·stara; cipele: 0,7c; torba: 0,5t.",note:"postupak",final:true},{txt:"Intuicija: dvije nepoznanice (c, t) → trebamo dva uvjeta: ukupna stara cijena + ukupna nova cijena. Supstitucijom eliminiramo jednu nepoznanicu.",note:"intuicija",final:true}
  ],
  ex:"Postavi sustav: c+t=600 i 0,7c+0,5t=364; riješite za c i t.",
  why:["Pravilo: sniženje p% → nova cijena = (1−p/100)·stara; cipele: 0,7c; torba: 0,5t.","Intuicija: dvije nepoznanice (c, t) → trebamo dva uvjeta: ukupna stara cijena + ukupna nova cijena. Supstitucijom eliminiramo jednu nepoznanicu.","Česta greška: snižavati ukupnih 600 kn (ne svaku cijenu posebno): 0,7·600=420≠364; ili uzeti 30%+50% od ukupne cijene.","Alt metoda: eliminacija — iz c+t=600 i 0,7c+0,5t=364; oduzmi 0,5·(c+t)=300 od druge: 0,2c=64 → c=320.","Provjera: c=320, t=280; 320+280=600 ✓; 0,7·320+0,5·280=224+140=364 ✓","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:27.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 27 (1. dio od 2): Zadana je funkcija f(x) = 2 + sin(3x).",
  q:"Odredite sve realne brojeve x za koje je f(x) = 3.",
  sol:{ans:"x = [FRAC:π|6] + [FRAC:2kπ|3], k ∈ ℤ",alt:["π/6 + 2kπ/3","x = π/6 + 2kπ/3"]},
  steps:[
    {txt:"2 + sin(3x) = 3 ⇒ sin(3x) = 1"},
    {txt:"sin u = 1 ⇔ u = π/2 + 2kπ, k ∈ ℤ"},
    {txt:"3x = π/2 + 2kπ"},
    {txt:"x = [FRAC:π|6] + [FRAC:2kπ|3], k ∈ ℤ",final:true},{txt:"Točan odgovor: x = [FRAC:π|6] + [FRAC:2kπ|3], k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: sin u=1 ⟺ u=π/2+2kπ, k∈ℤ (jedino rješenje u jednom periodu).",note:"postupak",final:true},{txt:"Intuicija: 2+sin(3x)=3 → sin(3x)=1. Sinus dostiže vrijednost 1 samo u vrhu sinusoide; rješenje 3x=π/2+2kπ dijeli se s 3.",note:"intuicija",final:true},{txt:"Alt metoda: grafički — presjecišta grafa f(x)=2+sin(3x) s horizontalom y=3 daju ista rješenja.",note:"verifikacija",final:true}
  ],
  ex:"Polumjer kružnice iz udaljenosti centra od tangente; četverokut omeđen t₁, t₂, osi y i promjerom.",
  why:["Pravilo: sin u=1 ⟺ u=π/2+2kπ, k∈ℤ (jedino rješenje u jednom periodu).","Intuicija: 2+sin(3x)=3 → sin(3x)=1. Sinus dostiže vrijednost 1 samo u vrhu sinusoide; rješenje 3x=π/2+2kπ dijeli se s 3.","Česta greška: zaboraviti k∈ℤ (ima beskonačno rješenja); ili pisati x=π/6+kπ (krivi period — period funkcije f je 2π/3, ne π).","Alt metoda: grafički — presjecišta grafa f(x)=2+sin(3x) s horizontalom y=3 daju ista rješenja.","Provjera: x=π/6: sin(3·π/6)=sin(π/2)=1; f(π/6)=2+1=3 ✓; x=π/6+2π/3=5π/6: sin(5π/2)=1; f(5π/6)=3 ✓","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant."]
},
  {id:27.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 27 (2. dio od 2): f(x) = 2 + sin(3x)",
  q:"Odredite derivaciju funkcije f.",
  sol:{ans:"f ′(x) = 3 cos(3x)",alt:["3cos(3x)","3 cos(3x)"]},
  steps:[
    {txt:"Derivacija konstante je 0, pa derivacija od 2 daje 0."},
    {txt:"Lančano pravilo: (sin u)′ = cos u · u′, gdje u = 3x, u′ = 3"},
    {txt:"f ′(x) = 0 + cos(3x) · 3 = 3 cos(3x)",final:true},{txt:"Točan odgovor: f ′(x) = 3 cos(3x) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: lančano pravilo (f∘g)′=f′(g)·g′; za h(x)=sin(3x): h′(x)=cos(3x)·3.",note:"postupak",final:true},{txt:"Intuicija: derivacija konstantnog zbroja: (2+sin(3x))′=0+(sin(3x))′. Unutarnja funkcija g(x)=3x ima derivaciju g′=3 — tu se studenti najčešće spotiču.",note:"intuicija",final:true},{txt:"Alt metoda: razvijanje sin(3x)=sin(2x+x)=... (komplicirano); lančano pravilo je jedini praktični put.",note:"verifikacija",final:true},{txt:"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: lančano pravilo (f∘g)′=f′(g)·g′; za h(x)=sin(3x): h′(x)=cos(3x)·3.","Intuicija: derivacija konstantnog zbroja: (2+sin(3x))′=0+(sin(3x))′. Unutarnja funkcija g(x)=3x ima derivaciju g′=3 — tu se studenti najčešće spotiču.","Česta greška: pisati f′(x)=cos(3x) bez faktora 3 (zaboraviti unutarnju derivaciju g′=3).","Alt metoda: razvijanje sin(3x)=sin(2x+x)=... (komplicirano); lančano pravilo je jedini praktični put.","Provjera: f′(x)=3cos(3x); za x=0: f′(0)=3cos(0)=3·1=3; za x=π/6: f′(π/6)=3cos(π/2)=0 (tjeme max — derivacija je 0 ✓)","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
},
  {id:28.1,type:"proof",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (1. dio od 3):",
  q:"U koordinatnome sustavu nacrtajte pravac određen jednadžbom x/5 + y/2 = 1.",
  sol:{ex:"Pravac koji prolazi točkama (5, 0) i (0, 2).",svgFn:()=>e(SvgGrid28_2013Aj,null)},
  steps:[
    {txt:"Intercept oblik: x/a + y/b = 1, gdje su a i b odsječci na osima."},
    {txt:"Ovdje a = 5, b = 2."},
    {txt:"Sjecište s x-osi: (5, 0). Sjecište s y-osi: (0, 2)."},
    {txt:"Nacrtati pravac kroz te dvije točke.",final:true}
  ,{txt:"Provjera: (5,0): 5/5+0/2=1 ✓; (0,2): 0/5+2/2=1 ✓; nagib=−2/5 odgovara koeficijentu uz x u y=−[FRAC:2|5]x+2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: intercept oblik x/a+y/b=1 daje sjecišta (a,0) i (0,b) direktno.",note:"postupak",final:true},{txt:"Intuicija: za crtanje pravca dovoljne su DVIJE točke; intercept oblik ih daje trivijalno: postavi x=0 → y=2; postavi y=0 → x=5.",note:"intuicija",final:true}],
  why:["Pravilo: intercept oblik x/a+y/b=1 daje sjecišta (a,0) i (0,b) direktno.","Intuicija: za crtanje pravca dovoljne su DVIJE točke; intercept oblik ih daje trivijalno: postavi x=0 → y=2; postavi y=0 → x=5.","Česta greška: nacrtati samo jednu točku ili nacrtati krivu parabolu umjesto pravca (ovo je linearna jednadžba!).","Alt metoda: prepiši u eksplicitni oblik y=−(2/5)x+2 (nagib −2/5, odsječak 2); ili u standardni 2x+5y=10.","Provjera: (5,0): 5/5+0/2=1 ✓; (0,2): 0/5+2/2=1 ✓; pravac prolazi kroz obje točke, nagib=(2−0)/(0−5)=−2/5 ✓","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:28.2,type:"sa",topic:"kon",points:1,img:true,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Na slici je prikazana krivulja drugoga reda i istaknute su neke njezine točke s cjelobrojnim koordinatama. Odredite jednadžbu te krivulje.",
  sol:{ans:"[FRAC:x²|4] − [FRAC:y²|3] = 1",alt:["x²/4-y²/3=1","x^2/4 - y^2/3 = 1"]},
  steps:[
    {txt:"Iz slike: otvorene krivulje — hiperbola s tjemenima na x-osi u (±2, 0)."},
    {txt:"Standardni oblik: x²/a² − y²/b² = 1. Ovdje a = 2, pa a² = 4."},
    {txt:"Na slici su istaknute točke npr. (4, 3) i (-4, 3) koje pripadaju hiperboli."},
    {txt:"Uvrštavanje (4, 3): 16/4 − 9/b² = 1 ⇒ 3 = 9/b² ⇒ b² = 3"},
    {txt:"Jednadžba: [FRAC:x²|4] − [FRAC:y²|3] = 1",final:true},{txt:"Točan odgovor: [FRAC:x²|4] − [FRAC:y²|3] = 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: hiperbola s tjemenima (±a,0): x²/a²−y²/b²=1; s tjemenima (0,±b): y²/b²−x²/a²=1.",note:"postupak",final:true},{txt:"Intuicija: iz slike prepoznajemo hiperbolu otvorenu LIJEVO-DESNO (grane idu od osi x) → tjemena na x-osi → x²/a²−y²/b²=1.",note:"intuicija",final:true},{txt:"Alt metoda: uvrsti dvije poznate točke iz slike u standardni oblik i riješiti za a² i b² istovremeno.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: hiperbola s tjemenima (±a,0): x²/a²−y²/b²=1; s tjemenima (0,±b): y²/b²−x²/a²=1.","Intuicija: iz slike prepoznajemo hiperbolu otvorenu LIJEVO-DESNO (grane idu od osi x) → tjemena na x-osi → x²/a²−y²/b²=1.","Česta greška: zamijeniti hiperbolu s elipsom (elipsa: +, hiperbola: −); ili krivo odrediti koja os je transverzalna iz slike.","Alt metoda: uvrsti dvije poznate točke iz slike u standardni oblik i riješiti za a² i b² istovremeno.","Provjera: tjeme (2,0): 4/4−0/3=1 ✓; točka (4,3): 16/4−9/3=4−3=1 ✓; točka (4,−3): ista provjera ✓","Provjera kompleksnog broja: realni dio + imaginarni dio (i² = −1)."]
},
  {id:28.3,type:"sa",topic:"kon",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Odredite jednadžbu elipse kojoj je jedno tjeme u točki B(0, 2), a jedan fokus u točki F(√21, 0).",
  sol:{ans:"[FRAC:x²|25] + [FRAC:y²|4] = 1",alt:["x²/25+y²/4=1","x^2/25 + y^2/4 = 1"]},
  steps:[
    {txt:"Tjeme na y-osi B(0, 2) ⇒ manja poluos b = 2 (tjeme nije najdalje od središta)"},
    {txt:"Fokus na x-osi F(√21, 0) ⇒ velika poluos duž x-osi; c = √21"},
    {txt:"Za elipsu s a > b: a² = b² + c² = 4 + 21 = 25 ⇒ a = 5"},
    {txt:"Jednadžba: [FRAC:x²|25] + [FRAC:y²|4] = 1",final:true},{txt:"Točan odgovor: [FRAC:x²|25] + [FRAC:y²|4] = 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: elipsa x²/a²+y²/b²=1; veza a²=b²+c² gdje je c udaljenost fokusa od središta.",note:"postupak",final:true},{txt:"Intuicija: tjeme B(0,2) je na y-osi → b=2 (manja poluos); fokus F(√21,0) je na x-osi → c=√21, a osi su: velika poluos duž x-osi (a>b).",note:"intuicija",final:true},{txt:"Alt metoda: iz definicije elipse — zbroj udaljenosti od oba fokusa je konstantan 2a; fokusi su (±√21,0), a tjeme je (0,2): 2·√(21+4)=2·5=10=2a → a=5.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: elipsa x²/a²+y²/b²=1; veza a²=b²+c² gdje je c udaljenost fokusa od središta.","Intuicija: tjeme B(0,2) je na y-osi → b=2 (manja poluos); fokus F(√21,0) je na x-osi → c=√21, a osi su: velika poluos duž x-osi (a>b).","Česta greška: uzeti b=√21 i c=2 (zamijeniti fokus i tjeme); ili pisati x²/a²−y²/b²=1 (to je hiperbola, ne elipsa!).","Alt metoda: iz definicije elipse — zbroj udaljenosti od oba fokusa je konstantan 2a; fokusi su (±√21,0), a tjeme je (0,2): 2·√(21+4)=2·5=10=2a → a=5.","Provjera: a²=b²+c²=4+21=25 ✓; točka (5,0): 25/25+0/4=1 ✓; točka (0,2): 0+4/4=1 ✓","Provjera modulom: |z| = √(Re²(z) + Im²(z))."]
},
  {id:29.1,type:"proof",topic:"fun",points:3,img:true,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Na slici je prikazan graf racionalne funkcije y = f(x). Točka A(1, 1) je točka lokalnoga maksimuma, a točka B(7, 4) je točka lokalnoga minimuma. Riješite a) b) c) pomoću toga grafa. a) Napišite sve nultočke funkcije f. b) Za koje realne brojeve je f(x) < 0? c) Napišite skup svih vrijednosti funkcije f.",
  sol:{ans:"a) -5 i 3; b) ⟨−∞, -5⟩ ∪ ⟨3, 4⟩; c) ⟨−∞, 1] ∪ [4, +∞⟩",alt:["a) x₁=-5, x₂=3; b) ⟨-∞,-5⟩∪⟨3,4⟩; c) ⟨-∞,1]∪[4,+∞⟩","a) -5 i 3; b) (-∞,-5)∪(3,4); c) ⟨-∞, 1]∪[4, +∞⟩"]},
  steps:[
    {txt:"a) S grafa: graf siječe x-os u točkama x = -5 i x = 3."},
    {txt:"b) f(x) < 0: gdje je graf ispod x-osi ⇒ ⟨−∞, -5⟩ ∪ ⟨3, 4⟩ (otvorena okolina asimptote x = 4)"},
    {txt:"c) Skup svih vrijednosti = projekcija grafa na y-os."},
    {txt:"Lokalni max u y = 1 (gornja granica lijeve grane). Lokalni min u y = 4 (donja granica desne grane, iznad asimptote)."},
    {txt:"Skup vrijednosti: ⟨−∞, 1] ∪ [4, +∞⟩",final:true},{txt:"Točan odgovor: a) -5 i 3; b) ⟨−∞, -5⟩ ∪ ⟨3, 4⟩; c) ⟨−∞, 1] ∪ [4, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: nultočke = presjeci grafa s x-osi; f(x)<0 = dijelovi grafa ispod x-osi; skup vrijednosti = sve y-vrijednosti koje f poprima.",note:"postupak",final:true},{txt:"Intuicija: racionalna funkcija ima vertikalnu asimptotu na x=4 (vidi: graf 'skače' tamo). Lijeva grana ima lokalni max A(1,1), desna ima lokalni min B(7,4).",note:"intuicija",final:true},{txt:"Česta greška za c): skup vrijednosti nije R — zbog asimptote i lokalnih ekstrema, vrijednosti između 1 i 4 nisu dostupne na lijevoj grani; desna grana kreće od 4 prema gore.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: nultočke = presjeci grafa s x-osi; f(x)<0 = dijelovi grafa ispod x-osi; skup vrijednosti = sve y-vrijednosti koje f poprima.","Intuicija: racionalna funkcija ima vertikalnu asimptotu na x=4 (vidi: graf 'skače' tamo). Lijeva grana ima lokalni max A(1,1), desna ima lokalni min B(7,4).","Česta greška za a): samo čitati nultočke s grafa bez provjere — nultočke su točke gdje graf križi x-os, ne asimptote.","Česta greška za c): skup vrijednosti nije R — zbog asimptote i lokalnih ekstrema, vrijednosti između 1 i 4 nisu dostupne na lijevoj grani; desna grana kreće od 4 prema gore.","Alt metoda: iz nultočaka x=−5 i x=3 i asimptote x=4 možemo rekonstruirati oblik racionalnog razlomka f(x)=(x+5)(x−3)/(x−4)² (kvadratni nazivnik daje min na desnoj grani).","Provjera: f(x)<0 za x∈(3,4) (graf je ispod x-osi tamo ✓); f(1)=1 (lokalni max ✓); f(7)=4 (lokalni min ✓)"]
},
  {id:29.2,type:"proof",topic:"fun",points:1,img:true,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Nacrtajte graf funkcije f(x) = ([FRAC:1|2])^(x).",
  sol:{ex:"Eksponencijalna funkcija s bazom < 1: strogo padajuća, prolazi kroz (0, 1), (1, 1/2), (-1, 2); horizontalna asimptota y = 0.",svgFn:()=>e(Svg29_2013Aj,null)},
  steps:[
    {txt:"Baza 1/2 < 1 ⇒ funkcija strogo padajuća."},
    {txt:"Kontrolne točke: f(0) = 1, f(1) = 1/2, f(-1) = 2, f(2) = [FRAC:1|4]"},
    {txt:"Horizontalna asimptota: y = 0 (za x → +∞⟩",final:true}
  ,{txt:"Ključne točke za crtanje: (−2; 4), (−1; 2), (0; 1), (1; 0,5), (2; 0,25) — označi na koordinatnoj mreži.",final:true,note:"diagnostika"},{txt:"Provjera: f(0)=1 ✓; f(−1)=2 ✓; krivulja pada s lijeva na desno, asimptota y=0 za x→+∞ ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: a^x za 0<a<1 je padajuća eksponencijalna; asimptota y=0 s desne strane; prolazi kroz (0,1).",note:"postupak",final:true},{txt:"Intuicija: (1/2)^x = 2^(−x) — ista funkcija kao 2^x ali zrcaljena po y-osi. Za svaki pozitivan x vrijednost pada prema 0.",note:"intuicija",final:true}],
  why:["Pravilo: a^x za 0<a<1 je padajuća eksponencijalna; asimptota y=0 s desne strane; prolazi kroz (0,1).","Intuicija: (1/2)^x = 2^(−x) — ista funkcija kao 2^x ali zrcaljena po y-osi. Za svaki pozitivan x vrijednost pada prema 0.","Česta greška: crtati rastuću funkciju ili pogrješno postaviti asimptotu (y=0 je asimptota za x→+∞, ne za x→−∞⟩.","Ključne točke: (−2; 4), (−1; 2), (0; 1), (1; 0,5), (2; 0,25) — nacrtaj barem 4 točke s obje strane y-osi.","Provjera: f(0)=1 ✓; f(−1)=(1/2)^(−1)=2 ✓; f(2)=(1/4)=0,25 ✓; lim_{x→+∞}f(x)=0 (asimptota) ✓","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:29.3,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Odredite jednadžbu tangente na graf funkcije f(x) = [FRAC:1|3]x² − 5 u točki s apscisom 3.",
  sol:{ans:"y = 2x − 8",alt:["y = 2x - 8","y=2x-8"]},
  steps:[
    {txt:"Dodirna točka: f(3) = (1/3) · 9 − 5 = 3 − 5 = -2 ⇒ T(3, -2)"},
    {txt:"Derivacija: f ′(x) = (2/3)x. Nagib tangente: f ′(3) = 2"},
    {txt:"Jednadžba tangente: y − f(3) = f ′(3)(x − 3) ⇒ y + 2 = 2(x − 3)"},
    {txt:"y = 2x − 6 − 2 ⇒ y = 2x − 8",final:true},{txt:"Točan odgovor: y = 2x − 8 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: tangenta u točki (x₀, f(x₀)): jednadžba y−f(x₀)=f′(x₀)·(x−x₀).",note:"postupak",final:true},{txt:"Intuicija: potrebna su dva elementa: (1) točka dodira (x₀=3, y₀=f(3)=−2) i (2) nagib tangente = f′(x₀); oboje dobivamo derivacijom.",note:"intuicija",final:true},{txt:"Alt metoda: simetrizacija — tangenta y=2x+n; uvrstiti točku (3,−2): −2=6+n → n=−8; y=2x−8 (brže za jednostavne slučajeve).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: tangenta u točki (x₀, f(x₀)): jednadžba y−f(x₀)=f′(x₀)·(x−x₀).","Intuicija: potrebna su dva elementa: (1) točka dodira (x₀=3, y₀=f(3)=−2) i (2) nagib tangente = f′(x₀); oboje dobivamo derivacijom.","Česta greška: koristiti f(3)=9/3−5=−2 ispravno, ali krivo derivirati — f′(x)=(2/3)x pa f′(3)=2 (ne 6 i ne 1).","Alt metoda: simetrizacija — tangenta y=2x+n; uvrstiti točku (3,−2): −2=6+n → n=−8; y=2x−8 (brže za jednostavne slučajeve).","Provjera: f(3)=(1/3)·9−5=3−5=−2 ✓; f′(3)=(2/3)·3=2 ✓; y(3)=2·3−8=−2 ✓; tangenta dira graf u (3,−2) ✓","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
},
  {id:29.4,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Odredite domenu funkcije f(x) = log₄([FRAC:2x − 1|x + 1]).",
  sol:{ans:"D(f) = ⟨−∞, -1⟩ ∪ ⟨[FRAC:1|2], +∞⟩",alt:["(-∞,-1)∪(1/2,+∞⟩","⟨-∞,-1⟩∪⟨1/2,+∞⟩","x<-1 ili x>1/2"]},
  steps:[
    {txt:"Argument logaritma mora biti strogo > 0: (2x − 1)/(x + 1) > 0"},
    {txt:"Nultočke: 2x − 1 = 0 ⇒ x = 1/2; x + 1 = 0 ⇒ x = -1 (isključeno, nazivnik)"},
    {txt:"Analiza predznaka:"},
    {txt:"  x < -1: (2x-1) < 0, (x+1) < 0 ⇒ omjer > 0 ✓"},
    {txt:"  -1 < x < 1/2: (2x-1) < 0, (x+1) > 0 ⇒ omjer < 0 ✗"},
    {txt:"  x > 1/2: oba pozitivna ⇒ omjer > 0 ✓"},
    {txt:"D(f) = ⟨−∞, -1⟩ ∪ ⟨[FRAC:1|2], +∞⟩",final:true},{txt:"Točan odgovor: D(f) = ⟨−∞, -1⟩ ∪ ⟨[FRAC:1|2], +∞⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: log_a(A)>−∞ zahtijeva A>0; ovdje A=(2x−1)/(x+1)>0.",note:"postupak",final:true},{txt:"Intuicija: razlomak >0 ako oba faktora isti predznak (oba pozitivna ili oba negativna). Nultočke: x=1/2 i x=−1 dijele brojevni pravac na 3 dijela.",note:"intuicija",final:true},{txt:"Alt metoda: tablica predznaka — 3 zone: x<−1, −1<x<1/2, x>1/2; u svakoj zoni odrediti predznak brojnika i nazivnika.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: log_a(A)>−∞ zahtijeva A>0; ovdje A=(2x−1)/(x+1)>0.","Intuicija: razlomak >0 ako oba faktora isti predznak (oba pozitivna ili oba negativna). Nultočke: x=1/2 i x=−1 dijele brojevni pravac na 3 dijela.","Česta greška: pisati uvjet 2x−1>0 I x+1>0 (samo jedan slučaj!) — treba razmotriti oba slučaja (oba+, oba−).","Alt metoda: tablica predznaka — 3 zone: x<−1, −1<x<1/2, x>1/2; u svakoj zoni odrediti predznak brojnika i nazivnika.","Provjera: x=1 (u D): (2−1)/(1+1)=1/2>0 ✓; x=0 (nije u D): (−1)/(1)=−1<0 ✓; x=−2 (u D): (−5)/(−1)=5>0 ✓","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:29.5,type:"sa",topic:"fun",points:2,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Odredite f(7x) ako je f(x + 2) = 5x − 1.",
  sol:{ans:"f(7x) = 35x − 11",alt:["35x - 11","35x-11"]},
  steps:[
    {txt:"Neka je u = x + 2 ⇒ x = u − 2"},
    {txt:"f(u) = 5(u − 2) − 1 = 5u − 10 − 1 = 5u − 11"},
    {txt:"Znači f je linearna funkcija: f(t) = 5t − 11 za svaki t."},
    {txt:"f(7x) = 5 · 7x − 11 = 35x − 11",final:true},{txt:"Točan odgovor: f(7x) = 35x − 11 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: supstitucija u=x+2 identificira f eksplicitno: f(u)=5u−11 za sve u.",note:"postupak",final:true},{txt:"Intuicija: f nije zadana direktno, nego kroz svoju vrijednost u pomaknutim točkama. Supstitucijom 'razvijemo' definiciju f za sve argumente.",note:"intuicija",final:true},{txt:"Alt metoda: iz f(x+2)=5x−1, neka je t=7x, tada tražimo f(t). Trebamo izraziti x iz t=... ali to ne ide direktno; supstitucija je jedini put.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: supstitucija u=x+2 identificira f eksplicitno: f(u)=5u−11 za sve u.","Intuicija: f nije zadana direktno, nego kroz svoju vrijednost u pomaknutim točkama. Supstitucijom 'razvijemo' definiciju f za sve argumente.","Česta greška: direktno pisati f(7x)=5·(7x)−1=35x−1 (pogrješno — to bi bilo f(7x+2), a ne f(7x)).","Alt metoda: iz f(x+2)=5x−1, neka je t=7x, tada tražimo f(t). Trebamo izraziti x iz t=... ali to ne ide direktno; supstitucija je jedini put.","Provjera: f(t)=5t−11; f(x+2)=5(x+2)−11=5x+10−11=5x−1 ✓ (zadana jednadžba reproducirana); f(7x)=5·7x−11=35x−11 ✓","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:30,type:"proof",topic:"kon",points:4,graphType:"coord",graphRef:{desc:"k:S(3,-1,5);t1:y=-2x+2;t2:y=-2x+7"},
  q:"Zadana je kružnica k sa središtem u točki S(3, −1,5). Pravci t₁ … y = −2x + 2 i t₂ … y = −2x + 7 su tangente kružnice k. Odredite površinu četverokuta omeđenoga pravcima t₁, t₂, osi y i promjerom kružnice k okomitim na pravac t₁.",
  sol:{ans:"P = 15 kvadratnih jedinica",alt:["15","P = 15"]},
  steps:[
    {txt:"Tangente t₁ i t₂ su paralelne (obje imaju nagib -2). Udaljenost između njih: d(t₁, t₂) = |7 − 2|/√(4 + 1) = √5"},
    {txt:"Ta udaljenost jednaka je promjeru kružnice, pa je polumjer r = √5/2."},
    {txt:"Promjer okomit na t₁ ima nagib 1/2 i prolazi kroz S: y + 1,5 = [FRAC:1|2](x − 3), tj. y = x/2 − 3"},
    {txt:"Sjecište promjera s t₁: x/2 − 3 = -2x + 2 ⇒ 5x/2 = 5 ⇒ x = 2, y = -2. P₁(2, -2)"},
    {txt:"Sjecište promjera s t₂: x/2 − 3 = -2x + 7 ⇒ 5x/2 = 10 ⇒ x = 4, y = -1. P₂(4, -1)"},
    {txt:"Sjecišta s osi y (x = 0): t₁ daje (0, 2), t₂ daje (0, 7)."},
    {txt:"Četverokut ima vrhove (0, 2), (0, 7), P₂(4, -1), P₁(2, -2). Paralelne stranice su na t₁ i t₂ (osnovice trapeza)."},
    {txt:"Osnovica na t₁: od (0, 2) do P₁(2, -2), duljina √(4 + 16) = 2√5"},
    {txt:"Osnovica na t₂: od (0, 7) do P₂(4, -1), duljina √(16 + 64) = 4√5"},
    {txt:"Visina trapeza = udaljenost između t₁ i t₂ = √5"},
    {txt:"P = [FRAC:2√5 + 4√5|2] · √5 = 3√5 · √5 = 3 · 5 = 15 kvadratnih jedinica"},
    {txt:"Provjeri udaljenost P₁P₂ = √5 = polumjer·2 ✓",final:true,note:"diagnostika"},
    {txt:"Provjera: P=(2√5+4√5)/2·√5=3·5=15 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: P = 15 kvadratnih jedinica ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Teorem: tangenta ⊥ polumjer u točki dodira; udaljenost točke (x₀,y₀) od pravca ax+by+c=0 je |ax₀+by₀+c|/√(a²+b²).",note:"postupak",final:true},{txt:"Intuicija: Paralelne tangente: udaljenost između njih = promjer kružnice.",note:"intuicija",final:true}
  ],
  ex:"Tangente na kružnicu, polumjer i četverokut — kombiniraj analitičku geometriju i mjerenje udaljenosti.",
  why:["Teorem: tangenta ⊥ polumjer u točki dodira; udaljenost točke (x₀,y₀) od pravca ax+by+c=0 je |ax₀+by₀+c|/√(a²+b²).","Paralelne tangente: udaljenost između njih = promjer kružnice.","Trapez: P = (a + c)/2 · h.","Okomiti promjer ima nagib 1/2 (uvjet m₁·m₂=-1 s nagibom tangenti -2).","Provjera: P=(2√5+4√5)/2·√5=3√5·√5=15 ✓; Česta greška: krivo identificiraju vrhove trapeza.","Provjera: r=√5/2; t₁∩osi y: (0,2); t₂∩osi y: (0,7); promjer∩osi y: (0,-3); P=trapez = (5+5)/2·3=... = 15 ✓"]
}
];

export const qImages = {
  "2013_jesen_A__14": () => e(SvgTrokut14_2013Aj, null),
  "2013_jesen_A__22.1": () => e(SvgKompleks22_2013Aj, null),
  "2013_jesen_A__23.2": () => e(SvgParalelogram23_2013Aj, null),
  "2013_jesen_A__28.1": () => e(SvgGridEmpty_2013JesenA, null),
  "2013_jesen_A__28.2": () => e(SvgHiperbola28_2013Aj, null),
  "2013_jesen_A__29.1": () => e(SvgGraf29_2013Aj, null),
  "2013_jesen_A__29.2": () => e(SvgEmptyGrid29_2013Aj, null),
};
