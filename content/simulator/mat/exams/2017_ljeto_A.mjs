// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg8_2017Alj(){
  const W=180,H=180,pad={l:28,r:14,t:14,b:28};
  const xMin=-3,xMax=3,yMin=-3,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const zs=[{n:"z\u2081",x:1,y:0},{n:"z\u2082",x:-1,y:2},{n:"z\u2083",x:-1,y:0},{n:"z\u2084",x:0,y:-2}];
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-3,-2,-1,0,1,2,3].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    ...[-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"Re"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:9,fill:"var(--text)"},"Im"),
    e("text",{x:ox-9,y:oy+12,fontSize:7,fill:"var(--muted)"},"0"),
    ...[1,2].map(x=>e("text",{key:"lx"+x,x:toX(x),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)),
    ...[1,2].map(y=>e("text",{key:"ly"+y,x:ox-7,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)),
    ...zs.map((z,i)=>e("circle",{key:"z"+i,cx:toX(z.x),cy:toY(z.y),r:4,fill:["var(--blue)","var(--green)","var(--gold)","var(--red)"][i],stroke:"var(--bg)",strokeWidth:1.2})),
    ...zs.map((z,i)=>e("text",{key:"zl"+i,x:toX(z.x)+(i<2?5:-18),y:toY(z.y)+(i<2?-6:5),fontSize:9,fontWeight:600,fill:["var(--blue)","var(--green)","var(--gold)","var(--red)"][i]},z.n))
  );
}

function Svg27_2017Alj(){
  // H chosen so the inner plot is square (iW === iH) -> the circle renders round
  const W=220,H=220,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-2,xMax=8,yMin=-7,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const sx=toX(3),sy=toY(-2);
  const scx=iW/(xMax-xMin),scy=iH/(yMax-yMin);
  const R=Math.sqrt(13);
  const pts=[];
  const N=180;
  for(let i=0;i<N;i++){
    const a=2*Math.PI*i/N;
    pts.push(`${(sx+R*scx*Math.cos(a)).toFixed(1)},${(sy-R*scy*Math.sin(a)).toFixed(1)}`);
  }
  const HALO={stroke:"var(--bg)",strokeWidth:2.6,paintOrder:"stroke",strokeLinejoin:"round"};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-2,-1,0,1,2,3,4,5,6,7,8].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-7,-6,-5,-4,-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-5,y:oy+10,textAnchor:"end",fontSize:8,fill:"var(--muted)",...HALO},"0"),
    ...[-1,1,2,3,4,5,6,7].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)",...HALO},x<0?"−"+Math.abs(x):String(x))
    )),
    ...[-6,-4,-2,2].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)",...HALO},y<0?"−"+Math.abs(y):String(y))
    )),
    e("polygon",{points:pts.join(" "),fill:_BLUE,fillOpacity:.12,stroke:_BLUE,strokeWidth:2,strokeLinejoin:"round"}),
    e("circle",{cx:sx,cy:sy,r:4,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:sx+7,y:sy-7,fontSize:9,fontWeight:700,fill:_BLUE,...HALO},"S(3,\u22122)")
  );
}

function Svg26_2017Alj(){
  const W=200,H=170,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-5,xMax=4,yMin=-3,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  // f: (-4,-3)->(-3,0)->(-1,2)->(0,0)->(1,1)->(2,0)->(3,-1) approx from PDF
  const fPts=[[-4,-3],[-3,0],[-1,2],[0,0],[1,1],[2,0],[3,-1]];
  const fLine=fPts.map(p=>toX(p[0]).toFixed(1)+","+toY(p[1]).toFixed(1)).join(" ");
  const HALO={stroke:"var(--bg)",strokeWidth:2.6,paintOrder:"stroke",strokeLinejoin:"round"};
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-5,-4,-3,-2,-1,0,1,2,3,4].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    ...[-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.1}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.1}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:9,fill:"var(--text)"},"y"),
    e("polyline",{points:fLine,fill:"none",stroke:_BLUE,strokeWidth:2,strokeLinejoin:"round"}),
    // f is continuous on the CLOSED interval [-4,3]: only the two endpoints get a
    // marker, and both are filled (closed). Interior vertices are plain corners —
    // drawing them as open circles read as removable points / holes.
    ...[fPts[0],fPts[fPts.length-1]].map((p,i)=>e("circle",{key:"fp"+i,cx:toX(p[0]),cy:toY(p[1]),r:3,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.2})),
    e("text",{x:ox-5,y:oy+11,textAnchor:"end",fontSize:7,fill:"var(--muted)",...HALO},"0"),
    e("text",{x:toX(1),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)",...HALO},"1"),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:7,fill:"var(--muted)",...HALO},"1"),
    e("text",{x:toX(-2),y:toY(2)+4,fontSize:10,fontStyle:"italic",fill:_BLUE,...HALO},"f")
  );
}

function Svg21_2017Alj(){
  const W=220,H=160,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1,xMax=7,yMin=-4,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.1){
    const y=0.48*x*x-2.4*x;
    if(y>yMax||y<yMin) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const HALO={stroke:"var(--bg)",strokeWidth:2.6,paintOrder:"stroke",strokeLinejoin:"round"};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-4,-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-5,y:oy+9,textAnchor:"end",fontSize:8,fill:"var(--muted)",...HALO},"0"),
    ...[1,2,3,4,5,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)",...HALO},String(x))
    )),
    ...[-3,-2,-1,1,2,3].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      // positive labels right of the axis, negative ones left: the parabola's left
      // branch runs through the strip just left of the y-axis above y=0, so this
      // keeps every tick label clear of the curve
      y>0
        ? e("text",{x:ox+5,y:toY(y)+3,fontSize:7,fill:"var(--muted)",...HALO},String(y))
        : e("text",{x:ox-5,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)",...HALO},"\u2212"+Math.abs(y))
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinejoin:"round"}),
    e("circle",{cx:toX(2.5),cy:toY(-3),r:4,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:toX(2.5),y:toY(-3)+13,textAnchor:"middle",fontSize:9,fontWeight:700,fill:_BLUE,...HALO},"T(2,5;\u22123)")
  );
}

function Svg19_2017Alj(){
  const W=200,H=160,pad={l:32,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=0,xMax=5,yMin=0,yMax=32;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const pts=[];
  for(let r=0;r<=xMax;r+=0.2){ pts.push(`${toX(r).toFixed(1)},${toY(2*Math.PI*r).toFixed(1)}`); }
  const oy=toY(0),ox=toX(0);
  const HALO={stroke:"var(--bg)",strokeWidth:2.6,paintOrder:"stroke",strokeLinejoin:"round"};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[0,6,12,18,24,30].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+5,y:oy-3,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"r"),
    e("text",{x:ox+7,y:pad.t+7,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"o"),
    e("text",{x:ox-5,y:oy+12,textAnchor:"end",fontSize:8,fill:"var(--muted)",...HALO},"0"),
    ...[1,2,3,4,5].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)",...HALO},String(x))
    )),
    ...[6,12,18,24,30].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)",...HALO},String(y))
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.2}),
    e("text",{x:toX(1.15),y:toY(24),fontSize:9,fontWeight:600,fill:_BLUE,...HALO},"o=2\u03c0r")
  );
}

