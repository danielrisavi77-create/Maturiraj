// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Zaostali pomocnici iz monolita koje nakon 5.1-5.3 vise nitko ne poziva: SVG mreze
   pojedinih zadataka i tanki omotaci nrm/numEq oko lib/mat-grading.ts. Cuvamo ih
   doslovno (nijedan modul ih ne uvozi) da se pri razbijanju monolita nista ne izgubi. */
import React from 'react';
import { normalizeAnswer, numEquals } from "@/lib/mat-grading";
const{createElement:e}=React;
function _G12j(id,W,H,cx,cy,sc){
  return (children)=>e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#mb"+id+")"}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+3,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx-10,y:cy+10,fontSize:8,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+10,fontSize:8,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:8,fill:"var(--text)"},"1"),
    ...children
  );
}
function _G10(id,W,H,cx,cy,sc){
  return (children)=>e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#mb"+id+")"}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+3,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx-10,y:cy+10,fontSize:8,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+10,fontSize:8,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:8,fill:"var(--text)"},"1"),
    ...children
  );
}
function _G13(id,W,H,cx,cy,sc,children){
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",
      border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",
          stroke:"var(--bdr)",strokeWidth:0.7,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},
        e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})
      ),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},
        e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"})
      )
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#mb"+id+")"}),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:cx-10,y:cy+11,fontSize:9,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+11,fontSize:9,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:9,fill:"var(--text)"},"1"),
    ...children
  );
}
let _s13k=0;
function _makeSustav13Graf(key, sOpts){
  const W=160,H=145,cx=75,cy=75,sc=22;
  // Koristimo globalni counter za jedinstvene key-eve svaki render
  const uid=()=>"k"+(++_s13k);
  const gridEls=[];
  for(let i=-3;i<=3;i++){
    gridEls.push(e("line",{key:uid(),x1:cx+i*sc,y1:5,x2:cx+i*sc,y2:H-5,stroke:"#1e2130",strokeWidth:0.8}));
    gridEls.push(e("line",{key:uid(),x1:5,y1:cy-i*sc,x2:W-5,y2:cy-i*sc,stroke:"#1e2130",strokeWidth:0.8}));
  }
  const sx=sOpts.sx, sy_=sOpts.sy;
  const sLabel=sOpts.showS!==false;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",display:"block",background:"var(--s2)",borderRadius:6,border:"1px solid var(--bdr)"}},
    ...gridEls,
    e("line",{key:uid(),x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--muted)",strokeWidth:1.2}),
    e("line",{key:uid(),x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--muted)",strokeWidth:1.2}),
    e("polygon",{key:uid(),points:`${W-5},${cy} ${W-13},${cy-3} ${W-13},${cy+3}`,fill:"var(--muted)"}),
    e("polygon",{key:uid(),points:`${cx},5 ${cx-3},13 ${cx+3},13`,fill:"var(--muted)"}),
    e("text",{key:uid(),x:W-4,y:cy+4,fill:"var(--muted)",fontSize:9,fontStyle:"italic"},"x"),
    e("text",{key:uid(),x:cx+3,y:7,fill:"var(--muted)",fontSize:9,fontStyle:"italic"},"y"),
    e("text",{key:uid(),x:cx+2,y:cy+10,fill:"var(--muted)",fontSize:8},"0"),
    e("text",{key:uid(),x:cx+sc-3,y:cy+10,fill:"var(--muted)",fontSize:8},"1"),
    e("text",{key:uid(),x:cx-12,y:cy-sc+4,fill:"var(--muted)",fontSize:8},"1"),
    ...sOpts.lines.map(l=>
      e("line",{key:uid(),x1:cx+l.x1*sc,y1:cy-l.y1*sc,x2:cx+l.x2*sc,y2:cy-l.y2*sc,
        stroke:l.color||"#4a90d9",strokeWidth:2})
    ),
    sLabel&&e("circle",{key:uid(),cx:cx+sx*sc,cy:cy-sy_*sc,r:4,fill:"#e8c547"}),
    sLabel&&e("text",{key:uid(),x:cx+sx*sc+4,y:cy-sy_*sc-3,fill:"#e8c547",fontSize:9},"S"),
  );
}
let _s15jk=0;
const _uid15j=()=>"j"+(++_s15jk);
let _s15jak=0;
const _uid15ja=()=>"ja"+(++_s15jak);
function _svg19a_2011LjetoA(showF){
  // Q19a: vektori AB, CD i točka E na koord. mreži.
  // A(1,-2), B(4,-1) => AB=(3,1)
  // C(-1,-1), D(-2,1) => CD=(-1,2)
  // E(2,-1)
  // F = E + AB + CD = (2,-1)+(3,1)+(-1,2) = (4,2)
  const W=320,H=240,pad={l:16,r:16,t:14,b:14};
  const xMin=-4,xMax=6,yMin=-3,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)";
  const C="#4a90d9",ACC="#e05252";
  // Grid
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:bdr,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:bdr,strokeWidth:0.4,strokeDasharray:"2,3"}));
  function arrow(p1,p2,col,key){
    // strelica od p1 do p2
    const x1=toX(p1[0]),y1=toY(p1[1]),x2=toX(p2[0]),y2=toY(p2[1]);
    const dx=x2-x1,dy=y2-y1,len=Math.sqrt(dx*dx+dy*dy);
    const ux=dx/len,uy=dy/len;
    // pull back endpoint malo da strelica ne završi u sredinu krugu točke
    const ex=x2-ux*2,ey=y2-uy*2;
    const ahx=ex-ux*7,ahy=ey-uy*7;
    const px=-uy*3.5,py=ux*3.5;
    return e("g",{key:key},
      e("line",{x1:x1,y1:y1,x2:ahx,y2:ahy,stroke:col,strokeWidth:1.7}),
      e("polygon",{points:ex+","+ey+" "+(ahx+px)+","+(ahy+py)+" "+(ahx-px)+","+(ahy-py),fill:col})
    );
  }
  function pt(x,y,lbl,offX,offY,col){
    return e("g",{key:"p_"+lbl},
      e("circle",{cx:toX(x),cy:toY(y),r:2.2,fill:"#fff",stroke:col||t,strokeWidth:1.1}),
      e("text",{x:toX(x)+(offX||4),y:toY(y)+(offY||-4),fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},lbl)
    );
  }
  const els=[
    ...grid,
    // Osi (subtle)
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:mu,strokeWidth:0.7}),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:mu,strokeWidth:0.7}),
    // Vektori AB i CD
    arrow([1,-2],[4,-1],C,"AB"),
    arrow([-1,-1],[-2,1],C,"CD"),
    // Točke A, B, C, D, E
    pt(1,-2,"A",-3,12),
    pt(4,-1,"B",4,-3),
    pt(-1,-1,"C",-12,-2),
    pt(-2,1,"D",-10,-4),
    pt(2,-1,"E",4,-3)
  ];
  if(showF){
    // dodatna strelica EF
    els.push(arrow([2,-1],[4,2],ACC,"EF"));
    els.push(pt(4,2,"F",4,-3,ACC));
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},...els);
}
function _svg29e_2011LjetoA(showCurve){
  // Q29.5: graf f(x)=x³−3x²
  // Nultočke (0,0), (3,0); max (0,0); min (2,−4); T(1,−2)
  const W=300,H=300,pad={l:24,r:14,t:14,b:24};
  const xMin=-2,xMax=4,yMin=-5,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:bdr,strokeWidth:0.5,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:bdr,strokeWidth:0.5,strokeDasharray:"2,3"}));
  // Tickovi na cijelim brojima x ≠ 0 i y ≠ 0 (radi orijentacije, ne samo 0 i 1)
  for(let i=xMin;i<=xMax;i++){if(i!==0&&i!==1)grid.push(e("line",{key:"tx"+i,x1:toX(i),y1:oy-2,x2:toX(i),y2:oy+2,stroke:t,strokeWidth:0.8}));}
  for(let i=yMin;i<=yMax;i++){if(i!==0&&i!==1)grid.push(e("line",{key:"ty"+i,x1:ox-2,y1:toY(i),x2:ox+2,y2:toY(i),stroke:t,strokeWidth:0.8}));}
  const els=[
    ...grid,
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.2}),
    e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-5)+","+(oy-2.5)+" "+(pad.l+iW-5)+","+(oy+2.5),fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.2}),
    e("polygon",{points:ox+","+pad.t+" "+(ox-2.5)+","+(pad.t+5)+" "+(ox+2.5)+","+(pad.t+5),fill:t}),
    // Tick 0 i 1
    e("text",{x:ox-7,y:oy+11,fontSize:9,fill:t},"0"),
    e("text",{x:toX(1)-3,y:oy+11,fontSize:9,fill:t},"1"),
    e("text",{x:ox-12,y:toY(1)+3,fontSize:9,fill:t},"1"),
    e("text",{x:pad.l+iW-4,y:oy-3,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+8,fontSize:10,fill:t,fontStyle:"italic"},"y")
  ];
  if(showCurve){
    // Krivulja x³−3x²
    const pts=[];
    for(let x=xMin;x<=xMax;x+=0.04){
      const y=x*x*x-3*x*x;
      if(y>=yMin-0.1&&y<=yMax+0.1)
        pts.push(toX(x).toFixed(1)+","+toY(Math.max(yMin,Math.min(yMax,y))).toFixed(1));
    }
    els.push(e("polyline",{key:"curve",points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:1.8}));
    // Key points
    const keyPts=[
      {x:0,y:0,lbl:"max",col:"var(--blue)",offX:6,offY:-6},
      {x:3,y:0,lbl:"3",col:"var(--green)",offX:4,offY:-6},
      {x:1,y:-2,lbl:"T(1, −2)",col:"var(--gold)",offX:6,offY:4},
      {x:2,y:-4,lbl:"min",col:"var(--red)",offX:6,offY:6}
    ];
    keyPts.forEach((p,i)=>{
      els.push(e("circle",{key:"kp_c"+i,cx:toX(p.x),cy:toY(p.y),r:3.2,fill:p.col,stroke:"var(--bg)",strokeWidth:1.2}));
      els.push(e("text",{key:"kp_t"+i,x:toX(p.x)+p.offX,y:toY(p.y)+p.offY,fontSize:9,fill:t,fontWeight:"600"},p.lbl));
    });
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},...els);
}
// 5.2: QS_*_META audit bilješke (70 konstanti) maknute iz klijentskog bundlea — žive u content/simulator/mat/audit/.
// 3.2: nrm/numEq/chk su samo tanki omotaci oko lib/mat-grading.ts.
function nrm(s){return normalizeAnswer(s);}
function numEq(a,b){return numEquals(a,b);}
export { _G12j, _G10, _G13, _s13k, _makeSustav13Graf, _s15jk, _uid15j, _s15jak, _uid15ja, _svg19a_2011LjetoA, _svg29e_2011LjetoA, nrm, numEq };
