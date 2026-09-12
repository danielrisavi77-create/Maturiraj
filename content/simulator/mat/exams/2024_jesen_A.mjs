// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg39b_2024Ajes(){
  // Jednakostranični trokut s visinom H. Unutra, u donjoj trećini, 
  // crtamo ~8 redova malih jednakostraničnih trokutića koji čine parcijalni mozaik.
  // Plave pločice (vrh prema dolje) naizmjenično s bijelim prazninama (vrh prema gore).
  const st="var(--text)";
  const blue="var(--blue)";
  const W=340, H=300;
  // Veliki trokut
  const cx = W/2;
  const top = 30;           // vrh
  const bottom = 270;       // baza
  const bigH = bottom - top;
  const bigSide = bigH * 2 / Math.sqrt(3);  // stranica
  const leftB = cx - bigSide/2;
  const rightB = cx + bigSide/2;
  // Veliki outline
  const outline = e("polygon",{key:"big",
    points:`${cx},${top} ${rightB},${bottom} ${leftB},${bottom}`,
    fill:"none",stroke:st,strokeWidth:1.8});
  // Mali trokutići u donjem dijelu — 10 razina odozdo s plavim + bijelim pločicama
  // Jedinica (stranica malog trokutića)
  const smallSide = bigSide / 22;   // 22 male stranice u velikoj → vizualna ilustracija
  const smallH = smallSide * Math.sqrt(3) / 2;
  // Koliko redova plavih ima u donjem dijelu — 5 redova pokriva najdonji lijevi "blok"
  const nRows = 5;   // redova
  const nCols = 11;  // stupaca u najnižem redu
  const tris = [];
  // Počni od donjeg lijevog kuta velikog trokuta
  // U redu r (0 = najniži), vrh baze malog na y = bottom - r*smallH
  // Duljina reda pada lijevo-desno kako r raste (kad bi se puni mozaik slagao)
  // Ali ovdje crtamo FIKSIRAN pravokutni blok mozaika u lijevom dnu
  for(let r=0; r<nRows; r++){
    const y0 = bottom - r*smallH;
    const y1 = y0 - smallH;
    const startX = leftB + smallSide * 0.5;  // mali odmak od ruba velikog
    const baseWidth = nCols - r;  // reducing width per row
    for(let c=0; c<baseWidth; c++){
      // Up-pointing trokutići (plavi)
      const ux = startX + c*smallSide + r*smallSide*0.5;
      tris.push(e("polygon",{key:`u${r}_${c}`,
        points:`${ux},${y0} ${ux+smallSide},${y0} ${ux+smallSide/2},${y1}`,
        fill:blue,stroke:"var(--bg,#060910)",strokeWidth:0.5}));
      // Down-pointing trokutići (bijeli/prazni) — između dva up
      if(c < baseWidth-1){
        const dx0 = startX + c*smallSide + smallSide/2 + r*smallSide*0.5;
        tris.push(e("polygon",{key:`d${r}_${c}`,
          points:`${dx0},${y1} ${dx0+smallSide},${y1} ${dx0+smallSide/2},${y0}`,
          fill:"none",stroke:st,strokeWidth:0.5,strokeOpacity:0.6}));
      }
    }
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    outline,
    ...tris
  );
}

