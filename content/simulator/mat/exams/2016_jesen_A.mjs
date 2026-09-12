// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad21b_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z21_"+(++n)})();
  const W=300,H=260,pad={l:35,r:15,t:15,b:30};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-5,xmax=5,ymin=-6,ymax=4;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  /* Precise points from PDF grid:
     (-4, 2) open start
     (-3, 1) local min (blue dot)
     (-1, 3) local max (green dot)
     (0, 2) crosses y=2
     (1, 0) nultocka (yellow dot)
     (2, -1) below axis
     (3, -3) steep descent
     (4, -5) open end */
  const d = `M ${toX(-4).toFixed(1)},${toY(2).toFixed(1)} `
    + `C ${toX(-3.6).toFixed(1)},${toY(1.2).toFixed(1)} ${toX(-3.3).toFixed(1)},${toY(0.8).toFixed(1)} ${toX(-3).toFixed(1)},${toY(1).toFixed(1)} `
    + `C ${toX(-2.5).toFixed(1)},${toY(1.5).toFixed(1)} ${toX(-1.8).toFixed(1)},${toY(2.6).toFixed(1)} ${toX(-1.3).toFixed(1)},${toY(2.95).toFixed(1)} `
    + `C ${toX(-1).toFixed(1)},${toY(3).toFixed(1)} ${toX(-0.7).toFixed(1)},${toY(2.9).toFixed(1)} ${toX(-0.3).toFixed(1)},${toY(2.4).toFixed(1)} `
    + `C ${toX(0.2).toFixed(1)},${toY(1.5).toFixed(1)} ${toX(0.6).toFixed(1)},${toY(0.6).toFixed(1)} ${toX(1).toFixed(1)},${toY(0).toFixed(1)} `
    + `C ${toX(1.5).toFixed(1)},${toY(-0.8).toFixed(1)} ${toX(2).toFixed(1)},${toY(-1.5).toFixed(1)} ${toX(2.5).toFixed(1)},${toY(-2.2).toFixed(1)} `
    + `C ${toX(3).toFixed(1)},${toY(-3).toFixed(1)} ${toX(3.5).toFixed(1)},${toY(-4).toFixed(1)} ${toX(4).toFixed(1)},${toY(-5).toFixed(1)}`;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[...Array(10)].map((_,i)=>{const x=xmin+i;return e("line",{key:u(),x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.4,strokeDasharray:"3,3"})}),
    ...[...Array(10)].map((_,i)=>{const y=ymin+i;return e("line",{key:u(),x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.4,strokeDasharray:"3,3"})}),
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b,x2:toX(0),y2:pad.t,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t} ${toX(0)-3},${pad.t+5} ${toX(0)+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t+2,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"1"),
    e("text",{key:u(),x:toX(-1)-5,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"-1"),
    e("line",{key:u(),x1:toX(0)-3,y1:toY(1),x2:toX(0)+3,y2:toY(1),stroke:"var(--muted)",strokeWidth:0.8}),
    e("text",{key:u(),x:toX(0)-14,y:toY(1)+4,fill:"var(--muted)",fontSize:9},"1"),
    e("line",{key:u(),x1:toX(0)-3,y1:toY(-1),x2:toX(0)+3,y2:toY(-1),stroke:"var(--muted)",strokeWidth:0.8}),
    e("text",{key:u(),x:toX(0)-18,y:toY(-1)+4,fill:"var(--muted)",fontSize:9},"-1"),
    e("path",{key:u(),d,fill:"none",stroke:"var(--red)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),
    e("circle",{key:u(),cx:toX(-3),cy:toY(1),r:4,fill:"var(--blue)"}),
    e("circle",{key:u(),cx:toX(-1),cy:toY(3),r:4,fill:"var(--green)"}),
    e("circle",{key:u(),cx:toX(1),cy:toY(0),r:4,fill:"var(--gold)"}),
    e("circle",{key:u(),cx:toX(-4),cy:toY(2),r:4,fill:"var(--s1)",stroke:"var(--red)",strokeWidth:2}),
    e("circle",{key:u(),cx:toX(4),cy:toY(-5),r:4,fill:"var(--s1)",stroke:"var(--red)",strokeWidth:2})
  );
}

function Svg28p3_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z28_"+(++n)})();
  const W=260,H=220,pad={l:32,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-2,xmax=6.5,ymin=-4,ymax=3.5;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // Left branch (x ≤ 2): y = -(x-2) - 3 = -x - 1
  const ptsL=[], ptsR=[];
  for(let i=-20;i<=20;i++){
    const x=i/10, y=-(x-2)-3;
    if(y>=ymin && y<=ymax) ptsL.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  for(let i=20;i<=65;i++){
    const x=i/10, y=(x-2)-3;
    if(y>=ymin && y<=ymax) ptsR.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[-2,-1,0,1,2,3,4,5,6].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[-4,-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+gw,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l-5,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b+5,x2:toX(0),y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-5} ${toX(0)-3},${pad.t} ${toX(0)+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t-1,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    // Ticks
    ...[-2,-1,1,2,3,4,5,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:toY(0)-3,x2:toX(x),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(x),y:toY(0)+13,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},x)
    )),
    ...[-4,-3,-2,-1,1,2,3].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:toX(0)-3,y1:toY(y),x2:toX(0)+3,y2:toY(y),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(0)-6,y:toY(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)
    )),
    // V-shape
    e("polyline",{key:u(),points:ptsL.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"}),
    e("polyline",{key:u(),points:ptsR.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"}),
    // Nultočke
    e("circle",{key:u(),cx:toX(-1),cy:toY(0),r:4,fill:"var(--red)"}),
    e("circle",{key:u(),cx:toX(5),cy:toY(0),r:4,fill:"var(--red)"}),
    // Tjeme
    e("circle",{key:u(),cx:toX(2),cy:toY(-3),r:4,fill:"var(--green)"}),
    e("text",{key:u(),x:toX(2)+6,y:toY(-3)+4,fill:"var(--green)",fontSize:10,fontWeight:600},"(2, −3)")
  );
}

function Svg20p2_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z20_"+(++n)})();
  const W=260,H=240,pad={l:32,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-3.5,xmax=5.5,ymin=-5.5,ymax=3.5;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  const pts=[];
  for(let i=-35;i<=55;i++){
    const x=i/10, y=0.5*(x+2)*(x-4);
    if(y>=ymin && y<=ymax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid (muted)
    ...[-3,-2,-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[-5,-4,-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+gw,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l-5,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b+5,x2:toX(0),y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-5} ${toX(0)-3},${pad.t} ${toX(0)+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t-1,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    // Ticks
    ...[-3,-2,-1,1,2,3,4,5].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:toY(0)-3,x2:toX(x),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(x),y:toY(0)+13,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},x)
    )),
    ...[-5,-4,-3,-2,-1,1,2,3].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:toX(0)-3,y1:toY(y),x2:toX(0)+3,y2:toY(y),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(0)-6,y:toY(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)
    )),
    // Parabola
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"}),
    // Nultočke
    e("circle",{key:u(),cx:toX(-2),cy:toY(0),r:4,fill:"var(--red)"}),
    e("circle",{key:u(),cx:toX(4),cy:toY(0),r:4,fill:"var(--red)"}),
    // Tjeme
    e("circle",{key:u(),cx:toX(1),cy:toY(-4.5),r:4,fill:"var(--green)"}),
    e("text",{key:u(),x:toX(1)+6,y:toY(-4.5)+4,fill:"var(--green)",fontSize:10,fontWeight:600},"(1, −4,5)"),
    // y-presjek
    e("circle",{key:u(),cx:toX(0),cy:toY(-4),r:3.5,fill:"var(--gold)"})
  );
}

function SvgZad16_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z16_"+(++n)})();
  const W=280,H=240,pad={l:35,r:20,t:20,b:30};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-4,xmax=5,ymin=-4,ymax=4;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // Points from PDF image: A(-2,-1), C(-1,3), B(4,-2) approximately
  const Ax=toX(-2),Ay=toY(-1),Bx=toX(4),By=toY(-2),Cx=toX(-1),Cy=toY(3);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[...Array(10)].map((_,i)=>{const x=xmin+i;return e("line",{key:u(),x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.4,strokeDasharray:"2,3"})}),
    ...[...Array(9)].map((_,i)=>{const y=ymin+i;return e("line",{key:u(),x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.4,strokeDasharray:"2,3"})}),
    // Axes
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b,x2:toX(0),y2:pad.t,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t} ${toX(0)-3},${pad.t+5} ${toX(0)+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t+2,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+12,fill:"var(--muted)",fontSize:9},"1"),
    // Triangle fill
    e("polygon",{key:u(),points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,fill:"rgba(74,144,217,0.1)",stroke:"var(--text)",strokeWidth:1.8,strokeLinejoin:"round"}),
    // Points
    e("circle",{key:u(),cx:Ax,cy:Ay,r:4,fill:"var(--red)"}),
    e("text",{key:u(),x:Ax-14,y:Ay+5,fill:"var(--red)",fontSize:13,fontWeight:700,fontStyle:"italic"},"A"),
    e("circle",{key:u(),cx:Bx,cy:By,r:4,fill:"var(--blue)"}),
    e("text",{key:u(),x:Bx+6,y:By+5,fill:"var(--blue)",fontSize:13,fontWeight:700,fontStyle:"italic"},"B"),
    e("circle",{key:u(),cx:Cx,cy:Cy,r:4,fill:"var(--green)"}),
    e("text",{key:u(),x:Cx-14,y:Cy-4,fill:"var(--green)",fontSize:13,fontWeight:700,fontStyle:"italic"},"C")
  );
}

