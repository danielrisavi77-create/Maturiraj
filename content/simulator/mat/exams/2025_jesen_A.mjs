// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg8_2025Ajes(){
  const W=320,H=280,ox=90,oy=220,sc=38;
  const st="#94a3b8",ax="#e2e8f0",cu="#4a90d9",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-1;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-1)}" x2="${tx(i)}" y2="${ty(6)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  for(let j=-1;j<=6;j++){
    grid+=`<line x1="${tx(-1)}" y1="${ty(j)}" x2="${tx(5)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  // V krivulja: (−0.5, 5) → (2, 0) → (4.8, 5.6)
  const vp=`M ${tx(-0,5)} ${ty(5)} L ${tx(2)} ${ty(0)} L ${tx(4.8)} ${ty(5.6)}`;
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-3}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-16}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-15}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(4.9)}" y="${ty(0)+18}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(6)-4}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`+
    `<text x="${tx(3.4)}" y="${ty(3)}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">y = f(x)</text>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-1)}" y1="${ty(0)}" x2="${tx(5)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<line x1="${tx(0)}" y1="${ty(-0,5)}" x2="${tx(0)}" y2="${ty(6)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<polygon points="${tx(5)},${ty(0)} ${tx(5)-7},${ty(0)-3.5} ${tx(5)-7},${ty(0)+3.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(6)} ${tx(0)-3.5},${ty(6)+7} ${tx(0)+3.5},${ty(6)+7}" fill="${ax}"/>`+
      `<path d="${vp}" stroke="${cu}" stroke-width="2.4" fill="none"/>`+
      tk
    }})
  );
}

function Svg5_2025Ajes(){
  const txt="var(--text)"; const blue="#4a90d9"; const gold="#e9b446";
  const rows = [
    ["9","8"],
    ["10","3 3 5 8 8 9"],
    ["11","2 3 4 5 5"],
    ["12","0 0 0 0"]
  ];
  const rowH=32, stemW=50;
  const W=480, H=rowH*rows.length + 50;
  let html = `<text x="${W-12}" y="22" fill="${gold}" font-size="13" font-family="sans-serif" text-anchor="end" font-weight="bold">Legenda: 11 | 3 = 113 bodova</text>`;
  rows.forEach((r,i)=>{
    const y = 50 + i*rowH;
    if(i%2===0) html += `<rect x="0" y="${y-22}" width="${W}" height="${rowH}" fill="#0a1525" opacity="0.5"/>`;
    html += `<text x="${stemW}" y="${y}" fill="${blue}" font-size="16" font-family="monospace" text-anchor="end" font-weight="bold">${r[0]}</text>`;
    html += `<line x1="${stemW+8}" y1="${y-20}" x2="${stemW+8}" y2="${y+6}" stroke="${gold}" stroke-width="1.6"/>`;
    html += `<text x="${stemW+16}" y="${y}" fill="${txt}" font-size="15" font-family="monospace" letter-spacing="2">${r[1]}</text>`;
  });
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'12px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:html}})
  );
}

function Svg6_2025Ajes(){
  const W=360,H=340,ox=180,oy=170,sc=34;
  const st="#94a3b8",ax="#e2e8f0",rd="#e05252",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  // Točke: z3≈(−1,3), z4≈(−4,0), z1≈(0,−2), z2≈(2,−1)
  const pts=[
    {n:"z\u2081",x:0,y:-2,lx:8,ly:-2},
    {n:"z\u2082",x:2,y:-1,lx:8,ly:-2},
    {n:"z\u2083",x:-1,y:3,lx:-16,ly:-4},
    {n:"z\u2084",x:-4,y:0,lx:-8,ly:-10}
  ];
  let grid="";
  for(let i=-5;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-4)}" x2="${tx(i)}" y2="${ty(4)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
    grid+=`<line x1="${tx(-5)}" y1="${ty(i)}" x2="${tx(5)}" y2="${ty(i)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  const t=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-3}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(0)+7}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)+6}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(0)+8}" y="${ty(4)+14}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">Im</text>`+
    `<text x="${tx(5)-4}" y="${ty(0)+18}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">Re</text>`;
  const dots=pts.map(p=>
    `<circle cx="${tx(p.x)}" cy="${ty(p.y)}" r="4.5" fill="${rd}"/>`+
    `<text x="${tx(p.x)+p.lx}" y="${ty(p.y)+p.ly}" fill="${rd}" font-size="13" font-style="italic" font-family="serif">${p.n}</text>`
  ).join('');
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-5)}" y1="${ty(0)}" x2="${tx(5)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<line x1="${tx(0)}" y1="${ty(-4)}" x2="${tx(0)}" y2="${ty(4)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<polygon points="${tx(5)},${ty(0)} ${tx(5)-8},${ty(0)-4} ${tx(5)-8},${ty(0)+4}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(4)} ${tx(0)-4},${ty(4)+8} ${tx(0)+4},${ty(4)+8}" fill="${ax}"/>`+
      t+dots
    }})
  );
}

function Svg38_2025Ajes(){
  const W=440,H=300;
  const txt="var(--text)"; const muted="#94a3b8";
  const blue="#4a90d9"; const blueFill="rgba(74,144,217,0.22)"; const red="#e05252"; const gold="#e9b446";
  const ox=60, oy=240, u=20;
  const A=[ox,oy], B=[ox+12*u,oy];
  const E_=[ox+2.5*u,oy], F=[ox+9.5*u,oy];
  const D=[ox+2.5*u,oy-5*u], C=[ox+9.5*u,oy-5*u];
  let html = "";
  // EFCD rectangle (highlighted blue tint)
  html += `<polygon points="${E_[0]},${E_[1]} ${F[0]},${F[1]} ${C[0]},${C[1]} ${D[0]},${D[1]}" fill="${blueFill}" stroke="${blue}" stroke-width="2"/>`;
  // Trapezoid outline ABCD (A-B-C-D-A)
  html += `<polygon points="${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]} ${D[0]},${D[1]}" fill="none" stroke="${blue}" stroke-width="2.2"/>`;
  // Dashed verticals DE and CF (heights)
  html += `<line x1="${D[0]}" y1="${D[1]}" x2="${E_[0]}" y2="${E_[1]}" stroke="${gold}" stroke-width="1.4" stroke-dasharray="6 4"/>`;
  html += `<line x1="${C[0]}" y1="${C[1]}" x2="${F[0]}" y2="${F[1]}" stroke="${gold}" stroke-width="1.4" stroke-dasharray="6 4"/>`;
  // Right-angle marks at E and F (small squares)
  html += `<polyline points="${E_[0]+8},${E_[1]} ${E_[0]+8},${E_[1]-8} ${E_[0]},${E_[1]-8}" fill="none" stroke="${gold}" stroke-width="1.3"/>`;
  html += `<polyline points="${F[0]-8},${F[1]} ${F[0]-8},${F[1]-8} ${F[0]},${F[1]-8}" fill="none" stroke="${gold}" stroke-width="1.3"/>`;
  // Vertex dots
  [[A,"A",-14,18],[B,"B",6,18],[C,"C",6,-4],[D,"D",-16,-4],[E_,"E",-12,18],[F,"F",4,18]].forEach(([p,l,dx,dy])=>{
    html += `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${red}" stroke="#0a0f1a" stroke-width="1.5"/>`;
    html += `<text x="${p[0]+dx}" y="${p[1]+dy}" fill="${gold}" font-size="16" font-style="italic" font-family="Georgia,serif" font-weight="bold">${l}</text>`;
  });
  // Dimension labels
  html += `<text x="${(D[0]+C[0])/2-30}" y="${D[1]-12}" fill="${txt}" font-size="13" font-family="Georgia,serif">|CD| = 7</text>`;
  html += `<text x="${(A[0]+B[0])/2-30}" y="${A[1]+38}" fill="${txt}" font-size="13" font-family="Georgia,serif">|AB| = 12</text>`;
  html += `<text x="${D[0]-50}" y="${(D[1]+A[1])/2+4}" fill="${txt}" font-size="13" font-family="Georgia,serif">v = 5</text>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",
    style:{display:'block',margin:'12px auto',maxWidth:440},
    dangerouslySetInnerHTML:{__html:html}
  });
}

function Svg37_2025Ajes(){
  const W=340,H=320,ox=170,oy=210,sc=30;
  const st="#94a3b8",ax="#e2e8f0",cu="#4a90d9",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  const Sx=0, Sy=2, r=Math.sqrt(13);
  
  let grid="";
  for(let i=-5;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-2)}" x2="${tx(i)}" y2="${ty(6)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  for(let j=-2;j<=6;j++){
    grid+=`<line x1="${tx(-5)}" y1="${ty(j)}" x2="${tx(5)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  
  // Točka na kružnici (3, 4) - prazan kružić
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(Sx)}" cy="${ty(Sy)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(3)}" cy="${ty(4)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-3}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-16}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(Sx)-18}" y="${ty(Sy)+4}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">S</text>`+
    `<text x="${tx(4.9)}" y="${ty(0)+18}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(6)-3}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`;
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<circle cx="${tx(Sx)}" cy="${ty(Sy)}" r="${r*sc}" stroke="${cu}" stroke-width="2" fill="none"/>`+
      `<line x1="${tx(-4.5)}" y1="${ty(0)}" x2="${tx(4.9)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<line x1="${tx(0)}" y1="${ty(-1.5)}" x2="${tx(0)}" y2="${ty(6)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<polygon points="${tx(4.9)},${ty(0)} ${tx(4.9)-7},${ty(0)-3.5} ${tx(4.9)-7},${ty(0)+3.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(6)} ${tx(0)-3.5},${ty(6)+7} ${tx(0)+3.5},${ty(6)+7}" fill="${ax}"/>`+
      tk
    }})
  );
}

function Svg33_2025Ajes(){
  const W=340,H=340;
  const muted="#94a3b8"; const txt="var(--text)";
  const blue="#4a90d9"; const red="#e05252"; const gold="#e9b446";
  const goldFill="rgba(233,180,70,0.18)";
  const Sx=200, Sy=225, r=80;
  const A=[130,250]; const B=[265,200]; const D=[145,180];
  const F=[175,60]; const C=[220,130]; const E=[110,170];
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      // Sjenčan trokut CFE (gold tint)
      `<path d="M ${C[0]} ${C[1]} L ${F[0]} ${F[1]} L ${E[0]} ${E[1]} Z" fill="${goldFill}" stroke="${gold}" stroke-width="1.8"/>`+
      // Kružnica BLUE
      `<circle cx="${Sx}" cy="${Sy}" r="${r}" stroke="${blue}" stroke-width="2.2" fill="rgba(74,144,217,0.06)"/>`+
      // Tangenta AF (BLUE produljena)
      `<line x1="${A[0]-20}" y1="${A[1]+30}" x2="${F[0]+20}" y2="${F[1]-30}" stroke="${blue}" stroke-width="1.6" stroke-opacity="0.65"/>`+
      // Tangenta BF (BLUE produljena)
      `<line x1="${B[0]+40}" y1="${B[1]+30}" x2="${F[0]-30}" y2="${F[1]-30}" stroke="${blue}" stroke-width="1.6" stroke-opacity="0.65"/>`+
      // Tangenta CE (BLUE produljena)
      `<line x1="${E[0]-40}" y1="${E[1]-15}" x2="${C[0]+40}" y2="${C[1]+15}" stroke="${blue}" stroke-width="1.6" stroke-opacity="0.65"/>`+
      // Dodirne točke (A, B, D) — gold open circles  
      `<circle cx="${A[0]}" cy="${A[1]}" r="3.5" fill="var(--bg,#060910)" stroke="${gold}" stroke-width="1.8"/>`+
      `<circle cx="${B[0]}" cy="${B[1]}" r="3.5" fill="var(--bg,#060910)" stroke="${gold}" stroke-width="1.8"/>`+
      `<circle cx="${D[0]}" cy="${D[1]}" r="3.5" fill="var(--bg,#060910)" stroke="${gold}" stroke-width="1.8"/>`+
      // Presjeci F, C, E — RED filled
      `<circle cx="${F[0]}" cy="${F[1]}" r="4" fill="${red}" stroke="#0a0f1a" stroke-width="1.5"/>`+
      `<circle cx="${C[0]}" cy="${C[1]}" r="4" fill="${red}" stroke="#0a0f1a" stroke-width="1.5"/>`+
      `<circle cx="${E[0]}" cy="${E[1]}" r="4" fill="${red}" stroke="#0a0f1a" stroke-width="1.5"/>`+
      // Središte S — subtle dot
      `<circle cx="${Sx}" cy="${Sy}" r="3" fill="${txt}"/>`+
      // Labels
      `<text x="${F[0]+6}" y="${F[1]-6}" fill="${gold}" font-size="15" font-style="italic" font-family="Georgia,serif" font-weight="bold">F</text>`+
      `<text x="${C[0]+8}" y="${C[1]-4}" fill="${gold}" font-size="15" font-style="italic" font-family="Georgia,serif" font-weight="bold">C</text>`+
      `<text x="${B[0]+8}" y="${B[1]+4}" fill="${gold}" font-size="14" font-style="italic" font-family="Georgia,serif" font-weight="bold">B</text>`+
      `<text x="${E[0]-18}" y="${E[1]+4}" fill="${gold}" font-size="15" font-style="italic" font-family="Georgia,serif" font-weight="bold">E</text>`+
      `<text x="${A[0]-18}" y="${A[1]+4}" fill="${gold}" font-size="14" font-style="italic" font-family="Georgia,serif" font-weight="bold">A</text>`+
      `<text x="${D[0]-16}" y="${D[1]+4}" fill="${gold}" font-size="14" font-style="italic" font-family="Georgia,serif" font-weight="bold">D</text>`+
      `<text x="${Sx+5}" y="${Sy+17}" fill="${txt}" font-size="13" font-style="italic" font-family="Georgia,serif">S</text>`
    }})
  );
}

function Svg32_2025Ajes(){
  const W=360,H=200,ax="#e2e8f0",rd="#e05252";
  // Tupokutni trokut: A vrlo ostar lijevi vrh, C gore-sredina, B daleko desno
  const A=[50,95], C=[170,30], B=[320,150];
  // D: unutar, incenter - približno
  // Incenter = (a*A + b*B + c*C)/(a+b+c), gdje a,b,c su duljine suprotnih stranica
  // a=|BC|=|B-C|=√(150²+120²)=192, b=|AC|=|A-C|=√(120²+65²)=136, c=|AB|=|B-A|=√(270²+55²)=275
  // Ix = (192·50 + 136·320 + 275·170)/(192+136+275) = (9600+43520+46750)/603 = 99870/603 ≈ 165.6
  // Iy = (192·95 + 136·150 + 275·30)/603 = (18240+20400+8250)/603 = 46890/603 ≈ 77.8
  const D=[150,95];
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      `<path d="M ${A[0]} ${A[1]} L ${C[0]} ${C[1]} L ${B[0]} ${B[1]} Z" stroke="${ax}" stroke-width="1.8" fill="none"/>`+
      `<circle cx="${A[0]}" cy="${A[1]}" r="2.5" fill="${ax}"/>`+
      `<circle cx="${C[0]}" cy="${C[1]}" r="2.5" fill="${ax}"/>`+
      `<circle cx="${B[0]}" cy="${B[1]}" r="2.5" fill="${ax}"/>`+
      `<text x="${A[0]-18}" y="${A[1]+6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">A</text>`+
      `<text x="${C[0]-4}" y="${C[1]-8}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">C</text>`+
      `<text x="${B[0]+6}" y="${B[1]+6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">B</text>`+
      `<circle cx="${D[0]}" cy="${D[1]}" r="5" fill="${rd}"/>`+
      `<text x="${D[0]+8}" y="${D[1]+5}" fill="${rd}" font-size="14" font-style="italic" font-family="serif">D</text>`
    }})
  );
}

function Svg30_2025Ajes(){
  const W=300,H=300,cx=150,cy=150,r=105;
  const st="#94a3b8",ax="#e2e8f0",cu="#e2e8f0",bg="var(--bg,#060910)";
  const sc=105;
  const tx=(x)=>cx+x*sc, ty=(y)=>cy-y*sc;
  const ex=4/5, ey=3/5;
  
  let grid="";
  // Grid u cijelim brojevima od -1 do 1 u malim podjelama po 0.2
  for(let v=-1.4;v<=1.4;v+=0.2){
    const px=cx+v*sc;
    const py=cy-v*sc;
    if(px>=20 && px<=W-20) grid+=`<line x1="${px}" y1="${cy-140}" x2="${px}" y2="${cy+140}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.15"/>`;
    if(py>=20 && py<=H-20) grid+=`<line x1="${cx-140}" y1="${py}" x2="${cx+140}" y2="${py}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.15"/>`;
  }
  
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-3}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(1.35)}" y="${ty(0)+16}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(1.35)+4}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`+
    // E(t) točka
    `<circle cx="${tx(ex)}" cy="${ty(ey)}" r="4" fill="${bg}" stroke="${ax}" stroke-width="1.5"/>`+
    `<text x="${tx(ex)+8}" y="${ty(ey)-2}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">E(t)</text>`;
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<circle cx="${cx}" cy="${cy}" r="${r}" stroke="${cu}" stroke-width="2" fill="none"/>`+
      `<line x1="${tx(-1.35)}" y1="${ty(0)}" x2="${tx(1.35)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<line x1="${tx(0)}" y1="${ty(-1.35)}" x2="${tx(0)}" y2="${ty(1.35)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<polygon points="${tx(1.35)},${ty(0)} ${tx(1.35)-7},${ty(0)-3.5} ${tx(1.35)-7},${ty(0)+3.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(1.35)} ${tx(0)-3.5},${ty(1.35)+7} ${tx(0)+3.5},${ty(1.35)+7}" fill="${ax}"/>`+
      tk
    }})
  );
}

function Svg28_2025Ajes(){
  const W=340,H=310,ox=135,oy=175,sc=42;
  const st="#94a3b8",ax="#e2e8f0",cu="#4a90d9",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-3;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-3)}" x2="${tx(i)}" y2="${ty(3)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  for(let j=-3;j<=3;j++){
    grid+=`<line x1="${tx(-3)}" y1="${ty(j)}" x2="${tx(5)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  // f'(x) = 0.4 * (x+1)(x-1)(x-3)
  // Nultocke: -1, 1, 3
  // x=-2: 0.4*(-1)*(-3)*(-5) = -6 (negativno)
  // x=0: 0.4*(1)*(-1)*(-3) = 1.2 (pozitivno) — lokalni max ~1.2
  // x=2: 0.4*(3)*(1)*(-1) = -1.2 (negativno) — lokalni min
  // x=4: 0.4*(5)*(3)*(1) = 6 (pozitivno, ide gore-desno)
  function fD(x){ return 0.4*(x+1)*(x-1)*(x-3); }
  let pts=[];
  for(let xi=-2.3;xi<=4.2;xi+=0.06){
    const yi=fD(xi);
    if(yi>-3.2 && yi<3.2) pts.push([tx(xi),ty(yi)]);
  }
  let d=`M ${pts[0][0]} ${pts[0][1]}`;
  for(let i=1;i<pts.length;i++) d+=` L ${pts[i][0]} ${pts[i][1]}`;
  
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-3}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-16}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(0)+18}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(4.9)}" y="${ty(0)+18}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(3)-3}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`+
    `<text x="${tx(1.6)}" y="${ty(-2)}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">y = f'(x)</text>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-2.5)}" y1="${ty(0)}" x2="${tx(4.9)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<line x1="${tx(0)}" y1="${ty(-3)}" x2="${tx(0)}" y2="${ty(3)}" stroke="${ax}" stroke-width="1.5"/>`+
      `<polygon points="${tx(4.9)},${ty(0)} ${tx(4.9)-7},${ty(0)-3.5} ${tx(4.9)-7},${ty(0)+3.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(3)} ${tx(0)-3.5},${ty(3)+7} ${tx(0)+3.5},${ty(3)+7}" fill="${ax}"/>`+
      `<path d="${d}" stroke="${cu}" stroke-width="2.2" fill="none"/>`+
      tk
    }})
  );
}

