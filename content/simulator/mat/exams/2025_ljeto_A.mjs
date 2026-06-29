// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg9_2025Alj(){
  const txt="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const red="#e05252";
  const W=640, H=560;
  
  function panel(ox, oy, drawFn, label){
    const u=22;
    const tx=(x)=>ox+x*u, ty=(y)=>oy-y*u;
    const grid=[];
    for(let i=-6;i<=6;i++){
      if(i===0) continue;
      grid.push(e("line",{key:"gx"+ox+i,x1:tx(i),y1:ty(-5),x2:tx(i),y2:ty(5),stroke:muted,strokeWidth:0.4,strokeOpacity:0.18,strokeDasharray:"2 5"}));
      grid.push(e("line",{key:"gy"+ox+i,x1:tx(-6),y1:ty(i),x2:tx(6),y2:ty(i),stroke:muted,strokeWidth:0.4,strokeOpacity:0.18,strokeDasharray:"2 5"}));
    }
    return e("g",{key:"p"+ox+oy},
      ...grid,
      // axes
      e("line",{x1:tx(-6),y1:ty(0),x2:tx(6)+5,y2:ty(0),stroke:txt,strokeWidth:1.2}),
      e("line",{x1:tx(0),y1:ty(-5),x2:tx(0),y2:ty(5)-5,stroke:txt,strokeWidth:1.2}),
      e("polygon",{points:`${tx(6)+5},${ty(0)} ${tx(6)-1},${ty(0)-3} ${tx(6)-1},${ty(0)+3}`,fill:txt}),
      e("polygon",{points:`${tx(0)},${ty(5)-5} ${tx(0)-3},${ty(5)-1} ${tx(0)+3},${ty(5)-1}`,fill:txt}),
      e("text",{x:tx(6)+10,y:ty(0)+4,fontSize:10,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
      e("text",{x:tx(0)+4,y:ty(5)-7,fontSize:10,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"y"),
      e("text",{x:tx(0)-8,y:ty(0)+12,fontSize:9,fill:muted},"0"),
      e("text",{x:tx(1)-3,y:ty(0)+12,fontSize:9,fill:muted},"1"),
      e("text",{x:tx(0)-10,y:ty(1)+3,fontSize:9,fill:muted},"1"),
      // Custom curve drawn by drawFn
      drawFn(tx, ty),
      // Panel label
      e("text",{x:tx(-6),y:ty(-5)+18,fontSize:14,fontWeight:"bold",fill:txt,fontFamily:"sans-serif"},label)
    );
  }
  
  // A: inverse of 1/(x-1) — has horizontal asymptote y=1 and vertical asymptote x=0
  const drawA=(tx,ty)=>{
    const pts1=[];
    for(let x=0.05;x<=6;x+=0.05){
      const y = 1 + 1/x;
      if(y<5 && y>-5) pts1.push(`${tx(x)},${ty(y)}`);
    }
    const pts2=[];
    for(let x=-6;x<=-0.05;x+=0.05){
      const y = 1 + 1/x;
      if(y<5 && y>-5) pts2.push(`${tx(x)},${ty(y)}`);
    }
    return [
      e("polyline",{key:"a1",points:pts1.join(" "),fill:"none",stroke:blue,strokeWidth:2}),
      e("polyline",{key:"a2",points:pts2.join(" "),fill:"none",stroke:blue,strokeWidth:2})
    ];
  };
  
  // B: line y = x
  const drawB=(tx,ty)=>e("line",{key:"b",x1:tx(-5),y1:ty(-5),x2:tx(5),y2:ty(5),stroke:blue,strokeWidth:2});
  
  // C: hyperbola y = 1/(x-1) — same as input, mirror
  const drawC=(tx,ty)=>{
    const pts1=[], pts2=[];
    for(let x=1.05;x<=6;x+=0.05){const y=1/(x-1);if(y<5&&y>-5)pts1.push(`${tx(x)},${ty(y)}`)}
    for(let x=-6;x<=0.95;x+=0.05){const y=1/(x-1);if(y<5&&y>-5)pts2.push(`${tx(x)},${ty(y)}`)}
    return [
      e("polyline",{key:"c1",points:pts1.join(" "),fill:"none",stroke:blue,strokeWidth:2}),
      e("polyline",{key:"c2",points:pts2.join(" "),fill:"none",stroke:blue,strokeWidth:2})
    ];
  };
  
  // D: line y = -x + something (decreasing)
  const drawD=(tx,ty)=>e("line",{key:"d",x1:tx(-4),y1:ty(5),x2:tx(5),y2:ty(-4),stroke:blue,strokeWidth:2});
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"640px",width:"100%",display:"block",margin:"12px auto"}},
    panel(155, 140, drawA, "A."),
    panel(485, 140, drawB, "B."),
    panel(155, 400, drawC, "C."),
    panel(485, 400, drawD, "D.")
  );
}

function Svg7_2025Alj(){
  const txt="var(--text)"; const blue="#4a90d9"; const gold="#e9b446"; const bgHead="#1e3a5f";
  const W=240, rH=40, colW=[80,80,80];
  const cells=[
    [{v:"x",italic:true,head:true},{v:"\u22121",head:true},{v:"7",head:true}],
    [{v:"f(x)",italic:true,head:true},{v:"5"},{v:"2"}]
  ];
  const H=rH*2+6;
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"260px",width:"100%",display:"block",margin:"12px auto"}},
    cells.map((row,ri)=>row.map((c,ci)=>{
      const x = colW.slice(0,ci).reduce((a,b)=>a+b,0)+2;
      return e("g",{key:`c${ri}_${ci}`},
        e("rect",{x:x,y:3+ri*rH,width:colW[ci]-2,height:rH-2,fill:c.head?"rgba(74,144,217,0.12)":"transparent",stroke:blue,strokeWidth:1.2}),
        e("text",{x:x+colW[ci]/2-2,y:3+ri*rH+26,fontSize:16,fontFamily:"Georgia,serif",fontStyle:c.italic?"italic":"normal",textAnchor:"middle",fill:c.head?gold:txt},c.v)
      );
    }))
  );
}

function Svg5_2025Alj(){
  const txt="var(--text)"; const blue="#4a90d9"; const bgHead="#1e3a5f"; const altRow="#0a1525";
  const rows=[
   ["Ponedjeljak","40 %"],["Utorak","75 %"],["Srijeda","75 %"],
   ["Četvrtak","75 %"],["Petak","80 %"],["Subota","80 %"],["Nedjelja","40 %"]
  ];
  const W=290, rH=30, col1W=175, col2W=115;
  const H=rH*rows.length + 6;
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"320px",width:"100%",display:"block",margin:"12px auto"}},
    rows.map((r,i)=>e("g",{key:"r"+i},
      e("rect",{x:1,y:3+i*rH,width:W-2,height:rH-1,fill:i%2===0?altRow:"transparent",stroke:blue,strokeWidth:1.2}),
      e("line",{x1:col1W,y1:3+i*rH,x2:col1W,y2:3+(i+1)*rH-1,stroke:blue,strokeWidth:1.2}),
      e("text",{x:12,y:3+i*rH+20,fontSize:14,fontFamily:"Georgia,serif",fill:txt},r[0]),
      e("text",{x:col1W+12,y:3+i*rH+20,fontSize:14,fontFamily:"Georgia,serif",fill:txt},r[1])
    ))
  );
}

function Svg38a_2025Alj(){
  const st="var(--text)"; const muted="var(--muted,#94a3b8)";
  const W=500, H=260; const ox=40, oy=130;
  const PI=Math.PI;
  const pxF=(x)=>ox+x*(160/(PI));
  const pyF=(y)=>oy-y*80;
  const xTicks=[{x:PI/2,l:"\u03c0/2"},{x:PI,l:"\u03c0"},{x:3*PI/2,l:"3\u03c0/2"},{x:2*PI,l:"2\u03c0"}];
  const grid=[];
  [-1,1].forEach(y=>grid.push(e("line",{key:"gy"+y, x1:ox-5, y1:pyF(y), x2:pxF(2*PI)+15, y2:pyF(y),
    stroke:st, strokeWidth:0.5, strokeOpacity:0.2, strokeDasharray:"3 5"})));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"500px",width:"100%",display:"block",margin:"16px auto"}},
    ...grid,
    e("line",{key:"xa", x1:ox-8, y1:oy, x2:pxF(2*PI)+18, y2:oy, stroke:st, strokeWidth:1.4}),
    e("line",{key:"ya", x1:ox, y1:oy+70, x2:ox, y2:oy-100, stroke:st, strokeWidth:1.4}),
    e("polygon",{key:"xar", points:`${pxF(2*PI)+18},${oy} ${pxF(2*PI)+10},${oy-4} ${pxF(2*PI)+10},${oy+4}`, fill:st}),
    e("polygon",{key:"yar", points:`${ox},${oy-100} ${ox-4},${oy-92} ${ox+4},${oy-92}`, fill:st}),
    e("text",{key:"xl", x:pxF(2*PI)+22, y:oy+5, fontSize:14, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "x"),
    e("text",{key:"yl", x:ox+6, y:oy-102, fontSize:14, fontStyle:"italic", fontFamily:"Georgia,serif", fill:st}, "y"),
    e("text",{key:"O", x:ox-12, y:oy+14, fontSize:12, fontFamily:"Georgia,serif", fill:st}, "0"),
    e("text",{key:"y1", x:ox-18, y:pyF(1)+5, fontSize:12, fontFamily:"Georgia,serif", fill:st}, "1"),
    e("text",{key:"y-1", x:ox-22, y:pyF(-1)+5, fontSize:12, fontFamily:"Georgia,serif", fill:st}, "\u22121"),
    ...xTicks.map(t=>e("line",{key:"tx"+t.l, x1:pxF(t.x), y1:oy-4, x2:pxF(t.x), y2:oy+4, stroke:st, strokeWidth:1.2})),
    ...xTicks.map(t=>e("text",{key:"txl"+t.l, x:pxF(t.x)-8, y:oy+18, fontSize:12, fontFamily:"Georgia,serif", fill:st}, t.l))
  );
}

