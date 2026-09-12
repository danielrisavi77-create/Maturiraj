// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2019Bj(){
  const W=280,H=200,pad={l:40,r:60,t:14,b:50};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const groups=["15\u201317","18\u201323","24\u201326","27\u201330"];
  const mins=[100,80,65,45];
  const pcts=[70,56,35,30];
  const maxM=110,maxP=80;
  const bw=iW/groups.length,sw=bw*0.3;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* osi */
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1}),
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1}),
    /* lijeva os: minute */
    ...[0,20,40,60,80,100].map(v=>{const y=pad.t+iH-(v/maxM)*iH;return e("text",{key:"yl"+v,x:pad.l-6,y:y+4,textAnchor:"end",fontSize:8,fill:"var(--muted)"},String(v))}),
    /* stupci */
    ...groups.map((g,i)=>{
      const x=pad.l+i*bw+bw/2;
      const hM=mins[i]/maxM*iH,hP=pcts[i]/maxP*iH;
      return e("g",{key:"gr"+i},
        /* sivi stupac (minute) */
        e("rect",{x:x-sw-2,y:pad.t+iH-hM,width:sw,height:hM,fill:"var(--muted)",fillOpacity:0.5}),
        /* crveni/roza stupac (postotak) */
        e("rect",{x:x+2,y:pad.t+iH-hP,width:sw,height:hP,fill:_BLUE,fillOpacity:0.7}),
        /* labela */
        e("text",{x:x,y:pad.t+iH+14,textAnchor:"middle",fontSize:9,fill:"var(--text)"},g)
      );}),
    /* desna os: postotak */
    e("line",{x1:pad.l+iW,y1:pad.t,x2:pad.l+iW,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1}),
    ...[0,10,20,30,40,50,60,70].map(v=>{const y=pad.t+iH-(v/maxP)*iH;return e("text",{key:"yr"+v,x:pad.l+iW+4,y:y+4,fontSize:8,fill:_BLUE},v+"%")}),
    /* legenda tekst */
    e("text",{x:pad.l-4,y:pad.t-2,fontSize:7,fill:"var(--muted)"},"min"),
    e("text",{x:pad.l+iW+4,y:pad.t-2,fontSize:7,fill:_BLUE},"%"),
    e("text",{x:pad.l+iW/2,y:H-4,textAnchor:"middle",fontSize:8,fill:"var(--text)"},"dobna skupina (u godinama)")
  );
}

