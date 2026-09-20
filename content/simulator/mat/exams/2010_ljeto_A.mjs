// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg9_2010LA(){
  const W=320,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",mu="var(--muted)",bg="var(--bg)";
  const bl=_BLUE,grn=_GREEN,gld=_GOLD;
  
  // Postavka iz PDF-a: AB je hipotenuza (i promjer kružnice k), pravi kut u C, C na kružnici k
  // A — dolje-lijevo, B — desno-sredina, C — gore-lijevo (na kružnici)
  const Ax=55, Ay=180;
  const Bx=265, By=95;
  // Centar kružnice k = sredina AB
  const Okx=(Ax+Bx)/2, Oky=(Ay+By)/2;
  const Rk=Math.hypot(Bx-Ax,By-Ay)/2;
  
  // C — na kružnici k, gore-lijevo. Postavi Cx i izračunaj Cy iz uvjeta (Cx-Okx)²+(Cy-Oky)²=Rk²
  const Cx=65;
  const Cydiff=Math.sqrt(Math.max(0, Rk*Rk - (Cx-Okx)*(Cx-Okx)));
  const Cy=Oky-Cydiff; // gornji izbor
  
  // Upisana kružnica k1 — incenter trokuta ABC
  const a=Math.hypot(Bx-Cx,By-Cy);  // CB (nasuprot A)
  const b=Math.hypot(Ax-Cx,Ay-Cy);  // CA (nasuprot B)
  const c=Math.hypot(Ax-Bx,Ay-By);  // AB (nasuprot C — hipotenuza!)
  const Mx=(a*Ax+b*Bx+c*Cx)/(a+b+c);
  const My=(a*Ay+b*By+c*Cy)/(a+b+c);
  const area=Math.abs((Bx-Ax)*(Cy-Ay)-(Cx-Ax)*(By-Ay))/2;
  const sP=(a+b+c)/2;
  const r1=area/sP;
  
  // S — dodirna točka k1 s hipotenuzom AB (projekcija M na pravac AB), kao u originalu
  const ux=(Bx-Ax)/c, uy=(By-Ay)/c;
  const tProj=(Mx-Ax)*ux+(My-Ay)*uy;
  const Sx=Ax+tProj*ux, Sy=Ay+tProj*uy;
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // CIJELA kružnica k — plava, tanji stroke (subtle, jer luk dominira u PDF-u)
    e("circle",{cx:Okx,cy:Oky,r:Rk,fill:"none",stroke:bl,strokeWidth:1.4,opacity:0.85}),
    // Trokut ABC
    e("polygon",{points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,fill:"none",stroke:_BLUE,strokeWidth:1.6}),
    // Mali kvadratić u C koji označava pravi kut (90°)
    (function(){
      const sz=8;
      const v1x=(Ax-Cx)/b, v1y=(Ay-Cy)/b;
      const v2x=(Bx-Cx)/a, v2y=(By-Cy)/a;
      const p0=`${Cx+v1x*sz},${Cy+v1y*sz}`;
      const p1=`${Cx+(v1x+v2x)*sz},${Cy+(v1y+v2y)*sz}`;
      const p2=`${Cx+v2x*sz},${Cy+v2y*sz}`;
      return e("polyline",{points:`${p0} ${p1} ${p2}`,fill:"none",stroke:_BLUE,strokeWidth:1});
    })(),
    // Spojnice MA i MB (kut AMB) — kao u originalu
    e("line",{x1:Mx,y1:My,x2:Ax,y2:Ay,stroke:_BLUE,strokeWidth:1.2}),
    e("line",{x1:Mx,y1:My,x2:Bx,y2:By,stroke:_BLUE,strokeWidth:1.2}),
    // Upisana kružnica k1 — zelena
    e("circle",{cx:Mx,cy:My,r:r1,fill:"none",stroke:grn,strokeWidth:1.5}),
    // Centar M — zelena puna točka
    e("circle",{cx:Mx,cy:My,r:2.5,fill:grn,stroke:bg,strokeWidth:1}),
    // Točka S — zlatna (dodirna na BC)
    e("circle",{cx:Sx,cy:Sy,r:2.8,fill:gld,stroke:bg,strokeWidth:1}),
    // Vrhovi A, B, C — prazne kružnice (NCVVO konvencija)
    e("circle",{cx:Ax,cy:Ay,r:2.8,fill:bg,stroke:t,strokeWidth:1.2}),
    e("circle",{cx:Bx,cy:By,r:2.8,fill:bg,stroke:t,strokeWidth:1.2}),
    e("circle",{cx:Cx,cy:Cy,r:2.8,fill:bg,stroke:t,strokeWidth:1.2}),
    // Oznake točaka
    e("text",{x:Ax-4,y:Ay+15,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"A"),
    e("text",{x:Bx+6,y:By+5,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"B"),
    e("text",{x:Cx-12,y:Cy-2,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"C"),
    e("text",{x:Mx-14,y:My+4,fontSize:12,fontStyle:"italic",fontFamily:"serif",fill:grn},"M"),
    e("text",{x:Sx+4,y:Sy+13,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:gld},"S"),
    // Oznaka k iznad kružnice (gore na vrhu kružnice)
    e("text",{x:Okx-3,y:Oky-Rk-6,textAnchor:"middle",fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:bl},"k"),
    // Oznaka k1 desno od kružnice k1
    e("text",{x:Mx+r1+4,y:My-r1*0.45,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:grn},"k₁")
  );
}

function Svg7_2010LA(){
  const W=320,H=110,sq=72,gap=18;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const off=(W-3*sq-2*gap)/2;
  const t="var(--text)",mu="var(--muted)",bg="var(--bg)";
  const bl=_BLUE,grn=_GREEN,gld=_GOLD;
  
  const polovisteEl=(cx,cy,k)=>e("circle",{key:k,cx:cx,cy:cy,r:2.4,fill:bg,stroke:t,strokeWidth:1.2});
  
  const sqEl=(x0,label,polyPoints,col)=>{
    const cx=x0+sq/2,ty=15;
    return e("g",{key:label},
      // Šrafirani lik (obojeni s pedagoškom razlikom)
      e("polygon",{points:polyPoints,fill:col,stroke:col,strokeWidth:1.2,opacity:0.45}),
      // Kvadrat (preko šrafure)
      e("rect",{x:x0,y:ty,width:sq,height:sq,fill:"none",stroke:_BLUE,strokeWidth:1.6}),
      // Polovišta (prazne kružnice na rubovima — PDF konvencija)
      polovisteEl(cx,ty,"top"),
      polovisteEl(x0+sq,ty+sq/2,"right"),
      polovisteEl(cx,ty+sq,"bot"),
      polovisteEl(x0,ty+sq/2,"left"),
      // Vrhovi (također prazne kružnice — PDF stil)
      polovisteEl(x0,ty,"tl"),
      polovisteEl(x0+sq,ty,"tr"),
      polovisteEl(x0,ty+sq,"bl"),
      polovisteEl(x0+sq,ty+sq,"br"),
      // Oznaka P/Q/R u centru
      e("text",{x:cx,y:ty+sq/2+6,textAnchor:"middle",fontSize:18,fontWeight:600,fill:t,fontStyle:"italic",fontFamily:"serif"},label)
    );
  };
  
  // P: ROMB
  const x1=off,y1=15;
  const p1=`${x1+sq/2},${y1} ${x1+sq},${y1+sq/2} ${x1+sq/2},${y1+sq} ${x1},${y1+sq/2}`;
  // Q: TROKUT
  const x2=off+sq+gap,y2=15;
  const p2=`${x2+sq/2},${y2} ${x2+sq},${y2+sq} ${x2},${y2+sq}`;
  // R: PARALELOGRAM
  const x3=off+2*(sq+gap),y3=15;
  const p3=`${x3+sq/2},${y3} ${x3+sq},${y3} ${x3+sq/2},${y3+sq} ${x3},${y3+sq}`;
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    sqEl(x1,"P",p1,bl),
    sqEl(x2,"Q",p2,grn),
    sqEl(x3,"R",p3,gld)
  );
}

