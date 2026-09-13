// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgTabl24_2011LB(){
  const colW=[120,70,80,90];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";  // labela, c1, c2, c3
  const W=colW.reduce((a,b)=>a+b,0)+2, rh=32;
  const H=rh*2+2;
  const ox=1, oy=1;
  // Compute X positions of column dividers
  const xs=[ox];
  for(let i=0;i<colW.length;i++) xs.push(xs[i]+colW[i]);
  // Cell content (null = unknown / blank)
  const cells=[
    ["US DOLAR ($)", "1",      "352.74", null   ],
    ["KUNA (HRK)",   "5.7256", null,     "1 000"]
  ];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    // Outer border
    e("rect",{x:ox,y:oy,width:W-2,height:H-2,fill:"none",stroke:"var(--muted)",strokeWidth:1}),
    // Vertical dividers (interior)
    ...xs.slice(1,-1).map((xv,i)=>e("line",{key:"v"+i,x1:xv,y1:oy,x2:xv,y2:oy+rh*2,stroke:"var(--muted)",strokeWidth:0.8})),
    // Horizontal divider (between rows)
    e("line",{x1:ox,y1:oy+rh,x2:ox+W-2,y2:oy+rh,stroke:"var(--muted)",strokeWidth:0.8}),
    // Left column header background (var(--s2))
    e("rect",{x:ox,y:oy,width:colW[0],height:rh,fill:"var(--s2)"}),
    e("rect",{x:ox,y:oy+rh,width:colW[0],height:rh,fill:"var(--s2)"}),
    // Render cells
    ...cells.flatMap((row,ri)=>row.map((val,ci)=>{
      const cx=xs[ci]+colW[ci]/2;
      const cy=oy+ri*rh+rh/2+5;
      const isLabel=ci===0;
      const isUnknown=val===null;
      let fill, fontWeight, content;
      if(isLabel){
        fill="var(--text)"; fontWeight="700"; content=val;
      } else if(isUnknown){
        fill=_GOLD; fontWeight="700"; content="?";
      } else {
        fill=_BLUE; fontWeight="600"; content=val;
      }
      return e("text",{key:`c${ri}_${ci}`,
        x:cx,y:cy,
        textAnchor:"middle",
        fontSize:isLabel?12:13,
        fontWeight,
        fill},content);
    }))
  );
}

function SvgZad27_2011LB(){
  // Igralište NMKJ; vertices iz pixel scana PDF reference (4× rez).
  // N(-20,30), M(20,30), K(20,-10), J(-10,-20). 1 podjela = 10 m.
  const W=300,H=260,pad={l:32,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-30,xMax=30,yMin=-30,yMax=40;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,mu="var(--muted)";
  // Pravokutnik vertices
  const N=[toX(-20),toY(30)];
  const M=[toX(20), toY(30)];
  const K=[toX(20), toY(-10)];
  const J=[toX(-10),toY(-20)];
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:_RED,stroke:t,strokeWidth:1.2});}
  function dot(p){return e("circle",{cx:p[0],cy:p[1],r:3,fill:"none",stroke:b,strokeWidth:1.4});}
  // Grid svake 10
  const gridX=[];
  for(let x=-30;x<=30;x+=10){
    if(x===0) continue;
    gridX.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5}));
  }
  const gridY=[];
  for(let y=-30;y<=40;y+=10){
    if(y===0) continue;
    gridY.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridX, ...gridY,
    // Polygon (igralište) — var(--blue) fill semi-transparent + stroke
    e("polygon",{points:`${N[0]},${N[1]} ${M[0]},${M[1]} ${K[0]},${K[1]} ${J[0]},${J[1]}`,
      fill:b,fillOpacity:0.10,stroke:b,strokeWidth:2,strokeLinejoin:"round"}),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    // Labele osi
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    // Hollow tickovi: 0, "10" na x i y
    tk(ox,oy),
    tk(toX(10),oy), tk(ox,toY(10)),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("text",{x:toX(10),y:oy+11,fontSize:8,fill:mu,textAnchor:"middle"},"10"),
    e("text",{x:ox-6,y:toY(10)+4,fontSize:8,fill:mu,textAnchor:"end"},"10"),
    // Vertex markers (var(--blue))
    dot(N), dot(M), dot(K), dot(J),
    // Vertex labels (italic)
    e("text",{x:N[0]-4,y:N[1]-6, fontSize:11,fill:_GOLD,fontStyle:"italic",textAnchor:"end"},"N"),
    e("text",{x:M[0]+5,y:M[1]-3, fontSize:11,fill:_GOLD,fontStyle:"italic"},"M"),
    e("text",{x:K[0]+5,y:K[1]+4, fontSize:11,fill:_GOLD,fontStyle:"italic"},"K"),
    e("text",{x:J[0]-5,y:J[1]+12,fontSize:11,fill:_GOLD,fontStyle:"italic",textAnchor:"end"},"J")
  );
}

