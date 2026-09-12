// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2016Blj(){
  const W=290,H=190,pad={l:36,r:42,t:18,b:40};
  const months=["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"];
  // Temperatura: svi=15, ruj=15 (iz ključa). Ostatak očitan s grafa.
  const temps=[2,4,8,12,15,20,22,22,15,12,7,3];
  // Padaline (mm, skala do 300): očitano s PDF grafa. Kolovoz≈140mm (iz ključa 28.3→3864L).
  const rains=[55,55,55,70,75,90,60,140,65,60,80,70];
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const barW=iW/12;
  const tMin=-5,tMax=25;
  const rMin=0,rMax=300;
  const toTY=v=>pad.t+((tMax-v)/(tMax-tMin))*iH;
  const toRY=v=>pad.t+((rMax-v)/(rMax-rMin))*iH;
  const toX=i=>pad.l+(i+0.5)*barW;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Horizontalne gridlines (temperature)
    ...[-5,0,5,10,15,20,25].map(v=>e("line",{key:"hg"+v,x1:pad.l,y1:toTY(v),x2:pad.l+iW,y2:toTY(v),stroke:"var(--bdr)",strokeWidth:.3,strokeDasharray:"2,3"})),
    // Stupci padalina (sivo-plavi, kao u PDF-u)
    ...rains.map((r,i)=>e("rect",{key:"r"+i,x:pad.l+i*barW+2,y:toRY(r),width:barW-4,height:pad.t+iH-toRY(r),fill:"rgba(74,144,217,0.22)",stroke:"var(--blue)",strokeWidth:.6})),
    // Lijeva os (temperatura)
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    // Desna os (padaline)
    e("line",{x1:pad.l+iW,y1:pad.t,x2:pad.l+iW,y2:pad.t+iH,stroke:"var(--blue)",strokeWidth:1.3}),
    // X os (na y=0 temperature, tj. nešto iznad dna)
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    // Temp ticki + labele (lijevo)
    ...[-5,0,5,10,15,20,25].map(v=>e("g",{key:"t"+v},
      e("line",{x1:pad.l-3,y1:toTY(v),x2:pad.l,y2:toTY(v),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:pad.l-5,y:toTY(v)+3,textAnchor:"end",fontSize:7,fill:"var(--text)"},v)
    )),
    // Padaline ticki + labele (desno)
    ...[0,50,100,150,200,250,300].map(v=>e("g",{key:"p"+v},
      e("line",{x1:pad.l+iW,y1:toRY(v),x2:pad.l+iW+3,y2:toRY(v),stroke:"var(--blue)",strokeWidth:1}),
      e("text",{x:pad.l+iW+5,y:toRY(v)+3,fontSize:7,fill:"var(--blue)"},v)
    )),
    // Linija temperatura (crna, deblja — kao u PDF-u)
    e("polyline",{points:temps.map((t,i)=>`${toX(i)},${toTY(t)}`).join(" "),fill:"none",stroke:"var(--text)",strokeWidth:2.2,strokeLinejoin:"round"}),
    // Temp točke
    ...temps.map((t,i)=>e("circle",{key:"tc"+i,cx:toX(i),cy:toTY(t),r:3,fill:"var(--text)",stroke:"var(--bg)",strokeWidth:1})),
    // Referentna linija T=15°C (isprekidana, za čitljivost)
    e("line",{x1:pad.l,y1:toTY(15),x2:pad.l+iW,y2:toTY(15),stroke:"var(--red)",strokeWidth:.7,strokeDasharray:"4,3",opacity:.5}),
    // Labele mjeseci (dno)
    ...months.map((m,i)=>e("text",{key:"m"+i,x:toX(i),y:pad.t+iH+14,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},m)),
    // Os labele
    e("text",{x:4,y:pad.t+4,fontSize:8,fontWeight:600,fill:"var(--text)"},"\u00b0C"),
    e("text",{x:pad.l+iW+8,y:pad.t+4,fontSize:8,fontWeight:600,fill:"var(--blue)"},"mm"),
    // Legenda dolje
    e("rect",{x:pad.l+10,y:pad.t+iH+24,width:14,height:8,fill:"rgba(74,144,217,0.22)",stroke:"var(--blue)",strokeWidth:.5}),
    e("text",{x:pad.l+28,y:pad.t+iH+31,fontSize:7,fill:"var(--muted)"},"koli\u010dina padalina (mm)"),
    e("line",{x1:pad.l+iW-80,y1:pad.t+iH+28,x2:pad.l+iW-60,y2:pad.t+iH+28,stroke:"var(--text)",strokeWidth:2}),
    e("text",{x:pad.l+iW-56,y:pad.t+iH+31,fontSize:7,fill:"var(--muted)"},"srednja temperatura (\u00b0C)")
  );
}

function Svg27_2016Blj(){
  const W=220,H=150;
  // Iz PDF-a: A dolje-lijevo, B dolje-desno, C gore (malo desno od sredine)
  // D na stranici AB, bliže sredini. CD dijeli kut C na 40° (ACD) i 48° (DCB).
  // AC ide koso gore-desno od A, BC ide koso gore-lijevo od B
  const Ax=18,Ay=128,Bx=200,By=128;
  const Cx=120,Cy=18;  // vrh gore, malo desno
  const Dx=100,Dy=128; // D na AB
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Ispuna trokuta ABC lagano siva
    e("polygon",{points:Ax+","+Ay+" "+Bx+","+By+" "+Cx+","+Cy,fill:"rgba(74,144,217,0.06)",stroke:"var(--blue)",strokeWidth:1.6}),
    // Linija CD (unutarnja)
    e("line",{x1:Cx,y1:Cy,x2:Dx,y2:Dy,stroke:"var(--gold)",strokeWidth:1.4,strokeDasharray:"5,3"}),
    // Kut α u A — luk
    e("path",{d:"M "+(Ax+30)+","+Ay+" A 30 30 0 0 0 "+(Ax+18)+","+(Ay-24),fill:"none",stroke:"var(--blue)",strokeWidth:1.5}),
    e("text",{x:Ax+32,y:Ay-8,fontSize:11,fill:"var(--blue)",fontStyle:"italic",fontWeight:600},"\u03b1"),
    // Kut 40° uz C (lijeva strana — ACD)
    e("path",{d:"M "+(Cx-18)+","+(Cy+24)+" A 24 24 0 0 0 "+(Cx-6)+","+(Cy+24),fill:"none",stroke:"var(--red)",strokeWidth:1.4}),
    e("text",{x:Cx-28,y:Cy+40,fontSize:9,fill:"var(--red)",fontWeight:600},"40\u00b0"),
    // Kut 48° uz C (desna strana — DCB)
    e("path",{d:"M "+(Cx-4)+","+(Cy+24)+" A 24 24 0 0 0 "+(Cx+16)+","+(Cy+24),fill:"none",stroke:"var(--red)",strokeWidth:1.4}),
    e("text",{x:Cx+8,y:Cy+40,fontSize:9,fill:"var(--red)",fontWeight:600},"48\u00b0"),
    // Točke (mali krugovi)
    e("circle",{cx:Ax,cy:Ay,r:2.5,fill:"var(--blue)"}),
    e("circle",{cx:Bx,cy:By,r:2.5,fill:"var(--blue)"}),
    e("circle",{cx:Cx,cy:Cy,r:2.5,fill:"var(--red)"}),
    e("circle",{cx:Dx,cy:Dy,r:2.5,fill:"var(--gold)"}),
    // Labels
    e("text",{x:Ax-4,y:Ay+14,fontSize:12,fontWeight:700,fill:"var(--text)",fontStyle:"italic"},"A"),
    e("text",{x:Bx-2,y:By+14,fontSize:12,fontWeight:700,fill:"var(--text)",fontStyle:"italic"},"B"),
    e("text",{x:Cx-4,y:Cy-6,fontSize:12,fontWeight:700,fill:"var(--text)",fontStyle:"italic"},"C"),
    e("text",{x:Dx-4,y:Dy+14,fontSize:12,fontWeight:700,fill:"var(--text)",fontStyle:"italic"},"D")
  );
}

function Svg23_2016Blj(){
  const W=200,H=160,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-2,xMax=8,yMin=-1,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const linPts=[];
  for(let x=xMin;x<=xMax;x+=0.2){
    const y=-0.5*x+3;
    if(y<yMin||y>yMax) continue;
    linPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-2,-1,0,1,2,3,4,5,6,7,8].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[2,4,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[1,2,3,4].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    linPts.length>1&&e("polyline",{points:linPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2}),
    e("circle",{cx:toX(6),cy:oy,r:3.5,fill:_GREEN,stroke:"var(--bg)",strokeWidth:1.5}),
    e("circle",{cx:ox,cy:toY(3),r:3.5,fill:_GREEN,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:toX(1),y:toY(3)-8,fontSize:9,fill:_BLUE},"f(x)=\u22121/2\u00b7x+3")
  );
}

