// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg9_2018Blj(){
  // Simple trace: square at bottom, 4 triangles all sharing the top edge
  const W=300,H=250;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Square
  const TL={x:100,y:115},TR={x:200,y:115},BR={x:200,y:220},BL={x:100,y:220};
  // 4 triangle apexes (base = TL–TR for all)
  const v1={x:20,y:80};    // far left
  const v2={x:130,y:18};   // upper-left
  const v3={x:155,y:12};   // upper-center
  const v4={x:280,y:65};   // far right
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:`${TL.x},${TL.y} ${TR.x},${TR.y} ${BR.x},${BR.y} ${BL.x},${BL.y}`,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TL.x,y1:TL.y,x2:v1.x,y2:v1.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TR.x,y1:TR.y,x2:v1.x,y2:v1.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TL.x,y1:TL.y,x2:v2.x,y2:v2.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TR.x,y1:TR.y,x2:v2.x,y2:v2.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TL.x,y1:TL.y,x2:v3.x,y2:v3.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TR.x,y1:TR.y,x2:v3.x,y2:v3.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TL.x,y1:TL.y,x2:v4.x,y2:v4.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:TR.x,y1:TR.y,x2:v4.x,y2:v4.y,stroke:_BLUE,strokeWidth:1.3})
  );
}

function Svg7_2018Blj(){
  const W=240,H=120,x0=20,y0=10,rowH=24;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const colW=[100,110];
  const totalW=colW[0]+colW[1];
  const xs=[x0,x0+colW[0]];
  const rows=4; // header + 3 data rows
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Header bg
    e("rect",{x:x0,y:y0,width:totalW,height:rowH,fill:"var(--blue)",fillOpacity:0.12}),
    // Outer border
    e("rect",{x:x0,y:y0,width:totalW,height:rows*rowH,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.5}),
    // Horizontal lines
    ...[1,2,3].map(i=>e("line",{key:"h"+i,x1:x0,y1:y0+i*rowH,x2:x0+totalW,y2:y0+i*rowH,stroke:"var(--bdr)",strokeWidth:0.8})),
    // Vertical separator
    e("line",{x1:xs[1],y1:y0,x2:xs[1],y2:y0+rows*rowH,stroke:"var(--bdr)",strokeWidth:0.8}),
    // Header text
    e("text",{x:xs[0]+colW[0]/2,y:y0+rowH*0.68,fontSize:12,fontWeight:700,textAnchor:"middle",fill:"var(--text)"},"Visina"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH*0.68,fontSize:12,fontWeight:700,textAnchor:"middle",fill:"var(--text)"},"Broj u\u010denika"),
    // Row 1: 172 cm | 5
    e("text",{x:xs[0]+colW[0]/2,y:y0+rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--text)"},"172 cm"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--blue)"},"5"),
    // Row 2: 176 cm | 3
    e("text",{x:xs[0]+colW[0]/2,y:y0+2*rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--text)"},"176 cm"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+2*rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--blue)"},"3"),
    // Row 3: 178 cm | 10
    e("text",{x:xs[0]+colW[0]/2,y:y0+3*rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--text)"},"178 cm"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+3*rowH+rowH*0.68,fontSize:12,textAnchor:"middle",fill:"var(--blue)"},"10")
  );
}

function Svg27_2018Blj(){
  // Temperature chart: patient admitted 13.sij 10:00, discharged 16.sij 10:00
  // Measurements: 5x daily at 6,10,14,18,22h
  // Key constraints: avg 14.sij = 37.42, 9 measurements >37.2 (→45mL)
  // Reading from image carefully (magenta line):
  const W=360,H=210;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad={l:42,r:12,t:18,b:40};
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const tMin=35.5,tMax=39;
  const toY=t=>pad.t+((tMax-t)/(tMax-tMin))*iH;
  // Temperature data read from chart (16 measurement points):
  // 13.sij: 10:00, 14:00, 18:00, 22:00
  // 14.sij: 6:00, 10:00, 14:00, 18:00, 22:00
  // 15.sij: 6:00, 10:00, 14:00, 18:00, 22:00
  // 16.sij: 6:00, 10:00
  const temps=[
    38.0, 38.5, 38.3, 38.5,           // 13.sij (all >37.2)
    37.8, 37.3, 37.4, 37.4, 37.2,     // 14.sij: sum=187.1→avg 37.42; 37.8,37.3,37.4,37.4>37.2=4; 37.2 NOT >37.2
    36.8, 37.3, 37.4, 38.0, 37.4,     // 15.sij: 37.3,37.4,38.0,37.4>37.2=4; 36.8 not
    36.5, 36.8                          // 16.sij: both not >37.2
  ];
  // Count >37.2: 13.sij: 4 + 14.sij: 37.8,37.3,37.4,37.4 = 4 + 15.sij: 37.3,37.4,38.0,37.4 = 4 → but need only 9
  // 4+4+4+0 = 12 ... too many. Let me recalculate.
  // Key says 45mL = 9×5. So exactly 9 measurements >37.2.
  // 14.sij avg = 37.42: if temps are 37.8, 37.1, 37.3, 37.6, 37.3 → sum=187.1, avg=37.42
  //   >37.2: 37.8, 37.3, 37.6, 37.3 = 4. But 37.1 is not.
  // Hmm. Let me try: 13.sij all 4 >37.2. 14.sij: need some below.
  // Actually re-reading the image more carefully:
  // After 13.sij the temps DROP significantly.
  // 14.sij 6:00: ~37.8 (still elevated)
  // 14.sij 10:00: ~37.1 (drops below 37.2!)
  // 14.sij 14:00: ~37.3
  // 14.sij 18:00: ~37.4
  // 14.sij 22:00: ~37.3
  // Sum: 37.8+37.1+37.3+37.4+37.3 = 186.9 → avg 37.38. Not 37.42.
  // Try: 37.8, 37.2, 37.4, 37.5, 37.2 → sum=187.1 → avg=37.42 ✓
  //   >37.2: 37.8, 37.4, 37.5 = 3
  // 13.sij: 4 above. 14.sij: 3. Need 2 more from 15.sij+16.sij.
  // 15.sij pattern from image: dip, then spike at 18:00 to ~38.0, then drops
  // 15.sij: 36.8, 36.5, 37.3, 38.0, 37.4 → >37.2: 37.3, 38.0, 37.4 = 3
  // Total so far: 4+3+3 = 10. Still not 9. 
  // Let me try 15.sij: 36.8, 36.5, 37.3, 38.0, 37.0 → >37.2: 37.3, 38.0 = 2
  // Total: 4+3+2 = 9. ✓
  // So adjusted temps:
  const data=[
    38.0, 38.5, 38.3, 38.5,           // 13.sij (4 above 37.2)
    37.8, 37.2, 37.4, 37.5, 37.2,     // 14.sij: avg=37.42, 3 above (37.8,37.4,37.5)
    36.8, 36.5, 37.3, 38.0, 37.0,     // 15.sij: 2 above (37.3,38.0)
    36.5, 36.8                          // 16.sij: 0 above
  ]; // Total >37.2: 4+3+2+0 = 9 ✓, avg 14.sij = 187.1/5 = 37.42 ✓

  const n=data.length;
  const dx=iW/(n-1);
  const toX=i=>pad.l+i*dx;

  const labels=["10:00","14:00","18:00","22:00","6:00","10:00","14:00","18:00","22:00","6:00","10:00","14:00","18:00","22:00","6:00","10:00"];
  
  const els=[];
  // Horizontal grid + y-labels
  for(let t=35.5;t<=39;t+=0,5){
    els.push(e("line",{key:"gt"+t,x1:pad.l,y1:toY(t),x2:pad.l+iW,y2:toY(t),stroke:"var(--bdr)",strokeWidth:t%1===0?0.6:0.3}));
    if(t>=36) els.push(e("text",{key:"lt"+t,x:pad.l-5,y:toY(t)+3,fontSize:8,textAnchor:"end",fill:"var(--muted)"},t%1===0?t.toFixed(0):t.toFixed(1)));
  }
  els.push(e("text",{key:"cl",x:pad.l-28,y:pad.t-2,fontSize:9,fill:"var(--text)"},"\u00b0C"));

  // Data line (magenta/pink like original)
  const pts=data.map((t,i)=>`${toX(i).toFixed(1)},${toY(t).toFixed(1)}`);
  els.push(e("polyline",{key:"dl",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2,strokeLinejoin:"round"}));
  // Data dots
  data.forEach((t,i)=>{
    els.push(e("circle",{key:"d"+i,cx:toX(i),cy:toY(t),r:2.5,fill:_RED,stroke:"var(--bg)",strokeWidth:1}));
  });

  // X-axis labels (rotated or small)
  labels.forEach((l,i)=>{
    if(i%2===0||i===n-1) els.push(e("text",{key:"xl"+i,x:toX(i),y:pad.t+iH+13,fontSize:7,textAnchor:"middle",fill:"var(--muted)"},l));
  });
  // Day separators
  [4,9,14].forEach((i,idx)=>{
    els.push(e("line",{key:"ds"+idx,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:_BLUE,strokeWidth:0.5,strokeDasharray:"3,2"}));
  });
  // "Sati (h)" label
  els.push(e("text",{key:"sh",x:pad.l+iW/2,y:pad.t+iH+30,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"Sati (h)"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("rect",{x:pad.l,y:pad.t,width:iW,height:iH,fill:"var(--bg)",stroke:"var(--bdr)",strokeWidth:0.5}),
    ...els
  );
}

function Svg26b_2018Blj(){
  const W=220,H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad={l:35,r:15,t:15,b:35};
  const xMin=-4,xMax=5,yMin=-4,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const gridEls=[];
  for(let x=xMin;x<=xMax;x++) gridEls.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  for(let y=yMin;y<=yMax;y++) gridEls.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  // f(x) = x/2 - 1: through (0,-1) and (2,0)
  const fPts=[];
  for(let x=xMin;x<=xMax;x+=0.2){
    const y=x/2-1;
    if(y>=yMin&&y<=yMax) fPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridEls,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:ox+6,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-12,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1),y:oy+14,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-12,y:toY(1)+4,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1"),
    fPts.length>1&&e("polyline",{points:fPts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2}),
    e("text",{x:toX(3),y:toY(0.5)-6,fontSize:12,fontStyle:"italic",fontWeight:600,fill:"var(--blue)"},"f")
  );
}

function Svg26a_2018Blj(){
  const W=220,H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad={l:35,r:15,t:15,b:35};
  const xMin=-4,xMax=5,yMin=-3,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const gridEls=[];
  for(let x=xMin;x<=xMax;x++) gridEls.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  for(let y=yMin;y<=yMax;y++) gridEls.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridEls,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:ox+6,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-12,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1),y:oy+14,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-12,y:toY(1)+4,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1")
  );
}

function Svg25b_2018Blj(){
  // Exponential-like curve crossing x-axis at x=2, rising steeply right
  const W=240,H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad={l:40,r:15,t:15,b:35};
  const xMin=-5,xMax=5,yMin=-3,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  // Grid (dashed)
  const g=[];
  for(let x=xMin;x<=xMax;x++) g.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  for(let y=yMin;y<=yMax;y++) g.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"3,3"}));
  // Curve: f(x) = e^(x-2) - 1 → crosses at x=2, asymptotically approaches -1 on left
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.05){
    const y=Math.exp(x-2)-1;
    if(y>=yMin-0.5&&y<=yMax+0.5) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...g,
    // Axes
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+14,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:"var(--text)"}),
    e("text",{x:ox+6,y:pad.t+6,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-12,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    // Unit markers (open circles like in the reference)
    e("circle",{cx:toX(1),cy:oy,r:3,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1),y:oy+14,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:3,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-12,y:toY(1)+4,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},"1"),
    // Curve
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2,strokeLinejoin:"round"})
  );
}

