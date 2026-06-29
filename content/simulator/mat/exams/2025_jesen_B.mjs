// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg35_2025Bjes(){
  const ax="#e2e8f0";
  const data2011 = [
    {name:"Istarska", pct:33.69, color:"#e8a2d8"},
    {name:"Primorsko-goranska", pct:19.00, color:"#f0a878"},
    {name:"Splitsko-dalmatinska", pct:17.21, color:"#f0d840"},
    {name:"Zadarska", pct:10.24, color:"#4a90d9"},
    {name:"Dubrovačko-neretvanska", pct:8.15, color:"#7c5cbf"},
    {name:"Šibensko-kninska", pct:6.35, color:"#50c878"},
    {name:"Ostale", pct:5.36, color:"#e05252"}
  ];
  const data2021 = [
    {name:"Istarska", pct:32.94, color:"#e8a2d8"},
    {name:"Primorsko-goranska", pct:17.58, color:"#f0a878"},
    {name:"Splitsko-dalmatinska", pct:19.52, color:"#f0d840"},
    {name:"Zadarska", pct:11.18, color:"#4a90d9"},
    {name:"Dubrovačko-neretvanska", pct:6.74, color:"#7c5cbf"},
    {name:"Šibensko-kninska", pct:5.92, color:"#50c878"},
    {name:"Ostale", pct:6.12, color:"#e05252"}
  ];
  
  function pie(data, cx, cy, r, title) {
    let html = `<text x="${cx}" y="${cy-r-20}" fill="${ax}" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">${title}</text>`;
    let start = -Math.PI/2;
    data.forEach(d => {
      const angle = (d.pct/100) * 2*Math.PI;
      const end = start + angle;
      const large = angle > Math.PI ? 1 : 0;
      const x1 = cx + r*Math.cos(start), y1 = cy + r*Math.sin(start);
      const x2 = cx + r*Math.cos(end), y2 = cy + r*Math.sin(end);
      html += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z" fill="${d.color}" stroke="${ax}" stroke-width="0.8"/>`;
      
      // Postotak u sredini isječka (samo ako je isječak dovoljno velik)
      if(d.pct > 4) {
        const mid = start + angle/2;
        const lx = cx + (r*0.65) * Math.cos(mid);
        const ly = cy + (r*0.65) * Math.sin(mid);
        html += `<text x="${lx}" y="${ly+3}" fill="#1a1a1a" font-size="9" font-weight="bold" font-family="sans-serif" text-anchor="middle">${d.pct}%</text>`;
      }
      start = end;
    });
    return html;
  }
  
  const W=440, H=580;
  const cxL=110, cyL=110, rL=90;
  const cxR=110, cyR=340, rR=90;
  
  // Legenda desno od svakog dijagrama
  function legend(data, x, y) {
    let html = "";
    data.forEach((d,i) => {
      const ly = y + i*18;
      html += `<rect x="${x}" y="${ly}" width="12" height="12" fill="${d.color}" stroke="${ax}" stroke-width="0.5"/>`;
      html += `<text x="${x+18}" y="${ly+10}" fill="${ax}" font-size="10" font-family="sans-serif">${d.name} (${d.pct}%)</text>`;
    });
    return html;
  }
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:420}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      pie(data2011, cxL, cyL, rL, "2011. godina") +
      legend(data2011, 220, 50) +
      pie(data2021, cxR, cyR, rR, "2021. godina") +
      legend(data2021, 220, 280)
    }})
  );
}

function Svg32_2025Bjes(){
  const W=340,H=420,ax="#e2e8f0",blue="#4a90d9",red="#e05252",gold="#e9b446";
  // Postavke:
  // A u donjem lijevom, B u donjem desnom, C sjecište u gornjoj trećini
  const A=[70, 370], B=[310, 370], C=[170, 180];
  // Gornji trokut CDE — mali, iznad C, s kutom 60° kod D
  // E lijevo-gore, D desno-gore
  const E=[135, 85], D=[220, 85];
  
  const pt = (p) => `<circle cx="${p[0]}" cy="${p[1]}" r="2.5" fill="${red}" stroke="#0a0f1a" stroke-width="1.5"/>`;
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      // Trokut ABC (veliki donji): A-B-C
      `<line x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke="${blue}" stroke-width="2"/>`+
      // Dužine AD i BE (produžene preko C)
      `<line x1="${A[0]}" y1="${A[1]}" x2="${D[0]}" y2="${D[1]}" stroke="${blue}" stroke-width="2"/>`+
      `<line x1="${B[0]}" y1="${B[1]}" x2="${E[0]}" y2="${E[1]}" stroke="${blue}" stroke-width="2"/>`+
      // Gornji trokut CDE: E-D (horizontalni gornji brid)
      `<line x1="${E[0]}" y1="${E[1]}" x2="${D[0]}" y2="${D[1]}" stroke="${blue}" stroke-width="2"/>`+
      // Točke
      pt(A)+pt(B)+pt(C)+pt(D)+pt(E)+
      // Oznake kutova — 60° kod A (donji lijevi)
      `<path d="M ${A[0]+26} ${A[1]} A 26 26 0 0 0 ${A[0]+26*Math.cos(Math.PI/3)} ${A[1]-26*Math.sin(Math.PI/3)}" stroke="${gold}" stroke-width="1.5" fill="none"/>`+
      `<text x="${A[0]+16}" y="${A[1]-6}" fill="${ax}" font-size="12" font-family="serif">60°</text>`+
      // 60° kod D (gornji desni)
      `<path d="M ${D[0]-22} ${D[1]} A 22 22 0 0 0 ${D[0]-22*Math.cos(Math.PI/3)} ${D[1]+22*Math.sin(Math.PI/3)}" stroke="${gold}" stroke-width="1.5" fill="none"/>`+
      `<text x="${D[0]-32}" y="${D[1]+20}" fill="${ax}" font-size="12" font-family="serif">60°</text>`+
      // Labels
      `<text x="${A[0]-16}" y="${A[1]+6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">A</text>`+
      `<text x="${B[0]+6}" y="${B[1]+6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">B</text>`+
      `<text x="${C[0]-16}" y="${C[1]+4}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">C</text>`+
      `<text x="${D[0]+6}" y="${D[1]-6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">D</text>`+
      `<text x="${E[0]-18}" y="${E[1]-6}" fill="${ax}" font-size="14" font-style="italic" font-family="serif">E</text>`
    }})
  );
}

function Svg25_2025Bjes(){
  const W=380,H=320,ox=150,oy=180,sc=28;
  const st="#94a3b8",ax="#e2e8f0",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-4;i<=8;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-3)}" x2="${tx(i)}" y2="${ty(5)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.18"/>`;
  }
  for(let j=-3;j<=5;j++){
    grid+=`<line x1="${tx(-4)}" y1="${ty(j)}" x2="${tx(8)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.18"/>`;
  }
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-2}" y="${ty(0)+16}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(0)+16}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(7.5)}" y="${ty(0)+14}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(4.8)}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`;
  const arrows=
    `<polygon points="${tx(8)},${ty(0)} ${tx(8)-7},${ty(0)-4} ${tx(8)-7},${ty(0)+4}" fill="${ax}"/>`+
    `<polygon points="${tx(0)},${ty(5)} ${tx(0)-4},${ty(5)+7} ${tx(0)+4},${ty(5)+7}" fill="${ax}"/>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:380},
    dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-4)}" y1="${ty(0)}" x2="${tx(8)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<line x1="${tx(0)}" y1="${ty(-3)}" x2="${tx(0)}" y2="${ty(5)}" stroke="${ax}" stroke-width="1.2"/>`+
      arrows+tk
    }
  });
}

function Svg22_2025Bjes(){
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

function Svg19_2025Bjes(){
  const txt="var(--text)"; const blue="#4a90d9"; const gold="#e9b446";
  const rows = [
    ["2","0 0 1 2 3 9"],
    ["3","0 0 4 4 5 5 7 7 7"],
    ["4","0 1 1 1 2 2 2 2 2 2 3 7 5"],
    ["5","1 2 3 5 7 8 8"]
  ];
  const rowH=32, stemW=40;
  const W=460, H=rowH*rows.length + 50;
  let html = `<text x="${W-12}" y="22" fill="${gold}" font-size="13" font-family="sans-serif" text-anchor="end" font-weight="bold">Legenda: 2 | 0 = 20</text>`;
  rows.forEach((r,i)=>{
    const y = 50 + i*rowH;
    // Alt background for rows
    if(i%2===0) html += `<rect x="0" y="${y-22}" width="${W}" height="${rowH}" fill="#0a1525" opacity="0.5"/>`;
    html += `<text x="${stemW}" y="${y}" fill="${blue}" font-size="16" font-family="monospace" text-anchor="end" font-weight="bold">${r[0]}</text>`;
    html += `<line x1="${stemW+8}" y1="${y-20}" x2="${stemW+8}" y2="${y+6}" stroke="${gold}" stroke-width="1.6"/>`;
    html += `<text x="${stemW+16}" y="${y}" fill="${txt}" font-size="15" font-family="monospace" letter-spacing="2">${r[1]}</text>`;
  });
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'12px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:html}})
  );
}

function Svg18_2025Bjes(){
  const W=420,H=400,ox=200,oy=290,sc=28;
  const st="#94a3b8",ax="#e2e8f0",bg="var(--bg,#060910)";
  const blue="#4a90d9", red="#e05252", gold="#e9b446", green="#50c878";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-5;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-1)}" x2="${tx(i)}" y2="${ty(9)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.18"/>`;
  }
  for(let j=-1;j<=9;j++){
    grid+=`<line x1="${tx(-5)}" y1="${ty(j)}" x2="${tx(5)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.18"/>`;
  }
  
  const vectors = [
    {name:"m", color: blue,  rep:[-3, 4],   vrh:[-1.5, -0.5], labelPos:[-3.5, 2.5]},
    {name:"n", color: green, rep:[-1.5, -0.5], vrh:[-3, 7],    labelPos:[-2.5, 4]},
    {name:"p", color: gold,  rep:[1, -0.5], vrh:[2.5, 7],     labelPos:[1.3, 4]},
    {name:"r", color: red,   rep:[3, 4],    vrh:[1.5, -0.5],  labelPos:[3.2, 2.5]}
  ];
  
  let defs = `<defs>`;
  vectors.forEach(v => {
    defs += `<marker id="arrbj_${v.name}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="${v.color}"/></marker>`;
  });
  defs += `</defs>`;
  
  let vecs = "";
  vectors.forEach(v => {
    vecs += `<line x1="${tx(v.rep[0])}" y1="${ty(v.rep[1])}" x2="${tx(v.vrh[0])}" y2="${ty(v.vrh[1])}" stroke="${v.color}" stroke-width="2.4" marker-end="url(#arrbj_${v.name})"/>`;
    vecs += `<text x="${tx(v.labelPos[0])}" y="${ty(v.labelPos[1])}" fill="${v.color}" font-size="14" font-style="italic" font-family="Georgia,serif" font-weight="bold">${v.name}</text>`;
  });
  
  // Axes
  const axes = 
    `<line x1="${tx(-5)-5}" y1="${ty(0)}" x2="${tx(5)+10}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.4"/>`+
    `<line x1="${tx(0)}" y1="${ty(9)+5}" x2="${tx(0)}" y2="${ty(-1)-5}" stroke="${ax}" stroke-width="1.4"/>`+
    `<polygon points="${tx(5)+10},${ty(0)} ${tx(5)+4},${ty(0)-4} ${tx(5)+4},${ty(0)+4}" fill="${ax}"/>`+
    `<polygon points="${tx(0)},${ty(9)+5} ${tx(0)-4},${ty(9)+12} ${tx(0)+4},${ty(9)+12}" fill="${ax}"/>`+
    `<text x="${tx(5)+15}" y="${ty(0)+5}" fill="${ax}" font-size="14" font-style="italic" font-family="Georgia,serif">x</text>`+
    `<text x="${tx(0)+8}" y="${ty(9)+5}" fill="${ax}" font-size="14" font-style="italic" font-family="Georgia,serif">y</text>`+
    `<text x="${tx(0)-12}" y="${ty(0)+16}" fill="${st}" font-size="12" font-family="Georgia,serif">0</text>`+
    `<text x="${tx(1)-3}" y="${ty(0)+16}" fill="${st}" font-size="11" font-family="Georgia,serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+4}" fill="${st}" font-size="11" font-family="Georgia,serif">1</text>`;
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",
    style:{display:'block',margin:'12px auto',maxWidth:420},
    dangerouslySetInnerHTML:{__html: defs + grid + axes + vecs}
  });
}

function Svg17_2025Bjes(){
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

function Svg11_2025Bjes(){
  const W=320,H=280,ox=120,oy=180,sc=36;
  const st="#94a3b8",ax="#e2e8f0",cu="#4a90d9",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-2;i<=4;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-3)}" x2="${tx(i)}" y2="${ty(4)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  for(let j=-3;j<=4;j++){
    grid+=`<line x1="${tx(-2)}" y1="${ty(j)}" x2="${tx(4)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.5" stroke-dasharray="2 6" opacity="0.2"/>`;
  }
  // Parabola g(x) = -2(x-1)² + 3
  let pts=[];
  for(let xi=-0.3;xi<=2.5;xi+=0.05){
    const yi=-2*(xi-1)*(xi-1)+3;
    if(yi>-3.2) pts.push([tx(xi),ty(yi)]);
  }
  const path=`M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p=>'L '+p[0]+' '+p[1]).join(' ')}`;
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<text x="${tx(1)-2}" y="${ty(0)+16}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+4}" fill="${ax}" font-size="12" font-family="serif">1</text>`+
    `<text x="${tx(0)-12}" y="${ty(0)+16}" fill="${ax}" font-size="12" font-family="serif">0</text>`+
    `<text x="${tx(3.7)}" y="${ty(0)+16}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+6}" y="${ty(4)-2}" fill="${ax}" font-size="13" font-style="italic" font-family="serif">y</text>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-2)}" y1="${ty(0)}" x2="${tx(3.8)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<line x1="${tx(0)}" y1="${ty(-3)}" x2="${tx(0)}" y2="${ty(4)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<polygon points="${tx(3.8)},${ty(0)} ${tx(3.8)-6},${ty(0)-3} ${tx(3.8)-6},${ty(0)+3}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(4)} ${tx(0)-3},${ty(4)+6} ${tx(0)+3},${ty(4)+6}" fill="${ax}"/>`+
      `<path d="${path}" stroke="${cu}" stroke-width="2.2" fill="none"/>`+
      tk
    }})
  );
}

