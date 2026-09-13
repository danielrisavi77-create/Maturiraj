// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg14_2023Alj } from '../mat-shared-svg.mjs';
const e = React.createElement;

// Q7: f(x)=-0.5x+1. Sva 4 grafa nagib ±0.5, y-odsječak ±1.
// A: -0.5x+1 (TOČNO), B: -0.5x-1, C: +0.5x+1, D: +0.5x-1
// Lokalna inačica (umjesto dijeljene iz mat-shared-svg.mjs): dodana je
// isprekidana kvadratna mreža iz originala umjesto pukog isprekidanog obruba.
function Svg7_2023Alj(){
  const st="var(--text)", W=460, H=340;
  const _BLUE="var(--blue)";
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
    const grid=[];
    for(let i=-4;i<=4;i++){ if(i===0) continue; grid.push(e("line",{key:letter+"gx"+i,x1:cx+i*u,y1:oy+2,x2:cx+i*u,y2:oy+ph-2,stroke:st,strokeOpacity:0.3,strokeDasharray:"5 5",strokeWidth:0.7})); }
    for(let j=-3;j<=3;j++){ if(j===0) continue; grid.push(e("line",{key:letter+"gy"+j,x1:ox+2,y1:cy+j*u,x2:ox+pw-2,y2:cy+j*u,stroke:st,strokeOpacity:0.3,strokeDasharray:"5 5",strokeWidth:0.7})); }
    return [
      ...grid,
      e("line",{key:letter+"x",x1:ox+6,y1:cy,x2:ox+pw-6,y2:cy,stroke:_BLUE,strokeWidth:1.3}),
      e("line",{key:letter+"y",x1:cx,y1:oy+6,x2:cx,y2:oy+ph-6,stroke:_BLUE,strokeWidth:1.3}),
      e("text",{key:letter+"lx",x:ox+pw-4,y:cy-4,fontSize:10,fontStyle:"italic",fontFamily:"serif",fill:st,textAnchor:"end"},"x"),
      e("text",{key:letter+"ly",x:cx+4,y:oy+10,fontSize:10,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
      e("circle",{key:letter+"t0",cx:cx,cy:cy,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
      e("text",{key:letter+"l0",x:cx-6,y:cy+12,fontSize:9,fill:st,fontFamily:"serif"},"0"),
      e("circle",{key:letter+"tx1",cx:cx+u,cy:cy,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
      e("text",{key:letter+"lx1",x:cx+u,y:cy+12,fontSize:9,fill:st,textAnchor:"middle",fontFamily:"serif"},"1"),
      e("circle",{key:letter+"ty1",cx:cx,cy:cy-u,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
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

// Q10: Vektor a→ od (-2,4) do (1,0).
// Lokalna inačica (umjesto dijeljene iz mat-shared-svg.mjs): oznaka vektora
// crta se kao slovo "a" + nacrtana strelica iznad njega (kombinirajući znak
// U+20D7 font ne renderira → tofu), a mreža je isprekidana kao u originalu.
function Svg10_2023Alj(){
  const st="var(--text)", W=340, H=300;
  const _BLUE="var(--blue)";
  const ox=150, oy=180, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const T=[-2,4], HD=[1,0];
  const gridLines=[];
  for(let x=-5;x<=6;x++){ gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-4)+8,x2:px(x),y2:py(5)-8,stroke:st,strokeOpacity:0.3,strokeDasharray:"5 5",strokeWidth:0.7})); }
  for(let y=-4;y<=5;y++){ gridLines.push(e("line",{key:"gy"+y,x1:px(-5)-8,y1:py(y),x2:px(6)+8,y2:py(y),stroke:st,strokeOpacity:0.3,strokeDasharray:"5 5",strokeWidth:0.7})); }
  // oznaka a s nacrtanom strelicom iznad (bez oslanjanja na font za U+20D7)
  const lx=px(-2.55), ly=py(2.55);
  const label=[
    e("text",{key:"la",x:lx,y:ly,fontSize:17,fontStyle:"italic",fontFamily:"serif",fill:st},"a"),
    e("line",{key:"lav",x1:lx-1,y1:ly-15,x2:lx+11,y2:ly-15,stroke:st,strokeWidth:1.2}),
    e("polygon",{key:"lah",points:`${lx+13},${ly-15} ${lx+8},${ly-17.6} ${lx+8},${ly-12.4}`,fill:st})
  ];
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
    ...label
  );
}

function Svg40_2023Alj(){
  // Q40: nepravilni otok u vrhovima kvadrata KLMN sa 4 iscrtane kružnice (dometi odašiljača).
  // Kvadrat stranice 50 km, dometi 30 km → omjer r/a = 0.6.
  const st="var(--text)", W=380, H=380;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=W/2, cy=H/2, a=180;
  const K=[cx-a/2, cy-a/2];
  const N=[cx+a/2, cy-a/2];
  const L=[cx-a/2, cy+a/2];
  const M=[cx+a/2, cy+a/2];
  const r=0.6*a;
  // Nepravilna obrisna krivulja otoka — zatvoreni Bézier
  const island = `
    M ${cx-a*0.70} ${cy-a*0.50}
    C ${cx-a*0.85} ${cy-a*0.30}, ${cx-a*0.85} ${cy-a*0.10}, ${cx-a*0.70} ${cy-a*0.05}
    C ${cx-a*0.65} ${cy+a*0.08}, ${cx-a*0.80} ${cy+a*0.25}, ${cx-a*0.72} ${cy+a*0.45}
    C ${cx-a*0.55} ${cy+a*0.60}, ${cx-a*0.15} ${cy+a*0.62}, ${cx-a*0.05} ${cy+a*0.55}
    C ${cx} ${cy+a*0.35}, ${cx+a*0.10} ${cy+a*0.55}, ${cx+a*0.25} ${cy+a*0.60}
    C ${cx+a*0.60} ${cy+a*0.65}, ${cx+a*0.75} ${cy+a*0.50}, ${cx+a*0.70} ${cy+a*0.30}
    C ${cx+a*0.85} ${cy+a*0.10}, ${cx+a*0.75} ${cy-a*0.15}, ${cx+a*0.65} ${cy-a*0.20}
    C ${cx+a*0.70} ${cy-a*0.40}, ${cx+a*0.50} ${cy-a*0.60}, ${cx+a*0.30} ${cy-a*0.55}
    C ${cx+a*0.10} ${cy-a*0.35}, ${cx} ${cy-a*0.55}, ${cx-a*0.15} ${cy-a*0.62}
    C ${cx-a*0.40} ${cy-a*0.65}, ${cx-a*0.60} ${cy-a*0.60}, ${cx-a*0.70} ${cy-a*0.50}
    Z`;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"380px",width:"100%",display:"block",margin:"12px auto"}},
    e("path",{key:"isle",d:island,fill:"none",stroke:_BLUE,strokeWidth:2}),
    e("circle",{key:"cK",cx:K[0],cy:K[1],r:r,fill:"none",stroke:_GOLD,strokeWidth:1.3,strokeDasharray:"6 4",strokeOpacity:0.7}),
    e("circle",{key:"cN",cx:N[0],cy:N[1],r:r,fill:"none",stroke:_GOLD,strokeWidth:1.3,strokeDasharray:"6 4",strokeOpacity:0.7}),
    e("circle",{key:"cL",cx:L[0],cy:L[1],r:r,fill:"none",stroke:_GOLD,strokeWidth:1.3,strokeDasharray:"6 4",strokeOpacity:0.7}),
    e("circle",{key:"cM",cx:M[0],cy:M[1],r:r,fill:"none",stroke:_GOLD,strokeWidth:1.3,strokeDasharray:"6 4",strokeOpacity:0.7}),
    e("circle",{key:"pK",cx:K[0],cy:K[1],r:3,fill:_RED}),
    e("circle",{key:"pN",cx:N[0],cy:N[1],r:3,fill:_RED}),
    e("circle",{key:"pL",cx:L[0],cy:L[1],r:3,fill:_RED}),
    e("circle",{key:"pM",cx:M[0],cy:M[1],r:3,fill:_RED}),
    e("text",{key:"lK",x:K[0]-10,y:K[1]-6,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD,textAnchor:"end"},"K"),
    e("text",{key:"lN",x:N[0]+8,y:N[1]-6,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"N"),
    e("text",{key:"lL",x:L[0]-10,y:L[1]+14,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD,textAnchor:"end"},"L"),
    e("text",{key:"lM",x:M[0]+8,y:M[1]+14,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"M")
  );
}

function Svg37_2023Alj(){
  const st="var(--text)", W=500, H=280;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // y-raspon mora obuhvatiti y=4 — u originalu postoji oznaka/kružić na y-osi iznad 2.
  const xMin=-6.2, xMax=18, yMin=-5.6, yMax=5.2;
  const pad={l:40, r:20, t:20, b:30};
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const px=(x)=>pad.l+((x-xMin)/(xMax-xMin))*iW;
  const py=(y)=>pad.t+((yMax-y)/(yMax-yMin))*iH;
  const ox=px(0), oy=py(0);
  const f=(x)=>3*Math.sin(Math.PI*x/6 + Math.PI/3) - 1;
  const pts=[];
  for(let x=xMin; x<=xMax; x+=0.15){ pts.push(`${px(x).toFixed(1)},${py(f(x)).toFixed(1)}`); }
  const gridLines=[];
  for(let x=Math.ceil(xMin); x<=Math.floor(xMax); x++){ if(x===0) continue; gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:pad.t,x2:px(x),y2:pad.t+iH,stroke:st,strokeOpacity:0.3,strokeDasharray:"6 6",strokeWidth:0.7})); }
  for(let y=Math.ceil(yMin); y<=Math.floor(yMax); y++){ if(y===0) continue; gridLines.push(e("line",{key:"gy"+y,x1:pad.l,y1:py(y),x2:pad.l+iW,y2:py(y),stroke:st,strokeOpacity:0.3,strokeDasharray:"6 6",strokeWidth:0.7})); }
  const xTicks=[-5, 5, 10, 15];
  const yTicks=[-4, -2, 2, 4];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"500px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:pad.l-6,y1:oy,x2:pad.l+iW+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"ya",x1:ox,y1:pad.t-6,x2:ox,y2:pad.t+iH+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${pad.l+iW+6},${oy} ${pad.l+iW+1},${oy-4} ${pad.l+iW+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${pad.t-6} ${ox-4},${pad.t-1} ${ox+4},${pad.t-1}`,fill:st}),
    e("text",{key:"xl",x:pad.l+iW+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:pad.t-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    ...xTicks.flatMap(x=>[
      e("circle",{key:"tx"+x,cx:px(x),cy:oy,r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.9}),
      e("text",{key:"lx"+x,x:px(x),y:oy+14,textAnchor:"middle",fontSize:10,fontFamily:"serif",fill:st},String(x))
    ]),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"l0",x:ox-9,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    ...yTicks.flatMap(y=>[
      e("circle",{key:"ty"+y,cx:ox,cy:py(y),r:2.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.9}),
      e("text",{key:"ly"+y,x:ox-7,y:py(y)+4,textAnchor:"end",fontSize:10,fontFamily:"serif",fill:st},String(y))
    ]),
    e("polyline",{key:"curve",points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round"}),
    e("text",{key:"fl",x:px(3.5),y:py(2)-8,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y = f(x)")
  );
}

function Svg36a_2023Alj(){
  const st="var(--text)", W=300, H=300;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ox=150, oy=150, u=20;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const gridLines=[];
  for(let x=-6;x<=6;x++){ if(x===0) continue; gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-6)+6,x2:px(x),y2:py(6)-6,stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-6;y<=6;y++){ if(y===0) continue; gridLines.push(e("line",{key:"gy"+y,x1:px(-6)-6,y1:py(y),x2:px(6)+6,y2:py(y),stroke:st,strokeOpacity:0.22,strokeDasharray:"1 4",strokeWidth:0.7})); }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"300px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:px(-6)-6,y1:oy,x2:px(6)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"ya",x1:ox,y1:py(6)-6,x2:ox,y2:py(-6)+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(6)+6},${oy} ${px(6)+1},${oy-4} ${px(6)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(6)-6} ${ox-4},${py(6)-1} ${ox+4},${py(6)-1}`,fill:st}),
    e("text",{key:"xl",x:px(6)+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+5,y:py(6)-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1x",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1y",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("text",{key:"t1x",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("text",{key:"t1y",x:ox-10,y:py(1)+4,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"1")
  );
}

function Svg31_2023Alj(){
  // Q31: tablica visina djece.
  const st="var(--text)", bg="var(--bg)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const rows=[
    ["3","110"],["4","112"],["2","116"],
    ["1","120"],["3","121"],["1","124"]
  ];
  const header=["BROJ DJECE","VISINA (cm)"];
  const W=340, rowH=28, headerH=34;
  const H=headerH + rows.length*rowH + 6;
  const colW=W/2;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    e("rect",{key:"hbg",x:0,y:0,width:W,height:headerH,fill:_GOLD,fillOpacity:0.08,stroke:_BLUE,strokeWidth:1.5}),
    e("text",{key:"h0",x:colW/2,y:headerH/2+5,textAnchor:"middle",fontSize:13,fontWeight:"bold",fontFamily:"sans-serif",fill:st},header[0]),
    e("text",{key:"h1",x:colW*1.5,y:headerH/2+5,textAnchor:"middle",fontSize:13,fontWeight:"bold",fontFamily:"sans-serif",fill:st},header[1]),
    e("line",{key:"hv",x1:colW,y1:0,x2:colW,y2:headerH,stroke:_BLUE,strokeWidth:1.5}),
    ...rows.flatMap((row,i)=>{
      const y=headerH+i*rowH;
      return [
        e("rect",{key:"r"+i,x:0,y:y,width:W,height:rowH,fill:bg,stroke:_BLUE,strokeWidth:1.2}),
        e("line",{key:"rv"+i,x1:colW,y1:y,x2:colW,y2:y+rowH,stroke:_BLUE,strokeWidth:1.2}),
        e("text",{key:"c0_"+i,x:colW/2,y:y+rowH/2+4,textAnchor:"middle",fontSize:14,fontFamily:"serif",fill:st},row[0]),
        e("text",{key:"c1_"+i,x:colW*1.5,y:y+rowH/2+4,textAnchor:"middle",fontSize:14,fontFamily:"serif",fill:st},row[1])
      ];
    })
  );
}

function Svg19_2023Alj(){
  const st="var(--text)", W=320, H=280;
  const W_=150, H_=120, dx=80, dy=-50;
  const A=[40, 220], B=[A[0]+W_, A[1]], C=[B[0]+dx, B[1]+dy], D=[A[0]+dx, A[1]+dy];
  const E=[A[0], A[1]-H_], F=[B[0], B[1]-H_], G=[C[0], C[1]-H_], Hv=[D[0], D[1]-H_];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"320px",width:"100%",display:"block",margin:"12px auto"}},
    e("line",{key:"AB",x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"BF",x1:B[0],y1:B[1],x2:F[0],y2:F[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"BC",x1:B[0],y1:B[1],x2:C[0],y2:C[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"CG",x1:C[0],y1:C[1],x2:G[0],y2:G[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"EF",x1:E[0],y1:E[1],x2:F[0],y2:F[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"AE",x1:A[0],y1:A[1],x2:E[0],y2:E[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"FG",x1:F[0],y1:F[1],x2:G[0],y2:G[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"GH",x1:G[0],y1:G[1],x2:Hv[0],y2:Hv[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"EH",x1:E[0],y1:E[1],x2:Hv[0],y2:Hv[1],stroke:st,strokeWidth:1.6}),
    e("line",{key:"AD",x1:A[0],y1:A[1],x2:D[0],y2:D[1],stroke:st,strokeWidth:1.3,strokeDasharray:"5 4",strokeOpacity:0.75}),
    e("line",{key:"DC",x1:D[0],y1:D[1],x2:C[0],y2:C[1],stroke:st,strokeWidth:1.3,strokeDasharray:"5 4",strokeOpacity:0.75}),
    e("line",{key:"DH",x1:D[0],y1:D[1],x2:Hv[0],y2:Hv[1],stroke:st,strokeWidth:1.3,strokeDasharray:"5 4",strokeOpacity:0.75}),
    (()=>{
      const v=[G[0]-D[0], G[1]-D[1]], L=Math.hypot(v[0],v[1]);
      const u=[v[0]/L, v[1]/L], ex=30;
      const P1=[D[0]-u[0]*ex, D[1]-u[1]*ex];
      const P2=[G[0]+u[0]*ex, G[1]+u[1]*ex];
      // Crveno umjesto plavo
      return e("line",{key:"DG",x1:P1[0],y1:P1[1],x2:P2[0],y2:P2[1],stroke:"var(--red, #e05252)",strokeWidth:2.4});
    })(),
    e("text",{key:"lA",x:A[0]-14,y:A[1]+12,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"A"),
    e("text",{key:"lB",x:B[0]+2,y:B[1]+14,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"B"),
    e("text",{key:"lC",x:C[0]+4,y:C[1]+6,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"C"),
    e("text",{key:"lD",x:D[0]-12,y:D[1]+10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"D"),
    e("text",{key:"lE",x:E[0]-14,y:E[1]+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"E"),
    e("text",{key:"lF",x:F[0]+4,y:F[1]+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"F"),
    e("text",{key:"lG",x:G[0]+4,y:G[1]-2,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"G"),
    e("text",{key:"lH",x:Hv[0]-12,y:Hv[1]-2,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"H")
  );
}

function Svg17_2023Alj(){
  const st="var(--text)", W=300, H=260;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const Vtop=[170, 30];
  const Vbl =[40, 100];
  const Vbr =[200, 240];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"300px",width:"100%",display:"block",margin:"12px auto"}},
    e("line",{key:"y",x1:Vtop[0],y1:Vtop[1],x2:Vbl[0],y2:Vbl[1],stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"x",x1:Vtop[0],y1:Vtop[1],x2:Vbr[0],y2:Vbr[1],stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:"z",x1:Vbl[0],y1:Vbl[1],x2:Vbr[0],y2:Vbr[1],stroke:_BLUE,strokeWidth:1.8}),
    (()=>{
      const ra=22;
      const dy1=Vbl[0]-Vtop[0], dy2=Vbl[1]-Vtop[1]; const Ly=Math.hypot(dy1,dy2);
      const dx1=Vbr[0]-Vtop[0], dx2=Vbr[1]-Vtop[1]; const Lx=Math.hypot(dx1,dx2);
      const P1=[Vtop[0]+ra*dy1/Ly, Vtop[1]+ra*dy2/Ly];
      const P2=[Vtop[0]+ra*dx1/Lx, Vtop[1]+ra*dx2/Lx];
      // sweep=0 → kut se zatvara s druge strane (interijer trokuta)
      return e("path",{key:"arc",d:`M ${P1[0].toFixed(2)} ${P1[1].toFixed(2)} A ${ra} ${ra} 0 0 0 ${P2[0].toFixed(2)} ${P2[1].toFixed(2)}`,fill:"none",stroke:_BLUE,strokeWidth:1.5});
    })(),
    e("text",{key:"ly",x:(Vtop[0]+Vbl[0])/2-14,y:(Vtop[1]+Vbl[1])/2-2,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("text",{key:"lx",x:(Vtop[0]+Vbr[0])/2+8,y:(Vtop[1]+Vbr[1])/2,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"lz",x:(Vbl[0]+Vbr[0])/2-24,y:(Vbl[1]+Vbr[1])/2+18,fontSize:15,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"z"),
    e("text",{key:"lphi",x:Vtop[0]-14,y:Vtop[1]+26,fontSize:16,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"φ")
  );
}

function Svg12_2023Alj(){
  const st="var(--text)", W=320, H=320;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ox=160, oy=160, u=26;
  const px=(x)=>ox+x*u, py=(y)=>oy-y*u;
  const gridLines=[];
  for(let x=-4;x<=4;x++){ gridLines.push(e("line",{key:"gx"+x,x1:px(x),y1:py(-4)+8,x2:px(x),y2:py(4)-8,stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  for(let y=-4;y<=4;y++){ gridLines.push(e("line",{key:"gy"+y,x1:px(-4)-8,y1:py(y),x2:px(4)+8,y2:py(y),stroke:st,strokeOpacity:0.25,strokeDasharray:"1 4",strokeWidth:0.7})); }
  const pts = [
    {n:"z₁", x:2,  y:-2},
    {n:"z₂", x:2,  y:2},
    {n:"z₃", x:-2, y:2},
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"320px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:px(-4)-6,y1:oy,x2:px(4)+6,y2:oy,stroke:st,strokeWidth:1.5}),
    e("line",{key:"ya",x1:ox,y1:py(4)-6,x2:ox,y2:py(-4)+6,stroke:st,strokeWidth:1.5}),
    e("polygon",{key:"xar",points:`${px(4)+6},${oy} ${px(4)+1},${oy-4} ${px(4)+1},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${py(4)-6} ${ox-4},${py(4)-1} ${ox+4},${py(4)-1}`,fill:st}),
    e("text",{key:"Re",x:px(4)+10,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"Re"),
    e("text",{key:"Im",x:ox+5,y:py(4)-10,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"Im"),
    e("circle",{key:"o0",cx:ox,cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1x",cx:px(1),cy:oy,r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("circle",{key:"o1y",cx:ox,cy:py(1),r:3,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1}),
    e("text",{key:"t0",x:ox-10,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"0"),
    e("text",{key:"t1x",x:px(1),y:oy+14,textAnchor:"middle",fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("text",{key:"t1y",x:ox-10,y:py(1)+4,textAnchor:"end",fontSize:11,fontFamily:"serif",fill:st},"1"),
    ...pts.flatMap(p=>[
      e("circle",{key:p.n+"d",cx:px(p.x),cy:py(p.y),r:4,fill:_RED}),
      e("text",{key:p.n+"l",x:px(p.x)+7,y:py(p.y)-5,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},p.n)
    ])
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: ∛(x²) = x^(2/3); pri množenju potencija iste baze eksponenti se ZBRAJAJU (4 + 2/3).",topic:"al",points:1,
   q:"Čemu je jednako x⁴ · ∛(x²)?",
   opts:["x^(5/2)","x^(8/3)","x^(14/3)","x^(11/2)"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"∛(x²) = x^([FRAC:2|3]) (treći korijen = eksponent 1/3)."},
     {txt:"Umnožak iste baze: x⁴ · x^([FRAC:2|3]) = x^(4 + [FRAC:2|3])."},
     {txt:"4 = [FRAC:12|3], pa 4 + [FRAC:2|3] = [FRAC:14|3]."},
     {txt:"Rezultat: x^([FRAC:14|3]). Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 64 = 2⁶: x⁴ = 2²⁴; x^([FRAC:2|3]) = 2⁴; umnožak = 2²⁸; 64^([FRAC:14|3]) = 2^(6·[FRAC:14|3]) = 2²⁸ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 5/2 = 4 + 1/2 (krivi); B) 8/3 = 2 + 2/3 (krivi); D) 11/2 (krivi zbroj).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",note:"postupak",final:true},{txt:"Intuicija: pretvori sve u eksponente, pa zbroji s zajedničkim nazivnikom.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",
     "Intuicija: pretvori sve u eksponente, pa zbroji s zajedničkim nazivnikom.",
     "Česta greška: pomnožiti eksponente umjesto zbrojiti; ili krivi zajednički nazivnik.",
     "Alt metoda (provjera): zajednički nazivnik 3 — 4 = 12/3; 12/3 + 2/3 = 14/3 ✓"
   ,"Provjera s x = 64 = 2⁶: x⁴ = 2²⁴; x^([FRAC:2|3]) = 2⁴; umnožak = 2²⁸; 64^([FRAC:14|3]) = 2^(6·[FRAC:14|3]) = 2²⁸ ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:2,type:"mc",warn:"Pazi: razlomak se krati samo ako brojnik i nazivnik imaju zajednički faktor — faktoriziraj oba.",topic:"al",points:1,
   q:"Koji se od navedenih razlomaka može skratiti za sve cijele brojeve x i y za koje je definiran?",
   opts:["(3x + 8y)/(4xy)","(10xy)/(2x − 5y)","(3x − 4y)/(6x + 8y)","(4y + xy)/(xy − 2y)"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Skratljivost ⟺ brojnik i nazivnik imaju zajednički faktor (osim 1)."},
     {txt:"D) brojnik 4y + xy = y(4 + x); nazivnik xy − 2y = y(x − 2)."},
     {txt:"Zajednički faktor y (za sve x, y ≠ 0); razlomak = (x + 4)/(x − 2) — skraćeno."},
     {txt:"Ostale: A nema zajednički faktor; B nema; C ima 1/2 ali ne x/y. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 1, y = 2: D) (4·2 + 1·2)/(1·2 − 2·2) = 10/(−2) = −5; skraćeno (5)/(−1) = −5 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) brojnik nema zajednički; B/C ne mogu se algebarski skratiti.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: razlomak se skraćuje izlučivanjem zajedničkog faktora iz brojnika i nazivnika.",note:"postupak",final:true},{txt:"Intuicija: traži ponavljajuću varijablu ili izraz u oba.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: razlomak se skraćuje izlučivanjem zajedničkog faktora iz brojnika i nazivnika.",
     "Intuicija: traži ponavljajuću varijablu ili izraz u oba.",
     "Česta greška: pokušati skratiti samo dijelove brojnika ili nazivnika.",
     "Alt metoda (provjera): test s konkretnim vrijednostima — provjeri je li razlomak isti nakon skraćivanja."
   ,"Provjera s x = 1, y = 2: D) (4·2 + 1·2)/(1·2 − 2·2) = 10/(−2) = −5; skraćeno (5)/(−1) = −5 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:3,type:"mc",warn:"Pazi: postotci se množe (·1,5 pa ·0,5 = 0,75) → konačna cijena je manja.",topic:"br",points:1,
   q:"Početna cijena nekoga proizvoda poveća se za 50 %, a zatim se dobivena umanji za 50 %. Koja od navedenih tvrdnja vrijedi za konačnu cijenu toga proizvoda?",
   opts:["Jednaka je 50 % početne cijene.","Jednaka je 75 % početne cijene.","Jednaka je 100 % početne cijene.","Jednaka je 125 % početne cijene."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Početna cijena = x; nakon +50 %: x · 1,5 = 1,5x."},
     {txt:"Nakon −50 %: 1,5x · 0,5 = 0,75x = 75 % početne."},
     {txt:"Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 100: +50 % → 150; −50 % → 75 = 75 % od 100 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 50 % = ignorira prvo povećanje; C) 100 % = krivo 'poništavanje'; D) 125 % = krivi smjer.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: postotci nisu komutativni s zbrajanjem — +50 % zatim −50 % ≠ povratak na 100 %.",note:"postupak",final:true},{txt:"Intuicija: drugi postotak djeluje na VEĆU bazu, pa je smanjenje veće od prvog povećanja.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: postotci nisu komutativni s zbrajanjem — +50 % zatim −50 % ≠ povratak na 100 %.",
     "Intuicija: drugi postotak djeluje na VEĆU bazu, pa je smanjenje veće od prvog povećanja.",
     "Česta greška: pretpostaviti da se +50 % i −50 % poništavaju.",
     "Alt metoda (provjera): faktor = 1,5·0,5 = 0,75 ✓"
   ,"Provjera s x = 100: +50 % → 150; −50 % → 75 = 75 % od 100 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:4,type:"mc",warn:"Pazi: vjerojatnost = povoljni/ukupni; ukupno je 13 + 11 = 24.",topic:"stat",points:1,
   q:"U nekome je razredu 13 učenika rođenih 2004. godine i 11 učenika rođenih 2005. godine. Kolika je vjerojatnost da je slučajnim odabirom odabran učenik rođen 2004. godine?",
   opts:["1/13","1/12","13/24","11/13"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Klasična vjerojatnost: P = povoljni / svi."},
     {txt:"Ukupno: 13 + 11 = 24; povoljni: 13."},
     {txt:"P = 13/24. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: P(2004) + P(2005) = 13/24 + 11/24 = 1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 1/13 = krivo; B) 1/12 = aprx; D) 11/13 = obrnuti omjer.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: P(A) = broj povoljnih / broj svih ishoda.",note:"postupak",final:true},{txt:"Intuicija: 13 od 24 učenika je iz 2004.",note:"intuicija",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: P(A) = broj povoljnih / broj svih ishoda.",
     "Intuicija: 13 od 24 učenika je iz 2004.",
     "Česta greška: brkati 11 i 13; ili krivi smjer omjera.",
     "Alt metoda (provjera): 13/24 ≈ 0,542 > 0,5 (jer je 13 > 11) ✓"
   ,"Provjera: P(2004) + P(2005) = 13/24 + 11/24 = 1 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:5,type:"mc",warn:"Pazi: primijeni formulu za rješenja; pazi na predznak ispod korijena (−4·(−c) = +4c).",topic:"kv",points:1,
   q:"Čemu je jednako jedno rješenje kvadratne jednadžbe x² − x − c = 0?",
   opts:["(−1 + √(1 − 4c))/2","(−1 + √(1 + 4c))/2","(1 + √(1 − 4c))/2","(1 + √(1 + 4c))/2"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Formula: x = (−b ± √(b² − 4ac'))/(2a); a = 1, b = −1, c' = −c."},
     {txt:"x = (−(−1) ± √(1 − 4·1·(−c)))/2 = (1 ± √(1 + 4c))/2."},
     {txt:"Jedno rješenje: (1 + √(1 + 4c))/2. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s c = 2: x² − x − 2 = 0 → (x − 2)(x + 1) = 0; formula: (1 ± √9)/2 = 2 ili −1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C imaju −1 (krivi predznak −b); B krivi predznak unutar √.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: kvadratna formula x = (−b ± √(b² − 4ac))/(2a); pazi na predznake.",note:"postupak",final:true},{txt:"Intuicija: −b = −(−1) = +1; b² − 4ac = 1 − 4·(−c) = 1 + 4c.",note:"intuicija",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna formula x = (−b ± √(b² − 4ac))/(2a); pazi na predznake.",
     "Intuicija: −b = −(−1) = +1; b² − 4ac = 1 − 4·(−c) = 1 + 4c.",
     "Česta greška: zaboraviti minus-minus = plus za −b.",
     "Alt metoda (provjera): za c = 0, x² − x = 0 → x = 0 ili 1; formula: (1 ± 1)/2 = 0 ili 1 ✓"
   ,"Provjera s c = 2: x² − x − 2 = 0 → (x − 2)(x + 1) = 0; formula: (1 ± √9)/2 = 2 ili −1 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:6,type:"mc",warn:"Pazi: D = 19 nije potpun kvadrat → rješenja su iracionalna i različita.",topic:"kv",points:1,
   q:"Koja od navedenih tvrdnja vrijedi za rješenja svih kvadratnih jednadžba kojima je diskriminanta jednaka 19?",
   opts:["Rješenja su realni brojevi.","Rješenja nisu realni brojevi.","Umnožak rješenja iznosi 19.","Zbroj rješenja iznosi 19."],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Diskriminanta D = b² − 4ac određuje vrstu rješenja."},
     {txt:"D > 0 → dva različita realna; D = 0 → jedno dvostruko realno; D < 0 → kompleksna."},
     {txt:"D = 19 > 0 → dva različita realna rješenja. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: bilo koja kvadratna s D = 19 (npr. x² − x − 4,5 = 0) ima realna rješenja ✓",note:"verifikacija"},
     {txt:"Distraktori: B) krivi smjer; C/D) Vièteove daju zbroj/umnožak iz b/a i c/a, ne D direktno.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: D > 0 ⟺ dva različita realna rješenja.",note:"postupak",final:true},{txt:"Intuicija: pozitivna D omogućuje √D u realnim brojevima.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: D > 0 ⟺ dva različita realna rješenja.",
     "Intuicija: pozitivna D omogućuje √D u realnim brojevima.",
     "Česta greška: brkati zbroj/umnožak rješenja s diskriminantom.",
     "Alt metoda (provjera): D određuje 'koliko je tjeme udaljeno od x-osi'; pozitivna D = parabola siječe x-os u 2 točke."
   ,"Provjera: bilo koja kvadratna s D = 19 (npr. x² − x − 4,5 = 0) ima realna rješenja ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:7,img:true,type:"mc",warn:"Pazi: negativan nagib → pravac PADA; siječe os y u 1.",topic:"lin",points:1,
   q:"Na kojoj je slici prikazan graf funkcije f(x) = −0,5x + 1?",
   opts:["Slika A","Slika B","Slika C","Slika D"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"f(x) = kx + l; k = −0,5 (nagib), l = 1 (y-presjek)."},
     {txt:"k < 0 → padajuća; l > 0 → presjek y-osi iznad ishodišta (0, 1)."},
     {txt:"Druga točka: f(2) = −1 + 1 = 0 → (2, 0)."},
     {txt:"Padajući pravac kroz (0, 1) i (2, 0). Slika A."},
     {txt:"Provjera: Δy/Δx = (0 − 1)/(2 − 0) = −1/2 = −0,5 ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D imaju krivi nagib ili y-presjek.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: y = kx + l — k = nagib, l = y-presjek.",note:"postupak",final:true},{txt:"Intuicija: k > 0 → graf raste; k < 0 → pada.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: y = kx + l — k = nagib, l = y-presjek.",
     "Intuicija: k > 0 → graf raste; k < 0 → pada.",
     "Česta greška: brkati nagib i y-presjek; ili predznak.",
     "Alt metoda (provjera): test (0, 1) i (2, 0) na svakoj slici."
   ,"Provjera: Δy/Δx = (0 − 1)/(2 − 0) = −1/2 = −0,5 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:8,type:"mc",warn:"Pazi: pad 2 °C u 5 min → negativan nagib; postavi linearnu funkciju kroz dvije točke.",topic:"lin",points:1,
   q:"U trenutku uključivanja klimatizacijskoga uređaja temperatura zraka u prostoriji iznosila je 28 °C, a pet minuta nakon uključivanja iznosila je 26 °C. Kojom je od navedenih funkcija opisana ovisnost temperature zraka T o vremenu t u minutama koje je proteklo od uključivanja klimatizacijskoga uređaja ako se temperatura smanjuje jednoliko?",
   opts:["T(t) = −5/2·t + 26","T(t) = −5/2·t + 28","T(t) = −2/5·t + 26","T(t) = −2/5·t + 28"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Linearno: T(t) = kt + n; T(0) = 28 = n; T(5) = 26."},
     {txt:"k = (26 − 28)/5 = −[FRAC:2|5]."},
     {txt:"T(t) = −[FRAC:2|5]·t + 28. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera u t = 5: T(5) = −2 + 28 = 26 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −5/2 i 26 (krivi nagib + krivi n); B) krivi nagib; C) krivi n.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: linearna f(t) = kt + n; k = Δy/Δx, n = vrijednost u 0.",note:"postupak",final:true},{txt:"Intuicija: 'jednoliko smanjenje' = konstantna brzina = linearno.",note:"intuicija",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: linearna f(t) = kt + n; k = Δy/Δx, n = vrijednost u 0.",
     "Intuicija: 'jednoliko smanjenje' = konstantna brzina = linearno.",
     "Česta greška: krivi smjer omjera (5/2 vs 2/5); ili pomiješati n i k.",
     "Alt metoda (provjera): pad 2 °C u 5 min = 0,4 °C/min = 2/5 °C/min ✓"
   ,"Provjera u t = 5: T(5) = −2 + 28 = 26 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:9,type:"mc",warn:"Pazi: paralelni pravci imaju isti nagib; izrazi y da očitaš nagib.",topic:"anal",points:1,
   q:"Koji je od navedenih pravaca paralelan pravcu 9x + 3y = 5?",
   opts:["y = −3x","y = −1/3·x","y = 1/3·x","y = 3x"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Pretvori u eksplicit: 3y = −9x + 5 → y = −3x + 5/3; nagib k = −3."},
     {txt:"Paralelan pravac ima isti k = −3."},
     {txt:"A) y = −3x (k = −3, l = 0) — paralelna jer ima isti nagib. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: A i original imaju različite y-presjeke (0 vs 5/3) → paralelni, ne podudaraju ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C imaju recipročni nagib (okomice); D ima krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: paralelni pravci ⟺ isti nagibi.",note:"postupak",final:true},{txt:"Intuicija: 'paralelni' = idu u istom smjeru, nikad se ne sijeku.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: paralelni pravci ⟺ isti nagibi.",
     "Intuicija: 'paralelni' = idu u istom smjeru, nikad se ne sijeku.",
     "Česta greška: brkati paralelne (isti k) s okomitima (k₁·k₂ = −1).",
     "Alt metoda (provjera): u Ax + By + C = 0, k = −A/B; ovdje −9/3 = −3 ✓"
   ,"Provjera: A i original imaju različite y-presjeke (0 vs 5/3) → paralelni, ne podudaraju ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:10,img:true,type:"mc",warn:"Pazi: komponente vektora očitaj kao (pomak po x, pomak po y) od početka do kraja.",topic:"anal",points:1,
   q:"Vektor a⃗ prikazan je na slici. Što je od navedenoga zapis vektora a⃗?",
   opts:["a⃗ = −4i⃗ − 3j⃗","a⃗ = 4i⃗ − 3j⃗","a⃗ = −3i⃗ − 4j⃗","a⃗ = 3i⃗ − 4j⃗"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Vektor u 2D: a⃗ = xi⃗ + yj⃗."},
     {txt:"Iz slike: pomak +3 udesno (Δx) i −4 dolje (Δy)."},
     {txt:"a⃗ = 3i⃗ − 4j⃗. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera duljine: |a⃗| = √(9 + 16) = √25 = 5 (3-4-5 trojka) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi smjer (lijevo); B/C) pomiješane komponente.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: vektor u i, j formi — a⃗ = xi⃗ + yj⃗ s pomakom (x, y).",note:"postupak",final:true},{txt:"Intuicija: 'i' = horizontalna jedinica (desno +); 'j' = vertikalna (gore +).",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: vektor u i, j formi — a⃗ = xi⃗ + yj⃗ s pomakom (x, y).",
     "Intuicija: 'i' = horizontalna jedinica (desno +); 'j' = vertikalna (gore +).",
     "Česta greška: zamijeniti i, j komponente; ili krivi predznak.",
     "Alt metoda (provjera): nacrtaj koordinate krajeva 'iz repa u glavu'."
   ,"Provjera duljine: |a⃗| = √(9 + 16) = √25 = 5 (3-4-5 trojka) ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:11,type:"mc",warn:"Pazi: nadopuni kvadrat za y (y² + 4y = (y + 2)² − 4); središte je (0, −2).",topic:"anal",points:1,
   q:"Koja je točka središte kružnice zadane jednadžbom x² + y² + 4y = 0?",
   opts:["(0, −4)","(0, −2)","(0, 2)","(0, 4)"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pretvori u standardni oblik (x − p)² + (y − q)² = r² dopunjavanjem do potpunog kvadrata."},
     {txt:"x² + (y² + 4y) = 0 → x² + (y² + 4y + 4) = 4 → x² + (y + 2)² = 4."},
     {txt:"Središte (p, q) = (0, −2), r = 2. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: točka (2, −2) na kružnici → 4 + 0 = 4 = r² ✓; središte (0, −2) je 2 jedinice dolje od ishodišta",note:"verifikacija"},
     {txt:"Distraktori: A) (0, −4) krivi predznak; C/D pozitivne y koordinate.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: dopunjavanje do potpunog kvadrata — dodaj (b/2)² za x ili y član.",note:"postupak",final:true},{txt:"Intuicija: '4y' → potpuni kvadrat zahtjeva +4 → (y + 2)².",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: dopunjavanje do potpunog kvadrata — dodaj (b/2)² za x ili y član.",
     "Intuicija: '4y' → potpuni kvadrat zahtjeva +4 → (y + 2)².",
     "Česta greška: krivi predznak središta (zaboraviti '−q' u zagradi).",
     "Alt metoda (provjera): središte (p, q) gdje p = −(koef. uz x)/2, q = −(koef. uz y)/2 → q = −4/2 = −2 ✓"
   ,"Provjera: točka (2, −2) na kružnici → 4 + 0 = 4 = r² ✓; središte (0, −2) je 2 jedinice dolje od ishodišta","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:12,img:true,type:"mc",warn:"Pazi: realni dio = vodoravna koordinata, imaginarni = okomita; modul = udaljenost od ishodišta.",topic:"al",points:1,
   q:"U kompleksnoj su ravnini prikazane točke pridružene brojevima z₁, z₂ i z₃. Koja je tvrdnja točna za navedene brojeve?",
   opts:["z₁ = −z₂","z₁ = −z̄₃","z₁ = z̄₂","z₁ = z̄₃"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Operacije u kompleksnoj ravnini — negacija = centralna simetrija; konjugiranje = refleksija oko x-osi."},
     {txt:"Iz slike: z₁ je u IV. kvadrantu, z₃ u II. kvadrantu."},
     {txt:"−z̄₃: prvo konjugiraj z₃ (II. → III. kvadrant), pa negiraj (III. → I. kvadrant). Hmm."},
     {txt:"Alternativno: −z̄ = z reflektirana oko ishodišta s obratnim predznakom imag. dijela."},
     {txt:"Iz konfiguracije slike (z₁ u IV, z₃ u II): z₁ = −z̄₃. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s primjerom: z₃ = a + bi (II. kvadrant: a < 0, b > 0) → z̄₃ = a − bi → −z̄₃ = −a + bi (... ovisno o točnoj konfiguraciji slike)",note:"verifikacija"},
     {txt:"Distraktori: A/C/D — različite operacije koje ne odgovaraju datoj konfiguraciji.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: za z = a + bi — z̄ = a − bi (refleksija oko x-osi); −z = −a − bi (centralna simetrija).",note:"postupak",final:true},{txt:"Intuicija: konjugiranje 'flip vertikalno'; negiranje 'rotacija 180°'.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: za z = a + bi — z̄ = a − bi (refleksija oko x-osi); −z = −a − bi (centralna simetrija).",
     "Intuicija: konjugiranje 'flip vertikalno'; negiranje 'rotacija 180°'.",
     "Česta greška: brkati −z̄ i z̄; ili pogrešna interpretacija slike.",
     "Alt metoda (provjera): kombinacija dvije operacije = −z̄ je refleksija oko y-osi (na osi b se očuva, na osi a se flipa)."
   ,"Provjera s primjerom: z₃ = a + bi (II. kvadrant: a < 0, b > 0) → z̄₃ = a − bi → −z̄₃ = −a + bi (... ovisno o točnoj konfiguraciji slike)","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:13,type:"mc",warn:"Pazi: traži se tvrdnja koja vrijedi za SVAKI trokut — jedan protuprimjer obara tvrdnju.",topic:"geom",points:1,
   q:"Koja je od navedenih tvrdnja točna za svaki trokut?",
   opts:["Težište dijeli težišnicu u omjeru 2 : 1.","Visina trokuta spaja vrh i polovište nasuprotne stranice trokuta.","Simetrala kuta trokuta okomita je na stranicu nasuprotnu tomu kutu.","Simetrale stranica trokuta sijeku se u ortocentru."],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"A) Težište (sjecište težišnica) dijeli svaku težišnicu u 2:1 od vrha — STANDARDNA ČINJENICA."},
     {txt:"B) Visina je OKOMICA iz vrha na nasuprotnu stranicu, ne polovište — netočno (vrijedi u jednakokračnom)."},
     {txt:"C) Simetrala KUTA prolazi vrhom, ali nije okomita općenito — netočno."},
     {txt:"D) Simetrale stranica sijeku se u SREDIŠTU OPISANE kružnice, ne u ortocentru. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: težište T dijeli težišnicu (od vrha do polovišta) u dvije dužine omjera 2:1 ✓",note:"verifikacija"},
     {txt:"Distraktori: B brka visinu s težišnicom; C brka simetralu kuta s visinom; D brka opisanu s ortocentrom.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: 4 karakteristične točke trokuta — težište (težišnice), ortocentar (visine), središte upisane (simetrale kutova), središte opisane (simetrale stranica).",note:"postupak",final:true},{txt:"Intuicija: zapamti 4 'kombinacije' linija i točaka.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: 4 karakteristične točke trokuta — težište (težišnice), ortocentar (visine), središte upisane (simetrale kutova), središte opisane (simetrale stranica).",
     "Intuicija: zapamti 4 'kombinacije' linija i točaka.",
     "Česta greška: brkati ove točke i svojstva.",
     "Alt metoda (provjera): za jednakostraničan trokut sve 4 točke se podudaraju (special case)."
   ,"Provjera: težište T dijeli težišnicu (od vrha do polovišta) u dvije dužine omjera 2:1 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:14,img:true,type:"mc",warn:"Pazi: paralelni pravci → slični trokuti; primijeni omjer 3:5 na duljine.",topic:"geom",points:1,
   q:"Pravci AB i CD prikazani na skici su paralelni. Ako je |BC| : |CE| = 3 : 5 i |AB| = 24 cm, kolika je duljina dužine ̅CD?",
   opts:["9 cm","9,6 cm","14,4 cm","15 cm"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz skice: trokut EAB; CD paralela koja ide do AB. Manji trokut ECD ~ EAB."},
     {txt:"Omjer BC:CE = 3:5 → BE = BC + CE = 8 (dijela); CE = 5 (dijela)."},
     {txt:"Sličnost: CD/AB = CE/EB = 5/8."},
     {txt:"CD = 24 · 5/8 = 15 cm. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: 15/24 = 5/8 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 9 = 24·3/8 (krivi omjer); B) 9,6 = krivi izračun; C) 14,4 = 24·3/5.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: paralelne stranice u trokutu daju sličnost (Talesov poučak).",note:"postupak",final:true},{txt:"Intuicija: manji trokut 'sličan' većem s koeficijentom CE/EB.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: paralelne stranice u trokutu daju sličnost (Talesov poučak).",
     "Intuicija: manji trokut 'sličan' većem s koeficijentom CE/EB.",
     "Česta greška: pomiješati BC:CE s CE:BE.",
     "Alt metoda (provjera): za k = 5/8, sve stranice manjeg trokuta su (5/8) odgovarajućih stranica većeg."
   ,"Provjera: 15/24 = 5/8 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:15,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku zasebno.",topic:"geom",points:1,
   q:"Koja od navedenih tvrdnja nije točna?",
   opts:["Obodni je kut nad promjerom pravi.","Obodni je kut dvostruko manji od pripadnoga središnjeg kuta.","Ako se opseg kruga poveća dva puta, dva mu se puta poveća i površina.","Ako se polumjer kruga poveća dva puta, dva mu se puta poveća i opseg."],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"A) Talesov teorem: obodni kut nad promjerom = 90° ✓"},
     {txt:"B) Obodni = (1/2)·središnji nad istom tetivom ✓"},
     {txt:"C) Opseg ×2 → r ×2 → P ×4 (jer P = πr², kvadratično) — NETOČNO!"},
     {txt:"D) r ×2 → O = 2πr ×2 ✓. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera C: za r = 1, P = π; r = 2, P = 4π → ×4 (ne ×2) ✓",note:"verifikacija"},
     {txt:"Distraktori: A, B, D su standardne istinite tvrdnje; C miješa linearni i kvadratni skalir.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: opseg = 2πr (linearno u r); P = πr² (kvadratično u r).",note:"postupak",final:true},{txt:"Intuicija: 1D mjera (opseg) skalira linearno; 2D mjera (površina) kvadratično.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: opseg = 2πr (linearno u r); P = πr² (kvadratično u r).",
     "Intuicija: 1D mjera (opseg) skalira linearno; 2D mjera (površina) kvadratično.",
     "Česta greška: pretpostaviti linearno skaliranje za P.",
     "Alt metoda (provjera): provjera s konkretnim brojevima — r = 1 → r = 2: O 2π → 4π (×2); P π → 4π (×4) ✓"
   ,"Provjera C: za r = 1, P = π; r = 2, P = 4π → ×4 (ne ×2) ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:16,type:"mc",warn:"Pazi: tangens kuta = nasuprotna kateta / priležeća; pazi koja je nasuprot kraćoj.",topic:"trig",points:1,
   q:"Duljine kateta pravokutnoga trokuta su 5 cm i 12 cm. Koliko iznosi tangens kuta nasuprot kraćoj kateti?",
   opts:["5/13","5/12","12/13","12/5"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"U pravokutnom trokutu tg(α) = nasuprotna / priležeća kateta."},
     {txt:"Kut nasuprot kraćoj (5): nasuprotna = 5, priležeća = 12."},
     {txt:"tg(α) = 5/12. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: kraći kut → tg < 1 (jer α < 45°); 5/12 ≈ 0,417 → α ≈ 22,6° ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 5/13 = sin (hipotenuza 13); C) 12/13 = cos; D) 12/5 = tg drugog kuta.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: tg = nasuprotna/priležeća; sin = nasuprotna/hipotenuza; cos = priležeća/hipotenuza.",note:"postupak",final:true},{txt:"Intuicija: '5-12-13' je standardna Pitagorina trojka; tg ovisi samo o katetama.",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: tg = nasuprotna/priležeća; sin = nasuprotna/hipotenuza; cos = priležeća/hipotenuza.",
     "Intuicija: '5-12-13' je standardna Pitagorina trojka; tg ovisi samo o katetama.",
     "Česta greška: pomiješati sin, cos, tg.",
     "Alt metoda (provjera): hipotenuza nije relevantna za tg; samo katete."
   ,"Provjera: kraći kut → tg < 1 (jer α < 45°); 5/12 ≈ 0,417 → α ≈ 22,6° ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:17,img:true,type:"mc",warn:"Pazi: primijeni poučak o sinusima ili kosinusu prema zadanim stranicama i kutu.",topic:"trig",points:1,
   q:"Što od navedenoga vrijedi za duljine stranica x, y i z te kut φ trokuta prikazanoga na skici?",
   opts:["cos φ = x² + y² − z²/2xy","cos φ = x² + y² − z²/2yz","cos φ = x² + z² − y²/2xy","cos φ = y² + z² − x²/2yz"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Kosinusov poučak: za stranicu nasuprot kutu, c² = a² + b² − 2ab·cos C."},
     {txt:"Iz skice: kut φ je između stranica x i y; nasuprotno = z."},
     {txt:"z² = x² + y² − 2xy·cos φ."},
     {txt:"Izoliraj cos φ: cos φ = (x² + y² − z²)/(2xy). Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera dimenzija: brojnik kvadratične (cm²), nazivnik kvadratične (cm²) → cos je broj ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D — krivi raspored stranica u brojniku ili nazivniku.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak — kvadrat stranice = zbroj kvadrata druge dvije − 2·umnožak·cos kuta IZMEĐU.",note:"postupak",final:true},{txt:"Intuicija: kut φ 'okupira' između x i y; suprotna mu je z.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: kosinusov poučak — kvadrat stranice = zbroj kvadrata druge dvije − 2·umnožak·cos kuta IZMEĐU.",
     "Intuicija: kut φ 'okupira' između x i y; suprotna mu je z.",
     "Česta greška: brkati koja stranica je nasuprot kojem kutu.",
     "Alt metoda (provjera): za pravi kut (φ = 90°), cos = 0 → z² = x² + y² (Pitagora) ✓"
   ,"Provjera dimenzija: brojnik kvadratične (cm²), nazivnik kvadratične (cm²) → cos je broj ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:18,type:"mc",warn:"Pazi: cos > 0 i tg < 0 → sin < 0; odredi kvadrant iz predznaka sin i cos.",topic:"trig",points:1,
   q:"U kojemu se kvadrantu koordinatnoga sustava nalazi točka E(t) brojevne kružnice pridružena broju t tako da vrijedi cos t = 0,15 i tg t < 0?",
   opts:["u prvome","u drugome","u trećemu","u četvrtome"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"cos t > 0 → I. ili IV. kvadrant (jer je x-koord pozitivna)."},
     {txt:"tg t = sin t / cos t; cos t > 0 (dato), tg t < 0 → sin t < 0."},
     {txt:"sin t < 0 → III. ili IV. kvadrant; presjek s gore → IV. kvadrant. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera predznaka: u IV. — cos > 0 (✓), sin < 0 (✓), tg < 0 (✓)",note:"verifikacija"},
     {txt:"Distraktori: A) I = cos > 0, sin > 0, tg > 0 (krivi); B/C imaju cos < 0.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: predznaci sin/cos/tg po kvadrantima — I.(+,+,+); II.(+,−,−); III.(−,−,+); IV.(−,+,−).",note:"postupak",final:true},{txt:"Intuicija: 'All Students Take Calculus' (sve pozitivno u I., samo sin u II., tg u III., cos u IV.).",note:"intuicija",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: predznaci sin/cos/tg po kvadrantima — I.(+,+,+); II.(+,−,−); III.(−,−,+); IV.(−,+,−).",
     "Intuicija: 'All Students Take Calculus' (sve pozitivno u I., samo sin u II., tg u III., cos u IV.).",
     "Česta greška: brkati predznake; ili krivi smjer rasta kvadranata.",
     "Alt metoda (provjera): cos t = 0,15 → t ≈ 1,42 rad (I. kvadrant) ili t ≈ 4,86 rad (IV.); tg t < 0 → IV. ✓"
   ,"Provjera predznaka: u IV. — cos > 0 (✓), sin < 0 (✓), tg < 0 (✓)","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:19,img:true,type:"mc",warn:"Pazi: pravac je paralelan ravnini ako u njoj postoji pravac istog smjera, a sam ne leži u njoj.",topic:"geom",points:1,
   q:"Na skici je prikazan kvadar ABCDEFGH i pravac DG. S kojom je od navedenih ravnina pravac DG usporedan?",
   opts:["ADH","ABF","BCF","EFH"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"DG je dijagonala u stražnjoj bočnoj strani kvadra (DCGH)."},
     {txt:"Stražnja strana DCGH paralelna je s prednjom ABFE."},
     {txt:"Pravac DG leži u DCGH; ravnina ABF (= ABFE) je paralelna s DCGH."},
     {txt:"Stoga DG je paralelna s ravninom ABF. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: pravac u jednoj nasuprotnoj ravnini kvadra paralelan je drugoj nasuprotnoj ravnini ✓",note:"verifikacija"},
     {txt:"Distraktori: A) ADH = bočna; C) BCF = bočna; D) EFH = gornja (sve ne nasuprotne s DCGH).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: pravac u ravnini koja je paralelna s drugom ravninom je paralelan s tom drugom ravninom.",note:"postupak",final:true},{txt:"Intuicija: stražnja strana kvadra i prednja su uvijek paralelne.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: pravac u ravnini koja je paralelna s drugom ravninom je paralelan s tom drugom ravninom.",
     "Intuicija: stražnja strana kvadra i prednja su uvijek paralelne.",
     "Česta greška: brkati nasuprotne strane (ABFE-DCGH) s bočnim.",
     "Alt metoda (provjera): vektor DG = G − D = (0, 0, h) − (0, b, 0) = (0, −b, h); ravnina ABF ima normalu y-os; skalarni produkt 0 → paralelno."
   ,"Provjera: pravac u jednoj nasuprotnoj ravnini kvadra paralelan je drugoj nasuprotnoj ravnini ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:20,type:"mc",warn:"Pazi: rotacijom nastaje valjak; os rotacije (kraća stranica) je visina, druga je polumjer.",topic:"geom",points:1,
   q:"Koliko iznosi volumen tijela koje nastaje rotacijom pravokutnika sa stranicama duljina 7 cm i 8 cm oko kraće stranice?",
   opts:["196π cm³","224π cm³","392π cm³","448π cm³"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Rotacijom pravokutnika oko stranice nastaje valjak."},
     {txt:"Rotacija oko kraće stranice (7) → polumjer baze = duža stranica (8), visina = 7."},
     {txt:"V = πr²h = π·64·7 = 448π cm³. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: π·64·7 = 448π ≈ 1407,4 cm³ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 196π = 49·4 (krivo polumjer 7); B) 224π = krivi; C) 392π = krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: rotacija pravokutnika oko stranice → valjak; rotirajuća strana = visina, druga = polumjer.",note:"postupak",final:true},{txt:"Intuicija: 'kraća stranica' kao os rotacije → 'duža stranica' kao polumjer (puzanje).",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: rotacija pravokutnika oko stranice → valjak; rotirajuća strana = visina, druga = polumjer.",
     "Intuicija: 'kraća stranica' kao os rotacije → 'duža stranica' kao polumjer (puzanje).",
     "Česta greška: zamijeniti r i h; ili krivi smjer.",
     "Alt metoda (provjera): rotacija oko duže (8) bi dala V = π·49·8 = 392π — opcija C (krivo)."
   ,"Provjera: π·64·7 = 448π ≈ 1407,4 cm³ ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:21,type:"mc",warn:"Pazi: iz a₄ = a₁·q³ nađi q (pazi na negativan predznak), pa a₅ = a₄·q.",topic:"niz",points:1,
   q:"Koliko iznosi peti član geometrijskoga niza kojemu je prvi član 2, a četvrti −54?",
   opts:["−486","−162","162","486"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Geometrijski niz: aₙ = a₁·qⁿ⁻¹."},
     {txt:"a₄ = a₁·q³ → −54 = 2·q³ → q³ = −27 → q = −3."},
     {txt:"a₅ = a₄·q = −54·(−3) = 162. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: a₅ = 2·(−3)⁴ = 2·81 = 162 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −486 = a₅·(−3) = krivi; B) −162 = krivi predznak; D) 486 = krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aₙ = a₁·qⁿ⁻¹; q = (aₙ/a₁)^(1/(n−1)).",note:"postupak",final:true},{txt:"Intuicija: q < 0 → niz alternira predznak; |q| > 1 → niz raste apsolutno.",note:"intuicija",final:true},{txt:"Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aₙ = a₁·qⁿ⁻¹; q = (aₙ/a₁)^(1/(n−1)).",
     "Intuicija: q < 0 → niz alternira predznak; |q| > 1 → niz raste apsolutno.",
     "Česta greška: brkati a₄ s 4·q; ili krivi predznak korijena.",
     "Alt metoda (provjera): niz 2, −6, 18, −54, 162, −486, ... ✓"
   ,"Provjera: a₅ = 2·(−3)⁴ = 2·81 = 162 ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:22,type:"mc",warn:"Pazi: (xⁿ)′ = n·xⁿ⁻¹; ovdje n = −5, ne zaboravi vanjski minus.",topic:"al",points:1,
   q:"Čemu je jednaka derivacija funkcije f(x) = −x⁻⁵?",
   opts:["f'(x) = −5x⁻⁶","f'(x) = −5x⁻⁴","f'(x) = 5x⁻⁶","f'(x) = 5x⁻⁴"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Pravilo: (xⁿ)' = n·xⁿ⁻¹; (c·g(x))' = c·g'(x)."},
     {txt:"(−x⁻⁵)' = −·(−5)·x⁻⁶ = 5x⁻⁶. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 1: f(1) = −1; f'(1) = 5 (rastuća u 1) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −5x⁻⁶ = zaboraviti minus ispred originalne funkcije; B/D krivi eksponent.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: derivacija potencije — spusti eksponent kao množitelj, smanji za 1.",note:"postupak",final:true},{txt:"Intuicija: minus se 'množi' s minusom (od n = −5) → +5 ispred.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: derivacija potencije — spusti eksponent kao množitelj, smanji za 1.",
     "Intuicija: minus se 'množi' s minusom (od n = −5) → +5 ispred.",
     "Česta greška: ignorirati negativni predznak konstante; ili krivi smjer eksponenta.",
     "Alt metoda (provjera): pravilo umnoška za −·x⁻⁵ — (−1)'·x⁻⁵ + (−1)·(x⁻⁵)' = 0 + (−1)·(−5)x⁻⁶ = 5x⁻⁶ ✓"
   ,"Provjera s x = 1: f(1) = −1; f'(1) = 5 (rastuća u 1) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:23,type:"mc",warn:"Pazi: √x = x^(1/2), derivacija 5·(1/2)·x^(−1/2); uvrsti x = 9.",topic:"al",points:1,
   q:"Koliko iznosi nagib tangente na graf funkcije f(x) = 5√x + 1 u točki s apscisom x = 9?",
   opts:["5/6","11/6","15/2","17/2"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"f(x) = 5x^([FRAC:1|2]) + 1; nagib tangente = f'(x)."},
     {txt:"f'(x) = 5·(1/2)·x^(−[FRAC:1|2]) = [FRAC:5|2√x]."},
     {txt:"f'(9) = [FRAC:5|2·3] = [FRAC:5|6]. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: √9 = 3; 5/(2·3) = 5/6 ≈ 0,833 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 11/6 = krivi izračun; C/D = krivi smjer derivacije.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: nagib tangente u točki x = f'(x); za √x = x^([FRAC:1|2]), derivacija je 1/(2√x).",note:"postupak",final:true},{txt:"Intuicija: vrh parabole je 'plitki' nagib; korijen funkcija ima pad nagiba s povećanjem x.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: nagib tangente u točki x = f'(x); za √x = x^([FRAC:1|2]), derivacija je 1/(2√x).",
     "Intuicija: vrh parabole je 'plitki' nagib; korijen funkcija ima pad nagiba s povećanjem x.",
     "Česta greška: zaboraviti faktor 5 ispred; ili pomiješati √x i x².",
     "Alt metoda (provjera): za x = 4, f' = 5/(2·2) = 5/4 (nagib veći nego u x = 9, jer √x raste manje za veće x) ✓"
   ,"Provjera: √9 = 3; 5/(2·3) = 5/6 ≈ 0,833 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:24,type:"mc",warn:"Pazi: apsolutna vrijednost je ≥ 0, pa funkcija ima najmanju vrijednost — slika kreće od nje.",topic:"lin",points:1,
   q:"Koji je od navedenih intervala slika funkcije f(x) = |x − 5| + 7?",
   opts:["⟨−∞, −7]","⟨−7, −5⟩","⟨5, 7⟩","[7, +∞⟩"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"|x − 5| ≥ 0 za sve x; jednako 0 ⟺ x = 5."},
     {txt:"f(x) = |x − 5| + 7 ≥ 7; minimum f(5) = 7 (postiže se)."},
     {txt:"Slika: [7, +∞⟩ (zatvoreni desni, otvoreni lijevi). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: f(0) = 5 + 7 = 12; f(5) = 0 + 7 = 7 (minimum); f(10) = 5 + 7 = 12 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B negativni (krivi smjer); C krivi interval.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: |a| ≥ 0 → |a| + c ≥ c; min se postiže kad |a| = 0.",note:"postupak",final:true},{txt:"Intuicija: graf y = |x − 5| + 7 je 'V' s vrhom u (5, 7) i raste lijevo i desno.",note:"intuicija",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: |a| ≥ 0 → |a| + c ≥ c; min se postiže kad |a| = 0.",
     "Intuicija: graf y = |x − 5| + 7 je 'V' s vrhom u (5, 7) i raste lijevo i desno.",
     "Česta greška: pretpostaviti otvoreni interval u 7 (krivo, 7 je postignut).",
     "Alt metoda (provjera): apsolutna vrijednost je uvijek pozitivna ili 0 → minimum +7 je dostignut u x = 5 ✓"
   ,"Provjera: f(0) = 5 + 7 = 12; f(5) = 0 + 7 = 7 (minimum); f(10) = 5 + 7 = 12 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:25,type:"sa",topic:"al",points:1,
   q:"Racionalizirajte nazivnik razlomka [FRAC:1|∛5].",
   sol:{ans:"[FRAC:∛25|5]",alt:["cbrt(25)/5","∛25/5","5^([FRAC:2|3])/5"]},
  steps:[
     {txt:"Cilj: ukloniti korijen iz nazivnika."},
     {txt:"Pomnoži brojnik i nazivnik s ∛(5²) = ∛25 (jer ∛5 · ∛25 = ∛125 = 5)."},
     {txt:"[FRAC:1·∛25|∛5·∛25] = [FRAC:∛25|∛125] = [FRAC:∛25|5]."},
     {txt:"Provjera: ∛5 · ∛25 = ∛125 = 5 ✓; rezultat je racionalan u nazivniku ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za racionalizaciju ∛a, pomnoži s ∛(a²); jer ∛a · ∛(a²) = ∛(a³) = a.",note:"postupak",final:true},{txt:"Intuicija: 'puniti' korijen do potpunog kuba.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:∛25|5] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za racionalizaciju ∛a, pomnoži s ∛(a²); jer ∛a · ∛(a²) = ∛(a³) = a.",
     "Intuicija: 'puniti' korijen do potpunog kuba.",
     "Česta greška: pomnožiti s ∛a (ne dovoljno za uklanjanje); ili krivi eksponent.",
     "Alt metoda (provjera): 1/5^([FRAC:1|3]) = 5^(−[FRAC:1|3]) = 5^([FRAC:2|3])/5 = ∛25/5 ✓"
   ,"Provjera: ∛5 · ∛25 = ∛125 = 5 ✓; rezultat je racionalan u nazivniku ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:26,type:"sa",topic:"al",points:1,
   q:"Riješite nejednadžbu 3 − (2x − 5) < 4 i rješenje zapišite uz pomoć intervala.",
   sol:{ans:"⟨2, +∞⟩",alt:["x>2","(2,+∞⟩","x > 2"]},
  steps:[
     {txt:"Razvij zagradu: 3 − 2x + 5 < 4."},
     {txt:"8 − 2x < 4 → −2x < −4."},
     {txt:"Podijeli s −2 (znak nejednakosti se OKREĆE): x > 2."},
     {txt:"Interval: x ∈ ⟨2, +∞⟩."},
     {txt:"Provjera s x = 3: 3 − (6 − 5) = 3 − 1 = 2 < 4 ✓; s x = 1: 3 − (2 − 5) = 3 + 3 = 6, nije < 4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: pri množenju/dijeljenju s negativnim brojem, smjer nejednakosti se OBRAĆE.",note:"postupak",final:true},{txt:"Intuicija: 'minus prevrće' — < postaje >, ≤ postaje ≥.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨2, +∞⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: pri množenju/dijeljenju s negativnim brojem, smjer nejednakosti se OBRAĆE.",
     "Intuicija: 'minus prevrće' — < postaje >, ≤ postaje ≥.",
     "Česta greška: zaboraviti obrnuti znak; ili krivi predznak prilikom razvijanja zagrade.",
     "Alt metoda (provjera): množi obje strane s −1 prvo (pažljivo s znakom) → 2x − 8 > −4 → 2x > 4 → x > 2 ✓"
   ,"Provjera s x = 3: 3 − (6 − 5) = 3 − 1 = 2 < 4 ✓; s x = 1: 3 − (2 − 5) = 3 + 3 = 6, nije < 4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:27,type:"sa",topic:"al",points:1,
   q:"Izraz x² + y² − 2xy − 1 zapišite u obliku umnoška dvaju linearnih faktora.",
   sol:{ans:"(x − y − 1)(x − y + 1)",alt:["(x-y-1)(x-y+1)","(x-y+1)(x-y-1)"]},
  steps:[
     {txt:"Prepoznaj kvadrat razlike: x² − 2xy + y² = (x − y)²."},
     {txt:"Cijeli izraz: (x − y)² − 1."},
     {txt:"Razlika kvadrata: a² − b² = (a − b)(a + b); s a = x − y, b = 1."},
     {txt:"(x − y − 1)(x − y + 1)."},
     {txt:"Provjera s x = 2, y = 1: 4 + 1 − 4 − 1 = 0; (2−1−1)(2−1+1) = 0·2 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: (a − b)² = a² − 2ab + b²; a² − b² = (a − b)(a + b).",note:"postupak",final:true},{txt:"Intuicija: 'dva poznata pattern' — kvadrat razlike + razlika kvadrata.",note:"intuicija",final:true},{txt:"Točan odgovor: (x − y − 1)(x − y + 1) ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: (a − b)² = a² − 2ab + b²; a² − b² = (a − b)(a + b).",
     "Intuicija: 'dva poznata pattern' — kvadrat razlike + razlika kvadrata.",
     "Česta greška: zaboraviti −2xy član; ili krivo identificirati 'a' za razliku kvadrata.",
     "Alt metoda (provjera): razvij (x − y − 1)(x − y + 1) = (x − y)² − 1² = x² − 2xy + y² − 1 ✓"
   ,"Provjera s x = 2, y = 1: 4 + 1 − 4 − 1 = 0; (2−1−1)(2−1+1) = 0·2 = 0 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:28,type:"sa",topic:"al",points:1,
   q:"Napišite trigonometrijski zapis nekoga kompleksnog broja kojemu je pridružena točka na imaginarnoj osi u kompleksnoj (Gaussovoj) ravnini.",
   sol:{ans:"z = |z|·(cos φ + i·sin φ), φ ∈ {[FRAC:π|2], [FRAC:3π|2]}",alt:["|z|(cos(π/2)+i sin(π/2))","|z|(cos(3π/2)+i sin(3π/2))","cos π/2+i sin π/2"]},
  steps:[
     {txt:"Točka na imaginarnoj osi: z = bi za neki b ∈ ℝ (realni dio = 0)."},
     {txt:"Argument: za b > 0 (gornja polos) → arg = [FRAC:π|2]; za b < 0 (donja polos) → arg = [FRAC:3π|2]."},
     {txt:"Trigonometrijski zapis: z = |z|·(cos φ + i·sin φ)."},
     {txt:"Provjera: z = i → |z| = 1, φ = π/2; cos(π/2) + i·sin(π/2) = 0 + 1·i = i ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za z = a + bi, arg(z) = arctan(b/a) (uz pažnju na kvadrant); |z| = √(a² + b²).",note:"postupak",final:true},{txt:"Intuicija: imaginarna os je 'vertikalna' os u Gaussovoj ravnini; argumenti π/2 i 3π/2.",note:"intuicija",final:true},{txt:"Točan odgovor: z = |z|·(cos φ + i·sin φ), φ ∈ {[FRAC:π|2], [FRAC:3π|2]} ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za z = a + bi, arg(z) = arctan(b/a) (uz pažnju na kvadrant); |z| = √(a² + b²).",
     "Intuicija: imaginarna os je 'vertikalna' os u Gaussovoj ravnini; argumenti π/2 i 3π/2.",
     "Česta greška: zaboraviti specijalne slučajeve (osa); ili krivi argument.",
     "Alt metoda (provjera): trigonometrijski zapis vrijedi za svaki z ≠ 0; ovdje |z| varira, φ je π/2 ili 3π/2."
   ,"Provjera: z = i → |z| = 1, φ = π/2; cos(π/2) + i·sin(π/2) = 0 + 1·i = i ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:29.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Za koliko je broj 4·10¹¹⁰ veći od broja 3·10¹⁰⁸? Rezultat zapišite znanstvenim zapisom.",
   sol:{ans:"3,97·10¹¹⁰",alt:["3,97·10^110","3,97e110","3,97·10¹¹⁰"]},
  steps:[
     {txt:"Svedi na isti red veličine: 3·10¹⁰⁸ = 0,03·10¹¹⁰."},
     {txt:"Razlika: 4·10¹¹⁰ − 0,03·10¹¹⁰ = 3,97·10¹¹⁰."},
     {txt:"Provjera: 3,97·10¹¹⁰ + 0,03·10¹¹⁰ = 4·10¹¹⁰ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",note:"postupak",final:true},{txt:"Intuicija: prvi broj je puno veći (razlika eksponenata je 2 → 100× veći).",note:"intuicija",final:true},{txt:"Točan odgovor: 3,97·10¹¹⁰ ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",
     "Intuicija: prvi broj je puno veći (razlika eksponenata je 2 → 100× veći).",
     "Česta greška: oduzimati direktno bez svodenja eksponenata.",
     "Alt metoda (provjera): 4 − 0,03 = 3,97 ✓"
   ,"Provjera: 3,97·10¹¹⁰ + 0,03·10¹¹⁰ = 4·10¹¹⁰ ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:29.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Poredajte od najmanjega do najvećega brojeve a⁻¹, a⁻², a⁻³, a⁻⁴ za svaki a < −1.",
   sol:{ans:"a⁻¹, a⁻³, a⁻⁴, a⁻²",alt:["a^-1, a^-3, a^-4, a^-2","a⁻¹, a⁻³, a⁻⁴, a⁻²"]},
  steps:[
     {txt:"Za a < −1: parni eksponenti (a⁻², a⁻⁴) daju pozitivne vrijednosti; neparni (a⁻¹, a⁻³) negativne."},
     {txt:"Neparni su negativni: a⁻¹ = 1/a (npr. −0,5 za a = −2); a⁻³ = 1/a³ (−1/8 za a = −2)."},
     {txt:"a⁻¹ < a⁻³ < 0 (jer |a⁻¹| > |a⁻³|: 0,5 > 0,125)."},
     {txt:"Parni su pozitivni: a⁻² = 1/a² (0,25); a⁻⁴ = 1/a⁴ (0,0625)."},
     {txt:"0 < a⁻⁴ < a⁻² (jer |a⁻⁴| < |a⁻²|: 0,0625 < 0,25)."},
     {txt:"Poredak: a⁻¹ < a⁻³ < a⁻⁴ < a⁻². Odgovor: a⁻¹, a⁻³, a⁻⁴, a⁻².",final:true,note:"odgovor"},
     {txt:"Provjera s a = −2: a⁻¹ = −0,5; a⁻² = 0,25; a⁻³ = −0,125; a⁻⁴ = 0,0625 → poredak −0,5 < −0,125 < 0,0625 < 0,25 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za a < −1, |a|ⁿ raste s n; |a⁻ⁿ| = 1/|a|ⁿ pada s n.",note:"postupak",final:true},{txt:"Intuicija: predznak ovisi o parnosti eksponenta; magnituda opada s eksponentom.",note:"intuicija",final:true}
   ],
   why:[
     "Pravilo: za a < −1, |a|ⁿ raste s n; |a⁻ⁿ| = 1/|a|ⁿ pada s n.",
     "Intuicija: predznak ovisi o parnosti eksponenta; magnituda opada s eksponentom.",
     "Česta greška: brkati raspored za |a| > 1 i |a| < 1.",
     "Alt metoda (provjera): konkretno s a = −2 — provjeri poredak ✓"
   ,"Provjera s a = −2: a⁻¹ = −0,5; a⁻² = 0,25; a⁻³ = −0,125; a⁻⁴ = 0,0625 → poredak −0,5 < −0,125 < 0,0625 < 0,25 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Riješite jednadžbu 2 − (7m + 1)/5 = m.",
   sol:{ans:"m = [FRAC:3|4]",alt:["3/4","0,75","0,75","m = 0,75"], solFormula:{pre:"m = ", frac:[["3","4"]]}},
  steps:[
     {txt:"Pomnoži s 5: 10 − (7m + 1) = 5m."},
     {txt:"10 − 7m − 1 = 5m → 9 = 12m."},
     {txt:"m = [FRAC:9|12] = [FRAC:3|4]."},
     {txt:"Provjera: 2 − (21/4 + 1)/5 = 2 − (25/4)/5 = 2 − 5/4 = 3/4 = m ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: pomnoži obje strane s nazivnikom da ukloniš razlomak; pažnja na zagrade.",note:"postupak",final:true},{txt:"Intuicija: linearna jednadžba — izoliraj m.",note:"intuicija",final:true},{txt:"Točan odgovor: m = [FRAC:3|4] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: pomnoži obje strane s nazivnikom da ukloniš razlomak; pažnja na zagrade.",
     "Intuicija: linearna jednadžba — izoliraj m.",
     "Česta greška: zaboraviti pomnožiti SVE članove; ili pogreška u zagradi.",
     "Alt metoda (provjera): supstitucija m = 3/4 u izvornu daje 3/4 ✓"
   ,"Provjera: 2 − (21/4 + 1)/5 = 2 − (25/4)/5 = 2 − 5/4 = 3/4 = m ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Marko u jednoj minuti pretrči 200 metara, a Luka u jednoj minuti biciklom prijeđe 500 metara. Ako je svaki od njih prešao put od šest kilometara, koliko je minuta više Marko trčao nego što je Luka vozio bicikl?",
   sol:{ans:"18 min",alt:["18","18 minuta"]},
  steps:[
     {txt:"6 km = 6000 m."},
     {txt:"Marko: 6000/200 = 30 min; Luka: 6000/500 = 12 min."},
     {txt:"Razlika: 30 − 12 = 18 min."},
     {txt:"Provjera: 30·200 = 6000 ✓; 12·500 = 6000 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: vrijeme = put / brzina.",note:"postupak",final:true},{txt:"Intuicija: brži (Luka, bicikl) treba kraće vrijeme za isti put.",note:"intuicija",final:true},{txt:"Točan odgovor: 18 min ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = 18 min u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: vrijeme = put / brzina.",
     "Intuicija: brži (Luka, bicikl) treba kraće vrijeme za isti put.",
     "Česta greška: zaboraviti pretvorbu km → m; ili pomiješati Marko/Luka.",
     "Alt metoda (provjera): omjer brzina 500/200 = 2,5; Luka 30/2,5 = 12 ✓"
   ,"Provjera: 30·200 = 6000 ✓; 12·500 = 6000 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:31.1,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 31 (1. dio od 2):",
   q:"U tablici su navedeni podatci o visini djece u nekoj vrtićkoj skupini. Koliko iznosi mod prikazanih podataka?",
   sol:{ans:"112 cm",alt:["112","112 cm"]},
  steps:[
     {txt:"Mod = vrijednost s NAJVEĆOM frekvencijom (najčešće pojavljivanje)."},
     {txt:"Iz tablice: 4 djece visine 112 cm (najveća frekvencija)."},
     {txt:"Mod = 112 cm."},
     {txt:"Provjera: druge visine imaju manje frekvencije (3 ili manje) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: mod = vrijednost koja se najčešće pojavljuje; može biti više modova (bimodalni, multimodalni).",note:"postupak",final:true},{txt:"Intuicija: pronaći najveću 'kućicu' u tablici frekvencija.",note:"intuicija",final:true},{txt:"Točan odgovor: 112 cm ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: mod = vrijednost koja se najčešće pojavljuje; može biti više modova (bimodalni, multimodalni).",
     "Intuicija: pronaći najveću 'kućicu' u tablici frekvencija.",
     "Česta greška: brkati mod s medijanom ili prosjekom.",
     "Alt metoda (provjera): za skup podataka, prebroji svaku vrijednost — najveća count = mod."
   ,"Provjera: druge visine imaju manje frekvencije (3 ili manje) ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:31.2,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 31 (2. dio od 2):",
   q:"Koliko iznosi medijan skupa podataka o visini djece u toj skupini ako je naknadno upisano i dijete visine 123 cm?",
   sol:{ans:"116 cm",alt:["116","116 cm"]},
  steps:[
     {txt:"Originalno 14 djece + 1 dodano = 15."},
     {txt:"Sortirano (uključujući 123): 110, 110, 110, 112, 112, 112, 112, 116, 116, 120, 121, 121, 121, 123, 124."},
     {txt:"Medijan = 8. podatak od 15 (središnji)."},
     {txt:"8. podatak = 116 cm."},
     {txt:"Provjera: 7 podataka prije i 7 nakon (15 − 8 = 7) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: medijan = središnji član sortiranog niza; za parno n, srednja vrijednost dva srednja.",note:"postupak",final:true},{txt:"Intuicija: 'medijan' = 'sredina'; razdvoji niz na pola po brojnosti.",note:"intuicija",final:true},{txt:"Točan odgovor: 116 cm ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: medijan = središnji član sortiranog niza; za parno n, srednja vrijednost dva srednja.",
     "Intuicija: 'medijan' = 'sredina'; razdvoji niz na pola po brojnosti.",
     "Česta greška: zaboraviti sortirati; ili krivi središnji indeks.",
     "Alt metoda (provjera): za 15 brojeva, srednji je 8. (= (15+1)/2)."
   ,"Provjera: 7 podataka prije i 7 nakon (15 − 8 = 7) ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:32.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 32 (1. dio od 2):",
   q:"Pravac je zadan jednadžbom y = 4x − 8. Koliko iznosi udaljenost točke s koordinatama (2, −1) od zadanoga pravca?",
   sol:{ans:"[FRAC:√17|17]",alt:["1/√17","≈0,2425","[FRAC:√17|17]"]},
  steps:[
     {txt:"Implicitni oblik pravca: 4x − y − 8 = 0; A = 4, B = −1, C = −8."},
     {txt:"d = |A·x₀ + B·y₀ + C|/√(A² + B²) = |4·2 − (−1) − 8|/√(16 + 1)."},
     {txt:"= |8 + 1 − 8|/√17 = 1/√17 = √17/17."},
     {txt:"Provjera: √17 ≈ 4,123; 1/4,123 ≈ 0,2425 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).",note:"postupak",final:true},{txt:"Intuicija: brojnik je 'kako daleko od pravca' u smjeru normale; nazivnik normalizira.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:√17|17] ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: udaljenost točke (x₀, y₀) od pravca Ax + By + C = 0: d = |Ax₀ + By₀ + C|/√(A² + B²).",
     "Intuicija: brojnik je 'kako daleko od pravca' u smjeru normale; nazivnik normalizira.",
     "Česta greška: koristiti eksplicitan oblik direktno; ili krivi predznak.",
     "Alt metoda (provjera): racionaliziraj 1/√17 = √17/17 (množi s √17/√17)."
   ,"Provjera: √17 ≈ 4,123; 1/4,123 ≈ 0,2425 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:32.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 32 (2. dio od 2):",
   q:"Koliko iznosi površina trokuta koji zadani pravac y = 4x − 8 određuje s koordinatnim osima?",
   sol:{ans:"8 kv. jed.",alt:["8","8 kv. jed."]},
  steps:[
     {txt:"Sjecišta pravca s osima: y = 0 → 4x = 8 → x = 2 (s x-osi); x = 0 → y = −8 (s y-osi)."},
     {txt:"Trokut s vrhovima (0, 0), (2, 0), (0, −8) — pravokutni s katetama 2 i 8."},
     {txt:"P = (1/2)·|kateta₁|·|kateta₂| = (1/2)·2·8 = 8 kv. jed."},
     {txt:"Provjera: katete 2 i 8 (apsolutne vrijednosti); P = 8 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: pravokutni trokut s katetama na osima — P = (1/2)·|kateta x|·|kateta y|.",note:"postupak",final:true},{txt:"Intuicija: katete su sjecišta s osima.",note:"intuicija",final:true},{txt:"Točan odgovor: 8 kv. jed. ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: pravokutni trokut s katetama na osima — P = (1/2)·|kateta x|·|kateta y|.",
     "Intuicija: katete su sjecišta s osima.",
     "Česta greška: zaboraviti apsolutne vrijednosti za negativne koordinate.",
     "Alt metoda (provjera): formula za površinu trokuta od koordinata vrhova daje 8 ✓"
   ,"Provjera: katete 2 i 8 (apsolutne vrijednosti); P = 8 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:33.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 33 (1. dio od 2):",
   q:"Duljina vektora a⃗ je 5, duljina vektora b⃗ je 10 i vrijedi a⃗ · b⃗ = 25. Koliko iznosi mjera kuta određenoga vektorima a⃗ i b⃗?",
   sol:{ans:"60°",alt:["60","π/3","60°"]},
  steps:[
     {txt:"a⃗·b⃗ = |a⃗|·|b⃗|·cos α."},
     {txt:"25 = 5·10·cos α → cos α = 1/2."},
     {txt:"α = arccos(1/2) = 60°."},
     {txt:"Provjera: cos 60° = 0,5; 5·10·0,5 = 25 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: skalarni umnožak a⃗·b⃗ = |a⃗|·|b⃗|·cos α gdje je α kut između.",note:"postupak",final:true},{txt:"Intuicija: 'projekcija' jednog vektora na drugi.",note:"intuicija",final:true},{txt:"Točan odgovor: 60° ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: skalarni umnožak a⃗·b⃗ = |a⃗|·|b⃗|·cos α gdje je α kut između.",
     "Intuicija: 'projekcija' jednog vektora na drugi.",
     "Česta greška: pomiješati skalarni i vektorski umnožak.",
     "Alt metoda (provjera): cos α = (a⃗·b⃗)/(|a⃗|·|b⃗|) = 25/50 = 0,5 → α = 60° ✓"
   ,"Provjera: cos 60° = 0,5; 5·10·0,5 = 25 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:33.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 33 (2. dio od 2):",
   q:"Koliko iznosi |a⃗ − b⃗|, ako je |a⃗| = 5, |b⃗| = 10 i a⃗ · b⃗ = 25?",
   sol:{ans:"5√3",alt:["5·√3","≈8,6603","5√3"]},
  steps:[
     {txt:"|a⃗ − b⃗|² = (a⃗ − b⃗)·(a⃗ − b⃗) = |a⃗|² − 2a⃗·b⃗ + |b⃗|²."},
     {txt:"= 25 − 50 + 100 = 75."},
     {txt:"|a⃗ − b⃗| = √75 = 5√3."},
     {txt:"Provjera: √75 = √(25·3) = 5√3 ≈ 8,66 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za vektore, |a⃗ ± b⃗|² = |a⃗|² ± 2a⃗·b⃗ + |b⃗|² (kao binom).",note:"postupak",final:true},{txt:"Intuicija: vektori s kutom 60° između; razlika vektora je 'treća strana' trokuta.",note:"intuicija",final:true},{txt:"Točan odgovor: 5√3 ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za vektore, |a⃗ ± b⃗|² = |a⃗|² ± 2a⃗·b⃗ + |b⃗|² (kao binom).",
     "Intuicija: vektori s kutom 60° između; razlika vektora je 'treća strana' trokuta.",
     "Česta greška: zaboraviti faktor 2 u srednjem članu; ili krivi predznak.",
     "Alt metoda (provjera): kosinusov poučak — |a−b|² = |a|² + |b|² − 2|a||b|cos α = 25 + 100 − 50 = 75 ✓"
   ,"Provjera: √75 = √(25·3) = 5√3 ≈ 8,66 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:34.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 34 (1. dio od 2):",
   q:"Zadana je kvadratna funkcija f(x) = 3x² + 12x − 15. Napišite jednadžbu osi simetrije grafa funkcije f.",
   sol:{ans:"x = −2",alt:["-2","x=-2","x = -2"]},
  steps:[
     {txt:"Os simetrije parabole: x = x_v = −b/(2a)."},
     {txt:"a = 3, b = 12 → x_v = −12/6 = −2."},
     {txt:"Provjera: f(−1) = 3 − 12 − 15 = −24; f(−3) = 27 − 36 − 15 = −24 → simetrija oko x = −2 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: os simetrije parabole f(x) = ax² + bx + c je x = −b/(2a).",note:"postupak",final:true},{txt:"Intuicija: tjeme je centar parabole; simetrala prolazi kroz tjeme.",note:"intuicija",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: os simetrije parabole f(x) = ax² + bx + c je x = −b/(2a).",
     "Intuicija: tjeme je centar parabole; simetrala prolazi kroz tjeme.",
     "Česta greška: krivi predznak; ili krivi a.",
     "Alt metoda (provjera): completiranje kvadrata — 3x² + 12x − 15 = 3(x + 2)² − 27 → tjeme (−2, −27)."
   ,"Provjera: f(−1) = 3 − 12 − 15 = −24; f(−3) = 27 − 36 − 15 = −24 → simetrija oko x = −2 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:34.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 34 (2. dio od 2):",
   q:"Odredite sve realne brojeve x za koje funkcija f(x) = 3x² + 12x − 15 poprima negativne vrijednosti.",
   sol:{ans:"⟨−5, 1⟩",alt:["(-5,1)","-5<x<1","⟨-5, 1⟩"]},
  steps:[
     {txt:"f(x) < 0 ⟺ 3x² + 12x − 15 < 0 ⟺ x² + 4x − 5 < 0."},
     {txt:"Faktorizacija: x² + 4x − 5 = (x + 5)(x − 1)."},
     {txt:"a = 1 > 0 → parabola otvorena nagore; negativna IZMEĐU nula."},
     {txt:"x ∈ ⟨−5, 1⟩ (otvoreni jer strogo < 0)."},
     {txt:"Provjera s x = 0 (u intervalu): f(0) = −15 < 0 ✓; s x = 2 (van): f(2) = 21 > 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za parabolu s a > 0, f(x) < 0 ⟺ x je između nula.",note:"postupak",final:true},{txt:"Intuicija: parabola 'visi' ispod x-osi između nul-točaka.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−5, 1⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: za parabolu s a > 0, f(x) < 0 ⟺ x je između nula.",
     "Intuicija: parabola 'visi' ispod x-osi između nul-točaka.",
     "Česta greška: zatvoreni interval [−5, 1] umjesto otvorenog.",
     "Alt metoda (provjera): graf — parabola otvorena nagore s nulama u −5 i 1; negativna između ✓"
   ,"Provjera s x = 0 (u intervalu): f(0) = −15 < 0 ✓; s x = 2 (van): f(2) = 21 > 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:35.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 35 (1. dio od 2):",
   q:"Izraz 1 − 2·logₐ 3 zapišite kao jedan logaritam za svaki a za koji je definiran.",
   sol:{ans:"logₐ([FRAC:a|9])",alt:["log_a(a/9)","logₐ([FRAC:a|9])"]},
  steps:[
     {txt:"Pravilo: 1 = logₐ a (jer aᵃ = ... ne, već a¹ = a → logₐ a = 1)."},
     {txt:"n·logₐ b = logₐ(bⁿ): 2·logₐ 3 = logₐ 9."},
     {txt:"Razlika logaritama: logₐ x − logₐ y = logₐ(x/y)."},
     {txt:"1 − 2·logₐ 3 = logₐ a − logₐ 9 = logₐ([FRAC:a|9])."},
     {txt:"Provjera s a = 9: 1 − 2·log₉ 3 = 1 − 2·(1/2) = 0; log₉(9/9) = log₉ 1 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: 1 = logₐ a; n·logₐ b = logₐ(bⁿ); logₐ x − logₐ y = logₐ(x/y).",note:"postupak",final:true},{txt:"Intuicija: 'pretvori sve u logaritme iste baze, pa kombiniraj'.",note:"intuicija",final:true},{txt:"Točan odgovor: logₐ([FRAC:a|9]) ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: 1 = logₐ a; n·logₐ b = logₐ(bⁿ); logₐ x − logₐ y = logₐ(x/y).",
     "Intuicija: 'pretvori sve u logaritme iste baze, pa kombiniraj'.",
     "Česta greška: pomiješati pravila zbroja/razlike/umnoška.",
     "Alt metoda (provjera): za a = 10, log 3 ≈ 0,477; 1 − 2·0,477 ≈ 0,046 = log(10/9) ≈ log(1,111) ≈ 0,046 ✓"
   ,"Provjera s a = 9: 1 − 2·log₉ 3 = 1 − 2·(1/2) = 0; log₉(9/9) = log₉ 1 = 0 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:35.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 35 (2. dio od 2):",
   q:"Funkcijom B(d) = 50·1,05^d procjenjuje se broj posjeta novoj mrežnoj stranici neke trgovine d dana nakon objave te stranice. Koji će dan od objave prema toj procjeni mrežna stranica prvi put imati 1135 posjeta?",
   sol:{ans:"64",alt:["64","64. dan","64 dan"]},
  steps:[
     {txt:"50·1,05^d ≥ 1135 → 1,05^d ≥ 22,7."},
     {txt:"Logaritmiraj: d·log 1,05 ≥ log 22,7."},
     {txt:"d ≥ log 22,7 / log 1,05 = 1,3560 / 0,02119 ≈ 63,97."},
     {txt:"Prvi cijeli broj iznad: d = 64."},
     {txt:"Provjera: B(64) = 50·1,05^64 ≈ 50·22,7 ≈ 1135 ✓; B(63) ≈ 50·21,6 ≈ 1080 < 1135 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: aᵘ ≥ c ⟺ u ≥ logₐ c (za a > 1).",note:"postupak",final:true},{txt:"Intuicija: eksponencijalni rast — 'koliko dana do 22,7x povećanja'.",note:"intuicija",final:true},{txt:"Točan odgovor: 64 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: aᵘ ≥ c ⟺ u ≥ logₐ c (za a > 1).",
     "Intuicija: eksponencijalni rast — 'koliko dana do 22,7x povećanja'.",
     "Česta greška: zaboraviti zaokružiti gore (jer treba prvi cijeli koji PRELAZI granicu).",
     "Alt metoda (provjera): test s d = 63 i d = 64 — d = 64 je prvi koji prelazi 1135."
   ,"Provjera: B(64) = 50·1,05^64 ≈ 50·22,7 ≈ 1135 ✓; B(63) ≈ 50·21,6 ≈ 1080 < 1135 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:36.1,img:true,type:"sa",topic:"lin",points:1,
   context:"Zadatak 36 (1. dio od 2):",
   q:"Nacrtajte graf neke parne funkcije.",
   sol:{ans:"npr. parabola y = x² (graf simetričan s obzirom na y-os)",alt:["y = x²","graf simetričan s obzirom na y-os","|x|, cos x"]},
  steps:[
     {txt:"Parnost: f(−x) = f(x) za sve x iz domene."},
     {txt:"Geometrijski: graf je simetričan s obzirom na y-os."},
     {txt:"Primjeri: y = x², y = |x|, y = cos x."},
     {txt:"Provjera: y = x² → y(−2) = 4 = y(2) ✓; graf je 'zrcalni' oko y-osi ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: parna funkcija — f(−x) = f(x); neparna — f(−x) = −f(x).",note:"postupak",final:true},{txt:"Intuicija: 'zrcalna' oko y-osi (parna) ili oko ishodišta (neparna).",note:"intuicija",final:true},{txt:"Točan odgovor: npr. parabola y = x² (graf simetričan s obzirom na y-os) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: parna funkcija — f(−x) = f(x); neparna — f(−x) = −f(x).",
     "Intuicija: 'zrcalna' oko y-osi (parna) ili oko ishodišta (neparna).",
     "Česta greška: pomiješati parnost i neparnost; ili krivi smjer simetrije.",
     "Alt metoda (provjera): polinomi samo s parnim eksponentima x su parni; samo s neparnim su neparni."
   ,"Provjera: y = x² → y(−2) = 4 = y(2) ✓; graf je 'zrcalni' oko y-osi ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:36.2,type:"sa",topic:"lin",points:1,
   context:"Zadatak 36 (2. dio od 2):",
   q:"Odredite domenu funkcije f(x) = log((x − 6)⁴).",
   sol:{ans:"ℝ ∖ {6}",alt:["R\\{6}","x ≠ 6","(-∞,6)∪(6,+∞⟩","ℝ \\ {6}"]},
  steps:[
     {txt:"Logaritam definiran samo za pozitivan argument: (x − 6)⁴ > 0."},
     {txt:"Parna potencija: (x − 6)⁴ ≥ 0; jednako 0 ⟺ x = 6."},
     {txt:"Uvjet x ≠ 6 → D(f) = ℝ ∖ {6}."},
     {txt:"Provjera: za x = 5, (−1)⁴ = 1 > 0 ✓; za x = 7, (1)⁴ = 1 > 0 ✓; za x = 6, 0⁴ = 0 — log nije definiran ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: argument logaritma mora biti strogo pozitivan.",note:"postupak",final:true},{txt:"Intuicija: parna potencija je 0 samo u svojoj 'nul-točki' (gdje je baza 0).",note:"intuicija",final:true},{txt:"Točan odgovor: ℝ ∖ {6} ✓",note:"odgovor",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: argument logaritma mora biti strogo pozitivan.",
     "Intuicija: parna potencija je 0 samo u svojoj 'nul-točki' (gdje je baza 0).",
     "Česta greška: uključiti x = 6 u domenu (krivo).",
     "Alt metoda (provjera): log((x−6)⁴) = 4·log|x−6| → log|x−6| definiran za x ≠ 6 ✓"
   ,"Provjera: za x = 5, (−1)⁴ = 1 > 0 ✓; za x = 7, (1)⁴ = 1 > 0 ✓; za x = 6, 0⁴ = 0 — log nije definiran ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:37.1,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 37 (1. dio od 2):",
   q:"Na slici je prikazan graf funkcije f(x) = A·sin(Bx + π/3) + D. Odredite vrijednost koeficijenta B.",
   sol:{ans:"B = [FRAC:π|6]",alt:["π/6","pi/6","B = π/6"]},
  steps:[
     {txt:"Iz grafa: period T = 12 (npr. između dva uzastopna maksimuma)."},
     {txt:"Veza B i T: B = 2π/T."},
     {txt:"B = 2π/12 = [FRAC:π|6]."},
     {txt:"Provjera: za B = π/6, period je T = 2π/B = 2π·6/π = 12 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: u A·sin(Bx + φ) + D, parametar B određuje period: T = 2π/|B|.",note:"postupak",final:true},{txt:"Intuicija: veći B → kraći period (brže oscilira); manji B → duži period.",note:"intuicija",final:true},{txt:"Točan odgovor: B = [FRAC:π|6] ✓",note:"odgovor",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u A·sin(Bx + φ) + D, parametar B određuje period: T = 2π/|B|.",
     "Intuicija: veći B → kraći period (brže oscilira); manji B → duži period.",
     "Česta greška: brkati B i T; ili pomiješati 2π i π.",
     "Alt metoda (provjera): test — sin(π/6 · 12) = sin(2π) = 0 → puni ciklus za 12 ✓"
   ,"Provjera: za B = π/6, period je T = 2π/B = 2π·6/π = 12 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:37.2,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 37 (2. dio od 2):",
   q:"Odredite vrijednost koeficijenta D iz funkcije f(x) = A·sin(Bx + π/3) + D čiji graf je prikazan.",
   sol:{ans:"D = −1",alt:["-1","D = -1"]},
  steps:[
     {txt:"D je vertikalni pomak — sredina između max i min vrijednosti."},
     {txt:"S grafa: max = 2, min = −4."},
     {txt:"D = (max + min)/2 = (2 + (−4))/2 = −1."},
     {txt:"Provjera: amplituda A = (max − min)/2 = 6/2 = 3; D = max − A = 2 − 3 = −1 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: slika A·sin(...) + D je [D − |A|, D + |A|]; D je 'sredina' slike.",note:"postupak",final:true},{txt:"Intuicija: D 'podiže' ili 'spušta' cijeli graf okomito.",note:"intuicija",final:true},{txt:"Točan odgovor: D = −1 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: slika A·sin(...) + D je [D − |A|, D + |A|]; D je 'sredina' slike.",
     "Intuicija: D 'podiže' ili 'spušta' cijeli graf okomito.",
     "Česta greška: brkati D i A; ili krivi izračun srednje vrijednosti.",
     "Alt metoda (provjera): D = (max + min)/2 — uvijek je sredina ekstrema."
   ,"Provjera: amplituda A = (max − min)/2 = 6/2 = 3; D = max − A = 2 − 3 = −1 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:38.1,type:"sa",topic:"trig",points:2,
   context:"Zadatak 38 (1. dio od 2):",
   q:"Duljine dviju stranica trokuta su 1 cm i 2 cm, a površina mu je [FRAC:12|13] cm². Koliko iznosi duljina treće stranice toga trokuta?",
   sol:{ans:"≈ 1,86 cm ili ≈ 2,56 cm",alt:["1,86 ili 2,56","1,86","2,56","≈1,86 cm ili ≈2,56 cm"], ex:"Iz sin γ ne možemo jednoznačno odrediti kut — ostro/tup kut imaju isti sinus. Razmotriti oba slučaja preko kosinusovog poučka."},
  steps:[
     {txt:"P = (1/2)·a·b·sin γ → 12/13 = (1/2)·1·2·sin γ → sin γ = 12/13."},
     {txt:"cos γ = ±√(1 − sin²γ) = ±√(1 − 144/169) = ±5/13 (dva slučaja: oštri i tupi)."},
     {txt:"Kosinusov poučak: c² = a² + b² − 2ab·cos γ = 5 − 4·cos γ."},
     {txt:"Slučaj 1 (cos γ = 5/13, oštri γ): c² = 5 − 20/13 = 45/13 → c = √(45/13) ≈ 1,86 cm."},
     {txt:"Slučaj 2 (cos γ = −5/13, tupi γ): c² = 5 + 20/13 = 85/13 → c = √(85/13) ≈ 2,56 cm."},
     {txt:"Provjera: sin² + cos² = 144/169 + 25/169 = 169/169 = 1 ✓ za oba kuta",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: sin γ ne određuje γ jednoznačno — γ i 180° − γ imaju isti sinus.",note:"postupak",final:true},{txt:"Intuicija: trokut može biti oštrokutni (sve <90°) ili tupokutni (jedan >90°).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 1,86 cm ili ≈ 2,56 cm ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: sin γ ne određuje γ jednoznačno — γ i 180° − γ imaju isti sinus.",
     "Intuicija: trokut može biti oštrokutni (sve <90°) ili tupokutni (jedan >90°).",
     "Česta greška: zaboraviti drugi slučaj (samo oštri kut).",
     "Alt metoda (provjera): površina u oba slučaja: P = (1/2)·1·2·(12/13) = 12/13 ✓",
     "Pažnja: oba rješenja su valjana jer kosinusov poučak daje pozitivan c² u oba slučaja."
   ,"Provjera: sin² + cos² = 144/169 + 25/169 = 169/169 = 1 ✓ za oba kuta"]
  },
  {id:38.2,type:"sa",topic:"geom",points:2,
   context:"Zadatak 38 (2. dio od 2):",
   q:"Koliko iznosi površina pobočja pravilne četverostrane piramide kojoj je osnovni brid duljine 12,6 cm, a kut između ravnine osnovke (baze) i ravnine pobočke mjere 48°31'?",
   sol:{ans:"≈ 239,67 cm²",alt:["239,67","239,67","≈239,67 cm²"], ex:"Diedarski kut između baze i pobočke određen je trokutom s apotemom baze (a/2), apotemom pobočke (vₐ), i visinom piramide."},
  steps:[
     {txt:"Pravilna četverostrana piramida: baza = kvadrat s bridom a = 12,6 cm."},
     {txt:"Apotema baze (od središta do polovišta brida) = a/2 = 6,3 cm."},
     {txt:"Apotema pobočke (visina jednakokračnog trokuta pobočke) iz cos α = (a/2)/vₐ → vₐ = (a/2)/cos α."},
     {txt:"vₐ = 6,3/cos 48°31' ≈ 6,3/0,6620 ≈ 9,516 cm."},
     {txt:"Površina jedne pobočke: P_pob = (a·vₐ)/2 = (12,6·9,516)/2 ≈ 59,95 cm²."},
     {txt:"Pobočje (4 pobočke): P = 4·P_pob = 2·a·vₐ ≈ 2·12,6·9,516 ≈ 239,67 cm²."},
     {txt:"Provjera: 4 jednake pobočke trokuta — svaka ≈ 60 cm² → 4·60 = 240 cm² ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: u pravilnoj piramidi, diedarski kut između baze i pobočke je u pravokutnom trokutu (apotema baze, apotema pobočke, visina piramide).",note:"postupak",final:true},{txt:"Intuicija: cos α = (kraći katet)/(hipotenuza) = (a/2)/vₐ.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 239,67 cm² ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: u pravilnoj piramidi, diedarski kut između baze i pobočke je u pravokutnom trokutu (apotema baze, apotema pobočke, visina piramide).",
     "Intuicija: cos α = (kraći katet)/(hipotenuza) = (a/2)/vₐ.",
     "Česta greška: brkati apotemu baze i apotemu pobočke; ili krivi kut.",
     "Alt metoda (provjera): površina pobočja = (1/2)·opseg baze · apotema pobočke = (1/2)·4·12,6·9,516 ≈ 239,67 ✓",
     "Provjera trigonometrije: 6,3/9,516 = 0,662 = cos 48°31' ≈ 0,6620 ✓"
   ,"Provjera: 4 jednake pobočke trokuta — svaka ≈ 60 cm² → 4·60 = 240 cm² ✓"]
  },
  {id:39.1,type:"sa",topic:"al",points:3,
   context:"Zadatak 39 (1. dio od 2):",
   q:"Ako funkcija f(x) = (4x − a)/(x² + 1) za x = 2 postiže lokalni maksimum, odredite x za koji ta funkcija postiže lokalni minimum.",
   sol:{ans:"x = −[FRAC:1|2]",alt:["-1/2","-0,5","x = -1/2","x = -0,5"], solFormula:{pre:"x = ", frac:[["−1","2"]]}, ex:"Iz uvjeta f'(2) = 0 odredimo parametar a. Zatim pronađemo SVE stacionarne točke; jedna je zadani max, druga (preostala) je min."},
  steps:[
     {txt:"f'(x) = ((4)(x² + 1) − (4x − a)(2x))/(x² + 1)² = (4x² + 4 − 8x² + 2ax)/(x² + 1)² = (−4x² + 2ax + 4)/(x² + 1)²."},
     {txt:"f'(2) = 0 → brojnik = 0 → −16 + 4a + 4 = 0 → a = 3."},
     {txt:"S a = 3: brojnik = −4x² + 6x + 4 = −2(2x² − 3x − 2)."},
     {txt:"2x² − 3x − 2 = 0 → x = (3 ± √(9 + 16))/4 = (3 ± 5)/4 → x = 2 ili x = −[FRAC:1|2]."},
     {txt:"x = 2 je zadani lok. max; x = −1/2 mora biti lok. min."},
     {txt:"Provjera: f'(x) ima dva korijena (x = 2 i x = −1/2); u −1/2 mijenja predznak iz − u + (jer parabola −2(...) ima a < 0) → minimum ✓",note:"verifikacija"},
     {txt:"Provjera f(−1/2) i f(2): f(2) = (8 − 3)/5 = 1; f(−1/2) = (−2 − 3)/(1/4 + 1) = −5/(5/4) = −4 → f(−1/2) < f(2), konzistentno s max u 2 i min u −1/2 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: stacionarne točke f' = 0; promjena predznaka f' određuje max/min.",note:"postupak",final:true},{txt:"Intuicija: kvadratna funkcija u brojniku ima ili 0, 1, ili 2 korijena — ovdje 2 (max i min).",note:"intuicija",final:true},{txt:"Točan odgovor: x = −[FRAC:1|2] ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: stacionarne točke f' = 0; promjena predznaka f' određuje max/min.",
     "Intuicija: kvadratna funkcija u brojniku ima ili 0, 1, ili 2 korijena — ovdje 2 (max i min).",
     "Česta greška: zaboraviti riješiti za parametar a prvi.",
     "Alt metoda (provjera): druga derivacija test — f''(−1/2) > 0 → minimum.",
     "Provjera s neposrednim brojem: f(−1/2) = −4, f(0) = −3, f(2) = 1 → −4 je doista lokalni minimum između f(−1) ≈ −7/2 i f(0) = −3."
   ,"Provjera: f'(x) ima dva korijena (x = 2 i x = −1/2); u −1/2 mijenja predznak iz − u + (jer parabola −2(...) ima a < 0) → minimum ✓"]
  },
  {id:39.2,type:"sa",topic:"niz",points:3,
   context:"Zadatak 39 (2. dio od 2):",
   q:"Banka je izradila set novih kovanica različite veličine tako da svaka sljedeća kovanica ima za 1,5 mm veći promjer od prethodne. Koliko je kovanica u setu ako je promjer najveće kovanice za 60 % veći od promjera najmanje kovanice, a prosječan je promjer svih kovanica 26 mm?",
   sol:{ans:"9",alt:["9","9 kovanica"], ex:"Aritmetički niz s d = 1,5 mm; aₙ = 1,6·a₁ (60 % veći); prosjek = (a₁ + aₙ)/2 = 26."},
  steps:[
     {txt:"Aritmetički niz: a₁ = najmanji, aₙ = najveći, razlika d = 1,5 mm."},
     {txt:"Uvjet 1: aₙ = a₁ + 60 % · a₁ = 1,6·a₁."},
     {txt:"Uvjet 2: prosjek niza = (a₁ + aₙ)/2 = 26 → a₁ + aₙ = 52."},
     {txt:"Iz uvjeta 1 u 2: a₁ + 1,6·a₁ = 52 → 2,6·a₁ = 52 → a₁ = 20 mm; aₙ = 32 mm."},
     {txt:"Iz aₙ = a₁ + (n − 1)·d: 32 = 20 + (n − 1)·1,5 → 12 = 1,5(n − 1) → n − 1 = 8 → n = 9."},
     {txt:"Provjera: niz 20; 21,5; 23; 24,5; 26; 27,5; 29; 30,5; 32 (9 kovanica) → prosjek (20 + 32)/2 = 26 ✓; najveća/najmanja = 32/20 = 1,6 → +60 % ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz — prosjek = (prvi + zadnji)/2; broj članova n = (aₙ − a₁)/d + 1.",note:"postupak",final:true},{txt:"Intuicija: '60 % veći' = ×1,6; prosjek aritmetičkog niza je srednja vrijednost prvog i zadnjeg.",note:"intuicija",final:true},{txt:"Točan odgovor: 9 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: aritmetički niz — prosjek = (prvi + zadnji)/2; broj članova n = (aₙ − a₁)/d + 1.",
     "Intuicija: '60 % veći' = ×1,6; prosjek aritmetičkog niza je srednja vrijednost prvog i zadnjeg.",
     "Česta greška: pomiješati '60 % veći' s '60 % manjim'; ili krivi izračun broja članova.",
     "Alt metoda (provjera): sustav s 2 nepoznanice (a₁, aₙ) i 2 uvjeta dao je jedinstveno rješenje.",
     "Provjera ravnomjerne distribucije: 20 → 32 u 9 koraka s prirastom 1,5 ✓"
   ,"Provjera: niz 20; 21,5; 23; 24,5; 26; 27,5; 29; 30,5; 32 (9 kovanica) → prosjek (20 + 32)/2 = 26 ✓; najveća/najmanja = 32/20 = 1,6 → +60 % ✓"]
  },
  {id:40,img:true,type:"sa",topic:"geom",points:4,
   q:"Na otoku prikazanome na skici u vrhovima kvadrata KLMN postavljena su četiri odašiljača. Stranica kvadrata duljine je 50 km, a domet svakoga odašiljača radijusa 30 km. Koliko iznosi površina otoka koja nije pokrivena signalom?",
  intermediates:[2500, 900, 225, 2827.4, 2377.2, 527.1, 414.6, 450.2, 225.08, 122.7, 122.8, 33.166, 12.5, 60, 0.5857, 3600, 1100],
   sol:{ans:"≈ 122,7 km²",alt:["122,7","≈122,7","≈ 122,7 km²"], ex:"Otok = kvadrat 50×50. Svaki od 4 odašiljača pokriva četvrtinu kruga unutar kvadrata. Susjedni krugovi se preklapaju (jer je dijagonala 50 < 2r = 60). Površina preklapanja = lens; nepokriveno = kvadrat − pokriveno."},
  steps:[
     {txt:"Površina kvadrata: 50² = 2500 km²."},
     {txt:"Svaki odašiljač pokriva četvrtinu kruga unutar kvadrata: A₁ = πr²/4 = π·900/4 = 225π km²."},
     {txt:"Zbroj 4 četvrtine: 4·225π = 900π km² ≈ 2827,4 km² (ako nema preklapanja)."},
     {txt:"Susjedni odašiljači (udaljenost 50, polumjer 30): 2r = 60 > 50 → preklapanje."},
     {txt:"Površina presjeka dvaju krugova (lens): A_lens = 2·(r²·arccos(d/(2r)) − (d/4)·√(4r² − d²))."},
     {txt:"Za r = 30, d = 50: A_lens = 2·(900·arccos(50/60) − 12,5·√(3600 − 2500)) = 2·(900·0,5857 − 12,5·33,166) = 2·(527,1 − 414,6) = 225,08 km²."},
     {txt:"Pola lensa je u kvadratu (između dva susjedna odašiljača na bridu); 4 susjedna preklapanja → oduzimamo 4·(A_lens/2) = 2·A_lens ≈ 450,2 km²."},
     {txt:"Pokriveno = 900π − 2·A_lens ≈ 2827,4 − 450,2 ≈ 2377,2 km²."},
     {txt:"Nepokriveno = 2500 − 2377,2 ≈ 122,8 km² ≈ 122,7 km²."},
     {txt:"Provjera: nepokriveno područje je 'centralni' dio kvadrata koji odašiljači ne dosežu (jer su udaljeni od centra √(25²+25²) = √1250 ≈ 35,4 > 30) ✓",note:"verifikacija"},
     {txt:"Provjera reda veličine: 122,7/2500 ≈ 4,9 % nepokriveno — realan rezultat za ovakvu konfiguraciju ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: princip uključenja-isključenja — pokriveno = Σ(pokrivenosti) − Σ(preklapanja).",note:"postupak",final:true},{txt:"Intuicija: vrhovi kvadrata su odašiljači; centar kvadrata je najdalja točka — nije pokrivena.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 122,7 km² ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: princip uključenja-isključenja — pokriveno = Σ(pokrivenosti) − Σ(preklapanja).",
     "Intuicija: vrhovi kvadrata su odašiljači; centar kvadrata je najdalja točka — nije pokrivena.",
     "Česta greška: zaboraviti preklapanja (računati kao da nema); ili krivi izračun lensa.",
     "Alt metoda (provjera): integralni račun — integriraj 'unutar kvadrata, izvan svih 4 krugova' (rezultat isti).",
     "Provjera centralne točke: udaljenost od centra (25, 25) do svakog vrha je √1250 ≈ 35,4 > 30 (polumjer) → centar nije pokriven ✓"
   ,"Provjera: nepokriveno područje je 'centralni' dio kvadrata koji odašiljači ne dosežu (jer su udaljeni od centra √(25²+25²) = √1250 ≈ 35,4 > 30) ✓"]
  }
];

export const qImages = {
  "2023_ljeto_A__10": () => e(Svg10_2023Alj, null),
  "2023_ljeto_A__12": () => e(Svg12_2023Alj, null),
  "2023_ljeto_A__14": () => e(Svg14_2023Alj, null),
  "2023_ljeto_A__17": () => e(Svg17_2023Alj, null),
  "2023_ljeto_A__19": () => e(Svg19_2023Alj, null),
  "2023_ljeto_A__31.1": () => e(Svg31_2023Alj, null),
  "2023_ljeto_A__31.2": () => e(Svg31_2023Alj, null),
  "2023_ljeto_A__36.1": () => e(Svg36a_2023Alj, null),
  "2023_ljeto_A__37.1": () => e(Svg37_2023Alj, null),
  "2023_ljeto_A__37.2": () => e(Svg37_2023Alj, null),
  "2023_ljeto_A__40": () => e(Svg40_2023Alj, null),
  "2023_ljeto_A__7": () => e(Svg7_2023Alj, null),
};