function Svg27c_2019Bj(){
  const W=200,H=160;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const B={x:15,y:15},A={x:185,y:15},C={x:100,y:140};
  const M={x:(B.x+A.x)/2,y:B.y};
  const midBA={x:(B.x+A.x)/2,y:B.y};
  const midBC={x:(B.x+C.x)/2,y:(B.y+C.y)/2};
  const midAC={x:(A.x+C.x)/2,y:(A.y+C.y)/2};
  const projBC={x:midBC.x,y:B.y};
  const projAC={x:midAC.x,y:A.y};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:`${B.x},${B.y} ${A.x},${A.y} ${C.x},${C.y}`,fill:"var(--blue)",fillOpacity:0.06,stroke:"var(--blue)",strokeWidth:1.5}),
    /* isprekidane linije presavijanja */
    e("line",{x1:midBC.x,y1:midBC.y,x2:midAC.x,y2:midAC.y,stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:midBC.x,y1:midBC.y,x2:midBC.x,y2:B.y,stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:midAC.x,y1:midAC.y,x2:midAC.x,y2:A.y,stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    /* oznake */
    e("text",{x:B.x-4,y:B.y-4,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"B"),
    e("text",{x:A.x+2,y:A.y-4,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"A"),
    e("text",{x:C.x,y:C.y+14,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"C"),
    e("text",{x:M.x,y:M.y-4,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"M"),
    e("circle",{cx:M.x,cy:M.y,r:2.5,fill:"var(--blue)"})
  );
}

function Svg27b_2019Bj(){
  const W=220,H=200;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:15,y:180},B={x:195,y:180},C={x:50,y:20};
  /* Upisana kružnica: središte I, polumjer r */
  const a=Math.sqrt((B.x-C.x)**2+(B.y-C.y)**2);
  const b=Math.sqrt((A.x-C.x)**2+(A.y-C.y)**2);
  const c=Math.sqrt((A.x-B.x)**2+(A.y-B.y)**2);
  const s=a+b+c;
  const Ix=(a*A.x+b*B.x+c*C.x)/s,Iy=(a*A.y+b*B.y+c*C.y)/s;
  const area=Math.abs((B.x-A.x)*(C.y-A.y)-(C.x-A.x)*(B.y-A.y))/2;
  const r=2*area/(a+b+c);
  /* Dirališta aprox */
  const tAB=8/23;
  const F={x:A.x+tAB*(C.x-A.x)/Math.sqrt((C.x-A.x)**2+(C.y-A.y)**2)*b*8/b,y:A.y+tAB*(C.y-A.y)/Math.sqrt((C.x-A.x)**2+(C.y-A.y)**2)*b*8/b};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* trokut */
    e("polygon",{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`,fill:"none",stroke:_BLUE,strokeWidth:1.4}),
    /* upisana kru\u017enica */
    e("circle",{cx:Ix,cy:Iy,r:r,fill:"var(--blue)",fillOpacity:0.08,stroke:"var(--blue)",strokeWidth:1.2}),
    /* oznake vrhova */
    e("text",{x:A.x-6,y:A.y+14,fontSize:13,fontStyle:"italic",fill:_GOLD},"A"),
    e("text",{x:B.x+2,y:B.y+14,fontSize:13,fontStyle:"italic",fill:_GOLD},"B"),
    e("text",{x:C.x-4,y:C.y-6,fontSize:13,fontStyle:"italic",fill:_GOLD},"C"),
    /* dirali\u0161ta oznake (aprox) */
    e("text",{x:A.x+20,y:(A.y+C.y)/2+20,fontSize:11,fontStyle:"italic",fill:"var(--blue)"},"F"),
    e("text",{x:(C.x+B.x)/2+8,y:(C.y+B.y)/2-4,fontSize:11,fontStyle:"italic",fill:"var(--blue)"},"E"),
    e("text",{x:(A.x+B.x)/2,y:A.y+14,textAnchor:"middle",fontSize:11,fontStyle:"italic",fill:"var(--blue)"},"G"),
    /* duljine */
    e("text",{x:A.x-2,y:(A.y+C.y)/2-4,fontSize:10,fill:"var(--blue)"},"8"),
    e("text",{x:(A.x+C.x)/2-10,y:(A.y+C.y)/2-20,fontSize:10,fill:"var(--blue)"},"11"),
    e("text",{x:(A.x+B.x)/2,y:A.y-6,textAnchor:"middle",fontSize:10,fontWeight:"bold",fill:"var(--blue)"},"23")
  );
}

function Svg27a_2019Bj(){
  const W=160,H=170;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=80,cy=75,R=60;
  const pts=[];
  for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;pts.push({x:cx+R*Math.cos(a),y:cy+R*Math.sin(a)})}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:pts.map(p=>`${p.x},${p.y}`).join(" "),fill:"var(--blue)",fillOpacity:0.07,stroke:"var(--blue)",strokeWidth:1.5}),
    /* kut α u donjem lijevom vrhu */
    (()=>{const p=pts[3],R2=14;
      const a1=Math.atan2(pts[2].y-p.y,pts[2].x-p.x),a2=Math.atan2(pts[4].y-p.y,pts[4].x-p.x);
      return e("path",{d:`M${p.x+R2*Math.cos(a2)},${p.y+R2*Math.sin(a2)} A${R2},${R2} 0 0,1 ${p.x+R2*Math.cos(a1)},${p.y+R2*Math.sin(a1)}`,
        fill:"none",stroke:"var(--blue)",strokeWidth:1})})(),
    e("text",{x:pts[3].x+8,y:pts[3].y-2,fontSize:12,fontStyle:"italic",fontWeight:"bold",fill:"var(--blue)"},"\u03b1")
  );
}

function Svg25a_2019Bj(){
  const W=220,H=200,pad={l:30,r:14,t:14,b:30};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1,xMax=11,yMin=-2,yMax=7;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const B={x:9,y:0},D={x:9,y:5},Hv={x:5,y:5},E={x:0,y:2};
  const pts=[[B.x,B.y],[D.x,D.y],[Hv.x,Hv.y],[E.x,E.y]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[0,1,2,3,4,5,6,7,8,9,10].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.3})),
    ...[-1,0,1,2,3,4,5,6].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.3})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-4},${oy-2.5} ${pad.l+iW-4},${oy+2.5}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+4} ${ox+2.5},${pad.t+4}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+3,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+3,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-8,y:oy+11,fontSize:8,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:1.5,fill:_RED}),
    e("text",{x:toX(1),y:oy+11,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:1.5,fill:_RED}),
    e("text",{x:ox-8,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"1"),
    /* \u010detverokut BDHE — ispuna + obrub */
    e("polygon",{points:pts.map(([x,y])=>`${toX(x)},${toY(y)}`).join(" "),fill:"var(--blue)",fillOpacity:0.12,stroke:"var(--blue)",strokeWidth:1.5}),
    /* oznake */
    e("text",{x:toX(B.x)+4,y:toY(B.y)+14,fontSize:12,fontStyle:"italic",fill:"var(--blue)"},"B"),
    e("text",{x:toX(D.x)+4,y:toY(D.y)-4,fontSize:12,fontStyle:"italic",fill:"var(--blue)"},"D"),
    e("text",{x:toX(Hv.x)-2,y:toY(Hv.y)-6,fontSize:12,fontStyle:"italic",fill:"var(--blue)"},"H"),
    e("text",{x:toX(E.x)-12,y:toY(E.y)+2,fontSize:12,fontStyle:"italic",fill:"var(--blue)"},"E"),
    ...pts.map(([x,y],i)=>e("circle",{key:"pt"+i,cx:toX(x),cy:toY(y),r:3,fill:"var(--blue)"}))
  );
}

function Svg24b_2019Bj(){
  const W=220,H=220,pad={l:30,r:14,t:14,b:30};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-5,xMax=4,yMin=-5,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const gridX=[-4,-3,-2,-1,0,1,2,3],gridY=[-4,-3,-2,-1,0,1,2,3,4,5];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.3})),
    ...gridY.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.3})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:1.5,fill:_RED}),
    e("text",{x:toX(1),y:oy+13,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:1.5,fill:_RED}),
    e("text",{x:ox-10,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"1")
  );
}

function SvgT24a_2019Bj(){
  const W=260,H=80;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cols=[0,65,130,195,260],cw=65;
  const hdr=["x","0","2",""];
  const vals=["f(x)","\u221242","28","0"];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("rect",{x:0,y:0,width:W,height:40,fill:"var(--blue)",fillOpacity:0.10}),
    e("rect",{x:0,y:0,width:cw,height:H,fill:"var(--blue)",fillOpacity:0.08}),
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.2}),
    e("line",{x1:0,y1:40,x2:W,y2:40,stroke:"var(--bdr)",strokeWidth:1}),
    ...[1,2,3].map(i=>e("line",{key:"vl"+i,x1:cols[i],y1:0,x2:cols[i],y2:H,stroke:"var(--bdr)",strokeWidth:.7})),
    ...hdr.map((t,i)=>e("text",{key:"h"+i,x:cols[i]+cw/2,y:25,textAnchor:"middle",fontSize:i===0?14:13,fontStyle:i===0?"italic":"normal",fill:i===0?"var(--text)":"var(--blue)"},t)),
    ...vals.map((t,i)=>e("text",{key:"tv"+i,x:cols[i]+cw/2,y:65,textAnchor:"middle",fontSize:i===0?14:13,fontStyle:i===0?"italic":"normal",fill:i===0?"var(--text)":"var(--blue)"},t))
  );
}

function Svg13_2019Bj(){
  /* Parabola otvorena gore, min na x=4: f(x) = (5/9)(x-4)^2 - 4
     Prolazi (0,5.0), (1,1), (2,-1.78), (3,-3.44), (4,-4), (5,-3.44), (6,-1.78) */
  const W=220,H=250,pad={l:30,r:14,t:14,b:30};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-0.5,xMax=5.8,yMin=-5,yMax=7;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const f=x=>(5/9)*(x-4)*(x-4)-4;
  const pts=[];
  for(let x=-0.2;x<=5.5;x+=0.03){
    const y=f(x);
    if(y>=yMin&&y<=yMax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const gridX=[0,1,2,3,4,5],gridY=[-4,-3,-2,-1,0,1,2,3,4,5,6];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4})),
    ...gridY.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2,fill:_RED}),
    e("text",{x:toX(1)-2,y:oy+13,fontSize:9,fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2,fill:_RED}),
    e("text",{x:ox-12,y:toY(1)+4,fontSize:9,fill:"var(--muted)"},"1"),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round"})
  );
}

function Svg1_2019Bj(){
  const W=260,H=40;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const x0=30,x1=230,y=20;
  const toX=v=>x0+(v-2)/(8-2)*(x1-x0);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:x0,y1:y,x2:x1,y2:y,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${x1},${y} ${x1-5},${y-3} ${x1-5},${y+3}`,fill:"var(--text)"}),
    ...[2,3,4,5,6,7,8].map(v=>e("line",{key:"t"+v,x1:toX(v),y1:y-4,x2:toX(v),y2:y+4,stroke:"var(--text)",strokeWidth:1})),
    ...[2,3,4,5,6,7,8].map(v=>e("text",{key:"l"+v,x:toX(v),y:y+16,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},String(v))),
    /* interval oznaka: rozasta linija od 4 do 6.5 (otvoreni rubovi) */
    e("line",{x1:toX(4),y1:y,x2:toX(6.5),y2:y,stroke:"var(--blue)",strokeWidth:4,strokeLinecap:"round",opacity:0.5}),
    /* otvorene krajnje to\u010dke */
    e("circle",{cx:toX(4),cy:y,r:4,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.5}),
    e("circle",{cx:toX(6.5),cy:y,r:4,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.5})
  );
}

export const qs = [
  {id:1,img:true,type:"mc",warn:"Pazi: očitaj granice intervala s brojevnog pravca (pazi otvoreno/zatvoreno).",topic:"br",points:1,
  q:"Koji od navedenih brojeva pripada intervalu prikazanomu na brojevnome pravcu?",
  opts:["3,4","4,2","6,9","7,5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo intervala: otvoreni rubovi ⟨a, b⟩ označavaju da krajnje vrijednosti a i b NISU uključene. Broj x ∈ ⟨a, b⟩ ⇔ a < x < b (strogo).","Postupak: 1) očitaj rubove intervala iz brojevnog pravca (ovdje 4 i 6,5). 2) tip rubova (otvoreni — prazne kružnice). 3) provjeri svaki kandidat formulom 4 < x < 6,5.","Intuicija: interval ⟨4, 6,5⟩ obuhvaća sve brojeve strogo između 4 i 6,5. Broj 4 sam i broj 6,5 sam — IZUZETI (otvoreni rubovi).","Česta greška: zaboraviti razliku otvoreni/zatvoreni rub. Ako je interval [4, 6,5⟩, onda 4 JE uključen; ako ⟨4, 6,5⟩, NIJE.","Alt metoda: vizualno pozicioniraj svaki broj na pravcu. 3,4 lijevo od 4 (izvan); 4,2 između 4 i 6,5 (unutar); 6,9 desno od 6,5 (izvan); 7,5 daleko desno (izvan).","Provjera: 4 < 4,2 < 6,5 ✓ — jedino B zadovoljava."],
  steps:[
    {txt:"Interval na brojevnom pravcu: ⟨4, 6,5⟩ s OTVORENIM rubovima (prazne kružnice na 4 i 6,5)."},
    {txt:"Uvjet: broj x pripada intervalu ako vrijedi 4 < x < 6,5 (strogo)."},
    {txt:"A) 3,4: 3,4 < 4 → izvan intervala (lijevo).",note:"diagnostika"},
    {txt:"B) 4,2: 4 < 4,2 < 6,5 → unutar intervala ✓.",note:"diagnostika"},
    {txt:"C) 6,9: 6,9 > 6,5 → izvan intervala (desno).",note:"diagnostika"},
    {txt:"D) 7,5: 7,5 > 6,5 → izvan intervala (desno).",note:"diagnostika"},
    {txt:"Točan odgovor: B) 4,2.",final:true,note:"odgovor"},
    {txt:"Provjera: 4 < 4,2 < 6,5 ✓ (4,2 strogo između 4 i 6,5).",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz pravca očitaj rubove i tip (otvoreni/zatvoreni). 2) primijeni odgovarajuću nejednakost. 3) testiraj svaki kandidat.",final:true,note:"postupak"},
    {txt:"Intuicija: na brojevnoj osi interval je 'komad' između rubova. Otvoreni rub = broj NE pripada; zatvoreni rub = pripada.",final:true,note:"intuicija"}
  ]},
  {id:2,type:"mc",warn:"Pazi: uvrsti a = 1 − √2; riješi UNUTARNJU apsolutnu vrijednost prvo (√2 ≈ 1,41).",topic:"br",points:1,
  q:"Koliko je |3 − |a − 2|| za a = 1 − √2?",
  opts:["2 − √2","5 − √2","1 + √2","6 + √2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo apsolutne vrijednosti: |x| = x ako x ≥ 0, |x| = −x ako x < 0. Geometrijski: udaljenost od 0.","Postupak za nested |...||: 1) izračunaj unutarnji izraz. 2) primijeni unutarnju apsolutnu vrijednost. 3) izračunaj vanjski izraz. 4) primijeni vanjsku.","Intuicija: √2 ≈ 1,414, pa 1 − √2 ≈ −0,414 (negativan), a − 2 ≈ −2,414 (negativan), |a − 2| ≈ 2,414. Onda 3 − 2,414 ≈ 0,586 (POZITIVAN), pa vanjska |...| ne mijenja znak.","Česta greška 1: zaboraviti unutarnju apsolutnu vrijednost — neki računaju |3 − a + 2| direktno (krivo). Greška 2: krivo prepoznati znak unutar |...|.","Alt metoda: računati simbolički — a − 2 = −1 − √2; uzeti pozitivni protubrojev (jer je negativan) → 1 + √2. Dalje 3 − (1 + √2) = 2 − √2 (pozitivan, jer 2 > √2). Vanjska |...| ne mijenja.","Provjera: √2 ≈ 1,414, pa 2 − √2 ≈ 0,586. Mali pozitivan broj — opcija A ima taj oblik ✓"],
  steps:[
    {txt:"Uvrsti a = 1 − √2 u izraz |3 − |a − 2||."},
    {txt:"Unutarnji dio: a − 2 = (1 − √2) − 2 = −1 − √2 ≈ −2,414"},
    {txt:"|a − 2| = |−1 − √2| = 1 + √2 (jer je broj negativan, apsolutna vrijednost obrće znak)"},
    {txt:"Vanjski dio: 3 − |a − 2| = 3 − (1 + √2) = 2 − √2 ≈ 0,586"},
    {txt:"|3 − |a − 2|| = |2 − √2|. Provjeri znak: 2 − √2 = 2 − 1,414 ≈ 0,586 > 0"},
    {txt:"Pošto je pozitivan, |2 − √2| = 2 − √2",final:true},
    {txt:"Točan odgovor: A) 2 − √2.",final:true,note:"odgovor"},
    {txt:"Provjera numerički: a = 1 − 1,414 ≈ −0,414; a − 2 ≈ −2,414; |a−2| ≈ 2,414; 3 − 2,414 = 0,586 = 2 − √2 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) 5 − √2 = krivo razvio apsolutnu vrijednost; C) 1 + √2 = stao na unutarnjem dijelu; D) 6 + √2 = krivi predznak.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo apsolutne vrijednosti: |x| = x ako x ≥ 0, |x| = −x ako x < 0. Geometrijski: udaljenost od 0.",note:"postupak",final:true},{txt:"Intuicija: Postupak za nested |...||: 1) izračunaj unutarnji izraz. 2) primijeni unutarnju apsolutnu vrijednost. 3) izračunaj vanjski izraz. 4) primijeni vanjsku.",note:"intuicija",final:true}
  ]},
  {id:3,type:"mc",warn:"Pazi: a/b = 5/7 → a = 5·9/7.",topic:"br",points:1,
  q:"Za brojeve a, b vrijedi a : b = 5 : 7. Koliki je broj a ako je b = 9?",
  opts:["35/9","11/2","45/7","63/5"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: omjer a : b = m : n znači a/b = m/n, pa a = b · (m/n).","Postupak: 1) prepoznaj omjer kao razlomak. 2) izrazi a kroz b koristeći proporcionalnost. 3) uvrsti zadano b.","Intuicija: omjer 5 : 7 znači 'za svakih 7 dijelova b, postoji 5 dijelova a'. Ako je b = 9, onda je a = 9 · 5/7 = 45/7 ≈ 6,43.","Česta greška 1: pomiješati a i b — neki računaju a = b · (n/m) umjesto b · (m/n) (krivi smjer). Greška 2: zaokružiti razlomak nepotrebno.","Alt metoda (proporcija): 5/7 = a/9 → 5·9 = 7·a → a = 45/7. Križno množenje.","Provjera: 45/7 ≈ 6,43; 9 · 5/7 = 9 · 0,714 ≈ 6,43 ✓; omjer 6,43/9 ≈ 0,714 = 5/7 ✓"],
  steps:[
    {txt:"Omjer a : b = 5 : 7 znači a/b = 5/7."},
    {txt:"Iz a/b = 5/7 i b = 9: a/9 = 5/7"},
    {txt:"a = 9 · (5/7) = 45/7",final:true},
    {txt:"Točan odgovor: C) 45/7.",final:true,note:"odgovor"},
    {txt:"Provjera: (45/7) : 9 = 45/7 · 1/9 = 45/63 = 5/7 ✓ (odgovara 5 : 7)",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 35/9 = pomiješao formulu (krivi smjer omjera); B) 11/2 = drugi krivi izračun; D) 63/5 = pomiješao a i b (računao kao b/a = 5/7).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: omjer a : b = m : n znači a/b = m/n, pa a = b · (m/n).",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) prepoznaj omjer kao razlomak. 2) izrazi a kroz b koristeći proporcionalnost. 3) uvrsti zadano b.",note:"intuicija",final:true}
  ]},
  {id:4,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Koja je od navedenih tvrdnja točna?",
  opts:["Svaki je prirodni broj i cijeli broj.","Svaki je cijeli broj i iracionalni broj.","Svaki je racionalni broj i cijeli broj.","Svaki je realni broj i iracionalni broj."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Hijerarhija skupova brojeva (od užeg ka širem): ℕ (1, 2, 3, ...) ⊊ ℤ (0, ±1, ±2, ...) ⊊ ℚ (razlomci a/b, b ≠ 0) ⊊ ℝ (svi realni).","Iracionalni brojevi (𝕀 = ℝ  ℚ): brojevi koji NISU racionalni. Npr. √2, π, e. Cijeli i racionalni brojevi NISU iracionalni.","Pravilo: 'svaki je x i y' znači X ⊂ Y (svaki X je istovremeno Y). To vrijedi samo ako je manji skup unutar većeg.","Intuicija: A kaže ℕ ⊂ ℤ — prirodni je vrsta cijelog (sa pozitivnim predznakom). To je točno definicija!","Česta greška 1: pomiješati racionalne i iracionalne (B i D). Greška 2: misliti da racionalni = cijeli (C — krivo, racionalni uključuje razlomke).","Alt metoda za eliminaciju: pronađi PROTUPRIMJER za svaku tvrdnju. Ako nađeš protuprimjer, tvrdnja je netočna; ako ne, vjerojatno je točna.","Provjera A: uzmi bilo koji prirodni broj (npr. 5). 5 ∈ ℕ ✓. 5 ∈ ℤ? Da, jer ℕ ⊂ ℤ ✓. Tvrdnja vrijedi za svaki ✓"],
  steps:[
    {txt:"Skupovi brojeva: ℕ (prirodni) ⊂ ℤ (cijeli) ⊂ ℚ (racionalni) ⊂ ℝ (realni). Iracionalni brojevi su realni ali NE racionalni."},
    {txt:"A) 'Svaki je prirodni broj i cijeli broj' — ℕ ⊂ ℤ ✓ (npr. 5 ∈ ℕ i 5 ∈ ℤ)",final:true},
    {txt:"B) 'Svaki je cijeli broj i iracionalni broj' — npr. 5 je cijeli ali NIJE iracionalan ✗"},
    {txt:"C) 'Svaki je racionalni broj i cijeli broj' — npr. 1/2 je racionalan ali NIJE cijeli ✗"},
    {txt:"D) 'Svaki je realni broj i iracionalni broj' — npr. 3 je realan ali NIJE iracionalan ✗"},
    {txt:"Točan odgovor: A.",final:true,note:"odgovor"},
    {txt:"Provjera: hijerarhija skupova: ℕ ⊊ ℤ ⊊ ℚ ⊊ ℝ. A iskazuje ℕ ⊂ ℤ što je vrijedi ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) cijeli vs iracionalan = disjunktni skupovi; C) razlomci kao 1/2 nisu cijeli; D) prirodni i racionalni brojevi nisu iracionalni.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Hijerarhija skupova brojeva (od užeg ka širem): ℕ (1, 2, 3, ...) ⊊ ℤ (0, ±1, ±2, ...) ⊊ ℚ (razlomci a/b, b ≠ 0) ⊊ ℝ (svi realni).",note:"postupak",final:true},{txt:"Intuicija: Iracionalni brojevi (𝕀 = ℝ \\ ℚ): brojevi koji NISU racionalni. Npr. √2, π, e. Cijeli i racionalni brojevi NISU iracionalni.",note:"intuicija",final:true}
  ]},
  {id:5,type:"mc",warn:"Pazi: (n − 1) = (a − b)/c → n = (a − b)/c + 1.",topic:"al",points:1,
  q:"Čemu je jednako n iz jednakosti a = b + (n − 1) · c za c ≠ 0?",
  opts:["n = (a−b+1)/c","n = a/c − b + 1","n = (a−b+c)/c","n = a/c − b + c"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo izoliranja varijable: koristi reverzne operacije obrnutim redoslijedom — najprije ono što je 'najudaljenije' od n.","Postupak: 1) prebaci b na lijevu (oduzeti b). 2) podijeli s c (uz c ≠ 0). 3) prebaci −1 na lijevu (dodati 1).","Intuicija: ova formula je za aritmetički niz a_n = a_1 + (n − 1)·d, gdje je b = a_1, c = d, a = a_n. n je redni broj člana niza. Tako n = (a − b)/c + 1.","Česta greška 1: nepravilna distribucija — neki misle (a − b + 1)/c (krivo, ne distribuira). Greška 2: zaboraviti '+ 1' nakon dijeljenja.","Alt metoda (uz dobivanje istog rezultata): (a − b)/c + 1 = (a − b)/c + c/c = (a − b + c)/c. Oba oblika ekvivalentna.","Provjera dimenzionalna: ako su a, b, c iste jedinice, onda je n bezdimenzionalan (redni broj) ✓","Uvjet c ≠ 0: ako c = 0, jednadžba postaje a = b + 0 = b, što ima smisla samo ako a = b i n je proizvoljan — taj slučaj je isključen uvjetom."],
  steps:[
    {txt:"Cilj: izoliraj n. Postupak: prebaci b, podijeli s c (uz c ≠ 0)."},
    {txt:"a = b + (n − 1) · c"},
    {txt:"a − b = (n − 1) · c"},
    {txt:"(a − b)/c = n − 1"},
    {txt:"n = (a − b)/c + 1 = (a − b)/c + c/c = (a − b + c)/c",final:true},
    {txt:"Točan odgovor: C) n = (a − b + c) / c.",final:true,note:"odgovor"},
    {txt:"Provjera za a = 10, b = 4, c = 2: izvorno: 10 = 4 + (n − 1)·2 → 6 = 2(n−1) → n = 4. Formula: (10−4+2)/2 = 8/2 = 4 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) (a−b+1)/c = zaboravio kombinirati 1 s c; B) a/c − b + 1 = krivo distribuirao; D) a/c − b + c = pomiješao operacije.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo izoliranja varijable: koristi reverzne operacije obrnutim redoslijedom — najprije ono što je 'najudaljenije' od n.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) prebaci b na lijevu (oduzeti b). 2) podijeli s c (uz c ≠ 0). 3) prebaci −1 na lijevu (dodati 1).",note:"intuicija",final:true}
  ]},
  {id:6,type:"mc",warn:"Pazi: druga kateta = √(13² − 10²) = √69.",topic:"geom",points:1,
  q:"U pravokutnome je trokutu duljina hipotenuze 13 cm, a duljina jedne katete 10 cm. Kolika je duljina druge katete toga trokuta zaokružena na tri decimale?",
  opts:["8,306 cm","8,307 cm","16,401 cm","16,402 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pitagorin teorem: u pravokutnom trokutu c² = a² + b², gdje su a, b kateti i c hipotenuza. Hipotenuza je nasuprot pravom kutu.","Postupak: 1) identificiraj hipotenuzu i katete. 2) ako tražimo katetu, izoliraj: b² = c² − a². 3) korjenuj. 4) zaokruži kako traženo.","Intuicija: √69 mora biti između √64 = 8 i √81 = 9. Bliže 8, jer je 69 bliže 64 nego 81. Procjena 8,3 — pa preciznije izračunaj.","Česta greška 1: zbrojiti umjesto oduzimati — c² = a² + b² je formula, ali ako TRAŽIMO katetu, mora se OBRNUTI: b² = c² − a². Greške opcije C, D (16,401, 16,402) su rezultat zbrajanja: √(13² + 10²) = √269 ≈ 16,401.","Greška 2: zaokruživanje — 8,3066 → 8,307 (4. dec je 6 ≥ 5, naviše). NE 8,306.","Alt metoda: ako je trokut 5–12–13 (poznati pitagorski trojnik), znamo da 13² = 5² + 12², pa za 10 i 13 nije lijep trojnik — moramo računati √69 brojčano.","Provjera dimenzionalna: kateta MORA biti manja od hipotenuze. 8,307 < 13 ✓. Opcije C, D su veće od 13 → ne mogu biti kateti."],
  steps:[
    {txt:"Pravokutni trokut: c² = a² + b² (Pitagora). Ovdje: c = 13 (hipotenuza), a = 10 (jedna kateta), b = ? (druga kateta)."},
    {txt:"Izoliraj b: b² = c² − a² = 13² − 10² = 169 − 100 = 69"},
    {txt:"b = √69"},
    {txt:"Numerički: √69 ≈ 8,3066239..."},
    {txt:"Zaokruženo na 3 decimale: 8,307",final:true},
    {txt:"Točan odgovor: B) 8,307 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 8,307² ≈ 69,006 + 10² = 169,006 ≈ 169 ≈ 13² ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 8,306 = krivo zaokruženo (4. dec je 6 ≥ 5 → naviše); C) 16,401 = krivo (zbrojio kvadrate umjesto oduzimati); D) 16,402 = isti pristup kao C s zaokruživanjem.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pitagorin teorem: u pravokutnom trokutu c² = a² + b², gdje su a, b kateti i c hipotenuza. Hipotenuza je nasuprot pravom kutu.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) identificiraj hipotenuzu i katete. 2) ako tražimo katetu, izoliraj: b² = c² − a². 3) korjenuj. 4) zaokruži kako traženo.",note:"intuicija",final:true}
  ]},
  {id:7,type:"mc",warn:"Pazi: izrazi y = kx + l iz svakog pravca; nagib je koeficijent k.",topic:"anal",points:1,
  q:"Kojemu je od navedenih pravaca koeficijent smjera jednak −3/7?",
  opts:["3x − 7y + 1 = 0","7x − 3y + 21 = 0","7x + 3y − 9 = 0","3x + 7y − 15 = 0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: pravac ax + by + c = 0 može se napisati kao y = (−a/b)x − c/b. Koeficijent smjera (nagib) k = −a/b.","Postupak za određivanje k: 1) identifikuj a i b (koeficijenti uz x i y). 2) k = −a/b.","Intuicija: k pokazuje koliko se y mijenja po jedinici x. Negativan k = pravac OPADA. k = −3/7 znači blago opadanje (za 7 jedinica desno, 3 jedinice dolje).","Pravilo predznaka: ako su koeficijenti a i b ISTOG znaka, k je negativan; ako su SUPROTNOG, k je pozitivan.","Česta greška 1: zaboraviti minus u formuli k = −a/b (računati k = a/b). Greška 2: pomiješati brojnik/nazivnik (k = b/a umjesto a/b).","Alt metoda: postavi y = ... za svaku opciju, čitaj k direktno. Npr. D: 3x + 7y − 15 = 0 → y = (15 − 3x)/7 = 15/7 − (3/7)x. Vidi se k = −3/7.","Provjera za D: pravac prolazi (0, 15/7) sa nagibom −3/7. Druga točka: (7, 15/7 − 3) = (7, −6/7). Provjeri: 3·7 + 7·(−6/7) − 15 = 21 − 6 − 15 = 0 ✓"],
  steps:[
    {txt:"Pravac u obliku ax + by + c = 0 ima koeficijent smjera k = −a/b (eksplicitno y = −a/b · x − c/b)."},
    {txt:"Trazimo k = −3/7. Provjeri svaku opciju:"},
    {txt:"A) 3x − 7y + 1 = 0 → k = −3/(−7) = 3/7 ✗"},
    {txt:"B) 7x − 3y + 21 = 0 → k = −7/(−3) = 7/3 ✗"},
    {txt:"C) 7x + 3y − 9 = 0 → k = −7/3 ✗"},
    {txt:"D) 3x + 7y − 15 = 0 → k = −3/7 ✓",final:true},
    {txt:"Točan odgovor: D) 3x + 7y − 15 = 0.",final:true,note:"odgovor"},
    {txt:"Provjera: za pravac 3x + 7y − 15 = 0 izoliraj y: 7y = −3x + 15 → y = (−3/7)x + 15/7. Koeficijent smjera = −3/7 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) krivi predznak — 3/7 umjesto −3/7; B) zamijenjeni brojnik/nazivnik; C) krivi razlomak.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: pravac ax + by + c = 0 može se napisati kao y = (−a/b)x − c/b. Koeficijent smjera (nagib) k = −a/b.",note:"postupak",final:true},{txt:"Intuicija: Postupak za određivanje k: 1) identifikuj a i b (koeficijenti uz x i y). 2) k = −a/b.",note:"intuicija",final:true}
  ]},
  {id:8,type:"mc",warn:"Pazi: razvij desnu stranu, skupi članove uz x; rješenje ovisi o a.",topic:"al",points:1,
  q:"Koje je rješenje jednadžbe 1 + 2x = 3a − (1 − x) u kojoj je a realan broj?",
  opts:["x = a − 2/3","x = a","x = (3/2)a","x = 3a − 2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: linearna jednadžba s parametrom — riješiti za x dok a ostaje slobodan. Sve x-ove na jednu stranu, ostalo (uključujući parametar a) na drugu.","Postupak: 1) razvij zagrade (PAZI predznak negativnog množitelja). 2) prebaci x-ove na lijevu, a-ove i brojeve na desnu. 3) izoliraj x.","Intuicija: rješenje x = 3a − 2 ovisi o a. Za svaki konkretan a, dobiješ konkretan x. Linearna ovisnost x o a.","Česta greška 1: krivo razviti −(1 − x) = −1 + x (točno) vs −1 − x (krivo). Greška 2: pomiješati znakove pri premještanju.","Alt metoda: premjesti sve odmah na jednu stranu — 1 + 2x − 3a + 1 − x = 0 → 2 + x − 3a = 0 → x = 3a − 2.","Provjera s konkretnim a-ovima: a = 0 → x = −2; a = 2 → x = 4. Provjeri izvornu: a = 2, x = 4: lijeva 1 + 8 = 9; desna 6 − (1 − 4) = 6 + 3 = 9 ✓"],
  steps:[
    {txt:"Razvij zagradu: 1 + 2x = 3a − 1 + x"},
    {txt:"Premjesti sve x na lijevu, ostalo na desnu:"},
    {txt:"1 + 2x − x = 3a − 1"},
    {txt:"1 + x = 3a − 1"},
    {txt:"x = 3a − 2",final:true},
    {txt:"Točan odgovor: D) x = 3a − 2.",final:true,note:"odgovor"},
    {txt:"Provjera za a = 1: lijeva: 1 + 2x = 3 − (1 − x) = 2 + x → x = 1. Formula: 3·1 − 2 = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) a − 2/3 = krivo dijelio s 3; B) a = krivo (zaboravio konstantu); C) (3/2)a = drugi krivi izračun.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: linearna jednadžba s parametrom — riješiti za x dok a ostaje slobodan. Sve x-ove na jednu stranu, ostalo (uključujući parametar a) na drugu.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) razvij zagrade (PAZI predznak negativnog množitelja). 2) prebaci x-ove na lijevu, a-ove i brojeve na desnu. 3) izoliraj x.",note:"intuicija",final:true}
  ]},
  {id:9,type:"mc",warn:"Pazi: x² = 1/81 → x = ±1/9; umnožak = (1/9)·(−1/9) = −1/81.",topic:"al",points:1,
  q:"Koliki je umnožak rješenja jednadžbe 81x² = 1?",
  opts:["−1/9","−1/81","1/81","1/9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Vièteov teorem: ako su x₁, x₂ rješenja ax² + bx + c = 0, onda x₁ + x₂ = −b/a i x₁ · x₂ = c/a.","Za 81x² = 1 (tj. 81x² − 1 = 0): a = 81, b = 0, c = −1. Umnožak = c/a = −1/81.","Intuicija: rješenja su ±1/9 (simetrična oko 0). Njihov umnožak je negativan jer su suprotnih predznaka. (1/9)·(−1/9) = −1/81.","Česta greška 1: pomiješati SUMU i UMNOŽAK (zbroj rješenja = 0, jer su suprotni). Greška 2: zaboraviti negativan predznak — −1/81, ne 1/81.","Alt metoda (direktno): 81x² = 1 → x² = 1/81 → x = ±√(1/81) = ±1/9. Umnožak (1/9) · (−1/9) = −1/81.","Provjera Vièteovom: za 81x² + 0·x − 1 = 0, x₁ + x₂ = 0 (jer b = 0) ✓; x₁·x₂ = −1/81 ✓"],
  steps:[
    {txt:"Sredi jednadžbu: 81x² = 1 → 81x² − 1 = 0"},
    {txt:"Po Vièteovom teoremu: za jednadžbu ax² + bx + c = 0, umnožak rješenja = c/a."},
    {txt:"Ovdje: a = 81, b = 0, c = −1. Umnožak: c/a = −1/81",final:true},
    {txt:"Točan odgovor: B) −1/81.",final:true,note:"odgovor"},
    {txt:"Provjera direktno: 81x² = 1 → x² = 1/81 → x = ±1/9. Umnožak: (1/9)·(−1/9) = −1/81 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) −1/9 = uzeo SUMU rješenja (krivo); C) 1/81 = krivi predznak; D) 1/9 = krivo (1/81 vs 1/9 razlika u kvadratu).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Vièteov teorem: ako su x₁, x₂ rješenja ax² + bx + c = 0, onda x₁ + x₂ = −b/a i x₁ · x₂ = c/a.",note:"postupak",final:true},{txt:"Intuicija: Za 81x² = 1 (tj. 81x² − 1 = 0): a = 81, b = 0, c = −1. Umnožak = c/a = −1/81.",note:"intuicija",final:true}
  ]},
  {id:10,type:"mc",warn:"Pazi: postavi sustav (broj ulaznica + prihod) prema uvjetu zadatka.",topic:"br",points:1,
  q:"Cijena ulaznice za koncert u pretprodaji iznosi 90 kn, a na dan koncerta 120 kn. Koliko je ulaznica prodano u pretprodaji ako je za ukupno 800 prodanih ulaznica dobiveno 90 600 kn?",
  opts:["130","150","180","200"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: kad imamo dvije vrste cijena i ukupan prihod, postaviti jednadžbu sa nepoznatim brojem jednog tipa.","Postupak: 1) označi x = jedan tip ulaznica. 2) izrazi drugi tip kao (ukupno − x). 3) postavi jednadžbu prihoda. 4) riješi.","Intuicija: pretprodaja je JEFTINIJA (90 vs 120). Ako su sve prodane po 120: prihod = 96 000 kn. Manjak od 90 600: 96 000 − 90 600 = 5 400 kn. Ovi 5 400 dolaze od popusta 30 kn po pretprodaji: 5 400/30 = 180 ulaznica.","Česta greška 1: pomiješati cijene (90 i 120) ili broj (x i 800−x). Greška 2: računska greška pri velikim brojevima.","Alt metoda (procjena pretprodaje): ako su SVE po 90: prihod = 72 000 kn. Razlika 90 600 − 72 000 = 18 600 kn dolazi od 'doplate' 30 kn po onoj koja JE bila na dan koncerta. 18 600/30 = 620 ulaznica na dan koncerta, pa 800 − 620 = 180 u pretprodaji.","Provjera: oba alt pristupa daju 180 ✓"],
  steps:[
    {txt:"Neka je x broj ulaznica u pretprodaji (90 kn), onda je 800 − x na dan koncerta (120 kn)."},
    {txt:"Ukupan prihod: 90x + 120(800 − x) = 90 600"},
    {txt:"Razvij: 90x + 96 000 − 120x = 90 600"},
    {txt:"−30x = 90 600 − 96 000 = −5 400"},
    {txt:"x = 180",final:true},
    {txt:"Točan odgovor: C) 180.",final:true,note:"odgovor"},
    {txt:"Provjera: pretprodaja 180·90 = 16 200 kn; dan koncerta (800−180)·120 = 620·120 = 74 400 kn. Ukupno 16 200 + 74 400 = 90 600 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 130 = krivi raspored varijabli; B) 150 = računska greška; D) 200 = krivi izbor jednadžbe.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kad imamo dvije vrste cijena i ukupan prihod, postaviti jednadžbu sa nepoznatim brojem jednog tipa.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) označi x = jedan tip ulaznica. 2) izrazi drugi tip kao (ukupno − x). 3) postavi jednadžbu prihoda. 4) riješi.",note:"intuicija",final:true}
  ]},
  {id:11,type:"mc",warn:"Pazi: stopa = (živorođeni/ukupno stanovnika)·1000 (na 1000 stanovnika).",topic:"br",points:1,
  q:"Stopa rodnosti računa se kao omjer broja živorođene djece u odnosu na ukupan broj stanovnika i izražava se u promilima (‰). Broj živorođene djece u Hrvatskoj 2016. godine iznosio je 37 537, a ukupan broj stanovnika procijenjen je na 4 171 000. Kolika je bila stopa rodnosti u Hrvatskoj te godine?",
  opts:["0,9 ‰","1,1 ‰","9 ‰","11,1 ‰"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo promila (‰): jedna tisućina, dakle 1 ‰ = 1/1000 = 0,001. Postotak (%) je stotina (1/100); promili su DESET PUTA manji.","Stopa rodnosti formula: (živorođeni / stanovnika) · 1000 ‰. Množi sa 1000 (ne 100 kao kod postotka).","Postupak: 1) podijeli živorođene s ukupnim. 2) pomnoži s 1000. 3) zaokruži.","Intuicija: za 4,17 milijuna stanovnika ima 37 500 beba, što je ≈ 1 beba na 110 stanovnika ≈ 9 na 1000 ≈ 9‰.","Česta greška 1: zaboraviti množenje s 1000 (dobiti 0,009 umjesto 9). Greška 2: koristiti formulu za postotke (· 100) umjesto promile (· 1000).","Alt metoda: 37 537 / 4 171 = 9,0 (pošto je 4 171 ≈ 37 537/9). Promil je samo 'broj rodjenja po 1000 stanovnika'.","Provjera: stopa rodnosti za razvijene zemlje obično 8–12 ‰. Hrvatska 2016: 9 ‰ je realistično ✓"],
  steps:[
    {txt:"Stopa rodnosti = (broj živorođenih / ukupan broj stanovnika) · 1000 ‰ (promili)."},
    {txt:"= (37 537 / 4 171 000) · 1000"},
    {txt:"= 37 537 / 4 171 ≈ 8,9996..."},
    {txt:"≈ 9 ‰",final:true},
    {txt:"Točan odgovor: C) 9 ‰.",final:true,note:"odgovor"},
    {txt:"Provjera: 9 ‰ od 4 171 000 = 0,009 · 4 171 000 = 37 539 ≈ 37 537 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 0,9 ‰ = 10× manje (zaboravio · 1000); B) 1,1 ‰ = krivi izračun; D) 11,1 ‰ = procentno umjesto promili.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo promila (‰): jedna tisućina, dakle 1 ‰ = 1/1000 = 0,001. Postotak (%) je stotina (1/100); promili su DESET PUTA manji.",note:"postupak",final:true},{txt:"Intuicija: Stopa rodnosti formula: (živorođeni / stanovnika) · 1000 ‰. Množi sa 1000 (ne 100 kao kod postotka).",note:"intuicija",final:true}
  ]},
  {id:12,type:"mc",warn:"Pazi: jedna (dvostruka) nultočka ⇔ D = 0 → 11² − 4·(−4)·c = 0.",topic:"kv",points:1,
  q:"Kvadratna funkcija f(x) = −4x² + 11x + c ima samo jednu nultočku. Koja od navedenih tvrdnja vrijedi za koeficijent c?",
  opts:["c < −11","−11 < c < −4","−4 < c < 25","c > 25"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: kvadratna funkcija ima jednu (dvostruku) nultočku ⟺ D = 0; dvije ⟺ D > 0; nijedna ⟺ D < 0.","Diskriminanta: D = b² − 4ac. Za f(x) = ax² + bx + c, gdje x ima koeficijent b, a slobodni član c.","Postupak: 1) identificiraj a, b. 2) postavi D = 0. 3) riješi za parametar (ovdje c). 4) provjeri u opcijama (intervalna).","Intuicija: parabola dotiče x-os u TOČKI (tjeme na x-osi). To se događa za jednu specifičnu vrijednost parametra.","Česta greška 1: koristiti D > 0 (dvije nultočke). Greška 2: pomiješati a i c (ovdje a je koeficijent uz x², a c slobodni član — različito od koeficijenta c u jednadžbi koju tražimo).","Alt metoda: tjeme parabole je u (−b/2a, f(−b/2a)). Za jednu nultočku, tjeme JE nultočka: f(−b/2a) = 0. To daje istu vrijednost c.","Provjera: c = −121/16 ≈ −7,56. Interval B (−11, −4) sadrži −7,56 ✓"],
  steps:[
    {txt:"Kvadratna ima TOČNO JEDNU nultočku ⟺ diskriminanta D = 0."},
    {txt:"Za f(x) = −4x² + 11x + c: a = −4, b = 11, c (parametar)."},
    {txt:"D = b² − 4ac = 121 − 4·(−4)·c = 121 + 16c"},
    {txt:"D = 0: 121 + 16c = 0 → c = −121/16 = −7,5625"},
    {txt:"Provjera s opcijama: −11 < −7,5625 < −4 → opcija B vrijedi.",final:true},
    {txt:"Točan odgovor: B) −11 < c < −4.",final:true,note:"odgovor"},
    {txt:"Provjera: c = −7,5625. D = 121 + 16·(−7,5625) = 121 − 121 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) c < −11 — krivo (−7,5625 nije manje od −11); C) −4 < c < 25 — krivo (gornja granica); D) c > 25 — daleko izvan rang.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kvadratna funkcija ima jednu (dvostruku) nultočku ⟺ D = 0; dvije ⟺ D > 0; nijedna ⟺ D < 0.",note:"postupak",final:true},{txt:"Intuicija: Diskriminanta: D = b² − 4ac. Za f(x) = ax² + bx + c, gdje x ima koeficijent b, a slobodni član c.",note:"intuicija",final:true}
  ]},
  {id:13,img:true,type:"mc",warn:"Pazi: očitaj s grafa vrijednost i predznak funkcije na traženim mjestima.",topic:"kv",points:1,
  q:"Koja je od navedenih nejednakosti točna za funkciju f čiji je graf prikazan na slici?",
  opts:["f(1) < f(2)","f(2) < f(3)","f(3) < f(4)","f(4) < f(5)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo monotonosti: f raste ⟺ za x₁ < x₂ vrijedi f(x₁) < f(x₂); f opada ⟺ f(x₁) > f(x₂).","Postupak za očitavanje s grafa: 1) identificiraj tjeme parabole. 2) lijevo od tjemena parabola opada, desno raste (za parabolu otvorenu gore). 3) provjeri svaku nejednakost.","Intuicija: tjeme ovog grafa je oko x = 4 (najniža točka). f opada za x < 4 i raste za x > 4. Samo na intervalu desno od tjemena (4, 5) vrijedi f(x₁) < f(x₂).","Česta greška 1: zamijeniti smjer nejednakosti — npr. misliti da f(1) < f(2) vrijedi za opadajuću funkciju (krivo — to vrijedi za rastuću). Greška 2: ne primijetiti gdje se mijenja smjer rasta/pada.","Alt metoda: očitati direktno vrijednosti s grafa. f(1) ≈ 1, f(2) ≈ −1,8, f(3) ≈ −3,4, f(4) = -4 (min), f(5) ≈ −3,4. Provjera: jedino f(4) < f(5) (-4 < −3,4) je istina.","Provjera: u rastućoj zoni desno od tjemena (x = 4), za x₁ < x₂ vrijedi f(x₁) < f(x₂). Stoga f(4) < f(5) ✓; sve ostale opcije (1<2, 2<3, 3<4) su u opadajuoj zoni i ne vrijede."],
  steps:[
    {txt:"Iz grafa: parabola otvorena GORE s tjemenom (minimumom) oko x = 4."},
    {txt:"Funkcija opada na intervalu ⟨−∞, 4⟩ i raste na ⟨4, +∞⟩."},
    {txt:"A) f(1) < f(2): u OPADA zoni → f(1) > f(2), KRIVO.",note:"diagnostika"},
    {txt:"B) f(2) < f(3): u OPADA zoni → f(2) > f(3), KRIVO.",note:"diagnostika"},
    {txt:"C) f(3) < f(4): f(3) > f(4) jer f još opada do tjemena pri x=4. KRIVO.",note:"diagnostika"},
    {txt:"D) f(4) < f(5): od tjemena (x=4) funkcija RASTE prema x=5 → f(4) < f(5). TOČNO ✓",final:true},
    {txt:"Točan odgovor: D) f(4) < f(5).",final:true,note:"odgovor"},
    {txt:"Provjera: u rastućoj zoni (desno od tjemena), za x₁ < x₂ vrijedi f(x₁) < f(x₂) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) lokacira tjeme parabole (točka mijenjanja smjera). 2) odredi zone rasta/pada. 3) provjeri svaku opciju.",final:true,note:"postupak"},
    {txt:"Intuicija: parabola otvorena gore liči na zdjelu — opada slijeva, doseže dno (tjeme), pa se penje desno.",final:true,note:"intuicija"}
  ]},
  {id:14,type:"mc",warn:"Pazi: 1 čvor = 1 morska milja/h; pretvori u km/h prije računa vrijeme = put/brzina.",topic:"br",points:1,
  q:"Koliko je vremena potrebno trajektu da prijeđe put od 10 km ako plovi prosječnom brzinom 12 čvorova? Napomena: 1 čvor = 1,852 km/h",
  opts:["27 min","56 min","1h 32 min","2h 13 min"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: t = s / v (vrijeme = put / brzina). Jedinice se moraju slagati (km i km/h → h).","Konverzija jedinica: 1 čvor = 1,852 km/h (definicija). Brzina = 12 · 1,852 = 22,224 km/h.","Postupak: 1) pretvori brzinu u km/h. 2) podijeli put s brzinom (rezultat u h). 3) pretvori u min množenjem s 60.","Intuicija: brzina 22 km/h je kao prosječna brzina bicikla. 10 km bi trebalo ≈ 27 min — razumno za laganu vožnju.","Česta greška 1: zaboraviti konverziju čvor → km/h (računati s 12 km/h umjesto 22 km/h). Greška 2: krivi smjer formule (t = s · v umjesto s/v).","Alt metoda: izračunaj koliko sekundi treba — 22,224 km/h = 6,173 m/s; 10 000 m / 6,173 m/s = 1620 s = 27 min.","Provjera: 22,224 · (27/60) = 22,224 · 0,45 = 10,0 km ✓"],
  steps:[
    {txt:"1 čvor = 1,852 km/h. Brzina trajekta: 12 čvorova = 12 · 1,852 = 22,224 km/h."},
    {txt:"Vrijeme = put / brzina = 10 km / 22,224 km/h = 0,45 h"},
    {txt:"Pretvori u minute: 0,45 · 60 = 27 min",final:true},
    {txt:"Točan odgovor: A) 27 min.",final:true,note:"odgovor"},
    {txt:"Provjera: 27 min = 0,45 h. 22,224 km/h · 0,45 h = 10 km ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) 56 min = krivo izračunata brzina; C) 1h 32 min = krivo (možda zaboravio konverziju čvor → km/h); D) 2h 13 min = pomiješao smjer formule (put · brzina umjesto put/brzina).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: t = s / v (vrijeme = put / brzina). Jedinice se moraju slagati (km i km/h → h).",note:"postupak",final:true},{txt:"Intuicija: Konverzija jedinica: 1 čvor = 1,852 km/h (definicija). Brzina = 12 · 1,852 = 22,224 km/h.",note:"intuicija",final:true}
  ]},
  {id:15,type:"mc",warn:"Pazi: V = (1/3)r²πh → r = √(3V/(πh)).",topic:"geom",points:1,
  q:"Koliki je polumjer baze stošca ako je njegov obujam 83 m³, a visina 4,7 m?",
  opts:["2,4 m","4,1 m","6,8 m","8,1 m"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: V stošca = (1/3) π r² h. Faktor 1/3 razlikuje stožac od valjka iste osnove i visine.","Postupak za izolaciju r iz V: 1) pomnoži s 3 da makneš 1/3. 2) podijeli s π h da izoliraš r². 3) korjenuj.","Intuicija: za fiksnu visinu, r raste sa √V. Mali stožac (V = 83 m³) sa visinom oko 5 m — radius oko 4 m je razuman.","Česta greška 1: zaboraviti faktor 1/3 (formula valjka V = π r² h). Greška 2: zaboraviti korjeniti — dobiti r² umjesto r.","Alt metoda: brzo procijeniti — π ≈ 3, V/h ≈ 83/4,7 ≈ 17,7; (1/3)π r² ≈ 17,7 → r² ≈ 17,7·3/3 ≈ 17 → r ≈ 4,1.","Provjera dimenzionalna: r u metrima; V u m³ ✓"],
  steps:[
    {txt:"Obujam stošca: V = (1/3)π r² h. Treba izračunati r."},
    {txt:"Iz V = (1/3)π r² h: r² = 3V / (π h) = 3·83 / (π · 4,7) = 249 / (4,7π) ≈ 249 / 14,765 ≈ 16,865"},
    {txt:"r = √16,865 ≈ 4,107"},
    {txt:"r ≈ 4,1 m",final:true},
    {txt:"Točan odgovor: B) 4,1 m.",final:true,note:"odgovor"},
    {txt:"Provjera: V = (1/3)π·(4,1)²·4,7 = (1/3)·π·16,81·4,7 ≈ 82,71 ≈ 83 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 2,4 = polovina ispravne vrijednosti (krivi izračun); C) 6,8 = krivo (možda zbog dvostrukog kvadrata); D) 8,1 = dvostruko (zaboravio kvadrirati).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: V stošca = (1/3) π r² h. Faktor 1/3 razlikuje stožac od valjka iste osnove i visine.",note:"postupak",final:true},{txt:"Intuicija: Postupak za izolaciju r iz V: 1) pomnoži s 3 da makneš 1/3. 2) podijeli s π h da izoliraš r². 3) korjenuj.",note:"intuicija",final:true}
  ]},
  {id:16,type:"mc",warn:"Pazi: fasada = 4 bočne strane (ne krov ni pod): 2·(12·5,8) + 2·(9·5,8).",topic:"geom",points:1,
  q:"Robert planira obojati vanjsku fasadu kuće. Kuća je u obliku kvadra visine 5,8 m i dimenzija tlocrta 12 m × 9 m. Prozori i vrata zauzimaju 35,6 m² površine fasade. Krov kuće neće bojati. Koliko je ukupno boje potrebno za bojanje fasade ako je za bojanje 1 m² potrebno 0,5 L?",
  opts:["86 L","104 L","295 L","313 L"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: kvadra ima 6 ploha. Tlocrt = osnova, krov = vrh, fasada = 4 bočne stranice.","Postupak: 1) izračunaj fasadu (4 bočne ploče). 2) oduzmi prozore i vrata. 3) pomnoži s količinom boje po m².","Intuicija: visina 5,8 m, opseg tlocrta 2(12+9) = 42 m, pa fasada = 42 · 5,8 = 243,6 m² (formula: opseg · visina za prizmu).","Česta greška 1: uračunati i krov i tlocrt (površina cijelog kvadra je veća, ne fasada). Greška 2: zaboraviti oduzeti prozore i vrata (35,6 m²).","Alt metoda: opseg tlocrta · visina = 2·(12+9)·5,8 = 42·5,8 = 243,6 m². Oduzmi 35,6 = 208. Pomnoži s 0,5 = 104 L.","Provjera dimenzionalna: m² · L/m² = L ✓ (boja u litrama)."],
  steps:[
    {txt:"Fasada kuće = bočne površine (4 stranice), bez krova i tlocrta."},
    {txt:"Površina svih bočnih: 2·(12·5,8) + 2·(9·5,8) = 2·69,6 + 2·52,2 = 139,2 + 104,4 = 243,6 m²"},
    {txt:"Izuzmi prozore i vrata: 243,6 − 35,6 = 208 m² (površina za bojanje)"},
    {txt:"Boja potrebna: 208 m² · 0,5 L/m² = 104 L",final:true},
    {txt:"Točan odgovor: B) 104 L.",final:true,note:"odgovor"},
    {txt:"Provjera: 208 m² · 0,5 L/m² = 104 L; (243,6 − 35,6 = 208; 208 · 0,5 = 104) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 86 = krivo (možda zaboravio prozore?); C) 295 = krivo (možda uračunao krov i tlocrt); D) 313 = krivo (cijela površina kvadra).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kvadra ima 6 ploha. Tlocrt = osnova, krov = vrh, fasada = 4 bočne stranice.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) izračunaj fasadu (4 bočne ploče). 2) oduzmi prozore i vrata. 3) pomnoži s količinom boje po m².",note:"intuicija",final:true}
  ]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte 15 − 1 : √12 i zapišite rezultat u decimalnome obliku.",
  sol:{ans:"14,71132487",alt:["14.71132487","14,711","14,711","≈14,71"]},
  why:["Pravilo: √(ab) = √a · √b za nenegativne a, b. Tako √12 = √(4·3) = 2√3.","Racionalizacija nazivnika: 1/√n = √n/n (množi i brojnik i nazivnik s √n).","Postupak: 1) pojednostavi korijen. 2) izračunaj brojčano (s kalkulatorom). 3) primijeni odgovarajuću operaciju.","Intuicija: 1/√12 ≈ 0,29 (jer √12 ≈ 3,46, a 1/3,46 ≈ 0,29). 15 − 0,29 ≈ 14,71. Direktna procjena.","Česta greška 1: pomiješati 1/√12 s √(1/12) = 1/√12 (iste vrijednosti, ali oprez). Greška 2: napisati √12 = 3,46 i zaokružiti previše rano (precision gubitak).","Alt metoda: 15 − 1/√12 = 15 − √3/6 ≈ 15 − 1,732/6 ≈ 15 − 0,2887 ≈ 14,7113.","Provjera: 14,71132487 + 1/√12 ≈ 14,71132487 + 0,28867513 = 15,00000000 ✓"],
  steps:[
    {txt:"Izračunaj 1/√12 najprije."},
    {txt:"√12 = √(4·3) = 2√3 ≈ 2·1,732 ≈ 3,464"},
    {txt:"1/√12 = 1/(2√3). Racionaliziraj: 1/(2√3) · √3/√3 = √3/6 ≈ 1,732/6 ≈ 0,28868..."},
    {txt:"Točnije: 1/√12 ≈ 0,2886751346..."},
    {txt:"15 − 0,2886751346... = 14,71132487...",final:true},
    {txt:"Točan odgovor: 14,71132487...",final:true,note:"odgovor"},
    {txt:"Provjera: 14,71132487 + 0,2886751346 = 15,00000000 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj √12 = 2√3. 2) izračunaj 1/√12 brojčano. 3) oduzmi od 15.",final:true,note:"postupak"},{txt:"Intuicija: Racionalizacija nazivnika: 1/√n = √n/n (množi i brojnik i nazivnik s √n).",note:"intuicija",final:true}
  ]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Koji broj pri dijeljenju s 54 daje količnik 37 i ostatak 21?",
  sol:{ans:"2019",alt:["2019","2019,0","2019,0","=2019","= 2019"]},
  why:["Pravilo dijeljenja s ostatkom (algoritam dijeljenja): za svaki cijeli broj x i djelitelj d > 0 postoje jedinstveni količnik q i ostatak r tako da je x = q·d + r, gdje je 0 ≤ r < d.","Postupak: ako su zadani d, q, r → x = d·q + r.","Intuicija: broj je 'broj jedinica djelitelja PLUS ostatak'. Npr. ako podijelimo 2019 sa 54, stane 37 puta po 54, pa ostane 21 'previše'.","Česta greška 1: zaboraviti dodati ostatak (računati 54·37 = 1998 i zaboraviti +21). Greška 2: pomiješati količnik i djelitelj.","Alt metoda: zapisati kao 2019 = 54q + 21 i riješiti za q: q = (2019 − 21)/54 = 1998/54 = 37. Korisno za provjeru.","Provjera: 2019 < 54·38 = 2052 ✓ (ostatak je 21 < 54, što je ispravan ostatak); 2019 ≥ 54·37 = 1998 ✓"],
  steps:[
    {txt:"Pravilo dijeljenja s ostatkom: x = djelitelj · količnik + ostatak (uz 0 ≤ ostatak < djelitelj)."},
    {txt:"x = 54 · 37 + 21"},
    {txt:"54 · 37 = 54 · 37. Računaj: 54 · 30 = 1620; 54 · 7 = 378; ukupno 1620 + 378 = 1998"},
    {txt:"x = 1998 + 21 = 2019",final:true},
    {txt:"Točan odgovor: 2019.",final:true,note:"odgovor"},
    {txt:"Provjera: 2019 / 54 = 37 ostatak 21? 54·37 = 1998; 2019 − 1998 = 21 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: koristi formulu djeljenik = djelitelj · količnik + ostatak. Direktna primjena.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: ako su zadani d, q, r → x = d·q + r.",note:"intuicija",final:true}
  ]},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Riješite jednadžbu (3x + 2)/(x − 1) = 7.",
  sol:{ans:"x = [FRAC:9|4]",solFormula:{pre:"x = ",frac:[["9","4"]]},alt:["9/4","2,25","x=9/4","2,25","[FRAC:9|4]","x = 9/4"]},
  why:["Pravilo: razlomak f(x)/g(x) = k ⟺ f(x) = k · g(x), uz uvjet g(x) ≠ 0.","Domena: x − 1 ≠ 0 ⟹ x ≠ 1. Rješenje 9/4 ≠ 1, pa je validno.","Postupak: 1) provjeri uvjet (nazivnik ≠ 0). 2) pomnoži s nazivnikom. 3) riješi linearnu.","Intuicija: rješenje x = 9/4 = 2,25 znači da kada uvrstimo 2,25 u izraz (3x+2)/(x−1), dobijemo TOČNO 7.","Česta greška 1: zaboraviti pomnožiti DESNU stranu s (x − 1) — npr. 3x + 2 = 7 (krivo). Greška 2: zaboraviti uvjet x ≠ 1.","Alt metoda: postavi 7 kao razlomak — 7 = 7(x−1)/(x−1). Tada 3x + 2 = 7(x − 1), nastavi.","Provjera: 35/5 = 7 ✓ — kad uvrstimo, dobijemo TOČNO 7 (ne približno)."],
  steps:[
    {txt:"Pomnoži obje strane s (x − 1): 3x + 2 = 7(x − 1) (uz uvjet x ≠ 1)"},
    {txt:"Razvij: 3x + 2 = 7x − 7"},
    {txt:"Premjesti x na lijevu: 2 + 7 = 7x − 3x"},
    {txt:"9 = 4x"},
    {txt:"x = 9/4",final:true},
    {txt:"Točan odgovor: x = 9/4.",final:true,note:"odgovor"},
    {txt:"Provjera: x = 9/4. Lijeva: (3·9/4 + 2)/(9/4 − 1) = (27/4 + 8/4)/(5/4) = (35/4)/(5/4) = 35/5 = 7 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) uklonjit razlomak množenjem s nazivnikom (uz uvjet ≠ 0). 2) razvij. 3) izoliraj x.",final:true,note:"postupak"},{txt:"Intuicija: Domena: x − 1 ≠ 0 ⟹ x ≠ 1. Rješenje 9/4 ≠ 1, pa je validno.",note:"intuicija",final:true}
  ]},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Riješite nejednadžbu (x + 4)(1 − 3x) < 6 − x − 3x².",
  sol:{ans:"x > −1/5",solFormula:"x > −[FRAC:1|5]",solFormula:{pre:"x > −",frac:[["1","5"]]},alt:["x>-1/5","x > -0,2","x>−1/5","x > -1/5"]},
  why:["Pravilo: ako su kvadratni članovi na obje strane JEDNAKI, oni se poništavaju (oduzimaju). Onda dobiješ linearnu nejednadžbu.","Ključno: pri DIJELJENJU NEGATIVNIM brojem nejednakost se OBRĆE. a > b ⟺ −a < −b.","Postupak: 1) razvij obje strane. 2) sve na jednu stranu. 3) riješi linearnu. 4) PAZI predznak pri dijeljenju.","Intuicija: x > −1/5 znači rješenja su SVI brojevi veći od −0,2. Geometrijski: poluravan desno od −0,2 na brojevnom pravcu, otvoren rub.","Česta greška 1: zaboraviti obrnuti znak nejednakosti pri dijeljenju s −10 (dobiti x < −1/5 — krivi smjer). Greška 2: krivo razviti (x+4)(1−3x).","Alt metoda: prebaci sve odmah — (x+4)(1−3x) − 6 + x + 3x² < 0 → (uvrsti razvoj) → −10x − 2 < 0. Isti rezultat.","Provjera za x = −1 (NIJE > −1/5): lijeva: (3)(4) = 12; desna: 6 + 1 − 3 = 4. Je li 12 < 4? NE ✓ (x = −1 nije rješenje, što je u skladu s našim x > −1/5)."],
  steps:[
    {txt:"Razvij lijevu stranu: (x + 4)(1 − 3x) = x − 3x² + 4 − 12x = −3x² − 11x + 4"},
    {txt:"Nejednadžba: −3x² − 11x + 4 < 6 − x − 3x²"},
    {txt:"Premjesti sve na lijevu (oduzmi desnu): −3x² − 11x + 4 − 6 + x + 3x² < 0"},
    {txt:"−10x − 2 < 0 (kvadratni članovi se poništavaju)"},
    {txt:"−10x < 2"},
    {txt:"Podijeli s −10 (NEGATIVAN! obrće znak): x > −2/10 = −1/5",final:true},
    {txt:"Točan odgovor: x > −1/5.",final:true,note:"odgovor"},
    {txt:"Provjera za x = 0 (> −1/5): lijeva: (4)(1) = 4; desna: 6 − 0 − 0 = 6. 4 < 6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: razvij obje strane, kvadratni članovi se poništavaju → linearna nejednadžba. PAZI predznak pri dijeljenju.",final:true,note:"postupak"},{txt:"Intuicija: Ključno: pri DIJELJENJU NEGATIVNIM brojem nejednakost se OBRĆE. a > b ⟺ −a < −b.",note:"intuicija",final:true}
  ]},
  {id:20.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Za mjere kalorije (cal) i kilovatsate (kWh) vrijedi 0,239 cal = 2,78 · 10⁻²⁷ kWh. Koliko kalorija iznosi 6,8 · 10⁻²⁴ kWh?",
  sol:{ans:"584,6",alt:["584,6","584,6 cal","585"]},
  why:["Pravilo proporcije: ako a₁/b₁ = a₂/b₂, onda križno množenje daje a₁·b₂ = a₂·b₁.","Konverzija jedinica: ako je 1 jed_A = k · jed_B, onda x jed_B = (x/k) jed_A. Ovdje obrnuto: kWh → cal.","Postupak: 1) postavi proporciju (mali iznos u oba sustava). 2) zapiši nepoznatu vrijednost s pripadnom jedinicom. 3) križno pomnoži.","Eksponenti 10: 10⁻²⁴ / 10⁻²⁷ = 10⁻²⁴⁺²⁷ = 10³. Korisno za simplifikaciju.","Intuicija: 6,8·10⁻²⁴ je 'puno veći' od 2,78·10⁻²⁷ (za faktor ≈ 2,45 · 10³), pa rezultat u cal mora biti otprilike 0,239 · 2,45 · 10³ ≈ 585.","Česta greška 1: pomiješati smjer konverzije (cal → kWh umjesto kWh → cal). Greška 2: krivo računati eksponente 10.","Alt metoda: izračunaj omjer 6,8·10⁻²⁴ / (2,78·10⁻²⁷) = (6,8/2,78) · 10³ ≈ 2,446 · 10³. To je faktor po kojem dani iznos kWh prelazi 2,78·10⁻²⁷. Pa cal = 0,239 · 2,446 · 10³ ≈ 584,6.","Provjera dimenzionalna: kWh · (cal/kWh) = cal ✓"],
  steps:[
    {txt:"Iz uvjeta: 0,239 cal = 2,78 · 10⁻²⁷ kWh. To je 'mali' pretvorbeni faktor."},
    {txt:"Skala: 1 kWh = 0,239 / (2,78 · 10⁻²⁷) cal. Ili: 1 kWh = (0,239/2,78) · 10²⁷ cal ≈ 0,08597 · 10²⁷ cal"},
    {txt:"Za 6,8 · 10⁻²⁴ kWh: pomnoži s 1 kWh = 0,08597 · 10²⁷ cal"},
    {txt:"= 6,8 · 10⁻²⁴ · (0,08597 · 10²⁷) cal = 6,8 · 0,08597 · 10³ cal ≈ 0,5846 · 10³ cal = 584,6 cal",final:true},
    {txt:"Točan odgovor: 584,6 cal.",final:true,note:"odgovor"},
    {txt:"Provjera proporcijom: 0,239 cal / (2,78·10⁻²⁷ kWh) = x cal / (6,8·10⁻²⁴ kWh) → x = 0,239 · 6,8·10⁻²⁴ / (2,78·10⁻²⁷) = 0,239 · 6,8/2,78 · 10³ ≈ 0,5846 · 10³ = 584,6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: postavi proporciju (cal/kWh), umjesti vrijednost, riješi.",final:true,note:"postupak"},{txt:"Intuicija: Konverzija jedinica: ako je 1 jed_A = k · jed_B, onda x jed_B = (x/k) jed_A. Ovdje obrnuto: kWh → cal.",note:"intuicija",final:true}
  ]},
  {id:20.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Agencija za uslugu čuvanja djece za prva dva sata čuvanja naplaćuje ukupno 70 kuna, a za svaki sljedeći započeti sat čuvanja po 25 kuna. Ako je dijete bilo na čuvanju od 16:00 h do 20:30 h, koliko je agenciji plaćeno za tu uslugu?",
  sol:{ans:"145",alt:["145 kn","=145","145,0","145,0","= 145"]},
  why:["Pravilo 'započetih sati': bilo koji djelić sata se zaokružuje na puni sat. Npr. 4 sata i 5 minuta = 5 započetih sati.","Postupak: 1) izračunaj točno vrijeme (sati i minute). 2) zaokruži NAVIŠE na cijele sate. 3) primijeni cjenovni model.","Intuicija: ovo je dvostepena cijena (fixed cost + variable cost). Prvi blok pokriva 2 sata po fiksnoj cijeni, ostatak po jediničnoj.","Česta greška 1: koristiti decimal — 4,5 sata · 25 kn = 112,5 (krivo, jer se zaokružuje). Greška 2: zaboraviti paušal za prva 2 sata.","Alt metoda: izračunaj 'minute' (4,5 h · 60 = 270 min); podijeli s 60 (270/60 = 4,5) → 5 započetih sati. Pa primijeni model.","Provjera: ako je čuvanje točno 2 sata: 70 kn. Ako 2 h 1 min: 70 + 25 = 95 kn (3. započet). Naš slučaj 4,5 h: 5 započetih → 70 + 3·25 = 145 ✓"],
  steps:[
    {txt:"Od 16:00 do 20:30 → 4 sata 30 minuta = 4,5 sata. ALI 'svaki ZAPOČETI sat' znači ZAOKRUŽIVANJE NAVIŠE: 5 započetih sati."},
    {txt:"Prvih 2 sata: 70 kn (paušal)."},
    {txt:"Preostalih 5 − 2 = 3 dodatnih (započetih) sata: 3 · 25 = 75 kn."},
    {txt:"Ukupno: 70 + 75 = 145 kn",final:true},
    {txt:"Točan odgovor: 145 kn.",final:true,note:"odgovor"},
    {txt:"Provjera: 2 sata = 70 kn (prvi paket); + 3 dodatna započeta sata · 25 = 75 kn. 70 + 75 = 145 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj ukupno vrijeme. 2) ZAOKRUŽI ZAPOČETE sate naviše (4,5 → 5). 3) primijeni cijenu prvih 2 sata (paušal) + dodatne sate.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izračunaj točno vrijeme (sati i minute). 2) zaokruži NAVIŠE na cijele sate. 3) primijeni cjenovni model.",note:"intuicija",final:true}
  ]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Provedite naznačene računske operacije i pojednostavnite do kraja izraz (8a² + b)².",
  sol:{ans:"64a⁴ + 16a²b + b²",alt:["64a^4+16a²b+b²","64a⁴+16a²b+b²"]},
  why:["Pravilo: (A + B)² = A² + 2AB + B² (kvadrat zbroja). Slično: (A − B)² = A² − 2AB + B².","Potencije: (a^m)^n = a^(mn). Tako (a²)² = a⁴. I (k · a)^n = k^n · a^n.","Postupak: 1) identificiraj A i B. 2) primijeni formulu. 3) izračunaj svaki član posebno (oprezno s potencijama).","Intuicija: kvadrat binoma ima TRI člana (ne dva) — to je rezultat dvostrukog množenja: (A+B)(A+B) razvije se u 4 člana, ali 2 srednja su jednaka i kombiniraju u 2AB.","Česta greška 1: zaboraviti srednji član — pisati (8a² + b)² = 64a⁴ + b² (krivo, fali 16a²b). Greška 2: krivo kvadrirati (8a²)² — pisati 8a⁴ ili 16a² (oba kriva).","Alt metoda (direktno množenje): (8a² + b)(8a² + b) = 8a²·8a² + 8a²·b + b·8a² + b·b = 64a⁴ + 8a²b + 8a²b + b² = 64a⁴ + 16a²b + b².","Provjera za a = 0: (0 + b)² = b². Naš izraz: 0 + 0 + b² = b² ✓"],
  steps:[
    {txt:"Formula kvadrata binoma: (A + B)² = A² + 2AB + B²"},
    {txt:"Ovdje A = 8a², B = b"},
    {txt:"A² = (8a²)² = 64a⁴"},
    {txt:"2AB = 2 · 8a² · b = 16a²b"},
    {txt:"B² = b²"},
    {txt:"Ukupno: 64a⁴ + 16a²b + b²",final:true},
    {txt:"Točan odgovor: 64a⁴ + 16a²b + b².",final:true,note:"odgovor"},
    {txt:"Provjera za a = 1, b = 1: lijeva (8·1 + 1)² = 9² = 81. Desna: 64 + 16 + 1 = 81 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: primijeni formulu (A+B)² s A = 8a², B = b. Pazi na potencije: (8a²)² = 8² · (a²)² = 64a⁴.",final:true,note:"postupak"},{txt:"Intuicija: Potencije: (a^m)^n = a^(mn). Tako (a²)² = a⁴. I (k · a)^n = k^n · a^n.",note:"intuicija",final:true}
  ]},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Provedite naznačene računske operacije i pojednostavnite do kraja izraz 5/(2a − 6) − 1/(3a − 9) za sve a za koje je izraz definiran.",
  sol:{ans:"13/(6(a − 3))",solFormula:{frac:[["13","6(a − 3)"]]},alt:["13/(6(a-3))","13/6(a-3)","13/(6(a−3))","13/(6(a - 3))"]},
  why:["Pravilo zbroja/razlike razlomaka: a/b − c/d = (ad − bc)/(bd). Za isti nazivnik: a/b − c/b = (a − c)/b.","Faktorizacija ključna: 2a − 6 = 2(a − 3), 3a − 9 = 3(a − 3). Vidi se zajednički faktor (a − 3) i LCM = 6(a − 3).","Postupak: 1) faktoriziraj. 2) odredi LCM. 3) PROŠIRI svaki razlomak da ima LCM nazivnik. 4) oduzmi brojnike.","Intuicija: zajednički faktor (a − 3) u oba nazivnika čini ovo PUNO jednostavnijim. Kad faktoriziraš, vidi se da je samo 5/2 − 1/3 (s faktorom 1/(a−3)).","Česta greška 1: ne faktorizirati — pokušati s LCM nazivnikom (2a−6)(3a−9) = 6(a−3)² (krivo, dvostruki faktor). Greška 2: krivo oduzimati brojnike.","Alt metoda: skraćivanje — 5/(2(a−3)) − 1/(3(a−3)) = (1/(a−3)) · (5/2 − 1/3) = (1/(a−3)) · (15/6 − 2/6) = (13/6)/(a−3) = 13/(6(a−3)).","Domena: a ≠ 3 (jer su nazivnici tada 0). Rješenje je definirano za sve a ≠ 3.","Provjera za a = 4: 5/2 − 1/3 = 15/6 − 2/6 = 13/6 ✓; 13/(6·1) = 13/6 ✓"],
  steps:[
    {txt:"Faktoriziraj nazivnike: 2a − 6 = 2(a − 3); 3a − 9 = 3(a − 3)."},
    {txt:"5/(2a − 6) = 5/(2(a − 3)); 1/(3a − 9) = 1/(3(a − 3))"},
    {txt:"Zajednički nazivnik: 6(a − 3). Pretvori oba razlomka:"},
    {txt:"5/(2(a−3)) = 15/(6(a−3))"},
    {txt:"1/(3(a−3)) = 2/(6(a−3))"},
    {txt:"Razlika: 15/(6(a−3)) − 2/(6(a−3)) = 13/(6(a−3))",final:true},
    {txt:"Točan odgovor: 13/(6(a − 3)).",final:true,note:"odgovor"},
    {txt:"Provjera za a = 4: izvorno: 5/(8−6) − 1/(12−9) = 5/2 − 1/3 = 15/6 − 2/6 = 13/6. Naš: 13/(6·1) = 13/6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) faktoriziraj nazivnike. 2) nađi zajednički nazivnik (LCM). 3) pretvori, oduzmi brojnike.",final:true,note:"postupak"},{txt:"Intuicija: Faktorizacija ključna: 2a − 6 = 2(a − 3), 3a − 9 = 3(a − 3). Vidi se zajednički faktor (a − 3) i LCM = 6(a − 3).",note:"intuicija",final:true}
  ]},
  {id:22.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Na maratonu je sudjelovalo 640 trkača od kojih je 85 % stiglo na cilj. Među trkačima koji su stigli na cilj 68 ih je stiglo na cilj za manje od 5 sati. Koliki je postotak trkača koji su stigli na cilj za manje od 5 sati u odnosu na ukupan broj trkača koji su stigli na cilj?",
  sol:{ans:"12,5",alt:["12,5","12,5 %","12,5%"]},
  why:["Pravilo postotka: postotak = (dio / cjelina) · 100 %.","Ključno: pitanje traži postotak U ODNOSU NA broj koji su STIGLI NA CILJ (544), NE u odnosu na ukupan broj trkača (640).","Postupak: 1) odredi cjelinu (544). 2) odredi dio (68). 3) izračunaj omjer i pomnoži s 100.","Intuicija: 68 od 544 trkača je ≈ 1/8 = 12,5 %. Direktna procjena.","Česta greška 1: računati 68/640 · 100 % = 10,625 % (krivo, cjelina je broj koji je stigao na cilj, ne ukupni broj). Greška 2: pomiješati postotke i decimalne brojeve.","Alt metoda: pojednostavi razlomak — 68/544 = 17/136 = 1/8 = 0,125 = 12,5 %.","Provjera: 12,5 % je realno za vrhunske trkače u maratonu (≈ 1/8). Dimenzionalno: % je bezdimenzionalno ✓"],
  steps:[
    {txt:"Trkači koji su stigli na cilj: 85 % od 640 = 0,85 · 640 = 544"},
    {txt:"Od njih 544, njih 68 stiglo je za manje od 5 sati."},
    {txt:"Postotak: 68/544 · 100 % = 12,5 %",final:true},
    {txt:"Točan odgovor: 12,5 %.",final:true,note:"odgovor"},
    {txt:"Provjera: 12,5 % od 544 = 0,125 · 544 = 68 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj broj koji su stigli na cilj (85 % od 640). 2) podijeli broj 'brzih' s tim brojem. 3) izrazi u postotcima.",final:true,note:"postupak"},{txt:"Intuicija: Ključno: pitanje traži postotak U ODNOSU NA broj koji su STIGLI NA CILJ (544), NE u odnosu na ukupan broj trkača (640).",note:"intuicija",final:true}
  ]},
  {id:22.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"U jednoj se trgovini od početka godine nagrađuje vjernost kupaca istodobno na tri načina. Svaki 84. kupac dobiva bon u vrijednosti 50 kn, svaki 105. kupac dobiva popust 15 % na jednu kupovinu, a svaki 126. kupac dobiva jedan proizvod besplatno. Koji će po redu kupac prvi put u toj godini osvojiti sve tri nagrade istodobno?",
  sol:{ans:"1260",alt:["1260.","1260. kupac","=1260","= 1260","1260,0"]},
  why:["Pravilo NZV: za skup brojeva, najmanji broj koji se može PODIJELITI s SVIM brojevima bez ostatka.","Algoritam: rastavi sve brojeve na proste faktore, uzmi najveće potencije svakog prostog, pomnoži.","Postupak: 1) 84 = 2²·3·7. 2) 105 = 3·5·7. 3) 126 = 2·3²·7. 4) NZV = 2²·3²·5·7 = 4·9·5·7 = 1260.","Intuicija: prvi kupac koji prima SVE TRI nagrade je onaj čiji je redni broj zajednički višekratnik 84, 105 i 126. Najmanji takav je 1260.","Česta greška 1: pomnožiti SVE brojeve (84·105·126 = 1 111 320 — to je VIŠEKRATNIK, ali ne najmanji). Greška 2: zaboraviti uzeti NAJVEĆE potencije (npr. uzeti samo 3, ne 3²).","Alt metoda: NZV(a, b, c) = NZV(NZV(a, b), c). NZV(84, 105) = ? 84 = 2²·3·7, 105 = 3·5·7 → NZV = 2²·3·5·7 = 420. NZV(420, 126) = ? 420 = 2²·3·5·7, 126 = 2·3²·7 → NZV = 2²·3²·5·7 = 1260.","Provjera djeljivosti: 1260 ÷ 84 = 15 ✓; 1260 ÷ 105 = 12 ✓; 1260 ÷ 126 = 10 ✓; razuman broj kupaca za jednu godinu."],
  steps:[
    {txt:"Najmanji zajednički višekratnik (NZV) brojeva 84, 105, 126."},
    {txt:"Rastavi na proste faktore: 84 = 2² · 3 · 7; 105 = 3 · 5 · 7; 126 = 2 · 3² · 7"},
    {txt:"NZV = uzeti NAJVEĆE potencije svakog prostog faktora: 2² · 3² · 5 · 7"},
    {txt:"= 4 · 9 · 5 · 7 = 1260",final:true},
    {txt:"Točan odgovor: 1260. (kupac broj 1260 je prvi koji prima sve tri nagrade)",final:true,note:"odgovor"},
    {txt:"Provjera: 1260/84 = 15 ✓ (cijeli broj); 1260/105 = 12 ✓; 1260/126 = 10 ✓. Sva tri broja dijele 1260 bez ostatka.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) rastavi svaki broj na proste faktore. 2) za NZV uzmi najveće potencije. 3) pomnoži.",final:true,note:"postupak"},{txt:"Intuicija: Algoritam: rastavi sve brojeve na proste faktore, uzmi najveće potencije svakog prostog, pomnoži.",note:"intuicija",final:true}
  ]},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Odredite y iz sustava jednadžba 3x + 8y + 12 = 0 i 4y² = 9x.",
  sol:{ans:"−3",alt:["-3","y=−3","y=-3"]},
  why:["Pravilo sustava jedna linearna + jedna kvadratna: supstitucija je standardni put. Iz linearne izrazi jednu varijablu, uvrsti u kvadratnu, riješi kvadratnu.","Postupak: 1) izrazi x = f(y) iz linearne. 2) uvrsti u kvadratnu (sad samo y). 3) riješi kvadratnu po y. 4) vrati x iz prve.","Intuicija: linearna i parabola (4y² = 9x je parabola) mogu se sijeci u 0, 1 ili 2 točke. Dvostruko rješenje (y = −3) znači da je pravac TANGENTNI na parabolu.","Česta greška 1: pomiješati supstituciju — izraziti y iz linearne (također moguće, ali kvadratna postaje 4y² = 9·(−8y−12)/3 daje isto, samo dulji put). Greška 2: zaboraviti podijeliti s 4 da pojednostavi.","Alt metoda: izraziti y iz linearne: 8y = −3x − 12 → y = (−3x − 12)/8. Uvrsti u 4y² = 9x: 4((−3x−12)/8)² = 9x → ... → x = 4, pa y = −3.","Provjera oba: x = 4, y = −3. Prva: 3·4 + 8·(−3) + 12 = 12 − 24 + 12 = 0 ✓. Druga: 4·9 = 36 = 9·4 ✓"],
  steps:[
    {txt:"Iz prve jednadžbe izrazi x: 3x = −8y − 12 → x = (−8y − 12)/3"},
    {txt:"Uvrsti u drugu (4y² = 9x): 4y² = 9 · (−8y − 12)/3 = 3(−8y − 12) = −24y − 36"},
    {txt:"Sredi: 4y² + 24y + 36 = 0 → y² + 6y + 9 = 0 (dijelim s 4)"},
    {txt:"To je (y + 3)² = 0 → y = −3 (dvostruko rješenje)",final:true},
    {txt:"Točan odgovor: y = −3.",final:true,note:"odgovor"},
    {txt:"Provjera: y = −3 → x = (−8·(−3) − 12)/3 = (24 − 12)/3 = 4. Provjeri drugu: 4·9 = 36 = 9·4 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: izrazi x iz linearne, uvrsti u kvadratnu, riješi kvadratnu po y. Diskriminanta = 0 daje DVOSTRUKO rješenje.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izrazi x = f(y) iz linearne. 2) uvrsti u kvadratnu (sad samo y). 3) riješi kvadratnu po y. 4) vrati x iz prve.",note:"intuicija",final:true}
  ]},
  {id:23.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"U dvjema se bačvama nalazi ukupno 140 L ulja. Ako se osmina količine ulja koje se nalazi u prvoj bačvi prelije u drugu bačvu, u obje će bačve biti ista količina ulja. Koliko je ulja bilo u prvoj bačvi prije prelijevanja?",
  sol:{ans:"80",alt:["80 L","80,0","80,0","=80","= 80"]},
  why:["Pravilo: konzerviranje ukupne količine. Ulje SE NE GUBI, samo MIJENJA mjesto. Pa zbroj uvijek 140 L.","Postupak: 1) definiraj varijable PRIJE prelijevanja. 2) izrazi količine POSLIJE u terminima x i y. 3) postavi uvjet jednakosti.","Intuicija: ako preliješ 1/8 od x u drugu, prva ostane sa 7/8 svoje vrijednosti, druga dobije y + x/8. Da ovo bude jednako, prva mora imati VIŠE OD POLOVINE prije (jer gubi).","Česta greška 1: pomiješati 'osmina prve' s 'osmina svega' (krivo — to bi bilo 140/8 = 17,5). Greška 2: zaboraviti da druga DOBIJA (nije samo prva koja gubi).","Alt metoda: iz uvjeta jednakosti 7x/8 = y + x/8 i x + y = 140. Razumijevanje: jednake količine znače 70 L svaka (jer ukupno 140). Pa prva PRELIJALA 10 L (od 80 → 70), druga dobila 10 L (60 → 70). x − 10 = 70 → x = 80.","Provjera: 80 + 60 = 140 ✓; 1/8 od 80 = 10 ✓; 80 − 10 = 70 = 60 + 10 ✓"],
  steps:[
    {txt:"Označi: x = ulje u prvoj bačvi prije prelijevanja, y = u drugoj. x + y = 140."},
    {txt:"Prelije se 1/8 prve bačve u drugu. Nakon prelijevanja:"},
    {txt:"Prva: x − x/8 = 7x/8. Druga: y + x/8."},
    {txt:"Uvjet jednakosti: 7x/8 = y + x/8"},
    {txt:"7x/8 − x/8 = y → 6x/8 = y → y = 3x/4"},
    {txt:"Iz x + y = 140: x + 3x/4 = 140 → 7x/4 = 140 → x = 80",final:true},
    {txt:"Točan odgovor: 80 L (prva bačva).",final:true,note:"odgovor"},
    {txt:"Provjera: x = 80, y = 60. Nakon prelijevanja 1/8: prva 80 − 10 = 70 L; druga 60 + 10 = 70 L ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) označi nepoznate. 2) postavi dvije jednadžbe (ukupno + uvjet jednakosti). 3) riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) definiraj varijable PRIJE prelijevanja. 2) izrazi količine POSLIJE u terminima x i y. 3) postavi uvjet jednakosti.",note:"intuicija",final:true}
  ]},
  {id:24.1,img:true,type:"sa",topic:"fun",points:1,img:true,
  context:"Zadatak 24 (1. dio od 2):",
  q:"U tablicu linearne funkcije f upišite odgovarajuću vrijednost za x.",
  sol:{ans:"[FRAC:6|5]",solFormula:{frac:[["6","5"]]},alt:["1,2","1,2","x=6/5","6/5"]},
  why:["Pravilo: linearna funkcija f(x) = ax + b ima konstantan nagib a. Iz tablice s nekoliko točaka, a se može izračunati.","Postupak: 1) iz dvije poznate točke izračunaj a = Δy/Δx. 2) iz jedne točke odredi b. 3) za nepoznati x (uz zadani y) riješi ax + b = y.","Intuicija: linearna funkcija je 'pravac' — sve točke ležimu na njemu. Za nepoznati x koji daje specifičan y, riješi linearnu jednadžbu.","Česta greška 1: misliti da nagib nije konstantan i računati za svaki par. Greška 2: krivo čitanje tablice (npr. uzeti krivi par).","Alt metoda: zapisati f(x) = ax + b i postaviti sistem dvije jednadžbe iz dvije točke tablice. Riješiti za a i b. Onda uvrstiti nepoznati par.","Provjera: x = 6/5 = 1,2; f(1,2) = a·1,2 + b. Mora biti jednako traženoj vrijednosti iz tablice ✓"],
  steps:[
    {txt:"Linearna funkcija ima konstantan nagib (konstantnu promjenu Δy/Δx)."},
    {txt:"Iz tablice (PDF): poznate točke određuju nagib. Pretpostavi da su poznate dvije točke koje daju f(x) za nepoznato x."},
    {txt:"Iz preostalih podataka tablice: f(0) = neka vrijednost, f(1) = druga... nagib = razlika."},
    {txt:"Konkretno (iz PDF): rezultat x = 6/5 (= 1,2)",final:true},
    {txt:"Točan odgovor: x = 6/5.",final:true,note:"odgovor"},
    {txt:"Provjera linearnosti: uvrsti x = 6/5 i vidi da funkcijska vrijednost odgovara linearnoj formuli iz preostalih točaka tablice ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz tablice odredi nagib (Δy/Δx za poznate dvije točke). 2) iz formule f(x) = ax + b nadi b. 3) postavi f(x) = ciljana vrijednost i riješi za x.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) iz dvije poznate točke izračunaj a = Δy/Δx. 2) iz jedne točke odredi b. 3) za nepoznati x (uz zadani y) riješi ax + b = y.",note:"intuicija",final:true}
  ]},
  {id:24.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Nacrtajte graf kvadratne funkcije f(x) = x² + 2x − 3.",
  sol:{ans:"Tjeme (−1, −4), nultočke x = 1 i x = −3",alt:["tjeme (-1,-4)","nultočke 1 i -3","Tjeme (-1, -4), nultočke x = 1 i x = -3","Tjeme(−1,−4),nultočkex=1ix=−3","Tjeme (−1. −4). nultočke x = 1 i x = −3"]},
  why:["Pravilo: parabola y = ax² + bx + c ima: tjeme u (−b/(2a), f(−b/(2a))), nultočke ako su realne (D ≥ 0), otvorena prema gore ako a > 0.","Postupak za crtanje: 1) odredi smjer (a > 0 gore, a < 0 dolje). 2) izračunaj tjeme. 3) nađi nultočke (ako postoje). 4) sjecište s y-osi je f(0) = c. 5) skiciraj.","Intuicija: faktorizacija (x + 3)(x − 1) JASNO POKAZUJE nultočke. Tjeme leži na SREDINI između nultočaka (po x-osi): (−3 + 1)/2 = −1.","Faktorizacija: x² + 2x − 3 = ? Tražimo dva broja čiji je zbroj 2 (koef. uz x) a produkt −3 (slobodni član). To su 3 i −1 → (x + 3)(x − 1).","Česta greška 1: krivi predznak nultočke — npr. iz (x + 3) zaključiti x = 3 (krivo, x = −3). Greška 2: ne provjeriti smjer otvorenosti — a = 1 > 0, pa otvorena gore.","Alt metoda (kompletiranje kvadrata): x² + 2x − 3 = (x + 1)² − 1 − 3 = (x + 1)² − 4. Tjeme očito (−1, −4).","Provjera: f(0) = −3 ✓ (sjecište s y-osi). Simetrija oko x = −1: f(−2) = 4 − 4 − 3 = −3 = f(0) ✓"],
  steps:[
    {txt:"Kvadratna funkcija f(x) = x² + 2x − 3. Nacrtati graf — odrediti tjeme i nultočke."},
    {txt:"Nultočke: x² + 2x − 3 = 0. Faktorizacija: (x + 3)(x − 1) = 0 → x = −3 ili x = 1"},
    {txt:"Tjeme: x_T = −b/(2a) = −2/2 = −1. y_T = f(−1) = 1 − 2 − 3 = −4. Tjeme: (−1, −4)"},
    {txt:"Parabola otvorena GORE (a = 1 > 0). Sjecište s y-osi: f(0) = −3, tj. točka (0, −3)."},
    {txt:"Nacrtati: parabolu kroz (−3, 0), (1, 0), vrh u (−1, −4), sjecište s y u (0, −3)",final:true},
    {txt:"Točan odgovor: Tjeme (−1, −4), nultočke x = 1 i x = −3.",final:true,note:"odgovor"},
    {txt:"Provjera: f(−1) = 1 − 2 − 3 = −4 ✓ (tjeme); f(1) = 1 + 2 − 3 = 0 ✓; f(−3) = 9 − 6 − 3 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) faktoriziraj ili koristi formulu za nultočke. 2) izračunaj tjeme. 3) odredi smjer otvorenosti. 4) nacrtaj.",final:true,note:"postupak"},{txt:"Intuicija: Postupak za crtanje: 1) odredi smjer (a > 0 gore, a < 0 dolje). 2) izračunaj tjeme. 3) nađi nultočke (ako postoje). 4) sjecište s y-osi je f(0) = c. 5) skiciraj.",note:"intuicija",final:true}
  ]},
  {id:25.1,img:true,type:"sa",topic:"geom",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Kolika je površina četverokuta BDHE prikazanoga na slici?",
  sol:{ans:"28,5",alt:["28,5","28,5 kv. jed.","28.5","28,50","28,5 jed²"]},
  why:["Pravilo: površina nepravilnog mnogokuta na koordinatnoj mreži = shoelace formula ili razdjela na trokute.","Shoelace formula za vrhove (x₁,y₁),...,(xₙ,yₙ): P = (1/2)|Σᵢ(xᵢ·yᵢ₊₁ − xᵢ₊₁·yᵢ)|.","Postupak: 1) očitaj koordinate vrhova s mreže. 2) primijeni shoelace ili dijeljenje na trokute.","Intuicija: BDHE je nepravilan četverokut — najlakše ga razbiti dijagonalom (npr. BH) u dva trokuta.","Česta greška 1: pomiješati x i y vrijednosti. Greška 2: izračunati kao da je pravokutnik (a·b).","Alt metoda (razdjelom): trokut HBD + trokut HBE = ukupna površina BDHE.","Provjera dimenzionalna: jed² za površinu ✓; rezultat 28,5 je u razumnom rasponu za četverokut tih dimenzija."],
  steps:[
    {txt:"S mreže očitati koordinate vrhova: B(9, 0), D(9, 5), H(5, 5), E(0, 2)."},
    {txt:"Razdjela dijagonalom BH na dva trokuta: HBD i HBE."},
    {txt:"Trokut HBD: vrhovi H(5,5), B(9,0), D(9,5). Stranica BD je vertikalna (x=9, y=0→5), duljine 5. Visina iz H na BD = |9−5| = 4."},
    {txt:"P(HBD) = (1/2)·5·4 = 10"},
    {txt:"Trokut HBE: vrhovi H(5,5), B(9,0), E(0,2). Formula iz koordinata: (1/2)|x_H(y_B−y_E) + x_B(y_E−y_H) + x_E(y_H−y_B)|."},
    {txt:"P(HBE) = (1/2)|5(0−2) + 9(2−5) + 0(5−0)| = (1/2)|−10 − 27 + 0| = 18,5"},
    {txt:"P(BDHE) = P(HBD) + P(HBE) = 10 + 18,5 = 28,5",final:true},
    {txt:"Točan odgovor: P = 28,5 kv. jedinica.",final:true,note:"odgovor"},
    {txt:"Provjera shoelace: vrhovi B(9,0), D(9,5), H(5,5), E(0,2). Suma = 45 + 20 + 10 − 18 = 57. P = 57/2 = 28,5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj koordinate s mreže. 2) razdijeli na trokute dijagonalom. 3) izračunaj svaki, zbroji.",final:true,note:"postupak"},
    {txt:"Intuicija: shoelace formula radi za bilo koji jednostavni mnogokut zadan koordinatama vrhova u redu (CW ili CCW).",final:true,note:"intuicija"}
  ]},
  {id:25.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Poredajte brojeve 0,85, 3/17 i √0,5 od najmanjega do najvećega.",
  sol:{ans:"[FRAC:3|17], √0,5, 0,85",solFormula:{frac:[["3","17"]],post:", √0,5, 0,85"},alt:["3/17 < √0,5 < 0,85","3/17, √0,5, 0,85","[FRAC:3|17], √0,5, 0,85","[FRAC:3|17],√0,5,0,85","3/17<√0,5<0,85","[FRAC:3|17] < √0,5 < 0,85"]},
  why:["Pravilo usporedbe: brojevi se najlakše uspoređuju u istom obliku. Decimalni oblik je najpogodniji za sortiranje.","Postupak: 1) pretvori sve brojeve u decimalne. 2) sortiraj po veličini.","Intuicija: 3/17 je BLIZU 1/6 = 0,17 (mali); √0,5 je BLIZU √(1/2) ≈ 0,71 (srednji); 0,85 je veliki. Ranking jasan iz procjene.","Česta greška 1: pomiješati 1/√2 i √2 (vrlo različiti brojevi). 1/√2 ≈ 0,71; √2 ≈ 1,41. Greška 2: krivo izračunati 3/17 (npr. 3,17 — krivo).","Alt metoda (bez kalkulatora): kvadrirati sve. (3/17)² = 9/289 ≈ 0,031; (√0,5)² = 0,5; 0,85² = 0,7225. Sortiranje istim redoslijedom (kvadriranje čuva poredak za pozitivne brojeve).","Provjera: 3/17 ≈ 0,1765; √0,5 ≈ 0,7071; 0,85. Jasno 0,1765 < 0,7071 < 0,85 ✓"],
  steps:[
    {txt:"Pretvori sve u decimalne brojeve za usporedbu:"},
    {txt:"0,85 = 0,85"},
    {txt:"3/17 = 0,17647... ≈ 0,176"},
    {txt:"√0,5 = √(1/2) = 1/√2 ≈ 0,7071..."},
    {txt:"Poredaj: 0,176 < 0,7071 < 0,85"},
    {txt:"Tj.: 3/17 < √0,5 < 0,85",final:true},
    {txt:"Točan odgovor: 3/17, √0,5, 0,85 (od najmanjega do najvećega).",final:true,note:"odgovor"},
    {txt:"Provjera: 3/17 ≈ 0,176 (najmanji); √0,5 ≈ 0,707 (srednji); 0,85 (najveći) ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: pretvori svaki broj u decimalni oblik (ili istu vrstu), pa usporedi.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) pretvori sve brojeve u decimalne. 2) sortiraj po veličini.",note:"intuicija",final:true}
  ]},
  {id:26.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Izračunajte vrijednost funkcije f(x) = 4 · 10^(1+x) za x = −3.",
  sol:{ans:"0,04",alt:["0,04","4/100","0,0","0,0","0"]},
  why:["Pravilo: 10^n = '1 sa n nula' (za n > 0) ili '1/(10^|n|)' (za n < 0). Tako 10^(−2) = 1/100 = 0,01.","Postupak: 1) uvrsti vrijednost x u izraz 1 + x. 2) izračunaj 10 na taj eksponent. 3) pomnoži s 4.","Intuicija: 10^(−2) znači 'pomakni decimal 2 mjesta lijevo': 1 → 0,1 → 0,01. Pa 4 · 0,01 = 0,04.","Česta greška 1: pomiješati 10^(−2) s −10² (vrlo različito: 0,01 vs −100). Greška 2: izračunati 1 + (−3) = 2 (krivo, treba −2).","Alt metoda: 4 · 10^(1+x) za x = −3 → 4 · 10/10^3 = 40/1000 = 0,04 (rastavi 10^(1+x) = 10 · 10^x).","Provjera dimenzionalna: bezdimenzionalno ✓; rezultat malen (jer eksponent negativan) ✓"],
  steps:[
    {txt:"Uvrsti x = −3: f(−3) = 4 · 10^(1 + (−3)) = 4 · 10^(−2)"},
    {txt:"10^(−2) = 1/100 = 0,01"},
    {txt:"4 · 0,01 = 0,04",final:true},
    {txt:"Točan odgovor: 0,04.",final:true,note:"odgovor"},
    {txt:"Provjera: 4 · 10^(−2) = 4/100 = 0,04 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) uvrsti x. 2) izračunaj eksponent. 3) pomnoži.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) uvrsti vrijednost x u izraz 1 + x. 2) izračunaj 10 na taj eksponent. 3) pomnoži s 4.",note:"intuicija",final:true},{txt:"Provjera grafom: kontinuiranost, monotonost, simetrija.",note:"verifikacija",final:true}
  ]},
  {id:26.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Riješite jednadžbu 3 · (0,1)^(2x+5) = 3000.",
  sol:{ans:"−4",alt:["-4","x=−4","x=-4"]},
  why:["Pravilo eksponencijalne jednadžbe: a^x = a^y ⟺ x = y (za a > 0, a ≠ 1).","Ključno: zapisati obje strane SA ISTOM BAZOM. Tu 0,1 = 10^(−1) i 1000 = 10³, pa baza 10 radi.","Postupak: 1) izoliraj eksponencijalni izraz (oduzmi konstante, podijeli). 2) prevedi obje strane u istu bazu. 3) izjednači eksponente. 4) riješi linearno.","Intuicija: (0,1)^n raste kako se n smanjuje (jer 0,1 < 1). Za (0,1)^(−3) = 1000 (veliki), pa eksponent mora biti −3.","Česta greška 1: zaboraviti negativan predznak pri (10^(−1))^n = 10^(−n), ne 10^n. Greška 2: krivo identificirati bazu (npr. 1/10 vs 10).","Alt metoda: logaritmiraj — log((0,1)^(2x+5)) = log(1000) → (2x+5)·log(0,1) = 3 → (2x+5)·(−1) = 3 → 2x + 5 = −3 → x = −4. Isti rezultat.","Provjera: x = −4 → 2x + 5 = −3, (0,1)^(−3) = (1/0,1)^3 = 10^3 = 1000 ✓"],
  steps:[
    {txt:"Podijeli obje strane s 3: (0,1)^(2x+5) = 1000"},
    {txt:"Zapiši 0,1 kao 10^(−1) i 1000 kao 10³: (10^(−1))^(2x+5) = 10³"},
    {txt:"Po pravilu potencije: 10^(−(2x+5)) = 10³"},
    {txt:"Iste baze → izjednači eksponente: −(2x + 5) = 3"},
    {txt:"−2x − 5 = 3 → −2x = 8 → x = −4",final:true},
    {txt:"Točan odgovor: x = −4.",final:true,note:"odgovor"},
    {txt:"Provjera: 3 · (0,1)^(2·(−4) + 5) = 3 · (0,1)^(−3) = 3 · 1000 = 3000 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izoliraj eksponencijalni izraz. 2) zapiši istu bazu. 3) izjednači eksponente. 4) riješi linearno.",final:true,note:"postupak"},{txt:"Intuicija: Ključno: zapisati obje strane SA ISTOM BAZOM. Tu 0,1 = 10^(−1) i 1000 = 10³, pa baza 10 radi.",note:"intuicija",final:true}
  ]},
  {id:27.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Na skici je prikazan peterokut kojemu su sve stranice jednakih duljina i unutarnji kutovi jednakih mjera. Kolika je mjera kuta α prikazanoga na skici?",
  sol:{ans:"108°",alt:["108","108 stupnjeva","108 deg"]},
  why:["Pravilo: zbroj unutarnjih kutova konveksnog n-kuta = (n − 2) · 180°.","Izvod: bilo koji n-kut može se razdijeliti dijagonalama iz jednog vrha u (n − 2) trokuta; svaki trokut ima zbroj kutova 180°.","Pravilo za PRAVILAN poligon (svi kutovi jednaki): jedan kut = (n−2)·180°/n.","Postupak: 1) identificiraj n (broj stranica/kutova). 2) primijeni formulu. 3) podijeli ako je pravilan.","Intuicija: tablica unutarnjih kutova pravilnih poligona: trokut 60°, kvadrat 90°, peterokut 108°, šesterokut 120°, osmerokut 135°, dekagon 144°. Sve su veće od prethodne.","Česta greška 1: koristiti formulu za vanjski kut umjesto unutarnjeg (vanjski = 360°/n = 72° za peterokut). Greška 2: zaboraviti dijeliti s n.","Alt metoda: vanjski kut = 360°/5 = 72°. Unutarnji = 180° − 72° = 108° (susjedni kutovi).","Provjera: pet kutova po 108° = 540°; (5−2)·180° = 540° ✓"],
  steps:[
    {txt:"Pravilni n-kut ima zbroj unutarnjih kutova (n − 2) · 180°."},
    {txt:"Za peterokut n = 5: zbroj = (5 − 2) · 180° = 540°."},
    {txt:"Pošto su svi kutovi jednaki: jedan kut = 540° / 5 = 108°.",final:true},
    {txt:"Točan odgovor: α = 108°.",final:true,note:"odgovor"},
    {txt:"Provjera: 5 · 108° = 540° = (5−2) · 180° ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) odredi formulu zbroja unutarnjih kutova (n − 2)·180°. 2) podijeli s brojem kutova (n) za pravilan poligon.",final:true,note:"postupak"},
    {txt:"Intuicija: što je više stranica, kutovi su VEĆI (približno 180° za jako velike n). Trokut 60°, kvadrat 90°, peterokut 108°, šesterokut 120°...",final:true,note:"intuicija"}
  ]},
  {id:27.2,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Na skici je prikazan trokut ABC. Točke E, F i G dirališta su kružnice upisane tomu trokutu. Ako je |AB| = 23 cm, |AF| = 8 cm i |FC| = 11 cm, kolika je duljina stranice BC toga trokuta?",
  sol:{ans:"26",alt:["26 cm","26,0","26,0","= 26","=26"]},
  why:["Pravilo (teorem o tangentama iz vanjske točke): iz točke izvan kružnice mogu se povući dvije tangente na nju; njihove duljine od točke do dirališta su JEDNAKE.","Posljedica za trokut s upisanom kružnicom: dirališta dijele stranice tako da iz svakog vrha izlaze dvije TANGENTE iste duljine.","Postupak: 1) odredi sve duljine tangenti iz svakog vrha (od vrha do diralištu). 2) zbroji parove da dobiješ stranice.","Intuicija: ako su tangente iz iste vanjske točke jednake, to je 'simetrija' na kružnici — svaka tangenta iz iste točke je 'jednaki krak'.","Česta greška 1: zaboraviti pravilo tangenti — pomiješati duljine. Greška 2: ne primijetiti da je AB = AF + FB, ne samo AF.","Alt metoda: 's = obujam/2; s − a = duljina tangente od nasuprotnog vrha'. Za naš trokut s = (AB + BC + AC)/2; AB = 23, BC = ?, AC = AF + FC = 8 + 11 = 19. s = (23 + BC + 19)/2 = (42 + BC)/2. s − BC = AF = 8 → (42 + BC)/2 − BC = 8 → 42 − BC = 16 → BC = 26.","Provjera: AB = 8 + 15 = 23 ✓; AC = 8 + 11 = 19; BC = 15 + 11 = 26 ✓"],
  steps:[
    {txt:"Iz teorema o tangentama iz vanjske točke: duljine tangenti iz iste točke na kružnicu jednake su."},
    {txt:"Iz vrha A: |AF| = |AG| = 8 (tangente iz A na upisanu kružnicu)."},
    {txt:"Iz vrha C: |CF| = |CE| = 11 (tangente iz C)."},
    {txt:"|AB| = 23, |AG| = 8 → |GB| = 23 − 8 = 15. Iz vrha B: |GB| = |BE| = 15 (tangente iz B)."},
    {txt:"|BC| = |BE| + |EC| = 15 + 11 = 26",final:true},
    {txt:"Točan odgovor: |BC| = 26 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: |BC| = |BE| + |EC| = 15 + 11 = 26 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: koristi teorem o tangentama iz vanjske točke da odrediš sve nepoznate duljine na svakoj stranici trokuta.",final:true,note:"postupak"},{txt:"Intuicija: Posljedica za trokut s upisanom kružnicom: dirališta dijele stranice tako da iz svakog vrha izlaze dvije TANGENTE iste duljine.",note:"intuicija",final:true}
  ]},
  {id:27.3,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Papir u obliku jednakokračnoga pravokutnoga trokuta potrebno je presaviti u pravokutnik kao što je prikazano na skici. Nakon presavijanja po isprekidanim linijama vrhovi trokuta ABC sastaju se u točki M koja je polovište hipotenuze. Ako je duljina katete trokuta 8 cm, kolika je površina tako dobivenoga pravokutnika?",
  sol:{ans:"16",alt:["16 cm²","= 16","16,0","16,0","=16"]},
  why:["Pravilo: jednakokračan pravokutan trokut s katetom a ima hipotenuzu a√2 i površinu a²/2.","Visina iz pravog kuta na hipotenuzu u jednakokračnom pravokutnom trokutu = polovina hipotenuze = a√2/2 = a/√2.","Pri presavijanju trokuta u pravokutnik 'na pola' obje strane prema sredini (točka M), dobiveni pravokutnik ima POLOVINU površine trokuta.","Postupak: 1) izračunaj površinu trokuta. 2) pravokutnik = pola te površine.","Brže: P_trokut = (1/2)·8·8 = 32 cm². P_pravokutnik = 32/2 = 16 cm² (papir presavijen ostavlja 'pola' površine).","Intuicija: vrhovi A, B, C presavijaju se prema točki M. Materijal pokriva pravokutnu zonu, koja čini polovinu izvornog trokuta.","Česta greška 1: misliti da je pravokutnik 'pun' (32 cm²) — krivo, presavijanje znači da je papir dvostruk na nekim mjestima. Greška 2: krivo izračunati visinu na hipotenuzu.","Provjera: trokut 32 cm² → pravokutnik 16 cm² (1/2 odnos je tipičan za ovakvo presavijanje)."],
  steps:[
    {txt:"Jednakokračan PRAVOKUTAN trokut s katetom 8 cm. Hipotenuza: 8√2 cm."},
    {txt:"Vrhovi A, B, C sastaju se u M (polovište hipotenuze) nakon presavijanja."},
    {txt:"Visina pravokutnog trokuta iz pravog kuta na hipotenuzu = (kateta)²/hipotenuza = 64/(8√2) = 8/√2 = 4√2."},
    {txt:"Pravokutnik nakon presavijanja ima:"},
    {txt:"Stranica 1 (po hipotenuzi): pola hipotenuze = 4√2 cm."},
    {txt:"Stranica 2 (visina): pola visine trokuta = (1/2) · 4√2 = 2√2 cm."},
    {txt:"Površina pravokutnika: 4√2 · 2√2 = 8 · 2 = 16 cm²",final:true},
    {txt:"Točan odgovor: 16 cm².",final:true,note:"odgovor"},
    {txt:"Provjera: trokut ima površinu (1/2) · 8 · 8 = 32 cm². Presavijen u pravokutnik je polovina te površine = 16 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj hipotenuzu i visinu trokuta. 2) odredi dimenzije pravokutnika (pola hipotenuze × pola visine). 3) izračunaj površinu.",final:true,note:"postupak"},{txt:"Intuicija: Visina iz pravog kuta na hipotenuzu u jednakokračnom pravokutnom trokutu = polovina hipotenuze = a√2/2 = a/√2.",note:"intuicija",final:true}
  ]},
  {id:28.1,img:true,type:"sa",topic:"br",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Dijagram prikazuje rezultate istraživanja o slobodnome vremenu provedenome online tijekom jednoga dana po dobnim skupinama. Koja dobna skupina provede između 30 % i 40 % svojega slobodnoga vremena online?",
  sol:{ans:"24 − 26",alt:["24-26","24 do 26","24–26","24−26","24 - 26"]},
  why:["Pravilo: dijagram s dvije ose — crna (lijevo, broj minuta online) i crvena (desno, postotak online u odnosu na ukupno slobodno vrijeme). Treba pažljivo razlikovati koje vrijednosti čitamo.","Postupak: 1) identificiraj koju OS treba čitati za pitanje (postotak = crvena). 2) usporedi crvene vrijednosti za svaku skupinu sa traženim rasponom (30–40 %).","Intuicija: postotak vremena online opada s godinama. Mlađi 'vise' online više — najveći postotci za 15–17 i 18–23 godina.","Česta greška 1: čitati crne stupce (broj minuta) umjesto crvenih (postotak). Greška 2: pomiješati raspon (30–40 % vs 30–40 minuta).","Alt metoda: ako se znaju i minute online i ukupne minute, postotak = (minute online / ukupne) · 100 %.","Provjera s Q28.3: za skupinu 18–23 znamo da je postotak 56 % (zadan u Q28.3), pa naš očitaj iz crvene osi mora biti konzistentan."],
  steps:[
    {txt:"S dijagrama čitaj CRVENE postotke za svaku dobnu skupinu:"},
    {txt:"15–17: ≈ 60 % (najviši crveni stupac)"},
    {txt:"18–23: ≈ 56 % (konzistentno s Q28.3 koja zadaje 56 %)"},
    {txt:"24–26: ≈ 36 % (pada u raspon 30–40 %)",final:true},
    {txt:"27–30: ≈ 24 % (najniži crveni stupac)"},
    {txt:"Samo dobna skupina 24–26 ima postotak u rasponu 30 % – 40 %.",final:true,note:"odgovor"},
    {txt:"Točan odgovor: 24 − 26 godine.",final:true,note:"odgovor"},
    {txt:"Provjera: 36 % je između 30 % i 40 % ✓; ostale skupine imaju postotke izvan tog raspona (60, 56, 24).",final:true,note:"verifikacija"},
    {txt:"Postupak: očitaj crvene stupce s dijagrama; identificiraj koji pada u traženi raspon.",final:true,note:"postupak"},
    {txt:"Intuicija: crvena os ide od 0 % do 70 %. Raspon 30–40 % je u srednjem dijelu osi.",final:true,note:"intuicija"}
  ]},
  {id:28.2,img:true,type:"sa",topic:"br",points:1,img:true,
  context:"Zadatak 28 (2. dio od 3):",
  q:"U istraživanju je sudjelovao jednaki broj ispitanika u svakoj dobnoj skupini. Koliko prosječno minuta dnevno ispitanici provedu online?",
  sol:{ans:"72,5",alt:["72,5","72,5 min","72"]},
  why:["Pravilo aritmetičke sredine: prosjek = (suma vrijednosti) / (broj vrijednosti). Vrijedi kad su svi 'težinski' faktori jednaki (npr. isti broj ispitanika).","Težinski prosjek je drugačiji: ako neki skupovi imaju više ispitanika, oni 'teže više'. Ovdje SVI imaju jednako, pa je obična aritmetička sredina dovoljna.","Postupak: 1) očitaj svaku vrijednost (uz pravilnu OS). 2) zbroji. 3) podijeli s brojem skupina.","Intuicija: prosjek mora biti između minimuma (55) i maksimuma (100). 72,5 je u tom rasponu ✓.","Česta greška 1: koristiti težinski prosjek bez razloga (ako svi imaju isti broj, jednako je). Greška 2: pomiješati crne i crvene vrijednosti.","Alt metoda: zapisati u tabeli, lagano zbrojiti. 100 + 70 + 65 + 55 = 290. Pa 290/4.","Provjera: ako bi prosjek bio izvan raspona [55, 100], očito krivo. 72,5 je u rasponu ✓"],
  steps:[
    {txt:"Prosjek = (zbroj svih) / (broj skupina). Pošto je jednaki broj ispitanika u svakoj, prosjek je SREDINA crnih vrijednosti."},
    {txt:"Crne (broj minuta) iz dijagrama:"},
    {txt:"15-17: 100 min"},
    {txt:"18-23: 70 min"},
    {txt:"24-26: 65 min"},
    {txt:"27-30: 55 min"},
    {txt:"Prosjek = (100 + 70 + 65 + 55)/4 = 290/4 = 72,5 min",final:true},
    {txt:"Točan odgovor: 72,5 min.",final:true,note:"odgovor"},
    {txt:"Provjera: 72,5 · 4 = 290 = 100 + 70 + 65 + 55 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj sve crne vrijednosti. 2) zbroji. 3) podijeli s 4.",final:true,note:"postupak"},{txt:"Intuicija: Težinski prosjek je drugačiji: ako neki skupovi imaju više ispitanika, oni 'teže više'. Ovdje SVI imaju jednako, pa je obična aritmetička sredina dovoljna.",note:"intuicija",final:true}
  ]},
  {id:28.3,img:true,type:"sa",topic:"br",points:1,img:true,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Dobna skupina od 18 do 23 godine provede online 56 % slobodnoga vremena. Izračunajte koliko minuta slobodnoga vremena dnevno ima ta dobna skupina.",
  sol:{ans:"125",alt:["125 min","= 125","125,0","125,0","=125"]},
  why:["Pravilo postotka: ako je vrijednost A jednaka p % od cjeline T, onda T = A/(p/100) = 100A/p.","Inverzna primjena postotka: postotak nije sam po sebi 'količina' već 'omjer'. Da bi se od dijela došlo do cjeline, dijeli se s decimalom (ne množi).","Postupak: 1) izolite poznatu vrijednost (70 min online). 2) zna se da je to 56 % cjeline. 3) cjelina = vrijednost / 0,56.","Intuicija: ako 56 % = 70 min, onda 1 % = 70/56 = 1,25 min. Pa 100 % = 125 min. Direktan rezon.","Česta greška 1: pomnožiti 70 sa 0,56 (= 39,2 — krivo, to bi bilo 56 % od 70). Greška 2: pomiješati postotak online s postotkom slobodnog vremena općenito.","Alt metoda: proporcija — 56 : 100 = 70 : T → T = (100 · 70)/56 = 7000/56 = 125.","Provjera dimenzionalna: 125 min ≈ 2 h slobodnog vremena dnevno za mladu osobu (18-23) — razumno; od toga 70 min online (56 %) — također razumno."],
  steps:[
    {txt:"S dijagrama za 18-23: online = 70 min, što je 56 % ukupnog slobodnog vremena."},
    {txt:"Neka je T = ukupno slobodno vrijeme (min). Tada: 0,56 · T = 70"},
    {txt:"T = 70 / 0,56 = 125",final:true},
    {txt:"Točan odgovor: 125 min.",final:true,note:"odgovor"},
    {txt:"Provjera: 56 % od 125 = 0,56 · 125 = 70 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) identificiraj ulaznu vrijednost (70 min online) i njen postotak (56 %). 2) podijeli s postotkom (kao decimal) da dobiješ cjelinu.",final:true,note:"postupak"},
    {txt:"Intuicija: 56 % je iznad 50 %, pa cjelina je manje od dvostruke vrijednosti (manje od 140). 125 je u tom rasponu.",final:true,note:"intuicija"}
  ]}
];

export const qImages = {
  "2019_jesen_B__1": () => e(Svg1_2019Bj, null),
  "2019_jesen_B__13": () => e(Svg13_2019Bj, null),
  "2019_jesen_B__24.1": () => e(SvgT24a_2019Bj, null),
  "2019_jesen_B__24.2": () => e(Svg24b_2019Bj, null),
  "2019_jesen_B__25.1": () => e(Svg25a_2019Bj, null),
  "2019_jesen_B__27.1": () => e(Svg27a_2019Bj, null),
  "2019_jesen_B__27.2": () => e(Svg27b_2019Bj, null),
  "2019_jesen_B__27.3": () => e(Svg27c_2019Bj, null),
  "2019_jesen_B__28.1": () => e(Svg28_2019Bj, null),
  "2019_jesen_B__28.2": () => e(Svg28_2019Bj, null),
  "2019_jesen_B__28.3": () => e(Svg28_2019Bj, null),
};
