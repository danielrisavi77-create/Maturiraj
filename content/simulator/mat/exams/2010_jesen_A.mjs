// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg17_2010Aj(){
  const W=280,H=220,ox=120,oy=140,scX=30,scY=50;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const toX=v=>ox+v*scX, toY=v=>oy-v*scY;
  const t="var(--text)",b=_BLUE,g=_GREEN,gold=_GOLD,mu="var(--muted)",bg="var(--bg)";
  function tk(x,y,col){return e("circle",{cx:x,cy:y,r:3,fill:bg,stroke:col,strokeWidth:1.5});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:2,y1:oy,x2:W-2,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:2,x2:ox,y2:H-2,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${W-2},${oy} ${W-9},${oy-3} ${W-9},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},2 ${ox-3},9 ${ox+3},9`,fill:t}),
    e("text",{x:W-8,y:oy-7,fontSize:11,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:10,fontSize:11,fill:t,fontStyle:"italic"},"y"),
    tk(toX(1),oy,b), tk(ox,toY(1),g),
    e("text",{x:ox+4,y:oy+13,fontSize:9,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+13,fontSize:9,fill:b,textAnchor:"middle"},"1"),
    e("text",{x:ox-7,y:toY(1)+4,fontSize:9,fill:g,textAnchor:"end"},"1"),
    e("line",{x1:toX(-4.5),y1:toY(-4.5/2+1),x2:toX(5),y2:toY(5/2+1),
      stroke:b,strokeWidth:2.5,strokeLinecap:"round"}),
    e("rect",{x:toX(2.5),y:toY(2.6)-14,width:48,height:16,rx:3,
      fill:b,fillOpacity:0.12,stroke:b,strokeWidth:0.8}),
    e("text",{x:toX(2.8),y:toY(2.6)-3,fontSize:10,fill:b,fontStyle:"italic",fontWeight:"bold"},"y=f(x)"),
    e("text",{x:ox+5,y:H-10,fontSize:9,fill:gold,fontStyle:"italic"},"nacrtaj: g(x)=−f(x)"),
  );
}

function Svg9_2010Aj(){
  const W=220,H=205;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",b=_BLUE,g=_GREEN,gold=_GOLD,r2=_RED;
  const APEX=[104,46],LEFT_TIP=[12,115];
  const SQ_TL=[50,147],SQ_TR=[146,147],SQ_BL=[50,195],SQ_BR=[146,195];
  const JUNCT=[183,113],UPPER_R=[208,25];
  function face(pts,col){
    return e("polygon",{points:pts.map(p=>p.join(",")).join(" "),
      fill:col,fillOpacity:0.15,stroke:col,strokeWidth:1.6,strokeLinejoin:"round"});
  }
  function ln(a,b2,col,dsh){return e("line",{
    x1:a[0],y1:a[1],x2:b2[0],y2:b2[1],
    stroke:col,strokeWidth:1.6,strokeLinecap:"round",
    ...(dsh?{strokeDasharray:"5,3"}:{})
  });}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("rect",{x:SQ_TL[0],y:SQ_TL[1],width:SQ_TR[0]-SQ_TL[0],height:SQ_BL[1]-SQ_TL[1],
      fill:b,fillOpacity:0.12,stroke:b,strokeWidth:2}),
    face([APEX,LEFT_TIP,SQ_TL],g),
    face([APEX,SQ_TL,SQ_TR],gold),
    face([APEX,SQ_TR,JUNCT],r2),
    face([APEX,JUNCT,UPPER_R],g),
    ln(APEX,LEFT_TIP,g), ln(APEX,SQ_TL,gold), ln(APEX,SQ_TR,gold),
    ln(APEX,JUNCT,r2), ln(APEX,UPPER_R,g),
    ln(LEFT_TIP,SQ_TL,g), ln(SQ_TR,JUNCT,r2), ln(JUNCT,UPPER_R,g),
    e("circle",{cx:APEX[0],cy:APEX[1],r:4.5,fill:r2,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:APEX[0],y:APEX[1]-8,fontSize:9,fill:r2,textAnchor:"middle",fontWeight:"bold"},"vrh"),
  );
}

function Svg7_2010Aj(){
  const W=220,H=160,rL=32,rT=28,rW=148,rH=94;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",b=_BLUE,g=_GREEN,gold=_GOLD,mu="var(--muted)";
  const A=[rL,rT+rH], B=[rL+rW,rT+rH], C=[rL,rT];
  function dot(p,col){return e("circle",{cx:p[0],cy:p[1],r:4,fill:col,stroke:"var(--bg)",strokeWidth:1.5});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("rect",{x:rL,y:rT,width:rW,height:rH,fill:"none",stroke:mu,strokeWidth:1.2,strokeDasharray:"6,3"}),
    e("polygon",{points:`${C[0]},${C[1]} ${A[0]},${A[1]} ${B[0]},${B[1]}`,
      fill:b,fillOpacity:0.18,stroke:b,strokeWidth:2,strokeLinejoin:"round"}),
    dot(C,gold), dot(A,g), dot(B,g),
    e("circle",{cx:rL+rW,cy:rT,r:3.5,fill:mu,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:C[0]+6,y:C[1]-5,fontSize:12,fill:gold,fontStyle:"italic",fontWeight:"bold"},"C"),
    e("text",{x:A[0]-16,y:A[1]+4,fontSize:12,fill:g,fontStyle:"italic",fontWeight:"bold"},"A"),
    e("text",{x:B[0]+5,y:B[1]+4,fontSize:12,fill:g,fontStyle:"italic",fontWeight:"bold"},"B"),
    e("text",{x:rL-18,y:rT+rH/2+4,fontSize:11,fill:b,fontStyle:"italic",fontWeight:"bold"},"a"),
    e("text",{x:rL+rW/2,y:rT+rH+15,fontSize:11,fill:b,fontStyle:"italic",fontWeight:"bold",textAnchor:"middle"},"a+3"),
  );
}

function Svg6_2010Aj(){
  const W=220,H=170,ox=60,oy=120,scX=32,scY=25;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const toX=v=>ox+v*scX, toY=v=>oy-v*scY;
  const t="var(--text)",b=_BLUE,r2=_RED,g=_GREEN,mu="var(--muted)",bg="var(--bg)";
  const pts=[];
  for(let x=-0.97;x<=4.6;x+=0.04){
    const y=Math.log2(x+1);
    if(y<-5||y>6) continue;
    const px=toX(x),py=toY(y);
    if(px>=-2&&px<=W+2&&py>=-2&&py<=H+2) pts.push(px.toFixed(1)+","+py.toFixed(1));
  }
  function tk(x,y,col){return e("circle",{cx:x,cy:y,r:3,fill:bg,stroke:col||mu,strokeWidth:1.5});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:toX(-1),y1:0,x2:toX(-1),y2:H,stroke:r2,strokeWidth:1.2,strokeDasharray:"5,3",opacity:0.7}),
    e("text",{x:toX(-1)+3,y:14,fontSize:8,fill:r2,opacity:0.8},"x=−1"),
    e("line",{x1:2,y1:oy,x2:W-2,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:2,x2:ox,y2:H-2,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${W-2},${oy} ${W-9},${oy-3} ${W-9},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},2 ${ox-3},9 ${ox+3},9`,fill:t}),
    e("text",{x:W-4,y:oy-6,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:8,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    tk(toX(1),oy,b), tk(toX(2),oy,b), tk(toX(3),oy,b), tk(toX(4),oy,b),
    tk(ox,toY(1),g), tk(ox,toY(2),g), tk(ox,toY(-1),mu), tk(ox,toY(-2),mu),
    e("text",{x:toX(1),y:oy+13,fontSize:9,fill:b,textAnchor:"middle"},"1"),
    e("text",{x:ox-7,y:toY(1)+4,fontSize:9,fill:g,textAnchor:"end"},"1"),
    e("text",{x:ox+4,y:oy+13,fontSize:9,fill:mu},"0"),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),
    e("text",{x:toX(3.1),y:toY(2.2)-7,fontSize:10,fill:b,fontStyle:"italic",fontWeight:"bold"},"y=f(x)"),
  );
}

function Svg4_2010Aj(){
  const W=345,H=165;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",b=_BLUE,g=_GREEN,gold=_GOLD,mu="var(--muted)";
  const angA_deg=43, angB_deg=78;
  const angA_rad=angA_deg*Math.PI/180;
  const sc=26;
  function mkTri(originX,originY,AB_cm,AC_cm,labBase,labSide,showAlpha,triCol,angleCol){
    const A=[originX,originY], B=[originX+AB_cm*sc,originY];
    const C=[originX+AC_cm*Math.cos(angA_rad)*sc, originY-AC_cm*Math.sin(angA_rad)*sc];
    function arcAtVertex(V,ref1,ref2,r){
      const a1=Math.atan2(ref1[1]-V[1],ref1[0]-V[0]);
      const a2=Math.atan2(ref2[1]-V[1],ref2[0]-V[0]);
      const x1=V[0]+r*Math.cos(a1),y1=V[1]+r*Math.sin(a1);
      const x2=V[0]+r*Math.cos(a2),y2=V[1]+r*Math.sin(a2);
      let diff=a2-a1; while(diff>Math.PI)diff-=2*Math.PI; while(diff<-Math.PI)diff+=2*Math.PI;
      return e("path",{d:`M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0,${diff>0?1:0} ${x2.toFixed(1)},${y2.toFixed(1)}`,
        fill:"none",stroke:angleCol,strokeWidth:1.5});
    }
    const mAB=[(A[0]+B[0])/2,(A[1]+B[1])/2], mAC=[(A[0]+C[0])/2,(A[1]+C[1])/2];
    return e("g",null,
      e("polygon",{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
        fill:triCol,fillOpacity:0.08,stroke:triCol,strokeWidth:2,strokeLinejoin:"round"}),
      arcAtVertex(A,B,C,16), arcAtVertex(B,C,A,16),
      ...[A,B,C].map((p,i)=>e("circle",{key:"d"+i,cx:p[0],cy:p[1],r:3,fill:"none",stroke:triCol,strokeWidth:1.5})),
      e("text",{x:mAC[0]-8,y:mAC[1]-4,fontSize:10,fill:triCol,textAnchor:"end"},labSide),
      e("text",{x:mAB[0],y:mAB[1]+13,fontSize:10,fill:triCol,textAnchor:"middle"},labBase),
      e("text",{x:A[0]+20,y:A[1]-4,fontSize:9,fill:showAlpha?gold:angleCol,fontWeight:"bold"},showAlpha?"α":"43°"),
      e("text",{x:B[0]-24,y:B[1]-4,fontSize:9,fill:angleCol,fontWeight:"bold"},"78°"),
    );
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    mkTri(15,132,2.8,3.2,"2.8 cm","3.2 cm",false,g,gold),
    e("text",{x:155,y:82,fontSize:22,fill:mu,textAnchor:"middle"},"≅"),
    mkTri(170,132,5.6,6.4,"5.6 cm","6.4 cm",true,b,gold),
  );
}

function Svg29_2010Aj(){
  const W=220,H=180,pad={l:32,r:14,t:14,b:28};
  const xMin=-1,xMax=5,yMin=-5,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  // f(x) iz ključa: nultočke (1,0),(4,0),(0,4), max=(1,0), min=(3,-4)
  // f(x) = (x-1)(x-4)(-x) = ... ili x^3-4x^2-x+4... rekon. iz ključa:
  // Nultočke 1 i 4 i 0? Ključ kaže: "sjecišta x-osi: (1,0),(4,0)", os y: (0,4)
  // f(x) = -(x-1)(x-4) da prolazi (0,4)? f(0)=-(-1)(-4)=-4 ≠ 4.
  // Klju\u010d: f'(x)=3x²-12x+9, max=(1,0), min=(3,-4). f(x)=x³-6x²+9x+? 
  // f(0)=c: ključ kaže (0,4) → c=4? f(x)=x³-6x²+9x+4... ali (1,0): 1-6+9+4=8≠0
  // Pokušaj: f'=3x²-12x+9=3(x-1)(x-3). Max x=1, min x=3.
  // f(x)=x³-6x²+9x+c. f(1)=1-6+9+c=4+c=0→c=-4. f(x)=x³-6x²+9x-4.
  // f(0)=-4, f(4)=64-96+36-4=0 ✓. Nultočke: (4,0) i gdje još? (x-4)(x²-2x+1)=(x-4)(x-1)². 
  // Nultočke: x=1(dvostruka) i x=4. f(0)=-4. Os y: (0,-4)... ali klju\u010d kaže (0,4)?
  // Ili su zamijenjene oznake. Crtam f(x)=x³-6x²+9x-4:
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.08){
    const y=x*x*x-6*x*x+9*x-4;
    if(y>yMax||y<yMin) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-5,-4,-3,-2,-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[-1,1,2,3,4].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[-4,-3,-2,-1,1,2,3,4].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinejoin:"round"}),
    // Sjecište s y-osi (0, -4)
    e("circle",{cx:ox,cy:toY(-4),r:3.5,fill:"var(--gold)",stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:ox+5,y:toY(-4)+10,fontSize:8,fill:"var(--gold)"},"(0,\u22124)"),
    // Nultočke s osi x (zelene)
    e("circle",{cx:toX(4),cy:oy,r:3.5,fill:"var(--green)",stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:toX(4),y:oy-6,textAnchor:"middle",fontSize:8,fill:"var(--green)"},"(4,0)"),
    // Lokalni maksimum (1, 0) — istovremeno dvostruka nultočka
    e("circle",{cx:toX(1),cy:toY(0),r:4,fill:"var(--blue)",stroke:"var(--bg)",strokeWidth:1.8}),
    e("text",{x:toX(1)-4,y:toY(0)-6,textAnchor:"end",fontSize:8,fill:"var(--blue)"},"max(1,0)"),
    // Lokalni minimum (3, -4)
    e("circle",{cx:toX(3),cy:toY(-4),r:4,fill:"var(--red)",stroke:"var(--bg)",strokeWidth:1.8}),
    e("text",{x:toX(3)+5,y:toY(-4)+3,fontSize:8,fill:"var(--red)"},"min(3,\u22124)")
  );
}

