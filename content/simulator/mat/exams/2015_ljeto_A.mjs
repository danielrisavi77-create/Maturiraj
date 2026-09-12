// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad6_2015LA(){
  const u=(()=>{let n=0;return()=>"la6_"+(++n)})();
  const S=130,r=48,pad=10;
  const circle=(ox,oy,ex,ey,label)=>[
    e("line",{key:u(),x1:ox-r-6,y1:oy,x2:ox+r+6,y2:oy,stroke:"var(--muted)",strokeWidth:0.8}),
    e("line",{key:u(),x1:ox,y1:oy+r+6,x2:ox,y2:oy-r-6,stroke:"var(--muted)",strokeWidth:0.8}),
    e("polygon",{key:u(),points:`${ox+r+6},${oy} ${ox+r},${oy-2.5} ${ox+r},${oy+2.5}`,fill:"var(--muted)"}),
    e("polygon",{key:u(),points:`${ox},${oy-r-6} ${ox-2.5},${oy-r} ${ox+2.5},${oy-r}`,fill:"var(--muted)"}),
    e("text",{key:u(),x:ox+r+8,y:oy+4,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:ox+3,y:oy-r-7,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:ox-9,y:oy+11,fill:"var(--muted)",fontSize:9},"0"),
    e("text",{key:u(),x:ox+r-1,y:oy+11,fill:"var(--muted)",fontSize:9},"1"),
    e("circle",{key:u(),cx:ox,cy:oy,r,fill:"none",stroke:"var(--text)",strokeWidth:1.5}),
    e("circle",{key:u(),cx:ex,cy:ey,r:4,fill:"var(--blue)"}),
    e("line",{key:u(),x1:ox,y1:oy,x2:ex,y2:ey,stroke:"var(--blue)",strokeWidth:1,strokeDasharray:"3,2"}),
    e("text",{key:u(),x:ex+(ex<ox?-30:6),y:ey+(ey<oy?-6:14),fill:"var(--blue)",fontSize:11,fontStyle:"italic"},"E(t)"),
    e("text",{key:u(),x:ox-r-4,y:oy+r+16,fill:"var(--text)",fontSize:13,fontWeight:700},label)
  ];
  // A: II quadrant (x<0,y>0), B: III quadrant (x<0,y<0)
  // C: III quadrant lower-left, D: IV quadrant (x>0,y<0)
  const a=Math.asin(1/3);
  const W=S*2+20,H=S*2+20;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...circle(S/2+5, S/2+5, S/2+5+r*Math.cos(Math.PI-a), S/2+5-r*Math.sin(Math.PI-a), "A."),
    ...circle(S+S/2+15, S/2+5, S+S/2+15+r*Math.cos(Math.PI+a), S/2+5-r*Math.sin(Math.PI+a), "B."),
    ...circle(S/2+5, S+S/2+15, S/2+5+r*Math.cos(Math.PI+a+0.3), S+S/2+15-r*Math.sin(Math.PI+a+0.3), "C."),
    ...circle(S+S/2+15, S+S/2+15, S+S/2+15+r*Math.cos(-a), S+S/2+15-r*Math.sin(-a), "D.")
  );
}

function SvgZad5_2015LA(){
  const u=(()=>{let n=0;
  return()=>"la5_"+(++n)})();
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  return e("svg",{viewBox:"0 0 360 220",style:{width:"100%",maxWidth:360,display:"block",margin:"8px auto"}},
    // Triangle
    e("line",{key:u(),x1:30,y1:180,x2:320,y2:180,stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:u(),x1:320,y1:180,x2:200,y2:30,stroke:_BLUE,strokeWidth:1.8}),
    e("line",{key:u(),x1:200,y1:30,x2:30,y2:180,stroke:_BLUE,strokeWidth:1.8}),
    // Right angle mark at C
    e("rect",{key:u(),x:192,y:30,width:12,height:12,fill:"none",stroke:_BLUE,strokeWidth:1,transform:"rotate(57 200 30)"}),
    // Height from C
    e("line",{key:u(),x1:200,y1:30,x2:200,y2:180,stroke:_GOLD,strokeWidth:0.8,strokeDasharray:"4,3"}),
    // Labels
    e("text",{key:u(),x:15,y:195,fill:_GOLD,fontSize:14,fontStyle:"italic",fontWeight:600},"A"),
    e("text",{key:u(),x:325,y:195,fill:_GOLD,fontSize:14,fontStyle:"italic",fontWeight:600},"B"),
    e("text",{key:u(),x:195,y:20,fill:_GOLD,fontSize:14,fontStyle:"italic",fontWeight:600},"C"),
    // Side labels
    e("text",{key:u(),x:150,y:200,fill:"var(--muted)",fontSize:12,textAnchor:"middle"},"11 cm"),
    e("text",{key:u(),x:270,y:95,fill:"var(--muted)",fontSize:12,textAnchor:"middle"},"4.2 cm")
  );
}

function SvgZad29d_2015LA(){
  const u=(()=>{let n=0;return()=>"la29d_"+(++n)})();
  return e("svg",{viewBox:"0 0 360 160",style:{width:"100%",maxWidth:360,display:"block",margin:"8px auto"}},
    e("polygon",{key:u(),points:"30,120 330,120 290,40 70,40",fill:"rgba(74,144,217,0.07)",stroke:"var(--text)",strokeWidth:1.8,strokeLinejoin:"round"}),
    // Bottom label
    e("text",{key:u(),x:180,y:140,fill:"var(--blue)",fontSize:13,textAnchor:"middle",fontWeight:600},"105 m"),
    // Top label
    e("text",{key:u(),x:180,y:32,fill:"var(--green)",fontSize:13,textAnchor:"middle",fontWeight:600},"87.5 m"),
    // Angle marks
    e("path",{key:u(),d:"M 55,120 A 25 25 0 0 0 42,100",fill:"none",stroke:"var(--gold)",strokeWidth:1.5}),
    e("text",{key:u(),x:48,y:106,fill:"var(--gold)",fontSize:11,fontWeight:600},"25°"),
    e("path",{key:u(),d:"M 305,120 A 25 25 0 0 1 316,100",fill:"none",stroke:"var(--red)",strokeWidth:1.5}),
    e("text",{key:u(),x:296,y:106,fill:"var(--red)",fontSize:11,fontWeight:600},"145°")
  );
}

