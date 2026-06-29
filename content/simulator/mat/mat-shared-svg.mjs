// AUTO-GENERATED — shared SVGs (KoordOs + multi-exam). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg29_2013Aj(){
  const W=200,H=160,pad={l:28,r:14,t:14,b:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3,xMax=4,yMin=-1,yMax=9;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.1){
    const y=Math.pow(0.5,x);
    if(y>yMax||y<yMin) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-3,-2,-1,0,1,2,3,4].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[0,1,2,3,4,5,6,7,8].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[-3,-2,-1,1,2,3].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[1,2,4,8].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinejoin:"round"}),
    e("circle",{cx:ox,cy:toY(1),r:3.5,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:ox+5,y:toY(1)-5,fontSize:9,fill:_BLUE},"(0,1)")
  );
}

function Svg9_2020Ajj(){
  const W=340, H=430;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems = [];
  
  // Arc helper
  const angleArc = (V, P1, P2, r, key, color) => {
    const a1 = Math.atan2(P1[1]-V[1], P1[0]-V[0]);
    const a2 = Math.atan2(P2[1]-V[1], P2[0]-V[0]);
    const p1x = V[0] + r*Math.cos(a1);
    const p1y = V[1] + r*Math.sin(a1);
    const p2x = V[0] + r*Math.cos(a2);
    const p2y = V[1] + r*Math.sin(a2);
    let diff = a2 - a1;
    while(diff > Math.PI) diff -= 2*Math.PI;
    while(diff < -Math.PI) diff += 2*Math.PI;
    const sweep = diff > 0 ? 1 : 0;
    return e("path",{key:key, d:`M ${p1x.toFixed(1)} ${p1y.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${p2x.toFixed(1)} ${p2y.toFixed(1)}`, fill:"none", stroke:color, strokeWidth:1.3});
  };
  
  // Place text INSIDE triangle along angle bisector toward centroid/third vertex
  const labelAtAngle = (V, P1, P2, V3, dist, txt) => {
    // Direction toward third vertex V3 (interior)
    const dx = V3[0] - V[0];
    const dy = V3[1] - V[1];
    const len = Math.sqrt(dx*dx + dy*dy);
    // Unit vector toward interior
    const ux = dx / len;
    const uy = dy / len;
    // Label position — compensate for text width (chars × ~5px)
    const textOffset = txt.length * 2.8;
    return [V[0] + dist*ux - textOffset, V[1] + dist*uy + 4];
  };
  
  // ══════ Glavni trokut PQR ══════
  const Px=90, Py=100, Qx=230, Qy=100;
  const Rx=180, Ry=28;
  elems.push(e("text",{key:"zadL", x:14, y:22, fontSize:13, fontWeight:700, fill:"var(--text)"},"△PQR:"));
  elems.push(e("polygon",{key:"pqr", points:`${Px},${Py} ${Qx},${Qy} ${Rx},${Ry}`, fill:"var(--blue)", fillOpacity:0.22, stroke:"var(--blue)", strokeWidth:2.2}));
  elems.push(e("text",{key:"Plab", x:Px-16, y:Py+14, fontSize:14, fontStyle:"italic", fontWeight:700, fill:_GOLD},"P"));
  elems.push(e("text",{key:"Qlab", x:Qx+4, y:Qy+14, fontSize:14, fontStyle:"italic", fontWeight:700, fill:_GOLD},"Q"));
  elems.push(e("text",{key:"Rlab", x:Rx-4, y:Ry-6, fontSize:14, fontStyle:"italic", fontWeight:700, fill:_GOLD},"R"));
  // Kut P (40°) — bisektor prema R
  elems.push(angleArc([Px,Py], [Qx,Qy], [Rx,Ry], 24, "aP", "var(--red)"));
  const pP = labelAtAngle([Px,Py], [Qx,Qy], [Rx,Ry], [Rx,Ry], 36, "40°");
  elems.push(e("text",{key:"tP", x:pP[0], y:pP[1], fontSize:11, fontWeight:700, fill:"var(--red)"},"40°"));
  // Kut Q (65°) — bisektor prema R
  elems.push(angleArc([Qx,Qy], [Rx,Ry], [Px,Py], 24, "aQ", "var(--red)"));
  const pQ = labelAtAngle([Qx,Qy], [Rx,Ry], [Px,Py], [Rx,Ry], 36, "65°");
  elems.push(e("text",{key:"tQ", x:pQ[0], y:pQ[1], fontSize:11, fontWeight:700, fill:"var(--red)"},"65°"));
  // Stranica PQ
  elems.push(e("text",{key:"sPQ", x:(Px+Qx)/2-18, y:Py+22, fontSize:11, fontWeight:700, fill:"var(--text)"},"6,3 cm"));
  
  // ══════ Cells A, B, C, D ══════
  const cells = [
    {x:20,  y:180, label:"A.", correct:true},
    {x:180, y:180, label:"B.", correct:false},
    {x:20,  y:310, label:"C.", correct:false},
    {x:180, y:310, label:"D.", correct:false}
  ];
  
  cells.forEach((c, i) => {
    // Točan (A) — puni plavi; ostali — outline teal/light blue
    const strokeCol = c.correct ? "var(--blue)" : "var(--teal)";
    const strokeW = c.correct ? 2.2 : 1.8;
    const fillCol = c.correct ? "var(--blue)" : "var(--teal)";
    const fillOp = c.correct ? 0.20 : 0.08;
    const angleCol = "var(--red)";
    const sideCol = "var(--text)";
    
    let V1, V2, V3;
    let angSpec1, angSpec2; // {V, to1, to2, V3, txt}
    let sideSpec;
    
    if(c.label === "A.") {
      // Nageen: 40° gore-lijevo, 75° desno, 6.3cm donja
      V1 = [c.x+12, c.y+15];
      V2 = [c.x+100, c.y+38];
      V3 = [c.x+90, c.y+92];
      angSpec1 = {V:V1, to1:V2, to2:V3, V3interior:V3, txt:"40°"};
      angSpec2 = {V:V2, to1:V1, to2:V3, V3interior:V3, txt:"75°"};
      // NE — angSpec2 bi trebao interior biti V1 (treći vrh koji nije u kutu V2)
      // Bolji pristup: unutrašnjost kuta na V2 je prema centroidu = (V1+V2+V3)/3
      sideSpec = {V1, V2:V3, txt:"6,3 cm", dx:-40, dy:4};
    } else if(c.label === "B.") {
      V1 = [c.x+60, c.y+10];
      V2 = [c.x+18, c.y+100];
      V3 = [c.x+102, c.y+100];
      angSpec1 = {V:V2, to1:V1, to2:V3, txt:"65°"};
      angSpec2 = {V:V3, to1:V1, to2:V2, txt:"75°"};
      sideSpec = {V1, V2:V3, txt:"6,3 cm", dx:8, dy:-4};
    } else if(c.label === "C.") {
      V1 = [c.x+28, c.y+15];
      V2 = [c.x+95, c.y+22];
      V3 = [c.x+52, c.y+102];
      angSpec1 = {V:V1, to1:V2, to2:V3, txt:"75°"};
      angSpec2 = {V:V3, to1:V1, to2:V2, txt:"40°"};
      sideSpec = {V1, V2:V3, txt:"6,3 cm", dx:-44, dy:4};
    } else {
      V1 = [c.x+16, c.y+48];
      V2 = [c.x+88, c.y+15];
      V3 = [c.x+108, c.y+100];
      angSpec1 = {V:V1, to1:V2, to2:V3, txt:"75°"};
      angSpec2 = {V:V2, to1:V1, to2:V3, txt:"65°"};
      sideSpec = {V1, V2, txt:"6,3 cm", dx:-8, dy:-8};
    }
    
    // Centroid kao interior direction za oznake kutova
    const centroid = [(V1[0]+V2[0]+V3[0])/3, (V1[1]+V2[1]+V3[1])/3];
    
    // Trokut
    const ptStr = `${V1[0]},${V1[1]} ${V2[0]},${V2[1]} ${V3[0]},${V3[1]}`;
    elems.push(e("polygon",{key:"tri"+i, points:ptStr, fill:fillCol, fillOpacity:fillOp, stroke:strokeCol, strokeWidth:strokeW}));
    
    // Angle arcs
    elems.push(angleArc(angSpec1.V, angSpec1.to1, angSpec1.to2, 14, "a"+i+"_1", angleCol));
    elems.push(angleArc(angSpec2.V, angSpec2.to1, angSpec2.to2, 14, "a"+i+"_2", angleCol));
    
    // Angle labels — prema centroidu (tj. unutra trokuta)
    const lab1 = labelAtAngle(angSpec1.V, angSpec1.to1, angSpec1.to2, centroid, 28, angSpec1.txt);
    const lab2 = labelAtAngle(angSpec2.V, angSpec2.to1, angSpec2.to2, centroid, 28, angSpec2.txt);
    elems.push(e("text",{key:"at"+i+"_1", x:lab1[0], y:lab1[1], fontSize:10, fontWeight:700, fill:angleCol}, angSpec1.txt));
    elems.push(e("text",{key:"at"+i+"_2", x:lab2[0], y:lab2[1], fontSize:10, fontWeight:700, fill:angleCol}, angSpec2.txt));
    
    // Side label - computed midpoint with offset perpendicular
    const midX = (sideSpec.V1[0] + sideSpec.V2[0]) / 2;
    const midY = (sideSpec.V1[1] + sideSpec.V2[1]) / 2;
    elems.push(e("text",{key:"s"+i, x:midX + sideSpec.dx, y:midY + sideSpec.dy, fontSize:10, fontWeight:600, fill:sideCol}, sideSpec.txt));
    
    // Label A./B./C./D.
    elems.push(e("text",{key:"lab"+i, x:c.x, y:c.y+125, fontSize:13, fontWeight:700, fill:"var(--text)"}, c.label));
  });
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg27a_2020Bjj(){
  const W=300, H=240;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems = [];
  const cell = 22;
  const ox = 30, oy = 20;
  // Mreža 10×8 ćelija
  for(let i = 0; i <= 10; i++){
    elems.push(e("line",{key:"gx"+i, x1:ox+i*cell, y1:oy, x2:ox+i*cell, y2:oy+8*cell, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let i = 0; i <= 8; i++){
    elems.push(e("line",{key:"gy"+i, x1:ox, y1:oy+i*cell, x2:ox+10*cell, y2:oy+i*cell, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  // Oznake mjerila (2×1 kvadratić s oznakama 1 cm i 2 cm)
  elems.push(e("rect",{key:"refRect", x:ox+0.5*cell, y:oy+0.3*cell, width:cell, height:cell*0.5, fill:"none", stroke:_BLUE, strokeWidth:1.3}));
  elems.push(e("text",{key:"ref1", x:ox+1.8*cell, y:oy+0.75*cell, fontSize:10, fill:_GOLD},"1 cm"));
  elems.push(e("text",{key:"ref2", x:ox+0.7*cell, y:oy+1.6*cell, fontSize:10, fill:_GOLD},"2 cm"));
  // Osjenčani lik (simulira izgled iz PDF-a)
  // Kompleksni lik - aproksimativno pratimo orbitu od (2,3) do (2,6) (brojanje u jedinicama)
  // Lik čine kvadratići (svaki = 1 cm × 1 cm), ali "mjerilo" 2×1 znači 2 cm širina × 1 cm visina
  // Stoga horizontalni korak = 2 cm, vertikalni korak = 1 cm? Ili svaki kvadratić je 1×1 cm?
  // Pretpostavimo svaki kvadratić 1 cm × 1 cm, s tim da dvije jedinice mreže = 2 cm
  // Opseg = 28 znači zbroj jedinica = 28
  // Svaki kvadratić širine 2 cm i visine 1 cm u stvarnosti → horizontalne linije mreže = 2 cm stvarnosti, vertikalne = 1 cm
  // Opseg = (broj horizontalnih jedinica na rubu × 2) + (broj vertikalnih × 1) = 28
  // Pojednostavljeno: crtamo lik koji odgovara (na mreži)
  // Iz PDF-a: lik izgleda kao poluotok - tri stupa na vrhu (srednji najviši), osnovica
  // Forma: dolje pravokutnik, gore tri uzdignuta dijela različitih visina
  // Koordinate u mreži (x, y od gornjeg-lijevog):
  const pts = [
    [2, 4], [2, 3], [3, 3], [3, 2], [5, 2], [5, 3], [6, 3], [6, 4],
    [7, 4], [7, 5], [5, 5], [5, 4], [4, 4], [4, 5], [3, 5], [3, 4]
  ];
  const ptStr = pts.map(([x,y]) => `${ox+x*cell},${oy+y*cell}`).join(" ");
  elems.push(e("polygon",{key:"shape", points:ptStr, fill:"var(--blue)", fillOpacity:0.22, stroke:"var(--blue)", strokeWidth:2}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg23a_2020Bjj(){
  const W=300, H=260, pad={l:30, r:14, t:14, b:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3, xMax=7, yMin=-3, yMax=5;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const ox = toX(0), oy = toY(0);
  const elems = [];
  // Mreža
  for(let x = xMin; x <= xMax; x++){
    elems.push(e("line",{key:"gx"+x, x1:toX(x), y1:pad.t, x2:toX(x), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let y = yMin; y <= yMax; y++){
    elems.push(e("line",{key:"gy"+y, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  elems.push(e("line",{key:"axX", x1:pad.l, y1:oy, x2:pad.l+iW, y2:oy, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:ox, y1:pad.t, x2:ox, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`, fill:"var(--text)"}));
  elems.push(e("text",{key:"lx", x:pad.l+iW+4, y:oy+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly", x:ox+5, y:pad.t+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0", x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x", x:toX(1), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y", x:ox-4, y:toY(1)+3, textAnchor:"end", fontSize:9, fill:"var(--muted)"},"1"));
  // Graf rješenja f(x) = -x/2 + 3 (zelena, isprekidana) — pokazuje rješenje
  const x1 = xMin, y1 = -xMin/2 + 3;
  const x2 = xMax, y2 = -xMax/2 + 3;
  elems.push(e("line",{key:"sol", x1:toX(x1), y1:toY(y1), x2:toX(x2), y2:toY(y2), stroke:"var(--green)", strokeWidth:2, strokeDasharray:"5,3", opacity:0.8}));
  // Ključne točke
  elems.push(e("circle",{key:"p03", cx:toX(0), cy:toY(3), r:3.5, fill:"var(--green)"}));
  elems.push(e("circle",{key:"p60", cx:toX(6), cy:toY(0), r:3.5, fill:"var(--green)"}));
  elems.push(e("text",{key:"fn", x:toX(4), y:toY(2)-4, fontSize:11, fontStyle:"italic", fontWeight:700, fill:"var(--green)"},"f(x) = −x/2 + 3"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg7_2023Alj(){
  // Q7: f(x)=-0.5x+1. Sva 4 grafa nagib ±0.5, y-odsječak ±1.
  // A: -0.5x+1 (TOČNO), B: -0.5x-1, C: +0.5x+1, D: +0.5x-1
  const st="var(--text)", W=460, H=340;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const panel = (ox, oy, k, n, letter) => {
    const pw=180, ph=120, cx=ox+pw/2, cy=oy+ph/2, u=18;
    const xLim=(pw/2)/u, yLim=(ph/2)/u;
    const clip = (dir) => {
      const tx=(dir>0?xLim:-xLim)/dir;
      let ty = k===0 ? Infinity : ((dir*k>0?yLim:-yLim)-n)/(k*dir||1e-9);
      const t=Math.min(Math.abs(tx),Math.abs(ty));
      const x=dir*t, y=k*x+n;
      return [cx+x*u, cy-y*u];
    };
    const p1=clip(-1), p2=clip(+1);
    return [
      e("rect",{key:letter+"b",x:ox,y:oy,width:pw,height:ph,fill:"none",stroke:_BLUE,strokeOpacity:0.3,strokeDasharray:"2 3",strokeWidth:0.8}),
      e("line",{key:letter+"x",x1:ox+6,y1:cy,x2:ox+pw-6,y2:cy,stroke:_BLUE,strokeWidth:1.3}),
      e("line",{key:letter+"y",x1:cx,y1:oy+6,x2:cx,y2:oy+ph-6,stroke:_BLUE,strokeWidth:1.3}),
      e("text",{key:letter+"lx",x:ox+pw-4,y:cy-4,fontSize:10,fontStyle:"italic",fontFamily:"serif",fill:st,textAnchor:"end"},"x"),
      e("text",{key:letter+"ly",x:cx+4,y:oy+10,fontSize:10,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
      e("circle",{key:letter+"t0",cx:cx,cy:cy,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
      e("text",{key:letter+"l0",x:cx-6,y:cy+12,fontSize:9,fill:st,fontFamily:"serif"},"0"),
      e("circle",{key:letter+"tx1",cx:cx+u,cy:cy,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
      e("text",{key:letter+"lx1",x:cx+u,y:cy+12,fontSize:9,fill:st,textAnchor:"middle",fontFamily:"serif"},"1"),
      e("text",{key:letter+"ly1",x:cx-5,y:cy-u+4,fontSize:9,fill:st,textAnchor:"end",fontFamily:"serif"},"1"),
      e("line",{key:letter+"ln",x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1],stroke:_BLUE,strokeWidth:1.8}),
      e("text",{key:letter+"lbl",x:ox+4,y:oy+ph+14,fontSize:13,fontWeight:"bold",fill:st,fontFamily:"sans-serif"},letter+".")
    ];
  };
  const cells=[
    ...panel( 20,  20, -0.5, +1, "A"),
    ...panel(240,  20, -0.5, -1, "B"),
    ...panel( 20, 180, +0.5, +1, "C"),
    ...panel(240, 180, +0.5, -1, "D"),
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"460px",width:"100%",display:"block",margin:"12px auto"}},...cells);
}

function Svg14_2023Alj(){
  const st="var(--text)", W=420, H=300;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const E=[210,40], A=[60,240], B=[370,240];
  const Dx = E[0] + (A[0]-E[0])*3/8, Dy = E[1] + (A[1]-E[1])*3/8;
  const Cx = E[0] + (B[0]-E[0])*3/8, Cy = E[1] + (B[1]-E[1])*3/8;
  const D=[Dx,Dy], C=[Cx,Cy];
  const extend = (p1, p2, xMin, xMax) => {
    const dx=p2[0]-p1[0], dy=p2[1]-p1[1];
    const t0=(xMin-p1[0])/dx, t1=(xMax-p1[0])/dx;
    return [[p1[0]+dx*t0, p1[1]+dy*t0], [p1[0]+dx*t1, p1[1]+dy*t1]];
  };
  const [AB1,AB2] = extend(A,B, 20, W-20);
  const [DC1,DC2] = extend(D,C, 20, W-20);
  const extLine = (p1,p2, exBefore, exAfter) => {
    const dx=p2[0]-p1[0], dy=p2[1]-p1[1];
    const L=Math.hypot(dx,dy), ux=dx/L, uy=dy/L;
    return [[p1[0]-ux*exBefore, p1[1]-uy*exBefore], [p2[0]+ux*exAfter, p2[1]+uy*exAfter]];
  };
  const [EA1, EA2] = extLine(E, A, 22, 30);
  const [EB1, EB2] = extLine(E, B, 22, 30);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"420px",width:"100%",display:"block",margin:"12px auto"}},
    e("line",{key:"abp",x1:AB1[0],y1:AB1[1],x2:AB2[0],y2:AB2[1],stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"dcp",x1:DC1[0],y1:DC1[1],x2:DC2[0],y2:DC2[1],stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"ea",x1:EA1[0],y1:EA1[1],x2:EA2[0],y2:EA2[1],stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"eb",x1:EB1[0],y1:EB1[1],x2:EB2[0],y2:EB2[1],stroke:_BLUE,strokeWidth:1.8}),
    // E pomaknut još gore (y-18) za bolju vidljivost
    e("text",{key:"lE",x:E[0]-5,y:E[1]-18,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"E"),
    e("text",{key:"lD",x:D[0]-14,y:D[1]-6,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"D"),
    e("text",{key:"lC",x:C[0]+6,y:C[1]-6,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"C"),
    e("text",{key:"lA",x:A[0]-6,y:A[1]+18,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"A"),
    e("text",{key:"lB",x:B[0]+2,y:B[1]+18,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"B")
  );
}

function Svg10_2023Alj(){
  // Q10: Vektor a⃗ od (-2,4) do (1,0). Label a⃗ pomaknut u prazan prostor lijevo.
  const st="var(--text)", W=340, H=300;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const ox=150, oy=180, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const T=[-2,4], HD=[1,0];
  const gridLines=[];
  for(let x=-5;x<=6;x++){ gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-4)+8,x2:px(x),y2:py(5)-8,stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-4;y<=5;y++){ gridLines.push(e("line",{key:"gy"+y,x1:px(-5)-8,y1:py(y),x2:px(6)+8,y2:py(y),stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xax",x1:px(-5)-6,y1:oy,x2:px(6)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"yax",x1:ox,y1:py(5)-6,x2:ox,y2:py(-4)+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(6)+6},${oy} ${px(6)+1},${oy-4} ${px(6)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(5)-6} ${ox-4},${py(5)-1} ${ox+4},${py(5)-1}`,fill:st}),
    e("text",{key:"xl",x:px(6)+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(5)-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1x",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1y",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("text",{key:"t1x",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("text",{key:"t1y",x:ox-10,y:py(1)+4,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("defs",{key:"d"},
      e("marker",{id:"v10arr",viewBox:"0 0 10 10",refX:8,refY:5,markerWidth:8,markerHeight:8,orient:"auto-start-reverse"},
        e("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:st})
      )
    ),
    e("line",{key:"v",x1:px(T[0]),y1:py(T[1]),x2:px(HD[0]),y2:py(HD[1]),stroke:st,strokeWidth:2,markerEnd:"url(#v10arr)"}),
    // Label a⃗ u praznom prostoru lijevo-gore od tail-a
    e("text",{key:"la",x:px(-4.2),y:py(3),fontSize:18,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"a⃗")
  );
}

function KoordOs({W=260,H=220,xMin=-4,xMax=4,yMin=-4,yMax=4,step=1,children,label=""}){
  const pad={l:32,r:16,t:16,b:label?12:32};  // smanji bottom pad ako label ide ispod SVG-a
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0), oy=toY(0);
  const AX="#94a3b8";        /* osi: prigušena siva */
  const ACC="var(--blue)";   /* labele: plavi accent */
  const TICK="#94a3b8";
  const TICKLBL="var(--muted)";
  const ticks=[];
  for(let x=Math.ceil(xMin);x<=Math.floor(xMax);x++){
    if(x===0) continue;
    ticks.push(e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:TICK,strokeWidth:1}),
      e("text",{x:toX(x),y:oy+14,textAnchor:"middle",fontSize:9,fill:TICKLBL},x)
    ));
  }
  for(let y=Math.ceil(yMin);y<=Math.floor(yMax);y++){
    if(y===0) continue;
    ticks.push(e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:TICK,strokeWidth:1}),
      e("text",{x:ox-8,y:toY(y)+4,textAnchor:"end",fontSize:9,fill:TICKLBL},y)
    ));
  }
  /* SVG H se prilagodi: ako je label, smanji visinu SVG-a (label ide u HTML caption ispod) */
  const svgH = label ? H - 18 : H;
  const svgEl = e("svg",{viewBox:`0 0 ${W} ${svgH}`,style:{width:"100%",maxWidth:W,display:"block",overflow:"visible"}},
    /* grid */
    ...Array.from({length:Math.floor(xMax)-Math.ceil(xMin)+1},(_,i)=>{const x=Math.ceil(xMin)+i;return e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.08)",strokeWidth:.5})}),
    ...Array.from({length:Math.floor(yMax)-Math.ceil(yMin)+1},(_,i)=>{const y=Math.ceil(yMin)+i;return e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.08)",strokeWidth:.5})}),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:AX,strokeWidth:1.4,opacity:.85}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:AX,strokeWidth:1.4,opacity:.85}),
    /* strelice */
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:AX,opacity:.85}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:AX,opacity:.85}),
    /* labele osi */
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:11,fontWeight:600,fill:ACC},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:11,fontWeight:600,fill:ACC},"y"),
    e("text",{x:ox-10,y:oy+14,fontSize:9,fill:TICKLBL},"0"),
    ...ticks,
    /* djeca (pravci, parabole itd.) */
    e("g",{transform:`translate(0,0)`,...{}},
      typeof children === "function" ? children(toX,toY,pad,iW,iH) : children
    )
  );
  /* Bug 35 fix: ako label, wrap u div + render label preko parseMath (razlomci, eksponenti, korijeni, indeksi, vektori) */
  if(!label) return svgEl;
  return e("div",{style:{display:"block",maxWidth:W,margin:"0 auto"}},
    svgEl,
    e("div",{style:{textAlign:"center",fontSize:"11px",color:"var(--muted)",marginTop:2,lineHeight:1.35,padding:"0 4px"}},
      parseMath(label) || label
    )
  );
}

export { Svg29_2013Aj, Svg9_2020Ajj, Svg27a_2020Bjj, Svg23a_2020Bjj, Svg7_2023Alj, Svg14_2023Alj, Svg10_2023Alj, KoordOs };
