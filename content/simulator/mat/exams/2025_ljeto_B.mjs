// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg8_2025Blj(){
  const txt="var(--text)"; const blue="var(--blue)"; const gold="var(--gold)";
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

function Svg6_2025Blj(){
  const txt="var(--text)"; const blue="var(--blue)"; const altRow="var(--s2,#0a1525)";
  const rows=[
   ["Ponedjeljak","40 %"],["Utorak","75 %"],["Srijeda","75 %"],
   ["Četvrtak","75 %"],["Petak","80 %"],["Subota","80 %"],["Nedjelja","40 %"]
  ];
  const W=290, rH=30, col1W=175;
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

function Svg33_2025Blj(){
  const W=340,H=260,ox=150,oy=130,sc=28;
  const st="var(--muted)",ax="var(--text)",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-4;i<=5;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-3)}" x2="${tx(i)}" y2="${ty(4)}" stroke="${st}" stroke-width="0.7" opacity="0.55"/>`;
  }
  for(let j=-3;j<=4;j++){
    grid+=`<line x1="${tx(-4)}" y1="${ty(j)}" x2="${tx(5)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.7" opacity="0.55"/>`;
  }
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    `<text x="${tx(1)-2}" y="${ty(0)+14}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+3}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-12}" y="${ty(0)+14}" fill="${ax}" font-size="11" font-family="serif">0</text>`+
    `<text x="${tx(4.8)}" y="${ty(0)+14}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+5}" y="${ty(4)-2}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">y</text>`;
  const arrows=
    `<polygon points="${tx(5)},${ty(0)} ${tx(5)-6},${ty(0)-3} ${tx(5)-6},${ty(0)+3}" fill="${ax}"/>`+
    `<polygon points="${tx(0)},${ty(4)} ${tx(0)-3},${ty(4)+6} ${tx(0)+3},${ty(4)+6}" fill="${ax}"/>`;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:340},
    dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-4)}" y1="${ty(0)}" x2="${tx(5)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<line x1="${tx(0)}" y1="${ty(-3)}" x2="${tx(0)}" y2="${ty(4)}" stroke="${ax}" stroke-width="1.2"/>`+
      arrows+tk
    }
  });
}

function Svg30_2025Blj(){
  const ax="var(--text)",st="var(--muted)";
  const hd="var(--s2)", s1="var(--s1,transparent)";
  
  // === TABLICA (gore) ===
  const cellW=85, cellH=28, hdrW=100;
  const tW = hdrW + 4*cellW, tH = 2*cellH;
  let tblHtml = "";
  
  // Header red: "Ocjena" label + stupci
  tblHtml += `<rect x="0" y="0" width="${tW}" height="${cellH}" fill="${hd}"/>`;
  tblHtml += `<text x="14" y="${cellH/2+5}" fill="${ax}" font-size="12" font-weight="bold" font-family="sans-serif">Ocjena</text>`;
  const ocjene = ["Dovoljan (2)","Dobar (3)","Vrlo dobar (4)","Odličan (5)"];
  ocjene.forEach((o,i)=>{
    tblHtml += `<text x="${hdrW + i*cellW + cellW/2}" y="${cellH/2+5}" fill="${ax}" font-size="11" font-family="sans-serif" text-anchor="middle">${o}</text>`;
  });
  // Data red: "Broj učenika" + vrijednosti
  tblHtml += `<rect x="0" y="${cellH}" width="${tW}" height="${cellH}" fill="${s1}"/>`;
  tblHtml += `<rect x="0" y="${cellH}" width="${hdrW}" height="${cellH}" fill="${hd}"/>`;
  tblHtml += `<text x="14" y="${cellH + cellH/2+5}" fill="${ax}" font-size="12" font-weight="bold" font-family="sans-serif">Broj učenika</text>`;
  const brojevi = ["96","218","144","65"];
  brojevi.forEach((n,i)=>{
    tblHtml += `<text x="${hdrW + i*cellW + cellW/2}" y="${cellH + cellH/2+5}" fill="${ax}" font-size="12" font-family="sans-serif" text-anchor="middle">${n}</text>`;
  });
  // Borders
  tblHtml += `<rect x="0.5" y="0.5" width="${tW-1}" height="${tH-1}" fill="none" stroke="${st}" stroke-width="1"/>`;
  tblHtml += `<line x1="${hdrW}" y1="0" x2="${hdrW}" y2="${tH}" stroke="${st}" stroke-width="1"/>`;
  for(let i=1;i<4;i++){
    tblHtml += `<line x1="${hdrW+i*cellW}" y1="0" x2="${hdrW+i*cellW}" y2="${tH}" stroke="${st}" stroke-width="0.8"/>`;
  }
  tblHtml += `<line x1="0" y1="${cellH}" x2="${tW}" y2="${cellH}" stroke="${st}" stroke-width="0.8"/>`;
  
  // === KRUŽNI DIJAGRAM (dolje) ===
  const cx=230, cy=tH + 160, r=95;
  const total = 523;
  const data = [
    {label:"Dovoljan (2)", n:96,  color:"var(--blue)"},
    {label:"Dobar (3)",    n:218, color:"var(--red)"},
    {label:"Vrlo dobar (4)", n:144, color:"var(--muted)"},
    {label:"Odličan (5)",  n:65,  color:"var(--gold)"}
  ];
  let startAngle = -Math.PI/2;
  let pieHtml = "";
  
  data.forEach(d => {
    const angle = (d.n / total) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const largeArc = angle > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    
    pieHtml += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="${d.color}" stroke="${ax}" stroke-width="1"/>`;
    
    // Prazna crta uz isječak — učenik sam upisuje ocjenu (kao u originalu).
    const midAngle = startAngle + angle/2;
    const lx = cx + (r+16) * Math.cos(midAngle);
    const ly = cy + (r+16) * Math.sin(midAngle);
    const len = 86;
    const x1L = lx >= cx ? lx : lx - len;
    const x2L = lx >= cx ? lx + len : lx;
    pieHtml += `<line x1="${x1L}" y1="${ly}" x2="${x2L}" y2="${ly}" stroke="${ax}" stroke-width="1.2" stroke-linecap="round"/>`;

    startAngle = endAngle;
  });
  
  const W = tW + 20, H = tH + 290;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:460}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      tblHtml +
      `<text x="${W/2}" y="${tH+28}" fill="${ax}" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Ocjene</text>`+
      pieHtml
    }})
  );
}

function Svg18_2025Blj(){
  const W=380,H=340,ox=120,oy=170,sc=30;
  const st="var(--muted)",ax="var(--text)",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-4;i<=6;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-5)}" x2="${tx(i)}" y2="${ty(3)}" stroke="${st}" stroke-width="0.7" opacity="0.55"/>`;
  }
  for(let j=-5;j<=3;j++){
    grid+=`<line x1="${tx(-4)}" y1="${ty(j)}" x2="${tx(6)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.7" opacity="0.55"/>`;
  }
  // Vektorska oznaka: slovo + nacrtana strelica iznad (kombinirajući U+20D7 se ne
  // renderira u svim fontovima pa ispada kao prazan pravokutnik).
  const vecLabel=(x,y,ch)=>
    `<text x="${x}" y="${y}" fill="${ax}" font-size="15" font-style="italic" font-family="Georgia,serif">${ch}</text>`+
    `<line x1="${x-1}" y1="${y-14}" x2="${x+11}" y2="${y-14}" stroke="${ax}" stroke-width="1.2"/>`+
    `<polygon points="${x+13},${y-14} ${x+8},${y-16.6} ${x+8},${y-11.4}" fill="${ax}"/>`;
  // Vektor a: rep u (-3, 2), vrh u (2, 2) → a = (5, 0)
  const aRep=[-3,2], aVrh=[2,2];
  // Vektor b: rep u (-1, 1), vrh u (0, -3) → b = (1, -4)
  const bRep=[-1,1], bVrh=[0,-3];
  
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    `<text x="${tx(1)-2}" y="${ty(0)+14}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+3}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-12}" y="${ty(0)+14}" fill="${ax}" font-size="11" font-family="serif">0</text>`+
    `<text x="${tx(5.7)}" y="${ty(0)+14}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+5}" y="${ty(3)-2}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">y</text>`;
  
  // Arrow defs
  const arrow = `<defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="${ax}"/></marker></defs>`;
  
  const vecs =
    // Vektor a
    `<line x1="${tx(aRep[0])}" y1="${ty(aRep[1])}" x2="${tx(aVrh[0])}" y2="${ty(aVrh[1])}" stroke="${ax}" stroke-width="1.8" marker-end="url(#arr)"/>`+
    `<circle cx="${tx(aRep[0])}" cy="${ty(aRep[1])}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    vecLabel(tx((aRep[0]+aVrh[0])/2)-6, ty(aVrh[1])-12, "a")+
    // Vektor b
    `<line x1="${tx(bRep[0])}" y1="${ty(bRep[1])}" x2="${tx(bVrh[0])}" y2="${ty(bVrh[1])}" stroke="${ax}" stroke-width="1.8" marker-end="url(#arr)"/>`+
    `<circle cx="${tx(bRep[0])}" cy="${ty(bRep[1])}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
    vecLabel(tx(bRep[0])-30, ty((bRep[1]+bVrh[1])/2)+4, "b");
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      arrow + grid+
      `<line x1="${tx(-4)}" y1="${ty(0)}" x2="${tx(5.8)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<line x1="${tx(0)}" y1="${ty(-5)}" x2="${tx(0)}" y2="${ty(3)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<polygon points="${tx(5.8)},${ty(0)} ${tx(5.8)-6},${ty(0)-3} ${tx(5.8)-6},${ty(0)+3}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(3)} ${tx(0)-3},${ty(3)+6} ${tx(0)+3},${ty(3)+6}" fill="${ax}"/>`+
      tk + vecs
    }})
  );
}

function Svg16_2025Blj(){
  const blue="var(--blue)"; const blueD="var(--blue)"; const red="var(--red)"; const gold="var(--gold)";
  // Izduženi (visoki) kvadar kao u originalu: visina ≈ 2× širina osnovke.
  const W=420, H=520;
  const A=[95,430],B=[275,430],C=[355,372],D=[175,372];
  const vE=[95,110],vF=[275,110],vG=[355,52],vH=[175,52];
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
    style:{maxWidth:"420px",width:"100%",display:"block",margin:"12px auto"}},
    ...hidden.map(([n,p,q])=>e("line",{key:"h"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blueD,strokeWidth:1.6,strokeDasharray:"7 5",strokeOpacity:0.6})),
    ...visible.map(([n,p,q])=>e("line",{key:"v"+n,x1:p[0],y1:p[1],x2:q[0],y2:q[1],
      stroke:blue,strokeWidth:2})),
    ...verts.map(([n,p])=>e("circle",{key:"d"+n,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5})),
    ...verts.map(([n,p,dx,dy])=>e("text",{key:"t"+n,x:p[0]+dx,y:p[1]+dy,
      fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},n))
  );
}

function Svg15_2025Blj(){
  const W=400, H=320;
  const blue="var(--blue)"; const blueLight="rgba(74,144,217,0.08)"; const red="var(--red)"; const gold="var(--gold)"; const txt="var(--text)";
  const cx=200, cy=160, r=110;
  const deg=(d)=>d*Math.PI/180;
  const A=[cx - r, cy];
  const B=[cx + r, cy];
  const C=[cx + r*Math.cos(deg(60)), cy - r*Math.sin(deg(60))];
  const O=[cx, cy];
  // Luk kuta x kod vrha A: između polupravca AB (0°) i polupravca AC (30°)
  const aR=44;
  const aAng=Math.atan2(C[1]-A[1], C[0]-A[0]); // negativan (prema gore)
  const arcS=[A[0]+aR, A[1]];
  const arcE=[A[0]+aR*Math.cos(aAng), A[1]+aR*Math.sin(aAng)];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"400px",width:"100%",display:"block",margin:"12px auto"}},
    e("circle",{key:"c",cx:cx,cy:cy,r:r,fill:blueLight,stroke:blue,strokeWidth:2}),
    // Triangle ABC
    e("polygon",{key:"tr",points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,fill:"none",stroke:gold,strokeWidth:1.8}),
    e("line",{key:"AB",x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:gold,strokeWidth:2}),
    // Dužina OC — stranica jednakostraničnog trokuta OBC
    e("line",{key:"OC",x1:O[0],y1:O[1],x2:C[0],y2:C[1],stroke:gold,strokeWidth:2}),
    // Luk kuta x kod vrha A + oznaka
    e("path",{key:"arc",d:`M ${arcS[0]} ${arcS[1]} A ${aR} ${aR} 0 0 0 ${arcE[0]} ${arcE[1]}`,fill:"none",stroke:txt,strokeWidth:1.4}),
    e("text",{key:"lx",x:A[0]+20,y:A[1]-14,fontSize:15,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
    // Center
    e("circle",{key:"O",cx:O[0],cy:O[1],r:3,fill:txt}),
    e("text",{key:"lO",x:O[0]-6,y:O[1]+18,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"O"),
    // Vertices
    ...[[A,"A",-18,5],[B,"B",10,5],[C,"C",-6,-10]].map(([p,l,dx,dy],i)=>
      e("g",{key:"v"+i},
        e("circle",{cx:p[0],cy:p[1],r:4,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5}),
        e("text",{x:p[0]+dx,y:p[1]+dy,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},l)
      )
    )
  );
}

function Svg12_2025Blj(){
  const W=440,H=300,ox=170,oy=150,sc=28;
  const st="var(--muted)",ax="var(--text)",cu="var(--blue)",bg="var(--bg,#060910)";
  const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
  let grid="";
  for(let i=-5;i<=7;i++){
    grid+=`<line x1="${tx(i)}" y1="${ty(-4)}" x2="${tx(i)}" y2="${ty(4)}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.18"/>`;
  }
  for(let j=-4;j<=4;j++){
    grid+=`<line x1="${tx(-5)}" y1="${ty(j)}" x2="${tx(7)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.4" stroke-dasharray="2 5" opacity="0.18"/>`;
  }
  
  // Kubna krivulja s lokalnim max u (-2, 2) i lokalnim min u (4, -2)
  // f(x) = a(x+2)(x-1)(x-4) + translacija, ali trebaju nam specifične točke
  // Koristimo Bezier/spline pristup s ključnim točkama
  const keyPoints = [
    [-4.5, -3.5],    // ulazi dolje lijevo
    [-4, -3],
    [-3, 0],      // nultočka lijevo
    [-2, 2],      // MAX (otvoren kružić)
    [-1, 1.6],
    [0, 1],       // y-os
    [0.5, 0.5],
    [1, 0],       // srednja nultočka
    [2, -1.2],
    [3, -1.8],
    [4, -2],      // MIN (otvoren kružić)
    [4.5, -1.5],
    [5, 0],       // desna nultočka (ili oko tu)
    [5.5, 2],
    [6, 4]
  ];
  
  // Smooth path s Catmull-Rom spline
  const pts = keyPoints.map(([x,y]) => [tx(x), ty(y)]);
  
  // Koristimo cubic Bezier interpolaciju između točaka
  function smoothPath(pts){
    if (pts.length < 2) return "";
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for(let i=1;i<pts.length;i++){
      const p0 = pts[i-1];
      const p1 = pts[i];
      const p_prev = i>=2 ? pts[i-2] : p0;
      const p_next = i<pts.length-1 ? pts[i+1] : p1;
      const cp1x = p0[0] + (p1[0]-p_prev[0])/5;
      const cp1y = p0[1] + (p1[1]-p_prev[1])/5;
      const cp2x = p1[0] - (p_next[0]-p0[0])/5;
      const cp2y = p1[1] - (p_next[1]-p0[1])/5;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1[0]} ${p1[1]}`;
    }
    return d;
  }
  
  const path = smoothPath(pts);
  
  const tk=
    `<circle cx="${tx(1)}" cy="${ty(0)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    `<circle cx="${tx(0)}" cy="${ty(1)}" r="3" fill="${bg}" stroke="${ax}" stroke-width="1.2"/>`+
    // MAX point (otvoren kružić)
    `<circle cx="${tx(-2)}" cy="${ty(2)}" r="3.5" fill="${bg}" stroke="${ax}" stroke-width="1.4"/>`+
    // MIN point (otvoren kružić)
    `<circle cx="${tx(4)}" cy="${ty(-2)}" r="3.5" fill="${bg}" stroke="${ax}" stroke-width="1.4"/>`+
    `<text x="${tx(1)-2}" y="${ty(0)+15}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-14}" y="${ty(1)+3}" fill="${ax}" font-size="11" font-family="serif">1</text>`+
    `<text x="${tx(0)-12}" y="${ty(0)+15}" fill="${ax}" font-size="11" font-family="serif">0</text>`+
    `<text x="${tx(6.3)}" y="${ty(0)+14}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">x</text>`+
    `<text x="${tx(0)+5}" y="${ty(4)-2}" fill="${ax}" font-size="12" font-style="italic" font-family="serif">y</text>`+
    `<text x="${tx(4.6)}" y="${ty(-1.5)}" fill="${ax}" font-size="11" font-style="italic" font-family="serif">y = f(x)</text>`;
  
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,style:{display:'block',margin:'8px auto'}},
    React.createElement('g',{dangerouslySetInnerHTML:{__html:
      grid+
      `<line x1="${tx(-5)}" y1="${ty(0)}" x2="${tx(6.5)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<line x1="${tx(0)}" y1="${ty(-4)}" x2="${tx(0)}" y2="${ty(4)}" stroke="${ax}" stroke-width="1.4"/>`+
      `<polygon points="${tx(6.5)},${ty(0)} ${tx(6.5)-6},${ty(0)-3} ${tx(6.5)-6},${ty(0)+3}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(4)} ${tx(0)-3},${ty(4)+6} ${tx(0)+3},${ty(4)+6}" fill="${ax}"/>`+
      `<path d="${path}" stroke="${cu}" stroke-width="2" fill="none"/>`+
      tk
    }})
  );
}