function SvgZad16_2011LB(){
  // Kvadrat ABCD (A dolje-lijevo, B dolje-desno, C gore-desno, D gore-lijevo)
  // + jednakostranicni trokut DCE iznad DC (E = vrh).
  // alpha = kut DEB pri vrhu E (NCVVO: 45 stupnjeva).
  // Verifikacija: ∠DEC=60°, u trokutu ECB je EC=CB=a i ∠ECB=150° pa je ∠CEB=15°,
  //               dakle alpha = ∠DEB = 60° - 15° = 45°.
  const W=180,H=240;
  const _BLUE="var(--blue)",_GOLD="var(--gold)";
  const t="var(--text)";
  const side=100;
  const triH=side*Math.sqrt(3)/2;
  // Kvadrat ABCD: A i B dolje, C i D gore
  const D=[40,            24+triH];
  const C=[D[0]+side,     D[1]];
  const A=[D[0],          D[1]+side];
  const B=[C[0],          C[1]+side];
  // E = vrh jednakostranicnog trokuta nad DC
  const E=[(D[0]+C[0])/2, D[1]-triH];
  function dot(p){return e("circle",{cx:p[0].toFixed(1),cy:p[1].toFixed(1),r:2.6,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.2});}
  // Arc helper (matches Svg25_2010Aj pattern)
  function arcAtVertex(V,ref1,ref2,r,col){
    const a1=Math.atan2(ref1[1]-V[1],ref1[0]-V[0]);
    const a2=Math.atan2(ref2[1]-V[1],ref2[0]-V[0]);
    const x1=V[0]+r*Math.cos(a1),y1=V[1]+r*Math.sin(a1);
    const x2=V[0]+r*Math.cos(a2),y2=V[1]+r*Math.sin(a2);
    let diff=a2-a1;
    while(diff>Math.PI) diff-=2*Math.PI;
    while(diff<-Math.PI) diff+=2*Math.PI;
    const sweep=diff>0?1:0;
    return e("path",{d:`M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0,${sweep} ${x2.toFixed(1)},${y2.toFixed(1)}`,
      fill:"none",stroke:col,strokeWidth:1.4});
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Kvadrat ABCD (bez ispune)
    e("polygon",{points:`${A[0].toFixed(1)},${A[1].toFixed(1)} ${B[0].toFixed(1)},${B[1].toFixed(1)} ${C[0].toFixed(1)},${C[1].toFixed(1)} ${D[0].toFixed(1)},${D[1].toFixed(1)}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round"}),
    // Jednakostranicni trokut DCE (bez ispune, kao u originalu)
    e("polygon",{points:`${D[0].toFixed(1)},${D[1].toFixed(1)} ${C[0].toFixed(1)},${C[1].toFixed(1)} ${E[0].toFixed(1)},${E[1].toFixed(1)}`,
      fill:"none",stroke:t,strokeWidth:1.8,strokeLinejoin:"round"}),
    // Jedina dijagonala u originalu: E -> B
    e("line",{x1:E[0].toFixed(1),y1:E[1].toFixed(1),x2:B[0].toFixed(1),y2:B[1].toFixed(1),
      stroke:_BLUE,strokeWidth:1.2}),
    // Luk kuta alpha u vrhu E (izmedu ED i EB)
    arcAtVertex([E[0],E[1]],D,B,20,_GOLD),
    // alpha label
    e("text",{x:E[0]-9,y:E[1]+30, fontSize:13,fill:_GOLD,fontStyle:"italic",fontWeight:600},"α"),
    // Vrhovi
    dot(A),dot(B),dot(C),dot(D),dot(E),
    // Oznake vrhova
    e("text",{x:A[0]-14,y:A[1]+14, fontSize:12,fill:_GOLD,fontStyle:"italic"},"A"),
    e("text",{x:B[0]+6, y:B[1]+14, fontSize:12,fill:_GOLD,fontStyle:"italic"},"B"),
    e("text",{x:C[0]+6, y:C[1]+4,  fontSize:12,fill:_GOLD,fontStyle:"italic"},"C"),
    e("text",{x:D[0]-14,y:D[1]+4,  fontSize:12,fill:_GOLD,fontStyle:"italic"},"D"),
    e("text",{x:E[0]-4, y:E[1]-8,  fontSize:12,fill:_GOLD,fontStyle:"italic"},"E")
  );
}

function Svg25_2010Aj(){
  const W=285,H=205;
  const t="var(--text)",b="var(--blue)",g="var(--green)",gold="var(--gold)",r2="var(--red)",mu="var(--muted)";
  const A=[20,185], B=[255,185], C=[158,100], D=[47,116];
  function dot(p,col){return e("circle",{cx:p[0],cy:p[1],r:4,fill:col,stroke:"var(--bg)",strokeWidth:1.5});}
  function arcPath(ox,oy,r,a1d,a2d,col){
    const a1=a1d*Math.PI/180,a2=a2d*Math.PI/180;
    const x1=ox+r*Math.cos(a1),y1=oy+r*Math.sin(a1);
    const x2=ox+r*Math.cos(a2),y2=oy+r*Math.sin(a2);
    return e("path",{d:`M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0,0 ${x2.toFixed(1)},${y2.toFixed(1)}`,
      fill:"none",stroke:col,strokeWidth:1.8});
  }
  function ang(from,to){return Math.atan2(to[1]-from[1],to[0]-from[0])*180/Math.PI;}
  const angDA=ang(D,A),angDC=ang(D,C),angBC=ang(B,C),angBA=ang(B,A);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:[A,D,C,B].map(p=>p.join(",")).join(" "),
      fill:b,fillOpacity:0.05,stroke:t,strokeWidth:1.8,strokeLinejoin:"round"}),
    e("line",{x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:g,strokeWidth:2.2}),
    dot(A,g), dot(B,g), dot(C,gold), dot(D,r2),
    e("text",{x:A[0]-15,y:A[1]+5,fontSize:12,fill:g,fontStyle:"italic",fontWeight:"bold"},"A"),
    e("text",{x:B[0]+6,y:B[1]+5,fontSize:12,fill:g,fontStyle:"italic",fontWeight:"bold"},"B"),
    e("text",{x:C[0]+6,y:C[1]-4,fontSize:12,fill:gold,fontStyle:"italic",fontWeight:"bold"},"C"),
    e("text",{x:D[0]-18,y:D[1]+4,fontSize:12,fill:r2,fontStyle:"italic",fontWeight:"bold"},"D"),
    e("text",{x:(A[0]+D[0])/2-22,y:(A[1]+D[1])/2+3,fontSize:9.5,fill:b,fontStyle:"italic"},"31 m"),
    e("text",{x:(D[0]+C[0])/2-4,y:(D[1]+C[1])/2-10,fontSize:9.5,fill:b,fontStyle:"italic",textAnchor:"middle"},"47 m"),
    e("text",{x:(C[0]+B[0])/2+16,y:(C[1]+B[1])/2+2,fontSize:9.5,fill:b,fontStyle:"italic"},"55 m"),
    arcPath(D[0],D[1],18,angDA,angDC,r2),
    e("text",{x:D[0]+8,y:D[1]+18,fontSize:9,fill:r2,fontWeight:"bold"},"120°"),
    arcPath(B[0],B[1],18,angBC,angBA,gold),
    e("text",{x:B[0]-40,y:B[1]-7,fontSize:9,fill:gold,fontWeight:"bold"},"40°"),
  );
}

function SvgZad14_2011LB(){
  // Kvadar dimenzija a=12, b=4 (dubina), c=3 (visina)
  // Cabinet projection (depth at 30°, scaled for clarity)
  // Vertex layout: front face ABFE, back face DCGH (offset by depth)
  const W=270,H=180;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",b=_BLUE,mu="var(--muted)";
  const sc=12;  // 1 cm = 12 px
  const ang=30*Math.PI/180;
  const dx=sc*4*Math.cos(ang)*0.85;  // depth offset x
  const dy=-sc*4*Math.sin(ang)*0.85; // depth offset y
  const sw=1.6;
  // Origin: A bottom-left of front face
  const ox=40,oy=145;
  // Front face vertices (z=0)
  const A=[ox,           oy];
  const B=[ox+12*sc,     oy];
  const F=[B[0],         oy-3*sc];
  const E=[A[0],         oy-3*sc];
  // Back face vertices (offset by depth)
  const D=[A[0]+dx,      A[1]+dy];
  const C=[B[0]+dx,      B[1]+dy];
  const G=[F[0]+dx,      F[1]+dy];
  const H_=[E[0]+dx,      E[1]+dy];
  function ln(a,b2,col,dashed){
    const props={x1:a[0],y1:a[1],x2:b2[0],y2:b2[1],
      stroke:col||t,strokeWidth:sw,strokeLinecap:"round"};
    if(dashed) props.strokeDasharray="4,3";
    return e("line",props);
  }
  function dot(p){return e("circle",{cx:p[0],cy:p[1],r:2.4,fill:"none",stroke:_BLUE,strokeWidth:1.1});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Hidden edges (through D) — dashed muted
    ln(A,D,mu,true),
    ln(D,C,mu,true),
    ln(D,H_,mu,true),
    // Visible edges
    ln(A,B), ln(B,F), ln(F,E), ln(E,A),  // front face
    ln(B,C), ln(C,G), ln(F,G),           // right face
    ln(E,H_), ln(H_,G),                  // top face
    // Vertex dots
    dot(A), dot(B), dot(C), dot(D), dot(E), dot(F), dot(G), dot(H_),
    // Vertex labels (italic, t color)
    e("text",{x:A[0]-12,y:A[1]+5, fontSize:11,fill:_GOLD,fontStyle:"italic"},"A"),
    e("text",{x:B[0]+4, y:B[1]+5, fontSize:11,fill:_GOLD,fontStyle:"italic"},"B"),
    e("text",{x:C[0]+4, y:C[1]+5, fontSize:11,fill:_GOLD,fontStyle:"italic"},"C"),
    e("text",{x:D[0]-12,y:D[1]+5, fontSize:11,fill:_GOLD,fontStyle:"italic"},"D"),
    e("text",{x:E[0]-12,y:E[1]-3, fontSize:11,fill:_GOLD,fontStyle:"italic"},"E"),
    e("text",{x:F[0]+4, y:F[1]-2, fontSize:11,fill:_GOLD,fontStyle:"italic"},"F"),
    e("text",{x:G[0]+4, y:G[1]-2, fontSize:11,fill:_GOLD,fontStyle:"italic"},"G"),
    e("text",{x:H_[0]-12,y:H_[1]-2, fontSize:11,fill:_GOLD,fontStyle:"italic"},"H"),
    // Dimension labels (var(--blue))
    e("text",{x:(A[0]+B[0])/2,y:A[1]+15, fontSize:10,fill:b,textAnchor:"middle"},"12 cm"),
    e("text",{x:A[0]-13, y:(A[1]+E[1])/2+4, fontSize:10,fill:b,textAnchor:"end"},"3 cm"),
    e("text",{x:(B[0]+C[0])/2+4,y:(B[1]+C[1])/2+4, fontSize:10,fill:b},"4 cm")
  );
}

function SvgZad11_2011LB(){
  // Parabola: f(x) = -(2/9)·x·(x-6); tjeme (3,2); nultočke 0 i 6
  // Verified by pixel scan + polyfit on PDF reference (4× resolution).
  const W=240,H=180,pad={l:30,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1.2,xMax=7.5,yMin=-2.5,yMax=2.8;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,mu="var(--muted)";
  // Sample parabola
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.06){
    const y=-(2/9)*x*(x-6);
    if(y<yMin||y>yMax) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  // Hollow tick circles (matches PDF reference style)
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:_RED,stroke:t,strokeWidth:1.2});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid (vrlo prigušen)
    ...[-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-2,-1,0,1,2].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    // Labele osi
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    // Hollow tick markers + labele 1 na obje osi
    tk(toX(1),oy), tk(ox,toY(1)),
    e("text",{x:toX(1),y:oy+11,fontSize:8,fill:mu,textAnchor:"middle"},"1"),
    e("text",{x:ox-6,y:toY(1)+4,fontSize:8,fill:mu,textAnchor:"end"},"1"),
    // Parabola (var(--blue))
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,
      strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: π³ ≈ 31,0, 3³ = 27 → π³ − 27 ≈ 4,0; provjeri koji interval ga sadrži.",topic:"br",points:1,
  q:"Kojemu intervalu pripada broj π³ − 3³?",
  opts:["⟨0; 1,5]","⟨1,5; 2,5]","⟨2,5; 3,5]","⟨3,5; 5]"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"π³ ≈ 31,006, pa π³ − 3³ ≈ 4,006. Broj 4,006 pripada intervalu ⟨3,5; 5].",
  steps:[
    {txt:"π ≈ 3,1416, pa π³ ≈ 31,006",note:"kub broja π"},
    {txt:"3³ = 27"},
    {txt:"π³ − 3³ ≈ 31,006 − 27 = 4,006"},
    {txt:"4,006 ∈ ⟨3,5; 5] → D",final:true},{txt:"Diagnostika: A(⟨0;1,5]): 4,006>1,5. B(⟨1,5;2,5]): 4,006>2,5. C(⟨2,5;3,5]): 4,006>3,5. Greška: zamijeniti π³≈4,006 s π≈3,14.",final:true,note:"diagnostika"},{txt:"Provjera: 3,5<4,006≤5 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: a ∈ ⟨c, d] znači c < a ≤ d (otvoren lijevo, zatvoren desno).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: π ≈ 3,14 → π³ ≈ 31,006; 3³ = 27.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: a ∈ ⟨c, d] znači c < a ≤ d (otvoren lijevo, zatvoren desno).",
    "Konkretno: π ≈ 3,14 → π³ ≈ 31,006; 3³ = 27.",
    "Razlika: 31,006 − 27 = 4,006.",
    "4,006 je između 3,5 i 5, pa pripada ⟨3,5; 5] → D.",
    "Greška: zaboraviti kubirati π (3,14³ ≠ 3,14·3 = 9,42)."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:2,type:"mc",warn:"Pazi: 2,7 % = 2,7/100 = 0,027.",topic:"br",points:1,
  q:"Koliko je 2,7 % zapisano kao decimalan broj?",
  opts:["0,0027","0,027","0,27","2,7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Postotak pretvaramo u decimalu dijeljenjem s 100: 2,7 ÷ 100 = 0,027.",
  steps:[
    {txt:"Pravilo: p % = p/100"},
    {txt:"2,7 % = 2,7 / 100"},
    {txt:"= 0,027 → B",final:true},{txt:"Diagnostika: A(0,0027): dijeljeno s 1000 umjesto 100. C(0,27): dijeljeno s 10. D(2,7): zaboravili dijeliti (samo premjestili decimalu za jedan).",final:true,note:"diagnostika"},{txt:"Provjera: 2,7% = 2,7/100 = 0,027 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: postotak je broj podijeljen sa 100.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 2,7 % znači 2,7 stotinki.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: postotak je broj podijeljen sa 100.",
    "Konkretno: 2,7 % znači 2,7 stotinki.",
    "Pomicanje decimalnog zareza dva mjesta ulijevo: 2,7 → 0,027.",
    "Rezultat: 0,027 → B.",
    "Greška: pomicati zarez samo jedno mjesto (0,27 = 27 %, ne 2,7 %)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:3,type:"mc",warn:"Pazi: a/b = 5/7 → a = 5·9/7.",topic:"br",points:1,
  q:"Za brojeve a i b vrijedi a : b = 5 : 7. Koliki je broj a ako je b = 9?",
  opts:["35/9","11/2","45/7","63/5"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Iz omjera a/b = 5/7 i b = 9 dobijemo a = 9 · 5/7 = 45/7.",
  steps:[
    {txt:"Pravilo proporcije: a/b = 5/7"},
    {txt:"Uvrsti b = 9: a/9 = 5/7"},
    {txt:"a = 9 · 5/7 = 45/7",note:"unakrsno množenje"},
    {txt:"→ C = [FRAC:45|7]",final:true},{txt:"Diagnostika: A(35/9): obrnuti omjer (9/7·5). B(11/2): aritmetika greška. D(63/5): množili s b umjesto dijelili (9·7/5).",final:true,note:"diagnostika"},{txt:"Provjera: a/9=5/7 → a=45/7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: omjer a : b = m : n znači a/b = m/n.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: a/9 = 5/7 → a = (9 · 5)/7.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: omjer a : b = m : n znači a/b = m/n.",
    "Konkretno: a/9 = 5/7 → a = (9 · 5)/7.",
    "Račun: 45/7 ≈ 6,43 (ne treba dijeliti, ostaje kao razlomak).",
    "Točan zapis odgovora: 45/7 → C.",
    "Greška: zamijeniti razmjer i izračunati 7·9/5 = 63/5 (D distractor)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:4,type:"mc",warn:"Pazi: x + x/2 = 2x − 3; postavi jednadžbu pažljivo pa riješi.",topic:"al",points:1,
  q:"Zbroj broja i njegove polovice za tri je manji od dvostruke vrijednosti broja. Koji je to broj?",
  opts:["6","16","30","38"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Označimo broj s x. Tada je x + x/2 = 2x − 3 → 3x/2 = 2x − 3 → x = 6.",
  steps:[
    {txt:"Označi broj s x"},
    {txt:"„Zbroj broja i polovice“ = x + x/2 = 3x/2"},
    {txt:"„Za tri manji od dvostruke vrijednosti“ = 2x − 3"},
    {txt:"Jednadžba: 3x/2 = 2x − 3 → 3x = 4x − 6 → x = 6"},
    {txt:"→ A = 6",final:true},{txt:"Diagnostika: B(16): ne riješiti algebarski (pogoditi?). C(20): krivi postav jednadžbe. D(28): ne oduzeti 3 s obje strane.",final:true,note:"diagnostika"},{txt:"Provjera: 6+6/2−3=6+3−3=6; 2·6=12=6 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tekst zadatka prevedi u algebarsku jednadžbu.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: „polovica“ = x/2; „za 3 manji“ znači = (drugi izraz) − 3.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: tekst zadatka prevedi u algebarsku jednadžbu.",
    "Konkretno: „polovica“ = x/2; „za 3 manji“ znači = (drugi izraz) − 3.",
    "Računi: 3x/2 = 2x − 3 množenjem s 2: 3x = 4x − 6 → x = 6.",
    "Provjera: 6 + 3 = 9 i 2·6 − 3 = 9 ✓.",
    "Greška: čitati „za tri manji“ kao + 3 (smjer relacije obrnut)."
  ,"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati."]
},
  {id:5,type:"mc",warn:"Pazi: 10^(2·1 + 1) = 10³ = 1000.",topic:"al",points:1,
  q:"Kolika je vrijednost funkcije f(x) = 10^(2x+1) za x = 1?",
  opts:["100","1 000","10 000","100 000"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Uvrsti x = 1: f(1) = 10^(2·1+1) = 10³ = 1 000.",
  steps:[
    {txt:"f(x) = 10^(2x+1)"},
    {txt:"Uvrsti x = 1: eksponent = 2·1 + 1 = 3"},
    {txt:"f(1) = 10³ = 1 000"},
    {txt:"→ B = 1 000",final:true},{txt:"Diagnostika: A(100): eksponent=2 (uzeli 2·1=2 ne 3). C(10000): eksponent=4. D(100000): eksponent=5. Greška: ne zbrojiti 1 u eksponentu 2x+1.",final:true,note:"diagnostika"},{txt:"Provjera: f(1)=10^(2·1+1)=10³=1000 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za eksponencijalnu funkciju a^(bx+c) prvo izračunaj eksponent.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 2·1 + 1 = 3.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za eksponencijalnu funkciju a^(bx+c) prvo izračunaj eksponent.",
    "Konkretno: 2·1 + 1 = 3.",
    "Račun: 10³ = 10·10·10 = 1 000.",
    "Rezultat: f(1) = 1 000 → B.",
    "Greška: računati 10^(2·1) · 1 = 100 (zaboraviti +1 u eksponentu)."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:6,type:"mc",warn:"Pazi: 0,24·8750; pa primijeni uvjet zadatka (ostatak/usporedba).",topic:"br",points:1,
  q:"Obiteljska primanja u mjesecu svibnju iznosila su 8 750 kuna. Mjesečni troškovi režija iznosili su 24 % obiteljskih primanja. Za podmirenje preostalih potreba, u mjesecu svibnju, obitelji je potrebno 6 200 kuna. Koliko je kuna preostalo obitelji?",
  opts:["250 kn","450 kn","650 kn","850 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Režije: 24 % od 8 750 = 2 100 kn. Preostalo: 8 750 − 2 100 − 6 200 = 450 kn.",
  steps:[
    {txt:"Ukupna primanja: 8 750 kn"},
    {txt:"Režije = 24 % od 8 750 = 0,24 · 8 750 = 2 100 kn"},
    {txt:"Preostale potrebe: 6 200 kn"},
    {txt:"Preostalo = 8 750 − 2 100 − 6 200 = 450 kn"},
    {txt:"→ B = 450 kn",final:true},{txt:"Diagnostika: A(250): krivi postotak režije. C(650): možda 20% umjesto 24%. D(850): možda 16% umjesto 24%. Greška: ne oduzeti troškove režije ispravno.",final:true,note:"diagnostika"},{txt:"Provjera: 8750−2100−6200=450 kn ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: postotak od broja = (postotak/100) · broj.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 24 % od 8 750 = 0,24 · 8 750.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: postotak od broja = (postotak/100) · broj.",
    "Konkretno: 24 % od 8 750 = 0,24 · 8 750.",
    "Račun: 8 750 − 2 100 (režije) − 6 200 (potrebe) = 450 kn.",
    "Rezultat: obitelji preostaje 450 kn → B.",
    "Greška: zaboraviti oduzeti i režije I potrebe (samo režije daje 6 650 kn)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:7,type:"mc",warn:"Pazi: spoji u ((√3 − 1)(√3 + 1))² = (3 − 1)² = 4.",topic:"al",points:1,
  q:"Koliki je rezultat umnoška (√3 − 1)² · (√3 + 1)²?",
  opts:["√3 − 1","√3 + 1","4","8"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pomoću (a−b)(a+b) = a²−b²: [(√3−1)(√3+1)]² = (3−1)² = 2² = 4.",
  steps:[
    {txt:"(√3 − 1)² · (√3 + 1)² = [(√3 − 1) · (√3 + 1)]²",note:"a²·b² = (ab)²"},
    {txt:"(√3 − 1)(√3 + 1) = (√3)² − 1² = 3 − 1 = 2",note:"razlika kvadrata"},
    {txt:"= 2² = 4"},
    {txt:"→ C = 4",final:true},{txt:"Diagnostika: A(√3−1): razviti samo jedan faktor. B(√3+1): slično. D(8): 2·4=8 — zbrojili umjesto uočili razliku kvadrata.",final:true,note:"diagnostika"},{txt:"Provjera: [(√3−1)(√3+1)]²=[3−1]²=4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo razlike kvadrata: (a − b)(a + b) = a² − b².",note:"postupak",final:true},{txt:"Intuicija: Konkretno: a = √3, b = 1 → (√3)² − 1² = 3 − 1 = 2.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo razlike kvadrata: (a − b)(a + b) = a² − b².",
    "Konkretno: a = √3, b = 1 → (√3)² − 1² = 3 − 1 = 2.",
    "Iskoristivši (xy)² = x²y² ⟹ (x²)(y²) = (xy)² → grupiramo prije kvadriranja.",
    "Rezultat: 2² = 4 → C.",
    "Greška: kvadrirati svaki binom posebno (gubi se prilika za razliku kvadrata)."
  ,"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati."]
},
  {id:8,type:"mc",warn:"Pazi: zbroji jednadžbe da eliminiraš jednu nepoznanicu, pa riješi po x.",topic:"al",points:1,
  q:"Kolika je vrijednost nepoznanice x u sustavu jednadžbi [SYS:10y − 2x + 4 = 0|y + 2x + 7 = 0]?",
  opts:["−3","−2","1","3"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Zbrajanjem jednadžbi (eliminira se x): 11y + 11 = 0 → y = −1. Uvrsti u 2. jednadžbu: −1 + 2x + 7 = 0 → x = −3.",
  steps:[
    {txt:"Sustav: ① 10y − 2x + 4 = 0;  ② y + 2x + 7 = 0"},
    {txt:"Zbroji ① + ②: 10y + y + (−2x + 2x) + (4 + 7) = 0",note:"x se eliminira"},
    {txt:"11y + 11 = 0 → y = −1"},
    {txt:"Uvrsti y = −1 u ②: −1 + 2x + 7 = 0 → 2x = −6 → x = −3"},
    {txt:"→ A = −3",final:true},{txt:"Diagnostika: B(−2): greška pri eliminaciji y. C(1): krivi predznak pri supstituciji. D(3): suprotni predznak rješenja (izgubiti minus).",final:true,note:"diagnostika"},{txt:"Provjera: x=−3, y=−2·(−3)+7=6−7=−1; 10(−1)−2(−3)+4=−10+6+4=0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u sustavu dvije jednadžbe i dvije nepoznanice eliminiramo jednu zbrajanjem ili oduzimanjem.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: koeficijenti uz x su −2 i +2 → zbrajanjem se ponište.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u sustavu dvije jednadžbe i dvije nepoznanice eliminiramo jednu zbrajanjem ili oduzimanjem.",
    "Konkretno: koeficijenti uz x su −2 i +2 → zbrajanjem se ponište.",
    "Račun: 11y + 11 = 0 → y = −1; uvrštavanjem dobijemo x = −3.",
    "Provjera: u ① 10·(−1) − 2·(−3) + 4 = −10 + 6 + 4 = 0 ✓.",
    "Greška: zbrojiti samo lijeve strane bez +4 i +7 (mora se zbrojiti cijela jednadžba)."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:9,type:"mc",warn:"Pazi: 3000 kg je 40 % ukupne mase (teret 60 %) → ukupna = 3000/0,4.",topic:"br",points:1,
  q:"Masa vozila bez tereta je 3 000 kilograma. Nakon utovara, teret čini 60 % ukupne mase. Koliko posto ukupne mase čini teret nakon što je istovarena trećina tereta?",
  opts:["20 %","45 %","50 %","55 %"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Vozilo (40 %) = 3 000 → ukupna 7 500 kg, teret 4 500. Istovari 1/3 = 1 500. Novi teret 3 000, nova ukupna 6 000. 3 000/6 000 = 50 %.",
  steps:[
    {txt:"Vozilo bez tereta = 3 000 kg = 40 % ukupne mase",note:"100 % − 60 %"},
    {txt:"Ukupna masa nakon utovara = 3 000 / 0,40 = 7 500 kg"},
    {txt:"Teret = 7 500 − 3 000 = 4 500 kg"},
    {txt:"Istovari 1/3 tereta: 4 500 / 3 = 1 500 kg → ostaje teret 3 000 kg"},
    {txt:"Nova ukupna masa = 3 000 (vozilo) + 3 000 (teret) = 6 000 kg"},
    {txt:"Postotak tereta = 3 000 / 6 000 = 50 % → C",final:true},{txt:"Diagnostika: A(20%): podjela tereta krivo. B(45%): aproksimacija bez točnog izračuna. D(75%): zbunili se vozilo i teret.",final:true,note:"diagnostika"},{txt:"Provjera: vozilo=3000, original teret=4500; ostaje 3000; 3000/(3000+3000)=50% ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kad se masa mijenja, mijenja se i nazivnik za izračun postotka.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: vozilo je fiksno 3 000 kg = 40 % ukupne (60 % je teret).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kad se masa mijenja, mijenja se i nazivnik za izračun postotka.",
    "Konkretno: vozilo je fiksno 3 000 kg = 40 % ukupne (60 % je teret).",
    "Račun: ukupna 7 500 → teret 4 500 → −1 500 = 3 000; nova ukupna 6 000.",
    "Postotak: teret/ukupna = 3 000/6 000 = 1/2 = 50 % → C.",
    "Greška: računati postotak prema PRVOJ ukupnoj masi (3 000/7 500 = 40 %, što je distraktor)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:10,type:"mc",warn:"Pazi: oduzmi B, podijeli s rπ → s = (P − B)/(rπ).",topic:"al",points:1,
  q:"Ako je rπs + B = P, čemu je jednako s?",
  opts:["P/(rπ) + B","(P − B)/(rπ + 1)","P/(rπ) − B","(P − B)/(rπ)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Iz rπs + B = P ⟹ rπs = P − B ⟹ s = (P − B)/(rπ).",
  steps:[
    {txt:"Polazno: rπs + B = P"},
    {txt:"Oduzmi B s obje strane: rπs = P − B"},
    {txt:"Podijeli s rπ: s = (P − B)/(rπ)"},
    {txt:"→ D = [FRAC:P − B|rπ]",final:true},{txt:"Diagnostika: A(P/(rπ+B)): B prešlo na krive strane. B(P/(rπ)−B): B nije u imenitelju kao cijela vrijednost. C(P/(rπ−B)): oduzeto B od nazivnika.",final:true,note:"diagnostika"},{txt:"Provjera: rπ·s=P−B → s=(P−B)/(rπ) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za izvlačenje nepoznanice obavi obratne operacije.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: B je dodano → oduzmi ga; s je pomnožen s rπ → podijeli s rπ.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za izvlačenje nepoznanice obavi obratne operacije.",
    "Konkretno: B je dodano → oduzmi ga; s je pomnožen s rπ → podijeli s rπ.",
    "Slijed: + B → −B; · rπ → ÷ rπ.",
    "Rezultat: s = (P − B)/(rπ) → D.",
    "Greška: dijeliti samo jedno (pa ostane (P−B)/r ili (P−B)/π)."
  ,"Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati."]
},
  {id:11,img:true,type:"mc",warn:"Pazi: najveća vrijednost = y tjemena (otvor prema dolje); očitaj sa slike.",img:true,topic:"kv",points:1,
  q:"Kolika je najveća vrijednost kvadratne funkcije čiji je graf prikazan na slici?",
  opts:["0","2","3","6"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Parabola je otvorena prema dolje (a < 0) → ima maksimum u tjemenu. Iz grafa: vrh paraboles dotiče visinu y = 2 (drugi grid iznad x-osi). Maksimalna vrijednost = 2.",
  steps:[
    {txt:"Parabola je otvorena prema dolje (vodeći koeficijent a < 0)"},
    {txt:"Funkcija s a < 0 ima maksimum u tjemenu (najvišoj točki)"},
    {txt:"Očitavamo y-koordinatu tjemena s grafa: vrh dotiče liniju y = 2"},
    {txt:"Najveća vrijednost funkcije = 2 → B",final:true},{txt:"Diagnostika: A(0): to su nulišta parabole, ne maksimum. C(3): y-presjek nije maksimum. D(6): netočno čitanje s grafa.",final:true,note:"diagnostika"},{txt:"Provjera: vrh parabole na grafu je na y=2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za kvadratnu funkciju f(x) = ax² + bx + c s a < 0, najveća vrijednost je y-koordinata tjemena.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: vrh paraboles na grafu se nalazi na visini y = 2 (na drugom grid-pravcu iznad x-osi).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za kvadratnu funkciju f(x) = ax² + bx + c s a < 0, najveća vrijednost je y-koordinata tjemena.",
    "Konkretno: vrh paraboles na grafu se nalazi na visini y = 2 (na drugom grid-pravcu iznad x-osi).",
    "Pitanje traži samo y_max (visinu vrha), ne x-koordinatu tjemena.",
    "Rezultat: y_max = 2 → B.",
    "Greška: ako je a > 0 (parabola otvorena gore), tjeme je MINIMUM, ne maksimum."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0."]
},
  {id:12,type:"mc",warn:"Pazi: (a⁵ − 2)² = a¹⁰ − 4a⁵ + 4 (kvadrat binoma).",topic:"al",points:1,
  q:"Čemu je jednak izraz (a⁵ − 2)²?",
  opts:["a¹⁰ − 4a⁵ + 4","a¹⁰ + 4a⁵ + 4","a⁷ + 4a⁵ + 4","a⁷ − 4a⁵ + 4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Kvadrat razlike: (a−b)² = a² − 2ab + b². Za a = a⁵, b = 2: (a⁵)² − 2·a⁵·2 + 2² = a¹⁰ − 4a⁵ + 4.",
  steps:[
    {txt:"Formula: (x − y)² = x² − 2xy + y²",note:"kvadrat razlike"},
    {txt:"Identificiraj: x = a⁵, y = 2"},
    {txt:"(a⁵)² − 2·a⁵·2 + 2² = a^(5·2) − 4a⁵ + 4"},
    {txt:"= a¹⁰ − 4a⁵ + 4 → A",final:true},{txt:"Diagnostika: B(a¹⁰+4a⁵+4): predznaci krivi (−2)²=+4 točno, ali −2·2·a⁵ mora biti −4a⁵. C/D(a⁷): eksponent kriva formula (5+5=10, ne 5+2=7).",final:true,note:"diagnostika"},{txt:"Provjera: (a⁵−2)²=a¹⁰−4a⁵+4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: (x − y)² = x² − 2xy + y² (NE x² − y² — to je razlika kvadrata).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: x = a⁵, pa x² = (a⁵)² = a¹⁰ (umnošci eksponenata).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: (x − y)² = x² − 2xy + y² (NE x² − y² — to je razlika kvadrata).",
    "Konkretno: x = a⁵, pa x² = (a⁵)² = a¹⁰ (umnošci eksponenata).",
    "Račun: 2xy = 2 · a⁵ · 2 = 4a⁵; y² = 4.",
    "Rezultat: a¹⁰ − 4a⁵ + 4 → A.",
    "Greška: (a⁵)² = a⁷ (zbrajanje eksponenata umjesto množenja) → distraktor C/D."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:13,type:"mc",warn:"Pazi: za x godina: 52 + x = (24 + x) + (18 + x); riješi po x.",topic:"al",points:2,
  q:"Otac je star 52 godine, a njegovi sinovi 24 i 18 godina. Za koliko će godina otac biti star koliko oba njegova sina zajedno?",
  opts:["5","7","10","12"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Za x godina: otac = 52+x, sinovi zajedno = 24+x + 18+x = 42+2x. 52+x = 42+2x → x = 10.",
  steps:[
    {txt:"Označi x = traženi broj godina"},
    {txt:"Za x godina: otac = 52 + x"},
    {txt:"Za x godina: zbroj godina sinova = (24 + x) + (18 + x) = 42 + 2x"},
    {txt:"Postavi jednadžbu: 52 + x = 42 + 2x"},
    {txt:"Riješi: 52 − 42 = 2x − x → x = 10"},
    {txt:"→ C = 10 godina",final:true},{txt:"Diagnostika: A(5): 52+5=57, sinovi=24+5+18+5=52≠57. B(7): 52+7=59, sinovi=56≠59. D(12): 52+12=64, sinovi=24+12+18+12=66≠64. Greška: nečešće zbrojiti samo jednog sina ili ne dodati x na obje strane.",final:true,note:"diagnostika"},{txt:"Provjera: 52+10=62; 24+10+18+10=62 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u zadacima sa starošću svaka osoba dobiva jednaki broj godina x.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: otac dobije +x; SVAKI sin dobije +x → zbroj sinova dobije +2x.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u zadacima sa starošću svaka osoba dobiva jednaki broj godina x.",
    "Konkretno: otac dobije +x; SVAKI sin dobije +x → zbroj sinova dobije +2x.",
    "Račun: 52 + x = 42 + 2x → x = 10.",
    "Provjera: za 10 god. otac = 62, sinovi 34 + 28 = 62 ✓.",
    "Greška: dodati x samo jedan put zbroju sinova (zaboraviti da svaki sin stari)."
  ,"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: provjeri svaku tvrdnju (oplošje, volumen, dijagonale) prema dimenzijama sa slike.",img:true,topic:"geom",points:2,
  q:"Za kvadar sa slike izračunato je oplošje O, volumen V, dijagonala d strane BCGF i prostorna dijagonala D. Što je pogrješno izračunato?",
  opts:["O = 192 cm²","V = 144 cm³","d = 5 cm","D = 12 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Dimenzije: a = 12, b = 4, c = 3 cm. O = 2(ab+bc+ca) = 192 ✓; V = abc = 144 ✓; d = √(b²+c²) = √25 = 5 ✓; D = √(a²+b²+c²) = √169 = 13 ≠ 12 ✗ → D je pogrješno.",
  steps:[
    {txt:"Iz slike: a = AB = 12 cm, b = BC = 4 cm, c = BF = 3 cm"},
    {txt:"O = 2(ab + bc + ca) = 2(12·4 + 4·3 + 3·12) = 2(48 + 12 + 36) = 2·96 = 192 cm² → A je točno ✓"},
    {txt:"V = a·b·c = 12·4·3 = 144 cm³ → B je točno ✓"},
    {txt:"d (dijagonala strane BCGF): strana je b × c → d = √(b² + c²) = √(16 + 9) = √25 = 5 cm → C je točno ✓"},
    {txt:"D (prostorna dijagonala): D = √(a² + b² + c²) = √(144 + 16 + 9) = √169 = 13 cm",note:"NE 12!"},
    {txt:"D = 12 cm je pogrješno → D",final:true},{txt:"Diagnostika: A(O=192): 2(12·4+4·3+12·3)=2(48+12+36)=192 ✓. B(V=144): 12·4·3=144 ✓. C(d=5): √(4²+3²)=5 ✓. D(D=12): trebalo je √(144+16+9)=√169=13≠12!",final:true,note:"diagnostika"},{txt:"Provjera: prostorna dijagonala =√(12²+4²+3²)=√169=13 cm≠12 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravila kvadra (dimenzije a, b, c): O = 2(ab+bc+ca); V = abc; prostorna D = √(a²+b²+c²); dijagonala strane = √(zbroj kvadrata druge dvije dimenzije).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: a=12, b=4, c=3 cm.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravila kvadra (dimenzije a, b, c): O = 2(ab+bc+ca); V = abc; prostorna D = √(a²+b²+c²); dijagonala strane = √(zbroj kvadrata druge dvije dimenzije).",
    "Konkretno: a=12, b=4, c=3 cm.",
    "Razlika: prostorna D = √169 = 13, ne 12 (12 bi vrijedila ako je samo √(a²+b²) = √160 ≈ 12,6 — niti to).",
    "Pogrješna izjava: D = 12 → odgovor D.",
    "Greška: zamijeniti dijagonalu strane s prostornom (zaboraviti treću dimenziju u korijenu)."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]
},
  {id:15,type:"mc",warn:"Pazi: faktoriziraj x² − 1 = (x − 1)(x + 1); zajednički nazivnik pa oduzmi.",topic:"al",points:2,
  q:"Koji je rezultat oduzimanja 2(x − 2)/(x² − 1) − 3/(x + 1), za x ≠ ±1?",
  opts:["1/(1 − x)","1/(x − 1)","1/(1 + x)","−1/(x + 1)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"x²−1 = (x−1)(x+1). Zajednički nazivnik: (x−1)(x+1). Brojnik: 2(x−2) − 3(x−1) = 2x−4 − 3x+3 = −x−1 = −(x+1). Razlomak: −(x+1)/[(x−1)(x+1)] = −1/(x−1) = 1/(1−x).",
  steps:[
    {txt:"Rastavi nazivnik: x² − 1 = (x − 1)(x + 1)"},
    {txt:"Zajednički nazivnik = (x − 1)(x + 1)"},
    {txt:"Drugi razlomak proširen: 3/(x+1) = 3(x−1)/[(x−1)(x+1)]"},
    {txt:"Brojnik nakon oduzimanja: 2(x − 2) − 3(x − 1) = 2x − 4 − 3x + 3 = −x − 1 = −(x + 1)"},
    {txt:"Razlomak: −(x + 1) / [(x − 1)(x + 1)] = −1/(x − 1) = 1/(1 − x)"},
    {txt:"→ A = [FRAC:1|1 − x]",final:true},{txt:"Diagnostika: B(1/(x−1)): predznak greška u brojevniku. C(1/(1+x)): krivi zajednički nazivnik. D(−1/(x+1)): krivi korak faktorizacije.",final:true,note:"diagnostika"},{txt:"Provjera: za x=0: [FRAC:2(−2)|−1]−[FRAC:3|1]=4−3=1; [FRAC:1|1−0]=1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo razlike kvadrata: x² − 1 = (x − 1)(x + 1).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: zajednički nazivnik je (x−1)(x+1); brojnike svedi na isti nazivnik.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo razlike kvadrata: x² − 1 = (x − 1)(x + 1).",
    "Konkretno: zajednički nazivnik je (x−1)(x+1); brojnike svedi na isti nazivnik.",
    "Račun: 2(x−2) − 3(x−1) = −(x+1) → krati se s (x+1) iz nazivnika.",
    "Rezultat: −1/(x−1) = 1/(1−x) → A (ekvivalentni zapisi razlikuju se samo predznakom u nazivniku).",
    "Greška: zaboraviti minus pri oduzimanju 3(x−1) (postaje + → krivi distraktor)."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:16,img:true,type:"mc",warn:"Pazi: kvadrat ima kutove 90°, jednakostraničan 60°; zbroji/oduzmi za α.",img:true,topic:"geom",points:2,
  q:"Nad stranicom DC kvadrata ABCD konstruiran je jednakostraničan trokut kao na slici. Kolika je mjera kuta α?",
  opts:["25°","30°","45°","60°"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Trokut EDA: ED = DA = a (oba stranica), kut EDA = 60° + 90° = 150°. Jednakokračan → kut DEA = (180° − 150°)/2 = 15°. Kut DEC = 60° (jednakostraničan). Kut α = AEC = DEC − DEA = 60° − 15° = 45°.",
  steps:[
    {txt:"Označi stranicu kvadrata s a. Tada je ED = DC = DA = a (sve tri su a)"},
    {txt:"Kut EDA = kut EDC + kut CDA = 60° + 90° = 150°",note:"trokut EDC ima kut 60°, kvadrat 90°"},
    {txt:"Trokut EDA je jednakokračan (ED = DA) → kut DEA = kut DAE = (180° − 150°)/2 = 15°"},
    {txt:"Kut DEC = 60° (vrh jednakostraničnog trokuta)"},
    {txt:"Kut α = kut AEC = kut DEC − kut DEA = 60° − 15° = 45°"},
    {txt:"→ C = 45°",final:true},{txt:"Diagnostika: A(25°): ne uzeti u obzir sva svojstva kvadrata. B(30°): konfuzija s jednakostraničnim kutom. D(60°): kut jednakostraničnog trokuta, ali ne α.",final:true,note:"diagnostika"},{txt:"Provjera: kut CEB u jednakostraničnom trokuta DCE je 60°; CE=DC=CB (strana kvadrata); kut ECA=45° ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: zbroj kutova trokuta = 180°; jednakostraničan trokut ima sve kutove 60°; jednakokračan ima dvije iste osnovice.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: trokut EDA dijeli stranicu DA s kvadratom i ED sa jednakostraničnim trokutom → ED = DA = a.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: zbroj kutova trokuta = 180°; jednakostraničan trokut ima sve kutove 60°; jednakokračan ima dvije iste osnovice.",
    "Konkretno: trokut EDA dijeli stranicu DA s kvadratom i ED sa jednakostraničnim trokutom → ED = DA = a.",
    "Račun: vanjski kut kod D je 150° → unutarnja kuta su (180−150)/2 = 15° svaki.",
    "Rezultat: α = 60° − 15° = 45° → C.",
    "Greška: računati α = 90° − 60° = 30° (gleda samo dva kuta direktno, propušta jednakokračni trokut)."
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."]
},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte (5/23) · (3/7 − 2,4) i rezultat zapišite u obliku razlomka.",
  sol:{ans:"−[FRAC:3|7]",alt:["-3/7","−3/7","-0,4286","-0,4286","-3 / 7","-15/35"]},
  solFormula:{pre:"−",frac:[["3","7"]]},
  exp:"3/7 − 2,4 = 3/7 − 12/5 = (15 − 84)/35 = −69/35. (5/23) · (−69/35) = −345/805 = −3/7.",
  steps:[
    {txt:"Pretvori 2,4 u razlomak: 2,4 = 24/10 = 12/5"},
    {txt:"3/7 − 12/5: zajednički nazivnik 35 → 15/35 − 84/35 = −69/35",note:"7·5=35"},
    {txt:"Pomnoži: (5/23) · (−69/35) = (5·(−69)) / (23·35) = −345/805"},
    {txt:"Skraćivanje: NZD(345, 805) = 115. −345/115 = −3, 805/115 = 7"},
    {txt:"= −3/7"},
    {txt:"→ −[FRAC:3|7]",final:true},
    {txt:"Provjera: −3/7 ≈ −0,4286; original (5/23)·(−69/35) = −345/805; 805/345 ≈ 2,333... = 7/3 ✓ → rezultat −3/7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za razliku razlomaka pretvori sve u razlomke pa svedi na zajednički nazivnik.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 2,4 = 12/5; 3/7 − 12/5 = (15 − 84)/35 = −69/35.",note:"intuicija",final:true},{txt:"Točan odgovor: −[FRAC:3|7] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za razliku razlomaka pretvori sve u razlomke pa svedi na zajednički nazivnik.",
    "Konkretno: 2,4 = 12/5; 3/7 − 12/5 = (15 − 84)/35 = −69/35.",
    "Račun množenja: (5/23) · (−69/35) → krati se 5 i 35 (ostaje 7), pa imamo (1/23)·(−69/7) = −69/161 = −3/7 (krati 23 i 69 = 23·3).",
    "Rezultat: −3/7 (negativan jer je 2,4 > 3/7, pa je razlika negativna).",
    "Greška: ignorirati predznak razlike (3/7 − 2,4 je negativno jer 2,4 > 3/7)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Tomislav je kupio 9 bilježnica. Platio je novčanicom od 50 kn. Prodavačica mu je vratila 28 kn i 40 lipa. Koliko stoji jedna bilježnica?",
  sol:{ans:"2,40 kn",alt:["2,40","2,40","2,4","2,4","2,40 kn","2,40 kn"]},
  solFormula:{pre:"2,40 kn"},
  exp:"Plaćeno za bilježnice: 50 − 28,40 = 21,60 kn. Cijena jedne: 21,60 / 9 = 2,40 kn.",
  steps:[
    {txt:"Iznos vraćen: 28 kn 40 lipa = 28,40 kn",note:"100 lipa = 1 kn"},
    {txt:"Iznos plaćen za 9 bilježnica: 50 − 28,40 = 21,60 kn"},
    {txt:"Cijena jedne bilježnice: 21,60 / 9 = 2,40 kn"},
    {txt:"→ 2,40 kn",final:true},
    {txt:"Provjera: 9 · 2,40 + 28,40 = 21,60 + 28,40 = 50,00 kn ✓ (poklapa se s ukupnim plaćanjem)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: cijena jedinice = ukupni iznos / broj jedinica.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: ukupno za bilježnice = ono što je plaćeno minus ono vraćeno.",note:"intuicija",final:true},{txt:"Točan odgovor: 2,40 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: cijena jedinice = ukupni iznos / broj jedinica.",
    "Konkretno: ukupno za bilježnice = ono što je plaćeno minus ono vraćeno.",
    "Račun: 50,00 − 28,40 = 21,60 → 21,60 / 9 = 2,40.",
    "Provjera: 9 · 2,40 = 21,60 + 28,40 = 50 ✓.",
    "Greška: zaboraviti pretvoriti 40 lipa u 0,40 kn (krivi vraćeni iznos = 28,04)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:19,type:"sa",topic:"br",points:1,
  q:"Koliko je vremena prošlo od 11. svibnja 2010. godine u 19 sati i 10 minuta do 12. svibnja 2010. godine u 8 sati?",
  sol:{ans:"12 sati i 50 minuta",alt:["12 sati 50 minuta","12 i 50","12:50","12h 50min","12 h 50 min"]},
  solFormula:{pre:"12 sati i 50 minuta"},
  exp:"Od 19:10 do 24:00 prošlo je 4 h 50 min. Od 24:00 do 8:00 prošlo je 8 h. Ukupno 12 h 50 min.",
  steps:[
    {txt:"Od 19:10 do 20:00 → 50 minuta"},
    {txt:"Od 20:00 do 24:00 → 4 sata"},
    {txt:"Od 24:00 (= 00:00 sljedećeg dana) do 8:00 → 8 sati"},
    {txt:"Ukupno: 50 min + 4 h + 8 h = 12 h 50 min",final:true},
    {txt:"Provjera: 19:10 + 12h 50min = 31:60 = 32:00 = 08:00 sljedeći dan ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kod prijelaza ponoći podijeli interval na dio do ponoći i dio nakon.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 19:10 → 24:00 = 4 h 50 min; 24:00 → 08:00 = 8 h.",note:"intuicija",final:true},{txt:"Točan odgovor: 12 sati i 50 minuta ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kod prijelaza ponoći podijeli interval na dio do ponoći i dio nakon.",
    "Konkretno: 19:10 → 24:00 = 4 h 50 min; 24:00 → 08:00 = 8 h.",
    "Račun: 4 h 50 min + 8 h = 12 h 50 min.",
    "Provjera: 19:10 + 12 h 50 min = 32:00 = sljedeći dan u 8:00 ✓.",
    "Greška: računati 8:00 − 19:10 = − 11:10 (negativna razlika; treba dodati 24 h za prelazak dana)."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:20,type:"sa",topic:"br",points:1,
  q:"U putničkome zrakoplovu ima 108 mjesta. Na svaka dva popunjena mjesta jedno je prazno. Koliko je putnika u zrakoplovu?",
  sol:{ans:"72",alt:["72","72 putnika"]},
  solFormula:{pre:"72 putnika"},
  exp:"Omjer popunjenih i praznih = 2 : 1. Od ukupno 3 dijela, 2 su popunjeni → 2/3 · 108 = 72 putnika.",
  steps:[
    {txt:"Omjer: na svaka 2 popunjena ide 1 prazno → 2 : 1"},
    {txt:"Ukupno dijelova: 2 + 1 = 3"},
    {txt:"Popunjeni dio = 2/3 ukupnih mjesta = 2/3 · 108 = 72"},
    {txt:"→ 72 putnika",final:true},
    {txt:"Provjera: 72 puni + 36 prazni = 108 ✓; omjer 72:36 = 2:1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kad je omjer dva tipa m : n, frakcija prvog tipa = m/(m+n) ukupnog.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: m = 2 (popunjena), n = 1 (prazna) → frakcija popunjenih = 2/3.",note:"intuicija",final:true},{txt:"Točan odgovor: 72 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kad je omjer dva tipa m : n, frakcija prvog tipa = m/(m+n) ukupnog.",
    "Konkretno: m = 2 (popunjena), n = 1 (prazna) → frakcija popunjenih = 2/3.",
    "Račun: 2/3 · 108 = 72.",
    "Provjera: prazna = 1/3 · 108 = 36; 72 + 36 = 108 ✓.",
    "Greška: dijeliti 108 / 2 = 54 (zaboraviti da omjer ima dva dijela popunjeno + jedan prazno)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:21,type:"sa",topic:"br",points:1,
  q:"Nazivnik razlomka je za 40 veći od brojnika. Skraćivanjem razlomka dobije se 2/7. Odredite broj s kojim je razlomak skraćen.",
  sol:{ans:"8",alt:["8","≈ 8"]},
  solFormula:{pre:"8"},
  exp:"Označi brojnik s n. Onda razlomak je n/(n+40). Skraćen daje 2/7 → n/(n+40) = 2/7 → 7n = 2(n+40) → 5n = 80 → n = 16. Razlomak 16/56 → krati se s NZD(16, 56) = 8.",
  steps:[
    {txt:"Označi: brojnik = n, nazivnik = n + 40"},
    {txt:"Skraćen razlomak: n/(n + 40) = 2/7"},
    {txt:"Unakrsno: 7n = 2(n + 40) → 7n = 2n + 80 → 5n = 80 → n = 16"},
    {txt:"Originalni razlomak: 16/56"},
    {txt:"Faktor skraćivanja = NZD(16, 56) = 8 (jer 16 = 8·2 i 56 = 8·7)"},
    {txt:"→ skraćen je brojem 8",final:true},
    {txt:"Provjera: 16/56 = 2/7 nakon skraćivanja s 8 (16÷8=2, 56÷8=7); 2/7 ne može se dalje skratiti ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: ako je a/b = c/d, onda a · d = b · c (unakrsno množenje).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: n/(n+40) = 2/7 → 7n = 2(n+40).",note:"intuicija",final:true},{txt:"Točan odgovor: 8 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: ako je a/b = c/d, onda a · d = b · c (unakrsno množenje).",
    "Konkretno: n/(n+40) = 2/7 → 7n = 2(n+40).",
    "Račun: 5n = 80 → n = 16; nazivnik 56; faktor = 16/2 = 8 (= 56/7).",
    "Provjera: 16/56 podijeljen sa 8/8 = 2/7 ✓.",
    "Greška: tražiti SAM brojnik (16) umjesto faktor skraćivanja (8) — pitanje traži faktor."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:22.1,type:"num",topic:"kv",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Zapiši manje rješenje x₁.",
  sol:{ans:"√7 − 1",alt:["√7-1","sqrt(7)-1","√7 − 1","sqrt7-1"]},
  solFormula:{pre:"x₁ = √7 − 1"},
  exp:"D = (2√7)² − 4·6 = 28 − 24 = 4. x = (2√7 ± √4)/2 = (2√7 ± 2)/2 = √7 ± 1. x₁ (manje) = √7 − 1.",
  steps:[
    {txt:"Kvadratna formula: x = (−b ± √D)/(2a), gdje je D = b² − 4ac"},
    {txt:"Identificiraj: a = 1, b = −2√7, c = 6"},
    {txt:"D = (−2√7)² − 4·1·6 = 4·7 − 24 = 28 − 24 = 4"},
    {txt:"x = (2√7 ± √4)/(2·1) = (2√7 ± 2)/2 = √7 ± 1"},
    {txt:"Manje rješenje: x₁ = √7 − 1",final:true},{txt:"Sažetak postupka: Pravilo: za jednadžbu ax² + bx + c = 0, x = (−b ± √(b² − 4ac))/(2a).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: a=1, b=−2√7, c=6 → D = 28 − 24 = 4 (savršen kvadrat).",note:"intuicija",final:true},{txt:"Manje od dva rješenja je √7 − 1 ≈ 1,65 (a √7 + 1 ≈ 3,65).",note:"verifikacija",final:true},{txt:"Točan odgovor: √7 − 1 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za jednadžbu ax² + bx + c = 0, x = (−b ± √(b² − 4ac))/(2a).",
    "Konkretno: a=1, b=−2√7, c=6 → D = 28 − 24 = 4 (savršen kvadrat).",
    "Račun: √D = 2 → rješenja = (2√7 ± 2)/2 = √7 ± 1.",
    "Manje od dva rješenja je √7 − 1 ≈ 1,65 (a √7 + 1 ≈ 3,65).",
    "Greška: pisati x = √7 − 2 (zaboraviti podijeliti s 2 u zadnjem koraku)."
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih)."]
},
  {id:22.2,type:"num",topic:"kv",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Zapiši veće rješenje x₂.",
  sol:{ans:"√7 + 1",alt:["√7+1","sqrt(7)+1","√7 + 1","sqrt7+1"]},
  solFormula:{pre:"x₂ = √7 + 1"},
  exp:"Iz kvadratne formule (vidi Q22,1): rješenja su √7 ± 1. Veće je √7 + 1.",
  steps:[
    {txt:"Iz Q22,1: x = √7 ± 1"},
    {txt:"Veće rješenje: x₂ = √7 + 1",final:true},{txt:"Provjera (Vièteove): x₁+x₂=(√7-1)+(√7+1)=2√7 ✓; x₁·x₂=(√7-1)(√7+1)=7-1=6 ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna jednadžba ima dva rješenja kad je D > 0.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: oba rješenja su √7 ± 1; veće je s plusom.",note:"intuicija",final:true},{txt:"Točan odgovor: √7 + 1 ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: kvadratna jednadžba ima dva rješenja kad je D > 0.",
    "Konkretno: oba rješenja su √7 ± 1; veće je s plusom.",
    "Provjera: (√7 + 1)² − 2√7·(√7 + 1) + 6 = (8 + 2√7) − (14 + 2√7) + 6 = 0 ✓.",
    "Vieta provjera: x₁ + x₂ = (√7 − 1) + (√7 + 1) = 2√7 = −b/a ✓.",
    "Greška: kvadrirati √7 i izgubiti egzaktan oblik (treba ostati √7, ne 2,646)."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0."]
},
  {id:23.1,type:"proof",graphType:"line",graphRef:{slope:0.5,intercept:0.5,pts:[[1,1],[3,2],[-1,0]]},graphRange:{xMin:-4,xMax:4,yMin:-2,yMax:4},topic:"fun",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"U koordinatnom sustavu nacrtajte pravac p.",
  sol:{ans:"Nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2], k=[FRAC:1|2], prolazi M(1,1) i (3,2).",graphType:"line",graphRef:{pts:[[1,1],[3,2]]},ex:"Nagib pravca AB: k = (8 − 4)/(5 − (−3)) = 4/8 = 1/2. Pravac p ima isti nagib (paralelan). Točke za crtanje: M(1, 1), (3, 2), (−1, 0).",alt:["Nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2], k=[FRAC:1|2], prolazi M(1,1) i (3,2).","Nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2]. k=[FRAC:1|2]. prolazi M(1.1) i (3.2).","Nacrtano.Pravacp:y=[FRAC:1|2]x+[FRAC:1|2],k=[FRAC:1|2],prolaziM(1,1)i(3,2).","nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2], k=[FRAC:1|2], prolazi M(1,1) i (3,2).","≈ Nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2], k=[FRAC:1|2], prolazi M(1,1) i (3,2)."]},
  steps:[
    {txt:"Nagib pravca AB: k_AB = (y_B − y_A)/(x_B − x_A) = (8 − 4)/(5 − (−3)) = 4/8 = 1/2"},
    {txt:"Pravac p je paralelan s AB → isti nagib: k_p = 1/2"},
    {txt:"Pravac p prolazi M(1, 1) → koristi y − y_M = k(x − x_M)"},
    {txt:"y − 1 = (x − 1)/2 → y = x/2 + 1/2"},
    {txt:"Točke za crtanje: M(1, 1), (3, 2), (−1, 0)"},
    {txt:"→ Nacrtaj pravac kroz te tri točke",final:true},
    {txt:"Provjera: M(1,1) → 1 = 1/2 + 1/2 = 1 ✓; (3,2) → 2 = 3/2 + 1/2 = 2 ✓; (−1,0) → 0 = −1/2 + 1/2 = 0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: paralelni pravci imaju isti nagib (k₁ = k₂).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: k_AB = 4/8 = 1/2 → k_p = 1/2.",note:"intuicija",final:true},{txt:"Točan odgovor: Nacrtano. Pravac p: y = [FRAC:1|2]x + [FRAC:1|2], k=[FRAC:1|2], prolazi M(1,1) i ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: paralelni pravci imaju isti nagib (k₁ = k₂).",
    "Konkretno: k_AB = 4/8 = 1/2 → k_p = 1/2.",
    "Račun: točka-nagib oblik s M(1,1) i k=1/2 daje y = x/2 + 1/2.",
    "Točke za crtanje: M, (3, 2), (−1, 0) — najmanje 2, idealno 3 za točnost.",
    "Greška: koristiti drugačiji nagib (npr. k = −2 = okomiti, ne paralelni)."
  ,"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."]
},
  {id:23.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Napišite jednadžbu pravca p.",
  sol:{ans:"y = [FRAC:x|2] + [FRAC:1|2]",alt:["y=x/2+1/2","y = x/2 + 1/2","y=(x+1)/2","y = (x+1)/2","y=0,5x+0,5","y=0,5x+0,5","2y = x + 1","2y=x+1"]},
  solFormula:{pre:"y = x/2 + 1/2"},
  exp:"Nagib k = 1/2 (paralelan s AB). Iz uvjeta y − 1 = (x − 1)/2 → y = x/2 + 1/2.",
  steps:[
    {txt:"Nagib pravca p (iz Q23,1): k = 1/2"},
    {txt:"Eksplicitni oblik: y = kx + b",note:"b = odsječak na y-osi"},
    {txt:"Uvrsti M(1, 1): 1 = (1/2)·1 + b → b = 1 − 1/2 = 1/2"},
    {txt:"Jednadžba: y = ([FRAC:1|2])x + [FRAC:1|2]",final:true},
    {txt:"Provjera: za M(1, 1) → y = 1/2 + 1/2 = 1 ✓; nagib k = 1/2; y-sjecište b = 1/2 (kad x = 0, y = 1/2)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: eksplicitni oblik pravca y = kx + b; b se računa iz poznate točke.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: M(1, 1) → 1 = 1/2 + b → b = 1/2.",note:"intuicija",final:true},{txt:"Točan odgovor: y = [FRAC:x|2] + [FRAC:1|2] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: eksplicitni oblik pravca y = kx + b; b se računa iz poznate točke.",
    "Konkretno: M(1, 1) → 1 = 1/2 + b → b = 1/2.",
    "Račun: y = x/2 + 1/2 (ili ekvivalentno 2y = x + 1).",
    "NCVVO napomena: NE priznaje se y = (1/2)·(x − 1) — to je point-slope, treba eksplicitno y = kx + b.",
    "Greška: izračunati b = 1 (zaboraviti pomnožiti k s x_M prije oduzimanja)."
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
},
  {id:24.1,img:true,type:"sa",img:true,topic:"br",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliko kuna (HRK) vrijedi 352,74 USD?",
  sol:{ans:"2 019,65 kn",alt:["2019,65","2019,65","2 019,65","2019,65 kn","2 019,65"]},
  solFormula:{pre:"2 019,65 kn"},
  exp:"HRK = USD · tečaj = 352,74 · 5,7256 ≈ 2 019,65 kn.",
  steps:[
    {txt:"Tečaj: 1 USD = 5,7256 HRK"},
    {txt:"Pretvorba USD → HRK: pomnoži broj USD s tečajem"},
    {txt:"352,74 · 5,7256 = 2 019,65... HRK"},
    {txt:"→ 2 019,65 kn",final:true},
    {txt:"Provjera: 2 019,65 / 5,7256 ≈ 352,74 USD ✓ (inverzna pretvorba potvrđuje)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: HRK = USD · (tečaj USD/HRK).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 352,74 USD · 5,7256 = 2 019,65 (zaokruženo na dvije decimale).",note:"intuicija",final:true},{txt:"Točan odgovor: 2 019,65 kn ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: HRK = USD · (tečaj USD/HRK).",
    "Konkretno: 352,74 USD · 5,7256 = 2 019,65 (zaokruženo na dvije decimale).",
    "Račun: 352,74 · 5,7256 ≈ 350 · 5,7 = 1 995 + korekcija ≈ 2 020.",
    "NCVVO priznaje rješenje iz intervala [2 019,6; 2 019,7].",
    "Greška: dijeliti umjesto množiti (USD/tečaj daje krivi broj — to bi bilo HRK→USD)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:24.2,img:true,type:"sa",img:true,topic:"br",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Koliko dolara (USD) vrijedi 1 000 HRK?",
  sol:{ans:"174,65 USD",alt:["174,65","174,65","174,65 USD","174,65 USD"]},
  solFormula:{pre:"174,65 USD"},
  exp:"USD = HRK / tečaj = 1 000 / 5,7256 ≈ 174,65 USD.",
  steps:[
    {txt:"Tečaj: 1 USD = 5,7256 HRK ⟺ 1 HRK = 1/5,7256 USD"},
    {txt:"Pretvorba HRK → USD: podijeli broj HRK s tečajem"},
    {txt:"1 000 / 5,7256 ≈ 174,65 USD"},
    {txt:"→ 174,65 USD",final:true},
    {txt:"Provjera: 174,65 · 5,7256 ≈ 1000,00 HRK ✓ (inverzna pretvorba potvrđuje)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: USD = HRK / (tečaj USD/HRK) — obrnuta operacija od Q24,1.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 1 000 / 5,7256 = ?",note:"intuicija",final:true},{txt:"Točan odgovor: 174,65 USD ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: USD = HRK / (tečaj USD/HRK) — obrnuta operacija od Q24,1.",
    "Konkretno: 1 000 / 5,7256 = ?",
    "Račun: 1 000 / 5,7256 ≈ 174,65 (provjeri: 174,65 · 5,7256 ≈ 1 000 ✓).",
    "NCVVO priznaje rješenje iz intervala [174,6; 174,7].",
    "Greška: pomnožiti umjesto dijeliti (1 000 · 5,7256 = 5 725,6 — distraktor)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Riješite jednadžbu 3(2 − x) = 8x.",
  sol:{ans:"x = [FRAC:6|11]",alt:["x=6/11","6/11","x = 6/11","0,5454","0,5454"]},
  solFormula:{pre:"x = ",frac:[["6","11"]]},
  exp:"Razvij: 6 − 3x = 8x → 6 = 11x → x = 6/11.",
  steps:[
    {txt:"3(2 − x) = 8x"},
    {txt:"Razvij lijevu stranu: 6 − 3x = 8x"},
    {txt:"Premjesti x na desnu: 6 = 8x + 3x = 11x"},
    {txt:"Podijeli s 11: x = 6/11"},
    {txt:"→ x = [FRAC:6|11]",final:true},
    {txt:"Provjera za x = 6/11: 3·(2 − 6/11) = 3·(16/11) = 48/11; 8·(6/11) = 48/11 ✓ (LH = RH)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za linearnu jednadžbu razdijeli (distribucija), grupiraj x na jednu stranu, podijeli s koeficijentom.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 3(2−x) = 6 − 3x; ne pomiješaj predznake.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:6|11] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za linearnu jednadžbu razdijeli (distribucija), grupiraj x na jednu stranu, podijeli s koeficijentom.",
    "Konkretno: 3(2−x) = 6 − 3x; ne pomiješaj predznake.",
    "Račun: 6 = 11x → x = 6/11 ≈ 0,545.",
    "NCVVO ne priznaje 0,5 kao rješenje (mora biti razlomak ili točnija decimala).",
    "Greška: distribucija pomiješa predznak (3·(−x) = −3x, NE +3x)."
  ,"Provjera supstitucijom: uvrsti x = x = [FRAC:6|11] u L = D; rezultati se moraju podudarati."]
},
  {id:25.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite nejednadžbu (5x − 2)/5 − (3x)/4 ≤ 1.",
  sol:{ans:"x ≤ [FRAC:28|5]",alt:["x≤28/5","x ≤ 28/5","x≤5,6","x ≤ 5,6","5,6","28/5"]},
  solFormula:{pre:"x ≤ ",frac:[["28","5"]]},
  exp:"Pomnoži s 20 (NZV od 5 i 4): 4(5x−2) − 5·3x ≤ 20 → 20x − 8 − 15x ≤ 20 → 5x ≤ 28 → x ≤ 28/5.",
  steps:[
    {txt:"(5x − 2)/5 − 3x/4 ≤ 1"},
    {txt:"Pomnoži cijelu nejednadžbu s NZV(5, 4) = 20",note:"riješava se razlomaka"},
    {txt:"4(5x − 2) − 5·(3x) ≤ 20"},
    {txt:"20x − 8 − 15x ≤ 20"},
    {txt:"5x ≤ 28",note:"dodaj 8 obje strane"},
    {txt:"x ≤ [FRAC:28|5] = 5,6",final:true},
    {txt:"Provjera za x = 5 (< 5,6): 4(5·5−2) − 5·15 = 4·23 − 75 = 92 − 75 = 17 ≤ 20 ✓; za x = 6 (> 5,6): 4·28 − 90 = 22 ≤ 20? NE ✓ (granica realna)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: nejednadžba s razlomcima — pomnoži cijelu s NZV nazivnika (smjer ostaje isti za pozitivan množitelj).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: NZV(5, 4) = 20 → svaki razlomak postaje cijeli.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≤ [FRAC:28|5] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: nejednadžba s razlomcima — pomnoži cijelu s NZV nazivnika (smjer ostaje isti za pozitivan množitelj).",
    "Konkretno: NZV(5, 4) = 20 → svaki razlomak postaje cijeli.",
    "Račun: 20x − 8 − 15x ≤ 20 → 5x ≤ 28 → x ≤ 28/5.",
    "Geometrijski: rješenje je interval ⟨−∞, 28/5].",
    "Greška: zaboraviti zagrade pri množenju s 20 (npr. 5·3x/4 ≠ 15x ako se ne uračuna 5)."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Koliko je centimetara 40 inča?",
  sol:{ans:"101,6 cm = [FRAC:508|5] cm",alt:["101,6","101,6","508/5","101,6 cm","508/5 cm"]},
  solFormula:{pre:"101,6 cm"},
  exp:"y = 2,54 · 40 = 101,6 cm = 508/5 cm.",
  steps:[
    {txt:"Formula: y = 2,54 · x (y u cm, x u inch)"},
    {txt:"Uvrsti x = 40: y = 2,54 · 40"},
    {txt:"y = 101,6 cm"},
    {txt:"U obliku razlomka: 101,6 = 1016/10 = 508/5 cm",note:"NCVVO priznaje oba"},
    {txt:"→ 101,6 cm = [FRAC:508|5] cm",final:true},
    {txt:"Provjera: 508/5 = 101,6; 2,54 · 40 = 101,6 cm ✓ (40 inča · 2,54 cm/inč = direktan račun)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za pretvorbu jedinica koristi linearnu formulu y = k·x.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: k = 2,54 (1 inch = 2,54 cm); 40 inč × 2,54 = 101,6 cm.",note:"intuicija",final:true},{txt:"Točan odgovor: 101,6 cm = [FRAC:508|5] cm ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za pretvorbu jedinica koristi linearnu formulu y = k·x.",
    "Konkretno: k = 2,54 (1 inch = 2,54 cm); 40 inč × 2,54 = 101,6 cm.",
    "Račun: 2,54 · 40 = 2,54 · 4 · 10 = 10,16 · 10 = 101,6.",
    "Razlomak: 101,6 = 1016/10, krati s 2 → 508/5.",
    "Greška: zaokružiti na 102 (NCVVO eksplicitno NE priznaje 102 — traži se točan rezultat)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]
},
  {id:26.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko je inča 1 cm?",
  sol:{ans:"[FRAC:50|127] ≈ 0,3937 inča",alt:["0,394","0,394","50/127","0,3937","0,3937","50/127 inča"]},
  solFormula:{pre:"50/127 ≈ 0,3937 inča"},
  exp:"Iz y = 2,54·x i y = 1: 1 = 2,54·x → x = 1/2,54 = 100/254 = 50/127 ≈ 0,3937 inča.",
  steps:[
    {txt:"Formula: y = 2,54 · x; ovdje y = 1 cm"},
    {txt:"1 = 2,54 · x → x = 1/2,54"},
    {txt:"Pretvori: 1/2,54 = 100/254 (množenjem s 100/100)"},
    {txt:"Krati s NZD(100, 254) = 2: 100/254 = 50/127"},
    {txt:"Decimalno: 50/127 ≈ 0,3937"},
    {txt:"→ [FRAC:50|127] ≈ 0,3937 inča",final:true},
    {txt:"Provjera: 0,3937 inča · 2,54 cm/inč = 1,0000 cm ✓ (inverzna pretvorba)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kad iz y = k·x izvlačimo x, dijeli y s k → x = y/k.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: x = 1/2,54 — pretvori decimalu u razlomak prije skraćivanja.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:50|127] ≈ 0,3937 inča ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kad iz y = k·x izvlačimo x, dijeli y s k → x = y/k.",
    "Konkretno: x = 1/2,54 — pretvori decimalu u razlomak prije skraćivanja.",
    "Račun: 1/2,54 = 100/254 = 50/127 ≈ 0,3937.",
    "NCVVO priznaje rješenje iz intervala [0,39; 0,394] ALI eksplicitno NE priznaje samo zapis 1/2,54 (treba skraćeno ili decimalno).",
    "Greška: ostaviti odgovor kao 1/2,54 — NCVVO traži prikaz bez decimale u nazivniku."
  ,"Provjera supstitucijom: uvrsti x = [FRAC:50|127] ≈ 0,3937 inča u L = D; rezultati se moraju podudarati."]
},
  {id:27.1,img:true,type:"sa",img:true,topic:"anal",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Koje koordinate ima točka J?",
  sol:{ans:"J(−10, −20)",alt:["J(-10,-20)","(-10,-20)","J(-10, -20)","(-10, -20)","-10,-20"]},
  solFormula:{pre:"J(−10, −20)"},
  exp:"Iz koord. sustava: točka J je 1 jedinicu mreže lijevo od y-osi i 2 jedinice ispod x-osi. Skala: 1 jedinica = 10 m → J(−10, −20).",
  steps:[
    {txt:"Identificiraj poziciju točke J na grafu: 1 jedinicu lijevo od y-osi, 2 jedinice ispod x-osi"},
    {txt:"Predznaci: lijevo → x < 0; ispod → y < 0"},
    {txt:"Skala: 1 jedinica mreže = 10 m"},
    {txt:"x_J = −1 · 10 = −10 m;  y_J = −2 · 10 = −20 m"},
    {txt:"→ J(−10, −20)",final:true},
    {txt:"Provjera: J u 3. kvadrantu (x<0, y<0) — odgovara očitanju lijevo i ispod ishodišta ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: koordinata točke = (broj jedinica horizontalno, broj jedinica vertikalno) · skala.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: J je u 3. kvadrantu (lijevo, dolje) → oba predznaka negativna.",note:"intuicija",final:true},{txt:"Točan odgovor: J(−10, −20) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: koordinata točke = (broj jedinica horizontalno, broj jedinica vertikalno) · skala.",
    "Konkretno: J je u 3. kvadrantu (lijevo, dolje) → oba predznaka negativna.",
    "Račun: skala 10 m/jedinica → −1·10 = −10 i −2·10 = −20.",
    "Provjera s NCVVO ključem: J(−10, −20) ✓.",
    "Greška: zaboraviti predznak za vertikalu ili horizontalu (mješanje kvadranata)."
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
},
  {id:27.2,img:true,type:"sa",img:true,topic:"anal",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Koliko metara iznosi najkraći put od točke N do točke J?",
  sol:{ans:"√2600 = 10√26 m ≈ 50,99 m",alt:["10√26","√2600","50,99","50,99","10*sqrt(26)","50,99 m","50,9901","50,9901"]},
  solFormula:{pre:"10√26 ≈ 50,99 m"},
  exp:"N(−20, 30), J(−10, −20). |NJ| = √[(Δx)² + (Δy)²] = √[(−10−(−20))² + (−20−30)²] = √[10² + (−50)²] = √[100 + 2 500] = √2 600 = 10√26 ≈ 50,99 m.",
  steps:[
    {txt:"Pravilo: udaljenost dvije točke u koord. sustavu: |PQ| = √[(x_Q − x_P)² + (y_Q − y_P)²]"},
    {txt:"Iz slike (skala: 1 podjela = 10 m): N(−20, 30), J(−10, −20)"},
    {txt:"Δx = x_J − x_N = −10 − (−20) = 10 m"},
    {txt:"Δy = y_J − y_N = −20 − 30 = −50 m"},
    {txt:"|NJ| = √[(Δx)² + (Δy)²] = √[10² + (−50)²] = √[100 + 2 500] = √2 600"},
    {txt:"Pojednostavi: √2 600 = √(100 · 26) = 10√26 ≈ 10 · 5,099 = 50,99 m"},
    {txt:"→ √2 600 = 10√26 ≈ 50,99 m",final:true},
    {txt:"Provjera: (10√26)² = 100 · 26 = 2 600 ✓; numerički: 50,99² ≈ 2 599,98 ≈ 2 600 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: euklidska udaljenost dvije točke = √[(Δx)² + (Δy)²]; predznak razlika je nebitan jer se kvadrira.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: N(−20, 30), J(−10, −20) → Δx = 10 m (J je 10 m istočno od N), Δy = −50 m (J je 50 m južno).",note:"intuicija",final:true},{txt:"Točan odgovor: √2600 = 10√26 m ≈ 50,99 m ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: euklidska udaljenost dvije točke = √[(Δx)² + (Δy)²]; predznak razlika je nebitan jer se kvadrira.",
    "Konkretno: N(−20, 30), J(−10, −20) → Δx = 10 m (J je 10 m istočno od N), Δy = −50 m (J je 50 m južno).",
    "Račun: (Δx)² + (Δy)² = 100 + 2 500 = 2 600; √2 600 = √(100 · 26) = 10√26.",
    "Decimalno: √26 ≈ 5,099 → 10√26 ≈ 50,99 m. NCVVO ne priznaje samo „50 m“ (potreban je točniji rezultat).",
    "Greška: zaokružiti √26 na 5 i dobiti 50 m (ključ izričito ne priznaje 50 m — treba barem 2 decimale)."
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]
},
  {id:27.3,img:true,type:"sa",img:true,topic:"geom",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Kolika je površina dijela igrališta određenoga točkama J, M i N?",
  sol:{ans:"1 000 m²",alt:["1000","1 000","1000 m²","1 000 m²"]},
  solFormula:{pre:"1 000 m²"},
  exp:"Trokut JMN: N(−20, 30) i M(20, 30) imaju istu y → MN je horizontalna stranica duljine |20 − (−20)| = 40 m. Visina iz J(−10, −20) na pravac y = 30 = |30 − (−20)| = 50 m. P = ½ · 40 · 50 = 1 000 m².",
  steps:[
    {txt:"Pravilo: P trokuta = ½ · osnova · visina (visina ⊥ osnovi)"},
    {txt:"Odaberi osnovu: N(−20, 30) i M(20, 30) imaju istu y = 30 → MN je horizontalna"},
    {txt:"|MN| = |x_M − x_N| = |20 − (−20)| = 40 m"},
    {txt:"Visina iz J na pravac y = 30: h = |y_J − 30| = |−20 − 30| = 50 m",note:"vertikalna udaljenost"},
    {txt:"P = ½ · 40 · 50 = ½ · 2 000 = 1 000 m²"},
    {txt:"→ 1 000 m²",final:true},
    {txt:"Provjera: trokut s bazom 40 m i visinom 50 m → P = (1/2)·b·h = 1000 m² ✓; razumna veličina za zemljište",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za trokut s vodoravnom (horizontalnom) stranicom, visina je vertikalna udaljenost trećeg vrha od te stranice.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: NM je vodoravna na y = 30 (jer i N i M imaju y = 30); J je na y = −20 → h = 50 m.",note:"intuicija",final:true},{txt:"Točan odgovor: 1 000 m² ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za trokut s vodoravnom (horizontalnom) stranicom, visina je vertikalna udaljenost trećeg vrha od te stranice.",
    "Konkretno: NM je vodoravna na y = 30 (jer i N i M imaju y = 30); J je na y = −20 → h = 50 m.",
    "Račun: ½ · 40 · 50 = ½ · 2 000 = 1 000 m².",
    "Provjera (Šuhova formula): P = ½·|x_N(y_M − y_J) + x_M(y_J − y_N) + x_J(y_N − y_M)| = ½·|(−20)·50 + 20·(−50) + (−10)·0| = ½·|−1 000 − 1 000| = 1 000 ✓.",
    "Greška: koristiti pogrešnu osnovu (npr. NJ ili JM) — rad bi bio kompliciraniji jer h ne bi bila jasno vidljiva."
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."]
},
  {id:28.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Koliko se najviše bodova moglo osvojiti na testu?",
  sol:{ans:"600",alt:["600","600 bodova"]},
  solFormula:{pre:"600 bodova"},
  exp:"Maksimum: svih 40 pitanja točno → 40 · 15 = 600 bodova.",
  steps:[
    {txt:"Pravilo: maksimum bodova = (broj pitanja) · (bodovi po točnom odgovoru)"},
    {txt:"Broj pitanja = 40; bodovi po točnom = 15"},
    {txt:"Maksimum = 40 · 15 = 600"},
    {txt:"→ 600 bodova",final:true},
    {txt:"Provjera: 40 pitanja · 15 b/pitanje = 600 bodova ✓; ako sva odgovori, max",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: maksimum se postiže kada su SVI odgovori točni (nema oduzimanja).",note:"postupak",final:true},{txt:"Intuicija: Konkretno: 40 točnih odgovora · 15 bodova = 600 bodova.",note:"intuicija",final:true},{txt:"Točan odgovor: 600 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: maksimum se postiže kada su SVI odgovori točni (nema oduzimanja).",
    "Konkretno: 40 točnih odgovora · 15 bodova = 600 bodova.",
    "Negativni bodovi ne ulaze u maksimum jer u idealnom slučaju nema netočnih.",
    "Rezultat: 600 (gornja granica skale).",
    "Greška: oduzeti potencijalne netočne (no, maksimum znači NULA netočnih)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]
},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Na koliko je pitanja učenik točno odgovorio?",
  sol:{ans:"24",alt:["24","24 pitanja"]},
  solFormula:{pre:"24 pitanja"},
  exp:"Označi t = broj točnih, (40 − t) = broj netočnih. 15t − 5(40 − t) = 280 → 15t − 200 + 5t = 280 → 20t = 480 → t = 24.",
  steps:[
    {txt:"Označi t = broj točnih odgovora; netočnih je tada (40 − t)"},
    {txt:"Bodovi: 15t (za točne) − 5(40 − t) (za netočne) = 280"},
    {txt:"Razvij: 15t − 200 + 5t = 280"},
    {txt:"Saberi: 20t − 200 = 280 → 20t = 480"},
    {txt:"Podijeli: t = 480/20 = 24"},
    {txt:"→ 24 pitanja",final:true},
    {txt:"Provjera: 24 točna · 15 + 16 netočna · 5 = 360 + 80 = 440? Hmm — provjeri formulu; ili 24·15 + (40−24)·5 = 360 + 80 = 440 ≠ 280; možda 24·15 − 16·5 = 360 − 80 = 280 ✓ (netočni se ODUZIMAJU)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: postavi varijablu za nepoznato (broj točnih), izrazi sve ostalo preko nje, formiraj jednadžbu iz uvjeta.",note:"postupak",final:true},{txt:"Intuicija: Konkretno: t točnih + (40 − t) netočnih = 40 ukupno; 15t − 5(40 − t) = 280.",note:"intuicija",final:true},{txt:"Točan odgovor: 24 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: postavi varijablu za nepoznato (broj točnih), izrazi sve ostalo preko nje, formiraj jednadžbu iz uvjeta.",
    "Konkretno: t točnih + (40 − t) netočnih = 40 ukupno; 15t − 5(40 − t) = 280.",
    "Račun: 20t = 480 → t = 24.",
    "Provjera: 24 točnih · 15 = 360; 16 netočnih · (−5) = −80; 360 − 80 = 280 ✓.",
    "Greška: zaboraviti minus pri 5(40 − t) (postaje +5(40 − t) → krivi t = 12)."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
}
];

export const qImages = {
  "2011_ljeto_B__11": () => e(SvgZad11_2011LB, null),
  "2011_ljeto_B__14": () => e(SvgZad14_2011LB, null),
  "2011_ljeto_B__16": () => e(SvgZad16_2011LB, null),
  "2011_ljeto_B__27.1": () => e(SvgZad27_2011LB, null),
  "2011_ljeto_B__27.2": () => e(SvgZad27_2011LB, null),
  "2011_ljeto_B__27.3": () => e(SvgZad27_2011LB, null),
  "2011_ljeto_B__24.1": () => e(SvgTabl24_2011LB, null),
  "2011_ljeto_B__24.2": () => e(SvgTabl24_2011LB, null),
};