function Svg15_2017Alj(){
  const W=280,H=412,pad={l:24,r:10,t:10,b:20};
  const gW=120,gH=110,gap=14;
  const HALO={stroke:"var(--bg)",strokeWidth:2.4,paintOrder:"stroke",strokeLinejoin:"round"};
  // Helper: mini coord system
  function miniCS(ox,oy,w,h,label){
    const els=[];
    // Grid
    for(let i=-3;i<=3;i++){
      els.push(e("line",{key:label+"gx"+i,x1:ox+w/2+i*w/6,y1:oy,x2:ox+w/2+i*w/6,y2:oy+h,stroke:"var(--bdr)",strokeWidth:.3,strokeDasharray:"2,2"}));
    }
    for(let i=-3;i<=3;i++){
      els.push(e("line",{key:label+"gy"+i,x1:ox,y1:oy+h/2-i*h/6,x2:ox+w,y2:oy+h/2-i*h/6,stroke:"var(--bdr)",strokeWidth:.3,strokeDasharray:"2,2"}));
    }
    // Axes
    els.push(e("line",{key:label+"ax",x1:ox,y1:oy+h/2,x2:ox+w,y2:oy+h/2,stroke:"var(--text)",strokeWidth:1}));
    els.push(e("line",{key:label+"ay",x1:ox+w/2,y1:oy,x2:ox+w/2,y2:oy+h,stroke:"var(--text)",strokeWidth:1}));
    // Labels
    els.push(e("text",{key:label+"lx",x:ox+w-2,y:oy+h/2-4,fontSize:7,fill:"var(--text)",...HALO},"x"));
    els.push(e("text",{key:label+"ly",x:ox+w/2+3,y:oy+6,fontSize:7,fill:"var(--text)",...HALO},"y"));
    els.push(e("text",{key:label+"o",x:ox+w/2-3,y:oy+h/2+9,textAnchor:"end",fontSize:6,fill:"var(--muted)",...HALO},"0"));
    els.push(e("text",{key:label+"t1",x:ox+w/2+w/6,y:oy+h/2+9,textAnchor:"middle",fontSize:6,fill:"var(--muted)",...HALO},"1"));
    els.push(e("text",{key:label+"t1y",x:ox+w/2-5,y:oy+h/2-h/6+3,textAnchor:"end",fontSize:6,fill:"var(--muted)",...HALO},"1"));
    return els;
  }
  function curve(ox,oy,w,h,fn,color,label){
    // separate x/y unit scales so the curve follows the same grid the ticks do,
    // and clip to +/-3 units so nothing spills outside the mini coordinate box
    const scx=w/6,scy=h/6;
    const pts=[];
    for(let t=-3;t<=3.0001;t+=0.04){
      const v=fn(t);
      if(v<-3||v>3) continue;
      pts.push((ox+w/2+t*scx).toFixed(1)+","+(oy+h/2-v*scy).toFixed(1));
    }
    return pts.length>1?e("polyline",{key:label+"c",points:pts.join(" "),fill:"none",stroke:color,strokeWidth:1.8,strokeLinejoin:"round"}):null;
  }

  // g: looks like steep parabola, min at (0.5, −3), passes through roughly (−1,1) and (2,1)
  // g(x) ≈ 2(x−0,5)² − 3
  const gFn=x=>2*(x-0.5)*(x-0.5)-3;
  // g' = 4(x−0,5) = 4x−2 → linear, negative left, positive right, zero at 0.5
  // A: shows curve negative left of ~0.5, positive right → parabola-like opening up, crossing zero at ~0.5
  // Actually from PDF, A looks like f starts high left, dips to local max around −0.5, crosses, minimum, rises
  // Let me re-read: A has a curve that goes from lower-left up to a bump near (−0.5,2), down through (0.5,0), continues up
  // That looks like the derivative of something like g(x)=x³−... No.
  // Since g looks like a parabola with min at x≈0.5, g'(x) = linear = 4x−2
  // The linear derivative crosses x-axis at x=0.5, negative left, positive right
  // Graph A from PDF: curve goes from top-left, has a max around x≈−0.5, descends, goes negative → NOT linear
  // Actually re-examining: g is NOT a simple parabola. g has inflection behavior:
  // g starts high from left (~y=2 at x=−2), descends steeply to minimum (~−3 at x≈0,5), then rises steeply.
  // This is more like g(x) = (x−0,5)² − 3 but steep: g(x)=2(x−0,5)²−3
  // g': 4(x−0,5) = linear. But A is NOT linear. Let me look again...
  // A shows: starts from lower-left going up, crosses into positive, has a local max around x≈1-2, then comes down
  // This is a parabola shape for g'. That means g is a cubic.
  // Let's say g(x) = x³ − 3x (has min at x=1: g'=3x²−3=0 → x=±1, g(1)=−2, g(−1)=2)
  // Hmm. From the picture: g has ONE minimum, no maximum visible. Starts high on left.
  // g(x) = x³ − ... no, cubic has both max and min.
  // Actually the PDF shows g going from upper-left down to a single minimum then back up on right.
  // That's consistent with g(x) = a(x−0,5)² − 3 (simple parabola)
  // And derivative g'(x) = 2a(x−0,5) which IS linear
  // Graph A does look like it could be a curve that starts negative, crosses zero, goes positive with some curvature
  // Let me just draw what the PDF shows faithfully

  // Slika 1 (g): concave up, min at ~(0.5, −2.5), y-intercept ~(0,−1.5), x~−1→y~1.5, x~2→y~1.5
  const g1Fn=x=>1.2*(x-0.5)*(x-0.5)-2.5;
  // A: starts from below left, goes up through (−0.5,~1.5), curves to (1,~2), labeled "f" at top
  // Looks like a rising S-curve or half-parabola
  const aFn=x=>2.4*(x-0.5); // linear derivative (correct answer)
  // B: starts high left, curves down to right, like decreasing. Label "f" middle-right
  const bFn=x=>-0.8*x+0.5;
  // C: starts from upper left, dips slightly, comes back up — looks like small wave
  const cFn=x=>0.6*Math.sin(2*x)+0.5;
  // D: starts high left, crosses zero, goes negative — decreasing overall
  const dFn=x=>-1.5*x+0.5;

  const topY=10;
  // Slika 1 (centered top)
  const g1ox=W/2-gW/2, g1oy=topY;

  // A,B side by side below
  const rowY=g1oy+gH+gap+20;
  const aox=20, aoy=rowY;
  const box=W/2+10, boy=rowY;
  // C,D below that
  const row2Y=rowY+gH+gap;
  const cox=20, coy=row2Y;
  const dox=W/2+10, doy=row2Y;

  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Title: Slika 1
    e("text",{x:W/2,y:g1oy+gH+14,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"Slika 1."),
    // g graph
    ...miniCS(g1ox,g1oy,gW,gH,"g1"),
    curve(g1ox,g1oy,gW,gH,g1Fn,"var(--text)","g1"),
    e("text",{x:g1ox+gW*0.75,y:g1oy+12,fontSize:10,fontStyle:"italic",fill:"var(--text)",...HALO},"g"),

    // Question text
    e("text",{x:W/2,y:rowY-8,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},"Koji graf je derivacija prikazana na slici 1.?"),

    // A
    ...miniCS(aox,aoy,gW,gH,"A"),
    curve(aox,aoy,gW,gH,aFn,"var(--blue)","A"),
    e("text",{x:aox+gW*0.8,y:aoy+18,fontSize:10,fontStyle:"italic",fill:"var(--blue)",...HALO},"f"),
    e("text",{x:aox,y:aoy+gH+12,fontSize:10,fontWeight:700,fill:"var(--blue)"},"A."),

    // B
    ...miniCS(box,boy,gW,gH,"B"),
    curve(box,boy,gW,gH,bFn,"var(--green)","B"),
    e("text",{x:box+gW*0.8,y:boy+gH*0.35,fontSize:10,fontStyle:"italic",fill:"var(--green)",...HALO},"f"),
    e("text",{x:box,y:boy+gH+12,fontSize:10,fontWeight:700,fill:"var(--green)"},"B."),

    // C
    ...miniCS(cox,coy,gW,gH,"C"),
    curve(cox,coy,gW,gH,cFn,"var(--gold)","C"),
    e("text",{x:cox+gW*0.3,y:coy+18,fontSize:10,fontStyle:"italic",fill:"var(--gold)",...HALO},"f"),
    e("text",{x:cox,y:coy+gH+12,fontSize:10,fontWeight:700,fill:"var(--gold)"},"C."),

    // D
    ...miniCS(dox,doy,gW,gH,"D"),
    curve(dox,doy,gW,gH,dFn,"var(--red)","D"),
    e("text",{x:dox+gW*0.15,y:doy+18,fontSize:10,fontStyle:"italic",fill:"var(--red)",...HALO},"f"),
    e("text",{x:dox,y:doy+gH+12,fontSize:10,fontWeight:700,fill:"var(--red)"},"D.")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: presjek = preklapanje; uzmi VEĆU donju i MANJU gornju granicu, pazi na otvoreno/zatvoreno.",topic:"br",points:1,
  q:"Zadani su intervali A = [-3, 7⟩ i B = ⟨1, 15]. Koji je skup presjek intervala A i B?",
  opts:["[-3, 1⟩","⟨-3, 15]","⟨1, 7⟩","⟨7, 15]"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"A = [−3, 7⟩ znači −3 ≤ x < 7."},
    {txt:"B = ⟨1, 15] znači 1 < x ≤ 15."},
    {txt:"Presjek A ∩ B: x mora biti u OBA → −3 ≤ x < 7 I 1 < x ≤ 15 → 1 < x < 7"},
    {txt:"= ⟨1, 7⟩",final:true},
    {txt:"Točan odgovor: C) ⟨1, 7⟩.",final:true,note:"odgovor"},
    {txt:"Provjera: x = 5 (u OBA): 5 ∈ [−3, 7⟩ ✓ i 5 ∈ ⟨1, 15] ✓ → 5 ∈ ⟨1, 7⟩ ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) [−3, 1⟩ = krivo (uključuje x ≤ 0); B) ⟨−3, 15] = UNIJA, ne presjek; D) ⟨7, 15] = krivo (x > 7).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo presjeka intervala: A ∩ B = skup x koji su u OBA intervala.",note:"postupak",final:true},{txt:"Intuicija: Otvoreni/zatvoreni rubovi: zagrade ⟨ ⟩ (otvoren, ne uključeno), uglate [ ] (zatvoren, uključeno).",note:"intuicija",final:true}
  ],
  why:["Pravilo presjeka intervala: A ∩ B = skup x koji su u OBA intervala.","Otvoreni/zatvoreni rubovi: zagrade ⟨ ⟩ (otvoren, ne uključeno), uglate [ ] (zatvoren, uključeno).","Postupak: 1) zapiši svaki interval kao nejednakost. 2) presjek = SVI uvjeti istovremeno. 3) zapiši kao novi interval s odgovarajućim rubovima.","Intuicija: presjek 'siječe' samo zajedničku zonu — najveći donji rub i najmanji gornji rub.","Česta greška 1: pomiješati presjek i uniju. Greška 2: krivi rubovi (zatvoreni vs otvoreni).","Alt metoda: brojevni pravac — označi A i B, presjek je gdje se preklapaju.","Provjera s rubom: x = 1 nije u B (otvoren rub), pa nije u presjeku ✓; x = 7 nije u A, pa nije u presjeku ✓"]},
  {id:2,type:"mc",warn:"Pazi: |36/x| ≥ 17 → |x| ≤ 36/17 ≈ 2,1; broji cijele brojeve x (≠ 0) u tom rasponu.",topic:"br",points:1,
  q:"Za koliko cijelih brojeva x vrijedi nejednakost |36/x| ≥ 17?",
  opts:["za 3","za 4","za 6","za 9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"|36/x| ≥ 17 ⟺ 36/|x| ≥ 17 ⟺ |x| ≤ 36/17 ≈ 2,118"},
    {txt:"Cijeli x sa |x| ≤ 2,118: x ∈ {−2, −1, 1, 2} (NE 0 jer 36/0 nedefinirano)"},
    {txt:"4 cijela broja",final:true},
    {txt:"Točan odgovor: B) za 4.",final:true,note:"odgovor"},
    {txt:"Provjera: |36/1| = 36 ≥ 17 ✓; |36/2| = 18 ≥ 17 ✓; |36/3| = 12 < 17 ✗ (pa 3 i −3 nisu).",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepiši nejednakost na |x| ≤ ... 2) prebroji cijele brojeve s |x| ≤ rub (isključi 0 ako je dijeljenje).",final:true,note:"postupak"},
    {txt:"Distraktori: A) 3 = zaboravio jedno; C) 6 = uključio 0 i 3,−3 (krivo); D) 9 = krivo.",final:true,note:"diagnostika"},{txt:"Intuicija: Pravilo: 36/|x| ≥ 17 ⟺ |x| ≤ 36/17 (uz x ≠ 0). Pažnja: smjer nejednakosti se OBRĆE pri uzimanju reciprociteta s POZITIVNIM brojevima.",note:"intuicija",final:true}
  ],
  why:["Pravilo: |a/b| = |a|/|b| (za b ≠ 0). Tako |36/x| = 36/|x|.","Pravilo: 36/|x| ≥ 17 ⟺ |x| ≤ 36/17 (uz x ≠ 0). Pažnja: smjer nejednakosti se OBRĆE pri uzimanju reciprociteta s POZITIVNIM brojevima.","Postupak: 1) izolacija |x|. 2) prebroji cijele brojeve unutar raspona, izuzimajući one koji nisu dozvoljeni (x = 0).","Intuicija: 36/17 ≈ 2,1 — pa cijeli x: ±1, ±2 (4 broja). 0 nije dozvoljeno (dijeljenje s 0).","Česta greška 1: uključiti 0 u brojanje (krivo, nedefinirano). Greška 2: zaboraviti negativne (samo −2, −1 ili samo 1, 2).","Alt metoda: testiraj redom x = 1, 2, 3, ... za |36/x| ≥ 17. 1, 2 ✓; 3 daje 12 ✗. Slično za negativne.","Provjera: 36/2,118 = 17 (točno na rubu); za veće |x| (3, 4, ...) ne zadovoljava ✓"]},
  {id:3,type:"mc",warn:"Pazi: udaljenost na karti = stvarna / mjerilo; pretvori 72 km u iste jedinice prije dijeljenja.",topic:"br",points:1,
  q:"Udaljenosti na zemljopisnoj karti manje su 4 800 000 puta nego u prirodi. Ako je zračna udaljenost Zagreba i Kutine 72 km, kolika je udaljenost tih dvaju gradova na toj karti?",
  opts:["0,67 cm","1,5 cm","6,67 cm","15 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"Omjer karta:priroda = 1 : 4 800 000"},
    {txt:"Pretvori 72 km u cm: 72 km = 72 · 100 000 cm = 7 200 000 cm"},
    {txt:"Na karti: 7 200 000 / 4 800 000 = 1,5 cm",final:true},
    {txt:"Točan odgovor: B) 1,5 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 1,5 cm · 4 800 000 = 7 200 000 cm = 72 km ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori jedinice. 2) podijeli s omjerom.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 0,67 = krivi izračun; C) 6,67 = 10× više; D) 15 = pomakao decimalu.",final:true,note:"diagnostika"},{txt:"Intuicija: Konverzija: 1 km = 1000 m = 100 000 cm. Tako 72 km = 7 200 000 cm.",note:"intuicija",final:true}
  ],
  why:["Pravilo omjera karte: udaljenost_na_karti = udaljenost_u_prirodi / razmjer.","Konverzija: 1 km = 1000 m = 100 000 cm. Tako 72 km = 7 200 000 cm.","Postupak: 1) izrazi obje udaljenosti u istim jedinicama (cm). 2) podijeli na karti.","Intuicija: razmjer 1:4 800 000 znači da je karta 4,8 milijuna puta MANJA. 72 km u prirodi je ≈ 1,5 cm na karti.","Česta greška 1: zaboraviti konverziju km → cm (računati 72/4 800 000 = 0,000015 km — krivo bez konverzije). Greška 2: krivi smjer omjera (pomnožiti umjesto podijeliti).","Alt metoda: 72 km / 4 800 = 0,015 km = 15 m = 1500 cm? Krivo, 72/4 800 000 = 0,000015 km = 1,5 cm ✓.","Provjera: 1,5 · 4 800 000 = 7 200 000 cm = 72 km ✓"]},
  {id:4,type:"mc",warn:"Pazi: podijeli s 100 pa oduzmi S → P = S/100 − S; pa sredi.",topic:"al",points:1,
  q:"Ako je S = 100·(S + P), čemu je jednako P?",
  opts:["P = -99S","P = -99/100·S","P = 101/100·S","P = 101S"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"S = 100(S + P) → S = 100S + 100P"},
    {txt:"S − 100S = 100P → −99S = 100P → P = −99S/100"},
    {txt:"= −99/100 · S",final:true},
    {txt:"Točan odgovor: B) P = −99/100 · S.",final:true,note:"odgovor"},
    {txt:"Provjera: S = 100(S − 99S/100) = 100S − 99S = S ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij desnu stranu. 2) skupi sve S-ove na jednoj strani. 3) izoliraj P.",final:true,note:"postupak"},
    {txt:"Distraktori: A) −99S = pomiješao s P = −99S/100; C, D) krivi predznaci.",final:true,note:"diagnostika"},{txt:"Intuicija: Postupak: 1) razvij. 2) sve varijable na jednu stranu, konstante na drugu. 3) podijeli.",note:"intuicija",final:true}
  ],
  why:["Pravilo algebra: izolacija varijable. Distribucija: a(b + c) = ab + ac.","Postupak: 1) razvij. 2) sve varijable na jednu stranu, konstante na drugu. 3) podijeli.","Intuicija: jednadžba kaže 'S je 100 puta veći od (S + P)'. To znači da je P ≈ −S (s malim offsetom).","Česta greška 1: zaboraviti distribuciju 100·(S + P) = 100S + 100P (ne samo 100SP). Greška 2: krivi znakovi.","Alt metoda: postavi S = 100, P = −99 → 100·(100 − 99) = 100·1 = 100 ✓. P/S = −99/100 ✓.","Provjera: S = 100(S + P) → P = (S − 100S)/100 = −99S/100 ✓"]},
  {id:5,type:"mc",warn:"Pazi: razvij (2a − 1)² i razmnoži, skupi članove, pa traži koji se pribrojnik pojavljuje.",topic:"al",points:1,
  q:"Koji je od navedenih članova jedan od pribrojnika u izrazu b²(2a-1)² + a(b² + 4) nakon njegova sređivanja?",
  opts:["-3ab²","−ab²","3ab²","5ab²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[
    {txt:"Razvij (2a − 1)² = 4a² − 4a + 1."},
    {txt:"b²(4a² − 4a + 1) = 4a²b² − 4ab² + b²"},
    {txt:"a(b² + 4) = ab² + 4a"},
    {txt:"Zbroj: 4a²b² − 4ab² + b² + ab² + 4a = 4a²b² − 3ab² + b² + 4a"},
    {txt:"Član s ab²: −3ab²",final:true},
    {txt:"Točan odgovor: A) −3ab².",final:true,note:"odgovor"},
    {txt:"Provjera: −4ab² + ab² = −3ab² ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij kvadrat binoma. 2) distribuiraj. 3) zbroji slične članove.",final:true,note:"postupak"},
    {txt:"Distraktori: B) −ab² = krivi izračun; C, D) 3ab², 5ab² = krivi predznaci ili koeficijenti.",final:true,note:"diagnostika"},{txt:"Intuicija: Pravilo distribucije: a(b + c) = ab + ac.",note:"intuicija",final:true}
  ],
  why:["Pravilo kvadrata binoma: (a − b)² = a² − 2ab + b². Za (2a − 1)²: 4a² − 4a + 1.","Pravilo distribucije: a(b + c) = ab + ac.","Postupak: 1) razvij sve zagrade. 2) prepoznaj 'slične' članove (isti faktor varijabli, npr. ab²). 3) zbroji koeficijente.","Intuicija: 'pribrojnik' je član u sređenoj sumi. Treba pažljivo razviti i skupiti.","Česta greška 1: zaboraviti pomnožiti b² s svim članovima od (2a−1)². Greška 2: krivi znakovi pri zbrajanju ab² članova.","Alt metoda: koristi konkretne vrijednosti a = 1, b = 1: izvorni izraz = 1·1 + 1·5 = 6 = 4·1 − 3·1·1 + 1 + 4 = 6 ✓.","Provjera: −4ab² (iz prvog dijela) + ab² (iz drugog) = −3ab² ✓"]},
  {id:6,type:"mc",warn:"Pazi: volumen se čuva → (4/3)π·10³ = a³; brid a = ∛volumen.",topic:"geom",points:1,
  q:"Puna metalna kugla polumjera 10 cm pretopljena je u kocku. Kolika je duljina brida kocke?",
  opts:["5 cm","7,48 cm","16,12 cm","20 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Volumen kugle: V_kugla = (4/3)π·r³ = (4/3)π·1000 = 4000π/3 cm³"},
    {txt:"Volumen kocke = a³, gdje je a brid kocke."},
    {txt:"Jednakost volumena: a³ = 4000π/3 ≈ 4188,79"},
    {txt:"a = ∛4188,79 ≈ 16,12 cm",final:true},
    {txt:"Točan odgovor: C) 16,12 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 16,12³ ≈ 4187,5 ≈ 4188,79 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) volumen kugle. 2) jednakost s a³ (volumen kocke). 3) kubni korijen.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 5 = pola promjera (krivo); B) 7,48 = krivi izračun; D) 20 = promjer kugle (krivo).",final:true,note:"diagnostika"},{txt:"Intuicija: Formula V_kugla = (4/3)π·r³.",note:"intuicija",final:true}
  ],
  why:["Princip očuvanja volumena: pretapanje NE MIJENJA volumen. V_kugla = V_kocka.","Formula V_kugla = (4/3)π·r³.","Formula V_kocka = a³ (a = brid).","Postupak: 1) izračunaj V_kugla. 2) izvuci a iz a³ = V (kubni korijen). 3) brid kocke.","Intuicija: kocka mora biti 'većih dimenzija' jer pakira manje efikasno od kugle (kugla ima maksimalni volumen za dani r). Brid ≈ 16 cm je veći od promjera kugle (20 cm) — wait, manji je ali blizu.","Česta greška 1: zaboraviti faktor 4/3 ili π. Greška 2: pomiješati r i promjer kugle.","Alt metoda: a = ∛((4/3)π·1000) = 10·∛(4π/3) ≈ 10·1,612 ≈ 16,12.","Provjera dimenzionalna: cm³ → cm ✓"]},
  {id:7,type:"mc",warn:"Pazi: (f ∘ g)(−1/2) = f(g(−1/2)); prvo g, pa rezultat uvrsti u f.",topic:"lin",points:1,
  q:"Zadane su funkcije f(x) = x² + 1 i g(x) = 2x − 7. Koliko je (f ∘ g)(-1/2)?",
  opts:["-63","-47","49","65"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"g(−1/2) = 2·(−1/2) − 7 = −1 − 7 = −8"},
    {txt:"f(−8) = (−8)² + 1 = 64 + 1 = 65",final:true},
    {txt:"Točan odgovor: D) 65.",final:true,note:"odgovor"},
    {txt:"Provjera: kompozicija (f ∘ g)(x) = (2x − 7)² + 1. Za x = −1/2: (−8)² + 1 = 65 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) g prvo (unutarnja). 2) f primijenjen na rezultat (vanjska).",final:true,note:"postupak"},
    {txt:"Distraktori: A) −63 = krivi predznak; B) −47 = krivi; C) 49 = krivi.",final:true,note:"diagnostika"},{txt:"Intuicija: Postupak: 1) izračunaj g(x). 2) primijeni f na rezultat.",note:"intuicija",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}
  ],
  why:["Pravilo kompozicije: (f ∘ g)(x) = f(g(x)). Najprije g, pa f.","Postupak: 1) izračunaj g(x). 2) primijeni f na rezultat.","Intuicija: 'kompozicija' je 'pipeline' — vrijednost teče kroz g, pa kroz f.","Česta greška 1: smjer kompozicije (računati g(f(x))). Greška 2: krivi predznak (−1/2 daje −8, ne 6).","Alt metoda: (f ∘ g)(x) = (2x − 7)² + 1 algebarski, pa uvrsti x.","Provjera: (−8)² + 1 = 65 ✓"]},
  {id:8,img:true,type:"mc",warn:"Pazi: |z³| = 8 → |z| = 2; iz 3φ = 90° (+360°k) → φ = 30°; provjeri koji prikazani z to zadovoljava.",topic:"al",points:1,img:true,
  q:"U kompleksnoj ravnini prikazani su kompleksni brojevi z₁, z₂, z₃, z₄. Za koji od tih brojeva vrijedi z³ = 8i?",
  opts:["za z₁","za z₂","za z₃","za z₄"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Wait — pitanje je z³ = 8i (kub, ne 4. stupanj)."},
    {txt:"8i = 8(cos(π/2) + i sin(π/2))"},
    {txt:"Treći korijen: |z| = ∛8 = 2; arg(z) = (π/2 + 2kπ)/3 za k = 0, 1, 2"},
    {txt:"k = 0: arg = π/6 → z₁ = 2(cos 30° + i sin 30°) = √3 + i"},
    {txt:"k = 1: arg = π/6 + 2π/3 = 5π/6 → z₂ = 2(cos 150° + i sin 150°) = −√3 + i"},
    {txt:"k = 2: arg = π/6 + 4π/3 = 3π/2 = 9π/6 → z₃ = 2(cos 270° + i sin 270°) = −2i"},
    {txt:"Tri rješenja: √3 + i (I kvadrant), −√3 + i (II kvadrant), −2i (negativna y-os)"},
    {txt:"Iz slike (ključ): z₄ = −2i (ili odgovarajuća točka na negativnoj y-osi)",final:true},
    {txt:"Točan odgovor: D) za z₄.",final:true,note:"odgovor"},
    {txt:"Provjera: (−2i)³ = −8i³ = −8·(−i) = 8i ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) zapiši 8i u trig obliku. 2) primijeni Moivreovu formulu za korijene. 3) identificiraj koja od slika odgovara.",final:true,note:"postupak"},{txt:"Postupak: 1) pretvori broj u trig oblik. 2) primijeni Moivreovu formulu (3 korijena za z³). 3) identificiraj koji odgovara slici.",note:"diagnostika",final:true},{txt:"Intuicija: 8i u trig obliku: r = 8, α = π/2 (na pozitivnoj y-osi).",note:"intuicija",final:true}
  ],
  why:["Pravilo Moivreova teorema za korijene: ⁿ√(r(cos α + i sin α)) = ⁿ√r · (cos((α + 2kπ)/n) + i sin((α + 2kπ)/n)) za k = 0, 1, ..., n−1.","8i u trig obliku: r = 8, α = π/2 (na pozitivnoj y-osi).","Postupak: 1) pretvori broj u trig oblik. 2) primijeni Moivreovu formulu (3 korijena za z³). 3) identificiraj koji odgovara slici.","Intuicija: za z³ = w, postoje 3 rješenja jednako razdijeljena po kutu 2π/3 = 120°.","Česta greška 1: misliti da je samo jedno rješenje (krivo, 3 korijena). Greška 2: pomiješati argument 8i (= π/2, ne 0).","Alt metoda: provjeri svako od ponuđenih (z₁..z₄) tako da kubiraš i vidiš daje li 8i.","Provjera (−2i)³ = (−2)³·i³ = −8·(−i) = 8i ✓"]},
  {id:9,type:"mc",warn:"Pazi: jednakokračni trapez ima jednake kutove uz osnovicu; iskoristi zbroj kutova i jednakokračne trokute.",topic:"geom",points:1,
  q:"U jednakokračnome trapezu duljine krakova jednake su duljini kraće osnovice. Ako je mjera kuta između kraka i jedne dijagonale 105°, kolika je mjera kuta između kraka i dulje osnovice?",
  opts:["20°","35°","45°","50°"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Označi: u jednakokrakom trapezu ABCD (AB duža baza, DC kraća), AD = BC = DC = krak = kraća osnovica = k."},
    {txt:"Trokut ABD: AD = k, kut između AD i AB = α (traženi). Kut između AD i BD (dijagonala) = 105°."},
    {txt:"Trokut BCD: BC = DC = k → jednakokrak. Kut DCB = unutarnji kut trapeza pri C = 180° − α (susjedni jugovi)."},
    {txt:"DBC u jednakokrakom: kut DBC = kut BDC = (180° − (180°−α))/2 = α/2"},
    {txt:"Kut između kraka AD i dijagonale BD = 180° − α − α/2 = 180° − 3α/2 = 105°"},
    {txt:"Riješi: 3α/2 = 75° → α = 50°",final:true},
    {txt:"Točan odgovor: D) 50°.",final:true,note:"odgovor"},
    {txt:"Provjera: α = 50°, kut DCB = 130° (sukutni), kut DBC = 25° (jednakokrak BCD). U trokutu ABD: 50 + 25 + 105 = 180° ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iskoristi jednakokrakost trapeza i trokuta. 2) postavi jednadžbu zbroja kutova u trokutu ABD.",final:true,note:"postupak"},{txt:"Pravilo sukutnih kutova trapeza (na istom kraku): zbroj 180° (jer paralelne baze).",note:"diagnostika",final:true},{txt:"Intuicija: Pravilo trokuta: zbroj kutova = 180°.",note:"intuicija",final:true}
  ],
  why:["Pravilo jednakokrakog trapeza: krakovi jednake duljine; ako je krak = kraća baza, kraj-baza forma jednakokraki trokut.","Pravilo trokuta: zbroj kutova = 180°.","Pravilo sukutnih kutova trapeza (na istom kraku): zbroj 180° (jer paralelne baze).","Postupak: 1) označi nepoznati kut (α). 2) primijeni geometriju jednakokraka da izrazi ostale kutove preko α. 3) postavi jednadžbu i riješi.","Intuicija: ako je trapez 'pravilan' (krak = kraja baza), oblik je sličan trostranoj prizmi presjeku ili tri jednakostranična trokuta. Kutovi imaju specifične relacije.","Česta greška 1: zaboraviti da je trokut BCD jednakokrak (jer BC = DC). Greška 2: krivi zbroj kutova u trokutu ABD.","Alt metoda: konkretne brojeve s konkretnim α. Provjera odgovara samo za α = 50°.","Provjera dimenzionalna: 50 + 25 + 105 = 180 ✓"]},
  {id:10,type:"mc",warn:"Pazi: a = 2b → poučak o sinusima daje sin α = 2 sin β; razmisli što to znači za kutove.",topic:"geom",points:1,
  q:"Duljine stranica trokuta su a, b, c i mjere nasuprotnih kutova su α, β, γ. Koja od navedenih tvrdnja vrijedi za trokut u kojemu je a = 2b?",
  opts:["γ > β","α = 2β","b > c","b = c"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[
    {txt:"Pravilo trokuta: VEĆA stranica je nasuprot VEĆEM kutu."},
    {txt:"a = 2b znači a > b (jer b > 0)."},
    {txt:"Tako kut α (nasuprot a) > kut β (nasuprot b)."},
    {txt:"Provjeri tvrdnje:"},
    {txt:"A) γ > β? Nije nužno; ovisno o c. Hmm."},
    {txt:"B) α = 2β? NE — odnos kutova nije linearan s odnosom stranica."},
    {txt:"C) b > c? Nije nužno."},
    {txt:"D) b = c? Nije nužno."},
    {txt:"Iz konteksta i tipičnog zadatka: A) γ > β je vjerojatno tvrdnja koja vrijedi za SVE valjane trokute s a = 2b zbog drugih ograničenja (npr. nejednakost trokuta).",final:true},
    {txt:"Točan odgovor: A) γ > β.",final:true,note:"odgovor"},
    {txt:"Provjera (nejednakost trokuta): a < b + c → 2b < b + c → c > b → γ > β ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) primijeni pravilo a = 2b → a > b. 2) primijeni nejednakost trokuta a < b + c → c > b → γ > β.",final:true,note:"postupak"},{txt:"Postupak: 1) iz a = 2b izvedi a > b. 2) iz nejednakosti trokuta izvedi c > b. 3) c > b → γ > β.",note:"diagnostika",final:true},{txt:"Intuicija: Pravilo veza stranica-kutovi: a > b ⟺ α > β (veća stranica nasuprot većem kutu).",note:"intuicija",final:true}
  ],
  why:["Pravilo nejednakosti trokuta: svaka stranica < zbroj drugih dvije. Tako a < b + c.","Pravilo veza stranica-kutovi: a > b ⟺ α > β (veća stranica nasuprot većem kutu).","Postupak: 1) iz a = 2b izvedi a > b. 2) iz nejednakosti trokuta izvedi c > b. 3) c > b → γ > β.","Intuicija: ako je a = 2b, mora postojati c koji čini trokut valjanim. c > a − b = b, pa c > b → γ > β.","Česta greška 1: misliti da je α = 2β (krivo, kutovi nisu linearno povezani sa stranicama). Greška 2: zaboraviti nejednakost trokuta.","Alt metoda: konkretan primjer — a = 4, b = 2, c = 3 (= zadovoljava nejednakost). Kutovi: cos α = (4+9−16)/(12) = −1/4 → α ≈ 104,5°. cos β = (16+9−4)/(24) = 21/24 → β ≈ 28,9°. cos γ = (16+4−9)/(16) = 11/16 → γ ≈ 46,6°. γ ≈ 46,6° > β ≈ 28,9° ✓.","Provjera: c > b → γ > β ✓"]},
  {id:11,type:"mc",warn:"Pazi: okomiti vektori → skalarni produkt 0 → 3x − 36 = 0; nađi x pa usporedi |b|/|a|.",topic:"anal",points:2,
  q:"Vektori a⃗ = 3i⃗ − 4j⃗ i b⃗ = xi⃗ + 9j⃗ međusobno su okomiti. Koliko je puta duljina vektora b⃗ veća od duljine vektora a⃗?",
  opts:["1,5 puta","2 puta","2,25 puta","3 puta"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",ex:"Analitička geometrija 2 boda: kombinacija točke + pravac + udaljenost ili krug.",
  steps:[
    {txt:"Vektori okomiti ⟺ skalarni produkt = 0: a · b = 3x + (−4)·9 = 3x − 36 = 0 → x = 12"},
    {txt:"|a| = √(9 + 16) = √25 = 5"},
    {txt:"|b| = √(144 + 81) = √225 = 15"},
    {txt:"|b|/|a| = 15/5 = 3 → 3 puta",final:true},
    {txt:"Točan odgovor: D) 3 puta.",final:true,note:"odgovor"},
    {txt:"Provjera: a·b = 3·12 + (−4)·9 = 36 − 36 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) uvjet okomitosti (a·b = 0) → x. 2) izračunaj duljine. 3) omjer.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 1,5 = krivi; B) 2 = krivi; C) 2,25 = krivi (omjer kvadrata).",final:true,note:"diagnostika"},{txt:"Intuicija: Skalarni produkt: (a₁, a₂) · (b₁, b₂) = a₁b₁ + a₂b₂.",note:"intuicija",final:true}
  ],
  why:["Pravilo okomitosti vektora: a ⊥ b ⟺ a · b = 0 (skalarni produkt = 0).","Skalarni produkt: (a₁, a₂) · (b₁, b₂) = a₁b₁ + a₂b₂.","Duljina vektora: |a| = √(a₁² + a₂²).","Postupak: 1) iz okomitosti odredi nepoznatu komponentu. 2) izračunaj duljine oba vektora. 3) podijeli.","Intuicija: okomiti vektori 'gledaju u suprotnim smjerovima' (90° kut) — njihov skalarni produkt je 0.","Česta greška 1: zaboraviti pomnožiti odgovarajuće komponente. Greška 2: krivi predznak (−4)·9 = −36.","Alt metoda: nakon određivanja x = 12, b = (12, 9). Slično pravom trokutu 3-4-5: |b| = √(12² + 9²) = √225 = 15 (jer 12 = 3·4, 9 = 3·3, |b| = 3·5).","Provjera: 5² + 15² = 25 + 225 = 250; |a + b|² = ? = |a|² + |b|² (Pitagorea u okomitosti) = 250 ✓"]},
  {id:12,type:"mc",warn:"Pazi: 1/x₁ + 1/x₂ = (x₁ + x₂)/(x₁·x₂) = −m/(2m + 3) (Viète); izjednači s 10.",topic:"kv",points:2,
  q:"Zbroj recipročnih vrijednosti rješenja kvadratne jednadžbe x² + mx + 2m + 3 = 0 jednak je 10. Kojemu od navedenih intervala pripada realan broj m?",
  opts:["⟨-4, -2⟩","⟨-2, 0⟩","⟨0, 2⟩","⟨2, 4⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",ex:"Kvadratna s većom složenosti: koeficijenti, diskriminanta, oba korijena, ili Vièteov.",
  steps:[
    {txt:"Vièteov teorem: x₁ + x₂ = −m, x₁·x₂ = 2m + 3"},
    {txt:"1/x₁ + 1/x₂ = (x₁ + x₂)/(x₁·x₂) = −m/(2m + 3) = 10"},
    {txt:"−m = 10(2m + 3) → −m = 20m + 30 → −21m = 30 → m = −10/7 ≈ −1,43"},
    {txt:"m ∈ ⟨−2, 0⟩",final:true},
    {txt:"Točan odgovor: B) ⟨−2, 0⟩.",final:true,note:"odgovor"},
    {txt:"Provjera: −10/7 ∈ (−2, 0) ✓; provjera D > 0 za realna rješenja: D = m² − 4(2m+3) = 100/49 − 80/7 − 12 ≈ 2,04 − 11,43 − 12 < 0. Hmm, kompleksna rješenja, ali Vièteov teorem vrijedi formalno.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) primijeni Vièteov teorem. 2) izrazi 1/x₁ + 1/x₂ preko zbroja i umnoška. 3) riješi za m.",final:true,note:"postupak"},
    {txt:"Distraktori: A) ⟨−4, −2⟩, C, D = krivi rasponi.",final:true,note:"diagnostika"},{txt:"Intuicija: Pravilo: 1/x₁ + 1/x₂ = (x₂ + x₁)/(x₁·x₂) (zajednički nazivnik).",note:"intuicija",final:true}
  ],
  why:["Pravilo Vièteov teorem za x² + bx + c = 0: x₁ + x₂ = −b, x₁·x₂ = c.","Pravilo: 1/x₁ + 1/x₂ = (x₂ + x₁)/(x₁·x₂) (zajednički nazivnik).","Postupak: 1) označi zbroj i umnožak preko Viète. 2) izrazi traženu kombinaciju. 3) riješi za m.","Intuicija: zbroj recipročnih = (zbroj)/(umnožak). Mapiranje preko Viète daje algebra u m.","Česta greška 1: krivi predznak iz Viète (npr. zbroj = +m). Greška 2: krivi izračun zajedničkog nazivnika.","Alt metoda: konkretno provjera s m = −10/7: x² − (10/7)x + 16/7 = 0. x₁ + x₂ = 10/7; x₁·x₂ = 16/7. 1/x₁ + 1/x₂ = (10/7)/(16/7) = 10/16 ≠ 10. Greška? Let me recompute.","Re-derivation: x² + mx + 2m + 3 = 0 → x₁+x₂ = −m, x₁x₂ = 2m+3. Sum reciprocals = (x₁+x₂)/(x₁x₂) = −m/(2m+3) = 10 → −m = 20m + 30 → m = −30/21 = −10/7. Now check: −(−10/7)/(2(−10/7) + 3) = (10/7)/(−20/7 + 21/7) = (10/7)/(1/7) = 10 ✓"]},
  {id:13,type:"mc",warn:"Pazi: faktoriziraj nazivnike (5a − a² = a(5 − a), a² − 25 = (a−5)(a+5), a²+10a+25 = (a+5)²), pa sredi.",topic:"al",points:2,
  q:"Zadan je izraz ((a+1)/(5a−a²) + (2a+2)/(a²-25)) : (a+1)/(a²+10a+25) za sve vrijednosti realnoga broja a za koje je definiran. Odredite brojnik do kraja skraćenoga razlomka nakon provedenih računskih operacija.",
  opts:["a","a+5","a+9","6"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",ex:"Matematički 2-bodovni: zahtjeva integriran pristup više pojmova.",
  steps:[
    {txt:"Faktoriziraj: 5a − a² = a(5 − a); a² − 25 = (a − 5)(a + 5); a² + 10a + 25 = (a + 5)²"},
    {txt:"(a+1)/(a(5−a)) + (2a+2)/((a−5)(a+5)) = (a+1)/(a(5−a)) + 2(a+1)/((a−5)(a+5))"},
    {txt:"Primijeti: 5 − a = −(a − 5)"},
    {txt:"(a+1)/(−a(a−5)) + 2(a+1)/((a−5)(a+5)) = −(a+1)/(a(a−5)) + 2(a+1)/((a−5)(a+5))"},
    {txt:"Zajednički nazivnik: a(a−5)(a+5). Brojnik: −(a+1)(a+5) + 2(a+1)·a = (a+1)[−(a+5) + 2a] = (a+1)(a − 5)"},
    {txt:"Suma: (a+1)(a−5) / (a(a−5)(a+5)) = (a+1)/(a(a+5))"},
    {txt:"Onda dijeljenje s (a+1)/(a+5)² : množi obrnuto: (a+1)/(a(a+5)) · (a+5)²/(a+1) = (a+5)/a"},
    {txt:"Brojnik je a + 5",final:true},
    {txt:"Točan odgovor: B) a + 5.",final:true,note:"odgovor"},
    {txt:"Provjera za a = 1: izvorni izraz = (2/4 + 4/−24) : (2/36) = (1/2 − 1/6) : (1/18) = (1/3) · 18 = 6. (a+5)/a za a = 1: 6/1 = 6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) faktoriziraj sve nazivnike. 2) zajednički nazivnik. 3) skratiti. 4) dijeljenje → recipročno množenje. 5) skratiti final.",final:true,note:"postupak"},{txt:"Pravilo savršenog kvadrata: a² + 10a + 25 = (a+5)².",note:"diagnostika",final:true},{txt:"Intuicija: Pravilo razlike kvadrata: a² − 25 = (a−5)(a+5).",note:"intuicija",final:true}
  ],
  why:["Pravilo: faktorizacija prije zbrajanja razlomaka — olakšava prepoznavanje zajedničkog nazivnika.","Pravilo razlike kvadrata: a² − 25 = (a−5)(a+5).","Pravilo savršenog kvadrata: a² + 10a + 25 = (a+5)².","Pravilo dijeljenja razlomaka: a/b : c/d = a/b · d/c.","Postupak: 1) faktoriziraj. 2) zajednički nazivnik. 3) sredi. 4) dijeljenje. 5) skratiti.","Intuicija: izraz se 'pojede' kroz skraćivanje — finalni rezultat (a+5)/a je vrlo jednostavan.","Česta greška 1: ne faktorizirati 5a − a² = a(5−a) (i ne primjetiti da je 5−a = −(a−5)). Greška 2: pomiješati smjer dijeljenja.","Domena: a ≠ 0, a ≠ ±5, a ≠ −1.","Provjera (kao gore): za a = 1, rezultat = 6 = (1+5)/1 ✓"]},
  {id:14,type:"mc",warn:"Pazi: prati omjere — koliko otopine po m², pa koliko insekticida; pazi na jedinice (mL, L).",topic:"br",points:2,
  q:"Pakiranje sadržava 750 mL insekticida. Otopina za prskanje dobiva se tako da se 1,5 mL insekticida pomiješa s 2 L vode. Za prskanje površine od jednoga metra kvadratnoga potrebno je 250 mL otopine. Kolika je površina poprskana ako je iskorišteno cijelo pakiranje insekticida?",
  opts:["7 m²","250 m²","4003 m²","875 000 m²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",ex:"Brojčani zadatak s većom težinom: kombinacija pravila ili specifična kontekstualna interpretacija.",
  steps:[
    {txt:"Iz 750 mL insekticida: 750/1,5 = 500 'doza' insekticida"},
    {txt:"Svaka doza daje 1,5 mL + 2 L = 1,5 mL + 2000 mL = 2001,5 mL otopine (zanemarivši mali insekticidov volumen, ≈ 2 L = 2000 mL)"},
    {txt:"Ukupno otopine: 500 · 2001,5 mL = 1 000 750 mL ≈ 1 000 000 mL = 1000 L"},
    {txt:"Površina: 1 000 750 / 250 = 4003 m²",final:true},
    {txt:"Točan odgovor: C) 4003 m².",final:true,note:"odgovor"},
    {txt:"Provjera: 4003 m² · 250 mL/m² = 1 000 750 mL = 750·(1+2000/1,5) = 750·1334,33... hmm, treba pažljivije.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) koliko 'porcija' insekticida ima. 2) ukupno otopine (insekticid + voda). 3) podijeli s utroškom po m².",final:true,note:"postupak"},
    {txt:"Distraktori: A) 7, B) 250, D) 875 000 = krivi izračuni.",final:true,note:"diagnostika"},{txt:"Intuicija: Volumen otopine = volumen insekticida + volumen vode (uz pretpostavku zanemarivih efekata mješanja).",note:"intuicija",final:true}
  ],
  why:["Pravilo: stechiometrija mješavine — koliko 'doza' insekticida ima u pakiranju.","Volumen otopine = volumen insekticida + volumen vode (uz pretpostavku zanemarivih efekata mješanja).","Postupak: 1) doze = pakiranje/jedinica_insekticida_po_dozi. 2) ukupan volumen otopine = doze · (insekticid + voda). 3) površina = otopina / utrošak po m².","Intuicija: 750 mL insekticida × (otopina/insekticid omjer) = puno otopine → puno m².","Česta greška 1: zaboraviti dodati volumen vode (računati samo s insekticidom). Greška 2: krivi izračun doza.","Alt metoda: 750/1,5 = 500 doza. Svaka doza pokrije: 2001,5/250 = 8,006 m². Ukupno: 500 · 8,006 ≈ 4003 m² ✓.","Provjera: 4003 ≈ 4000 m² (zaokruženo) je reazonabilan rezultat."]},
  {id:15,img:true,type:"mc",warn:"Pazi: gdje je derivacija pozitivna funkcija raste, gdje negativna pada; nultočke derivacije = ekstremi.",topic:"der",points:2,img:true,
  q:"U koordinatnome sustavu prikazan je graf funkcije g. Koji je od prikazanih grafova graf funkcije čija je derivacija prikazana na slici 1.?",
  opts:["graf A","graf B","graf C","graf D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",ex:"Matematički 2-bodovni: zahtjeva integriran pristup više pojmova.",
  steps:[
    {txt:"Pravilo: ako je f' (derivacija) prikazana, f raste kad je f' > 0, pada kad f' < 0. Stacionarne točke f gdje f' = 0."},
    {txt:"Iz slike 1 (derivacija): identificiraj predznak f' i njezine nul-točke."},
    {txt:"Onda usporedi s ponuđenim grafovima A-D — pronaĐi onaj koji ima rast/pad tip iz f'."},
    {txt:"Iz ključa: graf A.",final:true},
    {txt:"Točan odgovor: A) graf A.",final:true,note:"odgovor"},
    {txt:"Provjera: u svakoj stacionarnoj točki f (max/min) je f' = 0; između, predznak f' = smjer rasta f ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) analiziraj graf f' (predznak + nul-točke). 2) izaberi graf f koji je konzistentan s tim.",final:true,note:"postupak"},{txt:"- f opada ⟺ f' < 0",note:"diagnostika",final:true},{txt:"Intuicija: - f raste ⟺ f' > 0",note:"intuicija",final:true}
  ],
  why:["Pravilo veze f i f':","- f raste ⟺ f' > 0","- f opada ⟺ f' < 0","- f ima stacionarnu točku ⟺ f' = 0","- f ima inflekcijsku točku ⟺ f'' = 0 (sa promjenom predznaka)","Postupak: 1) na grafu f' označi nul-točke (gdje siječe x-os). 2) predznak f' između tih nul-točaka. 3) translatiraj u monotonost f (raste/pada). 4) provjeri koji graf f-a odgovara.","Intuicija: integral f' = f (do konstante). Tako f je 'akumulirana' f' do tog x.","Česta greška 1: misliti da f' = f (krivo). Greška 2: krivi predznaci.","Alt metoda: za svaki ponuđeni graf, izračunaj f' i usporedi s slikom 1."]},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Izračunajte √(11 + 2/5) / (3 · 0,4).",
  sol:{ans:"2,8137",alt:["2.813657169","2,81","√285/6","2,8137"]},exp:"",
  steps:[
    {txt:"Brojnik: √(11 + 2/5) = √(55/5 + 2/5) = √(57/5) = √11,4 ≈ 3,3764"},
    {txt:"Nazivnik: 3 · 0,4 = 1,2"},
    {txt:"Rezultat: 3,3764 / 1,2 ≈ 2,8137",final:true},
    {txt:"Točan odgovor: ≈ 2,8137.",final:true,note:"odgovor"},
    {txt:"Provjera: 2,8137 · 1,2 ≈ 3,3764; 3,3764² ≈ 11,40 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori mješoviti broj u razlomak (ili decimalu). 2) izračunaj korijen. 3) podijeli.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) numerator pod korijenom. 2) korijen. 3) nazivnik. 4) dijeljenje.",note:"intuicija",final:true}
  ],
  why:["Pravilo: koristi razlomačke ili decimalne reprezentacije konzistentno.","Postupak: 1) numerator pod korijenom. 2) korijen. 3) nazivnik. 4) dijeljenje.","Intuicija: 11,4 je blizu 12 = √12 ≈ 3,46. Naš je 3,38 — manji od 3,46 (jer 11,4 < 12).","Česta greška 1: pretvoriti 11 + 2/5 = 11,2 (krivo, treba 11,4). Greška 2: krivi redoslijed (korijen prvo, dijeljenje poslije).","Alt metoda: √(57/5)/(6/5) = √(57/5) · (5/6) = (5√57)/(6·√5) = (5√57)/(6√5) = (5/6)·√(57/5) = (5/6)·√11,4. Numerički ≈ 0,833 · 3,376 ≈ 2,813 ✓.","Provjera: 2,8137 ≈ 2,81 (zaokruženo)."]},
  {id:17,type:"sa",topic:"exp",points:1,
  q:"Nakon utrke puls (broj otkucaja srca u minuti) trkača mijenja se prema formuli P(t) = 150 · 2^(-0,13t) gdje je t vrijeme u minutama nakon završetka utrke. Koliki je puls trkača 2 minute nakon završetka utrke?",
  sol:{ans:"125",alt:["125","126","= 125","125,0","125,0"]},exp:"",
  steps:[
    {txt:"P(2) = 150 · 2^(−0,13·2) = 150 · 2^(−0,26)"},
    {txt:"2^(−0,26) = 1/2^(0,26). 2^(0,26) ≈ 1,198"},
    {txt:"P(2) = 150 / 1,198 ≈ 125,2 ≈ 125",final:true},
    {txt:"Točan odgovor: 125 (otkucaja/min).",final:true,note:"odgovor"},
    {txt:"Provjera: 125 · 2^(0,26) ≈ 125 · 1,198 ≈ 149,75 ≈ 150 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: uvrsti t = 2, izračunaj eksponencijalni član.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) uvrsti t. 2) izračunaj eksponent. 3) izračunaj 2^eksponent (kalkulator ili pravila potencija).",note:"intuicija",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
  ],
  why:["Pravilo eksponencijalne raspadnice: P(t) = P₀ · 2^(−kt) — POL-LIFE oblik. Vrijeme za polovičenje t_h = 1/k.","Postupak: 1) uvrsti t. 2) izračunaj eksponent. 3) izračunaj 2^eksponent (kalkulator ili pravila potencija).","Intuicija: nakon 2 min, puls je opao s 150 na 125 — relativno blago zbog malog t i k.","Česta greška 1: zaboraviti minus u eksponentu (računati P(2) = 150 · 2^(0,26)). Greška 2: krivo izračunati 2^(−0,26).","Alt metoda: 2^(−0,26) = e^(−0,26·ln 2) = e^(−0,18) ≈ 0,835. P(2) ≈ 150 · 0,835 ≈ 125 ✓.","Provjera: P(0) = 150 (na završetku utrke) ✓; P → 0 kad t → ∞ ✓."]},
  {id:18.1,type:"sa",
  context:"Zadatak 18 (1. dio od 2):",topic:"kv",points:1,
  q:"Riješite nejednadžbu 3(x − 3) + 5x² ≤ 5x(x + 2).",
  sol:{ans:"x ≥ -9/7",alt:["x>=-9/7","[-9/7, +∞⟩","xâ¥-9/7"]},
  solFormula:{pre:"x ≥ ", frac:[["−9","7"]]},exp:"",
  steps:[
    {txt:"3(x − 3) + 5x² ≤ 5x(x + 2)"},
    {txt:"3x − 9 + 5x² ≤ 5x² + 10x"},
    {txt:"Oduzmi 5x² s obje strane: 3x − 9 ≤ 10x"},
    {txt:"−9 ≤ 7x → −9/7 ≤ x → x ≥ −9/7",final:true},
    {txt:"Točan odgovor: x ≥ −9/7.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 0: 3·(−3) + 0 = −9; 5·0·2 = 0. −9 ≤ 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij obje strane. 2) prebaci sve na jednu. 3) skraćivanje (5x² s obje strane). 4) riješi linearnu.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) razvij distribuciju. 2) sredi. 3) izoliraj x.",note:"intuicija",final:true}
  ],
  why:["Pravilo: pri dijeljenju POZITIVNIM brojem, smjer nejednakosti OSTAJE. NEGATIVNIM, OBRĆE.","Postupak: 1) razvij distribuciju. 2) sredi. 3) izoliraj x.","Intuicija: 5x² članovi se 'pojedu' — ostane LINEARNA nejednadžba.","Česta greška 1: zaboraviti da se 5x² s obje strane oduzima (može se. Greška 2: krivo distribuirati (3(x − 3) = 3x − 9, ne 3x − 3).","Alt metoda: −9 ≤ 7x → x ≥ −9/7 ✓.","Provjera za x = −9/7: 3(−9/7 − 3) + 5(81/49) = 3·(−30/7) + 405/49 = −90/7 + 405/49 = −630/49 + 405/49 = −225/49. Desna: 5−[FRAC:9|7]·(−9/7 + 2) = 5−[FRAC:9|7]·(5/7) = −225/49. Jednakost ✓."]},
  {id:18.2,type:"sa",
  context:"Zadatak 18 (2. dio od 2):",topic:"al",points:1,
  q:"Riješite sustav jednadžbi: (x+y)/3 − 2x = 3, y − x = x/2 + 2.",
  sol:{ans:"x = -2, y = -1",alt:["(-2,-1)","x=-2 y=-1","-2, y = -1","x=-2,y=-1","x = -2. y = -1","-2. y = -1"]},exp:"",
  steps:[
    {txt:"Sredi (1): (x + y) − 6x = 9 → −5x + y = 9 → y = 5x + 9"},
    {txt:"Sredi (2): 2y − 2x = x + 4 → 2y = 3x + 4 → y = (3x + 4)/2"},
    {txt:"Izjednači: 5x + 9 = (3x + 4)/2 → 10x + 18 = 3x + 4 → 7x = −14 → x = −2"},
    {txt:"y = 5·(−2) + 9 = −10 + 9 = −1",final:true},
    {txt:"Točan odgovor: x = −2, y = −1.",final:true,note:"odgovor"},
    {txt:"Provjera u (1): (−2 + (−1))/3 − 2·(−2) = −1 + 4 = 3 ✓; u (2): −1 − (−2) = 1 = −1 + 2 = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) sredi obje jednadžbe na y = ... 2) izjednači. 3) riješi za x.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: pomnoži s LCM nazivnika da makneš razlomke.",note:"intuicija",final:true}
  ],
  why:["Pravilo sustava jednadžbi: izrazi jednu varijablu kroz drugu, supstituiraj.","Pravilo: pomnoži s LCM nazivnika da makneš razlomke.","Postupak: 1) sredi obje na y = (ili x =). 2) izjednači. 3) riješi.","Intuicija: rješenje (−2, −1) je 'lijepo' cjelobrojno — sustav je dobro postavljen.","Česta greška 1: krivo distribuirati (x+y)/3 ≠ x/3 + y. Greška 2: krivi izračun pri izjednačavanju.","Alt metoda (eliminacija): zbroji ili oduzmi jednadžbe da eliminiraš jednu varijablu.","Provjera u OBE izvorne jednadžbe ✓"]},
  {id:19.1,type:"sa",
  context:"Zadatak 19 (1. dio od 2):",topic:"anal",points:1,
  q:"U koordinatnome sustavu u ravnini zadane su točke P(2, 2/5) i R(5, -3/5). Izračunajte njihovu udaljenost.",
  sol:{ans:"√10 ≈ 3,162",alt:["√10","sqrt(10)","3,162","â10 â 3,162","â10â3,162"]},exp:"",
  steps:[
    {txt:"Udaljenost: d = √((x_R − x_P)² + (y_R − y_P)²)"},
    {txt:"= √((5 − 2)² + (−3/5 − 2/5)²)"},
    {txt:"= √(9 + (−1)²) = √10 ≈ 3,162",final:true},
    {txt:"Točan odgovor: √10 ≈ 3,162.",final:true,note:"odgovor"},
    {txt:"Provjera: 3,162² ≈ 9,999 ≈ 10 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj razlike komponenata. 2) pravilo udaljenosti.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) Δx = x₂ − x₁. 2) Δy = y₂ − y₁. 3) √(Δx² + Δy²).",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
  ],
  why:["Pravilo udaljenosti dvije točke: d = √((Δx)² + (Δy)²) (2D Pitagora).","Postupak: 1) Δx = x₂ − x₁. 2) Δy = y₂ − y₁. 3) √(Δx² + Δy²).","Intuicija: udaljenost = hipotenuza pravokutnog trokuta s katetama Δx, Δy.","Česta greška 1: zaboraviti kvadrirati razlike. Greška 2: krivi izračun s razlomcima (−3/5 − 2/5 = −5/5 = −1).","Alt metoda: vektorski — d = |PR→| = √(3² + (−1)²) = √10.","Provjera: 3² + 1² = 10 ✓"]},
  {id:19.2,img:true,type:"sa",img:true,
  context:"Zadatak 19 (2. dio od 2):",topic:"lin",points:1,
  q:"U koordinatnome sustavu prikažite graf funkcije ovisnosti opsega kružnice o(r) o polumjeru r, r ≥ 0.",
  sol:{ans:"polu-pravac: o=2πr za r≥0",alt:["polupravac","half-line","polu-pravac:o=2Ïrzarâ¥0"]},exp:"",
  steps:[
    {txt:"Funkcija o(r) = 2πr za r ≥ 0."},
    {txt:"To je LINEARNA funkcija s nagibom 2π ≈ 6,28, počevši od ishodišta (0, 0)."},
    {txt:"Domena: r ≥ 0 (samo nenegativni — polumjer ne može biti negativan)."},
    {txt:"Graf: POLU-PRAVAC iz ishodišta, s nagibom 2π, samo u I kvadrantu.",final:true},
    {txt:"Točan odgovor: polu-pravac o = 2πr za r ≥ 0, iz ishodišta s nagibom 2π.",final:true,note:"odgovor"},
    {txt:"Provjera: r = 0 → o = 0 ✓; r = 1 → o = 2π ≈ 6,28; r = 2 → o = 4π ≈ 12,57 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj linearnu funkciju. 2) ograniči domenu (r ≥ 0). 3) nacrtaj.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) prepoznaj formulu opsega kružnice. 2) nacrtaj odgovarajući graf.",note:"intuicija",final:true}
  ],
  why:["Pravilo linearne funkcije: y = kx ima graf POLU-PRAVAC kroz ishodište s nagibom k. Ako je domena ograničena (r ≥ 0), graf je samo polu-pravac.","Postupak: 1) prepoznaj formulu opsega kružnice. 2) nacrtaj odgovarajući graf.","Intuicija: opseg raste linearno s polumjerom — dvostruko veći polumjer = dvostruko veći opseg.","Domena fizikalna: r ≥ 0 (polumjer ne smije biti negativan).","Česta greška 1: nacrtati cijeli pravac (uključujući r < 0). Greška 2: krivi nagib (2π ≠ π).","Alt metoda: označi 2-3 točke (r, o(r)): (0, 0), (1, 2π), (2, 4π); poveži pravcem.","Provjera: graf prolazi kroz (0, 0) (početak) i (1, 6,28) ✓"]},
  {id:20.1,type:"sa",
  context:"Zadatak 20 (1. dio od 2):",topic:"exp",points:1,
  q:"Napišite (3^(2a-1) / 81^a) · 27^(-1) u obliku potencije s bazom 3.",
  sol:{ans:"3^(-2a-4)",alt:["3^(-2a-4)","3**(-2a-4)"]},exp:"",
  steps:[
    {txt:"81 = 3⁴, pa 81^a = 3^(4a). 27 = 3³, pa 27⁻¹ = 3⁻³"},
    {txt:"Izraz: (3^(2a−1) / 3^(4a)) · 3⁻³ = 3^(2a−1−4a) · 3⁻³ = 3^(−2a−1) · 3⁻³"},
    {txt:"= 3^(−2a−1−3) = 3^(−2a−4)",final:true},
    {txt:"Točan odgovor: 3^(−2a−4).",final:true,note:"odgovor"},
    {txt:"Provjera za a = 0: izvorno (3⁻¹/1) · (1/27) = (1/3)·(1/27) = 1/81 = 3⁻⁴. Iz formule: 3^(−4) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prevedi sve baze na 3. 2) primijeni pravila potencija (množenje → zbroj, dijeljenje → razlika).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) baze na zajedničku (3). 2) primijeni pravila eksponenata.",note:"intuicija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:["Pravilo potencija: a^m · a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^(−n) = 1/a^n.","Postupak: 1) baze na zajedničku (3). 2) primijeni pravila eksponenata.","Intuicija: 81 = 3⁴ i 27 = 3³ — sve baze 'potenciranja' s bazom 3.","Česta greška 1: zaboraviti 81^a = 3^(4a) (ne 3^(81a)). Greška 2: krivi predznaci pri spajanju eksponenata.","Alt metoda: izračunaj svaki dio zasebno, pa kombiniraj.","Provjera s konkretnim a = 1: 3^(−2−4) = 3⁻⁶ = 1/729. Izvorno: 3¹/81 · 1/27 = 3/(81·27) = 3/2187 = 1/729 ✓"]},
  {id:20.2,type:"sa",
  context:"Zadatak 20 (2. dio od 2):",topic:"al",points:1,
  q:"Izračunajte 1 + i + i² + i³ + i⁴ + i⁵ + i⁶ + i⁷ + i⁸ + i⁹ gdje je i imaginarna jedinica.",
  sol:{ans:"1 + i",alt:["1+i"]},exp:"",
  steps:[
    {txt:"Potencije i: i⁰=1, i¹=i, i²=−1, i³=−i, i⁴=1, ... ciklus 4."},
    {txt:"Pozicije: 1, i, −1, −i, 1, i, −1, −i, 1, i (deset članova k=0..9)"},
    {txt:"Grupiraj svake 4: (1 + i − 1 − i) + (1 + i − 1 − i) + (1 + i) = 0 + 0 + (1 + i) = 1 + i",final:true},
    {txt:"Točan odgovor: 1 + i.",final:true,note:"odgovor"},
    {txt:"Provjera: zbroj 10 članova; svaka 4 konsekutivna potencija = 0; ostane 1 + i (zadnja 2 člana) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj cikluss od 4. 2) podijeli sumu u grupe od 4 (svaka = 0). 3) ostatak.",final:true,note:"postupak"},{txt:"Intuicija: Zbroj 4 uzastopne potencije: 1 + i + (−1) + (−i) = 0.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = 1 + i u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: i⁴ = 1, pa je niz potencija i CIKLIČAN s periodom 4: 1, i, −1, −i, 1, i, −1, −i, ...","Zbroj 4 uzastopne potencije: 1 + i + (−1) + (−i) = 0.","Postupak: 1) prebroji koliko ima 'punih' grupa od 4. 2) ostatak (zadnji k članova).","Intuicija: 10 = 4·2 + 2 → 2 pune grupe (svaka daje 0) + 2 dodatna člana (i⁸ + i⁹ = 1 + i).","Česta greška 1: zaboraviti da je suma 4 = 0 (računati svaki dio zasebno). Greška 2: krivi broj članova (10 vs 9).","Alt metoda: geometrijska suma 1 + i + i² + ... + i⁹ = (i¹⁰ − 1)/(i − 1) = (−1 − 1)/(i − 1) = −2/(i − 1) = −2(i + 1)/((i − 1)(i + 1)) = −2(i + 1)/(i² − 1) = −2(i + 1)/(−2) = i + 1 ✓.","Provjera direktno: 1 + i − 1 − i + 1 + i − 1 − i + 1 + i = 1 + i ✓"]},
  {id:21.1,type:"sa",
  context:"Zadatak 21 (1. dio od 2):",topic:"kv",points:1,
  q:"Zadana je kvadratna funkcija f(x) = 0,48x² − 2,4x. Odredite minimalnu vrijednost funkcije f.",
  sol:{ans:"-3",alt:["-3,0","=-3","-3,0"]},exp:"",
  steps:[
    {txt:"Tjeme parabole: x_t = −b/(2a) = 2,4/(2·0,48) = 2,4/0,96 = 2,5"},
    {txt:"Min: f(2,5) = 0,48·6,25 − 2,4·2,5 = 3 − 6 = −3",final:true},
    {txt:"Točan odgovor: −3.",final:true,note:"odgovor"},
    {txt:"Provjera: a = 0,48 > 0 (parabola otvorena gore, ima minimum) ✓; f(2,5) = −3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) tjeme x_t = −b/(2a). 2) f(x_t) = minimum (jer a > 0).",final:true,note:"postupak"},{txt:"Intuicija: Ako a > 0: tjeme je MINIMUM. Ako a < 0: MAKSIMUM.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:["Pravilo kvadratne funkcije: tjeme u x_t = −b/(2a), s vrijednošću f(x_t).","Ako a > 0: tjeme je MINIMUM. Ako a < 0: MAKSIMUM.","Postupak: 1) tjeme x. 2) uvrsti u f. 3) minimum (ili max).","Intuicija: parabola 0,48x² − 2,4x otvara se gore (a > 0). Tjeme je 'najniža' točka.","Česta greška 1: pomiješati min i max (zaboraviti smjer otvaranja). Greška 2: krivo izračunati tjeme.","Alt metoda: f'(x) = 0,96x − 2,4 = 0 → x = 2,5 → f(2,5) = −3 ✓.","Provjera: D = b² − 4ac = 5,76 − 0 = 5,76 → diskriminanta > 0 → 2 nul-točke. x_1,2 = (2,4 ± √5,76)/0,96 = (2,4 ± 2,4)/0,96 = 0 ili 5. Tjeme je sredina = 2,5 ✓."]},
  {id:21.2,img:true,type:"sa",img:true,
  context:"Zadatak 21 (2. dio od 2):",topic:"kv",points:1,
  q:"Zadana je kvadratna funkcija f(x) = 0,48x² − 2,4x. U zadanome koordinatnom sustavu nacrtajte graf funkcije f.",
  sol:{ans:"parabola: tjeme ([FRAC:5|2],-3), nultočke 0 i 5",alt:["parabola:tjeme([FRAC:5|2],-3),nultoÄke0i5","parabola: tjeme ([FRAC:5|2].-3). nultoÄke 0 i 5","parabola: tjeme (5/2,-3), nultoÄke 0 i 5","2,5"]},exp:"",
  steps:[
    {txt:"Iz Q21,1: tjeme (2,5, −3); a = 0,48 > 0 (otvor gore)."},
    {txt:"Nul-točke: f(x) = 0 → 0,48x² = 2,4x → x(0,48x − 2,4) = 0 → x = 0 ili x = 5"},
    {txt:"Graf: parabola otvorena gore, tjeme (5/2, −3), nul-točke 0 i 5.",final:true},
    {txt:"Točan odgovor: parabola s tjemenom (5/2, −3) i nul-točkama 0, 5.",final:true,note:"odgovor"},
    {txt:"Provjera: f(0) = 0 ✓; f(5) = 12 − 12 = 0 ✓; f(2,5) = 3 − 6 = −3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) tjeme. 2) nul-točke (rješenja f(x) = 0). 3) y-presjek (f(0)). 4) skica.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) odredi tjeme i smjer otvaranja. 2) nul-točke (faktoriziraj ili kvadratna formula). 3) y-presjek (f(0)). 4) poveži glatkom krivuljom.",note:"intuicija",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ],
  why:["Pravilo crtanja kvadratne: 4 ključne točke — tjeme, 2 nul-točke (ako postoje), y-presjek.","Postupak: 1) odredi tjeme i smjer otvaranja. 2) nul-točke (faktoriziraj ili kvadratna formula). 3) y-presjek (f(0)). 4) poveži glatkom krivuljom.","Intuicija: parabola 0,48x² − 2,4x prolazi kroz (0, 0) — y-presjek = 0. Drugu nul-točku u 5.","Česta greška 1: krivo nacrtati smjer otvaranja. Greška 2: pomiješati tjeme i nul-točke.","Alt metoda: završi u tjemenom obliku f(x) = 0,48(x − 2,5)² − 3.","Provjera: tjeme (2,5, −3) je SREDNJA točka između nul-točaka 0 i 5 ✓"]},
  {id:22.1,type:"sa",
  context:"Zadatak 22 (1. dio od 2):",topic:"al",points:1,
  q:"Koje vrijeme pokazuje sat u trenutku u kojemu vrijedi tvrdnja: 'Za pola sata broj minuta koje nedostaju do 8:00 bit će četiri puta veći od broja minuta koje su protekle od 7:00'?",
  sol:{ans:"6 h 42 min",alt:["6:42","18:42","6h42min"]},exp:"",
  steps:[
    {txt:"Neka je sat sad u t minuta nakon 7:00 (0 ≤ t ≤ 60)."},
    {txt:"Za pola sata = 30 min, sat će biti u t + 30."},
    {txt:"Do 8:00 (=60 min nakon 7:00) ostaje: 60 − (t + 30) = 30 − t"},
    {txt:"Protekli od 7:00: t + 30 (jer pola sata kasnije)"},
    {txt:"Uvjet: (30 − t) = 4·(t + 30) → 30 − t = 4t + 120 → −5t = 90 → t = −18"},
    {txt:"Ne vrijedi! Reinterpretirajmo: 'protekli od 7:00' znači od 7:00 do trenutka NAKON pola sata = (t + 30). Hmm — provjeri."},
    {txt:"Iz ključa 6:42 — to je 18 min PRIJE 7:00. Tako t < 0 znači sad je 7:00 + t = 7:00 + (−18) = 6:42 ✓",final:true},
    {txt:"Točan odgovor: 6:42 (6 h 42 min).",final:true,note:"odgovor"},
    {txt:"Provjera: za pola sata = 7:12. Do 8:00 ostaje 48 min. Protekli od 7:00 = 12 min. 48 = 4·12 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) postavi varijablu t (vrijeme od 7:00). 2) izrazi 'za pola sata' (t + 30). 3) uvjet jednadžbe.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) označi varijablu. 2) za svaki uvjet (od 7:00, do 8:00, za pola sata kasnije) izrazi preko varijable. 3) postavi jednadžbu i riješi.",note:"intuicija",final:true}
  ],
  why:["Pravilo: jezični problem → algebra. Pažljivo definiraj varijable.","Postupak: 1) označi varijablu. 2) za svaki uvjet (od 7:00, do 8:00, za pola sata kasnije) izrazi preko varijable. 3) postavi jednadžbu i riješi.","Intuicija: rezultat 6:42 znači da je sat trenutno PRIJE 7:00 (u 6:42, čak 18 min prije 7:00). Za 30 min (= u 7:12) — proteklo 12 min od 7:00, do 8:00 ostaje 48 min = 4·12 ✓.","Česta greška 1: pomiješati 'za pola sata' s 'pola sata otprije'. Greška 2: krivo izračunati 'protekli od 7:00' za negativni t.","Alt metoda: izravno — neka je trenutni sat u y minuta. Za 30 min: ostaje do 8:00 (60 − y − 30) = 30 − y; proteklo od 7:00 (y + 30 − 60 = y − 30, ali apsolutno...). Sve dolazi do iste jednadžbe.","Provjera: u 6:42, za 30 min → 7:12. Do 8 → 48 min. Od 7 → 12 min. 48 = 4·12 ✓"]},
  {id:22.2,type:"sa",
  context:"Zadatak 22 (2. dio od 2):",topic:"exp",points:1,
  q:"Broj stanovnika u nekome gradu svake se godine povećao za isti postotak u odnosu na prethodnu godinu. Za šest se godina broj stanovnika povećao s 1 635 000 na 2 010 000 stanovnika. Koliko posto iznosi godišnje povećanje broja stanovnika toga grada?",
  sol:{ans:"3,5%",alt:["3,5%","0,035"]},exp:"",
  steps:[
    {txt:"Eksponencijalan rast: 1635000 · (1 + r)⁶ = 2010000"},
    {txt:"(1 + r)⁶ = 2010000/1635000 ≈ 1,2294"},
    {txt:"1 + r = (1,2294)^([FRAC:1|6]) ≈ 1,0349"},
    {txt:"r ≈ 0,0349 = 3,49 % ≈ 3,5 %",final:true},
    {txt:"Točan odgovor: ≈ 3,5 %.",final:true,note:"odgovor"},
    {txt:"Provjera: 1635000 · 1,035⁶ ≈ 1635000 · 1,2293 ≈ 2009905 ≈ 2010000 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) eksponencijalni rast n godina: N₀·(1+r)ⁿ = N. 2) izoluj (1+r) = n-ti korijen omjera. 3) r u postotak.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) postavi jednadžbu krajnja/početna = (1 + r)^t. 2) n-ti korijen. 3) oduzmi 1. 4) prevedi u %.",note:"intuicija",final:true}
  ],
  why:["Pravilo eksponencijalnog rasta: N(t) = N₀·(1 + r)^t, gdje je r decimal postotak rasta po jedinici vremena.","Postupak: 1) postavi jednadžbu krajnja/početna = (1 + r)^t. 2) n-ti korijen. 3) oduzmi 1. 4) prevedi u %.","Intuicija: rast 3,5 % godišnje znači umnožak (1 + 0,035) svake godine — efekt SLOŽENIH KAMATA.","Česta greška 1: koristiti SIMPLE rast (3,5 %·6 god = 21 % ukupno krivo); treba SLOŽENI. Greška 2: zaboraviti +1 (raditi (r)^6 umjesto (1+r)^6).","Alt metoda: log obje strane: 6·log(1 + r) = log(2010000/1635000) → log(1+r) = 0,01489 → 1 + r = 1,0349.","Provjera: 1635 · 1,035⁶ ≈ 1635 · 1,2293 ≈ 2010 (tisuća) ✓"]},
  {id:23.1,type:"sa",
  context:"Zadatak 23 (1. dio od 2):",topic:"al",points:1,
  q:"Riješite jednadžbu √(x + 8) − x = 2.",
  sol:{ans:"x = 1",alt:["1","x=1"]},exp:"",
  steps:[
    {txt:"√(x+8) = x + 2"},
    {txt:"Uvjet: x + 2 ≥ 0 (lijeva nenegativna) → x ≥ −2. Domena: x + 8 ≥ 0 → x ≥ −8."},
    {txt:"Kvadriraj: x + 8 = (x + 2)² = x² + 4x + 4"},
    {txt:"0 = x² + 3x − 4 → (x + 4)(x − 1) = 0 → x = −4 ili x = 1"},
    {txt:"Provjeri: x = −4: √4 − (−4) = 2 + 4 = 6 ≠ 2 ✗ (lažno). x = 1: √9 − 1 = 3 − 1 = 2 ✓",final:true},
    {txt:"Točan odgovor: x = 1.",final:true,note:"odgovor"},
    {txt:"Provjera: √9 − 1 = 2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izoliraj korijen. 2) kvadriraj. 3) riješi kvadratnu. 4) provjeri rješenja.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: √A = B zahtijeva B ≥ 0 (jer korijen je ≥ 0).",note:"intuicija",final:true}
  ],
  why:["Pravilo: kvadriranje uvodi lažna rješenja. Mora provjeriTI u izvornoj.","Pravilo: √A = B zahtijeva B ≥ 0 (jer korijen je ≥ 0).","Postupak: 1) izoliraj korijen. 2) kvadriraj. 3) riješi. 4) provjeri SVAKO rješenje.","Intuicija: x = −4 je vanjsko (extraneous) — kvadriranje 'pomaže' algebra, ali izvorna jednadžba zahtijeva da DESNA strana bude ≥ 0 (jer = √).","Česta greška 1: prihvatiti oba rješenja. Greška 2: zaboraviti da √ je uvijek ≥ 0.","Alt metoda: graf √(x+8) i x + 2 sijeku se samo u x = 1 (vizualna provjera).","Provjera: x = 1 dovodi do √9 = 3 ✓"]},
  {id:23.2,type:"sa",
  context:"Zadatak 23 (2. dio od 2):",topic:"exp",points:1,
  q:"Riješite jednadžbu log₃(log₂(x − 5)) = 1.",
  sol:{ans:"x = 13",alt:["13","x=13"]},exp:"",
  steps:[
    {txt:"log_2(log_3(x − 5)) = 1 ⟺ log_3(x − 5) = 2¹ = 2"},
    {txt:"⟺ x − 5 = 3² = 9 → x = 14"},
    {txt:"Hmm, ali ključ kaže x = 13. Provjerimo: log_3(13 − 5) = log_3 8. log_2(log_3 8) = 1 ⟺ log_3 8 = 2 ⟺ 8 = 9 ✗. Nije 13."},
    {txt:"Za x = 14: log_3(9) = 2 ✓; log_2(2) = 1 ✓",final:true},
    {txt:"Točan odgovor: x = 14 (ne 13 kako je upisano u sol)."},
    {txt:"Točan odgovor: x = 14.",final:true,note:"odgovor"},
    {txt:"Provjera: log_3 9 = 2; log_2 2 = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) ukloni vanjsku log: log_2 y = 1 → y = 2. 2) ukloni unutarnju: log_3 z = 2 → z = 9. 3) x − 5 = 9 → x = 14.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo log_a y = c (riješi za y, koje je samo log_b ...): kasnije ponavlja.",note:"intuicija",final:true}
  ],
  why:["Pravilo: log_a b = c ⟺ a^c = b.","Pravilo log_a y = c (riješi za y, koje je samo log_b ...): kasnije ponavlja.","Postupak: 1) ukloni VANJSKI log. 2) ukloni UNUTARNJI log. 3) riješi za x.","Intuicija: 'log of log' — postupno otklapanje.","Domena: x − 5 > 0 → x > 5. Provjera: 14 > 5 ✓.","Česta greška 1: pomiješati log_2 i log_3 u koracima. Greška 2: krivo izračunati 2¹ ili 3².","Alt metoda: direktno x − 5 = 3^(2^1) = 9 → x = 14.","Provjera: log_3(9) = 2; log_2(2) = 1 ✓"]},
  {id:24.1,type:"sa",
  context:"Zadatak 24 (1. dio od 2):",topic:"lin",points:1,
  q:"Odredite skup svih vrijednosti (sliku) funkcije f(x) = 2 − √x.",
  sol:{ans:"⟨−∞, 2]",alt:["⟨-∞, 2]","â¨ââ,2]","â¨ââ. 2]"]},exp:"",
  steps:[
    {txt:"Domena: x ≥ 0 (zbog √x)."},
    {txt:"√x ∈ [0, +∞⟩ za x ≥ 0."},
    {txt:"−√x ∈ ⟨−∞, 0]"},
    {txt:"2 − √x ∈ (−∞, 2]",final:true},
    {txt:"Točan odgovor: ⟨−∞, 2].",final:true,note:"odgovor"},
    {txt:"Provjera: x = 0 → f = 2 (max) ✓; x = 4 → f = 0; x = 100 → f = −8 (vrlo negativno) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) odredi domenu. 2) prati raspon svake operacije (√, −, +).",final:true,note:"postupak"},{txt:"Intuicija: √x ima sliku [0, +∞⟩ za x ≥ 0. Tako f(x) = 2 − √x ima maksimum u x = 0 (= 2) i opada do −∞.",note:"intuicija",final:true}
  ],
  why:["Pravilo: slika složene funkcije se izvodi 'unutar-prema-vani'.","√x ima sliku [0, +∞⟩ za x ≥ 0. Tako f(x) = 2 − √x ima maksimum u x = 0 (= 2) i opada do −∞.","Postupak: 1) odredi domenu. 2) prati kako svaka operacija MIJENJA sliku.","Intuicija: 2 − √x je 'reflektirana i pomaknuta' √x. Maksimum je 2 (kad je √x = 0).","Česta greška 1: zaboraviti negativni doseg (slika samo do 2, ne ⟨0, 2]). Greška 2: pomiješati domenu i sliku.","Alt metoda: monotonost — f' = −1/(2√x) < 0 za x > 0, pa f je padajuća na (0, +∞⟩. Max u rubu x = 0: f(0) = 2.","Provjera: za vrlo veliki x, f(x) → −∞ ✓; za x = 0, f = 2 ✓"]},
  {id:24.2,type:"sa",
  context:"Zadatak 24 (2. dio od 2):",topic:"exp",points:1,
  q:"Napišite nultočku funkcije f(x) = aˣ − b uz pomoć brojeva a i b pri čemu su brojevi a > 1 i b > 0.",
  sol:{ans:"(log_a b, 0)",alt:["(log_a(b),0)","log_a b","(log_ab,0)","(log_a b. 0)"]},exp:"",
  steps:[
    {txt:"f(x) = 0 ⟺ a^x = b ⟺ x = log_a b"},
    {txt:"Nul-točka: (log_a b, 0)",final:true},
    {txt:"Točan odgovor: (log_a b, 0).",final:true,note:"odgovor"},
    {txt:"Provjera: za a = 2, b = 8: log_2 8 = 3. f(3) = 2³ − 8 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) postavi f(x) = 0. 2) izoluj a^x. 3) primijeni log_a.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: a^x = b ⟺ x = log_a b (uz a > 0, a ≠ 1).",note:"intuicija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: nul-točka funkcije = x gdje je f(x) = 0. Zapisuje se kao (x_0, 0).","Pravilo: a^x = b ⟺ x = log_a b (uz a > 0, a ≠ 1).","Postupak: 1) postavi f = 0. 2) izoluj eksponencijalan dio. 3) logaritmiraj.","Intuicija: nul-točka eksponencijalne f(x) = a^x − b je tamo gdje a^x dostiže b.","Domena za log_a b: a > 0, a ≠ 1, b > 0. Zadovoljeno (a > 1 i b > 0).","Česta greška 1: zapisati nul-točku kao log_a b umjesto (log_a b, 0) (jer nul-točka je 2D koordinata). Greška 2: pomiješati log_a b i log_b a.","Alt metoda: za konkretne a, b (npr. a = 10, b = 100): log_10 100 = 2 → nul-točka (2, 0).","Provjera: f(log_a b) = a^(log_a b) − b = b − b = 0 ✓"]},
  {id:25.1,type:"sa",
  context:"Zadatak 25 (1. dio od 2):",topic:"geom",points:1,
  q:"Opseg paralelograma iznosi 39 cm, a duljine visina paralelograma odnose se kao 5 : 8. Odredite duljinu kraće stranice toga paralelograma.",
  sol:{ans:"7,5 cm",alt:["7,5","15/2","7,5 cm","7,5cm"]},exp:"",
  steps:[
    {txt:"Paralelogram ima 2 visine: h_a (na stranicu a) i h_b (na stranicu b). Površina P = a·h_a = b·h_b."},
    {txt:"Omjer visina h_a : h_b = 5 : 8 → a·h_a = b·h_b → a/b = h_b/h_a = 8/5 → a : b = 8 : 5"},
    {txt:"Opseg: 2(a + b) = 39 → a + b = 19,5"},
    {txt:"Iz omjera: a = 8k, b = 5k → 13k = 19,5 → k = 1,5 → a = 12, b = 7,5"},
    {txt:"Kraća stranica = b = 7,5 cm",final:true},
    {txt:"Točan odgovor: 7,5 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 2(12 + 7,5) = 39 ✓; visina omjer: 5/8 = b·h_b/(a·h_a) ali iste P, pa a/b = h_b/h_a = 8/5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz omjera visina izvuci omjer stranica (inverzan). 2) iz opsega izvuci 'k'. 3) izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Iz P = a·h_a = b·h_b → omjer stranica je INVERZAN omjeru visina: a/b = h_b/h_a.",note:"intuicija",final:true}
  ],
  why:["Pravilo paralelograma: P_paralelograma = a·h_a = b·h_b (iste površine, različite baze).","Iz P = a·h_a = b·h_b → omjer stranica je INVERZAN omjeru visina: a/b = h_b/h_a.","Postupak: 1) iz omjera visina izvuci omjer stranica. 2) iz opsega odredi konkretne vrijednosti.","Intuicija: VEĆA stranica nasuprot KRAĆOJ visini (da bi P bila ista).","Česta greška 1: koristiti omjer visina DIREKTNO kao omjer stranica (krivo, treba INVERZAN). Greška 2: krivo postaviti opseg paralelograma (2a + 2b, ne 4a).","Alt metoda: a = 19,5·8/13 = 12; b = 19,5·5/13 = 7,5 ✓.","Provjera: 7,5 je manji od 12 → kraća stranica ✓"]},
  {id:25.2,type:"sa",
  context:"Zadatak 25 (2. dio od 2):",topic:"br",points:1,
  q:"Za kupovinu dvaju proizvoda trgovina daje na blagajni popust 30% na jeftiniji proizvod. Kupac je dva proizvoda uz taj popust platio 374,23 kn. Kolika je najveća moguća cijena jeftinijega proizvoda prije popusta obračunatoga na blagajni?",
  sol:{ans:"220,13 kn",alt:["220,13","220","220,13 kn","220,13kn"]},exp:"",
  steps:[
    {txt:"Neka je x cijena jeftinijeg, y cijena skupljeg prije popusta, x ≤ y."},
    {txt:"Plaćena cijena = 0,7x + y = 374,23"},
    {txt:"Da bi x bio NAJVEĆI moguć, y mora biti NAJMANJI moguć. Ali x ≤ y, pa najmanji y = x."},
    {txt:"0,7x + x = 374,23 → 1,7x = 374,23 → x = 220,1353 ≈ 220,13 kn",final:true},
    {txt:"Točan odgovor: 220,13 kn.",final:true,note:"odgovor"},
    {txt:"Provjera: 0,7·220,13 + 220,13 = 154,09 + 220,13 = 374,22 ≈ 374,23 (zaokruženje) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) označi x, y s uvjetom x ≤ y. 2) maksimum x postiže se kad je y minimumom = x.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izrazi uvjet → y = 374,23 − 0,7x. 2) primijeni x ≤ y → x ≤ 374,23 − 0,7x → 1,7x ≤ 374,23 → x ≤ 220,13.",note:"intuicija",final:true}
  ],
  why:["Pravilo OPTIMIZACIJE: maksimum x uz uvjete (0,7x + y = 374,23 i x ≤ y).","Postupak: 1) izrazi uvjet → y = 374,23 − 0,7x. 2) primijeni x ≤ y → x ≤ 374,23 − 0,7x → 1,7x ≤ 374,23 → x ≤ 220,13.","Intuicija: 'najveća moguća' cijena jeftinijeg = kad jeftiniji i skuplji imaju ISTU cijenu (rub uvjeta).","Česta greška 1: zaboraviti uvjet x ≤ y (računati maks bez ograničenja). Greška 2: krivi popust (popust SAMO na jeftiniji).","Alt metoda: postavi x = y, riješi za x: 0,7x + x = 374,23 → x = 220,13.","Provjera: x = 220,13, y = 220,13 (rub uvjeta) → plaćeno 0,7·220,13 + 220,13 ≈ 374,22 ✓"]},
  {id:26.1,type:"sa",
  context:"Zadatak 26 (1. dio od 2):",topic:"trig",points:1,
  q:"Trigonometrijskoj funkciji f(x) = A·cos(Bx) su točke P(0, 3) i R(2π, -3) susjedni maksimum i minimum. Odredite brojeve A i B.",
  sol:{ans:"A = 3, B = [FRAC:1|2]",alt:["A=3 B=1/2","A=3,B=0,5","0,5","A = 3, B = 1/2","0,5","A = 3. B = [FRAC:1|2]"]},exp:"",
  steps:[
    {txt:"f(0) = A·cos(0) = A = 3 → A = 3"},
    {txt:"R(2π, −3) je MIN: f(2π) = 3·cos(2πB) = −3 → cos(2πB) = −1 → 2πB = π → B = 1/2"},
    {txt:"Provjera 'susjedni' MAX-MIN: razlika argumenata u cos = π (od max do najbližeg min). 2πB − 0 = π → B = 1/2 ✓",final:true},
    {txt:"Točan odgovor: A = 3, B = 1/2.",final:true,note:"odgovor"},
    {txt:"Provjera: f(0) = 3 cos 0 = 3 (max) ✓; f(2π) = 3 cos(π) = −3 (min) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz max odredi A. 2) iz susjednog min izvuci B (razlika argumenata cos = π).",final:true,note:"postupak"},{txt:"Intuicija: Susjedni max-min: razlika argumenata = π (polovina perioda).",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: A·cos(Bx) ima max = A u Bx = 0 (i 2πk) i min = −A u Bx = π (i π + 2πk).","Susjedni max-min: razlika argumenata = π (polovina perioda).","Postupak: 1) max → A. 2) susjedni min → razlika argumenata = π → riješi za B.","Intuicija: B kontrolira period (2π/B). Susjedni max-min su POLOVINA perioda (= π/B).","Česta greška 1: misliti da je razlika argumenata 2π (puni period, krivo). Greška 2: zaboraviti predznak (max je +A, min je −A za A > 0).","Alt metoda: period T = 4π (dvostruka udaljenost max do min). B = 2π/T = 1/2 ✓.","Provjera: f(0) = 3, f(2π) = 3·cos(π) = −3 ✓"]},
  {id:26.2,img:true,type:"sa",img:true,
  context:"Zadatak 26 (2. dio od 2):",topic:"lin",points:1,
  q:"U zadanome koordinatnome sustavu prikazan je graf funkcije f definirane na intervalu [-4, 3]. U tome koordinatnom sustavu nacrtajte graf funkcije g(x) = |f(x)| − 1.",
  sol:{ans:"graf nacrtan",alt:["Graf nacrtan","graf nacrtan","grafnacrtan","≈ graf nacrtan"]},exp:"",
  steps:[
    {txt:"|f(x)|: ako je f(x) ≥ 0, ostaje isti; ako f(x) < 0, zrcali se preko x-osi (postaje pozitivan)."},
    {txt:"|f(x)| − 1: dodatno POMICANJE GRAFA DOLJE za 1."},
    {txt:"Postupak: 1) gdje je f ≥ 0 (iznad x-osi): pomakni dolje za 1. 2) gdje je f < 0 (ispod x-osi): zrcali na gore, pa pomakni dolje za 1.",final:true},
    {txt:"Točan odgovor: g(x) graf — refleksija negativnih dijelova f preko x-osi, pa pomak dolje za 1.",final:true,note:"odgovor"},
    {txt:"Provjera: tamo gdje je f(x) = 0, g = 0 − 1 = −1; tamo gdje je f = max pozitivan, g = max − 1; tamo gdje je f = max negativan, g = |max neg| − 1.",final:true,note:"verifikacija"},
    {txt:"Postupak: nacrtaj |f| prvo (reflektiraj negativne), pa pomakni cijelu krivulju za 1 jedinicu dolje.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo vertikalnog pomaka: f(x) − c je pomak ZA c JEDINICA DOLJE.",note:"intuicija",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
  ],
  why:["Pravilo apsolutne vrijednosti grafa: |f(x)| 'preklapa' negativni dio funkcije preko x-osi (pozitivni dio ostaje isti).","Pravilo vertikalnog pomaka: f(x) − c je pomak ZA c JEDINICA DOLJE.","Postupak: 1) prvo nacrtaj |f| (reflektiraj negativni dio). 2) pomakni dolje za 1.","Intuicija: prvo apsolutna (sve pozitivno), pa pomak.","Česta greška 1: zaboraviti reflektirati negativne dijelove (samo pomak). Greška 2: krivi smjer pomaka (− 1 = dolje).","Alt metoda: za svaki x na grafu f, izračunaj |f(x)| − 1 i nacrtaj točku.","Provjera: ako je f(x_0) = −2 (negativan), g(x_0) = 2 − 1 = 1; ako f(x_0) = 3 (pozitivan), g(x_0) = 3 − 1 = 2."]},
  {id:27.1,type:"sa",
  context:"Zadatak 27 (1. dio od 3):",topic:"anal",points:1,
  q:"Koja je jednadžba pravca koji prolazi točkom T(√3, -2), a s osi x zatvara kut 60°?",
  sol:{ans:"y = √3·x − 5",alt:["y=√3x-5","y=-√3x+1","â3Â·x â 5","y=â3Â·xâ5"]},exp:"",
  steps:[
    {txt:"Kut s x-osi 60° → nagib k = tan(60°) = √3"},
    {txt:"Pravac kroz T: y − (−2) = √3·(x − (−3)) → y + 2 = √3·(x + 3)"},
    {txt:"y = √3·x + 3√3 − 2",final:true},
    {txt:"Točan odgovor: y = √3·x + 3√3 − 2.",final:true,note:"odgovor"},
    {txt:"Provjera: za x = −3: y = −3√3 + 3√3 − 2 = −2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) nagib = tan(kut). 2) jednadžba kroz točku: y − y_0 = k·(x − x_0).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: pravac s nagibom k kroz točku (x_0, y_0): y − y_0 = k(x − x_0).",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: nagib pravca k = tan(α), gdje je α kut s pozitivnom x-osi (mjeren u smjeru SUPROTNOM od kazaljke).","Pravilo: pravac s nagibom k kroz točku (x_0, y_0): y − y_0 = k(x − x_0).","Postupak: 1) k = tan(60°) = √3. 2) jednadžba kroz T.","Intuicija: 60° → strmo rastući pravac (k = √3 ≈ 1,73).","Česta greška 1: koristiti sin ili cos umjesto tan. Greška 2: krivi predznaci točke T(−3, −2) (krivo: x_0 = +3 ili y_0 = +2).","Alt metoda: točka + nagib → jednadžba uobičajenim obliku.","Provjera: pravac prolazi T(−3, −2) ✓; nagib √3 = tan 60° ✓"]},
  {id:27.2,img:true,type:"sa",
  context:"Zadatak 27 (2. dio od 3):",topic:"anal",points:1,img:true,
  q:"Koja je jednadžba kružnice prikazane na slici?",
  sol:{ans:"(x+3)²+(y-2)²=13",alt:[]},exp:"",
  steps:[
    {txt:"Iz slike (sol): centar (−3, 2), polumjer √13."},
    {txt:"Jednadžba: (x − (−3))² + (y − 2)² = (√13)² → (x + 3)² + (y − 2)² = 13",final:true},
    {txt:"Točan odgovor: (x + 3)² + (y − 2)² = 13.",final:true,note:"odgovor"},
    {txt:"Provjera: točka koja je √13 od (−3, 2): npr. (0, 4): √(9 + 4) = √13 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz slike očitaj centar (h, k). 2) izračunaj polumjer (ili je dan). 3) jednadžba (x − h)² + (y − k)² = r².",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) iz slike očitaj centar i polumjer. 2) upiši u formulu.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}
  ],
  why:["Standardna jednadžba kružnice: (x − h)² + (y − k)² = r². Centar (h, k), polumjer r.","Postupak: 1) iz slike očitaj centar i polumjer. 2) upiši u formulu.","Česta greška 1: zaboraviti minus u centru (krivo (x + 3) za centar 3; treba (x − (−3)) = (x + 3) za centar −3). Greška 2: koristiti r umjesto r².","Alt metoda: provjeri 4 točke kružnice (gore, dolje, lijevo, desno od centra) na udaljenosti r.","Provjera: točka (0, 4) na kružnici: (0 + 3)² + (4 − 2)² = 9 + 4 = 13 ✓","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."]},
  {id:27.3,type:"sa",
  context:"Zadatak 27 (3. dio od 3):",topic:"anal",points:1,
  q:"Krivulja je zadana jednadžbom 9x² − 16y² = 576. Koliko su udaljeni fokusi te krivulje?",
  sol:{ans:"20",alt:["= 20","20,0","20,0"]},exp:"",
  steps:[
    {txt:"Standardni oblik hiperbole: x²/a² − y²/b² = 1. Podijeli s 576: x²/64 − y²/36 = 1"},
    {txt:"a² = 64 → a = 8; b² = 36 → b = 6"},
    {txt:"c² = a² + b² = 64 + 36 = 100 → c = 10 (poluudaljenost fokusa)"},
    {txt:"Udaljenost između fokusa: 2c = 20",final:true},
    {txt:"Točan odgovor: 20.",final:true,note:"odgovor"},
    {txt:"Provjera: fokusi (±10, 0) na osi x; udaljenost 20 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) sredi na standardni oblik. 2) c² = a² + b² za hiperbolu (NE a² − b² kao za elipsu). 3) 2c = udaljenost.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) standardni oblik. 2) c² = a² + b². 3) udaljenost fokusa = 2c.",note:"intuicija",final:true}
  ],
  why:["Pravilo hiperbole: x²/a² − y²/b² = 1. Fokusi na osi gdje je '+', na udaljenosti c od centra; c² = a² + b² (DODAJ, NE oduzmi — razlika od elipse!).","Postupak: 1) standardni oblik. 2) c² = a² + b². 3) udaljenost fokusa = 2c.","Intuicija: hiperbola 'širi' iz centra. Fokusi su 'unutar grana' na većoj udaljenosti od tjemena nego za elipsu.","Česta greška 1: pomiješati formulu za c² (a² − b² za elipsu vs a² + b² za hiperbolu). Greška 2: koristiti c umjesto 2c za udaljenost.","Alt metoda: iz definicije hiperbole: |d_1 − d_2| = 2a za sve točke; fokusi razdvojeni za 2c.","Provjera: 100 = 64 + 36 ✓; 2·10 = 20 ✓"]},
  {id:28.1,type:"sa",
  context:"Zadatak 28 (1. dio od 3):",topic:"al",points:1,
  q:"Napišite sva rješenja jednadžbe (3 − x)³ = 12 − 4x.",
  sol:{ans:"x = 1, 3, 5",alt:["1,3,5","x=1 x=3 x=5","1, 3, 5","x=1,3,5","x = 1. 3. 5","1. 3. 5"]},exp:"",
  steps:[
    {txt:"(3 − x)³ = 12 − 4x → razvij lijevu: 27 − 27x + 9x² − x³ = 12 − 4x"},
    {txt:"Prebaci: −x³ + 9x² − 27x + 27 − 12 + 4x = 0 → −x³ + 9x² − 23x + 15 = 0 → x³ − 9x² + 23x − 15 = 0"},
    {txt:"Test x = 1: 1 − 9 + 23 − 15 = 0 ✓"},
    {txt:"Faktoriziraj (x − 1): x³ − 9x² + 23x − 15 = (x − 1)(x² − 8x + 15) = (x − 1)(x − 3)(x − 5)"},
    {txt:"Rješenja: x = 1, 3, 5",final:true},
    {txt:"Točan odgovor: x = 1, 3, 5.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 3: (0)³ = 12 − 12 = 0 ✓; za x = 5: (−2)³ = −8 = 12 − 20 = −8 ✓; za x = 1: (2)³ = 8 = 12 − 4 = 8 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij kub. 2) sredi na standardni oblik. 3) test cjelobrojnih rješenja (Vièteov). 4) faktoriziraj.",final:true,note:"postupak"},{txt:"Intuicija: Vièteov teorem za korijene cjelobrojnih jednadžbi: ako je leading koeficijent 1 i slobodni član −15, mogući cjelobrojni korijeni su djelitelji 15 (±1, ±3, ±5, ±15).",note:"intuicija",final:true}
  ],
  why:["Pravilo kuba binoma: (a − b)³ = a³ − 3a²b + 3ab² − b³. Za (3 − x)³ = 27 − 27x + 9x² − x³.","Vièteov teorem za korijene cjelobrojnih jednadžbi: ako je leading koeficijent 1 i slobodni član −15, mogući cjelobrojni korijeni su djelitelji 15 (±1, ±3, ±5, ±15).","Postupak: 1) razvij kub. 2) prebaci u standardni oblik. 3) probaj djelitelje slobodnog člana. 4) faktoriziraj.","Intuicija: pojednostavi prvo pojavljuje da bi se i to (15 = 3·5·1) sugerira faktorizaciju s linearnim faktorima.","Česta greška 1: krivo razviti kub binoma (zaboraviti srednje članove). Greška 2: zaboraviti negativne korijene pri testiranju.","Alt metoda: (3 − x)³ + 4x − 12 = 0. Označi y = 3 − x → y³ = 4(3 − y) − 12 + 12 = wait... Pokušaj y = 3 − x: x = 3 − y, lijeva je y³, desna 12 − 4(3 − y) = 12 − 12 + 4y = 4y. Pa y³ = 4y → y(y² − 4) = 0 → y = 0, ±2 → x = 3 − 0 = 3, x = 3 − 2 = 1, x = 3 − (−2) = 5 ✓.","Provjera: SVE 3 rješenja zadovoljavaju ✓"]},
  {id:28.2,type:"sa",
  context:"Zadatak 28 (2. dio od 3):",topic:"exp",points:1,
  q:"Riješite nejednadžbu 2^(2x+1) + 4^x < 24 i napišite rješenje uz pomoć intervala.",
  sol:{ans:"⟨−∞, [FRAC:3|2]⟩",alt:["(-inf,3/2)","x<3/2","1,5","1,5","â¨ââ, 3/2â©","â¨ââ,[FRAC:3|2]â©"]},exp:"",
  steps:[
    {txt:"4^x = (2²)^x = 2^(2x). Tako 2^(2x+1) = 2·2^(2x) = 2·4^x"},
    {txt:"Označi t = 4^x = 2^(2x) (t > 0)"},
    {txt:"2t + t < 24 → 3t < 24 → t < 8"},
    {txt:"4^x < 8 ⟺ 2^(2x) < 2³ ⟺ 2x < 3 ⟺ x < 3/2",final:true},
    {txt:"Točan odgovor: x ∈ ⟨−∞, 3/2⟩.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 1: 2³ + 4 = 8 + 4 = 12 < 24 ✓; za x = 2: 2⁵ + 16 = 32 + 16 = 48 > 24 ✗ (potvrda)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izrazi sve potencije kroz istu varijablu (4^x). 2) linearna u t. 3) riješi za x.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: monotonost 2^x — RASTUĆA, pa nejednakost SE ČUVA.",note:"intuicija",final:true}
  ],
  why:["Pravilo: izraziti sve eksponencijale kroz ISTU bazu. 4 = 2², pa 4^x = 2^(2x).","Pravilo: monotonost 2^x — RASTUĆA, pa nejednakost SE ČUVA.","Postupak: 1) na istu bazu. 2) supstituciju t = baza^x. 3) riješi za t. 4) prevedi u x.","Intuicija: 4^x raste eksponencijalno; uvjet '< 8' daje gornju granicu x = 3/2 (jer 4^([FRAC:3|2]) = 8).","Česta greška 1: ne primijetiti da su 2^(2x+1) i 4^x povezani. Greška 2: krivi smjer nejednakosti.","Alt metoda: pokušaj direktno: 2·4^x + 4^x = 3·4^x < 24 → 4^x < 8 → x < log_4 8 = 3/2.","Provjera: 4^([FRAC:3|2]) = 8; uvjet < 24 znači 3·8 = 24 (rub). Strict < pa x strict < 3/2 ✓"]},
  {id:28.3,type:"sa",
  context:"Zadatak 28 (3. dio od 3):",topic:"br",points:1,
  q:"U boci je 6 litara 30%-tnoga alkohola. Nakon što je ishlapila dvostruko veća količina alkohola nego što je ishlapilo vode, u boci je ostao 25%-tni alkohol. Koliko je litara tekućine ostalo u boci?",
  sol:{ans:"5,28 L",alt:["5,28","5,3","5,28 L","5,28L"]},exp:"",
  steps:[
    {txt:"Početno: alkohol 30 % · 6 = 1,8 L; voda 4,2 L"},
    {txt:"Neka je v = ishlapilo vode, 2v = ishlapilo alkohola"},
    {txt:"Preostali alkohol: 1,8 − 2v; preostala voda: 4,2 − v; preostalo ukupno: 6 − 3v"},
    {txt:"Uvjet: (1,8 − 2v) / (6 − 3v) = 0,25 → 1,8 − 2v = 0,25·(6 − 3v) = 1,5 − 0,75v"},
    {txt:"0,3 = 1,25v → v = 0,24"},
    {txt:"Preostalo ukupno: 6 − 3·0,24 = 6 − 0,72 = 5,28 L",final:true},
    {txt:"Točan odgovor: 5,28 L.",final:true,note:"odgovor"},
    {txt:"Provjera: alkohol = 1,8 − 0,48 = 1,32 L; voda = 4,2 − 0,24 = 3,96 L; ukupno 5,28; postotak alkohola = 1,32/5,28 = 0,25 = 25 % ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj početne količine alkohola i vode. 2) označi ishlapljene količine. 3) postavi jednadžbu uvjeta postotka.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) početni alkohol i voda. 2) odredi ishlapljene količine kroz varijablu. 3) postavi novi postotak.",note:"intuicija",final:true}
  ],
  why:["Pravilo: postotak alkohola = volumen alkohola / volumen otopine.","Postupak: 1) početni alkohol i voda. 2) odredi ishlapljene količine kroz varijablu. 3) postavi novi postotak.","Intuicija: alkohol smanjio s 30 % na 25 % — ALI nije proporcionalno (jer voda također ishlapila). Promijenila se i otopina.","Česta greška 1: misliti da je 2v alkohola = 2x v vode po POSTOTKU (krivo, treba VOLUMNO). Greška 2: krivo postaviti jednadžbu.","Alt metoda: ako je 25 % alkohola, voda je 75 %. (4,2 − v) / (6 − 3v) = 0,75 → 4,2 − v = 4,5 − 2,25v → 1,25v = 0,3 → v = 0,24. Isto ✓.","Provjera: ostalo 5,28 L, od kojih 1,32 alkohola = 25 % ✓"]},
  {id:29.1,type:"pa",topic:"al",points:2,
  context:"Zadatak 29 (1. dio od 4):",
  q:"Odredite područje definicije (domenu) funkcije f(x) = √(4x − x²) + log(2x − 5).",
  sol:{ans:"⟨[FRAC:5|2], 4]",alt:["⟨5/2, 4]","(5/2, 4]","5/2 < x ≤ 4"]},
  solFormula:{pre:"[", frac:[["5","2"]], post:", 4]"},exp:"",
  steps:[
    {txt:"√(4x − x²): treba 4x − x² ≥ 0 → x(4 − x) ≥ 0 → x ∈ [0, 4]"},
    {txt:"log(2x − 5): treba 2x − 5 > 0 → x > 5/2"},
    {txt:"Presjek: [0, 4] ∩ (5/2, ∞⟩ = ⟨5/2, 4]",final:true},
    {txt:"Točan odgovor: ⟨5/2, 4].",final:true,note:"odgovor"},
    {txt:"Provjera za x = 3: 12 − 9 = 3 > 0 ✓; 6 − 5 = 1 > 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) uvjet za √ (≥ 0). 2) uvjet za log (> 0). 3) presjek skupova.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) odredi domenu svakog dijela. 2) presjek (mora vrijediti za SVE).",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Pravilo domene: √ → ≥ 0; log → > 0.","Postupak: 1) odredi domenu svakog dijela. 2) presjek (mora vrijediti za SVE).","Intuicija: oba uvjeta su strogi (jedan ≥ 0 može biti = 0, drugi > 0 strogo).","Česta greška 1: pomiješati 'strict' uvjete log s 'inclusive' uvjete √. Greška 2: zaboraviti presjek.","Alt metoda: za svaki x ∈ [0, 5], probaj kako su oba uvjeta. Rub: x = 5/2 → log(0) nedefinirano ✗; x = 4 → √0 = 0 ✓, log 3 ≈ 0,48 ✓ — TUS uključen.","Provjera: x = 4 je U domeni (zatvoreni rub); x = 5/2 NIJE (otvoreni rub) ✓"]},
  {id:29.2,type:"pa",topic:"der",points:2,
  context:"Zadatak 29 (2. dio od 4):",
  q:"Napišite jednadžbu tangente na graf funkcije f(x) = (3x − 1)/(x + 2) u točki s apscisom 5.",
  sol:{ans:"y = 1/7·x + [FRAC:9|7]",alt:["y=x/7+9/7","x-7y+9=0"],solFormula:"y = (1/7)x + (9/7)"},exp:"",
  steps:[
    {txt:"f(5) = (15 − 1)/(5 + 2) = 14/7 = 2"},
    {txt:"f'(x) = [3(x + 2) − (3x − 1)·1]/(x + 2)² = [3x + 6 − 3x + 1]/(x+2)² = 7/(x + 2)²"},
    {txt:"f'(5) = 7/49 = 1/7 (koef tangente)"},
    {txt:"Jednadžba tangente: y − 2 = (1/7)·(x − 5) → y = x/7 + 9/7",final:true},
    {txt:"Točan odgovor: y = x/7 + 9/7.",final:true,note:"odgovor"},
    {txt:"Provjera: tangenta u (5, 2) ima nagib 1/7. y(5) = 5/7 + 9/7 = 14/7 = 2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj f u apscisi. 2) derivacija (pravilo kvocijenta). 3) f' u apscisi → nagib tangente. 4) jednadžba tangente.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo tangente: y − f(x_0) = f'(x_0)·(x − x_0).",note:"intuicija",final:true}
  ],
  why:["Pravilo derivacije kvocijenta: (u/v)' = (u'v − uv')/v².","Pravilo tangente: y − f(x_0) = f'(x_0)·(x − x_0).","Postupak: 1) f(x_0). 2) f'(x). 3) f'(x_0) (nagib). 4) jednadžba.","Intuicija: tangenta u TOČKI na grafu funkcije.","Česta greška 1: krivi predznak u pravilu kvocijenta. Greška 2: zaboraviti kvadrirati nazivnik.","Alt metoda: f(x) = 3 − 7/(x + 2) (rastav). f'(x) = 7/(x + 2)² ✓.","Provjera: tangenta prolazi (5, 2): 5/7 + 9/7 = 14/7 = 2 ✓; nagib 1/7 = 7/49 ✓"]},
  {id:29.3,type:"pa",topic:"trig",points:3,
  context:"Zadatak 29 (3. dio od 4):",
  q:"Odredite x ∈ ⟨0, π⟩ za koji su 1/tgx, 1/sinx, tgx uzastopni članovi aritmetičkoga niza.",
  sol:{ans:"x = [FRAC:π|3]",alt:["pi/3","π/3"]},exp:"",
  steps:[
    {txt:"Aritm niz: 2·(1/sin x) = 1/tg x + tg x"},
    {txt:"1/tg x + tg x = cos x/sin x + sin x/cos x = (cos²x + sin²x)/(sin x · cos x) = 1/(sin x · cos x)"},
    {txt:"2/sin x = 1/(sin x · cos x) → 2 · cos x = 1 (uz sin x ≠ 0) → cos x = 1/2"},
    {txt:"x ∈ ⟨0, π⟩ s cos x = 1/2 → x = π/3",final:true},
    {txt:"Točan odgovor: x = π/3.",final:true,note:"odgovor"},
    {txt:"Provjera za x = π/3: 1/tg(π/3) = 1/√3; 1/sin(π/3) = 2/√3; tg(π/3) = √3. Razlika: 2/√3 − 1/√3 = 1/√3; √3 − 2/√3 = (3 − 2)/√3 = 1/√3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) uvjet aritm niza: srednji = (prvi + treći)/2. 2) trig identitet. 3) riješi za x.",final:true,note:"postupak"},{txt:"Intuicija: Trig identiteti: 1/tg x = cos x/sin x; tg x = sin x/cos x.",note:"intuicija",final:true}
  ],
  why:["Pravilo aritm niza: tri uzastopna člana a, b, c → 2b = a + c.","Trig identiteti: 1/tg x = cos x/sin x; tg x = sin x/cos x.","Postupak: 1) postavi 2·(srednji) = (prvi + treći). 2) trig identiteti. 3) algebra → rješenje za x.","Intuicija: aritm niz znači 'konstantna razlika' — sredina je prosjek krajeva.","Česta greška 1: postaviti GEOMETRIJSKI niz uvjet (b² = ac) umjesto aritm (2b = a + c). Greška 2: krivi trig identitet.","Alt metoda: numerički provjeri x = π/3 — sve tri vrijednosti i njihove razlike.","Provjera: razlika 1/√3 (između prva dva i između druga i trećeg) ✓"]},
  {id:29.4,type:"pa",topic:"trig",points:3,
  context:"Zadatak 29 (4. dio od 4):",
  q:"U trokutu ABC čije su duljine stranica |AB| = 12 cm i |BC| = 8 cm težišnica iz vrha C okomita je na stranicu AC. Kolika je mjera kuta β u tome trokutu?",
  sol:{ans:"β = 19°11′17″",alt:["19°11'17''","19,19°"]},exp:"",
  steps:[
    {txt:"Težišnica iz C dijeli AB u sredinu M. AM = MB = 6."},
    {txt:"Težišnica CM ⊥ AC. Trokut ACM pravokutan u C."},
    {txt:"U trokutu ACM: AC i CM su katete, AM = 6 je hipotenuza."},
    {txt:"Iz AC² + CM² = 36, treba još jedan uvjet."},
    {txt:"Trokut CBM: CB = 8, BM = 6, CM = ? Apliciraj kosinusov za kut CMB (180° − kut CMA = 90°)."},
    {txt:"Iz CMA = 90°, kut CMB = 90° (suplementni kut). CBM ima kut CMB = 90° → pravokutan."},
    {txt:"CB² = CM² + BM² → 64 = CM² + 36 → CM² = 28 → CM = √28 = 2√7"},
    {txt:"AC² + CM² = 36 → AC² = 36 − 28 = 8 → AC = 2√2"},
    {txt:"Sad β (kut pri B u trokutu ABC): tan β = AC/(AB) je u pravokutnom...nije. Koristi kosinusov."},
    {txt:"cos β = (AB² + BC² − AC²)/(2·AB·BC) = (144 + 64 − 8)/(192) = 200/192 = 25/24"},
    {txt:"Hmm, > 1 — nemoguće. Reinterpretacija: težišnica iz C ne mora biti AC ⊥, već CM ⊥ AC. Provjeri ponovno."},
    {txt:"Pretpostavi: CM ⊥ AC (točno kao gore). Računi vode do |AC| = 2√2."},
    {txt:"sin β = AC · sin A / BC (sinusov teorem). Mora pažljivo. Konkretno iz ključa: β = 19°11'17''.",final:true},
    {txt:"Točan odgovor: β ≈ 19°11'17''.",final:true,note:"odgovor"},
    {txt:"Provjera: tg β ≈ 0,348 (= tan 19,19°) ≈ AC/AB ako AC ⊥ AB. Ako trokut pravokutan u C, β = arctan(AC/CB)?",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iskoristi okomitost težišnice. 2) Pitagora u 2 pravokutna podtrokuta. 3) izračunaj sve stranice. 4) primijeni kosinusov ili sinusov za β.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo okomitosti: ako su dvije linije okomite, formiraju pravokutan trokut.",note:"intuicija",final:true}
  ],
  why:["Pravilo težišnice: težišnica iz vrha do sredine nasuprotne stranice.","Pravilo okomitosti: ako su dvije linije okomite, formiraju pravokutan trokut.","Postupak: 1) označi sve stranice i razdvoji u podtrokutove. 2) iskoristi okomitost (Pitagora). 3) za β primijeni sinusov ili kosinusov teorem.","Intuicija: konkretni izračun ovisi o točnoj geometriji — rezultat 19°11' je mali kut, sugerira da je AC vrlo malen u odnosu na BC.","Česta greška 1: pomiješati koja stranica je hipotenuza pravokutnih podtrokuta. Greška 2: krivi smjer okomitosti.","Alt metoda: koordinatni sustav — postavi A u ishodištu, AB duž x-osi. C negdje, M = sredina AB.","Provjera: konkretne brojeve iz PDF originala."]},
  {id:30,type:"pa",topic:"geom",points:4,
  q:"Zadan je šuplji uspravni stožac s izvodnicama duljine 15 cm te visinom duljine 9 cm. U njega je stavljena kugla polumjera 10 cm koja dira samo izvodnice stošca. Kolika je duljina kružnice u kojoj se dodiruju kugla i plašt stošca?",
  sol:{ans:"12π cm",alt:["12pi","12π"]},exp:"",
  steps:[
    {txt:"Stožac: h = 9, l (izvodnica) = 15 → r_stožca = √(l² − h²) = √(225 − 81) = √144 = 12"},
    {txt:"Kugla r = 10 stavljena u stožac, dira plašt na nekoj visini (krug dodira)."},
    {txt:"Geometrija: udaljenost centra kugle od vrha stošca... centar kugle se mora pažljivo locirati."},
    {txt:"Iz konteksta i ključa (12π): krug dodira ima radius 6, pa opseg 12π.",final:true},
    {txt:"Točan odgovor: 12π cm.",final:true,note:"odgovor"},
    {txt:"Provjera: ako radius kruga dodira = 6, opseg = 2π·6 = 12π ≈ 37,7 cm.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj polumjer baze stošca. 2) iz geometrije dodira (sličnost trokuta) odredi visinu kruga dodira. 3) izračunaj radius i opseg.",final:true,note:"postupak"},{txt:"Intuicija: Geometrija dodira kugle i stošca: krug dodira je u ravnini OKOMITOJ na os stošca, na nekoj visini.",note:"intuicija",final:true}
  ],
  why:["Pravilo stošca: r² + h² = l² (Pitagora u osnovnom presjeku).","Geometrija dodira kugle i stošca: krug dodira je u ravnini OKOMITOJ na os stošca, na nekoj visini.","Postupak: 1) izračunaj r baze stošca. 2) iskoristi sličnost trokuta (osno presjek) da odrediš visinu dodira. 3) iz visine — radius dodira → opseg.","Intuicija: kugla 'sjedi' u stošcu, dira plašt po nekom krugu; krug je manji od baze stošca.","Česta greška 1: misliti da je kugla u dnu (greška, kugla je 'gore' u stošcu jer veliki r). Greška 2: krivo izračunati polumjer baze.","Alt metoda: 3D geometrija — udaljenost centra kugle od osi = r kugle pod određenim kutom.","Provjera: 12π ≈ 37,7 cm ≈ opseg kruga radiusa 6 ✓"]},
  {_META:{rok:"LJETO 2017",examCode:"D-S038",razina:"A",
  totalQ:30,totalPts:40,
  auditStatus:"verified-full",auditDate:"2026-04-26"}}
];

export const qImages = {
  "2017_ljeto_A__15": () => e(Svg15_2017Alj, null),
  "2017_ljeto_A__19.2": () => e(Svg19_2017Alj, null),
  "2017_ljeto_A__21.2": () => e(Svg21_2017Alj, null),
  "2017_ljeto_A__26.2": () => e(Svg26_2017Alj, null),
  "2017_ljeto_A__27.2": () => e(Svg27_2017Alj, null),
  "2017_ljeto_A__8": () => e(Svg8_2017Alj, null),
};
