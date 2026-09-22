// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgGraf29d_2012Aj(){
  // Prazan, simetrican koordinatni sustav kao u originalu: crtkana mreza pokriva
  // i negativni dio osi x (potrebno za ravnalicu x = -4) i negativni dio osi y.
  const sc=26,NX=5,NY=6,PAD=15;
  const W=2*NX*sc+2*PAD,H=2*NY*sc+2*PAD,cx=PAD+NX*sc,cy=PAD+NY*sc;
  const GL=PAD,GR=W-PAD,GT=PAD,GB=H-PAD;
  const _BLUE="var(--blue)";
  const gx=[],gy=[];
  for(let i=-NX;i<=NX;i++) if(i!==0) gx.push(i);
  for(let j=-NY;j<=NY;j++) if(j!==0) gy.push(j);
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"ar29d",markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto"},e("path",{d:"M0,0 L0,7 L7,3.5 z",fill:"var(--text)"}))
    ),
    ...gx.map(i=>e("line",{key:"gx"+i,x1:cx+i*sc,y1:GT,x2:cx+i*sc,y2:GB,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    ...gy.map(j=>e("line",{key:"gy"+j,x1:GL,y1:cy-j*sc,x2:GR,y2:cy-j*sc,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    e("line",{x1:GL-7,y1:cy,x2:GR+9,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar29d)"}),
    e("line",{x1:cx,y1:GB+7,x2:cx,y2:GT-9,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar29d)"}),
    e("text",{x:GR+3,y:cy+16,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:cx-13,y:GT-1,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-13,y:cy+15,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+15,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:cy-sc+4,fontSize:10,fill:"var(--muted)"},"1")
  );
}

function SvgKruznica29c_2012Aj(){
  // Original: cijela zatvorena kružnica sa središtem S(5, 3), r = 5, i točkom
  // A(1, 6) na kružnici. Okvir mora obuhvatiti x od -2 do 11 i y od -4 do 10
  // da kružnica stane cijela (dodiruje os y u (0,3), siječe os x u 1 i 9).
  const sc=22,X0=-2,X1=11,Y0=-4,Y1=10,PAD=12;
  const W=(X1-X0)*sc+2*PAD, H=(Y1-Y0)*sc+2*PAD;
  const cx=PAD-X0*sc, cy=PAD+Y1*sc;
  const GL=PAD,GR=W-PAD,GT=PAD,GB=H-PAD;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)";
  const px=u=>cx+u*sc, py=v=>cy-v*sc;
  const Sx=px(5), Sy=py(3), r=5*sc;   // S(5, 3), r = 5
  const Ax=px(1), Ay=py(6);           // A(1, 6)
  const gx=[],gy=[];
  for(let i=X0;i<=X1;i++) if(i!==0) gx.push(i);
  for(let j=Y0;j<=Y1;j++) if(j!==0) gy.push(j);
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"ar29c",markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto"},e("path",{d:"M0,0 L0,7 L7,3.5 z",fill:"var(--text)"}))
    ),
    ...gx.map(i=>e("line",{key:"gx"+i,x1:px(i),y1:GT,x2:px(i),y2:GB,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    ...gy.map(j=>e("line",{key:"gy"+j,x1:GL,y1:py(j),x2:GR,y2:py(j),stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    e("line",{x1:GL-6,y1:cy,x2:GR+8,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar29c)"}),
    e("line",{x1:cx,y1:GB+6,x2:cx,y2:GT-8,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar29c)"}),
    e("text",{x:GR+1,y:cy+16,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:cx-13,y:GT-1,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    // Kružnica (zatvorena, cijela unutar okvira)
    e("circle",{cx:Sx,cy:Sy,r,fill:"none",stroke:_BLUE,strokeWidth:2}),
    // Jedinicne oznake
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:px(1),cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:py(1),r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-13,y:cy+15,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:px(1)-3,y:cy+15,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:py(1)+4,fontSize:10,fill:"var(--muted)"},"1"),
    // Središte S
    e("circle",{cx:Sx,cy:Sy,r:4,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:Sx+7,y:Sy+14,fontSize:12,fontWeight:"600",fill:_GOLD},"S"),
    // Točka A na kružnici
    e("circle",{cx:Ax,cy:Ay,r:4,fill:_RED,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:Ax-17,y:Ay-4,fontSize:12,fontWeight:"600",fill:_BLUE},"A")
  );
}

function SvgGraf26_2012Aj(){
  const W=250,H=260,cx=80,cy=150,sc=36;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx26aj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary26aj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    ...[-2,-1,1,2,3].map(i=>e("line",{key:"gx"+i,x1:cx+i*sc,y1:15,x2:cx+i*sc,y2:H-15,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    ...[-3,-2,-1,1,2,3].map(i=>e("line",{key:"gy"+i,x1:15,y1:cy-i*sc,x2:W-15,y2:cy-i*sc,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    e("line",{x1:15,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#arx26aj)"}),
    e("line",{x1:cx,y1:H-15,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#ary26aj)"}),
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-14,y:cy+13,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:cy-sc+4,fontSize:10,fill:"var(--muted)"},"1")
  );
}

function SvgGraf22b_2012Aj(){
  // Prazan koordinatni sustav za crtanje f(x) = 2 sin(x - pi/2) na [0, 2pi].
  // Kao u originalu: os x je u sredini, mreza se proteze 5 jedinica iznad i 5
  // ispod osi x (funkcija pada do -2), a vodoravno su 4 celije sirine pi/2.
  const scx=46,scy=28,NC=4,NY=5,PADT=15,PADB=15;
  const lx=40, GR=lx+NC*scx, GT=PADT, cy=PADT+NY*scy, GB=cy+NY*scy;
  const W=GR+38, H=GB+PADB;
  const _BLUE="var(--blue)";
  const gy=[];
  for(let j=-NY;j<=NY;j++) if(j!==0) gy.push(j);
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"ar22aj",markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto"},e("path",{d:"M0,0 L0,7 L7,3.5 z",fill:"var(--text)"}))
    ),
    ...[1,2,3,4].map(i=>e("line",{key:"gx"+i,x1:lx+i*scx,y1:GT,x2:lx+i*scx,y2:GB,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    ...gy.map(j=>e("line",{key:"gy"+j,x1:lx,y1:cy-j*scy,x2:GR,y2:cy-j*scy,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"3,3",opacity:0.85})),
    e("line",{x1:lx-28,y1:cy,x2:W-6,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar22aj)"}),
    e("line",{x1:lx,y1:GB+7,x2:lx,y2:GT-9,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ar22aj)"}),
    e("text",{x:W-13,y:cy+16,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:lx-13,y:GT-1,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("circle",{cx:lx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:GR,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:lx,cy:cy-scy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:lx-13,y:cy+16,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:GR-12,y:cy+16,fontSize:10,fill:"var(--muted)"},"2\u03c0"),
    e("text",{x:lx-14,y:cy-scy+4,fontSize:10,fill:"var(--muted)"},"1")
  );
}

function SvgTetive11_2012Aj(){
  const W=280,H=270,ox=140,oy=130,r=110;
  const ang=d=>d*Math.PI/180;
  const pt=a=>({x:ox+r*Math.cos(ang(a)),y:oy-r*Math.sin(ang(a))});
  const A=pt(148), C=pt(42), D=pt(220), B=pt(342);
  // Intersection E of chords AB and CD (computed properly)
  // Line AB: parametric from A to B
  const dxAB=B.x-A.x, dyAB=B.y-A.y;
  const dxCD=D.x-C.x, dyCD=D.y-C.y;
  const denom=dxAB*dyCD-dyAB*dxCD;
  const t=((C.x-A.x)*dyCD-(C.y-A.y)*dxCD)/denom;
  const E={x:A.x+t*dxAB, y:A.y+t*dyAB};
  // Colors: chord AB=blue, chord CD=red
  const blue="var(--blue)", red="var(--red)";
  // Helper: perpendicular offset for label (offset perpendicular to segment direction)
  const perpOff=(p1,p2,dist)=>{
    const dx=p2.x-p1.x, dy=p2.y-p1.y, len=Math.sqrt(dx*dx+dy*dy);
    return {px:-dy/len*dist, py:dx/len*dist};
  };
  // Label midpoints with perpendicular offset of 14px
  const mAE={x:(A.x+E.x)/2, y:(A.y+E.y)/2};
  const mEB={x:(E.x+B.x)/2, y:(E.y+B.y)/2};
  const mCE={x:(C.x+E.x)/2, y:(C.y+E.y)/2};
  const mED={x:(E.x+D.x)/2, y:(E.y+D.y)/2};
  const offAE=perpOff(A,E,14), offEB=perpOff(E,B,14);
  const offCE=perpOff(C,E,14), offED=perpOff(E,D,14);
  // Use consistent perpendicular direction for each chord
  const lblAE={x:mAE.x-offAE.px, y:mAE.y-offAE.py};
  const lblEB={x:mEB.x-offEB.px, y:mEB.y-offEB.py};
  const lblCE={x:mCE.x+offCE.px, y:mCE.y+offCE.py};
  const lblED={x:mED.x+offED.px, y:mED.y+offED.py};
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("circle",{cx:ox,cy:oy,r,fill:"none",stroke:"var(--text)",strokeWidth:1.8}),
    // Chord AB (blue)
    e("line",{x1:A.x,y1:A.y,x2:B.x,y2:B.y,stroke:blue,strokeWidth:2.2}),
    // Chord CD (red)
    e("line",{x1:C.x,y1:C.y,x2:D.x,y2:D.y,stroke:red,strokeWidth:2.2}),
    // Vertex circles and labels
    ...[{p:A,n:"A",dx:-18,dy:0},{p:B,n:"B",dx:10,dy:4},{p:C,n:"C",dx:10,dy:-6},{p:D,n:"D",dx:-18,dy:8}].map(({p,n,dx,dy})=>
      e(React.Fragment,{key:n},
        e("circle",{cx:p.x,cy:p.y,r:4,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.5}),
        e("text",{x:p.x+dx,y:p.y+dy+5,fontSize:13,fontWeight:"700",fill:"var(--text)"},n)
      )
    ),
    // E intersection point
    e("circle",{cx:E.x,cy:E.y,r:4,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.5}),
    e("text",{x:E.x+8,y:E.y+5,fontSize:13,fontWeight:"700",fill:"var(--text)"},"E"),
    // Segment labels — OUTSIDE the chord lines (perpendicular offset)
    e("text",{x:lblAE.x,y:lblAE.y,textAnchor:"middle",fontSize:11,fontStyle:"italic",fontWeight:"600",fill:blue},"x cm"),
    e("text",{x:lblEB.x,y:lblEB.y,textAnchor:"middle",fontSize:11,fontWeight:"600",fill:blue},"6 cm"),
    e("text",{x:lblCE.x,y:lblCE.y,textAnchor:"middle",fontSize:11,fontWeight:"600",fill:red},"3 cm"),
    e("text",{x:lblED.x,y:lblED.y,textAnchor:"middle",fontSize:11,fontWeight:"600",fill:red},"7 cm")
  );
}

function SvgGraf10_2012Aj(){
  const W=260,H=260,cx=70,cy=170,sc=36;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // f(x) = x²-1, tjeme (0,-1), sječe os x=±1
  const f=x=>x*x-1;
  const pts=[];
  for(let x=-2.2;x<=2.2;x+=0.05){
    const px=cx+x*sc, py=cy-f(x)*sc;
    if(py>10&&py<H-10) pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const d="M"+pts.join(" L");
  // Single parabola y=x²-1
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g10aj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:"0.5",strokeDasharray:"3,3"})
      ),
      e("marker",{id:"arx10aj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary10aj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g10aj)"}),
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#arx10aj)"}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ary10aj)"}),
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-14,y:cy+13,fontSize:10,fill:"var(--muted)"},"0"),
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:cy-sc+4,fontSize:10,fill:"var(--muted)"},"1"),
    e("path",{d,fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    e("text",{x:cx+2.8*sc+4,y:cy-2.8*sc,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y = f(x)")
  );
}

function SvgSol29d_2012JesenA(){
  const W=240,H=240,cx=60,cy=120,sc=22;
  const pts_u=[],pts_d=[];
  for(let i=0;i<=200;i++){const x=i/20;const y=Math.sqrt(16*x);pts_u.push(`${cx+x*sc},${cy-y*sc}`);pts_d.push(`${cx+x*sc},${cy+y*sc}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl29Ja",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl29Ja",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl29Ja)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl29Ja)"}),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"var(--muted)"},"0"),
    [2,4,6].map(t=>e("text",{key:t,x:cx+t*sc-3,y:cy+12,fontSize:8,fill:"var(--muted)"},t)),
    e("circle",{cx:cx+4*sc,cy:cy,r:3,fill:"var(--gold)"}),
    e("text",{x:cx+4*sc+4,y:cy-5,fontSize:8,fill:"var(--gold)"},"F(4,0)"),
    e("polyline",{points:pts_u.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"}),
    e("polyline",{points:pts_d.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

function SvgSol26_2012JesenA(){
  const W=240,H=210,cx=60,cy=90,sc=36;
  const f=x=>-x*x/2+2*x;
  const pts=[]; for(let i=-40;i<=200;i++){const x=i/40;pts.push(`${cx+x*sc},${cy-f(x)*sc}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl26Ja",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl26Ja",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl26Ja)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl26Ja)"}),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"var(--muted)"},"0"),
    [1,2,3,4].map(t=>e("g",{key:t},
      e("line",{x1:cx+t*sc,y1:cy-3,x2:cx+t*sc,y2:cy+3,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx+t*sc-3,y:cy+12,fontSize:8,fill:"var(--muted)"},t)
    )),
    [1,2].map(t=>e("g",{key:t},
      e("line",{x1:cx-3,y1:cy-t*sc,x2:cx+3,y2:cy-t*sc,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:cx-12,y:cy-t*sc+4,fontSize:8,fill:"var(--muted)"},t)
    )),
    e("circle",{cx:cx+2*sc,cy:cy-2*sc,r:3,fill:"var(--green)"}),
    e("text",{x:cx+2*sc+4,y:cy-2*sc-4,fontSize:8,fill:"var(--green)"},"T(2,2)"),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

function SvgSol22b_2012JesenA(){
  const W=280,H=200,lx=30,rx=W-15,by=H-30,ty=12,amp=60,pi=Math.PI;
  const tx=x=>lx+(x/(2*pi))*(rx-lx), ty2=y=>by-y*(amp/2);
  const pts=[]; for(let i=0;i<=120;i++){const x=i/120*2*pi;pts.push(`${tx(x)},${ty2(2*Math.sin(x-pi/2))}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl22Ja",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary_sl22Ja",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx_sl22Ja)"}),
    e("line",{x1:lx,y1:by,x2:lx,y2:ty,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary_sl22Ja)"}),
    e("text",{x:rx-6,y:by+13,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:lx+3,y:ty+8,fontSize:9,fill:"var(--text)"},"y"),
    [["π/2",0.5],["π",1],["3π/2",1.5],["2π",2]].map(([l,k])=>e("g",{key:l},
      e("line",{x1:tx(k*pi),y1:by-3,x2:tx(k*pi),y2:by+3,stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:tx(k*pi)-8,y:by+12,fontSize:8,fill:"var(--muted)"},l)
    )),
    [[-2,"−2"],[2,"2"]].map(([v,l])=>e("g",{key:l},
      e("line",{x1:lx-3,y1:ty2(v),x2:lx+3,y2:ty2(v),stroke:"var(--muted)",strokeWidth:1}),
      e("text",{x:lx-18,y:ty2(v)+4,fontSize:8,fill:"var(--muted)"},l)
    )),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 1 < ∛a < 2 → 1 < a < 8 (kubiraj) → a ∈ {2, …, 7}; broji prirodne.",topic:"br",points:1,
  q:"Koliko ima prirodnih brojeva a takvih da je 1 < ³√a < 2?",
  opts:["pet","šest","sedam","osam"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Kubiramo nejednakost (sve vrijednosti pozitivne): 1³ < a < 2³"},
    {txt:"1 < a < 8"},
    {txt:"Prirodni brojevi strogo između 1 i 8: 2, 3, 4, 5, 6, 7"},
    {txt:"Ukupno 6 brojeva.",final:true},
    {txt:"Provjera za rubne vrijednosti: ³√1 = 1 (rub, ne ulazi), ³√8 = 2 (rub, ne ulazi); za a = 2: ³√2 ≈ 1,26 ✓; za a = 7: ³√7 ≈ 1,91 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (5) = student broji samo {3,4,5,6,7} ili pogrešno isključi 2; C (7) = uključi rub 1 ili 8; D (8) = uključi i 1 i 8 (krivo razumijevanje strogih nejednakosti).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Kubiranje strogih nejednakosti s pozitivnim vrijednostima čuva smjer (monotona funkcija).",note:"postupak",final:true},{txt:"Intuicija: ³√a = ³√a; inverzna operacija nad strogim nejednakostima je dizanje na treću potenciju.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Kubiranje strogih nejednakosti s pozitivnim vrijednostima čuva smjer (monotona funkcija).","³√a = ³√a; inverzna operacija nad strogim nejednakostima je dizanje na treću potenciju.","Česta greška: brkanje strogih (<) i nestrogih (≤) nejednakosti — ovdje su strogo manje, pa rubne vrijednosti 1 i 8 NE ulaze.","Intuicija: kubni korijen je rastuća funkcija na ℝ, pa nejednakost se prenosi 1:1 na argument.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:2,type:"mc",warn:"Pazi: log₂3 + log₂6 = log₂18; podijeli s log₂9, izračunaj pa zaokruži na 4 decimale.",topic:"fun",points:1,
  q:"Koliko je [FRAC:log₂ 3 + log₂ 6|log₂ 9] zaokruženo na četiri decimale?",
  opts:["1,3155","1,5000","2,0000","2,4004"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Iskoristimo zbroj logaritama: log₂ 3 + log₂ 6 = log₂(3 · 6) = log₂ 18"},
    {txt:"log₂ 18 / log₂ 9 = log₉ 18 (formula prelaska na drugu bazu)"},
    {txt:"log₉ 18 = log₉(9 · 2) = log₉ 9 + log₉ 2 = 1 + log₉ 2"},
    {txt:"log₉ 2 = ln 2 / ln 9 ≈ 0,6931 / 2,1972 ≈ 0,3155"},
    {txt:"Ukupno: 1 + 0,3155 = 1,3155",final:true},
    {txt:"Provjera kalkulatorom: log₂ 18 / log₂ 9 = 4,1699 / 3,1699 ≈ 1,3155 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (1,5) = student naivno računa (log 3 + log 6)/log 9 i dobije log 18/log 9 ≈ log 18/(2 log 3) bez precizne računice; C (2) = misli da je log₂ 18 = 2·log₂ 9 (krivo); D (2,4004) = student računa (log₂ 3 · log₂ 6)/log₂ 9 (umnožak umjesto zbroja).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: logₐ b + logₐ c = logₐ(b · c) (zbroj logaritama → logaritam umnoška).",note:"postupak",final:true},{txt:"Intuicija: Formula prelaska na drugu bazu: logₐ b = log_c b / log_c a (uvijek se može svesti na bilo koju bazu).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["logₐ b + logₐ c = logₐ(b · c) (zbroj logaritama → logaritam umnoška).","Formula prelaska na drugu bazu: logₐ b = log_c b / log_c a (uvijek se može svesti na bilo koju bazu).","Trik: log₂ 18 / log₂ 9 = log₉ 18 — primjena formule prelaska bazu kao alat, ne samo formalitet.","Česta greška: brkanje zbroja i umnoška logaritama (D distractor — student misli da log a · log b = log(a·b)).","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:3,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku.",topic:"br",points:1,
  q:"Koja je tvrdnja [B:netočna]?",
  opts:["Suprotni brojevi imaju istu apsolutnu vrijednost.","Recipročni brojevi imaju istu apsolutnu vrijednost.","Zbroj suprotnih brojeva je 0.","Umnožak recipročnih brojeva je 1."],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"A: suprotni brojevi a i −a: |a| = |−a| — uvijek vrijedi ✓"},
    {txt:"B: recipročni a i 1/a: npr. |2| = 2, |1/2| = 0,5 — ne vrijedi općenito ✗"},
    {txt:"C: a + (−a) = 0 — uvijek vrijedi ✓"},
    {txt:"D: a · (1/a) = 1 (za a ≠ 0) — uvijek vrijedi ✓"},
    {txt:"Netočna je tvrdnja B.",final:true},
    {txt:"Provjera: za a = 3, |3| = 3, |1/3| ≈ 0,33 — različito ✓ (potvrđuje da B ne vrijedi).",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (suprotni — vrijedi |a| = |−a|) — student potvrdi i odmah preskoči; C (zbroj suprotnih = 0) — uvijek vrijedi po definiciji; D (umnožak recipročnih = 1) — vrijedi za a ≠ 0. Glavna greška je u brzini čitanja: ako student traži točnu tvrdnju umjesto netočne, ide na A.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Protuprimjer: dovoljno je pokazati jedan konkretan broj za koji tvrdnja ne vrijedi (matematička metoda).",note:"postupak",final:true},{txt:"Intuicija: |a| = |1/a| ⇔ a² = 1 ⇔ a = ±1 — vrijedi samo u trivijalnom slučaju.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Protuprimjer: dovoljno je pokazati jedan konkretan broj za koji tvrdnja ne vrijedi (matematička metoda).","|a| = |1/a| ⇔ a² = 1 ⇔ a = ±1 — vrijedi samo u trivijalnom slučaju.","Česta greška: pitanje traži [B:netočnu] tvrdnju, a studenti naviknuti na uobičajeno pitanje brzo označe A.","Strategija: kod negativnog pitanja, eliminiraj jedna po jedna tvrdnja s primjerima — preostala je netočna.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:4,type:"mc",warn:"Pazi: iz x/y = a slijedi x = ay; uvrsti u drugu jednadžbu (rezultat ovisi o a).",topic:"al",points:1,
  q:"Odredite x u rješenju sustava [SYS:[FRAC:x|y] = a|3x − 2y = 5].",
  opts:["x = 5/a","x = a/5","x = 3a − 2/5a","x = 5a/3a − 2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Iz prve: x = ay (pretpostavljamo y ≠ 0)"},
    {txt:"Uvrstimo u drugu: 3ay − 2y = 5 ⇒ y(3a − 2) = 5"},
    {txt:"y = 5/(3a − 2) (uz a ≠ 2/3)"},
    {txt:"x = ay = [FRAC:5a|3a − 2]",final:true},
    {txt:"Provjera: za a = 1: x = 5/(3−2) = 5, y = 5; provjera u drugoj jednadžbi: 3·5 − 2·5 = 15 − 10 = 5 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (5/a) = student zaboravi pomnožiti s a kad računa x = a·y; B (a/5) = invertirao razlomak; C ((3a−2)/(5a)) = student zamijenio brojnik i nazivnik konačnog izraza.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Supstitucija: iz jedne jednadžbe izrazimo jednu varijablu (npr. x = ay) i uvrstimo u drugu.",note:"postupak",final:true},{txt:"Intuicija: Pažnja na uvjete: a ≠ 2/3 (inače 3a − 2 = 0, dijeljenje s nulom).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Supstitucija: iz jedne jednadžbe izrazimo jednu varijablu (npr. x = ay) i uvrstimo u drugu.","Pažnja na uvjete: a ≠ 2/3 (inače 3a − 2 = 0, dijeljenje s nulom).","Česta greška: izračunati y i zaboraviti se vratiti na x — provjeriti da je traženo x, ne y.","Alt metoda: matrična metoda za linearne sustave — ali supstitucija je brža za sustave s parametrom.","Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:5,type:"mc",warn:"Pazi: 25/4 = (5/2)² → (5/2)^(2x) < (5/2)¹ → 2x < 1 → x < 1/2; broji elemente skupa.",topic:"fun",points:1,
  q:"Koliko se rješenja nejednadžbe (25/4)^(x) < 5/2 nalazi u skupu {−6, −5, −1, 0, 1, 5, 6}?",
  opts:["dva","tri","četiri","pet"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Bazu zapišemo kao kvadrat: 25/4 = (5/2)²"},
    {txt:"((5/2)²)^(x) = (5/2)^(2x), pa nejednadžba postaje (5/2)^(2x) < (5/2)¹"},
    {txt:"Baza 5/2 > 1 ⇒ eksponencijalna funkcija je strogo rastuća ⇒ smjer se čuva: 2x < 1"},
    {txt:"x < 1/2"},
    {txt:"Provjera u skupu {−6, −5, −1, 0, 1, 5, 6}: x < [FRAC:1|2] zadovoljavaju −6, −5, −1, 0 — ukupno 4.",final:true},
    {txt:"Provjera: za x = 0: (25/4)⁰ = 1, treba 1 < 2,5 ✓; za x = 1: (25/4)¹ = 6,25, treba 6,25 < 2,5 ✗ (potvrđuje da x = 1 NE zadovoljava).",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (2) = student broji samo negative {−6, −5} (zaboravi 0 i {−1}); B (3) = uračuna i 1 (krivo, 1 nije < 1/2); D (5) = uključi 1 i 5 (krivo razumijevanje smjera).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: a^x < a^y za a > 1 ⇔ x < y (strogo rastuća eksponencijalna funkcija).",note:"postupak",final:true},{txt:"Intuicija: Bazu uvijek pokušaj svesti na isti broj — ovdje 25/4 = (5/2)² omogućuje izravnu usporedbu eksponenata.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["a^x < a^y za a > 1 ⇔ x < y (strogo rastuća eksponencijalna funkcija).","Bazu uvijek pokušaj svesti na isti broj — ovdje 25/4 = (5/2)² omogućuje izravnu usporedbu eksponenata.","Alt metoda: logaritmiranje obje strane log(25/4) — ali svođenje baze je elegantnije.","Česta greška: misliti da x = 0 ne zadovoljava — ali x < 1/2 uključuje 0, sve negativne, sve do 1/2.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:6,type:"mc",warn:"Pazi: s osi y → x = 0 (f(0) = 3 − 6); s osi x → 3·2ˣ = 6 → 2ˣ = 2.",topic:"fun",points:1,
  q:"Odredite koordinate točaka u kojima graf funkcije f(x) = 3 · 2^(x) − 6 siječe koordinatne osi.",
  opts:["(1, 0), (0, −6)","(1, 0), (0, −3)","(3, 0), (0, −6)","(3, 0), (0, −3)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Sjecište s x-osi: 3 · 2^(x) − 6 = 0 ⇒ 2^(x) = 2 ⇒ x = 1 ⇒ točka (1, 0)"},
    {txt:"Sjecište s y-osi: f(0) = 3 · 2⁰ − 6 = 3 − 6 = −3 ⇒ točka (0, −3)",final:true},
    {txt:"Provjera: f(1) = 3·2 − 6 = 0 ✓; f(0) = 3·1 − 6 = −3 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A ((1,0),(0,−6)) = student pogrešno računa f(0) kao −6 (zaboravi 3·2⁰ = 3); C ((3,0),(0,−6)) = krivo rješava 2^(x) = 6 → x = log₂ 6 i zaokruži na 3; D ((3,0),(0,−3)) = kombinacija prve dvije greške.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Sjecište grafa s osi x: nultočka funkcije, f(x) = 0.",note:"postupak",final:true},{txt:"Intuicija: Sjecište s osi y: f(0) — uvrsti x = 0.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:["Sjecište grafa s osi x: nultočka funkcije, f(x) = 0.","Sjecište s osi y: f(0) — uvrsti x = 0.","Pažnja na 2⁰ = 1 (ne 0) — najčešća greška kod eksponencijalnih funkcija.","Eksponencijalnu jednadžbu 3·2^(x) = 6 sredi u 2^(x) = 2 = 2¹¹, pa x = 1 (ne treba kalkulator).","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:7,type:"mc",warn:"Pazi: faktoriziraj nazivnike (x² − 3x = x(x − 3), 9 − x² = (3 − x)(3 + x)), pa skrati pažljivo.",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza ([FRAC:4x + 12|x² − 3x] + [FRAC:x|9 − x²]) · [FRAC:x + 3|x + 6] − [FRAC:5|x − 3], za sve x za koje je izraz definiran?",
  opts:["−2/x","2/x","10(x + 3)/x(x − 3)","2(x − 3)/5x(x + 3)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Faktorizacija nazivnika: x² − 3x = x(x − 3); 9 − x² = (3 − x)(3 + x) = −(x − 3)(x + 3)."},
    {txt:"Brojnik prvog razlomka: 4x + 12 = 4(x + 3)."},
    {txt:"Sumu u zagradi svedi na zajednički nazivnik x(x − 3)(x + 3): 4(x+3)/[x(x−3)] − x/[(x−3)(x+3)] = [4(x+3)² − x²]/[x(x−3)(x+3)]"},
    {txt:"Brojnik: 4(x+3)² − x² = 4x² + 24x + 36 − x² = 3x² + 24x + 36 = 3(x+2)(x+6)"},
    {txt:"Suma = 3(x+2)(x+6)/[x(x−3)(x+3)]"},
    {txt:"Pomnoži s (x+3)/(x+6): · (x+3)/(x+6) ⇒ 3(x+2)/[x(x−3)] (skratili x+3 i x+6)"},
    {txt:"Oduzmi [FRAC:5|x−3]: 3(x+2)/[x(x−3)] − [FRAC:5|x−3] = [3(x+2) − 5x]/[x(x−3)] = (−2x + 6)/[x(x−3)] = −2(x−3)/[x(x−3)] = −[FRAC:2|x]",final:true},
    {txt:"Provjera za x = 1 (u domeni): −2/1 = −2; original: (16/(−2) + 1/8)·(4/7) − 5/(−2) ≈ (−7,875)·0,571 + 2,5 ≈ −4,5 + 2,5 = −2 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (2/x) = student pogriješi predznak — najčešće u 9 − x² = −(x − 3)(x + 3); C (10(x+3)/(x(x−3))) = student NE oduzme 5/(x−3), samo izvrši množenje; D (2(x−3)/(5x(x+3))) = student pogriješi pri kombiniranju razlomaka.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Faktoriziraj SVE brojnike i nazivnike (kvadrat binoma, razlika kvadrata) prije skraćivanja.",note:"postupak",final:true},{txt:"Intuicija: Pažnja na predznak kod 9 − x² = −(x² − 9) = −(x − 3)(x + 3) — najčešće mjesto greške.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Faktoriziraj SVE brojnike i nazivnike (kvadrat binoma, razlika kvadrata) prije skraćivanja.","Pažnja na predznak kod 9 − x² = −(x² − 9) = −(x − 3)(x + 3) — najčešće mjesto greške.","Rezultat vrijedi za sve x iz domene, tj. x ∉ {0, 3, −3, −6} (sva mjesta gdje je nazivnik = 0).","Strategija: prvo srediti zagrade (zbroj razlomaka), pa pomnožiti, pa oduzeti — ne sve odjednom.","Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:8,type:"mc",warn:"Pazi: isti put d u oba smjera; d/80 + d/75 = 6,2 h; riješi po d.",topic:"al",points:1,
  q:"Autobus je od jednog grada do drugog i natrag vozio 6 sati i 12 minuta. Prosječna brzina u jednom smjeru bila mu je 80 km/h, a u drugom 75 km/h. Koliki je put autobus prešao?",
  opts:["480 km","480,5 km","481 km","481,5 km"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Neka je d udaljenost između gradova u km."},
    {txt:"Vrijeme ukupno: d/80 + d/75 = 6 + 12/60 = 6,2 h"},
    {txt:"Zajednički nazivnik: d(75 + 80)/(80 · 75) = 6,2 ⇒ d · 155/6000 = 6,2"},
    {txt:"d = 6,2 · 6000/155 = 240 km"},
    {txt:"Ukupni put (tam i natrag): 2d = 480 km",final:true},
    {txt:"Provjera: t₁ = 240/80 = 3 h, t₂ = 240/75 = 3,2 h; ukupno 6,2 h = 6 h 12 min ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (480,5) = student koristi prosječnu brzinu (80+75)/2 = 77,5 i krivo dijeli; C (481) = računska zaokružna greška; D (481,5) = krivo prebaci 6h 12min u 6,2h kao 6,5h ili 6,12 h.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Vrijeme = put / brzina (osnovna formula).",note:"postupak",final:true},{txt:"Intuicija: Pažnja: prosječna brzina kod nejednakih dijelova nije aritmetička sredina, već harmonijska: v_avg = 2v₁v₂/(v₁+v₂).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Vrijeme = put / brzina (osnovna formula).","Pažnja: prosječna brzina kod nejednakih dijelova nije aritmetička sredina, već harmonijska: v_avg = 2v₁v₂/(v₁+v₂).","Česta greška: zbrojiti vremena pogrešno (12 min = 0,2 h, ne 0,12 h).","Strategija: jedna nepoznanica d za udaljenost, dva izraza za vrijeme — sustav s jednom jednadžbom.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:9,type:"mc",warn:"Pazi: količina SOLI je stalna (0,004·900); postavi 0,004·900 = 0,01·(900 − x).",topic:"al",points:1,
  q:"Morska voda sadrži 0,4 % soli. Koliko litara vode treba ispariti da od 900 litara morske vode ostane otopina od 1 % soli?",
  opts:["90 litara","225 litara","360 litara","540 litara"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Količina soli ostaje konstantna: 900 · 0,004 = 3,6 kg"},
    {txt:"Nakon isparavanja x litara, ostaje 900 − x litara otopine s koncentracijom 1 %:"},
    {txt:"3,6/(900 − x) = 0,01 ⇒ 900 − x = 360"},
    {txt:"x = 540 litara",final:true},
    {txt:"Provjera: nakon 540 L isparavanja ostaje 360 L; soli je 3,6 kg → koncentracija = 3,6/360 = 0,01 = 1% ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (90) = student inverzno postavi omjer 0,4/1 ili pomiješa promile/postotke; B (225) = krivi izračun 900/4 ili sl.; C (360) = student daje preostalu vodu (360 L), ne ispareno (540 L) — pažljivo čitati pitanje!",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pri isparavanju otapala (vode) koncentracija otopljene tvari (soli) raste, ali apsolutna masa otopljene tvari ostaje konstantna.",note:"postupak",final:true},{txt:"Intuicija: Strategija: postavi jednadžbu na bazi konstantne mase soli, ne volumena vode.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pri isparavanju otapala (vode) koncentracija otopljene tvari (soli) raste, ali apsolutna masa otopljene tvari ostaje konstantna.","Strategija: postavi jednadžbu na bazi konstantne mase soli, ne volumena vode.","Česta greška: pitanje traži [B:isparenu] vodu, a student daje [B:preostalu] otopinu — tipičan distractor (C).","Provjera dimenzija: kg/L = 0,01 (postotak kao decimala) ✓","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:10,img:true,type:"mc",warn:"Pazi: prvo f(1) s grafa, pa f(te vrijednosti); čitaj graf dvaput.",topic:"fun",points:1,
  img:true,
  q:"Na slici je graf funkcije f. Koliko je (f ∘ f)(1)?",
  opts:["−2","−1","1","2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"S grafa očitavamo f(1) = 0 (nultočka parabole)."},
    {txt:"Zatim f(f(1)) = f(0)."},
    {txt:"S grafa: f(0) = −1 (otvoren krug na y-osi pokazuje vrijednost u x = 0)."},
    {txt:"(f ∘ f)(1) = −1",final:true},
    {txt:"Provjera: (f ∘ f)(1) znači f primijenjeno DVAPUT — prvo na 1, pa na rezultat. f(1) = 0; f(0) = −1; krajnji rezultat = −1 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (−2) = student očitava minimum parabole (najnižu točku grafa) misleći da je to f(0); C (1) = student vraća f(1) = 0 i misli da je gotov, ili greško očitava f(0) = 1; D (2) = krivo zamišlja kompoziciju kao f(1) + f(1).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Kompozicija: (f ∘ f)(x) = f(f(x)). Redoslijed: PRVO unutarnji f, pa VANJSKI f primjenjuje se na rezultat.",note:"postupak",final:true},{txt:"Intuicija: S grafa očitavamo vrijednosti: prazni krug na (1, 0) → f(1) = 0; prazni krug na (0, −1) → f(0) = −1.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Kompozicija: (f ∘ f)(x) = f(f(x)). Redoslijed: PRVO unutarnji f, pa VANJSKI f primjenjuje se na rezultat.","S grafa očitavamo vrijednosti: prazni krug na (1, 0) → f(1) = 0; prazni krug na (0, −1) → f(0) = −1.","Česta greška: brkanje (f ∘ f)(1) s f(1) (samo jedna primjena) ili s f(1)·f(1).","Pažnja na otvorene/zatvorene kružiće na grafu — otvoren = vrijednost u toj točki, ne rub.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:11,img:true,type:"mc",warn:"Pazi: potencija točke — AE·BE = CE·DE → x·6 = 3·7.",topic:"geom",points:2,
  img:true,
  q:"Na skici su kružnica i njezine tetive [B:AB] i [B:CD] koje se sijeku u točki E. Duljine su: |DE| = 7 cm, |BE| = 6 cm, |CE| = 3 cm, |AE| = x cm. Koliko je x?",
  opts:["2","2,7","3,5","4"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Teorem o sječicama kroz unutrašnju točku (tetive): |AE| · |BE| = |CE| · |DE|"},
    {txt:"x · 6 = 3 · 7 ⇒ 6x = 21"},
    {txt:"x = [FRAC:21|6] = 3,5 cm",final:true},
    {txt:"Provjera: 3,5 · 6 = 21 i 3 · 7 = 21 ✓ (jednaki umnošci, teorem zadovoljen).",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (2) = student koristi |AE| · |CE| = |BE| · |DE| (krivo postavi tetive); B (2,7) = računska greška ili krivi izbor formule; D (4) = student dijeli s krivim brojem (možda |DE|/|BE| · |CE| pogrešno).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Teorem o tetivama (potencija točke): kad se dvije tetive sijeku u točki E unutar kružnice, umnošci odsječaka obiju tetiva su jednaki: |AE| · |EB| = |CE| · |ED|.",note:"postupak",final:true},{txt:"Intuicija: Geometrijska intuicija: točka E je 'jednako daleko' od kružnice u oba smjera u smislu produkta odsječaka.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Teorem o tetivama (potencija točke): kad se dvije tetive sijeku u točki E unutar kružnice, umnošci odsječaka obiju tetiva su jednaki: |AE| · |EB| = |CE| · |ED|.","Geometrijska intuicija: točka E je 'jednako daleko' od kružnice u oba smjera u smislu produkta odsječaka.","Česta greška: krivo upariti odsječke (npr. AE s CE umjesto AE s EB) — uvijek odsječci ISTE tetive su lijevo i desno od E.","Alt metoda: trokuti △AEC i △DEB su slični (kut nad istim lukom), pa AE/CE = DE/BE — vodi do iste jednadžbe.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer."]
},
  {id:12,type:"mc",warn:"Pazi: V tetraedra = a³/(6√2) (= a³√2/12); uvrsti a = 5.",topic:"geom",points:2,
  q:"Koliki je obujam pravilne uspravne trostrane piramide (tetraedra) kojoj su svi bridovi duljine 5 cm?",
  opts:["14,73 cm³","15,62 cm³","18,04 cm³","20,83 cm³"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Za pravilni tetraedar brida a vrijedi: V = a³√2/12"},
    {txt:"V = 5³ · √2/12 = 125 · 1,4142/12 ≈ 125 · 0,1178"},
    {txt:"V ≈ 14,73 cm³",final:true},
    {txt:"Provjera kao baza × visina/3: B = 5²·√3/4 ≈ 10,825; H = 5·√(2/3) ≈ 4,082; V = 10,825 · 4,082 / 3 ≈ 14,73 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (15,62) = student koristi krivu visinu, npr. a·√3/2 (visinu trokuta umjesto piramide); C (18,04) = krivi izračun baze (npr. a²/2 = 12,5); D (20,83) = student koristi formulu kocke V = a³/6 ili kvadar.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilni tetraedar (svi bridovi jednaki): V = a³√2/12 = a³/(6√2).",note:"postupak",final:true},{txt:"Intuicija: Baza je jednakostranični trokut: B = a²√3/4; visina piramide (od baze do vrha) H = a√(2/3); V = B · H/3.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilni tetraedar (svi bridovi jednaki): V = a³√2/12 = a³/(6√2).","Baza je jednakostranični trokut: B = a²√3/4; visina piramide (od baze do vrha) H = a√(2/3); V = B · H/3.","Česta greška: brkanje visine piramide (do vrha) s visinom trokuta-baze.","Alt provjera dimenzija: a³ daje cm³ ✓; kombinacija s √2/12 ili sl. faktora < 1 daje očekivano malen V (~15 cm³ za stranicu 5 cm).","Provjera: skiciraj figuru i izmjeri svojstvo geometrijski.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer."]
},
  {id:13,type:"mc",warn:"Pazi: x³ − y³ = (x − y)(x² + xy + y²); xy nađi iz (x − y)² = x² − 2xy + y² → 36 = 22 − 2xy.",topic:"al",points:2,
  q:"Ako za realne brojeve x, y vrijedi x − y = 6 i x² + y² = 22, koliko je x³ − y³?",
  opts:["16","90","154","218"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"(x − y)² = x² − 2xy + y² ⇒ 36 = 22 − 2xy ⇒ xy = −7"},
    {txt:"Razlika kubova: x³ − y³ = (x − y)(x² + xy + y²)"},
    {txt:"= 6 · (22 + (−7)) = 6 · 15 = 90",final:true},
    {txt:"Provjera: konkretne vrijednosti x, y? x² + y² = 22, x − y = 6 → može biti x ≈ 5,43, y ≈ −0,57 (rješenja kvadratne); x³ − y³ ≈ 160 − 0,18·(−0,57) ≈ provjera kalkulatorom dovoljna ili ostaviti formalnu.",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (16) = student računa 22 − 6 = 16 (potpuno krivo); C (154) = student koristi (x−y)³ = 216, pa 216 − 6·xy = 216 − 6·(−7) = 258 ili sl. — krivo gdje primijeni formulu; D (218) = student dobije xy = 7 (krivi predznak) i računa 6(22+7) = 174… ili krivi sl.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Razlika kubova: a³ − b³ = (a − b)(a² + ab + b²) — ključna formula, treba znati napamet.",note:"postupak",final:true},{txt:"Intuicija: Kvadrat razlike: (a − b)² = a² − 2ab + b² — koristi za izvlačenje xy iz datog x²+y².",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Razlika kubova: a³ − b³ = (a − b)(a² + ab + b²) — ključna formula, treba znati napamet.","Kvadrat razlike: (a − b)² = a² − 2ab + b² — koristi za izvlačenje xy iz datog x²+y².","Strategija: ne treba rješavati x i y eksplicitno — sve se dobije preko simetričnih izraza (x+y, xy).","Česta greška: predznak xy — ako (x−y)² = 36 i x²+y² = 22, onda 22 − 2xy = 36 → −2xy = 14 → xy = [B:−7] (negativno!).","Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:14,type:"mc",warn:"Pazi: spoji u log₂((x − 2)(x + 3)) = log₂(4(2x − 3)); riješi, ali PROVJERI domenu (svi argumenti > 0).",topic:"fun",points:2,
  q:"Koliko realnih rješenja ima jednadžba log₂(x − 2) + log₂(x + 3) = 2 + log₂(2x − 3)?",
  opts:["nijedno","jedno","dva","tri"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Uvjeti definiranosti: x > 2, x > −3, x > 3/2 ⇒ x > 2"},
    {txt:"Zbroj logaritama: log₂((x − 2)(x + 3)) = 2 + log₂(2x − 3)"},
    {txt:"2 = log₂ 4, pa: log₂((x − 2)(x + 3)) = log₂(4(2x − 3))"},
    {txt:"Logaritamska funkcija je injektivna: (x − 2)(x + 3) = 4(2x − 3)"},
    {txt:"x² + x − 6 = 8x − 12 ⇒ x² − 7x + 6 = 0"},
    {txt:"(x − 1)(x − 6) = 0 ⇒ x = 1 ili x = 6"},
    {txt:"Provjera domene (x > 2): x = 1 odbacujemo, x = 6 prihvaćamo."},
    {txt:"Točno jedno rješenje: x = 6.",final:true},
    {txt:"Provjera: za x = 6: log₂ 4 + log₂ 9 = 2 + log₂ 9 ⇒ log₂(36) = 2 + log₂ 9 ⇒ log₂(36) = log₂ 4 + log₂ 9 = log₂ 36 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (nijedno) = student baca i x = 6 jer možda 'pogrešno' provjerava domenu; C (dva) = student NE provjeri domenu i prihvati i x = 1 i x = 6; D (tri) = student dobije nelinearni izraz s tri rješenja (krivi algebra).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: logₐ b + logₐ c = logₐ(bc) (uz uvjete definiranosti — svaki argument > 0).",note:"postupak",final:true},{txt:"Intuicija: Domena za log₂(x − 2) + log₂(x + 3) = 2 + log₂(2x − 3): x > 2 ∩ x > −3 ∩ x > 3/2 = x > 2.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["logₐ b + logₐ c = logₐ(bc) (uz uvjete definiranosti — svaki argument > 0).","Domena za log₂(x − 2) + log₂(x + 3) = 2 + log₂(2x − 3): x > 2 ∩ x > −3 ∩ x > 3/2 = x > 2.","Strategija: prvo pronaći domenu, pa rješavati — često se eliminira pola rješenja.","Česta greška: zaboraviti provjeriti domenu i prihvatiti oba rješenja x = 1 i x = 6 (distractor C — najčešći fail).","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:15,type:"mc",warn:"Pazi: a = 10101 razmiče znamenke za 4 mjesta (nema prijenosa); koeficijenti 1…6 postaju blokovi znamenki.",topic:"br",points:2,
  q:"Zadani su brojevi a = 10101 i b = a². Zapis prirodnog broja N s pomoću broja a glasi N = 1·a⁵ + 2·a⁴ + 3·a³ + 4·a² + 5a + 6. Ako N zapišemo u obliku N = A·b² + Bb + C, pri čemu su brojevi A, B, C ∈ {0, 1, 2, …, b − 1}, kolike su vrijednosti brojeva A i C?",
  opts:["A = 0, C = 50511","A = 0, C = 102030195","A = 10103, C = 50511","A = 10103, C = 102030195"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"b = a², pa a² = b, a³ = a · b, a⁴ = b², a⁵ = a · b²"},
    {txt:"N = 1 · (a · b²) + 2 · b² + 3 · (a · b) + 4 · b + 5a + 6"},
    {txt:"Grupiramo po potencijama b: N = (a + 2)·b² + (3a + 4)·b + (5a + 6)"},
    {txt:"A = a + 2 = 10101 + 2 = 10103"},
    {txt:"C = 5a + 6 = 5 · 10101 + 6 = 50505 + 6 = 50511"},
    {txt:"Provjera da su A, C < b: b = 10101² = 102030201; 10103 < b ✓, 50511 < b ✓",final:true},
    {txt:"Provjera identitetom: N = A·b² + B·b + C s A = 10103, B = 30307, C = 50511 zaista odgovara originalnoj sumi 1·a⁵ + 2·a⁴ + 3·a³ + 4·a² + 5a + 6 (proširenjem b² i b natrag preko a) ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (A=0, C=50511) = student misli da se a⁵ ne uklopi u koeficijent kraj b² (krivo — a⁵ = a·b² = (a+0)·b², gdje a sam ulazi u A); B (A=0, C=102030195) = krivo izračunat C; D (A=10103, C=102030195) = ima točan A ali zbroji sve niže članove kao C bez svođenja na bazu b.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Zapis N u bazi b: ako su A, B, C iz {0, 1, …, b − 1}, onda je to jedinstveni zapis broja N u bazi b (algebra razrjeđenih sustava).",note:"postupak",final:true},{txt:"Intuicija: Ključ grupiranja: a² = b, a³ = ab, a⁴ = b², a⁵ = ab² — sve potencije a se mogu prevesti u kombinaciju potencija b s koeficijentima ovisnim o a.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Zapis N u bazi b: ako su A, B, C iz {0, 1, …, b − 1}, onda je to jedinstveni zapis broja N u bazi b (algebra razrjeđenih sustava).","Ključ grupiranja: a² = b, a³ = ab, a⁴ = b², a⁵ = ab² — sve potencije a se mogu prevesti u kombinaciju potencija b s koeficijentima ovisnim o a.","Trik: a⁵ = a·b², pa koeficijent uz b² je (a+2), ne 1; krivo je vidjeti a⁵ kao 'samo' 1·b² · b/... — koeficijent SE PROŠIRUJE.","Česta greška: pomisliti da je A = 1 (koeficijent uz a⁵) — ali grupiranje po b² daje A = (a + 2) jer i 2·a⁴ = 2·b² doprinosi.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:16,type:"sa",topic:"al",points:1,
  q:"Zadana su dva uzastopna neparna broja. Kada se utrostruči manji broj, dobije se broj za 31 veći od udvostručenog većeg broja. Koja je vrijednost manjeg broja?",
  sol:{ans:"35",alt:["35","n = 35"]},
  steps:[
    {txt:"Uzastopni neparni brojevi: manji = n, veći = n + 2 (oba neparna)."},
    {txt:"3n = 2(n + 2) + 31"},
    {txt:"3n = 2n + 4 + 31 ⇒ n = 35",final:true},
    {txt:"Provjera: manji n = 35, veći n+2 = 37; 3·35 = 105; 2·37 + 31 = 74 + 31 = 105 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Uzastopni neparni brojevi se razlikuju za 2: ako je manji n, veći je n + 2 (i oba su neparna).",note:"postupak",final:true},{txt:"Intuicija: Utrostručiti = pomnožiti s 3; udvostručiti = pomnožiti s 2.",note:"intuicija",final:true},{txt:"Točan odgovor: 35 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Uzastopni neparni brojevi se razlikuju za 2: ako je manji n, veći je n + 2 (i oba su neparna).","Utrostručiti = pomnožiti s 3; udvostručiti = pomnožiti s 2.","Za 31 veći znači = + 31 (zbroj, ne umnožak).","Česta greška: zamijeniti redoslijed (utrostručiti veći umjesto manjeg) — pažljivo čitati.","Provjera supstitucijom: uvrsti x = 35 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:17,type:"sa",topic:"al",points:1,
  q:"Izrazite b iz formule P = [FRAC:b + B|2] · h.",
  sol:{ans:"b = [FRAC:2P|h] − B",alt:["2P/h - B","(2P-Bh)/h","b = 2P/h - B"]},
  solFormula:{pre:"b = ", frac:[["2P","h"]], post:" − B"},
  steps:[
    {txt:"P = (b + B) · h/2"},
    {txt:"2P = (b + B) · h"},
    {txt:"2P/h = b + B"},
    {txt:"b = [FRAC:2P|h] − B",final:true},
    {txt:"Provjera: za P = 10, h = 4, B = 3 → b = 20/4 − 3 = 2; original: P = (2+3)/2 · 4 = 10 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula za površinu trapeza: P = (a + c)/2 · h, gdje su a, c osnovice, h visina.",note:"postupak",final:true},{txt:"Intuicija: Uvjet: h ≠ 0 (inače trapezu degeneriran u dužinu).",note:"intuicija",final:true},{txt:"Točan odgovor: b = [FRAC:2P|h] − B ✓",note:"odgovor",final:true}
  ],
  why:["Formula za površinu trapeza: P = (a + c)/2 · h, gdje su a, c osnovice, h visina.","Uvjet: h ≠ 0 (inače trapezu degeneriran u dužinu).","Kod izražavanja: izoliraj željenu varijablu primjenom inverznih operacija (·, /, +, −) redom.","Česta greška: zaboraviti pomnožiti cijelu desnu stranu s 2 (ne samo brojnik).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:18.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Koliki je zbroj rješenja jednadžbe 9 = 5x² − 15x?",
  sol:{ans:"3",alt:["3"]},
  steps:[
    {txt:"Sređujemo: 5x² − 15x − 9 = 0"},
    {txt:"Vièteova formula za zbroj korijena: x₁ + x₂ = −[FRAC:b|a] = [FRAC:15|5] = 3",final:true},
    {txt:"Provjera: kvadratna formula daje x₁,₂ = (15 ± √(225+180))/10 = (15 ± √405)/10; zbroj = 30/10 = 3 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Vièteove formule za ax² + bx + c = 0: x₁ + x₂ = −b/a, x₁ · x₂ = c/a.",note:"postupak",final:true},{txt:"Intuicija: Ne moramo rješavati jednadžbu ako tražimo samo zbroj ili umnožak — direktno iz koeficijenata.",note:"intuicija",final:true},{txt:"Točan odgovor: 3 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
  ],
  why:["Vièteove formule za ax² + bx + c = 0: x₁ + x₂ = −b/a, x₁ · x₂ = c/a.","Ne moramo rješavati jednadžbu ako tražimo samo zbroj ili umnožak — direktno iz koeficijenata.","Pažnja na predznak: u 5x² − 15x − 9 = 0 je b = −15, pa −b/a = 15/5 = 3.","Česta greška: pisati Vièteu kao b/a (bez minusa) — uvijek je [B:−b]/a za zbroj.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Riješite nejednadžbu (5 − 6x)x ≥ −4. Rješenje zapišite s pomoću intervala.",
  sol:{ans:"[−[FRAC:1|2], [FRAC:4|3]]",alt:["[−1/2, 4/3]","[−0,5; 4/3]","[−1/2,4/3]","−0,5 ≤ x ≤ 4/3","x ∈ [−1/2, 4/3]"]},
  solFormula:{pre:"[", frac:[["−1","2"]], post:", ", frac2:[["4","3"]], post2:"]"},
  steps:[
    {txt:"5x − 6x² ≥ −4 ⇒ 6x² − 5x − 4 ≤ 0"},
    {txt:"Diskriminanta: D = 25 + 96 = 121 ⇒ √D = 11"},
    {txt:"Nultočke: x = (5 ± 11)/12 ⇒ x₁ = −1/2, x₂ = 4/3"},
    {txt:"Parabola prema gore (a = 6 > 0), ≤ 0 između nultočaka."},
    {txt:"x ∈ [−[FRAC:1|2], [FRAC:4|3]]",final:true},
    {txt:"Provjera: za x = 0 (sredina): (5 − 0)·0 = 0 ≥ −4 ✓; za x = −1 (van intervala): (5+6)·(−1) = −11 ≥ −4 ✗ (potvrđuje rubove).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Za ax² + bx + c ≤ 0 (a > 0): rješenje je zatvoreni interval između nultočaka.",note:"postupak",final:true},{txt:"Intuicija: Znak ≥ uključuje rubne točke, pa pišemo uglate zagrade [a, b] (zatvoreni interval).",note:"intuicija",final:true},{txt:"Točan odgovor: [−[FRAC:1|2], [FRAC:4|3]] ✓",note:"odgovor",final:true}
  ],
  why:["Za ax² + bx + c ≤ 0 (a > 0): rješenje je zatvoreni interval između nultočaka.","Znak ≥ uključuje rubne točke, pa pišemo uglate zagrade [a, b] (zatvoreni interval).","Strategija: prebaciti sve na jednu stranu (≤ ili ≥ 0), pronaći nultočke, pa odlučiti o predznaku između njih.","Česta greška: zaboraviti okrenuti smjer kad se množi/dijeli negativnim brojem.","Provjera supstitucijom: uvrsti x = [−[FRAC:1|2], [FRAC:4|3]] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2): C = n·D + m·K. Za 2 dana i 160 km = 866 kn; za 3 dana i 120 km = 723 kn.",
  q:"Kolika je cijena najma automobila po danu?",
  sol:{ans:"D = 49 kn",alt:["49","49 kn"]},
  steps:[
    {txt:"Sustav: 2D + 160K = 866 ... (1), 3D + 120K = 723 ... (2)"},
    {txt:"(1) · 3: 6D + 480K = 2 598; (2) · 2: 6D + 240K = 1 446"},
    {txt:"Oduzimanje: 240K = 1 152 ⇒ K = 4,80 kn/km"},
    {txt:"Iz (1): 2D = 866 − 160 · 4,80 = 866 − 768 = 98 ⇒ D = 49 kn",final:true},
    {txt:"Numerička provjera oba ulaza: 2·49 + 160·4,80 = 98 + 768 = 866 ✓; 3·49 + 120·4,80 = 147 + 576 = 723 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sustav dviju linearnih jednadžbi s dvije nepoznanice: eliminacija ili supstitucija.",note:"postupak",final:true},{txt:"Intuicija: Eliminacija: pomnoži jednadžbe konstantama tako da koeficijent jedne nepoznanice postane jednak, pa oduzmi.",note:"intuicija",final:true},{txt:"Točan odgovor: D = 49 kn ✓",note:"odgovor",final:true}
  ],
  why:["Sustav dviju linearnih jednadžbi s dvije nepoznanice: eliminacija ili supstitucija.","Eliminacija: pomnoži jednadžbe konstantama tako da koeficijent jedne nepoznanice postane jednak, pa oduzmi.","Strategija: ovdje ciljamo D; eliminacija K daje izravno jednadžbu samo s D.","Česta greška: pomiješati ulogu dana (n) i kilometara (m) u sustavu — dosljedno pratiti varijable.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2): koristi vrijednosti D i K iz prethodnog dijela.",
  q:"Koliko je plaćen najam automobila koji je u četiri dana prešao 240 km?",
  sol:{ans:"1 348 kn",alt:["1348","1 348","1348 kn"]},
  steps:[
    {txt:"C = n · D + m · K"},
    {txt:"C = 4 · 49 + 240 · 4,80"},
    {txt:"C = 196 + 1 152 = 1 348 kn",final:true},
    {txt:"Provjera dimenzija: dani · (kn/dan) + km · (kn/km) = kn + kn = kn ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Uvrstimo poznate parametre (D, K) i zadane vrijednosti (n, m) u formulu C = n·D + m·K.",note:"postupak",final:true},{txt:"Intuicija: D = 49 kn/dan (iz Q19,1); K = 4,8 kn/km — naslijeđeni iz prethodnog dijela.",note:"intuicija",final:true},{txt:"Točan odgovor: 1 348 kn ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Uvrstimo poznate parametre (D, K) i zadane vrijednosti (n, m) u formulu C = n·D + m·K.","D = 49 kn/dan (iz Q19,1); K = 4,8 kn/km — naslijeđeni iz prethodnog dijela.","Uvrstimo n = 4, m = 240: C = 4·49 + 240·4,8 = 196 + 1152 = 1348 kn.","Strategija: provjera dimenzija (kn/dan · dani = kn) brzo otkriva pogrešno množenje/dijeljenje.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:20.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Kolika je mjera [B:najmanjeg] kuta u pravokutnom trokutu čije su duljine kateta 12 cm i 6 cm?",
  sol:{ans:"α ≈ 26°33′54″",alt:["26°33'54\"","26°34'","≈26,57°","26,57"]},
  steps:[
    {txt:"Najmanji kut je nasuprot kraćoj kateti (6 cm)."},
    {txt:"tg α = 6/12 = 1/2"},
    {txt:"α = arctg(0,5) ≈ 26,5651° ≈ 26°33′54″",final:true},
    {txt:"Provjera: α + β = 90°, pa β ≈ 63°26′6″; tg β = 12/6 = 2, arctg 2 ≈ 63,4349° ≈ 63°26′6″ ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: U pravokutnom trokutu: tg(kut) = suprotna kateta / priležeća kateta.",note:"postupak",final:true},{txt:"Intuicija: Nasuprot manjoj kateti je manji šiljasti kut (kateta 6 < 12, pa je kut nasuprot 6 manji).",note:"intuicija",final:true},{txt:"Točan odgovor: α ≈ 26°33′54″ ✓",note:"odgovor",final:true},{txt:"Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.",note:"verifikacija",final:true}
  ],
  why:["U pravokutnom trokutu: tg(kut) = suprotna kateta / priležeća kateta.","Nasuprot manjoj kateti je manji šiljasti kut (kateta 6 < 12, pa je kut nasuprot 6 manji).","Pretvorba decimalnih stupnjeva u stupnjeve/minute/sekunde: 0,5651° · 60 ≈ 33,906′; 0,906′ · 60 ≈ 54″.","Česta greška: izračun arctg(12/6) = arctg(2) — krivi omjer daje veći kut.","Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:20.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Mjere kutova trokuta su u omjeru 3 : 5 : 4. Najdulja stranica tog trokuta je duljine 15 cm. Kolika je duljina najkraće stranice?",
  sol:{ans:"≈ 10,98 cm",alt:["10,98","10,98","≈10,98 cm"]},
  steps:[
    {txt:"Zbroj kutova trokuta: 3k + 5k + 4k = 180° ⇒ k = 15°"},
    {txt:"Kutovi: 45°, 75°, 60°"},
    {txt:"Najdulja stranica je nasuprot najvećeg kuta (75°). Najkraća je nasuprot najmanjeg kuta (45°)."},
    {txt:"Sinusov poučak: a/sin 45° = 15/sin 75°"},
    {txt:"a = 15 · sin 45°/sin 75° ≈ 15 · 0,7071/0,9659 ≈ 10,98 cm",final:true},
    {txt:"Provjera omjera: 10,98/sin 45° ≈ 15,53; 15/sin 75° ≈ 15,53 ✓ (jednaki omjeri po sinusovu poučku).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sinusov poučak: a/sin A = b/sin B = c/sin C — omjer stranice i sinusa nasuprotnog kuta je konstanta (= 2R).",note:"postupak",final:true},{txt:"Intuicija: U trokutu: najkraćoj stranici pripada najmanji kut, najduljoj najveći (monotonost).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 10,98 cm ✓",note:"odgovor",final:true}
  ],
  why:["Sinusov poučak: a/sin A = b/sin B = c/sin C — omjer stranice i sinusa nasuprotnog kuta je konstanta (= 2R).","U trokutu: najkraćoj stranici pripada najmanji kut, najduljoj najveći (monotonost).","Strategija s omjerom 3:5:4 (kutovi): 3+5+4 = 12, jedan dio = 180°/12 = 15°, pa kutovi 45°, 75°, 60°.","Česta greška: krivo identificirati najveći kut — najduža stranica (15 cm) je nasuprot najveg kuta (75°).","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:21.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Zadan je kompleksan broj z = 2·i⁷·(a − i), gdje je a ∈ ℝ. Zapišite ga u standardnom obliku (z = x + yi, x, y ∈ ℝ).",
  sol:{ans:"z = −2 − 2ai",alt:["−2 - 2ai","−2-2ai"]},
  steps:[
    {txt:"i⁷ = i⁴⁺³ = i³ = −i (jer i² = −1, i³ = −i)"},
    {txt:"z = 2 · (−i) · (a − i) = −2i · (a − i)"},
    {txt:"= −2ai + 2i² = −2ai − 2"},
    {txt:"z = −2 − 2ai",final:true},
    {txt:"Provjera za a = 1: z = 2·i⁷·(1 − i) = 2·(−i)·(1 − i) = −2i + 2i² = −2 − 2i ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Potencije od i: i¹ = i, i² = −1, i³ = −i, i⁴ = 1 (period 4).",note:"postupak",final:true},{txt:"Intuicija: i⁷ = i^(7 mod 4) = i³ = −i — dovoljno znati period 4.",note:"intuicija",final:true},{txt:"Točan odgovor: z = −2 − 2ai ✓",note:"odgovor",final:true}
  ],
  why:["Potencije od i: i¹ = i, i² = −1, i³ = −i, i⁴ = 1 (period 4).","i⁷ = i^(7 mod 4) = i³ = −i — dovoljno znati period 4.","Standardni oblik kompleksnog broja: z = x + yi gdje x, y ∈ ℝ — separi realni od imaginarnog dijela.","Česta greška: brkanje predznaka kod i² = −1 — daje pogrešan realni dio.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Zadani su brojevi z₁ = [FRAC:2|3](cos [FRAC:2π|3] + i·sin [FRAC:2π|3]) i z₂ = 3(cos [FRAC:π|6] + i·sin [FRAC:π|6]). Broj z₁ · z₂ zapišite u trigonometrijskom obliku.",
  sol:{ans:"z₁ · z₂ = 2(cos [FRAC:5π|6] + i·sin [FRAC:5π|6])",alt:["2(cos(5π/6) + i sin(5π/6))","2(cos 5π/6 + i sin 5π/6)"]},
  solFormula:{pre:"z₁·z₂ = 2(cos 5π/6 + i·sin 5π/6)"},
  steps:[
    {txt:"Množenje u trigonometrijskom obliku: moduli se množe, argumenti zbrajaju."},
    {txt:"|z₁ · z₂| = (2/3) · 3 = 2"},
    {txt:"arg(z₁ · z₂) = 2π/3 + π/6 = 4π/6 + π/6 = 5π/6"},
    {txt:"z₁ · z₂ = 2(cos [FRAC:5π|6] + i·sin [FRAC:5π|6])",final:true},
    {txt:"Provjera modula: |z₁ · z₂| = |z₁| · |z₂| = (2/3) · 3 = 2 ✓; arg = 2π/3 + π/6 = 5π/6 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula množenja u trig. obliku: z₁z₂ = r₁r₂(cos(θ₁ + θ₂) + i·sin(θ₁ + θ₂)).",note:"postupak",final:true},{txt:"Intuicija: |z₁| = 2/3, arg(z₁) = 2π/3; |z₂| = 3, arg(z₂) = π/6.",note:"intuicija",final:true},{txt:"Točan odgovor: z₁ · z₂ = 2(cos [FRAC:5π|6] + i·sin [FRAC:5π|6]) ✓",note:"odgovor",final:true}
  ],
  why:["Formula množenja u trig. obliku: z₁z₂ = r₁r₂(cos(θ₁ + θ₂) + i·sin(θ₁ + θ₂)).","|z₁| = 2/3, arg(z₁) = 2π/3; |z₂| = 3, arg(z₂) = π/6.","Množenje: |z₁·z₂| = 2, arg = 2π/3 + π/6 = 5π/6.","z₁·z₂ = 2(cos 5π/6 + i·sin 5π/6).","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:22.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Odredite opće rješenje jednadžbe cos²x − cos x − 2 = 0.",
  sol:{ans:"x = π + 2kπ, k ∈ ℤ",alt:["x = π + 2kπ","π + 2kπ","x=pi+2kpi"]},
  steps:[
    {txt:"Supstitucija t = cos x: t² − t − 2 = 0"},
    {txt:"(t − 2)(t + 1) = 0 ⇒ t = 2 ili t = −1"},
    {txt:"t = 2 nije moguće jer |cos x| ≤ 1"},
    {txt:"cos x = −1 ⇒ x = π + 2kπ, k ∈ ℤ",final:true},
    {txt:"Provjera: za x = π: cos²π − cos π − 2 = 1 − (−1) − 2 = 0 ✓; za x = 3π: cos²3π − cos 3π − 2 = 1 + 1 − 2 = 0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: cos x dostiže vrijednost −1 samo u točkama x = π + 2kπ (jednom po periodu 2π).",note:"postupak",final:true},{txt:"Intuicija: Supstitucija t = cos x svodi trigonometrijsku jednadžbu na algebarsku — standardni trik.",note:"intuicija",final:true},{txt:"Točan odgovor: x = π + 2kπ, k ∈ ℤ ✓",note:"odgovor",final:true}
  ],
  why:["cos x dostiže vrijednost −1 samo u točkama x = π + 2kπ (jednom po periodu 2π).","Supstitucija t = cos x svodi trigonometrijsku jednadžbu na algebarsku — standardni trik.","Pažnja: t² − t − 2 = 0 daje t = 2 ili t = −1, ali |cos x| ≤ 1 isključuje t = 2.","Česta greška: zaboraviti odbaciti t = 2 (van slike kosinusa) — daje lažna rješenja.","Provjera kalkulatorom: paziti na DEG/RAD mode.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:22.2,type:"proof",topic:"trig",points:1,
  graphType:"trig",
  graphRef:{pts:[[0,-2],[1.571,0],[3.14,2],[4.712,0],[6.283,-2]]},
  img:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Na intervalu [0, 2π] nacrtajte graf funkcije f(x) = 2 sin(x − [FRAC:π|2]).",
  sol:{svgFn:SvgSol22b_2012JesenA,ex:"Graf kosinusoide zrcaljen preko x-osi: f(x) = −2 cos x. Amplituda 2, period 2π."},
  steps:[
    {txt:"Identitet: sin(x − π/2) = −cos x, pa f(x) = −2 cos x"},
    {txt:"Amplituda: 2, period: 2π"},
    {txt:"Ključne točke na [0, 2π]: f(0) = −2 (min), f([FRAC:π|2]) = 0, f(π) = 2 (max), f([FRAC:3π|2]) = 0, f(2π) = −2 (min)",final:true},
    {txt:"Provjera: f(0) = 2 sin(0 − π/2) = 2·(−1) = −2 ✓; f(π) = 2 sin(π − π/2) = 2·sin(π/2) = 2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Identiteti faznog pomaka: sin(x − π/2) = −cos x, cos(x − π/2) = sin x — osnovne trigonometrijske transformacije.",note:"postupak",final:true},{txt:"Intuicija: Negativan multiplikator zrcali graf preko x-osi i amplificira amplitudu na 2.",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Provjera kalkulatorom: paziti na DEG/RAD mode.",note:"verifikacija",final:true}
  ],
  why:["Identiteti faznog pomaka: sin(x − π/2) = −cos x, cos(x − π/2) = sin x — osnovne trigonometrijske transformacije.","Negativan multiplikator zrcali graf preko x-osi i amplificira amplitudu na 2.","Strategija crtanja: pronaći nul-točke, max i min na intervalu — to je dovoljno za grubi sketch sinusoide.","Česta greška: zaboraviti predznak (sin(x − π/2) = −cos x, ne +cos x).","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu."]
},
  {id:23.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (1. dio od 2): Primjenom pesticida kontrolira se populacija komaraca oko jezera. Procjenjuje se da je broj komaraca opisan formulom B = 500 000 · 2^(−0,06667·t), gdje je t vrijeme korištenja pesticida izraženo u godinama.",
  q:"Koliko godina treba koristiti pesticid da bi se broj komaraca prepolovio?",
  sol:{ans:"t = 15 godina",alt:["15","15 godina"]},
  steps:[
    {txt:"500 000 · 2^(−0,06667t) = 250 000 ⇒ 2^(−0,06667t) = 1/2 = 2⁻¹"},
    {txt:"−0,06667t = −1 ⇒ t = 1/0,06667 ≈ 15 godina",final:true},
    {txt:"Provjera: B(15) = 500 000 · 2^(−1,00005) ≈ 500 000 · 0,4999 ≈ 250 000 ✓ (točno polovina početne populacije).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Eksponencijalni pad: ako B(t) = B₀ · 2^(−t/T), onda je T vrijeme poluraspada (half-life).",note:"postupak",final:true},{txt:"Intuicija: Ovdje 0,06667 ≈ 1/15, pa je T = 15 — vrijeme za prepolavljanje populacije.",note:"intuicija",final:true},{txt:"Točan odgovor: t = 15 godina ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf funkcije i očitaj traženu vrijednost.",note:"verifikacija",final:true}
  ],
  why:["Eksponencijalni pad: ako B(t) = B₀ · 2^(−t/T), onda je T vrijeme poluraspada (half-life).","Ovdje 0,06667 ≈ 1/15, pa je T = 15 — vrijeme za prepolavljanje populacije.","Strategija za prepolovljenje: 2^(−kt) = 1/2 → −kt = −1 → t = 1/k.","Česta greška: brkati 2^x i e^x — provjera baze u formuli (ovdje je baza 2).","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:23.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2): B = 500 000 · 2^(−0,06667·t). Pesticid se koristio 20 godina, zatim su pesticidi prestali biti primjenjivani. Godinu dana nakon prekida populacija komaraca porasla je za 30 %.",
  q:"Koliko je komaraca bilo godinu dana nakon prekida primjene pesticida?",
  sol:{ans:"≈ 257 941",alt:["257 941","257941","≈257 941"]},
  steps:[
    {txt:"Broj komaraca na kraju 20. godine: B(20) = 500 000 · 2^(−0,06667 · 20) = 500 000 · 2^(−1,3333) ≈ 198 416"},
    {txt:"Nakon godine dana bez pesticida, populacija poraste za 30 %:"},
    {txt:"B_nova = 198 416 · 1,30 ≈ 257 941 ≈ 257 941",final:true},
    {txt:"Provjera trendom: B(20) ≈ 198 416 (≈ 4× manje od 500 000); +30% daje ≈ 257 941 — između B(15) i B(0), realno za godinu rasta.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: 2^(−1,3333) ≈ 0,3969 (kalkulator); ekvivalent 2^(−4/3) jer 0,06667 · 20 ≈ 4/3.",note:"postupak",final:true},{txt:"Intuicija: Povećanje za 30% znači množenje faktorom 1,30 (osnovno: 100% + 30% = 130%).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 257 941 ✓",note:"odgovor",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["2^(−1,3333) ≈ 0,3969 (kalkulator); ekvivalent 2^(−4/3) jer 0,06667 · 20 ≈ 4/3.","Povećanje za 30% znači množenje faktorom 1,30 (osnovno: 100% + 30% = 130%).","Strategija: razdvoji procese — prvo izračunaj populaciju na kraju primjene pesticida, pa primijeni rast.","Česta greška: dodati 30% na 500 000 (početnu) umjesto na B(20) — pažljivo redom.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:24.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliki je koeficijent uz x² u razvoju potencije binoma (2x + 1)⁶?",
  sol:{ans:"60",alt:["60"]},
  steps:[
    {txt:"Opći član binomnog razvoja: C(6, k) · (2x)^(6−k) · 1^k = C(6, k) · 2^(6−k) · x^(6−k)"},
    {txt:"Za x²: 6 − k = 2 ⇒ k = 4"},
    {txt:"Koeficijent: C(6, 4) · 2² = 15 · 4 = 60",final:true},
    {txt:"Provjera djelomičnim razvojem: (2x+1)⁶ = ... + C(6,4)·(2x)²·1⁴ + ... = 15·4x² + ... = 60x² + ... ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Binomni teorem: (a + b)ⁿ = Σ C(n, k) · aⁿ⁻ᵏ · bᵏ za k = 0, 1, ..., n.",note:"postupak",final:true},{txt:"Intuicija: C(n, k) = n!/(k!·(n−k)!); simetrija: C(n, k) = C(n, n−k), pa C(6, 4) = C(6, 2) = 15.",note:"intuicija",final:true},{txt:"Točan odgovor: 60 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Binomni teorem: (a + b)ⁿ = Σ C(n, k) · aⁿ⁻ᵏ · bᵏ za k = 0, 1, ..., n.","C(n, k) = n!/(k!·(n−k)!); simetrija: C(n, k) = C(n, n−k), pa C(6, 4) = C(6, 2) = 15.","Pažnja: koeficijent uz x² uključuje 2² (jer je a = 2x), ne samo binomni koeficijent.","Česta greška: izostaviti faktor 2² (koristiti samo C(6,4) = 15) — daje krivih 15 umjesto 60.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:24.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Odredite broj između 6 000 i 6 100 koji podijeljen sa 136 ima količnik jednak ostatku.",
  sol:{ans:"6 028",alt:["6028","6 028"]},
  steps:[
    {txt:"Neka je n traženi broj. Podijeljen sa 136 daje količnik q i ostatak r, uz 0 ≤ r < 136."},
    {txt:"n = 136q + r. Uvjet: r = q, pa n = 136q + q = 137q."},
    {txt:"6 000 < 137q < 6 100 ⇒ 43,8 < q < 44,5 ⇒ q = 44"},
    {txt:"Provjera uvjeta r < 136: r = 44 < 136 ✓"},
    {txt:"n = 137 · 44 = 6 028",final:true},
    {txt:"Provjera: 6028 / 136 = 44 (kvocijent), ostatak = 6028 − 44·136 = 6028 − 5984 = 44 ✓ (kvocijent = ostatak = 44).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Teorem o dijeljenju s ostatkom: za svaki n postoje jedinstveni q, r takvi da n = 136q + r, 0 ≤ r < 136.",note:"postupak",final:true},{txt:"Intuicija: Uvjet kvocijent = ostatak (q = r) daje n = 136q + q = 137q — ključni algebarski trik.",note:"intuicija",final:true},{txt:"Točan odgovor: 6 028 ✓",note:"odgovor",final:true}
  ],
  why:["Teorem o dijeljenju s ostatkom: za svaki n postoje jedinstveni q, r takvi da n = 136q + r, 0 ≤ r < 136.","Uvjet kvocijent = ostatak (q = r) daje n = 136q + q = 137q — ključni algebarski trik.","Domena: q ∈ {0, 1, ..., 135} (jer r < 136), pa 137q ∈ {0, 137, ..., 18 495}.","Česta greška: zaboraviti uvjet r < 136 (ovdje q = 44 < 136 ✓).","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:25.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Derivirajte funkciju f(x) = sin(5x).",
  sol:{ans:"f ′(x) = 5 cos(5x)",alt:["5cos(5x)","5 cos(5x)"]},
  steps:[
    {txt:"Lančano pravilo: (sin u)′ = cos u · u′, gdje je u = 5x."},
    {txt:"u′ = 5"},
    {txt:"f ′(x) = cos(5x) · 5 = 5 cos(5x)",final:true},
    {txt:"Provjera: za x = 0: f(0) = 0, f'(0) = 5 cos 0 = 5 — tangenta u (0, 0) ima nagib 5 (sin(5x) oscilira 5× brže od sin x).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Lančano pravilo: (f ∘ g)′(x) = f ′(g(x)) · g′(x) — derivacija vanjske puta derivacija unutarnje funkcije.",note:"postupak",final:true},{txt:"Intuicija: (sin x)′ = cos x — osnovna trigonometrijska derivacija.",note:"intuicija",final:true},{txt:"Točan odgovor: f ′(x) = 5 cos(5x) ✓",note:"odgovor",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["Lančano pravilo: (f ∘ g)′(x) = f ′(g(x)) · g′(x) — derivacija vanjske puta derivacija unutarnje funkcije.","(sin x)′ = cos x — osnovna trigonometrijska derivacija.","Intuicija: sin(5x) oscilira 5× brže od sin x, pa amplitudo derivacije je 5× veća.","Česta greška: zaboraviti pomnožiti s g′(x) = 5 — dobije se samo cos(5x) (krivo).","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:25.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Koliki je koeficijent smjera (nagib) tangente na graf funkcije g(x) = [FRAC:x + 2|x²] u točki T(1, 3)?",
  sol:{ans:"k = −5",alt:["−5","−5","k=−5","k = −5"]},
  steps:[
    {txt:"Provjera: g(1) = (1 + 2)/1² = 3 ✓ — točka T(1, 3) leži na grafu."},
    {txt:"Derivacija kvocijenta: g′(x) = (1 · x² − (x + 2) · 2x)/x⁴ = (x² − 2x² − 4x)/x⁴ = (−x − 4)/x³"},
    {txt:"k = g′(1) = [FRAC:−1 − 4|1³] = −5",final:true},
    {txt:"Provjera s alternativom: g(x) = (x+2)·x⁻² = x⁻¹ + 2x⁻²; g'(x) = −x⁻² − 4x⁻³ = −1/x² − 4/x³; g'(1) = −1 − 4 = −5 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nagib tangente u točki s apscisom x₀ jednak je g′(x₀).",note:"postupak",final:true},{txt:"Intuicija: Pravilo derivacije kvocijenta: (u/v)′ = (u′v − uv′)/v². Pažnja: v = x², v′ = 2x.",note:"intuicija",final:true},{txt:"Točan odgovor: k = −5 ✓",note:"odgovor",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:["Nagib tangente u točki s apscisom x₀ jednak je g′(x₀).","Pravilo derivacije kvocijenta: (u/v)′ = (u′v − uv′)/v². Pažnja: v = x², v′ = 2x.","Česta greška: pomiješati g(x) = (x+2)/x² (rezultat −5) s g(x) = (x²+2)/x (rezultat −1) — pažljivo čitati zadatak.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih)."]
},
  {id:25.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Za koji realan broj x funkcija h(x) = −x³ + 9x² − 15x + 2 postiže lokalni minimum?",
  sol:{ans:"x = 1",alt:["1","x=1"]},
  steps:[
    {txt:"h′(x) = −3x² + 18x − 15 = −3(x² − 6x + 5) = −3(x − 1)(x − 5)"},
    {txt:"Stacionarne točke: x = 1 i x = 5"},
    {txt:"h″(x) = −6x + 18"},
    {txt:"h″(1) = 12 > 0 ⇒ u x = 1 lokalni minimum"},
    {txt:"h″(5) = −12 < 0 ⇒ u x = 5 lokalni maksimum",final:true},
    {txt:"Provjera: h(1) = −1 + 9 − 15 + 2 = −5 (lok min); h(0) = 2, h(2) = 0 (oba veća od h(1) = −5) ✓ — potvrđuje minimum.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nužni uvjet ekstrema: h′(x) = 0 (stacionarna točka).",note:"postupak",final:true},{txt:"Intuicija: Dovoljni uvjet — kriterij druge derivacije: h″ > 0 → lok minimum, h″ < 0 → lok maksimum.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 1 ✓",note:"odgovor",final:true}
  ],
  why:["Nužni uvjet ekstrema: h′(x) = 0 (stacionarna točka).","Dovoljni uvjet — kriterij druge derivacije: h″ > 0 → lok minimum, h″ < 0 → lok maksimum.","Alt metoda: tabela predznaka h′(x) — promjena − → + označava minimum.","Česta greška: izvestiti pogrešno (zaboraviti − ispred 3x²) — daje krive ekstreme.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:26,img:true,type:"proof",topic:"fun",points:2,
  graphType:"parabola",
  graphRef:{pts:[[0,0],[2,2],[4,0]]},
  img:true,
  q:"Zadana je funkcija f(x) = −[FRAC:1|2]x² + 2x. Izračunajte koordinate tjemena grafa zadane funkcije i nacrtajte joj graf.",
  sol:{svgFn:SvgSol26_2012JesenA,ans:"T(2, 2)",alt:["T(2, 2)","(2, 2)","T(2,2)"],
  ex:"Tjeme T(2, 2); nultočke x = 0 i x = 4. Parabola otvorena prema dolje."},
  steps:[
    {txt:"a = −1/2, b = 2, c = 0"},
    {txt:"x_T = −b/(2a) = −2/(2 · (−1/2)) = −2/(−1) = 2"},
    {txt:"y_T = f(2) = −4/2 + 4 = −2 + 4 = 2"},
    {txt:"T(2, 2). Parabola je otvorena prema dolje (a < 0). Nultočke: f(x) = 0 ⇒ x(−[FRAC:x|2] + 2) = 0 ⇒ x = 0 ili x = 4.",final:true},
    {txt:"Provjera tjemena: y_T = f(2) = −2²/2 + 2·2 = −2 + 4 = 2 ✓; tjeme leži između nultočaka 0 i 4 (sredina = 2) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Tjeme parabole y = ax² + bx + c: T(−b/(2a), f(−b/(2a))).",note:"postupak",final:true},{txt:"Intuicija: Ako je a < 0, parabola je otvorena prema dolje i ima maksimum u tjemenu (ovdje y_max = 2).",note:"intuicija",final:true},{txt:"Točan odgovor: T(2, 2) ✓",note:"odgovor",final:true}
  ],
  why:["Tjeme parabole y = ax² + bx + c: T(−b/(2a), f(−b/(2a))).","Ako je a < 0, parabola je otvorena prema dolje i ima maksimum u tjemenu (ovdje y_max = 2).","Alt metoda: kvadratna nadopuna f(x) = −1/2(x² − 4x) = −1/2((x−2)² − 4) = −1/2(x−2)² + 2 → tjeme T(2, 2) izravno.","Geometrijska intuicija: tjeme leži na osi simetrije, koja prolazi sredinom između dvije nultočke.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:27,type:"proof",topic:"fun",points:2,
  q:"Odredite domenu funkcije f(x) = [FRAC:√(2x + 1)|x − 1].",
  sol:{ans:"D(f) = [−[FRAC:1|2], +∞⟩ \\ {1}",alt:["[−1/2, +∞⟩ \\ {1}","[−1/2, 1⟩ ∪ (1, +∞⟩","[−0,5, +∞⟩ \\ {1}"],
  ex:"Domena D(f) = [−1/2, +∞⟩  {1}. (Uvjeti: 2x+1 ≥ 0 i x ≠ 1.)"},
  solFormula:{pre:"D(f) = [", frac:[["−1","2"]], post:", +∞⟩ \\ {1}"},
  steps:[
    {txt:"Dva uvjeta:"},
    {txt:"1) Izraz pod korijenom mora biti ≥ 0: 2x + 1 ≥ 0 ⇒ x ≥ −1/2"},
    {txt:"2) Nazivnik mora biti ≠ 0: x − 1 ≠ 0 ⇒ x ≠ 1"},
    {txt:"Presjek: x ∈ [−1/2, +∞⟩ i x ≠ 1"},
    {txt:"D(f) = [−[FRAC:1|2], +∞⟩ \\ {1} = [−[FRAC:1|2], 1⟩ ∪ ⟨1, +∞⟩",final:true},
    {txt:"Provjera rubova: x = −1/2 → √0 / (−3/2) = 0 ✓ (definirano); x = 1 → √3 / 0 = ∞ ✗ (isključeno); x = 0 → √1 / (−1) = −1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Domena složene funkcije: svi uvjeti istovremeno — presjek pojedinačnih domena.",note:"postupak",final:true},{txt:"Intuicija: Kad izuzimamo jednu točku iz intervala, koristimo znak \\\\ (skup bez): A \\\\ {x} znači sve elemente A osim x.",note:"intuicija",final:true},{txt:"Točan odgovor: D(f) = [−[FRAC:1|2], +∞⟩ \\ {1} ✓",note:"odgovor",final:true}
  ],
  why:["Domena složene funkcije: svi uvjeti istovremeno — presjek pojedinačnih domena.","Kad izuzimamo jednu točku iz intervala, koristimo znak \\ (skup bez): A \\ {x} znači sve elemente A osim x.","Pažnja: izraz pod parnim korijenom mora biti ≥ 0 (uključuje i 0); nazivnik mora biti ≠ 0 (strogo isključuje).","Česta greška: pisati otvoren interval na −1/2 (⟨−1/2, ...⟩) — ali korijen JE definiran u 0, pa rub ULAZI u domenu.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:28.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Opći član niza je aₙ = 6n + 2. Koliki je zbroj prvih dvadeset članova tog niza?",
  sol:{ans:"S = 1 300",alt:["1300","1 300","S = 1300"]},
  steps:[
    {txt:"Niz je aritmetički: a₁ = 8, d = 6 (razlika uzastopnih)."},
    {txt:"a₂₀ = 6 · 20 + 2 = 122"},
    {txt:"S₂₀ = 20 · [FRAC:a₁ + a₂₀|2] = 20 · [FRAC:8 + 122|2] = 10 · 130 = 1 300",final:true},
    {txt:"Provjera: alt formula Sₙ = n·a₁ + n(n−1)d/2 = 20·8 + 20·19·6/2 = 160 + 1140 = 1300 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Aritmetički niz: aₙ = a₁ + (n − 1)d, Sₙ = n(a₁ + aₙ)/2.",note:"postupak",final:true},{txt:"Intuicija: a₁ = 6·1 + 2 = 8; a₂₀ = 6·20 + 2 = 122; razlika d = 6.",note:"intuicija",final:true},{txt:"Točan odgovor: S = 1 300 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Aritmetički niz: aₙ = a₁ + (n − 1)d, Sₙ = n(a₁ + aₙ)/2.","a₁ = 6·1 + 2 = 8; a₂₀ = 6·20 + 2 = 122; razlika d = 6.","Alt formula: Sₙ = n·a₁ + n(n−1)·d/2 — koristi se kad ne znamo aₙ izravno.","Česta greška: koristiti formulu za geometrijski niz Sₙ = a₁(qⁿ−1)/(q−1) — ovdje je niz aritmetički.","Provjera supstitucijom: uvrsti x = S = 1 300 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"U geometrijskom nizu s pozitivnim članovima prvi član je za 4 manji od drugog, a treći je za 5 veći od drugog. Koliki je kvocijent tog geometrijskog niza?",
  sol:{ans:"q = 1,25",alt:["1,25","5/4","1,25"]},
  steps:[
    {txt:"a₂ − a₁ = 4 ⇒ a₁q − a₁ = 4 ⇒ a₁(q − 1) = 4 ... (1)"},
    {txt:"a₃ − a₂ = 5 ⇒ a₁q² − a₁q = 5 ⇒ a₁q(q − 1) = 5 ... (2)"},
    {txt:"[FRAC:2|1]: q = [FRAC:5|4] = 1,25",final:true},
    {txt:"Provjera: iz a₁(q−1) = 4 → a₁ = 4/(1,25 − 1) = 16; a₂ = a₁·q = 20; a₃ = a₂·q = 25; provjera: a₂−a₁ = 4 ✓; a₃−a₂ = 5 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Geometrijski niz: aₙ = a₁ · q^(n−1); kvocijent q je omjer uzastopnih članova.",note:"postupak",final:true},{txt:"Intuicija: Razlike uzastopnih članova g.n. u sebi tvore novi g.n. s istim kvocijentom q.",note:"intuicija",final:true},{txt:"Točan odgovor: q = 1,25 ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = q = 1,25 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Geometrijski niz: aₙ = a₁ · q^(n−1); kvocijent q je omjer uzastopnih članova.","Razlike uzastopnih članova g.n. u sebi tvore novi g.n. s istim kvocijentom q.","Strategija: umjesto rješavati a₁ i q zajedno, podijeli dvije jednadžbe za izolaciju q.","Česta greška: predznak — pozitivni članovi znače q > 0, pa kvadratna q² ima samo pozitivnu nultu (ne −2).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:28.3,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Zadan je kvadrat sa stranicom duljine 8 cm. U njega je upisana kružnica, u nju kvadrat, pa opet kružnica, kvadrat itd. Koliki je zbroj površina svih tih kvadrata?",
  sol:{ans:"S = 128 cm²",alt:["128","128 cm²"]},
  steps:[
    {txt:"Prvi kvadrat: P₁ = 8² = 64 cm²"},
    {txt:"Kvadrat upisan u kružnicu polumjera r ima dijagonalu 2r, stranicu r√2. Njegova površina je upola manja od kvadrata opisanog toj kružnici."},
    {txt:"Dakle q = 1/2. Beskonačni geometrijski red: |q| < 1 ⇒ konvergira."},
    {txt:"S = [FRAC:P₁|1 − q] = 64/(1 − [FRAC:1|2]) = 64/([FRAC:1|2]) = 128 cm²",final:true},
    {txt:"Provjera djelomičnim sumama: P₁+P₂+P₃+P₄+P₅ = 64+32+16+8+4 = 124; 128 − 124 = 4 (ostatak konvergira u 0) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Beskonačni geometrijski red konvergira ako |q| < 1; suma S = a₁/(1 − q).",note:"postupak",final:true},{txt:"Intuicija: Iterativna konstrukcija kvadrat → upisana kružnica → upisan kvadrat daje stalni omjer površina 1/2.",note:"intuicija",final:true},{txt:"Točan odgovor: S = 128 cm² ✓",note:"odgovor",final:true}
  ],
  why:["Beskonačni geometrijski red konvergira ako |q| < 1; suma S = a₁/(1 − q).","Iterativna konstrukcija kvadrat → upisana kružnica → upisan kvadrat daje stalni omjer površina 1/2.","Beskonačno upisivanje: svaki kvadrat ima stranicu 1/√2 puta manju od prethodnog (jer dijagonala = stranica vanjskog).","Površina niza kvadrata: 64 + 32 + 16 + ... = geometrijski red s q = 1/2 (svaki sljedeći je upola manji).","Zbroj: S = 64/(1 − 1/2) = 128 cm².","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:29.1,type:"proof",topic:"geom",points:3,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Zadane su točke A(9, 2), B(5, 6) i C(−3, −2). Odredite udaljenost točke C od simetrale dužine AB.",
  sol:{ans:"d(C, s) = 2√2 ≈ 2,83",alt:["2√2","2√(2)","2,83","≈2,83"],
  ex:"Simetrala dužine AB: y = −x + 4. Udaljenost C(−3, −2): d = 2√2 ≈ 2,83."},
  steps:[
    {txt:"Polovište AB: M = ((9+5)/2, (2+6)/2) = (7, 4)"},
    {txt:"Nagib AB: k_AB = (6 − 2)/(5 − 9) = 4/(−4) = −1"},
    {txt:"Simetrala je okomita na AB: k_s · k_AB = −1 ⇒ k_s = 1"},
    {txt:"Simetrala prolazi kroz M(7, 4): y − 4 = 1 · (x − 7) ⇒ x − y − 3 = 0"},
    {txt:"Udaljenost C(−3, −2) od pravca x − y − 3 = 0:"},
    {txt:"d = |−3 − (−2) − 3|/√(1² + 1²) = |−4|/√2 = [FRAC:4|√2] = 2√2",final:true},
    {txt:"Provjera: 2√2 ≈ 2,828; alt provjera — kvadratna udaljenost od C(−3,−2) do simetrale x − y − 3 = 0 računa se izravno formulom |Ax₀+By₀+C|/√(A²+B²) — daje 4/√2 = 2√2 ≈ 2,83 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Simetrala dužine: pravac okomit na dužinu kroz njeno polovište.",note:"postupak",final:true},{txt:"Intuicija: Udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).",note:"intuicija",final:true},{txt:"Točan odgovor: d(C, s) = 2√2 ≈ 2,83 ✓",note:"odgovor",final:true}
  ],
  why:["Simetrala dužine: pravac okomit na dužinu kroz njeno polovište.","Udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).","Simetrala dužine AB prolazi polovištem M(7, 4) i okomita je na AB.","Nagib AB: k_AB = (6−2)/(5−9) = −1; nagib simetrale: k⊥ = 1.","Jednadžba simetrale: y − 4 = 1·(x − 7) → y = x − 3; udaljenost C(−3,−2): d = |−2−(−3)−3|/√2 = 2√2.","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:29.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Zadane su točke M(−2, −3), N(1, 1) i P(−1, 2). Vektor MN⃗ + NP⃗ prikažite kao linearnu kombinaciju jediničnih vektora i⃗ i j⃗.",
  sol:{ans:"MN⃗ + NP⃗ = i⃗ + 5j⃗",alt:["i + 5j","(1, 5)","i⃗ + 5j⃗"],
  ex:"MN⃗ = (3, 4), NP⃗ = (−2, 1); zbroj: MN⃗ + NP⃗ = i⃗ + 5j⃗."},
  steps:[
    {txt:"MN⃗ = N − M = (1 − (−2), 1 − (−3)) = (3, 4)"},
    {txt:"NP⃗ = P − N = (−1 − 1, 2 − 1) = (−2, 1)"},
    {txt:"MN⃗ + NP⃗ = (3 + (−2), 4 + 1) = (1, 5)"},
    {txt:"Alternativno (Chaslesova relacija): MN⃗ + NP⃗ = MP⃗ = P − M = (1, 5) ✓"},
    {txt:"MN⃗ + NP⃗ = 1 · i⃗ + 5 · j⃗ = i⃗ + 5j⃗",final:true},
    {txt:"Provjera direktno: P − M = (−1−(−2), 2−(−3)) = (1, 5) ✓ (Chaslesova relacija potvrđuje rezultat).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Chaslesova relacija: AB⃗ + BC⃗ = AC⃗ — temeljni vektorski identitet.",note:"postupak",final:true},{txt:"Intuicija: U kanonskoj bazi: vektor (x, y) = x·i⃗ + y·j⃗ gdje su i⃗, j⃗ jedinični okomiti vektori (po x i y osi).",note:"intuicija",final:true},{txt:"Točan odgovor: MN⃗ + NP⃗ = i⃗ + 5j⃗ ✓",note:"odgovor",final:true}
  ],
  why:["Chaslesova relacija: AB⃗ + BC⃗ = AC⃗ — temeljni vektorski identitet.","U kanonskoj bazi: vektor (x, y) = x·i⃗ + y·j⃗ gdje su i⃗, j⃗ jedinični okomiti vektori (po x i y osi).","Strategija: za dvije zbrojene veze MN⃗ + NP⃗ koristi Chaslesa direktno — MP⃗ je isto što i zbrajati po komponentama.","Česta greška: pogrešno postaviti smjer vektora (PM⃗ umjesto MP⃗) — oduzimanje krajnja − početak.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer."]
},
  {id:29.3,type:"proof",topic:"kon",points:2,
  img:true,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Na slici je kružnica sa središtem S i točka A na kružnici. Odredite jednadžbu tangente na kružnicu u točki A.",
  sol:{ans:"y = [FRAC:4|3]x + [FRAC:14|3]",alt:["y = 4x/3 + 14/3","4x - 3y + 14 = 0","y=(4/3)x+14/3"],
  ex:"Tangenta na kružnicu u točki A: jednadžba y = (4/3)x + 14/3."},
  solFormula:{pre:"y = ", frac:[["4","3"]], post:"x + ", frac2:[["14","3"]]},
  steps:[
    {txt:"Iz slike očitavamo: S(5, 3), A(1, 6)"},
    {txt:"Provjera radijusa: r² = (1 − 5)² + (6 − 3)² = 16 + 9 = 25 ⇒ r = 5"},
    {txt:"Tangenta u točki (x₀, y₀) na kružnici sa središtem (p, q): (x − p)(x₀ − p) + (y − q)(y₀ − q) = r²"},
    {txt:"(x − 5)(1 − 5) + (y − 3)(6 − 3) = 25"},
    {txt:"−4(x − 5) + 3(y − 3) = 25 ⇒ −4x + 20 + 3y − 9 = 25"},
    {txt:"−4x + 3y = 14 ⇒ y = [FRAC:4|3]x + [FRAC:14|3]",final:true},
    {txt:"Provjera: nagib tangente = 4/3; nagib polumjera SA = (6−3)/(1−5) = 3/(−4) = −3/4; produkt nagiba = (4/3)·(−3/4) = −1 ✓ (tangenta je okomita na polumjer).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Princip zamjene za tangentu na kružnicu (x − p)² + (y − q)² = r² u točki (x₀, y₀): x² → x·x₀, y² → y·y₀ (uz odgovarajuće translacije).",note:"postupak",final:true},{txt:"Intuicija: Tangenta je okomita na radijus u dodirnoj točki.",note:"intuicija",final:true},{txt:"Točan odgovor: y = [FRAC:4|3]x + [FRAC:14|3] ✓",note:"odgovor",final:true}
  ],
  why:["Princip zamjene za tangentu na kružnicu (x − p)² + (y − q)² = r² u točki (x₀, y₀): x² → x·x₀, y² → y·y₀ (uz odgovarajuće translacije).","Tangenta je okomita na radijus u dodirnoj točki.","Tangenta na kružnicu u točki A(x₀,y₀) okomita je na polumjer SA.","Nagib polumjera SA = (y₀ − y_S)/(x₀ − x_S); nagib tangente = negativni recipročni.","Jednadžba tangente prolazi točkom A s određenim nagibom.","Provjera kompleksnog broja: realni dio + imaginarni dio (i² = −1)."]
},
  {id:29.4,type:"proof",topic:"kon",points:2,
  graphType:"parabola",
  graphRef:{pts:[[0,0],[1,4],[1,-4],[4,8],[4,-8]]},
  img:true,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Zadan je skup svih točaka koje su jednako udaljene od točke T(4, 0) i pravca x = −4. Napišite jednadžbu tog skupa i skicirajte ga u zadanom koordinatnom sustavu.",
  sol:{svgFn:SvgSol29d_2012JesenA,ans:"y² = 16x",alt:["y²=16x","y^2 = 16x"],
  ex:"Parabola s žarištem T(4, 0) i ravnalicom x = −4: jednadžba y² = 16x."},
  steps:[
    {txt:"Definicija parabole: skup točaka jednako udaljenih od žarišta F i ravnateljke (direktrise)."},
    {txt:"F(4, 0), ravnateljka x = −4. Tjeme je polovište okomite udaljenosti: (0, 0)."},
    {txt:"Parametar p = 4 (udaljenost od tjemena do žarišta)."},
    {txt:"Parabola oblika y² = 4p · x (otvorena udesno): y² = 16x",final:true},
    {txt:"Provjera definicijom: za točku P(x, y) na paraboli — udaljenost do žarišta (4, 0): √((x−4)² + y²); udaljenost do x = −4: x + 4. Izjednačiti: (x−4)² + y² = (x+4)² → y² = 16x ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Parabola y² = 4px: žarište F(p, 0), ravnateljka x = −p, tjeme (0, 0).",note:"postupak",final:true},{txt:"Intuicija: Udaljenost točke (x, y) od F = √((x − p)² + y²), od ravnateljke = |x + p|. Izjednačavanjem kvadrata: y² = 4px.",note:"intuicija",final:true},{txt:"Točan odgovor: y² = 16x ✓",note:"odgovor",final:true}
  ],
  why:["Parabola y² = 4px: žarište F(p, 0), ravnateljka x = −p, tjeme (0, 0).","Udaljenost točke (x, y) od F = √((x − p)² + y²), od ravnateljke = |x + p|. Izjednačavanjem kvadrata: y² = 4px.","Skup točaka jednako udaljenih od točke F(4,0) i pravca x = −4 je parabola.","Standardni oblik: y² = 4px gdje p = udaljenost od žarišta do ravnalice = 4.","Jednadžba: y² = 16x.","Provjera modulom: |z| = √(Re²(z) + Im²(z))."]
},
  {id:29.5,type:"sa",topic:"kon",points:2,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Cesta prolazi ispod nadvožnjaka u obliku poluelipse. Širina nadvožnjaka u razini ceste je 7 m, a najviša točka nadvožnjaka je 4,2 m. Koliko najviše može biti visok kamion širine 2,6 m da bi mogao proći ispod nadvožnjaka, uz slobodnu visinu od najmanje 0,5 m?",
  sol:{ans:"≈ 3,40 m",alt:["3,40","3,40","3,3995","≈3,40 m"],
  ex:"Elipsa: a = 3,5, b = 4,2; za širinu kamiona 2,6 m → visina ≈ 3,90 m; minus 0,5 m → max visina ≈ 3,40 m."},
  steps:[
    {txt:"Postavimo koordinate: središte podnožja nadvožnjaka u ishodištu. Poluosi elipse: a = 7/2 = 3,5 (horizontalno), b = 4,2 (vertikalno)."},
    {txt:"Jednadžba: x²/3,5² + y²/4,2² = 1, y ≥ 0"},
    {txt:"Kamion je širok 2,6 m, simetričan oko središta ⇒ rubovi su na x = ±1,3"},
    {txt:"y² = 4,2² · (1 − 1,3²/3,5²) = 17,64 · (1 − 1,69/12,25) ≈ 17,64 · 0,8620 ≈ 15,207"},
    {txt:"y ≈ 3,899 m (visina nadvožnjaka iznad ruba kamiona)"},
    {txt:"Maks. visina kamiona = y − 0,5 ≈ 3,399 ≈ 3,40 m",final:true},
    {txt:"Provjera: za x = 0 (sredina): y = 4,2 (najviša točka, match podatku); za x = ±3,5 (rub ceste): y = 0 (rub, match širini 7 m); za x = 1,3: y ≈ 3,90 — sve geometrijski konzistentno ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Poluelipsa (gornji dio): x²/a² + y²/b² = 1, y ≥ 0; a = polu-širina, b = visina.",note:"postupak",final:true},{txt:"Intuicija: Slobodna visina (clearance): prostor između vrha kamiona i nadvožnjaka — tehnička norma sigurnosti.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 3,40 m ✓",note:"odgovor",final:true}
  ],
  why:["Poluelipsa (gornji dio): x²/a² + y²/b² = 1, y ≥ 0; a = polu-širina, b = visina.","Slobodna visina (clearance): prostor između vrha kamiona i nadvožnjaka — tehnička norma sigurnosti.","Strategija: postavi koordinatni sustav s ishodištem u sredini ceste; iz simetrije, kamion širine 2,6 m je centriran, pa rubovi na x = ±1,3.","Česta greška: pomiješati a i b (a je polu-os u smjeru x; b u smjeru y) — daje pogrešan oblik elipse.","Provjera konjugiranjem: z·z̄ = |z|².","Tipičan propust: i² = −1 (ne 1); konjugiranje mijenja samo predznak imaginarnog."]
},
  {id:30,type:"proof",topic:"al",points:4,
  q:"Za koje realne brojeve a jednadžba |x + 1| − |3 − x| = 1 − [FRAC:1|a] ima točno jedno rješenje?",
  sol:{ans:"a ∈ ⟨−∞, −[FRAC:1|3]⟩ ∪ ⟨[FRAC:1|5], +∞⟩",alt:["(-∞, −1/3) ∪ (1/5, +∞⟩","a < −1/3 ili a > 1/5"],
  ex:"Analiza po intervalima → rješenje: a ∈ ⟨−∞, −1/3⟩ ∪ ⟨1/5, +∞⟩."},
  solFormula:{pre:"a ∈ ⟨−∞, ", frac:[["−1","3"]], post:"⟩ ∪ ⟨", frac2:[["1","5"]], post2:", +∞⟩"},
  steps:[
    {txt:"Definiramo g(x) = |x + 1| − |3 − x| i analiziramo po intervalima:"},
    {txt:"Za x < −1: g(x) = −(x+1) − (3−x) = −4 (konstantna)"},
    {txt:"Za −1 ≤ x ≤ 3: g(x) = (x+1) − (3−x) = 2x − 2 (linearna, raste od −4 do 4)"},
    {txt:"Za x > 3: g(x) = (x+1) − (x-3) = 4 (konstantna)"},
    {txt:"Neka je k = 1 − 1/a. Jednadžba g(x) = k:"},
    {txt:"Ako k < −4 ili k > 4: nema rješenja. Ako k = −4 ili k = 4: beskonačno mnogo rješenja. Ako −4 < k < 4: točno jedno rješenje (u srednjem segmentu, x = (k + 2)/2)."},
    {txt:"Za točno jedno rješenje: −4 < 1 − 1/a < 4 ⇒ −5 < −1/a < 3"},
    {txt:"Slučaj a > 0: −1/a < 0 ⇒ trebamo 5 > 1/a ⇒ a > 1/5, tj. a ∈ ⟨1/5, +∞⟩"},
    {txt:"Slučaj a < 0: −1/a > 0 ⇒ trebamo −1/a < 3 ⇒ −1 > 3a ⇒ a < −1/3, tj. a ∈ ⟨−∞, −1/3⟩"},
    {txt:"a ∈ ⟨−∞, −[FRAC:1|3]⟩ ∪ ⟨[FRAC:1|5], +∞⟩",final:true},
    {txt:"Provjera: za a = 1 (∈ ⟨1/5, +∞⟩): k = 1 − 1 = 0; g(x) = 0 → 2x − 2 = 0 → x = 1 (jedinstveno rješenje u srednjem segmentu) ✓",final:true,note:"verifikacija"},
    {txt:"Provjera: za a = −1 (∈ ⟨−∞, −1/3⟩): k = 1 − (−1) = 2; g(x) = 2 → 2x − 2 = 2 → x = 2 (jedinstveno) ✓",final:true,note:"verifikacija"},
    {txt:"Provjera ruba: za a = 1/5 (rub, ne ulazi): k = 1 − 5 = −4; g(x) = −4 vrijedi za sve x < −1 (beskonačno mnogo rješenja, ne jedno) ✗ — potvrđuje da rub se isključuje.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Funkcija s ugniježđenim apsolutnim vrijednostima analizira se po intervalima gdje svaki izraz unutar |·| ima stalan predznak.",note:"postupak",final:true},{txt:"Intuicija: Kod |A| = k: za k > 0 dva rješenja, k = 0 jedno, k < 0 nijedno — uvijek provjeriti domenu i broj rješenja.",note:"intuicija",final:true},{txt:"Točan odgovor: a ∈ ⟨−∞, −[FRAC:1|3]⟩ ∪ ⟨[FRAC:1|5], +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:["Funkcija s ugniježđenim apsolutnim vrijednostima analizira se po intervalima gdje svaki izraz unutar |·| ima stalan predznak.","Kod |A| = k: za k > 0 dva rješenja, k = 0 jedno, k < 0 nijedno — uvijek provjeriti domenu i broj rješenja.","Strategija: definirati novu varijablu k = 1 − 1/a, raspisati funkciju g(x) po intervalima, pa odrediti za koje k jednadžba g(x) = k ima točno jedno rješenje.","Geometrijski: g(x) je linearna na ⟨−1, 3⟩ (raste od −4 do 4) i konstantna izvan; jedinstveno rješenje postoji ako i samo ako k ∈ ⟨−4, 4⟩ (u srednjem segmentu).","Česta greška: zaboraviti rubove (k = ±4 daje beskonačno mnogo rješenja, NE jedno) — kritično isključiti.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
}
];

export const qImages = {
  "2012_jesen_A__10": () => e(SvgGraf10_2012Aj, null),
  "2012_jesen_A__11": () => e(SvgTetive11_2012Aj, null),
  "2012_jesen_A__22.2": () => e(SvgGraf22b_2012Aj, null),
  "2012_jesen_A__26": () => e(SvgGraf26_2012Aj, null),
  "2012_jesen_A__29.3": () => e(SvgKruznica29c_2012Aj, null),
  "2012_jesen_A__29.4": () => e(SvgGraf29d_2012Aj, null),
};