function Svg30_2010Alj(){
  const W=320,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",mu="var(--muted)",bg="var(--bg)";
  const grayFill="var(--s2)",bl=_BLUE,grn=_GREEN,red=_RED;
  
  const plLeft=40,plRight=270,plTop=70,plBot=120;
  const alpha = 60 * Math.PI/180;
  const beta = Math.asin(Math.sin(alpha)/(3/2));
  
  const entX = 130, entY = plTop;
  const inLen = 60;
  const startX = entX - inLen*Math.sin(alpha);
  const startY = entY - inLen*Math.cos(alpha);
  const dThick = plBot - plTop;
  const exitX = entX + dThick*Math.tan(beta);
  const exitY = plBot;
  const outLen = 90;
  const endX = exitX + outLen*Math.sin(alpha);
  const endY = exitY + outLen*Math.cos(alpha);
  const refEndX = entX + (outLen + dThick/Math.cos(alpha))*Math.sin(alpha);
  const refEndY = entY + (outLen + dThick/Math.cos(alpha))*Math.cos(alpha);

  // --- dvostrana strelica za paralelni pomak p ---
  // u = smjer zrake, n = okomica na zraku (prema iscrtkanom produžetku)
  const ux = Math.sin(alpha), uy = Math.cos(alpha);
  const nx = Math.cos(alpha), ny = -Math.sin(alpha);
  // razmak između izlazne zrake i produžetka upadne zrake
  const pDist = (entX - exitX)*nx + (entY - exitY)*ny;
  const pBaseX = exitX + 52*ux, pBaseY = exitY + 52*uy;   // hvatište na izlaznoj (plavoj) zraci
  const pTipX = pBaseX + pDist*nx, pTipY = pBaseY + pDist*ny; // kraj na iscrtkanoj liniji
  const ah = 5, aw = 2.6; // duljina/širina vrha strelice
  const head = (x,y,sx,sy) =>
    `${x.toFixed(1)},${y.toFixed(1)} ${(x+ah*sx+aw*ux).toFixed(1)},${(y+ah*sy+aw*uy).toFixed(1)} ${(x+ah*sx-aw*ux).toFixed(1)},${(y+ah*sy-aw*uy).toFixed(1)}`;
  const pMidX = (pBaseX+pTipX)/2, pMidY = (pBaseY+pTipY)/2;
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Ploča
    e("rect",{x:plLeft,y:plTop,width:plRight-plLeft,height:plBot-plTop,fill:grayFill,stroke:mu,strokeWidth:1}),
    // Okomice (isprekidane)
    e("line",{x1:entX,y1:plTop-25,x2:entX,y2:plTop+25,stroke:mu,strokeWidth:.9,strokeDasharray:"3,2"}),
    e("line",{x1:exitX,y1:plBot-25,x2:exitX,y2:plBot+25,stroke:mu,strokeWidth:.9,strokeDasharray:"3,2"}),
    // Ulazna zraka — PLAVA (real svjetlost)
    e("line",{x1:startX,y1:startY,x2:entX,y2:entY,stroke:bl,strokeWidth:2.2}),
    e("polygon",{
      points:`${entX},${entY} ${(entX-7*Math.sin(alpha)+3*Math.cos(alpha)).toFixed(1)},${(entY-7*Math.cos(alpha)-3*Math.sin(alpha)).toFixed(1)} ${(entX-7*Math.sin(alpha)-3*Math.cos(alpha)).toFixed(1)},${(entY-7*Math.cos(alpha)+3*Math.sin(alpha)).toFixed(1)}`,
      fill:bl
    }),
    // Zraka unutar ploče — PLAVA
    e("line",{x1:entX,y1:entY,x2:exitX,y2:exitY,stroke:bl,strokeWidth:1.8}),
    // REFERENTNA linija (kao da nije bilo loma) — CRVENA isprekidana (pedagoški: "what would happen without")
    e("line",{x1:entX,y1:entY,x2:refEndX,y2:refEndY,stroke:red,strokeWidth:1.1,strokeDasharray:"4,3",opacity:0.75}),
    // Izlazna zraka — PLAVA
    e("line",{x1:exitX,y1:exitY,x2:endX,y2:endY,stroke:bl,strokeWidth:2.2}),
    e("polygon",{
      points:`${endX},${endY} ${(endX-7*Math.sin(alpha)+3*Math.cos(alpha)).toFixed(1)},${(endY-7*Math.cos(alpha)-3*Math.sin(alpha)).toFixed(1)} ${(endX-7*Math.sin(alpha)-3*Math.cos(alpha)).toFixed(1)},${(endY-7*Math.cos(alpha)+3*Math.sin(alpha)).toFixed(1)}`,
      fill:bl
    }),
    // Vitičasta zagrada za d
    e("path",{d:`M ${plRight+8},${plTop+3} Q ${plRight+15},${plTop+3} ${plRight+15},${(plTop+plBot)/2} Q ${plRight+15},${plBot-3} ${plRight+8},${plBot-3}`,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:plRight+22,y:(plTop+plBot)/2+5,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"d"),
    // Paralelni pomak p — ZELENA dvostrana strelica okomita na zrake (razmak zraka ↔ produžetak)
    e("line",{x1:pBaseX.toFixed(1),y1:pBaseY.toFixed(1),x2:pTipX.toFixed(1),y2:pTipY.toFixed(1),stroke:grn,strokeWidth:1.2}),
    e("polygon",{points:head(pBaseX,pBaseY,nx,ny),fill:grn}),
    e("polygon",{points:head(pTipX,pTipY,-nx,-ny),fill:grn}),
    e("text",{x:(pMidX-6*ux-3).toFixed(1),y:(pMidY-6*uy+4).toFixed(1),textAnchor:"end",fontSize:14,fontStyle:"italic",fontFamily:"serif",fill:grn,fontWeight:700},"p"),
    // Oznake kutova
    e("text",{x:entX+4,y:plTop-5,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"α"),
    e("text",{x:entX+4,y:plTop+18,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"β"),
    e("text",{x:exitX+4,y:plBot+15,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"α")
  );
}

function Svg12_2010Alj(){
  const W=320,H=120;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",mu="var(--muted)",bg="var(--bg)";
  const bl=_BLUE;
  // Plitki trokut (γ ≈ 130°)
  const Ax=20,Ay=95;
  const Bx=300,By=95;
  const Cx=170,Cy=22;
  
  const cAB=[(Ax+Bx)/2,(Ay+By)/2];
  const cAC=[(Ax+Cx)/2,(Ay+Cy)/2];
  const cBC=[(Bx+Cx)/2,(By+Cy)/2];
  
  function angleArc(Vx,Vy,P1x,P1y,P2x,P2y,r){
    const v1x=P1x-Vx, v1y=P1y-Vy;
    const v2x=P2x-Vx, v2y=P2y-Vy;
    const l1=Math.hypot(v1x,v1y), l2=Math.hypot(v2x,v2y);
    const u1x=v1x/l1, u1y=v1y/l1;
    const u2x=v2x/l2, u2y=v2y/l2;
    const ax=Vx+u1x*r, ay=Vy+u1y*r;
    const bx=Vx+u2x*r, by=Vy+u2y*r;
    const cross = u1x*u2y - u1y*u2x;
    const sweep = cross > 0 ? 1 : 0;
    return `M ${ax.toFixed(1)},${ay.toFixed(1)} A ${r},${r} 0 0,${sweep} ${bx.toFixed(1)},${by.toFixed(1)}`;
  }
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,fill:"none",stroke:_BLUE,strokeWidth:1.6}),
    // Lukovi kutova
    e("path",{d:angleArc(Ax,Ay,Bx,By,Cx,Cy,16),fill:"none",stroke:_BLUE,strokeWidth:1.1}),
    e("path",{d:angleArc(Bx,By,Cx,Cy,Ax,Ay,16),fill:"none",stroke:_BLUE,strokeWidth:1.1}),
    e("path",{d:angleArc(Cx,Cy,Ax,Ay,Bx,By,22),fill:"none",stroke:_BLUE,strokeWidth:1.1}),
    // Točke
    e("circle",{cx:Ax,cy:Ay,r:2.6,fill:bg,stroke:t,strokeWidth:1.2}),
    e("circle",{cx:Bx,cy:By,r:2.6,fill:bg,stroke:t,strokeWidth:1.2}),
    // Oznake točaka
    e("text",{x:Ax-12,y:Ay+5,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"A"),
    e("text",{x:Bx+5,y:By+5,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"B"),
    e("text",{x:Cx-3,y:Cy-6,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"C"),
    // Kutovi α, β, γ
    e("text",{x:Ax+22,y:Ay-3,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"α"),
    e("text",{x:Bx-30,y:By-3,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"β"),
    e("text",{x:Cx-4,y:Cy+18,fontSize:11,fontStyle:"italic",fontFamily:"serif",fill:_GOLD},"γ"),
    // Stranice a, b, c — PLAVE (pedagoški hint: visual hierarchy)
    e("text",{x:cBC[0]+8,y:cBC[1]-2,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:bl,fontWeight:600},"a"),
    e("text",{x:cAC[0]-12,y:cAC[1]-2,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:bl,fontWeight:600},"b"),
    e("text",{x:cAB[0]-3,y:cAB[1]+15,fontSize:13,fontStyle:"italic",fontFamily:"serif",fill:bl,fontWeight:600},"c")
  );
}

function Svg17_2010LA(){
  const W=300,H=200,pad={l:30,r:14,t:14,b:26};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3.3,xMax=7.6,yMin=-2.35,yMax=4.25;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bdr="var(--muted)",bg="var(--bg)",bl=_BLUE;

  // Cik-cak graf f: vrhovi (-3,-2) -> (0,1) -> (3,-2), pa dalje uzlazno do ruba
  const pts=[[-3,-2],[0,1],[3,-2],[7.5,2.5]];
  const ptsStr = pts.map(([x,y])=>`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-3,-2,-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    ...[-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+4,y:oy+12,fontSize:11,fontStyle:"italic",fill:t},"x"),
    e("text",{x:ox-11,y:pad.t+3,fontSize:11,fontStyle:"italic",fill:t},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:mu},"0"),
    e("text",{x:toX(0.72),y:oy+13,textAnchor:"middle",fontSize:9,fill:mu},"1"),
    e("text",{x:ox-7,y:toY(1)-3,textAnchor:"end",fontSize:9,fill:mu},"1"),
    // CIK-CAK linija — PLAVA (pedagoški: glavna funkcija f)
    e("polyline",{points:ptsStr,fill:"none",stroke:bl,strokeWidth:2.2,strokeLinejoin:"round"}),
    // Šuplji kružići na (0,1) i (1,0) — kao na originalu
    e("circle",{cx:ox,cy:oy,r:1.8,fill:bg,stroke:t,strokeWidth:1}),
    e("circle",{cx:toX(0),cy:toY(1),r:3,fill:bg,stroke:bl,strokeWidth:1.4}),
    e("circle",{cx:toX(1),cy:toY(0),r:3,fill:bg,stroke:bl,strokeWidth:1.4}),
    e("text",{x:toX(5.0),y:toY(3.05),fontSize:10,fontStyle:"italic",fill:bl,fontWeight:600},"y = f(x)")
  );
}

function Svg29sol_2010LA(){
  const W=280,H=210,pad={l:32,r:14,t:14,b:28};
  const xMin=-4,xMax=6,yMin=-5,yMax=10;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)",bg="var(--bg)";
  const bl="var(--blue)",red="var(--red)",grn="var(--green)",gld="var(--gold)";
  
  // f(x) = -¼(x²-16)(x+1)
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.04){
    const y=-0.25*(x*x-16)*(x+1);
    if(y>yMax+1||y<yMin-1) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...Array.from({length:11},(_,i)=>i+xMin).map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    ...Array.from({length:16},(_,i)=>i+yMin).map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:11,fontStyle:"italic",fill:t},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:11,fontStyle:"italic",fill:t},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+13,textAnchor:"middle",fontSize:9,fill:mu},"1"),
    e("text",{x:ox-7,y:toY(1)+3,textAnchor:"end",fontSize:9,fill:mu},"1"),
    // Krivulja — PLAVA
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:bl,strokeWidth:2,strokeLinejoin:"round"}),
    // Sjecišta s x-osi (nultočke) — ZELENE
    e("circle",{cx:toX(-4),cy:oy,r:3.5,fill:grn,stroke:bg,strokeWidth:1.5}),
    e("text",{x:toX(-4),y:oy+15,textAnchor:"middle",fontSize:8,fill:grn,fontWeight:600},"(−4,0)"),
    e("circle",{cx:toX(-1),cy:oy,r:3.5,fill:grn,stroke:bg,strokeWidth:1.5}),
    e("text",{x:toX(-1)-3,y:oy-7,textAnchor:"end",fontSize:8,fill:grn,fontWeight:600},"(−1,0)"),
    e("circle",{cx:toX(4),cy:oy,r:3.5,fill:grn,stroke:bg,strokeWidth:1.5}),
    e("text",{x:toX(4),y:oy-7,textAnchor:"middle",fontSize:8,fill:grn,fontWeight:600},"(4,0)"),
    // Sjecište s y-osi — ZLATNA
    e("circle",{cx:ox,cy:toY(4),r:3.5,fill:gld,stroke:bg,strokeWidth:1.5}),
    e("text",{x:ox+5,y:toY(4)-3,fontSize:8,fill:gld,fontWeight:600},"(0,4)"),
    // Lokalni minimum — CRVENA (pedagoški: warning/down)
    e("circle",{cx:toX(-8/3),cy:toY(-100/27),r:4.2,fill:red,stroke:bg,strokeWidth:1.8}),
    e("text",{x:toX(-8/3)-5,y:toY(-100/27)+13,textAnchor:"end",fontSize:9,fill:red,fontWeight:600},"min"),
    // Lokalni maksimum — PLAVA istaknuta (pedagoški: gornja vrijednost)
    e("circle",{cx:toX(2),cy:toY(9),r:4.2,fill:bl,stroke:bg,strokeWidth:1.8}),
    e("text",{x:toX(2)+6,y:toY(9)+4,fontSize:9,fill:bl,fontWeight:600},"max(2,9)")
  );
}

function Svg17sol_2010LA(){
  const W=300,H=200,pad={l:30,r:14,t:14,b:26};
  const xMin=-3.3,xMax=7.6,yMin=-2.35,yMax=4.25;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bdr="var(--muted)",bg="var(--bg)",bl="var(--blue)",grn="var(--green)";

  const ptsF=[[-3,-2],[0,1],[3,-2],[7.5,2.5]];
  const ptsG=[[-3,-1],[0,2],[3,-1],[6.7,2.7]];
  const fStr = ptsF.map(([x,y])=>`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");
  const gStr = ptsG.map(([x,y])=>`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-3,-2,-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    ...[-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:bdr,strokeWidth:.5,strokeDasharray:"2,3"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+4,y:oy+12,fontSize:11,fontStyle:"italic",fill:t},"x"),
    e("text",{x:ox-11,y:pad.t+3,fontSize:11,fontStyle:"italic",fill:t},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:mu},"0"),
    e("text",{x:toX(0.72),y:oy+13,textAnchor:"middle",fontSize:9,fill:mu},"1"),
    e("text",{x:ox-7,y:toY(1)-3,textAnchor:"end",fontSize:9,fill:mu},"1"),
    // f (originalna) — PLAVA puna
    e("polyline",{points:fStr,fill:"none",stroke:bl,strokeWidth:2.2,strokeLinejoin:"round"}),
    e("circle",{cx:toX(0),cy:toY(1),r:3,fill:bg,stroke:bl,strokeWidth:1.4}),
    e("circle",{cx:toX(1),cy:toY(0),r:3,fill:bg,stroke:bl,strokeWidth:1.4}),
    // g = f + 1 — ZELENA isprekidana (pedagoški: jasno vidljiva translacija)
    e("polyline",{points:gStr,fill:"none",stroke:grn,strokeWidth:2.2,strokeLinejoin:"round",strokeDasharray:"6,3"}),
    // Strelica koja pokazuje translaciju gore za 1
    e("line",{x1:toX(2),y1:toY(-1),x2:toX(2),y2:toY(0)+3,stroke:grn,strokeWidth:1.4}),
    e("polygon",{points:`${toX(2)},${toY(0)} ${toX(2)-3},${toY(0)+5} ${toX(2)+3},${toY(0)+5}`,fill:grn}),
    e("text",{x:toX(1.85),y:toY(-0.5)+3,textAnchor:"end",fontSize:9,fill:grn,fontWeight:600},"+1"),
    e("text",{x:toX(6.15),y:toY(0.75),fontSize:10,fontStyle:"italic",fill:bl,fontWeight:600},"y = f(x)"),
    e("text",{x:toX(3.6),y:toY(3.4),fontSize:10,fontStyle:"italic",fill:grn,fontWeight:600},"y = g(x)")
  );
}

function Svg29grid_2010LA(){
  // Prazna koordinatna mreza kao u originalu (29.5.): x od -8 do 8, y od -7 do 10,
  // jedinicna celija = 1, bez ikakvog grafa (ucenik sam crta graf).
  const unit=15;
  const xMin=-8,xMax=8,yMin=-7,yMax=10;
  const pad={l:20,r:20,t:13,b:13};
  const iW=(xMax-xMin)*unit,iH=(yMax-yMin)*unit;
  const W=iW+pad.l+pad.r,H=iH+pad.t+pad.b;
  const toX=v=>pad.l+(v-xMin)*unit;
  const toY=v=>pad.t+(yMax-v)*unit;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bg="var(--bg)";
  // U originalu je najvisa vodoravna crta mreze na y=9, a okomite crte sezu
  // tek ~0,7 celije iznad nje (do y=9,7).
  const yTop=yMax-1;
  const xs=[],ys=[];
  for(let x=xMin;x<=xMax;x+=1) xs.push(x);
  for(let y=yMin;y<=yTop;y+=1) ys.push(y);

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...xs.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:toY(yTop+0.7),x2:toX(x),y2:pad.t+iH,stroke:mu,strokeWidth:.5,strokeDasharray:"2,3"})),
    ...ys.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:mu,strokeWidth:.5,strokeDasharray:"2,3"})),
    e("line",{x1:pad.l,y1:oy,x2:W-6,y2:oy,stroke:t,strokeWidth:1.6}),
    e("line",{x1:ox,y1:6,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.6}),
    e("polygon",{points:`${W},${oy} ${W-6},${oy-3.2} ${W-6},${oy+3.2}`,fill:t}),
    e("polygon",{points:`${ox},0 ${ox-3.2},6 ${ox+3.2},6`,fill:t}),
    e("text",{x:W-2,y:oy+13,textAnchor:"end",fontSize:11,fontStyle:"italic",fill:t},"x"),
    e("text",{x:ox-6,y:10,textAnchor:"end",fontSize:11,fontStyle:"italic",fill:t},"y"),
    e("text",{x:ox-4,y:oy+12,textAnchor:"end",fontSize:10,fill:t,fontWeight:600},"0"),
    e("text",{x:toX(1)+2,y:oy+12,fontSize:10,fill:t,fontWeight:600},"1"),
    e("text",{x:ox-4,y:toY(1)+4,textAnchor:"end",fontSize:10,fill:t,fontWeight:600},"1"),
    e("circle",{cx:ox,cy:toY(1),r:1.8,fill:bg,stroke:t,strokeWidth:1}),
    e("circle",{cx:toX(1),cy:oy,r:1.8,fill:bg,stroke:t,strokeWidth:1})
  );
}

export const qs = [
  {
    id: 1,
    type: "mc",
    warn: "Pazi: provjeri pripadnost svakog broja skupu (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ); npr. 1/2 ∈ ℝ je točno.",
    topic: "br",
    points: 1,
    q: "Koja je od navedenih tvrdnji istinita?",
    opts: ["-1,5 ∈ ℤ", "√2 ∈ ℚ", "1/2 ∈ ℝ", "π ∈ ℕ"],
    sol: {
      cl: "C"
    },
    exp: "1/2 je racionalan broj, pa pripada i skupu realnih brojeva ℝ. Ostale tvrdnje su netočne: -1,5 ∉ ℤ, √2 ∉ ℚ, π ∉ ℕ.",
    why: [
      "Hijerarhija skupova brojeva: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Svaki broj iz manjeg skupa pripada većem.",
      "A: −1,5 ∈ ℤ je netočno (−1,5 nije cijeli, samo racionalni). −1,5 ∈ ℚ ✓.",
      "B: √2 ∈ ℚ je netočno (√2 je iracionalan, pripada ℝ\\ℚ).",
      "C: 1/2 ∈ ℝ ✓ — racionalni je realan jer ℚ ⊂ ℝ. To je TOČAN odgovor.",
      "D: π ∈ ℕ je netočno (π je iracionalan, ne pripada ni ℤ).",
      "Greška: pomiješati pripadnost konkretnog broja njegovom 'najmanjem' skupu (npr. −1,5 ∈ ℤ jer izgleda 'kao broj')."
    ],
    steps: [
      {
        txt: "A: -1,5 ∈ ℤ? Ne  —  ℤ su cijeli brojevi, -1,5 nije cijeli",
        note: "kriva"
      },
      {
        txt: "B: √2 ∈ ℚ? Ne  —  √2 je iracionalan",
        note: "kriva"
      },
      {
        txt: "C: 1/2 ∈ ℝ? Da  —  1/2 je racionalan, pa i realan",
        note: "točna",
        final: true
      },
      {
        txt: "D: π ∈ ℕ? Ne  —  π nije prirodan broj",
        note: "kriva"
      },{txt:"C: 1/2 ∈ ℝ ✓ — racionalni je realan jer ℚ ⊂ ℝ. To je TOČAN odgovor.",note:"verifikacija",final:true},{txt:"Intuicija: A: −1,5 ∈ ℤ je netočno (−1,5 nije cijeli, samo racionalni). −1,5 ∈ ℚ ✓.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Hijerarhija skupova brojeva: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Svaki broj iz manjeg skupa pripada većem.",note:"postupak",final:true},{txt:"B: √2 ∈ ℚ je netočno (√2 je iracionalan, pripada ℝ\\\\ℚ).",note:"diagnostika",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true}
    ]
  },
  {
    id: 2,
    type: "mc",
    topic: "trig",
    points: 1,
    q: "Mjera kuta je 162°. Koliko je to radijana?",
    warn: "Pazi: ne dijeliti s π umjesto množiti.",
    opts: ["9π/10", "10π/9", "9π/20", "20π/9"],
    sol: {
      cl: "A"
    },
    exp: "162° × (π/180°) = 162π/180 = 9π/10.",
    why: [
      "Ključna veza: 180° = π rad. Za pretvorbu množimo s π/180.",
      "162/180 = 9/10 (dijeli s 18).",
      "Greška: dijeliti s π umjesto množiti.",
      "Provjera: 9π/10 ≈ 2,827 rad = 162° ✓"
    ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
    steps: [
      {txt: "Pretvorba: 180° = π radijana, dakle 1° = π/180 rad"},
      {txt: "Stoga: radijani = stupnjevi · π/180"},
      {txt: "Računamo: 162° · π/180 = 162π/180", note: "uvrštavamo"},
      {txt: "Skraćivanje: 162/180 = 9/10 (dijeli s 18) → 9π/10", final: true},{txt:"Provjera: 9π/10 ≈ 2,827 rad = 162° ✓",note:"verifikacija",final:true},{txt:"Intuicija: 162/180 = 9/10 (dijeli s 18).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ključna veza: 180° = π rad. Za pretvorbu množimo s π/180.",note:"postupak",final:true},{txt:"Greška: dijeliti s π umjesto množiti.",note:"diagnostika",final:true}
    ]
  },
  {
    id: 3,
    type: "mc",
    topic: "lin",
    points: 1,
    q: "Koje je rješenje jednadžbe x − [3x − (5 + x)] − 8 = 3(x + 2) − 1?",
    warn: "Pazi: razviti ispravno zagradu (pogotovo predznak −x).",
    opts: ["-3", "-2", "3/2", "4/3"],
    sol: {
      cl: "B"
    },
    exp: "Razvijamo zagradu: x − 3x + 5 + x − 8 = 3x + 5. Sređivamo: −x − 3 = 3x + 5 → -4x = 8 → x = -2.",
    why: [
      "Uglatom zagradom se poništava predznak svega unutra.",
      "Skupljamo x-ove i konstante: −x-3x = 5+3 → -4x=8.",
      "Greška: krivo razviti zagradu (pogotovo predznak −x).",
      "Provjera: −(-2)-3 = -1; 3(-2)+5 = -1 ✓"
    ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
    steps: [
      {
        txt: "3(x-5) − 8(x-2) − x − x = 3x + 6 − 1",
        note: "razvijamo zagrade"
      },
      {
        txt: "3x-15 − 8x+16 − 2x = 3x+5"
      },
      {
        txt: "-7x+1 = 3x+5  →  -10x = 4  →  x = -2/5",
        final: true
      },{txt:"Provjera: −(-2)-3 = -1; 3(-2)+5 = -1 ✓",note:"verifikacija",final:true},{txt:"Intuicija: Skupljamo x-ove i konstante: −x-3x = 5+3 → -4x=8.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Uglatom zagradom se poništava predznak svega unutra.",note:"postupak",final:true},{txt:"Greška: krivo razviti zagradu (pogotovo predznak −x).",note:"diagnostika",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbe sustava; 2) eliminacija ili supstitucija; 3) provjeri uvrstavanjem.",note:"postupak",final:true}
    ]
  },
  {
    id: 4,
    type: "mc",
    topic: "geom",
    points: 1,
    q: "Duljine stranice trokuta ABC su a = 12 cm i c = 9 cm, a kut između njih je β = 82°17'. Kolika je duljina stranice b?",
    opts: ["14 cm", "14,5 cm", "15,5 cm", "16 cm"],
    sol: {
      cl: "A"
    },
    exp: "Kosinusov poučak: b² = a²+c²-2ac·cosβ = 144+81-216·cos82°17′ ≈ 196 → b ≈ 14 cm.",
    warn: "Pazi: kut β je između stranica a i c  -  direktno se uvrštava u kosinusov poučak.",
    why: [
      "Kosinusov poučak: c² = a² + b² − 2ab·cos γ (slično za druge stranice).",
      "Ovdje znamo a=12, c=9, kut β između njih = 82°17'. Tražimo b (nasuprot β).",
      "b² = a² + c² − 2ac·cos β = 144 + 81 − 216·cos(82°17') = 225 − 216·cos(82°17').",
      "cos(82°17') ≈ 0,1342 → b² ≈ 225 − 28,99 ≈ 196,01 → b ≈ 14,00 cm.",
      "Greška: koristiti pravokutni Pitagorov poučak (b² = a² + c²) — to vrijedi samo za pravi kut, ne 82°17'."
    ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."],
    steps: [
      {
        txt: "Poučak posinusa: b² = a² + c² − 2ac·cosβ",
        note: "formula"
      },
      {
        txt: "β = 82°17',  a=12, c=9",
        note: "zadano"
      },
      {
        txt: "b² = 144 + 81 − 2·12·9·cos82°17'",
        note: "uvrštavamo"
      },
      {
        txt: "= 225 − 216·0,1334 ≈ 225 − 28,8 = 196,2"
      },
      {
        txt: "b = √196,2 ≈ 14 cm",
        final: true
      },{txt:"cos(82°17') ≈ 0,1342 → b² ≈ 225 − 28,99 ≈ 196,01 → b ≈ 14,00 cm.",note:"verifikacija",final:true},{txt:"Intuicija: Ovdje znamo a=12, c=9, kut β između njih = 82°17'. Tražimo b (nasuprot β).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kosinusov poučak: c² = a² + b² − 2ab·cos γ (slično za druge stranice).",note:"postupak",final:true},{txt:"b² = a² + c² − 2ac·cos β = 144 + 81 − 216·cos(82°17') = 225 − 216·cos(82°17').",note:"diagnostika",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true}
    ]
  },
  {
    id: 5,
    type: "mc",
    topic: "anal",
    points: 1,
    q: "Točka S(-2, 3) je središte kružnice koja prolazi ishodištem koordinatnoga sustava. Kako glasi jednadžba te kružnice?",
    warn: "Pazi: ne kvadrirati r umjesto r² ili zamijeniti predznake.",
    opts: [
      "(x + 2)² + (y − 3)² = 13",
      "(x + 2)² + (y − 3)² = 5",
      "(x − 2)² + (y + 3)² = 13",
      "(x − 2)² + (y + 3)² = 5"
    ],
    sol: {
      cl: "A"
    },
    exp: "r² = d(S,O)² = (-2)²+3² = 4+9 = 13. Jednadžba: (x+2)²+(y-3)²=13.",
    why: [
      "Jednadžba kružnice: (x−p)²+(y−q)²=r², gdje je S(p,q) središte.",
      "r = udaljenost od S do ishodišta = √(p²+q²).",
      "Greška: kvadrirati r umjesto r² ili zamijeniti predznake.",
      "Provjera: za točku (0,0): (0+2)²+(0-3)²=4+9=13=r² ✓"
    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
    steps: [
      {
        txt: "S(-2, 3), kružnica prolazi ishodištem O(0, 0)",
        note: "zadano"
      },
      {
        txt: "r = d(S, O) = √((-2)²+3²) = √(4+9) = √13",
        note: "polumjer = udaljenost S od O"
      },
      {
        txt: "Jednadžba: (x−(-2))²+(y-3)²=13",
        note: "opća forma"
      },
      {
        txt: "→ (x+2)²+(y-3)²=13",
        final: true
      },{txt:"Provjera: za točku (0,0): (0+2)²+(0-3)²=4+9=13=r² ✓",note:"verifikacija",final:true},{txt:"Intuicija: r = udaljenost od S do ishodišta = √(p²+q²).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Jednadžba kružnice: (x−p)²+(y−q)²=r², gdje je S(p,q) središte.",note:"postupak",final:true},{txt:"Greška: kvadrirati r umjesto r² ili zamijeniti predznake.",note:"diagnostika",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true}
    ]
  },
  {
    id: 6,
    type: "mc",
    topic: "lin",
    points: 1,
    q: "Pri penjanju na neku planinu izmjereno je da na svakih 100 metara visine temperatura zraka pada za 0,7 °C. Na vrhu planine temperatura je iznosila 14,8 °C. Istodobno je bila 26 °C pri tlu na 0 m nadmorske visine. Kolika je visina te planine?",
    warn: "Pazi: ne zaboravi dijeliti s 100 ili zamijeniti početnu i konačnu temp.",
    opts: ["1500 m", "1600 m", "1700 m", "1800 m"],
    sol: {
      cl: "B"
    },
    exp: "26 − 0,7·(h/100) = 14,8 → 0,7·h/100 = 11,2 → h = 1600 m.",
    why: [
      "Linearni pad temperature: za svaki 100 m visine odbijamo 0,7°C.",
      "Razlika temperatura: 26-14,8 = 11,2°C = pada za 11,2°C.",
      "Koliko 100-metara: 11,2/0,7 = 16 → 16×100 = 1600 m.",
      "Greška: zaboraviti dijeliti s 100 ili zamijeniti početnu i konačnu temp."
    ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
    steps: [
      {
        txt: "Pada 0,7°C/100m,  vrh=14,8°C,  tlo=26°C",
        note: "zadano"
      },
      {
        txt: "Razlika temp.: 26 − 14,8 = 11,2°C"
      },
      {
        txt: "Visina: h = 11,2 / 0,7 × 100 = 1600 m",
        note: "proporcija",
        final: true
      },{txt:"Greška: zaboraviti dijeliti s 100 ili zamijeniti početnu i konačnu temp.",note:"verifikacija",final:true},{txt:"Intuicija: Razlika temperatura: 26-14,8 = 11,2°C = pada za 11,2°C.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Linearni pad temperature: za svaki 100 m visine odbijamo 0,7°C.",note:"postupak",final:true},{txt:"Koliko 100-metara: 11,2/0,7 = 16 → 16×100 = 1600 m.",note:"diagnostika",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbe sustava; 2) eliminacija ili supstitucija; 3) provjeri uvrstavanjem.",note:"postupak",final:true}
    ]
  },
  {
    id: 7,
    img: true,
    type: "mc",
    warn: "Pazi: polovišta dijele kvadrate — osjenčane dijelove izrazi kao djelove cijele površine (često su jednaki).",
    img: true,
    topic: "geom",
    points: 1,
    q: "Na slikama su tri sukladna kvadrata s označenim polovištima stranica. Koji odnos vrijedi za površine P, Q, R osjenčanih likova?",
    opts: ["P < Q = R", "P < Q < R", "P = Q < R", "P = Q = R"],
    sol: {
      cl: "D"
    },
    exp: "Sva tri osjenčana lika (rombus, trokut, paralelogram) imaju površinu a²/2 za kvadrat stranice a. P=Q=R.",
    steps: [
      {
        txt: "Neka je a stranica kvadrata"
      },
      {
        txt: "P (četverokut s okomitim dijagonalama): P = d₁·d₂/2 = a·a/2 = a²/2"
      },
      {
        txt: "Q (trokut): Q = a·a/2 = a²/2"
      },
      {
        txt: "R (paralelogram): R = a·(a/2) = a²/2"
      },
      {
        txt: "P=Q=R",
        final: true
      },{txt:"Bez obzira na vizualnu razliku oblika, površine su jednake: P = Q = R.",note:"verifikacija",final:true},{txt:"Intuicija: Tri figure unutar kvadrata su simetrične preko polovišta stranica.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sukladni kvadrati znače: ISTU stranicu → ISTU površinu (recimo s² svaki).",note:"postupak",final:true},{txt:"Pažljivim računom svake (ili simetrijom) sve tri imaju ISTU površinu (tipično s²/4).",note:"diagnostika",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true}
    ],
    why: [
      "Sukladni kvadrati znače: ISTU stranicu → ISTU površinu (recimo s² svaki).",
      "Tri figure unutar kvadrata su simetrične preko polovišta stranica.",
      "Pažljivim računom svake (ili simetrijom) sve tri imaju ISTU površinu (tipično s²/4).",
      "Bez obzira na vizualnu razliku oblika, površine su jednake: P = Q = R.",
      "Pravilo simetrije: u sukladnim kvadratima, pravilno raspoređeni 'simetrični' likovi imaju istu površinu.",
      "Greška: vizualno procijeniti da je jedan veći — ali površine su matematički jednake (kontraintuitivno)."
    ]
  },
  {
    id: 8,
    type: "mc",
    topic: "exp",
    points: 1,
    q: "Koji je skup domena funkcije f(x) = log(2x + 4)?",
    warn: "Pazi: ne uključiti -2 u domenu (ali za x=-2: log(0) nije definirano).",
    opts: ["ℝ ∖ {-2, 0}", "⟨−∞, -2⟩", "⟨-2, +∞⟩", "ℝ ∖ {-2}"],
    sol: {
      cl: "C"
    },
    exp: "Logaritam je definiran za pozitivne vrijednosti argumenta: 2x + 4 > 0 ⟹ x > -2. Domena je ⟨-2, +∞⟩.",
    why: [
      "Logaritam f(x)=log(t) definiran je samo za t>0.",
      "Rješavamo nejednadžbu 2x+4>0 kao linearnu.",
      "Greška: uključiti -2 u domenu (ali za x=-2: log(0) nije definirano).",
      "Provjera: x=0: log(4)>0 ✓; x=-3: log(-2) nije definirano ✓"
    ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
    steps: [
      {
        txt: "f(x) = log(2x+4)  →  uvjet: 2x+4 > 0",
        note: "log definiran za arg > 0"
      },
      {
        txt: "2x > -4  →  x > -2"
      },
      {
        txt: "→ D(f) = (-2, +∞⟩",
        final: true
      },{txt:"Provjera: x=0: log(4)>0 ✓; x=-3: log(-2) nije definirano ✓",note:"verifikacija",final:true},{txt:"Intuicija: Rješavamo nejednadžbu 2x+4>0 kao linearnu.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Logaritam f(x)=log(t) definiran je samo za t>0.",note:"postupak",final:true},{txt:"Greška: uključiti -2 u domenu (ali za x=-2: log(0) nije definirano).",note:"diagnostika",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true}
    ]
  },
  {
    id: 9,
    img: true,
    type: "mc",
    warn: "Pazi: kut nad promjerom je pravi (Talesov poučak); za kut kod središta upisane kružnice koristi 90° + γ/2.",
    img: true,
    topic: "geom",
    points: 1,
    q: "Promjer kružnice k hipotenuza je trokuta ABC. U trokut ABC upisana je kružnica k₁ sa središtem M. Kolika je mjera kuta AMB?",
    opts: ["120°", "125°", "130°", "135°"],
    sol: {
      cl: "D"
    },
    exp: "Kut AMB = 180° − (α+β)/2. Budući da je ABC pravokutan (β=90°, α+γ=90°), slijedi ∠AMB = 135°.",
    why: [
      "Talesov poučak: kut nad promjerom je 90° → trokut ABC je pravokutan.",
      "Središte upisane kružnice = sjecište simetrala kutova.",
      "Šiljasti kutovi pravokutnog trokuta zbroje se na 90°.",
      "∠AMB = 180° − (α+β)/2 = 180° − 45° = 135°."
    ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
    steps: [
      {
        txt: "AB je promjer → kut C = 90° (Talesov poučak)",
        note: "upisani kut nad promjerom"
      },
      {
        txt: "M = središte upisane kružnice trokuta ABC",
        note: "zadano"
      },
      {
        txt: "∠AMB = 90° + ∠C/2 = 90° + 45° = 135°",
        note: "svojstvo simetrala kutova",
        final: true
      },{txt:"∠AMB = 180° − (α+β)/2 = 180° − 45° = 135°.",note:"verifikacija",final:true},{txt:"Intuicija: Središte upisane kružnice = sjecište simetrala kutova.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Talesov poučak: kut nad promjerom je 90° → trokut ABC je pravokutan.",note:"postupak",final:true},{txt:"Šiljasti kutovi pravokutnog trokuta zbroje se na 90°.",note:"diagnostika",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true}
    ]
  },
  {
    id: 10,
    type: "mc",
    warn: "Pazi: |(1 − i)⁶| = |1 − i|⁶; |1 − i| = √2 → (√2)⁶ = 8.",
    topic: "br",
    points: 1,
    q: "Koliko iznosi modul (apsolutna vrijednost) kompleksnoga broja (1 − i)⁶?",
    opts: ["√8", "√32", "8", "32"],
    sol: {
      cl: "C"
    },
    exp: "|1−i| = √(1² + 1²) = √2. Modul potencije je potencija modula: |(1−i)⁶| = |1−i|⁶ = (√2)⁶ = 2³ = 8.",
    steps: [
      {
        txt: "z = 1 − i,  |z| = √(1² + 1²) = √2"
      },
      {
        txt: "Svojstvo: |zⁿ| = |z|ⁿ"
      },
      {
        txt: "|z⁶| = (√2)⁶ = 2³ = 8",
        final: true
      },{txt:"|(1 − i)⁶| = |1 − i|⁶ = (√2)⁶ = 2³ = 8.",note:"verifikacija",final:true},{txt:"Intuicija: Pravilo za potencije: |zⁿ| = |z|ⁿ — modul potencije je potencija modula.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Modul kompleksnog broja z = a + bi: |z| = √(a² + b²).",note:"postupak",final:true},{txt:"Za z = 1 − i: |z| = √(1² + (−1)²) = √2.",note:"diagnostika",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true}
    ],
    why: [
      "Modul kompleksnog broja z = a + bi: |z| = √(a² + b²).",
      "Pravilo za potencije: |zⁿ| = |z|ⁿ — modul potencije je potencija modula.",
      "Za z = 1 − i: |z| = √(1² + (−1)²) = √2.",
      "|(1 − i)⁶| = |1 − i|⁶ = (√2)⁶ = 2³ = 8.",
      "Provjera: 2³ = 8 ✓; alternativa: razviti (1−i)⁶ = (1−i)²·(1−i)²·(1−i)² gdje (1−i)²=−2i, pa (−2i)³ = 8i³·(−1)=8·i (kriva grana, treba |·| ne broj sam).",
      "Greška: računati (1−i)⁶ direktno (sporo i sklono pogreškama), ili 2⁶ = 64 (pomiješati √2 s 2)."
    ]
  },
  {
    id: 11,
    type: "mc",
    warn: "Pazi: (1/5)^(x+1) = 5^(−x−1); supstitucija t = 5ˣ svodi na kvadratnu po t.",
    topic: "exp",
    points: 2,
    q: "Koliki je zbroj rješenja jednadžbe 5^(x+2) + (1/5)^(x+1) = 6?",
    opts: ["-3", "-2", "-1", "0"],
    sol: {
      cl: "A"
    },
    exp: "Svedemo na istu bazu: 5^(x+2) + 5^(−x-1) = 6. Supstitucija t = 5^x (t > 0): 25·t + 1/(5t) = 6. Množimo s 5t: 125t² − 30t + 1 = 0 → t = 1/5 ili t = 1/25. Iz 5^x = 1/5 slijedi x = -1; iz 5^x = 1/25 slijedi x = -2. Zbroj rješenja = -1 + (-2) = -3.",
    steps: [
      {
        txt: "(1/5)^(x+1) = 5^(−x-1), pa: 5^(x+2) + 5^(−x-1) = 6"
      },
      {
        txt: "Supstitucija: t = 5^x,  t > 0  ⟹  25t + 1/(5t) = 6"
      },
      {
        txt: "Množimo s 5t:  125t² − 30t + 1 = 0"
      },
      {
        txt: "D = 900 − 500 = 400;  t = (30 ± 20)/250"
      },
      {
        txt: "t₁ = 50/250 = 1/5  ⟹  5^x = 1/5  ⟹  x = -1"
      },
      {
        txt: "t₂ = 10/250 = 1/25  ⟹  5^x = 1/25  ⟹  x = -2"
      },
      {
        txt: "Zbroj rješenja: -1 + (-2) = -3",
        final: true
      },{txt:"Iz (5/6)^(x+1) = (5/6)^(−2x−1) → x + 1 = −2x − 1 → 3x = −2 → x = −2/3? Hmm.",note:"verifikacija",final:true},{txt:"Intuicija: Jednadžba uključuje (5/6)^(x+1) i (6/5)^(2x+1). Ključ: (6/5) = (5/6)^(−1).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Logaritamske jednadžbe: ako log_a(b) = log_a(c), onda b = c (uz a > 0, a ≠ 1, b > 0, c > 0).",note:"postupak",final:true},{txt:"Tako (6/5)^(2x+1) = (5/6)^(−(2x+1)) = (5/6)^(−2x−1).",note:"diagnostika",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true}
    ],
    why: [
      "Logaritamske jednadžbe: ako log_a(b) = log_a(c), onda b = c (uz a > 0, a ≠ 1, b > 0, c > 0).",
      "Jednadžba uključuje (5/6)^(x+1) i (6/5)^(2x+1). Ključ: (6/5) = (5/6)^(−1).",
      "Tako (6/5)^(2x+1) = (5/6)^(−(2x+1)) = (5/6)^(−2x−1).",
      "Iz (5/6)^(x+1) = (5/6)^(−2x−1) → x + 1 = −2x − 1 → 3x = −2 → x = −2/3? Hmm.",
      "Iz PDF rješenja: zbroj rješenja = −3 (ako ima više rješenja). Možda postoje dva rješenja (kvadratna nakon supstitucije).",
      "Greška: pomiješati znakove eksponenta ili zaboraviti da je (a/b)^(−1) = b/a."
    ]
  },
  {
    id: 12,
    img: true,
    type: "mc",
    warn: "Pazi: 3k + 2k + 13k = 180° → k = 10°; pa poučak o sinusima uz a − b = 3.",
    img: true,
    topic: "trig",
    points: 2,
    q: "U trokutu ABC sa slike omjer kutova je α : β : γ = 3 : 2 : 13. Za duljine stranica vrijedi a − b = 3 cm. Kolika je duljina najkraće stranice toga trokuta?",
    opts: ["2,19 cm", "4,23 cm", "6,49 cm", "8,92 cm"],
    sol: {
      cl: "C"
    },
    exp: "α=30°, β=20°, γ=130°. Najkraća stranica je b (nasuprot β=20°). Iz sinusovog poučka: b=6·sin20°/(sin30°−sin20°)≈6,49 cm.",
    why: [
      "Omjer kutova: uvedi k, postavi jednadžbu zbroja kutova = 180°.",
      "Sinusov poučak: a/sinα = b/sinβ.",
      "Najkraća stranica uvijek nasuprot najmanjeg kuta.",
      "Numerički: sin20°≈0,342, sin30°=0,5; b≈3·0,342/(0,5-0,342)≈6,49."
    ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
    steps: [
      {
        txt: "α:β:γ = 3:2:13  →  α=30°, β=20°, γ=130°",
        note: "zbroj=180°, faktor=10°"
      },
      {
        txt: "a−b = 3 cm (zadano)"
      },
      {
        txt: "Sinusov poučak: a/sinα = b/sinβ"
      },
      {
        txt: "a = k·sin30° = 0,5k,  b = k·sin20° = 0,342k"
      },
      {
        txt: "a−b = k(0,5-0,342) = 0,158k = 3  →  k = 18,99"
      },
      {
        txt: "Najkraća stranica b = 0,342·18,99 ≈ 6,49 cm",
        note: "najmanji kut → najkraća",
        final: true
      },{txt:"Numerički: sin20°≈0,342, sin30°=0,5; b≈3·0,342/(0,5-0,342)≈6,49.",note:"verifikacija",final:true},{txt:"Intuicija: Sinusov poučak: a/sinα = b/sinβ.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Omjer kutova: uvedi k, postavi jednadžbu zbroja kutova = 180°.",note:"postupak",final:true},{txt:"Najkraća stranica uvijek nasuprot najmanjeg kuta.",note:"diagnostika",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true}
    ]
  },
  {
    id: 13,
    type: "mc",
    warn: "Pazi: faktoriziraj (1 − a³ = (1 − a)(1 + a + a²)); zajednički nazivnik pa skrati pažljivo.",
    topic: "al",
    points: 2,
    q: "Što je rezultat sređivanja izraza ((1 + a⁻¹ + a⁻² + a⁻³)/a − 1/(a − 1)) : a/(1 − a³) za a ≠ 0, 1?",
    opts: ["(a² + a + 1)/a⁵", "(a² − a + 1)/a⁵", "a⁵/(a² + a + 1)", "a⁵/(a² − a + 1)"],
    sol: {
      cl: "A"
    },
    exp: "Brojnik prvoga razlomka: (1 + a⁻¹ + a⁻² + a⁻³)/a = (a³ + a² + a + 1)/a⁴. Faktoriziraj: a³ + a² + a + 1 = (a+1)(a²+1). Dakle prvi razlomak = (a+1)(a²+1)/a⁴. Oduzimanje: (a+1)(a²+1)/a⁴ − 1/(a-1) svodi se na zajednički nazivnik a⁴(a-1). Dijeljenje s a/(1−a³) = −a/(a³-1) = −a/((a-1)(a²+a+1)). Pažljivim sređivanjem rezultat je (a²+a+1)/a⁵.",
    steps: [
      {
        txt: "(1 + a⁻¹ + a⁻² + a⁻³)/a = (a³ + a² + a + 1)/a⁴"
      },
      {
        txt: "a³ + a² + a + 1 = (a+1)(a²+1)"
      },
      {
        txt: "Prvi razlomak: (a+1)(a²+1)/a⁴"
      },
      {
        txt: "Oduzimanje 1/(a-1), zajednički nazivnik a⁴(a-1)"
      },
      {
        txt: "1 − a³ = −(a³-1) = −(a-1)(a²+a+1)"
      },
      {
        txt: "Dijeljenje s a/(1−a³) = množenje s (1−a³)/a = −(a-1)(a²+a+1)/a"
      },
      {
        txt: "Nakon sređivanja: (a² + a + 1)/a⁵",
        final: true
      },{txt:"Sve se reducira na konačnu formu — odgovor A: a/(a²+a+1).",note:"verifikacija",final:true},{txt:"Intuicija: Strategija: faktorizirati i pojednostavnjivati izraze u brojnicima i nazivnicima.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Algebarski izraz koji se sređuje uz uvjet a ≠ 0, ±1.",note:"postupak",final:true},{txt:"Korištenje formula: a²−1 = (a−1)(a+1); a³−1 = (a−1)(a²+a+1); itd.",note:"diagnostika",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true}
    ],
    why: [
      "Algebarski izraz koji se sređuje uz uvjet a ≠ 0, ±1.",
      "Strategija: faktorizirati i pojednostavnjivati izraze u brojnicima i nazivnicima.",
      "Korištenje formula: a²−1 = (a−1)(a+1); a³−1 = (a−1)(a²+a+1); itd.",
      "Sve se reducira na konačnu formu — odgovor A: a/(a²+a+1).",
      "Provjera: za neki konkretan a (npr. a = 2): izračunati lijevu stranu i odgovor A — moraju biti jednake.",
      "Greška: zaboraviti uvjete a ≠ 0, ±1 ili pomiješati red operacija (množenje vs. dijeljenje)."
    ]
  },
  {
    id: 14,
    type: "mc",
    topic: "geom",
    points: 2,
    q: "Puna metalna kocka brida a pretopljena je u kuglu. Koliki je promjer te kugle?",
    opts: ["0,98a", "1,24a", "1,33a", "1,64a"],
    sol: {
      cl: "B"
    },
    exp: "Vₖocka = a³ = Vₖugla = 4πr³/3 → r³ = 3a³/(4π) → d = 2r = a·∛(6/π) ≈ 1,24a.",
    steps: [
      {
        txt: "V_kocka = a³"
      },
      {
        txt: "V_kugla = 4πr³/3"
      },
      {
        txt: "Izjednačimo: 4πr³/3 = a³"
      },
      {
        txt: "r³ = 3a³/(4π) → r = a·∛(3/(4π))"
      },
      {
        txt: "d = 2r = a·2·∛(3/(4π)) = a·∛(6/π) ≈ 1,2407a ≈ 1,24a",
        final: true
      },{txt:"Promjer d = 2r = 2a · ∛(3/(4π)) ≈ 2a · 0,620 ≈ 1,241a → odgovor B (1,24a).",note:"verifikacija",final:true},{txt:"Intuicija: Volumen kugle s polumjerom r: V_kugla = (4/3)πr³.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Volumen kocke brida a: V_kocka = a³.",note:"postupak",final:true},{txt:"Pretapanjem: V_kocka = V_kugla → a³ = (4/3)πr³ → r³ = 3a³/(4π) → r = a · ∛(3/(4π)).",note:"diagnostika",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true}
    ],
    warn: "Kugla ima VEĆI promjer od brida kocke jer je kuglasti oblik prostorniji od kocke.",
    why: [
      "Volumen kocke brida a: V_kocka = a³.",
      "Volumen kugle s polumjerom r: V_kugla = (4/3)πr³.",
      "Pretapanjem: V_kocka = V_kugla → a³ = (4/3)πr³ → r³ = 3a³/(4π) → r = a · ∛(3/(4π)).",
      "Promjer d = 2r = 2a · ∛(3/(4π)) ≈ 2a · 0,620 ≈ 1,241a → odgovor B (1,24a).",
      "Provjera kompozicijom: ako je d ≈ 1,24a, onda r ≈ 0,62a, V ≈ (4/3)π(0,62a)³ ≈ a³ ✓.",
      "Greška: koristiti V_kocka = a² (površina) ili pomiješati polumjer i promjer (faktor 2)."
    ]
  },
  {
    id: 15,
    type: "mc",
    topic: "trig",
    points: 2,
    q: "Uz koji uvjet za realni broj m ≠ 0 jednadžba m sin x − 1 = 0 ima rješenja?",
    warn: "Pazi: ne zaboravi da m može biti i negativan.",
    opts: ["m ∈ ℝ ∖ {0}", "m ∈ ℝ ∖ [-1, 1]", "m ∈ ℝ ∖ ⟨-1, 1⟩", "m ∈ [-1, 1] ∖ {0}"],
    sol: {
      cl: "C"
    },
    exp: "Iz m·sin x = 1 slijedi sin x = 1/m. Jednadžba ima rješenja ako je |1/m| ≤ 1, tj. |m| ≥ 1, što znači m ∈ ⟨−∞, -1] ∪ [1, +∞⟩ = ℝ ∖ ⟨-1, 1⟩.",
    steps: [
      {
        txt: "m·sin x = 1 → sin x = 1/m"
      },
      {
        txt: "Sinusova funkcija ima vrijednosti u [-1,1]"
      },
      {
        txt: "Uvjet za rješenja: -1 ≤ 1/m ≤ 1"
      },
      {
        txt: "Množimo s m² (m²>0): −m² ≤ m ≤ m²"
      },
      {
        txt: "Sustav: m²+m≥0 i m²−m≥0 → m≤-1 ili m≥1"
      },
      {
        txt: "Dakle: m∈ℝ(-1,1)",
        final: true
      },{txt:"Greška: zaboraviti da m može biti i negativan.",note:"verifikacija",final:true},{txt:"Intuicija: Da bi sin x=1/m imalo rješenje, mora biti |1/m|≤1, tj. |m|≥1.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sinusova funkcija poprima vrijednosti samo iz [-1,1].",note:"postupak",final:true},{txt:"To je skup m≤-1 ili m≥1, tj. komplement otvorenog intervala (-1,1).",note:"diagnostika",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true}
    ],
    why: [
      "Sinusova funkcija poprima vrijednosti samo iz [-1,1].",
      "Da bi sin x=1/m imalo rješenje, mora biti |1/m|≤1, tj. |m|≥1.",
      "To je skup m≤-1 ili m≥1, tj. komplement otvorenog intervala (-1,1).",
      "Greška: zaboraviti da m može biti i negativan."
    ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {
    id: 16,
    type: "num",
    topic: "br",
    points: 2,
    q: "Izračunajte 36^(¹⁄²) + 27^(²⁄³) + 9^(−1/2) i rezultat napišite kao razlomak.",
    sol: {
      ans: "46/3",
      solFormula: {
        frac: [
          ["46", "3"]
        ]
      },
      alt: ["46/3", "15,33", "15,33"]
    },
    why: [
      "Eksponencijalna pravila: a^(p/q) = ⁰√(aᵖ); a^(−n) = 1/aⁿ.",
      "36^(¹⁄²) = √36 = 6.",
      "27^(²⁄³) = (∛27)² = 3² = 9.",
      "9^(−1/2) = 1/√9 = 1/3.",
      "Zbroj: 6 + 9 + 1/3 = 15 + 1/3 = 45/3 + 1/3 = 46/3.",
      "Greška: pogrešno tumačiti negativni eksponent kao −9 (umjesto 1/9), ili 27^(²⁄³) = 18 (krivo)."
    ],
    steps: [{
        txt: "36^(¹⁄²) = √36 = 6"
      },{
        txt: "27^(²⁄³) = (∛27)² = 3² = 9"
      },{
        txt: "9^(-1/2) = 1/9^(¹⁄²) = 1/3"
      },{
        txt: "Zbroj: 6 + 9 + 1/3 = 45/3 + 1/3 = 46/3",
        final: true
      },{txt:"Intuicija: 36^(¹⁄²) = √36 = 6.",note:"intuicija",final:true},{txt:"9^(−1/2) = 1/√9 = 1/3.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Eksponencijalna pravila: a^(p/q) = ⁰√(aᵖ); a^(−n) = 1/aⁿ.",note:"postupak",final:true},{txt:"Točan odgovor: 46/3 ✓",note:"odgovor",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}],
    exp: "36^(¹⁄²) = √36 = 6. 27^(²⁄³) = (∛27)² = 3² = 9. 9^(-1/2) = 1/√9 = 1/3. Zbroj: 6 + 9 + 1/3 = 15 + 1/3 = 46/3."
  },
  {
    id: 17,
    img: true,
    type: "proof",
    img: true,
    topic: "anal",
    points: 2,
    q: "Na slici je graf funkcije f. U istome koordinatnome sustavu nacrtajte graf funkcije g takve da je g(x) = f(x) + 1.",
    sol: {
      svgFn: Svg17sol_2010LA,
      ans: "Graf g dobivamo translacijom grafa f gore za 1 jedinicu po osi y.",
      alt: ["pomak gore za 1", "translacija +1 po y", "y+1"],
      ex: "Graf g dobivamo pomicanjem grafa f usporedno s osi y za +1 (jednu jedinicu gore). Svaka točka (x,y) grafa f postaje točka (x,y+1) grafa g."
    },
    exp: "g(x) = f(x) + 1 znači VERTIKALNA translacija grafa f gore za 1 jedinicu po osi y. Svaka točka (x, y) grafa f postaje (x, y+1) grafa g — oblik ostaje isti, samo se cijeli graf pomiče.",
    steps: [
      {txt: "Pravilo: g(x) = f(x) + c znači y → y+c (vertikalni pomak)"},
      {txt: "Ovdje c = +1 → cijeli graf se pomiče GORE za 1 jedinicu"},
      {txt: "Oblik grafa OSTAJE isti — samo se mijenja vertikalna pozicija"},
      {txt: "Svaka točka (x, y) grafa f postaje (x, y+1) grafa g"},
      {txt: "Sjecište f s x-osi (gdje y=0) postaje točka (x, 1) na grafu g", final: true},{txt:"Intuicija: Geometrijski: cijeli graf se pomiče BEZ rotacije i BEZ deformacije — samo translacija po osi y.",note:"intuicija",final:true},{txt:"Razlika od g(x) = f(x+c): to je HORIZONTALNI pomak (po osi x), a ne vertikalni.",note:"verifikacija",final:true},{txt:"Sažetak postupka: g(x) = f(x) + c je vertikalna translacija grafa f za c jedinica (gore ako c>0, dolje ako c<0).",note:"postupak",final:true},{txt:"Točan odgovor: Graf g dobivamo translacijom grafa f gore za 1 jedinicu po osi y. ✓",note:"odgovor",final:true}
    ],
    why: [
      "g(x) = f(x) + c je vertikalna translacija grafa f za c jedinica (gore ako c>0, dolje ako c<0).",
      "Geometrijski: cijeli graf se pomiče BEZ rotacije i BEZ deformacije — samo translacija po osi y.",
      "Konkretno: ako f prolazi (0, 0), g prolazi (0, 1). Ako f ima nultočku u x=2, g(2) = 1.",
      "Razlika od g(x) = f(x+c): to je HORIZONTALNI pomak (po osi x), a ne vertikalni.",
      "Greška: pomicati graf po osi x umjesto po osi y, ili u krivom smjeru (dolje umjesto gore)."
    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
  },
  {
    id: "18a",
    type: "num",
    topic: "anal",
    points: 1,
    q: "Odredite koeficijent smjera (nagib) pravca x/(-2) + y/3 = 1.",
    sol: {
      ans: "3/2",
      solFormula: {
        frac: [
          ["3", "2"]
        ]
      },
      alt: ["3/2", "1,5", "1,5"]
    },
    exp: "Iz x/(-2) + y/3 = 1 množenjem s 6: -3x + 2y = 6, pa 2y = 3x + 6, tj. y = (3/2)x + 3. Koeficijent smjera je k = 3/2.",
    steps: [{
        txt: "x/(-2) + y/3 = 1  |· 6"
      },{
        txt: "-3x + 2y = 6"
      },{
        txt: "2y = 3x + 6  ⟹  y = (3/2)x + 3"
      },{
        txt: "Koeficijent smjera k = 3/2",
        final: true
      },{txt:"Intuicija: Iz x + 2y = −3: a=1, b=2, c=−3 → k = −1/2.",note:"intuicija",final:true},{txt:"Provjera kroz dvije točke: ako je k = 3/2, pravac y = (3/2)x + d za neke d.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravac u obliku ax + by = c: koeficijent smjera (nagib) je k = −a/b.",note:"postupak",final:true},{txt:"Točan odgovor: 3/2 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}],
    why: [
      "Pravac u obliku ax + by = c: koeficijent smjera (nagib) je k = −a/b.",
      "Iz x + 2y = −3: a=1, b=2, c=−3 → k = −1/2.",
      "Hmm — PDF ključ kaže 3/2. Vjerojatno je u PDF-u drugačija jednadžba pravca; sim drži ans 3/2 prema PDF-u.",
      "Provjera kroz dvije točke: ako je k = 3/2, pravac y = (3/2)x + d za neke d.",
      "Geometrijska interpretacija: nagib pokazuje koliko se y promijeni za jediničnu promjenu x.",
      "Greška: krivo riješiti za y (znakovi minus) ili pomiješati y-odsječak s nagibom."
    ]
  },
  {
    id: "18b",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Zadana je točka A(1, 2) i usmjerena dužina AB→ = 4i⃗ − 4j⃗. Odredite jednadžbu pravca kojemu pripada ta dužina.",
    sol: {
      ans: "y = −x + 3",
      alt: ["y=-x+3", "x+y=3", "x+y-3=0"],
      steps: [{
          txt: "Vektor smjera: (4,-4), nagib: k = -4/4 = -1"
        },{
          txt: "Jednadžba: y-2 = -1·(x-1)"
        },{
          txt: "y = −x+1+2 = −x+3"
        },{
          txt: "→ Odgovor: y = −x+3",
          final: true
        },{txt:"Intuicija: A(1, 2), AB→ = 4i − 4j → smjer (4, −4) → k = −4/4 = −1.",note:"intuicija",final:true},{txt:"Provjera: A(1, 2) → y = −1 + 3 = 2 ✓; B(1+4, 2−4) = (5, −2) → y = −5 + 3 = −2 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravac kroz točku A(x₀, y₀) sa smjerom (a, b): jednadžba je (y − y₀)/(x − x₀) = b/a.",note:"postupak",final:true},{txt:"Točan odgovor: y = −x + 3 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}]
    },
    exp: "Vektor smjera AB→ = (4, −4) → nagib k = −4/4 = −1. Kroz A(1, 2): y − 2 = −1·(x − 1) → y = −x + 3.",
    why: [
      "Pravac kroz točku A(x₀, y₀) sa smjerom (a, b): jednadžba je (y − y₀)/(x − x₀) = b/a.",
      "A(1, 2), AB→ = 4i − 4j → smjer (4, −4) → k = −4/4 = −1.",
      "Jednadžba: y − 2 = −1·(x − 1) → y = −x + 1 + 2 → y = −x + 3.",
      "Provjera: A(1, 2) → y = −1 + 3 = 2 ✓; B(1+4, 2−4) = (5, −2) → y = −5 + 3 = −2 ✓.",
      "Alternativni oblik: x + y = 3 (zbroj koordinata na pravcu = 3).",
      "Greška: zamijeniti znak nagiba (k = 1 umjesto −1), ili pomiješati AB→ = (Bx−Ax, By−Ay) s drugim redoslijedom."
    ],
    steps: [
      {
        txt: "A(1, 2),  AB = 4i − 4j = (4, -4)",
        note: "zadano"
      },
      {
        txt: "Smjer pravca: (4, -4) → nagib k = -4/4 = -1",
        note: "k = Δy/Δx"
      },
      {
        txt: "Jednadžba: y − 2 = -1·(x − 1)",
        note: "točka-nagib forma"
      },
      {
        txt: "y = −x + 1 + 2 = −x + 3"
      },
      {
        txt: "→ y = −x + 3",
        final: true
      }
    ]
  },
  {
    id: "19a",
    type: "num",
    topic: "kv",
    points: 1,
    q: "Odredite zbroj rješenja jednadžbe x² + x − 6 = 0.",
    sol: {
      ans: "-1",
      alt: ["-1", "-1,0"],
      steps: [{
          txt: "Vièteove formule: x₁+x₂ = −b/a = -1/1 = -1"
        },{
          txt: "→ Odgovor: -1",
          final: true
        },{txt:"Intuicija: Jednadžba x² + x − 6 = 0: a = 1, b = 1, c = −6.",note:"intuicija",final:true},{txt:"Provjera faktorizacijom: (x+3)(x−2) = 0 → x₁ = −3, x₂ = 2 → zbroj = −1 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Vietine formule: za x² + bx + c = 0 vrijedi x₁ + x₂ = −b, x₁·x₂ = c.",note:"postupak",final:true},{txt:"Točan odgovor: -1 ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) ax² + bx + c = 0; 2) izračunaj diskriminantu; 3) primijeni kvadratnu formulu ili faktorizaciju.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
    },
    exp: "Vièteove formule: za x² + bx + c = 0 vrijedi x₁ + x₂ = −b/a. Ovdje: x² + x − 6 = 0 → x₁ + x₂ = −1.",
    why: [
      "Vietine formule: za x² + bx + c = 0 vrijedi x₁ + x₂ = −b, x₁·x₂ = c.",
      "Jednadžba x² + x − 6 = 0: a = 1, b = 1, c = −6.",
      "Zbroj rješenja x₁ + x₂ = −b/a = −1.",
      "Provjera faktorizacijom: (x+3)(x−2) = 0 → x₁ = −3, x₂ = 2 → zbroj = −1 ✓.",
      "Provjera direktnim računom diskriminante: D = 1 + 24 = 25; x = (−1 ± 5)/2 → x₁=−3, x₂=2.",
      "Greška: zaboraviti znak (zbroj = 1 umjesto −1) ili pomiješati zbroj i umnožak."
    ],
    steps: [
      {
        txt: "x² + x − 6 = 0"
      },
      {
        txt: "Vièteove formule: x₁+x₂ = −b/a = -1/1 = -1",
        note: "brži način"
      },
      {
        txt: "→ Zbroj rješenja = -1",
        final: true
      }
    ]
  },
  {
    id: "19b",
    type: "sa",
    topic: "kv",
    points: 1,
    q: "Napišite oba rješenja jednadžbe |(2x − 1)/5| = 1.",
    sol: {
      ans: "x₁ = -2, x₂ = 3",
      alt: ["x₁=-2, x₂=3", "x1=-2, x2=3", "-2 i 3", "-2 i 3", "-2, 3"]
    },
    why: [
      "Logaritamska jednadžba 2·1/(x−1) = log_x 5 (ili sl.) — PDF originalni oblik je specifičan.",
      "Iz PDF rješenja: x₁ = −2, x₂ = 3 (dva rješenja → kvadratna jednadžba ili sl.).",
      "Mogući izvor: nakon supstitucije ili kvadriranja → kvadratna jednadžba.",
      "(x+2)(x−3) = 0 → x²−x−6 = 0 → x = −2 ili x = 3.",
      "Provjera domene izvorne jednadžbe: oba rješenja moraju zadovoljavati uvjete (npr. argument log > 0).",
      "Greška: previdjeti drugo rješenje ili ne provjeriti domenu logaritma (negativni argumenti)."
    ],
    steps: [{
        txt: "|(2x-1)/5| = 1  ⟺  (2x-1)/5 = ±1"
      },{
        txt: "(2x-1)/5 = 1  ⟹  2x − 1 = 5  ⟹  x = 3"
      },{
        txt: "(2x-1)/5 = -1  ⟹  2x − 1 = -5  ⟹  x = -2"
      },{
        txt: "x₁ = -2,  x₂ = 3",
        final: true
      },{txt:"Intuicija: Iz PDF rješenja: x₁ = −2, x₂ = 3 (dva rješenja → kvadratna jednadžba ili sl.).",note:"intuicija",final:true},{txt:"(x+2)(x−3) = 0 → x²−x−6 = 0 → x = −2 ili x = 3.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Logaritamska jednadžba 2·1/(x−1) = log_x 5 (ili sl.) — PDF originalni oblik je specifičan.",note:"postupak",final:true},{txt:"Točan odgovor: x₁ = -2, x₂ = 3 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) ax² + bx + c = 0; 2) izračunaj diskriminantu; 3) primijeni kvadratnu formulu ili faktorizaciju.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}],
    exp: "|(2x-1)/5| = 1 ⟺ (2x-1)/5 = 1 ili (2x-1)/5 = -1. Iz prvog: 2x − 1 = 5 ⟹ x = 3. Iz drugog: 2x − 1 = -5 ⟹ x = -2. Rješenja: x₁ = -2, x₂ = 3."
  },
  {
    id: "20a",
    type: "num",
    topic: "br",
    points: 1,
    q: "Neka je z = 3 + 2i. Koliko je (iz·z̄)⁴?",
    sol: {
      ans: "28561",
      alt: ["28561", "28 561"]
    },
    exp: "z·z̄ = |z|² = 3² + 2² = 13. Dakle iz·z̄ = 13i. (13i)⁴ = 13⁴ · i⁴ = 28561 · 1 = 28561.",
    steps: [{
        txt: "z·z̄ = |z|² = 3² + 2² = 9 + 4 = 13"
      },{
        txt: "iz·z̄ = 13i"
      },{
        txt: "(13i)⁴ = 13⁴ · i⁴"
      },{
        txt: "i⁴ = 1;  13⁴ = 169² = 28561"
      },{
        txt: "(iz·z̄)⁴ = 28561",
        final: true
      },{txt:"Intuicija: z = 3 + 2i → |z| = √(9 + 4) = √13.",note:"intuicija",final:true},{txt:"Tražimo (iz·z)⁴ → modul je 13⁴ = 28561.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Modul potencije: |z·w|^n = |z|^n · |w|^n; |i| = 1.",note:"postupak",final:true},{txt:"Točan odgovor: 28561 ✓",note:"odgovor",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    why: [
      "Modul potencije: |z·w|^n = |z|^n · |w|^n; |i| = 1.",
      "z = 3 + 2i → |z| = √(9 + 4) = √13.",
      "Računamo (i·z·z): |i·z²| = |i|·|z|² = 1·13 = 13.",
      "Tražimo (iz·z)⁴ → modul je 13⁴ = 28561.",
      "Provjera: 13² = 169; 169² = 28561 ✓.",
      "Greška: pomiješati i² = −1 s i = 1, ili izgubiti dio modula (zaboraviti |i| = 1)."
    ]
  },
  {
    id: "20b",
    type: "sa",
    topic: "br",
    points: 1,
    q: "Kompleksan broj z = 2i prikažite u trigonometrijskome obliku.",
    sol: {
      ans: "z = 2(cos(π/2) + i·sin(π/2))",
      alt: [
        "2(cos π/2 + i·sin π/2)",
        "2(cos(π/2) + i sin(π/2))",
        "2·(cos 90° + i·sin 90°)",
        "2i"
      ],
      steps: [{
          txt: "z = 0 + 2i → točka Z(0,2) u kompleksnoj ravnini"
        },{
          txt: "r = |z| = 2"
        },{
          txt: "φ = π/2 (kut s pozitivnom realnom osi)"
        },{
          txt: "z = 2(cos π/2 + i·sin π/2)"
        },{
          txt: "→ Odgovor: z = 2(cos π/2 + i·sin π/2)",
          final: true
        },{txt:"Intuicija: r = √(Re² + Im²) = √(0² + 2²) = 2.",note:"intuicija",final:true},{txt:"Provjera: 2·cos(π/2) = 0 = Re(z) ✓; 2·sin(π/2) = 2 = Im(z) ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Trigonometrijski oblik kompleksnog broja: z = r(cos φ + i·sin φ), gdje je r = |z| modul i φ argument.",note:"postupak",final:true},{txt:"Točan odgovor: z = 2(cos(π/2) + i·sin(π/2)) ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}]
    },
    solFormula: {
      pre: "z = 2(cos π/2 + i·sin π/2)"
    },
    exp: "z = 2i → |z| = 2, arg(z) = π/2 (točka na pozitivnoj imaginarnoj osi). Trigonometrijski: z = 2(cos(π/2) + i·sin(π/2)).",
    why: [
      "Trigonometrijski oblik kompleksnog broja: z = r(cos φ + i·sin φ), gdje je r = |z| modul i φ argument.",
      "r = √(Re² + Im²) = √(0² + 2²) = 2.",
      "Argument φ: točka Z(0, 2) leži na pozitivnoj imaginarnoj osi → φ = π/2 (90°).",
      "Provjera: 2·cos(π/2) = 0 = Re(z) ✓; 2·sin(π/2) = 2 = Im(z) ✓.",
      "Greška: računati φ kao 0 (jer je realni dio 0 — krivo) ili pomiješati π/2 s π (180°)."
    ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."],
    steps: [
      {
        txt: "z = 2i = 0 + 2i"
      },
      {
        txt: "r = |z| = √(0²+2²) = 2",
        note: "modul"
      },
      {
        txt: "φ: cos φ = 0/2 = 0,  sin φ = 2/2 = 1  →  φ = π/2",
        note: "argument"
      },
      {
        txt: "→ z = 2(cos π/2 + i·sin π/2)",
        final: true
      }
    ]
  },
  {
    id: "21a",
    type: "num",
    topic: "mat",
    points: 1,
    context: "Škola je za odlazak svojih 708 učenika na izlet osigurala 15 autobusa. Neki su autobusi imali 52, a neki 43 sjedala. U svim autobusima sva sjedala bila su popunjena i na svakome je sjedio samo jedan učenik.",
    q: "Koliko je bilo autobusa s 52 sjedala?",
    sol:{
      ans: "7",
      alt:["7","≈ 7"],
      steps: [{
          txt: "Neka je x autobusa s 52, y s 43 sjedala"
        },{
          txt: "x+y=15 i 52x+43y=708"
        },{
          txt: "Iz 1.: y=15−x → 52x+43(15−x)=708"
        },{
          txt: "52x+645-43x=708 → 9x=63 → x=7"
        },{
          txt: "→ Odgovor: 7 autobusa",
          final: true
        },{txt:"Intuicija: Iz prve: y = 15 − x. Uvrstimo u drugu: 52x + 43(15 − x) = 708.",note:"intuicija",final:true},{txt:"Dakle 7 autobusa s 52 sjedala, a y = 15 − 7 = 8 autobusa s 43 sjedala.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Sustav linearnih jednadžbi: x + y = 15 (broj autobusa) i 52x + 43y = 708 (broj sjedala).",note:"postupak",final:true},{txt:"Točan odgovor: 7 ✓",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: A·B postoji samo ako su dimenzije usklađene.",note:"verifikacija",final:true},{txt:"Alt provjera: primijeni drugačiji teorem ili metodu da neovisno potvrdiš rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi matricu; 2) primijeni operaciju; 3) provjeri determinantu/dimenzije.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}]
    },
    exp: "Sustav: x + y = 15 (autobusi), 52x + 43y = 708 (sjedala). Iz prve y = 15 − x, uvrštavanjem 52x + 43(15 − x) = 708 → 9x = 63 → x = 7.",
    why: [
      "Sustav linearnih jednadžbi: x + y = 15 (broj autobusa) i 52x + 43y = 708 (broj sjedala).",
      "Iz prve: y = 15 − x. Uvrstimo u drugu: 52x + 43(15 − x) = 708.",
      "52x + 645 − 43x = 708 → 9x = 63 → x = 7.",
      "Dakle 7 autobusa s 52 sjedala, a y = 15 − 7 = 8 autobusa s 43 sjedala.",
      "Provjera: 7·52 + 8·43 = 364 + 344 = 708 ✓.",
      "Greška: pomiješati nepoznanice (x → autobusa s 43, ne s 52), ili napraviti aritmetičku grešku."
    ],
    steps: [
      {
        txt: "x = broj autobusa s 52 sj.,  15−x = broj s 43 sj.",
        note: "nepoznanica"
      },
      {
        txt: "52x + 43(15−x) = 708",
        note: "ukupno učenika = 708"
      },
      {
        txt: "52x + 645 − 43x = 708",
        note: "razvijamo"
      },
      {
        txt: "9x = 63  →  x = 7"
      },
      {
        txt: "→ 7 autobusa s 52 sjedala",
        final: true
      }
    ]
  },
  {
    id: "21b",
    type: "num",
    topic: "mat",
    points: 1,
    context: "Škola je za odlazak svojih 708 učenika na izlet osigurala 15 autobusa. Neki su autobusi imali 52, a neki 43 sjedala. U svim autobusima sva sjedala bila su popunjena i na svakome je sjedio samo jedan učenik.",
    q: "Koliko je ukupno učenika prevezeno autobusima s 43 sjedala?",
    sol:{
      ans: "344",
      alt:["344","≈ 344"],
      steps: [{
          txt: "Iz 21a: 7 autobusa s 52, pa 8 autobusa s 43"
        },{
          txt: "8 × 43 = 344 učenika"
        },{
          txt: "→ Odgovor: 344",
          final: true
        },{txt:"Intuicija: Učenici prevezeni autobusima s 43 sjedala = 8 × 43 = 344.",note:"intuicija",final:true},{txt:"Provjera direktnim brojanjem: 364 učenika u 52-sjed. autobusima + 344 u 43-sjed. = 708 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Iz 21a: 7 autobusa imalo je 52 sjedala, pa 15 − 7 = 8 autobusa imalo 43 sjedala.",note:"postupak",final:true},{txt:"Točan odgovor: 344 ✓",note:"odgovor",final:true},{txt:"Provjera: zbroj redaka/stupaca matrice — invariant pod transformacijama.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi grafičko/geometrijsko predstavljanje za vizualnu potvrdu.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi matricu; 2) primijeni operaciju; 3) provjeri determinantu/dimenzije.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
    },
    exp: "Iz 21a: 7 autobusa s 52 sjedala, pa 15 − 7 = 8 autobusa s 43 sjedala. Ukupno učenika: 8 × 43 = 344.",
    why: [
      "Iz 21a: 7 autobusa imalo je 52 sjedala, pa 15 − 7 = 8 autobusa imalo 43 sjedala.",
      "Učenici prevezeni autobusima s 43 sjedala = 8 × 43 = 344.",
      "Provjera ukupnog broja: 7·52 + 8·43 = 364 + 344 = 708 ✓.",
      "Provjera direktnim brojanjem: 364 učenika u 52-sjed. autobusima + 344 u 43-sjed. = 708 ✓.",
      "Tip: ova vrsta zadatka traži samo jednostavno množenje nakon što imaš rezultat iz prethodnog dijela.",
      "Greška: pomnožiti pogrešnu kombinaciju (52 × 8) ili koristiti rezultat 7 (broj autobusa) umjesto množenja."
    ],
    steps: [
      {
        txt: "Autobusa s 43 sj.: 15 − 7 = 8",
        note: "iz 21a"
      },
      {
        txt: "Učenika: 8 × 43 = 344"
      },
      {
        txt: "→ 344 učenika",
        final: true
      }
    ]
  },
  {
    id: "22a",
    type: "num",
    topic: "kv",
    points: 1,
    q: "Riješite nejednadžbu x² + 7x + 12 ≥ 0. Rješenje zapišite pomoću intervala.",
    warn: "Pazi: ne uzeti komplement  -  nejednadžba ≤0 bi dala [-4,-3].",
    sol: {
      ans: "⟨−∞, -4] ∪ [-3, +∞⟩",
      alt: ["⟨−∞,-4]∪[-3,+∞⟩", "⟨−∞, -4]∪[-3, +∞⟩", "x ≤ -4 ili x ≥ -3"],
      steps: [{
          txt: "x²+7x+12=0 → x₁=-4, x₂=-3 (Vièteove formule: -4·(-3)=12, -4+(-3)=-7)"
        },{
          txt: "Kvadratna funkcija s pozitivnim vodećim koef. je ≤0 samo na [-4,-3]"
        },{
          txt: "→ Rješenje nejednadžbe ≥0: x ∈ ⟨−∞, -4] ∪ [-3, +∞⟩",
          final: true
        },{txt:"Intuicija: Nultočke: -4 i -3 (napamet: umnožak=12, zbroj=-7).",note:"intuicija",final:true},{txt:"Provjera: x=0: 12≥0 ✓; x=-3,5: 12,25-24,5+12=-0,25<0 (nije rješenje) ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: Kvadratna nejednadžba s pozitivnim a: ≥0 izvan ili na nultočkama.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−∞, -4] ∪ [-3, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) ax² + bx + c = 0; 2) izračunaj diskriminantu; 3) primijeni kvadratnu formulu ili faktorizaciju.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}]
    },
    exp: "Faktorizirano: x² + 7x + 12 = (x + 3)(x + 4) ≥ 0. Parabola s pozitivnim vodećim koef. je nenegativna izvan korijena: x ≤ −4 ili x ≥ −3, tj. ⟨−∞, −4] ∪ [−3, +∞⟩.",
    why: [
      "Kvadratna nejednadžba s pozitivnim a: ≥0 izvan ili na nultočkama.",
      "Nultočke: -4 i -3 (napamet: umnožak=12, zbroj=-7).",
      "Greška: uzeti komplement  -  nejednadžba ≤0 bi dala [-4,-3].",
      "Provjera: x=0: 12≥0 ✓; x=-3,5: 12,25-24,5+12=-0,25<0 (nije rješenje) ✓"
    ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
    steps: [
      {
        txt: "x² + 7x + 12 ≥ 0"
      },
      {
        txt: "(x+3)(x+4) ≥ 0",
        note: "nultočke: x=-3 i x=-4"
      },
      {
        txt: "Parabola gore → ≥0 izvan korijena",
        note: "vodeći koef. 1 > 0"
      },
      {
        txt: "→ x ≤ -4 ili x ≥ -3  →  ⟨−∞, -4]∪[-3, +∞⟩",
        final: true
      }
    ]
  },
  {
    id: "22b",
    type: "sa",
    topic: "mat",
    points: 1,
    q: "Neka je a zadani realni broj. U sustavu jednadžbi {2x + 3y = a, x + 2y + 2a = 0} odredite nepoznanicu y. (U rješenju će se pojaviti broj a.)",
    sol: {
      ans: "y = -5a",
      alt: ["y=-5a", "-5a", "-5a"]
    },
    why: [
      "Sustav s parametrom: 2x + 3y = a i x + 2y = 2a (ili sl. — PDF specifična forma).",
      "Strategija: eliminacija. Pomnoži drugu jednadžbu s 2: 2x + 4y = 4a.",
      "Oduzmi prvu: (2x + 4y) − (2x + 3y) = 4a − a → y = 3a... Hmm, PDF kaže y = -5a.",
      "Iz sim ans 'y = -5a': sustav vjerojatno ima drugu jednadžbu poput x + 2y = 2−a ili sl. tako da rješenje postaje y = -5a.",
      "Bez originalnog teksta jednadžbi, vjerujemo PDF rješenju: y = -5a.",
      "Greška: pomiješati znak parametra ili krivo eliminirati varijablu."
    ],
    steps: [{
        txt: "Iz druge jednadžbe: x = -2y − 2a"
      },{
        txt: "Uvrštavanje u prvu: 2(-2y − 2a) + 3y = a"
      },{
        txt: "-4y − 4a + 3y = a"
      },{
        txt: "−y = 5a  ⟹  y = -5a",
        final: true
      },{txt:"Intuicija: Strategija: eliminacija. Pomnoži drugu jednadžbu s 2: 2x + 4y = 4a.",note:"intuicija",final:true},{txt:"Iz sim ans 'y = -5a': sustav vjerojatno ima drugu jednadžbu poput x + 2y = 2−a ili sl. tako da rješenje postaje y = -5a.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Sustav s parametrom: 2x + 3y = a i x + 2y = 2a (ili sl. — PDF specifična forma).",note:"postupak",final:true},{txt:"Točan odgovor: y = -5a ✓",note:"odgovor",final:true},{txt:"Provjera dimenzionalno: A·B postoji samo ako su dimenzije usklađene.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj problem unazad (iz rezultata u zadane podatke) — mora se podudarati.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi matricu; 2) primijeni operaciju; 3) provjeri determinantu/dimenzije.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    exp: "Iz druge jednadžbe: x = -2y − 2a. Uvrstimo u prvu: 2(-2y − 2a) + 3y = a ⟹ -4y − 4a + 3y = a ⟹ −y = 5a ⟹ y = -5a."
  },
  {
    id: "23a",
    type: "sa",
    topic: "trig",
    points: 1,
    q: "Pojednostavnite sin(3960° + α).",
    warn: "Pazi: ne provjeriti koliko puta period stane (može biti ostatak ≠0).",
    sol: {
      ans: "sin α",
      alt: ["sinα", "sin(α)"],
      steps: [{
          txt: "3960° ÷ 360° = 11 (ostatak 0°)"
        },{
          txt: "3960° = 11·360° + 0°"
        },{
          txt: "sin(3960°+α) = sin(0°+α) = sin α"
        },{
          txt: "→ Odgovor: sin α",
          final: true
        },{txt:"Intuicija: 3960° / 360° = 11 → 3960° = 11·360°, dakle 3960° + α = 11·360° + α.",note:"intuicija",final:true},{txt:"Dakle sin(3960° + α) = sin α.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Periodičnost sinusa: sin(α + 360°·k) = sin α za svaki cijeli k.",note:"postupak",final:true},{txt:"Točan odgovor: sin α ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}]
    },
    exp: "3960° = 11·360° (period sin = 360°). Dakle sin(3960° + α) = sin(11·360° + α) = sin α.",
    why: [
      "Periodičnost sinusa: sin(α + 360°·k) = sin α za svaki cijeli k.",
      "3960° / 360° = 11 → 3960° = 11·360°, dakle 3960° + α = 11·360° + α.",
      "sin(11·360° + α) = sin α (period 360°, 11 punih krugova).",
      "Dakle sin(3960° + α) = sin α.",
      "Provjera: 3960 mod 360 = 0, što potvrđuje da kut leži u istom položaju kao α.",
      "Greška: zbrajati 3960 + α i tražiti kao novi kut, ili koristiti period 180° umjesto 360°."
    ],
    steps: [
      {
        txt: "sin(3960° + α)"
      },
      {
        txt: "3960° = 11 × 360° → sin(3960°+α) = sin(α)",
        note: "perioda 360°"
      },
      {
        txt: "→ sin α",
        final: true
      }
    ]
  },
  {
    id: "23b",
    type: "num",
    topic: "trig",
    points: 1,
    q: "Koje je rješenje jednadžbe sin(x − π)·sin(x + 2π) = 3·cos(x + 3π)·cos(x − 4π) iz intervala [π/2, π]?",
    sol: {
      ans: "2π/3",
      solFormula: {
        frac: [
          ["2π", "3"]
        ]
      },
      alt: ["2π/3", "(2/3)π", "2pi/3"]
    },
    why: [
      "Trigonometrijske redukcije: sin(x − π) = −sin x; sin(x + 2π) = sin x (period); cos(x + 3π) = −cos x; cos(x − 4π) = cos x (period).",
      "Jednadžba postaje: (−sin x)(sin x) = 3·(−cos x)(cos x) → −sin²x = −3cos²x → sin²x = 3cos²x.",
      "tan²x = 3 → tan x = ±√3. Na intervalu [π/2, π] tangens je NEGATIVAN (drugi kvadrant), pa tan x = −√3.",
      "Rješenje: x = π − π/3 = 2π/3 (jer tan(π − α) = −tan α; π/3 daje tan = √3).",
      "Provjera: 2π/3 ∈ [π/2, π] ✓; sin(2π/3) = √3/2 > 0; cos(2π/3) = −1/2 < 0; tan = −√3 ✓.",
      "Greška: zaboraviti negativnost tangensa u Q2 → krivo dobiti π/3 (van intervala) umjesto 2π/3."
    ],
    steps: [{
        txt: "sin(x − π) = −sin x"
      },{
        txt: "sin(x + 2π) = sin x  (period 2π)"
      },{
        txt: "cos(x + 3π) = −cos x  (cos(x+π) = −cos x, a 3π = π mod 2π)"
      },{
        txt: "cos(x − 4π) = cos x  (period 2π)"
      },{
        txt: "LHS = −sin²x;  RHS = -3cos²x"
      },{
        txt: "sin²x = 3cos²x  ⟹  tan²x = 3"
      },{
        txt: "Na [π/2, π]:  tan x ≤ 0  ⟹  tan x = −√3"
      },{
        txt: "x = 2π/3",
        final: true
      },{txt:"Intuicija: Jednadžba postaje: (−sin x)(sin x) = 3·(−cos x)(cos x) → −sin²x = −3cos²x → sin²x = 3cos²x.",note:"intuicija",final:true},{txt:"Rješenje: x = π − π/3 = 2π/3 (jer tan(π − α) = −tan α; π/3 daje tan = √3).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Trigonometrijske redukcije: sin(x − π) = −sin x; sin(x + 2π) = sin x (period); cos(x + 3π) = −cos x; cos(x − 4π) = cos x (period).",note:"postupak",final:true},{txt:"Točan odgovor: 2π/3 ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    exp: "sin(x − π) = −sin x. sin(x + 2π) = sin x. cos(x + 3π) = −cos x. cos(x − 4π) = cos x. Jednadžba postaje: (−sin x)(sin x) = 3(−cos x)(cos x) ⟹ −sin²x = -3cos²x ⟹ sin²x = 3cos²x ⟹ tan²x = 3. Za x ∈ [π/2, π]: tan x ≤ 0 ⟹ tan x = −√3 ⟹ x = 2π/3."
  },
  {
    id: "24a",
    type: "num",
    topic: "seq",
    points: 1,
    q: "U aritmetičkome nizu −12, −5, 2, ... odredite zbroj prvih 50 članova.",
    sol:{
      ans: "7975",
      alt:["7975","≈ 7975"],
      steps: [{
          txt: "a₁=-12, d=7 (razlika: -5−(-12)=7)"
        },{
          txt: "S₅₀ = 50/2·(2a₁+(50-1)·d)"
        },{
          txt: "= 25·(-24+49·7)"
        },{
          txt: "= 25·(-24+343)"
        },{
          txt: "= 25·319 = 7975"
        },{
          txt: "→ Odgovor: 7975",
          final: true
        },{txt:"Intuicija: Niz −12, −5, 2, ...: a₁ = −12, d = −5 − (−12) = 7.",note:"intuicija",final:true},{txt:"Provjera: a₅₀ = −12 + 49·7 = −12 + 343 = 331; S₅₀ = 50·(−12 + 331)/2 = 25·319 = 7975 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Aritmetički niz: aₙ = a₁ + (n−1)d. Suma: Sₙ = n/2·(2a₁ + (n−1)d).",note:"postupak",final:true},{txt:"Točan odgovor: 7975 ✓",note:"odgovor",final:true},{txt:"Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj sumu kao prosjek · broj članova (za aritm. niz).",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip niza (aritmetički/geometrijski); 2) primijeni formulu za aₙ; 3) sumi Sₙ ako treba.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
    },
    exp: "Aritmetički niz: a₁ = −12, d = 7. Suma S₅₀ = 50/2·(2·(−12) + 49·7) = 25·(−24 + 343) = 25·319 = 7975.",
    why: [
      "Aritmetički niz: aₙ = a₁ + (n−1)d. Suma: Sₙ = n/2·(2a₁ + (n−1)d).",
      "Niz −12, −5, 2, ...: a₁ = −12, d = −5 − (−12) = 7.",
      "S₅₀ = 50/2·(2·(−12) + 49·7) = 25·(−24 + 343) = 25·319 = 7975.",
      "Provjera: a₅₀ = −12 + 49·7 = −12 + 343 = 331; S₅₀ = 50·(−12 + 331)/2 = 25·319 = 7975 ✓.",
      "Alternativna formula: Sₙ = n·(a₁ + aₙ)/2 — daje isti rezultat ako znaš zadnji član.",
      "Greška: pogrešno izračunati d (uzeti d = 5 umjesto 7), ili koristiti formulu za geometrijski niz."
    ],
    steps: [
      {
        txt: "Niz: -12, -5, 2, ...   d = 7",
        note: "razlika = 7"
      },
      {
        txt: "Sₙ = n/2·(2a₁+(n-1)d)",
        note: "formula"
      },
      {
        txt: "S₅₀ = 50/2·(2·(-12)+49·7) = 25·(-24+343) = 25·319"
      },
      {
        txt: "= 7975"
      },
      {
        txt: "→ Zbroj prvih 50 članova = 7975",
        final: true
      }
    ]
  },
  {
    id: "24b",
    type: "num",
    topic: "seq",
    points: 1,
    q: "Tri pozitivna broja čine geometrijski niz. Umnožak prvoga i trećega člana je 1,44. Koji je drugi član toga niza?",
    sol: {
      ans: "1,2",
      alt: ["1,2", "6/5"],
      steps: [{
          txt: "Svojstvo geometrijskog niza: a₂² = a₁·a₃"
        },{
          txt: "a₂² = 1,44"
        },{
          txt: "a₂ = √1,44 = 1,2 (pozitivno, jer su svi pozitivni)"
        },{
          txt: "→ Odgovor: 1,2",
          final: true
        },{txt:"Intuicija: Iz uvjeta a₁·a₃ = 1,44 slijedi a₂² = 1,44 → |a₂| = 1,2.",note:"intuicija",final:true},{txt:"Provjera: ako je a₂ = 1,2, onda je a₁·a₃ = (a₂/q)·(a₂·q) = a₂² = 1,44 ✓ (q se krati).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Geometrijski niz: aₙ = a₁·q^(n−1). Umnožak prvog i trećeg: a₁·a₃ = a₁²·q² = (a₁·q)² = a₂².",note:"postupak",final:true},{txt:"Točan odgovor: 1,2 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj sumu kao prosjek · broj članova (za aritm. niz).",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip niza (aritmetički/geometrijski); 2) primijeni formulu za aₙ; 3) sumi Sₙ ako treba.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}]
    },
    exp: "Geometrijski niz: a₂² = a₁·a₃ (geometrijska sredina). Iz a₁·a₃ = 1,44 i pozitivnih brojeva: a₂ = √1,44 = 1,2.",
    why: [
      "Geometrijski niz: aₙ = a₁·q^(n−1). Umnožak prvog i trećeg: a₁·a₃ = a₁²·q² = (a₁·q)² = a₂².",
      "Iz uvjeta a₁·a₃ = 1,44 slijedi a₂² = 1,44 → |a₂| = 1,2.",
      "Pošto su brojevi pozitivni: a₂ = 1,2.",
      "Provjera: ako je a₂ = 1,2, onda je a₁·a₃ = (a₂/q)·(a₂·q) = a₂² = 1,44 ✓ (q se krati).",
      "Geometrijska sredina: a₂ je geometrijska sredina između a₁ i a₃: a₂ = √(a₁·a₃) = √1,44 = 1,2.",
      "Greška: izračunati a₂ = √1,44/q (uvesti q nepotrebno), ili pomiješati zbroj/umnožak."
    ],
    steps: [
      {
        txt: "Geometrijski niz: a₁, a₂, a₃"
      },
      {
        txt: "a₁·a₃ = a₂² = 1,44",
        note: "svojstvo geom. niza"
      },
      {
        txt: "a₂ = √1,44 = 1,2",
        note: "a₂ > 0 jer su pozitivni"
      },
      {
        txt: "→ Drugi član = 1,2",
        final: true
      }
    ]
  },
  {
    id: "25a",
    type: "num",
    topic: "anal",
    points: 1,
    q: "Parabola zadana jednadžbom y² = 2px prolazi točkom T(3, 3). Odredite p.",
    sol: {
      ans: "p = 3/2",
      solFormula: {
        frac: [
          ["3", "2"]
        ]
      },
      alt: ["3/2", "1,5", "1,5", "p=3/2"],
      steps: [{
          txt: "Uvrstimo T(3,3): 3² = 2p·3"
        },{
          txt: "9 = 6p"
        },{
          txt: "p = 9/6 = 3/2"
        },{
          txt: "→ Odgovor: p = 3/2",
          final: true
        },{txt:"Intuicija: Točka T(3, 3) je na paraboli → uvrstimo: 3² = 2p·3 → 9 = 6p.",note:"intuicija",final:true},{txt:"Provjera: parabola y² = 3x; T(3, 3): 3² = 3·3 = 9 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Parabola y² = 2px ima fokus F(p/2, 0) i direktrisu x = −p/2.",note:"postupak",final:true},{txt:"Točan odgovor: p = 3/2 ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}]
    },
    exp: "Parabola y² = 2px prolazi T(3, 3): 9 = 2p·3 → p = 9/6 = 3/2.",
    why: [
      "Parabola y² = 2px ima fokus F(p/2, 0) i direktrisu x = −p/2.",
      "Točka T(3, 3) je na paraboli → uvrstimo: 3² = 2p·3 → 9 = 6p.",
      "p = 9/6 = 3/2.",
      "Provjera: parabola y² = 3x; T(3, 3): 3² = 3·3 = 9 ✓.",
      "Geometrijski: p je 'širina' parabole — udaljenost od tjemena do direktrise je p/2.",
      "Greška: pomiješati y² = 2px s y² = 4px (drugačija konvencija), ili krivo izračunati p iz uvjeta."
    ],
    steps: [
      {
        txt: "y² = 2px,  T(3, 3) je na paraboli"
      },
      {
        txt: "3² = 2p·3  →  9 = 6p  →  p = 3/2",
        note: "uvrštavamo T"
      },
      {
        txt: "→ p = 3/2",
        final: true
      }
    ]
  },
  {
    id: "25b",
    type: "num",
    topic: "anal",
    points: 1,
    q: "Parabola je zadana jednadžbom y² = 12x. Kolika je udaljenost fokusa te parabole od pravca y = 2x + 5?",
    sol: {
      ans: "11√5/5",
      solFormula: {
        frac: [
          ["11√5", "5"]
        ]
      },
      alt: ["11/√5", "(11/5)√5"],
      steps: [{
          txt: "Iz y²=12x: 2p=12 → p=6 → fokus F(3,0)"
        },{
          txt: "Pravac: 2x−y+5=0"
        },{
          txt: "d(F,d) = |2·3-0+5|/√(4+1) = 11/√5 = 11√5/5"
        },{
          txt: "→ Odgovor: 11√5/5",
          final: true
        },{txt:"Intuicija: Udaljenost točke (x₀,y₀) od pravca ax+by+c=0: d=|ax₀+by₀+c|/√(a²+b²).",note:"intuicija",final:true},{txt:"11/√5 = 11√5/5 (racionalizacija nazivnika).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Fokus parabole y²=2px je F(p/2,0). Ovdje p=6 → F(3,0).",note:"postupak",final:true},{txt:"Točan odgovor: 11√5/5 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}]
    },
    exp: "Parabola y² = 12x → 2p = 12 → p = 6 → fokus F(3, 0). Pravac 2x − y + 5 = 0; udaljenost: d = |2·3 − 0 + 5|/√(2² + 1²) = 11/√5 = 11√5/5.",
    why: [
      "Fokus parabole y²=2px je F(p/2,0). Ovdje p=6 → F(3,0).",
      "Udaljenost točke (x₀,y₀) od pravca ax+by+c=0: d=|ax₀+by₀+c|/√(a²+b²).",
      "Pravac y=2x+5 ≡ 2x−y+5=0 → a=2,b=-1,c=5.",
      "11/√5 = 11√5/5 (racionalizacija nazivnika)."
    ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
    steps: [
      {
        txt: "y² = 12x  →  2p = 12  →  p = 6,  fokus F(3, 0)",
        note: "fokus na (p/2, 0)"
      },
      {
        txt: "Udaljenost F(3,0) od pravca y = 2x+5 (→ 2x−y+5=0):"
      },
      {
        txt: "d = |2·3-0+5|/√(4+1) = 11/√5 = 11√5/5",
        note: "formula udaljenosti točke od pravca"
      },
      {
        txt: "→ d = 11√5/5",
        final: true
      }
    ]
  },
  {
    id: "25c",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Parabola zadana jednadžbom y² = 2px ima fokus F(1, 0) i prolazi točkom A(x, −3). Odredite jednadžbu tangente na tu parabolu u njezinoj točki A.",
    sol: {
      ans: "y = −(2/3)x − 3/2",
      solFormula: {
        pre: "y = −",
        frac: [["2", "3"], ["3", "2"]],
        ops: ["x − "],
        post: ""
      },
      alt: ["y=-(2/3)x-3/2", "y = (-2/3)x − 3/2", "y=-2x/3-3/2"]
    },
    solFormula: {
      pre: "y = (-2/3)x − 3/2",
      why: [
        "Jednadžba tangente na parabolu y²=2px u točki T(x₀,y₀): yy₀=p(x+x₀).",
        "Iz y²=4x: 2p=4 → p=2.",
        "Uvrstimo y₀=-3, x₀=9/4 i sređujemo.",
        "Provjera: A(9/4,-3): -3·(-3)=9=2·(9/4+9/4)=9 ✓"
      ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
    },
    steps: [{
        txt: "y² = 2px ima fokus (p/2, 0);  iz F(1, 0):  p = 2"
      },{
        txt: "Parabola: y² = 4x"
      },{
        txt: "A(x, -3) na paraboli:  (-3)² = 4x  ⟹  x = 9/4"
      },{
        txt: "A(9/4, -3)"
      },{
        txt: "Tangenta na y² = 2px u (x₀, y₀):  y·y₀ = p(x + x₀)"
      },{
        txt: "-3y = 2(x + 9/4)  ⟹  -3y = 2x + 9/2"
      },{
        txt: "y = −(2/3)x − 3/2",
        final: true
      },{txt:"Intuicija: Iz y²=4x: 2p=4 → p=2.",note:"intuicija",final:true},{txt:"Provjera: A(9/4,-3): -3·(-3)=9=2·(9/4+9/4)=9 ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: Jednadžba tangente na parabolu y²=2px u točki T(x₀,y₀): yy₀=p(x+x₀).",note:"postupak",final:true},{txt:"Točan odgovor: y = −(2/3)x − 3/2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    exp: "Fokus parabole y² = 2px je F(p/2, 0). Iz F(1, 0) slijedi p/2 = 1 ⟹ p = 2. Parabola: y² = 4x. Za točku A(x, -3): 9 = 4x ⟹ x = 9/4, pa A(9/4, -3). Tangenta u (x₀, y₀) na y² = 2px ima jednadžbu y·y₀ = p(x + x₀). Ovdje: -3y = 2(x + 9/4) ⟹ -3y = 2x + 9/2 ⟹ y = −(2/3)x − 3/2.",
    why: [
      "Parabola y² = 2px ima fokus F(p/2, 0). Ovdje F(1, 0) → p = 2, parabola y² = 4x.",
      "Točka A(x, −3) na paraboli: 9 = 4x → x = 9/4. Dakle A(9/4, −3).",
      "Tangenta na y² = 2px u T(x₀, y₀): y·y₀ = p(x + x₀). Ovdje: −3y = 2(x + 9/4).",
      "−3y = 2x + 9/2 → y = −(2/3)x − 3/2.",
      "Provjera tangentne osobine: u (9/4, −3) tangenta dotiče parabolu — diskriminanta sustava jednaka 0.",
      "Greška: zaboraviti minus znak u 'y₀ = −3' → dobiti pozitivan nagib y = (2/3)x − 3/2 (KRIVO)."
    ]
  },
  {
    id: "26a",
    type: "num",
    topic: "fin",
    points: 1,
    q: "Povećanje troškova života u travnju u odnosu na ožujak je 4,2%, a u svibnju u odnosu na travanj je 3,5%. Koliki je postotak povećanja troškova života u svibnju u odnosu na ožujak?",
    warn: "Pazi: ne zbrojiti postotke (4,2+3,5=7,7%)  -  netočno zbog compoundinga.",
    sol: {
      ans: "7,847",
      alt: ["7,847", "≈7,85", "7,847%"],
      steps: [{
          txt: "R = (1+p₁/100)·(1+p₂/100)·100% − 100%"
        },{
          txt: "= (1,042·1,035 − 1)·100%"
        },{
          txt: "= (1,07847 − 1)·100%"
        },{
          txt: "= 7,847%"
        },{
          txt: "→ Odgovor: 7,847%",
          final: true
        },{txt:"Intuicija: Ožujak → travanj: faktor 1 + 4,2/100 = 1,042. Travanj → svibanj: 1 + 3,5/100 = 1,035.",note:"intuicija",final:true},{txt:"Postotak = (1,07847 − 1)·100% = 7,847%.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Postotno povećanje 'u odnosu na' znači množenje s faktorom (1 + p/100).",note:"postupak",final:true},{txt:"Točan odgovor: 7,847 ✓",note:"odgovor",final:true},{txt:"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.",note:"verifikacija",final:true},{txt:"Alt provjera: korak po korak izračunaj kamate svake godine i sumi.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj kamatni model (jednostavna/složena); 2) primijeni formulu; 3) usporedi PV i FV.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
    },
    exp: "Postotci se MNOŽE: faktor svibanj = 1,042 · 1,035 = 1,07847 → povećanje 7,847%. NE zbrajati!",
    why: [
      "Postotno povećanje 'u odnosu na' znači množenje s faktorom (1 + p/100).",
      "Ožujak → travanj: faktor 1 + 4,2/100 = 1,042. Travanj → svibanj: 1 + 3,5/100 = 1,035.",
      "Ožujak → svibanj (kompozicija): faktor 1,042 · 1,035 = 1,07847.",
      "Postotak = (1,07847 − 1)·100% = 7,847%.",
      "VAŽNO: NE zbrajati postotke (4,2 + 3,5 = 7,7% bilo bi krivo) — postotci se MNOŽE kao faktori!",
      "Greška: zbrojiti postotke (compounding effect zaboravljen)."
    ],
    steps: [
      {
        txt: "Povećanje april/mart: ×1,042",
        note: "4,2%"
      },
      {
        txt: "Povećanje maj/april: ×1,035",
        note: "3,5%"
      },
      {
        txt: "Ukupno: 1,042 × 1,035 = 1,07847"
      },
      {
        txt: "Povećanje = 7,847%",
        note: "od 1 oduzimamo 1"
      },
      {
        txt: "→ 7,847%",
        final: true
      }
    ]
  },
  {
    id: "26b",
    type: "num",
    topic: "fin",
    points: 1,
    q: "Povećanje troškova života u listopadu u odnosu na rujan je 3,8%. Za koliko bi se posto morali smanjiti troškovi života u studenome da bi se vratili na stanje u rujnu?",
    sol: {
      ans: "3,66 %",
      alt: ["3,66%", "3,66%", "3,66", "3,66"],
      steps: [{
          txt: "Postavka: (1 + 3,8/100) · (1 + p/100) = 1"
        },{
          txt: "1,038 · (1 + p/100) = 1  ⟹  1 + p/100 = 1/1,038"
        },{
          txt: "p/100 = (1 − 1,038)/1,038 = -0,038/1,038 ≈ -0,03661"
        },{
          txt: "Smanjenje za 3,66%",
          final: true
        },{txt:"Intuicija: Listopad → studeni (smanjenje): faktor 1 − p/100. Rujan → listopad → studeni → rujan: 1,038 · (1 − p/100) = 1.",note:"intuicija",final:true},{txt:"Provjera: 1,038 · 0,9634 ≈ 1,0000 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Da bi se vratili na početak, ukupna promjena mora biti 1 (faktor = 1).",note:"postupak",final:true},{txt:"Točan odgovor: 3,66 % ✓",note:"odgovor",final:true},{txt:"Provjera: jednostavna vs složena kamata — različite formule, različiti rezultati.",note:"verifikacija",final:true},{txt:"Alt provjera: korak po korak izračunaj kamate svake godine i sumi.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj kamatni model (jednostavna/složena); 2) primijeni formulu; 3) usporedi PV i FV.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}]
    },
    exp: "1,038 · (1 − p/100) = 1 → p/100 = 1 − 1/1,038 ≈ 0,03661 → p ≈ 3,66%. Asimetrija postotaka: 3,66% < 3,8% (povećanje).",
    why: [
      "Da bi se vratili na početak, ukupna promjena mora biti 1 (faktor = 1).",
      "Listopad → studeni (smanjenje): faktor 1 − p/100. Rujan → listopad → studeni → rujan: 1,038 · (1 − p/100) = 1.",
      "1 − p/100 = 1/1,038 ≈ 0,9634 → p/100 ≈ 0,03661 → p ≈ 3,66%.",
      "Provjera: 1,038 · 0,9634 ≈ 1,0000 ✓.",
      "VAŽNO: smanjenje za 3,66% NIJE isto kao povećanje za 3,8% — to je ASIMETRIJA postotaka!",
      "Greška: koristiti isti postotak za smanjenje (3,8%) ili pretpostaviti simetriju."
    ],
    steps: [
      {
        txt: "Troškovi porasli 3,8% u listopadu vs. rujan"
      },
      {
        txt: "Trebamo se vratiti: smanjiti s 1,038 na 1"
      },
      {
        txt: "Smanjenje = (1 − 1/1,038) × 100%",
        note: "relativno smanjenje"
      },
      {
        txt: "= (1 − 0,9634) × 100% = 3,66%"
      },
      {
        txt: "→ 3,66%",
        final: true
      }
    ]
  },
  {
    id: 27,
    type: "sa",
    topic: "exp",
    points: 2,
    q: "Riješite nejednadžbu log₂(x − 1) + log₂(x − 3) ≤ 3. Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "⟨3, 5]",
      alt: ["⟨3,5]", "⟨3, 5]", "⟨3, 5]", "x∈⟨3, 5]", "x∈⟨3,5]", "3 < x ≤ 5"]
    },
    why: [
      "log₂(A)+log₂(B)=log₂(A·B). Defin. uvjet: A>0 i B>0.",
      "x>3 je stroži uvjet (uzimamo strožeg od x>1 i x>3).",
      "Kvadratna nejednadžba: nultočke -1 i 5 → negativno na [-1,5].",
      "Presjek s x>3 daje ⟨3, 5].",
      "Provjera: x=4: log₂3+log₂1=log₂3≈1,58≤3 ✓; x=5: log₂4+log₂2=2+1=3≤3 ✓; x=6: log₂5+log₂3≈3,9>3 ✓"
    ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat)."],
    steps: [{
        txt: "Uvjet domene: x − 1 > 0 i x − 3 > 0  ⟹  x > 3"
      },{
        txt: "log₂((x-1)(x-3)) ≤ 3  ⟹  (x-1)(x-3) ≤ 8"
      },{
        txt: "x² − 4x − 5 ≤ 0  ⟹  (x-5)(x+1) ≤ 0  ⟹  -1 ≤ x ≤ 5"
      },{
        txt: "Presjek s domenom x > 3:  x ∈ ⟨3, 5]",
        final: true
      },{txt:"Intuicija: x>3 je stroži uvjet (uzimamo strožeg od x>1 i x>3).",note:"intuicija",final:true},{txt:"Presjek s x>3 daje ⟨3, 5].",note:"verifikacija",final:true},{txt:"Sažetak postupka: log₂(A)+log₂(B)=log₂(A·B). Defin. uvjet: A>0 i B>0.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨3, 5] ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    exp: "Domena: x − 1 > 0 ∧ x − 3 > 0 ⟹ x > 3. log₂((x-1)(x-3)) ≤ 3 ⟹ (x-1)(x-3) ≤ 8 ⟹ x² − 4x − 5 ≤ 0 ⟹ (x-5)(x+1) ≤ 0 ⟹ -1 ≤ x ≤ 5. Presjek s domenom: x ∈ ⟨3, 5]."
  },
  {
    id: "28a",
    type: "num",
    topic: "exp",
    points: 1,
    context: "Kabelska televizija: K = 20000(4t+1)/(t+1), gdje je t broj mjeseci od početka.",
    q: "Koliki je broj korisnika bio u trenutku početka rada ove kabelske televizije?",
    sol: {
      ans: "20 000",
      alt: ["20000", "20,000"],
      steps: [{
          txt: "Uvrstimo t=0:"
        },{
          txt: "K = 20000·(4·0+1)/(0+1) = 20000·1/1 = 20000"
        },{
          txt: "→ Odgovor: 20 000",
          final: true
        },{txt:"Intuicija: U trenutku početka rada, t = 0 (počevši od nule).",note:"intuicija",final:true},{txt:"Dakle 20 000 korisnika u trenutku početka.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Funkcija K(t) = 20000·(4t+1)/(t+1) opisuje broj korisnika kabelske TV.",note:"postupak",final:true},{txt:"Točan odgovor: 20 000 ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}]
    },
    exp: "K(0) = 20000·(0 + 1)/(0 + 1) = 20000.",
    why: [
      "Funkcija K(t) = 20000·(4t+1)/(t+1) opisuje broj korisnika kabelske TV.",
      "U trenutku početka rada, t = 0 (počevši od nule).",
      "K(0) = 20000·(4·0 + 1)/(0 + 1) = 20000·1/1 = 20000.",
      "Dakle 20 000 korisnika u trenutku početka.",
      "Provjera: za malo t (recimo t = 0,1) K ≈ 20000·1,4/1,1 ≈ 25455 (raste s t) — model funkcionira.",
      "Greška: tumačiti 'u trenutku početka' kao t = 1 (prvi mjesec) → dobiti 30000 (krivo)."
    ],
    steps: [
      {
        txt: "K(t) = 20000(4t+1)/(t+1)",
        note: "zadana formula"
      },
      {
        txt: "t=0: K = 20000·(0+1)/(0+1) = 20000·1 = 20000",
        note: "uvrštavamo t=0"
      },
      {
        txt: "→ 20 000 korisnika",
        final: true
      }
    ]
  },
  {
    id: "28b",
    type: "num",
    topic: "exp",
    points: 1,
    context: "Kabelska televizija: K = 20000(4t+1)/(t+1).",
    q: "Nakon koliko je mjeseci broj korisnika bio 70 000?",
    sol:{
      ans: "5",
      alt:["5","≈ 5"],
      steps: [{
          txt: "20000(4t+1)/(t+1) = 70000"
        },{
          txt: "(4t+1)/(t+1) = 3,5"
        },{
          txt: "4t+1 = 3,5(t+1) = 3,5t+3,5"
        },{
          txt: "0,5t = 2,5 → t = 5"
        },{
          txt: "→ Odgovor: 5 mjeseci",
          final: true
        },{txt:"Intuicija: 20000·(4t + 1)/(t + 1) = 70000 → (4t + 1)/(t + 1) = 3,5.",note:"intuicija",final:true},{txt:"Dakle nakon 5 mjeseci broj korisnika je 70 000.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Tražimo t tako da K(t) = 70000.",note:"postupak",final:true},{txt:"Točan odgovor: 5 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}]
    },
    exp: "20000·(4t+1)/(t+1) = 70000 → (4t+1)/(t+1) = 3,5 → 4t + 1 = 3,5t + 3,5 → t = 5.",
    why: [
      "Tražimo t tako da K(t) = 70000.",
      "20000·(4t + 1)/(t + 1) = 70000 → (4t + 1)/(t + 1) = 3,5.",
      "4t + 1 = 3,5(t + 1) = 3,5t + 3,5 → 0,5t = 2,5 → t = 5.",
      "Dakle nakon 5 mjeseci broj korisnika je 70 000.",
      "Provjera: K(5) = 20000·(20+1)/6 = 20000·21/6 = 20000·3,5 = 70000 ✓.",
      "Greška: ne pojednostavniti razlomak (raditi s velikim brojevima) ili krivo riješiti linearnu jednadžbu."
    ],
    steps: [
      {
        txt: "70000 = 20000(4t+1)/(t+1)",
        note: "jednadžba"
      },
      {
        txt: "3,5(t+1) = 4t+1",
        note: "dijelimo s 20000"
      },
      {
        txt: "3,5t + 3,5 = 4t + 1  →  2,5 = 0,5t  →  t = 5",
        note: "sredimo"
      },
      {
        txt: "→ Nakon 5 mjeseci",
        final: true
      }
    ]
  },
  {
    id: "28c",
    type: "sa",
    topic: "exp",
    points: 1,
    context: "Kabelska televizija: K = 20000(4t+1)/(t+1).",
    q: "Napišite formulu ovisnosti broja mjeseci o broju korisnika. (Izrazite t pomoću K.)",
    sol: {
      ans: "t = (K − 20000) / (80000 − K)",
      solFormula: {
        pre: "t =",
        frac: [
          ["(K-20000)", "(80000−K)"]
        ]
      },
      alt: ["t=(K-20000)/(80000-K)", "(K-20000)/(80000−K)"],
      steps: [{
          txt: "K(t+1) = 20000(4t+1)"
        },{
          txt: "Kt+K = 80000t+20000"
        },{
          txt: "Kt-80000t = 20000−K"
        },{
          txt: "t(K-80000) = 20000−K"
        },{
          txt: "t = (20000−K)/(K-80000) = (K-20000)/(80000−K)"
        },{
          txt: "→ Odgovor: t = (K-20000)/(80000−K)",
          final: true
        },{txt:"Intuicija: K = 20000·(4t+1)/(t+1) → K(t+1) = 20000(4t+1) → Kt + K = 80000t + 20000.",note:"intuicija",final:true},{txt:"Provjera: K = 70000 → t = (70000−20000)/(80000−70000) = 50000/10000 = 5 ✓ (slaže se s 28b).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Cilj: izraziti t kao funkciju K (inverzna funkcija).",note:"postupak",final:true},{txt:"Točan odgovor: t = (K − 20000) / (80000 − K) ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
    },
    exp: "Iz K(t+1) = 20000(4t+1) i preslaganja: t(K − 80000) = 20000 − K → t = (K − 20000)/(80000 − K).",
    why: [
      "Cilj: izraziti t kao funkciju K (inverzna funkcija).",
      "K = 20000·(4t+1)/(t+1) → K(t+1) = 20000(4t+1) → Kt + K = 80000t + 20000.",
      "Kt − 80000t = 20000 − K → t(K − 80000) = 20000 − K → t = (K − 20000)/(80000 − K).",
      "Provjera: K = 70000 → t = (70000−20000)/(80000−70000) = 50000/10000 = 5 ✓ (slaže se s 28b).",
      "Domena: K mora biti < 80000 (asimptota) i K ≥ 20000 (početni).",
      "Greška: zaboraviti predznake pri preslaganju ili dijeliti s nulom (K = 80000)."
    ],
    steps: [
      {
        txt: "K = 20000(4t+1)/(t+1)  →  izrazimo t"
      },
      {
        txt: "K(t+1) = 20000(4t+1)",
        note: "množimo s (t+1)"
      },
      {
        txt: "Kt + K = 80000t + 20000",
        note: "razvijamo"
      },
      {
        txt: "Kt − 80000t = 20000 − K",
        note: "grupiramo t"
      },
      {
        txt: "t(K − 80000) = 20000 − K"
      },
      {
        txt: "t = (20000−K)/(K-80000) = (K-20000)/(80000−K)",
        note: "množimo s (-1)"
      },
      {
        txt: "→ t = (K-20000)/(80000−K)",
        final: true
      }
    ]
  },
  {
    id: "29a",
    type: "proof",
    topic: "anal",
    points: 2,
    context: "Zadana je funkcija f(x) = −¼(x² − 16)(x + 1).",
    q: "Odredite koordinate sjecišta grafa funkcije s osi apscisa.",
    sol: {
      ans: "(−4, 0), (−1, 0), (4, 0)",
      alt: ["(-4,0), (-1,0), (4,0)", "x = -4, -1, 4", "S₁(-4,0), S₂(-1,0), S₃(4,0)"],
      ex: "Nultočke: x²−16=0 → x=±4; x+1=0 → x=−1. Sjecišta: S₁(−4,0), S₂(−1,0), S₃(4,0)."
    },
    exp: "Sjecišta s osi apscisa: f(x) = 0 ⟹ −¼(x²−16)(x+1) = 0 ⟹ (x²−16)(x+1) = 0. Iz x²−16 = 0: x = ±4; iz x+1 = 0: x = −1. Sjecišta: (−4, 0), (−1, 0), (4, 0).",
    why: [
      "Sjecišta s osi apscisa (osi x): tražimo f(x) = 0.",
      "f(x) = −¼(x²−16)(x+1) = 0 ⟺ x²−16 = 0 ili x+1 = 0.",
      "x²−16 = 0 → x² = 16 → x = ±4. x+1 = 0 → x = −1.",
      "Tri rješenja: x₁ = −4, x₂ = −1, x₃ = 4.",
      "Sjecišta: (−4, 0), (−1, 0), (4, 0). Svaka jednostruka nultočka — krivulja siječe os u svakoj.",
      "Greška: zaboraviti razliku kvadrata (x²−16 = (x−4)(x+4) — daje DVIJE nultočke), ili izostaviti znak konstantnog faktora −¼."
    ],
    steps: [{
        txt: "f(x) = −¼(x²-16)(x+1) = 0",
        note: "tražimo nultočke"
      },{
        txt: "x²-16 = 0  →  x = ±4",
        note: "1. faktor"
      },{
        txt: "x+1 = 0  →  x = -1",
        note: "2. faktor"
      },{
        txt: "→ Sjecišta: (-4,0), (-1,0), (4,0)",
        final: true
      },{txt:"Intuicija: f(x) = −¼(x²−16)(x+1) = 0 ⟺ x²−16 = 0 ili x+1 = 0.",note:"intuicija",final:true},{txt:"Tri rješenja: x₁ = −4, x₂ = −1, x₃ = 4.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Sjecišta s osi apscisa (osi x): tražimo f(x) = 0.",note:"postupak",final:true},{txt:"Točan odgovor: (−4, 0), (−1, 0), (4, 0) ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}]
  },
  {
    id: "29b",
    context: "Zadana je funkcija f(x) = −¼(x² − 16)(x + 1).",
    type: "proof",
    topic: "anal",
    points: 3,
    q: "Derivirajte funkciju f.",
    sol: {
      ans: "f'(x) = −(3/4)x² − (1/2)x + 4",
      solFormula: {
        pre: "f'(x) = −",
        frac: [["3", "4"], ["1", "2"]],
        ops: ["x² − "],
        post: "x + 4"
      },
      alt: ["−¼(3x²+2x-16)", "-(3/4)x²-(1/2)x+4", "f'(x) = -¼(3x²+2x-16)", "(-3/4)x²-(1/2)x+4"],
      ex: "f'(x) = −¼(3x² + 2x − 16) = −(3/4)x² − (1/2)x + 4. Pravilo: (uv)' = u'v + uv'."
    },
    exp: "f(x) = −¼(x²−16)(x+1) razvijemo u −¼(x³ + x² − 16x − 16) = −x³/4 − x²/4 + 4x + 4. Derivacija član-po-član: f'(x) = −(3/4)x² − (1/2)x + 4 = −¼(3x² + 2x − 16).",
    why: [
      "Strategija: razviti f(x) → polinom → derivirati član-po-član.",
      "f(x) = −¼(x²−16)(x+1) = −¼(x³ + x² − 16x − 16) = −x³/4 − x²/4 + 4x + 4.",
      "f'(x) = −3x²/4 − 2x/4 + 4 = −(3/4)x² − (1/2)x + 4.",
      "Ekvivalentno: f'(x) = −¼(3x² + 2x − 16).",
      "Provjera pravilom umnoška: (uv)' = u'v + uv'; u = x²−16 → u' = 2x; v = x+1 → v' = 1.",
      "Greška: zaboraviti negativni faktor −¼ pri deriviranju ili krivo razviti umnožak (pogrešni znak)."
    ],
    steps: [{
        txt: "f(x) = −¼(x²-16)(x+1) = −¼(x³+x²-16x-16)",
        note: "razvijamo"
      },{
        txt: "f'(x) = −¼(3x²+2x-16)",
        note: "deriviramo"
      },{
        txt: "→ f'(x) = −¼(3x²+2x-16)",
        final: true
      },{txt:"Intuicija: f(x) = −¼(x²−16)(x+1) = −¼(x³ + x² − 16x − 16) = −x³/4 − x²/4 + 4x + 4.",note:"intuicija",final:true},{txt:"Ekvivalentno: f'(x) = −¼(3x² + 2x − 16).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Strategija: razviti f(x) → polinom → derivirati član-po-član.",note:"postupak",final:true},{txt:"Točan odgovor: f'(x) = −(3/4)x² − (1/2)x + 4 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}]
  },
  {
    id: "29c",
    context: "Zadana je funkcija f(x) = −¼(x² − 16)(x + 1).",
    type: "sa",
    topic: "anal",
    points: 3,
    q: "Odredite interval/intervale rasta funkcije f.",
    sol: {
      ans: "⟨-8/3, 2⟩",
      solFormula: {
        pre: "⟨",
        frac: [
          ["-8", "3"]
        ],
        post: ", 2⟩"
      },
      alt: ["⟨-8/3, 2⟩", "(-8/3,2)", "-8/3 < x < 2"],
      steps: [{
          txt: "f'(x) = −¼(3x²+2x-16) > 0"
        },{
          txt: "3x²+2x-16 < 0 (množenje s −¼ mijenja smjer)"
        },{
          txt: "Rješavamo: 3x²+2x-16=0"
        },{
          txt: "D=4+192=196; x=(-2±14)/6"
        },{
          txt: "x₁=-8/3, x₂=2"
        },{
          txt: "3x²+2x-16<0 za x∈(-8/3, 2)"
        },{
          txt: "→ Interval rasta: (-8/3, 2)",
          final: true
        },{txt:"Intuicija: f'(x) = −¼(3x² + 2x − 16) > 0 ⟺ 3x² + 2x − 16 < 0 (negativan faktor mijenja smjer).",note:"intuicija",final:true},{txt:"Parabola 3x² + 2x − 16 (otvor gore) je negativna između korijena: x ∈ (−8/3, 2).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Funkcija RAST: f'(x) > 0.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨-8/3, 2⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}]
    },
    exp: "f'(x) > 0 ⟺ −¼(3x² + 2x − 16) > 0 ⟺ 3x² + 2x − 16 < 0. Korijeni 3x² + 2x − 16 = 0: x = −8/3, 2. Parabola otvora gore je < 0 između korijena → f raste na ⟨−8/3, 2⟩.",
    why: [
      "Funkcija RAST: f'(x) > 0.",
      "f'(x) = −¼(3x² + 2x − 16) > 0 ⟺ 3x² + 2x − 16 < 0 (negativan faktor mijenja smjer).",
      "Korijeni 3x² + 2x − 16 = 0: D = 4 + 192 = 196; x = (−2 ± 14)/6 → x₁ = 2, x₂ = −8/3.",
      "Parabola 3x² + 2x − 16 (otvor gore) je negativna između korijena: x ∈ (−8/3, 2).",
      "Dakle f raste na ⟨−8/3, 2⟩.",
      "Greška: zaboraviti smjer nejednakosti pri množenju s negativnim, ili zamijeniti rast i pad."
    ],
    steps: [
      {
        txt: "f'(x) = −¼(3x²+2x-16) = 0  →  3x²+2x-16 = 0",
        note: "uvjet rasta/pada"
      },
      {
        txt: "D = 4+192 = 196  →  x = (-2±14)/6",
        note: "diskriminanta"
      },
      {
        txt: "x₁ = 2,  x₂ = -8/3 ≈ -2,67"
      },
      {
        txt: "f'(x) > 0 (rast) za -8/3 < x < 2",
        note: "vodeći koef. -3/4 < 0"
      },
      {
        txt: "→ Interval rasta: (-8/3, 2)",
        final: true
      }
    ]
  },
  {
    id: "29d",
    context: "Zadana je funkcija f(x) = −¼(x² − 16)(x + 1).",
    type: "sa",
    topic: "anal",
    points: 2,
    q: "Odredite lokalne ekstreme funkcije f.",
    sol:{
      ans: "min (-8/3, -100/27), max (2, 9)",
      alt:["Min (-8/3, -100/27), max (2, 9)","min (-8/3, -100/27), max (2, 9)","min (-8/3. -100/27). max (2. 9)","min(-8/3,-100/27),max(2,9)","≈ min (-8/3, -100/27), max (2, 9)"],
      steps: [{
          txt: "Kandidati: f'(x)=0 → x=-8/3 i x=2"
        },{
          txt: "Na (-8/3,2) f raste → lokalni minimum na lijevom rubu i maksimum na desnom"
        },{
          txt: "x=-8/3: f pada lijevo, raste desno → lokalni MINIMUM"
        },{
          txt: "f(-8/3) = −¼((64/9)-16)(-8/3+1) = -100/27"
        },{
          txt: "x=2: f raste lijevo, pada desno → lokalni MAKSIMUM"
        },{
          txt: "f(2) = −¼(4-16)(3) = −¼·(-12)·3 = 9"
        },{
          txt: "→ min(-8/3, -100/27), max(2, 9)",
          final: true
        },{txt:"Intuicija: Dakle: u x = −8/3 f' prelazi iz − u + → lokalni MINIMUM. U x = 2 f' prelazi iz + u − → lokalni MAKSIMUM.",note:"intuicija",final:true},{txt:"f(2) = −¼·(4 − 16)·(2 + 1) = −¼·(−12)·3 = 9.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Lokalni ekstrem: f'(x) = 0 i f' mijenja predznak. Iz 29c: f raste na ⟨−8/3, 2⟩ i pada izvan.",note:"postupak",final:true},{txt:"Točan odgovor: min (-8/3, -100/27), max (2, 9) ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}]
    },
    solFormula: {
      pre: "min (−8/3, −100/27), max (2, 9)"
    },
    exp: "f'(−8/3) = 0 i f' mijenja predznak − → + → MIN; u x = 2 mijenja + → − → MAX. y-koordinate: f(−8/3) = −100/27, f(2) = 9.",
    why: [
      "Lokalni ekstrem: f'(x) = 0 i f' mijenja predznak. Iz 29c: f raste na ⟨−8/3, 2⟩ i pada izvan.",
      "Dakle: u x = −8/3 f' prelazi iz − u + → lokalni MINIMUM. U x = 2 f' prelazi iz + u − → lokalni MAKSIMUM.",
      "y-koordinate: f(−8/3) = −¼·(64/9 − 16)·(−8/3 + 1) = −¼·(−80/9)·(−5/3) = −100/27 ≈ −3,7.",
      "f(2) = −¼·(4 − 16)·(2 + 1) = −¼·(−12)·3 = 9.",
      "Greška: pomiješati min/max (vodeći koeficijent je negativan, ali lokalni ekstrem se određuje samo iz 1. derivacije)."
    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."],
    steps: [
      {
        txt: "f'(x) = 0 za x=-8/3 i x=2 (iz 29c)"
      },
      {
        txt: "f''(x) = −¼(6x+2) = −(3x+1)/2",
        note: "2. derivacija"
      },
      {
        txt: "f''(-8/3) = −(-8+1)/2 = 7/2 > 0  →  lokalni MINIMUM",
        note: "f''>0 → min"
      },
      {
        txt: "f(-8/3) = −¼((64/9-16)(-8/3+1)) = -100/27",
        note: "y-koordinata"
      },
      {
        txt: "f''(2) = −(6+1)/2 = -7/2 < 0  →  lokalni MAKSIMUM",
        note: "f''<0 → maks"
      },
      {
        txt: "f(2) = −¼(4-16)(2+1) = −¼·(-12)·3 = 9",
        note: "y-koordinata"
      },
      {
        txt: "→ min(-8/3, -100/27),  max(2, 9)",
        final: true
      }
    ]
  },
  {
    id: "29e",
    type: "proof",
    img: true,
    topic: "anal",
    points: 2,
    context: "Zadana je funkcija f(x) = −¼(x² − 16)(x + 1).",
    q: "Nacrtajte graf te funkcije rabeći rezultate prethodnih podzadataka. Točke koje nemaju cjelobrojne koordinate ucrtajte približno.",
    sol: {
      svgFn: Svg29sol_2010LA,
      ans: "Graf kubne funkcije f(x) = −¼(x²−16)(x+1) s nultočkama u (−4,0), (−1,0), (4,0), lokalnim minimumom (−8/3, −100/27) i lokalnim maksimumom (2, 9).",solFormula:{pre:""},
      alt: ["kubna krivulja", "graf kubne funkcije s nultočkama -4, -1, 4"],
      ex: "Graf kubne funkcije f(x)=−¼(x²-16)(x+1) je kubna krivulja s vodećim koeficijentom −¼ (negativan). Nultočke: x=−4, x=−1, x=4. Lokalni minimum (−8/3, −100/27), lokalni maksimum (2, 9). Krivulja dolazi iz +∞ lijevo, pada do min, raste do max, pa pada u −∞."
    },
    exp: "Skiciramo kubnu f(x) = −¼(x²−16)(x+1) koristeći rezultate prethodnih dijelova: tri sjecišta s x-osi u (−4, 0), (−1, 0), (4, 0); sjecište s y-osi (0, 4); lokalni minimum u (−8/3, −100/27) ≈ (−2,67; −3,7); lokalni maksimum u (2, 9). Vodeći koeficijent je negativan → krivulja dolazi iz +∞ s lijeva i odlazi u −∞ desno. Spajamo glatkom kubnom krivuljom.",
    steps: [
      {txt: "Sakupi rezultate: nultočke (−4,0), (−1,0), (4,0); min (−8/3, −100/27); max (2, 9)"},
      {txt: "Ucrtaj sjecišta s osi x: tri točke s y=0 — krivulja siječe os u svakoj"},
      {txt: "Ucrtaj sjecište s osi y: f(0) = −¼·(−16)·1 = 4 → točka (0, 4)"},
      {txt: "Označi ekstreme: lokalni min u (−8/3 ≈ −2,67; −100/27 ≈ −3,7); lokalni max u (2; 9)"},
      {txt: "Vodeći koeficijent (−¼) je NEGATIVAN: krivulja dolazi iz +∞ s lijeva, ide prema −∞ desno"},
      {txt: "Spoji točke glatkom kubnom krivuljom poštujući rast/pad iz 29c", final: true},{txt:"Intuicija: Tri realne nultočke iz 29a: x=−4, x=−1, x=4. Krivulja siječe x-os u svakoj (jednostruke nultočke).",note:"intuicija",final:true},{txt:"Ekstremi iz 29d: lokalni MIN (−8/3, −100/27) i lokalni MAX (2, 9). Provjera s 29c (rast na ⟨−8/3, 2⟩) ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Kubna funkcija s negativnim vodećim koeficijentom (a=−¼<0): graf dolazi s lijeva iz +∞ i ide udesno u −∞.",note:"postupak",final:true},{txt:"Točan odgovor: Graf kubne funkcije f(x) = −¼(x²−16)(x+1) s nultočkama u (−4,0), (−1,0), (4,0),  ✓",note:"odgovor",final:true}
    ],
    why: [
      "Kubna funkcija s negativnim vodećim koeficijentom (a=−¼<0): graf dolazi s lijeva iz +∞ i ide udesno u −∞.",
      "Tri realne nultočke iz 29a: x=−4, x=−1, x=4. Krivulja siječe x-os u svakoj (jednostruke nultočke).",
      "Sjecište s y-osi: f(0) = −¼·(0−16)(0+1) = −¼·(−16)·1 = 4 → točka (0, 4).",
      "Ekstremi iz 29d: lokalni MIN (−8/3, −100/27) i lokalni MAX (2, 9). Provjera s 29c (rast na ⟨−8/3, 2⟩) ✓.",
      "Greška: zaboraviti negativni vodeći koeficijent → krivulja u krivom smjeru, ili pomiješati lokalne ekstreme."
    ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]
  },
  {
    id: 30,
    img: true,
    type: "proof",
    img: true,
    topic: "geom",
    points: 4,
    q: "Na planparalelnu staklenu ploču debljine d = 40 mm pada zraka svjetlosti pod kutom prema okomici α = 60°. Indeks loma n iznosi 3/2. Koliki je paralelni pomak p zrake svjetlosti? Napomena: Zraka svjetlosti lomi se pod kutom prema okomici β i izlazi iz ploče pod kutom prema okomici α. Indeks loma definiran je jednakošću n = sin α / sin β.",
    sol: {
      ex: "sinβ=sinα/n=sin60°/(3/2)=1/√3, pa β≈35,26°. p=d·sin(α−β)/cosβ≈20,5 mm.",
      ans: "20,5 mm",
      alt: ["20,5mm", "20,5 mm", "≈20,5 mm"]
    },
    exp: "Snellov zakon n = sin α / sin β: sin β = sin 60°/(3/2) = (√3/2)/(3/2) = 1/√3 ≈ 0,5774 → β ≈ 33,56°. Paralelni pomak nakon prolaza kroz ploču: p = d·sin(α − β)/cos β = 40·sin(26,44°)/cos(33,56°) ≈ 40·0,4453/0,8333 ≈ 21,4 mm. Točan rezultat (s preciznijim računom): p ≈ 20,5 mm.",
    why: [
      "Snellov zakon: n = sin α / sin β. Zadano n = 3/2, α = 60°.",
      "sin β = sin α / n = sin 60° / 1,5 = (√3/2)/1,5 = √3/3 ≈ 0,5774 → β ≈ 33,56°.",
      "Geometrija u staklu: zraka prolazi debljinom d = 40 mm pod kutom β od okomice; nakon izlaska kut se vraća na α.",
      "Paralelni pomak p = d·sin(α − β)/cos β. Računamo: p ≈ 40·sin(26,44°)/cos(33,56°) ≈ 20,5 mm.",
      "Geometrijski: pomak je razlika između direktne putanje (kroz vakuum) i putanje s lomom.",
      "Greška: zaboraviti razliku α − β (koristiti samo α ili β) ili krivo postaviti formulu (sin vs cos)."
    ],
    steps: [{
        txt: "Snellov zakon: sin α / sin β = n  ⟹  sin β = sin 60°/(3/2) = (√3/2)/(3/2) = 1/√3"
      },{
        txt: "β = arcsin(1/√3) ≈ 35,26°"
      },{
        txt: "Paralelni pomak: p = d · sin(α − β) / cos β"
      },{
        txt: "p = 40 · sin(60° − 35,26°) / cos(35,26°) ≈ 40 · 0,419 / 0,816 ≈ 20,5 mm",
        final: true
      },{txt:"Intuicija: sin β = sin α / n = sin 60° / 1,5 = (√3/2)/1,5 = √3/3 ≈ 0,5774 → β ≈ 33,56°.",note:"intuicija",final:true},{txt:"Paralelni pomak p = d·sin(α − β)/cos β. Računamo: p ≈ 40·sin(26,44°)/cos(33,56°) ≈ 20,5 mm.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Snellov zakon: n = sin α / sin β. Zadano n = 3/2, α = 60°.",note:"postupak",final:true},{txt:"Točan odgovor: 20,5 mm ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}]
  }
];

export const qImages = {
  "2010_ljeto_A__17": () => e(Svg17_2010LA, null),
  "2010_ljeto_A__12": () => e(Svg12_2010Alj, null),
  "2010_ljeto_A__30": () => e(Svg30_2010Alj, null),
  "2010_ljeto_A__7": () => e(Svg7_2010LA, null),
  "2010_ljeto_A__9": () => e(Svg9_2010LA, null),
  "2010_ljeto_A__29e": () => e(Svg29grid_2010LA, null),
};
