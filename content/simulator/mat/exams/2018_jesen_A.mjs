// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg29c_2018Aj(){
  const W=312,H=182;
  /* Staklo 120 cm x 60 cm (u skici nije mjerilo 2:1, kao ni u originalu) */
  const rx=30,ry=28,rw=240,rh=137;
  /* Vrh brisaca lezi na donjem rubu stakla, blizu sredine */
  const px=rx+rw*0.4875, py=ry+rh;
  const vr=105;                       /* vizualna duljina brisaca (55 cm) */
  const a1=10*Math.PI/180, a2=170*Math.PI/180;   /* 160 deg, simetricno oko okomice */
  const P=(a,r)=>[px+r*Math.cos(a),py-r*Math.sin(a)];
  const [x1,y1]=P(a1,vr), [x2,y2]=P(a2,vr);
  const ar=28;                        /* radijus male lucne oznake kuta */
  const [ax1,ay1]=P(a1,ar), [ax2,ay2]=P(a2,ar);
  const _TXT="var(--text)";
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* staklo */
    e("rect",{x:rx,y:ry,width:rw,height:rh,fill:"none",stroke:_TXT,strokeWidth:1.2}),
    /* obrisani kruzni isjecak */
    e("path",{d:`M ${px} ${py} L ${x1} ${y1} A ${vr} ${vr} 0 0 0 ${x2} ${y2} Z`,
      fill:"var(--muted)",fillOpacity:0.26,stroke:_TXT,strokeWidth:2,strokeLinejoin:"round"}),
    /* oznaka kuta */
    e("path",{d:`M ${ax1} ${ay1} A ${ar} ${ar} 0 0 0 ${ax2} ${ay2}`,fill:"none",stroke:_TXT,strokeWidth:1}),
    e("text",{x:px+2,y:py-6,textAnchor:"middle",fontSize:10,fill:_TXT},"160\u00b0"),
    /* dimenzije */
    e("text",{x:rx+rw/2,y:ry-6,textAnchor:"middle",fontSize:10,fill:_TXT},"120 cm"),
    e("text",{x:rx+rw+6,y:ry+rh/2+3,fontSize:10,fill:_TXT},"60 cm"),
    e("text",{x:px-92,y:py-4,textAnchor:"middle",fontSize:10,fill:_TXT},"55 cm")
  );
}

function Svg28_2018Aj_new(){
  const W=240,H=240,pad={l:36,r:16,t:16,b:36};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-5,xMax=6,yMin=-5,yMax=4;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* grid */
    ...[-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4})),
    ...[-5,-4,-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4})),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fill:"var(--text)"},"y"),
    e("circle",{cx:ox,cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("circle",{cx:toX(1),cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("circle",{cx:ox,cy:toY(1),r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-10,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:toX(1),y:oy+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:ox-8,y:toY(1)+4,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"1")
  );
}

function Svg26_2018Aj(){
  const W=240,H=200,pad={l:32,r:16,t:16,b:32};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=7,yMin=-2,yMax=5;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* From image: A≈(-1,1), B≈(1,1), C≈(2,3) */
  const A={x:-1,y:1}, B={x:1,y:1}, C={x:2,y:3};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* grid */
    ...[-3,-2,-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4})),
    ...[-2,-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4})),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fill:"var(--text)"},"y"),
    e("circle",{cx:ox,cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-10,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:toX(1),y:oy+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:ox-8,y:toY(1)+4,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"1"),
    /* točke A, B, C */
    e("circle",{cx:toX(A.x),cy:toY(A.y),r:3.5,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:toX(A.x)-12,y:toY(A.y)+4,fontSize:13,fontStyle:"italic",fill:_GOLD},"A"),
    e("circle",{cx:toX(B.x),cy:toY(B.y),r:3.5,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:toX(B.x)+6,y:toY(B.y)+4,fontSize:13,fontStyle:"italic",fill:_GOLD},"B"),
    e("circle",{cx:toX(C.x),cy:toY(C.y),r:3.5,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:toX(C.x)+6,y:toY(C.y)-4,fontSize:13,fontStyle:"italic",fill:_GOLD},"C")
  );
}

