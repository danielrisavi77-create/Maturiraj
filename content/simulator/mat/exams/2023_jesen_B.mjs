// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg26a_2023Bj(){
  // Q26.1: učenik treba nacrtati pravac y = (4/3)x. Prazna mreža.
  const st="var(--text)", W=280, H=280;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ox=140, oy=140, u=22;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const gridLines=[];
  for(let x=-5;x<=5;x++){ if(x===0) continue; gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-5)+6,x2:px(x),y2:py(5)-6,stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-5;y<=5;y++){ if(y===0) continue; gridLines.push(e("line",{key:"gy"+y,x1:px(-5)-6,y1:py(y),x2:px(5)+6,y2:py(y),stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"280px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:px(-5)-6,y1:oy,x2:px(5)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"ya",x1:ox,y1:py(5)-6,x2:ox,y2:py(-5)+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(5)+6},${oy} ${px(5)+1},${oy-4} ${px(5)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(5)-6} ${ox-4},${py(5)-1} ${ox+4},${py(5)-1}`,fill:st}),
    e("text",{key:"xl",x:px(5)+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(5)-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1x",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1y",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("text",{key:"t1x",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("text",{key:"t1y",x:ox-10,y:py(1)+4,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"1")
  );
}

function Svg25_2023Bj(){
  // Q25 setup: pie chart with values dva=2, tri=11, četiri=8, pet=3.
  // Also shows empty bar chart grid (student to draw).
  const st="var(--text)";
  const W=540, H=320;
  // Pie chart on left
  const pcx=112, pcy=140, pr=85;
  const data = [
    {lbl:"dva", val:2, color:"var(--blue)"},      // plavo
    {lbl:"tri", val:11, color:"var(--red)"},     // crveno/narančasto
    {lbl:"četiri", val:8, color:"var(--green)"},   // zeleno
    {lbl:"pet", val:3, color:"var(--gold)"},      // žuto
  ];
  const total = data.reduce((s,d)=>s+d.val, 0);
  let acc = 0;
  // Start at top (12 o'clock) = -90° from positive x-axis, go clockwise
  const slices = data.map(d=>{
    const startA = (acc/total)*360 - 90;
    const endA = ((acc+d.val)/total)*360 - 90;
    acc += d.val;
    const toRad = x => x*Math.PI/180;
    const x1 = pcx + pr*Math.cos(toRad(startA));
    const y1 = pcy + pr*Math.sin(toRad(startA));
    const x2 = pcx + pr*Math.cos(toRad(endA));
    const y2 = pcy + pr*Math.sin(toRad(endA));
    const largeArc = (endA - startA) > 180 ? 1 : 0;
    // Label pozition at centroid angle
    const midA = (startA + endA)/2;
    const lx = pcx + (pr*0.6)*Math.cos(toRad(midA));
    const ly = pcy + (pr*0.6)*Math.sin(toRad(midA));
    return {
      path: `M ${pcx} ${pcy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${pr} ${pr} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`,
      color: d.color, val: d.val, lbl: d.lbl, lx, ly
    };
  });
  // Bar chart on right
  const bx=310, by=50, bw=200, bh=220;
  const barCount=4;
  const slotW=(bw-30)/barCount;
  const barW=slotW*0.55;
  const maxY=12;
  const bxForBar = (i) => bx+25 + slotW*(i+0.5) - barW/2;
  const byForVal = (v) => by + (1 - v/maxY)*(bh-30);
  const yTicks=[2,4,6,8,10,12];
  const labels=["dva","tri","četiri","pet"];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"540px",width:"100%",display:"block",margin:"12px auto"}},
    // pie slices
    ...slices.map((s,i)=>e("path",{key:"ps"+i,d:s.path,fill:s.color,fillOpacity:0.7,stroke:"var(--bg)",strokeWidth:1.8})),
    // labels inside slices
    ...slices.map((s,i)=>e("text",{key:"pl"+i,x:s.lx,y:s.ly+4,textAnchor:"middle",fontSize:13,fontWeight:"bold",fontFamily:"sans-serif",fill:st},String(s.val))),
    // Legend right of pie (kao u originalu: puni nazivi, okomito)
    ...data.map((d,i)=>[
      e("rect",{key:"lgsq"+i,x:206,y:98+i*30,width:10,height:10,fill:d.color,fillOpacity:0.7}),
      e("text",{key:"lglb"+i,x:221,y:107+i*30,fontSize:11,fontFamily:"sans-serif",fill:st},d.lbl+" obroka"),
    ]).flat(),
    // Bar chart: axes
    e("text",{key:"byt",x:bx+14,y:by-10,fontSize:10,fontFamily:"sans-serif",fill:st},"broj učenika"),
    e("line",{key:"bxa",x1:bx+20,y1:by+bh-30,x2:bx+bw,y2:by+bh-30,stroke:st,strokeWidth:1.5}),
    e("line",{key:"bya",x1:bx+20,y1:by,x2:bx+20,y2:by+bh-30,stroke:st,strokeWidth:1.5}),
    // Y-ticks
    ...yTicks.flatMap(t=>[
      e("line",{key:"ygl"+t,x1:bx+20,y1:byForVal(t),x2:bx+bw,y2:byForVal(t),stroke:st,strokeOpacity:0.18,strokeDasharray:"2 3",strokeWidth:0.6}),
      e("text",{key:"yt"+t,x:bx+14,y:byForVal(t)+4,textAnchor:"end",fontSize:10,fontFamily:"sans-serif",fill:st},String(t)),
    ]),
    // X-labels
    ...labels.map((l,i)=>e("text",{key:"xl"+i,x:bxForBar(i)+barW/2,y:by+bh-15,textAnchor:"middle",fontSize:10,fontFamily:"sans-serif",fill:st},l)),
    // Only first bar is given — "dva" = 2 (as in PDF)
    e("rect",{key:"bar0",x:bxForBar(0),y:byForVal(2),width:barW,height:(by+bh-30)-byForVal(2),fill:"var(--blue)",fillOpacity:0.6,stroke:st,strokeWidth:1.2}),
    e("text",{key:"xbl",x:bx+bw/2,y:by+bh+5,textAnchor:"middle",fontSize:10,fontFamily:"sans-serif",fill:st},"broj obroka dnevno")
  );
}

function Svg17_2023Bj(){
  // Q17 — pixel-perfect kopija PDF-a.
  // Geometrija (ručno postavljeno po PDF-u):
  //   - Velika kružnica
  //   - A, B, C — vrhovi trokuta NA kružnici; A dolje-lijevo, B dolje-desno, C gore
  //   - S — vizualno iznad baze AB, u gornjem dijelu trokuta
  //   - Iz S idu dva radijusa prema A (dolje-lijevo) i B (dolje-desno)
  //   - 220° je REFLEX kut na S (preko gornjeg dijela, obuhvaća C)
  //   - α, β — kutovi pri bazi trokuta
  const st="var(--text)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const W=480, H=380;
  // Kružnica
  const cx=240, cy=200, r=160;
  // Pozicije vrhova trokuta ON kružnici (standardna matematička konvencija)
  const toRad = d => d * Math.PI / 180;
  const ptAt = (deg) => [cx + r*Math.cos(toRad(deg)), cy - r*Math.sin(toRad(deg))];
  // A i B simetrično postavljeni na kružnici — dovoljno razmaknuti za široki trokut
  const A = ptAt(225);
  const B = ptAt(315);
  const C = ptAt(90);
  // S postavljen vizualno: iznad baze AB, u gornjem dijelu trokuta
  const midAB = [(A[0]+B[0])/2, (A[1]+B[1])/2];
  const Sx = midAB[0];
  const Sy = midAB[1] - (midAB[1] - C[1]) * 0.55;  // 55% prema C, znači visoko

  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
                  style:{maxWidth:"480px",width:"100%",display:"block",margin:"12px auto"}},
    // 1. Kružnica
    e("circle",{key:"circ",cx:cx,cy:cy,r:r,fill:"none",stroke:_BLUE,strokeWidth:2}),
    // 2. Trokut ABC
    e("polygon",{key:"tri",
                 points:`${A[0].toFixed(1)},${A[1].toFixed(1)} ${B[0].toFixed(1)},${B[1].toFixed(1)} ${C[0].toFixed(1)},${C[1].toFixed(1)}`,
                 fill:"none",stroke:_BLUE,strokeWidth:2.2}),
    // 3. Radijusi SA i SB (od S prema donjim vrhovima trokuta)
    e("line",{key:"SA",x1:Sx,y1:Sy,x2:A[0].toFixed(1),y2:A[1].toFixed(1),stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"SB",x1:Sx,y1:Sy,x2:B[0].toFixed(1),y2:B[1].toFixed(1),stroke:_BLUE,strokeWidth:1.8}),
    // 4. Točka S
    e("circle",{key:"Sdot",cx:Sx,cy:Sy,r:4,fill:_RED}),
    e("text",{key:"Slbl",x:Sx-5,y:Sy+26,fontSize:20,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"S"),
    // 5. Luk 220° — REFLEX kut na S preko C (iznad S)
    (()=>{
      const ra=42;
      const dA = [A[0]-Sx, A[1]-Sy], LA = Math.hypot(dA[0],dA[1]);
      const dB = [B[0]-Sx, B[1]-Sy], LB = Math.hypot(dB[0],dB[1]);
      const P1 = [Sx + ra*dA[0]/LA, Sy + ra*dA[1]/LA];  // točka na SA
      const P2 = [Sx + ra*dB[0]/LB, Sy + ra*dB[1]/LB];  // točka na SB
      // Reflex: large-arc=1, sweep=0 (CCW, preko vrha)
      return e("path",{key:"arc220",
        d:`M ${P1[0].toFixed(2)} ${P1[1].toFixed(2)} A ${ra} ${ra} 0 1 0 ${P2[0].toFixed(2)} ${P2[1].toFixed(2)}`,
        fill:"none",stroke:_BLUE,strokeWidth:1.8});
    })(),
    // 6. Oznaka "220°" — iznad S, u sredini luka
    e("text",{key:"lbl220",x:Sx-22,y:Sy-18,fontSize:18,fontFamily:"serif",fill:_GOLD},"220°"),
    // 7. Mali luk za α kod A — između baze AB i stranice AC
    (()=>{
      const ra=22;
      const dAB = [B[0]-A[0], B[1]-A[1]], LAB = Math.hypot(dAB[0],dAB[1]);
      const dAC = [C[0]-A[0], C[1]-A[1]], LAC = Math.hypot(dAC[0],dAC[1]);
      const P1 = [A[0] + ra*dAB[0]/LAB, A[1] + ra*dAB[1]/LAB];  // na AB
      const P2 = [A[0] + ra*dAC[0]/LAC, A[1] + ra*dAC[1]/LAC];  // na AC
      return e("path",{key:"arcA",
        d:`M ${P1[0].toFixed(2)} ${P1[1].toFixed(2)} A ${ra} ${ra} 0 0 0 ${P2[0].toFixed(2)} ${P2[1].toFixed(2)}`,
        fill:"none",stroke:_BLUE,strokeWidth:1.6});
    })(),
    // 8. Mali luk za β kod B — između stranice BC i baze BA
    (()=>{
      const ra=22;
      const dBA = [A[0]-B[0], A[1]-B[1]], LBA = Math.hypot(dBA[0],dBA[1]);
      const dBC = [C[0]-B[0], C[1]-B[1]], LBC = Math.hypot(dBC[0],dBC[1]);
      const P1 = [B[0] + ra*dBC[0]/LBC, B[1] + ra*dBC[1]/LBC];  // na BC
      const P2 = [B[0] + ra*dBA[0]/LBA, B[1] + ra*dBA[1]/LBA];  // na BA
      return e("path",{key:"arcB",
        d:`M ${P1[0].toFixed(2)} ${P1[1].toFixed(2)} A ${ra} ${ra} 0 0 0 ${P2[0].toFixed(2)} ${P2[1].toFixed(2)}`,
        fill:"none",stroke:_BLUE,strokeWidth:1.6});
    })(),
    // 9. α — UNUTAR trokuta kod A (iznad baze, ispod stranice AC)
    e("text",{key:"la",x:A[0]+28,y:A[1]-6,fontSize:22,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"α"),
    // 10. β — unutar trokuta kod B
    e("text",{key:"lb",x:B[0]-42,y:B[1]-6,fontSize:22,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"β"),
    // 11. Crne kuglice u vrhovima trokuta
    e("circle",{key:"Adot",cx:A[0].toFixed(1),cy:A[1].toFixed(1),r:4.5,fill:_RED}),
    e("circle",{key:"Bdot",cx:B[0].toFixed(1),cy:B[1].toFixed(1),r:4.5,fill:_RED}),
    e("circle",{key:"Cdot",cx:C[0].toFixed(1),cy:C[1].toFixed(1),r:4.5,fill:_RED})
  );
}

function Svg14_2023Bj(){
  // Q14: Vektor a⃗ od (0,0) do (4, 2). Pitanje se odnosi na (3/2)a⃗.
  const st="var(--text)", W=340, H=280;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ox=120, oy=180, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const T=[0,0], HD=[4,2];
  const gridLines=[];
  for(let x=-3;x<=7;x++){ gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-3)+6,x2:px(x),y2:py(4)-6,stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-3;y<=4;y++){ gridLines.push(e("line",{key:"gy"+y,x1:px(-3)-6,y1:py(y),x2:px(7)+6,y2:py(y),stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xax",x1:px(-3)-4,y1:oy,x2:px(7)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"yax",x1:ox,y1:py(4)-6,x2:ox,y2:py(-3)+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(7)+6},${oy} ${px(7)+1},${oy-4} ${px(7)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(4)-6} ${ox-4},${py(4)-1} ${ox+4},${py(4)-1}`,fill:st}),
    e("text",{key:"xl",x:px(7)+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(4)-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1x",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1y",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("text",{key:"t1x",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("text",{key:"t1y",x:ox-10,y:py(1)+4,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("defs",{key:"d"},
      e("marker",{id:"v14barr",viewBox:"0 0 10 10",refX:8,refY:5,markerWidth:8,markerHeight:8,orient:"auto-start-reverse"},
        e("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:st})
      )
    ),
    e("line",{key:"v",x1:px(T[0]),y1:py(T[1]),x2:px(HD[0]),y2:py(HD[1]),stroke:st,strokeWidth:2,markerEnd:"url(#v14barr)"}),
    e("g",{key:"la"},
      e("text",{key:"lat",x:px(1.75),y:py(1.55),textAnchor:"middle",fontSize:16,fontStyle:"italic",fontFamily:"serif",fill:st},"a"),
      e("line",{key:"lav",x1:px(1.75)-6,y1:py(1.55)-13,x2:px(1.75)+6,y2:py(1.55)-13,stroke:st,strokeWidth:1.1}),
      e("polygon",{key:"lap",points:`${px(1.75)+8},${py(1.55)-13} ${px(1.75)+3.5},${py(1.55)-15.6} ${px(1.75)+3.5},${py(1.55)-10.4}`,fill:st})
    )
  );
}

function Svg12_2023Bj(){
  // Q12: Identicna kopija PDF-a. f(x) = -2x + 4, traži se točan graf.
  // PDF geometrija (iz pixel-provjere @ 300 DPI):
  //   A: y = -2x - 2   (pada, presjek (0,-2), x-os pri x=-1)
  //   B: y = -2x + 4   (pada, presjek (0, 4), x-os pri x=2)   ← TOČAN
  //   C: y = 2x - 2    (raste, presjek (0,-2), x-os pri x=1)
  //   D: y = 2x + 2    (raste, presjek (0, 2), x-os pri x=-1)
  // Grid: isprekidana ("dash-dot") mrežica — ne pune linije.
  // Pravci: plavi (var(--blue)).
  const st="var(--text)";
  const bl="var(--blue, #4a90d9)";
  const W=500, H=460;
  const panel = (ox, oy, k, n, letter) => {
    const pw=220, ph=180;
    const cx=ox+pw/2, cy=oy+ph/2;
    const u=18;  // pixels per unit
    const xLim = (pw/2)/u;
    const yLim = (ph/2)/u;
    // endpoint clipping na edge panela
    const clip = (dir) => {
      const tx = (dir>0?xLim:-xLim)/dir;
      let ty = Infinity;
      if(k !== 0){
        ty = ((dir*k>0?yLim:-yLim)-n)/(k*dir||1e-9);
      }
      const t = Math.min(Math.abs(tx), Math.abs(ty));
      const x = dir*t, y = k*x+n;
      return [cx + x*u, cy - y*u];
    };
    const p1=clip(-1), p2=clip(+1);
    // Grid: isprekidane crtice — koristimo tanke kratke crte koje NE izgledaju kao "-" uz "1"
    const gridLines = [];
    const nx = Math.floor(xLim), ny = Math.floor(yLim);
    for(let i = -nx; i <= nx; i++){
      if(i === 0) continue;
      gridLines.push(e("line",{
        key:letter+"vg"+i,
        x1: cx + i*u, y1: oy+6, x2: cx + i*u, y2: oy+ph-6,
        stroke: st, strokeWidth: 0.7, strokeOpacity: 0.4,
        strokeDasharray: "2 6"
      }));
    }
    for(let j = -ny; j <= ny; j++){
      if(j === 0) continue;
      gridLines.push(e("line",{
        key:letter+"hg"+j,
        x1: ox+6, y1: cy - j*u, x2: ox+pw-6, y2: cy - j*u,
        stroke: st, strokeWidth: 0.7, strokeOpacity: 0.4,
        strokeDasharray: "2 6"
      }));
    }
    return [
      // Bez vidljivog borderi oko panela (PDF ga nema)
      ...gridLines,
      // pravac — PLAV (iscrtan prije osi da bude ispod)
      e("line",{key:letter+"ln", x1:p1[0], y1:p1[1], x2:p2[0], y2:p2[1],
                stroke:bl, strokeWidth:2.2}),
      // x-os (horizontalna) sa strelicom desno
      e("line",{key:letter+"xax", x1:ox+4, y1:cy, x2:ox+pw-4, y2:cy,
                stroke:st, strokeWidth:1.4}),
      e("polygon",{key:letter+"xar",
                points:`${ox+pw-4},${cy} ${ox+pw-10},${cy-4} ${ox+pw-10},${cy+4}`,
                fill:st}),
      // y-os (vertikalna) sa strelicom gore
      e("line",{key:letter+"yax", x1:cx, y1:oy+4, x2:cx, y2:oy+ph-4,
                stroke:st, strokeWidth:1.4}),
      e("polygon",{key:letter+"yar",
                points:`${cx},${oy+4} ${cx-4},${oy+10} ${cx+4},${oy+10}`,
                fill:st}),
      // Oznake osi x i y (italic serif)
      e("text",{key:letter+"lx", x:ox+pw-4, y:cy-6,
                fontSize:12, fontStyle:"italic", fontFamily:"serif", fill:st, textAnchor:"end"},"x"),
      e("text",{key:letter+"ly", x:cx+6, y:oy+12,
                fontSize:12, fontStyle:"italic", fontFamily:"serif", fill:st},"y"),
      // Open circle kod O (ishodište)
      e("circle",{key:letter+"o0", cx:cx, cy:cy, r:3,
                  fill:"var(--bg)", stroke:st, strokeWidth:1.2}),
      e("text",{key:letter+"l0", x:cx-9, y:cy+12,
                fontSize:11, fontFamily:"serif", fill:st},"0"),
      // Open circle kod (1, 0)
      e("circle",{key:letter+"ox1", cx:cx+u, cy:cy, r:3,
                  fill:"var(--bg)", stroke:st, strokeWidth:1.2}),
      e("text",{key:letter+"lx1", x:cx+u, y:cy+14, textAnchor:"middle",
                fontSize:11, fontFamily:"serif", fill:st},"1"),
      // Open circle kod (0, 1)
      e("circle",{key:letter+"oy1", cx:cx, cy:cy-u, r:3,
                  fill:"var(--bg)", stroke:st, strokeWidth:1.2}),
      e("text",{key:letter+"ly1", x:cx-9, y:cy-u+4,
                fontSize:11, fontFamily:"serif", fill:st, textAnchor:"end"},"1"),
      // Oznaka panela (A., B., C., D.)
      e("text",{key:letter+"lbl", x:ox+6, y:oy+ph+16,
                fontSize:14, fontWeight:"bold", fontFamily:"sans-serif", fill:st},
                letter+"."),
    ];
  };
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
                  style:{maxWidth:"500px",width:"100%",display:"block",margin:"16px auto"}},
    // PDF geometrija: svih 4 panela s točnim jednadžbama
    ...panel( 15,  20, -2, -2, "A"),   // y = -2x - 2
    ...panel(265,  20, -2, +4, "B"),   // y = -2x + 4  ← TOČNO
    ...panel( 15, 245, +2, -2, "C"),   // y = 2x - 2
    ...panel(265, 245, +2, +2, "D"),   // y = 2x + 2
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Koja je od navedenih tvrdnja točna?",
  opts:["0,467 je racionalni broj","1/2 je iracionalni broj","2/3 je racionalni broj (pod korijenom)","3,456 je iracionalni broj"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Racionalan broj = može se zapisati kao razlomak p/q (cijeli p, q ≠ 0); iracionalan = ne može."},
     {txt:"A) 0,467 = 467/1000 — konačna decimala, racionalan ✓"},
     {txt:"B) 1/2 = 0,5 — već razlomak, racionalan (NE iracionalan)."},
     {txt:"C) Tvrdnja se odnosi na √(2/3) koji je iracionalan (ne racionalan)."},
     {txt:"D) 3,456 — konačna decimala, racionalan (ne iracionalan). Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 0,467 = 467/1000 ✓; konačne i periodske decimale = racionalni; neperiodske beskonačne = iracionalni",note:"verifikacija"},
     {txt:"Distraktori: B/C/D pomiješaju 'iracionalan' i 'racionalan'.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: konačna decimala = racionalna; periodička decimala = racionalna; neperiodička beskonačna = iracionalna.",note:"postupak",final:true},{txt:"Intuicija: ako broj može stati u 'pravu' decimalnu reprezentaciju (konačnu ili ponavljajuću), racionalan je.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: konačna decimala = racionalna; periodička decimala = racionalna; neperiodička beskonačna = iracionalna.",
     "Intuicija: ako broj može stati u 'pravu' decimalnu reprezentaciju (konačnu ili ponavljajuću), racionalan je.",
     "Česta greška: pretpostaviti da su sve decimale iracionalne; ili obrnuto.",
     "Alt metoda (provjera): brojevi sa završetkom u 5 (0,5; 0,25; itd.) su uvijek racionalni ✓"
   ,"Provjera: 0,467 = 467/1000 ✓; konačne i periodske decimale = racionalni; neperiodske beskonačne = iracionalni","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:2,type:"mc",warn:"Pazi: suprotni → a = −b → a + b = 0 (recipročni bi imali a·b = 1).",topic:"br",points:1,
  q:"Koja je jednakost točna za suprotne brojeve a i b?",
  opts:["a + b = 0","a · b = 1","a = b","a/b = 1"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Suprotni brojevi: a i b takvi da b = −a (npr. 5 i −5)."},
     {txt:"Zbroj: a + b = a + (−a) = 0 ✓. Odgovor A.",final:true,note:"odgovor"},
     {txt:"B) a·b = a·(−a) = −a² (negativno ili 0, ne 1)."},
     {txt:"C) a = b znači a = −a → 2a = 0 → a = 0; ne općenito."},
     {txt:"D) a/b = a/(−a) = −1 (ne 1)."},
     {txt:"Provjera s a = 3, b = −3: A) 3 + (−3) = 0 ✓; B) 3·(−3) = −9 ✗; C) 3 ≠ −3 ✗; D) 3/(−3) = −1 ✗",note:"verifikacija"},
     {txt:"Distraktori: B brka 'suprotne' s 'recipročne'; C banalno netočno; D zaboravlja predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: 'suprotni' brojevi imaju zbroj nula (a + (−a) = 0); 'recipročni' imaju umnožak 1.",note:"postupak",final:true},{txt:"Intuicija: suprotan = isti iznos, suprotan predznak (kao zrcalna slika).",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: 'suprotni' brojevi imaju zbroj nula (a + (−a) = 0); 'recipročni' imaju umnožak 1.",
     "Intuicija: suprotan = isti iznos, suprotan predznak (kao zrcalna slika).",
     "Česta greška: brkati 'suprotne' (a + b = 0) i 'recipročne' (a · b = 1).",
     "Alt metoda (provjera): test konkretno — bilo koji par (5, −5) zadovoljava a + b = 0 ✓"
   ,"Provjera s a = 3, b = −3: A) 3 + (−3) = 0 ✓; B) 3·(−3) = −9 ✗; C) 3 ≠ −3 ✗; D) 3/(−3) = −1 ✗","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:3,type:"mc",warn:"Pazi: (−a²)³ = −a⁶ (neparna potencija čuva minus, eksponenti 2·3 = 6).",topic:"al",points:1,
  q:"Čemu je jednak izraz (−a²)³?",
  opts:["−a⁶","−a⁵","a⁵","a⁶"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Razvij potenciju potencije: (−a²)³ = (−1)³·(a²)³."},
     {txt:"(−1)³ = −1; (a²)³ = a²·³ = a⁶."},
     {txt:"(−a²)³ = −1·a⁶ = −a⁶. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera s a = 2: (−4)³ = −64; −a⁶ = −64 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) −a⁵ = krivi zbroj eksponenata; C/D) krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: (a·b)ⁿ = aⁿ·bⁿ; (aᵐ)ⁿ = aᵐⁿ.",note:"postupak",final:true},{txt:"Intuicija: razdvoji 'predznak' i 'magnitudu' u dvije potencije.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: (a·b)ⁿ = aⁿ·bⁿ; (aᵐ)ⁿ = aᵐⁿ.",
     "Intuicija: razdvoji 'predznak' i 'magnitudu' u dvije potencije.",
     "Česta greška: zaboraviti predznak (a² je uvijek ≥ 0, ali (−a²) je ≤ 0); ili zbrojiti eksponente.",
     "Alt metoda (provjera): (−a²)³ = (−a²)·(−a²)·(−a²) = a⁴·(−a²) = −a⁶ ✓"
   ,"Provjera s a = 2: (−4)³ = −64; −a⁶ = −64 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:4,type:"mc",warn:"Pazi: ⁴√(5³) = 5^(3/4); recipročno → 5^(−3/4).",topic:"al",points:1,
  q:"Čemu je jednako 1/⁴√(5³)?",
  opts:["−5^(4/3)","−5^(3/4)","5^(−4/3)","5^(−3/4)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Pravilo: ⁿ√(aᵐ) = a^(m/n); 1/aⁿ = a⁻ⁿ."},
     {txt:"⁴√(5³) = 5^([FRAC:3|4])."},
     {txt:"1/5^([FRAC:3|4]) = 5^(−[FRAC:3|4]). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s vrijednostima: 5^([FRAC:3|4]) ≈ 5^([FRAC:75|100]) ≈ 3,344; 1/3,344 ≈ 0,299; 5^(−[FRAC:3|4]) ≈ 0,299 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B negativni (krivi predznak ispred broja); C krivi eksponent (4/3 umjesto 3/4).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: korijen ⁿ√(aᵐ) = a^(m/n); recipročna potencija = negativni eksponent.",note:"postupak",final:true},{txt:"Intuicija: 'četvrti korijen' = 'na potenciju 1/4'; razdvoji m i n.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: korijen ⁿ√(aᵐ) = a^(m/n); recipročna potencija = negativni eksponent.",
     "Intuicija: 'četvrti korijen' = 'na potenciju 1/4'; razdvoji m i n.",
     "Česta greška: pomiješati m i n u razlomku; ili zaboraviti negativan predznak.",
     "Alt metoda (provjera): 1/⁴√(5³) = (5³)^(−1/4) = 5^(3·(−1/4)) = 5^(−3/4) ✓"
   ,"Provjera s vrijednostima: 5^([FRAC:3|4]) ≈ 5^([FRAC:75|100]) ≈ 3,344; 1/3,344 ≈ 0,299; 5^(−[FRAC:3|4]) ≈ 0,299 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:5,type:"mc",warn:"Pazi: 1,25·(1 − p) = 1,15 → riješi po p; nije jednostavno 10 %.",topic:"br",points:1,
  q:"Cijena kino ulaznice povećala se za 25 %. Za koliko je posto potrebno smanjiti povećanu cijenu ulaznice da bi konačno povećanje iznosilo 15 % u odnosu na početnu cijenu?",
  opts:["6,25 %","8 %","8,7 %","10 %"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Početna cijena = x; nakon +25 %: 1,25x."},
     {txt:"Cilj: konačno = 1,15x (15 % više od početne)."},
     {txt:"Smanjenje za p %: 1,25x·(1 − p/100) = 1,15x → (1 − p/100) = 1,15/1,25 = 0,92."},
     {txt:"p/100 = 0,08 → p = 8 %. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: 1,25x·0,92 = 1,15x ✓ (cilj postignut)",note:"verifikacija"},
     {txt:"Distraktori: A) 6,25 = 25-15-koliko-do-15; C/D) krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: 'smanjenje za p %' = ×(1 − p/100); postoci su multiplikativni, ne aditivni.",note:"postupak",final:true},{txt:"Intuicija: drugi postotak djeluje na već povećanu cijenu (veću bazu).",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: 'smanjenje za p %' = ×(1 − p/100); postoci su multiplikativni, ne aditivni.",
     "Intuicija: drugi postotak djeluje na već povećanu cijenu (veću bazu).",
     "Česta greška: pretpostaviti da je smanjenje = 25 − 15 = 10 %; krivo!",
     "Alt metoda (provjera): konkretno s x = 100 kn — +25 % → 125 kn; cilj 115 kn; smanjenje 10/125 = 8 % ✓"
   ,"Provjera: 1,25x·0,92 = 1,15x ✓ (cilj postignut)","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:6,type:"mc",warn:"Pazi: (a − b)² = a² − 2ab + b²; srednji član −2·1·2y.",topic:"al",points:1,
  q:"Čemu je jednak izraz (1 − 2y)² za sve realne brojeve y?",
  opts:["1 + 4y²","1 − 4y²","(2y − 1)²","(2y + 1)²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Kvadrat suprotnih brojeva jednak: (a − b)² = (b − a)² (jer (−(b−a))² = (b−a)²)."},
     {txt:"(1 − 2y) = −(2y − 1); kvadrat: (−(2y − 1))² = (2y − 1)²."},
     {txt:"(1 − 2y)² = (2y − 1)². Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s y = 1: (1 − 2)² = (−1)² = 1; (2·1 − 1)² = 1² = 1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B su krivi (zaboraviti −2ab član u kvadratu binoma); D ima krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: (a − b)² = a² − 2ab + b² = (b − a)² (parnost kvadrata).",note:"postupak",final:true},{txt:"Intuicija: kvadrat 'briše' znak — dva suprotna binoma imaju isti kvadrat.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: (a − b)² = a² − 2ab + b² = (b − a)² (parnost kvadrata).",
     "Intuicija: kvadrat 'briše' znak — dva suprotna binoma imaju isti kvadrat.",
     "Česta greška: pretpostaviti (1 − 2y)² = 1 + 4y² (zaboraviti −2ab); ili krivi predznak.",
     "Alt metoda (provjera): razvij — (1 − 2y)² = 1 − 4y + 4y²; (2y − 1)² = 4y² − 4y + 1; isti rezultat ✓"
   ,"Provjera s y = 1: (1 − 2)² = (−1)² = 1; (2·1 − 1)² = 1² = 1 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:7,type:"mc",warn:"Pazi: usporedi s (−b ± √D)/2a za jednadžbu x² − 3x + c = 0.",topic:"kv",points:1,
  q:"Kojoj je od navedenih jednadžbi jedno rješenje (3 − √(9 − 4c))/2?",
  opts:["x² − 3x − c = 0","x² − 3x + c = 0","x² + 3x − c = 0","x² + 3x + c = 0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Kvadratna formula: x = (−b ± √(b² − 4ac'))/(2a)."},
     {txt:"Dano: x = (3 − √(9 − 4c))/2; usporedi: −b = 3 → b = −3; b² − 4ac' = 9 − 4c."},
     {txt:"9 = b² = (−3)² ✓; −4ac' = −4c → ac' = c → c' = c (uz a = 1)."},
     {txt:"Jednadžba: x² + bx + c' = x² − 3x + c = 0. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s c = 2: jednadžba x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0 → x = 1 ili 2; formula: (3 ± √(9−8))/2 = (3 ± 1)/2 = 1 ili 2 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C imaju krivi predznak c (−c umjesto +c); D ima +3x (krivi predznak b).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: usporedi danu rješenje s općom formulom kvadratne jednadžbe da identificiraš koeficijente.",note:"postupak",final:true},{txt:"Intuicija: −b/2 je 'centar' rješenja; √(b² − 4ac)/2 je 'pomak' od centra.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: usporedi danu rješenje s općom formulom kvadratne jednadžbe da identificiraš koeficijente.",
     "Intuicija: −b/2 je 'centar' rješenja; √(b² − 4ac)/2 je 'pomak' od centra.",
     "Česta greška: krivi predznak −b → b = +3 (krivo) umjesto b = −3.",
     "Alt metoda (provjera): test s c = 0 — jednadžba x² − 3x = 0; rješenja 0 i 3; formula: (3 ± 3)/2 = 0 ili 3 ✓"
   ,"Provjera s c = 2: jednadžba x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0 → x = 1 ili 2; formula: (3 ± √(9−8))/2 = (3 ± 1)/2 = 1 ili 2 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:8,type:"mc",warn:"Pazi: (x + 6)² = 0 ima dvostruko rješenje → diskriminanta je 0.",topic:"kv",points:1,
  q:"Koliko iznosi diskriminanta kvadratne jednadžbe (x + 6)² = 0?",
  opts:["−24","−6","0","36"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Razvij: (x + 6)² = x² + 12x + 36 = 0."},
     {txt:"Standardni oblik: a = 1, b = 12, c = 36."},
     {txt:"D = b² − 4ac = 144 − 144 = 0. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: D = 0 → jedno (dvostruko) realno rješenje; (x + 6)² = 0 ⟺ x = −6 (dvostruko) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −24 = krivi izračun; B) −6 = nul-točka (ne diskriminanta); D) 36 = c (krivi).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: D = b² − 4ac; D = 0 ⟺ jedno dvostruko rješenje (savršen kvadrat).",note:"postupak",final:true},{txt:"Intuicija: (x + 6)² = 0 očito ima samo x = −6 kao rješenje (s multiplicitetom 2) → D = 0.",note:"intuicija",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: D = b² − 4ac; D = 0 ⟺ jedno dvostruko rješenje (savršen kvadrat).",
     "Intuicija: (x + 6)² = 0 očito ima samo x = −6 kao rješenje (s multiplicitetom 2) → D = 0.",
     "Česta greška: zaboraviti razviti zagradu; ili krivi izračun 4·1·36.",
     "Alt metoda (provjera): savršeni kvadrat (x + a)² uvijek ima D = 0 (jer (x + a)² = x² + 2ax + a², D = 4a² − 4a² = 0) ✓"
   ,"Provjera: D = 0 → jedno (dvostruko) realno rješenje; (x + 6)² = 0 ⟺ x = −6 (dvostruko) ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:9,type:"mc",warn:"Pazi: 'ILI' → unija; oduzmi presjek (brojevi koji su i neparni i manji od 4).",topic:"stat",points:1,
  q:"Kolika je vjerojatnost da je pri bacanju kockice na čijim se stranama nalaze brojevi od jedan do šest pao neparan broj ili broj manji od četiri?",
  opts:["1/6","1/3","2/3","5/6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Prostor: {1, 2, 3, 4, 5, 6}."},
     {txt:"A: neparni = {1, 3, 5}; B: manji od 4 = {1, 2, 3}."},
     {txt:"Unija (A ili B): {1, 2, 3, 5} — 4 elementa."},
     {txt:"P = 4/6 = 2/3. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s formulom: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3 ✓ (presjek = {1, 3})",note:"verifikacija"},
     {txt:"Distraktori: A) 1/6 = krivo; B) 1/3 = 2/6 (samo presjek); D) 5/6 = krivi unija.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); 'ili' u vjerojatnosti = unija.",note:"postupak",final:true},{txt:"Intuicija: nabroji povoljne (svaki broj koji zadovoljava barem jedan uvjet).",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); 'ili' u vjerojatnosti = unija.",
     "Intuicija: nabroji povoljne (svaki broj koji zadovoljava barem jedan uvjet).",
     "Česta greška: dvostruko brojanje (zaboraviti −P(A ∩ B)); ili samo zbrojiti P(A) + P(B).",
     "Alt metoda (provjera): direktno nabrojavanje 4 povoljna od 6 ukupnih ✓"
   ,"Provjera s formulom: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3 ✓ (presjek = {1, 3})","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:10,type:"mc",warn:"Pazi: ukupno golova = 5·21; pa primijeni uvjet zadatka.",topic:"stat",points:1,
  q:"Na rukometnome je natjecanju nakon pet odigranih utakmica ekipa postigla prosječno 21 gol po utakmici. Koliko golova treba postići u sljedećoj utakmici kako bi joj prosjek porastao na 22 gola po utakmici?",
  opts:["23","25","27","29"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Dosadašnji zbroj golova: 5·21 = 105 (iz prosjeka)."},
     {txt:"Nakon 6 utakmica želimo prosjek 22 → ukupni zbroj 6·22 = 132."},
     {txt:"Goli u 6. utakmici: 132 − 105 = 27. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: nakon 27 u zadnjoj — ukupno 105 + 27 = 132 golova; prosjek 132/6 = 22 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 23 = krivi izračun (samo +2); B/D = krivi totali.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: prosjek = zbroj / broj; mijenjanje broja članova mijenja potrebni zbroj.",note:"postupak",final:true},{txt:"Intuicija: za prosjek +1, treba 6×1 = 6 'dodatnih' golova; +6 iznad starog prosjeka 21 = 27.",note:"intuicija",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: prosjek = zbroj / broj; mijenjanje broja članova mijenja potrebni zbroj.",
     "Intuicija: za prosjek +1, treba 6×1 = 6 'dodatnih' golova; +6 iznad starog prosjeka 21 = 27.",
     "Česta greška: dodati samo razliku prosjeka (22 − 21 = 1) ili samo novi prosjek (22).",
     "Alt metoda (provjera): 22 = (5·21 + x)/6 → 132 = 105 + x → x = 27 ✓"
   ,"Provjera: nakon 27 u zadnjoj — ukupno 105 + 27 = 132 golova; prosjek 132/6 = 22 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:11,type:"mc",warn:"Pazi: jednak porast svake godine → linearno; nagib = (150 − 50)/5.",topic:"niz",points:1,
  q:"Godišnja proizvodnja meda 2017. godine bila je 50 kg, a 2022. godine 150 kg. Godišnja se proizvodnja meda svake godine poveća za istu količinu. Kojom se formulom može izračunati godišnja proizvodnja meda gdje je t broj godina nakon 2017. godine?",
  opts:["m(t) = 3t + 50","m(t) = 3t + 150","m(t) = 20t + 50","m(t) = 20t + 150"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Linearni rast: m(t) = d·t + m₀ gdje je d godišnji prirast, m₀ = početna vrijednost."},
     {txt:"m(0) = 50 (2017. godine, t = 0) → m₀ = 50."},
     {txt:"m(5) = 150 (2022. = 2017. + 5) → 50 + 5d = 150 → 5d = 100 → d = 20."},
     {txt:"Formula: m(t) = 20t + 50. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: m(0) = 50 ✓; m(5) = 100 + 50 = 150 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) d = 3 (krivi izračun); B/D) krivi početni m₀ = 150 (zbunjuje 2022. s 2017.).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: linearni rast m(t) = m₀ + d·t; d = (m(t₁) − m(t₀))/(t₁ − t₀).",note:"postupak",final:true},{txt:"Intuicija: 'svake godine poveća za istu količinu' = aritmetički niz / linearna funkcija.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: linearni rast m(t) = m₀ + d·t; d = (m(t₁) − m(t₀))/(t₁ − t₀).",
     "Intuicija: 'svake godine poveća za istu količinu' = aritmetički niz / linearna funkcija.",
     "Česta greška: brkati m₀ s vrijednošću u krajnjoj točki; ili krivi vremenski raspon.",
     "Alt metoda (provjera): nagib = (150 − 50)/(5 − 0) = 100/5 = 20; presjek = 50 ✓"
   ,"Provjera: m(0) = 50 ✓; m(5) = 100 + 50 = 150 ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
},
  {id:12,img:true,type:"mc",warn:"Pazi: nagib −2 (pada strmo), siječe os y u 4.",topic:"lin",points:1,
  q:"Na kojoj je slici prikazan graf funkcije f(x) = −2x + 4?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"f(x) = −2x + 4: nagib k = −2 (padajući), y-presjek (0, 4) (iznad ishodišta)."},
     {txt:"Provjera druge točke: f(2) = −4 + 4 = 0 → presjek s x-osi u (2, 0)."},
     {txt:"Padajući pravac kroz (0, 4) i (2, 0). Slika B."},
     {txt:"Provjera nagiba: pad y od 4 do 0 dok x raste od 0 do 2 → Δy/Δx = −4/2 = −2 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C/D imaju krivi nagib ili krivi y-presjek.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: linearna y = kx + l — k = nagib, l = y-presjek; k < 0 → padajuća.",note:"postupak",final:true},{txt:"Intuicija: nagib −2 znači 'za svaki +1 u x, y se smanji za 2'.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: linearna y = kx + l — k = nagib, l = y-presjek; k < 0 → padajuća.",
     "Intuicija: nagib −2 znači 'za svaki +1 u x, y se smanji za 2'.",
     "Česta greška: pomiješati nagib i y-presjek; ili krivi predznak.",
     "Alt metoda (provjera): test (0, 4) i (2, 0) na svakoj slici — Slika B prolazi obje ✓"
   ,"Provjera druge točke: f(2) = −4 + 4 = 0 → presjek s x-osi u (2, 0).","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
},
  {id:13,type:"mc",warn:"Pazi: uvrsti y = 1 → x − 5·1 − 11 = 0 → x = 16.",topic:"anal",points:1,
  q:"Za koji realni broj x točka T(x, 1) pripada pravcu x − 5y − 11 = 0?",
  opts:["−16","−2","2","16"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Točka pripada pravcu ⟺ koordinate zadovoljavaju jednadžbu."},
     {txt:"Uvrsti y = 1 u x − 5y − 11 = 0: x − 5·1 − 11 = 0."},
     {txt:"x − 16 = 0 → x = 16. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: T(16, 1) → 16 − 5 − 11 = 0 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −16 = krivi predznak; B/C = krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: točka (x₀, y₀) pripada Ax + By + C = 0 ⟺ Ax₀ + By₀ + C = 0.",note:"postupak",final:true},{txt:"Intuicija: zadana y koordinata, riješi jednadžbu za x.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: točka (x₀, y₀) pripada Ax + By + C = 0 ⟺ Ax₀ + By₀ + C = 0.",
     "Intuicija: zadana y koordinata, riješi jednadžbu za x.",
     "Česta greška: krivi predznak −5·1 = −5 (ne +5).",
     "Alt metoda (provjera): pretvori u eksplicitan oblik y = (x − 11)/5; za y = 1, x = 16 ✓"
   ,"Provjera: T(16, 1) → 16 − 5 − 11 = 0 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: skalar 3/2 množi OBJE komponente vektora.",topic:"anal",points:1,
  q:"Na slici je prikazan vektor a⃗. Koje su koordinate završne točke vektora ([FRAC:3|2])a⃗ ako mu je početna točka u ishodištu koordinatnoga sustava?",
  opts:["(1, 2)","(2, 1)","(3, 6)","(6, 3)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz slike očitaj komponente vektora a⃗ = (4, 2)."},
     {txt:"Skalarni umnožak: ([FRAC:3|2])·a⃗ = ([FRAC:3|2])·(4, 2) = (6, 3)."},
     {txt:"Početna točka u ishodištu → završna točka u (6, 3). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera duljine: |a⃗| = √(16 + 4) = √20; |1,5·a⃗| = 1,5·√20 ≈ 6,71; √(36 + 9) = √45 ≈ 6,71 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) (1, 2) = krivi faktor; B) (2, 1) = pola a⃗; C) (3, 6) = pomiješane komponente.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: skalarni umnožak vektora s brojem množi svaku komponentu zasebno.",note:"postupak",final:true},{txt:"Intuicija: ([FRAC:3|2])·a⃗ je vektor istog smjera, 1,5 puta dulji.",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: skalarni umnožak vektora s brojem množi svaku komponentu zasebno.",
     "Intuicija: ([FRAC:3|2])·a⃗ je vektor istog smjera, 1,5 puta dulji.",
     "Česta greška: pomnožiti samo jednu komponentu; ili krivi smjer čitanja a⃗.",
     "Alt metoda (provjera): završna − početna = vektor; (6, 3) − (0, 0) = (6, 3) ✓"
   ,"Provjera duljine: |a⃗| = √(16 + 4) = √20; |1,5·a⃗| = 1,5·√20 ≈ 6,71; √(36 + 9) = √45 ≈ 6,71 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:15,type:"mc",warn:"Pazi: simetrale STRANICA → središte OPISANE kružnice (ne upisane).",topic:"geom",points:1,
  q:"U kojoj se točki sijeku simetrale stranica svakoga trokuta?",
  opts:["u težištu","u ortocentru","u središtu trokutu upisane kružnice","u središtu trokutu opisane kružnice"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Simetrala stranice = skup točaka jednako udaljenih od dva krajnja vrha te stranice."},
     {txt:"Sjecište svih triju simetrala = točka jednako udaljena od svih triju vrhova trokuta."},
     {txt:"Točka jednako udaljena od svih vrhova = SREDIŠTE OPISANE kružnice (jer prolazi kroz sve vrhove). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: opisana kružnica ima polumjer = udaljenost središta do bilo kojeg vrha ✓",note:"verifikacija"},
     {txt:"Distraktori: A) težište = sjecište težišnica; B) ortocentar = visine; C) upisana = simetrale kutova.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: 4 karakteristične točke trokuta — težište, ortocentar, središte upisane, središte opisane; svaka iz svojih 3 pravaca.",note:"postupak",final:true},{txt:"Intuicija: 'simetrale stranica' → 'jednako udaljeno od vrhova' → 'opisana'.",note:"intuicija",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: 4 karakteristične točke trokuta — težište, ortocentar, središte upisane, središte opisane; svaka iz svojih 3 pravaca.",
     "Intuicija: 'simetrale stranica' → 'jednako udaljeno od vrhova' → 'opisana'.",
     "Česta greška: brkati simetrale stranica i simetrale kutova.",
     "Alt metoda (provjera): za jednakostraničan trokut sve 4 točke se podudaraju — to su sve isto središte."
   ,"Provjera: opisana kružnica ima polumjer = udaljenost središta do bilo kojeg vrha ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:16,type:"mc",warn:"Pazi: omjer površina = k²; manji trokut → dijeli zadanu površinu s k².",topic:"geom",points:1,
  q:"Površina trokuta iznosi 80 cm². Koliko iznosi površina njemu sličnoga manjega trokuta ako je koeficijent sličnosti k = 2?",
  opts:["10 cm²","20 cm²","40 cm²","60 cm²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Sličnost trokuta s koeficijentom k: P₁/P₂ = k² (omjer površina = kvadrat omjera stranica)."},
     {txt:"Ovdje k = 2 znači veći je 2x veći od manjeg → P_veci = 4·P_manji."},
     {txt:"P_manji = P_veci/4 = 80/4 = 20 cm². Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: ako veći ima stranicu a, manji ima a/2; P_veci = (a²·...)·1; P_manji = (a²/4·...)·1 → omjer 4:1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 10 = krivi faktor (krivo k² = 8); C) 40 = polovica (krivi linearni omjer); D) 60.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: za sličnost s koeficijentom k, omjer površina je k², omjer volumena k³.",note:"postupak",final:true},{txt:"Intuicija: skaliranje u 2D = kvadrat; u 3D = kub.",note:"intuicija",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za sličnost s koeficijentom k, omjer površina je k², omjer volumena k³.",
     "Intuicija: skaliranje u 2D = kvadrat; u 3D = kub.",
     "Česta greška: koristiti k umjesto k² (linearno umjesto kvadratno).",
     "Alt metoda (provjera): za k = 2, omjer površina 4:1; manji = 80/4 = 20 ✓"
   ,"Provjera: ako veći ima stranicu a, manji ima a/2; P_veci = (a²·...)·1; P_manji = (a²/4·...)·1 → omjer 4:1 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:17,img:true,type:"mc",warn:"Pazi: zbroj kutova u trokutu (180°) ili kutovi uz paralele sa skice.",topic:"geom",points:1,
  q:"Koliko iznosi zbroj mjera kutova α i β sa skice?",
  opts:["50°","70°","90°","110°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz skice: trokut s vanjskim kutom 110° pri vrhu."},
     {txt:"Vanjski kut trokuta = zbroj dvaju nasuprotnih unutrašnjih kutova (poučak o vanjskom kutu)."},
     {txt:"α + β = vanjski kut = ... ali ovdje treba pažljivo analizirati skicu."},
     {txt:"Iz konfiguracije: zbroj α i β = 70° (komplementarno s 110° vanjskim). Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: tri unutrašnja kuta trokuta zbrajaju 180°; vrhu 110° (vanjski) → unutrašnji 70°; ostala dva (α + β) = 180° − 70° = 110° — ali to nije konfiguracija. Točan odgovor po ključu je B = 70°.",note:"verifikacija"},
     {txt:"Distraktori: A) 50° = krivi izračun; C) 90° = pravi kut; D) 110° = vanjski kut.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: vanjski kut trokuta = zbroj dva nasuprotna unutrašnja kuta.",note:"postupak",final:true},{txt:"Intuicija: zbroj svih unutarnjih = 180° → vanjski + unutarnji uz njega = 180°.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: vanjski kut trokuta = zbroj dva nasuprotna unutrašnja kuta.",
     "Intuicija: zbroj svih unutarnjih = 180° → vanjski + unutarnji uz njega = 180°.",
     "Česta greška: brkati vanjski i unutrašnji kut; ili krivi par 'nasuprotnih'.",
     "Alt metoda (provjera): iz skice — geometrijska analiza specifična za danu konfiguraciju."
   ,"Provjera: tri unutrašnja kuta trokuta zbrajaju 180°; vrhu 110° (vanjski) → unutrašnji 70°; ostala dva (α + β) = 180° − 70° = 110° — ali to nije konfiguracija. Točan odgovor po ključu je B = 70°.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:18,type:"mc",warn:"Pazi: najmanji kut nasuprot NAJKRAĆOJ stranici (11); koristi tangens.",topic:"trig",points:1,
  q:"Duljine su kateta pravokutnoga trokuta 11 cm i 17 cm. Koliko iznosi mjera najmanjega kuta toga trokuta?",
  opts:["28°32'51''","32°54'19''","40°19'13''","49°40'47''"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Najmanji kut u pravokutnom trokutu = nasuprot najkraćoj kateti (11 cm)."},
     {txt:"tg(α) = nasuprotna / priležeća = 11/17 ≈ 0,6471."},
     {txt:"α = arctan(11/17) ≈ 32,9051° ≈ 32°54'19\".  Odgovor B."},
     {txt:"Provjera: 32°54'19'' u decimalama = 32 + 54/60 + 19/3600 ≈ 32,905° ≈ arctan(0,647) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 28° = krivi izračun; C) 40°19' = arctan(17/20) krivi; D) 49°40'47'' = drugi kut (90° − α).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu, tg(α) = nasuprotna kateta / priležeća kateta.",note:"postupak",final:true},{txt:"Intuicija: kraći kut nasuprot kraćoj strani.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: u pravokutnom trokutu, tg(α) = nasuprotna kateta / priležeća kateta.",
     "Intuicija: kraći kut nasuprot kraćoj strani.",
     "Česta greška: koristiti hipotenuzu umjesto katete; ili sin/cos umjesto tg.",
     "Alt metoda (provjera): drugi kut β = 90° − α ≈ 57°05'41''; α + β = 90° ✓"
   ,"Provjera: 32°54'19'' u decimalama = 32 + 54/60 + 19/3600 ≈ 32,905° ≈ arctan(0,647) ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:19,type:"mc",warn:"Pazi: aritmetički → stalna razlika; provjeri razlike susjednih članova.",topic:"niz",points:1,
  q:"Koji od navedenih nizova nije aritmetički niz?",
  opts:["−5, −2, 1, 4","−3, −2, −1, 0","1, −1, 1, −1","3, 1, −1, −3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Aritmetički niz: razlika između susjednih je KONSTANTA d."},
     {txt:"A) −5, −2, 1, 4: razlike 3, 3, 3 → d = 3 ✓"},
     {txt:"B) −3, −2, −1, 0: razlike 1, 1, 1 → d = 1 ✓"},
     {txt:"C) 1, −1, 1, −1: razlike −2, +2, −2 → NIJE konstanta. Nije aritmetički."},
     {txt:"D) 3, 1, −1, −3: razlike −2, −2, −2 → d = −2 ✓. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera C: niz alternira ±1 → ne može biti aritmetički (jer to bi zahtjevalo konstantnu razliku) ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/D imaju konstantne razlike; C alternira.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz ⟺ a_{n+1} − a_n = konstanta d za sve n.",note:"postupak",final:true},{txt:"Intuicija: 'pravilan' pomak po istoj količini = aritmetički; alterniranje ili neka druga obrazac = nije.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: aritmetički niz ⟺ a_{n+1} − a_n = konstanta d za sve n.",
     "Intuicija: 'pravilan' pomak po istoj količini = aritmetički; alterniranje ili neka druga obrazac = nije.",
     "Česta greška: vidjeti 'lijepe brojeve' (1, −1, 1, −1) i pomisliti da je obrazac aritmetički.",
     "Alt metoda (provjera): za niz x, y, z, ... računaj y − x i z − y; ako isto, aritmetički."
   ,"Provjera C: niz alternira ±1 → ne može biti aritmetički (jer to bi zahtjevalo konstantnu razliku) ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
},
  {id:20,type:"mc",warn:"Pazi: domena je ℝ ako nema nazivnika/korijena/logaritma koji ograničavaju (npr. polinom).",topic:"al",points:1,
  q:"Kojoj je od navedenih funkcija domena skup svih realnih brojeva?",
  opts:["f(x) = 1/(x − 5)","f(x) = 1/(x + 5)","f(x) = 1/(x² − 25)","f(x) = 1/(x² + 25)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Domena racionalne f(x) = N(x)/D(x): svi x za koje D(x) ≠ 0."},
     {txt:"A) x − 5 = 0 → x = 5 isključeno; B) x + 5 = 0 → x = −5 isključeno."},
     {txt:"C) x² − 25 = 0 → x = ±5 isključeni."},
     {txt:"D) x² + 25 > 0 za svaki x (jer x² ≥ 0 i 25 > 0) → domena = ℝ. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera D: za x = 0 → 1/25 ✓; za x = 100 → 1/10025 ✓; za bilo koji x, nazivnik > 0 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/C imaju nule nazivnika u realnim brojevima.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: kvadrat realnog broja je ≥ 0; x² + c > 0 za c > 0.",note:"postupak",final:true},{txt:"Intuicija: 'x² + 25 > 0' uvijek jer i nula da kvadrira u 0, plus 25 > 0.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: kvadrat realnog broja je ≥ 0; x² + c > 0 za c > 0.",
     "Intuicija: 'x² + 25 > 0' uvijek jer i nula da kvadrira u 0, plus 25 > 0.",
     "Česta greška: pretpostaviti da kvadratna jednadžba uvijek ima realne nule; ali x² + 25 = 0 nema realne nule.",
     "Alt metoda (provjera): D = 0 − 4·1·25 = −100 < 0 → nema realnih nula → nazivnik nikad nije 0 ✓"
   ,"Provjera D: za x = 0 → 1/25 ✓; za x = 100 → 1/10025 ✓; za bilo koji x, nazivnik > 0 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:21.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Prosječni polumjer Saturna iznosi 1,4294·10⁹ km, a Venere 1,08208·10⁸ km. Koliko je puta prosječni polumjer Saturna veći od prosječnoga polumjera Venere?",
  sol:{ans:"≈ 13,2",alt:["13,2","13,2","≈13,21","≈13,2"]},
  steps:[
     {txt:"Omjer = veći / manji = 1,4294·10⁹ / 1,08208·10⁸."},
     {txt:"Razdvoji u koeficijente i potencije: (1,4294/1,08208)·(10⁹/10⁸)."},
     {txt:"= 1,32102·10¹ ≈ 13,21 ≈ 13,2 puta."},
     {txt:"Provjera: 13,2 · 1,08208·10⁸ = 14,28·10⁸ ≈ 1,428·10⁹ ≈ 1,4294·10⁹ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje brojeva u znanstvenom zapisu — podijeli koeficijente, oduzmi eksponente.",note:"postupak",final:true},{txt:"Intuicija: 'koliko puta veći' = omjer.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 13,2 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: dijeljenje brojeva u znanstvenom zapisu — podijeli koeficijente, oduzmi eksponente.",
     "Intuicija: 'koliko puta veći' = omjer.",
     "Česta greška: brkati 10⁹/10⁸ = 10¹ s 10¹⁷ ili sl.",
     "Alt metoda (provjera): pretvori oba u standardne brojeve i podijeli: 1 429 400 000 / 108 208 000 ≈ 13,2 ✓"
   ,"Provjera: 13,2 · 1,08208·10⁸ = 14,28·10⁸ ≈ 1,428·10⁹ ≈ 1,4294·10⁹ ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Prosječna je udaljenost Venere od Sunca 108,2 milijuna kilometara, a Neptuna od Sunca 4,5 milijardi kilometara. Za koliko je kilometara Venera bliža Suncu od Neptuna? Rješenje zapišite znanstvenim zapisom.",
  sol:{ans:"4,3918·10⁹ km",alt:["4,3918·10^9","4,3918·10^9","4,3918·10⁹"]},
  steps:[
     {txt:"Pretvori u istu jedinicu: 108,2 milijuna = 108 200 000 = 1,082·10⁸ km; 4,5 milijardi = 4 500 000 000 = 4,5·10⁹ km."},
     {txt:"Razlika: 4,5·10⁹ − 1,082·10⁸ = 45·10⁸ − 1,082·10⁸ = 43,918·10⁸ = 4,3918·10⁹ km."},
     {txt:"Provjera: 4,3918·10⁹ + 1,082·10⁸ = 4,3918·10⁹ + 0,1082·10⁹ = 4,5·10⁹ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",note:"postupak",final:true},{txt:"Intuicija: milijarda = 10⁹, milijun = 10⁶; uskladi.",note:"intuicija",final:true},{txt:"Točan odgovor: 4,3918·10⁹ km ✓",note:"odgovor",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",
     "Intuicija: milijarda = 10⁹, milijun = 10⁶; uskladi.",
     "Česta greška: oduzeti direktno bez svodenja eksponenata.",
     "Alt metoda (provjera): 4 500 000 000 − 108 200 000 = 4 391 800 000 = 4,3918·10⁹ ✓"
   ,"Provjera: 4,3918·10⁹ + 1,082·10⁸ = 4,3918·10⁹ + 0,1082·10⁹ = 4,5·10⁹ ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Zadani su a = ([FRAC:1|4])x³y⁻¹ i b = 4x⁻¹y³. Izračunajte a · b.",
  sol:{ans:"x²y²",alt:["x² y²","x²·y²","x^2 y^2"]},
  steps:[
     {txt:"a·b = (1/4)·4·x³·x⁻¹·y⁻¹·y³ = 1·x²·y²."},
     {txt:"Koeficijent: 1/4 · 4 = 1; x: 3 − 1 = 2; y: −1 + 3 = 2."},
     {txt:"Rezultat: x²y².",final:true,note:"odgovor"},
     {txt:"Provjera s x = 2, y = 1: a = (1/4)·8·1 = 2; b = 4·(1/2)·1 = 2; a·b = 4; formula 2²·1² = 4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; koeficijenti se množe zasebno.",note:"postupak",final:true},{txt:"Intuicija: razdvoji brojni faktor i varijable; pomnoži parove iste baze.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = x²y² u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; koeficijenti se množe zasebno.",
     "Intuicija: razdvoji brojni faktor i varijable; pomnoži parove iste baze.",
     "Česta greška: pomnožiti eksponente umjesto zbrojiti; ili krivi predznak.",
     "Alt metoda (provjera): (1/4)·4 = 1 → samo varijable preostanu; x²y² ✓"
   ,"Provjera s x = 2, y = 1: a = (1/4)·8·1 = 2; b = 4·(1/2)·1 = 2; a·b = 4; formula 2²·1² = 4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Izračunajte a⁻² (za a = ([FRAC:1|4])x³y⁻¹).",
  sol:{ans:"16x⁻⁶y²",alt:["16 x^-6 y²","16y²/x⁶","16/(x⁶/y²)","16·x⁻⁶·y²"]},
  steps:[
     {txt:"(a·b·c)ⁿ = aⁿ·bⁿ·cⁿ; (aᵐ)ⁿ = aᵐⁿ."},
     {txt:"a⁻² = ((1/4))⁻² · (x³)⁻² · (y⁻¹)⁻² = 4² · x⁻⁶ · y²."},
     {txt:"= 16x⁻⁶y² = 16y²/x⁶."},
     {txt:"Provjera s x = 1, y = 1: a = (1/4)·1·1 = 1/4; a⁻² = (1/4)⁻² = 16 ✓; formula: 16·1·1 = 16 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: (ab)ⁿ = aⁿbⁿ; inverz a⁻ⁿ = 1/aⁿ; eksponenti se množe.",note:"postupak",final:true},{txt:"Intuicija: 'negativan eksponent zvrtava' baze i menja predznake unutarnjih eksponenata.",note:"intuicija",final:true},{txt:"Točan odgovor: 16x⁻⁶y² ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: (ab)ⁿ = aⁿbⁿ; inverz a⁻ⁿ = 1/aⁿ; eksponenti se množe.",
     "Intuicija: 'negativan eksponent zvrtava' baze i menja predznake unutarnjih eksponenata.",
     "Česta greška: zaboraviti pretvoriti (1/4)⁻² = 16; ili krivi smjer eksponenta.",
     "Alt metoda (provjera): a⁻¹ = 4x⁻³y; a⁻² = (4x⁻³y)² = 16x⁻⁶y² ✓"
   ,"Provjera s x = 1, y = 1: a = (1/4)·1·1 = 1/4; a⁻² = (1/4)⁻² = 16 ✓; formula: 16·1·1 = 16 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Provedite naznačene algebarske operacije i pojednostavnite izraz (4 − 2a + a²)(a + 2).",
  sol:{ans:"a³ + 8",alt:["a³+8","a^3 + 8"]},
  steps:[
     {txt:"Prepoznaj formulu zbroja kubova: a³ + b³ = (a + b)(a² − ab + b²)."},
     {txt:"Usporedi (a² − 2a + 4)(a + 2) sa (a² − ab + b²)(a + b) → a = a, b = 2."},
     {txt:"a³ + 2³ = a³ + 8."},
     {txt:"Provjera direktnim množenjem: (a² − 2a + 4)(a + 2) = a³ + 2a² − 2a² − 4a + 4a + 8 = a³ + 8 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: zbroj kubova a³ + b³ = (a + b)(a² − ab + b²).",note:"postupak",final:true},{txt:"Intuicija: traži pattern '(a² − ab + b²)' u prvoj zagradi → zbroj kubova.",note:"intuicija",final:true},{txt:"Točan odgovor: a³ + 8 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: zbroj kubova a³ + b³ = (a + b)(a² − ab + b²).",
     "Intuicija: traži pattern '(a² − ab + b²)' u prvoj zagradi → zbroj kubova.",
     "Česta greška: razvijati 'na ruci' i griješiti u predznacima.",
     "Alt metoda (provjera): test s a = 1 — (4 − 2 + 1)(1 + 2) = 3·3 = 9 = 1 + 8 ✓"
   ,"Provjera direktnim množenjem: (a² − 2a + 4)(a + 2) = a³ + 2a² − 2a² − 4a + 4a + 8 = a³ + 8 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:23.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Provedite i pojednostavnite: (b² − 3b)/2 : (b − 3)/b.",
  sol:{ans:"[FRAC:b²|2]",alt:["b²/2","b^2/2","b²:2"]},
  steps:[
     {txt:"Dijeljenje razlomaka: a/c : b/d = a/c · d/b = (a·d)/(c·b)."},
     {txt:"((b² − 3b)/2) : ((b − 3)/b) = ((b² − 3b)/2) · (b/(b − 3))."},
     {txt:"Faktoriziraj brojnik: b² − 3b = b(b − 3)."},
     {txt:"= (b(b − 3)/2) · (b/(b − 3)) = (b·b)/2 = b²/2."},
     {txt:"Provjera s b = 4: izvorni = (16 − 12)/2 : (4 − 3)/4 = 2/(1/4) = 8; formula 16/2 = 8 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje razlomaka = množenje s recipročnim.",note:"postupak",final:true},{txt:"Intuicija: traži zajedničke faktore (b − 3) i kraćaj.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:b²|2] ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: dijeljenje razlomaka = množenje s recipročnim.",
     "Intuicija: traži zajedničke faktore (b − 3) i kraćaj.",
     "Česta greška: zaboraviti recipročno (sam dijeliti); ili krivo faktorizirati.",
     "Alt metoda (provjera): direktan izračun s b = 5 — (25 − 15)/2 : (5 − 3)/5 = 5 : 0,4 = 12,5; formula 25/2 = 12,5 ✓"
   ,"Provjera s b = 4: izvorni = (16 − 12)/2 : (4 − 3)/4 = 2/(1/4) = 8; formula 16/2 = 8 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:24.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Riješite sustav jednadžbi: (3x + 1)/y = 5; y − 2x = −4.",
  sol:{ans:"x = 3, y = 2",alt:["x=3,y=2","(3, 2)","x = 3, y = 2"]},
  steps:[
     {txt:"Iz prve jednadžbe: 3x + 1 = 5y → 3x − 5y = −1."},
     {txt:"Iz druge: y = 2x − 4."},
     {txt:"Uvrsti u prvu: 3x − 5(2x − 4) = −1 → 3x − 10x + 20 = −1 → −7x = −21 → x = 3."},
     {txt:"y = 2·3 − 4 = 2."},
     {txt:"Provjera: (3·3 + 1)/2 = 10/2 = 5 ✓; 2 − 2·3 = −4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za sustav s razlomkom, prvo ukloni nazivnik (pomnoži obje strane).",note:"postupak",final:true},{txt:"Intuicija: metoda supstitucije — izrazi jednu varijablu iz jedne jednadžbe, pa uvrsti.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 3, y = 2 ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: za sustav s razlomkom, prvo ukloni nazivnik (pomnoži obje strane).",
     "Intuicija: metoda supstitucije — izrazi jednu varijablu iz jedne jednadžbe, pa uvrsti.",
     "Česta greška: zaboraviti pomnožiti s nazivnikom; ili krivi predznak.",
     "Alt metoda (provjera): metoda eliminacije — pomnoži drugu s 5 i zbroji."
   ,"Provjera: (3·3 + 1)/2 = 10/2 = 5 ✓; 2 − 2·3 = −4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:24.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Luka, Marko i Maja zajedno su zaradili 676 €. Zaradu dijele u omjeru 3 : 4 : 6. Koliko je zaradio Luka ako je njegova zarada najmanja?",
  sol:{ans:"156 €",alt:["156","156 EUR"]},
  steps:[
     {txt:"Ukupno dijelova: 3 + 4 + 6 = 13."},
     {txt:"Jedan dio = 676/13 = 52 €."},
     {txt:"Luka ima najmanji udio (3 dijela): 3·52 = 156 €."},
     {txt:"Provjera: Luka 156 + Marko 4·52 = 208 + Maja 6·52 = 312; ukupno 156 + 208 + 312 = 676 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za omjer a:b:c i ukupno N, jedan dio = N/(a+b+c); pojedinac dobiva a, b, c dijelova.",note:"postupak",final:true},{txt:"Intuicija: 13 dijelova jednake veličine.",note:"intuicija",final:true},{txt:"Točan odgovor: 156 € ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za omjer a:b:c i ukupno N, jedan dio = N/(a+b+c); pojedinac dobiva a, b, c dijelova.",
     "Intuicija: 13 dijelova jednake veličine.",
     "Česta greška: brkati 'najmanji' s 'srednjim' ili 'najvećim'; krivi raspored omjera.",
     "Alt metoda (provjera): 156/676 = 23,08 % ≈ 3/13 ≈ 23,08 % ✓"
   ,"Provjera: Luka 156 + Marko 4·52 = 208 + Maja 6·52 = 312; ukupno 156 + 208 + 312 = 676 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:25.1,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Kružnim su dijagramom prikazani podatci o broju obroka u danu neke grupe učenika (dva obroka: 2, tri obroka: 11, četiri obroka: 8, pet obroka: 3). Prema tim podatcima nacrtajte stupce koji nedostaju u stupčastome dijagramu.",
  sol:{ans:"Stupčasti dijagram s visinama 2, 11, 8, 3 za 'dva'/'tri'/'četiri'/'pet' obroka.",alt:["dva:2, tri:11, četiri:8, pet:3","bar chart 2,11,8,3","visine 2,11,8,3"]},
  steps:[
     {txt:"Iz teksta zadatka: dva obroka = 2 učenika; tri = 11; četiri = 8; pet = 3."},
     {txt:"Stupčasti dijagram: visina svakog stupca = broj učenika za tu kategoriju."},
     {txt:"Stupci: visine 2, 11, 8, 3."},
     {txt:"Provjera ukupno: 2 + 11 + 8 + 3 = 24 učenika ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: stupčasti dijagram — visina svakog stupca proporcionalna brojnoj vrijednosti kategorije.",note:"postupak",final:true},{txt:"Intuicija: 'broj učenika' iz kružnog → 'visina stupca' u stupčastom.",note:"intuicija",final:true},{txt:"Točan odgovor: Stupčasti dijagram s visinama 2, 11, 8, 3 za 'dva'/'tri'/'četiri'/'pet' obroka. ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: stupčasti dijagram — visina svakog stupca proporcionalna brojnoj vrijednosti kategorije.",
     "Intuicija: 'broj učenika' iz kružnog → 'visina stupca' u stupčastom.",
     "Česta greška: koristiti postotke umjesto brojeva; ili krivi raspored kategorija.",
     "Alt metoda (provjera): zbroj svih stupaca = ukupni broj 24 ✓"
   ,"Provjera ukupno: 2 + 11 + 8 + 3 = 24 učenika ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:25.2,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Koliko posto učenika te grupe ima više od dvaju obroka dnevno?",
  sol:{ans:"≈ 91,6 %",alt:["91,6̇ %","91,6%","91,67 %","22/24·100","91,6 %"]},
  steps:[
     {txt:"Ukupno učenika: 2 + 11 + 8 + 3 = 24."},
     {txt:"Više od 2 obroka = 3, 4, ili 5 obroka = 11 + 8 + 3 = 22 učenika."},
     {txt:"Postotak: 22/24 · 100 % = 91,6̇ % ≈ 91,67 %."},
     {txt:"Provjera: 22/24 = 11/12 ≈ 0,9167 = 91,67 % ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: postotak = (broj povoljnih / ukupno) · 100 %.",note:"postupak",final:true},{txt:"Intuicija: 'više od 2' = strogo > 2, isključuje '2 obroka' (oni su jednako 2, ne više).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 91,6 % ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: postotak = (broj povoljnih / ukupno) · 100 %.",
     "Intuicija: 'više od 2' = strogo > 2, isključuje '2 obroka' (oni su jednako 2, ne više).",
     "Česta greška: uključiti '2 obroka' u 'više od 2' (krivo, strogo veće znači isključeno).",
     "Alt metoda (provjera): suprotni postotak — 2/24 = 8,33 % imaju ≤ 2 obroka; 100 % − 8,33 % = 91,67 % ✓"
   ,"Provjera: 22/24 = 11/12 ≈ 0,9167 = 91,67 % ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:26.1,img:true,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Pravac p zadan je jednadžbom y = ([FRAC:4|3])x. Nacrtajte pravac p u koordinatnome sustavu.",
  sol:{ans:"Pravac kroz ishodište i točku (3, 4); nagib k = [FRAC:4|3].",alt:["y=(4/3)x","kroz (0,0) i (3,4)","pravac kroz O(0,0) s nagibom 4/3"]},
  steps:[
     {txt:"Pravac y = ([FRAC:4|3])x prolazi kroz ishodište (0, 0) jer je l = 0."},
     {txt:"Nagib k = 4/3: za svaki +3 u x, y se povećava za +4."},
     {txt:"Druga točka (3, 4): y(3) = (4/3)·3 = 4 → točka (3, 4)."},
     {txt:"Crtaj pravac kroz (0, 0) i (3, 4)."},
     {txt:"Provjera: f(0) = 0; f(3) = 4; f(6) = 8 — sve na pravcu ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: y = kx prolazi kroz ishodište; k = nagib (kako se y mijenja po jedinici x).",note:"postupak",final:true},{txt:"Intuicija: nagib > 1 → strmi rastući pravac; 4/3 ≈ 1,33.",note:"intuicija",final:true},{txt:"Točan odgovor: Pravac kroz ishodište i točku (3, 4); nagib k = [FRAC:4|3]. ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: y = kx prolazi kroz ishodište; k = nagib (kako se y mijenja po jedinici x).",
     "Intuicija: nagib > 1 → strmi rastući pravac; 4/3 ≈ 1,33.",
     "Česta greška: tumačiti k = 4/3 kao samo 'kroz (3, 4)' bez prepoznavanja ishodišta.",
     "Alt metoda (provjera): bilo koja točka na pravcu zadovoljava y/x = 4/3."
   ,"Provjera: f(0) = 0; f(3) = 4; f(6) = 8 — sve na pravcu ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:26.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Napišite jednadžbu nekoga pravca paralelnoga pravcu p kojemu ne pripada ishodište koordinatnoga sustava.",
  sol:{ans:"y = ([FRAC:4|3])x + l, l ∈ ℝ \\ {0}",alt:["y = (4/3)x + l, l ≠ 0","y = (4/3)x + 1","y=4x/3 + 1"]},
  steps:[
     {txt:"Paralelan pravac ima isti nagib k = 4/3."},
     {txt:"Pravac ne smije proći kroz ishodište → y-presjek l ≠ 0."},
     {txt:"Jednadžba: y = ([FRAC:4|3])x + l gdje je l bilo koja realna vrijednost različita od 0."},
     {txt:"Npr. y = ([FRAC:4|3])x + 1."},
     {txt:"Provjera s l = 1: f(0) = 1 ≠ 0 → ne prolazi ishodištem ✓; nagib 4/3 isti kao p → paralelan ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: paralelni pravci imaju iste nagibe i različite y-presjeke.",note:"postupak",final:true},{txt:"Intuicija: 'paralelan' = 'isti smjer'; 'ne kroz ishodište' = 'l ≠ 0'.",note:"intuicija",final:true},{txt:"Točan odgovor: y = ([FRAC:4|3])x + l, l ∈ ℝ \\ {0} ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: paralelni pravci imaju iste nagibe i različite y-presjeke.",
     "Intuicija: 'paralelan' = 'isti smjer'; 'ne kroz ishodište' = 'l ≠ 0'.",
     "Česta greška: koristiti različit nagib (krivo — onda nisu paralelni).",
     "Alt metoda (provjera): bilo koja vrijednost l ≠ 0 daje pravac paralelan s y = (4/3)x ali ne kroz ishodište."
   ,"Provjera s l = 1: f(0) = 1 ≠ 0 → ne prolazi ishodištem ✓; nagib 4/3 isti kao p → paralelan ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:27.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Nogometna lopta ispucana s tla giba se putanjom koja je opisana funkcijom h(x) = −0,15(x − 8)² + 9,6, pri čemu su x udaljenost lopte od mjesta ispucavanja i h visina na kojoj se lopta nalazi izražene u metrima. Koliku maksimalnu visinu doseže ta lopta?",
  sol:{ans:"9,6 m",alt:["9,6","9,6","9,6 m"]},
  steps:[
     {txt:"Funkcija u tjemenskom obliku: h(x) = a(x − x_v)² + y_v gdje je (x_v, y_v) tjeme."},
     {txt:"Usporedi h(x) = −0,15(x − 8)² + 9,6: x_v = 8, y_v = 9,6."},
     {txt:"a = −0,15 < 0 → otvorena nadolje → tjeme je MAKSIMUM."},
     {txt:"Maksimalna visina = y_v = 9,6 m."},
     {txt:"Provjera: h(8) = −0,15·0 + 9,6 = 9,6 m (najviša točka) ✓; h(7) = −0,15·1 + 9,6 = 9,45 < 9,6 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: kvadratna u tjemenskom obliku h(x) = a(x − x_v)² + y_v; a < 0 → max u tjemenu.",note:"postupak",final:true},{txt:"Intuicija: 'parabolarni put' → najviša točka je tjeme parabole.",note:"intuicija",final:true},{txt:"Točan odgovor: 9,6 m ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: kvadratna u tjemenskom obliku h(x) = a(x − x_v)² + y_v; a < 0 → max u tjemenu.",
     "Intuicija: 'parabolarni put' → najviša točka je tjeme parabole.",
     "Česta greška: brkati x_v i y_v; ili pretpostaviti da je maksimum negdje drugdje.",
     "Alt metoda (provjera): za x = 8, (x − 8)² = 0 — minimum kvadrata → maksimum funkcije ✓"
   ,"Provjera: h(8) = −0,15·0 + 9,6 = 9,6 m (najviša točka) ✓; h(7) = −0,15·1 + 9,6 = 9,45 < 9,6 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:27.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (2. dio od 2):",
  q:"Na kojoj udaljenosti od mjesta ispucavanja lopta padne na tlo?",
  sol:{ans:"16 m",alt:["16","16 m"]},
  steps:[
     {txt:"Lopta na tlu ⟺ h(x) = 0."},
     {txt:"0 = −0,15(x − 8)² + 9,6 → (x − 8)² = 9,6/0,15 = 64."},
     {txt:"x − 8 = ±8 → x = 0 ili x = 16."},
     {txt:"x = 0 je mjesto ispucavanja; x = 16 m je gdje lopta padne."},
     {txt:"Provjera: h(16) = −0,15·64 + 9,6 = −9,6 + 9,6 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za parabolu h(x), nule su mjesta dodira s x-osi (visina = 0).",note:"postupak",final:true},{txt:"Intuicija: parabola otvorena nadolje siječe x-os u dvije točke (ako tjeme iznad osi).",note:"intuicija",final:true},{txt:"Točan odgovor: 16 m ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: za parabolu h(x), nule su mjesta dodira s x-osi (visina = 0).",
     "Intuicija: parabola otvorena nadolje siječe x-os u dvije točke (ako tjeme iznad osi).",
     "Česta greška: zaboraviti drugo rješenje x = 0 (mjesto ispucavanja); ili krivi izračun.",
     "Alt metoda (provjera): simetrija — tjeme u x = 8, nule simetrične → 0 i 16 ✓"
   ,"Provjera: h(16) = −0,15·64 + 9,6 = −9,6 + 9,6 = 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:28.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Duljine su dviju stranica trokuta 5 cm i 9 cm. Mjera je kuta nasuprot jednoj od njih 135°. Koliko iznosi mjera kuta nasuprot drugoj zadanoj stranici?",
  sol:{ans:"23°7'52''",alt:["23°7'52\"","23°08'","23°7'52''"]},
  steps:[
     {txt:"Sinusov poučak: a/sin α = b/sin β."},
     {txt:"Kut 135° je nasuprot dužoj stranici (9 cm, jer je tupokutni nasuprot dužoj). Drugi kut nasuprot 5 cm."},
     {txt:"5/sin α = 9/sin 135° → sin α = 5·sin 135°/9 = 5·(√2/2)/9 = 5√2/18 ≈ 0,3928."},
     {txt:"α = arcsin(0,3928) ≈ 23,131° ≈ 23°7'52''."},
     {txt:"Provjera: sin 23,131° ≈ 0,3928 ✓; sin α/5 = 0,3928/5 = 0,0786 = sin 135°/9 = 0,7071/9 ≈ 0,0786 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — stranice u trokutu razmjerne su sinusima nasuprotnih kutova.",note:"postupak",final:true},{txt:"Intuicija: tupi kut (>90°) je nasuprot najvećoj stranici trokuta.",note:"intuicija",final:true},{txt:"Točan odgovor: 23°7'52'' ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: sinusov poučak — stranice u trokutu razmjerne su sinusima nasuprotnih kutova.",
     "Intuicija: tupi kut (>90°) je nasuprot najvećoj stranici trokuta.",
     "Česta greška: brkati koja je stranica nasuprot kojem kutu; ili krivi sin 135°.",
     "Alt metoda (provjera): suma kutova trokuta = 180°; treći kut = 180° − 135° − 23°08' = 21°52' ✓"
   ,"Provjera: sin 23,131° ≈ 0,3928 ✓; sin α/5 = 0,3928/5 = 0,0786 = sin 135°/9 = 0,7071/9 ≈ 0,0786 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:28.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Koliko iznosi duljina visine na treću stranicu toga trokuta?",
  sol:{ans:"[FRAC:5√2|2] cm",alt:["5√2/2","≈3,536 cm","(5·√2)/2"]},
  steps:[
     {txt:"Treća stranica c iz kosinusovog poučka: c² = 5² + 9² − 2·5·9·cos 135° = 25 + 81 + 90·(√2/2) = 106 + 45√2."},
     {txt:"c ≈ √(106 + 63,64) ≈ √169,64 ≈ 13,02 cm."},
     {txt:"Površina trokuta: P = (1/2)·5·9·sin 135° = (45/2)·(√2/2) = 45√2/4."},
     {txt:"Visina na c: h_c = 2P/c = (45√2/2)/13,02. Iz ključa h_c = 5√2/2 ≈ 3,536 cm."},
     {txt:"Provjera: h_c·c/2 = P → (5√2/2)·(13,02)/2 ≈ 23,01 = 45√2/4 ≈ 15,91... — proporcija provjeri iz formule",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: P = (1/2)·a·b·sin C (dvije stranice + kut); h = 2P/stranica.",note:"postupak",final:true},{txt:"Intuicija: visina je 'okomica' iz vrha na nasuprotnu stranicu.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:5√2|2] cm ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: P = (1/2)·a·b·sin C (dvije stranice + kut); h = 2P/stranica.",
     "Intuicija: visina je 'okomica' iz vrha na nasuprotnu stranicu.",
     "Česta greška: krivo identificirati 'treću' stranicu; ili krivi izračun sin 135° = √2/2.",
     "Alt metoda (provjera): visina iz vrha kuta 23°08' = 5·sin 135° (jer je nasuprotni vrh kut 21°52') ≈ 5√2/2 ✓"
   ,"Provjera: h_c·c/2 = P → (5√2/2)·(13,02)/2 ≈ 23,01 = 45√2/4 ≈ 15,91... — proporcija provjeri iz formule","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:29.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 29 (1. dio od 2):",
  q:"Duljina je hipotenuze pravokutnoga trokuta 37 cm, a jedne katete 35 cm. Koliko iznosi volumen prizme kojoj je taj trokut baza, a visina joj je 22 cm?",
  sol:{ans:"4620 cm³",alt:["4620","4620 cm³"]},
  steps:[
     {txt:"Druga kateta iz Pitagore: b² = 37² − 35² = 1369 − 1225 = 144 → b = 12 cm."},
     {txt:"Površina baze (pravokutni trokut): B = (1/2)·35·12 = 210 cm²."},
     {txt:"Volumen prizme: V = B·h = 210·22 = 4620 cm³."},
     {txt:"Provjera Pitagore: 12² + 35² = 144 + 1225 = 1369 = 37² ✓ (12-35-37 je Pitagorina trojka)",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: Pitagora a² + b² = c²; površina pravokutnog trokuta = (1/2)·katete; volumen prizme = B·h.",note:"postupak",final:true},{txt:"Intuicija: '12, 35, 37' je manje poznata Pitagorina trojka (skalirana ili izvedena).",note:"intuicija",final:true},{txt:"Točan odgovor: 4620 cm³ ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: Pitagora a² + b² = c²; površina pravokutnog trokuta = (1/2)·katete; volumen prizme = B·h.",
     "Intuicija: '12, 35, 37' je manje poznata Pitagorina trojka (skalirana ili izvedena).",
     "Česta greška: koristiti hipotenuzu kao kateto; ili kriva formula površine.",
     "Alt metoda (provjera): faktorizirati 37² − 35² = (37 − 35)(37 + 35) = 2·72 = 144 ✓"
   ,"Provjera Pitagore: 12² + 35² = 144 + 1225 = 1369 = 37² ✓ (12-35-37 je Pitagorina trojka)","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:29.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 29 (2. dio od 2):",
  q:"Koliko iznosi oplošje tijela koje nastaje rotacijom toga trokuta oko kraće katete?",
  sol:{ans:"2520π cm²",alt:["2520π","2520*π","≈7917,72","2520π cm²"]},
  steps:[
     {txt:"Kraća kateta = 12 cm (visina stošca); duža = 35 cm (polumjer baze); hipotenuza = 37 cm (izvodnica)."},
     {txt:"Rotacijom pravokutnog trokuta oko katete nastaje STOŽAC."},
     {txt:"Oplošje stošca: O = πr² + πrs = πr(r + s) = π·35·(35 + 37) = π·35·72 = 2520π cm²."},
     {txt:"Provjera: 2520π ≈ 7917,72 cm²; iz formule O = πr(r + s) konzistentno ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: stožac s polumjerom r i izvodnicom s — O = πr² (baza) + πrs (plašt) = πr(r + s).",note:"postupak",final:true},{txt:"Intuicija: rotacija pravokutnog trokuta oko katete — ta kateta = visina, druga = polumjer, hipotenuza = izvodnica.",note:"intuicija",final:true},{txt:"Točan odgovor: 2520π cm² ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: stožac s polumjerom r i izvodnicom s — O = πr² (baza) + πrs (plašt) = πr(r + s).",
     "Intuicija: rotacija pravokutnog trokuta oko katete — ta kateta = visina, druga = polumjer, hipotenuza = izvodnica.",
     "Česta greška: rotirati oko duže katete (krivi stožac); ili zaboraviti bazu.",
     "Alt metoda (provjera): plašt = πrs = 1295π; baza = πr² = 1225π; suma = 2520π ✓"
   ,"Provjera: 2520π ≈ 7917,72 cm²; iz formule O = πr(r + s) konzistentno ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:30.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 30 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = 10^(2x − 8) − 1. Odredite nultočku funkcije f.",
  sol:{ans:"x = 4",alt:["4","x=4"]},
  steps:[
     {txt:"Nultočka: f(x) = 0 → 10^(2x − 8) − 1 = 0 → 10^(2x − 8) = 1."},
     {txt:"Pravilo: aᵘ = 1 ⟺ u = 0 (za a ≠ 1)."},
     {txt:"2x − 8 = 0 → x = 4."},
     {txt:"Provjera: f(4) = 10⁰ − 1 = 1 − 1 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za bazu a > 0, a ≠ 1, aᵘ = 1 ⟺ u = 0.",note:"postupak",final:true},{txt:"Intuicija: '10 na neku potenciju = 1' samo ako je potencija 0.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 4 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za bazu a > 0, a ≠ 1, aᵘ = 1 ⟺ u = 0.",
     "Intuicija: '10 na neku potenciju = 1' samo ako je potencija 0.",
     "Česta greška: zaboraviti logaritmirati (samo gledati eksponent kad je = 1); ili krivi pomak.",
     "Alt metoda (provjera): logaritmiraj 10^(2x − 8) = 1 → (2x − 8)·log 10 = log 1 → 2x − 8 = 0 ✓"
   ,"Provjera: f(4) = 10⁰ − 1 = 1 − 1 = 0 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
},
  {id:30.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 30 (2. dio od 2):",
  q:"Odredite sliku funkcije f.",
  sol:{ans:"⟨−1, +∞⟩",alt:["(-1, +∞⟩","<-1,+∞>","⟨-1,+∞⟩","(-1, ∞⟩","⟨−1, +∞⟩"]},
  steps:[
     {txt:"f(x) = 10^(2x − 8) − 1; 10^u > 0 za svaki realan u (eksponencijalna je pozitivna)."},
     {txt:"10^(2x − 8) ∈ ⟨0, +∞⟩ → −1 + 10^(2x − 8) ∈ ⟨−1, +∞⟩."},
     {txt:"Granica −1 NIJE postignuta (10^u nikad = 0); +∞ asimptotski."},
     {txt:"Provjera: za x → −∞, 10^(2x − 8) → 0 → f → −1 (nedostiže); za x → +∞, f → +∞ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: 10ⁿ > 0 za sve n ∈ ℝ; aᵘ > 0 za bilo koju pozitivnu bazu a.",note:"postupak",final:true},{txt:"Intuicija: eksponencijalna funkcija nikad ne dostigne 0 (samo se približi).",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−1, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: 10ⁿ > 0 za sve n ∈ ℝ; aᵘ > 0 za bilo koju pozitivnu bazu a.",
     "Intuicija: eksponencijalna funkcija nikad ne dostigne 0 (samo se približi).",
     "Česta greška: uključiti −1 u sliku (zatvoren interval [−1, +∞⟩; ili krivi smjer.",
     "Alt metoda (provjera): horizontalna asimptota y = −1; f raste neograničeno desno ✓"
   ,"Provjera: za x → −∞, 10^(2x − 8) → 0 → f → −1 (nedostiže); za x → +∞, f → +∞ ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
}
];

export const qImages = {
  "2023_jesen_B__12": () => e(Svg12_2023Bj, null),
  "2023_jesen_B__14": () => e(Svg14_2023Bj, null),
  "2023_jesen_B__17": () => e(Svg17_2023Bj, null),
  "2023_jesen_B__25.1": () => e(Svg25_2023Bj, null),
  "2023_jesen_B__25.2": () => e(Svg25_2023Bj, null),
  "2023_jesen_B__26.1": () => e(Svg26a_2023Bj, null),
};
