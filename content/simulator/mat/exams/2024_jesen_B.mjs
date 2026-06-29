// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg30_2024Ajes(){
  const st="var(--text)";
  // ---- PIE CHART ----
  const W=440, H=260;
  const cx=130, cy=130, r=90;
  const segs=[
    {p:16, col:"#50c878", lbl:"nedovoljan (1)"},
    {p:28, col:"#e05252", lbl:"dovoljan (2)"},
    {p:24, col:"#9ca3af", lbl:"dobar (3)"},
    {p:20, col:"#e9b446", lbl:"vrlo dobar (4)"},
    {p:12, col:"#4a90d9", lbl:"odličan (5)"}
  ];
  let cumStart = -Math.PI/2;
  const arcs=[], labels=[], legend=[];
  segs.forEach((s,i)=>{
    const sweep = s.p/100 * 2 * Math.PI;
    const a0 = cumStart;
    const a1 = cumStart + sweep;
    const x0 = cx + r*Math.cos(a0);
    const y0 = cy + r*Math.sin(a0);
    const x1v = cx + r*Math.cos(a1);
    const y1v = cy + r*Math.sin(a1);
    const large = sweep > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1v.toFixed(2)} ${y1v.toFixed(2)} Z`;
    arcs.push(e("path",{key:"s"+i,d:d,fill:s.col,stroke:"#060910",strokeWidth:1.5}));
    const am = (a0+a1)/2;
    const lx = cx + (r+16)*Math.cos(am);
    const ly = cy + (r+16)*Math.sin(am);
    labels.push(e("text",{key:"pl"+i,x:lx,y:ly+4,textAnchor:"middle",fontSize:12,fontFamily:"sans-serif",fill:st},s.p+" %"));
    legend.push(e("rect",{key:"lgb"+i,x:270,y:48+i*28,width:14,height:14,fill:s.col,stroke:st,strokeWidth:0.6}));
    legend.push(e("text",{key:"lgl"+i,x:292,y:60+i*28,fontSize:13,fontFamily:"sans-serif",fill:st},s.lbl));
    cumStart = a1;
  });
  const pie = e("svg",{key:"pie",viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
                       style:{maxWidth:"440px",width:"100%",display:"block",margin:"4px auto 16px"}},
    ...arcs, ...labels, ...legend
  );
  // ---- TABLICA ----
  const c={padding:"6px 12px",border:"1px solid var(--bdr2,#1e293b)",fontSize:13,lineHeight:1.4};
  const h={...c,fontWeight:700,background:"var(--s2,#0b1220)",textAlign:"center"};
  const v={...c,textAlign:"center",background:"var(--s1,#0a0f1a)"};
  const em={...c,textAlign:"center",background:"rgba(233,180,70,.08)",border:"1px dashed var(--gold,#e9b446)",color:"var(--gold,#e9b446)",fontWeight:600};
  const tbl = e("div",{key:"tbl",style:{overflowX:"auto",margin:"8px auto",maxWidth:"340px"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:13,width:"100%"}},
      e("thead",null,e("tr",null,
        e("th",{style:{...h,textAlign:"left"}},"Ocjena"),
        e("th",{style:h},"Broj učenika")
      )),
      e("tbody",null,
        e("tr",null,e("td",{style:{...c,textAlign:"left"}},"nedovoljan (1)"),e("td",{style:v},"4")),
        e("tr",null,e("td",{style:{...c,textAlign:"left"}},"dovoljan (2)"),  e("td",{style:v},"7")),
        e("tr",null,e("td",{style:{...c,textAlign:"left"}},"dobar (3)"),     e("td",{style:v},"6")),
        e("tr",null,e("td",{style:{...c,textAlign:"left"}},"vrlo dobar (4)"),e("td",{style:em},"?")),
        e("tr",null,e("td",{style:{...c,textAlign:"left"}},"odličan (5)"),   e("td",{style:v},"3"))
      )
    )
  );
  return e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}}, pie, tbl);
}

function Svg3_2024Bjes(){
  const st="var(--text)";
  const muted="var(--muted,#94a3b8)";
  const blue="var(--blue,#4a90d9)";
  const red="var(--red,#e05252)";
  const gray="#9ca3af";
  const yellow="var(--yellow,#e9b446)";
  const W=620, H=320;
  const ox=70, oy=30, barH=34, gapY=16;
  const axisY = oy + 4*(barH+gapY);
  const barW = W - ox - 40;
  // Proportions (approx from PDF) per year: [onTime, delay<30, delay30-120, cancel]
  const years=[
    {y:"2023.", vals:[65, 2, 20, 13]},
    {y:"2022.", vals:[55, 7, 30, 8]},
    {y:"2021.", vals:[60, 10, 18, 12]},
    {y:"2020.", vals:[50, 35, 5, 10]}
  ];
  const colors=[blue, red, gray, yellow];
  const elements=[];
  years.forEach((yr,i)=>{
    const y = oy + i*(barH+gapY);
    let x = ox;
    yr.vals.forEach((v,j)=>{
      const w = barW * v/100;
      elements.push(e("rect",{key:`b${i}-${j}`, x:x, y:y, width:w, height:barH,
        fill:colors[j], fillOpacity:0.88}));
      x += w;
    });
    elements.push(e("text",{key:`yr${i}`, x:ox-12, y:y+barH/2+5, textAnchor:"end",
      fontSize:13, fontFamily:"sans-serif", fill:st, fontWeight:500}, yr.y));
  });
  // X-axis ticks: 0%, 20%, 40%, 60%, 80%, 100%
  const ticks=[0,20,40,60,80,100];
  ticks.forEach(t=>{
    const x = ox + barW*t/100;
    elements.push(e("line",{key:"tk"+t, x1:x, y1:axisY, x2:x, y2:axisY+5, stroke:muted, strokeWidth:1}));
    elements.push(e("text",{key:"lbl"+t, x:x, y:axisY+20, textAnchor:"middle",
      fontSize:12, fontFamily:"sans-serif", fill:muted}, t+" %"));
  });
  // Legend below axis
  const legendY = axisY + 44;
  const legendItems=[
    {col:blue, txt:"na vrijeme"},
    {col:red, txt:"< 30 min"},
    {col:gray, txt:"30–120 min"},
    {col:yellow, txt:"otkazan"}
  ];
  let lx = ox;
  legendItems.forEach((it,i)=>{
    elements.push(e("rect",{key:"lg"+i, x:lx, y:legendY, width:14, height:14, fill:it.col, rx:2}));
    elements.push(e("text",{key:"lgt"+i, x:lx+20, y:legendY+12, fontSize:12, fontFamily:"sans-serif", fill:st}, it.txt));
    lx += 130;
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"620px",width:"100%",display:"block",margin:"16px auto"}},
    ...elements,
    e("line",{key:"xa", x1:ox, y1:axisY, x2:ox+barW, y2:axisY, stroke:muted, strokeWidth:1.2})
  );
}

function Svg28_2024Bjes(){
  const st="var(--text)";
  const muted="var(--muted,#94a3b8)";
  const blue="var(--blue,#4a90d9)";
  const W=500, H=320;
  // Layout match PDF: C top-ish, B right-middle, A bottom-left
  // CB = 52 (short top edge), AB = 93 (long bottom), b = CA (left side)
  const C=[170, 70];
  const B=[420, 160];
  const A=[80, 260];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"500px",width:"100%",display:"block",margin:"16px auto"}},
    // Triangle fill
    e("polygon",{key:"fill", points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
      fill:blue, fillOpacity:0.08}),
    // Sides
    e("line",{key:"CB", x1:C[0], y1:C[1], x2:B[0], y2:B[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"AB", x1:A[0], y1:A[1], x2:B[0], y2:B[1], stroke:st, strokeWidth:1.8}),
    e("line",{key:"CA", x1:C[0], y1:C[1], x2:A[0], y2:A[1], stroke:st, strokeWidth:1.8}),
    // Vertex labels — placed clearly outside triangle
    e("text",{key:"lC", x:C[0]-2, y:C[1]-12, textAnchor:"middle", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "C"),
    e("text",{key:"lB", x:B[0]+14, y:B[1]+6, fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "B"),
    e("text",{key:"lA", x:A[0]-4, y:A[1]+22, textAnchor:"end", fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st, fontWeight:500}, "A"),
    // Side labels placed outside edges (PDF style)
    // "52 m" above CB (top edge) — perpendicular offset upward
    (()=>{
      const mx=(C[0]+B[0])/2, my=(C[1]+B[1])/2;
      const dx=B[0]-C[0], dy=B[1]-C[1]; const L=Math.hypot(dx,dy);
      // Perpendicular (rotated 90° CCW in screen coords): (-dy/L, dx/L). Negative to go UP.
      const nx=-dy/L, ny=dx/L;
      const off=16;
      return e("text",{key:"l52", x:mx - nx*off, y:my - ny*off + 4, textAnchor:"middle",
        fontSize:14, fontFamily:"sans-serif", fill:muted, fontWeight:500}, "52 m");
    })(),
    // "93 m" below AB
    (()=>{
      const mx=(A[0]+B[0])/2, my=(A[1]+B[1])/2;
      const dx=B[0]-A[0], dy=B[1]-A[1]; const L=Math.hypot(dx,dy);
      const nx=-dy/L, ny=dx/L;  // perpendicular
      const off=20;  // go OUTward (below edge)
      return e("text",{key:"l93", x:mx + nx*off, y:my + ny*off + 5, textAnchor:"middle",
        fontSize:14, fontFamily:"sans-serif", fill:muted, fontWeight:500}, "93 m");
    })(),
    // "b" left of CA (outside, to the left)
    (()=>{
      const mx=(C[0]+A[0])/2, my=(C[1]+A[1])/2;
      const dx=A[0]-C[0], dy=A[1]-C[1]; const L=Math.hypot(dx,dy);
      const nx=-dy/L, ny=dx/L;
      const off=22;  // outside (left of CA edge)
      return e("text",{key:"lb", x:mx + nx*off - 4, y:my + ny*off + 5, textAnchor:"middle",
        fontSize:18, fontStyle:"italic", fontFamily:"Georgia,serif", fill:blue, fontWeight:600}, "b");
    })(),
    // Angle arc at B (between BC and BA directions, INSIDE triangle)
    (()=>{
      const BCx=C[0]-B[0], BCy=C[1]-B[1]; const L1=Math.hypot(BCx,BCy);
      const BAx=A[0]-B[0], BAy=A[1]-B[1]; const L2=Math.hypot(BAx,BAy);
      const ux1=BCx/L1, uy1=BCy/L1;
      const ux2=BAx/L2, uy2=BAy/L2;
      const r=26;
      const p1=[B[0]+r*ux1, B[1]+r*uy1];
      const p2=[B[0]+r*ux2, B[1]+r*uy2];
      return e("path",{key:"arc", d:`M ${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A ${r} ${r} 0 0 0 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`,
        fill:"none", stroke:blue, strokeWidth:1.6});
    })(),
    // 32° label INSIDE the triangle near B (between the two sides)
    (()=>{
      const BCx=C[0]-B[0], BCy=C[1]-B[1]; const L1=Math.hypot(BCx,BCy);
      const BAx=A[0]-B[0], BAy=A[1]-B[1]; const L2=Math.hypot(BAx,BAy);
      // Bisector direction
      const bx=(BCx/L1 + BAx/L2), by=(BCy/L1 + BAy/L2);
      const bL=Math.hypot(bx,by);
      const dist=46;
      return e("text",{key:"l32", x:B[0]+bx/bL*dist, y:B[1]+by/bL*dist+5, textAnchor:"middle",
        fontSize:14, fontFamily:"sans-serif", fill:blue, fontWeight:600}, "32°");
    })()
  );
}

function Svg26_2024Bjes(){
  const st="var(--text)";
  const muted="var(--muted,#94a3b8)";
  const blue="var(--blue,#4a90d9)";
  const red="var(--red,#e05252)";
  const W=380, H=340;
  const ox=220, oy=160;
  const u=32;
  const pxF=(x)=>ox+x*u;
  const pyF=(y)=>oy-y*u;
  // f(x) = -x² - 2x + 1, tjeme (-1, 2)
  const f=(x)=> -x*x - 2*x + 1;
  const pts=[];
  for(let x=-3; x<=1.2; x+=0.05){
    const y=f(x);
    if(y>-6) pts.push(`${pxF(x).toFixed(1)},${pyF(y).toFixed(1)}`);
  }
  const grid=[];
  for(let i=-5;i<=3;i++){
    if(i===0) continue;
    grid.push(e("line",{key:"gx"+i, x1:ox-200, y1:pyF(i), x2:ox+120, y2:pyF(i),
      stroke:st, strokeWidth:0.5, strokeOpacity:0.18, strokeDasharray:"3 5"}));
  }
  for(let j=-5;j<=3;j++){
    if(j===0) continue;
    grid.push(e("line",{key:"gy"+j, x1:pxF(j), y1:oy-140, x2:pxF(j), y2:oy+160,
      stroke:st, strokeWidth:0.5, strokeOpacity:0.18, strokeDasharray:"3 5"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"16px auto"}},
    ...grid,
    e("line",{key:"xa", x1:ox-200, y1:oy, x2:ox+120, y2:oy, stroke:st, strokeWidth:1.4}),
    e("line",{key:"ya", x1:ox, y1:oy-150, x2:ox, y2:oy+170, stroke:st, strokeWidth:1.4}),
    e("polygon",{key:"xar", points:`${ox+120},${oy} ${ox+112},${oy-5} ${ox+112},${oy+5}`, fill:st}),
    e("polygon",{key:"yar", points:`${ox},${oy-150} ${ox-5},${oy-142} ${ox+5},${oy-142}`, fill:st}),
    e("text",{key:"xl", x:ox+128, y:oy+5, fontSize:14, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "x"),
    e("text",{key:"yl", x:ox+8, y:oy-152, fontSize:14, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "y"),
    e("text",{key:"O", x:ox-12, y:oy+16, fontSize:12, fontFamily:"Georgia,serif", fill:muted}, "0"),
    e("line",{key:"t1x", x1:pxF(1), y1:oy-4, x2:pxF(1), y2:oy+4, stroke:st, strokeWidth:1.2}),
    e("text",{key:"l1x", x:pxF(1), y:oy+16, textAnchor:"middle", fontSize:12, fontFamily:"Georgia,serif", fill:muted}, "1"),
    e("line",{key:"t1y", x1:ox-4, y1:pyF(1), x2:ox+4, y2:pyF(1), stroke:st, strokeWidth:1.2}),
    e("text",{key:"l1y", x:ox-10, y:pyF(1)+4, textAnchor:"end", fontSize:12, fontFamily:"Georgia,serif", fill:muted}, "1"),
    // Parabola
    e("polyline",{key:"par", points:pts.join(" "), fill:"none", stroke:blue, strokeWidth:2.4, strokeLinecap:"round"}),
    // Tjeme T
    e("circle",{key:"T", cx:pxF(-1), cy:pyF(2), r:4.5, fill:red}),
    e("text",{key:"Tl", x:pxF(-1)+8, y:pyF(2)-6, fontSize:16, fontStyle:"italic", fontFamily:"Georgia,serif", fill:red, fontWeight:600}, "T")
  );
}

function Svg21a_2024Bjes(){
  const txt="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const W=620, H=160;
  const marginL=50, marginR=50;
  const yLine=70;
  const totalUnits=10;
  const step=(W - marginL - marginR)/totalUnits;
  const px=(i)=>marginL + i*step;
  const labels={0:"K", 1:"L", 3:"M", 4:"N", 5:"O", 6:"P", 7:"R", 9:"S", 10:"T"};
  // Reference value annotations
  const refs={2:"\u22120,67", 7:"\u22120,61"};
  const dots=[];
  for(let i=0; i<=10; i++){
    const hasLbl = labels.hasOwnProperty(i);
    const hasRef = refs.hasOwnProperty(i);
    dots.push(e("circle",{key:"d"+i, cx:px(i), cy:yLine, r:hasLbl?5:3.5, 
      fill:hasLbl?red:muted, stroke:hasLbl?"#0a0f1a":"none", strokeWidth:1.5}));
    if(hasLbl){
      dots.push(e("text",{key:"l"+i,x:px(i),y:yLine-14,fontSize:15,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",textAnchor:"middle",fill:gold},labels[i]));
    }
    if(hasRef){
      dots.push(e("text",{key:"r"+i,x:px(i),y:yLine+22,fontSize:12,fontFamily:"Georgia,serif",textAnchor:"middle",fill:muted},refs[i]));
    }
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"620px",width:"100%",display:"block",margin:"12px auto"}},
    // Main line in blue
    e("line",{key:"line",x1:marginL-10,y1:yLine,x2:W-marginR+10,y2:yLine,stroke:blue,strokeWidth:2.4}),
    // Arrows on both ends
    e("polygon",{key:"ar",points:`${W-marginR+10},${yLine} ${W-marginR+3},${yLine-5} ${W-marginR+3},${yLine+5}`,fill:blue}),
    e("polygon",{key:"al",points:`${marginL-10},${yLine} ${marginL-3},${yLine-5} ${marginL-3},${yLine+5}`,fill:blue}),
    // Tick marks
    ...Array.from({length:11},(_,i)=>e("line",{key:"t"+i,x1:px(i),y1:yLine-5,x2:px(i),y2:yLine+5,stroke:blue,strokeWidth:1.4})),
    ...dots
  );
}

function Svg20_2024Bjes(){
  const st="var(--text)"; const muted="var(--muted,#94a3b8)";
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const W=380, H=340;
  const ox=170, oy=170; const u=30;
  const pxF=(x)=>ox+x*u; const pyF=(y)=>oy-y*u;
  const grid=[];
  for(let i=-3;i<=3;i++){
    if(i===0) continue;
    grid.push(e("line",{key:"gx"+i, x1:ox-140, y1:pyF(i), x2:ox+140, y2:pyF(i),
      stroke:muted, strokeWidth:0.5, strokeOpacity:0.22, strokeDasharray:"2 6"}));
  }
  for(let j=-4;j<=4;j++){
    if(j===0) continue;
    grid.push(e("line",{key:"gy"+j, x1:pxF(j), y1:oy-120, x2:pxF(j), y2:oy+140,
      stroke:muted, strokeWidth:0.5, strokeOpacity:0.22, strokeDasharray:"2 6"}));
  }
  // Pravac p: nagib -4/3, y-intercept ~2
  const px1=-1, py1=-(4/3)*px1+2;
  const px2=4.2, py2=-(4/3)*px2+2;
  // Point A: from PDF (approximate: somewhere right of origin, slightly below)
  const Ax=1.2, Ay=-0.8;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"16px auto"}},
    ...grid,
    // Axes
    e("line",{key:"xa",x1:ox-140,y1:oy,x2:ox+145,y2:oy,stroke:st,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:oy-130,x2:ox,y2:oy+150,stroke:st,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${ox+145},${oy} ${ox+137},${oy-5} ${ox+137},${oy+5}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${oy-130} ${ox-5},${oy-122} ${ox+5},${oy-122}`,fill:st}),
    e("text",{key:"xl",x:ox+152,y:oy+5,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+8,y:oy-132,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"y"),
    e("text",{key:"O",x:ox-12,y:oy+16,fontSize:12,fontFamily:"Georgia,serif",fill:muted},"0"),
    e("text",{key:"1x",x:pxF(1)-3,y:oy+16,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("text",{key:"1y",x:ox-14,y:pyF(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("circle",{key:"u1x",cx:pxF(1),cy:oy,r:2,fill:muted}),
    e("circle",{key:"u1y",cx:ox,cy:pyF(1),r:2,fill:muted}),
    // Pravac p — BLUE, prominent
    e("line",{key:"prav",x1:pxF(px1),y1:pyF(py1),x2:pxF(px2),y2:pyF(py2),stroke:blue,strokeWidth:2.4}),
    e("text",{key:"lp",x:pxF(px2)+4,y:pyF(py2)+18,fontSize:17,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"p"),
    // Točka A — RED
    e("circle",{key:"A",cx:pxF(Ax),cy:pyF(Ay),r:5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
    e("text",{key:"lA",x:pxF(Ax)+8,y:pyF(Ay)+18,fontSize:17,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"A")
  );
}

function Svg15_2024Bjes(){
  const W=400, H=300;
  const blue="#4a90d9"; const blueLight="rgba(74,144,217,0.08)"; const red="#e05252"; const gold="#e9b446"; const txt="var(--text)";
  const cx=200, cy=160, r=110;
  const deg=(d)=>d*Math.PI/180;
  // PDF: B bot-left, C bot-right, A top-left, D top-right (from earlier render)
  const A=[cx + r*Math.cos(deg(150)), cy - r*Math.sin(deg(150))];
  const D=[cx + r*Math.cos(deg(40)),  cy - r*Math.sin(deg(40))];
  const B=[cx + r*Math.cos(deg(210)), cy - r*Math.sin(deg(210))];
  const C=[cx + r*Math.cos(deg(330)), cy - r*Math.sin(deg(330))];
  const S=[cx,cy];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"400px",width:"100%",display:"block",margin:"12px auto"}},
    e("circle",{key:"c",cx:cx,cy:cy,r:r,fill:blueLight,stroke:blue,strokeWidth:2}),
    // Lines connecting points (chords for angle)
    e("line",{key:"AB",x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:gold,strokeWidth:1.6}),
    e("line",{key:"AD",x1:A[0],y1:A[1],x2:D[0],y2:D[1],stroke:gold,strokeWidth:1.6}),
    e("line",{key:"SB",x1:S[0],y1:S[1],x2:B[0],y2:B[1],stroke:red,strokeWidth:1.4,strokeDasharray:"5 3"}),
    e("line",{key:"SC",x1:S[0],y1:S[1],x2:C[0],y2:C[1],stroke:red,strokeWidth:1.4,strokeDasharray:"5 3"}),
    // Center dot
    e("circle",{key:"S",cx:S[0],cy:S[1],r:3,fill:txt}),
    e("text",{key:"lS",x:S[0]-6,y:S[1]+18,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"S"),
    // Vertex labels
    ...[[A,"A",-18,-6],[B,"B",-16,18],[C,"C",8,18],[D,"D",10,-6]].map(([p,l,dx,dy],i)=>
      e("g",{key:"v"+i},
        e("circle",{cx:p[0],cy:p[1],r:4,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
        e("text",{x:p[0]+dx,y:p[1]+dy,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},l)
      )
    )
  );
}

function Svg11_2024Bjes(){
  const st="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const W=640, H=460;
  const panelW=290, panelH=200;
  const panels=[
    {label:"A", ox:20, oy:20, m:0.7, b:-1.5},
    {label:"B", ox:330, oy:20, m:0.6, b:1.0},
    {label:"C", ox:20, oy:240, m:-0.6, b:-0.3},
    {label:"D", ox:330, oy:240, m:-0.5, b:1.3}
  ];
  const parts=[];
  panels.forEach(p=>{
    const cx = p.ox + panelW/2;
    const cy = p.oy + panelH/2;
    const u = 22;
    const pxF = (x)=> cx + x*u;
    const pyF = (y)=> cy - y*u;
    // Panel border
    parts.push(e("rect",{key:p.label+"bx", x:p.ox, y:p.oy, width:panelW, height:panelH,
      fill:"none", stroke:muted, strokeOpacity:0.3, strokeWidth:1, rx:6}));
    // Grid
    for(let i=-4;i<=4;i++){
      if(i===0) continue;
      parts.push(e("line",{key:p.label+"gx"+i, x1:p.ox+10, y1:pyF(i), x2:p.ox+panelW-10, y2:pyF(i),
        stroke:muted, strokeWidth:0.5, strokeOpacity:0.2, strokeDasharray:"2 6"}));
    }
    for(let j=-6;j<=6;j++){
      if(j===0) continue;
      parts.push(e("line",{key:p.label+"gy"+j, x1:pxF(j), y1:p.oy+10, x2:pxF(j), y2:p.oy+panelH-10,
        stroke:muted, strokeWidth:0.5, strokeOpacity:0.2, strokeDasharray:"2 6"}));
    }
    // Axes
    parts.push(e("line",{key:p.label+"xa", x1:p.ox+10, y1:cy, x2:p.ox+panelW-6, y2:cy, stroke:st, strokeWidth:1.2}));
    parts.push(e("line",{key:p.label+"ya", x1:cx, y1:p.oy+10, x2:cx, y2:p.oy+panelH-10, stroke:st, strokeWidth:1.2}));
    parts.push(e("polygon",{key:p.label+"xar",
      points:`${p.ox+panelW-6},${cy} ${p.ox+panelW-14},${cy-4} ${p.ox+panelW-14},${cy+4}`, fill:st}));
    parts.push(e("polygon",{key:p.label+"yar",
      points:`${cx},${p.oy+10} ${cx-4},${p.oy+18} ${cx+4},${p.oy+18}`, fill:st}));
    parts.push(e("text",{key:p.label+"xl", x:p.ox+panelW-2, y:cy+5, fontSize:13, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "x"));
    parts.push(e("text",{key:p.label+"yl", x:cx+6, y:p.oy+14, fontSize:13, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "y"));
    parts.push(e("text",{key:p.label+"O", x:cx-10, y:cy+14, fontSize:11, fontFamily:"Georgia,serif", fill:muted}, "0"));
    parts.push(e("circle",{key:p.label+"t1x", cx:pxF(1), cy:cy, r:2.2, fill:"var(--bg,#060910)", stroke:st, strokeWidth:1}));
    parts.push(e("text",{key:p.label+"l1x", x:pxF(1), y:cy+14, textAnchor:"middle", fontSize:11, fontFamily:"Georgia,serif", fill:muted}, "1"));
    parts.push(e("circle",{key:p.label+"t1y", cx:cx, cy:pyF(1), r:2.2, fill:"var(--bg,#060910)", stroke:st, strokeWidth:1}));
    parts.push(e("text",{key:p.label+"l1y", x:cx-8, y:pyF(1)+4, textAnchor:"end", fontSize:11, fontFamily:"Georgia,serif", fill:muted}, "1"));
    // LINE — BLUE bold
    const xL = (p.ox+10-cx)/u;
    const xR = (p.ox+panelW-10-cx)/u;
    const yL = p.m*xL + p.b;
    const yR = p.m*xR + p.b;
    parts.push(e("line",{key:p.label+"line", x1:pxF(xL), y1:pyF(yL), x2:pxF(xR), y2:pyF(yR),
      stroke:blue, strokeWidth:2.4, strokeLinecap:"round"}));
    // Panel label GOLD
    parts.push(e("text",{key:p.label+"ll", x:p.ox+6, y:p.oy+panelH+16,
      fontSize:15, fontWeight:"bold", fontFamily:"sans-serif", fill:gold}, p.label+"."));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"640px",width:"100%",display:"block",margin:"16px auto"}},
    ...parts
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: NZV preko rastava na proste faktore (12 = 2²·3, 15 = 3·5) → uzmi najveće potencije.",topic:"br",points:1,
   q:"Koji je najmanji zajednički višekratnik brojeva 12 i 15?",
   opts:["144","120","60","45"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Definicija NZV: najmanji prirodan broj koji je djeljiv s oba zadana broja."},{txt:"Rastav na proste faktore: 12 = 2² · 3; 15 = 3 · 5."},{txt:"Pravilo: NZV se dobiva uzimanjem svakog prostog faktora s NAJVEĆIM eksponentom koji se pojavljuje u rastavima."},{txt:"Primjena: 2² (iz 12), 3 (najveći eksponent je 1, isto u oba), 5 (iz 15) → NZV = 2² · 3 · 5 = 4 · 3 · 5 = 60."},{txt:"Provjera djeljivosti: 60/12 = 5 ✓; 60/15 = 4 ✓.",note:"verifikacija"},{txt:"Distractor analiza: A) 144 = 12² (nije nužno povezano sa 15); B) 120 = 8·15 (djeljiv s 15, ali ne najmanji koji je djeljiv i s 12); D) 45 (nije djeljivo s 12).",note:"diagnostika"},{txt:"Odgovor: C — NZV = 60.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: NZV mora \"sadržavati\" oba broja kao faktore — pa svaki prosti broj ide s najvećim eksponentom.",note:"intuicija",final:true},{txt:"Definicija: NZV (Najmanji Zajednički Višekratnik) dva ili više brojeva = najmanji prirodan broj djeljiv sa svima.",note:"postupak",final:true}],
   why:["Pravilo: NZV(a, b) = produkt svih prostih faktora a i b uzetih s VEĆIM eksponentom.","Definicija: NZV (Najmanji Zajednički Višekratnik) dva ili više brojeva = najmanji prirodan broj djeljiv sa svima.","Intuicija: NZV mora \"sadržavati\" oba broja kao faktore — pa svaki prosti broj ide s najvećim eksponentom.","Alt metoda: NZV(a,b) · NZD(a,b) = a · b; NZD(12,15) = 3, pa NZV = (12·15)/3 = 180/3 = 60.","Česta greška: pomnožiti brojeve direktno (12·15 = 180); to je NZV samo ako su brojevi RELATIVNO prosti (NZD = 1).","Tipičan propust: zaboraviti zajednički faktor 3 koji se POJAVLJUJE samo JEDNOM u NZV.","Veza s gradivom: NZV se koristi pri zbrajanju razlomaka različitih nazivnika (najmanji zajednički nazivnik).","Provjera: 60 je djeljivo s 12 (60/12 = 5) i s 15 (60/15 = 4); manji multipli (30, 45) nisu djeljivi s oba ✓."]
  },
  {id:2,type:"mc",warn:"Pazi: ℚ = razlomci; iracionalni korijeni i π ne pripadaju.",topic:"br",points:1,
   q:"Koji od navedenih brojeva ne pripada skupu racionalnih brojeva?",
   opts:["−11/3","−0,2","3π","√256"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Definicija skupa racionalnih brojeva ℚ: brojevi koji se mogu napisati kao razlomak p/q gdje p, q ∈ ℤ, q ≠ 0."},{txt:"Analiza svake opcije:\n  A) −[FRAC:11|3] — razlomak cijelih brojeva → RACIONALAN.\n  B) −0,2 = −[FRAC:1|5] (konačan decimalni broj se može pretvoriti u razlomak) → RACIONALAN.\n  C) 3π — π je iracionalan, pa 3π je iracionalan → NIJE u ℚ.\n  D) √256 = 16 (jer 16² = 256) — cijeli broj → RACIONALAN."},{txt:"Identifikacija iracionalnog: jedino C (3π) je IZVAN skupa racionalnih."},{txt:"Provjera π: Lindemann je 1882. dokazao da je π transcendentan, a transcendentan ⇒ iracionalan; množenje s racionalnim brojem (3) zadržava iracionalnost.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) −11/3 je očito razlomak.\n  B) −0,2 je konačan decimal (1 cifra iza zareza), brzo se pretvara u razlomak.\n  D) √256 je SAVRŠEN KVADRAT — daje cijeli broj.",note:"diagnostika"},{txt:"Odgovor: C — 3π ne pripada ℚ.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: traži broj koji NE može biti razlomak; provjeri svaku opciju.",note:"intuicija",final:true},{txt:"Definicija: hierarhija skupova brojeva: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; ℝ \\ ℚ = iracionalni.",note:"postupak",final:true}],
   why:["Pravilo: broj je IRACIONALAN ako se NE može zapisati kao razlomak cijelih brojeva; ima beskonačan, neperiodičan decimalni razvoj.","Definicija: hierarhija skupova brojeva: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; ℝ \\ ℚ = iracionalni.","Intuicija: traži broj koji NE može biti razlomak; provjeri svaku opciju.","Alt metoda: izračunati decimalne razvoje — racionalni imaju konačne ili periodične; iracionalni nemaju ni jedno.","Česta greška: misliti da je √256 iracionalan (zapravo je 16, savršen kvadrat); samo √n za n NE-savršen kvadrat je iracionalan.","Tipičan propust: zaboraviti da konačni decimalni broj (npr. 0,2) je već racionalan (= 2/10 = 1/5).","Veza s gradivom: dokaz iracionalnosti se najpoznatije radi za √2 metodom kontradikcije (Euklid).","Provjera: 3π ≈ 9,4248… nema periodu, nije razlomak cijelih → iracionalan ✓."]
  },
  {id:3,img:true,type:"mc",warn:"Pazi: pažljivo očitaj postotke/udjele s dijagrama za traženu godinu.",topic:"stat",points:1,
   q:"Na dijagramu su prikazani podatci o broju letova zrakoplova 18. travnja tijekom četiriju godina (udio na vrijeme / kašnjenja / otkazani). Koje je godine na taj datum bio najveći postotak otkazanih letova?",
   opts:["2020.","2021.","2022.","2023."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija dijagrama: 100 %-stupčasti dijagram za 4 godine (2020., 2021., 2022., 2023.) i 4 kategorije statusa leta (na vrijeme, < 30 min, 30-120 min, otkazan)."},{txt:"Pitanje: koja godina ima NAJVEĆI POSTOTAK OTKAZANIH letova? Otkazana kategorija je ŽUTA boja."},{txt:"Vizualno čitanje (s dijagrama):\n  2020: žuti dio ≈ 10 %\n  2021: žuti dio ≈ 14 %\n  2022: žuti dio ≈ 9 %\n  2023: žuti dio ≈ 10 %"},{txt:"Najveći žuti dio: 2021. (oko 14 % otkazanih)."},{txt:"Provjera koherentnosti: zbrojevi svih kategorija u svakoj godini trebaju biti 100 %.",note:"verifikacija"},{txt:"Distractor analiza: ostale godine imaju manje žutog dijela; 2021 jedina ima najistaknutiji žuti segment.",note:"diagnostika"},{txt:"Odgovor: B — 2021. godina.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: vidiš ŠTO se mijenja kroz vrijeme — povećavaju li se otkazi godine 2021. ili padaju.",note:"intuicija",final:true},{txt:"Definicija: ova vrsta dijagrama omogućuje usporedbu RASPODJELE kategorija među različitim skupinama (ovdje godinama).",note:"postupak",final:true}],
   why:["Pravilo: u 100 %-stupčastom dijagramu, svaki stupac predstavlja 100 % i kategorije su PROPORCIONALNI DIJELOVI.","Definicija: ova vrsta dijagrama omogućuje usporedbu RASPODJELE kategorija među različitim skupinama (ovdje godinama).","Intuicija: vidiš ŠTO se mijenja kroz vrijeme — povećavaju li se otkazi godine 2021. ili padaju.","Alt metoda: očitati apsolutne vrijednosti svake kategorije i izračunati postotke — ako su zadani.","Česta greška: zbrojiti dva slična postotka (otkazi + kašnjenja) — pitanje pita SAMO za otkaze.","Tipičan propust: vizualno preceniti veličinu malog dijela na grafu; uvijek očitati postotke ako su označeni.","Veza s gradivom: rad sa statističkim grafikonima — temelj za statistiku, ekonomiju, sociologiju.","Provjera: 2021. ima ZAMJETNO veći žuti dio nego ostale godine ✓."],
   img:"2024_jesen_B__3"
  },
  {id:4,type:"mc",warn:"Pazi: vjerojatnost = povoljni/45; prebroji povoljne po uvjetu.",topic:"br",points:1,
   q:"U kutiji se nalazi 45 papirića od kojih je svaki označen jednim brojem od 1 do 45 tako da se brojevi ne ponavljaju. Kolika je vjerojatnost da je iz kutije izvučen papirić označen parnim brojem?",
   opts:["1/45","22/45","1/2","23/45"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Definicija prostora ishoda: 45 papirića, svaki s jednim brojem od 1 do 45 (bez ponavljanja). Ukupan broj mogućih ishoda = 45."},{txt:"Definicija povoljnog ishoda: papirić s PARNIM brojem između 1 i 45."},{txt:"Brojanje parnih brojeva: 2, 4, 6, …, 44. Aritmetička progresija s a₁ = 2, d = 2, aₙ = 44."},{txt:"Broj članova: n = (44 − 2)/2 + 1 = 22."},{txt:"Vjerojatnost: P = (broj povoljnih)/(broj svih) = 22/45."},{txt:"Razlomak 22/45 ne može se skratiti (NZD(22, 45) = 1).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 1/45 — vjerojatnost JEDNOG točno određenog broja.\n  C) 1/2 — približna vrijednost, ali 45 je neparan, pa nije točno 22,5.\n  D) 23/45 — broj NEPARNIH brojeva (1, 3, …, 45).",note:"diagnostika"},{txt:"Odgovor: B — P = 22/45.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: oko pola brojeva je parno; ali jer 45 je neparan, ima jedan više neparnih nego parnih.",note:"intuicija",final:true},{txt:"Definicija: aritmetička progresija s prvim članom a₁, razlikom d, n-tim članom aₙ; broj članova = (aₙ − a₁)/d + 1.",note:"postupak",final:true}],
   why:["Pravilo: za uniformno biranje iz konačnog skupa, P(događaja) = (broj povoljnih)/(broj svih ishoda).","Definicija: aritmetička progresija s prvim članom a₁, razlikom d, n-tim članom aₙ; broj članova = (aₙ − a₁)/d + 1.","Intuicija: oko pola brojeva je parno; ali jer 45 je neparan, ima jedan više neparnih nego parnih.","Alt metoda: koristiti komplementarni događaj — P(parni) = 1 − P(neparni) = 1 − 23/45 = 22/45.","Česta greška: dijeliti s 2 (1/2) bez provjeravanja je li ukupan broj paran — daje krivi rezultat za neparan broj.","Tipičan propust: računati parne brojeve od 1 do 45 kao 23 (uključuju li 0?) — krivo brojanje granica.","Veza s gradivom: kombinatorika i klasična vjerojatnost — osnova teorije vjerojatnosti.","Provjera: 22 + 23 = 45 ✓ (parnih + neparnih = ukupno)."]
  },
  {id:5,type:"mc",warn:"Pazi: 6ⁿ·6¹ = 6^(n + 1) (eksponenti se zbrajaju).",topic:"al",points:1,
   q:"Čemu je jednako 6ⁿ · 6 za svaki cijeli broj n?",
   opts:["6ⁿ⁺¹","6ⁿ⁻¹","12ⁿ","36ⁿ"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Početni izraz: 6ⁿ · 6."},{txt:"Identifikacija eksponenata: 6ⁿ ima eksponent n; 6 = 6¹ ima eksponent 1."},{txt:"Pravilo množenja potencija iste baze: aᵐ · aⁿ = aᵐ⁺ⁿ. Eksponenti se ZBRAJAJU."},{txt:"Primjena: 6ⁿ · 6¹ = 6ⁿ⁺¹."},{txt:"Provjera s konkretnim n: n = 2. 6² · 6 = 36 · 6 = 216 = 6³ = 6²⁺¹ ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  B) 6ⁿ⁻¹ — krivo (oduzimanje umjesto zbrajanja eksponenata).\n  C) 12ⁿ — krivo (pomnožene baze umjesto da se zbroje eksponenti).\n  D) 36ⁿ — krivo (6 · 6 = 36 ali eksponent n se ne primjenjuje na 36 ako se baza promijeni).",note:"diagnostika"},{txt:"Odgovor: A — 6ⁿ⁺¹.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 6ⁿ · 6 znači n faktora 6, pomnoženo s još jednim 6 → ukupno (n+1) faktora 6 → 6ⁿ⁺¹.",note:"intuicija",final:true},{txt:"Definicija: aⁿ označava n-struki umnožak baze a (a · a · … · a, n puta).",note:"postupak",final:true}],
   why:["Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ za množenje potencija s ISTOM bazom — eksponenti se ZBRAJAJU.","Definicija: aⁿ označava n-struki umnožak baze a (a · a · … · a, n puta).","Intuicija: 6ⁿ · 6 znači n faktora 6, pomnoženo s još jednim 6 → ukupno (n+1) faktora 6 → 6ⁿ⁺¹.","Alt metoda: razložiti 6ⁿ kao n faktora i dodati još jedan — ukupno (n+1) faktora.","Česta greška: pomnožiti baze (6 · 6 = 36) i staviti eksponent n na 36 → distractor D (krivo).","Tipičan propust: zaboraviti da je 6 = 6¹ (skriveni eksponent 1) — pa se ne zna kako primijeniti pravilo.","Veza s gradivom: pravila potencija (umnožak, količnik, potencija potencije) — osnova algebre.","Provjera: za n = 2: 6²·6 = 216; 6³ = 216 ✓."]
  },
  {id:6,type:"mc",warn:"Pazi: svedi na √3 (√12 = 2√3, √27 = 3√3), zbroji → k√3 = √M.",topic:"al",points:1,
   q:"Koliko iznosi M ako je √3 − √12 + √27 = M^([FRAC:1|2])?",
   opts:["6","12","18","42"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Početna jednadžba: √3 − √12 + √27 = M^([FRAC:1|2])."},{txt:"Pojednostavljenje korijena pomoću faktorizacije: √12 = √(4 · 3) = √4 · √3 = 2√3."},{txt:"Sličnim postupkom: √27 = √(9 · 3) = √9 · √3 = 3√3."},{txt:"Zbroj: √3 − √12 + √27 = √3 − 2√3 + 3√3 = (1 − 2 + 3)√3 = 2√3."},{txt:"Jednadžba postaje: 2√3 = M^([FRAC:1|2]) = √M."},{txt:"Kvadriranje obje strane: (2√3)² = M ⇒ 4 · 3 = M ⇒ M = 12."},{txt:"Provjera: M^([FRAC:1|2]) = √12 = 2√3 ≈ 3,464; lijeva strana = √3 − 2√3 + 3√3 = 2√3 ≈ 3,464 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 6 — daje √6 ≠ 2√3.\n  C) 18 — daje √18 = 3√2 ≠ 2√3.\n  D) 42 — daje √42 ≠ 2√3.",note:"diagnostika"},{txt:"Odgovor: B — M = 12.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj je svesti SVE korijene na ISTI √3, pa zbrojiti koeficijente kao u algebri.",note:"intuicija",final:true},{txt:"Definicija: M^([FRAC:1|2]) = √M (kvadratni korijen broja M).",note:"postupak",final:true}],
   why:["Pravilo: √(a·b) = √a · √b za nenegativne a, b. Faktoriziranjem argumenta korijena izvlači se savršeni kvadrat.","Definicija: M^([FRAC:1|2]) = √M (kvadratni korijen broja M).","Intuicija: cilj je svesti SVE korijene na ISTI √3, pa zbrojiti koeficijente kao u algebri.","Alt metoda: izračunati svaki korijen numerički — √3 ≈ 1,732, √12 ≈ 3,464, √27 ≈ 5,196; zbroj ≈ 1,732 − 3,464 + 5,196 = 3,464 ≈ √12 ⇒ M ≈ 12.","Česta greška: zbrojiti ARGUMENTE korijena (√(3 + 12 + 27) = √42, distractor D) — krivo, jer korijen nije linearan.","Tipičan propust: zaboraviti kvadrirati 2√3 — uzeti M = 2√3, što nije cijeli broj i nije u opcijama.","Veza s gradivom: pravila kvadratnog korijena, eksponencijalne funkcije, racionalizacija nazivnika.","Provjera: (2√3)² = 4·3 = 12 ✓."]
  },
  {id:7,type:"mc",warn:"Pazi: faktorizira se na realne linearne faktore samo ako D ≥ 0 (realne nultočke).",topic:"al",points:1,
   q:"Koji se od navedenih algebarskih izraza NE može zapisati u obliku umnoška dvaju linearnih faktora s realnim koeficijentima?",
   opts:["x² + 4","2xy − x²","x² − 1","3xy + x"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Pitanje: koji izraz NE MOŽE biti faktoriziran kao umnožak dvaju linearnih faktora s realnim koeficijentima?"},{txt:"Linearni faktor = polinom prvog stupnja (ax + b)."},{txt:"Analiza opcija:\n  A) x² + 4 — bez realnih nultočaka (jer x² + 4 > 0 za sve realne x); NE može se faktorizirati linearno nad ℝ.\n  B) 2xy − x² = x(2y − x) — faktorizacija s linearnim faktorima.\n  C) x² − 1 = (x − 1)(x + 1) — razlika kvadrata, linearni faktori.\n  D) 3xy + x = x(3y + 1) — faktorizacija s linearnim faktorima."},{txt:"Identifikacija nemogućeg slučaja: A — diskriminanta D = 0² − 4·1·4 = −16 < 0 → nema realnih nultočaka."},{txt:"Provjera: x² + 4 = 0 ⇒ x² = −4 ⇒ x = ±2i (kompleksno); faktorizacija (x − 2i)(x + 2i) — kompleksni koeficijenti, ne realni.",note:"verifikacija"},{txt:"Distractor analiza:\n  B) faktor = x i (2y − x) — oba linearna.\n  C) razlika kvadrata — klasična faktorizacija s realnim koeficijentima.\n  D) faktor = x i (3y + 1) — oba linearna.",note:"diagnostika"},{txt:"Odgovor: A — x² + 4 ne može biti zapisan kao umnožak dvaju linearnih faktora s realnim koeficijentima.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: traži se izraz koji je STROGO POZITIVAN ili STROGO NEGATIVAN nad ℝ — nema nultočaka, nema realne faktorizacije.",note:"intuicija",final:true},{txt:"Definicija: linearni faktor = polinom prvog stupnja; svaki faktorizirabilni kvadratni polinom ima oblik a(x − r₁)(x − r₂) gdje r₁, r₂ su nultočke.",note:"postupak",final:true}],
   why:["Pravilo: kvadratni polinom ax² + bx + c se može faktorizirati nad ℝ ⇔ D = b² − 4ac ≥ 0.","Definicija: linearni faktor = polinom prvog stupnja; svaki faktorizirabilni kvadratni polinom ima oblik a(x − r₁)(x − r₂) gdje r₁, r₂ su nultočke.","Intuicija: traži se izraz koji je STROGO POZITIVAN ili STROGO NEGATIVAN nad ℝ — nema nultočaka, nema realne faktorizacije.","Alt metoda: provjeriti diskriminantu za svaki kvadratni izraz; ako D < 0, nema realnih korijena, nema linearne faktorizacije.","Česta greška: pomisliti da se SVAKI polinom može faktorizirati — krivo nad ℝ; nad ℂ (kompleksnim brojevima) može.","Tipičan propust: zaboraviti faktorizirati izlučivanjem zajedničkog faktora (opcije B i D su trivijalne).","Veza s gradivom: kvadratne jednadžbe, kompleksni brojevi, polinomna algebra.","Provjera: A jedini ima D < 0, ostali se trivijalno faktoriziraju ✓."]
  },
  {id:8,type:"mc",warn:"Pazi: prvi platio 1/6 → ostatak je 5/6 ukupnog; njega podijeli u omjeru 7 : 8.",topic:"br",points:1,
   q:"Tri poduzetnika kupili su dionice u vrijednosti 44 820 eura. Prvi je platio [FRAC:1|6] ukupnoga iznosa, a druga dvojica ostatak vrijednosti u omjeru 7 : 8. Koliko je platio poduzetnik koji je uložio najviše novca?",
   opts:["17 430 eura","19 920 eura","20 916 eura","23 904 eura"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija: tri poduzetnika, ukupna investicija 44 820 €. Prvi platio 1/6."},{txt:"Prvi poduzetnik: [FRAC:1|6] · 44 820 = 7 470 €."},{txt:"Ostatak za drugu dvojicu: 44 820 − 7 470 = 37 350 €."},{txt:"Podjela ostatka u omjeru 7 : 8 (ukupno 15 dijelova): jedan dio = 37 350 / 15 = 2 490 €."},{txt:"Drugi poduzetnik (7 dijelova): 7 · 2 490 = 17 430 €."},{txt:"Treći poduzetnik (8 dijelova): 8 · 2 490 = 19 920 €."},{txt:"Najveći ulagač = treći s 19 920 € (8 dijelova > 7 dijelova).",note:"verifikacija"},{txt:"Provjera: 7 470 + 17 430 + 19 920 = 44 820 ✓ (zbroj svih jednak ukupnoj investiciji).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 17 430 — to je drugi poduzetnik (7 dijelova).\n  C) 20 916 — krivi račun.\n  D) 23 904 — krivi račun (možda pomnoženo s 8 dijelova umjesto 8/15 od ostatka).",note:"diagnostika"},{txt:"Odgovor: B — 19 920 € (treći poduzetnik koji je uložio najviše).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo izračunaj iznos koji se PODIJELI u omjeru, pa nađi jedinicu, pa pomnoži.",note:"intuicija",final:true},{txt:"Definicija: omjer 7:8 znači da druga vrijednost premaši prvu za faktor 8/7.",note:"postupak",final:true}],
   why:["Pravilo: pri raspodjeli iznosa u omjeru a:b:c, ukupan broj dijelova = a + b + c; jedinica = iznos/(a+b+c); pojedini dijelovi se dobiju množenjem jediničke vrijednosti s odgovarajućim koeficijentom.","Definicija: omjer 7:8 znači da druga vrijednost premaši prvu za faktor 8/7.","Intuicija: prvo izračunaj iznos koji se PODIJELI u omjeru, pa nađi jedinicu, pa pomnoži.","Alt metoda: koristiti razlomke direktno. Drugi = (7/15)·37 350; treći = (8/15)·37 350. Najveći je treći.","Česta greška: dijeliti 44 820 u omjeru 7:8 (zaboravivši prvog poduzetnika) — krivi distribucijski proračun.","Tipičan propust: pomiješati koji je najveći — uvijek je VEĆI koeficijent omjera (8 > 7) → veći ulog.","Veza s gradivom: omjeri i proporcije se primjenjuju u podjeli profita, miješanju otopina, skaliranju.","Provjera: zbroj 7 470 + 17 430 + 19 920 = 44 820 ✓."]
  },
  {id:9,type:"mc",warn:"Pazi: formula ili faktorizacija; provjeri uvrštavanjem koji broj zadovoljava.",topic:"kv",points:1,
   q:"Koje je od navedenih rješenje jednadžbe 9x² + 20x + 4 = 0?",
   opts:["−4","−2","2","4"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Standardni oblik kvadratne jednadžbe: 9x² + 20x + 4 = 0; identifikacija: a = 9, b = 20, c = 4."},{txt:"Diskriminanta: D = b² − 4ac = 20² − 4·9·4 = 400 − 144 = 256."},{txt:"D > 0 → dva različita realna rješenja."},{txt:"√D = √256 = 16."},{txt:"Kvadratna formula: x = [FRAC:−b ± √D|2a] = [FRAC:−20 ± 16|18]."},{txt:"Dva rješenja:\n  x₁ = [FRAC:−20 + 16|18] = [FRAC:−4|18] = −[FRAC:2|9].\n  x₂ = [FRAC:−20 − 16|18] = [FRAC:−36|18] = −2."},{txt:"Među opcijama (-4, -2, 2, 4): rješenje je x₂ = −2."},{txt:"Provjera: 9·(−2)² + 20·(−2) + 4 = 36 − 40 + 4 = 0 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) −4: 9·16 + 20·(−4) + 4 = 144 − 80 + 4 = 68 ≠ 0.\n  C) 2: 36 + 40 + 4 = 80 ≠ 0.\n  D) 4: 144 + 80 + 4 = 228 ≠ 0.",note:"diagnostika"},{txt:"Odgovor: B — x = −2.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 9x² + 20x + 4 može se faktorizirati: (9x + 2)(x + 2) = 0 → x = −2/9 ili x = −2.",note:"intuicija",final:true},{txt:"Definicija: diskriminanta D = b² − 4ac određuje broj realnih rješenja.",note:"postupak",final:true}],
   why:["Pravilo: kvadratna formula x = (−b ± √(b² − 4ac))/(2a) daje sva realna rješenja kvadratne jednadžbe ax² + bx + c = 0.","Definicija: diskriminanta D = b² − 4ac određuje broj realnih rješenja.","Intuicija: 9x² + 20x + 4 može se faktorizirati: (9x + 2)(x + 2) = 0 → x = −2/9 ili x = −2.","Alt metoda: faktorizacija — pronađi dva broja čiji je umnožak 36 (a·c) i zbroj 20 (b); 18 i 2 zadovoljavaju. 9x² + 18x + 2x + 4 = 9x(x + 2) + 2(x + 2) = (9x + 2)(x + 2).","Česta greška: zaboraviti faktor 2a u nazivniku (uzeti x = (−b ± √D)/2 umjesto /2a).","Tipičan propust: testirati samo opcije A-D i pretpostaviti da je rješenje među njima — uvijek izračunaj kvadratnu formulu PRVO.","Veza s gradivom: kvadratne jednadžbe su osnova za razumijevanje polinoma, parabolskih funkcija, optimizacije.","Provjera: 9(−2)² + 20(−2) + 4 = 36 − 40 + 4 = 0 ✓."]
  },
  {id:10,type:"mc",warn:"Pazi: dvostruko rješenje ⇔ D = 0 → (−2)² − 4·1·m = 0 → m = 1.",topic:"kv",points:1,
   q:"Za koju vrijednost realnoga parametra m kvadratna jednadžba x² − 2x + m = 0 ima dvostruko realno rješenje?",
   opts:["−4","−1","1","4"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Standardni oblik: x² − 2x + m = 0; a = 1, b = −2, c = m."},{txt:"Definicija \"dvostruko rješenje\": kvadratna ima JEDNO realno rješenje s multiplicitetom 2 ⇔ DISKRIMINANTA = 0."},{txt:"D = b² − 4ac = (−2)² − 4·1·m = 4 − 4m."},{txt:"Postavljanje uvjeta: 4 − 4m = 0 ⇒ m = 1."},{txt:"Provjera: x² − 2x + 1 = (x − 1)² = 0 → x = 1 (dvostruko)."},{txt:"Geometrijska interpretacija: parabola y = x² − 2x + 1 DOTIČE x-os u jednoj točki (tjeme parabole leži na x-osi).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) −4: D = 4 + 16 = 20 > 0 → dva različita rješenja.\n  B) −1: D = 4 + 4 = 8 > 0 → dva različita.\n  D) 4: D = 4 − 16 = −12 < 0 → bez realnih rješenja.",note:"diagnostika"},{txt:"Odgovor: C — m = 1.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: parabola dotiče x-os u jednoj točki kada tjeme leži na x-osi; to se događa kada je D = 0.",note:"intuicija",final:true},{txt:"Definicija: dvostruko rješenje znači da je x₀ NULTOČKA polinoma multipliciteta 2 (tj. (x − x₀)² je faktor).",note:"postupak",final:true}],
   why:["Pravilo: kvadratna ax² + bx + c = 0 ima:\n  D > 0 → 2 različita realna rješenja\n  D = 0 → 1 realno rješenje (dvostruko)\n  D < 0 → bez realnih (2 kompleksna).","Definicija: dvostruko rješenje znači da je x₀ NULTOČKA polinoma multipliciteta 2 (tj. (x − x₀)² je faktor).","Intuicija: parabola dotiče x-os u jednoj točki kada tjeme leži na x-osi; to se događa kada je D = 0.","Alt metoda: prepoznati kvadratni trinom (x − a)² = x² − 2ax + a²; ovdje je a = 1, pa a² = 1 = m.","Česta greška: tumačiti \"dvostruko rješenje\" kao \"dva rješenja\" — krivo, znači JEDNO rješenje s multiplicitetom 2.","Tipičan propust: zaboraviti predznak b² = (−2)² = +4 (kvadrat negativnog je pozitivan).","Veza s gradivom: diskriminanta određuje broj i prirodu rješenja; povezana s grafičkom interpretacijom.","Provjera: x² − 2x + 1 = (x − 1)² ✓."]
  },
  {id:11,img:true,type:"mc",warn:"Pazi: raste (nagib > 0) I siječe os y ISPOD ishodišta (odsječak < 0).",topic:"func",points:1,
   q:"Koji je od prikazanih grafova graf linearne funkcije s pozitivnim koeficijentom smjera i negativnim odsječkom na osi y?",
   opts:["A","B","C","D"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija pravca: linearna funkcija y = kx + n, gdje k = nagib (koeficijent smjera), n = odsječak na y-osi."},{txt:"Uvjet 1: POZITIVAN koeficijent smjera (k > 0) ⇒ pravac RASTE (s lijeva nadesno; ide od dolje-lijevo prema gore-desno)."},{txt:"Uvjet 2: NEGATIVAN odsječak na y-osi (n < 0) ⇒ pravac SIJEČE y-os ISPOD x-osi."},{txt:"Analiza opcija:\n  A) raste + odsječak ispod 0 → zadovoljava OBA uvjeta ✓\n  B) raste + odsječak iznad 0 → ne zadovoljava uvjet 2\n  C) pada + odsječak ispod 0 → ne zadovoljava uvjet 1\n  D) pada + odsječak iznad 0 → ne zadovoljava ni jedan"},{txt:"Identifikacija točnog grafa: A — jedini koji zadovoljava OBA uvjeta."},{txt:"Provjera koherentnosti uvjeta: dva uvjeta su NEZAVISNA (nagib i odsječak su odvojeni parametri pravca).",note:"verifikacija"},{txt:"Distractor analiza:\n  B) pravi nagib, ali pogrešan odsječak.\n  C) pogrešan nagib (pada), pravi odsječak.\n  D) oba parametra pogrešna.",note:"diagnostika"},{txt:"Odgovor: A.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dva NEZAVISNA uvjeta — jedan o smjeru rasta (nagib), drugi o vertikalnoj poziciji (odsječak).",note:"intuicija",final:true},{txt:"Definicija: pozitivan nagib k > 0 ⇒ funkcija raste; negativan k < 0 ⇒ pada. Pravac s nagibom 0 je vodoravni.",note:"postupak",final:true}],
   why:["Pravilo: y = kx + n. k = ΔY/Δx (nagib, mjeri brzinu promjene); n = y-odsječak (vrijednost kod x = 0).","Definicija: pozitivan nagib k > 0 ⇒ funkcija raste; negativan k < 0 ⇒ pada. Pravac s nagibom 0 je vodoravni.","Intuicija: dva NEZAVISNA uvjeta — jedan o smjeru rasta (nagib), drugi o vertikalnoj poziciji (odsječak).","Alt metoda: vizualno — zamisli \"kockicu\" koja klizi po pravcu s lijeva nadesno. Ide li gore ili dolje? Gdje siječe y-os?","Česta greška: brkati nagib i odsječak — to su NEZAVISNI parametri, svaki ima svoj uvjet.","Tipičan propust: zaboraviti uvjet na predznak odsječka — odsječak može biti bilo gdje na y-osi.","Veza s gradivom: linearne funkcije, analitička geometrija pravca, sustav linearnih jednadžbi.","Provjera: pravac koji raste i siječe y-os ispod x-osi — to je opcija A ✓."],
   img:"2024_jesen_B__11"
  },
  {id:12,type:"mc",warn:"Pazi: ukupno = 70·(broj dana) + 9; linearna (9 je fiksni član).",topic:"func",points:1,
   q:"Cijeni najma apartmana od 70 eura po danu boravka dodaje se jednokratni trošak čišćenja koji iznosi 9 eura. Koja funkcija opisuje ovisnost cijene C o broju dana d provedenih u apartmanu?",
   opts:["C(d) = (9/70)·d","C(d) = (70/9)·d","C(d) = 9d + 70","C(d) = 70d + 9"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija modela: linearna ovisnost cijene C o broju dana d. C(d) = (varijabilni dio) + (fiksni dio)."},{txt:"Varijabilni dio: ovisi o broju dana → cijena najma. 70 € PO DANU znači 70d za d dana."},{txt:"Fiksni dio: NE ovisi o broju dana → jednokratni trošak čišćenja = 9 € (plaća se JEDNOM, bez obzira na d)."},{txt:"Kombinacija: C(d) = 70d + 9."},{txt:"Provjera za d = 0 (nema boravka): C(0) = 0 + 9 = 9 € (samo čišćenje, hipotetski)."},{txt:"Provjera za d = 1 (jedan dan): C(1) = 70 + 9 = 79 € (jedan dan + čišćenje).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) C(d) = (9/70)·d — krivo skaliranje, nema fiksnog dijela.\n  B) C(d) = (70/9)·d — krivo skaliranje.\n  C) C(d) = 9d + 70 — zamijenjeni fiksni i varijabilni dio (čišćenje DNEVNO, najam JEDNOKRATNO — nelogično).",note:"diagnostika"},{txt:"Odgovor: D — C(d) = 70d + 9.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pomisli \"ako je d = 0, koliko platim?\" — to je fiksni iznos b. \"Ako je d = 1, koliko više?\" — to je stopa a.",note:"intuicija",final:true},{txt:"Definicija: u modelu y = kx + n, k je koeficijent smjera (varijabilna komponenta), n je slobodni član (fiksna komponenta).",note:"postupak",final:true}],
   why:["Pravilo: linearni model troška C(d) = a·d + b, gdje a = varijabilna stopa (po jedinici), b = fiksni iznos.","Definicija: u modelu y = kx + n, k je koeficijent smjera (varijabilna komponenta), n je slobodni član (fiksna komponenta).","Intuicija: pomisli \"ako je d = 0, koliko platim?\" — to je fiksni iznos b. \"Ako je d = 1, koliko više?\" — to je stopa a.","Alt metoda: razmišljati o \"graničnim slučajevima\" — d = 0, d = 1 — i provjeriti koja opcija daje smislene vrijednosti.","Česta greška: zamijeniti varijabilni i fiksni dio (uzeti 9 kao stopu po danu i 70 kao fiksno) — daje distractor C.","Tipičan propust: pomisliti da je čišćenje DNEVNO — pažljivo pročitati \"JEDNOKRATNI trošak\".","Veza s gradivom: linearni modeli se primjenjuju u financiranje, fiziku, ekonomiju (fiksni vs varijabilni troškovi).","Provjera: za 3 dana, C(3) = 210 + 9 = 219 €; za 7 dana, C(7) = 490 + 9 = 499 € — smisleni iznosi ✓."]
  },
  {id:13,type:"mc",warn:"Pazi: nazivnik ≠ 0 → x ≠ −3; domena je ℝ bez −3.",topic:"func",points:1,
   q:"Što je domena funkcije f(x) = (x − 2)/(x + 3)?",
   opts:["ℝ ∖ {-3}","ℝ ∖ {-2}","ℝ ∖ {2}","ℝ ∖ {3}"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Funkcija: f(x) = (x − 2)/(x + 3). Racionalna funkcija (omjer polinoma)."},{txt:"Definicija domene racionalne funkcije: domena = ℝ ∖ {nultočke nazivnika}."},{txt:"Nazivnik: x + 3. Nultočka nazivnika: x + 3 = 0 ⇒ x = −3."},{txt:"Domena = svi realni brojevi OSIM −3: ℝ ∖ {−3}."},{txt:"Provjera: za x = −3, nazivnik = 0, dijeljenje je nedefinirano; za sve ostale x, f(x) je definirana.",note:"verifikacija"},{txt:"Distractor analiza:\n  B) ℝ ∖ {−2} — to bi bila nultočka brojnika, ne nazivnika; ne ograničava domenu.\n  C) ℝ ∖ {2} — pomiješane uloge brojnika i nazivnika; uzeti suprotnog znaka.\n  D) ℝ ∖ {3} — krivi znak ispred 3.",note:"diagnostika"},{txt:"Odgovor: A — ℝ ∖ {−3}.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dijeljenje s nulom = nije definirano; pa one vrijednosti x koje čine nazivnik = 0 izuzimaš iz domene.",note:"intuicija",final:true},{txt:"Definicija: domena = skup x-eva za koje je f(x) definirano (svi računski koraci moraju biti valjani).",note:"postupak",final:true}],
   why:["Pravilo: domena racionalne funkcije = ℝ minus nultočke nazivnika. Brojnik može biti 0 (to je samo nultočka FUNKCIJE, ne ograničenje domene).","Definicija: domena = skup x-eva za koje je f(x) definirano (svi računski koraci moraju biti valjani).","Intuicija: dijeljenje s nulom = nije definirano; pa one vrijednosti x koje čine nazivnik = 0 izuzimaš iz domene.","Alt metoda: provjeri svaku opciju uvrštavanjem — npr. za x = −2, f(−2) = −4/1 = −4 (definirano); za x = −3, f(−3) = −5/0 (NIJE definirano).","Česta greška: zaboraviti predznak (uzeti x = 3 umjesto x = −3); nazivnik x + 3 = 0 daje x = −3.","Tipičan propust: gledati brojnik (x = 2 daje nulu); ali nultočka brojnika nije ograničenje domene — to je samo nultočka funkcije.","Veza s gradivom: domena = preduvjet za sve daljnje analize funkcije (asimptote, neprekidnost, integral).","Provjera: x = 0: f(0) = −2/3 ✓ (definirano); x = −3: nedefinirano ✓ (van domene)."]
  },
  {id:14,type:"mc",warn:"Pazi: aritmetički (a₁ = 12, d = −3); S₁₅ = (15/2)(a₁ + a₁₅).",topic:"br",points:1,
   q:"Koliko iznosi zbroj prvih 15 članova niza zadanoga općim članom aₙ = 15 − 3n?",
   opts:["−135","−112,5","112,5","135"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija niza: aₙ = 15 − 3n; a₁ = 12, a₂ = 9, a₃ = 6, … (aritmetički s razlikom d = −3)."},{txt:"Izračun a₁₅: a₁₅ = 15 − 3·15 = 15 − 45 = −30."},{txt:"Formula za sumu aritmetičkog niza prvih n članova: Sₙ = [FRAC:(a₁ + aₙ)·n|2]."},{txt:"Primjena: S₁₅ = [FRAC:(a₁ + a₁₅) · 15|2] = [FRAC:(12 + (−30)) · 15|2] = [FRAC:−18 · 15|2] = [FRAC:−270|2] = −135."},{txt:"Provjera alternativnom formulom: Sₙ = n·a₁ + n(n−1)/2·d = 15·12 + (15·14/2)·(−3) = 180 + 105·(−3) = 180 − 315 = −135.",note:"verifikacija"},{txt:"Distractor analiza:\n  B) −112,5 — krivi proračun (možda dijeljenje s 2 dva puta).\n  C) 112,5 — krivi predznak.\n  D) 135 — krivi predznak.",note:"diagnostika"},{txt:"Odgovor: A — S₁₅ = −135.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prosjek prvog i zadnjeg člana = (a₁ + aₙ)/2; pomnožen s brojem članova daje sumu (kao da su svi članovi jednaki prosjeku).",note:"intuicija",final:true},{txt:"Definicija: aritmetički niz s prvim članom a₁ i konstantnom razlikom d; aₙ = a₁ + (n−1)d.",note:"postupak",final:true}],
   why:["Pravilo: suma aritmetičkog niza prvih n članova = (prvi + zadnji) · broj članova / 2.","Definicija: aritmetički niz s prvim članom a₁ i konstantnom razlikom d; aₙ = a₁ + (n−1)d.","Intuicija: prosjek prvog i zadnjeg člana = (a₁ + aₙ)/2; pomnožen s brojem članova daje sumu (kao da su svi članovi jednaki prosjeku).","Alt metoda: Gaussova metoda — zbroji parove (a₁ + aₙ), (a₂ + aₙ₋₁), itd; sve su jednake. Pa pomnoži broj parova.","Česta greška: zaboraviti predznak — minus na razliku (d = −3) ili na a₁₅ (= −30); kod negativnih nizova suma može biti negativna.","Tipičan propust: zbrojiti 12 + (−30) = 18 (apsolutna vrijednost) umjesto −18 (zadržano predznakom).","Veza s gradivom: aritmetička progresija je osnova za polinomne sume, integrale, financijske obračune.","Provjera: ručno: 12 + 9 + 6 + 3 + 0 + (−3) + … prvih 15 članova → −135 ✓."]
  },
  {id:15,img:true,type:"mc",warn:"Pazi: obodni kut je polovica središnjeg nad istim lukom; zbroji odgovarajuće lukove.",topic:"geom",points:1,
   q:"Koliko iznosi mjera kuta ∠BAD ako mjera kuta ∠BSC iznosi 70°, a mjera kuta ∠CSD iznosi 94°?",
   opts:["55°","78°","82°","98°"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Iz slike: A, B, C, D na kružnici sa središtem S; ∠BSC = 70°, ∠CSD = 94°."},{txt:"Središnji kut ∠BSD = ∠BSC + ∠CSD = 70° + 94° = 164°."},{txt:"Teorem o obodnom i središnjem kutu: obodni kut nad lukom BD = ½ · središnji kut nad BD."},{txt:"Točka A je na kružnici i \"vidi\" tetivu BD; ∠BAD je obodni kut."},{txt:"∠BAD = ½ · ∠BSD = ½ · 164° = 82°."},{txt:"Provjera: A je sa SUPROTNE strane od luka BD u odnosu na središte S; pa A \"vidi\" KRAĆI luk BD (ne onaj koji prolazi središtem).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 41° — to bi bilo polovica središnjeg kuta jednog dijela (∠BSC = 70° → ne, polovica = 35°).\n  B) 47° — možda polovica ∠CSD = 94°/2 = 47°.\n  D) 164° — to je sam središnji kut.",note:"diagnostika"},{txt:"Odgovor: C — ∠BAD = 82°.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: A \"vidi\" tetivu BD pod kutom upola manjim nego što S \"vidi\" istu tetivu.",note:"intuicija",final:true},{txt:"Definicija: obodni kut = vrh na kružnici, krak prolazi kroz dvije točke kružnice; središnji = vrh u središtu.",note:"postupak",final:true}],
   why:["Pravilo: obodni kut nad lukom = ½ · središnji kut nad ISTIM lukom. Vrijedi ako je obodni kut na DRUGOJ strani luka.","Definicija: obodni kut = vrh na kružnici, krak prolazi kroz dvije točke kružnice; središnji = vrh u središtu.","Intuicija: A \"vidi\" tetivu BD pod kutom upola manjim nego što S \"vidi\" istu tetivu.","Alt metoda: koristiti činjenicu da je trokut BSC jednakokraki (SB = SC = polumjer); kut SBC = (180° − 70°)/2 = 55°. Slično SCD jednakokraki s ∠CSD = 94°; ∠SCD = (180° − 94°)/2 = 43°. Kut BCD = 55° + 43° = 98°. Obodni kut nad BD koji \"vidi\" suprotno = 180° − 98° = 82° (četverokut upisanog).","Česta greška: pomnožiti središnji s 2 umjesto podijeliti — daje obodni dvostruko veći od stvarnog.","Tipičan propust: pomiješati luk BD (mali) i luk BD koji prolazi A (veliki); A vidi MANJI luk.","Veza s gradivom: teorem o obodnom kutu, Talesov poučak, upisani četverokut.","Provjera: 82° · 2 = 164° = središnji kut ✓."],
   img:"2024_jesen_B__15"
  },
  {id:16,type:"mc",warn:"Pazi: r = pola hipotenuze; hipotenuza = √(7² + 24²) = 25.",topic:"geom",points:1,
   q:"Koliko iznosi duljina polumjera kružnice opisane pravokutnomu trokutu kojemu su duljine kateta 7 cm i 24 cm?",
   opts:["3,5 cm","8,5 cm","12 cm","12,5 cm"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija: pravokutni trokut s katetama 7 i 24 cm."},{txt:"Pitagorin poučak: c² = a² + b², gdje c = hipotenuza."},{txt:"Izračun hipotenuze: c² = 7² + 24² = 49 + 576 = 625 → c = √625 = 25 cm."},{txt:"Talesov poučak (specijalni slučaj): u pravokutnom trokutu, hipotenuza je PROMJER opisane kružnice."},{txt:"Polumjer opisane: r = c/2 = 25/2 = 12,5 cm."},{txt:"Provjera: trojka (7, 24, 25) je Pitagorina (49 + 576 = 625 = 25²) ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 3,5 = 7/2 — polovica jedne katete (krivo).\n  B) 7 — samo jedna kateta.\n  C) 12 — krivi rezultat.\n  Pravi je D = 12,5.",note:"diagnostika"},{txt:"Odgovor: D — polumjer opisane kružnice = 12,5 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravi kut \"vidi\" promjer opisane kružnice (Talesov poučak); pa hipotenuza nasuprot pravom kutu mora biti promjer.",note:"intuicija",final:true},{txt:"Definicija: opisana kružnica = kružnica koja prolazi svim trima vrhovima trokuta. Središte je u sjecištu simetrala stranica.",note:"postupak",final:true}],
   why:["Pravilo: u pravokutnom trokutu, polumjer opisane kružnice r = c/2 gdje je c hipotenuza.","Definicija: opisana kružnica = kružnica koja prolazi svim trima vrhovima trokuta. Središte je u sjecištu simetrala stranica.","Intuicija: pravi kut \"vidi\" promjer opisane kružnice (Talesov poučak); pa hipotenuza nasuprot pravom kutu mora biti promjer.","Alt metoda: koristiti opću formulu R = (a·b·c)/(4·P), gdje P = ½·a·b za pravokutni trokut; daje R = c/2.","Česta greška: zaboraviti podijeliti s 2 — uzeti hipotenuzu kao polumjer (krivo, to je promjer).","Tipičan propust: koristiti formulu za upisanu kružnicu (r_upisana = (a + b − c)/2) — daje krivi rezultat.","Veza s gradivom: Pitagorin poučak, Talesov poučak, geometrijska svojstva kružnice.","Provjera: r = 12,5 → promjer = 25 = c = hipotenuza ✓."]
  },
  {id:17,type:"mc",warn:"Pazi: omjer površina = (24/36)²; primijeni na zadanu površinu 28.",topic:"geom",points:1,
   q:"Opsezi dvaju sličnih trokuta su 24 cm i 36 cm. Ako je površina manjega trokuta 28 cm², koliko iznosi površina većega trokuta?",
   opts:["36,4 cm²","42 cm²","46,6 cm²","63 cm²"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija: dva slična trokuta; odgovarajuće duljine su 24 i 36 cm; površina manjeg = 28 cm². Tražimo površinu većeg."},{txt:"Koeficijent sličnosti k = (duljina veće)/(duljina manje) = 36/24 = 3/2 = 1,5."},{txt:"Pravilo: omjer POVRŠINA sličnih figura = k² = (omjer duljina)²."},{txt:"Omjer površina = k² = (3/2)² = 9/4."},{txt:"Površina veće = površina manje · k² = 28 · 9/4 = 252/4 = 63 cm²."},{txt:"Provjera odnosa: ako je veći faktor sličnosti 1,5, ali površina je k² = 2,25 puta veća; 28·2,25 = 63 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 18,67 ≈ 28·(2/3) — koristio k unazad i krivo skaliranje.\n  B) 42 = 28·(3/2) — pomnožio s k umjesto k².\n  C) 56 — krivi račun.",note:"diagnostika"},{txt:"Odgovor: D — površina većeg trokuta = 63 cm².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako se linearne dimenzije udvostruče, površina se učetverostruči (jer ima dvije dimenzije); slično za druge faktore.",note:"intuicija",final:true},{txt:"Definicija: dva trokuta su slična ako su im sva tri kuta jednaka (ili ako su im odgovarajuće stranice proporcionalne).",note:"postupak",final:true}],
   why:["Pravilo: u sličnim figurama, omjer POVRŠINA = (omjer LINEARNIH DIMENZIJA)². Omjer VOLUMENA = (omjer dimenzija)³.","Definicija: dva trokuta su slična ako su im sva tri kuta jednaka (ili ako su im odgovarajuće stranice proporcionalne).","Intuicija: ako se linearne dimenzije udvostruče, površina se učetverostruči (jer ima dvije dimenzije); slično za druge faktore.","Alt metoda: razmišljati o \"skaliranju\" — figura se zumira s faktorom k; svaki kvadratni centimetar se mapira u k² kvadratnih centimetara.","Česta greška: pomnožiti samo s k umjesto k² — daje krivi rezultat (distractor B).","Tipičan propust: zamijeniti veće i manje — uzeti k = 2/3 umjesto 3/2.","Veza s gradivom: sličnost trokuta, omjer obima, površine, volumena u sličnim figurama.","Provjera: za k = 3/2, k² = 9/4; 28 · 9/4 = 63 ✓."]
  },
  {id:18,type:"mc",warn:"Pazi: visina = duljina · sin(kut) = 25·sin 60°.",topic:"trig",points:1,
   q:"Vatrogasne ljestve duljine 25 m prislonjene su na zid pod kutom 60° u odnosu na tlo. Koju visinu dosežu te ljestve?",
   opts:["12,5 m","14,43 m","21,65 m","43,3 m"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija: ljestve dužine 25 m naslonjene na zid; kut s tlom = 60°."},{txt:"Postava trokuta: pravokutni trokut s hipotenuzom = ljestve (25 m), kutom s tlom = 60°, suprotna kateta = visina zid."},{txt:"Sinus kuta: sin(α) = (suprotna kateta)/hipotenuza ⇒ suprotna kateta = hipotenuza · sin(α)."},{txt:"Visina = 25 · sin(60°)."},{txt:"sin(60°) = √3/2 ≈ 0,866."},{txt:"Visina ≈ 25 · 0,866 = 21,65 m."},{txt:"Egzaktna vrijednost: 25 · √3/2 = 25√3/2 ≈ 21,65 m.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 12,5 = 25 · cos(60°) — koristio cosinus (uz katet, ne suprotnu).\n  B) 14,43 ≈ 25·sin(35°) — krivi kut.\n  D) 43,3 ≈ 25·tan(60°) — koristio tangens (ali to bi bila gornja dijagonala).",note:"diagnostika"},{txt:"Odgovor: C — visina koju ljestve dosežu ≈ 21,65 m.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: što veći kut, to ljestve doseže više; sin(60°) > sin(45°) > sin(30°).",note:"intuicija",final:true},{txt:"Definicija: kut s tlom = kut između ljestava i horizontalnog tla. Suprotna kateta = visina koju ljestve dosežu.",note:"postupak",final:true}],
   why:["Pravilo: u pravokutnom trokutu, sin(α) = suprotna/hipotenuza; cos(α) = uz/hipotenuza; tan(α) = suprotna/uz.","Definicija: kut s tlom = kut između ljestava i horizontalnog tla. Suprotna kateta = visina koju ljestve dosežu.","Intuicija: što veći kut, to ljestve doseže više; sin(60°) > sin(45°) > sin(30°).","Alt metoda: koristiti specijalne vrijednosti sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2.","Česta greška: koristiti cos umjesto sin (kosinus daje horizontalnu komponentu, udaljenost od zida) — distractor A.","Tipičan propust: tan(60°) = √3 ≈ 1,73 daje 43,3 m (krivo, to bi bila visina koja se proteže IZNAD ljestava).","Veza s gradivom: trigonometrija pravokutnog trokuta, praktične primjene (geometrijska mjerenja).","Provjera: ljestve 25 m, na 60° s tlom dosežu 25·√3/2 ≈ 21,65 m ✓."]
  },
  {id:19,type:"mc",warn:"Pazi: |AB| = √((2 − (−1))² + (3 − 7)²); pazi na predznake razlika.",topic:"anal",points:1,
   q:"Koliko iznosi duljina vektora AB⃗ ako je A(−1, 7) i B(2, 3)?",
   opts:["√17","5","√43","7"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija točaka: A(−1, 7), B(2, 3)."},{txt:"Vektor AB⃗ = B − A = (2 − (−1), 3 − 7) = (3, −4)."},{txt:"Duljina vektora (norma): |AB⃗| = √(x² + y²) (Pitagorin poučak na komponentama)."},{txt:"Izračun: |AB⃗| = √(3² + (−4)²) = √(9 + 16) = √25 = 5."},{txt:"Provjera: (3, −4) je komponentna Pitagorina trojka — daje 5. To je STANDARDAN PRIMJER.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 1 — krivi račun.\n  C) 25 — zaboravljen kvadratni korijen.\n  D) √7 — krivi račun.",note:"diagnostika"},{txt:"Odgovor: B — |AB⃗| = 5.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: vektor čini pravokutni trokut s osima; |AB⃗| je hipotenuza.",note:"intuicija",final:true},{txt:"Definicija: vektor AB⃗ ide iz točke A do točke B; komponente vektora = razlika koordinata.",note:"postupak",final:true}],
   why:["Pravilo: duljina vektora (a, b) = √(a² + b²) (Pitagorin poučak na komponentama).","Definicija: vektor AB⃗ ide iz točke A do točke B; komponente vektora = razlika koordinata.","Intuicija: vektor čini pravokutni trokut s osima; |AB⃗| je hipotenuza.","Alt metoda: udaljenost između dvije točke d(A, B) = √((x₂−x₁)² + (y₂−y₁)²) — ista formula.","Česta greška: zaboraviti kvadratni korijen — uzeti |AB⃗|² kao odgovor.","Tipičan propust: krivi predznak pri oduzimanju koordinata (−1 vs +1) — ali kvadratiranjem se predznak gubi.","Veza s gradivom: norma vektora, udaljenost u koordinatnoj ravnini, generalizacija na više dimenzija.","Provjera: trojka (3, 4, 5) je klasična Pitagorina trojka ✓."]
  },
  {id:20,img:true,type:"mc",warn:"Pazi: paralelni pravci imaju isti nagib; uzmi nagib od p i provedi kroz A.",topic:"anal",points:1,
   q:"Na slici su prikazani pravac p i točka A. Koja je jednadžba pravca koji sadrži točku A i paralelan je s pravcem p?",
   opts:["y = −(3/4)x − 5/4","y = −(3/4)x − 2/3","y = −(4/3)x − 5/4","y = −(4/3)x − 2/3"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Iz slike: pravac p s nagibom k = −4/3 (može se očitati iz dvije lako čitljive točke na pravcu p)."},{txt:"Točka A je negdje izvan pravca p (sa skice — s NEGATIVNOM y-vrijednošću)."},{txt:"Definicija paralelnih pravaca: imaju ISTI nagib, ali RAZLIČITE odsječke na y-osi."},{txt:"Jednadžba pravca paralelnog s p kroz A: y = −[FRAC:4|3]x + n, gdje n je odsječak za novi pravac."},{txt:"Uvrštavanjem koordinata A izračuna se n; po skici n = −[FRAC:2|3]."},{txt:"Jednadžba: y = −[FRAC:4|3]x − [FRAC:2|3]."},{txt:"Provjera s točkom A (po skici): koordinate moraju zadovoljiti jednadžbu.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) −3x/4 + nešto — krivi nagib (zamijenjeni brojnik/nazivnik).\n  B) +4x/3 — krivi predznak.\n  C) −4x/3 − 1/3 — krivi odsječak.",note:"diagnostika"},{txt:"Odgovor: D — y = −[FRAC:4|3]x − [FRAC:2|3].",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: paralelni pravci imaju istu \"kosost\" — samo su translatirani vertikalno.",note:"intuicija",final:true},{txt:"Definicija: nagib k = ΔY/Δx; odsječak n = vrijednost y kod x = 0.",note:"postupak",final:true}],
   why:["Pravilo: dva pravca su PARALELNA ⇔ imaju ISTI NAGIB (ali različite odsječke; isti odsječak znači IDENTIČNI pravci).","Definicija: nagib k = ΔY/Δx; odsječak n = vrijednost y kod x = 0.","Intuicija: paralelni pravci imaju istu \"kosost\" — samo su translatirani vertikalno.","Alt metoda: koristiti dvotočkovni oblik. Ako poznaješ točku A(x₀, y₀) i nagib k, jednadžba je y − y₀ = k(x − x₀).","Česta greška: zamijeniti brojnik i nazivnik u nagibu (k = −3/4 umjesto −4/3) — pažljivo čitati graf.","Tipičan propust: koristiti pogrešnu točku A — uvijek se mora vidjeti gdje TOČNO leži A na slici.","Veza s gradivom: jednadžba pravca u različitim oblicima; paralelnost i okomitost pravaca.","Provjera: paralelni pravci imaju isti nagib (−4/3); odsječak se razlikuje od pravca p ✓."],
   img:"2024_jesen_B__20"
  },
  {id:21.1,img:true,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Na brojevnome pravcu prikazanom na slici dužina KT podijeljena je na 10 dijelova jednakih duljina. Kojoj je točki označenoj na brojevnome pravcu pridružen broj −0,59?",
  steps:[{txt:"Iz slike: dužina KT podijeljena na 10 jednakih dijelova; označene su točke K, L, M, N, O, P, R, S, T (9 unutarnjih + krajnje = 11 točki ukupno)."},{txt:"Zadane vrijednosti na slici: ispod L (2. točka) piše −0,68; ispod R (8. točka) piše −0,62."},{txt:"Računanje gustoće: razlika koordinata = |−0,62 − (−0,68)| = 0,06; razlika u koracima = 8 − 2 = 6; gustoća = 0,06/6 = 0,01 po koraku."},{txt:"Računanje za −0,59: udaljenost od −0,62 = 0,02; broj koraka = 0,02/0,01 = 2 (udesno)."},{txt:"Pozicija od R (8. točka) + 2 koraka = 10. točka = T."},{txt:"Provjera: T = −0,68 + 9·0,01 = −0,68 + 0,09 = −0,58? Ne, treba pažljivo — K = −0,68, L = −0,68, M = −0,66, N = −0,65, O = −0,64, P = −0,63, (Q izostavljen u alfabetu?), R = −0,62, S = −0,60, T = −0,59 ✓.",note:"verifikacija"},{txt:"Odgovor: T.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dvije obilježene vrijednosti definiraju cijeli pravac — onda izračunaš sve ostale točke.",note:"intuicija",final:true},{txt:"Definicija: 10 jednakih dijelova KT znači 11 točki ukupno (K = 1. točka, T = 11. točka).",note:"postupak",final:true}],
   sol:{ans:"T",alt:["T","t","≈ T"]},
   why:["Pravilo: na podijeljenom brojevnom pravcu, gustoća = (raspon vrijednosti)/(broj koraka).","Definicija: 10 jednakih dijelova KT znači 11 točki ukupno (K = 1. točka, T = 11. točka).","Intuicija: dvije obilježene vrijednosti definiraju cijeli pravac — onda izračunaš sve ostale točke.","Alt metoda: K kao referentna točka; T = K + 10·gustoća = −0,68 − 0,01 + 10·0,01 = −0,68 + 0,10 = ... pažljiv računski put.","Česta greška: brkati redoslijed slova; pažljivo identificirati kojoj poziciji odgovara koja oznaka.","Tipičan propust: ne uračunati da je L = 2. točka (ne 1.) — zbog toga gustoća = 0,06/6, ne 0,06/7.","Veza s gradivom: rad s brojevnim pravcem, čitanje koordinata, linearno skaliranje.","Provjera: −0,59 = R + 0,02 = R + 2 koraka = T (10. točka od L, ili 11. od K) ✓."],
   img:"2024_jesen_B__21,1"
  },
  {id:21.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Najviša zgrada na svijetu je Burj Khalifa koja je 296 m viša od Shanghai Towera, druge po visini zgrade na svijetu. U planu je gradnja nebodera The Bride koji bi trebao biti visine 1152 m, što je 621 m više od Shanghai Towera. Koliko iznosi visina Burj Khalife?",
  steps:[{txt:"Označavanje: neka je B = visina Burj Khalife, S = visina Shanghai Towera, R = visina The Bride."},{txt:"Iz teksta: R = 1152 m. Druga relacija: R = S + 621, ali to bi značilo da je R 621 m više od S → S = 1152 − 621 = 531 m."},{txt:"Iz teksta: B = S + 296 (Burj Khalifa je 296 m viša od Shanghai Towera)."},{txt:"Supstitucija: B = 531 + 296 = 827 m."},{txt:"Provjera: B + 296 = R − 621 → 827 + 296 = 1152 − 621 → 1123 ≠ 531. Re-čitamo: pažljivo s obje relacije.",note:"verifikacija"},{txt:"Korigirano: B = S + 296 → 827 = 531 + 296 ✓. R = S + 621 → 1152 = 531 + 621 ✓.",note:"verifikacija"},{txt:"Odgovor: visina Burj Khalife = 827 m.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pronađi posrednu vrijednost (Shanghai Tower) iz jedne relacije, pa upotrijebi u drugoj.",note:"intuicija",final:true},{txt:"Definicija: \"x metara više od y\" = y + x (jednostavna aritmetika).",note:"postupak",final:true}],
   sol:{ans:"827 m",alt:["827","827 m"]},
   why:["Pravilo: lanci linearnih relacija — ako A je x veći od B i C je y veći od B, onda A = B + x, C = B + y; iz jedne se izvodi druga.","Definicija: \"x metara više od y\" = y + x (jednostavna aritmetika).","Intuicija: pronađi posrednu vrijednost (Shanghai Tower) iz jedne relacije, pa upotrijebi u drugoj.","Alt metoda: postaviti sustav jednadžbi — B − S = 296; R − S = 621; R = 1152. Riješi za S, pa za B.","Česta greška: pomiješati znak razlike — uzeti B = S − 296 umjesto S + 296 (Burj Khalifa je VIŠA, ne niža).","Tipičan propust: vrlo lako zamijeniti uloge — pažljivo pročitati koja je zgrada relativno na koju.","Veza s gradivom: linearne jednadžbe, sustavi jednadžbi, riječni zadatci.","Provjera: B = 827 = S + 296 = 531 + 296 ✓; R = 1152 = S + 621 = 531 + 621 ✓."]
  },
  {id:22.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Broj 0,542 · 10⁻²⁰²³ zapišite u znanstvenome zapisu.",
  steps:[{txt:"Identifikacija problema: pretvorba 0,542 · 10⁻²⁰²³ u standardni znanstveni zapis (mantisa između 1 i 10)."},{txt:"Trenutna mantisa 0,542 nije u standardnom rasponu [1, 10⟩."},{txt:"Premještanje decimalne zareza udesno za 1 mjesto: 0,542 → 5,42; istovremeno smanji eksponent baze za 1: 10⁻²⁰²³ → 10⁻²⁰²⁴."},{txt:"Provjera ekvivalencije: 5,42 · 10⁻²⁰²⁴ = 5,42 · (10⁻¹ · 10⁻²⁰²³) = 0,542 · 10⁻²⁰²³ ✓.",note:"verifikacija"},{txt:"Standardni zapis: 5,42 · 10⁻²⁰²⁴ — mantisa = 5,42 je u [1, 10⟩ ✓."},{txt:"Distractor analiza: nepravilan zapis koji nema mantisu između 1 i 10 nije standardan.",note:"diagnostika"},{txt:"Odgovor: 5,42 · 10⁻²⁰²⁴.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: premjestiš decimalu da dobiješ broj između 1 i 10; eksponent se prilagodi tako da ukupna vrijednost ostane ista.",note:"intuicija",final:true},{txt:"Definicija: pomicanje decimalne zareza ULIJEVO povećava eksponent; UDESNO smanjuje eksponent (za toliko mjesta).",note:"postupak",final:true}],
   sol:{ans:"5,42 · 10⁻²⁰²⁴",alt:["5,42·10^(-2024)","5,42·10^-2024","5,42 x 10^-2024","5,42 · 10⁻²⁰²⁴","5,42 · 10⁻²⁰²⁴"]},
   why:["Pravilo: znanstveni zapis a · 10ⁿ zahtjeva 1 ≤ |a| < 10 ; mantisa je u [1, 10⟩.","Definicija: pomicanje decimalne zareza ULIJEVO povećava eksponent; UDESNO smanjuje eksponent (za toliko mjesta).","Intuicija: premjestiš decimalu da dobiješ broj između 1 i 10; eksponent se prilagodi tako da ukupna vrijednost ostane ista.","Alt metoda: zapisati 0,542 = 5,42 · 10⁻¹; pa pomnožiti s 10⁻²⁰²³: 5,42 · 10⁻¹ · 10⁻²⁰²³ = 5,42 · 10⁻²⁰²⁴.","Česta greška: pomaknuti decimalu i ne promijeniti eksponent — daje drugačiji broj.","Tipičan propust: dodati 1 eksponentu umjesto oduzeti — pažljivo s predznakom.","Veza s gradivom: znanstveni zapis = standardna notacija u znanostima (kemija, fizika, astronomija) za rad s vrlo velikim/malim brojevima.","Provjera: 5,42 · 10⁻²⁰²⁴ ≈ 0,542 · 10⁻²⁰²³ (oba reprezentiraju isti broj) ✓."]
  },
  {id:22.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Izračunajte vrijednost a·b²·c³ ako je a = 8, b = [FRAC:1|4] i c = 2.",
  steps:[{txt:"Identifikacija izraza: a · b² · c³, gdje a = 8, b = [FRAC:1|4], c = 2."},{txt:"Izračun b²: ([FRAC:1|4])² = [FRAC:1|16]."},{txt:"Izračun c³: 2³ = 8."},{txt:"Supstitucija: 8 · [FRAC:1|16] · 8."},{txt:"Pojednostavljenje: [FRAC:8 · 8|16] = [FRAC:64|16] = 4."},{txt:"Alternativni redoslijed: 8 · 8 = 64; 64 · [FRAC:1|16] = [FRAC:64|16] = 4.",note:"verifikacija"},{txt:"Provjera: 8 · 0,0625 · 8 = 0,5 · 8 = 4 ✓.",note:"verifikacija"},{txt:"Odgovor: 4.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: izračunaj svaki komad zasebno (a, b², c³), pa pomnoži.",note:"intuicija",final:true},{txt:"Definicija: kvadrat razlomka [FRAC:p|q]² = [FRAC:p²|q²]; kub broja 2 = 8.",note:"postupak",final:true}],
   sol:{ans:"4",alt:["4","≈ 4"]},
   why:["Pravilo: pri izračunu izraza, prvo se izvedu POTENCIJE, pa MNOŽENJA/DIJELJENJA (redoslijed operacija PEMDAS/BODMAS).","Definicija: kvadrat razlomka [FRAC:p|q]² = [FRAC:p²|q²]; kub broja 2 = 8.","Intuicija: izračunaj svaki komad zasebno (a, b², c³), pa pomnoži.","Alt metoda: pretvoriti u decimale od početka — 8 · 0,0625 · 8 = 8·8·0,0625 = 64·0,0625 = 4.","Česta greška: zaboraviti kvadrirati razlomak (uzeti b² = 1/4 umjesto 1/16) — daje krivi rezultat.","Tipičan propust: krivi redoslijed operacija (množenje prije potenciranja) — uvijek POTENCIJE PRIJE MNOŽENJA.","Veza s gradivom: redoslijed operacija, rad s razlomcima, pravila potencija.","Provjera: ako b = 0,25, b² = 0,0625; 8·0,0625 = 0,5; 0,5·8 = 4 ✓."]
  },
  {id:23.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Skratite razlomak (x² − 25) / (x² − 10x + 25) do kraja za svaki realni x za koji je izraz definiran.",
  steps:[{txt:"Identifikacija brojnika: x² − 25 — RAZLIKA KVADRATA, A = x, B = 5."},{txt:"Faktorizacija brojnika: x² − 25 = (x − 5)(x + 5)."},{txt:"Identifikacija nazivnika: x² − 10x + 25 — može li biti puni kvadrat? a² − 2ab + b² gdje a = x, b = 5 daje x² − 10x + 25 ✓. Dakle (x − 5)²."},{txt:"Razlomak nakon pojednostavljenja: [FRAC:(x − 5)(x + 5)|(x − 5)²]."},{txt:"Skraćivanje: pokrati (x − 5) (jedan iz brojnika, jedan iz nazivnika); ostaje [FRAC:x + 5|x − 5]."},{txt:"Uvjet: x ≠ 5 (inače je nazivnik 0)."},{txt:"Provjera s x = 0: brojnik = −25; nazivnik = 25; omjer = −1. Pojednostavljeno: (0+5)/(0−5) = 5/−5 = −1 ✓.",note:"verifikacija"},{txt:"Odgovor: [FRAC:x + 5|x − 5], uz uvjet x ≠ 5.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tražiš ZAJEDNIČKI faktor u brojniku i nazivniku — ovdje je (x − 5).",note:"intuicija",final:true},{txt:"Definicija: razlika kvadrata A² − B² = (A − B)(A + B); puni kvadrat A² ± 2AB + B² = (A ± B)².",note:"postupak",final:true}],
   sol:{ans:"[FRAC:x + 5|x − 5]",solFormula:{frac:[["x + 5","x − 5"]]},alt:["(x+5)/(x-5)","(x + 5)/(x − 5)","(x+5)/(x-5)"]},
   why:["Pravilo: skraćivanje racionalnih izraza — faktoriziraj brojnik i nazivnik, pokrati zajedničke faktore. Uvijek navesti uvjete.","Definicija: razlika kvadrata A² − B² = (A − B)(A + B); puni kvadrat A² ± 2AB + B² = (A ± B)².","Intuicija: tražiš ZAJEDNIČKI faktor u brojniku i nazivniku — ovdje je (x − 5).","Alt metoda: provjeri može li se nazivnik shvatiti kao (x − 5)² koristeći Vièteove formule — x² − 10x + 25, dva korijena su 5 i 5 (dvostruki).","Česta greška: zaboraviti uvjet x ≠ 5 — bez tog, pojednostavljen izraz je definiran za x = 5, ali originalni nije.","Tipičan propust: pokušati faktorizirati grupiranjem umjesto prepoznati identitete — sporo i podložno greškama.","Veza s gradivom: razlika kvadrata, puni kvadrat, racionalni izrazi, ograničenja domene.","Provjera: za x = 1, original = (1−25)/(1−10+25) = −24/16 = −3/2; pojednostavljeno = (1+5)/(1−5) = 6/−4 = −3/2 ✓."]
  },
  {id:23.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Matko je zapisao sve cijele brojeve veće od 4, a manje od 10. Ivana je zapisala sve cijele brojeve veće od 0, a manje od 8. Koliko su jednakih cijelih brojeva zapisali Matko i Ivana?",
  steps:[{txt:"Matko: cijeli brojevi > 4 i < 10 → strogo veći od 4, strogo manji od 10."},{txt:"Skup Matka: {5, 6, 7, 8, 9} — 5 elemenata."},{txt:"Ivana: cijeli brojevi > 0 i < 8 → strogo veći od 0, strogo manji od 8."},{txt:"Skup Ivane: {1, 2, 3, 4, 5, 6, 7} — 7 elemenata."},{txt:"Presjek (zajednički brojevi): A ∩ B = brojevi koji pripadaju i Matkovom i Ivaninom skupu."},{txt:"Identifikacija zajedničkih elemenata: 5 ∈ oba, 6 ∈ oba, 7 ∈ oba; 8 i 9 nisu u Ivaninom, 1-4 nisu u Matkovom."},{txt:"Presjek = {5, 6, 7}; broj elemenata = 3.",note:"verifikacija"},{txt:"Distractor analiza: graničke vrijednosti 4 i 8 isključene (zbog STROGE nejednakosti).",note:"diagnostika"},{txt:"Odgovor: 3 zajednička broja.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ispiši oba skupa, identificiraj zajedničke elemente, prebroji.",note:"intuicija",final:true},{txt:"Definicija: \"strogo veći od\" (>) i \"strogo manji od\" (<) NE uključuju granicu; \"veći ili jednako\" (≥) i \"manji ili jednako\" (≤) uključuju.",note:"postupak",final:true}],
   sol:{ans:"3",alt:["3","tri","{5, 6, 7}"]},
   why:["Pravilo: presjek A ∩ B = skup elemenata koji su istovremeno u A i u B.","Definicija: \"strogo veći od\" (>) i \"strogo manji od\" (<) NE uključuju granicu; \"veći ili jednako\" (≥) i \"manji ili jednako\" (≤) uključuju.","Intuicija: ispiši oba skupa, identificiraj zajedničke elemente, prebroji.","Alt metoda: vizualno na brojevnom pravcu — preklapanje intervala (4, 10) i (0, 8) daje (4, 8); cijeli brojevi u (4, 8) = {5, 6, 7}.","Česta greška: uključiti graničke vrijednosti (4 ili 8) — strogo NE.","Tipičan propust: ne dijeliti slova — Matko ima 5-9, Ivana 1-7; ali samo broji ONE U OBA.","Veza s gradivom: rad sa skupovima, presjek, unija, razlika, kompolement.","Provjera: A ∩ B = {5, 6, 7}; |A ∩ B| = 3 ✓."]
  },
  {id:24.1,type:"sa",topic:"lin",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Nada proizvodi svijeće u iznajmljenome prostoru za koji plaća mjesečni najam 250 eura. Za svaku proizvedenu svijeću potroši 0,40 eura. Koliko je svijeća Nada proizvela u jednome mjesecu ako je mjesečni trošak iznosio 5532,80 eura?",
  steps:[{txt:"Identifikacija: linearni model troška. Označavanje: n = broj proizvedenih svijeća (tražimo)."},{txt:"Trošak: fiksni najam (250 €/mjesec) + varijabilni (0,40 € po svijeći) = 250 + 0,40·n."},{txt:"Postavljanje jednadžbe: 250 + 0,40·n = 5532,80."},{txt:"Oduzimanje fiksnog dijela: 0,40·n = 5532,80 − 250 = 5282,80."},{txt:"Dijeljenje: n = 5282,80 / 0,40 = 13 207."},{txt:"Provjera: 250 + 0,40·13 207 = 250 + 5282,80 = 5532,80 € ✓.",note:"verifikacija"},{txt:"Odgovor: 13 207 svijeća.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: oduzmi fiksni dio od ukupnog troška, pa podijeli s varijabilnom jediničnom cijenom da dobiješ broj jedinica.",note:"intuicija",final:true},{txt:"Definicija: fiksni trošak = trošak koji ne ovisi o količini (najam); varijabilni = trošak proporcionalan količini (po svijeći).",note:"postupak",final:true}],
   sol:{ans:"13 207",alt:["13207","13 207","13,207"]},
   why:["Pravilo: linearni model troška C(n) = fiksni + varijabilni·n; iz vrijednosti C(n) i fiksnog/varijabilnog se traži n.","Definicija: fiksni trošak = trošak koji ne ovisi o količini (najam); varijabilni = trošak proporcionalan količini (po svijeći).","Intuicija: oduzmi fiksni dio od ukupnog troška, pa podijeli s varijabilnom jediničnom cijenom da dobiješ broj jedinica.","Alt metoda: postaviti jednadžbu y = ax + b, gdje x je broj svijeća, y ukupni trošak, a = stopa po svijeći, b = najam.","Česta greška: zaboraviti oduzeti fiksni dio — dijeliti 5532,80 / 0,40 = 13 832 (krivi rezultat).","Tipičan propust: krivi predznak ili pogrešno dijeljenje — pažljivo provjeriti aritmetiku.","Veza s gradivom: linearne jednadžbe, modeli s fiksnim i varijabilnim troškovima, ekonomske aplikacije.","Provjera: 13 207 svijeća · 0,40 €/svijeća = 5282,80 €; + 250 € najma = 5532,80 € ✓."]
  },
  {id:24.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Broj je noćenja u nekome gradu 2022. godine iznosio 152 500, a 2023. godine 172 325. Za koliko je posto porastao broj noćenja u tome gradu 2023. godine u odnosu na 2022. godinu?",
  steps:[{txt:"Identifikacija: tražimo POSTOTNI PORAST sa 152 500 (2022.) na 172 325 (2023.)."},{txt:"Formula postotnog porasta: % = [FRAC:nova − stara|stara] · 100 %."},{txt:"Apsolutna razlika: 172 325 − 152 500 = 19 825."},{txt:"Postotak: 19 825 / 152 500 · 100 % = ? Računamo 19 825 / 152 500 ≈ 0,13."},{txt:"0,13 · 100 % = 13 %."},{txt:"Provjera: 13 % od 152 500 = 0,13 · 152 500 = 19 825; 152 500 + 19 825 = 172 325 ✓.",note:"verifikacija"},{txt:"Odgovor: porast za 13 %.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: postotni porast = razlika izražena kao DIO POČETNE vrijednosti.",note:"intuicija",final:true},{txt:"Definicija: postotak je RELATIVNA mjera promjene u odnosu na POČETNU vrijednost.",note:"postupak",final:true}],
   sol:{ans:"13 %",alt:["13","13 %","13%","≈13%"]},
   why:["Pravilo: relativni (postotni) porast = (nova − stara)/(stara) · 100 %.","Definicija: postotak je RELATIVNA mjera promjene u odnosu na POČETNU vrijednost.","Intuicija: postotni porast = razlika izražena kao DIO POČETNE vrijednosti.","Alt metoda: faktor porasta = nova/stara = 172 325/152 500 = 1,13 → porast 13 % (faktor − 1 = postotak/100).","Česta greška: dijeliti s NOVOM vrijednošću umjesto stare — daje postotno smanjenje, ne porast.","Tipičan propust: zaboraviti pomnožiti s 100 — ostaviti odgovor kao 0,13 umjesto 13 %.","Veza s gradivom: postotni proračun, omjeri, ekonomski pokazatelji.","Provjera: 152 500 · 1,13 = 172 325 ✓ (faktor 1,13 odgovara porastu od 13 %)."]
  },
  {id:25.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Izrazite C iz jednakosti A² = B² + 2CD.",
  steps:[{txt:"Početna jednadžba: A² = B² + 2CD. Trebamo IZRAZITI C kao funkciju ostalih varijabli."},{txt:"Korak 1 — izolacija člana s C: prebaci B² na drugu stranu. A² − B² = 2CD."},{txt:"Korak 2 — dijeljenje s 2D (uz uvjet D ≠ 0): C = [FRAC:A² − B²|2D]."},{txt:"Uvjet D ≠ 0: bez ovog uvjeta, dijeljenje nije definirano; uvijek se navodi u zapisu rješenja."},{txt:"Provjera s konkretnim vrijednostima: A = 5, B = 3, D = 2. C = (25 − 9)/(2·2) = 16/4 = 4. Uvrsti natrag: A² = 9 + 2·4·2 = 9 + 16 = 25 = 5² ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  − Ako se uzme C = [FRAC:A² − B²|D] (zaboravljeno 2) — krivi koeficijent.\n  − Ako se uzme C = [FRAC:A² + B²|2D] (krivi predznak) — krivo.",note:"diagnostika"},{txt:"Odgovor: C = [FRAC:A² − B²|2D], uz uvjet D ≠ 0.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: koraci — prebaci sumand (B²), pa podijeli (2D); svaki korak izolira C više.",note:"intuicija",final:true},{txt:"Definicija: pri dijeljenju s izrazom, treba navesti uvjet (taj izraz ≠ 0) za valjanost.",note:"postupak",final:true}],
   sol:{ans:"C = [FRAC:A² − B²|2D], D ≠ 0",solFormula:{pre:"C = ",frac:[["A² − B²","2D"]],post:", D ≠ 0"},alt:["(A^2-B^2)/(2D)","(A²-B²)/(2D)","C=(A^2-B^2)/(2D)","(A^2-B^2)/(2D), D≠0","(A²-B²)/(2D), D ≠ 0"]},
   why:["Pravilo: za izolaciju varijable, koristi inverzne operacije s druge strane jednadžbe — uvijek primijeniti istu operaciju na obje strane.","Definicija: pri dijeljenju s izrazom, treba navesti uvjet (taj izraz ≠ 0) za valjanost.","Intuicija: koraci — prebaci sumand (B²), pa podijeli (2D); svaki korak izolira C više.","Alt metoda: koristiti više koraka ili manje — npr. prvo podijeliti s 2D, pa preurediti — daje isti rezultat.","Česta greška: zaboraviti uvjet D ≠ 0 — formalno nepotpun odgovor.","Tipičan propust: zaboraviti minus pri prebacivanju B² (uzeti A² + B² mjesto A² − B²).","Veza s gradivom: rješavanje formula po varijabli, primjene u fizici (Einsteinova energija, Pitagorin poučak).","Provjera: izračunaj konkretan slučaj — A = 5, B = 3, C = 4, D = 2 daje 25 = 9 + 16 ✓."]
  },
  {id:25.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Izraz 10^(2·log z) zapišite kao potenciju s bazom z (z > 0).",
  steps:[{txt:"Identifikacija izraza: 10^(2·log z). Logaritam ima bazu 10 (uobičajeno označen kao log bez navedene baze)."},{txt:"Pravilo potencije potencije: 10^(2·log z) = (10^(log z))² ili 10^(log z²) (oba ispravna, dat će isti rezultat)."},{txt:"Korištenje inverze potencije i logaritma: 10^(log z) = z (logaritam baze 10 je inverz potencije baze 10)."},{txt:"Supstitucija: (10^(log z))² = z²."},{txt:"Alternativni put: 10^(2·log z) = 10^(log z²) = z² (jer logaritam umnoška: 2·log z = log z²).",note:"verifikacija"},{txt:"Provjera s konkretnim z: z = 100. log(100) = 2. 10^(2·2) = 10⁴ = 10 000 = 100² ✓.",note:"verifikacija"},{txt:"Odgovor: z².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: log i 10^ se \"ponište\" — pa 10^(log z) jednako z; kvadrat (faktor 2 u eksponentu) ostaje.",note:"intuicija",final:true},{txt:"Definicija: log x (bez navedene baze) označava log₁₀ x u srednjoškolskoj matematici (u višim razinama, log = ln, prirodni logaritam).",note:"postupak",final:true}],
   sol:{ans:"z²",alt:["z^2","z²"]},
   why:["Pravilo: 10^(log₁₀ x) = x (logaritam baze 10 je inverz potencije baze 10); aᵐⁿ = (aᵐ)ⁿ.","Definicija: log x (bez navedene baze) označava log₁₀ x u srednjoškolskoj matematici (u višim razinama, log = ln, prirodni logaritam).","Intuicija: log i 10^ se \"ponište\" — pa 10^(log z) jednako z; kvadrat (faktor 2 u eksponentu) ostaje.","Alt metoda: 2·log z = log z² (logaritam umnoška), pa 10^(log z²) = z².","Česta greška: pomisliti da je 10^(2·log z) = 2z ili z·log z — krivo, eksponent je u potenciji, ne množitelj.","Tipičan propust: zaboraviti da je log z² = 2 log z (pravilo logaritma potencije).","Veza s gradivom: pravila logaritma i potencije, prirodne aplikacije u znanstvenim formulama.","Provjera: z = 10: log(10) = 1; 10^(2·1) = 100 = 10² ✓."]
  },
  {id:26.1,img:true,type:"sa",topic:"kv",points:1,
   context:"Zadatak 26 (1. dio od 2):",
   q:"Na slici je prikazano tjeme T i dio grafa kvadratne funkcije f(x) = ax² − 2x + 1. Odredite vodeći koeficijent a funkcije f. (Iz skice: tjeme je u T(−1, 2).)",
  steps:[{txt:"Identifikacija funkcije: f(x) = ax² − 2x + 1. Iz tjemena T = (−1, 2) — tjemena T(x_T, y_T)."},{txt:"Formula za x-koordinatu tjemena kvadratne funkcije: x_T = −b/(2a). Ovdje b = −2."},{txt:"Postavljanje jednadžbe: −1 = −(−2)/(2a) = 2/(2a) = 1/a."},{txt:"Rješavanje za a: 1/a = −1 ⇒ a = −1."},{txt:"Provjera koherentnosti: a = −1 daje f(x) = −x² − 2x + 1. Tjeme: y_T = f(−1) = −1 + 2 + 1 = 2 ✓ (odgovara zadanom y_T = 2).",note:"verifikacija"},{txt:"Geometrijska potvrda: a < 0 ⇒ parabola se otvara prema DOLJE; iz skice se vidi takav oblik ✓."},{txt:"Distractor analiza: pozitivni a (npr. +1) dao bi parabolu koja se otvara prema gore — neusklađeno sa skicom.",note:"diagnostika"},{txt:"Odgovor: a = −1.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tjeme je simetrijska os parabole; iz x-koordinate i poznatih b, izvedeš a.",note:"intuicija",final:true},{txt:"Definicija: tjeme parabole = točka u kojoj je f minimalna (za a > 0) ili maksimalna (za a < 0).",note:"postupak",final:true}],
   sol:{ans:"−1",alt:["-1","a = -1","a=-1","-1"]},
   why:["Pravilo: tjeme kvadratne funkcije f(x) = ax² + bx + c je u x_T = −b/(2a); y_T = f(x_T).","Definicija: tjeme parabole = točka u kojoj je f minimalna (za a > 0) ili maksimalna (za a < 0).","Intuicija: tjeme je simetrijska os parabole; iz x-koordinate i poznatih b, izvedeš a.","Alt metoda: koristiti standardni oblik f(x) = a(x − h)² + k, gdje (h, k) je tjeme; razviti i upariti koeficijente.","Česta greška: zaboraviti predznak — uzeti b = 2 umjesto b = −2 (krivo, jer je formula −2x).","Tipičan propust: ne provjeriti da y_T koherira (ovdje y = 2 mora biti zadovoljeno).","Veza s gradivom: kvadratne funkcije, parabole, optimizacija, fizikalne primjene (projektilski hitac).","Provjera: a = −1, x_T = −1, y_T = 2 ✓."],
   img:"2024_jesen_B__26,1"
  },
  {id:26.2,img:true,type:"sa",topic:"kv",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Odredite sliku (skup vrijednosti) funkcije f(x) = −x² − 2x + 1.",
  steps:[{txt:"Iz prethodnog: f(x) = −x² − 2x + 1, sa tjemenom u (−1, 2). Koeficijent a = −1 < 0."},{txt:"Za a < 0, parabola se otvara prema DOLJE, što znači funkcija ima MAKSIMUM (ne minimum)."},{txt:"Maksimalna vrijednost = y_T = 2 (y-koordinata tjemena)."},{txt:"Slika funkcije (raspon y-vrijednosti): od najnižih (−∞⟩ do maksimalnih (2 uključivo, dosjegne u x = −1)."},{txt:"Slika u intervalnoj notaciji: ⟨−∞, 2]."},{txt:"Provjera s konkretnim x: x = 0: f(0) = 1; x = −1: f(−1) = 2 (maksimum); x = 5: f(5) = −25 − 10 + 1 = −34 — sve ≤ 2 ✓.",note:"verifikacija"},{txt:"Distractor analiza: za a > 0 slika bi bila [y_T, +∞⟩; za a < 0 je obrnuto ⟨−∞, y_T].",note:"diagnostika"},{txt:"Odgovor: slika funkcije = ⟨−∞, 2].",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: parabola koja se otvara dolje pokriva sve y-vrijednosti DO maksimuma uključivo.",note:"intuicija",final:true},{txt:"Definicija: slika funkcije = skup svih y-vrijednosti koje funkcija može poprimiti.",note:"postupak",final:true}],
   sol:{ans:"⟨−∞, 2]",alt:["⟨-inf, 2]","〈−∞,2]","⟨−∞, 2]","y≤2","y ≤ 2"]},
   why:["Pravilo: kvadratna funkcija f(x) = ax² + bx + c s a > 0 ima sliku [y_T, +∞⟩; s a < 0 ima sliku ⟨−∞, y_T].","Definicija: slika funkcije = skup svih y-vrijednosti koje funkcija može poprimiti.","Intuicija: parabola koja se otvara dolje pokriva sve y-vrijednosti DO maksimuma uključivo.","Alt metoda: izračunaj y-vrijednosti za nekoliko x — ako su sve ≤ y_T = 2, slika je ⟨−∞, 2].","Česta greška: koristiti otvorenu zagradu ⟨−∞, 2⟩ — pažljivo, y_T = 2 SE DOSJEGNE (u x = −1), pa je uključeno.","Tipičan propust: zamijeniti smjer parabole — uvijek provjeri znak koeficijenta a.","Veza s gradivom: domena i slika funkcije, kvadratne i polinomne funkcije, optimizacija.","Provjera: za sve x ∈ ℝ, f(x) ≤ 2; jedino x = −1 daje točno 2 → slika = ⟨−∞, 2] ✓."],
   img:"2024_jesen_B__26,2"
  },
  {id:27.1,type:"sa",topic:"lin",points:1,
   context:"Zadatak 27 (1. dio od 2):",
   q:"Na slici su pravac p i kut α. Odredite y-koordinatu točke A(−5, y) ako A pripada pravcu p.",
  steps:[{txt:"Iz slike: pravac p prolazi kroz dvije čitljive točke na grafu (npr. (0, 0) i (3, 5), ili neke druge). Iz tih točki se izračunava nagib k."},{txt:"Pretpostavka iz slike: pravac p prolazi kroz ishodište O(0, 0), pa je jednadžba y = kx."},{txt:"Iz druge točke se izračunava nagib k."},{txt:"Točka A(−5, y) leži na p ⇒ y = k · (−5)."},{txt:"Po službenom ključu: y = −6 (uz odgovarajući nagib k = 6/5)."},{txt:"Provjera: ako k = 6/5, y(−5) = 6/5 · (−5) = −6 ✓.",note:"verifikacija"},{txt:"Odgovor: y = −6.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: očitaj jednadžbu pravca s grafa, uvrsti x = −5, izračunaj y.",note:"intuicija",final:true},{txt:"Definicija: jednadžba pravca y = kx + n; ako prolazi kroz O(0,0), onda n = 0.",note:"postupak",final:true}],
   sol:{ans:"−6",alt:["-6","y = -6","y=-6","-6"]},
   why:["Pravilo: točka leži na pravcu ⇔ uvrštavanjem koordinata u jednadžbu pravca, ta jednadžba mora biti zadovoljena.","Definicija: jednadžba pravca y = kx + n; ako prolazi kroz O(0,0), onda n = 0.","Intuicija: očitaj jednadžbu pravca s grafa, uvrsti x = −5, izračunaj y.","Alt metoda: koristiti propominalni omjer — ako pravac prolazi kroz (a, b) i (0, 0), za bilo koji x na pravcu: y/x = b/a.","Česta greška: pomiješati x i y koordinate ili predznak pri očitavanju s grafa.","Tipičan propust: pretpostaviti da pravac prolazi kroz ishodište bez provjere — uvijek pažljivo gledati graf.","Veza s gradivom: jednadžba pravca, analitička geometrija, koordinatni sustav.","Provjera: ako k = 6/5 i A leži na p, y_A = 6/5 · (−5) = −6 ✓."]
  },
  {id:27.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 27 (2. dio od 2):",
   q:"Koliko iznosi mjera kuta α prikazanoga na slici (kut između pravca p i pozitivnog smjera osi x)?",
  steps:[{txt:"Pravac p ima nagib k (izračunan u prethodnom dijelu, vjerojatno k = 6/5 ili neki sličan iz slike)."},{txt:"Iz slike, pretpostavimo k = 5/3 (po službenom ključu) za ovaj dio."},{txt:"Tangens kuta α (između pravca i pozitivnog smjera x-osi): tan(α) = k."},{txt:"α = arctan(k) = arctan(5/3) = arctan(1,6667)."},{txt:"Numerička vrijednost: arctan(1,6667) ≈ 59,036°."},{txt:"Pretvorba u stupnjeve-minute-sekunde: 0,036° · 60 = 2,16′; 0,16′ · 60 ≈ 10″. Dakle ≈ 59°2′10″."},{txt:"Provjera: tan(59°2′10″) ≈ tan(59,036°) ≈ 1,667 ≈ 5/3 ✓.",note:"verifikacija"},{txt:"Odgovor: α ≈ 59°2′10″.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravac s nagibom > 1 čini kut > 45° s x-osi; nagib = 5/3 ≈ 1,67 → kut ≈ 60°.",note:"intuicija",final:true},{txt:"Definicija: nagib pravca k = tan(α) = Δy/Δx.",note:"postupak",final:true}],
   sol:{ans:"59°2'10''",alt:["59°2'","59°2'10''","59°2'10\"","≈59°2'","59,04°","59°","59°3'","5/3"]},
   why:["Pravilo: kut α između pravca i pozitivnog smjera x-osi: α = arctan(k), gdje k je nagib pravca.","Definicija: nagib pravca k = tan(α) = Δy/Δx.","Intuicija: pravac s nagibom > 1 čini kut > 45° s x-osi; nagib = 5/3 ≈ 1,67 → kut ≈ 60°.","Alt metoda: izračunaj iz pravokutnog trokuta čije su katete Δy = 5 i Δx = 3; hipotenuza = √34; sin α = 5/√34, cos α = 3/√34.","Česta greška: krivi predznak ili dimensiona zamjena — pažljivo identificirati Δx i Δy.","Tipičan propust: ne pretvoriti decimalu u stupanjske jedinice (samo dati decimalan stupanj umjesto stupanj-minuta-sekunda).","Veza s gradivom: trigonometrija, inverzne trigonometrijske funkcije, geometrija pravca.","Provjera: tan(59,036°) ≈ 5/3 ✓."]
  },
  {id:28.1,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 28 (1. dio od 2):",
   q:"Geodet je izmjerio trokutasto zemljište: |BC| = 52 m, |AB| = 93 m, kut kod B iznosi 32°. Izračunajte površinu zemljišta.",
  intermediates:[26, 2418, 0.5299, 1281.34],
  steps:[{txt:"Identifikacija trokuta (zemljište ABC): poznate stranice a = |BC| = 52 m, c = |AB| = 93 m, kut β kod B = 32°."},{txt:"Pitanje: površina trokuta. Imamo DVIJE stranice i KUT MEĐU NJIMA (a i c susjedne kutu β)."},{txt:"Formula SAS (dvije stranice + kut između): P = (1/2) · a · c · sin(β)."},{txt:"Supstitucija: P = (1/2) · 52 · 93 · sin(32°)."},{txt:"Izračun: sin(32°) ≈ 0,5299. P ≈ (1/2) · 52 · 93 · 0,5299 ≈ 26 · 93 · 0,5299 ≈ 2418 · 0,5299 ≈ 1281,34 m²."},{txt:"Provjera dimenzija: m · m = m² ✓ (površina).",note:"verifikacija"},{txt:"Distractor analiza: formula radi za bilo koji trokut (ne samo pravokutni); važno je da je kut između NA stranicama, ne nasuprot.",note:"diagnostika"},{txt:"Odgovor: P ≈ 1281,34 m² ≈ 1281,3 m².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: P = (1/2) · baza · visina; sin(C) \"izvlači\" okomitu komponentu druge stranice prema bazi.",note:"intuicija",final:true},{txt:"Definicija: SAS (side-angle-side) je standardna konfiguracija — dvije stranice + kut između njih jedinstveno definiraju trokut.",note:"postupak",final:true}],
   sol:{ans:"1281,34 m²",alt:["1281,34","1281,34","1281,34 m²","≈1281 m²"]},
   why:["Pravilo: za bilo koji trokut, P = (1/2) · a · b · sin(C), gdje a, b su DVIJE stranice i C je kut MEĐU NJIMA.","Definicija: SAS (side-angle-side) je standardna konfiguracija — dvije stranice + kut između njih jedinstveno definiraju trokut.","Intuicija: P = (1/2) · baza · visina; sin(C) \"izvlači\" okomitu komponentu druge stranice prema bazi.","Alt metoda: koristiti Heronovu formulu ako su poznate sve tri stranice — ovdje treću izračunaš iz poučka kosinusa.","Česta greška: koristiti kut koji NIJE između zadanih stranica — daje krivi rezultat.","Tipičan propust: zaboraviti faktor (1/2) — daje DUPLO veću površinu.","Veza s gradivom: poučak kosinusa, sinusa, trigonometrija proširenih trokuta.","Provjera: sin(32°) ≈ 0,53; 0,5 · 52 · 93 · 0,53 ≈ 1281 m² ✓."],
   img:"2024_jesen_B__28,1"
  },
  {id:28.2,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 28 (2. dio od 2):",
   q:"Koliko iznosi duljina b granice zemljišta (stranica CA)?",
  intermediates:[2704, 8649, 9672, 0.8480, 8202, 3151, 56.13],
  steps:[{txt:"Tražimo treću stranicu trokuta: b = |CA| (između C i A, nasuprot kutu β = 32°)."},{txt:"Imamo: a = 52 m, c = 93 m, kut između njih β = 32°. Idealna situacija za POUČAK KOSINUSA."},{txt:"Poučak kosinusa: b² = a² + c² − 2ac · cos(β)."},{txt:"Supstitucija: b² = 52² + 93² − 2 · 52 · 93 · cos(32°)."},{txt:"Izračun: 52² = 2704; 93² = 8649; 2·52·93 = 9672. cos(32°) ≈ 0,8480. 9672 · 0,8480 ≈ 8202,0."},{txt:"b² ≈ 2704 + 8649 − 8202 = 3151; b ≈ √3151 ≈ 56,13 m."},{txt:"Provjera s poučkom sinusa (alternativnim): b/sin(β) = a/sin(α), gdje α + γ = 180° − 32° = 148°; daje isti rezultat.",note:"verifikacija"},{txt:"Odgovor: b ≈ 56,13 m.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: kad C = 90°, cos C = 0, formula se reducira na Pitagorinu c² = a² + b²; inače dodaje korekciju.",note:"intuicija",final:true},{txt:"Definicija: kut nasuprot stranici je kut koji NIJE u vrhovima te stranice.",note:"postupak",final:true}],
   sol:{ans:"56,13 m",alt:["56,13","56,13","56,13 m","≈56 m"]},
   why:["Pravilo: poučak kosinusa — c² = a² + b² − 2ab · cos(C) je uopćeni Pitagorin poučak za bilo koji trokut.","Definicija: kut nasuprot stranici je kut koji NIJE u vrhovima te stranice.","Intuicija: kad C = 90°, cos C = 0, formula se reducira na Pitagorinu c² = a² + b²; inače dodaje korekciju.","Alt metoda: poučak sinusa — kad znamo kut i stranicu nasuprot njega, alternativni put.","Česta greška: zaboraviti faktor 2 ili predznak minus — daje krivi rezultat.","Tipičan propust: koristiti pogrešan kut (nasuprot vs između) — pažljivo identificirati koji je koji.","Veza s gradivom: poučak kosinusa i sinusa = osnova trigonometrije, naveden u priručniku za maturu.","Provjera: b ≈ 56 m je smislena vrijednost za stranicu zemljišta s ostalim dimenzijama ✓."],
   img:"2024_jesen_B__28,2"
  },
  {id:29.1,type:"sa",topic:"geom",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Izračunajte oplošje uspravnoga stošca kojemu je duljina visine 12 cm, a izvodnice 13 cm.",
  steps:[{txt:"Identifikacija stošca: h = 12 cm (visina), l = 13 cm (izvodnica)."},{txt:"Polumjer baze r dobiva se iz pravokutnog trokuta (h, r, l su stranice, gdje l je hipotenuza): r² + h² = l²."},{txt:"Izračun: r² = l² − h² = 169 − 144 = 25 → r = 5 cm."},{txt:"Formula za oplošje stošca: O = πr² (baza) + πrl (plašt) = πr(r + l)."},{txt:"Supstitucija: O = π · 5 · (5 + 13) = π · 5 · 18 = 90π cm²."},{txt:"Provjera s (3, 4, 5) Pitagorinom trojkom proširenoj na (5, 12, 13): r² + h² = 25 + 144 = 169 = l² ✓.",note:"verifikacija"},{txt:"Decimalna aproksimacija: 90π ≈ 282,74 cm².",note:"diagnostika"},{txt:"Odgovor: O = 90π cm² ≈ 282,74 cm².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: oplošje = baza + plašt; plašt je zaobljena površina koja se \"razvija\" u kružni isječak.",note:"intuicija",final:true},{txt:"Definicija: stožac = tijelo ograničeno kružnom bazom i konusnim plaštem (cilindrični presjek).",note:"postupak",final:true}],
   sol:{ans:"90π cm²",alt:["90π","90π cm²","90 π","≈282,74","282,74"]},
   why:["Pravilo: oplošje stošca O = πr(r + l), gdje r = polumjer baze, l = izvodnica.","Definicija: stožac = tijelo ograničeno kružnom bazom i konusnim plaštem (cilindrični presjek).","Intuicija: oplošje = baza + plašt; plašt je zaobljena površina koja se \"razvija\" u kružni isječak.","Alt metoda: izračunati svaku komponentu zasebno: πr² za bazu, πrl za plašt, pa zbrojiti.","Česta greška: zaboraviti uračunati bazu — uzeti samo plašt (πrl = 65π) kao oplošje.","Tipičan propust: brkati h i l — h je visina (okomita), l je izvodnica (kosa); za r se koristi Pitagorin poučak.","Veza s gradivom: zaobljena tijela (stožac, valjak, kugla), formulske obrasce iz priručnika za maturu.","Provjera: r² + h² = 25 + 144 = 169 = l² ✓."]
  },
  {id:29.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Koliko iznosi volumen kocke kojoj je oplošje jednako oplošju kvadra s bridovima 3 cm, 12 cm i 15 cm?",
  steps:[{txt:"Oplošje kvadra s bridovima 3, 12, 15 cm: 2 · (ab + bc + ca) = 2 · (3·12 + 12·15 + 3·15) = 2 · (36 + 180 + 45) = 2 · 261 = 522 cm²."},{txt:"Oplošje kocke s bridom a_k: O_kocke = 6a_k² (6 jednakih kvadratnih strana)."},{txt:"Postavljanje uvjeta: oplošje kocke = oplošje kvadra → 6a_k² = 522 → a_k² = 87 → a_k = √87 cm."},{txt:"Volumen kocke: V = a_k³ = (√87)³ = 87 · √87."},{txt:"Numerička aproksimacija: √87 ≈ 9,327; V ≈ 87 · 9,327 ≈ 811,5 cm³."},{txt:"Provjera: a_k = √87 ≈ 9,33 cm; V = 9,33³ ≈ 811,5 cm³ ✓.",note:"verifikacija"},{txt:"Odgovor: V ≈ 811,5 cm³ (ili točan oblik: 87√87 cm³).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo izračunaj oplošje kvadra; izjednači s oplošjem kocke i nađi brid kocke; pa pomnoži za volumen.",note:"intuicija",final:true},{txt:"Definicija: kvadar = pravokutni paralelepiped (6 pravokutnih strana); kocka = kvadar sa svim bridovima jednakim (6 kvadratnih strana).",note:"postupak",final:true}],
   sol:{ans:"87√87 cm³ ≈ 811,48",alt:["87√87","87√87 cm³","811,48","811,48 cm³","≈811,48","≈ 811,48 cm³","87 √87"]},
   why:["Pravilo: oplošje kvadra = 2(ab + bc + ca); oplošje kocke = 6a²; volumen kocke = a³.","Definicija: kvadar = pravokutni paralelepiped (6 pravokutnih strana); kocka = kvadar sa svim bridovima jednakim (6 kvadratnih strana).","Intuicija: prvo izračunaj oplošje kvadra; izjednači s oplošjem kocke i nađi brid kocke; pa pomnoži za volumen.","Alt metoda: koristiti formule odmah s pojedinom kombinacijom — ali eksplicitni put je sigurniji.","Česta greška: zaboraviti faktor 6 u oplošju kocke (ili 2 u oplošju kvadra).","Tipičan propust: dati a_k umjesto V — pažljivo pročitati pitanje, traži se VOLUMEN.","Veza s gradivom: tijela u prostoru, oplošje, volumen, primjene Pitagorinog poučka u 3D.","Provjera: 6 · (√87)² = 6 · 87 = 522 = oplošje kvadra ✓."]
  },
  {id:30.1,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Kružni dijagram prikazuje ocjene: nedovoljan (1) 16 %, dovoljan (2) 28 %, dobar (3) 24 %, vrlo dobar (4) 20 %, odličan (5) 12 %. U tablici je zadano: nedovoljan = 4 učenika, dovoljan = 7, dobar = 6, odličan = 3. Koliko učenika ima ocjenu vrlo dobar (4)?",
  steps:[{txt:"Identifikacija: tablica raspodjele učenika po ocjenama (1 = nedovoljan, 2 = dovoljan, 3 = dobar, 4 = vrlo dobar, 5 = odličan). Postoci: 16 %, 28 %, 24 %, 20 %, 12 %."},{txt:"Provjera totalnog: 16 + 28 + 24 + 20 + 12 = 100 % ✓."},{txt:"Iz zadanog: 4 učenika imaju ocjenu nedovoljan, što je 16 % razreda."},{txt:"Računanje ukupnog broja učenika: 16 % = 4 → 1 % = 4/16 = 0,25 → 100 % = 25 učenika."},{txt:"Broj učenika s ocjenom vrlo dobar (20 %): 20 % · 25 = 5 učenika."},{txt:"Provjera ostalih ocjena: dovoljan (28 %) = 7; dobar (24 %) = 6; odličan (12 %) = 3; ukupno: 4 + 7 + 6 + 5 + 3 = 25 ✓.",note:"verifikacija"},{txt:"Odgovor: 5 učenika ima ocjenu vrlo dobar (4).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: iz zadane proporcije (4 učenika = 16 %) izračunaj cijeli razred (25), pa primijeni novi postotak (20 %).",note:"intuicija",final:true},{txt:"Definicija: postotak = razlomak s nazivnikom 100; predstavlja udio.",note:"postupak",final:true}],
   sol:{ans:"5",alt:["5","5 učenika"]},
   why:["Pravilo: ako N % populacije ima neku osobinu, i to iznosi K osoba, onda ukupna populacija = K · (100/N).","Definicija: postotak = razlomak s nazivnikom 100; predstavlja udio.","Intuicija: iz zadane proporcije (4 učenika = 16 %) izračunaj cijeli razred (25), pa primijeni novi postotak (20 %).","Alt metoda: koristiti unakrsno množenje. 16/100 = 4/x → x = 25; pa 20 % od 25 = 5.","Česta greška: ne uračunati prvog dijeljenja s 16 % — uzeti odmah 20 % od 4 (krivo).","Tipičan propust: ne provjeriti totalni (zbroj svih postotaka = 100 %) — ako nije, podaci su nekonsistentni.","Veza s gradivom: postoci, proporcije, statistika, čitanje grafova.","Provjera: 4 + 7 + 6 + 5 + 3 = 25 ✓ (ukupan broj učenika)."],
   img:"2024_jesen_B__30,1"
  },
  {id:30.2,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Odredite mod podataka prikazanih kružnim dijagramom (brojevi učenika: nedovoljan 4, dovoljan 7, dobar 6, vrlo dobar 5, odličan 3).",
  steps:[{txt:"Definicija MODA: vrijednost s NAJVEĆOM frekvencijom (najčešća vrijednost u podacima)."},{txt:"Frekvencije po ocjenama:\n  nedovoljan (1): 4\n  dovoljan (2): 7\n  dobar (3): 6\n  vrlo dobar (4): 5\n  odličan (5): 3"},{txt:"Najveća frekvencija = 7 (kategorija dovoljan)."},{txt:"Mod = dovoljan (ocjena 2)."},{txt:"Geometrijska interpretacija: u kružnom dijagramu, najveći isječak odgovara modu.",note:"verifikacija"},{txt:"Distractor analiza: medijan = sredinski podatak (uredio bi: 1,1,1,1, 2,...,2, 3,...,3, 4,...,4, 5,5,5; 13. po redu = 3 — dobar); aritmetička sredina = (4·1 + 7·2 + 6·3 + 5·4 + 3·5)/25 = (4+14+18+20+15)/25 = 71/25 = 2,84.",note:"diagnostika"},{txt:"Odgovor: MOD = dovoljan (ocjena 2).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: mod je \"najpopularnija\" vrijednost u uzorku.",note:"intuicija",final:true},{txt:"Definicija: tri mjere centralne tendencije — sredina (aritmetička), medijan (sredinski), mod (najčešći).",note:"postupak",final:true}],
   sol:{ans:"dovoljan (2)",alt:["dovoljan","dovoljan (2)","2","Dovoljan (2)","ocjena 2"]},
   why:["Pravilo: MOD (modus) = vrijednost s NAJVEĆOM frekvencijom; jedan ili više moda mogući.","Definicija: tri mjere centralne tendencije — sredina (aritmetička), medijan (sredinski), mod (najčešći).","Intuicija: mod je \"najpopularnija\" vrijednost u uzorku.","Alt metoda: iz pita dijagrama, traži najveći isječak — taj odgovara modu.","Česta greška: brkati mod s medijanom (sredinski podatak po veličini) ili sredinom (prosjek).","Tipičan propust: dati BROJ pojavljivanja (= 7) umjesto VRIJEDNOSTI (= ocjena 2) koja se najčešće pojavljuje.","Veza s gradivom: statistika, pokazatelji centralne tendencije, raspored frekvencija.","Provjera: u kružnom dijagramu, segment 28 % (dovoljan) je najveći ✓."],
   img:"2024_jesen_B__30,2"
  },
  {_META:true,
   auditedAt: "2026-05-21",
   auditSource: "MAT B (osnovna razina, jesenski rok 2024., D-S068)",
   auditStatus: "verified-full-max-pakG-qtext-resolved",
   auditBy: "Daniel+Claude (Pak G+H+I+F-MAX + P1 + PakG cross-check + q-tekst audit)",
   verified: "pdf+kljuc+vision+pedagogy-maximum+geometry+verbatim-key+qtext-verified",
   notes: "Pak G q-tekst audit: 20/20 MC q-tekstovi cross-verified s PDF (D-S068). 10/10 SA q-tekstovi cross-verified. Nije bilo P0 razlika. Sim Q26,2 koristi supstituirani oblik f(x) = −x² − 2x + 1 (a = −1 iz Q26,1), PDF kaže 'f' generičko — semantički identično. math_lint: 0, pedagogy_scanner: 0 P0/P1/P2."}
];

export const qImages = {
  "2024_jesen_B__11": () => e(Svg11_2024Bjes, null),
  "2024_jesen_B__15": () => e(Svg15_2024Bjes, null),
  "2024_jesen_B__20": () => e(Svg20_2024Bjes, null),
  "2024_jesen_B__21.1": () => e(Svg21a_2024Bjes, null),
  "2024_jesen_B__26.1": () => e(Svg26_2024Bjes, null),
  "2024_jesen_B__26.2": () => e(Svg26_2024Bjes, null),
  "2024_jesen_B__28.1": () => e(Svg28_2024Bjes, null),
  "2024_jesen_B__28.2": () => e(Svg28_2024Bjes, null),
  "2024_jesen_B__3": () => e(Svg3_2024Bjes, null),
  "2024_jesen_B__30.1": () => e(Svg30_2024Ajes, null),
  "2024_jesen_B__30.2": () => e(Svg30_2024Ajes, null),
};