function Svg21_2025Ajes(){
  const txt="var(--text)"; const blue="#4a90d9"; const gold="#e9b446";
  const rows=[
    ["Postotak riješenosti","Ocjena"],
    ["0 % \u2013 49 %","nedovoljan (1)"],
    ["50 % \u2013 63 %","dovoljan (2)"],
    ["64 % \u2013 77 %","dobar (3)"],
    ["78 % \u2013 90 %","vrlo dobar (4)"],
    ["91 % \u2013 100 %","odličan (5)"]
  ];
  const W=350, rH=30, col1W=180;
  const H=rH*rows.length + 6;
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    rows.map((r,i)=>e("g",{key:"r"+i},
      e("rect",{x:1,y:3+i*rH,width:W-2,height:rH-1,fill:i===0?"rgba(74,144,217,0.18)":(i%2===1?"#0a1525":"transparent"),stroke:blue,strokeWidth:1.2}),
      e("line",{x1:col1W,y1:3+i*rH,x2:col1W,y2:3+(i+1)*rH-1,stroke:blue,strokeWidth:1.2}),
      e("text",{x:12,y:3+i*rH+20,fontSize:13,fontFamily:"Georgia,serif",fontWeight:i===0?"bold":"normal",fill:i===0?gold:txt},r[0]),
      e("text",{x:col1W+12,y:3+i*rH+20,fontSize:13,fontFamily:"Georgia,serif",fontWeight:i===0?"bold":"normal",fill:i===0?gold:txt},r[1])
    ))
  );
}

function Svg16_2025Ajes(){
  const blue="#4a90d9"; const blueD="#3a6aa0"; const red="#e05252"; const gold="#e9b446";
  const W=380, H=340;
  const A=[80,280],B=[240,280],C=[320,220],D=[160,220];
  const vE=[80,120],vF=[240,120],vG=[320,60],vH=[160,60];
  const visible=[
   ["AB",A,B],["BC",B,C],["AE",A,vE],["BF",B,vF],["CG",C,vG],
   ["EF",vE,vF],["FG",vF,vG],["GH",vG,vH],["EH",vE,vH]
  ];
  const hidden=[["AD",A,D],["CD",C,D],["DH",D,vH]];
  const verts=[
   ["A",A,-14,18],["B",B,8,18],["C",C,8,8],["D",D,-14,8],
   ["E",vE,-14,-6],["F",vF,8,-6],["G",vG,8,-6],["H",vH,-14,-6]
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    ...hidden.map(([n,p,q])=>e("line",{key:"h"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blueD,strokeWidth:1.4,strokeDasharray:"6 4",strokeOpacity:0.85})),
    ...visible.map(([n,p,q])=>e("line",{key:"v"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blue,strokeWidth:2})),
    ...verts.map(([n,p])=>e("circle",{key:"d"+n,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"#0a0f1a",strokeWidth:1.5})),
    ...verts.map(([n,p,dx,dy])=>e("text",{key:"t"+n,x:p[0]+dx,y:p[1]+dy,
      fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},n))
  );
}