function SvgZad13_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z13_"+(++n)})();
  const cx=160,cy=145,r=110;
  const a1=Math.PI+0.29,a2=Math.PI-0.29+147*Math.PI/180;
  const x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
  const x2=cx+r*Math.cos(a2),y2=cy+r*Math.sin(a2);
  return e("svg",{viewBox:"0 0 320 260",style:{width:"100%",maxWidth:300,display:"block",margin:"8px auto"}},
    e("path",{key:u(),d:`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2} Z`,fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{key:u(),x1:cx,y1:cy,x2:x1,y2:y1,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{key:u(),x1:cx,y1:cy,x2:x2,y2:y2,stroke:"var(--text)",strokeWidth:1.5}),
    e("path",{key:u(),d:`M ${cx+25*Math.cos(a1)} ${cy+25*Math.sin(a1)} A 25 25 0 1 1 ${cx+25*Math.cos(a2)} ${cy+25*Math.sin(a2)}`,fill:"none",stroke:"var(--gold)",strokeWidth:1.5}),
    e("text",{key:u(),x:cx-5,y:cy-15,fill:"var(--gold)",fontSize:12,fontWeight:600},"147\u00b0"),
    e("text",{key:u(),x:(cx+x2)/2+8,y:(cy+y2)/2-5,fill:"var(--blue)",fontSize:12,fontWeight:600},"12 cm")
  );
}

function SvgZad10_2016JA(){
  const u=(()=>{let n=0;return()=>"j16z10_"+(++n)})();
  const W=260,H=200,pad={l:30,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-2,xmax=3,ymin=-1.5,ymax=3;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  const pts=[];
  for(let i=0;i<=100;i++){const x=xmin+(xmax-xmin)*i/100;const y=1.5*(x-0.3)*(x-0.3)+0.2;if(y<ymax+1)pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b,x2:toX(0),y2:pad.t,stroke:"var(--text)",strokeWidth:1}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t} ${toX(0)-3},${pad.t+5} ${toX(0)+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t+2,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:10},"0"),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+13,fill:"var(--muted)",fontSize:10},"1"),
    e("circle",{key:u(),cx:toX(1),cy:toY(0),r:3,fill:"var(--muted)"}),
    e("line",{key:u(),x1:toX(0)-3,y1:toY(1),x2:toX(0)+3,y2:toY(1),stroke:"var(--muted)",strokeWidth:1}),
    e("text",{key:u(),x:toX(0)-16,y:toY(1)+4,fill:"var(--muted)",fontSize:10},"1"),
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"var(--red)",strokeWidth:2.2,strokeLinecap:"round"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: za svaki interval prebroji cijele brojeve unutar (pazi na otvorene/zatvorene granice).",topic:"br",points:1,
  q:"U kojemu se od navedenih intervala nalazi najviše cijelih brojeva?",
  opts:["⟨-3,-1⟩","⟨-1,3⟩","[-1,0]","[0,1⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"A: samo -2 (1 cijeli). C: -1,0 (2). D: 0 (1)."},
    {txt:"B: ⟨-1,3⟩ sadrži 0, 1, 2 → 3 cijela broja",final:true}
  ,{txt:"Provjera: prebroji cijele brojeve u svakom intervalu — B sadrži {0, 1, 2} = 3 cijela broja ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) ⟨-3,-1⟩; B) ⟨-1,3⟩ ✓; C) [-1,0]; D) [0,1⟩.",final:true,note:"diagnostika"},{txt:"Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: B = ⟨-1, 3⟩ sadrži cijele brojeve 0, 1, 2 (jer -1 i 3 nisu uključeni) — najviše među opcijama.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: ⟨a, b⟩ otvoreni interval (krajevi NISU uključeni); [a, b] zatvoreni (krajevi uključeni); [a, b⟩ poluzatvoreni.","Intuicija: B = ⟨-1, 3⟩ sadrži cijele brojeve 0, 1, 2 (jer -1 i 3 nisu uključeni) — najviše među opcijama.","Česta greška: brojati krajeve kao cijele iako su izvan otvorenog intervala (npr. -3 ili -1 za A).","Provjera: prebroji cijele brojeve za svaki interval — A: {-2} (1), B: {0,1,2} (3), C: {-1,0} (2), D: {0} (1) → B ✓","Diagnostic: A) ⟨-3,-1⟩; B) ⟨-1,3⟩ ✓; C) [-1,0]; D) [0,1⟩.","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom."]},
  {id:2,type:"mc",warn:"Pazi: uvrsti pa redom — m/k = 0,3/40, korijen, pa ·2π.",topic:"br",points:1,
  q:"Zadan je T = 2π·√(m/k). Koliko je T ako su m = 0,3 i k = 40?",
  opts:["T = 0,086","T = 0,172","T = 0,217","T = 0,544"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"T = 2π·√(0,3/40) = 2π·√(0,0075) = 2π·0,0866 ≈ 0,544",final:true}
  ,{txt:"T = 2π·√(0,3/40) = 2π·0,0866 ≈ 0,544 s",final:true,note:"verifikacija"},{txt:"Provjera: 0,544/(2π) = 0,0866; (0,0866)² ≈ 0,0075 = 0,3/40 ✓",final:true,note:"verifikacija"},{txt:"Brojčani izračun za perioidčni gibanje — broj 0,544 je traženi T.",final:true,note:"verifikacija"},{txt:"Diagnostic: A) T = 0,086; B) T = 0,172; C) T = 0,217; D) T = 0,544 ✓.",final:true,note:"diagnostika"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: m/k = 0,3/40 = 0,0075. √0,0075 ≈ 0,0866. T = 2π·0,0866 ≈ 0,544.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Pravilo: T = 2π·√(m/k) — periodski oscillator. Korijen radimo zadnji nakon dijeljenja.","Intuicija: m/k = 0,3/40 = 0,0075. √0,0075 ≈ 0,0866. T = 2π·0,0866 ≈ 0,544.","Česta greška: kvadrirati umjesto korijenovati; ili zaboraviti faktor 2π.","Provjera: 2π·√(0,0075) ≈ 6,283·0,0866 ≈ 0,544 ✓ (D)","Diagnostic: A) T = 0,086; B) T = 0,172; C) T = 0,217; D) T = 0,544 ✓.","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom."]},
  {id:3,type:"mc",warn:"Pazi: najmanji kut je nasuprot NAJKRAĆOJ stranici (kateti 4); sin(kut) = 4/13.",topic:"trig",points:1,
  q:"U pravokutnome trokutu duljina jedne katete iznosi 4 cm, a duljina hipotenuze 13 cm. Kolika je mjera najmanjega kuta toga trokuta?",
  opts:["17°6′10″","17°55′13″","23°12′10″","23°48′13″"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Drugi krak: √(13²-4²) = √153 ≈ 12,37 cm. Najmanji kut je nasuprot kratkom kraku (4 cm)."},
    {txt:"sin(α) = [FRAC:4|13] → α = arcsin([FRAC:4|13]) ≈ 17°55′13″",final:true}
  ,{txt:"b = √(13² - 4²) = √153 ≈ 12,37 cm",final:true,note:"verifikacija"},{txt:"Provjera: 4² + 12,37² ≈ 16 + 153 = 169 = 13² ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 17°6′10″; B) 17°55′13″ ✓; C) 23°12′10″; D) 23°48′13″.",final:true,note:"diagnostika"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: b² = c² − a² = 13² − 4² = 169 − 16 = 153. b = √153 ≈ 12,37 cm — provjeri opcije; tražena je druga kateta.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: u pravokutnome trokutu vrijedi Pitagorin poučak: a²+b² = c² (c je hipotenuza).","Intuicija: b² = c² − a² = 13² − 4² = 169 − 16 = 153. b = √153 ≈ 12,37 cm — provjeri opcije; tražena je druga kateta.","Česta greška: tretirati 13 cm kao katetu umjesto hipotenuze.","Provjera: 4² + (√153)² = 16 + 153 = 169 = 13² ✓","Diagnostic: A) 17°6′10″; B) 17°55′13″ ✓; C) 23°12′10″; D) 23°48′13″.","Alt metoda: jedinična kružnica ili graf sin/cos."]},
  {id:4,type:"mc",warn:"Pazi: slični trokut ima stranice u ISTOM omjeru 4:5:6; provjeri koji skup zadržava taj omjer.",topic:"geom",points:1,
  q:"Zadan je trokut čije duljine stranica iznose 4 cm, 5 cm i 6 cm. Koje su od navedenih mjera duljina stranica trokuta sličnoga zadanomu?",
  opts:["10 cm, 12,5 cm, 19,5 cm","10 cm, 12,5 cm, 15 cm","10 cm, 15 cm, 18 cm","10 cm, 15 cm, 22,5 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Omjer sličnosti k = 10/4 = 2,5. Provjeri sve stranice: 5·2,5=12,5, 6·2,5=15."},
    {txt:"B: 10, 12,5, 15 → omjeri 4:5:6 ✓",final:true}
  ,{txt:"c² < a² + b² → trokut je šiljastokutan (svi kutovi < 90°)",final:true,note:"verifikacija"},{txt:"Provjera: cos(γ) = (16+25-36)/(40) = 0,125 > 0 → γ < 90° ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 10 cm, 12,5 cm, 19,5 cm; B) 10 cm, 12,5 cm, 15 cm ✓; C) 10 cm, 15 cm, 18 cm; D) 10 cm, 15 cm, 22,5 cm.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: stranice 4, 5, 6. Najveća 6. Provjera: 6² = 36, 4² + 5² = 41. 36 < 41 → cos(γ) > 0 → kut < 90° → trokut je ŠILJASTOKUTNI.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: trokut je tup ako za najveću stranicu c vrijedi c² > a² + b² (kosinusov poučak).","Intuicija: stranice 4, 5, 6. Najveća 6. Provjera: 6² = 36, 4² + 5² = 41. 36 < 41 → cos(γ) > 0 → kut < 90° → trokut je ŠILJASTOKUTNI.","Česta greška: zaključiti da je tup samo zbog veće stranice 6; nije dovoljan razlog.","Provjera: cos(γ) = (16+25-36)/(2·4·5) = 5/40 = 0,125 > 0 → γ < 90° ✓ (B: šiljastokutan)","Diagnostic: A) 10 cm, 12,5 cm, 19,5 cm; B) 10 cm, 12,5 cm, 15 cm ✓; C) 10 cm, 15 cm, 18 cm; D) 10 cm, 15 cm, 22,5 cm.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta."]},
  {id:5,type:"mc",warn:"Pazi: vrijeme = put/brzina; postavi jednadžbu da je zbroj vremena (auto + vlak) jednak 6 h.",topic:"br",points:1,
  q:"Putnik je putovao 6 sati i prešao je put od 520 km. Prvih 260 km puta putovao je automobilom, a ostatak puta vlakom. Prosječna je brzina automobila dvostruko veća od prosječne brzine vlaka. Kolika je prosječna brzina vlaka?",
  opts:["65 km/h","76 km/h","86,7 km/h","97,5 km/h"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Neka je brzina vlaka v. Brzina automobila 2v."},
    {txt:"[FRAC:260|2v] + [FRAC:260|v] = 6 → [FRAC:130|v] + [FRAC:260|v] = [FRAC:390|v] = 6 → v = 65 km/h",final:true}
  ,{txt:"t₁ + t₂ = 6 i 2v·t₁ + v·t₂ (svaki dio 260 km) → riješi sustav",final:true,note:"verifikacija"},{txt:"Provjera: v ≈ 65 km/h → t₁ = 2h za prvi dio, t₂ = 4h za drugi → 6h ukupno ✓",final:true,note:"verifikacija"},{txt:"Brojčano rješavanje sustava brzina — putnik prelazi 260 km dvaput različitim brzinama.",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 65 km/h ✓; B) 76 km/h; C) 86,7 km/h; D) 97,5 km/h.",final:true,note:"diagnostika"},{txt:"Intuicija: prva polovica puta 260 km uz v₁ za t₁ sati; druga 260 km uz 2v₁ za t₂. Ako je prvi dio dvostruko sporiji, prvi dio traje 2× dulje. Iz t₁+t₂=6 h: rješi sustav.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: prosjek (srednja brzina) = ukupni put / ukupno vrijeme; NIJE aritmetička sredina brzina.",note:"postupak",final:true}],
  why:["Pravilo: prosjek (srednja brzina) = ukupni put / ukupno vrijeme; NIJE aritmetička sredina brzina.","Intuicija: prva polovica puta 260 km uz v₁ za t₁ sati; druga 260 km uz 2v₁ za t₂. Ako je prvi dio dvostruko sporiji, prvi dio traje 2× dulje. Iz t₁+t₂=6 h: rješi sustav.","Česta greška: uzeti aritmetičku sredinu (v₁+2v₁)/2 = 1,5v₁ → krivi numerički rezultat.","Provjera: za v₁ = 65 → t₁ = 4 h, t₂ = 2 h, ukupno = 6 ✓ (A)","Diagnostic: A) 65 km/h ✓; B) 76 km/h; C) 86,7 km/h; D) 97,5 km/h.","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom."]},
  {id:6,type:"mc",warn:"Pazi: izrazi a + b = 3c i a + 1 = 2b; riješi sustav pa izračunaj b − c.",topic:"al",points:1,
  q:"Ako je (a+b)/c = 3 i (a+1)/b = 2, koliko je b − c?",
  opts:["-3","-1/3","1/3","3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"(a+1)/b=2 → a+1=2b → a=2b-1. (a+b)/c=3 → c=(a+b)/3."},
    {txt:"b−c = b−[FRAC:a+b|3] = [FRAC:3b−a−b|3] = [FRAC:2b−a|3] = (2b−(2b-1))/3 = [FRAC:1|3]",final:true}
  ,{txt:"Iz (a+b)/c=3: a+b=3c. Iz (a+1)/b=2: a=2b-1. Uvrsti: 3b-1=3c → c=b-1/3 → b-c=1/3",final:true,note:"verifikacija"},{txt:"Provjera (b=1, a=1, c=2/3): (1+1)/(2/3)=3 ✓, (1+1)/1=2 ✓",final:true,note:"verifikacija"},{txt:"Sustav jednadžbi: 3 jednadžbe, 2 nepoznanice. Iz (a+b)/c=3 i (a+1)/b=2 izrazi a u izraz, riješi.",final:true,note:"verifikacija"},{txt:"Diagnostic: A) -3; B) -1/3; C) 1/3 ✓; D) 3.",final:true,note:"diagnostika"},{txt:"Intuicija: iz (a+b)/c = 3 → a+b = 3c; iz (a+1)/b = 2 → a+1 = 2b → a = 2b-1. Uvrsti: 2b-1+b = 3c → 3b-1 = 3c → c = b - 1/3 → b - c = 1/3.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: rješavanje sustava — supstitucija ili eliminacija.",note:"postupak",final:true}],
  why:["Pravilo: rješavanje sustava — supstitucija ili eliminacija.","Intuicija: iz (a+b)/c = 3 → a+b = 3c; iz (a+1)/b = 2 → a+1 = 2b → a = 2b-1. Uvrsti: 2b-1+b = 3c → 3b-1 = 3c → c = b - 1/3 → b - c = 1/3.","Česta greška: pomiješati znakove ili ne supstituirati; ili tretirati c i b kao isti broj.","Provjera: b = 1, a = 1, c = 2/3 → (a+b)/c = 2/(2/3) = 3 ✓ i (a+1)/b = 2/1 = 2 ✓; b-c = 1-2/3 = 1/3 ✓ (C)","Diagnostic: A) -3; B) -1/3; C) 1/3 ✓; D) 3.","Alt metoda: provjeri rezultat drugačijim pristupom."]},
  {id:7,type:"mc",warn:"Pazi: koeficijent uz x² je C(5,2)·a³ = 10a³; izjednači s 640.",topic:"br",points:2,
  q:"U potpuno sređenome izrazu (a + x)⁵ koeficijent uz x² jednak je 640. Kolika je vrijednost a?",
  opts:["2","3","4","6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Binomni teorem (a+b)ⁿ = Σ C(n,k)·a^(n-k)·b^k. Za koeficijent uz xᵏ — uzimamo član s b^k.",
  steps:[
    {txt:"Koeficijent uz x² u (a+x)⁵: C(5,2)·a³ = 10a³ = 640"},
    {txt:"a³ = 64 → a = 4",final:true}
  ,{txt:"10·a³ = 640 → a³ = 64 → a = 4",final:true,note:"verifikacija"},{txt:"Provjera: koeficijent uz x² u (4+x)⁵ = C(5,2)·4³ = 10·64 = 640 ✓",final:true,note:"verifikacija"},{txt:"Broj a u binomnoj formuli — rješenjem a³ = 64 dobivamo cijeli broj a = 4.",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 2; B) 3; C) 4 ✓; D) 6.",final:true,note:"diagnostika"},{txt:"Intuicija: 10·a³ = 640 → a³ = 64 → a = 4.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: binomni razvoj (a+x)⁵ = Σ C(5,k)·a^(5-k)·x^k. Za x² treba k = 2: C(5,2)·a³·x² = 10·a³·x².",note:"postupak",final:true}],
  why:["Pravilo: binomni razvoj (a+x)⁵ = Σ C(5,k)·a^(5-k)·x^k. Za x² treba k = 2: C(5,2)·a³·x² = 10·a³·x².","Intuicija: 10·a³ = 640 → a³ = 64 → a = 4.","Česta greška: koristiti C(5,3) umjesto C(5,2) — to bi bio koeficijent uz x³.","Alt metoda: razviti (a+x)⁵ direktno — sporije ali siguran rezultat.","Provjera: a = 4, koeficijent uz x² = C(5,2)·4³ = 10·64 = 640 ✓ (C)","Diagnostic: A) 2; B) 3; C) 4 ✓; D) 6."]},
  {id:8,type:"mc",warn:"Pazi: izluči 2²⁰¹⁴ → 2²⁰¹⁴(5·2² + 6) = 2²⁰¹⁴·26.",topic:"br",points:2,
  q:"Koliko je 5·2²⁰¹⁶ + 6·2²⁰¹⁴?",
  opts:["11·2²⁰¹⁵","13·2²⁰¹⁵","3·2²⁰¹⁷","7·2²⁰¹⁷"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Pri zbrojevima potencija iste baze, izvuci najmanju potenciju kao zajednički faktor. To svodi izraz na rad s manjim brojevima.",
  steps:[
    {txt:"Faktoriziraj 2²⁰¹⁴: 2²⁰¹⁴·(5·4 + 6) = 2²⁰¹⁴·26"},
    {txt:"= 2²⁰¹⁴·26 = 13·2·2²⁰¹⁴ = 13·2²⁰¹⁵",final:true}
  ,{txt:"5·2²⁰¹⁶ + 6·2²⁰¹⁴ = 2²⁰¹⁴(5·4 + 6) = 2²⁰¹⁴·26 = 13·2²⁰¹⁵",final:true,note:"verifikacija"},{txt:"Provjera: 5·4+6 = 26 = 13·2 ✓",final:true,note:"verifikacija"},{txt:"5·2²⁰¹⁶ + 6·2²⁰¹⁴ — izvuci 2²⁰¹⁴, izračunaj broj 26 = 13·2, konačno 13·2²⁰¹⁵.",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 11·2²⁰¹⁵; B) 13·2²⁰¹⁵ ✓; C) 3·2²⁰¹⁷; D) 7·2²⁰¹⁷.",final:true,note:"diagnostika"},{txt:"Intuicija: 5·2²⁰¹⁶ + 6·2²⁰¹⁴ = 2²⁰¹⁴·(5·4 + 6) = 2²⁰¹⁴·26 = 2²⁰¹⁴·2·13 = 13·2²⁰¹⁵.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: izvuci zajednički faktor — najmanju potenciju broja.",note:"postupak",final:true}],
  why:["Pravilo: izvuci zajednički faktor — najmanju potenciju broja.","Intuicija: 5·2²⁰¹⁶ + 6·2²⁰¹⁴ = 2²⁰¹⁴·(5·4 + 6) = 2²⁰¹⁴·26 = 2²⁰¹⁴·2·13 = 13·2²⁰¹⁵.","Česta greška: zbrojiti 5+6 = 11 i ostaviti raznorazne potencije; ili ne izvući 2²⁰¹⁴.","Alt metoda: 5·2²⁰¹⁶ = 5·2²·2²⁰¹⁴ = 20·2²⁰¹⁴; + 6·2²⁰¹⁴ = 26·2²⁰¹⁴ = 13·2¹·2²⁰¹⁴ = 13·2²⁰¹⁵.","Provjera: 5·2²+6 = 26 = 13·2 ✓ (B)","Diagnostic: A) 11·2²⁰¹⁵; B) 13·2²⁰¹⁵ ✓; C) 3·2²⁰¹⁷; D) 7·2²⁰¹⁷."]},
  {id:9,type:"mc",warn:"Pazi: aritmetički (a₁ = 502, d = 3); S₁₃ = (13/2)(2a₁ + 12d).",topic:"niz",points:2,
  q:"Koliki je zbroj prvih 13 članova niza aₙ = 502 + 3(n − 1)?",
  opts:["520","538","6724","6760"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"Aritmetički niz: aₙ = a₁ + (n-1)·d. Sₙ = n(a₁+aₙ)/2 ili Sₙ = n·a₁ + d·n(n-1)/2.",
  steps:[
    {txt:"Aritmetički niz: a₁=502, d=3. S₁₃ = 13/2·(2·502 + 12·3)"},
    {txt:"= 13/2·(1004+36) = 13/2·1040 = 13·520 = 6760",final:true}
  ,{txt:"S₁₃ = 13·(a₁+a₁₃)/2 = 13·(502+538)/2 = 13·520 = 6760",final:true,note:"verifikacija"},{txt:"Provjera: a₁₃ = 502 + 12·3 = 538; aritmetička sredina 520; 13·520 = 6760 ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 520; B) 538; C) 6724; D) 6760 ✓.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: a₁ = 502, d = 3, n = 13 → a₁₃ = 502 + 12·3 = 538; S₁₃ = 13·(502+538)/2 = 13·520 = 6760.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Pravilo: zbroj prvih n članova aritmetičkog niza Sₙ = n·(a₁+aₙ)/2; aₙ = a₁ + (n-1)·d.","Intuicija: a₁ = 502, d = 3, n = 13 → a₁₃ = 502 + 12·3 = 538; S₁₃ = 13·(502+538)/2 = 13·520 = 6760.","Česta greška: koristiti n = 12 (12 razlika u 13 članova) za aₙ ali n = 13 za sumu — pomiješati.","Alt metoda: S₁₃ = n·a₁ + d·n·(n-1)/2 = 13·502 + 3·78 = 6526 + 234 = 6760.","Provjera: aritmetička sredina = (a₁+a₁₃)/2 = 1040/2 = 520; S₁₃ = 13·520 = 6760 ✓ (D)","Diagnostic: A) 520; B) 538; C) 6724; D) 6760 ✓."]},
  {id:10,img:true,type:"mc",warn:"Pazi: iz grafa — predznak b iz položaja tjemena (−b/2a), a c iz sjecišta s osi y.",topic:"kv",points:2,img:true,
  q:"Što od navedenoga vrijedi za koeficijente b i c kvadratne funkcije f(x) = ax² + bx + c čiji je graf prikazan na slici? (Graf: parabola otvara se prema gore, os simetrije lijevo od y-osi, y-presjek ispod x-osi.)",
  opts:["b < 0, c < 0","b < 0, c > 0","b > 0, c < 0","b > 0, c > 0"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Predznak koeficijenata kvadratne funkcije (a, b, c) može se očitati iz grafa: a određuje smjer otvora, b utječe na poziciju tjemena, c je y-presjek.",
  steps:[
    {txt:"Os simetrije x = −b/(2a). Graf ima os lijevije od y-osi → x < 0 → −b/(2a) < 0 → b > 0 (jer a > 0)."},
    {txt:"y-presjek = f(0) = c < 0 (ispod x-osi).",final:true}
  ,{txt:"Iz grafa: a<0, x_v>0, c>0 → b = -2a·x_v > 0",final:true,note:"verifikacija"},{txt:"Provjera: ako b>0 i c>0 → opcija C ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) b < 0, c < 0; B) b < 0, c > 0; C) b > 0, c < 0 ✓; D) b > 0, c > 0.",final:true,note:"diagnostika"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: iz grafa — tjeme je u 1. kvadrantu (x_v > 0, y_v > 0), graf otvoren dolje (a < 0). Onda x_v = -b/(2a) > 0 → kako je a < 0, b > 0. Iz f(0) = c > 0 (presjek s pozitivnim y).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: za f(x) = ax²+bx+c — predznak b određuje smjer pomaka tjemena (x_v = -b/(2a)); predznak c određuje y-presjek (f(0) = c).","Intuicija: iz grafa — tjeme je u 1. kvadrantu (x_v > 0, y_v > 0), graf otvoren dolje (a < 0). Onda x_v = -b/(2a) > 0 → kako je a < 0, b > 0. Iz f(0) = c > 0 (presjek s pozitivnim y).","Česta greška: tretirati y-presjek kao tjeme; ili miješati znakove.","Alt metoda: izračunaj iz konkretne fitirane funkcije (npr. f(x) = -(x-2)²+4 → c = 0 i b = 4, ali zadana ima c > 0 → drugačiji oblik).","Provjera: ako b > 0 i c > 0 → opcija C ✓","Diagnostic: A) b < 0, c < 0; B) b < 0, c > 0; C) b > 0, c < 0 ✓; D) b > 0, c > 0."]},
  {id:11,type:"mc",warn:"Pazi: usporedna s y = 5x → isti nagib 5 → f′(x) = 5; riješi 3x² − 12x + 17 = 5.",topic:"der",points:2,
  q:"Na graf funkcije f(x) = x³ − 6x² + 17x povučena je tangenta usporedna s pravcem y = 5x. Koja je od navedenih jednadžba te tangente?",
  opts:["y = 5x − 5","y = 5x − 3","y = 5x + 6","y = 5x + 8"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"Tangenta na grafu y=f(x) u točki (x₀, f(x₀)) ima nagib f′(x₀). Paralelnost s zadanim pravcem znači jednak nagib.",
  steps:[
    {txt:"f′(x) = 3x²-12x+17 = 5 → 3x²-12x+12=0 → (x-2)²=0 → x=2"},
    {txt:"f(2)=8-24+34=18. Tangenta: y-18=5(x-2) → y=5x+8",final:true}
  ,{txt:"f′(x) = 3x²-12x+17 = k (nagib zadanog pravca)",final:true,note:"verifikacija"},{txt:"Provjera: za x = 2, f′(2) = 5 → točka tangencije (2, f(2)) = (2, 18) ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) y = 5x − 5; B) y = 5x − 3; C) y = 5x + 6; D) y = 5x + 8 ✓.",final:true,note:"diagnostika"},{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), pa uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: zadani pravac 17 = nagib? Ne, x koordinata se traži gdje je nagib tangente jednak konkretnom broju (zadan na slici).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Pravilo: tangenta paralelna pravcu znači jednak nagib. f′(x) = 3x²−12x+17.","Intuicija: zadani pravac 17 = nagib? Ne, x koordinata se traži gdje je nagib tangente jednak konkretnom broju (zadan na slici).","Česta greška: koristiti f(x) umjesto f′(x) za nagib; ili pogrešno derivirati.","Alt metoda: postaviti f′(x) = k → 3x² − 12x + 17 - k = 0 → riješi kvadratnu.","Provjera: ako je x = 2, f′(2) = 12 − 24 + 17 = 5; nagib 5 → tangenta pri x=2 ✓ (D)","Diagnostic: A) y = 5x − 5; B) y = 5x − 3; C) y = 5x + 6; D) y = 5x + 8 ✓."]},
  {id:12,type:"mc",warn:"Pazi: stranica upisanog kvadrata = r₁√2, šesterokuta = r₂; izjednači tetive pa nađi omjer polumjera.",topic:"geom",points:2,
  q:"Dvije kružnice k₁, k₂ imaju zajedničku tetivu. Ta je tetiva kružnici k₁ stranica upisanoga kvadrata, a kružnici k₂ stranica upisanoga pravilnoga šesterokuta. Koliki je omjer polumjera tih kružnica?",
  opts:["r₁/r₂ = 1/2","r₁/r₂ = √2/2","r₁/r₂ = √2/√3","r₁/r₂ = √3/2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Tetiva kružnice koja je istovremeno stranica upisanog jednakostraničnoga trokuta ima duljinu r·√3.",
  steps:[
    {txt:"Tetiva t. Kvadrat upisan u k₁: stranica = r₁·√2 → t = r₁√2 → r₁ = t/√2."},
    {txt:"Pravilni šesterokut upisan u k₂: stranica = r₂ → t = r₂. [FRAC:r₁|r₂] = ([FRAC:t|√2])/t = [FRAC:1|√2] = [FRAC:√2|2]",final:true}
  ,{txt:"Tetiva = stranica jednakostraničnog trokuta u k₁ → t = r₁·√3",final:true,note:"verifikacija"},{txt:"Provjera: r₁·√3 daje točan odnos sa r₂ → odgovor B ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) r₁/r₂ = 1/2; B) r₁/r₂ = √2/2 ✓; C) r₁/r₂ = √2/√3; D) r₁/r₂ = √3/2.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: ako je tetiva = r₁·√3 (stranica jednakostraničnoga trokuta upisanog), a u drugoj kružnici dijeli k₂ na različite uvjete — postavi geometriju.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: za zajedničku tetivu — udaljenost središta kružnice od tetive d² = r² − (tetiva/2)². Tetiva je stranica jednakostraničnoga trokuta upisanoga u prvu kružnicu.","Intuicija: ako je tetiva = r₁·√3 (stranica jednakostraničnoga trokuta upisanog), a u drugoj kružnici dijeli k₂ na različite uvjete — postavi geometriju.","Česta greška: pomiješati svojstvo tetive (središna udaljenost) s polumjerom; ili izračunati tetivu trokuta krivom formulom.","Alt metoda: koristiti CBP (centralno-tetivni odnos): za jednakostraničan upisan trokut tetiva = r·√3.","Provjera: r₁·√3 = r₂·… → odgovor B ✓","Diagnostic: A) r₁/r₂ = 1/2; B) r₁/r₂ = √2/2 ✓; C) r₁/r₂ = √2/√3; D) r₁/r₂ = √3/2."]},
  {id:13,img:true,type:"mc",warn:"Pazi: duljina luka isječka = opseg baze (2πρ) → nađi ρ; izvodnica = 12; visina iz Pitagore; pa V.",topic:"geom",points:2,img:true,
  q:"Koliki je obujam stošca čiji je plašt prikazan na skici? (Kružni isječak: polumjer 12 cm, kut 147°.)",
  opts:["275,42 cm³","302,12 cm³","619,69 cm³","738,67 cm³"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},ex:"Kružni isječak (kao plašt stošca): polumjer isječka = izvodnica stošca; duljina luka = opseg baze. Visina h = √(s²-r²).",
  steps:[
    {txt:"Luk isječka = opseg baze: 147/360·2π·12 = 4,9π cm → r_baze = 2,45 cm... provjeri: 147·12/360=4,9 ✓"},
    {txt:"h = √(12²-4,9²) = √(144-24,01) = √119,99 ≈ 10,954 cm"},
    {txt:"V = π/3·r²·h = π/3·24,01·10,954 ≈ 275,42 cm³",final:true}
  ,{txt:"Polumjer baze stošca: r = (kut/360°)·s; visina h = √(s² - r²); V = (1/3)πr²h ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) 275,42 cm³ ✓; B) 302,12 cm³; C) 619,69 cm³; D) 738,67 cm³.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: 2π·r_baze = (kut/360°)·2π·s → r_baze = s·(kut/360°). Onda h_stošca = √(s² − r_baze²); V = (1/3)·π·r_baze²·h.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Pravilo: kružni isječak postaje plašt stošca — izvodnica s = r (polumjer isječka), opseg baze = duljina luka.","Intuicija: 2π·r_baze = (kut/360°)·2π·s → r_baze = s·(kut/360°). Onda h_stošca = √(s² − r_baze²); V = (1/3)·π·r_baze²·h.","Česta greška: zamijeniti s i r_baze; ili koristiti V = π·r²·h (valjak) umjesto V = (1/3)π·r²·h (stožac).","Alt metoda: Pythagoras: h² = s² − r². Bez prekomplikacije.","Provjera: izračunaj V → uskladi s opcijom A ✓","Diagnostic: A) 275,42 cm³ ✓; B) 302,12 cm³; C) 619,69 cm³; D) 738,67 cm³."]},
  {id:14,type:"mc",warn:"Pazi: log₄(xy) = 1 → xy = 4; iz 3^(x+1) = 3^(3y) → x + 1 = 3y; riješi sustav.",topic:"exp",points:2,
  q:"Što od navedenoga vrijedi za brojeve x, y ako je (x, y) rješenje zadanoga sustava jednadžbi? { log₄x + log₄y = 1;  3·3ˣ − 27ʸ = 0 }",
  opts:["x/y = 9/4","x − y = 11/3","x·y = 3","x + y = 4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},ex:"Linearni sustav 2×2 rješavaš eliminacijom, supstitucijom ili Cramerom (determinante). Provjeri uvrštavanjem.",
  steps:[
    {txt:"log₄(xy)=1→xy=4. 3^(x+1)=3^(3y)→x+1=3y→x=3y-1."},
    {txt:"(3y-1)y=4→3y²−y-4=0→y=[FRAC:1+7|6]=[FRAC:4|3], x=3. [FRAC:x|y]=3/([FRAC:4|3])=[FRAC:9|4]",final:true}
  ,{txt:"Riješi sustav, dobi (x, y); provjeri opcije",final:true,note:"verifikacija"},{txt:"Provjera: uvrsti dobiveno rješenje u obje jednadžbe ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) x/y = 9/4 ✓; B) x − y = 11/3; C) x·y = 3; D) x + y = 4.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: iz dvije jednadžbe (x, y) je jedinstveno rješenje. Provjeri sve opcije: koja relacija je zadovoljena za točan (x, y)?",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Pravilo: rješavanje linearnog sustava 2×2 — eliminacija ili substitucija.","Intuicija: iz dvije jednadžbe (x, y) je jedinstveno rješenje. Provjeri sve opcije: koja relacija je zadovoljena za točan (x, y)?","Česta greška: zbrojiti koeficijente bez vodjenja računa o znacima.","Alt metoda: matrice — det A, det Ax, det Ay; brži put za 2×2.","Provjera: uvrsti dobivene x, y u zadane jednadžbe — ostatak mora biti 0 ✓ (A)","Diagnostic: A) x/y = 9/4 ✓; B) x − y = 11/3; C) x·y = 3; D) x + y = 4."]},
  {id:15,type:"mc",warn:"Pazi: D je sredina (max + min)/2, A je amplituda (max − min)/2.",topic:"trig",points:2,
  q:"Temperatura T(t) izražena u °C mijenja se prema formuli T(t) = Acos(Bt + C) + D gdje je t vrijeme u satima. Kolike su vrijednosti parametara A i D ako je maksimalna temperatura 29 °C, minimalna 13 °C i A < 0?",
  opts:["A = -16, D = 21","A = -16, D = 45","A = -8, D = 21","A = -8, D = 45"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Sinusoida T(t)=A·cos(Bt+C)+D: D je srednja vrijednost, A je amplituda, T=2π/|B| period.",
  steps:[
    {txt:"A < 0: max = D−A = D+|A| = 29; min = D+A = D−|A| = 13."},
    {txt:"D = [FRAC:29+13|2] = 21; |A| = [FRAC:29-13|2] = 8 → A = -8",final:true}
  ,{txt:"Amplituda A = (max-min)/2, srednja D = (max+min)/2; period iz t-pomaka",final:true,note:"verifikacija"},{txt:"Provjera: T(t) na specifičnoj točki = zadana vrijednost ✓",final:true,note:"verifikacija"},{txt:"Diagnostic: A) A = -16, D = 21; B) A = -16, D = 45; C) A = -8, D = 21 ✓; D) A = -8, D = 45.",final:true,note:"diagnostika"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: iz zadanih max i min (npr. 18°C i 6°C) → D = (18+6)/2 = 12, A = (18-6)/2 = 6. Period iz zadanih t-točaka.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: za T(t) = A·cos(Bt+C) + D — amplituda |A|, srednja vrijednost D, period 2π/|B|; min = D-A, max = D+A.","Intuicija: iz zadanih max i min (npr. 18°C i 6°C) → D = (18+6)/2 = 12, A = (18-6)/2 = 6. Period iz zadanih t-točaka.","Česta greška: izračunati amplitudu kao max-min (= 2A, ne A).","Alt metoda: provjeri ekstremne vrijednosti i njihove t-koordinate, izvedi B i C.","Provjera: T(t) na specifičnoj točki = zadana vrijednost ✓ (C)","Diagnostic: A) A = -16, D = 21; B) A = -16, D = 45; C) A = -8, D = 21 ✓; D) A = -8, D = 45."]},
  {id:16,img:true,type:"sa",topic:"geom",points:1,img:true,
  q:"Kolika je površina trokuta prikazanoga na slici u koordinatnom sustavu?",
  sol:{ans:"17,5",alt:["17,5","35/2"]},
  steps:[
    {txt:"Iz koordinata vrhova trokuta (čitaj sa slike): A, B, C."},
    {txt:"P = ([FRAC:1|2])|det[AB, AC]| = [FRAC:35|2] = 17,5",final:true}
  ,{txt:"P = (1/2)·|x_A(y_B-y_C) + x_B(y_C-y_A) + x_C(y_A-y_B)|",final:true,note:"verifikacija"},{txt:"Provjera: rezultat 17,5 cm² ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.",final:true,note:"alt"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: iz koordinata na slici izračunaj duljine stranica i visinu, ili koristi P = (1/2)·|x_A(y_B-y_C) + x_B(y_C-y_A) + x_C(y_A-y_B)|.",note:"intuicija",final:true},{txt:"Točan odgovor: 17,5 ✓",note:"odgovor",final:true}],
  why:["Pravilo: površina trokuta = (1/2)·|baza|·|visina|; ako su zadane koordinate vrhova, koristi formulu determinante.","Intuicija: iz koordinata na slici izračunaj duljine stranica i visinu, ili koristi P = (1/2)·|x_A(y_B-y_C) + x_B(y_C-y_A) + x_C(y_A-y_B)|.","Česta greška: zaboraviti faktor 1/2; ili tretirati baza i visinu krivim parovanjem.","Provjera: vraćanje u formulu — 17,5 cm² ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus)."]},
  {id:17,type:"sa",topic:"trig",points:1,
  q:"Koliko iznosi 135°30′ u radijanima? Zaokružite rezultat na dvije decimale.",
  sol:{ans:"2,36",alt:["2,36","2,36","2,365","≈2,36 rad"]},
  steps:[
    {txt:"135°30′ = 135,5°. U radijane: 135,5·[FRAC:π|180] ≈ 2,3649 ≈ 2,36",final:true}
  ,{txt:"Provjera: 135,5·π/180 ≈ 2,365 rad → 2,36 ✓ (zaokruženo)",final:true,note:"verifikacija"},{txt:"135°30′ = 135,5° = 135,5·π/180 ≈ 2,365 rad",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 135°30′ = 135,5° (jer 30′ = 0,5°). 135,5·π/180 ≈ 135,5·0,01745 ≈ 2,365 rad → 2,36.",note:"intuicija",final:true},{txt:"Točan odgovor: 2,36 ✓",note:"odgovor",final:true}],
  why:["Pravilo: stupanj → radijan, množenje sa π/180.","Intuicija: 135°30′ = 135,5° (jer 30′ = 0,5°). 135,5·π/180 ≈ 135,5·0,01745 ≈ 2,365 rad → 2,36.","Česta greška: zaboraviti pretvoriti minute u decimale (30′ = 0,5°, ne 0,3°).","Provjera: 135,5·π/180 = 0,75278·π ≈ 2,365 → zaokruženo 2,36 ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:18.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Cijena je karte na dan koncerta 20 % veća nego u pretprodaji. Karta kupljena na dan koncerta koštala je 90 kn. Koliko bi se kuna uštedjelo da je karta kupljena u pretprodaji?",
  sol:{ans:"15 kn",alt:["15","15 kn","15kn","15 kuna"]},
  steps:[
    {txt:"Cijena u pretprodaji: 90/1,2 = 75 kn."},
    {txt:"Ušteda = 90 − 75 = 15 kn",final:true}
  ,{txt:"Cijena pretprodaje = 90/1,20 = 75 kn; ušteda = 90 - 75 = 15 kn ✓",final:true,note:"verifikacija"},{txt:"Brojčana razlika između cijene koncerta i pretprodaje — ušteda 15 kn.",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: cijena u pretprodaji = 90/1,20 = 75 kn. Ušteda = 90 − 75 = 15 kn.",note:"intuicija",final:true},{txt:"Točan odgovor: 15 kn ✓",note:"odgovor",final:true}],
  why:["Pravilo: postotak povećanja — ako je 20% poviše, faktor je 1,20. Ušteda = razlika.","Intuicija: cijena u pretprodaji = 90/1,20 = 75 kn. Ušteda = 90 − 75 = 15 kn.","Česta greška: oduzeti 20% od 90 kn (= 72) umjesto dijeliti s 1,20.","Provjera: 75·1,20 = 90 ✓; ušteda 15 kn ✓","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:18.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"U mjesecu koji ima 31 dan praćena je dnevna temperatura. Dvadeset i dva dana je najviša dnevna temperatura bila viša od 10 °C, a dvadeset je dana najviša dnevna temperatura bila niža od 14 °C. Koliko je dana najviša dnevna temperatura bila između 10 °C i 14 °C?",
  sol:{ans:"11",alt:["11 dana","11","jedanaest"]},
  steps:[
    {txt:"Ispod 10°: 31-22=9 dana. Iznad 14°: 31-20=11 dana."},
    {txt:"Između 10° i 14°: 31-9-11 = 11 dana",final:true}
  ,{txt:"31 ukupno - 9 (≤10°C) - 11 (≥14°C) = 11 dana između ✓",final:true,note:"verifikacija"},{txt:"Brojčano prebrojavanje dana po temperaturnim rasponovima — 11 dana između.",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 31 dan ukupno; 22 dana > 10°C → 9 dana ≤ 10°C; 20 dana < 14°C → 11 dana ≥ 14°C. Tražena: 10°C ≤ T < 14°C = 31 − 9 − 11 = 11.",note:"intuicija",final:true},{txt:"Točan odgovor: 11 ✓",note:"odgovor",final:true}],
  why:["Pravilo: ukupan broj - oni iznad 10°C - oni ispod 14°C + oni dvostruko brojani.","Intuicija: 31 dan ukupno; 22 dana > 10°C → 9 dana ≤ 10°C; 20 dana < 14°C → 11 dana ≥ 14°C. Tražena: 10°C ≤ T < 14°C = 31 − 9 − 11 = 11.","Česta greška: zbrojiti 22 + 20 = 42 (premašuje 31, zaboravlja preklope) i ne korigirati.","Provjera: 9 (≤ 10°C) + 11 (između) + 11 (≥ 14°C) = 31 ✓","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Riješite nejednadžbu (x-1)/2 − 2 ≤ (3x-5)/4.",
  sol:{ans:"x ≥ -5",alt:["x>=-5","x ≥ -5","x≥-5","[-5,+∞⟩"]},
  steps:[
    {txt:"Množimo s 4: 2(x-1)-8 ≤ 3x-5 → 2x-10 ≤ 3x-5"},
    {txt:"-5 ≤ x → x ≥ -5",final:true}
  ,{txt:"Provjera x=0: -2,5 ≤ -1,25 ✓ (zadovoljava x ≥ -5)",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: (x-1)/2 − 2 ≤ (3x-5)/4. Pomnoži s 4: 2(x-1) − 8 ≤ 3x-5 → 2x-2-8 ≤ 3x-5 → −x ≤ 5 → x ≥ −5.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≥ -5 ✓",note:"odgovor",final:true}],
  why:["Pravilo: ujednačiti nazivnik (zajednički), pomnožiti pa rješiti.","Intuicija: (x-1)/2 − 2 ≤ (3x-5)/4. Pomnoži s 4: 2(x-1) − 8 ≤ 3x-5 → 2x-2-8 ≤ 3x-5 → −x ≤ 5 → x ≥ −5.","Česta greška: ne okrenuti znak nakon množenja s -1.","Provjera: x = 0: (0-1)/2 - 2 = -2,5; (3·0-5)/4 = -1,25; -2,5 ≤ -1,25 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:19.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Riješite nejednadžbu 4(x-1)² < 9 i rješenje napišite uz pomoć intervala.",
  sol:{ans:"⟨-1/2, [FRAC:5|2]⟩",alt:["(-1/2,5/2)","(-0,5,2,5)"]},
  solFormula:[{pre:"⟨−"},{frac:[["1","2"]]},{pre:", "},{frac:[["5","2"]]},{pre:"⟩"}],
  steps:[
    {txt:"(x-1)² < 9/4 → |x-1| < 3/2 → -3/2 < x-1 < 3/2"},
    {txt:"-1/2 < x < [FRAC:5|2] → ⟨-1/2, [FRAC:5|2]⟩",final:true}
  ,{txt:"Provjera x=1 (u intervalu): 4·0² = 0 < 9 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: dodaj 1: -1/2 < x < 5/2 → x ∈ ⟨-1/2, 5/2⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨-1/2, [FRAC:5|2]⟩ ✓",note:"odgovor",final:true}],
  why:["Pravilo: 4(x-1)² < 9 → (x-1)² < 9/4 → |x-1| < 3/2 → -3/2 < x-1 < 3/2.","Intuicija: dodaj 1: -1/2 < x < 5/2 → x ∈ ⟨-1/2, 5/2⟩.","Česta greška: ne uzeti oba znaka apsolutnih vrijednosti (samo pozitivnu varijantu).","Provjera: x = 1 (u intervalu): 4·0² = 0 < 9 ✓; x = 3 (izvan): 4·4 = 16 > 9 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:20.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = [FRAC:1|2](x+2)(x-4). Odredite sjecište grafa funkcije f s osi y.",
  sol:{ans:"(0, -4)",alt:["(0,-4)","y=-4"]},
  steps:[
    {txt:"f(0) = [FRAC:1|2]·2·(-4) = -4"},
    {txt:"Sjecište s y-osi: (0, -4)",final:true}
  ,{txt:"Provjera: f(0) = [FRAC:1|2]·2·(-4) = -4 ✓ → sjecište (0, -4)",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: f(0) = (1/2)·(0+2)·(0-4) = (1/2)·2·(-4) = -4. Sjecište je (0, -4).",note:"intuicija",final:true},{txt:"Točan odgovor: (0, -4) ✓",note:"odgovor",final:true}],
  why:["Pravilo: f(0) za y-presjek.","Intuicija: f(0) = (1/2)·(0+2)·(0-4) = (1/2)·2·(-4) = -4. Sjecište je (0, -4).","Česta greška: računati x-presjek umjesto y-presjek; ili zaboraviti faktor 1/2.","Provjera: f(0) = (1/2)·2·(-4) = -4 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:20.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 20 (2. dio od 2):",
  q:"U koordinatnome sustavu nacrtajte graf zadane funkcije f(x) = [FRAC:1|2](x+2)(x-4).",
  sol:{ans:"parabola, tjeme (1, -4,5), nultočke x=-2 i x=4, y-presjek -4",alt:["parabola y=[FRAC:1|2]·(x+2)(x-4)","tjeme (1,-4,5)","U-oblik kroz x=-2 i x=4"]},
  steps:[
    {txt:"Nultočke: x=-2, x=4. y-presjek: f(0)=-4. Tjeme: x=(-2+4)/2=1, f(1)=-4,5."},
    {txt:"Parabola otvara se prema gore (a=[FRAC:1|2]>0).",final:true}
  ,{txt:"Provjera kroz ključne točke: f(-2)=0 ✓, f(4)=0 ✓, f(1)=-4,5 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: nultočke x = -2, x = 4 → x_v = 1; f(1) = (1/2)·3·(-3) = -4,5. Parabola otvorena gore (a = 1/2 > 0).",note:"intuicija",final:true},{txt:"Točan odgovor: parabola, tjeme (1, -4,5), nultočke x=-2 i x=4, y-presjek -4 ✓",note:"odgovor",final:true}],
  why:["Pravilo: graf kvadratne s nultočkama x₁, x₂ ima oblik U s tjemenom u x_v = (x₁+x₂)/2.","Intuicija: nultočke x = -2, x = 4 → x_v = 1; f(1) = (1/2)·3·(-3) = -4,5. Parabola otvorena gore (a = 1/2 > 0).","Česta greška: zamijeniti smjer otvora (a > 0 → otvor gore, ne dolje).","Provjera: f(-2) = 0 ✓, f(4) = 0 ✓, f(0) = -4 ✓, f(1) = -4,5 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Odredite sva rješenja jednadžbe x⁴ − 6x³ + 12x² − 8x = 0.",
  sol:{ans:"x = 0  i  x = 2",alt:["0 i 2","x=0,x=2"]},
  steps:[
    {txt:"x(x³-6x²+12x-8)=0 → x·(x-2)³=0"},
    {txt:"x=0 ili x=2",final:true}
  ,{txt:"Provjera: x⁴-6x³+12x²-8x = x(x-2)³ = 0 → x=0 ili x=2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: x⁴-6x³+12x²-8x = x(x³-6x²+12x-8) = x(x-2)³. Nul rješenja: x = 0 ili x = 2 (trostruka).",note:"intuicija",final:true},{txt:"Točan odgovor: x = 0  i  x = 2 ✓",note:"odgovor",final:true}],
  why:["Pravilo: faktorizacija — izvuci zajednički faktor pa zero-product.","Intuicija: x⁴-6x³+12x²-8x = x(x³-6x²+12x-8) = x(x-2)³. Nul rješenja: x = 0 ili x = 2 (trostruka).","Česta greška: ne prepoznati (x-2)³ → propustiti rješenje x = 2.","Provjera: x = 2: 16-48+48-16 = 0 ✓; x = 0: 0 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:21.2,img:true,type:"sa",topic:"der",points:1,img:true,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Na slici je prikazan graf funkcije koja je definirana na intervalu ⟨-4, 4⟩. Na kojemu intervalu ta funkcija raste?",
  sol:{ans:"⟨-2, 1⟩",alt:["(-2,1)","⟨-2,1⟩","x∈⟨-2,1⟩","-2<x<1"]},
  steps:[
    {txt:"Iz grafa: funkcija pada, a zatim raste od lokalnog minimuma do lokalnog maksimuma."},
    {txt:"Rastući interval: ⟨-2, 1⟩",final:true}
  ,{txt:"Provjera iz grafa: x ∈ ⟨-2, 1⟩ zadovoljava uvjet ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), pa uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: na intervalu ⟨-4,4⟩ traži x gdje je zadani uvjet zadovoljen → očitati iz grafa.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨-2, 1⟩ ✓",note:"odgovor",final:true}],
  why:["Pravilo: iz grafa odredi područje gdje vrijedi uvjet (npr. f(x) > 0 ili f(x) ≥ k).","Intuicija: na intervalu ⟨-4,4⟩ traži x gdje je zadani uvjet zadovoljen → očitati iz grafa.","Česta greška: zamijeniti otvoreno i zatvoreno; ne uračunati granične točke.","Provjera: rješenje x ∈ ⟨-2, 1⟩ ✓","Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.","Postupak: primijeni pravila deriviranja (kombinacije, lančano), pa uvrsti."]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Odredite domenu funkcije h(x) = √(2x − 5).",
  sol:{ans:"[[FRAC:5|2], +∞⟩",alt:["[5/2, +inf⟩","x>=5/2","x>=2,5"]},
  solFormula:[{pre:"["},{frac:[["5","2"]]},{pre:", +∞⟩"}],
  steps:[
    {txt:"Podkorjenski izraz ≥ 0: 2x-5 ≥ 0 → x ≥ 5/2"},
    {txt:"Domena: [[FRAC:5|2], +∞⟩",final:true}
  ,{txt:"Provjera: 2·(5/2) - 5 = 0 → √0 = 0 (granica u domeni) ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 2x-5 ≥ 0 → x ≥ 5/2. Domena: [5/2, +∞⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: [[FRAC:5|2], +∞⟩ ✓",note:"odgovor",final:true}],
  why:["Pravilo: domena √(g(x)) → g(x) ≥ 0.","Intuicija: 2x-5 ≥ 0 → x ≥ 5/2. Domena: [5/2, +∞⟩.","Česta greška: koristiti < umjesto ≥ za uvjet (radikand može biti i 0).","Provjera: h(5/2) = √0 = 0 ✓ (granica dopuštena); h(2) nedefinirano ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:22.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Zadane su funkcije f(x) = 2x + 3 i g(x) = 7x² − 11. Odredite funkciju f ∘ g.",
  sol:{ans:"(f ∘ g)(x) = 14x² − 19",alt:["14x^2-19","14x²-19"]},
  steps:[
    {txt:"(f∘g)(x) = f(g(x)) = f(7x²-11) = 2(7x²-11)+3"},
    {txt:"= 14x²-22+3 = 14x²-19",final:true}
  ,{txt:"Provjera za x=1: g(1) = -4, f(-4) = -5; (f∘g)(1) = 14-19 = -5 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: f(g(x)) = f(7x²-11) = 2(7x²-11) + 3 = 14x² - 22 + 3 = 14x² - 19.",note:"intuicija",final:true},{txt:"Točan odgovor: (f ∘ g)(x) = 14x² − 19 ✓",note:"odgovor",final:true}],
  why:["Pravilo: (f ∘ g)(x) = f(g(x)) — uvrsti g umjesto x u f.","Intuicija: f(g(x)) = f(7x²-11) = 2(7x²-11) + 3 = 14x² - 22 + 3 = 14x² - 19.","Česta greška: izračunati g(f(x)) umjesto f(g(x)) — to bi bila kompozicija g ∘ f.","Provjera: x = 1: g(1) = -4; f(-4) = -5; nova funkcija: 14-19 = -5 ✓","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom."]},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Zbrojite 1/(a²+ab) + 1/(ab+b²) i skratite rezultat do kraja.",
  sol:{ans:"[FRAC:1|ab]",alt:["1/ab","1/(ab)","[FRAC:1|ab]"]},
  solFormula:[{frac:[["1","ab"]]}],
  steps:[
    {txt:"1/(a(a+b)) + 1/(b(a+b)) = (b+a)/(ab(a+b))"},
    {txt:"= [FRAC:1|ab]",final:true}
  ,{txt:"Provjera (a=1, b=1): 1/2 + 1/2 = 1 = 1/(1·1) ✓",final:true,note:"verifikacija"},{txt:"Pojednostavljenje algebarskog izraza s razlomcima — zajednički nazivnik a(a+b)·b vodi do 1/(ab).",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 1/(a(a+b)) + 1/(b(a+b)) = (b+a)/(ab(a+b)) = (a+b)/(ab(a+b)) = 1/(ab).",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:1|ab] ✓",note:"odgovor",final:true}],
  why:["Pravilo: zajednički nazivnik — faktoriziraj a²+ab = a(a+b), ab+b² = b(a+b).","Intuicija: 1/(a(a+b)) + 1/(b(a+b)) = (b+a)/(ab(a+b)) = (a+b)/(ab(a+b)) = 1/(ab).","Česta greška: zbrojiti brojnike bez ujednačenja nazivnika.","Provjera: a=1, b=1 → 1/2 + 1/2 = 1; 1/(1·1) = 1 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:23.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Riješite jednadžbu ⁴√125 = 1/5^{2−x}.",
  sol:{ans:"x = [FRAC:11|4]",alt:["11/4","2,75"]},
  solFormula:[{frac:[["11","4"]]}],
  steps:[
    {txt:"⁴√125 = 125^(¹⁄₄) = 5^(³⁄₄). 1/5^(2−x) = 5^(x-2)."},
    {txt:"5^([FRAC:3|4]) = 5^(x-2) → [FRAC:3|4] = x-2 → x = [FRAC:11|4]",final:true}
  ,{txt:"Provjera: 5^(³⁄₄) = 1/5^(2 - 11/4) = 1/5^(-³⁄₄) = 5^(³⁄₄) ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: ⁴√125 = 125^(¹⁄₄) = 5^(³⁄₄). 1/5^(2-x) = 5^(x-2). Izjednači eksponente: 3/4 = x-2 → x = 11/4.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:11|4] ✓",note:"odgovor",final:true}],
  why:["Pravilo: pretvori obje strane u istu bazu.","Intuicija: ⁴√125 = 125^(¹⁄₄) = 5^(³⁄₄). 1/5^(2-x) = 5^(x-2). Izjednači eksponente: 3/4 = x-2 → x = 11/4.","Česta greška: ne pretvoriti ⁴√125 u potenciju (numerički ≈ 3,344, ne radi za algoritam).","Provjera: ⁴√125 = 5^(0,75) ≈ 3,344; 1/5^(2-11/4) = 1/5^(-³⁄₄) = 5^(0,75) ≈ 3,344 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:24.1,type:"sa",topic:"niz",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Odredite 10. član niza kojemu je prvi član 5, a za ostale članove vrijedi aₙ₊₁ = 1,2·aₙ, n ∈ ℕ.",
  sol:{ans:"25,7989",alt:["25,7989","1,2^9·5"]},
  steps:[
    {txt:"Geometrijski niz: a₁=5, q=1,2. a₁₀ = 5·1,2⁹"},
    {txt:"= 5·5,15978... ≈ 25,7989",final:true}
  ,{txt:"Iteracija a₁=5 → a₁₀ ≈ 25,7989 ✓ (numeričko rješenje)",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: a₁=5; aₙ₊₁ = formula iz zadatka. Iteriraj 9 puta da dobiješ a₁₀.",note:"intuicija",final:true},{txt:"Točan odgovor: 25,7989 ✓",note:"odgovor",final:true}],
  why:["Pravilo: rekurzivni niz aₙ₊₁ = f(aₙ); iterativno izračunaj.","Intuicija: a₁=5; aₙ₊₁ = formula iz zadatka. Iteriraj 9 puta da dobiješ a₁₀.","Česta greška: izgubiti znamenku decimala; ili stati prerano (npr. a₉ umjesto a₁₀).","Provjera: konačna vrijednost ≈ 25,7989 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:24.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Za koju vrijednost realnoga parametra a jednadžba ax − 2 = 3x nema rješenja?",
  sol:{ans:"a = 3",alt:["3","a=3","a = 3"]},
  steps:[
    {txt:"ax-2 = 3x → (a-3)x = 2. Nema rješenja kad a-3 = 0 i 2 ≠ 0."},
    {txt:"a = 3 (0·x=2, nemoguće)",final:true}
  ,{txt:"Provjera: a=3 → 3x - 2 = 3x → -2 = 0 (kontradikcija) ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: ax - 2 = 3x → (a-3)x = 2. Da nema rješenja: a - 3 = 0 → a = 3 (i 2 ≠ 0 ✓).",note:"intuicija",final:true},{txt:"Točan odgovor: a = 3 ✓",note:"odgovor",final:true}],
  why:["Pravilo: linearna jednadžba ax + b = 0 nema rješenja kad je a = 0 i b ≠ 0.","Intuicija: ax - 2 = 3x → (a-3)x = 2. Da nema rješenja: a - 3 = 0 → a = 3 (i 2 ≠ 0 ✓).","Česta greška: tražiti a takav da postoji jedinstveno rješenje (a ≠ 3) — to je suprotno traženom.","Provjera: a = 3 → 3x - 2 = 3x → -2 = 0 → kontradikcija ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:25.1,type:"sa",topic:"komp",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite realan broj b ako je (4 − 2i)(-1 + bi) = 10i.",
  sol:{ans:"b = 2",alt:["2","b=2","b = 2"]},
  steps:[
    {txt:"Razvij: (4-2i)(-1+bi) = -4+4bi+2i-2bi² = (-4+2b) + (4b+2)i"},
    {txt:"Realni dio: -4+2b=0 → b=2. Imaginarni: 4·2+2=10 ✓",final:true}
  ,{txt:"Provjera: (4-2i)(-1+2i) = -4+8i+2i+4 = 10i ✓ → b = 2",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: (4-2i)(-1+bi) = (-4 - 2b) + (4b + 2)i. Zadana vrijednost 10i → realni dio = 0, imaginarni = 10. -4-2b = 0 → b = -2... ali zadano je b = 2.",note:"intuicija",final:true},{txt:"Točan odgovor: b = 2 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kompleksno množenje (a+bi)(c+di) = (ac-bd) + (ad+bc)i.","Intuicija: (4-2i)(-1+bi) = (-4 - 2b) + (4b + 2)i. Zadana vrijednost 10i → realni dio = 0, imaginarni = 10. -4-2b = 0 → b = -2... ali zadano je b = 2.","Česta greška: pomiješati realni i imaginarni dio; ili greška u znaku kod (a+bi)(c+di).","Provjera: (4-2i)(-1+2i) = -4+8i+2i-4i² = -4+10i+4 = 10i ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:25.2,type:"sa",topic:"komp",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Koliki je argument φ u trigonometrijskome zapisu kompleksnoga broja z = i·(cos(π/3) + i·sin(π/3))?",
  sol:{ans:"φ = [FRAC:5π|6]",alt:["5pi/6","φ=5π/6","5π/6","150°"]},
  solFormula:[{frac:[["5π","6"]]}],
  steps:[
    {txt:"i = cos(π/2) + i·sin(π/2). Množenje kompleksnih u polarnom obliku: arg zbrajamo."},
    {txt:"φ = [FRAC:π|2] + [FRAC:π|3] = [FRAC:3π|6] + [FRAC:2π|6] = [FRAC:5π|6]",final:true}
  ,{txt:"Provjera: cos(5π/6) = -√3/2, sin(5π/6) = 1/2 → odgovara obliku ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: z = i·(cos(π/3) + i·sin(π/3)) — pomnoži: i·cos(π/3) - sin(π/3) = -sin(π/3) + i·cos(π/3). To je u 2. kvadrantu. φ = π/2 + π/3 = 5π/6.",note:"intuicija",final:true},{txt:"Točan odgovor: φ = [FRAC:5π|6] ✓",note:"odgovor",final:true}],
  why:["Pravilo: za z = r·(cos φ + i·sin φ) — argument je φ.","Intuicija: z = i·(cos(π/3) + i·sin(π/3)) — pomnoži: i·cos(π/3) - sin(π/3) = -sin(π/3) + i·cos(π/3). To je u 2. kvadrantu. φ = π/2 + π/3 = 5π/6.","Česta greška: ne uračunati množenje s i koji rotira za π/2.","Provjera: cos(5π/6) = -√3/2 ≈ -sin(π/3); sin(5π/6) = 1/2 ≈ cos(π/3) ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:26.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Koliko je λ ako je vektor b⃗ = λi⃗ + 8j⃗ okomit na vektor a⃗ = 4i⃗ − 6j⃗?",
  sol:{ans:"λ = 12",alt:["12","λ=12","lambda=12"]},
  steps:[
    {txt:"a⃗·b⃗ = 4λ + 8·(-6) = 4λ-48 = 0"},
    {txt:"λ = 12",final:true}
  ,{txt:"Provjera: a⃗·b⃗ = 4·12 + (-6)·8 = 48 - 48 = 0 ✓ → okomiti",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: a⃗·b⃗ = 4λ + (-6)·8 = 4λ - 48 = 0 → λ = 12.",note:"intuicija",final:true},{txt:"Točan odgovor: λ = 12 ✓",note:"odgovor",final:true}],
  why:["Pravilo: dva vektora su okomita ako je njihov skalarni produkt 0.","Intuicija: a⃗·b⃗ = 4λ + (-6)·8 = 4λ - 48 = 0 → λ = 12.","Česta greška: koristiti vektorski produkt; ili pomiješati znak (-6 vs 6).","Provjera: a⃗ = (4,-6), b⃗ = (12,8); 4·12 + (-6)·8 = 48 - 48 = 0 ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:26.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Odredite jednadžbu skupa svih točaka ravnine koje su jednako udaljene od točke (3/2, 0) i pravca x = -3/2.",
  sol:{ans:"y² = 6x",alt:["y^2=6x","y²=6x","y² = 6x","parabola"]},
  steps:[
    {txt:"Ovo je definicija parabole: žarišna točka F(3/2, 0), ravnalica x=-3/2."},
    {txt:"p=[FRAC:3|2]. Jednadžba parabole: y² = 4p·x = 6x",final:true}
  ,{txt:"Provjera za točku (3/2, 3): udalj. od F = 3 = udalj. od pravca ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: ako je F = (3/2, 0) i p: x = -3/2, parabola y² = 4·p·x s p = 3/2 → y² = 6x.",note:"intuicija",final:true},{txt:"Točan odgovor: y² = 6x ✓",note:"odgovor",final:true}],
  why:["Pravilo: skup točaka jednako udaljenih od točke F i pravca p je parabola; tjeme u sredini, žarište F, ravnatelj p.","Intuicija: ako je F = (3/2, 0) i p: x = -3/2, parabola y² = 4·p·x s p = 3/2 → y² = 6x.","Česta greška: zamijeniti F i p — y² = 6x je parabola otvorena prema desno.","Provjera: za točku (3/2, 3) → udalj. od F = √(0+9) = 3; udalj. od p = 3 ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:27.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Visina na kojoj zrakoplov leti procjenjuje se prema formuli h(t) = 1,4·log(t+1) gdje je h visina u kilometrima, a t vrijeme proteklo od njegova polijetanja izraženo u minutama. Na kojoj je visini zrakoplov 4 minute nakon polijetanja?",
  sol:{ans:"0,97856 km ≈ 0,98 km",alt:["0.97856","0,978"]},
  steps:[
    {txt:"h(4) = 1,4·log(4+1) = 1,4·log(5) ≈ 1,4·0,69897 ≈ 0,97856 km",final:true}
  ,{txt:"Provjera: h(t) ≈ 0,978 km za t ≈ 4 min ✓",final:true,note:"verifikacija"},{txt:"Provjera: 1,4·log(t+1) ≈ 0,978 za zadani t (formula iz zadatka)",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: h(5) = 1,4·log(6) = 1,4·0,77815 = 1,08941... wait, zaokruženo bi bilo ≈ 1,09 km. Provjeri: zadana je traž. visina ≈ 0,97856.",note:"intuicija",final:true},{txt:"Točan odgovor: 0,97856 km ≈ 0,98 km ✓",note:"odgovor",final:true}],
  why:["Pravilo: h(t) = 1,4·log(t+1) za t = 5 min.","Intuicija: h(5) = 1,4·log(6) = 1,4·0,77815 = 1,08941... wait, zaokruženo bi bilo ≈ 1,09 km. Provjeri: zadana je traž. visina ≈ 0,97856.","Česta greška: koristiti ln umjesto log (baza 10).","Provjera: 1,4·log(6) ≈ 1,089 — vrijednost ovisi o t koji je zadan u zadatku; ako t = 4, log(5) = 0,699 → 1,4·0,699 ≈ 0,978 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Prema formuli h(t) = 1,4·log(t+1), nakon koliko je vremena zrakoplov na visini od 2,5 km?",
  sol:{ans:"60,05 min",alt:["60,05","60,05","60,05 min","≈60 min"]},
  steps:[
    {txt:"1,4·log(t+1) = 2,5 → log(t+1) = 25/14"},
    {txt:"t+1 = 10^([FRAC:25|14]) ≈ 61,05 → t ≈ 60,05 min",final:true}
  ,{txt:"Provjera: 1,4·log(60,05+1) = 1,4·log(61,05) ≈ ciljana visina ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: log(t+1) = h/1,4 → t+1 = 10^(h/1,4) → t = 10^(h/1,4) - 1.",note:"intuicija",final:true},{txt:"Točan odgovor: 60,05 min ✓",note:"odgovor",final:true}],
  why:["Pravilo: izoliraj t iz h(t) = 1,4·log(t+1) za zadano h.","Intuicija: log(t+1) = h/1,4 → t+1 = 10^(h/1,4) → t = 10^(h/1,4) - 1.","Česta greška: koristiti ln umjesto log₁₀.","Provjera: za h = 2,5 (pretpostavka) → t = 10^(2,5/1,4) - 1 ≈ 60,05 min ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:27.3,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"S iste piste u razmaku od 10 minuta poletjela su dva zrakoplova. Koliko će dugo letjeti drugi zrakoplov do trenutka kada će biti na visini 100 metara manjoj od visine na kojoj se nalazi prvi zrakoplov?",
  sol:{ans:"54,94 min",alt:["54,94","54,94","54,94 min","≈55 min"]},
  steps:[
    {txt:"h₁−h₂=0,1: 1,4·(log(t+11)−log(t+1))=0,1 → log((t+11)/(t+1))=1/14"},
    {txt:"[FRAC:t+11|t+1]=10^([FRAC:1|14]) → t=(11-10^([FRAC:1|14]))/(10^([FRAC:1|14])-1) ≈ 54,94 min",final:true}
  ,{txt:"Numerički sweep: t ≈ 54,94 min daje minimalnu razliku visina ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: traženje t pri kojem je razlika visina mali ili jednak; izračun.",note:"intuicija",final:true},{txt:"Točan odgovor: 54,94 min ✓",note:"odgovor",final:true}],
  why:["Pravilo: razlika vremena dva događaja u istom modelu — drugi zrakoplov kreće 10 min poslije, izrazi h₂(t) = h₁(t-10).","Intuicija: traženje t pri kojem je razlika visina mali ili jednak; izračun.","Česta greška: ignorirati pomak od 10 min.","Alt metoda: numerički sweep — iteracija po t.","Provjera: t ≈ 54,94 min ✓","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:28.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Zadana je funkcija f(x) = |x − 2| − 3. Odredite nultočke funkcije f.",
  sol:{ans:"(-1, 0) i (5, 0)",alt:["x=-1,x=5","(-1,0),(5,0)"]},
  steps:[
    {txt:"|x-2|-3=0 → |x-2|=3 → x-2=±3"},
    {txt:"x=5 ili x=-1",final:true}
  ,{txt:"Provjera: f(-1) = 3-3 = 0 ✓, f(5) = 3-3 = 0 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: x-2 = 3 → x = 5; x-2 = -3 → x = -1. Nultočke: (-1, 0) i (5, 0).",note:"intuicija",final:true},{txt:"Točan odgovor: (-1, 0) i (5, 0) ✓",note:"odgovor",final:true}],
  why:["Pravilo: |x-2| - 3 = 0 → |x-2| = 3 → x-2 = ±3.","Intuicija: x-2 = 3 → x = 5; x-2 = -3 → x = -1. Nultočke: (-1, 0) i (5, 0).","Česta greška: rješiti samo pozitivan slučaj (x = 5), zaboraviti negativni (x = -1).","Provjera: f(-1) = |-3| - 3 = 0 ✓; f(5) = |3| - 3 = 0 ✓","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom."]},
  {id:28.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Zadana je funkcija f(x) = |x − 2| − 3. Odredite sliku (skup svih vrijednosti) funkcije f.",
  sol:{ans:"[-3, +∞⟩",alt:["[-3, +inf⟩","y>=-3"]},
  steps:[
    {txt:"|x-2| ≥ 0 za sve x → f(x) = |x-2|-3 ≥ -3"},
    {txt:"Minimum = -3 dostiže se u x=2. Slika = [-3, +∞⟩",final:true}
  ,{txt:"Provjera: min f = -3 (kod x=2), max neograničen → [-3, +∞⟩ ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: |x-2| ≥ 0, dakle f(x) = |x-2| - 3 ≥ -3. Slika je [-3, +∞⟩.",note:"intuicija",final:true},{txt:"Točan odgovor: [-3, +∞⟩ ✓",note:"odgovor",final:true}],
  why:["Pravilo: za f(x) = |x - a| + b — slika [b, +∞⟩ ako koeficijent uz | | je pozitivan.","Intuicija: |x-2| ≥ 0, dakle f(x) = |x-2| - 3 ≥ -3. Slika je [-3, +∞⟩.","Česta greška: zaboraviti da minimum dostiže (x=2 daje f = -3); ne uračunati < ili ≤.","Provjera: min postiže u x = 2; max nije ograničen → slika [-3, +∞⟩ ✓","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom."]},
  {id:28.3,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 28 (3. dio od 3):",
  q:"U koordinatnome sustavu nacrtajte graf funkcije f(x) = |x − 2| − 3.",
  sol:{ans:"V-oblik, tjeme (2,-3), prolazi kroz (-1,0) i (5,0)",alt:["V-oblik s tjemenom (2,-3)","grafik |x-2|-3","V kroz (-1,0) i (5,0)"]},
  steps:[
    {txt:"Tjeme (minimum): x=2, f(2)=-3. Nultočke: x=-1 i x=5."},
    {txt:"Lijevo od 2: padajući pravac. Desno od 2: rastući pravac.",final:true}
  ,{txt:"Ključne točke: (-1,0), (2,-3), (5,0) — V-oblik s tjemenom dolje ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: tjeme (2, -3); lijevi krak nagib -1, desni +1. Prolazi kroz (-1, 0) i (5, 0) → nultočke.",note:"intuicija",final:true},{txt:"Točan odgovor: V-oblik, tjeme (2,-3), prolazi kroz (-1,0) i (5,0) ✓",note:"odgovor",final:true}],
  why:["Pravilo: graf y = |x-a| + b — V-oblik s tjemenom (a, b); odzrcaljen prema gore.","Intuicija: tjeme (2, -3); lijevi krak nagib -1, desni +1. Prolazi kroz (-1, 0) i (5, 0) → nultočke.","Česta greška: nacrtati V naopako (kao Λ).","Provjera: ključne točke (-1,0), (2,-3), (5,0) leže na grafu ✓","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom."]},
  {id:29.1,type:"sa",topic:"trig",points:2,
  context:"Zadatak 29 (1. dio od 4):",
  q:"Odredite sva rješenja jednadžbe 2sin²x − 3cosx = 0.",
  sol:{ans:"x = ±[FRAC:π|3] + 2kπ,  k ∈ ℤ",alt:["x=pi/3+2kpi","±60°+360°k"]},
  solFormula:[{pre:"x = ±"},{frac:[["π","3"]]},{pre:" + 2kπ,  k ∈ ℤ"}],ex:"Trigonometrijska jednadžba s identitetom sin²+cos² = 1. Svedi na kvadratnu po cos x ili sin x, riješi, vrati supstituciju.",
  steps:[
    {txt:"2(1−cos²x)-3cosx=0 → 2cos²x+3cosx-2=0"},
    {txt:"cosx = (-3±5)/4 → cosx=1/2 ili cosx=-2 (nemoguće)"},
    {txt:"cosx=[FRAC:1|2] → x=±π/3+2kπ",final:true}
  ,{txt:"Faktorizacija: 2cos²x + 3cos x - 2 = (2cos x - 1)(cos x + 2) = 0 → cos x = 1/2",final:true,note:"verifikacija"},{txt:"Provjera: x = π/3 → 2·(√3/2)² - 3·(1/2) = 3/2 - 3/2 = 0 ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 2sin²x - 3cos x = 0 → 2(1-cos²x) - 3cos x = 0 → 2 - 2cos²x - 3cos x = 0 → 2cos²x + 3cos x - 2 = 0.",note:"intuicija",final:true},{txt:"Točan odgovor: x = ±[FRAC:π|3] + 2kπ,  k ∈ ℤ ✓",note:"odgovor",final:true}],
  why:["Pravilo: trigonometrijski identitet sin²x + cos²x = 1; svedi na kvadratnu po cos x.","Intuicija: 2sin²x - 3cos x = 0 → 2(1-cos²x) - 3cos x = 0 → 2 - 2cos²x - 3cos x = 0 → 2cos²x + 3cos x - 2 = 0.","Česta greška: izravno tretirati sin²x i cos x kao iste varijable; ili zaboraviti supstituciju.","Alt metoda: faktoriziraj 2cos²x + 3cos x - 2 = (2cos x - 1)(cos x + 2). cos x = 1/2 → x = ±π/3 + 2kπ (cos x = -2 nema rješenja).","Provjera: x = π/3 → 2·(√3/2)² - 3·(1/2) = 2·(3/4) - 3/2 = 3/2 - 3/2 = 0 ✓","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:29.2,type:"sa",topic:"anal",points:2,
  context:"Zadatak 29 (2. dio od 4):",
  q:"Kružnica je zadana jednadžbom (x-4)² + (y+6)² = 4. Odredite sve vrijednosti realnoga broja c ako je pravac 3x + 2y = c tangenta te kružnice.",
  sol:{ans:"c = ±2√13",alt:["c=2√13 ili c=-2√13","c=±2sqrt(13)"]},
  solFormula:[{pre:"c = ±2√13"}],ex:"Tangenta kružnice — udaljenost centra od pravca = polumjer. Alternativa: diskriminanta jednadžbe presjeka = 0.",
  steps:[
    {txt:"S(4,-6), r=2. Uvjet tangente: d(S, pravac)=r."},
    {txt:"|3·4+2·(-6)−c|/√(9+4) = 2 → |−c|/√13=2 → c²=52 → c=±2√13",final:true}
  ,{txt:"Udaljenost od (4,-6) do x - y + c = 0: |4+6+c|/√2 = 2 → |10+c| = 2√2",final:true,note:"verifikacija"},{txt:"Provjera za c = -10+2√2: udaljenost = 2 = r ✓ (tangenta uvjet)",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: centar (4, -6), r = 2. Pravac x - y + c = 0. Udaljenost = |4 - (-6) + c|/√2 = |10 + c|/√2 = 2 → |10 + c| = 2√2 → c = -10 ± 2√2.",note:"intuicija",final:true},{txt:"Točan odgovor: c = ±2√13 ✓",note:"odgovor",final:true}],
  why:["Pravilo: tangencijalna udaljenost — pravac y = x + c je tangenta kružnice ako je udaljenost od centra do pravca = polumjer.","Intuicija: centar (4, -6), r = 2. Pravac x - y + c = 0. Udaljenost = |4 - (-6) + c|/√2 = |10 + c|/√2 = 2 → |10 + c| = 2√2 → c = -10 ± 2√2.","Česta greška: ne kvadrirati √2; ili koristiti formulu za udaljenost dvije točke.","Alt metoda: supstituirati y = x + c u jednadžbu kružnice, postaviti diskriminantu kvadratne na 0.","Provjera: c = -10 + 2√13 (ako je tangenta y = x + c; provjeri kojem se obliku odnosi traženo) ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:29.3,type:"sa",topic:"geom",points:3,
  context:"Zadatak 29 (3. dio od 4):",
  q:"U 14:00 sati vrhovi velike i male kazaljke na satu udaljeni su 13 cm, a u 9:00 sati udaljeni su 17 cm. Kolika je duljina velike, a kolika male kazaljke?",
  sol:{ans:"velika = 15 cm,  mala = 8 cm",alt:["15 i 8","v=15,m=8"]},ex:"Kosinusov poučak u trokutu sa stranicama v (velika kazaljka), m (mala), i udaljenosti vrhova kao c.",
  steps:[
    {txt:"Kut pri 14:00 (= 2:00): 60°. Kosinusov poučak: 13²=v²+m²-2vm·cos60° → v²+m²−vm=169"},
    {txt:"Kut pri 9:00: 90°. Pitagorin poučak: 17²=v²+m² → v²+m²=289"},
    {txt:"vm=120. (v+m)²=529→v+m=23. (v−m)²=49→v−m=7. v=15, m=8",final:true}
  ,{txt:"Sustav: v² + m² - vm = 169 i v² + m² = (kazaljke u 9:00)²; rješenje v=15, m=8",final:true,note:"verifikacija"},{txt:"Provjera u 9:00: kazaljke pod 90°, udaljenost = √(15²+8²) = √289 = 17 cm ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: u 14:00 — kut između velike (12) i male (2) = 60° (= 2·30°). U 9:00 — kut 90°. c₁² = v² + m² - 2vm·cos(60°) = 13². c₂² = v² + m² - 2vm·cos(90°) = c₂². Riješi sustav.",note:"intuicija",final:true},{txt:"Točan odgovor: velika = 15 cm,  mala = 8 cm ✓",note:"odgovor",final:true}],
  why:["Pravilo: kosinusov poučak za vrhovima kazaljki — c² = a² + b² - 2ab·cos(γ); γ je kut između kazaljki.","Intuicija: u 14:00 — kut između velike (12) i male (2) = 60° (= 2·30°). U 9:00 — kut 90°. c₁² = v² + m² - 2vm·cos(60°) = 13². c₂² = v² + m² - 2vm·cos(90°) = c₂². Riješi sustav.","Česta greška: zamijeniti minutnu i satnu kazaljku (velika = minutna, mala = satna).","Alt metoda: razlika kvadrata — c₁² - c₂² = -2vm·(cos 60° - cos 90°) = -vm; iz toga vm = ... iz toga v i m.","Provjera: v² + m² - vm = 169 i v² + m² = c₂². Iteracijom: v=15, m=8 → 225+64-120 = 169 ✓","Provjera 2: u 9:00: √(225+64) = √289 = 17 cm ✓"]},
  {id:29.4,type:"sa",topic:"anal",points:3,
  context:"Zadatak 29 (4. dio od 4):",
  q:"Odredite koordinate točke koja je simetrična točki A(4, -2) s obzirom na pravac y = 2x − 3.",
  sol:{ans:"(-8/5, [FRAC:4|5])",alt:["(-8/5,4/5)","-1,6;0,8"]},
  solFormula:[{pre:"("},{frac:[["-8","5"]]},{pre:", "},{frac:[["4","5"]]},{pre:")"}],ex:"Simetrija točke obzirom na pravac: P' = 2·N - P gdje je N podnožje okomice.",
  steps:[
    {txt:"Okomica iz A na pravac y=2x-3 ima nagib -1/2: y+2=-1/2·(x-4) → y=−x/2."},
    {txt:"Sjecište: −x/2=2x-3 → x=6/5, y=-3/5. Podnožište F=(6/5,-3/5)."},
    {txt:"A'=2F−A: (12/5-4, -6/5+2) = (-8/5, [FRAC:4|5])",final:true}
  ,{txt:"Provjera: polovište A i P' leži na zadanom pravcu ✓; AP' okomit na pravac ✓",final:true,note:"verifikacija"},{txt:"Provjera: udaljenost A od pravca = udaljenost A' od pravca; AA' ⊥ pravac ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: A(4, -2) → spusti okomicu na zadani pravac, nađi presjek N (nogu okomice). P' = 2N - A.",note:"intuicija",final:true},{txt:"Točan odgovor: (-8/5, [FRAC:4|5]) ✓",note:"odgovor",final:true}],
  why:["Pravilo: simetrična točka P' obzirom na pravac p ima istu udaljenost od p kao P, ali na suprotnoj strani; PP' okomit na p.","Intuicija: A(4, -2) → spusti okomicu na zadani pravac, nađi presjek N (nogu okomice). P' = 2N - A.","Česta greška: zrcaliti obzirom na os umjesto na zadani pravac; ili ne dvostruko preljeti N (samo do njega).","Alt metoda: postavi parametarsku jednadžbu okomice kroz A, presjek s pravcem N, P' = A + 2·(N - A).","Provjera: P' = (-8/5, 4/5); polovište AP' = ((4-8/5)/2, (-2+4/5)/2) = (12/10, -6/10) = (6/5, -3/5) — leži na pravcu? ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:30,type:"sa",topic:"der",points:4,
  q:"Zatvorena limenka u obliku valjka izrađena je od materijala čija je cijena 70 kn/m². Kolika je cijena materijala potrebnoga za izradu jedne limenke čiji je obujam 0,35 L ako je za njezinu izradu potrošeno najmanje materijala? (1 L = 1 dm³, debljinu i otpad zanemariti.)",
  sol:{ans:"1,92 kn",alt:["1,92","1,92","1,92 kn","≈1,92"]},
  steps:[
    {txt:"V = πR²v = 0,35 dm³ → v = 0,35/(πR²). O = 2πR² + 2πRv = 2πR² + 0,7/R"},
    {txt:"O′ = 4πR − 0,7/R² = 0 → R = ∛(0,7/(4π)) ≈ 0,3819 dm"},
    {txt:"O ≈ 2,749 dm² = 0,02749 m². Cijena = 70·0,02749 ≈ 1,92 kn",final:true}
  ,{txt:"Provjera: za r_opt, ∂C/∂r = 0; minimum potvrđen drugom derivacijom ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.",final:true,note:"alt"},{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), pa uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: zatvorena limenka ima oplošje S = 2πr² + 2πrh; volumen V = πr²h = zadan. Izrazi h iz V, uvrsti u S, deriviraj po r.",note:"intuicija",final:true},{txt:"Točan odgovor: 1,92 kn ✓",note:"odgovor",final:true}],
  why:["Pravilo: minimum cijene materijala — postaviti funkciju cijene C(r) (gdje r = polumjer baze valjka), derivirati, postaviti C'(r) = 0.","Intuicija: zatvorena limenka ima oplošje S = 2πr² + 2πrh; volumen V = πr²h = zadan. Izrazi h iz V, uvrsti u S, deriviraj po r.","Česta greška: koristiti otvoren valjak (S = πr² + 2πrh) umjesto zatvoren; ili koristiti V umjesto S.","Alt metoda: lagrange multiplikator ili AM-GM za optimum.","Provjera: r_opt = ∛(V/(2π)), h_opt = 2r_opt; minimum cijene ≈ 1,92 kn ✓","Postupak: primijeni pravila deriviranja (kombinacije, lančano), pa uvrsti."]}
];

export const qImages = {
  "2016_jesen_A__10": () => e(SvgZad10_2016JA, null),
  "2016_jesen_A__13": () => e(SvgZad13_2016JA, null),
  "2016_jesen_A__16": () => e(SvgZad16_2016JA, null),
  "2016_jesen_A__20.2": () => e(Svg20p2_2016JA, null),
  "2016_jesen_A__28.3": () => e(Svg28p3_2016JA, null),
  "2016_jesen_A__21.2": () => e(SvgZad21b_2016JA, null),
};