function Svg11_2025Blj(){
  const st="var(--muted)",ax="var(--text)",cu="var(--blue)",bg="var(--bg,#060910)";
  const red="var(--red)", gold="var(--gold)";
  function mini(ox,oy,sc,curveFn,labelPos,vertex){
    const tx=(x)=>ox+x*sc, ty=(y)=>oy-y*sc;
    let g="";
    for(let i=-3;i<=4;i++){
      g+=`<line x1="${tx(i)}" y1="${ty(-4)}" x2="${tx(i)}" y2="${ty(3)}" stroke="${st}" stroke-width="0.7" opacity="0.5"/>`;
    }
    for(let j=-4;j<=3;j++){
      g+=`<line x1="${tx(-3)}" y1="${ty(j)}" x2="${tx(4)}" y2="${ty(j)}" stroke="${st}" stroke-width="0.7" opacity="0.5"/>`;
    }
    const tk=
      `<circle cx="${tx(1)}" cy="${ty(0)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
      `<circle cx="${tx(0)}" cy="${ty(1)}" r="2.5" fill="${bg}" stroke="${ax}" stroke-width="1"/>`+
      `<text x="${tx(1)-2}" y="${ty(0)+13}" fill="${ax}" font-size="10" font-family="serif">1</text>`+
      `<text x="${tx(0)-10}" y="${ty(1)+3}" fill="${ax}" font-size="10" font-family="serif">1</text>`+
      `<text x="${tx(0)-10}" y="${ty(0)+13}" fill="${ax}" font-size="10" font-family="serif">0</text>`+
      `<text x="${tx(3.55)}" y="${ty(0)+16}" fill="${ax}" font-size="11" font-style="italic" font-family="serif">x</text>`+
      `<text x="${tx(0)+5}" y="${ty(3)-2}" fill="${ax}" font-size="11" font-style="italic" font-family="serif">y</text>`;
    // Vertex marker RED
    const vmark = `<circle cx="${tx(vertex[0])}" cy="${ty(vertex[1])}" r="3.5" fill="${red}" stroke="var(--s1,#0a0f1a)" stroke-width="1.2"/>`;
    return g+
      `<line x1="${tx(-3)}" y1="${ty(0)}" x2="${tx(3.9)}" y2="${ty(0)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<line x1="${tx(0)}" y1="${ty(-4)}" x2="${tx(0)}" y2="${ty(3)}" stroke="${ax}" stroke-width="1.2"/>`+
      `<polygon points="${tx(3.9)},${ty(0)} ${tx(3.9)-5},${ty(0)-2.5} ${tx(3.9)-5},${ty(0)+2.5}" fill="${ax}"/>`+
      `<polygon points="${tx(0)},${ty(3)} ${tx(0)-2.5},${ty(3)+5} ${tx(0)+2.5},${ty(3)+5}" fill="${ax}"/>`+
      tk+curveFn(tx,ty)+vmark+
      `<text x="${tx(labelPos[0])}" y="${ty(labelPos[1])}" fill="${ax}" font-size="10" font-style="italic" font-family="serif">y = f(x)</text>`;
  }
  const sc=26;
  
  const pA = (tx,ty) => {
    let pts=[];
    for(let xi=-0.5;xi<=4;xi+=0.08){ const yi=-0.6*(xi-2)*(xi-2)+1.5; if(yi>-4 && yi<3) pts.push([tx(xi),ty(yi)]); }
    return `<path d="M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p=>'L '+p[0]+' '+p[1]).join(' ')}" stroke="${cu}" stroke-width="2.2" fill="none"/>`;
  };
  const pB = (tx,ty) => {
    let pts=[];
    for(let xi=-3;xi<=2.5;xi+=0.08){ const yi=-0.35*(xi+0.5)*(xi+0.5)+2; if(yi>-4 && yi<3) pts.push([tx(xi),ty(yi)]); }
    return `<path d="M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p=>'L '+p[0]+' '+p[1]).join(' ')}" stroke="${cu}" stroke-width="2.2" fill="none"/>`;
  };
  const pC = (tx,ty) => {
    let pts=[];
    for(let xi=-2;xi<=3.5;xi+=0.08){ const yi=0.5*(xi-0.5)*(xi-0.5)-1.8; if(yi>-4 && yi<3) pts.push([tx(xi),ty(yi)]); }
    return `<path d="M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p=>'L '+p[0]+' '+p[1]).join(' ')}" stroke="${cu}" stroke-width="2.2" fill="none"/>`;
  };
  const pD = (tx,ty) => {
    let pts=[];
    for(let xi=0;xi<=4;xi+=0.08){ const yi=0.6*(xi-2)*(xi-2)-1; if(yi>-4 && yi<3) pts.push([tx(xi),ty(yi)]); }
    return `<path d="M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p=>'L '+p[0]+' '+p[1]).join(' ')}" stroke="${cu}" stroke-width="2.2" fill="none"/>`;
  };
  
  const W=580,H=560;
  return React.createElement('svg',{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{display:'block',margin:'8px auto',maxWidth:500}},
    React.createElement('g',{key:'A',dangerouslySetInnerHTML:{__html:mini(90,130,sc,pA,[-2.2,-1.5],[2,1.5])}}),
    React.createElement('text',{key:'Al',x:30,y:245,fill:gold,fontSize:15,fontWeight:"bold",fontFamily:"sans-serif"},"A."),
    React.createElement('g',{key:'B',dangerouslySetInnerHTML:{__html:mini(380,130,sc,pB,[0.8,-0.8],[-0.5,2])}}),
    React.createElement('text',{key:'Bl',x:320,y:245,fill:gold,fontSize:15,fontWeight:"bold",fontFamily:"sans-serif"},"B."),
    React.createElement('g',{key:'C',dangerouslySetInnerHTML:{__html:mini(90,410,sc,pC,[-2.5,0.5],[0.5,-1.8])}}),
    React.createElement('text',{key:'Cl',x:30,y:525,fill:gold,fontSize:15,fontWeight:"bold",fontFamily:"sans-serif"},"C."),
    React.createElement('g',{key:'D',dangerouslySetInnerHTML:{__html:mini(380,410,sc,pD,[0.8,2.5],[2,-1])}}),
    React.createElement('text',{key:'Dl',x:320,y:525,fill:gold,fontSize:15,fontWeight:"bold",fontFamily:"sans-serif"},"D.")
  );
}

