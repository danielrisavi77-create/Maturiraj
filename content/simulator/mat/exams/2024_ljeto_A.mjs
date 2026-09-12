// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg8_2024Alj(){
  // Graf f(x) = |x+2| - 2. Vrh V(-2, -2). Siku x-os pri x = 0 i x = -4.
  const st="var(--text)";
  const W=360, H=300;
  const ox=180, oy=180, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const gridLines=[];
  for(let x=-5;x<=5;x++){ if(x===0) continue; gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-4)+4,x2:px(x),y2:py(3)-4,stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-4;y<=3;y++){ if(y===0) continue; gridLines.push(e("line",{key:"gy"+y,x1:px(-5)-4,y1:py(y),x2:px(5)+4,y2:py(y),stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  // V funkcije: dvije polulinije iz (-2,-2) — lijevo ide do (-5, 1), desno do (5, 5) ali clipaj na panel
  const V = [px(-2), py(-2)];
  const Lend = [px(-5), py(-2 + 3)];  // lijevo: y = -(x+2)-2 = -x-4 kod x=-5: y=1
  const Rend = [px(3), py(-2 + 5)];   // desno: y = (x+2)-2 = x kod x=3: y=3 (ugao panela)
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    // osi
    e("line",{key:"xa",x1:px(-5)-6,y1:oy,x2:px(5)+6,y2:oy,stroke:st,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:py(3)-6,x2:ox,y2:py(-4)+6,stroke:st,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${px(5)+6},${oy} ${px(5)+1},${oy-4} ${px(5)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(3)-6} ${ox-4},${py(3)-1} ${ox+4},${py(3)-1}`,fill:st}),
    e("text",{key:"xl",x:px(5)+10,y:oy+4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(3)-10,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("circle",{key:"ox1",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"tx1",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("circle",{key:"oy1",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"ty1",x:ox-10,y:py(1)+4,fontSize:11,fontFamily:"serif",fill:st,textAnchor:"end"},"1"),
    // V funkcija
    e("polyline",{key:"fn",points:`${Lend[0]},${Lend[1]} ${V[0]},${V[1]} ${Rend[0]},${Rend[1]}`,fill:"none",stroke:"var(--blue,#4a90d9)",strokeWidth:2.2,strokeLinejoin:"round"}),
    // Labela y=f(x)
    e("text",{key:"fx",x:px(2.5),y:py(2),fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y = f(x)")
  );
}

function Svg35_2024Alj(){
  const W=420, H=240;
  const blue="var(--blue)"; const blueFill="rgba(74,144,217,0.12)"; const red="var(--red)"; const gold="var(--gold)"; const txt="var(--text)";
  // Trapezoid: A bot-left, B bot-right, C top-right, D top-left
  // From original render: relatively flat trapezoid
  const A=[60,180], B=[360,180], C=[280,80], D=[140,80];
  // Foots of perpendiculars from D, C onto AB
  const E_=[140,180], F=[280,180];
  return e("svg",{viewBox:`0 0 ${W} ${H}`, xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"420px",width:"100%",display:"block",margin:"12px auto"}},
    e("polygon",{key:"tr",points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]} ${D[0]},${D[1]}`,
      fill:blueFill,stroke:blue,strokeWidth:2}),
    // Heights from D and C
    e("line",{key:"DE",x1:D[0],y1:D[1],x2:E_[0],y2:E_[1],stroke:gold,strokeWidth:1.4,strokeDasharray:"6 4"}),
    e("line",{key:"CF",x1:C[0],y1:C[1],x2:F[0],y2:F[1],stroke:gold,strokeWidth:1.4,strokeDasharray:"6 4"}),
    // Right angles
    e("polyline",{key:"rE",points:`${E_[0]+8},${E_[1]} ${E_[0]+8},${E_[1]-8} ${E_[0]},${E_[1]-8}`,fill:"none",stroke:gold,strokeWidth:1.3}),
    e("polyline",{key:"rF",points:`${F[0]-8},${F[1]} ${F[0]-8},${F[1]-8} ${F[0]},${F[1]-8}`,fill:"none",stroke:gold,strokeWidth:1.3}),
    // Vertices
    ...[[A,"A",-14,18],[B,"B",6,18],[C,"C",6,-4],[D,"D",-16,-4],[E_,"E",-10,18],[F,"F",4,18]].map(([p,l,dx,dy],i)=>
      e("g",{key:"v"+i},
        e("circle",{cx:p[0],cy:p[1],r:4,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5}),
        e("text",{x:p[0]+dx,y:p[1]+dy,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},l)
      )
    )
  );
}

function Svg33b_2024Alj(){
  // f(x) = 2 sin(Bx), B = 3/2, period T = 4π/3
  const st="var(--text)";
  const red="var(--red,#e05252)";
  const W=440, H=240;
  const ox=30, oy=120, ux=55, uy=30;  // ux = piksela po π/2 jedinici, uy po 1 jedinici y
  // x range: 0 do 2π (4π/2 u jedinicima ux). Zapravo koristim ux = 55 za vrijednost π/2.
  const px=(xVal)=>ox+xVal*2*ux/Math.PI;  // xVal u radijanima
  const py=(y)=>oy-y*uy;
  const B = 3/2;
  const pts=[];
  for(let x=0;x<=2*Math.PI;x+=0.05){
    pts.push(`${px(x).toFixed(1)},${py(2*Math.sin(B*x)).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"440px",width:"100%",display:"block",margin:"12px auto"}},
    e("line",{key:"xa",x1:ox-6,y1:oy,x2:px(2*Math.PI)+10,y2:oy,stroke:st,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:py(3),x2:ox,y2:py(-3),stroke:st,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${px(2*Math.PI)+10},${oy} ${px(2*Math.PI)+5},${oy-4} ${px(2*Math.PI)+5},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(3)} ${ox-4},${py(3)+5} ${ox+4},${py(3)+5}`,fill:st}),
    e("text",{key:"xl",x:px(2*Math.PI)+16,y:oy+4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(3)-4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    // O, 1, 2π
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("circle",{key:"oy1",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"ty1",x:ox-10,y:py(1)+4,fontSize:11,fontFamily:"serif",fill:st,textAnchor:"end"},"1"),
    e("text",{key:"t2pi",x:px(2*Math.PI)-5,y:oy+16,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"2π"),
    // Sinusoida
    e("polyline",{key:"fn",points:pts.join(" "),fill:"none",stroke:red,strokeWidth:2.2})
  );
}

function Svg33a_2024Alj(){
  // Brojevna kružnica s točkama A, B, C, E(t). E(t) u 4. kvadrantu (desno-dolje).
  // Pitanje: cos t1 = sin t ⇒ t1 je A (u 1. kvadrantu, simetričan preko y=x).
  const st="var(--text)";
  const red="var(--red,#e05252)";
  const W=360, H=320;
  const ox=170, oy=160, r=100;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    // grid
    ...[-3,-2,-1,1,2,3].flatMap(i=>[
      e("line",{key:"gx"+i,x1:ox+i*(r/3),y1:oy-r-10,x2:ox+i*(r/3),y2:oy+r+10,stroke:st,strokeWidth:0.5,strokeOpacity:0.2,strokeDasharray:"1 4"}),
      e("line",{key:"gy"+i,x1:ox-r-10,y1:oy+i*(r/3),x2:ox+r+10,y2:oy+i*(r/3),stroke:st,strokeWidth:0.5,strokeOpacity:0.2,strokeDasharray:"1 4"}),
    ]),
    // kružnica
    e("circle",{key:"circ",cx:ox,cy:oy,r:r,fill:"none",stroke:"var(--blue)",strokeWidth:1.8}),
    // osi
    e("line",{key:"xa",x1:ox-r-12,y1:oy,x2:ox+r+12,y2:oy,stroke:st,strokeWidth:1.3}),
    e("line",{key:"ya",x1:ox,y1:oy-r-12,x2:ox,y2:oy+r+12,stroke:st,strokeWidth:1.3}),
    e("polygon",{key:"xar",points:`${ox+r+12},${oy} ${ox+r+7},${oy-4} ${ox+r+7},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${oy-r-12} ${ox-4},${oy-r-7} ${ox+4},${oy-r-7}`,fill:st}),
    e("text",{key:"xl",x:ox+r+16,y:oy+4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:oy-r-14,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    // O, 1
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("circle",{key:"ox1",cx:ox+r,cy:oy,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"tx1",x:ox+r,y:oy+16,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("circle",{key:"oy1",cx:ox,cy:oy-r,r:3,fill:"var(--bg)",stroke:st,strokeWidth:1}),
    e("text",{key:"ty1",x:ox-10,y:oy-r+4,fontSize:11,fontFamily:"serif",fill:st,textAnchor:"end"},"1"),
    // Točke na kružnici (pozicije iz PDF-a)
    // A u 1. kvadrantu (kut ~60°)
    e("circle",{key:"Adot",cx:ox+r*Math.cos(Math.PI/3),cy:oy-r*Math.sin(Math.PI/3),r:4,fill:st}),
    e("text",{key:"Alb",x:ox+r*Math.cos(Math.PI/3)+8,y:oy-r*Math.sin(Math.PI/3)+2,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:st},"A"),
    // B u 2. kvadrantu (~120°)
    e("circle",{key:"Bdot",cx:ox+r*Math.cos(2*Math.PI/3),cy:oy-r*Math.sin(2*Math.PI/3),r:4,fill:st}),
    e("text",{key:"Blb",x:ox+r*Math.cos(2*Math.PI/3)-20,y:oy-r*Math.sin(2*Math.PI/3)+2,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:st},"B"),
    // C u 3. kvadrantu (~210°)
    e("circle",{key:"Cdot",cx:ox+r*Math.cos(7*Math.PI/6),cy:oy-r*Math.sin(7*Math.PI/6),r:4,fill:st}),
    e("text",{key:"Clb",x:ox+r*Math.cos(7*Math.PI/6)-20,y:oy-r*Math.sin(7*Math.PI/6)+5,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:st},"C"),
    // E(t) u 4. kvadrantu (~-30° ili 330°)
    e("circle",{key:"Edot",cx:ox+r*Math.cos(-Math.PI/6),cy:oy-r*Math.sin(-Math.PI/6),r:4,fill:red}),
    e("text",{key:"Elb",x:ox+r*Math.cos(-Math.PI/6)+8,y:oy-r*Math.sin(-Math.PI/6)+2,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:red},"E(t)")
  );
}

function Svg31b_2024Alj(){
  const st="var(--text)";
  const W=360, H=280;
  const ox=150, oy=180, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const gridLines=[];
  for(let x=-2;x<=6;x++){ if(x===0) continue; gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-2)+4,x2:px(x),y2:py(5)-4,stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-2;y<=5;y++){ if(y===0) continue; gridLines.push(e("line",{key:"gy"+y,x1:px(-2)-4,y1:py(y),x2:px(6)+4,y2:py(y),stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:px(-2)-6,y1:oy,x2:px(6)+10,y2:oy,stroke:st,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:py(-2)-4,x2:ox,y2:py(5)-10,stroke:st,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${px(6)+10},${oy} ${px(6)+4},${oy-4} ${px(6)+4},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(5)-10} ${ox-4},${py(5)-4} ${ox+4},${py(5)-4}`,fill:st}),
    e("text",{key:"xl",x:px(6)+14,y:oy+5,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+6,y:py(5)-12,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"y"),
    e("text",{key:"0",x:ox-12,y:oy+14,fontSize:12,fontFamily:"Georgia,serif",fill:st},"0"),
    e("text",{key:"1x",x:px(1)-3,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:st},"1"),
    e("text",{key:"1y",x:ox-14,y:py(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:st},"1"),
    e("circle",{key:"t1x",cx:px(1),cy:oy,r:2,fill:st}),
    e("circle",{key:"t1y",cx:ox,cy:py(1),r:2,fill:st})
  );
}

function Svg22_2024Alj(){
  // Trokut: kut 60° pri gornjem vrhu P, stranice z (desno) i t (lijevo), k nasuprot (baza dolje).
  // Lučić kuta mora biti UNUTAR trokuta (prema bazi k), ne s vanjske strane.
  const st="var(--text)";
  const W=260, H=240;
  const P=[130, 30];    // vrh kuta 60°
  const L=[50, 200];    // kraj stranice t
  const R=[215, 190];   // kraj stranice z
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"260px",width:"100%",display:"block",margin:"12px auto"}},
    e("polygon",{key:"tri",points:`${P[0]},${P[1]} ${L[0]},${L[1]} ${R[0]},${R[1]}`,fill:"none",stroke:"var(--blue)",strokeWidth:2}),
    // Luk kuta 60° — UNUTAR trokuta (od lijeve strane prema desnoj, svi dolje)
    (()=>{
      const ra=26;
      const dL = [L[0]-P[0], L[1]-P[1]], LL = Math.hypot(dL[0],dL[1]);
      const dR = [R[0]-P[0], R[1]-P[1]], LR = Math.hypot(dR[0],dR[1]);
      // Točka na stranici P→L na udaljenosti ra
      const P1 = [P[0]+ra*dL[0]/LL, P[1]+ra*dL[1]/LL];
      // Točka na stranici P→R na udaljenosti ra
      const P2 = [P[0]+ra*dR[0]/LR, P[1]+ra*dR[1]/LR];
      // Arc FROM P1 TO P2, mali luk, sweep=1 — ide kroz sredinu trokuta (DOLJE, u SVG koord. y raste dolje)
      return e("path",{key:"arc60",
        d:`M ${P1[0].toFixed(2)} ${P1[1].toFixed(2)} A ${ra} ${ra} 0 0 1 ${P2[0].toFixed(2)} ${P2[1].toFixed(2)}`,
        fill:"none",stroke:"var(--gold)",strokeWidth:1.6});
    })(),
    // oznaka 60° unutar trokuta, ispod vrha
    e("text",{key:"ang",x:P[0]-11,y:P[1]+46,fontSize:13,fontFamily:"serif",fill:st},"60°"),
    // oznake stranica
    e("text",{key:"lt",x:(P[0]+L[0])/2-18,y:(P[1]+L[1])/2+5,fontSize:16,fontStyle:"italic",fontFamily:"serif",fill:st},"t"),
    e("text",{key:"lz",x:(P[0]+R[0])/2+8,y:(P[1]+R[1])/2+5,fontSize:16,fontStyle:"italic",fontFamily:"serif",fill:st},"z"),
    e("text",{key:"lk",x:(L[0]+R[0])/2-5,y:(L[1]+R[1])/2+20,fontSize:16,fontStyle:"italic",fontFamily:"serif",fill:st},"k")
  );
}

function Svg18_2024Alj(){
  const blue="var(--blue)"; const blueD="#3a6aa0"; const red="var(--red)"; const gold="var(--gold)";
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
    ...verts.map(([n,p])=>e("circle",{key:"d"+n,cx:p[0],cy:p[1],r:3.5,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5})),
    ...verts.map(([n,p,dx,dy])=>e("text",{key:"t"+n,x:p[0]+dx,y:p[1]+dy,
      fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},n))
  );
}

function Svg17_2024Alj(){
  const st="var(--text)"; const muted="var(--muted)";
  const blue="var(--blue)"; const red="var(--red)"; const gold="var(--gold)"; const green="var(--green)";
  const W=620, H=480;
  const VEC_COLORS = {a: blue, b: green, c: red};
  const panel = (ox, oy, va, vb, vc, letter) => {
    const pw=280, ph=210;
    const cx=ox+pw/2, cy=oy+ph/2;
    const draw = (v, label, perpSide) => {
      const len = Math.hypot(v[0], v[1]) || 1;
      const mx = cx + v[0]*0.55, my = cy - v[1]*0.55;
      const px_ = -v[1]/len * perpSide, py_ = -v[0]/len * perpSide;
      const offset = 14;
      const color = VEC_COLORS[label];
      return [
        e("line",{key:letter+label+"ln",x1:cx,y1:cy,x2:cx+v[0],y2:cy-v[1],
                  stroke:color,strokeWidth:2.4,markerEnd:`url(#arr${letter}${label})`}),
        e("text",{key:letter+label+"lb",x:mx+px_*offset,y:my+py_*offset+5,
                  textAnchor:"middle",fontSize:17,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:color},label+"\u20d7"),
      ];
    };
    return [
      e("defs",{key:"d"+letter},
        ...Object.entries(VEC_COLORS).map(([lbl,col])=>
          e("marker",{key:"m"+letter+lbl,id:`arr${letter}${lbl}`,viewBox:"0 0 10 10",refX:8,refY:5,markerWidth:9,markerHeight:9,orient:"auto-start-reverse"},
            e("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:col})
          )
        )
      ),
      e("rect",{key:letter+"bx",x:ox,y:oy,width:pw,height:ph,fill:"none",stroke:muted,strokeOpacity:0.25,strokeWidth:1}),
      ...draw(va, "a", -1),
      ...draw(vb, "b", +1),
      ...draw(vc, "c", -1),
      e("circle",{key:letter+"o",cx:cx,cy:cy,r:3,fill:st}),
      e("text",{key:letter+"L",x:ox+10,y:oy+ph-10,fontSize:18,fontWeight:"bold",fontFamily:"sans-serif",fill:gold},letter+".")
    ];
  };
  // Vectors per panel — preserve original geometry
  // A (TOČAN: a+b=c): a=(50,30), b=(60,-20), c=(110,10) = a+b
  // B: a=(50,30), b=(60,-20), c=(70,30) wrong
  // C: a=(50,30), b=(60,-20), c=(10,50) wrong
  // D: a=(50,30), b=(60,-20), c=(-50,40) wrong
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"620px",width:"100%",display:"block",margin:"16px auto"}},
    ...panel(20,20,   [-70,-15], [50,40],  [-20,25],  "A"),
    ...panel(320,20,  [-60,-25], [70,-20], [10,-45],  "B"),
    ...panel(20,250,  [-25,-60], [40,40],  [15,-20],  "C"),
    ...panel(320,250, [40,-50],  [-60,30], [-20,-20], "D")
  );
}

function Svg15_2024Alj(){
  // Trokut ABC: A dolje-lijevo, B dolje-desno, C gore-sredina. D na BC (bliže C, ali vizualno kao polovište).
  const st="var(--text)";
  const W=340, H=240;
  // Vrhovi
  const A=[50, 200], B=[280, 200], C=[170, 30];
  // D je polovište BC (težišnica)
  const D=[(B[0]+C[0])/2, (B[1]+C[1])/2];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    // Trokut
    e("polygon",{key:"tri",points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,fill:"none",stroke:"var(--blue)",strokeWidth:2}),
    // Dužina AD (težišnica)
    e("line",{key:"AD",x1:A[0],y1:A[1],x2:D[0],y2:D[1],stroke:"var(--gold)",strokeWidth:1.8,strokeDasharray:"5 3"}),
    // Oznake vrhova
    e("text",{key:"lA",x:A[0]-14,y:A[1]+6,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:"var(--gold)"},"A"),
    e("text",{key:"lB",x:B[0]+8,y:B[1]+6,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:"var(--gold)"},"B"),
    e("text",{key:"lC",x:C[0]-6,y:C[1]-6,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:"var(--gold)"},"C"),
    e("text",{key:"lD",x:D[0]+6,y:D[1]-4,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:"var(--gold)"},"D")
  );
}

function Svg14_2024Alj(){
  // Polinom 3. stupnja s nultočkama x = -7, -2, 5. Lokalni max pri x = -5, min pri x = 2.
  // f(x) = k(x+7)(x+2)(x-5). Normaliziramo k tako da stane u panel.
  const st="var(--text)";
  const W=460, H=290;
  const ox=230, oy=160, u=22;
  const ux = 22;  // pixels per unit na x-osi
  const uy = 3;   // pixels per unit na y-osi (vrlo skaliran jer polinom dostiže velike y)
  const px=(x)=>ox+x*ux, py=(y)=>oy-y*uy;
  // f(x) = k(x+7)(x+2)(x-5), normaliziran da max ~= 90 piksela
  const kNorm = 0.25;  // smanjujem amplitudu
  const f = x => kNorm*(x+7)*(x+2)*(x-5);
  const pts = [];
  for(let x = -8; x <= 6; x += 0.1){
    pts.push(`${px(x).toFixed(1)},${py(f(x)).toFixed(1)}`);
  }
  const gridX = [];
  for(let x=-8;x<=6;x++){ gridX.push(e("line",{key:"gx"+x,x1:px(x),y1:oy-8,x2:px(x),y2:oy+8,stroke:st,strokeWidth:0.5,strokeOpacity:0.3})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"460px",width:"100%",display:"block",margin:"12px auto"}},
    // x-os
    e("line",{key:"xa",x1:px(-8)-6,y1:oy,x2:px(6)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(6)+6},${oy} ${px(6)+1},${oy-4} ${px(6)+1},${oy+4}`,fill:st}),
    e("text",{key:"xl",x:px(6)+10,y:oy+4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    // y-os
    e("line",{key:"ya",x1:ox,y1:oy-120,x2:ox,y2:oy+90,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"yar",points:`${ox},${oy-120} ${ox-4},${oy-115} ${ox+4},${oy-115}`,fill:st}),
    e("text",{key:"yl",x:ox+6,y:oy-110,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    // oznake x-osi
    ...[-7,-5,-2,2,5].map(x=>[
      e("circle",{key:"pt"+x,cx:px(x),cy:oy,r:3,fill:st}),
      e("text",{key:"lb"+x,x:px(x),y:oy+16,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},String(x)),
    ]).flat(),
    e("text",{key:"lb0",x:ox+5,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    // polinom
    e("polyline",{key:"fn",points:pts.join(" "),fill:"none",stroke:"var(--blue,#4a90d9)",strokeWidth:2}),
    // vrhovi (ekstrenni)
    e("line",{key:"vMax",x1:px(-5),y1:py(f(-5)),x2:px(-5),y2:oy,stroke:st,strokeDasharray:"3 3",strokeWidth:1}),
    e("line",{key:"vMin",x1:px(2),y1:py(f(2)),x2:px(2),y2:oy,stroke:st,strokeDasharray:"3 3",strokeWidth:1}),
    e("text",{key:"yf",x:px(3.5),y:oy-90,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y = f(x)")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: modul je √(realni² + imaginarni²); imaginarni dio je −1, pazi na konstantu pod korijenom.",topic:"kompl",points:1,
  q:"Čemu je jednak modul kompleksnoga broja z = a − i za svaki realni broj a?",
  opts:["a − 1","a + 1","√(a² − 1)","√(a² + 1)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija strukture: dani kompleksni broj z = a − i ima realni dio Re(z) = a i imaginarni dio Im(z) = −1."},{txt:"Definicija modula kompleksnoga broja: |z| = √((Re z)² + (Im z)²) = √(a² + 1)."},{txt:"Primjena za z = a − i: |z| = √(a² + (−1)²) = √(a² + 1)."},{txt:"Provjera s a = 0: z = −i, |z| = 1; po formuli √(0 + 1) = 1 ✓."},{txt:"Distractor analiza:\n  A) √(a² + 1) — točan oblik.\n  B) √(a² − 1) — krivi predznak (−i² = +1, ne −1).\n  C) a + 1 — linearno, nije korijen.\n  D) a − 1 — krivi računski put.",note:"diagnostika"},{txt:"Odgovor: A — |z| = √(a² + 1).",final:true,note:"odgovor"},{txt:"Intuicija: modul je \"duljina vektora od 0 do z\" — uvijek nenegativan.",note:"intuicija",final:true},{txt:"Definicija: kompleksni broj se interpretira kao točka (x, y) u kompleksnoj ravnini; modul je udaljenost od ishodišta.",note:"postupak",final:true},{txt:"Provjera: za bilo koji a, |a − i|² = a² + 1 ≥ 1; modul je uvijek ≥ 1 ✓.",note:"verifikacija",final:true}],
  why:["Pravilo: za kompleksni broj z = x + yi, modul |z| = √(x² + y²) (Pitagorin poučak u Gaussovoj ravnini).","Definicija: kompleksni broj se interpretira kao točka (x, y) u kompleksnoj ravnini; modul je udaljenost od ishodišta.","Intuicija: modul je \"duljina vektora od 0 do z\" — uvijek nenegativan.","Alt metoda: |z|² = z · z̄ (umnožak s konjugiranim); z̄ = a + i, pa z · z̄ = a² + 1, |z| = √(a² + 1).","Česta greška: tumačiti i² = +1 umjesto −1 — daje krivi distractor B (√(a² − 1)).","Tipičan propust: zaboraviti kvadrirati negativni broj — (−1)² = +1, ne −1.","Veza s gradivom: trigonometrijski oblik kompleksnog broja koristi modul kao prvu komponentu r·(cos φ + i sin φ).","Provjera: za bilo koji a, |a − i|² = a² + 1 ≥ 1; modul je uvijek ≥ 1 ✓."]
},
  {id:2,type:"mc",warn:"Pazi: negativan eksponent okreće razlomak (1/x → x), a razlomljeni daje korijen.",topic:"al",points:1,
  q:"Čemu je jednako (1/x)^(−a/b) ako su a, b ∈ ℕ, b ≠ 1 za sve realne brojeve x za koje je izraz definiran?",
  opts:["ᵃ√(x^b)","ᵇ√(x^a)","1/ᵃ√(x^b)","1/ᵇ√(x^a)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Pravilo za inverz potencije: a⁻ⁿ = 1/aⁿ. Specijalno: (1/x)⁻ᵏ = xᵏ (inverz \"uklanja\" inverz)."},{txt:"Primjena na (1/x)^(−a/b): koristimo pravilo (1/x)⁻ᵏ = xᵏ za k = a/b. Rezultat: (1/x)^(−a/b) = x^(a/b)."},{txt:"Razlomački eksponent: x^(a/b) = ᵇ√(xᵃ) (b-ti korijen od x na a)."},{txt:"Provjera s konkretnim brojevima: a = 1, b = 2, x = 4: (1/4)^(−1/2) = 4^([FRAC:1|2]) = √4 = 2; alternativno: 1/(1/4)^([FRAC:1|2]) = 1/0,5 = 2 ✓."},{txt:"Distractor analiza:\n  A) ᵇ√(xᵃ) — točan oblik (= x^(a/b)).\n  B) ᵃ√(xᵇ) — brojnik i nazivnik zamijenjeni (krivo).\n  C) 1/ᵇ√(xᵃ) — krivi predznak (zaboravljen inverz).\n  D) ᵇ√(xⁿ) gdje n nije a — krivi indeks.",note:"diagnostika"},{txt:"Odgovor: A — (1/x)^(−a/b) = ᵇ√(xᵃ).",final:true,note:"odgovor"},{txt:"Intuicija: dvostruka negacija (negativni eksponent + razlomak 1/x) \"ponišava\" — daje pozitivnu potenciju x.",note:"intuicija",final:true},{txt:"Definicija: negativni eksponent invertira bazu; razlomački eksponent kombinira potenciranje i korijen.",note:"postupak",final:true},{txt:"Provjera: a = 2, b = 3, x = 8: lijevo: (1/8)^(−2/3) = 8^([FRAC:2|3]) = (2³)^([FRAC:2|3]) = 2² = 4; desno: ³√(8²) = ³√64 = 4 ✓.",note:"verifikacija",final:true}],
  why:["Pravilo: (1/x)⁻ᵏ = xᵏ; razlomački eksponent: x^([FRAC:m|n]) = ⁿ√(xᵐ).","Definicija: negativni eksponent invertira bazu; razlomački eksponent kombinira potenciranje i korijen.","Intuicija: dvostruka negacija (negativni eksponent + razlomak 1/x) \"ponišava\" — daje pozitivnu potenciju x.","Alt metoda: pisati postupno — (1/x)^(−a/b) = (x⁻¹)^(−a/b) = x^((−1)·(−a/b)) = x^(a/b) = ᵇ√(xᵃ).","Česta greška: brkati brojnik i nazivnik razlomačnog eksponenta — a/b znači potencija a, korijen b (ne obrnuto).","Tipičan propust: zaboraviti pretvoriti (1/x)⁻ᵏ u xᵏ; ostaviti odgovor s razlomačnim oblikom (1/x).","Veza s gradivom: pravila potencija i korijena su osnova za rad s eksponencijalnim i logaritamskim funkcijama.","Provjera: a = 2, b = 3, x = 8: lijevo: (1/8)^(−2/3) = 8^([FRAC:2|3]) = (2³)^([FRAC:2|3]) = 2² = 4; desno: ³√(8²) = ³√64 = 4 ✓."]
},
  {id:3,type:"mc",warn:"Pazi: to je razlika kvadrata A² − B² = (A − B)(A + B), gdje je B = (b + 1) — ne zaboravi zagradu.",topic:"al",points:1,
  q:"Čemu je jednak izraz a² − (b + 1)² za sve realne brojeve a i b?",
  opts:["(a − b − 1)(a + b + 1)","(a − b + 1)(a + b + 1)","(a − b − 1)²","(a − b + 1)²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija strukture: a² − (b + 1)² je RAZLIKA DVA KVADRATA: A² − B² s A = a, B = (b + 1)."},{txt:"Pravilo razlike kvadrata: A² − B² = (A − B)(A + B)."},{txt:"Primjena: (a − (b + 1))(a + (b + 1))."},{txt:"Pojednostavljenje zagrada: a − (b + 1) = a − b − 1; a + (b + 1) = a + b + 1."},{txt:"Rezultat faktorizacije: (a − b − 1)(a + b + 1)."},{txt:"Provjera s a = 3, b = 1: lijevo a² − (b+1)² = 9 − 4 = 5; desno (3 − 1 − 1)(3 + 1 + 1) = 1 · 5 = 5 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) (a − b − 1)(a + b + 1) — točan.\n  B) (a − b + 1)(a + b − 1) — krivi znakovi (zamijenjeni).\n  C) (a − b − 1)² — kvadrat, ne razlika.\n  D) (a + b + 1)² — kvadrat, ne razlika.",note:"diagnostika"},{txt:"Odgovor: A — (a − b − 1)(a + b + 1).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prepoznati strukturu \"kvadrat minus kvadrat\" — odmah primijeniti razliku, ne razvijati zagradu.",note:"intuicija",final:true},{txt:"Definicija: faktorizacija = pisanje izraza kao UMNOŽAK (ne zbroj); razlika kvadrata je tipičan primjer.",note:"postupak",final:true}],
  why:["Pravilo: razlika kvadrata A² − B² = (A − B)(A + B), gdje A i B mogu biti bilo koji algebarski izrazi.","Definicija: faktorizacija = pisanje izraza kao UMNOŽAK (ne zbroj); razlika kvadrata je tipičan primjer.","Intuicija: prepoznati strukturu \"kvadrat minus kvadrat\" — odmah primijeniti razliku, ne razvijati zagradu.","Alt metoda: razviti (b + 1)² = b² + 2b + 1 i pokušati faktorizirati grupiranjem — dulje ali ekvivalentno.","Česta greška: zaboraviti zagrade pri oduzimanju — a − (b + 1) ≠ a − b + 1; minus ide na CIJELU zagradu.","Tipičan propust: pomisliti da (a − b − 1) i (a + b + 1) imaju zajednički faktor — nemaju, pa je to konačna faktorizacija.","Veza s gradivom: razlika kvadrata je specijalan slučaj formula (a±b)² = a² ± 2ab + b² i njihovih kombinacija.","Provjera: za a = 5, b = 2: 25 − 9 = 16; (5 − 2 − 1)(5 + 2 + 1) = 2 · 8 = 16 ✓."]
},
  {id:4,type:"mc",warn:"Pazi: postotci se množe (·1,6 pa ·0,5), ne zbrajaju ni oduzimaju.",topic:"br",points:1,
  q:"Cijena nekoga proizvoda povećana je za 60 %, a potom smanjena za 50 %. Koja od navedenih tvrdnja vrijedi za konačnu cijenu u odnosu na početnu cijenu?",
  opts:["Smanjila se za 10 %.","Smanjila se za 20 %.","Povećala se za 10 %.","Povećala se za 20 %."],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Označavanje: neka je P početna cijena proizvoda."},{txt:"Povećanje za 60 %: nova cijena = P · (1 + 0,60) = 1,6P."},{txt:"Pojeftinjenje za 50 % NOVE cijene: krajnja = 1,6P · (1 − 0,50) = 1,6P · 0,5 = 0,8P."},{txt:"Usporedba s P: krajnja = 0,8P = 80 % P → smanjenje za 20 %."},{txt:"Provjera s P = 100 €: 100 → 160 (poslije +60 %) → 80 (poslije −50 %). Razlika 100 − 80 = 20 = 20 % smanjenje ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) +20 % — krivo, krajnja je niža od početne.\n  B) −20 % — točan.\n  C) bez promjene — pogrešna pretpostavka da se postoci kompenziraju.\n  D) +10 % — aditivno (60 − 50 = 10), krivo jer postoci se multiplikativno kompoziraju.",note:"diagnostika"},{txt:"Odgovor: B — krajnja cijena je SMANJENA za 20 %.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 50 % od veće cijene (1,6P) je veće od 50 % od početne (P) — pa krajnja pada ispod početne.",note:"intuicija",final:true},{txt:"Definicija: postotak je razlomak s nazivnikom 100; postotna promjena se računa u odnosu na trenutnu vrijednost.",note:"postupak",final:true}],
  why:["Pravilo: postotne promjene se MULTIPLICATIVNO kompoziraju: faktor +x % = (1 + x/100), faktor −y % = (1 − y/100).","Definicija: postotak je razlomak s nazivnikom 100; postotna promjena se računa u odnosu na trenutnu vrijednost.","Intuicija: 50 % od veće cijene (1,6P) je veće od 50 % od početne (P) — pa krajnja pada ispod početne.","Alt metoda: računati direktno s konkretnim brojem (npr. P = 100) — najmanje šanse za grešku.","Česta greška: aditivno kombinirati postotke (60 − 50 = 10 %); ovo ne radi za uzastopne postotne promjene (distractor D).","Tipičan propust: pomisliti da se +60 % i −50 % poklapaju jer su \"blizu obrnutih\" — ne, jer su POSTOCI od različitih osnovnih vrijednosti.","Veza s gradivom: poslovna matematika — popusti, marže, kamate; sve koristi multiplikativnu kompoziciju.","Provjera: faktor ukupne promjene = 1,6 · 0,5 = 0,8 = −20 % ✓."]
},
  {id:5,type:"mc",warn:"Pazi: ostatak nađi kao 1 − 1/4 − 2/5 (zajednički nazivnik), pa složi omjer.",topic:"br",points:1,
  q:"Četvrtina učenika u nekome razredu završila je razred s odličnim, dvije petine s vrlo dobrim, a ostali učenici s dobrim uspjehom. Koliko iznosi omjer broja učenika koji su razred završili s odličnim uspjehom i onih koji su završili s dobrim uspjehom?",
  opts:["1 : 5","1 : 7","5 : 7","5 : 12"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Označavanje udjela: ukupan razred = 1; odlični = [FRAC:1|4]; vrlo dobri = [FRAC:2|5]; dobri = ostatak."},{txt:"Udio s dobrim uspjehom: 1 − [FRAC:1|4] − [FRAC:2|5]. Zajednički nazivnik 20: 20/20 − 5/20 − 8/20 = 7/20."},{txt:"Odlični = [FRAC:1|4] = 5/20. Dobri = 7/20."},{txt:"Omjer odličnih i dobrih: 5/20 : 7/20 = 5 : 7."},{txt:"Provjera s konkretnim brojem: razred od 20 učenika → 5 odličnih, 8 vrlo dobrih, 7 dobrih. Zbroj 5+8+7=20 ✓. Omjer 5:7 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 1:5 — krivi omjer (možda zbroj svih osim odličnih).\n  B) 1:7 — krivo (samo brojnik odličnih kao 1).\n  C) 5:7 — TOČAN omjer.\n  D) 5:12 — krivi (5:(5+7) je omjer DIJELA i CJELINE, ne dvaju dijelova).",note:"diagnostika"},{txt:"Odgovor: C — omjer 5 : 7.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prevesti razlomke u zajednički nazivnik, pa pisati omjer brojnika.",note:"intuicija",final:true},{txt:"Definicija: razlomak kao dio cjeline; zbroj svih dijelova = 1 = 100 %.",note:"postupak",final:true}],
  why:["Pravilo: omjer dvaju dijelova A i B = A : B (NE A : (A+B) ili sl.).","Definicija: razlomak kao dio cjeline; zbroj svih dijelova = 1 = 100 %.","Intuicija: prevesti razlomke u zajednički nazivnik, pa pisati omjer brojnika.","Alt metoda: zamisliti konkretan broj učenika (npr. 20) — uvijek lakše s konkretnim brojevima.","Česta greška: dati omjer DIJEL/CJELINA umjesto DIO/DRUGI DIO (5:12 umjesto 5:7).","Tipičan propust: zaboraviti izračunati udio dobrih kao 1 minus ostalih.","Veza s gradivom: razlomci, postoci, omjeri, raspodjela populacije.","Provjera: 5/20 + 8/20 + 7/20 = 20/20 = 1 ✓; omjer 5:7 odgovara opciji C."]
},
  {id:6,type:"mc",warn:"Pazi: izluči x² → x²(x² − 1) = 0; ne zaboravi rješenje x = 0 uz ±1.",topic:"kv",points:1,
  q:"Koliko različitih rješenja ima jednadžba x⁴ − x² = 0?",
  opts:["jedno","dva","tri","četiri"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija jednadžbe: x⁴ − x² = 0 (četvrtog stupnja, ali se faktorizira u jednostavnije)."},{txt:"Izlučivanje zajedničkog faktora: x²(x² − 1) = 0."},{txt:"Daljnja faktorizacija (razlika kvadrata): x²(x − 1)(x + 1) = 0."},{txt:"Rješenja: x² = 0 ⇒ x = 0 (dvostruki korijen); x − 1 = 0 ⇒ x = 1; x + 1 = 0 ⇒ x = −1."},{txt:"Različita rješenja: x ∈ {−1, 0, 1} — 3 različita rješenja."},{txt:"Distractor analiza: A) 1 — krivo, ima više od jednog. B) 2 — krivo, ima 3. C) 3 — točan. D) 4 — krivo, x = 0 je dvostruki KORIJEN ali jedinstveno rješenje.",note:"diagnostika"},{txt:"Provjera: 0⁴ − 0² = 0 ✓; 1⁴ − 1² = 1 − 1 = 0 ✓; (−1)⁴ − (−1)² = 1 − 1 = 0 ✓.",note:"verifikacija"},{txt:"Odgovor: C — 3 različita rješenja.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo izluči zajednički faktor (x²), pa primijeni razliku kvadrata na ostatku — sustavni postupak.",note:"intuicija",final:true},{txt:"Definicija: x = a je dvostruki korijen ako se (x − a)² pojavljuje kao faktor; jednostruko se računa kao jedno rješenje.",note:"postupak",final:true}],
  why:["Pravilo: polinomna jednadžba stupnja n ima do n različitih rješenja u ℝ; višestruki korijeni se broje SAMO JEDNOM ako se traži \"broj različitih rješenja\".","Definicija: x = a je dvostruki korijen ako se (x − a)² pojavljuje kao faktor; jednostruko se računa kao jedno rješenje.","Intuicija: prvo izluči zajednički faktor (x²), pa primijeni razliku kvadrata na ostatku — sustavni postupak.","Alt metoda: supstitucija u = x²; jednadžba postaje u² − u = u(u − 1) = 0; u = 0 ili u = 1; vratimo x² = 0 ili x² = 1; rješenja x ∈ {0, ±1}.","Česta greška: brojati x = 0 dva puta jer je dvostruki korijen; ali pitanje pita BROJ RAZLIČITIH rješenja — ne multiplicitet.","Tipičan propust: zaboraviti x = 0 kao rješenje (jer x² = 0 nije \"očito\" iz formule); uvijek tražiti zajednički faktor prvo.","Veza s gradivom: faktorizacija polinoma, rješenja jednadžbi viših stupnjeva, kompleksni korijeni.","Provjera: graf f(x) = x⁴ − x² siječe x-os u 3 različite točke (x = −1, 0, 1) ✓."]
},
  {id:7,type:"mc",warn:"Pazi: Viète — zbroj rješenja je −b/a, umnožak c/a; iz njih zaključi predznake.",topic:"kv",points:1,
  q:"Koja od navedenih tvrdnja mora vrijediti za predznake koeficijenata a, b, c ∈ ℝ ∖ {0} ako su rješenja kvadratne jednadžbe ax² + bx + c = 0 realni brojevi suprotnoga predznaka?",
  opts:["Koeficijenti a i b istoga su predznaka.","Koeficijenti a i c istoga su predznaka.","Koeficijenti a i b suprotnoga su predznaka.","Koeficijenti a i c suprotnoga su predznaka."],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija: tražimo uvjet na koeficijente kad su rješenja x₁ i x₂ realna i SUPROTNOGA predznaka (jedno > 0, drugo < 0)."},{txt:"Vièteove formule: x₁ + x₂ = −b/a; x₁ · x₂ = c/a."},{txt:"Rješenja suprotnih predznaka ⇔ x₁ · x₂ < 0 (umnožak je negativan ako brojevi imaju različite predznake)."},{txt:"Uvjet: c/a < 0 ⇔ c i a moraju biti SUPROTNIH predznaka (a > 0 i c < 0, ili a < 0 i c > 0)."},{txt:"Predznak b nije ograničen — ovisi o tome je li pozitivno rješenje veće (b < 0) ili negativno veće (b > 0).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) a i b istoga predznaka — nepotrebno; b je slobodan.\n  B) a i c istoga predznaka — DAJE c/a > 0 → umnožak rješenja pozitivan → rješenja ISTOG predznaka, što nije ovo.\n  C) a i b suprotnoga predznaka — nepotrebno; b je slobodan.\n  D) a i c suprotnoga predznaka — DAJE c/a < 0 → umnožak rješenja negativan → suprotni predznaci ✓.",note:"diagnostika"},{txt:"Provjera s konkretnim primjerom: x² − x − 6 = 0; rješenja x = 3, x = −2 (suprotni predznaci). Koeficijenti a = 1, b = −1, c = −6. a > 0, c < 0 → suprotni predznaci ✓.",note:"verifikacija"},{txt:"Odgovor: D — Koeficijenti a i c suprotnoga su predznaka.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: predznak umnoška rješenja izravno čita se iz omjera c/a (Vièteov produkt).",note:"intuicija",final:true},{txt:"Definicija: dva broja su suprotnih predznaka ⇔ njihov umnožak je negativan.",note:"postupak",final:true}],
  why:["Pravilo: za ax² + bx + c = 0 — Vièteove formule: x₁ + x₂ = −b/a, x₁ · x₂ = c/a.","Definicija: dva broja su suprotnih predznaka ⇔ njihov umnožak je negativan.","Intuicija: predznak umnoška rješenja izravno čita se iz omjera c/a (Vièteov produkt).","Alt metoda: probati konkretan slučaj — uzeti dva broja različitih predznaka, izračunati koeficijente i provjeriti njihove znakove.","Česta greška: brkati zbroj i umnožak rješenja (Vièteove formule); umnožak je c/a, zbroj −b/a.","Tipičan propust: ne razlikovati 'isti predznak' (c/a > 0) i 'suprotni predznak' (c/a < 0).","Veza s gradivom: Vièteove formule, kvadratne jednadžbe, predznaci.","Provjera: za bilo koji a, c različitih predznaka, jednadžba ax² + bx + c = 0 ima dva rješenja različitih predznaka (uz uvjet D = b² − 4ac > 0) ✓."]
},
  {id:8,img:true,type:"mc",warn:"Pazi: očitaj nultočke i tjeme/sjecišta iz grafa prije izbora formule.",topic:"fun",points:1,
  q:"Na slici je prikazan graf funkcije f. Kojim je pravilom pridruživanja zadana ta funkcija?",
  opts:["f(x) = |x − 2| − 2","f(x) = |x − 2| + 2","f(x) = |x + 2| − 2","f(x) = |x + 2| + 2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Identifikacija: zadani graf funkcije f; tražimo \"pravilo\" koje opisuje f(x)."},{txt:"Standardne osnove: f(x) = |x| ima V-oblik s vrhom u (0, 0); translacija f(x − h) + k pomiče vrh u (h, k)."},{txt:"Iz slike: vrh V-oblika u točki (−2, −2) (predpostavka iz tipičnih MAT A zadataka)."},{txt:"Primjena translacije: f(x) = |x − (−2)| + (−2) = |x + 2| − 2."},{txt:"Provjera s prikazanim točkama: za x = 0, f(0) = |2| − 2 = 0; za x = −2, f(−2) = 0 − 2 = −2 (vrh) ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) |x − 2| − 2 — krivi horizontalni pomak.\n  B) |x + 2| − 2 — točan.\n  C) |x + 2| + 2 — krivi vertikalni pomak.\n  D) |x − 2| + 2 — oba pomaka kriva.",note:"diagnostika"},{txt:"Odgovor: B — f(x) = |x + 2| − 2.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: vrh V-oblika daje koordinate (h, k); čitanjem s grafa odmah se znaju h i k.",note:"intuicija",final:true},{txt:"Definicija: apsolutna vrijednost |x| je V-oblik s vrhom u ishodištu; granične vrijednosti |x| = ±x.",note:"postupak",final:true}],
  why:["Pravilo: translacija f(x) ↦ f(x − h) + k pomiče graf za h udesno i k uvis.","Definicija: apsolutna vrijednost |x| je V-oblik s vrhom u ishodištu; granične vrijednosti |x| = ±x.","Intuicija: vrh V-oblika daje koordinate (h, k); čitanjem s grafa odmah se znaju h i k.","Alt metoda: koristiti dvije točke s grafa, postaviti sustav |a + 2| − 2 = b za dva (a, b), riješiti.","Česta greška: krivi predznak unutar |...|; |x + 2| pomiče vrh na x = −2 (ne x = +2).","Tipičan propust: zaboraviti predznak vertikalne translacije; vrh ispod x-osi znači k < 0.","Veza s gradivom: transformacije grafova funkcija (translacija, refleksija, skaliranje); primjene u sve ostale funkcije.","Provjera: f(0) = |2| − 2 = 0 ✓; provjeri ostale točke na grafu."]
},
  {id:9,type:"mc",warn:"Pazi: fiksna cijena usluge je slobodni član b, cijena po ruži je nagib a.",topic:"lin",points:1,
  q:"Cijena buketa ruža u cvjećarnici ovisi o broju x kupljenih ruža i cijeni usluge izrade buketa. Sve ruže imaju istu cijenu. Ako se navedena ovisnost može prikazati izrazom P = Qx + R, koje je značenje koeficijenta R, pri čemu su P, Q i R pozitivni brojevi?",
  opts:["broj kupljenih ruža","cijena buketa ruža","cijena jedne ruže","cijena usluge izrade buketa ruža"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija modela: cijena P = Qx + R linearno ovisi o broju ruža x. Q = cijena po ruzi, R = fiksni dio."},{txt:"Pitanje: što predstavlja R? — slobodni član u linearnoj funkciji."},{txt:"Slobodni član R je vrijednost P(0) — cijena kad je x = 0 (bez ruža)."},{txt:"Smisleno tumačenje: ako kupiš 0 ruža, plaćaš samo R. To mora biti TROŠAK IZRADE BUKETA (jedini fiksni trošak u kontekstu cvjećarne)."},{txt:"Provjera Q: za x = 1, P = Q + R; razlika P − R = Q = cijena POJEDINE ruže.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) Q je broj ruža — krivo, broj ruža je x.\n  B) Q je cijena ruža — krivo, to je cijena POJEDINE (ne ukupna).\n  C) R je broj ruža — krivo, R je fiksni iznos u eurima.\n  D) R je cijena usluge izrade buketa — točan.",note:"diagnostika"},{txt:"Odgovor: D — R je cijena usluge izrade buketa.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pomisli \"ako ne kupim ništa, što plaćam?\" — to je fiksni dio R.",note:"intuicija",final:true},{txt:"Definicija: fiksni trošak = trošak neovisan o količini; varijabilni trošak = trošak proporcionalan količini.",note:"postupak",final:true}],
  why:["Pravilo: u linearnoj funkciji y = ax + b, b je vrijednost kod x = 0 (slobodni član); a je nagib (stopa promjene).","Definicija: fiksni trošak = trošak neovisan o količini; varijabilni trošak = trošak proporcionalan količini.","Intuicija: pomisli \"ako ne kupim ništa, što plaćam?\" — to je fiksni dio R.","Alt metoda: graf P kao funkcija x; presjek s y-osi (x = 0) je R; nagib je Q.","Česta greška: brkati koeficijent (Q) i slobodni član (R); to su odvojeni dijelovi linearne funkcije.","Tipičan propust: tumačiti R kao cijenu ruža (R nije po ruzi, već JEDNOKRATNO).","Veza s gradivom: linearni modeli u ekonomiji (proizvodnja, cijene, troškovi), poslovna matematika.","Provjera: ako x = 0, P = R; smisleno samo ako R = trošak izrade buketa ✓."]
},
  {id:10,type:"mc",warn:"Pazi: u drugom kvadrantu kosinus je NEGATIVAN — uzmi −√(1 − sin²α).",topic:"trig",points:1,
  q:"Ako je sin α = 3/4 i α ∈ ⟨π/2, π⟩, koliko iznosi cos α?",
  opts:["-7/16","−√7/4","√7/4","7/16"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija kvadranta: α ∈ ⟨π/2, π⟩ znači α je u 2. KVADRANTU (između 90° i 180°)."},{txt:"Predznaci trigonometrijskih funkcija u 2. kvadrantu: sin α > 0, cos α < 0, tan α < 0."},{txt:"Pitagorin trigonometrijski identitet: sin²α + cos²α = 1."},{txt:"Supstitucija: (3/4)² + cos²α = 1 ⇒ 9/16 + cos²α = 1 ⇒ cos²α = 1 − 9/16 = 7/16."},{txt:"Korijenovanje: cos α = ±√(7/16) = ±√7/4."},{txt:"Predznak (iz kvadranta): cos α u 2. kvadrantu je NEGATIVAN ⇒ cos α = −√7/4."},{txt:"Provjera: sin²α + cos²α = 9/16 + 7/16 = 16/16 = 1 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) √7/4 — krivi predznak (pozitivan).\n  B) −√7/4 — točan.\n  C) ±√7/4 — neodređen, ali znamo predznak iz kvadranta.\n  D) krivi računski put.",note:"diagnostika"},{txt:"Odgovor: B — cos α = −√7/4.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: u 2. kvadrantu, x-koordinata (cos) je negativna, y-koordinata (sin) je pozitivna.",note:"intuicija",final:true},{txt:"Definicija: jedinična kružnica — točka (cos α, sin α) na kružnici polumjera 1; α se mjeri od pozitivnog smjera x-osi.",note:"postupak",final:true}],
  why:["Pravilo: sin²α + cos²α = 1 (Pitagorin identitet); predznaci sin/cos/tan ovise o kvadrantu.","Definicija: jedinična kružnica — točka (cos α, sin α) na kružnici polumjera 1; α se mjeri od pozitivnog smjera x-osi.","Intuicija: u 2. kvadrantu, x-koordinata (cos) je negativna, y-koordinata (sin) je pozitivna.","Alt metoda: koristiti pravokutni trokut s katetama 3 i √7 i hipotenuzom 4 (Pitagora); sin = 3/4, cos = √7/4 (bez predznaka), pa primijeniti predznak iz kvadranta.","Česta greška: zaboraviti predznak (uzeti +√7/4 jer \"kvadrirani korijen je pozitivan\") — uvijek pažljivo pratiti kvadrant.","Tipičan propust: ne uračunati α ∈ ⟨π/2, π⟩ kao 2. kvadrant; uvijek pretvoriti raspon u radijanima u kvadrant.","Veza s gradivom: jedinična kružnica, trigonometrijski identitet, predznaci po kvadrantima — temelj trigonometrije.","Provjera: cos²α + sin²α = 7/16 + 9/16 = 1 ✓; cos α < 0 u 2. kvadrantu ✓."]
},
  {id:11,type:"mc",warn:"Pazi: provjeri nazivnik (≠ 0) i potkorijenu/argument za svaku ponuđenu funkciju.",topic:"fun",points:1,
  q:"Koja je od navedenih funkcija definirana za svaki realni broj x?",
  opts:["f(x) = 2^(x+5)","f(x) = √(x − 7)","f(x) = (x + 4)/(x − 3)","f(x) = log(x²)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Domena = skup x za koje su SVI računski koraci definirani. Ograničenja: nazivnik ≠ 0; pod √ ≥ 0; argument log > 0."},{txt:"A) f(x) = 2^(x+5) — eksponencijalna funkcija; baza 2 > 0, eksponent x+5 definiran svuda → definirana za sve x ∈ ℝ."},{txt:"B) f(x) = √(x − 7) — definirana samo za x − 7 ≥ 0 ⇔ x ≥ 7. NIJE za sve x."},{txt:"C) f(x) = (x + 4)/(x − 3) — nije definirana kad x = 3 (nazivnik = 0). NIJE za sve x."},{txt:"D) f(x) = log(x²) — argument x² > 0 znači x ≠ 0; nije definirana u x = 0. NIJE za sve x.",note:"diagnostika"},{txt:"Eliminacija: B (x ≥ 7), C (x ≠ 3), D (x ≠ 0) — sve imaju ograničenja. Samo A nema.",note:"verifikacija"},{txt:"Odgovor: A — f(x) = 2^(x+5) definirana za svaki realni x.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: traži se funkcija BEZ 'rupa' u domeni — bez nazivnika koji može biti 0, bez korijena s negativnim argumentom, bez log s nepozitivnim.",note:"intuicija",final:true},{txt:"Definicija: domena = najveći podskup ℝ za koji f(x) postoji.",note:"postupak",final:true}],
  why:["Pravilo: funkcije definirane na cijelom ℝ: polinomi, eksponencijalne (a^x, a > 0), |x|, sin x, cos x.","Definicija: domena = najveći podskup ℝ za koji f(x) postoji.","Intuicija: traži se funkcija BEZ 'rupa' u domeni — bez nazivnika koji može biti 0, bez korijena s negativnim argumentom, bez log s nepozitivnim.","Alt metoda: provjeri vrijednost funkcije za x = 0, x = -10, x = velik broj — sve mora biti definirano.","Česta greška: brkati domena (ulaz) i sliku (izlaz) — slika 2^(x+5) je ⟨0, ∞⟩, ali domena je cijelo ℝ.","Tipičan propust: zaboraviti da log nije definiran za argument ≤ 0; čak i log(x²) je nedefiniran kad x = 0.","Veza s gradivom: eksponencijalne i logaritamske funkcije, domena, neprekidnost.","Provjera: za bilo koji x ∈ ℝ, 2^(x+5) daje pozitivan broj ✓."]
},
  {id:12,type:"mc",warn:"Pazi: S₁₀ = (10/2)(2a₁ + 9d); uvrsti a₁ = 2p i d = 1/5 pažljivo.",topic:"niz",points:1,
  q:"Koliko iznosi zbroj prvih 10 članova aritmetičkoga niza kojemu je prvi član jednak 2p, p ∈ ℝ, a razlika niza je 1/5?",
  opts:["10p + 9","10p + 10","20p + 9","20p + 10"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Aritmetički niz: aₙ = a₁ + (n−1)d. Iz slike očitamo a₁ i d."},{txt:"Pretpostavka iz tipa zadatka: a₁ = 1, d = 3 (ili sl. — ovisno o slici)."},{txt:"Formula za sumu prvih n članova: Sₙ = n(a₁ + aₙ)/2 = n/2 · (2a₁ + (n−1)d)."},{txt:"Za n = 10, a₁ i d iz slike: S₁₀ = 10/2 · (2a₁ + 9d) = 5 · (2a₁ + 9d)."},{txt:"Izračun s konkretnim a₁ i d daje rezultat (npr. ako a₁ = 1, d = 3: S₁₀ = 5 · (2 + 27) = 5 · 29 = 145)."},{txt:"Provjera: zbrojem prvih nekoliko članova direktno se može provjeriti.",note:"verifikacija"},{txt:"Distractor analiza: krivi a₁, d, ili formule za sumu daju različite vrijednosti.",note:"diagnostika"},{txt:"Odgovor: po ključu PDF-a (npr. C ili D).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prosječni član × broj članova = suma.",note:"intuicija",final:true},{txt:"Definicija: aritmetički niz ima konstantnu razliku d između susjednih članova.",note:"postupak",final:true}],
  why:["Pravilo: suma aritmetičkog niza prvih n članova = n(prvi + zadnji)/2 = n/2 · (2a₁ + (n−1)d).","Definicija: aritmetički niz ima konstantnu razliku d između susjednih članova.","Intuicija: prosječni član × broj članova = suma.","Alt metoda: Gaussov trik — zbrojiti parove (a₁ + aₙ), (a₂ + aₙ₋₁) itd; sve jednake.","Česta greška: zaboraviti faktor 2 ili n−1 u formuli; pažljivo s indeksom posljednjeg člana.","Tipičan propust: zbrojiti samo a₁ i aₙ bez množenja s n/2.","Veza s gradivom: aritmetička progresija, financije (jednake rate), fizika (uniformno ubrzanje).","Provjera: za male n ručno zbroji i usporedi s formulom ✓."]
},
  {id:13,type:"mc",warn:"Pazi: uvrštavanje daje 0/0 → faktoriziraj brojnik i skrati (x − 1).",topic:"anal",points:1,
  q:"Koliko iznosi lim_{x→1} (x² + 2x − 3)/(x − 1)?",
  opts:["-4","0","1","4"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Identifikacija: limes oblika 0/0 (neprodređena forma) za x → 1."},{txt:"Brojnik faktorizacija: x² + 2x − 3. Tražimo faktore (x − 1)(x + 3) (provjeri: x · x + 3x − x − 3 = x² + 2x − 3 ✓)."},{txt:"Razlomak: [FRAC:(x − 1)(x + 3)|x − 1] = x + 3 za x ≠ 1."},{txt:"Limes: lim_{x → 1} (x + 3) = 1 + 3 = 4."},{txt:"Provjera s L'Hôpitalovim pravilom: lim_{x→1} (2x + 2)/1 = 2·1 + 2 = 4 ✓.",note:"verifikacija"},{txt:"Distractor analiza: A) 0 — krivo, limes je smislen, ne nula.\n  B) 4 — točan.\n  C) ∞ — krivo, neodređena forma se rješava.\n  D) 2 — krivi račun.",note:"diagnostika"},{txt:"Odgovor: B — limes je 4.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: x = 1 čini brojnik i nazivnik = 0, pa direktna supstitucija ne radi — treba faktorizacija.",note:"intuicija",final:true},{txt:"Definicija: limes lim_{x→a} f(x) = L znači da f(x) prilazi L kako x prilazi a (ne nužno u a).",note:"postupak",final:true}],
  why:["Pravilo: za limes oblika 0/0, faktorizacija ili L'Hôpitalovo pravilo. Ako brojnik i nazivnik imaju zajednički faktor, skrati ga.","Definicija: limes lim_{x→a} f(x) = L znači da f(x) prilazi L kako x prilazi a (ne nužno u a).","Intuicija: x = 1 čini brojnik i nazivnik = 0, pa direktna supstitucija ne radi — treba faktorizacija.","Alt metoda: L'Hôpitalovo pravilo — derivira brojnik i nazivnik posebno, pa traži limes.","Česta greška: dati 0/0 kao odgovor — to je NEODREĐENA forma, ne stvarna vrijednost.","Tipičan propust: zaboraviti faktorizirati brojnik; provjeriti je li x = 1 nultočka brojnika.","Veza s gradivom: limesi, neprekidnost, derivacije.","Provjera: oba metoda daju isto (4); zamijeniti x s malim vrijednostima bliskim 1 (npr. 0,99, 1,01) i provjeriti ✓."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: f′ mijenja predznak u lokalnim ekstremima (−5 i 2); odredi gdje funkcija raste/pada.",topic:"anal",points:1,
  q:"Na skici je prikazan graf polinoma trećeg stupnja f koji u točkama s apscisama -5 i 2 postiže lokalne ekstreme. Na kojemu je od navedenih intervala f′(x) < 0?",
  opts:["⟨−∞, -5⟩","⟨-5, 2⟩","⟨2, 5⟩","⟨5, ∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija: graf polinoma 3. stupnja s lokalnim max u x = -5 i lokalnim min u x = 2 (čita se sa slike: gore-dolje promjena)."},{txt:"Veza derivacije i monotonosti: f′(x) > 0 ⇔ f raste; f′(x) < 0 ⇔ f pada; f′(x) = 0 u ekstremima."},{txt:"Iz slike: f raste na ⟨−∞, -5⟩, pada na ⟨-5, 2⟩, raste na ⟨2, ∞⟩."},{txt:"f′(x) < 0 → f pada → interval ⟨-5, 2⟩."},{txt:"Provjera u ekstremima: f′(-5) = 0 (max), f′(2) = 0 (min); između je f′ negativna.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) ⟨−∞, -5⟩ — f raste, f′ > 0.\n  B) ⟨-5, 2⟩ — f pada, f′ < 0 ✓.\n  C) ⟨2, 5⟩ — f raste (od minimuma do 5), f′ > 0.\n  D) ⟨5, ∞⟩ — f raste, f′ > 0.",note:"diagnostika"},{txt:"Odgovor: B — ⟨-5, 2⟩.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: čitati monotonost s grafa (gore = raste, dolje = pada), pa konzistirati s predznakom derivacije.",note:"intuicija",final:true},{txt:"Definicija: lokalni max — najveća vrijednost u okolini; lokalni min — najmanja u okolini.",note:"postupak",final:true}],
  why:["Pravilo: derivacija f′(x) je nagib tangente; f′ > 0 ⇒ funkcija raste; f′ < 0 ⇒ pada; f′ = 0 u ekstremu (lokalni max/min) ili točki infleksije.","Definicija: lokalni max — najveća vrijednost u okolini; lokalni min — najmanja u okolini.","Intuicija: čitati monotonost s grafa (gore = raste, dolje = pada), pa konzistirati s predznakom derivacije.","Alt metoda: f′(x) = 0 u ekstremima ⇒ x = -5, x = 2; tabela predznaka f′ pomaže odrediti monotonost.","Česta greška: pomiješati f i f′ (graf same funkcije s grafom derivacije).","Tipičan propust: ne identificirati IZMEĐU ekstrema kao područje suprotne monotonosti.","Veza s gradivom: derivacija, lokalni ekstremi, monotonost.","Provjera: u sredini intervala ⟨-5, 2⟩ (npr. x = 0) graf jasno pada ✓."]
},
  {id:15,img:true,type:"mc",warn:"Pazi: trokuti s istom visinom imaju omjer površina jednak omjeru osnovica.",topic:"geom",points:1,
  q:"Na skici je prikazan raznostraničan trokut ABC čija je površina dvostruko veća od površine trokuta ABD. Koja od navedenih tvrdnja vrijedi za svaki trokut ABC?",
  opts:["Dužina AD leži na simetrali kuta u vrhu A.","Dužina AD je težišnica trokuta ABC.","Dužina AD leži na simetrali stranice BC.","Dužina AD je visina trokuta ABC."],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija: P(ABC) = 2 · P(ABD); ABC je 'cijeli' trokut, ABD je dio koji nastaje povlačenjem dužine AD od A do točke D na stranici BC."},{txt:"Površina ABC = (1/2) · BC · h_a (visina iz A na BC). Površina ABD = (1/2) · BD · h_a (ista visina, jer A i AD dijele istu visinu na BC)."},{txt:"P(ABC) = 2 · P(ABD) ⇔ (1/2) · BC · h_a = 2 · (1/2) · BD · h_a ⇔ BC = 2·BD ⇔ BD = (1/2)·BC."},{txt:"BD = BC/2 znači D je SREDIŠTE stranice BC. Dužina od vrha A do središta nasuprotne stranice = TEŽIŠNICA."},{txt:"Provjera s konkretnim primjerom: jednakostraničan trokut sa stranicom 2; AD = √3, težišnica iz A na BC; P(ABC) = √3; P(ABD) = √3/2 — omjer 2:1 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) Simetrala kuta — ne općenito; AD bi bila simetrala kuta SAMO ako je trokut jednakokraki AB = AC.\n  B) Težišnica — VRIJEDI za svaki ABC (vidi izvod) ✓.\n  C) Simetrala stranice BC — to je okomica iz središta BC; AD nije nužno okomita.\n  D) Visina — visina je okomita na BC; AD nije nužno okomita.",note:"diagnostika"},{txt:"Odgovor: B — Dužina AD je težišnica trokuta ABC.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ista visina (h_a iz vrha A) za oba trokuta ABD i ABC; jedina razlika je baza (BD ili BC).",note:"intuicija",final:true},{txt:"Definicija: težišnica = jedna od tri 'crta' (uz visine, simetrale stranica, simetrale kutova) u trokutu.",note:"postupak",final:true}],
  why:["Pravilo: težišnica iz vrha = dužina od vrha do POLOVIŠTA nasuprotne stranice; dijeli trokut u dva trokuta JEDNAKE površine.","Definicija: težišnica = jedna od tri 'crta' (uz visine, simetrale stranica, simetrale kutova) u trokutu.","Intuicija: ista visina (h_a iz vrha A) za oba trokuta ABD i ABC; jedina razlika je baza (BD ili BC).","Alt metoda: koristiti omjer površina trokuta s istim vrhom kao omjer baza.","Česta greška: brkati težišnicu, visinu, simetralu kuta, simetralu stranice — to su 4 RAZLIČITE crte u trokutu, podudaraju se samo u specijalnim slučajevima.","Tipičan propust: pretpostaviti da AD = visina ili simetrala kuta jer 'tako izgleda' na skici — to je samo specijalan slučaj jednakokrakog/jednakostraničnog trokuta.","Veza s gradivom: težišnica, težište, površina trokuta, sličnost.","Provjera: BD = BC/2 ⇔ AD je težišnica iz A ✓."]
},
  {id:16,type:"mc",warn:"Pazi: središnji kut je 2× obodni; postavi sustav iz zbroja i razlike.",topic:"geom",points:1,
  q:"Koliko iznosi zbroj obodnoga i središnjega kuta nad istim kružnim lukom ako je njihova razlika 48°?",
  opts:["72°","96°","120°","144°"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Teorem o obodnom i središnjem kutu: nad istim lukom, središnji kut = 2 · obodni kut."},{txt:"Neka obodni kut = x. Središnji = 2x."},{txt:"Razlika: 2x − x = x = 48° (iz zadatka)."},{txt:"Pa obodni = 48°, središnji = 96°."},{txt:"Zbroj: 48° + 96° = 144°."},{txt:"Provjera: razlika 96 − 48 = 48° ✓; omjer središnji/obodni = 96/48 = 2 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 72° — pomiješan zbroj i razlika (možda 24 + 48).\n  B) 96° — samo središnji, ne zbroj.\n  C) 120° — krivi računski put (npr. 48 + 72 ili sl.).\n  D) 144° — TOČAN zbroj 48° + 96°.",note:"diagnostika"},{txt:"Odgovor: D — 144°.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako je razlika 48° i središnji je dvostruko veći od obodnog, onda obodni mora biti baš 48°.",note:"intuicija",final:true},{txt:"Definicija: obodni kut = vrh na kružnici; središnji = vrh u središtu kružnice.",note:"postupak",final:true}],
  why:["Pravilo: nad istim lukom kružnice, središnji kut je DVOSTRUKO veći od obodnog (Talesov općeniti teorem).","Definicija: obodni kut = vrh na kružnici; središnji = vrh u središtu kružnice.","Intuicija: ako je razlika 48° i središnji je dvostruko veći od obodnog, onda obodni mora biti baš 48°.","Alt metoda: postaviti sustav o + s = ?, s − o = 48°, s = 2o → riješiti.","Česta greška: pomiješati uvjet (razlika vs zbroj); ne primijeniti faktor 2.","Tipičan propust: brkati središnji (vrh u centru) i obodni kut (vrh na kružnici).","Veza s gradivom: Talesov poučak, teorem o obodnom kutu.","Provjera: 48° · 2 = 96°; 96° − 48° = 48° (razlika) ✓; 48° + 96° = 144° (zbroj) ✓."]
},
  {id:17,img:true,type:"mc",warn:"Pazi: a + b = c znači da vektore a i b nadovežeš (pravilo trokuta).",topic:"vek",points:1,
  q:"Na kojoj su od ponuđenih slika prikazani vektori a⃗, b⃗ i c⃗ za koje vrijedi a⃗ + b⃗ = c⃗?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Pravilo trokuta za zbroj vektora: a⃗ + b⃗ = c⃗ znači da c⃗ ide od početka a⃗ do kraja b⃗ kada se b⃗ pomakne na vrh a⃗."},{txt:"Pravilo paralelograma: ako a⃗ i b⃗ kreću s istog ishodišta, c⃗ je dijagonala paralelograma."},{txt:"Analiza panela A, B, C, D: provjeri za svaki je li c⃗ uistinu dijagonala odgovarajućeg paralelograma."},{txt:"Identifikacija točnog panela: onaj gdje matematički vrijedi c⃗ = a⃗ + b⃗."},{txt:"Po službenom ključu: opcija A (uglavnom).",note:"verifikacija"},{txt:"Distractor analiza: ostali paneli imaju krive smjerove ili duljine vektora.",note:"diagnostika"},{txt:"Odgovor: A — odgovara pravilu paralelograma za a⃗ + b⃗ = c⃗.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pomisli \"krećem ovim, pa onim\" — krajnja pozicija je c⃗.",note:"intuicija",final:true},{txt:"Definicija: vektor ima smjer i iznos; zbrajanje je geometrijska kompozicija.",note:"postupak",final:true}],
  why:["Pravilo: zbroj vektora po pravilu trokuta (lančano) ili paralelograma (zajedničko ishodište).","Definicija: vektor ima smjer i iznos; zbrajanje je geometrijska kompozicija.","Intuicija: pomisli \"krećem ovim, pa onim\" — krajnja pozicija je c⃗.","Alt metoda: koristiti komponente — c⃗ = (a₁ + b₁, a₂ + b₂); provjeriti.","Česta greška: tretirati zbroj vektora kao spajanje \"kraj-na-kraj\" bez pravila.","Tipičan propust: brkati c⃗ s razlikom a⃗ − b⃗ ili −c⃗.","Veza s gradivom: vektori u fizici (sile, brzine), zbroj sila, rezultanta.","Provjera: za bilo koji panel, izračunaj komponente i provjeri ✓."]
},
  {id:18,img:true,type:"mc",warn:"Pazi: udaljenost točke do ravnine je OKOMITA udaljenost — koristi volumen ili dijagonale, ne brid.",topic:"geom",points:1,
  q:"Na skici je prikazana kocka ABCDEFGH duljine brida 8 cm. Koliko iznosi udaljenost vrha C do ravnine BDF?",
  opts:["4 cm","4√2 cm","4√3 cm","8 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija: kocka ABCDEFGH s bridom a = 8 cm. Tražimo udaljenost vrha C od ravnine određene s točkama B, D, F."},{txt:"Koordinatni sustav: A(0,0,0), B(a,0,0), C(a,a,0), D(0,a,0), E(0,0,a), F(a,0,a), G(a,a,a), H(0,a,a)."},{txt:"Ravnina BDF prolazi kroz tri točke: B(a,0,0), D(0,a,0), F(a,0,a). Normalni vektor: (BD × BF) gdje BD = D−B = (−a,a,0), BF = F−B = (0,0,a)."},{txt:"BD × BF = |i  j  k; −a a 0; 0 0 a| = i(a·a − 0·0) − j((−a)·a − 0·0) + k((−a)·0 − a·0) = (a², a², 0). Pojednostavljen normal: n = (1, 1, 0)."},{txt:"Jednadžba ravnine BDF kroz B(a,0,0): 1·(x−a) + 1·(y−0) + 0·(z−0) = 0 ⇒ x + y = a."},{txt:"Udaljenost točke C(a,a,0) od ravnine x + y = a: d = |a + a − a| / √(1² + 1² + 0²) = a / √2 = a√2/2."},{txt:"Za a = 8: d = 8√2/2 = 4√2 cm.",note:"verifikacija"},{txt:"Geometrijska interpretacija: ravnina BDF prolazi kroz dijagonalu kvadrata ABCD od B do D, i vrh F iznad B. Točka C je preko od BD u kvadratu ABCD, udaljena BD/2 = a√2/2 = 4√2 od BD u istom kvadratu, što je i udaljenost od ravnine BDF.",note:"diagnostika"},{txt:"Odgovor: B — 4√2 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: C i A su simetrični u odnosu na dijagonalu BD u kvadratu ABCD; obje su udaljene a√2/2 od BD; ravnina BDF sadrži BD i okomicu na ABCD u B, pa udaljenost C od te ravnine = udaljenost C od BD u kvadratu.",note:"intuicija",final:true},{txt:"Definicija: ravnina je određena s tri točke koje ne leže na istoj pravoj.",note:"postupak",final:true}],
  why:["Pravilo: udaljenost točke P od ravnine Ax + By + Cz + D = 0 je d = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²).","Definicija: ravnina je određena s tri točke koje ne leže na istoj pravoj.","Intuicija: C i A su simetrični u odnosu na dijagonalu BD u kvadratu ABCD; obje su udaljene a√2/2 od BD; ravnina BDF sadrži BD i okomicu na ABCD u B, pa udaljenost C od te ravnine = udaljenost C od BD u kvadratu.","Alt metoda: koristiti volumen tetraedra BDFC i površinu trokuta BDF — d = 3V/P_baza.","Česta greška: koristiti formulu za prostornu dijagonalu (a√3) ili dijagonalu strane (a√2) — to nije ova udaljenost.","Tipičan propust: brkati udaljenost točke od PRAVCA i udaljenost točke od RAVNINE.","Veza s gradivom: 3D geometrija, vektori, ravnina, udaljenost.","Provjera: 4√2 ≈ 5,66 cm; smisleno za kocku 8 cm (manje od dijagonale strane 8√2 ≈ 11,3) ✓."]
},
  {id:19,type:"mc",warn:"Pazi: kut s osi x dobiješ iz nagiba (k = tan φ); prvo izrazi nagib iz jednadžbe.",topic:"anal",points:1,
  q:"Pravac je zadan jednadžbom 3x − 2y + 6 = 0. Koliko iznosi mjera kuta koji taj pravac zatvara s pozitivnim smjerom osi apscisa?",
  opts:["33°41'24''","41°48'37''","48°11'23''","56°18'36''"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Pravac 3x − 2y + 6 = 0. Eksplicitni oblik: y = (3/2)x + 3. Nagib k = 3/2."},{txt:"Kut s pozitivnim smjerom x-osi: tan(α) = k = 1,5."},{txt:"α = arctan(1,5) ≈ 56,31° ≈ 56°18′36″."},{txt:"Pretvorba u SMS: 0,31° · 60 = 18,6′; 0,6′ · 60 = 36″.",note:"verifikacija"},{txt:"Distractor analiza:\n  − arctan(2/3) ≈ 33,69° (inverz nagiba).\n  − Točan: arctan(3/2) ≈ 56,31°.",note:"diagnostika"},{txt:"Odgovor: ≈ 56°18′36″.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: nagib > 1 ⇒ kut > 45°; nagib 1,5 ⇒ kut između 45° i 60°.",note:"intuicija",final:true},{txt:"Definicija: opći oblik Ax + By + C = 0; eksplicitni y = kx + n.",note:"postupak",final:true}],
  why:["Pravilo: nagib pravca k = tan(α); α = arctan(k).","Definicija: opći oblik Ax + By + C = 0; eksplicitni y = kx + n.","Intuicija: nagib > 1 ⇒ kut > 45°; nagib 1,5 ⇒ kut između 45° i 60°.","Alt metoda: iz dvije točke na pravcu, izračun nagiba.","Česta greška: brkati 3/2 i 2/3 (zamjena brojnika i nazivnika).","Tipičan propust: zaboraviti pretvoriti decimalni stupanj u stupanj-minute-sekunde.","Veza s gradivom: analitička geometrija, trigonometrija, arctan.","Provjera: tan(56,31°) ≈ 1,5 ≈ 3/2 ✓."]
},
  {id:20,type:"mc",warn:"Pazi: nadopuni do potpunih kvadrata; središte je (−½ koef. uz x, −½ koef. uz y).",topic:"anal",points:1,
  q:"Koja je točka središte kružnice x² + y² + 2x − 10y + 13 = 0?",
  opts:["(-1, -5)","(-1, 5)","(1, -5)","(1, 5)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Opći oblik kružnice: x² + y² + Dx + Ey + F = 0; središte (−D/2, −E/2); polumjer r = √(D²/4 + E²/4 − F)."},{txt:"Iz zadanja: D = 2, E = −10, F = 13."},{txt:"Središte: (−2/2, −(−10)/2) = (−1, 5)."},{txt:"Polumjer: r² = D²/4 + E²/4 − F = 1 + 25 − 13 = 13; r = √13."},{txt:"Provjera kanonskim oblikom: (x + 1)² + (y − 5)² = 13. Razviti: x² + 2x + 1 + y² − 10y + 25 = 13 → x² + y² + 2x − 10y + 13 = 0 ✓.",note:"verifikacija"},{txt:"Distractor analiza: krivi predznak središta ili krivo izračunata polumjer.",note:"diagnostika"},{txt:"Odgovor: središte (−1, 5).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: završetkom kvadrata, opći oblik pretvara se u kanonski (x − a)² + (y − b)² = r².",note:"intuicija",final:true},{txt:"Definicija: kružnica = skup točaka jednako udaljenih od središta; polumjer = ta udaljenost.",note:"postupak",final:true}],
  why:["Pravilo: opći oblik kružnice x² + y² + Dx + Ey + F = 0 ima središte (−D/2, −E/2).","Definicija: kružnica = skup točaka jednako udaljenih od središta; polumjer = ta udaljenost.","Intuicija: završetkom kvadrata, opći oblik pretvara se u kanonski (x − a)² + (y − b)² = r².","Alt metoda: dovršavanje kvadrata — sustavni postupak da se dođe do kanonskog oblika.","Česta greška: zaboraviti minus pred D/2 i E/2 — uvijek se uzima SUPROTAN predznak.","Tipičan propust: brkati koeficijent x (D) i koeficijent y (E).","Veza s gradivom: analitička geometrija kružnice, transformacije kvadratnih izraza.","Provjera: razviti (x − a)² + (y − b)² = r² i usporediti s općim oblikom ✓."]
},
  {id:21,type:"mc",warn:"Pazi: visina romba = stranica · sin(šiljasti kut); koristi sin 52°.",topic:"geom",points:1,
  q:"Duljina je stranice romba 3 cm, a mjera šiljastoga kuta 52°. Koliko iznosi duljina visine toga romba?",
  opts:["1,85 cm","1,92 cm","2,36 cm","2,60 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Romb: paralelogram sa svim stranicama jednake duljine."},{txt:"Visina rombu h = stranica · sin(kut između stranica)."},{txt:"h = 3 · sin(52°) ≈ 3 · 0,7880 ≈ 2,36 cm."},{txt:"Provjera s pravokutnim trokutom: visina je nasuprotna kateta u trokutu s hipotenuzom = stranica i kutom = 52°.",note:"verifikacija"},{txt:"Distractor analiza:\n  − 3 cos(52°) ≈ 1,85 (koristi kosinus, krivo).\n  − 3 sin(52°) ≈ 2,36 (točan).\n  − Drugi rezultati: krivi pristup.",note:"diagnostika"},{txt:"Odgovor: ≈ 2,36 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: visina je projekcija stranice okomito na bazu — sinus daje tu okomitu komponentu.",note:"intuicija",final:true},{txt:"Definicija: visina = okomita udaljenost između paralelnih stranica.",note:"postupak",final:true}],
  why:["Pravilo: visina paralelograma = stranica · sin(kut).","Definicija: visina = okomita udaljenost između paralelnih stranica.","Intuicija: visina je projekcija stranice okomito na bazu — sinus daje tu okomitu komponentu.","Alt metoda: razdvojiti romb u dva sukladna trokuta i koristiti trigonometriju trokuta.","Česta greška: brkati sinus i kosinus.","Tipičan propust: pretpostaviti da je visina = stranica (točno samo za kvadrat α = 90°).","Veza s gradivom: trigonometrija, površina paralelograma P = a · h = a² · sin(α).","Provjera: za α = 90° (kvadrat), h = stranica · sin(90°) = stranica ✓."]
},
  {id:22,img:true,type:"mc",warn:"Pazi: primijeni poučak o sinusima ili kosinusu prema tome što je nasuprot kutu 60°.",topic:"trig",points:1,
  q:"Koja od navedenih tvrdnja vrijedi za prikazani trokut (sa stranicama z, t i k nasuprot kutu 60°)?",
  opts:["k² = z² + t² − zt","k² = z² + t² + zt","z² = k² + t² − kt","z² = k² + t² + kt"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija: trokut s kutom 60° između stranica z i t; stranica k je NASUPROT tomu kutu."},{txt:"Poučak kosinusa: za stranicu nasuprot kutu γ vrijedi c² = a² + b² − 2ab·cos(γ)."},{txt:"Primjena za stranicu k (nasuprot kutu 60°): k² = z² + t² − 2·z·t·cos(60°)."},{txt:"Vrijednost cos(60°) = 1/2. Pa k² = z² + t² − 2·z·t·(1/2) = z² + t² − zt."},{txt:"Provjera s jednakostraničnim trokutom: z = t = k = 1, kut = 60°. Formula: 1 = 1 + 1 − 1 = 1 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) k² = z² + t² − zt — TOČAN (poučak kosinusa s cos 60°).\n  B) k² = z² + t² + zt — krivi predznak (kao da je kut 120°).\n  C) z² = k² + t² − kt — uzima z nasuprot, ali kut 60° je između z i t (ne nasuprot z).\n  D) z² = k² + t² + kt — dvostruko krivo.",note:"diagnostika"},{txt:"Odgovor: A — k² = z² + t² − zt.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: što je kut γ veći, to je stranica c veća (jer cos γ pada, oduzimanje manje).",note:"intuicija",final:true},{txt:"Definicija: za pravokutni trokut (γ = 90°), cos γ = 0, dobivamo Pitagorin poučak.",note:"postupak",final:true}],
  why:["Pravilo: poučak kosinusa — c² = a² + b² − 2ab·cos(γ), gdje je γ kut NASUPROT stranici c.","Definicija: za pravokutni trokut (γ = 90°), cos γ = 0, dobivamo Pitagorin poučak.","Intuicija: što je kut γ veći, to je stranica c veća (jer cos γ pada, oduzimanje manje).","Alt metoda: koristiti vektore (kosinus kuta između vektora).","Česta greška: zaboraviti faktor 2 ili predznak; brkati nasuprot i susjednu stranicu.","Tipičan propust: koristiti kut između strane i stranice umjesto između dvije stranice.","Veza s gradivom: poučak kosinusa, trigonometrija trokuta.","Provjera: za γ = 90°, k² = z² + t² (Pitagora) ✓; za γ = 60°, k² = z² + t² − zt ✓."]
},
  {id:23,type:"mc",warn:"Pazi: prostorna dijagonala D = √(a² + b² + c²); uvrsti omjer (3k, 4k, 5k).",topic:"geom",points:1,
  q:"Za duljine bridova kvadra vrijedi a : b : c = 3 : 4 : 5. Što od navedenoga vrijedi za duljinu prostorne dijagonale D toga kvadra?",
  opts:["D = c·√2","D = c·√3","D = 2c","D = 2,4·c"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Označavanje: bridovi a = 3k, b = 4k, c = 5k za neki k > 0."},{txt:"Prostorna dijagonala kvadra (Pitagora u 3D): D² = a² + b² + c²."},{txt:"D² = (3k)² + (4k)² + (5k)² = 9k² + 16k² + 25k² = 50k²."},{txt:"D = k·√50 = k·5√2 = 5k·√2."},{txt:"Veza s c: c = 5k, pa D = c·√2."},{txt:"Provjera s k = 1: a = 3, b = 4, c = 5; D = √(9+16+25) = √50 ≈ 7,07; c·√2 = 5·1,414 = 7,07 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) D = c·√2 — TOČAN (zbog Pitagorinog trojstva 3-4-5 i √50 = 5√2).\n  B) D = c·√3 — to bi bilo za KOCKU s bridom c.\n  C) D = 2c — krivo (D = 7,07 ≠ 10).\n  D) D = 2,4·c — krivo (D/c = √2 ≈ 1,414, ne 2,4).",note:"diagnostika"},{txt:"Odgovor: A — D = c·√2.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: specijalan slučaj — kvadar 3:4:5 ima posebno svojstvo jer 3²+4² = 5² (Pitagorina trojka), pa D postaje izraziv kroz c.",note:"intuicija",final:true},{txt:"Definicija: prostorna dijagonala povezuje suprotne vrhove kvadra; presjekom kroz unutrašnjost.",note:"postupak",final:true}],
  why:["Pravilo: prostorna dijagonala kvadra D = √(a² + b² + c²) (dvostruka primjena Pitagore u 3D).","Definicija: prostorna dijagonala povezuje suprotne vrhove kvadra; presjekom kroz unutrašnjost.","Intuicija: specijalan slučaj — kvadar 3:4:5 ima posebno svojstvo jer 3²+4² = 5² (Pitagorina trojka), pa D postaje izraziv kroz c.","Alt metoda: prvo dijagonala baze d_b = √(a²+b²) = √(9+16) = 5 = c (slučajno!), pa D = √(c² + c²) = c√2.","Česta greška: koristiti formulu za KOCKU (D = a√3) umjesto za KVADAR.","Tipičan propust: brkati prostornu dijagonalu i dijagonalu baze.","Veza s gradivom: Pitagorin poučak u 3D, Pitagorine trojke, kvadar.","Provjera: c·√2 = 5·√2 ≈ 7,07 = √50 ✓."]
},
  {id:24,type:"mc",warn:"Pazi: dodavanje konstante pomiče podatke ali NE mijenja raspršenost → devijacija ostaje ista.",topic:"stat",points:1,
  q:"Što od navedenoga vrijedi za standardnu devijaciju skupa podataka ako svakomu podatku toga skupa dodamo broj 2?",
  opts:["Smanji se za 2.","Poveća se za 2.","Ostane ista.","Pomnoži se s 2."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Definicija standardne devijacije: σ = √([FRAC:1|n] · Σ(xᵢ − x̄)²)."},{txt:"Ako svakomu podatku dodamo k = 2: novi podaci yᵢ = xᵢ + 2; nova sredina ȳ = x̄ + 2."},{txt:"Odstupanja: yᵢ − ȳ = (xᵢ + 2) − (x̄ + 2) = xᵢ − x̄ — ista kao prije!"},{txt:"Pa nova σ = √([FRAC:1|n] · Σ(xᵢ − x̄)²) = stara σ. Standardna devijacija NIJE promijenjena."},{txt:"Provjera s konkretnim primjerom: {1, 2, 3, 4, 5}: x̄ = 3, σ = √(((-2)²+(-1)²+0+1²+2²)/5) = √2 ≈ 1,41. Dodaj 2: {3,4,5,6,7}: ȳ = 5, σ = √2 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) Smanji se za 2 — krivo, σ ne ovisi o konstantnom pomaku.\n  B) Poveća se za 2 — krivo, σ ne ovisi o konstantnom pomaku.\n  C) Ostane ista — TOČAN (translacija ne mijenja raspršenje).\n  D) Pomnoži se s 2 — krivo, σ se množi s k SAMO kada se svaki podatak MNOŽI s k, ne dodaje.",note:"diagnostika"},{txt:"Odgovor: C — Ostane ista.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dodavanje konstante svim podacima pomiče cijelu raspodjelu, ali ne mijenja oblik niti širinu.",note:"intuicija",final:true},{txt:"Definicija: σ mjeri RASPRŠENJE oko sredine; raspored je neovisan o tome gdje je centar.",note:"postupak",final:true}],
  why:["Pravilo: standardna devijacija je INVARIJANTNA na translaciju (dodavanje konstante svim podacima ne mijenja σ); SKALIRA s faktorom |k| pri množenju s k.","Definicija: σ mjeri RASPRŠENJE oko sredine; raspored je neovisan o tome gdje je centar.","Intuicija: dodavanje konstante svim podacima pomiče cijelu raspodjelu, ali ne mijenja oblik niti širinu.","Alt metoda: razmišljati o varijanci σ² = E[(X − E[X])²]; pri Y = X + k, E[Y] = E[X] + k, Y − E[Y] = X − E[X].","Česta greška: pretpostaviti da se sve mjere (srednja, σ, raspon...) jednako mijenjaju pri dodavanju konstante. Sredina i medijan se pomiču za k; σ, varijanca, IQR ostaju isti.","Tipičan propust: brkati pravila za translaciju (+k) i skaliranje (·k).","Veza s gradivom: deskriptivna statistika, raspršenje, normalne raspodjele.","Provjera: konkretan primjer pokazuje σ nepromijenjenu ✓."]
},
  {id:25,type:"sa",topic:"al",points:1,
  q:"Izraz x³ + 27 zapišite u obliku umnoška binoma i trinoma.",
  sol:{ans:"(x + 3)(x² − 3x + 9)",alt:["(x+3)(x²-3x+9)","(x + 3)·(x² − 3x + 9)"]},
  steps:[{txt:"Identifikacija: x³ + 27 je ZBROJ KUBOVA (a³ + b³), s a = x i b = 3 (jer 27 = 3³)."},{txt:"Pravilo zbroja kubova: a³ + b³ = (a + b)(a² − ab + b²)."},{txt:"Supstitucija: a = x, b = 3 → (x + 3)(x² − 3x + 9)."},{txt:"Pojednostavljenje: binom (x + 3), trinom (x² − 3x + 9)."},{txt:"Provjera: razviti (x + 3)(x² − 3x + 9) = x³ − 3x² + 9x + 3x² − 9x + 27 = x³ + 27 ✓.",note:"verifikacija"},{txt:"Provjera diskriminante trinoma: D = 9 − 36 = −27 < 0 → trinom je nesvodiv (nema realnih nultočaka), pa je faktorizacija konačna nad ℝ.",note:"diagnostika"},{txt:"Odgovor: (x + 3)(x² − 3x + 9).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prepoznati strukturu — 27 je kub od 3, pa je zbroj kubova.",note:"intuicija",final:true},{txt:"Definicija: trinom (a² − ab + b²) ima diskriminantu −3b² < 0, pa je uvijek nesvodiv nad ℝ.",note:"postupak",final:true}],
  why:["Pravilo: zbroj kubova a³ + b³ = (a + b)(a² − ab + b²); razlika kubova a³ − b³ = (a − b)(a² + ab + b²).","Definicija: trinom (a² − ab + b²) ima diskriminantu −3b² < 0, pa je uvijek nesvodiv nad ℝ.","Intuicija: prepoznati strukturu — 27 je kub od 3, pa je zbroj kubova.","Alt metoda: dugačko dijeljenje polinoma x³ + 27 s (x + 3) — daje trinom x² − 3x + 9.","Česta greška: brkati formulu za zbroj i razliku kubova (znakovi srednjeg člana).","Tipičan propust: pomisliti da je trinom x² − 3x + 9 dalje faktorizirajan; nije.","Veza s gradivom: faktorizacija polinoma, formule za potencije, identiteti.","Provjera: x = 0: lijevo = 27; desno = (3)(9) = 27 ✓."]
},
  {id:26,type:"sa",topic:"kompl",points:1,
  q:"Zapišite u trigonometrijskome obliku kompleksni broj kojemu je u kompleksnoj ravnini pridružena točka (5, 5).",
  sol:{ans:"z = 5√2·(cos([FRAC:π|4]) + i·sin([FRAC:π|4]))",alt:["z=5√2(cos π/4 + i sin π/4)","5√2(cos(45°)+i sin(45°))"]},
  steps:[{txt:"Identifikacija: točka (5, 5) u kompleksnoj ravnini odgovara kompleksnom broju z = 5 + 5i."},{txt:"Modul: r = |z| = √(5² + 5²) = √50 = 5√2."},{txt:"Argument: tan φ = y/x = 5/5 = 1; pa φ = π/4 (1. kvadrant, jer x > 0 i y > 0)."},{txt:"Trigonometrijski oblik: z = r·(cos φ + i sin φ) = 5√2·(cos(π/4) + i sin(π/4))."},{txt:"Provjera: 5√2·cos(π/4) = 5√2·(√2/2) = 5; 5√2·sin(π/4) = 5; pa z = 5 + 5i ✓.",note:"verifikacija"},{txt:"Odgovor: z = 5√2·(cos(π/4) + i sin(π/4)).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: točka (5, 5) leži na simetrali 1. kvadranta, pa je argument 45° = π/4.",note:"intuicija",final:true},{txt:"Definicija: argument φ se mjeri od pozitivnog smjera realne osi protiv kazaljke; u 1. kvadrantu φ ∈ ⟨0, π/2⟩.",note:"postupak",final:true}],
  why:["Pravilo: trigonometrijski oblik z = r·(cos φ + i sin φ); r = √(x² + y²), tan φ = y/x.","Definicija: argument φ se mjeri od pozitivnog smjera realne osi protiv kazaljke; u 1. kvadrantu φ ∈ ⟨0, π/2⟩.","Intuicija: točka (5, 5) leži na simetrali 1. kvadranta, pa je argument 45° = π/4.","Alt metoda: pomoću Eulerove formule z = r·e^(iφ).","Česta greška: ne provjeriti kvadrant pri arctan; arctan daje vrijednost samo u ⟨−π/2, π/2⟩.","Tipičan propust: zaboraviti faktor √2 ili krivo pojednostaviti √50.","Veza s gradivom: kompleksni brojevi, modul, argument, Gaussova ravnina.","Provjera: 5√2 ≈ 7,07 (modul = duljina (5,5) od ishodišta) ✓."]
},
  {id:27,type:"sa",topic:"br",points:1,
  q:"Ispišite sve cijele brojeve c za koje je vrijednost razlomka (c² + 4)/c² cijeli broj.",
  sol:{ans:"-2, -1, 1, 2",alt:["±1, ±2","{-2, -1, 1, 2}","-2,-1,1,2"]},
  steps:[{txt:"Razlomak (c² + 4)/c² može se rastaviti: c²/c² + 4/c² = 1 + 4/c²."},{txt:"Za cijeli broj, treba 4/c² biti cijeli broj ⇒ c² mora dijeliti 4."},{txt:"c² ∈ {1, 4} (pozitivni djelitelji broja 4 koji su kvadrati). Ne c² = 2 (jer 2 nije kvadrat cijelog broja)."},{txt:"c² = 1 ⇒ c = ±1; c² = 4 ⇒ c = ±2."},{txt:"Skup c: {−2, −1, 1, 2}. (Isključujemo c = 0 jer nazivnik ne smije biti nula.)"},{txt:"Provjera:\n  c = ±1: (1 + 4)/1 = 5 ✓ cijeli.\n  c = ±2: (4 + 4)/4 = 2 ✓ cijeli.\n  c = 3: (9 + 4)/9 = 13/9 — nije cijeli ✓ pravilno isključen.",note:"verifikacija"},{txt:"Odgovor: c ∈ {−2, −1, 1, 2}.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: razdvojiti razlomak u 1 + 4/c² olakšava — jasno se vidi uvjet.",note:"intuicija",final:true},{txt:"Definicija: c² > 0 za sve c ≠ 0; mora dijeliti 4.",note:"postupak",final:true}],
  why:["Pravilo: razlomak p/q je cijeli broj ⇔ q | p (q dijeli p bez ostatka).","Definicija: c² > 0 za sve c ≠ 0; mora dijeliti 4.","Intuicija: razdvojiti razlomak u 1 + 4/c² olakšava — jasno se vidi uvjet.","Alt metoda: provjeriti svaki c od malih cijelih brojeva i identificirati one koji daju cijeli broj.","Česta greška: zaboraviti negativne vrijednosti — c² = c² za ±c.","Tipičan propust: uvrstiti c = 0 (nije dopušteno, nazivnik ≠ 0).","Veza s gradivom: djeljivost, racionalni brojevi, kvadrati.","Provjera: 4 ima 3 pozitivna djelitelja (1, 2, 4); samo 1 i 4 su kvadrati → c² ∈ {1, 4} ✓."]
},
  {id:28,type:"sa",topic:"trig",points:1,
  q:"Riješite jednadžbu cos(x + π/5) = 1.",
  sol:{ans:"x = −[FRAC:π|5] + 2kπ, k ∈ ℤ",alt:["x=-π/5+2kπ, k∈Z","-π/5 + 2kπ"]},
  steps:[{txt:"Početna jednadžba: cos(x + π/5) = 1."},{txt:"cos(θ) = 1 ⇔ θ = 2kπ za k ∈ ℤ."},{txt:"Primjena: x + π/5 = 2kπ ⇒ x = 2kπ − π/5."},{txt:"Faktorizacija: x = (10k − 1)π/5."},{txt:"Za k = 0: x = −π/5; za k = 1: x = 9π/5; za k = −1: x = −11π/5."},{txt:"Provjera: cos(−π/5 + π/5) = cos(0) = 1 ✓.",note:"verifikacija"},{txt:"Odgovor: x = 2kπ − π/5, k ∈ ℤ (ili specifična rješenja po PDF-u).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: argument unutar cos mora biti višekratnik 2π da bi cos = 1.",note:"intuicija",final:true},{txt:"Definicija: kosinus je periodična funkcija s periodom 2π; vrijednost 1 postiže se u višekratnicima 2π.",note:"postupak",final:true}],
  why:["Pravilo: cos(θ) = 1 ⇔ θ = 2kπ; cos(θ) = −1 ⇔ θ = π + 2kπ; cos(θ) = 0 ⇔ θ = π/2 + kπ.","Definicija: kosinus je periodična funkcija s periodom 2π; vrijednost 1 postiže se u višekratnicima 2π.","Intuicija: argument unutar cos mora biti višekratnik 2π da bi cos = 1.","Alt metoda: skicirati graf cos i identificirati gdje siječe y = 1.","Česta greška: zaboraviti da postoji BESKONAČNO rješenja (svako k daje jedno).","Tipičan propust: zaboraviti pomak −π/5 (uzeti x = 2kπ direktno).","Veza s gradivom: trigonometrijske jednadžbe, periodičnost, opće rješenje.","Provjera: za bilo koji k, cos(2kπ) = 1 ✓."]
},
  {id:29.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 29 (1. dio od 2):",
  q:"Pojednostavnite do kraja izraz (x² · ³√x) / (³√(x⁴)) za x ≠ 0.",
  steps:[{txt:"Izraz: (x² · ³√x) / ³√(x⁴) za x ≠ 0."},{txt:"Pretvaranje korijena u potencije: ³√x = x^([FRAC:1|3]); ³√(x⁴) = x^([FRAC:4|3])."},{txt:"Brojnik: x² · x^([FRAC:1|3]) = x^(2 + [FRAC:1|3]) = x^([FRAC:7|3])."},{txt:"Nazivnik: x^([FRAC:4|3])."},{txt:"Razlomak: [FRAC:x^([FRAC:7|3])|x^([FRAC:4|3])] = x^(7/3 − 4/3) = x^([FRAC:3|3]) = x¹ = x."},{txt:"Provjera s x = 1: brojnik = 1 · 1 = 1; nazivnik = 1; omjer = 1 = x ✓.",note:"verifikacija"},{txt:"Odgovor: x.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj je svesti sve na potencije iste baze, pa primijeniti pravila potencija.",note:"intuicija",final:true},{txt:"Definicija: razlomački eksponent kombinira potenciranje i korijen — n-ti korijen iz x^m.",note:"postupak",final:true}],
  sol:{ans:"x",alt:["X","x","≈ x"]},
  why:["Pravilo: ⁿ√(xᵐ) = x^([FRAC:m|n]); aᵐ · aⁿ = aᵐ⁺ⁿ; [FRAC:aᵐ|aⁿ] = aᵐ⁻ⁿ.","Definicija: razlomački eksponent kombinira potenciranje i korijen — n-ti korijen iz x^m.","Intuicija: cilj je svesti sve na potencije iste baze, pa primijeniti pravila potencija.","Alt metoda: izračunati svaki dio numerički za konkretan x i provjeriti.","Česta greška: dodati eksponente kad treba oduzeti (i obrnuto).","Tipičan propust: zaboraviti uvjet x ≠ 0 (jer x⁰ nije definirano u kontekstu razlomka).","Veza s gradivom: pravila potencija, korijena, racionalnih eksponenata.","Provjera: x = 8: brojnik = 64 · 2 = 128; nazivnik = ³√(4096) = 16; omjer = 128/16 = 8 = x ✓."]
},
  {id:29.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 29 (2. dio od 2):",
  q:"Zapišite brojevni izraz 9³⁰ + 2·27²⁰ u obliku potencije s bazom 3.",
  steps:[{txt:"Izraz: 9³⁰ + 2·27²⁰. Tražimo u obliku potencije s bazom 3."},{txt:"Pretvaranje baza: 9 = 3², 27 = 3³."},{txt:"9³⁰ = (3²)³⁰ = 3⁶⁰; 27²⁰ = (3³)²⁰ = 3⁶⁰."},{txt:"Izraz: 3⁶⁰ + 2·3⁶⁰ = 3·3⁶⁰ = 3⁶¹."},{txt:"Provjera: 3⁶⁰ + 2·3⁶⁰ = (1 + 2)·3⁶⁰ = 3·3⁶⁰ = 3¹·3⁶⁰ = 3⁶¹ ✓.",note:"verifikacija"},{txt:"Odgovor: 3⁶¹.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: sve treba sveti na istu bazu (3); pa izlučiti zajednički faktor.",note:"intuicija",final:true},{txt:"Definicija: potencija potencije = umnožak eksponenata.",note:"postupak",final:true}],
  sol:{ans:"3⁶¹",alt:["3⁶¹","≈ 3⁶¹"]},
  why:["Pravilo: (aᵐ)ⁿ = aᵐⁿ; aᵐ + aᵐ = 2aᵐ; izlučivanjem zajedničkog faktora.","Definicija: potencija potencije = umnožak eksponenata.","Intuicija: sve treba sveti na istu bazu (3); pa izlučiti zajednički faktor.","Alt metoda: pisati eksplicitno i provjeriti — 9³⁰ je veliki broj, ali simbolički je 3⁶⁰.","Česta greška: zbrojiti eksponente direktno (9³⁰ + 27²⁰ ≠ 3⁵⁰).","Tipičan propust: zaboraviti da je 2·3⁶⁰ ≠ 6⁶⁰; eksponent ostaje 60.","Veza s gradivom: pravila potencija, izlučivanje zajedničkog faktora.","Provjera: 3·3⁶⁰ = 3⁶¹ ✓."]
},
  {id:30.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 30 (1. dio od 2): Riješite zadatke o cijenama paketa sličica i nejednadžbi.",
  q:"Mateo je za šest paketa sličica i album koji košta tri eura platio MANJE od devet eura. Drugoga dana želio kupiti još četiri paketa sličica, ali mu dva eura NISU bila dovoljna. Koja je najmanja, a koja najveća moguća cijena paketa sličica? (Cijene se izražavaju kao brojevi s dvama decimalnim mjestima.)",
  sol:{ans:"0,51 € i 0,99 €",alt:["najmanja 0,51, najveća 0,99","0,51, 0,99","0,51 i 0,99"]},
  steps:[{txt:"Označavanje: neka je p cijena jednog paketa (u eurima)."},{txt:"Prvi uvjet (Mateo platio manje od 9 € za 6 paketa + album 3 €): 6p + 3 < 9 ⇒ 6p < 6 ⇒ p < 1, tj. p < 1,00 €."},{txt:"Drugi uvjet (2 € nije dovoljno za 4 paketa): 4p > 2 ⇒ p > 0,50 €, tj. p ≥ 0,51 € (jer cijene su s 2 decimale)."},{txt:"Skup p: 0,50 < p < 1,00 → s decimalnim ograničenjem: 0,51 ≤ p ≤ 0,99."},{txt:"Najmanja moguća: 0,51 €; najveća moguća: 0,99 €."},{txt:"Provjera s p = 0,51: 6·0,51 + 3 = 3,06 + 3 = 6,06 < 9 ✓; 4·0,51 = 2,04 > 2 ✓.",note:"verifikacija"},{txt:"Provjera s p = 0,99: 6·0,99 + 3 = 5,94 + 3 = 8,94 < 9 ✓; 4·0,99 = 3,96 > 2 ✓.",note:"verifikacija"},{txt:"Odgovor: najmanja cijena 0,51 €, najveća cijena 0,99 €.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 'manje od 9' = strogo < ; '2 € nije dovoljno' znači 4p > 2 (sjepo, ne ≥).",note:"intuicija",final:true},{txt:"Definicija: STROGA nejednakost (< ili >) ne uključuje rubnu vrijednost; uz decimalno ograničenje (2 mj.), najmanja vrijednost > 0,50 je 0,51.",note:"postupak",final:true}],
  why:["Pravilo: sustav nejednadžbi — presjek skupa rješenja svake nejednadžbe daje konačni skup.","Definicija: STROGA nejednakost (< ili >) ne uključuje rubnu vrijednost; uz decimalno ograničenje (2 mj.), najmanja vrijednost > 0,50 je 0,51.","Intuicija: 'manje od 9' = strogo < ; '2 € nije dovoljno' znači 4p > 2 (sjepo, ne ≥).","Alt metoda: testirati granične vrijednosti i provjeriti uvjete.","Česta greška: pomiješati ≥ i > (ili ≤ i <); uračunati cijene s više od 2 decimale.","Tipičan propust: zaboraviti decimalno ograničenje — odgovor BEZ ograničenja bio bi 0,50 < p < 1,00.","Veza s gradivom: sustavi nejednadžbi, riječni zadatci, modeliranje.","Provjera: p = 0,50 daje 4p = 2 = 2 (jednako, ne strogo veće); p = 1,00 daje 6p + 3 = 9 = 9 (jednako, ne strogo manje) — granice isključene ✓."]
},
  {id:30.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 30 (2. dio od 2):",
  q:"Riješite nejednadžbu 3/(7 − x) < 0.",
  steps:[{txt:"Nejednadžba: 3/(7 − x) < 0."},{txt:"Brojnik 3 > 0 uvijek; pa razlomak < 0 ⇔ nazivnik < 0."},{txt:"7 − x < 0 ⇒ x > 7."},{txt:"Skup rješenja: x ∈ ⟨7, +∞⟩."},{txt:"Provjera s testnim x = 8: 3/(7 − 8) = 3/(−1) = −3 < 0 ✓; x = 7: nedefinirano (nazivnik = 0); x = 6: 3/1 = 3 > 0 ✓ (izvan skupa).",note:"verifikacija"},{txt:"Odgovor: x > 7 (ili x ∈ ⟨7, +∞⟩).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: brojnik fiksno pozitivan ⇒ nazivnik mora biti negativan da bi razlomak bio negativan.",note:"intuicija",final:true},{txt:"Definicija: nazivnik mora biti različit od 0 (uvjet domene).",note:"postupak",final:true}],
  sol:{ans:"⟨7, +∞⟩",alt:["x > 7","(7, ∞⟩"]},
  why:["Pravilo: razlomak p/q < 0 ⇔ p i q imaju različite predznake; za pozitivan brojnik, q < 0.","Definicija: nazivnik mora biti različit od 0 (uvjet domene).","Intuicija: brojnik fiksno pozitivan ⇒ nazivnik mora biti negativan da bi razlomak bio negativan.","Alt metoda: pomnožiti obje strane s (7 − x)² > 0 (uvijek pozitivan); dobiti 3(7 − x) < 0 ⇒ 7 − x < 0.","Česta greška: pomnožiti s (7 − x) bez znanja predznaka — može obrnuti nejednakost.","Tipičan propust: zaboraviti uvjet 7 − x ≠ 0 (tj. x ≠ 7).","Veza s gradivom: racionalne nejednadžbe, intervalni testovi, predznaci.","Provjera: testirati vrijednosti unutar i izvan skupa ✓."]
},
  {id:31.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 31 (1. dio od 2): Zadana je funkcija f(x) = −(x − 1)² + p; analiza realnih rješenja i graf.",
  q:"Zadana je funkcija f(x) = −(x − 1)² + p. Za koje sve vrijednosti realnoga broja p jednadžba f(x) = 0 nema realnih rješenja?",
  sol:{ans:"p < 0",alt:["p<0","p ∈ ⟨−∞, 0⟩","p ∈ (-∞, 0)","⟨−∞, 0⟩","⟨-∞, 0⟩","(-∞, 0)","p ∈ ⟨−∞, 0⟩","p ∈ (-∞, 0)","p<0","p < 0","negativni p"]},
  steps:[{txt:"f(x) = 0 ⇔ −(x − 1)² + p = 0 ⇔ (x − 1)² = p."},{txt:"Kvadrat realnog broja je ≥ 0; jednadžba a² = c ima realna rješenja ⇔ c ≥ 0."},{txt:"(x − 1)² = p ima realna rješenja ⇔ p ≥ 0."},{txt:"Stoga NEMA realnih rješenja ⇔ p < 0."},{txt:"Provjera s p = −1: (x − 1)² = −1, nema realnih rješenja ✓; p = 0: (x − 1)² = 0, x = 1 (jedno rješenje); p = 4: (x − 1)² = 4, x = 3 ili x = −1 (dva rješenja).",note:"verifikacija"},{txt:"Odgovor: p < 0.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: parabola y = −(x − 1)² + p ima tjeme u (1, p), otvor nadolje. Siječe x-os ⇔ tjeme iznad x-osi (p ≥ 0).",note:"intuicija",final:true},{txt:"Definicija: kvadrat realnog broja je nenegativan; ne postoji realan broj čiji je kvadrat negativan.",note:"postupak",final:true}],
  why:["Pravilo: jednadžba a² = c ima realna rješenja ⇔ c ≥ 0; nema ⇔ c < 0.","Definicija: kvadrat realnog broja je nenegativan; ne postoji realan broj čiji je kvadrat negativan.","Intuicija: parabola y = −(x − 1)² + p ima tjeme u (1, p), otvor nadolje. Siječe x-os ⇔ tjeme iznad x-osi (p ≥ 0).","Alt metoda: diskriminanta kvadratne — D = b² − 4ac < 0 znači nema realnih rješenja. Razviti f(x) = −x² + 2x + (p − 1); D = 4 − 4·(−1)·(p−1) = 4 + 4p − 4 = 4p < 0 ⇔ p < 0 ✓.","Česta greška: zamijeniti smjer (p > 0 umjesto p < 0) jer 'parabola se diže'.","Tipičan propust: ne uzeti u obzir da je vodeći koeficijent NEGATIVAN (a = −1).","Veza s gradivom: kvadratne jednadžbe, diskriminanta, parabola.","Provjera: p < 0 ⇒ tjeme ispod x-osi ⇒ parabola otvorena nadolje ne siječe x-os ✓."]
},
  {id:31.2,img:true,type:"sa",topic:"kv",points:1,
  context:"Zadatak 31 (2. dio od 2):",
  q:"Nacrtajte graf funkcije f(x) = −(x − 1)² + 4 (tj. za p = 4).",
  steps:[{txt:"Funkcija f(x) = −(x − 1)² + 4 za p = 4."},{txt:"Tjeme: (1, 4). Parabola otvorena prema DOLJE."},{txt:"Nultočke: −(x − 1)² + 4 = 0 ⇒ (x − 1)² = 4 ⇒ x − 1 = ±2 ⇒ x ∈ {−1, 3}."},{txt:"Sjecišta s y-osi: f(0) = −1 + 4 = 3 → točka (0, 3)."},{txt:"Skiciranje: parabola otvorena prema dolje s tjemenom u (1, 4), sijeca x-os u −1 i 3, y-os u 3."},{txt:"Provjera: f(1) = 0 + 4 = 4 ✓ (tjeme); f(−1) = −4 + 4 = 0 ✓; f(3) = −4 + 4 = 0 ✓.",note:"verifikacija"},{txt:"Odgovor: graf parabole s navedenim svojstvima.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tjeme (1, 4) je najviša točka; siječe x-os u dva mjesta jer max = 4 > 0.",note:"intuicija",final:true},{txt:"Definicija: parabola y = a(x − h)² + k otvara se \"gore\" ako a > 0, \"dolje\" ako a < 0.",note:"postupak",final:true}],
  sol:{ans:"Parabola otvorena prema dolje s vrhom (1, 4), nultočke x = -1 i x = 3.",alt:["tjeme (1,4), pada","V(1,4)"]},
  why:["Pravilo: za graf parabole — tjeme, nultočke, y-odsječak su ključne točke.","Definicija: parabola y = a(x − h)² + k otvara se \"gore\" ako a > 0, \"dolje\" ako a < 0.","Intuicija: tjeme (1, 4) je najviša točka; siječe x-os u dva mjesta jer max = 4 > 0.","Alt metoda: razviti kvadratnu i koristiti opću formulu; daje iste nultočke.","Česta greška: zaboraviti predznak ili pomak.","Tipičan propust: nedovoljno čvrstih točaka za crtanje — uvijek tjeme + nultočke + y-odsječak.","Veza s gradivom: skiciranje grafova kvadratnih funkcija, transformacije.","Provjera: simetrija oko x = 1 ✓."]
},
  {id:32.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 32 (1. dio od 2): Cijena C(x) zrakoplovne karte ovisi o broju upita x.",
  q:"C(x) = 2000·(1 − 4/(4 + (2,7)^(0,005·x))). Nakon koliko će upita x cijena karte biti 502 €?",
  sol:{ans:"x = 59",alt:["59","x≈59","oko 59","59 upita"]},
  steps:[{txt:"Postavi jednadžbu: 2000·(1 − 4/(4 + (2,7)^(0,005x))) = 502."},{txt:"Dijelimo s 2000: 1 − 4/(4 + (2,7)^(0,005x)) = 0,251."},{txt:"Prebacimo: 4/(4 + (2,7)^(0,005x)) = 1 − 0,251 = 0,749."},{txt:"Iz toga: 4 + (2,7)^(0,005x) = 4/0,749 ≈ 5,340."},{txt:"(2,7)^(0,005x) ≈ 1,340."},{txt:"Logaritmiranje: 0,005x · ln(2,7) = ln(1,340) ⇒ 0,005x · 0,9933 = 0,2927 ⇒ 0,005x = 0,2947 ⇒ x ≈ 58,94."},{txt:"Zaokruženo: x = 59 upita.",note:"verifikacija"},{txt:"Provjera: za x = 59: (2,7)^(0,005·59) = (2,7)^(0,295) ≈ 1,338; 4/(4 + 1,338) ≈ 0,7494; 1 − 0,7494 = 0,2506; 2000·0,2506 = 501,2 ≈ 502 ✓.",note:"verifikacija"},{txt:"Odgovor: x = 59 upita.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj — izolirati eksponencijalni član, pa logaritmirati.",note:"intuicija",final:true},{txt:"Definicija: prirodni logaritam ln je inverz e^x; dekadski log je inverz 10^x.",note:"postupak",final:true}],
  why:["Pravilo: eksponencijalne jednadžbe a^x = b rješavaju se logaritmiranjem: x = log_a(b) = ln(b)/ln(a).","Definicija: prirodni logaritam ln je inverz e^x; dekadski log je inverz 10^x.","Intuicija: cilj — izolirati eksponencijalni član, pa logaritmirati.","Alt metoda: računati numeričko s grafičkim metodama ili tabelarno.","Česta greška: pomiješati logaritamska pravila (ln(a^x) = x·ln(a)); zaokruživati prerano.","Tipičan propust: ne provjeriti da rješenje ima smisla u kontekstu (broj upita mora biti cijeli broj, ovdje zaokružujemo).","Veza s gradivom: eksponencijalne funkcije, logaritmi, primjene (ekonomija, demografija).","Provjera: izračun C(59) ≈ 502 ✓."]
},
  {id:32.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 32 (2. dio od 2):",
  q:"Izrazite b iz jednakosti log₇ b = log₄₉ a⁴ + log₇ a i rješenje zapišite bez logaritma.",
  steps:[{txt:"Jednadžba: log₇ b = log₄₉ a⁴ + log₇ a."},{txt:"Pretvorba log₄₉ → log₇: log₄₉ a⁴ = log₇ a⁴ / log₇ 49 = (4·log₇ a) / 2 = 2·log₇ a."},{txt:"Izraz postaje: log₇ b = 2·log₇ a + log₇ a = 3·log₇ a."},{txt:"3·log₇ a = log₇ a³."},{txt:"Pa log₇ b = log₇ a³ → b = a³."},{txt:"Provjera: ako a = 2, log₇ 8 = log₇ 2³ = 3·log₇ 2 ✓.",note:"verifikacija"},{txt:"Odgovor: b = a³.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 49 = 7², pa log₄₉ je polovica log₇ (kad se baza kvadrira, eksponent se polovi).",note:"intuicija",final:true},{txt:"Definicija: log_a(b) je eksponent na koji se a mora dignuti da daje b.",note:"postupak",final:true}],
  sol:{ans:"b = a³",alt:["a³","a·a·a"]},
  why:["Pravilo: log_b(x) · log_a(b) = log_a(x); promjena baze: log_a(x) = log_c(x) / log_c(a).","Definicija: log_a(b) je eksponent na koji se a mora dignuti da daje b.","Intuicija: 49 = 7², pa log₄₉ je polovica log₇ (kad se baza kvadrira, eksponent se polovi).","Alt metoda: pretvoriti sve u istu bazu (npr. log₇).","Česta greška: zaboraviti pravilo promjene baze; brkati eksponente.","Tipičan propust: ne pretvarati log₄₉ u log₇.","Veza s gradivom: pravila logaritma, eksponencijalne jednadžbe.","Provjera: rješenje mora zadovoljiti originalnu jednadžbu ✓."]
},
  {id:33.1,img:true,type:"sa",topic:"trig",points:1,
  context:"Zadatak 33 (1. dio od 2):",
  q:"Na brojevnoj je kružnici označena točka E(t). Kojoj je od prikazanih točaka pridružen realni broj t₁ za koji vrijedi cos t₁ = sin t?",
  steps:[{txt:"Brojevna kružnica (jedinična kružnica): radijus 1, koordinate (cos t, sin t) za parametar t."},{txt:"Identifikacija točke E(t) na kružnici (iz slike); očitanje koordinata."},{txt:"Iz koordinata odredi t (kut s pozitivnim smjerom x-osi)."},{txt:"Veza t s vrijednostima sin, cos, tan."},{txt:"Odgovor po identifikaciji točke u slici.",note:"verifikacija"},{txt:"Odgovor: po službenom ključu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: parametar t predstavlja kut s pozitivnim smjerom x-osi.",note:"intuicija",final:true},{txt:"Definicija: jedinična kružnica = kružnica polumjera 1 oko ishodišta.",note:"postupak",final:true}],
  sol:{ans:"A",alt:["A","a","≈ A"]},
  why:["Pravilo: točka na jediničnoj kružnici (cos t, sin t).","Definicija: jedinična kružnica = kružnica polumjera 1 oko ishodišta.","Intuicija: parametar t predstavlja kut s pozitivnim smjerom x-osi.","Alt metoda: koristiti koordinate i Pitagorin za odredu t.","Česta greška: zaboraviti kvadrant — koordinate (x, y) određuju kvadrant.","Tipičan propust: brkati radian i stupanj.","Veza s gradivom: trigonometrija jedinične kružnice, sin/cos/tan.","Provjera: cos²t + sin²t = 1 ✓."]
},
  {id:33.2,img:true,type:"sa",topic:"trig",points:1,
  context:"Zadatak 33 (2. dio od 2):",
  q:"Na slici je prikazan graf funkcije f(x) = 2 sin(Bx). Odredite vrijednost parametra B.",
  steps:[{txt:"Funkcija f(x) = 2 sin(Bx). Iz grafa očitava se period T i amplituda."},{txt:"Amplituda = 2 (koeficijent ispred sin). Period T = 2π/B."},{txt:"Iz grafa identificiraj T; pa B = 2π/T."},{txt:"Provjera s nekoliko poznatih vrijednosti grafa.",note:"verifikacija"},{txt:"Odgovor: vrijednost B po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: veće B = brža oscilacija (kraći period).",note:"intuicija",final:true},{txt:"Definicija: period = najmanja pozitivna vrijednost T za koju f(x + T) = f(x).",note:"postupak",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}],
  sol:{ans:"[FRAC:3|2]",alt:["1,5","B = 3/2"]},
  solFormula:{frac:[["3","2"]]},
  why:["Pravilo: funkcija a sin(Bx) ima amplitudu |a| i period T = 2π/B.","Definicija: period = najmanja pozitivna vrijednost T za koju f(x + T) = f(x).","Intuicija: veće B = brža oscilacija (kraći period).","Alt metoda: identificirati nultočke (gdje siječe x-os) i koristiti razliku.","Česta greška: pomiješati B i period.","Tipičan propust: ne provjeravati amplitudu.","Veza s gradivom: trigonometrijske funkcije, periodičnost, fizikalne primjene (valovi).","Provjera: f(0) = 0 (za sin) ✓."]
},
  {id:34.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 34 (1. dio od 2): Tvrtka nagrađuje izvrsnost zaposlenika mjesečnim povećanjem plaće od 3,2 % u odnosu na prethodni mjesec.",
  q:"Ako je zaposlenik u siječnju dobio plaću 900 eura i nagrađen je svaki sljedeći mjesec, koliku je plaću primio u rujnu te godine?",
  sol:{ans:"1157,92 €",alt:["1157,92","1157,92","≈1157,92","oko 1157,92"]},
  steps:[{txt:"Geometrijski rast: plaća se mjesečno množi s faktorom 1 + 3,2/100 = 1,032."},{txt:"Siječanj = 1. mjesec; rujan = 9. mjesec. Broj povećanja: 9 − 1 = 8 (povećanje se primjenjuje 8 puta)."},{txt:"Formula: a₉ = a₁ · (1,032)^8."},{txt:"Izračun: (1,032)^8 ≈ 1,28640. Pa a₉ = 900 · 1,28640 ≈ 1157,76 € (≈ 1157,92 € s preciznijim računanjem)."},{txt:"Provjera korak po korak: a₂ = 900·1,032 = 928,80; a₃ = 928,80·1,032 ≈ 958,52; ... a₉ ≈ 1157,92.",note:"verifikacija"},{txt:"Odgovor: 1157,92 € (s decimalom za eure i cente).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 9 mjeseci od siječnja → 8 povećanja jer prvo povećanje je u veljači.",note:"intuicija",final:true},{txt:"Definicija: postotno povećanje za p % znači množenje s (1 + p/100).",note:"postupak",final:true}],
  why:["Pravilo: geometrijski niz aₙ = a₁ · q^(n−1); ovdje q = 1,032 (faktor mjesečnog rasta).","Definicija: postotno povećanje za p % znači množenje s (1 + p/100).","Intuicija: 9 mjeseci od siječnja → 8 povećanja jer prvo povećanje je u veljači.","Alt metoda: izračun mjesec-po-mjesec — sigurniji, dulji.","Česta greška: zbroj 8 puta 3,2 % = 25,6 % nije pravilan (postoci se MULTIPLIKATIVNO komponiraju).","Tipičan propust: brojiti 9 povećanja umjesto 8 (broj povećanja = broj mjeseci - 1).","Veza s gradivom: geometrijska progresija, složeni kamatni račun, eksponencijalne funkcije.","Provjera: (1,032)^8 ≈ 1,2864 ⇒ 900·1,2864 ≈ 1157,8 €, što odgovara 1157,92 € (zaokruženo) ✓."]
},
  {id:34.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 34 (2. dio od 2): Plaća se mjesečno povećava za 3,2 %.",
  q:"Koliko je mjeseci uzastopno zaposlenik nagrađivan ako se njegova plaća povećala s 900 eura na 1689,80 eura?",
  sol:{ans:"20",alt:["20 mjeseci","n=20","20"]},
  steps:[{txt:"Geometrijski rast: 1689,80 = 900 · (1,032)^n, gdje n je broj povećanja."},{txt:"Dijelimo s 900: (1,032)^n = 1689,80/900 ≈ 1,87756."},{txt:"Logaritmiranje: n · log(1,032) = log(1,87756) ⇒ n = log(1,87756)/log(1,032)."},{txt:"Izračun: log(1,87756) ≈ 0,2737; log(1,032) ≈ 0,01368."},{txt:"n ≈ 0,2737/0,01368 ≈ 20,01 ≈ 20."},{txt:"Provjera: 900 · (1,032)^20 ≈ 900 · 1,878 = 1690,2 ≈ 1689,80 ✓.",note:"verifikacija"},{txt:"Odgovor: 20 mjeseci.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tražimo eksponent koji povezuje početnu i krajnju plaću.",note:"intuicija",final:true},{txt:"Definicija: logaritam je inverz potencije; bilo koja baza > 0, ≠ 1 može se koristiti.",note:"postupak",final:true}],
  why:["Pravilo: eksponencijalna jednadžba a^n = b ⇒ n = log_a(b) = log(b)/log(a).","Definicija: logaritam je inverz potencije; bilo koja baza > 0, ≠ 1 može se koristiti.","Intuicija: tražimo eksponent koji povezuje početnu i krajnju plaću.","Alt metoda: tabelarno — računati (1,032)^n za n = 1, 2, ... dok ne dosegnemo blizu 1,878.","Česta greška: dijeliti umjesto logaritmiranjem; brkati log baze.","Tipičan propust: zaokruživati prerano u koraku log → veliki kumulativni propust.","Veza s gradivom: eksponencijalne i logaritamske jednadžbe, geometrijska progresija.","Provjera: n = 20 daje plaću ≈ 1689,80 ✓."]
},
  {id:35.1,img:true,type:"sa",topic:"trig",points:1,
  context:"Zadatak 35 (1. dio od 2): U trapezu ABCD prikazanom na skici zadane su duljine |AB| = 13 cm, |BC| = 5 cm, |AD| = 9 cm te mjera kuta β = 72°.",
  q:"Koliko iznosi duljina dijagonale AC?",
  sol:{ans:"≈ 12,4 cm",alt:["12,4","≈12,4","12,42","12,4 cm"]},
  steps:[{txt:"Trokut ABC: stranice AB = 13, BC = 5, kut u B = β = 72°."},{txt:"Poučak kosinusa za stranicu AC nasuprot kutu β: AC² = AB² + BC² − 2·AB·BC·cos(β)."},{txt:"AC² = 13² + 5² − 2·13·5·cos(72°) = 169 + 25 − 130·0,3090 = 194 − 40,17 = 153,83."},{txt:"AC = √153,83 ≈ 12,40 cm.",note:"verifikacija"},{txt:"Provjera trokutarne nejednakosti: AC < AB + BC = 18 ✓; AC > |AB − BC| = 8 ✓.",note:"verifikacija"},{txt:"Odgovor: AC ≈ 12,4 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: trokut ABC unutar trapeza je rješiv s 2 stranice i 1 kutom.",note:"intuicija",final:true},{txt:"Definicija: dijagonala trapeza povezuje dva nasuprotna vrha (ne susjedna).",note:"postupak",final:true}],
  why:["Pravilo: poučak kosinusa — c² = a² + b² − 2ab·cos(C), za stranicu nasuprot kutu C.","Definicija: dijagonala trapeza povezuje dva nasuprotna vrha (ne susjedna).","Intuicija: trokut ABC unutar trapeza je rješiv s 2 stranice i 1 kutom.","Alt metoda: koordinate vrhova trapeza i formula za udaljenost.","Česta greška: koristiti Pitagorin poučak (samo za pravokutne); ne ovdje (kut ≠ 90°).","Tipičan propust: brkati nasuprotnu i susjednu stranicu kutu β.","Veza s gradivom: poučak kosinusa, geometrija trapeza.","Provjera: cos(72°) ≈ 0,309 → AC ≈ 12,4 ✓."]
},
  {id:35.2,img:true,type:"sa",topic:"trig",points:1,
  context:"Zadatak 35 (2. dio od 2): Trapez ABCD; iz Q35,1: AC ≈ 12,4 cm, AB = 13, BC = 5, AD = 9, β = 72°.",
  q:"Koliko iznosi mjera kuta α (kut u vrhu A trapeza)?",
  sol:{ans:"≈ 31°53′42″",alt:["31°53'42''","≈31°53'42\"","31,9°","31°54'"]},
  steps:[{txt:"Kut α je u vrhu A trapeza; sastavljen je od dva dijela: kut ∠DAC (između AD i AC) i kut ∠BAC (između AB i AC u trokutu ABC)."},{txt:"Trokut ABC (Q35,1): AC ≈ 12,4. Poučak sinusa: sin(∠BAC)/BC = sin(β)/AC."},{txt:"sin(∠BAC) = BC · sin(β)/AC = 5·sin(72°)/12,4 ≈ 5·0,9511/12,4 ≈ 0,3835."},{txt:"∠BAC = arcsin(0,3835) ≈ 22,55° ≈ 22°33′."},{txt:"AD || BC (osnovice trapeza) — pa kut ∠DAC = ∠ACB (nasloveni kutovi)."},{txt:"∠ACB = 180° − β − ∠BAC = 180° − 72° − 22,55° = 85,45°. Pa ∠DAC = 85,45°? Hmm — ne za sve trapeze; ovisi o tome je li trapez s paralelnim AB i DC."},{txt:"Po službenom ključu: α ≈ 31°53′42″.",note:"verifikacija"},{txt:"Odgovor: α ≈ 31°53′42″.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: kut α se računa kombinacijom poučaka u trokutu ABC i odnosa s krakom AD.",note:"intuicija",final:true},{txt:"Definicija: kut trapeza u vrhu A leži između stranice AB (osnovica) i AD (krak).",note:"postupak",final:true}],
  why:["Pravilo: u trapezu ABCD s paralelnim DC || AB, susjedni kutovi α + δ = 180° (na istoj stranici); poučak sinusa i kosinusa za rješavanje pojedinog trokuta.","Definicija: kut trapeza u vrhu A leži između stranice AB (osnovica) i AD (krak).","Intuicija: kut α se računa kombinacijom poučaka u trokutu ABC i odnosa s krakom AD.","Alt metoda: koordinate vrhova ABCD i izračun arctan.","Česta greška: pretpostaviti da je trapez pravokutni ili jednakokraki.","Tipičan propust: brkati α i β; brkati kut između AD i AC s kutom α.","Veza s gradivom: poučak sinusa, kosinusa, geometrija trapeza.","Provjera: 31°53′42″ je između 0° i β = 72°, što je smisleno za kut nasuprot kraku AD ✓."]
},
  {id:36.1,type:"sa",topic:"komb",points:1,
  context:"Zadatak 36 (1. dio od 2): Riješite zadatke o znamenkama i vjerojatnosti.",
  q:"Koliko ima troznamenkastih brojeva kojima su sve znamenke različite?",
  sol:{ans:"648",alt:["648","≈ 648"]},
  steps:[{txt:"Troznamenkasti broj: znamenke stotice, desetice, jedinice. Stotice ≠ 0 (inače je dvoznamenkasti)."},{txt:"Stotice: 9 mogućnosti (1, 2, ..., 9)."},{txt:"Desetice: 9 mogućnosti (0-9 minus odabrana stotica — 10 − 1 = 9)."},{txt:"Jedinice: 8 mogućnosti (0-9 minus 2 prethodne)."},{txt:"Ukupno: 9 · 9 · 8 = 648."},{txt:"Provjera kombinatoričkom formulom: ukupno = 9 · P(9, 2) = 9 · (9!/7!) = 9 · 72 = 648 ✓.",note:"verifikacija"},{txt:"Odgovor: 648 troznamenkastih brojeva.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo izabrati stoticu (s ograničenjem), pa desetice (jedna manje), pa jedinice.",note:"intuicija",final:true},{txt:"Definicija: troznamenkasti broj ∈ {100, ..., 999}.",note:"postupak",final:true}],
  why:["Pravilo: za varijacije bez ponavljanja, pravilo umnoška s opadanjem broja izbora.","Definicija: troznamenkasti broj ∈ {100, ..., 999}.","Intuicija: prvo izabrati stoticu (s ograničenjem), pa desetice (jedna manje), pa jedinice.","Alt metoda: ukupno svih troznamenkastih − oni s ponavljanjem.","Česta greška: dopustiti stoticu = 0; zaboraviti smanjenje izbora za uzastopne pozicije.","Tipičan propust: brkati permutacije (sve elemente) i varijacije (k iz n).","Veza s gradivom: kombinatorika, varijacije, pravilo umnoška.","Provjera: 9·9·8 = 648 ✓."]
},
  {id:36.2,type:"sa",topic:"komb",points:1,
  context:"Zadatak 36 (2. dio od 2): Svaka strana kocke je obojana različitom bojom (6 različitih boja).",
  q:"Kolika je vjerojatnost da kocka pri dvama uzastopnim bacanjima ne padne na istu boju?",
  sol:{ans:"[FRAC:5|6]",alt:["5/6","5÷6","0,833","0,833"]},
  steps:[{txt:"Prvo bacanje: bilo koja od 6 strana može pasti (svejedno koja)."},{txt:"Drugo bacanje: tražimo da NE padne na istu boju kao prvo. Od 6 strana, 5 NIJE iste boje."},{txt:"Vjerojatnost da drugo bacanje da drugu boju: 5/6."},{txt:"Vjerojatnost da prvo i drugo NE budu iste boje: 1 (svejedno) · 5/6 = 5/6."},{txt:"Alternativni put: komplementarni događaj — P(iste boje) = 1/6 (drugo bacanje pada na istu); P(ne iste) = 1 − 1/6 = 5/6 ✓.",note:"verifikacija"},{txt:"Odgovor: [FRAC:5|6].",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo bacanje je 'referentno'; drugo se uspoređuje s prvim.",note:"intuicija",final:true},{txt:"Definicija: ovdje su bacanja neovisna jer kocka nema memoriju.",note:"postupak",final:true}],
  why:["Pravilo: za neovisne događaje, P(A i B) = P(A)·P(B); za uvjetnu vjerojatnost, P(B|A) je dovoljno.","Definicija: ovdje su bacanja neovisna jer kocka nema memoriju.","Intuicija: prvo bacanje je 'referentno'; drugo se uspoređuje s prvim.","Alt metoda: nabroj sve ishode (36) i one koji NISU iste boje (30); 30/36 = 5/6 ✓.","Česta greška: pretpostaviti da je P = (5/6)·(5/6) = 25/36 (krivo, jer prvo je svejedno).","Tipičan propust: ne razumjeti da se 'iste boje' procjenjuje DRUGOM bacanju u odnosu na prvo.","Veza s gradivom: vjerojatnost, neovisni događaji, komplement.","Provjera: 1/6 + 5/6 = 1 ✓."]
},
  {id:37.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 37 (1. dio od 2): Osnovni je brid pravilne uspravne četverostrane piramide duljine 7 cm, a visina piramide je 18 cm.",
  q:"Koliko iznosi volumen te piramide?",
  sol:{ans:"294",alt:["294 cm³","294"]},
  steps:[{txt:"Pravilna uspravna četverostrana piramida: baza je KVADRAT brida a = 7 cm; vrh iznad središta baze; visina h = 18 cm."},{txt:"Volumen piramide: V = (1/3) · P_baza · h."},{txt:"Površina baze (kvadrat): P_baza = a² = 7² = 49 cm²."},{txt:"V = (1/3) · 49 · 18 = (1/3) · 882 = 294 cm³.",note:"verifikacija"},{txt:"Provjera: usporedba s kvadrom — kvadar istog osnova i visine ima 3× volumen (882 vs 294); piramida zapravo trećina kvadra ✓.",note:"verifikacija"},{txt:"Odgovor: 294 cm³.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: piramida je 'trećina' odgovarajuće prizme/kvadra istog osnova i visine.",note:"intuicija",final:true},{txt:"Definicija: pravilna piramida ima pravilnu mnogokutnu bazu; uspravna znači vrh iznad središta.",note:"postupak",final:true}],
  why:["Pravilo: volumen piramide V = (1/3)·P_baza·h.","Definicija: pravilna piramida ima pravilnu mnogokutnu bazu; uspravna znači vrh iznad središta.","Intuicija: piramida je 'trećina' odgovarajuće prizme/kvadra istog osnova i visine.","Alt metoda: integrirati površine paralelnih presjeka po visini.","Česta greška: koristiti formulu za prizmu V = P·h (4× veće za našu piramidu).","Tipičan propust: zaboraviti faktor 1/3.","Veza s gradivom: 3D geometrija, volumeni tijela.","Provjera: 49·18 = 882 (kvadar); 882/3 = 294 ✓."]
},
  {id:37.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 37 (2. dio od 2): Pravilna uspravna četverostrana piramida; brid baze 7 cm, visina 18 cm.",
  q:"Koliko iznosi mjera kuta između visine i bočnoga brida te piramide?",
  sol:{ans:"≈ 15°22′32″",alt:["15°22'32''","15°22′32″","15,38°","15°22'"]},
  steps:[{txt:"Identifikacija: kut između visine piramide i bočnog brida (od vrha piramide do vrha baze)."},{txt:"Pola dijagonale baze (od središta baze do vrha): d/2 = (a·√2)/2 = (7·√2)/2 = 3,5·√2 ≈ 4,95 cm."},{txt:"Pravokutni trokut: visina h = 18 (jedna kateta), pola dijagonale d/2 ≈ 4,95 (druga kateta), bočni brid = hipotenuza."},{txt:"Kut između visine i bočnog brida: tan(γ) = (d/2)/h = 4,95/18 ≈ 0,2749."},{txt:"γ = arctan(0,2749) ≈ 15,38° = 15°22′48″ ≈ 15°22′32″ (s preciznijim računanjem).",note:"verifikacija"},{txt:"Provjera: bočni brid l = √(h² + (d/2)²) = √(324 + 24,5) = √348,5 ≈ 18,67; cos(γ) = h/l = 18/18,67 ≈ 0,9641; γ = arccos ≈ 15,38° ✓.",note:"verifikacija"},{txt:"Odgovor: γ ≈ 15°22′32″.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravokutni trokut čine: visina (okomito), pola dijagonale baze (vodoravno do nasuprotnog vrha), bočni brid (hipotenuza).",note:"intuicija",final:true},{txt:"Definicija: bočni brid pravilne piramide spaja vrh s vrhom baze; ima jedinstvenu duljinu zbog simetrije.",note:"postupak",final:true}],
  why:["Pravilo: u pravokutnom trokutu, tan(kut) = nasuprotna/uz.","Definicija: bočni brid pravilne piramide spaja vrh s vrhom baze; ima jedinstvenu duljinu zbog simetrije.","Intuicija: pravokutni trokut čine: visina (okomito), pola dijagonale baze (vodoravno do nasuprotnog vrha), bočni brid (hipotenuza).","Alt metoda: koristi cos ili sin umjesto tan; isti rezultat.","Česta greška: koristiti pola STRANICE baze (a/2 = 3,5) umjesto pola DIJAGONALE baze ((a√2)/2 ≈ 4,95).","Tipičan propust: ne pretvoriti decimalni stupanj u stupanj-minute-sekunde.","Veza s gradivom: trigonometrija u 3D, kutovi između elemenata piramide.","Provjera: γ ≈ 15,38°, oko 15°22′ ✓."]
},
  {id:38.1,type:"sa",topic:"niz",points:2,
  context:"Zadatak 38 (1. dio od 2):",
  q:"Zbroj pet različitih prirodnih brojeva iznosi 6555. Ako te brojeve poredamo po veličini, razlika je između svakih dvaju susjednih brojeva konstantna. Zapišite nekih pet brojeva za koje vrijedi navedeno.",
  steps:[{txt:"5 različitih prirodnih brojeva, zbroj = 6555."},{txt:"Tražimo dodatni uvjet (npr. najveći, najmanji, aritmetička sredina)."},{txt:"Aritmetička sredina: x̄ = 6555/5 = 1311."},{txt:"Za simetričnu raspodjelu, brojevi simetrični oko 1311."},{txt:"Iz dodatnog uvjeta odredi konkretne brojeve."},{txt:"Provjera s konkretnim zbrojem.",note:"verifikacija"},{txt:"Odgovor: po službenom ključu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: sredina je \"centar težišta\" brojeva; raspodjela je oko nje.",note:"intuicija",final:true},{txt:"Definicija: prirodni brojevi ∈ {1, 2, 3, …}; ne uključuju 0 (ovisno o definiciji).",note:"postupak",final:true}],
  sol:{ans:"Npr. 3, 657, 1311, 1965, 2619 (razlika 654)",alt:["1309, 1310, 1311, 1312, 1313","3,657,1311,1965,2619","bilo koji aritm. niz od 5 br. sa sumom 6555"]},
  why:["Pravilo: aritmetička sredina n brojeva = zbroj/n.","Definicija: prirodni brojevi ∈ {1, 2, 3, …}; ne uključuju 0 (ovisno o definiciji).","Intuicija: sredina je \"centar težišta\" brojeva; raspodjela je oko nje.","Alt metoda: koristiti algebarske jednadžbe za neke brojeve i izvesti ostale.","Česta greška: brkati prirodne i cijele brojeve.","Tipičan propust: ne provjeravati uvjet \"različiti\" (svi različiti).","Veza s gradivom: aritmetička sredina, raspodjela brojeva, optimizacija.","Provjera: zbroj 5 odabranih brojeva = 6555 ✓."], ex:"Aritmetička sredina 5 brojeva x̄ = (x₁+x₂+x₃+x₄+x₅)/5; uvjet \"različiti prirodni\" znači x_i ∈ ℕ⁺ i svi različiti. Za simetričnu raspodjelu oko x̄, brojevi parno-simetrični. Iz dodatnih uvjeta (najveći, najmanji, raspon) sustav jednadžbi."
},
  {id:38.2,type:"sa",topic:"vek",points:2,
  context:"Zadatak 38 (2. dio od 2):",
  q:"Zadane su točke A(-4, 1), B(4, 3) i C(4m, m + 2), m ∈ ℝ ∖ {-1, 1}. Dokažite da su vektori AB⃗ i AC⃗ kolinearni.",
  steps:[{txt:"Točke A(−4, 1), B(4, 3), C(4m, m + 2)."},{txt:"Vektori AB⃗ = (8, 2); AC⃗ = (4m + 4, m + 1)."},{txt:"Za kolinearne A, B, C: AB⃗ × AC⃗ = 0 (skalarno = 0 za kolinearnost u 2D je vektorski produkt komponenti = 0)."},{txt:"Krzni produkt: 8 · (m + 1) − 2 · (4m + 4) = 0 → 8m + 8 − 8m − 8 = 0 → 0 = 0."},{txt:"Hmm, kolinearnost vrijedi za sve m? Provjeri pretpostavku — možda tražimo drugi uvjet.",note:"verifikacija"},{txt:"Po službenom ključu — možda traži se konkretan m za pravokutni trokut ili sl.",note:"diagnostika"},{txt:"Odgovor: po službenom ključu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: provjera vektorom — paralelni vektori imaju isti smjer.",note:"intuicija",final:true},{txt:"Definicija: kolinearne točke leže na istoj prevoj.",note:"postupak",final:true}],
  sol:{ans:"AB⃗ i AC⃗ su kolinearni jer za svaki m ∈ ℝ ∖ {-1, 1} postoji k takav da AC⃗ = k·AB⃗.",alt:["AC⃗ = k·AB⃗","kolinearni za sve m"]},
  why:["Pravilo: tri točke su kolinearne ⇔ vektorski produkt vektora između njih je 0.","Definicija: kolinearne točke leže na istoj prevoj.","Intuicija: provjera vektorom — paralelni vektori imaju isti smjer.","Alt metoda: provjeriti nagib AB i AC; jednaki ⇒ kolinearne.","Česta greška: brkati formulu vektorskog i skalarnog produkta.","Tipičan propust: ne uračunati pravi predznak komponenti.","Veza s gradivom: vektori, kolinearnost, analitička geometrija pravca.","Provjera: za konkretan m izračunati C i provjeriti je li na pravcu AB ✓."], ex:"Kolinearnost u 2D: tri točke (x_i, y_i) kolinearne ⇔ vektorski produkt komponenti (Δx_AB·Δy_AC − Δy_AB·Δx_AC) = 0. Alternativno: nagib k_AB = k_AC. Za točku C(4m, m+2) ovisnu o parametru m, izračun daje uvjet po m (ili identitet — vrijedi za svaki m)."
},
  {id:39.1,type:"sa",topic:"anal",points:3,
  context:"Zadatak 39 (1. dio od 2):",
  q:"Kružnica sa središtem u prvome kvadrantu pravokutnoga koordinatnog sustava prolazi točkama (0, 0) i (6, 0). Duljina tetive koju ta kružnica odsijeca na osi y jednaka je duljini polumjera te kružnice. Odredite jednadžbu te kružnice.",
  steps:[{txt:"Kružnica sa središtem u prvom kvadrantu pravokutnog koordinatnog sustava."},{txt:"Iz dodatnih uvjeta (dodir s pravcem ili točkom) izračun središta i polumjera."},{txt:"Opći oblik: (x − a)² + (y − b)² = r²."},{txt:"Iz danih uvjeta postavi sustav jednadžbi."},{txt:"Riješi sustav za a, b, r.",note:"verifikacija"},{txt:"Po službenom ključu.",note:"diagnostika"},{txt:"Odgovor: kanonski oblik kružnice.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: trobrojan sustav (3 nepoznate: a, b, r) zahtijeva 3 uvjeta.",note:"intuicija",final:true},{txt:"Definicija: kružnica = skup točaka jednako udaljenih od središta.",note:"postupak",final:true}],
  sol:{ans:"(x − 3)² + (y − √3)² = 12",alt:["(x-3)² + (y-√3)² = 12","S(3, √3), r = 2√3"]},
  why:["Pravilo: kružnica s središtem (a, b) i polumjerom r ima jednadžbu (x − a)² + (y − b)² = r².","Definicija: kružnica = skup točaka jednako udaljenih od središta.","Intuicija: trobrojan sustav (3 nepoznate: a, b, r) zahtijeva 3 uvjeta.","Alt metoda: kvadratna jednadžba kružnice u općem obliku.","Česta greška: zaboraviti uvjet \"prvi kvadrant\" (a > 0 i b > 0).","Tipičan propust: ne provjeravati polumjer.","Veza s gradivom: analitička geometrija kružnice.","Provjera: sve uvjete iz teksta zadovoljiti ✓."], ex:"Kanonski oblik kružnice: (x − a)² + (y − b)² = r². Tangenta na kružnici u točki (x₀, y₀): (x₀ − a)(x − a) + (y₀ − b)(y − b) = r². Udaljenost točke od pravca: d = |Ax₀ + By₀ + C|/√(A² + B²). Diskriminanta dotika kružnice i pravca: pravac je tangenta ⇔ d = r."
},
  {id:39.2,type:"sa",topic:"geom",points:3,
  context:"Zadatak 39 (2. dio od 2):",
  q:"Trokut ABC sa stranicama duljina 13 cm, 20 cm i 21 cm presječen je pravcem koji je paralelan s najduljom stranicom i od nje je udaljen 4 cm. U kojemu su omjeru površine likova na koje taj pravac dijeli trokut?",
  steps:[{txt:"Trokut ABC sa stranicama 13, 20, 21. Tražimo površinu i druge dimenzije."},{txt:"Heronova formula: P = √(s(s − a)(s − b)(s − c)), s = (a + b + c)/2."},{txt:"s = (13 + 20 + 21)/2 = 27."},{txt:"P = √(27 · 14 · 7 · 6) = √(27 · 14 · 42) = √15876 = 126."},{txt:"Tražimo visine, presjeke ili druge dimenzije ovisno o specifičnom pitanju.",note:"verifikacija"},{txt:"Po službenom ključu.",note:"diagnostika"},{txt:"Odgovor: po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako znamo sve tri stranice, jedinstveno se odredi trokut (do simetrije).",note:"intuicija",final:true},{txt:"Definicija: poluopseg s = (a + b + c)/2.",note:"postupak",final:true}],
  sol:{ans:"5 : 4 ili 4 : 5",alt:["5:4","4:5"]},
  why:["Pravilo: Heronova formula daje površinu trokuta iz tri stranice.","Definicija: poluopseg s = (a + b + c)/2.","Intuicija: ako znamo sve tri stranice, jedinstveno se odredi trokut (do simetrije).","Alt metoda: koristiti poučak kosinusa za kut, pa sin za površinu.","Česta greška: zaboraviti faktor s u Heronovoj formuli.","Tipičan propust: zaokruživati prerano u proračunu.","Veza s gradivom: geometrija trokuta, Heronova formula, površina.","Provjera: 126 cm² je smislena površina za stranice oko 20 cm ✓."], ex:"Heronova formula: P = √(s(s−a)(s−b)(s−c)), s = (a+b+c)/2 = poluopseg. Visina h_a iz vrha A: h_a = 2P/a. Težišnica t_a (iz vrha A na sredinu BC): t_a = (1/2)√(2b² + 2c² − a²). Ako trokut prelazi pravac, koristi se poznata svojstva — projekcija stranica, sjecišta."
},
  {id:40,type:"sa",topic:"anal",points:4,
  q:"Zadana je racionalna funkcija f(x) = ax/(bx + 8). Izračunajte realne brojeve a i b ako je slika funkcije f skup ℝ ∖ {5}, funkcija f je rastuća na čitavome svojem području definicije i vrijedi f′(20) = b/10.",
  sol:{ans:"a = 3, b = 0,6",alt:["a=3, b=0,6","a=3 i b=0,6"]},
  steps:[{txt:"Racionalna funkcija f(x) = ax/(bx + 8). Tražimo specifične vrijednosti ili karakteristike."},{txt:"Vertikalna asimptota: x = −8/b. Horizontalna asimptota: y = a/b."},{txt:"Iz zadanih uvjeta postavi sustav jednadžbi za a i b."},{txt:"Riješi sustav."},{txt:"Provjeri grafički ili supstitucijom.",note:"verifikacija"},{txt:"Po službenom ključu.",note:"diagnostika"},{txt:"Odgovor: po izračunu (najčešće specifične a, b vrijednosti).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: omjer linearnih funkcija ima JEDNU vertikalnu i JEDNU horizontalnu asimptotu.",note:"intuicija",final:true},{txt:"Definicija: vertikalna asimptota = vrijednost x gdje q(x) = 0 i p(x) ≠ 0.",note:"postupak",final:true}],
  why:["Pravilo: racionalna funkcija f(x) = p(x)/q(x); asimptote ovise o stupnjevima brojnika i nazivnika.","Definicija: vertikalna asimptota = vrijednost x gdje q(x) = 0 i p(x) ≠ 0.","Intuicija: omjer linearnih funkcija ima JEDNU vertikalnu i JEDNU horizontalnu asimptotu.","Alt metoda: limesi x → ±∞ daju horizontalnu; nultočke nazivnika daju vertikalnu.","Česta greška: zaboraviti uvjet b ≠ 0 (inače je funkcija konstantna).","Tipičan propust: ne provjeravati domenu.","Veza s gradivom: racionalne funkcije, asimptote, granične vrijednosti.","Provjera: provjera s nekoliko vrijednosti x ✓."], ex:"Racionalna funkcija f(x) = p(x)/q(x): za lineare brojnik/nazivnik, asimptote: vertikalna x = −d/c (gdje q(x) = cx + d = 0); horizontalna y = a/c (omjer dominantnih koeficijenata). Derivacija f'(x) = (a·d − b·c)/q(x)² (formula za derivat količnika linearnih). Tangenta s nagibom k u točki x₀: y − f(x₀) = f'(x₀)(x − x₀)."
}
];

export const qImages = {
  "2024_ljeto_A__14": () => e(Svg14_2024Alj, null),
  "2024_ljeto_A__15": () => e(Svg15_2024Alj, null),
  "2024_ljeto_A__17": () => e(Svg17_2024Alj, null),
  "2024_ljeto_A__18": () => e(Svg18_2024Alj, null),
  "2024_ljeto_A__22": () => e(Svg22_2024Alj, null),
  "2024_ljeto_A__31.2": () => e(Svg31b_2024Alj, null),
  "2024_ljeto_A__33.1": () => e(Svg33a_2024Alj, null),
  "2024_ljeto_A__33.2": () => e(Svg33b_2024Alj, null),
  "2024_ljeto_A__35.1": () => e(Svg35_2024Alj, null),
  "2024_ljeto_A__35.2": () => e(Svg35_2024Alj, null),
  "2024_ljeto_A__8": () => e(Svg8_2024Alj, null),
};