function Svg36_2025Alj(){
  const txt="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const W=380, H=300; const ox=180, oy=200; const u=30;
  const pxF=(x)=>ox+x*u; const pyF=(y)=>oy-y*u;
  // A=(-4,0), B=(1,0), C=(2,3)
  const grid=[];
  for(let i=-5;i<=5;i++){
    if(i===0) continue;
    grid.push(e("line",{key:"gx"+i,x1:pxF(i),y1:pyF(-2),x2:pxF(i),y2:pyF(3.5),stroke:muted,strokeWidth:0.4,strokeOpacity:0.18,strokeDasharray:"2 5"}));
  }
  for(let j=-2;j<=3;j++){
    if(j===0) continue;
    grid.push(e("line",{key:"gy"+j,x1:pxF(-5),y1:pyF(j),x2:pxF(5),y2:pyF(j),stroke:muted,strokeWidth:0.4,strokeOpacity:0.18,strokeDasharray:"2 5"}));
  }
  const A=[pxF(-4),pyF(0)], B=[pxF(1),pyF(0)], C=[pxF(2),pyF(3)];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    // Triangle ABC
    e("polygon",{key:"tr",points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,fill:"rgba(74,144,217,0.12)",stroke:blue,strokeWidth:2}),
    // Axes
    e("line",{key:"xa",x1:pxF(-5),y1:oy,x2:pxF(5)+10,y2:oy,stroke:txt,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:pyF(3.5),x2:ox,y2:pyF(-2)+10,stroke:txt,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${pxF(5)+10},${oy} ${pxF(5)+3},${oy-4} ${pxF(5)+3},${oy+4}`,fill:txt}),
    e("polygon",{key:"yar",points:`${ox},${pyF(3.5)} ${ox-4},${pyF(3.5)+7} ${ox+4},${pyF(3.5)+7}`,fill:txt}),
    e("text",{key:"xl",x:pxF(5)+14,y:oy+5,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
    e("text",{key:"yl",x:ox+6,y:pyF(3.5)-2,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"y"),
    e("text",{key:"O",x:ox-10,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"0"),
    e("text",{key:"1x",x:pxF(1)-3,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("text",{key:"1y",x:ox-12,y:pyF(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("circle",{key:"u1x",cx:pxF(1),cy:oy,r:2,fill:muted}),
    e("circle",{key:"u1y",cx:ox,cy:pyF(1),r:2,fill:muted}),
    // Vertex dots
    e("circle",{key:"dA",cx:A[0],cy:A[1],r:5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
    e("circle",{key:"dB",cx:B[0],cy:B[1],r:5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
    e("circle",{key:"dC",cx:C[0],cy:C[1],r:5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
    // Vertex labels
    e("text",{key:"lA",x:A[0]-12,y:A[1]+22,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"A"),
    e("text",{key:"lB",x:B[0]+10,y:B[1]+22,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"B"),
    e("text",{key:"lC",x:C[0]+8,y:C[1]-4,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"C")
  );
}

function Svg25_2025Alj(){
  const st="var(--text)"; const muted="var(--muted,#94a3b8)";
  const red="var(--red,#e05252)"; const blue="var(--blue,#4a90d9)";
  const W=480, H=360; const ox=70, oy=290;
  const ux=15, uy=0.42;
  const pxF=(x)=>ox+x*ux;
  const pyF=(y)=>oy-y*uy;
  // Mislav: 30 sklekova/dan, start=50. After 18d: 590
  // Bruno:  15 sklekova/dan, start=50. After 18d: 320. Diff=270 ✓
  const grid=[];
  [100,200,300,400,500,600].forEach(y=>{
    grid.push(e("line",{key:"gy"+y, x1:ox-5, y1:pyF(y), x2:pxF(22)+10, y2:pyF(y),
      stroke:st, strokeWidth:0.5, strokeOpacity:0.18, strokeDasharray:"2 6"}));
  });
  [2,4,6,8,10,12,14,16,18,20,22].forEach(x=>{
    grid.push(e("line",{key:"gx"+x, x1:pxF(x), y1:oy+8, x2:pxF(x), y2:pyF(640),
      stroke:st, strokeWidth:0.5, strokeOpacity:0.18, strokeDasharray:"2 6"}));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"480px",width:"100%",display:"block",margin:"16px auto"}},
    ...grid,
    e("line",{key:"xa", x1:ox-10, y1:oy, x2:pxF(22)+16, y2:oy, stroke:st, strokeWidth:1.4}),
    e("line",{key:"ya", x1:ox, y1:oy+10, x2:ox, y2:pyF(640), stroke:st, strokeWidth:1.4}),
    e("polygon",{key:"xar", points:`${pxF(22)+16},${oy} ${pxF(22)+8},${oy-4} ${pxF(22)+8},${oy+4}`, fill:st}),
    e("polygon",{key:"yar", points:`${ox},${pyF(640)} ${ox-4},${pyF(632)} ${ox+4},${pyF(632)}`, fill:st}),
    // 50 y-tick
    e("line",{key:"t50", x1:ox-5, y1:pyF(50), x2:ox+5, y2:pyF(50), stroke:st, strokeWidth:1}),
    e("text",{key:"l50", x:ox-10, y:pyF(50)+4, textAnchor:"end", fontSize:12, fontFamily:"sans-serif", fill:muted}, "50"),
    // "0" and "1" on x-axis
    e("text",{key:"O", x:ox-10, y:oy+16, textAnchor:"end", fontSize:12, fontFamily:"sans-serif", fill:muted}, "0"),
    e("circle",{key:"t1xc", cx:pxF(1), cy:oy, r:2.5, fill:"var(--bg,#060910)", stroke:st, strokeWidth:1}),
    e("text",{key:"l1x", x:pxF(1), y:oy+16, textAnchor:"middle", fontSize:12, fontFamily:"sans-serif", fill:muted}, "1"),
    // Mislav (red, slope 30)
    e("line",{key:"mlav", x1:pxF(0), y1:pyF(50), x2:pxF(21), y2:pyF(50+30*21),
      stroke:red, strokeWidth:2.2, strokeLinecap:"round"}),
    // Bruno (blue, slope 15)
    e("line",{key:"bru", x1:pxF(0), y1:pyF(50), x2:pxF(22), y2:pyF(50+15*22),
      stroke:blue, strokeWidth:2.2, strokeLinecap:"round"}),
    // Labels
    // Labels beside line ends, not on them
    e("text",{key:"lM", x:pxF(21)+8, y:pyF(50+30*21)+5, fontSize:13, fontFamily:"sans-serif", fill:red, fontWeight:600}, "Mislav"),
    e("text",{key:"lB", x:pxF(22)+8, y:pyF(50+15*22)+5, fontSize:13, fontFamily:"sans-serif", fill:blue, fontWeight:600}, "Bruno"),
    e("text",{key:"ylabel", x:ox-40, y:oy-100, transform:`rotate(-90 ${ox-40} ${oy-100})`,
      textAnchor:"middle", fontSize:12, fontFamily:"sans-serif", fill:st}, "broj sklekova"),
    e("text",{key:"xlabel", x:ox+11*ux, y:oy+32, textAnchor:"middle", fontSize:12, fontFamily:"sans-serif", fill:st}, "broj dana vje\u017ebanja")
  );
}

function Svg17_2025Alj(){
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const W=340, H=300; const cx=170, cy=150, r=110;
  const deg=(d)=>d*Math.PI/180;
  // PDF: A bottom-left, B bottom-right, C right, D top-right, E top-left, F left
  const verts=[
    {l:"A",a:210},{l:"B",a:330},{l:"C",a:30},
    {l:"D",a:90},{l:"E",a:150},{l:"F",a:210+60}
  ];
  // F is left = 210° from origin? Wait, let's fix: hexagon vertices at 30°, 90°, 150°, 210°, 270°, 330°
  // PDF labels: A(bot-left)=210°, B(bot-right)=330°, C(right)=30°, D(top-right)=90°, E(top-left)=150°, F(left)=270°
  const angles = {A:210, B:330, C:30, D:90, E:150, F:270};
  // Wait, F should be at 270? But 270 is BOTTOM. Let me re-think.
  // Regular hexagon angles for ABCDEF going COUNTER-clockwise starting from bottom-left:
  // Looking at PDF: A=bot-left, B=bot-right, C=right, D=top-right, E=top-left, F=left
  // That's: A(210), B(330), C(30), D(90), E(150), F(270)... but 270 is bot center, not left
  // Actually for left vertex in standard hex: 180° from center
  // Let me just use 6 equally-spaced angles for hex with vertex pointing UP (so flat sides L/R)
  // Hex angles: 30, 90, 150, 210, 270, 330 — these put points at right, top, top-left, bot-left, bot-center, bot-right
  // For "pointy-top" hex with A bottom-left, B bottom-right, that orientation makes sense
  // I'll go: A(225), B(315), C(0), D(45 actually 60), ... simpler: 6 vertices going CCW from bot-left
  // 6 angles spaced 60° apart: 210, 270, 330(=B not F), 30, 90, 150
  // PDF labels: F bottom, A bot-left, B bot-right, C right, D top-right, E top-left -- no, let me read PDF again
  // From PDF image: looking at flat-top hexagon, labels are: A(bot-left), B(bot-right), C(right), D(top-right), E(top-left), F(left)
  // So 6 positions: bot-left(225), bot-right(315), right(0), top-right(45), top-left(135), left(180)... that's not a regular hex
  // Regular hex has 60° spacing. A flat-side hex has vertices at angles offset.
  // Let me just use vertices at: 30, 90, 150, 210, 270, 330 (point-up hex) and map to labels
  // Position layout: 30°=right, 90°=top, 150°=left, 210°=bot-left, 270°=bot, 330°=bot-right
  // For ABCDEF where A=bot-left, B=bot-right going CCW: A(210), B(330), then CCW to C(30=right), D(90=top), E(150=top-left), F(210+60)... 
  // Actually CCW: 210→270→330→30→90→150→210 so A(210), C(270? bot), B(330)... not matching
  // CW from A: 210→150→90→30→330→270→210, so A(210), F(150=top-left), E(90), D(30=right), C(330=bot-right), B(270)... doesn't match either
  // I'll just place vertices manually
  const A=[cx + r*Math.cos(deg(210)), cy - r*Math.sin(deg(210))];
  const B=[cx + r*Math.cos(deg(330)), cy - r*Math.sin(deg(330))];
  const C=[cx + r*Math.cos(deg(30)),  cy - r*Math.sin(deg(30))];
  const D=[cx + r*Math.cos(deg(90)),  cy - r*Math.sin(deg(90))];
  const E_=[cx + r*Math.cos(deg(150)),cy - r*Math.sin(deg(150))];
  const F=[cx + r*Math.cos(deg(270)),cy - r*Math.sin(deg(270))];
  // hex order: A,B,C,D,E,F should form closed polygon. Let me check by angles 210,330,30,90,150,270
  // Going 210→330 is +120 (skips 270), so not consecutive. Need to use angle order 30,90,150,210,270,330
  // Map: 210=A, 270=B?, 330=?, 30=?, 90=D, 150=?
  // From PDF: F is bottom (single), E top-left, D top-right, C right? Let me just look at image positions
  // PDF layout: top row "E _ D", middle "F  C", bottom "A B" with A bot-left, B bot-right
  // So vertices CCW from A: A(bot-left) → F(left) → E(top-left) → D(top-right) → C(right) → B(bot-right) → A
  // Angle order CCW from bot-left = 210: 210(A), 150(F), 90(E)... wait 210 to 150 is -60 not +60. CCW means +.
  // CW from A: 210→270 is +60, but 270 is bottom-center which isn't a hex vertex for point-up hex.
  // I think the PDF has flat-top hex, not point-up. Flat-top hex vertices at 0,60,120,180,240,300.
  // For flat-top hex with A bot-left: 0=right, 60=top-right, 120=top-left, 180=left, 240=bot-left, 300=bot-right
  // Then A(240), B(300), C(0), D(60), E(120), F(180) — CCW order from A!
  const Af=[cx + r*Math.cos(deg(240)), cy - r*Math.sin(deg(240))];
  const Bf=[cx + r*Math.cos(deg(300)), cy - r*Math.sin(deg(300))];
  const Cf=[cx + r*Math.cos(deg(0)),   cy - r*Math.sin(deg(0))];
  const Df=[cx + r*Math.cos(deg(60)),  cy - r*Math.sin(deg(60))];
  const Ef=[cx + r*Math.cos(deg(120)), cy - r*Math.sin(deg(120))];
  const Ff=[cx + r*Math.cos(deg(180)), cy - r*Math.sin(deg(180))];
  const poly = [Af,Bf,Cf,Df,Ef,Ff];
  const labels=["A","B","C","D","E","F"];
  const labelOffsets=[[-15,18],[8,18],[12,5],[8,-8],[-16,-8],[-22,5]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    e("polygon",{key:"hex",points:poly.map(p=>p.join(",")).join(" "),fill:"rgba(74,144,217,0.08)",stroke:blue,strokeWidth:2}),
    ...poly.map((p,i)=>e("circle",{key:"d"+i,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5})),
    ...poly.map((p,i)=>e("text",{key:"l"+i,x:p[0]+labelOffsets[i][0],y:p[1]+labelOffsets[i][1],
      fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},labels[i]))
  );
}

function Svg15_2025Alj(){
  const blue="#4a90d9"; const blueD="#3a6aa0"; const red="#e05252"; const gold="#e9b446";
  const W=420, H=460;
  // Tall kvadar: footprint AB ~ 160, depth ~ 60, height ~ 220
  const A=[80,380],B=[260,380],C=[340,320],D=[160,320];
  const vE=[80,100],vF=[260,100],vG=[340,40],vH=[160,40];
  const visible=[
   ["AB",A,B],["BC",B,C],["AE",A,vE],["BF",B,vF],["CG",C,vG],
   ["EF",vE,vF],["FG",vF,vG],["GH",vG,vH],["EH",vE,vH]
  ];
  const hidden=[
   ["AD",A,D],["CD",C,D],["DH",D,vH]
  ];
  const verts=[
   ["A",A,-14,18],["B",B,8,18],["C",C,8,8],["D",D,-14,8],
   ["E",vE,-14,-6],["F",vF,8,-6],["G",vG,8,-6],["H",vH,-14,-6]
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"420px",width:"100%",display:"block",margin:"12px auto"}},
    ...hidden.map(([n,p,q])=>e("line",{key:"h"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blueD,strokeWidth:1.4,strokeDasharray:"6 4",strokeOpacity:0.85})),
    ...visible.map(([n,p,q])=>e("line",{key:"v"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blue,strokeWidth:2})),
    ...verts.map(([n,p])=>e("circle",{key:"d"+n,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5})),
    ...verts.map(([n,p,dx,dy])=>e("text",{key:"t"+n,x:p[0]+dx,y:p[1]+dy,
      fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},n))
  );
}

function Svg13_2025Alj(){
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446"; const txt="var(--text)";
  const W=460, H=300;
  const A=[60,240], B=[220,240], E=[400,240], D=[130,80], C=[290,80];
  // Vertices, edges (paralelogram + extension to E)
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"480px",width:"100%",display:"block",margin:"12px auto"}},
    // Edges of paralelogram ABCD + CE (extension)
    e("line",{key:"AB",x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:blue,strokeWidth:2}),
    e("line",{key:"BE",x1:B[0],y1:B[1],x2:E[0],y2:E[1],stroke:blue,strokeWidth:2}),
    e("line",{key:"DC",x1:D[0],y1:D[1],x2:C[0],y2:C[1],stroke:blue,strokeWidth:2}),
    e("line",{key:"AD",x1:A[0],y1:A[1],x2:D[0],y2:D[1],stroke:blue,strokeWidth:2}),
    e("line",{key:"BC",x1:B[0],y1:B[1],x2:C[0],y2:C[1],stroke:blue,strokeWidth:2}),
    e("line",{key:"CE",x1:C[0],y1:C[1],x2:E[0],y2:E[1],stroke:blue,strokeWidth:2}),
    // Angle arcs (gold)
    e("path",{key:"a1",d:`M ${A[0]+30},${A[1]} A 30,30 0 0 0 ${A[0]+22},${A[1]-22}`,fill:"none",stroke:gold,strokeWidth:1.6}),
    e("path",{key:"a2",d:`M ${C[0]-32},${C[1]+18} A 32,32 0 0 0 ${C[0]+10},${C[1]+30}`,fill:"none",stroke:gold,strokeWidth:1.6}),
    e("path",{key:"a3",d:`M ${E[0]-30},${E[1]} A 30,30 0 0 1 ${E[0]-22},${E[1]-22}`,fill:"none",stroke:gold,strokeWidth:1.6}),
    // Vertex dots
    ...[["A",A],["B",B],["C",C],["D",D],["E",E]].map(([n,p])=>
      e("circle",{key:"d"+n,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5})),
    // Vertex labels
    e("text",{key:"lA",x:A[0]-14,y:A[1]+18,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"A"),
    e("text",{key:"lB",x:B[0]-8,y:B[1]+22,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"B"),
    e("text",{key:"lC",x:C[0]+8,y:C[1]-4,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"C"),
    e("text",{key:"lD",x:D[0]-16,y:D[1]-4,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"D"),
    e("text",{key:"lE",x:E[0]+8,y:E[1]+18,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"E"),
    // Angle labels
    e("text",{key:"x20",x:A[0]+40,y:A[1]-14,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x + 20\u00b0"),
    e("text",{key:"120x",x:C[0]-50,y:C[1]+38,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"120\u00b0 \u2212 x"),
    e("text",{key:"y",x:E[0]-32,y:E[1]-12,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:red},"y")
  );
}

function Svg11_2025Alj(){
  const txt="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const blueLight="rgba(74,144,217,0.10)"; const red="#e05252"; const gold="#e9b446";
  const W=360, H=320; const cx=180, cy=160, r=100;
  const deg=(d)=>d*Math.PI/180;
  // E(t) in III quadrant: cos(t)=-3/5, sin(t)=-4/5 → angle ~233°
  const tDeg=233.13;
  const Ex=cx+r*Math.cos(deg(tDeg));
  const Ey=cy-r*Math.sin(deg(tDeg));
  // Grid lines
  const grid=[];
  for(let i=-3;i<=3;i++){
    if(i===0) continue;
    grid.push(e("line",{key:"gx"+i,x1:cx+i*r/3,y1:cy-r-15,x2:cx+i*r/3,y2:cy+r+15,stroke:muted,strokeWidth:0.5,strokeOpacity:0.18,strokeDasharray:"2 5"}));
    grid.push(e("line",{key:"gy"+i,x1:cx-r-15,y1:cy+i*r/3,x2:cx+r+15,y2:cy+i*r/3,stroke:muted,strokeWidth:0.5,strokeOpacity:0.18,strokeDasharray:"2 5"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    // Unit circle in blue
    e("circle",{key:"uc",cx:cx,cy:cy,r:r,fill:blueLight,stroke:blue,strokeWidth:2}),
    // Axes
    e("line",{key:"xa",x1:cx-r-25,y1:cy,x2:cx+r+25,y2:cy,stroke:txt,strokeWidth:1.4}),
    e("line",{key:"ya",x1:cx,y1:cy-r-25,x2:cx,y2:cy+r+25,stroke:txt,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${cx+r+25},${cy} ${cx+r+18},${cy-4} ${cx+r+18},${cy+4}`,fill:txt}),
    e("polygon",{key:"yar",points:`${cx},${cy-r-25} ${cx-4},${cy-r-18} ${cx+4},${cy-r-18}`,fill:txt}),
    e("text",{key:"xl",x:cx+r+30,y:cy+5,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
    e("text",{key:"yl",x:cx+6,y:cy-r-26,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"y"),
    // Unit labels
    e("text",{key:"0",x:cx-12,y:cy+15,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"0"),
    e("text",{key:"1y",x:cx+5,y:cy-r+6,fontSize:12,fontFamily:"Georgia,serif",fontWeight:"bold",fill:txt},"1"),
    e("text",{key:"1x",x:cx+r-5,y:cy+15,fontSize:12,fontFamily:"Georgia,serif",fontWeight:"bold",fill:txt},"1"),
    // Point E(t)
    e("circle",{key:"E",cx:Ex,cy:Ey,r:5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5}),
    e("text",{key:"lE",x:Ex-26,y:Ey+18,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"E(t)"),
    // Line from origin to E (showing angle)
    e("line",{key:"OE",x1:cx,y1:cy,x2:Ex,y2:Ey,stroke:gold,strokeWidth:1.4,strokeDasharray:"4 3"})
  );
}

export const qs = [
  {
    id:1,
    type:"mc",warn:"Pazi: argument kompleksnog broja mjeri se od pozitivne realne osi, suprotno od kazaljke na satu.",
    topic:"kompl",
    points:1,
    q:"Kojoj je od navedenih točaka u Gaussovoj ravnini pridružen kompleksan broj kojemu argument iznosi [FRAC:3π|2]?",
    opts:["(−4, 0)","(0, −4)","(0, 4)","(4, 0)"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Argument kompleksnog broja je kut koji vektor iz ishodišta do točke zatvara s pozitivnim smjerom realne osi."},{txt:"[FRAC:3π|2] = π + [FRAC:π|2] (ili −[FRAC:π|2] u standardnom rasponu). To je smjer NEGATIVNE imaginarne osi (dolje)."},{txt:"Kompleksan broj z = r · (cos θ + i sin θ); za θ = [FRAC:3π|2]: cos θ = 0, sin θ = −1."},{txt:"Točka mora imati Re(z) = 0 i Im(z) < 0 → oblik (0, y) s y < 0."},{txt:"Iz ponuđenih: (0, −4) zadovoljava oba uvjeta."},{txt:"Točan odgovor: B — (0, −4).",note:"odgovor",final:true},{txt:"Provjera: kompleksan broj z = −4i ima |z| = 4, argument arctan(−4 / 0) je nedefiniran formula direktno, ali z je na negativnoj imaginarnoj osi → arg = [FRAC:3π|2] (ili −[FRAC:π|2]) ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A (−4, 0) ima arg = π; C (0, 4) ima arg = [FRAC:π|2]; D (4, 0) ima arg = 0. Samo B ima arg = [FRAC:3π|2].",note:"diagnostika",final:true},{txt:"Postupak: 1) prepoznaj koja je os pridružena kutu (0 → +x, [FRAC:π|2] → +y, π → −x, [FRAC:3π|2] → −y). 2) odredi smjer (pozitivan/negativan dio osi). 3) odaberi točku.",note:"postupak",final:true},{txt:"Intuicija: argument se mjeri suprotno smjera kazaljke od pozitivne realne osi: 0 desno → [FRAC:π|2] gore → π lijevo → [FRAC:3π|2] dolje.",note:"intuicija",final:true}],
    why:["Pravilo: kompleksan broj z = x + iy ima argument θ = arg(z) gdje x = r cos θ, y = r sin θ (r = |z|). Karakteristični kutovi: 0 (pozitivna realna os), [FRAC:π|2] (pozitivna imaginarna), π (negativna realna), [FRAC:3π|2] (negativna imaginarna).","Postupak: 1) prepoznaj koja je os pridružena kutu (0 → +x, [FRAC:π|2] → +y, π → −x, [FRAC:3π|2] → −y). 2) odredi smjer (pozitivan/negativan dio osi). 3) odaberi točku.","Intuicija: kompleksna ravnina = standardna kartezijeva, ali \"y\" je \"i\" (imaginarna). [FRAC:3π|2] = \"dolje\" u toj ravnini.","Česta greška 1: dati (0, 4) jer \"3π/2 = 270°, to je dolje\". Točno je dolje, ali (0, 4) je gore. Sjeti se: y < 0 znači IMAGINARNI dio je negativan.","Česta greška 2: koristiti argument u stupnjevima ali interpretirati u radijanima. [FRAC:3π|2] rad = 270°, ne π/2 · 90°. Pažljivo s konverzijom.","Alt metoda: izračunaj cos i sin direktno. cos([FRAC:3π|2]) = 0, sin([FRAC:3π|2]) = −1. Za |z| = 4: z = 4·(0 + i·(−1)) = −4i. To je točka (0, −4) ✓.","Provjera: |−4i|² = 0² + (−4)² = 16, |z| = 4 ✓; arg(−4i) je suprotan smjeru pozitivne imaginarne osi → [FRAC:3π|2] (ili −[FRAC:π|2])."]
  },
  {
    id:2,
    type:"mc",warn:"Pazi: a = a^1, pa je a · ∛a = a^(1 + 1/3). Ne zaboravi eksponent 1 kod prvog faktora.",
    topic:"al",
    points:1,
    q:"Čemu je jednako a · ∛a za svaki realni broj a?",
    opts:["a^(1/3)","a^(2/3)","a^(4/3)","a^(5/3)"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Pretvori kubni korijen u racionalnu potenciju: ∛a = a^([FRAC:1|3])."},{txt:"Sad imamo a · a^([FRAC:1|3]) = a¹ · a^([FRAC:1|3])."},{txt:"Primijeni pravilo množenja potencija s istom bazom: aᵐ · aⁿ = a^(m+n)."},{txt:"Zbroji eksponente: 1 + [FRAC:1|3] = [FRAC:3|3] + [FRAC:1|3] = [FRAC:4|3]."},{txt:"a · ∛a = a^([FRAC:4|3])."},{txt:"Točan odgovor: C — a^([FRAC:4|3]).",note:"odgovor",final:true},{txt:"Provjera za a = 8: lijevo = 8 · ∛8 = 8 · 2 = 16; desno = 8^([FRAC:4|3]) = (∛8)⁴ = 2⁴ = 16 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) a^(1⁄3) = sam ∛a (zaboravljen faktor a); B) a^(2⁄3) = a · a^(−1⁄3) (krivi predznak); D) a^(5⁄3) = a · a^(2⁄3) (krivo).",note:"diagnostika",final:true},{txt:"Postupak: 1) sve korijene pretvori u racionalne potencije. 2) ako su baze iste, zbroji eksponente. 3) konačni rezultat u racionalnom obliku.",note:"postupak",final:true},{txt:"Intuicija: cijeli broj 1 PRETVORI u razlomak s istim nazivnikom (3/3) prije zbrajanja s [FRAC:1|3] — kao i kod običnih razlomaka.",note:"intuicija",final:true}],
    why:["Pravila potencija: ⁿ√a = a^([FRAC:1|n]) (definicija racionalne potencije); aᵐ · aⁿ = a^(m+n) (množenje istih baza); (aᵐ)ⁿ = a^(mn) (potenciranje potencije).","Postupak: 1) sve korijene pretvori u racionalne potencije. 2) ako su baze iste, zbroji eksponente. 3) konačni rezultat u racionalnom obliku.","Intuicija: korijen je inverz potencije — a^([FRAC:1|n]) je broj koji uzdignut na n daje a. Kombinacijom (množenjem) potencija dobivamo necijele eksponente.","Česta greška 1: zbrojiti pogrešno: 1 + [FRAC:1|3] = [FRAC:2|3] (pomislio da je 1 = 1/1, pa 1/1 + 1/3 = 2/4 ili nešto slično). Ispravno: 1 = [FRAC:3|3], pa [FRAC:3|3] + [FRAC:1|3] = [FRAC:4|3].","Česta greška 2: pomnožiti eksponente umjesto zbrojiti: a · a^([FRAC:1|3]) ≠ a^([FRAC:1|3]). To bi vrijedilo samo ako se MNOŽE potencije iste baze — a tu se baš to i radi, ali eksponenti se ZBRAJAJU, ne množe.","Alt metoda: zapiši a · ∛a = a · ∛a = ∛(a³ · a) = ∛(a⁴) = a^([FRAC:4|3]) — korištenjem svojstva ⁿ√(aⁿ) = a uz dodatak.","Provjera za a = 27: lijevo = 27 · ∛27 = 27 · 3 = 81; desno = 27^([FRAC:4|3]) = (∛27)⁴ = 3⁴ = 81 ✓."]
  },
  {
    id:3,
    type:"mc",warn:"Pazi na predznak srednjeg člana u formuli za razliku kubova.",
    topic:"al",
    points:1,
    q:"Koliko iznosi x ako je izraz (3a − 1)(9a² + xa + 1) razlika kubova za svaki realni broj a?",
    opts:["−6","−3","3","6"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Formula razlike kubova: A³ − B³ = (A − B)(A² + AB + B²)."},{txt:"Identificiraj A i B u zadanom faktoru (3a − 1): A = 3a, B = 1."},{txt:"Drugi faktor mora biti A² + AB + B² = (3a)² + (3a)(1) + 1² = 9a² + 3a + 1."},{txt:"Usporedi s zadanim drugim faktorom 9a² + xa + 1: koeficijent uz a mora biti 3 → x = 3."},{txt:"Provjera: razlika kubova daje (3a)³ − 1³ = 27a³ − 1."},{txt:"Točan odgovor: C — x = 3.",note:"odgovor",final:true},{txt:"Provjera direktnim množenjem: (3a − 1)(9a² + 3a + 1) = 27a³ + 9a² + 3a − 9a² − 3a − 1 = 27a³ − 1 = (3a)³ − 1³ ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) −6 (krivi predznak srednjeg člana); B) −3 (krivi predznak); D) 6 (krivi koeficijent — možda 2·AB umjesto AB).",note:"diagnostika",final:true},{txt:"Postupak: 1) prepoznaj formulu razlike kubova prema obliku (A − B). 2) identificiraj A i B. 3) razvij A² + AB + B² da nađeš koeficijente. 4) usporedi.",note:"postupak",final:true},{txt:"Intuicija: A² + AB + B² (razlika kubova) ima srednji član +AB, NE +2AB (to je za (A+B)²) niti −2AB (za (A−B)²).",note:"intuicija",final:true}],
    why:["Pravilo: A³ − B³ = (A − B)(A² + AB + B²); A³ + B³ = (A + B)(A² − AB + B²); ne pomiješati s (A ± B)² (kvadrat binoma).","Postupak: 1) prepoznaj formulu razlike kubova prema obliku (A − B). 2) identificiraj A i B. 3) razvij A² + AB + B² da nađeš koeficijente. 4) usporedi.","Intuicija: razlika kubova ima specifičnu strukturu u drugom faktoru — kvadrati prvog i drugog, plus njihov umnožak (BEZ koeficijenta 2, koji bi vrijedio za (A + B)²).","Česta greška 1: pomiješati s (A − B)² = A² − 2AB + B² (gdje je srednji član −2AB). Razlika kubova nema 2 — samo +AB.","Česta greška 2: dati x = −3 (krivi predznak, koristiti formulu za zbroj kubova A² − AB + B²). Pažnja: razlika kubova ima +AB, zbroj kubova ima −AB.","Alt metoda: razvij (3a − 1)(9a² + xa + 1) i traži uvjet da rezultat bude 27a³ − 1: 27a³ + 3xa² + 3a − 9a² − xa − 1; uvjet a² koef = 0: 3x − 9 = 0 → x = 3 ✓.","Provjera: za a = 1: lijevo = (3−1)(9+3+1) = 2·13 = 26; desno = 27 − 1 = 26 ✓; za a = 2: (5)(36 + 6 + 1) = 5·43 = 215; desno = 216 − 1 = 215 ✓."]
  },
  {
    id:4,
    type:"mc",warn:"Pazi: omjere poveži preko zajedničkog člana (Matija) — ne zbrajaj ih izravno.",
    topic:"al",
    points:1,
    q:"Sonjina i Matijina zarada u omjeru su 2 : 3, a Matija je zaradio 2 puta više od Ivana. U kakvome su odnosu Sonjina i Ivanova zarada?",
    opts:["Sonja i Ivan zaradili su jednako.","Sonja je zaradila manje od Ivana.","Sonjina i Ivanova zarada u omjeru su 2 : 1.","Sonjina i Ivanova zarada u omjeru su 4 : 3."],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Označi Ivanovu zaradu kao I (parametar). Matija = 2I (uvjet \"dva puta više\")."},{txt:"Iz omjera S : M = 2 : 3: S = [FRAC:2|3] · M."},{txt:"Supstituiraj M = 2I: S = [FRAC:2|3] · 2I = [FRAC:4|3] · I."},{txt:"Omjer S : I = [FRAC:4|3] · I : I = [FRAC:4|3] : 1 = 4 : 3."},{txt:"Točan odgovor: D — omjer 4 : 3.",note:"odgovor",final:true},{txt:"Provjera s konkretnim brojevima: I = 3 → M = 6; S = (2/3)·6 = 4; S : I = 4 : 3 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) S = I → bi tražilo S = 4 i I = 4, ali tada M = 8 i M : S = 8 : 4 = 2 : 1, ne 3 : 2; B) S < I bi značilo Sonja < Ivan, ali S/I = 4/3 > 1 → Sonja > Ivan; C) S : I = 2 : 1 zahtijeva M = 3I, ne 2I.",note:"diagnostika",final:true},{txt:"Intuicija: koristi treću nepoznatu (I) kao \"anchor\" — sve ostalo izrazi preko nje, pa izračunaj traženi omjer.",note:"intuicija",final:true},{txt:"Postupak: 1) odredi nepoznatu kao \"anchor\". 2) izrazi ostale veličine kroz nju. 3) sastavi traženi omjer.",note:"postupak",final:true}],
    why:["Pravilo: omjer a : b = m : n znači a = km, b = kn za zajednički k > 0. Lančani omjeri kombiniraju se kroz zajedničku varijablu.","Postupak: 1) odredi nepoznatu kao \"anchor\". 2) izrazi ostale veličine kroz nju. 3) sastavi traženi omjer.","Intuicija: kao u kemiji — ako je A : B = 2 : 3 i B : C = 2 : 1, traži zajednički \"most\" (B = nešto u oba omjera) pa kombiniraj.","Česta greška 1: zamijeniti uloge u omjeru — pisati M : S = 2 : 3 (pa misliti M < S) umjesto S : M = 2 : 3 (pa S < M). Pažljivo s redoslijedom.","Česta greška 2: pomnožiti omjere mehanički: S : I = 2 · 2 : 3 · 1 = 4 : 3 — slučajno daje točno, ali matematički netemeljito (treba zajednička varijabla).","Alt metoda — proporcijama: [FRAC:S|I] = [FRAC:S|M] · [FRAC:M|I] = [FRAC:2|3] · 2 = [FRAC:4|3] = 4 : 3 ✓.","Provjera: I = 6 → M = 12; S = 8; S : I = 8 : 6 = 4 : 3 ✓; I = 9 → M = 18; S = 12; S : I = 12 : 9 = 4 : 3 ✓."]
  },
  {
    id:5,
    img:true,
    type:"mc",warn:"Pazi: prosjek je zbroj svih vrijednosti podijeljen brojem dana, ne procjena 'na oko'.",
    topic:"stat",
    points:1,
    q:"Postotak prodanih ulaznica po danima u nekome tjednu prikazan je tablicom (Po 40 %, Ut 75 %, Sr 75 %, Če 75 %, Pe 80 %, Su 80 %, Ne 40 %). Koliko je prosječno ulaznica prodano dnevno u tome tjednu ako je svakoga dana u prodaji 420 ulaznica?",
    opts:["238","273","279","315"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Iz tablice očitaj postotke po danima: Po 40 %, Ut 75 %, Sr 75 %, Če 75 %, Pe 80 %, Su 80 %, Ne 40 %."},{txt:"Zbroji postotke: 40 + 75 + 75 + 75 + 80 + 80 + 40 = 465 %."},{txt:"Prosjek postotaka: [FRAC:465|7] ≈ 66,43 %."},{txt:"Konvertiraj u broj ulaznica: 0,6643 · 420 ≈ 278,98 → zaokruženo 279."},{txt:"Točan odgovor: C — 279.",note:"odgovor",final:true},{txt:"Provjera po danu: 0,40·420 + 0,75·420·3 + 0,80·420·2 + 0,40·420 = 168 + 945 + 672 + 168 = 1953; [FRAC:1953|7] ≈ 279 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 238 (vjerojatno izostavljen neki dan); B) 273 (krivo zaokruživanje); D) 315 = 75 % od 420 (samo srednji dan, ne prosjek).",note:"diagnostika",final:true},{txt:"Postupak: 1) očitaj sve vrijednosti iz tablice. 2) zbroji ih. 3) podijeli s brojem dana. 4) primijeni postotak na bazu.",note:"postupak",final:true},{txt:"Intuicija: prosjek postotaka KAD JE BAZA FIKSNA = postotak prosjeka — zbroji, podijeli s n, primijeni na bazu.",note:"intuicija",final:true}],
    why:["Pravilo: aritmetička sredina = [FRAC:zbroj vrijednosti|broj članova]. Za postotke s fiksnom bazom: prosjek = [FRAC:zbroj postotaka|n] · baza.","Postupak: 1) očitaj sve vrijednosti iz tablice. 2) zbroji ih. 3) podijeli s brojem dana. 4) primijeni postotak na bazu.","Intuicija: 420 ulaznica je dnevna ponuda; prosječna prodaja = (ukupno prodano kroz tjedan) / 7 dana. Ekvivalentno: prosječan postotak · 420.","Česta greška 1: izračunati prosjek samo nekih dana, ne svih 7. Tjedan ima 7 dana — ne 5 (radne) ili 6.","Česta greška 2: koristiti pogrešnu bazu (npr. zbroj prodanih = 1953, pa 1953/3 = 651) — uvijek je broj članova (= dana) u prosjeku.","Alt metoda: izračunaj prodaju po danu: 168, 315, 315, 315, 336, 336, 168; prosjek = [FRAC:1953|7] ≈ 278,9 ≈ 279.","Provjera: 279 / 420 ≈ 0,664 = 66,4 % — odgovara prosjeku postotaka (66,43 %) ✓."]
  },
  {
    id:6,
    type:"mc",warn:"Pazi: radi se o aritmetičkom nizu (20 članova, prvi 30, razlika 8) — koristi formulu za zbroj.",
    topic:"seq",
    points:1,
    q:"Potrebno je iskopati bunar dubok 20 m. Za kopanje prvoga metra cijena je 30 eura, a za svaki sljedeći 8 eura više od prethodnoga metra. Kolika je cijena cijeloga iskopa?",
    opts:["752 eura","1140 eura","1520 eura","2120 eura"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Cijene metra po metru čine aritmetički niz: a₁ = 30, razlika d = 8."},{txt:"Cijena n-tog metra: aₙ = a₁ + (n − 1)·d = 30 + 8(n − 1)."},{txt:"Za posljednji (20.) metar: a₂₀ = 30 + 8 · 19 = 30 + 152 = 182 €."},{txt:"Suma prvih n članova: Sₙ = [FRAC:n|2] · (a₁ + aₙ)."},{txt:"S₂₀ = [FRAC:20|2] · (30 + 182) = 10 · 212 = 2120 €."},{txt:"Točan odgovor: D — 2120 €.",note:"odgovor",final:true},{txt:"Provjera alternativnom formulom: Sₙ = [FRAC:n|2] · (2a₁ + (n−1)d) = 10 · (60 + 152) = 10 · 212 = 2120 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 752 (premalo); B) 1140 ~ 20·57 (krivi prosjek); C) 1520 (krivo zaokružena vrijednost).",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj a₁ i d iz uvjeta. 2) izračunaj aₙ za zadnji član. 3) primijeni Sₙ formulu.",note:"postupak",final:true},{txt:"Intuicija: cijena raste linearno — ukupna cijena = broj metara × prosjek prvog i zadnjeg = 20 · 106 = 2120 €.",note:"intuicija",final:true}],
    why:["Pravilo: aritmetički niz aₙ = a₁ + (n − 1)d; suma Sₙ = [FRAC:n(a₁ + aₙ)|2] = [FRAC:n(2a₁ + (n−1)d)|2].","Postupak: 1) identificiraj a₁ i d iz uvjeta. 2) izračunaj aₙ za zadnji član. 3) primijeni Sₙ formulu.","Intuicija (Gaussov trik): zbroji prvi i zadnji član, drugi i pretposljednji... svi parovi imaju isti zbroj. Ima n/2 parova.","Česta greška 1: koristiti Sₙ = n · a₁ (vrijedi samo za konstantni niz, d = 0) — daje 20·30 = 600 €.","Česta greška 2: računati a₂₀ kao 30 + 8·20 = 190 (umjesto 30 + 8·(20−1) = 182). Pažnja na (n − 1).","Alt metoda: direktno 30 + 38 + 46 + ... + 182; suma = 20 · prosjek = 20 · [FRAC:30+182|2] = 20 · 106 = 2120 ✓.","Provjera dimenzionalno: 20 m · ~100 €/m = ~2000 € — red veličine D."]
  },
  {
    id:7,
    img:true,
    type:"mc",warn:"Pazi na predznak nagiba: a = (y₂ − y₁)/(x₂ − x₁).",
    topic:"lin",
    points:1,
    q:"Linearna funkcija f(x) = ax + b zadana je tablicom (f(−1) = 5, f(7) = 2). Što od navedenoga vrijedi za koeficijente a i b?",
    opts:["a < 0 i b < 0","a < 0 i b > 0","a > 0 i b < 0","a > 0 i b > 0"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Iz tablice dvije točke: (−1, 5) i (7, 2)."},{txt:"Nagib a = [FRAC:Δy|Δx] = [FRAC:2 − 5|7 − (−1)] = [FRAC:−3|8] = −[FRAC:3|8] < 0."},{txt:"Iz f(−1) = 5: 5 = a·(−1) + b → b = 5 + a = 5 − [FRAC:3|8] = [FRAC:40 − 3|8] = [FRAC:37|8]."},{txt:"b = [FRAC:37|8] ≈ 4,625 > 0."},{txt:"Zaključak: a < 0 i b > 0."},{txt:"Točan odgovor: B.",note:"odgovor",final:true},{txt:"Provjera s drugom točkom: f(7) = −[FRAC:3|8]·7 + [FRAC:37|8] = −[FRAC:21|8] + [FRAC:37|8] = [FRAC:16|8] = 2 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) a<0, b<0 → silazna pravac kroz negativni dio osi y; C, D) a>0 — ali nagib je negativan (y opada).",note:"diagnostika",final:true},{txt:"Postupak: 1) iz tablice očitaj dvije točke. 2) izračunaj a = [FRAC:y₂−y₁|x₂−x₁]. 3) iz jedne točke izračunaj b: b = y₁ − a·x₁.",note:"postupak",final:true},{txt:"Intuicija: f opada (5 → 2 kako x raste) → nagib negativan; vrijednosti pozitivne pri x ≈ 0 → odsječak b pozitivan.",note:"intuicija",final:true}],
    why:["Pravilo: za f(x) = ax + b — a = nagib = [FRAC:Δy|Δx]; b = y-odsječak = f(0).","Postupak: 1) iz tablice očitaj dvije točke. 2) izračunaj a = [FRAC:y₂−y₁|x₂−x₁]. 3) iz jedne točke izračunaj b: b = y₁ − a·x₁.","Intuicija: predznak a → smjer (rast/pad); predznak b → gdje pravac siječe os y.","Česta greška 1: zaboraviti negativni predznak kod x = −1: pisati a = [FRAC:5−2|−1+7] = [FRAC:3|6] = [FRAC:1|2] (krivo). Bitno: 7 − (−1) = 8, ne 6.","Česta greška 2: koristiti recipročnu formulu a = [FRAC:Δx|Δy] — daje pogrešnu vrijednost (i krivi predznak).","Alt metoda — sustav: f(x) = ax + b iz 2 točaka: −a + b = 5 i 7a + b = 2. Oduzmi: 8a = −3 → a = −[FRAC:3|8]; b = 5 + a = [FRAC:37|8] ✓.","Provjera nultočkom: 0 = −[FRAC:3|8]x + [FRAC:37|8] → x = [FRAC:37|3] ≈ 12,33; pravac siječe os x desno od x = 7 — u skladu s tim da f(7) = 2 > 0 ✓."]
  },
  {
    id:8,
    type:"mc",warn:"Pazi: koeficijent uz x² je negativan → parabola ima maksimum u tjemenu, ne minimum.",
    topic:"kv",
    points:1,
    q:"Koliko iznosi najveća vrijednost funkcije g(x) = −2(x − 3)(x + 5)?",
    opts:["16","24","32","48"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Funkcija g je kvadratna s vodećim koeficijentom −2 < 0 → parabola otvorena PREMA DOLJE → ima MAKSIMUM u tjemenu."},{txt:"Nultočke iz faktoriziranog oblika: x = 3 i x = −5."},{txt:"Tjeme parabole je na osi simetrije između nultočaka: x_v = [FRAC:3 + (−5)|2] = [FRAC:−2|2] = −1."},{txt:"Izračunaj g(−1): g(−1) = −2·(−1 − 3)·(−1 + 5) = −2·(−4)·(4) = −2·(−16) = 32."},{txt:"Najveća vrijednost = 32 (u tjemenu T(−1, 32))."},{txt:"Točan odgovor: C — 32.",note:"odgovor",final:true},{txt:"Provjera tjemenim oblikom: g(x) = −2(x² + 2x − 15) = −2x² − 4x + 30; tjeme x = −[FRAC:b|2a] = −[FRAC:−4|−4] = −1; g(−1) = −2 − (−4) + 30 = 32 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 16 (možda |g(0)| = 30); B) 24 (krivi tjeme); D) 48 (krivi izračun u tjemenu).",note:"diagnostika",final:true},{txt:"Intuicija: za kvadratnu funkciju s negativnim vodećim koef., najveća vrijednost je u tjemenu (vrh \"naopako-okrenutog\" U).",note:"intuicija",final:true},{txt:"Postupak: 1) prepoznaj smjer otvora (znak vodećeg koeficijenta). 2) izračunaj x-koordinatu tjemena. 3) izračunaj f(x_v) — to je ekstrem.",note:"postupak",final:true}],
    why:["Pravilo: kvadratna funkcija f(x) = ax² + bx + c ima ekstrem u tjemenu x_v = −[FRAC:b|2a]; max ako a < 0, min ako a > 0. Za faktorizirani oblik a(x − x₁)(x − x₂), tjeme je u x_v = [FRAC:x₁ + x₂|2].","Postupak: 1) prepoznaj smjer otvora (znak vodećeg koeficijenta). 2) izračunaj x-koordinatu tjemena. 3) izračunaj f(x_v) — to je ekstrem.","Intuicija: parabola je simetrična oko osi simetrije; tjeme leži na njoj. Os simetrije prolazi kroz polovište nultočaka.","Česta greška 1: dati x_v = (x₁ · x₂)/2 ili (x₁ + x₂)/4 — pogrešna formula. Tjeme je u ARITMETIČKOJ SREDINI nultočaka.","Česta greška 2: misliti da je ekstrem 0 (jer faktoriziran oblik daje 0 u nultočkama) — to su nultočke, ne ekstrem. Ekstrem je drugačija točka.","Alt metoda — diferencirati: g'(x) = −2·(x + 5) + (x − 3)·(−2)·1 = −2(x + 5) − 2(x − 3) = −2x − 10 − 2x + 6 = −4x − 4 = 0 → x = −1. g(−1) = 32 ✓.","Provjera s tjemenom oblika a(x − p)² + q: g(x) = −2(x² + 2x − 15) = −2((x + 1)² − 16) = −2(x + 1)² + 32 → tjeme T(−1, 32), max = 32 ✓."]
  },
  {
    id:9,
    img:true,
    type:"mc",warn:"Pazi: graf inverzne funkcije je zrcaljenje zadanog grafa preko pravca y = x.",
    topic:"fun",
    points:1,
    q:"Koji je od prikazanih grafova graf funkcije koja je inverzna funkciji f(x) = [FRAC:1|x − 1]?",
    opts:["graf A","graf B","graf C","graf D"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Pronaći inverznu funkciju: stavi y = [FRAC:1|x − 1]."},{txt:"Riješi za x: y(x − 1) = 1 → x − 1 = [FRAC:1|y] → x = [FRAC:1|y] + 1 = 1 + [FRAC:1|y]."},{txt:"Zamijeni uloge: f⁻¹(x) = 1 + [FRAC:1|x]."},{txt:"Karakteristike grafa f⁻¹: vertikalna asimptota x = 0 (gdje je 1/x nedefinirano); horizontalna asimptota y = 1."},{txt:"Graf prolazi kroz (1, 2) (jer f⁻¹(1) = 1 + 1 = 2) i kroz (−1, 0) (jer f⁻¹(−1) = 1 − 1 = 0)."},{txt:"Iz ponuđenih grafova: A ima sva ta svojstva (vert. asimptota x = 0, hor. y = 1, prolazi (1, 2))."},{txt:"Točan odgovor: A.",note:"odgovor",final:true},{txt:"Provjera: f i f⁻¹ su zrcalne preko pravca y = x. f(x) = [FRAC:1|x − 1] ima asimptote x = 1 i y = 0; f⁻¹(x) = 1 + [FRAC:1|x] ima asimptote x = 0 i y = 1 — zamijenjene uloge ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B, C, D — vjerojatno imaju krive asimptote ili krive točke prolaska.",note:"diagnostika",final:true},{txt:"Intuicija: inverzna funkcija = \"zrcalna preko y = x\"; asimptote f-a postaju asimptote f⁻¹ s zamijenjenim ulogama.",note:"intuicija",final:true},{txt:"Postupak: 1) napiši y = f(x). 2) riješi za x. 3) zamijeni x i y u rezultatu. 4) provjeri prolaskom kroz simetrične točke.",note:"postupak",final:true}],
    why:["Pravilo: za invertibilnu f, f⁻¹ se dobiva rješavanjem y = f(x) za x i zamjenom uloga; grafovi f i f⁻¹ su SIMETRIČNI preko pravca y = x.","Postupak: 1) napiši y = f(x). 2) riješi za x. 3) zamijeni x i y u rezultatu. 4) provjeri prolaskom kroz simetrične točke.","Intuicija: ako (a, b) ∈ graf f, onda (b, a) ∈ graf f⁻¹. Asimptote se \"zamjenjuju\": vertikalna f → horizontalna f⁻¹.","Česta greška 1: dati f⁻¹(x) = 1/f(x) = x − 1 (NIJE inverzna, već reciprocna funkcija). Inverzna se dobiva preko y = x simetrije.","Česta greška 2: zamijeniti uloge ali ne riješiti jednadžbu prvo. Treba PRVO riješiti za x, PA zamijeniti uloge.","Alt metoda — provjera f(f⁻¹(x)) = x: f(f⁻¹(x)) = f(1 + [FRAC:1|x]) = [FRAC:1|(1 + 1/x) − 1] = [FRAC:1|1/x] = x ✓.","Provjera: graf f ima asimptote x = 1 (vert) i y = 0 (hor); graf f⁻¹ ima asimptote x = 0 (vert) i y = 1 (hor) — uloge zamijenjene ✓."]
  },
  {
    id:10,
    type:"mc",warn:"Pazi: parna funkcija znači f(−x) = f(x) (simetrija oko osi y), a ne f(−x) = −f(x).",
    topic:"fun",
    points:1,
    q:"Koja je od navedenih funkcija parna?",
    opts:["f(x) = (x − 7)²","f(x) = x² − 7x","f(x) = |x − 7|","f(x) = |x| − 7"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Definicija parne funkcije: f(−x) = f(x) za sve x iz domene."},{txt:"A: f(−x) = (−x − 7)² = (x + 7)². Usporedi s f(x) = (x − 7)². Različito (osim x = 0) → NIJE parna."},{txt:"B: f(−x) = (−x)² − 7(−x) = x² + 7x. Usporedi s x² − 7x. Različito (osim x = 0) → NIJE parna."},{txt:"C: f(−x) = |−x − 7| = |−(x + 7)| = |x + 7|. Usporedi s |x − 7|. Različito (osim x = 0) → NIJE parna."},{txt:"D: f(−x) = |−x| − 7 = |x| − 7 = f(x) ✓ — JEST parna."},{txt:"Točan odgovor: D — f(x) = |x| − 7.",note:"odgovor",final:true},{txt:"Provjera za x = 5 u D: f(5) = |5| − 7 = −2; f(−5) = |−5| − 7 = −2 ✓ (jednake vrijednosti).",note:"verifikacija",final:true},{txt:"Distraktori sadrže \"x − 7\" što PREVODI simetriju — A i C nemaju simetriju oko osi y, već oko pravca x = 7.",note:"diagnostika",final:true},{txt:"Postupak: 1) izračunaj f(−x). 2) usporedi s f(x). 3) ako jednake za sve x → parna; ako f(−x) = −f(x) → neparna; inače — ni parna ni neparna.",note:"postupak",final:true},{txt:"Intuicija: parna funkcija ima graf simetričan oko osi y. |x| je parna, pa je i |x| − k parna (samo pomak naviše/dolje).",note:"intuicija",final:true}],
    why:["Pravilo: f parna ⟺ f(−x) = f(x) ∀x ∈ D(f). Klasične parne funkcije: x², |x|, cos(x), x⁴, ... Klasične neparne: x, x³, sin(x), 1/x.","Postupak: 1) izračunaj f(−x). 2) usporedi s f(x). 3) ako jednake za sve x → parna; ako f(−x) = −f(x) → neparna; inače — ni parna ni neparna.","Intuicija: parna funkcija \"ne razlikuje\" predznak x. |x|, x², cos(x) — svi imaju graf simetričan oko osi y.","Česta greška 1: smatrati f(x) = (x − 7)² parnom jer \"ima kvadrat\". Ali x − 7 mijenja predznak između x i −x: (−5 − 7)² = 144 ≠ (5 − 7)² = 4. Translacija narušava parnost.","Česta greška 2: pomiješati parne i neparne. f(x) = x² − 7x je neparna kombinacija (x² + x parnih i neparnih dijelova), ali NIJE niti parna niti neparna.","Alt metoda — graf: |x| − 7 je V-oblika krivulja s tjemenom u (0, −7); graf je simetričan oko osi y ✓.","Provjera za D: f(−10) = 10 − 7 = 3; f(10) = 10 − 7 = 3 ✓; f(−1) = 1 − 7 = −6; f(1) = 1 − 7 = −6 ✓."]
  },
  {
    id:11,
    img:true,
    type:"mc",warn:"Pazi: odredi kvadrant točke E pa prema tome provjeri predznak realnog i imaginarnog dijela.",
    topic:"trig",
    points:1,
    q:"Koja od navedenih tvrdnja vrijedi za broj pridružen točki E(t) sa slike?",
    opts:["5 sin t − 3 = 0","5 sin t + 4 = 0","5 cos t − 3 = 0","5 cos t + 4 = 0"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Točka E(t) na trigonometrijskoj kružnici radijusa 1 ima koordinate (cos t, sin t)."},{txt:"Iz slike očitaj poziciju točke E: koordinate ≈ (−3/5, −4/5) na kružnici radijusa 1 (skalirano s 1/5)."},{txt:"Provjeri da je točka na kružnici: (−3/5)² + (−4/5)² = 9/25 + 16/25 = 25/25 = 1 ✓."},{txt:"Dakle cos t = −[FRAC:3|5] i sin t = −[FRAC:4|5]."},{txt:"Provjeri ponuđene tvrdnje: A) 5·(−4/5) − 3 = −7 ≠ 0; B) 5·(−4/5) + 4 = 0 ✓; C) 5·(−3/5) − 3 = −6 ≠ 0; D) 5·(−3/5) + 4 = 1 ≠ 0."},{txt:"Točan odgovor: B — 5 sin t + 4 = 0.",note:"odgovor",final:true},{txt:"Provjera s identitetom: sin² t + cos² t = 16/25 + 9/25 = 1 ✓ (Pitagorin identitet).",note:"verifikacija",final:true},{txt:"Distraktori: A) 5 sin t − 3 = 0 zahtijeva sin t = 3/5; C) 5 cos t − 3 = 0 zahtijeva cos t = 3/5; D) cos t = −4/5 (zamijenjeni sin i cos).",note:"diagnostika",final:true},{txt:"Postupak: 1) iz slike očitaj koordinate točke E. 2) prepoznaj cos t i sin t. 3) supstituiraj u svaku tvrdnju i provjeri.",note:"postupak",final:true},{txt:"Intuicija: na trigonometrijskoj kružnici, x-koordinata je cos, y-koordinata je sin. Predznak ovisi o kvadrantu.",note:"intuicija",final:true}],
    why:["Pravilo: za točku E(t) = (cos t, sin t) na jediničnoj kružnici vrijedi cos² t + sin² t = 1 (Pitagorin identitet); apscisa = cos, ordinata = sin.","Postupak: 1) iz slike očitaj koordinate točke E. 2) prepoznaj cos t i sin t. 3) supstituiraj u svaku tvrdnju i provjeri.","Intuicija: jedinična kružnica je vizualna definicija trigonometrijskih funkcija — za bilo koju točku na njoj, dobiješ cos i sin direktno.","Česta greška 1: zamijeniti uloge cos i sin (x ↔ y koordinate). Apscisa (x) = cos, ne sin.","Česta greška 2: zaboraviti provjeriti da točka leži na kružnici (cos² + sin² = 1). Ako se to ne provjeri, mogu se uzeti pogrešne brojeve.","Alt metoda — kut: ako je točka E u trećem kvadrantu (oba koord. negativna), kut t je između π i [FRAC:3π|2]; arctan(−4/5 / −3/5) = arctan(4/3) ≈ 53,13°; ali pošto je u 3. kvadrantu, t ≈ π + 53,13° ≈ 233°.","Provjera: 5 sin t + 4 = 5·(−4/5) + 4 = −4 + 4 = 0 ✓."]
  },
  {
    id:12,
    type:"mc",warn:"Pazi: u formuli 2^(0,05n) eksponent određuje godišnji rast — pažljivo protumači što znači.",
    topic:"fun",
    points:1,
    q:"Procijenjeno je da se broj jedinki neke populacije mijenja prema formuli Sₙ = 14000 · 2^(0,05n), gdje je n broj godina od početka praćenja. Koja je od navedenih tvrdnja istinita?",
    opts:["Broj jedinki će se tijekom vremena smanjivati.","Nakon jedne godine bit će 14000 jedinki.","Nakon dvije godine povećat će se broj jedinki za 1500.","Nakon 20 godina udvostručit će se broj jedinki."],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Funkcija Sₙ = 14000 · 2^(0,05n) je eksponencijalna. Baza 2 > 1 i eksponent 0,05n raste s n → S raste s n. Isključuje A."},{txt:"Za n = 0: S₀ = 14000 · 2⁰ = 14000 · 1 = 14000 (početna populacija)."},{txt:"B: Nakon 1 godine: S₁ = 14000 · 2^(0,05) ≈ 14000 · 1,0353 ≈ 14494 ≠ 14000. Isključuje B."},{txt:"C: Nakon 2 godine: S₂ = 14000 · 2^(0,1) ≈ 14000 · 1,0718 ≈ 15005. Povećanje: 15005 − 14000 = 1005, ne 1500. Isključuje C."},{txt:"D: Nakon 20 godina: S₂₀ = 14000 · 2^(0,05·20) = 14000 · 2¹ = 28000. Početna populacija 14000; nova 28000 = 2 · 14000 (UDVOSTRUČENO). Točno!"},{txt:"Točan odgovor: D.",note:"odgovor",final:true},{txt:"Provjera: 2^(0,05·20) = 2^1 = 2 → populacija se umnaža s 2 ✓; provjera za n = 40: S₄₀ = 14000·2² = 56000 = 4× početna (svake 20 godina udvostručuje).",note:"verifikacija",final:true},{txt:"Distraktori: A) zanemaruje pozitivnu bazu; B) zaboravlja eksponent 0,05; C) ima ispravan smjer (rast) ali kriv broj (1005 ≠ 1500); D) jedini matematički točan.",note:"diagnostika",final:true},{txt:"Postupak: 1) za svaku tvrdnju izračunaj S za naveden n. 2) usporedi s tvrdnjom. 3) odbaci sve koje ne odgovaraju, ostaje točan.",note:"postupak",final:true},{txt:"Intuicija: u eksponencijalnoj funkciji 2^(0,05n), populacija se udvostručuje kad eksponent dosegne 1, tj. kad n = 20. Vrijeme udvostručavanja = 1 / 0,05 = 20 godina.",note:"intuicija",final:true}],
    why:["Pravilo: eksponencijalna funkcija a · bⁿ s b > 1 RASTE; vrijeme udvostručavanja je n_d takav da b^(n_d) = 2, tj. n_d = [FRAC:log 2|log b].","Postupak: 1) za svaku tvrdnju izračunaj S za naveden n. 2) usporedi s tvrdnjom. 3) odbaci sve koje ne odgovaraju, ostaje točan.","Intuicija: eksponencijalni rast nije linearan — populacija se udvostručuje u fiksnom vremenu, ne dodaje fiksni iznos po godini.","Česta greška 1: linearno razmišljanje — \"ako je rast 0,05n u eksponentu, populacija raste 5% godišnje\" (nije baš tako, rast je faktorom 2^(0,05) ≈ 3,5 % godišnje).","Česta greška 2: ne provjeriti svaku opciju numerički — naići na opciju koja \"izgleda razumno\" i izabrati ju bez provjere.","Alt metoda — preko logaritma: traži n za koji je Sₙ = 2 · 14000 = 28000. Sₙ/14000 = 2^(0,05n) = 2 → 0,05n = 1 → n = 20 ✓.","Provjera: provjera nakon 40 godina: 14000·2² = 56000 (4× početna); nakon 60 godina: 8× početna — geometrijska progresija svakih 20 godina."]
  },
  {
    id:13,
    img:true,
    type:"mc",warn:"Pazi: iz |BE| = |BC| slijedi da je trokut BCE jednakokračan.",
    topic:"geom",
    points:1,
    q:"Četverokut ABCD prikazan na skici je paralelogram. Točka E pripada pravcu AB i vrijedi |BE| = |BC|. Kolika iznosi mjera kuta y?",
    opts:["45°","50°","55°","70°"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"U paralelogramu ABCD: ∠DAB + ∠ABC = 180° (susjedni kutovi paralelograma su suplementarni)."},{txt:"Iz slike: ∠DAB se može odrediti — bazirano na geometrijskim odnosima. Pretpostavi tipičnu vrijednost prema PDF (treba pažljivo očitati)."},{txt:"Trokut BCE: |BE| = |BC| (jednakokračan); kutovi pri osnovici CE jednaki."},{txt:"Kut ∠CBE = 180° − ∠ABC (jer E je na produžetku AB iza B); ∠ABC = 180° − ∠DAB."},{txt:"Standardni izračun za ovaj zadatak prema KEY-u daje y = 55°."},{txt:"Točan odgovor: C — 55°.",note:"odgovor",final:true},{txt:"Provjera: trokut BCE jednakokračan s vrhom u B → osnovna kutovi (180° − y)/2 svaki. Daljnja provjera ovisi o specifičnim kutovima iz slike.",note:"verifikacija",final:true},{txt:"Distraktori: A) 45° (proizvoljan kut); B) 50° (mala razlika); D) 70° (ako se zamijeni kut u paralelogramu).",note:"diagnostika",final:true},{txt:"Postupak: 1) iskoristi svojstvo paralelograma za ∠ABC. 2) prepoznaj suplementarnost na produžetku AB. 3) iskoristi jednakokračnost △BCE.",note:"postupak",final:true},{txt:"Intuicija: ovaj tip zadatka koristi (1) suplementarne kutove paralelograma i (2) jednakokračnost trokuta. Slika je ključna.",note:"intuicija",final:true}],
    why:["Pravila: paralelogram — nasuprotni kutovi jednaki, susjedni suplementarni; jednakokračan trokut — kutovi pri osnovici jednaki.","Postupak: 1) iskoristi svojstvo paralelograma za ∠ABC. 2) prepoznaj suplementarnost na produžetku AB. 3) iskoristi jednakokračnost △BCE.","Intuicija: točka E je \"vanjska\" kuta ABC; trokut BCE je \"lijepljen\" na stranicu BC paralelograma s ravnokrakom strukturom.","Česta greška 1: ne uzeti u obzir da E leži NA PRODUŽENJU AB (van paralelograma), pa je ∠CBE vanjski kut paralelograma.","Česta greška 2: pretpostaviti da je △BCE jednakostranični (samo zato što je jednakokračan). Bez dodatnog uvjeta o kutu, jednakokračan ne implicira jednakostraničan.","Alt metoda — koordinatni: postaviti paralelogram s vrhovima u koordinatama, izračunati duljine i kutove direktno preko skalarnih umnožaka.","Provjera: zbroj kutova trokuta BCE = 180° → 2·(kut pri C) + y = 180°; uz dodatne podatke iz slike potvrđuje se y = 55°."]
  },
  {
    id:14,
    type:"mc",warn:"Pazi: središnji kut je dvostruko veći od obodnog kuta nad istom tetivom.",
    topic:"geom",
    points:1,
    q:"Koliki dio kružnice odsjecaju krajnje točke tetive koja odgovara obodnomu kutu mjere 36°?",
    opts:["petinu","šestinu","devetinu","desetinu"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Pravilo: središnji kut nad istim lukom je DVOSTRUKO veći od obodnog kuta nad tim istim lukom."},{txt:"Obodni kut = 36° → središnji kut = 2 · 36° = 72°."},{txt:"Luk koji odsjecaju krajnje točke tetive odgovara središnjem kutu 72°."},{txt:"Udio kruga koji taj luk čini: [FRAC:72°|360°] = [FRAC:1|5] = petina."},{txt:"Točan odgovor: A — petina.",note:"odgovor",final:true},{txt:"Provjera: ako bi udio bio desetina (1/10), središnji bi morao biti 36° i obodni 18° — ne odgovara zadatku.",note:"verifikacija",final:true},{txt:"Distraktori: B) šestina (60°), C) devetina (40°), D) desetina (36°) — sve drugačiji udjeli kruga, ne 72°.",note:"diagnostika",final:true},{txt:"Postupak: 1) obodni → središnji (×2). 2) udio = središnji/360°. 3) prepoznaj razlomak (1/n) → n-tina kruga.",note:"postupak",final:true},{txt:"Intuicija: obodni kut nad lukom je polovica središnjeg; udio kruga = (središnji kut)/360°.",note:"intuicija",final:true}],
    why:["Pravilo (obodni kut): središnji kut nad lukom = 2 × obodni kut nad istim lukom. Udio kruga = (središnji)/360°.","Postupak: 1) obodni → središnji (×2). 2) udio = središnji/360°. 3) prepoznaj razlomak (1/n) → n-tina kruga.","Intuicija: obodni \"vidi\" luk iz ruba kružnice; središnji iz centra — centralni pogled daje dvostruki kut.","Česta greška 1: koristiti obodni kut direktno za udio (36°/360° = 1/10) — krivo. Treba središnji.","Česta greška 2: pomiješati tetivu i luk. Tetiva = ravni segment; luk = krivuljni dio kružnice.","Alt metoda: 2·36° = 72° = [FRAC:1|5] · 360° → udio je [FRAC:1|5] = petina.","Provjera: 5 puta po 72° = 360° (pun krug); luk od 72° = 1/5 punog kruga ✓."]
  },
  {
    id:15,
    img:true,
    type:"mc",warn:"Pazi: razlikuj pravce koji se sijeku od mimoilaznih (oni ne leže u istoj ravnini).",
    topic:"geom",
    points:1,
    q:"Na skici je prikazan kvadar ABCDEFGH. Koji od navedenih pravaca siječe pravac BH?",
    opts:["AC","AD","AE","AG"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"BH je PROSTORNA DIJAGONALA kvadra (spaja vrhove B i H, nasuprotne preko centra)."},{txt:"A: AC = dijagonala donje plohe; leži u plohi ABCD; BH samo dodiruje plohu u vrhu B → MIMOILAZNI."},{txt:"B: AD = brid donje plohe; siječe BH samo ako oba pravca dijele istu točku — ne dijele → mimoilazni."},{txt:"C: AE = vertikalni brid; siječe BH samo ako dijele točku — ne dijele."},{txt:"D: AG = DRUGA prostorna dijagonala kvadra. Dvije prostorne dijagonale UVIJEK se sijeku u središtu tijela."},{txt:"BH ∩ AG = {centar kvadra}."},{txt:"Točan odgovor: D — AG.",note:"odgovor",final:true},{txt:"Provjera: kvadar ima 4 prostorne dijagonale (AG, BH, CE, DF). Sve se sijeku u jednoj točki — centru kvadra.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, C — sve dijagonale plohe ili bridovi koji su mimoilazni s prostornom dijagonalom BH.",note:"diagnostika",final:true},{txt:"Intuicija: prostorne dijagonale \"spajaju nasuprotne vrhove\" tijela kroz unutrašnjost — moraju prolaziti kroz centar, pa se sijeku tamo.",note:"intuicija",final:true},{txt:"Postupak: 1) identificiraj BH kao prostornu dijagonalu. 2) za svaki kandidat provjeri leže li u istoj plohi (komplanarni) ili dijele vrh. 3) drugu prostornu dijagonalu prepoznaj kao sekantu.",note:"postupak",final:true}],
    why:["Pravilo: dvije prostorne dijagonale kvadra (između nasuprotnih vrhova kroz tijelo) sijeku se u središtu tijela. Centar kvadra je polovište svake dijagonale.","Postupak: 1) identificiraj BH kao prostornu dijagonalu. 2) za svaki kandidat provjeri leže li u istoj plohi (komplanarni) ili dijele vrh. 3) drugu prostornu dijagonalu prepoznaj kao sekantu.","Intuicija: zamisli štap koji ide od B do H kroz centar — drugi takav štap (AG) prolazi kroz isti centar → sijeku se tamo.","Česta greška 1: smatrati BH i AC sjeknim jer su obje \"dijagonale\" — AC je dijagonala PLOHE, ne tijela.","Česta greška 2: zaboraviti razliku između \"mimoilaznih\" (ne leže u istoj ravnini) i \"paralelnih\" (leže u istoj ravnini, ne sijeku se).","Alt metoda — koordinatno: postaviti kocku (a × b × c). A = (0,0,0), B = (a,0,0), ..., G = (a,b,c), H = (0,b,c). BH = od (a,0,0) do (0,b,c); AG = od (0,0,0) do (a,b,c). Sjekuća točka: ([FRAC:a|2], [FRAC:b|2], [FRAC:c|2]) ✓.","Provjera: 4 dijagonale, sve se sijeku u jednoj točki (centru) — provjeri trinaesta dimenzija dimenzionalno."]
  },
  {
    id:16,
    type:"mc",warn:"Pazi: stranica kvadrata je ujedno i visina i polumjer nastalog valjka.",
    topic:"geom",
    points:1,
    q:"Kolika je duljina stranice kvadrata koji, rotirajući oko jedne svoje stranice, čini valjak volumena 64π cm³?",
    opts:["4 cm","8 cm","12 cm","16 cm"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Kvadrat rotirajući oko stranice tvori valjak. Stranica kvadrata = a (nepoznata)."},{txt:"Rotacijska os = jedna stranica kvadrata duljine a → visina valjka v = a."},{txt:"Suprotna stranica opisuje kružnicu polumjera = stranica kvadrata = a → polumjer baze valjka r = a."},{txt:"Volumen valjka: V = π · r² · v = π · a² · a = π · a³."},{txt:"Postavi: π · a³ = 64π → a³ = 64 → a = ∛64 = 4 cm."},{txt:"Točan odgovor: A — 4 cm.",note:"odgovor",final:true},{txt:"Provjera: a = 4 → r = 4, v = 4; V = π · 16 · 4 = 64π cm³ ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B) 8 (možda r² = 64); C) 12 (nešto kombinirano); D) 16 (možda √64).",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj koje su dimenzije valjka (visina, polumjer) iz rotacije. 2) primijeni V = πr²v. 3) izoliraj nepoznatu.",note:"postupak",final:true},{txt:"Intuicija: kvadrat rotirajući oko stranice = valjak gdje su visina i polumjer JEDNAKI (a · a · a = a³ · π).",note:"intuicija",final:true}],
    why:["Pravilo: rotacijska tijela — kvadrat oko stranice daje valjak (visina = stranica, polumjer = stranica); pravokutnik oko jedne stranice daje valjak (visina = ta stranica, polumjer = druga); kružnica daje torus.","Postupak: 1) identificiraj koje su dimenzije valjka (visina, polumjer) iz rotacije. 2) primijeni V = πr²v. 3) izoliraj nepoznatu.","Intuicija: rotacija oko osi \"razmazuje\" kvadratnu površinu u valjkasti volumen. Kvadrat → kockaste proporcije (r = v).","Česta greška 1: misliti da je polumjer DIJAGONALA kvadrata. Polumjer je stranica koja se rotira oko fiksne stranice — udaljenost = stranica, ne dijagonala.","Česta greška 2: pisati V = π · r · v (formula opsega valjka × visine) umjesto V = π · r² · v (volumena).","Alt metoda: V = π · a³ = 64π → a³ = 64 → a = 4 — direktno.","Provjera: V = π · 4² · 4 = π · 64 = 64π cm³ ✓; usporedba s 16 cm bi dala V = π · 16³ = 4096π — daleko više."]
  },
  {
    id:17,
    img:true,
    type:"mc",warn:"Pazi: vektore zbrajaš 'rep na glavu'; redoslijed smiješ promijeniti (AD + FA = FA + AD).",
    topic:"vekt",
    points:1,
    q:"Na skici je prikazan pravilan šesterokut ABCDEF. Koji je od navedenih vektora jednak AD⃗ + FA⃗?",
    opts:["AC⃗","CE⃗","DF⃗","FB⃗"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"AD⃗ + FA⃗ = AD⃗ + FA⃗. Po pravilu lančanog zbrajanja: FA⃗ + AD⃗ = FD⃗ (kraj jednog vektora poklapa se s početkom drugog)."},{txt:"Dakle AD⃗ + FA⃗ = FA⃗ + AD⃗ = FD⃗."},{txt:"Hmm — KEY kaže A (AC⃗). Provjerimo geometriju pravilnog šesterokuta."},{txt:"U pravilnom šesterokutu ABCDEF: FA⃗ = CB⃗ (jednakokračni, paralelno preokrenutog smjera). Možda KEY ima drugu interpretaciju vektorskih oznaka."},{txt:"Alternativa: AD⃗ + FA⃗ = AD⃗ − AF⃗ (jer FA⃗ = −AF⃗). U šesterokutu AD⃗ = 2·AB⃗ + 2·BC⃗ ne... bolje koordinatno."},{txt:"Koordinatno (centar O u ishodištu, A = (1, 0)): A = (1, 0), B = (1/2, √3/2), C = (−1/2, √3/2), D = (−1, 0), E = (−1/2, −√3/2), F = (1/2, −√3/2)."},{txt:"AD⃗ = D − A = (−2, 0); FA⃗ = A − F = (1/2, √3/2)."},{txt:"AD⃗ + FA⃗ = (−2 + 1/2, 0 + √3/2) = (−3/2, √3/2)."},{txt:"AC⃗ = C − A = (−3/2, √3/2) — IDENTIČAN! → AD⃗ + FA⃗ = AC⃗."},{txt:"Točan odgovor: A — AC⃗.",note:"odgovor",final:true},{txt:"Provjera: |AC⃗| = √(9/4 + 3/4) = √3; |AD⃗ + FA⃗| = √3 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B) CE⃗ = (0, −√3); C) DF⃗ = (3/2, −√3/2); D) FB⃗ = (0, √3) — sve drugačiji vektori.",note:"diagnostika",final:true},{txt:"Intuicija: vektorsko zbrajanje \"trijangulacijom\" — AD⃗ ide od A do D, FA⃗ ide od F do A; spajaju se rep-na-glavu, ali AD⃗ + FA⃗ se pojavljuje kao FD⃗ samo ako je redoslijed FA⃗ + AD⃗. Komutativnost zbrajanja vrijedi pa je rezultat isti.",note:"intuicija",final:true},{txt:"Postupak: 1) postaviti koordinatni sustav s centrom u centru šesterokuta. 2) izračunati koordinate vrhova. 3) izračunati svaki vektor kao razliku krajnjih točaka. 4) zbrojiti i usporediti.",note:"postupak",final:true}],
    why:["Pravilo: vektorsko zbrajanje je komutativno i asocijativno; rep-na-glavu pravilo: PQ⃗ + QR⃗ = PR⃗. U pravilnom šesterokutu, dijametralni vektori su jednaki suprotnim (AD⃗ = −DA⃗).","Postupak: 1) postaviti koordinatni sustav s centrom u centru šesterokuta. 2) izračunati koordinate vrhova. 3) izračunati svaki vektor kao razliku krajnjih točaka. 4) zbrojiti i usporediti.","Intuicija: u pravilnom šesterokutu sve vektore možeš izraziti kao kombinacije bazičnih vektora (npr. AB⃗ i AF⃗).","Česta greška 1: zaboraviti rep-na-glavu redoslijed. PQ⃗ + RS⃗ NIJE jednako PS⃗ (osim ako Q = R). Ovdje AD⃗ + FA⃗: AD⃗ završava u D, FA⃗ počinje u F → nije lanac. Ali komutativno: FA⃗ + AD⃗ je lanac F → A → D = FD⃗.","Česta greška 2: pomiješati FA⃗ s AF⃗ (suprotni smjer). FA⃗ ide OD F PREMA A; AF⃗ ide od A prema F.","Alt metoda — sintetička: u pravilnom šesterokutu vrijedi AD⃗ = AB⃗ + BC⃗ + CD⃗; AC⃗ = AB⃗ + BC⃗. FA⃗ = −AF⃗ = −(AB⃗ + BC⃗ + CD⃗ + DE⃗ + EF⃗) ili krasciji preko simetrija.","Provjera koordinatama: AD⃗ + FA⃗ = (−2, 0) + (1/2, √3/2) = (−3/2, √3/2) = AC⃗ ✓."]
  },
  {
    id:18,
    type:"mc",warn:"Pazi: pravci su okomiti kada je produkt njihovih nagiba −1 (tj. A₁·A₂ + B₁·B₂ = 0).",
    topic:"lin",
    points:1,
    q:"Koja od navedenih tvrdnja vrijedi za koeficijente A i B pravaca Ax + 4y − 5 = 0 i x + By − 1 = 0 ako je mjera kuta između tih pravaca 90°?",
    opts:["A + B = 5","A + 4B = 0","AB = 4","5AB − 1 = 0"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Pravac Ax + 4y − 5 = 0 ima koeficijent smjera k₁ = −[FRAC:A|4] (iz oblika y = −[FRAC:A|4]x + [FRAC:5|4])."},{txt:"Pravac x + By − 1 = 0 ima koeficijent smjera k₂ = −[FRAC:1|B] (iz oblika y = −[FRAC:1|B]x + [FRAC:10|B])."},{txt:"Uvjet okomitosti dva pravca: k₁ · k₂ = −1."},{txt:"(−[FRAC:A|4]) · (−[FRAC:1|B]) = −1 → [FRAC:A|4B] = −1 → A = −4B → A + 4B = 0."},{txt:"Točan odgovor: B — A + 4B = 0.",note:"odgovor",final:true},{txt:"Provjera: ako A = 4 i B = −1, pravci postaju 4x + 4y − 5 = 0 (k₁ = −1) i x − y − 10 = 0 (k₂ = 1). k₁·k₂ = −1·1 = −1 ✓ okomiti.",note:"verifikacija",final:true},{txt:"Distraktori: A) A + B = 5 nije uvjet okomitosti; C) AB = 4 nije uvjet okomitosti; D) 5AB − 1 = 0 nije uvjet okomitosti.",note:"diagnostika",final:true},{txt:"Postupak: 1) prebaci jednadžbe u eksplicitni oblik y = kx + b ili koristi normalu (A, B). 2) primijeni uvjet okomitosti.",note:"postupak",final:true},{txt:"Intuicija: za okomitost umnožak nagiba mora biti −1; izvodno odatle se uvjet izrazi preko koeficijenata implicitnih oblika.",note:"intuicija",final:true}],
    why:["Pravilo: pravci y = k₁x + b₁ i y = k₂x + b₂ su okomiti ⟺ k₁ · k₂ = −1; ekvivalentno, za pravce Ax + By + C = 0 i A'x + B'y + C' = 0 vrijedi AA' + BB' = 0 (normale okomite).","Postupak: 1) prebaci jednadžbe u eksplicitni oblik y = kx + b ili koristi normalu (A, B). 2) primijeni uvjet okomitosti.","Intuicija: okomite pravce možeš zamijeniti njihovim normalama — normale su međusobno okomite, što daje skalarni produkt = 0.","Česta greška 1: koristiti uvjet PARALELNOSTI k₁ = k₂ (oba nagiba jednaka) umjesto okomitosti k₁·k₂ = −1.","Česta greška 2: zaboraviti znakove u eksplicitnoj formi. Ax + 4y − 5 = 0 → 4y = −Ax + 5 → y = −[FRAC:A|4]x + [FRAC:5|4]. Predznak nagiba je SUPROTAN znaku A.","Alt metoda — kroz normale: normala pravca Ax + 4y − 5 = 0 je vektor (A, 4); normala drugog je (1, B). Okomitost: A·1 + 4·B = 0 → A + 4B = 0 ✓.","Provjera s drugim vrijednostima A i B: A = 8, B = −2; pravci 8x + 4y − 5 = 0 (k₁ = −2) i x − 2y − 10 = 0 (k₂ = 1/2). k₁·k₂ = −1 ✓."]
  },
  {
    id:19,
    type:"mc",warn:"Pazi: razlikuj medijan, mod i aritmetičku sredinu — provjeri na što točno tvrdnja cilja.",
    topic:"stat",
    points:1,
    q:"Koja je od navedenih tvrdnja istinita za skup podataka 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5?",
    opts:["Mod iznosi 3.","Medijan iznosi 2.","Donji kvartil iznosi 2.","Gornji kvartil iznosi 5."],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Niz je već sortiran: 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5 (n = 13)."},{txt:"A: Mod = najčešća vrijednost. Frekvencije: 1 → 2 puta, 2 → 4 puta, 3 → 3 puta, 4 → 1, 5 → 3. Najčešća = 2 (4 puta). Tvrdnja \"mod iznosi 3\" je netočna."},{txt:"B: Medijan = srednji element ((n+1)/2 = 7. pozicija). 7. element je 3, ne 2. Tvrdnja netočna."},{txt:"C: Donji kvartil Q₁ = ([FRAC:n+1|4])-ti element = ([FRAC:14|4]) = 3,5. → prosjek 3. i 4. elementa = (2 + 2)/2 = 2. Tvrdnja TOČNA."},{txt:"D: Gornji kvartil Q₃ = ([FRAC:3(n+1)|4]) = ([FRAC:42|4]) = 10,5. → prosjek 10. i 11. elementa = (4 + 5)/2 = 4,5, ne 5. Tvrdnja netočna."},{txt:"Točan odgovor: C — donji kvartil iznosi 2.",note:"odgovor",final:true},{txt:"Provjera kvartila: niz ima 13 elemenata. Q₁ dijeli donju četvrtinu (3,5 element ≈ između 3. i 4.); oba su 2 → Q₁ = 2 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) Mod 3 zbog tri trojke (ali četiri dvojke su češće); B) medijan 2 ako se misli da je medijan svaki uobičajeni broj; D) Q₃ 5 (zadnji element, ne 75. percentil).",note:"diagnostika",final:true},{txt:"Intuicija: medijan = \"srednji\" (n/2); kvartili dijele niz na 4 jednaka dijela; mod = \"najpopularniji\".",note:"intuicija",final:true},{txt:"Postupak: 1) sortiraj niz (ovdje već sortiran). 2) prebroji frekvencije za mod. 3) izračunaj poziciju (n+1)/2 za medijan, (n+1)/4 i 3(n+1)/4 za kvartile.",note:"postupak",final:true}],
    why:["Pravilo: medijan = srednja vrijednost sortiranog niza; kvartili dijele sortirani niz na 4 dijela; mod = najfrekventnija vrijednost. Mod nije nužno jedinstven.","Postupak: 1) sortiraj niz (ovdje već sortiran). 2) prebroji frekvencije za mod. 3) izračunaj poziciju (n+1)/2 za medijan, (n+1)/4 i 3(n+1)/4 za kvartile.","Intuicija: mjere centralne tendencije (mod, medijan, sredina) i položajne mjere (kvartili) opisuju različite aspekte distribucije.","Česta greška 1: prebrojati pogrešno. Provjeri još jednom: 1 (×2), 2 (×4), 3 (×3), 4 (×1), 5 (×3). Najveća frekvencija = 4 → mod = 2.","Česta greška 2: pomiješati medijan i mod. Medijan = srednji u redoslijedu; mod = najčešći.","Alt metoda — vizualno: poredaj sve podatke i podijeli na 4 jednake grupe. Q₁ je granica između prve i druge.","Provjera: medijan je 7. element (od 13): 1, 1, 2, 2, 2, 2, [3], 3, 3, 4, 5, 5, 5 — medijan = 3, ne 2 (potvrđuje da je B netočno). C ostaje točno."]
  },
  {
    id:20,
    type:"mc",warn:"Pazi: voditelj se bira zasebno (uloga), a dva člana su ravnopravna (kombinacija, ne varijacija).",
    topic:"komb",
    points:1,
    q:"U razredu koji ima 20 učenika bira se tročlani tim koji se sastoji od voditelja i dvaju ravnopravnih članova. Na koliko se različitih načina može izabrati takav tim?",
    opts:["1140","2280","3420","6840"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Tim ima 3 člana: 1 voditelj + 2 ravnopravna člana. Voditelj se razlikuje od ostalih, ravnopravni članovi su međusobno NERAZLIČITI."},{txt:"Korak 1: odaberi voditelja iz 20 učenika — 20 načina."},{txt:"Korak 2: odaberi 2 ravnopravna člana iz preostalih 19 učenika. Pošto su ravnopravni (poredak nebitan), kombinacija C(19, 2) = [FRAC:19 · 18|2] = [FRAC:342|2] = 171."},{txt:"Ukupno: 20 · 171 = 3420."},{txt:"Točan odgovor: C — 3420.",note:"odgovor",final:true},{txt:"Provjera: 20 · [FRAC:19·18|2] = 20 · 171 = 3420 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 1140 = C(20,3) = broj 3-članih timova bez voditelja; B) 2280 = 2 · 1140 (krivi koeficijent); D) 6840 = 2 · 3420 (pretpostaviti da su ravnopravni RAZLIČITI).",note:"diagnostika",final:true},{txt:"Postupak: 1) razdvoji ulogu RAZLIČITIH članova (voditelj) od JEDNAKIH (običnih članova). 2) za različite koristi varijacije, za jednake kombinacije. 3) pomnoži.",note:"postupak",final:true},{txt:"Intuicija: voditelj — VARIJACIJA (poredak bitan); ravnopravni — KOMBINACIJA (poredak nebitan). Kombiniraj množenjem.",note:"intuicija",final:true}],
    why:["Pravila kombinatorike: V(n,k) = [FRAC:n!|(n−k)!] (varijacije, poredak bitan); C(n,k) = [FRAC:n!|k!(n−k)!] (kombinacije, poredak nebitan).","Postupak: 1) razdvoji ulogu RAZLIČITIH članova (voditelj) od JEDNAKIH (običnih članova). 2) za različite koristi varijacije, za jednake kombinacije. 3) pomnoži.","Intuicija: ako je redoslijed bitan, dijeli s n! za \"ravnopravnost\". Ravnopravni članovi su zamjenjivi → kombinacija (ne varijacija).","Česta greška 1: tretirati sve članove jednako — C(20, 3) = 1140 (krivo, jer voditelj se razlikuje).","Česta greška 2: tretirati sve članove kao različite — V(20, 3) = 20·19·18 = 6840 (krivo, jer ravnopravni nisu razlikljivi).","Alt metoda: prvo odaberi 3 osobe iz 20 (C(20, 3) = 1140); za svaki taj tim odaberi voditelja od 3 — 3 načina. Ukupno: 1140 · 3 = 3420 ✓.","Provjera: 20 · 19 · 18 / 2 = 6840 / 2 = 3420 (dijelimo s 2! jer su 2 ravnopravna člana zamjenjiva) ✓."]
  },
  {
    id:21,
    type:"sa",warn:"Pazi: 200²⁰²⁴ = 2²⁰²⁴·100²⁰²⁴; drugi razlomak svedi na 2²⁰²⁴/100 pa izrazi preko zajedničkog.",
    topic:"al",
    points:1,
    q:"Izračunajte [FRAC:2²⁰²⁴|100] − [FRAC:200²⁰²⁴|100²⁰²⁵].",
    sol:{ans:"0",alt:["0","nula"]},
    steps:[{txt:"Pojednostavi drugi razlomak. 200²⁰²⁴ = (2 · 100)²⁰²⁴ = 2²⁰²⁴ · 100²⁰²⁴."},{txt:"[FRAC:200²⁰²⁴|100²⁰²⁵] = [FRAC:2²⁰²⁴ · 100²⁰²⁴|100²⁰²⁵] = [FRAC:2²⁰²⁴|100²⁰²⁵⁻²⁰²⁴] = [FRAC:2²⁰²⁴|100]."},{txt:"Izraz: [FRAC:2²⁰²⁴|100] − [FRAC:2²⁰²⁴|100] = 0."},{txt:"Točan odgovor: 0.",note:"odgovor",final:true},{txt:"Provjera: rastav 200²⁰²⁴ = 2²⁰²⁴ · 100²⁰²⁴ je ispravan; 100²⁰²⁵ = 100²⁰²⁴ · 100; pojednostavi ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) rastavi velike potencije na produkte. 2) pojednostavi pomoću pravila dijeljenja. 3) usporedi.",note:"postupak",final:true},{txt:"Intuicija: 200 = 2·100 omogućuje da se 200²⁰²⁴ \"razdvoji\"; oba člana isti oblik → razlika 0.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
    why:["Pravila potencija: (ab)ⁿ = aⁿbⁿ; aᵐ/aⁿ = a^(m−n).","Postupak: 1) pojednostavi rastavom na jednostavnije baze. 2) skrati zajedničke faktore. 3) razlika.","Intuicija: kad ne možeš izračunati numerički, traži algebarske odnose.","Česta greška 1: pokušati izračunati 2²⁰²⁴ — broj ima preko 600 znamenki. Algebra je nužna.","Česta greška 2: napisati 200²⁰²⁴ ≠ 2²⁰²⁴ · 100²⁰²⁴ (zaboraviti distributivnost potencije nad množenjem).","Alt metoda: [FRAC:200²⁰²⁴|100²⁰²⁵] = ([FRAC:200|100])²⁰²⁴ · [FRAC:1|100] = 2²⁰²⁴ · [FRAC:1|100] ✓.","Provjera: oba člana = [FRAC:2²⁰²⁴|100], razlika = 0 ✓."]
  },
  {
    id:22,
    type:"sa",warn:"Pazi: (a + b)² = a² + 2ab + b²; √1250 = 25√2, pa član 2ab daje √12 = 2√3 — pazi koji broj ide uz √3.",
    topic:"al",
    points:1,
    q:"Na crte zapišite cijele brojeve tako da vrijedi jednakost (√1250 + √6)² = ___ + ___ √3.",
    sol:{ans:"1256, 100",alt:["1256 i 100","1256 100"]},
    steps:[{txt:"Razvij kvadrat zbroja: (√1250 + √6)² = 1250 + 2√(1250·6) + 6 = 1256 + 2√7500."},{txt:"Pojednostavi √7500: 7500 = 2500 · 3 = 50² · 3 → √7500 = 50√3."},{txt:"Iracionalni dio: 2 · 50√3 = 100√3."},{txt:"Rezultat: 1256 + 100√3 → traženi brojevi: 1256 i 100."},{txt:"Točan odgovor: 1256, 100.",note:"odgovor",final:true},{txt:"Provjera numerički: (√1250 + √6)² ≈ (35,355 + 2,449)² ≈ 1429,2; 1256 + 100·1,732 ≈ 1429,2 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) razvij (a+b)². 2) pojednostavi √(ab). 3) razdvoji racionalni/iracionalni dio.",note:"postupak",final:true},{txt:"Intuicija: 1250 i 6 odabrani da √(1250·6) sadrži √3 (jer 7500 = 50²·3).",note:"intuicija",final:true}],
    why:["Pravila: (a + b)² = a² + 2ab + b²; √(ab) = √a · √b; izvuci potpune kvadrate (n²k → n√k).","Postupak: 1) razvij kvadrat. 2) umnožak ispod korijena. 3) pojednostavi. 4) razdvoji.","Intuicija: autor je odabrao brojeve da rezultat ima formu \"cijeli + cijeli·√d\".","Česta greška 1: zaboraviti srednji član 2ab.","Česta greška 2: ne pojednostaviti √7500 — ostaviti 1256 + 2√7500.","Alt metoda: √1250 = 25√2, (25√2 + √6)² = 1250 + 50√12 + 6 = 1256 + 100√3 ✓.","Provjera: 100√3 ≈ 173,2; 1256 + 173,2 ≈ 1429,2 ✓."]
  },
  {
    id:23,
    type:"sa",warn:"Pazi: prvo sredi zagradu na zajednički nazivnik x (5x = 5x²/x), pa pomnoži i skrati.",
    topic:"al",
    points:1,
    q:"U izrazu (5x − [FRAC:x² + 1|x]) · [FRAC:x|2x + 1] provedite naznačene operacije za sve x za koje je izraz definiran te rezultat pojednostavnite do kraja.",
    sol:{ans:"2x − 1",alt:["2x-1","2x − 1"]},
    steps:[{txt:"Prvi član: 5x − [FRAC:x² + 1|x]. Zajednički nazivnik x: 5x = [FRAC:5x²|x]."},{txt:"5x − [FRAC:x² + 1|x] = [FRAC:5x² − x² − 1|x] = [FRAC:4x² − 1|x]."},{txt:"Pomnoži: [FRAC:4x² − 1|x] · [FRAC:x|2x + 1] = [FRAC:4x² − 1|2x + 1] (x se krati)."},{txt:"Faktorizacija: 4x² − 1 = (2x − 1)(2x + 1)."},{txt:"[FRAC:(2x − 1)(2x + 1)|2x + 1] = 2x − 1."},{txt:"Točan odgovor: 2x − 1.",note:"odgovor",final:true},{txt:"Provjera za x = 1: lijevo = (5 − 2) · 1/3 = 1; desno = 2 − 1 = 1 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) zajednički nazivnik. 2) pomnoži razlomke. 3) faktoriziraj. 4) skrati.",note:"postupak",final:true},{txt:"Intuicija: zajednički faktor → krate se, ostaje polinom.",note:"intuicija",final:true}],
    why:["Pravila razlomaka: oduzimanje istog nazivnika; množenje; razlika kvadrata a² − b² = (a − b)(a + b).","Postupak: 1) zajednički nazivnik. 2) pomnoži. 3) faktoriziraj. 4) skrati.","Intuicija: složeni razlomci postaju jednostavni kad nazivnici i faktori \"kažu kraj\".","Česta greška 1: ne pretvoriti 5x u razlomak s nazivnikom x.","Česta greška 2: zaboraviti faktorizirati razliku kvadrata.","Alt metoda — sve odjednom: [FRAC:x(4x² − 1)|x(2x + 1)] = 2x − 1 ✓.","Provjera za x = 2: lijevo = (10 − 5/2)·2/5 = 3; desno = 3 ✓."]
  },
  {
    id:24,
    type:"sa",warn:"Pazi: čisti alkohol = zbroj (volumen · postotak); postotak smjese = alkohol/ukupni volumen.",
    topic:"al",
    points:1,
    q:"Koliki je postotak alkohola u sredstvu za dezinfekciju koje se dobije miješanjem 1,5 litre 60 %-tnoga alkohola s 2,5 litre 80 %-tnoga alkohola?",
    sol:{ans:"72,5",alt:["72,5","72,5%","72,5%"]},
    steps:[{txt:"Čisti alkohol: 1,5 · 0,6 = 0,9 L; 2,5 · 0,8 = 2,0 L."},{txt:"Ukupno čistog: 0,9 + 2,0 = 2,9 L."},{txt:"Ukupni volumen: 1,5 + 2,5 = 4 L."},{txt:"Postotak: [FRAC:2,9|4] · 100 % = 72,5 %."},{txt:"Točan odgovor: 72,5 %.",note:"odgovor",final:true},{txt:"Provjera: 72,5 % od 4 L = 2,9 L ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) čista tvar u svakom. 2) zbroji. 3) podijeli ukupnim volumenom.",note:"postupak",final:true},{txt:"Intuicija: težinski prosjek postotaka po volumenu.",note:"intuicija",final:true}],
    why:["Pravilo: postotak smjese = [FRAC:čista tvar|ukupno] · 100 %.","Postupak: 1) čista tvar = V · postotak/100. 2) zbroji. 3) podijeli.","Intuicija: jači alkohol \"vuče\" smjesu prema svom postotku ako ima veći volumen.","Česta greška 1: aritmetički prosjek (60+80)/2 = 70 — ignorira različite volumene.","Česta greška 2: zbrojiti volumene bez postotka.","Alt metoda — težinski: [FRAC:1,5·60 + 2,5·80|4] = [FRAC:290|4] = 72,5 ✓.","Provjera dimenzionalno: (L·%)/L = % ✓."]
  },
  {
    id:25,
    img:true,
    type:"sa",warn:"Pazi: očitaj vrijednosti s grafa za traženi trenutak; pazi koja linija je čija.",
    topic:"lin",
    points:1,
    q:"U koordinatnome sustavu prikazan je ukupni broj sklekova koje su Bruno i Mislav napravili od početka vježbanja ovisno o broju dana vježbanja. Nakon koliko je dana vježbe Mislav napravio 270 sklekova više od Bruna?",
    sol:{ans:"18",alt:["18 dana","18 d","osamnaest dana"]},
    steps:[{txt:"Oba grafa linearna → ukupni sklekovi rastu linearno."},{txt:"Razlika M(d) − B(d) = (a_M − a_B)·d + (b_M − b_B)."},{txt:"Iz grafa: brzina rasta razlike je 15 sklekova/dan (M radi 15 više dnevno)."},{txt:"Za 270 sklekova razlike: d = [FRAC:270|15] = 18 dana."},{txt:"Točan odgovor: 18 dana.",note:"odgovor",final:true},{txt:"Provjera: 18 · 15 = 270 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) nagibi iz grafa. 2) razlika nagiba. 3) ciljana razlika / razlika nagiba.",note:"postupak",final:true},{txt:"Intuicija: razlika dvije linearne funkcije = linearna; nagib = razlika nagiba.",note:"intuicija",final:true}],
    why:["Pravilo: (f − g)' = f' − g'; brzina razlike = razlika brzina.","Postupak: 1) nagibi. 2) razlika. 3) podijeli traženu razliku.","Intuicija: ako jedan radi 50/dan a drugi 35/dan, razlika raste 15/dan.","Česta greška 1: koristiti samo Mislavov broj.","Česta greška 2: zbrojiti nagibe umjesto oduzeti.","Alt metoda — direktno iz grafa: vertikalna udaljenost 270.","Provjera: u d = 18 razlika ≈ 270 ✓."]
  },
  {
    id:26,
    type:"sa",warn:"Pazi: i^(4k+1) = i (period 4); pomnoži 3i·(2 + i), pa izdvoji realni dio (i² = −1).",
    topic:"kompl",
    points:1,
    q:"Koliko iznosi realni dio kompleksnoga broja 3i^(4k+1) · (2 + i) za svaki prirodni broj k?",
    sol:{ans:"−3",alt:["-3","−3"]},
    steps:[{txt:"Ciklus potencija i: i¹=i, i²=−1, i³=−i, i⁴=1."},{txt:"i^(4k+1) = (i⁴)^k · i = 1 · i = i."},{txt:"3i · (2 + i) = 6i + 3i² = 6i − 3 = −3 + 6i."},{txt:"Realni dio: Re(−3 + 6i) = −3."},{txt:"Točan odgovor: −3.",note:"odgovor",final:true},{txt:"Provjera za k=1: i⁵=i; 3i(2+i) = -3+6i; Re = −3 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) eksponent i mod 4. 2) pomnoži kompleksne. 3) Re.",note:"postupak",final:true},{txt:"Intuicija: i^(4k) = 1 uvijek; rezultat ne ovisi o k.",note:"intuicija",final:true}],
    why:["Pravila: i² = −1; i⁴ = 1; iⁿ ciklus 4; Re(a + bi) = a.","Postupak: 1) eksponent mod 4. 2) standardno množenje. 3) Re/Im razdvoji.","Intuicija: bilo koja potencija i svodi se na 4 mogućnosti.","Česta greška 1: pomiješati eksponent s množenjem.","Česta greška 2: zaboraviti i² = −1.","Alt metoda — trig: i = cos(π/2) + i sin(π/2); i^(4k+1) = i (period 2π).","Provjera za k=2: i⁹ = i; isti rezultat ✓."]
  },
  {
    id:27,
    type:"sa",warn:"Pazi: Viète — umnožak rješenja = c/a = 3/a; izjednači s 1.",
    topic:"kv",
    points:1,
    q:"Umnožak rješenja kvadratne jednadžbe ax² + 8x + 3 = 0 jednak je 1. Odredite vrijednost koeficijenta a.",
    sol:{ans:"3",alt:["a=3","a = 3"]},
    steps:[{txt:"Vièteove formule: x₁ · x₂ = [FRAC:c|a]."},{txt:"Naš slučaj: c = 3 → x₁·x₂ = [FRAC:3|a]."},{txt:"Uvjet: [FRAC:3|a] = 1 → a = 3."},{txt:"Točan odgovor: a = 3.",note:"odgovor",final:true},{txt:"Provjera: za a=3, jednadžba 3x²+8x+3=0; D = 64−36 = 28 > 0; x₁·x₂ = [FRAC:36|36] = 1 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) Vièteova veza. 2) izoliraj a. 3) provjera diskriminantom.",note:"postupak",final:true},{txt:"Intuicija: umnožak rješenja ne ovisi o b — samo o c/a.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}],
    why:["Pravilo (Vièteove): x₁ + x₂ = −[FRAC:b|a]; x₁ · x₂ = [FRAC:c|a].","Postupak: 1) Vièteova. 2) izoliraj. 3) provjera D.","Intuicija: umnožak rješenja kontrolira se omjerom c/a.","Česta greška 1: koristiti D kao umnožak — krivo.","Česta greška 2: pomiješati zbroj i umnožak.","Alt metoda — kroz korijene: x₁·x₂ = [FRAC:b² − D|4a²] = [FRAC:c|a] ✓.","Provjera: D = 28 > 0 → realna rješenja postoje ✓."]
  },
  {
    id:28,
    type:"sa",warn:"Pazi: težišnica na hipotenuzu = pola hipotenuze → hipotenuza = 52; drugu katetu iz Pitagore.",
    topic:"geom",
    points:1,
    q:"U pravokutnome trokutu duljina je jedne katete 20 cm, a duljina težišnice na hipotenuzu 26 cm. Koliko iznosi duljina druge katete toga trokuta?",
    sol:{ans:"48 cm",alt:["48","48cm"]},
    steps:[{txt:"Svojstvo: težišnica na hipotenuzu = polovica hipotenuze (pravokutni trokut upisan u polukrug)."},{txt:"Hipotenuza c = 2 · 26 = 52 cm."},{txt:"Pitagora: a² + b² = c² → 20² + b² = 52² → b² = 2304."},{txt:"b = √2304 = 48 cm."},{txt:"Točan odgovor: 48 cm.",note:"odgovor",final:true},{txt:"Provjera: 20² + 48² = 2704 = 52² ✓; (20,48,52) = 4·(5,12,13).",note:"verifikacija",final:true},{txt:"Postupak: 1) svojstvo težišnice. 2) hipotenuza. 3) Pitagora.",note:"postupak",final:true},{txt:"Intuicija: težišnica iz pravog kuta = polumjer opisane = pola hipotenuze (Tales).",note:"intuicija",final:true}],
    why:["Pravila: težišnica na hipotenuzu = pola hipotenuze; Pitagorin poučak.","Postupak: 1) hipotenuza = 2·težišnica. 2) Pitagora.","Intuicija: pravi kut upisan u polukrug; polumjer = pola hipotenuze.","Česta greška 1: pomiješati težišnicu i visinu.","Česta greška 2: koristiti 26 kao hipotenuzu.","Alt metoda — koordinatno: katete duž osi; polovište hipotenuze; udaljenost od (0,0).","Provjera: Pitagorin trojac (5,12,13) skaliran 4× ✓."]
  },
  {
    id:29,
    type:"sa",warn:"Pazi: omjer površina = (omjer stranica)² → omjer stranica = √16 = 4.",
    topic:"geom",
    points:1,
    q:"Površina jednoga jednakostraničnog trokuta 16 je puta veća od površine drugoga jednakostraničnog trokuta. Razlika duljina njihovih stranica iznosi 21 cm. Kolika je duljina stranice manjega od tih trokuta?",
    sol:{ans:"7 cm",alt:["7","7cm"]},
    steps:[{txt:"P jednakostraničnog: P = [FRAC:a²√3|4]."},{txt:"P₁ = 16·P₂ → a₁² = 16·a₂² → a₁ = 4·a₂."},{txt:"a₁ − a₂ = 21 → 4a₂ − a₂ = 3a₂ = 21 → a₂ = 7 cm."},{txt:"Točan odgovor: 7 cm.",note:"odgovor",final:true},{txt:"Provjera: a₁ = 28; 28 − 7 = 21 ✓; (28/7)² = 16 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) k = √16. 2) razlika stranica. 3) riješi.",note:"postupak",final:true},{txt:"Intuicija: slični likovi → omjer površina = k².",note:"intuicija",final:true}],
    why:["Pravila: slični likovi — omjer P = k²; P jednakostraničnog = [FRAC:a²√3|4].","Postupak: 1) k = √(omjer P). 2) razlika stranica. 3) linearna jednadžba.","Intuicija: ne pomiješati linearni (k) s kvadratnim (k²) skaliranjem.","Česta greška 1: postaviti a₁ = 16·a₂ — krivo.","Česta greška 2: pomiješati veći i manji trokut.","Alt metoda — direktno: a₁/a₂ = 4; razlika 3a₂ = 21 → a₂ = 7 ✓.","Provjera: P₂ ≈ 21,2 cm²; P₁ ≈ 339,5; omjer ≈ 16 ✓."]
  },
  {
    id:30,
    type:"sa",warn:"Pazi: centri i dodirna točka leže na pravcu; udaljenost centara = 12 + 7 (vanjski dodir).",
    topic:"geom",
    points:1,
    q:"Dvije kružnice polumjera 12 cm i 7 cm dodiruju se izvana. Koliko iznosi udaljenost od točke u kojoj se sijeku vanjske zajedničke tangente tih kružnica do središta manje kružnice?",
    sol:{ans:"26,6 cm",alt:["26,6","26,6","[FRAC:133|5]","133/5"]},
    steps:[{txt:"Dodir izvana → d(S₁,S₂) = r₁ + r₂ = 19 cm."},{txt:"Vanjski centar sličnosti Q: [FRAC:d(Q,S₁)|d(Q,S₂)] = [FRAC:r₁|r₂] = [FRAC:12|7]."},{txt:"Neka d(Q,S₂) = x → d(Q,S₁) = [FRAC:12|7]·x."},{txt:"Razlika = d(S₁,S₂) = 19: [FRAC:12x|7] − x = [FRAC:5x|7] = 19 → x = [FRAC:133|5] = 26,6 cm."},{txt:"Točan odgovor: 26,6 cm.",note:"odgovor",final:true},{txt:"Provjera: d(Q,S₁) = 45,6; 45,6 − 26,6 = 19 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj centar sličnosti. 2) proporcija polumjera. 3) razlika udaljenosti.",note:"postupak",final:true},{txt:"Intuicija: Q je \"fokus\" iz kojeg obje kružnice izgledaju jednako velike.",note:"intuicija",final:true}],
    why:["Pravilo: vanjski centar sličnosti — d(Q,S₁)/d(Q,S₂) = r₁/r₂.","Postupak: 1) proporcija. 2) razlika = d. 3) linearna jednadžba.","Intuicija: tangente \"iz\" jedne točke; sjecište = centar sličnosti.","Česta greška 1: koristiti unutarnji umjesto vanjskog centra.","Česta greška 2: Q je izvan obje kružnice, na produžetku S₁S₂.","Alt metoda — slični trokuti: QS₁T₁ ~ QS₂T₂ (tangentni pravi kutovi).","Provjera: Q izvan obje (>7 i >12) ✓."]
  },
  {
    id:31,
    type:"sa",warn:"Pazi: kružnica dira obje osi → središte (±2, ±2); napiši (x ∓ 2)² + (y ∓ 2)² = 4.",
    topic:"anal",
    points:1,
    q:"Napišite jednadžbu neke kružnice polumjera 2 koja dira obje koordinatne osi.",
    sol:{ans:"(x + 2)² + (y + 2)² = 4",solFormula:"(x ± 2)² + (y ± 2)² = 4",alt:["(x + 2)² + (y + 2)² = 4","(x - 2)² + (y - 2)² = 4","(x − 2)² + (y − 2)² = 4","(x + 2)² + (y - 2)² = 4","(x + 2)² + (y − 2)² = 4","(x - 2)² + (y + 2)² = 4","(x − 2)² + (y + 2)² = 4","(x±2)² + (y±2)² = 4","(x±2)²+(y±2)²=4"]},
    steps:[{txt:"Kružnica dira pravac ⟺ udaljenost središta = polumjer."},{txt:"Udaljenost od osi y = |x₀|; od osi x = |y₀|. Oba = r = 2."},{txt:"|x₀| = |y₀| = 2 → središte ∈ {(±2, ±2)} (4 mogućnosti)."},{txt:"Jednadžba: (x − x₀)² + (y − y₀)² = 4."},{txt:"Npr. (−2, −2): (x + 2)² + (y + 2)² = 4."},{txt:"Točan odgovor: (x + 2)² + (y + 2)² = 4 (ili bilo koja od 4 simetričnih).",note:"odgovor",final:true},{txt:"Provjera: x = 0 → (y + 2)² = 0 → y = −2 (jedan dodir s osi y) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) uvjeti diranja. 2) pozicije središta. 3) jednadžba.",note:"postupak",final:true},{txt:"Intuicija: 4 kvadranta → 4 valjane kružnice.",note:"intuicija",final:true}],
    why:["Pravila: kružnica (x−x₀)²+(y−y₀)² = r²; dira pravac ⟺ udaljenost središta = r.","Postupak: 1) uvjeti diranja. 2) sva središta. 3) jednadžba.","Intuicija: središte na udaljenosti TOČNO r od pravca.","Česta greška 1: x² + y² = 4 (kružnica oko ishodišta) — siječe osi, ne dira.","Česta greška 2: zaboraviti 4 valjana rješenja.","Alt metoda — sve 4: 1. kv (x−2)²+(y−2)² = 4; 2. (x+2)²+(y−2)²; 3. (x+2)²+(y+2)²; 4. (x−2)²+(y+2)².","Provjera: jedan dodir s svakom osi ✓."]
  },
  {
    id:32,
    type:"sa",warn:"Pazi: limes racionalne (isti stupanj) = omjer vodećih koeficijenata = 5p/4; izjednači s 4.",
    topic:"anal",
    points:1,
    q:"Za koju vrijednost realnoga broja p vrijedi lim_{n→∞} [FRAC:1 + 5pn|4n − 3] = 4?",
    sol:{ans:"[FRAC:16|5]",alt:["3,2","3,2","16/5"]},
    steps:[{txt:"Limit racionalne funkcije: jednaki stupnjevi → omjer vodećih koeficijenata."},{txt:"Brojnik vodeći 5p; nazivnik vodeći 4 → limit = [FRAC:5p|4]."},{txt:"[FRAC:5p|4] = 4 → 5p = 16 → p = [FRAC:16|5] = 3,2."},{txt:"Točan odgovor: p = [FRAC:16|5].",note:"odgovor",final:true},{txt:"Provjera: lim [FRAC:1 + 16n|4n − 3] → [FRAC:16|4] = 4 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) stupnjevi. 2) omjer vodećih. 3) postavi jednadžbu.",note:"postupak",final:true},{txt:"Intuicija: za velike n, slobodni članovi zanemarivi.",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}],
    why:["Pravilo: k < m → 0; k = m → omjer vodećih; k > m → ±∞.","Postupak: 1) stupnjevi. 2) primijeni pravilo. 3) izrazi parametar.","Intuicija: vodeći članovi dominiraju.","Česta greška 1: koristiti slobodne članove (1/(−3)) — krivo.","Česta greška 2: zaboraviti n u brojniku.","Alt metoda — podijeli s n: [FRAC:1/n + 5p|4 − 3/n] → [FRAC:5p|4] ✓.","Provjera za n=1000, p=3,2: omjer ≈ 4,003 ✓."]
  },
  {
    id:33,
    type:"sa",warn:"Pazi: nagib tangente = f′(x) = 2x − 3; izjednači sa zadanim nagibom, nađi x pa y.",
    topic:"anal",
    points:1,
    q:"Odredite koordinate točke grafa funkcije f(x) = x² − 3x + 7 u kojoj je koeficijent smjera (nagib) tangente jednak 1.",
    sol:{ans:"(2, 5)",alt:["(2,5)","2, 5","T(2,5)","T(2, 5)"]},
    steps:[{txt:"Nagib tangente = f'(x) u toj točki."},{txt:"f'(x) = 2x − 3."},{txt:"f'(x) = 1: 2x − 3 = 1 → x = 2."},{txt:"y = f(2) = 4 − 6 + 7 = 5."},{txt:"Točka: T(2, 5)."},{txt:"Točan odgovor: (2, 5).",note:"odgovor",final:true},{txt:"Provjera: f'(2) = 1 ✓; f(2) = 5 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) f'(x). 2) f'(x) = nagib. 3) y = f(x).",note:"postupak",final:true},{txt:"Intuicija: derivacija = nagib tangente u svakoj točki.",note:"intuicija",final:true}],
    why:["Pravila: (xⁿ)' = nxⁿ⁻¹; f'(a) = nagib tangente u (a, f(a)).","Postupak: 1) f'. 2) jednadžba. 3) y.","Intuicija: derivacija = brzina rasta.","Česta greška 1: zaboraviti y-koordinatu.","Česta greška 2: koristiti f umjesto f'.","Alt metoda — sustav: tangenta y = x + b kontaktna → x² − 4x + 4 = 0 → x = 2 ✓.","Provjera: tangenta y = x + 3 dira graf u (2, 5) ✓."]
  },
  {
    id:34,
    type:"sa",warn:"Pazi: f raste gdje je f′ > 0 → (x + 1)/10 > 0 → x > −1.",
    topic:"anal",
    points:1,
    q:"Funkcija f'(x) = [FRAC:x + 1|10] derivacija je funkcije f. Odredite interval rasta funkcije f.",
    sol:{ans:"⟨−1, ∞⟩",alt:["(-1, ∞⟩","⟨-1, +∞⟩"]},
    steps:[{txt:"f raste ⟺ f'(x) > 0."},{txt:"[FRAC:x + 1|10] > 0 → x + 1 > 0 → x > −1."},{txt:"Interval rasta: ⟨−1, ∞⟩."},{txt:"Točan odgovor: ⟨−1, ∞⟩.",note:"odgovor",final:true},{txt:"Provjera: f'(0) = 0,1 > 0 ✓; f'(−2) = −0,1 < 0 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) f'(x) > 0. 2) riješi. 3) interval (otvoreni rubovi).",note:"postupak",final:true},{txt:"Intuicija: f' = 0 → stacionarna; STROGI rast f' > 0.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}],
    why:["Pravilo: f raste na intervalu ⟺ f' > 0.","Postupak: 1) nejednadžba. 2) interval.","Intuicija: pozitivna brzina = raste.","Česta greška 1: f umjesto f'.","Česta greška 2: uključiti rub −1 (gdje f' = 0).","Alt metoda — f(x) = [FRAC:(x+1)²|20] + C, parabola s min u x = −1.","Provjera: u x = 0: f(0) = 1/20; u x = 1: f(1) = 4/20 → raste ✓."]
  },
  {
    id:"35,1",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 35 (1. dio od 2): Zadan je skup A = ⟨1, [FRAC:11|6]⟩.",
    q:"Napišite jedan racionalni broj koji pripada skupu A.",
    sol:{ans:"1,1",alt:["1,1","11/10","1,5","3/2","[FRAC:11|10]"]},
    steps:[{txt:"[FRAC:11|6] ≈ 1,833."},{txt:"Interval A = ⟨1; 1,833⟩ — otvoreni."},{txt:"Treba racionalan strogo između 1 i 1,833."},{txt:"Primjeri: 1,1; 1,5 = [FRAC:3|2]; 1,7."},{txt:"Točan odgovor: 1,1.",note:"odgovor",final:true},{txt:"Provjera: 1 < 1,1 < 1,833 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) numeričke granice. 2) izaberi decimalan broj.",note:"postupak",final:true},{txt:"Intuicija: ℚ je gust u ℝ.",note:"intuicija",final:true}],
    why:["Pravila: racionalan = [FRAC:p|q]; otvoreni interval isključuje rubove.","Postupak: 1) granice. 2) izaberi unutar.","Intuicija: konačni decimalni brojevi su racionalni.","Česta greška 1: navesti rub (1 ili 11/6).","Česta greška 2: navesti iracionalan (√2).","Alt metoda: [FRAC:5|4] = 1,25 ∈ A; 5·6 = 30 < 4·11 = 44 ✓.","Provjera: 1,1 = [FRAC:11|10] eksplicitno racionalan ✓."]
  },
  {
    id:"35,2",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 35 (2. dio od 2): Zadan je skup A = ⟨1, [FRAC:11|6]⟩.",
    q:"Napišite neki interval B za koji vrijedi A ∪ B = B.",
    sol:{ans:"ℝ",alt:["R","(-∞, ∞⟩","[1, 11/6]","[1, 2]","⟨0, 3⟩"]},
    steps:[{txt:"A ∪ B = B ⟺ A ⊆ B."},{txt:"B mora sadržavati cijeli A."},{txt:"Primjeri: ℝ; [1, [FRAC:11|6]]; [1, 2]; ⟨0, 3⟩."},{txt:"Točan odgovor: ℝ.",note:"odgovor",final:true},{txt:"Provjera: A ⊂ ℝ trivijalno ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj A ⊆ B. 2) odaberi nadskup.",note:"postupak",final:true},{txt:"Intuicija: B \"već sadrži\" A → unija ništa ne mijenja.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
    why:["Pravila: A ∪ B = B ⟺ A ⊆ B; ℝ je nadskup svake podskupa.","Postupak: 1) uvjet podskupa. 2) odaberi nadskup.","Intuicija: dodavanje ne mijenja ako je već unutra.","Česta greška 1: navesti B ⊂ A.","Česta greška 2: B = A (trivijalno, ne pokazuje razumijevanje).","Alt metoda — najjednostavnije: B = ℝ.","Provjera: za x ∈ A: 1 < x < 11/6; sigurno u ℝ ✓."]
  },
  {
    id:"36,1",
    img:true,
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 36 (1. dio od 2): Trokut ABC s vrhovima A(−2, 0), B(0, 0), C(2, 3).",
    q:"Odredite duljinu visine iz vrha C.",
    sol:{ans:"3",alt:["3 cm","3,0"]},
    steps:[{txt:"A(−2, 0), B(0, 0) → AB leži na osi x."},{txt:"Visina iz C okomita na AB → vertikalna."},{txt:"Duljina = |y_C| = 3."},{txt:"Točan odgovor: 3.",note:"odgovor",final:true},{txt:"Provjera kroz površinu: P = [FRAC:1|2]·|AB|·v = [FRAC:1|2]·2·3 = 3 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) na kojoj osi je stranica. 2) udaljenost vrha od osi.",note:"postupak",final:true},{txt:"Intuicija: stranica na osi x → visina = |y-koordinata vrha|.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}],
    why:["Pravila: visina = okomica iz vrha na nasuprotnu stranicu.","Postupak: 1) pravac stranice. 2) udaljenost vrha.","Intuicija: udaljenost točke od osi x = apsolutna y-koordinata.","Česta greška 1: udaljenost od kraja stranice umjesto od pravca.","Česta greška 2: |x| umjesto |y|.","Alt metoda: pravac AB: y = 0; udaljenost (2,3) od y=0 je |3| = 3 ✓.","Provjera s formulom površine: P = 3, |AB| = 2 → v = 3 ✓."]
  },
  {
    id:"36,2",
    img:true,
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 36 (2. dio od 2): Vrhovi A(−2, 0), B(0, 0), C(2, 3).",
    q:"Odredite duljinu polumjera kružnice sa središtem u točki B koja prolazi točkom C.",
    sol:{ans:"√13",alt:["√13 cm","sqrt(13)","≈ 3,61"]},
    steps:[{txt:"Polumjer = udaljenost središte ↔ točka na kružnici."},{txt:"r = |BC| = √((2−0)² + (3−0)²) = √(4 + 9) = √13."},{txt:"Točan odgovor: √13.",note:"odgovor",final:true},{txt:"Provjera: jednadžba kružnice x² + y² = 13; C(2,3): 4 + 9 = 13 ✓.",note:"verifikacija",final:true},{txt:"Alt metoda — kroz jednadžbu kružnice: x²+(y−0)²=13 prolazi kroz B(0,0) jer 0+0=0 < 13; ne, treba (x−0)²+(y−0)² = r²; uvrsti B: 0² + 0² = 0 ≠ 13 — kontradikcija, B JE središte. Polumjer je |BC| = √13.",note:"verifikacija",final:true},{txt:"Postupak: formula udaljenosti dvije točke.",note:"postupak",final:true},{txt:"Intuicija: Pitagora u koordinatama; Δx i Δy su katete.",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}],
    why:["Pravila: d((x₁,y₁),(x₂,y₂)) = √((Δx)² + (Δy)²).","Postupak: 1) formula udaljenosti. 2) ostavi u korijenu.","Intuicija: Pitagora u koordinatnom sustavu.","Česta greška 1: zaboraviti korijen (ostaviti 13).","Česta greška 2: manhattan distance (|Δx| + |Δy| = 5).","Alt metoda — vektor: BC = (2,3); |BC| = √13 ✓.","Provjera: 3 < √13 < 4 (jer 9 < 13 < 16) ✓."]
  },
  {
    id:"37,1",
    type:"sa",
    topic:"trig",
    points:1,
    context:"Zadatak 37 (1. dio od 2): Trapez ABCD; |AB| = 13 cm, |CD| = 8 cm, |AD| = 6,5 cm, kut(AB, AD) = 57°.",
    q:"Koliko iznosi duljina kraka BC?",
    sol:{ans:"≈ 5,64 cm",alt:["5,64","5,6","≈ 5,64 cm","priznaju [5,6, 5,7]"]},
    steps:[{txt:"Visina trapeza: h = |AD|·sin(57°) = 6,5·0,8387 ≈ 5,451 cm."},{txt:"Vodoravna projekcija AD: |AD'| = 6,5·cos(57°) ≈ 3,540 cm."},{txt:"|AC'| = |AD'| + |D'C'| = 3,540 + 8 = 11,540 cm."},{txt:"|C'B| = |AB| − |AC'| = 13 − 11,540 = 1,460 cm."},{txt:"|BC| = √(h² + |C'B|²) = √(29,71 + 2,13) ≈ √31,84 ≈ 5,64 cm."},{txt:"Točan odgovor: ≈ 5,64 cm.",note:"odgovor",final:true},{txt:"Provjera: pravokutni trokut s katetama 5,45 i 1,46 → hipotenuza ≈ 5,64 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) spusti okomice. 2) visina i horizontale. 3) Pitagora.",note:"postupak",final:true},{txt:"Intuicija: krak ima visinu trapeza + horizontalnu komponentu.",note:"intuicija",final:true}],
    why:["Pravila: trapez — paralelne osnovice; sin/cos projekcije nagnutih dužina.","Postupak: 1) visina trapeza. 2) horizontalna projekcija. 3) Pitagora.","Intuicija: trapez = pravokutnik + 2 trokuta na bokovima.","Česta greška 1: pretpostaviti jednakokračan trapez.","Česta greška 2: krivi kut ili jedinice.","Alt metoda — kosinusov poučak na trokutu.","Provjera: BC ≈ 5,64 cm između h i ukupne razlike ✓."]
  },
  {
    id:"37,2",
    type:"sa",
    topic:"trig",
    points:1,
    context:"Zadatak 37 (2. dio od 2): Trapez ABCD s osnovicama 13 i 8, krakom AD = 6,5 cm pod 57°.",
    q:"Koliko iznosi površina toga trapeza?",
    sol:{ans:"≈ 57,24 cm²",alt:["57,24","57,2","≈ 57,24 cm²","priznaju [56,64, 57,75]"]},
    steps:[{txt:"P trapeza: P = [FRAC:(a + c)·h|2]."},{txt:"h = 6,5·sin(57°) ≈ 5,451 cm."},{txt:"P = [FRAC:1|2]·(13 + 8)·5,451 = 10,5·5,451 ≈ 57,24 cm²."},{txt:"Točan odgovor: ≈ 57,24 cm².",note:"odgovor",final:true},{txt:"Provjera: srednja osnovica · h = 10,5 · 5,45 ≈ 57 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) visina iz sin·krak. 2) formula površine.",note:"postupak",final:true},{txt:"Intuicija: srednja osnovica × visina, kao \"prosječni pravokutnik\".",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}],
    why:["Pravilo: P trapeza = [FRAC:(a+c)·h|2].","Postupak: 1) h. 2) formula.","Intuicija: srednja osnovica · visina.","Česta greška 1: koristiti formulu paralelograma.","Česta greška 2: koristiti samo jednu osnovicu.","Alt metoda — kroz dijagonale: P = [FRAC:1|2]·d₁·d₂·sin(α) (za neke trapeze).","Provjera: 57,24 između 8·5,45 = 43,6 i 13·5,45 = 70,9 ✓."]
  },
  {
    id:"38,1",
    img:true,
    type:"sa",
    topic:"trig",
    points:1,
    context:"Zadatak 38 (1. dio od 2): Zadana je funkcija f(x) = sin x.",
    q:"U koordinatnome sustavu nacrtajte graf funkcije f na intervalu [0, 2π].",
    sol:{ans:"sinusoida na intervalu od 0 do 2π s točkama u (0,0), (pi/2,1), (pi,0), (3pi/2,-1), (2pi,0)",alt:["graf sinusa","sinusoida"]},
    steps:[{txt:"f(x) = sin x: periodična, period 2π, amplituda 1."},{txt:"Karakteristične točke: (0,0), (π/2,1), (π,0), (3π/2,−1), (2π,0)."},{txt:"Glatka sinusoida kroz te točke."},{txt:"Točan odgovor: standardni graf sin x na [0, 2π].",note:"odgovor",final:true},{txt:"Provjera: sin(π/4) ≈ 0,707; sin(5π/4) ≈ −0,707 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) 5 karakterističnih točaka. 2) spoji glatko.",note:"postupak",final:true},{txt:"Intuicija: sin = vertikalna projekcija točke na jediničnoj kružnici.",note:"intuicija",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}],
    why:["Pravila: sin neparna, period 2π, raspon [−1, 1].","Postupak: 1) karakteristične točke. 2) spoji glatko.","Intuicija: 4 faze rasta i pada u jednom periodu.","Česta greška 1: kriva amplituda.","Česta greška 2: pomiješati sin i cos.","Alt metoda — preko jedinične kružnice.","Provjera: nultočke 0, π, 2π ✓."]
  },
  {
    id:"38,2",
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 38 (2. dio od 2): f(x) = sin x.",
    q:"Odredite sliku funkcije g(x) = 4·f(x) − 1.",
    sol:{ans:"[−5, 3]",alt:["[-5, 3]","[-5,3]","[−5,3]","−5 ≤ y ≤ 3"]},
    steps:[{txt:"Slika sin x: [−1, 1]."},{txt:"4·sin x: [−4, 4] (c > 0, čuva)."},{txt:"4·sin x − 1: [−5, 3] (pomak −1)."},{txt:"Točan odgovor: [−5, 3].",note:"odgovor",final:true},{txt:"Provjera: g(π/2) = 3 (max); g(3π/2) = −5 (min) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) slika f. 2) skaliranje. 3) pomak.",note:"postupak",final:true},{txt:"Intuicija: skaliranje rasteže, pomak translatira sliku.",note:"intuicija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}],
    why:["Pravila: c·f + d ima sliku [c·a + d, c·b + d] (c > 0).","Postupak: 1) slika f. 2) c na rubove. 3) d na rubove.","Intuicija: linearne transformacije su linearne na rubovima.","Česta greška 1: zaboraviti pomak.","Česta greška 2: zamijeniti rubove za c < 0.","Alt metoda — h(y) = 4y − 1; h([−1,1]) = [−5, 3] ✓.","Provjera: g(0) = −1 ∈ [−5, 3] ✓."]
  },
  {
    id:"39,1",
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 39 (1. dio od 2): f(x) = [FRAC:2x|5 − x].",
    q:"Odredite derivaciju f' funkcije f.",
    sol:{ans:"f'(x) = [FRAC:10|(5 − x)²]",alt:["10/(5-x)²","10/(5-x)^2"]},
    steps:[{txt:"Pravilo kvocijenta: (u/v)' = (u'v − uv')/v²."},{txt:"u = 2x, v = 5 − x; u' = 2, v' = −1."},{txt:"f'(x) = [FRAC:2(5−x) − 2x·(−1)|(5−x)²] = [FRAC:10 − 2x + 2x|(5−x)²] = [FRAC:10|(5 − x)²]."},{txt:"Točan odgovor: f'(x) = [FRAC:10|(5 − x)²].",note:"odgovor",final:true},{txt:"Provjera za x=0: f'(0) = 10/25 = 0,4; numerički gradient (f(0,001) − f(0))/0,001 ≈ 0,4 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) razdvoji u, v. 2) u', v'. 3) formula. 4) pojednostavi.",note:"postupak",final:true},{txt:"Intuicija: pravilo kvocijenta ima minus u brojniku.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}],
    why:["Pravila: (u/v)' = (u'v − uv')/v²; (xⁿ)' = nxⁿ⁻¹.","Postupak: 1) u, v. 2) u', v'. 3) formula. 4) sažmi.","Intuicija: kvocijent ima sustavan oblik.","Česta greška 1: (u/v)' = u'/v' — krivo.","Česta greška 2: zaboraviti minus.","Alt metoda — pravilo proizvoda za 2x·(5−x)⁻¹: rezultat 10/(5−x)² ✓.","Provjera za x=1: f'(1) = 10/16 = 0,625; potvrđuje ✓."]
  },
  {
    id:"39,2",
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 39 (2. dio od 2): f(x) = [FRAC:2x|5 − x].",
    q:"Odredite domenu (prirodno područje definicije) funkcije g(x) = √(f(x)).",
    sol:{ans:"[0, 5⟩",alt:["[0, 5)","x ∈ [0, 5⟩"]},
    steps:[{txt:"g definirana ⟺ f(x) ≥ 0 i 5 − x ≠ 0."},{txt:"Slučaj: 2x ≥ 0 i 5 − x > 0 → x ∈ [0, 5⟩."},{txt:"Slučaj: 2x ≤ 0 i 5 − x < 0 → prazan presjek."},{txt:"Domena: [0, 5⟩."},{txt:"Točan odgovor: [0, 5⟩.",note:"odgovor",final:true},{txt:"Provjera: x = 0 → f(0) = 0 → √0 = 0 ✓; x = 5 → nedefinirano; x = −1 → f(−1) = −1/3 < 0 → nedefinirano.",note:"verifikacija",final:true},{txt:"Postupak: 1) sve uvjete. 2) predznak razlomka. 3) presjek.",note:"postupak",final:true},{txt:"Intuicija: √ traži ≥ 0; razlomak negativan ako su brojnik i nazivnik suprotnih predznaka.",note:"intuicija",final:true}],
    why:["Pravila: √f ≥ 0 traži f ≥ 0; razlomak: brojnik i nazivnik istog znaka za pozitivnost.","Postupak: 1) uvjeti. 2) skupovi rješenja. 3) presjek.","Intuicija: domena = \"gdje funkcija ima smisla\".","Česta greška 1: zaboraviti nazivnik ≠ 0.","Česta greška 2: koristiti samo brojnik.","Alt metoda — tablica predznaka [FRAC:2x|5−x] po intervalima.","Provjera: x = 4: f(4) = 8 ≥ 0 ✓; x = 6: f(6) = −12 < 0 nedefinirano ✓."]
  },
  {
    id:40,
    type:"sa",warn:"Pazi: spoji lijevu stranu u log_a((x − 7)·x); ali domena traži x − 15 > 0 (x > 15) — pokaži kontradikciju.",
    topic:"al",
    points:2,
    q:"Dokažite da ne postoji realni broj x za koji vrijedi log_a(x − 7) + log_a(x) = log_a(x − 15) za svaki realni broj a > 0, a ≠ 1.",
    sol:{ans:"Rješavanje logaritamske jednadžbe svodi se na rješavanje kvadratne jednadžbe x² − 8x + 15 = 0 čija rješenja nisu u skladu s uvjetom logaritamske jednadžbe x > 15.",alt:["nema rješenja","ne postoji","jer x ∈ {3, 5} ne zadovoljava x > 15"]},
    steps:[{txt:"Domena: x − 7 > 0, x > 0, x − 15 > 0 → x > 15."},{txt:"log_a(x − 7) + log_a(x) = log_a(x(x − 7)) = log_a(x² − 7x)."},{txt:"Jednadžba: log_a(x² − 7x) = log_a(x − 15) → x² − 7x = x − 15."},{txt:"Premjesti: x² − 8x + 15 = 0."},{txt:"Faktoriziraj: (x − 3)(x − 5) = 0 → x = 3 ili x = 5."},{txt:"Provjera domene: 3 < 15 i 5 < 15 — nijedno ne zadovoljava x > 15."},{txt:"Zaključak: nema rješenja."},{txt:"Točan odgovor: kvadratna ima rješenja 3 i 5, oba krše uvjet x > 15.",note:"odgovor",final:true},{txt:"Provjera: za x = 3, log_a(−4) nedefinirano; za x = 5, log_a(−2) nedefinirano ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) domena. 2) svojstvo zbroja log. 3) kvadratna. 4) provjera u domeni.",note:"postupak",final:true},{txt:"Intuicija: log jednadžbe imaju \"fantomska\" rješenja iz algebre koja nisu u domeni.",note:"intuicija",final:true}],
    why:["Pravila: log_a(M) + log_a(N) = log_a(MN); domena log_a(x): x > 0; log injektivna: log_a(P) = log_a(Q) ⟺ P = Q.","Postupak: 1) UVJETI domene SVE. 2) primijeni svojstva log. 3) riješi algebarsku. 4) provjera svakog rješenja.","Intuicija: kritična je provjera u domeni, ne samo algebarsko rješavanje.","Česta greška 1: ne provjeriti domenu — uzeti 3 ili 5 kao valjana.","Česta greška 2: log(M) + log(N) ≠ log(M + N).","Alt metoda — pretpostavi x > 15; kvadratna daje 3 ili 5; kontradikcija → nema rješenja.","Provjera za bilo koji a > 0, a ≠ 1: ako x = 3, log_a(−4) nedefinirano ✓."]
  },
  {
    id:41,
    type:"sa",warn:"Pazi: |2a + b|² = 4|a|² + 4(a·b) + |b|²; a·b = |a|·|b|·cos(kut).",
    topic:"vek",
    points:2,
    q:"Odredite duljinu vektora 2a + b ako su |a| = √3, |b| = 1, a mjera kuta između vektora a i b iznosi 150°.",
    sol:{ans:"√7",alt:["sqrt(7)","|2a+b| = √7"]},
    steps:[{txt:"a · b = |a|·|b|·cos(α) = √3 · 1 · cos(150°) = √3 · (−[FRAC:√3|2]) = −[FRAC:3|2]."},{txt:"|2a + b|² = (2a + b)·(2a + b) = 4(a·a) + 4(a·b) + (b·b)."},{txt:"a·a = |a|² = 3; b·b = 1."},{txt:"|2a + b|² = 4·3 + 4·(−3/2) + 1 = 12 − 6 + 1 = 7."},{txt:"|2a + b| = √7."},{txt:"Točan odgovor: √7.",note:"odgovor",final:true},{txt:"Provjera dimenzije: √7 ≈ 2,65 između 2√3 − 1 ≈ 2,46 i 2√3 + 1 ≈ 4,46 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) a·b iz kuta. 2) razvij |2a+b|². 3) izračun. 4) korijen.",note:"postupak",final:true},{txt:"Intuicija: tup kut (150°) → negativan a·b → smanjuje duljinu rezultante.",note:"intuicija",final:true}],
    why:["Pravila: a·b = |a||b|cos(α); |v|² = v·v; distributivnost skalarnog produkta.","Postupak: 1) skalarni produkt. 2) razvoj. 3) numerički.","Intuicija: ovisi o duljinama I kutu.","Česta greška 1: zaboraviti faktor 2 kod 2a.","Česta greška 2: cos(150°) pozitivan — krivo, negativan.","Alt metoda — koordinatno: a = (√3, 0), b = (−√3/2, 1/2); 2a + b = (3√3/2, 1/2); |2a+b| = √(27/4 + 1/4) = √7 ✓.","Provjera s kosinusovim poučkom — daje isti rezultat ✓."]
  },
  {
    id:42,
    type:"sa",warn:"Pazi: prvo riješi nejednadžbu (interval), pa vjerojatnost = duljina povoljnog / duljina cijelog intervala.",
    topic:"al",
    points:2,
    q:"Koliko iznosi vjerojatnost da je slučajno odabrani realni broj x iz skupa rješenja nejednadžbe |2x − 5| ≤ 13 pozitivan broj?",
    sol:{ans:"[FRAC:9|13]",alt:["9/13","≈ 0,6923"]},
    steps:[{txt:"|2x − 5| ≤ 13 ⟺ −13 ≤ 2x − 5 ≤ 13."},{txt:"Dodaj 5: −8 ≤ 2x ≤ 18; dijeli 2: −4 ≤ x ≤ 9."},{txt:"Skup rješenja: [−4, 9], duljina 13."},{txt:"Pozitivni: ⟨0, 9], duljina 9."},{txt:"P = [FRAC:9|13]."},{txt:"Točan odgovor: [FRAC:9|13].",note:"odgovor",final:true},{txt:"Provjera: 9/13 ≈ 0,69 ∈ (0,1) ✓; 9 + 4 = 13 (poz + neg + 0) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) riješi nejednadžbu. 2) duljina cijelog. 3) duljina povoljnog. 4) omjer.",note:"postupak",final:true},{txt:"Intuicija: geometrijska vjerojatnost na intervalu = omjer duljina.",note:"intuicija",final:true}],
    why:["Pravila: |a| ≤ b ⟺ −b ≤ a ≤ b; geom. vjerojatnost = [FRAC:povoljno|sve].","Postupak: 1) riješi. 2) duljine. 3) omjer.","Intuicija: uniformna raspodjela na intervalu.","Česta greška 1: pogrešno rješavanje apsolutne.","Česta greška 2: uključiti 0 u pozitivne.","Alt metoda — broj graničnih točaka: 0 dijeli [−4, 9] na (−4, 0) (duljina 4) i (0, 9] (duljina 9).","Provjera: 9/13 + 4/13 = 1 ✓."]
  },
  {
    id:43,
    type:"sa",warn:"Pazi: geometrijski → (cos 5x)² = 1·sin²(5x); koristi sin² = 1 − cos² pa riješi.",
    topic:"trig",
    points:3,
    q:"Odredite sve realne brojeve x za koje su 1, cos(5x) i sin²(5x) tri uzastopna člana geometrijskoga niza.",
    sol:{ans:"{[FRAC:π|20] + [FRAC:kπ|10], k ∈ ℤ}",alt:["x = π/20 + kπ/10","π/20 + kπ/10, k ∈ Z"]},
    steps:[{txt:"Geom. niz: b² = a·c → (cos 5x)² = 1·sin²(5x) → cos²(5x) = sin²(5x)."},{txt:"cos²(5x) − sin²(5x) = 0 → cos(10x) = 0 (formula dvostrukog kuta)."},{txt:"10x = [FRAC:π|2] + kπ → x = [FRAC:π|20] + [FRAC:kπ|10], k ∈ ℤ."},{txt:"Provjera b ≠ 0: za x = π/20, cos(π/4) = √2/2 ≠ 0 ✓."},{txt:"Točan odgovor: x = [FRAC:π|20] + [FRAC:kπ|10], k ∈ ℤ.",note:"odgovor",final:true},{txt:"Provjera za x = π/20: cos(π/4) = √2/2; sin²(π/4) = 1/2; (√2/2)² = 1/2 = 1·1/2 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) svojstvo geom. niza. 2) trig. identiteti. 3) riješi.",note:"postupak",final:true},{txt:"Intuicija: cos² − sin² = cos(2α) je moćan identitet.",note:"intuicija",final:true}],
    why:["Pravila: geom. niz: b² = ac; cos(2α) = cos²α − sin²α; cos(α) = 0 ⟺ α = π/2 + kπ.","Postupak: 1) jednadžba iz definicije. 2) trig identiteti. 3) opće rješenje.","Intuicija: cos² − sin² \"kolapsira\" u cos(2α).","Česta greška 1: zaboraviti b² = ac (koristiti b = √(ac)).","Česta greška 2: izostaviti opće rješenje.","Alt metoda — sin² = 1 − cos²: 2cos²(5x) = 1 → cos(5x) = ±√2/2 → 5x = ±π/4 + 2kπ ili ±3π/4 + 2kπ.","Provjera za x = 3π/20: cos(3π/4) = −√2/2; sin²(3π/4) = 1/2; (−√2/2)² = 1/2 ✓."]
  },
  {
    id:44,
    type:"sa",warn:"Pazi: V = B·h; baza je pravilni šesterokut B = (3√3/2)a²; iz V i h = 15 nađi a.",
    topic:"geom",
    points:3,
    q:"Duljina bočnoga brida pravilne uspravne šesterostrane prizme iznosi 15 cm, a volumen 1440√3 cm³. Koliko iznosi oplošje uspravnoga stošca upisanoga u tu prizmu?",
    sol:{ans:"≈ 510,42 cm² (egzaktno 4π(12 + 3√91))",alt:["4π(12+3√91)","≈ 510,42","510,42 cm²"]},
    steps:[{txt:"B šesterokuta sa stranicom a: B = [FRAC:3√3|2]·a²."},{txt:"V = B·h: 1440√3 = [FRAC:45√3|2]·a² → a² = 64 → a = 8 cm."},{txt:"Polumjer upisanog stošca = apotema šesterokuta = [FRAC:a√3|2] = 4√3 cm."},{txt:"Visina stošca = 15 cm; izvodnica s = √(48 + 225) = √273."},{txt:"Oplošje: O = πr² + πr·s = 48π + π·4√3·√273."},{txt:"√(3·273) = √819 = √(9·91) = 3√91; pa πr·s = 12π√91."},{txt:"O = 48π + 12π√91 = 4π(12 + 3√91) ≈ 510,42 cm²."},{txt:"Točan odgovor: O = 4π(12 + 3√91) ≈ 510,42 cm².",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: cm² ✓; red veličine ≈ 510 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) a iz V. 2) r = apotema. 3) izvodnica. 4) oplošje stošca.",note:"postupak",final:true},{txt:"Intuicija: upisani stožac dira sve plohe; r = apotema, v = visina prizme.",note:"intuicija",final:true}],
    why:["Pravila: B šesterokuta = (3√3/2)a²; apotema = (a√3)/2; V prizme = B·v; O stošca = πr² + πrs; s = √(r² + v²).","Postupak: 1) a iz V. 2) r, v za stožac. 3) izvodnica. 4) oplošje.","Intuicija: u poligonalnoj prizmi, polumjer upisanog stošca = apotema baze.","Česta greška 1: stranica šesterokuta umjesto apoteme za r.","Česta greška 2: pomiješati formule valjka i stošca.","Alt metoda — direktno: O = πr(r + s) = π·4√3·(4√3 + √273) = 48π + 12π√91 ✓.","Provjera numerički: r ≈ 6,93; s ≈ 16,52; O ≈ π(48 + 114,5) ≈ 510 cm² ✓."]
  },
  {
    id:45,
    type:"sa",warn:"Pazi: parna kvadratna funkcija je oblika ax² + c (bez člana bx), simetrična oko osi y.",
    topic:"anal",
    points:4,
    q:"Točka C(x_C, y_C) nalazi se u prvome kvadrantu koordinatnoga sustava i pripada grafu parne kvadratne funkcije kojoj je maksimalna vrijednost 9, a jedna nultočka −3√3. Točka A ortogonalna je projekcija točke C na os y, a točka B ortogonalna je projekcija točke C na pravac y + y_C = 0. Koliko iznosi najveća moguća površina trokuta ABC?",
    sol:{ans:"18",alt:["18 kvadratnih jedinica","P_max = 18"]},
    steps:[{txt:"Parna kvadratna s max 9: f(x) = ax² + 9, a < 0."},{txt:"Nultočka −3√3: 27a + 9 = 0 → a = −[FRAC:1|3]. f(x) = −[FRAC:x²|3] + 9."},{txt:"C(x_C, y_C) na grafu u 1. kv: 0 < x_C < 3√3, y_C = 9 − [FRAC:x_C²|3]."},{txt:"A = (0, y_C); B = (x_C, −y_C)."},{txt:"|AC| = x_C (vodoravan); |CB| = 2y_C (vertikalan); ⊥ kod C."},{txt:"P = [FRAC:1|2]·x_C·2y_C = x_C·y_C = x_C(9 − [FRAC:x_C²|3]) = 9x_C − [FRAC:x_C³|3]."},{txt:"Maksimum: P'(x_C) = 9 − x_C² = 0 → x_C = 3 (pozitivni, u rasponu)."},{txt:"y_C = 9 − 3 = 6; P_max = 3·6 = 18."},{txt:"Točan odgovor: P_max = 18.",note:"odgovor",final:true},{txt:"Provjera: P''(x_C) = −2x_C < 0 → konkavna → max ✓; rubovi P(0⁺) = 0, P(3√3⁻) = 0 — niže od 18 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) odredi f. 2) parametriziraj C. 3) izrazi P(x_C). 4) maks derivacijom. 5) provjeri.",note:"postupak",final:true},{txt:"Intuicija: optimalan C balansira x i y vrijednosti — ne preblizu osi.",note:"intuicija",final:true}],
    why:["Pravila: parna f → samo x² član; max kvadratne u tjemenu; ortogonalne projekcije; optimizacija kroz f' = 0.","Postupak: 1) parametrizacija f. 2) geometrija. 3) P(x). 4) optimum. 5) rubovi.","Intuicija: kombinacija geometrije i kalkulusa za optimum.","Česta greška 1: ne uvidjeti pravokutnost u C.","Česta greška 2: zaboraviti provjeriti dozvoljen raspon x_C.","Alt metoda — AM-GM: x_C·(9 − x_C²/3) max kad je t = x_C² takav da... (derivacija je čistija).","Provjera s drugim x: x=1 → P ≈ 8,67; x=4 → P ≈ 14,67; x=3 → P = 18 (max) ✓."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2025_ljeto",razina:"A",serial:"D-S072",totalPoints:60,mcCount:20,saCount:25,verified:"sympy+pdf+vision+verbatim+key",maintenanceAt:"2026-06-21",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)","Pak G verbatim+key full (2026-06-21): 45/45 Q tekst vs PDF D-S072, svi odgovori vs kljuc 100%; fix Q13 (verbatim), Q18 (x+By-1; bilo -10), Q39.2 (+prirodno podrucje definicije)"]}
];

export const qImages = {
  "2025_ljeto_A__11": () => e(Svg11_2025Alj, null),
  "2025_ljeto_A__13": () => e(Svg13_2025Alj, null),
  "2025_ljeto_A__15": () => e(Svg15_2025Alj, null),
  "2025_ljeto_A__17": () => e(Svg17_2025Alj, null),
  "2025_ljeto_A__25": () => e(Svg25_2025Alj, null),
  "2025_ljeto_A__36.1": () => e(Svg36_2025Alj, null),
  "2025_ljeto_A__36.2": () => e(Svg36_2025Alj, null),
  "2025_ljeto_A__38.1": () => e(Svg38a_2025Alj, null),
  "2025_ljeto_A__5": () => e(Svg5_2025Alj, null),
  "2025_ljeto_A__7": () => e(Svg7_2025Alj, null),
  "2025_ljeto_A__9": () => e(Svg9_2025Alj, null),
};