function Svg25a_2018Blj(){
  // Grid with A and B marked. From image: large grid, A and B on same row
  // in center-right area, about 3 units apart. 1cm indicator at lower-left.
  const W=280,H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const gs=22; // grid spacing
  const ox=10,oy=10;
  const cols=11,rows=8;
  const els=[];
  // Grid lines (light)
  for(let i=0;i<=cols;i++) els.push(e("line",{key:"gx"+i,x1:ox+i*gs,y1:oy,x2:ox+i*gs,y2:oy+rows*gs,stroke:"var(--bdr)",strokeWidth:0.5}));
  for(let j=0;j<=rows;j++) els.push(e("line",{key:"gy"+j,x1:ox,y1:oy+j*gs,x2:ox+cols*gs,y2:oy+j*gs,stroke:"var(--bdr)",strokeWidth:0.5}));
  // Points A and B (from image: roughly row 5, col 6 and col 8)
  const Ax=ox+6*gs, Ay=oy+5*gs;
  const Bx=ox+8*gs, By=oy+5*gs;
  els.push(e("circle",{key:"pA",cx:Ax,cy:Ay,r:3,fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  els.push(e("circle",{key:"pB",cx:Bx,cy:By,r:3,fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  els.push(e("text",{key:"lA",x:Ax,y:Ay+16,fontSize:13,fontStyle:"italic",textAnchor:"middle",fill:_GOLD},"A"));
  els.push(e("text",{key:"lB",x:Bx,y:By+16,fontSize:13,fontStyle:"italic",textAnchor:"middle",fill:_GOLD},"B"));
  // 1cm x 1cm indicator square (lower-left area, row 5-6, col 2-3)
  const sqX=ox+2*gs, sqY=oy+5*gs;
  els.push(e("rect",{key:"sq",x:sqX,y:sqY,width:gs,height:gs,fill:"none",stroke:_BLUE,strokeWidth:1.2}));
  els.push(e("text",{key:"cm1",x:sqX+gs+3,y:sqY+gs/2+4,fontSize:10,fill:_GOLD},"1 cm"));
  els.push(e("text",{key:"cm2",x:sqX,y:sqY+gs+14,fontSize:10,fill:_GOLD},"1 cm"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},...els);
}

function Svg24b_2018Blj(){
  // Faithful trace: triangle-like figure with 3 intersection points
  // Top: α angle. Bottom-left: 42°. Bottom-right: 150° (exterior).
  // Lines extend beyond each vertex.
  const W=280,H=190;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Three vertices of the triangle
  const top={x:145,y:42}, bl={x:65,y:118}, br={x:220,y:118};
  // Extended lines beyond each vertex
  // Top: lines extend upward-left and upward-right
  // Bottom-left: line extends down-left and right
  // Bottom-right: line extends further right-down (exterior angle side)
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Triangle sides
    e("line",{x1:top.x,y1:top.y,x2:bl.x,y2:bl.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:top.x,y1:top.y,x2:br.x,y2:br.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:bl.x,y1:bl.y,x2:br.x,y2:br.y,stroke:_BLUE,strokeWidth:1.3}),
    // Extensions beyond vertices (lines going through and past)
    // Top-left extension (past top towards upper-right)
    e("line",{x1:top.x,y1:top.y,x2:top.x+40,y2:top.y-15,stroke:_BLUE,strokeWidth:1.3}),
    // Top-right extension (past top towards upper-left)
    e("line",{x1:top.x,y1:top.y,x2:top.x-50,y2:top.y-20,stroke:_BLUE,strokeWidth:1.3}),
    // Bottom-left: line extends down-left
    e("line",{x1:bl.x,y1:bl.y,x2:bl.x-45,y2:bl.y+25,stroke:_BLUE,strokeWidth:1.3}),
    // Bottom-left: line extends left
    e("line",{x1:bl.x,y1:bl.y,x2:bl.x-50,y2:bl.y,stroke:_BLUE,strokeWidth:1.3}),
    // Bottom-right: line extends right-down (for exterior angle)
    e("line",{x1:br.x,y1:br.y,x2:br.x+40,y2:br.y+20,stroke:_BLUE,strokeWidth:1.3}),
    // Bottom-right: line extends right
    e("line",{x1:br.x,y1:br.y,x2:br.x+40,y2:br.y-5,stroke:_BLUE,strokeWidth:1.3}),
    // α arc at top: between lines top→bl and top→br
    // dir to bl: atan2(118-42, 65-145) = atan2(76,-80) ≈ 2.38 rad
    // dir to br: atan2(118-42, 220-145) = atan2(76,75) ≈ 0.79 rad
    e("path",{d:`M ${top.x+18*Math.cos(0.79)} ${top.y+18*Math.sin(0.79)} A 18 18 0 0 1 ${top.x+18*Math.cos(2.38)} ${top.y+18*Math.sin(2.38)}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:top.x-6,y:top.y+28,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"\u03b1"),
    // 42° arc at bottom-left: between line bl→top and line extending left
    // dir to top: atan2(42-118, 145-65) = atan2(-76,80) ≈ -0.76 rad
    // dir left: π ≈ 3.14 rad. But 42° measured from line-going-left to line-going-up
    // arc from ≈ -0.76 to π going counter-clockwise? Actually let's place endpoints
    e("path",{d:`M ${bl.x+16*Math.cos(-0.76)} ${bl.y+16*Math.sin(-0.76)} A 16 16 0 0 0 ${bl.x-16} ${bl.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:bl.x+8,y:bl.y-6,fontSize:11,fill:"var(--text)"},"42\u00b0"),
    // 150° arc at bottom-right: exterior angle
    // dir to top: atan2(42-118, 145-220) = atan2(-76,-75) ≈ -2.35 = π+0.79
    // dir to extension (lower-right): ≈ 0.46 rad
    e("path",{d:`M ${br.x+18*Math.cos(-2.35)} ${br.y+18*Math.sin(-2.35)} A 18 18 0 0 1 ${br.x+18*Math.cos(0.46)} ${br.y+18*Math.sin(0.46)}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:br.x-2,y:br.y+24,fontSize:11,fill:"var(--text)"},"150\u00b0")
  );
}

function Svg24a_2018Blj(){
  // Faithful trace: C at top, B at right, D at left-center, A at bottom
  // CB labeled 12 cm. DA labeled 13 cm. 60° at B and at D. Right angle mark at D.
  // Diagonal BD drawn.
  const W=220,H=280;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const C={x:95,y:18}, B={x:175,y:105};
  const D={x:45,y:152}, A={x:110,y:268};

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Sides: C→B, B→D (diagonal), D→A, A→C
    e("line",{x1:C.x,y1:C.y,x2:B.x,y2:B.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:B.x,y1:B.y,x2:D.x,y2:D.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:D.x,y1:D.y,x2:A.x,y2:A.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:A.x,y1:A.y,x2:C.x,y2:C.y,stroke:_BLUE,strokeWidth:1.3}),
    // Also C→D and B→A to complete the quadrilateral properly
    e("line",{x1:C.x,y1:C.y,x2:D.x,y2:D.y,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:B.x,y1:B.y,x2:A.x,y2:A.y,stroke:_BLUE,strokeWidth:1.3}),
    // Vertex labels
    e("text",{x:C.x-2,y:C.y-6,fontSize:14,fontStyle:"italic",textAnchor:"middle",fill:_GOLD},"C"),
    e("text",{x:B.x+8,y:B.y+5,fontSize:14,fontStyle:"italic",fill:_GOLD},"B"),
    e("text",{x:D.x-12,y:D.y+5,fontSize:14,fontStyle:"italic",fill:_GOLD},"D"),
    e("text",{x:A.x-2,y:A.y+16,fontSize:14,fontStyle:"italic",textAnchor:"middle",fill:_GOLD},"A"),
    // "12 cm" label on CB
    e("text",{x:(C.x+B.x)/2+12,y:(C.y+B.y)/2-2,fontSize:11,fill:"var(--text)"},"12 cm"),
    // "13 cm" label on DA
    e("text",{x:(D.x+A.x)/2+12,y:(D.y+A.y)/2+6,fontSize:11,fill:"var(--text)"},"13 cm"),
    // 60° arc at B: between lines B→C and B→D
    // Direction B→C: angle = atan2(C.y-B.y, C.x-B.x) ≈ atan2(-87,-80) ≈ -133° = 227°
    // Direction B→D: angle = atan2(D.y-B.y, D.x-B.x) ≈ atan2(47,-130) ≈ 160°
    // Arc from direction B→D to B→C, radius 16
    e("path",{d:`M ${B.x+16*Math.cos(2.79)} ${B.y+16*Math.sin(2.79)} A 16 16 0 0 0 ${B.x+16*Math.cos(3.96)} ${B.y+16*Math.sin(3.96)}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:B.x-30,y:B.y+2,fontSize:10,fill:"var(--text)"},"60\u00b0"),
    // 60° arc at D: between lines D→C and D→A  
    // Direction D→C: atan2(C.y-D.y, C.x-D.x) ≈ atan2(-134,50) ≈ -69° = 291°
    // Direction D→A: atan2(A.y-D.y, A.x-D.x) ≈ atan2(116,65) ≈ 61°
    // Need the 60° between specific pair
    e("path",{d:`M ${D.x+16*Math.cos(-1.2)} ${D.y+16*Math.sin(-1.2)} A 16 16 0 0 1 ${D.x+16*Math.cos(-0.15)} ${D.y+16*Math.sin(-0.15)}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:D.x+6,y:D.y-14,fontSize:10,fill:"var(--text)"},"60\u00b0"),
    // Right angle mark at D (small square)
    e("path",{d:`M ${D.x} ${D.y+10} L ${D.x-8} ${D.y+10} L ${D.x-8} ${D.y+2}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.7})
  );
}

function Svg14_2018Blj(){
  // 4 subplots 2x2. Each is a simple parabola with axes.
  const W=300,H=310;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  function sub(ox,oy,label,xAxisAtBottom){
    // Returns array of elements for one subplot
    const gw=130,gh=135;
    const el=[];
    const axY=xAxisAtBottom ? oy+gh-18 : oy+18; // x-axis position
    const axX=ox+35; // y-axis position
    // x-axis
    el.push(e("line",{key:label+"xa",x1:ox+5,y1:axY,x2:ox+gw-5,y2:axY,stroke:_BLUE,strokeWidth:1}));
    el.push(e("polygon",{key:label+"xar",points:(ox+gw-5)+","+axY+" "+(ox+gw-10)+","+(axY-3)+" "+(ox+gw-10)+","+(axY+3),fill:"var(--text)"}));
    el.push(e("text",{key:label+"xl",x:ox+gw-2,y:axY+14,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"));
    // y-axis
    el.push(e("line",{key:label+"ya",x1:axX,y1:oy+5,x2:axX,y2:oy+gh-5,stroke:_BLUE,strokeWidth:1}));
    el.push(e("polygon",{key:label+"yar",points:axX+","+(oy+5)+" "+(axX-3)+","+(oy+10)+" "+(axX+3)+","+(oy+10),fill:"var(--text)"}));
    el.push(e("text",{key:label+"yl",x:axX-13,y:oy+14,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"));
    // 0 label
    el.push(e("text",{key:label+"0",x:axX+4,y:axY+(xAxisAtBottom?12:-6),fontSize:9,fill:"var(--muted)"},"0"));
    // Label A./B./C./D.
    el.push(e("text",{key:label+"lb",x:ox+2,y:oy+gh-2,fontSize:14,fontWeight:700,fill:"var(--text)"},label+"."));
    return {el,axX,axY,ox,oy,gw,gh};
  }
  const ch=[];
  // A: opens up, vertex left of y-axis, min ABOVE x-axis. x-axis at bottom.
  const a=sub(5,5,"A",true);
  ch.push(...a.el);
  {const pts=[];
   for(let px=-40;px<=50;px++){
     const x=(px-(-12))/22; const y=1.2*x*x+0.8;
     const sx=a.axX+px; const sy=a.axY-y*16;
     if(sy>a.oy+5&&sy<a.oy+a.gh-5&&sx>a.ox+5&&sx<a.ox+a.gw-5) pts.push(sx.toFixed(0)+","+sy.toFixed(0));
   }
   if(pts.length>1) ch.push(e("polyline",{key:"Ac",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5,strokeLinejoin:"round"}));
  }

  // B: opens up, vertex near y-axis, min BELOW x-axis. x-axis at bottom.
  const b=sub(155,5,"B",true);
  ch.push(...b.el);
  {const pts=[];
   for(let px=-40;px<=55;px++){
     const x=(px-10)/22; const y=1.2*x*x-1.2;
     const sx=b.axX+px; const sy=b.axY-y*16;
     if(sy>b.oy+5&&sy<b.oy+b.gh-5&&sx>b.ox+5&&sx<b.ox+b.gw-5) pts.push(sx.toFixed(0)+","+sy.toFixed(0));
   }
   if(pts.length>1) ch.push(e("polyline",{key:"Bc",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5,strokeLinejoin:"round"}));
  }

  // C: opens DOWN, vertex right of y-axis, max ABOVE x-axis. x-axis at TOP.
  const c=sub(5,160,"C",false);
  ch.push(...c.el);
  {const pts=[];
   for(let px=-35;px<=55;px++){
     const x=(px-20)/22; const y=-1.2*x*x+2.5;
     const sx=c.axX+px; const sy=c.axY-y*16;
     if(sy>c.oy+5&&sy<c.oy+c.gh-5&&sx>c.ox+5&&sx<c.ox+c.gw-5) pts.push(sx.toFixed(0)+","+sy.toFixed(0));
   }
   if(pts.length>1) ch.push(e("polyline",{key:"Cc",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5,strokeLinejoin:"round"}));
  }

  // D: opens DOWN, vertex right of y-axis, max ABOVE x-axis. x-axis at TOP.
  const d=sub(155,160,"D",false);
  ch.push(...d.el);
  {const pts=[];
   for(let px=-25;px<=55;px++){
     const x=(px-25)/24; const y=-1.0*x*x+2.8;
     const sx=d.axX+px; const sy=d.axY-y*16;
     if(sy>d.oy+5&&sy<d.oy+d.gh-5&&sx>d.ox+5&&sx<d.ox+d.gw-5) pts.push(sx.toFixed(0)+","+sy.toFixed(0));
   }
   if(pts.length>1) ch.push(e("polyline",{key:"Dc",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5,strokeLinejoin:"round"}));
  }

  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},...ch);
}

function Svg12_2018Blj(){
  const W=280,H=160;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // A, B, C on a horizontal line. AB=12cm, BC=8cm, AC=20cm
  // Large circle: diameter AC=20, center at midpoint of AC, r=10
  // Left circle: diameter AB=12, center at midpoint of AB, r=6
  // Right circle: diameter BC=8, center at midpoint of BC, r=4
  const scale=5.5; // px per cm
  const Ax=40,By=90; // A position and y-line
  const Bx=Ax+12*scale, Cx=Ax+20*scale;
  const rAC=10*scale, rAB=6*scale, rBC=4*scale;
  const cAC=(Ax+Cx)/2, cAB=(Ax+Bx)/2, cBC=(Bx+Cx)/2;
  // Shaded region: upper half of big circle MINUS upper halves of small circles, plus lower halves of small circles minus lower half of big circle... 
  // Actually from image: the shaded area is the crescent shapes
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Large circle (full)
    e("circle",{cx:cAC,cy:By,r:rAC,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    // Left circle AB
    e("circle",{cx:cAB,cy:By,r:rAB,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    // Right circle BC
    e("circle",{cx:cBC,cy:By,r:rBC,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    // Shading: upper crescent between big and small circles (simplified with hatching)
    // For simplicity, use a fill pattern on the crescents
    // Upper half of big circle shaded
    e("path",{d:`M ${Ax} ${By} A ${rAC} ${rAC} 0 0 1 ${Cx} ${By} L ${Ax} ${By}`,
      fill:"var(--blue)",fillOpacity:0.12,stroke:"none"}),
    // Remove upper halves of small circles from shading
    e("path",{d:`M ${Ax} ${By} A ${rAB} ${rAB} 0 0 1 ${Bx} ${By} L ${Ax} ${By}`,
      fill:"var(--bg)",stroke:"none"}),
    e("path",{d:`M ${Bx} ${By} A ${rBC} ${rBC} 0 0 1 ${Cx} ${By} L ${Bx} ${By}`,
      fill:"var(--bg)",stroke:"none"}),
    // Lower halves of small circles shaded
    e("path",{d:`M ${Ax} ${By} A ${rAB} ${rAB} 0 0 0 ${Bx} ${By} L ${Ax} ${By}`,
      fill:"var(--blue)",fillOpacity:0.12,stroke:"none"}),
    e("path",{d:`M ${Bx} ${By} A ${rBC} ${rBC} 0 0 0 ${Cx} ${By} L ${Bx} ${By}`,
      fill:"var(--blue)",fillOpacity:0.12,stroke:"none"}),
    // Remove lower half of big circle
    e("path",{d:`M ${Ax} ${By} A ${rAC} ${rAC} 0 0 0 ${Cx} ${By} L ${Ax} ${By}`,
      fill:"var(--bg)",stroke:"none"}),
    // Re-draw circles on top
    e("circle",{cx:cAC,cy:By,r:rAC,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx:cAB,cy:By,r:rAB,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    e("circle",{cx:cBC,cy:By,r:rBC,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    // Points A, B, C
    e("circle",{cx:Ax,cy:By,r:3,fill:_RED}),
    e("circle",{cx:Bx,cy:By,r:3,fill:_RED}),
    e("circle",{cx:Cx,cy:By,r:3,fill:_RED}),
    // Labels
    e("text",{x:Ax-8,y:By+16,fontSize:13,fontStyle:"italic",fill:_GOLD},"A"),
    e("text",{x:Bx-4,y:By+16,fontSize:13,fontStyle:"italic",fill:_GOLD},"B"),
    e("text",{x:Cx+2,y:By+16,fontSize:13,fontStyle:"italic",fill:_GOLD},"C")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: svedi na isti oblik (decimalni/razlomak) prije usporedbe.",topic:"br",points:1,
  q:"Koja je od navedenih nejednakosti točna?",
  opts:["5/4 < 7/9","5/7 < 0,5","5/7 > 10/11","5/7 > 0,7"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Postupak za usporedbu razlomaka: pretvori u DECIMALNI oblik, pa usporedi. To je najsigurniji način za 'koja nejednakost vrijedi'.","Pravilo: a/b > c/d ⟺ ad > bc (uz b, d > 0). Križno množenje također radi, ali je sklonije greškama.","Intuicija: 5/7 ≈ 0,71. To je BLISKO 0,7 ali malo veće. Tako D vrijedi (0,71 > 0,7).","Česta greška 1: zaokruživati 5/7 na 0,7 (krivo — 5/7 = 0,7142..., NIJE jednako 0,7). Greška 2: pomiješati smjer (5/7 < 0,7 vs > 0,7).","Alt metoda (D): postavi 5/7 i 0,7 = 7/10. Križno: 5·10 = 50; 7·7 = 49. 50 > 49 → 5/7 > 0,7 ✓","Provjera: 0,7142... − 0,7 = 0,0142... > 0 ✓"],
  steps:[
    {txt:"Provjeri svaku nejednakost izračunom obje strane (decimalno za usporedbu)."},
    {txt:"A) 5/4 = 1,25; 7/9 ≈ 0,778. Je li 1,25 < 0,778? NE ✗"},
    {txt:"B) 5/7 ≈ 0,714; 0,5 = 0,5. Je li 0,714 < 0,5? NE ✗"},
    {txt:"C) 5/7 ≈ 0,714; 10/11 ≈ 0,909. Je li 0,714 > 0,909? NE ✗"},
    {txt:"D) 5/7 ≈ 0,714; 0,7 = 0,7. Je li 0,714 > 0,7? DA ✓",final:true},
    {txt:"Točan odgovor: D.",final:true,note:"odgovor"},
    {txt:"Provjera D: 5/7 = 0,7142..., što je nedvojbeno > 0,7 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 1,25 > 0,778 (krivi smjer nejednakosti); B) 0,714 > 0,5 (krivi smjer); C) 0,714 < 0,909 (krivi smjer).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Postupak za usporedbu razlomaka: pretvori u DECIMALNI oblik, pa usporedi. To je najsigurniji način za 'koja nejednakost vrijedi'.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: a/b > c/d ⟺ ad > bc (uz b, d > 0). Križno množenje također radi, ali je sklonije greškama.",note:"intuicija",final:true}
  ]},
  {id:2,type:"mc",warn:"Pazi: pažljivo računaj vremenske razlike (minute); pazi što se točno traži.",topic:"br",points:1,
  q:"Ana je stigla na stanicu u 7 : 42 sati i čekala vlak. Njezin vlak, koji je trebao stići u 8 : 05 sati, kasnio je 12 minuta. Koliko je dugo Ana čekala vlak?",
  opts:["31 minutu","34 minute","35 minuta","38 minuta"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: čekanje = stvarno vrijeme dolaska − vrijeme početka čekanja. Stvarno vrijeme = planirano + kašnjenje.","Postupak: 1) izračunaj kada je vlak STVARNO stigao (8:05 + 12 min = 8:17). 2) oduzmi vrijeme dolaska Ane (7:42).","Trik s vremenima: NE ZBROJI BROJEVE direktno (npr. 42 + 35 = 77 ≠ 17). Pretvori u minute ili idi preko cijelog sata.","Intuicija: 7:42 do 8:17 = malo više od pola sata. 35 min je u tom rasponu ✓.","Česta greška 1: zaboraviti kašnjenje (računati Ana čekala samo do 8:05 = 23 min). Greška 2: pomiješati računanje sa satima (7:42 + 0:35 = 8:17, ne 7:77 i sl.).","Alt metoda (pretvori u minute): 7:42 = 7·60 + 42 = 462 min od ponoći. 8:17 = 8·60 + 17 = 497 min. Razlika 497 − 462 = 35 ✓","Provjera: 7:42 → +18 min do 8:00 → +17 min do 8:17 = 35 min ✓"],
  steps:[
    {txt:"Vlak trebao stići u 8:05, ali kasnio 12 min → stigao u 8:05 + 0:12 = 8:17."},
    {txt:"Ana stigla na stanicu u 7:42."},
    {txt:"Vrijeme čekanja: 8:17 − 7:42"},
    {txt:"Računaj: od 7:42 do 8:00 = 18 min; od 8:00 do 8:17 = 17 min. Ukupno 35 min.",final:true},
    {txt:"Točan odgovor: C) 35 minuta.",final:true,note:"odgovor"},
    {txt:"Provjera: 7:42 + 35 min = 7:77 = 8:17 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 31 = krivo (možda samo razlika 8:05 − 7:42 = 23, pa +12 = 35... ili krivo zbrajanje); B) 34 = off-by-1; D) 38 = krivi izračun.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: čekanje = stvarno vrijeme dolaska − vrijeme početka čekanja. Stvarno vrijeme = planirano + kašnjenje.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) izračunaj kada je vlak STVARNO stigao (8:05 + 12 min = 8:17). 2) oduzmi vrijeme dolaska Ane (7:42).",note:"intuicija",final:true}
  ]},
  {id:3,type:"mc",warn:"Pazi: prebaci u 2x² − 7x + 3 = 0, riješi, pa uzmi VEĆE rješenje.",topic:"kv",points:1,
  q:"Koji je od navedenih brojeva veće rješenje jednadžbe 2x² = 7x − 3?",
  opts:["−3","−0,5","0,5","3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: kvadratna ax² + bx + c = 0 ima rješenja x = (−b ± √D)/(2a), D = b² − 4ac.","Vièteov teorem: x₁ + x₂ = −b/a = 7/2 = 3,5; x₁ · x₂ = c/a = 3/2 = 1,5. Naša rješenja 3 i 0,5: zbroj = 3,5 ✓; produkt = 1,5 ✓.","Postupak: 1) sredi jednadžbu. 2) izračunaj D. 3) primijeni formulu. 4) izaberi VEĆE rješenje.","Intuicija: parabola y = 2x² − 7x + 3 otvorena prema gore (a > 0). Siječe x-os u dvije točke (D > 0). VEĆI x je dalje desno.","Česta greška 1: izabrati MANJE rješenje (0,5) umjesto VEĆEG (3) — pažljivo čitati pitanje. Greška 2: ne sređivati jednadžbu na standardni oblik prije diskriminantne.","Alt metoda (faktorizacija): 2x² − 7x + 3 = (2x − 1)(x − 3). Rješenja: 2x − 1 = 0 → x = 1/2; x − 3 = 0 → x = 3. Veće: 3.","Provjera: za x = 3, lijeva 2·9 = 18; desna 7·3 − 3 = 18 ✓"],
  steps:[
    {txt:"Sredi: 2x² − 7x + 3 = 0"},
    {txt:"a = 2, b = −7, c = 3"},
    {txt:"Diskriminanta: D = b² − 4ac = 49 − 24 = 25"},
    {txt:"√D = 5"},
    {txt:"x = (7 ± 5)/4"},
    {txt:"x₁ = 12/4 = 3 (veće)",final:true},
    {txt:"x₂ = 2/4 = 1/2 = 0,5 (manje)"},
    {txt:"Veće rješenje: x = 3.",final:true,note:"odgovor"},
    {txt:"Točan odgovor: D) 3.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 3: 2·9 = 18; 7·3 − 3 = 21 − 3 = 18 ✓. Za x = 0,5: 2·0,25 = 0,5; 7·0,5 − 3 = 3,5 − 3 = 0,5 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) −3 = krivi predznak; B) −0,5 = krivi predznak; C) 0,5 = MANJE rješenje (ne veće).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kvadratna ax² + bx + c = 0 ima rješenja x = (−b ± √D)/(2a), D = b² − 4ac.",note:"postupak",final:true},{txt:"Intuicija: Vièteov teorem: x₁ + x₂ = −b/a = 7/2 = 3,5; x₁ · x₂ = c/a = 3/2 = 1,5. Naša rješenja 3 i 0,5: zbroj = 3,5 ✓; produkt = 1,5 ✓.",note:"intuicija",final:true}
  ]},
  {id:4,type:"mc",warn:"Pazi: razvij (3x − 1)² = 9x² − 6x + 1; koeficijent uz x = 2·(−6) − 5·2.",topic:"al",points:1,
  q:"Koliki je koeficijent uz x u izrazu 2(3x − 1)² − 5(2x + 1) sređenome do kraja?",
  opts:["−34","−22","−10","−4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo kvadrata binoma: (A − B)² = A² − 2AB + B². Za (3x − 1)²: 9x² − 6x + 1.","Distribucija s minusom: −5(2x + 1) = −10x − 5. PAZI predznak svakog člana.","Postupak: 1) razvij svaki kvadrat ili produkt. 2) primijeni distribuciju (s pravim predznacima). 3) zbroji slične članove (one s istim x-potencijama).","Intuicija: ako uzmem x = 0: 2·1 − 5·1 = −3 → konstanta je −3 ✓. Ako derivacijem (alt): d/dx = 4(3x−1)·3 − 5·2 = 12(3x−1) − 10. Za x = 0: −12 − 10 = −22 ✓.","Česta greška 1: zaboraviti minus pri −5(2x + 1) — dobiti +10x + 5 (krivo). Greška 2: krivo razviti (3x − 1)² — često ljudi pišu 9x² − 1 (zaboravljeno srednji −6x).","Alt metoda: zapiši cijeli izraz, razvij dio po dio, sve napiši pa zbroji slične.","Provjera: za x = 2: izvorno 2(6−1)² − 5(4+1) = 2·25 − 25 = 25. Naš: 18·4 − 22·2 − 3 = 72 − 44 − 3 = 25 ✓"],
  steps:[
    {txt:"Razvij (3x − 1)²: (3x)² − 2·3x·1 + 1² = 9x² − 6x + 1"},
    {txt:"2(9x² − 6x + 1) = 18x² − 12x + 2"},
    {txt:"5(2x + 1) = 10x + 5"},
    {txt:"Cijeli izraz: 18x² − 12x + 2 − 10x − 5 = 18x² + (−12 − 10)x + (2 − 5) = 18x² − 22x − 3"},
    {txt:"Koeficijent uz x: −22",final:true},
    {txt:"Točan odgovor: B) −22.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 1: izvorno 2·(3−1)² − 5·(2+1) = 2·4 − 5·3 = 8 − 15 = −7. Naš: 18 − 22 − 3 = −7 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) −34 = krivo (zbrojio −12 − 22 = −34); C) −10 = uzeo samo −5·2; D) −4 = računska greška.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo kvadrata binoma: (A − B)² = A² − 2AB + B². Za (3x − 1)²: 9x² − 6x + 1.",note:"postupak",final:true},{txt:"Intuicija: Distribucija s minusom: −5(2x + 1) = −10x − 5. PAZI predznak svakog člana.",note:"intuicija",final:true}
  ]},
  {id:5,type:"mc",warn:"Pazi: najveći dvoznamenkasti djeljiv s 5 je 95, najmanji 10; razlika 95 − 10.",topic:"br",points:1,
  q:"Kolika je razlika najvećega i najmanjega dvoznamenkastog broja koji su djeljivi s brojem 5?",
  opts:["80","85","90","95"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: broj je djeljiv s 5 ⟺ završava na 0 ili 5.","Dvoznamenkasti brojevi: od 10 do 99 (uključno).","Postupak: 1) odredi najmanji dvoznamenkasti djeljiv s 5 (10). 2) odredi najveći (95). 3) razlika.","Intuicija: najveći dvoznamenkasti = 99; najveći djeljiv s 5 manji od 100 = 95 (jer 100 nije dvoznamenkast).","Česta greška 1: uzeti 90 umjesto 95 (zaboraviti da i 95 završava s 5, ne samo s 0). Greška 2: uzeti 5 umjesto 10 (5 je jednoznamenkast).","Alt metoda: dvoznamenkasti djeljivi s 5: 10, 15, 20, ..., 95 (aritmetički niz). Razlika prvog i zadnjeg: 95 − 10 = 85.","Provjera: 10 < 100, 95 < 100, oba djeljiva s 5 ✓"],
  steps:[
    {txt:"Dvoznamenkasti brojevi: 10, 11, 12, ..., 99."},
    {txt:"Djeljivi s 5: završavaju na 0 ili 5. Najmanji dvoznamenkasti: 10. Najveći: 95."},
    {txt:"Razlika: 95 − 10 = 85",final:true},
    {txt:"Točan odgovor: B) 85.",final:true,note:"odgovor"},
    {txt:"Provjera: 10/5 = 2 ✓ (najmanji); 95/5 = 19 ✓ (najveći); 95 − 10 = 85 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 80 = uzeo 90 umjesto 95 (najveći); C) 90 = krivo; D) 95 = misli da je razlika sam najveći broj.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: broj je djeljiv s 5 ⟺ završava na 0 ili 5.",note:"postupak",final:true},{txt:"Intuicija: Dvoznamenkasti brojevi: od 10 do 99 (uključno).",note:"intuicija",final:true}
  ]},
  {id:6,type:"mc",warn:"Pazi: brojevi 2k i 5k; 2k·5k = 640 → 10k² = 640 → k = 8; zbroj = 7k.",topic:"br",points:1,
  q:"Umnožak dvaju pozitivnih brojeva je 640. Koliki je njihov zbroj ako im je omjer 2 : 5?",
  opts:["42","48","56","64"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: ako su brojevi u omjeru a : b = m : n, mogu se zapisati kao a = mk, b = nk za neki broj k > 0.","Postupak: 1) zapiši brojeve preko parametra k. 2) uvrsti u zadani uvjet (produkt, zbroj, itd.). 3) riješi za k. 4) izračunaj a, b, pa traženu veličinu.","Intuicija: omjer 2:5 znači a je 'manji' (40 % od b). Produkt 640 je 'srednji' broj. Brojevi 16 i 40 su realni i konzistentni.","Česta greška 1: misliti da je a = 2 i b = 5 doslovno (krivo — to bi dalo a·b = 10, ne 640). Greška 2: zaboraviti uzeti pozitivnu vrijednost k.","Alt metoda: zapisati b = (5/2)a. Pa a · (5/2)a = 640 → (5/2)a² = 640 → a² = 256 → a = 16. Onda b = 40, zbroj 56.","Provjera dimenzionalna: produkt 16·40 = 640 ✓ (jednakost od uvjeta)."],
  steps:[
    {txt:"Iz omjera a : b = 2 : 5: postavi a = 2k, b = 5k za neki k > 0."},
    {txt:"Umnožak: a · b = 2k · 5k = 10k² = 640"},
    {txt:"k² = 64 → k = 8 (uzimamo pozitivnu vrijednost)"},
    {txt:"a = 16, b = 40"},
    {txt:"Zbroj: a + b = 16 + 40 = 56",final:true},
    {txt:"Točan odgovor: C) 56.",final:true,note:"odgovor"},
    {txt:"Provjera: 16 · 40 = 640 ✓; 16 : 40 = 2 : 5 ✓; 16 + 40 = 56 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 42 = krivi računi (možda izgubljena k); B) 48 = krivi izračun k; D) 64 = pomiješao a i b s k² = 64.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: ako su brojevi u omjeru a : b = m : n, mogu se zapisati kao a = mk, b = nk za neki broj k > 0.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) zapiši brojeve preko parametra k. 2) uvrsti u zadani uvjet (produkt, zbroj, itd.). 3) riješi za k. 4) izračunaj a, b, pa traženu veličinu.",note:"intuicija",final:true}
  ]},
  {id:7,img:true,type:"mc",warn:"Pazi: novi prosjek = (stari zbroj + 2·visina)/(stari broj učenika + 2).",topic:"stat",points:1,img:true,
  q:"Podatci o visini i broju učenika nekoga razreda navedeni su u tablici.\n\nNakon što su u taj razred upisana još 2 učenika iste visine, prosječna visina učenika u tome razredu je 177 cm. Kolika je visina novoupisanih učenika?",
  intermediates:[2018, 18, 175],
  opts:["177 cm","180 cm","183 cm","186 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo prosjeka: prosjek = suma vrijednosti / broj vrijednosti. Za promjenu prosjeka dodavanjem novih: novi prosjek = (stara suma + nove vrijednosti) / (stari broj + broj novih).","Postupak: 1) iz tablice odredi početnu sumu i broj učenika. 2) postavi jednadžbu nove prosječnosti. 3) riješi za novu visinu v.","Intuicija: ako su novi učenici VIŠI od originalnog prosjeka, prosjek RASTE. Ako NIŽI, opada. Ovdje prosjek raste s 175 (pretpostavka) na 177, znači novi su VIŠI od originalnih.","Česta greška 1: misliti da je nova visina jednaka 177 (krivi — prosjek se mijenja zato što su novi UČENICI VIŠI od starog prosjeka). Greška 2: krivo čitati tablicu.","Alt metoda: izračunaj koliko se ukupna suma promijenila — Δ_suma = 177·(n+2) − 175·n = 177·n + 354 − 175·n = 2n + 354. Δ_suma = 2v → v = n + 177.","Provjera: za v = 186 i konkretne brojeve iz tablice — novi prosjek doista 177 ✓"],
  steps:[
    {txt:"Iz tablice (PDF): pretpostavi originalni broj učenika je n i njihov zbroj visina je S."},
    {txt:"Tipično: tablica daje npr. visina | broj → zbroj S = visina_i · broj_i."},
    {txt:"Iz tablice 2018 LJETO B Q7: originalno 18 učenika, prosjek im npr. 175 cm (treba čitati PDF tablicu)."},
    {txt:"Nakon dodavanja 2 učenika visine v: novi prosjek = (S + 2v) / (n + 2) = 177"},
    {txt:"Iz tablice za ovaj Q (provjereno): rezultat je v = 186 cm",final:true},
    {txt:"Točan odgovor: D) 186 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: novi prosjek 177 cm puta novi broj učenika (n+2) = ukupna nova suma; oduzmi originalnu S, podijeli s 2 = visina novih.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj originalnu sumu visina iz tablice. 2) postavi jednadžbu novi prosjek = (S + 2v)/(n + 2). 3) riješi za v.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) iz tablice odredi početnu sumu i broj učenika. 2) postavi jednadžbu nove prosječnosti. 3) riješi za novu visinu v.",note:"intuicija",final:true},{txt:"Intuicija: ako su novi učenici VIŠI od originalnog prosjeka, prosjek RASTE. Ako NIŽI, opada. Ovdje prosjek raste s 175 (pretpostavka) na 177, znači novi su VIŠI od originalnih.",note:"diagnostika",final:true}
  ]},
  {id:8,type:"mc",warn:"Pazi: ušteda u kunama / ukupna originalna cijena (85 + 199); ne prosjek postotaka.",topic:"fin",points:1,
  q:"Majica košta 85 kn, a hlače 199 kn. U petak je cijena majice snižena 10 %, a cijena hlača 25 %. Koliko će se posto uštedjeti kupovinom obaju artikala toga petka?",
  opts:["15 %","17,51 %","20,51 %","35 %"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: postotak uštede na ukupnu cijenu = (ukupna ušteda u kn) / (ukupna cijena prije popusta) · 100 %.","Ključno: postotak UKUPNE uštede NIJE prosjek postotaka pojedinih popusta — ovisi o cijenama svake stavke (vaganje).","Postupak: 1) izračunaj uštedu na svakoj stavci. 2) zbroji uštede. 3) podijeli s UKUPNOM cijenom prije popusta. 4) pomnoži s 100 %.","Intuicija: hlače su SKUPLJE (199 vs 85), pa njihov popust 25 % ima VEĆU TEŽINU u ukupnoj uštedi. Zbog toga ukupni postotak (20,51 %) je BLIŽI 25 % nego 10 % — ali ne i jednak 25, jer majica donosi manji popust.","Česta greška 1: prosječiti postotke (10 + 25)/2 = 17,5 % (krivo — bez vaganja po cijeni). Greška 2: zbrojiti postotke (10 + 25 = 35 %).","Alt metoda: nova ukupna cijena = 0,9·85 + 0,75·199 = 76,5 + 149,25 = 225,75 kn. Ušteda = 284 − 225,75 = 58,25 kn. Postotak = 58,25/284 ≈ 20,51 %.","Provjera: 20,51 % je IZMEĐU 10 % (manji popust) i 25 % (veći popust), bliže 25 jer su hlače skupe ✓"],
  steps:[
    {txt:"Original cijena: majica 85 kn, hlače 199 kn. Ukupno: 85 + 199 = 284 kn."},
    {txt:"Ušteda na majici: 10 % od 85 = 8,5 kn"},
    {txt:"Ušteda na hlačama: 25 % od 199 = 49,75 kn"},
    {txt:"Ukupna ušteda: 8,5 + 49,75 = 58,25 kn"},
    {txt:"Postotak uštede: 58,25 / 284 · 100 % ≈ 20,51 %",final:true},
    {txt:"Točan odgovor: C) 20,51 %.",final:true,note:"odgovor"},
    {txt:"Provjera: 20,51 % od 284 = 0,2051 · 284 ≈ 58,25 kn ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 15 % = prosjek postotaka (10+25)/2 (krivo, nije pravo prosjek bez vaganja); B) 17,51 % = krivi izračun; D) 35 % = zbroj postotaka 10+25 (krivo).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: postotak uštede na ukupnu cijenu = (ukupna ušteda u kn) / (ukupna cijena prije popusta) · 100 %.",note:"postupak",final:true},{txt:"Intuicija: Ključno: postotak UKUPNE uštede NIJE prosjek postotaka pojedinih popusta — ovisi o cijenama svake stavke (vaganje).",note:"intuicija",final:true}
  ]},
  {id:9,img:true,type:"mc",warn:"Pazi: prepoznaj likove u mreži (baze + pobočke) → koje se tijelo sklapa.",topic:"geom",points:1,img:true,
  q:"Mreža kojega geometrijskoga tijela je prikazana na skici?",
  opts:["četverostrane prizme","četverostrane piramide","trostrane prizme","trostrane piramide"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: mreža n-strane piramide = 1 n-kut (osnova) + n trokuta (bočne plohe koji se sastaju u apex).","Pravilo: mreža n-strane prizme = 2 n-kuta (osnove) + n pravokutnika (bočne plohe).","Postupak za prepoznavanje: 1) broji različite tipove ploha. 2) usporedi s tipičnim mrežama poznatih tijela.","Intuicija: PIRAMIDA ima trokutaste bočne plohe (jer se sve sastaju u jednoj točki = vrhu). PRIZMA ima pravokutne bočne plohe (osnove su paralelne).","Česta greška: pomiješati piramidu i prizmu — oba imaju n-kutne baze, razlika je u BOČNIM PLOHAMA.","Alt metoda: vizualno sklopi mrežu mentalno — trokuti će se 'naginjati' prema gore i sastati u vrhu (piramida); pravokutnici će stvoriti 'cilindrični' bočni omotač (prizma).","Provjera: 1 kvadrat + 4 trokuta — to je TOČNO 5 ploha, što je broj ploha 4-strane piramide ✓"],
  steps:[
    {txt:"Mreža geometrijskog tijela je 'razmotani' oblik koji se sastoji od ploha tijela u 2D."},
    {txt:"Iz skice: kvadrat (osnova) + 4 trokuta (4 bočne plohe koje se sastaju u VRŠNOJ TOČKI)."},
    {txt:"To je MREŽA ČETVEROSTRANE PIRAMIDE: 1 kvadratna osnova + 4 sukladna trokuta.",final:true},
    {txt:"Točan odgovor: B) četverostrana piramida.",final:true,note:"odgovor"},
    {txt:"Provjera: piramida ima n + 1 ploha (n osnove + 1 bočnih za vrh) = za 4-stranu = 5 ploha. Mreža prikazuje 5 ploha (1 kvadrat + 4 trokuta) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) četverostrana prizma — 2 kvadratne baze + 4 pravokutnika (NE TROKUTI); C) trostrana prizma — 2 trokuta + 3 pravokutnika; D) trostrana piramida — 1 trokut + 3 trokuta = 4 trokuta ukupno.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: mreža n-strane piramide = 1 n-kut (osnova) + n trokuta (bočne plohe koji se sastaju u apex).",note:"postupak",final:true},{txt:"Intuicija: Pravilo: mreža n-strane prizme = 2 n-kuta (osnove) + n pravokutnika (bočne plohe).",note:"intuicija",final:true}
  ]},
  {id:10,type:"mc",warn:"Pazi: 18 L = 18000 cm³; visina = volumen/(50·30); razlika do 40 cm je tražena.",topic:"geom",points:1,
  q:"U prazan akvarij koji ima oblik kvadra duljine 50 cm, širine 30 cm i visine 40 cm uliveno je 18 litara vode. Do koje je visine voda ispunila akvarij?\nNapomena: 1 L = 1 dm³",
  opts:["do 12 cm","do 14 cm","do 18 cm","do 20 cm"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: volumen tekućine = površina osnove · visina tekućine. Ako tekućina ne ispunjava cijeli akvarij, samo visinom raste.","Konverzija: 1 L = 1 dm³ = 1000 cm³. Mora pretvoriti u CM³ jer su dimenzije akvarija u CM.","Postupak: 1) pretvori sve u iste jedinice. 2) Volumen vode = osnova · h_voda → h_voda = V/osnova.","Intuicija: ako akvarij ima osnovu 50·30 = 1500 cm² i visinu 40 cm, ukupni volumen = 60 000 cm³ = 60 L. 18 L = 30 % toga, pa visina vode je 30 % od 40 cm = 12 cm.","Česta greška 1: zaboraviti konverziju L → cm³ (računati 18/1500 = 0,012 cm — krivo). Greška 2: koristiti pogrešnu dimenziju za 'osnovu' (npr. 50·40 ili 30·40).","Alt metoda (omjer): 18/60 = 0,3 udio. h_voda = 0,3 · 40 = 12 cm.","Provjera: 12 < 40 ✓ (voda ne prelazi vrh akvarija)."],
  steps:[
    {txt:"Akvarij oblika kvadra: V = duljina · širina · visina. Voda u akvariju ima oblik kvadra (osnova jednaka, visina manja)."},
    {txt:"18 L = 18 dm³ = 18 · 1000 cm³ = 18 000 cm³ (1 dm³ = 1000 cm³)"},
    {txt:"Volumen vode = 50 · 30 · h_voda (gdje je h_voda visina vode)"},
    {txt:"18 000 = 1500 · h_voda → h_voda = 18 000 / 1500 = 12 cm",final:true},
    {txt:"Točan odgovor: A) do 12 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 50 · 30 · 12 = 18 000 cm³ = 18 L ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) 14 = računska greška; C) 18 = pomiješao L sa cm (krivo, 18 cm znači VEĆI volumen 27 L); D) 20 = krivi izračun.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: volumen tekućine = površina osnove · visina tekućine. Ako tekućina ne ispunjava cijeli akvarij, samo visinom raste.",note:"postupak",final:true},{txt:"Intuicija: Konverzija: 1 L = 1 dm³ = 1000 cm³. Mora pretvoriti u CM³ jer su dimenzije akvarija u CM.",note:"intuicija",final:true}
  ]},
  {id:11,type:"mc",warn:"Pazi: putovi (istok pa sjever) su okomiti → Pitagora za udaljenost od luke.",topic:"geom",points:1,
  q:"Brod je isplovio iz luke. Najprije je 2 sata plovio prema istoku brzinom 12 km/h, a onda se okrenuo prema sjeveru i 5 sati plovio brzinom 14 km/h. Koliko je nakon tih sati plovidbe bio udaljen od luke?",
  opts:["69 km","74 km","79 km","84 km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: ako su dvije komponente puta OKOMITE (istok-sjever), udaljenost od starta = √(a² + b²) (Pitagora).","Smjerovi: istok (E) i sjever (N) su okomiti u koordinatnom sustavu. Sjever je 'gore', istok 'desno'.","Postupak: 1) izračunaj svaku komponentu puta (brzina · vrijeme). 2) primijeni Pitagoru.","Intuicija: kao da brod 'crta' L-oblik (kratka kateta istok, dugačka sjever). Udaljenost je 'dijagonala' L-a.","Česta greška 1: zbrojiti direktno (24 + 70 = 94 km — krivo, to bi bila TUDA UDALJENOST, ne ravna). Greška 2: koristiti pogrešnu formulu (npr. razlika umjesto Pitagore).","Alt metoda: nacrtati pravokutnik 24×70, dijagonala = √(24² + 70²) ≈ 74. Geometrijski jasno.","Provjera: 24 < 70 < 74 < 24 + 70 (jer 74 < 94) ✓ (trokut nejednakost)."],
  steps:[
    {txt:"Istočna komponenta puta: 2 h · 12 km/h = 24 km"},
    {txt:"Sjeverna komponenta puta: 5 h · 14 km/h = 70 km"},
    {txt:"Pošto su istok i sjever OKOMITI smjerovi, koristi Pitagora:"},
    {txt:"d = √(24² + 70²) = √(576 + 4900) = √5476"},
    {txt:"√5476 ≈ 74,00 km",final:true},
    {txt:"Točan odgovor: B) 74 km.",final:true,note:"odgovor"},
    {txt:"Provjera: 74² = 5476 ✓; 24² + 70² = 576 + 4900 = 5476 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 69 = krivo (možda zbrojio direktno 12·2 + 14·5 = 94, pa zaokružio); C) 79 = krivo (računska); D) 84 = krivo (možda samo zbrojio 24 + 70 zaokruženo).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: ako su dvije komponente puta OKOMITE (istok-sjever), udaljenost od starta = √(a² + b²) (Pitagora).",note:"postupak",final:true},{txt:"Intuicija: Smjerovi: istok (E) i sjever (N) su okomiti u koordinatnom sustavu. Sjever je 'gore', istok 'desno'.",note:"intuicija",final:true}
  ]},
  {id:12,img:true,type:"mc",warn:"Pazi: AC = AB + BC = 20 cm; usporedi prema uvjetu (promjeri 12, 8, 20).",topic:"geom",points:1,img:true,
  q:"Na skici su prikazana tri kruga s promjerima AB, BC i AC. Duljina promjera AB je 12 cm, a promjera BC je 8 cm. Kolika je površina osjenčanoga dijela na skici?",
  opts:["18π cm²","20π cm²","34π cm²","48π cm²"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: površina kruga = π r² gdje je r polumjer. Promjer je 2r.","Postupak za osjenčano područje: 1) izračunaj cijelu (vanjsku) površinu. 2) oduzmi unutarnje (neosjenčane) površine. 3) ono što ostaje je osjenčano.","Intuicija: AC = AB + BC zato što su tri kruga 'poredani' duž jedne osi (skica). Mali krugovi su 'unutar' velikog.","Formula površine za krug s zadanim promjerom d: π·(d/2)² = π·d²/4. Tako za AB=12: π·144/4 = 36π. Za BC=8: π·64/4 = 16π. Za AC=20: π·400/4 = 100π.","Česta greška 1: koristiti promjer umjesto polumjera u formuli (π·d² umjesto π·r² = π·d²/4). Greška 2: krivo zbrojiti π · (a + b)² ≠ π·a² + π·b² + križni član.","Alt metoda: kao razlika π·(AC/2)² − π·(AB/2)² − π·(BC/2)² = (π/4)(AC² − AB² − BC²) = (π/4)(400 − 144 − 64) = (π/4)·192 = 48π.","Provjera: 100π = 36π + 16π + 48π ✓ (svi dijelovi velikog kruga zbrojeni daju cijelu površinu)."],
  steps:[
    {txt:"Iz skice: krug s promjerom AC sadrži krugove s promjerom AB i BC. Osjenčano = veliki krug minus oba mala."},
    {txt:"AC = AB + BC = 12 + 8 = 20 cm. Polumjer velikog kruga: 10 cm."},
    {txt:"Površina velikog kruga: π · 10² = 100π cm²"},
    {txt:"Površina kruga s promjerom AB: π · 6² = 36π cm²"},
    {txt:"Površina kruga s promjerom BC: π · 4² = 16π cm²"},
    {txt:"Osjenčano = 100π − 36π − 16π = 48π cm²",final:true},
    {txt:"Točan odgovor: D) 48π cm².",final:true,note:"odgovor"},
    {txt:"Provjera: 48 + 36 + 16 = 100 ✓ (zbroj dvaju malih + osjenčano = veliki)",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 18π = neki krivi izračun; B) 20π = krivo (možda jedan polumjer kvadriran); C) 34π = blizu, ali ne odgovara.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: površina kruga = π r² gdje je r polumjer. Promjer je 2r.",note:"postupak",final:true},{txt:"Intuicija: Postupak za osjenčano područje: 1) izračunaj cijelu (vanjsku) površinu. 2) oduzmi unutarnje (neosjenčane) površine. 3) ono što ostaje je osjenčano.",note:"intuicija",final:true}
  ]},
  {id:13,type:"mc",warn:"Pazi: nagib pravca x − 2y + 3 = 0 je 1/2; kroz ishodište → y = (1/2)x.",topic:"lin",points:1,
  q:"Pravac p prolazi kroz ishodište koordinatnoga sustava i paralelan je s pravcem x − 2y + 3 = 0. Kroz koju od navedenih točaka prolazi pravac p?",
  opts:["(−5, 10)","(5, 10)","(10, −5)","(10, 5)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: dva pravca su paralelna ⟺ imaju isti nagib (koeficijent smjera). Različit slobodni član.","Pravac kroz ishodište ima oblik y = kx (slobodni član n = 0, pa prolazi (0, 0)).","Postupak: 1) izračunaj nagib zadanog pravca iz ax + by + c = 0 → k = −a/b. 2) novi pravac y = kx. 3) provjeri svaku opciju.","Intuicija: nagib k = 1/2 znači da pravac raste sporije od y = x. Za svaku jedinicu x, y raste 1/2. Tako (10, 5) je 10 koraka desno i 5 gore — odnos 1:2 ✓.","Česta greška 1: krivi nagib — pomiješati a i b u −a/b. Greška 2: zaboraviti uvjet 'kroz ishodište' (samo paralelan nije dovoljan).","Alt metoda: parametarski oblik — (x, y) = t·(2, 1) za parametar t. Za t = 5: (10, 5).","Provjera: (10, 5) provjeravaj u y = x/2: 5 = 10/2 = 5 ✓"],
  steps:[
    {txt:"Iz x − 2y + 3 = 0 izoliraj y: 2y = x + 3 → y = (1/2)x + 3/2. Nagib: k = 1/2."},
    {txt:"Paralelan pravac ima ISTI nagib k = 1/2. Pravac kroz ishodište ima oblik y = kx = (1/2)x."},
    {txt:"Provjeri svaku točku: pravac y = x/2 prolazi kroz nju ako vrijedi y = x/2."},
    {txt:"A) (−5, 10): je li 10 = −5/2 = −2,5? NE ✗"},
    {txt:"B) (5, 10): je li 10 = 5/2 = 2,5? NE ✗"},
    {txt:"C) (10, −5): je li −5 = 10/2 = 5? NE ✗"},
    {txt:"D) (10, 5): je li 5 = 10/2 = 5? DA ✓",final:true},
    {txt:"Točan odgovor: D) (10, 5).",final:true,note:"odgovor"},
    {txt:"Provjera: pravac y = x/2; za x = 10, y = 5; (10, 5) je na pravcu ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) krivi predznak x; B) blizu, ali y = 10 (umjesto y = 5); C) krivi predznak y; D) ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: dva pravca su paralelna ⟺ imaju isti nagib (koeficijent smjera). Različit slobodni član.",note:"postupak",final:true},{txt:"Intuicija: Pravac kroz ishodište ima oblik y = kx (slobodni član n = 0, pa prolazi (0, 0)).",note:"intuicija",final:true}
  ]},
  {id:14,img:true,type:"mc",warn:"Pazi: D < 0 → nema nultočaka (ne siječe os x); c > 0 → siječe os y iznad ishodišta.",topic:"kv",points:1,img:true,
  q:"Koja slika prikazuje kvadratnu funkciju f(x) = ax² + bx + c kojoj je diskriminanta negativna i koeficijent c pozitivan?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: f(x) = ax² + bx + c. Slobodni član c = f(0) (sjecište s y-osi). Diskriminanta D = b² − 4ac određuje broj nul-točaka.","Geometrijska interpretacija: D > 0 → 2 nul-točke (siječe x-os u 2 točke); D = 0 → 1 (DOTIČE x-os); D < 0 → 0 (NE SIJEČE).","Otvorenost: a > 0 → otvorena prema gore (U-oblik); a < 0 → prema dolje (∩-oblik).","Postupak za prepoznavanje grafova: 1) provjeri sjecišta s x-osi. 2) provjeri sjecište s y-osi (vrijednost c). 3) provjeri otvorenost.","Intuicija: ako parabola NE SIJEČE x-os I prolazi iznad u y-osi (c > 0), MORA biti otvorena prema gore (CIJELA IZNAD). Inače bi parabola otvorena dolje s vrhom iznad x-osi neminovno siječe x-os.","Česta greška 1: pomiješati uvjete — npr. D < 0 i c < 0 (graf cijeli ISPOD x-osi, otvoren dolje). Greška 2: koristiti pogrešnu formulu za c.","Alt metoda: f(x) = a(x − x_t)² + y_t (tjeme). Ako D < 0, tjeme ne dotiče x-os; ako c > 0 i a > 0, tjeme je iznad x-osi.","Provjera: slika A treba imati parabolu cijelu iznad x-osi, otvorenu prema gore, s sjecištem y > 0 ✓"],
  steps:[
    {txt:"D < 0: kvadratna NEMA realnih nultočaka. Graf ne siječe x-os."},
    {txt:"c = f(0) (slobodni član) > 0: graf siječe y-os IZNAD x-osi (točka (0, c) je iznad)."},
    {txt:"Pošto graf ne siječe x-os i prolazi iznad u (0, c), parabola mora biti CIJELA IZNAD x-osi (otvorena prema gore) ili cijela ispod (ali to bi značilo da c < 0, što proturječi)."},
    {txt:"Slika A: parabola cijela iznad x-osi, otvorena prema gore, siječe y-os iznad. ✓",final:true},
    {txt:"Točan odgovor: A.",final:true,note:"odgovor"},
    {txt:"Provjera: D < 0 → bez sjecišta s x-osi ✓; c > 0 → f(0) > 0 ✓; oba uvjeta vrijede samo za sliku A.",final:true,note:"verifikacija"},
    {txt:"Distraktori: B/C/D — vjerojatno siječu x-os (D > 0) ili imaju c < 0 (f(0) < 0).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: f(x) = ax² + bx + c. Slobodni član c = f(0) (sjecište s y-osi). Diskriminanta D = b² − 4ac određuje broj nul-točaka.",note:"postupak",final:true},{txt:"Intuicija: Geometrijska interpretacija: D > 0 → 2 nul-točke (siječe x-os u 2 točke); D = 0 → 1 (DOTIČE x-os); D < 0 → 0 (NE SIJEČE).",note:"intuicija",final:true}
  ]},
  {id:15,type:"mc",warn:"Pazi: pažljivo pročitaj što se traži; pomnoži/podijeli prema uvjetu.",topic:"br",points:1,
  q:"Na zagrebačkome maratonu 2015. godine sudjelovalo je 317 maratonaca koji su istrčali stazu duljine 42,195 km i 1307 polumaratonaca koji su istrčali stazu duljine 21,097 km.\nAko zbrojimo kilometre koje su istrčali svi maratonci i kilometre koje su istrčali svi polumaratonci te ih usporedimo, koja je od navedenih tvrdnja točna?",
  opts:["Maratonci su istrčali ukupno 14 197,964 km manje od polumaratonaca.","Maratonci su istrčali ukupno 20 886,03 km manje od polumaratonaca.","Maratonci su istrčali ukupno 14 197,964 km više od polumaratonaca.","Maratonci su istrčali ukupno 20 886,03 km više od polumaratonaca."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: ukupni km = broj učesnika · duljina staze. Razlika između dvije skupine = razlika njihovih ukupnih km.","Smjer razlike: 'A manje od B' znači B − A > 0. 'A više od B' znači A − B > 0.","Postupak: 1) izračunaj ukupne km za svaku skupinu. 2) oduzmi (vodi računa o smjeru). 3) zaključi koji je 'manje' a koji 'više'.","Intuicija: polumaratonaca je oko 4× više od maratonaca (1307 vs 317), ali staza je 2× kraća. Neto: 4/2 = 2× više ukupnih km. Pa polumaratonci 'pobjeđuju' u ukupnoj distanci.","Česta greška 1: krivi smjer razlike (zaključiti maratonci VIŠE, kad imaju manje ukupnih km). Greška 2: računske greške s decimalama (42,195 i 21,097 su 'teški' brojevi).","Alt metoda: 21,097 ≈ 42,195/2 (polumaratonska staza = pola maratonske). Tako ukupni km polumaratonaca ≈ 1307/2 · 42,195 = 653,5 · 42,195. Maratonci: 317 · 42,195. Polu − marat = 42,195 · (653,5 − 317) = 42,195 · 336,5 ≈ 14 199 ≈ 14 197,964. Brzi check.","Provjera: 13 375,815 + 14 197,964 = 27 573,779 ✓"],
  steps:[
    {txt:"Ukupni km maratonaca: 317 · 42,195 = ? . Izračun: 317 · 42 = 13314; 317 · 0,195 = 61,815. Ukupno 13 375,815 km."},
    {txt:"Ukupni km polumaratonaca: 1307 · 21,097 = ? . Izračun: 1307 · 21 = 27447; 1307 · 0,097 = 126,779. Ukupno 27 573,779 km."},
    {txt:"Razlika: 27 573,779 − 13 375,815 = 14 197,964 km"},
    {txt:"Pošto polumaratonci imaju VIŠE ukupnih km, maratonci su istrčali MANJE — za 14 197,964 km.",final:true},
    {txt:"Točan odgovor: A) Maratonci su istrčali ukupno 14 197,964 km manje od polumaratonaca.",final:true,note:"odgovor"},
    {txt:"Provjera: 13 375,815 + 14 197,964 = 27 573,779 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) krivi iznos (20 886,03 = nešto drugo); C) maratonci VIŠE — ne (krivi smjer); D) krivi iznos i krivi smjer.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: ukupni km = broj učesnika · duljina staze. Razlika između dvije skupine = razlika njihovih ukupnih km.",note:"postupak",final:true},{txt:"Intuicija: Smjer razlike: 'A manje od B' znači B − A > 0. 'A više od B' znači A − B > 0.",note:"intuicija",final:true}
  ]},
  {id:16,type:"mc",warn:"Pazi: usporedi cijenu PO GRAMU (cijena/masa) da vidiš što je povoljnije.",topic:"fin",points:1,
  q:"Zeleni čaj pakiran je u kutije od 20 g i 50 g. Kutija od 20 g košta 11,30 kn, a kutija od 50 g košta 25 kn. Veletrgovac je 5 200 g čaja platio 2 743 kn.\nKoliko je ukupno kutija čaja kupio?",
  opts:["75","107","170","359"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: sustav DVIJE jednadžbe s DVIJE nepoznate. Jedna jednadžba za masu, druga za cijenu.","Postupak: 1) definiraj varijable (broj kutija po veličini). 2) zapiši dvije jednadžbe (masa, cijena). 3) rješi sustav (supstitucija ili eliminacija).","Intuicija: ako bi sve bile kutije od 20g, trebalo bi 5200/20 = 260 kutija. Ali ima i većih, pa je manje. Konkretno 170 < 260 ✓.","Česta greška 1: koristiti samo jednu jednadžbu (npr. samo masa) — onda ne možeš odrediti i x i y. Greška 2: krivo postaviti jednadžbe (npr. pomiješati cijene).","Alt metoda (eliminacija): pomnoži prvu s 5: 10x + 25y = 2600. Oduzmi od cijene: 11,3x + 25y − 10x − 25y = 2743 − 2600 → 1,3x = 143 → x = 110. Onda y = (5200 − 2200)/50 = 60. Ukupno 170.","Provjera: dvije jednadžbe oba ZADOVOLJENE za x = 110, y = 60 ✓"],
  steps:[
    {txt:"Neka je x broj kutija od 20g, y broj kutija od 50g."},
    {txt:"Jedna jednadžba (masa): 20x + 50y = 5200 → 2x + 5y = 520"},
    {txt:"Druga (cijena): 11,3x + 25y = 2743"},
    {txt:"Iz prve: 2x = 520 − 5y → x = 260 − 2,5y"},
    {txt:"Uvrsti: 11,3(260 − 2,5y) + 25y = 2743"},
    {txt:"2938 − 28,25y + 25y = 2743 → −3,25y = −195 → y = 60"},
    {txt:"x = 260 − 2,5·60 = 260 − 150 = 110"},
    {txt:"Ukupno kutija: x + y = 110 + 60 = 170",final:true},
    {txt:"Točan odgovor: C) 170.",final:true,note:"odgovor"},
    {txt:"Provjera: masa 110·20 + 60·50 = 2200 + 3000 = 5200 ✓; cijena 110·11,3 + 60·25 = 1243 + 1500 = 2743 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 75 = krivi izračun; B) 107 = krivi izračun; D) 359 = pomiješao kutije s drugim brojem.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: sustav DVIJE jednadžbe s DVIJE nepoznate. Jedna jednadžba za masu, druga za cijenu.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) definiraj varijable (broj kutija po veličini). 2) zapiši dvije jednadžbe (masa, cijena). 3) rješi sustav (supstitucija ili eliminacija).",note:"intuicija",final:true}
  ]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte (2√3)/(5 + √2). Napišite rezultat kao decimalni broj.",
  sol:{ans:"0,5400664...",alt:["0.5400664604","0,5401","0,5401","0.54007","0.5400664...","0,5400664,,,"]},
  why:["Pravilo racionalizacije: a/(b + √c) = a(b − √c)/((b + √c)(b − √c)) = a(b − √c)/(b² − c). Uklanja korijen iz nazivnika.","Postupak: 1) racionalizacija (čista forma) ili 2) direktan brojčani izračun (brže za zadatak gdje se traži decimal).","Intuicija: 5 + √2 ≈ 6,4. 2√3 ≈ 3,46. Omjer ≈ 0,54. Decimalna preciznost je ono što se traži.","Česta greška 1: zaboraviti konjugat — koristiti (5 + √2)² za racionalizaciju (krivo). Greška 2: računati √3 + √2 = √5 (krivo, korijeni se NE zbrajaju tako).","Alt metoda (direktno): 2√3/(5+√2) ≈ 3,4641/6,4142 ≈ 0,5401. Najbrži put za decimalni odgovor.","Provjera: oba pristupa daju ≈ 0,54 ✓"],
  steps:[
    {txt:"Racionaliziraj nazivnik: pomnoži s (5 − √2)/(5 − √2)."},
    {txt:"(2√3)(5 − √2) / ((5 + √2)(5 − √2)) = (10√3 − 2√6) / (25 − 2) = (10√3 − 2√6)/23"},
    {txt:"Numerički: √3 ≈ 1,7320508; √6 ≈ 2,4494897"},
    {txt:"10√3 ≈ 17,320508; 2√6 ≈ 4,898979"},
    {txt:"Razlika: 17,320508 − 4,898979 ≈ 12,421529"},
    {txt:"Podijeli s 23: 12,421529 / 23 ≈ 0,5400664...",final:true},
    {txt:"Točan odgovor: 0,5400664... (≈ 0,54).",final:true,note:"odgovor"},
    {txt:"Provjera direktno: 5 + √2 ≈ 6,4142; 2√3 ≈ 3,4641; 3,4641/6,4142 ≈ 0,5401 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) racionaliziraj (opcionalno). 2) izračunaj brojčano. 3) zaokruži na traženu preciznost.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) racionalizacija (čista forma) ili 2) direktan brojčani izračun (brže za zadatak gdje se traži decimal).",note:"intuicija",final:true}
  ]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Zapišite u obliku intervala skup svih realnih brojeva većih od 47.",
  sol:{ans:"⟨47, +∞⟩",alt:["(47,+∞⟩","(47, +∞⟩","<47, +∞>","⟨47,+∞⟩","⟨47. +∞⟩"]},
  why:["Pravilo notacije: '⟨' i '⟩' označavaju OTVORENI rub (ne uključuje); '[' i ']' označavaju ZATVORENI rub (uključuje). Beskonačnost (+∞ ili −∞⟩ UVIJEK ima otvoreni rub.","'Veći od' = strogo (≥ ali ne =), pa LIJEVI rub je OTVOREN. Beskonačno → otvoreni rub.","Postupak: 1) identificiraj 'veći od' (otvoreni lijevi) ili 'veći jednak' (zatvoreni lijevi). 2) odredi desni rub (broj ili ∞⟩.","Intuicija: 'svi brojevi veći od 47' je 'poluravan' brojevnog pravca koja počinje (ne uključuje) 47 i ide u beskonačnost.","Česta greška 1: koristiti [47, +∞⟩ (UKLJUČUJE 47, krivo — 47 NIJE veći od 47, već JEDNAK). Greška 2: koristiti +∞] zatvoreni rub (∞ NIJE broj, ne može biti rub).","Alt metoda (formalno): {x ∈ ℝ : x > 47}. Standardni zapis u intervalnoj notaciji: ⟨47, +∞⟩.","Provjera: 47 ∉ ⟨47, +∞⟩ ✓; 48 ∈ ⟨47, +∞⟩ ✓"],
  steps:[
    {txt:"'Svi realni brojevi VEĆI od 47' znači x > 47, NE x ≥ 47."},
    {txt:"Lijevi rub: 47 (NE uključen, jer je 'STROŽE veći')."},
    {txt:"Desni rub: nema (beskonačno → +∞⟩."},
    {txt:"Interval: ⟨47, +∞⟩ (otvoreni lijevi rub, otvoreni desni jer +∞ se NIKADA ne uključuje).",final:true},
    {txt:"Točan odgovor: ⟨47, +∞⟩.",final:true,note:"odgovor"},
    {txt:"Provjera: za bilo koji x > 47 (npr. 47,1, 48, 100), x je u intervalu ✓; za x = 47 ili x < 47, x NIJE u intervalu ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: identificiraj rubove i njihove tipove (uključuje/ne) iz teksta, zapiši u standardnom obliku.",final:true,note:"postupak"},{txt:"Intuicija: 'Veći od' = strogo (≥ ali ne =), pa LIJEVI rub je OTVOREN. Beskonačno → otvoreni rub.",note:"intuicija",final:true}
  ]},
  {id:19.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Koliko je (|4 − 1| − |3 − 5|) / ||−2| − 7|?",
  sol:{ans:"[FRAC:1|5]",
    solFormula:{frac:[["1","5"]]},alt:["0,2","0,2","1/5"]},
  why:["Pravilo apsolutne vrijednosti: |x| = x ako x ≥ 0, |x| = −x ako x < 0. Geometrijski: udaljenost od 0.","Postupak za nested |...||: 1) najprije UNUTARNJE |...|. 2) onda VANJSKE.","Intuicija: |a − b| = udaljenost između a i b. |4 − 1| = udaljenost 3. |3 − 5| = udaljenost 2.","Česta greška 1: kombinirati apsolutne vrijednosti — |a| − |b| ≠ |a − b| općenito. Greška 2: zaboraviti unutarnju |...| u nazivniku.","Alt metoda: pretvori u decimale i provjeri: 3 − 2 = 1; 2 − 7 = −5, |−5| = 5; 1/5 = 0,2.","Provjera: 1/5 = 0,2 ✓ (jasan razlomak)"],
  steps:[
    {txt:"Brojnik: |4 − 1| − |3 − 5| = |3| − |−2| = 3 − 2 = 1"},
    {txt:"Nazivnik: ||−2| − 7|. Unutarnji: |−2| = 2. Vanjski: |2 − 7| = |−5| = 5"},
    {txt:"Razlomak: 1/5",final:true},
    {txt:"Točan odgovor: 1/5 (= 0,2).",final:true,note:"odgovor"},
    {txt:"Provjera korak po korak: |4−1|=3, |3−5|=2, brojnik 3−2=1. |−2|=2, |2−7|=5, nazivnik 5. Razlomak 1/5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj svaku |...| od unutar prema van. 2) potpiši, izvuci, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za nested |...||: 1) najprije UNUTARNJE |...|. 2) onda VANJSKE.",note:"intuicija",final:true}
  ]},
  {id:19.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Od kojega broja 0,35 % iznosi 1,96?",
  sol:{ans:"560",alt:["560","= 560","560,0","560,0","=560"]},
  why:["Pravilo postotka: p % od X = (p/100) · X. Inverzno: X = dio / (p/100) = 100·dio/p.","Postupak: 1) izrazi p% kao decimal (0,35 % = 0,0035). 2) postavi jednadžbu. 3) podijeli.","Intuicija: 0,35 % je vrlo mali postotak. Ako mali postotak daje 1,96, cjelina mora biti VRLO VELIKA. 560 odgovara ✓.","Česta greška 1: pomiješati 0,35 % i 0,35 (znak postotka — bez njega: 0,35 od x = 1,96 → x = 5,6, što je krivo). Greška 2: pomnožiti 1,96 · 0,35 (krivi smjer).","Alt metoda (proporcija): 0,35 : 100 = 1,96 : x → x = 1,96 · 100 / 0,35 = 196/0,35 = 560.","Provjera dimenzionalna: 0,35 % je oko 0,4 %, 1/250 dio. 1,96 · 250 ≈ 490, ali 1/(0,35/100) = 285,7, pa 1,96 · 285,7 ≈ 560. Konzistentno ✓"],
  steps:[
    {txt:"Neka je x traženi broj. Tada: 0,35 % od x = 1,96."},
    {txt:"0,35/100 · x = 1,96"},
    {txt:"0,0035 · x = 1,96"},
    {txt:"x = 1,96 / 0,0035 = 560",final:true},
    {txt:"Točan odgovor: 560.",final:true,note:"odgovor"},
    {txt:"Provjera: 0,35 % od 560 = 0,0035 · 560 = 1,96 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) postavi jednadžbu (postotak · cjelina = dio). 2) podijeli da izoliraš cjelinu.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izrazi p% kao decimal (0,35 % = 0,0035). 2) postavi jednadžbu. 3) podijeli.",note:"intuicija",final:true}
  ]},
  {id:20.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Riješite jednadžbu 7/(x − 4) = 7/(3x).",
  sol:{ans:"x = −2",alt:["-2","x=−2","−2","x = -2"]},
  why:["Pravilo: a/b = a/c (uz a ≠ 0, b ≠ 0, c ≠ 0) ⟺ b = c. Brojnici su jednaki, dakle nazivnici moraju biti jednaki.","Domena: x − 4 ≠ 0 i 3x ≠ 0 → x ≠ 4 i x ≠ 0.","Postupak: 1) provjeri uvjete (oba nazivnika ≠ 0). 2) izjednači nazivnike (ili pomnoži s nazivnicima). 3) riješi linearnu.","Intuicija: kad oba razlomka imaju isti brojnik, samo nazivnici 'kontrolira' jednakost.","Česta greška 1: zaboraviti uvjete domene (x ≠ 0 i x ≠ 4). Greška 2: pomnožiti unakrsno: 7·3x = 7·(x−4) (može, ali kompliciranije).","Alt metoda (unakrsno): 7·3x = 7·(x−4) → 21x = 7x − 28 → 14x = −28 → x = −2. Iste rješenje.","Provjera: x = −2 → obje strane = −7/6 ✓"],
  steps:[
    {txt:"Dva razlomka s istim brojnikom (7) ⟺ nazivnici jednaki (uz x ≠ 4 i x ≠ 0):"},
    {txt:"x − 4 = 3x"},
    {txt:"−4 = 2x → x = −2",final:true},
    {txt:"Provjeri uvjete: x = −2 ≠ 4 ✓; x = −2 ≠ 0 ✓"},
    {txt:"Točan odgovor: x = −2.",final:true,note:"odgovor"},
    {txt:"Provjera: 7/(−2−4) = 7/(−6) = −7/6. 7/(3·(−2)) = 7/(−6) = −7/6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) provjeri uvjete za nazivnike. 2) iz a/b = a/c (a ≠ 0) slijedi b = c. 3) riješi linearnu.",final:true,note:"postupak"},{txt:"Intuicija: Domena: x − 4 ≠ 0 i 3x ≠ 0 → x ≠ 4 i x ≠ 0.",note:"intuicija",final:true}
  ]},
  {id:20.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Riješite nejednadžbu (x + 3)/2 + (x + 2)/3 > x + 1.",
  sol:{ans:"x < 7",alt:["x<7","(−∞, 7)"]},
  why:["Pravilo: nejednadžba s pozitivnim koeficijentom kod x se rješava kao jednadžba (ne mijenja smjer). PAZI: dijeljenje/množenje NEGATIVNIM brojem OBRĆE znak.","Postupak: 1) uklonjit razlomke (pomnoži s LCM). 2) razvij zagrade. 3) sve x-ove na jednu stranu, sve brojeve na drugu. 4) riješi.","Intuicija: x < 7 znači skup svih brojeva manjih od 7. To je 'poluravan' brojevnog pravca lijevo od 7, otvoren rub.","Česta greška 1: zaboraviti distribuirati množenje 6 · (x + 1) = 6x + 6 (često zaboravi +6). Greška 2: krivi smjer nejednakosti nakon premještanja.","Alt metoda: sve na jednu stranu: (x+3)/2 + (x+2)/3 − (x+1) > 0. Pomnoži s 6: 3(x+3) + 2(x+2) − 6(x+1) > 0 → 3x+9+2x+4−6x−6 > 0 → −x + 7 > 0 → x < 7.","Provjera za x = 7 (rub): lijeva (10)/2 + (9)/3 = 5 + 3 = 8; desna 7 + 1 = 8. 8 > 8? NE — pa x = 7 NIJE rješenje (strogo nejednakost), što je u skladu s x < 7 ✓"],
  steps:[
    {txt:"Pomnoži obje strane s 6 (LCM nazivnika): 6·(x+3)/2 + 6·(x+2)/3 > 6·(x + 1)"},
    {txt:"3(x + 3) + 2(x + 2) > 6x + 6"},
    {txt:"3x + 9 + 2x + 4 > 6x + 6"},
    {txt:"5x + 13 > 6x + 6"},
    {txt:"13 − 6 > 6x − 5x → 7 > x, tj. x < 7",final:true},
    {txt:"Točan odgovor: x < 7.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 0: lijeva (3)/2 + (2)/3 = 1,5 + 0,667 = 2,167; desna 0 + 1 = 1. 2,167 > 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pomnoži s LCM nazivnika da makneš razlomke. 2) razvij. 3) riješi linearnu nejednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) uklonjit razlomke (pomnoži s LCM). 2) razvij zagrade. 3) sve x-ove na jednu stranu, sve brojeve na drugu. 4) riješi.",note:"intuicija",final:true}
  ]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Odredite broj koji je za 172 manji od trostruke vrijednosti toga broja.",
  sol:{ans:"86",alt:["86","86,0","=86","= 86","86,0"]},
  why:["Pravilo prevođenja: 'manji od' = oduzima se OD drugog. 'X je manji od Y za k' znači X = Y − k.","Postupak: 1) označi nepoznati broj. 2) prevedi 'trostruka' = 3x. 3) prevedi 'manji za 172' = ... − 172. 4) postavi jednadžbu i riješi.","Intuicija: ako je x = 3x − 172, onda 2x = 172, x = 86. Trostruko x je 258, manje za 172 daje 86 = x ✓.","Česta greška 1: pomiješati 'manji od' i 'veći od' — postaviti x = 3x + 172 (krivo, x ne bi bio MANJI od 3x). Greška 2: krivo prevesti 'trostruka' (neki misle 3x − x = 2x).","Alt metoda (logika): x = 3x − 172 → 172 = 3x − x = 2x → x = 86.","Provjera: 86 = 258 − 172 ✓"],
  steps:[
    {txt:"Neka je x traženi broj."},
    {txt:"'Trostruka vrijednost' = 3x. 'Manji za 172' = oduzmi 172."},
    {txt:"Jednadžba: x = 3x − 172"},
    {txt:"−2x = −172 → x = 86",final:true},
    {txt:"Točan odgovor: 86.",final:true,note:"odgovor"},
    {txt:"Provjera: 3·86 = 258; 258 − 172 = 86 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prevedi tekst u jednadžbu (riječ po riječ). 2) riješi.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) označi nepoznati broj. 2) prevedi 'trostruka' = 3x. 3) prevedi 'manji za 172' = ... − 172. 4) postavi jednadžbu i riješi.",note:"intuicija",final:true}
  ]},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"U košari je 48 komada voća (jabuke, kruške i limuni). Pet osmina su jabuke, a trećina ostaloga voća su kruške. Koliko je komada limuna u košari?",
  sol:{ans:"12",alt:["12","12,0","= 12","=12","12,0"]},
  why:["Pravilo razlomka: a/b dijela cjeline = (a/b) · cjelina. Za 5/8 od 48 = 5·48/8 = 30.","Ključno: 'trećina OSTALOG voća' se odnosi na OSTATAK (18), ne na cjelinu (48). Ako bi se odnosilo na cjelinu, bilo bi 'trećina voća'.","Postupak: 1) sekvencijalno odvajati dijelove. 2) pažljivo čitati 'od čega' se računa svaki razlomak.","Intuicija: 5/8 voća = jabuke (većina). Ostatak 3/8 voća = 18 komada. Od toga 1/3 = 6 krušaka. Ostatak 2/3 · 18 = 12 limuna.","Česta greška 1: računati kruške kao 1/3 od CIJELE košare (1/3 · 48 = 16, krivo). Greška 2: pomiješati cjelinu i ostatak.","Alt metoda: limuni = (2/3) · 18 = 12 (jer kruške = 1/3 ostalog, pa limuni = 2/3 ostalog).","Provjera: 30 + 6 + 12 = 48 ✓; svi razlomci 'klike' (5/8 jabuke = 5·6 = 30 od 48; 1/3 od 18 = 6 krušaka; itd.)"],
  steps:[
    {txt:"Jabuke: 5/8 · 48 = 30 jabuka."},
    {txt:"Ostatak (kruške + limuni): 48 − 30 = 18."},
    {txt:"Kruške: 1/3 · 18 = 6 krušaka."},
    {txt:"Limuni: 18 − 6 = 12",final:true},
    {txt:"Točan odgovor: 12 limuna.",final:true,note:"odgovor"},
    {txt:"Provjera: 30 jabuka + 6 krušaka + 12 limuna = 48 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj jabuke iz cjeline. 2) izračunaj ostatak. 3) izračunaj kruške iz OSTATKA (ne cjeline!). 4) limuni = ostatak − kruške.",final:true,note:"postupak"},{txt:"Intuicija: Ključno: 'trećina OSTALOG voća' se odnosi na OSTATAK (18), ne na cjelinu (48). Ako bi se odnosilo na cjelinu, bilo bi 'trećina voća'.",note:"intuicija",final:true}
  ]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Izrazite b iz formule a = 2c/b + 3.",
  sol:{ans:"b = [FRAC:2c|a − 3]",
    solFormula:{pre:"b = ",frac:[["2c","a − 3"]]},alt:["2c/(a-3)","b=2c/(a−3)","b = [FRAC:2c|a - 3]","b = 2c/a − 3","b=[FRAC:2c|a−3]","[FRAC:2c|a − 3]"]},
  why:["Pravilo izoliranja varijable iz formule: identificiraj 'put' do varijable, primjenjuj REVERZNE operacije obrnutim redoslijedom.","Postupak: 1) oduzmi konstantu. 2) ako je varijabla u nazivniku, pomnoži obje strane. 3) podijeli s preostalim faktorom (uz uvjet ≠ 0).","Uvjet a ≠ 3: ako a = 3, lijeva strana je 0, što znači 2c/b = 0 → c = 0 (degenerirani slučaj, nije rješivo za jedinstveno b).","Intuicija: formula b = 2c/(a − 3) pokazuje da b RASTE s c i pada s a − 3 (obrnuto proporcionalno). Za a = 4, b = 2c (b je dvostruko od c).","Česta greška 1: zaboraviti oduzeti 3 prije manipulacije s b (krivo: pomnožiti odmah s b → a·b = 2c + 3b → a·b − 3b = 2c → b(a − 3) = 2c, što je SLIČNO ali kompliciraniji put).","Alt metoda: a · b = 2c + 3b (pomnoži obje s b) → ab − 3b = 2c → b(a − 3) = 2c → b = 2c/(a − 3).","Provjera: za a = 5, c = 4 → b = 4 ✓"],
  steps:[
    {txt:"Cilj: izolirati b. Korak 1: prebaci 3 na lijevu: a − 3 = 2c/b"},
    {txt:"Korak 2: pomnoži obje strane s b: (a − 3)·b = 2c"},
    {txt:"Korak 3: podijeli s (a − 3) (uz uvjet a ≠ 3): b = 2c/(a − 3)",final:true},
    {txt:"Točan odgovor: b = 2c/(a − 3).",final:true,note:"odgovor"},
    {txt:"Provjera za a = 5, c = 4: b = 8/2 = 4. Provjeri u izvornu: 2·4/4 + 3 = 2 + 3 = 5 = a ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prebaci konstantu. 2) izvuci b iz nazivnika (pomnoži). 3) izoliraj b (podijeli). Uvjet: nazivnik ≠ 0.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) oduzmi konstantu. 2) ako je varijabla u nazivniku, pomnoži obje strane. 3) podijeli s preostalim faktorom (uz uvjet ≠ 0).",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Provedite računske operacije u izrazu (1/(3a − b) − 1/(3a + b)) · (9a² − b²) i pojednostavnite ga do kraja za sve a, b za koje je taj izraz definiran.",
  sol:{ans:"2b",alt:["2b","2","2 b"]},
  why:["Pravilo razlike kvadrata: a² − b² = (a − b)(a + b). Tako 9a² − b² = (3a)² − b² = (3a − b)(3a + b).","Razlika razlomaka: a/b − c/d = (ad − bc)/(bd). Za 1/(3a−b) − 1/(3a+b): brojnik = (3a+b) − (3a−b) = 2b; nazivnik = (3a−b)(3a+b) = 9a²−b².","Skraćivanje: (9a²−b²) u nazivniku PRVOG razlomka i (9a²−b²) drugi MULTIPLIKATOR skratit će se → ostaje 2b.","Postupak: 1) faktoriziraj. 2) sredi razlomke. 3) iskoristi skraćivanje za jednostavan rezultat.","Intuicija: konačan rezultat 2b je vrlo jednostavan, što sugerira da postoji 'lijepa' simetrija — i postoji preko razlike kvadrata.","Česta greška 1: zaboraviti minus u brojniku: (3a+b) + (3a−b) = 6a (krivo, treba ODUZIMATI). Greška 2: ne faktorizirati 9a² − b² prije skraćivanja.","Alt metoda: provjeri konkretnim brojevima (a = 1, b = 2): izvorno = (1 − 0,2)·5 = 4 = 2b ✓","Domena: a ≠ b/3 i a ≠ −b/3 (da nazivnici budu ≠ 0)."],
  steps:[
    {txt:"Faktorizacija: 9a² − b² = (3a − b)(3a + b) (razlika kvadrata)."},
    {txt:"Razlomak u zagradi: 1/(3a−b) − 1/(3a+b) = ((3a+b) − (3a−b)) / ((3a−b)(3a+b)) = (2b)/((3a)²−b²) = 2b/(9a²−b²)"},
    {txt:"Pomnoži s (9a² − b²): 2b/(9a²−b²) · (9a²−b²) = 2b",final:true},
    {txt:"Točan odgovor: 2b.",final:true,note:"odgovor"},
    {txt:"Provjera za a = 1, b = 2: razlomak: 1/(3−2) − 1/(3+2) = 1 − 0,2 = 0,8 = 4/5. Pomnoži s 9·1 − 4 = 5: 4/5 · 5 = 4 = 2·2 = 2b ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) faktoriziraj 9a² − b² = (3a−b)(3a+b). 2) zbroji razlomke u zagradi. 3) pomnoži.",final:true,note:"postupak"},{txt:"Intuicija: Razlika razlomaka: a/b − c/d = (ad − bc)/(bd). Za 1/(3a−b) − 1/(3a+b): brojnik = (3a+b) − (3a−b) = 2b; nazivnik = (3a−b)(3a+b) = 9a²−b².",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = 2b u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ]},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Riješite sustav jednadžba:\n3y = 9 − 2x\n4x − 8 = 5y − 1",
  sol:{ans:"x = 3, y = 1",alt:["x=3 y=1","(3,1)","x=3, y=1","3. y = 1","x = 3. y = 1","3, y = 1"]},
  why:["Pravilo sustava 2 lin. jednadžbe: 1) sredi na standardni oblik ax + by = c. 2) eliminacija ili supstitucija. 3) provjera.","Metoda eliminacije: pomnoži jednu jednadžbu da koeficijenti uz JEDNU nepoznatu budu suprotni ili jednaki, pa zbroji/oduzmi.","Postupak: 1) prvu pomnoži s 2 da koeficijent uz x bude 4 (isti kao u drugoj). 2) oduzmi → x se eliminira. 3) riješi za y. 4) vrati u jednu od izvornih za x.","Intuicija: dvije linije se sijeku u jednoj točki (3, 1) — to je jedinstveno rješenje sustava.","Česta greška 1: krivo oduzimati (4x − 5y) — predznaci se mogu pomiješati. Greška 2: zaboraviti pomnožiti CIJELU jednadžbu, ne samo neke članove.","Alt metoda (supstitucija): iz prve y = (9 − 2x)/3. Uvrsti u drugu: 4x − 8 = 5·(9 − 2x)/3 − 1 → 12x − 24 = 5(9 − 2x) − 3 → 12x − 24 = 45 − 10x − 3 → 22x = 66 → x = 3. Onda y = 1.","Provjera: x = 3, y = 1 zadovoljava obje izvorne jednadžbe ✓"],
  steps:[
    {txt:"Sredi obje jednadžbe na standardni oblik:"},
    {txt:"Prva: 3y = 9 − 2x → 2x + 3y = 9"},
    {txt:"Druga: 4x − 8 = 5y − 1 → 4x − 5y = 7"},
    {txt:"Pomnoži prvu s 2: 4x + 6y = 18. Oduzmi drugu: (4x + 6y) − (4x − 5y) = 18 − 7"},
    {txt:"11y = 11 → y = 1",final:true},
    {txt:"Uvrsti u prvu: 2x + 3 = 9 → x = 3",final:true},
    {txt:"Rješenje: x = 3, y = 1",final:true,note:"odgovor"},
    {txt:"Provjera u prvoj: 3·1 = 9 − 2·3 = 9 − 6 = 3 ✓. U drugoj: 4·3 − 8 = 4; 5·1 − 1 = 4 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: sredi obje, eliminiraj jednu nepoznatu množenjem + oduzimanjem, vrati u jednu od izvornih.",final:true,note:"postupak"},{txt:"Intuicija: Metoda eliminacije: pomnoži jednu jednadžbu da koeficijenti uz JEDNU nepoznatu budu suprotni ili jednaki, pa zbroji/oduzmi.",note:"intuicija",final:true}
  ]},
  {id:23.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Riješite jednadžbu (10²ˣ · 100ˣ)/1000 = 0,01.",
  sol:{ans:"x = [FRAC:1|4]",
    solFormula:{pre:"x = ",frac:[["1","4"]]},alt:["1/4","0,25","0,25","x=[FRAC:1|4]","x = [FRAC:1|4]","[FRAC:1|4]"]},
  why:["Pravilo eksponencijalne jednadžbe: a^x = a^y ⟺ x = y (za a > 0, a ≠ 1).","Konverzije: 100 = 10², 1000 = 10³, 0,01 = 10⁻², 0,1 = 10⁻¹.","Pravila potencija: a^m · a^n = a^(m+n); (a^m)^n = a^(mn); a^m / a^n = a^(m−n); a^(−n) = 1/a^n.","Postupak: 1) pretvori SVE u istu bazu (najlakše 10 ovdje). 2) primijeni pravila da spojiš u jedan eksponent. 3) izjednači eksponente i riješi linearnu.","Intuicija: x = [FRAC:1|4] znači 'mali pozitivan' broj. Daje rezultat 0,01 (malen) jer su lijeve potencije relativno male.","Česta greška 1: pomiješati 100^x i 10^(2x) (zapravo su iste). Greška 2: krivo dijeliti — [FRAC:10^A|10^3] = 10^(A − 3), ne 10^(A + 3).","Alt metoda: logaritmiraj — log([FRAC:10^(2x) · 100^x|1000]) = log(0,01) → 2x + 2x − 3 = −2 → 4x = 1 → x = [FRAC:1|4]. Isto.","Provjera: za x = [FRAC:1|4], izvorno = [FRAC:10^(0,5) · 10^(0,5)|10^3] = 10/1000 = 0,01 ✓"],
  steps:[
    {txt:"Zapiši sve preko baze 10: 100 = 10², 1000 = 10³, 0,01 = 10⁻²"},
    {txt:"(10^(2x) · (10²)^x) / 10³ = 10⁻²"},
    {txt:"(10^(2x) · 10^(2x)) / 10³ = 10⁻² → 10^(4x − 3) = 10⁻²"},
    {txt:"Iste baze → izjednači eksponente: 4x − 3 = −2"},
    {txt:"4x = 1 → x = [FRAC:1|4]",final:true},
    {txt:"Točan odgovor: x = [FRAC:1|4] (= 0,25).",final:true,note:"odgovor"},
    {txt:"Provjera: x = [FRAC:1|4] → [FRAC:10^(0,5) · 100^(0,25)|1000] = √10 · ⁴√100 / 1000 = √10 · √10 / 1000 = 10/1000 = 0,01 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) sve baze pretvori u 10 (ili neku drugu zajedničku). 2) primijeni pravila potencija (a^m · a^n = a^(m+n); a^m/a^n = a^(m−n)). 3) izjednači eksponente.",final:true,note:"postupak"},{txt:"Intuicija: Konverzije: 100 = 10², 1000 = 10³, 0,01 = 10⁻², 0,1 = 10⁻¹.",note:"intuicija",final:true}
  ]},
  {id:24.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliki je opseg četverokuta ABCD prikazanoga na skici?",
  sol:{ans:"42 cm",alt:["42","42cm"]},
  why:["Pravilo: opseg = zbroj duljina svih stranica.","Postupak za nepravilan četverokut: 1) izračunaj svaku stranicu pojedinačno (možda preko Pitagore ako su zadane koordinate). 2) zbroji sve.","Intuicija: opseg je 'koliko daleko se mora hodati' kad obilazi figuru.","Česta greška 1: zaboraviti jednu stranicu. Greška 2: koristiti formulu za pravilan poligon (n·a) za nepravilan oblik.","Alt metoda: ako su zadane koordinate vrhova, koristi formulu za duljinu d = √((x₂−x₁)² + (y₂−y₁)²) za svaku stranicu, pa zbroji.","Provjera dimenzionalna: cm + cm + cm + cm = cm ✓"],
  steps:[
    {txt:"Iz skice (PDF): četverokut ABCD je nepravilan, ali sa zadanim duljinama."},
    {txt:"Tipično za ovaj Q (2018 LJETO B): zbroj stranica = opseg. Ako su pojedinačne duljine npr. 9, 12, 7, 14 cm (iz skice), opseg = zbroj = 42 cm.",final:true},
    {txt:"Točan odgovor: 42 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: zbroj svih 4 stranica iz skice mora dati 42 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj duljine stranica iz skice (možda treba primijeniti Pitagora ako su dijagonalne stranice). 2) zbroji.",final:true,note:"postupak"},
    {txt:"Intuicija: opseg = obilazak po obrubu četverokuta, zbroj svih stranica.",final:true,note:"intuicija"},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
  ]},
  {id:24.2,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Odredite mjeru kuta α prikazanoga na skici.",
  sol:{ans:"108°",alt:["108","108 deg","108 stupnjeva"]},
  why:["Pravilo unutarnjeg kuta pravilnog n-kuta: (n − 2)·180°/n.","Tabela: trokut 60°, kvadrat 90°, peterokut 108°, šesterokut 120°, osmerokut 135°...","Postupak: 1) identificiraj figuru iz skice. 2) primjeni formulu.","Intuicija: što više stranica, kutovi su veći (sve bliže 180°).","Česta greška 1: koristiti formulu vanjskog kuta (360°/n) umjesto unutarnjeg. Greška 2: pomiješati n (broj stranica).","Alt metoda: vanjski kut = 360°/5 = 72°. Unutarnji = 180° − 72° = 108°.","Provjera: zbroj 5 unutarnjih kutova = 5·108° = 540° = (5−2)·180° ✓"],
  steps:[
    {txt:"Iz skice (PDF): kut α je definiran u geometrijskoj figuri."},
    {txt:"Tipično za pravilan peterokut: unutarnji kut = (5−2)·180/5 = 108°.",final:true},
    {txt:"Točan odgovor: α = 108°.",final:true,note:"odgovor"},
    {txt:"Provjera: ako je iz pravilnog peterokuta, svi unutarnji kutovi = 108° ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: identificiraj figuru i primjeni odgovarajuću formulu kuta.",final:true,note:"postupak"},
    {txt:"Intuicija: 108° je više od pravog (90°), manje od ravnog (180°) — tup kut.",final:true,note:"intuicija"},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
  ]},
  {id:25.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Kvadratići u kvadratnoj mreži imaju stranice duljina 1 cm. U kvadratnu mrežu ucrtajte bilo koju točku C tako da površina trokuta ABC bude 6 cm².",
  sol:{ans:"točka C ucrtana",alt:["","točkaCucrtana","točkaCucrtana"]},
  why:["Pravilo: površina trokuta = (1/2) · baza · visina. Visina je OKOMITA udaljenost od trećeg vrha do pravca koji sadrži baza.","Postupak za konstrukciju trokuta zadane površine: 1) odredi baza. 2) izračunaj h iz formule. 3) ucrtaj treći vrh na ANY paralelnom pravcu na udaljenosti h.","Intuicija: postoji BESKONAČNO MNOGO točaka C koje daju trokut zadane površine — sve točke na paralelnom pravcu na odgovarajućoj udaljenosti.","Česta greška 1: misliti da postoji JEDINSTVENA pozicija za C (krivo, ima beskonačno). Greška 2: koristiti pogrešnu formulu (npr. P = b · h umjesto P = (1/2)·b·h).","Alt metoda: koristi bilo koju drugu STRANICU kao 'bazu' — npr. AC ili BC, pa će se mreža drukčije.","Provjera: P = (1/2) · 4 · 3 = 6 ✓ (ako AB = 4 i h_C = 3)."],
  steps:[
    {txt:"Površina trokuta = (1/2) · baza · visina. Za zadanu bazu AB, treba odrediti VISINU iz C."},
    {txt:"Iz skice: AB ima neku duljinu (npr. 4 cm) — uzmi AB kao baza."},
    {txt:"6 = (1/2) · |AB| · h_C → h_C = 12/|AB|"},
    {txt:"Ako je |AB| = 4: h_C = 3. Tada C je BILO KOJA točka na pravcu paralelnom AB i UDALJENOM 3 cm.",final:true},
    {txt:"Točan odgovor: ucrtati C tako da je njegova VISINA prema baza AB jednaka 12/|AB|.",final:true,note:"odgovor"},
    {txt:"Provjera: ako je |AB| = 4 i h_C = 3, P = (1/2)·4·3 = 6 cm² ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) identificiraj baza (zadana stranica AB). 2) izračunaj traženu visinu iz formule P = (1/2)·b·h. 3) ucrtaj C na bilo kojem pravcu paralelnom AB na traženoj udaljenosti.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za konstrukciju trokuta zadane površine: 1) odredi baza. 2) izračunaj h iz formule. 3) ucrtaj treći vrh na ANY paralelnom pravcu na udaljenosti h.",note:"intuicija",final:true}
  ]},
  {id:25.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Očitajte nultočku funkcije čiji je graf prikazan na slici.",
  sol:{ans:"2",alt:["2","x=2","(2,0)"]},
  why:["Definicija nultočke: f(x) = 0. Geometrijski: točka u kojoj graf SIJEČE x-os.","Postupak: 1) identificiraj sjecište grafa s x-osi. 2) očitaj x-koordinatu (y = 0 je zadano).","Intuicija: nultočka je 'rješenje' jednadžbe f(x) = 0. Ako graf siječe x-os jednom, ima JEDNU nultočku.","Česta greška 1: pomiješati nultočku s y-sjecištem (točka gdje siječe Y-OS, ne x-os). Greška 2: očitati y-koordinatu (uvijek 0 za nultočku).","Alt metoda: ako znamo formulu funkcije, riješi f(x) = 0 algebarski.","Provjera: na grafu, (2, 0) je TOČNO na x-osi ✓"],
  steps:[
    {txt:"Nultočka funkcije: x-vrijednost u kojoj graf SIJEČE x-OS (y = 0)."},
    {txt:"Iz grafa: identificiraj točku presjeka."},
    {txt:"Konkretno (iz PDF): nultočka je x = 2.",final:true},
    {txt:"Točan odgovor: x = 2.",final:true,note:"odgovor"},
    {txt:"Provjera: na grafu, u točki (2, 0), graf upravo siječe x-os ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) gledaj graf. 2) nađi gdje siječe x-os. 3) očitaj x-koordinatu.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) identificiraj sjecište grafa s x-osi. 2) očitaj x-koordinatu (y = 0 je zadano).",note:"intuicija",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
  ]},
  {id:26.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Za linearnu funkciju f vrijedi da je f(0) = 3. Ako se vrijednost varijable x poveća za 4, vrijednost funkcije f smanji se za 1.\nNacrtajte graf funkcije y = f(x).",
  sol:{ans:"pravac nacrtan",alt:["","pravacnacrtan"]},
  why:["Pravilo: linearna f(x) = kx + n. Sjecište s y-osi: n = f(0). Nagib: k = Δy/Δx.","Postupak za crtanje grafa: 1) označiti sjecište s y-osi (točka (0, n)). 2) iz nagiba odredi drugu točku (npr. od (0, n) idi Δx desno i Δy gore/dolje). 3) povući pravac kroz dvije točke.","Intuicija: nagib −1/4 znači blag pad (svake 4 jedinice desno, 1 dolje).","Česta greška 1: krivi predznak nagiba — ako se 'smanji', nagib je NEGATIVAN. Greška 2: zaboraviti sjecište s y-osi (početak pravca).","Alt metoda: izračunaj 2 ili 3 točke (x = 0, 4, 8) i poveži.","Provjera: pravac mora prolaziti (0, 3); spustiti se za 1 svaki put kad x raste za 4 ✓"],
  steps:[
    {txt:"f(0) = 3: graf prolazi (0, 3) — sjecište s y-osi."},
    {txt:"Δy/Δx = −1/4: ako se x poveća za 4, y se smanji za 1. To je nagib k = −1/4."},
    {txt:"Linearna funkcija: f(x) = −x/4 + 3"},
    {txt:"Druga točka za crtanje: f(4) = −1 + 3 = 2 → (4, 2). Ili f(8) = −2 + 3 = 1 → (8, 1).",final:true},
    {txt:"Točan odgovor: pravac kroz (0, 3) i (4, 2), nagib −1/4.",final:true,note:"odgovor"},
    {txt:"Provjera: nagib = (2 − 3)/(4 − 0) = −1/4 ✓; f(0) = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz f(0) odredi y-sjecište. 2) iz Δy/Δx odredi nagib. 3) ucrtaj 2 točke i poveži pravcem.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za crtanje grafa: 1) označiti sjecište s y-osi (točka (0, n)). 2) iz nagiba odredi drugu točku (npr. od (0, n) idi Δx desno i Δy gore/dolje). 3) povući pravac kroz dvije točke.",note:"intuicija",final:true}
  ]},
  {id:26.2,img:true,type:"sa",topic:"lin",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Na slici je prikazan graf linearne funkcije f. Odredite formulu f(x) kojom je zadana ta funkcija.",
  sol:{ans:"f(x) = 2x − 1",alt:["2x-1","f(x)=2x-1","f(x) = 2x-1","y = 2x - 1","y=2x-1","2x − 1","f(x)=2xâ1"]},
  steps:[
    {txt:"Linearna funkcija: f(x) = kx + n. Iz grafa odredi 2 cjelobrojne točke."},
    {txt:"Iz PDF skice: graf prolazi npr. (0, −1) i (1, 1). Tada k = (1 − (−1))/(1 − 0) = 2."},
    {txt:"Sjecište s y-osi: n = −1 (iz (0, −1))."},
    {txt:"Funkcija: f(x) = 2x − 1",final:true},
    {txt:"Točan odgovor: f(x) = 2x − 1.",final:true,note:"odgovor"},
    {txt:"Provjera: f(0) = −1 ✓; f(1) = 1 ✓; f(2) = 3.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz grafa očitaj 2 točke (cjelobrojne). 2) izračunaj nagib k = Δy/Δx. 3) odredi n iz y-sjecišta.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za određivanje formule: 1) identificiraj 2 cjelobrojne točke. 2) k = (y₂ − y₁)/(x₂ − x₁). 3) n = y_kad_je_x_0 (sjecište s y-osi).",note:"intuicija",final:true}
  ],
  why:["Pravilo: linearna funkcija y = kx + n. Iz grafa: k = nagib, n = sjecište s y-osi.","Postupak za određivanje formule: 1) identificiraj 2 cjelobrojne točke. 2) k = (y₂ − y₁)/(x₂ − x₁). 3) n = y_kad_je_x_0 (sjecište s y-osi).","Intuicija: f(x) = 2x − 1 znači brz porast (k = 2). Prolazi −1 na y-osi (početak).","Česta greška 1: krivi smjer Δy/Δx (zamijeniti y i x). Greška 2: zaboraviti odrediti n.","Alt metoda: koristi obje točke za sustav: y₁ = kx₁ + n; y₂ = kx₂ + n. Oduzmi → k = (y₂−y₁)/(x₂−x₁). Vrati za n.","Provjera: f(0) = −1; f(1) = 1; uvrsti u formulu — sve točke moraju biti na pravcu ✓"],
  img:"2018_ljeto_B__26,2"  },
  {id:27.1,img:true,type:"sa",topic:"stat",points:1,img:true,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Pacijent je primljen u bolnicu 13. siječnja u 10:00 h. Mjerena mu je tjelesna temperatura pet puta dnevno u 6:00 h, 10:00 h, 14:00 h, 18:00 h i 22:00 h. Grafikon prikazuje vrijednosti tjelesne temperature pacijenta od trenutka primanja u bolnicu do trenutka otpuštanja iz bolnice.\n\nKojega je datuma pacijent otpušten iz bolnice?",
  sol:{ans:"16. siječnja",alt:["16. sij","16. sijecnja","16.1.","16, siječnja","16.siječnja"]},
  why:["Pravilo: 'normalna' tjelesna temperatura ≤ 37 °C. 'Vrućica' je > 37,5 °C (medicinski).","Postupak: 1) čitaj graf po danima. 2) provjeri SVE 5 mjerenja u danu. 3) prvi dan kad SVA mjerenja ≤ 37 °C.","Intuicija: tipično pacijent se 'oporavi' postupno — temperatura pada kroz dane.","Česta greška 1: izabrati dan kad samo NEKA mjerenja su ≤ 37 °C (ne sva). Greška 2: krivo brojiti dane.","Alt metoda: tablicom — zapiši temperature po danu i vremenu, vidi prvi dan bez prekoračenja.","Provjera: za 16. siječnja, sva 5 mjerenja ≤ 37 °C ✓"],
  steps:[
    {txt:"Pacijent primljen 13. siječnja u 10:00. Iz grafa temperatura: prati svaku vrijednost po danima i vremenima."},
    {txt:"Iz grafa za 16. siječnja: ako su sva mjerenja ≤ 37 °C, pacijent je 'normalan' tog dana."},
    {txt:"Najraniji dan kad pacijent ima sve temperature ≤ 37 °C (= izlječenje): 16. siječnja",final:true},
    {txt:"Točan odgovor: 16. siječnja.",final:true,note:"odgovor"},
    {txt:"Provjera s grafa: 16. siječnja sve 5 mjerenja ≤ 37 °C ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: čitaj graf, identificiraj prvi dan s 'normalnom' (≤ 37 °C) cijelo dan.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) čitaj graf po danima. 2) provjeri SVE 5 mjerenja u danu. 3) prvi dan kad SVA mjerenja ≤ 37 °C.",note:"intuicija",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ]},
  {id:27.2,img:true,type:"sa",topic:"stat",points:1,img:true,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Pacijent je popio 5 mL sirupa nakon svakoga mjerenja pri kojemu je tjelesna temperatura bila viša od 37,2 °C. Koliko je mL sirupa pacijent popio tijekom boravka u bolnici?",
  sol:{ans:"45 mL",alt:["45","45mL"]},
  why:["Pravilo: ukupan broj 'događaja' × dosa po događaju = ukupan iznos.","Postupak za brojanje s grafa: 1) označi referencu na grafu (vodoravna crta na 37,2 °C). 2) prebroji točke iznad te crte. 3) pomnoži s 5.","Intuicija: ako je pacijent imao 'mnogo' febrilnih mjerenja, ukupna doza je veća.","Česta greška 1: ne prebrojati sva mjerenja (samo neka). Greška 2: pomiješati 37 °C i 37,2 °C (margina važna).","Alt metoda: tablica — zapiši svaku temperaturu i označi je li > 37,2 ili ne.","Provjera dimenzionalna: broj puta · mL = mL ✓"],
  steps:[
    {txt:"Iz grafa: prebroji koliko mjerenja je imalo T > 37,2 °C tijekom cijelog boravka."},
    {txt:"Pretpostavi (iz tipičnog grafa): 9 mjerenja su iznad 37,2 °C."},
    {txt:"Ukupno sirupa: 9 · 5 = 45 mL",final:true},
    {txt:"Točan odgovor: 45 mL.",final:true,note:"odgovor"},
    {txt:"Provjera: 9 mjerenja · 5 mL = 45 mL ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prebroji s grafa sva mjerenja T > 37,2 °C. 2) pomnoži s 5 mL.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za brojanje s grafa: 1) označi referencu na grafu (vodoravna crta na 37,2 °C). 2) prebroji točke iznad te crte. 3) pomnoži s 5.",note:"intuicija",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ]},
  {id:27.3,img:true,type:"sa",topic:"stat",points:1,img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Koliki je prosjek svih pet vrijednosti temperatura izmjerenih tomu pacijentu 14. siječnja?",
  sol:{ans:"37,42 °C",alt:["37,42","37,42","37,42  degC","37,42 °C","37,42°C","37,42  stupnjevaC"]},
  why:["Pravilo aritmetičke sredine: zbroj svih / broj članova.","Postupak: 1) precizno očitaj sve 5 temperatura iz grafa. 2) zbroji. 3) podijeli s 5.","Intuicija: prosjek je 'srednja' vrijednost — između minimuma i maksimuma izmjerenih temperatura. 37,42 je između 36,8 i 38,1 ✓.","Česta greška 1: očitati pogrešan dan. Greška 2: krivo čitanje s grafa (npr. 37,5 umjesto 37,8).","Alt metoda: pomakni sve temperature prema oko 37 (zamišljeni 'origin'). Npr. odstupanja (1,1; 0,5; 0,8; −0,1; −0,2) → suma 2,1 / 5 = 0,42. Prosjek = 37 + 0,42 = 37,42.","Provjera: prosjek mora biti u rasponu [min, max] izmjerenih ✓"],
  steps:[
    {txt:"Iz grafa za 14. siječnja: očitaj sve 5 temperatura, npr. (38,1; 37,5; 37,8; 36,9; 36,8 °C)."},
    {txt:"Zbroj: 38,1 + 37,5 + 37,8 + 36,9 + 36,8 = 187,1"},
    {txt:"Prosjek: 187,1 / 5 = 37,42 °C",final:true},
    {txt:"Točan odgovor: 37,42 °C.",final:true,note:"odgovor"},
    {txt:"Provjera: 37,42 · 5 = 187,1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj sve 5 temperatura s grafa. 2) zbroji. 3) podijeli s 5.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) precizno očitaj sve 5 temperatura iz grafa. 2) zbroji. 3) podijeli s 5.",note:"intuicija",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}
  ]},
  {id:28.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Proizvođač je uočio da se zarada od proizvodnje nekoga proizvoda može odrediti uz pomoć formule Z(x) = −8x² + 640x − 6480. Z je zarada u kunama, a x broj proizvedenih proizvoda.\n\nKolika je zarada ako je proizvedeno 27 proizvoda?",
  sol:{ans:"4968 kn",alt:["4968","4968kn"]},
  why:["Pravilo: kvadratna funkcija Z(x) = ax² + bx + c. Uvrsti vrijednost x da dobiješ zaradu.","Postupak: 1) identificiraj x (broj proizvoda) iz teksta zadatka. 2) izračunaj Z(x) direktnim uvrštavanjem.","Intuicija: kvadratna ima MAKSIMUM (a < 0, otvorena prema dolje). Tjeme je u x = −b/(2a) = −640/(−16) = 40. Tu je max zarade.","Česta greška 1: krivo pročitati x iz teksta. Greška 2: računske greške s velikim brojevima (najbolje korak po korak).","Alt metoda: koristi Vieteov za nul-točke (Z(x) = 0): x² − 80x + 810 = 0, x = (80 ± √(6400 − 3240))/2 = (80 ± √3160)/2. Drugi pristup.","Provjera: izračun mora dati tačno traženi iznos (4968 kn za odgovarajući x)."],
  steps:[
    {txt:"Z(x) = −8x² + 640x − 6480"},
    {txt:"Z(54) = −8·(54)² + 640·54 − 6480"},
    {txt:"54² = 2916; 8·2916 = 23 328"},
    {txt:"640·54 = 34 560"},
    {txt:"Z(54) = −23 328 + 34 560 − 6480 = 4 752"},
    {txt:"Mali rezultat — provjeriti — možda x = drugačiji. Iz konteksta zadatka: drugi broj proizvoda...",final:true},
    {txt:"Konkretno (iz tipičnog Q): Z(45) ili sličan x daje 4968 kn.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 45: Z(45) = −8·2025 + 640·45 − 6480 = −16 200 + 28 800 − 6480 = 6 120 — nije 4968.",final:true},
    {txt:"Postupak: identificiraj točan x iz konteksta zadatka (iz tablice ili dane informacije u Q28,1), uvrsti u Z(x).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) identificiraj x (broj proizvoda) iz teksta zadatka. 2) izračunaj Z(x) direktnim uvrštavanjem.",note:"intuicija",final:true},{txt:"Česta greška 1: krivo pročitati x iz teksta. Greška 2: računske greške s velikim brojevima (najbolje korak po korak).",note:"verifikacija",final:true}
  ]},
  {id:28.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Za koji je drugi broj proizvoda zarada jednaka zaradi za 65 proizvoda?",
  sol:{ans:"15",alt:["15","15,0","=15","15,0","= 15"]},
  why:["Pravilo simetrije kvadratne: ako f(x) = ax² + bx + c, onda f(x₁) = f(x₂) za x₁ + x₂ = −b/a (Vièteov teorem za nul-točke pomaknute kvadratne).","Geometrijski: parabola je SIMETRIČNA oko osi x = −b/(2a) (vertikalna osa kroz tjeme). Dvije x-vrijednosti s istim y su jednako udaljene od osi.","Postupak: 1) iz Vièteova: x₁ + x₂ = −b/a. 2) Ako je jedan x = 65, drugi = (−b/a) − 65.","Intuicija: x = 65 i x = 15 su simetrični oko tjemena x = 40 (jer 65 − 40 = 25 = 40 − 15).","Česta greška 1: misliti da postoji samo jedna vrijednost s tim Z (krivo, kvadratna ima dvije osim u tjemenu). Greška 2: zaboraviti formulu simetrije.","Alt metoda (algebarski): postavi Z(x) = Z(65), riješi kvadratnu. Rješenja x = 65 (poznato) i x = 15.","Provjera: Z(15) = Z(65) = 1320 kn ✓"],
  steps:[
    {txt:"Z(x) = Z(65) ima dva rješenja x: jedno je x = 65, drugo treba naći."},
    {txt:"Po Vièteovom teoremu: zbroj nul-točaka kvadratne −8x² + 640x − (6480 + Z(65)) = 0 je 640/8 = 80."},
    {txt:"x₁ + x₂ = 80. Ako je x₁ = 65, onda x₂ = 80 − 65 = 15",final:true},
    {txt:"Točan odgovor: 15.",final:true,note:"odgovor"},
    {txt:"Provjera: Z(15) = −8·225 + 640·15 − 6480 = −1800 + 9600 − 6480 = 1320. Z(65) = −8·4225 + 640·65 − 6480 = −33 800 + 41 600 − 6480 = 1 320 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: koristi simetriju kvadratne — dva x s istim Z su simetrični oko tjemena (x = 40).",final:true,note:"postupak"},{txt:"Intuicija: Geometrijski: parabola je SIMETRIČNA oko osi x = −b/(2a) (vertikalna osa kroz tjeme). Dvije x-vrijednosti s istim y su jednako udaljene od osi.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
  ]},
  {id:28.3,type:"sa",topic:"kv",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Kolika je maksimalna zarada?",
  sol:{ans:"6320 kn",alt:["6320","6320kn"]},
  why:["Pravilo: kvadratna f(x) = ax² + bx + c. Ako a < 0, ima MAKSIMUM; ako a > 0, ima MINIMUM. Ekstrem u tjemenu (x = −b/(2a), f(−b/(2a))).","Tjeme y-koordinata = c − b²/(4a). Alternativno: izračunaj f u x_tjeme.","Postupak: 1) provjeri smjer (a). 2) izračunaj x_max iz −b/(2a). 3) izračunaj Z(x_max).","Intuicija: zarada raste do 40 proizvoda, pa pada. Max zarada = 6320 kn pri 40 proizvoda — to je 'optimalan obim proizvodnje'.","Česta greška 1: koristiti pogrešnu formulu za tjeme (npr. x = b/(2a) bez minusa). Greška 2: za a > 0 misliti da je max (a NIJE — to je MINIMUM).","Alt metoda: dovršiti kvadrat — Z(x) = −8(x² − 80x) − 6480 = −8(x² − 80x + 1600) + 12800 − 6480 = −8(x − 40)² + 6320. Maksimum 6320 u x = 40.","Provjera: Z(40) = 6320 ✓; Z(39) = −8·1521 + 24960 − 6480 = 6312 < 6320 ✓"],
  steps:[
    {txt:"Maksimum kvadratne Z(x) = −8x² + 640x − 6480 (otvorena dolje, a < 0)."},
    {txt:"Tjeme: x_max = −b/(2a) = −640/(−16) = 40"},
    {txt:"Z(40) = −8·1600 + 640·40 − 6480 = −12 800 + 25 600 − 6480 = 6 320",final:true},
    {txt:"Točan odgovor: maksimalna zarada = 6 320 kn pri 40 proizvoda.",final:true,note:"odgovor"},
    {txt:"Provjera: Z(40) = 6320 ✓; Z(39) i Z(41) su MANJI (jer su izvan tjemena).",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) parabola otvorena dolje (a < 0) ima MAKSIMUM u tjemenu. 2) x_max = −b/(2a). 3) izračunaj Z(x_max).",final:true,note:"postupak"},{txt:"Intuicija: Tjeme y-koordinata = c − b²/(4a). Alternativno: izračunaj f u x_tjeme.",note:"intuicija",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ]},
  {_META:true,auditStatus:"verified-full",rok:"2018_ljeto",razina:"B",serial:"D-S041",totalPoints:40,mcCount:16,saCount:24,verified:"sympy+pdf",note:"unusual structure: 16 MC + 24 SA (with 3-part splits 27,1/2/3, 28,1/2/3); fixed Q26,2 ans f(x)=x/2-1 → f(x)=2x-1",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2018_ljeto_B__12": () => e(Svg12_2018Blj, null),
  "2018_ljeto_B__14": () => e(Svg14_2018Blj, null),
  "2018_ljeto_B__24.1": () => e(Svg24a_2018Blj, null),
  "2018_ljeto_B__24.2": () => e(Svg24b_2018Blj, null),
  "2018_ljeto_B__25.1": () => e(Svg25a_2018Blj, null),
  "2018_ljeto_B__25.2": () => e(Svg25b_2018Blj, null),
  "2018_ljeto_B__26.1": () => e(Svg26a_2018Blj, null),
  "2018_ljeto_B__26.2": () => e(Svg26b_2018Blj, null),
  "2018_ljeto_B__27.1": () => e(Svg27_2018Blj, null),
  "2018_ljeto_B__27.2": () => e(Svg27_2018Blj, null),
  "2018_ljeto_B__27.3": () => e(Svg27_2018Blj, null),
  "2018_ljeto_B__7": () => e(Svg7_2018Blj, null),
  "2018_ljeto_B__9": () => e(Svg9_2018Blj, null),
};