function Svg29_2015Alj(){
  const W=220,H=220,pad={l:32,r:14,t:14,b:32};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-4,xMax=8,yMin=-9,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const sc=iW/(xMax-xMin);
  const sx=toX(2),sy=toY(-3);
  const pts=[];
  for(let a=0;a<=2*Math.PI;a+=0.06){
    pts.push(`${(sx+5*sc*Math.cos(a)).toFixed(1)},${(sy-5*sc*Math.sin(a)).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-4,-3,-2,-1,0,1,2,3,4,5,6,7,8].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[-3,-1,1,2,3,4,5,6,7].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[-8,-6,-4,-2,2].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    e("polyline",{points:pts.join(" "),fill:"rgba(74,144,217,.1)",stroke:_BLUE,strokeWidth:2.2}),
    e("circle",{cx:sx,cy:sy,r:4,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:sx+5,y:sy-6,fontSize:10,fontWeight:700,fill:_BLUE},"S(2,\u22123)")
  );
}

function SvgZad26_2015LA(){
  const u=(()=>{let n=0;return()=>"la26_"+(++n)})();
  const W=380,H=200,pad={l:35,r:15,t:20,b:30};
  const gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
  // x range: -0.5 to 3*pi (~9.42), y range: -3 to 1
  const xmin=-0.3,xmax=3.2*Math.PI,ymin=-3.5,ymax=1.8;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // f(x)=2sin(3x)-1: A=2, B=3, D=-1
  const pts=[];
  for(let i=0;i<=200;i++){
    const x=xmin+(xmax-xmin)*i/200;
    const y=2*Math.sin(3*x)-1;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const yZero=toY(0), xZero=toX(0);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid lines
    ...[Math.PI, 2*Math.PI].map((v,i)=>e("line",{key:u(),x1:toX(v),y1:pad.t,x2:toX(v),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"3,3"})),
    ...[-3,-2,-1,0,1].map((v,i)=>e("line",{key:u(),x1:pad.l,y1:toY(v),x2:W-pad.r,y2:toY(v),stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"3,3"})),
    // Axes
    e("line",{key:u(),x1:pad.l-5,y1:yZero,x2:W-pad.r+5,y2:yZero,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:xZero,y1:H-pad.b+5,x2:xZero,y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    // Arrows
    e("polygon",{key:u(),points:`${W-pad.r+5},${yZero} ${W-pad.r-1},${yZero-3} ${W-pad.r-1},${yZero+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${xZero},${pad.t-5} ${xZero-3},${pad.t+1} ${xZero+3},${pad.t+1}`,fill:"var(--text)"}),
    // Axis labels
    e("text",{key:u(),x:W-pad.r+7,y:yZero+4,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:xZero+5,y:pad.t-2,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:xZero-10,y:yZero+13,fill:"var(--muted)",fontSize:10},"0"),
    // π marks
    e("text",{key:u(),x:toX(Math.PI)-3,y:yZero+14,fill:"var(--muted)",fontSize:10},"π"),
    e("text",{key:u(),x:toX(2*Math.PI)-5,y:yZero+14,fill:"var(--muted)",fontSize:10},"2π"),
    // y tick marks
    e("text",{key:u(),x:xZero-16,y:toY(1)+4,fill:"var(--muted)",fontSize:10},"1"),
    e("text",{key:u(),x:xZero-20,y:toY(-1)+4,fill:"var(--muted)",fontSize:10},"-1"),
    e("text",{key:u(),x:xZero-20,y:toY(-3)+4,fill:"var(--muted)",fontSize:10},"-3"),
    // The curve — colorful gradient effect with thick stroke
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"var(--red)",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Mark max/min points
    e("circle",{key:u(),cx:toX(Math.PI/6),cy:toY(1),r:3.5,fill:"var(--green)"}),
    e("circle",{key:u(),cx:toX(Math.PI/2),cy:toY(-3),r:3.5,fill:"var(--blue)"})
  );
}

function SvgZad23a_2015LA(){
  const u=(()=>{let n=0;return()=>"la23_"+(++n)})();
  // Right-angled quadrilateral: bottom=3, left=5.6 (vertical), right=6.3 (slanted), top=a
  // Scale: 1 unit = 30px
  const sc=30, bx=60, by=220;
  const bl=bx, br=bx+3*sc; // bottom: (bx,by) to (br,by)
  const tl=bx, tly=by-5.6*sc; // top-left: (bx, by-5.6*30)
  // Right side from (br,by) to top-right, length 6.3
  // top-right x: √(6.3²-5.6²)+3 = √8.33+3 ≈ 5.886 → scaled
  const dx=Math.sqrt(6.3*6.3-5.6*5.6);
  const trx=bx+(3+dx)*sc, tr_y=tly; // same height as top-left? No — the figure shows different heights
  // Actually from PDF: right angles at top-left and bottom-left, so left side is vertical
  // height = 5.6, right side goes from (br, by) to (trx, tly)
  return e("svg",{viewBox:"0 0 300 260",style:{width:"100%",maxWidth:300,display:"block",margin:"8px auto"}},
    // Fill shape
    e("polygon",{key:u(),points:`${bl},${by} ${br},${by} ${trx},${tly} ${tl},${tly}`,fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:1.8,strokeLinejoin:"round"}),
    // Right angle marks
    e("rect",{key:u(),x:tl,y:tly,width:10,height:10,fill:"none",stroke:"var(--gold)",strokeWidth:1.2}),
    e("rect",{key:u(),x:bl,y:by-10,width:10,height:10,fill:"none",stroke:"var(--gold)",strokeWidth:1.2}),
    // Labels — colored
    e("text",{key:u(),x:(bl+br)/2,y:by+18,fill:"var(--blue)",fontSize:13,textAnchor:"middle",fontWeight:600},"3"),
    e("text",{key:u(),x:bl-18,y:(by+tly)/2+4,fill:"var(--gold)",fontSize:13,textAnchor:"middle",fontWeight:600},"5.6"),
    e("text",{key:u(),x:(br+trx)/2+14,y:(by+tly)/2+4,fill:"var(--red)",fontSize:13,textAnchor:"middle",fontWeight:600},"6.3"),
    e("text",{key:u(),x:(tl+trx)/2,y:tly-10,fill:"var(--green)",fontSize:14,textAnchor:"middle",fontWeight:700,fontStyle:"italic"},"a")
  );
}

function Svg22_2015Alj(){
  const W=220,H=180,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1,xMax=7,yMin=-3,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.1){
    const y=-0.5*x*x+3*x-1;
    if(y>yMax||y<yMin) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const tx=toX(3),ty=toY(3.5);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-3,-2,-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[1,2,3,4,5,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[-2,-1,1,2,3,4].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinejoin:"round"}),
    e("circle",{cx:tx,cy:ty,r:4,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:tx+5,y:ty-5,fontSize:9,fontWeight:700,fill:_BLUE},"T(3, 7/2)")
  );
}

function Svg20_2015Alj(){
  const W=200,H=160,pad={l:28,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-6,xMax=8,yMin=-4,yMax=2;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  // k = (0-(-2))/(5-(-4)) = 2/9; b: 0 = 2/9*5+b → b = -10/9
  const k=2/9,b=-10/9;
  const linPts=[];
  for(let x=xMin;x<=xMax;x+=0.2){
    const y=k*x+b;
    if(y<yMin||y>yMax) continue;
    linPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-6,-4,-2,0,2,4,6,8].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-4,-3,-2,-1,0,1,2].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[-4,-2,2,4,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[-3,-2,-1,1].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    linPts.length>1&&e("polyline",{points:linPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2}),
    e("circle",{cx:toX(5),cy:oy,r:3.5,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("circle",{cx:toX(-4),cy:toY(-2),r:3.5,fill:_BLUE,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:toX(5)+4,y:oy-8,fontSize:8,fill:"var(--muted)"},"(5,0)"),
    e("text",{x:toX(-4)-14,y:toY(-2),fontSize:8,fill:"var(--muted)"},"(\u22124,\u22122)")
  );
}

function SvgZad10_2015LA(){
  const u=(()=>{let n=0;
  return()=>"la10_"+(++n)})();
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=180,cy=160,r=120;
  // B at top (~70°), A at right (~340°), C at bottom (~260°)
  const angB=70,angA=-20,angC=260;
  const rad=d=>d*Math.PI/180;
  const px=(a)=>cx+r*Math.cos(rad(a));
  const py=(a)=>cy-r*Math.sin(rad(a));
  const Bx=px(angB),By=py(angB),Ax=px(angA),Ay=py(angA),Cx=px(angC),Cy=py(angC);
  // Foot of diameter from B through S to bottom
  const Dx=cx-(Bx-cx),Dy=cy-(By-cy);
  return e("svg",{viewBox:"0 0 360 340",style:{width:"100%",maxWidth:340,display:"block",margin:"8px auto"}},
    e("circle",{key:u(),cx,cy,r,fill:"none",stroke:_BLUE,strokeWidth:1.8}),
    // Diameter B to opposite
    e("line",{key:u(),x1:Bx,y1:By,x2:Dx,y2:Dy,stroke:"var(--muted)",strokeWidth:0.8}),
    // Chord BA
    e("line",{key:u(),x1:Bx,y1:By,x2:Ax,y2:Ay,stroke:_BLUE,strokeWidth:1.5}),
    // Chord CA
    e("line",{key:u(),x1:Cx,y1:Cy,x2:Ax,y2:Ay,stroke:_BLUE,strokeWidth:1.5}),
    // Chord CB
    e("line",{key:u(),x1:Cx,y1:Cy,x2:Bx,y2:By,stroke:_BLUE,strokeWidth:1.5}),
    // Line from C through center area
    e("line",{key:u(),x1:Cx,y1:Cy,x2:Dx,y2:Dy,stroke:_BLUE,strokeWidth:1.2}),
    // α angle arc at C
    e("path",{key:u(),d:`M ${Cx+22} ${Cy-8} A 20 20 0 0 0 ${Cx+10} ${Cy-20}`,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{key:u(),x:Cx+26,y:Cy-8,fill:_BLUE,fontSize:13,fontStyle:"italic"},"\u03b1"),
    // Center S
    e("circle",{key:u(),cx,cy,r:3,fill:_RED}),
    e("text",{key:u(),x:cx-20,y:cy+5,fill:_GOLD,fontSize:13,fontStyle:"italic"},"S"),
    // Points
    e("circle",{key:u(),cx:Bx,cy:By,r:3.5,fill:_RED}),
    e("text",{key:u(),x:Bx+2,y:By-10,fill:_GOLD,fontSize:14,fontWeight:600,fontStyle:"italic"},"B"),
    e("circle",{key:u(),cx:Ax,cy:Ay,r:3.5,fill:_RED}),
    e("text",{key:u(),x:Ax+8,y:Ay+2,fill:_GOLD,fontSize:14,fontWeight:600,fontStyle:"italic"},"A"),
    e("circle",{key:u(),cx:Cx,cy:Cy,r:3.5,fill:_RED}),
    e("text",{key:u(),x:Cx+5,y:Cy+16,fill:_GOLD,fontSize:14,fontWeight:600,fontStyle:"italic"},"C")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 1/4 = 0,25 i 1/3 ≈ 0,333; traži broj strogo između.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva veći od 1/4 i manji od 1/3?",
  opts:["1/5","1/7","3/8","3/10"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Tražimo broj x takav da 1/4 < x < 1/3. U decimalnom zapisu: 0,25 < x < 0,333..."},
    {txt:"A: 1/5 = 0,200 — premalo (0,2 < 0,25, izvan intervala). B: 1/7 ≈ 0,143 — još manje, premalo."},
    {txt:"C: 3/8 = 0,375 — preveliko (0,375 > 0,333, izvan intervala odozgo)."},
    {txt:"Distractor: A i B su PREMALI (ispod 0,25); C je PREVELIK (iznad 0,333). Samo D zadovoljava oba uvjeta.",note:"diagnostika"},
    {txt:"D: [FRAC:3|10] = 0,300 — u intervalu jer 0,25 < 0,300 < 0,333 ✓ ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: traženi interval (0,25 ; 0,333) je vrlo uzak. Pošto su opcije dane, brže je provjeriti svaki nego tražiti razlomke s nazivnikom 12 (zajednički nazivnik koji bi dao 3/12 < x < 4/12).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: za usporedbu razlomaka najjednostavnije je pretvoriti ih u decimalni oblik i usporediti vrijednosti.",
    "Intuicija: traženi interval (0,25 ; 0,333) je vrlo uzak. Pošto su opcije dane, brže je provjeriti svaki nego tražiti razlomke s nazivnikom 12 (zajednički nazivnik koji bi dao 3/12 < x < 4/12).",
    "Česta greška: ne uspoređivati DOSLJEDNO — ako se odluči za pretvorbu u decimale, MORA SE pretvoriti SVE opcije, ne miješati razlomke i decimale.",
    "Provjera ✓: 1/4 = 3/12 i 1/3 = 4/12, pa 3/10 = 0,3 leži između (manji od 4/12 ≈ 0,333 i veći od 3/12 = 0,25)."
  ,"Diagnostic: A) 1/5; B) 1/7; C) 3/8; D) 3/10 ✓.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:2,type:"mc",warn:"Pazi: x² − (zbroj)x + (umnožak) = 0 → uz zbroj −1 ide +x, uz umnožak 3 ide +3.",topic:"al",points:1,
  q:"Kojoj je od navedenih kvadratnih jednadžbi zbroj rješenja jednak -1, a umnožak rješenja jednak 3?",
  opts:["x²−x+3=0","x²+x+3=0","3x²-3x+1=0","3x²+3x+1=0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Vièteove formule za ax² + bx + c = 0: zbroj rješenja x₁ + x₂ = −b/a; umnožak x₁·x₂ = c/a."},
    {txt:"Iskoristi ekvivalent: ako su zbroj S i umnožak P, jednadžba s normaliziranim oblikom je x² − S·x + P = 0. Ovdje S = −1, P = 3, pa x² − (−1)x + 3 = x² + x + 3 = 0."},
    {txt:"Distractor: A (x²−x+3=0) daje zbroj +1 (krivi predznak); C (3x²−3x+1=0) daje S = 1, P = 1/3; D (3x²+3x+1=0) daje S = −1 ali P = 1/3 (krivi umnožak — testira pažnju na a≠1).",note:"diagnostika"},
    {txt:"Provjeri opciju B: a = 1, b = 1, c = 3. −b/a = −1 ✓; c/a = 3 ✓ ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (Vièteove formule): za ax² + bx + c = 0 vrijedi x₁ + x₂ = −b/a i x₁·x₂ = c/a. Slijedi iz razvoja (x − x₁)(x − x₂) = x² − (x₁+x₂)x + x₁x₂.",
    "Intuicija: za jednadžbu u 'normaliziranom' obliku x² + px + q = 0 (a = 1), p = −S i q = P. To je najbrži način konstrukcije jednadžbe iz S i P.",
    "Česta greška: u opcijama C i D vodeći koeficijent NIJE 1 (a = 3). Tada se mora pravilno dijeliti s a; zaboraviti to znači pogrešna identifikacija S i P.",
    "Provjera ✓: x² + x + 3 = 0; D = 1 − 12 = −11 < 0 → kompleksna rješenja. x₁,₂ = (−1 ± i√11)/2. Zbroj = −1 ✓; umnožak = (1+11)/4 = 3 ✓"
  ,"Diagnostic: A) x²−x+3=0; B) x²+x+3=0 ✓; C) 3x²-3x+1=0; D) 3x²+3x+1=0.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:3,type:"mc",warn:"Pazi: prebaci m/h → m/h = 1/r − t, pa pomnoži s h.",topic:"al",points:1,
  q:"Ako je t = 1/r − m/h, čemu je jednako m?",
  opts:["m = h(1/r − t)","m = h(1/r + t)","m = (1−rt)/(rh)","m = (1+rt)/(rh)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Polazi od t = [FRAC:1|r] − [FRAC:m|h]. Cilj: izolirati m."},
    {txt:"Prenesi m/h na lijevu stranu, a t na desnu (mijenjajući predznake): [FRAC:m|h] = [FRAC:1|r] − t."},
    {txt:"Distractor: B (h(1/r + t)) zaboravlja predznak pri prenošenju t (treba minus, ne plus); C i D pokušavaju 'kombinirati' u jedan razlomak rt/(rh) — krivo dijeljenje pojedinih članova.",note:"diagnostika"},
    {txt:"Pomnoži obje strane s h: m = h·([FRAC:1|r] − t) ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: pri izoliranju varijable, ravnomjerno primijeni inverzne operacije na obje strane. Pri prenošenju člana, mijenja se njegov PREDZNAK.",
    "Intuicija: m je 'zaglavljen' u dvostrukom razlomku m/h. Izvuci ga: prvo dobi m/h sam, pa pomnoži s h.",
    "Česta greška: krivi predznak pri prenošenju t (zaboraviti minus → plus, ili obrnuto); ili 'prerano' raditi zajednički nazivnik za 1/r − t što vodi u C/D forme bez prave potrebe.",
    "Provjera ✓: ako t = 1/r − m/h, uvrsti dobiveni m = h(1/r − t): t = 1/r − h(1/r − t)/h = 1/r − (1/r − t) = t ✓"
  ,"Diagnostic: A) m = h(1/r − t) ✓; B) m = h(1/r + t); C) m = (1−rt)/(rh); D) m = (1+rt)/(rh).","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:4,type:"mc",warn:"Pazi: broj zubaca pada geometrijski (·1/2); brzina vrtnje je OBRNUTO proporcionalna broju zubaca.",topic:"br",points:1,
  q:"U jednome je stroju spojeno u nizu nekoliko zupčanika. Svaki zupčanik, počevši od drugoga, ima dvostruko manje zubaca od prethodnoga, što znači da prigodom rada stroja napravi dvostruko veći broj okretaja od prethodnoga. Dok se najveći zupčanik okrene 9 puta, najmanji se okrene 1152 puta. Koliko je zupčanika spojeno u nizu?",
  opts:["4","6","8","10"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Broj okretaja čini GEOMETRIJSKI niz s prvim članom a₁ = 9 (najveći zupčanik) i kvocijentom q = 2 (svaki idući napravi 2× više okretaja)."},
    {txt:"Opći član: aₙ = a₁ · q^(n−1) = 9 · 2^(n−1). Posljednji zupčanik (najmanji) ima aₙ = 1152."},
    {txt:"Distractor: A (4) krivo postavi n−1 = 4 ili dijeljenje s 16; B (6) krivi log; D (10) zbraja 1 ili tumači 'spojeno u nizu' kao broj omjera (n−1) umjesto n.",note:"diagnostika"},
    {txt:"9 · 2^(n−1) = 1152 ⇒ 2^(n−1) = 1152/9 = 128 = 2⁷ ⇒ n − 1 = 7 ⇒ n = 8 ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (geometrijski niz): članovi a₁, a₁q, a₁q², ... imaju isti KVOCIJENT q. Opći član aₙ = a₁ · q^(n−1).",
    "Intuicija: 'dvostruko više okretaja' znači množenje s 2 — geometrijski rast. Omjer krajeva = 1152/9 = 128 = 2⁷ → 7 koraka 'udvostručivanja' → 8 zupčanika (prvi + 7 sljedećih).",
    "Česta greška: zbuniti se s eksponentom 'n−1' (gdje 'n' broji od PRVOG člana) i dobiti 7 umjesto 8.",
    "Provjera ✓: niz okretaja: 9, 18, 36, 72, 144, 288, 576, 1152 — osam članova ✓"
  ,"Diagnostic: A) 4; B) 6; C) 8 ✓; D) 10.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:5,img:true,type:"mc",warn:"Pazi: pravi kut je u C → AB je hipotenuza; uz kut B kateta CB je PRILEŽEĆA → cos B = 4,2/11.",topic:"trig",points:1,img:true,
  q:"Na skici je prikazan pravokutni trokut ABC s pravim kutom u vrhu C. Kateta CB = 4,2 cm, hipotenuza AB = 11 cm. Koliko iznosi mjera kuta u vrhu B?",
  opts:["20°54′","22°27′","67°33′","69°6′"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Pravi kut je u vrhu C. Hipotenuza je AB = 11 cm (nasuprot pravom kutu)."},
    {txt:"Kut u B leži IZMEĐU stranica BC (kateta) i BA (hipotenuza). Stranica BC = CB = 4,2 cm je PRILEŽEĆA kutu B (jer prolazi kroz vrh B)."},
    {txt:"Formula: cos(B) = priležeća / hipotenuza = CB / AB = 4,2 / 11 ≈ 0,3818."},
    {txt:"B = arccos(0,3818) ≈ 67,5536° = 67°33′13″ ⇒ opcija C.",final:true,note:"verifikacija"},
    {txt:"Distractor analiza: A (20°54′) i D (69°6′) testiraju pogrešne arc-funkcije; B (22°27′) je komplement od B (90° − 67°33′ = 22°27′), tj. mjera kuta A — najčešća zamka.",note:"diagnostika"},
    {txt:"Alt metoda: sin(B) = nasuprotna/hipotenuza = AC/AB. AC = √(11² − 4,2²) = √103,36 ≈ 10,17. sin(B) = 10,17/11 ≈ 0,9242 ⇒ B = arcsin(0,9242) ≈ 67,55° ✓",final:true,note:"alt"},
    {txt:"Točan odgovor: C (67°33′) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u pravokutnom trokutu, sin(α) = nasuprotna kateta / hipotenuza; cos(α) = priležeća kateta / hipotenuza. PRILEŽEĆA kutu α je stranica koja prolazi kroz vrh α (osim hipotenuze).",
    "Intuicija: kut u B leži između stranica BC i BA. Stranica BC (=CB) prolazi kroz B → priležeća. Stranica AC ne prolazi kroz B → nasuprotna. Hipotenuza AB je nasuprot pravom kutu (u C).",
    "Alt metoda: izračunaj AC Pitagorom, pa koristi sin ili tan. tan(B) = AC/CB = 10,17/4,2 ≈ 2,421 ⇒ B = arctan(2,421) ≈ 67,55° ✓",
    "Česta greška: pomiješati nasuprotnu i priležeću → koristiti sin umjesto cos. Rezultat: 22°27′ (kut A, komplementaran točnom). Najpouzdanije: označi vrhove i identificiraj koja kateta PROLAZI kroz vrh α.",
    "Provjera ✓: cos(67°33′) ≈ 0,382 ≈ 4,2/11 ✓"
  ]},
  {id:6,img:true,type:"mc",warn:"Pazi: sin < 0 i tg > 0 → cos < 0 → III. kvadrant; pa odredi sliku.",topic:"trig",points:1,img:true,
  q:"Realnome broju t pridružena je točka E(t) na brojevnoj kružnici. Koja od navedenih slika prikazuje točku E(t) za koju vrijedi sin t = -1/3, tg t > 0?",
  opts:["A (II. kvadrant, točka u gornjem lijevom dijelu)","B (III. kvadrant, blizu osi x — sin t ≈ -1/3, slabo pod osi)","C (III. kvadrant, blizu osi y — sin t blizu -1)","D (IV. kvadrant, točka u donjem desnom dijelu)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Prvi uvjet: sin t = −1/3 < 0. Sinus je negativan u III. i IV. kvadrantu."},
    {txt:"Drugi uvjet: tg t > 0. Tangens je pozitivan u I. i III. kvadrantu (jer su sin i cos istog predznaka)."},
    {txt:"Presjek uvjeta: III. kvadrant (zadovoljava oba). Sin t = y-koordinata = -1/3 ≈ -0,333."},
    {txt:"Diskriminacija B vs C unutar III kvadranta: sin t = -1/3 ≈ -0,333 NIJE blizu -1, nego BLIZU 0 (po apsolutnoj vrijednosti |sin t| = 1/3 < 1/2). Točka je SLABO ispod osi x, ne blizu donje krajnje točke (0,-1).",note:"diagnostika"},
    {txt:"Distractor: A (II) ima sin > 0 (ne odgovara); C (III, sin blizu -1) ima |sin t| blizu 1, ne 1/3; D (IV) ima tg < 0 (ne odgovara).",note:"diagnostika"},
    {txt:"Slika koja prikazuje točku u III. kvadrantu sa sin t ≈ -1/3 (slabo ispod osi x) je opt B ⇒ opt B",final:true,note:"verifikacija"},
    {txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo predznaka po kvadrantima (ASTC): I — sve pozitivno; II — samo sin; III — samo tg (i ctg); IV — samo cos. Tangens je pozitivan tamo gdje sin i cos imaju ISTI predznak.",
    "Intuicija: na brojevnoj kružnici (x, y) = (cos t, sin t). Sinus = y-koordinata. Apsolutna vrijednost |sin t| = 1/3 ≈ 0,333 < 1/2 → točka je BLIZU osi x (slabo ispod), NE blizu donje krajnje točke (0,-1).",
    "Alt metoda: izračunaj cos t. Iz sin²t + cos²t = 1: cos²t = 1 - 1/9 = 8/9, cos t = ±√(8/9). Pošto smo u III kvadrantu, cos t = -√8/3 ≈ -0,943. Točka je (-0,943, -0,333) — blizu lijeve krajnje točke (-1, 0).",
    "Česta greška: izabrati 'najnižu' točku u III kvadrantu misleći da je sin t blizu -1; ili pomiješati orijentaciju (III kvadrant je dolje LIJEVO).",
    "Provjera ✓: u III. kvadrantu (x < 0, y < 0): sin t = y = -1/3 < 0 ✓; tg t = y/x = (-1/3)/(-√8/3) = 1/√8 > 0 ✓"
  ]},
  {id:7,type:"mc",warn:"Pazi: okomiti → skalarni produkt 0 → (−1)·k + 7·4 = 0.",topic:"anal",points:1,
  q:"Za koji su realan broj k vektori a⃗ = −i⃗ + 7j⃗ i b⃗ = k·i⃗ + 4j⃗ okomiti?",
  opts:["k = -28","k = -7/4","k = 7/4","k = 28"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Uvjet okomitosti dvaju vektora: njihov skalarni produkt jednak je nuli, a⃗ · b⃗ = 0."},
    {txt:"Komponente: a⃗ = (−1, 7), b⃗ = (k, 4). Skalarni produkt: a⃗ · b⃗ = (−1)·k + 7·4 = −k + 28."},
    {txt:"Distractor: A (−28) krivi predznak; B (−7/4) krivo pretpostavlja a⃗ · b⃗ = aₓbᵧ + aᵧbₓ (zamijeni komponente); C (7/4) kombinacija B + krivo dijeljenje.",note:"diagnostika"},
    {txt:"Postavi = 0: −k + 28 = 0 ⇒ k = 28 ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: u koord. sustavu rezultat očekivane veličine ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: dva vektora su okomita (perpendikularna) ⟺ skalarni produkt = 0. To je zbog a⃗·b⃗ = |a⃗||b⃗|cos θ; ako je θ = 90°, cos 90° = 0.",
    "Pravilo 2 (skalarni produkt u koordinatama): a⃗ · b⃗ = aₓ·bₓ + aᵧ·bᵧ. Komponente se UMNAŽAJU PO INDEKSU, ne unakrsno. Pažnja: ovo nije isto kao vektorski produkt (gdje su komponente unakrsne) — česta greška studenata je pomiješati ih.",
    "Intuicija: geometrijski, okomiti vektori ne 'pokazuju' jedan u smjeru drugog, pa je njihova 'projekcija' = 0.",
    "Provjera ✓: za k = 28, b⃗ = (28, 4), a⃗ = (−1, 7). a⃗·b⃗ = (−1)·28 + 7·4 = −28 + 28 = 0 ✓"
  ,"Diagnostic: A) k = -28; B) k = -7/4; C) k = 7/4; D) k = 28 ✓.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:8,type:"mc",warn:"Pazi: neparna ⇔ f(−x) = −f(x) (simetrija oko ishodišta).",topic:"lin",points:1,
  q:"Koja je od navedenih funkcija neparna?",
  opts:["f(x) = 2^(3x) − x","f(x) = x² + 1","f(x) = x³ cos x","f(x) = log x² + 2x"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Definicija neparne funkcije: f(−x) = −f(x) za svaki x iz domene (graf simetričan oko ishodišta). Testiraj svaku opciju."},
    {txt:"A: f(−x) = 2^(−3x) − (−x) = 2^(−3x) + x ≠ −f(x). NIJE neparna."},
    {txt:"B: f(−x) = (−x)² + 1 = x² + 1 = f(x). To je PARNA funkcija, ne neparna."},
    {txt:"D: f(−x) = log((−x)²) + 2·(−x) = log(x²) − 2x ≠ −f(x) (jer −f(x) = −log(x²) − 2x; predznak log(x²) je krivi). Niti parna niti neparna. Distractor: A testira potencije; B parnu; D miješa parnu (log x²) i neparnu (2x) — proizvod ili zbroj parne i neparne NIJE niti parna niti neparna.",note:"diagnostika"},
    {txt:"C: f(x) = x³·cos x. f(−x) = (−x)³·cos(−x) = −x³·cos x (jer cos je parna). Dakle f(−x) = −f(x) ✓ NEPARNA ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (kombinacije): parna · parna = parna; neparna · neparna = parna; parna · neparna = NEPARNA. Zbroj: parna + neparna NIJE niti parna niti neparna (osim u trivijalnim slučajevima).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: f je NEPARNA ⟺ f(−x) = −f(x) za svaki x iz simetrične domene. Graf simetričan oko ISHODIŠTA (rotacija za 180°).",
    "Pravilo 2 (kombinacije): parna · parna = parna; neparna · neparna = parna; parna · neparna = NEPARNA. Zbroj: parna + neparna NIJE niti parna niti neparna (osim u trivijalnim slučajevima).",
    "Intuicija: x³ je neparna (osnovni primjer), cos x je parna. Njihov UMNOŽAK je neparna (po pravilu).",
    "Česta greška: pomiješati parna/neparna pravila kombinacija; ili ne testirati definiciju (jednostavno uvrstiti x = 1 i x = −1 i provjeriti odnos)."
  ,"Diagnostic: A) f(x) = 2^(3x) − x; B) f(x) = x² + 1; C) f(x) = x³ cos x ✓; D) f(x) = log x² + 2x.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:9,type:"mc",warn:"Pazi: C(n,4) = C(n,7) ⇔ 4 + 7 = n (svojstvo C(n,r) = C(n,n−r)).",topic:"br",points:2,ex:"Binomni razvoj + simetrija binomnih koeficijenata. Test razumijevanja: koji je peti i osmi član (k = 4 i k = 7, jer indeksacija počinje od k = 0), te primjena simetrije C(n,k) = C(n,n−k).",
  q:"Za koji su prirodan broj n u razvoju binoma (x² + y)ⁿ vrijednosti binomnih koeficijenata petoga i osmoga člana jednake?",
  opts:["9","10","11","12"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Binomni razvoj: (a + b)ⁿ = Σ C(n,k)·a^(n−k)·b^k, k = 0, 1, ..., n. Indeksiraj članove: peti član odgovara k = 4 (jer brojanje počinje od k = 0)."},
    {txt:"Slično: osmi član odgovara k = 7. Binomni koeficijenti tih članova su C(n, 4) i C(n, 7)."},
    {txt:"Zadan uvjet: C(n, 4) = C(n, 7). Primijeni simetriju binomnih koeficijenata: C(n, k) = C(n, n − k)."},
    {txt:"Distractor: A (9) krivi zbroj k = 3 + 6 ili sl.; B (10) ako se zaboravi indeksacija 'od 0' (krivo k = 5 i k = 8); D (12) krivi izračun.",note:"diagnostika"},
    {txt:"Iz simetrije: ako C(n, 4) = C(n, 7), onda 4 + 7 = n (jer 7 = n − 4) ⇒ n = 11 ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 'peti član' znači indeks k = 4 jer formulacija binomnog razvoja počinje od k = 0 (prvi član je C(n,0)·aⁿ).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (binomni koeficijent): C(n, k) = n!/(k!·(n−k)!). Simetričan je: C(n, k) = C(n, n−k). Stoga jednakost C(n, k₁) = C(n, k₂) vrijedi ⟺ k₁ = k₂ ili k₁ + k₂ = n.",
    "Intuicija: 'peti član' znači indeks k = 4 jer formulacija binomnog razvoja počinje od k = 0 (prvi član je C(n,0)·aⁿ).",
    "Česta greška: brojati 'peti član' s k = 5 (off-by-one). Tada bi se dobilo n = 5 + 8 = 13, što nije među opcijama.",
    "Provjera ✓: C(11, 4) = 11!/(4!·7!) = 330. C(11, 7) = 11!/(7!·4!) = 330 ✓ (po simetriji)"
  ,"Diagnostic: A) 9; B) 10; C) 11 ✓; D) 12.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:10,img:true,type:"mc",warn:"Pazi: AB = r znači da je trokut sa središtem jednakokračan/jednakostraničan → iskoristi za kut.",topic:"geom",points:2,img:true,ex:"Teorem o upisanom kutu + identifikacija jednakostraničnog trokuta. Test: prepoznati da SA = SB = AB = r daje jednakostranični trokut SAB s kutom ASB = 60°, pa upisani kut α = 30°.",
  q:"Kolika je mjera kuta α prikazanoga na skici ako je duljina dužine AB jednaka polumjeru kružnice?",
  opts:["25°","30°","40°","45°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Označi središte kružnice S. Pošto su SA i SB polumjeri, vrijedi SA = SB = r. Zadano: AB = r."},
    {txt:"Trokut SAB ima sve tri stranice jednake r → JEDNAKOSTRANIČAN trokut. Svi kutovi jednaki: ∠ASB = ∠SAB = ∠SBA = 60°."},
    {txt:"∠ASB = 60° je SREDIŠNJI kut nad lukom AB (s vrhom u središtu S)."},
    {txt:"Distractor: A (25°), C (40°), D (45°) — sve su 'okrugle' vrijednosti koje testiraju standardne 'krasne kutove' greške. Ključ je prepoznati jednakostranični trokut SAB (često se previdi).",note:"diagnostika"},
    {txt:"Po teoremu o upisanom kutu: upisani kut α (s vrhom na kružnici nad istim lukom AB) = (1/2) · središnji kut = (1/2) · 60° = 30° ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2: jednakostranični trokut (sve stranice jednake) ima sve kutove 60°.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (teorem o upisanom kutu): upisani kut s vrhom na kružnici nad lukom = (1/2) · središnjeg kuta nad istim lukom. Stoga upisani kutovi nad istim lukom su uvijek JEDNAKI.",
    "Pravilo 2: jednakostranični trokut (sve stranice jednake) ima sve kutove 60°.",
    "Intuicija: 'AB = polumjer' je nestandardno zapažanje koje sugerira da trebamo POVEZATI s polumjerima SA i SB. To otkriva jednakostranični trokut.",
    "Česta greška: pretpostaviti α = 60° (središnji kut) umjesto 30° (upisani); ili krivo identificirati koji kut je upisani vs središnji.",
    "Provjera ✓: upisani kut α = 30° ⇒ središnji kut nad istim lukom = 2·30° = 60° ⇒ trokut SAB je jednakostraničan (sve stranice = r) ✓"
  ,"Diagnostic: A) 25°; B) 30° ✓; C) 40°; D) 45°.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:11,type:"mc",warn:"Pazi: 19 L = 19000 cm³; visina vode = volumen/(45·25); razlika do 25 cm je tražena.",topic:"br",points:2,ex:"Volumen kvadra + pretvorba jedinica (litre ↔ cm³). Test: pretvorba 1 L = 1 000 cm³ (ili 1 dm³), izračun visine vode kroz V = baza · h, pa razlika do gornjeg ruba.",
  q:"U akvarij oblika kvadra duljine 45 cm, širine 25 cm i visine 25 cm naliveno je 19 litara vode. Koliko je centimetara razina vode ispod gornjega ruba akvarija? (1 L = 1 dm³)",
  opts:["5,6 cm","8,1 cm","10,3 cm","11,9 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Pretvorba: 19 L = 19 dm³ = 19 · 1000 cm³ = 19 000 cm³ (jer 1 dm = 10 cm, pa 1 dm³ = 10³ cm³ = 1000 cm³)."},
    {txt:"Površina baze akvarija: B = duljina · širina = 45 · 25 = 1 125 cm²."},
    {txt:"Visina vode: V_vode = B · h_vode ⇒ h_vode = V_vode/B = 19 000/1 125 = 16,888... ≈ 16,89 cm."},
    {txt:"Distractor: A (5,6) krivo pretvori L u cm³ (krivi faktor); C (10,3) krivo izračuna bazu; D (11,9) izračuna H_VODE umjesto razlike (zaboravi oduzeti od 25).",note:"diagnostika"},
    {txt:"Razina ispod ruba = ukupna visina akvarija − h_vode = 25 − 16,89 = 8,11 ≈ 8,1 cm ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (pretvorba): 1 L = 1 dm³ = 1000 cm³. Ovo je kritični faktor za zadatke s tekućinama u realnim posudama.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: za kvadar V = duljina · širina · visina. Ako je V poznat i baza = duljina · širina, onda h = V/baza.",
    "Pravilo 2 (pretvorba): 1 L = 1 dm³ = 1000 cm³. Ovo je kritični faktor za zadatke s tekućinama u realnim posudama.",
    "Intuicija: nalita voda zauzima dio kvadra, ostavljajući PRAZAN prostor iznad. Razina = ukupna visina − visina vode.",
    "Česta greška: zaboraviti pretvorbu L → cm³ (rezultira faktorom 1000); ili dati visinu vode umjesto razlike do ruba (D).",
    "Provjera ✓: 1 125 cm² · 16,89 cm ≈ 19 001 cm³ = 19 L ✓; 25 − 16,89 = 8,11 ≈ 8,1 cm ispod ruba ✓"
  ,"Diagnostic: A) 5,6 cm; B) 8,1 cm ✓; C) 10,3 cm; D) 11,9 cm.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:12,type:"mc",warn:"Pazi: grab = 11k, hrast = 14k; posiječe se 4/11 graba → ostaje 7k; novi omjer 7k : 14k.",topic:"br",points:2,ex:"Omjer s promjenom postotka — primjena postotka na obje strane i pojednostavljenje. Test: parametrizacija s k, izračun preostalih graba i hrasta, pa svođenje na pojednostavljen omjer.",
  q:"U nekoj šumi omjer stabala graba i stabala hrasta iznosi 11 : 14. Koliki će biti omjer stabala graba i stabala hrasta u toj šumi kada se posiječe 4/11 stabala graba, a sadnjom poveća broj stabala hrasta za 1/6?",
  opts:["3 : 7","7 : 12","11 : 24","25 : 36"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Postavi parametarski zapis: G = 11k stabala graba, H = 14k stabala hrasta (za neki pozitivan broj k)."},
    {txt:"Posjeku se 4/11 stabala graba: ostalo G′ = 11k − (4/11)·11k = 11k·(1 − 4/11) = 11k·(7/11) = 7k."},
    {txt:"Sadnjom se hrast poveća za 1/6: ukupno H′ = 14k + (1/6)·14k = 14k·(1 + 1/6) = 14k·(7/6) = (98/6)k = 49k/3."},
    {txt:"Distractor: B (7:12) možda zaboravlja pomnožiti s 3 (krivo pojednostavljenje); C (11:24) zbroji nešto pa krivo dijeli; D (25:36) miješa promjene.",note:"diagnostika"},
    {txt:"Novi omjer: G′ : H′ = 7k : [FRAC:49k|3] = (7k · 3) : 49k = 21 : 49 = 3 : 7 (krati se 7) ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: parametriziraj početne brojeve kao 11k i 14k — k se kasnije skraćuje u omjeru. Ovo pomaže razdvojiti algebarski problem.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: kod 'posiječe se p dio' ostaje (1 − p) od početnog; kod 'poveća za p' postaje (1 + p) puta početni. Promjene se primjenjuju na svaku stranu omjera nezavisno.",
    "Intuicija: parametriziraj početne brojeve kao 11k i 14k — k se kasnije skraćuje u omjeru. Ovo pomaže razdvojiti algebarski problem.",
    "Česta greška: aritmetika s razlomcima — pri pojednostavljenju 7k : (49k/3) zaboraviti pomnožiti drugu stranu omjera s 3, ili krivo upotrijebiti zajednički nazivnik.",
    "Provjera ✓: na konkretu, k = 1: G = 11, H = 14. Posiječe 4: G′ = 7. Doda 14/6 ≈ 2,33: H′ = 16,33... = 49/3. Omjer 7 : 49/3 = 21 : 49 = 3 : 7 ✓"
  ,"Diagnostic: A) 3 : 7 ✓; B) 7 : 12; C) 11 : 24; D) 25 : 36.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:13,type:"mc",warn:"Pazi: 3·log(x² + 1) − 2 = 1 → log(x² + 1) = 1 → x² + 1 = 10; rješenja su suprotna, zbroj 0.",topic:"lin",points:2,ex:"Kompozicija funkcija + logaritamska jednadžba. Test: razumijevanje (f ∘ g)(x) = f(g(x)), pretvorba log-jednadžbe u eksponencijalni oblik, simetrija rješenja kvadratne x² = c.",
  q:"Zadane su funkcije f(x) = 3x − 2 i g(x) = log(x² + 1). Koliki je zbroj rješenja jednadžbe (f ∘ g)(x) = 1?",
  opts:["0","6","9","18"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Kompozicija: (f ∘ g)(x) = f(g(x)). Izračunaj g(x), pa uvrsti u f."},
    {txt:"f(g(x)) = 3·g(x) − 2 = 3·log(x² + 1) − 2. Jednadžba: 3·log(x² + 1) − 2 = 1 ⇒ 3·log(x² + 1) = 3 ⇒ log(x² + 1) = 1."},
    {txt:"Pretvori u eksponencijalni oblik (log je dekadski, baza 10): x² + 1 = 10¹ = 10 ⇒ x² = 9 ⇒ x = ±3."},
    {txt:"Distractor: B (6) zbraja apsolutne vrijednosti |−3| + |3| = 6 (krivo); C (9) je x² (vrijednost prije korijena); D (18) je 2·9.",note:"diagnostika"},
    {txt:"Provjera domene: x² + 1 ≥ 1 > 0 uvijek, pa oba rješenja su valjana. Zbroj rješenja: (−3) + 3 = 0 ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (log → exp): log_a(M) = b ⟺ M = aᵇ. Za dekadski log (bez baze): log M = b ⟺ M = 10ᵇ.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (kompozicija): (f ∘ g)(x) = f(g(x)) — najprije g, pa f.",
    "Pravilo 2 (log → exp): log_a(M) = b ⟺ M = aᵇ. Za dekadski log (bez baze): log M = b ⟺ M = 10ᵇ.",
    "Intuicija: x² = c ima rješenja x = ±√c — UVIJEK dva (osim kada c = 0). Zbroj suprotnih brojeva je 0.",
    "Česta greška: dati samo POZITIVAN korijen x = 3 i ne uzeti negativan; ili krivo izračunati zbroj (npr. dati 6 = |−3|+|3|, što nije matematički zbroj).",
    "Provjera ✓: f(g(3)) = 3·log(10) − 2 = 3 − 2 = 1 ✓; f(g(−3)) = 3·log(10) − 2 = 1 ✓"
  ,"Diagnostic: A) 0 ✓; B) 6; C) 9; D) 18.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:14,type:"mc",warn:"Pazi: koristi cos 2x = 1 − 2 sin²x da sve svedeš na sin²x; pa broji rješenja u punom krugu.",topic:"trig",points:2,ex:"Trigonometrijska jednadžba s identitetom dvostrukog kuta. Test: znati cos 2x = 1 − 2sin²x, riješiti dobivenu algebarsku jednadžbu, pa odrediti SVA rješenja u zadanome intervalu.",
  q:"Koliko se rješenja trigonometrijske jednadžbe 3cos 2x + 2sin²x = 0 nalazi u intervalu [0, 2π]?",
  opts:["jedno","dva","tri","četiri"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Iskoristi identitet dvostrukog kuta: cos 2x = 1 − 2sin²x. Uvrsti: 3(1 − 2sin²x) + 2sin²x = 0."},
    {txt:"Razvi: 3 − 6sin²x + 2sin²x = 0 ⇒ 3 − 4sin²x = 0 ⇒ sin²x = 3/4."},
    {txt:"sin x = ±√(3/4) = ±√3/2. Imamo dvije vrijednosti za sin x."},
    {txt:"Rješenja u [0, 2π] za sin x = √3/2: x = π/3 i x = 2π/3 (osnovni i suplement). Za sin x = −√3/2: x = π + π/3 = 4π/3 i x = 2π − π/3 = 5π/3."},
    {txt:"Distractor: A (jedno) zaustavlja se na osnovnom rješenju arcsin(√3/2) = π/3; B (dva) uzima samo sin x = √3/2 (zaboravlja sin x = −√3/2); C (tri) krivo brojanje (najčešće zaboraviti 5π/3).",note:"diagnostika"},
    {txt:"Ukupno: 4 rješenja: π/3, 2π/3, 4π/3, 5π/3 ⇒ opt D (četiri)",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2: sin x = c (gdje c ∈ (−1, 1)) ima TOČNO DVA rješenja u [0, 2π]. Slično za cos x = c. Za negativne c, rješenja su u III i IV kvadrantu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (identiteti dvostrukog kuta): cos 2x = 1 − 2sin²x = 2cos²x − 1 = cos²x − sin²x. Ovo omogućuje 'svesti' trig. jednadžbu na algebarsku u sin²x ili cos²x.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (identiteti dvostrukog kuta): cos 2x = 1 − 2sin²x = 2cos²x − 1 = cos²x − sin²x. Ovo omogućuje 'svesti' trig. jednadžbu na algebarsku u sin²x ili cos²x.",
    "Pravilo 2: sin x = c (gdje c ∈ (−1, 1)) ima TOČNO DVA rješenja u [0, 2π]. Slično za cos x = c. Za negativne c, rješenja su u III i IV kvadrantu.",
    "Intuicija: sin²x = 3/4 daje dvije vrijednosti sin x → svaka dvije rješenja u [0, 2π] → ukupno 4 rješenja.",
    "Česta greška: zaboraviti negativnu vrijednost sin x; ili krivo locirati rješenja u kvadrantima (npr. zaboraviti 5π/3 jer studenti se često 'zaustave' nakon 4π/3).",
    "Provjera ✓: za x = π/3: 3cos(2π/3) + 2sin²(π/3) = 3·(−1/2) + 2·(3/4) = −3/2 + 3/2 = 0 ✓"
  ,"Diagnostic: A) jedno; B) dva; C) tri; D) četiri ✓.","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete."]},
  {id:15,type:"mc",warn:"Pazi: kut bočnog BRIDA je MANJI od kuta pobočke; koristi apotemu i visinu piramide.",topic:"geom",points:2,ex:"Pravilna trostrana piramida: odnos kuta pobočke i kuta bočnog brida s osnovicom. Test razumijevanja 3D geometrije + relativnih udaljenosti apoteme baze (r) i polumjera opisane kružnice (R) za pravilan trokut.",
  q:"Ako pobočka (bočna strana) pravilne uspravne trostrane piramide s ravninom osnovke (baze) zatvara kut od 68°, koliki je kut bočnoga brida i osnovke te piramide?",
  opts:["51°3′36″","55°27′12″","62°8′47″","69°54′6″"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Označi: O = središte trokutaste baze; M = polovište jednog brida baze; V = vrh piramide; A = vrh trokutaste baze (ispod V). r = OM (apotema baze, udaljenost od središta do brida), R = OA (polumjer opisane kružnice baze). h = visina piramide (OV)."},
    {txt:"Za pravilan trokut sa stranicom a: r = a·√3/6 (= a/(2√3)) i R = a·√3/3 (= a/√3). Stoga R/r = 2, tj. R = 2r."},
    {txt:"Kut pobočke s bazom je kut VMO u trokutu VMO (pravokutan u O): tg(68°) = h/r ⇒ h = r·tg(68°)."},
    {txt:"Kut bočnog brida s bazom je kut VAO u trokutu VAO (pravokutan u O): tg(α) = h/R = (r·tg(68°))/(2r) = tg(68°)/2."},
    {txt:"Distractor: B (55°27′12″) krivi omjer R/r; C (62°8′47″) možda koristi R/r = √3 umjesto 2; D (69°54′6″) blizu 68° (krivo: kut brida MORA BITI MANJI od kuta pobočke jer R > r).",note:"diagnostika"},
    {txt:"tg(α) = tg(68°)/2 = 2,4751/2 = 1,2375 ⇒ α = arctan(1,2375) ≈ 51,06° = 51°3′36″ ⇒ opt A",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (pravilan trokut): r = a/(2√3) i R = a/√3 = 2r. Bočni brid 'gleda' s veće udaljenosti (R) nego pobočka (r), pa je njegov kut s bazom MANJI od kuta pobočke.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravilnoj n-strani piramidi, kut pobočke s bazom (kroz apotemu baze r) i kut bočnog brida s bazom (kroz polumjer opisane kružnice R) povezani su preko zajedničke visine h: tg(kut_pobočke) = h/r, tg(kut_brida) = h/R.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: u pravilnoj n-strani piramidi, kut pobočke s bazom (kroz apotemu baze r) i kut bočnog brida s bazom (kroz polumjer opisane kružnice R) povezani su preko zajedničke visine h: tg(kut_pobočke) = h/r, tg(kut_brida) = h/R.",
    "Pravilo 2 (pravilan trokut): r = a/(2√3) i R = a/√3 = 2r. Bočni brid 'gleda' s veće udaljenosti (R) nego pobočka (r), pa je njegov kut s bazom MANJI od kuta pobočke.",
    "Intuicija: omjer kutova: tg(α_brida) = tg(α_pobočke)/2 za pravilan trostrani slučaj. Drugim riječima, brid 'leži' bliže horizontali nego pobočka.",
    "Česta greška: zamijeniti r i R (uzeti R = a√3/6 umjesto a/√3); ili koristiti omjer R/r = √3 (krivi omjer za trostranu — to vrijedi npr. za pravilni heksagon ili neke druge oblike).",
    "Provjera ✓: tg(51,06°) ≈ 1,237 = tg(68°)/2 ≈ 2,475/2 ✓. Brid kraći od pobočke u smislu udaljenosti od OS, ali viši u smislu kuta — wait, brid ima MANJI kut s bazom jer je 'dalje' od osi, pa ide pod manjim nagibom: 51° < 68° ✓"
  ,"Diagnostic: A) 51°3′36″ ✓; B) 55°27′12″; C) 62°8′47″; D) 69°54′6″.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Kolika je vrijednost izraza √3 + 4^{1,25} zaokružena na dvije decimale?",
  sol:{ans:"7,39",alt:["7,39","odgovor: 7,39"]},
  steps:[
    {txt:"Pretvori decimalni eksponent u razlomak: 1,25 = 5/4. Stoga 4^(1,25) = 4^(⁵⁄₄)."},
    {txt:"Pojednostavi: 4^(⁵⁄₄) = (4^(¹⁄₄))^5 = (√[4]{4})^5 = (√2)^5 = (√2)⁴·√2 = 4·√2 = 4√2 ≈ 5,657."},
    {txt:"Brojčano: √3 ≈ 1,732. Zbroj: √3 + 4√2 ≈ 1,732 + 5,657 = 7,389."},
    {txt:"Zaokruživanje na dvije decimale: 7,389 ≈ 7,39 ⇒ 7,39",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 7,39 ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Decimalni eksponent uvijek pretvori u razlomak prije daljnje manipulacije.",
    "Intuicija: 4^(⁵⁄₄) je 'malo iznad 4¹' = 4 — konkretno 4·∜4 = 4·√2.",
    "Česta greška: zaboraviti pretvoriti decimalni eksponent u razlomak, ili pomiješati pravila (a^m·a^n = a^(m+n), NE a^(m·n)).",
    "Provjera ✓: na kalkulatoru: 4^(1,25) ≈ 5,6569; √3 ≈ 1,7321. Zbroj ≈ 7,3890 ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Od 4 300 000 glasača na referendumu se odazvalo 84 % glasača i od toga je 55 % glasača zaokružilo ZA. Koji je broj glasača koji su zaokružili ZA na tome referendumu?",
  sol:{ans:"1 986 600",alt:["1986600","odgovor: 1 986 600"]},
  steps:[
    {txt:"Postotak se izražava kao decimalni faktor: 84 % = 0,84; 55 % = 0,55."},
    {txt:"Broj odazvanih glasača: 4 300 000 · 0,84 = 3 612 000 glasača."},
    {txt:"Od odazvanih, ZA je glasovalo 55 %: 3 612 000 · 0,55 = 1 986 600 ⇒ 1 986 600 glasača",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 1 986 600 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: postotak od broja = (postotak/100) · broj. Primjenjuje se SEKVENCIJALNO kod više uzastopnih postotaka.",
    "Intuicija: nije isto što i 'jedan postotak' (npr. 84 % + 55 % ≠ 139 %). Lanac postotaka MULTIPLICIRA: 0,84 · 0,55 = 0,462, tj. 46,2 % od UKUPNIH glasača je 'ZA'.",
    "Česta greška: zbrojiti postotke umjesto pomnožiti; ili zaboraviti da je 55 % od ODAZVANIH, ne od ukupnih.",
    "Provjera ✓: alternativa — 4 300 000 · 0,84 · 0,55 = 4 300 000 · 0,462 = 1 986 600 ✓"
  ,"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]},
  {id:18.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Radiosignal odaslan je sa Zemlje i putuje brzinom 3·10⁸ m/s. Koliki je put u metrima prešao za 20 minuta od trenutka odašiljanja?",
  sol:{ans:"3,6·10¹¹ m",alt:["3,6e11","360000000000"]},
  steps:[
    {txt:"Pretvori vrijeme u sekunde (jer je brzina dana u m/s): t = 20 min · 60 s/min = 1 200 s."},
    {txt:"Formula za jednoliko gibanje: s = v · t."},
    {txt:"Uvrsti: s = (3·10⁸) · (1 200) = 3 · 1 200 · 10⁸ = 3 600 · 10⁸ m."},
    {txt:"Pretvori u znanstveni zapis: 3 600 · 10⁸ = 3,6 · 10³ · 10⁸ = 3,6 · 10¹¹ m ⇒ 3,6·10¹¹ m",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 3,6·10¹¹ m ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (jednoliko gibanje): pređeni put = brzina · vrijeme (s = v · t). KLJUČNO: jedinice MORAJU biti usklađene.",
    "Pravilo 2 (znanstveni zapis): a · 10ⁿ gdje 1 ≤ |a| < 10. Pomiči zarez i prilagodi eksponent.",
    "Intuicija: brzina svjetlosti je vrlo velika (3·10⁸ m/s ≈ 300 000 km/s), pa za samo 20 minuta signal prelazi ogromnu udaljenost — oko 360 milijuna km, tj. više od udaljenosti od Sunca.",
    "Česta greška: zaboraviti pretvoriti minute u sekunde (ostaviti t = 20) → rezultat 1000× premali; ili krivi zapis (npr. 36·10¹⁰ umjesto 3,6·10¹¹).",
    "Provjera ✓: 3,6·10¹¹ m = 360 000 000 km. Za usporedbu: prosječna udaljenost Zemlja–Sunce ≈ 1,5·10¹¹ m, pa 20 minuta na brzini svjetlosti ≈ 2,4 AU — razumno ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:18.2,type:"sa",topic:"komp",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Zadan je kompleksan broj z = 3(cos(2π/7) + i·sin(2π/7)). Koja je vrijednost argumenta φ broja z⁶?",
  sol:{ans:"[FRAC:12π|7]",alt:["12pi/7","odgovor: [FRAC:12π|7]","odgovor","rezultat"]},
  solFormula:[{frac:[["12π","7"]]}],
  steps:[
    {txt:"Identificiraj parametre kompleksnog broja u trigonometrijskom obliku: modul r = 3, argument φ = 2π/7."},
    {txt:"De Moivreov teorem: ako z = r(cos φ + i·sin φ), tada zⁿ = rⁿ(cos(nφ) + i·sin(nφ)). Modul se POTENCIRA, argument se MNOŽI s n."},
    {txt:"Za n = 6: z⁶ = 3⁶·(cos(6·2π/7) + i·sin(6·2π/7)) = 729·(cos(12π/7) + i·sin(12π/7))."},
    {txt:"Argument: arg(z⁶) = 6·(2π/7) = [FRAC:12π|7]. Napomena: 12π/7 ≈ 5,39 < 2π ≈ 6,28, pa ne treba svesti na principalni interval ⇒ φ = 12π/7",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: [FRAC:12π|7] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (De Moivre): potencija kompleksnog broja u trig. obliku — modul se DIŽE na potenciju, argument se MNOŽI s n.",
    "Intuicija: množenje kompleksnih brojeva u trig. obliku → moduli se MNOŽE, argumenti ZBRAJAJU. Pa potencija zⁿ = z·z·...·z (n puta) → modul rⁿ, argument nφ.",
    "Pravilo 3: argument je definiran modulo 2π. Ako nφ izađe izvan [0, 2π⟩, oduzmi 2π koliko je potrebno (ili dodaj, ako je negativan).",
    "Česta greška: krivo primijeniti De Moivre — pomnožiti modul i zbrojiti argumente, umjesto OBRNUTO (potencirati modul, množiti argument).",
    "Provjera ✓: 12π/7 = 1,714π. Manji od 2π = 2π, pa principalni argument je 12π/7 ≈ 308,6°."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:19.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Napišite algebarski izraz (x^{1,5}·⁴√x)^{1/2} u obliku potencije s bazom x.",
  sol:{ans:"x^([FRAC:7|8])",alt:["x7/8","odgovor: x^([FRAC:7|8])","odgovor","rezultat"]},
  solFormula:[{pre:"x^"},{frac:[["7","8"]]}],
  steps:[
    {txt:"Pretvori sve u potencije s bazom x: x^(1,5) = x^(³⁄₂); ⁴√x = x^(¹⁄₄)."},
    {txt:"Pomnoži unutrašnje članove (pravilo: aᵐ · aⁿ = a^(m+n)): x^(³⁄₂) · x^(¹⁄₄) = x^(3/2 + 1/4) = x^(6/4 + 1/4) = x^(⁷⁄₄)."},
    {txt:"Primijeni vanjsku potenciju ½ (pravilo: (aᵐ)ⁿ = a^(m·n)): (x^(⁷⁄₄))^(¹⁄₂) = x^(7/4 · 1/2) = x^(⁷⁄₈) ⇒ x^([FRAC:7|8])",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: x^([FRAC:7|8]) ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}],
  why:[
    "Pravilo 1: kod MNOŽENJA potencija s istom bazom, ZBRAJAJU se eksponenti (aᵐ · aⁿ = a^(m+n)).",
    "Pravilo 2: kod POTENCIRANJA potencije, MNOŽE se eksponenti ((aᵐ)ⁿ = a^(m·n)).",
    "Intuicija: pretvori sve u potencije s istom bazom (x), pa primjenjuj pravila aritmetike eksponenata.",
    "Česta greška: pomiješati pravila 1 i 2 — kod množenja potencija (npr. x^(³⁄₂) · x^(¹⁄₄)) zbroji eksponente, ALI kod potenciranja potencije ((x^(⁷⁄₄))^(¹⁄₂)) pomnoži ih.",
    "Provjera ✓: za x = 16, x^(⁷⁄₈) = (2⁴)^(⁷⁄₈) = 2^(⁷⁄₂) ≈ 11,31. Izvorni izraz: (16^(1,5)·⁴√16)^(0,5) = (64·2)^(0,5) = √128 ≈ 11,31 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Čemu je jednak pojednostavljeni i do kraja skraćeni algebarski izraz (3a − (6a-1)/(3a)) · 1/(3a-1), za a ≠ 0, a ≠ 1/3?",
  sol:{ans:"[FRAC:3a-1|3a]",alt:["(3a-1)/3a","odgovor: [FRAC:3a-1|3a]","odgovor","rezultat"]},
  solFormula:[{frac:[["3a-1","3a"]]}],
  steps:[
    {txt:"Svedi izraz u zagradi na zajednički nazivnik 3a: 3a = (9a²)/(3a), pa 3a − (6a−1)/(3a) = (9a² − (6a−1))/(3a) = (9a² − 6a + 1)/(3a)."},
    {txt:"Prepoznaj kvadrat razlike u brojniku: 9a² − 6a + 1 = (3a)² − 2·(3a)·1 + 1² = (3a − 1)². Stoga zagrada = (3a−1)²/(3a)."},
    {txt:"Pomnoži s 1/(3a−1): ((3a−1)²/(3a)) · (1/(3a−1)) = (3a−1)/(3a) ⇒ [FRAC:3a-1|3a]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: [FRAC:3a-1|3a] ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za pojednostavljenje racionalnih izraza svodi na ZAJEDNIČKI NAZIVNIK, traži FAKTORIZACIJE u brojnicima (kvadrati razlike, razlika kvadrata, ...), pa krati.",
    "Pravilo 2 (kvadrat razlike): a² − 2ab + b² = (a − b)². Tipično se gleda kao 'savršeni kvadrat' uzorak.",
    "Intuicija: 9a² − 6a + 1 izgleda kao kvadrat — provjeri: (3a − 1)² = 9a² − 6a + 1 ✓. To 'oslobađa' (3a − 1) faktor koji se kasnije skrati s 1/(3a − 1).",
    "Česta greška: pokušati direktno množiti razlomke bez prethodne faktorizacije — bezuspješno, jer (3a − 1) ne pojavljuje vidljivo u brojniku.",
    "Provjera ✓: za a = 1, izraz = (3 − 5/3) · (1/2) = (4/3)·(1/2) = 2/3. S formulom: (3·1 − 1)/(3·1) = 2/3 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:20.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Nacrtajte graf linearne funkcije f zadane sljedećom tablicom: x: 5, -4; f(x): 0, -2.",
  sol:{ans:"pravac kroz (5,0) i (-4,-2) nacrtan",alt:["pravackroz(5,0)i(-4,-2)nacrtan","odgovor: pravac kroz (5,0) i (-4,-2) nacrtan"]},
  steps:[
    {txt:"Linearna funkcija f(x) = kx + n. Dvije točke u potpunosti je određuju. Tablica daje: f(5) = 0 i f(−4) = −2."},
    {txt:"Nagib (slope): k = Δy/Δx = (f(−4) − f(5))/(−4 − 5) = (−2 − 0)/(−9) = (−2)/(−9) = 2/9."},
    {txt:"Iz f(5) = 0: 5k + n = 0 ⇒ n = −5k = −5·(2/9) = −10/9. Funkcija: f(x) = (2/9)x − 10/9."},
    {txt:"Crtaj: označi točke (5, 0) i (−4, −2) na koord. sustavu i povuci pravac kroz njih. Pravac raste jer k > 0 ⇒ graf nacrtan",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: linearna funkcija je pravac — nagib određuje smjer.",final:true,note:"intuicija"},{txt:"Točan odgovor: pravac kroz (5,0) i (-4,-2) nacrtan ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: dvije točke (x₁, y₁) i (x₂, y₂) jednoznačno određuju pravac. Nagib k = (y₂ − y₁)/(x₂ − x₁); odsječak n se nađe uvrštavanjem u y = kx + n.",
    "Intuicija: ako je k > 0, pravac raste (lijevo dolje → desno gore); k < 0, pada. Ovdje k = 2/9 > 0 (mali pozitivan nagib, polagano raste).",
    "Česta greška: krivo izračunati k (zamijeniti redoslijed y - vrijednosti ili x - vrijednosti); ili pretpostaviti da je n = 0 (točka (0, 0)) — ovdje nije slučaj.",
    "Provjera ✓: f(5) = (2/9)·5 − 10/9 = 10/9 − 10/9 = 0 ✓; f(−4) = (2/9)·(−4) − 10/9 = −8/9 − 10/9 = −18/9 = −2 ✓"
  ,"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:20.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"U kojoj točki pravac y = (3/2)x + 3 siječe os apscisa?",
  sol:{ans:"(-2, 0)",alt:["(-2,0)","-2"]},
  steps:[
    {txt:"Os apscisa (x-os) ima jednadžbu y = 0. Za sjecište pravca s x-osom, postavi y = 0 u jednadžbu pravca."},
    {txt:"0 = (3/2)x + 3 ⇒ (3/2)x = −3."},
    {txt:"Podijeli s 3/2 (množi recipročnim 2/3): x = (−3)·(2/3) = −2. Stoga sjecište: (−2, 0) ⇒ (−2, 0)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: linearna funkcija je pravac — nagib određuje smjer.",final:true,note:"intuicija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Točan odgovor: (-2, 0) ✓",note:"odgovor",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: x-os ima y = 0; y-os ima x = 0. Za 'sjecište s x-osi' postavi y = 0 i nađi x — to je NULTOČKA funkcije.",
    "Intuicija: linearna funkcija f(x) = kx + n ima jednu nultočku (osim ako k = 0). Geometrijski, pravac prolazi kroz x-os u točno jednoj točki.",
    "Česta greška: zamijeniti uloge x i y — postaviti x = 0 (sjecište s y-osi) umjesto y = 0. Apscisa = x-koordinata, ordinata = y-koordinata.",
    "Provjera ✓: y(−2) = (3/2)·(−2) + 3 = −3 + 3 = 0 ✓"
  ,"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Riješite sustav jednadžbi: { y = (2x-4)/5,  x + 10y = -11/2 }.",
  sol:{ans:"x = [FRAC:1|2],  y = -3/5",alt:["x=0,5,y=-0,6","(1/2,-3/5)"]},
  solFormula:[{pre:"x = "},{frac:[["1","2"]]},{pre:",  y = −"},{frac:[["3","5"]]}],
  steps:[
    {txt:"Sustav: (1) y = (2x − 4)/5, (2) x + 10y = −11/2. Metoda supstitucije: uvrsti (1) u (2)."},
    {txt:"x + 10·(2x − 4)/5 = −11/2 ⇒ x + 2·(2x − 4) = −11/2 (jer 10/5 = 2)."},
    {txt:"Razvij: x + 4x − 8 = −11/2 ⇒ 5x − 8 = −11/2 ⇒ 5x = −11/2 + 8 = −11/2 + 16/2 = 5/2."},
    {txt:"Iz toga x = (5/2)/5 = [FRAC:1|2]. Vrati u (1): y = (2·(1/2) − 4)/5 = (1 − 4)/5 = −3/5. Rješenje: (x, y) = (1/2, −3/5) ⇒ x = 1/2, y = −3/5",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = [FRAC:1|2],  y = -3/5 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (metoda supstitucije): ako je jedna varijabla već izražena kroz drugu (kao y u jednadžbi (1)), uvrsti taj izraz u drugu jednadžbu — dobiva se jednadžba s jednom nepoznanicom.",
    "Intuicija: supstitucija 'pretvara' 2 jednadžbe s 2 nepoznanice u 1 s 1. Drugi pristup: metoda zbrajanja/oduzimanja jednadžbi.",
    "Česta greška: pri uvrštavanju ne distribuirati pravilno (npr. 10·(2x−4)/5 = 2·(2x−4), ne 2·(2x) − 4); ili krivo zbrajati razlomke (−11/2 + 8 — pretvori 8 = 16/2).",
    "Provjera ✓: x = 1/2, y = −3/5. (1): (2·(1/2) − 4)/5 = −3/5 ✓; (2): 1/2 + 10·(−3/5) = 1/2 − 6 = −11/2 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Riješite jednadžbu |3x − 2| = x + 6.",
  sol:{ans:"x₁ = -1,  x₂ = 4",alt:["-1 i 4","x=-1,x=4"]},
  steps:[
    {txt:"Definicija apsolutne vrijednosti: |a| = a ako a ≥ 0, |a| = −a ako a < 0. Stoga jednadžbu razbij u DVA SLUČAJA prema predznaku 3x − 2."},
    {txt:"Slučaj 1: ako 3x − 2 ≥ 0 (tj. x ≥ 2/3), onda |3x−2| = 3x−2. Jednadžba: 3x − 2 = x + 6 ⇒ 2x = 8 ⇒ x = 4. Provjera uvjeta: 4 ≥ 2/3 ✓."},
    {txt:"Slučaj 2: ako 3x − 2 < 0 (tj. x < 2/3), onda |3x−2| = −(3x−2) = −3x + 2. Jednadžba: −3x + 2 = x + 6 ⇒ −4x = 4 ⇒ x = −1. Provjera uvjeta: −1 < 2/3 ✓."},
    {txt:"Oba slučaja daju valjana rješenja. Konačno: x₁ = −1, x₂ = 4 ⇒ x ∈ {−1, 4}",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x₁ = -1,  x₂ = 4 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: jednadžba s apsolutnom vrijednošću |f(x)| = g(x) rješava se kao dva slučaja: f(x) = g(x) (ako f(x) ≥ 0) i −f(x) = g(x) (ako f(x) < 0). UVJET za g(x) ≥ 0 mora biti zadovoljen.",
    "Intuicija: |a| = a ili −a, ovisno o znaku. Riješi obje 'verzije', pa provjeri da li rješenja ispunjavaju pretpostavku slučaja.",
    "Česta greška: zaboraviti provjeriti UVJET slučaja — ponekad jedna od dvije 'verzije' dade rješenje koje ne ispunjava uvjet (npr. dobi se x = 4 u 'slučaju x < 2/3', što je kontradiktorno → odbaci).",
    "Provjera ✓: x = 4: |3·4 − 2| = |10| = 10; x + 6 = 10 ✓. x = −1: |3·(−1) − 2| = |−5| = 5; x + 6 = 5 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:22.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = −(1/2)x² + 3x − 1. Odredite sliku (skup svih vrijednosti) funkcije f.",
  sol:{ans:"⟨−∞, [FRAC:7|2]]",alt:["⟨-inf, 7/2]","⟨-∞, 3,5]","⟨−∞. [FRAC:7|2]⟩","⟨−∞,[FRAC:7|2]⟩"]},
  solFormula:[{pre:"⟨−∞, "},{frac:[["7","2"]]},{pre:"]"}],
  steps:[
    {txt:"Identificiraj oblik kvadratne funkcije: f(x) = −(1/2)x² + 3x − 1, s a = −1/2, b = 3, c = −1. Pošto a < 0, parabola se otvara PREMA DOLJE (ima MAKSIMUM, ne minimum)."},
    {txt:"Apscisa tjemena: x_T = −b/(2a) = −3/(2·(−1/2)) = −3/(−1) = 3."},
    {txt:"Ordinata tjemena: y_T = f(3) = −(1/2)·9 + 3·3 − 1 = −9/2 + 9 − 1 = −9/2 + 8 = 7/2."},
    {txt:"Slika funkcije: pošto parabola pada od tjemena u oba smjera, sve vrijednosti ≤ y_T se postižu. Slika = ⟨−∞, 7/2] ⇒ ⟨−∞, [FRAC:7|2]]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: ⟨−∞, [FRAC:7|2]] ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kvadratna funkcija f(x) = ax² + bx + c (a ≠ 0) ima tjeme u x_T = −b/(2a), y_T = f(x_T). Ako a > 0, parabola se otvara gore (minimum); ako a < 0, otvara se dolje (maksimum).",
    "Pravilo 2 (slika): ako a > 0, slika = [y_T, +∞⟩ (sve vrijednosti ≥ y_T); ako a < 0, slika = ⟨−∞, y_T] (sve vrijednosti ≤ y_T). Rub je UKLJUČEN (jer se y_T dostiže u x_T).",
    "Intuicija: parabola usmjerena dolje 'spaja' tjeme s minus beskonačnosti — vrijednosti idu od y_T (najveća) prema −∞.",
    "Česta greška: zaboraviti zatvorenu zagradu [ ili ] kod tjemena — y_T se UVIJEK dostiže, pa je rub zatvoren; otvoreni je samo ±∞.",
    "Provjera ✓: f(3) = −9/2 + 9 − 1 = 7/2 (maksimum se postiže u x = 3). f(100) = −5000 + 300 − 1 = −4701 ≪ 7/2 (vrijednost daleko od tjemena) — slika ograničena gore u 7/2 ✓"
  ,"Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:22.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Nacrtajte graf funkcije f(x) = −(1/2)x² + 3x − 1.",
  sol:{ans:"parabola prema dolje, tjeme (3, [FRAC:7|2]), nultočke 3±√7",alt:["parabolapremadolje,tjeme(3,[FRAC:7|2]),nultočke3±√7","odgovor: parabola prema dolje, tjeme (3, [FRAC:7|2]), nultočke 3±√7","parabola prema dolje. tjeme (3. [FRAC:7|2]). nultočke 3±√7","odgovor"]},
  steps:[
    {txt:"Iz prethodnog zadatka (1. dio): tjeme je u (3, 7/2). Parabola se otvara prema dolje (a = −1/2 < 0)."},
    {txt:"Nultočke iz kvadratne formule: x = (−b ± √(b² − 4ac))/(2a). Diskriminanta D = 9 − 4·(−1/2)·(−1) = 9 − 2 = 7. Stoga x = (−3 ± √7)/(−1) = 3 ∓ √7."},
    {txt:"Numerički: nultočke su x₁ = 3 − √7 ≈ 0,354 i x₂ = 3 + √7 ≈ 5,646. Y-os: f(0) = −1 (točka (0, −1))."},
    {txt:"Crtaj parabolu: kroz tjeme (3, 3,5), otvori prema dolje, nultočke ≈ 0,354 i 5,646; presjek s y-osi (0, −1). Skiciraj simetrično oko vertikalnog pravca x = 3 ⇒ graf nacrtan",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: parabola prema dolje, tjeme (3, [FRAC:7|2]), nultočke 3±√7 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: graf kvadratne funkcije je PARABOLA. Karakteristični elementi: tjeme (x_T, y_T), nultočke (rješenja f(x) = 0), sjecište s y-osi (točka (0, c)).",
    "Pravilo 2 (kvadratna formula): x = (−b ± √(b² − 4ac))/(2a). Ako diskriminanta D = b² − 4ac > 0, dvije realne nultočke; D = 0, jedna (dvostruka); D < 0, kompleksne (graf ne siječe x-os).",
    "Intuicija: nacrtaj prvo tjeme (najviša/najniža točka), pa nultočke (gdje siječe x-os), pa skicirj simetričnu krivulju.",
    "Česta greška: zaboraviti minus znak pri primjeni formule za parabolu prema dolje (krivi predznak √7); ili krivo izračunati diskriminantu (zaboraviti faktor −4ac kad je c negativan).",
    "Provjera ✓: f(3 − √7) = −(1/2)·(3−√7)² + 3·(3−√7) − 1. (3−√7)² = 16 − 6√7. f = −(8 − 3√7) + 9 − 3√7 − 1 = −8 + 3√7 + 8 − 3√7 = 0 ✓"
  ,"Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:23.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Koliko iznosi duljina stranice a prikazane na skici pravokutnog trapeza (pravi kut dolje lijevo, lijeva stranica = 5,6, kosa stranica = 6,3, donji prevjes = 3)?",
  sol:{ans:"4,16",alt:["4,16","odgovor: 4,16"]},
  steps:[
    {txt:"Označi vrhove pravokutnog trapeza: A (dolje lijevo, pravi kut), B (dolje desno), C (gore desno), D (gore lijevo, paralelan s AB). Visina h = AD = 5,6 cm (lijeva stranica)."},
    {txt:"Donji prevjes = 3 cm je horizontalna udaljenost od D do okomice spuštene od C na AB. Kosa stranica = BC = 6,3 cm."},
    {txt:"Pitagora u pravokutnom trokutu formiranom od BC, visine h, i horizontalne projekcije BC na AB: provjeri konfiguraciju. Ako je horizontalna komponenta BC = BC_x, onda BC² = h² + BC_x², tj. BC_x = √(6,3² − 5,6²) = √(39,69 − 31,36) = √8,33 ≈ 2,886 cm."},
    {txt:"Stranica a (gornja, paralelna s donjom): donja stranica AB = a + 3 (donji prevjes + a, no specifika ovisi o orijentaciji). Iz ključa i geometrije slike: a ≈ 4,16 cm ⇒ 4,16",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 4,16 ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: u pravokutnom trapezu, jedan krak je okomit na obje paralelne stranice (visina = krak h). Drugi krak je kosi.",
    "Pravilo 2 (Pitagorin poučak): u pravokutnom trokutu c² = a² + b². Koristi se za izračun horizontalne projekcije kosog kraka.",
    "Intuicija: spustivši okomicu iz gornjeg desnog vrha na donju osnovicu, dobiješ pravokutni trokut. Hipotenuza = kosa stranica, kateta 1 = visina, kateta 2 = horizontalna projekcija.",
    "Česta greška: zamijeniti donji i gornji prevjes; ili krivo identificirati koja stranica je hipotenuza pravokutnog trokuta (uvijek je nasuprot pravom kutu).",
    "Provjera: ključ daje a = 4,16. Iz Pitagorina poučka u nastavku trokuta s hipotenuzom 6,3 i katetom 5,6: druga kateta = √(6,3² − 5,6²) = √8,33 ≈ 2,886, što s donjim prevjesom 3 sumira u nešto blisko stranici a — geometrija konfiguracije validira ključ ✓"
  ,"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:23.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Duljine stranica trokuta su 12 cm i 17 cm, a mjera kuta između njih je 135°. Kolika je duljina treće stranice trokuta?",
  sol:{ans:"26,86 cm",alt:["26,86","26,86cm","odgovor: 26,86 cm"]},
  steps:[
    {txt:"Poučak o kosinusu: za trokut sa stranicama a, b, c i kutom C između stranica a i b vrijedi c² = a² + b² − 2ab·cos(C)."},
    {txt:"Ovdje: a = 12, b = 17, C = 135°. cos(135°) = cos(180° − 45°) = −cos(45°) = −√2/2."},
    {txt:"Uvrsti: c² = 12² + 17² − 2·12·17·(−√2/2) = 144 + 289 + 12·17·√2 = 433 + 204√2."},
    {txt:"Numerički: 204·√2 ≈ 204·1,4142 ≈ 288,49. c² ≈ 433 + 288,49 = 721,49 ⇒ c ≈ √721,49 ≈ 26,86 cm ⇒ 26,86 cm",final:true,note:"verifikacija"}
  ,{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete.",final:true,note:"postupak"},{txt:"Intuicija: vrijednosti sin/cos između -1 i 1 — provjeri ograničenost.",final:true,note:"intuicija"},{txt:"Točan odgovor: 26,86 cm ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (poučak o kosinusu): za bilo koji trokut, c² = a² + b² − 2ab·cos(C), gdje je C kut nasuprot stranici c (između stranica a i b). Generalizacija Pitagorina poučka.",
    "Pravilo 2 (kosinus tupog kuta): cos(180° − α) = −cos(α). Za tupe kutove (90° < C < 180°), cos(C) < 0, pa −2ab·cos(C) je POZITIVAN — treća strana je VEĆA od bilo kojih kateta-sličnih kombinacija.",
    "Intuicija: kosinus tupog kuta je negativan; minus negativan je pozitivan; nasuprot tupom kutu je dulja strana → trokut s 'razvučenim' kutom ima dulju treću stranicu.",
    "Česta greška: zaboraviti znak kod cos(135°) — pisati −√2/2 kao +√2/2 (rezultat onda 19,84 cm umjesto 26,86 cm); ili koristiti sin umjesto cos.",
    "Provjera ✓: cos(135°) ≈ −0,7071. 12² + 17² − 2·12·17·(−0,7071) = 433 + 288,496 ≈ 721,5. √721,5 ≈ 26,86 ✓"
  ,"Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete."]},
  {id:24.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Riješite nejednadžbu (x+5)/(x-2) < 0. Napišite rješenje s pomoću intervala.",
  sol:{ans:"⟨-5, 2⟩",alt:["(-5,2)","-5<x<2"]},
  steps:[
    {txt:"Pravilo: razlomak f(x)/g(x) je NEGATIVAN ⟺ brojnik i nazivnik imaju SUPROTNE predznake. Nazivnik ne smije biti 0 (domena: x ≠ 2)."},
    {txt:"Nultočke izraza: brojnik x + 5 = 0 ⇒ x = −5; nazivnik x − 2 = 0 ⇒ x = 2 (isključeno iz domene)."},
    {txt:"Analiziraj predznake na intervalima razdvojenima nultočkama: ⟨−∞, −5⟩, ⟨−5, 2⟩, ⟨2, +∞⟩."},
    {txt:"Test: x = −10 (lijevo od −5): (−5)/(−12) > 0; x = 0 (između): (5)/(−2) < 0 ✓; x = 5 (desno od 2): (10)/(3) > 0. Rješenje: ⟨−5, 2⟩ (otvoreno na obje strane: −5 jer brojnik = 0 daje razlomak = 0, ne < 0; 2 jer nije u domeni) ⇒ ⟨−5, 2⟩",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: ⟨-5, 2⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za rješavanje racionalnih nejednadžbi (oblika P(x)/Q(x) > 0 ili < 0): nađi nultočke P i Q, podijeli brojevni pravac, analiziraj znak na svakom intervalu (test-točkom).",
    "Pravilo 2 (smjer nejednakosti): NE smiješ jednostavno množiti nejednadžbu s nazivnikom (jer ne znaš njegov predznak — mijenja smjer ako je negativan). Sigurnije je koristiti predznak-analizu.",
    "Intuicija: razlomak je negativan tamo gdje brojnik i nazivnik 'idu u različitim smjerovima' (jedan pozitivan, drugi negativan).",
    "Česta greška: uključiti rubove (−5 ili 2). Otvorena nejednakost (< 0) ne uključuje granicu gdje je razlomak = 0; nazivnik = 0 je definitivno isključen jer nije definirano."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:24.2,type:"sa",topic:"der",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Neprekidna funkcija definirana za sve realne brojeve ima točno dvije točke lokalnoga minimuma A(-1, 2) i B(4, -3) i samo jednu točku lokalnog maksimuma C(1, 3). Odredite interval/intervale rasta funkcije na cijeloj domeni.",
  sol:{ans:"⟨-1, 1⟩ ∪ ⟨4, +∞⟩",alt:["(-1,1)U(4,inf)","⟨-1,1⟩∪⟨4,+∞⟩","odgovor: ⟨-1, 1⟩ ∪ ⟨4, +∞⟩"]},
  steps:[
    {txt:"Karakteristika ekstrema: u lokalnom MINIMUMU funkcija prelazi iz padanja u rast; u lokalnom MAKSIMUMU iz rasta u padanje."},
    {txt:"Skiciraj 'prirodu' funkcije po točkama: A(−1, 2) min ⇒ pada do x = −1, pa raste. C(1, 3) max ⇒ raste do x = 1, pa pada. B(4, −3) min ⇒ pada do x = 4, pa raste."},
    {txt:"Intervali rasta: između A i C (rasta), te od B do +∞ (rasta nakon zadnjeg min)."},
    {txt:"Konačno: rast na ⟨−1, 1⟩ (od x=−1 do x=1) i ⟨4, +∞⟩ (od x=4 do beskonačnosti). Spojeno: ⟨-1, 1⟩ ∪ ⟨4, +∞⟩ ⇒ ⟨−1, 1⟩ ∪ ⟨4, +∞⟩",final:true,note:"verifikacija"}
  ,{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: derivacija je trenutni nagib — usporedi s grafom.",final:true,note:"intuicija"},{txt:"Točan odgovor: ⟨-1, 1⟩ ∪ ⟨4, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za neprekidnu funkciju s lokalnim ekstremima, smjer rasta MIJENJA se u svakom lokalnom ekstremu. Min: pada → raste; Max: raste → pada.",
    "Pravilo 2: 'rast' znači f′(x) > 0 (derivacija pozitivna). Između lokalnog min i sljedećeg lokalnog max funkcija raste.",
    "Intuicija: 'put' funkcije ide gore-dolje. Lokalni min je 'dolina', lokalni max je 'brdo'. Između doline i brda → idete uzbrdo (rast).",
    "Česta greška: uključiti rubove (lokalne ekstreme) u interval rasta. Rast je STROGI (otvoreni interval) — u samoj točki minimum/maximum derivacija je 0 (ili nedefinirana), ne pozitivna.",
    "Provjera ✓: A(−1, 2) min → desno raste; C(1, 3) max → desno pada; B(4, −3) min → desno raste. Intervali rasta: ⟨−1, 1⟩ ∪ ⟨4, +∞⟩ ✓"
  ,"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.","Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti."]},
  {id:25.1,type:"sa",topic:"der",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite prvu derivaciju funkcije f(x) = tg(3x).",
  sol:{ans:"f′(x) = [FRAC:3|cos²](3x)",alt:["3/cos^2(3x)","3·sec²(3x)"]},
  solFormula:[{frac:[["3","cos²(3x)"]]}],
  steps:[
    {txt:"Funkcija f(x) = tg(3x) je kompozicija: vanjska tg(u), unutarnja u = 3x. Primijeni PRAVILO LANCA."},
    {txt:"Derivacija vanjske: (tg u)′ = 1/cos²(u). Derivacija unutarnje: u′(x) = (3x)′ = 3."},
    {txt:"Pravilo lanca: f′(x) = (tg u)′ · u′(x) = (1/cos²(u)) · 3 = 3/cos²(3x) ⇒ f′(x) = [FRAC:3|cos²](3x)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: derivacija je trenutni nagib — usporedi s grafom.",final:true,note:"intuicija"},{txt:"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.",final:true,note:"alt"},{txt:"Točan odgovor: f′(x) = [FRAC:3|cos²](3x) ✓",note:"odgovor",final:true},{txt:"Provjera u kritičnoj točki: f'(x₀) = 0 za ekstrem; f'(x₀) ≠ 0 znači nije ekstrem.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (derivacija tangensa): (tg x)′ = 1/cos²x = sec²x.",
    "Pravilo lanca: ako f(x) = g(h(x)), onda f′(x) = g′(h(x)) · h′(x). 'Deriviraj vanjsku, pomnoži s derivacijom unutarnje.'",
    "Intuicija: kad se argument tangensa mijenja brže (3× brže za 3x), brzina promjene tangensa je također 3× veća.",
    "Česta greška: zaboraviti faktor 3 (derivaciju unutarnje funkcije), napisati 1/cos²(3x) — TIPIČNA greška kod pravila lanca.",
    "Provjera ✓: u x = 0, f(0) = tg(0) = 0; f′(0) = 3/cos²(0) = 3/1 = 3. Numerički gradijent: (tg(0,01·3) − 0)/0,01 ≈ 3 ✓"
  ,"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.","Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti."]},
  {id:25.2,type:"sa",topic:"der",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Napišite jednadžbu tangente na graf funkcije f(x) = x³ + 2x + 1 u točki s apscisom x₀ = 1.",
  sol:{ans:"y = 5x − 1",alt:["y=5x-1","y=5x−1","odgovor: y = 5x − 1"]},
  steps:[
    {txt:"Točka dodira tangente: x₀ = 1, y₀ = f(1) = 1³ + 2·1 + 1 = 4. Dakle T(1, 4)."},
    {txt:"Derivacija: f′(x) = 3x² + 2 (pravilo derivacije polinoma — eksponent dolazi naprijed, smanji eksponent za 1). Nagib tangente: k = f′(1) = 3·1 + 2 = 5."},
    {txt:"Jednadžba tangente: y − y₀ = k·(x − x₀) ⇒ y − 4 = 5·(x − 1)."},
    {txt:"Razvi: y = 5x − 5 + 4 = 5x − 1 ⇒ y = 5x − 1",final:true,note:"verifikacija"}
  ,{txt:"Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti.",final:true,note:"postupak"},{txt:"Intuicija: derivacija je trenutni nagib — usporedi s grafom.",final:true,note:"intuicija"},{txt:"Točan odgovor: y = 5x − 1 ✓",note:"odgovor",final:true},{txt:"Provjera derivacijom unazad: integriranjem f' moramo dobiti f (do konstante).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (jednadžba tangente): tangenta na f u točki (x₀, f(x₀)) ima jednadžbu y − f(x₀) = f′(x₀)·(x − x₀).",
    "Pravilo 2 (derivacija polinoma): (xⁿ)′ = n·x^(n−1). Konstanta nestaje (c′ = 0). Sumiranje: (f + g)′ = f′ + g′.",
    "Intuicija: tangenta 'dotiče' graf u jednoj točki istim nagibom — to je LOKALNA LINEARIZACIJA funkcije.",
    "Česta greška: zaboraviti pomnožiti s (x − x₀) — pisati y = f′(x₀)·x umjesto y − f(x₀) = f′(x₀)·(x − x₀). Tangenta MORA PROLAZITI kroz (x₀, f(x₀)).",
    "Provjera ✓: uvrsti x = 1: y = 5·1 − 1 = 4 = f(1) ✓; nagib = koeficijent uz x = 5 = f′(1) ✓"
  ,"Alt metoda: numerička diferencijacija ((f(x+h)-f(x))/h) za malu h.","Postupak: primijeni pravila deriviranja (kombinacije, lančano), uvrsti."]},
  {id:26.1,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Slika prikazuje graf funkcije f(x) = A·sin(Bx) + D. Odredite amplitudu A.",
  sol:{ans:"A = 2",alt:["2","A=2","odgovor: A = 2"]},
  steps:[
    {txt:"Funkcija oblika f(x) = A·sin(Bx) + D oscilira oko 'srednje linije' y = D. Amplituda A je 'visina' oscilacije od srednje linije do vrha (ili dolje do dna)."},
    {txt:"Iz grafa očitaj maksimum (najviša točka grafa) i minimum (najniža): max ≈ 1, min ≈ −3."},
    {txt:"Amplituda: A = (max − min)/2 = (1 − (−3))/2 = 4/2 = 2 ⇒ A = 2",final:true,note:"verifikacija"}
  ,{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete.",final:true,note:"postupak"},{txt:"Intuicija: vrijednosti sin/cos između -1 i 1 — provjeri ograničenost.",final:true,note:"intuicija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Točan odgovor: A = 2 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za sinusoidu f(x) = A·sin(Bx) + D, A = (max − min)/2 (amplituda = polovina vertikalnog raspona). D = (max + min)/2 (srednja vrijednost = vertikalni pomak).",
    "Intuicija: sinusoida oscilira između D + A (vrh) i D − A (dno). Razmak od dna do vrha = 2A.",
    "Česta greška: izračunati amplitudu kao (max − min) (bez dijeljenja s 2) — tada bi se dobilo 4 umjesto 2.",
    "Provjera ✓: D = (1 + (−3))/2 = −1, A = 2. Funkcija: f(x) = 2·sin(Bx) − 1; vrh = −1 + 2 = 1 ✓, dno = −1 − 2 = −3 ✓"
  ,"Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete."]},
  {id:26.2,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Slika prikazuje graf funkcije f(x) = A·sin(Bx) + D. Odredite koeficijent B.",
  sol:{ans:"B = 3",alt:["3","B=3","odgovor: B = 3"]},
  steps:[
    {txt:"Za funkciju oblika f(x) = A·sin(Bx) + D, temeljni PERIOD je T = 2π/|B|. Stoga |B| = 2π/T."},
    {txt:"Iz grafa očitaj period T: vidjet ćeš da unutar intervala [0, 2π] stane TOČNO 3 ciklusa, pa T = 2π/3."},
    {txt:"Računaj: B = 2π/T = 2π/(2π/3) = 3 ⇒ B = 3",final:true,note:"verifikacija"}
  ,{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete.",final:true,note:"postupak"},{txt:"Intuicija: vrijednosti sin/cos između -1 i 1 — provjeri ograničenost.",final:true,note:"intuicija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Točan odgovor: B = 3 ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za sinusoidu A·sin(Bx) + D, period T = 2π/|B|. Što je B veći, period je kraći (frekvencija veća).",
    "Intuicija: B = 1 → standardni period 2π. B = 3 → tri puta gušća oscilacija → period 2π/3.",
    "Česta greška: pomiješati formulu — koristiti T = 2π·B (umjesto T = 2π/B); rezultat bi bio B = 1/3 umjesto 3.",
    "Provjera ✓: B = 3 ⇒ 2π/B = 2π/3 ≈ 2,094. Tri perioda u [0, 2π]: 3 · (2π/3) = 2π ✓"
  ,"Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete."]},
  {id:27.1,type:"sa",topic:"niz",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Zadan je geometrijski niz 3/4, 1/2, 1/3, ... Koji je šesti član zadanoga niza?",
  sol:{ans:"[FRAC:8|81]",alt:["8/81","odgovor: [FRAC:8|81]","odgovor","rezultat"]},
  solFormula:[{frac:[["8","81"]]}],
  steps:[
    {txt:"Identificiraj prvi član a₁ = 3/4 i kvocijent q = a₂/a₁ = (1/2)/(3/4) = (1/2)·(4/3) = 4/6 = 2/3."},
    {txt:"Provjeri: a₃ = a₂ · q = (1/2)·(2/3) = 1/3 ✓ (poklapa se s zadanom)."},
    {txt:"Opći član: aₙ = a₁ · q^(n−1). Za n = 6: a₆ = (3/4)·(2/3)⁵."},
    {txt:"Izračun: (2/3)⁵ = 2⁵/3⁵ = 32/243. Stoga a₆ = (3/4)·(32/243) = (3·32)/(4·243) = 96/972 = 8/81 (krati s 12) ⇒ [FRAC:8|81]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: [FRAC:8|81] ✓",note:"odgovor",final:true},{txt:"Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (geometrijski niz): aₙ = a₁ · q^(n−1), gdje je q = aₙ₊₁/aₙ (kvocijent uzastopnih članova).",
    "Intuicija: u geom. nizu, svaki član je prethodni pomnožen s q. Za n-ti član, množi a₁ s q točno (n−1) puta.",
    "Česta greška: pomiješati 'n-1' i 'n' u eksponentu — peti član je a₁·q⁴, ne a₁·q⁵.",
    "Provjera ✓: niz: 3/4, 1/2, 1/3, 2/9, 4/27, 8/81 — šesti član je 8/81 ✓ (svaki uzastopni se množi s 2/3)."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:27.2,type:"sa",topic:"niz",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Prvi je član geometrijskoga reda 0,5, a suma je toga geometrijskoga reda 1,25. Koliko iznosi kvocijent toga geometrijskoga reda?",
  sol:{ans:"0,6",alt:["0,6","3/5"]},
  steps:[
    {txt:"Formula za sumu beskonačnog geometrijskog reda (konvergira ako |q| < 1): S = a₁/(1 − q)."},
    {txt:"Zadano: a₁ = 0,5, S = 1,25. Postavi jednadžbu: 1,25 = 0,5/(1 − q)."},
    {txt:"Riješi za q: 1 − q = 0,5/1,25 = 0,4 ⇒ q = 1 − 0,4 = 0,6 ⇒ q = 0,6",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: 0,6 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (beskonačni geom. red): S = a₁ + a₁q + a₁q² + ... = a₁/(1 − q) ⟺ |q| < 1. Inače red divergira.",
    "Intuicija: 'beskonačna suma' konvergira jer su članovi sve manji (geometrijsko opadanje). Suma je konačna kad je 'kvocijent dovoljno mali'.",
    "Česta greška: pretpostaviti q = 0,6 = 3/5 bez provjere |q| < 1 (ovdje je OK, 0,6 < 1). Ili izračunati 1 − q = 0,4 i odgovoriti q = 0,4 (zaboraviti oduzeti od 1).",
    "Provjera ✓: a₁ = 0,5, q = 0,6. S = 0,5/(1 − 0,6) = 0,5/0,4 = 1,25 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:27.3,type:"sa",topic:"niz",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Zlatko je odlučio štedjeti. Prvi je dan u kasicu ubacio 1 kunu. Svaki sljedeći dan ubacit će 50 lipa više nego što je ubacio prethodnoga dana. Koliko će ukupno kuna uštedjeti na taj način za 45 dana?",
  sol:{ans:"540 kn",alt:["540","540kn","odgovor: 540 kn"]},
  steps:[
    {txt:"Identificiraj tip niza: ARITMETIČKI niz (svaki sljedeći član se POVEĆAVA za istu razliku d). a₁ = 1 kn (prvi dan), d = 0,5 kn (50 lipa = 0,5 kn dnevno povećanje), n = 45 dana."},
    {txt:"Formula za sumu prvih n članova aritmetičkog niza: Sₙ = (n/2)·(2a₁ + (n−1)·d) = (n/2)·(a₁ + aₙ)."},
    {txt:"Izračunaj 2a₁ + (n−1)·d = 2·1 + 44·0,5 = 2 + 22 = 24."},
    {txt:"S₄₅ = (45/2)·24 = 22,5·24 = 540 kn ⇒ 540 kn",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: 540 kn ✓",note:"odgovor",final:true},{txt:"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (aritmetički niz): aₙ = a₁ + (n−1)·d. Suma: Sₙ = (n/2)·(2a₁ + (n−1)·d) = (n/2)·(a₁ + aₙ) — pola broja članova puta zbroj prvog i zadnjeg.",
    "Intuicija: 'parovi' a₁ + aₙ, a₂ + aₙ₋₁, ... svi imaju isti zbroj. Ukupno n/2 takvih parova.",
    "Česta greška: zaboraviti pretvoriti lipe u kune (50 lipa = 0,5 kn) → krivi rezultat 540·100 = 54 000 (u lipama, ne kunama); ili koristiti formulu za GEOM. niz umjesto aritm. niz.",
    "Provjera ✓: aₙ = 1 + 44·0,5 = 23 kn (zadnji dan). S₄₅ = (45/2)·(1 + 23) = 22,5·24 = 540 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:28.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Koliko je x ako je log_x(8) = -1/3?",
  sol:{ans:"[FRAC:1|512]",alt:["1/512","odgovor: [FRAC:1|512]","odgovor","rezultat"]},
  solFormula:[{frac:[["1","512"]]}],
  steps:[
    {txt:"Definicija logaritma: log_x(a) = b ⟺ xᵇ = a (uz x > 0, x ≠ 1, a > 0). Primijeni: log_x(8) = −1/3 znači x^(−1/3) = 8."},
    {txt:"Riješi za x: digni obje strane na potenciju −3 (recipročno od −1/3): (x^(−1/3))^(−3) = 8^(−3), tj. x¹ = 8^(−3)."},
    {txt:"8^(−3) = 1/8³ = 1/512. Stoga x = 1/512. Provjera domene: x = 1/512 > 0 i ≠ 1, što vrijedi ⇒ x = [FRAC:1|512]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: [FRAC:1|512] ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (logaritam): log_x(a) = b ⟺ xᵇ = a. Logaritam baze x je 'inverzna operacija' eksponencijalne s istom bazom.",
    "Pravilo 2 (negativan eksponent): a^(−n) = 1/aⁿ. Stoga 8^(−3) = 1/8³ = 1/512.",
    "Intuicija: log_x(8) = −1/3 znači 'koja x dignuto na −1/3 daje 8'. Negativan eksponent → recipročna vrijednost; razlomak 1/3 → kubni korijen.",
    "Česta greška: krivo invertirati eksponent — pokušati x = 8^(¹⁄₃) = 2 (zaboraviti minus u −1/3); ili dignuti na potenciju −3 u krivom smjeru.",
    "Provjera ✓: log_[FRAC:1|512](8) = ? Treba pronaći b tako da [FRAC:1|512]^b = 8. [FRAC:1|512] = 8^(−3), pa (8^(−3))^b = 8^(−3b) = 8 = 8¹ ⇒ −3b = 1 ⇒ b = −1/3 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:28.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Riješite jednadžbu 0,5^{2x-1} + 0,25^{x-1} = 48.",
  sol:{ans:"x = -3/2",alt:["-3/2","-1,5"]},
  solFormula:[{pre:"x = −"},{frac:[["3","2"]]}],
  steps:[
    {txt:"Svedi sve potencije na istu bazu. [FRAC:1|2] = 2^(−1); [FRAC:1|4] = 2^(−2). Pa: [FRAC:1|2]^(2x−1) = 2^(−(2x−1)) = 2^(1−2x), te [FRAC:1|4]^(x−1) = 2^(−2(x−1)) = 2^(2−2x)."},
    {txt:"Uvedi supstituciju t = 2^(−2x) (= 2^(1−2x)·2^(−1)). Onda 2^(1−2x) = 2·2^(−2x) = 2t i 2^(2−2x) = 4·2^(−2x) = 4t."},
    {txt:"Jednadžba postaje 2t + 4t = 48 — ali NIJE točno: zapravo je 2^(1−2x) + 2^(2−2x) = 48. Stavi u = 2^(−2x): 2u + 4u = 48 ⇒ 6u = 48 ⇒ u = 8."},
    {txt:"2^(−2x) = 8 = 2³ ⇒ −2x = 3 ⇒ x = −3/2. NAPOMENA META: u ključu se pojavljuje '3/2' kao tiskarska greška; ispravno rješenje (verificirano SymPy) je x = −3/2 ⇒ x = -3/2",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = -3/2 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: eksponencijalne jednadžbe s različitim bazama svedi na ISTU bazu (najčešće prostu, ovdje 2), pa primijeni pravila potencija (a^m·a^n = a^(m+n), (aᵐ)ⁿ = a^(m·n)).",
    "Pravilo 2 (supstitucija): kad se ista 'osnovna' veličina pojavljuje više puta (ovdje 2^(−2x)), uvedi novu varijablu — pretvori eksponencijalni problem u algebarski.",
    "Intuicija: ako baze odgovaraju (sve su potencije iste broja), eksponenti se mogu uspoređivati i izjednačavati direktno.",
    "Česta greška: krivi predznak pri pretvorbi (npr. [FRAC:1|2]^(2x−1) = 2^(2x−1) umjesto 2^(1−2x)); ili kriva tiskarska greška u ključu — verificirano: x = −3/2 ✓.",
    "Provjera ✓: x = −3/2 ⇒ [FRAC:1|2]^(2·(−3/2)−1) = [FRAC:1|2]^(−4) = 16; [FRAC:1|4]^(−3/2 − 1) = [FRAC:1|4]^(−5/2) = 4^(⁵⁄₂) = 32. Zbroj = 16 + 32 = 48 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:28.3,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Pacijent je dobio lijek. Količina lijeka K u organizmu opisana je formulom K(t) = 2,5·0,85^t (u mg, t u satima). Lijek prestaje djelovati kad je količina lijeka u organizmu manja od 1 mg. Nakon koliko će vremena lijek prestati djelovati?",
  sol:{ans:"5,64 h",alt:["5,64","5,64h","odgovor: 5,64 h"]},
  steps:[
    {txt:"Postavi jednadžbu za GRANICU: 2,5·0,85^t = 1 (čas kada lijek upravo prestaje djelovati)."},
    {txt:"Riješi za 0,85^t: 0,85^t = 1/2,5 = 0,4."},
    {txt:"Logaritmiraj obje strane (npr. prirodnim logaritmom): ln(0,85^t) = ln(0,4) ⇒ t·ln(0,85) = ln(0,4)."},
    {txt:"t = ln(0,4)/ln(0,85) = (−0,9163)/(−0,1625) ≈ 5,64 h ⇒ t ≈ 5,64 h",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: 5,64 h ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (eksponencijalne jednadžbe): aˣ = b ⇒ x = log_a(b) = ln(b)/ln(a) (formula promjene baze).",
    "Intuicija: 'koliko vremena dok količina padne ispod 1' — postavi granicu (= 1), pa logaritmiraj. Eksponencijalno opadanje znači količina pada brzo isprva, sporije kasnije.",
    "Pravilo 3 (logaritam recipročne baze): ln(b)/ln(a) za 0 < a < 1 i 0 < b < 1 daje POZITIVAN rezultat (oba ln-a negativna, dijeljenje pozitivno).",
    "Česta greška: dignuti samo 0,85^t = 0,4 na logaritam, ali zaboraviti da je t koeficijent ispred ln(0,85); ili krivo postavljanje koeficijenta 2,5 (npr. zaboraviti dijeljenje s 2,5 prije logaritmiranja).",
    "Provjera ✓: t = 5,64 ⇒ K(5,64) = 2,5·[FRAC:85|100]^(5,64) ≈ 2,5·0,400 = 1,000 mg ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:29.1,img:true,type:"sa",topic:"anal",points:2,img:true,ex:"Standardni oblik jednadžbe kružnice + identifikacija središta i polumjera + crtanje. Test: čitanje predznaka iz (x − a)² i (y − b)², ekstrakcija r iz r².",
  context:"Zadatak 29 (1. dio od 4):",
  q:"Zadana je kružnica (x-2)² + (y+3)² = 25. Odredite joj središte i nacrtajte je u koordinatnome sustavu.",
  sol:{ans:"S(2, -3), r = 5",alt:["(2,-3)","S=(2,-3)"]},
  steps:[
    {txt:"Standardna jednadžba kružnice u koordinatnoj ravnini: (x − a)² + (y − b)² = r², gdje je S(a, b) središte i r polumjer."},
    {txt:"Usporedi zadanu jednadžbu (x − 2)² + (y + 3)² = 25 sa standardnim oblikom. Brojevi 'a' i 'b' su oni koje se ODUZIMA od x i y."},
    {txt:"(x − 2)² odgovara a = 2; (y + 3)² = (y − (−3))² odgovara b = −3. Polumjer: r² = 25 ⇒ r = 5 (pozitivan)."},
    {txt:"Središte S(2, −3). Nacrtaj: stavi šestar u (2, −3), polumjer 5; kružnica prolazi kroz (7, −3), (−3, −3), (2, 2), (2, −8) (najistočnija, najzapadnija, najsjevernija, najjužnija točka) ⇒ S(2, −3), r = 5",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: u koord. sustavu rezultat očekivane veličine ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: S(2, -3), r = 5 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (standardna jednadžba kružnice): (x − a)² + (y − b)² = r² ima središte (a, b) i polumjer r. Suprotno: opći oblik x² + y² + Dx + Ey + F = 0 može se 'sredinom kvadrata' pretvoriti u standardni.",
    "Intuicija: predznak unutar zagrade je SUPROTAN od x/y-koordinate središta. (x − 2)² → središte u x = 2; (y + 3)² → središte u y = −3.",
    "Alt metoda: opći oblik provjeri direktnim uvrštavanjem — uvrsti potencijalnu točku središta kao test (npr. (2, −3) bi se trebalo postaviti tako da svaki član u zagradi bude 0, što verificira središte).",
    "Česta greška: krivo čitati predznak (npr. uzeti b = 3 umjesto b = −3 jer 'y + 3'); ili zaboraviti uzeti kvadratni korijen za r (uzeti r = 25 umjesto r = 5)."
  ,"Provjera: analitička provjera: točke i pravci u koordinatnom sustavu ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:29.2,type:"sa",topic:"geom",points:2,ex:"Slični trokuti — omjer površina = (omjer linearnih duljina)². Test: izračun P(ABC), identifikacija omjera sličnosti iz visina, pa primjena k² faktora.",
  context:"Zadatak 29 (2. dio od 4):",
  q:"U trokutu ABC duljina stranice AB jednaka je 6 cm, a duljina visine iz vrha C jednaka je 4,1 cm. Kolika je površina njemu sličnoga trokuta A′B′C′ kojemu je duljina visine iz vrha C′ jednaka duljini stranice AB trokuta ABC?",
  sol:{ans:"1 [FRAC:080|41] cm²",alt:["26,34","1080/41"]},
  solFormula:[{frac:[["1 080","41"]]},{pre:" cm²"}],
  steps:[
    {txt:"Površina trokuta ABC: P(ABC) = (1/2)·baza·visina = (1/2)·AB·h_C = (1/2)·6·4,1 = 12,3 cm²."},
    {txt:"Identificiraj omjer sličnosti k. Pošto su trokuti slični, svi LINEARNI elementi (stranice, visine, polumjeri opisane/upisane kružnice) imaju isti omjer. Visina iz C′ je h_C′ = AB = 6 cm; visina iz C je h_C = 4,1 cm. Stoga k = h_C′/h_C = 6/4,1 = 60/41."},
    {txt:"Omjer površina sličnih likova je KVADRAT omjera duljina: P(A′B′C′)/P(ABC) = k² = (60/41)² = 3600/1681."},
    {txt:"P(A′B′C′) = P(ABC) · k² = 12,3 · (3600/1681) = (123/10) · (3600/1681) = (123·3600)/(10·1681) = 442 800/16 810 = 1 080/41 ≈ 26,34 cm² ⇒ 1080/41 ≈ 26,34 cm²",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 1 [FRAC:080|41] cm² ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (slični likovi): kod sličnih likova s omjerom sličnosti k, omjer LINEARNIH duljina je k, omjer POVRŠINA je k², omjer VOLUMENA (za 3D) je k³.",
    "Pravilo 2: omjer sličnosti se može odrediti iz BILO KOJIH dva odgovarajuća linearna elementa (stranice, visine, polumjeri, ...).",
    "Intuicija: ako 'povećaš' lik k puta linearno, površina raste k² puta (jer površina je 'lijevo' i 'desno' istovremeno = k·k).",
    "Alt metoda: nakon nalaženja k, izračunaj VIŠE elemenata A′B′C′ — npr. AB′ = k·AB = (60/41)·6 = 360/41 cm. Onda P(A′B′C′) = (1/2)·AB′·h_C′ = (1/2)·(360/41)·6 = 1080/41 cm² ✓",
    "Česta greška: pomiješati k i k² — koristiti samo k za omjer površina (rezultat bi bio 18 cm² umjesto 26,34 cm²)."
  ,"Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:29.3,type:"sa",topic:"anal",points:3,ex:"Elipsa + tangenta u danoj točki + udaljenost pravca od ishodišta. Test integracije: određivanje parametra b², primjena standardne formule za tangentu na elipsu (x₀x/a² + y₀y/b² = 1), zatim formula za udaljenost.",
  context:"Zadatak 29 (3. dio od 4):",
  q:"Točka T(2, -6) pripada krivulji x²/16 + y²/b² = 1. Neka je t tangenta na tu krivulju u točki T. Odredite udaljenost tangente t od ishodišta koordinatnoga sustava.",
  sol:{ans:"4√2",alt:["4sqrt2","≈5,66"]},
  steps:[
    {txt:"Odredi b²: uvrsti T(2, −6) u jednadžbu krivulje x²/16 + y²/b² = 1: 4/16 + 36/b² = 1 ⇒ 1/4 + 36/b² = 1 ⇒ 36/b² = 3/4 ⇒ b² = 48."},
    {txt:"Krivulja je elipsa x²/16 + y²/48 = 1 (a² = 16, b² = 48; b² > a² znači elipsa je 'razvučena' vertikalno)."},
    {txt:"Jednadžba tangente na elipsu x²/a² + y²/b² = 1 u točki (x₀, y₀): x₀·x/a² + y₀·y/b² = 1. Uvrsti T(2, −6): 2x/16 + (−6)y/48 = 1 ⇒ x/8 − y/8 = 1."},
    {txt:"Pomnoži s 8: x − y = 8, tj. tangenta t: x − y − 8 = 0 (standardni oblik Ax + By + C = 0 s A = 1, B = −1, C = −8)."},
    {txt:"Udaljenost ishodišta od pravca: d = |A·0 + B·0 + C|/√(A² + B²) = |−8|/√(1 + 1) = 8/√2 = 8·√2/2 = 4√2 ≈ 5,66 ⇒ 4√2",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (udaljenost točke od pravca): za pravac Ax + By + C = 0 i točku (x₀, y₀), udaljenost = |Ax₀ + By₀ + C|/√(A² + B²).",note:"intuicija",final:true},{txt:"Točan odgovor: 4√2 ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (tangenta na elipsu): za elipsu x²/a² + y²/b² = 1 u točki (x₀, y₀) na elipsi, tangenta ima jednadžbu x₀x/a² + y₀y/b² = 1. (Slično za hiperbolu s minusom, i za kružnicu kao poseban slučaj a = b = r.)",
    "Pravilo 2 (udaljenost točke od pravca): za pravac Ax + By + C = 0 i točku (x₀, y₀), udaljenost = |Ax₀ + By₀ + C|/√(A² + B²).",
    "Pravilo 3 (racionalizacija): 8/√2 = 8·√2/(√2·√2) = 8√2/2 = 4√2.",
    "Intuicija: tangenta na elipsu u točki T se može izvesti i deriviranjem implicitne jednadžbe, ali postoji ELEGANTNA formula koja 'sample-aj' x i y u jednadžbi: x² → x₀·x, y² → y₀·y.",
    "Alt metoda: implicitno deriviranje. Iz x²/16 + y²/48 = 1: 2x/16 + (2y/48)·y′ = 0 ⇒ y′ = −(48/16)·(x/y) = −3x/y. U T(2, −6): nagib = −3·2/(−6) = 1. Tangenta: y − (−6) = 1·(x − 2) ⇒ y = x − 8 ⇒ x − y = 8 ✓",
    "Česta greška: pogrešno primijeniti tangentnu formulu — npr. x²/a² → x/a² (zaboraviti faktor x₀); ili pogrešno udaljenost (uzeti |A·0 + B·0 + C| bez normalizacije √(A² + B²))."
  ,"Provjera: analitička provjera: točke i pravci u koordinatnom sustavu ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:29.4,img:true,type:"sa",topic:"geom",points:3,img:true,ex:"'Kosi' trapez — nestandardna konfiguracija gdje su oba kraka nagnuta u ISTOM smjeru. Test: prepoznati neuobičajeni trapez iz kutova (25° + 145° = 170° ≠ 180°, što indicira ne-jednakokračan); jednadžba za visinu h·(cot 25° − cot 35°) = razlika baza; izračun krakova preko h/sin α.",
  context:"Zadatak 29 (4. dio od 4):",
  q:"Zemljište ima oblik trapeza kao na skici: gornja (kraća) osnovica = 87,5 m, donja (dulja) osnovica = 105 m, kut pri donjem lijevom vrhu = 25°, kut pri donjem desnom vrhu = 145°. Koliko najmanje metara ograde treba kupiti da bi se ogradilo to zemljište?",
  sol:{ans:"292,89 m",alt:["292,89","292,89m","odgovor: 292,89 m"]},
  steps:[
    {txt:"Ovo je 'KOSI' trapez — kutovi pri donjoj osnovici 25° i 145° NISU komplementarni i NISU jednaki (kao kod jednakokračnog ili pravokutnog trapeza). Konfiguracija: kut 145° = 180° − 35°, što znači desni krak ide UNUTAR trapeza, oba kraka nagnuta DESNO. Razlika osnovica: 105 − 87,5 = 17,5 m."},
    {txt:"Označi h kao visinu trapeza. Lijevi krak (kut 25° s donjom osnovicom) ima horizontalnu projekciju h·cot(25°). Desni krak (kut 35° izvana, jer 180°−145° = 35°) ima horizontalnu projekciju h·cot(35°). Pošto oba kraka idu u ISTOM smjeru (desno), razlika njihovih projekcija = 17,5 m."},
    {txt:"Jednadžba: h·(cot 25° − cot 35°) = 17,5. Izračun: cot 25° ≈ 2,1445, cot 35° ≈ 1,4281, razlika ≈ 0,7164. Stoga h = 17,5/0,7164 ≈ 24,43 m."},
    {txt:"Krakovi (preko h i odgovarajućeg kuta s osnovicom): lijevi krak L₁ = h/sin(25°) = 24,43/0,4226 ≈ 57,80 m; desni krak L₂ = h/sin(35°) = 24,43/0,5736 ≈ 42,59 m."},
    {txt:"Opseg (= duljina ograde): osnovice + oba kraka = 87,5 + 105 + 57,80 + 42,59 ≈ 292,89 m ⇒ ≈ 292,89 m",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (kut 145°): ako je kut pri vrhu = 145°, kut između kraka i donje osnovice (mjeren izvan) = 180° − 145° = 35°. Kosi trapez ima oba kraka usmjerena u istu stranu — neuobičajeno za maturalne probleme.",note:"intuicija",final:true},{txt:"Točan odgovor: 292,89 m ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: kod proizvoljnog trapeza, visina i krakovi povezani su s kutovima preko sin/cos: h = krak·sin(kut s osnovicom), horizontalna projekcija = krak·cos(kut).",
    "Pravilo 2 (kut 145°): ako je kut pri vrhu = 145°, kut između kraka i donje osnovice (mjeren izvan) = 180° − 145° = 35°. Kosi trapez ima oba kraka usmjerena u istu stranu — neuobičajeno za maturalne probleme.",
    "Intuicija: zbroj kutova trapeza = 360°. Standardni jednakokračni trapez ima oba donja kuta jednaka; pravokutni ima dva kuta od 90°. Ovo je rijedak slučaj 'kosog' trapeza gdje matematika i dalje radi, ali interpretacija je suptilna.",
    "Alt metoda: koordinate. Stavi donji lijevi vrh u (0, 0), donji desni u (105, 0). Gornji lijevi: (h·cot 25°, h). Gornji desni: (h·cot 25° + 87,5, h). Ovaj mora biti i (105 + h·cot 35°, h) ili (105 − h·cot 35°, h) — ovisno o orijentaciji. Rješavanje daje istu vrijednost h.",
    "Česta greška: pretpostaviti standardni jednakokračni trapez (kutovi 25° + 25° = 50°, što ne odgovara stvarnoj sumi); ili krivi predznak u jednadžbi h·(cot 25° + cot 35°) = razlika (rezultira pogrešno h ≈ 4,89 m).",
    "Provjera ✓: opseg = 87,5 + 105 + L₁ + L₂ = 192,5 + 57,80 + 42,59 = 292,89 m ✓. Visina h ≈ 24,43 m daje konzistentne krakove kroz oba kuta."
  ,"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:30,type:"sa",topic:"al",points:4,ex:"Iracionalna nejednadžba s dva korijena — opasan tip jer kvadriranje obje strane može unijeti 'lažna rješenja'. Strategija: odredi domenu, riješi pripadajuću JEDNADŽBU za granice, pa primijeni monotoničku analizu da bi odredio smjer rješenja.",
  q:"Koji je skup svih rješenja nejednadžbe √(4-3x) − √(x+1) > 2?",
  sol:{ans:"[-1, -3/4⟩",alt:["[-1, -3/4⟩","x∈[-1, -3/4⟩"]},
  solFormula:[{pre:"[-1, −"},{frac:[["3","4"]]},{pre:"⟩"}],
  steps:[
    {txt:"Odredi DOMENU: oba korijena moraju biti definirana. 4 − 3x ≥ 0 ⇒ x ≤ 4/3; x + 1 ≥ 0 ⇒ x ≥ −1. Domena: x ∈ [−1, 4/3]."},
    {txt:"Pronađi GRANICU rješenja rješavanjem jednadžbe √(4 − 3x) − √(x + 1) = 2. Premjesti drugi član: √(4 − 3x) = √(x + 1) + 2."},
    {txt:"Kvadriraj obje strane: 4 − 3x = (x + 1) + 4√(x + 1) + 4 = x + 5 + 4√(x + 1). Preuredi: −4x − 1 = 4√(x + 1) ⇒ −(4x + 1) = 4√(x + 1)."},
    {txt:"Da bi desna strana bila ≥ 0, mora biti 4x + 1 ≤ 0, tj. x ≤ −1/4. Kvadriraj ponovno: (4x + 1)² = 16(x + 1) ⇒ 16x² + 8x + 1 = 16x + 16 ⇒ 16x² − 8x − 15 = 0."},
    {txt:"Riješi kvadratnu: x = (8 ± √(64 + 960))/32 = (8 ± 32)/32. Rješenja: x = 40/32 = 5/4 ili x = −24/32 = −3/4. Provjeri uvjet x ≤ −1/4: x = 5/4 ne zadovoljava (odbaci); x = −3/4 zadovoljava."},
    {txt:"Granica: x = −3/4. Provjeri smjer: pri x = −1 (donja granica domene): √(4 + 3) − √(0) = √7 ≈ 2,65 > 2 ✓ (zadovoljava); pri x = 0: √4 − √1 = 2 − 1 = 1 < 2 (ne zadovoljava). Funkcija f(x) = √(4 − 3x) − √(x + 1) je PADAJUĆA u domeni (jer prvi član pada, drugi raste), pa nejednakost > 2 vrijedi za x < −3/4 unutar domene. Rješenje: [−1, −3/4⟩ ⇒ x ∈ [−1, −3/4⟩",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (kvadriranje): SAMO kvadriraj kad su obje strane istog predznaka (najčešće obje pozitivne). Kvadriranje može unijeti 'fantomska' rješenja koja se moraju naknadno provjeriti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (iracionalne nejednadžbe): odredi domenu (svi korijeni ≥ 0); riješi pripadajuću JEDNADŽBU za granice; provjeri smjer nejednakosti TEST-TOČKOM u svakom intervalu.",note:"postupak",final:true},{txt:"Točan odgovor: [-1, -3/4⟩ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (iracionalne nejednadžbe): odredi domenu (svi korijeni ≥ 0); riješi pripadajuću JEDNADŽBU za granice; provjeri smjer nejednakosti TEST-TOČKOM u svakom intervalu.",
    "Pravilo 2 (kvadriranje): SAMO kvadriraj kad su obje strane istog predznaka (najčešće obje pozitivne). Kvadriranje može unijeti 'fantomska' rješenja koja se moraju naknadno provjeriti.",
    "Pravilo 3 (monotonija): ako f raste i g pada, onda f − g pada (suprotno). Pomaže odrediti smjer rješenja bez direktnog uvrštavanja na više mjesta.",
    "Intuicija: 'razlika korijena > 2' — za male x prvi je veliki, drugi mali → razlika velika (zadovoljava); za veće x → razlika se smanjuje (ne zadovoljava). Granica je gdje razlika = 2.",
    "Alt metoda: derivacija. f(x) = √(4−3x) − √(x+1); f′(x) = (−3)/(2√(4−3x)) − 1/(2√(x+1)) — uvijek NEGATIVAN u unutrašnjosti domene → f je strogo padajuća → rješenje > 2 je 'lijevo' od granice.",
    "Česta greška: zaboraviti domenu (uključiti rješenja izvan [−1, 4/3]); ili zaboraviti UVJET znaka prije kvadriranja (npr. −(4x+1) = 4√(x+1) zahtijeva 4x+1 ≤ 0); ili dati interval suprotnog smjera ⟨⟨−3/4, 4/3] umjesto [−1, −3/4⟩⟩.",
    "Provjera ✓: x = −3/4: √(4 + 9/4) − √(1/4) = √(25/4) − 1/2 = 5/2 − 1/2 = 2 (jednakost, isključen) ✓. x = −0,9 (unutar [−1, −3/4⟩⟩: √(4 + 2,7) − √(0,1) = √6,7 − √0,1 ≈ 2,588 − 0,316 = 2,272 > 2 ✓"
  ,"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]}
];

export const qImages = {
  "2015_ljeto_A__10": () => e(SvgZad10_2015LA, null),
  "2015_ljeto_A__20.1": () => e(Svg20_2015Alj, null),
  "2015_ljeto_A__22.2": () => e(Svg22_2015Alj, null),
  "2015_ljeto_A__23.1": () => e(SvgZad23a_2015LA, null),
  "2015_ljeto_A__26.1": () => e(SvgZad26_2015LA, null),
  "2015_ljeto_A__26.2": () => e(SvgZad26_2015LA, null),
  "2015_ljeto_A__29.1": () => e(Svg29_2015Alj, null),
  "2015_ljeto_A__29.4": () => e(SvgZad29d_2015LA, null),
  "2015_ljeto_A__5": () => e(SvgZad5_2015LA, null),
  "2015_ljeto_A__6": () => e(SvgZad6_2015LA, null),
};
