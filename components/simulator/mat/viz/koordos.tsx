// @ts-nocheck
'use client';
/* 5.3 "koordos": KoordOs je nedostajao u komponentnom engineu — GraphSVG ga je zvao,
   pa je iscrtavanje grafa padalo na ReferenceError. Tijelo je preuzeto bez promjene iz
   content/simulator/mat/exams (shared SVG: content/simulator/mat/mat-shared-svg.mjs),
   uz jedinu razliku da parseMath dolazi importom iz ../core/mathText. */
import React from 'react';
import { parseMath } from '../core/mathText';
const e = React.createElement;

function KoordOs({W=260,H=220,xMin=-4,xMax=4,yMin=-4,yMax=4,step=1,children,label=""}){
  const pad={l:32,r:16,t:16,b:label?12:32};  // smanji bottom pad ako label ide ispod SVG-a
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0), oy=toY(0);
  const AX="var(--muted)";        /* osi: prigušena siva */
  const ACC="var(--blue)";   /* labele: plavi accent */
  const TICK="var(--muted)";
  const TICKLBL="var(--muted)";
  const ticks=[];
  for(let x=Math.ceil(xMin);x<=Math.floor(xMax);x++){
    if(x===0) continue;
    ticks.push(e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:TICK,strokeWidth:1}),
      e("text",{x:toX(x),y:oy+14,textAnchor:"middle",fontSize:9,fill:TICKLBL},x)
    ));
  }
  for(let y=Math.ceil(yMin);y<=Math.floor(yMax);y++){
    if(y===0) continue;
    ticks.push(e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:TICK,strokeWidth:1}),
      e("text",{x:ox-8,y:toY(y)+4,textAnchor:"end",fontSize:9,fill:TICKLBL},y)
    ));
  }
  /* SVG H se prilagodi: ako je label, smanji visinu SVG-a (label ide u HTML caption ispod) */
  const svgH = label ? H - 18 : H;
  const svgEl = e("svg",{viewBox:`0 0 ${W} ${svgH}`,style:{width:"100%",maxWidth:W,display:"block",overflow:"visible"}},
    /* grid */
    ...Array.from({length:Math.floor(xMax)-Math.ceil(xMin)+1},(_,i)=>{const x=Math.ceil(xMin)+i;return e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"rgba(148,163,184,0.08)",strokeWidth:.5})}),
    ...Array.from({length:Math.floor(yMax)-Math.ceil(yMin)+1},(_,i)=>{const y=Math.ceil(yMin)+i;return e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"rgba(148,163,184,0.08)",strokeWidth:.5})}),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:AX,strokeWidth:1.4,opacity:.85}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:AX,strokeWidth:1.4,opacity:.85}),
    /* strelice */
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:AX,opacity:.85}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:AX,opacity:.85}),
    /* labele osi */
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:11,fontWeight:600,fill:ACC},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:11,fontWeight:600,fill:ACC},"y"),
    e("text",{x:ox-10,y:oy+14,fontSize:9,fill:TICKLBL},"0"),
    ...ticks,
    /* djeca (pravci, parabole itd.) */
    e("g",{transform:`translate(0,0)`,...{}},
      typeof children === "function" ? children(toX,toY,pad,iW,iH) : children
    )
  );
  /* Bug 35 fix: ako label, wrap u div + render label preko parseMath (razlomci, eksponenti, korijeni, indeksi, vektori) */
  if(!label) return svgEl;
  return e("div",{style:{display:"block",maxWidth:W,margin:"0 auto"}},
    svgEl,
    e("div",{style:{textAlign:"center",fontSize:"11px",color:"var(--muted)",marginTop:2,lineHeight:1.35,padding:"0 4px"}},
      parseMath(label) || label
    )
  );
}
export { KoordOs };
