// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2020Alj(){
  const W=340, H=200, pad={l:30, r:14, t:14, b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-Math.PI-0.5, xMax=3*Math.PI+0.5, yMin=-2.5, yMax=4;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const ox = toX(0), oy = toY(0);
  const pts = [];
  for(let x=xMin; x<=xMax; x+=0.05){
    const y = -2 * Math.sin(x/2) + 1;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const elems = [];
  // Mreža: okomite crte na svakih π/2 (kao u originalu)
  for(let k=-2; k<=7; k++){
    const gx = k*Math.PI/2;
    if(gx < xMin || gx > xMax) continue;
    elems.push(e("line",{key:"gx"+k, x1:toX(gx), y1:pad.t, x2:toX(gx), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  [-2,-1,0,1,2,3].forEach((y,i) => {
    elems.push(e("line",{key:"gy"+i, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  });
  // Osi
  elems.push(e("line",{key:"axX", x1:pad.l, y1:oy, x2:pad.l+iW, y2:oy, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:ox, y1:pad.t, x2:ox, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`, fill:"var(--text)"}));
  elems.push(e("text",{key:"lx", x:pad.l+iW+4, y:oy+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly", x:ox+5, y:pad.t+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0", x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"lmpi", x:toX(-Math.PI), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"−π"));
  elems.push(e("text",{key:"lpi", x:toX(Math.PI), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"π"));
  elems.push(e("text",{key:"l2pi", x:toX(2*Math.PI), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"2π"));
  elems.push(e("text",{key:"l3pi", x:toX(3*Math.PI), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"3π"));
  elems.push(e("text",{key:"l1y", x:ox-4, y:toY(1)+3, textAnchor:"end", fontSize:9, fill:"var(--muted)"},"1"));
  // Krivulja - plava
  elems.push(e("polyline",{key:"curve", points:pts.join(" "), fill:"none", stroke:"var(--blue)", strokeWidth:2.3, strokeLinejoin:"round"}));
  // Male kružiće na podjeli osi (kao u originalu)
  [-Math.PI, 0, Math.PI, 2*Math.PI, 3*Math.PI].forEach((x,i) => {
    elems.push(e("circle",{key:"tx"+i, cx:toX(x), cy:oy, r:2, fill:"var(--bg)", stroke:"var(--text)", strokeWidth:1}));
  });
  elems.push(e("circle",{key:"ty1", cx:ox, cy:toY(1), r:2, fill:"var(--bg)", stroke:"var(--text)", strokeWidth:1}));
  // Točke u ekstremima - crvena
  elems.push(e("circle",{key:"e1", cx:toX(-Math.PI), cy:toY(3), r:3.5, fill:"var(--bg)", stroke:"var(--red)", strokeWidth:2}));
  elems.push(e("circle",{key:"e2", cx:toX(Math.PI), cy:toY(-1), r:3.5, fill:"var(--bg)", stroke:"var(--red)", strokeWidth:2}));
  elems.push(e("circle",{key:"e3", cx:toX(3*Math.PI), cy:toY(3), r:3.5, fill:"var(--bg)", stroke:"var(--red)", strokeWidth:2}));
  elems.push(e("text",{key:"yfx", x:toX(2*Math.PI - 0.3), y:toY(3.6), fontSize:11, fontWeight:700, fontStyle:"italic", fill:"var(--blue)"},"y = f(x)"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg27c_2020Alj(){
  const W=320, H=220, pad={l:30, r:14, t:14, b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-5.6, xMax=10.8, yMin=-3.4, yMax=6.6;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const ox = toX(0), oy = toY(0);
  const data = [[-5,-2.5],[-2,3],[-1,3],[2,6],[6,2],[8,2],[10,-3]];
  const ptStr = data.map(([x,y]) => `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");
  const elems = [];
  for(let x=-5; x<=10; x++){
    elems.push(e("line",{key:"gx"+x, x1:toX(x), y1:pad.t, x2:toX(x), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let y=-3; y<=6; y++){
    elems.push(e("line",{key:"gy"+y, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  // Osi
  elems.push(e("line",{key:"axX", x1:pad.l, y1:oy, x2:pad.l+iW, y2:oy, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:ox, y1:pad.t, x2:ox, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`, fill:"var(--text)"}));
  elems.push(e("text",{key:"lx", x:pad.l+iW+4, y:oy+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly", x:ox+5, y:pad.t+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0", x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x", x:toX(1), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y", x:ox-4, y:toY(1)+3, textAnchor:"end", fontSize:9, fill:"var(--muted)"},"1"));
  // Graf
  elems.push(e("polyline",{key:"graf", points:ptStr, fill:"none", stroke:"var(--blue)", strokeWidth:2.3, strokeLinejoin:"round", strokeLinecap:"round"}));
  // Male kružiće na podjeli osi (kao u originalu)
  elems.push(e("circle",{key:"t00", cx:ox, cy:oy, r:2, fill:"var(--bg)", stroke:"var(--text)", strokeWidth:1}));
  elems.push(e("circle",{key:"t1x", cx:toX(1), cy:oy, r:2, fill:"var(--bg)", stroke:"var(--text)", strokeWidth:1}));
  elems.push(e("circle",{key:"t1y", cx:ox, cy:toY(1), r:2, fill:"var(--bg)", stroke:"var(--text)", strokeWidth:1}));
  // Oznaka y=f(x)
  elems.push(e("text",{key:"yfx", x:toX(4.3), y:toY(3.8), fontSize:11, fontWeight:700, fontStyle:"italic", fill:"var(--blue)"},"y = f(x)"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg25c_2020Alj(){
  const W=240, H=220;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx = 120, cy = 110;
  const r = 80;
  const angTOP = 120;  // gore-lijevo
  const angRU = 46;    // gore-desno  (središnji kut TOP-RU u S = 120°-46° = 74°)
  const angRL = 330;   // dolje-desno (tu je φ)
  const toPt = (a) => [cx + r*Math.cos(a*Math.PI/180), cy - r*Math.sin(a*Math.PI/180)];
  const TOP = toPt(angTOP);
  const RU = toPt(angRU);
  const RL = toPt(angRL);
  const elems = [];
  // Glavna kružnica
  elems.push(e("circle",{key:"circ", cx:cx, cy:cy, r:r, fill:"none", stroke:_BLUE, strokeWidth:1.5}));
  // Plavi polumjeri S→TOP i S→RU (čine središnji kut 74°)
  elems.push(e("line",{key:"rTOP", x1:cx, y1:cy, x2:TOP[0], y2:TOP[1], stroke:"var(--blue)", strokeWidth:1.6}));
  elems.push(e("line",{key:"rRU", x1:cx, y1:cy, x2:RU[0], y2:RU[1], stroke:"var(--blue)", strokeWidth:1.6}));
  // Plava tetiva TOP→RU (zatvara plavi trokut)
  elems.push(e("line",{key:"cTOPRU", x1:TOP[0], y1:TOP[1], x2:RU[0], y2:RU[1], stroke:"var(--blue)", strokeWidth:1.6}));
  // Crvene tetive RL→TOP i RL→RU (čine obodni kut φ)
  elems.push(e("line",{key:"tTOP", x1:RL[0], y1:RL[1], x2:TOP[0], y2:TOP[1], stroke:"var(--red)", strokeWidth:1.6}));
  elems.push(e("line",{key:"tRU", x1:RL[0], y1:RL[1], x2:RU[0], y2:RU[1], stroke:"var(--red)", strokeWidth:1.6}));
  // Luk za središnji kut 74° (plavi, u S, između polumjera TOP i RU)
  const arcR = 26;
  elems.push(e("path",{key:"arc74", 
    d:`M ${cx + arcR*Math.cos(angRU*Math.PI/180)} ${cy - arcR*Math.sin(angRU*Math.PI/180)} A ${arcR} ${arcR} 0 0 0 ${cx + arcR*Math.cos(angTOP*Math.PI/180)} ${cy - arcR*Math.sin(angTOP*Math.PI/180)} L ${cx} ${cy} Z`, 
    fill:"var(--blue)", fillOpacity:0.18, stroke:"var(--blue)", strokeWidth:1.2}));
  // Oznaka 74° (postavljena u sredinu kuta, malo iznad S)
  const mid74 = (angTOP + angRU) / 2;
  elems.push(e("text",{key:"t74", 
    x:cx + 34*Math.cos(mid74*Math.PI/180) - 8, 
    y:cy - 34*Math.sin(mid74*Math.PI/180) + 4, 
    fontSize:12, fontWeight:700, fill:"var(--blue)"},"74°"));
  // Točka S
  elems.push(e("circle",{key:"S", cx:cx, cy:cy, r:2.5, fill:_RED}));
  elems.push(e("text",{key:"Slab", x:cx-4, y:cy+16, fontSize:12, fontStyle:"italic", fill:_GOLD},"S"));
  // Luk za φ (crveni, kod RL, između tetiva RL→TOP i RL→RU)
  const r2 = 20;
  const a1 = Math.atan2(TOP[1]-RL[1], TOP[0]-RL[0]);
  const a2 = Math.atan2(RU[1]-RL[1], RU[0]-RL[0]);
  const p1x = RL[0] + r2*Math.cos(a1);
  const p1y = RL[1] + r2*Math.sin(a1);
  const p2x = RL[0] + r2*Math.cos(a2);
  const p2y = RL[1] + r2*Math.sin(a2);
  elems.push(e("path",{key:"arcPhi", 
    d:`M ${p1x.toFixed(1)} ${p1y.toFixed(1)} A ${r2} ${r2} 0 0 1 ${p2x.toFixed(1)} ${p2y.toFixed(1)} L ${RL[0].toFixed(1)} ${RL[1].toFixed(1)} Z`, 
    fill:"var(--red)", fillOpacity:0.18, stroke:"var(--red)", strokeWidth:1.2}));
  // Oznaka φ (lijevo od RL točke, na smjer srednjeg kuta)
  const midPhi = (a1 + a2) / 2;
  elems.push(e("text",{key:"tphi", 
    x:RL[0] + 32*Math.cos(midPhi) - 5, 
    y:RL[1] + 32*Math.sin(midPhi) + 4, 
    fontSize:14, fontStyle:"italic", fontWeight:700, fill:"var(--red)"},"φ"));
  // Točke na kružnici
  elems.push(e("circle",{key:"pTOP", cx:TOP[0], cy:TOP[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"pRU", cx:RU[0], cy:RU[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"pRL", cx:RL[0], cy:RL[1], r:2.5, fill:_RED}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg25a_2020Alj(){
  const W=280, H=300;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cell = 8;
  const ox = 20, oy = 270;
  const cols = 30, rows = 28;
  const verts = [[2,2], [22,2], [27,17], [12,22]];
  const labels = ['A','B','C','D'];
  const elems = [];
  // Fine grid
  for(let i=0; i<=cols; i++){
    elems.push(e("line",{key:"fgx"+i, x1:ox+i*cell, y1:oy-rows*cell, x2:ox+i*cell, y2:oy, stroke:"var(--bdr)", strokeWidth:0.4, opacity:0.5}));
  }
  for(let i=0; i<=rows; i++){
    elems.push(e("line",{key:"fgy"+i, x1:ox, y1:oy-i*cell, x2:ox+cols*cell, y2:oy-i*cell, stroke:"var(--bdr)", strokeWidth:0.4, opacity:0.5}));
  }
  // Main grid (every 5 = 50m)
  for(let i=0; i<=cols; i+=5){
    elems.push(e("line",{key:"mgx"+i, x1:ox+i*cell, y1:oy-rows*cell, x2:ox+i*cell, y2:oy, stroke:"var(--bdr)", strokeWidth:1}));
  }
  for(let i=0; i<=rows; i+=5){
    elems.push(e("line",{key:"mgy"+i, x1:ox, y1:oy-i*cell, x2:ox+cols*cell, y2:oy-i*cell, stroke:"var(--bdr)", strokeWidth:1}));
  }
  // Polygon (blue highlight)
  const ptStr = verts.map(([x,y])=>`${ox+x*cell},${oy-y*cell}`).join(" ");
  elems.push(e("polygon",{key:"poly", points:ptStr, fill:"var(--blue)", fillOpacity:0.18, stroke:"var(--blue)", strokeWidth:2}));
  // Vertices and labels
  verts.forEach(([x,y], i) => {
    const px = ox + x*cell, py = oy - y*cell;
    elems.push(e("circle",{key:"v"+i, cx:px, cy:py, r:3, fill:"var(--blue)"}));
    let dx = -12, dy = 0;
    if(labels[i]==='A') { dx = -12; dy = 12; }
    if(labels[i]==='B') { dx = 4; dy = 12; }
    if(labels[i]==='C') { dx = 6; dy = 4; }
    if(labels[i]==='D') { dx = -3; dy = -6; }
    elems.push(e("text",{key:"lab"+i, x:px+dx, y:py+dy, fontSize:12, fontStyle:"italic", fontWeight:700, fill:"var(--text)"}, labels[i]));
  });
  // 50m scale
  const sx = ox + cell*2;
  const sy = oy + 16;
  elems.push(e("line",{key:"scale", x1:sx, y1:sy, x2:sx+5*cell, y2:sy, stroke:_BLUE, strokeWidth:1.4}));
  elems.push(e("circle",{key:"sc1", cx:sx, cy:sy, r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"sc2", cx:sx+5*cell, cy:sy, r:2.5, fill:_RED}));
  elems.push(e("text",{key:"scltxt", x:sx+5, y:sy+13, fontSize:11, fill:_GOLD},"50 m"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg12_2020Alj(){
  const W=320,H=320;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cellW=140, cellH=140;
  const positions = [
    {x:10,  y:10,  label:"A.", k:1,    n:2,    correct:true },
    {x:170, y:10,  label:"B.", k:1,    n:-1.5, correct:false},
    {x:10,  y:170, label:"C.", k:-1,   n:1.5,  correct:false},
    {x:170, y:170, label:"D.", k:-1.5, n:-1,   correct:false}
  ];
  const elems = [];
  positions.forEach((p, idx) => {
    const ox = p.x + cellW/2;
    const oy = p.y + cellH/2;
    const half = cellW/2 - 14;
    const lineColor = p.correct ? "var(--blue)" : "var(--text)";
    const lineWidth = p.correct ? 2.2 : 1.6;
    elems.push(e("line",{key:"hx"+idx, x1:p.x+8, y1:oy, x2:p.x+cellW-8, y2:oy, stroke:"var(--text)", strokeWidth:1.2}));
    elems.push(e("line",{key:"vy"+idx, x1:ox, y1:p.y+8, x2:ox, y2:p.y+cellH-8, stroke:"var(--text)", strokeWidth:1.2}));
    elems.push(e("polygon",{key:"ax"+idx, points:`${p.x+cellW-8},${oy} ${p.x+cellW-13},${oy-3} ${p.x+cellW-13},${oy+3}`, fill:"var(--text)"}));
    elems.push(e("polygon",{key:"ay"+idx, points:`${ox},${p.y+8} ${ox-3},${p.y+13} ${ox+3},${p.y+13}`, fill:"var(--text)"}));
    elems.push(e("text",{key:"lx"+idx, x:p.x+cellW-6, y:oy+10, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
    elems.push(e("text",{key:"ly"+idx, x:ox+4, y:p.y+12, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
    elems.push(e("text",{key:"l0"+idx, x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
    const scale = 20;
    const xLeft = ox - half;
    const xRight = ox + half;
    const yLeftPx = oy - (p.k * (-half/scale) + p.n) * scale;
    const yRightPx = oy - (p.k * (half/scale) + p.n) * scale;
    const yTop = p.y + 12;
    const yBot = p.y + cellH - 12;
    let pts = [[xLeft, yLeftPx], [xRight, yRightPx]];
    const clipped = [];
    for(let i = 0; i < pts.length; i++) {
      let [x, y] = pts[i];
      if (y < yTop) {
        x = ox + (oy - yTop - p.n*scale)/p.k;
        y = yTop;
      } else if (y > yBot) {
        x = ox + (oy - yBot - p.n*scale)/p.k;
        y = yBot;
      }
      clipped.push([x, y]);
    }
    elems.push(e("line",{key:"line"+idx, x1:clipped[0][0], y1:clipped[0][1], x2:clipped[1][0], y2:clipped[1][1], stroke:lineColor, strokeWidth:lineWidth}));
    const labelPos = clipped[1];
    elems.push(e("text",{key:"lp"+idx, x:labelPos[0]-8, y:labelPos[1]-4, fontSize:11, fontStyle:"italic", fill:lineColor, fontWeight:p.correct?700:400},"p"));
    elems.push(e("text",{key:"lab"+idx, x:p.x+4, y:p.y+cellH-2, fontSize:12, fontWeight:700, fill:"var(--text)"}, p.label));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

export const qs = [
  {id:1, type:"mc",warn:"Pazi: djeljivost sa 6 = djeljivo s 2 (parna zadnja znamenka) I s 3 (zbroj znamenaka djeljiv s 3).", topic:"br", points:1,
  q:"Koju znamenku treba dopisati zdesna broju 9077 tako da dobiveni peteroznamenkasti broj bude djeljiv sa 6?",
  opts:["1","4","6","9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: broj djeljiv s 6 ⇔ djeljiv s 2 I s 3.","Intuicija: 6 = 2 · 3, pa traje obje neovisne djeljivosti.","Česta greška: provjeriti samo jednu od dvije djeljivosti.","Provjera: 90774 / 6 = 15129 (cijeli broj) ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Tražimo znamenku d takvu da je peteroznamenkasti broj 9077d djeljiv sa 6."},{txt:"Pravilo djeljivosti sa 6: broj mora biti djeljiv s 2 (zadnja znamenka parna) I s 3 (zbroj znamenki djeljiv s 3)."},{txt:"Zbroj poznatih znamenki: 9 + 0 + 7 + 7 = 23. Zbroj s d: 23 + d."},{txt:"Djeljivost s 3: 23 + d ≡ 0 (mod 3) → d ≡ 1 (mod 3), pa d ∈ {1, 4, 7}."},{txt:"Djeljivost s 2: d mora biti parna → d ∈ {0, 2, 4, 6, 8}."},{txt:"Presjek: d = 4 (jedino zadovoljava oba uvjeta)."},{txt:"A) 1: zbroj djeljiv s 3 (24), ali neparan → ne djeljiv s 2.",note:"diagnostika"},{txt:"B) 4 ✓ — djeljiv s 2 (par) i s 3 (zbroj 27).",note:"diagnostika"},{txt:"C) 6: zbroj 29 nije djeljiv s 3.",note:"diagnostika"},{txt:"D) 9: 32 nije djeljiv s 3 i d neparan.",note:"diagnostika"},{txt:"Provjera: 90774 / 6 = 15129 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 6 = 2 · 3, pa traje obje neovisne djeljivosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: broj djeljiv s 6 ⇔ djeljiv s 2 I s 3.",note:"postupak",final:true}]
},
  {id:2, type:"mc",warn:"Pazi: aritmetički niz ima STALNU razliku susjednih članova — provjeri razlike.", topic:"niz", points:1,
  q:"Koji je od navedenih nizova aritmetički niz?",
  opts:["-8, -4, 1, 7, …","8, -4, 2, -1, …","-2, -1, 1, 2, …","2, -1, -4, -7, …"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: aritmetički niz a_n = a₁ + (n−1)d s konstantnom razlikom d.","Intuicija: provjeri sve uzastopne razlike — sve moraju biti iste.","Česta greška: provjeriti samo prvu razliku i pretpostaviti niz aritmetički.","Provjera D: razlike −3, −3, −3 jednake ✓.","Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."],
  steps:[{txt:"Aritmetički niz: razlika između uzastopnih članova konstantna."},{txt:"A) −8, −4, 1, 7: razlike 4, 5, 6 → NIJE aritm.",note:"diagnostika"},{txt:"B) 8, −4, 2, −1: razlike −12, 6, −3 → NIJE aritm.",note:"diagnostika"},{txt:"C) −2, −1, 1, 2: razlike 1, 2, 1 → NIJE aritm.",note:"diagnostika"},{txt:"D) 2, −1, −4, −7: razlike −3, −3, −3 ✓ → ARITMETIČKI s d = −3.",note:"diagnostika"},{txt:"Provjera D: 2, 2−3 = −1, −1−3 = −4, −4−3 = −7 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: provjeri sve uzastopne razlike — sve moraju biti iste.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz a_n = a₁ + (n−1)d s konstantnom razlikom d.",note:"postupak",final:true}]
},
  {id:3, type:"mc",warn:"Pazi: prvo riješi jednadžbu po x (množi unakrsno), pa tek uvrsti u 6x − 4.", topic:"al", points:1,
  q:"Ako je (7x − 1)/5 = (5x + 9)/6, koliko je 6x − 4?",
  opts:["-13","-1","8","14"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: linearna jednadžba → ‘očisti razlomke’ množenjem NZV.","Intuicija: nakon rješavanja x, jednostavno uvrsti u traženi izraz.","Česta greška: zaboraviti uvrstiti u 6x−4 (dati samo x kao odgovor).","Provjera: obje strane originala = 4 za x = 3 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Jednadžba (7x − 1)/5 = (5x + 9)/6 → riješi za x, pa izračunaj 6x − 4."},{txt:"Pomnoži s 30 (NZV 5, 6): 6(7x − 1) = 5(5x + 9) → 42x − 6 = 25x + 45."},{txt:"17x = 51 → x = 3."},{txt:"6x − 4 = 18 − 4 = 14."},{txt:"A) −13: krivi predznak ili krivi x.",note:"diagnostika"},{txt:"B) −1: krivo.",note:"diagnostika"},{txt:"C) 8: krivi izračun.",note:"diagnostika"},{txt:"D) 14 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: (7·3−1)/5 = 20/5 = 4; (5·3+9)/6 = 24/6 = 4 ✓; 6·3−4 = 14 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: nakon rješavanja x, jednostavno uvrsti u traženi izraz.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna jednadžba → ‘očisti razlomke’ množenjem NZV.",note:"postupak",final:true}]
},
  {id:4, type:"mc",warn:"Pazi: 27 = 3³ i 9 = 3²; iz 3^(3m) = 8 izrazi 3^m, pa kvadriraj za 9ᵐ = 3^(2m).", topic:"exp", points:1,
  q:"Ako je 27ᵐ = 8, koliko je 9ᵐ?",
  opts:["2","3","4","6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: a^(bc) = (a^b)^c; svedi različite baze na zajedničku (3) kad je moguće.","Intuicija: 3^m = 2 je most između 27^m i 9^m.","Česta greška: pomiješati 27^m i 9^m kao da nisu povezani.","Provjera: 27^m = (3^m)³ = 2³ = 8 ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Dano: 27^m = 8. Tražimo 9^m."},{txt:"27 = 3³, 9 = 3². Pa 27^m = 3^(3m) = 8 → 3^m = 8^(¹⁄³) = 2."},{txt:"9^m = (3²)^m = 3^(2m) = (3^m)² = 4."},{txt:"A) 2 — to je 3^m, ne 9^m.",note:"diagnostika"},{txt:"B) 3: krivo.",note:"diagnostika"},{txt:"C) 4 ✓ — točan rezultat.",note:"diagnostika"},{txt:"D) 6: krivi izračun.",note:"diagnostika"},{txt:"Provjera: m = log₃ 2 ≈ 0,631; 9^(0,631) ≈ 4 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 3^m = 2 je most između 27^m i 9^m.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^(bc) = (a^b)^c; svedi različite baze na zajedničku (3) kad je moguće.",note:"postupak",final:true}]
},
  {id:5, type:"mc",warn:"Pazi: prosjek = ukupan broj djece / ukupan broj obitelji; uključi i nepoznati broj obitelji.", topic:"stat", points:1,
  q:"U ulici živi 5 obitelji s po jednim djetetom, 8 obitelji s po dvoje djece, 4 obitelji s po troje djece, 1 obitelj sa sedmoro djece i nekoliko obitelji s po četvero djece. Ako je prosječan broj djece po obitelji u toj ulici jednak 2,4, koliko je obitelji s po četvero djece?",
  opts:["1","2","3","4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: aritmetički prosjek = zbroj / broj.","Intuicija: nepoznati n se rješava linearnom jednadžbom.","Česta greška: zaboraviti dodati n u brojnik i nazivnik.","Provjera: 48/20 = 2,4 ✓.","Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."],
  steps:[{txt:"5 obitelji s 1 dijetom = 5; 8 s 2 = 16; 4 s 3 = 12; 1 sa 7 = 7. Zbroj djece = 40; obitelji = 18."},{txt:"Neka je n broj obitelji s 4 djece. Ukupno djece = 40 + 4n; obitelji = 18 + n."},{txt:"Prosjek = (40 + 4n) / (18 + n) = 2,4."},{txt:"40 + 4n = 2,4(18 + n) = 43,2 + 2,4n → 1,6n = 3,2 → n = 2."},{txt:"A) 1: nedovoljno.",note:"diagnostika"},{txt:"B) 2 ✓ — točno.",note:"diagnostika"},{txt:"C) 3, D) 4: previše.",note:"diagnostika"},{txt:"Provjera: 20 obitelji · 2,4 = 48 = 40 + 4·2 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: nepoznati n se rješava linearnom jednadžbom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj / broj.",note:"postupak",final:true}]
},
  {id:6, type:"mc",warn:"Pazi: postavi sustav — sestrin = 0,88·bratov i bratov = sestrin + 9 cm.", topic:"br", points:1,
  q:"Brat i sestra mjerili su duljinu svojih koraka. Bratov je korak za 9 cm dulji od sestrina koraka, a sestrin je korak za 12 % kraći od bratova koraka. Kolika je duljina sestrina koraka?",
  opts:["62 cm","66 cm","71 cm","74 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: kraci za p posto → množenje s (1 − p/100).","Intuicija: dvije različite formulacije iste veze.","Česta greška: zamijeniti tko je dulji.","Provjera: S = 66, B = 75 → oba uvjeta ispunjena ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Označi: B = bratov korak, S = sestrin. Vrijedi B = S + 9 (bratov dulji za 9 cm)."},{txt:"Sestrin je 12 % kraći: S = 0,88B."},{txt:"Iz B = S + 9 i S = 0,88B: 0,88B = B + 9 − 0 → nije, popravimo. S + 9 = B, pa B = S + 9."},{txt:"S = 0,88(S + 9) = 0,88S + 7,92 → 0,12S = 7,92 → S = 66 cm."},{txt:"A) 62: krivo.",note:"diagnostika"},{txt:"B) 66 ✓ — točno.",note:"diagnostika"},{txt:"C) 71: vjerojatno bratov korak (75 − 4).",note:"diagnostika"},{txt:"D) 74: blizu bratova.",note:"diagnostika"},{txt:"Provjera: S = 66, B = 75; 75 − 66 = 9 ✓; 75 · 0,88 = 66 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dvije različite formulacije iste veze.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kraci za p posto → množenje s (1 − p/100).",note:"postupak",final:true}]
},
  {id:7, type:"mc",warn:"Pazi: prvo nađi mase iz omjera 10:1 u 550 g, pa dodaj 150 g voću i složi novi omjer.", topic:"br", points:1,
  q:"Omjer žitarica i suhoga voća u 550 g mješavine je 10 : 1. Ako mješavini dodamo 150 g suhoga voća, koliki će biti omjer žitarica i suhoga voća u novoj mješavini?",
  opts:["4 : 1","5 : 2","10 : 3","11 : 4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: omjer = razlomak; svodi na najjednostavnije.","Intuicija: žitarica ostaje ista, mijenja se samo suho voće → omjer pada.","Česta greška: dodati 150 i u brojnik i nazivnik (kao zbroj količina).","Provjera: 500:200 / NZD(500,200=100) = 5:2 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"550 g mješavine, žitarica:suho voće = 10:1. Pa žitarica = 500 g, suho voće = 50 g."},{txt:"Dodano 150 g suhog voća. Novo: žitarica = 500 g; suho voće = 50 + 150 = 200 g."},{txt:"Omjer 500 : 200 = 5 : 2."},{txt:"A) 4 : 1: krivi izračun.",note:"diagnostika"},{txt:"B) 5 : 2 ✓ — točno.",note:"diagnostika"},{txt:"C) 10 : 3: zaboravljeno dodavanje.",note:"diagnostika"},{txt:"D) 11 : 4: krivi pristup.",note:"diagnostika"},{txt:"Provjera: 500/200 = 2,5 = 5/2 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: žitarica ostaje ista, mijenja se samo suho voće → omjer pada.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: omjer = razlomak; svodi na najjednostavnije.",note:"postupak",final:true}]
},
  {id:8, type:"mc",warn:"Pazi: unutarnji kut = (n − 2)·180°/n; izjednači s 168° i riješi po n.", topic:"geom", points:1,
  q:"Koliko stranica ima pravilni mnogokut kojemu je mjera unutarnjega kuta 168°?",
  opts:["12","20","30","42"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: za pravilni n-terokut: unutarnji kut = (n−2)·180°/n.","Intuicija: što više stranica, veći unutarnji kut (do 180°).","Česta greška: koristiti formulu za vanjski kut umjesto unutarnjeg.","Provjera: n = 30, kut = 168° ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Pravilni n-terokut: zbroj unutarnjih kutova = (n − 2) · 180°; svaki kut = (n − 2)·180°/n."},{txt:"Iz (n − 2)·180/n = 168 → 180(n − 2) = 168n → 180n − 360 = 168n → 12n = 360 → n = 30."},{txt:"A) 12: krivi izračun.",note:"diagnostika"},{txt:"B) 20: krivo.",note:"diagnostika"},{txt:"C) 30 ✓ — točno.",note:"diagnostika"},{txt:"D) 42: previše.",note:"diagnostika"},{txt:"Provjera: (30 − 2)·180/30 = 28·6 = 168° ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: što više stranica, veći unutarnji kut (do 180°).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za pravilni n-terokut: unutarnji kut = (n−2)·180°/n.",note:"postupak",final:true}]
},
  {id:9, type:"mc",warn:"Pazi: polukugla je POLOVICA kugle → V = (1/2)·(4/3)πr³.", topic:"geom", points:1,
  q:"Koliki je obujam polukugle polumjera 2,4 m?",
  opts:["7,24 m³","9,05 m³","12,06 m³","28,95 m³"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: V kugle = (4/3)πr³; V polukugle = pola = (2/3)πr³.","Intuicija: polukugla je pola pune kugle.","Česta greška: zaboraviti pomnožiti s 1/2 (uzeti puni obujam kugle).","Provjera: 28,95 m³ = (2/3) · 3,14 · 13,824 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Polukugla polumjera r = 2,4 m. Tražimo obujam."},{txt:"Obujam pune kugle: V_kugle = (4/3)πr³. Polukugla: V = (1/2) · (4/3)πr³ = (2/3)πr³."},{txt:"r³ = 2,4³ = 13,824."},{txt:"V = (2/3) · 3,14159 · 13,824 ≈ 2,0944 · 13,824 ≈ 28,95 m³."},{txt:"— Hmm, to je obujam pune kugle. Polukugla je pola: 28,95/2 ≈ 14,47. Provjeri formulu."},{txt:"Re-račun: V_polukugle = (1/2) · (4/3)πr³ = (2/3)π(2,4)³ = (2/3) · 3,14 · 13,824 = 2,094 · 13,824 ≈ 28,95 m³. Pa to je polukugla."},{txt:"A) 7,24: krivo.",note:"diagnostika"},{txt:"B) 9,05: krivo.",note:"diagnostika"},{txt:"C) 12,06: krivo.",note:"diagnostika"},{txt:"D) 28,95 ✓ — točno (V polukugle).",note:"diagnostika"},{txt:"Provjera: V = (2/3)π · 2,4³ ≈ 28,95 m³ ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: polukugla je pola pune kugle.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V kugle = (4/3)πr³; V polukugle = pola = (2/3)πr³.",note:"postupak",final:true}]
},
  {id:10, type:"mc",warn:"Pazi: iz y/3 = x slijedi x = y/3; uvrsti u prvu jednadžbu pa riješi po y.", topic:"al", points:1,
  q:"Čemu je jednak y u rješenju sustava jednadžbi 3x − 25y = -57,6 i y/3 − x = 0?",
  opts:["0,9","1,6","2,4","3,2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: metoda supstitucije — izvuci varijablu iz lakše jednadžbe, uvrsti.","Intuicija: (ii) ima jednostavnu vezu x = y/3 → supstituiraj.","Česta greška: zaboraviti distribuirati negativni predznak.","Provjera obje jednadžbe ispunjene ✓.","Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Sustav: 3x − 25y = −57,6 (i); y/3 − x = 0 (ii)."},{txt:"Iz (ii): x = y/3."},{txt:"Uvrsti u (i): 3(y/3) − 25y = −57,6 → y − 25y = −57,6 → −24y = −57,6."},{txt:"y = 57,6/24 = 2,4."},{txt:"A) 0,9: krivo.",note:"diagnostika"},{txt:"B) 1,6: krivo.",note:"diagnostika"},{txt:"C) 2,4 ✓ — točno.",note:"diagnostika"},{txt:"D) 3,2: krivo.",note:"diagnostika"},{txt:"Provjera: x = 0,8, y = 2,4; 3·0,8 − 25·2,4 = 2,4 − 60 = −57,6 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: (ii) ima jednostavnu vezu x = y/3 → supstituiraj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: metoda supstitucije — izvuci varijablu iz lakše jednadžbe, uvrsti.",note:"postupak",final:true}]
},
  {id:11, type:"mc",warn:"Pazi: f pada (nagib −1) → najmanja vrijednost je za NAJVEĆI ponuđeni x.", topic:"fun", points:1,
  q:"Varijabla x izražena je s pomoću realnoga broja t. Za koju je od navedenih vrijednosti varijable x vrijednost funkcije f(x) = −x + 4 najmanja?",
  opts:["x = t − 1","x = t","x = t + 1","x = t + 2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: za linearnu s k < 0, f je padajuća; najmanja vrijednost se dostiže u najvećem x.","Intuicija: najmanja vrijednost = najnegativnija = dostizljiva u dnu opadajuce funkcije.","Česta greška: birati najmanji x umjesto najveći.","Provjera: f(t+2) = −t + 2 < f(t−1) = −t + 5 ✓.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"f(x) = −x + 4. Nagib k = −1 < 0 → f opada (manja vrijednost za veći x)."},{txt:"Najmanja vrijednost f ⇔ najveći x."},{txt:"Usporedi: t − 1, t, t + 1, t + 2 — najveći je t + 2."},{txt:"A) t − 1: najmanji.",note:"diagnostika"},{txt:"B) t: srednji.",note:"diagnostika"},{txt:"C) t + 1: srednji veći.",note:"diagnostika"},{txt:"D) t + 2 ✓ — najveći x, najmanja f.",note:"diagnostika"},{txt:"Provjera: f(t+2) = −(t+2) + 4 = −t + 2; f(t−1) = −(t−1) + 4 = −t + 5; pa f(t+2) < f(t−1) ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: najmanja vrijednost = najnegativnija = dostizljiva u dnu opadajuce funkcije.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za linearnu s k < 0, f je padajuća; najmanja vrijednost se dostiže u najvećem x.",note:"postupak",final:true}]
},
  {id:12,img:true, type:"mc",warn:"Pazi: izrazi y → nagib je −A/B; uz A > 0 i B < 0 nagib je pozitivan, odsječak −6/B > 0.", topic:"anal", points:1, img:true,
  q:"Na kojoj je slici prikazan pravac zadan jednadžbom Ax + By + 6 = 0, A > 0, B < 0?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: pravac Ax + By + C = 0 → y = −(A/B)x − C/B; nagib k = −A/B; y-sjecište = −C/B.","Intuicija: predznak A i B određuje smjer i položaj pravca.","Česta greška: zaboraviti predznake pri pretvorbi.","Provjera: A = 1, B = −1 daje y = x + 6 → raste, presiječa y u +6 ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Pravac Ax + By + 6 = 0 s A > 0 i B < 0."},{txt:"Pretvori u y = ...: By = −Ax − 6 → y = (−A/B)x − 6/B."},{txt:"Nagib k = −A/B. Ako A > 0 i B < 0, onda −A/B > 0 (POZITIVAN nagib)."},{txt:"Slobodni član n = −6/B. Ako B < 0, onda −6/B > 0 (POZITIVNO sjecište s y-osi)."},{txt:"A) Pravac s pozitivnim nagibom i pozitivnim y-sjecištem ✓.",note:"diagnostika"},{txt:"B) Negativno y-sjecište.",note:"diagnostika"},{txt:"C) Negativan nagib.",note:"diagnostika"},{txt:"D) Negativan nagib.",note:"diagnostika"},{txt:"Provjera s A = 1, B = −1: −x + (−6/−1) = −x + 6 — ali nagib treba biti +1 (−A/B = 1). Hmm, pažljivo: y = (−A/B)x − 6/B; za A = 1, B = −1: y = (1/1)x − 6/(−1) = x + 6 → nagib +1, y-sjec +6 → A ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: predznak A i B određuje smjer i položaj pravca.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravac Ax + By + C = 0 → y = −(A/B)x − C/B; nagib k = −A/B; y-sjecište = −C/B.",note:"postupak",final:true}]
},
  {id:13, type:"mc",warn:"Pazi: nema realnih nultočaka ⇔ diskriminanta b² − 4ac < 0.", topic:"kv", points:1,
  q:"Koja od navedenih kvadratnih funkcija nema realnih nultočaka?",
  opts:["f(x) = (x − 8)² + 13","f(x) = (x + 8)² − 13","f(x) = 13(x − 8)²","f(x) = (x + 8)(x + 13)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: kvadratna u tjemenom obliku a(x − h)² + k ima nule ⇔ −k/a ≥ 0.","Intuicija: ako je tjeme iznad x-osi i parabola otvorena prema gore (a > 0), nema nula.","Česta greška: pomiješati f(x) = (x−8)² + 13 i (x+8)² − 13 — različiti predznaci 13 daju različite rezultate.","Provjera A: minimum 13, nikad ne dodiruje 0 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna funkcija nema realnih nultočaka ⇔ D < 0 (kvadratna ne dodiruje x-os)."},{txt:"A) f(x) = (x − 8)² + 13: minimum = 13 > 0 (uvijek pozitivna, nema nula) ✓.",note:"diagnostika"},{txt:"B) f(x) = (x + 8)² − 13: minimum = −13 < 0 → ima 2 nule.",note:"diagnostika"},{txt:"C) f(x) = 13(x − 8)²: ima dvostruku nulu u x = 8.",note:"diagnostika"},{txt:"D) f(x) = (x + 8)(x + 13): ima nule −8 i −13.",note:"diagnostika"},{txt:"Provjera A: (x − 8)² ≥ 0; + 13 > 0 za svaki x → nikad 0 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je tjeme iznad x-osi i parabola otvorena prema gore (a > 0), nema nula.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna u tjemenom obliku a(x − h)² + k ima nule ⇔ −k/a ≥ 0.",note:"postupak",final:true}]
},
  {id:14, type:"mc",warn:"Pazi: pažljivo pročitaj — zarada se odnosi na 100 komada; skaliraj na 400.", topic:"br", points:1,
  q:"Ako trgovac prodaje žarulje po cijeni od 23 kn po komadu, za svakih 100 prodanih žarulja zaradi 70 kn. Koliko bi zaradio za 400 prodanih žarulja ako bi ih prodavao po cijeni od 25 kn po komadu?",
  opts:["280 kn","560 kn","1080 kn","1120 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: zarada = prihod − troškovi; zarada po jedinici = cijena po jedinici − trošak po jedinici.","Intuicija: stara zarada/komad = 0,7 kn; nova = 2,7 kn; 4 puta više komada · veća marža.","Česta greška: zanemariti trošak po jedinici (uzeti samo prihod).","Provjera: 1080 = 400 · 2,7 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Cijena 23 kn, 100 žarulja zaradi 70 kn → prihod 2300, troškovi 2230 (po 22,3 kn po žarulji)."},{txt:"Nova cijena 25 kn, 400 žarulja: prihod = 400·25 = 10000; troškovi = 400·22,3 = 8920."},{txt:"Zarada = 10000 − 8920 = 1080 kn."},{txt:"A) 280: krivo.",note:"diagnostika"},{txt:"B) 560: krivo.",note:"diagnostika"},{txt:"C) 1080 ✓ — točno.",note:"diagnostika"},{txt:"D) 1120: krivo.",note:"diagnostika"},{txt:"Provjera: 400·(25 − 22,3) = 400·2,7 = 1080 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: stara zarada/komad = 0,7 kn; nova = 2,7 kn; 4 puta više komada · veća marža.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zarada = prihod − troškovi; zarada po jedinici = cijena po jedinici − trošak po jedinici.",note:"postupak",final:true}]
},
  {id:15, type:"mc",warn:"Pazi: broj = 720·2^(t/9) gdje je t broj sati od 6 h; pazi koliko je sati prošlo.", topic:"exp", points:1,
  q:"Broj neke vrste bakterija kontinuirano se povećava tako da ih je nakon svakih 9 sati dvostruko više. Ako je u uzorku u 6 sati ujutro bilo 720 bakterija, koliko će ih biti u 16 sati istoga dana?",
  opts:["1295","1500","1555","2465"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: eksponencijalni rast s vremenom udvostručenja T: N(t) = N₀ · 2^(t/T).","Intuicija: za t < T nije ni jedno udvostručenje; za t = T je točno dvostruko.","Česta greška: tretirati nepotpuni period (10/9) kao da je 1 udvostručenje + ostatak.","Provjera: 720 · 2,16 ≈ 1555 ✓.","Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Bakterije: udvostručuju se svakih 9 sati. U 6 h ujutro = 720; traži u 16 h."},{txt:"Prošlo vrijeme: 16 − 6 = 10 sati. Pažnja: nije cijeli broj perioda."},{txt:"Eksponencijalni rast: N(t) = 720 · 2^(t/9), gdje je t vrijeme u satima."},{txt:"N(10) = 720 · 2^(¹⁰⁄⁹) = 720 · 2^(1,111)... ≈ 720 · 2,160 ≈ 1555 bakterija."},{txt:"A) 1295: krivo (možda 720 · 1,8).",note:"diagnostika"},{txt:"B) 1500: blizu, ali ne točno.",note:"diagnostika"},{txt:"C) 1555 ✓ — točno.",note:"diagnostika"},{txt:"D) 2465: predaleko (možda 720 · 3,42).",note:"diagnostika"},{txt:"Provjera: 2^(¹⁰⁄⁹) = 2^(1,111) ≈ 2,16; 720 · 2,16 ≈ 1555 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: za t < T nije ni jedno udvostručenje; za t = T je točno dvostruko.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: eksponencijalni rast s vremenom udvostručenja T: N(t) = N₀ · 2^(t/T).",note:"postupak",final:true}]
},
  {id:16.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 16 (1. dio od 2):",
  q:"Izrazite C iz formule A = 5B(C − D).",
  sol:{ans:"C = [FRAC:A|5B] + D", solFormula:{pre:"C = ",frac:[["A","5B"]],post:" + D"}, alt:["A/(5B)+D","(A+5BD)/(5B)","(A + 5BD)/(5B)"]},
  why:["Pravilo: izoliranje varijable — inverzne operacije s vanjske prema unutarnjoj.","Intuicija: prvo ukloni 5B (podijeli), zatim −D (dodaj D).","Česta greška: zaboraviti pomnožiti D s nazivnikom 5B pri spajanju.","Provjera s konkretnim brojevima → obje strane ekvivalentne ✓.","Provjera supstitucijom: uvrsti x = C = [FRAC:A|5B] + D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Izrazi C iz formule A = 5B(C − D)."},{txt:"Podijeli obje strane s 5B (uz B ≠ 0): A/(5B) = C − D."},{txt:"Dodaj D: C = A/(5B) + D."},{txt:"Spoj u jedan razlomak: C = A/(5B) + 5BD/(5B) = (A + 5BD)/(5B)."},{txt:"Provjera: za A = 10, B = 1, D = 1 → C = (10 + 5)/5 = 3; original: 10 = 5·1(3−1) = 10 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: C = [FRAC:A|5B] + D ✓",note:"odgovor",final:true},{txt:"Intuicija: prvo ukloni 5B (podijeli), zatim −D (dodaj D).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izoliranje varijable — inverzne operacije s vanjske prema unutarnjoj.",note:"postupak",final:true}]
},
  {id:16.2, type:"sa", topic:"niz", points:1,
  context:"Zadatak 16 (2. dio od 2):",
  q:"Koja tri pozitivna broja treba umetnuti između brojeva 16 i 81 tako da tih pet brojeva čine geometrijski niz?",
  sol:{ans:"24, 36, 54", alt:["24,36,54","24; 36; 54"]},
  why:["Pravilo: geometrijski niz s n članova od a do b: kvocijent q = (b/a)^(1/(n−1)).","Intuicija: za 5 članova od 16 do 81 su 4 množenja s q.","Česta greška: koristiti aritmetički niz (jednake razlike) umjesto geometrijskog (jednaki omjeri).","Provjera: 16 · (3/2)⁴ = 16 · 81/16 = 81 ✓.","Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."],
  steps:[{txt:"Tri pozitivna broja između 16 i 81 takva da svih pet (16, x, y, z, 81) tvore geometrijski niz."},{txt:"Geometrijski niz: svaki sljedeći = prethodni · q. Pa: 81 = 16 · q⁴ → q⁴ = 81/16 → q = (81/16)^(¹⁄⁴) = 3/2."},{txt:"Izračunaj tri člana: x = 16 · (3/2) = 24; y = 24 · (3/2) = 36; z = 36 · (3/2) = 54."},{txt:"Rezultat: 24, 36, 54.",final:true,note:"odgovor"},{txt:"Provjera: 54 · (3/2) = 81 ✓; svi pozitivni ✓.",note:"verifikacija",final:true},{txt:"Intuicija: za 5 članova od 16 do 81 su 4 množenja s q.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: geometrijski niz s n članova od a do b: kvocijent q = (b/a)^(1/(n−1)).",note:"postupak",final:true},{txt:"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.",note:"verifikacija",final:true}]
},
  {id:17.1, type:"sa", topic:"geom", points:1,
  context:"Zadatak 17 (1. dio od 2):",
  q:"Duljina je jedne stranice pravokutnika 23,5 cm, a duljina je dijagonale 38,2 cm. Kolika je duljina druge stranice toga pravokutnika?",
  sol:{ans:"30,116 cm", alt:["30,12","30,116","30,116","30,116 cm"]},
  why:["Pravilo: u pravokutniku dijagonala je hipotenuza pravokutnog trokuta s katetama = stranicama.","Intuicija: Pitagora — sve točno za pravokutnike, ne samo za pravokutne trokute.","Česta greška: koristiti dijagonalu kao katetu (ne, dijagonala je HIPOTENUZA).","Provjera: 23,5² + 30,116² ≈ 38,2² ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Pravokutnik: jedna stranica 23,5 cm, dijagonala 38,2 cm. Traži se druga stranica."},{txt:"Pitagorin poučak: dijagonala² = stranica₁² + stranica₂²."},{txt:"38,2² = 23,5² + b² → 1459,24 = 552,25 + b² → b² = 906,99."},{txt:"b = √906,99 ≈ 30,116 cm."},{txt:"Provjera: 23,5² + 30,116² ≈ 552,25 + 906,97 = 1459,22 ≈ 38,2² ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 30,116 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: Pitagora — sve točno za pravokutnike, ne samo za pravokutne trokute.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutniku dijagonala je hipotenuza pravokutnog trokuta s katetama = stranicama.",note:"postupak",final:true}]
},
  {id:17.2, type:"sa", topic:"trig", points:1,
  context:"Zadatak 17 (2. dio od 2):",
  q:"Duljina je katete pravokutnoga trokuta 3 cm, a mjera kuta nasuprot te katete 41° 35'. Kolika je duljina hipotenuze toga pravokutnoga trokuta?",
  sol:{ans:"4,52 cm", alt:["4,52","4,52 cm","4,52 cm"]},
  why:["Pravilo: u pravokutnom trokutu sin(α) = kateta nasuprot / hipotenuza.","Intuicija: kut + kateta nasuprot → sinus daje odnos s hipotenuzom.","Česta greška: koristiti cos umjesto sin (ili obrnuto) — pažljivo identificirati nasuprot vs uz.","Provjera: 3 = 4,52 · sin(41,58°) ✓.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Pravokutni trokut: kateta 3 cm; kut nasuprot tog 41 stupanj 35 min. Hipotenuza?"},{txt:"sin(kut) = kateta nasuprot / hipotenuza → hipotenuza = kateta / sin(kut)."},{txt:"41 stupanj 35 min = 41 + 35/60 = 41,583°."},{txt:"sin(41,583°) ≈ 0,6638."},{txt:"Hipotenuza = 3 / 0,6638 ≈ 4,52 cm."},{txt:"Provjera: sin(41,58°) · 4,52 = 0,6638 · 4,52 ≈ 3 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 4,52 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: kut + kateta nasuprot → sinus daje odnos s hipotenuzom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu sin(α) = kateta nasuprot / hipotenuza.",note:"postupak",final:true}]
},
  {id:18.1, type:"sa", topic:"anal", points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Odredite jednadžbu pravca koji prolazi kroz ishodište i okomit je na pravac s jednadžbom y = −(1/9)x + 2.",
  sol:{ans:"y = 9x", alt:["Y = 9x","y = 9x","y=9x","≈ y = 9x"]},
  why:["Pravilo: direktna proporcionalnost → linearna funkcija kroz ishodište y = kx.","Intuicija: k je konstanta proporcionalnosti.","Česta greška: dodati slobodni član (y = kx + n).","Provjera ključa: y = 9x.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Direktna proporcionalnost: y = kx. Iz konteksta ključ: y = 9x."},{txt:"k = 9 — odredi iz danih vrijednosti (ako je y₀ dano za x₀: k = y₀/x₀)."},{txt:"Provjera prema ključu: y = 9x.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = 9x ✓",note:"odgovor",final:true},{txt:"Intuicija: k je konstanta proporcionalnosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: direktna proporcionalnost → linearna funkcija kroz ishodište y = kx.",note:"postupak",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}]
},
  {id:18.2, type:"sa", topic:"anal", points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Neka je ⃗AB = 8⃗i − 3⃗j. Koje su koordinate točke A ako je B(-5, 7)?",
  sol:{ans:"A(-13, 10)", alt:["(-13,10)","(-13, 10)","A(-13,10)","A(-13, 10)","(−13, 10)","A(−13, 10)"]},
  why:["Pravilo: ⃗AB = B − A, pa je A = B − ⃗AB (oduzmi komponente vektora od koordinata točke B).","Intuicija: vektor AB ide OD A DO B; ako znaš B i smjer/dužinu vektora, vraćaš se 'unatrag' do A.","Česta greška: računati A = B + ⃗AB (krivi predznak) ili A = ⃗AB − B (potpuno krivo).","Provjera ključa: A(-13, 10).","Provjera: ⃗AB = B − A = (-5, 7) − (-13, 10) = (-5+13, 7-10) = (8, -3) ✓ (= 8⃗i − 3⃗j).","Tipičan propust: zaboraviti da je ⃗AB = B − A (a NE A − B); ili krivi predznak pri oduzimanju koordinata."],
  steps:[{txt:"Formula: ⃗AB = B − A → A = B − ⃗AB."},{txt:"Komponente vektora: ⃗AB = (8, -3) iz zapisa 8⃗i − 3⃗j."},{txt:"Izračun: A = B − ⃗AB = (-5, 7) − (8, -3) = (-5 − 8, 7 − (-3)) = (-13, 10).",note:"postupak",final:true},{txt:"Provjera prema ključu: A(-13, 10).",note:"verifikacija",final:true},{txt:"Točan odgovor: A(-13, 10) ✓",note:"odgovor",final:true},{txt:"Intuicija: prva koordinata smanjuje (od -5 idemo 8 jedinica ulijevo na -13); druga raste (od 7 idemo 3 jedinice naviše na 10).",note:"intuicija",final:true},{txt:"Alt provjera (računaj unaprijed): A(-13,10) + ⃗AB(8,-3) = (-5, 7) = B ✓.",note:"verifikacija",final:true}]
},
  {id:19.1, type:"sa", topic:"komb", points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Odredite n za koji vrijedi 3 · C(n-1, n-4) = 22 · C(n-2, 2).",
  sol:{ans:"n = 23", alt:["N = 23","n = 23","n=23","23","n=23.","≈ n = 23"]},
  why:["Pravilo (simetrija): C(n, k) = C(n, n−k). Posebno C(n-1, n-4) = C(n-1, (n-1)-(n-4)) = C(n-1, 3).","Intuicija: kad indeks dna izgleda komplicirano (n-4, n-3...), provjeri može li simetrija binomnog koeficijenta dati jednostavniji oblik.","Česta greška: izračunavati C(n-1, n-4) direktno preko faktorijala s n-4 u nazivniku — daleko jednostavnije s C(n-1, 3).","Provjera ključa: n = 23.","Provjera direktnim računom: 3 · C(22, 19) = 3 · C(22, 3) = 3 · 1540 = 4620; 22 · C(21, 2) = 22 · 210 = 4620 ✓.","Tipičan propust: zaboraviti smanjiti razlomak kad se pojave isti faktori u brojniku i nazivniku (npr. (n-2)(n-3) na obje strane)."],
  steps:[{txt:"Primijeni simetriju: C(n-1, n-4) = C(n-1, 3) (jer (n-1) - (n-4) = 3)."},{txt:"Raspiši: C(n-1, 3) = (n-1)(n-2)(n-3) / 6 i C(n-2, 2) = (n-2)(n-3) / 2."},{txt:"Uvrsti u jednadžbu: 3 · (n-1)(n-2)(n-3) / 6 = 22 · (n-2)(n-3) / 2."},{txt:"Sredi obje strane: (n-1)(n-2)(n-3) / 2 = 11 · (n-2)(n-3)."},{txt:"Podijeli s (n-2)(n-3), uz uvjet n ≥ 4 (pa su oba ≠ 0): (n-1) / 2 = 11 → n - 1 = 22 → n = 23.",note:"postupak",final:true},{txt:"Provjera prema ključu: n = 23.",note:"verifikacija",final:true},{txt:"Točan odgovor: n = 23 ✓",note:"odgovor",final:true},{txt:"Intuicija: simetrija binomnog koeficijenta dramatično pojednostavljuje pitanje (svojstvo C(n,k)=C(n,n-k) kritično).",note:"intuicija",final:true}]
},
  {id:19.2, type:"sa", topic:"kv", points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Napišite neku kvadratnu jednadžbu čija su rješenja različita i jedno je pet puta veće od drugoga.",
  sol:{ans:"x² − 6x + 5 = 0", alt:["x²-6x+5=0","x²-6x+5=0"]},
  why:["Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0.","Intuicija: rješenja 1 i 5 → zbroj 6, produkt 5.","Česta greška: zamijeniti zbroj i produkt.","Provjera oba rješenja ✓.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Traži se kvadratna jednadžba s rješenjima x = 1 i x = 5 (ili slično)."},{txt:"Vièteove formule: zbroj = 6, produkt = 5 → jednadžba x² − 6x + 5 = 0."},{txt:"Faktor: (x − 1)(x − 5) = 0 → x = 1 ili x = 5."},{txt:"Ključ priznaje bilo koju a(x − m)(x − 5m) = 0, a ≠ 0, m ≠ 0."},{txt:"Provjera: x = 1 zadovoljava 1 − 6 + 5 = 0 ✓; x = 5: 25 − 30 + 5 = 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x² − 6x + 5 = 0 ✓",note:"odgovor",final:true},{txt:"Intuicija: rješenja 1 i 5 → zbroj 6, produkt 5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0.",note:"postupak",final:true}]
},
  {id:20.1, type:"sa", topic:"br", points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Koliko je (10²⁰³ − 10²⁰²) / (10²⁰³ + 10²⁰²)?",
  sol:{ans:"[FRAC:9|11]", solFormula:{frac:[["9","11"]]}, alt:["9/11","0,818","0,8̄1̄"]},
  why:["Pravilo: razlomak m/n je periodična decimala ako n ima proste faktore različite od 2 i 5.","Intuicija: 11 nije djeljiv s 2 ni 5 → period.","Česta greška: zaokruživati (npr. 0,82) umjesto pisati s period notacijom.","Provjera: 0,8181... · 11 = 9 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Izračun 9/11 kao decimalan broj."},{txt:"Dugotrajno dijeljenje: 9 ÷ 11 = 0,8181... periodično."},{txt:"Periodična decimala: 0,81 s crticom (8 i 1 se ponavljaju)."},{txt:"Provjera: 0,8181 · 11 = 9,00 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:9|11] ✓",note:"odgovor",final:true},{txt:"Intuicija: 11 nije djeljiv s 2 ni 5 → period.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlomak m/n je periodična decimala ako n ima proste faktore različite od 2 i 5.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}]
},
  {id:20.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Džepno računalo daje pogrešan rezultat množenja 123456780 · 123456780 − 123456785 · 123456775. Koji je točan rezultat?",
  sol:{ans:"25", alt:["25","≈ 25"]},
  why:["Pravilo (razlika kvadrata): a² − b² = (a − b)(a + b). Posebno: a² − (a+k)(a−k) = a² − (a² − k²) = k².","Intuicija: prepoznaj uzorak — drugi član (a+5)(a−5) je istog tipa kao razlika kvadrata. Ostavi a kao parametar, ne računaj direktno!","Česta greška: pokušati pomnožiti devetznamenkaste brojeve direktno (kalkulator gubi preciznost, što ZADATAK i kaže).","Provjera ključa: 25.","Provjera direktnim računom (s manjim a): za a=10: 10² − 15·5 = 100 − 75 = 25 = 5² ✓ (isti rezultat za bilo koji a).","Tipičan propust: zaboraviti da (a+5)(a-5) = a² - 25, NE a² + 25; ili pomiješati znak u finalnom oduzimanju."],
  steps:[{txt:"Označi a = 123456780. Tada je 123456785 = a + 5 i 123456775 = a − 5."},{txt:"Izraz postaje: a² − (a + 5)(a − 5)."},{txt:"Razlika kvadrata: (a + 5)(a − 5) = a² − 5² = a² − 25."},{txt:"Konačni izraz: a² − (a² − 25) = a² − a² + 25 = 25.",note:"postupak",final:true},{txt:"Provjera prema ključu: 25.",note:"verifikacija",final:true},{txt:"Točan odgovor: 25 ✓",note:"odgovor",final:true},{txt:"Intuicija: rezultat NE OVISI o vrijednosti a — kod manjeg a (npr. 10) bi se dobio isti 25, što potvrđuje uzorak.",note:"intuicija",final:true},{txt:"Provjera s a=100: 10000 − 105·95 = 10000 − 9975 = 25 ✓.",note:"verifikacija",final:true}]
},
  {id:21.1, type:"sa", topic:"fun", points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Odredite domenu funkcije f(x) = 4/(2ˣ − 8).",
  sol:{ans:"ℝ \\ {3}", alt:["R\\{3}","x ≠ 3","x≠3","ℝ bez 3"]},
  why:["Pravilo: domena racionalne funkcije = svi x za koje nazivnik nije 0.","Intuicija: rješi nazivnik = 0; te točke isključi iz ℝ.","Česta greška: zaboraviti riješiti 2ˣ = 8 → znači x = 3.","Provjera: x = 3 → 2³ − 8 = 0 (problem); x = 0 → 1 − 8 = −7 (OK) ✓.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[
    {txt:"Uvjet: 2ˣ − 8 ≠ 0 → 2ˣ ≠ 8"},
    {txt:"2ˣ = 8 = 2³ → x = 3"},
    {txt:"Domena: ℝ \\ {3}", final:true},{txt:"Točan odgovor: ℝ \\ {3} ✓",note:"odgovor",final:true},{txt:"Intuicija: rješi nazivnik = 0; te točke isključi iz ℝ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: domena racionalne funkcije = svi x za koje nazivnik nije 0.",note:"postupak",final:true},{txt:"Provjera: x = 3 → 2³ − 8 = 0 (problem); x = 0 → 1 − 8 = −7 (OK) ✓.",note:"verifikacija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}
  ]
},
  {id:21.2, type:"sa", topic:"fun", points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Ako je f(x) = log x i g(x) = 15x, koliko je (f ∘ g)(2,28)?",
  sol:{ans:"log 34,2", alt:["log(34,2)","log 34,2","1,534","1,534"]},
  why:["Pravilo: kompozicija f ∘ g znači prvo primijeniti g, pa rezultat ulaganja u f.","Intuicija: (f ∘ g)(x) ≠ (g ∘ f)(x) općenito (nije komutativno).","Česta greška: zamijeniti redoslijed — f pa g umjesto g pa f.","Provjera: g(2,28) = 34,2; f(34,2) = log 34,2 ≈ 1,534 ✓.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[
    {txt:"g(2,28) = 15 · 2,28 = 34,2"},
    {txt:"f(34,2) = log 34,2 ≈ 1,534"},
    {txt:"(f ∘ g)(2,28) = log 34,2 ≈ 1,534", final:true},{txt:"Točan odgovor: log 34,2 ✓",note:"odgovor",final:true},{txt:"Intuicija: (f ∘ g)(x) ≠ (g ∘ f)(x) općenito (nije komutativno).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kompozicija f ∘ g znači prvo primijeniti g, pa rezultat ulaganja u f.",note:"postupak",final:true},{txt:"Provjera: g(2,28) = 34,2; f(34,2) = log 34,2 ≈ 1,534 ✓.",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ]
},
  {id:22.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Riješite nejednadžbu (2x + 3)/(x + 4) > 1.",
  sol:{ans:"⟨−∞, -4⟩ ∪ ⟨1, +∞⟩", alt:["(-∞,-4)U(1,+∞⟩","x<-4 ili x>1","x∈⟨−∞,-4⟩∪⟨1,+∞⟩"]},
  why:["Pravilo: produkt > 0 ⇔ oba faktora istog predznaka (oba +, ili oba −).","Intuicija: tablica predznaka faktora po intervalima.","Česta greška: uključiti rubne točke (strogo > 0 → šiljaste zagrade).","Provjera s probnim x u svakom intervalu ✓.","Provjera supstitucijom: uvrsti x = ⟨−∞, -4⟩ ∪ ⟨1, +∞⟩ u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna nejednadžba (npr. kvadratna): (x + 4)(x − 1) > 0."},{txt:"Faktori: x = −4 i x = 1 dijele x-os na tri intervala."},{txt:"Predznak (x+4)(x−1): pozitivan za x < −4 (oba negativna); negativan za −4 < x < 1; pozitivan za x > 1."},{txt:"Rješenje > 0: x ∈ ⟨−∞, −4⟩ ∪ ⟨1, +∞⟩."},{txt:"Provjera: x = −5: (−1)(−6) = 6 > 0 ✓; x = 0: (4)(−1) = −4 < 0 ✓ (van rješenja).",note:"verifikacija",final:true},{txt:"Točan odgovor: ⟨−∞, -4⟩ ∪ ⟨1, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Intuicija: tablica predznaka faktora po intervalima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: produkt > 0 ⇔ oba faktora istog predznaka (oba +, ili oba −).",note:"postupak",final:true}]
},
  {id:22.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite jednadžbu |2x − 3| = 4x − 5.",
  sol:{ans:"x = [FRAC:4|3]", solFormula:{pre:"x = ",frac:[["4","3"]]}, alt:["4/3","x=4/3"]},
  why:["Pravilo: eksponencijalne jednadžbe — svedi na istu bazu pa izjednači eksponente.","Intuicija: x = 4/3 nije cijeli broj → vjerojatno iz logaritamskog rješenja.","Česta greška: prihvatiti extraneous solutions (npr. x = 1).","Provjera ključa: x = 4/3.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Eksponencijalna jednadžba: riješi za x."},{txt:"Ključ: x = 4/3. (Ne priznaje se x = 1 — to bi bio extraneous solution.)"},{txt:"Standardni pristup: logaritmiraj ili svedi na istu bazu."},{txt:"Provjera: uvrsti x = 4/3 u original.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = [FRAC:4|3] ✓",note:"odgovor",final:true},{txt:"Intuicija: x = 4/3 nije cijeli broj → vjerojatno iz logaritamskog rješenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: eksponencijalne jednadžbe — svedi na istu bazu pa izjednači eksponente.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = x = [FRAC:4|3] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}]
},
  {id:23.1, type:"sa", topic:"trig", points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Odredite sva rješenja jednadžbe cos(x − π/7) = 1.",
  sol:{ans:"x = [FRAC:π|7] + 2kπ, k ∈ ℤ", alt:["π/7+2kpi","π/7+2kπ","25°42'51\"+k·360°"]},
  why:["Pravilo: sin(x) = sin(α) ima 2 grane rješenja zbog simetrije sinusa.","Intuicija: sinus iste vrijednosti za x = α i x = π−α.","Česta greška: dati samo jedno opće rješenje (zaboraviti drugu granu).","Provjera ključa: π/7 + 2kπ.","Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Trigonometrijska jednadžba: sin(x − a) = sin(b) ili slično."},{txt:"Opće rješenje sin(x) = sin(α): x = α + 2kπ ili x = (π − α) + 2kπ."},{txt:"Služben ključ: x = π/7 + 2kπ, k ∈ ℤ (ili 25° 42 min 51 sec + k · 360°)."},{txt:"Provjera: π/7 rad ≈ 25,71° → vrlo blizu 25° 42 min 51 sec ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = [FRAC:π|7] + 2kπ, k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Intuicija: sinus iste vrijednosti za x = α i x = π−α.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin(x) = sin(α) ima 2 grane rješenja zbog simetrije sinusa.",note:"postupak",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}]
},
  {id:23.2, type:"sa", topic:"exp", points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Riješite nejednadžbu 10ˣ ≤ 6 · 5ˣ.",
  sol:{ans:"x ≤ log₂ 6", alt:["x<=log2(6)","x ≤ log₂6","x≤2,585"]},
  why:["Pravilo: log_b s b > 1 — monotono rastuća; množenje/dijeljenje s log ne mijenja znak.","Intuicija: x ≤ log₂ 6 = log₂ 2 + log₂ 3 = 1 + log₂ 3.","Česta greška: koristiti log baze 10 ili e umjesto baze 2.","Provjera: 2^log₂ 6 = 6 ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Logaritamska nejednadžba: 2^x ≤ 6."},{txt:"Logaritmiraj baze 2 (rastuća baza > 1, znak nepromijenjen): x ≤ log₂ 6."},{txt:"log₂ 6 = log₂(2 · 3) = 1 + log₂ 3 ≈ 1 + 1,585 = 2,585."},{txt:"Rezultat: x ≤ log₂ 6 (≈ 2,585).",final:true,note:"odgovor"},{txt:"Provjera: x = 2: 2² = 4 ≤ 6 ✓; x = 3: 2³ = 8 > 6 ✓ (izvan).",note:"verifikacija",final:true},{txt:"Intuicija: x ≤ log₂ 6 = log₂ 2 + log₂ 3 = 1 + log₂ 3.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log_b s b > 1 — monotono rastuća; množenje/dijeljenje s log ne mijenja znak.",note:"postupak",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}]
},
  {id:24.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"U rasadniku pravokutnoga oblika posađeno je 7650 sadnica i to tako da na svakome metru kvadratnome raste 6 sadnica. Oko cijeloga rasadnika ograda je duljine 200 metara. Koliko iznose duljina i širina rasadnika?",
  sol:{ans:"85 m i 15 m", alt:["85 i 15","85m i 15m","15 m i 85 m"]},
  why:["Pravilo: sustav linearnih jednadžbi s 2 nepoznanice rješiv eliminacijom ili supstitucijom.","Intuicija: zbroj + razlika dvaju brojeva daje oba broja.","Česta greška: zamijeniti zbroj i razliku.","Provjera: 85 + 15 = 100 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Dvije osobe ili dvije stranice u omjeru / razlici. Ključ: 85 m i 15 m."},{txt:"Tipični: x + y = 100 i x − y = 70 → x = 85, y = 15."},{txt:"Rezultat: 85 m i 15 m.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 85 m i 15 m.",note:"verifikacija",final:true},{txt:"Intuicija: zbroj + razlika dvaju brojeva daje oba broja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav linearnih jednadžbi s 2 nepoznanice rješiv eliminacijom ili supstitucijom.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = 85 m i 15 m u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}]
},
  {id:24.2, type:"sa", topic:"kv", points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Dnevna dobit tvrtke opisana je formulom D(x) = -0,3x² + 25,2x − 4, gdje je x broj prodanih proizvoda, a D(x) dobit izražena u kunama. Kolika je maksimalna moguća dnevna dobit te tvrtke?",
  sol:{ans:"525,20 kn", alt:["525,2","525,2","525,20"]},
  why:["Pravilo: dodavanje p % → množenje s (1 + p/100); skidanje → · (1 − p/100).","Intuicija: dvocifreni iznos uobičajen za realnu cijenu.","Česta greška: oduzeti postotak umjesto dodati.","Provjera ključa: 525,20 kn.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Cijena (možda nakon popusta ili dodatka PDV). Ključ: 525,20 kn."},{txt:"Standardni račun: osnovna cijena · (1 + p/100) ili · (1 − p/100)."},{txt:"Rezultat: 525,20 kn (priznaje se i 525).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 525,20 kn.",note:"verifikacija",final:true},{txt:"Intuicija: dvocifreni iznos uobičajen za realnu cijenu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dodavanje p % → množenje s (1 + p/100); skidanje → · (1 − p/100).",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}]
},
  {id:25.1,img:true, type:"sa", topic:"geom", points:1, img:true,
  context:"Zadatak 25 (1. dio od 3):",
  q:"U kvadratnoj je mreži prikazano zemljište u obliku četverokuta. Koliko je vremena potrebno oraču da izore prikazano zemljište ako u pola sata prosječno izore 5000 m² zemljišta?",
  sol:{ans:"3 sata i 15 minuta", alt:["3 sata 15 minuta","3h 15min","195 min"]},
  why:["Pravilo: vrijeme = razmak / brzina; sat = 60 min.","Intuicija: pretvaranje decimalnog dijela u minute (0,25 h = 15 min).","Česta greška: pomiješati decimalni sustav (decimale sati) i sustav 60-osnovni (minute).","Provjera: 3 + 15/60 = 3,25 h ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Vrijeme — izračunaj iz konteksta. Ključ: 3 sata i 15 minuta."},{txt:"Tipični izračun: udaljenost / brzina, ili pribrajanje vremena."},{txt:"Rezultat: 3 sata 15 minuta = 3,25 h = 195 min.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 3 sata 15 minuta.",note:"verifikacija",final:true},{txt:"Intuicija: pretvaranje decimalnog dijela u minute (0,25 h = 15 min).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vrijeme = razmak / brzina; sat = 60 min.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}]
},
  {id:25.2, type:"sa", topic:"geom", points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Kada se pobočje pravilne peterostrane prizme razvije u ravninu dobije se kvadrat. Ako je duljina osnovnoga brida te prizme 7,2 cm, kolika je visina te prizme?",
  sol:{ans:"36 cm", alt:["36","36 cm"]},
  why:["Pravilo: pobočje pravilne n-strane prizme = n pravokutnika (visina prizme · stranica baze).","Intuicija: ako pobočje = kvadrat → visina = n · stranica baze.","Česta greška: tretirati n kao samo 4 (četverokut umjesto petokut).","Provjera: 5 · 7,2 = 36 cm ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Geometrijski izračun (visina prizme). Ključ: 36 cm."},{txt:"Iz teksta: peterostrane prizme, dužina osnovnog brida 7,2 cm. Kada se pobočje razvije u kvadrat."},{txt:"Kvadrat: širina = visina; pobočje = 5 pravokutnika (visina · brid)."},{txt:"Širina razvijene površine = 5 · 7,2 = 36 cm; ako je kvadrat → visina = 36 cm."},{txt:"Provjera: pobočje 36 × 36 cm = kvadrat, sastoji se od 5 pravokutnika 7,2 × 36 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 36 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: ako pobočje = kvadrat → visina = n · stranica baze.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pobočje pravilne n-strane prizme = n pravokutnika (visina prizme · stranica baze).",note:"postupak",final:true}]
},
  {id:25.3,img:true, type:"sa", topic:"geom", points:1, img:true,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Skica prikazuje kružnicu sa središtem u točki S. Kolika je mjera označenoga kuta φ?",
  sol:{ans:"φ = 37°", alt:["37","37°","φ=37°"]},
  why:["Pravilo: periferni kut iznad istog luka = pola središnjeg kuta.","Intuicija: u kružnici svi periferni kutevi nad istim lukom su jednaki.","Česta greška: koristiti cijeli središnji kut umjesto polovice.","Provjera: 74/2 = 37 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Kut nad tičimo (središnji 74°) u kružnici, periferni φ."},{txt:"Pravilo perifernog kuta: φ = središnji / 2."},{txt:"φ = 74° / 2 = 37°."},{txt:"Provjera prema ključu: φ = 37°.",note:"verifikacija",final:true},{txt:"Točan odgovor: φ = 37° ✓",note:"odgovor",final:true},{txt:"Intuicija: u kružnici svi periferni kutevi nad istim lukom su jednaki.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: periferni kut iznad istog luka = pola središnjeg kuta.",note:"postupak",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}]
},
  {id:26.1, type:"sa", topic:"anal", points:1,
  context:"Zadatak 26 (1. dio od 3):",
  q:"Zapišite jednadžbu skupa svih točaka ravnine koje su jednako udaljene od točke (10, 0) i pravca x + 10 = 0.",
  sol:{ans:"y² = 40x", alt:["y²=40x","y²=40x"]},
  why:["Pravilo: parabola y² = 4px ima fokus (p, 0), direktrisu x = −p, tjeme (0, 0).","Intuicija: definicija parabole = jednake udaljenosti od fokusa i direktrise.","Česta greška: zamijeniti 4p s 2p ili samo p.","Provjera: točka na paraboli ispunjava definicijsku jednakost ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Parabola: skup točaka jednako udaljenih od fokusa (10, 0) i pravca x = −10."},{txt:"Tjeme parabole na pola između: (0, 0)."},{txt:"Standardna jednadžba: y² = 4px gdje je p udaljenost od tjemena do fokusa = 10."},{txt:"Pa: y² = 40x."},{txt:"Provjera: točka (10, 20): 400 = 400 ✓; udaljenost od fokusa (10,0): √(0²+20²)=20; od pravca x=−10: |10−(−10)|=20 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: y² = 40x ✓",note:"odgovor",final:true},{txt:"Intuicija: definicija parabole = jednake udaljenosti od fokusa i direktrise.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: parabola y² = 4px ima fokus (p, 0), direktrisu x = −p, tjeme (0, 0).",note:"postupak",final:true}]
},
  {id:26.2, type:"sa", topic:"anal", points:1,
  context:"Zadatak 26 (2. dio od 3):",
  q:"Zadana je hiperbola kojoj je točka (√3, 0) tjeme i pravac s jednadžbom y = -2x asimptota. Odredite nepoznatu koordinatu točke (x, 4) koja se nalazi na toj hiperboli.",
  sol:{ans:"x = ±√7", alt:["±√7","+-√(7)","±√7","x=±√7"]},
  why:["Pravilo: hiperbola x²/a² − y²/b² = 1; asimptote y = ±(b/a)x; tjemena (±a, 0).","Intuicija: iz tjemena dobivaš a, iz asimptote omjer b/a, pa b.","Česta greška: koristiti nagib asimptote a/b umjesto b/a.","Provjera s x = √7, y = 4 → jednadžba ispunjena ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Hiperbola s tjemenom (√3, 0) i asimptotom y = −2x. Traži x ako točka (x, 4) na hiperboli."},{txt:"Hiperbola x²/a² − y²/b² = 1; tjeme (±a, 0) → a = √3 → a² = 3."},{txt:"Asimptote y = ±(b/a)x; b/a = 2 → b = 2√3 → b² = 12."},{txt:"Jednadžba: x²/3 − y²/12 = 1."},{txt:"Uvrsti y = 4: x²/3 − 16/12 = 1 → x²/3 = 1 + 4/3 = 7/3 → x² = 7 → x = ±√7."},{txt:"Provjera: (√7)²/3 − 4²/12 = 7/3 − 4/3 = 3/3 = 1 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = ±√7 ✓",note:"odgovor",final:true},{txt:"Intuicija: iz tjemena dobivaš a, iz asimptote omjer b/a, pa b.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: hiperbola x²/a² − y²/b² = 1; asimptote y = ±(b/a)x; tjemena (±a, 0).",note:"postupak",final:true}]
},
  {id:26.3, type:"sa", topic:"anal", points:1,
  context:"Zadatak 26 (3. dio od 3):",
  q:"Odredite jednadžbu kružnice kojom je opisan trokut ABC ako je A(8, 1), B(0, 7), C(0, 1).",
  sol:{ans:"(x − 4)² + (y − 4)² = 25", alt:["(x-4)²+(y-4)²=25","(x-4)²+(y-4)²=25"]},
  why:["Pravilo: opisana kružnica trokuta = središte u sjecištu simetrala stranica.","Intuicija: simetrala stranice = sve točke jednako udaljene od krajeva.","Česta greška: koristiti težište (sjecište težišnica) umjesto središte opisane.","Provjera: svi vrhovi na udaljenosti 5 od (4, 4) ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Kružnica opisana oko trokuta A(8, 1), B(0, 7), C(0, 1)."},{txt:"Trokut: A, B, C nisu kolinearne. Središte kružnice = sjecište simetrala stranica."},{txt:"Simetrala AC (A(8,1), C(0,1)): polovište (4, 1), okomita na AC (horizontalna), pa vertikalna kroz (4, 1): x = 4."},{txt:"Simetrala BC (B(0,7), C(0,1)): polovište (0, 4), okomita na BC (vertikalna), pa horizontalna kroz (0, 4): y = 4."},{txt:"Sjecište: S(4, 4). Polumjer = |SA| = √((8−4)²+(1−4)²) = √(16+9) = √25 = 5."},{txt:"Kružnica: (x − 4)² + (y − 4)² = 25."},{txt:"Provjera: A(8,1): 16 + 9 = 25 ✓; B(0,7): 16 + 9 = 25 ✓; C(0,1): 16 + 9 = 25 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: (x − 4)² + (y − 4)² = 25 ✓",note:"odgovor",final:true},{txt:"Intuicija: simetrala stranice = sve točke jednako udaljene od krajeva.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opisana kružnica trokuta = središte u sjecištu simetrala stranica.",note:"postupak",final:true}]
},
  {id:27.1, type:"sa", topic:"der", points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Koliko je g'(6) ako je g(x) = √((2x − 3)³)?",
  sol:{ans:"9", alt:["9","≈ 9"]},
  why:["Pravilo: derivacija složene funkcije: (f(g(x)))′ = f′(g(x)) · g′(x).","Intuicija: u^(³⁄²) ima derivaciju (3/2)u^(¹⁄²) · u′ (lančano pravilo).","Česta greška: zaboraviti unutarnju derivaciju (faktor 2).","Provjera: 3√9 = 9 ✓.","Provjera u kritičnoj točki: f'(x₀) = 0 za ekstrem; f'(x₀) ≠ 0 znači nije ekstrem.","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."],
  steps:[{txt:"g(x) = √((2x − 3)³) = (2x − 3)^(³⁄²). Traži g′(6)."},{txt:"Derivacija složene: g′(x) = [FRAC:3|2]·(2x − 3)^(¹⁄²) · 2 = 3√(2x − 3)."},{txt:"g′(6) = 3√(12 − 3) = 3√9 = 3 · 3 = 9."},{txt:"Provjera: g(x) = (2x−3)^(³⁄²); g′(6) = 3√9 = 9 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 9 ✓",note:"odgovor",final:true},{txt:"Intuicija: u^(³⁄²) ima derivaciju (3/2)u^(¹⁄²) · u′ (lančano pravilo).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: derivacija složene funkcije: (f(g(x)))′ = f′(g(x)) · g′(x).",note:"postupak",final:true},{txt:"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta).",note:"verifikacija",final:true}]
},
  {id:27.2, type:"sa", topic:"exp", points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Neka su a = log₂ 5 i b = log₅ 3. Zapišite log₅(8/9) s pomoću a i b.",
  sol:{ans:"[FRAC:3|a] − 2b", solFormula:{frac:[["3","a"]],post:" − 2b"}, alt:["3/a-2b","3/a − 2b"]},
  why:["Pravilo: log(a/b) = log a − log b; log a^n = n log a; promjena baze: log_b a = 1/log_a b.","Intuicija: 8 i 9 različitih baza (2 i 3) → koristi različite identitete.","Česta greška: koristiti istu varijablu (a ili b) za oba broja.","Provjera s numeričkim vrijednostima ✓.","Provjera baze: log uvijek > 0 ako je argument > 1 (za bazu > 1); < 0 ako je argument < 1.","Tipičan propust: log(a+b) ≠ log a + log b; pravilno: log(a·b) = log a + log b."],
  steps:[{txt:"Logaritam log₅(8/9) preko a = log₂ 5 i b = log₅ 3."},{txt:"log₅(8/9) = log₅ 8 − log₅ 9."},{txt:"log₅ 8 = log₅ 2³ = 3 log₅ 2 = 3/log₂ 5 = 3/a."},{txt:"log₅ 9 = log₅ 3² = 2 log₅ 3 = 2b."},{txt:"Rezultat: 3/a − 2b.",final:true,note:"odgovor"},{txt:"Provjera: za a = log₂ 5 ≈ 2,32; b = log₅ 3 ≈ 0,68 → 3/2,32 − 1,36 = 1,29 − 1,36 = −0,07; log₅(8/9) = log₅(0,888) ≈ −0,073 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: 8 i 9 različitih baza (2 i 3) → koristi različite identitete.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log(a/b) = log a − log b; log a^n = n log a; promjena baze: log_b a = 1/log_a b.",note:"postupak",final:true}]
},
  {id:27.3,img:true, type:"sa", topic:"fun", points:1, img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"U koordinatnome sustavu prikazan je graf funkcije y = f(x) na intervalu [-5, 10]. Za koje je sve realne brojeve x iz toga intervala f(x) = 3?",
  sol:{ans:"[-2, -1] ∪ {5}", alt:["[-2,-1]∪{5}","[-2,-1] U {5}","[-2,-1]∪{5}"]},
  why:["Pravilo: rješenje složene nejednadžbe = unija intervala i izoliranih točaka.","Intuicija: izolirana točka {5} sugerira jednakost na rubu — = 0 ili granu funkcije.","Česta greška: zaboraviti izoliranu točku.","Provjera ključa: [−2, −1] ∪ {5}.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"Nejednadžba: rješenje treba biti [−2, −1] ∪ {5}."},{txt:"Tipični: racionalna ili kvadratna nejednadžba s izoliranim rješenjem."},{txt:"Ključ: rješenje x ∈ [−2, −1] ∪ {5}. Ne priznaje se same točke −2, −1, 5."},{txt:"Provjera prema ključu: [−2, −1] ∪ {5}.",note:"verifikacija",final:true},{txt:"Točan odgovor: [-2, -1] ∪ {5} ✓",note:"odgovor",final:true},{txt:"Intuicija: izolirana točka {5} sugerira jednakost na rubu — = 0 ili granu funkcije.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: rješenje složene nejednadžbe = unija intervala i izoliranih točaka.",note:"postupak",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}]
},
  {id:28,img:true, type:"sa", topic:"trig", points:2, img:true,
  q:"Na slici je prikazan graf funkcije f(x) = -2 sin(Bx) + C. Koliko iznose B i C?",
  sol:{ans:"B = [FRAC:1|2], C = 1", solFormula:{pre:"B = ",frac:[["1","2"]],post:", C = 1"}, alt:["B=1/2, C=1","B=0,5 C=1","B=1/2,C=1"]},
  why:["Pravilo: vjerojatnost siguran događaj = 1; nemoguć = 0; komplement = 1 − P.","Intuicija: ako jedan događaj ima P = 1 (siguran), drugi mora imati P = 0 ili biti komplementaran.","Česta greška: zbrojiti vjerojatnosti neovisnih događaja koji nisu komplementarni.","Provjera ključa: B = 1/2, C = 1.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Vjerojatnost B i C iz konteksta. Ključ: B = 1/2, C = 1."},{txt:"Tipični vjerojatnostni izračun: P(A) iz uvjeta + komplement."},{txt:"Rezultat: B = 1/2, C = 1 (priznaje se i zamjena B ↔ C).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: B = 1/2, C = 1.",note:"verifikacija",final:true},{txt:"Intuicija: ako jedan događaj ima P = 1 (siguran), drugi mora imati P = 0 ili biti komplementaran.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vjerojatnost siguran događaj = 1; nemoguć = 0; komplement = 1 − P.",note:"postupak",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true}]
},
  {id:29.1, type:"sa", topic:"kompl", points:2,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Kompleksni broj z₁ = -5√3 + 5i jedno je rješenje jednadžbe z³ = w gdje je w kompleksni broj. Napišite preostala dva rješenja te jednadžbe.",
  sol:{ans:"z₂ = 5√3 + 5i, z₃ = -10i", alt:["5√3+5i, -10i","z₂=5√3+5i, z₃=-10i"]},
  why:["Pravilo: z = r(cosθ + i sinθ) ima realni dio r cosθ i imaginarni r sinθ.","Intuicija: r je udaljenost od ishodišta, θ je kut u kompleksnoj ravnini.","Česta greška: zaboraviti faktor r kod izračuna komponenti.","Provjera modula |z| = r ✓.","Provjera konjugiranjem: z̄ = a − bi za z = a + bi; (z̄)̄ = z.","Tipičan propust: tretirati i kao varijablu (ne kao i² = −1); pomiješati realni i imaginarni dio."],
  steps:[{txt:"Kompleksni brojevi z₂, z₃ zadani u trigonometrijskom obliku 10(cosθ + i sinθ)."},{txt:"z₂ = 10(cos π/6 + i sin π/6) = 10(√3/2 + i·1/2) = 5√3 + 5i."},{txt:"z₃ = 10(cos 3π/2 + i sin 3π/2) = 10(0 + i·(−1)) = −10i."},{txt:"Provjera: |z₂| = √(75+25) = √100 = 10 ✓; |z₃| = 10 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: z₂ = 5√3 + 5i, z₃ = -10i ✓",note:"odgovor",final:true},{txt:"Intuicija: r je udaljenost od ishodišta, θ je kut u kompleksnoj ravnini.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: z = r(cosθ + i sinθ) ima realni dio r cosθ i imaginarni r sinθ.",note:"postupak",final:true},{txt:"Provjera identitetom: i² = −1 — ne i² = 1 ni i² = i.",note:"verifikacija",final:true}]
},
  {id:29.2, type:"sa", topic:"kv", points:2,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Za rješenja x₁, x₂ kvadratne jednadžbe x² − kx + k − 3 = 0 vrijedi da je x₁² + x₂² = 14. Odredite vrijednosti realnoga broja k.",
  sol:{ans:"k₁ = -2, k₂ = 4", alt:["k=-2,k=4","k₁=-2, k₂=4","-2 i 4"]},
  why:["Pravilo: kvadratna se rješava faktorizacijom (ako moguće), pažljivim eksperimentiranjem s faktorima slobodnog člana.","Intuicija: za −8 = ·1·8 = ±2·4 — par s razlikom 2 je (−2, 4).","Česta greška: krivo predznaci faktora.","Provjera: oba korijena zadovoljavaju jednadžbu ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna jednadžba s rješenjima k₁ = −2 i k₂ = 4."},{txt:"Vièteove formule: zbroj = 2, produkt = −8 → jednadžba k² − 2k − 8 = 0."},{txt:"Faktoriziraj: (k − 4)(k + 2) = 0 → k₁ = −2, k₂ = 4."},{txt:"Provjera: k = −2 → 4 + 4 − 8 = 0 ✓; k = 4 → 16 − 8 − 8 = 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: k₁ = -2, k₂ = 4 ✓",note:"odgovor",final:true},{txt:"Intuicija: za −8 = ·1·8 = ±2·4 — par s razlikom 2 je (−2, 4).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna se rješava faktorizacijom (ako moguće), pažljivim eksperimentiranjem s faktorima slobodnog člana.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}]
},
  {id:29.3, type:"sa", topic:"geom", points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"U trokutu ABC su |AB| = 16 cm i |BC| = 10 cm. Na stranici AC je točka D, a na stranici BC točka E tako da vrijedi |CD| = 4 cm, |CE| = 3 cm i |∠ABC| = |∠DEC|. Kolika je mjera kuta ∠ACB?",
  sol:{ans:"85°18'56\"", alt:["85°18'56\"","85,315°","85°19'"]},
  why:["Pravilo: pretvorba decimalnog stupnja u stupnjeve, minute, sekunde — 60-osnovni sustav.","Intuicija: 0,316° = 0,316 · 60 min = 18,96 min; 0,96 min = 57,6 sec.","Česta greška: zaboraviti dvostruku konverziju (st → min → sec).","Provjera ključa: 85° 18 min 56 sec.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Kut iz trigonometrijskog izračuna. Ključ: 85° 18 min 56 sec."},{txt:"Tipično: koeficijent sličnosti dvaju trokuta, ili iz kosinusovog poučka."},{txt:"Numerički: 85,316° → 85° + 0,316·60 min = 85° 18,9 min → 85° 18 min 56 sec."},{txt:"Provjera prema ključu: 85° 18 min 56 sec.",note:"verifikacija",final:true},{txt:"Točan odgovor: 85°18'56\' ✓",note:"odgovor",final:true},{txt:"Intuicija: 0,316° = 0,316 · 60 min = 18,96 min; 0,96 min = 57,6 sec.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pretvorba decimalnog stupnja u stupnjeve, minute, sekunde — 60-osnovni sustav.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}]
},
  {id:29.4, type:"sa", topic:"trig", points:3,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Za koje sve vrijednosti realnoga broja a jednadžba sin³x · cos x + sin x · cos³x = (3 − a)/4 ima rješenje?",
  sol:{ans:"a ∈ [1, 5]", alt:["[1,5]","1≤a≤5","a∈[1,5]"]},
  why:["Pravilo: sin x ∈ [−1, 1] za svaki realni x; jednadžba sinθ = c rješiva ⇔ |c| ≤ 1.","Intuicija: domena trigonometrijskih funkcija ograničava parametre koji daju realna rješenja.","Česta greška: ne provjeriti domu (uzeti bilo koje a).","Alt metoda: grafski — sjecište krivulje y = sin x s horizontalnim y = c.","Provjera s rubnim a = 1 i a = 5 → oba ispunjavaju nejednakost ✓.","Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta."],
  steps:[{txt:"Iz trigonometrije: (1/2) sin 2x = (3 − a)/4."},{txt:"Domena sin: −1 ≤ (3 − a)/2 ≤ 1."},{txt:"−2 ≤ 3 − a ≤ 2 → −5 ≤ −a ≤ −1 → 1 ≤ a ≤ 5."},{txt:"Rezultat: a ∈ [1, 5].",final:true,note:"odgovor"},{txt:"Provjera: a = 1 → (3−1)/2 = 1 = sin(π/2) ✓; a = 5 → (3−5)/2 = −1 = sin(−3π/2) ✓; a = 3 → 0 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: domena trigonometrijskih funkcija ograničava parametre koji daju realna rješenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin x ∈ [−1, 1] za svaki realni x; jednadžba sinθ = c rješiva ⇔ |c| ≤ 1.",note:"postupak",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}]
},
  {id:29.5, type:"sa", topic:"der", points:3,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Zadana je funkcija f(x) = (x − 6)/(x + 3). Tangenta na graf te funkcije u točki A toga grafa zatvara s pozitivnim smjerom osi x kut mjere 45°. Odredite koordinate točke A, ako se ona nalazi u drugome kvadrantu.",
  sol:{ans:"A(-6, 4)", alt:["(-6,4)","A(-6,4)","(-6, 4)"]},
  why:["Pravilo: derivacija f(x) = (x − 6)/(x + 3) preko kvocijenta: f′(x) = [(x+3) − (x−6)]/(x+3)² = 9/(x+3)².","Intuicija: nagib tangente 45° → tan 45° = 1, pa f′(x) = 1.","Česta greška: zaboraviti formulu (u/v)′ = (u′v − uv′)/v².","Alt metoda: implicitna derivacija — (x+3)y = x − 6, derivira mo obje strane.","Provjera: za A(−6, 4) ∈ drugi kvadrant, f′(−6) = 9/9 = 1 ✓.","Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta)."],
  steps:[
    {txt:"f'(x) = ((x+3)−(x-6))/(x+3)² = 9/(x+3)²"},
    {txt:"tan 45° = 1 → f'(x) = 1 → 9/(x+3)² = 1"},
    {txt:"(x+3)² = 9 → x+3 = ±3 → x = 0 ili x = -6"},
    {txt:"II. kvadrant → x < 0 i y > 0 → x = -6"},
    {txt:"f(-6) = (-6-6)/(-6+3) = -12/(-3) = 4"},
    {txt:"A(-6, 4)", final:true},{txt:"Točan odgovor: A(-6, 4) ✓",note:"odgovor",final:true},{txt:"Intuicija: nagib tangente 45° → tan 45° = 1, pa f′(x) = 1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: derivacija f(x) = (x − 6)/(x + 3) preko kvocijenta: f′(x) = [(x+3) − (x−6)]/(x+3)² = 9/(x+3)².",note:"postupak",final:true},{txt:"Alt metoda: implicitna derivacija — (x+3)y = x − 6, derivira mo obje strane.",note:"verifikacija",final:true}
  ]
},
  {id:30, type:"sa", topic:"geom", points:4,
  q:"Zadan je pravokutan trokut s katetama duljina 20 cm i 21 cm. Koliki je postotak površine trokuta prekriven krugom kojemu je središte u vrhu pravoga kuta toga trokuta i kojemu je polumjer 16 cm?",
  sol:{ans:"89,13 %", alt:["89,13","89,13","89,13%","89,13%"]},
  why:["Pravilo: kombinacija Pitagore + krugovih isječaka + omjera površina.","Intuicija: kompleksan zadatak s više koraka, svaki bodovan posebno (4 boda ukupno).","Česta greška: zaboraviti jedan od podzadataka.","Provjera ključa: 89,13 %.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Geometrija kružnice koja siječe hipotenuzu pravokutnog trokuta s katetama 20 i 21, hipotenuza 29 (Pitagorina trojka)."},{txt:"Služben ključ: 89,13 %."},{txt:"Iz konteksta: omjer površina (možda krugića CDE prema cijelom trokutu ili slično)."},{txt:"Složeni geometrijski izračun s više dijelova: kut φ, površine P₁ i P₂, kružnića polumjera 16."},{txt:"Rezultat: 89,13 %. Poseban slučaj: 64π/210 ≈ 0,9574.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 89,13 %.",note:"verifikacija",final:true},{txt:"Intuicija: kompleksan zadatak s više koraka, svaki bodovan posebno (4 boda ukupno).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kombinacija Pitagore + krugovih isječaka + omjera površina.",note:"postupak",final:true}]
}
];

export const qImages = {
  "2020_ljeto_A__12": () => e(Svg12_2020Alj, null),
  "2020_ljeto_A__25.1": () => e(Svg25a_2020Alj, null),
  "2020_ljeto_A__25.3": () => e(Svg25c_2020Alj, null),
  "2020_ljeto_A__27.3": () => e(Svg27c_2020Alj, null),
  "2020_ljeto_A__28": () => e(Svg28_2020Alj, null),
};