function Svg16_2016Blj(){
  const W=200,H=170,pad={l:28,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-2,xMax=5,yMin=-4,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const p1=[],p2=[];
  for(let x=-1;x<=5;x+=0.2){const y1=(2*x-6)/3;if(y1>=yMin&&y1<=yMax)p1.push(toX(x).toFixed(1)+","+toY(y1).toFixed(1));const y2=(12-4*x)/3;if(y2>=yMin&&y2<=yMax)p2.push(toX(x).toFixed(1)+","+toY(y2).toFixed(1));}
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-2,-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    ...[-4,-3,-2,-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-9,y:oy+12,fontSize:7,fill:"var(--muted)"},"0"),
    ...[1,2,3,4].map(x=>e("text",{key:"lx"+x,x:toX(x),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)),
    ...[-3,-2,-1,1,2,3,4].map(y=>e("text",{key:"ly"+y,x:ox-7,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)),
    p1.length>1&&e("polyline",{points:p1.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2}),
    p2.length>1&&e("polyline",{points:p2.join(" "),fill:"none",stroke:_RED,strokeWidth:2}),
    e("circle",{cx:toX(3),cy:oy,r:4,fill:_GREEN,stroke:"var(--bg)",strokeWidth:1.5}),
    e("circle",{cx:ox,cy:toY(-2),r:3,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1}),
    e("circle",{cx:ox,cy:toY(4),r:3,fill:_RED,stroke:"var(--bg)",strokeWidth:1})
  );
}

function Svg15_2016Blj(){
  const W=220,H=140;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const Ax=20,Ay=120,Bx=180,By=120,Dx=60,Dy=30,Cx=200,Cy=30,Tx=140,Ty=30;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    e("polygon",{points:Ax+","+Ay+" "+Bx+","+By+" "+Cx+","+Cy+" "+Dx+","+Dy,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("line",{x1:Bx,y1:By,x2:Tx,y2:Ty,stroke:_BLUE,strokeWidth:1.2}),
    e("polyline",{points:(Tx+8)+","+(Ty)+" "+(Tx+8)+","+(Ty+8)+" "+(Tx)+","+(Ty+8),fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("path",{d:"M "+(Dx+14)+","+(Dy)+" A 14 14 0 0 1 "+(Dx-5)+","+(Dy+13),fill:"none",stroke:_RED,strokeWidth:1.2}),
    e("text",{x:Dx+2,y:Dy+22,fontSize:8,fill:_RED},"135\u00b0"),
    e("text",{x:Ax-6,y:Ay+12,fontSize:10,fontWeight:600,fill:_GOLD,fontStyle:"italic"},"A"),
    e("text",{x:Bx+2,y:By+12,fontSize:10,fontWeight:600,fill:_GOLD,fontStyle:"italic"},"B"),
    e("text",{x:Cx+2,y:Cy-4,fontSize:10,fontWeight:600,fill:_GOLD,fontStyle:"italic"},"C"),
    e("text",{x:Dx-12,y:Dy-4,fontSize:10,fontWeight:600,fill:_GOLD,fontStyle:"italic"},"D"),
    e("text",{x:Tx-2,y:Ty-8,fontSize:10,fontWeight:600,fill:_GOLD,fontStyle:"italic"},"T")
  );
}

function Svg12_2016Blj(){
  const W=200,H=180,pad={l:28,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1,xMax=5,yMin=-3,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const pts=[];
  for(let x=-0.2;x<=4.3;x+=0.1){const y=2*(x-2)*(x-2)-2;if(y<yMin||y>yMax) continue;pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));}
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    ...[-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-9,y:oy+12,fontSize:7,fill:"var(--muted)"},"0"),
    ...[1,2,3,4].map(x=>e("text",{key:"lx"+x,x:toX(x),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)),
    e("text",{x:toX(-1),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},"-1"),
    ...[-2,-1,1,2,3].map(y=>e("text",{key:"ly"+y,x:ox-7,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2}),
    e("circle",{cx:toX(2),cy:toY(-2),r:3,fill:_RED,stroke:"var(--bg)",strokeWidth:1.2})
  );
}

function Svg11_2016Blj(){
  const W=260,H=110;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // A — Kvadrat (plavo)
    e("rect",{x:12,y:12,width:48,height:55,fill:"rgba(74,144,217,0.18)",stroke:"var(--blue)",strokeWidth:1.8,rx:1}),
    e("text",{x:12,y:82,fontSize:11,fontWeight:700,fill:"var(--blue)"},"A."),
    // B — Pravokutnik uži i viši (zeleno)
    e("rect",{x:86,y:5,width:28,height:62,fill:"rgba(80,200,120,0.18)",stroke:"var(--green)",strokeWidth:1.8,rx:1}),
    e("text",{x:82,y:82,fontSize:11,fontWeight:700,fill:"var(--green)"},"B."),
    // C — Jednakokračani trokut širi (narančasto) — točan odgovor
    e("polygon",{points:"145,67 168,12 191,67",fill:"rgba(233,180,70,0.18)",stroke:"var(--gold)",strokeWidth:1.8,strokeLinejoin:"round"}),
    e("text",{x:145,y:82,fontSize:11,fontWeight:700,fill:"var(--gold)"},"C."),
    // D — Trokut uži, nagnut desno (crveno)
    e("polygon",{points:"218,67 232,8 248,67",fill:"rgba(224,82,82,0.18)",stroke:"var(--red)",strokeWidth:1.8,strokeLinejoin:"round"}),
    e("text",{x:218,y:82,fontSize:11,fontWeight:700,fill:"var(--red)"},"D.")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: prirodni = 1, 2, 3…; ne 0, ne negativni, ne razlomci.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva iz skupa prirodnih brojeva?",
  opts:["-6","14/5","29,2","175"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Prirodni brojevi su pozitivni cijeli brojevi: 1, 2, 3, ... 175 je jedini takav. -6 je negativan, 14/5 je razlomak, 29,2 je decimalan.",
  steps:[
    {txt:"Definicija skupa prirodnih brojeva: ℕ = {1, 2, 3, 4, ...} — pozitivni cijeli brojevi (bez nule, bez negativnih, bez razlomaka i decimala)."},
    {txt:"Klasificiraj opcije: −6 je negativan (∈ ℤ, ne ℕ); 14/5 = 2,8 je razlomak (∈ ℚ, ne ℕ); 29,2 je decimalan (∈ ℚ, ne ℕ)."},
    {txt:"Distractor: A (−6) testira hijerarhiju skupova (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ); B (14/5) racionalan ne-cijel; C (29,2) decimalan racionalan.",note:"diagnostika"},
    {txt:"175 je pozitivan cijeli broj → 175 ∈ ℕ ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: hijerarhija brojevnih skupova: ℕ (prirodni) ⊂ ℤ (cijeli) ⊂ ℚ (racionalni) ⊂ ℝ (realni) ⊂ ℂ (kompleksni).",
    "Intuicija: ℕ su brojevi za 'brojanje predmeta' — 1, 2, 3, ... Nema 'pola predmeta' ni 'negativnih predmeta'.",
    "Česta greška: smatrati 0 prirodnim brojem (ovisno o konvenciji — u HR srednjoj školi ℕ NE uključuje 0; ℕ₀ = ℕ ∪ {0}).",
    "Provjera ✓: 175 = 1 + 1 + ... + 1 (175 puta) — može se izgraditi sukcesivnim pribrajanjem 1, što je definicijska karakteristika prirodnih brojeva."
  ,"Diagnostic: A) -6; B) 14/5; C) 29,2; D) 175 ✓.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:2,type:"mc",warn:"Pazi: traži broj strogo između −0,5 i 1.",topic:"br",points:1,
  q:"Za koji od navedenih realnih brojeva x vrijedi -0,5 < x < 1?",
  opts:["-1,6","-0,45","1,2","2,35"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"-0,45 leži između -0,5 i 1. Provjerimo: -0,5 < -0,45 < 1 ✓. Ostali su izvan intervala.",
  steps:[
    {txt:"Treba broj x ∈ ⟨−0,5; 1⟩ (otvoreni interval). Provjeri svaku opciju zasebno."},
    {txt:"A: −1,6 — manji od −0,5 (jer −1,6 < −0,5), NIJE u intervalu."},
    {txt:"B: −0,45 — provjera: −0,5 < −0,45 ✓ (jer −0,45 je 'bliže nuli' od −0,5); −0,45 < 1 ✓. ZADOVOLJAVA."},
    {txt:"Distractor: A i C testiraju razumijevanje smjera nejednakosti za negativne brojeve; D je 'očito izvan' (sigurno >1).",note:"diagnostika"},
    {txt:"C: 1,2 — veći od 1 (1,2 > 1), izvan intervala. D: 2,35 — još veći. Samo opcija B zadovoljava ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: predstavi sebi brojevni pravac: −1,6 je lijevo od −0,5, a −0,45 je između −0,5 i 0.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: za negativne brojeve, 'manji' znači 'dalje od nule u negativnom smjeru'. Tako je −1,6 < −0,5 < −0,45 < 0.",
    "Intuicija: predstavi sebi brojevni pravac: −1,6 je lijevo od −0,5, a −0,45 je između −0,5 i 0.",
    "Česta greška: zamijeniti redoslijed negativnih brojeva — misliti da je '−1,6 > −0,5' jer je |−1,6| > |−0,5|. Apsolutna vrijednost je veća, ali sam broj je manji.",
    "Provjera ✓: −0,5 < −0,45 (točno, jer je razlika 0,05 pozitivna od −0,5 prema −0,45); −0,45 < 1 ✓"
  ,"Diagnostic: A) -1,6; B) -0,45 ✓; C) 1,2; D) 2,35.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:3,type:"mc",warn:"Pazi: traži interval koji obuhvaća OBA broja (2 i 4); pazi na granice.",topic:"br",points:1,
  q:"Kojemu od navedenih intervala pripadaju brojevi 2 i 4?",
  opts:["[2,4]","⟨2,4]","[2,4⟩","⟨2,4⟩"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"[2,4] je zatvoreni interval koji sadrži oba ruba, dakle i 2 i 4. U ostalim intervalima barem jedan rub nije uključen.",
  steps:[
    {txt:"Notacija intervala: uglate zagrade [ ] = rub UKLJUČEN; obloka (ili kutne) ⟨ ⟩ = rub ISKLJUČEN."},
    {txt:"Treba interval koji sadrži OBA broja 2 i 4 — dakle oba rubova moraju biti uključena."},
    {txt:"Distractor: B, C, D testiraju koja vrsta zagrade isključuje koji rub. Tipična zamka: čitati zagrade obrnuto.",note:"diagnostika"},
    {txt:"A: [2,4] — oba uključena ✓; B: ⟨2,4] — 2 nije uključen ✗; C: [2,4⟩ — 4 nije uključen ✗; D: ⟨2,4⟩ — niti 2 niti 4 ✗ ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: [a, b] = {x : a ≤ x ≤ b} (zatvoreni); ⟨a, b⟩ = {x : a < x < b} (otvoreni); mješoviti [a, b⟩ ili ⟨a, b] uključuju samo jedan rub.",
    "Intuicija: 'Uglate' zagrade su 'tvrde' = uključuju; 'oble/kutne' su 'mekane' = isključuju.",
    "Česta greška: pomiješati notaciju (u nekim zemljama umjesto ⟨a, b⟩ koristi se (a, b) — pazi koju konvenciju koristi tvoj udžbenik).",
    "Provjera ✓: 2 ∈ [2, 4] jer 2 ≤ 2 ≤ 4 ✓; 4 ∈ [2, 4] jer 2 ≤ 4 ≤ 4 ✓"
  ,"Diagnostic: A) [2,4] ✓; B) ⟨2,4]; C) [2,4⟩; D) ⟨2,4⟩.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:4,type:"mc",warn:"Pazi: (4/7)·18,3; zaokruži na 2 decimale tek na kraju.",topic:"br",points:1,
  q:"Koliko iznose četiri sedmine broja 18,3 zaokružene na dvije decimale?",
  opts:["10,43","10,44","10,45","10,46"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"4/7 × 18,3 = 73,2/7 = 10,45714... Zaokruženo na 2 decimale: 10,46.",
  steps:[
    {txt:"'Četiri sedmine od X' znači (4/7) · X. Računaj: (4/7) · 18,3 = (4 · 18,3)/7 = 73,2/7."},
    {txt:"Dijeljenje: 73,2/7 = 10,4571428... (točno: 10,4(571428) — periodičan decimal s periodom 571428)."},
    {txt:"Distractor: A (10,43) krivo zaokruživanje; B (10,44) — možda krivi računi; C (10,45) zaokruživanje DOLJE umjesto gore (zaboraviti pravilo '≥5 gore').",note:"diagnostika"},
    {txt:"Zaokruživanje na 2 decimale: gledaj 3. decimalu = 7 (≥ 5), pa zaokružuje GORE. 10,45 + 0,01 = 10,46 ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (zaokruživanje): kod zaokruživanja na n decimala, gledaj (n+1). decimalu. Ako je ≥ 5, povisi n-tu za 1; ako je < 5, ostavi n-tu kakva jest.",
    "Intuicija: zaokruživanje preusmjerava na NAJBLIŽU 'mrežnu' točku. 10,4571 je bliže 10,46 nego 10,45 (jer je razlika 0,0029 vs 0,0071).",
    "Česta greška: zaokružiti 'dolje' iako je decimala ≥ 5; ili krivo dijeliti (npr. 73,2/7 ≈ 10,5 → 10,50, što je C ili D).",
    "Provjera ✓: 7 · 10,46 = 73,22 ≈ 73,2 (s preciznošću zaokruživanja) ✓"
  ,"Diagnostic: A) 10,43; B) 10,44; C) 10,45; D) 10,46 ✓.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:5,type:"mc",warn:"Pazi: 90 je 80 % originala → original = 90/0,8.",topic:"br",points:1,
  q:"Nakon sniženja od 20 % glazbeni CD košta 90 kn. Kolika je bila cijena toga CD-a prije sniženja?",
  opts:["108,00 kn","112,50 kn","114,00 kn","118,50 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Snižena cijena je 80% originalne. 0,80 · x = 90 ⇒ x = 90/0,80 = 112,50 kn.",
  steps:[
    {txt:"Označi početnu cijenu x. Sniženje 20% znači da preostaje 100% − 20% = 80% početne cijene."},
    {txt:"Postavi jednadžbu: 0,80 · x = 90 (snižena cijena = 80% od x)."},
    {txt:"Distractor: A (108) krivo: 90 + 20% od 90 = 108 (greška: 'dodati 20% na sniženo'); C (114) krivi račun; D (118,50) krivo postavljen postotak.",note:"diagnostika"},
    {txt:"Riješi: x = 90 / 0,80 = 112,5 kn ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: ako je nešto SNIŽENO za p%, novi iznos je (100 − p)% početnog. Da povratiš početni iznos, dijeli novi iznos s ((100 − p)/100).",
    "Intuicija: 90 kn je 80% početne cijene — manji broj predstavlja veći postotak (manji postotak), pa je početna cijena VEĆA od 90.",
    "Česta greška: dodati 20% od SNIŽENE cijene (90 + 18 = 108, što je opcija A — distractor!) umjesto da se vrati na 100% originalne cijene.",
    "Provjera ✓: 20% od 112,5 = 22,5; 112,5 − 22,5 = 90 ✓"
  ,"Diagnostic: A) 108,00 kn; B) 112,50 kn ✓; C) 114,00 kn; D) 118,50 kn.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:6,type:"mc",warn:"Pazi: svedi na iste jedinice (200 m/min = 12 km/h); pa 60/12.",topic:"br",points:1,
  q:"Automobil se kreće brzinom 60 km/h, a biciklist brzinom 200 m/min. Koliko je puta automobil brži od biciklista?",
  opts:["3 puta","4 puta","5 puta","6 puta"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pretvorimo biciklista u km/h: 200 m/min × 60 = 12 000 m/h = 12 km/h. Omjer: 60/12 = 5.",
  steps:[
    {txt:"Da se brzine usporede, moraju biti u ISTIM jedinicama. Pretvori 200 m/min u km/h."},
    {txt:"Pretvorba: 200 m/min · 60 min/h = 12 000 m/h. Pretvori m u km: 12 000 m/h ÷ 1000 = 12 km/h."},
    {txt:"Distractor: A (3) krivi izračun pretvorbe (npr. 200 × 30 = 6000); B (4); D (6) krivo pretvorbe ili krivi omjer.",note:"diagnostika"},
    {txt:"Omjer brzina: v_auto / v_bicikl = 60 / 12 = 5 ⇒ opt C (5 puta)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (pretvorba jedinica): 1 km = 1000 m; 1 h = 60 min. Za pretvorbu m/min → km/h: pomnoži s 60 (min → h) i dijeli s 1000 (m → km), tj. efektivno × 0,06.",
    "Intuicija: 200 m/min je 'koliko bicikl prijeđe za 1 minutu'. U sat ima 60 min, pa za sat prijeđe 12 000 m = 12 km.",
    "Česta greška: pomnožiti samo s 60 ili samo s 1/1000, dobiti 12 000 ili 0,2 km/h — krivi konačni omjer.",
    "Provjera ✓: 12 · 5 = 60 ✓"
  ,"Diagnostic: A) 3 puta; B) 4 puta; C) 5 puta ✓; D) 6 puta.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:7,type:"mc",warn:"Pazi: redoslijed — apsolutna vrijednost, dijeljenje 11/5 : 11, 5⁰ = 1; pa sredi.",topic:"br",points:1,
  q:"Koliko je |3/4 − 2| − 11/5 : 11 − 5⁰?",
  opts:["-79/20","-49/20","1/20","21/20"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"|3/4 − 2| = |-5/4| = 5/4. 11/5 : 11 = 1/5. 5⁰ = 1. Dakle: 5/4 − 1/5 − 1 = 25/20 − 4/20 − 20/20 = 1/20.",
  steps:[
    {txt:"Izračunaj pojedinačne dijelove izraza po PRIORITETU (apsolutna vrijednost, potencija, dijeljenje, pa zbrajanje/oduzimanje)."},
    {txt:"|3/4 − 2| = |3/4 − 8/4| = |−5/4| = 5/4 (apsolutna vrijednost = 'odbacuje minus')."},
    {txt:"11/5 : 11 = 11/5 · 1/11 = 1/5 (dijeljenje brojem = množenje recipročnim)."},
    {txt:"5⁰ = 1 (svaki broj na 0 = 1, osim 0⁰ koji je neodređen)."},
    {txt:"Distractor: A (−79/20) krivi predznak |3/4 − 2|; B (−49/20) krivi 5⁰; D (21/20) krivo svođenje na zajednički nazivnik.",note:"diagnostika"},
    {txt:"Konačno: 5/4 − 1/5 − 1. Zajednički nazivnik 20: 25/20 − 4/20 − 20/20 = (25 − 4 − 20)/20 = 1/20 ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (potencija): a⁰ = 1 za sve a ≠ 0. Posebno 5⁰ = 1, nije 5.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo (redoslijed operacija — PEMDAS/'zagrade'): 1) zagrade i apsolutna vrijednost, 2) potencije i korijeni, 3) množenje i dijeljenje, 4) zbrajanje i oduzimanje. Operacije iste razine: slijeva nadesno.",note:"postupak",final:true}
  ],
  why:[
    "Pravilo (redoslijed operacija — PEMDAS/'zagrade'): 1) zagrade i apsolutna vrijednost, 2) potencije i korijeni, 3) množenje i dijeljenje, 4) zbrajanje i oduzimanje. Operacije iste razine: slijeva nadesno.",
    "Pravilo 2 (potencija): a⁰ = 1 za sve a ≠ 0. Posebno 5⁰ = 1, nije 5.",
    "Intuicija: rastavi izraz na manje dijelove, izračunaj svaki, pa kombiniraj. Razlomci se zbrajaju/oduzimaju samo nakon SVOĐENJA na zajednički nazivnik.",
    "Česta greška: zaboraviti 5⁰ = 1 (misliti da je 5); ili dijeljenje 11/5 : 11 protumačiti kao 11/(5·11) = 1/55 (krivo).",
    "Provjera ✓: 1/20 + 4/20 + 20/20 = 25/20 = 5/4 ✓ (vraćamo na lijevu stranu)."
  ,"Diagnostic: A) -79/20; B) -49/20; C) 1/20 ✓; D) 21/20.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:8,type:"mc",warn:"Pazi: pomnoži unakrsno → 2(n + 1) = 4(p − 1) → n = 2p − 3.",topic:"al",points:1,
  q:"Čemu je jednako n iz jednakosti (n+1)/4 = (p-1)/2?",
  opts:["n = p/2 − 3","n = 2p − 3","n = p/2 − 1","n = 2p − 1"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Pomnožimo s 4: n+1 = 4(p-1)/2 = 2(p-1) = 2p-2. Dakle n = 2p-3.",
  steps:[
    {txt:"Riješi za n: pomnoži obje strane s 4 (uklanja se nazivnik na lijevoj strani): n + 1 = 4·(p − 1)/2 = 2·(p − 1)."},
    {txt:"Razvi desnu stranu: n + 1 = 2p − 2."},
    {txt:"Distractor: A (p/2 − 3) krivo dijeljenje umjesto množenja; C (p/2 − 1) krivi parametri; D (2p − 1) zaboraviti oduzeti 1 na kraju.",note:"diagnostika"},
    {txt:"Oduzmi 1 s obje strane: n = 2p − 2 − 1 = 2p − 3 ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za izoliranje varijable u jednadžbi s razlomcima, pomnoži obje strane sa zajedničkim nazivnikom (uklanja razlomak), pa preuredi.",
    "Intuicija: 'cilj' je dobiti n samostalno na jednoj strani; sve ostalo na drugu. Inverzne operacije obrnutim redoslijedom — zadnje primijenjena, prvo poništavana.",
    "Česta greška: krivo dijeliti s 2 cijelu desnu stranu (uključujući n+1) umjesto množiti s 4; ili zaboraviti distribuciju 2·(p − 1) = 2p − 2.",
    "Provjera ✓: za p = 5, originalna jednadžba: (n+1)/4 = (5−1)/2 = 2 ⇒ n + 1 = 8 ⇒ n = 7. Formula: n = 2·5 − 3 = 7 ✓"
  ,"Diagnostic: A) n = p/2 − 3; B) n = 2p − 3 ✓; C) n = p/2 − 1; D) n = 2p − 1.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:9,type:"mc",warn:"Pazi: (3a²b)⁴ = 81a⁸b⁴; podijeli s 27a³b² → 3a⁵b².",topic:"al",points:1,
  q:"Kojemu je od navedenih izraza jednak izraz (3a²b)⁴ : (27a³b²)?",
  opts:["3a⁵b²","9a³b⁶","(1/3)a³b²","(1/9)a⁵b⁶"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"(3a²b)⁴ = 3⁴ · a⁸ · b⁴ = 81a⁸b⁴. Dijelimo: 81a⁸b⁴ / (27a³b²) = 3a⁵b².",
  steps:[
    {txt:"Razvij brojnik primijenjujući (abc)ⁿ = aⁿbⁿcⁿ: (3a²b)⁴ = 3⁴ · (a²)⁴ · b⁴ = 81 · a⁸ · b⁴."},
    {txt:"Sada dijeli s nazivnikom: (81a⁸b⁴) / (27a³b²). Brojni faktor: 81/27 = 3."},
    {txt:"Eksponenti se OUDZIMAJU pri dijeljenju (pravilo aᵐ/aⁿ = a^(m−n)): a⁸/a³ = a⁵; b⁴/b² = b²."},
    {txt:"Distractor: B (9a³b⁶) krivo: 9 = (81/27)·? i krivi eksponenti; C (1/3·a³b²) krivo dijeljenje; D (1/9·a⁵b⁶) krivi koeficijent i b-eksponent.",note:"diagnostika"},
    {txt:"Kombinirano: 3 · a⁵ · b² = 3a⁵b² ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2: (aᵐ)ⁿ = a^(m·n) (potencija potencije = umnožak eksponenata).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo 1: (a·b)ⁿ = aⁿ·bⁿ (potencija umnoška = umnožak potencija).",
    "Pravilo 2: (aᵐ)ⁿ = a^(m·n) (potencija potencije = umnožak eksponenata).",
    "Pravilo 3: aᵐ / aⁿ = a^(m−n) (dijeljenje s istom bazom = razlika eksponenata).",
    "Česta greška: pri (3a²b)⁴ zaboraviti potencirati i 3 (uzeti samo 3, ne 81); ili pri dijeljenju zbrojiti eksponente umjesto oduzeti.",
    "Provjera ✓: 3a⁵b² · 27a³b² = 81 a⁸ b⁴ = (3a²b)⁴ ✓ (umnožak vraća brojnik)."
  ,"Diagnostic: A) 3a⁵b² ✓; B) 9a³b⁶; C) (1/3)a³b²; D) (1/9)a⁵b⁶.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:10,type:"mc",warn:"Pazi: razlika kvadrata 9a² − 4 minus (a² + 6a + 9); pazi predznake.",topic:"al",points:1,
  q:"Kojemu je izrazu jednak izraz (3a − 2)(3a + 2) − (a + 3)² za sve realne brojeve a?",
  opts:["2a² + 5","8a² − 13","2a² − 18a + 5","8a² − 6a − 13"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"(3a-2)(3a+2) = 9a² − 4 (razlika kvadrata). (a+3)² = a² + 6a + 9. Razlika: 9a² − 4 − a² − 6a − 9 = 8a² − 6a − 13.",
  steps:[
    {txt:"Prepoznaj uzorke u izrazu. (3a − 2)(3a + 2) je RAZLIKA KVADRATA: (A − B)(A + B) = A² − B². Primijeni: (3a)² − 2² = 9a² − 4."},
    {txt:"(a + 3)² je KVADRAT BINOMA: (A + B)² = A² + 2AB + B². Primijeni: a² + 2·a·3 + 3² = a² + 6a + 9."},
    {txt:"Oduzmi: (9a² − 4) − (a² + 6a + 9). PAŽNJA: minus distribuira na sve članove druge zagrade."},
    {txt:"Distractor: A (2a² + 5) tipično ako se zaboravi −6a član; B (8a² − 13) zaboraviti −6a; C (2a² − 18a + 5) krivi predznaci.",note:"diagnostika"},
    {txt:"= 9a² − 4 − a² − 6a − 9 = (9a² − a²) − 6a + (−4 − 9) = 8a² − 6a − 13 ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (kvadrat binoma): (a ± b)² = a² ± 2ab + b². Srednji član 2ab — često se zaboravlja.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo 1 (razlika kvadrata): (a − b)(a + b) = a² − b². Brzo množenje binomâ konjugiranog oblika.",
    "Pravilo 2 (kvadrat binoma): (a ± b)² = a² ± 2ab + b². Srednji član 2ab — često se zaboravlja.",
    "Intuicija: prepoznaj algebarske obrasce prije nego što direktno množiš — uzori daju 'preskakanje' koraka.",
    "Česta greška: kod oduzimanja zagrade − (a² + 6a + 9), zaboraviti distribuirati minus na sve članove → ostaviti +6a umjesto −6a (vodi do opcije B).",
    "Provjera ✓: za a = 1: izvorni izraz = (1)(5) − (4)² = 5 − 16 = −11. Formula: 8·1 − 6·1 − 13 = −11 ✓"
  ,"Diagnostic: A) 2a² + 5; B) 8a² − 13; C) 2a² − 18a + 5; D) 8a² − 6a − 13 ✓.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:11,img:true,type:"mc",warn:"Pazi: pobočka pravilne četverostrane piramide je jednakokračni TROKUT.",topic:"geom",points:1,img:true,
  q:"Koji je prikazani geometrijski lik pobočka pravilne uspravne četverostrane piramide?",
  opts:["Kvadrat","Pravokutnik","Jednakokračani trokut","Jednakostranični trokut"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pobočka (bočna strana) pravilne uspravne četverostrane piramide je jednakokračani trokut. Baza trokuta = stranica kvadrata, krakovi = bočni bridovi piramide.",
  steps:[
    {txt:"Pravilna USPRAVNA četverostrana piramida: baza = kvadrat; vrh V je iznad SREDIŠTA baze (jednako udaljen od svih vrhova baze)."},
    {txt:"Svaka pobočka je trokut: njegova baza = jedan brid kvadrata (duljine a); dva kraka = bočni bridovi piramide (od vrhova baze do vrha V)."},
    {txt:"Pošto je V iznad središta, oba kraka su JEDNAKE duljine (po simetriji). Baza je duljine a, ali krakovi su DRUGA (i jednake) duljine — pa nije jednakostraničan trokut."},
    {txt:"Distractor: A/B (kvadrat/pravokutnik) prikladni za PRIZMU, ne piramidu; D (jednakostranični trokut) samo ako su bočni bridovi = stranicama baze, što nije zajamčeno.",note:"diagnostika"},
    {txt:"Trokut s dvije jednake stranice je jednakokračan ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2: pravilna uspravna piramida ima POBOČKE jednake (po simetriji); za četverostranu to znači 4 jednaka jednakokračna trokuta.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: pobočke PIRAMIDE su uvijek TROKUTI (jer se sve stranice spajaju u jedan vrh). Pobočke PRIZME su pravokutnici (ili paralelogrami).",
    "Pravilo 2: pravilna uspravna piramida ima POBOČKE jednake (po simetriji); za četverostranu to znači 4 jednaka jednakokračna trokuta.",
    "Intuicija: kvadrat (baza) → 4 točke; svaka 2 susjedne s vrhom V čine pobočku. Sve pobočke kongruentne jer je piramida pravilna.",
    "Česta greška: pomiješati pravilnu piramidu s prizmom (pobočke prizme su pravokutnici); ili pretpostaviti da su pobočke jednakostranične (samo ako su krakovi = stranica baze).",
    "Provjera ✓: pravilna piramida ima jednake bočne bridove i jednake stranice baze. Trokut s 2 jednake stranice (oba kraka) i različitu treću (baza = stranica kvadrata) je definicijski jednakokračan ✓"
  ,"Diagnostic: A) Kvadrat; B) Pravokutnik; C) Jednakokračani trokut ✓; D) Jednakostranični trokut.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:12,img:true,type:"mc",warn:"Pazi: tjeme = najviša/najniža točka grafa; očitaj koordinate sa slike.",topic:"kv",points:1,img:true,
  q:"Koje su koordinate tjemena parabole prikazane na slici?",
  opts:["(2, -2)","(1, 0)","(1, 3)","(0, 6)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Iz grafa se očitava da je tjeme (najniža točka) parabole u točki (2, -2).",
  steps:[
    {txt:"Tjeme parabole je njezina NAJNIŽA TOČKA (ako se otvara prema gore) ili NAJVIŠA (ako se otvara dolje). Prema slici, parabola se otvara prema gore (ima minimum)."},
    {txt:"Očitaj koordinate najniže točke s grafa: apscisa (x-koordinata) = 2; ordinata (y-koordinata) = −2."},
    {txt:"Distractor: B (1, 0) krivo očitavanje x-koordinate; C (1, 3) možda krivo locirano ili druga karakteristična točka (npr. y-presjek); D (0, 6) y-presjek parabole, ne tjeme.",note:"diagnostika"},
    {txt:"Tjeme parabole: T(2, −2) ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: tjeme parabole y = a(x − h)² + k ima koordinate (h, k). Za grafičko očitavanje, naći najnižu/najvišu točku grafa.",
    "Intuicija: parabola je SIMETRIČNA oko vertikalnog pravca koji prolazi kroz tjeme. Tjeme dijeli graf na dva 'krila' jednakog oblika.",
    "Česta greška: zamijeniti redoslijed koordinata (uzeti (−2, 2) umjesto (2, −2)); ili pomiješati tjeme s y-presjekom (točkom gdje parabola siječe y-os, što je drugi karakteristični element).",
    "Provjera ✓: na slici, vertikalan pravac kroz tjeme je x = 2 (os simetrije). Točke s istom y vrijednošću (npr. y = 0) su simetrične oko x = 2."
  ,"Diagnostic: A) (2, -2) ✓; B) (1, 0); C) (1, 3); D) (0, 6).","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:13,type:"mc",warn:"Pazi: profit = prihod − troškovi; postavi prema uvjetu (linearno).",topic:"fin",points:2,ex:"Postavljanje i rješavanje linearne nejednadžbe iz tekstualnog problema. Test: prihod = cijena × količina; profit = prihod − troškovi; uvjet isplativosti ⇒ ≥. Zaokruživanje nagore za diskretne varijable.",
  q:"U pogonu se izrađuju proizvodi koji se prodaju po cijeni od 14,30 kn po komadu. Troškovi održavanja pogona iznose 325 kn po danu. Proizvodnja je isplativa ako nakon 20 dana proizvodnje i prodaje svih izrađenih proizvoda te nakon odbijanja troškova održavanja pogona za tih 20 dana ostane barem 5500 kn. Koliko najmanje proizvoda treba izraditi u tih 20 dana kako bi proizvodnja bila isplativa?",
  opts:["286","408","670","840"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Prihod: 14,30n. Troškovi: 20 × 325 = 6500 kn. Uvjet: 14,30n − 6500 ≥ 5500. 14,30n ≥ 12000. n ≥ 839,16. Najmanji cijeli: 840.",
  steps:[
    {txt:"Izračunaj UKUPNE TROŠKOVE za 20 dana: 20 dana · 325 kn/dan = 6 500 kn (fiksni troškovi)."},
    {txt:"Označi n = broj proizvedenih (i prodanih) komada. PRIHOD: 14,30 kn/komad · n = 14,30n kn."},
    {txt:"Uvjet isplativosti: PRIHOD − TROŠKOVI ≥ 5500 ⇒ 14,30n − 6 500 ≥ 5 500."},
    {txt:"Riješi: 14,30n ≥ 12 000 ⇒ n ≥ 12 000/14,30 = 839,16..."},
    {txt:"Distractor: A (286) krivi pristup, npr. 5500/(14,30 − 5,84); B (408) krivi izračun troškova; C (670) zaokruživanje na 670 umjesto 840 — moguća greška pri postavljanju uvjeta.",note:"diagnostika"},
    {txt:"Pošto je n broj komada (cijeli broj), najmanji n koji zadovoljava uvjet je n = 840 ⇒ opt D",final:true,note:"verifikacija"},{txt:"Intuicija: profit = prihod − troškovi. Ako ekonomski uvjet kaže 'najmanje 5500 kn dobiti', znači profit ≥ 5500.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: 'isplativost' = prihod ≥ troškovi + tražena dobit. Postavi nejednadžbu, pa riješi za broj komada.",note:"postupak",final:true}
  ],
  why:[
    "Pravilo: 'isplativost' = prihod ≥ troškovi + tražena dobit. Postavi nejednadžbu, pa riješi za broj komada.",
    "Intuicija: profit = prihod − troškovi. Ako ekonomski uvjet kaže 'najmanje 5500 kn dobiti', znači profit ≥ 5500.",
    "Česta greška: zaokruživanje NADOLE (n = 839 umjesto 840) — pošto je n diskretan broj, treba zaokružiti NAGORE da bi uvjet n ≥ 839,16 ostao zadovoljen.",
    "Provjera ✓: n = 840 ⇒ prihod = 14,30 · 840 = 12 012 kn; dobit = 12 012 − 6 500 = 5 512 ≥ 5 500 ✓. n = 839 ⇒ prihod = 11 997,7; dobit = 5 497,7 < 5 500 ✗"
  ,"Diagnostic: A) 286; B) 408; C) 670; D) 840 ✓.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
  {id:14,type:"mc",warn:"Pazi: stranice 16k i 9k; √((16k)² + (9k)²) = 106 → nađi k, pa visina = 9k.",topic:"geom",points:2,ex:"Pitagorin poučak primijenjen na pravokutnik s poznatim omjerom stranica i dijagonalom. Test: parametrizacija omjera 16:9 s faktorom k, postavljanje jednadžbe (16k)² + (9k)² = d².",
  q:"Omjer širine i visine ekrana televizora jest 16 : 9. Duljina dijagonale ekrana iznosi 106 cm. Kolika je visina ekrana zaokružena na cijeli broj?",
  opts:["38 cm","44 cm","52 cm","64 cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Širina = 16k, visina = 9k. Dijagonala: √((16k)² + (9k)²) = 106. k√(256+81) = k√337 = 106. k = 106/√337 ≈ 5,778. Visina = 9k = 9 × 5,778 ≈ 52 cm.",
  steps:[
    {txt:"Označi parametar k tako da širina = 16k, visina = 9k (omjer 16:9). Ekran je PRAVOKUTNIK; dijagonala povezuje suprotne vrhove."},
    {txt:"Pitagorin poučak: (širina)² + (visina)² = (dijagonala)². Uvrsti: (16k)² + (9k)² = 106²."},
    {txt:"Razvi: 256k² + 81k² = 11 236 ⇒ 337k² = 11 236 ⇒ k² = 11 236/337 ≈ 33,34 ⇒ k = √33,34 ≈ 5,775."},
    {txt:"Distractor: A (38) krivi omjer (npr. 9/16·106 ≈ 60 ili krivi račun); B (44) krivi omjer; D (64) možda zamijeni širinu i visinu (širina je 16k ≈ 92 cm).",note:"diagnostika"},
    {txt:"Visina = 9k = 9 · 5,775 ≈ 51,97. Zaokruženo na cijeli broj: 52 cm ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (omjer): omjer 16:9 znači da je širina/visina = 16/9. Parametriziraj sa zajedničkim faktorom k.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (Pitagorin poučak): za pravokutni trokut s katetama a, b i hipotenuzom c vrijedi a² + b² = c². U pravokutniku, dijagonala je hipotenuza.",
    "Pravilo 2 (omjer): omjer 16:9 znači da je širina/visina = 16/9. Parametriziraj sa zajedničkim faktorom k.",
    "Intuicija: TV-i 16:9 su 'širokoekranski' (širina ≈ 1,78× visina). Za dijagonalu 106 cm (oko 42 inča), visina je očekivano oko 50 cm.",
    "Česta greška: zamijeniti širinu i visinu (uzeti 16k kao visinu, daje 92 cm — opt D koji nije među opcijama, ali sugerira da je pomiješano); ili krivo izračunati 16² + 9² (= 337, lako se pogriješi).",
    "Provjera ✓: visina 52, širina 16·5,775 ≈ 92,4. √(52² + 92,4²) = √(2704 + 8538) ≈ √11242 ≈ 106 ✓"
  ,"Diagnostic: A) 38 cm; B) 44 cm; C) 52 cm ✓; D) 64 cm.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:15,img:true,type:"mc",warn:"Pazi: visina = stranica·sin(kut); pazi koji kut koristiš (135° ili dopunski 45°).",topic:"geom",points:2,img:true,ex:"Površina paralelograma s tupim kutom + trigonometrija. Test: identifikacija visine, primjena sin(45°) za suplementarni kut 135°, kombiniranje s Pitagorom za bazu.",
  q:"Na skici je prikazan paralelogram ABCD u kojemu je |AD| = 7,8 cm i ∠ADC = 135°. Na stranici CD istaknuta je točka T tako da je |DT| = 6,1 cm i ∠BTC = 90°. Kolika je površina toga paralelograma?",
  opts:["33,64 cm²","47,58 cm²","64,06 cm²","90,42 cm²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Visina na stranicu DC: h = AD · sin(∠ADC − 90°)... Zapravo: ∠ADT = 180° − 135° = 45° (suplementarni). Visina paralelograma h = AD · sin(45°) = 7,8 × 0,7071 ≈ 5,515. Baza DC: iz pravokutnog trokuta BTC, ∠BTC=90°. DC = DT + TC. TC = ... Površina = DC × h. Prema ključu NCVVO: 64,06 cm².",
  steps:[
    {txt:"Paralelogram ABCD: |AD| = 7,8 cm, ∠ADC = 135° (tupi kut pri D). Na stranici DC istaknuta točka T s |DT| = 6,1 cm i ∠BTC = 90°."},
    {txt:"Visina paralelograma iz A okomito na DC: u trokutu ADt (gdje je t podnožište okomice iz A na DC), ∠ADt = 180° − 135° = 45° (jer t leži na pravcu DC izvan strane uz D, ili koristi suplementarni kut). h = |AD| · sin(45°) = 7,8 · (√2/2) ≈ 5,515 cm."},
    {txt:"Stranica DC: u pravokutnom trokutu BTC s ∠BTC = 90°, ako je |BC| = |AD| = 7,8 i |BT| = h (visina paralelograma), tada |TC| = √(|BC|² − |BT|²) = √(7,8² − 5,515²) ≈ √(60,84 − 30,42) ≈ √30,42 ≈ 5,515. (Geometrijska konfiguracija ovisi o točnoj poziciji točke T.)"},
    {txt:"Distractor: A (33,64) krivi izračun visine ili baze; B (47,58) djelomično ispravno; D (90,42) krivi kut ili krivi omjer.",note:"diagnostika"},
    {txt:"Stranica DC = DT + TC ili sl. ovisno o orijentaciji = 6,1 + 5,515 ≈ 11,615 cm. Površina P = DC · h ≈ 11,615 · 5,515 ≈ 64,06 cm² ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (suplementarni kutovi): kutovi paralelograma uz istu stranicu su suplementarni (zbroj 180°). ∠ADC = 135° ⇒ susjedni kut ∠DAB = 45° (i obratno).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: Površina paralelograma = baza · visina (visina okomita na bazu). Visinu možeš dobiti trigonometrijom iz kuta uz bazu i susjednog brida.",
    "Pravilo 2 (suplementarni kutovi): kutovi paralelograma uz istu stranicu su suplementarni (zbroj 180°). ∠ADC = 135° ⇒ susjedni kut ∠DAB = 45° (i obratno).",
    "Intuicija: visina iz vrha A na stranicu DC se može produžiti izvan paralelograma — to je razlog što koristimo sin(45°) = sin(180° − 135°) za kut 135°.",
    "Česta greška: koristiti |AD| · sin(135°) izravno (matematički isto kao sin(45°), ali konceptualno bolje raditi s oštrim kutom); ili pomiješati stranicu i visinu — visina NIJE jednaka stranici.",
    "Provjera ✓: P = baza · h ≈ 11,615 · 5,515 ≈ 64,06 cm². Ključ NCVVO potvrđuje vrijednost ✓"
  ,"Diagnostic: A) 33,64 cm²; B) 47,58 cm²; C) 64,06 cm² ✓; D) 90,42 cm².","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:16,img:true,type:"mc",warn:"Pazi: očitaj dva pravca (nagib + odsječak) sa slike → njihove jednadžbe čine sustav.",topic:"lin",points:2,img:true,ex:"Prepoznavanje sustava jednadžbi iz grafa pomoću presjeka s osima. Test: izračun x-presjeka (y=0) i y-presjeka (x=0) za svaku kandidatnu jednadžbu i usporedba sa slikom.",
  q:"Koji je od navedenih sustava jednadžba prikazan na slici?",
  opts:["2x − 3y = 6, 4x + 3y = 12","2x + 3y = 6, 4x − 3y = 12","3x + 2y = 6, -3x + 4y = 12","-3x + 2y = 6, 3x + 4y = 12"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Iz grafa očitamo presjecišta pravaca s osima i provjerimo koji sustav odgovara. Sustav A: 2x-3y=6 i 4x+3y=12 daje točke koje odgovaraju grafu.",
  steps:[
    {txt:"Iz grafa očitaj X-PRESJEK i Y-PRESJEK svakog pravca (točke gdje siječe osi)."},
    {txt:"Za svaki kandidatni sustav, izračunaj presjeke svakog pravca: postavi x = 0 (daje y-presjek) i y = 0 (daje x-presjek)."},
    {txt:"Provjeri sustav A — pravac 1: 2x − 3y = 6 → x-presjek (y=0): 2x = 6 ⇒ x = 3, točka (3, 0); y-presjek (x=0): −3y = 6 ⇒ y = −2, točka (0, −2). Pravac 2: 4x + 3y = 12 → (3, 0) i (0, 4)."},
    {txt:"Distractor: B, C, D — provjeri njihove presjeke i usporedi s grafom. Svaki ima drugačiji oblik pravaca koji ne odgovaraju slici.",note:"diagnostika"},
    {txt:"Oba pravca iz sustava A prolaze kroz točku (3, 0). Drugi prolazi kroz (0, 4), prvi kroz (0, −2). Ako slika to prikazuje, sustav A je rješenje ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: dva pravca → dva presjeka s y-osi i dva s x-osi (do 4 karakteristične točke). Iz grafa identificiraj te točke pa provjeri svaki sustav.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: linearna jednadžba ax + by = c definira pravac. Presjek s osima: x-presjek (y=0): x = c/a; y-presjek (x=0): y = c/b.",
    "Intuicija: dva pravca → dva presjeka s y-osi i dva s x-osi (do 4 karakteristične točke). Iz grafa identificiraj te točke pa provjeri svaki sustav.",
    "Česta greška: krivo identificirati presjek kao 'najbliža cijela točka' (ako je u stvari u necjelobrojnoj poziciji); ili pomiješati x- i y-presjek.",
    "Provjera ✓: rješenje sustava (sjecište oba pravca) je (3, 0) — to bi trebalo biti vidljivo na slici kao zajednička točka oba pravca."
  ,"Diagnostic: A) 2x − 3y = 6, 4x + 3y = 12 ✓; B) 2x + 3y = 6, 4x − 3y = 12; C) 3x + 2y = 6, -3x + 4y = 1*; D) -3x + 2y = 6, 3x + 4y = 1*.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte vrijednost izraza (139 · √225) / 4,8³.",
  sol:{ans:"18,853...",alt:["18,85","18,853","18,86","18,9"]},
  exp:"√225 = 15. 139 × 15 = 2085. 4,8³ = 110,592. 2085 / 110,592 = 18,853...",
  steps:[
    {txt:"Pojednostavi korijen: √225 = 15 (jer 15² = 225)."},
    {txt:"Izračunaj brojnik: 139 · 15 = 2 085."},
    {txt:"Izračunaj nazivnik: 4,8³ = 4,8 · 4,8 · 4,8 = 23,04 · 4,8 = 110,592."},
    {txt:"Podijeli: 2 085 / 110,592 ≈ 18,853 ⇒ 18,853...",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 18,853... ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kod složenih izraza, izračunaj posebno brojnik i nazivnik, pa podijeli.",
    "Intuicija: 4,8 je blizu 5, pa 4,8³ je blizu 5³ = 125. Točno 110,592 (manje od 125, kao što očekujemo).",
    "Česta greška: krivo izračunati √225 (npr. 16 ili 14) ili 4,8³ (npr. zaboraviti množenje s 4,8 treći put).",
    "Provjera ✓: 18,853 · 110,592 ≈ 2 085 ✓ (recipročno: brojnik dobiven natrag)."
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Koliko iznosi 32 % od 84?",
  sol:{ans:"26,88",alt:["26,88","odgovor: 26,88"]},
  exp:"32% od 84 = 0,32 × 84 = 26,88.",
  steps:[
    {txt:"Pretvori postotak u decimalni faktor: 32 % = 32/100 = 0,32."},
    {txt:"'P % od X' znači množenje: P/100 · X. Stoga: 0,32 · 84."},
    {txt:"Izračun: 0,32 · 84 = 32 · 84/100 = 2 688/100 = 26,88 ⇒ 26,88",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 26,88 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: P % od broja X = (P/100) · X. Postotak je 'razlomak sa stotim nazivnikom'.",
    "Intuicija: 32 % je 'malo manje od trećine' (33,33...% = 1/3). Trećina od 84 ≈ 28, pa 32 % je malo manje, oko 27 — što je u skladu s 26,88.",
    "Česta greška: zaboraviti dijeljenje s 100 i pomnožiti 32 · 84 = 2 688 (rezultat 100 puta veći).",
    "Provjera ✓: 26,88 / 84 = 0,32 = 32 % ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:19,type:"sa",topic:"al",points:1,
  q:"Oduzmite razlomke (b+1)/b² − 1/b.",
  sol:{ans:"[FRAC:1|b²]",alt:["1/b²","odgovor: [FRAC:1|b²]","odgovor","rezultat"]},
  solFormula:{frac:[["1","b²"]]},
  exp:"Zajednički nazivnik je b². (b+1)/b² − b/b² = (b+1−b)/b² = 1/b².",
  steps:[
    {txt:"Odredi zajednički nazivnik (ZN). Imamo razlomke s nazivnicima b² i b. Najmanji ZN = b² (jer b² je VIŠEKRATNIK od b)."},
    {txt:"Proširi drugi razlomak na ZN: 1/b = b/b² (množimo brojnik i nazivnik s b)."},
    {txt:"Oduzmi razlomke s istim nazivnikom: (b+1)/b² − b/b² = (b+1−b)/b² = 1/b² ⇒ [FRAC:1|b²]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: [FRAC:1|b²] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kod zbrajanja/oduzimanja razlomaka, svedi na ZAJEDNIČKI NAZIVNIK, pa zbroji/oduzmi BROJNIKE (nazivnik ostaje).",
    "Pravilo 2: proširenje razlomka: a/c = (a·k)/(c·k) za k ≠ 0 (pomnoži brojnik i nazivnik istim brojem).",
    "Intuicija: razlomci s različitim 'jedinicama' (nazivnicima) ne mogu se direktno zbrajati — kao kruške i jabuke. Treba zajedničku 'jedinicu' (ZN).",
    "Česta greška: zaboraviti proširiti DRUGI razlomak (1/b), pa pokušati direktno oduzeti (b+1)/b² − 1/b — krivo, jer nazivnici nisu isti.",
    "Provjera ✓: za b = 2: izvorni izraz (3)/4 − 1/2 = 3/4 − 2/4 = [FRAC:1|4]. Formula: 1/4 = 1/b² ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:20,type:"sa",topic:"al",points:1,
  q:"Riješite jednadžbu 0,3(x − 2) = 5 − x/2.",
  sol:{ans:"x = 7",alt:["7","x=7"]},
  exp:"0,3x − 0,6 = 5 − x/2. Pomnožimo s 10: 3x − 6 = 50 − 5x. 8x = 56. x = 7.",
  steps:[
    {txt:"Distribuiraj na lijevoj strani: 0,3(x − 2) = 0,3x − 0,6."},
    {txt:"Pomnoži obje strane s 10 (uklanja decimale i razlomak): 10·(0,3x − 0,6) = 10·(5 − x/2) ⇒ 3x − 6 = 50 − 5x."},
    {txt:"Premjesti x-članove na lijevo, brojeve na desno: 3x + 5x = 50 + 6 ⇒ 8x = 56."},
    {txt:"Podijeli s 8: x = 56/8 = 7 ⇒ x = 7",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = 7 ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = x = 7 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: linearna jednadžba s razlomcima/decimalama — pomnoži obje strane s NZV nazivnika (ovdje 10) da se uklone razlomci.",
    "Intuicija: cilj je izolirati x na jednoj strani. Inverzne operacije: dijeljenje umjesto množenja, oduzimanje umjesto zbrajanja.",
    "Česta greška: zaboraviti distribuirati 0,3 na oba člana zagrade (uzeti samo 0,3x), ili krivo množiti s 10 (množi se SAMO desna strana umjesto OBJE).",
    "Provjera ✓: x = 7: LHS = 0,3·(7−2) = 0,3·5 = 1,5; RHS = 5 − 7/2 = 5 − 3,5 = 1,5 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:21,type:"sa",topic:"stat",points:1,
  q:"Košarkaška je ekipa u pet utakmica koje je odigrala postigla redom 92, 74, 68, 82 i 70 poena. Koliko poena mora postići na sljedećoj utakmici kako bi joj prosjek u svih šest utakmica bio 80 poena po utakmici?",
  sol:{ans:"94",alt:["94","odgovor: 94"]},
  exp:"Za prosjek 80 u 6 utakmica treba ukupno 6 × 80 = 480. Dosad: 92+74+68+82+70 = 386. Treba: 480 − 386 = 94.",
  steps:[
    {txt:"Aritmetička sredina = (zbroj svih vrijednosti) / (broj vrijednosti). Za prosjek 80 u 6 utakmica, UKUPNI zbroj mora biti: 6 · 80 = 480 poena."},
    {txt:"Trenutni zbroj iz 5 utakmica: 92 + 74 + 68 + 82 + 70 = 386 poena."},
    {txt:"Potreban zbroj 6. utakmice: 480 − 386 = 94 poena ⇒ 94",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"},{txt:"Točan odgovor: 94 ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: aritmetička sredina x̄ = (x₁ + x₂ + ... + xₙ) / n. Da bi se postigao ciljani prosjek, ukupni zbroj mora biti n · x̄.",
    "Intuicija: postojeći prosjek je 386/5 = 77,2. Da se prosjek 'podigne' na 80, posljednja utakmica mora biti IZNADPROSJEČNA — 94 je 14 iznad prosjeka 80, što kompenzira nedostatak.",
    "Česta greška: računati 'prosjek nedostatka' (npr. 80 − 77,2 = 2,8 i misliti da treba 'samo malo iznad 80') — to ne radi jer prosjek se mora popraviti retroaktivno.",
    "Provjera ✓: (92+74+68+82+70+94)/6 = 480/6 = 80 ✓"
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:22.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Za pripremu obroka za sedam osoba utrošeno je 4,2 dL mlijeka i 350 g krušnih mrvica. Kolika je količina tih namirnica potrebna za pripremu takvoga obroka za četiri osobe?",
  sol:{ans:"2,4 dL mlijeka i 200 g krušnih mrvica",alt:["2,4 dL i 200 g","2,4 dL 200 g"]},
  exp:"Skaliramo: 4,2 × 4/7 = 2,4 dL mlijeka. 350 × 4/7 = 200 g mrvica.",
  steps:[
    {txt:"Recept se skalira proporcionalno broju osoba. Za 4 osobe (umjesto 7), faktor skaliranja je 4/7."},
    {txt:"Mlijeko: 4,2 dL · (4/7) = (4,2 · 4)/7 = 16,8/7 = 2,4 dL."},
    {txt:"Krušne mrvice: 350 g · [FRAC:4|7] = (350 · 4)/7 = 1 400/7 = 200 g ⇒ 2,4 dL mlijeka i 200 g krušnih mrvica",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 2,4 dL mlijeka i 200 g krušnih mrvica ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (proporcionalnost): ako se količina skalira faktorom k, svi sastojci se skaliraju istim faktorom (linearno).",
    "Intuicija: za pola osoba — polovina sastojaka; za 4/7 osoba — 4/7 sastojaka. Logična, intuitivna proporcija.",
    "Česta greška: ZBROJITI razliku (7 − 4 = 3) i oduzeti 3/7 sastojaka — krivo, jer treba MNOŽITI sa 4/7, ne oduzimati 3/7.",
    "Provjera ✓: 2,4 dL · 7/4 = 4,2 dL ✓ (vraćamo na 7 osoba); 200 · 7/4 = 350 g ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Tri kilograma banana i četiri kilograma jabuka koštaju 44,50 kn. Dva kilograma banana i pet kilograma jabuka koštaju 40,75 kn. Koliko košta kilogram jabuka?",
  sol:{ans:"4,75 kn",alt:["4,75","4,75"]},
  exp:"3b+4j=44,50 i 2b+5j=40,75. Množimo prvu s 2, drugu s 3: 6b+8j=89; 6b+15j=122,25. Oduzimamo: 7j=33,25. j=4,75 kn.",
  steps:[
    {txt:"Označi: b = cijena 1 kg banana, j = cijena 1 kg jabuka. Postavi SUSTAV: (1) 3b + 4j = 44,50; (2) 2b + 5j = 40,75."},
    {txt:"Metoda eliminacije (poništi b): pomnoži (1) s 2 i (2) s 3, pa oduzmi. (1)·2: 6b + 8j = 89,00. (2)·3: 6b + 15j = 122,25."},
    {txt:"Oduzmi prvu od druge: (6b + 15j) − (6b + 8j) = 122,25 − 89,00 ⇒ 7j = 33,25 ⇒ j = 33,25/7 = 4,75 kn ⇒ 4,75 kn",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: 4,75 kn ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = 4,75 kn u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (metoda eliminacije): pomnoži jednadžbe pogodnim brojevima tako da koeficijent jedne nepoznanice bude jednak u obje, pa oduzmi.",
    "Intuicija: dvije nepoznanice (b i j) → dvije jednadžbe. Eliminacijom svedeš na jednu jednadžbu s jednom nepoznanicom.",
    "Česta greška: pri eliminaciji zaboraviti pomnožiti DESNU stranu jednadžbe istim faktorom (čest izvor pogrešnih rezultata).",
    "Provjera ✓: j = 4,75 ⇒ iz (1): 3b + 4·4,75 = 44,50 ⇒ 3b = 44,50 − 19 = 25,50 ⇒ b = 8,50. Provjera (2): 2·8,50 + 5·4,75 = 17 + 23,75 = 40,75 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:23.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = -1/2 · x + 3. U koordinatnome sustavu nacrtajte graf funkcije f.",
  sol:{ans:"pravac nacrtan",alt:["graf","pravacnacrtan","odgovor: pravac nacrtan"]},
  exp:"Nagib = -1/2, y-presjek = (0, 3), x-presjek = (6, 0). Spajamo točke i dobivamo padajući pravac.",
  steps:[
    {txt:"Linearna funkcija f(x) = kx + n s nagibom k = −1/2 i odsječkom na y-osi n = 3."},
    {txt:"Odredi dvije karakteristične točke. Y-presjek: f(0) = 3 → točka (0, 3). X-presjek (nultočka): 0 = −x/2 + 3 ⇒ x = 6 → točka (6, 0)."},
    {txt:"Označi obje točke u koord. sustavu i povuci PRAVAC kroz njih. Pošto k < 0, pravac PADA s lijeva na desno ⇒ graf nacrtan",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: linearna funkcija je pravac — nagib određuje smjer.",final:true,note:"intuicija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Točan odgovor: pravac nacrtan ✓",note:"odgovor",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: dva različita točka jednoznačno određuju pravac. Linearna funkcija f(x) = kx + n je pravac s nagibom k i y-presjekom n.",
    "Intuicija: k > 0 → pravac raste; k < 0 → pravac pada; k = 0 → vodoravni pravac.",
    "Česta greška: krivo izračunati x-presjek (zaboraviti reciprokirati −1/2); ili krivo identificirati y-presjek (pomiješati s nagibom).",
    "Provjera ✓: f(2) = −1 + 3 = 2 (točka (2, 2) je na pravcu). Provjeri grafom — leži li između (0, 3) i (6, 0)? Da, simetrično ✓"
  ,"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:23.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Zadana je funkcija f(x) = -1/2 · x + 3. Odredite nultočku funkcije f.",
  sol:{ans:"6",alt:["x = 6","(6,0)","x=6"]},
  exp:"Nultočka: f(x) = 0. -1/2 · x + 3 = 0. x = 6.",
  steps:[
    {txt:"Nultočka funkcije f je broj x za koji vrijedi f(x) = 0. Geometrijski: gdje graf siječe x-os."},
    {txt:"Postavi jednadžbu f(x) = 0: −(1/2)·x + 3 = 0 ⇒ −(1/2)·x = −3."},
    {txt:"Pomnoži s −2 (ili dijeli s −1/2): x = (−3)·(−2) = 6 ⇒ x = 6",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: linearna funkcija je pravac — nagib određuje smjer.",final:true,note:"intuicija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Točan odgovor: 6 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: nultočka linearne funkcije f(x) = kx + n je x = −n/k (uz k ≠ 0). To je rješenje jednadžbe f(x) = 0.",
    "Intuicija: 'gdje graf prolazi kroz x-os' — y-koordinata je 0, nađi pripadajuću x-koordinatu.",
    "Česta greška: zaboraviti minus pri rješavanju − (1/2)x = −3 (rezultira x = −6 umjesto 6); ili pomiješati x-presjek s y-presjekom.",
    "Provjera ✓: f(6) = −(1/2)·6 + 3 = −3 + 3 = 0 ✓"
  ,"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:24.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Odredite sva rješenja jednadžbe x/3 · (x-1)/2 = 1.",
  sol:{ans:"-2 i 3",alt:["-2 i 3","x=-2 x=3","x₁ = -2, x₂ = 3"]},
  exp:"x(x-1)/6 = 1. x² − x = 6. x² − x − 6 = 0. (x-3)(x+2) = 0. x = 3 ili x = -2.",
  steps:[
    {txt:"Lijeva strana: x/3 · (x−1)/2 = x(x−1)/(3·2) = x(x−1)/6. Pomnoži obje strane s 6: x(x−1) = 6."},
    {txt:"Razvi i preuredi u standardni oblik kvadratne jednadžbe: x² − x = 6 ⇒ x² − x − 6 = 0."},
    {txt:"Rastavi na faktore: traži dva broja kojih je UMNOŽAK = −6 i ZBROJ = −1. To su −3 i 2 (jer −3·2 = −6 i −3+2 = −1). Stoga x² − x − 6 = (x − 3)(x + 2) = 0."},
    {txt:"Rješenja: x − 3 = 0 ili x + 2 = 0 ⇒ x = 3 ili x = −2 ⇒ x ∈ {−2, 3}",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: -2 i 3 ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima 2 rješenja (po osnovnom teoremu algebre, ako je D ≥ 0). Mogu se naći faktorizacijom ili kvadratnom formulom.",
    "Pravilo 2 (faktorizacija): x² + bx + c = (x + p)(x + q) gdje p + q = b i p · q = c. Najlakše kad su p, q cijeli brojevi.",
    "Intuicija: ako je (A)(B) = 0, tada A = 0 ili B = 0 (svojstvo nule).",
    "Česta greška: pri (x−3)(x+2) = 0 uzeti samo jedno rješenje (npr. samo x = 3) i propustiti drugo; ili krivo faktorizirati (npr. (x+3)(x−2) — krivi predznaci).",
    "Provjera ✓: x = 3: 3·2/(3·2) = 6/6 = 1 ✓. x = −2: (−2)·(−3)/(3·2) = 6/6 = 1 ✓"
  ,"Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:24.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Riješite nejednadžbu 7 − 5x > 35 − 3x.",
  sol:{ans:"x < -14",alt:["x<-14","(−∞, -14)"]},
  exp:"7 − 5x > 35 − 3x. -5x + 3x > 35 − 7. -2x > 28. x < -14 (dijeljenje negativnim brojem mijenja smjer).",
  steps:[
    {txt:"Premjesti x-članove na lijevo, brojeve na desno: 7 − 5x > 35 − 3x ⇒ −5x + 3x > 35 − 7 ⇒ −2x > 28."},
    {txt:"Dijeli obje strane s −2. KLJUČNO: dijeljenje (ili množenje) NEGATIVNIM brojem MIJENJA SMJER nejednakosti."},
    {txt:"x < 28/(−2) = −14 ⇒ x < −14 (interval ⟨−∞, −14⟩)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: x < -14 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (smjer nejednakosti): pri MNOŽENJU/DIJELJENJU s POZITIVNIM brojem, smjer se ČUVA; s NEGATIVNIM brojem, smjer se OBRĆE (> ↔ <, ≥ ↔ ≤).",
    "Intuicija: zamisli brojevni pravac. Ako je 'lijevi broj manji od desnog' i pomnožiš oba s −1, pozicije se ZAMIJENE: sada je 'novi lijevi' veći.",
    "Česta greška: zaboraviti obrnuti smjer pri dijeljenju s −2 → ostaviti x > −14 (suprotno).",
    "Provjera ✓: x = −15 (manji od −14): 7 − 5·(−15) = 82; 35 − 3·(−15) = 80. 82 > 80 ✓. x = 0 (veći od −14): 7 > 35? NE. Granica x = −14 ne ispunjava STROGU nejednakost."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:25.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = 10^(x/3). Koliko je f(6)?",
  sol:{ans:"100",alt:["100","10²"]},
  exp:"f(6) = 10^(⁶⁄₃) = 10² = 100.",
  steps:[
    {txt:"Uvrsti x = 6 u funkciju: f(6) = 10^(⁶⁄₃)."},
    {txt:"Pojednostavi eksponent: 6/3 = 2."},
    {txt:"Izračunaj: f(6) = 10² = 100 ⇒ 100",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: 100 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za eksponencijalnu funkciju f(x) = aˣ, jednostavno uvrsti vrijednost x.",
    "Intuicija: razlomak u eksponentu se prvo pojednostavi ako je moguće (6/3 = 2), tek onda potencija.",
    "Česta greška: krivo dijeljenje 6/3 (uzeti 6·3 = 18, ili 1/2 itd.); ili pomiješati 10² i 10·2.",
    "Provjera ✓: 10² = 100. Logaritamski: log₁₀(100) = 2 = 6/3 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:25.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Izračunajte x za koji vrijedi 100^(x-5) = 0,1⁴.",
  sol:{ans:"x = 3",alt:["3","x=3"]},
  exp:"100 = 10², pa 100^(x-5) = 10^(2(x-5)) = 10^(2x-10). 0,1⁴ = 10^(-4). Dakle 2x-10 = -4. 2x = 6. x = 3.",
  steps:[
    {txt:"Svedi obje strane na ISTU BAZU. Baza 10 je prirodna: 100 = 10² i 0,1 = 10⁻¹."},
    {txt:"Lijeva strana: 100^(x−5) = (10²)^(x−5) = 10^(2(x−5)) = 10^(2x−10)."},
    {txt:"Desna strana: 0,1⁴ = (10⁻¹)⁴ = 10⁻⁴."},
    {txt:"Izjednači eksponente (jer su baze iste): 2x − 10 = −4 ⇒ 2x = 6 ⇒ x = 3 ⇒ x = 3",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = 3 ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: jednadžba aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ (s istom bazom a > 0, a ≠ 1) ⟺ f(x) = g(x). Eksponencijalna funkcija je INJEKTIVNA.",
    "Intuicija: 'svedi na zajednički jezik' — kad obje strane koriste istu bazu, eksponenti se moraju podudarati.",
    "Česta greška: pri pretvorbi 100 = 10², zaboraviti dignuti CIJELI eksponent na 2 (uzeti 10^(x−5) umjesto 10^(2(x−5))).",
    "Provjera ✓: x = 3: 100^(3−5) = 100⁻² = 1/10 000 = 0,0001 = 0,1⁴ ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Gorivo se cisternama prevozi iz luke do skladišta. Ako pet cisterna provezu gorivo za 24 sata, koliko je sati potrebno da istu količinu goriva prevezu osam cisterna?",
  sol:{ans:"15 h",alt:["15","15 sati"]},
  exp:"Obrnuta proporcionalnost: 5 × 24 = 8 × t. t = 120/8 = 15 sati.",
  steps:[
    {txt:"Prepoznaj OBRNUTU PROPORCIONALNOST: više cisterni → MANJE vremena (umnožak ostaje konstantan). Suprotno od ravne proporcionalnosti."},
    {txt:"Postavi jednadžbu: (broj cisterni) · (vrijeme) = konstanta. 5 · 24 = 8 · t."},
    {txt:"Izračunaj: 120 = 8t ⇒ t = 120/8 = 15 sati ⇒ 15 h",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 15 h ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (obrnuta proporcionalnost): ako su a i b OBRNUTO proporcionalni, vrijedi a · b = konstanta. Povećanje a uzrokuje SUKLADNO smanjenje b.",
    "Intuicija: 'više radnika → manje vremena' (ako svi rade istom brzinom). 'Više cijevi → brže prazni bačvu'. Suprotno: 'više osoba → više hrane' (RAVNA proporcionalnost).",
    "Česta greška: pomiješati ravnu i obrnutu proporcionalnost. Ravna: a/b = konst. (omjer stalan). Obrnuta: a·b = konst. (umnožak stalan).",
    "Provjera ✓: 8 · 15 = 120 = 5 · 24 ✓ (umnožak isti)."
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:26.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Prazna cisterna kapaciteta 18 000 litara ima masu 5200 kilograma. Jedna litra dizel-goriva ima masu 0,85 kilograma. Kolika je ukupna masa cisterne pune dizel-goriva izražena u tonama?",
  sol:{ans:"20,5 t",alt:["20,5","20,5"]},
  exp:"Masa goriva: 18 000 × 0,85 = 15 300 kg. Ukupno: 5200 + 15 300 = 20 500 kg = 20,5 t.",
  steps:[
    {txt:"Izračunaj masu goriva: volumen × gustoća = 18 000 L · 0,85 kg/L = 15 300 kg."},
    {txt:"Ukupna masa = masa prazne cisterne + masa goriva = 5 200 kg + 15 300 kg = 20 500 kg."},
    {txt:"Pretvori u tone (1 t = 1 000 kg): 20 500 / 1 000 = 20,5 t ⇒ 20,5 t",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 20,5 t ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: masa = volumen · gustoća (m = V · ρ). Jedinice moraju biti konzistentne.",
    "Pravilo 2 (pretvorbe): 1 t = 1 000 kg = 10⁶ g. 1 L = 1 dm³ (zapremnina).",
    "Intuicija: dizel je 'lakši od vode' (gustoća 0,85 < 1 kg/L). Stoga 18 000 L dizela ima MANJU masu od 18 000 L vode (koja bi imala 18 000 kg = 18 t).",
    "Česta greška: pomnožiti masu cisterne (5 200 kg) s gustoćom (0,85) — krivo, jer gustoća se odnosi na gorivo, ne na cisternu; ili zaboraviti pretvoriti kg u tone.",
    "Provjera ✓: 20,5 t = 20 500 kg = 5 200 + 15 300 ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:27.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Na skici je prikazan trokut ABC i na stranici AB istaknuta je točka D tako da je |BC| = |CD|. Odredite mjeru kuta α toga trokuta.",
  intermediates:[132, 66, 48],
  sol:{ans:"α = 26°",alt:["26","26°","26 stupnjeva"]},
  exp:"U trokutu BCD: |BC|=|CD| → jednakokračan. Kutovi uz bazu: ∠DBC = ∠BDC. ∠BCD = 48° (iz slike). ∠DBC = (180°-48°)/2 = 66°. ∠ACD = 40°. ∠ACB = 40°+48° = 88°. U trokutu ABC: α + 66° + 88° = 180°. α = 26°."  ,
  steps:[
    {txt:"Identificiraj JEDNAKOKRAČAN trokut BCD: |BC| = |CD| (zadano). Stoga su kutovi UZ BAZU BD jednaki: ∠DBC = ∠BDC."},
    {txt:"Iz slike: ∠BCD = 48° (kut pri vrhu C u trokutu BCD). Kutovi uz bazu: ∠DBC = ∠BDC = (180° − 48°)/2 = 132°/2 = 66°."},
    {txt:"Drugi dio kuta C trokuta ABC: ∠ACD = 40° (iz slike). Ukupan kut ∠ACB = ∠ACD + ∠DCB = 40° + 48° = 88°."},
    {txt:"U trokutu ABC, zbroj kutova = 180°: α + ∠ABC + ∠ACB = 180° ⇒ α + 66° + 88° = 180° ⇒ α = 26° ⇒ α = 26°",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: α = 26° ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo 1 (zbroj kutova u trokutu): α + β + γ = 180° (uvijek).",
    "Pravilo 2 (jednakokračan trokut): ako su dvije stranice jednake, kutovi nasuprot tim stranicama su također jednaki (kutovi uz bazu).",
    "Intuicija: u zadatku se kombiniraju dvije konfiguracije (trokuti BCD i ABC). Pošto se ∠BCB pojavljuje u OBOJE, koristi ga kao 'most' između dvaju trokuta.",
    "Provjera ✓: α + 66° + 88° = 26 + 66 + 88 = 180° ✓"
  ,"Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:27.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 27 (2. dio od 2):",
  q:"Zadane su točke s koordinatama E(-5, 8) i F(3, -2). Izračunajte njihovu udaljenost.",
  sol:{ans:"√164 = 2√41",alt:["2√(41)","2√41","12,806","√164"]},
  exp:"|EF| = √((3−(-5))² + (-2-8)²) = √(64+100) = √164 = 2√41.",
  steps:[
    {txt:"Formula za udaljenost između dvije točke u ravnini: d(A, B) = √((x_B − x_A)² + (y_B − y_A)²)."},
    {txt:"Razlika koordinata: Δx = x_F − x_E = 3 − (−5) = 8; Δy = y_F − y_E = −2 − 8 = −10."},
    {txt:"|EF| = √(8² + (−10)²) = √(64 + 100) = √164."},
    {txt:"Pojednostavi: √164 = √(4 · 41) = 2√41 ≈ 12,81 ⇒ √164 = 2√41",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: u koord. sustavu rezultat očekivane veličine ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: √164 = 2√41 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: d(A, B) = √((Δx)² + (Δy)²) — slijedi iz Pitagorinog poučka primijenjenog na pravokutni trokut s katetama Δx i Δy.",
    "Pravilo 2 (pojednostavljenje korijena): √(a²·b) = a√b. Izvuci iz korijena najveći kvadratni faktor (ovdje 4 = 2²).",
    "Intuicija: udaljenost je 'duljina hipotenuze' pravokutnog trokuta čiji su katetama horizontalna i vertikalna razlika koordinata.",
    "Česta greška: zaboraviti kvadrirati razlike (uzeti |Δx| + |Δy| umjesto √(Δx² + Δy²)) — to bi bila MANHATTAN udaljenost, ne EUKLIDSKA; ili krivo upravljati predznakom Δy = −10 (rezultira isto jer se kvadrira).",
    "Provjera ✓: 2√41 ≈ 2·6,403 ≈ 12,806. (8² + 10²)^(¹⁄₂) = 164^(¹⁄₂) ≈ 12,806 ✓"
  ,"Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Na slici je kombinirani grafikon koji prikazuje srednju mjesečnu temperaturu mjerenu u °C i količinu padalina mjerenu u mm po mjesecima za neki grad u jednoj godini. U kojim je mjesecima srednja temperatura iznosila 15 °C?",
  sol:{ans:"svibanj i rujan",alt:["svibanj, rujan","sv i ru","5. i 9. mjesec"]},
  exp:"Očitamo s grafa: linija temperature presjeca 15 °C u svibnju i rujnu.",
  steps:[
    {txt:"Kombinirani grafikon ima dvije vrste podataka: STUPCI = padaline (mm), LINIJA = temperatura (°C). Treba samo LINIJA TEMPERATURE."},
    {txt:"Identificiraj vodoravnu razinu y = 15 °C na grafu. Provjeri u kojim mjesecima linija prolazi kroz tu razinu."},
    {txt:"Iz grafa: linija temperature presjeca 15 °C u dva mjeseca — SVIBANJ (rastući trend prema ljetu) i RUJAN (padajući trend nakon ljeta) ⇒ svibanj i rujan",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"},{txt:"Točan odgovor: svibanj i rujan ✓",note:"odgovor",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za očitavanje vrijednosti s grafa, identificiraj relevantnu KRIVULJU (temperatura ili padaline) pa nađi sjecišta s ciljanom horizontalnom razinom.",
    "Intuicija: temperatura kroz godinu ima 'zvonastu' krivulju (raste do ljeta, pada do zime), pa srednja vrijednost (npr. 15°C) se postiže DVA PUTA godišnje — jednom u proljeće, jednom u jesen.",
    "Česta greška: pomiješati stupce (padaline) i liniju (temperatura); ili dati samo jedan mjesec, zaboraviti da postoji simetrija proljeće/jesen.",
    "Provjera ✓: u svibnju i rujnu je T = 15°C — provjeri grafom da linija temperature presjeca 15°C točno dvaput godišnje."
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Na slici je kombinirani grafikon koji prikazuje srednju mjesečnu temperaturu mjerenu u °C i količinu padalina mjerenu u mm po mjesecima za neki grad u jednoj godini. Koliko je mjeseci srednja temperatura bila manja od 12 °C, a količina padalina veća od 50 mm?",
  sol:{ans:"5",alt:["5","pet","sij, velj, tra, stu, pro"]},
  exp:"Očitamo: T < 12°C i padaline > 50 mm: siječanj, veljača, travanj, studeni, prosinac = 5 mjeseci.",
  steps:[
    {txt:"Treba PRESJEK dvaju uvjeta: (i) T < 12°C, (ii) padaline > 50 mm. Tj. mjeseci u kojima OBA uvjeta vrijede istovremeno."},
    {txt:"Uvjet (i) T < 12°C (iz linije temperature): siječanj, veljača, ožujak, travanj, listopad, studeni, prosinac (7 mjeseci u 'hladnijem' dijelu godine)."},
    {txt:"Uvjet (ii) padaline > 50 mm (iz stupaca): siječanj, veljača, travanj, svibanj, lipanj, srpanj, kolovoz, rujan, studeni, prosinac (10 mjeseci)."},
    {txt:"PRESJEK: sij, velj, tra, stu, pro = 5 mjeseci ⇒ 5",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Točan odgovor: 5 ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za PRESJEK uvjeta — mjeseci u kojima vrijede svi uvjeti istovremeno. Razlikuj od UNIJE (gdje vrijedi bilo koji uvjet).",
    "Intuicija: označi mjesece iz svakog uvjeta na popisu; mjeseci koji su u OBA su rješenje. Vizualno: presjek dvaju skupova.",
    "Česta greška: dati UNIJU (svi mjeseci iz oba uvjeta = 12 ili tako) umjesto presjeka; ili krivi smjer nejednakosti (T > 12°C umjesto T < 12°C).",
    "Provjera ✓: 5 mjeseci (sij, velj, tra, stu, pro). Svi su u hladnijem dijelu godine s obilnim padalinama — geografski skladno (kontinentalna klima)."
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:28.3,img:true,type:"sa",img:true,topic:"geom",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Količina padalina jednaka je visini sloja vode koja tijekom razdoblja mjerenja napada u valjkastu posudu koja stoji na vodoravnome tlu i površina dna joj iznosi 1 m². Koristeći podatak iz grafikona izračunajte koliko je litara padalina palo na tlo površine 27,6 m² u mjesecu kolovozu. Napomena: 1 L = 1 dm³.",
  sol:{ans:"3864 L",alt:["3864","3864L","odgovor: 3864 L"]},
  exp:"Iz grafa: kolovoz ima oko 140 mm padalina. V = 0,140 m × 27,6 m² = 3,864 m³. 1 m³ = 1000 L. V = 3864 L.",
  steps:[
    {txt:"Očitaj s grafa količinu padalina za kolovoz: oko 140 mm = 0,14 m (visina sloja vode na tlu)."},
    {txt:"Volumen vode na površini = visina · površina: V = 0,14 m · 27,6 m² = 3,864 m³."},
    {txt:"Pretvori m³ u litre: 1 m³ = 1 000 dm³ = 1 000 L. Stoga 3,864 m³ = 3 864 L ⇒ 3 864 L",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.",final:true,note:"alt"},{txt:"Točan odgovor: 3864 L ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: 'količina padalina' u mm je VISINA sloja vode na vodoravnoj površini. Volumen = visina · površina.",
    "Pravilo 2 (pretvorbe): 1 m³ = 1 000 dm³ = 1 000 L = 10⁶ mL. 1 mm = 0,001 m.",
    "Intuicija: 140 mm padalina je 'okomito gledano' visina sloja vode. Pomnoženo s velikom površinom (27,6 m²) daje volumen — količinu vode.",
    "Česta greška: zaboraviti pretvoriti mm u m (uzeti 140 m visine umjesto 0,14 m) — rezultat 1000× prevelik; ili pomiješati m³ s L (pretvorba × 1000).",
    "Provjera ✓: 3 864 L = 3,864 m³ = 3 864 000 mL. Razuman volumen za jaku ljetnu kišu na manjoj površini (oko 28 m²) ✓"
  ,"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]}
];

export const qImages = {
  "2016_ljeto_B__11": () => e(Svg11_2016Blj, null),
  "2016_ljeto_B__12": () => e(Svg12_2016Blj, null),
  "2016_ljeto_B__15": () => e(Svg15_2016Blj, null),
  "2016_ljeto_B__16": () => e(Svg16_2016Blj, null),
  "2016_ljeto_B__23.1": () => e(Svg23_2016Blj, null),
  "2016_ljeto_B__27.1": () => e(Svg27_2016Blj, null),
  "2016_ljeto_B__28.1": () => e(Svg28_2016Blj, null),
  "2016_ljeto_B__28.2": () => e(Svg28_2016Blj, null),
  "2016_ljeto_B__28.3": () => e(Svg28_2016Blj, null),
};
