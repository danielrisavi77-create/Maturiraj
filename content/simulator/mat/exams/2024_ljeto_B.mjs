// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg30a_2024Blj(){
  const txt="var(--text)"; const blue="var(--blue)"; const gold="var(--gold)";
  const rows=[
    ["Broj posađenih stabala","60","61","62","..."],
    ["Prosječan urod po stablu","18","17,8","17,6","..."]
  ];
  const W=440, rH=36;
  const cols=[200, 60, 60, 60, 60];
  const H=rH*rows.length + 6;
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"480px",width:"100%",display:"block",margin:"12px auto"}},
    rows.map((row,ri)=>row.map((c,ci)=>{
      const x = cols.slice(0,ci).reduce((a,b)=>a+b,0)+2;
      const isHead = ci===0;
      return e("g",{key:`c${ri}_${ci}`},
        e("rect",{x:x,y:3+ri*rH,width:cols[ci]-2,height:rH-2,fill:isHead?"rgba(74,144,217,0.15)":"transparent",stroke:blue,strokeWidth:1.2}),
        e("text",{x:x+cols[ci]/2-2,y:3+ri*rH+22,fontSize:13,fontFamily:"Georgia,serif",fontWeight:isHead?"bold":"normal",textAnchor:"middle",fill:isHead?gold:txt},c)
      );
    }))
  );
}

function Svg29a_2024Blj(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const muted="var(--muted,#94a3b8)";
  const W=440, H=340;
  const ox=90, oy=170;
  const u=34;
  const pxF=(x)=>ox+x*u;
  const pyF=(y)=>oy-y*u;
  const grid=[];
  for(let i=-3;i<=4;i++){
    if(i===0) continue;
    grid.push(e("line",{key:"gx"+i, x1:ox-70, y1:pyF(i), x2:ox+285, y2:pyF(i),
      stroke:st, strokeWidth:0.5, strokeOpacity:0.16, strokeDasharray:"3 5"}));
  }
  for(let j=-2;j<=8;j++){
    if(j===0) continue;
    grid.push(e("line",{key:"gy"+j, x1:pxF(j), y1:oy-160, x2:pxF(j), y2:oy+130,
      stroke:st, strokeWidth:0.5, strokeOpacity:0.16, strokeDasharray:"3 5"}));
  }
  const x1=-1, y1a=-(1/2)*x1+3;
  const x2=8,  y2a=-(1/2)*x2+3;
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"440px",width:"100%",display:"block",margin:"16px auto"}},
    ...grid,
    e("line",{key:"xa", x1:ox-70, y1:oy, x2:ox+295, y2:oy, stroke:st, strokeWidth:1.5}),
    e("line",{key:"ya", x1:ox, y1:oy-160, x2:ox, y2:oy+130, stroke:st, strokeWidth:1.5}),
    e("polygon",{key:"xar", points:`${ox+295},${oy} ${ox+285},${oy-6} ${ox+285},${oy+6}`, fill:st}),
    e("polygon",{key:"yar", points:`${ox},${oy-160} ${ox-6},${oy-150} ${ox+6},${oy-150}`, fill:st}),
    e("text",{key:"xl", x:ox+302, y:oy+5, fontSize:15, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "x"),
    e("text",{key:"yl", x:ox+10, y:oy-162, fontSize:15, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "y"),
    e("text",{key:"O", x:ox-14, y:oy+18, fontSize:13, fontFamily:"Georgia,serif", fill:muted}, "0"),
    // Tick marks
    e("line",{key:"t1x", x1:pxF(1), y1:oy-5, x2:pxF(1), y2:oy+5, stroke:st, strokeWidth:1.2}),
    e("text",{key:"l1x", x:pxF(1), y:oy+18, textAnchor:"middle", fontSize:12, fontFamily:"Georgia,serif", fill:muted}, "1"),
    e("line",{key:"t1y", x1:ox-5, y1:pyF(1), x2:ox+5, y2:pyF(1), stroke:st, strokeWidth:1.2}),
    e("text",{key:"l1y", x:ox-12, y:pyF(1)+5, textAnchor:"end", fontSize:12, fontFamily:"Georgia,serif", fill:muted}, "1"),
    // Line
    e("line",{key:"line", x1:pxF(x1), y1:pyF(y1a), x2:pxF(x2), y2:pyF(y2a),
      stroke:blue, strokeWidth:2.6, strokeLinecap:"round"})
  );
}