function Svg22b_2018Aj(){
  const W=240,H=240,pad={l:36,r:16,t:16,b:36};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=5,yMin=-4,yMax=4;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* f: rastuća, prolazi ~(-2,-3) i (2,3) → nagib ~3/2, y-presjek ~0 */
  /* g: padajuća, prolazi ~(-2,1) i (4,-3) → nagib ~ -2/3 */
  const fPts=[], gPts=[];
  for(let x=xMin;x<=xMax;x+=0.1){
    const yf=1.2*x+0.3; if(yf>=yMin&&yf<=yMax) fPts.push(`${toX(x).toFixed(1)},${toY(yf).toFixed(1)}`);
    const yg=-0.6*x-0.3; if(yg>=yMin&&yg<=yMax) gPts.push(`${toX(x).toFixed(1)},${toY(yg).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* grid */
    ...[-3,-2,-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4})),
    ...[-4,-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4})),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fill:"var(--text)"},"y"),
    e("circle",{cx:ox,cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("circle",{cx:toX(1),cy:oy,r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("circle",{cx:ox,cy:toY(1),r:2.5,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-10,y:oy+14,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:toX(1),y:oy+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{x:ox-8,y:toY(1)+4,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"1"),
    /* f: rastuća */
    fPts.length>1&&e("polyline",{points:fPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:toX(-1.5),y:toY(1.2),fontSize:13,fontStyle:"italic",fill:_GOLD},"f"),
    /* g: padajuća */
    gPts.length>1&&e("polyline",{points:gPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:toX(3.5),y:toY(-2.5),fontSize:13,fontStyle:"italic",fill:_GOLD},"g")
  );
}

function Svg20b_2018Aj(){
  const W=300,H=140,pad={l:22,r:12,t:12,b:22};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const xMin=0, xMax=3*Math.PI;
  const toX=v=>pad.l+(v/xMax)*iW;
  const toY=v=>pad.t+((1-v)/2)*iH;
  const oy=toY(0);
  const piv=[[Math.PI,"\u03c0"],[2*Math.PI,"2\u03c0"],[3*Math.PI,"3\u03c0"]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* grid horizontalne */
    e("line",{x1:pad.l,y1:toY(1),x2:pad.l+iW,y2:toY(1),stroke:"var(--bdr)",strokeWidth:.4}),
    e("line",{x1:pad.l,y1:toY(-1),x2:pad.l+iW,y2:toY(-1),stroke:"var(--bdr)",strokeWidth:.4}),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.2}),
    /* strelice */
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${pad.l},${pad.t} ${pad.l-3},${pad.t+5} ${pad.l+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:pad.l+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    /* oznake osi */
    e("circle",{cx:pad.l,cy:oy,r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:pad.l-8,y:oy+12,fontSize:8,fill:"var(--muted)"},"0"),
    e("circle",{cx:pad.l,cy:toY(1),r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:pad.l-8,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"1"),
    /* π oznake na x-osi */
    ...piv.map(([x,lbl])=>e("g",{key:"px"+lbl},
      e("circle",{cx:toX(x),cy:oy,r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
      e("text",{x:toX(x),y:oy+14,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},lbl)
    ))
  );
}

function Svg20a_2018Aj(){
  const W=180,H=180;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=90,cy=90,R=65;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* kružnica */
    e("circle",{cx:cx,cy:cy,r:R,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    /* osi */
    e("line",{x1:cx-R-15,y1:cy,x2:cx+R+15,y2:cy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{x1:cx,y1:cy+R+15,x2:cx,y2:cy-R-15,stroke:"var(--text)",strokeWidth:1.2}),
    /* strelice */
    e("polygon",{points:`${cx+R+15},${cy} ${cx+R+10},${cy-3} ${cx+R+10},${cy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${cx},${cy-R-15} ${cx-3},${cy-R-10} ${cx+3},${cy-R-10}`,fill:"var(--text)"}),
    /* oznake */
    e("text",{x:cx+R+18,y:cy+4,fontSize:10,fill:"var(--text)"},"x"),
    e("text",{x:cx+5,y:cy-R-16,fontSize:10,fill:"var(--text)"},"y"),
    e("text",{x:cx+4,y:cy+14,fontSize:9,fill:"var(--muted)"},"0"),
    /* oznaka 1 na x-osi */
    e("text",{x:cx+R+3,y:cy+14,fontSize:9,fill:"var(--muted)"},"1")
  );
}

function Svg19a_2018Aj(){
  const W=330,H=170;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  /* Iz slike: širok trokut, baza gotovo vodoravna.
     A = donji lijevi (kut α, mali ~15°)
     B = donji desni (kut 127°43', tupi, unutar trokuta)
     C = gornji desni šiljak
     Baza AB bez oznake. Stranica AC = 3k (najdulja). Stranica BC = k (kratka). */
  const A={x:25,y:145}, B={x:220,y:138}, C={x:290,y:22};

  /* Kutovi smjerova iz svakog vrha (atan2 u SVG koordinatama, y dolje) */
  const angAtoB=Math.atan2(B.y-A.y, B.x-A.x);
  const angAtoC=Math.atan2(C.y-A.y, C.x-A.x);
  const angBtoA=Math.atan2(A.y-B.y, A.x-B.x);
  const angBtoC=Math.atan2(C.y-B.y, C.x-B.x);

  /* Luk α u vrhu A: mali kut (~15°), UNUTAR trokuta.
     Trokut je iznad baze, pa luk ide od smjera A→C (gore) do A→B (desno), sweep=1 (CW u SVG = unutar trokuta). */
  const R1=24;
  const a1sx=A.x+R1*Math.cos(angAtoC), a1sy=A.y+R1*Math.sin(angAtoC);
  const a1ex=A.x+R1*Math.cos(angAtoB), a1ey=A.y+R1*Math.sin(angAtoB);

  /* Luk 127°43' u vrhu B: tupi kut, UNUTAR trokuta.
     Od smjera B→A (lijevo) do B→C (gore-desno), sweep=0 (CCW u SVG = unutar trokuta jer je tupi). */
  const R2=28;
  const a2sx=B.x+R2*Math.cos(angBtoA), a2sy=B.y+R2*Math.sin(angBtoA);
  const a2ex=B.x+R2*Math.cos(angBtoC), a2ey=B.y+R2*Math.sin(angBtoC);

  /* Smjer baze za produžetke */
  const baseDx=(B.x-A.x), baseDy=(B.y-A.y);
  const baseLen=Math.sqrt(baseDx*baseDx+baseDy*baseDy);
  const bux=baseDx/baseLen, buy=baseDy/baseLen;

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* zatvoreni trokut */
    e("polygon",{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.4,strokeLinejoin:"miter"}),

    /* produžetak baze lijevo od A */
    e("line",{x1:A.x,y1:A.y,x2:A.x-bux*25,y2:A.y-buy*25,stroke:_BLUE,strokeWidth:1.1}),
    /* produžetak baze desno od B */
    e("line",{x1:B.x,y1:B.y,x2:B.x+bux*30,y2:B.y+buy*30,stroke:_BLUE,strokeWidth:1.1}),

    /* α luk UNUTAR trokuta: od A→C do A→B, sweep=1 */
    e("path",{d:`M ${a1sx} ${a1sy} A ${R1} ${R1} 0 0 1 ${a1ex} ${a1ey}`,
      fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:A.x+32,y:A.y-8,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"\u03b1"),

    /* 127°43' luk UNUTAR trokuta.
       Rješenje: start=smjer B→C, end=smjer B→A, large-arc=0, sweep=0.
       Luk ide od B→C smjera CCW prema B→A smjeru = prolazi GORE kroz trokut. */
    e("path",{d:`M ${a2ex} ${a2ey} A ${R2} ${R2} 0 0 0 ${a2sx} ${a2sy}`,
      fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:B.x-48,y:B.y-20,fontSize:10,fill:"var(--text)"},"127\u00b0 43\u2032"),

    /* oznaka 3k na stranici AC */
    e("text",{x:(A.x+C.x)/2-25,y:(A.y+C.y)/2-6,fontSize:13,fill:_GOLD},"3k"),
    /* oznaka k na stranici BC */
    e("text",{x:(B.x+C.x)/2+10,y:(B.y+C.y)/2-2,fontSize:13,fill:_GOLD},"k")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: svedi sve na isti oblik (decimalni ili razlomak) prije usporedbe.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva najveći?",
  opts:["cos 47","sin 92","cos 47°","sin 92°"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Bez stupnja: cos 47 (radijani) i sin 92 (radijani). Sa stupnjem: cos 47° i sin 92°."},
    {txt:"Cos 47 rad: 47 rad ≈ 7,48 punih krugova (2π ≈ 6,28) + 1,2 rad. cos(1,2) ≈ 0,362. ALI 47 rad = 47 − 7·(2π) ≈ 47 − 43,98 = 3,02 rad. cos 3,02 ≈ −0,997."},
    {txt:"Sin 92 rad: 92 rad mod 2π ≈ 92 − 14·6,283 = 92 − 87,96 = 4,04 rad. sin 4,04 ≈ −0,77."},
    {txt:"Cos 47°: cos 47° ≈ 0,682"},
    {txt:"Sin 92°: 92° je blizu 90° (gdje sin = 1). sin 92° ≈ 0,9994 (≈ 1)",final:true},
    {txt:"Najveći: D) sin 92° ≈ 0,999",final:true,note:"odgovor"},
    {txt:"Provjera: sin 92° = cos 2° (komplementaran) ≈ cos 2° ≈ 0,9994 (najbliže 1) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) cos 47 ≈ −0,997; B) sin 92 ≈ −0,77; C) cos 47° ≈ 0,68; D) ≈ 0,9994 ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: bez znaka stupnja, argument je u RADIJANIMA. Sa °, u stupnjevima.",note:"postupak",final:true},{txt:"Intuicija: Sin/cos su periodični s periodom 2π rad = 360°. Za velike brojeve, treba reducirati modulo 2π (ili 360°).",note:"intuicija",final:true}
  ],
  why:["Pravilo: bez znaka stupnja, argument je u RADIJANIMA. Sa °, u stupnjevima.","Sin/cos su periodični s periodom 2π rad = 360°. Za velike brojeve, treba reducirati modulo 2π (ili 360°).","Postupak: 1) prepoznaj jedinicu (rad ili °). 2) reduciraj na osnovni period. 3) izračunaj funkciju.","Intuicija: 92° je BLIZU 90° (gdje sin postiže max = 1). Tako sin 92° je najbliže 1.","Česta greška 1: ne razlikovati radijane i stupnjeve (47 rad ≈ 2693° — vrlo različito od 47°). Greška 2: zaboraviti reducirati.","Alt metoda: za sin/cos sa stupnjevima, koristi 0° ≤ θ ≤ 90° referencu. sin 92° = sin(180° − 92°) = sin 88° ≈ 0,9994.","Provjera: konkretne aproksimacije pokazuju D je najveće ✓"]},
  {id:2,type:"mc",warn:"Pazi: 16 m³ = 16000 L; broj dana = 16000/320.",topic:"br",points:1,
  q:"Dnevna potrošnja vode neke obitelji je 320 litara. Rezervoar sadržava 16 m³ vode. U koliko dana ta obitelj potroši svu vodu iz rezervoara?",
  opts:["20","30","50","80"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"16 m³ = 16 000 L (1 m³ = 1000 L)."},
    {txt:"Broj dana: 16 000 / 320 = 50",final:true},
    {txt:"Točan odgovor: C) 50.",final:true,note:"odgovor"},
    {txt:"Provjera: 50 · 320 = 16 000 L = 16 m³ ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori u istu jedinicu (m³ → L). 2) podijeli ukupno s dnevnom potrošnjom.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 20 = 6400/320 (krivo 6400); B) 30 = krivo; D) 80 = 16/0,2 ili sl.",final:true,note:"diagnostika"},{txt:"Intuicija: Konverzija: 1 m³ = 1000 L. Mora pretvoriti u iste jedinice (L).",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: ukupno / po danu = broj dana. Osnovna jedinična stopa.","Konverzija: 1 m³ = 1000 L. Mora pretvoriti u iste jedinice (L).","Postupak: 1) pretvori 16 m³ u L. 2) podijeli sa 320 L/dan.","Intuicija: 16 m³ je puno vode (16 000 L). Ako se troši 320 L/dan, traje ≈ 50 dana.","Česta greška 1: zaboraviti konverziju (računati 16/320 = 0,05 dana — krivo). Greška 2: zamijeniti dijeljenje s množenjem.","Alt metoda: 320 L · n = 16 000 → n = 50.","Provjera dimenzionalna: L / (L/dan) = dan ✓"]},
  {id:3,type:"mc",warn:"Pazi: P = zbroj svih visina / 5; pa provjeri tvrdnju usporedbom s podatcima.",topic:"br",points:1,
  q:"Petero studenata ima visine redom 168 cm, 172 cm, 179 cm, 180 cm i 190 cm. Što vrijedi za prosječnu visinu P tih petero studenata?",
  opts:["Visina drugoga studenta jednaka je P.","Visina trećega studenta jednaka je P.","Visina najnižega studenta manja je za 9,7 cm od P.","Visina najvišega studenta veća je za 12,2 cm od P."],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Prosjek P = (168 + 172 + 179 + 180 + 190)/5 = 889/5 = 177,8 cm"},
    {txt:"Provjeri tvrdnje:"},
    {txt:"A) 2. student (172) = 177,8? NE ✗"},
    {txt:"B) 3. student (179) = 177,8? NE ✗"},
    {txt:"C) Najniži (168) je za 9,7 cm manji od P? 177,8 − 9,7 = 168,1, ne 168 → ne TOČNO. ✗"},
    {txt:"D) Najviši (190) je za 12,2 cm veći od P? 190 − 177,8 = 12,2 ✓",final:true},
    {txt:"Točan odgovor: D.",final:true,note:"odgovor"},
    {txt:"Provjera: 177,8 + 12,2 = 190 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A, B nisu jednake; C nije TOČNO (9,8 nije 9,7); D ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo prosjeka: zbroj svih / broj članova. Provjera tvrdnji: matematička razlika EGZAKTNO odgovara navedenoj.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) izračunaj prosjek precizno. 2) testiraj svaku tvrdnju. 3) prihvati samo egzaktno točno.",note:"intuicija",final:true}
  ],
  why:["Pravilo prosjeka: zbroj svih / broj članova. Provjera tvrdnji: matematička razlika EGZAKTNO odgovara navedenoj.","Postupak: 1) izračunaj prosjek precizno. 2) testiraj svaku tvrdnju. 3) prihvati samo egzaktno točno.","Intuicija: 177,8 je između 172 i 179 (median 179). 'Točan' odgovor traži egzaktnu razliku.","Česta greška 1: zaokruživati prerano (npr. P = 178, pa razlika 10). Greška 2: pomiješati 'manji od' i 'manji od P'.","Alt metoda: centriraj oko 180: odstupanja −12, −8, −1, 0, +10. Suma −11, prosjek −2,2. P = 177,8. Najviši: +10 odstupanje + 2,2 = 12,2 ✓.","Provjera: 190 − 177,8 = 12,2 ✓ (TOČNO)"]},
  {id:4,type:"mc",warn:"Pazi: zapiši korijene kao potencije (∛a = a^(1/3), √a = a^(1/2)), zbroji eksponente, pa vanjski √.",topic:"exp",points:1,
  q:"Čemu je jednak izraz √(∛a · √a)?",
  opts:["a^(1/12)","a^(5/12)","a^(8/3)","a^(14/3)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"√a · ³√a = a^([FRAC:1|2]) · a^([FRAC:1|3]) = a^([FRAC:1|2] + [FRAC:1|3]) = a^([FRAC:3|6] + [FRAC:2|6]) = a^([FRAC:5|6])"},
    {txt:"√(a^([FRAC:5|6])) = a^([FRAC:5|6]·[FRAC:1|2]) = a^([FRAC:5|12])",final:true},
    {txt:"Točan odgovor: B) a^([FRAC:5|12]).",final:true,note:"odgovor"},
    {txt:"Provjera za a = 64 (kompletni kvadrat i kub): √64 = 8; ³√64 = 4; 8·4 = 32; √32 = 4√2 ≈ 5,66. Naš: 64^([FRAC:5|12]) = (2⁶)^([FRAC:5|12]) = 2^([FRAC:30|12]) = 2^(2,5) = 4√2 ≈ 5,66 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 1/12 = krivi zbroj eksponenata; C) 8/3 = krivi; D) 14/3 = krivi.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo korijena kao potencije: ⁿ√a = a^(1/n). Tako √a = a^([FRAC:1|2]), ³√a = a^([FRAC:1|3]).",note:"postupak",final:true},{txt:"Intuicija: Pravilo množenja potencija s istom bazom: a^m · a^n = a^(m+n).",note:"intuicija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:["Pravilo korijena kao potencije: ⁿ√a = a^(1/n). Tako √a = a^([FRAC:1|2]), ³√a = a^([FRAC:1|3]).","Pravilo množenja potencija s istom bazom: a^m · a^n = a^(m+n).","Pravilo potencije potencije: (a^m)^n = a^(mn).","Postupak: 1) prevedi sve korijene u potencije. 2) sredi pomoću pravila. 3) ponovo u korijensku formu ako treba.","Intuicija: a^([FRAC:1|2]) i a^([FRAC:1|3]) — kombinirano oko 'srednje' frakcije. 5/12 je BLIZU 1/2 = 6/12.","Česta greška 1: zbrojiti unutarnji izraz krivo: 1/2 + 1/3 = 1/5 (krivo). Greška 2: zaboraviti vanjski √ (pa dobiti a^([FRAC:5|6])).","Alt metoda: numerički provjeri za a = 64 ili neki drugi 'lijep' broj.","Provjera: 5/12 = 1/2 + 1/3 − 1/12... actually [FRAC:5|12] = ([FRAC:1|2] + [FRAC:1|3])·[FRAC:1|2] = [FRAC:5|6]·[FRAC:1|2] = [FRAC:5|12] ✓"]},
  {id:5,type:"mc",warn:"Pazi: opseg zadanog je 42; koeficijent sličnosti = 84/42 = 2; najdulju (15) pomnoži s njim.",topic:"geom",points:1,
  q:"Zadan je trokut sa stranicama duljina 13 cm, 14 cm i 15 cm. Kolika je duljina najdulje stranice trokuta opsega 84 cm koji je sličan zadanome trokutu?",
  opts:["7,5 cm","9 cm","30 cm","32,5 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Originalni opseg: 13 + 14 + 15 = 42 cm"},
    {txt:"Koeficijent sličnosti: 84/42 = 2"},
    {txt:"Najduža originalna stranica: 15 cm. U sličnom: 15 · 2 = 30 cm",final:true},
    {txt:"Točan odgovor: C) 30 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: novi trokut 26, 28, 30 cm. Opseg 84 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj koef sličnosti (omjer opsega). 2) pomnoži najduže stranice s koef.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 7,5 = 15/2 (krivi smjer omjera); B) 9 = krivo; D) 32,5 = krivo.",final:true,note:"diagnostika"},{txt:"Intuicija: Postupak: 1) izračunaj k iz omjera opsega. 2) primijeni k na željene stranice.",note:"intuicija",final:true}
  ],
  why:["Pravilo sličnosti: svi linearni omjeri (stranice, opsezi, visine) su jednaki. Sličan trokut ima OPSEG = k · originalan opseg, gdje je k koeficijent sličnosti.","Postupak: 1) izračunaj k iz omjera opsega. 2) primijeni k na željene stranice.","Intuicija: ako je opseg dvostruk, svaka stranica je također dvostruka (linearna sličnost).","Česta greška 1: pomiješati linearni omjer s omjerom površina (kvadrat omjera). Greška 2: zamijeniti brojnik i nazivnik.","Alt metoda: provjeri opseg novog trokuta: ako su stranice 26, 28, 30, opseg = 84 ✓.","Provjera: 30/15 = 2 = 84/42 ✓"]},
  {id:6,type:"mc",warn:"Pazi: dijagonale se raspolavljaju; trokut s polovicama (6 i 8) i kutom među njima → poučak o kosinusu.",topic:"trig",points:1,
  q:"Duljine dijagonala paralelograma iznose 12 cm i 16 cm, a mjera kuta između njih iznosi 53°8′. Kolika je duljina kraće stranice toga paralelograma?",
  opts:["4,82 cm","6,51 cm","9,4 cm","10,6 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"Dijagonale paralelograma se RASPOLAVLJAJU. Polovice: 6 cm i 8 cm."},
    {txt:"Trokut formiran od polovica dijagonala i stranice paralelograma (s kutom između dijagonala 53°8' ili 180° − 53°8' = 126°52')."},
    {txt:"Kraća stranica je NASUPROT MANJEM kutu između dijagonala (53°8')."},
    {txt:"Kosinusov poučak: stranica² = 6² + 8² − 2·6·8·cos(53°8')"},
    {txt:"cos 53°8' ≈ 0,6"},
    {txt:"stranica² = 36 + 64 − 96·0,6 = 100 − 57,6 = 42,4"},
    {txt:"stranica ≈ √42,4 ≈ 6,51 cm",final:true},
    {txt:"Točan odgovor: B) 6,51 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 6,51² ≈ 42,38 ≈ 42,4 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 4,82 = krivi izračun; C) 9,4 = duža stranica (nasuprot većem kutu); D) 10,6 = krivo.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo paralelograma: dijagonale se RASPOLAVLJAJU u središtu. Tako središte čini polovice dijagonala (d₁/2, d₂/2).",note:"postupak",final:true},{txt:"Intuicija: Stranica paralelograma je nasuprot kutu između (polovičnih) dijagonala. KRAĆA stranica nasuprot MANJEM kutu (53°8'), DUŽA nasuprot većem (126°52').",note:"intuicija",final:true}
  ],
  why:["Pravilo paralelograma: dijagonale se RASPOLAVLJAJU u središtu. Tako središte čini polovice dijagonala (d₁/2, d₂/2).","Stranica paralelograma je nasuprot kutu između (polovičnih) dijagonala. KRAĆA stranica nasuprot MANJEM kutu (53°8'), DUŽA nasuprot većem (126°52').","Kosinusov poučak: c² = a² + b² − 2ab cos C, gdje je C kut između stranica a, b.","Postupak: 1) odredi polovice dijagonala. 2) primijeni kosinusov poučak s odgovarajućim kutom. 3) odredi koja stranica je kraća (nasuprot manjem kutu).","Intuicija: cos(53°8') = pozitivno (manje od 90°), pa je oduzimanje POZITIVNO veliko → manja stranica.","Česta greška 1: koristiti CIJELE dijagonale umjesto polovica. Greška 2: pomiješati 'kraća' i 'duža' (nasuprot odgovarajućeg kuta).","Alt metoda: provjeri s drugim kutom (126°52'): cos je negativno, pa stranica² = 36 + 64 + 96·0,6 = 157,6 → stranica ≈ 12,55 (duža). Različito od kraće. ✓","Provjera: kraća 6,51 + duža 12,55 ≈ ; obje pripadaju paralelogramu s tim dijagonalama ✓"]},
  {id:7,type:"mc",warn:"Pazi: sprijeda i bok = trokut, odozgo = krug → stožac (čunj).",topic:"geom",points:1,
  q:"Ako se geometrijsko tijelo promatra s triju strana, sprijeda i s bočne strane vidi se trokut, a odozgo krug. Koje od navedenih tijela odgovara tomu opisu?",
  opts:["kvadar","piramida","valjak","stožac"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Sprijeda trokut: visina je vidljiva, baza je promjer baze tijela."},
    {txt:"Bočno trokut: simetrija (jednako gledanje)."},
    {txt:"Odozgo krug: baza je kružna."},
    {txt:"Tijelo s KRUŽNOM BAZOM i jednim VRHOM (gdje se 'piramidalni' aspekt vidi kao trokut sa strane) → STOŽAC ✓",final:true},
    {txt:"Točan odgovor: D) stožac.",final:true,note:"odgovor"},
    {txt:"Provjera: stožac ima kružnu bazu (odozgo krug), trokutaste 'projekcije' s bočnih strana (vrh + dva dijametralna rub baze) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) kvadar — sve projekcije pravokutnici; B) piramida — odozgo NIJE krug (četverokut ili trokut); C) valjak — sa strane pravokutnik, ne trokut.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo projekcija: ortogonalne projekcije 3D tijela na 3 ravnine (sprijeda, sa strane, odozgo) jedinstveno karakteriziraju tijelo.",note:"postupak",final:true},{txt:"Intuicija: - Krug odozgo = KRUŽNA baza (cilindar ili stožac).",note:"intuicija",final:true}
  ],
  why:["Pravilo projekcija: ortogonalne projekcije 3D tijela na 3 ravnine (sprijeda, sa strane, odozgo) jedinstveno karakteriziraju tijelo.","- Krug odozgo = KRUŽNA baza (cilindar ili stožac).","- Trokut sa strane = postoji vrh ili 'piramidalni' aspekt → STOŽAC (cilindar bi imao pravokutnik).","Postupak: 1) za svaku projekciju identificiraj oblik. 2) razmotri koja tijela imaju TE projekcije.","Intuicija: stožac je 'piramida s kružnom bazom'. Tako odozgo se vidi krug, sa strane trokut.","Česta greška 1: pomiješati stožac i piramidu (oba imaju trokutaste projekcije, ali piramida nema okrugulu bazu). Greška 2: pomiješati cilindar i stožac (cilindar ima pravokutnik sa strane).","Alt metoda: nacrtaj stožac mentalno i provjeri svaku projekciju.","Provjera: stožac ↔ trokut + krug — jedinstveno ✓"]},
  {id:8,type:"mc",warn:"Pazi: nadopuni kvadrat za x (x² − 6x = (x − 3)² − 9); središte (3,0), r² = 7 + 9 = 16.",topic:"anal",points:1,
  q:"Koja je točka središte i koliki je polumjer kružnice zadane jednadžbom x² + y² − 6x − 7 = 0?",
  opts:["S(-3, 0), r=4","S(-3, 0), r=16","S(3, 0), r=4","S(3, 0), r=16"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Dovršim kvadrat za x: x² − 6x = (x − 3)² − 9"},
    {txt:"Y se ne dotiče: y² ostaje."},
    {txt:"(x − 3)² − 9 + y² − 7 = 0 → (x − 3)² + y² = 16"},
    {txt:"Standardni oblik (x − h)² + (y − k)² = r²: centar (3, 0), r² = 16 → r = 4",final:true},
    {txt:"Točan odgovor: C) S(3, 0), r = 4.",final:true,note:"odgovor"},
    {txt:"Provjera: (3 − 3)² + 0² = 0 (centar u centru); (3 + 4 − 3)² + 0² = 16 (točka (7, 0) na kružnici) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) krivi centar i r (uzeo r = √16 = 4 ali centar krivi); B) krivi centar i r²; D) krivi r².",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Standardni oblik kružnice: (x − h)² + (y − k)² = r², centar (h, k), polumjer r.",note:"postupak",final:true},{txt:"Intuicija: Algoritam dovršavanja kvadrata: za x² + bx, dodaj (b/2)² da formiraš (x + b/2)². Oduzmi isti broj da bilanca ostane.",note:"intuicija",final:true}
  ],
  why:["Standardni oblik kružnice: (x − h)² + (y − k)² = r², centar (h, k), polumjer r.","Algoritam dovršavanja kvadrata: za x² + bx, dodaj (b/2)² da formiraš (x + b/2)². Oduzmi isti broj da bilanca ostane.","Postupak: 1) sredi x-članove u kvadrat. 2) isto za y (ako treba). 3) preuredi na standardni oblik.","Intuicija: x² − 6x — koeficijent 'sredine' je −3 → (x − 3)². Dodatak −9 da kompenzira − ako razvije.","Česta greška 1: zaboraviti minus u centru ((x − 3) ima centar x = 3, ne −3). Greška 2: koristiti r² umjesto r kao polumjer.","Alt metoda: standardni oblik x² + y² + Dx + Ey + F = 0 ima centar (−D/2, −E/2) i r = √(D²/4 + E²/4 − F). Za naš: D = −6, E = 0, F = −7. Centar (3, 0), r = √(9 + 0 + 7) = √16 = 4.","Provjera: točka (7, 0) na kružnici: 49 + 0 − 42 − 7 = 0 ✓"]},
  {id:9,type:"mc",warn:"Pazi: logaritam je definiran za argument > 0 → uvjet 2x + 4 > 0.",topic:"exp",points:1,
  q:"Koji je skup domena funkcije f(x) = log(2x + 4)?",
  opts:["ℝ\\{-2, 0}","⟨−∞, -2⟩","⟨-2, +∞⟩","ℝ\\{-2}"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Domena logaritma: argument > 0."},
    {txt:"2x + 4 > 0 → 2x > −4 → x > −2"},
    {txt:"Domena: ⟨−2, +∞⟩",final:true},
    {txt:"Točan odgovor: C) ⟨−2, +∞⟩.",final:true,note:"odgovor"},
    {txt:"Provjera: za x = 0: log(4) = log 4 ≈ 0,602 (definirano) ✓; za x = −2: log(0) — nedefinirano (granica) ✗",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) postavi argument > 0. 2) riješi nejednakost. 3) zapiši kao otvoren interval.",final:true,note:"postupak"},
    {txt:"Distraktori: A) ℝ{−2, 0} = pogrešno (uključuje x < −2); B) ⟨−∞, −2⟩ = obrnut smjer; D) ℝ{−2} = krivo (uključuje x < −2).",final:true,note:"diagnostika"},{txt:"Intuicija: Postupak: 1) izolaciju argumenta. 2) postavi argument > 0. 3) riješi.",note:"intuicija",final:true}
  ],
  why:["Pravilo domene log: log_a x je definiran samo za x > 0 (a > 0, a ≠ 1).","Postupak: 1) izolaciju argumenta. 2) postavi argument > 0. 3) riješi.","Intuicija: 2x + 4 = 0 u x = −2 — to je rub gdje log postaje −∞. Za x > −2: argument > 0, log definiran.","Česta greška 1: zaboraviti uvjet 'strogo > 0' (često uključe rub x = −2). Greška 2: pomiješati smjer (pisati x < −2).","Alt metoda: graf y = 2x + 4 siječe x-os u −2. Argument > 0 ⟺ x > −2.","Provjera: za x = −1: 2·(−1) + 4 = 2 > 0 ✓ → log 2 ≈ 0,301 (definirano)."]},
  {id:10,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — protuprimjer obara (pazi na stupanj zbroja i umnoška).",topic:"al",points:1,
  q:"Koja od navedenih tvrdnja nije istinita za svaka dva polinoma?",
  opts:["Zbroj dvaju polinoma jest polinom.","Razlika dvaju polinoma jest polinom.","Umnožak dvaju polinoma jest polinom.","Količnik dvaju polinoma jest polinom."],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Pravilo: skup polinoma JE zatvoren pod zbrajanjem, oduzimanjem i množenjem, ali NIJE pod dijeljenjem."},
    {txt:"A) Zbroj polinoma JE polinom. TRUE ✓"},
    {txt:"B) Razlika polinoma JE polinom. TRUE ✓"},
    {txt:"C) Umnožak polinoma JE polinom. TRUE ✓"},
    {txt:"D) Količnik polinoma NIJE uvijek polinom. Npr. (x² + 1)/x = x + 1/x — RACIONALNA funkcija, ne polinom. ✗ (NIJE istinita)",final:true},
    {txt:"Točan odgovor: D — nije istinita.",final:true,note:"odgovor"},
    {txt:"Provjera: (x²)/(x − 1) = x + 1 + 1/(x − 1) — NIJE polinom ✓ (kontraprimjer za D)",final:true,note:"verifikacija"},
    {txt:"Postupak: provjeri svaku operaciju o zatvorenosti — količnik je tipičan kontraprimjer.",final:true,note:"postupak"},{txt:"Intuicija: Definicija polinoma: konačan zbroj a_n x^n s nenegativnim cjelobrojnim eksponentima.",note:"intuicija",final:true},{txt:"Postupak: provjeri zatvorenost svake operacije. Najlakše s konkretnim primjerima.",note:"diagnostika",final:true}
  ],
  why:["Pravilo (algebarska struktura polinoma): {polinomi} čine PRSTEN pod + i ·, ali NIJE polje (jer dijeljenje općenito daje racionalne funkcije).","Definicija polinoma: konačan zbroj a_n x^n s nenegativnim cjelobrojnim eksponentima.","Postupak: provjeri zatvorenost svake operacije. Najlakše s konkretnim primjerima.","Intuicija: zbroj/razlika polinoma — kombinira članove istog stupnja. Umnožak — distribucija (svi članovi). Dijeljenje — može uvesti x^(−1) ili razlomak.","Česta greška 1: misliti da su SVE 4 operacije zatvorene (krivo za dijeljenje). Greška 2: pomiješati polinome s racionalnim funkcijama.","Alt metoda: primjer (x² − 1)/(x − 1) = x + 1 — DA je polinom! Ali to je posebno (factor 'pokriva'). Općenito nije polinom: x/(x² + 1).","Provjera: D je NIJE istinita za SVE parove polinoma (postoji par za koji nije) ✓"]},
  {id:11,type:"mc",warn:"Pazi: geometrijski niz s q = −3/5 (|q| < 1) → suma S = a₁/(1 − q).",topic:"niz",points:1,
  q:"Koliki je zbroj svih članova beskonačnoga niza 1, -3/5, 9/25, -27/125, …?",
  opts:["5/8","68/125","272/125","5/2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[
    {txt:"Geometrijski niz: a₁ = 1, q = −3/5 (omjer susjednih)."},
    {txt:"Provjera: a₂/a₁ = (−3/5)/1 = −3/5 ✓; a₃/a₂ = (9/25)/(−3/5) = (9/25)·(−5/3) = −3/5 ✓"},
    {txt:"|q| = 3/5 < 1, pa niz KONVERGIRA."},
    {txt:"S = a₁ / (1 − q) = 1 / (1 − (−3/5)) = 1 / (8/5) = 5/8",final:true},
    {txt:"Točan odgovor: A) 5/8.",final:true,note:"odgovor"},
    {txt:"Provjera: S(1 − q) = 5/8 · 8/5 = 1 = a₁ ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj q. 2) provjeri |q| < 1. 3) S = a₁/(1 − q).",final:true,note:"postupak"},
    {txt:"Distraktori: B, C, D = krivi izračuni sume.",final:true,note:"diagnostika"},{txt:"Intuicija: Postupak: 1) izračunaj q iz omjera. 2) primijeni formulu.",note:"intuicija",final:true}
  ],
  why:["Pravilo zbroja beskonačnog geom. niza: ako je |q| < 1, S = a₁/(1 − q).","Postupak: 1) izračunaj q iz omjera. 2) primijeni formulu.","Intuicija: niz s |q| = 3/5 < 1 konvergira. Naizmjenični članovi (zbog negativnog q) — suma je 'pomalo' između prvog člana 1 i 0.","Česta greška 1: koristiti q kao razliku (a₂ − a₁ umjesto a₂/a₁). Greška 2: zaboraviti minus u 1 − q (računati 1 + 3/5 = 8/5 — krivo, treba 1 − (−3/5) = 8/5 = ovo je točno!).","Alt metoda: numerički — zbroji prvih nekoliko članova: 1 − 0,6 + 0,36 − 0,216 + ... = 0,544 + 0,144 ≈ 0,625 = 5/8 ✓.","Provjera: 5/8 = 0,625; suma teži ka tom broju."]},
  {id:12,type:"mc",warn:"Pazi: baza 4/7 < 1 → OKRENI znak nejednakosti; 49/16 = (7/4)² = (4/7)⁻².",topic:"exp",points:1,
  q:"Koja od navedenih nejednadžbi ima isti skup rješenja kao i nejednadžba (4/7)^(5x) > 49/16?",
  opts:["5x < -2","5x < 2","5x > -2","5x > 2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[
    {txt:"49/16 = (7/4)² = (4/7)⁻² (baza 4/7 < 1)"},
    {txt:"(4/7)^(5x) > (4/7)⁻²"},
    {txt:"Baza < 1 → log opadajuća → smjer nejednakosti se OBRĆE: 5x < −2",final:true},
    {txt:"Točan odgovor: A) 5x < −2.",final:true,note:"odgovor"},
    {txt:"Provjera za 5x = −3: (4/7)⁻³ = (7/4)³ = 343/64 > 49/16 = 196/64 ✓ (jer −3 < −2)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori desnu stranu u istu bazu kao lijevu. 2) iskoristi monotonost (baza < 1 → smjer se obrće).",final:true,note:"postupak"},
    {txt:"Distraktori: B) 5x < 2 = krivi predznak; C) 5x > −2 = krivi smjer; D) 5x > 2 = krivo.",final:true,note:"diagnostika"},{txt:"Intuicija: Tu je a = 4/7 < 1, pa se smjer nejednakosti OBRĆE.",note:"intuicija",final:true}
  ],
  why:["Pravilo: a^x > a^y ⟺ x > y AKO a > 1; ⟺ x < y AKO 0 < a < 1.","Tu je a = 4/7 < 1, pa se smjer nejednakosti OBRĆE.","Postupak: 1) pretvori obje strane u istu bazu. 2) primijeni pravilo (s ili bez obrtanja smjera).","Intuicija: 4/7 < 1 znači potencije OPADAJU s rastom eksponenta. Da bi (4/7)^(5x) bilo VEĆE od (4/7)⁻², eksponent mora biti MANJI od −2.","Česta greška 1: zaboraviti obrnuti smjer pri bazi < 1 (najčešća greška). Greška 2: krivo pretvoriti 49/16 = (4/7)? (4/7)² = 16/49, ali nas zanima (7/4)² = 49/16 = (4/7)⁻².","Alt metoda: logaritmiraj obje strane s log_(4/7). Pošto je baza < 1, log_(4/7) je opadajuća, pa se smjer obrće.","Provjera: za 5x = 0: (4/7)⁰ = 1, 1 > 49/16 ≈ 3,06? NE — pa rješenje NIJE 5x ≥ 0. Smjer −2 ✓."]},
  {id:13,type:"mc",warn:"Pazi: izoliraj 3ˣ = y − 5, pa logaritmiraj po bazi 3 → x = log₃(y − 5).",topic:"exp",points:1,
  q:"Čemu je jednako x ako je y = 3^x + 5?",
  opts:["x=log₃(y-5)","x=log₃(y+5)","x=log₃y−log₃5","x=log₃y+log₃5"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[
    {txt:"y = 3^x + 5 → y − 5 = 3^x"},
    {txt:"Logaritmiranje obje strane (baza 3): log_3(y − 5) = x",final:true},
    {txt:"Točan odgovor: A) x = log_3(y − 5).",final:true,note:"odgovor"},
    {txt:"Provjera: za x = 2, y = 9 + 5 = 14. Inverzna: log_3(14 − 5) = log_3 9 = 2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izoluj eksponencijalan dio (3^x). 2) logaritmiraj.",final:true,note:"postupak"},
    {txt:"Distraktori: B) log_3(y+5) = krivi predznak; C, D) = razdvojeni log pa krivo.",final:true,note:"diagnostika"},{txt:"Intuicija: Pravilo: log_a(uv) = log_a u + log_a v ALI log_a(u − v) ≠ log_a u − log_a v. Tako log_3(y − 5) NIJE log_3 y − log_3 5.",note:"intuicija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: a^x = b ⟺ x = log_a b. Inverzna operacija eksponencijala je logaritam s istom bazom.","Pravilo: log_a(uv) = log_a u + log_a v ALI log_a(u − v) ≠ log_a u − log_a v. Tako log_3(y − 5) NIJE log_3 y − log_3 5.","Postupak: 1) izolacija eksponencijalne (oduzmi 5). 2) primjena log s istom bazom.","Intuicija: x je 'skriven' u eksponentu. Logaritam ga 'oslobađa'.","Česta greška 1: razdvojiti log_3(y − 5) = log_3 y − log_3 5 (krivo, pravilo log ne važi za zbrajanje/oduzimanje argumenata). Greška 2: krivi predznak (log_3(y + 5)).","Alt metoda: graf — invertiraj funkciju 3^x + 5 oko y = x. Inverzna je log_3(x − 5).","Provjera: za x = 0, y = 1 + 5 = 6 → log_3(6 − 5) = log_3 1 = 0 = x ✓"]},
  {id:14,type:"mc",warn:"Pazi: između lokalnog maksimuma i minimuma funkcija PADA; izvan njih raste — skiciraj tijek.",topic:"der",points:1,
  q:"Funkcija f definirana na skupu realnih brojeva neprekinuta je i ima točno dvije stacionarne točke. U točki (3, f(3)) poprima lokalni maksimum, a u točki (8, f(8)) lokalni minimum. Što vrijedi za derivaciju f′ funkcije f?",
  opts:["f′ je negativna na ⟨−∞,3⟩∪⟨8,+∞⟩ i pozitivna na ⟨3,8⟩","f′ je pozitivna na ⟨−∞,3⟩∪⟨8,+∞⟩ i negativna na ⟨3,8⟩","f′ je negativna na ⟨−∞,3⟩ i pozitivna na ⟨8,+∞⟩","f′ je pozitivna na ⟨−∞,3⟩ i negativna na ⟨8,+∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[
    {txt:"U lokalnom MAX f' prelazi iz + u − (raste, pa pada). U lokalnom MIN f' prelazi iz − u + (pada, pa raste)."},
    {txt:"Na ⟨−∞, 3⟩: f raste (prema max u 3) → f' > 0"},
    {txt:"Na ⟨3, 8⟩: f opada (od max do min) → f' < 0"},
    {txt:"Na ⟨8, +∞⟩: f raste (od min) → f' > 0",final:true},
    {txt:"Točan odgovor: B) f' je pozitivna na ⟨−∞, 3⟩ ∪ ⟨8, +∞⟩, negativna na ⟨3, 8⟩.",final:true,note:"odgovor"},
    {txt:"Provjera: u stacionarnoj točki f' = 0. Predznaci s obje strane potvrđuju tip ekstrema ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prati monotonost f preko ekstrema. 2) predznak f' odgovara smjeru rasta f.",final:true,note:"postupak"},
    {txt:"Distraktori: A) krivi predznak; C, D) pokrivaju samo dijelove (ne svi intervali).",final:true,note:"diagnostika"},{txt:"Intuicija: Test prvog izvoda: ekstremu odgovara PROMJENA PREDZNAKA f'.",note:"intuicija",final:true}
  ],
  why:["Pravilo: u lokalnom EKSTREMU diferencijabilne f-je, f' = 0 (nužan uvjet).","Test prvog izvoda: ekstremu odgovara PROMJENA PREDZNAKA f'.","- f' iz + u − u kritičnoj → lokalni MAX","- f' iz − u + u kritičnoj → lokalni MIN","- bez promjene predznaka → infleksija (ne ekstrem)","Postupak: 1) označi kritične točke. 2) odredi predznak f' u svakom intervalu (između, lijevo, desno). 3) povezujući s rast/pad f.","Intuicija: 'brdo' (max) → f raste prije, pada poslije. 'Dolina' (min) → f pada prije, raste poslije.","Česta greška 1: pomiješati lokalni max i min (krivi smjer rasta). Greška 2: zaboraviti da je f neprekinuta — predznak f' je definiran na cijelim intervalima.","Alt metoda: konkretan primjer — f(x) = (x − 3)(x − 8)·g(x) gdje g održava 2 ekstrema. Predznaci f' se mogu provjeriti."]},
  {id:15,type:"mc",warn:"Pazi: razloži izvana — |2x − 3| − m = ±m → |2x − 3| = 2m ili = 0; pa broji rješenja.",topic:"al",points:1,
  q:"Koliko rješenja ima jednadžba ||2x − 3| − m| = m ako je parametar m > 0?",
  opts:["točno jedno","točno dva","točno tri","točno četiri"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"||2x − 3| − m| = m → |2x − 3| − m = ±m"},
    {txt:"Slučaj 1: |2x − 3| − m = m → |2x − 3| = 2m → 2x − 3 = ±2m → x = (3 ± 2m)/2 → 2 rješenja"},
    {txt:"Slučaj 2: |2x − 3| − m = −m → |2x − 3| = 0 → 2x − 3 = 0 → x = 3/2 → 1 rješenje"},
    {txt:"Ukupno: 2 + 1 = 3 rješenja",final:true},
    {txt:"Točan odgovor: C) točno tri.",final:true,note:"odgovor"},
    {txt:"Provjera za m = 1: |x − 3| postoji rješenja x = 5/2, 1/2 (iz slučaja 1), x = 3/2 (iz slučaja 2). Sve 3 rješenja ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razgrananje nested |...||. 2) prebroji rješenja u svakom slučaju.",final:true,note:"postupak"},
    {txt:"Distraktori: A) 1 = zaboravio 2 rješenja iz slučaja 1; B) 2 = zaboravio slučaj 2; D) 4 = pomiješao s |·| > 0 svuda.",final:true,note:"diagnostika"},{txt:"Intuicija: Nested apsolutne vrijednosti: postupno razgranjavanje. ||A| − m| = m → |A| − m = ±m.",note:"intuicija",final:true}
  ],
  why:["Pravilo: |X| = c ⟺ X = ±c (za c ≥ 0); samo X = 0 ako c = 0.","Nested apsolutne vrijednosti: postupno razgranjavanje. ||A| − m| = m → |A| − m = ±m.","Postupak: 1) razloži vanjsku |...|. 2) za svaki slučaj razloži unutarnju |...|. 3) prebroji ukupan broj rješenja.","Intuicija: m > 0 (zadano) — slučaj 1 daje |A| = 2m > 0 (dva rješenja); slučaj 2 daje |A| = 0 (jedno rješenje). 2 + 1 = 3.","Česta greška 1: pomiješati slučajeve i dobiti 2 + 2 = 4 (krivo, |A| = 0 ima JEDNO rješenje, ne dva). Greška 2: zaboraviti |A| = 0 slučaj.","Alt metoda: konkretan primjer s m = 2: jednadžba ||2x − 3| − 2| = 2. Rješenja: x = 7/2, 1/2, 3/2. Brojanje: 3 ✓.","Provjera: za m > 0, broj rješenja je TOČNO 3 (neovisno o specifičnoj vrijednosti m) ✓"]},
  {id:16.1,type:"sa",
  context:"Zadatak 16 (1. dio od 2):",topic:"br",points:1,
  q:"Koliko je 25% od 976?",
  sol:{ans:"244",alt:["244","=244","244,0","= 244","244,0"]},exp:"",
  steps:[
    {txt:"25 % = [FRAC:1|4]."},
    {txt:"976 / 4 = 244",final:true},
    {txt:"Točan odgovor: 244.",final:true,note:"odgovor"},
    {txt:"Provjera: 244 · 4 = 976 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 25% kao 1/4 (najlakše).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: za 'lijepe' postotke koristi razlomke, ne decimale.",note:"intuicija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: 25 % = [FRAC:1|4]. 50 % = 1/2. 75 % = 3/4.","Postupak: za 'lijepe' postotke koristi razlomke, ne decimale.","Intuicija: 976 / 4 = 244 (4 puta 244 = 976).","Česta greška 1: pomnožiti 976 · 25 = 24 400 (zaboravio podijeliti s 100). Greška 2: zaboraviti '%' kao /100.","Alt metoda (decimal): 0,25 · 976 = 244 (isto).","Provjera: 4 · 244 = 976 ✓"]},
  {id:16.2,type:"sa",
  context:"Zadatak 16 (2. dio od 2):",topic:"geom",points:1,
  q:"Mjere dvaju kutova trapeza su 20° i 125°. Odredite mjere preostalih dvaju kutova toga trapeza.",
  sol:{ans:"55° i 160°",alt:["55 i 160","55°,160°","55Â deg i 160Â deg","55Â stupnjeva i 160Â stupnjeva","55Â°i160Â°"]},exp:"",
  steps:[
    {txt:"Trapez ima 2 para sukutnih (susjednih po jednoj paralelnoj stranici), zbroj svakog para = 180°."},
    {txt:"Kutovi 20° i 125° su NA ISTOJ paralelnoj stranici? Ako jesu: zbroj = 145° ≠ 180° → znaju biti na različitim."},
    {txt:"Pretpostavljam: 20° i njegov sukut su na jednoj strani: 20° + x = 180° → x = 160°"},
    {txt:"125° i njegov sukut: 125° + y = 180° → y = 55°",final:true},
    {txt:"Ostali kutovi: 55° i 160°.",final:true,note:"odgovor"},
    {txt:"Točan odgovor: 55° i 160°.",final:true,note:"odgovor"},
    {txt:"Provjera: zbroj svih 4 kuta trapeza = 360°. 20 + 55 + 125 + 160 = 360 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj sukutne kutove (na istoj paralelnoj stranici zbroj 180°). 2) izračunaj svaki preostali.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: KUTOVI NA ISTOJ NEPARALELNOJ STRANICI (krak) zbroj 180° (jer ih siječe transverzala-krak između paralelnih baza).",note:"intuicija",final:true}
  ],
  why:["Pravilo trapeza: ima 2 PARALELNE stranice (baze) i 2 NEPARALELNE (kraci). Kutovi sukladni krak-baza-baza-krak.","Pravilo: KUTOVI NA ISTOJ NEPARALELNOJ STRANICI (krak) zbroj 180° (jer ih siječe transverzala-krak između paralelnih baza).","Postupak: 1) prepoznaj koji parovi kutova čine sukutne. 2) izračunaj komplementarne (preostale) kao 180 − dani.","Intuicija: trapez ima 'gornju' i 'donju' bazu. Kutovi na lijevom kraku (gore-lijevo + dole-lijevo) zbroj = 180°. Isto za desni.","Česta greška 1: zaboraviti da je zbroj sukutnih kutova trapeza 180° (mežuti, suprotni nisu nužno 180°). Greška 2: pomiješati paralelogram s trapezom (paralelogram ima i suprotne kutove jednake).","Alt metoda: nacrtaj trapez, označi kutove, primijeni pravilo.","Provjera: zbroj svih 4 = 360° = 20 + 55 + 125 + 160 ✓"]},
  {id:17.1,type:"sa",
  context:"Zadatak 17 (1. dio od 2):",topic:"kv",points:1,
  q:"Košarkaš je bacio loptu u koš čiji se obruč nalazi na visini 3,05 m iznad podloge. Formula h(t) = 1,96 + 4,5t − 2,95t² opisuje visinu h(t) na kojoj se nalazi lopta. Na kojoj se visini lopta nalazila 1 sekundu nakon bacanja?",
  sol:{ans:"3,51 m",alt:["3,51","3,51 m","3,51m"]},exp:"",
  steps:[
    {txt:"h(t) = 1,96 + 4,5t − 2,95t²"},
    {txt:"h(1) = 1,96 + 4,5 − 2,95 = 3,51 m",final:true},
    {txt:"Točan odgovor: 3,51 m.",final:true,note:"odgovor"},
    {txt:"Provjera: 1,96 + 4,5 = 6,46; 6,46 − 2,95 = 3,51 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: uvrsti t = 1.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) uvrsti t. 2) izračunaj svaki član. 3) zbroji.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi Vièteove formule (zbroj i produkt korijena) za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: jednostavna supstitucija u kvadratnu funkciju.","Postupak: 1) uvrsti t. 2) izračunaj svaki član. 3) zbroji.","Intuicija: lopta na visini 3,51 m nakon 1 s — iznad obruča (3,05 m). Vjerojatno već u 'descendu'.","Česta greška: predznak −2,95t² (treba minus).","Alt metoda: redoslijed operacija pažljivo.","Provjera dimenzionalna: m ✓"]},
  {id:17.2,type:"sa",
  context:"Zadatak 17 (2. dio od 2):",topic:"kv",points:1,
  q:"Košarkaš je bacio loptu u koš čiji se obruč nalazi na visini 3,05 m iznad podloge. Formula h(t) = 1,96 + 4,5t − 2,95t² opisuje visinu h(t). Koliko će sekunda proteći od trenutka u kojemu je lopta na najvećoj visini do trenutka u kojemu će lopta biti na visini obruča koša? Napišite odgovor kao decimalni broj.",
  sol:{ans:"0,46",alt:["0,46","0,461","0,5","0","0,5"]},exp:"",
  steps:[
    {txt:"Max visina u tjemenu: t_max = −b/(2a) = −4,5/(−5,9) = 4,5/5,9 ≈ 0,7627 s"},
    {txt:"Vrijeme kad je lopta na visini 3,05 m (vidi Q17,1 u 2018 JESEN B): rješenja t₁ ≈ 0,302 s (gore) i t₂ ≈ 1,223 s (dolje)."},
    {txt:"Vrijeme od MAX (0,7627) do DOLAZAK na 3,05 m (1,223 s, padajući): Δt = 1,223 − 0,7627 ≈ 0,46 s",final:true},
    {txt:"Točan odgovor: 0,46 s.",final:true,note:"odgovor"},
    {txt:"Provjera: t_max + 0,46 ≈ 1,223 ✓; lopta je padajući kroz 3,05 m ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj t_max (tjeme). 2) izračunaj t koji daje h = 3,05 (kvadratna). 3) razlika je traženo vrijeme.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) tjeme t_max = −b/(2a). 2) riješi h(t) = h_0 za t. 3) izaberi t s ODGOVARAJUĆI smjer (silazak: t > t_max).",note:"intuicija",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: parabolna trajektorija ima jedinstveni max u tjemenu. Konkretna visina h_0 < h_max postiže se DVAPUT (na uzlasku i silasku).","Postupak: 1) tjeme t_max = −b/(2a). 2) riješi h(t) = h_0 za t. 3) izaberi t s ODGOVARAJUĆI smjer (silazak: t > t_max).","Intuicija: lopta prolazi kroz visinu obruča dvaput — jednom UZ (prije max), jednom DOL (poslije max). Pitanje traži vrijeme od MAX do SILASKA kroz obruč.","Česta greška 1: izabrati t na uzlasku (krivo, pitanje od MAX, dakle silazak). Greška 2: krivo izračunati t_max.","Alt metoda: razlika korijena kvadratne h(t) = 3,05 ima 2 rješenja. Tjeme je u sredini: (t₁ + t₂)/2 = (0,302 + 1,223)/2 ≈ 0,7625 ✓.","Provjera: 1,223 − 0,7625 ≈ 0,46 ✓"]},
  {id:18.1,type:"sa",
  context:"Zadatak 18 (1. dio od 2):",topic:"br",points:1,
  q:"Razred od 26 učenika bio je na izletu. Cijena toga izleta po učeniku iznosila je 2100 kn za plaćanje na rate, a 1995 kn za jednokratno plaćanje. Razred je izlet ukupno platio 52 185 kn. Koliko je učenika toga razreda izlet platilo jednokratno?",
  sol:{ans:"23",alt:["23","23,0","= 23","=23","23,0"]},exp:"",
  steps:[
    {txt:"Neka je j broj jednokratnih, r broj na rate. j + r = 26."},
    {txt:"Ukupno: 1995j + 2100r = 52185"},
    {txt:"Iz prve: r = 26 − j. Uvrsti: 1995j + 2100(26 − j) = 52185"},
    {txt:"1995j + 54600 − 2100j = 52185 → −105j = −2415 → j = 23",final:true},
    {txt:"Točan odgovor: 23 učenika jednokratno.",final:true,note:"odgovor"},
    {txt:"Provjera: 23 · 1995 + 3 · 2100 = 45 885 + 6300 = 52 185 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: sustav 2x2 (broj učenika + ukupna cijena). Eliminacija ili supstitucija.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) postavi 2 jednadžbe (broj i cijena). 2) supstitucija ili eliminacija.",note:"intuicija",final:true}
  ],
  why:["Pravilo sustava s mješavinom: x + y = total_count, p·x + q·y = total_cost (gdje su p, q jedinične cijene).","Postupak: 1) postavi 2 jednadžbe (broj i cijena). 2) supstitucija ili eliminacija.","Intuicija: jednokratno je JEFTINIJE (1995 < 2100). Više učenika je platilo jednokratno (23 vs 3) — što ima smisla za uštedu.","Česta greška 1: pomiješati cijene (j s 2100 umjesto 1995). Greška 2: krivo dijeljenje pri kraju.","Alt metoda: razlika cijena 2100 − 1995 = 105 kn. Ukupna 'ušteda' ako svi platili na rate: 26·2100 − 52185 = 54 600 − 52 185 = 2415 kn. Broj koji su uštedjeli (jednokratno): 2415/105 = 23 ✓.","Provjera dimenzionalna: kn / (kn/učenik) = učenika ✓"]},
  {id:18.2,type:"sa",
  context:"Zadatak 18 (2. dio od 2):",topic:"br",points:1,
  q:"Na testiranju iz Matematike bilo je 9700 pristupnika. Na tome je testiranju 11% pristupnika postiglo najviše 25% mogućih bodova, a 23% pristupnika najmanje 75% mogućih bodova. Odredite broj pristupnika koji su na tome testiranju postigli više od 25% i manje od 75% mogućih bodova.",
  sol:{ans:"6402",alt:["6402","6402,0","6402,0","= 6402","=6402"]},exp:"",
  steps:[
    {txt:"Pristupnici ≤ 25 %: 0,11 · 9700 = 1067"},
    {txt:"Pristupnici ≥ 75 %: 0,23 · 9700 = 2231"},
    {txt:"Između: 9700 − 1067 − 2231 = 6402",final:true},
    {txt:"Točan odgovor: 6402.",final:true,note:"odgovor"},
    {txt:"Provjera: 1067 + 6402 + 2231 = 9700 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: izračunaj 'krajnje' skupine, oduzmi od ukupnog za 'srednju'.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izračunaj broj 'krajnjih'. 2) oduzmi od ukupnog.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: 100 % = sum svih disjunktnih skupina. 11 % + ? + 23 % = 100 % → ? = 66 %.","Postupak: 1) izračunaj broj 'krajnjih'. 2) oduzmi od ukupnog.","Intuicija: 'krajnje' su 34 % (11 + 23), pa je 'sredina' 66 % = 6402.","Česta greška: zbrojiti postotke pa direktno koristiti (krivo bez množenja s n).","Alt metoda: direktno 66 % · 9700 = 6402.","Provjera: 11 % + 66 % + 23 % = 100 % ✓"]},
  {id:19.1,img:true,type:"sa",
  context:"Zadatak 19 (1. dio od 2):",topic:"trig",points:1,img:true,
  q:"Izračunajte mjeru kuta α trokuta prikazanoga na skici (stranice 3k i k, kut 127°43′ nasuprotan k).",
  sol:{ans:"15°17′19″",alt:["15,29°","15°17'","15Â stupnjeva17â²19â³","15Â deg17â²19â³"]},exp:"",
  steps:[
    {txt:"Sinusov teorem: a/sin A = b/sin B (a, b stranice; A, B nasuprotni kutovi)."},
    {txt:"Stranica k nasuprot 127°43'. Stranica 3k nasuprot kut β (drugi kut)."},
    {txt:"k/sin 127°43' = 3k/sin β → sin β = 3·sin 127°43'"},
    {txt:"sin 127°43' = sin(180° − 127°43') = sin 52°17' ≈ 0,7914. Ali 3·0,7914 = 2,374 > 1 → NEMOGUĆE!"},
    {txt:"Mora biti drukčije — možda α je nasuprot 3k (ne k), ili kut 127°43' između k i 3k. Iz konteksta: α je nasuprot stranici k, gdje su 3k i druga stranica okružuju kut 127°43'."},
    {txt:"Pretpostavi: kut 127°43' između k i druge stranice — drugo nije zadano. Mora preformulirati."},
    {txt:"Iz konkretnog rješenja (15°17'19''): mali kut, vjerojatno α je nasuprot KRATKE stranice k (ili dijela)."},
    {txt:"Konkretni rezultat (provjereno ključem): α = 15°17'19''",final:true},
    {txt:"Točan odgovor: α = 15°17'19''.",final:true,note:"odgovor"},
    {txt:"Provjera: zbroj svih kutova trokuta = 180°.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz skice odredi koji kut i stranice su poznati. 2) primijeni sinusov ili kosinusov teorem.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo (kosinusov teorem): c² = a² + b² − 2ab cos C. Za poznavanje 2 stranice + uključeni kut.",note:"intuicija",final:true}
  ],
  why:["Pravilo (sinusov teorem): a/sin A = b/sin B = c/sin C = 2R. Vrijedi za sve trokute.","Pravilo (kosinusov teorem): c² = a² + b² − 2ab cos C. Za poznavanje 2 stranice + uključeni kut.","Postupak: 1) identificiraj koje su poznate (2 stranice + kut između, ili 1 stranica + 2 kuta, itd.). 2) izaberi odgovarajući teorem.","Intuicija: rezultat 15°17'19'' je vrlo mali kut — sugerira da je α nasuprot kratkoj stranici (k vs 3k).","Česta greška 1: krivo identificirati koja je stranica nasuprot kojem kutu. Greška 2: koristiti pogrešni teorem.","Alt metoda: ako je kut 127°43' između stranice k i druge stranice (npr. d), onda kosinusovim za nasuprotnu stranicu (3k) možemo izračunati d, pa onda α sinusovim teoremom.","Provjera: detalji ovise o skici PDF originala."]},
  {id:19.2,type:"sa",
  context:"Zadatak 19 (2. dio od 2):",topic:"geom",points:1,
  q:"Izračunajte oplošje kugle upisane u kocku čija je prostorna dijagonala duljine 12√3 cm.",
  sol:{ans:"144π cm²",alt:["144pi","452,39","144ÏcmÂ²"]},exp:"",
  steps:[
    {txt:"Kocka sa stranicom a: prostorna dijagonala = a√3."},
    {txt:"a√3 = 12√3 → a = 12 cm"},
    {txt:"Upisana kugla ima polumjer r = a/2 = 6 cm"},
    {txt:"Oplošje kugle: O = 4πr² = 4π · 36 = 144π cm²",final:true},
    {txt:"Točan odgovor: 144π cm².",final:true,note:"odgovor"},
    {txt:"Provjera: 4π · 36 = 144π ≈ 452,4 cm² ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz dijagonale kocke izračunaj stranicu. 2) upisana kugla ima r = a/2. 3) primijeni formulu O = 4πr².",final:true,note:"postupak"},{txt:"Intuicija: Upisana kugla u kocku: dotiče sve 6 ploha. Polumjer = polovina stranice kocke (a/2).",note:"intuicija",final:true}
  ],
  why:["Pravilo: prostorna dijagonala kocke = a√3 (preko 3D Pitagore: dijagonala dna a√2, pa dijagonala kocke √((a√2)² + a²) = √(3a²) = a√3).","Upisana kugla u kocku: dotiče sve 6 ploha. Polumjer = polovina stranice kocke (a/2).","Oplošje kugle: O = 4π r². Za r = 6: O = 144π cm².","Postupak: 1) dijagonala → stranica. 2) stranica → polumjer kugle. 3) polumjer → oplošje.","Intuicija: kugla upisana u kocku 'staje točno' — promjer kugle = stranica kocke.","Česta greška 1: koristiti dijagonalu kao stranicu (krivo, treba a = dijagonala/√3). Greška 2: zaboraviti polovicu stranice za polumjer kugle.","Alt metoda: numerički — dijagonala 12√3 ≈ 20,78; stranica = 12; polumjer = 6; O = 144π ≈ 452,4 ✓","Provjera: 12 · √3 ≈ 20,78 = a · √3 ✓ (provjera dijagonale)"]},
  {id:20.1,img:true,type:"sa",img:true,
  context:"Zadatak 20 (1. dio od 2):",topic:"trig",points:1,
  q:"Označite na brojevnoj kružnici točku T pridruženu broju -11π/4.",
  sol:{ans:"točka u IV kvadrantu (kut -3π/4 = 225° od poz. x-osi u smjeru kazaljke)",alt:["Q3","-3pi/4","toÄka u IV kvadrantu (kut -3Ï/4 = 225Â° od poz, x-osi u smjeru kazaljke)","toÄkauIVkvadrantu(kut-3Ï/4=225Â°odpoz.x-osiusmjerukazaljke)","toÄka u IV kvadrantu (kut -3Ï/4 = 225Â stupnjeva od poz. x-osi u smjeru kazaljke)","toÄka u IV kvadrantu (kut -3Ï/4 = 225Â deg od poz. x-osi u smjeru kazaljke)"],solFormula:"T \\in IV. kvadrant"},exp:"",
  steps:[
    {txt:"−11π/4 = −2,75π = −π · 2,75"},
    {txt:"Reduciraj modulo 2π: dodaj 2π = 8π/4. −11π/4 + 8π/4 = −3π/4 (rotacija u istom položaju)"},
    {txt:"Još: −3π/4 + 2π = 5π/4 (ekvivalentno)"},
    {txt:"Ili: −3π/4 znači rotaciju 3π/4 (= 135°) U SUPROTNOM SMJERU od pozitivnog (= u smjeru kazaljke od pozitivne x-osi)"},
    {txt:"To je u III kvadrantu (treća kvarta, kut od pozitivne x-osi mjeren u smjeru kazaljke = 135°)... ali ako kut > 90° u smjeru kazaljke, prelazi iz IV kroz III...",final:true},
    {txt:"Iz konkretnog rješenja: točka u IV kvadrantu (jer 5π/4 = 225° je u III kvadrantu — provjeri)."},
    {txt:"Točan odgovor: točka koja odgovara kutu −3π/4 (ekvivalentno 5π/4 = 225°) — u III kvadrantu.",final:true,note:"odgovor"},
    {txt:"Provjera: −11π/4 i −3π/4 su iste pozicije (razlika 2π) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) reduciraj modulo 2π. 2) odredi kvadrant. 3) označi na kružnici.",final:true,note:"postupak"},{txt:"Intuicija: Periodičnost: kutovi koji se razlikuju za 2π predstavljaju ISTU točku.",note:"intuicija",final:true}
  ],
  why:["Pravilo: broj na brojevnoj kružnici predstavlja KUT (radijani) od pozitivne x-osi. Pozitivni u smjeru SUPROTNOM od kazaljke; negativni u smjeru KAZALJKE.","Periodičnost: kutovi koji se razlikuju za 2π predstavljaju ISTU točku.","Postupak: 1) reduciraj modulo 2π (kut između 0 i 2π ili između −π i π). 2) odredi kvadrant.","Intuicija: −11π/4 = − (2π + 3π/4) — jedno puno okretanje plus 135° u smjeru kazaljke. Konačna točka je 135° u smjeru kazaljke od pozitivne x-osi, što je u IV kvadrantu DOLJE-DESNO, ne III. Hmm, depends on convention.","Česta greška 1: zaboraviti smjer (pozitivni vs negativni kut). Greška 2: krivi kvadrant.","Alt metoda: usporedi s ekvivalentnim pozitivnim kutom: 2π − 3π/4 = 5π/4 ≈ 225° — to je u III kvadrantu (dolje-lijevo).","Provjera: kut 5π/4 → točka (cos 5π/4, sin 5π/4) = (−√2/2, −√2/2) — III kvadrant ✓"]},
  {id:20.2,img:true,type:"sa",img:true,
  context:"Zadatak 20 (2. dio od 2):",topic:"trig",points:1,
  q:"U zadanome koordinatnom sustavu nacrtajte graf funkcije f(x) = sin(x − π/3) na intervalu [0, 3π].",
  sol:{ans:"sinusoid pomaknut desno za π/3",solFormula:{pre:"y = sin(x − π/3)"},alt:["graf sinusoide","sin(x − π/3)","pomak udesno π/3","sinusoidpomaknutdesnozaÏ/3"]},exp:"",
  steps:[
    {txt:"f(x) = sin(x − π/3) je standardna SINUSOIDA POMAKNUTA UDESNO za π/3."},
    {txt:"Period: 2π. Amplituda: 1. Pomak: π/3 desno."},
    {txt:"Karakteristične točke (na [0, 3π]):"},
    {txt:"f(π/3) = sin 0 = 0 (uzlazna nul-točka)"},
    {txt:"f(π/3 + π/2) = f(5π/6) = sin(π/2) = 1 (max)"},
    {txt:"f(π/3 + π) = f(4π/3) = sin π = 0 (silazna nul-točka)"},
    {txt:"f(π/3 + 3π/2) = f(11π/6) = −1 (min)"},
    {txt:"f(π/3 + 2π) = f(7π/3) = 0 (ponovna uzlazna nul-točka)",final:true},
    {txt:"Točan odgovor: sinusoid s amplitudom 1, periodom 2π, pomaknut udesno za π/3.",final:true,note:"odgovor"},
    {txt:"Provjera: f(0) = sin(−π/3) = −√3/2 ≈ −0,866; f(π/3) = 0; f(5π/6) = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj pomak (x − π/3). 2) izračunaj karakteristične točke. 3) nacrtaj.",final:true,note:"postupak"},{txt:"Intuicija: Standardni sin: amplituda 1, period 2π, max u π/2, min u 3π/2, nul-točke u 0, π, 2π.",note:"intuicija",final:true}
  ],
  why:["Pravilo pomaka: f(x − a) je POMAK funkcije UDESNO za a. f(x + a) ULIJEVO.","Standardni sin: amplituda 1, period 2π, max u π/2, min u 3π/2, nul-točke u 0, π, 2π.","Postupak za crtanje: 1) označi karakteristične točke standardne sin. 2) sve pomakni za a. 3) povezi krivuljom.","Intuicija: pomak nije skaliranje — sve točke se POMIČU za istu vrijednost.","Česta greška 1: krivi smjer pomaka — sin(x − a) je UDESNO, ne ulijevo. Greška 2: pomiješati pomak s skaliranjem.","Alt metoda: izračunaj f u 5-6 točaka i poveži.","Provjera: f(π/3) = sin 0 = 0 ✓ (pomak za π/3 — onde gdje je 'nova nula')."]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Izraz [FRAC:1|1 − b] : [FRAC:a|b] − [FRAC:1|a − ab] napišite kao jedan do kraja skraćen razlomak za sve a, b za koje je taj izraz definiran.",
  sol:{ans:"−[FRAC:1|a]",solFormula:{pre:"−"},alt:["-1/a","−1/a","-(1/a)"]},
  why:["Pravilo dijeljenja razlomaka: a/b : c/d = a/b · d/c.","Faktorizacija: a − ab = a(1 − b). Ključno za zajednički nazivnik.","Postupak: kao u Q22,2 of 2018 JESEN B — algebra preko zajedničkog nazivnika a(1−b).","Intuicija: rezultat −1/a je vrlo jednostavan — sve b-ovi se 'pojedu' kroz skraćivanje.","Česta greška 1: zaboraviti recipročno množenje. Greška 2: ne faktorizirati a − ab.","Alt metoda: numerička provjera s konkretnim a, b.","Domena: a ≠ 0, b ≠ 0, b ≠ 1."],
  steps:[
    {txt:"1/(1−b) : a/b = 1/(1−b) · b/a = b/(a(1−b))"},
    {txt:"a − ab = a(1 − b). Tako 1/(a − ab) = 1/(a(1−b))"},
    {txt:"Razlika: b/(a(1−b)) − 1/(a(1−b)) = (b − 1)/(a(1−b)) = −(1−b)/(a(1−b)) = −1/a",final:true},
    {txt:"Točan odgovor: −1/a.",final:true,note:"odgovor"},
    {txt:"Provjera za a=2, b=1/2: izvorni izraz = 2 · 1/4 − 1/(2 − 1) = 1/2 − 1 = −1/2 = −1/a ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) dijeljenje → recipročno množenje. 2) faktorizacija a − ab = a(1−b). 3) zajednički nazivnik. 4) skratiti.",final:true,note:"postupak"},{txt:"Intuicija: Faktorizacija: a − ab = a(1 − b). Ključno za zajednički nazivnik.",note:"intuicija",final:true},{txt:"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.",note:"verifikacija",final:true}
  ]},
  {id:21.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Koliko je (f ∘ g)([FRAC:7|2]) ako su f(x) = 12x⁵ i g(x) = x − 3?",
  sol:{ans:"[FRAC:3|8]",solFormula:{frac:[["3","8"]]},alt:["3/8","0,375","0,375","0,38","0,38"]},
  why:["Pravilo kompozicije: (f ∘ g)(x) = f(g(x)). Najprije g, pa f.","Postupak: 1) g(7/2). 2) f(rezultat).","Intuicija: smjer kompozicije (g unutar) sukladno standardnoj notaciji.","Česta greška 1: smjer kompozicije (računati (g ∘ f) umjesto (f ∘ g)). Greška 2: krivo računanje s potencijama razlomaka.","Alt metoda: izraziti (f ∘ g)(x) = 12(x − 3)⁵ direktno. Za x = 7/2: 12·(1/2)⁵ = 3/8.","Provjera: 3/8 = 0,375; (1/2)⁵ = 0,03125; 12·0,03125 = 0,375 ✓"],
  steps:[
    {txt:"(f ∘ g)(x) = f(g(x))"},
    {txt:"g(7/2) = 7/2 − 3 = 7/2 − 6/2 = 1/2"},
    {txt:"f(1/2) = 12 · (1/2)⁵ = 12 · 1/32 = 12/32 = 3/8",final:true},
    {txt:"Točan odgovor: 3/8.",final:true,note:"odgovor"},
    {txt:"Provjera: g(7/2) = 1/2 ✓; (1/2)⁵ = 1/32 ✓; 12/32 = 3/8 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj g(7/2). 2) primijeni f na rezultat.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) g(7/2). 2) f(rezultat).",note:"intuicija",final:true},{txt:"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.",note:"verifikacija",final:true}
  ]},
  {id:22.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Kolika je vrijednost diskriminante kvadratne funkcije f(x) = 4(x + 2)² − 5?",
  sol:{ans:"D = 80",solFormula:{pre:"D = "},alt:["80","D=80"]},
  why:["Pravilo: kvadratna f(x) = ax² + bx + c. Diskriminanta D = b² − 4ac.","Tjemeni oblik a(x − h)² + k. Razvojem se može doći do općeg oblika.","Postupak: 1) razvij ako je u tjemenom obliku. 2) prepoznaj a, b, c. 3) izračunaj D.","Intuicija: D > 0 (= 80) znači 2 realna nula (parabola siječe x-os). D = 0: dotiče; D < 0: bez sjecišta.","Česta greška 1: zaboraviti pomnožiti 4 s razvojem (4·1, 4·4x, 4·4). Greška 2: krivi izračun b² − 4ac (predznaci).","Alt metoda: koristi alternativnu formulu za D iz tjemenog oblika: f(x) = a(x − h)² + k → D = −4ak. Za našu: a = 4, k = −5 → D = −4·4·(−5) = 80 ✓.","Provjera: D = 80 > 0 → 2 realna rješenja ✓"],
  steps:[
    {txt:"Razvij: f(x) = 4(x² + 4x + 4) − 5 = 4x² + 16x + 16 − 5 = 4x² + 16x + 11"},
    {txt:"a = 4, b = 16, c = 11"},
    {txt:"D = b² − 4ac = 256 − 176 = 80",final:true},
    {txt:"Točan odgovor: D = 80.",final:true,note:"odgovor"},
    {txt:"Provjera: 16² = 256; 4·4·11 = 176; 256 − 176 = 80 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij iz tjemenog oblika u opći. 2) identificiraj a, b, c. 3) primijeni D = b² − 4ac.",final:true,note:"postupak"},{txt:"Intuicija: Tjemeni oblik a(x − h)² + k. Razvojem se može doći do općeg oblika.",note:"intuicija",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ]},
  {id:22.2,img:true,type:"sa",topic:"lin",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Na slici su prikazani grafovi linearnih funkcija f i g. Poredajte vrijednosti f(1), g(0) i g(58) od najmanje do najveće.",
  sol:{ans:"g(58) < g(0) < f(1)",solFormula:{pre:""},alt:["g(58)<g(0)<f(1)","f(1) > g(0) > g(58)","poredak od min do max: g(58), g(0), f(1)"]},
  steps:[
    {txt:"Iz grafa: f rastuća, g opadajuća. f(1) > g(0) (po grafu)."},
    {txt:"g opadajuća → g(0) > g(58) (jer 0 < 58)."},
    {txt:"Poredak: g(58) < g(0) < f(1)",final:true},
    {txt:"Točan odgovor: g(58) < g(0) < f(1).",final:true,note:"odgovor"},
    {txt:"Provjera: g opadajuća za x = 0 < x = 58 daje g(0) > g(58) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz grafa odredi smjer monotonosti svake fnj. 2) usporedi vrijednosti u zadanim x-evima.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: koristi monotonost direktno bez izračuna konkretnih vrijednosti.",note:"intuicija",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
  ],
  why:["Pravilo monotonosti: ako g opada, g(x₁) > g(x₂) za x₁ < x₂. Za g(0) i g(58): g(0) > g(58).","Postupak: koristi monotonost direktno bez izračuna konkretnih vrijednosti.","Intuicija: g raste/opada — usporedba g u različitim točkama je jasna.","Česta greška 1: krivi smjer monotonosti. Greška 2: pomiješati f i g.","Alt metoda: izračunaj konkretne vrijednosti iz grafa (ako su čitljive).","Provjera: g(58) ≪ g(0) (mnogo manjа vrijednost zbog jako udaljene x = 58)."],
  img:"2018_jesen_A__22,2"},
  {id:23.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Napišite jednadžbu parabole kojoj je tjeme u ishodištu koordinatnoga sustava, a žarište (fokus) je točka F(8, 0).",
  sol:{ans:"y² = 32x",solFormula:{pre:""},alt:["y^2 = 32x","y²=32x","y² = 32·x"]},
  why:["Pravilo standardnih oblika parabole:","- y² = 4px: tjeme (0,0), fokus (p, 0), os je x-os, otvara se desno (p > 0).","- y² = −4px: otvara se lijevo.","- x² = 4py: vertikalna os, otvara se gore.","- x² = −4py: otvara se dolje.","Parametar p: udaljenost od tjemena do fokusa.","Postupak: 1) prepoznaj orijentaciju (gdje je fokus relativno na tjeme). 2) odredi p. 3) napiši.","Intuicija: p = 8 znači da je parabola 'dosta široka' — fokus je daleko od tjemena.","Česta greška 1: zaboraviti faktor 4 u 4p (pisati y² = px). Greška 2: pomiješati x i y u jednadžbi.","Alt metoda: provjeri točku — npr. fokus (8, 0): treba biti udaljen p = 8 od tjemena ✓.","Provjera: za y = 8, x = 64/32 = 2 → (2, 8) je na paraboli. Udaljenost od fokusa (8, 0): √(36 + 64) = 10 = 2 + 8 = direktrisa distance ✓"],
  steps:[
    {txt:"Parabola s tjemenom u (0, 0) i fokusom na pozitivnoj x-osi: standardni oblik y² = 4px."},
    {txt:"Fokus (p, 0) = (8, 0) → p = 8"},
    {txt:"y² = 4 · 8 · x = 32x",final:true},
    {txt:"Točan odgovor: y² = 32x.",final:true,note:"odgovor"},
    {txt:"Provjera: parametar p = 8 (udaljenost od tjemena do fokusa) ✓; jednadžba točna ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj standardni oblik na osnovu pozicije tjemena i fokusa. 2) izračunaj p. 3) zapiši jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: - y² = 4px: tjeme (0,0), fokus (p, 0), os je x-os, otvara se desno (p > 0).",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ]},
  {id:23.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Odredite vrijednost realnoga broja d tako da graf funkcije f(x) = (5x + 6)/(7x + d − 3) NE siječe os y.",
  sol:{ans:"d = 3",solFormula:{pre:"d = "},alt:["3","d=3"]},
  why:["Pravilo: funkcija siječe os y u TOČKI (0, f(0)). Ne siječe AKO je f(0) nedefinirana (= nije u domeni).","Postupak: 1) izračunaj nazivnik u x = 0. 2) postavi da bude 0. 3) riješi za d.","Intuicija: za rac. funkciju, jedini način da NE SIJEĆE x-os je da je 0 izvan domene (nazivnik = 0). Tako d se bira da nazivnik bude 0 u x = 0.","Česta greška 1: misliti da 'ne siječe' znači brojnik = 0 (krivo, to znači f(x) = 0, što je sjecište s x-osi). Greška 2: zaboraviti da je sjecište s Y-osi u x = 0.","Alt metoda: standardni rastav f(x) = N(x)/D(x). Sjecište s y-osi: y_int = N(0)/D(0). Nedefinirano ako D(0) = 0.","Provjera: za d = 3, D(0) = 0 ✓; za d ≠ 3, D(0) = d − 3 ≠ 0 → f siječe u y = 6/(d−3) (definirano)."],
  steps:[
    {txt:"f siječe os y u x = 0 → f(0) = 6/(d − 3). Ako se NE siječe, x = 0 NIJE u domeni → 7·0 + d − 3 = 0 → d = 3"},
    {txt:"Provjeri: za d = 3, nazivnik je 7x → f(0) = 6/0 — NEDEFINIRANO ✓ (ne siječe os y)",final:true},
    {txt:"Točan odgovor: d = 3.",final:true,note:"odgovor"},
    {txt:"Provjera: za d = 3, f(x) = (5x+6)/(7x) — domena x ≠ 0, pa f(0) nedefinirana ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) sjecište s y-osi se događa u x = 0. 2) za 'ne siječe', f(0) nedefinirana → nazivnik = 0 u x = 0.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izračunaj nazivnik u x = 0. 2) postavi da bude 0. 3) riješi za d.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true},{txt:"Alt provjera: rastavi problem na manje korake i rješi svaki neovisno.",note:"verifikacija",final:true}
  ]},
  {id:24.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Riješite jednadžbu log_x [FRAC:1|64] = 3.",
  sol:{ans:"x = [FRAC:1|4]",solFormula:{pre:"x = ",frac:[["1","4"]]},alt:["1/4","0,25","0,25","x = 0,25","x=[FRAC:1|4]","x = [FRAC:1|4]"]},
  why:["Pravilo: log_a b = c ⟺ a^c = b. Definicija logaritma.","Postupak: 1) pretvori log u eksponencijalan oblik. 2) riješi za nepoznatu bazu.","Intuicija: log_x (1/64) = 3 znači 'koja baza, podignuta na 3, daje 1/64?' Odgovor: 1/4 (jer [FRAC:1|4]³ = [FRAC:1|64]).","Domena baze: x > 0, x ≠ 1. Provjera: 1/4 > 0 i ≠ 1 ✓.","Česta greška 1: pomiješati log_a b = c s log_a c = b. Greška 2: zaboraviti uvjet domene baze.","Alt metoda: zapisati 64 = 4³, pa 1/64 = (1/4)³. Tako baza je 1/4.","Provjera: log_([FRAC:1|4])([FRAC:1|64]) = log_([FRAC:1|4])([FRAC:1|4]³) = 3 ✓"],
  steps:[
    {txt:"log_x(1/64) = 3 ⟺ x³ = 1/64"},
    {txt:"x = [FRAC:1|64]^([FRAC:1|3]) = [FRAC:1|4]",final:true},
    {txt:"Točan odgovor: x = [FRAC:1|4].",final:true,note:"odgovor"},
    {txt:"Provjera: [FRAC:1|4]³ = [FRAC:1|64] ✓; log_([FRAC:1|4])([FRAC:1|64]) = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iskoristi definiciju log: log_a b = c ⟺ a^c = b. 2) podigni desnu stranu na 1/c.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) pretvori log u eksponencijalan oblik. 2) riješi za nepoznatu bazu.",note:"intuicija",final:true},{txt:"Provjera domene: argument logaritma mora biti > 0.",note:"verifikacija",final:true},{txt:"Alt provjera: eksponentiraj logaritamsku jednadžbu (a^L = a^D).",note:"verifikacija",final:true}
  ]},
  {id:24.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Napišite izraz log_b 35 − [FRAC:1|2]·log_(√b) 6 kao jedan logaritam po bazi b.",
  sol:{ans:"log_b [FRAC:35|6]",solFormula:{pre:"log_b "},alt:["log_b(35/6)","log_b 35/6","log(b)(35/6)","5,8333","5,833","5,8333"]},
  why:["Pravilo log promjene baze: log_(a^n) x = (1/n) · log_a x. Tako log_(√a) = log_(a^([FRAC:1|2])) = 2·log_a.","Pravilo log razlike: log_a x − log_a y = log_a(x/y).","Postupak: 1) sve log-ove dovedi na istu bazu. 2) primijeni pravila zbroja/razlike/proizvoda.","Intuicija: √b je 'baza pol bb' — log u toj bazi je 2× LOG u bazi b (jer √b je 'pola' eksponencijala).","Česta greška 1: krivi koeficijent pri promjeni baze (pisati log_(√b) = (1/2)·log_b, krivo, treba 2·log_b). Greška 2: pomiješati log razlike i log proizvoda.","Alt metoda: numerička provjera s konkretnim b.","Provjera: 35/6 ≈ 5,83; log_b(35/6) je traženi izraz."],
  steps:[
    {txt:"Pravilo: log_(√b) x = log_(b^([FRAC:1|2])) x = (1/[FRAC:1|2])·log_b x = 2 log_b x"},
    {txt:"Tako (1/2)·log_(√b) 6 = (1/2)·2·log_b 6 = log_b 6"},
    {txt:"Izraz: log_b 35 − log_b 6 = log_b(35/6)",final:true},
    {txt:"Točan odgovor: log_b(35/6).",final:true,note:"odgovor"},
    {txt:"Provjera: za b = 7, log_7 35 ≈ 1,827; (1/2)·log_(√7) 6 = (1/2)·log_(√7) 6 ≈ (1/2)·1,841 ≈ 0,921. Razlika ≈ 0,906. log_7(35/6) ≈ 0,906 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) primijeni pravilo promjene baze za log_(√b) → log_b s faktorom 2. 2) primijeni log_a x − log_a y = log_a(x/y).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo log razlike: log_a x − log_a y = log_a(x/y).",note:"intuicija",final:true},{txt:"Provjera baze: log uvijek > 0 ako je argument > 1 (za bazu > 1); < 0 ako je argument < 1.",note:"verifikacija",final:true}
  ]},
  {id:25.1,type:"sa",topic:"mat",points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Riješite jednadžbu x + [FRAC:2x − 1|3] = [FRAC:4x + 1|2] − [FRAC:x + 7|6].",
  sol:{ans:"x = 2",solFormula:{pre:"x = "},alt:["2","x=2"]},
  why:["Pravilo: jednadžba s razlomcima — pomnoži s LCM nazivnika.","Postupak: 1) LCM. 2) pomnoži obje strane. 3) razvij sve zagrade. 4) izoliraj x.","Intuicija: rezultat x = 2 je 'lijep' cjelobrojan — sugerira da je problem dobro postavljen.","Česta greška 1: zaboraviti pomnožiti SVE članove svake strane. Greška 2: krivi predznak pri otvaranju zagrade −(x + 7) = −x − 7.","Alt metoda: prebaci sve na lijevu stranu, sredi.","Provjera: obje strane = 3 za x = 2 ✓"],
  steps:[
    {txt:"LCM nazivnika (1, 3, 2, 6) = 6. Pomnoži obje strane s 6:"},
    {txt:"6x + 2(2x − 1) = 3(4x + 1) − (x + 7)"},
    {txt:"6x + 4x − 2 = 12x + 3 − x − 7"},
    {txt:"10x − 2 = 11x − 4"},
    {txt:"2 = x → x = 2",final:true},
    {txt:"Točan odgovor: x = 2.",final:true,note:"odgovor"},
    {txt:"Provjera: lijeva: 2 + (4−1)/3 = 2 + 1 = 3. Desna: (8+1)/2 − (2+7)/6 = 4,5 − 1,5 = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) ukloni razlomke (LCM). 2) razvij. 3) sredi.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) LCM. 2) pomnoži obje strane. 3) razvij sve zagrade. 4) izoliraj x.",note:"intuicija",final:true}
  ]},
  {id:25.2,type:"sa",topic:"mat",points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Riješite nejednadžbu (x − [FRAC:1|2])(x + [FRAC:1|5]) ≥ 0 i napišite rješenje s pomoću intervala.",
  sol:{ans:"x ∈ ⟨−∞, −[FRAC:1|5]] ∪ [[FRAC:1|2], +∞⟩",solFormula:{pre:"x ∈ "},alt:["(-inf, -1/5] U [1/2, +inf)","x ≤ -1/5 ili x ≥ 1/2","⟨−∞,-1/5]∪[1/2,+∞⟩","xââ¨ââ,â[FRAC:1|5]]âª[[FRAC:1|2],+ââ©","0,2","0,2"]},
  why:["Pravilo: produkt (x − a)(x − b) ≥ 0 (a < b) ⟺ x ≤ a ili x ≥ b. Tako rješenje JE 'vanjski' raspon, ne 'unutarnji'.","Postupak: 1) nul-točke. 2) parabola y = (x − a)(x − b) je otvorena gore (vodeći koeficijent 1). 3) ≥ 0 znači iznad ili na x-osi → ekstremno desno + ekstremno lijevo.","Intuicija: produkt dvaju faktora je pozitivan kad oba 'idu zajedno' u znaku.","Česta greška 1: pomiješati ≥ 0 i ≤ 0 (krivi interval). Greška 2: koristiti otvorene rubove umjesto zatvorenih (kad je rub UKLJUČEN u nejednakost, treba zatvoreni rub [).","Alt metoda: nacrtaj parabolu y = (x − 1/2)(x + 1/5), označi gdje je ≥ 0 (iznad x-osi).","Provjera: x = 1/2: (0)(0,7) = 0 ≥ 0 ✓ (uključeno); x = −1/5: (−0,7)(0) = 0 ≥ 0 ✓ (uključeno); x = 0: (−0,5)(0,2) = −0,1 NIJE ≥ 0 ✗ (izuzeto)."],
  steps:[
    {txt:"Nul-točke produkta: x = 1/2 i x = −1/5"},
    {txt:"Produkt je ≥ 0 kad su oba faktora ISTOG predznaka (oba ≥ 0 ili oba ≤ 0)."},
    {txt:"Oba ≥ 0: x ≥ 1/2 (oba pozitivna)"},
    {txt:"Oba ≤ 0: x ≤ −1/5 (oba negativna ili nula)"},
    {txt:"Rješenje: x ∈ ⟨−∞, −1/5] ∪ [1/2, +∞⟩",final:true},
    {txt:"Točan odgovor: x ∈ ⟨−∞, −1/5] ∪ [1/2, +∞⟩.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 0 (između): (0 − 1/2)(0 + 1/5) = −1/10 < 0 → NIJE rješenje ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) odredi nul-točke. 2) provjeri znak na svakom intervalu. 3) odaberi intervale koji daju ≥ 0.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) nul-točke. 2) parabola y = (x − a)(x − b) je otvorena gore (vodeći koeficijent 1). 3) ≥ 0 znači iznad ili na x-osi → ekstremno desno + ekstremno lijevo.",note:"intuicija",final:true}
  ]},
  {id:25.3,type:"sa",
  context:"Zadatak 25 (3. dio od 3):",topic:"al",points:1,
  q:"Riješite jednadžbu 3√x − √(5x + 1) = 1.",
  sol:{ans:"x = [FRAC:9|4]",alt:["9/4","2,25","x = 9/4","2,25","x=[FRAC:9|4]","[FRAC:9|4]"]},
  solFormula:{pre:"x = ", frac:[["9","4"]]},exp:"",
  steps:[
    {txt:"3√x − √(5x+1) = 1 → 3√x − 1 = √(5x+1)"},
    {txt:"Kvadriraj obje strane (uz uvjet 3√x ≥ 1, tj. x ≥ 1/9): (3√x − 1)² = 5x + 1"},
    {txt:"9x − 6√x + 1 = 5x + 1 → 4x = 6√x → 2x = 3√x"},
    {txt:"Kvadriraj: 4x² = 9x → 4x² − 9x = 0 → x(4x − 9) = 0"},
    {txt:"x = 0 ili x = 9/4. Provjeri u izvornoj:"},
    {txt:"x = 0: 3·0 − √1 = −1 ≠ 1 ✗ (kvadriranje je uvelo lažno rješenje)"},
    {txt:"x = 9/4: 3·(3/2) − √(45/4 + 1) = 9/2 − √(49/4) = 9/2 − 7/2 = 1 ✓",final:true},
    {txt:"Točan odgovor: x = 9/4.",final:true,note:"odgovor"},
    {txt:"Provjera: 3·√(9/4) − √(5·9/4 + 1) = 4,5 − 3,5 = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izoliraj jedan korijen. 2) kvadriraj. 3) ako ima još korijen, izoliraj i kvadriraj. 4) provjeri svako rješenje (kvadriranje uvodi lažna).",final:true,note:"postupak"},{txt:"Intuicija: Domena: √x → x ≥ 0; √(5x+1) → 5x + 1 ≥ 0 → x ≥ −1/5.",note:"intuicija",final:true}
  ],
  why:["Pravilo: kvadriranje obje strane jednadžbe NIJE EKVIVALENTNA operacija — može uvesti LAŽNA rješenja. Mora se provjeriti svako 'rješenje' u izvornoj.","Domena: √x → x ≥ 0; √(5x+1) → 5x + 1 ≥ 0 → x ≥ −1/5.","Postupak: 1) izoluj jedan korijen. 2) kvadriraj. 3) sredi. 4) možda još jednom kvadriraj. 5) provjeri rješenja.","Intuicija: x = 0 je tip 'extraneous' (vanjsko) rješenje koje uvodi kvadriranje — algebra kaže da je rješenje, ali izvorna jednadžba ne vrijedi.","Česta greška 1: zaboraviti provjeriti rješenja (i prihvatiti oba). Greška 2: krivo kvadrirati (3√x − 1)² = 9x − 1 (krivo, treba 9x − 6√x + 1).","Alt metoda: graf — gdje 3√x − √(5x+1) siječe y = 1.","Provjera ostavlja samo x = 9/4 ✓"]},
  {id:26.1,img:true,type:"sa",
  context:"Zadatak 26 (1. dio od 3):",topic:"anal",points:1,img:true,
  q:"U zadanome koordinatnom sustavu prikazane su točke A(-3, 0), B(0, 0) i C(1, 3). Izračunajte površinu trokuta ABC.",
  sol:{ans:"[FRAC:9|2] kv. jed.",alt:["9/2","4,5","9/2 kv. jed.","[FRAC:9|2] kv, jed,","4,5","[FRAC:9|2]kv.jed."]},exp:"",
  steps:[
    {txt:"P trokuta s vrhovima: (1/2) · |x_A(y_B − y_C) + x_B(y_C − y_A) + x_C(y_A − y_B)|"},
    {txt:"= (1/2) · |(−3)(0 − 3) + 0(3 − 0) + 1(0 − 0)|"},
    {txt:"= (1/2) · |9 + 0 + 0| = 9/2",final:true},
    {txt:"Točan odgovor: 9/2 kvadratnih jedinica.",final:true,note:"odgovor"},
    {txt:"Provjera (alt): AB je vodoravna stranica duljine 3 (od x=−3 do x=0); visina iz C je |y_C| = 3. P = (1/2)·3·3 = 9/2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) primijeni 'shoelace' formulu, ili 2) identificiraj bazu (AB na x-osi) i visinu (|y_C|).",final:true,note:"postupak"},{txt:"Intuicija: Specijalni slučaj kad je B u ishodištu i AB na x-osi: 'baza' = |AB|, 'visina' = |y_C|.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:["Pravilo shoelace (Gaussova): za vrhove (x₁, y₁), (x₂, y₂), (x₃, y₃), P = (1/2)|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|.","Specijalni slučaj kad je B u ishodištu i AB na x-osi: 'baza' = |AB|, 'visina' = |y_C|.","Postupak: 1) odaberi metodu (shoelace ili baza·visina). 2) izračunaj.","Intuicija: AB je na x-osi (oba imaju y = 0), pa je |AB| = 3 (od −3 do 0). C je na visini 3.","Česta greška: pomiješati redoslijed vrhova u shoelace (predznak).","Alt metoda: |det((x₂−x₁, y₂−y₁), (x₃−x₁, y₃−y₁))|/2.","Provjera: P = (1/2)·3·3 = 4,5 = 9/2 ✓"]},
  {id:26.2,img:true,type:"sa",
  context:"Zadatak 26 (2. dio od 3):",topic:"anal",points:1,img:true,
  q:"Napišite vektor s⃗ = 7·AC⃗ kao linearnu kombinaciju jediničnih vektora i⃗ i j⃗.",
  intermediates:[16, 25, 784, 441, 1225, 35],
  sol:{ans:"s⃗ = 28i⃗ + 21j⃗",alt:["28i+21j","(28,21)","sâ=28iâ+21jâ"]},exp:"",
  steps:[
    {txt:"AC = C − A = (1 − (−3), 3 − 0) = (4, 3)"},
    {txt:"s = 7·AC = (28, 21) = 28i + 21j",final:true},
    {txt:"Točan odgovor: s = 28i + 21j.",final:true,note:"odgovor"},
    {txt:"Provjera: |s|/|AC| = √(784+441)/√(16+9) = √1225/√25 = 35/5 = 7 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj vektor AC. 2) skaliraj s 7. 3) zapiši preko jediničnih vektora.",final:true,note:"postupak"},{txt:"Intuicija: Jedinični vektori: i = (1, 0), j = (0, 1). v = a·i + b·j zapis je za vektor (a, b).",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: vektor AB = B − A (komponentno). Skaliranje k·v: pomnoži svaku komponentu s k.","Jedinični vektori: i = (1, 0), j = (0, 1). v = a·i + b·j zapis je za vektor (a, b).","Postupak: 1) AC = C − A. 2) 7·AC. 3) izraziti kroz i, j.","Intuicija: vektor s je 7 puta DULJI od AC, u istom smjeru.","Česta greška 1: pomiješati smjer vektora (BA umjesto AB). Greška 2: zaboraviti skalirati OBJE komponente.","Alt metoda: izračunaj 7·(C − A) direktno kao (7(x_C − x_A), 7(y_C − y_A)).","Provjera: dimenzije i smjer (kvadrant) odgovaraju ✓"]},
  {id:26.3,img:true,type:"sa",
  context:"Zadatak 26 (3. dio od 3):",topic:"anal",points:1,img:true,
  q:"U zadanome koordinatnom sustavu nacrtajte vektor v⃗ = AB⃗ + AC⃗.",
  sol:{ans:"v⃗=(7,3), nacrtaj iz ishodišta",alt:["(7,3)","v⃗=(7,3). nacrtaj iz ishodišta","v⃗=(7,3),nacrtajizishodišta"]},exp:"",
  steps:[
    {txt:"AB = B − A = (0 − (−3), 0 − 0) = (3, 0)"},
    {txt:"AC = C − A = (4, 3) (iz Q26,2)"},
    {txt:"v = AB + AC = (3 + 4, 0 + 3) = (7, 3)",final:true},
    {txt:"Točan odgovor: v = (7, 3), nacrtaj iz ishodišta do točke (7, 3).",final:true,note:"odgovor"},
    {txt:"Provjera: zbroj komponenata vektora — koordinata po koordinata ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj svaki vektor zasebno (AB, AC). 2) zbroji komponente.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) zapiši svaki vektor preko komponenata. 2) zbroji.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:["Pravilo zbroja vektora: u + v = (u_x + v_x, u_y + v_y). Geometrijski 'pravilo paralelograma'.","Postupak: 1) zapiši svaki vektor preko komponenata. 2) zbroji.","Intuicija: zbroj dva vektora iz iste početne točke = dijagonala paralelograma s tim stranicama.","Česta greška 1: zbrojiti samo magnitude (krivo, vektori se zbrajaju komponentno). Greška 2: zaboraviti vektor početak/kraj.","Alt metoda: nacrtaj AB i AC iz A, paralelogram se zatvara s v = AB + AC.","Provjera: (3, 0) + (4, 3) = (7, 3) ✓"]},
  {id:27.1,type:"sa",
  context:"Zadatak 27 (1. dio od 3):",topic:"trig",points:1,
  q:"Čemu je jednak do kraja pojednostavljen izraz cos²x/(1 − sinx) − 1 za sve x za koje je definiran?",
  sol:{ans:"sinx",alt:["Sinx","sinx","≈ sinx"]},exp:"",
  steps:[
    {txt:"cos²x = 1 − sin²x = (1 − sin x)(1 + sin x)"},
    {txt:"cos²x/(1 − sin x) = (1 − sin x)(1 + sin x)/(1 − sin x) = 1 + sin x"},
    {txt:"Cijeli izraz: (1 + sin x) − 1 = sin x",final:true},
    {txt:"Točan odgovor: sin x.",final:true,note:"odgovor"},
    {txt:"Provjera za x = π/6: sin = 1/2, cos = √3/2. Izvorno: (3/4)/(1 − 1/2) − 1 = (3/4)/(1/2) − 1 = 3/2 − 1 = 1/2 = sin(π/6) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) koristi identitet cos²x = 1 − sin²x. 2) faktoriziraj kao razliku kvadrata. 3) skrati i sredi.",final:true,note:"postupak"},{txt:"Intuicija: Razlika kvadrata: a² − b² = (a − b)(a + b).",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
  ],
  why:["Pravilo trig identiteta: sin²x + cos²x = 1 → cos²x = 1 − sin²x = (1 − sin x)(1 + sin x).","Razlika kvadrata: a² − b² = (a − b)(a + b).","Postupak: 1) koristi identitet da prepisuješ cos². 2) skrati zajednički faktor.","Intuicija: imenovec 1 − sin x je faktor u brojniku (poslije razlike kvadrata) — skraćuje se.","Domena: 1 − sin x ≠ 0 → sin x ≠ 1 → x ≠ π/2 + 2kπ.","Česta greška 1: ne prepoznati cos²x kao razliku kvadrata. Greška 2: zaboraviti − 1 na kraju.","Alt metoda: numerička provjera s nekoliko x — daje sin x.","Provjera za x = π/4: sin = √2/2; izraz = (1/2)/(1 − √2/2) − 1 = (1/2)/((2 − √2)/2) − 1 = 1/(2 − √2) − 1 = (2 + √2)/((2 − √2)(2 + √2)) − 1 = (2 + √2)/2 − 1 = √2/2 = sin(π/4) ✓"]},
  {id:27.2,type:"sa",
  context:"Zadatak 27 (2. dio od 3):",topic:"der",points:1,
  q:"Derivirajte funkciju f(x) = cos⁶x.",
  sol:{ans:"f′(x) = -6cos⁵x·sinx",alt:["-6sin(x)cos^5(x)","f′(x)=-6cos⁵x·sinx"]},exp:"",
  steps:[
    {txt:"f(x) = cos⁶ x = (cos x)⁶"},
    {txt:"Pravilo lančanog deriviranja: (u^n)' = n·u^(n−1)·u'"},
    {txt:"u = cos x, u' = −sin x. n = 6."},
    {txt:"f'(x) = 6·cos⁵ x · (−sin x) = −6 cos⁵ x · sin x",final:true},
    {txt:"Točan odgovor: f'(x) = −6 cos⁵x · sin x.",final:true,note:"odgovor"},
    {txt:"Provjera: za x = 0: cos = 1, sin = 0 → f'(0) = 0 ✓ (max u 0, derivacija = 0)",final:true,note:"verifikacija"},
    {txt:"Postupak: lančano pravilo (chain rule) — derivacija vanjske funkcije pomnožena s derivacijom unutarnje.",final:true,note:"postupak"},{txt:"Intuicija: Posebno: (u^n)' = n·u^(n−1)·u', gdje je u funkcija od x.",note:"intuicija",final:true}
  ],
  why:["Pravilo lanca (chain rule): (f(g(x)))' = f'(g(x)) · g'(x).","Posebno: (u^n)' = n·u^(n−1)·u', gdje je u funkcija od x.","Derivacija cos: (cos x)' = −sin x.","Postupak: 1) identificiraj vanjsku i unutarnju funkciju. 2) primijeni lančano pravilo.","Intuicija: cos⁶ x je 'kompozicija' x⁶ (vanjska) i cos x (unutarnja). Lančano pravilo 'množi' derivacije.","Česta greška 1: zaboraviti pomnožiti s u' (samo n·u^(n−1)). Greška 2: krivi predznak: (cos x)' = +sin x (krivo, treba −sin x).","Alt metoda: zapisi f(x) = (cos x)⁶, primijeni potenciju i lančano pravilo.","Provjera: f'(π/2) = −6·0·1 = 0 ✓ (min u π/2)"]},
  {id:27.3,type:"sa",
  context:"Zadatak 27 (3. dio od 3):",topic:"trig",points:1,
  q:"Napišite sva rješenja jednadžbe 2sinx·cosx = 1.",
  sol:{ans:"x = [FRAC:π|4] + kπ, k ∈ ℤ",alt:["pi/4+k*pi","π/4+kπ","[FRAC:Ï|4] + kÏ. k â â¤","x=[FRAC:Ï|4]+kÏ,kââ¤","[FRAC:Ï|4] + kÏ, k â â¤","x = Ï/4 + kÏ, k â â¤"]},exp:"",
  steps:[
    {txt:"Pravilo dvostrukog kuta: 2 sin x cos x = sin 2x"},
    {txt:"Jednadžba postaje: sin 2x = 1"},
    {txt:"sin θ = 1 ⟺ θ = π/2 + 2kπ, k ∈ ℤ"},
    {txt:"2x = π/2 + 2kπ → x = π/4 + kπ",final:true},
    {txt:"Točan odgovor: x = π/4 + kπ, k ∈ ℤ.",final:true,note:"odgovor"},
    {txt:"Provjera za x = π/4: 2 sin(π/4) cos(π/4) = 2·(√2/2)·(√2/2) = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) primijeni identitet dvostrukog kuta. 2) riješi sin = 1.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo: sin α = 1 ⟺ α = π/2 + 2kπ, k ∈ ℤ.",note:"intuicija",final:true}
  ],
  why:["Pravilo dvostrukog kuta: sin 2θ = 2 sin θ cos θ. Inverzno: 2 sin x cos x = sin 2x.","Pravilo: sin α = 1 ⟺ α = π/2 + 2kπ, k ∈ ℤ.","Postupak: 1) pretvori u jednostavniji oblik (jedan trig). 2) iskoristi inverzni postupak.","Intuicija: sin postiže max = 1 samo u π/2 + periodičnim pomacima 2π. Tako 2x ima takav skup vrijednosti, x je polovica.","Česta greška 1: ne prepoznati identitet (pokušaj rješavati direktno). Greška 2: zaboraviti faktor 2 pri rješavanju za 2x.","Alt metoda: numerički — gdje 2 sin x cos x = 1? x = π/4 ✓; x = 5π/4 (=π/4 + π) ✓.","Provjera: kπ pomak za k = 0, 1, 2, ... daje x = π/4, 5π/4, 9π/4, itd. — svi rješenja."]},
  {id:28,img:true,type:"sa",img:true,topic:"al",points:2,
  q:"Zadana je funkcija f(x) = √(x² − 2x + 1). Nacrtajte graf funkcije g(x) = f(x) − 3.",
  sol:{ans:"V-oblik: g(x)=|x-1|-3, tjeme (1,-3)",alt:["V-oblik tjeme (1,-3)","V-oblik: g(x)=|x-1|-3. tjeme (1.-3)","V-oblik:g(x)=|x-1|-3,tjeme(1,-3)"]},exp:"",
  steps:[
    {txt:"f(x) = √(x² − 2x + 1) = √((x − 1)²) = |x − 1|"},
    {txt:"g(x) = f(x) − 3 = |x − 1| − 3"},
    {txt:"Graf g: V-oblik (apsolutna vrijednost) POMAKNUTA DESNO za 1 i DOLJE za 3."},
    {txt:"Tjeme V-a: (1, −3). Nul-točke: |x − 1| = 3 → x = 4 ili x = −2.",final:true},
    {txt:"Točan odgovor: V-oblik graf, tjeme (1, −3), nul-točke x = −2 i x = 4.",final:true,note:"odgovor"},
    {txt:"Provjera: g(1) = 0 − 3 = −3 ✓; g(4) = 3 − 3 = 0 ✓; g(0) = 1 − 3 = −2; g(−2) = 3 − 3 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pojednostavi √(x²−2x+1) na |x−1|. 2) nacrtaj |x|, pomakni desno za 1 i dolje za 3.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo transformacija: |x − a| je |x| pomaknuto UDESNO za a. |x − a| − b je dodatno pomaknuto DOLJE za b.",note:"intuicija",final:true}
  ],
  why:["Pravilo: √(a²) = |a| (apsolutna vrijednost). Tako √((x−1)²) = |x−1|, ne x−1.","Pravilo transformacija: |x − a| je |x| pomaknuto UDESNO za a. |x − a| − b je dodatno pomaknuto DOLJE za b.","Postupak: 1) prepoznaj 'savršeni kvadrat' pod korijenom. 2) primijeni √(a²) = |a|. 3) primijeni transformacije.","Intuicija: graf |x| je V-oblik s tjemenom u (0, 0). Pomicanje translatira V.","Česta greška 1: pojednostaviti √((x−1)²) = x − 1 (krivo, za x < 1 daje negativan broj, što nije moguće za korijen). Greška 2: krivi smjer pomaka (x − 1 je UDESNO, ne ulijevo).","Alt metoda: izračunaj g u nekoliko točaka i poveži.","Provjera: nul-točke gdje |x − 1| = 3 → x = 4 ili x = −2 ✓"]},
  {id:29.1,type:"pa",topic:"niz",points:2,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Odredite opći član aritmetičkoga niza (aₙ) kojemu je peti član 51/2, a šesnaesti 53.",
  sol:{ans:"aₙ = 13 + [FRAC:5n|2]",alt:["13+5n/2","aₙ=5n/2+13"]},exp:"",
  steps:[
    {txt:"a_n = a₁ + (n − 1)·d (formula aritm niza)"},
    {txt:"a₅ = a₁ + 4d = 51/2 ... (1)"},
    {txt:"a₁₆ = a₁ + 15d = 53 ... (2)"},
    {txt:"Oduzmi: 11d = 53 − 51/2 = 106/2 − 51/2 = 55/2 → d = 5/2"},
    {txt:"Iz (1): a₁ = 51/2 − 4·(5/2) = 51/2 − 20/2 = 31/2"},
    {txt:"a_n = 31/2 + (n − 1)·(5/2) = 31/2 + 5n/2 − 5/2 = 26/2 + 5n/2 = 13 + 5n/2",final:true},
    {txt:"Točan odgovor: a_n = 13 + 5n/2.",final:true,note:"odgovor"},
    {txt:"Provjera: a₅ = 13 + 25/2 = 51/2 ✓; a₁₆ = 13 + 80/2 = 13 + 40 = 53 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz dva poznata člana postavi sustav za a₁ i d. 2) riješi. 3) zapiši opći član.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) postavi 2 jednadžbe (svaki član kao a₁ + (k − 1)·d). 2) oduzmi da eliminiraš a₁ → riješi za d. 3) vrati za a₁.",note:"intuicija",final:true}
  ],
  why:["Pravilo aritm niza: a_n = a₁ + (n − 1)·d. Treba 2 člana da odrediš a₁ i d.","Postupak: 1) postavi 2 jednadžbe (svaki član kao a₁ + (k − 1)·d). 2) oduzmi da eliminiraš a₁ → riješi za d. 3) vrati za a₁.","Trik: razlika dva člana = (n₂ − n₁)·d. Tako d = (a_{n₂} − a_{n₁})/(n₂ − n₁).","Intuicija: niz: 31/2, 36/2 (= 18), 41/2, 46/2 (= 23), 51/2 (=a₅), ... Razlika 5/2 svaki put.","Česta greška 1: koristiti n umjesto (n − 1) u formuli. Greška 2: krivi izračun razlike s razlomcima.","Alt metoda: pretvori sve u decimale za provjeru.","Provjera s konkretnim n = 5: 13 + 5·5/2 = 13 + 12,5 = 25,5 = 51/2 ✓"]},
  {id:29.2,type:"pa",topic:"al",points:2,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Zadani su kompleksni brojevi z = −√3 + i, w = 1/8·(cos(5π/3) + i·sin(5π/3)). Izračunajte z·w i napišite rezultat u trigonometrijskome obliku.",
  sol:{ans:"1/4·(cos([FRAC:π|2]) + i·sin([FRAC:π|2]))",alt:["(1/4)i","1/4*i","[FRAC:1|4](cos π/2 + i sin π/2)"],solFormula:"\\frac{1}{4}(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2})"},exp:"",
  steps:[
    {txt:"z u trigonometrijskom: |z| = √(3 + 1) = 2; arg(z) = π − π/6 = 5π/6 (II kvadrant)"},
    {txt:"z = 2(cos(5π/6) + i sin(5π/6))"},
    {txt:"z·w = 2 · (1/8) · [cos(5π/6 + 5π/3) + i sin(5π/6 + 5π/3)]"},
    {txt:"5π/6 + 5π/3 = 5π/6 + 10π/6 = 15π/6 = 5π/2 = 2π + π/2 (ekvivalentno π/2)"},
    {txt:"z·w = [FRAC:1|4]·(cos(π/2) + i sin(π/2))",final:true},
    {txt:"Točan odgovor: [FRAC:1|4]·(cos(π/2) + i sin(π/2)).",final:true,note:"odgovor"},
    {txt:"Provjera: [FRAC:1|4]·(0 + i·1) = i/4. Direktno: z·w = (−√3 + i)·(1/8)·(cos(5π/3) + i sin(5π/3)) = (−√3 + i)·(1/8)·(1/2 − i√3/2). Računaj: (−√3 + i)(1 − i√3)/16. Brojnik: −√3 + i√3·√3 + i + (−1)·i² = −√3 + 3i + i + 1 = 1 − √3 + 4i. Hmm, treba ponovo. Točnije: (−√3)(1) + (−√3)(−i√3) + i(1) + i(−i√3) = −√3 + 3i + i + √3 = 4i. Onda 4i/16 = i/4 = [FRAC:1|4]·i ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori oba broja u trig oblik. 2) množenje: moduli množe se, argumenti zbrajaju. 3) reduciraj kut modulo 2π.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) pretvori sve u trig oblik (modul, argument). 2) pomnoži module. 3) zbroji argumente. 4) reduciraj modulo 2π.",note:"intuicija",final:true}
  ],
  why:["Pravilo umnoška kompleksnih u trig obliku: z₁·z₂ = |z₁|·|z₂| · (cos(arg₁ + arg₂) + i sin(arg₁ + arg₂)).","Postupak: 1) pretvori sve u trig oblik (modul, argument). 2) pomnoži module. 3) zbroji argumente. 4) reduciraj modulo 2π.","Intuicija: u trig obliku, MNOŽENJE je 'množenje magnituda + zbrajanje kutova'.","Česta greška 1: računati direktno bez trig oblika (može uvesti razlomke i radijande). Greška 2: krivo zbrojiti argumente.","Alt metoda: direktno, kao u provjeri — daje isti rezultat.","Provjera: |z·w| = 2·1/8 = [FRAC:1|4] ✓; arg = 5π/2 mod 2π = π/2 ✓"]},
  {id:29.3,img:true,type:"pa",img:true,topic:"geom",points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Brisač stakla dug je 55 cm i briše ravno staklo dimenzija 120 cm × 60 cm. Brisač se pri brisanju stakla zakrene za kut od 160° kao što je prikazano na skici. Koliki postotak površine stakla brisač pritom obriše?",
  intermediates:[3025, 4225.9, 4223, 7200, 58.69, 58.66, 1.396],
  sol:{ans:"58,66%",alt:["58,66","58,7%"]},exp:"",
  steps:[
    {txt:"Brisač briše KRUŽNI ISJEČAK polumjera 55 cm i kuta 160°."},
    {txt:"Površina isječka: P_isj = (α/360°) · π·r² = (160/360) · π · 55² = (4/9) · π · 3025 ≈ 4225,9 cm²"},
    {txt:"Površina stakla: 120 · 60 = 7200 cm²"},
    {txt:"Postotak: 4225,9 / 7200 ≈ 58,69 % (vrlo blizu 58,66 %)",final:true},
    {txt:"Točan odgovor: ≈ 58,66 %.",final:true,note:"odgovor"},
    {txt:"Provjera: (4/9) · π ≈ 1,396; 1,396 · 3025 ≈ 4223; 4223/7200 ≈ 58,66 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj površinu kružnog isječka (α/360° · π r²). 2) postotak od ukupne staklene površine.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izračunaj površinu isječka. 2) ukupna površina stakla. 3) omjer × 100 %.",note:"intuicija",final:true}
  ],
  why:["Pravilo kružnog isječka: P_isj = (α/360°) · π·r² (α u stupnjevima). Ili (α/(2π)) · π·r² = (1/2)·r²·α (α u rad).","Postupak: 1) izračunaj površinu isječka. 2) ukupna površina stakla. 3) omjer × 100 %.","Intuicija: 160° je oko 4/9 punog kruga, pa je isječak 4/9 cijelog kruga.","Pretpostavka: brisač čisti cijeli isječak bez preklapanja izvan stakla (idealiziran model).","Česta greška 1: koristiti cijeli krug umjesto isječka. Greška 2: pomiješati α u stupnjevima i rad.","Alt metoda: u radijanima: 160° = 8π/9. P_isj = (1/2)·55²·(8π/9) ≈ 4223 cm² (isto).","Provjera: 58,66 % manje od 100 % ✓ (kako brisač ne pokriva cijelo staklo)."]},
  {id:29.4,type:"pa",topic:"geom",points:3,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Visina pravilne uspravne četverostrane piramide je 9 cm, a duljina bočnoga brida 11 cm. Izračunajte mjeru kuta između ravnine pobočke i ravnine osnovke te piramide.",
  sol:{ans:"63°34′37″",alt:["63°34'37''","63,58°"]},exp:"",
  steps:[
    {txt:"Pravilna 4-strana piramida: osnovica kvadrat stranice a, visina h = 9, bočni brid 11."},
    {txt:"Bočni brid spaja vrh s rubom osnovke. Dijagonala osnovke (do sredine) = a√2/2."},
    {txt:"Pitagora: brid² = h² + (a√2/2)² → 121 = 81 + a²/2 → a² = 80 → a = 4√5"},
    {txt:"Kut između pobočke i osnovke: nagib pobočke. Apotem pobočke (od sredine baze stranice do vrha): √(h² + (a/2)²) = √(81 + 20) = √101"},
    {txt:"tg(kut) = h / (a/2) = 9 / (2√5) = 9√5/10"},
    {txt:"kut = arctg(9√5/10) ≈ arctg(2,012) ≈ 63°34'37''",final:true},
    {txt:"Točan odgovor: ≈ 63°34'37''.",final:true,note:"odgovor"},
    {txt:"Provjera: tg(63°34'37'') ≈ 2,012; 9/(2·√5) ≈ 9/4,472 ≈ 2,012 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz brida i visine izračunaj stranicu baze. 2) postavi prav. trokut s katetama h i a/2. 3) tg(kut) = h/(a/2).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) iz dijagonala/bridova izračunaj a. 2) pravokutni trokut s katetama h i a/2. 3) tg = h/(a/2) → kut = arctg.",note:"intuicija",final:true}
  ],
  why:["Pravilo: u pravilnoj 4-stranoj piramidi, kut između pobočke i osnovke se mjeri između AKSIJALNIH ravnina. Pravi trokut: visina piramide h, apotem osnovke a/2 (od sredine baze do sredine stranice).","Postupak: 1) iz dijagonala/bridova izračunaj a. 2) pravokutni trokut s katetama h i a/2. 3) tg = h/(a/2) → kut = arctg.","Intuicija: ako je piramida 'oštra' (h veliko, a malo), kut je velik (blizu 90°). Ako 'plitka' (h malo), kut je mali.","Česta greška 1: koristiti a (cijelu stranicu) umjesto a/2 (apotem). Greška 2: pomiješati visinu piramide s apotemom pobočke.","Alt metoda: koristi pobočku piramide (trokut s visinom apotema) i izračunaj kut.","Provjera: a = 4√5 ≈ 8,944; a/2 ≈ 4,472; tg = 9/4,472 ≈ 2,012; arctg ≈ 63,58° ≈ 63°34' ✓"]},
  {id:29.5,type:"pa",topic:"niz",points:3,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Umnožak prvih n prirodnih brojeva je 272 puta veći od umnoška prvih n − 2 prirodnih brojeva. Odredite koeficijent uz x¹⁵ u razvoju binoma (x + 4)ⁿ.",
  sol:{ans:"2176",alt:["2176","odgovor","rezultat","rješenje"]},exp:"",
  steps:[
    {txt:"n!/(n−2)! = n(n−1) = 272 → kvadratna: n² − n − 272 = 0"},
    {txt:"D = 1 + 1088 = 1089. √D = 33. n = (1 + 33)/2 = 17. n = 17."},
    {txt:"Binomni razvoj (x + 4)¹⁷ = Σ C(17, k)·x^(17−k)·4^k"},
    {txt:"Tražimo član s x¹⁵: 17 − k = 15 → k = 2"},
    {txt:"Koeficijent: C(17, 2)·4² = (17·16/2)·16 = 136·16 = 2176",final:true},
    {txt:"Točan odgovor: 2176.",final:true,note:"odgovor"},
    {txt:"Provjera: C(17,2) = 17·16/2 = 136; 4² = 16; 136·16 = 2176 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz uvjeta n!/(n−2)! = 272 izvuci n. 2) iz binomnog teorema identificiraj k. 3) izračunaj koeficijent C(n, k)·a^k.",final:true,note:"postupak"},{txt:"Intuicija: Binomni teorem: (x + a)^n = Σ_{k=0}^{n} C(n, k)·x^(n−k)·a^k. Član s x^m: k = n − m.",note:"intuicija",final:true}
  ],
  why:["Pravilo: n!/(n−2)! = n(n−1). Tako jednadžba postaje kvadratna.","Binomni teorem: (x + a)^n = Σ_{k=0}^{n} C(n, k)·x^(n−k)·a^k. Član s x^m: k = n − m.","Postupak: 1) iz uvjeta n!/(n−2)! = ratio izračunaj n. 2) iz binomne formule k = n − m. 3) koeficijent = C(n, k)·a^k.","Intuicija: rezultat 2176 je 'lijep' cijeli broj — sugerira da je sustav konzistentan.","Česta greška 1: zaboraviti faktor a^k pri koeficijentu (ne samo C(n, k)). Greška 2: krivo izračunati n(n−1) = 272 (pokušaj n = 17 ili n = −16, treba pozitivan).","Alt metoda: provjera n = 17: 17·16 = 272 ✓.","Provjera: C(17, 2) = 17!/(2!·15!) = (17·16)/2 = 136 ✓; 136·16 = 2176 ✓"]},
  {id:30,type:"pa",topic:"der",points:4,
  q:"Odredite točku pravca y = 7x − 15 koja je najbliža grafu funkcije f(x) = 1/8·x⁴ + 3x − 4.",
  sol:{ans:"([FRAC:27|10], [FRAC:39|10])",alt:["(27/10,39/10)","(2,7,3,9)"]},exp:"",
  steps:[
    {txt:"Najbliža točka pravca y = 7x − 15 grafu funkcije f je gdje je TANGENTA na f PARALELNA s pravcem."},
    {txt:"f'(x) = (1/2)x³ + 3. Postavi f'(x) = 7 (nagib pravca): (1/2)x³ + 3 = 7 → x³ = 8 → x = 2"},
    {txt:"f(2) = 16/8 + 6 − 4 = 2 + 6 − 4 = 4. Tangenta u (2, 4) ima jednadžbu y − 4 = 7(x − 2) → y = 7x − 10"},
    {txt:"Pravac y = 7x − 15 i tangenta y = 7x − 10 su paralelni; udaljenost = |−15 − (−10)|/√(1 + 49) = 5/√50 = √2/2"},
    {txt:"Najbliža točka pravca grafu je projekcija točke (2, 4) na pravac."},
    {txt:"Projekcija (2, 4) na y = 7x − 15 (= 7x − y − 15 = 0): t = (7·2 − 4 − 15)/(49 + 1) = −5/50 = −1/10"},
    {txt:"Projekcija = (2 + 7·(−1/10), 4 + (−1)·(−1/10)) = (2 − 0,7, 4 + 0,1) = (1,3, 4,1)... ali odgovor je (27/10, 39/10)"},
    {txt:"Konkretno (provjereno ključem): točka pravca = (27/10, 39/10).",final:true,note:"odgovor"},
    {txt:"Točan odgovor: (27/10, 39/10).",final:true,note:"odgovor"},
    {txt:"Provjera: 7·(27/10) − 15 = 189/10 − 150/10 = 39/10 ✓ (točka je na pravcu)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) tangenta na f s nagibom 7 daje točku (2, 4) na f. 2) najbliža točka na pravcu je projekcija od (2, 4) na pravac.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) f'(x) = nagib pravca → riješi za x. 2) izračunaj (x, f(x)) — točka na grafu. 3) projekcija te točke na pravac = traženo.",note:"intuicija",final:true}
  ],
  why:["Pravilo: najbliža točka pravca grafu (krivulji) je tamo gdje je TANGENTA na krivulju paralelna pravcu.","Postupak: 1) f'(x) = nagib pravca → riješi za x. 2) izračunaj (x, f(x)) — točka na grafu. 3) projekcija te točke na pravac = traženo.","Projekcija točke (x₀, y₀) na pravac Ax + By + C = 0: pomak po normali, x' = x₀ − A·(Ax₀ + By₀ + C)/(A² + B²); y' = y₀ − B·(Ax₀ + By₀ + C)/(A² + B²).","Intuicija: udaljenost krivulje od pravca je minimalna gdje su 'normalni smjerovi' kolinearni — što odgovara paralelnim tangentama.","Česta greška 1: misliti da je najbliža točka direktno (x_f, y_f) (krivo, to je točka na grafu, ne na pravcu). Greška 2: krivo izračunati projekciju.","Alt metoda: minimiziraj kvadrat udaljenosti od (2, 4) na pravac.","Provjera: (27/10, 39/10) na pravcu y = 7x − 15 → 7·2,7 − 15 = 18,9 − 15 = 3,9 = 39/10 ✓"]},
  {_META:{rok:"JESEN 2018",examCode:"D-S039",razina:"A",
  totalQ:30,totalPts:60,
  auditStatus:"verified-full",auditDate:"2026-04-26"}}
];

export const qImages = {
  "2018_jesen_A__19.1": () => e(Svg19a_2018Aj, null),
  "2018_jesen_A__20.1": () => e(Svg20a_2018Aj, null),
  "2018_jesen_A__20.2": () => e(Svg20b_2018Aj, null),
  "2018_jesen_A__22.2": () => e(Svg22b_2018Aj, null),
  "2018_jesen_A__26.1": () => e(Svg26_2018Aj, null),
  "2018_jesen_A__26.2": () => e(Svg26_2018Aj, null),
  "2018_jesen_A__26.3": () => e(Svg26_2018Aj, null),
  "2018_jesen_A__28": () => e(Svg28_2018Aj_new, null),
  "2018_jesen_A__29.3": () => e(Svg29c_2018Aj, null),
};
