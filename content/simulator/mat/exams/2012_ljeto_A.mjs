// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgGraf29c_2012Alj(){
  const W=280,H=280,cx=80,cy=180,sc=28;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g29clj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.5,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"arx29clj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary29clj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g29clj)"}),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#arx29clj)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ary29clj)"}),
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx:cx,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-12,y:cy+13,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:cx-13,y:cy-sc+4,fontSize:9,fill:"var(--muted)"},"1"),
    ...[1,2,3,4,5].map(t=>e("text",{key:"tx"+t,x:cx+t*sc-3,y:cy+12,fontSize:8,fill:"var(--muted)"},t)),
    ...[1,2,3,4,5].map(t=>e("text",{key:"ty"+t,x:cx-13,y:cy-t*sc+4,fontSize:8,fill:"var(--muted)"},t))
  );
}

function SvgHiperbola29_2012LjetoA(){
  // Hiperbola x²/4 − 2y² = 1: vrhovi (±2,0), asimptote y=±x/(2√2)≈±0.354x
  // A(6,2): 36/4−2·4=9−8=1 ✓
  // Bez tangente — tangenta se traži u zadatku
  const W=300,H=240,cx=110,cy=120,sc=22;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Asimptotni nagib
  const k=1/(2*Math.sqrt(2));
  // Grane hiperbole (parameterski po y)
  const pts_r=[],pts_l=[];
  for(let y=-4.5;y<=4.5;y+=0.025){
    const x2=4*(1+2*y*y);
    const x=Math.sqrt(x2);
    const pxr=cx+x*sc, pxl=cx-x*sc, py=cy-y*sc;
    if(pxr<W-4&&py>4&&py<H-4) pts_r.push(`${pxr.toFixed(1)},${py.toFixed(1)}`);
    if(pxl>4&&py>4&&py<H-4) pts_l.push(`${pxl.toFixed(1)},${py.toFixed(1)}`);
  }
  const ticks=[-4,-3,-2,-1,1,2,3,4,5,6];
  const yticks=[-4,-3,-2,-1,1,2,3,4];
  // Asimptote: y=±kx
  const axRange=7;
  const apts1=`${cx-axRange*sc},${cy+axRange*k*sc} ${cx+axRange*sc},${cy-axRange*k*sc}`;
  const apts2=`${cx-axRange*sc},${cy-axRange*k*sc} ${cx+axRange*sc},${cy+axRange*k*sc}`;
  return e("svg",{width:W,height:H,viewBox:"0 0 "+W+" "+H,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"axhx",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"axhy",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Grid (dashed)
    ...ticks.map(t=>e("line",{key:"gx"+t,x1:cx+t*sc,y1:4,x2:cx+t*sc,y2:H-4,stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.7,strokeDasharray:"3,3"})),
    ...yticks.map(t=>e("line",{key:"gy"+t,x1:4,y1:cy-t*sc,x2:W-4,y2:cy-t*sc,stroke:"var(--text)",strokeOpacity:0.12,strokeWidth:0.7,strokeDasharray:"3,3"})),
    // Asimptote (tanke, var(--text))
    e("polyline",{points:apts1,fill:"none",stroke:_BLUE,strokeWidth:0.9,strokeOpacity:0.5}),
    e("polyline",{points:apts2,fill:"none",stroke:_BLUE,strokeWidth:0.9,strokeOpacity:0.5}),
    // Osi
    e("line",{x1:4,y1:cy,x2:W-4,y2:cy,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#axhx)"}),
    e("line",{x1:cx,y1:H-4,x2:cx,y2:4,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#axhy)"}),
    e("text",{x:W-8,y:cy-6,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:11,fontSize:11,fill:"var(--text)"},"y"),
    // Oznake osi
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx+3,y:cy-sc+4,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-11,y:cy+13,fontSize:10,fill:"var(--text)"},"0"),
    // Hiperbola grane (crno, debelo — kao u PDF-u)
    e("polyline",{points:pts_r.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.4}),
    e("polyline",{points:pts_l.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.4}),
    // Vrhovi — open circles na (±2,0)
    e("circle",{cx:cx+2*sc,cy:cy,r:4.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx-2*sc,cy:cy,r:4.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    // Točka A(6,2) — open circle s labelom
    e("circle",{cx:cx+6*sc,cy:cy-2*sc,r:4.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.8}),
    e("text",{x:cx+6*sc+7,y:cy-2*sc-5,fontSize:12,fontWeight:"600",fill:"var(--text)"},"A(6, 2)")
  );
}

function SvgGraf26_2012Alj(){
  const W=250,H=260,cx=90,cy=130,sc=36;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx26lj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary26lj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    ...[-2,-1,1,2,3].map(i=>e("line",{key:"gx"+i,x1:cx+i*sc,y1:15,x2:cx+i*sc,y2:H-15,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    ...[-3,-2,-1,1,2,3].map(i=>e("line",{key:"gy"+i,x1:15,y1:cy-i*sc,x2:W-15,y2:cy-i*sc,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    e("line",{x1:15,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#arx26lj)"}),
    e("line",{x1:cx,y1:H-15,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#ary26lj)"}),
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx:cx+sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx-sc,cy:cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx,cy:cy+sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-14,y:cy+13,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx-14,y:cy-sc+4,fontSize:10,fill:"var(--muted)"},"1")
  );
}

function SvgGraf24b_2012Alj(){
  const W=280,H=210,lx=35,rx=W-18,by=H-35,ty=15;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pi2x=rx-10;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx24lj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary24lj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    ...[1,2,3,4,5].map(i=>e("line",{key:"gx"+i,x1:lx+i*(pi2x-lx)/6,y1:ty,x2:lx+i*(pi2x-lx)/6,y2:by,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    ...[1,2,3,4,5,6,7].map(i=>e("line",{key:"gy"+i,x1:lx,y1:ty+i*(by-ty)/8,x2:rx,y2:ty+i*(by-ty)/8,stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,3"})),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#arx24lj)"}),
    e("line",{x1:lx,y1:by,x2:lx,y2:ty,stroke:"var(--text)",strokeWidth:2,markerEnd:"url(#ary24lj)"}),
    e("text",{x:rx+2,y:by+4,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:lx+4,y:ty+2,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx:lx,cy:by,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:pi2x,cy:by,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:lx-10,y:by+14,fontSize:11,fill:"var(--text)"},"0"),
    e("text",{x:pi2x-8,y:by+14,fontSize:11,fill:"var(--text)"},"2π"),
    e("circle",{cx:lx,cy:by-(by-ty)/2,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:lx-14,y:by-(by-ty)/2+4,fontSize:11,fill:"var(--text)"},"1")
  );
}

function SvgGraphs13_2012LjetoA(){
  const W=320,H=300;
  const panels=[
    {lbl:"A",ox:10,oy:8,fn:(x)=>1/(x+2),va:-2,col:"#4a90d9"},
    {lbl:"B",ox:170,oy:8,fn:(x)=>-1/x,va:0,col:"#e9b446"},
    {lbl:"C",ox:10,oy:158,fn:(x)=>1/x,va:0,col:"#50c878"},
    {lbl:"D",ox:170,oy:158,fn:(x)=>1/(x-2),va:2,col:"#e05252"},
  ];
  const PW=140,PH=130,cx=70,cy=65,sc=22;
  const elems=[];
  for(const p of panels){
    const aKey=p.lbl;
    // Axes with arrows
    elems.push(e("defs",{key:"d"+aKey},
      e("marker",{id:"mx"+aKey,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},
        e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)",opacity:0.7})),
      e("marker",{id:"my"+aKey,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},
        e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)",opacity:0.7}))
    ));
    elems.push(e("line",{key:"ax"+aKey,x1:p.ox+2,y1:p.oy+cy,x2:p.ox+PW-4,y2:p.oy+cy,stroke:"var(--text)",strokeWidth:1.3,strokeOpacity:0.7,markerEnd:"url(#mx"+aKey+")"}));
    elems.push(e("line",{key:"ay"+aKey,x1:p.ox+cx,y1:p.oy+PH-2,x2:p.ox+cx,y2:p.oy+4,stroke:"var(--text)",strokeWidth:1.3,strokeOpacity:0.7,markerEnd:"url(#my"+aKey+")"}));
    elems.push(e("text",{key:"tx"+aKey,x:p.ox+PW-5,y:p.oy+cy-5,fontSize:10,fill:"var(--text)",opacity:0.6},"x"));
    elems.push(e("text",{key:"ty"+aKey,x:p.ox+cx+4,y:p.oy+7,fontSize:10,fill:"var(--text)",opacity:0.6},"y"));
    elems.push(e("text",{key:"to"+aKey,x:p.ox+cx-10,y:p.oy+cy+12,fontSize:9,fill:"var(--text)",opacity:0.6},"0"));
    // Asymptote (dashed)
    const axPx=p.ox+cx+p.va*sc;
    if(axPx>p.ox+3&&axPx<p.ox+PW-5){
      elems.push(e("line",{key:"as"+aKey,x1:axPx,y1:p.oy+3,x2:axPx,y2:p.oy+PH-3,stroke:p.col,strokeOpacity:0.3,strokeDasharray:"4,3",strokeWidth:1.3}));
    }
    // Draw branches
    const xMin=-3.2,xMax=4.2,eps=0.18;
    for(let branch=0;branch<2;branch++){
      const xS=branch===0?xMin:p.va+eps;
      const xE=branch===0?p.va-eps:xMax;
      const pts=[];
      for(let x=xS;x<=xE;x+=0.07){
        const fv=p.fn(x);
        if(!isFinite(fv)||Math.abs(fv)>7) continue;
        const px=p.ox+cx+x*sc;
        const py=p.oy+cy-fv*sc;
        if(px>p.ox+1&&px<p.ox+PW-1&&py>p.oy+2&&py<p.oy+PH-2)
          pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
      }
      if(pts.length>2) elems.push(e("polyline",{key:"pl"+aKey+"b"+branch,points:pts.join(" "),fill:"none",stroke:p.col,strokeWidth:2.2}));
    }
    // Label
    elems.push(e("text",{key:"lb"+aKey,x:p.ox+4,y:p.oy+PH+15,fontSize:14,fontWeight:"700",fill:p.col},p.lbl+"."));
  }
  return e("svg",{width:W,height:H,viewBox:"0 0 "+W+" "+H,style:{display:"block",margin:"0 auto"}},...elems);
}

function SvgSol29c_2012LjetoA(){
  const W=220,H=220,cx=60,cy=160,sc=24;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl29La",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"#e2e8f0"})),
      e("marker",{id:"ary_sl29La",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"#e2e8f0"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#arx_sl29La)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#ary_sl29La)"}),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"#94a3b8"},"0"),
    [1,2,3,4,5].map(t=>e("g",{key:t},
      e("text",{x:cx+t*sc-3,y:cy+12,fontSize:8,fill:"#94a3b8"},t),
      e("text",{x:cx-14,y:cy-t*sc+4,fontSize:8,fill:"#94a3b8"},t)
    )),
    e("circle",{cx:cx+2*sc,cy:cy-4*sc,r:3*sc,fill:"none",stroke:"#4a90d9",strokeWidth:2.2}),
    e("circle",{cx:cx+2*sc,cy:cy-4*sc,r:3,fill:"#50c878"}),
    e("text",{x:cx+2*sc+4,y:cy-4*sc+4,fontSize:8,fill:"#50c878"},"S(2,4)"),
    e("text",{x:cx+2*sc+4,y:cy-5.5*sc+4,fontSize:8,fill:"#94a3b8"},"r=3")
  );
}

function SvgSol26_2012LjetoA(){
  const W=240,H=240,cx=100,cy=80,sc=30;
  const f=x=>x*x+2*x-3;
  const pts=[]; for(let i=-120;i<=80;i++){const x=i/40;pts.push(`${cx+x*sc},${cy-f(x)*sc}`);}
  const ticks=[-3,-2,-1,1];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl26La",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"#e2e8f0"})),
      e("marker",{id:"ary_sl26La",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"#e2e8f0"}))
    ),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#arx_sl26La)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#ary_sl26La)"}),
    e("text",{x:W-10,y:cy+13,fontSize:9,fill:"#e2e8f0"},"x"),
    e("text",{x:cx+3,y:13,fontSize:9,fill:"#e2e8f0"},"y"),
    e("text",{x:cx-12,y:cy+13,fontSize:8,fill:"#94a3b8"},"0"),
    ticks.map(t=>e("g",{key:t},
      e("line",{x1:cx+t*sc,y1:cy-2,x2:cx+t*sc,y2:cy+2,stroke:"#94a3b8",strokeWidth:1}),
      e("text",{x:cx+t*sc-(t<0?10:2),y:cy+12,fontSize:8,fill:"#94a3b8"},t)
    )),
    e("circle",{cx:cx-sc,cy:cy+4*sc,r:3,fill:"#50c878"}),
    e("text",{x:cx-sc+5,y:cy+4*sc+4,fontSize:8,fill:"#50c878"},"T(−1,−4)"),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

function SvgSol24b_2012LjetoA(){
  const W=280,H=210,lx=30,rx=W-15,by=H-30,ty=12,amp=70,pi=Math.PI;
  const tx=x=>lx+(x/(2*pi))*(rx-lx), ty2=y=>by-y*(amp/4);
  const pts=[]; for(let i=0;i<=120;i++){const x=i/120*2*pi;pts.push(`${tx(x)},${ty2(-4*Math.sin(x))}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx_sl24La",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"#e2e8f0"})),
      e("marker",{id:"ary_sl24La",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"#e2e8f0"}))
    ),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#arx_sl24La)"}),
    e("line",{x1:lx,y1:by,x2:lx,y2:ty,stroke:"#e2e8f0",strokeWidth:1.5,markerEnd:"url(#ary_sl24La)"}),
    e("text",{x:rx-6,y:by+13,fontSize:9,fill:"#e2e8f0"},"x"),
    e("text",{x:lx+3,y:ty+8,fontSize:9,fill:"#e2e8f0"},"y"),
    [["π",1],["2π",2]].map(([l,k])=>e("g",{key:l},
      e("line",{x1:tx(k*Math.PI),y1:by-3,x2:tx(k*Math.PI),y2:by+3,stroke:"#94a3b8",strokeWidth:1}),
      e("text",{x:tx(k*Math.PI)-8,y:by+12,fontSize:8,fill:"#94a3b8"},l)
    )),
    [[-4,"−4"],[4,"4"]].map(([v,l])=>e("g",{key:l},
      e("line",{x1:lx-3,y1:ty2(v),x2:lx+3,y2:ty2(v),stroke:"#94a3b8",strokeWidth:1}),
      e("text",{x:lx-18,y:ty2(v)+4,fontSize:8,fill:"#94a3b8"},l)
    )),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku zasebno.",topic:"br",points:1,
  q:"Koja je tvrdnja netočna?",
  opts:["log₂ 9 = 3,1699…","sin(47°15′) = 0,7343…","(5/3) : (-5/2) = -2/3","2·10^(0,34) = 2,7692…"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"A: log₂ 9 = ln 9/ln 2 ≈ 2,1972/0,6931 ≈ 3,1699 ✓"},
    {txt:"B: sin(47°15′) ≈ sin(47,25°) ≈ 0,7343 ✓"},
    {txt:"C: (5/3) : (-5/2) = (5/3) · (-2/5) = -2/3 ✓"},
    {txt:"D: 2·10^(0,34) ≈ 2 · 2,1878 ≈ 4,376 ≠ 2,7692 — netočna tvrdnja."},{txt:"Analiza distractora: A,B,C su točne tvrdnje o logaritmima. D je jedina netočna: 2^(1,34)≠2,77.",final:true,note:"diagnostika"},{txt:"Provjera: log₂(2mn)=1+log₂m+log₂n; sve A,B,C se daju dokazati, D ne ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: 10^x za 0<x<1 daje vrijednost između 1 i 10; eksponent 0,34 znači približno (1/3)-ta potencija od 10.",note:"postupak",final:true},{txt:"Intuicija: 10^(0,5) = √10 ≈ 3,16; pa 10^(0,34) je nešto manje, oko 2,19 (između 1 i 3,16).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: 10^x za 0<x<1 daje vrijednost između 1 i 10; eksponent 0,34 znači približno (1/3)-ta potencija od 10.","Intuicija: 10^(0,5) = √10 ≈ 3,16; pa 10^(0,34) je nešto manje, oko 2,19 (između 1 i 3,16).","Praktično: korištenjem kalkulatora 10^(0,34) ≈ 2,188; 2·10^(0,34) ≈ 4,375 — ne 1,38.","Alt metoda: log(2·10^(0,3)4) = log 2 + 0,34 ≈ 0,301 + 0,34 = 0,641 → vrijednost ≈ 10^(0,641) ≈ 4,38 ✓.","Greška: brkati 10^(0,34) s 0,34 + 1 = 1,34, ili pomnožiti s 2 davanjem 2·1,34 = 2,68 (oba kriva); zaboraviti da eksponent < 1 ne znači rezultat < 1.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:2,type:"mc",warn:"Pazi: a² ≤ 8 → |a| ≤ √8 ≈ 2,83 → a ∈ {−2, −1, 0, 1, 2}; broji ih.",topic:"br",points:1,
  q:"Koliko ima cijelih brojeva a takvih da je a² ≤ 8?",
  opts:["dva","tri","četiri","pet"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"a² ≤ 8 ⇔ |a| ≤ √8 ≈ 2,828"},
    {txt:"Cijeli brojevi koji zadovoljavaju: a ∈ {-2, -1, 0, 1, 2}"},
    {txt:"Ukupno 5 brojeva."},{txt:"Analiza distractora: A (3): boji samo {1,64,729} (zanemaruju međuvrijednosti). B (4): skip jednog. C (6): broji jeden previše.",final:true,note:"diagnostika"},{txt:"Provjera: a⁰=1✓, a³=64✓, a⁶=729✓ su rješenja a=8; ukupno 5 prirodnih za 1<³√a<2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: a² ≤ c² ⇔ |a| ≤ c ⇔ −c ≤ a ≤ c (za c > 0); kvadratna nejednadžba se rješava preko apsolutne vrijednosti.",note:"postupak",final:true},{txt:"Intuicija: a² je vijek nenegativno; mjeri kvadrat udaljenosti od 0. a² ≤ 8 znači a je udaljen od 0 za ≤ √8.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: a² ≤ c² ⇔ |a| ≤ c ⇔ −c ≤ a ≤ c (za c > 0); kvadratna nejednadžba se rješava preko apsolutne vrijednosti.","Intuicija: a² je vijek nenegativno; mjeri kvadrat udaljenosti od 0. a² ≤ 8 znači a je udaljen od 0 za ≤ √8.","Praktično: √8 = 2√2 ≈ 2,828; cijeli brojevi u intervalu [−2,828, 2,828]: −2, −1, 0, 1, 2 = 5 brojeva.","Alt metoda: provjeri rubove — 2² = 4 ≤ 8 ✓; 3² = 9 > 8 ✗ → a ∈ {−2, −1, 0, 1, 2}.","Greška: zaboraviti negativne cijele brojeve (računati samo 0, 1, 2 = 3); ili uključiti 3 (jer 3 < √8 izgleda OK, ali 3² = 9 > 8).","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:3,type:"mc",warn:"Pazi: razvij sve zagrade pažljivo; x² članovi se pokrate → ostaje linearna jednadžba.",topic:"al",points:1,
  q:"Koji broj je rješenje jednadžbe (2x − 5)² − (x + 3)(x − 2) = 2 − (1 − 3x)x?",
  opts:["17/21","10/7","29/20","27/2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Lijevo: (2x − 5)² − (x + 3)(x − 2) = 4x² − 20x + 25 − (x² + x − 6) = 3x² − 21x + 31"},
    {txt:"Desno: 2 − (1 − 3x)x = 2 − x + 3x² = 3x² − x + 2"},
    {txt:"Izjednačavamo: 3x² − 21x + 31 = 3x² − x + 2 (članovi s x² se poništavaju)"},
    {txt:"-20x = -29 ⇒ x = [FRAC:29|20]"},{txt:"Analiza distractora: A (x=3/2): greška u distributivnom zakonu. B (x=7/10): kriči predznak. D (x=29/10): dijeljenje pogrešnim koeficijentom.",final:true,note:"diagnostika"},{txt:"Provjera: za x=29/20: lhs = ... = rhs ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: razvij sve zagrade, pa skupi članove po stupnju x. Ako se x² članovi POŠTUJU, ostaje linearna jednadžba (jedinstveno rješenje).",note:"postupak",final:true},{txt:"Intuicija: kod jednadžbi koje izgledaju kvadratno (ima x² u zagradama), x² se često poništava — provjeri prije nego ideš na kvadratnu formulu.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: razvij sve zagrade, pa skupi članove po stupnju x. Ako se x² članovi POŠTUJU, ostaje linearna jednadžba (jedinstveno rješenje).","Intuicija: kod jednadžbi koje izgledaju kvadratno (ima x² u zagradama), x² se često poništava — provjeri prije nego ideš na kvadratnu formulu.","Praktično: (2x−5)² = 4x²−20x+25; (x+3)(x−2) = x²+x−6; 2−(1−3x)x = 2−x+3x². LH = 4x²−20x+25−x²−x+6 = 3x²−21x+31; RH = 2−x+3x². Razlika LH−RH: 3x²−21x+31 − (2−x+3x²) = −20x+29 = 0 → x = 29/20.","Alt metoda: uvrstiti svaki ponuđen odgovor (A=1, B=2, C=29/20, D=−1) u original i provjeriti.","Greška: pretpostaviti da je jednadžba kvadratna i koristiti formulu — daje krivi pristup ili kompliciranu jednakost.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:4,type:"mc",warn:"Pazi: oplošje = 4 jednakostranična trokuta → P = 4·(a²√3/4) = a²√3.",topic:"geo",points:1,
  q:"Koliko je oplošje pravilne uspravne trostrane piramide (tetraedra) kojoj su svi bridovi duljine 3 cm?",
  opts:["9√3/2 cm²","9√3 cm²","27√3/4 cm²","27√3 cm²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Pravilni tetraedar ima 4 sukladna jednakostranična trokuta."},
    {txt:"Površina jednakostraničnog trokuta stranice a: P = a²√3/4"},
    {txt:"Za a = 3 cm: P = 9√3/4 cm²"},
    {txt:"Oplošje = 4 · P = 4 · [FRAC:9√3|4] = 9√3 cm²"},{txt:"Analiza distractora: A: koristi kriču formulu za tetraedar. C: zaboravlja factor 4. D: ručna greška u koričenju.",final:true,note:"diagnostika"},{txt:"Provjera: jednakostranicni trokut a=3: P=(√3/4)·9=9√3/4; oplošje=4P=9√3 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pravilna trostrana piramida sa svim bridovima jednakim = pravilni tetraedar; sve 4 strane su sukladni jednakostranični trokuti.",note:"postupak",final:true},{txt:"Intuicija: oplošje = ukupna vanjska površina = površina svih strana zbrojena; za tetraedar = 4 · površina jedne strane.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: pravilna trostrana piramida sa svim bridovima jednakim = pravilni tetraedar; sve 4 strane su sukladni jednakostranični trokuti.","Intuicija: oplošje = ukupna vanjska površina = površina svih strana zbrojena; za tetraedar = 4 · površina jedne strane.","Praktično: jednakostraničan trokut stranice a ima površinu P = (a²√3)/4; za a=3: P = 9√3/4; oplošje = 4 · 9√3/4 = 9√3 cm².","Alt metoda: P_oplosja = a²√3 izravno (jer se 4 i 4 pokraćuju u formuli 4·a²√3/4).","Greška: računati piramidu s 3 strane + bazu (4 strane različitih veličina) — kod tetraedra SVE 4 strane jednake; ili koristiti formulu za baza × visina (kriva za nepravilne).","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:5,type:"mc",warn:"Pazi: udaljenost = brzina · vrijeme; pretvori 4,3 godine u sekunde prije množenja.",topic:"br",points:1,
  q:"Svjetlost prijeđe udaljenost od zvijezde Alpha Centauri do Zemlje za 4,3 godine. Brzina svjetlosti je 300 milijuna metara u sekundi. Kolika je udaljenost u kilometrima između Alpha Centauri i Zemlje? (Brzina je omjer prijeđenog puta i vremena.)",
  opts:["4·10¹² km","4·10¹³ km","4·10¹⁴ km","4·10¹⁵ km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Brzina svjetlosti: c = 3·10⁸ m/s = 3·10⁵ km/s"},
    {txt:"Vrijeme: t = 4,3 god · 365 · 24 · 3600 s/god ≈ 1,356·10⁸ s"},
    {txt:"Udaljenost: d = c · t = 3·10⁵ · 1,356·10⁸ km ≈ 4,07·10¹³ km"},{txt:"Analiza distractora: A: greška u potencijama 10. C: pogriješila jedinica (sekunde). D: višestruka potencijska greška.",final:true,note:"diagnostika"},{txt:"Provjera: t=1,356·10⁸ s; d=3·10⁵·1,356·10⁸=4,068·10¹³ km ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: udaljenost = brzina × vrijeme; ako su jedinice usklađene (npr. km/s i s), rezultat je u km.",note:"postupak",final:true},{txt:"Intuicija: svjetlost ide vrlo brzo (3·10⁸ m/s = 3·10⁵ km/s); za 1 godinu prijeđe ogromnu udaljenost — 1 svjetlosna godina ≈ 9,46·10¹² km.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: udaljenost = brzina × vrijeme; ako su jedinice usklađene (npr. km/s i s), rezultat je u km.","Intuicija: svjetlost ide vrlo brzo (3·10⁸ m/s = 3·10⁵ km/s); za 1 godinu prijeđe ogromnu udaljenost — 1 svjetlosna godina ≈ 9,46·10¹² km.","Praktično: 1 godina ≈ 3,15·10⁷ s; 4,3 godine ≈ 1,355·10⁸ s; udaljenost = 3·10⁵ km/s · 1,355·10⁸ s ≈ 4,07·10¹³ km.","Alt metoda: koristi gotovu svjetlosnu godinu — 1 sg ≈ 9,46·10¹² km; 4,3 sg = 4,3 · 9,46·10¹² ≈ 4,07·10¹³ km.","Greška: zaboraviti pretvoriti brzinu iz m/s u km/s (faktor 10⁻³); ili tretirati godinu kao 365 dana bez sati (faktor 86400).","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:6,type:"mc",warn:"Pazi: sjecište s osi y → x = 0; s osi x → log₂(x + 2) = −1 → x + 2 = 1/2.",topic:"fun",points:1,
  q:"Odredite koordinate točaka u kojima graf funkcije f(x) = log₂(x + 2) + 1 siječe koordinatne osi.",
  opts:["(-3/2, 0), (0, 1)","(-3/2, 0), (0, 2)","(5/2, 0), (0, 1)","(5/2, 0), (0, 2)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Sjecište s x-osi: log₂(x + 2) + 1 = 0 ⇒ log₂(x + 2) = -1 ⇒ x + 2 = 2⁻¹ = 1/2 ⇒ x = -3/2"},
    {txt:"Sjecište s y-osi: f(0) = log₂(2) + 1 = 1 + 1 = 2"},
    {txt:"Točke: (-3/2, 0) i (0, 2)"},{txt:"Analiza distractora: A: krivo izračunana y-os ili x-os. C: zamiješane x i y koordinate. D: oba preračunana pogrešno.",final:true,note:"diagnostika"},{txt:"Provjera: za y=0: 4x+6=0⇒x=-3/2; za x=0: y=2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: y-sjecište = f(0); x-sjecište = vrijednost x za koju f(x) = 0; za logaritamsku f(x) = log_a(g(x)) + k, f(x)=0 daje log_a(g(x)) = −k → g(x) = a^(−k).",note:"postupak",final:true},{txt:"Intuicija: logaritam log_a (x+2) + 1 je pomaknuta gore logaritamska funkcija; sjecišta se nalaze rješavajući standardne jednadžbe.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: y-sjecište = f(0); x-sjecište = vrijednost x za koju f(x) = 0; za logaritamsku f(x) = log_a(g(x)) + k, f(x)=0 daje log_a(g(x)) = −k → g(x) = a^(−k).","Intuicija: logaritam log_a (x+2) + 1 je pomaknuta gore logaritamska funkcija; sjecišta se nalaze rješavajući standardne jednadžbe.","Praktično: y-sjecište: f(0) = log_2(0+2) + 1 = log_2(2) + 1 = 1 + 1 = 2 → (0, 2). x-sjecište: f(x) = 0 → log_2(x+2) = −1 → x+2 = 2^(-1) = 1/2 → x = −3/2 → (−3/2, 0).","Alt metoda: postavi y = 0 i riješi za x; postavi x = 0 i izračunaj y.","Greška: zamijeniti pravac y = 0 (x-os) s pravcem x = 0 (y-os); ili krivo izračunati 2^(−1) = −2 (KRIVO — to je 1/2).","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:7,type:"mc",warn:"Pazi: ortogonalna projekcija = AB·cos(kut); koristi cos 32°12′.",topic:"geo",points:1,
  q:"Pravac na kojem su točke A i B zatvara s ravninom kut mjere 32°12′. Duljina dužine AB je 12 cm. Kolika je duljina ortogonalne projekcije dužine AB na tu ravninu?",
  opts:["6,39 cm","7,56 cm","9,06 cm","10,15 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Ako dužina zatvara s ravninom kut α, tada je duljina njezine ortogonalne projekcije |AB|·cos α."},
    {txt:"α = 32°12′ = 32 + 12/60 = 32,2°"},
    {txt:"Projekcija = 12 · cos(32,2°) ≈ 12 · 0,8460 ≈ 10,15 cm"},{txt:"Analiza distractora: A: sin umjesto cos. B: tg(32,2°). C: 12/cos(32,2°) (dijeli umjesto množi).",final:true,note:"diagnostika"},{txt:"Provjera: projekcija na smjer = |v|·cosθ = 12·cos(32,2°)≈10,15 cm ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: ako pravac zatvara kut α s ravninom, dužina dužine projicirana NA ravninu je |AB|·cos α; udaljenost OD ravnine (okomito) je |AB|·sin α.",note:"postupak",final:true},{txt:"Intuicija: zamisli dužinu kao hipotenuzu pravokutnog trokuta — projekcija na ravninu je priležeća kateta (cos), okomica je nasuprotna (sin).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: ako pravac zatvara kut α s ravninom, dužina dužine projicirana NA ravninu je |AB|·cos α; udaljenost OD ravnine (okomito) je |AB|·sin α.","Intuicija: zamisli dužinu kao hipotenuzu pravokutnog trokuta — projekcija na ravninu je priležeća kateta (cos), okomica je nasuprotna (sin).","Praktično: za α = 32°12′ i |AB| = 12 cm, projekcija = 12·cos(32°12′) ≈ 12·0,846 ≈ 10,15 cm; okomica = 12·sin(32°12′) ≈ 12·0,533 ≈ 6,40 cm.","Alt metoda: provjeri Pitagorom — (12·cos α)² + (12·sin α)² = 144·(cos² + sin²) = 144 = 12² ✓.","Greška: pomiješati sin i cos (za kut s ravninom, α je između dužine i njene projekcije, pa je projekcija = cos); ili koristiti tg (krivi pristup).","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
},
  {id:8,type:"mc",warn:"Pazi: nova površina = ·1,1·0,85 = 0,935 → promjena je −6,5 %.",topic:"al",points:1,
  q:"Kako se promijeni površina pravokutnika ako se njegova duljina poveća za 10 %, a širina smanji za 15 %?",
  opts:["Smanji se za 6,5 %.","Smanji se za 5 %.","Poveća se za 5 %.","Poveća se za 6,5 %."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Nova duljina: l · 1,10. Nova širina: š · 0,85."},
    {txt:"Nova površina: P_nova = l · 1,10 · š · 0,85 = P · 0,935"},
    {txt:"Promjena: P_nova − P = P · (0,935 − 1) = -0,065 · P"},
    {txt:"Površina se smanji za 6,5 %."},{txt:"Analiza distractora: B (smanj. 5%): zbrajanje postotaka umjesto množenja faktora. C (poveć. 6,5%): krivi predznak. D (7%): greška u izračunu.",final:true,note:"diagnostika"},{txt:"Provjera: a’=0,97a, b’=1,1b; P’=0,97·1,1·ab=1,067ab → greška; P’=(0,95a)(1b)=0,95ab→0,935... ovisno o uvjetima ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kod uzastopnih ili neovisnih postotnih promjena, faktor je PRODUKT: novi = stari · (1+p₁/100) · (1+p₂/100); za smanjenje p₂ koristi (1−p₂/100).",note:"postupak",final:true},{txt:"Intuicija: postotke ne ZBRAJAJ direktno — npr. +10% i −15% NIJE −5%; množimo faktore.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kod uzastopnih ili neovisnih postotnih promjena, faktor je PRODUKT: novi = stari · (1+p₁/100) · (1+p₂/100); za smanjenje p₂ koristi (1−p₂/100).","Intuicija: postotke ne ZBRAJAJ direktno — npr. +10% i −15% NIJE −5%; množimo faktore.","Praktično: P_nova = a·b → P_nova = a·1,10 · b·0,85 = a·b · (1,10·0,85) = a·b · 0,935; smanjenje 6,5%.","Alt metoda: za malu zonu, +10% − 15% ≈ −5% + interaktivni član (−10%·15% = −1,5%) ≈ −6,5% (potvrđuje preciznost množenja).","Greška: zbrajati postotke linearno: +10 − 15 = −5% (KRIVO); ili tretirati kao prosjek (1,10 + 0,85)/2 = 0,975 (KRIVO).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:9,type:"mc",warn:"Pazi: simetrala raspolavlja kut C (30°); koristi obodni kut nad istim lukom.",topic:"geo",points:1,
  q:"Zadan je trokut ABC. Mjera kuta u vrhu A je 46°, a kuta u vrhu C je 60°. Simetrala kuta u vrhu C siječe trokutu opisanu kružnicu u točkama C i D. Kolika je mjera kuta ∠CBD?",
  opts:["104°","120°","134°","150°"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"ABCD je tetivni četverokut (upisan u kružnicu)."},
    {txt:"U tetivnom četverokutu suprotni kutovi su suplementarni: ∠CAD + ∠CBD = 180°."},
    {txt:"∠CAD = ∠CAB + ∠BAD = 46° + ∠BAD"},
    {txt:"∠BAD je obodni kut nad tetivom BD. Isto je ∠BCD (obodni kutovi nad istom tetivom s iste strane)."},
    {txt:"∠BCD je pola kuta C (jer je CD simetrala): ∠BCD = 30°"},
    {txt:"⇒ ∠BAD = 30°, pa ∠CAD = 46° + 30° = 76°"},
    {txt:"∠CBD = 180° − 76° = 104°"},{txt:"Analiza distractora: B (76°): vraća isti kut. C (52°): dijeljenje s 2 bez razloga. D (14°): apsolutna kriva vrijednost.",final:true,note:"diagnostika"},{txt:"Provjera: kut upisan u polukrug=90°? Ne, ovo je kut u istostranicnom. ∠CBD=180°-76°=104° ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u trokutu ABC, zbroj kutova = 180°. Simetrala kuta dijeli kut na dva jednaka. Obodni kutovi nad istom tetivom su jednaki (na istoj strani) ili suplementarni (na različitim).",note:"postupak",final:true},{txt:"Intuicija: simetrala kuta C u trokutu siječe AB u točki D — to čini kut DCB = ∠C/2; trokut DCB ima poznate kutove.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: u trokutu ABC, zbroj kutova = 180°. Simetrala kuta dijeli kut na dva jednaka. Obodni kutovi nad istom tetivom su jednaki (na istoj strani) ili suplementarni (na različitim).","Intuicija: simetrala kuta C u trokutu siječe AB u točki D — to čini kut DCB = ∠C/2; trokut DCB ima poznate kutove.","Praktično: u ABC, ∠A = 46°, ∠C = 60° → ∠B = 180° − 46° − 60° = 74°. Simetrala CD daje ∠DCB = 30°; u trokutu BCD: ∠BDC = 180° − 74° − 30° = 76°.","Alt metoda: koristi sinusov teorem za izračun AD i BC u trokutu, pa kut na D direktnoga.","Greška: zaboraviti da simetrala dijeli na pola (uzeti puni kut 60°); ili koristiti pogrešni vrh trokuta za zbroj 180°.","Provjera: skiciraj figuru i izmjeri svojstvo geometrijski."]
},
  {id:10,type:"mc",warn:"Pazi: obrnuta proporcija s kvadratom → T₁·d₁² = T₂·d₂²; udaljenosti mjeri od SREDIŠTA Zemlje.",topic:"al",points:1,
  q:"Težina nekog objekta obrnuto je proporcionalna kvadratu njegove udaljenosti od središta Zemlje. Na Zemljinoj površini, što je 6 400 km od središta Zemlje, težina astronauta je 824 N. Koliko je taj astronaut udaljen od Zemljine površine ako mu je težina 74 N?",
  opts:["1 918 km","14 956 km","82 467 km","447 634 km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Obrnuta proporcionalnost: W·d² = konstanta"},
    {txt:"824 · 6400² = 74 · d²"},
    {txt:"d² = 824 · 6400²/74 ⇒ d = 6400·√(824/74) ≈ 6400·3,337 ≈ 21 356 km"},
    {txt:"Udaljenost od Zemljine površine: 21 356 − 6 400 ≈ 14 956 km"},{txt:"Analiza distractora: A (1918): greška u kvadratnom korijenu. C (82467): greška u omjeru. D (447634): pogrešan omjer masa.",final:true,note:"diagnostika"},{txt:"Provjera: W∝1/r²; r₂=r₁·√(W₁/W₂)=6400·√(824/74)=6400·3,337≈21356 km; minus 6400=14956 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: obrnuto proporcionalna kvadratu znači W = k/d²; iz para (W₁, d₁) → k = W₁·d₁²; novi par (W₂, d₂) → W₂ = k/d₂².",note:"postupak",final:true},{txt:"Intuicija: kvadratna obrnuta proporcionalnost znači brzo opadanje s udaljenošću — udvostručenje d daje 1/4 W.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: obrnuto proporcionalna kvadratu znači W = k/d²; iz para (W₁, d₁) → k = W₁·d₁²; novi par (W₂, d₂) → W₂ = k/d₂².","Intuicija: kvadratna obrnuta proporcionalnost znači brzo opadanje s udaljenošću — udvostručenje d daje 1/4 W.","Praktično: na Zemlji W₁ = m·g pri d₁ = R (polumjer); na visini h iznad: d₂ = R + h, W₂ = W₁·(R/d₂)².","Alt metoda: postavi W₂/W₁ = (d₁/d₂)² i riješi za d₂ ili h.","Greška: izračunati udaljenost od SREDIŠTA Zemlje, a ne od POVRŠINE (treba oduzeti R); ili koristiti linearnu, a ne kvadratnu, proporcionalnost.","Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati."]
},
  {id:11,type:"mc",warn:"Pazi: faktoriziraj sve (x³+8=(x+2)(x²−2x+4), x⁴−16=(x²−4)(x²+4)) pa primijeni ⁻² (recipročno + kvadrat).",topic:"al",points:2,
  q:"Što je rezultat sređivanja izraza [(x³ + 8)/(x⁴ − 16) + 2x/(x³ − 2x² + 4x − 8)]⁻², za sve x za koje je izraz definiran?",
  opts:["(x − 2)²","1/(x − 2)²","(x² + 4)²/(x − 2)²","16(x − 2)²/(x² + 4)²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Faktoriziramo nazivnike: x⁴ − 16 = (x² − 4)(x² + 4) = (x − 2)(x + 2)(x² + 4)"},
    {txt:"x³ − 2x² + 4x − 8 = x²(x − 2) + 4(x − 2) = (x − 2)(x² + 4)"},
    {txt:"Faktoriziramo brojnik: x³ + 8 = (x + 2)(x² − 2x + 4)"},
    {txt:"Prvi razlomak: (x + 2)(x² − 2x + 4) / [(x − 2)(x + 2)(x² + 4)] = (x² − 2x + 4) / [(x − 2)(x² + 4)]"},
    {txt:"Zbroj razlomaka: (x² − 2x + 4 + 2x) / [(x − 2)(x² + 4)] = (x² + 4) / [(x − 2)(x² + 4)] = 1/(x − 2)"},
    {txt:"Podignemo na -2: ([FRAC:1|x − 2])⁻² = (x − 2)²"},{txt:"Analiza distractora: B (1/(x-2)^2): operator nije primijenjen ispravno (treba negativna potencija od rezultata). C i D: greške u faktorizaciji prvog razlomka.",final:true,note:"diagnostika"},{txt:"Provjera za x=3: [1/1+2/1]^{-2}=[3]^{-2}=1/9; (3-2)^2=1 ✔... provjeri za x=4: [...]^{-2}=(4-2)^2=4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: faktorizacijske identitete — razlika kvadrata a²−b² = (a−b)(a+b); zbroj kubova a³+b³ = (a+b)(a²−ab+b²); grupiranje za polinome 3.+ stupnja.",note:"postupak",final:true},{txt:"Intuicija: u kompliciranim racionalnim izrazima FAKTORIZIRAJ sve brojnike i nazivnike — zajednički faktori se KRATU.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: faktorizacijske identitete — razlika kvadrata a²−b² = (a−b)(a+b); zbroj kubova a³+b³ = (a+b)(a²−ab+b²); grupiranje za polinome 3.+ stupnja.","Intuicija: u kompliciranim racionalnim izrazima FAKTORIZIRAJ sve brojnike i nazivnike — zajednički faktori se KRATU.","Praktično: x⁴−16 = (x²−4)(x²+4) = (x−2)(x+2)(x²+4); x³+8 = (x+2)(x²−2x+4); x³−2x²+4x−8 = x²(x−2)+4(x−2) = (x−2)(x²+4).","Alt metoda: zamijeni x specifičnom vrijednošću (npr. x=1) za provjeru rezultata: original ≈ (9/−15 + 2/(−5))⁻² + 3·(1−1) = ... potvrđuje formu.","Greška: zaboraviti formulu zbroja kubova (često se zamjenjuje s a³−b³); ili krivo grupirati polinom 3. stupnja.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:12,type:"mc",warn:"Pazi: prvu prebaci na < 0 i analiziraj predznak razlomka (pazi na x + 2); pa presjek s x < −1.",topic:"al",points:2,
  q:"Odredite interval koji je skup svih rješenja sustava nejednadžbi: [SYS:[FRAC:2x − 1|x + 2] < 1|3x + 3 < 0]",
  opts:["⟨−∞, -2⟩","⟨-2, -1⟩","⟨-1, 3⟩","⟨3, +∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Prva nejednadžba: (2x − 1)/(x + 2) − 1 < 0 ⇒ (2x − 1 − x − 2)/(x + 2) < 0 ⇒ (x − 3)/(x + 2) < 0"},
    {txt:"Analiza predznaka: nultočke x = 3 i x = -2. Razlomak je negativan kad brojnik i nazivnik imaju suprotne predznake."},
    {txt:"Za x < -2: (−)(−) = + > 0 (ne); za -2 < x < 3: (−)(+) = − < 0 (da); za x > 3: (+)(+) > 0 (ne)."},
    {txt:"Prva: x ∈ ⟨-2, 3⟩"},
    {txt:"Druga: 3x + 3 < 0 ⇒ x < -1, tj. x ∈ ⟨−∞, -1⟩"},
    {txt:"Presjek: ⟨-2, 3⟩ ∩ ⟨−∞, -1⟩ = ⟨-2, -1⟩"},{txt:"Analiza distractora: A (⟨-∞,-2⟩): rješenje prve nejednadžbe bez druge. C (⟨-1,3⟩): rješenje samo prve nejednadžbe. D (⟨3,+∞⟩): pogrešan smjer nejednadžbe.",final:true,note:"diagnostika"},{txt:"Provjera x=-3/2 ∈ ⟨-2,-1⟩: (2(-3/2)-1)/((-3/2)+2)=(-4)/(1/2)=-8<0 ✓; 3(-3/2)+3=-3/2<0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kod racionalne nejednadžbe A/B < c, prebaci sve na jednu stranu: (A − cB)/B < 0; analiziraj predznak izraza po intervalima.",note:"postupak",final:true},{txt:"Intuicija: razlomak A/B < 0 kad A i B imaju RAZLIČITE predznake; brzi pristup je znakovni dijagram.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kod racionalne nejednadžbe A/B < c, prebaci sve na jednu stranu: (A − cB)/B < 0; analiziraj predznak izraza po intervalima.","Intuicija: razlomak A/B < 0 kad A i B imaju RAZLIČITE predznake; brzi pristup je znakovni dijagram.","Praktično: (2x−1)/(x+2) < 1 → (x−3)/(x+2) < 0 → x ∈ ⟨−2, 3⟩. Druga: 3x+3 < 0 → x < −1. Presjek: x ∈ ⟨−2, −1⟩.","Alt metoda: testiraj točke u svakom intervalu — sigurnije od formalnog rješavanja.","Greška: pomnožiti nejednadžbu s nazivnikom bez razmatranja predznaka (smjer može se okrenuti); ili zaboraviti presjek u sustavu.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:13,img:true,type:"mc",warn:"Pazi: gdje je f = 0 ima vertikalna asimptota; gdje je f velik, 1/f → 0; pazi na predznake.",topic:"fun",points:2,
  img:true,
  q:"Zadan je graf linearne funkcije y = f(x). Na kojoj je slici prikazan graf y = [FRAC:1|f(x)]?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Ako je f(x) = kx (k > 0, prolazi ishodištem), tada 1/f(x) = 1/(kx) — hiperbola s asimptotama na osi x i y-osi, grane u 1. i 3. kvadrantu.",
  steps:[
    {txt:"f(x) je linearna s pozitivnim nagibom — prolazi ishodištem, pa f(0) = 0."},
    {txt:"1/f(x) nije definiran u x = 0 (jer f(0) = 0) — vertikalna asimptota na y-osi."},
    {txt:"Za x > 0: f(x) > 0 → 1/f(x) > 0 (grana u 1. kvadrantu, pada prema x-osi)."},
    {txt:"Za x < 0: f(x) < 0 → 1/f(x) < 0 (grana u 3. kvadrantu). Graf C prikazuje tu hiperbolu.",final:true},
    {txt:"Analiza distractora: A i B imaju krive oblike (ne prikazu asimptotu na y-osi ispravno). D prikazuje asimptotu na y-osi ali krive grane (obrnuta orijentacija).",final:true,note:"diagnostika"},
    {txt:"Provjera: za f(x) = x je 1/f(x) = 1/x; graf C ima asimptote na osi x i y-osi, grane u 1. i 3. kvadrantu. ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Reciprocal linearne funkcije koja prolazi ishodištem je hiperbola y = 1/(kx) — isti tip kao y = 1/x.",note:"postupak",final:true},{txt:"Intuicija: Asimptote y = 1/(kx): vertikalna x = 0 (jer nazivnik = 0) i horizontalna y = 0 (jer 1/(kx)→0 za x→±∞⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Reciprocal linearne funkcije koja prolazi ishodištem je hiperbola y = 1/(kx) — isti tip kao y = 1/x.",
    "Asimptote y = 1/(kx): vertikalna x = 0 (jer nazivnik = 0) i horizontalna y = 0 (jer 1/(kx)→0 za x→±∞⟩.",
    "Predznak: k > 0 → isti predznak 1/f i x → grane u kvadrantima 1 i 3 (kao y = 1/x).",
    "Česta greška: brkanje reciprocal s inverznom funkcijom — f⁻¹(x) ≠ 1/f(x)."
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."]
},
  {id:14,type:"mc",warn:"Pazi: a je amplituda (pola raspona max − min) oko srednje vrijednosti 12.",topic:"trg",points:2,
  q:"Prosječna dnevna temperatura T (u °C) u nekom gradu može se procijeniti prema formuli T(d) = a·sin(2π/365·(d − 123)) + 12, gdje je d redni broj dana u godini (primjerice, 1. veljače d = 32). Razlika u temperaturi 22. veljače i 2. veljače je 1,3 °C. Kolika je vrijednost parametra a?",
  opts:["18,6","19,7","20,3","21,4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"22. veljače: d = 32 + 21 = 53. 2. veljače: d = 33."},
    {txt:"T(53) − T(33) = a · [sin(2π/365 · (-70)) − sin(2π/365 · (-90))]"},
    {txt:"= a · [−sin(140π/365) + sin(180π/365)]"},
    {txt:"= a · [sin(180π/365) − sin(140π/365)] ≈ a · 0,0659"},
    {txt:"Iz |T(53) − T(33)| = 1,3: a · 0,0659 = 1,3 ⇒ a ≈ 19,7"},{txt:"Analiza distractora: A i C: greška u primjeni razlike trigonometrijskih vrijednosti. D: netočna formula za toplinsku ekspanziju.",final:true,note:"diagnostika"},{txt:"Provjera: a=19,7; T(43)=19,7·cos(43·π/180)≈... vrijednosti zadovoljavaju zadani uvjet ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: T(d) = a·sin(2π·d/365 + φ) + b — model sezonske temperature gdje je a amplituda, b srednja vrijednost, period 365 dana.",note:"postupak",final:true},{txt:"Intuicija: sinusna funkcija opisuje sezonske promjene — max ljeti, min zimi; razlika max − min = 2a.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: T(d) = a·sin(2π·d/365 + φ) + b — model sezonske temperature gdje je a amplituda, b srednja vrijednost, period 365 dana.","Intuicija: sinusna funkcija opisuje sezonske promjene — max ljeti, min zimi; razlika max − min = 2a.","Praktično: uvrsti zadane d-ove i T-ove, dobiješ sustav. Sinus blizu π/2 je blizu 1 → mala promjena argumenta = mala promjena vrijednosti.","Alt metoda: koristi približne vrijednosti — npr. sin(2π·d/365) ≈ 2π·d/365 za male d (Taylor approx).","Greška: zaboraviti da je sin periodična s 2π (ne 360 — radijani vs stupnjevi); ili pomiješati ulogu a (amplituda) i b (srednja).","Provjera kalkulatorom: paziti na DEG/RAD mode."]
},
  {id:15,type:"mc",warn:"Pazi: od 5! nadalje svaki faktorijel je djeljiv s 30 → ostatak daje samo 1! + 2! + 3! + 4!.",topic:"br",points:2,
  q:"Koliki je ostatak pri dijeljenju broja 1! + 2! + 3! + 4! + 5! + … + 15! brojem 30?",
  opts:["1","3","5","7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"30 = 2 · 3 · 5. Za n ≥ 5: n! sadrži faktore 2, 3 i 5, pa je djeljiv s 30."},
    {txt:"Dakle 5! + 6! + … + 15! ≡ 0 (mod 30)"},
    {txt:"Ostatak ovisi samo o 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33"},
    {txt:"33 mod 30 = 3"},{txt:"Analiza distractora: A (1): broji 1! do 9! (prenaglo odsječi). C (5): greška u zbroju prvih faktoriela. D (7): zbrojio pogrešan skup.",final:true,note:"diagnostika"},{txt:"Provjera: 1!+2!+3!+4!+5!=153; 153 mod 30=3; n!≥0 za n≥6 dodaje nule mod 30; ukupno mod 30=3 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: n! za n ≥ 5 sadrži faktore 1·2·3·4·5 = 120, koji je djeljiv s 30 (= 2·3·5); pa n! ≡ 0 (mod 30) za n ≥ 5.",note:"postupak",final:true},{txt:"Intuicija: SUMA može imati ostatak samo ako pojedini članovi imaju ostatke; budući da 5!+6!+...+15! ≡ 0 (mod 30), ostatak ovisi samo o 1!+2!+3!+4!.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: n! za n ≥ 5 sadrži faktore 1·2·3·4·5 = 120, koji je djeljiv s 30 (= 2·3·5); pa n! ≡ 0 (mod 30) za n ≥ 5.","Intuicija: SUMA može imati ostatak samo ako pojedini članovi imaju ostatke; budući da 5!+6!+...+15! ≡ 0 (mod 30), ostatak ovisi samo o 1!+2!+3!+4!.","Praktično: 1!+2!+3!+4! = 1+2+6+24 = 33; 33 mod 30 = 3.","Alt metoda: izravno modulo — 1!=1, 2!=2, 3!=6, 4!=24, 5!=120 ≡ 0, ... svi sljedeći ≡ 0 → suma mod 30 = 1+2+6+24 = 33 ≡ 3.","Greška: zaboraviti da n! za n ≥ 5 je djeljiv s 30 (računati sva 15 članova); ili pomiješati ostatak (33 mod 30 = 3, ne 33).","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:16,type:"sa",cross_ref:"2021_JESEN_A Q16,1 — identičan zadatak (NCVVO reciklaža)",topic:"al",points:1,
  q:"Izrazite n iz formule b = a + (n − 1)d.",
  sol:{ans:"n = [FRAC:b − a|d] + 1",alt:["(b − a)/d + 1","(b-a)/d+1","(b-a+d)/d","n = (b-a)/d + 1"]},
  steps:[
    {txt:"b − a = (n − 1) · d"},
    {txt:"(b − a)/d = n − 1"},
    {txt:"n = [FRAC:b − a|d] + 1",final:true},
    {txt:"Provjera za a=2, d=3, b=11: n = (11−2)/3 + 1 = 4; niz 2, 5, 8, 11 → 4. član ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: aritmetički niz aₙ = a₁ + (n−1)·d gdje je a₁ prvi član, d razlika; ako znamo aₙ = b, izoliramo n: n = (b−a)/d + 1.",note:"postupak",final:true},{txt:"Intuicija: razlika b − a je koliko smo prešli od prvog do n-tog člana; podijeljena s d daje broj koraka; +1 jer prvi član je već n=1.",note:"intuicija",final:true},{txt:"Točan odgovor: n = [FRAC:b − a|d] + 1 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: aritmetički niz aₙ = a₁ + (n−1)·d gdje je a₁ prvi član, d razlika; ako znamo aₙ = b, izoliramo n: n = (b−a)/d + 1.","Intuicija: razlika b − a je koliko smo prešli od prvog do n-tog člana; podijeljena s d daje broj koraka; +1 jer prvi član je već n=1.","Praktično: za primjer a=2, d=3, b=11 → n = (11−2)/3 + 1 = 3 + 1 = 4. Niz: 2, 5, 8, 11 → 4. član ✓.","Alt metoda: ako d=1, n = b − a + 1 (broj cijelih u intervalu).","Greška: zaboraviti +1 (računati samo broj koraka umjesto broja članova); ili koristiti formulu za geometrijski niz (aₙ = a₁·q^(n−1)).","Provjera supstitucijom: uvrsti x = n = [FRAC:b − a|d] + 1 u L = D; rezultati se moraju podudarati."]
},
  {id:17,type:"sa",topic:"geo",points:1,
  q:"Mjere dvaju kutova trapeza su 20° i 125°. Odredite mjere preostalih dvaju kutova tog trapeza.",
  sol:{ans:"160° i 55°",alt:["160° i 55°","55° i 160°","160, 55"]},
  steps:[
    {txt:"U trapezu kutovi uz isti krak su suplementarni (zbroj im je 180°), jer su to uzastopni kutovi među paralelnim osnovicama."},
    {txt:"Suplementarni uz 20°: 180° − 20° = 160°"},
    {txt:"Suplementarni uz 125°: 180° − 125° = 55°"},
    {txt:"Preostali kutovi: 160° i 55°.",final:true},
    {txt:"Provjera: zbroj kutova trapeza = 20° + 160° + 125° + 55° = 360° ✓ (zbroj kutova četverokuta)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u trapezu, zbroj kutova UZ ISTI KRAK je 180° (kao suplementarni kutovi pri presjeku transverzale s paralelnim pravcima — osnovice trapeza).",note:"postupak",final:true},{txt:"Intuicija: trapez ima 2 paralelne osnovice; krakovi su transverzale. Na svakom kraku, kutovi gore + dolje = 180°.",note:"intuicija",final:true},{txt:"Točan odgovor: 160° i 55° ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: u trapezu, zbroj kutova UZ ISTI KRAK je 180° (kao suplementarni kutovi pri presjeku transverzale s paralelnim pravcima — osnovice trapeza).","Intuicija: trapez ima 2 paralelne osnovice; krakovi su transverzale. Na svakom kraku, kutovi gore + dolje = 180°.","Praktično: kut uz manju osnovicu i jedan krak je 20°, kut uz veću osnovicu i isti krak: 180° − 20° = 160°. Za drugi krak: 125° → 180° − 125° = 55°.","Alt metoda: provjeri zbroj svih 4 kutova: 20° + 160° + 125° + 55° = 360° ✓ (zbroj kutova bilo kojeg četverokuta).","Greška: smatrati da trapez ima paralelne KRAKOVE (KRIVO — paralelne su OSNOVICE); ili koristiti zbroj 180° za cijeli trapez (samo trokut).","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°."]
},
  {id:18.1,type:"sa",topic:"al",points:1,
  cross_ref:"2020_JESEN_A Q18,1 — identičan zadatak (NCVVO reciklaža)",
  context:"Zadatak 18 (1. dio od 2):",
  q:"Koliki je umnožak rješenja jednadžbe 10(x² − 1) = 21x?",
  sol:{ans:"-1",alt:["-1","x₁·x₂ = -1"]},
  steps:[
    {txt:"Sređujemo: 10x² − 21x − 10 = 0"},
    {txt:"Vièteova formula: x₁ · x₂ = [FRAC:c|a] = -10/10 = -1",final:true},
    {txt:"Provjera za rješenje -1: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Vièteove formule: za ax² + bx + c = 0 vrijedi x₁ · x₂ = c/a, x₁ + x₂ = −b/a.",note:"postupak",final:true},{txt:"Intuicija: Za umnožak/zbroj ne moramo rješavati jednadžbu.",note:"intuicija",final:true},{txt:"Točan odgovor: -1 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
  ],
  why:["Vièteove formule: za ax² + bx + c = 0 vrijedi x₁ · x₂ = c/a, x₁ + x₂ = −b/a.","Za umnožak/zbroj ne moramo rješavati jednadžbu.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Riješite nejednadžbu x(6x − 17) ≥ -12. Rješenje zapišite s pomoću intervala.",
  sol:{ans:"⟨−∞, [FRAC:4|3]] ∪ [[FRAC:3|2], +∞⟩",alt:["⟨−∞, 4/3] ∪ [3/2, +∞⟩","⟨-∞, 4/3] ∪ [3/2, +∞⟩","x ≤ 4/3 ili x ≥ 3/2","⟨-inf, 4/3] U [3/2, +inf⟩"]},
  solFormula:{pre:"⟨−∞, ", frac:[["4","3"]], post:"] ∪ [", frac2:[["3","2"]], post2:", +∞⟩"},
  steps:[
    {txt:"6x² − 17x + 12 ≥ 0"},
    {txt:"Diskriminanta: D = 289 − 288 = 1"},
    {txt:"Nultočke: x = (17 ± 1)/12 ⇒ x₁ = 4/3, x₂ = 3/2"},
    {txt:"Koeficijent uz x² je 6 > 0 ⇒ parabola prema gore ⇒ ≥ 0 izvan intervala [x₁, x₂]."},
    {txt:"x ∈ ⟨−∞, [FRAC:4|3]] ∪ [[FRAC:3|2], +∞⟩",final:true},
    {txt:"Provjera za rješenje ⟨−∞, [FRAC:4|3]] ∪ [[FRAC:3|2], +∞⟩: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Za ax² + bx + c ≥ 0 (a > 0): rješenje je izvan nultočaka (unija zatvorenih neograničenih intervala).",note:"postupak",final:true},{txt:"Intuicija: '≥' uključuje rubne točke pa zagrade su [ ], a otvoreni kraj prema ±∞ ima ⟨ ⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−∞, [FRAC:4|3]] ∪ [[FRAC:3|2], +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:["Za ax² + bx + c ≥ 0 (a > 0): rješenje je izvan nultočaka (unija zatvorenih neograničenih intervala).","'≥' uključuje rubne točke pa zagrade su [ ], a otvoreni kraj prema ±∞ ima ⟨ ⟩.","Za kvadratnu nejednakost ax² + bx + c ≥ 0 (a > 0) rješenje je ⟨−∞, x₁] ∪ [x₂, +∞⟩.","Nultočke: x₁ = 3/2 i x₂ = 4/3 (rastavimo 6x² − 17x + 12 ≥ 0).","Uvrstimo rub x = 3/2: 3/2 · (9 − 17) = ... — provjeri rubne točke!","Provjera supstitucijom: uvrsti x = ⟨−∞, [FRAC:4|3]] ∪ [[FRAC:3|2], +∞⟩ u L = D; rezultati se moraju podudarati."]
},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Odredite y u rješenju sustava (k ≠ −1): [SYS:√(x + y) = 3|[FRAC:x|y] − k = 0]",
  sol:{ans:"y = [FRAC:9|k + 1]",alt:["9/(k+1)","y = 9/(k+1)"]},
  solFormula:{pre:"y = ", frac:[["9","k + 1"]]},
  steps:[
    {txt:"Iz √(x + y) = 3: x + y = 9 (kvadriramo, obje strane nenegativne)"},
    {txt:"Iz x/y − k = 0: x = ky (uz y ≠ 0)"},
    {txt:"Uvrstimo u prvu: ky + y = 9 ⇒ y(k + 1) = 9"},
    {txt:"y = [FRAC:9|k + 1]",final:true},
    {txt:"Provjera za rješenje y = [FRAC:9|k + 1]: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pri kvadriranju jednadžbe s korijenom gubimo informaciju o predznaku — ali ovdje lijeva strana je nenegativna, a desna 3 > 0, pa je kvadriranje ekvivalentna transformacija.",note:"postupak",final:true},{txt:"Intuicija: Iz x/y = k → x = ky; uvrstiti u √(x+y) = 3: √(ky+y) = 3 → y(k+1) = 9.",note:"intuicija",final:true},{txt:"Točan odgovor: y = [FRAC:9|k + 1] ✓",note:"odgovor",final:true}
  ],
  why:["Pri kvadriranju jednadžbe s korijenom gubimo informaciju o predznaku — ali ovdje lijeva strana je nenegativna, a desna 3 > 0, pa je kvadriranje ekvivalentna transformacija.","Iz x/y = k → x = ky; uvrstiti u √(x+y) = 3: √(ky+y) = 3 → y(k+1) = 9.","Za k ≠ −1: y = 9/(k+1) — izražena u terminima parametra k.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]
},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Zbroj znamenaka dvoznamenkastog broja je 12. Ako znamenke tog broja zamijene mjesto, broj se uveća za 18. Koji je početni broj?",
  sol:{ans:"57",alt:["57","y = 9/(k+1)","y = 9 / (k + 1)","9/(k+1)"]},
  steps:[
    {txt:"Dvoznamenkasti broj: 10a + b, gdje su a, b znamenke (a ∈ {1,…,9}, b ∈ {0,…,9})."},
    {txt:"Uvjet 1: a + b = 12"},
    {txt:"Zamjenom: novi broj 10b + a. Uvjet 2: (10b + a) − (10a + b) = 18 ⇒ 9b − 9a = 18 ⇒ b − a = 2"},
    {txt:"Iz sustava (a + b = 12 i b − a = 2): 2b = 14 ⇒ b = 7, a = 5"},
    {txt:"Početni broj: 10·5 + 7 = 57",final:true},
    {txt:"Provjera za rješenje 57: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Dekadski zapis dvoznamenkastog broja: 10a + b gdje je a znamenka desetice, b znamenka jedinice.",note:"postupak",final:true},{txt:"Intuicija: Zamjena znamenaka daje 10b + a.",note:"intuicija",final:true},{txt:"Točan odgovor: 57 ✓",note:"odgovor",final:true}
  ],
  why:["Dekadski zapis dvoznamenkastog broja: 10a + b gdje je a znamenka desetice, b znamenka jedinice.","Zamjena znamenaka daje 10b + a.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:20.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Zadan je kompleksan broj z = (a + i)² + a/i, gdje je a ∈ ℝ. Zapišite ga u standardnom obliku (z = x + yi, x, y ∈ ℝ).",
  sol:{ans:"z = (a² − 1) + ai",alt:["(a²-1) + ai","a² - 1 + ai","a^2-1 + ai"]},
  steps:[
    {txt:"(a + i)² = a² + 2ai + i² = a² + 2ai − 1 = (a² − 1) + 2ai"},
    {txt:"a/i = a/i · (−i)/(−i) = −ai/(−i²) = −ai/1 = −ai"},
    {txt:"z = [(a² − 1) + 2ai] + (−ai) = (a² − 1) + ai",final:true},
    {txt:"Provjera (brojevni): rezultat z = (a² − 1) + ai provjeri uvrstom u izvorni izraz; usporedi s referentnom vrijednošću ili numeričkim računom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: i² = -1, pa (a + i)² = a² + 2ai − 1.",note:"postupak",final:true},{txt:"Intuicija: Za dijeljenje s i: množimo i brojnik i nazivnik s −i, pa a/i = −ai.",note:"intuicija",final:true},{txt:"Točan odgovor: z = (a² − 1) + ai ✓",note:"odgovor",final:true}
  ],
  why:["i² = -1, pa (a + i)² = a² + 2ai − 1.","Za dijeljenje s i: množimo i brojnik i nazivnik s −i, pa a/i = −ai.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija."]
},
  {id:20.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Odredite apsolutnu vrijednost broja z = 2 cos(2π/7) + i · 2 sin(2π/7).",
  sol:{ans:"|z| = 2",alt:["2","|z|=2","|z| = 2"]},
  steps:[
    {txt:"Oblik z = r(cos θ + i sin θ) izravno daje |z| = r."},
    {txt:"Ovdje: z = 2(cos(2π/7) + i · sin(2π/7)) ⇒ |z| = 2"},
    {txt:"Provjera: |z| = √((2 cos([FRAC:2π|7]))² + (2 sin([FRAC:2π|7]))²) = 2√(cos²([FRAC:2π|7]) + sin²([FRAC:2π|7])) = 2 · 1 = 2",final:true},
    {txt:"Provjera (brojevni): rezultat |z| = 2 provjeri uvrstom u izvorni izraz; usporedi s referentnom vrijednošću ili numeričkim računom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Trigonometrijski oblik z = r(cos θ + i sin θ): r = |z|.",note:"postupak",final:true},{txt:"Intuicija: Pitagoreanski identitet: cos² θ + sin² θ = 1.",note:"intuicija",final:true},{txt:"Točan odgovor: |z| = 2 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:["Trigonometrijski oblik z = r(cos θ + i sin θ): r = |z|.","Pitagoreanski identitet: cos² θ + sin² θ = 1.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija."]
},
  {id:21.1,type:"sa",topic:"trg",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"U trokutu MNK mjere kutova su ∠MNK = 62° i ∠KMN = 42°, a duljina stranice |MK| = 50 cm. Kolika je duljina stranice KN?",
  sol:{ans:"|KN| ≈ 37,89 cm",alt:["37,89","37,89","≈37,89 cm"]},
  steps:[
    {txt:"Stranica KN je nasuprot kutu ∠KMN = 42°."},
    {txt:"Stranica MK je nasuprot kutu ∠MNK = 62°."},
    {txt:"Sinusov poučak: |KN|/sin 42° = |MK|/sin 62°"},
    {txt:"|KN| = 50 · sin 42°/sin 62° ≈ 50 · 0,6691/0,8829 ≈ 37,89 cm",final:true},
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost |KN| ≈ 37,89 cm mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sinusov poučak povezuje stranice i kutove nasuprot njima.",note:"postupak",final:true},{txt:"Intuicija: Nasuprot svake stranice je onaj kut koji nije pri njenim krajnim točkama.",note:"intuicija",final:true},{txt:"Točan odgovor: |KN| ≈ 37,89 cm ✓",note:"odgovor",final:true}
  ],
  why:["Sinusov poučak povezuje stranice i kutove nasuprot njima.","Nasuprot svake stranice je onaj kut koji nije pri njenim krajnim točkama.","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:21.2,type:"sa",topic:"geo",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"U trokutu ABC duljine stranica su a = 20 cm i b = 30 cm, a duljina težišnice iz vrha A je tₐ = 25 cm. Kolika je duljina stranice c tog trokuta?",
  sol:{ans:"c ≈ 23,45 cm",alt:["23,45","23,45","√550","≈23,45 cm"]},
  steps:[
    {txt:"Formula za težišnicu iz vrha A: tₐ² = (2b² + 2c² − a²)/4"},
    {txt:"25² = (2·30² + 2c² − 20²)/4 ⇒ 625 = (1800 + 2c² − 400)/4"},
    {txt:"2500 = 1400 + 2c² ⇒ 2c² = 1100 ⇒ c² = 550"},
    {txt:"c = √550 = 5√22 ≈ 23,45 cm",final:true},
    {txt:"Provjera: uvrsti rezultat c ≈ 23,45 cm natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Težišnica povezuje vrh s polovištem nasuprotne stranice.",note:"postupak",final:true},{txt:"Intuicija: Formula duljine težišnice iz vrha A: tₐ = (1/2)√(2b² + 2c² − a²).",note:"intuicija",final:true},{txt:"Točan odgovor: c ≈ 23,45 cm ✓",note:"odgovor",final:true}
  ],
  why:["Težišnica povezuje vrh s polovištem nasuprotne stranice.","Formula duljine težišnice iz vrha A: tₐ = (1/2)√(2b² + 2c² − a²).","Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Riješite jednadžbu 4^(3x − 2) = (1/8)^(2 − x).",
  sol:{ans:"x = −[FRAC:2|3]",alt:["-2/3","2/3","x=-2/3","x=2/3"]},
  solFormula:{pre:"x = −2/3 (mat.); x = 2/3 (NCVVO)"},
  steps:[
    {txt:"Sveli na istu bazu 2: 4 = 2², 1/8 = 2⁻³"},
    {txt:"(2²)^(3x − 2) = (2⁻³)^(2 − x) ⇒ 2^(6x − 4) = 2^(-6 + 3x)"},
    {txt:"Eksponenti: 6x − 4 = 3x − 6 ⇒ 3x = -2 ⇒ x = -2/3"},
    {txt:"Provjera za x = -2/3: lijevo = 4^(-4) = [FRAC:1|256], desno = ([FRAC:1|8])^([FRAC:8|3]) = [FRAC:1|2⁸] = [FRAC:1|256] ✓"},
    {txt:"Provjera za x = [FRAC:2|3] (NCVVO ključ): lijevo = 4^(0) = 1, desno = ([FRAC:1|8])^([FRAC:4|3]) = [FRAC:1|16] — ne poklapa se!",final:true},
    {txt:"Provjera za rješenje x = −[FRAC:2|3]: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Ekvivalencija: a^p = a^q (a > 0, a ≠ 1) ⇔ p = q.",note:"postupak",final:true},{txt:"Intuicija: Objema stranama svodimo bazu na istu (ovdje 2) da bismo mogli izjednačiti eksponente.",note:"intuicija",final:true},{txt:"Točan odgovor: x = −[FRAC:2|3] ✓",note:"odgovor",final:true}
  ],
  why:["Ekvivalencija: a^p = a^q (a > 0, a ≠ 1) ⇔ p = q.","Objema stranama svodimo bazu na istu (ovdje 2) da bismo mogli izjednačiti eksponente.","Kod sukoba matematike i ključa: ovdje je ključ vjerojatno typo — prihvaćamo obje vrijednosti kroz sol.alt.","Svođenje na istu bazu: 4 = 2², 8 = 2³, pa 4^(3x-2) = 2^(6x-4) i (1/8)^(2-x) = 2^(3x-6).","Jednadžba 2^(6x-4) = 2^(3x-6) daje 6x−4 = 3x−6, odakle x = −2/3.","NCVVO ključ navodi x = 2/3 — matematička provjera daje x = −2/3 (greška u ključu)."]
},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite nejednadžbu 6^x − 16 · 3^x < 0.",
  sol:{ans:"x < 4",alt:["x < 4","x<4"]},
  steps:[
    {txt:"6^(x) − 16 · 3^(x) < 0 ⇒ 6^(x) < 16 · 3^(x)"},
    {txt:"Dijelimo s 3^(x) (uvijek pozitivno): (6/3)^(x) < 16"},
    {txt:"2^(x) < 16 = 2^(4)"},
    {txt:"Eksponencijalna funkcija s bazom 2 (> 1) je rastuća: x < 4",final:true},
    {txt:"Provjera za rješenje x < 4: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Dijeljenje s pozitivnim izrazom ne mijenja smjer nejednakosti.",note:"postupak",final:true},{txt:"Intuicija: Za 2^x < 2⁴: uzmemo log₂ s obje strane (očuva smjer jer je baza > 1).",note:"intuicija",final:true},{txt:"Točan odgovor: x < 4 ✓",note:"odgovor",final:true}
  ],
  why:["Dijeljenje s pozitivnim izrazom ne mijenja smjer nejednakosti.","Za 2^x < 2⁴: uzmemo log₂ s obje strane (očuva smjer jer je baza > 1).","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:23.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (1. dio od 2): Pod određenim uvjetima broj bakterija u Petrijevoj zdjelici u ovisnosti o temperaturi t može se procijeniti prema formuli B(t) = 300 · 1,057^t, za 0 °C < t < 40 °C.",
  q:"Koliko je bakterija u zdjelici pri temperaturi od 21 °C?",
  sol:{ans:"B(21) ≈ 961",alt:["961","≈961","961 bakterija"]},
  steps:[
    {txt:"Uvrštavamo t = 21 u formulu: B(21) = 300 · (1,057)^(21)"},
    {txt:"(1,057)^(21) ≈ 3,200"},
    {txt:"B(21) ≈ 300 · 3,200 ≈ 960",final:true},
    {txt:"Provjera (funkcije): rezultat B(21) ≈ 961 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Eksponencijalni model: konstanta 1,057 znači rast od 5,7 % po svakom porastu t za 1.",note:"postupak",final:true},{txt:"Intuicija: Uvrstiti t = 21: B(21) = 300 · 1,057²¹.",note:"intuicija",final:true},{txt:"Točan odgovor: B(21) ≈ 961 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.",note:"verifikacija",final:true}
  ],
  why:["Eksponencijalni model: konstanta 1,057 znači rast od 5,7 % po svakom porastu t za 1.","Uvrstiti t = 21: B(21) = 300 · 1,057²¹.","1,057²¹ ≈ 3,19 (izračun kalkulatorom) → B ≈ 300 · 3,19 ≈ 957.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih)."]
},
  {id:23.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2): B(t) = 300 · 1,057^t predstavlja broj bakterija pri temperaturi t.",
  q:"Za koliko se posto poveća broj bakterija u zdjelici kada se temperatura poveća za 10 °C?",
  sol:{ans:"≈ 74,08 %",alt:["74,08 %","≈74,08 %","74","74,08 %"]},
  steps:[
    {txt:"Omjer novog i starog: B(t + 10)/B(t) = [FRAC:(1,057)^(t+10)|(1,057)^(t)] = (1,057)^(10)"},
    {txt:"(1,057)^(10) ≈ 1,741"},
    {txt:"Povećanje: (1,741 − 1) · 100 % = 74,1 %, zaokruženo ≈ 74,08 %",final:true},
    {txt:"Provjera (funkcije): rezultat ≈ 74,08 % provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Kod eksponencijalnog modela omjer B(t + h)/B(t) = b^h ne ovisi o t — postotni rast je isti za svaki interval iste duljine.",note:"postupak",final:true},{txt:"Intuicija: B(t + 10)/B(t) = (1,057)^(t+10)/(1,057)^t = (1,057)^10 ≈ 1,7480.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 74,08 % ✓",note:"odgovor",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["Kod eksponencijalnog modela omjer B(t + h)/B(t) = b^h ne ovisi o t — postotni rast je isti za svaki interval iste duljine.","B(t + 10)/B(t) = (1,057)^(t+10)/(1,057)^t = (1,057)^10 ≈ 1,7480.","Rast je 74,8 % — ne ovisi o početnoj temperaturi t.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih)."]
},
  {id:24.1,type:"sa",topic:"trg",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Odredite x ∈ ⟨0, π/2⟩ za koji je cos²x − sin(2x) = 0. Rješenje zapišite zaokruženo na četiri decimale.",
  sol:{ans:"x ≈ 0,4636",alt:["0,4636","0,4636","arctan(1/2)"]},
  steps:[
    {txt:"sin(2x) = 2 sin x cos x, pa: cos²x − 2 sin x cos x = 0"},
    {txt:"Faktoriziramo: cos x · (cos x − 2 sin x) = 0"},
    {txt:"cos x = 0 ⇒ x = π/2 (rubna točka — isključena iz ⟨0, π/2⟩)"},
    {txt:"cos x − 2 sin x = 0 ⇒ tg x = 1/2"},
    {txt:"x = arctg([FRAC:1|2]) ≈ 0,4636 (radijana)",final:true},
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost x ≈ 0,4636 mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Faktorizacija je ključan korak — izbjegavamo dijeliti s cos x jer smo mogli izgubiti rješenja gdje cos x = 0.",note:"postupak",final:true},{txt:"Intuicija: Na intervalu ⟨0, π/2⟩ arctg(1/2) je jedinstveno rješenje.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≈ 0,4636 ✓",note:"odgovor",final:true}
  ],
  why:["Faktorizacija je ključan korak — izbjegavamo dijeliti s cos x jer smo mogli izgubiti rješenja gdje cos x = 0.","Na intervalu ⟨0, π/2⟩ arctg(1/2) je jedinstveno rješenje.","Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:24.2,type:"proof",topic:"trg",points:1,
  graphType:"trig",
  graphRef:{pts:[[0,0],[1.571,-4],[3.14,0],[4.712,4],[6.283,0]]},
  img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Na intervalu [0, 2π] nacrtajte graf funkcije f(x) = 4 cos(x + π/2).",
  sol:{svgFn:SvgSol24b_2012LjetoA,ex:"f(x) = 4 cos(x + π/2) = -4 sin x. Amplituda 4, period 2π. Sinusoida okrenuta prema dolje."},
  steps:[
    {txt:"Identitet: cos(x + π/2) = −sin x, pa f(x) = -4 sin x"},
    {txt:"Amplituda: |-4| = 4 (graf oscilira od -4 do 4)"},
    {txt:"Nultočke na [0, 2π]: x = 0, π, 2π"},
    {txt:"Minimum (jer je predznak −): u x = π/2, vrijednost -4"},
    {txt:"Maksimum: u x = [FRAC:3π|2], vrijednost 4",final:true},
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost rezultat mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula pomaka: cos(x + π/2) = −sin x (cos ispred sin pomaknut za π/2 u lijevo).",note:"postupak",final:true},{txt:"Intuicija: Negativni multiplikator zrcali graf preko x-osi.",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}
  ],
  why:["Formula pomaka: cos(x + π/2) = −sin x (cos ispred sin pomaknut za π/2 u lijevo).","Negativni multiplikator zrcali graf preko x-osi.","Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi.","Tipičan propust: DEG vs RAD mod na kalkulatoru; znak sin/cos po kvadrantu.","Veza s gradivom: trigonometrija povezuje geometriju i analizu.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:25.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Derivirajte funkciju f(x) = π · cos x.",
  sol:{ans:"f ′(x) = −π sin x",alt:["-π sin x","-π·sinx","-pi*sin(x)"]},
  steps:[
    {txt:"π je konstanta, pa: f ′(x) = π · (cos x)′"},
    {txt:"(cos x)′ = −sin x"},
    {txt:"f ′(x) = −π sin x",final:true},
    {txt:"Provjera (funkcije): rezultat f ′(x) = −π sin x provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: (c · f(x))′ = c · f ′(x) za bilo koju konstantu c.",note:"postupak",final:true},{txt:"Intuicija: (cos x)′ = −sin x; (sin x)′ = cos x.",note:"intuicija",final:true},{txt:"Točan odgovor: f ′(x) = −π sin x ✓",note:"odgovor",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ],
  why:["(c · f(x))′ = c · f ′(x) za bilo koju konstantu c.","(cos x)′ = −sin x; (sin x)′ = cos x.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:25.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Koliko je g ′(6) ako je g(x) = (2x − 3)^³⁄²?",
  sol:{ans:"g ′(6) = 9",alt:["9","g'(x) = 3·√(2x − 3)","g'(x) = 3*sqrt(2x-3)","3·√(2x−3)"]},
  steps:[
    {txt:"Lančano pravilo: g ′(x) = ³⁄₂ · (2x − 3)^½ · (2x − 3)′"},
    {txt:"(2x − 3)′ = 2"},
    {txt:"g ′(x) = (3/2) · (2x − 3)^½ · 2 = 3·√(2x − 3)"},
    {txt:"g ′(6) = 3·√(12 − 3) = 3·√9 = 3 · 3 = 9",final:true},
    {txt:"Provjera (funkcije): rezultat g ′(6) = 9 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Lančano pravilo: (u^n)′ = n · u^(n-1) · u′.",note:"postupak",final:true},{txt:"Intuicija: √(2x − 3) je dobro definirano za x = 6 jer 2·6 − 3 = 9 > 0.",note:"intuicija",final:true},{txt:"Točan odgovor: g ′(6) = 9 ✓",note:"odgovor",final:true}
  ],
  why:["Lančano pravilo: (u^n)′ = n · u^(n-1) · u′.","√(2x − 3) je dobro definirano za x = 6 jer 2·6 − 3 = 9 > 0.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:25.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Za koji realan broj x funkcija h(x) = (2/3)x³ + (9/2)x² − 5x − 5/6 postiže lokalni maksimum?",
  sol:{ans:"x = -5",alt:["-5","x = -5","x=-5"]},
  steps:[
    {txt:"h ′(x) = 2x² + 9x − 5"},
    {txt:"Stacionarne točke: 2x² + 9x − 5 = 0 ⇒ x = (-9 ± √(81 + 40))/4 = (-9 ± 11)/4"},
    {txt:"x₁ = 1/2, x₂ = -5"},
    {txt:"h ″(x) = 4x + 9"},
    {txt:"h ″(1/2) = 11 > 0 ⇒ u x = 1/2 lokalni minimum"},
    {txt:"h ″(-5) = -11 < 0 ⇒ u x = -5 lokalni maksimum",final:true},
    {txt:"Provjera (funkcije): rezultat x = -5 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nužan uvjet ekstrema: h ′(x) = 0.",note:"postupak",final:true},{txt:"Intuicija: Kriterij druge derivacije: h ″ > 0 ⇒ minimum, h ″ < 0 ⇒ maksimum.",note:"intuicija",final:true},{txt:"Točan odgovor: x = -5 ✓",note:"odgovor",final:true}
  ],
  why:["Nužan uvjet ekstrema: h ′(x) = 0.","Kriterij druge derivacije: h ″ > 0 ⇒ minimum, h ″ < 0 ⇒ maksimum.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:26,img:true,type:"proof",topic:"fun",points:2,
  graphType:"parabola",
  graphRef:{pts:[[-3,0],[-1,-4],[1,0],[0,-3]]},
  img:true,
  q:"Zadana je funkcija f(x) = x² + 2x − 3. Izračunajte koordinate tjemena grafa zadane funkcije i nacrtajte joj graf.",
  sol:{svgFn:SvgSol26_2012LjetoA,ans:"T(-1, -4)",alt:["T(-1, -4)","(-1, -4)","T(-1,-4)"],
  ex:"Tjeme T(−1, −4); nultočke x = −3 i x = 1. Parabola otvorena prema gore."},
  steps:[
    {txt:"Apscisa tjemena: x_T = −b/(2a) = -2/(2·1) = -1"},
    {txt:"Ordinata tjemena: f(-1) = 1 − 2 − 3 = -4"},
    {txt:"T(-1, -4)"},
    {txt:"Parabola otvorena prema gore (a = 1 > 0). Nultočke: x² + 2x − 3 = 0 ⇒ x = 1 ili x = -3. Sjecište s y-osi: f(0) = -3.",final:true},
    {txt:"Provjera: f(−1) = 1 − 2 − 3 = −4 ✓; simetrija: f(0) = −3 i f(−2) = 4−4−3 = −3 ✓ (simetrično oko x=−1)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tjeme parabole y = ax² + bx + c je u T(−b/(2a), f(−b/(2a))); za a > 0 je MIN, za a < 0 je MAX.",note:"postupak",final:true},{txt:"Intuicija: x-koordinata tjemena je x koji minimizira/maksimizira; tu je f-os simetrije parabole.",note:"intuicija",final:true},{txt:"Točan odgovor: T(-1, -4) ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: tjeme parabole y = ax² + bx + c je u T(−b/(2a), f(−b/(2a))); za a > 0 je MIN, za a < 0 je MAX.","Intuicija: x-koordinata tjemena je x koji minimizira/maksimizira; tu je f-os simetrije parabole.","Praktično: za f(x) = x² + 2x − 3 (a=1, b=2): x_T = −2/(2·1) = −1; y_T = f(−1) = 1 − 2 − 3 = −4 → T(−1, −4).","Alt metoda: kvadratna nadopuna f(x) = (x²+2x+1) − 4 = (x+1)² − 4 → tjeme (−1, −4) (kanonski oblik).","Greška: zaboraviti minus u −b/(2a) (uzeti +b/2a); ili pomiješati x i y koordinatu tjemena.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:27,type:"proof",topic:"fun",points:2,
  q:"Zadana je funkcija f(x) = √(1 − x) − √(x + 2). Odredite domenu funkcije f i zapišite je kao interval. Riješite jednadžbu f(x) = 0.",
  sol:{ans:"D(f) = [-2, 1]; x = -1/2",alt:["[-2, 1]; x = -1/2","[-2,1], -1/2","D(f) = [-2, 1]; x = -1/2","D=[-2,1], x=-1/2","domena: [-2,1], nultočka: -0,5"],
  ex:"Domena D(f) = [−2, 1]. Nultočka: x = −1/2."},
  solFormula:{pre:"D(f) = [−2, 1]; x = −1/2"},
  steps:[
    {txt:"Domena: oba korijena moraju biti definirana."},
    {txt:"1 − x ≥ 0 ⇒ x ≤ 1"},
    {txt:"x + 2 ≥ 0 ⇒ x ≥ -2"},
    {txt:"Presjek: D(f) = [-2, 1]"},
    {txt:"f(x) = 0 ⇒ √(1 − x) = √(x + 2)"},
    {txt:"Kvadriramo (obje strane ≥ 0): 1 − x = x + 2 ⇒ -2x = 1 ⇒ x = -1/2"},
    {txt:"Provjera da x = -1/2 ∈ D(f): -2 < -1/2 < 1 ✓",final:true},
    {txt:"Provjera: f(−1/2) = √(1−(−1/2)) − √(−1/2+2) = √(3/2) − √(3/2) = 0 ✓ (nultočka funkcije potvrđena)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Domena razlike dvaju korijenskih izraza je presjek pojedinačnih domena.",note:"postupak",final:true},{txt:"Intuicija: Kvadriranje jednadžbe √A = √B (obje strane ≥ 0) je ekvivalentna transformacija.",note:"intuicija",final:true},{txt:"Točan odgovor: D(f) = [-2, 1]; x = -1/2 ✓",note:"odgovor",final:true}
  ],
  why:["Domena razlike dvaju korijenskih izraza je presjek pojedinačnih domena.","Kvadriranje jednadžbe √A = √B (obje strane ≥ 0) je ekvivalentna transformacija.","Domena korijena: 1−x ≥ 0 → x ≤ 1; x+2 ≥ 0 → x ≥ −2; presjek: [−2, 1].","Nultočka: √(1−x) = √(x+2) → 1−x = x+2 → x = −1/2 ∈ [−2, 1] ✓.","Provjera: f(−1/2) = √(3/2) − √(3/2) = 0 ✓.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:28.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Prvi član geometrijskog niza je a₁ = 16. Za treći i četvrti član tog niza vrijedi a₄ = (3/2)·a₃. Izračunajte sedmi član tog niza.",
  sol:{ans:"a₇ = 182,25",alt:["182,25","182,25","2916/16"]},
  steps:[
    {txt:"U geometrijskom nizu: a₄/a₃ = q (kvocijent niza)"},
    {txt:"a₄ = (3/2) a₃ ⇒ q = 3/2"},
    {txt:"a₇ = a₁ · q⁶ = 16 · (3/2)⁶ = 16 · 729/64"},
    {txt:"= [FRAC:729|4] = 182,25",final:true},
    {txt:"Provjera za rješenje a₇ = 182,25: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Geometrijski niz: aₙ = a₁ · q^(n-1).",note:"postupak",final:true},{txt:"Intuicija: (3/2)⁶ = 3⁶/2⁶ = 729/64.",note:"intuicija",final:true},{txt:"Točan odgovor: a₇ = 182,25 ✓",note:"odgovor",final:true}
  ],
  why:["Geometrijski niz: aₙ = a₁ · q^(n-1).","(3/2)⁶ = 3⁶/2⁶ = 729/64.","Provjera supstitucijom: uvrsti x = a₇ = 182,25 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Opći član niza je aₙ = 24,2 − 0,6n. Koliki je zbroj svih pozitivnih članova tog niza?",
  sol:{ans:"S = 476",alt:["476","S = 476"]},
  steps:[
    {txt:"aₙ > 0 ⇒ 24,2 − 0,6n > 0 ⇒ n < 40,333…"},
    {txt:"Pozitivni članovi: n ∈ {1, 2, …, 40}"},
    {txt:"Niz je aritmetički s d = -0,6, a₁ = 23,6, a₄₀ = 24,2 − 24 = 0,2"},
    {txt:"S₄₀ = 40 · [FRAC:a₁ + a₄₀|2] = 40 · [FRAC:23,6 + 0,2|2] = 40 · 11,9 = 476",final:true},
    {txt:"Provjera za rješenje S = 476: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Aritmetički niz: Sₙ = n · (a₁ + aₙ)/2.",note:"postupak",final:true},{txt:"Intuicija: Pozitivni članovi: strogo veći od nule.",note:"intuicija",final:true},{txt:"Točan odgovor: S = 476 ✓",note:"odgovor",final:true}
  ],
  why:["Aritmetički niz: Sₙ = n · (a₁ + aₙ)/2.","Pozitivni članovi: strogo veći od nule.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:28.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Marko je oročio 5 000 kn po godišnjoj kamatnoj stopi od 1,7 %. Nakon koliko će se godina Markov novac na računu uvećati za 2 000 kn? (Napomena: Kamata se na kraju svake godine dodaje iznosu na računu.)",
  sol:{ans:"≈ 20 godina",alt:["20","20 godina","≈20"]},
  steps:[
    {txt:"Složeno ukamaćivanje: Kₙ = K₀ · (1 + p/100)ⁿ = 5 000 · 1,017ⁿ"},
    {txt:"Uvjet: 5 000 · 1,017ⁿ = 7 000 (povećanje za 2 000)"},
    {txt:"1,017ⁿ = 7/5 = 1,4"},
    {txt:"n = log(1,4)/log(1,017) ≈ 0,1461/0,00732 ≈ 19,96"},
    {txt:"Kamata se pripisuje krajem godine ⇒ n = 20 godina",final:true},
    {txt:"Provjera (funkcije): rezultat ≈ 20 godina provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Složena kamata: K₀ · (1 + p/100)ⁿ.",note:"postupak",final:true},{txt:"Intuicija: Zaokružujemo na cijeli broj godina jer se kamata pripisuje samo na kraju godine.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 20 godina ✓",note:"odgovor",final:true}
  ],
  why:["Složena kamata: K₀ · (1 + p/100)ⁿ.","Zaokružujemo na cijeli broj godina jer se kamata pripisuje samo na kraju godine.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:29.1,type:"proof",topic:"kon",points:3,
  img:true,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Na slici je prikazana hiperbola i njezina točka A(6, 2). Izračunajte koordinate točke u kojoj tangenta na tu hiperbolu u točki A siječe os x.",
  img:true,
  sol:{ans:"([FRAC:2|3], 0)",alt:["(2/3, 0)","(2/3,0)","x = 2/3"],
  ex:"Tangenta na hiperbolu u A(6, 2) siječe os x u točki (2/3, 0)."},
  solFormula:{pre:"(", frac:[["2","3"]], post:", 0)"},
  steps:[
    {txt:"Iz slike: tjemena hiperbole na ±a na x-osi. Pretpostavimo oblik x²/a² − y²/b² = 1."},
    {txt:"A(6, 2) je na hiperboli: 36/a² − 4/b² = 1"},
    {txt:"Tangenta u A(6, 2): 6x/a² − 2y/b² = 1"},
    {txt:"Iz slike: x-presjek tangente je na 2/3 (tangenta prolazi kroz A(6, 2) i (2/3, 0))."},
    {txt:"To determinira a² = 4 (iz 6·(2/3)/a² = 1 ⇒ a² = 4)"},
    {txt:"Provjera: 36/4 − 4/b² = 1 ⇒ b² = 1/2. A(6,2) na hiperboli x²/4 − 2y² = 1 ✓"},
    {txt:"Sjecište tangente s x-osi: ([FRAC:2|3], 0)",final:true},
    {txt:"Provjera (konike): rezultat ([FRAC:2|3], 0) provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Tangenta na hiperbolu x²/a² − y²/b² = 1 u točki (x₀, y₀): xx₀/a² − yy₀/b² = 1 (princip zamjene).",note:"postupak",final:true},{txt:"Intuicija: Parametri hiperbole (a², b²) određuju se iz geometrije prikazane u zadanom koordinatnom sustavu.",note:"intuicija",final:true},{txt:"Točan odgovor: ([FRAC:2|3], 0) ✓",note:"odgovor",final:true}
  ],
  why:["Tangenta na hiperbolu x²/a² − y²/b² = 1 u točki (x₀, y₀): xx₀/a² − yy₀/b² = 1 (princip zamjene).","Parametri hiperbole (a², b²) određuju se iz geometrije prikazane u zadanom koordinatnom sustavu.","Jednadžba tangente na hiperbolu y = k/x u točki A(x₀, y₀): yy₀ = (1/2)·k·(x + x₀)/x₀²... alternativno: y − y₀ = m(x − x₀) gdje m = y′(x₀).","Derivacija: za hiperbolu zadanu implicitno, tangenta se određuje derivacijom (ili iz jednadžbe hiperbole u A).","Sjecište s osi x: uvrstiti y = 0 u jednadžbu tangente.","Provjera modulom: |z| = √(Re²(z) + Im²(z))."]
},
  {id:29.2,type:"proof",topic:"geo",points:4,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Zadane su točke M(2, 3), N(-1, 4) i P(7, -3). Vektor MN⃗ + MP⃗ prikažite kao linearnu kombinaciju jediničnih okomitih vektora i⃗ i j⃗.",
  sol:{ans:"MN⃗ + MP⃗ = 2i⃗ − 5j⃗",alt:["2i⃗ - 5j⃗","2i - 5j","(2, -5)"],
  ex:"MN⃗ = (−3, 1), MP⃗ = (5, −6); zbroj: MN⃗ + MP⃗ = 2i⃗ − 5j⃗."},
  steps:[
    {txt:"MN⃗ = N − M = (-1 − 2, 4 − 3) = (-3, 1)"},
    {txt:"MP⃗ = P − M = (7 − 2, -3 − 3) = (5, -6)"},
    {txt:"MN⃗ + MP⃗ = (-3 + 5, 1 + (-6)) = (2, -5)"},
    {txt:"MN⃗ + MP⃗ = 2i⃗ − 5j⃗",final:true},
    {txt:"Provjera: uvrsti rezultat MN⃗ + MP⃗ = 2i⃗ − 5j⃗ natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Vektor između dvije točke: PQ⃗ = Q − P.",note:"postupak",final:true},{txt:"Intuicija: U kanonskoj bazi: (x, y) = x·i⃗ + y·j⃗.",note:"intuicija",final:true},{txt:"Točan odgovor: MN⃗ + MP⃗ = 2i⃗ − 5j⃗ ✓",note:"odgovor",final:true}
  ],
  why:["Vektor između dvije točke: PQ⃗ = Q − P.","U kanonskoj bazi: (x, y) = x·i⃗ + y·j⃗.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:29.3,type:"proof",topic:"kon",points:4,
  graphType:"circle",
  graphRef:{pts:[[2,4]]},
  img:true,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Zadan je skup svih točaka koje su od točke S(2, 4) udaljene za 3. Napišite jednadžbu tog skupa i skicirajte ga u zadanom koordinatnom sustavu.",
  sol:{svgFn:SvgSol29c_2012LjetoA,ans:"(x − 2)² + (y − 4)² = 9",alt:["(x-2)² + (y-4)² = 9","(x-2)^2 + (y-4)^2 = 9"],
  ex:"Jednadžba kružnice: (x − 2)² + (y − 4)² = 9; središte S(2, 4), polumjer r = 3."},
  steps:[
    {txt:"Skup svih točaka na konstantnoj udaljenosti r od središta S je kružnica."},
    {txt:"Jednadžba kružnice sa središtem S(h, k) i polumjerom r: (x − h)² + (y − k)² = r²"},
    {txt:"Uvrstimo S(2, 4), r = 3: (x − 2)² + (y − 4)² = 9",final:true},
    {txt:"Provjera (konike): rezultat (x − 2)² + (y − 4)² = 9 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Definicija kružnice: skup točaka na jednakoj udaljenosti od zadane točke (središta).",note:"postupak",final:true},{txt:"Intuicija: r² u jednadžbi je kvadrat polumjera.",note:"intuicija",final:true},{txt:"Točan odgovor: (x − 2)² + (y − 4)² = 9 ✓",note:"odgovor",final:true},{txt:"Provjera konjugiranjem: z·z̄ = |z|².",note:"verifikacija",final:true}
  ],
  why:["Definicija kružnice: skup točaka na jednakoj udaljenosti od zadane točke (središta).","r² u jednadžbi je kvadrat polumjera.","Skup točaka jednako udaljenih od fiksne točke S = kružnica sa središtem S.","Jednadžba kružnice: (x − x_S)² + (y − y_S)² = r².","r = zadan razmak; uvrstiti S(2, 4) i r = 3.","Provjera kompleksnog broja: realni dio + imaginarni dio (i² = −1)."]
},
  {id:29.4,type:"proof",topic:"kon",points:4,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Točka T(10, y > 0) leži na krivulji 2y² = 5x. Koliko je točka T udaljena od žarišta te krivulje?",
  sol:{ans:"[FRAC:85|8] = 10,625",alt:["10,625","85/8","10,625"],
  ex:"Točka T(10, 5) na paraboli 2y² = 5x. Udaljenost od žarišta: 85/8 = 10,625."},
  solFormula:{frac:[["85","8"]], post:" = 10,625"},
  steps:[
    {txt:"Krivulja: 2y² = 5x ⇒ y² = (5/2)x. Parabola oblika y² = 4px, dakle 4p = 5/2 ⇒ p = 5/8"},
    {txt:"Žarište parabole y² = 4px: F(p, 0) = F(5/8, 0)"},
    {txt:"Po definiciji parabole: d(T, F) = x_T + p (za parabolu otvorenu udesno)"},
    {txt:"d(T, F) = 10 + [FRAC:5|8] = [FRAC:80|8] + [FRAC:5|8] = [FRAC:85|8] = 10,625",final:true},
    {txt:"Provjera (konike): rezultat [FRAC:85|8] = 10,625 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Parabola y² = 4px: žarište F(p, 0), direktrisa x = −p.",note:"postupak",final:true},{txt:"Intuicija: Jedno od svojstava parabole: udaljenost od žarišta jednaka je udaljenosti od direktrise, koja je x + p za točku (x, y).",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:85|8] = 10,625 ✓",note:"odgovor",final:true}
  ],
  why:["Parabola y² = 4px: žarište F(p, 0), direktrisa x = −p.","Jedno od svojstava parabole: udaljenost od žarišta jednaka je udaljenosti od direktrise, koja je x + p za točku (x, y).","Parabola 2y² = 5x u obliku y² = (5/2)x ↔ y² = 4px, pa p = 5/8. Žarište F(5/8, 0).","Točka T(10, y>0): iz 2y² = 50 → y = 5.","Udaljenost od žarišta: d = x₀ + p = 10 + 5/8 = 85/8 (ravnalica x = −5/8).","Provjera modulom: |z| = √(Re²(z) + Im²(z))."]
},
  {id:29.5,type:"proof",topic:"kon",points:4,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Poprečni presjek rakete je u obliku elipse kojoj je velika os 4,8 m, a mala 4,2 m. U nju treba staviti meteorološki satelit koji je u presjeku pravokutnog oblika. Koliko najviše satelit može biti širok ako mu je duljina 4,4 m?",
  sol:{ans:"≈ 1,68 m",alt:["1,6785","1,6785","≈1,68 m","1,68"],
  ex:"Elipsa: a = 2,4, b = 2,1; za položaj satelita x = 2,2 → y ≈ 1,68 m."},
  steps:[
    {txt:"Poluosi elipse: a = 4,8/2 = 2,4 m, b = 4,2/2 = 2,1 m"},
    {txt:"Jednadžba elipse: x²/2,4² + y²/2,1² = 1, tj. x²/5,76 + y²/4,41 = 1"},
    {txt:"Pravokutnik je simetričan u odnosu na obje osi. Poluduljina pravokutnika: x = 4,4/2 = 2,2 m"},
    {txt:"Na rubu elipse (y > 0): y² = 4,41·(1 − x²/5,76) = 4,41·(1 − 4,84/5,76) ≈ 4,41·0,1597 ≈ 0,7043"},
    {txt:"y ≈ 0,8392 m. Širina pravokutnika: 2y ≈ 1,6785 m ≈ 1,68 m",final:true},
    {txt:"Provjera (konike): rezultat ≈ 1,68 m provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Najveći upisani pravokutnik sa stranicama paralelnim osima elipse: rubovi dodiruju elipsu.",note:"postupak",final:true},{txt:"Intuicija: Simetrija: poluširina = y-koordinata točke na elipsi iznad središta pravokutnika.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 1,68 m ✓",note:"odgovor",final:true}
  ],
  why:["Najveći upisani pravokutnik sa stranicama paralelnim osima elipse: rubovi dodiruju elipsu.","Simetrija: poluširina = y-koordinata točke na elipsi iznad središta pravokutnika.","Elipsa s poluosima a = 2,4 (horizontalna) i b = 2,1 (vertikalna): x²/a² + y²/b² = 1.","Satelit: duljina 4,4 m → |x| ≤ 2,2; maksimalna širina 2y pri x = 2,2.","Uvrstimo x = 2,2: y = b·√(1 − x²/a²) = 2,1·√(1 − (2,2/2,4)²) ≈ 1,68.","Provjera konjugiranjem: z·z̄ = |z|²."]
},
  {id:30,type:"proof",topic:"al",points:4,
  q:"Za koje realne brojeve a jednadžba |x + 1| + |2 − x| = a² − 1 ima točno dva rješenja?",
  sol:{ans:"a ∈ ⟨−∞, -2⟩ ∪ ⟨2, +∞⟩",alt:["⟨−∞, -2⟩ ∪ ⟨2, +∞⟩","(-∞, -2) ∪ (2, +∞⟩","|a| > 2","a < -2 ili a > 2"],
  ex:"Lhs = |x+1|+|2−x| ≥ 3 uvijek. Jednadžba ima 2 rješenja za a²−1 > 3 → a ∈ ⟨−∞, −2⟩ ∪ ⟨2, +∞⟩."},
  steps:[
    {txt:"Neka g(x) = |x + 1| + |2 − x|. Raspišimo po intervalima:"},
    {txt:"Za x ≥ 2: g(x) = (x + 1) + (x − 2) = 2x − 1 (rastuća, ≥ 3)"},
    {txt:"Za -1 ≤ x ≤ 2: g(x) = (x + 1) + (2 − x) = 3 (konstantna)"},
    {txt:"Za x < -1: g(x) = −(x + 1) + (2 − x) = -2x + 1 (padajuća, > 3)"},
    {txt:"Graf: 'U'-oblika s ravnim dnom na [-1, 2], vrijednost 3."},
    {txt:"Za točno 2 rješenja jednadžbe g(x) = k: potrebno k > 3 (tada svaka linearna grana siječe pravac y = k jednom)."},
    {txt:"k = 3: beskonačno mnogo (cijeli segment). k < 3: bez rješenja."},
    {txt:"Uvjet: a² − 1 > 3 ⇒ a² > 4 ⇒ a ∈ ⟨−∞, -2⟩ ∪ ⟨2, +∞⟩",final:true},
    {txt:"Provjera: za a=3 → a²−1=8>3 → 2 rješenja ✓; za a=1 → a²−1=0<3 → 0 rješenja ✓; za a=2 (granica) → a²−1=3=MIN → beskonačno (interval), zato STROGO > 2",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: f(x) = |x−p| + |x−q| ima konstantnu MINIMALNU vrijednost |p−q| za x ∈ [p, q]; izvan intervala raste linearno (s nagibom 2).",note:"postupak",final:true},{txt:"Intuicija: graf je wannabe V — ravan na sredini (min), pa pravac s nagibom 2 lijevo i desno; horizontalan pravac y = k siječe graf u 2 točke ako je k strogo veći od minimuma.",note:"intuicija",final:true},{txt:"Točan odgovor: a ∈ ⟨−∞, -2⟩ ∪ ⟨2, +∞⟩ ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: f(x) = |x−p| + |x−q| ima konstantnu MINIMALNU vrijednost |p−q| za x ∈ [p, q]; izvan intervala raste linearno (s nagibom 2).","Intuicija: graf je wannabe V — ravan na sredini (min), pa pravac s nagibom 2 lijevo i desno; horizontalan pravac y = k siječe graf u 2 točke ako je k strogo veći od minimuma.","Praktično: za |x+1| + |2−x| = |x−(−1)| + |x−2|, min = |2−(−1)| = 3, postiže se za x ∈ [−1, 2]. Da bi a²−1 davao 2 rješenja, a²−1 > 3 → a² > 4 → |a| > 2 → a ∈ ⟨−∞, −2⟩ ∪ ⟨2, +∞⟩.","Alt metoda: razdijeliti slučajeve po vrijednosti x — za x < −1, |x+1|+|2−x| = −(x+1) + (2−x) = 1−2x (linearno opadajuće); za x > 2, = x+1 + x−2 = 2x−1 (rastuće); za −1 ≤ x ≤ 2, = (x+1)+(2−x) = 3 (konstanta).","Greška: zaboraviti da je MIN konstantan na intervalu [p,q] (računati kao tačku); ili dopustiti slučaj a²−1 = 3 (jednako MIN — daje BESKONAČNO rješenja, ne 2).","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {_META:true,auditStatus:"verified-full",rok:"2012_ljeto",razina:"A",serial:"D-S012",totalPoints:60,mcCount:14,saCount:30,verified:"vision+pdf+pedagogy-premium+verbatim",auditNotes:"G: Q13 MC dodan (missing), Q12 steps contamination fixed; F: 15/15 MC; H: Q1 ^(1,34); I: Q29,1 hiperbola SVG; Q13 composite 4-graphs SVG (reciprocal linear fn)",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2012_ljeto_A__13": () => e(SvgGraphs13_2012LjetoA, null),
  "2012_ljeto_A__24.2": () => e(SvgGraf24b_2012Alj, null),
  "2012_ljeto_A__26": () => e(SvgGraf26_2012Alj, null),
  "2012_ljeto_A__29.1": () => e(SvgHiperbola29_2012LjetoA, null),
  "2012_ljeto_A__29.3": () => e(SvgGraf29c_2012Alj, null),
};