export const qs = [
  {
    id:1,
    type:"mc",warn:"Pazi: ℚ = razlomci; iracionalni (√2, π…) NE pripadaju; provjeri pojednostavljuju li se korijeni.",
    topic:"br",
    points:1,
    q:"Koji od navedenih brojeva ne pripada skupu racionalnih brojeva?",
    opts:["−5","0","√2","4,8"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Racionalan broj može se zapisati kao razlomak [FRAC:p|q] (p ∈ ℤ, q ∈ ℕ, q ≠ 0). Provjeravamo svaki broj."},{txt:"A: −5 = [FRAC:−5|1] → racionalan (svaki cijeli broj je racionalan)."},{txt:"B: 0 = [FRAC:0|1] → racionalan."},{txt:"D: 4,8 = [FRAC:48|10] = [FRAC:24|5] → racionalan (konačan decimalan zapis uvijek je racionalan)."},{txt:"C: √2 ≈ 1,41421356... — decimalan zapis beskonačan i NEPERIODIČAN. Po klasičnom dokazu (svrsishodom): √2 NIJE racionalan."},{txt:"Točan odgovor: C — √2.",note:"odgovor",final:true},{txt:"Provjera dokazom: pretpostavi √2 = [FRAC:p|q] (skraćeni razlomak). Tada 2q² = p² → p paran → p = 2k → 2q² = 4k² → q² = 2k² → q paran. Ali tada [FRAC:p|q] nije skraćeni — kontradikcija. ⟹ √2 ∉ ℚ ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, D — svi imaju konačan ili periodičan decimalan zapis → racionalni. Samo C ima beskonačan neperiodičan zapis.",note:"diagnostika",final:true},{txt:"Postupak: 1) za svaki broj pokušaj ga zapisati kao razlomak [FRAC:p|q]. 2) ako uspijevaš — racionalan. 3) ako ne — provjeri decimalan zapis (beskonačan + neperiodičan = iracionalan).",note:"postupak",final:true},{txt:"Intuicija: korijen iz prirodnog broja je iracionalan AKO broj nije potpun kvadrat (1, 4, 9, 16, 25, ...). 2 nije potpun kvadrat → √2 iracionalan.",note:"intuicija",final:true}],
    why:["Pravilo: ℚ = { [FRAC:p|q] : p ∈ ℤ, q ∈ ℕ }. Klasičan teorem: √n iracionalan ⟺ n nije potpun kvadrat prirodnog broja.","Postupak: 1) za svaki broj pokušaj ga zapisati kao razlomak [FRAC:p|q]. 2) ako uspijevaš — racionalan. 3) ako ne — provjeri decimalan zapis (beskonačan + neperiodičan = iracionalan).","Intuicija: racionalni brojevi imaju \"lijepe\" decimalne zapise (konačni ili periodičnih); iracionalni \"ružne\" (beskonačni, bez ponavljanja).","Česta greška 1: smatrati svaki decimalan broj racionalnim. 0,101001000100001... ima konačno decimala između 1-ica koje stalno rastu — beskonačan, neperiodičan → IRACIONALAN.","Česta greška 2: misliti da √n uvijek je iracionalan. √4 = 2 ∈ ℕ (racionalan); pažljivo provjeri je li n potpun kvadrat.","Alt metoda — kontradikcija: pretpostavi suprotno (√2 racionalan), izvedi proturječje (parnost p i q istovremeno) → dokaz iracionalnosti.","Provjera: 4,8 = 4 + 0,8 = 4 + [FRAC:8|10] = [FRAC:48|10] = [FRAC:24|5] — eksplicitno racionalan; sve 3 osim C su trivijalno racionalne."]
  },
  {
    id:2,
    type:"mc",warn:"Pazi: pažljivo pročitaj uvjet (djeljivost/raspon); broj je oblika 2_4.",
    topic:"br",
    points:1,
    q:"Znamenka stotica nekoga troznamenkastog broja je dva, a znamenka jedinica četiri. Koliko može iznositi znamenka desetica toga broja ako je on djeljiv sa šest?",
    opts:["2","4","6","8"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Broj ima oblik 2d4 (d = znamenka desetica, nepoznata)."},{txt:"Djeljiv sa 6 ⟺ djeljiv s 2 I s 3 (jer 6 = 2 · 3, prosti faktori)."},{txt:"Kriterij djeljivosti s 2: zadnja znamenka parna. Zadnja je 4 (parna) → uvjet zadovoljen za bilo koje d."},{txt:"Kriterij djeljivosti s 3: zbroj znamenki djeljiv s 3. Zbroj = 2 + d + 4 = 6 + d."},{txt:"6 + d djeljivo s 3 ⟺ d djeljiv s 3 ⟺ d ∈ {0, 3, 6, 9}."},{txt:"Od ponuđenih opcija (2, 4, 6, 8) jedini iz skupa {0, 3, 6, 9} je 6."},{txt:"Točan odgovor: C — d = 6.",note:"odgovor",final:true},{txt:"Provjera: broj 264; 264 ÷ 6 = 44 (cijeli broj) ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 224 ÷ 6 = 37,33 — nije cijelo; B) 244 ÷ 6 = 40,67 — nije cijelo; D) 284 ÷ 6 = 47,33 — nije cijelo. Samo C daje cijeli kvocijent.",note:"diagnostika",final:true},{txt:"Postupak: 1) rastavi djelitelja na proste faktore (6 = 2 · 3). 2) primijeni kriterije djeljivosti za svaki faktor. 3) sjecište skupova rješenja je traženi skup.",note:"postupak",final:true},{txt:"Intuicija: 6 = 2 · 3 = mali umnožak prostih brojeva; djeljivost se reducira na djeljivost komponentama (2 i 3).",note:"intuicija",final:true}],
    why:["Pravilo: ako je n = p₁ · p₂ · ... · pₖ rastav na proste faktore i (p_i, p_j) = 1, onda x | n ⟺ x djeljiv sa svakim p_i. Za 6: x | 6 ⟺ x | 2 I x | 3.","Postupak: 1) rastavi djelitelja na proste faktore (6 = 2 · 3). 2) primijeni kriterije djeljivosti za svaki faktor. 3) sjecište skupova rješenja je traženi skup.","Intuicija: djeljivost sa 6 = djeljivost s 2 (paran) + djeljivost s 3 (zbroj znamenki djeljiv s 3). Oba uvjeta paralelno.","Česta greška 1: provjeriti samo jedan kriterij (npr. samo djeljivost s 3). Rezultat: d ∈ {0, 3, 6, 9}, ali tada bi 234 (d=3) bilo OK — ali 234 nije djeljivo s 6 jer je već provjeren paran (4 je paran).","Česta greška 2: koristiti kriterij djeljivosti s 9 umjesto s 3. To je sličan kriterij (zbroj znamenki djeljiv s 9), ali strožiji — daje d = 3 (jer 2+3+4 = 9 ÷ 9), pa bi misao bila točan odgovor je d = 3, ali to nije među ponuđenima u oblji formaciji.","Alt metoda: testiraj svaki ponuđeni odgovor. 224/6 ≈ 37,33; 244/6 ≈ 40,67; 264/6 = 44 ✓; 284/6 ≈ 47,33. Samo 264 daje cijeli broj.","Provjera: zbroj znamenki 2+6+4 = 12 = 3·4 djeljiv s 3 ✓; zadnja znamenka 4 (parna) ✓ → 264 djeljivo s 6 ✓."]
  },
  {
    id:3,
    type:"mc",warn:"Pazi: 5ⁿ + 5ⁿ = 2·5ⁿ (zbrajaš dva ista), NIJE 5^(2n) ni 25ⁿ.",
    topic:"al",
    points:1,
    q:"Čemu je od navedenoga jednako 5ⁿ + 5ⁿ za svaki prirodni broj n?",
    opts:["2 · 5ⁿ","5 · 5ⁿ","5²ⁿ","10²ⁿ"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Zbrajanje istih izraza: x + x = 2x (osnovna distributivnost po x)."},{txt:"Primijeni s x = 5ⁿ: 5ⁿ + 5ⁿ = 2 · 5ⁿ."},{txt:"Provjera distraktora: B) 5 · 5ⁿ = 5^(n+1) ≠ 2 · 5ⁿ (osim za specifičan n; za n = 1 dali bi 25 ≠ 10)."},{txt:"C) 5²ⁿ = (5²)ⁿ = 25ⁿ ≠ 2 · 5ⁿ (eksponencijalno različito)."},{txt:"D) 10²ⁿ = 100ⁿ — eksponencijalno najviše različito."},{txt:"Točan odgovor: A — 2 · 5ⁿ.",note:"odgovor",final:true},{txt:"Provjera za n = 1: 5¹ + 5¹ = 5 + 5 = 10 = 2 · 5 = 2 · 5¹ ✓.",note:"verifikacija",final:true},{txt:"Distraktori potječu iz miješanja zbrajanja s množenjem potencija: 5 · 5ⁿ = 5^(n+1) (množenje istih baza), 5²ⁿ (pomnožen eksponent).",note:"diagnostika",final:true},{txt:"Intuicija: \"dvije kruške + dvije kruške = četiri kruške\" — broj (eksponent) ostaje isti, mijenja se KOEFICIJENT.",note:"intuicija",final:true},{txt:"Postupak: 1) prepoznaj da su izrazi identični (5ⁿ = 5ⁿ). 2) primijeni x + x = 2x. 3) provjeri da nije slučaj množenja (gdje vrijede pravila potencija).",note:"postupak",final:true}],
    why:["Pravilo: x + x = 2x (distributivnost). Za potencije zbrajanje NE mijenja eksponent — samo koeficijent. To se razlikuje od MNOŽENJA (gdje se eksponenti zbrajaju): aᵐ · aⁿ = a^(m+n).","Postupak: 1) prepoznaj da su izrazi identični (5ⁿ = 5ⁿ). 2) primijeni x + x = 2x. 3) provjeri da nije slučaj množenja (gdje vrijede pravila potencija).","Intuicija: ZBROJ je broj objekata; MNOŽENJE mijenja \"razmjer\". Dvije iste potencije zbrojene = dvije puta ta potencija.","Česta greška 1: zbrojiti eksponente: 5ⁿ + 5ⁿ ≠ 5²ⁿ. Eksponenti se zbrajaju kod MNOŽENJA istih baza, ne kod zbrajanja brojeva.","Česta greška 2: pomnožiti baze: 5ⁿ + 5ⁿ ≠ 10ⁿ. Iako je 5 + 5 = 10, to ne vrijedi za potencije (5ⁿ + 5ⁿ je 2 · 5ⁿ, ne 10ⁿ koje je (2·5)ⁿ = 2ⁿ · 5ⁿ).","Alt metoda — izlučivanje: 5ⁿ + 5ⁿ = 5ⁿ · (1 + 1) = 5ⁿ · 2 = 2 · 5ⁿ ✓ (faktorizacija zajedničkog faktora).","Provjera za n = 2: 25 + 25 = 50 = 2 · 25 = 2 · 5² ✓."]
  },
  {
    id:4,
    type:"mc",warn:"Pazi: negativan eksponent → recipročno, razlomljeni → korijen: a^(−2/3) = 1/∛(a²).",
    topic:"al",
    points:1,
    q:"Čemu je od navedenoga jednako a⁻²ᐟ³ za svaki a ∈ ℝ ∖ {0}?",
    opts:["√(a³)","∛(a²)","1/√(a³)","1/∛(a²)"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Pravilo negativnog eksponenta: a⁻ⁿ = [FRAC:1|aⁿ] (premjesti u nazivnik, predznak pozitivan)."},{txt:"Primijeni: a⁻²ᐟ³ = [FRAC:1|a²ᐟ³]."},{txt:"Pravilo racionalne potencije: a^([FRAC:p|q]) = ⁿ√(aᵖ) gdje je n = q. Dakle a²ᐟ³ = ∛(a²)."},{txt:"Spoji: a⁻²ᐟ³ = [FRAC:1|∛(a²)]."},{txt:"Provjera distraktora: A) √(a³) = a^(³⁄²) (krivi eksponent); B) ∛(a²) = a²ᐟ³ (pozitivan); C) [FRAC:1|√(a³)] = a^(⁻³⁄²) (krivi nazivnik)."},{txt:"Točan odgovor: D — [FRAC:1|∛(a²)].",note:"odgovor",final:true},{txt:"Provjera za a = 8: 8⁻²ᐟ³ = [FRAC:1|8²ᐟ³] = [FRAC:1|∛64] = [FRAC:1|4]. Direktno: ∛8 = 2, kvadrat = 4, [FRAC:1|4] ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A i C imaju eksponente ³⁄² ili −³⁄² (zamijenjeni brojnik i nazivnik u eksponentu); B nema negativan eksponent (zaboravljen recipročni dio).",note:"diagnostika",final:true},{txt:"Intuicija: minus u eksponentu → \"okreni\" (recipročno); razlomak u eksponentu → \"korijen\". Oboje istovremeno.",note:"intuicija",final:true},{txt:"Postupak: 1) izvuci negativni predznak — premjesti u nazivnik. 2) razlomljeni eksponent pretvori u korijen (nazivnik = stupanj korijena, brojnik = potencija pod korijenom).",note:"postupak",final:true}],
    why:["Pravila potencija: a⁻ⁿ = [FRAC:1|aⁿ] (negativni eksponent); a^([FRAC:p|q]) = ⁿ√(aᵖ) gdje je n = q (racionalna potencija je korijen).","Postupak: 1) izvuci negativni predznak — premjesti u nazivnik. 2) razlomljeni eksponent pretvori u korijen (nazivnik = stupanj korijena, brojnik = potencija pod korijenom).","Intuicija: a⁻²ᐟ³ pita \"broj koji uzdignut na (−2/3) daje a\"; ekvivalentno \"broj koji uzdignut na (2/3) daje 1/a\"; ekvivalentno [FRAC:1|broj koji uzdignut na 2/3 daje a].","Česta greška 1: zamijeniti brojnik i nazivnik u eksponentu. a^([FRAC:2|3]) je ∛(a²) (kubni korijen kvadrata), NE √(a³) (kvadratni korijen kuba). Različite vrijednosti.","Česta greška 2: zaboraviti recipročni dio. a⁻²ᐟ³ = ∛(a²) (krivo) bi vrijedilo samo za a²ᐟ³, bez minusa.","Alt metoda — eksplicitno za a > 0: a⁻²ᐟ³ = (a⁻¹)²ᐟ³ = ([FRAC:1|a])²ᐟ³ = ∛(([FRAC:1|a])²) = ∛([FRAC:1|a²]) = [FRAC:1|∛(a²)] ✓.","Provjera za a = 27: 27⁻²ᐟ³ = [FRAC:1|27²ᐟ³] = [FRAC:1|∛(27²)] = [FRAC:1|∛729] = [FRAC:1|9]. Direktno: 27^(¹⁄³) = 3, na 2 = 9, 1/9 ✓."]
  },
  {
    id:5,
    type:"mc",warn:"Pazi: svedi na zajednički nazivnik x → (10x − (2 + x))/x; pa sredi brojnik.",
    topic:"al",
    points:1,
    q:"Čemu je od navedenoga jednako 10 − (2+x)/x za svaki x ∈ ℝ ∖ {0}?",
    opts:["(9x − 2)/x","(9x + 2)/x","(8 − x)/x","(8 + x)/x"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Cilj: izraziti 10 − [FRAC:2+x|x] kao jedan razlomak."},{txt:"Pretvori 10 u razlomak s nazivnikom x: 10 = [FRAC:10x|x]."},{txt:"Oduzmi razlomke s istim nazivnikom: [FRAC:10x|x] − [FRAC:2+x|x] = [FRAC:10x − (2+x)|x]."},{txt:"Pojednostavi brojnik: 10x − (2 + x) = 10x − 2 − x = 9x − 2."},{txt:"Rezultat: [FRAC:9x − 2|x]."},{txt:"Točan odgovor: A.",note:"odgovor",final:true},{txt:"Provjera za x = 1: lijevo 10 − (2+1)/1 = 10 − 3 = 7; desno (9·1 − 2)/1 = 7 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B) (9x + 2)/x bi vrijedilo ako se zaboravi zagrada (oduzimanje samo 2, ne (2+x)); C) (8 − x)/x — pogrešno preformuliranje; D) (8 + x)/x — krivi predznaci.",note:"diagnostika",final:true},{txt:"Postupak: 1) pretvori sve dijelove u razlomke s istim nazivnikom. 2) oduzmi brojnike (čuvajući predznake). 3) pojednostavi izraz u brojniku.",note:"postupak",final:true},{txt:"Intuicija: razlomci se oduzimaju samo kad imaju ISTI nazivnik — prvo pretvori cijeli broj u razlomak s nazivnikom x.",note:"intuicija",final:true}],
    why:["Pravilo: a − [FRAC:b|c] = [FRAC:ac|c] − [FRAC:b|c] = [FRAC:ac − b|c] (jednake nazivnike — pretvori cijeli broj množenjem s nazivnikom u oba.","Postupak: 1) pretvori sve dijelove u razlomke s istim nazivnikom. 2) oduzmi brojnike (čuvajući predznake). 3) pojednostavi izraz u brojniku.","Intuicija: oduzimanje cijelog broja od razlomka = \"vrati cijeli broj u oblik razlomka\" pa onda oduzmi.","Česta greška 1: zaboraviti zagradu kod oduzimanja brojnika. 10x − 2 + x = 11x − 2 (krivo, predznak +x umjesto −x). Mora biti 10x − 2 − x = 9x − 2.","Česta greška 2: pisati 10 − [FRAC:2+x|x] = [FRAC:10 − 2 − x|x] = [FRAC:8 − x|x] (krivo; zaboravio pretvoriti 10 u 10x/x).","Alt metoda — direktno: 10 − [FRAC:2+x|x] = 10 − [FRAC:2|x] − [FRAC:x|x] = 10 − [FRAC:2|x] − 1 = 9 − [FRAC:2|x] = [FRAC:9x − 2|x] ✓.","Provjera za x = 2: lijevo 10 − (2+2)/2 = 10 − 2 = 8; desno (9·2 − 2)/2 = 16/2 = 8 ✓."]
  },
  {
    id:6,
    type:"mc",warn:"Pazi: 20,40 je 85 % originala → original = 20,40/0,85 (ne dodaj 15 %).",
    topic:"br",
    points:1,
    q:"Cijena neke košulje nakon sniženja od 15 % iznosi 20,40 eura. Koliko je iznosila cijena te košulje prije sniženja?",
    opts:["25 eura","24 eura","23,46 eura","20,55 eura"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Označi x = prvobitna cijena. Sniženje 15 % znači da je nova cijena 100 % − 15 % = 85 % prvobitne."},{txt:"Jednadžba: 0,85 · x = 20,40."},{txt:"Riješi za x: x = [FRAC:20,40|0,85]."},{txt:"Izračun: [FRAC:20,40|0,85] = [FRAC:2040|85] = 24 € (provjera: 85 · 24 = 2040 ✓)."},{txt:"Točan odgovor: B — 24 €.",note:"odgovor",final:true},{txt:"Provjera: 24 · 0,85 = 20,40 ✓ (vraćanje na pocetnu cijenu).",note:"verifikacija",final:true},{txt:"Distraktori: A) 25 · 0,85 = 21,25 ≠ 20,40; C) 23,46 · 0,85 ≈ 19,94 ≠ 20,40; D) 20,55 · 0,85 ≈ 17,47 ≠ 20,40. Samo B ispravno.",note:"diagnostika",final:true},{txt:"Intuicija: sniženje \"oduzima\" postotak — preostaje (100 − p)%; \"vraćanje\" prvobitne cijene = DIJELJENJE s tim faktorom (ne MNOŽENJE).",note:"intuicija",final:true},{txt:"Postupak: 1) odredi faktor preostatka (npr. 0,85 za 15 % sniženje). 2) novu cijenu podijeli s faktorom da dobiješ staru. 3) provjera množenjem.",note:"postupak",final:true}],
    why:["Pravilo: nakon sniženja od p % nova cijena = stara · (1 − [FRAC:p|100]). Obratno: stara = nova / (1 − [FRAC:p|100]).","Postupak: 1) odredi faktor preostatka (npr. 0,85 za 15 % sniženje). 2) novu cijenu podijeli s faktorom da dobiješ staru. 3) provjera množenjem.","Intuicija: ako je nešto \"smanjeno za 15 %\", trenutna cijena je samo 85 % originalne — da vratimo natrag, dijelimo s 0,85 (uvećamo).","Česta greška 1: dodavanje 15 % na trenutnu cijenu. 20,40 · 1,15 = 23,46 (opcija C) — TO bi bila cijena POSLIJE dodavanja 15 %, ne PRVOBITNA cijena.","Česta greška 2: koristiti faktor 1,15 (umjesto 0,85) misleći da \"dodaje 15 %\". Rezultat 20,40 / 1,15 ≈ 17,74 (još daljnje od 24).","Alt metoda — kroz proporciju: 100 % : x = 85 % : 20,40 → x = [FRAC:100 · 20,40|85] = [FRAC:2040|85] = 24 ✓.","Provjera dimenzionalno: 15 % od 24 = 3,60; 24 − 3,60 = 20,40 ✓ — sniženje točno odgovara."]
  },
  {
    id:7,
    type:"mc",warn:"Pazi: više cijevi → KRAĆE vrijeme (obrnuta proporcija); pazi na uvjet zadatka.",
    topic:"om",
    points:1,
    q:"Gradski bazen može se puniti vodom s najviše pet cijevi kroz koje za isto vrijeme proteče jednaka količina vode. Bazen će biti pun ako ga svih pet cijevi puni 12 sati. Za koliko bi sati bazen bio pun ako ga pune samo tri cijevi?",
    opts:["15","18","20","22"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Količina vode za napuniti bazen = konstanta. Količina = (broj cijevi) · (protok po cijevi po satu) · (vrijeme)."},{txt:"Pri konstantnom protoku po cijevi vrijedi: (broj cijevi) · (vrijeme) = konstanta — OBRNUTA PROPORCIONALNOST."},{txt:"Postavi jednadžbu: 5 cijevi · 12 sati = 3 cijevi · t."},{txt:"Riješi za t: t = [FRAC:5 · 12|3] = [FRAC:60|3] = 20 sati."},{txt:"Točan odgovor: C — 20 sati.",note:"odgovor",final:true},{txt:"Provjera: 5 cijevi · 12 h = 60 cijev-sati; 3 cijevi · 20 h = 60 cijev-sati ✓ (jednak \"rad\" potreban za napuniti bazen).",note:"verifikacija",final:true},{txt:"Distraktori: A) 15 = 12 + 3 (krivo zbrajanje); B) 18 (možda 12 · 1,5, krivi koeficijent); D) 22 (proizvoljan broj).",note:"diagnostika",final:true},{txt:"Postupak: 1) prepoznaj obrnutu proporcionalnost. 2) postavi a₁ · b₁ = a₂ · b₂. 3) riješi za nepoznatu.",note:"postupak",final:true},{txt:"Intuicija: ako uklonimo 2 cijevi, ostale 3 moraju raditi DUŽE da napune isti bazen. Više cijevi = brže; manje cijevi = sporije (obrnuto).",note:"intuicija",final:true}],
    why:["Pravilo: obrnuta proporcionalnost a · b = k (konstantno); kad se a smanji, b mora rasti i obratno. Ovdje: (cijevi) · (vrijeme) = konst.","Postupak: 1) prepoznaj obrnutu proporcionalnost. 2) postavi a₁ · b₁ = a₂ · b₂. 3) riješi za nepoznatu.","Intuicija: zamisli \"rad\" kao broj cijev-sati — fiksna količina za fiksni volumen. Različite kombinacije cijevi × vremena daju isti rad.","Česta greška 1: PRAVA proporcionalnost — pisati [FRAC:5|12] = [FRAC:3|t] (kao linearno). Dat će t = [FRAC:3 · 12|5] = 7,2 sata — KRIVO (jer kod manje cijevi vrijeme bi se POVEĆAVA, ne smanjivati).","Česta greška 2: zbrajanje umjesto množenja: 5 + 12 = 3 + t → t = 14 (besmisleno; jedinice se ne podudaraju).","Alt metoda — pojedinačni protok: 5 cijevi za 12 h → svaka cijev za 60 h (po 1 cijev). 3 cijevi: t = [FRAC:60|3] = 20 h ✓.","Provjera: ako bi imali samo 1 cijev (t = 60 h, što je vrlo dugo); ako svih 5 (t = 12 h, najbrže) → razumno spaja brojeve cijevi s vremenima."]
  },
  {
    id:8,
    type:"mc",warn:"Pazi: riješi svaku nejednadžbu pa uzmi PRESJEK rješenja.",
    topic:"neje",
    points:1,
    q:"Koji je interval skup svih rješenja sustava nejednadžbi { 3 − x ≥ x/2 ;  x + 1 > 0 } ?",
    opts:["⟨−∞, −2]","⟨−2, −1]","⟨−1, 2]","⟨2, ∞⟩"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Riješavamo svaku nejednadžbu odvojeno. Prva: 3 − x ≥ [FRAC:x|2]."},{txt:"Pomnoži obje strane s 2 (pozitivan, smjer ostaje): 6 − 2x ≥ x."},{txt:"Premjesti: 6 ≥ 3x → x ≤ 2. Skup rješenja prve nejednadžbe: ⟨−∞, 2]."},{txt:"Druga: x + 1 > 0 → x > −1. Skup rješenja druge: ⟨−1, ∞⟩."},{txt:"Sustav: PRESJEK dvaju skupova ⟨−∞, 2] ∩ ⟨−1, ∞⟩ = ⟨−1, 2]."},{txt:"Točan odgovor: C — ⟨−1, 2].",note:"odgovor",final:true},{txt:"Provjera s x = 0: 3 − 0 = 3 ≥ 0/2 = 0 ✓; 0 + 1 = 1 > 0 ✓. Provjera s x = 2 (granica): 3 − 2 = 1 ≥ 2/2 = 1 ✓ (jednakost); 2 + 1 = 3 > 0 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) ⟨−∞, −2] krši x > −1; B) ⟨−2, −1] krši x > −1 (jer x = −1 je rub); D) ⟨2, ∞⟩ krši x ≤ 2. Samo C zadovoljava oba.",note:"diagnostika",final:true},{txt:"Postupak: 1) riješi svaku nejednadžbu zasebno. 2) zapiši skup rješenja u intervalnom obliku. 3) presjeci ih (zajednički dio).",note:"postupak",final:true},{txt:"Intuicija: sustav nejednadžbi traži x koji ZAJEDNO zadovoljavaju oba uvjeta — geometrijski preklop dva skupa na brojevnom pravcu.",note:"intuicija",final:true}],
    why:["Pravilo: rješenje sustava nejednadžbi je PRESJEK skupova rješenja pojedinih nejednadžbi. Pri množenju s NEGATIVNIM smjer nejednakosti se OKREĆE.","Postupak: 1) riješi svaku nejednadžbu zasebno. 2) zapiši skup rješenja u intervalnom obliku. 3) presjeci ih (zajednički dio).","Intuicija: AND uvjeti — oba se moraju paralelno zadovoljiti, kao \"preklop\" na Vennovom dijagramu.","Česta greška 1: UNIJA umjesto presjeka. To bi dalo ⟨−∞, 2] ∪ ⟨−1, ∞⟩ = ℝ (svaki x zadovoljava barem jedan uvjet — što nije isto što i oba).","Česta greška 2: zaboraviti otvoreni rub kod strogog \">\": x > −1 znači x = −1 NIJE u skupu (otvoreni rub ⟨), a x ≤ 2 znači x = 2 JEST u skupu (zatvoreni rub ]).","Alt metoda — testiranje rubova: provjera x = −1 (rub) → 3 − (−1) = 4 ≥ −0,5 ✓, ali −1 + 1 = 0 > 0 ✗ (jednakost, ne strogo). Zato −1 isključen.","Provjera s x = 1 (sredina): 3 − 1 = 2 ≥ 0,5 ✓; 1 + 1 = 2 > 0 ✓ — zadovoljava oba."]
  },
  {
    id:9,
    type:"mc",warn:"Pazi: log₇a = c ⇔ 7ᶜ = a (definicija logaritma).",
    topic:"log",
    points:1,
    q:"Što od navedenoga vrijedi ako je log₇ a = c, pri čemu je a > 0?",
    opts:["a⁷ = c","a^c = 7","7^a = c","7^c = a"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Definicija logaritma: log_b(x) = y ⟺ b^y = x (uz uvjete b > 0, b ≠ 1, x > 0)."},{txt:"Primijeni s b = 7, x = a, y = c: log₇(a) = c ⟺ 7^c = a."},{txt:"Točan odgovor je D: 7^c = a."},{txt:"Provjera distraktora: A) a⁷ = c (zamijenjeni a i c uloge — uloga \"rezultata\" je obrnuta); B) a^c = 7 (zamijenjena baza s argumentom); C) 7^a = c (zamijenjeni eksponent i rezultat)."},{txt:"Točan odgovor: D — 7^c = a.",note:"odgovor",final:true},{txt:"Provjera konkretnim brojevima: log₇(49) = 2 (jer 7² = 49) → c = 2 kad je a = 49; provjeri 7^c = 7² = 49 = a ✓.",note:"verifikacija",final:true},{txt:"Distraktori potječu iz različitih zamjena uloga BAZE, EKSPONENTA i REZULTATA u jednadžbi — sva tri pojma su povezana ali distinktna.",note:"diagnostika",final:true},{txt:"Intuicija: log pita \"KOJOM POTENCIJOM treba podignuti bazu da dobijem argument?\" Ekvivalent: baza^(logaritam) = argument.",note:"intuicija",final:true},{txt:"Postupak: 1) prepoznaj koja je BAZA (broj koji se podiže), koji je ARGUMENT (broj iz kojeg se vadi log) i koji je REZULTAT (eksponent). 2) prevedi u eksponencijalan oblik.",note:"postupak",final:true}],
    why:["Pravilo (definicija logaritma): log_b(x) = y ⟺ b^y = x. Ove dvije jednadžbe su EKVIVALENTNE — ako vrijedi jedna, vrijedi i druga.","Postupak: 1) prepoznaj koja je BAZA (broj koji se podiže), koji je ARGUMENT (broj iz kojeg se vadi log) i koji je REZULTAT (eksponent). 2) prevedi u eksponencijalan oblik.","Intuicija: log_b je inverzna operacija od potenciranja s bazom b. Slično: korijen je inverz potencije, dijeljenje je inverz množenja.","Česta greška 1: napisati b^x = y umjesto b^y = x — zamijeniti uloge argumenta i rezultata. Pažljivo s redoslijedom u definiciji.","Česta greška 2: pomnožiti bazu s argumentom (zamijeniti za poziciju u eksponentu) — npr. pisati 7·a = c. Logaritamska veza nije linearna nego eksponencijalna.","Alt metoda — kroz \"promjenu baze\": log₇(a) = [FRAC:ln a|ln 7] = c → ln a = c · ln 7 → a = e^(c·ln 7) = 7^c ✓.","Provjera za a = 1: log₇(1) = 0 (jer 7⁰ = 1) → c = 0, a = 1, 7^c = 7⁰ = 1 = a ✓; za a = 7: log₇(7) = 1, c = 1, 7^c = 7 = a ✓."]
  },
  {
    id:10,
    type:"mc",warn:"Pazi: pozitivan nagib (raste) I nultočka > 0 → odsječak b je negativan.",
    topic:"lin",
    points:1,
    q:"Graf koje od navedenih linearnih funkcija ima pozitivnu nultočku i pozitivan koeficijent smjera (nagib)?",
    opts:["f(x) = 2x − 3","f(x) = 2x + 3","f(x) = −2x − 3","f(x) = −2x + 3"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Linearna funkcija f(x) = ax + b ima koeficijent smjera (nagib) a i slobodni član b. Nultočka: x₀ = −[FRAC:b|a]."},{txt:"Uvjet 1: pozitivan nagib → a > 0. Izbacuje C (a = −2) i D (a = −2). Ostaju A i B."},{txt:"Uvjet 2: pozitivna nultočka → −[FRAC:b|a] > 0. Pošto je a > 0, slijedi b < 0."},{txt:"A: b = −3 < 0 ✓; B: b = +3 > 0 ✗. Samo A ima oba uvjeta zadovoljena."},{txt:"Provjera nultočke za A: 2x − 3 = 0 → x = [FRAC:3|2] = 1,5 (pozitivna ✓)."},{txt:"Točan odgovor: A — f(x) = 2x − 3.",note:"odgovor",final:true},{txt:"Provjera: nagib +2 > 0 ✓; nultočka 1,5 > 0 ✓ → oba uvjeta.",note:"verifikacija",final:true},{txt:"Distraktori: B) nultočka −[FRAC:3|2] < 0 (slobodni član pozitivan); C) nagib negativan; D) nagib negativan.",note:"diagnostika",final:true},{txt:"Intuicija: za pozitivnu nultočku kad je nagib pozitivan, pravac mora \"krenuti iz negativnog dijela osi y i ići desno gore\" — što znači b < 0 i a > 0.",note:"intuicija",final:true},{txt:"Postupak: 1) prepoznaj a i b u svakoj opciji. 2) provjeri uvjet a > 0. 3) provjeri uvjet b < 0 (pošto a > 0 daje pozitivnu nultočku samo za b < 0).",note:"postupak",final:true}],
    why:["Pravilo: za f(x) = ax + b vrijedi nultočka x₀ = −[FRAC:b|a]; znak nultočke ovisi o znakovima a i b: pozitivna ⟺ a i b suprotnih predznaka.","Postupak: 1) prepoznaj a i b u svakoj opciji. 2) provjeri uvjet a > 0. 3) provjeri uvjet b < 0 (pošto a > 0 daje pozitivnu nultočku samo za b < 0).","Intuicija: pozitivan nagib = \"raste\"; ako siječe os y u negativnom dijelu (b < 0), mora doći do osi x (nultočka) u POZITIVNOM dijelu — graf prelazi iz dolje-lijevo u gore-desno.","Česta greška 1: misliti da pozitivan b daje pozitivnu nultočku — zapravo je obratno (kad je a > 0).","Česta greška 2: zaboraviti minus u formuli nultočke. Za f(x) = 2x − 3, b = −3, x₀ = −[FRAC:−3|2] = [FRAC:3|2] (POZITIVAN). Ako se zaboravi minus, dobije se x₀ = [FRAC:−3|2] (negativna) — krivi predznak.","Alt metoda — skiciranje: za pozitivan nagib + pozitivnu nultočku, graf mora ići od (0, b) (gdje je b negativan) do (x₀, 0) (gdje je x₀ pozitivan) — vidi A.","Provjera: B: f(x) = 2x + 3, nultočka x = −[FRAC:3|2] = −1,5 (NEGATIVNA) → ne zadovoljava drugi uvjet."]
  },
  {
    id:11,
    img:true,
    type:"mc",warn:"Pazi: očitaj nultočke, presjek s osi y i ponašanje grafa pa usporedi s pravilima.",
    topic:"kv",
    points:1,
    q:"Na slici je prikazan graf funkcije g. Koje je od navedenih pravila pravilo pridruživanja funkcije g?",
    opts:["g(x) = −2(x − 1)² + 3","g(x) = −2(x + 1)² − 3","g(x) = 2(x + 1)² + 3","g(x) = 2(x − 1)² − 3"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Tjemeni oblik kvadratne funkcije: g(x) = a(x − p)² + q, gdje je T(p, q) tjeme parabole, a vodeći koeficijent."},{txt:"Iz grafa: parabola otvorena PREMA DOLJE → vodeći koeficijent a < 0. Izbacuje C i D (a = +2)."},{txt:"Očitaj tjeme iz grafa: T(1, 3) — vrh parabole na pozitivnom dijelu obiju osi."},{txt:"Usporedi s preostalim opcijama: A) tjeme T(1, 3) ✓; B) tjeme T(−1, −3) ✗."},{txt:"Točan odgovor: A — g(x) = −2(x − 1)² + 3.",note:"odgovor",final:true},{txt:"Provjera u tjemenu: g(1) = −2 · (1 − 1)² + 3 = −2 · 0 + 3 = 3 ✓; provjera u drugoj točki (0, 1): g(0) = −2 · 1 + 3 = 1 ✓ (ako je (0, 1) na grafu).",note:"verifikacija",final:true},{txt:"Distraktori: B) tjeme (−1, −3) ne odgovara grafu; C) a = 2 i tjeme (−1, 3) — krivi smjer i položaj; D) a = 2 i tjeme (1, −3) — krivi smjer.",note:"diagnostika",final:true},{txt:"Postupak: 1) iz grafa odredi smjer otvora (znak a). 2) očitaj koordinate tjemena (p, q). 3) usporedi s opcijama — slovo (x − p) značava p pozitivan; (x + p) značava p negativan.",note:"postupak",final:true},{txt:"Intuicija: pomak (x − p) povlači tjeme udesno za p; + q povlači gore za q; negativan a okreće parabolu naopako.",note:"intuicija",final:true}],
    why:["Pravilo: tjemeni oblik f(x) = a(x − p)² + q ima tjeme T(p, q); znak a određuje otvor (a > 0 prema gore, a < 0 prema dolje); |a| određuje \"širinu\" parabole.","Postupak: 1) iz grafa odredi smjer otvora (znak a). 2) očitaj koordinate tjemena (p, q). 3) usporedi s opcijama — slovo (x − p) značava p pozitivan; (x + p) značava p negativan.","Intuicija: tjemeni oblik je \"kanonski\" — iz njega izravno čitaš vrh parabole. Sve transformacije su pomicanja (translacije).","Česta greška 1: pomiješati znak p. (x − 1)² ima tjeme u x = 1 (uvuci u zagradu i pretpostavi da je 0); (x + 1)² ima tjeme u x = −1.","Česta greška 2: zaboraviti predznak vodećeg koeficijenta. Otvor \"naopako\" je sigurni znak negativnog a.","Alt metoda — kroz nultočke: ako su nultočke vidljive na grafu, koristi f(x) = a(x − r₁)(x − r₂). Ali tjemeni oblik je elegantniji kad je tjeme jasno vidljivo.","Provjera s točkom (2, 1): g(2) = −2 · (2 − 1)² + 3 = −2 + 3 = 1 ✓; svaka točka na grafu mora zadovoljiti formulu."]
  },
  {
    id:12,
    type:"mc",warn:"Pazi: parna ⇔ simetrija oko OSI Y (f(−x) = f(x)).",
    topic:"funk",
    points:1,
    q:"Koja od navedenih tvrdnja vrijedi za graf svake parne funkcije?",
    opts:["Simetričan je s obzirom na ishodište koordinatnoga sustava.","Simetričan je s obzirom na pravac y = x.","Simetričan je s obzirom na os x.","Simetričan je s obzirom na os y."],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Definicija parne funkcije: f(−x) = f(x) za svaki x iz domene."},{txt:"Geometrijska interpretacija: točka (x, f(x)) i točka (−x, f(x)) obje su na grafu — imaju ISTU y-koordinatu, suprotne x-koordinate."},{txt:"Točka i njena refleksija oko osi y imaju upravo takve koordinate → graf parne funkcije je simetričan oko osi y."},{txt:"Provjera distraktora: A) simetrija oko ishodišta je svojstvo NEPARNIH funkcija (f(−x) = −f(x)); B) simetrija oko y = x karakterizira INVERZNE funkcije; C) simetrija oko osi x bi značila da je za svaku x: f(x) = −f(x), pa f(x) = 0 — samo NULA-FUNKCIJA."},{txt:"Točan odgovor: D — simetrija oko osi y.",note:"odgovor",final:true},{txt:"Provjera s primjerom: f(x) = x². f(−2) = 4 = f(2). Graf parabole y = x² je simetričan oko osi y ✓.",note:"verifikacija",final:true},{txt:"Distraktori potječu iz miješanja različitih tipova simetrije — svaki ima svoje matematičko značenje.",note:"diagnostika",final:true},{txt:"Intuicija: \"parna\" znači \"simetrična\" — kao zrcalo postavljeno na osi y. Preklopiš li sliku po osi y, parna funkcija se \"poklapa sama sa sobom\".",note:"intuicija",final:true},{txt:"Postupak: 1) provjeri f(−x) izračunavanjem (ako je formulom dana). 2) ako f(−x) = f(x) → parna. 3) ako f(−x) = −f(x) → neparna. 4) inače — niti jedno ni drugo.",note:"postupak",final:true}],
    why:["Pravilo: f parna ⟺ f(−x) = f(x) ∀x ∈ D(f) ⟺ graf simetričan oko osi y. f neparna ⟺ f(−x) = −f(x) ⟺ graf simetričan oko ishodišta (centralna simetrija).","Postupak: 1) provjeri f(−x) izračunavanjem (ako je formulom dana). 2) ako f(−x) = f(x) → parna. 3) ako f(−x) = −f(x) → neparna. 4) inače — niti jedno ni drugo.","Intuicija: predznak x se \"ne vidi\" — funkcija \"ne razlikuje\" negativni od pozitivnog x. Karakteristično za parabole y = x², kosinus y = cos(x), x⁴, |x|.","Česta greška 1: pomiješati parne (simetrija oko osi y) i neparne (simetrija oko ishodišta) funkcije. Klasične greška testovi: cos je parna, sin je neparna.","Česta greška 2: misliti da svaka simetrična funkcija je parna. Funkcija može biti simetrična oko nekog pravca x = a (ne nužno y-osi) — to nije parna funkcija u standardnom smislu.","Alt metoda — analitički provjeriti: za f(x) = x⁴ − 3x² + 5: f(−x) = (−x)⁴ − 3(−x)² + 5 = x⁴ − 3x² + 5 = f(x) → parna. Sve eksponente su parne.","Provjera: cos(−π/3) = cos(π/3) = 0,5 (parna); sin(−π/3) = −sin(π/3) (neparna). Standardni primjeri trigonometrije."]
  },
  {
    id:13,
    type:"mc",warn:"Pazi: q = a₃/a₂; pa a₁ = a₂/q.",
    topic:"niz",
    points:1,
    q:"Drugi i treći član geometrijskoga niza su a₂ = 11/4 i a₃ = 121/48. Koliko iznosi prvi član toga niza?",
    opts:["3","2","11/12","11/48"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Geometrijski niz: aₙ = a₁ · q^(n−1); kvocijent q = [FRAC:aₙ₊₁|aₙ] (konstantan)."},{txt:"Izračunaj q iz dva poznata člana: q = [FRAC:a₃|a₂] = [FRAC:121/48|11/4]."},{txt:"Dijeljenje razlomaka: [FRAC:121/48|11/4] = [FRAC:121|48] · [FRAC:4|11] = [FRAC:121 · 4|48 · 11] = [FRAC:484|528] = [FRAC:11|12]."},{txt:"Izračunaj a₁ iz a₂ i q: a₁ = [FRAC:a₂|q] = [FRAC:11/4|11/12] = [FRAC:11|4] · [FRAC:12|11] = [FRAC:11 · 12|4 · 11] = [FRAC:12|4] = 3."},{txt:"Točan odgovor: A — a₁ = 3.",note:"odgovor",final:true},{txt:"Provjera niza: a₁ = 3, q = [FRAC:11|12] → a₂ = 3 · [FRAC:11|12] = [FRAC:33|12] = [FRAC:11|4] ✓; a₃ = [FRAC:11|4] · [FRAC:11|12] = [FRAC:121|48] ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B) 2 daje q = (11/4)/2 = 11/8 ≠ 11/12; C) 11/12 = q (zamjena prvog člana s kvocijentom); D) 11/48 = a₂ · q/a₂² možda — proizvoljno.",note:"diagnostika",final:true},{txt:"Intuicija: kvocijent je \"množitelj\" između susjednih članova; dijeljenje s q \"vraća\" niz unazad (od većeg indeksa prema manjem).",note:"intuicija",final:true},{txt:"Postupak: 1) izračunaj kvocijent q iz dva uzastopna člana. 2) \"vrati se\" prema a₁ dijeljenjem s q. 3) provjeri rezultat reprodukcijom niza.",note:"postupak",final:true}],
    why:["Pravila geometrijskog niza: aₙ = a₁ · q^(n−1) (n-ti član); q = [FRAC:aₙ₊₁|aₙ] (kvocijent); a₂ = a₁ · q; a₃ = a₁ · q² = a₂ · q.","Postupak: 1) izračunaj kvocijent q iz dva uzastopna člana. 2) \"vrati se\" prema a₁ dijeljenjem s q. 3) provjeri rezultat reprodukcijom niza.","Intuicija: geometrijski niz je \"kao kamatne stope\" — svaki član je prethodni puta konstantni faktor. Obratno: prethodni = trenutni / faktor.","Česta greška 1: zbrojiti članove (kao u aritmetičkom nizu) umjesto pomnožiti. d (razlika) i q (kvocijent) su različite stvari.","Česta greška 2: pomiješati uloge q i a₁. q je VEZA između članova, a₁ je POČETNI ČLAN. Iz a₁ = a₂ / q (ne a₁ = q / a₂).","Alt metoda — svojstvo geom. sredine: a₂² = a₁ · a₃ → a₁ = [FRAC:a₂²|a₃] = [FRAC:(11/4)²|121/48] = [FRAC:121/16|121/48] = [FRAC:121 · 48|16 · 121] = [FRAC:48|16] = 3 ✓.","Provjera: kvocijent 11/12 < 1 znači niz opada — a₁ > a₂ > a₃, što odgovara 3 > 11/4 = 2,75 > 121/48 ≈ 2,52 ✓."]
  },
  {
    id:14,
    type:"mc",warn:"Pazi: najkraća zadanog je 24; koeficijent sličnosti iz stranice DEF, pa pomnoži.",
    topic:"geom",
    points:1,
    q:"Duljine stranica trokuta ABC iznose 24 cm, 30 cm i 42 cm. Duljina najkraće stranice trokuta DEF sličnoga trokutu ABC iznosi 15 cm. Koliko iznosi opseg trokuta DEF?",
    opts:["48 cm","60 cm","64 cm","96 cm"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Najkraća stranica △ABC: 24 cm (od 24, 30, 42). Odgovarajuća najkraća stranica △DEF: 15 cm."},{txt:"Koeficijent sličnosti k = [FRAC:DEF stranica|ABC stranica] = [FRAC:15|24] = [FRAC:5|8]."},{txt:"Slični trokuti: sve odgovarajuće dužine (uključujući opseg) proporcionalne s k."},{txt:"Opseg ABC: o(ABC) = 24 + 30 + 42 = 96 cm."},{txt:"Opseg DEF: o(DEF) = k · o(ABC) = [FRAC:5|8] · 96 = [FRAC:480|8] = 60 cm."},{txt:"Točan odgovor: B — 60 cm.",note:"odgovor",final:true},{txt:"Provjera odgovarajućim stranicama DEF: 24 · [FRAC:5|8] = 15 ✓, 30 · [FRAC:5|8] = 18,75, 42 · [FRAC:5|8] = 26,25; opseg = 15 + 18,75 + 26,25 = 60 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 48 (proizvoljno); C) 64 (možda kombinacija greške); D) 96 (opseg ABC, ne DEF).",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj odgovarajuće stranice (najkraća ↔ najkraća). 2) izračunaj k. 3) ostatak (opseg, drugi stranice) skaliraj s k.",note:"postupak",final:true},{txt:"Intuicija: slični likovi proporcionalni linearno — opseg, stranica, visina, polumjer upisane kružnice... sve množi s k. Površina × k², volumen × k³.",note:"intuicija",final:true}],
    why:["Pravilo (slični trokuti): △ABC ∼ △DEF ⟺ odgovarajući kutovi jednaki I [FRAC:DE|AB] = [FRAC:EF|BC] = [FRAC:FD|CA] = k (koeficijent sličnosti). Opseg(DEF) = k · Opseg(ABC).","Postupak: 1) identificiraj odgovarajuće stranice (najkraća ↔ najkraća). 2) izračunaj k. 3) ostatak (opseg, drugi stranice) skaliraj s k.","Intuicija: skaliranje (zoom-in/out) čuva sve KUTOVE i mijenja sve LINEARNE dimenzije proporcionalno. Opseg je zbroj linearnih dimenzija → skalira s k.","Česta greška 1: skalirati opseg s k² umjesto k. k² je za POVRŠINU (proporcija kvadrata, ne linearno), k³ za VOLUMEN.","Česta greška 2: pomiješati koja je \"najkraća\" stranica. ABC: 24 (najkraća), 30 (srednja), 42 (najduža) — pažljivo razvrstavanje.","Alt metoda — proporcija: [FRAC:15|24] = [FRAC:o(DEF)|96] → o(DEF) = [FRAC:15 · 96|24] = [FRAC:1440|24] = 60 ✓.","Provjera: pojedinačne stranice DEF zbrajaju se na 60 (15 + 18,75 + 26,25); k = 5/8 = 0,625 → DEF je MANJI od ABC (60 < 96) ✓."]
  },
  {
    id:15,
    type:"mc",warn:"Pazi: broj okretaja = put/opseg = 5000 m/(π·1,5); pazi na jedinice (km → m).",
    topic:"geom",
    points:1,
    q:"Koliko punih krugova napravi kotač promjera 1,5 metra na putu od pet kilometara?",
    opts:["707","1061","2829","3333"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Kotač u jednom okretu prijeđe put jednak svome opsegu O."},{txt:"Opseg kotača: O = π · d = π · 1,5 m. Numerički: O ≈ 3,14159 · 1,5 ≈ 4,7124 m."},{txt:"Pretvori km u m: 5 km = 5000 m."},{txt:"Broj punih krugova: ⌊[FRAC:5000|4,7124]⌋ = ⌊1061,03⌋ = 1061 (cijeli broj — \"puni krugovi\", zaokruživanje DOLJE)."},{txt:"Točan odgovor: B — 1061.",note:"odgovor",final:true},{txt:"Provjera: 1061 · 4,7124 ≈ 5000 m ✓; 1062 krugova bi prešlo 5005 m (više od 5 km, nije \"punih\").",note:"verifikacija",final:true},{txt:"Distraktori: A) 707 = 5000 / (π · 1,5 / 0,667) — greška u radijusu; C) 2829 ≈ 5000 / 1,77 (zaboravljen π); D) 3333 ≈ 5000 / 1,5 (uopće zaboravljen π — koristio samo promjer).",note:"diagnostika",final:true},{txt:"Intuicija: razmotaj kotač — koliko god se okrene, \"iscrta\" put jednak opsegu. Put / opseg = broj okreta.",note:"intuicija",final:true},{txt:"Postupak: 1) izračunaj opseg kotača. 2) pretvori sve mjere u istu jedinicu (m). 3) podijeli ukupni put s opsegom. 4) zaokruži DOLJE za \"puni\" broj okreta.",note:"postupak",final:true}],
    why:["Pravilo: opseg kruga O = π · d = 2π · r; kotač u jednom potpunom okretu prijeđe put jednak svome opsegu.","Postupak: 1) izračunaj opseg kotača. 2) pretvori sve mjere u istu jedinicu (m). 3) podijeli ukupni put s opsegom. 4) zaokruži DOLJE za \"puni\" broj okreta.","Intuicija: zamisli da kotač \"odštampava\" otisak svaki okret — duljina otiska je opseg.","Česta greška 1: koristiti polumjer umjesto promjera. O = π · r (krivo) umjesto O = π · d ili O = 2π · r.","Česta greška 2: zaboraviti pretvoriti km u m. 5 / 4,7124 ≈ 1,06 — apsurdno malo. Uvijek provjeri jedinice.","Alt metoda — preko polumjera: r = d/2 = 0,75 m; O = 2π · r = 2π · 0,75 = 1,5π ≈ 4,7124 m (isti rezultat).","Provjera reda veličine: 5 km / 5 m po krugu ≈ 1000 krugova — odgovara B (1061), ne A ili D (s redom veličine drugačijim)."]
  },
  {
    id:16,
    type:"mc",warn:"Pazi: mreža = 1 kvadrat (baza) + 4 sukladna trokuta (pobočke).",
    topic:"geom",
    points:1,
    q:"Od kojih se geometrijskih likova sastoji mreža pravilne uspravne četverostrane piramide?",
    opts:["od jednoga kvadrata i četiriju pravokutnika","od jednoga kvadrata i četiriju jednakokračnih trokuta","od jednoga jednakostraničnog trokuta i četiriju pravokutnika","od jednoga jednakostraničnog trokuta i četiriju jednakokračnih trokuta"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Pravilna četverostrana piramida: baza je PRAVILNI ČETVEROKUT = KVADRAT (po definiciji \"pravilne\"). Isključuje C i D (s trokutnom bazom)."},{txt:"Bočne strane piramide: trokuti sa zajedničkim vrhom u apeksu, bazama su stranice baze (kvadrata)."},{txt:"Uspravna piramida: apeks iznad središta baze → svi bočni trokuti SUKLADNI i JEDNAKOKRAČNI (krak = brid od baze do apeksa, baza = stranica kvadrata)."},{txt:"Mreža = jedan kvadrat (baza) + 4 sukladna jednakokračna trokuta (bočne strane)."},{txt:"Točan odgovor: B.",note:"odgovor",final:true},{txt:"Provjera ukupno strana: piramida ima 5 ploha (1 baza + 4 bočne) → mreža ima 5 likova ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) bočne strane KAO PRAVOKUTNICI = mreža PRIZME, ne piramide (prizma ima 2 jednake baze, piramida ima vrh); C, D) baza je trokutna (pravilna TROSTRANA, ne ČETVEROSTRANA).",note:"diagnostika",final:true},{txt:"Intuicija: pravilna piramida — vrh \"iznad\" pravilne baze (centrirani); rasklopis daje bazu + sve bočne strane oko nje.",note:"intuicija",final:true},{txt:"Postupak: 1) odredi oblik baze (po vrsti piramide: \"trostrana\" → trokut, \"četverostrana\" → četverokut). 2) \"pravilna\" → pravilan mnogokut (jednakostranični trokut, kvadrat, pravilni peterokut...). 3) bočne strane su trokuti.",note:"postupak",final:true}],
    why:["Pravilo: n-strana piramida ima jednu n-kutnu BAZU i n TROKUTASTIH bočnih strana sa zajedničkim vrhom u apeksu. Pravilna piramida: pravilna baza + uspravnost (apeks iznad centra).","Postupak: 1) odredi oblik baze (po vrsti piramide: \"trostrana\" → trokut, \"četverostrana\" → četverokut). 2) \"pravilna\" → pravilan mnogokut (jednakostranični trokut, kvadrat, pravilni peterokut...). 3) bočne strane su trokuti.","Intuicija: piramide imaju samo JEDNU bazu (vrh suprotno); bočne strane su uvijek trokuti (jedna stranica = stranica baze, dvije idu prema vrhu).","Česta greška 1: pomiješati piramide i prizme. Prizma: dvije paralelne kongruentne baze + pravokutne ili paralelogramske bočne strane. Piramida: jedna baza + trokutne bočne.","Česta greška 2: smatrati da su bočni trokuti jednakostranični. Općenito su samo JEDNAKOKRAČNI (krak = brid piramide), osim u posebnom slučaju kad je piramida \"pravilan tetraedar\" (4 jednake plohe).","Alt metoda — eksplicitna konstrukcija: zamisli kvadrat na podu; iz svake stranice \"podigni\" trokut prema gore, koji se spaja u jednoj točki (apeks). Imaš 1 kvadrat + 4 trokuta.","Provjera Eulerova formula za poliedre: V − E + F = 2 (vrhovi minus brijevi plus plohe = 2 za jednostavne poliedre). Piramida: V = 5, E = 8, F = 5; 5 − 8 + 5 = 2 ✓."]
  },
  {
    id:17,
    img:true,
    type:"mc",warn:"Pazi: pravac je paralelan ravnini ako je ne siječe (a ne leži u njoj); vizualiziraj kocku.",
    topic:"geom",
    points:1,
    q:"Na skici je prikazana kocka ABCDEFGH. Koji je od navedenih pravaca paralelan s ravninom DCG?",
    opts:["BC","BD","BE","BG"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Ravnina DCG je DEFINIRANA s 3 točke. U kocki ABCDEFGH (standardna oznaka): D, C, G — D i C su susjedni na donjoj plohi, G je iznad C. To je STRAŽNJA PLOHA kocke (vertikalan kvadrat DCGH)."},{txt:"Pravac paralelan ravnini: NE LEŽI u ravnini I NE SIJEČE ju."},{txt:"A: BC — leži na DONJOJ plohi (ABCD), siječe ravninu DCGH u BRIDU C (zajednička točka — siječe)."},{txt:"B: BD — dijagonala donje plohe; prolazi kroz D koja je u DCGH → siječe."},{txt:"D: BG — prostorni pravac, prolazi kroz G koja je u DCGH → siječe."},{txt:"C: BE — vertikalni brid PREDNJE plohe (ABFE). PREDNJA i STRAŽNJA ploha su PARALELNE; svaki brid prednje plohe paralelan je sa stražnjom plohom."},{txt:"Točan odgovor: C — BE ∥ ravnina DCG.",note:"odgovor",final:true},{txt:"Provjera: BE leži u plohi ABFE; ABFE ∥ DCGH (suprotne plohe kocke); pravci u jednoj od dvije paralelne plohe paralelni su sa drugom ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, D svi imaju zajedničku točku s plohom DCGH (sijeku ju), pa nisu paralelni s njom.",note:"diagnostika",final:true},{txt:"Intuicija: prednja i stražnja stranica kocke su \"ogledalo\" — svaki pravac u jednoj odgovara paralelnom pravcu u drugoj.",note:"intuicija",final:true},{txt:"Postupak: 1) identificiraj ravninu (koja je ploha kocke). 2) za svaki kandidat provjeri: leži li u ravnini, ili je siječe, ili je paralelan.",note:"postupak",final:true}],
    why:["Pravilo: pravac p paralelan je s ravninom α ⟺ p ∉ α I p ∩ α = ∅. Ekvivalentno: postoji pravac u α paralelan s p.","Postupak: 1) identificiraj ravninu (koja je ploha kocke). 2) za svaki kandidat provjeri: leži li u ravnini, ili je siječe, ili je paralelan.","Intuicija: u kocki postoje 3 para paralelnih ploha (gornja/donja, prednja/stražnja, lijeva/desna). Bridovi i pravci u jednoj plohi paralelni su sa suprotnom.","Česta greška 1: pomiješati \"paralelan\" i \"okomit\". Okomit pravac na ravninu siječe ju pod 90°; paralelan ju NIKAD ne siječe.","Česta greška 2: smatrati pravac koji \"ide iznad ravnine\" paralelnim. Da bude PARALELAN, mora ne dirati ravninu nigdje. BE je u plohi ABFE koja je paralelna s DCGH — pa BE ne siječe DCGH.","Alt metoda — koordinatno: postavi kocku sa stranicom 1. A = (0,0,0), B = (1,0,0), C = (1,1,0), D = (0,1,0), E = (0,0,1), F = (1,0,1), G = (1,1,1), H = (0,1,1). DCG ravnina: y = 1. BE = pravac od (1,0,0) do (0,0,1); BE ima y = 0 (konstantno); y = 0 ≠ y = 1 ∀ → ne siječe ravninu ✓.","Provjera: zaista, sve točke BE imaju y-koordinatu 0; sve točke DCG imaju y = 1; nemaju zajedničku točku."]
  },
  {
    id:18,
    img:true,
    type:"mc",warn:"Pazi: zbroj vektora = zbroj komponenti (x s x, y s y).",
    topic:"vekt",
    points:1,
    q:"Na slici su prikazani vektori m, n, p i r. Koji je od navedenih vektora zbroj vektora a = 2i + 5j i vektora b = −4i + 2j?",
    opts:["m","n","p","r"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Zbrajanje vektora po komponentama: a + b = (aₓ + bₓ)i + (aᵧ + bᵧ)j."},{txt:"aₓ = 2, aᵧ = 5; bₓ = −4, bᵧ = 2."},{txt:"a + b = (2 + (−4))i + (5 + 2)j = −2i + 7j."},{txt:"Sa slike: identificiraj vektor s komponentama (−2, 7) — usmjeren prema gore-lijevo, duljine √(4 + 49) = √53 ≈ 7,28."},{txt:"Vektor n na slici odgovara tim koordinatama (gledamo strelicu iz donjeg desnog u gornji lijevi)."},{txt:"Točan odgovor: B — vektor n.",note:"odgovor",final:true},{txt:"Provjera duljinom: |a + b| = √((−2)² + 7²) = √53 ≈ 7,28 — usporedi vizualno s duljinom n na slici.",note:"verifikacija",final:true},{txt:"Distraktori: m, p, r — vjerojatno odgovaraju krivim kombinacijama: a − b, b − a, ili −a − b.",note:"diagnostika",final:true},{txt:"Intuicija: vektorski zbroj geometrijski je \"glava na rep\" — stavi b od kraja a; rezultanta ide od početka a do kraja b.",note:"intuicija",final:true},{txt:"Postupak: 1) izvuci komponente vektora a i b. 2) zbroji odgovarajuće (x s x, y s y). 3) usporedi rezultat s vektorima na slici (smjer i veličina).",note:"postupak",final:true}],
    why:["Pravilo: za vektore a = aₓi + aᵧj i b = bₓi + bᵧj vrijedi a + b = (aₓ + bₓ)i + (aᵧ + bᵧ)j (komponentno zbrajanje).","Postupak: 1) izvuci komponente vektora a i b. 2) zbroji odgovarajuće (x s x, y s y). 3) usporedi rezultat s vektorima na slici (smjer i veličina).","Intuicija: vektor = \"pomak\"; zbroj dvaju pomaka = ukupni pomak. Po komponentama: horizontalne se zbrajaju s horizontalnima, vertikalne s vertikalnima.","Česta greška 1: pomiješati i s j (zbrojiti aₓ s bᵧ, što ne ide). Uvijek odvojeno x i y.","Česta greška 2: razlika umjesto zbroja: a − b = 6i + 3j (krivi predznaci). Pažljivo s predznakom drugog vektora.","Alt metoda — paralelogram pravilo: postavi a i b s istog početka; dijagonala paralelograma (od početka do \"suprotnog ugla\") je a + b.","Provjera: oduzmi b od rezultata: (−2i + 7j) − (−4i + 2j) = (−2 + 4)i + (7 − 2)j = 2i + 5j = a ✓."]
  },
  {
    id:19,
    img:true,
    type:"mc",warn:"Pazi: mod = NAJČEŠĆI podatak; u stablo-list dijagramu traži list koji se najviše ponavlja.",
    topic:"stat",
    points:1,
    q:"Niz podataka prikazan je stablo-list dijagramom. Koliko iznosi mod toga niza podataka? (Legenda: 2|0 = 20. Podaci: 2|0 0 1 2 3 9; 3|0 0 4 4 5 5 7 7 7; 4|0 1 1 1 2 2 2 2 2 2 3 7 5; 5|1 2 3 5 7 8 8)",
    opts:["35","37","41","42"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Stablo-list dijagram: lijeva znamenka (stablo) = deseti, desna (list) = jedinica. Broj 42 se zapisuje kao 4|2."},{txt:"Mod = vrijednost koja se NAJČEŠĆE pojavljuje. Tražimo redak gdje se ista znamenka lista najviše puta pojavljuje."},{txt:"Redak 2: listovi 0, 0, 1, 2, 3, 9 — znamenka 0 pojavljuje se 2 puta (broj 20)."},{txt:"Redak 3: listovi 0, 0, 4, 4, 5, 5, 7, 7, 7 — znamenka 7 pojavljuje se 3 puta (broj 37)."},{txt:"Redak 4: listovi 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 7, 5 — znamenka 2 pojavljuje se 6 PUTA (broj 42 šest puta)."},{txt:"Redak 5: listovi 1, 2, 3, 5, 7, 8, 8 — znamenka 8 pojavljuje se 2 puta."},{txt:"Najveća frekvencija: 6 puta za broj 42 (u retku 4). Mod = 42."},{txt:"Točan odgovor: D — 42.",note:"odgovor",final:true},{txt:"Provjera: ostali kandidati: 41 (3 puta — listovi 1 u retku 4), 37 (3 puta), 35 (1 put). Svi imaju manju frekvenciju od 42.",note:"verifikacija",final:true},{txt:"Distraktori: A) 35 — pojavljuje se 1 put (jedna 5 u retku 3); B) 37 — 3 puta; C) 41 — 3 puta. Svi imaju manje od 6.",note:"diagnostika",final:true},{txt:"Postupak: 1) prebroji koliko se puta pojavljuje svaka vrijednost. 2) odaberi vrijednost s najvećom frekvencijom. 3) (alt) za stablo-list: izbroji ponavljanja u svakom retku.",note:"postupak",final:true},{txt:"Intuicija: u stablo-list dijagramu broj ponavljanja iste znamenke u istom retku = frekvencija tog konkretnog broja.",note:"intuicija",final:true}],
    why:["Pravilo: mod statističkog niza = vrijednost s najvećom frekvencijom. Niz može imati 0 modova (uniforman), 1 mod (unimodalan), 2 (bimodalan) ili više.","Postupak: 1) prebroji koliko se puta pojavljuje svaka vrijednost. 2) odaberi vrijednost s najvećom frekvencijom. 3) (alt) za stablo-list: izbroji ponavljanja u svakom retku.","Intuicija: mod je \"najpopularnija vrijednost\" — što se najčešće događa. Razlikuje se od medijana (srednja vrijednost) i prosjeka (aritmetička sredina).","Česta greška 1: dati MEDIJAN umjesto MOD. Medijan je srednji element sortiranog niza; mod je najčešći.","Česta greška 2: pomiješati listove i stablo. 4|2 znači 42, ne 24 ili 4,2.","Alt metoda — frekvencije svih vrijednosti: ispiši niz brojeva (20, 20, 21, 22, 23, 29, 30, 30, 34, 34, 35, 35, 37, 37, 37, 40, 41, 41, 41, 42, 42, 42, 42, 42, 42, 43, 47, 45, 51, ...). Onda prebroji.","Provjera: jedinstven mod = 42 (sa 6 ponavljanja); sljedeća najveća frekvencija je 3 (za 37 i 41) — mod je jasan."]
  },
  {
    id:20,
    type:"mc",warn:"Pazi: ukupno 2³ = 8 ishoda; povoljnih (PPG, PGP, GPP) = 3 → vjerojatnost 3/8.",
    topic:"vjer",
    points:1,
    q:"Tri puta bacamo novčić. Koliko iznosi vjerojatnost da je dva puta palo pismo i jednom glava?",
    opts:["1/2","1/4","1/8","3/8"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Tri bacanja novčića → ukupni prostor uzorka ima 2 · 2 · 2 = 2³ = 8 elementarnih ishoda."},{txt:"Povoljni ishodi (točno 2 pisma + 1 glava) — pobrojimo: PPG, PGP, GPP (G na različitim pozicijama)."},{txt:"Broj povoljnih = 3. Ekvivalentno C(3, 2) = 3 (broj načina odabira 2 pozicija za pismo od 3 ukupno)."},{txt:"P(2P + 1G) = [FRAC:povoljni|ukupni] = [FRAC:3|8]."},{txt:"Točan odgovor: D — [FRAC:3|8].",note:"odgovor",final:true},{txt:"Provjera Bernoullijevom formulom: P(k uspjeha od n) = C(n,k) · pᵏ · (1−p)^(n−k). Za n=3, k=2, p=0,5: C(3,2) · 0,5² · 0,5¹ = 3 · 0,125 = 0,375 = [FRAC:3|8] ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) [FRAC:1|2] = vjerojatnost jednog bacanja (P ili G); B) [FRAC:1|4] = krivi izračun; C) [FRAC:1|8] = vjerojatnost JEDNOG specifičnog redoslijeda (npr. samo PPG).",note:"diagnostika",final:true},{txt:"Intuicija: kad pitamo \"2 pisma\" bez specificiranja redoslijeda, postoji više povoljnih sekvenci (PPG, PGP, GPP) — sve s istom vjerojatnošću.",note:"intuicija",final:true},{txt:"Postupak: 1) odredi prostor uzorka (svi ishodi). 2) prebroji povoljne ishode (sve kombinacije s točno 2 pisma). 3) podijeli.",note:"postupak",final:true}],
    why:["Pravila vjerojatnosti: klasična P(A) = [FRAC:povoljni ishodi|svi ishodi] (uniformna); Bernoullijeva formula za k uspjeha od n: P = C(n,k) · pᵏ · (1−p)^(n−k).","Postupak: 1) odredi prostor uzorka (svi ishodi). 2) prebroji povoljne ishode (sve kombinacije s točno 2 pisma). 3) podijeli.","Intuicija: koliko PUTOVA može voditi do željenog ishoda? Što ih više, to veća vjerojatnost.","Česta greška 1: dati [FRAC:1|8] (samo jedan redoslijed PPG) — zaboravljajući da postoji 3 različita \"PPG\" rasporeda.","Česta greška 2: dati [FRAC:1|2] · [FRAC:1|2] · [FRAC:1|2] = [FRAC:1|8] kao \"vjerojatnost dvaju pisma\". To je vjerojatnost SPECIFIČNOG ishoda, ne uopće \"2 pisma\".","Alt metoda — eksplicitno nabrojavanje: SSS, SSP, SPS, PSS, SPP, PSP, PPS, PPP gdje P = pismo i S = glava. Povoljni (2P + 1S): SPP, PSP, PPS → 3 od 8 = [FRAC:3|8].","Provjera ukupnom vjerojatnošću: P(0P) + P(1P) + P(2P) + P(3P) = [FRAC:1|8] + [FRAC:3|8] + [FRAC:3|8] + [FRAC:1|8] = [FRAC:8|8] = 1 ✓ (Pascalov trokut)."]
  },
  {
    id:21,
    type:"sa",
    topic:"br",
    points:1,
    q:"Koliko iznosi (3 − (0,8 + 2)) / (1 − 2 : 3)?",
    sol:{ans:"[FRAC:3|5]",alt:["3/5","0,6","0,6"]},
    steps:[{txt:"Redoslijed operacija — najprije zagrade, dijeljenje prije oduzimanja."},{txt:"Brojnik: 0,8 + 2 = 2,8; pa 3 − 2,8 = 0,2."},{txt:"Pretvori 0,2 u razlomak: 0,2 = [FRAC:2|10] = [FRAC:1|5]."},{txt:"Nazivnik: 2 : 3 = [FRAC:2|3]; pa 1 − [FRAC:2|3] = [FRAC:3 − 2|3] = [FRAC:1|3]."},{txt:"Cijeli izraz: [FRAC:brojnik|nazivnik] = [FRAC:1/5|1/3] = [FRAC:1|5] · 3 = [FRAC:3|5]."},{txt:"Točan odgovor: [FRAC:3|5] (= 0,6).",note:"odgovor",final:true},{txt:"Provjera unatrag: [FRAC:3|5] · [FRAC:1|3] = [FRAC:3|15] = [FRAC:1|5] (= brojnik) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj svaki dio razlomka odvojeno. 2) pretvori sve u razlomački oblik. 3) podijeli (= pomnoži recipročnim).",note:"postupak",final:true},{txt:"Intuicija: dijeljenje razlomkom = množenje recipročnim ([FRAC:a|b] / [FRAC:c|d] = [FRAC:a|b] · [FRAC:d|c]).",note:"intuicija",final:true}],
    why:["Pravila razlomaka: dijeljenje [FRAC:a|b] : [FRAC:c|d] = [FRAC:a|b] · [FRAC:d|c] = [FRAC:ad|bc]; oduzimanje s istim nazivnikom: [FRAC:a|c] − [FRAC:b|c] = [FRAC:a − b|c].","Postupak: 1) izračunaj brojnik (svi dijelovi u zagradi prvo). 2) izračunaj nazivnik. 3) podijeli (množi recipročnim). 4) pojednostavi.","Intuicija: razlomak je \"jedna operacija\" — najprije ga \"razloži\" u brojnik / nazivnik, pa ih riješi odvojeno.","Česta greška 1: pomnožiti brojnike i nazivnike \"direktno\": [FRAC:1/5|1/3] = [FRAC:1|15] (krivo). Dijeljenje razlomaka NIJE pomnožiti brojnike.","Česta greška 2: pomiješati redoslijed operacija. 1 − 2 : 3 NIJE (1 − 2) : 3 = −[FRAC:1|3]; treba 1 − ([FRAC:2|3]) = [FRAC:1|3] (dijeljenje prvo).","Alt metoda — sve u decimalama: brojnik = 0,2; nazivnik = 1 − 0,667 = 0,333; 0,2 / 0,333 ≈ 0,6 = [FRAC:3|5] ✓.","Provjera: drugi pogled — pojednostaviti svaki dio: brojnik [FRAC:1|5], nazivnik [FRAC:1|3]; dijeljenje = [FRAC:1|5] · 3 = [FRAC:3|5] ✓."]
  },
  {
    id:22,
    img:true,
    type:"sa",
    topic:"stat",
    points:1,
    q:"Najveći mogući broj bodova u ispitu iz Matematike bio je 28. Skala za ocjenjivanje prikazana je u tablici. Ako je učenik ostvario 22 boda, koju je ocjenu dobio?",
    sol:{ans:"vrlo dobar (4)",alt:["vrlo dobar","4","vrlodobar","vrlo dobar (4)"]},
    steps:[{txt:"Izračunaj postotak riješenosti: P = [FRAC:bodovi ostvareni|max bodovi] · 100 % = [FRAC:22|28] · 100 %."},{txt:"Numerički: [FRAC:22|28] = [FRAC:11|14] ≈ 0,7857 → 78,57 %."},{txt:"Iz tablice ocjenjivanja: raspon od 78 % do 90 % odgovara ocjeni \"vrlo dobar (4)\"."},{txt:"Provjera granica: 78,57 % > 78 % (donja granica zadovoljena) ✓; 78,57 % < 90 % (gornja granica zadovoljena) ✓."},{txt:"Točan odgovor: vrlo dobar (4).",note:"odgovor",final:true},{txt:"Provjera: ostavši na granici (78 %) još uvijek \"vrlo dobar\"; ispod (npr. 70 %) bi bio \"dobar (3)\"; iznad 90 % bi bio \"odličan (5)\".",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj postotak. 2) pronađi raspon u tablici koji ga sadrži. 3) pridruži ocjenu iz tog raspona.",note:"postupak",final:true},{txt:"Intuicija: tablica ocjenjivanja \"dijeli\" interval 0-100 % na 5 dijelova; svako područje pripada jednoj ocjeni.",note:"intuicija",final:true}],
    why:["Pravilo: postotak riješenosti = [FRAC:ostvareno|maksimum] · 100 %. Tablica mapira intervale postotaka na ocjene (npr. 0-50 % = nedovoljan, 50-65 % = dovoljan, 65-78 % = dobar, 78-90 % = vrlo dobar, 90-100 % = odličan).","Postupak: 1) odredi ukupni postotak. 2) pronađi interval u tablici. 3) izvjesti ocjenu.","Intuicija: postotak je \"univerzalan jezik\" za uspjeh — ne ovisi o tome koliko bodova je maksimum, samo o omjeru.","Česta greška 1: računati postotak nedostajućih bodova ([FRAC:6|28] ≈ 21 %) umjesto ostvarenih. Provjeri što ti pitanje traži.","Česta greška 2: zaokružiti prerano. 22/28 ≈ 0,79 ili 0,78 — ovisno o zaokruživanju može pasti u različite intervale; bolje računati precizno.","Alt metoda — direktno bodovima: ako tabla daje bodovne granice (npr. ≥ 22 = vrlo dobar), provjeri direktno bez postotka.","Provjera: 22 boda u ispitu od 28 = \"skoro 4/5 točno\" — intuitivno vrlo dobar (4), što odgovara izračunu ✓."]
  },
  {
    id:23,
    type:"sa",
    topic:"al",
    points:1,
    q:"Koliko iznosi (−a)³ · a⁵ + (a⁴)²?",
    sol:{ans:"0",alt:["0","nula"]},
    steps:[{txt:"Pojednostavi svaki član odvojeno. Prvi: (−a)³ = (−1)³ · a³ = −a³ (jer (−1)³ = −1)."},{txt:"−a³ · a⁵ = −a^(3+5) = −a⁸ (pravilo množenja istih baza: aᵐ · aⁿ = a^(m+n))."},{txt:"Drugi član: (a⁴)² = a^(4·2) = a⁸ (pravilo potenciranja potencije: (aᵐ)ⁿ = a^(m·n))."},{txt:"Zbroj: −a⁸ + a⁸ = 0 (poništavanje suprotnih predznaka)."},{txt:"Točan odgovor: 0.",note:"odgovor",final:true},{txt:"Provjera s a = 2: (−2)³ · 2⁵ + (2⁴)² = −8 · 32 + 16² = −256 + 256 = 0 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) pojednostavi svaki član posebno (uz pažnju na predznake). 2) primijeni pravila potencija (množenje, potenciranje). 3) zbroji.",note:"postupak",final:true},{txt:"Intuicija: (−a)ⁿ za neparan n daje −aⁿ, za paran n daje +aⁿ. Ovdje neparan 3 daje minus → poništava +a⁸.",note:"intuicija",final:true}],
    why:["Pravila potencija: (xy)ⁿ = xⁿyⁿ; xᵐ · xⁿ = xᵐ⁺ⁿ; (xᵐ)ⁿ = xᵐⁿ; (−1)ⁿ = +1 za paran n, −1 za neparan n.","Postupak: 1) izolacija predznaka (−a)ⁿ = (−1)ⁿ · aⁿ. 2) primjena pravila množenja/potenciranja. 3) konsolidacija članova.","Intuicija: zapaziš strukturu: jedan član je +a⁸, drugi je −a⁸ — oni se poništavaju neovisno o a.","Česta greška 1: napisati (−a)³ = a³ (zaboraviti predznak, jer \"³\" izgleda \"izgubljeno\"). Neparan eksponent ČUVA predznak.","Česta greška 2: (a⁴)² = a⁶ (zbrojiti umjesto pomnožiti eksponente). Pravilo (xᵐ)ⁿ = x^(m·n), eksponenti se MNOŽE.","Alt metoda — faktorizacija: (−a)³ · a⁵ + (a⁴)² = −a⁸ + a⁸ = a⁸(−1 + 1) = a⁸ · 0 = 0 ∀a ∈ ℝ.","Provjera za a = −1: (1)³ · (−1)⁵ + ((−1)⁴)² = 1 · (−1) + 1 = 0 ✓; za a = 0: 0 + 0 = 0 ✓."]
  },
  {id:24,type:"sa",topic:"kv",points:1,
  q:"Ako je 14 jedno rješenje kvadratne jednadžbe ax² + c = 0, koliko iznosi drugo rješenje te jednadžbe?",
  sol:{ans:"−14",solFormula:"x₂ = −14",alt:["-14","−14","x = −14","x=-14","x = -14","−14 (suprotnog predznaka)"]},
  why:["Pravilo: U kvadratnoj jednadžbi ax² + c = 0 (bez linearnog člana, b = 0), Vièteov je zbroj rješenja x₁ + x₂ = −b/a = 0.","Intuicija: Rješenja su simetrična u odnosu na ishodište — ako je jedno x = 14, drugo mora biti x = −14 jer im zbroj mora biti 0.","Provjera: x² = −c/a → x = ±√(−c/a). Ako 14 je rješenje, onda i −14 mora biti rješenje (parnost u kvadratu).","Česta greška: Tražiti drugo rješenje pomoću diskriminante umjesto Vièteovih formula — sporije, manje elegantno.","Alternativa: Iz x² = 196 slijedi x = ±14 izravno (ili: jednadžba je ax² + c = 0 → x² = −c/a, ako je 14² = 196 = −c/a, drugo rješenje je −14).","Provjera Vièteom: x₁ · x₂ = c/a; ako je x₁ = 14 i x₂ = −14, onda je c/a = −196 — konzistentno s tim da je ax² + c = 0 → c = −196a."],
  steps:[{txt:"Strategija: Vièteov za ax² + c = 0 (bez linearnog člana) daje x₁ + x₂ = 0 → drugo rješenje suprotno prvom."},{txt:"Postavi: ako je x₁ = 14, onda iz x₁ + x₂ = 0 slijedi x₂ = −14."},{txt:"Točan odgovor: x₂ = −14 ✓",note:"odgovor",final:true},{txt:"Verifikacija: x² = 196 → x = ±14, oba rješenja. ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: ax² + c = 0 → rješenja simetrična oko 0 (b=0 ⇒ Vièteov zbroj nula). ",note:"postupak",final:true},{txt:"Intuicija: Parna funkcija f(x) = ax² + c, ako presjeca x-os u 14, mora i u −14 (simetrija oko y-osi).",note:"intuicija",final:true},{txt:"Provjera Vièteom: x₁ · x₂ = 14 · (−14) = −196 = c/a → konzistentno.",note:"verifikacija",final:true},{txt:"Česta greška: Računati diskriminantu umjesto koristiti simetriju.",note:"diagnostika",final:true}]},
  {
    id:25,
    img:true,
    type:"sa",
    topic:"lin",
    points:1,
    q:"Nacrtajte graf funkcije f(x) = −[FRAC:1|2]x + 3.",
    sol:{ans:"Pravac kroz točke (0, 3) i (2, 2); nagib −[FRAC:1|2], y-odsječak 3.",alt:["pravac y = −x/2 + 3","y = −(1/2)x + 3","y=-x/2+3","graf pravca f(x) = −(1/2)x + 3"]},
    steps:[{txt:"Linearna funkcija f(x) = ax + b s a = −[FRAC:1|2] (nagib), b = 3 (y-odsječak)."},{txt:"Izračunaj točke. f(0) = 3 → (0, 3); f(2) = −1 + 3 = 2 → (2, 2); f(4) = −2 + 3 = 1 → (4, 1)."},{txt:"Nultočka: 0 = −[FRAC:x|2] + 3 → x = 6 → (6, 0)."},{txt:"Ucrtaj točke (0, 3), (2, 2), (4, 1), (6, 0) — sve kolinearne; provuci pravac kroz njih."},{txt:"Točan odgovor: pravac y = −[FRAC:1|2]x + 3.",note:"odgovor",final:true},{txt:"Provjera kolinearnosti: nagib između (0, 3) i (2, 2): [FRAC:2 − 3|2 − 0] = −[FRAC:1|2] ✓; između (2, 2) i (6, 0): [FRAC:0 − 2|6 − 2] = −[FRAC:2|4] = −[FRAC:1|2] ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj 2-3 točke. 2) ucrtaj ih u koordinatni sustav. 3) provuci ravan pravac. 4) provjeri kolinearnost (isti nagib između parova točaka).",note:"postupak",final:true},{txt:"Intuicija: nagib −1/2 znači \"y opada 1 za svaki porast x od 2\" — silazna funkcija. b = 3 znači \"siječe os y u (0, 3)\".",note:"intuicija",final:true}],
    why:["Pravilo: graf linearne funkcije y = ax + b je PRAVAC s nagibom a (= [FRAC:Δy|Δx]) i y-odsječkom b (= f(0)). Dvije točke jedinstveno određuju pravac.","Postupak: 1) izračunaj 2-3 točke za sigurnost. 2) ucrtaj. 3) povuci linijom. 4) (alt) izračunaj nultočku za dodatnu provjeru.","Intuicija: linearna funkcija je \"ravna\" — ne savija. Što veći |nagib|, to strmije; predznak nagiba odlučuje smjer (raste / pada).","Česta greška 1: zaboraviti minus ispred [FRAC:1|2] — crtati uzlazni pravac. f je SILAZAN jer je nagib negativan.","Česta greška 2: pomiješati nagib i y-odsječak. Nagib je KOEFICIJENT uz x; y-odsječak je SLOBODNI ČLAN.","Alt metoda — preko y-odsječka i nultočke: y-odsječak (0, 3); nultočka: 0 = −[FRAC:1|2]x + 3 → x = 6 → (6, 0). Povuci pravac kroz (0, 3) i (6, 0).","Provjera: za točku (4, 1) iz grafa, jednadžba daje −[FRAC:1|2]·4 + 3 = −2 + 3 = 1 ✓."]
  },
  {id:26,type:"sa",topic:"fun",points:1,
  q:"Odredite domenu (prirodno područje definicije) funkcije f(x) = 1/(x − 9).",
  sol:{ans:"ℝ \\ {9}",solFormula:"D(f) = ℝ \\ {9}",alt:["R \\ {9}","ℝ\\{9}","R\\{9}","x ≠ 9","x∈ℝ, x≠9","x ∈ ℝ \\ {9}","(-∞, 9) ∪ (9, +∞)","⟨−∞, 9⟩ ∪ ⟨9, +∞⟩","svi realni brojevi osim 9"]},
  why:["Pravilo: Domena racionalne funkcije f(x) = P(x)/Q(x) je {x ∈ ℝ : Q(x) ≠ 0}.","Intuicija: Dijeljenje s nulom nije definirano — moramo isključiti vrijednosti x za koje nazivnik postaje 0.","Postavi nazivnik = 0: x − 9 = 0 → x = 9 — ta vrijednost se isključuje iz domene.","Domena je ℝ \\ {9} (svi realni brojevi osim 9).","Česta greška: Isključivati i brojnik — brojnik = 1 (konstanta) nikad ne uzrokuje problem.","Alternativna notacija: Domena se može pisati i kao unija intervala ⟨−∞, 9⟩ ∪ ⟨9, +∞⟩."],
  steps:[{txt:"Strategija: za f(x) = 1/(x−9) tražimo sve x ∈ ℝ za koje je nazivnik ≠ 0."},{txt:"Postavi nazivnik = 0: x − 9 = 0 → x = 9."},{txt:"Isključi tu vrijednost iz domene: D(f) = ℝ \\ {9}."},{txt:"Točan odgovor: ℝ \\ {9} ✓",note:"odgovor",final:true},{txt:"Verifikacija: f(9) = 1/0 — nedefinirano; f(8) = 1/(−1) = −1, f(10) = 1/1 = 1 — definirano ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: Domena racionalne funkcije = ℝ minus nultočke nazivnika.",note:"postupak",final:true},{txt:"Intuicija: Vertikalna asimptota je x = 9 — graf 'puca' u toj točki.",note:"intuicija",final:true},{txt:"Alternativna notacija: ⟨−∞, 9⟩ ∪ ⟨9, +∞⟩ ili x ∈ ℝ, x ≠ 9.",note:"postupak",final:true},{txt:"Česta greška: Postavljati uvjet x ≥ 0 (za korijen) iako ovdje nemamo korijena.",note:"diagnostika",final:true}]},
  {
    id:27,
    type:"sa",
    topic:"niz",
    points:1,
    q:"Koliko iznosi zbroj prvih 50 članova aritmetičkoga niza kojemu je prvi član 3, a pedeseti član 52?",
    sol:{ans:"1375",alt:["1375","1 375","1,375"]},
    steps:[{txt:"Formula za sumu aritmetičkog niza: Sₙ = [FRAC:n|2] · (a₁ + aₙ), gdje je n broj članova."},{txt:"Supstituiraj n = 50, a₁ = 3, a₅₀ = 52: S₅₀ = [FRAC:50|2] · (3 + 52)."},{txt:"Pojednostavi: S₅₀ = 25 · 55."},{txt:"Izračunaj: 25 · 55 = 25 · 50 + 25 · 5 = 1250 + 125 = 1375."},{txt:"Točan odgovor: 1375.",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: S = n · (prosjek prvog i zadnjeg) = 50 · [FRAC:3 + 52|2] = 50 · 27,5 = 1375 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj aritmetički niz s poznatim a₁ i aₙ. 2) primijeni Gaussovu formulu. 3) izračunaj (može se i preko prosjeka).",note:"postupak",final:true},{txt:"Intuicija: parovi (a₁ + a₅₀), (a₂ + a₄₉), ... svi imaju isti zbroj (3 + 52 = 55); ima 25 takvih parova → S = 25 · 55.",note:"intuicija",final:true}],
    why:["Pravilo (Gaussova formula): Sₙ = [FRAC:n(a₁ + aₙ)|2] = [FRAC:n(2a₁ + (n−1)d)|2]; vrijedi za aritmetički niz s razlikom d = aₙ₊₁ − aₙ.","Postupak: 1) ako su poznati a₁ i aₙ — koristi prvu formulu. 2) ako su poznati a₁ i d — koristi drugu. 3) izračunaj brojevno.","Intuicija: zbroj se može izračunati \"parovanjem\" — prvi s posljednjim, drugi s pretposljednjim... svi parovi imaju isti zbroj; ima n/2 parova.","Česta greška 1: zbrojiti samo prva i zadnji član (= 55) ne uzimajući u obzir da ima 50 takvih ekvivalentnih parova.","Česta greška 2: pomiješati formule za aritmetički i geometrijski niz. Aritmetički ima zbroj LINEAR u n; geometrijski ima zbroj EKSPONENCIJALAN.","Alt metoda — kroz d: d = [FRAC:a₅₀ − a₁|49] = [FRAC:49|49] = 1. Niz: 3, 4, 5, ..., 52 (cijeli brojevi od 3 do 52). Suma = [FRAC:50|2](3 + 52) = 1375.","Provjera s \"trojku do petdesetdvije\": 3 + 4 + 5 + ... + 52 = [FRAC:(3 + 52) · 50|2] = 1375 ✓ (zbroj svih cijelih brojeva od 3 do 52 inkluzivno)."]
  },
  {
    id:28,
    type:"sa",
    topic:"lin",
    points:1,
    q:"Pravac prolazi ishodištem koordinatnoga sustava i točkom T(9, 5). Odredite jednadžbu toga pravca.",
    sol:{ans:"y = [FRAC:5|9]x",alt:["y = 5/9 x","y=(5/9)x","5x − 9y = 0","y = [FRAC:5|9] x"]},
    steps:[{txt:"Pravac kroz ishodište ima oblik y = kx (jer y(0) = 0, pa b = 0 u y = kx + b)."},{txt:"Iz uvjeta da prolazi kroz T(9, 5): 5 = k · 9."},{txt:"Riješi za k: k = [FRAC:5|9]."},{txt:"Jednadžba pravca: y = [FRAC:5|9]x."},{txt:"Točan odgovor: y = [FRAC:5|9]x.",note:"odgovor",final:true},{txt:"Provjera u T(9, 5): y(9) = [FRAC:5|9] · 9 = 5 ✓; u ishodištu O(0, 0): y(0) = 0 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) pravac kroz ishodište je y = kx. 2) iskoristi danu točku za k. 3) zapiši finalni oblik.",note:"postupak",final:true},{txt:"Intuicija: k = \"kako daleko gore za svaki korak desno\" — za T(9, 5) to je 5/9.",note:"intuicija",final:true}],
    why:["Pravilo: pravac kroz ishodište ima jednadžbu y = kx; pravac kroz dvije točke (x₁, y₁) i (x₂, y₂) ima nagib k = [FRAC:y₂ − y₁|x₂ − x₁].","Postupak: 1) ako prolazi (0, 0), automatski je b = 0. 2) iz dane točke izračunaj k. 3) zapiši y = kx.","Intuicija: pravac kroz ishodište je \"proporcionalan\" — y raste linearno s x bez \"pomaka\". k je konstanta proporcionalnosti.","Česta greška 1: dati y = [FRAC:9|5]x (zamijeniti uloge — uzeti k = x/y umjesto y/x). Provjera u T: [FRAC:9|5] · 9 = 81/5 = 16,2 ≠ 5. Krivo.","Česta greška 2: dodati y-odsječak koji ne postoji: y = [FRAC:5|9]x + 3 (pravac NE prolazi ishodištem). Provjera: y(0) = 3, ne 0. Krivo.","Alt metoda — implicitnim oblikom: kroz O(0,0) i T(9,5) → vektor smjera (9, 5); jednadžba: [FRAC:x|9] = [FRAC:y|5] → 5x = 9y → y = [FRAC:5|9]x ✓.","Provjera za drugi točku: x = 18 → y = [FRAC:5|9] · 18 = 10. Točka (18, 10) leži na pravcu — kolinearna s O i T (kako bi pravac trebao biti)."]
  },
  {
    id:29,
    type:"sa",
    topic:"geom",
    points:1,
    q:"Duljina težišnice trokuta ABC povučene iz vrha C iznosi 27 cm. Koliko iznosi udaljenost težišta od vrha C?",
    sol:{ans:"18 cm",alt:["18","18cm","18 cm"]},
    steps:[{txt:"Težište trokuta dijeli svaku težišnicu u omjeru 2 : 1 počevši od vrha."},{txt:"Dakle udaljenost vrha do težišta = (2/3) · duljina težišnice."},{txt:"Udaljenost C → težište = [FRAC:2|3] · 27 = 18 cm."},{txt:"Udaljenost težište → polovište nasuprotne stranice = [FRAC:1|3] · 27 = 9 cm."},{txt:"Provjera: 18 + 9 = 27 = ukupna težišnica ✓."},{txt:"Točan odgovor: 18 cm.",note:"odgovor",final:true},{txt:"Provjera omjerom: 18/9 = 2/1 ✓ (težište dijeli 2:1).",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj svojstvo težišta. 2) primijeni omjer 2/3 za udaljenost od vrha.",note:"postupak",final:true},{txt:"Intuicija: težište je bliže nasuprotnoj stranici nego vrhu — vrh \"vuče\" 2/3, polovište 1/3.",note:"intuicija",final:true}],
    why:["Pravilo: težište T trokuta dijeli svaku težišnicu u omjeru 2:1, mjereno od vrha. CT : TM = 2 : 1 (M = polovište stranice nasuprot C).","Postupak: 1) duljina cijele težišnice. 2) udaljenost vrh-težište = (2/3)·težišnice. 3) udaljenost težište-polovište = (1/3)·težišnice.","Intuicija: težište je \"centar mase\" — bliže širim stranama trokuta.","Česta greška 1: koristiti omjer 1:2 (od vrha — krivo, dvije trećine pripadaju vrhu).","Česta greška 2: pomiješati težišnicu s visinom ili simetralom.","Alt metoda — koordinatno: postavi trokut s vrhovima, izračunaj težište T = (A+B+C)/3 i mjeri udaljenost.","Provjera: 2/3 + 1/3 = 1 = cijela težišnica ✓; 18 + 9 = 27 ✓."]
  },
  {
    id:30,
    type:"sa",
    topic:"geom",
    points:1,
    q:"Duljina kraka jednakokračnoga trokuta iznosi 12 cm, a mjera kuta između krakova 64°. Kolika je duljina visine na osnovicu toga trokuta?",
    sol:{ans:"≈ 10,18 cm",alt:["10,18","≈ 10,18 cm","10,18 cm","≈ 10,18"]},
    steps:[{txt:"Jednakokračan trokut: dva jednaka kraka i osnovica."},{txt:"Kut između krakova (na vrhu) = 64° → simetrala tog kuta dijeli ga na dva kuta od 32°."},{txt:"Simetrala kuta na vrhu = visina na osnovicu (u jednakokračnom trokutu)."},{txt:"Pravokutni trokut s krakom (hipotenuza) = 12 i kutom 32° na vrhu."},{txt:"Visina (kateta uz kut 32°): v = 12 · cos(32°) ≈ 12 · 0,8480 ≈ 10,18 cm."},{txt:"Točan odgovor: v ≈ 10,18 cm.",note:"odgovor",final:true},{txt:"Provjera: pola osnovice = 12 · sin(32°) ≈ 6,36 cm; Pitagora: 10,18² + 6,36² ≈ 103,6 + 40,5 ≈ 144 = 12² ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) razdvoji u dva pravokutna trokuta (visinom). 2) trigonometrija (cos za visinu).",note:"postupak",final:true},{txt:"Intuicija: visina na osnovicu = projekcija kraka na pravac visine; cos kuta na vrhu daje tu projekciju.",note:"intuicija",final:true}],
    why:["Pravila: u jednakokračnom trokutu visina na osnovicu = simetrala kuta na vrhu = simetrala osnovice; cos(α) = priležeća/hipotenuza u pravokutnom trokutu.","Postupak: 1) podijeli kut na vrhu pola. 2) pravokutni trokut s krakom kao hipotenuzom. 3) cos(α/2) za visinu.","Intuicija: visina iz vrha jednakokračnog trokuta = \"raspoređuje\" trokut simetrično.","Česta greška 1: koristiti sin umjesto cos (zamijeniti uloge katete).","Česta greška 2: koristiti pun kut 64° umjesto pola (32°).","Alt metoda — kosinusov poučak: osnovica² = 12² + 12² − 2·12·12·cos(64°); zatim P = (1/2)·a·v za visinu.","Provjera Pitagorom: v² + (a/2)² = krak² → 10,18² + 6,36² ≈ 144 = 12² ✓."]
  },
  {
    id:"31,1",
    type:"sa",
    topic:"br",
    points:1,
    context:"Zadatak 31 (1. dio od 2):",
    q:"Zadani su brojevi A = 405 · 10⁹⁸ i B = 12,15 · 10¹⁰⁰. Zapišite broj A u znanstvenome (eksponencijalnome) zapisu.",
    sol:{ans:"4,05 · 10¹⁰⁰",alt:["4,05 · 10¹⁰⁰","4,05 · 10^100","4,05·10^100","4,05 · 10^100"]},
    steps:[{txt:"Znanstveni zapis broja: a · 10ᵏ, gdje je 1 ≤ |a| < 10 (mantisa između 1 i 10) i k ∈ ℤ (eksponent)."},{txt:"Trenutni broj A = 405 · 10⁹⁸ — koeficijent 405 NIJE u intervalu ⟨1, 10⟩, treba korigirati."},{txt:"Rastavi 405 = 4,05 · 100 = 4,05 · 10² (pomakni decimalnu zarez 2 mjesta lijevo)."},{txt:"Spoji: 405 · 10⁹⁸ = 4,05 · 10² · 10⁹⁸ = 4,05 · 10^(2+98) = 4,05 · 10¹⁰⁰."},{txt:"Provjeri uvjet: 1 ≤ 4,05 < 10 ✓."},{txt:"Točan odgovor: 4,05 · 10¹⁰⁰.",note:"odgovor",final:true},{txt:"Provjera vraćanjem natrag: 4,05 · 10² = 405; 4,05 · 10¹⁰⁰ = 405 · 10⁹⁸ ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) pomakni decimalnu zarez tako da mantisa bude u ⟨1, 10⟩. 2) kompenziraj eksponent (svaki pomak udesno smanjuje eksponent, lijevo povećava).",note:"postupak",final:true},{txt:"Intuicija: znanstveni zapis je \"standardiziran oblik\" — broj uvijek izgleda kao \"nešto između 1 i 10 puta potencija od 10\". Lakše uspoređivanje veličina.",note:"intuicija",final:true}],
    why:["Pravilo: znanstveni zapis a · 10ᵏ traži 1 ≤ |a| < 10 (jedna znamenka prije decimalne zareza). Svaki \"pomak zareza\" za 1 mjesto ekvivalentan je promjeni eksponenta za ±1.","Postupak: 1) pomakni decimalnu zarez do oblika \"X,YZ...\" (jedna nenul znamenka prije zareza). 2) prebroji koliko si pomakao mjesta (n). 3) ako udesno → eksponent − n; ako ulijevo → eksponent + n.","Intuicija: 405 = 4,05 · 100 (decimal je \"pomaknut\" 2 mjesta ulijevo iz \"405,0\" u \"4,05\"); 100 = 10², pa se \"podiže\" eksponent za 2.","Česta greška 1: ostaviti 405 (nije u ⟨1, 10⟩) ili pisati 0,405 · 10¹⁰¹ (manje od 1, ne zadovoljava). Pravilan oblik je SAMO 4,05 · 10¹⁰⁰.","Česta greška 2: pomaknuti zarez ali ne mijenjati eksponent (ili krivi smjer). 405 → 4,05 znači \"podijeli s 100\"; da kompenziraš, \"pomnoži s 100\" znači + 2 u eksponentu (10⁹⁸ → 10¹⁰⁰).","Alt metoda — bez stupnja: napisati 405 · 10⁹⁸ kao 405,0 · 10⁹⁸; pomakni 2 mjesta lijevo → 4,05; sad treba eksponent veći za 2: 10⁹⁸⁺² = 10¹⁰⁰.","Provjera redom veličine: 4,05 · 10¹⁰⁰ je 4 sa 100 znamenki iza; 405 · 10⁹⁸ je 4 sa 98 znamenki iza + tri jedinice = ukupno isti broj znamenki ✓."]
  },
  {
    id:"31,2",
    type:"sa",
    topic:"br",
    points:1,
    context:"Zadatak 31 (2. dio od 2):",
    q:"Zadani su brojevi A = 405 · 10⁹⁸ i B = 12,15 · 10¹⁰⁰. Koliko je puta broj B veći od broja A?",
    sol:{ans:"3",alt:["3","tri","3 puta","3 puta veći"]},
    steps:[{txt:"\"Koliko je puta B veći od A\" = omjer [FRAC:B|A]."},{txt:"Razdvoji koeficijente i potencije: [FRAC:B|A] = [FRAC:12,15 · 10¹⁰⁰|405 · 10⁹⁸] = [FRAC:12,15|405] · [FRAC:10¹⁰⁰|10⁹⁸]."},{txt:"[FRAC:10¹⁰⁰|10⁹⁸] = 10^(100−98) = 10² = 100 (pravilo dijeljenja istih baza: oduzmi eksponente)."},{txt:"[FRAC:12,15|405] = 0,03 (provjera: 0,03 · 405 = 12,15 ✓)."},{txt:"Spoji: [FRAC:B|A] = 0,03 · 100 = 3."},{txt:"B je 3 puta veći od A."},{txt:"Točan odgovor: 3.",note:"odgovor",final:true},{txt:"Provjera: B = 3 · A → 3 · 405 · 10⁹⁸ = 1215 · 10⁹⁸ = 12,15 · 10¹⁰⁰ ✓ (treba ići korak natrag uz pomicanje decimalne zareza).",note:"verifikacija",final:true},{txt:"Postupak: 1) postavi omjer. 2) razdvoji koeficijente i potencije. 3) primijeni pravila potencija (dijeljenje = oduzimanje eksponenata).",note:"postupak",final:true},{txt:"Intuicija: kad uspoređuješ brojeve u znanstvenom zapisu, \"razdvoji\" mantisu i eksponent — usporedi ih posebno.",note:"intuicija",final:true}],
    why:["Pravila potencija: dijeljenje s istom bazom: [FRAC:aᵐ|aⁿ] = a^(m−n); za znanstveni zapis: [FRAC:a · 10ᵏ|b · 10ˡ] = [FRAC:a|b] · 10^(k−l).","Postupak: 1) razdvoji koeficijente i potencije. 2) izračunaj omjer koeficijenata. 3) izračunaj razliku eksponenata. 4) spoji.","Intuicija: \"koliko puta veći\" znači dijeljenje; \"x puta veći\" znači x = [FRAC:većei|manji].","Česta greška 1: zbrojiti eksponente kod dijeljenja: 10¹⁰⁰ / 10⁹⁸ = 10^(100+98) = 10¹⁹⁸ (krivo). Treba ODUZETI: 10^(100−98) = 10².","Česta greška 2: dijeliti brojeve direktno bez razdvajanja: [FRAC:12,15 · 10¹⁰⁰|405 · 10⁹⁸] računati kao da su sve množitelji u jednoj liniji — laka greška za eksponente.","Alt metoda: pretvori oba broja u znanstveni zapis prvo: A = 4,05 · 10¹⁰⁰ (iz prvog dijela), B = 12,15 · 10¹⁰⁰. Sad isti eksponent: [FRAC:B|A] = [FRAC:12,15|4,05] = 3 ✓.","Provjera: 3 · A = 3 · 4,05 · 10¹⁰⁰ = 12,15 · 10¹⁰⁰ = B ✓; uspoređivanje koeficijenata: 12,15 / 4,05 = 3 ✓."]
  },
  {
    id:"32,1",
    img:true,
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 32 (1. dio od 2): Trokuti ABC i CDE; C je sjecište dužina AD i BE. Dani: |AB| = 20 cm, |AC| = 16,8 cm, |CD| = 4,2 cm, ∠EDC = ∠BAC = 60°.",
    q:"Koliko iznosi |BC|?",
    intermediates:[400, 282.24, 682.24, 336, 346.24, 18.61],
    sol:{ans:"≈ 18,61 cm",alt:["18,61","≈ 18,61 cm","18,61 cm"]},
    steps:[{txt:"Trokuti ABC i CDE imaju jednake kutove (∠BAC = ∠EDC = 60°; ∠ACB = ∠DCE — vršni); → SLIČNI."},{txt:"Omjer sličnosti: k = |CD|/|AC| = 4,2/16,8 = 1/4 (CDE manji 4× od ABC)."},{txt:"|BC| možemo izračunati preko kosinusovog poučka u trokutu ABC."},{txt:"Kosinusov poučak: |BC|² = |AB|² + |AC|² − 2·|AB|·|AC|·cos(60°)."},{txt:"|BC|² = 400 + 282,24 − 2·20·16,8·(0,5) = 682,24 − 336 = 346,24."},{txt:"|BC| = √346,24 ≈ 18,61 cm."},{txt:"Točan odgovor: |BC| ≈ 18,61 cm.",note:"odgovor",final:true},{txt:"Provjera: trokut ABC s a = 20, b = 16,8, kut 60° između → c² = 400 + 282,24 − 336 = 346,24 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) primijeni kosinusov poučak za 3. stranicu kad su poznate 2 stranice + uključeni kut.",note:"postupak",final:true},{txt:"Intuicija: za 60° kut, cos(60°) = 1/2, što pojednostavljuje formulu.",note:"intuicija",final:true}],
    why:["Pravila: trokuti slični po AA (Angle-Angle); kosinusov poučak: c² = a² + b² − 2ab·cos(C).","Postupak: 1) prepoznaj sličnost (omogućuje 2. dio). 2) primijeni kosinusov poučak za 3. stranicu.","Intuicija: ako znaš 2 stranice + kut između, koristi kosinusov poučak za 3.","Česta greška 1: koristiti Pitagoru bez pažnje (vrijedi samo za 90°).","Česta greška 2: pomiješati uloge stranica u formuli.","Alt metoda — sinusov poučak ako su poznati svi kutovi (ovdje moramo prvo izračunati 3. kut).","Provjera dimenzionalno: 18,61 cm ∈ (|20 − 16,8|, 20 + 16,8) = (3,2, 36,8) ✓."]
  },
  {
    id:"32,2",
    img:true,
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 32 (2. dio od 2): Trokuti ABC i CDE slični (iz 1. dijela), k = 4.",
    q:"Koliko iznosi |ED|?",
    sol:{ans:"5 cm",alt:["5","5cm","5 cm"]},
    steps:[{txt:"Iz 1. dijela: trokuti slični s omjerom k = |AC|/|CD| = 16,8/4,2 = 4 (ABC veći)."},{txt:"Sličnost: sve stranice ABC = 4× odgovarajuće stranice CDE."},{txt:"|AB| odgovara |ED| u sličnosti (kutovi nasuprotni); dakle |AB| = 4·|ED|."},{txt:"20 = 4·|ED| → |ED| = 5 cm."},{txt:"Točan odgovor: |ED| = 5 cm.",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: |ED| = 5 cm < |AB| = 20 cm (manji trokut) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) omjer sličnosti k. 2) odgovarajuće stranice u proporciji.",note:"postupak",final:true},{txt:"Intuicija: slični trokuti — svi parovi odgovarajućih stranica imaju isti omjer k.",note:"intuicija",final:true}],
    why:["Pravila: slični trokuti — odgovarajuće stranice u istom omjeru (k); odgovarajuće stranice su nasuprotne istim kutovima.","Postupak: 1) izračunaj k iz parova poznatih. 2) primijeni za nepoznatu.","Intuicija: cijeli mali trokut je \"k puta manja kopija\" velikog.","Česta greška 1: koristiti pogrešne parove stranica (ne nasuprotne istim kutovima).","Česta greška 2: pomnožiti umjesto podijeliti (ovisno o smjeru sličnosti).","Alt metoda — kroz svake stranice: |EC| = |BC|/4; |CD| = |AC|/4 (već poznato).","Provjera: |EC| = 18,61/4 ≈ 4,65 cm; opseg manjeg = 4,2 + 5 + 4,65 ≈ 13,85 cm; opseg većeg = 16,8 + 20 + 18,61 ≈ 55,41 cm; omjer ≈ 4 ✓."]
  },
  {
    id:"33,1",
    type:"sa",
    topic:"trig",
    points:1,
    context:"Zadatak 33 (1. dio od 2): Pravokutni trokut s katetama 5 cm i 12 cm.",
    q:"Koliko iznosi mjera najmanjega kuta toga trokuta?",
    sol:{ans:"22°37'12\"",alt:["22°37'12\"","≈ 22,62°","22,62°","≈ 22°37'"]},
    steps:[{txt:"Najmanji kut leži nasuprot najkraćoj stranici (5 cm)."},{txt:"U pravokutnom trokutu s katetama 5 i 12: tan(α) = nasuprotna/priležeća = 5/12."},{txt:"α = arctan(5/12) ≈ 22,6199°."},{txt:"Konverzija u stupnjeve, minute, sekunde: 22° + 0,6199·60' = 22° 37,20'; 0,20·60\" = 12\"."},{txt:"α ≈ 22°37'12\"."},{txt:"Točan odgovor: α ≈ 22°37'12\".",note:"odgovor",final:true},{txt:"Provjera: 5/12 ≈ 0,4167; tan(22,6°) ≈ 0,4167 ✓; trokut (5, 12, 13) je standardni Pitagorin trojac.",note:"verifikacija",final:true},{txt:"Postupak: 1) najkraća kateta → najmanji kut nasuprot. 2) tan = nasuprotna/priležeća. 3) arctan + konverzija u DMS.",note:"postupak",final:true},{txt:"Intuicija: u pravokutnom trokutu, kutovi su nasuprot katetama; veća kateta → veći kut.",note:"intuicija",final:true}],
    why:["Pravila: tan(α) = opp/adj; arctan vraća kut u stupnjevima/radijanima; 1° = 60', 1' = 60\".","Postupak: 1) najkraća stranica → najmanji nasuprotni kut. 2) tan iz omjera. 3) arctan. 4) konverzija u DMS.","Intuicija: kut \"vidi\" nasuprotnu stranicu — manja stranica izgleda manjom iz suprotne vrh.","Česta greška 1: koristiti hipotenuzu kao priležeću katetu.","Česta greška 2: pomiješati sin/cos/tan.","Alt metoda: sin(α) = 5/13 → α = arcsin(5/13) ≈ 22,62° (isto); cos(α) = 12/13 → α = arccos(12/13) ≈ 22,62°.","Provjera: α + β = 90°; β ≈ 67,38° → α + β ≈ 90° ✓."]
  },
  {
    id:"33,2",
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 33 (2. dio od 2): Iz prvog dijela zadatka — pravokutni trokut s katetama 5 cm i 12 cm.",
    q:"Koliko iznosi volumen uspravne trostrane prizme visine 10 cm kojoj je baza zadani pravokutni trokut?",
    sol:{ans:"300 cm³",alt:["300","300 cm³","300 cm3","V = 300 cm³"]},
    steps:[{txt:"Volumen prizme: V = P_baze · v_prizme, gdje je P_baze površina baze i v_prizme visina prizme."},{txt:"Baza je pravokutni trokut s katetama a = 5 cm, b = 12 cm."},{txt:"Površina pravokutnog trokuta: P = [FRAC:1|2] · a · b = [FRAC:1|2] · 5 · 12 = [FRAC:60|2] = 30 cm²."},{txt:"Visina prizme: v = 10 cm."},{txt:"Volumen: V = 30 · 10 = 300 cm³."},{txt:"Točan odgovor: V = 300 cm³.",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: cm² (površina) · cm (duljina) = cm³ ✓; broj 300 razumna vrijednost (manji od kocke 10·10·10 = 1000 cm³, kao i treba biti za malu prizmu).",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj površinu baze (pravokutni trokut: [FRAC:1|2]·a·b). 2) pomnoži s visinom prizme. 3) jedinica cm³.",note:"postupak",final:true},{txt:"Intuicija: prizma = \"izvučen\" 2D oblik u 3D; volumen = površina · visina \"izvlačenja\".",note:"intuicija",final:true}],
    why:["Pravilo: V prizme = P_baze · v_prizme (vrijedi za prizme bilo koje baze — općenita formula). Za pravokutni trokut s katetama a, b: P = [FRAC:ab|2].","Postupak: 1) izračunaj P baze prema obliku (trokut, kvadrat, peterokut...). 2) pomnoži s visinom prizme. 3) jedinica cm³ (ili m³ ovisno o ulazu).","Intuicija: prizma se može zamisliti kao \"stog\" identičnih 2D oblika visine 1 (ili bilo koje); volumen je proporcionalan visini stoga.","Česta greška 1: koristiti formulu za piramidu V = [FRAC:1|3] · P_baze · v (vrijedi za stošce i piramide, ne prizme). Za prizme NEMA 1/3.","Česta greška 2: pomiješati visinu trokuta (= 5 ili 12 cm) s visinom prizme (= 10 cm). To su različite stvari.","Alt metoda — direktno: prizma = pravokutni trokut \"izvučen\" 10 cm visine; volumen = (površina trokuta) · 10 = 30 · 10 = 300 cm³.","Provjera s drugim primjerom: kvadrat sa stranicom 10 cm i prizma visine 10 cm = kocka V = 1000 cm³. Naš trokutni \"presjek\" je 30 cm² što je 30% od 100 cm² kvadrata, pa V je 30% od 1000 = 300 ✓."]
  },
  {
    id:"34,1",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 34 (1. dio od 2): Taksist naplaćuje 4 € za prvih 5 km; 1 € za svaki idući započeti km.",
    q:"Koliko se najviše kilometara vozila osoba koja je vožnju platila 12 €?",
    sol:{ans:"13",alt:["13 km","13"]},
    steps:[{txt:"Prvih 5 km = 4 €. Preostalih 12 − 4 = 8 € za dodatne km."},{txt:"Svaki idući km = 1 € → 8 € = 8 dodatnih kilometara."},{txt:"Ukupno: 5 + 8 = 13 km."},{txt:"Točan odgovor: 13 km.",note:"odgovor",final:true},{txt:"Provjera: 5 km · početna + 8 dodatnih · 1 € = 4 + 8 = 12 € ✓.",note:"verifikacija",final:true},{txt:"Provjera ruba: za 12 € možeš platiti TOČNO 13 km; pri 14. km cijena bi bila 13 € (počinje 9. dodatni).",note:"diagnostika",final:true},{txt:"Postupak: 1) odbij fiksni dio (4 € za 5 km). 2) podijeli ostatak s cijenom po km.",note:"postupak",final:true},{txt:"Intuicija: tarifa ima fiksni početak + varijabilni dio — odvoji ih.",note:"intuicija",final:true}],
    why:["Pravila: linearna funkcija s \"stepenicama\" — fiksni početak + linearni dio nakon praga.","Postupak: 1) iznad praga? 2) odbij fiksni dio. 3) ostatak / cijena po jedinici.","Intuicija: \"najviše km za 12 €\" → koliko km možeš platiti.","Česta greška 1: dijeliti 12 € direktno s 1 €/km = 12 km (zaboraviti fiksni dio za prvih 5).","Česta greška 2: zaboraviti uračunati u prvih 5 km u ukupno (dati samo 8).","Alt metoda — funkcija: C(k) = 4 (k ≤ 5) ili 4 + (k−5)·1 = k − 1 (k > 5); 12 = k − 1 → k = 13.","Provjera s drugim primjerom: za 8 € → k − 1 = 8 → k = 9 km (5 osnovnih + 4 dodatnih); 4 + 4 = 8 € ✓."]
  },
  {
    id:"34,2",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 34 (2. dio od 2): Tarifa: 4 € za prvih 5 km, 1 € za svaki idući započeti km.",
    q:"Napišite pravilo pridruživanja (formulu) ovisnosti cijene vožnje C o broju k započetih kilometara za vožnju dulju od 5 kilometara.",
    sol:{ans:"C(k) = k − 1",alt:["C = k - 1","C(k)=k-1","C(k) = k − 1 (€)"]},
    steps:[{txt:"Za k > 5: cijena = 4 € (početnih 5 km) + 1 €·(k − 5) (dodatni km)."},{txt:"C(k) = 4 + (k − 5) = 4 + k − 5 = k − 1."},{txt:"Točan odgovor: C(k) = k − 1.",note:"odgovor",final:true},{txt:"Provjera: k = 5 → C = 4 (rub valjanosti); k = 13 → C = 12 ✓; k = 10 → C = 9 €.",note:"verifikacija",final:true},{txt:"Provjera za k = 6 (prvi km iznad praga): C = 5 € (4 + 1·(6−5)); formula daje 6 − 1 = 5 ✓.",note:"diagnostika",final:true},{txt:"Postupak: 1) početni iznos. 2) dodatni iznos kao linearna funkcija. 3) pojednostavi.",note:"postupak",final:true},{txt:"Intuicija: formula u obliku \"fiksno + varijabilno\" — pojednostavi grupiranjem.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = C(k) = k − 1 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
    why:["Pravila: po dijelovima definirane funkcije; linearna ovisnost iznad praga.","Postupak: 1) formula prije i poslije praga. 2) za k > 5 koristi gradijent.","Intuicija: cijena raste linearno s nagibom 1 €/km nakon praga.","Česta greška 1: napisati C(k) = 4 + k (zaboraviti odbiti početnih 5 km koje su već u 4 €).","Česta greška 2: C(k) = 4 + k/1 = 4 + k (ista greška, dijeljenje cijena umjesto razlike).","Alt metoda — vizualno: graf je linearan s nagibom 1, počinje u točki (5, 4); jednadžba y = 1·(x − 5) + 4 = x − 1.","Provjera s ekstremnim k: k = 100 → C = 99 € (95 km iznad praga · 1 € + 4 €) ✓."]
  },
  {
    id:"35,1",
    img:true,
    type:"sa",
    topic:"stat",
    points:1,
    context:"Zadatak 35 (1. dio od 2): Kružni dijagrami pokazuju postotke noćenja stranih gostiju po županijama 2011. i 2021. godine.",
    q:"U kojoj je županiji zabilježen najveći porast postotka noćenja stranih gostiju 2021. u odnosu na 2011. godinu?",
    sol:{ans:"U Splitsko-dalmatinskoj županiji",alt:["Splitsko-dalmatinska","Splitsko-dalmatinska županija","Splitsko-dalmatinskoj"]},
    steps:[{txt:"Usporedi postotke svake županije 2011 → 2021."},{txt:"Istarska: 33,69 → 32,94 (−0,75); pad."},{txt:"Primorsko-goranska: 19,00 → 17,58 (−1,42); pad."},{txt:"Splitsko-dalmatinska: 17,21 → 19,52 (+2,31); RAST."},{txt:"Zadarska: 10,24 → 11,18 (+0,94); rast."},{txt:"Dubrovačko-neretvanska: 8,15 → 6,74 (−1,41); pad."},{txt:"Šibensko-kninska: 6,35 → 5,92 (−0,43); pad."},{txt:"Ostale: 5,36 → 6,12 (+0,76); rast."},{txt:"Najveći porast: Splitsko-dalmatinska +2,31 percentnih bodova."},{txt:"Točan odgovor: U Splitsko-dalmatinskoj županiji.",note:"odgovor",final:true},{txt:"Provjera: tri županije imaju rast (Splitsko, Zadar, Ostale); najveći je Splitsko-dalmatinska ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj razliku za svaku županiju. 2) prepoznaj najveću pozitivnu.",note:"postupak",final:true},{txt:"Intuicija: porast = 2021 − 2011 > 0 (apsolutna razlika postotaka).",note:"intuicija",final:true}],
    why:["Pravila: porast postotka = postotak_novi − postotak_stari (razlika percentnih bodova).","Postupak: 1) tablica usporedbi. 2) razlike. 3) max pozitivna.","Intuicija: pažnja — \"porast u %\" je razlika postotnih bodova, ne relativna promjena.","Česta greška 1: dati pad (negativan porast) — npr. Istarska je smanjena, ne porasla.","Česta greška 2: izračunati relativnu promjenu ((novi - stari)/stari) umjesto razlike percentnih bodova.","Alt metoda — sortiraj sve razlike, najveća pozitivna je odgovor.","Provjera: provjeri da Splitsko-dalmatinska JE u oba dijagrama (postoji za usporedbu) ✓."]
  },
  {
    id:"35,2",
    img:true,
    type:"sa",
    topic:"stat",
    points:1,
    context:"Zadatak 35 (2. dio od 2): U Dubrovačko-neretvanskoj županiji 2011. godine ostvareno 4 462 940 noćenja (= 8,15 % od ukupno).",
    q:"Koliko je ukupno ostvareno noćenja stranih gostiju 2011. godine?",
    sol:{ans:"54 760 000",alt:["54760000","~ 54 760 000","≈ 54 760 000"]},
    steps:[{txt:"8,15 % od ukupno = 4 462 940."},{txt:"Ukupno = [FRAC:4 462 940|0,0815] = 54 759 386,5 ≈ 54 760 000 (zaokruženo na tisuće)."},{txt:"Točan odgovor: ≈ 54 760 000 noćenja.",note:"odgovor",final:true},{txt:"Provjera: 54 760 000 · 0,0815 = 4 462 940 ≈ 4 462 940 ✓.",note:"verifikacija",final:true},{txt:"Provjera proporcijom: ako je 8,15 % = 4 462 940, onda je 100 % = (4 462 940/8,15) · 100 = 54 759 386 ≈ 54 760 000 ✓.",note:"diagnostika",final:true},{txt:"Postupak: 1) postavi postotak. 2) podijeli s decimalnim postotkom (ili pomnoži s 100/postotak).",note:"postupak",final:true},{txt:"Intuicija: ako 1 dio = x, ukupno = x · (100/postotak).",note:"intuicija",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}],
    why:["Pravila: postotak P % od ukupnog T = (P/100)·T; obrnuto: T = vrijednost / (P/100) = vrijednost · 100 / P.","Postupak: 1) zna se \"dio\" i \"postotak\"; 2) ukupno = dio · 100 / postotak.","Intuicija: ako 8,15 % je oko 4,5 milijuna, onda je 100 % oko 12× više = ~55 milijuna.","Česta greška 1: pomnožiti dio s postotkom (ne podijeliti) → 4 462 940 · 0,0815 = ~364 000 (besmisleno malo).","Česta greška 2: ne raditi razliku između postotka u % i decimalu (8,15 vs 0,0815).","Alt metoda — proporcija: 8,15 / 100 = 4 462 940 / T → T = 4 462 940 · 100 / 8,15 ≈ 54 760 000.","Provjera s drugom županijom: Istarska 33,69 % od 54 760 000 ≈ 18,447 milijuna — razuman broj za vodeću turističku županiju ✓."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2025_jesen",razina:"B",serial:"D-S069",totalPoints:40,mcCount:20,saCount:20,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2025_jesen_B__11": () => e(Svg11_2025Bjes, null),
  "2025_jesen_B__17": () => e(Svg17_2025Bjes, null),
  "2025_jesen_B__18": () => e(Svg18_2025Bjes, null),
  "2025_jesen_B__19": () => e(Svg19_2025Bjes, null),
  "2025_jesen_B__22": () => e(Svg22_2025Bjes, null),
  "2025_jesen_B__25": () => e(Svg25_2025Bjes, null),
  "2025_jesen_B__32.1": () => e(Svg32_2025Bjes, null),
  "2025_jesen_B__32.2": () => e(Svg32_2025Bjes, null),
  "2025_jesen_B__35.1": () => e(Svg35_2025Bjes, null),
  "2025_jesen_B__35.2": () => e(Svg35_2025Bjes, null),
};