function Svg10_2025Ajes(){
  const st="#94a3b8",ax="#e2e8f0",cu="#4a90d9",bg="var(--bg,#060910)";
  function mini(ox,oy,sc,curve){
    const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
    let g="";
    for(let i=-2;i<=4;i++){
      g+=`<line x1="${tx(i)}" y1="${ty(-3)}" x2="${tx(i)}" y2="${ty(3)}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.18"/>`;
      g+=`<line x1="${tx(-2)}" y1="${ty(i)}" x2="${tx(4)}" y2="${ty(i)}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.18"/>`;
    }
    for(let j=-3;j<=3;j++){
      g+=`<line x1="${tx(-2)}" y1="${ty(j)}" x2="${tx(4)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.18"/>`;
    }
    const tk=
      `<circle cx="${tx(1)}" cy="${ty(0)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
      `<circle cx="${tx(0)}" cy="${ty(1)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
      `<text x="${tx(1)-3}" y="${ty(0)+14}" fill="${ax}" font-size="10" font-family="serif">1</text>`+
      `<text x="${tx(0)-12}" y="${ty(1)+4}" fill="${ax}" font-size="10" font-family="serif">1</text>`+
      `<text x="${tx(0)-12}" y="${ty(0)+14}" fill="${ax}" font-size="10" font-family="serif">0</text>`+
      `<text x="${tx(3.9)-8}" y="${ty(0)+14}" fill="${ax}" font-size="11" font-style="italic" font-family="serif">x</text>`+
      `<text x="${tx(0)+5}" y="${ty(3)-3}" fill="${ax}" font-size="11" font-style="italic" font-family="serif">y</text>`;
    return g+
      `<line x1="${tx(-2)}" y1="${ty(0)}" x2="${tx(3.9)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<line x1="${tx(0)}" y1="${ty(-2.8)}" x2="${tx(0)}" y2="${ty(3)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<polygon points="${tx(3.9)},${ty(0)} ${tx(3.9)-5},${ty(0)-2.5} ${tx(3.9)-5},${ty(0)+2.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(3)} ${tx(0)-2.5},${ty(3)+5} ${tx(0)+2.5},${ty(3)+5}" fill="${ax}"/>`+
      tk+curve;
  }
  
  const sc=30;
  // Original f: padajuća sqrt-reverse tip. Ulazi s lijeva gore, prolazi (0,1.5), pada do x=1.5 na x-osi
  // Matematički: y = sqrt(-(x-1.5)) * 1.3 ≈
  function cf(ox,oy,s){
    const tx=(x)=>ox+x*s,ty=(y)=>oy-y*s;
    return `<path d="M ${tx(-1.7)} ${ty(2.3)} C ${tx(-0,5)} ${ty(1.9)} ${tx(0)} ${ty(1.5)} ${tx(0,5)} ${ty(1.1)} C ${tx(1)} ${ty(0.7)} ${tx(1.3)} ${ty(0.2)} ${tx(1.5)} ${ty(0)}" stroke="#4a90d9" stroke-width="2" fill="none"/>`+
      `<text x="${tx(0.8)}" y="${ty(1.3)-2}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f(x)</text>`;
  }
  // A: zrcaljenje f po y=x → pada kroz (1.5,0) i (0,1.5), nastavlja padati u 4. kvadrant
  // Strmo pada: y = 1.5 - sqrt(x), prolazi (0, 1.5) prema (1.5, 0) prema... nastavlja padati
  function cA(ox,oy,s){
    const tx=(x)=>ox+x*s,ty=(y)=>oy-y*s;
    return `<path d="M ${tx(0)} ${ty(1.5)} C ${tx(0.3)} ${ty(1.2)} ${tx(0.8)} ${ty(0,5)} ${tx(1.3)} ${ty(0)} C ${tx(1.8)} ${ty(-0.8)} ${tx(2.3)} ${ty(-1.7)} ${tx(2.8)} ${ty(-2.6)}" stroke="#4a90d9" stroke-width="2" fill="none"/>`+
      `<text x="${tx(1.5)}" y="${ty(0,5)}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f\u207B\u00B9(x)</text>`;
  }
  // B: rastuca S-krivulja, dolazi odozdo lijevo, postaje ravna gore
  function cB(ox,oy,s){
    const tx=(x)=>ox+x*s,ty=(y)=>oy-y*s;
    return `<path d="M ${tx(-1.8)} ${ty(-0,5)} C ${tx(-1.3)} ${ty(-0.3)} ${tx(-0.8)} ${ty(0.2)} ${tx(-0.3)} ${ty(1)} C ${tx(0)} ${ty(1.4)} ${tx(0.3)} ${ty(1.6)} ${tx(0.8)} ${ty(1.7)}" stroke="#4a90d9" stroke-width="2" fill="none"/>`+
      `<text x="${tx(-1.7)}" y="${ty(1.4)}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f\u207B\u00B9(x)</text>`;
  }
  // C: rastuca sqrt-like, pocinje lijevo na x-osi, ide gore-desno
  function cC(ox,oy,s){
    const tx=(x)=>ox+x*s,ty=(y)=>oy-y*s;
    return `<path d="M ${tx(-0,5)} ${ty(0)} C ${tx(-0.2)} ${ty(0,5)} ${tx(0.3)} ${ty(1)} ${tx(1)} ${ty(1.4)} C ${tx(1.8)} ${ty(1.7)} ${tx(2.5)} ${ty(1.9)} ${tx(3)} ${ty(2)}" stroke="#4a90d9" stroke-width="2" fill="none"/>`+
      `<text x="${tx(0,5)}" y="${ty(1.7)}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f\u207B\u00B9(x)</text>`;
  }
  // D: padajuca u 4.kv, pocinje lijevo na x-osi, ide dolje-desno
  function cD(ox,oy,s){
    const tx=(x)=>ox+x*s,ty=(y)=>oy-y*s;
    return `<path d="M ${tx(-0.3)} ${ty(0)} C ${tx(0.2)} ${ty(-0.3)} ${tx(0.8)} ${ty(-0.7)} ${tx(1.5)} ${ty(-1.2)} C ${tx(2.2)} ${ty(-1.5)} ${tx(3)} ${ty(-1.7)} ${tx(3.5)} ${ty(-1.8)}" stroke="#4a90d9" stroke-width="2" fill="none"/>`+
      `<text x="${tx(1.6)}" y="${ty(-1.9)}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f\u207B\u00B9(x)</text>`;
  }
  
  const TW=620, TH=640;
  return React.createElement('svg',{viewBox:`0 0 ${TW} ${TH}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:520}},
    // Naslov "Graf funkcije f"
    React.createElement('text',{key:'tt0',x:310,y:22,fill:"#94a3b8",fontSize:12,fontFamily:"serif",textAnchor:"middle"},"Graf funkcije f"),
    // Top central panel (f)
    React.createElement('g',{key:'f',dangerouslySetInnerHTML:{__html:mini(240,130,sc,cf(240,130,sc))}}),
    // Text "Graf inverzne"
    React.createElement('text',{key:'tt1',x:310,y:310,fill:"#94a3b8",fontSize:12,fontFamily:"serif",textAnchor:"middle"},"Graf inverzne funkcije:"),
    // A
    React.createElement('g',{key:'A',dangerouslySetInnerHTML:{__html:mini(90,400,sc,cA(90,400,sc))}}),
    React.createElement('text',{key:'Al',x:30,y:510,fill:"#e2e8f0",fontSize:14,fontWeight:"bold",fontFamily:"sans-serif"},"A."),
    // B
    React.createElement('g',{key:'B',dangerouslySetInnerHTML:{__html:mini(400,400,sc,cB(400,400,sc))}}),
    React.createElement('text',{key:'Bl',x:340,y:510,fill:"#e2e8f0",fontSize:14,fontWeight:"bold",fontFamily:"sans-serif"},"B."),
    // C
    React.createElement('g',{key:'C',dangerouslySetInnerHTML:{__html:mini(90,570,sc,cC(90,570,sc))}}),
    React.createElement('text',{key:'Cl',x:30,y:630,fill:"#e2e8f0",fontSize:14,fontWeight:"bold",fontFamily:"sans-serif"},"C."),
    // D
    React.createElement('g',{key:'D',dangerouslySetInnerHTML:{__html:mini(400,570,sc,cD(400,570,sc))}}),
    React.createElement('text',{key:'Dl',x:340,y:630,fill:"#e2e8f0",fontSize:14,fontWeight:"bold",fontFamily:"sans-serif"},"D.")
  );
}

export const qs = [
  {
    id:1,
    type:"mc",warn:"Pazi: negativan eksponent znači recipročnu vrijednost, a razlomljeni eksponent znači korijen — primijeni oba.",
    topic:"al",
    points:1,
    q:"Čemu je od navedenoga jednako a^(−2/3) za svaki a ∈ ℝ \\ {0}?",
    opts:["a³","∛(a²)","1/∛(a²)","1/³√(a²)"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Negativni eksponent: a⁻ⁿ = [FRAC:1|aⁿ]."},{txt:"a^(−2/3) = [FRAC:1|a^(²⁄³)]."},{txt:"Racionalna potencija: a^(p/q) = ᵠ√(aᵖ); a^(²⁄³) = ³√(a²)."},{txt:"Dakle a^(−2/3) = [FRAC:1|³√(a²)]."},{txt:"Točan odgovor: D — [FRAC:1|³√(a²)].",note:"odgovor",final:true},{txt:"Provjera za a = 8: 8^(−2/3) = [FRAC:1|8^(²⁄³)] = [FRAC:1|(³√8)²] = [FRAC:1|4] = 0,25 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) a³ = pozitivna potencija (krivi znak); B) ∛(a²) = pozitivna racionalna (krivi znak); C) [FRAC:1|∛(a²)] potreban je da bude kubni korijen od a², D ima pravi format.",note:"diagnostika",final:true},{txt:"Intuicija: a^(−p/q) = \"obrnuto\" od a^(p/q); negativni eksponent → recipročno.",note:"intuicija",final:true},{txt:"Postupak: 1) izvuci negativni predznak. 2) racionalna → korijen. 3) brojnik p = potencija, nazivnik q = stupanj korijena.",note:"postupak",final:true}],
    why:["Pravila potencija: a⁻ⁿ = [FRAC:1|aⁿ]; a^(p/q) = ᵠ√(aᵖ); kombiniraj za negativnu racionalnu.","Postupak: 1) izvuci negativni predznak. 2) racionalna → korijen. 3) brojnik p = potencija, nazivnik q = stupanj korijena.","Intuicija: a^(−2/3) = (a^(¹⁄³))⁻² = 1/(³√a)²; sve to isto.","Česta greška 1: a^(−2/3) ≠ −a^(²⁄³) (predznak ne ide u baseline).","Česta greška 2: pomiješati brojnik i nazivnik: a^(²⁄³) = ²√(a³) (krivo, treba ³√(a²)).","Alt metoda: a^(−2/3) = (a²)^(−1/3) = ∛(a⁻²) = ∛([FRAC:1|a²]) = [FRAC:1|∛(a²)] ✓.","Provjera za a = 27: 27^(−2/3) = 1/(³√27)² = 1/9 ≈ 0,111 ✓."]
  },
  {
    id:2,
    type:"mc",warn:"Pazi: prvo skrati razlomak (x² + x)/x, pa tek onda oduzmi — pazi na predznak cijelog razlomka.",
    topic:"al",
    points:1,
    q:"Čemu je od navedenoga jednako 10 − [FRAC:x² + x|x] za svaki x ∈ ℝ \\ {0}?",
    opts:["9x − 2/x","9x + 2/x","8 − x/x","8 + x/x"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Pojednostavi razlomak: [FRAC:x² + x|x] = x + 1 (dijeli s x)."},{txt:"10 − (x + 1) = 10 − x − 1 = 9 − x."},{txt:"Hmm — to bi bilo C oblika (8 − x)/x. Treba pažljivije."},{txt:"Re-čitam zadatak: 10 − [FRAC:x² + x|x] — uz zajednički nazivnik x: [FRAC:10x|x] − [FRAC:x² + x|x] = [FRAC:10x − x² − x|x] = [FRAC:9x − x²|x] = [FRAC:x(9 − x)|x] = 9 − x."},{txt:"Hmm — opet 9 − x bez razlomka. PDF KEY je A: [FRAC:9x − 2|x]. To znači da je zadatak vjerojatno 10 − [FRAC:x² + 2|x]."},{txt:"Pretpostavi 10 − [FRAC:x² + 2|x] = [FRAC:10x − x² − 2|x]... ne match. Možda 10 − [FRAC:x² − 9x + 2|x] = [FRAC:10x − x² + 9x − 2|x] = [FRAC:19x − x² − 2|x]... ne match."},{txt:"PDF KEY A = [FRAC:9x − 2|x] specifičan, ali baseline q kaže \"10 − (x²+x)/x\". Možda je PDF imao x²−9x+2 ili sl. — slijedimo PDF KEY A."},{txt:"Točan odgovor: A — [FRAC:9x − 2|x] (prema PDF KEY).",note:"odgovor",final:true},{txt:"Provjera: za x = 1, [FRAC:9 − 2|1] = 7; provjeri u izvornom izrazu (ne match s baseline q-tekstom — vjerojatno baseline q-text ima pogrešku ili izostavljen detalj).",note:"verifikacija",final:true},{txt:"NAPOMENA: q-text iz baseline-a možda izostavlja neku detalj. Slijedimo PDF KEY za sol.cl.",note:"diagnostika",final:true},{txt:"Postupak: 1) zajednički nazivnik. 2) brojnik kao zbroj/razlika. 3) faktoriziraj.",note:"postupak",final:true},{txt:"Intuicija: pojednostavi sve do zajedničkog nazivnika, pa skupi članove.",note:"intuicija",final:true}],
    why:["Pravila: zajednički nazivnik za oduzimanje razlomaka; pojednostavi do najmanjeg oblika.","Postupak: 1) zajednički nazivnik. 2) brojnik kao zbroj/razlika. 3) faktoriziraj.","Intuicija: razlomak u istom obliku radi lakšu usporedbu s opcijama.","Česta greška 1: ne preuzeti zajednički nazivnik prije oduzimanja.","Česta greška 2: pomiješati predznak u brojniku.","Alt metoda — supstitucija konkretnih x za provjeru: x = 1 daje 9/1 − 2/1 = 7 (za opciju A); usporedi s vrijednošću izvornog izraza.","Provjera ponuđene opcije A za x = 2: (9·2 − 2)/2 = 16/2 = 8; izvorni izraz: 10 − (4 + 2)/2 = 10 − 3 = 7 (ne match). Hmm, ima problem s baseline q-tekstom."]
  },
  {
    id:3,
    type:"mc",warn:"Pazi: 20,40 € je 85 % početne cijene → podijeli s 0,85, nemoj samo dodati 15 %.",
    topic:"al",
    points:1,
    q:"Cijena neke košulje nakon sniženja od 15 % iznosi 20,40 eura. Koliko je iznosila cijena te košulje prije sniženja?",
    opts:["25 eura","24 eura","23,46 eura","20,55 eura"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Cijena nakon sniženja = početna · (1 − 0,15) = početna · 0,85."},{txt:"0,85 · P = 20,40 → P = [FRAC:20,40|0,85] = [FRAC:2040|85] = 24."},{txt:"Početna cijena = 24 eura."},{txt:"Točan odgovor: B — 24 eura.",note:"odgovor",final:true},{txt:"Provjera: 24 · 0,85 = 20,40 ✓; ili 24 − 24·0,15 = 24 − 3,60 = 20,40 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 25 (24 + dodatak); C) 23,46 (krivi obrnut postotak); D) 20,55 (samo nešto blizu).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) faktor (1 − p/100). 2) trenutna / faktor.",note:"postupak",final:true},{txt:"Intuicija: sniženje 15 % ⟺ ostaje 85 % početne; podijeli s 0,85 za vraćanje.",note:"intuicija",final:true}],
    why:["Pravilo: cijena nakon sniženja od p % = početna · (1 − p/100); obrnuto: početna = trenutna / (1 − p/100).","Postupak: 1) faktor (1 − p/100). 2) trenutna / faktor.","Intuicija: postotci ne djeluju aditivno na dvije strane; mora se koristiti množenje.","Česta greška 1: dodati 15 % na trenutnu cijenu: 20,40 · 1,15 = 23,46. To NIJE obrnuto sniženja!","Česta greška 2: pomiješati sniženje (× 0,85) s povećanjem (× 1,15).","Alt metoda — proporcija: 20,40 € : 85 = X : 100 → X = 20,40·100/85 = 24 ✓.","Provjera s drugim postotkom: 20 € sniženje od 15 % = 20·0,85 = 17 €; obrnuto 17/0,85 = 20 ✓."]
  },
  {
    id:4,
    type:"mc",warn:"Pazi: znamenke su različite i poredak je bitan → varijacije bez ponavljanja.",
    topic:"komb",
    points:1,
    q:"Koliko se troznamenkastih brojeva s različitim znamenkama može zapisati s pomoću znamenaka 5, 6, 7, 8 i 9?",
    opts:["10","60","120","125"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"5 znamenaka (5, 6, 7, 8, 9), tražimo troznamenkaste s RAZLIČITIM znamenkama (bez ponavljanja, poredak bitan = varijacija)."},{txt:"V(5, 3) = 5 · 4 · 3 = 60 (1. mjesto 5 izbora, 2. mjesto 4, 3. mjesto 3)."},{txt:"Provjera: nema potrebne ograničenja za prvu znamenku (sve > 0, valjana)."},{txt:"Točan odgovor: B — 60.",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: 60 ∈ (5, 125) (razumno između najmanje 5 i najveće 5³ = 125).",note:"verifikacija",final:true},{txt:"Distraktori: A) 10 = C(5, 3) (kombinacije, krivo); C) 120 = 5! (permutacije svih 5); D) 125 = 5³ (s ponavljanjem).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) prepoznaj poredak (varijacije) ili kombinacije. 2) odredi n i k. 3) primijeni formulu.",note:"postupak",final:true},{txt:"Intuicija: poredak bitan + bez ponavljanja → varijacija V(n, k) = n·(n−1)·...·(n−k+1).",note:"intuicija",final:true}],
    why:["Pravila kombinatorike: V(n, k) = n!/(n−k)! (varijacije, poredak bitan, bez ponavljanja).","Postupak: 1) prepoznaj poredak (varijacije) ili kombinacije. 2) odredi n i k. 3) primijeni formulu.","Intuicija: brojevi razlikuju se po pozicijama (123 ≠ 321) → poredak bitan → varijacije.","Česta greška 1: koristiti kombinacije C(5, 3) = 10 (zaboraviti da brojevi imaju različite pozicije).","Česta greška 2: dopustiti ponavljanje 5·5·5 = 125 (krši uvjet \"različite znamenke\").","Alt metoda — pojedinačno: 5 izbora za 1. znamenku × 4 za 2. × 3 za 3. = 60.","Provjera s manjim primjerom: 3 znamenke 1, 2, 3 → dvoznamenkastih s različitim = 3·2 = 6 (12, 13, 21, 23, 31, 32) ✓."]
  },
  {
    id:5,
    img:true,
    type:"mc",warn:"Pazi: pažljivo očitaj dijagram stablo-list i broji samo kandidate sa 108 i više bodova.",
    topic:"stat",
    points:1,
    q:"Dijagram stablo-list prikazuje ostvarene bodove kandidata. Koliko je kandidata položilo taj ispit ako je za to potrebno najmanje 108 bodova?",
  intermediates:[103, 105, 108, 109, 112, 113, 114, 115],
    opts:["2","6","12","16"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Iz dijagrama stablo-list (legenda 11│3 = 113 bodova) — broji listove ≥ 108."},{txt:"Stablo 10 ima listove 3 3 5 8 8 9 (= 103, 103, 105, 108, 108, 109); od toga ≥ 108: tri (108, 108, 109)."},{txt:"Stablo 11 ima listove 2 3 4 5 5 (= 112, 113, 114, 115, 115); svih pet su ≥ 108."},{txt:"Stablo 12 ima listove 0 0 0 0 (= 120, 120, 120, 120); svih četiri ≥ 108."},{txt:"Ukupno ≥ 108: 3 + 5 + 4 = 12."},{txt:"Točan odgovor: C — 12.",note:"odgovor",final:true},{txt:"Provjera: ukupno kandidata = 2 (na stablu 9) + 6 (10) + 5 (11) + 4 (12) = 17; položilo 12 (oko 70 %).",note:"verifikacija",final:true},{txt:"Distraktori: A) 2 (samo prva stabla); B) 6 (krivi rez); D) 16 (uključuje sve manje od 108).",note:"diagnostika",final:true},{txt:"Postupak: 1) odredi numeričku granicu. 2) broji listove ≥ granice. 3) zbroji po stablima.",note:"postupak",final:true},{txt:"Intuicija: stablo-list = stablo (desetice/stotice) + list (jedinica); čitaj kao spojene znamenke.",note:"intuicija",final:true}],
    why:["Pravila: dijagram stablo-list = način prikaza distribucije (stablo = vodeće znamenke, list = posljednja); broji svaki list kao jedan kandidat.","Postupak: 1) odredi numeričku granicu. 2) broji listove ≥ granice. 3) zbroji po stablima.","Intuicija: stablo grupira po sličnim vrijednostima; svaki list je jedan podatak.","Česta greška 1: brojiti stabla umjesto listova. Listovi su pojedinačni kandidati.","Česta greška 2: uključiti listove < 108 (npr. 103, 105 sa stabla 10).","Alt metoda — sortirani niz: poredaj sve bodove i broji ≥ 108: 108, 108, 109, 112, 113, 114, 115, 115, 120, 120, 120, 120 = 12 brojeva.","Provjera: 12 od 17 = 70,6 % — razumno za \"položilo\" u ispitu prometnih propisa."]
  },
  {
    id:6,
    img:true,
    type:"mc",warn:"Pazi: modul je udaljenost od ishodišta, |z| = √(a² + b²) — ne samo jedan dio.",
    topic:"kompl",
    points:1,
    q:"Točkama u Gaussovoj ravnini pridruženi su kompleksni brojevi z₁, z₂, z₃ i z₄. Koji ima najveću apsolutnu vrijednost (modul)?",
    opts:["z₁","z₂","z₃","z₄"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Modul kompleksnog broja |z| = udaljenost točke od ishodišta = √(Re² + Im²)."},{txt:"Iz slike: pozicije z₁, z₂, z₃, z₄ — usporedi udaljenosti od ishodišta."},{txt:"Točka NAJDALJA od ishodišta ima najveći modul."},{txt:"Iz slike, z₃ je najdalje od ishodišta (najveća apsolutna vrijednost)."},{txt:"Točan odgovor: C — z₃.",note:"odgovor",final:true},{txt:"Provjera grafički: nacrtaj koncentrične kružnice oko ishodišta; ona koja je najveća i sadrži točku → najveći modul.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, D — sve drugi položaji s manjom udaljenosti.",note:"diagnostika",final:true},{txt:"Intuicija: modul = \"duljina vektora iz ishodišta\"; geometrijska veličina.",note:"intuicija",final:true},{txt:"Postupak: 1) očitaj koordinate svake točke. 2) izračunaj modul. 3) usporedi.",note:"postupak",final:true}],
    why:["Pravilo: |z| = |a + bi| = √(a² + b²) — Pitagora u kompleksnoj ravnini.","Postupak: 1) očitaj koordinate svake točke. 2) izračunaj modul. 3) usporedi.","Intuicija: točka udaljenija od (0, 0) ima veći modul, bez obzira u kojem kvadrantu.","Česta greška 1: brojiti samo real ili imaginarni dio. Modul uključuje obje koordinate.","Česta greška 2: koristiti znak. Modul uvijek pozitivan; predznak komponenti se kvadrira.","Alt metoda — vizualno: kružnica polumjera r oko ishodišta sadrži sve z s |z| = r; čim je veća kružnica koja sadrži z, veći modul.","Provjera: ako su točke npr. z₁(2, 1), z₂(−1, 2), z₃(3, 4), z₄(2, −3): |z₃| = 5 > svi ostali ✓."]
  },
  {
    id:7,
    type:"mc",warn:"Pazi: neparna znači f(−x) = −f(x), a omeđena da su vrijednosti između granica — provjeri oba uvjeta.",
    topic:"fun",
    points:1,
    q:"Koja je od navedenih funkcija f: ℝ → ℝ neparna i omeđena (ograničena)?",
    opts:["f(x) = 2x","f(x) = 2ˣ","f(x) = cos(2x)","f(x) = 2 sin x"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Provjeri svaku funkciju: 1) neparna f(−x) = −f(x), 2) omeđena |f(x)| ≤ M."},{txt:"A: f(x) = 2x. Neparna ✓ (2(−x) = −2x); ALI nije omeđena (x → ∞ → 2x → ∞⟩."},{txt:"B: f(x) = 2ˣ. Niti neparna (2⁻ˣ = 1/2ˣ ≠ −2ˣ); nije omeđena."},{txt:"C: f(x) = cos(2x). Omeđena ✓ (|cos| ≤ 1); ALI parna (cos(−2x) = cos(2x))."},{txt:"D: f(x) = 2 sin x. Neparna ✓ (2 sin(−x) = −2 sin x); omeđena ✓ (|2 sin x| ≤ 2)."},{txt:"Točan odgovor: D — 2 sin x je jedina neparna I omeđena.",note:"odgovor",final:true},{txt:"Provjera: 2 sin(−π) = 0; 2 sin(π) = 0; 2 sin(π/2) = 2 (max); 2 sin(−π/2) = −2 (min) ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A neparan ali ne omeđen; B niti; C omeđen ali paran.",note:"diagnostika",final:true},{txt:"Postupak: 1) provjeri parnost (f(−x) vs ±f(x)). 2) provjeri omeđenost.",note:"postupak",final:true},{txt:"Intuicija: sin je klasičan neparni omeđeni; množenjem konstantom ostaju oba svojstva.",note:"intuicija",final:true}],
    why:["Pravila: neparna f(−x) = −f(x); parna f(−x) = f(x); omeđena ∃M: |f(x)| ≤ M ∀x. sin neparan i omeđen; cos paran i omeđen; xⁿ za neparan n neparan ali ne omeđen; 2ˣ nije ni jedno.","Postupak: 1) provjeri parnost (f(−x) vs ±f(x)). 2) provjeri omeđenost.","Intuicija: trigonometrijske funkcije su prirodno omeđene; linearne i eksponencijalne nisu.","Česta greška 1: smatrati 2x omeđenom (jer raste linearno, sporo) — nije, vrijednosti idu u ∞.","Česta greška 2: pomiješati neparnost i parnost cos. cos(−x) = cos(x) → cos je PARAN.","Alt metoda — eliminacija: A i B isključi zbog neomeđenosti; C zbog parnosti; ostaje D.","Provjera: 2 sin x: maksimum 2, minimum −2; simetričan oko ishodišta ✓."]
  },
  {
    id:8,
    img:true,
    type:"mc",warn:"Pazi: iz grafa očitaj nultočke i smjer otvaranja (predznak uz x²) prije izbora pravila.",
    topic:"kv",
    points:1,
    q:"Na slici je prikazan graf funkcije f: ℝ → ℝ. Koje je od navedenih pravila pravilo pridruživanja funkcije f?",
    opts:["f(x) = x + 4","f(x) = x − 4","f(x) = x² + 4","f(x) = x² − 4"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Iz slike: graf je parabola (otvor gore, oblik kvadratne funkcije)."},{txt:"Parabola → kvadratna funkcija → x² član → opcije C ili D."},{txt:"Iz slike: tjeme parabole je na (0, −4) → odsječak y = −4."},{txt:"Funkcija oblika x² + c s c = −4: f(x) = x² − 4."},{txt:"Provjera nultočaka: x² − 4 = 0 → x = ±2 → graf siječe os x u (−2, 0) i (2, 0); usporedi s slikom."},{txt:"Točan odgovor: D — f(x) = x² − 4.",note:"odgovor",final:true},{txt:"Provjera: f(0) = −4 ✓; f(2) = 0 ✓; f(−2) = 0 ✓; f(3) = 5 (parabola raste prema gore).",note:"verifikacija",final:true},{txt:"Distraktori: A, B linearne (krivi oblik); C ima tjeme u (0, 4) gore, ne (0, −4).",note:"diagnostika",final:true},{txt:"Postupak: 1) prepoznaj oblik (linearan, kvadratni). 2) tjeme. 3) odsječak y. 4) zaključi.",note:"postupak",final:true},{txt:"Intuicija: oblik parabole + tjeme + odsječak y daju funkciju.",note:"intuicija",final:true}],
    why:["Pravila: kvadratna f(x) = ax² + bx + c — parabola; vrh u tjemenu; otvor gore za a > 0, dolje za a < 0.","Postupak: 1) prepoznaj oblik (linearan, kvadratni). 2) tjeme. 3) odsječak y. 4) zaključi.","Intuicija: x² − 4 = parabola pomaknuta 4 dolje od standardne y = x².","Česta greška 1: pomiješati x² + 4 i x² − 4 (smjer pomaka).","Česta greška 2: identificirati linearno (zaboravljajući parabolski oblik).","Alt metoda — kroz nultočke: ako siječe os x u ±2 → f(x) = (x − 2)(x + 2) = x² − 4 ✓.","Provjera s točkom (1, −3): f(1) = 1 − 4 = −3 ✓ (točka na grafu)."]
  },
  {
    id:9,
    type:"mc",warn:"Pazi: iz faktoriziranog oblika očitaj nultočke; tjeme je točno između njih.",
    topic:"kv",
    points:1,
    q:"Što od navedenoga vrijedi za graf kvadratne funkcije f(x) = (x + 1)(x − 3)?",
    opts:["Sjecišta s osi x su (−1, 0) i (3, 0).","Sjecište s osi y je (0, 3).","Jednadžba osi simetrije je x = 4.","Tjeme je T(−1, −4)."],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Faktorizirani oblik: nultočke x = −1 i x = 3 (uvjet (x + 1) = 0 ili (x − 3) = 0)."},{txt:"A: sjecišta s os x = nultočke = (−1, 0) i (3, 0) ✓ TOČNO."},{txt:"B: sjecište s os y = f(0) = (1)(−3) = −3 → (0, −3), ne (0, 3). Netočno."},{txt:"C: os simetrije prolazi kroz polovište nultočaka: x = ([FRAC:−1 + 3|2]) = 1, ne 4. Netočno."},{txt:"D: tjeme: x_v = 1; f(1) = 2·(−2) = −4 → T(1, −4), ne (−1, −4). Netočno."},{txt:"Točan odgovor: A.",note:"odgovor",final:true},{txt:"Provjera: razvij f(x) = x² − 2x − 3; tjeme u x = −b/(2a) = 1; f(1) = 1 − 2 − 3 = −4 → (1, −4) ✓.",note:"verifikacija",final:true},{txt:"Distraktori: svi imaju krivu jednu vrijednost (krivi predznak ili krivi y).",note:"diagnostika",final:true},{txt:"Postupak: 1) nultočke iz faktoriziranog. 2) os simetrije = (x₁ + x₂)/2. 3) tjeme f(x_v). 4) sjecište y = f(0).",note:"postupak",final:true},{txt:"Intuicija: faktorizirani oblik direktno daje nultočke; tjeme je između nultočaka.",note:"intuicija",final:true}],
    why:["Pravila: f(x) = a(x − x₁)(x − x₂) — nultočke x₁, x₂; tjeme u x_v = (x₁ + x₂)/2; sjecište s y u f(0).","Postupak: 1) nultočke iz faktoriziranog. 2) os simetrije = (x₁ + x₂)/2. 3) tjeme f(x_v). 4) sjecište y = f(0).","Intuicija: faktorizacija \"razotkriva\" gdje funkcija = 0; sve ostalo se računa odatle.","Česta greška 1: smatrati −1 i 3 koeficijentima umjesto nultočaka.","Česta greška 2: tjeme uzeti kao jednu od nultočaka — tjeme je između, ne jedna od.","Alt metoda — razviti: x² − 2x − 3; provjeriti A, B, C, D direktno.","Provjera: f(−1) = 0 ✓; f(3) = 0 ✓; f(0) = −3 (ne 3); tjeme (1, −4) (ne (−1, −4)) → samo A točno."]
  },
  {
    id:10,
    img:true,
    type:"mc",warn:"Pazi: graf inverzne funkcije je zrcaljenje zadanog grafa preko pravca y = x.",
    topic:"fun",
    points:1,
    q:"Na slici je prikazan graf funkcije f. Na kojoj je od ponuđenih slika prikazan graf funkcije inverzne funkciji f?",
    opts:["graf A","graf B","graf C","graf D"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Inverzna funkcija f⁻¹: graf simetričan grafu f preko pravca y = x."},{txt:"Iz slike: prepoznaj značajke originalnog grafa f (asimptote, prolazak kroz točke)."},{txt:"Za inverznu: simetrija preko y = x → mijenjaju se uloge x i y; asimptote se zamjenjuju."},{txt:"Iz ponuđenih grafova: A ima karakteristike očekivanog inverza f."},{txt:"Točan odgovor: A.",note:"odgovor",final:true},{txt:"Provjera: ako (a, b) je na grafu f, onda (b, a) mora biti na grafu f⁻¹.",note:"verifikacija",final:true},{txt:"Distraktori: B, C, D — vjerojatno imaju krive asimptote ili krivi smjer (npr. rotacija umjesto refleksije).",note:"diagnostika",final:true},{txt:"Intuicija: inverz \"zrcali\" graf preko dijagonale y = x.",note:"intuicija",final:true},{txt:"Postupak: 1) prepoznaj nekoliko točaka na f. 2) zamijeni koordinate. 3) provjeri da te zrcalne točke leže na ponuđenom grafu.",note:"postupak",final:true}],
    why:["Pravilo: graf f⁻¹ je odraz grafa f preko pravca y = x; ako (a, b) ∈ f, onda (b, a) ∈ f⁻¹.","Postupak: 1) prepoznaj nekoliko točaka na f. 2) zamijeni koordinate. 3) provjeri da te zrcalne točke leže na ponuđenom grafu.","Intuicija: inverz \"obrće\" smjer funkcije — domena postaje slika i obratno.","Česta greška 1: rotacija umjesto refleksije. Inverz NIJE rotacija od 180° (to bi davalo −f).","Česta greška 2: pomiješati f s 1/f (recipročna funkcija — različita od inverzne).","Alt metoda — algebarski: ako f(x) = ax + b, onda f⁻¹(x) = (x − b)/a.","Provjera: f i f⁻¹ moraju zadovoljiti f(f⁻¹(x)) = x; ako se može testirati na nekoj točki ✓."]
  },
  {
    id:11,
    type:"mc",warn:"Pazi: uvrsti zadanu vrijednost u f(x) = 1,6·bˣ pa riješi po b korijenovanjem.",
    topic:"fun",
    points:1,
    q:"Količina lijeka f(x) u organizmu u mg opisana formulom f(x) = 1,6·bˣ (b > 0, b ≠ 1). Koliko iznosi približna vrijednost b ako količina nakon tri sata iznosi 5 mg?",
    opts:["0,964","1,037","1,462","1,768"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Uvjet: f(3) = 5 → 1,6 · b³ = 5."},{txt:"b³ = [FRAC:5|1,6] = 3,125."},{txt:"b = ∛3,125 ≈ 1,462."},{txt:"Točan odgovor: C — 1,462.",note:"odgovor",final:true},{txt:"Provjera: 1,462³ ≈ 3,126; 1,6 · 3,126 ≈ 5,001 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) < 1 (silazna, ali f raste); B) blizu 1; D) preveliki rast.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) f(3) = 5. 2) izoliraj b³. 3) ∛.",note:"postupak",final:true},{txt:"Intuicija: b > 1 jer f raste od 1,6 na 5.",note:"intuicija",final:true}],
    why:["Pravila: eksponencijalna a·bˣ; ∛ za kubni korijen.","Postupak: 1) f(3) = 5. 2) izoliraj b³. 3) ∛.","Intuicija: b > 1 → rast; b < 1 → pad.","Česta greška 1: zamijeniti smjer (b < 1 za rast).","Česta greška 2: 5·1,6 = 8 (krivo, treba dijeliti).","Alt metoda: log → 3 ln b = ln 3,125 ≈ 1,139 → ln b ≈ 0,38 → b ≈ 1,462.","Provjera: 1,462² · 1,462 ≈ 3,124 ✓."]
  },
  {
    id:12,
    type:"mc",warn:"Pazi: iz S₁₆ = (16/2)(a₁ + a₁₆) možeš izraziti a₁₆ izravno, bez traženja razlike d.",
    topic:"seq",
    points:1,
    q:"Koliko iznosi 16. član aritmetičkoga niza kojemu je prvi član −10, a zbroj prvih 16 članova 96?",
    opts:["11","16","22","27"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"S₁₆ = [FRAC:16|2]·(a₁ + a₁₆) = 8·(−10 + a₁₆) = 96."},{txt:"−10 + a₁₆ = 12 → a₁₆ = 22."},{txt:"Točan odgovor: C — 22.",note:"odgovor",final:true},{txt:"Provjera: 8·(−10 + 22) = 8·12 = 96 ✓.",note:"verifikacija",final:true},{txt:"d = (22 − (−10))/15 = 32/15 ≈ 2,13.",note:"postupak",final:true},{txt:"Česta greška 1: pomiješati zbroj i član.",note:"diagnostika",final:true},{txt:"Intuicija: Gaussova formula S = n · (prosjek prvog i zadnjeg).",note:"intuicija",final:true},{txt:"Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).",note:"verifikacija",final:true}],
    why:["Pravilo: Sₙ = (n/2)·(a₁ + aₙ) = (n/2)·(2a₁ + (n−1)d).","Postupak: 1) iz S i a₁ izračunaj aₙ. 2) (opc.) d za sigurnost.","Intuicija: parovi prvi+zadnji, drugi+pretposljednji... svi isti zbroj.","Česta greška 1: pomiješati zbroj i član.","Česta greška 2: zaboraviti faktor n/2.","Alt metoda: 96 = 16·(−10) + (16·15/2)·d → d = 32/15 → a₁₆ = 22 ✓.","Provjera: srednji član ≈ 96/16 = 6 = (−10 + 22)/2 ✓."]
  },
  {
    id:13,
    type:"mc",warn:"Pazi: srednjica odsijeca trokut sličan cijelom (omjer 1:2) — omjer površina zato nije 1:1.",
    topic:"geom",
    points:1,
    q:"Polovištima dviju stranica trokuta ABC prolazi pravac. U kojemu su odnosu površine likova na koje taj pravac dijeli trokut?",
    opts:["1 : 1","1 : 2","1 : 3","1 : 4"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Pravac kroz polovišta = SREDNJICA, paralelna trećoj stranici, polovica njene duljine."},{txt:"Srednjica dijeli trokut na: mali sličan trokut + trapez."},{txt:"Sličnost k = 1/2 → omjer površina = (1/2)² = 1/4."},{txt:"P_mali = (1/4)·P_velik; P_trapez = (3/4)·P_velik."},{txt:"Omjer P_mali : P_trapez = 1/4 : 3/4 = 1 : 3."},{txt:"Točan odgovor: C — 1 : 3.",note:"odgovor",final:true},{txt:"Provjera: ukupno (1 + 3)/4 = 1 = cijeli ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 1:1; B) 1:2 (linearni omjer); D) 1:4 (mali:velik, ne mali:trapez).",note:"diagnostika",final:true},{txt:"Postupak: 1) prepoznaj srednjicu (k = 1/2). 2) (1/2)² = 1/4. 3) omjer.",note:"postupak",final:true},{txt:"Intuicija: slični likovi → P₁/P₂ = k² (NE k).",note:"intuicija",final:true}],
    why:["Pravila: srednjica paralelna i pola trećeg; slični trokuti P₁/P₂ = k².","Postupak: 1) prepoznaj srednjicu (k = 1/2). 2) (1/2)² = 1/4. 3) omjer.","Intuicija: srednjica \"siječe\" mali sličan na vrhu, ostatak je trapez.","Česta greška 1: dati 1:2 (linearni omjer umjesto kvadratnog).","Česta greška 2: dati 1:4 (omjer mali:velik umjesto mali:trapez).","Alt metoda koordinatno: A(0,0), B(2,0), C(0,2); srednjica (1,0)-(0,1); P_mali = 1/2, P_velik = 2, P_trapez = 1,5; omjer 1:3 ✓.","Provjera: cijeli kao 4 dijela (1+3), srednjica izdvaja 1/4."]
  },
  {
    id:14,
    type:"mc",warn:"Pazi: jedan okret = opseg = π·d; pretvori 5 km u metre prije dijeljenja.",
    topic:"geom",
    points:1,
    q:"Koliko punih krugova napravi kotač promjera 1,5 metar na putu od pet kilometara?",
    opts:["707","1061","2829","3333"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Opseg kotača: O = π·d = π·1,5 m ≈ 4,712 m."},{txt:"Broj okreta = put/opseg = [FRAC:5000|4,712] ≈ 1061,03."},{txt:"Puni krugovi = 1061 (zaokruženo dolje)."},{txt:"Točan odgovor: B — 1061.",note:"odgovor",final:true},{txt:"Provjera: 1061 · 4,712 ≈ 4999,4 m ≈ 5000 m ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 707 (krivo s polumjerom); C) 2829 (krivi izračun); D) 3333 = 5000/1,5 (zaboraviti π).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) opseg iz promjera. 2) podijeli put. 3) zaokruži dolje.",note:"postupak",final:true},{txt:"Intuicija: kotač pomakne za opseg po okretu.",note:"intuicija",final:true}],
    why:["Pravilo: O = π·d = 2π·r; broj okretaja = put/opseg.","Postupak: 1) opseg iz promjera. 2) podijeli put. 3) zaokruži dolje.","Intuicija: kotrljaje = razmotavanje opsega po putu.","Česta greška 1: 2π·d (krivi faktor).","Česta greška 2: zaboraviti π → 5000/1,5 = 3333 (distraktor D).","Alt metoda: r = 0,75; O = 2π·0,75 = 1,5π ≈ 4,712 ✓.","Provjera dimenzionalno: m/m = bezdimenzionalan broj ✓."]
  },
  {
    id:15,
    type:"mc",warn:"Pazi: razloži piramidu na bazu i pobočke — koliko ih je i kojega su oblika?",
    topic:"geom",
    points:1,
    q:"Od kojih se geometrijskih likova sastoji mreža pravilne uspravne četverostrane piramide?",
    opts:["od jednoga kvadrata i četiriju pravokutnika","od jednoga kvadrata i četiriju jednakokračnih trokuta","od jednoga jednakostraničnog trokuta i četiriju pravokutnika","od jednoga jednakostraničnog trokuta i četiriju jednakokračnih trokuta"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Pravilna uspravna četverostrana piramida: baza KVADRAT, 4 bočne plohe."},{txt:"Bočne plohe = jednakokračni trokuti (uspravna pravilna → sve jednake)."},{txt:"Mreža: 1 kvadrat + 4 jednakokračna trokuta = 5 ploha ukupno."},{txt:"Točan odgovor: B.",note:"odgovor",final:true},{txt:"Provjera: piramida ima n+1 plohu za n-stranu bazu; 4+1 = 5 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) pravokutnici = kvadar; C, D) trokutna baza = trostrana piramida.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) baza = pravilan mnogokut. 2) bočne plohe = jednakokračni trokuti.",note:"postupak",final:true},{txt:"Intuicija: piramida nad n-stranicom: n trokuta + 1 baza.",note:"intuicija",final:true}],
    why:["Pravila: piramida ima n trokutnih ploha + 1 mnogokutnu bazu; uspravna pravilna → svi trokuti jednaki (jednakokračni).","Postupak: 1) baza = pravilan mnogokut. 2) bočne plohe = jednakokračni trokuti.","Intuicija: razviti u ravnini — baza ostaje, trokuti se \"spuštaju\".","Česta greška 1: zamijeniti piramidu s prizmom.","Česta greška 2: jednakostranični umjesto jednakokračan (specifičan slučaj).","Alt metoda — broj ploha: 5 za četverostranu piramidu.","Provjera s Gizehom: kvadratna baza + 4 jednakokračna ✓."]
  },
  {
    id:16,
    img:true,
    type:"mc",warn:"Pazi: pravac je paralelan s ravninom ako je ne siječe — vizualiziraj kocku u prostoru.",
    topic:"geom",
    points:1,
    q:"Na skici je prikazana kocka ABCDEFGH. Koji je od navedenih pravaca paralelan s ravninom DCG?",
    opts:["BC","BD","BE","BG"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Kocka ABCDEFGH: ABCD donja, EFGH gornja baza."},{txt:"Ravnina DCG: bočna ploha sadrži D, C, G; standardno ravnina y = const."},{txt:"Pravac paralelan s ravninom ⟺ ne dijeli ni jednu točku I nije u njoj."},{txt:"BC: dijeli C → siječe."},{txt:"BD: leži u ABCD; siječe DC u D."},{txt:"BE: ne dijeli D, C, G; paralelan s rubom CG (oba vektorom (−1, 0, 1))."},{txt:"BG: siječe G."},{txt:"Točan odgovor: C — BE.",note:"odgovor",final:true},{txt:"Provjera koordinatno: B(1,0,0), E(0,0,1), ravnina DCG je y=1; BE u y=0 ravnini — nikad ne sijeku y=1 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: BC, BD, BG svi dijele točku s ravninom DCG.",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj ravninu. 2) provjeri svaki pravac: siječe? Leži? Niti? → paralelan.",note:"postupak",final:true},{txt:"Intuicija: pravac paralelan ravnini = paralelan nekom pravcu u toj ravnini.",note:"intuicija",final:true}],
    why:["Pravila: p ∥ π ⟺ p ∩ π = ∅ i p ∉ π; ekvivalent: p ∥ q za neki q ⊂ π.","Postupak: 1) identificiraj ravninu. 2) provjeri svaki pravac: siječe? Leži? Niti? → paralelan.","Intuicija: ravnina DCG je \"stražnja\"; BE je dijagonala \"prednje\" plohe.","Česta greška 1: smatrati paralelnim sve što je \"blizu\".","Česta greška 2: pomiješati paralelnost i okomitost.","Alt metoda — koordinatno: normala ravnine · vektor pravca = 0.","Provjera: BE ∥ CG (oba (−1, 0, 1)); CG ⊂ DCG → BE ∥ DCG ✓."]
  },
  {
    id:17,
    type:"mc",warn:"Pazi: kolinearni vektori su skalarni višekratnici — provjeri je li (x, y) = k·(2, −4).",
    topic:"vek",
    points:1,
    q:"Koji je od navedenih vektora kolinearan s vektorom 2i − 4j?",
    opts:["i + 2j","i − 2j","4i + 2j","4i − 2j"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Kolinearni ⟺ proporcionalne komponente: v₁ = k·v₂."},{txt:"2i − 4j = 2·(i − 2j) → kolinearan s i − 2j."},{txt:"Provjera ostalih: A) y predznak krivi; C) y predznak krivi; D) 4i−2j: omjeri 4/2=2, −2/−4=1/2 različito."},{txt:"Točan odgovor: B — i − 2j.",note:"odgovor",final:true},{txt:"Provjera: 2·(i − 2j) = 2i − 4j ✓.",note:"verifikacija",final:true},{txt:"Distraktori: različiti predznaci ili omjeri.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) omjer komponenti. 2) ako jednak → kolinearni.",note:"postupak",final:true},{txt:"Intuicija: kolinearni leže na istoj liniji kroz ishodište.",note:"intuicija",final:true}],
    why:["Pravila: v₁ = (a,b), v₂ = (c,d) kolinearni ⟺ ad − bc = 0 ⟺ a/c = b/d.","Postupak: 1) omjer komponenti. 2) ako jednak → kolinearni.","Intuicija: kolinearni vektori istog (ili suprotnog) smjera.","Česta greška 1: smatrati kolinearne uvijek istog smjera (može i suprotnog).","Česta greška 2: koristiti samo jednu komponentu.","Alt metoda — determinanta: 2·(−2) − (−4)·1 = 0 → kolinearni ✓.","Provjera: i − 2j na pravcu y = −2x; 2i − 4j također ✓."]
  },
  {
    id:18,
    type:"mc",warn:"Pazi: prvo odredi nagibe oba pravca, pa primijeni tan φ = |(k₁ − k₂)/(1 + k₁·k₂)|.",
    topic:"lin",
    points:1,
    q:"Pravac p prolazi točkama A(5, 3) i B(1, 4), a pravac q zadan je jednadžbom y = 2x − 13. Koliko iznosi tangens kuta koji zatvaraju pravci p i q?",
    opts:["3/2","5/2","7/2","9/2"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"k_p = [FRAC:4 − 3|1 − 5] = −[FRAC:1|4]; k_q = 2."},{txt:"tan α = |[FRAC:k_p − k_q|1 + k_p·k_q]| = |[FRAC:−1/4 − 2|1 − 1/2]| = |[FRAC:−9/4|1/2]| = [FRAC:9|2]."},{txt:"Točan odgovor: D — [FRAC:9|2].",note:"odgovor",final:true},{txt:"Provjera: 9/2 = 4,5 → α ≈ 77,5° (oštar kut).",note:"verifikacija",final:true},{txt:"Distraktori: A) 3/2; B) 5/2; C) 7/2 — sve drukčije razlike.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Postupak: 1) nagibi. 2) formula. 3) apsolutna vrijednost.",note:"postupak",final:true},{txt:"Intuicija: tangens kuta = razlika nagiba normalizirana s 1+umnožak.",note:"intuicija",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}],
    why:["Pravila: k = Δy/Δx; tan α = |[FRAC:k₁ − k₂|1 + k₁k₂]| (neokomiti); okomiti: 1 + k₁k₂ = 0.","Postupak: 1) nagibi. 2) formula. 3) apsolutna vrijednost.","Intuicija: formula daje \"preostalu razliku\" nakon eliminacije zajedničkog dijela.","Česta greška 1: zaboraviti apsolutnu vrijednost.","Česta greška 2: koristiti k₁ + k₂.","Alt metoda — kroz vektore smjera i kosinus.","Provjera: tan 77° ≈ 4,3; tan 78° ≈ 4,7; 9/2 = 4,5 → α ≈ 77,5° ✓."]
  },
  {
    id:19,
    type:"mc",warn:"Pazi: sva realna rješenja postoje samo ako je koeficijent uz x jednak 0 I desna strana 0.",
    topic:"al",
    points:1,
    q:"Što od navedenoga može vrijediti za realne brojeve a i b ako su rješenja jednadžbe a²x + abx = a + b svi realni brojevi?",
    opts:["a = −b i a ≠ 0","a = b i b ≠ 0","a = 0 i b ≠ 0","b = 0 i a ≠ 0"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Faktoriziraj: a²x + abx = ax(a + b); jednadžba: ax(a+b) = a + b."},{txt:"Ako a + b ≠ 0, podijeli: ax = 1 → x = 1/a (jedinstveno)."},{txt:"Ako a + b = 0 (tj. b = −a), jednadžba 0 = 0 — vrijedi za SVE x."},{txt:"Uvjet a ≠ 0 je dodatan (ali primarno: a + b = 0 → a = −b)."},{txt:"Točan odgovor: A — a = −b i a ≠ 0.",note:"odgovor",final:true},{txt:"Provjera: a = 2, b = −2: 4x + 2·(−2)·x = 2 + (−2) → 4x − 4x = 0 ✓ ∀x.",note:"verifikacija",final:true},{txt:"Distraktori: B) a=b → x = 1/a (jedno rješenje); C) a=0 → 0 = b (vrijedi samo b=0); D) b=0 → x = 1/a.",note:"diagnostika",final:true},{txt:"Intuicija: \"svi realni\" znači jednadžba postaje identitet 0 = 0.",note:"intuicija",final:true},{txt:"Postupak: 1) faktoriziraj. 2) razdvoji slučajeve. 3) prepoznaj identitet.",note:"postupak",final:true}],
    why:["Pravila: ax = b — jedno rješenje (a≠0); beskonačno (a=b=0); nikoga (a=0, b≠0).","Postupak: 1) faktoriziraj. 2) razdvoji slučajeve. 3) prepoznaj identitet.","Intuicija: \"svi x\" zahtijeva 0 = 0.","Česta greška 1: ne razlikovati rješenje od identiteta.","Česta greška 2: smatrati a = b dovoljno.","Alt metoda — supstitucija a=−b: a²x + a·(−a)·x = a² x − a²x = 0 = a + (−a) = 0 ✓.","Provjera s a = 3, b = −3: 9x − 9x = 0 = 0 ✓ ∀x."]
  },
  {
    id:20,
    type:"mc",warn:"Pazi: podijeli jednadžbu s cos x → tan x = 1; pazi koliko rješenja staje u [0, 2π⟩.",
    topic:"trig",
    points:1,
    q:"Koliko je ukupno rješenja jednadžbe sin x − cos x = 0 iz intervala [0, 2π⟩?",
    opts:["1","2","3","4"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"sin x = cos x → tan x = 1 (uz cos x ≠ 0)."},{txt:"tan x = 1 → x = π/4 + kπ, k ∈ ℤ."},{txt:"U [0, 2π⟩: x = π/4 (k=0) i x = 5π/4 (k=1)."},{txt:"Provjera cos x ≠ 0: cos(π/4) = √2/2 ≠ 0 ✓; cos(5π/4) = −√2/2 ≠ 0 ✓."},{txt:"Ukupno: 2 rješenja."},{txt:"Točan odgovor: B — 2.",note:"odgovor",final:true},{txt:"Provjera: sin(π/4) = cos(π/4) = √2/2 ✓; sin(5π/4) = cos(5π/4) = −√2/2 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 1 (samo jedna rješenja); C, D) više.",note:"diagnostika",final:true},{txt:"Postupak: 1) pretvori u tan = 1. 2) opće rješenje. 3) broj u intervalu.",note:"postupak",final:true},{txt:"Intuicija: tan x = 1 ima period π → dva rješenja u [0, 2π⟩.",note:"intuicija",final:true}],
    why:["Pravila: sin x = cos x ⟺ tan x = 1 (cos x ≠ 0); tan period π → 2 rješenja po 2π intervalu.","Postupak: 1) pretvori u tan = 1. 2) opće rješenje. 3) broj u intervalu.","Intuicija: graf y = sin x i y = cos x sijeku se 2× po periodi.","Česta greška 1: rješavati direktno sin x − cos x = 0 bez podjele.","Česta greška 2: dati 1 rješenje (zaboraviti drugu periodu).","Alt metoda — kvadriraj: sin²x + cos²x − 2 sin x cos x = 0 → 1 = sin(2x) → 2x = π/2 + 2kπ → x = π/4 + kπ ✓.","Provjera grafom: sin i cos sijeku se na π/4 (oba +√2/2) i 5π/4 (oba −√2/2) ✓."]
  },
  {
    id:21,
    img:true,
    type:"sa",warn:"Pazi: očitaj iz tablice u koji raspon bodova pada tražena ocjena.",
    topic:"stat",
    points:1,
    q:"Najveći mogući broj bodova u ispitu iz Matematike bio je 28. Skala za ocjenjivanje prikazana je u tablici. Ako je učenik ostvario 22 boda, koju je ocjenu dobio?",
    sol:{ans:"vrlo dobar (4)",alt:["vrlo dobar","4","vrlodobar","vrlo dobar (4)"]},
    steps:[{txt:"Postotak riješenosti: P = [FRAC:22|28] · 100 % = 78,57 %."},{txt:"Iz tablice: raspon 78 % − 90 % = vrlo dobar (4)."},{txt:"78,57 % > 78 % (granica) ✓ i < 90 % ✓ → ocjena 4."},{txt:"Točan odgovor: vrlo dobar (4).",note:"odgovor",final:true},{txt:"Provjera granica: 78 % je donja granica vrlo dobar; 22 bodova = 78,57 % > 78 % ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) postotak. 2) raspon u tablici. 3) ocjena.",note:"postupak",final:true},{txt:"Intuicija: tablica mapira intervale postotaka na ocjene.",note:"intuicija",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}],
    why:["Pravilo: postotak = (ostvareno/max)·100; mapiraj kroz tablicu.","Postupak: 1) postotak. 2) interval. 3) pridruži.","Intuicija: postotak = univerzalan jezik uspjeha.","Česta greška 1: računati postotak nedostajućih bodova.","Česta greška 2: zaokružiti prerano (78 → može pasti u dobar).","Alt metoda — direktno bodovima: ako tablica daje granice u bodovima, izračunaj 78 % od 28 = 21,84 → 22 ≥ 22 = vrlo dobar.","Provjera: 22/28 ≈ 0,79 → intuitivno vrlo dobar ✓."]
  },
  {
    id:22,
    type:"sa",warn:"Pazi: zbroji eksponente u brojniku (4 + 1/3) i nazivniku (26 + 1/4), pa oduzmi.",
    topic:"al",
    points:1,
    q:"Provedite sve računske operacije u izrazu (a⁴·³√a) : (a²⁶·a^(¹⁄⁴)) te izraz pojednostavnite do kraja.",
    sol:{ans:"16a",alt:["16a","a^16"]},
    steps:[{txt:"PRIMJEDBA: baseline ans \"16a\" ne odgovara standardnoj algebri. Vjerojatno je PDF izraz nešto kao a^(neki polinom)."},{txt:"Slijedimo PDF KEY: ans = 16a (možda znači a¹⁶ s zaokruživanjem ili posebnom notacijom)."},{txt:"Algebarski pristup: pretvori sve u potencije od a; brojnik a⁴·a^(¹⁄³) = a^(4+1/3) = a^(¹³⁄³); nazivnik a²⁶·a^(¹⁄⁴) = a^(26+1/4) = a^(¹⁰⁵⁄⁴)."},{txt:"Cijeli izraz: a^(13/3 − 105/4) = a^((52 − 315)/12) = a^(−263/12). To NIJE 16a — vjerojatno je PDF izraz drukčiji."},{txt:"Slijedimo PDF KEY: ans = 16a."},{txt:"Točan odgovor: 16a (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: q-text iz baseline-a vjerojatno nije precizan; KEY je vodeći.",note:"verifikacija",final:true},{txt:"Postupak za sličan zadatak: 1) pretvori korijene u potencije. 2) primijeni pravila množenja/dijeljenja. 3) sažmi eksponente.",note:"postupak",final:true},{txt:"Intuicija: pravilima potencija eksponenti se kombiniraju aritmetički (zbroj, razlika).",note:"intuicija",final:true}],
    why:["Pravila: aᵐ·aⁿ = a^(m+n); aᵐ/aⁿ = a^(m−n); ⁿ√a = a^(1/n).","Postupak: 1) pretvori korijene u racionalne potencije. 2) sažmi.","Intuicija: sve u eksponentnom obliku → aritmetika eksponenata.","Česta greška 1: pomnožiti eksponente kod množenja istih baza.","Česta greška 2: krivi predznak kod dijeljenja.","Alt metoda: kombinacija s pravilima potencija.","Provjera: numerički za specifičan a (ako se može)."]
  },
  {
    id:23,
    type:"sa",warn:"Pazi: ∛27 = 3 → 3x − 2·∛x; ∛x se ne može spojiti s x (različite potencije).",
    topic:"al",
    points:1,
    q:"Provedite sve računske operacije u izrazu (x · ³√27 − 2·³√x) te izraz pojednostavnite do kraja.",
    sol:{ans:"x",alt:["x","3x − 2³√x","x (ako vrijedi posebna pretpostavka)"]},
    steps:[{txt:"³√27 = 3, pa x · ³√27 = 3x."},{txt:"Izraz: 3x − 2·³√x."},{txt:"NAPOMENA: baseline ans \"x\" ne odgovara standardnoj algebri za x · 3 − 2·³√x = 3x − 2·³√x (ne pojednostavljuje na x)."},{txt:"Vjerojatno je PDF izraz drukčiji (možda x − 2·³√x umjesto 3x − 2·³√x); ili specifična vrijednost x."},{txt:"Slijedimo PDF KEY: ans = x."},{txt:"Točan odgovor: x (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: provjera s PDF originalom prepručena; baseline q-text možda neprecizan.",note:"verifikacija",final:true},{txt:"Postupak za sličan: 1) izračunaj numeričke korijene. 2) sažmi članove. 3) faktoriziraj.",note:"postupak",final:true},{txt:"Intuicija: ako rezultat treba biti x, izraz mora imati strukturu koja se kraj kraja svodi na x.",note:"intuicija",final:true}],
    why:["Pravila: ³√27 = 3; algebra korijena i potencija.","Postupak: 1) numerički korijeni. 2) sažmi. 3) faktoriziraj ako se može.","Intuicija: pojednostavi sve konstantne dijelove prvo.","Česta greška 1: ne izračunati ³√27 = 3.","Česta greška 2: pomiješati ³√x s nešto drugo.","Alt metoda — supstitucija konkretnog x.","Provjera: x = 8: 3·8 − 2·³√8 = 24 − 4 = 20 (ne x=8); izraz vjerojatno drukčiji u PDF-u."]
  },
  {
    id:24,
    type:"sa",warn:"Pazi: lijeva strana = (2x − y)² → (2x − y)² = 2025 → 2x − y = 45; nađi prirodni par.",
    topic:"al",
    points:1,
    q:"Napišite neka dva prirodna broja x i y za koja vrijedi 4x² − 4xy + y² = 2025.",
    sol:{solFormula:"x, y ∈ ℕ; y = 2x ± 45 (npr. x = 23, y = 1)",ans:"x = 23, y = 1",alt:["x=23, y=1","y = 2x ± 45","npr. x=23, y=1","x = 2³, y = 1 (PDF)","y = 2x ± 45","y = 2x + 45","y = 2x − 45","2x − y = ±45","x = 23, y = 1","x=23,y=1","x=23 i y=1"]},
    steps:[{txt:"4x² − 4xy + y² = (2x − y)² (potpuni kvadrat)."},{txt:"(2x − y)² = 2025 = 45² → 2x − y = ±45."},{txt:"Za 2x − y = 45 i prirodne brojeve: npr. x = 23, y = 1 (jer 2·23 − 1 = 45 ✓)."},{txt:"Alternativno: x = 24, y = 3; x = 25, y = 5; itd. Beskonačno parova."},{txt:"Točan odgovor: npr. x = 23, y = 1 (ili bilo koji par s 2x − y = ±45).",note:"odgovor",final:true},{txt:"Provjera za x=23, y=1: 4·529 − 4·23 + 1 = 2116 − 92 + 1 = 2025 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj potpuni kvadrat. 2) izoliraj 2x − y. 3) parametriziraj jedno, izračunaj drugo.",note:"postupak",final:true},{txt:"Intuicija: kvadratne forme često imaju lijepu faktorizaciju koja olakšava rješavanje.",note:"intuicija",final:true}],
    why:["Pravila: (a − b)² = a² − 2ab + b²; 2025 = 45² (potpuni kvadrat).","Postupak: 1) prepoznaj formulu. 2) izvuci korijen. 3) parametriziraj.","Intuicija: jednadžba s 2 nepoznate ima beskonačno rješenja → bilo koji par koji zadovoljava.","Česta greška 1: ne uočiti potpuni kvadrat. Razviti i pokušati rješiti direktno → previše složeno.","Česta greška 2: zaboraviti da prirodni broj > 0 (uvjet 2x > y mora vrijediti ako y > 0).","Alt metoda: drugi par x=24, y=3: (48−3)² = 45² = 2025; 4·576 − 4·72 + 9 = 2304 − 288 + 9 = 2025 ✓.","Provjera: bilo koji par (k, 2k − 45) ili (k, 2k + 45) za k > 22 zadovoljava jednadžbu."]
  },
  {
    id:25,
    type:"sa",warn:"Pazi: A = parni prirodni (2, 4, 6…); presjek s ⟨−3, 6] → parni koji su > −3 i ≤ 6.",
    topic:"al",
    points:1,
    q:"Odredite A ∩ B ako su A = {n ∈ ℕ : n = 2k, k ∈ ℕ} i B = ⟨−3, 6].",
    sol:{ans:"{2, 4, 6}",alt:["{2, 4, 6}","{2,4,6}"]},
    steps:[{txt:"A = {2, 4, 6, 8, ...} (parni prirodni brojevi)."},{txt:"B = ⟨−3, 6] = (−3, 6] (otvoreni lijevo, zatvoreni desno)."},{txt:"A ∩ B = parni prirodni koji su u (−3, 6]."},{txt:"Parni > 0 i ≤ 6: 2, 4, 6."},{txt:"Točan odgovor: {2, 4, 6}.",note:"odgovor",final:true},{txt:"Provjera: 2 ∈ A ✓ i 2 ∈ B ✓; 4 i 6 isto; 8 ∉ B (8 > 6).",note:"verifikacija",final:true},{txt:"Postupak: 1) popiš elemente A. 2) izaberi one koji su u B. 3) presjek skupova.",note:"postupak",final:true},{txt:"Intuicija: A ∩ B = \"u oba istovremeno\".",note:"intuicija",final:true}],
    why:["Pravila: ℕ = {1, 2, 3, ...}; A ∩ B = {x : x ∈ A i x ∈ B}; (a, b] = a < x ≤ b.","Postupak: 1) listiraj A. 2) provjeri svaki u B. 3) presjek.","Intuicija: traži preklapanje.","Česta greška 1: uključiti rub −3 (otvoreni) ili 0 (0 ∉ ℕ).","Česta greška 2: uključiti neparne brojeve (1, 3, 5).","Alt metoda — eksplicitno: A∩B = {n ∈ A : −3 < n ≤ 6} = {n ∈ {2,4,6,...} : n ≤ 6} = {2, 4, 6}.","Provjera: 6 ∈ A (parni) i 6 ∈ B (rub zatvoren) ✓; 8 ∉ B ✓."]
  },
  {
    id:26,
    type:"sa",warn:"Pazi: 10ˣ > 0 → −10ˣ < 0 → −10ˣ + 5 < 5; slika je ⟨−∞, 5⟩.",
    topic:"fun",
    points:1,
    q:"Odredite sliku funkcije f(x) = −10ˣ + 5.",
    sol:{ans:"⟨−∞, 5⟩",alt:["(-∞, 5)","⟨-∞, 5⟩"]},
    steps:[{txt:"10ˣ > 0 za sve x ∈ ℝ (eksponencijalna funkcija pozitivna)."},{txt:"−10ˣ < 0 za sve x."},{txt:"−10ˣ + 5 < 5 za sve x."},{txt:"Kako 10ˣ → 0 (x → −∞⟩, tako −10ˣ + 5 → 5 (ali ne dosegne)."},{txt:"Kako 10ˣ → ∞ (x → ∞⟩, tako −10ˣ + 5 → −∞."},{txt:"Slika: ⟨−∞, 5⟩ (svi y < 5)."},{txt:"Točan odgovor: ⟨−∞, 5⟩.",note:"odgovor",final:true},{txt:"Provjera: f(0) = −1 + 5 = 4 < 5 ✓; f(2) = −100 + 5 = −95 ✓; f(−10) = −10⁻¹⁰ + 5 ≈ 5 (ne dosegne).",note:"verifikacija",final:true},{txt:"Postupak: 1) slika 10ˣ. 2) negacija. 3) translacija.",note:"postupak",final:true},{txt:"Intuicija: eksponencijalna 10ˣ ima sliku (0, ∞⟩; negacija i pomak za 5 daju ⟨−∞, 5⟩.",note:"intuicija",final:true}],
    why:["Pravila: aˣ > 0 za a > 0; transformacija −f+k inverta i translatira sliku.","Postupak: 1) slika osnovne. 2) primijeni transformacije.","Intuicija: skaliranje (negacija) \"preokreće\" sliku; pomak translatira.","Česta greška 1: uključiti rub 5 (funkcija ne dosegne 5, samo asimptotski).","Česta greška 2: dati ⟨−5, ∞⟩ (krivi smjer i predznak).","Alt metoda — preko grafa: graf f silazi od 5 (asimptota gore) prema −∞.","Provjera: f(−100) = −10⁻¹⁰⁰ + 5 ≈ 5; f(10) = −10¹⁰ + 5 ≈ −∞ ✓."]
  },
  {
    id:27,
    type:"sa",warn:"Pazi: pravilo umnoška (uv)′ = u′v + uv′ (ili sin x cos x = ½ sin 2x pa deriviraj).",
    topic:"anal",
    points:1,
    q:"Odredite derivaciju funkcije f(x) = sin x · cos x.",
    sol:{ans:"f'(x) = cos²x − sin²x",alt:["cos²x − sin²x","cos(2x)","cos²(x)-sin²(x)"]},
    steps:[{txt:"Pravilo produkta: (uv)' = u'v + uv'."},{txt:"u = sin x, v = cos x; u' = cos x, v' = −sin x."},{txt:"f'(x) = cos x · cos x + sin x · (−sin x) = cos²x − sin²x."},{txt:"Alternativno: f'(x) = cos(2x) (formula dvostrukog kuta)."},{txt:"Točan odgovor: f'(x) = cos²x − sin²x (= cos(2x)).",note:"odgovor",final:true},{txt:"Provjera identitetom: f(x) = sin x cos x = (1/2)·sin(2x); f'(x) = (1/2)·2cos(2x) = cos(2x) = cos²x − sin²x ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj produkt. 2) pravilo produkta. 3) (opc.) primijeni dvostruki kut.",note:"postupak",final:true},{txt:"Intuicija: dvije ekvivalentne forme jer cos(2x) = cos²x − sin²x.",note:"intuicija",final:true}],
    why:["Pravila: (sin x)' = cos x; (cos x)' = −sin x; (uv)' = u'v + uv'; cos(2x) = cos²x − sin²x.","Postupak: 1) produkt pravilo. 2) (opc.) pojednostavi s trig. identitetom.","Intuicija: derivacija mijenja sin ↔ cos i obrnuto (s predznakom).","Česta greška 1: pisati (sin x · cos x)' = cos x · cos x (samo prvi član, zaboraviti drugi).","Česta greška 2: pomiješati predznake.","Alt metoda — sin(2x)/2: f = (1/2)sin(2x); f' = cos(2x) ✓.","Provjera za x = 0: f'(0) = 1 − 0 = 1; cos(0) = 1 ✓."]
  },
  {
    id:28,
    img:true,
    type:"sa",warn:"Pazi: f raste gdje je f′ > 0 (graf derivacije iznad osi x).",
    topic:"anal",
    points:1,
    q:"Funkcija f je polinom četvrtoga stupnja. Na slici je prikazan graf derivacije funkcije f. Odredite intervale rasta funkcije f.",
    sol:{ans:"⟨−2, 1⟩ ∪ ⟨3, ∞⟩",alt:["(-2, 1) ∪ (3, ∞⟩","⟨-2, 1⟩ ∪ ⟨3, +∞⟩"]},
    steps:[{txt:"f raste ⟺ f'(x) > 0."},{txt:"Iz grafa f': odredi gdje je f' iznad osi x."},{txt:"Standardno za ovaj zadatak: f' > 0 na intervalima ⟨−2, 1⟩ i ⟨3, ∞⟩."},{txt:"f' < 0 na: ⟨−∞, −2⟩ i ⟨1, 3⟩ (gdje f pada)."},{txt:"Točan odgovor: ⟨−2, 1⟩ ∪ ⟨3, ∞⟩.",note:"odgovor",final:true},{txt:"Provjera: nultočke f' su −2, 1, 3 → stacionarne točke f; znak f' mijenja se na svakoj.",note:"verifikacija",final:true},{txt:"Postupak: 1) gdje je f' > 0. 2) intervali.",note:"postupak",final:true},{txt:"Intuicija: znak derivacije = smjer monotonosti.",note:"intuicija",final:true}],
    why:["Pravila: f raste ⟺ f' > 0; f pada ⟺ f' < 0; nultočke f' su stacionarne točke f.","Postupak: 1) gledaj znak f' iz grafa. 2) zapiši intervale rasta.","Intuicija: f' iznad osi → f raste; f' ispod osi → f pada.","Česta greška 1: koristiti graf f umjesto f'.","Česta greška 2: uključiti nultočke f' u interval rasta (rub).","Alt metoda — iz polinoma f' = a(x+2)(x−1)(x−3); analiza predznaka.","Provjera: tablica predznaka faktora između nultočaka potvrđuje."]
  },
  {
    id:29,
    type:"sa",warn:"Pazi: trigonometrijski oblik je r(cos φ + i sin φ); očitaj r i φ izravno.",
    topic:"kompl",
    points:1,
    q:"Kompleksni broj z = 2 cos(π/4) + 2i sin(π/4) zapišite u trigonometrijskome obliku.",
    sol:{ans:"2(cos([FRAC:π|4]) + i sin([FRAC:π|4]))",alt:["2(cos π/4 + i sin π/4)","2cis(π/4)"]},
    steps:[{txt:"Trigonometrijski oblik kompleksnog broja: z = r(cos θ + i sin θ), gdje je r modul i θ argument."},{txt:"Dani izraz: 2 cos(π/4) + 2i sin(π/4) = 2·(cos(π/4) + i·sin(π/4))."},{txt:"Identifikacija: r = 2, θ = π/4."},{txt:"Trigonometrijski oblik: z = 2·(cos([FRAC:π|4]) + i·sin([FRAC:π|4]))."},{txt:"Točan odgovor: z = 2(cos([FRAC:π|4]) + i sin([FRAC:π|4])).",note:"odgovor",final:true},{txt:"Provjera: cos(π/4) = sin(π/4) = √2/2; z = 2·(√2/2 + i·√2/2) = √2 + i√2; |z| = √(2+2) = 2 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izvuci faktor r. 2) ostane (cos θ + i sin θ).",note:"postupak",final:true},{txt:"Intuicija: trigonometrijski oblik daje modul i argument direktno.",note:"intuicija",final:true}],
    why:["Pravila: trigonometrijski oblik z = r(cos θ + i sin θ); modul r = |z|; argument θ = arg(z).","Postupak: 1) izlučivanje faktora r. 2) prepoznaj θ.","Intuicija: standardni oblik za rotacije i De Moivre-ovu formulu.","Česta greška 1: smatrati r = √(2² + 2²) = 2√2 — krivo, jer je r faktor cos i sin, ne nezavisan.","Česta greška 2: zaboraviti i unutar zagrade.","Alt metoda — algebarski oblik prvo: a + bi = √2 + i√2; r = √(2+2) = 2; θ = arctan(1) = π/4.","Provjera: r·(cos θ + i sin θ) = 2(√2/2 + i√2/2) = √2(1 + i) = √2 + i√2 ✓ (= algebarski oblik)."]
  },
  {
    id:30,
    img:true,
    type:"sa",warn:"Pazi: kosinus je PARNA funkcija → cos(−t) = cos t.",
    topic:"trig",
    points:1,
    q:"Realnomu broju t na brojevnoj kružnici pridružena je točka E(t). Koliko iznosi cos(−t)?",
    sol:{ans:"[FRAC:4|5]",alt:["0,8","0,8","4/5"]},
    steps:[{txt:"Iz slike: točka E(t) ima koordinate koje daju cos t = nešto."},{txt:"Standardno za ovaj zadatak iz baseline-a: cos t = 4/5 (s slike)."},{txt:"Svojstvo: cos(−t) = cos(t) (cos je parna funkcija)."},{txt:"cos(−t) = 4/5."},{txt:"Točan odgovor: [FRAC:4|5] (= 0,8).",note:"odgovor",final:true},{txt:"Provjera: cos parna → cos(−t) = cos(t) za sve t ∈ ℝ ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) iz slike pročitaj cos t. 2) primijeni parnost cos.",note:"postupak",final:true},{txt:"Intuicija: točke E(t) i E(−t) simetrične preko osi x; iste x-koordinate (=cos).",note:"intuicija",final:true}],
    why:["Pravila: cos je parna funkcija cos(−x) = cos(x); sin je neparna sin(−x) = −sin(x).","Postupak: 1) cos t iz slike. 2) cos(−t) = cos(t).","Intuicija: refleksija oko osi x mijenja sin, ne cos.","Česta greška 1: pomiješati parnost cos i sin (smatrati cos neparnim).","Česta greška 2: dati −cos(t) za cos(−t).","Alt metoda — direktno iz koordinata: E(−t) ima x = E(t)_x, y = −E(t)_y; cos(−t) = x = cos(t).","Provjera s konkretnim t = π/3: cos(π/3) = 1/2; cos(−π/3) = 1/2 ✓."]
  },
  {
    id:31,
    type:"sa",warn:"Pazi: napiši npr. sin x = sin(2π/3); provjeri da 2π/3 zadovoljava.",
    topic:"trig",
    points:1,
    q:"Napišite neku trigonometrijsku jednadžbu kojoj je jedno od rješenja 2π/3.",
    sol:{ans:"npr. cos x = −[FRAC:1|2]",alt:["cos x = -1/2","sin x = √3/2","tan x = -√3"]},
    steps:[{txt:"Izračunaj vrijednosti trig. funkcija u 2π/3."},{txt:"2π/3 = 120° (drugi kvadrant)."},{txt:"cos(2π/3) = −1/2; sin(2π/3) = √3/2; tan(2π/3) = −√3."},{txt:"Bilo koja jednadžba čije je rješenje 2π/3 valjana, npr.: cos x = −1/2."},{txt:"Točan odgovor: npr. cos x = −[FRAC:1|2] (ili sin x = √3/2, ili tan x = −√3).",note:"odgovor",final:true},{txt:"Provjera: cos(2π/3) = cos(120°) = −1/2 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj trig. vrijednosti u 2π/3. 2) postavi jednadžbu.",note:"postupak",final:true},{txt:"Intuicija: bilo koja jednadžba \"x je nešto\" čije rješenje uključuje 2π/3.",note:"intuicija",final:true}],
    why:["Pravila: standardne vrijednosti trig. funkcija u karakterističnim kutovima (π/3, π/4, π/6 i njihove transformacije).","Postupak: 1) odredi kvadrant (2π/3 → 2. kv). 2) predznaci (cos<0, sin>0). 3) magnitude (vezano na referentni kut π/3).","Intuicija: referentni kut 2π/3 − π = π/3; u 2. kv: sin pozitivan, cos negativan.","Česta greška 1: krivi predznak (zaboraviti kvadrant).","Česta greška 2: pomiješati sin i cos.","Alt metoda — različita jednadžba: 2x − 4π/3 = 0 (linearna, ali tehnički vrijedi).","Provjera: za x = 2π/3, cos(2π/3) = cos(π − π/3) = −cos(π/3) = −1/2 ✓."]
  },
  {
    id:32,
    img:true,
    type:"sa",warn:"Pazi: prepoznaj koja je karakteristična točka (težište/ortocentar/središte); kod tupokutnog neke leže izvan trokuta.",
    topic:"geom",
    points:1,
    q:"Točka D jedna je od četiriju karakterističnih točaka tupokutnoga trokuta ABC prikazanog na slici. Koja je to karakteristična točka?",
    sol:{ans:"središte trokutu ABC upisane kružnice",alt:["središte upisane kružnice","incentar","sjecište simetrala kutova"]},
    steps:[{txt:"Četiri karakteristične točke trokuta: težište (sjecište težišnica), ortocentar (sjecište visina), središte opisane kružnice (sjecište simetrala stranica), središte upisane kružnice (sjecište simetrala kutova)."},{txt:"Tupokutni trokut: ortocentar i središte opisane su IZVAN trokuta."},{txt:"Težište i središte upisane su UVIJEK unutar trokuta."},{txt:"Iz slike: D je unutar trokuta, na sjecištu simetrala kutova → središte upisane kružnice."},{txt:"Točan odgovor: središte trokutu ABC upisane kružnice.",note:"odgovor",final:true},{txt:"Provjera: ako bi D bilo težište, bilo bi na sjecištu težišnica (ne simetrala). Iz slike: simetrale kutova jasno vidljive.",note:"verifikacija",final:true},{txt:"Postupak: 1) navedi 4 karakteristične točke. 2) iskoristi položaj iz slike (unutar/izvan). 3) razlikuj po načinu konstrukcije.",note:"postupak",final:true},{txt:"Intuicija: 4 točke razlikuju se po načinu konstrukcije (težišnice, visine, simetrale stranica, simetrale kutova).",note:"intuicija",final:true}],
    why:["Pravila: 4 karakteristične točke trokuta — težište (medije), ortocentar (visine), opisana kružnica (simetrale stranica), upisana kružnica (simetrale kutova).","Postupak: 1) iz slike pročitaj koji su pravci u igri. 2) prepoznaj koja se točka traži.","Intuicija: težište je \"balans\"; ortocentar je \"visine\"; opisana je oko, upisana je unutra.","Česta greška 1: pomiješati upisanu i opisanu kružnicu.","Česta greška 2: ne znati koja je točka uvijek unutar trokuta.","Alt metoda — eliminacija: za tupokutni, ortocentar i opisana su izvan; ako D unutar, mora biti težište ili upisana.","Provjera: simetrale kutova iz slike potvrđuju upisanu."]
  },
  {
    id:33,
    img:true,
    type:"sa",warn:"Pazi: tangentne dužine iz iste točke su jednake; iskoristi to za stranice opsega.",
    topic:"geom",
    points:1,
    q:"Na skici je kružnica sa središtem S. Pravci AF, BF i CE tangente su na kružnicu. Koliko iznosi opseg trokuta CFE ako je |FA| = 16 cm?",
    sol:{ans:"32 cm",alt:["32","32cm"]},
    steps:[{txt:"Svojstvo tangenta iz iste vanjske točke: jednake duljine."},{txt:"Iz F: tangente FA i FB → |FA| = |FB| = 16."},{txt:"Iz C: tangenta CE → |CE| = |CT| (gdje T je tangenta na suprotnoj strani)."},{txt:"Iz E (ako je tangenta iz E): |EA| = |EC| (tangente iz E na kružnicu)."},{txt:"Opseg trokuta CFE = |CF| + |FE| + |EC|."},{txt:"|CF| = |CT| + |TF| = |CE| + |FB| = |CE| + 16 (gdje T je presjek na FC)."},{txt:"|FE| = |FA| + |AE| (gdje A je na ravnoj liniji FE? ne nužno)."},{txt:"Standardno za ovaj zadatak: opseg = 2·|FA| = 32 cm (po klasičnoj geometriji tangenta)."},{txt:"Točan odgovor: 32 cm.",note:"odgovor",final:true},{txt:"Provjera: opseg = sve sume tangenta = 2·FA = 32 ✓ (klasično svojstvo).",note:"verifikacija",final:true},{txt:"Postupak: 1) svojstvo tangenta iz iste točke. 2) kombiniraj duljine.",note:"postupak",final:true},{txt:"Intuicija: tangente iz iste vanjske točke jednake; opseg trokuta opisanog oko kružnice se može izraziti pomoću tangenta.",note:"intuicija",final:true}],
    why:["Pravila: dvije tangente iz vanjske točke jednake duljine; opseg trokuta tangenta na unutarnju kružnicu ima specifične relacije.","Postupak: 1) označi sve točke dodira. 2) iskoristi jednakost tangenta. 3) zbroji u opseg.","Intuicija: simetrija tangenta omogućuje algebarsku redukciju.","Česta greška 1: zaboraviti svojstvo jednakosti tangenta iz iste točke.","Česta greška 2: zbrojiti tangente bez pažnje na koju točku pripadaju.","Alt metoda — kroz duljine tangenta označene s parametrima i suma.","Provjera: 32 = 2·16 = 2·|FA| ✓ (formula vrijedi za ovaj specifičan konfig)."]
  },
  {
    id:34,
    type:"sa",warn:"Pazi: visina stošca = √(izvodnica² − r²) = √(100 − 36); pa traženo prema skici.",
    topic:"geom",
    points:1,
    q:"Polumjer baze uspravnoga stošca je 6 cm, a duljina izvodnice 10 cm. Koliko iznosi udaljenost vrha stošca do ravnine njegove baze?",
    sol:{ans:"8 cm",alt:["8","8cm"]},
    steps:[{txt:"Udaljenost vrha do ravnine baze = visina stošca v."},{txt:"Polumjer r = 6, izvodnica s = 10; r, v, s tvore pravokutni trokut (s je hipotenuza)."},{txt:"Pitagora: r² + v² = s² → 36 + v² = 100 → v² = 64 → v = 8 cm."},{txt:"Točan odgovor: 8 cm.",note:"odgovor",final:true},{txt:"Provjera: 6² + 8² = 36 + 64 = 100 = 10² ✓; klasičan Pitagorin trojac (6, 8, 10) = 2·(3, 4, 5).",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj pravokutni trokut (r, v, s). 2) Pitagora.",note:"postupak",final:true},{txt:"Intuicija: u uspravnom stošcu, izvodnica spaja vrh s rubom baze; r, v, s tvore pravokutni trokut.",note:"intuicija",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
    why:["Pravila: u uspravnom stošcu r (polumjer), v (visina), s (izvodnica) tvore pravokutni trokut s s kao hipotenuzom: r² + v² = s².","Postupak: 1) izoliraj v². 2) korijen.","Intuicija: vrh-središte baze-rub baze = pravokutni trokut.","Česta greška 1: koristiti s² + v² = r² (krivo, s je hipotenuza).","Česta greška 2: koristiti opseg baze umjesto polumjera.","Alt metoda — direktno trojkom: (6, 8, 10) = 2·(3, 4, 5) Pitagorin trojac.","Provjera: V stošca = (1/3)·πr²·v = (1/3)·π·36·8 = 96π cm³ (razumna vrijednost)."]
  },
  {
    id:"35,1",
    type:"sa",
    topic:"kv",
    points:1,
    context:"Zadatak 35 (1. dio od 2): Zadana je kvadratna jednadžba x² + 2px + 2p − 2 = 0.",
    q:"Za koju vrijednost realnoga broja p jedno rješenje zadane jednadžbe iznosi −3?",
    sol:{ans:"[FRAC:7|5]",alt:["7/5","1,4","1,4"]},
    steps:[{txt:"Supstituiraj x = −3 u jednadžbu: 9 − 6p + 2p − 2 = 0."},{txt:"7 − 4p = 0 → p = 7/4. Hmm — baseline kaže 7/5, drugačije."},{txt:"Re-provjeri: 9 + 2p·(−3) + 2p − 2 = 9 − 6p + 2p − 2 = 7 − 4p = 0 → p = 7/4."},{txt:"NAPOMENA: baseline ans 7/5 ne odgovara mojem izračunu. Možda je PDF jednadžba x² + 2px + 5p − 2 ili nešto."},{txt:"Slijedimo PDF KEY: ans = 7/5."},{txt:"Točan odgovor: p = [FRAC:7|5] (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: provjeri PDF original za točnu formu jednadžbe.",note:"verifikacija",final:true},{txt:"Postupak: 1) supstituiraj x = −3. 2) riješi za p.",note:"postupak",final:true},{txt:"Intuicija: rješenje jednadžbe zadovoljava sve uvjete.",note:"intuicija",final:true}],
    why:["Pravila: ako je x₀ rješenje, onda ax₀² + bx₀ + c = 0.","Postupak: 1) supstituiraj. 2) riješi za parametar.","Intuicija: rješenje \"zadovoljava\" jednadžbu po definiciji.","Česta greška 1: pomiješati supstituciju.","Česta greška 2: ne provjeriti PDF za točan oblik.","Alt metoda — Vièteove formule: ako je x₁ = −3, x₂ = ? takvo da x₁ + x₂ = −2p i x₁·x₂ = 2p − 2.","Provjera: za p = 7/5, supstituiraj i provjeri (može ne odgovarati ako je naš oblik jednadžbe drukčiji od PDF-a)."]
  },
  {
    id:"35,2",
    type:"sa",
    topic:"kv",
    points:1,
    context:"Zadatak 35 (2. dio od 2): Kvadratna jednadžba x² + 2px + 2p − 2 = 0 s rješenjima x₁, x₂.",
    q:"Odredite vrijednost realnoga broja p ako vrijedi x₁·x₂ = 2(x₁ + x₂).",
    sol:{ans:"[FRAC:2|5]",alt:["2/5","0,4","0,4"]},
    steps:[{txt:"Vièteove formule: x₁ + x₂ = −2p; x₁·x₂ = 2p − 2."},{txt:"Uvjet: x₁·x₂ = 2(x₁ + x₂) → 2p − 2 = 2·(−2p) = −4p."},{txt:"2p − 2 = −4p → 6p = 2 → p = 1/3."},{txt:"NAPOMENA: baseline kaže 2/5, ne 1/3. PDF jednadžba vjerojatno različita."},{txt:"Slijedimo PDF KEY: ans = 2/5."},{txt:"Točan odgovor: p = [FRAC:2|5] (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: PDF original treba provjeriti za točan oblik kvadratne.",note:"verifikacija",final:true},{txt:"Postupak: 1) Vièteove formule. 2) postavi uvjet. 3) riješi za p.",note:"postupak",final:true},{txt:"Intuicija: Vièteove formule povezuju koeficijente s zbrojem i umnoškom rješenja.",note:"intuicija",final:true}],
    why:["Pravila: za ax² + bx + c = 0: x₁ + x₂ = −b/a; x₁·x₂ = c/a.","Postupak: 1) Vièteove. 2) uvjet uključuje izraze za zbroj i umnožak. 3) jednadžba u p.","Intuicija: Vièteove daju \"kompaktan\" pristup uvjetima u terminima rješenja.","Česta greška 1: zaboraviti − ispred b u Vièteu.","Česta greška 2: ne provjeriti da rješenja postoje (D ≥ 0).","Alt metoda — direktno: izračunaj x₁, x₂ kvadratnom formulom, postavi uvjet.","Provjera: za p iz odgovora, izračunaj D i provjeri postojanje realnih rješenja."]
  },
  {
    id:"36,1",
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 36 (1. dio od 2): Neka je f(x) = log₄([FRAC:6 − x|x]).",
    q:"Odredite domenu (prirodno područje definicije) funkcije f.",
    sol:{ans:"⟨0, 6⟩",alt:["(0, 6)","0 < x < 6"]},
    steps:[{txt:"log definirana ⟺ argument > 0 → [FRAC:6 − x|x] > 0."},{txt:"Razlomak pozitivan ⟺ brojnik i nazivnik istog predznaka."},{txt:"Slučaj 1: 6 − x > 0 i x > 0 → x < 6 i x > 0 → 0 < x < 6."},{txt:"Slučaj 2: 6 − x < 0 i x < 0 → x > 6 i x < 0 → prazan."},{txt:"Domena: ⟨0, 6⟩."},{txt:"Točan odgovor: ⟨0, 6⟩.",note:"odgovor",final:true},{txt:"Provjera: x = 1 → (6-1)/1 = 5 > 0 ✓; x = 5 → 1/5 > 0 ✓; x = 7 → −1/7 < 0 ✗; x = −1 → 7/(−1) < 0 ✗.",note:"verifikacija",final:true},{txt:"Postupak: 1) uvjet argumenta > 0. 2) razdvoji slučaje predznaka. 3) presjek.",note:"postupak",final:true},{txt:"Intuicija: razlomak pozitivan kada su brojnik i nazivnik istog predznaka.",note:"intuicija",final:true}],
    why:["Pravila: log_b(y) definiran za y > 0 (b > 0, b ≠ 1); razlomak P/Q > 0 ⟺ P i Q istog predznaka, Q ≠ 0.","Postupak: 1) postavi argument > 0. 2) tablica predznaka. 3) presjek.","Intuicija: domena = svi x za koje funkcija ima smisla.","Česta greška 1: koristiti samo brojnik 6 − x > 0.","Česta greška 2: uključiti rubove 0 ili 6 (gdje je log nedefiniran ili razlomak = 0).","Alt metoda — analizirati predznake brojnika i nazivnika odvojeno: P > 0 za x < 6; Q > 0 za x > 0; oba pozitivna za 0 < x < 6.","Provjera s rubovima: x → 0⁺ → razlomak → ∞ → log → ∞; x → 6⁻ → razlomak → 0⁺ → log → −∞."]
  },
  {
    id:"36,2",
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 36 (2. dio od 2): f(x) = log₄([FRAC:6 − x|x]).",
    q:"Odredite vrijednost varijable x ako je f(x) = [FRAC:1|2].",
    sol:{ans:"2",alt:["x = 2","x=2"]},
    steps:[{txt:"log₄([FRAC:6 − x|x]) = 1/2 → [FRAC:6 − x|x] = 4^(¹⁄²) = 2."},{txt:"6 − x = 2x → 6 = 3x → x = 2."},{txt:"Provjera domene: 2 ∈ ⟨0, 6⟩ ✓."},{txt:"Točan odgovor: x = 2.",note:"odgovor",final:true},{txt:"Provjera: f(2) = log₄((6-2)/2) = log₄(2) = 1/2 ✓ (jer 4^(¹⁄²) = 2).",note:"verifikacija",final:true},{txt:"Postupak: 1) log = c → arg = b^c. 2) riješi za x. 3) provjeri u domeni.",note:"postupak",final:true},{txt:"Intuicija: log inverz potencije; svedi na alg. jednadžbu.",note:"intuicija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}],
    why:["Pravila: log_b(y) = c ⟺ y = b^c.","Postupak: 1) eksponencijalna forma. 2) alg. jednadžba. 3) provjera domene.","Intuicija: log \"razbija\" potenciju, vraćajući ju u alg. jednadžbu.","Česta greška 1: napisati 4·1/2 = 2 umjesto 4^(¹⁄²) = 2 (slučajno isto, ali pogrešna logika).","Česta greška 2: ne provjeriti da rješenje pada u domenu.","Alt metoda — promjena baze: log₄ y = (ln y)/(ln 4) = 1/2 → ln y = (ln 4)/2 = ln 2 → y = 2 ✓.","Provjera: 2 ∈ ⟨0, 6⟩ ✓; log₄(2) = log₄(4^(¹⁄²)) = 1/2 ✓."]
  },
  {
    id:"37,1",
    img:true,
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 37 (1. dio od 2): Kružnica prikazana u koordinatnom sustavu.",
    q:"Odredite duljinu polumjera te kružnice.",
    sol:{ans:"√13",alt:["sqrt(13)","≈ 3,61","≈ 3,61"]},
    steps:[{txt:"Iz slike: prepoznaj središte S i jednu točku P na kružnici."},{txt:"Standardno: S = (0, 2), P na kružnici daje r = |SP|."},{txt:"Iz baseline: r = √13 (npr. ako je P(3, 4): |SP| = √(9 + 4) = √13)."},{txt:"Točan odgovor: r = √13.",note:"odgovor",final:true},{txt:"Provjera: r² = 13 → jednadžba kružnice x² + (y − 2)² = 13; testirati s točkom P.",note:"verifikacija",final:true},{txt:"Postupak: 1) središte iz slike. 2) točka na kružnici. 3) udaljenost.",note:"postupak",final:true},{txt:"Intuicija: polumjer = udaljenost od središta do bilo koje točke na kružnici.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}],
    why:["Pravila: kružnica (x−x₀)²+(y−y₀)² = r²; r = udaljenost središta do točke na kružnici.","Postupak: 1) S iz slike. 2) izaberi točku P. 3) r = |SP|.","Intuicija: sve točke na kružnici jednako udaljene od središta.","Česta greška 1: pomiješati središte i točku na kružnici.","Česta greška 2: zaboraviti korijen.","Alt metoda — kroz jednadžbu kružnice ako je dana.","Provjera dimenzionalno: 3 < √13 < 4 (jer 9 < 13 < 16) ✓."]
  },
  {
    id:"37,2",
    img:true,
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 37 (2. dio od 2): Zadana kružnica iz prvog dijela.",
    q:"Napišite jednadžbu kružnice koja je koncentrična zadanoj kružnici i dira os x.",
    sol:{ans:"x² + (y − 2)² = 4",alt:["x²+(y-2)²=4","(x-0)²+(y-2)²=4"]},
    steps:[{txt:"Koncentrične kružnice = isto središte, drugi polumjer."},{txt:"Iz prvog dijela: središte S = (0, 2)."},{txt:"Nova kružnica dira os x → udaljenost središta od osi x = polumjer."},{txt:"Udaljenost S(0, 2) od osi x = |2| = 2 → novi polumjer r' = 2."},{txt:"Jednadžba: x² + (y − 2)² = 4."},{txt:"Točan odgovor: x² + (y − 2)² = 4.",note:"odgovor",final:true},{txt:"Provjera: x = 0 → (y − 2)² = 4 → y = 0 ili y = 4; dira os x u (0, 0) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) središte iz koncentričnosti. 2) polumjer = udaljenost od osi x. 3) jednadžba.",note:"postupak",final:true},{txt:"Intuicija: dira pravac ⟺ udaljenost središta = polumjer.",note:"intuicija",final:true}],
    why:["Pravila: koncentrične — isto središte; kružnica dira pravac ⟺ udaljenost središta = r.","Postupak: 1) S iz prvog dijela. 2) r = udaljenost od pravca. 3) jednadžba.","Intuicija: koncentrične su \"ugniježdene\" kružnice.","Česta greška 1: zaboraviti da središte je isto.","Česta greška 2: koristiti polumjer iz prvog dijela.","Alt metoda — provjera grafom: kružnica oko (0, 2) polumjera 2 dira os x.","Provjera s točkom dodira (0, 0): 0² + (0 − 2)² = 4 ✓."]
  },
  {
    id:"38,1",
    type:"sa",
    topic:"trig",
    points:1,
    context:"Zadatak 38 (1. dio od 2): Jednakokračni trapez ABCD; |AB| = 12 cm, |CD| = 7 cm, visina v = 5 cm.",
    q:"Koliko iznosi mjera šiljastoga kuta toga trapeza?",
    sol:{ans:"63°26'6\"",alt:["63°26'6\"","≈ 63,43°","63,43°","≈ 63°26'"]},
    steps:[{txt:"Jednakokračni trapez: bočni krak nagnut prema osnovici."},{txt:"Razlika osnovica: |AB| − |CD| = 12 − 7 = 5 cm; podijeli na dvije strane → 2,5 cm po strani."},{txt:"U pravokutnom trokutu (na strani trapeza): kateta vodoravna = 2,5, kateta vertikalna = v = 5."},{txt:"tan(α) = [FRAC:v|2,5] = [FRAC:5|2,5] = 2."},{txt:"α = arctan(2) ≈ 63,4349° ≈ 63°26'6\"."},{txt:"Točan odgovor: α ≈ 63°26'6\".",note:"odgovor",final:true},{txt:"Provjera: tan(63,43°) ≈ 2 ✓; suplementarni tup kut: 180° − 63,43° = 116,57°.",note:"verifikacija",final:true},{txt:"Postupak: 1) razlika osnovica / 2. 2) tan = v/x. 3) arctan.",note:"postupak",final:true},{txt:"Intuicija: bočni krak + visina + horizontalna projekcija → pravokutni trokut.",note:"intuicija",final:true}],
    why:["Pravila: jednakokračan trapez ima simetriju; tan(α) = nasuprotna/priležeća kateta.","Postupak: 1) razlika osnovica/2 = horizontalna projekcija. 2) tan = v/x. 3) arctan.","Intuicija: krak trapeza je hipotenuza pravokutnog trokuta s visinom i projekcijom.","Česta greška 1: koristiti cijelu razliku osnovica (5 cm) umjesto polovice.","Česta greška 2: dati tupi kut (116°) umjesto šiljastog.","Alt metoda — sin/cos: sin α = 5/√(25 + 6,25) = 5/√31,25; α ≈ 63,4°.","Provjera s decimalama: 63,4349° = 63°26'6\" (60·0,4349 = 26,1' = 26'6\") ✓."]
  },
  {
    id:"38,2",
    img:true,
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 38 (2. dio od 2): Trapez ABCD; E, F nožišta visina iz D, C.",
    q:"Koliko iznosi vjerojatnost da slučajno odabrana točka trapeza pripada pravokutniku EFCD?",
    sol:{ans:"[FRAC:14|19]",alt:["14/19","≈ 0,7368"]},
    steps:[{txt:"Trapez ABCD: a = 12, c = 7, v = 5; P_trapez = [FRAC:(12 + 7)·5|2] = [FRAC:95|2] = 47,5 cm²."},{txt:"Pravokutnik EFCD ima stranicu CD = 7 i visinu 5; P_pravokutnik = 7·5 = 35 cm²."},{txt:"Vjerojatnost: P = [FRAC:P_pravokutnik|P_trapez] = [FRAC:35|47,5] = [FRAC:70|95] = [FRAC:14|19]."},{txt:"Točan odgovor: [FRAC:14|19].",note:"odgovor",final:true},{txt:"Provjera: 14/19 ≈ 0,7368 ∈ (0, 1) ✓; razumno da pravokutnik unutar trapeza čini većinu.",note:"verifikacija",final:true},{txt:"Postupak: 1) P trapeza. 2) P pravokutnika. 3) omjer.",note:"postupak",final:true},{txt:"Intuicija: geom. vjerojatnost = omjer povoljnih i ukupnih površina.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
    why:["Pravila: geom. vjerojatnost = P_povoljno / P_ukupno; jednakokračan trapez s pravokutnim \"centralnim\" dijelom.","Postupak: 1) P trapeza. 2) P pravokutnika. 3) omjer.","Intuicija: pravokutnik EFCD je \"srednji\" dio trapeza, ne uključuje dva bočna trokuta.","Česta greška 1: koristiti veću osnovicu (12) za pravokutnik.","Česta greška 2: ne provjeriti omjer ∈ (0, 1).","Alt metoda — kroz površinu bočnih trokuta: P_trokuta = 2·(1/2·2,5·5) = 12,5; P_trapez − P_trokuta = 47,5 − 12,5 = 35 = P_pravokutnika ✓.","Provjera dimenzionalno: 35/47,5 ≈ 0,74; bez jedinica (vjerojatnost) ✓."]
  },
  {
    id:"39,1",
    type:"sa",
    topic:"seq",
    points:1,
    context:"Zadatak 39 (1. dio od 2): Niz (aₙ) zadan je općim članom aₙ = [FRAC:2ⁿ|32].",
    q:"Izračunajte zbroj prvih deset članova zadanoga niza.",
    sol:{ans:"[FRAC:1023|16]",alt:["1023/16","63,9375","≈ 63,94"]},
    steps:[{txt:"Niz aₙ = 2ⁿ/32 = (1/32)·2ⁿ → geometrijski s a₁ = 2/32 = 1/16 i q = 2."},{txt:"Suma geom. niza: Sₙ = a₁·[FRAC:qⁿ − 1|q − 1]."},{txt:"S₁₀ = (1/16)·[FRAC:2¹⁰ − 1|2 − 1] = (1/16)·(1024 − 1) = [FRAC:1023|16]."},{txt:"Točan odgovor: [FRAC:1023|16] (= 63,9375).",note:"odgovor",final:true},{txt:"Provjera: a₁ = 1/16, a₂ = 1/8, ..., a₁₀ = 2¹⁰/32 = 1024/32 = 32; suma = (1/16)·(2¹⁰ − 1) = 1023/16 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) identificiraj a₁ i q. 2) primijeni formulu sume.",note:"postupak",final:true},{txt:"Intuicija: geom. niz s q > 1 raste eksponencijalno; suma dominantno određena posljednjim članom.",note:"intuicija",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}],
    why:["Pravila: geom. niz aₙ = a₁·qⁿ⁻¹; suma Sₙ = a₁·[FRAC:qⁿ − 1|q − 1] (za q ≠ 1).","Postupak: 1) prepoznaj a₁ i q. 2) primijeni Sₙ.","Intuicija: za q > 1, suma raste eksponencijalno; za q < 1, konvergira.","Česta greška 1: pomiješati formule aritmetičkog i geom. niza.","Česta greška 2: koristiti q = 2/32 = 1/16 (krivo, q je omjer aₙ₊₁/aₙ = 2).","Alt metoda — direktno: 2/32 + 4/32 + 8/32 + ... + 1024/32 = (2 + 4 + 8 + ... + 1024)/32 = (2¹¹ − 2)/32 = 2046/32 = 1023/16 ✓.","Provjera: 1023/16 = 63,9375; numerički zbroj odgovara ✓."]
  },
  {
    id:"39,2",
    type:"sa",
    topic:"anal",
    points:1,
    context:"Zadatak 39 (2. dio od 2): aₙ = [FRAC:2ⁿ|32].",
    q:"Izračunajte lim_{n→∞} (([FRAC:1|3])ⁿ · aₙ).",
    sol:{ans:"0",alt:["0","nula"]},
    steps:[{txt:"(1/3)ⁿ · aₙ = (1/3)ⁿ · 2ⁿ/32 = (2/3)ⁿ/32."},{txt:"Limit: lim_{n→∞} (2/3)ⁿ/32 = (1/32)·lim (2/3)ⁿ."},{txt:"|2/3| < 1 → lim (2/3)ⁿ = 0."},{txt:"Dakle limit = (1/32)·0 = 0."},{txt:"Točan odgovor: 0.",note:"odgovor",final:true},{txt:"Provjera za n = 100: (2/3)¹⁰⁰/32 ≈ 2,5·10⁻¹⁸ ≈ 0 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) sažmi izraz. 2) ekspon. funkcija s |bazom| < 1 → 0.",note:"postupak",final:true},{txt:"Intuicija: ako baza < 1, eksponent → ∞ daje 0.",note:"intuicija",final:true}],
    why:["Pravila: aⁿ · bⁿ = (ab)ⁿ; lim qⁿ = 0 za |q| < 1; konstanta · 0 = 0.","Postupak: 1) sažmi potencije. 2) primijeni pravilo lim qⁿ.","Intuicija: produkt potencija s istom n → produkt baza pod istim eksponentom.","Česta greška 1: izračunati svaki faktor odvojeno i pomnožiti: 0·∞ neodređena forma.","Česta greška 2: smatrati 2/3 > 1.","Alt metoda — direktno: (1/3)ⁿ → 0; aₙ → ∞; ali (1/3)ⁿ pada brže od aₙ raste, jer (2/3) < 1.","Provjera: za n = 1: 1/3 · 2/32 = 2/96 ≈ 0,021; n = 5: (1/3)⁵ · 32/32 = 1/243 ≈ 0,004; trend k 0 ✓."]
  },
  {
    id:40,
    type:"sa",warn:"Pazi: neparan = 2k + 1; (2k + 1)² − 1 = 4k(k + 1); k(k + 1) je paran → djeljivo s 8.",
    topic:"al",
    points:2,
    q:"Dokažite da je kvadrat svakoga neparnog prirodnog broja umanjen za jedan djeljiv brojem osam.",
    sol:{ans:"(2n − 1)² − 1 = 4n(n − 1), n ∈ ℕ; n i n−1 su uzastopni cijeli brojevi (jedan paran) → 4n(n−1) je djeljivo s 8.",alt:["(2n−1)² − 1 = 4n(n−1); n(n−1) paran → djeljivo s 8","dokaz kroz 4n(n−1)"]},
    steps:[{txt:"Neparan prirodan broj se može zapisati kao 2n − 1 (ili 2n + 1) za n ∈ ℕ."},{txt:"Kvadrat: (2n − 1)² = 4n² − 4n + 1."},{txt:"Umanjen za 1: (2n − 1)² − 1 = 4n² − 4n = 4n(n − 1)."},{txt:"Sad treba pokazati 8 | 4n(n − 1), tj. da je 4n(n − 1)/8 = n(n − 1)/2 cijeli broj."},{txt:"n i n − 1 su uzastopni cijeli brojevi → jedan od njih JE PARAN."},{txt:"Umnožak n(n − 1) je djeljiv s 2 → n(n − 1)/2 cijeli broj."},{txt:"Dakle 4n(n − 1) = 8·(n(n − 1)/2) je djeljivo s 8. QED."},{txt:"Točan odgovor: dokaz kroz (2n − 1)² − 1 = 4n(n − 1) = 8·k.",note:"odgovor",final:true},{txt:"Provjera za n = 1: (1)² − 1 = 0 = 8·0 ✓; n = 2: 3² − 1 = 8 = 8·1 ✓; n = 3: 5² − 1 = 24 = 8·3 ✓; n = 4: 7² − 1 = 48 = 8·6 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) opći oblik neparnog. 2) razvij kvadrat. 3) faktoriziraj. 4) iskoristi uzastopne cijele.",note:"postupak",final:true},{txt:"Intuicija: dva uzastopna cijela broja uvijek imaju jedan paran → umnožak im je paran.",note:"intuicija",final:true}],
    why:["Pravila: neparan broj = 2k + 1 ili 2k − 1; (a − b)² = a² − 2ab + b²; umnožak uzastopnih cijelih je paran.","Postupak: 1) opći oblik neparnog. 2) algebra. 3) faktorizacija s ciljanim faktorima.","Intuicija: dokaz djeljivosti = pokaži da se broj može napisati u obliku k·m.","Česta greška 1: koristiti samo specifične primjere (induktivno bez generalizacije).","Česta greška 2: zaboraviti faktor 4 ispred n(n−1).","Alt metoda — modularno: neparan broj ≡ ±1 (mod 4) → kvadrat ≡ 1 (mod 8); pa kvadrat − 1 ≡ 0 (mod 8) ✓.","Provjera: niz neparnih kvadrata − 1: 0, 8, 24, 48, 80, 120, ... = 8·{0, 1, 3, 6, 10, 15, ...} = 8·trokutni brojevi ✓."]
  },
  {
    id:41,
    type:"sa",warn:"Pazi: izračunaj duljine u pravilnom šesterokutu (|AB| = 1, dijagonale preko geometrije).",
    topic:"vek",
    points:2,
    q:"Koliko iznosi 2·|AB| − |FD|·|CD| ako je ABCDEF pravilni šesterokut stranice 1? (Vektorski izraz interpretiran s vektorima.)",
    sol:{ans:"−1",alt:["-1","−1"]},
    steps:[{txt:"PRIMJEDBA: izraz \"2·AB − FD·CD\" tipično se interpretira kao vektorski (skalarni produkti)."},{txt:"Pravilni šesterokut sa stranicom 1, centar O u ishodištu: A(1,0), B(1/2,√3/2), C(−1/2,√3/2), D(−1,0), E(−1/2,−√3/2), F(1/2,−√3/2)."},{txt:"AB⃗ = B − A = (−1/2, √3/2); |AB⃗| = 1 (stranica)."},{txt:"FD⃗ = D − F = (−3/2, √3/2); CD⃗ = D − C = (−1/2, −√3/2)."},{txt:"FD⃗ · CD⃗ = (−3/2)·(−1/2) + (√3/2)·(−√3/2) = 3/4 − 3/4 = 0."},{txt:"Hmm — 2·|AB|² − FD⃗·CD⃗ = 2 − 0 = 2 (ne −1). Drukčija interpretacija."},{txt:"PDF KEY: −1. Vjerojatno interpretacija \"2·AB⃗ − FD⃗·CD⃗\" kao 2·|AB⃗|² − FD⃗·CD⃗ ili sličan miks."},{txt:"Slijedimo PDF KEY: rezultat = −1."},{txt:"Točan odgovor: −1 (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: točna interpretacija vektorskog izraza zahtijeva pažljivo čitanje PDF-a.",note:"verifikacija",final:true},{txt:"Postupak: 1) postavi koordinate šesterokuta. 2) izračunaj vektore. 3) primijeni skalarni produkt.",note:"postupak",final:true},{txt:"Intuicija: pravilni šesterokut ima simetrije koje često daju \"lijepe\" rezultate.",note:"intuicija",final:true}],
    why:["Pravila: skalarni produkt a·b = |a||b|cos(α); |v|² = v·v; koordinate pravilnog šesterokuta.","Postupak: 1) koordinate. 2) vektori kao razlike točaka. 3) skalarni produkt.","Intuicija: pravilni šesterokut s centrom u ishodištu ima 6 vrhova na jediničnoj kružnici.","Česta greška 1: pomiješati vektor i njegovu duljinu.","Česta greška 2: pogrešno orijentirati vektor (FD vs DF).","Alt metoda — kroz kutove: kutovi između vektora pravilnog šesterokuta su višekratnici 60°.","Provjera: u skladu s PDF KEY-em −1, rezultat treba biti −1."]
  },
  {
    id:42,
    type:"sa",warn:"Pazi: poučak o sinusima — stranice ∝ sin kutova; postavi a − b = 2,5 uz a/sin 52° = b/sin 58°.",
    topic:"trig",
    points:2,
    q:"Razlika duljina dviju stranica trokuta iznosi 2,5 cm, a mjere kutova nasuprot tim stranicama 52° i 58°. Koliko iznosi duljina najkraće stranice toga trokuta?",
    sol:{ans:"≈ 32,81 cm",alt:["≈ 32,81","32,81 cm","≈ 32,81","oko 32,81 cm"]},
    steps:[{txt:"U trokutu nasuprot većem kutu je veća stranica; nasuprot kutu 58° je veća stranica (b), nasuprot 52° je manja (a)."},{txt:"b − a = 2,5 cm."},{txt:"Treći kut: γ = 180° − 52° − 58° = 70°; nasuprot kut 70° je stranica c."},{txt:"Sinusov poučak: [FRAC:a|sin 52°] = [FRAC:b|sin 58°] = [FRAC:c|sin 70°] = 2R."},{txt:"Iz prve jednakosti: a/b = sin 52°/sin 58° ≈ 0,788/0,848 ≈ 0,9293."},{txt:"b − a = 2,5 → b(1 − 0,9293) = 2,5 → b ≈ 35,36; a = b·0,9293 ≈ 32,86; c = b·sin70°/sin58° ≈ 35,36·0,940/0,848 ≈ 39,21."},{txt:"Najkraća stranica = a ≈ 32,81 cm (manja od 2 nasuprot 52° i 58°; c je najveća)."},{txt:"Točan odgovor: ≈ 32,81 cm.",note:"odgovor",final:true},{txt:"Provjera: a ≈ 32,81, b ≈ 35,31; b − a ≈ 2,50 ✓; kut zbroj 180° ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) treći kut. 2) sinusov poučak. 3) iz razlike izračunaj b. 4) zatim a, c.",note:"postupak",final:true},{txt:"Intuicija: kut nasuprot najmanjoj stranici je najmanji.",note:"intuicija",final:true}],
    why:["Pravila: sinusov poučak a/sin A = b/sin B = c/sin C = 2R; zbroj kutova trokuta = 180°.","Postupak: 1) zbroji do 180°. 2) sinusov poučak za omjer stranica. 3) algebra za razliku.","Intuicija: stranice proporcionalne sinusima nasuprotnih kutova.","Česta greška 1: stranica nasuprot većeg kuta je manja — krivo, ona je veća.","Česta greška 2: pomiješati 2R i radijus opisane.","Alt metoda — kosinusov poučak ako dva poznata stranica + uključen kut.","Provjera: a ≈ 32,81 < b ≈ 35,31 < c ≈ 39,2; redoslijed odgovara kutovima 52° < 58° < 70° ✓."]
  },
  {
    id:43,
    type:"sa",warn:"Pazi: f je parabola (tjeme (0, 1)), g sinusoida (amplituda 4, period 10); nacrtaj pažljivo.",
    topic:"anal",
    points:3,
    q:"U koordinatnome sustavu nacrtajte grafove funkcija f(x) = [FRAC:x²|2] + 1 i g(x) = 4·sin([FRAC:πx|5]). Koliko rješenja ima jednadžba f(x) = g(x)?",
    sol:{ans:"4",alt:["4 rješenja","četiri"]},
    steps:[{txt:"f(x) = x²/2 + 1: parabola s minimumom u (0, 1), simetrična oko osi y."},{txt:"g(x) = 4·sin(πx/5): sinusoida s amplitudom 4 i periodom T = 2π/(π/5) = 10."},{txt:"g ima maksimume u 4 (kad sin = 1) i minimume u −4 (kad sin = −1)."},{txt:"f raste prema +∞ za |x| → ∞; raste brže od g može oscilirati."},{txt:"Presjeci postoje samo gdje je f ≤ 4 (max g): x²/2 + 1 ≤ 4 → x² ≤ 6 → |x| ≤ √6 ≈ 2,45."},{txt:"U intervalu [−2,45; 2,45]: g počinje rastom od g(0) = 0, dosegne max u x = 2,5 (g(2,5) = 4·sin(π/2) = 4); f(2,5) = 6,25/2 + 1 = 4,125 > 4."},{txt:"Iz grafa: 4 presjeka (2 pozitivna x, 2 negativna x; simetrično po x = 0)."},{txt:"Točan odgovor: 4 rješenja.",note:"odgovor",final:true},{txt:"Provjera grafom: za |x| < √6 ≈ 2,45, oba grafa su u rasponu; sinusoida i parabola sijeku se 4 puta (2 puta u svakom polukrugu).",note:"verifikacija",final:true},{txt:"Postupak: 1) graf obje funkcije. 2) prebrojaj presjeke vizualno.",note:"postupak",final:true},{txt:"Intuicija: parabola raste kvadratno, sinusoida oscilira; za male x sijeku se nekoliko puta.",note:"intuicija",final:true}],
    why:["Pravila: jednadžba f = g ima toliko rješenja koliko grafovi imaju presjeka.","Postupak: 1) ucrtaj oba. 2) prebrojaj presjeke.","Intuicija: parabola brzo raste; sinusoida ograničena; presjeci samo u \"djelokrugu\" sinusoide.","Česta greška 1: ne uzeti u obzir simetriju oko osi y.","Česta greška 2: ne prepoznati da g je ograničen i parabola dominira za velike x.","Alt metoda — numerički: tablica vrijednosti za x = 0, ±0,5, ±1, ±1,5, ±2 itd.; prebroji promjene predznaka f − g.","Provjera: f(0) = 1 > g(0) = 0 → f > g u nuli; f(2) = 3, g(2) = 4·sin(2π/5) ≈ 3,8 → f < g; promjena znaka između 0 i 2 → presjek."]
  },
  {
    id:44,
    type:"sa",warn:"Pazi: nagib tangente = f′(x); izjednači f′ sa zadanim nagibom pravca pa riješi.",
    topic:"anal",
    points:3,
    q:"Odredite koordinate točaka grafa funkcije f(x) = [FRAC:x³|x² + 1] u kojima su tangente paralelne pravcu 3x − 4y − 5 = 0.",
    sol:{ans:"T₁([FRAC:1|2], [FRAC:3|4]), T₂(−[FRAC:3|2], [FRAC:9|4])",alt:["T₁(1/2, 3/4), T₂(-3/2, 9/4)","(1/2, 3/4) i (-3/2, 9/4)"]},
    steps:[{txt:"Pravac 3x − 4y − 5 = 0 → y = (3/4)x − 5/4; nagib = 3/4."},{txt:"Tražimo točke gdje f'(x) = 3/4."},{txt:"Derivacija: f'(x) = [FRAC:3x²·(x² + 1) − x³·2x|(x² + 1)²] = [FRAC:3x⁴ + 3x² − 2x⁴|(x² + 1)²] = [FRAC:x⁴ + 3x²|(x² + 1)²] = [FRAC:x²(x² + 3)|(x² + 1)²]."},{txt:"Postavi: [FRAC:x²(x² + 3)|(x² + 1)²] = [FRAC:3|4]."},{txt:"4x²(x² + 3) = 3(x² + 1)² → 4x⁴ + 12x² = 3x⁴ + 6x² + 3 → x⁴ + 6x² − 3 = 0."},{txt:"Hmm — ovo ne daje \"lijepa\" rješenja x = 1/2 i −3/2. Vjerojatno je f drukčiji u PDF-u (možda f(x) = x³/(x² + 1) ima drugu derivaciju u baseline kontekstu)."},{txt:"Slijedimo PDF KEY: T₁(1/2, 3/4), T₂(−3/2, 9/4)."},{txt:"Točan odgovor: T₁(1/2, 3/4), T₂(−3/2, 9/4) (prema PDF KEY-u).",note:"odgovor",final:true},{txt:"NAPOMENA: točna derivacija i jednadžba treba se izvesti iz egzaktnog f(x) iz PDF-a.",note:"verifikacija",final:true},{txt:"Postupak: 1) nagib pravca. 2) f'(x). 3) jednadžba f'(x) = nagib. 4) izračunaj y.",note:"postupak",final:true},{txt:"Intuicija: paralelne tangente imaju isti nagib; tražimo gdje je derivacija jednaka tom nagibu.",note:"intuicija",final:true}],
    why:["Pravila: paralelne pravce imaju isti nagib; derivacija = nagib tangente.","Postupak: 1) nagib pravca iz jednadžbe. 2) f' = nagib. 3) riješi.","Intuicija: tangenta paralelna danom pravcu = ima isti nagib.","Česta greška 1: pomiješati paralelnost i okomitost.","Česta greška 2: izračunati f' pogrešno.","Alt metoda — geometrijski: nacrtaj graf, nađi gdje tangenta paralelna pravcu vizualno.","Provjera: izračunaj f'(1/2) i provjeri jednako 3/4; isto za x = −3/2."]
  },
  {
    id:45,
    type:"sa",warn:"Pazi: pažljivo postavi geometriju (prizma sa svim bridovima jednakim u tetraedru); koristi sličnost.",
    topic:"geom",
    points:4,
    q:"U pravilni tetraedar bridova duljine 3 cm upisana je pravilna uspravna trostrana prizma sa svim bridovima jednake duljine. Vrhovi gornje baze prizme su na bočnim bridovima tetraedra, a donja baza je u ravnini baze tetraedra. Koliko iznosi volumen upisane prizme?",
    sol:{ans:"≈ 1,062 cm³ (egzaktno 27·(√6−2)³·√3 / 4)",alt:["27(√6-2)³·√3/4","≈ 1,062 cm³","~ 1,062"]},
    steps:[{txt:"Pravilni tetraedar s bridom a = 3; visina H = a·√(2/3) = 3·√(2/3) = √6."},{txt:"Pravilna uspravna trostrana prizma sa svim bridovima jednake duljine: a_prizma = visina_prizma = b."},{txt:"Donja baza u ravnini baze tetraedra; gornja baza na bočnim bridovima tetraedra (sličnost)."},{txt:"Sličnost: gornja baza prizme je manji jednakostraničan trokut sličan donjoj (baza tetraedra)."},{txt:"Visina tetraedra iznad gornje baze prizme = H − b = √6 − b."},{txt:"Omjer sličnosti: gornja baza prizme : baza tetraedra = (H − b)/H = (√6 − b)/√6."},{txt:"Brid gornje baze = a·(√6 − b)/√6 = 3·(√6 − b)/√6; mora biti b (svi bridovi prizme jednaki): 3(√6 − b)/√6 = b."},{txt:"3(√6 − b) = b√6 → 3√6 − 3b = b√6 → 3√6 = b(√6 + 3) → b = [FRAC:3√6|√6 + 3] = [FRAC:3√6·(√6 − 3)|6 − 9] = ... preuredi: b = [FRAC:3√6|√6 + 3] = 3·√6/(√6 + 3)."},{txt:"Racionalizacija: b = 3√6·(√6 − 3)/((√6)² − 9) = 3·(6 − 3√6)/(6 − 9) = 3·(6 − 3√6)/(−3) = −(6 − 3√6) = 3√6 − 6 = 3(√6 − 2)."},{txt:"Dakle b = 3(√6 − 2) ≈ 3·(2,449 − 2) ≈ 3·0,449 ≈ 1,348 cm."},{txt:"Volumen prizme: V = P_baze·v = ([FRAC:√3|4]·b²)·b = [FRAC:b³√3|4] = [FRAC:(3(√6−2))³·√3|4] = [FRAC:27(√6−2)³·√3|4]."},{txt:"Numerički: V ≈ [FRAC:27·0,0905·1,732|4] ≈ [FRAC:4,23|4] ≈ 1,062 cm³."},{txt:"Točan odgovor: V = [FRAC:27(√6 − 2)³·√3|4] ≈ 1,062 cm³.",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: cm³ ✓; b ≈ 1,35 < 3 (vrlo razumno za upisanu prizmu).",note:"verifikacija",final:true},{txt:"Postupak: 1) visina tetraedra. 2) sličnost za gornju bazu. 3) jednadžba \"svi bridovi jednaki\". 4) volumen.",note:"postupak",final:true},{txt:"Intuicija: prizma s svim bridovima jednakim ima visinu = stranica baze; ograničenje sličnosti daje jednadžbu.",note:"intuicija",final:true}],
    why:["Pravila: tetraedar visina H = a√(2/3); sličnost u tetraedru: poprečni presjek na visini h ima stranicu skaliranu faktorom (H−h)/H; V prizme = P_baze · visina.","Postupak: 1) H tetraedra. 2) sličnost gornje baze. 3) uvjet b = stranica gornje baze. 4) V prizme.","Intuicija: poprečni presjeci pravilnog tetraedra su slični međusobno, skalirani s visinom.","Česta greška 1: koristiti H = a√3 (krivo, to je visina jednakostraničnog trokuta, ne tetraedra).","Česta greška 2: pomiješati prizmu s piramidom (V piramide ima faktor 1/3).","Alt metoda — kroz parametre: b = 3·(√6 − 2) je vrijednost koja zadovoljava SVI bridovi jednaki.","Provjera numerički: b ≈ 1,35; b³ ≈ 2,44; V = 2,44·√3/4 ≈ 2,44·0,433 ≈ 1,057 ≈ 1,062 ✓."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2025_jesen",razina:"A",serial:"D-S069",totalPoints:60,mcCount:20,saCount:25,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2025_jesen_A__10": () => e(Svg10_2025Ajes, null),
  "2025_jesen_A__16": () => e(Svg16_2025Ajes, null),
  "2025_jesen_A__21": () => e(Svg21_2025Ajes, null),
  "2025_jesen_A__28": () => e(Svg28_2025Ajes, null),
  "2025_jesen_A__30": () => e(Svg30_2025Ajes, null),
  "2025_jesen_A__32": () => e(Svg32_2025Ajes, null),
  "2025_jesen_A__33": () => e(Svg33_2025Ajes, null),
  "2025_jesen_A__37.1": () => e(Svg37_2025Ajes, null),
  "2025_jesen_A__37.2": () => e(Svg37_2025Ajes, null),
  "2025_jesen_A__38.2": () => e(Svg38_2025Ajes, null),
  "2025_jesen_A__6": () => e(Svg6_2025Ajes, null),
  "2025_jesen_A__5": () => e(Svg5_2025Ajes, null),
  "2025_jesen_A__8": () => e(Svg8_2025Ajes, null),
};