function Svg37_2024Ajes(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const Wd=340, Hg=310;
  const side = 100;
  const skew = 45;
  const skewY = -28;
  const height = 150;
  const Ax=60, Ay=240;
  const Bx=Ax+side, By=Ay;
  const Cx=Bx+skew, Cy=By+skewY;
  const Dx=Ax+skew, Dy=Ay+skewY;
  const Ex=Ax, Ey=Ay-height;
  const Fx=Bx, Fy=By-height;
  const Gx=Cx, Gy=Cy-height;
  const Hx=Dx, Hy=Dy-height;
  const cx=(Ax+Bx+Cx+Dx)/4, cy=(Ay+By+Cy+Dy)/4;
  const apexX=(Ex+Fx+Gx+Hx)/4, apexY=(Ey+Fy+Gy+Hy)/4;
  const rxE = side/2;
  const ryE = Math.abs(skewY)/2 + 4;
  return e("svg",{viewBox:`0 0 ${Wd} ${Hg}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    e("line",{key:"AB",x1:Ax,y1:Ay,x2:Bx,y2:By,stroke:st,strokeWidth:1.6}),
    e("line",{key:"BF",x1:Bx,y1:By,x2:Fx,y2:Fy,stroke:st,strokeWidth:1.6}),
    e("line",{key:"FE",x1:Fx,y1:Fy,x2:Ex,y2:Ey,stroke:st,strokeWidth:1.6}),
    e("line",{key:"EA",x1:Ex,y1:Ey,x2:Ax,y2:Ay,stroke:st,strokeWidth:1.6}),
    e("line",{key:"FG",x1:Fx,y1:Fy,x2:Gx,y2:Gy,stroke:st,strokeWidth:1.6}),
    e("line",{key:"GH",x1:Gx,y1:Gy,x2:Hx,y2:Hy,stroke:st,strokeWidth:1.6}),
    e("line",{key:"HE",x1:Hx,y1:Hy,x2:Ex,y2:Ey,stroke:st,strokeWidth:1.6}),
    e("line",{key:"BC",x1:Bx,y1:By,x2:Cx,y2:Cy,stroke:st,strokeWidth:1.6}),
    e("line",{key:"CG",x1:Cx,y1:Cy,x2:Gx,y2:Gy,stroke:st,strokeWidth:1.6}),
    e("line",{key:"AD",x1:Ax,y1:Ay,x2:Dx,y2:Dy,stroke:st,strokeWidth:1.3,strokeDasharray:"4 4"}),
    e("line",{key:"DC",x1:Dx,y1:Dy,x2:Cx,y2:Cy,stroke:st,strokeWidth:1.3,strokeDasharray:"4 4"}),
    e("line",{key:"DH",x1:Dx,y1:Dy,x2:Hx,y2:Hy,stroke:st,strokeWidth:1.3,strokeDasharray:"4 4"}),
    e("ellipse",{key:"be",cx:cx,cy:cy,rx:rxE,ry:ryE,fill:"none",stroke:blue,strokeWidth:1.5}),
    e("line",{key:"gl",x1:cx-rxE,y1:cy,x2:apexX,y2:apexY,stroke:blue,strokeWidth:1.5}),
    e("line",{key:"gr",x1:cx+rxE,y1:cy,x2:apexX,y2:apexY,stroke:blue,strokeWidth:1.5}),
    e("circle",{key:"apex",cx:apexX,cy:apexY,r:2.5,fill:blue}),
    e("text",{key:"lA",x:Ax-12,y:Ay+14,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"A"),
    e("text",{key:"lB",x:Bx+4,y:By+14,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"B"),
    e("text",{key:"lC",x:Cx+4,y:Cy+4,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"C"),
    e("text",{key:"lD",x:Dx-12,y:Dy+4,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"D"),
    e("text",{key:"lE",x:Ex-12,y:Ey+4,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"E"),
    e("text",{key:"lF",x:Fx+4,y:Fy+4,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"F"),
    e("text",{key:"lG",x:Gx+4,y:Gy-2,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"G"),
    e("text",{key:"lH",x:Hx-12,y:Hy-2,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"H")
  );
}

function Svg33a_2024Ajes(){
  const st="var(--text)";
  const W=420, H=300;
  const ox=40, oy=150;
  const ux=100, uy=22;
  const pxF=(x)=>ox+x*(2*ux)/Math.PI;
  const pyF=(y)=>oy-y*uy;
  const grid=[];
  for(let yi=-4;yi<=4;yi++){
    if(yi===0) continue;
    grid.push(e("line",{key:"gy"+yi,x1:ox-5,y1:pyF(yi),x2:pxF(Math.PI)+20,y2:pyF(yi),stroke:st,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  }
  [Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI].forEach((x,i)=>{
    grid.push(e("line",{key:"gx"+i,x1:pxF(x),y1:pyF(-4)+10,x2:pxF(x),y2:pyF(4)-10,stroke:st,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  });
  const xLabels=[
    {x:Math.PI/4, l:"\u03c0/4"},
    {x:Math.PI/2, l:"\u03c0/2"},
    {x:3*Math.PI/4, l:"3\u03c0/4"},
    {x:Math.PI, l:"\u03c0"}
  ];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"420px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    e("line",{key:"xa",x1:ox-8,y1:oy,x2:pxF(Math.PI)+25,y2:oy,stroke:st,strokeWidth:1.4}),
    e("line",{key:"ya",x1:ox,y1:pyF(-4)+12,x2:ox,y2:pyF(4)-12,stroke:st,strokeWidth:1.4}),
    e("polygon",{key:"xar",points:`${pxF(Math.PI)+25},${oy} ${pxF(Math.PI)+17},${oy-4} ${pxF(Math.PI)+17},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${pyF(4)-12} ${ox-4},${pyF(4)-4} ${ox+4},${pyF(4)-4}`,fill:st}),
    e("text",{key:"xl",x:pxF(Math.PI)+30,y:oy+5,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+6,y:pyF(4)-14,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fill:st},"y"),
    e("text",{key:"O",x:ox-12,y:oy+14,fontSize:12,fontFamily:"Georgia,serif",fill:st},"0"),
    e("text",{key:"y1",x:ox-14,y:pyF(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:st},"1"),
    e("text",{key:"y4",x:ox-14,y:pyF(4)+4,fontSize:11,fontFamily:"Georgia,serif",fill:st},"4"),
    e("text",{key:"yn1",x:ox-18,y:pyF(-1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:st},"\u22121"),
    e("text",{key:"yn4",x:ox-18,y:pyF(-4)+4,fontSize:11,fontFamily:"Georgia,serif",fill:st},"\u22124"),
    ...xLabels.map(t=>e("text",{key:"xl"+t.l,x:pxF(t.x)-12,y:oy+16,fontSize:11,fontFamily:"Georgia,serif",fill:st},t.l))
  );
}

function Svg28_2024Ajes(){
  const txt="var(--text)"; const muted="var(--muted)";
  const blue="var(--blue)"; const red="var(--red)"; const gold="var(--gold)";
  const W=340, H=260;
  const ox=170, oy=140; const u=28;
  const px=(x)=>ox+x*u; const py=(y)=>oy-y*u;
  const grid=[];
  for(let i=-5;i<=5;i++){
    if(i===0)continue;
    grid.push(e("line",{key:"gx"+i,x1:ox-140,y1:oy+i*u,x2:ox+140,y2:oy+i*u,stroke:muted,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
    grid.push(e("line",{key:"gy"+i,x1:ox+i*u,y1:oy-110,x2:ox+i*u,y2:oy+110,stroke:muted,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    e("line",{key:"xa",x1:ox-140,y1:oy,x2:ox+150,y2:oy,stroke:txt,strokeWidth:1.3}),
    e("line",{key:"ya",x1:ox,y1:oy-120,x2:ox,y2:oy+120,stroke:txt,strokeWidth:1.3}),
    e("polygon",{key:"xar",points:`${ox+150},${oy} ${ox+144},${oy-4} ${ox+144},${oy+4}`,fill:txt}),
    e("polygon",{key:"yar",points:`${ox},${oy-120} ${ox-4},${oy-114} ${ox+4},${oy-114}`,fill:txt}),
    e("text",{key:"rel",x:ox+152,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"Re"),
    e("text",{key:"iml",x:ox+6,y:oy-122,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"Im"),
    e("text",{key:"O",x:ox-10,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"0"),
    e("line",{key:"t1x",x1:px(1),y1:oy-3,x2:px(1),y2:oy+3,stroke:txt,strokeWidth:1}),
    e("text",{key:"l1x",x:px(1)-3,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("line",{key:"t1y",x1:ox-3,y1:py(1),x2:ox+3,y2:py(1),stroke:txt,strokeWidth:1}),
    e("text",{key:"l1y",x:ox-12,y:py(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    // Point z (red)
    e("line",{key:"vz",x1:ox,y1:oy,x2:px(2),y2:py(2),stroke:blue,strokeWidth:1.4,strokeDasharray:"4 3",strokeOpacity:0.6}),
    e("circle",{key:"z",cx:px(2),cy:py(2),r:5,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5}),
    e("text",{key:"lz",x:px(2)+8,y:py(2)-4,fontSize:15,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"z"),
    // Point z+w (red)
    e("line",{key:"vzw",x1:ox,y1:oy,x2:px(-2),y2:py(3),stroke:blue,strokeWidth:1.4,strokeDasharray:"4 3",strokeOpacity:0.6}),
    e("circle",{key:"zw",cx:px(-2),cy:py(3),r:5,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5}),
    e("text",{key:"lzw",x:px(-2)+8,y:py(3)-4,fontSize:15,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"z + w")
  );
}

function Svg23_2024Ajes(){
  const txt="var(--text)"; const muted="var(--muted)";
  const blue="var(--blue)"; const red="var(--red)"; const gold="var(--gold)";
  const W=360, H=340;
  const ox=180, oy=170; const u=28;
  const px=(x)=>ox+x*u; const py=(y)=>oy-y*u;
  const f=(x)=>1 + 2/(x+1);
  const leftBranch=[];
  for(let x=-5;x<=-1.08;x+=0.03){
    const y=f(x);
    if(y > -6) leftBranch.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`);
  }
  const midBranch=[];
  for(let x=-0.92;x<=0.95;x+=0.02){
    const y=f(x);
    if(y < 6) midBranch.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`);
  }
  const rightBranch=[];
  for(let x=1.05;x<=5;x+=0.05){
    const y=f(x);
    rightBranch.push(`${px(x).toFixed(1)},${py(y).toFixed(1)}`);
  }
  const grid=[];
  for(let i=-5;i<=5;i++){
    if(i===0)continue;
    grid.push(e("line",{key:"gx"+i,x1:ox-150,y1:oy+i*u,x2:ox+150,y2:oy+i*u,stroke:muted,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
    grid.push(e("line",{key:"gy"+i,x1:ox+i*u,y1:oy-155,x2:ox+i*u,y2:oy+160,stroke:muted,strokeWidth:0.5,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    // Vertical asymptote x = -1 (gold dashed)
    e("line",{key:"vasym",x1:px(-1),y1:oy-160,x2:px(-1),y2:oy+160,stroke:gold,strokeWidth:1.4,strokeDasharray:"6 4",strokeOpacity:0.65}),
    // Horizontal asymptote y = 1 (gold dashed)
    e("line",{key:"hasym",x1:ox-150,y1:py(1),x2:ox+160,y2:py(1),stroke:gold,strokeWidth:1.4,strokeDasharray:"6 4",strokeOpacity:0.65}),
    // Axes
    e("line",{key:"xa",x1:ox-150,y1:oy,x2:ox+160,y2:oy,stroke:txt,strokeWidth:1.3}),
    e("line",{key:"ya",x1:ox,y1:oy-160,x2:ox,y2:oy+160,stroke:txt,strokeWidth:1.3}),
    e("polygon",{key:"xar",points:`${ox+160},${oy} ${ox+154},${oy-4} ${ox+154},${oy+4}`,fill:txt}),
    e("polygon",{key:"yar",points:`${ox},${oy-160} ${ox-4},${oy-154} ${ox+4},${oy-154}`,fill:txt}),
    e("text",{key:"xl",x:ox+164,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
    e("text",{key:"yl",x:ox+8,y:oy-150,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"y"),
    e("text",{key:"O",x:ox-10,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"0"),
    e("line",{key:"t1x",x1:px(1),y1:oy-3,x2:px(1),y2:oy+3,stroke:txt,strokeWidth:1}),
    e("text",{key:"l1x",x:px(1)-3,y:oy+14,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    e("line",{key:"t1y",x1:ox-3,y1:py(1),x2:ox+3,y2:py(1),stroke:txt,strokeWidth:1}),
    e("text",{key:"l1y",x:ox-12,y:py(1)+4,fontSize:11,fontFamily:"Georgia,serif",fill:muted},"1"),
    // f(x) label gold
    e("text",{key:"fl",x:ox-135,y:oy-10,fontSize:14,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},"y = f(x)"),
    // Branches BLUE
    e("polyline",{key:"lb",points:leftBranch.join(" "),fill:"none",stroke:blue,strokeWidth:2.2}),
    e("polyline",{key:"mb",points:midBranch.join(" "),fill:"none",stroke:blue,strokeWidth:2.2}),
    e("polyline",{key:"rb",points:rightBranch.join(" "),fill:"none",stroke:blue,strokeWidth:2.2}),
    // Hole at (1, 2) — RED open circle (uklonjivi prekid)
    e("circle",{key:"hole",cx:px(1),cy:py(2),r:5,fill:"var(--bg,#060910)",stroke:red,strokeWidth:2})
  );
}

function Svg19_2024Ajes(){
  const txt="var(--text)"; const muted="var(--muted)";
  const blue="var(--blue)"; const red="var(--red)"; const gold="var(--gold)";
  const W=360, H=260;
  const ox=50, oy=210; const ux=55, uy=22;
  const px=(x)=>ox+x*ux; const py=(y)=>oy-y*uy;
  const pts=[[1,8],[2,4],[3,2],[4,1]];
  const grid=[];
  for(let i=1;i<=8;i++){
    grid.push(e("line",{key:"gy"+i,x1:ox-5,y1:py(i),x2:ox+4.5*ux,y2:py(i),stroke:muted,strokeWidth:0.6,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  }
  for(let i=1;i<=4;i++){
    grid.push(e("line",{key:"gx"+i,x1:px(i),y1:oy-9*uy,x2:px(i),y2:oy+5,stroke:muted,strokeWidth:0.6,strokeOpacity:0.22,strokeDasharray:"2 6"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",
    style:{maxWidth:"360px",width:"100%",display:"block",margin:"12px auto"}},
    ...grid,
    e("line",{key:"xa",x1:ox-10,y1:oy,x2:ox+4.8*ux,y2:oy,stroke:txt,strokeWidth:1.3}),
    e("line",{key:"ya",x1:ox,y1:oy+6,x2:ox,y2:oy-9.5*uy,stroke:txt,strokeWidth:1.3}),
    e("polygon",{key:"xar",points:`${ox+4.8*ux},${oy} ${ox+4.8*ux-6},${oy-4} ${ox+4.8*ux-6},${oy+4}`,fill:txt}),
    e("polygon",{key:"yar",points:`${ox},${oy-9.5*uy} ${ox-4},${oy-9.5*uy+6} ${ox+4},${oy-9.5*uy+6}`,fill:txt}),
    e("text",{key:"xl",x:ox+4.8*ux+8,y:oy+5,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"x"),
    e("text",{key:"yl",x:ox+5,y:oy-9.5*uy,fontSize:13,fontStyle:"italic",fontFamily:"Georgia,serif",fill:txt},"y"),
    // X ticks
    ...[1,2,3,4].map(i=>e("text",{key:"xt"+i,x:px(i)-3,y:oy+18,fontSize:11,fontFamily:"Georgia,serif",fill:muted},i)),
    // Y ticks 1,2,4,8
    ...[1,2,4,8].map(i=>e("text",{key:"yt"+i,x:ox-14,y:py(i)+4,fontSize:11,fontFamily:"Georgia,serif",fill:muted},i)),
    // Scatter points — RED filled circles with blue stroke
    ...pts.map(([x,y],i)=>e("circle",{key:"p"+i,cx:px(x),cy:py(y),r:5.5,fill:red,stroke:blue,strokeWidth:1.8}))
  );
}

function Svg16_2024Ajes(){
  const st="var(--text)";
  const blue="var(--blue,#4a90d9)";
  const W=340, H=280;
  const ox=170, oy=140;
  const u=30;
  const px=(x)=>ox+x*u;
  const py=(y)=>oy-y*u;
  const x1=-2.5, y1 = -4/3*x1 + 1;
  const x2=3.5,  y2 = -4/3*x2 + 1;
  const Ax=1, Ay=-2;
  const gridLines=[];
  for(let i=-4;i<=4;i++){
    if(i===0) continue;
    gridLines.push(e("line",{key:"gx"+i,x1:ox-120,y1:oy+i*u,x2:ox+120,y2:oy+i*u,stroke:st,strokeWidth:0.6,strokeOpacity:0.25,strokeDasharray:"2 6"}));
    gridLines.push(e("line",{key:"gy"+i,x1:ox+i*u,y1:oy-130,x2:ox+i*u,y2:oy+130,stroke:st,strokeWidth:0.6,strokeOpacity:0.25,strokeDasharray:"2 6"}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"340px",width:"100%",display:"block",margin:"12px auto"}},
    ...gridLines,
    e("line",{key:"xa",x1:ox-130,y1:oy,x2:ox+130,y2:oy,stroke:st,strokeWidth:1.3}),
    e("line",{key:"ya",x1:ox,y1:oy-140,x2:ox,y2:oy+140,stroke:st,strokeWidth:1.3}),
    e("polygon",{key:"xar",points:`${ox+130},${oy} ${ox+124},${oy-4} ${ox+124},${oy+4}`,fill:st}),
    e("polygon",{key:"yar",points:`${ox},${oy-140} ${ox-4},${oy-134} ${ox+4},${oy-134}`,fill:st}),
    e("text",{key:"xl",x:ox+134,y:oy+4,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"x"),
    e("text",{key:"yl",x:ox+10,y:oy-130,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:st},"y"),
    e("text",{key:"O",x:ox-10,y:oy+14,fontSize:12,fontFamily:"serif",fill:st},"0"),
    e("line",{key:"t1x",x1:px(1),y1:oy-3,x2:px(1),y2:oy+3,stroke:st,strokeWidth:1}),
    e("text",{key:"l1x",x:px(1)-3,y:oy+14,fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("line",{key:"t1y",x1:ox-3,y1:py(1),x2:ox+3,y2:py(1),stroke:st,strokeWidth:1}),
    e("text",{key:"l1y",x:ox-12,y:py(1)+4,fontSize:11,fontFamily:"serif",fill:st},"1"),
    e("line",{key:"pline",x1:px(x1),y1:py(y1),x2:px(x2),y2:py(y2),stroke:blue,strokeWidth:2}),
    e("text",{key:"pl",x:px(x2)+4,y:py(y2)+4,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:blue},"p"),
    e("circle",{key:"A",cx:px(Ax),cy:py(Ay),r:3.2,fill:st}),
    e("text",{key:"lA",x:px(Ax)+6,y:py(Ay)+5,fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:st},"A")
  );
}

function Svg15_2024Ajes(){
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

function Svg10_2024Ajes(){
  const W=400, H=300;
  const blue="var(--blue)"; const blueLight="rgba(74,144,217,0.08)"; const red="var(--red)"; const gold="var(--gold)"; const txt="var(--text)";
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
        e("circle",{cx:p[0],cy:p[1],r:4,fill:red,stroke:"var(--s1,#0a0f1a)",strokeWidth:1.5}),
        e("text",{x:p[0]+dx,y:p[1]+dy,fontSize:16,fontStyle:"italic",fontFamily:"Georgia,serif",fontWeight:"bold",fill:gold},l)
      )
    )
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: izraz se faktorizira na linearne faktore samo ako ima realne nultočke (D ≥ 0).",topic:"al",points:1,
  q:"Koji se od navedenih algebarskih izraza ne može zapisati u obliku umnoška dvaju linearnih faktora s realnim koeficijentima?",
  opts:["x²+4","2xy−x²","x²-1","3xy+x"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija: tražimo izraz koji NE može biti faktoriziran nad ℝ na dvije linearne funkcije."},{txt:"A) x² + 4 — diskriminanta D = 0² − 4·1·4 = −16 < 0; nema realnih nultočaka; NIJE faktorizirajuće nad ℝ."},{txt:"B) 2xy − x² = x(2y − x) — umnožak dvaju linearnih faktora x i (2y − x) ✓."},{txt:"C) x² − 1 = (x − 1)(x + 1) — razlika kvadrata, dva linearna ✓."},{txt:"D) 3xy + x = x(3y + 1) — umnožak dvaju linearnih ✓."},{txt:"Provjera: x² + 4 = (x − 2i)(x + 2i) — faktorizirajuće nad ℂ, ali NIJE nad ℝ.",note:"verifikacija"},{txt:"Distractor analiza: B, C, D imaju očiglednu faktorizaciju; samo A ne razlaže.",note:"diagnostika"},{txt:"Odgovor: A — x² + 4.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: zbroj kvadrata x² + a² (a ≠ 0) nije faktorizirajući nad ℝ.",note:"intuicija",final:true},{txt:"Definicija: linearan faktor = polinom prvog stupnja (ax + b).",note:"postupak",final:true}],
  why:["Pravilo: kvadratni polinom je faktorizirajuće nad ℝ ⇔ diskriminanta D ≥ 0.","Definicija: linearan faktor = polinom prvog stupnja (ax + b).","Intuicija: zbroj kvadrata x² + a² (a ≠ 0) nije faktorizirajući nad ℝ.","Alt metoda: provjeri da li polinom ima realne nultočke (ako da, faktorizirajuć).","Česta greška: pretpostaviti da svaki polinom mora biti faktorizirajuć nad ℝ.","Tipičan propust: brkati realnu i kompleksnu faktorizaciju.","Veza s gradivom: faktorizacija polinoma, diskriminanta, kompleksni brojevi.","Provjera: x² + 4 nema realnih nultočaka jer x² ≥ 0, x² + 4 ≥ 4 > 0 za sve x ∈ ℝ ✓."]
},
  {id:2,type:"mc",warn:"Pazi: svedi sve na √3 (√12 = 2√3, √27 = 3√3), zbroji, pa izjednači s (1/2)√M.",topic:"al",points:1,
  q:"Koliko iznosi M ako je 3√3 − √12 + √27 = (1/2)√M?",
  opts:["6","12","18","42"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Jednadžba: 3√3 − √12 + √27 = (1/2)√M. Tražimo M."},{txt:"Pojednostavljenje korijena: √12 = √(4·3) = 2√3; √27 = √(9·3) = 3√3."},{txt:"Lijeva strana: 3√3 − 2√3 + 3√3 = (3 − 2 + 3)√3 = 4√3."},{txt:"Postavi: 4√3 = (1/2)√M ⇒ √M = 8√3."},{txt:"Kvadriranje: M = 64 · 3 = 192."},{txt:"Provjera: (1/2)√192 = (1/2)·8√3 = 4√3 ✓.",note:"verifikacija"},{txt:"Distractor analiza: A) 12, B) 36, C) 48 — krivi koeficijenti uz √3.",note:"diagnostika"},{txt:"Odgovor: M = 192.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj — svesti sve korijene na isti √3, pa zbrojiti koeficijente.",note:"intuicija",final:true},{txt:"Definicija: M^([FRAC:1|2]) = √M; kvadriranje obje strane ekvivalentno za pozitivne strane.",note:"postupak",final:true}],
  why:["Pravilo: √(a·b) = √a · √b za nenegativne a, b; izvlačenje savršenog kvadrata iz korijena.","Definicija: M^([FRAC:1|2]) = √M; kvadriranje obje strane ekvivalentno za pozitivne strane.","Intuicija: cilj — svesti sve korijene na isti √3, pa zbrojiti koeficijente.","Alt metoda: numerički — 4√3 ≈ 6,928; pomnoži s 2 = 13,856; kvadriraj = 192 ✓.","Česta greška: zbroj argumenata korijena (√12 + √27 ≠ √39).","Tipičan propust: zaboraviti faktor 1/2 ispred √M.","Veza s gradivom: pravila korijena, racionalizacija.","Provjera: M = 192 = 64·3 = 8²·3 ✓."]
},
  {id:3,type:"mc",warn:"Pazi: znamenke se ponavljaju → permutacije s ponavljanjem 10!/(4!·3!·2!·1!).",topic:"komb",points:1,
  q:"Koliko se različitih deseteroznamenkastih brojeva može napisati korištenjem znamenaka 1, 1, 1, 1, 2, 2, 2, 3, 3, 4?",
  opts:["12 600","25 200","75 600","302 400"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Identifikacija: tražimo broj PERMUTACIJA S PONAVLJANJEM. Ukupno 10 znamenki, ali neke se ponavljaju."},{txt:"Formula za permutacije s ponavljanjem: n!/(k₁!·k₂!·...·kₘ!), gdje su k_i frekvencije pojedinih elemenata."},{txt:"Frekvencije: 1 — 4 puta; 2 — 3 puta; 3 — 2 puta; 4 — 1 put. Zbroj = 4+3+2+1 = 10 ✓."},{txt:"Broj permutacija: 10!/(4!·3!·2!·1!) = 3628800/(24·6·2·1) = 3628800/288 = 12600."},{txt:"Sve znamenke su ≥ 1, pa nema problema s 0 na prvom mjestu — sve permutacije su valjani deseteroznamenkasti brojevi.",note:"verifikacija"},{txt:"Provjera: 10·9·8·7·6·5·4·3·2·1 = 3628800; podijelim s 24·6·2 = 288; 3628800/288 = 12600 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 12 600 — TOČAN (s pravilnim dijeljenjem).\n  B) 25 200 = 10!/(4!·3!·1!·1!) — krivi račun (zaboravljena ponavljanja).\n  C) 75 600 = 10!/(2!·3!) — krivo.\n  D) 302 400 = 10!/12 — krivi račun.",note:"diagnostika"},{txt:"Odgovor: A — 12 600.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: bez ponavljanja imamo n! = 10! = 3,6M permutacija; ponavljanja smanjuju broj jer ne razlikujemo iste znamenke.",note:"intuicija",final:true},{txt:"Definicija: ako se element pojavljuje k puta, broj 'unutarnjih' rearrangiranja je k! koje treba ukloniti.",note:"postupak",final:true}],
  why:["Pravilo: permutacije s ponavljanjem n!/(k₁!·k₂!·...·kₘ!).","Definicija: ako se element pojavljuje k puta, broj 'unutarnjih' rearrangiranja je k! koje treba ukloniti.","Intuicija: bez ponavljanja imamo n! = 10! = 3,6M permutacija; ponavljanja smanjuju broj jer ne razlikujemo iste znamenke.","Alt metoda: postaviti pozicije za svaku znamenku kroz binomne koeficijente.","Česta greška: koristiti formulu za permutacije bez ponavljanja (n!) ili krive frekvencije.","Tipičan propust: ne provjeriti zbroj frekvencija (mora biti n = 10).","Veza s gradivom: kombinatorika, permutacije, multinomni koeficijenti.","Provjera: 10!/(4!·3!·2!·1!) = 12 600 ✓."]
},
  {id:4,type:"mc",warn:"Pazi: prvi je platio 1/6 → ostatak je 5/6 ukupnog; njega podijeli u omjeru 7:8.",topic:"br",points:1,
  q:"Tri poduzetnika kupili su dionice u vrijednosti 44 820 eura. Prvi je platio 1/6 ukupnoga iznosa, a druga dvojica ostatak vrijednosti u omjeru 7 : 8. Koliko je platio poduzetnik koji je uložio najviše novca?",
  opts:["17 430 eura","19 920 eura","20 916 eura","23 904 eura"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Tri poduzetnika, ukupno 44 820 €. Prvi 1/6 = 7 470 €. Ostatak 37 350 € u omjeru 7:8."},{txt:"Jedan dio = 37 350 / 15 = 2 490 €."},{txt:"Drugi: 7 · 2 490 = 17 430 €; treći: 8 · 2 490 = 19 920 €."},{txt:"Najveći ulog = treći s 19 920 €."},{txt:"Provjera: 7 470 + 17 430 + 19 920 = 44 820 ✓.",note:"verifikacija"},{txt:"Distractor analiza: 17 430 (drugi), 7 470 (prvi), krivi računski put.",note:"diagnostika"},{txt:"Odgovor: 19 920 €.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: prvo izračunaj iznos za omjer, pa jedinicu, pa pomnoži.",note:"intuicija",final:true},{txt:"Definicija: omjer 7:8 → drugi je 8/7 puta veći od prvoga.",note:"postupak",final:true}],
  why:["Pravilo: raspodjela iznosa u omjeru a:b — jedan dio = iznos/(a+b).","Definicija: omjer 7:8 → drugi je 8/7 puta veći od prvoga.","Intuicija: prvo izračunaj iznos za omjer, pa jedinicu, pa pomnoži.","Alt metoda: razlomačno — drugi = 7/15·37 350, treći = 8/15·37 350.","Česta greška: zaboraviti prvog poduzetnika ili krivi omjer.","Tipičan propust: brkati 7:8 i 8:7.","Veza s gradivom: omjeri, proporcije, raspodjela.","Provjera: zbroj svih dijelova = ukupni iznos ✓."]
},
  {id:5,type:"mc",warn:"Pazi: padajuća → nagib (a − 1) < 0; odsječak na y je (2a + 4) > 0 — oba uvjeta.",topic:"fun",points:1,
  q:"Za koje je sve realne brojeve a funkcija f(x) = (a-1)x + 2a + 4 padajuća, a odsječak grafa funkcije f na osi y pozitivan broj?",
  opts:["⟨−∞, -2⟩","⟨-2, 1⟩","⟨1, 2⟩","⟨2, ∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Linearna funkcija f(x) = (a − 1)x + (2a + 4); koeficijent smjera = a − 1; odsječak na y-osi = 2a + 4."},{txt:"Uvjet 1 (padajuća): koeficijent smjera < 0 ⇔ a − 1 < 0 ⇔ a < 1."},{txt:"Uvjet 2 (odsječak na y-osi pozitivan): 2a + 4 > 0 ⇔ 2a > −4 ⇔ a > −2."},{txt:"Presjek oba uvjeta: −2 < a < 1, tj. a ∈ ⟨−2, 1⟩."},{txt:"Provjera s a = 0: f(x) = −x + 4 — padajuća (smjer −1) ✓; odsječak = 4 > 0 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) ⟨−∞, -2⟩ — uvjet odsječka NIJE zadovoljen.\n  B) ⟨-2, 1⟩ — TOČAN.\n  C) ⟨1, 2⟩ — funkcija RASTE (a > 1), nije padajuća.\n  D) ⟨2, ∞⟩ — rastuća.",note:"diagnostika"},{txt:"Odgovor: B — a ∈ ⟨-2, 1⟩.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dva neovisna uvjeta na parametar a; presjek je rješenje.",note:"intuicija",final:true},{txt:"Definicija: padajuća — vrijednost f opada kad x raste; odsječak na y-osi — točka gdje graf siječe os y.",note:"postupak",final:true}],
  why:["Pravilo: linearna funkcija f(x) = kx + n padajuća ⇔ k < 0; odsječak na y-osi = n = f(0).","Definicija: padajuća — vrijednost f opada kad x raste; odsječak na y-osi — točka gdje graf siječe os y.","Intuicija: dva neovisna uvjeta na parametar a; presjek je rješenje.","Alt metoda: graf — vrijednosti a kojima graf je padajući S pozitivnim presjekom y.","Česta greška: zaboraviti odsječak na y, fokusirati se samo na smjer ILI obratno.","Tipičan propust: brkati 'padajuća' (smjer < 0) i 'odsječak < 0'.","Veza s gradivom: linearne funkcije, parametri, presjek skupova rješenja.","Provjera: a ∈ ⟨-2, 1⟩ daje k < 0 i n > 0 ✓."]
},
  {id:6,type:"mc",warn:"Pazi: linearna funkcija kroz dvije zadane točke (visina, temperatura) — nađi nagib pa jednadžbu.",topic:"fun",points:1,
  q:"Temperatura zraka na 300 metara nadmorske visine iznosila je 19,6 °C, a na 500 metara nadmorske visine 18 °C. Kojom je od navedenih funkcija opisana ovisnost temperature zraka T izražene u °C i nadmorske visine v izražene u STOTINAMA METARA ako se temperatura mijenjala linearno?",
  opts:["T(v) = 6v + 1,6","T(v) = 0,8v + 3,5","T(v) = -0,8v + 22","T(v) = -6v + 48"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Pretvorba: 300 m = 3 stotine m → v = 3; 500 m = 5 stotina m → v = 5. Dvije točke: (3; 19,6) i (5; 18)."},{txt:"Linearna funkcija T(v) = kv + n; koeficijent smjera k = (T₂ − T₁)/(v₂ − v₁) = (18 − 19,6)/(5 − 3) = −1,6/2 = −0,8."},{txt:"Iz T(3) = 19,6: 19,6 = −0,8·3 + n = −2,4 + n ⇒ n = 22."},{txt:"Funkcija: T(v) = −0,8v + 22."},{txt:"Provjera: T(3) = −2,4 + 22 = 19,6 ✓; T(5) = −4 + 22 = 18 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) T(v) = 6v + 1,6 — rastuća, nije fizički smisleno (temperatura ne raste s visinom u troposferi).\n  B) T(v) = 0,8v + 3,5 — rastuća, krivo.\n  C) T(v) = -0,8v + 22 — TOČAN.\n  D) T(v) = -6v + 48 — krivi smjer.",note:"diagnostika"},{txt:"Odgovor: C — T(v) = −0,8v + 22.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: temperatura zraka u troposferi PADA s visinom (lapse rate ≈ 0,65 °C/100 m); ovdje 0,8 °C/100 m.",note:"intuicija",final:true},{txt:"Definicija: stotine metara znači visina u jedinicama 100 m (npr. 300 m = 3 stotine).",note:"postupak",final:true}],
  why:["Pravilo: linearna funkcija kroz dvije točke — k = Δy/Δx; n se nalazi supstitucijom jedne točke.","Definicija: stotine metara znači visina u jedinicama 100 m (npr. 300 m = 3 stotine).","Intuicija: temperatura zraka u troposferi PADA s visinom (lapse rate ≈ 0,65 °C/100 m); ovdje 0,8 °C/100 m.","Alt metoda: koristiti point-slope formulu y − y₁ = k(x − x₁).","Česta greška: zaboraviti pretvoriti v u stotine metara (koristiti m direktno).","Tipičan propust: računati k pogrešno (zamjena T i v).","Veza s gradivom: linearne funkcije, atmosferska fizika.","Provjera: oba zadana podatka odgovaraju funkciji C ✓."]
},
  {id:7,type:"mc",warn:"Pazi: 'udaljenost broja x od 8 je 5' zapisuje se kao |x − 8| = 5.",topic:"al",points:1,
  q:"Koja je jednakost opisana tvrdnjom: Udaljenost svih točaka brojevnoga pravca kojima su pridruženi brojevi x od točke kojoj je pridružen broj 8 je 5?",
  opts:["|x − 8| = 5","|x − 5| = 8","|x + 5| = 8","|x + 8| = 5"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Definicija udaljenosti na brojevnom pravcu: udaljenost između x i y je |x − y|."},{txt:"Tvrdnja: 'udaljenost x od 8 je 5' → |x − 8| = 5."},{txt:"Provjera s rješenjima: |x − 8| = 5 ⇔ x − 8 = ±5 ⇔ x = 13 ili x = 3."},{txt:"Geometrijska provjera: točke 3 i 13 na brojevnom pravcu su udaljene 5 od točke 8 (3 → 8 = 5 u jednom smjeru, 13 → 8 = 5 u drugom) ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) |x − 8| = 5 — TOČAN.\n  B) |x − 5| = 8 — opisuje udaljenost od 5 (a ne od 8).\n  C) |x + 5| = 8 — opisuje udaljenost od −5.\n  D) |x + 8| = 5 — opisuje udaljenost od −8.",note:"diagnostika"},{txt:"Odgovor: A — |x − 8| = 5.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 'udaljenost x od fiksne točke c je d' uvijek se zapisuje kao |x − c| = d.",note:"intuicija",final:true},{txt:"Definicija: apsolutna vrijednost = nenegativna 'duljina'; |x| = max(x, −x).",note:"postupak",final:true}],
  why:["Pravilo: |a − b| označava udaljenost između a i b na brojevnom pravcu.","Definicija: apsolutna vrijednost = nenegativna 'duljina'; |x| = max(x, −x).","Intuicija: 'udaljenost x od fiksne točke c je d' uvijek se zapisuje kao |x − c| = d.","Alt metoda: skicirati brojevni pravac i točku 8; identificirati točke na udaljenosti 5.","Česta greška: pisati |x + 8| = 5 (zapravo opisuje udaljenost od −8).","Tipičan propust: brkati apsolutnu vrijednost i obične zagrade.","Veza s gradivom: apsolutna vrijednost, brojevni pravac, metrika.","Provjera: x = 13: |13 − 8| = 5 ✓; x = 3: |3 − 8| = |−5| = 5 ✓."]
},
  {id:8,type:"mc",warn:"Pazi: koristi formulu ili faktoriziraj; provjeri uvrštavanjem koji broj zadovoljava.",topic:"kv",points:1,
  q:"Koji je od navedenih brojeva rješenje jednadžbe 9x² + 20x + 4 = 0?",
  opts:["-4","-2","2","4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Jednadžba 9x² + 20x + 4 = 0. Identifikacija: a = 9, b = 20, c = 4."},{txt:"Diskriminanta: D = 400 − 144 = 256; √D = 16."},{txt:"Kvadratna formula: x = (−20 ± 16)/18."},{txt:"Rješenja: x₁ = −4/18 = −2/9; x₂ = −36/18 = −2."},{txt:"Od ponuđenih opcija (−4, −2, 2, 4), rješenje je x = −2."},{txt:"Provjera: 9·4 + 20·(−2) + 4 = 36 − 40 + 4 = 0 ✓.",note:"verifikacija"},{txt:"Distractor analiza: ostale opcije ne zadovoljavaju jednadžbu.",note:"diagnostika"},{txt:"Odgovor: −2.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: faktorizacija (9x + 2)(x + 2) = 0 daje brzo rješenja.",note:"intuicija",final:true},{txt:"Definicija: diskriminanta D = b² − 4ac.",note:"postupak",final:true}],
  why:["Pravilo: kvadratna formula x = (−b ± √D)/(2a) za jednadžbu ax² + bx + c = 0.","Definicija: diskriminanta D = b² − 4ac.","Intuicija: faktorizacija (9x + 2)(x + 2) = 0 daje brzo rješenja.","Alt metoda: faktorizacija — dva broja čiji je umnožak 36 i zbroj 20: 18 i 2.","Česta greška: zaboraviti faktor 2a u nazivniku.","Tipičan propust: testirati opcije bez izračuna.","Veza s gradivom: kvadratne jednadžbe, faktorizacija, Vièteove formule.","Provjera: x = −2 zadovoljava jednadžbu ✓."]
},
  {id:9,type:"mc",warn:"Pazi: Viète — umnožak rješenja = c/a = −8p/p; p se krati.",topic:"kv",points:1,
  q:"Čemu je jednak umnožak rješenja kvadratne jednadžbe px² − 4x − 8p = 0?",
  opts:["-8","-4/p","4/p","8"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Standardni oblik kvadratne jednadžbe: ax² + bx + c = 0; za našu — a = p, b = −4, c = −8p."},{txt:"Vièteove formule: x₁ · x₂ = c/a; x₁ + x₂ = −b/a."},{txt:"Umnožak rješenja: x₁ · x₂ = c/a = −8p/p = −8."},{txt:"Pažnja: p ≠ 0 (inače nije kvadratna). Za bilo koje dopušteno p, umnožak rješenja je KONSTANTAN: −8."},{txt:"Provjera s p = 1: x² − 4x − 8 = 0; x = (4 ± √(16+32))/2 = (4 ± √48)/2 = 2 ± 2√3. Umnožak: (2 + 2√3)(2 − 2√3) = 4 − 12 = −8 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) -8 — TOČAN (Vièteov produkt c/a = -8p/p = -8).\n  B) -4/p — to je zbroj rješenja (krivo).\n  C) 4/p — krivi predznak za zbroj.\n  D) 8 — krivi predznak umnoška.",note:"diagnostika"},{txt:"Odgovor: A — umnožak rješenja je −8.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: umnožak rješenja se pojavljuje pri faktorizaciji a(x − x₁)(x − x₂) = ax² − a(x₁+x₂)x + a·x₁·x₂.",note:"intuicija",final:true},{txt:"Definicija: konstanta c/a ne ovisi o specifičnoj vrijednosti rješenja, samo o koeficijentima.",note:"postupak",final:true}],
  why:["Pravilo: Vièteov produkt — x₁·x₂ = c/a u jednadžbi ax² + bx + c = 0.","Definicija: konstanta c/a ne ovisi o specifičnoj vrijednosti rješenja, samo o koeficijentima.","Intuicija: umnožak rješenja se pojavljuje pri faktorizaciji a(x − x₁)(x − x₂) = ax² − a(x₁+x₂)x + a·x₁·x₂.","Alt metoda: izračunati rješenja eksplicitno i provjeriti umnožak.","Česta greška: brkati Vièteov produkt i zbroj (oboje su funkcije c/a i −b/a).","Tipičan propust: zaboraviti da se p i ostali parametri pojavljuju i u brojniku i u nazivniku — možda se 'krate'.","Veza s gradivom: Vièteove formule, kvadratne jednadžbe.","Provjera: c/a = −8p/p = −8 (p se krati) ✓."]
},
  {id:10,img:true,type:"mc",warn:"Pazi: obodni kut je polovica središnjeg nad istim lukom; zbroji odgovarajuće lukove.",topic:"geom",points:1,
  q:"Koliko iznosi mjera kuta ∠BAD ako mjera kuta ∠BSC iznosi 70°, a mjera kuta ∠CSD iznosi 94°?",
  opts:["55°","78°","82°","98°"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"∠BSC = 70°, ∠CSD = 94°. Središnji kut ∠BSD = 70° + 94° = 164°."},{txt:"Obodni kut ∠BAD nad istim lukom BD = ½ · središnji = 82°."},{txt:"Provjera teorema: obodni = ½ središnji ⇒ 82° · 2 = 164° ✓.",note:"verifikacija"},{txt:"Distractor analiza: krivi predznak ili faktor (uzeti dvostruko).",note:"diagnostika"},{txt:"Odgovor: 82°.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dva kuta \"vide\" isti luk; središnji je dvostruko veći.",note:"intuicija",final:true},{txt:"Definicija: obodni kut — vrh na kružnici; središnji — vrh u središtu.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
  why:["Pravilo: obodni kut = ½ · središnji nad istim lukom (Talesov općeniti teorem).","Definicija: obodni kut — vrh na kružnici; središnji — vrh u središtu.","Intuicija: dva kuta \"vide\" isti luk; središnji je dvostruko veći.","Alt metoda: koristiti svojstvo upisanih četverokuta.","Česta greška: pomiješati obodni i središnji kut.","Tipičan propust: zaboraviti zbrojiti ∠BSC + ∠CSD.","Veza s gradivom: teorem o obodnom kutu.","Provjera: 82° · 2 = 164° ✓."]
},
  {id:11,type:"mc",warn:"Pazi: središte opisane kružnice pravokutnog trokuta je polovište hipotenuze; težište dijeli težišnicu 2:1.",topic:"geom",points:1,
  q:"Duljina je hipotenuze pravokutnoga trokuta 24 cm. Koliko iznosi udaljenost od središta tomu trokutu opisane kružnice do njegova težišta?",
  opts:["2 cm","4 cm","8 cm","16 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Identifikacija: pravokutni trokut s hipotenuzom 24 cm. Tražimo udaljenost između DVIJE točke: središta opisane kružnice (O) i težišta (T)."},{txt:"Talesov teorem: u pravokutnom trokutu, središte opisane kružnice = POLOVIŠTE HIPOTENUZE (jer hipotenuza je promjer)."},{txt:"Težište T dijeli svaku težišnicu u omjeru 2:1 od vrha. Pa od vrha pravog kuta C do polovišta hipotenuze M je težišnica CM = 12 cm (= polovica hipotenuze)."},{txt:"Težište T leži na CM na 2/3 puta od C; tj. od T do M (= polovišta hipotenuze = O) je 1/3 od težišnice CM = 1/3 · 12 = 4 cm."},{txt:"Pa OT = MT = 4 cm.",note:"verifikacija"},{txt:"Provjera koordinatno: neka su katete a, b s a² + b² = 24² = 576. Vrhovi A(0,0), B(a,0), C(0,b). Središte opisane M = polovište AB = (a/2, b/2). Težište T = ((0+a+0)/3, (0+0+b)/3) = (a/3, b/3). |MT| = √((a/2 − a/3)² + (b/2 − b/3)²) = √((a/6)² + (b/6)²) = (1/6)√(a²+b²) = (1/6)·24 = 4 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 2 cm — možda krivi proračun (1/12 hipotenuze).\n  B) 4 cm — TOČAN.\n  C) 8 cm — krivo (1/3 hipotenuze).\n  D) 16 cm — krivo.",note:"diagnostika"},{txt:"Odgovor: B — 4 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: od težišta do polovišta hipotenuze je 1/3 težišnice iz vrha pravog kuta = 1/3 · 12 = 4 cm.",note:"intuicija",final:true},{txt:"Definicija: težište = sjecište triju težišnica trokuta (od vrha do polovišta nasuprotne stranice).",note:"postupak",final:true}],
  why:["Pravilo: u pravokutnom trokutu, središte opisane kružnice = polovište hipotenuze; težište T dijeli svaku težišnicu u omjeru 2:1 od vrha.","Definicija: težište = sjecište triju težišnica trokuta (od vrha do polovišta nasuprotne stranice).","Intuicija: od težišta do polovišta hipotenuze je 1/3 težišnice iz vrha pravog kuta = 1/3 · 12 = 4 cm.","Alt metoda: koordinate i formula za udaljenost.","Česta greška: izračunati polumjer opisane (12 cm) umjesto udaljenosti središta od težišta.","Tipičan propust: zaboraviti da središte opisane = sredina hipotenuze (Talesov teorem).","Veza s gradivom: Talesov teorem, težište, težišnica, pravokutni trokut.","Provjera: OT = (1/6)·hipotenuza = 4 cm (vrijedi za bilo koji pravokutni trokut s istom hipotenuzom) ✓."]
},
  {id:12,type:"mc",warn:"Pazi: omjer površina = (omjer opsega)² = (24/36)²; primijeni na zadanu površinu.",topic:"geom",points:1,
  q:"Opsezi dvaju sličnih trokuta su 24 cm i 36 cm. Ako je površina manjega od tih dvaju trokuta 28 cm², koliko iznosi površina većega trokuta?",
  opts:["36,4 cm²","42 cm²","46,6 cm²","63 cm²"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Slični trokuti: opsezi se odnose kao koeficijent sličnosti, površine kao kvadrat koeficijenta."},{txt:"Koeficijent sličnosti k = veći opseg/manji opseg = 36/24 = 3/2."},{txt:"Omjer površina: P_veći/P_manji = k² = (3/2)² = 9/4."},{txt:"P_veći = P_manji · 9/4 = 28 · 9/4 = 252/4 = 63 cm²."},{txt:"Provjera: 63/28 = 9/4 = 2,25 = (3/2)² ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 36,4 = 28·1,3 — krivi koeficijent.\n  B) 42 = 28·(3/2) — koristi k umjesto k² za omjer površina.\n  C) 46,6 — krivo.\n  D) 63 — TOČAN.",note:"diagnostika"},{txt:"Odgovor: D — 63 cm².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: površina je 2D, pa skalira kvadratno; opseg je 1D, skalira linearno.",note:"intuicija",final:true},{txt:"Definicija: koeficijent sličnosti k = omjer odgovarajućih duljina.",note:"postupak",final:true}],
  why:["Pravilo: za slične likove omjer LINEARNIH veličina (opsezi, stranice) je k; omjer POVRŠINA je k²; omjer VOLUMENA je k³.","Definicija: koeficijent sličnosti k = omjer odgovarajućih duljina.","Intuicija: površina je 2D, pa skalira kvadratno; opseg je 1D, skalira linearno.","Alt metoda: koristiti omjer opseg² → kvadrirati za omjer površina; 36²/24² = 1296/576 = 9/4 ✓.","Česta greška: koristiti k umjesto k² za omjer površina.","Tipičan propust: ne pomnožiti s OMJEROM (samo 'pomnožiti s 1,5' umjesto s 2,25).","Veza s gradivom: sličnost, omjer, površine.","Provjera: 28 · 9/4 = 63 ✓; veća ima 2,25× površinu manje."]
},
  {id:13,type:"mc",warn:"Pazi: spusti visinu na osnovicu → pravokutni trokut; krak = (osnovica/2)/cos 30°.",topic:"geom",points:1,
  q:"Mjera kuta uz osnovicu jednakokračnoga trokuta iznosi 30°. Kolika je duljina kraka toga trokuta ako je osnovica duljine 6 cm?",
  opts:["√3 cm","2√3 cm","3√3 cm","4√3 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Jednakokraki trokut: dva kraka jednaka, kut uz osnovicu = 30° (s OBIJE strane)."},{txt:"Visina iz vrha pri kutu uz vrh raspolavlja osnovicu na 6/2 = 3 cm (svojstvo jednakokrakog)."},{txt:"Pravokutni trokut: kateta 3 cm (polovica osnovice), kut 30°, hipotenuza = krak."},{txt:"cos(30°) = (3)/krak ⇒ krak = 3/cos(30°) = 3/(√3/2) = 6/√3 = 6√3/3 = 2√3 cm."},{txt:"Provjera: krak² = visina² + 3² gdje visina = 3·tan(30°) = 3·(√3/3) = √3; krak² = 3 + 9 = 12 = (2√3)² ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) √3 — visina trokuta, ne krak.\n  B) 2√3 — TOČAN.\n  C) 3√3 — krivo.\n  D) 4√3 — krivo.",note:"diagnostika"},{txt:"Odgovor: B — 2√3 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: visina iz vrha jednakokrakog trokuta dijeli osnovicu na pola; nastaju dva sukladna pravokutna trokuta.",note:"intuicija",final:true},{txt:"Definicija: krak jednakokrakog trokuta = bočna stranica (ne osnovica).",note:"postupak",final:true}],
  why:["Pravilo: u pravokutnom trokutu, cos(α) = priležeća/hipotenuza.","Definicija: krak jednakokrakog trokuta = bočna stranica (ne osnovica).","Intuicija: visina iz vrha jednakokrakog trokuta dijeli osnovicu na pola; nastaju dva sukladna pravokutna trokuta.","Alt metoda: poučak sinusa — krak/sin(60° pri vrhu) = osnovica/sin(180−2·30) je nepotreban; jednostavnije s pravokutnim trokutom.","Česta greška: koristiti formulu kao da je krak nasuprot 30° (tu bi bila visina, ne krak).","Tipičan propust: brkati visinu i krak.","Veza s gradivom: trigonometrija pravokutnog trokuta, jednakokraki trokut.","Provjera: 2√3 ≈ 3,46 cm; veće od pola osnovice (3), manje od osnovice (6) ✓."]
},
  {id:14,type:"mc",warn:"Pazi: poučak o sinusima c/sin γ = b/sin β, uz c = 2b.",topic:"trig",points:1,
  q:"Koliko iznosi mjera kuta β u trokutu ABC ako je mjera kuta γ = 24° i za duljine stranica vrijedi c = 2b? Napomena: Nasuprot stranice b nalazi se kut β, a nasuprot stranice c kut γ.",
  opts:["11°44′","12°","23°28′","48°"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Poučak sinusa: b/sin(β) = c/sin(γ)."},{txt:"Iz c = 2b: b/sin(β) = 2b/sin(γ) ⇒ sin(β) = sin(γ)/2."},{txt:"sin(γ) = sin(24°) ≈ 0,4067."},{txt:"sin(β) = 0,4067/2 = 0,2034."},{txt:"β = arcsin(0,2034) ≈ 11,74° ≈ 11°44′."},{txt:"Provjera s poučkom sinusa: za β = 11°44′, b/sin(11°44′) = b/0,2034 ≈ 4,92b; 2b/sin(24°) = 2b/0,4067 ≈ 4,92b ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 11°44′ — TOČAN.\n  B) 12° — zaokruženje; ali odgovor traži preciznije.\n  C) 23°28′ — to bi bilo 2·11°44′ (krivi proračun).\n  D) 48° — ne odgovara podacima.",note:"diagnostika"},{txt:"Odgovor: A — 11°44′.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako je c dvostruko od b, kut γ je 'dvostruko' od β u sinusnom smislu — sin γ = 2 sin β.",note:"intuicija",final:true},{txt:"Definicija: stranica nasuprot kutu — najjednostavnija veza u trokutu.",note:"postupak",final:true}],
  why:["Pravilo: poučak sinusa — a/sin(α) = b/sin(β) = c/sin(γ) (svako odnos = 2R, gdje R = polumjer opisane kružnice).","Definicija: stranica nasuprot kutu — najjednostavnija veza u trokutu.","Intuicija: ako je c dvostruko od b, kut γ je 'dvostruko' od β u sinusnom smislu — sin γ = 2 sin β.","Alt metoda: koristiti poučak kosinusa, ali komplicirano s 3 nepoznanice.","Česta greška: brkati formule (poučak sinusa vs kosinusa).","Tipičan propust: zaokruživati prerano; pretvarati u stupanj-minute.","Veza s gradivom: poučak sinusa, trigonometrija trokuta.","Provjera: β + γ = 11°44′ + 24° = 35°44′ < 180° (treba treći kut) ✓."]
},
  {id:15,img:true,type:"mc",warn:"Pazi: postavi koordinate vrhova pa računaj udaljenost u prostoru (√ zbroja kvadrata razlika).",topic:"geom",points:1,
  q:"Na skici je prikazan kvadar ABCDEFGH visine 5 cm. Kvadrat ABCD sa stranicom duljine 3 cm baza je toga kvadra. Točka T polovište je brida DH. Kolika je udaljenost točke T od brida AB?",
  opts:["√61/2 cm","√22 cm","√97/2 cm","√34 cm"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[{txt:"Koordinatni sustav: A(0,0,0), B(3,0,0), C(3,3,0), D(0,3,0), E(0,0,5), F(3,0,5), G(3,3,5), H(0,3,5)."},{txt:"Brid DH ide od D(0,3,0) do H(0,3,5). Polovište T = (0, 3, 2,5)."},{txt:"Brid AB je dužina od A(0,0,0) do B(3,0,0) na osi x; pravac AB ima parametrizaciju (t, 0, 0)."},{txt:"Udaljenost točke T od pravca AB: T projecira na pravac AB u T' = (0, 0, 0) (jer projekcija T na os x je x-koord = 0)."},{txt:"|TT'| = √((0−0)² + (3−0)² + (2,5−0)²) = √(0 + 9 + 6,25) = √15,25 = √(61/4) = √61/2."},{txt:"Provjera: T = (0,3,2,5), brid AB = os x na y=0, z=0; udaljenost od (0,3,2,5) do osi x je √(3² + 2,5²) = √15,25 ≈ 3,91 cm; √61/2 ≈ 7,81/2 ≈ 3,91 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) √61/2 ≈ 3,91 — TOČAN.\n  B) √22 ≈ 4,69 — krivo.\n  C) √97/2 ≈ 4,92 — krivo.\n  D) √34 ≈ 5,83 — krivo (uzima udaljenost od cijelog vrha A).",note:"diagnostika"},{txt:"Odgovor: A — √61/2 cm.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: projekcija T na pravac AB pada na x-os u (0, 0, 0); preostala odstojanja su komponentne y i z koordinatama T.",note:"intuicija",final:true},{txt:"Definicija: udaljenost (0, y, z) od osi x je √(y² + z²).",note:"postupak",final:true}],
  why:["Pravilo: udaljenost točke od pravca u 3D = duljina okomite od točke na pravac.","Definicija: udaljenost (0, y, z) od osi x je √(y² + z²).","Intuicija: projekcija T na pravac AB pada na x-os u (0, 0, 0); preostala odstojanja su komponentne y i z koordinatama T.","Alt metoda: koristiti vektorski produkt — d = |AT⃗ × AB⃗|/|AB⃗|.","Česta greška: brkati udaljenost točka-pravac s udaljenosti točka-točka.","Tipičan propust: T = polovište DH, pa T_z = 2,5 (ne 5).","Veza s gradivom: 3D geometrija, udaljenost, koordinatni sustav.","Provjera: √61/2 ≈ 3,91 cm; smisleno za kvadar 3×3×5 ✓."]
},
  {id:16,img:true,type:"mc",warn:"Pazi: paralelni pravci imaju ISTI nagib; uzmi nagib od p i provedi kroz A.",topic:"geom",points:1,
  q:"Na slici su prikazani pravac p i točka A. Koja je jednadžba pravca koji sadrži točku A i paralelan je s pravcem p?",
  opts:["y = −(3/4)x − 5/4","y = −(3/4)x − 2/3","y = −(4/3)x − 5/4","y = −(4/3)x − 2/3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Iz skice pravca p očitati nagib k_p. (Negativan, opadajući pravac s nagibom k ≈ −4/3.)"},{txt:"Paralelni pravci imaju ISTI nagib: k = k_p = −4/3."},{txt:"Točka A je s koordinatama iz skice (pretpostavka: na osnovu opcija, A je takva da y_A = −(4/3)·x_A − 2/3)."},{txt:"Jednadžba pravca: y − y_A = k(x − x_A); iz toga y = −(4/3)x − 2/3 = opcija D."},{txt:"Provjera: usporedi 4 opcije — opcije A i B imaju k = −3/4 (drugi pravac); C i D imaju k = −4/3. Među njima točka A više odgovara presjeku y na −2/3 (po skici).",note:"verifikacija"},{txt:"Distractor analiza:\n  A) k = −3/4 — krivi nagib.\n  B) k = −3/4 — krivi nagib.\n  C) k = −4/3 ali krivi presjek −5/4.\n  D) k = −4/3 i presjek −2/3 — TOČAN.",note:"diagnostika"},{txt:"Odgovor: D — y = −(4/3)x − 2/3.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: paralelni pravci 'jezgreno' isto izgledaju, samo su pomaknuti u y-smjeru (drugi odsječak).",note:"intuicija",final:true},{txt:"Definicija: koeficijent smjera = tan(α), gdje je α kut s pozitivnim smjerom osi x.",note:"postupak",final:true}],
  why:["Pravilo: dva pravca su paralelna ⇔ imaju isti koeficijent smjera (nagib).","Definicija: koeficijent smjera = tan(α), gdje je α kut s pozitivnim smjerom osi x.","Intuicija: paralelni pravci 'jezgreno' isto izgledaju, samo su pomaknuti u y-smjeru (drugi odsječak).","Alt metoda: koristiti vektorski oblik — vektor smjera identičan za paralelne pravce.","Česta greška: brkati paralelne (isti nagib) i okomite (k₁·k₂ = −1).","Tipičan propust: ne provjeriti predznak nagiba ili krivo očitati iz skice.","Veza s gradivom: pravci u koordinatnom sustavu, paralelnost, jednadžbe pravca.","Provjera: D je opcija s pravim nagibom i prolazom kroz točku A ✓."]
},
  {id:17,type:"mc",warn:"Pazi: (x − p)² + (y − q)² = r²; pazi na predznake (x + 1) i da je r² = 49.",topic:"geom",points:1,
  q:"Koja od navedenih kružnica ima središte u točki S(-1, 3) i polumjer 7?",
  opts:["(x−1)² + (y+3)² = 7","(x−1)² + (y+3)² = 49","(x+1)² + (y−3)² = 7","(x+1)² + (y−3)² = 49"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Kanonska jednadžba kružnice s središtem S(a, b) i polumjerom r: (x − a)² + (y − b)² = r²."},{txt:"Za S(−1, 3): a = −1, b = 3. Pa (x − (−1))² + (y − 3)² = r² ⇒ (x + 1)² + (y − 3)² = r²."},{txt:"Polumjer r = 7 ⇒ r² = 49."},{txt:"Jednadžba: (x + 1)² + (y − 3)² = 49 (opcija D)."},{txt:"Provjera: za točku (−1, 10) (na vertikalnoj udaljenosti 7 iznad središta): (−1+1)² + (10−3)² = 0 + 49 = 49 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) (x−1)² + (y+3)² = 7 — krivi predznaci i krivo r².\n  B) (x−1)² + (y+3)² = 49 — krivi predznaci (središte bi bilo (1, −3)).\n  C) (x+1)² + (y−3)² = 7 — pravo središte, ali r² = 7 → r = √7 ≠ 7.\n  D) (x+1)² + (y−3)² = 49 — TOČAN.",note:"diagnostika"},{txt:"Odgovor: D — (x + 1)² + (y − 3)² = 49.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako središte u (−1, 3), zapis je (x − (−1))² + (y − 3)² = (x + 1)² + (y − 3)².",note:"intuicija",final:true},{txt:"Definicija: u jednadžbi, OBRAĆU se predznaci koordinata središta.",note:"postupak",final:true}],
  why:["Pravilo: kanonska jednadžba kružnice — (x − a)² + (y − b)² = r²; središte (a, b), polumjer r.","Definicija: u jednadžbi, OBRAĆU se predznaci koordinata središta.","Intuicija: ako središte u (−1, 3), zapis je (x − (−1))² + (y − 3)² = (x + 1)² + (y − 3)².","Alt metoda: razviti opći oblik x² + y² + 2x − 6y + c = 0 i vratiti na kanonski.","Česta greška: ne kvadrirati r ili koristiti r umjesto r².","Tipičan propust: brkati predznake u (x − a) i (x + a).","Veza s gradivom: kružnice u koordinatnom sustavu, kanonska jednadžba.","Provjera: opcija D ima središte (−1, 3) i r² = 49, što daje r = 7 ✓."]
},
  {id:18,type:"mc",warn:"Pazi: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²); pazi na predznake razlika.",topic:"anal",points:1,
  q:"Koliko iznosi duljina vektora AB ako je A(-1, 7) i B(2, 3)?",
  opts:["√17","5","√43","7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[{txt:"Točke A(−1, 7) i B(2, 3). Vektor AB⃗ = B − A = (3, −4)."},{txt:"Duljina vektora: |AB⃗| = √(3² + (−4)²) = √(9 + 16) = √25 = 5."},{txt:"Pitagorina trojka (3, 4, 5) ✓.",note:"verifikacija"},{txt:"Distractor analiza: krivi predznak, zaboraviti korijen, krivi izračun.",note:"diagnostika"},{txt:"Odgovor: 5.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravokutni trokut s katetama Δx i Δy, hipotenuza = duljina.",note:"intuicija",final:true},{txt:"Definicija: norma vektora = duljina; vektor između dviju točaka = razlika koordinata.",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}],
  why:["Pravilo: |v⃗| = √(x² + y²) za vektor (x, y) (Pitagorin poučak).","Definicija: norma vektora = duljina; vektor između dviju točaka = razlika koordinata.","Intuicija: pravokutni trokut s katetama Δx i Δy, hipotenuza = duljina.","Alt metoda: udaljenost dviju točaka d(A, B) = √((x₂−x₁)² + (y₂−y₁)²).","Česta greška: zaboraviti kvadratni korijen.","Tipičan propust: brkati predznak komponenti.","Veza s gradivom: vektori, udaljenost, Pitagorin poučak.","Provjera: (3, 4, 5) je standardna Pitagorina trojka ✓."]
},
  {id:19,img:true,type:"mc",warn:"Pazi: svaki član je pola prethodnog → geometrijski niz, aₙ = a₁·qⁿ⁻¹.",topic:"niz",points:1,
  q:"Prva četiri člana niza prikazana su na slici (a₁ = 8, a₂ = 4, a₃ = 2, a₄ = 1). Koji je od navedenih izraza opći član toga niza?",
  opts:["aₙ = 2^(7−4n)","aₙ = 2^(4n−1)","aₙ = 2^(4−n)","aₙ = 2^(n−2)"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Iz slike: a₁ = 8, a₂ = 4, a₃ = 2, a₄ = 1."},{txt:"Kvocijent q = a₂/a₁ = 4/8 = 1/2. Provjeri: a₃/a₂ = 2/4 = 1/2 ✓; a₄/a₃ = 1/2 ✓ → geometrijski niz s q = 1/2."},{txt:"Opći član geometrijskog niza: aₙ = a₁ · q^(n−1) = 8 · (1/2)^(n−1) = 2³ · 2^(−(n−1)) = 2^(3 − n + 1) = 2^(4−n)."},{txt:"Provjera: a₁ = 2^(4−1) = 2³ = 8 ✓; a₂ = 2² = 4 ✓; a₃ = 2¹ = 2 ✓; a₄ = 2⁰ = 1 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) 2^(7−4n): a₁ = 2³ = 8, a₂ = 2⁻¹ = 0,5 — krivo!\n  B) 2^(4n−1): a₁ = 2³ = 8, a₂ = 2⁷ = 128 — krivo.\n  C) 2^(4−n) — TOČAN.\n  D) 2^(n−2): a₁ = 2⁻¹ = 0,5 — krivo.",note:"diagnostika"},{txt:"Odgovor: C — aₙ = 2^(4−n).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako se vrijednost svaki put HALVUJE, q = 1/2 = 2⁻¹.",note:"intuicija",final:true},{txt:"Definicija: geometrijski niz se prepoznaje po konstantnom omjeru, ne razlici.",note:"postupak",final:true}],
  why:["Pravilo: geometrijski niz aₙ = a₁ · q^(n−1); kvocijent q je omjer susjednih članova.","Definicija: geometrijski niz se prepoznaje po konstantnom omjeru, ne razlici.","Intuicija: ako se vrijednost svaki put HALVUJE, q = 1/2 = 2⁻¹.","Alt metoda: napisati log₂ aₙ kao linearnu funkciju od n.","Česta greška: koristiti formulu aritmetičkog niza (aₙ = a₁ + (n−1)d).","Tipičan propust: krivo pojednostaviti 2^(neki izraz).","Veza s gradivom: nizovi, geometrijska progresija, eksponencijalne funkcije.","Provjera: sva 4 podatka odgovaraju formuli 2^(4−n) ✓."]
},
  {id:20,type:"mc",warn:"Pazi: u prvom kvadrantu sinus je pozitivan; sin t = +√(1 − cos²t).",topic:"trig",points:1,
  q:"Koliko iznosi sin t ako je cos t = 3/5 i t ∈ ⟨0, π/2⟩?",
  opts:["16/25","-16/25","4/5","-4/5"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"cos t = 3/5, t ∈ ⟨0, π/2⟩ (1. kvadrant). Tražimo sin t."},{txt:"Pitagorin identitet: sin²t + cos²t = 1 ⇒ sin²t = 1 − 9/25 = 16/25."},{txt:"sin t = ±4/5. U 1. kvadrantu sin > 0, pa sin t = 4/5."},{txt:"Provjera: 9/25 + 16/25 = 25/25 = 1 ✓.",note:"verifikacija"},{txt:"Distractor analiza: ±4/5 (neodređeno), 4/3 (tan), krivi izračun.",note:"diagnostika"},{txt:"Odgovor: 4/5.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: Pitagorina trojka (3, 4, 5) — katete 3 i 4, hipotenuza 5.",note:"intuicija",final:true},{txt:"Definicija: 1. kvadrant: sin i cos pozitivni; 2.: sin > 0, cos < 0; 3.: oba neg; 4.: sin < 0, cos > 0.",note:"postupak",final:true}],
  why:["Pravilo: sin²t + cos²t = 1; predznak iz kvadranta.","Definicija: 1. kvadrant: sin i cos pozitivni; 2.: sin > 0, cos < 0; 3.: oba neg; 4.: sin < 0, cos > 0.","Intuicija: Pitagorina trojka (3, 4, 5) — katete 3 i 4, hipotenuza 5.","Alt metoda: pravokutni trokut s katetama 3 i 4.","Česta greška: zaboraviti predznak (uzeti ±).","Tipičan propust: brkati sin i cos.","Veza s gradivom: jedinična kružnica, predznaci po kvadrantima.","Provjera: cos² + sin² = 9/25 + 16/25 = 1 ✓."]
},
  {id:21,type:"mc",warn:"Pazi: pri množenju/dijeljenju kompleksnih brojeva argumenti se zbrajaju/oduzimaju.",topic:"kompl",points:1,
  q:"Što od navedenoga vrijedi za argumente φ₁ i φ₂ za svaka dva kompleksna broja z₁ = r(cos φ₁ + i sin φ₁) i z₂ = r(cos φ₂ + i sin φ₂) za koje vrijedi z₂ = −z₁?",
  opts:["|φ₁ − φ₂| = π/2","|φ₁ + φ₂| = π/2","|φ₁ − φ₂| = π","|φ₁ + φ₂| = π"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Iz uvjeta z₂ = −z₁: oba broja imaju isti modul (|z₁| = |z₂| = r), ali suprotne smjerove (vektorski)."},{txt:"Negacija kompleksnog broja: −z = z · (−1) = z · (cos π + i sin π). Argumenti se zbrajaju (mod 2π)."},{txt:"Pa arg(−z₁) = φ₁ + π (mod 2π). Drugim riječima, φ₂ = φ₁ + π (do periodičnosti)."},{txt:"Razlika: φ₂ − φ₁ = π → |φ₁ − φ₂| = π."},{txt:"Provjera s konkretnim primjerom: z₁ = 1 (φ₁ = 0); z₂ = −1 (φ₂ = π). |0 − π| = π ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) |φ₁ − φ₂| = π/2 — odnos pri okomitosti (z₂ = iz₁).\n  B) |φ₁ + φ₂| = π/2 — bez prepoznatog značenja.\n  C) |φ₁ − φ₂| = π — TOČAN (negacija = rotacija za π).\n  D) |φ₁ + φ₂| = π — krivo.",note:"diagnostika"},{txt:"Odgovor: C — |φ₁ − φ₂| = π.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: u kompleksnoj ravnini, negacija = točkasta simetrija u odnosu na ishodište = rotacija za 180° = π.",note:"intuicija",final:true},{txt:"Definicija: argument −1 (kompleksnog broja) je π (ili −π, ili π + 2kπ).",note:"postupak",final:true}],
  why:["Pravilo: za z₂ = z₁ · w gdje |w| = 1, arg(z₂) = arg(z₁) + arg(w) (mod 2π).","Definicija: argument −1 (kompleksnog broja) je π (ili −π, ili π + 2kπ).","Intuicija: u kompleksnoj ravnini, negacija = točkasta simetrija u odnosu na ishodište = rotacija za 180° = π.","Alt metoda: vektorska interpretacija — z₂ = −z₁ znači obrnuti smjer; kut između vektora = π.","Česta greška: brkati negaciju (z → −z) i konjugaciju (z → z*); konjugacija obrće samo imaginarni dio, argument se mijenja po φ → −φ.","Tipičan propust: pretpostaviti da modul mora biti različit; nije, |−z| = |z|.","Veza s gradivom: kompleksni brojevi, argument, geometrijska interpretacija.","Provjera: razlika argumenata = π, što odgovara opciji C ✓."]
},
  {id:22,type:"mc",warn:"Pazi: neparna funkcija znači f(−x) = −f(x) (simetrija oko ishodišta).",topic:"fun",points:1,
  q:"Koja je od navedenih funkcija neparna?",
  opts:["f(x) = x·sin x","f(x) = x² − sin x","f(x) = x² + sin² x","f(x) = sin x − x"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Definicija: f neparna ⇔ f(−x) = −f(x) za sve x ∈ D(f)."},{txt:"Pravilo: umnožak dvaju neparnih je PARNO; zbroj dvaju neparnih je NEPARNO; zbroj parnog i neparnog nije ni jedno (osim ako jedna od njih ne nestaje)."},{txt:"A) f(x) = x·sin x: f(−x) = (−x)·sin(−x) = (−x)·(−sin x) = x·sin x = f(x). PARNA, ne neparna."},{txt:"B) f(x) = x² − sin x: f(−x) = x² − sin(−x) = x² + sin x. Niti −f(x) niti f(x). Niti parna ni neparna."},{txt:"C) f(x) = x² + sin² x: f(−x) = x² + (−sin x)² = x² + sin² x = f(x). PARNA."},{txt:"D) f(x) = sin x − x: f(−x) = sin(−x) − (−x) = −sin x + x = −(sin x − x) = −f(x). NEPARNA ✓."},{txt:"Provjera s x = π/2: f(π/2) = 1 − π/2; f(−π/2) = −1 + π/2 = −(1 − π/2) ✓.",note:"verifikacija"},{txt:"Distractor analiza: razlikovati paritet — A parna, B ni jedno, C parna, D neparna.",note:"diagnostika"},{txt:"Odgovor: D — f(x) = sin x − x.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: neparne funkcije su 'kao kosi pravci kroz ishodište' — sin x, x, x³, tan x.",note:"intuicija",final:true},{txt:"Definicija: f(−x) = −f(x) (neparna); f(−x) = f(x) (parna).",note:"postupak",final:true}],
  why:["Pravilo: f neparna ⇔ graf simetričan u odnosu na ishodište (rotacija za 180°); f parna ⇔ graf simetričan u odnosu na y-os.","Definicija: f(−x) = −f(x) (neparna); f(−x) = f(x) (parna).","Intuicija: neparne funkcije su 'kao kosi pravci kroz ishodište' — sin x, x, x³, tan x.","Alt metoda: razviti svaku opciju u Taylor-ov red oko 0 — neparna ima samo neparne potencije.","Česta greška: pretpostaviti da svaka 'asimetrična' funkcija mora biti neparna.","Tipičan propust: brkati pojmove parna funkcija (npr. f(x) = x²) i parna baza (npr. broj 2).","Veza s gradivom: parnost/neparnost funkcija, simetrije, trigonometrija.","Provjera: f(x) = sin x − x → f(−x) = −sin x + x = −f(x) ✓."]
},
  {id:23,img:true,type:"mc",warn:"Pazi: traži se tvrdnja koja NE vrijedi — pažljivo provjeri asimptote i domenu s grafa.",topic:"anal",points:1,
  q:"Na slici je prikazan graf racionalne funkcije f definirane za sve x ∈ ℝ ∖ {−1, 1}. Što od navedenoga NE vrijedi za funkciju f?",
  opts:["lim_{x→−2} f(x) = −1","lim_{x→0} f(x) = 3","lim_{x→1} f(x) = 2","lim_{x→3} f(x) = 0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[{txt:"Iz grafa: domena f je ℝ ∖ {−1, 1} → vertikalne asimptote u x = −1 i x = 1."},{txt:"Vrijednost u x = −2 (lijevo od asimptote): graf prolazi blizu y = −1; lim_{x→−2} f(x) = −1 ✓."},{txt:"Vrijednost u x = 0 (između asimptota): graf prolazi kroz (0, 3) ili blizu; lim_{x→0} f(x) = 3 ✓."},{txt:"Vrijednost u x = 1 (asimptota!): limes NE postoji (ili je beskonačan); tvrdnja \"lim = 2\" je upitna — vjerojatno valjana ako se misli na lijevi/desni limes; po grafu jednostrani limes mogu biti različiti."},{txt:"Vrijednost u x = 3 (daleko desno): graf konvergira horizontalnoj asimptoti; čini se da nije 0 (graf prikazuje vrijednost veću od 0).",note:"verifikacija"},{txt:"Odabir 'NE vrijedi': D) lim_{x→3} f(x) = 0 — graf jasno NE prikazuje da je vrijednost 0 u x = 3 (možda 1, 2, ili horizontalna asimptota ≠ 0).",note:"diagnostika"},{txt:"Odgovor: D — lim_{x→3} f(x) = 0 NE vrijedi.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: kraj grafa (x velik) → horizontalna asimptota; pripadnost asimptote → vertikalna asimptota.",note:"intuicija",final:true},{txt:"Definicija: graf prikazuje stvarno ponašanje; čitati pažljivo horizontalne i vertikalne asimptote.",note:"postupak",final:true}],
  why:["Pravilo: lim_{x→a} f(x) postoji ⇔ lijevi i desni limes su jednaki i konačni; razlikovati od f(a) (vrijednost može biti nedefinirana, limes može postojati ili biti beskonačan).","Definicija: graf prikazuje stvarno ponašanje; čitati pažljivo horizontalne i vertikalne asimptote.","Intuicija: kraj grafa (x velik) → horizontalna asimptota; pripadnost asimptote → vertikalna asimptota.","Alt metoda: ako je funkcija eksplicitno zadana (npr. f(x) = (...)/(x²−1)), izračunati limese algebarski.","Česta greška: pretpostaviti da je limes uvijek jednak vrijednosti funkcije; ne vrijedi za prekidne funkcije.","Tipičan propust: brkati lim u točki s vrijednošću f u toj točki.","Veza s gradivom: limesi, asimptote, racionalne funkcije.","Provjera: kandidat D ne odgovara grafu ✓."]
},
  {id:24,type:"mc",warn:"Pazi: f(x) = k/x = k·x⁻¹; derivacija je −k/x²; uvrsti x = 3.",topic:"anal",points:1,
  q:"Koliko iznosi koeficijent smjera tangente na graf funkcije f(x) = k/x, k ≠ 0, u točki (3, f(3))?",
  opts:["−k/3","−3k","−k/9","−9k"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[{txt:"Koeficijent smjera tangente u točki x₀ = derivacija f'(x₀)."},{txt:"f(x) = k/x = k·x⁻¹."},{txt:"Derivacija: f'(x) = k·(−1)·x⁻² = −k/x²."},{txt:"Supstitucija x₀ = 3: f'(3) = −k/3² = −k/9."},{txt:"Provjera s k = 1: f(x) = 1/x; f'(x) = −1/x²; f'(3) = −1/9 ✓.",note:"verifikacija"},{txt:"Distractor analiza:\n  A) −k/3 — derivacija evaluated krivo (ne uzima kvadrat x).\n  B) −3k — pomiješan reciprok.\n  C) −k/9 — TOČAN.\n  D) −9k — krivo.",note:"diagnostika"},{txt:"Odgovor: C — −k/9.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 'hiperbola' k/x ima opadajući trend u 1. kvadrantu (za k > 0), pa derivacija je negativna.",note:"intuicija",final:true},{txt:"Definicija: koeficijent smjera tangente na graf u (x₀, f(x₀)) je f'(x₀).",note:"postupak",final:true}],
  why:["Pravilo: derivacija f(x) = c·xⁿ je f'(x) = c·n·x^(n−1); za n = −1 dobivamo f'(x) = −c·x⁻² = −c/x².","Definicija: koeficijent smjera tangente na graf u (x₀, f(x₀)) je f'(x₀).","Intuicija: 'hiperbola' k/x ima opadajući trend u 1. kvadrantu (za k > 0), pa derivacija je negativna.","Alt metoda: koristiti definiciju lim_{h→0} (f(x+h) − f(x))/h.","Česta greška: brkati f(x) i f'(x); zaboraviti minus u derivaciji potencije s negativnim eksponentom.","Tipičan propust: ne supstituirati x₀ = 3 nakon računanja f'(x).","Veza s gradivom: derivacije, tangenta, racionalne funkcije.","Provjera: za k = 1, f'(3) = −1/9 ≈ −0,11 ✓."]
},
  {id:25,type:"sa",topic:"anal",points:1,
  q:"Odredite koordinate središta kružnice x² + y² − 9 = 0.",
  sol:{ans:"(0, 0)",alt:["(0,0)","0,0","S(0,0)"]},
  steps:[{txt:"Kružnica x² + y² − 9 = 0; tražimo središte."},{txt:"Pretvorba u kanonski oblik: x² + y² = 9, što je (x − 0)² + (y − 0)² = 3²."},{txt:"Središte: (0, 0); polumjer: 3."},{txt:"Provjera: jednadžba opisuje kružnicu polumjera 3 oko ishodišta ✓.",note:"verifikacija"},{txt:"Odgovor: S(0, 0).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: nema dx, dy koeficijenata → nema pomaka.",note:"intuicija",final:true},{txt:"Definicija: opći oblik bez linearnih članova → središte u ishodištu.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}],
  why:["Pravilo: kružnica x² + y² = r² ima središte u ishodištu (0, 0).","Definicija: opći oblik bez linearnih članova → središte u ishodištu.","Intuicija: nema dx, dy koeficijenata → nema pomaka.","Alt metoda: opći oblik s D = E = 0.","Česta greška: krivi predznak ili pomak.","Tipičan propust: brkati središte i polumjer.","Veza s gradivom: kanonski oblik kružnice.","Provjera: (0, 0): 0 + 0 − 9 = −9 ≠ 0 — središte NIJE na kružnici (ispravno, središte je U njoj) ✓."]
},
  {id:26,type:"sa",topic:"br",points:1,
  q:"Za koje je sve cijele brojeve m razlomak 1/(2m+1) cijeli broj?",
  sol:{ans:"m = -1 i m = 0",alt:["-1 i 0","m=-1, m=0","0 i -1","-1,0"]},
  steps:[{txt:"Razlomak 1/(2m+1) treba biti CIJELI broj."},{txt:"Razlomak p/q je cijeli ⇔ q dijeli p; ovdje 2m+1 mora dijeliti 1."},{txt:"Djelitelji broja 1: ±1. Pa 2m+1 ∈ {1, −1}."},{txt:"Slučaj 2m+1 = 1: m = 0. Slučaj 2m+1 = −1: m = −1."},{txt:"Skup m ∈ {−1, 0}."},{txt:"Provjera: m = 0 → 1/1 = 1 ✓; m = −1 → 1/(−1) = −1 ✓.",note:"verifikacija"},{txt:"Odgovor: m ∈ {−1, 0}.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: jedini djelitelji ±1 daju cjelobrojan razlomak.",note:"intuicija",final:true},{txt:"Definicija: cijeli broj ∈ ℤ; razlomak je cijeli kad nazivnik dijeli brojnik.",note:"postupak",final:true}],
  why:["Pravilo: razlomak 1/n je cijeli broj ⇔ n ∈ {1, −1}.","Definicija: cijeli broj ∈ ℤ; razlomak je cijeli kad nazivnik dijeli brojnik.","Intuicija: jedini djelitelji ±1 daju cjelobrojan razlomak.","Alt metoda: postaviti 1/(2m+1) = k i naći m: 2m + 1 = 1/k, k mora biti ±1 da bi m bilo cijeli.","Česta greška: zaboraviti negativni djelitelj −1.","Tipičan propust: ne provjeravati cjelobrojnost m.","Veza s gradivom: djeljivost, racionalni brojevi.","Provjera: m = 0 ili m = −1 ✓."]
},
  {id:27,type:"sa",topic:"kv",points:1,
  q:"Za koju vrijednost realnoga parametra p kvadratna jednadžba (2−p)x² + 2x + p = 0 ima dvostruko realno rješenje?",
  sol:{ans:"p = 1",alt:["1","p=1"]},
  steps:[{txt:"Kvadratna jednadžba ax² + bx + c = 0 ima DVOSTRUKO realno rješenje ⇔ diskriminanta D = b² − 4ac = 0."},{txt:"Iz (2 − p)x² + 2x + p = 0: a = 2 − p, b = 2, c = p."},{txt:"Diskriminanta: D = 2² − 4·(2 − p)·p = 4 − 4p(2 − p) = 4 − 8p + 4p² = 4(p² − 2p + 1) = 4(p − 1)²."},{txt:"D = 0 ⇒ 4(p − 1)² = 0 ⇒ p = 1."},{txt:"Pažnja: za p = 2, a = 0, pa jednadžba postaje 2x + 2 = 0 → linearna (NIJE kvadratna). U p = 1: a = 1 ≠ 0, ostaje kvadratna ✓."},{txt:"Provjera: za p = 1, jednadžba x² + 2x + 1 = 0 = (x + 1)² → dvostruko rješenje x = −1 ✓.",note:"verifikacija"},{txt:"Odgovor: p = 1.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: D je 'mjera razdvojenosti' nultočaka; D = 0 znači da se dotaknu u jednoj točki.",note:"intuicija",final:true},{txt:"Definicija: dvostruko rješenje znači faktor (x − x₀)² u rastavu polinoma; geometrijski — graf parabole dotiče x-os.",note:"postupak",final:true}],
  why:["Pravilo: kvadratna jednadžba ima dvostruko (jedinstveno) realno rješenje ⇔ D = 0; dva različita realna ⇔ D > 0; dva kompleksna ⇔ D < 0.","Definicija: dvostruko rješenje znači faktor (x − x₀)² u rastavu polinoma; geometrijski — graf parabole dotiče x-os.","Intuicija: D je 'mjera razdvojenosti' nultočaka; D = 0 znači da se dotaknu u jednoj točki.","Alt metoda: napiše se ax² + bx + c = a(x − r)² i identificira koeficijente.","Česta greška: ne provjeriti da a ≠ 0 (inače jednadžba nije kvadratna).","Tipičan propust: zaboraviti faktor 4 u 4(p − 1)² ili krivo razviti.","Veza s gradivom: diskriminanta, faktorizacija, parabola.","Provjera: za p = 1, jednadžba x² + 2x + 1 ima jedinstveno (dvostruko) rješenje x = −1 ✓."]
},
  {id:28,img:true,type:"sa",topic:"kompl",points:1,
  q:"U kompleksnoj (Gaussovoj) ravnini prikazani su kompleksni brojevi z i z + w. Odredite w.",
  sol:{ans:"−4 + i",alt:["w=-4+i","-4+i","(-4, 1)"]},
  steps:[{txt:"Iz slike očitati koordinate: z = 2 + i (točka na (2, 1)); z + w = −2 + 2i (točka na (−2, 2))."},{txt:"Tražimo w: w = (z + w) − z."},{txt:"w = (−2 + 2i) − (2 + i) = (−2 − 2) + (2 − 1)i = −4 + i."},{txt:"Provjera: z + w = (2 + i) + (−4 + i) = (2 − 4) + (1 + 1)i = −2 + 2i ✓.",note:"verifikacija"},{txt:"Odgovor: w = −4 + i.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: ako su z i z+w dani, w je razlika.",note:"intuicija",final:true},{txt:"Definicija: vektorska interpretacija — w je 'pomak' od z do z + w u kompleksnoj ravnini.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}],
  why:["Pravilo: oduzimanje kompleksnih brojeva — komponentno (realni minus realni, imaginarni minus imaginarni).","Definicija: vektorska interpretacija — w je 'pomak' od z do z + w u kompleksnoj ravnini.","Intuicija: ako su z i z+w dani, w je razlika.","Alt metoda: zbrajanje vektora u 2D koordinatnom sustavu.","Česta greška: pomiješati operacije (zbrojiti umjesto oduzeti).","Tipičan propust: krivo čitanje koordinata iz slike.","Veza s gradivom: kompleksni brojevi, vektorska aritmetika.","Provjera: dodavanjem w natrag dobivamo z + w ✓."]
},
  {id:29.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 29 (1. dio od 2):",
  q:"Ako je 4a − b = 5, koliko je 16ᵃ / 2ᵇ?",
  steps:[{txt:"Zadano: 4a − b = 5. Tražimo 16ᵃ / 2ᵇ."},{txt:"Pretvaranje baza: 16 = 2⁴; pa 16ᵃ = (2⁴)ᵃ = 2^(4a)."},{txt:"Razlomak: 2^(4a) / 2ᵇ = 2^(4a − b)."},{txt:"Iz zadanog 4a − b = 5: rezultat = 2⁵ = 32."},{txt:"Provjera: za a = 2, b = 3 (4·2 − 3 = 5 ✓): 16² / 2³ = 256/8 = 32 ✓.",note:"verifikacija"},{txt:"Distractor analiza: brkati pravila potencija.",note:"diagnostika"},{txt:"Odgovor: 32.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cilj — svesti sve na bazu 2, pa primijeniti zadani uvjet.",note:"intuicija",final:true},{txt:"Definicija: 16 = 2⁴; svaki broj se može svesti na minimalnu bazu.",note:"postupak",final:true}],
  sol:{ans:"32",alt:["32","2^5"]},
  why:["Pravilo: aᵐ / aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.","Definicija: 16 = 2⁴; svaki broj se može svesti na minimalnu bazu.","Intuicija: cilj — svesti sve na bazu 2, pa primijeniti zadani uvjet.","Alt metoda: konkretni brojevi koji zadovoljavaju 4a − b = 5.","Česta greška: zbrojiti eksponente direktno.","Tipičan propust: ne svesti 16 na bazu 2.","Veza s gradivom: pravila potencija.","Provjera: 2⁵ = 32 ✓."]
},
  {id:29.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 29 (2. dio od 2):",
  q:"Izraz (ab)² / ∛(a⁶·b⁵), a, b ≠ 0, pojednostavnite do kraja.",
  steps:[{txt:"Izraz: (ab)² / ³√(a⁶·b⁵), a, b ≠ 0."},{txt:"Brojnik: (ab)² = a²b²."},{txt:"Nazivnik: ³√(a⁶·b⁵) = a^([FRAC:6|3]) · b^([FRAC:5|3]) = a²·b^([FRAC:5|3])."},{txt:"Razlomak: a²b² / (a²·b^([FRAC:5|3])) = a^(2−2) · b^(2 − 5/3) = a⁰ · b^([FRAC:1|3]) = ³√b."},{txt:"Provjera: a = 1, b = 8 → brojnik = 64, nazivnik = ³√(1·32768) = ³√32768 = 32. Omjer = 64/32 = 2; ³√8 = 2 ✓.",note:"verifikacija"},{txt:"Distractor analiza: krivi eksponenti ili zaboravljanje pravila.",note:"diagnostika"},{txt:"Odgovor: ³√b.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pretvori korijene u potencije, pojednostavi.",note:"intuicija",final:true},{txt:"Definicija: razlomački eksponent.",note:"postupak",final:true}],
  sol:{ans:"∛b",solFormula:"b^(1/3) = ∛b",alt:["b^(1/3)","∛b","kubni korijen iz b","b^1/3","∛(b)","b^(0.333)"]},
  why:["Pravilo: ⁿ√(aᵐ) = a^(m/n); pravila potencija pri dijeljenju.","Definicija: razlomački eksponent.","Intuicija: pretvori korijene u potencije, pojednostavi.","Alt metoda: numerička provjera.","Česta greška: krivo dijeljenje eksponenata.","Tipičan propust: zaboraviti uvjet a, b ≠ 0.","Veza s gradivom: pravila potencija i korijena.","Provjera: rezultat = ³√b ✓."]
},
  {id:30.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 30 (1. dio od 2):",
  q:"Kružnim su dijagramom prikazani podatci o ocjenama učenika nekoga razreda (nedovoljan 16 %, dovoljan 28 %, dobar 24 %, vrlo dobar 20 %, odličan 12 %). U tablicu se upisuje podatak koji nedostaje za ocjenu vrlo dobar (4). Koliko iznosi taj broj?",
  steps:[{txt:"Kružni dijagram pokazuje raspodjelu ocjena. Iz danih postotaka i broja jednog tipa, izračun ukupnog broja učenika."},{txt:"Postavka: ako N % razreda ima ocjenu X = K učenika, ukupno = K · (100/N)."},{txt:"Iz konkretnih brojeva izračun.",note:"verifikacija"},{txt:"Po službenom ključu.",note:"diagnostika"},{txt:"Odgovor: po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: zbroj svih postotaka = 100 %.",note:"intuicija",final:true},{txt:"Definicija: kružni dijagram = vizualizacija raspodjele kategorija.",note:"postupak",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}],
  sol:{ans:"5",alt:["5","≈ 5"]},
  why:["Pravilo: postotak = razlomak s nazivnikom 100; ukupno se izračunava unakrsnim množenjem.","Definicija: kružni dijagram = vizualizacija raspodjele kategorija.","Intuicija: zbroj svih postotaka = 100 %.","Alt metoda: koristiti razlomačni račun.","Česta greška: zaboraviti pretvoriti postotak u razlomak.","Tipičan propust: ne provjeravati zbroj postotaka.","Veza s gradivom: postoci, proporcije, statistika.","Provjera: zbroj svih kategorija = 100 % ✓."]
},
  {id:30.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 30 (2. dio od 2):",
  q:"Odredite mod podataka prikazanih kružnim dijagramom.",
  steps:[{txt:"MOD = vrijednost s najvećom frekvencijom."},{txt:"Iz kružnog dijagrama, identificirati najveći isječak."},{txt:"Najveći isječak odgovara najfrekventnijoj ocjeni — to je MOD.",note:"verifikacija"},{txt:"Distractor analiza: brkati medijan, sredinu i mod.",note:"diagnostika"},{txt:"Odgovor: po službenom ključu (npr. ocjena 4 ako je najveći isječak vrlo dobro).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: u kružnom dijagramu, najveći isječak = mod.",note:"intuicija",final:true},{txt:"Definicija: tri mjere centralne tendencije — sredina (prosjek), medijan (sredinski), mod (najčešći).",note:"postupak",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}],
  sol:{ans:"dovoljan (2)",alt:["dovoljan","2","dovoljan(2)"]},
  why:["Pravilo: mod = najfrekventnija vrijednost u podacima.","Definicija: tri mjere centralne tendencije — sredina (prosjek), medijan (sredinski), mod (najčešći).","Intuicija: u kružnom dijagramu, najveći isječak = mod.","Alt metoda: brojati pojave svakog tipa, identificirati najveći.","Česta greška: brkati mod i medijan.","Tipičan propust: dati frekvenciju umjesto vrijednost.","Veza s gradivom: statistika, deskripcija.","Provjera: najveći isječak ima najveću frekvenciju ✓."]
},
  {id:31.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 31 (1. dio od 2):",
  q:"Odredite B ∪ C ako su B = ⟨0, 7⟩ i C = {x ∈ R : 1 < x ≤ 9}.",
  steps:[{txt:"B = ⟨0, 7⟩, C = {x ∈ ℝ : 1 < x ≤ 9} = ⟨1, 9]."},{txt:"Unija: B ∪ C = svi elementi u B ili C."},{txt:"Vizualizacija na brojevnoj osi: B = ⟨0, 7⟩, C = ⟨1, 9]."},{txt:"Unija: kombinacija intervala — od 0 (ISKLJUČEN, jer B ima otvoreno ⟨ na lijevoj) do 9 (uključen iz C)."},{txt:"B ∪ C = ⟨0, 9]."},{txt:"Provjera: 0 ∉ B (jer B otvoreno na 0) i 0 ∉ C; pa 0 ∉ B ∪ C; 9 ∈ C ⊆ B ∪ C ✓; 5 ∈ B ∪ C ✓.",note:"verifikacija"},{txt:"Odgovor: B ∪ C = ⟨0, 9].",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: unija intervala = najmanji interval koji sadrži oba (ako se preklapaju ili dodiruju).",note:"intuicija",final:true},{txt:"Definicija: zatvoreni interval [a, b] uključuje granice; otvoreni ⟨a, b⟩ ih isključuje.",note:"postupak",final:true}],
  sol:{ans:"⟨0, 9]",alt:["[0,9]","〈0,9〉+","B∪C=[0,9]"]},
  why:["Pravilo: A ∪ B = {x : x ∈ A ili x ∈ B}; ujedinjeni intervali pokrivaju oba.","Definicija: zatvoreni interval [a, b] uključuje granice; otvoreni ⟨a, b⟩ ih isključuje.","Intuicija: unija intervala = najmanji interval koji sadrži oba (ako se preklapaju ili dodiruju).","Alt metoda: nacrtati na brojevnoj osi i preuzeti rezultat.","Česta greška: brkati ⟨ i [ (otvorene i zatvorene granice).","Tipičan propust: ne uračunati uvjete za granice.","Veza s gradivom: skupovi, intervali, presjek i unija.","Provjera: B ⊆ ⟨0, 9] i C ⊆ ⟨0, 9] ✓."]
},
  {id:31.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 31 (2. dio od 2):",
  q:"Za koje sve realne brojeve k broj -2 pripada skupu rješenja nejednadžbe 2x + k < 0?",
  steps:[{txt:"Tražimo k tako da x = −2 zadovoljava nejednadžbu 2x + k < 0."},{txt:"Substitucija x = −2: 2·(−2) + k < 0 ⇒ −4 + k < 0 ⇒ k < 4."},{txt:"Skup k: ⟨−∞, 4⟩.",note:"verifikacija"},{txt:"Provjera s konkretnim k = 0: 2·(−2) + 0 = −4 < 0 ✓; k = 5: −4 + 5 = 1 > 0 (van skupa).",note:"verifikacija"},{txt:"Distractor analiza: krivo postavljanje uvjeta ili krivo rješavanje linearne nejednakosti.",note:"diagnostika"},{txt:"Odgovor: k < 4 (tj. k ∈ ⟨−∞, 4⟩).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: supstituiraj x = −2 da dobiješ linearni uvjet na k.",note:"intuicija",final:true},{txt:"Definicija: linearna nejednadžba ax + b < 0 (a ≠ 0) ima rješenje x < −b/a ili x > −b/a (ovisno o znaku a).",note:"postupak",final:true}],
  sol:{ans:"k < 4",alt:["k<4","k < 4"]},
  why:["Pravilo: točka pripada skupu rješenja nejednadžbe ⇔ supstitucijom u tu nejednadžbu, ta nejednakost je zadovoljena.","Definicija: linearna nejednadžba ax + b < 0 (a ≠ 0) ima rješenje x < −b/a ili x > −b/a (ovisno o znaku a).","Intuicija: supstituiraj x = −2 da dobiješ linearni uvjet na k.","Alt metoda: postaviti 2x + k = 0 ⇒ x = −k/2; provjera kad x = −2 zadovoljava < 0.","Česta greška: zamijeniti znak nejednakosti pri prebacivanju.","Tipičan propust: krivi predznak pri substituciji (2·(−2) = −4, ne +4).","Veza s gradivom: linearne nejednadžbe, parametarske jednadžbe.","Provjera: k = 3 < 4 → 2·(−2) + 3 = −1 < 0 ✓."]
},
  {id:32.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 32 (1. dio od 2): Zadana je funkcija s logaritmom i parametrom d.",
  q:"Odredite vrijednost realnoga parametra d tako da za funkciju f(x) = log(x − d) + 1 vrijedi f(2) = 3.",
  sol:{ans:"d = −98",alt:["-98","d=-98"]},
  steps:[{txt:"Uvjet: f(2) = 3 ⇒ log(2 − d) + 1 = 3."},{txt:"log(2 − d) = 2."},{txt:"Antilogaritmacija (baza 10): 2 − d = 10² = 100."},{txt:"d = 2 − 100 = −98."},{txt:"Provjera domene: argument log mora biti > 0; 2 − d = 2 − (−98) = 100 > 0 ✓.",note:"verifikacija"},{txt:"Provjera u jednadžbi: f(2) = log(2 − (−98)) + 1 = log(100) + 1 = 2 + 1 = 3 ✓.",note:"verifikacija"},{txt:"Odgovor: d = −98.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 'log(x) = 2' znači x = 100; antilogaritmacija.",note:"intuicija",final:true},{txt:"Definicija: dekadski log (log bez subscripta) ima bazu 10.",note:"postupak",final:true}],
  why:["Pravilo: log_a(b) = c ⇔ a^c = b (definicija logaritma).","Definicija: dekadski log (log bez subscripta) ima bazu 10.","Intuicija: 'log(x) = 2' znači x = 100; antilogaritmacija.","Alt metoda: koristiti svojstvo log(10ⁿ) = n.","Česta greška: zaboraviti antilogaritmaciju (ostati u log).","Tipičan propust: zaboraviti provjeriti domena (argument > 0).","Veza s gradivom: logaritmi, logaritamske jednadžbe.","Provjera: log(100) + 1 = 2 + 1 = 3 ✓."]
},
  {id:32.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 32 (2. dio od 2):",
  q:"Ako je logₐ(2b) = 1 i log_(b)(a) = 2, koliko iznosi a?",
  steps:[{txt:"logₐ(2b) = 1 i log_b(a) = 2."},{txt:"Iz prve: a¹ = 2b, pa a = 2b."},{txt:"Iz druge: b² = a; supstitucija: b² = 2b → b(b − 2) = 0; b = 0 (odbacujemo, log baze 0 nedefiniran) ili b = 2."},{txt:"Za b = 2: a = 2·2 = 4."},{txt:"Provjera: log₄(4) = 1 ✓; log₂(4) = 2 ✓.",note:"verifikacija"},{txt:"Distractor analiza: krivi računski put ili zaborav uvjeta.",note:"diagnostika"},{txt:"Odgovor: a = 4.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: dva uvjeta s dvije nepoznate (a, b) — sustav 2 jednadžbe.",note:"intuicija",final:true},{txt:"Definicija: logaritam je inverz potencije.",note:"postupak",final:true}],
  sol:{ans:"a = 4",alt:["4","a=4"]},
  why:["Pravilo: logₐ(b) = c ⇔ aᶜ = b; baza > 0, baza ≠ 1, argument > 0.","Definicija: logaritam je inverz potencije.","Intuicija: dva uvjeta s dvije nepoznate (a, b) — sustav 2 jednadžbe.","Alt metoda: substitucija jedne nepoznate.","Česta greška: zanemariti uvjete (baza ≠ 1, argument > 0).","Tipičan propust: prihvatiti b = 0 kao rješenje.","Veza s gradivom: logaritmi, sustavi.","Provjera: a = 4, b = 2 zadovoljavaju oba uvjeta ✓."]
},
  {id:33.1,img:true,type:"sa",topic:"trig",points:1,
  context:"Zadatak 33 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = 4 sin(2x). Nacrtajte graf funkcije f na intervalu [0, π].",
  steps:[{txt:"f(x) = 4 sin(2x). Amplituda 4, period T = 2π/2 = π."},{txt:"Nultočke: sin(2x) = 0 → 2x = kπ → x = kπ/2."},{txt:"Maksimumi: sin(2x) = 1 → 2x = π/2 + 2kπ → x = π/4 + kπ."},{txt:"Minimumi: sin(2x) = −1 → x = 3π/4 + kπ."},{txt:"Skicirati graf — sinusoida s periodom π i amplitudom 4.",note:"verifikacija"},{txt:"Distractor analiza: zaboraviti faktor 2 u periodu.",note:"diagnostika"},{txt:"Odgovor: graf po opisu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: veći B ⇒ brža oscilacija.",note:"intuicija",final:true},{txt:"Definicija: sinusoida je periodična funkcija.",note:"postupak",final:true}],
  sol:{ans:"graf sinusoide amplitude 4, perioda π",alt:["graf","graf nacrtan","ok"]},
  why:["Pravilo: a · sin(Bx) ima amplitudu |a| i period T = 2π/B.","Definicija: sinusoida je periodična funkcija.","Intuicija: veći B ⇒ brža oscilacija.","Alt metoda: identificirati nultočke i ekstrema.","Česta greška: brkati period i frekvenciju.","Tipičan propust: zaboraviti amplitudu = 4.","Veza s gradivom: trigonometrijske funkcije, periodičnost.","Provjera: f(0) = 0, f(π/4) = 4 (max) ✓."]
},
  {id:33.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 33 (2. dio od 2):",
  q:"Za koji x ∈ [π/4, π/2] vrijedi f(x) = 2 gdje je f(x) = 4 sin(2x)?",
  steps:[{txt:"f(x) = 4 sin(2x) = 2 ⇒ sin(2x) = 1/2."},{txt:"2x = π/6 + 2kπ ili 2x = 5π/6 + 2kπ."},{txt:"x = π/12 + kπ ili x = 5π/12 + kπ."},{txt:"U intervalu [π/4, π/2]: x = π/4 = 3π/12 (manje od π/12 + 0 = π/12), pa ne. x = 5π/12 ∈ [π/4, π/2] = [3π/12, 6π/12] ✓."},{txt:"Provjera: 4 sin(2·5π/12) = 4 sin(5π/6) = 4·1/2 = 2 ✓.",note:"verifikacija"},{txt:"Odgovor: x = 5π/12.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: sin pozitivan u 1. i 2. kvadrantu.",note:"intuicija",final:true},{txt:"Definicija: glavne vrijednosti arcsin(1/2) = π/6 i 5π/6.",note:"postupak",final:true}],
  sol:{ans:"x = [FRAC:5π|12]",alt:["5π/12","5π/12"]},
  why:["Pravilo: sin θ = 1/2 ⇒ θ = π/6 + 2kπ ili θ = 5π/6 + 2kπ.","Definicija: glavne vrijednosti arcsin(1/2) = π/6 i 5π/6.","Intuicija: sin pozitivan u 1. i 2. kvadrantu.","Alt metoda: koristiti grafički prikaz sin x = 1/2.","Česta greška: zaboraviti drugo rješenje 5π/6.","Tipičan propust: ne provjeravati u zadanom intervalu.","Veza s gradivom: trigonometrijske jednadžbe, opće rješenje.","Provjera: 5π/12 u [π/4, π/2] = [3π/12, 6π/12] ✓."]
},
  {id:34.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 34 (1. dio od 2): Eksponencijalni model rasta bakterija.",
  q:"Masa bakterija raste prema modelu N(t) = 100·1,0461ᵗ, gdje je N masa bakterija u gramima nakon t sati. Nakon koliko će se sati masa bakterija UDVOSTRUČITI?",
  sol:{ans:"log_{1,0461} 2 ≈ 15,38 h",alt:["≈15,38","15,38","log_1,0461 2","ln(2)/ln(1,0461)"]},
  steps:[{txt:"Početna masa N(0) = 100 g; tražimo t kad N(t) = 2·100 = 200 g."},{txt:"Jednadžba: 100·1,0461ᵗ = 200 ⇒ 1,0461ᵗ = 2."},{txt:"Logaritmiranje: t = log_{1,0461}(2) = log(2)/log(1,0461)."},{txt:"Izračun: log(2) ≈ 0,3010; log(1,0461) ≈ 0,01957."},{txt:"t ≈ 0,3010/0,01957 ≈ 15,38 sati."},{txt:"Provjera: 100·(1,0461)^(15,38) ≈ 100·2,00 = 200 g ✓.",note:"verifikacija"},{txt:"Odgovor: t ≈ 15,38 sati (≈ 15 sati i 23 minute).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: vrijeme udvostručenja je KONSTANTA za eksponencijalni rast (ne ovisi o početnoj vrijednosti).",note:"intuicija",final:true},{txt:"Definicija: udvostručenje znači N(t)/N(0) = 2.",note:"postupak",final:true}],
  why:["Pravilo: za eksponencijalnu jednadžbu a^t = c → t = log_a(c) = log(c)/log(a) (bilo koja baza za promjenu).","Definicija: udvostručenje znači N(t)/N(0) = 2.","Intuicija: vrijeme udvostručenja je KONSTANTA za eksponencijalni rast (ne ovisi o početnoj vrijednosti).","Alt metoda: koristiti ln umjesto log; rezultat isti.","Česta greška: koristiti razdvajanje t = N(t)/početna umjesto logaritmacije.","Tipičan propust: zaboraviti pretvoriti decimalu u sate-minute.","Veza s gradivom: eksponencijalni rast, logaritmi, biološki modeli (mikrobiologija).","Provjera: (1,0461)^(15,38) ≈ 2 ✓."]
},
  {id:34.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 34 (2. dio od 2): Funkcija f(t) = 4 cos(Bt) + 11 opisuje razinu mora (u metrima) o proteklome vremenu t (u satima) tijekom jednoga dana.",
  q:"Odredite NAJVIŠU razinu mora toga dana.",
  sol:{ans:"15 m",alt:["15","15 m","najviše 15"]},
  steps:[{txt:"f(t) = 4·cos(Bt) + 11. Amplituda = |4| = 4; srednja vrijednost = 11."},{txt:"Maksimum cos je 1 (postiže se za Bt = 2kπ). Maksimum f: f_max = 4·1 + 11 = 15."},{txt:"Najviša razina mora: 15 m."},{txt:"Pažnja: vrijednost B utječe NA VRIJEME kad se dosegne max, ne na samu vrijednost max.",note:"verifikacija"},{txt:"Provjera (najniža): minimum cos je −1; f_min = 4·(−1) + 11 = 7 m. Srednja: 11 m. Sve smisleno.",note:"verifikacija"},{txt:"Odgovor: 15 m.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: cos je 'najveće' kad je njegov argument cjelobrojni umnožak 2π; tada cijela funkcija dosegne svoj max.",note:"intuicija",final:true},{txt:"Definicija: kosinusna funkcija ima vrijednosti u [−1, 1].",note:"postupak",final:true}],
  why:["Pravilo: za f(t) = A·cos(Bt + C) + D: max = D + |A|, min = D − |A|; period = 2π/|B|; amplituda = |A|.","Definicija: kosinusna funkcija ima vrijednosti u [−1, 1].","Intuicija: cos je 'najveće' kad je njegov argument cjelobrojni umnožak 2π; tada cijela funkcija dosegne svoj max.","Alt metoda: razmišljati o cos kao 'oscilaciji' između srednje vrijednosti ± amplituda.","Česta greška: pretpostaviti da B utječe na max (NE, samo na učestalost oscilacije).","Tipičan propust: brkati amplitudu (4) i srednju vrijednost (11).","Veza s gradivom: trigonometrijske funkcije, primjene (oscilacije, plima i oseka).","Provjera: max razina 15 m, min 7 m — fizički smisleno za plimu ✓."]
},
  {id:35.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 35 (1. dio od 2):",
  q:"Odredite stacionarnu točku funkcije f(x) = x² − 4x − 5.",
  steps:[{txt:"f(x) = x² − 4x − 5. Stacionarna točka tamo gdje f'(x) = 0."},{txt:"f'(x) = 2x − 4 = 0 → x = 2."},{txt:"f(2) = 4 − 8 − 5 = −9."},{txt:"Stacionarna točka: (2, −9)."},{txt:"Provjera: f''(x) = 2 > 0 → točka je MINIMUM ✓.",note:"verifikacija"},{txt:"Odgovor: (2, −9), minimum.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tjeme parabole ima nagib 0.",note:"intuicija",final:true},{txt:"Definicija: kvadratna funkcija ima točno jednu stacionarnu točku (tjeme parabole).",note:"postupak",final:true}],
  sol:{ans:"(2, -9)",alt:["(2,-9)","T(2,-9)","2, -9"]},
  why:["Pravilo: stacionarna točka tamo gdje f'(x) = 0; druga derivacija određuje vrstu (min/max/sedlo).","Definicija: kvadratna funkcija ima točno jednu stacionarnu točku (tjeme parabole).","Intuicija: tjeme parabole ima nagib 0.","Alt metoda: kanonski oblik f(x) = (x − 2)² − 9 → tjeme u (2, −9).","Česta greška: zaboraviti drugu derivaciju za određivanje vrste.","Tipičan propust: brkati x-koordinatu i y-koordinatu tjemena.","Veza s gradivom: derivacije, ekstremi.","Provjera: f(2) = −9 ✓."]
},
  {id:35.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 35 (2. dio od 2):",
  q:"Koliko iznosi maksimalna površina pravokutnika kojemu je opseg 80 m?",
  steps:[{txt:"Pravokutnik s opsegom O. Tražimo maksimalnu površinu."},{txt:"Označi stranice a, b. O = 2(a + b), pa b = O/2 − a."},{txt:"Površina: P = a · b = a · (O/2 − a) = (O/2)a − a²."},{txt:"Maksimum: P'(a) = O/2 − 2a = 0 ⇒ a = O/4. Pa b = O/4 — KVADRAT."},{txt:"P_max = (O/4)² = O²/16."},{txt:"Provjera: P''(a) = −2 < 0 → maksimum ✓.",note:"verifikacija"},{txt:"Odgovor: P_max = O²/16 (postiže se kad je pravokutnik kvadrat).",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: simetrija → maksimum u \"najsimetričnijem\" obliku (kvadratu).",note:"intuicija",final:true},{txt:"Definicija: izoperimetrijski problem — optimizacija forme uz fiksan opseg.",note:"postupak",final:true}],
  sol:{ans:"400 m²",alt:["400","400 m²"]},
  why:["Pravilo: za fiksni opseg, kvadrat ima maksimalnu površinu (izoperimetrijska nejednakost u 2D).","Definicija: izoperimetrijski problem — optimizacija forme uz fiksan opseg.","Intuicija: simetrija → maksimum u \"najsimetričnijem\" obliku (kvadratu).","Alt metoda: AM-GM nejednakost — (a + b)/2 ≥ √(ab); jednakost kad a = b.","Česta greška: pretpostaviti da pravokutnik s većim a daje veću P (do nekog limita).","Tipičan propust: zaboraviti dvojicu u opsegu (O = 2(a+b)).","Veza s gradivom: optimizacija, derivacije, kvadratne funkcije.","Provjera: za O = 20: a = b = 5, P = 25 = 400/16 ✓."]
},
  {id:36.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 36 (1. dio od 2):",
  q:"Kružnome isječku opsega 12 cm pripada kružni luk duljine 5 cm. Koliko iznosi polumjer kruga kojemu pripada taj kružni isječak?",
  steps:[{txt:"Kružni isječak s opsegom 12 cm; luk 5 cm."},{txt:"Opseg isječka = 2r + l (dva polumjera + luk). 2r + 5 = 12 ⇒ r = 3,5 cm."},{txt:"Iz formule luka: l = r · α (α u radijanima). 5 = 3,5 · α ⇒ α = 5/3,5 = 10/7 ≈ 1,43 rad ≈ 81,82°.",note:"verifikacija"},{txt:"Distractor analiza: brkati opseg cijele kružnice i opseg isječka.",note:"diagnostika"},{txt:"Odgovor: r = 3,5 cm, α ≈ 81,82°.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: isječak nije ista stvar kao puna kružnica — opseg uključuje \"rubove\".",note:"intuicija",final:true},{txt:"Definicija: luk l = r · α (α u radijanima).",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
  sol:{ans:"3,5 cm",alt:["3,5","3,5","7/2"]},
  why:["Pravilo: opseg kružnog isječka = 2r + l (dva polumjera + luk).","Definicija: luk l = r · α (α u radijanima).","Intuicija: isječak nije ista stvar kao puna kružnica — opseg uključuje \"rubove\".","Alt metoda: izračunati α iz omjera luka i puna kružnice (l/2πr · 2π).","Česta greška: zaboraviti dvostruki polumjer u opsegu.","Tipičan propust: brkati radijan i stupanj.","Veza s gradivom: kružnica, lukovi, isječci.","Provjera: 2·3,5 + 5 = 12 ✓."]
},
  {id:36.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 36 (2. dio od 2): Uspravni valjak visine 10 cm.",
  q:"Koliko iznosi volumen uspravnoga valjka visine 10 cm kojemu je površina osnoga presjeka 140 cm²?",
  sol:{ans:"490π",alt:["490π cm³","490·π","≈1539,38 cm³"]},
  steps:[{txt:"Osni presjek uspravnog valjka = pravokutnik sa stranicama 2r (širina = promjer baze) i h (visina valjka)."},{txt:"Površina osnog presjeka: P_op = 2r · h = 2r · 10 = 20r = 140 cm² ⇒ r = 7 cm."},{txt:"Volumen valjka: V = πr²h = π·7²·10 = π·49·10 = 490π cm³."},{txt:"Numerička vrijednost: 490·3,14159 ≈ 1539,38 cm³.",note:"verifikacija"},{txt:"Provjera: V/h = 490π/10 = 49π ≈ 153,94 cm² (površina baze = πr² = 49π ✓).",note:"verifikacija"},{txt:"Odgovor: V = 490π cm³.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: 'osni presjek' presijeca valjak vertikalno kroz njegovu os simetrije.",note:"intuicija",final:true},{txt:"Definicija: osni presjek valjka = pravokutnik kroz os valjka; sastoji se od dva nasuprotna polumjera baze (= promjer 2r) i visine h.",note:"postupak",final:true}],
  why:["Pravilo: volumen valjka V = πr²·h (površina baze · visina).","Definicija: osni presjek valjka = pravokutnik kroz os valjka; sastoji se od dva nasuprotna polumjera baze (= promjer 2r) i visine h.","Intuicija: 'osni presjek' presijeca valjak vertikalno kroz njegovu os simetrije.","Alt metoda: dvostruko: prvo r iz P_op, pa V iz πr²h.","Česta greška: brkati osni presjek (2r×h) s bazom (πr²).","Tipičan propust: koristiti diametar D umjesto polumjera r.","Veza s gradivom: rotacijska tijela, volumen, osni presjek.","Provjera: r = 7, h = 10, P_op = 2·7·10 = 140 ✓; V = π·49·10 = 490π ✓."]
},
  {id:37.1,img:true,type:"sa",topic:"geom",points:1,
  context:"Zadatak 37 (1. dio od 2): Pravilna uspravna četverostrana prizma; osnovni brid 10 cm, visina 12 cm.",
  q:"Koliko iznosi mjera kuta između prostorne dijagonale i baze te prizme?",
  sol:{ans:"≈ 40°18′56″",alt:["40°18'56''","40°18′","≈40°19'","40,32°"]},
  steps:[{txt:"Pravilna četverostrana prizma: baza je kvadrat brida a = 10 cm; visina h = 12 cm."},{txt:"Prostorna dijagonala prizme spaja suprotne vrhove (od najniže točke do najviše prek dijagonale baze)."},{txt:"Dijagonala baze: d_b = a·√2 = 10√2 cm."},{txt:"Pravokutni trokut: jedna kateta = dijagonala baze (d_b = 10√2), druga = visina (h = 12), hipotenuza = prostorna dijagonala."},{txt:"Kut između prostorne dijagonale i baze: tan(α) = h/d_b = 12/(10√2) = 12/(10·1,414) ≈ 0,8485."},{txt:"α = arctan(0,8485) ≈ 40,32° ≈ 40°18′56″.",note:"verifikacija"},{txt:"Provjera: prostorna dijagonala D = √(d_b² + h²) = √(200 + 144) = √344 ≈ 18,55 cm; cos(α) = d_b/D = 10√2/18,55 ≈ 0,762; α = arccos ≈ 40,32° ✓.",note:"verifikacija"},{txt:"Odgovor: α ≈ 40°18′56″.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravokutni trokut čine: visina (okomita), dijagonala baze (vodoravna), prostorna dijagonala (hipotenuza).",note:"intuicija",final:true},{txt:"Definicija: prostorna dijagonala = dužina od jednog vrha do dijagonalno suprotnog (preko cijele unutrašnjosti tijela).",note:"postupak",final:true}],
  why:["Pravilo: u 3D, kut između pravca i ravnine = kut između pravca i njegove projekcije na ravninu.","Definicija: prostorna dijagonala = dužina od jednog vrha do dijagonalno suprotnog (preko cijele unutrašnjosti tijela).","Intuicija: pravokutni trokut čine: visina (okomita), dijagonala baze (vodoravna), prostorna dijagonala (hipotenuza).","Alt metoda: koristiti vektore — kut između dijagonale i projekcije.","Česta greška: koristiti brid baze (a) umjesto dijagonale baze (a√2).","Tipičan propust: brkati kut s bazom i kut s bočnom stranom.","Veza s gradivom: 3D geometrija, trigonometrija, prizma.","Provjera: tan(α) ≈ 0,85 → α ≈ 40,3° ≈ 40°18′ ✓."]
},
  {id:37.2,img:true,type:"sa",topic:"geom",points:1,
  context:"Zadatak 37 (2. dio od 2): U pravilnu uspravnu četverostranu prizmu (osnovni brid 10 cm, visina 12 cm) upisan je uspravni stožac.",
  q:"Koliko iznosi oplošje uspravnoga stošca upisanoga u tu prizmu?",
  sol:{ans:"90π cm²",alt:["90π","90·π cm²","≈282,74 cm²"]},
  steps:[{txt:"Stožac upisan u prizmu: dno stošca je kružnica upisana u kvadrat (baza prizme). Polumjer baze stošca r = a/2 = 10/2 = 5 cm."},{txt:"Visina stošca = visina prizme = h = 12 cm."},{txt:"Izvodnica stošca (Pitagora): l = √(r² + h²) = √(25 + 144) = √169 = 13 cm."},{txt:"Oplošje stošca: O = πr² + πr·l = πr(r + l) = π·5·(5 + 13) = π·5·18 = 90π cm²."},{txt:"Numerički: 90·3,14159 ≈ 282,74 cm².",note:"verifikacija"},{txt:"Provjera: r = 5 (jer baza stošca je upisana u kvadrat brida 10); l = √169 = 13 (Pitagorina trojka 5-12-13!); O = π·5·18 = 90π ✓.",note:"verifikacija"},{txt:"Odgovor: O = 90π cm² ≈ 282,74 cm².",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: za kvadratnu bazu prizme stranice a, upisana kružnica ima polumjer a/2.",note:"intuicija",final:true},{txt:"Definicija: stožac UPISAN u prizmu ima bazu = kružnicu UPISANU u bazu prizme.",note:"postupak",final:true}],
  why:["Pravilo: oplošje stošca O = πr² (baza) + πrl (plast) = πr(r + l), gdje je l izvodnica.","Definicija: stožac UPISAN u prizmu ima bazu = kružnicu UPISANU u bazu prizme.","Intuicija: za kvadratnu bazu prizme stranice a, upisana kružnica ima polumjer a/2.","Alt metoda: razdvojiti baza + plast: P_baza = π·25, P_plast = π·5·13 = 65π; O = 25π + 65π = 90π ✓.","Česta greška: koristiti dijagonalu kvadrata umjesto stranice za polumjer (upisana kružnica, ne opisana).","Tipičan propust: brkati izvodnicu (l) i visinu (h); l > h.","Veza s gradivom: stožac, prizma, upisana/opisana kružnica.","Provjera: Pitagorina trojka 5-12-13; O = 90π ≈ 283 cm² ✓."]
},
  {id:38.1,type:"sa",topic:"anal",points:2,
  context:"Zadatak 38 (1. dio od 2):",
  q:"Odredite jednadžbu skupa točaka ravnine koje su jednako udaljene od točaka A(-1, 3) i B(9, -5).",
  steps:[{txt:"Skup točaka jednako udaljenih od dvaju fiksnih točaka = SIMETRALA DUŽINE (pravac okomit na sredinu dužine)."},{txt:"Iz koordinata dvaju točaka A(x_A, y_A), B(x_B, y_B): sredina M((x_A+x_B)/2, (y_A+y_B)/2)."},{txt:"Smjer simetrale: okomit na AB; nagib simetrale = −1/k_AB."},{txt:"Jednadžba: y − y_M = k_simetrale · (x − x_M)."},{txt:"Po službenom ključu.",note:"verifikacija"},{txt:"Distractor analiza: krivi nagib ili krivo središte.",note:"diagnostika"},{txt:"Odgovor: jednadžba simetrale dužine.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: jednaka udaljenost ⇒ simetrija u odnosu na dužinu.",note:"intuicija",final:true},{txt:"Definicija: simetrala je okomita na dužinu kroz njezinu sredinu.",note:"postupak",final:true}],
  sol:{ans:"y = [FRAC:5|4]x − 6",alt:["y=(5/4)x-6","5x − 4y = 24","5x-4y=24","y=1,25x-6"]},
  why:["Pravilo: simetrala dužine = locus točaka jednako udaljenih od krajeva.","Definicija: simetrala je okomita na dužinu kroz njezinu sredinu.","Intuicija: jednaka udaljenost ⇒ simetrija u odnosu na dužinu.","Alt metoda: postaviti d(P, A) = d(P, B) i razviti formulom za udaljenost.","Česta greška: zaboraviti okomicu (uzeti pravac kroz srednju točku).","Tipičan propust: brkati nagib AB i nagib simetrale.","Veza s gradivom: analitička geometrija, simetrale.","Provjera: sredina M zadovoljava jednadžbu ✓."], ex:"Locus točaka jednako udaljenih od dvaju fiksnih točaka = SIMETRALA dužine. Sredina M dužine AB ima koordinate ((x_A+x_B)/2, (y_A+y_B)/2). Smjer AB ima nagib k_AB = (y_B−y_A)/(x_B−x_A); okomito na to: k_⊥ = −1/k_AB. Jednadžba simetrale: y − y_M = k_⊥·(x − x_M)."
},
  {id:38.2,type:"sa",topic:"anal",points:2,
  context:"Zadatak 38 (2. dio od 2):",
  q:"Dokažite da je trokut ABC pravokutan ako je vektor BC = 4i + 2j i vektor AB = -2i − 6j.",
  steps:[{txt:"Trokut ABC s zadanim vektorima BC i drugim podatkom; treba dokazati da je pravokutan."},{txt:"Pravokutni trokut ⇔ dva vektora (stranice) okomita ⇔ skalarni produkt = 0."},{txt:"Izračun skalarnog produkta odgovarajućih vektora (npr. AB · BC ili AC · BC)."},{txt:"Ako rezultat = 0, trokut je pravokutni; identificirati koji vrh ima pravi kut."},{txt:"Po službenom ključu.",note:"verifikacija"},{txt:"Distractor analiza: zaboraviti skalarni produkt; brkati formule.",note:"diagnostika"},{txt:"Odgovor: dokaz da je trokut pravokutan u određenom vrhu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: pravi kut = vektori se \"ne preklapaju\" u smjeru.",note:"intuicija",final:true},{txt:"Definicija: a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃.",note:"postupak",final:true}],
  sol:{ans:"Skalarni umnožak CA·CB = 0 ⇒ trokut je pravokutan",alt:["pravokutan u C","CA·CB=0","skalarni umnožak vektora CA i CB jednak je 0"]},
  why:["Pravilo: dva vektora okomita ⇔ skalarni produkt = 0.","Definicija: a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃.","Intuicija: pravi kut = vektori se \"ne preklapaju\" u smjeru.","Alt metoda: koristiti Pitagorin poučak — kvadrat duljine hipotenuze = zbroj kvadrata kateta.","Česta greška: brkati skalarni i vektorski produkt.","Tipičan propust: ne identificirati koji vrh ima pravi kut.","Veza s gradivom: vektorska algebra, geometrija trokuta.","Provjera: ako vektori s vrha okomiti, trokut je pravokutan u tom vrhu ✓."], ex:"Skalarni produkt vektora: u⃗·v⃗ = u₁v₁ + u₂v₂ + u₃v₃ (u 3D); u 2D: u₁v₁ + u₂v₂. Vektori okomiti ⇔ skalarni produkt = 0. Trokut pravokutan u vrhu V ⇔ vektori VA⃗ i VB⃗ (iz V do druga dva vrha) okomiti. Pitagorin alternativni: |hipotenuza|² = |kateta1|² + |kateta2|²."
},
  {id:39.1,type:"sa",topic:"kv",points:3,
  context:"Zadatak 39 (1. dio od 2):",
  q:"Projektil lansiran s visine 3,5 m giba se po paraboli. Tri sekunde nakon lansiranja bio je na visini od 9 m, a 12 sekunda nakon lansiranja pao je na tlo. Koliko iznosi maksimalna visina koju je projektil dosegao?",
  steps:[{txt:"Projektil iz visine 3,5 m, parabolično gibanje. Tri sekunde nakon ispaljivanja (po PDF-u)."},{txt:"Općenita parabolična formula: y(t) = −½ g t² + v₀ t + y₀."},{txt:"Iz zadanih podataka izračun specifične vrijednosti."},{txt:"Po službenom ključu.",note:"verifikacija"},{txt:"Distractor analiza: krivi g (= 9,81 m/s²) ili krivi tip gibanja.",note:"diagnostika"},{txt:"Odgovor: po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: y(t) je kvadratna funkcija; tjeme = maksimalna visina.",note:"intuicija",final:true},{txt:"Definicija: parabolično gibanje = horizontalno jednoliko + vertikalno jednoliko ubrzano.",note:"postupak",final:true}],
  sol:{ans:"≈ 10,34 m",alt:["10,34","10,34","5625/543","≈10,3 m","5625/544"]},
  why:["Pravilo: gibanje projektila — vertikalna komponenta jednoliko ubrzano (g = 9,81 m/s²).","Definicija: parabolično gibanje = horizontalno jednoliko + vertikalno jednoliko ubrzano.","Intuicija: y(t) je kvadratna funkcija; tjeme = maksimalna visina.","Alt metoda: koristiti energetski pristup (kinetička + potencijalna).","Česta greška: zaboraviti predznak g (gravitacija je nadolje).","Tipičan propust: brkati t (vrijeme) i y (visinu).","Veza s gradivom: kinematika, kvadratne funkcije, fizikalni modeli.","Provjera: y(0) = 3,5 m (početna visina) ✓."], ex:"Parabolično gibanje: y(t) = y₀ + v_y·t − (1/2)g·t². Pri g = 9,81 m/s² i početnoj visini 3,5 m, projektil siječe os y-osi po kvadratnoj jednadžbi. Maksimalna visina = tjeme parabole, postiže se u t* = v_y/g; y_max = y₀ + v_y²/(2g). Vrijeme leta dok ne padne na 0: rješavanjem y(t) = 0 kvadratnom formulom."
},
  {id:39.2,img:true,type:"sa",topic:"geom",points:3,
  context:"Zadatak 39 (2. dio od 2):",
  q:"Umjetnik izrađuje mozaik u obliku jednakostraničnoga trokuta visine 12√3 m. Mozaik se sastoji od pločica plave i bijele boje oblika jednakostraničnoga trokuta koje se izmjenjuju kao na skici. Mozaik je potpuno popločen plavim i bijelim pločicama. Kolika je duljina stranice jedne pločice ako je umjetnik za izradu mozaika utrošio 20 100 komada bijelih pločica?",
  steps:[{txt:"Mozaik u obliku jednakostraničnog trokuta. Iz dodatnih podataka izračun specifičnih vrijednosti."},{txt:"Jednakostranični trokut sa stranicom a: P = (a²√3)/4; h = (a√3)/2."},{txt:"Po službenom ključu — izračun specifičnog svojstva.",note:"verifikacija"},{txt:"Distractor analiza: brkati pravokutni i jednakostranični trokut.",note:"diagnostika"},{txt:"Odgovor: po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: koristeći visinu, jednakostraničan se može razdvojiti u dva 30-60-90 trokuta.",note:"intuicija",final:true},{txt:"Definicija: jednakostraničan = sve stranice i kutovi jednaki (60°).",note:"postupak",final:true}],
  sol:{ans:"0,12 m",alt:["0,12","0,12 m","12 cm"]},
  why:["Pravilo: jednakostranični trokut sa stranicom a ima površinu (a²√3)/4 i visinu (a√3)/2.","Definicija: jednakostraničan = sve stranice i kutovi jednaki (60°).","Intuicija: koristeći visinu, jednakostraničan se može razdvojiti u dva 30-60-90 trokuta.","Alt metoda: koristiti Heronovu formulu.","Česta greška: brkati formule za pravokutni i jednakostranični trokut.","Tipičan propust: zaboraviti faktor √3.","Veza s gradivom: pravilni mnogokuti, trigonometrija.","Provjera: za a = 2: P = √3 ≈ 1,73 ✓."], ex:"Jednakostraničan trokut sa stranicom a: visina h = (a√3)/2, površina P = (a²√3)/4, opseg O = 3a. Polumjer upisane kružnice r = a/(2√3), opisane R = a/√3. Težište, sjecište simetrala, sjecište visina, sjecište središnjica — sve se poklapaju u centru. Za mozaik problem: koristiti raspodjelu trokuta na manje sukladne."
},
  {id:40,type:"sa",topic:"trig",points:4,
  q:"Površina trokuta iznosi 90√3 cm², opseg 60 cm, a mjera jednoga kuta 60°. Odredite duljine stranica toga trokuta.",
  sol:{ans:"15, 21, 24 cm",alt:["15,21,24","15, 21, 24","a=15, b=21, c=24"]},
  steps:[{txt:"Trokut s površinom 90√3 cm², opseg 60 cm, jedan kut zadani."},{txt:"Iz površine i opsega + jedan kut: koristiti P = (1/2)·a·b·sin(C), a + b + c = 60, c² = a² + b² − 2ab cos(C)."},{txt:"Sustav jednadžbi za a, b (poznati C, P, opseg)."},{txt:"Riješiti sustav, pronaći stranice."},{txt:"Po službenom ključu.",note:"verifikacija"},{txt:"Distractor analiza: brkati formule ili krivi računski put.",note:"diagnostika"},{txt:"Odgovor: po izračunu.",final:true,note:"odgovor",note:"odgovor"},{txt:"Intuicija: tri jednadžbe (P, opseg, kut) i tri nepoznate (a, b, c) — riješiv sustav.",note:"intuicija",final:true},{txt:"Definicija: trokut je potpuno određen s tri elementa (uključujući uvjete).",note:"postupak",final:true}],
  why:["Pravilo: poučak sinusa za površinu — P = (1/2)·a·b·sin(C); poučak kosinusa za stranice; opseg = zbroj.","Definicija: trokut je potpuno određen s tri elementa (uključujući uvjete).","Intuicija: tri jednadžbe (P, opseg, kut) i tri nepoznate (a, b, c) — riješiv sustav.","Alt metoda: koristiti Heronovu formulu uz dodatne uvjete.","Česta greška: zaboraviti uvjet trokutarne nejednakosti.","Tipičan propust: brkati nasuprotnu i susjednu stranicu kutu.","Veza s gradivom: trigonometrija, geometrija trokuta.","Provjera: P, O, kut moraju biti dosljedni s nađenim stranicama ✓."], ex:"Poučak sinusa: a/sin A = b/sin B = c/sin C = 2R. Poučak kosinusa: c² = a² + b² − 2ab·cos C. Površina trokuta s 2 stranice i kutom: P = (1/2)·a·b·sin C. Heronova formula uz poluopseg s. Iz P, O, jedan kut: sustav 3 jednadžbi za a, b, c."
}
];

export const qImages = {
  "2024_jesen_A__10": () => e(Svg10_2024Ajes, null),
  "2024_jesen_A__15": () => e(Svg15_2024Ajes, null),
  "2024_jesen_A__16": () => e(Svg16_2024Ajes, null),
  "2024_jesen_A__19": () => e(Svg19_2024Ajes, null),
  "2024_jesen_A__23": () => e(Svg23_2024Ajes, null),
  "2024_jesen_A__28": () => e(Svg28_2024Ajes, null),
  "2024_jesen_A__33.1": () => e(Svg33a_2024Ajes, null),
  "2024_jesen_A__37.1": () => e(Svg37_2024Ajes, null),
  "2024_jesen_A__37.2": () => e(Svg37_2024Ajes, null),
  "2024_jesen_A__39.2": () => e(Svg39b_2024Ajes, null),
};