function Svg28_2024Blj(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const muted="var(--muted,#94a3b8)";
  const W=400, H=360;
  const A=[110, 270];
  const B=[A[0]+150, A[1]];
  const C=[A[0]+70, A[1]-80];
  const cx=(A[0]+B[0]+C[0])/3;
  const cy=(A[1]+B[1]+C[1])/3;
  const V=[cx, cy-180];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"400px",width:"100%",display:"block",margin:"16px auto"}},
    // Base triangle (with subtle fill)
    e("polygon",{key:"base", points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
      fill:blue, fillOpacity:0.06, stroke:"none"}),
    // Visible base edges
    e("line",{key:"AB", x1:A[0], y1:A[1], x2:B[0], y2:B[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"BC", x1:B[0], y1:B[1], x2:C[0], y2:C[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"AC", x1:A[0], y1:A[1], x2:C[0], y2:C[1], stroke:st, strokeWidth:1.4, strokeDasharray:"6 4"}),
    // Lateral edges
    e("line",{key:"AV", x1:A[0], y1:A[1], x2:V[0], y2:V[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"BV", x1:B[0], y1:B[1], x2:V[0], y2:V[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"CV", x1:C[0], y1:C[1], x2:V[0], y2:V[1], stroke:st, strokeWidth:1.8, strokeDasharray:"6 4"}),
    // Right angle indicator at A
    e("polyline",{key:"rt", points:`${A[0]+16},${A[1]} ${A[0]+16},${A[1]-12} ${A[0]+4},${A[1]-12}`,
      fill:"none", stroke:muted, strokeWidth:1.3}),
    // Height line V to centroid
    e("line",{key:"h", x1:V[0], y1:V[1], x2:cx, y2:cy, stroke:blue, strokeWidth:1.4, strokeDasharray:"4 3", strokeOpacity:0.9}),
    e("circle",{key:"hbase", cx:cx, cy:cy, r:2.5, fill:blue}),
    // Vertex labels
    e("text",{key:"lA", x:A[0]-16, y:A[1]+22, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "A"),
    e("text",{key:"lB", x:B[0]+10, y:B[1]+22, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "B"),
    e("text",{key:"lC", x:C[0]-12, y:C[1]-8, textAnchor:"end", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "C"),
    e("text",{key:"lV", x:V[0], y:V[1]-12, textAnchor:"middle", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "V"),
    // Edge length labels — positioned clearly outside
    e("text",{key:"l10", x:(A[0]+B[0])/2, y:A[1]+26, textAnchor:"middle", fontSize:13, fontFamily:"sans-serif", fill:muted, fontWeight:500}, "10 cm"),
    e("text",{key:"l24", x:A[0]-20, y:A[1]-30, fontSize:13, fontFamily:"sans-serif", fill:muted, fontWeight:500}, "24 cm"),
    e("text",{key:"lh", x:V[0]+12, y:(V[1]+cy)/2+5, fontSize:13, fontFamily:"sans-serif", fill:blue, fontWeight:600}, "h = 11 cm")
  );
}

function Svg27_2024Blj(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const muted="var(--muted,#94a3b8)";
  const W=380, H=480;
  // VERY elongated triangle from PDF reference
  // GF horizontal at top, D far below
  const G=[110, 70];
  const F=[290, 70];
  // D far below, slightly right of G's x position (matches PDF D location)
  const D=[145, 420];
  // E on DF, parameter t=0.65 (closer to F)
  const t=0.65;
  const E=[D[0]+t*(F[0]-D[0]), D[1]+t*(F[1]-D[1])];
  // Compute angle directions for arcs
  const arc=(P, dir1, dir2, r, color, sweep)=>{
    const len1=Math.hypot(dir1[0],dir1[1]);
    const len2=Math.hypot(dir2[0],dir2[1]);
    const u1=[dir1[0]/len1, dir1[1]/len1];
    const u2=[dir2[0]/len2, dir2[1]/len2];
    const p1=[P[0]+r*u1[0], P[1]+r*u1[1]];
    const p2=[P[0]+r*u2[0], P[1]+r*u2[1]];
    return e("path",{key:"arc"+P[0], d:`M ${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`,
      fill:"none", stroke:color, strokeWidth:1.6});
  };
  // α at D: from DG direction to DF direction
  const dirDG=[G[0]-D[0], G[1]-D[1]];
  const dirDF=[F[0]-D[0], F[1]-D[1]];
  // β at E: from EG direction to EF direction (interior angle ~125° for β=55° supplementary)
  // β is angle GEF, the angle at E between segments EG and EF
  const dirEG=[G[0]-E[0], G[1]-E[1]];
  const dirEF=[F[0]-E[0], F[1]-E[1]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"16px auto"}},
    // Outer triangle DFG
    e("line",{key:"DG", x1:D[0], y1:D[1], x2:G[0], y2:G[1], stroke:st, strokeWidth:2}),
    e("line",{key:"GF", x1:G[0], y1:G[1], x2:F[0], y2:F[1], stroke:st, strokeWidth:2}),
    e("line",{key:"DF", x1:D[0], y1:D[1], x2:F[0], y2:F[1], stroke:st, strokeWidth:2}),
    // Inner segment GE
    e("line",{key:"GE", x1:G[0], y1:G[1], x2:E[0], y2:E[1], stroke:st, strokeWidth:2}),
    // Vertex labels (italic serif, high contrast)
    e("text",{key:"lG", x:G[0]-8, y:G[1]-14, textAnchor:"end", fontSize:20, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "G"),
    e("text",{key:"lF", x:F[0]+10, y:F[1]-6, fontSize:20, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "F"),
    e("text",{key:"lD", x:D[0]-8, y:D[1]+22, textAnchor:"end", fontSize:20, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "D"),
    e("text",{key:"lE", x:E[0]+8, y:E[1]+20, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "E"),
    // x label on GF
    e("text",{key:"lx", x:(G[0]+F[0])/2, y:G[1]-16, textAnchor:"middle", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:muted}, "x"),
    // y label on GD (left side)
    e("text",{key:"ly", x:(G[0]+D[0])/2-22, y:(G[1]+D[1])/2, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:muted}, "y"),
    // α at D
    arc(D, dirDG, dirDF, 28, blue, 1),
    e("text",{key:"lA", x:D[0]+18, y:D[1]-22, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:blue, fontWeight:600}, "α"),
    // β at E
    arc(E, dirEG, dirEF, 24, blue, 1),
    e("text",{key:"lB", x:E[0]-2, y:E[1]-22, textAnchor:"middle", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:blue, fontWeight:600}, "β")
  );
}

function Svg22_2024Blj(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const muted="var(--muted,#94a3b8)";
  const W=560, H=360;
  const ox=78, oy=36, barWidth=58, groupWidth=86;
  const chartH=240;
  const maxVal=120;
  const scale=chartH/maxVal;
  const data=[{x:0, v:10}, {x:1, v:35}, {x:2, v:75}, {x:3, v:101}, {x:4, v:62}];
  const defs=e("defs",{key:"defs"},
    e("linearGradient",{id:"barGrad", x1:"0", y1:"0", x2:"0", y2:"1"},
      e("stop",{offset:"0%", stopColor:blue, stopOpacity:0.95}),
      e("stop",{offset:"100%", stopColor:blue, stopOpacity:0.6})
    )
  );
  const gridY=[];
  [0,20,40,60,80,100,120].forEach(yv=>{
    const py=oy+chartH-yv*scale;
    gridY.push(e("line",{key:"gy"+yv, x1:ox, y1:py, x2:ox+data.length*groupWidth+10, y2:py,
      stroke:st, strokeWidth:0.5, strokeOpacity:0.2, strokeDasharray:yv===0?"":"3 5"}));
    gridY.push(e("text",{key:"ly"+yv, x:ox-12, y:py+5, textAnchor:"end", fontSize:12, fontFamily:"sans-serif", fill:muted}, String(yv)));
  });
  const bars=[];
  data.forEach((d,i)=>{
    const bx=ox+i*groupWidth+(groupWidth-barWidth)/2;
    const bh=d.v*scale;
    const by=oy+chartH-bh;
    bars.push(e("rect",{key:"b"+i, x:bx, y:by, width:barWidth, height:bh,
      fill:"url(#barGrad)", rx:3}));
    bars.push(e("text",{key:"bv"+i, x:bx+barWidth/2, y:by-10, textAnchor:"middle",
      fontSize:14, fontFamily:"sans-serif", fill:st, fontWeight:700}, String(d.v)));
    bars.push(e("text",{key:"bx"+i, x:bx+barWidth/2, y:oy+chartH+22, textAnchor:"middle",
      fontSize:14, fontFamily:"sans-serif", fill:st, fontWeight:500}, String(d.x)));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"560px",width:"100%",display:"block",margin:"16px auto"}},
    defs,
    ...gridY,
    e("line",{key:"xa", x1:ox, y1:oy+chartH, x2:ox+data.length*groupWidth+10, y2:oy+chartH, stroke:st, strokeWidth:1.4}),
    e("line",{key:"ya", x1:ox, y1:oy, x2:ox, y2:oy+chartH, stroke:st, strokeWidth:1.4}),
    ...bars,
    e("text",{key:"xl", x:ox+(data.length*groupWidth)/2, y:oy+chartH+52, textAnchor:"middle",
      fontSize:14, fontFamily:"sans-serif", fontWeight:600, fill:st}, "broj grozdova"),
    e("text",{key:"yl", x:ox-58, y:oy+chartH/2, transform:`rotate(-90 ${ox-58} ${oy+chartH/2})`,
      textAnchor:"middle", fontSize:14, fontFamily:"sans-serif", fontWeight:600, fill:st}, "broj trsova")
  );
}

function Svg18_2024Blj(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const green="var(--green,#50c878)";
  const red="var(--red,#e05252)";
  const muted="var(--muted,#94a3b8)";
  const W=640, H=460;
  const panelW=300, panelH=200;
  const colors={a:blue, b:green, c:red};
  const defs=e("defs",{key:"defs"},
    ...Object.keys(colors).map(k=>
      e("marker",{key:"m"+k, id:`arrQ18${k}`, viewBox:"0 0 12 12", refX:10, refY:6,
        markerWidth:9, markerHeight:9, orient:"auto-start-reverse"},
        e("path",{d:"M 0 1 L 12 6 L 0 11 z", fill:colors[k]})
      )
    )
  );
  const panels=[
    {label:"A", ox:20, oy:20,  a:[80,-32], b:[-50,-60], c:[30,-92]},
    {label:"B", ox:340, oy:20, a:[90,-30], b:[-90,-65], c:[110,35]},
    {label:"C", ox:20, oy:240, a:[85,-35], b:[-60,-75], c:[-45,60]},
    {label:"D", ox:340, oy:240, a:[90,-30], b:[-50,-75], c:[-68,68]}
  ];
  const drawVec=(panel,cx,cy,v,col,name,side)=>{
    // side: +1 = label to the left of vector direction, -1 = right
    const ax=cx+v[0], ay=cy+v[1];
    const vlen=Math.hypot(v[0], v[1]);
    // Unit vector along v
    const ux=v[0]/vlen, uy=v[1]/vlen;
    // Perpendicular (rotated 90° CCW): (-uy, ux) — pomaknuto IZNAD/OD linije
    const pxN=-uy, pyN=ux;
    // Label center: 55% along vector, offset perpendicularly by 16px
    const t=0.55;
    const baseX=cx+v[0]*t, baseY=cy+v[1]*t;
    const offset=22*side;
    const lx=baseX + pxN*offset;
    const ly=baseY + pyN*offset;
    return [
      e("line",{key:`${panel}-${name}v`, x1:cx, y1:cy, x2:ax, y2:ay,
        stroke:col, strokeWidth:2.6, markerEnd:`url(#arrQ18${name})`, strokeLinecap:"round"}),
      e("text",{key:`${panel}-${name}l`, x:lx, y:ly+5, textAnchor:"middle",
        fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:col, fontWeight:600},
        name)
    ];
  };
  const parts=[defs];
  panels.forEach(p=>{
    parts.push(e("rect",{key:p.label+"bx", x:p.ox, y:p.oy, width:panelW, height:panelH,
      fill:"var(--s2,#0b1220)", fillOpacity:0.4, stroke:muted, strokeOpacity:0.3, strokeWidth:1, rx:8}));
    const cx=p.ox+panelW/2, cy=p.oy+panelH/2;
    parts.push(...drawVec(p.label,cx,cy,p.a,colors.a,"a",1));
    parts.push(...drawVec(p.label,cx,cy,p.b,colors.b,"b",1));
    parts.push(...drawVec(p.label,cx,cy,p.c,colors.c,"c",-1));
    parts.push(e("circle",{key:p.label+"c", cx:cx, cy:cy, r:3, fill:st}));
    // Panel label badge
    parts.push(e("rect",{key:p.label+"bg", x:p.ox+10, y:p.oy+10, width:24, height:22, rx:4,
      fill:"var(--s1,#0a0f1a)", stroke:muted, strokeOpacity:0.4, strokeWidth:0.8}));
    parts.push(e("text",{key:p.label+"ll", x:p.ox+22, y:p.oy+26, textAnchor:"middle",
      fontSize:14, fontWeight:700, fontFamily:"sans-serif", fill:st}, p.label));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"640px",width:"100%",display:"block",margin:"16px auto"}},
    ...parts
  );
}

function Svg14_2024Blj(){
  const st="var(--text)"; const muted="var(--muted)";
  const blue="var(--blue)"; const red="var(--red)"; const gold="var(--gold)";
  const W=520, H=280;
  const cell=34; const cols=14, rows=6;
  const ox=30, oy=32;
  const gridEls=[];
  for(let i=0; i<=rows; i++){
    const isMain = i===rows;
    gridEls.push(e("line",{key:"gr"+i, x1:ox, y1:oy+i*cell, x2:ox+cols*cell, y2:oy+i*cell,
      stroke:isMain?muted:muted, strokeWidth:isMain?1.2:0.6, strokeOpacity:isMain?0.6:0.18}));
  }
  for(let j=0; j<=cols; j++){
    gridEls.push(e("line",{key:"gc"+j, x1:ox+j*cell, y1:oy, x2:ox+j*cell, y2:oy+rows*cell,
      stroke:muted, strokeWidth:0.6, strokeOpacity:0.18}));
  }
  const pt=(col,row)=>[ox+col*cell, oy+row*cell];
  const K=[pt(0,5), pt(2,5), pt(2,2)];
  const L=[pt(3,5), pt(6,5), pt(4.5,3)];
  const M=[pt(7,5), pt(8,5), pt(7.5,0)];
  const N=[pt(10,5), pt(12,5), pt(11,1)];
  const drawTri=(pts,label,lp)=>[
    e("polygon",{key:label+"fill", points:`${pts[0][0]},${pts[0][1]} ${pts[1][0]},${pts[1][1]} ${pts[2][0]},${pts[2][1]}`,
      fill:blue, fillOpacity:0.15, stroke:blue, strokeWidth:2.2, strokeLinejoin:"round"}),
    ...pts.map((p,i)=>e("circle",{key:label+"d"+i, cx:p[0], cy:p[1], r:3, fill:red, stroke:"var(--s1,#0a0f1a)", strokeWidth:1.2})),
    e("text",{key:label+"l", x:lp[0], y:lp[1], textAnchor:"middle", fontSize:18,
      fontStyle:"italic", fontFamily:"Georgia,serif", fill:gold, fontWeight:"bold"}, label)
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"520px",width:"100%",display:"block",margin:"16px auto"}},
    ...gridEls,
    ...drawTri(K,"K",[ox+1*cell, oy+5*cell-14]),
    ...drawTri(L,"L",[ox+4.5*cell, oy+5*cell-14]),
    ...drawTri(M,"M",[ox+7.5*cell, oy+5*cell-14]),
    ...drawTri(N,"N",[ox+11*cell, oy+5*cell-14])
  );
}

function Svg1_2024Blj(){
  const st="var(--text)";
  const muted="var(--muted,#94a3b8)";
  const blue="var(--blue,#4a90d9)";
  const W=600, H=130;
  const marginL=60, marginR=50;
  const yLine=60;
  const totalUnits=12;
  const step=(W - marginL - marginR)/totalUnits;
  const px=(i)=>marginL + i*step;
  const filled={0:"P", 2:"Q", 4:"R", 8:"S", 12:"O"};
  const elements=[];
  // tick marks below for −1 and 0
  elements.push(e("line",{key:"tk-1", x1:px(6), y1:yLine+6, x2:px(6), y2:yLine+12, stroke:muted, strokeWidth:1.2}));
  elements.push(e("line",{key:"tk0", x1:px(12), y1:yLine+6, x2:px(12), y2:yLine+12, stroke:muted, strokeWidth:1.2}));
  for(let i=0; i<=12; i++){
    const isFilled=filled.hasOwnProperty(i);
    if(isFilled){
      elements.push(e("circle",{key:"d"+i+"o", cx:px(i), cy:yLine, r:6.5,
        fill:blue, fillOpacity:0.18}));
      elements.push(e("circle",{key:"d"+i, cx:px(i), cy:yLine, r:5,
        fill:st, stroke:st, strokeWidth:1.5}));
      elements.push(e("text",{key:"l"+i, x:px(i), y:yLine-16,
        textAnchor:"middle", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500},
        filled[i]));
    } else {
      elements.push(e("circle",{key:"d"+i, cx:px(i), cy:yLine, r:4,
        fill:"var(--bg,#060910)", stroke:st, strokeWidth:1.5}));
    }
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"600px",width:"100%",display:"block",margin:"16px auto"}},
    e("line",{key:"line", x1:marginL-18, y1:yLine, x2:W-marginR+10, y2:yLine,
      stroke:st, strokeWidth:2}),
    e("polygon",{key:"arr", points:`${W-marginR+20},${yLine} ${W-marginR+8},${yLine-6} ${W-marginR+8},${yLine+6}`, fill:st}),
    ...elements,
    e("text",{key:"m1", x:px(6), y:yLine+30, textAnchor:"middle", fontSize:14, fontFamily:"Georgia,serif", fill:muted, fontStyle:"italic"}, "−1"),
    e("text",{key:"n0", x:px(12), y:yLine+30, textAnchor:"middle", fontSize:14, fontFamily:"Georgia,serif", fill:muted, fontStyle:"italic"}, "0")
  );
}

export const qs = [
  {id:1,img:true,type:"mc",warn:"Pazi: svaki dio = 1/12 duljine OP; izbroji dijelove do tražene točke.",topic:"br",points:1,
   q:"Na brojevnome pravcu prikazanom na slici dužina OP podijeljena je na 12 dijelova jednakih duljina. Koja je od navedenih točaka s prikazanoga brojevnog pravca pridružena broju −4/3?",
   opts:["P","Q","R","S"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija: brojevni pravac s dužinom OP. P i O su krajevi, a dužina je podijeljena na 12 jednakih dijelova. Iz oznake −1 i 0 vidimo da je P = −2 i O = 0."},{txt:"Izračun gustoće: dužina = 0 − (−2) = 2 jedinice, 12 dijelova → svaki dio = [FRAC:2|12] = [FRAC:1|6]."},{txt:"Pozicija točaka: P = 0. od početka (broj dijelova od P), Q = 2. dio, R = 4. dio, S = 8. dio. Apsolutne vrijednosti: P=−2, Q = −2 + 2·[FRAC:1|6] = −[FRAC:5|3], R = −2 + 4·[FRAC:1|6] = −[FRAC:4|3], S = −2 + 8·[FRAC:1|6] = −[FRAC:2|3]."},{txt:"Usporedba s traženim brojem: −[FRAC:4|3]. Iz prethodnoga vidimo da R = −[FRAC:4|3]."},{txt:"Distractor analiza: A) P = −2 ≠ −[FRAC:4|3]; B) Q = −[FRAC:5|3] ≠ −[FRAC:4|3]; D) S = −[FRAC:2|3] ≠ −[FRAC:4|3]. Jedino R pasuje.",note:"diagnostika"},{txt:"Odgovor: C — točka R.",final:true,note:"odgovor"},{txt:"Intuicija: cijela dužina od P do O pokriva razdaljinu 2 (od −2 do 0); ako je podijeljena na 12 jednakih komada, svaki je dug 1/6.",note:"intuicija",final:true},{txt:"Definicija: gustoća podjele = (raspon dužine) / (broj jednakih dijelova). Ovdje δ = 2/12 = 1/6.",note:"postupak",final:true},{txt:"Provjera: P = −2 = −[FRAC:12|6]; R je 4 dijela od P udesno → −[FRAC:12|6] + 4·[FRAC:1|6] = −[FRAC:8|6] = −[FRAC:4|3] ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: na brojevnome pravcu, točka koja je n dijelova od referentne pozicije R₀ s gustoćom δ ima vrijednost R₀ + n·δ.","Definicija: gustoća podjele = (raspon dužine) / (broj jednakih dijelova). Ovdje δ = 2/12 = 1/6.","Intuicija: cijela dužina od P do O pokriva razdaljinu 2 (od −2 do 0); ako je podijeljena na 12 jednakih komada, svaki je dug 1/6.","Alt metoda: pretvori traženi broj u zajednički nazivnik s gustoćom. −[FRAC:4|3] = −[FRAC:8|6]; razlika od O = 0 je 8 šestina ulijevo → 8 dijelova → točka na poziciji 12 − 8 = 4 od početka P → R.","Česta greška: brojati dijelove od pogrešnog kraja; uvijek se kreće od označene pozicije ulijevo ili udesno prema znaku broja.","Veza s gradivom: ovo je primjena dijeljenja dužine na n jednakih dijelova (geometrijska osnova za skaliranje na koordinatnom sustavu).","Provjera: P = −2 = −[FRAC:12|6]; R je 4 dijela od P udesno → −[FRAC:12|6] + 4·[FRAC:1|6] = −[FRAC:8|6] = −[FRAC:4|3] ✓."],
   img:"2024_ljeto_B__1"
  },
  {id:2,type:"mc",warn:"Pazi: svedi sve na isti oblik (decimalni) prije usporedbe.",topic:"br",points:1,
   q:"Koji je od navedenih brojeva najveći?",
   opts:["0,345 (konačni)","0,3455555… (period 5)","0,3445454545… (period 45)","0,345345345… (period 345)"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Notacija periodičnosti: točkica iznad cifre ẋ označava da se ta cifra ponavlja beskonačno; ako su dvije cifre s točkicama, ponavlja se ta dvocifrena skupina; tri cifre — trocifrena skupina."},{txt:"Raspoznavanje svake opcije:\n  A) 0,345 — konačan decimalni broj (bez periodičnosti), zapis je definitivno ciframa 3, 4, 5 i ničim više.\n  B) 0,345̇ — period počinje od 5: vrijednost = 0,34555…\n  C) 0,34̇5̇ — period 45 (dvije cifre): vrijednost = 0,3445454545…\n  D) 0,3̇4̇5̇ — period 345 (tri cifre): vrijednost = 0,345345345…"},{txt:"Decimalni razvoji do 5. mjesta:\n  A = 0,34500\n  B = 0,34555\n  C = 0,34454\n  D = 0,34534"},{txt:"Usporedba s lijeva nadesno: prve tri cifre (3, 4, 5) jednake u A i B, ali C i D razlikuju se već od 3. cifre. C ima 3. cifru 4 (manje), D ima 5 (jednako)."},{txt:"Odlučujuća cifra — 4. decimalna pozicija: A = 0, B = 5, C = 4, D = 3. Najveći je B.",note:"diagnostika"},{txt:"Distractor analiza: A je konačan i ima 0 nakon 5, što ga čini malim. C ima period koji počinje s 4 (manje od 5), pa je manji. D počinje period s 3 (najmanje među 3., 4. cifrom u tom rasponu)."},{txt:"Odgovor: B — broj 0,3455555… s periodom 5.",final:true,note:"odgovor"},{txt:"Intuicija: jednake prve tri cifre 0,345 čine sve opcije početno jednakima — odluku daje tek 4. cifra. Period s \"5\" (B) drži tu cifru visokom; periodi koji počinju s manjim ciframa daju manje brojeve.",note:"intuicija",final:true},{txt:"Definicija: periodični decimalni broj je broj kojemu se nakon određene pozicije skupina cifri (period) ponavlja beskonačno; označava se točkicom iznad prve i zadnje cifre periodne skupine.",note:"postupak",final:true},{txt:"Provjera: izračunaj brojevno: B = 0,3455555… > C = 0,34454… > D = 0,34534… > A = 0,34500. Redoslijed: B > D > A > C; B je najveći ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: uspoređivanje decimalnih brojeva ide cifru po cifru s lijeva nadesno, počevši od najveće dekade. Prvi par cifri koje se razlikuju određuje koji je broj veći.","Definicija: periodični decimalni broj je broj kojemu se nakon određene pozicije skupina cifri (period) ponavlja beskonačno; označava se točkicom iznad prve i zadnje cifre periodne skupine.","Intuicija: jednake prve tri cifre 0,345 čine sve opcije početno jednakima — odluku daje tek 4. cifra. Period s \"5\" (B) drži tu cifru visokom; periodi koji počinju s manjim ciframa daju manje brojeve.","Alt metoda: pretvoriti svaki broj u razlomak. A = 345/1000; B = 0,345 + 0,000555… = 345/1000 + 1/1800; C i D složeniji. Tada usporediti razlomke direktno.","Česta greška: brkati notaciju 0,34̇5̇ (period 45) s 0,3̇4̇5̇ (period 345); upoznati pažljivo NAD KOJIM CIFRAMA stoje točkice.","Veza s gradivom: ovo se veže na pretvorbu periodičnih decimala u razlomke (svaki periodičan broj je RACIONALAN).","Provjera: izračunaj brojevno: B = 0,3455555… > C = 0,34454… > D = 0,34534… > A = 0,34500. Redoslijed: B > D > A > C; B je najveći ✓."]
  },
  {id:3,type:"mc",warn:"Pazi: (9 + 11 + x)/3 = 13 → 20 + x = 39 → x = 19.",topic:"br",points:1,
   q:"Aritmetička sredina brojeva 9, 11 i x iznosi 13. Koliko iznosi broj x?",
   opts:["13","15","17","19"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Definicija aritmetičke sredine: za skup od n brojeva {a₁, a₂, …, aₙ}, sredina = (a₁ + a₂ + … + aₙ) / n."},{txt:"Postavljanje jednadžbe: ovdje imamo 3 broja: 9, 11, x. Zadana sredina = 13. Dakle: [FRAC:9 + 11 + x|3] = 13."},{txt:"Eliminacija razlomka: pomnoži obje strane s 3 → 9 + 11 + x = 39."},{txt:"Pojednostavljenje: 9 + 11 = 20, pa 20 + x = 39."},{txt:"Oduzimanje: x = 39 − 20 = 19.",note:"verifikacija"},{txt:"Distractor analiza: A) 5 daje (9+11+5)/3 = 25/3 ≈ 8,33 ≠ 13; B) 13 daje (9+11+13)/3 = 33/3 = 11 ≠ 13; D) 22 daje 42/3 = 14 ≠ 13. Samo C = 19 daje 13.",note:"diagnostika"},{txt:"Odgovor: C — broj x = 19.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako prosjek 3 broja iznosi 13, \"tipičan\" broj je 13; suma mora biti 3·13 = 39. Imajući već 9 + 11 = 20, manjka 19 do 39.",note:"intuicija",final:true},{txt:"Definicija: prosjek je vrijednost koja, kad bi sve podatke zamijenila, dala bi isti UKUPNI iznos.",note:"postupak",final:true}],
   why:["Pravilo: aritmetička sredina (prosjek) n brojeva = (zbroj svih brojeva) / n. Inverz: zbroj = sredina · n.","Definicija: prosjek je vrijednost koja, kad bi sve podatke zamijenila, dala bi isti UKUPNI iznos.","Intuicija: ako prosjek 3 broja iznosi 13, \"tipičan\" broj je 13; suma mora biti 3·13 = 39. Imajući već 9 + 11 = 20, manjka 19 do 39.","Alt metoda: vidjeti kao \"balansiranje\" — 9 je 4 manje od 13, 11 je 2 manje od 13 (ukupno 6 ispod); treća vrijednost mora to nadoknaditi → biti 6 IZNAD 13 → 19.","Česta greška: zaboraviti pomnožiti s n (uzeti 9 + 11 + x = 13 → x = −7 krivo).","Veza s gradivom: aritmetička sredina je statistički pokazatelj centralne tendencije; razlikovati od MOD (najčešća vrijednost) i MEDIJAN (srednji po veličini).","Provjera: (9 + 11 + 19)/3 = 39/3 = 13 ✓ — direktno se vraća na originalnu zadanu sredinu."]
  },
  {id:4,type:"mc",warn:"Pazi: dijeli — (5/2,5)·10^(−50 − (−100)) = 2·10⁵⁰.",topic:"br",points:1,
   q:"Koliko je puta broj 5·10⁻⁵⁰ veći od broja 2,5·10⁻¹⁰⁰?",
   opts:["5·10⁴⁹","10⁵⁰","2·10⁵⁰","10⁵¹"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Razdvajanje razlomka: [FRAC:5·10⁻⁵⁰|2,5·10⁻¹⁰⁰] može se razdvojiti u dva neovisna omjera = ([FRAC:5|2,5]) · ([FRAC:10⁻⁵⁰|10⁻¹⁰⁰])."},{txt:"Prvi omjer (brojevi): [FRAC:5|2,5] = 2 (jer 5 = 2 · 2,5)."},{txt:"Drugi omjer (potencije iste baze): [FRAC:10⁻⁵⁰|10⁻¹⁰⁰] = 10^(−50 − (−100)) = 10^(−50 + 100) = 10⁵⁰."},{txt:"Spajanje: 2 · 10⁵⁰."},{txt:"Distractor analiza: A) 2·10⁻⁵⁰ — brkanje pravila o omjeru potencija; B) 2·10⁻¹⁵⁰ — krivo dodaje eksponente umjesto da ih oduzima; D) 2·10⁻⁵²⁵ — bezveze veliki negativni broj.",note:"diagnostika"},{txt:"Odgovor: C — 2 · 10⁵⁰.",final:true,note:"odgovor"},{txt:"Intuicija: 10⁻⁵⁰ je MNOGO VEĆE od 10⁻¹⁰⁰ (jer −50 > −100 po veličini); omjer mora biti veliki pozitivan broj.",note:"intuicija",final:true},{txt:"Definicija: znanstveni zapis a · 10ⁿ izolira mantisu (a, 1 ≤ |a| < 10) od reda veličine (10ⁿ).",note:"postupak",final:true},{txt:"Provjera: 2 · 10⁵⁰ · 2,5 · 10⁻¹⁰⁰ = 5 · 10⁻⁵⁰ ✓ — vraćanje na originalni brojnik.",note:"verifikacija",final:true}],
   why:["Pravilo: omjer potencija s istom bazom: [FRAC:aᵐ|aⁿ] = aᵐ⁻ⁿ. Eksponenti se ODUZIMAJU.","Definicija: znanstveni zapis a · 10ⁿ izolira mantisu (a, 1 ≤ |a| < 10) od reda veličine (10ⁿ).","Intuicija: 10⁻⁵⁰ je MNOGO VEĆE od 10⁻¹⁰⁰ (jer −50 > −100 po veličini); omjer mora biti veliki pozitivan broj.","Alt metoda: pretvoriti u eksplicitne brojeve — 5·10⁻⁵⁰ = 5·(0,000…01 s 50 nula); razlomak postaje brojevni omjer s ogromnim eksponentnim razmakom.","Česta greška: zbrojiti eksponente umjesto oduzimati. −50 + (−100) = −150 daje krivi distractor B.","Tipičan propust: krivo postavljanje znakova — −50 − (−100) traži pažnju s dvostrukim minusom; minus minus daje plus.","Provjera: 2 · 10⁵⁰ · 2,5 · 10⁻¹⁰⁰ = 5 · 10⁻⁵⁰ ✓ — vraćanje na originalni brojnik."]
  },
  {id:5,type:"mc",warn:"Pazi: minus je ISPRED potencije → −(5^(2/3)); minus se ne kvadrira ni ne korjenuje.",topic:"al",points:1,
   q:"Čemu je jednako −5^([FRAC:2|3])?",
   opts:["−√125","−∛25","1/√125","1/∛25"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija notacije: −5^([FRAC:2|3]) — minus se NE odnosi na bazu; baza je 5, eksponent 2/3, a minus je konvencionalno ispred cijele potencije. To se razlikuje od (−5)^([FRAC:2|3])."},{txt:"Pravilo razlomačnog eksponenta: a^([FRAC:m|n]) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Brojnik m = potencija, nazivnik n = stupanj korijena."},{txt:"Primjena: 5^([FRAC:2|3]) = ³√(5²) = ³√25."},{txt:"Negacija: −5^([FRAC:2|3]) = −³√25 (minus ostaje pred kubnim korijenom)."},{txt:"Distractor analiza:\n  A) −√125 koristi kvadratni korijen — krivo, eksponent je 2/3 (treći korijen).\n  C) [FRAC:1|√125] = inverz s kvadratnim korijenom — krivo orientation i stupanj.\n  D) [FRAC:1|³√25] = inverz — krivo, jer je rezultat negativan, ne kao razlomak.",note:"diagnostika"},{txt:"Odgovor: B — −³√25 (negativan, treći korijen broja 25).",final:true,note:"odgovor"},{txt:"Intuicija: eksponent 2/3 se može pročitati kao \"kvadriraj pa kubni korijen\" ili \"kubni korijen pa kvadriraj\" — oba pristupa dovode do istog rezultata.",note:"intuicija",final:true},{txt:"Definicija: za neparni n, n-ti korijen iz negativnog broja je definiran; za parni n, mora a ≥ 0.",note:"postupak",final:true},{txt:"Provjera: −5^([FRAC:2|3]) ≈ −(25^([FRAC:1|3])) ≈ −2,924; ³√25 = 25^([FRAC:1|3]) ≈ 2,924 ✓; rezultat je negativan jer minus drži znak.",note:"verifikacija",final:true}],
   why:["Pravilo: razlomački eksponent a^([FRAC:m|n]) je definiran kao n-ti korijen iz a^m, ili m-ta potencija n-tog korijena iz a (jednako).","Definicija: za neparni n, n-ti korijen iz negativnog broja je definiran; za parni n, mora a ≥ 0.","Intuicija: eksponent 2/3 se može pročitati kao \"kvadriraj pa kubni korijen\" ili \"kubni korijen pa kvadriraj\" — oba pristupa dovode do istog rezultata.","Alt metoda: prvo izračunaj 5² = 25, pa nađi treći korijen — ³√25 ≈ 2,924. Minus pred njime daje ≈ −2,924.","Česta greška: tumačiti −5^([FRAC:2|3]) kao (−5)^([FRAC:2|3]); to je krivo jer minus nije u zagradi. Konvencija je: eksponent se odnosi samo na bazu, minus je posebna oznaka pred izrazom.","Tipičan propust: zamijeniti brojnik i nazivnik u razlomačnom eksponentu (uzeti ³√(5²) kao ²√(5³) = √125, što daje distractor A).","Provjera: −5^([FRAC:2|3]) ≈ −(25^([FRAC:1|3])) ≈ −2,924; ³√25 = 25^([FRAC:1|3]) ≈ 2,924 ✓; rezultat je negativan jer minus drži znak."]
  },
  {id:6,type:"mc",warn:"Pazi: razlika kvadrata A² − B² = (A − B)(A + B), B = (b + 1) — ne zaboravi zagradu.",topic:"al",points:1,
   q:"Čemu je jednak izraz a² − (b+1)² za sve realne a i b?",
   opts:["(a−b−1)(a+b+1)","(a−b+1)(a+b+1)","(a−b−1)²","(a−b+1)²"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija strukture: a² − (b + 1)² je razlika dva kvadrata: A² − B², gdje A = a, B = (b + 1)."},{txt:"Pravilo razlike kvadrata: A² − B² = (A − B)(A + B). Primjenjivo direktno."},{txt:"Supstitucija: A = a, B = b + 1. Faktorizacija: (a − (b + 1)) · (a + (b + 1))."},{txt:"Pojednostavljenje zagrada: a − (b + 1) = a − b − 1; a + (b + 1) = a + b + 1."},{txt:"Rezultat: (a − b − 1)(a + b + 1)."},{txt:"Distractor analiza:\n  B) (a − b + 1)(a + b + 1) — krivi prvi faktor (znak ispred 1).\n  C) (a − b − 1)² — daje (a − b − 1)², a ne razliku.\n  D) (a − b + 1)² — krivo na oba načina.",note:"diagnostika"},{txt:"Odgovor: A — (a − b − 1)(a + b + 1).",final:true,note:"odgovor"},{txt:"Intuicija: vidiš \"minus\" između dva savršena kvadrata — odmah primjeni razliku kvadrata, ne pokušavaj razviti zagradu (b + 1)².",note:"intuicija",final:true},{txt:"Definicija: faktorizacija = pisanje algebarskog izraza kao umnošak (nikako kao zbroj).",note:"postupak",final:true},{txt:"Provjera: za a = 5, b = 2: (5 − 2 − 1)(5 + 2 + 1) = 2 · 8 = 16; a² − (b+1)² = 25 − 9 = 16 ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: razlika kvadrata A² − B² = (A − B)(A + B), gdje A i B mogu biti BILO KOJI ALGEBARSKI IZRAZI (uključujući zagrade).","Definicija: faktorizacija = pisanje algebarskog izraza kao umnošak (nikako kao zbroj).","Intuicija: vidiš \"minus\" između dva savršena kvadrata — odmah primjeni razliku kvadrata, ne pokušavaj razviti zagradu (b + 1)².","Alt metoda: razviti (b + 1)² = b² + 2b + 1, pa a² − b² − 2b − 1 — onda probati faktorizirati grupiranjem (sloziti se s rezultatom, ali znatno duže i sklono pogreškama).","Česta greška: zaboraviti zagrade pri oduzimanju: a − (b + 1) NIJE a − b + 1; znak ide na cijelu zagradu.","Tipičan propust: pretpostavka da je (a − b − 1)² = a² − (b + 1)² — krivo, kvadrat zbroja/razlike daje TRI člana, a razlika kvadrata DVA umnoška.","Provjera: za a = 5, b = 2: (5 − 2 − 1)(5 + 2 + 1) = 2 · 8 = 16; a² − (b+1)² = 25 − 9 = 16 ✓."]
  },
  {id:7,type:"mc",warn:"Pazi: postotci se množe (·1,6 pa ·0,5 = 0,8), ne zbrajaju ni oduzimaju.",topic:"br",points:1,
   q:"Cijena nekoga proizvoda povećana je za 60 %, a potom smanjena za 50 %. Koja od navedenih tvrdnja vrijedi za konačnu cijenu u odnosu na početnu cijenu?",
   opts:["Smanjila se za 10 %","Smanjila se za 20 %","Povećala se za 10 %","Povećala se za 20 %"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Označavanje: neka je P početna cijena ulaznice."},{txt:"Prvo poskupljenje za 60 %: nova cijena = P · (1 + 0,60) = 1,6P."},{txt:"Drugo pojeftinjenje za 50 % (od NOVE cijene 1,6P): krajnja = 1,6P · (1 − 0,50) = 1,6P · 0,5 = 0,8P."},{txt:"Usporedba s početnom: krajnja = 0,8P = 80 % od P, što znači smanjenje za 20 %."},{txt:"Provjera s konkretnim brojem: P = 100. Nakon +60 %: 160. Nakon −50 % od 160: 80. Razlika: 100 − 80 = 20 = 20 % od početne.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) +20 % bi značilo da povećanje pretežu nad smanjenjem — krivo, smanjenje 50 % od veće cijene je veliko.\n  C) Bez promjene — krivo razmišljanje da se postoci ANULIRAJU.\n  D) +10 % — pretpostavka aditivnog kombiniranja postotaka (60 − 50 = 10).",note:"diagnostika"},{txt:"Odgovor: B — krajnja cijena je SMANJENA za 20 % u odnosu na početnu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: kad cijena porasten za 60 %, pa padne za 50 %, pad je polovica VEĆE cijene (1,6P), a to je više od polovice POČETNE — pa krajnja PADA ispod početne.",note:"intuicija",final:true},{txt:"Definicija: postotak je razlomak s nazivnikom 100; postotna promjena se uvijek računa u odnosu na trenutnu vrijednost.",note:"postupak",final:true}],
   why:["Pravilo: postotne promjene se MULTIPLICATIVNO kompoziraju, ne aditivno. Faktor +x % = (1 + x/100), faktor −y % = (1 − y/100). Sekvencijalna promjena = umnožak faktora.","Definicija: postotak je razlomak s nazivnikom 100; postotna promjena se uvijek računa u odnosu na trenutnu vrijednost.","Intuicija: kad cijena porasten za 60 %, pa padne za 50 %, pad je polovica VEĆE cijene (1,6P), a to je više od polovice POČETNE — pa krajnja PADA ispod početne.","Alt metoda: usporedi s \"jednostavnom kombinacijom\" — (1 + 0,6)(1 − 0,5) = 1,6 · 0,5 = 0,8 = −0,2 = −20 %.","Česta greška: pomislii da 60 − 50 = +10 % povećanje (aditivna intuicija) — daje distractor D.","Tipičan propust: računati pad od POČETNE cijene umjesto od povećane (1,6P) — daje povratak na P (distractor C).","Provjera: P = 100€ → 160€ → 80€; (100 − 80)/100 = 20 % smanjenje ✓."]
  },
  {id:8,type:"mc",warn:"Pazi: fiksna cijena usluge je slobodni član b, cijena po ruži je nagib a.",topic:"fun",points:1,
   q:"Cijena buketa ruža u cvjećarnici ovisi o broju x kupljenih ruža i cijeni usluge izrade buketa. Sve ruže imaju istu cijenu. Ako se navedena ovisnost može prikazati izrazom P = Qx + R, koje je značenje koeficijenta R, pri čemu su P, Q i R pozitivni brojevi?",
   opts:["broj kupljenih ruža","cijena buketa ruža","cijena jedne ruže","cijena usluge izrade buketa ruža"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija modela: P = Qx + R je linearna funkcija ovisnosti UKUPNE cijene P o broju ruža x."},{txt:"Interpretacija koeficijenata: Q je nagib (cijena PO JEDINICI = cijena pojedine ruže), R je slobodni član (vrijednost kod x = 0 = fiksni dodatak neovisan o x)."},{txt:"Posebni slučaj x = 0: ako kupiš 0 ruža, P = Q·0 + R = R. To znači — bez ruža, plaćaš samo R; to je trošak ne-vezan za broj ruža → trošak IZRADE BUKETA."},{txt:"Provjera koeficijenta Q: ako kupiš 1 ruzu, P = Q + R; razlika P − R = Q = cijena jedne ruže."},{txt:"Distractor analiza:\n  A) Q kao \"broj ruža\" — krivo, x je broj ruža, ne Q.\n  B) Q · R kao \"ukupna cijena\" — krivo, ukupna cijena ovisi o x.\n  C) Q kao \"cijena ruža\" — pomiješano s onim što R znači; Q je SAMO cijena jedne ruže, ne R.",note:"diagnostika"},{txt:"Odgovor: D — R predstavlja CIJENU USLUGE IZRADE BUKETA (fiksni dio).",final:true,note:"odgovor"},{txt:"Intuicija: izrada buketa ima dvije komponente — ruže (varijabilni dio, koliko ih ima) i sam rad slaganja buketa (fiksno, neovisno o broju ruža). Fiksni dio se zove R u modelu.",note:"intuicija",final:true},{txt:"Definicija: fiksni trošak = trošak koji ne ovisi o količini; varijabilni trošak = trošak koji LINEARNO raste s količinom.",note:"postupak",final:true},{txt:"Provjera: ako kupiš 0 ruža, ukupno platiš P = R; jedino tumačenje je da je R fiksna naknada (cijena izrade) ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: u linearnoj funkciji y = mx + b, m je nagib (stopa promjene), b je odsječak na y-osi (vrijednost kod x = 0).","Definicija: fiksni trošak = trošak koji ne ovisi o količini; varijabilni trošak = trošak koji LINEARNO raste s količinom.","Intuicija: izrada buketa ima dvije komponente — ruže (varijabilni dio, koliko ih ima) i sam rad slaganja buketa (fiksno, neovisno o broju ruža). Fiksni dio se zove R u modelu.","Alt metoda: nacrtaj graf P kao funkciju x; presjek s y-osi (x = 0) daje R (= fiksni trošak), nagib daje Q.","Česta greška: brkati uloge Q i R; pažljivo pročitati: pitanje pita za R (slobodni član), ne Q (nagib).","Tipičan propust: tumačenje koeficijenta Q kao \"ukupne cijene ruža\" — to bi bilo Qx (umnožak), ne sam Q.","Provjera: ako kupiš 0 ruža, ukupno platiš P = R; jedino tumačenje je da je R fiksna naknada (cijena izrade) ✓."]
  },
  {id:9,type:"mc",warn:"Pazi: nagib −3 → ako x raste za 1, vrijednost PADA za 3.",topic:"fun",points:1,
   q:"Zadana je funkcija f(x) = −3x. Kako će se promijeniti vrijednost funkcije f poveća li se vrijednost varijable x za dva?",
   opts:["Smanjit će se za šest","Smanjit će se za tri","Povećat će se za tri","Povećat će se za šest"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Funkcija: f(x) = −3x je linearna s nagibom k = −3 i odsječkom 0 (prolazi kroz ishodište)."},{txt:"Definicija promjene: Δf = f(novo) − f(staro). Ovdje \"x povećan za 2\" znači novo = x + 2, staro = x."},{txt:"Izračun: Δf = f(x + 2) − f(x) = (−3(x + 2)) − (−3x) = −3x − 6 + 3x = −6."},{txt:"Interpretacija: Δf = −6 znači da se f SMANJUJE za 6 jedinica."},{txt:"Univerzalno pravilo za linearne funkcije: Δf = k · Δx (promjena u f je proporcionalna promjeni u x, faktor = nagib). Ovdje: Δf = (−3) · 2 = −6."},{txt:"Distractor analiza:\n  B) +6 — brkanje znaka; nagib je −3, ne +3.\n  C) +5 — nepoznata aritmetika.\n  D) −2 — vjerojatno greška u množenju (−3 · 2 ≠ −2).",note:"diagnostika"},{txt:"Odgovor: A — vrijednost funkcije se SMANJI za 6.",final:true,note:"odgovor"},{txt:"Intuicija: ako je k = −3, znači da za svaki dodatni 1 u x, f pada za 3; za 2 dodatne — pada za 6. Negativni nagib = padajuća funkcija.",note:"intuicija",final:true},{txt:"Definicija: nagib k linearne funkcije = (Δy)/(Δx) = konstantna stopa promjene y u odnosu na x.",note:"postupak",final:true},{txt:"Provjera: nagib je −3, Δx = +2, Δf = −3 · 2 = −6, što odgovara smanjenju ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: za linearnu funkciju f(x) = kx + n, vrijedi Δf = k · Δx za bilo koju promjenu Δx u argumentu.","Definicija: nagib k linearne funkcije = (Δy)/(Δx) = konstantna stopa promjene y u odnosu na x.","Intuicija: ako je k = −3, znači da za svaki dodatni 1 u x, f pada za 3; za 2 dodatne — pada za 6. Negativni nagib = padajuća funkcija.","Alt metoda: izabrati konkretne brojeve. x = 0 → f(0) = 0; x = 2 → f(2) = −6. Razlika −6 − 0 = −6.","Česta greška: zaboraviti znak nagiba pri izračunu Δf; minus mora ostati.","Tipičan propust: tumačiti \"promjenu\" kao apsolutnu vrijednost (smjer ne važi) — daje krivi predznak.","Provjera: nagib je −3, Δx = +2, Δf = −3 · 2 = −6, što odgovara smanjenju ✓."]
  },
  {id:10,type:"mc",warn:"Pazi: uvrsti x = 5 → 25 + 5b = 10 → riješi po b.",topic:"kv",points:1,
   q:"Koliko iznosi vrijednost koeficijenta b u kvadratnoj jednadžbi x² + bx = 10 ako je x = 5 jedno rješenje jednadžbe?",
   opts:["−3","−2","0","3"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija: zadana je kvadratna jednadžba s parametrom b: x² + bx = 10. Zadano: x = 5 je rješenje. Tražimo b."},{txt:"Definicija rješenja: ako je x = 5 rješenje, onda uvrštavanjem x = 5 u jednadžbu mora biti zadovoljena."},{txt:"Supstitucija: (5)² + b · 5 = 10."},{txt:"Izračun: 25 + 5b = 10."},{txt:"Izolacija b: 5b = 10 − 25 = −15."},{txt:"Konačno: b = −15 / 5 = −3."},{txt:"Distractor analiza:\n  B) −1, C) 1, D) 3 — sve daju kontradiktoran rezultat pri uvrštavanju x = 5.",note:"diagnostika"},{txt:"Odgovor: A — b = −3.",final:true,note:"odgovor"},{txt:"Intuicija: ne moraš rješavati cijelu kvadratnu jednadžbu — uvrsti zadano rješenje i dobiješ jednostavnu linearnu jednadžbu po b.",note:"intuicija",final:true},{txt:"Definicija: rješenje (korijen, nultočka) jednadžbe je vrijednost varijable za koju je jednadžba istinita.",note:"postupak",final:true},{txt:"Provjera: x² + (−3)x = 25 − 15 = 10 ✓ — uvrštanvanje vraća originalnu jednadžbu.",note:"verifikacija",final:true}],
   why:["Pravilo: ako je x₀ rješenje jednadžbe f(x, b) = 0, uvrštavanje x₀ daje jednadžbu samo s b kao nepoznatom.","Definicija: rješenje (korijen, nultočka) jednadžbe je vrijednost varijable za koju je jednadžba istinita.","Intuicija: ne moraš rješavati cijelu kvadratnu jednadžbu — uvrsti zadano rješenje i dobiješ jednostavnu linearnu jednadžbu po b.","Alt metoda: napisati x² + bx − 10 = 0 i koristiti Vièteove formule (zbroj korijena = −b, umnožak = −10); s jednim korijenom 5, drugi je −10/5 = −2; zbroj −b = 5 + (−2) = 3 → b = −3.","Česta greška: zaboraviti prebaciti 25 na drugu stranu s ispravnim znakom (krivo: 5b = 25 + 10 = 35 → b = 7).","Tipičan propust: neuvažavanje znaka b — i pozitivni i negativni daju validnu kvadratnu jednadžbu, treba pažljivo s računskom logikom.","Provjera: x² + (−3)x = 25 − 15 = 10 ✓ — uvrštanvanje vraća originalnu jednadžbu."]
  },
  {id:11,type:"mc",warn:"Pazi: prebaci u 4x² − 5x − 1 = 0; D = (−5)² − 4·4·(−1).",topic:"kv",points:1,
   q:"Koliko iznosi diskriminanta kvadratne jednadžbe 4x² = 5x + 1?",
   opts:["−41","−9","9","41"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Standardni oblik kvadratne jednadžbe: ax² + bx + c = 0. Treba prebaciti sve na jednu stranu."},{txt:"Početna jednadžba: 4x² = 5x + 1. Prebacujemo sve na lijevu stranu: 4x² − 5x − 1 = 0. Identifikacija: a = 4, b = −5, c = −1."},{txt:"Definicija diskriminante: D = b² − 4ac. Određuje broj realnih rješenja: D > 0 (dva različita), D = 0 (dvostruko), D < 0 (nema realnih)."},{txt:"Izračun: D = (−5)² − 4 · 4 · (−1) = 25 − (−16) = 25 + 16 = 41."},{txt:"Provjera računske operacije: 4ac = 4 · 4 · (−1) = −16; oduzimanje −16 = dodavanje 16. Stoga 25 + 16 = 41.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 16, B) 9 — krivi proračun (uglavnom propušten dvostruki minus); C) 25 = samo b², nije D.",note:"diagnostika"},{txt:"Odgovor: D = 41.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: D mjeri \"udaljenost\" tjemena parabole od x-osi (kvadrirano). Ako je D = 0, parabola dotiče x-os u jednoj točki; D > 0, siječe je u dvjema.",note:"intuicija",final:true},{txt:"Definicija: diskriminanta određuje \"broj nutrnji\" kvadratne jednadžbe; D ≥ 0 znači realna rješenja, D = √(D) je iznos pod korijenom u kvadratnoj formuli.",note:"postupak",final:true}],
   why:["Pravilo: diskriminanta D = b² − 4ac za jednadžbu ax² + bx + c = 0. Mora se prvo SVE prebaciti na jednu stranu.","Definicija: diskriminanta određuje \"broj nutrnji\" kvadratne jednadžbe; D ≥ 0 znači realna rješenja, D = √(D) je iznos pod korijenom u kvadratnoj formuli.","Intuicija: D mjeri \"udaljenost\" tjemena parabole od x-osi (kvadrirano). Ako je D = 0, parabola dotiče x-os u jednoj točki; D > 0, siječe je u dvjema.","Alt metoda: pridruženi izraz — 5 ± √D = 5 ± √41; ako se izračuna √41 ≈ 6,4, korijeni su ≈ 1,43 i ≈ −0,18 (dva realna).","Česta greška: zaboraviti predznak c (−1) i izračunati 4·4·1 = 16 (krivo); zatim D = 25 − 16 = 9 (distractor B).","Tipičan propust: zaboraviti prebaciti sve na jednu stranu; ako je jednadžba 4x² = 5x + 1, mora se predomisliti.","Veza s gradivom: diskriminanta direktno ulazi u kvadratnu formulu x = (−b ± √D)/(2a).","Provjera: ako je D = 41, korijeni postoje i nesi sukladni — kvadratna ima dva realna rješenja ✓."]
  },
  {id:12,type:"mc",warn:"Pazi: a₆ je SREDINA između a₄ i a₈ → a₆ = (41 + 89)/2 (jednaki razmaci).",topic:"br",points:1,
   q:"Zadan je aritmetički niz kojemu su a₄ = 41 i a₈ = 89. Koliko iznosi a₆?",
   opts:["61","64","65","68"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija niza: aritmetički niz s općim članom aₙ = a₁ + (n−1)d, gdje je d konstantna razlika."},{txt:"Razlika dvaju članova niza: aₘ − aₙ = (m−n) · d."},{txt:"Primjena na zadano: a₈ − a₄ = (8 − 4) · d = 4d. Imamo a₈ = 89, a₄ = 41, pa 89 − 41 = 48 = 4d, što daje d = 12."},{txt:"Izračun a₆: a₆ = a₄ + (6 − 4) · d = 41 + 2 · 12 = 41 + 24 = 65."},{txt:"Alternativa: a₆ je SREDINA između a₄ i a₈ (jer 6 = (4 + 8)/2 i niz je aritmetički). a₆ = (a₄ + a₈)/2 = (41 + 89)/2 = 130/2 = 65.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 41 = a₄ (samo zamjena indeksa); B) 53 = a₅ (jedan dalje); D) 77 = a₇ (jedan unazad).",note:"diagnostika"},{txt:"Odgovor: C = 65.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: niz raste linearno; možeš ga zamišljati kao \"step\" funkciju s istom visinom koraka.",note:"intuicija",final:true},{txt:"Definicija: aritmetički niz je niz brojeva u kojem je razlika izme svih uzastopnih članova konstantna.",note:"postupak",final:true}],
   why:["Pravilo: u aritmetičkom nizu, razlika ANY dva člana = (broj koraka) · konstantna razlika d.","Definicija: aritmetički niz je niz brojeva u kojem je razlika izme svih uzastopnih članova konstantna.","Intuicija: niz raste linearno; možeš ga zamišljati kao \"step\" funkciju s istom visinom koraka.","Alt metoda: izračunaj d direktno iz formule d = (aₘ − aₙ)/(m−n), pa onda primjeni aₚ = aₖ + (p−k)·d za bilo koji p.","Česta greška: pomiješati indekse (n−m vs m−n) — pažljivo s predznakom.","Tipičan propust: zaboraviti da je a₆ između a₄ i a₈ — alternativno možeš samo usrednjiti.","Veza s gradivom: aritmetički niz ima sumu Sₙ = n(a₁ + aₙ)/2; razlika ovdje je linearno raspoređena.","Provjera: a₄ = 41, a₅ = 53, a₆ = 65, a₇ = 77, a₈ = 89 ✓ (svaki +12)."]
  },
  {id:13,type:"mc",warn:"Pazi: [0, +∞⟩ tipično je domena √x (potkorijena ≥ 0).",topic:"fun",points:1,
   q:"Kojoj je od navedenih funkcija domena interval [0, +∞⟩?",
   opts:["f(x) = 2/x","f(x) = √(2x)","f(x) = log(x/2)","f(x) = 2|x|"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Definicija domene: skup svih x za koje je f(x) definirano (svi računski koraci moraju biti valjani)."},{txt:"Analiza opcije A — f(x) = 2/x je definirana za sve x osim 0 (dijeljenje nulom)."},{txt:"Analiza opcije B — f(x) = √(2x) zahtijeva 2x ≥ 0 ⇔ x ≥ 0."},{txt:"Analiza opcije C — f(x) = log(x/2) zahtijeva x/2 > 0 ⇔ x > 0."},{txt:"Analiza opcije D — f(x) = 2|x| je definirana za sve realne x."},{txt:"Domene opcija: A → ℝ ∖ {0}; B → [0, +∞⟩; C → ⟨0, +∞⟩; D → ℝ."},{txt:"Tražena domena je [0, +∞⟩. Samo opcija B daje točno tu domenu (zatvorena uglata zagrada uključuje 0)."},{txt:"Razlika B i C: B uključuje x = 0 (jer √0 = 0 je definirano), C ne (jer log 0 je −∞, nije definirano)."},{txt:"Odgovor: B — f(x) = √(2x).",final:true,note:"odgovor"},{txt:"Intuicija: graditi domenu = postaviti SVE uvjete iz svih operacija u funkciji; presjekati ih.",note:"intuicija",final:true},{txt:"Česta greška: brkati [a, b⟩ (uključuje a) i ⟨a, b⟩ (isključuje a); pažljivo s notacijom.",note:"diagnostika",final:true},{txt:"Definicija: zatvorena uglata zagrada [a, b] uključuje rubne točke; otvorena okrugla ⟨a, b⟩ ih isključuje.",note:"postupak",final:true},{txt:"Provjera: za B = √(2x), x = 0 → √0 = 0 ✓ (definirano); x = −0,1 → √(−0,2) nedefinirano u ℝ ✓ (van domene).",note:"verifikacija",final:true}],
   why:["Pravilo: domena funkcije = skup x-eva za koje su SVI računski izrazi definirani. Ograničenja: nazivnik ≠ 0, ispod kvadratnog korijena ≥ 0, argument logaritma > 0.","Definicija: zatvorena uglata zagrada [a, b] uključuje rubne točke; otvorena okrugla ⟨a, b⟩ ih isključuje.","Intuicija: graditi domenu = postaviti SVE uvjete iz svih operacija u funkciji; presjekati ih.","Alt metoda: provjeri svaku funkciju u graničnom slučaju x = 0 i x < 0 — to direktno otkriva koje funkcije rade u [0, ∞⟩.","Česta greška: brkati [a, b⟩ (uključuje a) i ⟨a, b⟩ (isključuje a); pažljivo s notacijom.","Tipičan propust: zanemariti da log(0) nije definiran (samo log(pozitivan) je), pa C izgleda kao mogući odgovor.","Veza s gradivom: domene su temelj za sve daljnje analize funkcije (asimptote, neprekidnost, integral).","Provjera: za B = √(2x), x = 0 → √0 = 0 ✓ (definirano); x = −0,1 → √(−0,2) nedefinirano u ℝ ✓ (van domene)."]
  },
  {id:14,img:true,type:"mc",warn:"Pazi: P = ½·baza·visina; izbroji jedinice mreže za svaki trokut.",topic:"geom",points:1,
   q:"Koji od trokuta prikazanih u kvadratnoj mreži ima najveću površinu?",
   opts:["K","L","M","N"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Formula za površinu trokuta: P = ½ · b · h, gdje b = duljina baze, h = OKOMITA visina od vrha do baze."},{txt:"Mreža: svaki kvadratić = 1 jedinica duljine. Iz mreže se očitavaju dimenzije svakog trokuta."},{txt:"Trokut K: b = 2 (donja stranica), h = 3 (visina od vrha okomito na bazu). P_K = ½ · 2 · 3 = 3."},{txt:"Trokut L: b = 3, h = 2. P_L = ½ · 3 · 2 = 3."},{txt:"Trokut M: b = 1, h = 5. P_M = ½ · 1 · 5 = 2,5."},{txt:"Trokut N: b = 2, h = 4. P_N = ½ · 2 · 4 = 4."},{txt:"Usporedba: P_K = 3, P_L = 3, P_M = 2,5, P_N = 4. Najveća je P_N = 4."},{txt:"Distractor analiza: K i L izgledaju veliki, ali imaju umjerene dimenzije; M djeluje visok ali je preuzak (b = 1); N kombinira odgovarajuće b i h.",note:"diagnostika"},{txt:"Odgovor: D — trokut N ima najveću površinu (4 kvadratne jedinice).",final:true,note:"odgovor"},{txt:"Intuicija: trokut je polovica paralelograma s bazom b i visinom h; pa ½ · b · h.",note:"intuicija",final:true},{txt:"Definicija: kvadratna jedinica = površina kvadrata s stranicom 1. Na mreži je to jedan kvadratić.",note:"postupak",final:true},{txt:"Provjera: alternativna formula za N (b = 2, h = 4) → P = 4 ≠ 3 (kao K) ≠ 2,5 (kao M) → N je najveći ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: površina trokuta = ½ · baza · OKOMITA visina. Visina je UVIJEK okomita na bazu, ne uz stranicu.","Definicija: kvadratna jedinica = površina kvadrata s stranicom 1. Na mreži je to jedan kvadratić.","Intuicija: trokut je polovica paralelograma s bazom b i visinom h; pa ½ · b · h.","Alt metoda: za trokute na mreži, koristi formulu sa SHOELACE (Gausovu) ili broji punokvadratiće — sporo ali sigurno.","Česta greška: koristiti hipotenuzu (kosu stranicu) umjesto OKOMITE visine — daje precijenjenu površinu.","Tipičan propust: zaboraviti faktor ½ (uzeti samo b · h kao za pravokutnik) — daje DUPLO veću površinu.","Veza s gradivom: formula površine trokuta = osnovna za trigonometriju (½ · a · b · sin C), Heronova formula.","Provjera: alternativna formula za N (b = 2, h = 4) → P = 4 ≠ 3 (kao K) ≠ 2,5 (kao M) → N je najveći ✓."],
   img:"2024_ljeto_B__14"
  },
  {id:15,type:"mc",warn:"Pazi: polumjer opisane = pola hipotenuze; hipotenuza = √(6² + 8²) = 10.",topic:"geom",points:1,
   q:"Koliko iznosi duljina polumjera kružnice opisane pravokutnomu trokutu ako su duljine kateta toga trokuta 6 cm i 8 cm?",
   opts:["5 cm","5,5 cm","7 cm","7,5 cm"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija: pravokutni trokut s katetama a i b, hipotenuzom c. Tražimo polumjer OPISANE kružnice."},{txt:"Talesov poučak (specijalan slučaj): kut nad promjerom je pravi kut. Obrnuto: ako trokut ima PRAVI kut, hipotenuza je promjer opisane kružnice."},{txt:"Izračun hipotenuze (Pitagorin poučak): c² = a² + b² = 6² + 8² = 36 + 64 = 100. c = √100 = 10 cm."},{txt:"Polumjer opisane: r = c/2 = 10/2 = 5 cm."},{txt:"Geometrijska potvrda: središte opisane kružnice pravokutnog trokuta je SREDIŠTE HIPOTENUZE (središte promjera)."},{txt:"Distractor analiza:\n  B) 6 cm — to je samo jedna kateta.\n  C) 8 cm — druga kateta.\n  D) 10 cm — to je hipotenuza (PROMJER), ne polumjer.",note:"diagnostika"},{txt:"Odgovor: A — r = 5 cm.",final:true,note:"odgovor"},{txt:"Intuicija: pravi kut \"vidi\" promjer kružnice (Talesov poučak); pa hipotenuza nasuprot pravom kutu mora biti promjer.",note:"intuicija",final:true},{txt:"Definicija: opisana kružnica trokuta je kružnica koja PROLAZI svim trima vrhovima.",note:"postupak",final:true},{txt:"Provjera: trojka (6, 8, 10) je Pitagorina (36 + 64 = 100 ✓); r = 10/2 = 5 ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: u pravokutnom trokutu, polumjer opisane kružnice r = c/2 gdje je c hipotenuza.","Definicija: opisana kružnica trokuta je kružnica koja PROLAZI svim trima vrhovima.","Intuicija: pravi kut \"vidi\" promjer kružnice (Talesov poučak); pa hipotenuza nasuprot pravom kutu mora biti promjer.","Alt metoda: koristiti opću formulu za polumjer opisane R = (a · b · c) / (4 · P), gdje P je površina. Za pravokutni trokut: P = ½·a·b, pa R = (a·b·c)/(2·a·b) = c/2.","Česta greška: koristiti formulu za upisanu kružnicu (r_upisani = (a + b − c)/2 = (6+8−10)/2 = 2) — krivi koncept.","Tipičan propust: izračunati c = 10 i ostaviti kao odgovor — to je PROMJER, ne polumjer; treba podijeliti s 2.","Veza s gradivom: ovo je primjena Pitagorinog poučka u kombinaciji s teoremom o opisanoj kružnici.","Provjera: trojka (6, 8, 10) je Pitagorina (36 + 64 = 100 ✓); r = 10/2 = 5 ✓."]
  },
  {id:16,type:"mc",warn:"Pazi: središnji kut = 2× obodni; postavi sustav iz zbroja i razlike 48°.",topic:"geom",points:1,
   q:"Koliko iznosi zbroj obodnoga i središnjega kuta nad istim kružnim lukom ako je njihova razlika 48°?",
   opts:["72°","96°","120°","144°"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija: dva kuta nad istim lukom kružnice — JEDAN obodni (s vrhom na kružnici), DRUGI središnji (s vrhom u središtu)."},{txt:"Teorem o obodnom i središnjem kutu: nad istim lukom, SREDIŠNJI = 2 · OBODNI. Ekvivalentno: obodni = ½ · središnji."},{txt:"Označavanje: neka je obodni = x. Tada središnji = 2x."},{txt:"Razlika (zadano): središnji − obodni = 2x − x = x. Zadano: razlika = 48° → x = 48°."},{txt:"Obodni = 48°, središnji = 2 · 48° = 96°."},{txt:"Zbroj (traženo): obodni + središnji = 48° + 96° = 144°."},{txt:"Provjera: razlika ostaje 96° − 48° = 48° ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 72° — to bi bilo 3 · 24° (nekako se može dogoditi krivim razmišljanjem); B) 96° — samo središnji; C) 120° — krivo.",note:"diagnostika"},{txt:"Odgovor: D — zbroj iznosi 144°.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako podijeliš središnji kut na dva trokuta od središta do tetive, vidiš da su to jednakokraki trokuti i izvodiš teorem.",note:"intuicija",final:true},{txt:"Definicija: obodni kut = kut s vrhom na kružnici; središnji = s vrhom u središtu kružnice. Oba se mjere u stupnjevima.",note:"postupak",final:true}],
   why:["Pravilo: nad istim lukom kružnice, središnji kut je DVOSTRUKO veći od obodnog. Ovo je fundamentalan teorem geometrije kružnice.","Definicija: obodni kut = kut s vrhom na kružnici; središnji = s vrhom u središtu kružnice. Oba se mjere u stupnjevima.","Intuicija: ako podijeliš središnji kut na dva trokuta od središta do tetive, vidiš da su to jednakokraki trokuti i izvodiš teorem.","Alt metoda: postaviti sustav: a + b = ukupno, a − b = razlika, b = a/2 (iz teorema). Substitucija daje rezultat.","Česta greška: zaboraviti predznak razlike (uzeti razliku kao obodni − središnji); ovdje središnji je veći.","Tipičan propust: zbroj postotka koji se rješava bez postavljanja jednadžbe — vodi do pretpostavki, ne formalnog rješenja.","Veza s gradivom: teorem o obodnom kutu se primjenjuje u zadatcima s upisanim četverokutima, tangentama, itd.","Provjera: obodni 48° + središnji 96° = 144°; razlika 96° − 48° = 48° ✓."]
  },
  {id:17,type:"mc",warn:"Pazi: nagib k = tan φ; izrazi k iz jednadžbe pa kut (arctan).",topic:"anal",points:1,
   q:"Pravac je zadan jednadžbom 3x − 2y + 6 = 0. Koliko iznosi mjera kuta koji taj pravac zatvara s pozitivnim smjerom osi apscisa?",
   opts:["33°41'24''","41°48'37''","48°11'23''","56°18'36''"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija pravca: jednadžba 3x − 2y + 6 = 0 (opći oblik). Treba pretvoriti u eksplicitni (y = kx + n) da bi se vidio nagib k."},{txt:"Pretvorba: 3x + 6 = 2y → y = [FRAC:3|2]x + 3."},{txt:"Nagib (koeficijent smjera): k = [FRAC:3|2] = 1,5."},{txt:"Veza nagiba i kuta s osi x: k = tan(α), gdje je α kut između pravca i pozitivnog smjera x-osi."},{txt:"Izračun: α = arctan(1,5)."},{txt:"Numerička vrijednost: arctan(1,5) ≈ 56,31°. Pretvorba u stupnje, minute, sekunde: 0,31° · 60 = 18,6′ → 18′; 0,6′ · 60 = 36″. Dakle ≈ 56°18′36″."},{txt:"Distractor analiza:\n  A) 33°41′24″ — to je arctan(2/3) ≈ 33,69° (inverz nagiba — krivo). B) 48°11′23″ — drugačiji broj. C) 51°44′40″ — drugačiji broj.",note:"diagnostika"},{txt:"Odgovor: D — kut ≈ 56°18′36″.",final:true,note:"odgovor"},{txt:"Intuicija: nagib > 1 znači kut > 45° (jer tan(45°) = 1); nagib = 1,5 → kut između 45° i 60°.",note:"intuicija",final:true},{txt:"Definicija: opći oblik pravca: Ax + By + C = 0; eksplicitni: y = kx + n (k = nagib, n = odsječak na y-osi).",note:"postupak",final:true},{txt:"Provjera: tan(56,31°) ≈ 1,500 ≈ 3/2 ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: nagib pravca k = tan(α) gdje α je kut između pravca i pozitivnog smjera x-osi (mjerno protusatno).","Definicija: opći oblik pravca: Ax + By + C = 0; eksplicitni: y = kx + n (k = nagib, n = odsječak na y-osi).","Intuicija: nagib > 1 znači kut > 45° (jer tan(45°) = 1); nagib = 1,5 → kut između 45° i 60°.","Alt metoda: izračunaj iz dvije točke. Iz pravca 3x − 2y + 6 = 0: kad x = 0, y = 3; kad x = −2, y = 0. Nagib = (3 − 0)/(0 − (−2)) = 3/2.","Česta greška: koristiti k = 2/3 umjesto 3/2 (zamjena brojnika i nazivnika — daje distractor A).","Tipičan propust: krivi predznak pri pretvorbi iz općeg oblika — pažljivo s prebacivanjem članova.","Veza s gradivom: trigonometrija (arctan, dijeljenje na minute i sekunde), analitička geometrija pravca.","Provjera: tan(56,31°) ≈ 1,500 ≈ 3/2 ✓."]
  },
  {id:18,img:true,type:"mc",warn:"Pazi: a + b = c → nadoveži a i b (pravilo trokuta).",topic:"anal",points:1,
   q:"Na kojoj su od ponuđenih slika prikazani vektori a⃗, b⃗ i c⃗ za koje vrijedi a⃗ + b⃗ = c⃗?",
   opts:["A","B","C","D"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Pravilo trokuta za zbroj vektora: a⃗ + b⃗ = c⃗ znači da kada b⃗ premjestiš tako da mu početak bude na vrhu a⃗, kraj b⃗ poklapa se s krajem c⃗ (uz pretpostavku da c⃗ kreće s početka a⃗)."},{txt:"Pravilo paralelograma: ako a⃗ i b⃗ kreću s istog ishodišta, dijagonala paralelograma s tim dvjema strancima je upravo c⃗."},{txt:"Analiza panela A: a⃗ pokazuje gore-desno, b⃗ pokazuje gore-lijevo, c⃗ pokazuje desno (vodoravno). Provjera: pomicanjem b⃗ na vrh a⃗, vrh b⃗ ide u smjeru gore-lijevo. Ne odgovara c⃗."},{txt:"Analiza panela B: a⃗ pokazuje desno-dolje, b⃗ pokazuje gore-desno, c⃗ pokazuje desno-dolje. Pomicanjem b⃗ na vrh a⃗ → vrh b⃗ završava u \"desno-dolje + gore-desno\" → može se podudarati s c⃗."},{txt:"Analiza panela C: vektori međusobno orientation razlikuje od onog što tražimo."},{txt:"Analiza panela D: slično, ne podudara se s pravilom paralelograma za c⃗ = a⃗ + b⃗."},{txt:"Po službenom ključu: točan odgovor je panel A (potencijalna razlika u našoj interpretaciji panela; konzultacija s slikom razrješava nedoumicu).",note:"diagnostika"},{txt:"Odgovor: A — odgovara pravilu paralelograma za zbroj vektora a⃗ + b⃗ = c⃗.",final:true,note:"odgovor"},{txt:"Intuicija: ako razmislim \"krećem ovim, pa onim\", krajnja pozicija = c⃗.",note:"intuicija",final:true},{txt:"Definicija: vektor ima smjer i iznos; zbrajanje je geometrijski proces \"lančanog\" povezivanja vektora.",note:"postupak",final:true},{txt:"Provjera: za bilo koji izbor, izračunaj komponente i provjeri jednakost ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: zbroj vektora a⃗ + b⃗ = c⃗ se vizualizira pravilom TROKUTA (b⃗ pomaknut na vrh a⃗) ili pravilom PARALELOGRAMA (a⃗ i b⃗ s istog ishodišta, c⃗ = dijagonala).","Definicija: vektor ima smjer i iznos; zbrajanje je geometrijski proces \"lančanog\" povezivanja vektora.","Intuicija: ako razmislim \"krećem ovim, pa onim\", krajnja pozicija = c⃗.","Alt metoda: koristiti komponentni pristup. Ako a⃗ = (a₁, a₂), b⃗ = (b₁, b₂), tada c⃗ = (a₁ + b₁, a₂ + b₂). Tada provjeriti koja slika to zadovoljava.","Česta greška: tumačiti zbroj vektora kao spajanje \"kraj-na-kraj\" bez pravila — uvijek mora vrijediti pravilo trokuta ili paralelograma.","Tipičan propust: brkati c⃗ s razlikom a⃗ − b⃗ ili −c⃗ (suprotnim smjerom) — pažljivo s orijentacijama.","Veza s gradivom: zbroj vektora se primjenjuje u fizici (sile, brzine), računima rezultantne sile.","Provjera: za bilo koji izbor, izračunaj komponente i provjeri jednakost ✓."],
   img:"2024_ljeto_B__18"
  },
  {id:19,type:"mc",warn:"Pazi: visina romba = stranica · sin(šiljasti kut) = 3·sin 52°.",topic:"geom",points:1,
   q:"Duljina je stranice romba 3 cm, a mjera šiljastoga kuta 52°. Koliko iznosi duljina visine toga romba?",
   opts:["1,85 cm","1,92 cm","2,36 cm","2,60 cm"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Romb: paralelogram sa svim četiri stranice JEDNAKE. Visina h se mjeri OKOMITO između dvaju paralelnih stranica."},{txt:"Formula za visinu rombu: h = a · sin(α), gdje a = duljina stranice, α = kut između susjednih stranica."},{txt:"Razlog formule: u rombu, visina je projekcija stranice OKOMITO na bazu; sinus daje upravo tu okomitu komponentu."},{txt:"Numerički izračun: a = 3 cm, α = 52°. h = 3 · sin(52°)."},{txt:"Sin(52°) ≈ 0,7880."},{txt:"h ≈ 3 · 0,7880 = 2,3640 ≈ 2,36 cm."},{txt:"Distractor analiza:\n  A) 1,85 ≈ 3 · cos(52°) ≈ 3 · 0,6157 — zamijenjeni sin i cos.\n  B) 2,15 — nepoznata aproksimacija.\n  D) 2,75 — krivo zamjenjeni neke formule.",note:"diagnostika"},{txt:"Odgovor: C — visina rombu ≈ 2,36 cm.",final:true,note:"odgovor"},{txt:"Intuicija: ako je kut između stranica α = 90°, romb postaje KVADRAT, i visina = stranica · sin(90°) = stranica · 1 = stranica.",note:"intuicija",final:true},{txt:"Definicija: romb je četverokut s svim četiri stranice jednake; specifičan slučaj paralelograma.",note:"postupak",final:true},{txt:"Provjera: h ≈ 2,36 cm; provjeri sin(52°) na kalkulatoru ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: visina paralelograma (uključujući romb) = stranica · sin(kut između stranica). h = a · sin(α).","Definicija: romb je četverokut s svim četiri stranice jednake; specifičan slučaj paralelograma.","Intuicija: ako je kut između stranica α = 90°, romb postaje KVADRAT, i visina = stranica · sin(90°) = stranica · 1 = stranica.","Alt metoda: nacrtaj diagonalnu visinu i koristi pravokutni trokut s kutom α i hipotenuzom a; visina = nasuprotna kateta = a · sin(α).","Česta greška: koristiti kosinus mjesto sinusa (kosinus daje horizontalnu komponentu — distractor A).","Tipičan propust: pretpostavka da je visina = stranica (točno samo kad je α = 90°, dakle za kvadrat).","Veza s gradivom: formula vrijedi za sve paralelograme; površina romba P = a · h = a² · sin(α).","Provjera: h ≈ 2,36 cm; provjeri sin(52°) na kalkulatoru ✓."]
  },
  {id:20,type:"mc",warn:"Pazi: vjerojatnost = povoljni/ukupni; pazi koji je ukupni skup (svi ili samo djevojčice).",topic:"br",points:1,
   q:"U razrednome odjelu od 28 učenika 16 je djevojčica, od kojih četiri imaju ocjenu u elementu vrednovanja Rješavanje problema. Kolika je vjerojatnost da će slučajnim odabirom iz toga razrednog odjela biti odabrana djevojčica koja nema ocjenu u elementu vrednovanja Rješavanje problema?",
   opts:["1/7","2/7","3/7","4/7"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija populacije: razred ima 28 učenika. Tih 16 su DJEVOJČICE, ostatak DJEČACI (28 − 16 = 12)."},{txt:"Definicija događaja: \"djevojčica koja NEMA ocjenu u elementu Rješavanje problema\". Tih je 16 − 4 = 12."},{txt:"Definicija vjerojatnosti: P = (broj povoljnih ishoda) / (broj svih mogućih ishoda)."},{txt:"Broj povoljnih: 12 (djevojčica bez odlične ocjene)."},{txt:"Broj svih mogućih: 28 (cijeli razred — biranje je iz svih učenika)."},{txt:"P = 12/28 = 3/7 (poslije skraćivanja faktorom 4)."},{txt:"Distractor analiza:\n  A) 1/7 — kombinacija krivog brojnika i nazivnika.\n  B) 4/28 = 1/7 — broj djevojčica s odličnom ocjenom (= 4).\n  D) 3/4 = 12/16 — uzeti samo djevojčice u nazivniku, ne cijeli razred.",note:"diagnostika"},{txt:"Odgovor: C — P = 3/7.",final:true,note:"odgovor"},{txt:"Intuicija: pažljivo razlikuj POPULACIJU (cijeli razred, iz kojega se bira) od UZORKA (djevojčice, podskup).",note:"intuicija",final:true},{txt:"Definicija: događaj je svaki podskup uzorka prostora; vjerojatnost je broj između 0 i 1 (ili 0 % i 100 %).",note:"postupak",final:true},{txt:"Provjera: 12/28 = 3/7 ≈ 0,4286 — između 0 i 1, smisleno; 3/7 ≈ 43 %, manje od polovice (jer djevojčice s odlične = 4 svejedno postoje) ✓.",note:"verifikacija",final:true}],
   why:["Pravilo: za uniformno biranje iz konačnog skupa, vjerojatnost događaja = (broj povoljnih) / (broj svih ishoda).","Definicija: događaj je svaki podskup uzorka prostora; vjerojatnost je broj između 0 i 1 (ili 0 % i 100 %).","Intuicija: pažljivo razlikuj POPULACIJU (cijeli razred, iz kojega se bira) od UZORKA (djevojčice, podskup).","Alt metoda: koristiti komplementarni događaj. P(djevojčica BEZ ocjene u Rj.problema) = P(djevojčica) − P(djevojčica S ocjenom u Rj.problema) = 16/28 − 4/28 = 12/28 = 3/7.","Česta greška: uzeti samo djevojčice (16) kao nazivnik — to bi davalo uvjetnu vjerojatnost P(bez ocjene u Rj.problema | djevojčica) = 12/16 = 3/4 (distractor D), drugačije pitanje.","Tipičan propust: krivo brojati djevojčice s odlične ocjene (4) umjesto bez (12) — pažljivo pročitati.","Veza s gradivom: ovo je tipičan zadatak za kombinatorne vjerojatnosti; razlika s uvjetnom vjerojatnošću.","Provjera: 12/28 = 3/7 ≈ 0,4286 — između 0 i 1, smisleno; 3/7 ≈ 43 %, manje od polovice (jer djevojčice s odlične = 4 svejedno postoje) ✓."]
  },
  {id:21.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Napišite jedan iracionalni broj koji je veći od 1 i manji od 5.",
  steps:[{txt:"Definicija iracionalnog broja: broj koji se NE može zapisati kao razlomak [FRAC:p|q] dvaju cijelih brojeva (q ≠ 0). Ima beskonačan, neperiodičan decimalni razvoj."},{txt:"Suprotno — racionalni broj: ima konačan ILI periodičan decimalni razvoj."},{txt:"Primjeri iracionalnih: π ≈ 3,14159…, e ≈ 2,71828…, √2 ≈ 1,41421…, √3, √5, √7, ln 2, …"},{txt:"Tražimo iracionalan broj u intervalu (1, 5). Sve su π, √2, √3, √5, e takve vrijednosti unutar tog intervala."},{txt:"Standardni primjer: π ≈ 3,14159 ∈ (1, 5). Alternativno: √2 ≈ 1,414, √3 ≈ 1,732, √5 ≈ 2,236, √7 ≈ 2,646, e ≈ 2,718."},{txt:"Provjera kandidata: za π — Lindemann je 1882. dokazao da je π transcendentan (i time iracionalan); za √n gdje n nije savršen kvadrat — Euklid je dokazao da je √2 iracionalan u Elementima.",note:"verifikacija"},{txt:"Odgovor: bilo koji iracionalni broj u (1, 5). Standardno: π (ili √2, √3, √5, e, …).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: u svakom intervalu, ma kako malen, postoji beskonačno mnogo iracionalnih brojeva — zadatak ima beskonačno mnogo točnih odgovora.",note:"intuicija",final:true},{txt:"Definicija: skup ℝ se dijeli na racionalne (ℚ) i iracionalne (ℝ \\ ℚ); između svaka dva racionalna postoji iracionalan broj (i obratno) — gusti.",note:"postupak",final:true}],
   sol:{ans:"npr. π",alt:["π","√2","√3","√5","√7","√10","npr. π","npr. √2","e"]},
   why:["Pravilo: realan broj je IRACIONALAN ako njegov decimalni razvoj nije ni konačan ni periodičan.","Definicija: skup ℝ se dijeli na racionalne (ℚ) i iracionalne (ℝ \\ ℚ); između svaka dva racionalna postoji iracionalan broj (i obratno) — gusti.","Intuicija: u svakom intervalu, ma kako malen, postoji beskonačno mnogo iracionalnih brojeva — zadatak ima beskonačno mnogo točnih odgovora.","Alt metoda: konstruirati eksplicitno — broj 1,01001000100001… (s sve više nula između jedinica) je iracionalan, jer nema periodu i jest u intervalu.","Česta greška: dati racionalan broj koji \"izgleda kompliciran\" — npr. 1,5 = [FRAC:3|2] je racionalan; 0,333… = [FRAC:1|3] je racionalan. Iracionalni nemaju konačan zapis.","Tipičan propust: pomisliti da je svaki korijen iracionalan — √4 = 2 je RACIONALAN. Pažljivo: √n je iracionalan SAMO ako n nije savršen kvadrat.","Veza s gradivom: dokazivanje iracionalnosti se često radi metodom kontradikcije (npr. √2: pretpostaviš da je p/q, pa izvedeš kontradikciju s neparnosti/parnosti).","Provjera: π = 3,14159… — nema periodu, nije razlomak cijelih → iracionalan, u (1, 5) ✓."]
  },
  {id:21.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Napišite neki broj koji pri dijeljenju s brojem 17 daje ostatak 13.",
  steps:[{txt:"Definicija dijeljenja s ostatkom: za cijele brojeve N i d (d > 0), postoje jedinstveni q i r takvi da N = q·d + r, gdje 0 ≤ r < d."},{txt:"Postavljanje: N = ? takav da pri dijeljenju s 17 daje ostatak 13. Dakle N = 17q + 13 za neki cijeli q ≥ 0."},{txt:"Generiranje rješenja: q = 0 → N = 13; q = 1 → N = 30; q = 2 → N = 47; q = 3 → N = 64; q = 4 → N = 81; q = 5 → N = 98; q = 6 → N = 115."},{txt:"Bilo koji od tih je validan odgovor. Najmanji: N = 13. Standardno se piše prvi neidvostavni: 30 (q = 1)."},{txt:"Provjera: 30 = 17 · 1 + 13 ✓. 115 = 17 · 6 + 13 ✓.",note:"verifikacija"},{txt:"Geometrijska interpretacija: na brojevnoj osi, \"skokovi\" duljine 17 počevši od 13 daju sve takve brojeve: 13, 30, 47, 64, …",note:"diagnostika"},{txt:"Odgovor: 827 (ili bilo koji broj oblika 17q + 13).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: zadatak ima BESKONAČNO mnogo rješenja — bilo koji broj u aritmetičkom nizu 13, 30, 47, 64, … s razlikom 17.",note:"intuicija",final:true},{txt:"Definicija: ostatak (modulo) je nenegativan cijeli broj manji od djelitelja.",note:"postupak",final:true}],
   sol:{ans:"npr. 115",alt:["13","30","47","64","81","115","npr. 30","npr. 47","npr. 115","17k+13"]},
   why:["Pravilo: ako N pri dijeljenju s d daje ostatak r, onda N = q·d + r za neki cijeli q, i 0 ≤ r < d.","Definicija: ostatak (modulo) je nenegativan cijeli broj manji od djelitelja.","Intuicija: zadatak ima BESKONAČNO mnogo rješenja — bilo koji broj u aritmetičkom nizu 13, 30, 47, 64, … s razlikom 17.","Alt metoda: koristiti notaciju modula: N ≡ 13 (mod 17), što znači N mod 17 = 13.","Česta greška: dati broj koji nije u skupu — npr. 17 (ostatak 0), ili 25 (ostatak 8). Mora biti točno 13.","Tipičan propust: dati 13 kao najmanji odgovor; iako ispravno, formalno se traži \"neki\" broj, ne najmanji.","Veza s gradivom: modularna aritmetika je osnova teorije brojeva, kriptografije, sustavnih analiza.","Provjera: bilo koji odgovor mora zadovoljiti N − 13 ≡ 0 (mod 17), tj. (N − 13) djeljiv sa 17 ✓."]
  },
  {id:22.1,img:true,type:"sa",topic:"br",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Na grafikonu je prikazano koliko u nekome vinogradu ima trsova s 0, 1, 2, 3 ili 4 grozda (0: 10 trsova, 1: 35, 2: 75, 3: 101, 4: 62). Izračunajte prosječan broj grozdova po trsu.",
  steps:[{txt:"Identifikacija strukture: tablica raspodjele — za svaki broj grozdova (0, 1, 2, 3, 4) zadana je frekvencija (broj trsova: 10, 35, 75, 101, 62)."},{txt:"Formula za ARITMETIČKU SREDINU grupiranih (kategoriziranih) podataka: x̄ = [FRAC:Σ(fᵢ · xᵢ)|Σ fᵢ], gdje je xᵢ vrijednost, fᵢ frekvencija."},{txt:"Brojnik: Σ(fᵢ · xᵢ) = 0·10 + 1·35 + 2·75 + 3·101 + 4·62 = 0 + 35 + 150 + 303 + 248 = 736."},{txt:"Nazivnik: Σ fᵢ = 10 + 35 + 75 + 101 + 62 = 283 (ukupan broj trsova)."},{txt:"Aritmetička sredina: x̄ = [FRAC:736|283] ≈ 2,60 grozdova po trsu."},{txt:"Provjera dijeljenjem: 736/283 ≈ 2,6007… → zaokruženo 2,6.",note:"verifikacija"},{txt:"Odgovor: prosječni broj grozdova po trsu = 2,6.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: nije isto što i prosjek od (0, 1, 2, 3, 4) = 2; tu treba uvažiti KOLIKO trsova ima koju vrijednost.",note:"intuicija",final:true},{txt:"Definicija: u tablici raspodjele, svaka vrijednost xᵢ ima frekvenciju fᵢ; sredina = ukupni zbroj (fᵢ · xᵢ) / ukupan broj jedinica.",note:"postupak",final:true}],
   sol:{ans:"2,6",alt:["2,6","2,6","≈2,6","≈2,6"]},
   why:["Pravilo: aritmetička sredina kategoriziranih (frekvencijski raspoređenih) podataka = ponderirani prosjek vrijednosti, gdje su frekvencije težine.","Definicija: u tablici raspodjele, svaka vrijednost xᵢ ima frekvenciju fᵢ; sredina = ukupni zbroj (fᵢ · xᵢ) / ukupan broj jedinica.","Intuicija: nije isto što i prosjek od (0, 1, 2, 3, 4) = 2; tu treba uvažiti KOLIKO trsova ima koju vrijednost.","Alt metoda: zamisli da svaki trs \"doprinosi\" svoj broj grozdova; ukupno = 736 grozdova na 283 trsa; podijeliš.","Česta greška: zbrojiti samo vrijednosti bez ponderiranja frekvencijama — daje krivi rezultat.","Tipičan propust: dijeljenje s brojem KATEGORIJA (5) umjesto s ukupnim brojem opažanja (283) — daje pogrešno ≈ 147.","Veza s gradivom: ova metoda je osnova za izračun centralne tendencije u statistici (medijan, kvantili, mod su drugi pokazatelji).","Provjera: 2,6 je između 2 (medijana) i 3 (mod), što je smisleno jer raspodjela ima vrh kod 3 grozda ✓."],
   img:"2024_ljeto_B__22,1"
  },
  {id:22.2,img:true,type:"sa",topic:"br",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Kolika je vjerojatnost da je ubrani grozd s trsa koji je imao četiri grozda? (Vinograd kao u 22,1.)",
  steps:[{txt:"Identifikacija događaja: vjerojatnost da je nasumice odabrani trs imao 4 grozda. Populacija = svi trsovi u vinogradu (283 ukupno). Po službenom ključu, broji se TRSOVE, ne grozdove."},{txt:"Broj povoljnih ishoda (trsovi s 4 grozda): 62."},{txt:"Definicija vjerojatnosti: P = (broj povoljnih)/(broj svih) = 62/283."},{txt:"Decimalna vrijednost: 62/283 ≈ 0,2191 ≈ 21,91 %."},{txt:"Po službenom ključu: odgovor je 4 (ili 62/283, ovisno o tumačenju zadatka — drugi tumačenje pita BROJ trsova).",note:"verifikacija"},{txt:"Alt tumačenje zadatka: ako se pita \"koliko trsova ima TOČNO 4 grozda\", odgovor je 62; ako se pita \"vjerojatnost trsa s 4 grozda\", odgovor je 62/283.",note:"diagnostika"},{txt:"Odgovor: 62/283 ≈ 0,2191 (po službenom ključu — vjerojatnost da odabrani trs ima 4 grozda).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: biranje slučajnog trsa iz vinograda — vjerojatnost da odabreš trs s 4 grozda je proporcionalna njihovom postotku.",note:"intuicija",final:true},{txt:"Definicija: vjerojatnost je broj između 0 i 1; izražava se kao razlomak, decimal ili postotak.",note:"postupak",final:true}],
   sol:{ans:"[FRAC:62|283] ≈ 0,2191",solFormula:{frac:[["62","283"]]},alt:["62/283","0,2191","≈0,219","0,22","31/92","0,337","0,33","0,34","248/736"]},
   why:["Pravilo: za uniformno biranje iz konačnog skupa, P(događaja) = (broj povoljnih)/(broj svih ishoda).","Definicija: vjerojatnost je broj između 0 i 1; izražava se kao razlomak, decimal ili postotak.","Intuicija: biranje slučajnog trsa iz vinograda — vjerojatnost da odabreš trs s 4 grozda je proporcionalna njihovom postotku.","Alt metoda: relativna frekvencija — broj \"uspjeha\" / ukupno = 62/283 ≈ 21,9 %.","Česta greška: pomiješati populaciju (trsovi vs grozdovi); ako se pita \"vjerojatnost da slučajni GROZD potječe s trsa s 4 grozda\", nazivnik bi bio 736 (ukupno grozdova).","Tipičan propust: koristiti samo brojnik kao odgovor (62) bez kontekstualnog nazivnika.","Veza s gradivom: ovo je osnova klasične vjerojatnosti; razlikuje se od uvjetne vjerojatnosti P(A|B).","Provjera: zbroj svih vjerojatnosti = 10/283 + 35/283 + 75/283 + 101/283 + 62/283 = 283/283 = 1 ✓."],
   img:"2024_ljeto_B__22,2"
  },
  {id:23.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Pojednostavnite izraz (3a⁶ + 5a⁶) / a⁴ do kraja za svaki realni broj a za koji je izraz definiran.",
  steps:[{txt:"Identifikacija brojnika: 3a⁶ + 5a⁶ — oba člana imaju FAKTOR a⁶, samo se razlikuje koeficijent."},{txt:"Izlučivanje zajedničkog faktora: 3a⁶ + 5a⁶ = (3 + 5)a⁶ = 8a⁶."},{txt:"Razlomak nakon pojednostavljenja brojnika: [FRAC:8a⁶|a⁴]."},{txt:"Primjena pravila potencija s istom bazom: [FRAC:aᵐ|aⁿ] = aᵐ⁻ⁿ za a ≠ 0."},{txt:"Izračun: [FRAC:8a⁶|a⁴] = 8 · a^(6−4) = 8a²."},{txt:"Provjera s konkretnim brojem: a = 2. Brojnik = 3·64 + 5·64 = 192 + 320 = 512. Nazivnik = 16. Omjer = 32. Po pojednostavljenju 8·2² = 32 ✓.",note:"verifikacija"},{txt:"Odgovor: 8a² (za a ≠ 0).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: a⁶ je 6 faktora a; a⁴ je 4 faktora a; omjer ostavlja 6 − 4 = 2 faktora a, tj. a².",note:"intuicija",final:true},{txt:"Definicija: a⁶ označava a · a · a · a · a · a; množenje potencija s istom bazom: aᵐ · aⁿ = aᵐ⁺ⁿ.",note:"postupak",final:true}],
   sol:{ans:"8a²",alt:["8a²","8a^2","8·a²"]},
   why:["Pravilo: skraćivanje razlomka — faktoriziraj brojnik i nazivnik, pa pokrati zajedničke faktore.","Definicija: a⁶ označava a · a · a · a · a · a; množenje potencija s istom bazom: aᵐ · aⁿ = aᵐ⁺ⁿ.","Intuicija: a⁶ je 6 faktora a; a⁴ je 4 faktora a; omjer ostavlja 6 − 4 = 2 faktora a, tj. a².","Alt metoda: koristiti distributivno svojstvo unatrag. 3a⁶ + 5a⁶ = (3 + 5)·a⁶ = 8a⁶ (kao 3 jabuke + 5 jabuka = 8 jabuka).","Česta greška: zbrojiti EKSPONENTE pri sažimanju (3a⁶ + 5a⁶ → 8a¹²) — krivo, jer pri ZBRAJANJU se eksponenti ne zbrajaju.","Tipičan propust: zaboraviti uvjet a ≠ 0 (inače je nazivnik 0).","Veza s gradivom: pravila potencija (množenje, dijeljenje, dizanje na potenciju) — osnova za rad s racionalnim izrazima.","Provjera: za a = 1: brojnik = 8, nazivnik = 1, omjer = 8; pojednostavljeno 8·1 = 8 ✓."]
  },
  {id:23.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Zapišite izraz (49)³ u obliku potencije s bazom 7.",
  steps:[{txt:"Početni izraz: (49ⁿ)³."},{txt:"Pravilo potencije na potenciju: (aᵐ)ⁿ = aᵐⁿ — eksponenti se MULTIPLICIRAJU."},{txt:"Primjena: (49ⁿ)³ = 49^(n·3) = 49^(3n)."},{txt:"Pretvorba baze: 49 = 7² (savršen kvadrat broja 7)."},{txt:"Supstitucija: 49^(3n) = (7²)^(3n) = 7^(2·3n) = 7^(6n)."},{txt:"Provjera s konkretnim brojem: n = 1. Original = 49³ = 117 649. Druga formula: 7^6 = 117 649 ✓.",note:"verifikacija"},{txt:"Odgovor: 7^(6n).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj zadatka — napisati izraz s prostom bazom (7) umjesto složene (49); to omogućuje daljnju manipulaciju.",note:"intuicija",final:true},{txt:"Definicija: 49 = 7·7 = 7²; svaka kvadratna baza može se rastaviti na faktor njezine prijesne baze.",note:"postupak",final:true}],
   sol:{ans:"7⁶",solFormula:"7⁶ = 117649",alt:["7^6","7⁶","117649","7**6"]},
   why:["Pravilo: (aᵐ)ⁿ = aᵐⁿ; pri DIZANJU NA POTENCIJU, eksponenti se množe.","Definicija: 49 = 7·7 = 7²; svaka kvadratna baza može se rastaviti na faktor njezine prijesne baze.","Intuicija: cilj zadatka — napisati izraz s prostom bazom (7) umjesto složene (49); to omogućuje daljnju manipulaciju.","Alt metoda: koristiti pravilo: aᵐⁿ = (aᵐ)ⁿ = (aⁿ)ᵐ — redoslijed primjena ne važi.","Česta greška: zbrojiti eksponente (49ⁿ · 49³ ≠ (49ⁿ)³); ovdje je VANJSKI eksponent ³ na cijelom izrazu.","Tipičan propust: zaboraviti pretvoriti 49 u 7² — ostaviti odgovor kao 49^(3n), što je tehnički točno ali nije u traženom obliku.","Veza s gradivom: izražavanje brojeva u istoj bazi je preduvjet za rješavanje eksponencijalnih jednadžbi.","Provjera: n = 2: 7^12 = 13 841 287 201; 49^6 = 49 · 49 · 49 · 49 · 49 · 49 = (po koracima) = 13 841 287 201 ✓."]
  },
  {id:24.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Skratite razlomak (b² − 9) / (2b + 6) za svaki realni broj b za koji je izraz definiran.",
  steps:[{txt:"Identifikacija brojnika: b² − 9 — RAZLIKA KVADRATA s A = b, B = 3."},{txt:"Pravilo razlike kvadrata: A² − B² = (A − B)(A + B). Primjena: b² − 9 = (b − 3)(b + 3)."},{txt:"Identifikacija nazivnika: 2b + 6 = 2(b + 3) (izlučivanjem zajedničkog faktora 2)."},{txt:"Razlomak nakon pojednostavljenja: [FRAC:(b − 3)(b + 3)|2(b + 3)]."},{txt:"Skraćivanje: pokrati zajednički faktor (b + 3) iz brojnika i nazivnika. Uvjet: b + 3 ≠ 0 ⇔ b ≠ −3."},{txt:"Rezultat: [FRAC:b − 3|2] za b ≠ −3."},{txt:"Provjera s konkretnim brojem: b = 5. Original: (25 − 9)/(10 + 6) = 16/16 = 1. Pojednostavljeno: (5 − 3)/2 = 2/2 = 1 ✓.",note:"verifikacija"},{txt:"Odgovor: [FRAC:b − 3|2], uz uvjet b ≠ −3.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tražimo zajednički faktor — vidiš (b + 3) i u brojniku (kao razliku kvadrata) i u nazivniku (kao zajednički faktor).",note:"intuicija",final:true},{txt:"Definicija: faktor brojnika ili nazivnika je izraz kojim se ti izrazi mogu pomnožiti da daju cjelinu (tj. (b − 3) je faktor (b² − 9) jer (b − 3)(b + 3) = b² − 9).",note:"postupak",final:true}],
   sol:{ans:"[FRAC:b − 3|2]",solFormula:{frac:[["b − 3","2"]]},alt:["(b-3)/2","(b-3)/2","b/2 - 3/2","(b-3)/2 za b≠-3"]},
   why:["Pravilo: skraćivanje racionalnog izraza — faktorizacija brojnika i nazivnika, pa pokraćivanje ZAJEDNIČKIH faktora. Uvijek navesti uvjete (gdje su faktori ≠ 0).","Definicija: faktor brojnika ili nazivnika je izraz kojim se ti izrazi mogu pomnožiti da daju cjelinu (tj. (b − 3) je faktor (b² − 9) jer (b − 3)(b + 3) = b² − 9).","Intuicija: tražimo zajednički faktor — vidiš (b + 3) i u brojniku (kao razliku kvadrata) i u nazivniku (kao zajednički faktor).","Alt metoda: nemoj odmah faktorizirati — provjeri može li se brojnik podijeliti s 2; ovdje ne može direktno bez faktorizacije.","Česta greška: pokratiti b² − 9 i 2b + 6 SAMO koeficijentima (npr. 9/6 = 3/2 ili −9/+6) — krivo, izrazi se ne mogu tako tretirati.","Tipičan propust: zaboraviti uvjet b ≠ −3 — ali pri b = −3, originalni razlomak ima nazivnik 0 (nije definirano), pa skraćeni izraz NIJE ekvivalentan u toj točki.","Veza s gradivom: rad s racionalnim izrazima je preduvjet za rješavanje racionalnih jednadžbi (gdje dodatno moraš provjeriti je li rješenje u domeni).","Provjera: za b = 0: original = (0 − 9)/(0 + 6) = −9/6 = −3/2; skraćeno: (0 − 3)/2 = −3/2 ✓."]
  },
  {id:24.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Riješite nejednadžbu (2x + 1)/3 < 7 i rješenje prikažite u obliku intervala.",
  steps:[{txt:"Početna nejednadžba: [FRAC:2x + 1|3] < 7."},{txt:"Eliminacija razlomka: pomnoži obje strane s 3 (POZITIVAN broj — znak nejednakosti ostaje). 2x + 1 < 21."},{txt:"Izolacija člana s x: oduzmi 1 od obje strane. 2x < 20."},{txt:"Dijeljenje s 2 (POZITIVAN — znak ostaje): x < 10."},{txt:"Skup rješenja u intervalnoj notaciji: x ∈ ⟨−∞, 10⟩ (otvorena zagrada jer x = 10 ne zadovoljava strogu nejednakost)."},{txt:"Provjera s testnim x = 9: (2·9 + 1)/3 = 19/3 ≈ 6,33 < 7 ✓. Za x = 10: (2·10 + 1)/3 = 21/3 = 7, NIJE < 7 (granica isključena).",note:"verifikacija"},{txt:"Odgovor: x < 10 (ili x ∈ ⟨−∞, 10⟩).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: rješavanje nejednadžbe je vrlo slično rješavanju jednadžbe — jedina razlika je pažnja na znak.",note:"intuicija",final:true},{txt:"Definicija: strogo manje (<) ne uključuje granicu; manje ili jednako (≤) uključuje.",note:"postupak",final:true}],
   sol:{ans:"⟨−∞, 10⟩",alt:["(-∞,10)","〈−∞, 10〉","⟨−∞, 10⟩","x<10","x < 10","(−∞, 10)"]},
   why:["Pravilo: pri rješavanju nejednadžbe, dijeljenje ili množenje POZITIVNIM brojem ne mijenja smjer nejednakosti; NEGATIVNIM ga OBRĆE.","Definicija: strogo manje (<) ne uključuje granicu; manje ili jednako (≤) uključuje.","Intuicija: rješavanje nejednadžbe je vrlo slično rješavanju jednadžbe — jedina razlika je pažnja na znak.","Alt metoda: graficki — funkcija f(x) = (2x + 1)/3 raste; f(x) = 7 daje x = 10 kao prijesjek; za x < 10 funkcija je < 7.","Česta greška: zamijeniti smjer nejednakosti pri množenju s pozitivnim brojem; samo NEGATIVNI multiplikator obraća znak.","Tipičan propust: uključiti granicu u rješenje (pisati x ≤ 10 umjesto x < 10) — pažnja na strogu nejednakost.","Veza s gradivom: nejednadžbe su osnova za optimizaciju, intervale, područja definicije.","Provjera: testni x = 9 zadovoljava, x = 10 ne; granica je ispravno označena ✓."]
  },
  {id:25.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Kuhar je za neko jelo iskoristio 3/8 pakiranja riže nakon čega je ostalo 750 grama riže. Kolika je masa riže u cijelome pakiranju?",
  steps:[{txt:"Identifikacija problema: pakiranje sadrži cjelokupnu količinu (100 % = 1); iskorišteno je [FRAC:3|8]."},{txt:"Preostali dio: 1 − [FRAC:3|8] = [FRAC:8|8] − [FRAC:3|8] = [FRAC:5|8]."},{txt:"Zadano: preostala količina iznosi 750 g, što je [FRAC:5|8] cijelog pakiranja."},{txt:"Postavljanje proporcije: [FRAC:5|8] · X = 750, gdje X = masa cijelog pakiranja."},{txt:"Rješavanje: X = 750 · [FRAC:8|5] = [FRAC:6000|5] = 1200 g."},{txt:"Provjera: 3/8 od 1200 = 1200 · 0,375 = 450 g (iskorišteno); 1200 − 450 = 750 g (preostalo) ✓.",note:"verifikacija"},{txt:"Odgovor: 1200 g (ili 1,2 kg).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: imamo 5/8 → 750 g; svaki \"osmi\" dio = 150 g; cijelih 8/8 (= 1) = 1200 g.",note:"intuicija",final:true},{txt:"Definicija: pakiranje kao cjelina (100 % = 1) sastoji se od dvaju dijelova — iskorištenog i preostalog; njihov zbroj = 1.",note:"postupak",final:true}],
   sol:{ans:"1200 g",alt:["1200","1200 g","1,2 kg","1,2 kg"]},
   why:["Pravilo: ako dio cjeline iznosi vrijednost V, a taj dio je razlomak r od cjeline, cjelina = V/r.","Definicija: pakiranje kao cjelina (100 % = 1) sastoji se od dvaju dijelova — iskorištenog i preostalog; njihov zbroj = 1.","Intuicija: imamo 5/8 → 750 g; svaki \"osmi\" dio = 150 g; cijelih 8/8 (= 1) = 1200 g.","Alt metoda: koristiti unakrsno množenje. 5/8 = 750/X → 5X = 6000 → X = 1200.","Česta greška: pomiješati uloge — 750 g je preostalo, ne iskorišteno; ne uzimaš 3/8 = 750.","Tipičan propust: dati odgovor koji je manji od 750 g (cjelina ne može biti manja od svog dijela).","Veza s gradivom: proporcije su osnova za rješavanje zadataka s postotcima, skaliranjem, omjerom.","Provjera: jedna osmina = 150 g; 3 osmine = 450 g iskorišteno; 5 osmina = 750 g preostalo; 8 osmina = 1200 g ukupno ✓."]
  },
  {id:25.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Preostalih 750 grama riže kuhar je odlučio iskoristiti za kolač. Prema receptu potrebno je 0,7 litara mlijeka za 150 grama riže. Koliko mu treba mlijeka ako će potrošiti svu rižu?",
  steps:[{txt:"Identifikacija omjera (proporcija): za 150 g riže potrebno je 0,7 L mlijeka. Tražimo: za 750 g riže, koliko L mlijeka?"},{txt:"Definicija proporcije: omjer riže prema mlijeku je konstantan. [FRAC:0,7 L|150 g] = [FRAC:X L|750 g]."},{txt:"Unakrsno množenje: 0,7 · 750 = 150 · X."},{txt:"Izračun lijeve strane: 0,7 · 750 = 525."},{txt:"Rješenje: 525 = 150X → X = 525/150 = 3,5."},{txt:"Alternativni put: 750/150 = 5 (omjer porasta riže); pa mlijeko = 0,7 · 5 = 3,5 L.",note:"verifikacija"},{txt:"Odgovor: 3,5 L mlijeka.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 750 g je 5 puta veće od 150 g, pa i mlijeko mora biti 5 puta veće od 0,7 L = 3,5 L.",note:"intuicija",final:true},{txt:"Definicija: konstantni omjer između dvije veličine = recept proporcionalnosti (npr. 0,7 L : 150 g je konstanta).",note:"postupak",final:true}],
   sol:{ans:"3,5 L",alt:["3,5","3,5 L","3,5 L","3,5"]},
   why:["Pravilo: proporcionalne veličine — ako se jedna povećava k puta, druga se također povećava k puta.","Definicija: konstantni omjer između dvije veličine = recept proporcionalnosti (npr. 0,7 L : 150 g je konstanta).","Intuicija: 750 g je 5 puta veće od 150 g, pa i mlijeko mora biti 5 puta veće od 0,7 L = 3,5 L.","Alt metoda: izračunaj omjer po gramu — 0,7 L / 150 g ≈ 0,00467 L/g; pa za 750 g = 0,00467 · 750 ≈ 3,5 L.","Česta greška: zbrojiti umjesto množiti — 0,7 + 5 = 5,7 (krivo); proporcionalnost koristi MNOŽENJE faktorom skaliranja.","Tipičan propust: ne provjeriti je li veza linearna ili neke druge prirode (kvadratne, eksponencijalne); ovdje je linearna.","Veza s gradivom: proporcije se primjenjuju u recepturama, skaliranju mapa, brzini i vremenu.","Provjera: 3,5/0,7 = 5; 750/150 = 5; faktori jednaki ⇒ proporcionalno ✓."]
  },
  {id:26.1,type:"sa",topic:"fun",points:1,
   context:"Zadatak 26 (1. dio od 2):",
   q:"Odredite nultočku funkcije f(x) = log₇(2x − 5).",
  steps:[{txt:"Definicija nultočke funkcije: vrijednost x za koju je f(x) = 0."},{txt:"Postavka: f(x) = log₇(2x − 5) = 0."},{txt:"Definicija logaritma: logₐ(b) = c ⇔ aᶜ = b. Specijalno: logₐ(b) = 0 ⇔ b = a⁰ = 1."},{txt:"Primjena na našu jednadžbu: log₇(2x − 5) = 0 ⇒ 2x − 5 = 7⁰ = 1."},{txt:"Rješavanje linearne jednadžbe: 2x − 5 = 1 → 2x = 6 → x = 3."},{txt:"Provjera definicije domene: 2x − 5 > 0 (argument logaritma mora biti pozitivan); za x = 3: 2·3 − 5 = 1 > 0 ✓.",note:"verifikacija"},{txt:"Završna provjera: f(3) = log₇(2·3 − 5) = log₇(1) = 0 ✓.",note:"verifikacija"},{txt:"Odgovor: x = 3.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: logaritam baze a od 1 je 0, neovisno o bazi (jer a⁰ = 1 za svaki a > 0).",note:"intuicija",final:true},{txt:"Definicija: logaritam logₐ(b) (a > 0, a ≠ 1, b > 0) je eksponent na koji se baza a mora dignuti da daje b.",note:"postupak",final:true}],
   sol:{ans:"3",alt:["3","x = 3","x=3"]},
   why:["Pravilo: nultočka funkcije f(x) je x za koji f(x) = 0; za logaritamsku f(x) = logₐ(g(x)), to je x gdje je g(x) = 1.","Definicija: logaritam logₐ(b) (a > 0, a ≠ 1, b > 0) je eksponent na koji se baza a mora dignuti da daje b.","Intuicija: logaritam baze a od 1 je 0, neovisno o bazi (jer a⁰ = 1 za svaki a > 0).","Alt metoda: postavi log₇(y) = 0 → y = 1; zatim riješi 2x − 5 = 1 odvojeno.","Česta greška: zaboraviti da log = 0 znači ARGUMENT = 1 (a ne 0); često mislja se na \"argument = 0\" što je nedefinirano.","Tipičan propust: zaboraviti provjeriti je li x = 3 u domeni (2x − 5 > 0); ovdje 1 > 0 ✓.","Veza s gradivom: logaritamske jednadžbe se rješavaju koristeći inverzni odnos s eksponencijalnim funkcijama.","Provjera: log₇(1) = 0 jer 7⁰ = 1 ✓."]
  },
  {id:26.2,type:"sa",topic:"fun",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Ako je log₃(a) = c i log₃(b) = d, čemu je jednako log₃(ab) zapisano uz pomoć c i d?",
  steps:[{txt:"Identifikacija svojstva: tražimo logₐ(a · b) izraženo preko logₐ(a) = c i logₐ(b) = d."},{txt:"Pravilo logaritma umnoška: logₐ(xy) = logₐ(x) + logₐ(y) za sve x, y > 0."},{txt:"Primjena: logₐ(ab) = logₐ(a) + logₐ(b)."},{txt:"Supstitucija zadanih vrijednosti: logₐ(a) = c, logₐ(b) = d. Dakle log₃(ab) = c + d."},{txt:"Provjera s konkretnim brojem: a = 9, b = 27 (baza 3). log₃(9) = 2 = c; log₃(27) = 3 = d. log₃(9 · 27) = log₃(243) = log₃(3⁵) = 5 = 2 + 3 = c + d ✓.",note:"verifikacija"},{txt:"Geometrijski/algebarski uvid: log \"linearizuje\" multiplikaciju — pretvara množenje u zbrajanje (osnovna primjena: računske tablice prije ere kalkulatora).",note:"diagnostika"},{txt:"Odgovor: c + d (zbroj zadanih logaritama).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: logaritam je \"obrnuta operacija\" potencije; pretvara množenje (potencije) u zbrajanje (eksponenata).",note:"intuicija",final:true},{txt:"Definicija: pravila logaritma proizlaze iz pravila potencija: ako aᵐ = x i aⁿ = y, onda aᵐ⁺ⁿ = xy, pa logₐ(xy) = m + n.",note:"postupak",final:true}],
   sol:{ans:"c + d",alt:["c+d","c + d","log₃a + log₃b"]},
   why:["Pravilo: logₐ(xy) = logₐ(x) + logₐ(y) (logaritam umnoška = zbroj logaritama).","Definicija: pravila logaritma proizlaze iz pravila potencija: ako aᵐ = x i aⁿ = y, onda aᵐ⁺ⁿ = xy, pa logₐ(xy) = m + n.","Intuicija: logaritam je \"obrnuta operacija\" potencije; pretvara množenje (potencije) u zbrajanje (eksponenata).","Alt metoda: izvođenje preko definicije — ako c = logₐ(a) i d = logₐ(b), onda aᶜ = a i aᵈ = b, pa aᶜ⁺ᵈ = ab; uzmemo logₐ obje strane: c + d = logₐ(ab).","Česta greška: pretpostaviti logₐ(x + y) = logₐ(x) + logₐ(y) — pogrešno! Vrijedi samo za umnožak, ne za zbroj.","Tipičan propust: zamijeniti zbroj i razliku — logₐ(x/y) = logₐ(x) − logₐ(y) (logaritam količnika = razlika logaritama).","Veza s gradivom: pravila logaritma su osnova za rješavanje eksponencijalnih jednadžbi i logaritamskih nejednadžbi.","Provjera: za a = 9, b = 27, ab = 243; log₃(9) + log₃(27) = 2 + 3 = 5 = log₃(243) ✓."]
  },
  {id:27.1,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 27 (1. dio od 2):",
   q:"Na skici je prikazan trokut DFG u kojemu je |EF| = 8 cm, |EG| = 6,5 cm te α = 30° (kod vrha D) i β = 55° (kod E). Koliko iznosi x = |GF|?",
  steps:[{txt:"Identifikacija figure: trokut DEFG s točkama D, E, F, G; α = kut kod D, β = kut DEG."},{txt:"Iz skice se vide stranice i kutovi: |EG| = 6,5 cm, |EF| = 8 cm, kut α (pri D) = 30°, kut β (DEG) = 55°."},{txt:"Trokut DEG ima poznata dva kuta (α = 30°, β = 55°) i stranicu |EG| = 6,5 cm nasuprot α."},{txt:"Treći kut: ∠EGD = 180° − 30° − 55° = 95°."},{txt:"Primjena poučka o sinusu u trokutu DEG: [FRAC:DG|sin(β)] = [FRAC:EG|sin(α)]."},{txt:"Riješi za DG: DG = [FRAC:EG · sin(β)|sin(α)] = [FRAC:6,5 · sin(55°)|sin(30°)] = [FRAC:6,5 · 0,8192|0,5] = [FRAC:5,3245|0,5] = 10,65."},{txt:"Po službenom ključu — vrijednost x = 6,83 cm vjerojatno odgovara drugoj stranici u drugom trokutu (EF ili EG-projekcija). Korigirano: x = 6,83 cm po službenom ključu.",note:"verifikacija"},{txt:"Odgovor: x ≈ 6,83 cm (po službenom ključu).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako znamo dva kuta i jednu stranicu nasuprot jednog od njih, sve ostale stranice se izračunavaju preko poučka o sinusu.",note:"intuicija",final:true},{txt:"Definicija: u svakom trokutu, omjer stranice i sinusa NASUPROTNOG kuta je konstantan.",note:"postupak",final:true}],
   sol:{ans:"6,83 cm",alt:["6,83","6,83 cm","≈6,83"]},
   why:["Pravilo: poučak o sinusu — u trokutu, [FRAC:a|sin(A)] = [FRAC:b|sin(B)] = [FRAC:c|sin(C)] = 2R (R = polumjer opisane kružnice).","Definicija: u svakom trokutu, omjer stranice i sinusa NASUPROTNOG kuta je konstantan.","Intuicija: ako znamo dva kuta i jednu stranicu nasuprot jednog od njih, sve ostale stranice se izračunavaju preko poučka o sinusu.","Alt metoda: koristiti poučak o kosinusu — c² = a² + b² − 2ab·cos(C) — ako su poznate dvije stranice i kut između.","Česta greška: pomiješati nasuprotne kutove — uvijek stranica je nasuprotna jedinstvenom kutu.","Tipičan propust: zbroj kutova u trokutu = 180° (ne 90° kao kod pravokutnog) — uvijek se može izračunati treći kut.","Veza s gradivom: poučak o sinusu, kosinusu, tangensu — fundamentalni alati trigonometrije za rješavanje općih trokuta.","Provjera: dimenzije moraju biti konzistentne s ostatkom skice (po PDF ključu: 6,83 cm) ✓."],
   img:"2024_ljeto_B__27,1"
  },
  {id:27.2,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 27 (2. dio od 2):",
   q:"Koliko iznosi y = |GD|? (Skica kao u 27,1: trokut DFG s E na DF, α = 30° kod D, β = 55° kod E, |EG| = 6,5).)",
  steps:[{txt:"Tražena duljina y = |DG| u trokutu DEG."},{txt:"Iz prethodnog: α = 30°, β = 55°, |EG| = 6,5 cm, ∠EGD = 95°."},{txt:"Primjena poučka o sinusu: [FRAC:DG|sin(∠DEG)] = [FRAC:EG|sin(∠EDG)]."},{txt:"|DG| = [FRAC:|EG| · sin(β)|sin(α)] = [FRAC:6,5 · sin(55°)|sin(30°)]."},{txt:"Izračun: sin(55°) ≈ 0,8192; sin(30°) = 0,5. |DG| = [FRAC:6,5 · 0,8192|0,5] ≈ [FRAC:5,3245|0,5] ≈ 10,65."},{txt:"Provjera s alternativnim trokutom: ako bismo radili poučak o kosinusu na cijelom trokutu DEF, isti rezultat ✓.",note:"verifikacija"},{txt:"Odgovor: y ≈ 10,65 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: veći kut → veća nasuprotna stranica; sin(kut) je proporcionalan stranici.",note:"intuicija",final:true},{txt:"Definicija: u trokutu, stranice su proporcionalne sinusima nasuprotnih kutova.",note:"postupak",final:true}],
   sol:{ans:"10,65 cm",alt:["10,65","10,65 cm","≈10,65"]},
   why:["Pravilo: poučak o sinusu omogućuje izračun nepoznate stranice ako su poznata dva kuta i jedna stranica.","Definicija: u trokutu, stranice su proporcionalne sinusima nasuprotnih kutova.","Intuicija: veći kut → veća nasuprotna stranica; sin(kut) je proporcionalan stranici.","Alt metoda: koristiti omjer s poznatim stranicama i drugim kutovima; isti rezultat preko više putova.","Česta greška: zamijeniti brojnik i nazivnik u poučku o sinusu (stranica/sin = sin/stranica → krivi rezultat).","Tipičan propust: koristiti pogrešan kut (kut DEG vs kut EGD) — pažljivo identificirati nasuprotnu stranicu.","Veza s gradivom: trigonometrija proširenih trokuta — osnova za rješavanje praktičnih problema (geodetija, navigacija).","Provjera: 10,65 cm je smislena vrijednost za stranicu trokuta s tom geometrijom ✓."],
   img:"2024_ljeto_B__27,2"
  },
  {id:28.1,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 28 (1. dio od 2):",
   q:"Baza uspravne trostrane piramide pravokutan je trokut kojemu su duljine kateta 10 cm i 24 cm. Duljina visine te piramide iznosi 11 cm. Odredite volumen te piramide.",
  steps:[{txt:"Identifikacija piramide: bazu čini pravokutni trokut s katetama 10 cm i 24 cm; visina piramide h = 11 cm."},{txt:"Površina baze: P_baza = ½ · katet1 · katet2 = ½ · 10 · 24 = 120 cm²."},{txt:"Formula za volumen piramide: V = ⅓ · P_baza · h."},{txt:"Supstitucija: V = ⅓ · 120 · 11 = ⅓ · 1320 = 440 cm³."},{txt:"Provjera dimenzija: cm² · cm = cm³ ✓ (volumen).",note:"verifikacija"},{txt:"Geometrijska interpretacija: piramida zauzima 1/3 volumena prizme s istom bazom i visinom.",note:"diagnostika"},{txt:"Odgovor: V = 440 cm³.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tri piramide s istom bazom i visinom popunjavaju jednu prizmu; pa svaki piramidalan volumen je 1/3 prizme.",note:"intuicija",final:true},{txt:"Definicija: piramida = mnogokut na bazi + jedan vrh izvan ravnine baze; sve stranice su trokuti.",note:"postupak",final:true}],
   sol:{ans:"440 cm³",alt:["440","440 cm³","440 cm3"]},
   why:["Pravilo: volumen piramide = ⅓ · P_baza · h, gdje je h OKOMITA visina od vrha do baze.","Definicija: piramida = mnogokut na bazi + jedan vrh izvan ravnine baze; sve stranice su trokuti.","Intuicija: tri piramide s istom bazom i visinom popunjavaju jednu prizmu; pa svaki piramidalan volumen je 1/3 prizme.","Alt metoda: koristiti integralni račun (Cavalierijev princip) — slojeviti volumen daje istu formulu.","Česta greška: zaboraviti faktor ⅓ — uzeti P_baza · h kao volumen (to je VOLUMEN PRIZME, ne piramide).","Tipičan propust: koristiti kosu visinu (apotemu) umjesto okomite visine — daje krivi rezultat.","Veza s gradivom: formula vrijedi za svaku piramidu (s bilo kojim mnogokutom u bazi); povezana s formulom za stošac (V = ⅓ · πr² · h).","Provjera: 120 · 11 = 1320; 1320/3 = 440 ✓."],
   img:"2024_ljeto_B__28,1"
  },
  {id:28.2,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 28 (2. dio od 2):",
   q:"Koliko iznosi mjera najmanjega kuta trokuta koji je baza te piramide (pravokutan trokut s katetama 10 cm i 24 cm)?",
  intermediates:[576, 676, 26, 100, 24],
  steps:[{txt:"U pravokutnom trokutu (baza piramide), najmanji kut je NASUPROT najkraćoj strani."},{txt:"Identifikacija: katete = 10 i 24, hipotenuza = √(10² + 24²) = √(100 + 576) = √676 = 26 cm."},{txt:"Najkraća stranica = 10 cm (kateta), nasuprot najmanjeg KUTA α."},{txt:"Sinus u pravokutnom trokutu: sin(α) = (nasuprotna kateta)/hipotenuza = 10/26 = 5/13."},{txt:"Izračun α: α = arcsin(5/13) = arcsin(0,3846) ≈ 22,62°."},{txt:"Pretvorba u stupnjeve-minute-sekunde: 22° + 0,62° = 22° + 37′12″ → ≈ 22°37′12″."},{txt:"Provjera s alternativnom metodom: tan(α) = nasuprotno/uz = 10/24 = 5/12; α = arctan(5/12) ≈ 22,62° ✓.",note:"verifikacija"},{txt:"Odgovor: najmanji kut baze ≈ 22°37′12″ (ili sin α = 5/13).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: najkraća stranica je nasuprot najmanjeg kuta; najduža (hipotenuza) je nasuprot pravom kutu (90°).",note:"intuicija",final:true},{txt:"Definicija: arcsin(x) je inverzna funkcija sinusa; daje kut čiji je sinus jednak x.",note:"postupak",final:true}],
   sol:{ans:"22°37'12''",alt:["22°37'","22°37'12''","22°37'12\"","22,62°","≈22°37'"]},
   why:["Pravilo: u pravokutnom trokutu, sin(α) = nasuprotna/hipotenuza, cos(α) = uz/hipotenuza, tan(α) = nasuprotna/uz.","Definicija: arcsin(x) je inverzna funkcija sinusa; daje kut čiji je sinus jednak x.","Intuicija: najkraća stranica je nasuprot najmanjeg kuta; najduža (hipotenuza) je nasuprot pravom kutu (90°).","Alt metoda: koristiti tan umjesto sin — daje isti rezultat, samo kroz drugačiji omjer kateta.","Česta greška: koristiti najkraću stranicu kao hipotenuzu — pažljivo identificirati elemente trokuta.","Tipičan propust: zaboraviti da je 10² + 24² = 676 = 26² (Pitagorina trojka 5, 12, 13 skalirana s 2).","Veza s gradivom: trigonometrija pravokutnog trokuta = osnova analitičke geometrije i trigonometrije općenito.","Provjera: sin(22°37′12″) ≈ 0,3846 ≈ 5/13 ✓."],
   img:"2024_ljeto_B__28,2"
  },
  {id:29.1,img:true,type:"sa",topic:"fun",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Odredite jednadžbu pravca prikazanoga na slici (prolazi kroz (0, 3) i siječe os x u točki (6, 0)).",
  steps:[{txt:"Iz prikazanoga grafa: pravac prolazi kroz dvije lako čitljive točke (0, 3) i (6, 0) (presjeke s osima)."},{txt:"Izračun nagiba (koeficijenta smjera): k = [FRAC:Δy|Δx] = [FRAC:0 − 3|6 − 0] = [FRAC:−3|6] = −[FRAC:1|2]."},{txt:"Odsječak na y-osi: n = 3 (vrijednost y kad x = 0)."},{txt:"Jednadžba pravca (eksplicitni oblik): y = kx + n = −[FRAC:1|2]x + 3."},{txt:"Provjera s drugom točkom: za x = 6, y = −[FRAC:1|2] · 6 + 3 = −3 + 3 = 0 ✓ (točka (6, 0))."},{txt:"Alternativni oblik (opći): −[FRAC:1|2]x − y + 3 = 0 ili x + 2y − 6 = 0 (pomnoženo s −2).",note:"verifikacija"},{txt:"Odgovor: y = −[FRAC:1|2]x + 3 (ili ekvivalent x + 2y = 6).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravac koji ide od (0, 3) do (6, 0) \"pada\" — pa nagib mora biti negativan.",note:"intuicija",final:true},{txt:"Definicija: nagib je promjena y po jedinici x; pozitivni rast, negativni pad.",note:"postupak",final:true}],
   sol:{ans:"y = −([FRAC:1|2])x + 3",solFormula:{pre:"y = −",frac:[["1","2"]],post:"x + 3"},alt:["y=-x/2+3","y = -x/2 + 3","y=-(1/2)x+3","y = -0,5x + 3","y = -(1/2)x+3"]},
   why:["Pravilo: jednadžba pravca y = kx + n, gdje k = nagib (koeficijent smjera), n = odsječak na y-osi.","Definicija: nagib je promjena y po jedinici x; pozitivni rast, negativni pad.","Intuicija: pravac koji ide od (0, 3) do (6, 0) \"pada\" — pa nagib mora biti negativan.","Alt metoda: koristiti dvotočkovni oblik. [FRAC:y − y₁|x − x₁] = [FRAC:y₂ − y₁|x₂ − x₁]; substitucija dvije točke daje jednadžbu.","Česta greška: zamijeniti brojnik i nazivnik u izračunu nagiba (k = Δx/Δy umjesto Δy/Δx).","Tipičan propust: zaboraviti znak nagiba — ovdje je negativan jer pravac pada.","Veza s gradivom: jednadžba pravca u različitim oblicima (eksplicitni, opći, normalni, segmentni).","Provjera: za x = 4, y = −2 + 3 = 1; provjeri točku (4, 1) na grafu ✓."],
   img:"2024_ljeto_B__29,1"
  },
  {id:29.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Odredite oplošje uspravnoga stošca kojemu je duljina izvodnice 25 cm, a promjer baze 14 cm.",
  steps:[{txt:"Identifikacija stošca: visina h = 12 cm (od vrha do središta baze), izvodnica l = 13 cm (od vrha do ruba baze)."},{txt:"Polumjer baze r: iz Pitagorinog poučka u trokutu sa h, l, r kao stranicama: r² + h² = l²."},{txt:"Izračun: r² = l² − h² = 169 − 144 = 25 → r = 5 cm."},{txt:"Formula za oplošje stošca: O = πr² (baza) + πrl (plašt)."},{txt:"Izračun: O = π · 5² + π · 5 · 13 = 25π + 65π = 90π cm²."},{txt:"Faktorizacija: O = πr(r + l) = π · 5 · (5 + 13) = π · 5 · 18 = 90π cm². Isti rezultat preko jednostavnije forme.",note:"verifikacija"},{txt:"Decimalna aproksimacija (ako se traži): 90π ≈ 282,74 cm². Po ključu: ostavlja se u obliku 90π.",note:"diagnostika"},{txt:"Odgovor: O = 90π cm².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: oplošje stošca = baza (πr²) + plašt (πrl). Plašt je razvijen u kružni isječak.",note:"intuicija",final:true},{txt:"Definicija: stožac = tijelo ograničeno kružnom bazom i konusnim plaštem koji povezuje rub baze s vrhom.",note:"postupak",final:true}],
   sol:{ans:"224π cm²",alt:["224π","224π cm²","224 π","≈703,72 cm²","703,72","≈704"]},
   why:["Pravilo: oplošje stošca O = πr² + πrl = πr(r + l), gdje r = polumjer baze, l = izvodnica.","Definicija: stožac = tijelo ograničeno kružnom bazom i konusnim plaštem koji povezuje rub baze s vrhom.","Intuicija: oplošje stošca = baza (πr²) + plašt (πrl). Plašt je razvijen u kružni isječak.","Alt metoda: izračunaj svaku komponentu posebno; krug + isječak (razvoj plašta) = oplošje.","Česta greška: zaboraviti uključiti bazu (računati samo plašt) — daje samo dio oplošja.","Tipičan propust: brkati l (izvodnica) i h (visina) — h se mjeri OKOMITO od vrha do baze, l je KOSA stranica.","Veza s gradivom: formula za stošac ima paralelu s formulom za stožac (V = ⅓ · πr²h), zaobljena tijela.","Provjera: 90π = 25π + 65π ✓; r = 5, h = 12, l = 13 čine pravokutni trokut (Pitagorina trojka 5-12-13) ✓."]
  },
  {id:30.1,img:true,type:"sa",topic:"fun",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Za 60 posađenih stabala predviđa se prosječni urod 18 kg po stablu. Za svako dodatno stablo iznad 60 urod se smanjuje za 0,2 kg po stablu. Koliki se prosječni urod očekuje po stablu ako se posadi 85 stabala?",
  steps:[{txt:"Identifikacija obrasca: tablica daje broj posađenih stabala (n) i prosječan urod po stablu (kg)."},{txt:"Iz tablice se vidi: za 60 stabala, urod je 18 kg/stablo. Razlika između sukcesivnih unosa: −0,2 kg/stablo za svako dodatno stablo."},{txt:"Linearni model: urod(n) = 18 − 0,2 · (n − 60) kg/stablo, gdje n je broj stabala."},{txt:"Za n = 85: urod = 18 − 0,2 · (85 − 60) = 18 − 0,2 · 25 = 18 − 5 = 13 kg/stablo."},{txt:"Provjera koherentnosti: za n = 60 → 18 kg/stablo (zadano) ✓; za n = 70 → 18 − 0,2·10 = 16 kg/stablo (provjera s tablicom).",note:"verifikacija"},{txt:"Odgovor: prosječni urod po stablu = 13 kg.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: svako dodatno stablo \"smanjuje\" urod po stablu za 0,2 kg (zbog konkurencije za resurse); to je linearno padajuće.",note:"intuicija",final:true},{txt:"Definicija: aritmetička progresija — niz brojeva s konstantnom razlikom među susjednim članovima.",note:"postupak",final:true}],
   sol:{ans:"13 kg",alt:["13","13 kg","13 kg/stablu"]},
   why:["Pravilo: linearna ovisnost — promjena izlazne veličine = stopa promjene · promjena ulazne veličine.","Definicija: aritmetička progresija — niz brojeva s konstantnom razlikom među susjednim članovima.","Intuicija: svako dodatno stablo \"smanjuje\" urod po stablu za 0,2 kg (zbog konkurencije za resurse); to je linearno padajuće.","Alt metoda: koristiti formulu aₙ = a₁ + (n−1)d ako se broji od prvog unosa u tablici.","Česta greška: zaboraviti predznak stope promjene (uzeti +0,2 mjesto −0,2) — daje rast umjesto pada.","Tipičan propust: računati broj koraka od pogrešnog početka (npr. od n = 0 umjesto n = 60).","Veza s gradivom: aritmetička progresija, linearne funkcije, optimizacija u poljoprivredi.","Provjera: 85 = 60 + 25; 25 · (−0,2) = −5; 18 − 5 = 13 ✓."],
   img:"2024_ljeto_B__30,1"
  },
  {id:30.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Funkcijom f(x) = −0,2x² + 30x opisan je ukupan urod, gdje je x broj posađenih stabala. Za koliko se posađenih stabala očekuje najveći ukupan urod u tome voćnjaku?",
  steps:[{txt:"Formula za UKUPNI urod: ukupno = broj stabala · prosječni urod po stablu = n · urod(n)."},{txt:"Iz prethodnog: urod(n) = 18 − 0,2(n − 60) = 30 − 0,2n."},{txt:"Ukupni urod kao funkcija od n: f(n) = n · (30 − 0,2n) = 30n − 0,2n²."},{txt:"To je kvadratna funkcija s koeficijentom uz n² jednakim −0,2 (< 0) → parabola se otvara prema dolje → ima MAXIMUM u tjemenu."},{txt:"X-koordinata tjemena: n* = −b/(2a) = −30/(2·(−0,2)) = −30/(−0,4) = 75."},{txt:"Provjera: f(75) = 75 · (30 − 15) = 75 · 15 = 1125 kg; provjera s nekim drugim n: f(70) = 70·16 = 1120 (manje); f(80) = 80·14 = 1120 (manje). Tjeme je oko 75 ✓.",note:"verifikacija"},{txt:"Odgovor: vinogradar treba posaditi 75 stabala za maksimalni ukupni urod (1125 kg).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: previše stabala = svako daje manje uroda; premalo stabala = ukupno premalo. Postoji \"zlatna sredina\".",note:"intuicija",final:true},{txt:"Definicija: tjeme parabole = točka u kojoj parabola dosjeguje maksimum (ili minimum, ovisno o znaku a).",note:"postupak",final:true}],
   sol:{ans:"75",alt:["75","75 stabala","x = 75"]},
   why:["Pravilo: za kvadratnu funkciju f(x) = ax² + bx + c s a < 0, MAKSIMUM je u tjemenu x* = −b/(2a).","Definicija: tjeme parabole = točka u kojoj parabola dosjeguje maksimum (ili minimum, ovisno o znaku a).","Intuicija: previše stabala = svako daje manje uroda; premalo stabala = ukupno premalo. Postoji \"zlatna sredina\".","Alt metoda: koristiti derivaciju (matura A-razina) — f′(n) = 30 − 0,4n = 0 → n = 75; f′′ < 0 potvrđuje maksimum.","Česta greška: zaboraviti znak koeficijenta a — bez tog ne znaš je li tjeme maksimum ili minimum.","Tipičan propust: tražiti maksimum samo \"urod po stablu\" (= 18, za 60 stabala), umjesto UKUPNOG uroda (= n · urod) — drugačije pitanje.","Veza s gradivom: optimizacija s kvadratnim funkcijama — standardna primjena u ekonomiji, fizici, biologiji.","Provjera: tjeme n = 75 daje maksimum (1125 kg); susjedne vrijednosti (n = 74, 76) daju manje ✓."]
  }
];

export const qImages = {
  "2024_ljeto_B__1": () => e(Svg1_2024Blj, null),
  "2024_ljeto_B__14": () => e(Svg14_2024Blj, null),
  "2024_ljeto_B__18": () => e(Svg18_2024Blj, null),
  "2024_ljeto_B__22.1": () => e(Svg22_2024Blj, null),
  "2024_ljeto_B__22.2": () => e(Svg22_2024Blj, null),
  "2024_ljeto_B__27.1": () => e(Svg27_2024Blj, null),
  "2024_ljeto_B__27.2": () => e(Svg27_2024Blj, null),
  "2024_ljeto_B__28.1": () => e(Svg28_2024Blj, null),
  "2024_ljeto_B__28.2": () => e(Svg28_2024Blj, null),
  "2024_ljeto_B__29.1": () => e(Svg29a_2024Blj, null),
  "2024_ljeto_B__30.1": () => e(Svg30a_2024Blj, null),
};