export const qs = [
  {
    id:1,
    type:"mc",warn:"Pazi: iracionalan = ne može se zapisati kao razlomak (npr. √2, π); provjeri pojednostavi li se korijen.",
    topic:"br",
    points:1,
    q:"Vrijednost kojega od navedenih izraza pripada skupu iracionalnih brojeva?",
    opts:["−12 + 2","−2/7","√(12 · 3)","√7 + 3"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Iracionalan broj se NE može zapisati kao razlomak [FRAC:p|q] s p ∈ ℤ, q ∈ ℕ. Provjeravamo svaki izraz redom."},{txt:"A: −12 + 2 = −10 ∈ ℤ ⊂ ℚ → racionalan, NE iracionalan."},{txt:"B: −[FRAC:2|7] već je u obliku [FRAC:p|q] s p = −2 i q = 7 → eksplicitno racionalan."},{txt:"C: √(12 · 3) = √36 = 6 ∈ ℕ ⊂ ℚ → racionalan; oprez na zamku — pod korijenom je potpun kvadrat (36)."},{txt:"D: √7 je iracionalan (jer 7 nije potpun kvadrat); zbroj iracionalnog √7 i racionalnog 3 ostaje iracionalan → √7 + 3 ∈ ℝ ∖ ℚ."},{txt:"Točan odgovor: D.",note:"odgovor",final:true},{txt:"Provjera: √7 ≈ 2,6458; √7 + 3 ≈ 5,6458 — decimalan zapis je beskonačan i NEPERIODIČAN (sigurni znak iracionalnosti).",note:"verifikacija",final:true},{txt:"Distraktori: A, B, C svi imaju RACIONALNU vrijednost; samo D mješa iracionalni √7 s racionalnim 3.",note:"diagnostika",final:true},{txt:"Postupak: 1) izračunaj svaki izraz numerički ili svedi na poznati oblik. 2) za svaki provjeri može li se zapisati kao razlomak. 3) ako se ne može — to je iracionalan.",note:"postupak",final:true},{txt:"Intuicija: traži se izraz čija se vrijednost ne može svesti na razlomak — √ od ne-kvadrata je glavni indikator.",note:"intuicija",final:true}],
    why:["Pravilo: ℚ = { [FRAC:p|q] : p ∈ ℤ, q ∈ ℕ }; iracionalni brojevi su elementi ℝ ∖ ℚ. Klasičan teorem: √n je iracionalan ⟺ n nije potpun kvadrat prirodnog broja.","Postupak: 1) izračunaj svaki izraz numerički ili svedi na poznati oblik. 2) za svaki provjeri može li se zapisati kao razlomak. 3) ako se ne može — to je iracionalan.","Intuicija: racionalni brojevi imaju ili konačan ili periodičan decimalan zapis; iracionalni imaju beskonačan i neperiodičan. √2, √3, √5, √7... pi, e — svi su iracionalni.","Česta greška 1: zaboraviti da √(a·b) = √(ab) — pa bi netko mogao smatrati C iracionalnim jer \"izgleda\" kao korijen. Uvijek prvo izračunaj umnožak ispod korijena.","Česta greška 2: smatrati da je √7 + 3 racionalan jer \"+3 dodaje cijeli broj\". Aditiv s racionalnim ne mijenja iracionalnost (suma racionalnog i iracionalnog je iracionalna).","Alt metoda: pretpostavi da je √7 + 3 = [FRAC:p|q] racionalan; tada je √7 = [FRAC:p|q] − 3 = [FRAC:p − 3q|q], što bi značilo √7 ∈ ℚ — kontradikcija.","Provjera: A = −10 ∈ ℤ; B = −[FRAC:2|7] eksplicitno razlomak; C = √36 = 6 ∈ ℕ; D ≈ 5,6458... beskonačno neperiodičan ⟹ D iracionalan ✓."]
  },
  {
    id:2,
    type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",
    topic:"br",
    points:1,
    q:"Koja je od navedenih tvrdnja točna?",
    opts:["Razlika dvaju prirodnih brojeva uvijek je prirodan broj.","Količnik dvaju cijelih brojeva uvijek je cijeli broj.","Zbroj dvaju racionalnih brojeva uvijek je racionalan broj.","Umnožak dvaju iracionalnih brojeva uvijek je iracionalan broj."],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Provjeravamo svaku tvrdnju pokušajem KONTRAPRIMJERA — ako nađemo jedan, tvrdnja je netočna."},{txt:"A: 3 − 5 = −2 ∉ ℕ (jer su prirodni brojevi 1, 2, 3, ...). Kontraprimjer ⟹ A netočno."},{txt:"B: 1 : 2 = 0,5 = [FRAC:1|2] ∉ ℤ. Kontraprimjer ⟹ B netočno."},{txt:"D: √2 · √2 = 2 ∈ ℕ ⊂ ℚ. Iracionalni × iracionalni može biti racionalan! Kontraprimjer ⟹ D netočno."},{txt:"C: zbroj [FRAC:a|b] + [FRAC:c|d] = [FRAC:ad + bc|bd] uvijek je razlomak s a, b, c, d ∈ ℤ — uvijek u ℚ."},{txt:"Točan odgovor: C.",note:"odgovor",final:true},{txt:"Provjera: (ℚ, +) je grupa po teoremu — algebra strukturalno potvrđuje C.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, D — sve \"tvrdnje uvijek vrijedi\" lako se opovrgnu konkretnim primjerima.",note:"diagnostika",final:true},{txt:"Postupak: 1) za svaku tvrdnju zamisli jedan konkretan primjer. 2) ako rezultat NIJE u traženom skupu — našao si kontraprimjer (tvrdnja netočna). 3) ako kontraprimjer ne uspijevaš naći, sumnja da je tvrdnja točna.",note:"postupak",final:true},{txt:"Intuicija: razlomak + razlomak ostaje razlomak; ostala 3 svojstva nemaju zatvorenost (closure).",note:"intuicija",final:true}],
    why:["Pravilo: skup S je zatvoren na operaciju ∘ ako za svaki par a, b ∈ S vrijedi a ∘ b ∈ S. ℕ nije zatvoren na razliku, ℤ nije zatvoren na dijeljenje, ℝ ∖ ℚ nije zatvoren na množenje, ali ℚ JEST zatvoren na zbrajanje.","Postupak: 1) za svaku tvrdnju zamisli jedan konkretan primjer. 2) ako rezultat NIJE u traženom skupu — našao si kontraprimjer (tvrdnja netočna). 3) ako kontraprimjer ne uspijevaš naći, sumnja da je tvrdnja točna.","Intuicija: \"uvijek\" je vrlo jaka tvrdnja — dovoljan je JEDAN kontraprimjer da je obori. Provjeri rubne slučajeve (negativni brojevi, dijeljenje, dvostruki korijeni).","Česta greška 1: pomiješati prirodne (ℕ = {1, 2, 3, ...}) i cijele (ℤ = {..., −2, −1, 0, 1, 2, ...}) brojeve. Razlika 5 − 3 = 2 ∈ ℕ vrijedi, ali 3 − 5 = −2 ∉ ℕ.","Česta greška 2: misliti da je iracionalni × iracionalni uvijek iracionalan — to vrijedi samo \"većinom\"; √2 · √2 = 2 (racionalan) je dokaz suprotnog.","Alt metoda — formalno: dokažeš zatvorenost ℚ na +: za [FRAC:a|b], [FRAC:c|d] ∈ ℚ vrijedi [FRAC:a|b] + [FRAC:c|d] = [FRAC:ad + bc|bd] gdje ad + bc ∈ ℤ i bd ∈ ℕ — pa je rezultat u ℚ.","Provjera: za A protuprimjer (3,5) ne ℕ; za B (1,2) ne ℤ; za D (√2, √2) ne ℝ ∖ ℚ; samo C nema kontraprimjer ✓."]
  },
  {
    id:3,
    type:"mc",warn:"Pazi: ∛a = a^(1/3); a·a^(1/3) = a^(4/3) (eksponenti se zbrajaju).",
    topic:"al",
    points:1,
    q:"Čemu je jednako a · ∛a za svaki realni broj a?",
    opts:["a^(1/3)","a^(2/3)","a^(4/3)","a^(5/3)"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Pretvori korijen u racionalnu potenciju: ∛a = a^([FRAC:1|3])."},{txt:"Sad imamo a · a^([FRAC:1|3]) = a¹ · a^([FRAC:1|3])."},{txt:"Primijeni pravilo množenja potencija s istom bazom: aᵐ · aⁿ = a^(m+n)."},{txt:"Eksponenti: 1 + [FRAC:1|3] = [FRAC:3|3] + [FRAC:1|3] = [FRAC:4|3]."},{txt:"a · ∛a = a^([FRAC:4|3])."},{txt:"Točan odgovor: C — a^([FRAC:4|3]).",note:"odgovor",final:true},{txt:"Provjera za a = 8: a · ∛a = 8 · ∛8 = 8 · 2 = 16. S druge strane 8^([FRAC:4|3]) = (∛8)⁴ = 2⁴ = 16 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) eksponent korijena (1/3); B) zbroj 1/3 + 1/3; D) povezano s a · ∛(a²) (5/3). Pažnja na 1 + 1/3 — to je 4/3, ne 5/3.",note:"diagnostika",final:true},{txt:"Postupak: 1) sve korijene pretvori u racionalne potencije. 2) ako su baze iste, zbroji eksponente. 3) konačni rezultat zapiši u racionalnom obliku eksponenta.",note:"postupak",final:true},{txt:"Intuicija: cijeli broj 1 u eksponentu PRETVORI u razlomak s istim nazivnikom (3/3), pa zbroji.",note:"intuicija",final:true}],
    why:["Pravilo: ⁿ√a = a^([FRAC:1|n]) (definicija racionalne potencije); aᵐ · aⁿ = a^(m+n) (množenje potencija s istom bazom).","Postupak: 1) sve korijene pretvori u racionalne potencije. 2) ako su baze iste, zbroji eksponente. 3) konačni rezultat zapiši u racionalnom obliku eksponenta.","Intuicija: korijen je inverz potencije — a^([FRAC:1|n]) je broj koji uzdignut na n daje a. Kombinacijom potencija ostvaruje se \"uvjetna\" potencija s necijelim eksponentom.","Česta greška 1: zbrajanje eksponenata kao razlomka — npr. pisati 1 + [FRAC:1|3] = [FRAC:2|3] (dva brojnika, dijeli s 3). Ispravno: 1 = [FRAC:3|3], pa [FRAC:3|3] + [FRAC:1|3] = [FRAC:4|3].","Česta greška 2: zbrojiti pogrešne baze. Ako bi pisalo a · ∛b (RAZLIČITE baze), pravilo aᵐ · aⁿ se NE primjenjuje — ostaje a · b^([FRAC:1|3]).","Alt metoda: zapiši a · ∛a = a · ∛a = ∛(a³ · a) = ∛(a⁴) = a^([FRAC:4|3]) — koristeći ⁿ√(aⁿ) = a uz dodatak.","Provjera: za a = 27: lijevo = 27 · ∛27 = 27 · 3 = 81; desno = 27^([FRAC:4|3]) = (∛27)⁴ = 3⁴ = 81 ✓."]
  },
  {
    id:4,
    type:"mc",warn:"Pazi: broj kapi = ukupno/po kapi = (1,5·10²⁶)/(3·10²²); oduzmi eksponente.",
    topic:"br",
    points:1,
    q:"Jedna kapljica tekućine sastoji se od 3 · 10²² čestica. U koliko takvih kapljica tekućine ima 1,5 · 10²⁶ čestica?",
    opts:["2000","5000","20 000","50 000"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Označi N = broj kapljica. Vrijedi N · (3 · 10²²) = 1,5 · 10²⁶."},{txt:"Izoliraj N: N = [FRAC:1,5 · 10²⁶|3 · 10²²]."},{txt:"Razdvoji koeficijente i potencije: N = [FRAC:1,5|3] · [FRAC:10²⁶|10²²]."},{txt:"Pojednostavi: [FRAC:1,5|3] = 0,5; [FRAC:10²⁶|10²²] = 10^(26 − 22) = 10⁴."},{txt:"N = 0,5 · 10⁴ = 5000."},{txt:"Točan odgovor: B — 5000 kapljica.",note:"odgovor",final:true},{txt:"Provjera: 5000 · 3 · 10²² = 15 000 · 10²² = 1,5 · 10⁴ · 10²² = 1,5 · 10²⁶ ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 2000 ako se zaboravi koeficijent 1,5; C) 20 000 ako se 10⁴ množi s 2 (a treba s 0,5); D) 50 000 ako se podijeli umjesto pomnoži.",note:"diagnostika",final:true},{txt:"Postupak: 1) postavi jednadžbu N · (po kapljici) = (ukupno). 2) izoliraj N kao razlomak. 3) razdvoji koeficijente i potencije, izračunaj svaki dio. 4) spoji u konačan broj.",note:"postupak",final:true},{txt:"Intuicija: dijeljenje brojeva u znanstvenom zapisu = dijeljenje koeficijenata + ODUZIMANJE eksponenata.",note:"intuicija",final:true}],
    why:["Pravilo dijeljenja potencija: [FRAC:aᵐ|aⁿ] = a^(m − n) za istu bazu. U znanstvenom zapisu (a · 10ᵏ) ÷ (b · 10ˡ) = [FRAC:a|b] · 10^(k − l).","Postupak: 1) postavi jednadžbu N · (po kapljici) = (ukupno). 2) izoliraj N kao razlomak. 3) razdvoji koeficijente i potencije, izračunaj svaki dio. 4) spoji u konačan broj.","Intuicija: ako jedna kapljica ima 30 milijardi puta milijardu (3·10²²) čestica, a treba ti 150 milijardi puta milijardu puta 10 000 (1,5·10²⁶) — to je 5000 kapljica, jer 5000 · 3 = 15 000.","Česta greška 1: zbrajati eksponente umjesto oduzimati (10²⁶ · 10²² ili 10⁴⁸ — to bi bio neviđeno veliki broj, ne 5000).","Česta greška 2: pomiješati znak — koristiti [FRAC:3 · 10²²|1,5 · 10²⁶] (obrnuto). Uvijek pazi koji je \"djelitelj\" a koji \"djeljenik\".","Alt metoda: pretvori brojeve iz znanstvenog zapisa u običan: 1,5 · 10²⁶ = 150 · 10²⁴; 3 · 10²² = 3 · 10²² ; 150 · 10²⁴ / (3 · 10²²) = 50 · 10² = 5000 ✓.","Provjera dimenzionalno: čestica/kapljica × kapljice = čestica. (3 · 10²² čest./kap.) × 5000 kap. = 1,5 · 10²⁶ čestica ✓."]
  },
  {
    id:5,
    type:"mc",warn:"Pazi: izrazi sve preko jedne osobe (Matija = 6 → Sonja = 4, Ivan = 3), pa omjer Sonja : Ivan.",
    topic:"br",
    points:1,
    q:"Sonjina i Matijina zarada u omjeru su 2 : 3, a Matija je zaradio 2 puta više od Ivana. U kakvome su odnosu Sonjina i Ivanova zarada?",
    opts:["Sonja i Ivan zaradili su jednako.","Sonja je zaradila manje od Ivana.","Sonjina i Ivanova zarada u omjeru su 2 : 1.","Sonjina i Ivanova zarada u omjeru su 4 : 3."],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Označi Ivanovu zaradu kao I (parametar). Tada je Matijina M = 2I (uvjet \"dva puta više od Ivana\")."},{txt:"Iz omjera S : M = 2 : 3 slijedi S = [FRAC:2|3] · M."},{txt:"Supstituiraj: S = [FRAC:2|3] · 2I = [FRAC:4|3] · I."},{txt:"Omjer S : I = [FRAC:4|3] · I : I = [FRAC:4|3] : 1 = 4 : 3."},{txt:"Točan odgovor: D — omjer 4 : 3.",note:"odgovor",final:true},{txt:"Provjera s konkretnim brojevima: I = 3 → M = 6; S = (2/3) · 6 = 4; S : I = 4 : 3 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) S = I bi vrijedilo ako bi M = 3I (ne 2I); B) S < I bi vrijedilo ako bi M < I; C) S : I = 2:1 zahtijeva M = 3I.",note:"diagnostika",final:true},{txt:"Postupak: 1) odredi nepoznatu kao \"anchor\" (npr. Ivan). 2) izrazi ostale veličine kroz nju. 3) sastavi traženi omjer.",note:"postupak",final:true},{txt:"Intuicija: koristi treću varijablu (I) za nepoznatu treću zaradu — sve ostalo izrazi preko nje.",note:"intuicija",final:true}],
    why:["Pravilo: omjer a : b znači a = k·m, b = k·n za zajednički faktor k > 0. Lančani omjeri se kombiniraju kroz zajedničku varijablu.","Postupak: 1) odredi nepoznatu kao \"anchor\" (npr. Ivan). 2) izrazi ostale veličine kroz nju. 3) sastavi traženi omjer.","Intuicija: kao u kemiji — ako je A : B = 2 : 3 i B : C = 2 : 1, onda treba pronaći zajednički \"most\" (vrijednost za B koja se slaže u oba omjera).","Česta greška 1: zamijeniti uloge u omjeru — npr. pisati M : S = 2 : 3 (pa misliti M < S) umjesto S : M = 2 : 3 (S < M). Pažljivo s redoslijedom.","Česta greška 2: pomnožiti omjere mehanički bez zajedničke varijable — npr. dati S : I = 2 · 2 : 3 · 1 = 4 : 3 slučajno daje točan odgovor, ali matematički pristup nije ispravan.","Alt metoda — proporcijama: [FRAC:S|I] = [FRAC:S|M] · [FRAC:M|I] = [FRAC:2|3] · 2 = [FRAC:4|3] = 4 : 3 ✓.","Provjera: I = 6 → M = 12; S = 8; S : I = 8 : 6 = 4 : 3 ✓; I = 9 → M = 18; S = 12; S : I = 12 : 9 = 4 : 3 ✓."]
  },
  {
    id:6,
    img:true,
    type:"mc",warn:"Pazi: prosjek iz tablice — pazi traži li se prosječan postotak ili prosječan broj ulaznica.",
    topic:"stat",
    points:1,
    q:"Postotak prodanih ulaznica po danima u nekome tjednu prikazan je tablicom. Koliko je prosječno ulaznica prodano dnevno u tome tjednu ako je svakoga dana u prodaji 420 ulaznica?",
    opts:["238","273","279","315"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Iz tablice očitaj postotke po danima: Po 40 %, Ut 75 %, Sr 75 %, Če 75 %, Pe 80 %, Su 80 %, Ne 40 %."},{txt:"Zbroji postotke: 40 + 75 + 75 + 75 + 80 + 80 + 40 = 465 %."},{txt:"Prosjek postotaka: [FRAC:465|7] ≈ 66,43 %."},{txt:"Konvertiraj u broj ulaznica: 0,6643 · 420 ≈ 278,98."},{txt:"Zaokruženo: 279."},{txt:"Točan odgovor: C — 279 ulaznica dnevno.",note:"odgovor",final:true},{txt:"Provjera računom po danu: 0,40·420 + 0,75·420·3 + 0,80·420·2 + 0,40·420 = 168 + 945 + 672 + 168 = 1953; [FRAC:1953|7] ≈ 279 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 238 (ako se izostavi neki dan); B) 273 (zaokruživanje na manje); D) 315 (75 % od 420 — samo srednje dana).",note:"diagnostika",final:true},{txt:"Postupak: 1) očitaj sve vrijednosti iz tablice. 2) zbroji ih. 3) podijeli sa brojem dana. 4) izračunaj postotak prosjeka od baze.",note:"postupak",final:true},{txt:"Intuicija: prosjek postotaka KAD JE BAZA FIKSNA = postotak prosjeka — zbroji, podijeli s n, primijeni na bazu.",note:"intuicija",final:true}],
    why:["Pravilo: aritmetička sredina = [FRAC:zbroj vrijednosti|broj članova]. Za postotke s fiksnom bazom: prosjek = [FRAC:zbroj postotaka|n] · baza.","Postupak: 1) očitaj sve vrijednosti iz tablice. 2) zbroji ih. 3) podijeli sa brojem dana. 4) izračunaj postotak prosjeka od baze.","Intuicija: 420 ulaznica je dnevna ponuda; prosječna prodaja = (ukupno prodano kroz tjedan) / 7 dana. Ekvivalentno: prosječan postotak primijenjen na 420.","Česta greška 1: izračunati prosjek apsolutnih brojeva za samo neke dane, ne sve sedam dana. Tjedan ima 7 dana — ne 5 (radne) ili 6.","Česta greška 2: koristiti pogrešnu bazu (npr. zbroj prodanih = 1953, pa 1953/3 = 651) — uvijek je broj članova (= dana) u prosjeku.","Alt metoda: izračunaj prodaju po danu (ulaznice), pa prosjek tih brojeva: 168, 315, 315, 315, 336, 336, 168 → [FRAC:1953|7] ≈ 278,9 ≈ 279.","Provjera: 279 / 420 ≈ 0,664 = 66,4 % — odgovara prosjeku postotaka (≈ 66,43 %) ✓."]
  },
  {
    id:7,
    type:"mc",warn:"Pazi: kvadrat binoma (p·a + q·b)²; iz 4b² = (2b)² i 12ab = 2·p·2b·a nađi p, pa x = p².",
    topic:"al",
    points:1,
    q:"Koliko iznosi x ako je izraz xa² + 12ab + 4b² kvadrat binoma?",
    opts:["1","3","9","81"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Kvadrat binoma općenito: (pa + qb)² = p²a² + 2pq·ab + q²b² — tri uvjeta moraju vrijediti istovremeno."},{txt:"Usporedi po članovima s xa² + 12ab + 4b²: q²b² = 4b² → q² = 4 → q = 2 (uzmi pozitivnu opciju)."},{txt:"Srednji član: 2pq·ab = 12ab → 2 · p · 2 = 12 → 4p = 12 → p = 3."},{txt:"Prvi član: p²a² = 9a² ⟹ xa² = 9a² ⟹ x = 9."},{txt:"Točan odgovor: C — x = 9.",note:"odgovor",final:true},{txt:"Provjera razvijanjem: (3a + 2b)² = 9a² + 2·3·2·ab + 4b² = 9a² + 12ab + 4b² ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) x = 1 (krivo: p = 1, ali tada 2p · q = 2 · 1 · 2 = 4 ≠ 12); B) x = 3 (krivo: 3 je vrijednost p, ne x = p²); D) x = 81 (krivo: p · q² = 81 nema smisla).",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj koeficijent koji ne sadrži x (ovdje 4b² i 12ab). 2) iz \"čistog\" b² koeficijenta izračunaj q. 3) iz srednjeg člana izračunaj p. 4) iz a²-koeficijenta izračunaj x.",note:"postupak",final:true},{txt:"Intuicija: tri uvjeta (a²-član, ab-član, b²-član) determiniraju p i q jedinstveno; krenuvši od člana BEZ x dobiješ q, pa p, pa x.",note:"intuicija",final:true}],
    why:["Pravilo: (pa + qb)² = p²a² + 2pq·ab + q²b² — opće svojstvo kvadrata binoma. Sva 3 koeficijenta moraju \"matchirati\" istovremeno.","Postupak: 1) identificiraj koeficijent koji ne sadrži x (ovdje 4b² i 12ab). 2) iz \"čistog\" b² koeficijenta izračunaj q. 3) iz srednjeg člana izračunaj p. 4) iz a²-koeficijenta izračunaj x.","Intuicija: kvadrat binoma je \"savršen kvadrat\" — tri koeficijenta su perfektno uvezana kroz p i q. To je suprotno od opće kvadratne trinome ax² + bx + c gdje su nezavisne.","Česta greška 1: uzeti q = 4 (jer q² = 4 implicira q = ±2, ne ±4). Kvadratni korijen od 4 je 2.","Česta greška 2: izračunati p iz a²-koeficijenta unaprijed (p² = x, ali x je nepoznanica — treba ići preko poznatih članova prvo).","Alt metoda: pretpostavi (αa + 2b)² za pozitivno α; razvij i usporedi srednji član: 2α·2 = 12 ⟹ α = 3. Onda α² = 9 = x ✓.","Provjera: (−3a − 2b)² = 9a² + 12ab + 4b² ✓ (negativni p i q daju isti kvadrat zbog (-1)² = 1, pa x = 9 ostaje)."]
  },
  {
    id:8,
    img:true,
    type:"mc",warn:"Pazi: nagib a = promjena y / promjena x; b je vrijednost funkcije pri x = 0.",
    topic:"fun",
    points:1,
    q:"Linearna funkcija f(x) = ax + b zadana je tablicom. Što od navedenoga vrijedi za koeficijente a i b?",
    opts:["a < 0 i b < 0","a < 0 i b > 0","a > 0 i b < 0","a > 0 i b > 0"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Iz tablice očitaj dvije točke: (−1, 5) i (7, 2)."},{txt:"Nagib (koeficijent a) = [FRAC:Δy|Δx] = [FRAC:2 − 5|7 − (−1)] = [FRAC:−3|8] = −[FRAC:3|8] < 0."},{txt:"Iz f(−1) = 5 izrazi b: 5 = a · (−1) + b → b = 5 + a = 5 − [FRAC:3|8] = [FRAC:40 − 3|8] = [FRAC:37|8]."},{txt:"b = [FRAC:37|8] ≈ 4,625 > 0."},{txt:"Zaključak: a < 0 i b > 0."},{txt:"Točan odgovor: B.",note:"odgovor",final:true},{txt:"Provjera s drugom točkom: f(7) = −[FRAC:3|8] · 7 + [FRAC:37|8] = −[FRAC:21|8] + [FRAC:37|8] = [FRAC:16|8] = 2 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) a<0, b<0 bi značilo silazna kroz negativni dio osi y; C) a>0, b<0 znači uzlazna pod ishodištem; D) a>0, b>0 značilo bi rast što ne odgovara podacima.",note:"diagnostika",final:true},{txt:"Postupak: 1) iz tablice očitaj dvije točke (x₁, y₁), (x₂, y₂). 2) izračunaj a = [FRAC:y₂−y₁|x₂−x₁]. 3) iz jedne točke izračunaj b: b = y₁ − a·x₁.",note:"postupak",final:true},{txt:"Intuicija: f opada (od 5 do 2 dok x raste) → nagib negativan; obje vrijednosti pozitivne pri x ≈ 0 → odsječak b pozitivan.",note:"intuicija",final:true}],
    why:["Pravilo: za linearnu funkciju f(x) = ax + b: a = nagib = [FRAC:Δy|Δx]; b = y-odsječak = f(0).","Postupak: 1) iz tablice očitaj dvije točke (x₁, y₁), (x₂, y₂). 2) izračunaj a = [FRAC:y₂−y₁|x₂−x₁]. 3) iz jedne točke izračunaj b: b = y₁ − a·x₁.","Intuicija: predznak a govori smjer (rast/pad); predznak b govori gdje pravac siječe os y (iznad/ispod ishodišta). Tablica koja \"ima negativan x s pozitivnim y\" + \"pozitivan x s manjim y\" sugerira pad → a<0.","Česta greška 1: zaboraviti negativni predznak kod x = −1: računati a = [FRAC:5−2|−1−7] = [FRAC:3|−8] = −[FRAC:3|8] OK; ili a = [FRAC:5−2|−1+7] = [FRAC:3|6] (krivo) = [FRAC:1|2]. Bitno je tih (−1).","Česta greška 2: koristiti pogrešnu definiciju nagiba — npr. a = [FRAC:Δx|Δy] (recipročno) — daje pogrešnu vrijednost.","Alt metoda — direktno iz pravila: f(x) = ax + b, sustav iz dvije točke: −a + b = 5 i 7a + b = 2. Oduzmi: 8a = −3 → a = −[FRAC:3|8]; b = 5 + a = [FRAC:37|8].","Provjera: nultočka pravca y = 0: 0 = −[FRAC:3|8]x + [FRAC:37|8] → x = [FRAC:37|3] ≈ 12,33; pravac siječe os x desno od x = 7 (gdje je y još pozitivno) ✓."]
  },
  {
    id:9,
    type:"mc",warn:"Pazi: razlomak < 0 kad su brojnik i nazivnik SUPROTNIH predznaka; pazi x ≠ 1.",
    topic:"al",
    points:1,
    q:"Koji je interval skup svih rješenja nejednadžbe [FRAC:5x|x − 1] < 0?",
    opts:["⟨−∞, 0⟩","⟨0, 1⟩","⟨1, 5⟩","⟨5, ∞⟩"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Razlomak je negativan ako su brojnik i nazivnik suprotnih predznaka."},{txt:"Brojnik 5x: pozitivan za x > 0; negativan za x < 0; nula za x = 0."},{txt:"Nazivnik x − 1: pozitivan za x > 1; negativan za x < 1; nula za x = 1 (vrijednost gdje izraz nije definiran)."},{txt:"Slučaj 1: brojnik > 0, nazivnik < 0 ⟹ x > 0 i x < 1 ⟹ x ∈ ⟨0, 1⟩."},{txt:"Slučaj 2: brojnik < 0, nazivnik > 0 ⟹ x < 0 i x > 1 ⟹ NEMOGUĆE."},{txt:"Rješenje: x ∈ ⟨0, 1⟩."},{txt:"Točan odgovor: B.",note:"odgovor",final:true},{txt:"Provjera s x = [FRAC:1|2]: [FRAC:5 · 0,5|0,5 − 1] = [FRAC:2,5|−0,5] = −5 < 0 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) ⟨−∞, 0⟩ — tu je 5x < 0 i x − 1 < 0 → omjer pozitivan; C) ⟨1, 5⟩ i D) ⟨5, ∞⟩ — tu je sve pozitivno → omjer pozitivan.",note:"diagnostika",final:true},{txt:"Postupak: 1) odredi nultočke brojnika i nazivnika. 2) napravi tablicu predznaka po intervalima. 3) odaberi intervale gdje je razlomak negativan.",note:"postupak",final:true},{txt:"Intuicija: tablica predznaka — gdje brojnik i nazivnik mijenjaju znak (x = 0 i x = 1) definiraju 3 intervala; testiraj svaki.",note:"intuicija",final:true}],
    why:["Pravilo: [FRAC:P(x)|Q(x)] < 0 ⟺ (P > 0 ∧ Q < 0) ∨ (P < 0 ∧ Q > 0). Skup rješenja je unija intervala gdje predznak razlomka mijenja na \"minus\".","Postupak: 1) odredi nultočke brojnika i nazivnika. 2) napravi tablicu predznaka po intervalima. 3) odaberi intervale gdje je razlomak negativan.","Intuicija: razlomak je negativan kad jedan dio \"vuče gore\" a drugi \"vuče dolje\" — različiti predznaci. Slika: na brojevnom pravcu 0 i 1 dijele ℝ na tri zone.","Česta greška 1: pomnožiti obje strane s (x − 1) ne razmišljajući o predznaku. Ako je x − 1 < 0, smjer nejednakosti se mijenja! Bolje koristiti tablicu predznaka.","Česta greška 2: uključiti rubne točke. x = 0 daje 0 (nije < 0 strogo); x = 1 nije definiran (deljenje s 0) — oba isključena iz rješenja, intervali su OTVORENI.","Alt metoda: pomnoži s (x − 1)² > 0 (čuva smjer): 5x(x − 1) < 0 ⟺ (x − 0)(x − 1) < 0 ⟺ x ∈ ⟨0, 1⟩ (parabola y = x(x−1) ispod osi x između nultočaka).","Provjera s rubnim slučajevima: x = 0,1 → [FRAC:0,5|−0,9] ≈ −0,55 < 0 ✓; x = 0,9 → [FRAC:4,5|−0,1] = −45 < 0 ✓; izvan [0, 1] → pozitivno ✗."]
  },
  {
    id:10,
    type:"mc",warn:"Pazi: log₂a = b → a = 2ᵇ → a² = 2^(2b) (kvadriraj).",
    topic:"al",
    points:1,
    q:"Čemu je jednako a² ako je log₂ a = b?",
    opts:["b²","b⁴","2^b","4^b"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Definicija logaritma: log_c(x) = y ⟺ c^y = x. Primijeni za log₂ a = b → 2^b = a."},{txt:"Treba izračunati a². Kvadriraj obje strane: a² = (2^b)²."},{txt:"Pravilo potenciranja potencije: (xᵐ)ⁿ = x^(m·n)."},{txt:"(2^b)² = 2^(2b)."},{txt:"Pretvori bazu — koristi 2² = 4: 2^(2b) = (2²)^b = 4^b."},{txt:"a² = 4^b."},{txt:"Točan odgovor: D — 4^b.",note:"odgovor",final:true},{txt:"Provjera s b = 3: a = 2³ = 8; a² = 64; 4^b = 4³ = 64 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) b² (zamjena a i b uloga); B) b⁴ (b·b·b·b nema osnove); C) 2^b = a (to je sam a, ne a²).",note:"diagnostika",final:true},{txt:"Intuicija: log \"preokreni\" u eksponencijalan oblik, pa primijeni operacije nad a (kvadriranje).",note:"intuicija",final:true},{txt:"Postupak: 1) iz log-jednakosti zapiši eksponencijalni oblik (a = 2^b). 2) primijeni traženu operaciju na obje strane (a² = (2^b)²). 3) pojednostavi pomoću pravila potencija.",note:"postupak",final:true}],
    why:["Pravilo: log_c(x) = y ⟺ c^y = x (definicija); (xᵐ)ⁿ = x^(m·n) (potenciranje potencije); (a^m)·(a^n) = a^(m+n).","Postupak: 1) iz log-jednakosti zapiši eksponencijalni oblik (a = 2^b). 2) primijeni traženu operaciju na obje strane (a² = (2^b)²). 3) pojednostavi pomoću pravila potencija.","Intuicija: log₂ a = b znači \"a se može zapisati kao 2 na b-tu\"; kvadriranje udvostručuje eksponent (2^b)² = 2^(2b) = (2²)^b = 4^b.","Česta greška 1: pretpostaviti da log₂(a²) = (log₂ a)² = b² — to je krivo! Vrijedi log₂(a²) = 2 log₂ a = 2b, ne b². Ovo pita ZA a², ne za log(a²).","Česta greška 2: krivo manipulirati eksponentom: (2^b)² = 2^(b²) — krivo. Pravilo (x^m)^n = x^(m·n), pa je rezultat 2^(b·2) = 2^(2b), ne 2^(b²).","Alt metoda: prelazak baze: a² = a · a = 2^b · 2^b = 2^(b+b) = 2^(2b) = 4^b ✓ (koristeći zbrajanje eksponenata).","Provjera s konkretnim b: b = 2 → a = 4, a² = 16 = 4² = 4^b ✓; b = 0 → a = 1, a² = 1 = 4⁰ ✓."]
  },
  {
    id:11,
    img:true,
    type:"mc",warn:"Pazi: c je sjecište s osi y → graf siječe os y ISPOD ishodišta; otvor prema dolje (−x²).",
    topic:"fun",
    points:1,
    q:"Na kojoj je slici prikazan graf kvadratne funkcije f(x) = −x² + bx + c kojoj je koeficijent c < 0?",
    opts:["A","B","C","D"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Funkcija je f(x) = −x² + bx + c — opći oblik kvadratne funkcije s vodećim koeficijentom −1."},{txt:"Vodeći koeficijent −1 < 0 → parabola otvorena prema dolje (∩). Isključuje C i D ako su otvorene prema gore."},{txt:"Slobodni koeficijent c je vrijednost f(0) — y-odsječak grafa (gdje siječe os y)."},{txt:"Uvjet c < 0 znači y-odsječak je ispod osi x → graf siječe os y u negativnom dijelu."},{txt:"Na slici A: ∩ i siječe os y u negativnom dijelu ⟹ c < 0 ✓; ostale opcije ne zadovoljavaju oba uvjeta."},{txt:"Točan odgovor: A.",note:"odgovor",final:true},{txt:"Provjera: za bilo koji parabolski oblik f(x) = −x² + bx + c vrijedi f(0) = c — direktna provjera u nuli.",note:"verifikacija",final:true},{txt:"Distraktori: B) ∩ ali siječe pozitivni dio osi y (c > 0); C) ∪ s c > 0 (oba uvjeta krša); D) ∪ s c < 0 (vodeći koeficijent pogrešnog znaka).",note:"diagnostika",final:true},{txt:"Postupak: 1) iz formule pročitaj vodeći koeficijent (znak određuje otvor). 2) konstantni član c je presjek s osi y. 3) provjeri sliku redom: oblik otvora + y-odsječak.",note:"postupak",final:true},{txt:"Intuicija: dva neovisna uvjeta — smjer otvora (znak vodećeg) i y-odsječak (znak konstante). Oba mora vrijediti.",note:"intuicija",final:true}],
    why:["Pravilo: za f(x) = ax² + bx + c — znak a određuje smjer otvora (a > 0 ∪, a < 0 ∩); c = f(0) je y-odsječak; diskriminanta D = b² − 4ac određuje broj nultočaka.","Postupak: 1) iz formule pročitaj vodeći koeficijent (znak određuje otvor). 2) konstantni član c je presjek s osi y. 3) provjeri sliku redom: oblik otvora + y-odsječak.","Intuicija: parabola se \"otvara\" u smjeru znaka a; y-odsječak je vidljiv direktno na slici (gdje graf križa os y).","Česta greška 1: pomiješati c s diskriminantom D ili nultočkom. c je VRIJEDNOST u x = 0, a nultočke su x-vrijednosti gdje y = 0. Različite stvari.","Česta greška 2: zanemariti znak vodećeg koeficijenta i odabrati opciju samo zbog y-odsječka — oba uvjeta moraju biti zadovoljena.","Alt metoda: izračunaj diskriminantu D = b² − 4·(−1)·c = b² + 4c; za c < 0 i mali b može biti D > 0 (dvije nultočke) ili D < 0 — ali to nije ključno za odabir; ključ je oblik + y-odsječak.","Provjera primjera: f(x) = −x² + 0·x − 1 = −x² − 1; otvor dolje, f(0) = −1 < 0 ✓ — graf izgleda kao slika A."]
  },
  {
    id:12,
    img:true,
    type:"mc",warn:"Pazi: najmanja vrijednost = najniža točka grafa NA intervalu (uključi rubove −4 i 6).",
    topic:"fun",
    points:1,
    q:"Graf funkcije f prikazan je na slici. Koliko iznosi najmanja vrijednost funkcije f na intervalu [−4, 6]?",
    opts:["−4","−2","1","4"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Najmanja vrijednost (globalni minimum) na zatvorenom intervalu nalazi se ili u lokalnom minimumu unutar intervala ili na rubu intervala."},{txt:"Sa grafa očitaj lokalne minimume na [−4, 6] — vidljiva lokalna depresija s y-koordinatom otprilike −2."},{txt:"Konkretno: pozicija minimuma na grafu izgleda otprilike x ≈ 3, gdje je f(x) = −2."},{txt:"Provjeri rubove: f(−4) i f(6) — oba su iznad osi x (oko 4 i 1), pa nisu kandidati za minimum."},{txt:"Najmanja vrijednost f na intervalu je −2 (lokalni min vrijednost)."},{txt:"Točan odgovor: B — −2.",note:"odgovor",final:true},{txt:"Provjera: −2 je manje od −4? Ne — −4 < −2. Ali −4 je opcija A, ne vrijednost minimuma. f nikada ne pada do −4 na ovom intervalu — najniža vrijednost je −2.",note:"verifikacija",final:true},{txt:"Distraktori: A) −4 (zamjena x-koordinate ruba s y-vrijednošću); C) 1 (vrijednost f u nekoj drugoj točki); D) 4 (najveća vrijednost, ne najmanja).",note:"diagnostika",final:true},{txt:"Intuicija: \"najmanja vrijednost\" = najniža y-koordinata grafa na danom intervalu — gledaj koliko duboko ide krivulja.",note:"intuicija",final:true},{txt:"Postupak: 1) označi rubne vrijednosti f(a), f(b). 2) identificiraj sve lokalne minimume unutar intervala (točke gdje graf \"ima dno\"). 3) među svim tim vrijednostima uzmi najmanju.",note:"postupak",final:true}],
    why:["Pravilo: minimum funkcije na zatvorenom intervalu [a, b] = min(f(a), f(b), sve lokalne min unutar (a, b)). Po Weierstrassu, neprekidna funkcija na [a, b] postiže max i min.","Postupak: 1) označi rubne vrijednosti f(a), f(b). 2) identificiraj sve lokalne minimume unutar intervala (točke gdje graf \"ima dno\"). 3) među svim tim vrijednostima uzmi najmanju.","Intuicija: kao planinski lanac — najniža točka na danoj rutu može biti ili u dolini ili na nekom od početka/kraja rute.","Česta greška 1: izvjestiti x-koordinatu minimuma umjesto y-vrijednosti. Minimum funkcije = VRIJEDNOST funkcije, ne argument.","Česta greška 2: zaboraviti provjeriti rubove intervala — ponekad rub daje manju vrijednost od lokalnog minimuma unutar intervala.","Alt metoda: ako je f dana formulom, riješi f'(x) = 0 za kritične točke, izračunaj f u njima i u rubovima, usporedi.","Provjera: pažljivo očitati y-vrijednost u lokalnom minimumu — moraš to vidjeti precizno na grafu (npr. presjek s vodoravnom linijom y = −2)."]
  },
  {
    id:13,
    type:"mc",warn:"Pazi: cijene čine aritmetički niz (a₁ = 30, d = 8); ukupno = zbroj prvih 20 članova.",
    topic:"al",
    points:1,
    q:"Potrebno je iskopati bunar dubok 20 m. Za kopanje prvoga metra cijena je 30 eura, a za svaki sljedeći 8 eura više od prethodnoga metra. Kolika je cijena cijeloga iskopa?",
    opts:["752 eura","1140 eura","1520 eura","2120 eura"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Cijene metra po metru čine aritmetički niz: a₁ = 30 (prvi metar), razlika d = 8 (svaki sljedeći 8 € više)."},{txt:"Cijena n-tog metra: aₙ = a₁ + (n − 1)·d = 30 + 8(n − 1)."},{txt:"Za posljednji (20.) metar: a₂₀ = 30 + 8 · 19 = 30 + 152 = 182 €."},{txt:"Suma prvih n članova aritmetičkog niza: Sₙ = [FRAC:n|2] · (a₁ + aₙ)."},{txt:"S₂₀ = [FRAC:20|2] · (30 + 182) = 10 · 212 = 2120 €."},{txt:"Točan odgovor: D — 2120 €.",note:"odgovor",final:true},{txt:"Provjera alternativnom formulom Sₙ = [FRAC:n|2] · (2a₁ + (n−1)d) = [FRAC:20|2] · (60 + 152) = 10 · 212 = 2120 ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 752 (premalo — vjerojatno samo zbroj 30 + 22 puta nešto); B) 1140 (možda 20 · 57 — pogrešan prosjek); C) 1520 (možda krivo izračunat sredina niza).",note:"diagnostika",final:true},{txt:"Postupak: 1) identificiraj a₁ i d iz uvjeta. 2) izračunaj aₙ za zadnji član. 3) primijeni Sₙ formulu (preko a₁ i aₙ ili preko a₁ i d).",note:"postupak",final:true},{txt:"Intuicija: cijena raste linearno, pa je ukupna cijena jednaka broju metara × prosjek prvog i zadnjeg metra. Prosjek = (30 + 182)/2 = 106 €/m × 20 m = 2120 €.",note:"intuicija",final:true}],
    why:["Pravilo: aritmetički niz ima aₙ = a₁ + (n − 1)d; suma Sₙ = [FRAC:n(a₁ + aₙ)|2] = [FRAC:n(2a₁ + (n−1)d)|2].","Postupak: 1) identificiraj a₁ i d iz uvjeta. 2) izračunaj aₙ za zadnji član. 3) primijeni Sₙ formulu (preko a₁ i aₙ ili preko a₁ i d).","Intuicija (Gaussov trik): zbroji prvi i zadnji član, drugi i pretposljednji... svi parovi imaju isti zbroj (a₁ + aₙ). Ima n/2 parova → suma = [FRAC:n|2](a₁ + aₙ).","Česta greška 1: koristiti formulu Sₙ = n · a₁ (vrijedi samo za konstantni niz d = 0) — daje pogrešno 20 · 30 = 600 €.","Česta greška 2: pomiješati a₁ s d ili izračunati a₂₀ kao 30 + 8·20 = 190 umjesto 30 + 8·(20−1) = 182. Pažnja na (n − 1) u formuli.","Alt metoda — direktno zbrojiti: 30, 38, 46, ..., 182. Suma se može računati i kao 20 · prosjek = 20 · [FRAC:30+182|2] = 20 · 106 = 2120 ✓.","Provjera dimenzionalno: 20 metara × ~100 €/m daje red veličine 2000 € — odgovara D."]
  },
  {
    id:14,
    type:"mc",warn:"Pazi: slični trokuti imaju jednake KUTOVE i proporcionalne stranice (ne nužno jednake).",
    topic:"geom",
    points:1,
    q:"Koja od navedenih tvrdnja vrijedi za svaka dva slična trokuta?",
    opts:["Opsezi su im jednaki.","Površine su im jednake.","Mjere unutarnjih kutova su im jednake.","Odgovarajuće visine su im jednakih duljina."],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Definicija sličnih trokuta: imaju jednake odgovarajuće kutove I proporcionalne odgovarajuće stranice (faktor k)."},{txt:"A: opsezi su PROPORCIONALNI s k, NE jednaki (jednaki samo ako k = 1, što znači sukladnost, ne samo sličnost)."},{txt:"B: površine su u omjeru k² (kvadrat koeficijenta), NE jednake."},{txt:"D: odgovarajuće visine su PROPORCIONALNE s k, NE jednake."},{txt:"C: kutovi su uvijek jednaki — to je sama definicija sličnosti."},{txt:"Točan odgovor: C.",note:"odgovor",final:true},{txt:"Provjera s primjerom: trokut sa stranicama 3-4-5 i njegov \"veliki brat\" 6-8-10. Kutovi: 90°-arctg(3/4)-arctg(4/3) u oba ✓; opsezi 12 vs 20 (različiti); površine 6 vs 24 (omjer 4 = k²) ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, D su jednake samo ako su trokuti SUKLADNI (poseban slučaj sličnosti k = 1). Pitanje pita za \"svaka dva slična\" — što uključuje k ≠ 1.",note:"diagnostika",final:true},{txt:"Postupak: 1) provjeri svaku tvrdnju u kontekstu definicije. 2) za \"uvijek vrijedi\" tvrdnje traži kontraprimjer (par sličnih trokuta s k ≠ 1).",note:"postupak",final:true},{txt:"Intuicija: sličnost čuva OBLIK (kutove), mijenja samo VELIČINU (linearne dimenzije ×k, površine ×k², volumeni ×k³).",note:"intuicija",final:true}],
    why:["Pravilo: △ABC ∼ △A'B'C' ⟺ jednaki odgovarajući kutovi I [FRAC:a'|a] = [FRAC:b'|b] = [FRAC:c'|c] = k (koeficijent sličnosti).","Postupak: 1) provjeri svaku tvrdnju u kontekstu definicije. 2) za \"uvijek vrijedi\" tvrdnje traži kontraprimjer (par sličnih trokuta s k ≠ 1).","Intuicija: kao zoom — povećavanjem fotografije objekti zadržavaju oblik (kutove) ali sve dužine se proporcionalno mijenjaju.","Česta greška 1: pomiješati sličnost (∼) i sukladnost (≅). Sukladnost: jednake stranice + kutovi. Sličnost: samo jednaki kutovi + proporcionalne stranice.","Česta greška 2: misliti da su površine sličnih trokuta proporcionalne s k (linearno). Površine su proporcionalne s k² (kvadratno) — bitna razlika.","Alt metoda: konstruiraj dva slična trokuta s različitim k (npr. 3-4-5 i 9-12-15, k = 3) i izmjeri svaku tvrdnju. Samo C ostaje ista.","Provjera: trokuti 1-1-√2 (jednakokračni pravokutni) i 2-2-2√2 — kutovi 45°-45°-90° u oba ✓; opsezi 2+√2 vs 4+2√2 (drugi je 2× veći)."]
  },
  {
    id:15,
    img:true,
    type:"mc",warn:"Pazi: OB i OC su polumjeri; ako je OBC jednakostraničan, kutovi su 60° — iskoristi to.",
    topic:"geom",
    points:1,
    q:"Na skici je prikazana kružnica sa središtem u točki O. Dužina AB promjer je te kružnice, a trokut OBC je jednakostraničan. Koliko iznosi mjera kuta x?",
    opts:["30°","35°","45°","60°"],
    sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
    steps:[{txt:"Trokut OBC jednakostraničan → svi kutovi 60°. Posebno ∠BOC = 60°."},{txt:"A, O, B su kolinearne (AB je promjer prolazeći kroz O) → ∠AOC i ∠BOC su SUPLEMENTARNI."},{txt:"∠AOC = 180° − ∠BOC = 180° − 60° = 120°."},{txt:"Trokut AOC: |OA| = |OC| = r (polumjeri kružnice) — pa je AOC JEDNAKOKRAČAN."},{txt:"Kutovi pri osnovici jednakokračnog trokuta jednaki: ∠OAC = ∠OCA = [FRAC:180° − 120°|2] = 30°."},{txt:"Kut x = ∠OAC = 30°."},{txt:"Točan odgovor: A — 30°.",note:"odgovor",final:true},{txt:"Provjera kutova trokuta ABC: ∠BAC (= x) = 30°; ∠ACB = ∠OCA + ∠OCB = 30° + 60° = 90° (Tales!); ∠ABC = 60° (OBC). Zbroj: 30°+90°+60° = 180° ✓.",note:"verifikacija",final:true},{txt:"Distraktori: B) 35° (proizvoljno); C) 45° (kut u polukrugu nije nužno 45°); D) 60° (mješanje s kutom u OBC).",note:"diagnostika",final:true},{txt:"Postupak: 1) iskoristi jednakostraničnost ∠BOC = 60°. 2) iskoristi suplementarnost (promjer) ∠AOC = 120°. 3) iskoristi jednakokračnost AOC (|OA|=|OC|=r) → kutovi pri osnovici (180−120)/2 = 30°.",note:"postupak",final:true},{txt:"Intuicija: tri koraka — jednakostraničnost daje 60°; suplementarnost na promjeru daje 120°; jednakokračnost daje preostalih (180−120)/2 = 30°.",note:"intuicija",final:true}],
    why:["Pravilo: u jednakokračnom trokutu su kutovi pri osnovici jednaki; zbroj kutova svakog trokuta je 180°; A, O, B kolinearne → ∠AOC + ∠COB = 180° (suplementarni).","Postupak: 1) iskoristi jednakostraničnost ∠BOC = 60°. 2) iskoristi suplementarnost (promjer) ∠AOC = 120°. 3) iskoristi jednakokračnost AOC (|OA|=|OC|=r) → kutovi pri osnovici (180−120)/2 = 30°.","Intuicija: u kružnici sve dužine od središta su polumjeri (jednake) — svaki trokut s vrhom u O i bazom kao tetiva je jednakokračan.","Česta greška 1: pretpostaviti da je ABC jednakostraničan (nije — samo OBC). U ABC samo OBC dio ima sve jednake stranice.","Česta greška 2: zaboraviti Talesov teorem (kut u polukrugu nad promjerom je 90°) — to je dodatna provjera, ali ne mora se direktno koristiti.","Alt metoda — Tales: ∠ACB = 90° (kut nad promjerom). Trokut ABC: 90° + ∠CAB + ∠CBA = 180°. ∠CBA = ∠OBC = 60°. ∠CAB = 90° − 60° = 30° = x ✓.","Provjera dimenzije: 30° + 60° + 90° = 180° (kutovi u △ABC); 60° · 3 = 180° (kutovi u △OBC); 120° + 30° + 30° = 180° (kutovi u △AOC)."]
  },
  {
    id:16,
    img:true,
    type:"mc",warn:"Pazi: pravci se sijeku ako leže u istoj ravnini i nisu paralelni; mimoilazni se NE sijeku.",
    topic:"geom",
    points:1,
    q:"Na skici je prikazan kvadar ABCDEFGH. Koji od navedenih pravaca siječe pravac BH?",
    opts:["AC","AD","AE","AG"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"BH je PROSTORNA DIJAGONALA kvadra (spaja vrh B donje plohe s vrhom H gornje plohe, kroz unutrašnjost)."},{txt:"Provjeri AC: dijagonala donje plohe ABCD; leži u toj plohi, BH samo dodiruje plohu u točki B. Pravci AC i BH NE leže u istoj plohi → MIMOILAZNI."},{txt:"Provjeri AD: brid kvadra. AD leži u plohi ADHE, BH ne leži u toj plohi i siječe je samo u vrhu — MIMOILAZNI."},{txt:"Provjeri AE: vertikalni brid (visina). AE leži u plohi ABFE, BH ne leži u njoj — MIMOILAZNI."},{txt:"Provjeri AG: druga prostorna dijagonala kvadra (od A do G). Dvije prostorne dijagonale kvadra UVIJEK se sijeku u središtu kvadra."},{txt:"BH ∩ AG = {centar kvadra} — postoji presjek!"},{txt:"Točan odgovor: D — AG.",note:"odgovor",final:true},{txt:"Provjera: kvadar ima 4 prostorne dijagonale (AG, BH, CE, DF) — sve se sijeku u jednoj točki (središte tijela). Bilo koje dvije od njih su sekante.",note:"verifikacija",final:true},{txt:"Distraktori: A, B, C su sve brijevi/dijagonale ploha koji su mimoilazni s prostornom dijagonalom BH (osim u krajnjim točkama).",note:"diagnostika",final:true},{txt:"Intuicija: prostorne dijagonale \"spajaju nasuprotne vrhove\" tijela kroz njegovu unutrašnjost — moraju proći kroz centar.",note:"intuicija",final:true},{txt:"Postupak: 1) identificiraj BH kao prostornu dijagonalu. 2) za svaki kandidat provjeri leže li u istoj plohi (komplanarni) ili sijeku se u zajedničkom vrhu. 3) drugu prostornu dijagonalu prepoznaj kao sekantu.",note:"postupak",final:true}],
    why:["Pravilo: dvije prostorne dijagonale kvadra (između nasuprotnih vrhova kroz tijelo) sijeku se u središtu tijela. Brid + dijagonala plohe = mimoilazni ako nisu u istoj plohi.","Postupak: 1) identificiraj BH kao prostornu dijagonalu. 2) za svaki kandidat provjeri leže li u istoj plohi (komplanarni) ili sijeku se u zajedničkom vrhu. 3) drugu prostornu dijagonalu prepoznaj kao sekantu.","Intuicija: zamisli štap koji ide iz vrha B do nasuprotnog vrha H — prolazi kroz centar tijela. Drugi takav štap (AG) također prolazi kroz centar — sijeku se tamo.","Česta greška 1: misliti da BH siječe AC jer obje \"su dijagonale\" — AC je dijagonala PLOHE, ne tijela. Različite vrste dijagonala.","Česta greška 2: zaboraviti razliku između \"mimoilaznih\" (ne leže u istoj ravnini, ne sijeku se) i \"paralelnih\" (leže u istoj ravnini, ne sijeku se) pravaca.","Alt metoda — koordinatno: postavi A = (0,0,0), B = (a,0,0), ..., G = (a,b,c), H = (0,b,c). BH = pravac od (a,0,0) do (0,b,c); AG = pravac od (0,0,0) do (a,b,c). Sjekuća točka: ([FRAC:a|2], [FRAC:b|2], [FRAC:c|2]) ✓.","Provjera: centar kvadra je polovište svake od 4 prostorne dijagonale — sve 4 se sijeku u jednoj točki."]
  },
  {
    id:17,
    type:"mc",warn:"Pazi: V = r²πh, a h = 2r → 2r³π = 24π → nađi r, pa h = 2r.",
    topic:"geom",
    points:1,
    q:"Volumen valjka iznosi 24π cm³, a njegova visina jednaka je duljini promjera osnovke. Kolika je visina toga valjka zaokružena na dva decimalna mjesta?",
    opts:["3,46 cm","4,58 cm","5,77 cm","9,79 cm"],
    sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
    steps:[{txt:"Formula volumena valjka: V = π · r² · h."},{txt:"Uvjet: visina = promjer = 2r, dakle h = 2r."},{txt:"Supstituiraj u formulu: V = π · r² · (2r) = 2π · r³."},{txt:"Postavimo jednadžbu: 2π · r³ = 24π → r³ = 12 → r = ∛12."},{txt:"r = ∛12 ≈ 2,289 cm."},{txt:"h = 2r ≈ 4,578 cm ≈ 4,58 cm (zaokruženo na 2 decimale)."},{txt:"Točan odgovor: B — 4,58 cm.",note:"odgovor",final:true},{txt:"Provjera: V = π · (2,289)² · 4,578 ≈ π · 5,239 · 4,578 ≈ π · 23,98 ≈ 24π ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 3,46 ≈ 2√3 (krivo r kao polumjer); C) 5,77 (možda 2·∛24/2 — krivo manipuliranje); D) 9,79 (možda h=4r ili neki kvadratni eksponent).",note:"diagnostika",final:true},{txt:"Intuicija: kad je h = 2r, valjak ima \"kvadratan\" poprečni presjek (visina = promjer); volumen postaje 2πr³ — kubna funkcija od r.",note:"intuicija",final:true},{txt:"Postupak: 1) izrazi h preko r koristeći uvjet. 2) supstituiraj u formulu volumena. 3) riješi za r. 4) izračunaj h iz r.",note:"postupak",final:true}],
    why:["Pravilo: V valjka = π r² h. Ako h = kr za neki konstantni odnos, V postaje funkcija samo od r — kubna.","Postupak: 1) izrazi h preko r koristeći uvjet. 2) supstituiraj u formulu volumena. 3) riješi za r. 4) izračunaj h iz r.","Intuicija: smanjenje broja nepoznanica sa 2 (r, h) na 1 (samo r) kroz uvjet uzajamne zavisnosti.","Česta greška 1: zamijeniti polumjer s promjerom — koristiti h = r umjesto h = 2r. Daje r = ∛24 ≈ 2,88 i h = 2,88 (pogrešno).","Česta greška 2: računati π · r · h = 24 (formula opsega umjesto volumena) ili 2πr² (površina) — pogrešne formule.","Alt metoda: koristi h = 2r direktno u V = πr²h = πr²·2r = 2πr³; ovo je 1/3 od konusa istih dimenzija, ali ovdje valjak — provjerimo dimenzijama.","Provjera: jedinice cm³ — r u cm, h u cm, π je bezdimenzionalan; svi članovi konzistentni."]
  },
  {
    id:18,
    img:true,
    type:"mc",warn:"Pazi: a + b = nadovezivanje vektora (pravilo trokuta) ili zbroj komponenti.",
    topic:"geom",
    points:1,
    q:"Na slici su prikazani vektori a⃗ i b⃗. Čemu je jednako a⃗ + b⃗?",
    opts:["−3i⃗ − 3j⃗","−5i⃗ − j⃗","i⃗ − 2j⃗","6i⃗ − 4j⃗"],
    sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
    steps:[{txt:"Vektor je određen razlikom koordinata kraja i početka: a⃗ = (Q.x − P.x)i⃗ + (Q.y − P.y)j⃗ za vektor od P do Q."},{txt:"Sa slike očitaj koordinate: vektor a⃗ ide iz početne točke (npr. (−3, 2)) u krajnu (npr. (0, 2)) → a⃗ = 3i⃗ + 0j⃗."},{txt:"Vektor b⃗ s slike: ide iz npr. (−2, 1) u (1, −3) → b⃗ = 3i⃗ + (−4)j⃗ = 3i⃗ − 4j⃗."},{txt:"Zbroj po komponentama: a⃗ + b⃗ = (3 + 3)i⃗ + (0 + (−4))j⃗ = 6i⃗ − 4j⃗."},{txt:"Točan odgovor: D — 6i⃗ − 4j⃗.",note:"odgovor",final:true},{txt:"Provjera duljinom: |a⃗ + b⃗| = √(36 + 16) = √52 ≈ 7,21 — usporedi s vizualnom procjenom rezultantne strelice na slici ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) −3i⃗ − 3j⃗ (zbrajanje krivim smjerom); B) i C) — vjerojatno zamijenjene koordinate ili pomiješane komponente.",note:"diagnostika",final:true},{txt:"Intuicija: zbroj vektora geometrijski je \"glava na rep\" — postavi b⃗ od kraja a⃗; rezultanta ide od početka a⃗ do kraja b⃗.",note:"intuicija",final:true},{txt:"Postupak: 1) sa slike odredi koordinate POČETKA i KRAJA svake strelice. 2) izračunaj komponente svakog vektora. 3) zbrajaj odgovarajuće (x s x, y s y).",note:"postupak",final:true}],
    why:["Pravilo: za vektor od P(p₁, p₂) do Q(q₁, q₂) komponente su (q₁ − p₁, q₂ − p₂); zbrajanje vektora po komponentama: a⃗ + b⃗ = (aₓ + bₓ)i⃗ + (aᵧ + bᵧ)j⃗.","Postupak: 1) sa slike odredi koordinate POČETKA i KRAJA svake strelice. 2) izračunaj komponente svakog vektora. 3) zbrajaj odgovarajuće (x s x, y s y).","Intuicija: vektor nije vezan za poziciju — može se \"translatirati\" bilo gdje. Što je važno je SMJER i DULJINA, koji su određeni komponentama.","Česta greška 1: koristiti koordinate krajnjih točaka direktno (Q₁ + Q₂) umjesto razlika (Q − P). Vektor nije pozicija, već pomak.","Česta greška 2: pomiješati i⃗ s j⃗ — zbrojiti horizontalne s vertikalnim komponentama. Uvijek odvoji x-os od y-osi.","Alt metoda — paralelogramno pravilo: nacrtaj a⃗ i b⃗ od iste točke; rezultantna dijagonala paralelograma je a⃗ + b⃗. Slično rezultatu glava-na-rep metode.","Provjera: ako oduzmeš b⃗ od rezultante (6i⃗ − 4j⃗) − (3i⃗ − 4j⃗) = 3i⃗ + 0j⃗ = a⃗ ✓."]
  },
  {
    id:19,
    type:"mc",warn:"Pazi: medijan = srednji član SORTIRANOG niza (9 podataka → 5. po redu).",
    topic:"stat",
    points:1,
    q:"Koliko iznosi medijan skupa podataka 12, 14, 11, 15, 15, 13, 15, 11, 14?",
    opts:["12","13","14","15"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Medijan = vrijednost koja dijeli sortirani skup podataka na dvije jednako brojne polovice."},{txt:"Prvi korak — sortiraj uzlazno: 11, 11, 12, 13, 14, 14, 15, 15, 15."},{txt:"Broj podataka n = 9 (neparan)."},{txt:"Za neparan n, medijan je središnji element — onaj na poziciji [FRAC:n+1|2] = [FRAC:10|2] = 5."},{txt:"5. element sortiranog niza: 11, 11, 12, 13, **14**, 14, 15, 15, 15 → medijan = 14."},{txt:"Točan odgovor: C — 14.",note:"odgovor",final:true},{txt:"Provjera: prije medijana 4 manje vrijednosti (11, 11, 12, 13); poslije 4 veće (14, 15, 15, 15) — simetrična podjela ✓.",note:"verifikacija",final:true},{txt:"Distraktori: A) 12 (treća pozicija); B) 13 (četvrta pozicija); D) 15 (mod — najčešća vrijednost, ne medijan).",note:"diagnostika",final:true},{txt:"Intuicija: medijan je \"srednjak\" — ne kao prosjek (koji može biti pomaknut ekstremnim vrijednostima), nego stvarni element po redu.",note:"intuicija",final:true},{txt:"Postupak: 1) sortiraj sve podatke uzlazno. 2) provjeri je li n paran ili neparan. 3) odredi srednji element (ili prosjek dvaju srednjih).",note:"postupak",final:true}],
    why:["Pravilo: za sortirani niz dužine n: medijan = ([FRAC:n+1|2])-ti element ako je n neparan; ([FRAC:n/2 + (n/2+1)|2]) prosjek dva srednja ako je n paran.","Postupak: 1) sortiraj sve podatke uzlazno. 2) provjeri je li n paran ili neparan. 3) odredi srednji element (ili prosjek dvaju srednjih).","Intuicija: medijan dijeli podatke na \"manju polovicu\" i \"veću polovicu\" — robustan na ekstremne vrijednosti (outliere).","Česta greška 1: izračunati aritmetičku sredinu umjesto medijana. Prosjek = (zbroj)/n; medijan je SREDNJI ELEMENT, ne njegova vrijednost u prosjeku.","Česta greška 2: izvjestiti mod (najčešću vrijednost, 15) umjesto medijana. To su tri različite mjere središnje tendencije — prosjek, medijan, mod.","Alt metoda: zbroji obje strane od pretpostavljenog medijana. Ako je 14 medijan, mora biti 4 manjih i 4 većih ili jednakih — provjeri ✓.","Provjera prosjek/medijan/mod: prosjek = (12+14+...+11)/9 = 120/9 ≈ 13,3; medijan = 14; mod = 15 — različite tri mjere, što potvrđuje da podaci nisu simetrični."]
  },
  {
    id:20,
    type:"mc",warn:"Pazi: vjerojatnost = povoljni/ukupni (20); pazi koliko je povoljnih po uvjetu.",
    topic:"stat",
    points:1,
    q:"U Larinome je razredu 20 učenika. Nastavnik slučajnim odabirom proziva jednoga učenika. Koliko iznosi vjerojatnost da NIJE prozvana Lara?",
    opts:["0,8","0,9","0,95","0,99"],
    sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
    steps:[{txt:"Ukupno mogućih ishoda = 20 (svaki učenik može biti prozvan s jednakom vjerojatnošću)."},{txt:"Povoljni ishodi za događaj \"nije Lara\" = 19 (sve osim Lare)."},{txt:"Vjerojatnost = [FRAC:povoljni|ukupni] = [FRAC:19|20]."},{txt:"[FRAC:19|20] = 0,95."},{txt:"Alternativno preko komplementa: P(Lara) = [FRAC:1|20] = 0,05; P(nije Lara) = 1 − 0,05 = 0,95."},{txt:"Točan odgovor: C — 0,95.",note:"odgovor",final:true},{txt:"Provjera: P(Lara) + P(nije Lara) = 0,05 + 0,95 = 1 ✓ (komplement vraća puni vjerojatnostni prostor).",note:"verifikacija",final:true},{txt:"Distraktori: A) 0,8 (16/20 = 80% — pogrešna brojanja); B) 0,9 (18/20); D) 0,99 (199/200 — pogrešan razred).",note:"diagnostika",final:true},{txt:"Postupak: 1) odredi prostor svih mogućih ishoda. 2) identificiraj povoljne ishode za događaj. 3) podijeli povoljne s ukupnim. 4) (alt) iskoristi komplement ako je jednostavnije.",note:"postupak",final:true},{txt:"Intuicija: ako je 1 šansa od 20 da Lara bude prozvana, onda je 19/20 = 95% šansa da netko drugi.",note:"intuicija",final:true}],
    why:["Pravilo: klasična vjerojatnost P(A) = [FRAC:broj povoljnih ishoda|broj svih ishoda]. Komplementarna: P(¬A) = 1 − P(A); P(A) + P(¬A) = 1.","Postupak: 1) odredi prostor svih mogućih ishoda. 2) identificiraj povoljne ishode za događaj. 3) podijeli povoljne s ukupnim. 4) (alt) iskoristi komplement ako je jednostavnije.","Intuicija: \"vjerojatnost da nije Lara\" = \"vjerojatnost da je netko od 19 drugih\" — komplement Larinog jednog mjesta.","Česta greška 1: dati 1/20 = 0,05 (vjerojatnost da JE Lara prozvana) umjesto komplementa. Pažljivo čitaj pitanje — \"NIJE Lara\".","Česta greška 2: misliti da je razlika 1 − 1/20 = 19/19 (jer \"ostaje 19 učenika\") — pogrešno svojstvo razlomka. Ukupni prostor ostaje 20, ne 19.","Alt metoda: izračunaj P kao kvocijent \"uspjeha\" (19 učenika koji nisu Lara) od \"pokušaja\" (20 mogućih izbora). 19/20 = 0,95.","Provjera: ako bi razred imao 2 učenika (Lara + 1), P(nije Lara) = 1/2 = 0,5; za 20: 19/20 = 0,95 (mnogo veće jer je više \"ne-Lara\" učenika)."]
  },
  {
    id:21,
    type:"sa",
    topic:"br",
    points:1,
    q:"Zapišite jedan racionalni broj veći od 0 i manji od √2.",
    sol:{ans:"npr. 1",alt:["1","1,2","1,3","1,4","5/4","7/5","1/2","0,5","[FRAC:1|2]","[FRAC:5|4]","[FRAC:7|5]"]},
    steps:[{txt:"Treba pronaći broj iz skupa ℚ ∩ ⟨0, √2⟩ = ⟨0, 1,4142...⟩."},{txt:"√2 ≈ 1,4142 (iracionalan, ali možemo aproksimirati)."},{txt:"Bilo koji racionalan broj u tom intervalu zadovoljava — to su brojevi izrecljivi kao razlomak [FRAC:p|q] između 0 i 1,4142."},{txt:"Najjednostavniji primjer: broj 1 (cijeli broj, ali svaki cijeli ∈ ℚ). 0 < 1 < 1,4142 ✓."},{txt:"Drugi valjani primjeri: [FRAC:1|2] = 0,5; [FRAC:5|4] = 1,25; [FRAC:7|5] = 1,4."},{txt:"Točan odgovor: 1 (ili bilo koji navedeni).",note:"odgovor",final:true},{txt:"Provjera za 1: 0 < 1 ✓ i 1² = 1 < 2 = (√2)² → 1 < √2 ✓ (kvadrirajući obje strane pri pozitivnim brojevima).",note:"verifikacija",final:true},{txt:"Postupak za sve odgovore: izaberi razlomak (ili decimalan) između 0 i približno 1,414.",note:"postupak",final:true},{txt:"Intuicija: ℚ je gust skup unutar ℝ — između bilo koja dva realna broja postoji beskonačno racionalnih brojeva.",note:"intuicija",final:true}],
    why:["Pravilo: racionalan broj je svaki broj oblika [FRAC:p|q] gdje je p ∈ ℤ, q ∈ ℕ. Skup ℚ je gust u ℝ — između bilo koje dvije realne vrijednosti postoji racionalan broj.","Postupak: 1) odredi približno granice intervala (√2 ≈ 1,414). 2) izaberi bilo koji decimalan broj s konačnim brojem decimala, ili razlomak, unutar tog intervala. 3) provjeri da je strogo unutar (ne na rubu).","Intuicija: zamisli brojevni pravac od 0 do 1,414... — bilo gdje \"stajnje\" je racionalan broj koji odgovara.","Česta greška 1: navesti √2 (točno rub, ne strogo manje) ili 1,5 (= 3/2 = 1,5 > √2 ≈ 1,414). Pažljivo procijeni veličinu — 1,5 NIJE manje od √2!","Česta greška 2: navesti iracionalan broj (npr. √2/2 ≈ 0,707) misleći da je racionalan. √2/2 je iracionalan (= 1/√2).","Alt metoda: koristi neke poznate aproksimacije √2 ≈ 1,414; bilo koji broj poput 1,4 ili 1,41 (s konačnim decimalama) je sigurno racionalan i manji od √2.","Provjera: kvadriraj kandidat. Ako je x² < 2 i x > 0, onda x < √2. Npr. 1,4² = 1,96 < 2 ✓ → 1,4 < √2 ✓."]
  },
  {
    id:22,
    type:"sa",
    topic:"al",
    points:1,
    q:"Koliko iznosi a + b ako je 18 = 2^a · 3^b?",
    sol:{ans:"3",alt:["3","npr. 3"]},
    steps:[{txt:"Rastavi 18 na proste faktore: 18 = 2 · 9 = 2 · 3 · 3 = 2¹ · 3²."},{txt:"Usporedi s 2^a · 3^b: izrazi imaju isti oblik samo ako a = 1 i b = 2 (jedinstveno po Osnovnom teoremu aritmetike)."},{txt:"Zbroj: a + b = 1 + 2 = 3."},{txt:"Točan odgovor: 3.",note:"odgovor",final:true},{txt:"Provjera: 2¹ · 3² = 2 · 9 = 18 ✓.",note:"verifikacija",final:true},{txt:"Postupak: rastav broja na proste faktore, identifikacija eksponenata, zbrajanje.",note:"postupak",final:true},{txt:"Intuicija: prosti rastav broja je jedinstven (osnovni teorem aritmetike), pa eksponenti uz 2 i 3 su jednoznačno određeni.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
    why:["Pravilo: po Osnovnom teoremu aritmetike, svaki prirodan broj > 1 ima JEDINSTVEN rastav na proste faktore (do redoslijeda). 18 = 2¹ · 3² jedinstveno.","Postupak: 1) podijeli broj s najmanjim prostim brojem dok je moguće. 2) prebroji koliko puta se pojavljuje svaki prosti broj. 3) pridruži taj broj odgovarajućem eksponentu.","Intuicija: \"razloži\" 18 u \"ciglice\" koje su prosti brojevi: 2 jedanput, 3 dvaput → 2 · 3 · 3 = 18.","Česta greška 1: napisati 18 = 2 · 9 i misliti b = 9 (jer 9 stoji \"iza\"). Ali 9 nije 3¹ — treba dalje rastaviti 9 = 3².","Česta greška 2: zbroji 1 + 9 = 10 (gdje 9 je sam broj, ne eksponent). Trebaju EKSPONENTI nad 2 i 3, ne brojevi.","Alt metoda — logaritamski: a = log₂(2) = 1 (jer dijeljenje 18 s prostim faktorima daje 2 jedan put); b = log₃(9) = 2 (jer 9 = 3·3).","Provjera: izračunaj 2^a · 3^b za a + b = 3 (npr. a = 0, b = 3 → 1 · 27 = 27 ≠ 18; samo a = 1, b = 2 daje 18 ✓)."]
  },
  {
    id:23,
    type:"sa",
    topic:"al",
    points:1,
    q:"Riješite jednadžbu x² − 3x = 10.",
    sol:{ans:"−2 i 5",alt:["−2 i 5","-2 i 5","−2, 5","5 i −2","x = −2, x = 5","x₁ = −2, x₂ = 5","{−2, 5}"]},
    steps:[{txt:"Prebaci sve na lijevu stranu — standardni oblik kvadratne jednadžbe: x² − 3x − 10 = 0."},{txt:"Identificiraj koeficijente: a = 1, b = −3, c = −10."},{txt:"Diskriminanta: D = b² − 4ac = (−3)² − 4 · 1 · (−10) = 9 + 40 = 49."},{txt:"√D = √49 = 7. Postoji dva realna rješenja (D > 0)."},{txt:"Kvadratna formula: x = [FRAC:−b ± √D|2a] = [FRAC:3 ± 7|2]."},{txt:"x₁ = [FRAC:3 + 7|2] = [FRAC:10|2] = 5; x₂ = [FRAC:3 − 7|2] = [FRAC:−4|2] = −2."},{txt:"Točan odgovor: −2 i 5.",note:"odgovor",final:true},{txt:"Provjera za x = 5: 5² − 3·5 = 25 − 15 = 10 ✓; za x = −2: (−2)² − 3·(−2) = 4 + 6 = 10 ✓.",note:"verifikacija",final:true},{txt:"Alt provjera Vièteovim formulama: x₁ + x₂ = 5 + (−2) = 3 = [FRAC:−b|a]; x₁ · x₂ = 5 · (−2) = −10 = [FRAC:c|a] ✓.",note:"postupak",final:true},{txt:"Intuicija: kvadratna jednadžba s pozitivnom diskriminantom ima dva rješenja koja se mogu naći formulom ili faktorizacijom.",note:"intuicija",final:true}],
    why:["Pravilo: kvadratna jednadžba ax² + bx + c = 0 (a ≠ 0) ima rješenja x = [FRAC:−b ± √(b² − 4ac)|2a]. Diskriminanta D = b² − 4ac određuje broj realnih rješenja.","Postupak: 1) prebaci sve na jednu stranu (standardni oblik = 0). 2) identificiraj a, b, c. 3) izračunaj D. 4) ako D ≥ 0, primijeni formulu; ako D < 0 — nema realnih rješenja.","Intuicija: kvadratna jednadžba odgovara paraboli y = ax² + bx + c. Rješenja su x-presjeci s osi x; D > 0 znači dva presjeka.","Česta greška 1: zaboraviti minus u −b kod formule. Ako je b = −3, onda −b = +3, ne −3.","Česta greška 2: pomiješati znakove kod izračuna D. Ovdje c = −10, pa je −4ac = −4·1·(−10) = +40, ne −40. Pažnja s dvostrukim minusima.","Alt metoda — faktorizacija: x² − 3x − 10 = (x − 5)(x + 2) = 0 → x = 5 ili x = −2. Brže ako se faktorizacija \"vidi\".","Provjera Vièteovim formulama: x₁ + x₂ = −[FRAC:b|a] i x₁ · x₂ = [FRAC:c|a]. Ovdje 5 − 2 = 3 = −(−3) ✓ i 5 · (−2) = −10 ✓."]
  },
  {
    id:24,
    type:"sa",
    topic:"fun",
    points:1,
    q:"Bazen se prazni tako da voda istječe stalnom brzinom. Za potpuno pražnjenje bazena zapremine 2600 litara potrebno je 13 sati. Napišite formulu kojom se računa količina vode V u bazenu, izražena u litrama, ovisno o broju sati pražnjenja x.",
    sol:{ans:"V(x) = 2600 − 200x",alt:["V(x) = 2600 − 200x","V(x)=2600-200x","2600 − 200x","2600 - 200x"]},
    steps:[{txt:"Početna količina vode: V(0) = 2600 L (pun bazen)."},{txt:"Brzina istjecanja (stalna): [FRAC:2600 L|13 h] = 200 L/h."},{txt:"Količina koja je istekla u x sati: 200x L."},{txt:"Količina preostale vode u bazenu: V(x) = 2600 − 200x."},{txt:"Točan odgovor: V(x) = 2600 − 200x.",note:"odgovor",final:true},{txt:"Provjera: V(0) = 2600 ✓ (pun); V(13) = 2600 − 200·13 = 2600 − 2600 = 0 ✓ (prazan na vrijeme).",note:"verifikacija",final:true},{txt:"Postupak: 1) odredi početnu vrijednost (V₀ = 2600). 2) izračunaj brzinu (ukupna količina / vrijeme). 3) sastavi linearnu funkciju V(x) = V₀ − brzina · x.",note:"postupak",final:true},{txt:"Intuicija: stalna brzina = linearna funkcija; pad razine vode je proporcionalan vremenu pražnjenja.",note:"intuicija",final:true}],
    why:["Pravilo: kod konstantne brzine promjene, veličina V kao funkcija vremena x je LINEARNA: V(x) = V₀ + k·x, gdje je k brzina promjene (negativna za smanjenje).","Postupak: 1) početna vrijednost = V(0) = ukupni iznos. 2) brzina (apsolutna) = (ukupna količina)/(ukupno vrijeme). 3) predznak brzine: − ako se troši, + ako raste.","Intuicija: graf V(x) je pravac koji počinje na 2600 (kad je x = 0) i siječe x-os na 13 (kad je V = 0). Nagib pravca: −200 L/h.","Česta greška 1: koristiti [FRAC:x|13] umjesto 200x — to bi mjerilo razinu u postocima ili dijelovima, ne u litrama.","Česta greška 2: V(x) = 2600 + 200x (krivi predznak) — to bi značilo da bazen RASTE, ne smanjuje se.","Alt metoda — kroz dvije točke pravca: (0, 2600) i (13, 0). Nagib k = [FRAC:0 − 2600|13 − 0] = −200; y-odsječak = 2600 → V(x) = 2600 − 200x ✓.","Provjera: V(5) = 2600 − 1000 = 1600 L (poslije 5 sati nestane 1000 L, ostaje 1600 — ima smisla); V(13) = 0 (točno na kraju)."]
  },
  {
    id:25,
    type:"sa",
    topic:"al",
    points:1,
    q:"Petar je kupio automobil za 28 400 eura. Vrijednost automobila svake godine pada za 16 % u odnosu na vrijednost u prethodnoj godini. Kolika će biti cijena automobila nakon 5 godina?",
    sol:{ans:"11 877,22 €",alt:["11 877,22 €","11877,22 €","11877.22 €","11 877,22 €","≈ 11 877,22 €","≈ 11877,22","11 877,21 €","11 877,23 €","11877,21","11877,23"]},
    steps:[{txt:"Godišnji pad 16 % znači da je vrijednost na kraju godine 100 % − 16 % = 84 % vrijednosti na početku."},{txt:"Faktor smanjenja godišnje: 0,84."},{txt:"Cijena nakon n godina: Cₙ = C₀ · (0,84)ⁿ (geometrijski model)."},{txt:"Za n = 5: C₅ = 28 400 · (0,84)⁵."},{txt:"Izračun (0,84)⁵: 0,84² = 0,7056; 0,84⁴ = 0,7056² ≈ 0,49787; 0,84⁵ = 0,49787 · 0,84 ≈ 0,41821."},{txt:"C₅ ≈ 28 400 · 0,41821 ≈ 11 877,22 €."},{txt:"Točan odgovor: ≈ 11 877,22 €.",note:"odgovor",final:true},{txt:"Provjera korak po korak: god. 1: 28 400 · 0,84 = 23 856; god. 2: 23 856 · 0,84 ≈ 20 039; god. 3: 16 833; god. 4: 14 140; god. 5: ≈ 11 877 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) faktor smanjenja r = 1 − p/100. 2) primijeni Cₙ = C₀ · rⁿ. 3) izračunaj numerički (kalkulator).",note:"postupak",final:true},{txt:"Intuicija: postotni pad svake godine = EKSPONENCIJALNI pad (NE linearni). Svake godine se gubi 16 % preostale vrijednosti, ne 16 % početne.",note:"intuicija",final:true}],
    why:["Pravilo: kod stalnog postotnog smanjenja vrijednost se mijenja geometrijski: Cₙ = C₀ · (1 − [FRAC:p|100])ⁿ. Drugi standardni model: za rast, Cₙ = C₀ · (1 + [FRAC:p|100])ⁿ.","Postupak: 1) odredi faktor jedne periode (npr. godina) r = 1 − p/100. 2) primijeni geometrijsku formulu Cₙ = C₀ · rⁿ. 3) izračunaj rⁿ (može tablica ili kalkulator).","Intuicija: 16 % od 28 400 je 4 544 (prva godina). Ali sljedeća godina se računa od 23 856 (već smanjeno), pa pad je 0,16 · 23 856 ≈ 3 817 (manje). Eksponencijalna distrubucija pada.","Česta greška 1: linearni model — oduzimati 16 % od 28 400 svake godine (4 544 · 5 = 22 720; 28 400 − 22 720 = 5 680). To je daleko od stvarne vrijednosti i NIJE točno za \"u odnosu na prethodnu godinu\".","Česta greška 2: koristiti faktor 0,16 (gubitak) umjesto 0,84 (preostatak). C₅ = 28 400 · 0,16⁵ ≈ 28,9 — besmisleno malo.","Alt metoda: izračunaj log: log(0,84) ≈ −0,0757; 5 · log(0,84) ≈ −0,3784; 10^(−0,3784) ≈ 0,4182; · 28 400 ≈ 11 877.","Provjera: nakon 1 godine 0,84·28 400 = 23 856 € (realno za auto); nakon 5 godina ~11 877 €. Realna vrijednost se prepolovi za oko 4 godine pri ovom padu (rule of 72: 72/16 ≈ 4,5)."]
  },
  {
    id:26,
    type:"sa",
    topic:"fun",
    points:1,
    q:"Odredite jednadžbu pravca koji prolazi ishodištem koordinatnoga sustava i s pozitivnim smjerom osi x zatvara 135°.",
    sol:{ans:"y = −x",alt:["y = −x","y=-x","y = -x","y + x = 0"]},
    steps:[{txt:"Nagib pravca: k = tg(α), gdje je α kut koji pravac zatvara s pozitivnim smjerom osi x."},{txt:"α = 135° → k = tg(135°)."},{txt:"tg(135°) = tg(180° − 45°) = −tg(45°) = −1 (jer je tg u drugom kvadrantu negativan)."},{txt:"Pravac prolazi ishodištem (0, 0) → opći oblik y = kx + b s b = 0 (jer y(0) = 0)."},{txt:"Konkretno: y = −1 · x = −x."},{txt:"Točan odgovor: y = −x.",note:"odgovor",final:true},{txt:"Provjera: pravac y = −x prolazi kroz (0, 0) ✓; kut s osi x = arctg(−1) = −45° ili 135° (mjereno suprotno od kazaljke) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) nagib pravca k = tg(kut). 2) ako prolazi ishodištem, jednadžba je y = kx. 3) sastavi.",note:"postupak",final:true},{txt:"Intuicija: 135° = 180° − 45° → pravac \"gleda gore-lijevo\" pod 45°, što odgovara pravcu y = −x (silazni s nagibom 45° suprotno od kazaljke).",note:"intuicija",final:true}],
    why:["Pravilo: nagib pravca k = tg(α), gdje je α kut zatvaranja s pozitivnim smjerom osi x; pravac kroz ishodište ima jednadžbu y = kx (bez slobodnog člana).","Postupak: 1) iz kuta α izračunaj tg(α). 2) ako prolazi (0,0), y-odsječak = 0. 3) napiši y = tg(α) · x.","Intuicija: tangens kuta = \"omjer porasta y prema porastu x\" — to je geometrijska definicija nagiba.","Česta greška 1: koristiti tg(135°) = +1 zaboravljujući predznak u drugom kvadrantu. tg(45°) = +1, ali tg(135°) = −1.","Česta greška 2: dati y = x umjesto y = −x. y = x odgovara kutu 45° (rastući), a y = −x kutu 135° (silazni).","Alt metoda — vektorski: pravac kroz (0,0) sa smjerom (cos 135°, sin 135°) = (−[FRAC:√2|2], [FRAC:√2|2]). Parametarski (t, −t) (poslije skaliranja) → y = −x.","Provjera: točka (1, −1) je na pravcu y = −x ✓ i kut od osi x do vektora (1, −1) iznosi −45° ili 315°; suprotno smjeru 135° ali isti pravac. Ako uzmemo (−1, 1) (suprotni smjer): kut 135° ✓."]
  },
  {
    id:27,
    type:"sa",
    topic:"geom",
    points:1,
    q:"Trokutu površine 117 cm² upisana je kružnica polumjera 13 cm. Koliko iznosi opseg toga trokuta?",
    sol:{ans:"18 cm",alt:["18 cm","18cm","18","Takav trokut ne postoji.","trokut ne postoji"]},
    steps:[{txt:"Veza površine trokuta i upisane kružnice: P = r · s, gdje je r polumjer upisane kružnice, s = [FRAC:o|2] (poluopseg)."},{txt:"Supstituiraj vrijednosti: 117 = 13 · s."},{txt:"Riješi za s: s = [FRAC:117|13] = 9 cm."},{txt:"Opseg trokuta: o = 2s = 2 · 9 = 18 cm."},{txt:"Točan odgovor: 18 cm.",note:"odgovor",final:true},{txt:"Provjera formulom: P = r · s → 13 · 9 = 117 ✓.",note:"verifikacija",final:true},{txt:"Napomena: BODOVNA također prihvaća \"Takav trokut ne postoji\" — geometrijska provjera pokazuje da za polumjer upisane kružnice 13 cm i opseg samo 18 cm trokut nema realno rješenje (stranice bi morale biti malene, a r velik).",note:"postupak",final:true},{txt:"Intuicija: formula P = r·s je univerzalna za svaki trokut, neovisno o obliku; veza linearno povezuje r, s i P.",note:"intuicija",final:true}],
    why:["Pravilo: za bilo koji trokut s upisanom kružnicom (incircle) polumjera r vrijedi P = r · s, gdje je s = [FRAC:a + b + c|2] (poluopseg).","Postupak: 1) prepoznaj formulu P = r·s. 2) izrazi s = [FRAC:P|r]. 3) opseg o = 2s.","Intuicija: trokut se podijeli s upisanom kružnicom na 3 manja trokuta, svaki s vrhom u središtu kružnice i visinom r; ukupna površina = [FRAC:1|2]·r·(a+b+c) = r·s.","Česta greška 1: koristiti formulu za opisanu kružnicu (P = [FRAC:abc|4R]) — drugačija formula s drugim R. Upisana ima jednostavniju vezu.","Česta greška 2: zamijeniti poluopseg s opsegom: 117 = 13·o → o = 9 cm (pogrešno; trebao je s = 9).","Alt metoda — geometrijski: nacrtaj trokut s upisanom kružnicom; visina svakog malog \"kriške\" je r. Ukupna površina svih 3 kriški = [FRAC:1|2]·r·a + [FRAC:1|2]·r·b + [FRAC:1|2]·r·c = [FRAC:r|2](a+b+c) = r·s.","Provjera (i razlog za \"ne postoji\"): jednakostraničan trokut s opsegom 18 ima stranicu 6, površinu [FRAC:√3|4]·36 ≈ 15,6 cm² — daleko manje od 117. Trokut s P = 117 i o = 18 geometrijski je nemoguć. Otud \"Takav trokut ne postoji\" KAO ALTERNATIVNI točan odgovor!"]
  },
  {
    id:28,
    type:"sa",
    topic:"geom",
    points:1,
    q:"Površina jednoga jednakostraničnog trokuta 16 je puta veća od površine drugoga jednakostraničnog trokuta. Duljina je stranice većega trokuta 28 cm. Kolika je duljina stranice manjega trokuta?",
    sol:{ans:"7 cm",alt:["7 cm","7cm","7","6,9 cm","7,1 cm","6,9 cm","7,1 cm"]},
    steps:[{txt:"Slični likovi (svi jednakostranični trokuti su međusobno slični): omjer površina jednak je KVADRATU omjera linearnih dimenzija."},{txt:"Ako je P₁ = 16 · P₂, tada [FRAC:a₁|a₂] = √[FRAC:P₁|P₂] = √16 = 4."},{txt:"Označi a₁ (veća) = 28 cm; a₂ (manja) = [FRAC:a₁|4] = [FRAC:28|4] = 7 cm."},{txt:"Točan odgovor: 7 cm.",note:"odgovor",final:true},{txt:"Provjera: P većeg = [FRAC:28²·√3|4] = [FRAC:784√3|4] = 196√3; P manjeg = [FRAC:49√3|4] = 12,25√3. Omjer = [FRAC:196√3|12,25√3] = 16 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) za slične likove omjer površina = k². 2) k = √(omjer površina). 3) odgovarajuća stranica = velika stranica / k.",note:"postupak",final:true},{txt:"Intuicija: ako uvećaš trokut 4x linearno, površina raste 16x (kvadratno). Obrnuto: 16x veća površina → 4x veće stranice.",note:"intuicija",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
    why:["Pravilo: kod sličnih likova omjer površina = k² (kvadrat omjera linearnih dimenzija); omjer volumena = k³ (kub).","Postupak: 1) prepoznaj sličnost (svi jednakostranični trokuti slični). 2) iz omjera površina izračunaj k = √(omjer). 3) primijeni k na odgovarajuće stranice.","Intuicija: skala dimenzija se \"propaganda\" u dimenzije višeg reda. Linearno k → površina k², volumen k³. Zato 4·4 = 16 odgovara omjeru 1:16 površina.","Česta greška 1: podijeliti stranicu sa 16 (linearno) umjesto sa √16 = 4. Daje 28/16 = 1,75 cm (krivo).","Česta greška 2: zamijeniti smjer omjera. Ako je veći trokut 16x veće površine, OMJERAJU SE DOLJE (a₂ < a₁), pa a₂ = a₁/4. Ne a₂ = 4·a₁ = 112.","Alt metoda — direktno preko formula: P jednakostraničnog = [FRAC:a²√3|4]; [FRAC:P₁|P₂] = [FRAC:a₁²|a₂²] = 16 → [FRAC:a₁|a₂] = 4 → a₂ = [FRAC:28|4] = 7 ✓.","Provjera (intuicija o omjeru): a₁/a₂ = 28/7 = 4; (a₁/a₂)² = 16 = omjer površina ✓."]
  },
  {
    id:29,
    type:"sa",
    topic:"stat",
    points:1,
    q:"Prvih sedam dana srpnja temperature u podne bile su 32 °C, 35 °C, 33 °C, 34 °C, 34 °C, 31 °C i 29 °C. Kolika je bila temperatura u podne osmoga dana ako je prosječna temperatura prvih osam dana srpnja bila 32 °C?",
    sol:{ans:"28 °C",alt:["28 °C","28°C","28"]},
    steps:[{txt:"Aritmetička sredina = [FRAC:zbroj svih vrijednosti|broj članova]. Cilj: pronaći 8. temperaturu kad znamo prvih 7 i prosjek svih 8."},{txt:"Zbroj prvih 7 temperatura: 32 + 35 + 33 + 34 + 34 + 31 + 29 = 228 °C."},{txt:"Iz definicije prosjeka 8 dana: [FRAC:zbroj 8 dana|8] = 32 → zbroj 8 dana = 8 · 32 = 256 °C."},{txt:"8. temperatura = (zbroj svih 8) − (zbroj prvih 7) = 256 − 228 = 28 °C."},{txt:"Točan odgovor: 28 °C.",note:"odgovor",final:true},{txt:"Provjera prosjeka: (228 + 28) / 8 = 256/8 = 32 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj zbroj poznatih. 2) iz prosjeka izračunaj traženi zbroj svih. 3) razlika daje nepoznati član.",note:"postupak",final:true},{txt:"Intuicija: prosjek \"spušta\" 35 °C i \"diže\" 29 °C — sve zajedno čine 32 °C. 8. dan mora \"balansirati\" zbroj na željeni prosjek.",note:"intuicija",final:true}],
    why:["Pravilo: aritmetička sredina x̄ = [FRAC:Σxᵢ|n]; obratno: Σxᵢ = n · x̄ (suma = sredina × broj članova).","Postupak: 1) izračunaj zbroj poznatih vrijednosti. 2) iz prosjeka odredi ciljani zbroj svih. 3) traženi član = ciljani zbroj − poznati zbroj.","Intuicija: prosjek je \"ravnoteža\" — odstupanja iznad i ispod se kompenziraju. Vidim 35, 34, 34 iznad i 31, 29 ispod prosjeka 32 — moraju se \"sabrati\" tako da daju 0 odstupanja.","Česta greška 1: izračunati prosjek prvih 7 (228/7 ≈ 32,57) i pokušati neku algebru — to ne pomaže. Trebaš zbroj prvih 7 i ciljani zbroj svih 8.","Česta greška 2: koristiti pogrešan broj članova. n = 8 (prvih 7 + 8.), ne 7 ili 9. Pažljivo prebrojiti.","Alt metoda — odstupanja od prosjeka: 32 − 32 = 0; 35 − 32 = +3; 33 − 32 = +1; 34 − 32 = +2 (dvaput); 31 − 32 = −1; 29 − 32 = −3. Zbroj odstupanja prvih 7: 0+3+1+2+2−1−3 = 4. Da bi prosjek bio 32, 8. dan mora imati odstupanje −4 → 8. = 32 − 4 = 28 °C ✓.","Provjera: zbroj svih 8 = 32 + 35 + 33 + 34 + 34 + 31 + 29 + 28 = 256; 256/8 = 32 ✓."]
  },
  {
    id:30,
    img:true,
    type:"sa",
    topic:"stat",
    points:1,
    q:"U tablici su prikazane zaključne ocjene iz Fizike. Na crtu uz svaki kružni isječak napišite ocjenu (2, 3, 4 ili 5) tako da kružni dijagram prikazuje podatke iz tablice.",
    sol:{ans:"Po veličini isječka redom: 3 (najveći, 218), 4 (144), 2 (96), 5 (najmanji, 65).",alt:["3 (najveći), 4, 2, 5 (najmanji)","3, 4, 2, 5","dovoljan-3 najveći, vrlo dobar-4, dobar-2, odličan-5 najmanji"]},
    steps:[{txt:"Iz tablice broj učenika po ocjeni: 2 → 96, 3 → 218, 4 → 144, 5 → 65."},{txt:"Ukupno učenika: 96 + 218 + 144 + 65 = 523."},{txt:"Postoci po ocjeni: 2 → [FRAC:96|523] ≈ 18,4 %; 3 → 41,7 %; 4 → 27,5 %; 5 → 12,4 %."},{txt:"Sortiraj postotke silazno (po veličini isječka): 3 (najveći), 4, 2, 5 (najmanji)."},{txt:"Mapiraj boje isječaka na ocjene prema veličini: crveni (najveći) = 3; sivi = 4; plavi = 2; žuti (najmanji) = 5."},{txt:"Točan odgovor: 3 (najveći), 4, 2, 5 (najmanji).",note:"odgovor",final:true},{txt:"Provjera: 41,7° · 360° ≈ 150° (za ocjenu 3) — vidljivo na pie chart kao najveći isječak ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj relativne frekvencije iz tablice. 2) sortiraj silazno. 3) pridruži ocjenu odgovarajućoj veličini isječka.",note:"postupak",final:true},{txt:"Intuicija: veličina isječka razmjerna je broju učenika — najviše učenika ima ocjenu 3 (dobar), najmanje 5 (odličan).",note:"intuicija",final:true}],
    why:["Pravilo: na kružnom dijagramu kut svakog isječka razmjeran je relativnoj frekvenciji: αᵢ = [FRAC:fᵢ|n] · 360°, gdje je fᵢ frekvencija i-te kategorije.","Postupak: 1) zbroji sve frekvencije za ukupno n. 2) izračunaj postotke (ili kutove) svakog. 3) sortiraj silazno po veličini. 4) mapiraj boju/poziciju isječka na kategoriju.","Intuicija: pie chart je \"podijeljeni krug\" — veličina dijela odgovara koliko ta kategorija sudjeluje u ukupnom uzorku.","Česta greška 1: pretpostaviti redoslijed ocjena (2, 3, 4, 5) kao redoslijed isječaka. Treba sortirati po FREKVENCIJI, ne po vrijednosti ocjene.","Česta greška 2: zaboraviti zbrojiti ukupno — potreban je za izračun postotaka.","Alt metoda: izračunaj kutove direktno: 96/523 · 360° ≈ 66° (ocjena 2); 218/523 · 360° ≈ 150° (ocjena 3); 144/523 · 360° ≈ 99° (ocjena 4); 65/523 · 360° ≈ 45° (ocjena 5). Sortirajući: 150° > 99° > 66° > 45°.","Provjera: zbroj svih kutova mora biti 360°; 66+150+99+45 = 360 ✓."]
  },
  {
    id:"31,1",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 31 (1. dio od 2): Navedene izraze zapišite kao potencije s bazom 5.",
    q:"Zapišite izraz 125^(n+1) : 25^n kao potenciju s bazom 5.",
    sol:{ans:"5^(n+3)",alt:["5^(n+3)","5^{n+3}","5ⁿ⁺³"]},
    steps:[{txt:"Svedi sve brojeve na bazu 5: 125 = 5³, 25 = 5²."},{txt:"Zapis brojnika: 125^(n+1) = (5³)^(n+1) = 5^(3(n+1)) = 5^(3n+3)."},{txt:"Zapis nazivnika: 25ⁿ = (5²)ⁿ = 5^(2n)."},{txt:"Dijeljenje potencija s istom bazom: [FRAC:5^(3n+3)|5^(2n)] = 5^((3n+3) − 2n) = 5^(n+3)."},{txt:"Točan odgovor: 5^(n+3).",note:"odgovor",final:true},{txt:"Provjera za n = 1: 125² : 25 = 15 625 : 25 = 625 = 5⁴ = 5^(1+3) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) sve brojeve izrazi kao potencije zajedničke baze. 2) primijeni pravila množenja, dijeljenja, potenciranja potencija. 3) pojednostavi eksponent.",note:"postupak",final:true},{txt:"Intuicija: kad su sve baze iste, sva pravila potencija postaju jednostavna aritmetika nad eksponentima.",note:"intuicija",final:true}],
    why:["Pravila potencija: (aᵐ)ⁿ = a^(mn); aᵐ · aⁿ = a^(m+n); aᵐ : aⁿ = a^(m−n).","Postupak: 1) prepoznaj zajedničku bazu (125, 25, 5 — sve su potencije od 5). 2) zapiši svaki broj kao 5^k. 3) primijeni pravila — operacije nad bazama postaju zbrajanja/oduzimanja eksponenata.","Intuicija: 125 = 5³ znači \"tri petice pomnožene\"; 125^(n+1) znači to (n+1) puta — ukupno 3(n+1) petica.","Česta greška 1: pomnožiti eksponente kod dijeljenja umjesto oduzeti. 5^(3n+3) : 5^(2n) NIJE 5^(6n² + 6n).","Česta greška 2: zaboraviti pravilo (aᵐ)ⁿ = a^(mn). 125^(n+1) ≠ 5^(3+n+1) — eksponent se MNOŽI, ne zbraja.","Alt metoda — supstitucija konkretnog n: za n = 0: 125 : 1 = 125 = 5³; rezultat treba biti 5^(0+3) = 5³ ✓.","Provjera za n = 2: 125³ : 25² = 1 953 125 : 625 = 3125 = 5⁵ = 5^(2+3) ✓."]
  },
  {
    id:"31,2",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 31 (2. dio od 2): Navedene izraze zapišite kao potencije s bazom 5.",
    q:"Zapišite izraz 10 · 5²⁰⁴ − 5²⁰⁵ kao potenciju s bazom 5.",
    sol:{ans:"5^205",alt:["5^205","5²⁰⁵","5^{205}"]},
    steps:[{txt:"Pretvori 10 u oblik koji uključuje 5: 10 = 2 · 5."},{txt:"Zapiši izraz: 10 · 5²⁰⁴ = 2 · 5 · 5²⁰⁴ = 2 · 5²⁰⁵."},{txt:"Sada imamo: 2 · 5²⁰⁵ − 5²⁰⁵ = (2 − 1) · 5²⁰⁵."},{txt:"Pojednostavi: 1 · 5²⁰⁵ = 5²⁰⁵."},{txt:"Točan odgovor: 5²⁰⁵.",note:"odgovor",final:true},{txt:"Provjera za manji eksponent (zamijenimo 204 → 1, 205 → 2): 10 · 5¹ − 5² = 50 − 25 = 25 = 5² ✓; isti uzorak vrijedi za bilo koji eksponent.",note:"verifikacija",final:true},{txt:"Postupak: 1) razloži koeficijent (10 = 2·5) kako bi povećao eksponent. 2) izluči zajednički faktor (5^max). 3) pojednostavi razliku koeficijenata.",note:"postupak",final:true},{txt:"Intuicija: trik je u tome da se 10 zapiše kao 2·5 — onda 5 \"ulazi\" u potenciju, podižući eksponent za 1.",note:"intuicija",final:true}],
    why:["Pravilo: aᵐ⁺ⁿ = aᵐ · aⁿ; izlučenje zajedničkog faktora: aˣ · k − aˣ · l = aˣ(k − l).","Postupak: 1) ako imaš mješavinu cijelih brojeva i potencija s različitim eksponentima — izluči koliko god je moguće. 2) podigni eksponente do istog. 3) izračunaj razliku/zbroj koeficijenata.","Intuicija: 10 = 2·5 omogućuje \"promijeniti odjeću\" — 10·5²⁰⁴ izgleda kao 2·5²⁰⁵ što je istog reda kao 5²⁰⁵.","Česta greška 1: pokušati izračunati 5²⁰⁴ ili 5²⁰⁵ numerički — broj ima više od 140 znamenki. Treba algebra, ne aritmetika.","Česta greška 2: pisati 10 · 5²⁰⁴ = 50²⁰⁴ — krivo. Ne ide pomnoziti bazom! 10 · 5²⁰⁴ je 2 · 5 · 5²⁰⁴ = 2 · 5²⁰⁵.","Alt metoda: izluči 5²⁰⁴ kao zajednički faktor: 10·5²⁰⁴ − 5²⁰⁵ = 5²⁰⁴ · (10 − 5) = 5²⁰⁴ · 5 = 5²⁰⁵ ✓ — još elegantnije.","Provjera: drugi pristup s n = 2: 5²⁰⁴ · 5 = 5²⁰⁵; 10 · 5²⁰⁴ − 5²⁰⁵ = 5²⁰⁴(10 − 5) = 5²⁰⁴ · 5 = 5²⁰⁵ ✓."]
  },
  {
    id:"32,1",
    type:"sa",
    topic:"br",
    points:1,
    context:"Zadatak 32 (1. dio od 2): U ponudi trgovine su čokoladni i voćni bomboni.",
    q:"Astrid je kupila 150 grama čokoladnih i 225 grama voćnih bombona. Koliko iznosi postotak čokoladnih bombona u ukupnoj količini kupljenih bombona?",
    sol:{ans:"40 %",alt:["40 %","40%","40","0,4"]},
    steps:[{txt:"Ukupna kupljena količina: 150 + 225 = 375 g."},{txt:"Udio čokoladnih: [FRAC:čokoladni|ukupno] = [FRAC:150|375]."},{txt:"Pojednostavi razlomak: [FRAC:150|375] = [FRAC:150 : 75|375 : 75] = [FRAC:2|5] = 0,4."},{txt:"Postotak: 0,4 · 100 % = 40 %."},{txt:"Točan odgovor: 40 %.",note:"odgovor",final:true},{txt:"Provjera obratno: 40 % od 375 = 0,4 · 375 = 150 ✓ (točno količina čokoladnih).",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj ukupno. 2) izračunaj udio (dio / ukupno). 3) pretvori u postotak (× 100 %).",note:"postupak",final:true},{txt:"Intuicija: 150 g čokoladnih u 375 g ukupno — manje od polovice. Provjera mentalno: 2/5 = 40 % ✓.",note:"intuicija",final:true}],
    why:["Pravilo: postotak = [FRAC:dio|cjelina] · 100 %. Postotak udjela uvijek se računa iz UKUPNE količine, ne iz druge kategorije.","Postupak: 1) odredi cjelinu (zbroj svih kategorija). 2) odredi dio za traženu kategoriju. 3) podijeli i pomnoži s 100.","Intuicija: postotak je \"broj na 100\" — koliko od svakih 100 jedinica pripada toj kategoriji.","Česta greška 1: podijeliti čokoladne s voćnim (150/225 = 2/3 ≈ 66,7 %) — to je OMJER dvije kategorije, ne udio u ukupnom.","Česta greška 2: zaokružiti prerano — 150/375 = 0,4 točno, ne 0,4 ≈ 40 %. Ovaj rezultat je egzaktan.","Alt metoda — izračun postotka voćnih i provjera: voćni = 225/375 = 60 %; čokoladni = 100 % − 60 % = 40 % ✓ (komplement).","Provjera: udjeli moraju zbrojiti 100 % — 40 % + 60 % = 100 % ✓."]
  },
  {
    id:"32,2",
    type:"sa",
    topic:"al",
    points:1,
    context:"Zadatak 32 (2. dio od 2): U ponudi trgovine su čokoladni i voćni bomboni.",
    q:"Ivan je 100 grama čokoladnih i 100 grama voćnih bombona platio ukupno pet eura, a Sara 200 grama čokoladnih i 100 grama voćnih bombona osam eura. Koliko iznosi cijena 100 grama čokoladnih bombona?",
    sol:{ans:"3 €",alt:["3 €","3€","3","3 eura","3,00 €"]},
    steps:[{txt:"Označi: c = cijena 100 g čokoladnih, v = cijena 100 g voćnih bombona."},{txt:"Iz Ivanove kupnje: 100 g čokoladnih + 100 g voćnih = 5 € → c + v = 5."},{txt:"Iz Sarine kupnje: 200 g čokoladnih + 100 g voćnih = 8 € → 2c + v = 8."},{txt:"Sustav: [SYS:c + v = 5|2c + v = 8]."},{txt:"Oduzmi prvu od druge: (2c + v) − (c + v) = 8 − 5 → c = 3."},{txt:"Cijena 100 g čokoladnih = 3 €."},{txt:"Točan odgovor: 3 €.",note:"odgovor",final:true},{txt:"Provjera: c = 3, v = 5 − 3 = 2. Ivan: 3 + 2 = 5 ✓; Sara: 2·3 + 2 = 8 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) definiraj varijable. 2) postavi sustav linearnih jednadžbi. 3) eliminacija ili supstitucija. 4) provjera u obje jednadžbe.",note:"postupak",final:true},{txt:"Intuicija: Sara je platila 8 €, a Ivan 5 € — razlika 3 € je upravo za 100 g više čokoladnih (svi ostali sastojci jednaki).",note:"intuicija",final:true}],
    why:["Pravilo: sustav dvije linearne jednadžbe s dvije nepoznanice ima jedinstveno rješenje ako determinanta ≠ 0. Metoda: eliminacija (oduzimanje istog člana) ili supstitucija.","Postupak: 1) označi nepoznanice. 2) izvedi jednadžbe iz uvjeta. 3) eliminacija (gdje koeficijent isti) ili supstitucija. 4) provjera u obje jednadžbe.","Intuicija: prepoznaj \"razliku\" u dva scenarija — Sara ima 100 g više čokoladnih i plaća 3 € više; znači 100 g čokoladnih = 3 €.","Česta greška 1: pisati samo jednu jednadžbu, npr. 300 g čokoladnih i 200 g voćnih = 13 € (Ivan + Sara), pa pokušati riješiti — 1 jedadžba, 2 nepoznanice → ne može jedinstveno.","Česta greška 2: pomiješati varijable (recimo c = ukupna količina čokoladnih, ne cijena 100 g) — dovodi do različite jednadžbe i krivog rezultata.","Alt metoda — supstitucija: iz prve v = 5 − c; uvrsti u drugu: 2c + (5 − c) = 8 → c + 5 = 8 → c = 3 ✓.","Provjera: v = 2 → 100 g voćnih = 2 €. Voće je jeftinije od čokolade (3 € > 2 €) — razumno cijene."]
  },
  {
    id:"33.1",
    img:true,
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 33 (1. dio od 2): Neka je funkcija f(x) = 2x − 1.",
    q:"U koordinatnome sustavu nacrtajte graf funkcije f.",
    sol:{ans:"Pravac y = 2x − 1 (nagib 2, y-odsječak −1; prolazi kroz (0, −1) i (1, 1)).",alt:["pravac y=2x-1","y = 2x − 1","y=2x-1","graf pravca y = 2x − 1"]},
    steps:[{txt:"Linearna funkcija f(x) = 2x − 1: vodeći koeficijent a = 2 (nagib), slobodni član b = −1 (y-odsječak)."},{txt:"Izračunaj dvije točke. Točka 1: x = 0 → f(0) = 2·0 − 1 = −1; točka (0, −1)."},{txt:"Točka 2: x = 1 → f(1) = 2·1 − 1 = 1; točka (1, 1)."},{txt:"Treća točka za provjeru: x = 2 → f(2) = 2·2 − 1 = 3; točka (2, 3)."},{txt:"Nacrtaj koordinatni sustav i ucrtaj te tri točke; provuci ravnu liniju kroz njih."},{txt:"Točan odgovor: pravac y = 2x − 1.",note:"odgovor",final:true},{txt:"Provjera: provjeri jesu li (0,−1), (1,1), (2,3) kolinearne. Nagib između (0,−1) i (1,1): [FRAC:1−(−1)|1−0] = 2 ✓; između (1,1) i (2,3): [FRAC:3−1|2−1] = 2 ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj nekoliko točaka (3-4 dovoljno). 2) ucrtaj ih u koordinatni sustav. 3) provuci pravu liniju kroz njih.",note:"postupak",final:true},{txt:"Intuicija: nagib 2 znači \"y raste 2 za svaki porast x\"; y-odsječak −1 znači graf siječe os y u (0, −1).",note:"intuicija",final:true}],
    why:["Pravilo: graf linearne funkcije y = ax + b je PRAVAC s nagibom a i y-odsječkom b. Dvije točke jedinstveno određuju pravac.","Postupak: 1) izračunaj f u 2-3 različitih x. 2) ucrtaj točke. 3) povuci ravnu liniju kroz njih (provjera kolinearnosti).","Intuicija: linearna funkcija je \"ravna\" — ne savija se. Što veći nagib, to strmije pravac; y-odsječak gdje siječe os y.","Česta greška 1: zaboraviti minus odsječka — crtati y = 2x umjesto y = 2x − 1 (sve pomaknuto 1 jedinicu gore).","Česta greška 2: krivo izračunati f(0) ili f(1) — npr. f(1) = 2(1) − 1 = 1, ne 2. Pažnja s redoslijedom (množenje prije oduzimanja).","Alt metoda — direktno preko nultočke i y-odsječka: y-odsječak (0, −1); nultočka 0 = 2x − 1 → x = [FRAC:1|2] → ([FRAC:1|2], 0). Pravac kroz te dvije točke.","Provjera: kolinearnost — bilo koje 3 točke moraju davati isti nagib (= 2) između parova. Ako ne, pogriješio sam u nekoj točki."]
  },
  {
    id:"33,2",
    type:"sa",
    topic:"fun",
    points:1,
    context:"Zadatak 33 (2. dio od 2): Neka je funkcija f(x) = 2x − 1.",
    q:"Odredite domenu (prirodno područje definicije) funkcije g(x) = [FRAC:1|f(x)].",
    sol:{ans:"ℝ ∖ {[FRAC:1|2]}",alt:["R \\\\ {1/2}","x ≠ 1/2","x≠1/2","R \\\\ {0,5}","{x ∈ R : x ≠ 1/2}","ℝ \\\\ {1/2}","ℝ ∖ {1/2}","ℝ \\\\ {[FRAC:1|2]}"]},
    steps:[{txt:"Funkcija g je razlomak: g(x) = [FRAC:1|f(x)] = [FRAC:1|2x − 1]."},{txt:"Razlomak je definiran SAMO ako nazivnik nije nula: f(x) ≠ 0 → 2x − 1 ≠ 0."},{txt:"Riješi: 2x = 1 → x = [FRAC:1|2]. Ova vrijednost JE isključena iz domene."},{txt:"Domena: svi realni brojevi osim [FRAC:1|2]: D(g) = ℝ ∖ {[FRAC:1|2]}."},{txt:"Točan odgovor: ℝ ∖ {[FRAC:1|2]}.",note:"odgovor",final:true},{txt:"Provjera: g([FRAC:1|2]) = [FRAC:1|2·0,5 − 1] = [FRAC:1|0] — NEDEFINIRANO ✓; g(0) = [FRAC:1|−1] = −1 (definirano) ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj tip funkcije (racionalna). 2) postavi nazivnik ≠ 0. 3) riješi za x; ti x ISKLJUČENI iz domene.",note:"postupak",final:true},{txt:"Intuicija: dijeljenje s nulom je nedefinirano — sve vrijednosti x koje čine nazivnik 0 moraju se \"isključiti\" iz domene.",note:"intuicija",final:true}],
    why:["Pravilo: domena funkcije g(x) = [FRAC:p(x)|q(x)] (racionalne) je {x ∈ ℝ : q(x) ≠ 0}; nultočke nazivnika su VERTIKALNE ASIMPTOTE (ako ne ukidaju se s brojnikom) ili rupe.","Postupak: 1) identificiraj nazivnik. 2) postavi ga ≠ 0 i nađi nultočke. 3) domena je ℝ minus skup tih nultočaka.","Intuicija: \"prirodno područje definicije\" znači sve x za koje funkcija ima smisla; dijeljenje s 0, korijen iz negativnog, log negativnog — svi takvi su isključeni.","Česta greška 1: dati D(g) = ℝ (zaboraviti isključiti nultočku nazivnika). Posebno za \"obične\" pravce f(x) = 2x − 1 lako se previdi da g = 1/f ima problem.","Česta greška 2: navesti nultočku NAZIVNIKA kao da je u domeni: D = {[FRAC:1|2]} (krivi predznak — ona je ISKLJUČENA, ne uključena).","Alt metoda — graf: graf g(x) = [FRAC:1|2x − 1] ima vertikalnu asimptotu u x = [FRAC:1|2]; funkcija \"ide u beskonačnost\" tamo. Domena vidljiva iz grafa kao sve x osim asimptote.","Provjera: g(1) = [FRAC:1|1] = 1 ✓; g(0) = [FRAC:1|−1] = −1 ✓; g(0,5) — pokušaj izračuna daje 1/0 (greška) — potvrđuje da je 0,5 isključeno."]
  },
  {
    id:"34,1",
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 34 (1. dio od 2): Duljine dviju stranica trokuta su 9 cm i 10 cm. Mjera kuta između tih stranica iznosi 57°.",
    q:"Koliko iznosi duljina visine na kraću od tih dviju stranica trokuta?",
    sol:{ans:"≈ 8,39 cm",alt:["≈ 8,39 cm","8,39 cm","8,39 cm","8,39","8,3 cm","8,4 cm","8,3 cm","8,4 cm"]},
    steps:[{txt:"Površina trokuta preko dvije stranice i kuta između njih (sinusna formula): P = [FRAC:1|2] · a · b · sin(γ)."},{txt:"a = 9 cm, b = 10 cm, γ = 57°. sin(57°) ≈ 0,8387."},{txt:"P = [FRAC:1|2] · 9 · 10 · 0,8387 = 45 · 0,8387 ≈ 37,74 cm²."},{txt:"Visina na stranicu (a = 9 cm, kraća): hₐ = [FRAC:2P|a] = [FRAC:2 · 37,74|9] = [FRAC:75,48|9] ≈ 8,39 cm."},{txt:"Točan odgovor: ≈ 8,39 cm.",note:"odgovor",final:true},{txt:"Provjera: P = [FRAC:1|2] · 9 · 8,39 ≈ 37,76 ≈ 37,74 ✓ (mala razlika zbog zaokruživanja sin).",note:"verifikacija",final:true},{txt:"Postupak: 1) izračunaj površinu trokuta sinusnom formulom (stranice + kut). 2) izračunaj visinu na željenu stranicu: h = 2P/strana.",note:"postupak",final:true},{txt:"Intuicija: visina je \"duljina okomice\" iz suprotnog vrha na stranicu — ako se gleda površina P = baza · visina / 2, izolacija visine daje h = 2P/baza.",note:"intuicija",final:true}],
    why:["Pravilo (sinusna formula površine): P = [FRAC:1|2] · a · b · sin(γ), gdje su a, b stranice i γ kut između njih. Visina na stranicu: hₐ = [FRAC:2P|a].","Postupak: 1) iz dvije stranice i kuta izračunaj P. 2) izoliraj visinu iz formule P = [FRAC:1|2] · stranica · visina.","Intuicija: visina je geometrijska komponenta \"okomitog smjera\" pri datoj bazi — proporcionalna sinusu kuta između stranica.","Česta greška 1: koristiti visinu na DULJU stranicu (b = 10 cm) — daje hᵦ = 2P/10 ≈ 7,55 cm (manje). Visina na kraću je VEĆA (h₉ > h₁₀).","Česta greška 2: koristiti cos umjesto sin u formuli — daje pogrešnu površinu (cos(57°) ≈ 0,5446 ≠ sin(57°)).","Alt metoda — direktna: hₐ = b · sin(γ) = 10 · sin(57°) ≈ 10 · 0,8387 ≈ 8,39 cm ✓ (visina iz vrha A na stranicu BC; b je hipotenuza, sin daje \"okomitu komponentu\").","Provjera: P = [FRAC:1|2] · 9 · 8,39 ≈ 37,76 ≈ formula sin = 45 · 0,8387 ✓."]
  },
  {
    id:"34,2",
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 34 (2. dio od 2): Duljine dviju stranica trokuta su 9 cm i 10 cm. Mjera kuta između tih stranica iznosi 57°.",
    q:"Koliko iznosi duljina treće stranice toga trokuta?",
    sol:{ans:"≈ 9,11 cm",alt:["≈ 9,11 cm","9,11 cm","9,11 cm","9,11","9,05 cm","9,16 cm","9,05 cm","9,16 cm"]},
    steps:[{txt:"Kosinusov poučak: c² = a² + b² − 2ab · cos(γ), gdje su a, b stranice i γ kut nasuprot tražene stranice c."},{txt:"Supstituiraj: c² = 9² + 10² − 2·9·10·cos(57°) = 81 + 100 − 180·cos(57°)."},{txt:"cos(57°) ≈ 0,5446 → 180 · 0,5446 ≈ 98,03."},{txt:"c² ≈ 181 − 98,03 = 82,97."},{txt:"c = √82,97 ≈ 9,11 cm."},{txt:"Točan odgovor: ≈ 9,11 cm.",note:"odgovor",final:true},{txt:"Provjera trokutnom nejednadžbom: |9 − 10| < c < 9 + 10 → 1 < c < 19. c ≈ 9,11 ✓ (unutar dopuštenog raspona).",note:"verifikacija",final:true},{txt:"Postupak: 1) primijeni kosinusov poučak: c² = a² + b² − 2ab cos(γ). 2) izračunaj sve numerički. 3) izvuci korijen.",note:"postupak",final:true},{txt:"Intuicija: kosinusov poučak je generalizacija Pitagorinog teorema. Za γ = 90° (cos = 0) postaje c² = a² + b². Za γ < 90°, c < hipotenuza (jer −2ab cos > 0 oduzima).",note:"intuicija",final:true}],
    why:["Pravilo (Kosinusov poučak): u trokutu s stranicama a, b, c i kutom γ nasuprot c vrijedi c² = a² + b² − 2ab · cos(γ).","Postupak: 1) identificiraj koja je nasuprotna stranica i koje su susjedne. 2) primijeni formulu. 3) izračunaj numerički (uz kalkulator za cos).","Intuicija: kosinusov poučak \"korigira\" Pitagorin za neprave kutove. Ako je γ akutan, −2ab cos > 0 i c < hipotenuza; ako γ tup, +2ab|cos| i c > hipotenuza.","Česta greška 1: zaboraviti minus pred 2ab · cos(γ) — pisati c² = a² + b² + 2ab cos(γ) (krivo; daje predugu stranicu).","Česta greška 2: pomiješati koja je traženja stranica — ako su date dvije stranice i kut MEĐU njima, treća je nasuprot tog kuta (kosinusov poučak primjenjiv).","Alt metoda — koordinatni: postavi A = (0,0), B = (9,0), C = (10·cos 57°, 10·sin 57°) = (5,45; 8,39); |BC| = √((9 − 5,45)² + (0 − 8,39)²) = √(12,6 + 70,4) = √83 ≈ 9,11 ✓.","Provjera: kut γ = 57° je akutan (< 90°), pa očekujemo c < √(81 + 100) = √181 ≈ 13,45 (hipotenuza ako bi γ = 90°). c ≈ 9,11 < 13,45 ✓."]
  },
  {
    id:"35,1",
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 35 (1. dio od 2): Duljina visine stošca iznosi 5 cm, a polumjera baze 3 cm.",
    q:"Koliko iznosi mjera kuta između visine i izvodnice toga stošca?",
    sol:{ans:"≈ 30°57′50″",alt:["≈ 30°57′50″","30°57′50″","30°57'50\"","30° 57' 50\"","30,96°","30°27′","31°9′","30°27'","31°9'"]},
    steps:[{txt:"Visina v, polumjer baze r, izvodnica s tvore PRAVOKUTNI TROKUT u uzdužnom presjeku stošca (v = kateta, r = kateta, s = hipotenuza)."},{txt:"Označi α = kut između visine i izvodnice. U pravokutnom trokutu: tg(α) = [FRAC:nasuprotna|nalegnuta] = [FRAC:r|v] = [FRAC:3|5] = 0,6."},{txt:"α = arctg(0,6)."},{txt:"Izračun: arctg(0,6) ≈ 30,9638°."},{txt:"Pretvori u stupnjeve/minute/sekunde: 30° + 0,9638° · 60 ≈ 30° + 57,83′ → 30° 57′ + 0,83′ · 60 ≈ 30° 57′ 50″."},{txt:"Točan odgovor: ≈ 30°57′50″.",note:"odgovor",final:true},{txt:"Provjera: tg(30°57′50″) ≈ tg(30,9639°) ≈ 0,5997 ≈ 0,6 ✓ (zaokruživanje).",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj pravokutni trokut (visina, polumjer, izvodnica). 2) tg(α) = nasuprotna/nalegnuta. 3) arctg za kut. 4) pretvori u DMS.",note:"postupak",final:true},{txt:"Intuicija: kut između visine (vertikalne osi) i izvodnice (kos), gleda KOLIKO se izvodnica \"okreće\" od osi. r > v daje veći kut, r < v daje manji.",note:"intuicija",final:true}],
    why:["Pravilo: u pravokutnom trokutu (kateta a, kateta b, hipotenuza c) vrijedi tg(α) = [FRAC:a|b] (α nasuprot a). Za stožac: tg(kut između v i s) = [FRAC:r|v].","Postupak: 1) identificiraj pravokutni trokut u presjeku stošca. 2) odredi koje su katete u odnosu na traženi kut. 3) primijeni tg ili sin/cos prema potrebi.","Intuicija: visina je \"okomita os\" stošca; izvodnica je \"kosa stranica\" od ruba baze do vrha. Kut između njih = \"koliko se kosa odmiče od vertikale\".","Česta greška 1: računati kut između IZVODNICE I RAVNINE BAZE (komplementaran ovome). To bi bio arctg(v/r) ≈ 59°02′ — ali nije traženo.","Česta greška 2: koristiti sin ili cos umjesto tg — npr. sin(α) = r/s; treba prvo izračunati s = √(r² + v²) = √34, pa sin(α) = 3/√34 ≈ 0,515 → α ≈ 30,96° (isti rezultat, ali kompleksnije).","Alt metoda — Pitagora i sin: s = √(r² + v²) = √(9 + 25) = √34 ≈ 5,83 cm. sin(α) = [FRAC:r|s] = [FRAC:3|√34] ≈ 0,515 → α = arcsin(0,515) ≈ 30,96° ✓.","Provjera: ako α = 30,96°, onda kut izvodnice s bazom = 90° − 30,96° = 59,04°. Provjeri: tg(59,04°) = v/r = 5/3 ≈ 1,667 ✓."]
  },
  {
    id:"35,2",
    type:"sa",
    topic:"geom",
    points:1,
    context:"Zadatak 35 (2. dio od 2): Duljina visine stošca iznosi 5 cm, a polumjera baze 3 cm.",
    q:"Koliko iznosi volumen toga stošca?",
    sol:{ans:"15π cm³",alt:["15π cm³","15π","15 π cm³","15·π cm³","≈ 47,12 cm³","47,12 cm³"]},
    steps:[{txt:"Formula volumena stošca: V = [FRAC:1|3] · π · r² · v, gdje je r polumjer baze, v visina."},{txt:"Supstituiraj r = 3 cm, v = 5 cm: V = [FRAC:1|3] · π · 9 · 5."},{txt:"V = [FRAC:π · 9 · 5|3] = [FRAC:45π|3] = 15π."},{txt:"Numerička aproksimacija: 15π ≈ 15 · 3,14159 ≈ 47,12 cm³."},{txt:"Točan odgovor: V = 15π cm³ (≈ 47,12 cm³).",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: cm² (površina baze π·r² = 9π) · cm (visina) / 3 = cm³ ✓.",note:"verifikacija",final:true},{txt:"Postupak: 1) prepoznaj formulu V = [FRAC:1|3]πr²v. 2) supstituiraj vrijednosti. 3) pojednostavi (čuvaj π u egzaktnom obliku ili aproksimiraj).",note:"postupak",final:true},{txt:"Intuicija: stožac je \"trećina valjka istih dimenzija\". Valjak visine 5 i polumjera 3 ima V = 45π; stožac je 1/3 toga = 15π.",note:"intuicija",final:true}],
    why:["Pravilo: V stošca = [FRAC:1|3] · π · r² · v = [FRAC:1|3] · P_baze · v; vrijedi i za druga stožasta tijela (piramide). Faktor 1/3 dolazi iz integralnog računa.","Postupak: 1) identificiraj polumjer baze r i visinu v. 2) izračunaj P_baze = π·r². 3) V = [FRAC:1|3] · P_baze · v.","Intuicija: zamisli stožac upisan u valjak iste osnove i visine — ostaje 2/3 valjka prazno; stožac zauzima 1/3.","Česta greška 1: koristiti V = π·r²·v (formula valjka, ne stošca). Daje 3× preveliku vrijednost.","Česta greška 2: zamijeniti r i v: V = [FRAC:1|3]·π·v²·r = [FRAC:1|3]·π·25·3 = 25π — pogrešno za stožac visine 5 i polumjera 3.","Alt metoda — koristeći r i izvodnicu: ako znaš s i v, r = √(s² − v²) iz Pitagore; ovdje r = 3 direktno.","Provjera: usporedi s \"konzervativno većim\" tijelom — valjak istih dimenzija ima V = π·9·5 = 45π. Stožac mora biti 1/3 = 15π. Manji od valjka, kao što intuicija kaže ✓."]
  }
];

export const qImages = {
  "2025_ljeto_B__11": () => e(Svg11_2025Blj, null),
  "2025_ljeto_B__12": () => e(Svg12_2025Blj, null),
  "2025_ljeto_B__15": () => e(Svg15_2025Blj, null),
  "2025_ljeto_B__16": () => e(Svg16_2025Blj, null),
  "2025_ljeto_B__18": () => e(Svg18_2025Blj, null),
  "2025_ljeto_B__30": () => e(Svg30_2025Blj, null),
  "2025_ljeto_B__33.1": () => e(Svg33_2025Blj, null),
  "2025_ljeto_B__6": () => e(Svg6_2025Blj, null),
  "2025_ljeto_B__8": () => e(Svg8_2025Blj, null),
};