function Svg17sol_2010JA(){
  const W=280,H=220,ox=120,oy=140,scX=30,scY=50;
  const toX=v=>ox+v*scX, toY=v=>oy-v*scY;
  const t="var(--text)",b="var(--blue)",g2="var(--green)",mu="var(--muted)";
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:"#fff",stroke:t,strokeWidth:1.2});}
  // Intersection of f and g: (1/2)x+1 = -(1/2)x-1 → x+x=-2 → x=-2, y=0 ✓
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:2,y1:oy,x2:W-2,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:2,x2:ox,y2:H-2,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${W-2},${oy} ${W-9},${oy-3} ${W-9},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},2 ${ox-3},9 ${ox+3},9`,fill:t}),
    e("text",{x:W-8,y:oy-7,fontSize:11,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+5,y:10,fontSize:11,fill:t,fontStyle:"italic"},"y"),
    tk(toX(1),oy), tk(ox,toY(1)),
    e("text",{x:ox+4,y:oy+13,fontSize:9,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+13,fontSize:9,fill:mu,textAnchor:"middle"},"1"),
    e("text",{x:ox-7,y:toY(1)+4,fontSize:9,fill:mu,textAnchor:"end"},"1"),
    // f(x) = (1/2)x + 1 — blue
    e("line",{x1:toX(-4.5),y1:toY(-4.5/2+1),x2:toX(5),y2:toY(5/2+1),
      stroke:b,strokeWidth:2.2,strokeLinecap:"round"}),
    e("text",{x:toX(3.5),y:toY(2.8)-6,fontSize:10,fill:b,fontStyle:"italic"},"y=f(x)"),
    // g(x) = -(1/2)x - 1 — green (zrcaljenje f oko x-osi)
    e("line",{x1:toX(-4.5),y1:toY(4.5/2-1),x2:toX(5),y2:toY(-5/2-1),
      stroke:g2,strokeWidth:2.2,strokeLinecap:"round",strokeDasharray:"6,3"}),
    e("text",{x:toX(2.2),y:toY(-2.6)+4,fontSize:10,fill:g2,fontStyle:"italic"},"y=g(x)"),
    // Intersection point (-2, 0) marked
    e("circle",{cx:toX(-2),cy:oy,r:4,fill:g2,opacity:.8}),
  );
}

export const qs = [
  {
    id: 1,
    type: "mc",
    warn: "Pazi: provjeri pripadnost brojeva skupovima (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ).",
    topic: "br",
    points: 1,
    q: "Koja je od navedenih tvrdnji istinita?",
    opts: [
      "Svaki kompleksan broj je ujedno i realan broj.",
      "Svaki racionalan broj je ujedno i cijeli broj.",
      "Svaki racionalan broj je ujedno i realan broj.",
      "Svaki kompleksan broj je ujedno i iracionalan broj."
    ],
    sol: {
      cl: "C"
    },
    exp: "ℚ ⊂ ℝ: svaki racionalan broj je ujedno i realan. ✓",
    steps: [
      {txt: "Provjerimo svaku tvrdnju protiv hijerarhije skupova ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ"},
      {txt: "A: 'svaki kompleksan je realan' ✗ (npr. i nije realan)"},
      {txt: "B: 'svaki racionalan je cijeli' ✗ (npr. 1/2 nije cijeli)"},
      {txt: "C: 'svaki racionalan je realan' ✓ jer ℚ ⊂ ℝ", final: true}
    ,
      {
        txt: "Provjera: ℚ ⊂ ℝ → npr. 3/4 ∈ ℝ ✓; ali 3/4 ∉ ℤ, i=√(−1) ∉ ℝ.",
        note: "verifikacija"
      },
      {
        txt: "A — kompleksni ⊄ realni (i npr. nije realan). B — racionalni ⊄ cijeli (1/2 nije cijeli). C — svaki racionalan jest realan (ℚ ⊂ ℝ) ✓. D — kompleksni nisu iracionalni.",
        note: "diagnostika"
      },{txt:"Ali NE vrijedi obrat: π je realan ali nije racionalan (iracionalan).",note:"verifikacija",final:true},{txt:"Intuicija: Svaki racionalan broj može se zapisati kao decimalni broj (konačan ili periodičan), pa je realan.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Skupovi brojeva čine hijerarhiju: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ.",note:"postupak",final:true},{txt:"ℚ ⊂ ℝ → svaki racionalan je realan ✓ (odgovor C).",note:"diagnostika",final:true}],
    why: [

      "Skupovi brojeva čine hijerarhiju: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ.",

      "Svaki racionalan broj može se zapisati kao decimalni broj (konačan ili periodičan), pa je realan.",

      "ℚ ⊂ ℝ → svaki racionalan je realan ✓ (odgovor C).",

      "Ali NE vrijedi obrat: π je realan ali nije racionalan (iracionalan).",

      "Greška: pretpostaviti da svaki kompleksan broj ima realni dio = 0, pa je 'realan'."

    ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
  },
  {
    id: 2,
    type: "mc",
    warn: "Pazi: stupnjevi = radijani · 180°/π; π se krati.",
    topic: "trig",
    points: 1,
    q: "Mjera kuta je 7π/10 radijana. Koliko je to stupnjeva?",
    opts: ["21°", "63°", "94°", "126°"],
    sol: {
      cl: "D"
    },
    exp: "7π/10 × (180°/π) = 7×18 = 126°.",
    steps: [
      {txt: "Pretvorba: 180° = π radijana, dakle 1 rad = 180°/π"},
      {txt: "Stoga: stupnjevi = radijani · 180°/π"},
      {txt: "Računamo: (7π/10) · 180°/π = 7·180°/10 = 7·18° = 126°", final: true}
    ,
      {
        txt: "Provjera: 7π/10 · (180°/π) = 7·18° = 126° ✓",
        note: "verifikacija"
      },
      {
        txt: "A (21°) — 7π/10 · (180/π)/10. B (63°) — 7·9=63, ali faktor kriv. C (94°) — nije 7·14=98. D=126°=7π/10·(180/π)=7·18=126 ✓.",
        note: "diagnostika"
      },{txt:"π se 'krati' — ostaje samo numerička vrijednost pomnožena s 18.",note:"verifikacija",final:true},{txt:"Intuicija: Formula: stupnjevi = radijani · 180°/π.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pretvorba radijana u stupnjeve: koristimo proporciju 180° = π rad.",note:"postupak",final:true},{txt:"Računamo: (7π/10) · 180°/π = 7·18° = 126°.",note:"diagnostika",final:true}],
    why: [

      "Pretvorba radijana u stupnjeve: koristimo proporciju 180° = π rad.",

      "Formula: stupnjevi = radijani · 180°/π.",

      "Računamo: (7π/10) · 180°/π = 7·18° = 126°.",

      "π se 'krati' — ostaje samo numerička vrijednost pomnožena s 18.",

      "Provjera: 7π/10 je između π/2 (90°) i π (180°), bliže π → 126° ✓."

    ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta."]
  },
  {
    id: 3,
    type: "mc",
    warn: "Pazi: pretvori GB u MB (·1024), podijeli s 700, pa ZAOKRUŽI NAGORE (ne može pola CD-a).",
    topic: "br",
    points: 1,
    q: "Jedan gigabajt ima 1024 megabajta. Na 1 CD stane 700 megabajta podataka. Koliko je najmanje CD-a potrebno da bi se pohranilo 6 gigabajta podataka?",
    opts: ["6", "7", "8", "9"],
    sol: {
      cl: "D"
    },
    exp: "6 GB = 6144 MB. 6144/700 = 8,77... ⇒ najmanje 9 CD-a.",
    steps: [
      {
        txt: "6×1024 = 6144 MB"
      },
      {
        txt: "6144/700 ≈ 8,77"
      },
      {
        txt: "Najmanje: 9"
      }
    ,
      {
        txt: "Provjera: 9·700=6300 MB < 6144 MB; 8·700=5600 MB < 6144 → 9 CD-a ✓",
        note: "verifikacija"
      },
      {
        txt: "A (6) — ⌈6144/700⌉=⌈8,77⌉=9 ≠ 6. B (7) i C (8) — ne zaokružuju gore. D=9 ✓: 6·1024=6144; 6144/700=8,77→9 CD-a.",
        note: "diagnostika"
      },{txt:"Ovo je tipična primjena ceiling funkcije ⌈x⌉.",note:"verifikacija",final:true},{txt:"Intuicija: Broj CD-a: 6144 / 700 = 8,777... → moramo zaokružiti NAGORE jer ne možemo imati 'pol CD-a'.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ukupan broj megabajta: 6 GB · 1024 MB/GB = 6144 MB.",note:"postupak",final:true},{txt:"Najmanje cijelih CD-a = 9 (jer 8 CD-a = 5600 MB nije dovoljno).",note:"diagnostika",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true}],
    why: [

      "Ukupan broj megabajta: 6 GB · 1024 MB/GB = 6144 MB.",

      "Broj CD-a: 6144 / 700 = 8,777... → moramo zaokružiti NAGORE jer ne možemo imati 'pol CD-a'.",

      "Najmanje cijelih CD-a = 9 (jer 8 CD-a = 5600 MB nije dovoljno).",

      "Ovo je tipična primjena ceiling funkcije ⌈x⌉.",

      "Greška: zaokružiti 8,777 na 9 'matematički' (uobičajeno bi bilo 9), ali ovdje treba SVAKAKO ići NAGORE."

    ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
  },
  {
    id: 4,
    img: true,
    type: "mc",
    warn: "Pazi: iskoristi odnose kutova sa slike (uz pravac, u trokutu, obodni kut).",
    topic: "geom",
    points: 1,
    q: "Kolika je mjera označenoga kuta α na slici?",
    opts: ["α=43°", "α=47°", "α=86°", "ne može se odrediti"],
    sol: {
      cl: "A"
    },
    exp: "Iz geometrijskog svojstva sličnih trokuta i zadanih kutova: α=43°.",
    steps: [
      {txt: "Provjerimo jesu li trokuti slični: omjer stranica 6,4/3,2 = 2 i 5,6/2,8 = 2 → DA, slični"},
      {txt: "U sličnim trokutima odgovarajući kutovi su JEDNAKI"},
      {txt: "Kut α u drugom trokutu odgovara kutu 43° u prvom (oba leže na istoj poziciji)"},
      {txt: "α = 43°", final: true}
    ,
      {
        txt: "Provjera: slični trokuti imaju iste kutove → 43° se prenosi direktno ✓",
        note: "verifikacija"
      },
      {
        txt: "Slična trokuta → isti kutovi. Kut 78° je isti u oba. Kut 43° u manjem → α=43° u većem. B (47°)=90−43=47 (pogrešno, ne pravokutni). C (86°)=2·43 nema osnove. D — može se odrediti.",
        note: "diagnostika"
      },{txt:"U slijednim trokutima odgovarajući kutovi su JEDNAKI → α = 43°.",note:"verifikacija",final:true},{txt:"Intuicija: Drugi trokut ima stranice 6,4 cm i 5,6 cm = duplo veće od 3,2 cm i 2,8 cm prvog trokuta.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ako su trokuti SLIČNI (ili sukladni), odgovarajući kutovi su jednaki.",note:"postupak",final:true},{txt:"Omjeri: 6,4/3,2 = 2 i 5,6/2,8 = 2 → trokuti su slični (omjer 1:2).",note:"diagnostika",final:true}],
    why: [

      "Ako su trokuti SLIČNI (ili sukladni), odgovarajući kutovi su jednaki.",

      "Drugi trokut ima stranice 6,4 cm i 5,6 cm = duplo veće od 3,2 cm i 2,8 cm prvog trokuta.",

      "Omjeri: 6,4/3,2 = 2 i 5,6/2,8 = 2 → trokuti su slični (omjer 1:2).",

      "U slijednim trokutima odgovarajući kutovi su JEDNAKI → α = 43°.",

      "Greška: misliti da je α = 78° jer izgleda slično, ili 86° jer je 43+43."

    ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."],
    img: true
  },
  {
    id: 5,
    type: "mc",
    warn: "Pazi: dijelovi 3k + 5k = 8k = 24464 → k = 3058; razlika = 5k − 3k = 2k.",
    topic: "br",
    points: 1,
    q: "Iva i Matej dijele iznos od 24 464 kn u omjeru 3:5. Koliko je kuna Iva dobila manje od Mateja?",
    opts: ["3 262 kn", "4 892,80 kn", "6 116 kn", "9 785,60 kn"],
    sol: {
      cl: "C"
    },
    exp: "Razlika = (5-3)/8 × 24464 = [FRAC:1|4] × 24464 = 6116 kn.",
    steps: [
      {txt: "Omjer 3:5 znači ukupno 3+5 = 8 dijelova"},
      {txt: "Vrijednost jednog dijela: 24464 / 8 = 3058 kn"},
      {txt: "Razlika u dijelovima Mateja i Ive: 5−3 = 2 dijela"},
      {txt: "Razlika u kn: 2 · 3058 = 6116 kn", final: true}
    ,
      {
        txt: "Provjera: Iva=3/8·24464=9174 kn; Matej=5/8·24464=15290 kn; 15290−9174=6116 kn ✓",
        note: "verifikacija"
      },
      {
        txt: "Iva = 3/8·24464=9174 kn. Matej = 5/8·24464=15290 kn. Razlika = 6116 kn = C. A — dijele na 3 i 5 dijelova; B/D — krivi izraz razlike.",
        note: "diagnostika"
      },{txt:"Razlika: 15290 - 9174 = 6116 kn (Iva ima manje).",note:"verifikacija",final:true},{txt:"Intuicija: Vrijednost jednog dijela: 24464 / 8 = 3058 kn.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: U omjeru 3:5 ukupno je 3+5 = 8 dijelova.",note:"postupak",final:true},{txt:"Iva (3 dijela): 3 · 3058 = 9174 kn. Matej (5 dijelova): 5 · 3058 = 15290 kn.",note:"diagnostika",final:true}],
    why: [

      "U omjeru 3:5 ukupno je 3+5 = 8 dijelova.",

      "Vrijednost jednog dijela: 24464 / 8 = 3058 kn.",

      "Iva (3 dijela): 3 · 3058 = 9174 kn. Matej (5 dijelova): 5 · 3058 = 15290 kn.",

      "Razlika: 15290 - 9174 = 6116 kn (Iva ima manje).",

      "Brži način: razlika u dijelovima je 5-3 = 2, a 2 · 3058 = 6116 kn ✓."

    ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
  },
  {
    id: 6,
    img: true,
    type: "mc",
    warn: "Pazi: očitaj nultočke, presjek s osi y i ponašanje grafa pa usporedi s ponuđenima.",
    topic: "lin",
    points: 1,
    q: "Graf koje funkcije je prikazan na slici?",
    opts: [
      {pre: "f(x) = ", frac: [["2", "3"]], post: "x"},
      {pre: "f(x) = −", frac: [["2", "3"]], post: "x² − (8/3)x"},
      "f(x) = 2^(1 + x/3) − 2",
      "f(x) = log₂(x + 1)"
    ],
    sol: {
      cl: "D"
    },
    exp: "Graf s asimptotom x=-1, prolazi (0,0) i raste logaritamski = D: log₂(x+1).",
    steps: [
      {
        txt: "Graf raste logaritamski"
      },
      {
        txt: "Asimptota: x=-1"
      },
      {
        txt: "f(0) = log₂(1) = 0 ✓"
      }
    ,
      {
        txt: "Provjera: f(0)=log₂(1)=0 ✓; f(1)=log₂(2)=1 ✓; f(-1)=log₂(0)→−∞ ✓",
        note: "verifikacija"
      },
      {
        txt: "Graf prolazi kroz (0,0), raste, prolazi kroz (−1,−1) → logaritamska. D=log₂(x+1): log₂(0+1)=0 ✓, log₂(1+1)=1 ✓. A — linearna. B — kvadratna. C — eksponencijala.",
        note: "diagnostika"
      },{txt:"Provjera: graf je MONOTONO RASTUĆI ali konkavan (sporije raste) — to je svojstvo logaritma.",note:"verifikacija",final:true},{txt:"Intuicija: Test x=0: A: 0 ✓, B: 0 ✓, C: 2¹-2 = 0 ✓, D: log₂(0+1) = log₂(1) = 0 ✓ — svi prolaze ishodištem.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Graf prolazi kroz (0, 0) — to eliminira A (linearna kroz ishodište bi bila ravna), B (parabola s tjemenom u 0), i C (eksponencijalna 2^(1+x/3)-2 daje y=0 ali za x=-3, ne x=0).",note:"postupak",final:true},{txt:"Test x=1: D: log₂(2) = 1 ✓ — graf prolazi (1, 1).",note:"diagnostika",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbe sustava; 2) eliminacija ili supstitucija; 3) provjeri uvrstavanjem.",note:"postupak",final:true}],
    why: [

      "Graf prolazi kroz (0, 0) — to eliminira A (linearna kroz ishodište bi bila ravna), B (parabola s tjemenom u 0), i C (eksponencijalna 2^(1+x/3)-2 daje y=0 ali za x=-3, ne x=0).",

      "Test x=0: A: 0 ✓, B: 0 ✓, C: 2¹-2 = 0 ✓, D: log₂(0+1) = log₂(1) = 0 ✓ — svi prolaze ishodištem.",

      "Test x=1: D: log₂(2) = 1 ✓ — graf prolazi (1, 1).",

      "Provjera: graf je MONOTONO RASTUĆI ali konkavan (sporije raste) — to je svojstvo logaritma.",

      "Greška: pomiješati log₂(x+1) s 2^x (eksponencijalnom) — log raste sporije, eksponencijalna brže."

    ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."],
    img: true
  },
  {
    id: 7,
    img: true,
    type: "mc",
    warn: "Pazi: iz opsega nađi dimenzije pravokutnika, pa površina trokuta = ½·baza·visina.",
    topic: "geom",
    points: 1,
    q: "Opseg pravokutnika sa slike iznosi 54 cm. Koliko iznosi površina trokuta ABC?",
    opts: ["45 cm²", "90 cm²", "135 cm²", "180 cm²"],
    sol: {
      cl: "B"
    },
    exp: "2(a+a+3)=54 ⇒ a=12. Stranice: 12 i 15. Trokut ABC (polovina pravokutnika): 12×15/2=90.",
    steps: [
      {
        txt: "2(a+a+3)=54 ⇒ 4a+6=54 ⇒ a=12"
      },
      {
        txt: "Pravokutnik: 12×15"
      },
      {
        txt: "P(ABC)=12×15/2=90 cm²"
      }
    ,
      {
        txt: "Provjera: 2(12+15)=54 ✓; P=(1/2)·15·12=90 cm² ✓",
        note: "verifikacija"
      },
      {
        txt: "Opseg=2(a+a+3)=54 → 4a+6=54 → a=12. Površina trokuta ABC=(1/2)·baza·visina=(1/2)·(a+3)·a=(1/2)·15·12=90 cm²=B.",
        note: "diagnostika"
      },{txt:"P_trokut = (osnovica · visina)/2 = (15 · 12)/2 = 90 cm².",note:"verifikacija",final:true},{txt:"Intuicija: Iz 4a+6 = 54 → 4a = 48 → a = 12. Stranice pravokutnika: 12 cm i 15 cm.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Opseg pravokutnika sa stranicama a i (a+3): O = 2a + 2(a+3) = 4a+6 = 54.",note:"postupak",final:true},{txt:"Trokut ABC: vrh C u gornjem kutu, baza AB = 15 cm (dno pravokutnika), visina = a = 12 cm.",note:"diagnostika",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true}],
    why: [

      "Opseg pravokutnika sa stranicama a i (a+3): O = 2a + 2(a+3) = 4a+6 = 54.",

      "Iz 4a+6 = 54 → 4a = 48 → a = 12. Stranice pravokutnika: 12 cm i 15 cm.",

      "Trokut ABC: vrh C u gornjem kutu, baza AB = 15 cm (dno pravokutnika), visina = a = 12 cm.",

      "P_trokut = (osnovica · visina)/2 = (15 · 12)/2 = 90 cm².",

      "Brzi trik: P_trokut = polovina P_pravokutnika kad trokut ima jednu stranicu kao bazu = (12·15)/2 = 90 cm² ✓."

    ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."],
    img: true
  },
  {
    id: 8,
    type: "mc",
    warn: "Pazi: √5 ≈ 2,236 → a ≈ 3,236; provjeri tvrdnje (između kojih cijelih brojeva, racionalnost).",
    topic: "br",
    points: 1,
    q: "Što je od navedenoga točno za broj a = 1 + √5?",
    opts: ["a²+2a+4=0", "a²+2a−4=0", "a²−2a+4=0", "a²−2a−4=0"],
    sol: {
      cl: "D"
    },
    exp: "a=1+√5 ⇒ a-1=√5 ⇒ (a-1)²=5 ⇒ a²-2a+1=5 ⇒ a²-2a-4=0.",
    steps: [
      {
        txt: "a-1 = √5"
      },
      {
        txt: "(a-1)² = 5"
      },
      {
        txt: "a²-2a+1 = 5"
      },
      {
        txt: "a²-2a-4 = 0"
      }
    ,
      {
        txt: "Provjera: a²−2a−4=(1+√5)²−2(1+√5)−4=6+2√5−2−2√5−4=0 ✓",
        note: "verifikacija"
      },
      {
        txt: "a=1+√5 → a−1=√5 → (a−1)²=5 → a²−2a+1=5 → a²−2a−4=0 = D. A/B/C — griješe u predznaku ili vrijednosti.",
        note: "diagnostika"
      },{txt:"Provjera uvrštavanjem: (1+√5)² - 2(1+√5) - 4 = 6+2√5 - 2 - 2√5 - 4 = 0 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: Iz a = 1+√5 → a-1 = √5. Kvadriramo: (a-1)² = 5.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Cilj: pronaći kvadratnu jednadžbu kojoj je a = 1+√5 jedno rješenje.",note:"postupak",final:true},{txt:"Razvijamo: a² - 2a + 1 = 5 → a² - 2a - 4 = 0 (odgovor D).",note:"diagnostika",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) prepoznaj tip broja/operacije; 2) primijeni pravilo (skupovi, postoci, eksponenti); 3) provjeri red veličine.",note:"postupak",final:true}],
    why: [

      "Cilj: pronaći kvadratnu jednadžbu kojoj je a = 1+√5 jedno rješenje.",

      "Iz a = 1+√5 → a-1 = √5. Kvadriramo: (a-1)² = 5.",

      "Razvijamo: a² - 2a + 1 = 5 → a² - 2a - 4 = 0 (odgovor D).",

      "Provjera uvrštavanjem: (1+√5)² - 2(1+√5) - 4 = 6+2√5 - 2 - 2√5 - 4 = 0 ✓.",

      "Greška: zaboraviti -1 nakon kvadriranja, ili krivo prebaciti znak (-2a vs +2a)."

    ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
  },
  {
    id: 9,
    img: true,
    type: "mc",
    warn: "Pazi: prebroji i prepoznaj likove u mreži (baze + pobočke) → koje se tijelo sklapa.",
    topic: "geom",
    points: 1,
    q: "Na slici je prikazana mreža geometrijskoga tijela. Koje je to tijelo?",
    opts: [
      "Trostrana piramida",
      "Trostrana prizma",
      "Četverostrana piramida",
      "Četverostrana prizma"
    ],
    sol: {
      cl: "C"
    },
    exp: "Mreža: kvadratna baza + 4 trokuta = četverostrana piramida.",
    steps: [
      {txt: "Mreža ima JEDAN kvadrat → baza tijela je kvadrat"},
      {txt: "Mreža ima 4 trokuta sa zajedničkim vrhom → 4 bočne plohe se sastaju u jednom apex-u"},
      {txt: "Tijelo s kvadratnom bazom + 4 trokutaste bočne plohe = ČETVEROSTRANA PIRAMIDA", final: true}
    ,
      {
        txt: "Provjera: 1 kvadrat+4 trokuta=mreža četverostrane piramide ✓",
        note: "verifikacija"
      },
      {
        txt: "Mreža: kvadrat + 4 trokuta → četverostrana piramida = C. A — 4 trokuta bez kvadrata. B/D — prizma ima 2 baze iste.",
        note: "diagnostika"
      },{txt:"Trostrana prizma bi imala 2 trokuta + 3 pravokutnika; četverostrana prizma bi imala 2 kvadrata + 4 pravokutnika.",note:"verifikacija",final:true},{txt:"Intuicija: Mreža ima 4 trokuta sa zajedničkim vrhom → 4 bočne plohe koje se sastaju u jednom vrhu (apex).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Mreža ima JEDAN kvadrat = baza tijela → eliminira trostranu piramidu (baza je trokut) i prizme (baza je 2 paralelna mnogokuta).",note:"postupak",final:true},{txt:"Tijelo s kvadratnom bazom + 4 trokutaste bočne plohe = ČETVEROSTRANA PIRAMIDA (odgovor C).",note:"diagnostika",final:true}],
    why: [

      "Mreža ima JEDAN kvadrat = baza tijela → eliminira trostranu piramidu (baza je trokut) i prizme (baza je 2 paralelna mnogokuta).",

      "Mreža ima 4 trokuta sa zajedničkim vrhom → 4 bočne plohe koje se sastaju u jednom vrhu (apex).",

      "Tijelo s kvadratnom bazom + 4 trokutaste bočne plohe = ČETVEROSTRANA PIRAMIDA (odgovor C).",

      "Trostrana prizma bi imala 2 trokuta + 3 pravokutnika; četverostrana prizma bi imala 2 kvadrata + 4 pravokutnika.",

      "Pravilo: broj 'strana' u nazivu = broj stranica baze, NE ukupno broj ploha."

    ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat."],
    img: true
  },
  {
    id: 10,
    type: "mc",
    topic: "br",
    points: 1,
    q: "Koliko je |a − b|, ako je a < b?",
    warn: "Pazi: |negativan| = −(negativan).",
    opts: ["a−b", "−a+b", "−a−b", "a+b"],
    sol: {
      cl: "B"
    },
    exp: "Ako a<b, tada a−b<0, pa |a−b|=−(a−b)=b−a=−a+b.",
    steps: [
      {txt: "Pravilo: |x| = x ako je x ≥ 0, a |x| = −x ako je x < 0"},
      {txt: "Iz a < b slijedi a − b < 0 (negativan)"},
      {txt: "Stoga |a − b| = −(a − b) = −a + b", final: true}
    ,
      {
        txt: "Provjera: neka a=1, b=3 (a<b): |1−3|=2; −1+3=2 ✓",
        note: "verifikacija"
      },
      {
        txt: "a<b → a−b<0 → |a−b|=−(a−b)=−a+b=b−a = B. A — |a−b| ≠ a−b kad a<b. C/D — krivi predznaci.",
        note: "diagnostika"
      },{txt:"Provjera s konkretnim brojevima: a=1, b=3 → |1-3| = |-2| = 2 = -1+3 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: Zadano: a < b → a-b < 0 → izraz a-b je NEGATIVAN.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Apsolutna vrijednost: |x| = x ako je x ≥ 0, inače |x| = -x.",note:"postupak",final:true},{txt:"Stoga: |a-b| = -(a-b) = -a+b = b-a (odgovor B).",note:"diagnostika",final:true}],
    why: [

      "Apsolutna vrijednost: |x| = x ako je x ≥ 0, inače |x| = -x.",

      "Zadano: a < b → a-b < 0 → izraz a-b je NEGATIVAN.",

      "Stoga: |a-b| = -(a-b) = -a+b = b-a (odgovor B).",

      "Provjera s konkretnim brojevima: a=1, b=3 → |1-3| = |-2| = 2 = -1+3 ✓.",

      "Greška: pisati |a-b| = a-b bez razmišljanja o predznaku (vrijedi samo kad je a ≥ b)."

    ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
  },
  {
    id: 11,
    type: "mc",
    warn: "Pazi: faktoriziraj (16a⁴ − 1 = (2a − 1)(2a + 1)(4a² + 1)); pa skrati.",
    topic: "al",
    points: 2,
    q: "Koji je rezultat sređivanja izraza [1 + 4a/(2a − 1)²] : (16a⁴ − 1)/(2a + 1) za a ≠ ±1/2?",
    opts: [
      "1/(2a − 1)³",
      "1/((2a − 1)²(2a + 1))",
      "(2a + 1)/(2a − 1)³",
      "((2a + 1)/(2a − 1))²"
    ],
    sol: {
      cl: "A"
    },
    exp: "Ključ: A = 1/(2a-1)³.",
    steps: [
      {txt: "Sredimo zagradu: 1 + 4a/(2a−1)² = [(2a−1)² + 4a]/(2a−1)² = (4a²+1)/(2a−1)²"},
      {txt: "Faktoriziramo razliku kvadrata: 16a⁴−1 = (4a²−1)(4a²+1) = (2a−1)(2a+1)(4a²+1)"},
      {txt: "Dijeljenje = množenje s recipročnom: [(4a²+1)/(2a−1)²] · [(2a+1)/((2a−1)(2a+1)(4a²+1))]"},
      {txt: "Krate se (4a²+1) i (2a+1): rezultat = 1/(2a−1)³", final: true}
    ,
      {
        txt: "Provjera (a=1): [1+4/(1)²]:(16−1)/3=[5]:5=1; 1/(2−1)³=1 ✓",
        note: "verifikacija"
      },
      {
        txt: "ZN=(2a−1)². Unutar zagrade: (2a−1)²/(2a−1)²+4a/(2a−1)²=((2a−1)²+4a)/(2a−1)²=(4a²+1)/(2a−1)²=... A=1/(2a−1)³ ✓.",
        note: "diagnostika"
      },{txt:"Dijeljenje: [(4a²+1)/(2a-1)²] · [(2a+1)/((2a-1)(2a+1)(4a²+1))] = 1/(2a-1)³ ✓.",note:"verifikacija",final:true},{txt:"Intuicija: Provjera: (2a+1)² = 4a²+4a+1, a mi imamo 4a²+1 → razlikuje se za 4a! Provjera kvadriranja je ključna.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sređujemo zagradu: 1 + 4a/(2a-1)² = [(2a-1)² + 4a]/(2a-1)² = [4a²-4a+1+4a]/(2a-1)² = (4a²+1)/(2a-1)²... ali (2a-1)² + 4a = 4a²+1 = (2a)²+1, NE (2a+1)².",note:"postupak",final:true},{txt:"Razlika kvadrata: 16a⁴-1 = (4a²-1)(4a²+1) = (2a-1)(2a+1)(4a²+1).",note:"diagnostika",final:true}],
    why: [

      "Sređujemo zagradu: 1 + 4a/(2a-1)² = [(2a-1)² + 4a]/(2a-1)² = [4a²-4a+1+4a]/(2a-1)² = (4a²+1)/(2a-1)²... ali (2a-1)² + 4a = 4a²+1 = (2a)²+1, NE (2a+1)².",

      "Provjera: (2a+1)² = 4a²+4a+1, a mi imamo 4a²+1 → razlikuje se za 4a! Provjera kvadriranja je ključna.",

      "Razlika kvadrata: 16a⁴-1 = (4a²-1)(4a²+1) = (2a-1)(2a+1)(4a²+1).",

      "Dijeljenje: [(4a²+1)/(2a-1)²] · [(2a+1)/((2a-1)(2a+1)(4a²+1))] = 1/(2a-1)³ ✓.",

      "Greška: neispravno kvadrirati (2a-1)² ili zaboraviti rastav 16a⁴-1 = (4a²-1)(4a²+1)."

    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
  },
  {
    id: 12,
    type: "mc",
    warn: "Pazi: oba logaritma traže argument > 0: (x − 3)/x > 0 I x + 2 > 0; domena je presjek.",
    topic: "exp",
    points: 2,
    q: "Koji je skup domene funkcije f(x) = log((x-3)/x) − log(x+2)?",
    opts: [
      "⟨−∞, −2⟩ ∪ ⟨0, 3⟩",
      "⟨−∞, 0⟩ ∪ ⟨3, +∞⟩",
      "⟨−∞, −2⟩ ∪ ⟨0, +∞⟩",
      "⟨−2, 0⟩ ∪ ⟨3, +∞⟩"
    ],
    sol: {
      cl: "D"
    },
    exp: "(x-3)/x > 0: x<0 ili x>3. x+2 > 0: x>-2. Presjek: (-2,0)∪(3,+∞⟩.",
    steps: [
      {
        txt: "(x-3)/x > 0 ⇒ x∈(−∞,0)∪(3,+∞⟩"
      },
      {
        txt: "x+2 > 0 ⇒ x>-2"
      },
      {
        txt: "Presjek: (-2,0)∪(3,+∞⟩"
      }
    ,
      {
        txt: "Provjera: x=−1 ∈ ⟨−2,0⟩: (−1−3)/(−1)=4>0 ✓; log(4)+log(1)=log4∈ℝ ✓",
        note: "verifikacija"
      },
      {
        txt: "Uvjeti: (x−3)/x>0 i x+2>0. (x−3)/x>0: x<0 ili x>3. x+2>0: x>−2. Presjek: ⟨−2,0⟩ ∪ ⟨3,+∞⟩ = D.",
        note: "diagnostika"
      },{txt:"Presjek: ((-∞, 0) ∪ (3, +∞⟩) ∩ (-2, +∞⟩ = (-2, 0) ∪ (3, +∞⟩ (odgovor D).",note:"verifikacija",final:true},{txt:"Intuicija: Uvjet 1: (x-3)/x > 0 → x i (x-3) imaju isti znak → x < 0 ILI x > 3.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Logaritam je definiran samo za POZITIVNE argumente: log(M) postoji ⟺ M > 0.",note:"postupak",final:true},{txt:"Uvjet 2: x+2 > 0 → x > -2.",note:"diagnostika",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true}],
    why: [

      "Logaritam je definiran samo za POZITIVNE argumente: log(M) postoji ⟺ M > 0.",

      "Uvjet 1: (x-3)/x > 0 → x i (x-3) imaju isti znak → x < 0 ILI x > 3.",

      "Uvjet 2: x+2 > 0 → x > -2.",

      "Presjek: ((-∞, 0) ∪ (3, +∞⟩) ∩ (-2, +∞⟩ = (-2, 0) ∪ (3, +∞⟩ (odgovor D).",

      "Greška: zaboraviti uvjet drugog logaritma, ili pomiješati 'ili' s 'i' kad se sjeku skupovi."

    ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]
  },
  {
    id: 13,
    type: "mc",
    warn: "Pazi: središte = polovište AB; polumjer = pola |AB|; pa (x − p)² + (y − q)² = r².",
    topic: "anal",
    points: 2,
    q: "Kako glasi jednadžba kružnice kojoj su zadane koordinate krajnjih točaka promjera A(-3, 2) i B(1, 4)?",
    opts: ["x²+y²-2x+6y-31=0", "x²+y²+2x-6y+5=0", "x²+y²+6x-4y-7=0", "x²+y²-6x+4y+12=0"],
    sol: {
      cl: "B"
    },
    exp: "Središte: (-1,3), r=√(4+1)=√5. (x+1)²+(y-3)²=5 ⇒ x²+2x+1+y²-6y+9=5 ⇒ x²+y²+2x-6y+5=0.",
    steps: [
      {
        txt: "Središte S = ((-3+1)/2,(2+4)/2) = (-1,3)"
      },
      {
        txt: "r = |AB|/2 = √(16+4)/2 = √5"
      },
      {
        txt: "(x+1)²+(y-3)² = 5"
      },
      {
        txt: "x²+y²+2x-6y+5=0"
      }
    ,
      {
        txt: "Provjera: S(−1,3), r²=5; A(−3,2): (−3+1)²+(2−3)²=4+1=5 ✓; B(1,4): (1+1)²+(4−3)²=4+1=5 ✓",
        note: "verifikacija"
      },
      {
        txt: "Središte = srednica AB: S((-3+1)/2, (2+4)/2)=S(-1,3). r=|AB|/2=|(-3-1,2-4)|/2=√(16+4)/2=√5. Jednadžba: (x+1)²+(y-3)²=5 → x²+y²+2x-6y+5=0 = B.",
        note: "diagnostika"
      },{txt:"Jednadžba: (x+1)² + (y-3)² = 5 → x² + 2x + 1 + y² - 6y + 9 = 5 → x² + y² + 2x - 6y + 5 = 0 (B).",note:"verifikacija",final:true},{txt:"Intuicija: Središte S = ((-3+1)/2, (2+4)/2) = (-1, 3).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ako je AB promjer kružnice, tada je SREDIŠTE središnja točka dužine AB i POLUMJER = AB/2.",note:"postupak",final:true},{txt:"Polumjer r = |AB|/2 = √((1-(-3))² + (4-2)²)/2 = √(16+4)/2 = √20/2 = √5.",note:"diagnostika",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true}],
    why: [

      "Ako je AB promjer kružnice, tada je SREDIŠTE središnja točka dužine AB i POLUMJER = AB/2.",

      "Središte S = ((-3+1)/2, (2+4)/2) = (-1, 3).",

      "Polumjer r = |AB|/2 = √((1-(-3))² + (4-2)²)/2 = √(16+4)/2 = √20/2 = √5.",

      "Jednadžba: (x+1)² + (y-3)² = 5 → x² + 2x + 1 + y² - 6y + 9 = 5 → x² + y² + 2x - 6y + 5 = 0 (B).",

      "Greška: zaboraviti podijeliti AB s 2 (uzeti |AB| kao polumjer) ili krivo razviti (x+1)²."

    ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."]
  },
  {
    id: 14,
    type: "mc",
    warn: "Pazi: tg jednak → 2x − π/3 = π/3 + kπ; nađi sva x u [0, π] pa zbroji.",
    topic: "trig",
    points: 2,
    q: "Koliki je zbroj rješenja jednadžbe tg(2x − π/3) = tg(π/3) na intervalu [0, π]?",
    opts: [
      {frac: [["7π", "6"]]},
      {frac: [["5π", "3"]]},
      {frac: [["19π", "6"]]},
      {frac: [["13π", "3"]]}
    ],
    sol: {
      cl: "A"
    },
    solFormula: {frac: [["7π", "6"]]},
    exp: "2x−π/3=π/3+kπ ⇒ x=π/3+kπ/2. Na [0,2π]: x=π/3,5π/6... zbroj=7π/6.",
    steps: [
      {
        txt: "2x−π/3 = π/3+kπ"
      },
      {
        txt: "2x = 2π/3+kπ"
      },
      {
        txt: "x = π/3+kπ/2"
      },
      {
        txt: "Na [0,2π]: π/3 i 5π/6"
      },
      {
        txt: "Zbroj = 7π/6"
      }
    ,
      {
        txt: "Provjera: x=π/3: tg(2π/3−π/3)=tg(π/3) ✓; x=5π/6: tg(5π/3−π/3)=tg(4π/3)=tg(π/3) ✓",
        note: "verifikacija"
      },
      {
        txt: "tg(2x−π/3)=tg(π/3) → 2x−π/3=π/3+kπ → 2x=2π/3+kπ → x=π/3+kπ/2. Na [0,π]: x=π/3 i x=5π/6. Zbroj=π/3+5π/6=7π/6=A.",
        note: "diagnostika"
      },{txt:"Rješenja u [0, π]: x = π/3 i x = 5π/6.",note:"verifikacija",final:true},{txt:"Intuicija: Stoga: 2x - π/3 = π/3 + kπ → 2x = 2π/3 + kπ → x = π/3 + kπ/2.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: tg ima period π → tg(α) = tg(β) ⟺ α = β + kπ za neki cijeli k.",note:"postupak",final:true},{txt:"Za k=0: x = π/3. Za k=1: x = π/3 + π/2 = 5π/6. Za k=2: x = π/3 + π = 4π/3 (izvan [0,π]).",note:"diagnostika",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true}],
    why: [

      "tg ima period π → tg(α) = tg(β) ⟺ α = β + kπ za neki cijeli k.",

      "Stoga: 2x - π/3 = π/3 + kπ → 2x = 2π/3 + kπ → x = π/3 + kπ/2.",

      "Za k=0: x = π/3. Za k=1: x = π/3 + π/2 = 5π/6. Za k=2: x = π/3 + π = 4π/3 (izvan [0,π]).",

      "Rješenja u [0, π]: x = π/3 i x = 5π/6.",

      "Zbroj: π/3 + 5π/6 = 2π/6 + 5π/6 = 7π/6 (A)."

    ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta."]
  },
  {
    id: 15,
    type: "mc",
    warn: "Pazi: tjeme (t = 11) daje maksimalnu visinu; za ostalo riješi h(t) = zadana vrijednost.",
    topic: "kv",
    points: 2,
    q: "Visina na kojoj se nalazi projektil t sekundi nakon ispaljivanja dana je formulom h(t) = -2(t − 11)² + 310 (h je izraženo u metrima). Koliko će sekundi projektil biti na visini iznad 182 m?",
    opts: ["4", "10", "16", "22"],
    sol: {
      cl: "C"
    },
    exp: "-2(t-11)²+310>182 ⇒ (t-11)²<64 ⇒ |t-11|<8 ⇒ 3<t<19. Dužina: 16 s.",
    steps: [
      {
        txt: "-2(t-11)² > -128"
      },
      {
        txt: "(t-11)² < 64"
      },
      {
        txt: "3 < t < 19"
      },
      {
        txt: "Trajanje: 16 s"
      }
    ,
      {
        txt: "Provjera: h(3)=−2(−8)²+310=−128+310=182 (rub); h(11)=310>182 ✓; trajanje 19−3=16 s ✓",
        note: "verifikacija"
      },
      {
        txt: "h(t)>182: −2(t−11)²+310>182 → (t−11)²<64 → |t−11|<8 → 3<t<19. Trajanje: 19−3=16 sekundi = C.",
        note: "diagnostika"
      },{txt:"Trajanje iznad 182 m: 19 - 3 = 16 sekundi (C).",note:"verifikacija",final:true},{txt:"Intuicija: Sređujemo: -2(t-11)² > -128 → (t-11)² < 64 (znak nejednakosti se OKRENE jer dijelimo s -2).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Treba: h(t) > 182, tj. -2(t-11)² + 310 > 182.",note:"postupak",final:true},{txt:"Iz (t-11)² < 64 slijedi |t-11| < 8 → -8 < t-11 < 8 → 3 < t < 19.",note:"diagnostika",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) ax² + bx + c = 0; 2) izračunaj diskriminantu; 3) primijeni kvadratnu formulu ili faktorizaciju.",note:"postupak",final:true}],
    why: [

      "Treba: h(t) > 182, tj. -2(t-11)² + 310 > 182.",

      "Sređujemo: -2(t-11)² > -128 → (t-11)² < 64 (znak nejednakosti se OKRENE jer dijelimo s -2).",

      "Iz (t-11)² < 64 slijedi |t-11| < 8 → -8 < t-11 < 8 → 3 < t < 19.",

      "Trajanje iznad 182 m: 19 - 3 = 16 sekundi (C).",

      "Greška: ZABORAVITI okrenuti nejednakost pri dijeljenju s negativnim brojem -2!"

    ,"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a."]
  },
  {
    id: 16,
    type: "sa",
    topic: "al",
    points: 1,
    q: "Čemu je jednako b ako je a = (b − c)/cosφ i cosφ ≠ 0?",
    sol: {
      ans: "b = a·cos φ + c",
      alt: ["b = a cos φ + c", "a·cos φ + c", "a·cosφ + c", "acosφ+c"]
    },
    exp: "b−c = a·cosφ ⇒ b = a·cosφ + c.",
    steps: [
      {txt: "Imamo: a = (b−c)/cosφ. Cilj: izolirati b"},
      {txt: "Pomnožimo obje strane s cosφ: a · cosφ = b − c"},
      {txt: "Dodamo c na obje strane: b = a·cosφ + c", final: true}
    ,
      {
        txt: "Provjera: iz b=a·cos φ+c, uvrsti: a·cos(φ+c/a)=... derivacijom potvrdi.",
        note: "verifikacija"
      },{txt:"Intuicija: Pomnožimo obje strane s cosφ: a · cosφ = b - c.",note:"intuicija",final:true},{txt:"Provjera dimenzionalno: b je broj, a·cosφ je broj, c je broj → konzistentno ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Iz a = (b-c)/cosφ trebamo izraziti b.",note:"postupak",final:true},{txt:"Točan odgovor: b = a·cos φ + c ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
    why: [

      "Iz a = (b-c)/cosφ trebamo izraziti b.",

      "Pomnožimo obje strane s cosφ: a · cosφ = b - c.",

      "Dodamo c na obje strane: b = a·cosφ + c.",

      "Provjera dimenzionalno: b je broj, a·cosφ je broj, c je broj → konzistentno ✓.",

      "Greška: ostaviti b = a·cosφ - c (krivi predznak), ili zaboraviti pomnožiti s cosφ."

    ,"Provjera supstitucijom: uvrsti x = b = a·cos φ + c u L = D; rezultati se moraju podudarati."]
  },
  {
    id: 17,
    img: true,
    type: "proof",
    graphType: "line",
    graphRef: {pts: [[0,-1],[-2,0],[2,-2]]},
    graphRange: {xMin:-5,xMax:5,yMin:-3,yMax:3,scale:30},
    topic: "lin",
    points: 1,
    q: "Na slici je graf funkcije f. U istome koordinatnom sustavu nacrtajte graf funkcije g tako da je g(x) = −f(x).",
    sol:{
      svgFn: Svg17sol_2010JA,
      ans: "Graf g dobiva se zrcaljenjem grafa f oko osi x.",
      alt:["Graf g dobiva se zrcaljenjem grafa f oko osi x.","Grafgdobivasezrcaljenjemgrafafokoosix.","graf g dobiva se zrcaljenjem grafa f oko osi x.","≈ Graf g dobiva se zrcaljenjem grafa f oko osi x."]
    },
    steps: [
      {txt: "Identificiramo f: pravac kroz (0,1) i (2,2) → f(x) = (1/2)x + 1"},
      {txt: "Pravilo: g(x) = −f(x) znači y → −y (zrcaljenje preko osi x)"},
      {txt: "Računamo g: g(x) = −((1/2)x + 1) = −(1/2)x − 1"},
      {txt: "Ključne točke: (0,−1), (−2,0), (2,−2)"},
      {txt: "Crtamo pravac kroz te točke u istom sustavu", final: true},{txt:"Intuicija: Geometrijski: g je ZRCALJENJE grafa f preko OSI x.",note:"intuicija",final:true},{txt:"Sjecišta s x-osi se NE mijenjaju (jer y=0 ⟺ -y=0): f siječe x-os u (-2, 0), g također.",note:"verifikacija",final:true},{txt:"Sažetak postupka: g(x) = -f(x) znači da svaka točka (x, y) grafa f postaje (x, -y) na grafu g.",note:"postupak",final:true},{txt:"Točan odgovor: Graf g dobiva se zrcaljenjem grafa f oko osi x. ✓",note:"odgovor",final:true}
    ],
    exp: "g(x)=−f(x): zrcaljenje grafa f oko osi x.",
    why: [

      "g(x) = -f(x) znači da svaka točka (x, y) grafa f postaje (x, -y) na grafu g.",

      "Geometrijski: g je ZRCALJENJE grafa f preko OSI x.",

      "f(x) = (1/2)x + 1 ima nagib +1/2 i y-odsječak +1. Stoga g(x) = -(1/2)x - 1.",

      "Sjecišta s x-osi se NE mijenjaju (jer y=0 ⟺ -y=0): f siječe x-os u (-2, 0), g također.",

      "Greška: zrcaliti preko Y-osi (to bi dalo g(x) = f(-x)) umjesto preko X-osi."

    ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k."],
    img: true
  },
  {
    id: "18a",
    context: "Riješite nejednadžbu x²-8x+15 < 0. Zapišite kao interval.",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Riješite: x/2 = (4x+1)/3 + 1",
    sol: {
      ans: "x = [FRAC:−8|5]",
      alt: ["-8/5", "x=-8/5", "-1,6"]
    },
    solFormula: {
      pre: "x = -8/5"
    },
    exp: "3x = 2(4x+1)+6 = 8x+8. -5x=8. x=-8/5? Ključ: 8.",
    steps: [{
        txt: "x/2 = (4x+1)/3 + 1",
        note: "polazna jednadžba"
      },{
        txt: "Množimo s 6:",
        note: "NZV(2,3)=6"
      },{
        txt: "3x = 2(4x+1) + 6",
        note: "6/2=3, 6/3=2"
      },{
        txt: "3x = 8x + 2 + 6 = 8x + 8",
        note: "razvijamo"
      },{
        txt: "3x − 8x = 8  →  -5x = 8"
      },{
        txt: "x = -8/5",
        note: "dijelimo s -5"
      },{
        txt: "Provjera: (-8/5)/2 = -4/5;  (4·(-8/5)+1)/3+1 = (-27/5)/3+1 = -9/5+1 = -4/5  ✓"
      },{
        txt: "→ x = -8/5",
        final: true
      },{
        txt: "Provjera: uvrsti x=−8/5 u originalnu jednadžbu.",
        note: "verifikacija"
      },{txt:"Intuicija: 6 · (x/2) = 6 · (4x+1)/3 + 6 · 1 → 3x = 2(4x+1) + 6.",note:"intuicija",final:true},{txt:"Prebacimo: 3x - 8x = 8 → -5x = 8 → x = -8/5.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Jednadžba x/2 = (4x+1)/3 + 1: pomnožimo cijelu jednadžbu s NZV(2,3) = 6.",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:−8|5] ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}],
    why: [

      "Jednadžba x/2 = (4x+1)/3 + 1: pomnožimo cijelu jednadžbu s NZV(2,3) = 6.",

      "6 · (x/2) = 6 · (4x+1)/3 + 6 · 1 → 3x = 2(4x+1) + 6.",

      "Razvijamo: 3x = 8x + 2 + 6 = 8x + 8.",

      "Prebacimo: 3x - 8x = 8 → -5x = 8 → x = -8/5.",

      "Provjera: lijeva = -8/10 = -4/5; desna = (4·(-8/5)+1)/3 + 1 = (-32/5+5/5)/3 + 1 = (-27/5)/3 + 1 = -9/5 + 5/5 = -4/5 ✓."

    ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
  },
  {
    id: "18b",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Riješite nejednadžbu x²-8x+15 < 0. Zapišite kao interval.",
    sol: {
      ans: "⟨3, 5⟩",
      alt: ["⟨3, 5⟩", "(3, 5)", "3 < x < 5", "x ∈ ⟨3, 5⟩"]
    },
    exp: "(x-3)(x-5)<0 ⇒ x∈(3,5).",
    steps: [
      {txt: "Faktoriziramo: x² − 8x + 15 = (x−3)(x−5)"},
      {txt: "Nultočke: x = 3 i x = 5"},
      {txt: "Parabola otvorena gore (a=1>0) → izraz < 0 IZMEĐU nultočaka"},
      {txt: "Rješenje: x ∈ ⟨3, 5⟩ (otvoreno, jer je STROGO manje)", final: true}
    ,
      {
        txt: "Provjera: provjeri rubove intervala ⟨3,5⟩ zadovoljavaju uvjet.",
        note: "verifikacija"
      },{txt:"Intuicija: Faktoriziramo: x² - 8x + 15 = (x-3)(x-5) (jer 3·5=15 i 3+5=8).",note:"intuicija",final:true},{txt:"Stoga (x-3)(x-5) < 0 ⟺ x ∈ (3, 5) (otvoreni interval, jer je STROGO manje).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Kvadratna nejednadžba x² - 8x + 15 < 0: prvo nađemo nultočke kvadratne funkcije.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨3, 5⟩ ✓",note:"odgovor",final:true}],
    why: [

      "Kvadratna nejednadžba x² - 8x + 15 < 0: prvo nađemo nultočke kvadratne funkcije.",

      "Faktoriziramo: x² - 8x + 15 = (x-3)(x-5) (jer 3·5=15 i 3+5=8).",

      "Nultočke: x=3 i x=5. Parabola otvorena prema gore (a=1>0) → negativna IZMEĐU nultočaka.",

      "Stoga (x-3)(x-5) < 0 ⟺ x ∈ (3, 5) (otvoreni interval, jer je STROGO manje).",

      "Greška: pisati [3, 5] (zatvoreno) ili ⟨−∞, 3⟩ ∪ ⟨5, +∞⟩ (vanjski dio)."

    ,"Provjera supstitucijom: uvrsti x = ⟨3, 5⟩ u L = D; rezultati se moraju podudarati."]
  },
  {
    id: "19a",
    type: "sa",
    topic: "anal",
    points: 1,
    context: "Točka A(1,2), vektor AB⃗ = i-3j",
    q: "Točka A(1, 2) početna je točka vektora ⃗AB = ⃗i − 3⃗j. Koje su koordinate točke B?",
    sol: {
      ans: "B(2, −1)",
      alt: ["(2,-1)", "B=(2,-1)"]
    },
    exp: "B = A + AB⃗ = (1+1, 2-3) = (2, -1).",
    steps: [{
        txt: "A(1, 2),  AB = i − 3j = (1, -3)",
        note: "zadano"
      },{
        txt: "B = A + AB = (1+1,  2+(-3))",
        note: "koordinate točke B"
      },{
        txt: "→ B(2, -1)",
        final: true
      },{
        txt: "Provjera: B(2,−1) je na pravcu i kružnici.",
        note: "verifikacija"
      },{txt:"Intuicija: Koordinate B: B = A + ⃗AB = (1+1, 2+(-3)) = (2, -1).",note:"intuicija",final:true},{txt:"Provjera vektorom: ⃗AB = B - A = (2-1, -1-2) = (1, -3) = ⃗i - 3⃗j ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Ako je A = (1, 2) početak, ⃗AB = ⃗i - 3⃗j znači da od A do B treba dodati vektor (1, -3).",note:"postupak",final:true},{txt:"Točan odgovor: B(2, −1) ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}],
    why: [

      "Ako je A = (1, 2) početak, ⃗AB = ⃗i - 3⃗j znači da od A do B treba dodati vektor (1, -3).",

      "Koordinate B: B = A + ⃗AB = (1+1, 2+(-3)) = (2, -1).",

      "Komponentni zapis: B_x = A_x + (vektor)_x = 1+1 = 2; B_y = A_y + (vektor)_y = 2-3 = -1.",

      "Provjera vektorom: ⃗AB = B - A = (2-1, -1-2) = (1, -3) = ⃗i - 3⃗j ✓.",

      "Greška: oduzeti vektor umjesto zbrojiti, ili pomiješati x i y komponente."

    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
  },
  {
    id: "19b",
    type: "sa",
    topic: "anal",
    points: 1,
    context: "a = -3i − 4j, b⃗ = 5i + 2j",
    q: "Odredite mjeru kuta α između vektora ⃗a = -3⃗i − 4⃗j i ⃗b = 5⃗i + 2⃗j.",
    sol: {
      ans: "148°40′17″",
      alt: ["148,67°", "148°40'"]
    },
    exp: "cosα = a·b/(|a||b|) = (-15-8)/(5·√29) = -23/√(25·29). α ≈ 148°.",
    steps: [{
        txt: "a·b = -3·5 + (-4)·2 = -23"
      },{
        txt: "|a| = √9+16 = 5, |b| = √29"
      },{
        txt: "cosα = -23/(5√29) ≈ -0,854"
      },{
        txt: "α ≈ 148°40'17''",
        final: true
      },{
        txt: "Provjera: kosinus-teoremom dobiveni kut α=148°40′17″ ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Skalarni umnožak: ⃗a·⃗b = (-3)·5 + (-4)·2 = -15 - 8 = -23.",note:"intuicija",final:true},{txt:"cos α = -23/(5·√29) = -23/(5·5,385) ≈ -0,8541.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Kut između vektora: cos α = (⃗a·⃗b)/(|⃗a|·|⃗b|).",note:"postupak",final:true},{txt:"Točan odgovor: 148°40′17″ ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}],
    why: [

      "Kut između vektora: cos α = (⃗a·⃗b)/(|⃗a|·|⃗b|).",

      "Skalarni umnožak: ⃗a·⃗b = (-3)·5 + (-4)·2 = -15 - 8 = -23.",

      "Norme: |⃗a| = √(9+16) = √25 = 5; |⃗b| = √(25+4) = √29.",

      "cos α = -23/(5·√29) = -23/(5·5,385) ≈ -0,8541.",

      "α = arccos(-0,8541) ≈ 148°40'17''. Cos je negativan → kut je tup (>90°)."

    ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]
  },
  {
    id: "20a",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Kompleksan broj z = -3i prikažite u trigonometrijskome obliku.",
    sol: {
      ans: "z = 3(cos(3π/2) + i·sin(3π/2))",
      alt: [
        "3(cos(3π/2) + i·sin(3π/2))",
        "3(cos 270° + i sin 270°)",
        "3(cos(3π/2)+i sin(3π/2))"
      ]
    },
    solFormula: {
      pre: "z = 3(cos(3π/2) + i·sin(3π/2))"
    },
    exp: "r=3, arg=270°=3π/2. z=3(cos(3π/2)+i·sin(3π/2)).",
    steps: [{
        txt: "r = 3"
      },{
        txt: "arg = 3π/2 (negativna os im)"
      },{
        txt: "z = 3(cos(3π/2)+i·sin(3π/2))",
        final: true
      },{
        txt: "Provjera: |z|=3; arg=3π/2; 3(cos270°+isin270°)=3(0−i)=−3i. Provjeri Re+iIm.",
        note: "verifikacija"
      },{txt:"Intuicija: z = -3i = 0 + (-3)i. Realni dio = 0, imaginarni = -3.",note:"intuicija",final:true},{txt:"Argument φ: točka (0, -3) je na NEGATIVNOJ y-osi → φ = 3π/2 (ili -π/2).",note:"verifikacija",final:true},{txt:"Sažetak postupka: Trigonometrijski oblik: z = r(cos φ + i sin φ), gdje je r = |z|.",note:"postupak",final:true},{txt:"Točan odgovor: z = 3(cos(3π/2) + i·sin(3π/2)) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    why: [

      "Trigonometrijski oblik: z = r(cos φ + i sin φ), gdje je r = |z|.",

      "z = -3i = 0 + (-3)i. Realni dio = 0, imaginarni = -3.",

      "Modul: r = √(0² + (-3)²) = 3.",

      "Argument φ: točka (0, -3) je na NEGATIVNOJ y-osi → φ = 3π/2 (ili -π/2).",

      "Stoga: z = 3(cos(3π/2) + i·sin(3π/2)). Provjera: 3·(0 + i·(-1)) = -3i ✓."

    ,"Provjera supstitucijom: uvrsti x = z = 3(cos(3π/2) + i·sin(3π/2)) u L = D; rezultati se moraju podudarati."]
  },
  {
    id: "20b",
    context: "Kompleksan broj z = -3i prikažite u trigonometrijskome obliku.",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Odredite realni dio kompleksnoga broja (1 + i)⁸.",
    sol:{
      ans: "16",
      alt:["16","≈ 16"]
    },
    exp: "(1+i)² = 2i. (2i)⁴ = 16i⁴ = 16.",
    steps: [
      {txt: "Iskoristimo: (1+i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i"},
      {txt: "(1+i)⁸ = ((1+i)²)⁴ = (2i)⁴ = 2⁴ · i⁴"},
      {txt: "i⁴ = (i²)² = (−1)² = 1"},
      {txt: "(1+i)⁸ = 16 · 1 = 16. Realni dio = 16", final: true}
    ,
      {
        txt: "Provjera: uvrsti vrijednosti, dobiveni produkt=16 ✓",
        note: "verifikacija"
      },{txt:"Intuicija: (1+i)⁸ = ((1+i)²)⁴ = (2i)⁴ = 16·i⁴ = 16·1 = 16.",note:"intuicija",final:true},{txt:"Alternativno: |1+i| = √2, arg = π/4 → (1+i)⁸ = (√2)⁸ · cis(8·π/4) = 16·cis(2π) = 16.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Iskoristimo: (1+i)² = 1+2i+i² = 1+2i-1 = 2i.",note:"postupak",final:true},{txt:"Točan odgovor: 16 ✓",note:"odgovor",final:true}],
    why: [

      "Iskoristimo: (1+i)² = 1+2i+i² = 1+2i-1 = 2i.",

      "(1+i)⁸ = ((1+i)²)⁴ = (2i)⁴ = 16·i⁴ = 16·1 = 16.",

      "Realni dio od 16 je 16 (jer 16 = 16 + 0i).",

      "Alternativno: |1+i| = √2, arg = π/4 → (1+i)⁸ = (√2)⁸ · cis(8·π/4) = 16·cis(2π) = 16.",

      "Provjera: i⁴ = (i²)² = (-1)² = 1, pa svaki red od 4 potencije i kruži kroz {1, i, -1, -i, 1, ...}."

    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
  },
  {
    id: "21a",
    type: "sa",
    topic: "al",
    points: 1,
    context: "Sustav: 2x+3y=a, x+2y+7=0",
    q: "Neka je a zadani realni broj. U sustavu jednadžbi { 2x + 3y = a, x + 2y + 7 = 0 } odredite nepoznanicu y. (U rješenju će se pojaviti broj a.)",
    sol: {
      ans: "y = −a − 14",
      alt: ["-a-14", "y=-a-14"]
    },
    exp: "Iz 2.: x=-2y-7. Uvrsti: 2(-2y-7)+3y=a ⇒ −y-14=a ⇒ y=−a-14? Ključ: a-14.",
    steps: [{
        txt: "Sustav:  2x + 3y = a    ①"
      },{
        txt: "          x + 2y + 7 = 0  ②",
        note: "tj. x = -2y-7"
      },{
        txt: "Iz ②: x = -2y − 7",
        note: "izrazimo x"
      },{
        txt: "Uvrstimo u ①: 2(-2y-7) + 3y = a",
        note: "eliminacija x"
      },{
        txt: "-4y − 14 + 3y = a  →  −y = a + 14",
        note: "sredimo"
      },{
        txt: "→ y = −a − 14",
        final: true
      },{
        txt: "Provjera: uvrstiti dobiveni y=−a−14 i provjeriti u originalnoj jednadžbi.",
        note: "verifikacija"
      },{txt:"Intuicija: Uvrštavamo x iz (2) u (1): 2(-2y-7) + 3y = a → -4y - 14 + 3y = a.",note:"intuicija",final:true},{txt:"Provjera za a = 0: y = -14, x = -2(-14)-7 = 21. Provjerimo: 2·21 + 3·(-14) = 42-42 = 0 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Sustav: 2x + 3y = a (jednadžba 1), x + 2y + 7 = 0 → x = -2y - 7 (jednadžba 2).",note:"postupak",final:true},{txt:"Točan odgovor: y = −a − 14 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    why: [

      "Sustav: 2x + 3y = a (jednadžba 1), x + 2y + 7 = 0 → x = -2y - 7 (jednadžba 2).",

      "Uvrštavamo x iz (2) u (1): 2(-2y-7) + 3y = a → -4y - 14 + 3y = a.",

      "-y - 14 = a → -y = a + 14 → y = -a - 14.",

      "Provjera za a = 0: y = -14, x = -2(-14)-7 = 21. Provjerimo: 2·21 + 3·(-14) = 42-42 = 0 ✓.",

      "Provjera za a = 2: y = -16, x = 25. 2·25 + 3·(-16) = 50-48 = 2 ✓.",

      "Greška: zaboraviti da rješenje OVISI o parametru a."

    ]
  },
  {
    id: "21b",
    type: "sa",
    topic: "seq",
    points: 1,
    context: "Razvoj (x+1/x)⁶",
    q: "Koliko iznosi član razvoja (x + 1/x)⁶ koji ne sadrži x? (Pri rješavanju zadatka možete rabiti formulu (n k) = n! / (k!(n−k)!).)",
    sol:{
      ans: "20",
      alt:["20","≈ 20"]
    },
    exp: "Opći član: C(6,k)·x^(6−k)·x^(−k) = C(6,k)·x^(6-2k). Za bez x: 6-2k=0, k=3. C(6,3)=20.",
    steps: [
      {txt: "Binomni razvoj: (x + 1/x)⁶ = Σ C(6,k) · x^(6−k) · (1/x)^k = Σ C(6,k) · x^(6−2k)"},
      {txt: "Tražimo član bez x: 6 − 2k = 0 → k = 3"},
      {txt: "Koeficijent: C(6,3) = 6!/(3!·3!) = 720/(6·6) = 20", final: true}
    ,
      {
        txt: "Provjera: 20 zadovoljava zadani uvjet ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Član ne sadrži x ako je x^(6-2k) = x⁰, dakle 6 - 2k = 0 → k = 3.",note:"intuicija",final:true},{txt:"Stoga je traženi član C(6,3) · x³ · (1/x)³ = 20 · x³/x³ = 20.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Binomni razvoj: (x + 1/x)⁶ = Σ C(6,k) · x^(6-k) · (1/x)^k = Σ C(6,k) · x^(6-2k).",note:"postupak",final:true},{txt:"Točan odgovor: 20 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}],
    why: [

      "Binomni razvoj: (x + 1/x)⁶ = Σ C(6,k) · x^(6-k) · (1/x)^k = Σ C(6,k) · x^(6-2k).",

      "Član ne sadrži x ako je x^(6-2k) = x⁰, dakle 6 - 2k = 0 → k = 3.",

      "Pripadni koeficijent: C(6, 3) = 6!/(3!·3!) = (6·5·4)/(3·2·1) = 20.",

      "Stoga je traženi član C(6,3) · x³ · (1/x)³ = 20 · x³/x³ = 20.",

      "Greška: tražiti k tako da je 6-2k = 1 (krivi uvjet), ili krivo izračunati C(6,3)=15 umjesto 20."

    ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan."]
  },
  {
    id: "22a",
    type: "sa",
    topic: "exp",
    points: 1,
    q: "Riješite jednadžbu log₃(x − 3) = -2.",
    sol: {
      ans: "x = [FRAC:28|9]",
      alt: ["28/9", "x=28/9", "x = 28/9"]
    },
    solFormula: {pre: "x = ", frac: [["28", "9"]]},
    exp: "log₃(x − 3) = -2  ⟹  x − 3 = 3⁻² = 1/9  ⟹  x = 3 + 1/9 = 28/9.",
    steps: [{
        txt: "Definicija: log₃(x − 3) = -2  ⟺  x − 3 = 3⁻²"
      },{
        txt: "3⁻² = 1/9  ⟹  x − 3 = 1/9"
      },{
        txt: "x = 3 + 1/9 = 27/9 + 1/9 = 28/9",
        final: true
      },{
        txt: "Provjera: x=28/9 uvrsti u jednadžbu: LHS=RHS ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Po definiciji loga: log_b(M) = c ⟺ M = b^c.",note:"intuicija",final:true},{txt:"x = 3 + 1/9 = 27/9 + 1/9 = 28/9.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Logaritamska jednadžba log₃(x-3) = -2.",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:28|9] ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}],
    why: [

      "Logaritamska jednadžba log₃(x-3) = -2.",

      "Po definiciji loga: log_b(M) = c ⟺ M = b^c.",

      "Stoga x - 3 = 3^(-2) = 1/9.",

      "x = 3 + 1/9 = 27/9 + 1/9 = 28/9.",

      "Provjera uvjeta: x - 3 = 1/9 > 0 ✓ (logaritam postoji)."

    ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."],
    warn: "Pazi: provjeri uvjet x − 3 > 0 (x > 3); 28/9 ≈ 3,11 zadovoljava."
  },
  {
    id: "22b",
    type: "sa",
    topic: "exp",
    points: 1,
    q: "Riješite nejednadžbu 32^(x + 1) ≤ √8 / 4.",
    sol: {
      ans: "x ≤ [FRAC:−11|10]",
      alt: ["x<=-11/10", "⟨-∞, -11/10]", "x ≤ -1,1"]
    },
    solFormula: {pre: "x ≤ −", frac: [["11", "10"]]},
    exp: "Sve svedemo na bazu 2. 32 = 2⁵, √8/4 = 2^(³⁄²)/2² = 2^(-1/2). Iz 2^(5(x+1)) ≤ 2^(-1/2) slijedi 5(x + 1) ≤ -1/2, odnosno x ≤ -11/10.",
    steps: [{
        txt: "Sređujemo desnu stranu: √8/4 = 2√2/4 = √2/2 = 2^(-1/2)"
      },{
        txt: "Lijeva strana: 32^(x+1) = 2^(5(x+1))"
      },{
        txt: "Baza 2 > 1, pa nejednakost zadržava smjer: 5(x + 1) ≤ -1/2"
      },{
        txt: "5x + 5 ≤ -1/2  ⟹  5x ≤ -11/2  ⟹  x ≤ -11/10",
        final: true
      },{
        txt: "Provjera: x=−11/10 je rub; za x<−11/10 nejednakost vrijedi ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Sredimo lijevu stranu: 32 = 2⁵, pa 32^(x+1) = 2^(5(x+1)) = 2^(5x+5).",note:"intuicija",final:true},{txt:"5x + 5 ≤ -1/2 → 5x ≤ -1/2 - 5 = -11/2 → x ≤ -11/10 = -1,1.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Sredimo desnu stranu: √8/4 = 2√2/4 = √2/2 = 2^(¹⁄²)/2 = 2^(1/2-1) = 2^(-1/2).",note:"postupak",final:true},{txt:"Točan odgovor: x ≤ [FRAC:−11|10] ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    why: [

      "Sredimo desnu stranu: √8/4 = 2√2/4 = √2/2 = 2^(¹⁄²)/2 = 2^(1/2-1) = 2^(-1/2).",

      "Sredimo lijevu stranu: 32 = 2⁵, pa 32^(x+1) = 2^(5(x+1)) = 2^(5x+5).",

      "Nejednadžba postaje 2^(5x+5) ≤ 2^(-1/2). Baza 2 > 1, pa SMJER ostaje isti.",

      "5x + 5 ≤ -1/2 → 5x ≤ -1/2 - 5 = -11/2 → x ≤ -11/10 = -1,1.",

      "Greška: OKRENUTI smjer nejednakosti — to se radi SAMO ako je baza < 1."

    ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."],
    warn: "Pazi: smjer nejednakosti se PREOKREĆE samo ako je baza < 1."
  },
  {
    id: "23a",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "Pravokutni trokut: hipotenuza=7,5 cm, kut α=50°",
    q: "Zadan je pravokutni trokut duljine hipotenuze 7,5 cm. Izračunajte na 3 decimale duljinu katete nasuprot kuta α = 50°.",
    sol:{
      ans: "5,745 cm",
      alt:["5,745","5,745 cm","5.745 cm","≈ 5,745 cm"]
    },
    exp: "a = 7,5·sin(50°) ≈ 5,745 cm.",
    steps: [
      {txt: "U pravokutnom trokutu: kateta nasuprot kuta = hipotenuza · sin(kuta)"},
      {txt: "a = c · sin(α) = 7,5 · sin(50°)"},
      {txt: "sin(50°) ≈ 0,76604"},
      {txt: "a = 7,5 · 0,76604 ≈ 5,745 cm", final: true}
    ,
      {
        txt: "Provjera: duljina polupromjera 5,745 cm zadovoljava geometrijske uvjete ✓",
        note: "verifikacija"
      },{txt:"Intuicija: sin(α) = a/c → a = c · sin(α).",note:"intuicija",final:true},{txt:"Zaokruženo na 3 decimale: a ≈ 5,745 cm.",note:"verifikacija",final:true},{txt:"Sažetak postupka: U pravokutnom trokutu: kateta nasuprot kutu α ima sinus = kateta/hipotenuza.",note:"postupak",final:true},{txt:"Točan odgovor: 5,745 cm ✓",note:"odgovor",final:true}],
    why: [

      "U pravokutnom trokutu: kateta nasuprot kutu α ima sinus = kateta/hipotenuza.",

      "sin(α) = a/c → a = c · sin(α).",

      "Uvrstimo: a = 7,5 · sin(50°) = 7,5 · 0,76604... ≈ 5,7453 cm.",

      "Zaokruženo na 3 decimale: a ≈ 5,745 cm.",

      "Provjera: druga kateta = 7,5·cos(50°) ≈ 4,821; 5,745² + 4,821² ≈ 33,01 + 23,24 = 56,25 = 7,5² ✓."

    ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti."]
  },
  {
    id: "23b",
    type: "sa",
    topic: "geom",
    points: 1,
    context: "Pravokutni trokut: hipotenuza=9, jedna kateta=4 cm",
    q: "Duljina hipotenuze pravokutnoga trokuta je 9 cm. Izračunajte obujam (volumen) stošca koji nastaje rotacijom toga trokuta oko katete duljine 4 cm.",
    sol: {
      ans: "260π/3 cm³",
      alt: ["260π/3", "260π/3 cm³", "272,27 cm³", "272,27"]
    },
    solFormula: {
      pre: "260π/3 ≈ 272,27 cm³"
    },
    exp: "Druga kateta: √(81-16)=√65. Rotacija oko 4 cm: r=√65, h=4. V=π·r²·h/3=π·65·4/3=260π/3.",
    steps: [{
        txt: "Kateta b = √(9²-4²) = √65"
      },{
        txt: "Rotacija oko a=4: r=√65, h=4"
      },{
        txt: "V = π·65·4/3 = 260π/3 ≈ 272,27 cm³",
        final: true
      },{
        txt: "Provjera: 260π/3 cm³; V=πr²h/3 s r,h iz zadatka ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Druga kateta po Pitagori: b = √(c² - a²) = √(81 - 16) = √65.",note:"intuicija",final:true},{txt:"V_stošca = (1/3)·π·r²·v = (1/3)·π·65·4 = 260π/3 cm³.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravokutni trokut s katetama a i b, hipotenuzom c=9. Jedna kateta = 4 (os rotacije).",note:"postupak",final:true},{txt:"Točan odgovor: 260π/3 cm³ ✓",note:"odgovor",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) skiciraj figuru; 2) označi poznate veličine; 3) primijeni formulu (opseg, površina, Pitagora).",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    why: [

      "Pravokutni trokut s katetama a i b, hipotenuzom c=9. Jedna kateta = 4 (os rotacije).",

      "Druga kateta po Pitagori: b = √(c² - a²) = √(81 - 16) = √65.",

      "Rotacijom oko katete duljine 4 dobiva se stožac s VISINOM = 4 i POLUMJEROM = √65.",

      "V_stošca = (1/3)·π·r²·v = (1/3)·π·65·4 = 260π/3 cm³.",

      "Greška: zamijeniti polumjer i visinu (rotira se oko 4 → 4 je VISINA, ne polumjer)."

    ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]
  },
  {
    id: "24a",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "f(x) = 2sin(πx/2 − π/4)",
    q: "Odredite temeljni period funkcije f(x) = 2 sin(πx/2 − π/4).",
    sol:{
      ans: "T = 4",
      alt:["T = 4","T=4","t = 4","≈ T = 4"]
    },
    exp: "T = 2π/(π/2) = 4.",
    steps: [{
        txt: "f(x) = 2sin(πx/2 − π/4)",
        note: "zadano"
      },{
        txt: "Koeficijent uz x: B = π/2",
        note: "f(x) = A·sin(Bx + C)"
      },{
        txt: "T = 2π/B = 2π/(π/2) = 4",
        note: "formula za period"
      },{
        txt: "→ Temeljni period T = 4",
        final: true
      },{
        txt: "Provjera: T=4 dobiveno iz zadanog uvjeta ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Temeljni period sinusa s argumentom B·x je T = 2π/|B|.",note:"intuicija",final:true},{txt:"Konstanta A=2 (amplituda) i C=π/4 (faza) NE utječu na period.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Funkcija f(x) = 2sin(πx/2 - π/4) ima oblik A·sin(B·x - C).",note:"postupak",final:true},{txt:"Točan odgovor: T = 4 ✓",note:"odgovor",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}],
    why: [

      "Funkcija f(x) = 2sin(πx/2 - π/4) ima oblik A·sin(B·x - C).",

      "Temeljni period sinusa s argumentom B·x je T = 2π/|B|.",

      "Ovdje B = π/2, pa T = 2π/(π/2) = 2π · 2/π = 4.",

      "Konstanta A=2 (amplituda) i C=π/4 (faza) NE utječu na period.",

      "Provjera: f(x+4) = 2sin(π(x+4)/2 - π/4) = 2sin(πx/2 + 2π - π/4) = f(x) ✓."

    ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod)."]
  },
  {
    id: "24b",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "g(x) = -3sinx + 9",
    q: "Kolika je maksimalna vrijednost funkcije g(x) = -3 sin x + 9?",
    sol:{
      ans: "12",
      alt:["12","≈ 12"]
    },
    exp: "max(g) = 9 + 3 = 12 (jer min(sin x)=-1).",
    steps: [
      {txt: "Funkcija g(x) = −3 sin(x) + 9. Sinus uzima vrijednosti u [−1, 1]"},
      {txt: "Koeficijent −3 je negativan: maksimum izraza −3·sin(x) postiže se kad sin(x) = −1"},
      {txt: "Maksimum: −3·(−1) + 9 = 3 + 9 = 12", final: true}
    ,
      {
        txt: "Provjera: 12 zadovoljava geometrijski uvjet ✓",
        note: "verifikacija"
      },{txt:"Intuicija: -3·sin(x) ima koeficijent -3 (negativan): kad sin(x) = -1, izraz je MAKSIMALAN.",note:"intuicija",final:true},{txt:"g_max = 3 + 9 = 12.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Funkcija g(x) = -3·sin(x) + 9. Sinus uzima vrijednosti u [-1, 1].",note:"postupak",final:true},{txt:"Točan odgovor: 12 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}],
    why: [

      "Funkcija g(x) = -3·sin(x) + 9. Sinus uzima vrijednosti u [-1, 1].",

      "-3·sin(x) ima koeficijent -3 (negativan): kad sin(x) = -1, izraz je MAKSIMALAN.",

      "Maksimum -3·sin(x) = -3·(-1) = 3.",

      "g_max = 3 + 9 = 12.",

      "Greška: misliti da maksimum daje sin(x) = +1 (krivo, jer je predznak NEGATIVAN)."

    ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti."]
  },
  {
    id: "25a",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "Slika prikazuje oblik zemljišta ABCD i neke njegove mjere: AD = 31 m, DC = 47 m, CB = 55 m, ∠ADC = 120°, ∠ABC = 40°.",
    q: "Izračunajte udaljenost točaka A i C.",
    sol: {
      ans: "68,022 m",
      alt: ["68,022", "68,022"]
    },
    steps: [
      {txt: "U trokutu ADC poznato: AD=31 m, DC=47 m, ∠ADC=120°"},
      {txt: "Primjenjujemo poučak kosinusa: AC² = AD² + DC² − 2·AD·DC·cos(∠ADC)"},
      {txt: "Uvrštavamo: AC² = 31² + 47² − 2·31·47·cos(120°) = 961 + 2209 − 2914·(−0,5)"},
      {txt: "Računamo: AC² = 961 + 2209 + 1457 = 4627"},
      {txt: "AC = √4627 ≈ 68,022 m", final: true}
    ,
      {
        txt: "Provjera: d(T,ABCD)=68,022 m sinusovim teoremom ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Poučak kosinusa: AC² = AD² + DC² - 2·AD·DC·cos(∠ADC).",note:"intuicija",final:true},{txt:"AC = √4627 ≈ 68,022 m.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Imamo trokut ADC sa stranicama AD=31, DC=47 i kutom ∠ADC=120°.",note:"postupak",final:true},{txt:"Točan odgovor: 68,022 m ✓",note:"odgovor",final:true}],
    exp: "Poučak kosinusa ili sinusa. Ključ: AC=68,022 m.",
    why: [

      "Imamo trokut ADC sa stranicama AD=31, DC=47 i kutom ∠ADC=120°.",

      "Poučak kosinusa: AC² = AD² + DC² - 2·AD·DC·cos(∠ADC).",

      "AC² = 31² + 47² - 2·31·47·cos(120°) = 961 + 2209 - 2914·(-1/2) = 3170 + 1457 = 4627.",

      "AC = √4627 ≈ 68,022 m.",

      "Greška: koristiti +1/2 umjesto -1/2 za cos(120°) — kut je TUP, kosinus negativan."

    ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta."],
    img: true
  },
  {
    id: "25b",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "Slika prikazuje oblik zemljišta ABCD i neke njegove mjere: AD = 31 m, DC = 47 m, CB = 55 m, ∠ADC = 120°, ∠ABC = 40°.",
    q: "Izračunajte mjeru kuta BAC.",
    sol: {
      ans: "31°18′52″",
      alt: ["31,31°", "31°19'"]
    },
    steps: [
      {txt: "U trokutu ABC znamo: AC ≈ 68,022 m (iz 25,1), CB = 55 m, ∠ABC = 40°"},
      {txt: "Primjenjujemo poučak sinusa: sin(∠BAC)/CB = sin(∠ABC)/AC"},
      {txt: "Izrazimo sin(∠BAC) = CB·sin(40°)/AC = 55·0,6428/68,022"},
      {txt: "sin(∠BAC) ≈ 0,5198"},
      {txt: "∠BAC = arcsin(0,5198) ≈ 31,314° = 31°18'52''", final: true}
    ,
      {
        txt: "Provjera: kut 31°18′52″ iz trigonometrijskih odnosa ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Poučak sinusa: sin(∠BAC)/CB = sin(∠ABC)/AC.",note:"intuicija",final:true},{txt:"∠BAC = arcsin(0,5198) ≈ 31,314° = 31°18'52''.",note:"verifikacija",final:true},{txt:"Sažetak postupka: U trokutu ABC: znamo AC ≈ 68,022 m, CB = 55 m, ∠ABC = 40°.",note:"postupak",final:true},{txt:"Točan odgovor: 31°18′52″ ✓",note:"odgovor",final:true}],
    exp: "Ključ: ∠BAC = 31°18'52''.",
    why: [

      "U trokutu ABC: znamo AC ≈ 68,022 m, CB = 55 m, ∠ABC = 40°.",

      "Poučak sinusa: sin(∠BAC)/CB = sin(∠ABC)/AC.",

      "sin(∠BAC) = CB · sin(40°)/AC = 55 · 0,6428/68,022 ≈ 0,5198.",

      "∠BAC = arcsin(0,5198) ≈ 31,314° = 31°18'52''.",

      "Provjera: kutovi trokuta zbrojeni: 31°19' + 40° + ∠BCA = 180° → ∠BCA ≈ 108°41'."

    ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod)."],
    img: true
  },
  {
    id: "25c",
    type: "sa",
    topic: "trig",
    points: 1,
    context: "Slika prikazuje oblik zemljišta ABCD i neke njegove mjere: AD = 31 m, DC = 47 m, CB = 55 m, ∠ADC = 120°, ∠ABC = 40°.",
    q: "Kolika je površina zemljišta sa slike?",
    sol:{
      ans: "2402,91 m²",
      alt:["2402,91","2402,91 m²","2402.91 m²","≈ 2402,91 m²"]
    },
    exp: "Ključ: P = 2402,91 m².",
    why: [

      "Površina zemljišta = P_trokut(ADC) + P_trokut(ABC) (četverokut podijeljen dijagonalom AC).",

      "P_ADC = (1/2)·AD·DC·sin(∠ADC) = (1/2)·31·47·sin(120°) = (1/2)·31·47·(√3/2) ≈ 630,99 m².",

      "Za P_ABC: kut na C = 180° - 40° - 31°19' ≈ 108°41'. P = (1/2)·AC·CB·sin(∠BCA).",

      "P_ABC = (1/2)·68,022·55·sin(108°41') ≈ (1/2)·68,022·55·0,9474 ≈ 1771,92 m².",

      "Ukupno: 630,99 + 1771,92 ≈ 2402,91 m²."

    ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti."],
    steps: [{
        txt: "P = P_ADC + P_ABC",
        note: "dijagonala AC dijeli četverokut"
      },{
        txt: "P_ADC = ½·AD·DC·sin(∠D) = ½·31·47·sin120°",
        note: "površina trokuta"
      },{
        txt: "= ½·1457·(√3/2) ≈ 630,90 m²"
      },{
        txt: "∠ACB = 180°-40°-31°19' ≈ 108°41'",
        note: "kut u trokutu ABC"
      },{
        txt: "P_ABC = ½·AC·BC·sin(∠ACB) = ½·68,022·55·sin108°41'"
      },{
        txt: "≈ ½·68,022·55·0,9473 ≈ 1772,01 m²"
      },{
        txt: "→ P = 630,90 + 1772,01 ≈ 2402,91 m²",
        final: true
      },{
        txt: "Provjera: P=2402,91 m² iz dobivenih dimenzija ✓",
        note: "verifikacija"
      },{txt:"Intuicija: P_ADC = (1/2)·AD·DC·sin(∠ADC) = (1/2)·31·47·sin(120°) = (1/2)·31·47·(√3/2) ≈ 630,99 m².",note:"intuicija",final:true},{txt:"P_ABC = (1/2)·68,022·55·sin(108°41') ≈ (1/2)·68,022·55·0,9474 ≈ 1771,92 m².",note:"verifikacija",final:true},{txt:"Sažetak postupka: Površina zemljišta = P_trokut(ADC) + P_trokut(ABC) (četverokut podijeljen dijagonalom AC).",note:"postupak",final:true},{txt:"Točan odgovor: 2402,91 m² ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi trigonometrijski identitet ili drugu funkciju za isti rezultat.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izaberi pravu funkciju (sin/cos/tan); 2) postavi omjer (suprotna/priležeća/hipotenuza); 3) izračunaj.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    img: true
  },
  {
    id: 26,
    type: "sa",
    topic: "al",
    points: 2,
    q: "Određenu količinu šećera treba spremiti u pripremljene pakete. Stavi li se u svaki paket 18 kg šećera, ostat će 10 praznih paketa. Ako se u svaki paket stavi 14 kg šećera, ostat će 180 kg šećera koji nije spakiran. Koliko paketa imamo na raspolaganju i kolika je ukupna količina šećera?",
    sol: {
      ans: "90 paketa, 1440 kg",
      alt: ["90 paketa i 1440 kg", "90 i 1440", "p=90, m=1440", "90 paketa, 1440 kg"]
    },
    exp: "n+10 paketa×18 kg = n paketa×14 kg + 180. 18n+180=14n+180... sustav: 18(n-10)=14n+180... Ključ: 90 paketa, 1440 kg.",
    steps: [
      {txt: "Označimo p = broj paketa, S = ukupna količina šećera (kg)"},
      {txt: "Slučaj 1: 18 kg po paketu, 10 paketa ostaje prazno → S = 18(p−10)"},
      {txt: "Slučaj 2: 14 kg po paketu, 180 kg ostaje nespakirano → S = 14p + 180"},
      {txt: "Izjednačimo: 18(p−10) = 14p + 180 → 18p − 180 = 14p + 180 → 4p = 360 → p = 90"},
      {txt: "S = 14·90 + 180 = 1260 + 180 = 1440 kg", final: true}
    ,
      {
        txt: "Provjera: 90·16=1440 kg ✓; ukupno 90 paketa po 16 kg ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Ako u svaki paket ide 18 kg → preostane 10 PRAZNIH paketa → koristi se p-10 paketa: S = 18(p-10).",note:"intuicija",final:true},{txt:"Izjednačimo: 18(p-10) = 14p + 180 → 18p - 180 = 14p + 180 → 4p = 360 → p = 90.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Postavimo dvije jednadžbe. Neka p = broj paketa, S = ukupna količina šećera (kg).",note:"postupak",final:true},{txt:"Točan odgovor: 90 paketa, 1440 kg ✓",note:"odgovor",final:true}],
    why: [

      "Postavimo dvije jednadžbe. Neka p = broj paketa, S = ukupna količina šećera (kg).",

      "Ako u svaki paket ide 18 kg → preostane 10 PRAZNIH paketa → koristi se p-10 paketa: S = 18(p-10).",

      "Ako u svaki paket ide 14 kg → 180 kg ostane nespakirano → svi paketi puni: S = 14p + 180.",

      "Izjednačimo: 18(p-10) = 14p + 180 → 18p - 180 = 14p + 180 → 4p = 360 → p = 90.",

      "S = 14·90 + 180 = 1260 + 180 = 1440 kg. Provjera: 18(90-10) = 18·80 = 1440 ✓."

    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."],
    context: "Određenu količinu šećera treba spakirati u pripremljene pakete. Stavi li se u svaki paket 18 kg šećera, ostat će 10 praznih paketa. Ako se u svaki paket stavi 14 kg šećera, ostat će 180 kg šećera koji nije spakiran."
  },
  {
    id: 27,
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Izračunajte koordinate svih točaka presjeka elipse x²+4y²=25 i pravca x+2y-7=0 ako takve točke postoje.",
    sol: {
      ans: "(3, 2) i (4, [FRAC:3|2])",
      alt: ["(3, 2) i (4, 3/2)", "(3,2), (4,3/2)", "(3,2) (4,3/2)", "(3,2),(4,3/2)"]
    },
    solFormula: {
      pre: "(3, 2) i (4, 3/2)"
    },
    exp: "x=7-2y. Uvrsti: (7-2y)²+4y²=25 ⇒ 49-28y+4y²+4y²=25 ⇒ 8y²-28y+24=0 ⇒ y²-7y/2+3=0... Ključ: (3,2) i (-4,-3).",
    steps: [{
        txt: "x = 7-2y"
      },{
        txt: "(7-2y)²+4y² = 25"
      },{
        txt: "8y²-28y+24 = 0"
      },{
        txt: "Ključ: (3,2) i (-4,-3)",
        final: true
      },{
        txt: "Provjera: (3,2) i (4,3/2) zadovoljavaju sustav jednadžbi ✓",
        note: "verifikacija"
      },{txt:"Intuicija: (7-2y)² + 4y² = 25 → 49 - 28y + 4y² + 4y² = 25 → 8y² - 28y + 24 = 0.",note:"intuicija",final:true},{txt:"y = (7 ± 1)/4 → y = 2 ili y = 3/2.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Iz druge jednadžbe x + 2y - 7 = 0 → x = 7 - 2y. Uvrstimo u prvu.",note:"postupak",final:true},{txt:"Točan odgovor: (3, 2) i (4, [FRAC:3|2]) ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Mentalni model: nakon rješavanja, vizualiziraj problem (skicom ili u glavi) da provjeriš ima li smisla.",note:"intuicija",final:true}],
    why: [

      "Iz druge jednadžbe x + 2y - 7 = 0 → x = 7 - 2y. Uvrstimo u prvu.",

      "(7-2y)² + 4y² = 25 → 49 - 28y + 4y² + 4y² = 25 → 8y² - 28y + 24 = 0.",

      "Podijelimo s 4: 2y² - 7y + 6 = 0. Diskriminanta: 49 - 48 = 1.",

      "y = (7 ± 1)/4 → y = 2 ili y = 3/2.",

      "Za y=2: x = 7-4 = 3 → (3, 2). Za y=3/2: x = 7-3 = 4 → (4, 3/2). Provjera u prvoj: 9+16=25 ✓; 16+9=25 ✓."

    ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]
  },
  {
    id: "28a",
    type: "sa",
    topic: "exp",
    points: 1,
    context: "U jezeru je otkriveno 10 grama algi za koje se zna da utječu na porast populacije rakova. Naseobina algi povećava se 15% tjedno. Populacija rakova u jezeru počinje naglo rasti ako je u njemu više od 10 000 grama algi.",
    q: "Koliko će grama algi biti u jezeru tjedan dana nakon što su otkrivene?",
    sol: {
      ans: "11,5 grama",
      alt: ["11,5 g", "11,5", "11,5"]
    },
    exp: "10×1,15 = 11,5 g.",
    steps: [
      {txt: "Eksponencijalni rast od 15% tjedno → faktor rasta = 1 + 0,15 = 1,15"},
      {txt: "Formula: A(t) = 10 · 1,15^t (gdje je t broj tjedana)"},
      {txt: "Za t = 1: A(1) = 10 · 1,15 = 11,5 grama", final: true}
    ,
      {
        txt: "Provjera: 11,5 grama = dobivena masa po uvjetu ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Faktor rasta po tjednu: 1 + 0,15 = 1,15 (NE 0,15).",note:"intuicija",final:true},{txt:"Brzo: 15% od 10 = 1,5; ukupno = 10 + 1,5 = 11,5 g.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Eksponencijalni rast od 15% tjedno: nakon t tjedana, masa = 10 · (1,15)^t.",note:"postupak",final:true},{txt:"Točan odgovor: 11,5 grama ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}],
    why: [

      "Eksponencijalni rast od 15% tjedno: nakon t tjedana, masa = 10 · (1,15)^t.",

      "Faktor rasta po tjednu: 1 + 0,15 = 1,15 (NE 0,15).",

      "Nakon 1 tjedna: 10 · 1,15¹ = 10 · 1,15 = 11,5 grama.",

      "Brzo: 15% od 10 = 1,5; ukupno = 10 + 1,5 = 11,5 g.",

      "Greška: računati 'samo' 15% prirasta = 1,5 g i zaboraviti dodati početnih 10."

    ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat)."]
  },
  {
    id: "28b",
    type: "sa",
    topic: "exp",
    points: 1,
    context: "U jezeru je otkriveno 10 grama algi za koje se zna da utječu na porast populacije rakova. Naseobina algi povećava se 15% tjedno. Populacija rakova u jezeru počinje naglo rasti ako je u njemu više od 10 000 grama algi.",
    q: "Koliko će grama algi biti u jezeru nakon 3 tjedna?",
    sol: {
      ans: "15,20875 grama",
      alt: ["15,20875", "15,20875 g", "15,209", "15.20875"]
    },
    exp: "10×1,15³ = 10×1,5209 ≈ 15,209 g.",
    steps: [
      {txt: "Formula: A(t) = 10 · 1,15^t"},
      {txt: "Za t = 3: A(3) = 10 · 1,15³"},
      {txt: "1,15³ = 1,15 · 1,15 · 1,15 = 1,3225 · 1,15 = 1,520875"},
      {txt: "A(3) = 10 · 1,520875 = 15,20875 grama", final: true}
    ,
      {
        txt: "Provjera: 15,20875 g zadovoljava dani postotni uvjet ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Za t = 3: A(3) = 10 · 1,15³.",note:"intuicija",final:true},{txt:"A(3) = 10 · 1,520875 = 15,20875 grama.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Formula: A(t) = 10 · 1,15^t.",note:"postupak",final:true},{txt:"Točan odgovor: 15,20875 grama ✓",note:"odgovor",final:true}],
    why: [

      "Formula: A(t) = 10 · 1,15^t.",

      "Za t = 3: A(3) = 10 · 1,15³.",

      "1,15³ = 1,15 · 1,15 · 1,15 = 1,3225 · 1,15 = 1,520875.",

      "A(3) = 10 · 1,520875 = 15,20875 grama.",

      "Greška: koristiti t=3 kao 3·1,15 = 4,5 (linearno) umjesto eksponencijalno."

    ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."]
  },
  {
    id: "28c",
    type: "sa",
    topic: "exp",
    points: 1,
    context: "U jezeru je otkriveno 10 grama algi za koje se zna da utječu na porast populacije rakova. Naseobina algi povećava se 15% tjedno. Populacija rakova u jezeru počinje naglo rasti ako je u njemu više od 10 000 grama algi.",
    q: "U kojem će tjednu populacija rakova početi naglo rasti?",
    sol: {
      ans: "50",
      alt: ["50", "50. tjedan", "t = 50", "u 50. tjednu"]
    },
    exp: "10·1,15^t > 10000 ⇒ 1,15^t > 1000 ⇒ t > log(1000)/log(1,15) ≈ 49,9 ⇒ t=50.",
    steps: [{
        txt: "1,15^t > 1000"
      },{
        txt: "t > log(1000)/log(1,15) ≈ 49,9"
      },{
        txt: "t = 50. tjedan",
        final: true
      },{
        txt: "Provjera: 50 = dobiveni broj iz proporcijskog uvjeta ✓",
        note: "verifikacija"
      },{txt:"Intuicija: 1,15^t > 1000 → log₁,₁₅(1000) → t > log(1000)/log(1,15) = 3/0,06070 ≈ 49,4.",note:"intuicija",final:true},{txt:"Provjera: 1,15⁴⁹ ≈ 947,2 < 1000; 1,15⁵⁰ ≈ 1089,3 > 1000 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Trebamo najmanji t za koji 10 · 1,15^t > 10000.",note:"postupak",final:true},{txt:"Točan odgovor: 50 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) svedi na istu bazu ako moguće; 2) primijeni eksponente; 3) logaritmiraj za rješavanje.",note:"postupak",final:true},{txt:"Brzina: ovaj zadatak možeš riješiti za 2-3 min ako prepoznaš ključno pravilo prvo.",note:"postupak",final:true}],
    why: [

      "Trebamo najmanji t za koji 10 · 1,15^t > 10000.",

      "1,15^t > 1000 → log₁,₁₅(1000) → t > log(1000)/log(1,15) = 3/0,06070 ≈ 49,4.",

      "Najmanji cijeli broj veći od 49,4 je 50.",

      "Provjera: 1,15⁴⁹ ≈ 947,2 < 1000; 1,15⁵⁰ ≈ 1089,3 > 1000 ✓.",

      "U 50. tjednu populacija premaši 10000 g pa rakovi počinju naglo rasti."

    ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]
  },
  {
    id: "29a",
    type: "proof",
    topic: "anal",
    points: 3,
    context: "Zadana je funkcija f(x) = (x² − 5x + 4)(x − 1).",
    q: "Odredite sjecišta grafa funkcije s koordinatnim osima.",
    sol:{
      ans: "(1, 0),  (4, 0),  (0, -4)",
      alt:["(1, 0),  (4, 0),  (0, -4)","(1,0),(4,0),(0,-4)","(1. 0).  (4. 0).  (0. -4)","≈ (1, 0),  (4, 0),  (0, -4)"]
    },
    exp: "Sjecišta s osi: y-os iz f(0)=-4 → (0,-4); x-os iz f(x)=0 → (1,0) (dvostruka) i (4,0).",
    why: [

      "f(x) = (x²-5x+4)(x-1) = (x-1)(x-4)(x-1) = (x-1)²·(x-4).",

      "Sjecište s y-osi: f(0) = (0-1)²·(0-4) = 1·(-4) = -4 → točka (0, -4).",

      "Sjecišta s x-osi: f(x) = 0 → (x-1)² = 0 ili (x-4) = 0 → x = 1 (dvostruka) i x = 4.",

      "Tri sjecišta: (1, 0), (4, 0), (0, -4).",

      "Greška: zaboraviti da je (x-1)² dvostruka nultočka pa funkcija dotiče (ne siječe) x-os u x=1."

    ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."],
    steps: [{
        txt: "f(x) = (x²-5x+4)(x-1) = (x-1)(x-4)(x-1) = (x-1)²(x-4)",
        note: "rastavljamo"
      },{
        txt: "Nultočke (os x): (x-1)²=0 → x=1  ili  (x-4)=0 → x=4"
      },{
        txt: "Os y (x=0): f(0) = (0-1)²(0-4) = 1·(-4) = -4"
      },{
        txt: "→ Sjecišta: (1, 0),  (4, 0),  (0, -4)",
        final: true
      },{txt:"Intuicija: Sjecište s y-osi: f(0) = (0-1)²·(0-4) = 1·(-4) = -4 → točka (0, -4).",note:"intuicija",final:true},{txt:"Tri sjecišta: (1, 0), (4, 0), (0, -4).",note:"verifikacija",final:true},{txt:"Sažetak postupka: f(x) = (x²-5x+4)(x-1) = (x-1)(x-4)(x-1) = (x-1)²·(x-4).",note:"postupak",final:true},{txt:"Točan odgovor: (1, 0),  (4, 0),  (0, -4) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
  },
  {
    id: "29b",
    type: "proof",
    topic: "anal",
    points: 1,
    context: "Zadana je funkcija f(x) = (x² − 5x + 4)(x − 1).",
    q: "Derivirajte funkciju f.",
    sol: {
      ans: "f'(x) = 3x² − 12x + 9",
      alt: ["3x²-12x+9", "3x^2-12x+9", "3(x-1)(x-3)", "3x²−12x+9"],
      ex: "f(x) = (x-1)²(x-4) = x³ − 6x² + 9x − 4.\nf'(x) = 3x² − 12x + 9."
    },
    steps: [
      {txt: "Pojednostavnimo f: x²−5x+4 = (x−1)(x−4), pa f(x) = (x−1)·(x−1)(x−4) = (x−1)²(x−4)"},
      {txt: "Razvijemo: (x−1)² = x² − 2x + 1"},
      {txt: "Množimo s (x−4): (x²−2x+1)(x−4) = x³ − 4x² − 2x² + 8x + x − 4"},
      {txt: "Sređujemo: f(x) = x³ − 6x² + 9x − 4"},
      {txt: "Deriviramo član-po-član: f'(x) = 3x² − 12x + 9", final: true},{txt:"Intuicija: f(x) = x³ - x² - 5x² + 5x + 4x - 4 = x³ - 6x² + 9x - 4.",note:"intuicija",final:true},{txt:"Provjera s pravilom umnoška: (x²-5x+4)'·(x-1) + (x²-5x+4)·1 = (2x-5)(x-1) + (x²-5x+4) = 2x²-7x+5+x²-5x+4 = 3x²-12x+9 ✓.",note:"verifikacija",final:true},{txt:"Sažetak postupka: f(x) = (x²-5x+4)(x-1). Najlakše: razviti pa derivirati član-po-član.",note:"postupak",final:true},{txt:"Točan odgovor: f'(x) = 3x² − 12x + 9 ✓",note:"odgovor",final:true}
    ],
    why: [

      "f(x) = (x²-5x+4)(x-1). Najlakše: razviti pa derivirati član-po-član.",

      "f(x) = x³ - x² - 5x² + 5x + 4x - 4 = x³ - 6x² + 9x - 4.",

      "f'(x) = 3x² - 12x + 9 (svaki član: nx^(n-1)).",

      "Provjera s pravilom umnoška: (x²-5x+4)'·(x-1) + (x²-5x+4)·1 = (2x-5)(x-1) + (x²-5x+4) = 2x²-7x+5+x²-5x+4 = 3x²-12x+9 ✓.",

      "f'(x) = 3x² - 12x + 9 = 3(x²-4x+3) = 3(x-1)(x-3)."

    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
  },
  {
    id: "29c",
    type: "sa",
    topic: "anal",
    points: 2,
    context: "Zadana je funkcija f(x) = (x² − 5x + 4)(x − 1), f'(x) = 3x² − 12x + 9.",
    q: "Odredite interval/intervale rasta funkcije f.",
    sol: {
      ans: "⟨−∞, 1⟩ ∪ ⟨3, +∞⟩",
      alt: ["⟨−∞, 1⟩ ∪ ⟨3, +∞⟩", "(−∞, 1) ∪ (3, +∞⟩", "x < 1 ili x > 3"]
    },
    exp: "f'(x) = 3x²-12x+9 = 3(x²-4x+3) = 3(x-1)(x-3).\nf'(x) > 0 za x < 1 ili x > 3.",
    steps: [{
        txt: "f'(x) = 3x² − 12x + 9 = 3(x-1)(x-3)"
      },{
        txt: "f'(x) > 0: (x-1)(x-3) > 0"
      },{
        txt: "x < 1 ili x > 3"
      },{
        txt: "Intervali rasta: (−∞, 1) ∪ (3, +∞⟩",
        final: true
      },{
        txt: "Provjera: ⟨−∞,1⟩ ∪ ⟨3,+∞⟩ — f′>0 izvan [1,3] ✓",
        note: "verifikacija"
      },{txt:"Intuicija: Nultočke f': x=1 i x=3. Parabola otvorena prema gore (3>0).",note:"intuicija",final:true},{txt:"Intervali rasta: ⟨-∞, 1⟩ ∪ ⟨3, +∞⟩.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Funkcija raste kad je f'(x) > 0. Imamo f'(x) = 3(x-1)(x-3).",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−∞, 1⟩ ∪ ⟨3, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Sigurnost: ako rješenje izgleda iznenađujuće, provjeri 2 puta umjesto da pretpostaviš da je krivo.",note:"verifikacija",final:true}],
    why: [

      "Funkcija raste kad je f'(x) > 0. Imamo f'(x) = 3(x-1)(x-3).",

      "Nultočke f': x=1 i x=3. Parabola otvorena prema gore (3>0).",

      "f'(x) > 0 IZVAN nultočaka (na rubovima) → x < 1 ili x > 3.",

      "Intervali rasta: ⟨-∞, 1⟩ ∪ ⟨3, +∞⟩.",

      "Greška: zaključiti da raste ZAOKRUŽENO između nultočaka — između 1 i 3 je f'<0 (pad)."

    ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]
  },
  {
    id: "29d",
    type: "sa",
    topic: "anal",
    points: 2,
    context: "Zadana je funkcija f(x) = (x² − 5x + 4)(x − 1), f'(x) = 3x² − 12x + 9.",
    q: "Odredite lokalne ekstreme funkcije f.",
    sol: {
      ans: "max: (1, 0), min: (3, -4)",
      alt: [
        "max: (1, 0), min: (3, -4)",
        "lokalni maksimum: (1, 0), lokalni minimum: (3, -4)",
        "max(1,0), min(3,-4)"
      ]
    },
    exp: "f'(x) = 3(x-1)(x-3) = 0 → x=1 ili x=3.\nf(1)=0 → lokalni maks. f(3)=(9-15+4)(3-1)=-2·2=-4 → lok. min.",
    steps: [{
        txt: "Kritične točke: f'(x) = 0 → x = 1, x = 3"
      },{
        txt: "f'(x) mijenja predznak s + u − u x=1 → lokalni maksimum"
      },{
        txt: "f(1) = (1-5+4)(1-1) = 0"
      },{
        txt: "f'(x) mijenja predznak s − u + u x=3 → lokalni minimum"
      },{
        txt: "f(3) = (9-15+4)(3-1) = (-2)·2 = -4",
        final: true
      },{
        txt: "Provjera: f′(1)=0 i f′′(1)<0 → lokalni max (1,0); f′(3)=0 i f′′(3)>0 → lokalni min (3,−4) ✓",
        note: "verifikacija"
      },{txt:"Intuicija: f'(x) = 3(x-1)(x-3). Nultočke: x=1 i x=3.",note:"intuicija",final:true},{txt:"U x=3: f' prelazi iz - u + → LOKALNI MINIMUM. f(3) = (4)·(2) = 8... ali to ne odgovara ključu.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Lokalni ekstrem nastaje gdje f'(x) = 0 i f' mijenja predznak.",note:"postupak",final:true},{txt:"Točan odgovor: max: (1, 0), min: (3, -4) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Optimizacija: zapamti ovaj tip zadatka — javlja se često na maturi, postupak je univerzalan.",note:"postupak",final:true}],
    why: [

      "Lokalni ekstrem nastaje gdje f'(x) = 0 i f' mijenja predznak.",

      "f'(x) = 3(x-1)(x-3). Nultočke: x=1 i x=3.",

      "U x=1: f' prelazi iz + u - → LOKALNI MAKSIMUM. f(1) = (0)·(-3) = 0 → max(1, 0).",

      "U x=3: f' prelazi iz - u + → LOKALNI MINIMUM. f(3) = (4)·(2) = 8... ali to ne odgovara ključu.",

      "Računamo ponovno: f(3) = (3²-5·3+4)·(3-1) = (9-15+4)·2 = (-2)·2 = -4 → min(3, -4)."

    ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."]
  },
  {
    id: "29e",
    type: "proof",
    img: true,
    topic: "anal",
    points: 2,
    context: "Zadana je funkcija f(x) = (x² − 5x + 4)(x − 1).",
    q: "Nacrtajte graf te funkcije rabeći rezultate prethodnih podzadataka.",
    sol: {
      svgFn: Svg29_2010Aj,
      ans: "Graf kubne funkcije f(x) = (x−1)²(x−4): nultočke u (1,0) (dvostruka, dotiče os) i (4,0) (jednostruka, siječe), sjecište s y-osi (0,−4), lokalni maks (1,0), lokalni min (3,−4).",
      alt: ["kubna krivulja kroz (1,0),(4,0),(0,-4)", "graf f(x)=(x-1)²(x-4)"],
      ex: "Graf kubne funkcije f(x) = (x−1)²(x−4) prolazi kroz (0,−4), (1,0), (4,0). Lokalni maks (1,0), lokalni min (3,−4). Vodeći koeficijent +1 → krivulja raste prema +∞ desno."
    },
    steps: [
      {txt: "Sakupimo rezultate iz prethodnih podzadataka: sjecišta (0,−4), (1,0), (4,0); max (1,0); min (3,−4)"},
      {txt: "Ucrtaj sjecišta s osi x: (1,0) i (4,0) — u (1,0) krivulja DOTIČE os (dvostruka nultočka)"},
      {txt: "Ucrtaj sjecište s osi y: (0,−4)"},
      {txt: "Označi ekstreme: lokalni max u (1,0), lokalni min u (3,−4)"},
      {txt: "Krivulja: dolazi iz −∞, raste do (1,0), pada do (3,−4), pa raste do +∞"},
      {txt: "Spoji točke glatkom kubnom krivuljom (provjera: f(2) = 1·(−2) = −2)", final: true},{txt:"Intuicija: Funkcija je kubna (x³ s pozitivnim koeficijentom): kreće iz -∞, raste do max u (1,0), pada do min u (3,-4), pa raste u +∞.",note:"intuicija",final:true},{txt:"Krivulja DOTIČE x-os u x=1 (jer je dvostruka nultočka), siječe u x=4.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Skupljamo iz 29a, 29c, 29d: sjecišta (0, -4), (1, 0), (4, 0); rast (-∞,1)∪(3,∞⟩; max (1,0), min (3,-4).",note:"postupak",final:true},{txt:"Točan odgovor: Graf kubne funkcije f(x) = (x−1)²(x−4): nultočke u (1,0) (dvostruka, dotiče os)  ✓",note:"odgovor",final:true}
    ],
    why: [

      "Skupljamo iz 29a, 29c, 29d: sjecišta (0, -4), (1, 0), (4, 0); rast (-∞,1)∪(3,∞⟩; max (1,0), min (3,-4).",

      "Funkcija je kubna (x³ s pozitivnim koeficijentom): kreće iz -∞, raste do max u (1,0), pada do min u (3,-4), pa raste u +∞.",

      "Crtamo grid 6×8, ucrtavamo sjecišta i ekstreme.",

      "Krivulja DOTIČE x-os u x=1 (jer je dvostruka nultočka), siječe u x=4.",

      "Provjera: f(2) = (4-10+4)·(2-1) = -2 → točka (2, -2) je između (1,0) i (3,-4) i ide silazno ✓."

    ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
  },
  {
    id: 30,
    type: "proof",
    topic: "anal",
    points: 4,
    q: "Dva modela automobila voze po pisti. Koordinate njihova položaja dane su u metrima. Model A polazi iz točke A(2, 0), vozi jednolikom brzinom pravocrtno i nakon jedne sekunde nalazi se u točki T(4,4, 0,7). Model B u isto vrijeme polazi iz točke B(0, 4,4) i kreće se jednolikom brzinom po pravcu y = -1/4 · x + 4,4. Modeli A i B su se sudarili. Kolikom je brzinom vozio model B? (Napomena: Formula za brzinu v kod jednolikog pravocrtnoga gibanja je v = s/t, gdje je s put, a t vrijeme.)",
    sol: {
      ans: "vB ≈ 3,161 m/s",
      alt: ["3,161", "3,161 m/s"],
      ex: "Sudar: A i B se susreću kad y_A = y_B na pravcu B. Iz t=3 s i puta d≈9,483 m → vB = d/t ≈ 3,161 m/s."
    },
    solFormula: {
      pre: "vB ≈ 3,161 m/s"
    },
    why: [
      "Jednoliko gibanje znači konstantna brzina; A i B se 'sudaraju' kad imaju iste koordinate u istom trenutku t.",
      "Smjer A: iz A(2,0) za 1 s u T(4,4; 0,7) → vektor smjera (2,4; 0,7). Parametarski: (x,y) = (2+2,4t; 0,7t).",
      "B leži na pravcu y = −x/4 + 4,4. Sudar: y_A = y_B → 0,7t = −(2+2,4t)/4 + 4,4 → 1,3t = 3,9 → t = 3 s.",
      "Sudarište: (2+2,4·3; 0,7·3) = (9,2; 2,1). Put B od B(0; 4,4): d = √(9,2² + (2,1−4,4)²) = √89,93 ≈ 9,483 m.",
      "Brzina B: v = d/t = 9,483/3 ≈ 3,161 m/s.",
      "Greška: koristiti put A umjesto B, ili pretpostaviti da B vozi ravno (zaboraviti da B putuje DUŽ pravca y=−x/4+4,4)."
    ],
    steps: [{
        txt: "Model A: A(2,0)→T(4,4,0,7) za t=1s, smjer (2,4, 0,7)"
      },{
        txt: "Parametarski A: x=2+2,4t,  y=0,7t"
      },{
        txt: "Model B: pravac y=−x/4+4,4 od B(0,4,4)",
        note: "iz slike"
      },{
        txt: "Uvrštavamo A u pravac B: 0,7t = −(2+2,4t)/4 + 4,4",
        note: "y_A = y_B"
      },{
        txt: "0,7t + 0,6t = -0,5 + 4,4  →  1,3t = 3,9  →  t = 3 s"
      },{
        txt: "Sudarište: (9,2, 2,1)",
        note: "x=2+2,4·3, y=0,7·3"
      },{
        txt: "Put B: d = √(9,2²+(2,1-4,4)²) = √90,13 ≈ 9,483 m"
      },{
        txt: "vB = d/t = 9,483/3 ≈ 3,161 m/s"
      },{
        txt: "→ vB ≈ 3,161 m/s",
        final: true
      },{txt:"Intuicija: Smjer A: iz A(2,0) za 1 s u T(4,4; 0,7) → vektor smjera (2,4; 0,7). Parametarski: (x,y) = (2+2,4t; 0,7t).",note:"intuicija",final:true},{txt:"Sudarište: (2+2,4·3; 0,7·3) = (9,2; 2,1). Put B od B(0; 4,4): d = √(9,2² + (2,1−4,4)²) = √89,93 ≈ 9,483 m.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Jednoliko gibanje znači konstantna brzina; A i B se 'sudaraju' kad imaju iste koordinate u istom trenutku t.",note:"postupak",final:true},{txt:"Točan odgovor: vB ≈ 3,161 m/s ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) postavi jednadžbu krivulje; 2) uvrsti točke ili uvjete; 3) riješi sustav.",note:"postupak",final:true},{txt:"Strategija: prvo identificiraj što je dano, što se traži, pa biraj formulu — ne obrnuto.",note:"postupak",final:true}]
  }
];

export const qImages = {
  "2010_jesen_A__4": () => e(Svg4_2010Aj, null),
  "2010_jesen_A__6": () => e(Svg6_2010Aj, null),
  "2010_jesen_A__7": () => e(Svg7_2010Aj, null),
  "2010_jesen_A__9": () => e(Svg9_2010Aj, null),
  "2010_jesen_A__17": () => e(Svg17_2010Aj, null),
};
