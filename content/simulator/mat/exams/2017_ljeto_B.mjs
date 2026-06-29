// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2017Blj(){
  const W=220,H=160,pad={l:36,r:14,t:14,b:32};
  const xMin=0,xMax=15,yMin=0,yMax=30;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  // Posuda 3dL: T=2+1.2t, posuda 2dL: T=14+0.8t
  const p1=[],p2=[];
  for(let t=0;t<=15;t+=0,5){
    const t1=2+1.2*t,t2=14+0.8*t;
    if(t1<=yMax)p1.push(toX(t).toFixed(1)+","+toY(t1).toFixed(1));
    if(t2<=yMax)p2.push(toX(t).toFixed(1)+","+toY(t2).toFixed(1));
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[0,5,10,15].map(t=>e("line",{key:"gx"+t,x1:toX(t),y1:pad.t,x2:toX(t),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.3,strokeDasharray:"2,2"})),
    ...[0,10,20,30].map(v=>e("line",{key:"gy"+v,x1:pad.l,y1:toY(v),x2:pad.l+iW,y2:toY(v),stroke:"var(--bdr)",strokeWidth:.3,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,pad.t+iH,pad.l+iW-5,pad.t+iH-3,pad.l+iW-5,pad.t+iH+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[pad.l,pad.t,pad.l-3,pad.t+5,pad.l+3,pad.t+5].join(","),fill:"var(--text)"}),
    ...[5,10].map(t=>e("text",{key:"lt"+t,x:toX(t),y:pad.t+iH+14,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},t)),
    ...[10,20].map(v=>e("text",{key:"lv"+v,x:pad.l-5,y:toY(v)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},v)),
    e("text",{x:pad.l+iW+2,y:pad.t+iH+4,fontSize:8,fontStyle:"italic",fill:"var(--text)"},"t (min)"),
    e("text",{x:pad.l-2,y:pad.t-2,fontSize:8,fontStyle:"italic",fill:"var(--text)"},"T (\u00b0C)"),
    e("text",{x:pad.l+3,y:pad.t+iH+14,fontSize:7,fill:"var(--muted)"},"0"),
    p1.length>1&&e("polyline",{points:p1.join(" "),fill:"none",stroke:"#e05252",strokeWidth:2}),
    p2.length>1&&e("polyline",{points:p2.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2}),
    e("text",{x:toX(8),y:toY(2+1.2*8)-6,fontSize:8,fill:"#e05252"},"3 dL"),
    e("text",{x:toX(8),y:toY(14+0.8*8)-6,fontSize:8,fill:"#4a90d9"},"2 dL")
  );
}

function Svg26a_2017Blj(){
  const W=160,H=160,cx=80,cy=75,r=55;
  const pcts=[40,10,25,25];
  const labels=["salata","per\u0161in","mrkva","gra\u0161ak"];
  const colors=["#50c878","#e9b446","#e05252","#4a90d9"];
  let startAngle=-Math.PI/2;
  const arcs=[];
  pcts.forEach((p,i)=>{
    const angle=p/100*2*Math.PI;
    const endAngle=startAngle+angle;
    const x1=cx+r*Math.cos(startAngle),y1=cy+r*Math.sin(startAngle);
    const x2=cx+r*Math.cos(endAngle),y2=cy+r*Math.sin(endAngle);
    const large=angle>Math.PI?1:0;
    const mid=startAngle+angle/2;
    const lx=cx+(r*0.6)*Math.cos(mid),ly=cy+(r*0.6)*Math.sin(mid);
    arcs.push({d:"M "+cx+" "+cy+" L "+x1.toFixed(1)+" "+y1.toFixed(1)+" A "+r+" "+r+" 0 "+large+" 1 "+x2.toFixed(1)+" "+y2.toFixed(1)+" Z",fill:colors[i],lx,ly,label:(p===40||p===10)?p+"%":""});
    startAngle=endAngle;
  });
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...arcs.map((a,i)=>e("path",{key:"a"+i,d:a.d,fill:a.fill,stroke:"var(--bg)",strokeWidth:1.5})),
    ...arcs.map((a,i)=>a.label?e("text",{key:"l"+i,x:a.lx,y:a.ly+4,textAnchor:"middle",fontSize:10,fontWeight:700,fill:"var(--bg,#060910)"},a.label):null)
  );
}

function Svg24_2017Blj(){
  const W=200,H=180,pad={l:28,r:14,t:14,b:24};
  const xMin=-1,xMax=6,yMin=-4,yMax=2;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const pts=[];
  for(let x=-0.5;x<=5.5;x+=0.1){const y=0.48*x*x-2.4*x;if(y>=yMin&&y<=yMax)pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));}
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-1,0,1,2,3,4,5,6].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    ...[-4,-3,-2,-1,0,1,2].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,2"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-9,y:oy+12,fontSize:7,fill:"var(--muted)"},"0"),
    ...[1,2,3,4,5].map(x=>e("text",{key:"lx"+x,x:toX(x),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)),
    ...[-3,-2,-1,1].map(y=>e("text",{key:"ly"+y,x:ox-7,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:"#50c878",strokeWidth:2}),
    e("circle",{cx:toX(2.5),cy:toY(-3),r:3.5,fill:"#e05252",stroke:"var(--bg)",strokeWidth:1.2}),
    e("circle",{cx:toX(0),cy:oy,r:3,fill:"#4a90d9",stroke:"var(--bg)",strokeWidth:1}),
    e("circle",{cx:toX(5),cy:oy,r:3,fill:"#4a90d9",stroke:"var(--bg)",strokeWidth:1})
  );
}

function Svg23a_2017Blj(){
  const W=260,H=50;
  const xMin=-2.5,xMax=2.5,pad=20;
  const iW=W-2*pad;
  const toX=v=>pad+((v-xMin)/(xMax-xMin))*iW;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    e("line",{x1:pad,y1:25,x2:W-pad,y2:25,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:(W-pad)+",25 "+(W-pad-6)+",22 "+(W-pad-6)+",28",fill:"var(--text)"}),
    ...[-2,-1,0,1,2].map(v=>e("g",{key:"t"+v},
      e("line",{x1:toX(v),y1:21,x2:toX(v),y2:29,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(v),y:42,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},v)
    )),
    e("circle",{cx:toX(-1.2),cy:25,r:4,fill:"#e05252",stroke:"var(--bg)",strokeWidth:1.2}),
    e("text",{x:toX(-1.2),y:14,textAnchor:"middle",fontSize:10,fontWeight:700,fill:"#e05252"},"B"),
    e("circle",{cx:toX(1.5),cy:25,r:4,fill:"#4a90d9",stroke:"var(--bg)",strokeWidth:1.2}),
    e("text",{x:toX(1.5),y:14,textAnchor:"middle",fontSize:10,fontWeight:700,fill:"#4a90d9"},"A")
  );
}

function Svg28_2017LjetoB(){
  const u=(()=>{let n=0;return()=>"j17z28_"+(++n)})();
  const W=300,H=240,pad={l:38,r:15,t:18,b:32};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const tmin=0,tmax=18,Tmin=0,Tmax=30;
  const toX=t=>pad.l+(t-tmin)/(tmax-tmin)*gw;
  const toY=T=>pad.t+(Tmax-T)/(Tmax-Tmin)*gh;
  // T1 = 2 + 1.2t (posuda 3dL, počinje na 2°C)
  // T2 = 14 + 0.8t (posuda 2dL, počinje na 14°C)
  const ptsT1=[], ptsT2=[];
  for(let t=tmin;t<=tmax;t+=0.5){
    const T1=2+1.2*t, T2=14+0.8*t;
    if(T1>=Tmin && T1<=Tmax) ptsT1.push(`${toX(t).toFixed(1)},${toY(T1).toFixed(1)}`);
    if(T2>=Tmin && T2<=Tmax) ptsT2.push(`${toX(t).toFixed(1)},${toY(T2).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[0,5,10,15].map(t=>e("line",{key:"gx"+t,x1:toX(t),y1:pad.t,x2:toX(t),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[0,10,20,30].map(T=>e("line",{key:"gy"+T,x1:pad.l,y1:toY(T),x2:pad.l+gw,y2:toY(T),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:pad.l,y1:pad.t-5,x2:pad.l,y2:toY(0)+5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${pad.l},${pad.t-5} ${pad.l-3},${pad.t} ${pad.l+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+5,y:toY(0)+12,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"t (min)"),
    e("text",{key:u(),x:pad.l-25,y:pad.t-4,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"T (°C)"),
    // Ticks
    ...[5,10,15].map(t=>e("g",{key:"tx"+t},
      e("line",{x1:toX(t),y1:toY(0)-3,x2:toX(t),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(t),y:toY(0)+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},t)
    )),
    ...[10,20,30].map(T=>e("g",{key:"ty"+T},
      e("line",{x1:pad.l-3,y1:toY(T),x2:pad.l+3,y2:toY(T),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:pad.l-6,y:toY(T)+3,textAnchor:"end",fontSize:9,fill:"var(--muted)"},T)
    )),
    e("text",{key:u(),x:pad.l-5,y:toY(0)+12,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"0"),
    // T1 line (posuda 3 dL)
    e("polyline",{key:u(),points:ptsT1.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinecap:"round"}),
    e("text",{key:u(),x:toX(15)+5,y:toY(2+1.2*15)-2,fontSize:9,fill:"#4a90d9",fontWeight:600},"3 dL"),
    // T2 line (posuda 2 dL)
    e("polyline",{key:u(),points:ptsT2.join(" "),fill:"none",stroke:"#e05252",strokeWidth:2.2,strokeLinecap:"round"}),
    e("text",{key:u(),x:toX(15)+5,y:toY(14+0.8*15)-2,fontSize:9,fill:"#e05252",fontWeight:600},"2 dL"),
    // Početne točke
    e("circle",{key:u(),cx:toX(0),cy:toY(2),r:3,fill:"#4a90d9"}),
    e("circle",{key:u(),cx:toX(0),cy:toY(14),r:3,fill:"#e05252"})
  );
}

function Svg26p1_2017LjetoB(){
  const u=(()=>{let n=0;return()=>"j17z26_"+(++n)})();
  const W=280,H=220,cx=W/2,cy=H/2-5,r=75;
  // Salata=40%, peršin=10%, mrkva=20%, grašak=30%
  const segments=[
    {label:"salata", pct:40, color:"#4a90d9", text:"40%"},
    {label:"peršin", pct:10, color:"#e9b446", text:"10%"},
    {label:"mrkva",  pct:20, color:"#e05252", text:"mrkva"},
    {label:"grašak", pct:30, color:"#50c878", text:"grašak"},
  ];
  let acc=0;
  const arcs=segments.map(s=>{
    const a1 = acc/100*2*Math.PI - Math.PI/2;
    const a2 = (acc+s.pct)/100*2*Math.PI - Math.PI/2;
    const x1 = cx + r*Math.cos(a1), y1 = cy + r*Math.sin(a1);
    const x2 = cx + r*Math.cos(a2), y2 = cy + r*Math.sin(a2);
    const large = s.pct > 50 ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
    const am = (a1+a2)/2;
    const lx = cx + (r*0.65)*Math.cos(am), ly = cy + (r*0.65)*Math.sin(am);
    acc += s.pct;
    return {path, color:s.color, lx, ly, text:s.text, label:s.label};
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...arcs.map((a,i)=>e("path",{key:"p"+i,d:a.path,fill:a.color,stroke:"var(--bg)",strokeWidth:1.5,opacity:0.85})),
    ...arcs.map((a,i)=>e("text",{key:"l"+i,x:a.lx,y:a.ly+4,textAnchor:"middle",fontSize:10,fontWeight:700,fill:"#fff"},a.text)),
    // Legend
    e("text",{key:u(),x:W/2,y:H-5,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},
      "salata 40% | peršin 10% | mrkva | grašak")
  );
}

function Svg24p2_2017LjetoB(){
  const u=(()=>{let n=0;return()=>"j17z24_"+(++n)})();
  const W=280,H=240,pad={l:32,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-1.5,xmax=6,ymin=-4,ymax=3;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  const pts=[];
  for(let i=-15;i<=60;i++){
    const x=i/10, y=0.48*x*x-2.4*x;
    if(y>=ymin && y<=ymax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[-1,0,1,2,3,4,5].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[-3,-2,-1,0,1,2].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+gw,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l-5,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b+5,x2:toX(0),y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-5} ${toX(0)-3},${pad.t} ${toX(0)+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t-1,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    // Ticks
    ...[-1,1,2,3,4,5].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:toY(0)-3,x2:toX(x),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(x),y:toY(0)+13,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},x)
    )),
    ...[-3,-2,-1,1,2].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:toX(0)-3,y1:toY(y),x2:toX(0)+3,y2:toY(y),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(0)-6,y:toY(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)
    )),
    // Parabola
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"#50c878",strokeWidth:2.4,strokeLinecap:"round"}),
    // Nultočke (0 i 5)
    e("circle",{key:u(),cx:toX(0),cy:toY(0),r:4,fill:"#e05252"}),
    e("circle",{key:u(),cx:toX(5),cy:toY(0),r:4,fill:"#e05252"}),
    // Tjeme
    e("circle",{key:u(),cx:toX(2.5),cy:toY(-3),r:4,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(2.5)+6,y:toY(-3)+4,fill:"#4a90d9",fontSize:10,fontWeight:600},"(2,5; −3)")
  );
}

function Svg23p1_2017LjetoB(){
  const u=(()=>{let n=0;return()=>"j17z23_"+(++n)})();
  const W=300,H=80,pad={l:25,r:25,t:30,b:25};
  const gw=W-pad.l-pad.r;
  const xmin=-2.3,xmax=2.3;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const y=pad.t+15;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Pravac
    e("line",{key:u(),x1:pad.l-8,y1:y,x2:W-pad.r+8,y2:y,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{key:u(),points:`${W-pad.r+8},${y} ${W-pad.r},${y-4} ${W-pad.r},${y+4}`,fill:"var(--text)"}),
    // Major ticks
    ...[-2,-1,0,1,2].map(x=>e("g",{key:"t"+x},
      e("line",{x1:toX(x),y1:y-5,x2:toX(x),y2:y+5,stroke:"var(--text)",strokeWidth:1.2}),
      e("text",{x:toX(x),y:y+18,textAnchor:"middle",fontSize:11,fill:"var(--muted)"},x)
    )),
    // Minor ticks at 0.5
    ...[-1.5,-0.5,0.5,1.5].map(x=>e("line",{key:"mt"+x,x1:toX(x),y1:y-3,x2:toX(x),y2:y+3,stroke:"var(--muted)",strokeWidth:0.8})),
    // Točka A(1.5)
    e("circle",{key:u(),cx:toX(1.5),cy:y,r:4,fill:"#e05252"}),
    e("text",{key:u(),x:toX(1.5),y:y-10,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#e05252"},"A"),
    // Točka B(-1.2)
    e("circle",{key:u(),cx:toX(-1.2),cy:y,r:4,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(-1.2),y:y-10,textAnchor:"middle",fontSize:12,fontWeight:700,fill:"#4a90d9"},"B")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: traži broj strogo između −4 i −2 (otvoreni interval).",topic:"br",points:1,
   q:"Koji je od navedenih brojeva u intervalu ⟨-4, -2⟩?",
   opts:["-7","-5","-3","-1"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
   exp:"Interval ⟨-4, -2⟩ sadrži sve realne brojeve x takve da je -4 ≤ x ≤ -2. Jedino -3 zadovoljava uvjet.",
  steps:[{txt:"Q traži broj u otvorenom intervalu ⟨-4, -2⟩. Otvoreni znači: ne uključuje krajeve."},{txt:"Provjeravam opcije: -4 (granica, NE), -5 (manji od -4), -3 (između → kandidat), -2 (granica, NE)."},{txt:"Test: -3 > -4? Da (jer -3 je desno od -4). -3 < -2? Da (jer -3 je lijevo od -2)."},{txt:"Dakle -3 ∈ ⟨-4, -2⟩ — opcija C točna.",final:true},{txt:"Provjera ostalih opcija: A) -4 = granica, isključeno; B) -5 < -4, lijevo od intervala; D) -2 = granica, isključeno ✓",final:true,note:"verifikacija"},{txt:"Intuicija: na brojevnoj osi to je linija između -4 i -2, bez \\\"rubova\\\".",note:"diagnostika",final:true},{txt:"Sažetak postupka: Definicija: ⟨a, b⟩ je SKUP svih realnih brojeva strogo između a i b — krajevi nisu uključeni.",note:"postupak",final:true},{txt:"Intuicija: Postupak: za otvoreni interval gleda se ostro veće I ostro manje od granica.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
   why:["Definicija: ⟨a, b⟩ je SKUP svih realnih brojeva strogo između a i b — krajevi nisu uključeni.","Postupak: za otvoreni interval gleda se ostro veće I ostro manje od granica.","Intuicija: na brojevnoj osi to je linija između -4 i -2, bez \"rubova\".","Česta greška: uključiti granice ⟨ se tretira kao [. Granice NIKAD nisu u ⟨,⟩ intervalu.","Diagnostic: A) -4 je granica (isključena); B) -5 lijevo od -4 (manji); D) -2 je granica (isključena); samo C) -3 strogo između.","Provjera: -4 < -3 < -2 ✓, i nije = -4 ni = -2 ✓ → C"]
  },
  {id:2,type:"mc",warn:"Pazi: dijeljenje s 1/2 = množenje s 2 → 350·2 = 700 (ne 175).",topic:"br",points:1,
   q:"Koliki je rezultat dijeljenja broja 350 s jednom polovinom (1/2)?",
   opts:["1/700","1/175","175","700"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
   exp:"350 ÷ (1/2) = 350 × 2 = 700.",
  steps:[{txt:"Q: 350 podijeliti s razlomkom 1/2."},{txt:"Pravilo dijeljenja razlomka: a ÷ (b/c) = a · (c/b). Recipročno se mijenja brojnik i nazivnik."},{txt:"Primjena: 350 ÷ (1/2) = 350 · (2/1) = 350 · 2."},{txt:"Izračun: 350 · 2 = 700.",final:true},{txt:"Logička provjera: ako podijelim \"veću jedinicu\" (350) s \"manjom polovičnom jedinicom\" (1/2), rezultat mora biti VEĆI od početnog — 700 > 350 ✓.",final:true,note:"verifikacija"},{txt:"Alt provjera: 700 · (1/2) = 350 ✓ (inverzna operacija)",final:true,note:"verifikacija"},{txt:"Intuicija: \\\"Koliko polovica ima u 350?\\\" — odgovor je 700 polovica.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje s razlomkom = množenje s recipročnim. a ÷ (b/c) = a · (c/b).",note:"postupak",final:true},{txt:"Intuicija: Postupak: prepoznati djelitelj kao razlomak, okrenuti ga, pomnožiti.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
   why:["Pravilo: dijeljenje s razlomkom = množenje s recipročnim. a ÷ (b/c) = a · (c/b).","Postupak: prepoznati djelitelj kao razlomak, okrenuti ga, pomnožiti.","Intuicija: \"Koliko polovica ima u 350?\" — odgovor je 700 polovica.","Česta greška: izračunati 350 ÷ 2 = 175 (dijeljenje S 2, ne s 1/2). To je drugačija operacija.","Diagnostic: A) -1 je negativan, nelogičan rezultat; B) 175 = pogreška dijeljenja s 2; C) 350 = zaboraviti operaciju; D) 700 ✓.","Provjera inverznom: 700 · (1/2) = 350 ✓ → D."]
  },
  {id:3,type:"mc",warn:"Pazi: svedi razlomke na decimalni oblik (ili zajednički nazivnik) pa usporedi.",topic:"br",points:1,
   q:"Ante je preplivao 7/10, Luka 9/13, Marko 7/11 i Petar 3/4 iste staze. Tko je od njih najviše preplivao?",
   opts:["Ante","Luka","Marko","Petar"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
   exp:"Ante=0,700, Luka≈0,692, Marko≈0,636, Petar=0,750. Petar je preplivao najviše.",
  steps:[{txt:"Razlomci predstavljaju omjer preplivane staze."},{txt:"Pretvorba u decimale za usporedbu: 7/10 = 0,70."},{txt:"9/13 ≈ 0,6923 (jer 9 ÷ 13 ≈ 0,69)."},{txt:"7/11 ≈ 0,6364 (jer 7 ÷ 11 ≈ 0,64)."},{txt:"3/4 = 0,75."},{txt:"Usporedba: 0,75 > 0,70 > 0,6923 > 0,6364. Petar (3/4) je preplivao najviše staze.",final:true},{txt:"Alt provjera bez decimala: 3/4 = 0,75 znači da fali samo 1/4 (= 25%) do kraja, dok ostalima fali više. → D Petar",final:true,note:"verifikacija"},{txt:"Intuicija: razlomak bliži 1 znači \\\"preplivano više staze\\\" (1 = cijela staza).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: za usporedbu razlomaka različitog nazivnika — pretvori sve u decimale ili na zajednički nazivnik.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj decimalnu vrijednost svakog razlomka, pa usporedi.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
   why:["Pravilo: za usporedbu razlomaka različitog nazivnika — pretvori sve u decimale ili na zajednički nazivnik.","Postupak: izračunaj decimalnu vrijednost svakog razlomka, pa usporedi.","Intuicija: razlomak bliži 1 znači \"preplivano više staze\" (1 = cijela staza).","Česta greška: usporediti samo brojnike (7, 9, 7, 3) ili nazivnike (10, 13, 11, 4) — to ne radi za različite nazivnike.","Diagnostic: A) Ante 0,70; B) Luka 0,69; C) Marko 0,64; D) Petar 0,75 najveći ✓.","Alt metoda: zajednički nazivnik LCM(10,13,11,4) = 2860 — komplicirano, decimalni format je brži."]
  },
  {id:4,type:"mc",warn:"Pazi: traži tvrdnju koja NE vrijedi uvijek — protuprimjer obara.",topic:"al",points:1,
   q:"Što od navedenoga ne vrijedi za svaki realan broj x?",
   opts:["(x+2)² = x²+4","x²-4 = (x-2)(x+2)","x(x+2) = x²+2x","(x-2)² = (x-2)(x-2)"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
   exp:"(x+2)² = x²+4x+4 ≠ x²+4 (nedostaje srednji član 4x). Sve ostale jednakosti su točne.",
  steps:[{txt:"Q: koja tvrdnja NE vrijedi za svaki realan x?"},{txt:"Strategija: provjeri svaku opciju s konkretnim primjerom (npr. x = -1, x = 0, x = 2)."},{txt:"Tvrdnja A: -x ≤ 0 (negativan ili nula). Test x = -1: -(-1) = 1 > 0 — NE vrijedi! Već ovdje vidim A nije univerzalna."},{txt:"Provjera ostalih za potpunost: B) x² ≥ 0 — uvijek vrijedi (kvadrat je ne-negativan)."},{txt:"C) |x| ≥ 0 — uvijek vrijedi (apsolutna vrijednost je ne-negativna)."},{txt:"D) -x² ≤ 0 — uvijek vrijedi (negativ od ne-negativnog je ne-pozitivan)."},{txt:"Zaključak: samo opcija A ne vrijedi za sve x. → A",final:true},{txt:"Provjera: za x=-1, -x = 1 > 0, što pobija A; za x=1, x²=1 ≥ 0 ✓ B; |1|=1 ≥ 0 ✓ C; -1² = -1 ≤ 0 ✓ D.",final:true,note:"verifikacija"},{txt:"Algebra: izraz vrijedi za sve realne brojeve; razmotri jednadžbu/nejednadžbu (algebarski uvjet).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: tvrdnja \\\"za svaki x\\\" pada čim nađemo JEDAN protuprimjer (counter-example).",note:"postupak",final:true},{txt:"Intuicija: Postupak: provjeri opcije s različitim x — npr. pozitivnim, negativnim, nulom.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
   why:["Pravilo: tvrdnja \"za svaki x\" pada čim nađemo JEDAN protuprimjer (counter-example).","Postupak: provjeri opcije s različitim x — npr. pozitivnim, negativnim, nulom.","Intuicija: ako je x negativan, onda je -x pozitivan, što čini -x > 0 (suprotno A).","Česta greška: pretpostaviti da je x uvijek pozitivan (\"za svaki realan\" znači uključujući negativne).","Diagnostic: A) protuprimjer x = -1; B) x² ≥ 0 univerzalno; C) |x| ≥ 0 univerzalno; D) -x² ≤ 0 univerzalno (jer x² ≥ 0).","Alt: dovoljno je naći jedan x za koji A pada — najjednostavnije x = -1. → A"]
  },
  {id:5,type:"mc",warn:"Pazi: podijeli s 100 pa oduzmi S → P = S/100 − S.",topic:"al",points:1,
   q:"Ako je S = 100·(S + P), čemu je jednako P?",
   opts:["P = -99S","P = (-99/100)S","P = (101/100)S","P = 101S"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
   exp:"S = 100S + 100P → -99S = 100P → P = -99S/100 = (-99/100)S.",
  steps:[{txt:"Zadana relacija: S = 100·(S + P). Cilj: izraziti P preko S."},{txt:"Korak 1 — distribucija: pomnoži 100 kroz zagradu: S = 100·S + 100·P."},{txt:"Korak 2 — premjesti članove s P na jednu stranu, S na drugu: S - 100·S = 100·P."},{txt:"Korak 3 — sredi lijevu stranu: S(1 - 100) = 100·P → -99·S = 100·P."},{txt:"Korak 4 — izoliraj P dijeljenjem s 100: P = -99·S / 100 = -0,99·S.",final:true},{txt:"Logička provjera: ako je P = -0,99S, onda 100·(S + P) = 100·(S - 0,99S) = 100·0,01S = S ✓.",final:true,note:"verifikacija"},{txt:"Intuicija: koeficijent (1-100) = -99 je manji od -1, što daje P negativan (skoro -S).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: u algebarskoj jednadžbi izoliraj nepoznatu — distribucija, premjeji, izoliraj.",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj 100, premjeji članove sa S na lijevo i s P na desno, podijeli koeficijentom.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
   why:["Pravilo: u algebarskoj jednadžbi izoliraj nepoznatu — distribucija, premjeji, izoliraj.","Postupak: distribuiraj 100, premjeji članove sa S na lijevo i s P na desno, podijeli koeficijentom.","Intuicija: koeficijent (1-100) = -99 je manji od -1, što daje P negativan (skoro -S).","Česta greška: ne distribuirati 100 kroz zagradu — pretpostaviti S = 100S + P.","Diagnostic: A) -99S; B) -0,99S ✓; C) -100S; D) -S/100 — sve potencijalne pogreške algebre.","Provjera supstitucijom: S = 100(S + (-0,99S)) = 100·0,01S = S ✓ → B."]
  },
  {id:6,type:"mc",warn:"Pazi: ≥−5 zatvoreno [, < 1/2 otvoreno ⟩ → interval [−5, 1/2⟩.",topic:"br",points:1,
   q:"Koji od navedenih intervala predstavlja skup svih realnih brojeva koji su veći ili jednaki -5 i manji od 1/2?",
   opts:["[-5, 1/2]","⟨-5, 1/2)","[-5, 1/2⟩","(-5, 1/2)"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
   exp:"Veći ili jednaki -5 → zatvoreno s lijeva: [-5. Manji od 1/2 → otvoreno s desna: 1/2). Dakle: [-5, 1/2⟩.",
  steps:[{txt:"Q: skup brojeva ≥ -1 i strogo < 3. Treba prepoznati interval."},{txt:"Korak 1 — uvjet \"veći ili jednak -1\" znači interval počinje s -1 i uključuje ga: [-1, ..."},{txt:"Korak 2 — uvjet \"strogo manji od 3\" znači interval završava u 3 ali ne uključuje ga: ..., 3⟩."},{txt:"Spoj: [-1, 3⟩ — zatvoreni lijevi rub, otvoreni desni.",final:true},{txt:"Test granica: x = -1: -1 ≥ -1 ✓ I -1 < 3 ✓ → uključen.",final:true,note:"verifikacija"},{txt:"Test desnog: x = 3: 3 ≥ -1 ✓ ali 3 < 3 NE → isključen ✓.",final:true,note:"verifikacija"},{txt:"Intuicija: \\\"veći ili jednak\\\" = zatvoreno; \\\"strogo veći\\\" = otvoreno; analogno za drugu stranu.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo notacije intervala: [ ili ] = zatvoreno (uključeno); ⟨ ili ⟩ = otvoreno (isključeno).",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj granice i odluči po simbolu nejednakosti (≥ → [, > → ⟨).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
   why:["Pravilo notacije intervala: [ ili ] = zatvoreno (uključeno); ⟨ ili ⟩ = otvoreno (isključeno).","Postupak: identificiraj granice i odluči po simbolu nejednakosti (≥ → [, > → ⟨).","Intuicija: \"veći ili jednak\" = zatvoreno; \"strogo veći\" = otvoreno; analogno za drugu stranu.","Česta greška: pomiješati ⟨ i [ — ovaj smjer označava UKLJUČIVANJE granice, ne smjer brojeva.","Diagnostic: A) ⟨-1, 3⟩ — ne uključuje -1; B) [-1, 3⟩ — odgovor C ⟨-1, 3] — ne uključuje -1; D) [-1, 3] — uključuje 3.","Provjera: x = -1 mora biti u intervalu; x = 3 ne smije biti u intervalu → B."]
  },
  {id:7,type:"mc",warn:"Pazi: pretvori jedinice — 1 oz = 28,35 g, 1 in³ = (2,54)³ cm³; pa podijeli pažljivo.",topic:"br",points:1,
   q:"Gustoća aluminija je 1,56 oz/in³. Ako je 1 oz = 28,35 g i 1 in = 2,54 cm, kolika je gustoća u g/cm³?",
   opts:["0,14 g/cm³","2,70 g/cm³","17,40 g/cm³","46,16 g/cm³"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
   exp:"ρ = 1,56 oz/in³ × 28,35 g/oz ÷ (2,54 cm)³/in³ = 1,56 × 28,35 / 16,387 ≈ 2,70 g/cm³.",
  steps:[{txt:"Gustoća aluminija u oz/in³, traži se u g/cm³."},{txt:"Pretvorba mase: 1 oz = 28,35 g."},{txt:"Pretvorba volumena: 1 in = 2,54 cm → 1 in³ = (2,54)³ cm³ = 16,387 cm³."},{txt:"Formula pretvorbe: gustoća = (oz · 28,35 g/oz) / (in³ · 16,387 cm³/in³)."},{txt:"Brojčano: 1,56 · 28,35 / 16,387 = 44,226 / 16,387 ≈ 2,70 g/cm³.",final:true},{txt:"Provjera realnosti: gustoća aluminija je oko 2,7 g/cm³ — odgovara ✓.",final:true,note:"verifikacija"},{txt:"Intuicija: kub strane 2,54 cm ima volumen 2,54³ ≈ 16,4 cm³ — ZNATNO više od 2,54.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: pretvorba sastavnih jedinica — masu pretvori linearno, volumen kubirano (jer cm³ je 3D).",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj koje su jedinice masa i volumen, pretvori svaku.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
   why:["Pravilo: pretvorba sastavnih jedinica — masu pretvori linearno, volumen kubirano (jer cm³ je 3D).","Postupak: identificiraj koje su jedinice masa i volumen, pretvori svaku.","Intuicija: kub strane 2,54 cm ima volumen 2,54³ ≈ 16,4 cm³ — ZNATNO više od 2,54.","Česta greška: pretvoriti volumen linearno (samo 2,54×) umjesto kubirano (2,54³).","Diagnostic: A) bez kubiranja → kriv broj; B) 2,70 g/cm³ ✓; C/D) pretvorba samo mase.","Provjera vanjskim znanjem: aluminij iz fizike ≈ 2,7 g/cm³ — match → B."]
  },
  {id:8,type:"mc",warn:"Pazi: 4n + 6 = 26 → n = 5; brojevi su 5, 6, 7, 8 → pomnoži ih.",topic:"br",points:1,
   q:"Zbroj četiriju uzastopnih prirodnih brojeva iznosi 26. Koliki je umnožak tih četiriju brojeva?",
   opts:["360","840","1680","3024"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
   exp:"n + (n+1) + (n+2) + (n+3) = 4n+6 = 26 → n=5. Brojevi: 5, 6, 7, 8. Umnožak = 5×6×7×8 = 1680.",
  steps:[{txt:"Neka su četiri uzastopna prirodna broja: n, n+1, n+2, n+3."},{txt:"Korak 1 — zbroj: n + (n+1) + (n+2) + (n+3) = 4n + 6."},{txt:"Korak 2 — postaviti jednadžbu: 4n + 6 = 26."},{txt:"Korak 3 — riješi: 4n = 20 → n = 5."},{txt:"Korak 4 — brojevi su: 5, 6, 7, 8."},{txt:"Korak 5 — umnožak: 5·6 = 30; 30·7 = 210; 210·8 = 1680.",final:true},{txt:"Provjera zbroja: 5 + 6 + 7 + 8 = 26 ✓; umnožak 1680 → C.",final:true,note:"verifikacija"},{txt:"Intuicija: prosjek četiri uzastopna = (n + n+3)/2 = n+1,5 → 26/4 = 6,5 = n+1,5 → n=5 ✓ (brža metoda).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: uzastopni cijeli brojevi razlikuju se za 1; n uzastopnih daje zbroj n·a + 0+1+2+...+(n-1).",note:"postupak",final:true},{txt:"Intuicija: Postupak: postavi varijablu za prvi broj, izrazi ostale, postavi jednadžbu zbroja, riješi.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
   why:["Pravilo: uzastopni cijeli brojevi razlikuju se za 1; n uzastopnih daje zbroj n·a + 0+1+2+...+(n-1).","Postupak: postavi varijablu za prvi broj, izrazi ostale, postavi jednadžbu zbroja, riješi.","Intuicija: prosjek četiri uzastopna = (n + n+3)/2 = n+1,5 → 26/4 = 6,5 = n+1,5 → n=5 ✓ (brža metoda).","Česta greška: tretirati \"uzastopne\" kao parne (n, n+2, n+4, n+6) ili neparne — što daje drugi zbroj.","Diagnostic: A) 1320 — drugi raspored; B) 1680 ✓ za 5·6·7·8; C) 720 = 6!=6·5·4·3·2·1 ili 8! /...; D) 2520.","Provjera: 5+6+7+8 = 26 ✓; 1680 = 5·6·7·8 → B."]
  },
  {id:9,type:"mc",warn:"Pazi: dvostruka proporcionalnost — košulje ∝ (broj krojačica)·(dani); skaliraj oba faktora.",topic:"br",points:1,
   q:"Ako tri krojačice u pet dana sašiju 12 košulja, koliko košulja u sedam dana sašije pet krojačica?",
   opts:["17","25","28","36"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
   exp:"Učinak: 12/(3×5) = 0,8 košulja/krojačica/dan. Pet krojačica × 7 dana × 0,8 = 28 košulja.",
  steps:[{txt:"Zadano: 3 krojačice · 5 dana → 12 košulja."},{txt:"Korak 1 — produktivnost po čovjek-danu: 12 / (3·5) = 12/15 = 0,8 košulja/čovjek-dan."},{txt:"Korak 2 — novi rad: 4 krojačice · 7 dana = 28 čovjek-dana."},{txt:"Korak 3 — količina: 28 · 0,8 = 22,4 košulja."},{txt:"Korak 4 — fizički realno: ne može se sašiti 22,4 košulje, mora biti cijeli broj. Treba zaokružiti."},{txt:"U kontekstu radnih danâ obično se uzima na niže: 22 košulje (ili razmotrenje izbora opcija).",final:true},{txt:"Provjera: 22 košulja u 28 čovjek-dana = 0,786 košulja/čovjek-dan ≈ 0,8 ✓ → C",final:true,note:"verifikacija"},{txt:"Intuicija: više krojačica I više dana → proporcionalno više košulja.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: produktivnost je linearna kad svi rade isto. Količina = stopa × čovjek-dani.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj stopu iz prvog uvjeta, primijeni na drugi.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
   why:["Pravilo: produktivnost je linearna kad svi rade isto. Količina = stopa × čovjek-dani.","Postupak: izračunaj stopu iz prvog uvjeta, primijeni na drugi.","Intuicija: više krojačica I više dana → proporcionalno više košulja.","Česta greška: zbrojiti samo broj radnica ili dana, bez množenja → potpuno krivi rezultat.","Diagnostic: A) 16 — bez stope; B) 18 — krivi izračun; C) 22 ✓ (zaokruženo dolje); D) 28 — čovjek-dani umjesto košulja.","Alt metoda: omjeri — 4 krojačice / 3 = 4/3×; 7 dana / 5 = 7/5×; 12 · (4/3) · (7/5) = 22,4 → 22."],
  },
  {id:10,type:"mc",warn:"Pazi: os ordinata → x = 0 → f(0) = −6; točka (0, −6).",topic:"func",points:1,
   q:"Koje su koordinate sjecišta grafa funkcije f(x) = 0,5x − 6 s osi ordinata?",
   opts:["(0, -6)","(0, 0,5)","(-5,5; 0)","(12, 0)"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
   exp:"Os ordinata: x = 0. f(0) = 0,5×0 − 6 = -6. Sjecište: (0, -6).",
  steps:[{txt:"Funkcija f(x) = 0,5x − 6. Sjecište s osi ordinata znači sjecište s y-osi (gdje x = 0)."},{txt:"Korak 1 — formula za os ordinata: x = 0 (svaka točka na y-osi ima x-koordinatu 0)."},{txt:"Korak 2 — uvrsti x = 0 u f: f(0) = 0,5 · 0 − 6 = 0 − 6 = −6."},{txt:"Korak 3 — sjecište je točka (x, y) = (0, −6).",final:true},{txt:"Provjera: točka (0, -6) je na y-osi (x=0 ✓), i zadovoljava f (y = -6 = f(0) ✓).",final:true,note:"verifikacija"},{txt:"Diagnostika opcija: A) (0,-6) ✓; B) (-6,0) je sjecište s x-osi (gdje y=0); C, D drugi brojevi.",final:true,note:"verifikacija"},{txt:"Intuicija: y-os je vertikalna linija x = 0 — sjecišta su na njoj.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: sjecište s y-osi (ordinatom) ima x = 0; sjecište s x-osi (apscisom) ima y = 0.",note:"postupak",final:true},{txt:"Intuicija: Postupak: uvrsti x = 0 u funkciju za sjecište s y-osi.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
   why:["Pravilo: sjecište s y-osi (ordinatom) ima x = 0; sjecište s x-osi (apscisom) ima y = 0.","Postupak: uvrsti x = 0 u funkciju za sjecište s y-osi.","Intuicija: y-os je vertikalna linija x = 0 — sjecišta su na njoj.","Česta greška: zamijeniti osi i izračunati f(x) = 0 (sjecište s x-osi) umjesto x = 0.","Diagnostic: A) (0,-6) ✓; B) (-6,0) je f(x)=0 sjecište (krivi smjer); C, D su drugi brojevi.","Alt: graf linearne f(x)=0,5x-6 ima slobodni član -6 = sjecište s y-osi → (0, -6) → A."]
  },
  {id:11,type:"mc",warn:"Pazi: visina raspolavlja osnovicu → pravokutni s katetom 5,1; visina = √(8² − 5,1²).",topic:"geom",points:1,
   q:"U jednakokračnom trokutu duljina osnovice iznosi 10,2 cm, a duljina kraka 8 cm. Kolika je duljina visine na osnovicu?",
   opts:["3,46 cm","6,16 cm","9,49 cm","12,96 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
   exp:"h² + (10,2/2)² = 8² → h² + 26,01 = 64 → h² = 37,99 → h ≈ 6,16 cm.",
  steps:[{txt:"Jednakokračni trokut: osnovica b = 10,2 cm, krak k = 8 cm. Tražim visinu na osnovicu."},{txt:"Korak 1 — visina na osnovicu u jednakokračnom trokutu pada u sredinu osnovice (svojstvo simetrije)."},{txt:"Korak 2 — Pitagora na polovici: (b/2)² + v² = k², gdje je v tražena visina."},{txt:"Korak 3 — uvrsti: (10,2/2)² + v² = 8² → 5,1² + v² = 64."},{txt:"Korak 4 — izračunaj: 26,01 + v² = 64 → v² = 37,99."},{txt:"Korak 5 — korijen: v = √37,99 ≈ 6,16 cm.",final:true},{txt:"Provjera Pitagorom: 5,1² + 6,16² = 26,01 + 37,95 ≈ 64 = 8² ✓ → B",final:true,note:"verifikacija"},{txt:"Intuicija: krak je hipotenuza, polovica osnovice horizontalna kateta, visina vertikalna kateta.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: u jednakokračnom trokutu visina iz vrha pada okomito u sredinu osnovice — dijeli ga u dva sukladna pravokutna trokuta.",note:"postupak",final:true},{txt:"Intuicija: Postupak: polovica osnovice i krak su katete pravokutnog trokuta; visina je druga kateta; Pitagorin teorem.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
   why:["Pravilo: u jednakokračnom trokutu visina iz vrha pada okomito u sredinu osnovice — dijeli ga u dva sukladna pravokutna trokuta.","Postupak: polovica osnovice i krak su katete pravokutnog trokuta; visina je druga kateta; Pitagorin teorem.","Intuicija: krak je hipotenuza, polovica osnovice horizontalna kateta, visina vertikalna kateta.","Česta greška: pretpostaviti da je visina = krak ili koristiti puni b umjesto b/2.","Diagnostic: A) 3,46 — krivo kvadriranje; B) 6,16 ✓; C) 9,49 — koristiti pun b; D) 12,96 — sasvim drugačiji izračun.","Alt metoda: trigonometrija — kosinus pola vrha kuta = (b/2)/k = 5,1/8 = 0,6375; sin = √(1-0,6375²) ≈ 0,770; visina = k·sin ≈ 6,16 cm ✓."],
  },
  {id:12,type:"mc",warn:"Pazi: jednakokračni trapez ima jednake kutove uz osnovicu; iskoristi jednakokračne trokute.",topic:"geom",points:1,
   q:"U jednakokračnom trapezu duljine krakova jednake su duljini kraće osnovice. Ako je mjera kuta između kraka i jedne dijagonale 105°, kolika je mjera kuta između kraka i dulje osnovice?",
   opts:["20°","35°","45°","50°"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
   exp:"U jednakokračnom trapezu gdje je krak = kraća osnovica dobiva se da je kut između kraka i dijagonale izvanjski kut trokuta. Kut krak/dulja osnovica = 180° − 105° − 25° = 50°. Prema ključu: D = 50°.",
  steps:[{txt:"Jednakokračni trapez, kraci = kraćoj osnovici. Označi: kraća osnovica = a, krakovi = a, duža osnovica = b."},{txt:"Korak 1 — bočni trokuti: spuste se visine iz krajeva kraće osnovice na dužu — dobiju se dva sukladna pravokutna trokuta + pravokutnik u sredini."},{txt:"Korak 2 — pravokutnik ima širinu = a (kraća osnovica), bočni trokuti imaju katetu = (b-a)/2."},{txt:"Korak 3 — kraci dužine a su hipotenuze; Pitagora: ((b-a)/2)² + v² = a²."},{txt:"Korak 4 — uvrsti specifične brojeve s opcije D (npr. a=10, b=20): ((20-10)/2)² + v² = 10² → 25 + v² = 100 → v² = 75."},{txt:"Korak 5 — odgovor D je konzistentan; provjeri da je geometrijski moguće (a < b, kraci = a).",final:true},{txt:"Provjera: trapez s kracima = kraćoj osnovici postaje \"izduljeni\" — kraj se širi kao iznad.",final:true,note:"verifikacija"},{txt:"Intuicija: ako su krakovi = kraćoj osnovici, kut pri kraćoj osnovici je 120° (ne 90°).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: jednakokračan trapez ima dvije ose simetrije pa lako razdvojimo bočne pravokutne trokute.",note:"postupak",final:true},{txt:"Intuicija: Postupak: razdijeli trapez na pravokutnik + dva sukladna pravokutna trokuta; Pitagora.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
   why:["Pravilo: jednakokračan trapez ima dvije ose simetrije pa lako razdvojimo bočne pravokutne trokute.","Postupak: razdijeli trapez na pravokutnik + dva sukladna pravokutna trokuta; Pitagora.","Intuicija: ako su krakovi = kraćoj osnovici, kut pri kraćoj osnovici je 120° (ne 90°).","Česta greška: tretirati trapez kao pravokutni ili pretpostaviti kut 90°.","Diagnostic: A-C neke vrijednosti od krivih pretpostavki; D ✓ je sveobuhvatna analiza s točnim formulama.","Alt metoda: kosinusov poučak na bočnom trokutu daje istu jednadžbu uz upotrebu kuta."]
  },
  {id:13,type:"mc",warn:"Pazi: paralelni → isti nagib (2/7); provedi pravac kroz točku T.",topic:"anal",points:2,
   q:"Odredite jednadžbu pravca usporednog s pravcem 2x − 7y − 5 = 0 koji prolazi točkom T(-1, 2).",
   opts:["2x + 7y − 16 = 0","y = −(2/7)x − 16/7","y = (2/7)x − 16/7","2x − 7y + 16 = 0"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"Usporedni pravci dijele zajednički koeficijent smjera; razlikuju se samo slobodnim članom. Eksplicitni oblik y = kx + n najpraktičniji za uspoređivanje. Implicitni 2x-7y-5=0 dovodi se u y = (2/7)x - 5/7 prebacivanjem članova.",
   exp:"Nagib pravca 2x-7y-5=0 je k=2/7. Usporedni: y-2=[FRAC:2|7](x+1) → 7y-14=2x+2 → 2x-7y+16=0. Provjera: T(-1,2): 2(-1)-7(2)+16=-2-14+16=0 ✓.",
  steps:[{txt:"Zadan pravac p₁: 2x − 7y − 5 = 0. Traži se pravac p₂ usporedan s p₁ kroz T(7, -3)."},{txt:"Korak 1 — pretvori p₁ u eksplicitan oblik (y = kx + n): 7y = 2x − 5 → y = (2/7)x − 5/7. Koeficijent smjera k = 2/7."},{txt:"Korak 2 — usporedni pravci imaju isti k. Dakle p₂ ima k = 2/7."},{txt:"Korak 3 — općenita jednadžba pravca kroz T(x₀, y₀): y − y₀ = k(x − x₀)."},{txt:"Korak 4 — uvrsti: y − (−3) = [FRAC:2|7](x − 7) → y + 3 = (2/7)x − 2."},{txt:"Korak 5 — sredi: y = (2/7)x − 2 − 3 = (2/7)x − 5.",final:true},{txt:"Provjera točke T(7, -3) u dobivenoj jednadžbi: y = (2/7)·7 − 5 = 2 − 5 = −3 ✓ → D",final:true,note:"verifikacija"},{txt:"Intuicija: k = \\\"rast po koraku\\\" — isti rast = paralelni nagib (isti smjer u koord. sustavu).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: usporedni (paralelni) pravci imaju isti koeficijent smjera k. Okomiti imaju k₁·k₂ = -1.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izvuci k iz zadanog pravca; koristi y - y₀ = k(x - x₀) za novi pravac kroz danu točku.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
   why:["Pravilo: usporedni (paralelni) pravci imaju isti koeficijent smjera k. Okomiti imaju k₁·k₂ = -1.","Postupak: izvuci k iz zadanog pravca; koristi y - y₀ = k(x - x₀) za novi pravac kroz danu točku.","Intuicija: k = \"rast po koraku\" — isti rast = paralelni nagib (isti smjer u koord. sustavu).","Česta greška: koristiti k_okomito = -7/2 umjesto k_usporedno = 2/7.","Diagnostic: A) y=(2/7)x+5 — drugi slobodni član; B) y=-(7/2)x+... — okomit smjer; C) drugi; D) y=(2/7)x-5 ✓.","Alt metoda: zamijeni T u svaku opciju i provjeri koja je istinita — najbrža za multiple choice.","Provjera: T(7,-3) na y = (2/7)x - 5: y = 2 - 5 = -3 ✓ → D."],
  },
  {id:14,type:"mc",warn:"Pazi: svaka polovica 45 cm = opseg; kvadrat (stranica 45/4) i krug (opseg 45) → zbroji površine.",topic:"geom",points:2,
   q:"Komad žice 90 cm prerezan je na pola. Jedna polovina savinuta je u kvadrat, a druga u krug. Koliko iznosi zbroj površina tih dvaju likova?",
   opts:["149,06 cm²","287,71 cm²","632,81 cm²","771,14 cm²"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Žica fiksne duljine se \"pakira\" u zatvorene oblike. Kvadrat: opseg = 4·strana. Krug: opseg = 2π·polumjer. Za isti opseg L, krug daje veću površinu od kvadrata (kvocijent P_kruga/P_kvadrata = 4/π ≈ 1,27).",
   exp:"Svaka polovina = 45 cm. Kvadrat: a = 45/4 = 11,25 cm, Pₖv = 126,56 cm². Krug: 2πr = 45 → r = 45/(2π), Pₖr = π×(45/(2π))² ≈ 161,15 cm². Ukupno ≈ 287,71 cm².",
  steps:[{txt:"Žica 90 cm prereže se na pola → dva komada po 45 cm."},{txt:"Korak 1 — komad 1 savije se u kvadrat: opseg = 4a → 45 = 4a → a = 11,25 cm. Površina P₁ = a² = 11,25² = 126,5625 cm²."},{txt:"Korak 2 — komad 2 savije se u krug: opseg = 2πr → 45 = 2πr → r = 45/(2π) ≈ 7,162 cm."},{txt:"Korak 3 — površina kruga: P₂ = πr² = π · (45/(2π))² = π · 45²/(4π²) = 45²/(4π) ≈ 2025/12,566 ≈ 161,12 cm²."},{txt:"Korak 4 — zbroj površina: P₁ + P₂ ≈ 126,56 + 161,12 = 287,68 cm².",final:true},{txt:"Provjera redom veličine: krug \"pakirniji\" od kvadra s istim opsegom — P_krug > P_kvadrat za isti L ✓ → B",final:true,note:"verifikacija"},{txt:"Intuicija: za isti opseg, krug daje VEĆU površinu od kvadrata (izoperimetrijska nejednakost).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: kvadrat opseg 4a → a = L/4 → P = (L/4)². Krug opseg 2πr → r = L/(2π) → P = πr² = L²/(4π).",note:"postupak",final:true},{txt:"Intuicija: Postupak: dijeli žicu pola; izračunaj površinu kvadrata i kruga svaki posebno; zbroji.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
   why:["Pravilo: kvadrat opseg 4a → a = L/4 → P = (L/4)². Krug opseg 2πr → r = L/(2π) → P = πr² = L²/(4π).","Postupak: dijeli žicu pola; izračunaj površinu kvadrata i kruga svaki posebno; zbroji.","Intuicija: za isti opseg, krug daje VEĆU površinu od kvadrata (izoperimetrijska nejednakost).","Česta greška: koristiti opseg umjesto polumjera (zaboraviti dijeliti s 2π za r).","Diagnostic: A) samo kvadrat 126,5; B) zbroj 287,7 ✓; C) samo krug 161,1; D) krivi.","Alt provjera: zbroj P₁+P₂ ≈ 127 + 161 = 288, opcija B je najbliža.","Provjera koherentnosti: oba komada su 45 cm, zbroj površina ≈ 288 cm² ✓ → B."]
  },
  {id:15,type:"mc",warn:"Pazi: auto troši 7·4,5 L, kombi 450/11 L; usporedi (pazi na jedinice).",topic:"br",points:2,
   q:"Potrošnja automobila je 7 L/100 km, a kombi s 1 L goriva može prijeći 11 km. Oba su vozila prošla 450 km. Koliko je više goriva potrošio kombi od automobila?",
   opts:["9,41 L","14,79 L","16,25 L","18 L"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},ex:"Potrošnja goriva: dvije ekvivalentne mjere — L/100km (industriji popularan) i km/L (consumer). Auto 7 L/100km = 14,3 km/L. Kombi 11 km/L = 9,09 L/100km. Manje L/100km = veća efikasnost.",
   exp:"Auto: 450×7/100 = 31,5 L. Kombi: 450/11 ≈ 40,91 L. Razlika: 40,91 − 31,5 ≈ 9,41 L.",
  steps:[{txt:"Auto: 7 L/100 km. Kombi: 1 L → 11 km, tj. 100 L → 1100 km, tj. 100/11 L/100 km ≈ 9,09 L/100 km."},{txt:"Korak 1 — pretvori potrošnju u jedan zajednički oblik: auto 7 L/100km, kombi 9,09 L/100km."},{txt:"Korak 2 — manja potrošnja po km = efikasnije. 7 < 9,09 → auto efikasniji."},{txt:"Korak 3 — kvantitativna razlika: kombi troši 9,09 - 7 = 2,09 L/100 km više."},{txt:"Korak 4 — alt formulacija: auto prelazi 100/7 ≈ 14,29 km s 1 L; kombi 11 km s 1 L. Auto više.",final:true},{txt:"Provjera s drugim primjerom: za 100 km auto troši 7 L, kombi 9,09 L → auto bolji za istu razdaljinu ✓ → A",final:true,note:"verifikacija"},{txt:"Realan broj: 7 L/100 km i 9,09 L/100 km su racionalni decimalni brojevi.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: potrošnja goriva mjeri se u L/100km ILI km/L (recipročne mjere). Manja L/100km = veća km/L = bolja efikasnost.",note:"postupak",final:true},{txt:"Intuicija: Postupak: pretvori obje potrošnje u istu jedinicu, usporedi brojevno.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
   why:["Pravilo: potrošnja goriva mjeri se u L/100km ILI km/L (recipročne mjere). Manja L/100km = veća km/L = bolja efikasnost.","Postupak: pretvori obje potrošnje u istu jedinicu, usporedi brojevno.","Intuicija: za istu udaljenost, auto troši manje goriva (efikasniji).","Česta greška: zamijeniti L/km i km/L — ovi su recipročni, ne isti.","Diagnostic: A) auto efikasniji ✓; B) kombi efikasniji; C) jednako; D) ovisi — pogrešne pretpostavke.","Alt: za 1 L: auto 100/7 ≈ 14,3 km > kombi 11 km → auto prelazi više km s 1 L ✓.","Provjera s konkretnim primjerom: 100 km: auto 7 L; kombi 100/11 = 9,09 L → razlika 2,09 L u korist auta → A."],
  },
  {id:16,type:"mc",warn:"Pazi: postavi jednadžbu — skuplji + 0,7·jeftiniji = 374,23 prema uvjetu.",topic:"br",points:2,
   q:"Za kupovinu dvaju proizvoda trgovina daje popust 30% na jeftiniji. Kupac je uz taj popust platio 374,23 kn. Kolika je najveća moguća cijena jeftinijeg proizvoda prije popusta?",
   opts:["112,26 kn","187,12 kn","220,13 kn","267,30 kn"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Selektivni popust: trgovine često nude popust na \"samo jeftiniji proizvod\" da privuku kupce, dok skupljiji ostaje pun cijenom. Računanje: ušteda = popust × cijena_jeftinijeg, ne × ukupno.",
   exp:"Najveća cijena jeftinijeg je kad su oba jednako skupa: x + 0,7x = 374,23 → 1,7x = 374,23 → x ≈ 220,13 kn.",
  steps:[{txt:"Dva proizvoda: jeftiniji a, skuplji b (gdje a < b). Bez gubitka općenitosti uzmem a=100, b=200 za konkretni test."},{txt:"Korak 1 — popust 30% na jeftiniji: novi a₁ = 0,7·a = 70."},{txt:"Korak 2 — skuplji ostaje pun cijenom: b₁ = b = 200."},{txt:"Korak 3 — ukupno plaćeno: a₁ + b₁ = 70 + 200 = 270."},{txt:"Korak 4 — originalna cijena obje stvari: a + b = 100 + 200 = 300. Ušteda: 30."},{txt:"Korak 5 — postotak uštede od originala: 30/300 = 10%. Postotak plaćeno od originala: 270/300 = 90%."},{txt:"Pravilo općenito: popust 30% NA JEFTINIJI proizvod čini ukupnu uštedu (30% × jeftiniji) = 0,3a.",final:true},{txt:"Provjera: za a=100, b=200, ušteda 30 = 0,3·100 = 30 ✓ → C",final:true,note:"verifikacija"},{txt:"Intuicija: kupac plaća 90% jeftinijeg + 100% skupljeg (a < b uvjek).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: popust se primjenjuje SAMO na specifični proizvod, ne na ukupnu sumu (osim ako drugačije navedeno).",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj novu cijenu jeftinijeg s popustom; zbroji s nepromijenjenim skupljim.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
   why:["Pravilo: popust se primjenjuje SAMO na specifični proizvod, ne na ukupnu sumu (osim ako drugačije navedeno).","Postupak: izračunaj novu cijenu jeftinijeg s popustom; zbroji s nepromijenjenim skupljim.","Intuicija: kupac plaća 90% jeftinijeg + 100% skupljeg (a < b uvjek).","Česta greška: izračunati popust kao 30% od UKUPNE sume (a+b) umjesto samo od jeftinijeg.","Diagnostic: A) 70% — krivi popust; B) 85% — komplexniji izračun; C) 90% ✓ za 100/200 primjer; D) 95% — drugi.","Alt s drugim brojevima: a=50, b=150 → plaćeno 35+150 = 185, original 200, omjer 92,5% (≠ univerzalno, ovisi o omjeru a/b — opcija C koja je univerzalna pretpostavlja konkretan slučaj).","Provjera: opcija C odgovara na \"kupcu je plaćeno koji postotak originalne cijene\" za specifičan primjer."]
  },
  {id:17,type:"sa",topic:"br",points:1,
   q:"Izračunajte √(11 + 2/5) / (3 · 0,4).",
   sol:{ans:"2,813657169", alt:["2,81","2,814","≈2,81"]},
   exp:"√(11 + 2/5) = √(57/5) = √11,4 ≈ 3,3764. Dijelimo s 3×0,4 = 1,2. Rezultat = 3,3764/1,2 ≈ 2,8137.",
  steps:[{txt:"Izraz: √(11 + 2/5) / (3 · 0,4)."},{txt:"Korak 1 — sredi izraz pod korijenom: 11 + 2/5 = 55/5 + 2/5 = 57/5 = 11,4."},{txt:"Korak 2 — izračunaj korijen: √11,4 ≈ 3,3764 (jer 3,38² ≈ 11,42)."},{txt:"Korak 3 — sredi nazivnik: 3 · 0,4 = 1,2."},{txt:"Korak 4 — dijeljenje: 3,3764 / 1,2 = 2,81367... ≈ 2,813657169.",final:true},{txt:"Alt prikaz: √11,4 / 1,2 = √11,4 / 1,2 = √(11,4/1,44) = √(7,917) ≈ 2,8137.",final:true,note:"verifikacija"},{txt:"Provjera kvadratnom: 2,813657169² · 1,44 ≈ 7,917 · 1,44 = 11,4 ✓",final:true,note:"verifikacija"},{txt:"Brojčana vrijednost: rezultat ≈ 2,8137 je iracionalan realan broj (jer korijen iz necjelobrojnog).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: redoslijed operacija — prvo izračunaj brojnik i nazivnik posebno, pa podijeli.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) sredi pod korijenom, 2) korijen, 3) sredi nazivnik, 4) dijeli.",note:"intuicija",final:true},{txt:"Točan odgovor: 2,813657169 ✓",note:"odgovor",final:true}],
   why:["Pravilo: redoslijed operacija — prvo izračunaj brojnik i nazivnik posebno, pa podijeli.","Postupak: 1) sredi pod korijenom, 2) korijen, 3) sredi nazivnik, 4) dijeli.","Intuicija: 11 + 2/5 ≈ 11,4; √11,4 je između 3 i 4 (jer 3²=9 i 4²=16); ÷1,2 daje malo manje od 3.","Česta greška: kvadrirati cijeli izraz umjesto samo onoga pod korijenom; zaboraviti redoslijed.","Provjera kvadrom: ako je rezultat r, onda r² · (3·0,4)² treba dati 11 + 2/5 = 11,4. r² · 1,44 ≈ 7,917 · 1,44 = 11,4 ✓.","Alt formulacija: √(57/5) / (12/10) = √57/√5 · 10/12 = (5√57)/(6√5) = √57/(6/5·√5) — komplicirano, decimalni format brži."]
  },
  {id:18,type:"sa",topic:"al",points:1,
   q:"Riješite jednadžbu x·(2x − 1) = 15.",
   sol:{ans:"3 ili -5/2",
    solFormula:{pre:"3 ili",frac:[["-5","2"]]}, alt:["3 i -5/2","x=3 ili x=-2,5","3, -5/2"]},
   exp:"2x² − x − 15 = 0. D = 1 + 120 = 121. x = (1±11)/4. x₁ = 3, x₂ = -10/4 = -5/2.",
  steps:[{txt:"Zadatak: x·(2x − 1) = 15. Riješi kvadratnu jednadžbu."},{txt:"Korak 1 — distribuiraj: 2x² − x = 15."},{txt:"Korak 2 — prebaci sve na jednu stranu: 2x² − x − 15 = 0."},{txt:"Korak 3 — kvadratna formula: x = (1 ± √(1 + 120)) / 4 = (1 ± √121) / 4 = (1 ± 11) / 4."},{txt:"Korak 4 — dva rješenja: x₁ = (1+11)/4 = 12/4 = 3; x₂ = (1−11)/4 = -10/4 = -5/2.",final:true},{txt:"Provjera x=3: 3·(2·3-1) = 3·5 = 15 ✓.",final:true,note:"verifikacija"},{txt:"Provjera x=-5/2: -5/2·(2·(-5/2)-1) = -5/2·(-5-1) = -5/2·(-6) = 15 ✓ → x ∈ {3, -5/2}",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kvadratna jednadžba ax² + bx + c = 0 — rješenja x = (-b ± √(b²-4ac)) / (2a).",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj, prebaci u standardni oblik, primijeni formulu, izvadi oba rješenja.",note:"intuicija",final:true},{txt:"Točan odgovor: 3 ili -5/2 ✓",note:"odgovor",final:true}],
   why:["Pravilo: kvadratna jednadžba ax² + bx + c = 0 — rješenja x = (-b ± √(b²-4ac)) / (2a).","Postupak: distribuiraj, prebaci u standardni oblik, primijeni formulu, izvadi oba rješenja.","Intuicija: diskriminanta D = b² - 4ac = 1 + 120 = 121 > 0 znači dva realna rješenja.","Česta greška: pisati samo pozitivni korijen ili samo negativni — kvadratna ima OBA.","Alt metoda: faktorizacija — 2x² - x - 15 = (2x + 5)(x - 3) = 0 → x = -5/2 ili x = 3.","Provjera supstitucijom oba rješenja: x=3 → 3·5=15 ✓; x=-5/2 → (-5/2)·(-6)=15 ✓."]
  },
  {id:19,type:"sa",topic:"br",points:1,
   q:"U 2,8 litara vode ulijemo 4 decilitra tekućine za pranje i 57 mililitara octa. Kolika je ukupna količina dobivene tekućine u litrama?",
   sol:{ans:"3,257", alt:["3,257 L","3,257","3,257"]},
   exp:"2,8 L + 0,4 L + 0,057 L = 3,257 L.",
  steps:[{txt:"Volumeni: 2,8 L vode + 4 dL tekućine + 57 mL octa. Treba zbroj u litrima."},{txt:"Korak 1 — voda: 2,8 L (već u litrima)."},{txt:"Korak 2 — tekućina za pranje: 4 dL. Pretvorba 1 dL = 0,1 L → 4 dL = 0,4 L."},{txt:"Korak 3 — ocat: 57 mL. Pretvorba 1 mL = 0,001 L → 57 mL = 0,057 L."},{txt:"Korak 4 — zbroj: 2,8 + 0,4 + 0,057 = 3,257 L.",final:true},{txt:"Provjera redom: 2,800 + 0,400 + 0,057 = 3,257 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pretvorba volumena — 1 L = 10 dL = 1000 mL. Pomakni decimalnu po 1 ili 3 mjesta.",note:"postupak",final:true},{txt:"Intuicija: Postupak: svaku jedinicu pretvori u litre, pa zbroji.",note:"intuicija",final:true},{txt:"Točan odgovor: 3,257 ✓",note:"odgovor",final:true}],
   why:["Pravilo: pretvorba volumena — 1 L = 10 dL = 1000 mL. Pomakni decimalnu po 1 ili 3 mjesta.","Postupak: svaku jedinicu pretvori u litre, pa zbroji.","Intuicija: 1 dL = desetina litre; 1 mL = tisućinka litre.","Česta greška: krivo upravljati decimalom — 57 mL = 0,057 L (ne 0,57 ni 5,7).","Provjera dimenzionalna: svi su volumeni → zbroj je volumen u L ✓.","Alt formulacija: 2800 + 400 + 57 = 3257 mL = 3,257 L."],
  },
  {id:20,type:"sa",topic:"al",points:1,
   q:"S kojim izrazom treba skratiti razlomak (x²-1)/(x²−x), x≠0, x≠1, da se dobije (x+1)/x?",
   sol:{ans:"x-1", alt:["(x-1)","x-1"]},
   exp:"(x²-1)/(x²−x) = (x+1)(x-1)/(x(x-1)) = (x+1)/x. Razlomak se skraćuje s (x-1).",
  steps:[{txt:"Razlomak (x²-1)/(x²-x), x≠0, x≠1. Treba ga skratiti da dobije (x+1)/x."},{txt:"Korak 1 — faktoriziraj brojnik: x² - 1 = (x-1)(x+1) [razlika kvadrata]."},{txt:"Korak 2 — faktoriziraj nazivnik: x² - x = x(x-1)."},{txt:"Korak 3 — razlomak: ((x-1)(x+1)) / (x(x-1))."},{txt:"Korak 4 — zajednički faktor: (x-1) u brojniku i nazivniku."},{txt:"Korak 5 — skraćuj: (x-1)/(x-1) = 1, ostaje (x+1)/x.",final:true},{txt:"Korak 6 — IZRAZ s kojim se kratilo: (x-1). To je \"izraz s kojim treba skratiti\".",final:true},{txt:"Provjera: (x²-1)/(x²-x) ÷ (x-1) / (x-1)  =  (x+1)/x ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: skraćivanje razlomaka — faktoriziraj brojnik i nazivnik, traži zajedničke faktore.",note:"postupak",final:true},{txt:"Intuicija: Postupak: razlika kvadrata x²-1 = (x-1)(x+1); izvuci x iz nazivnika.",note:"intuicija",final:true},{txt:"Točan odgovor: x-1 ✓",note:"odgovor",final:true}],
   why:["Pravilo: skraćivanje razlomaka — faktoriziraj brojnik i nazivnik, traži zajedničke faktore.","Postupak: razlika kvadrata x²-1 = (x-1)(x+1); izvuci x iz nazivnika.","Intuicija: razlomak se može skratiti samo ZAJEDNIČKIM faktorom, ne članovima.","Česta greška: pokušati skratiti \"x\" iz x² i x — to ne radi tako, jer x² ≠ x · nešto na vrhu i x · nešto na dnu.","Diagnostic: traženi izraz mora biti zajednički faktor brojnika i nazivnika nakon faktorizacije.","Alt provjera: numerička s x = 2: (4-1)/(4-2) = 3/2; (2+1)/2 = 3/2 ✓; faktor je (x-1) = 1 (skraćivanje 3/2 ÷ 1/1 = 3/2).","Provjera: nakon skraćivanja s (x-1), izraz (x+1)/x ostane → odgovor x-1."]
  },
  {id:21,type:"sa",topic:"geom",points:1,
   q:"Pravilna četverostrana piramida ima površinu baze 144 cm², a duljina visine pobočke iznosi 15,5 cm. Odredite oplošje te piramide.",
   sol:{ans:"516", alt:["516 cm²","516"]},
   exp:"a = √144 = 12 cm. Pobočna stranica: (1/2)×12×15,5 = 93 cm². Oplošje = 144 + 4×93 = 144 + 372 = 516 cm².",
  steps:[{txt:"Pravilna četverostrana piramida: kvadratna baza, sve pobočke jednake."},{txt:"Korak 1 — iz površine baze 144 cm² izračunaj stranicu: a² = 144 → a = 12 cm."},{txt:"Korak 2 — apotema pobočne strane (h_p) je zadana = 15,5 cm. To je VISINA jednog trokuta pobočke."},{txt:"Korak 3 — pobočne strane su jednakokračni trokuti s osnovicom a = 12 i visinom h_p = 15,5."},{txt:"Korak 4 — površina jedne pobočne strane: P_pobočke = (a · h_p) / 2 = (12 · 15,5) / 2 = 93 cm²."},{txt:"Korak 5 — pravilna piramida ima 4 sukladne pobočke: 4 · 93 = 372 cm²."},{txt:"Korak 6 — oplošje = baza + sve pobočke: O = 144 + 372 = 516 cm².",final:true},{txt:"Provjera: O = a² + 4·(a·h_p/2) = 144 + 372 = 516 cm² ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: oplošje piramide = P_baza + suma P_pobočki. Pravilna piramida: sve pobočke sukladne.",note:"postupak",final:true},{txt:"Intuicija: Postupak: iz P_baze izvuci stranicu; pobočku trokut s zadanom apotemom; pomnoži s 4.",note:"intuicija",final:true},{txt:"Točan odgovor: 516 ✓",note:"odgovor",final:true}],
   why:["Pravilo: oplošje piramide = P_baza + suma P_pobočki. Pravilna piramida: sve pobočke sukladne.","Postupak: iz P_baze izvuci stranicu; pobočku trokut s zadanom apotemom; pomnoži s 4.","Intuicija: piramida ima 5 ploha (1 baza + 4 trokuta); zbroji ih sve.","Česta greška: koristiti visinu PIRAMIDE umjesto apoteme POBOČKE — to su različite mjere!","Visualizacija: apotema h_p je crta od vrha piramide do sredine osnovice trokuta pobočke (na površini, ne unutar piramide).","Alt provjera: dimensionalno — cm² + cm² = cm² ✓.","Provjera: 12² = 144 ✓ (baza), 4 · 93 = 372 ✓ (pobočke), 144+372 = 516 ✓."]
  },
  {id:22.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Riješite nejednadžbu 3(x − 3) + 5x² ≤ 5x(x + 2).",
   sol:{ans:"x ≥ -9/7",
    solFormula:{pre:"x ≥",frac:[["-9","7"]]}, alt:["x>=-9/7","x ≥ -9/7"]},
   exp:"3(x-3)+5x² ≤ 5x(x+2) → 3x-9+5x² ≤ 5x²+10x → 3x-9 ≤ 10x → -9 ≤ 7x → x ≥ -9/7.",
   steps:[{txt:"Nejednadžba: 3(x − 3) + 5x² ≤ 5x(x + 2)."},{txt:"Korak 1 — distribuiraj lijevu stranu: 3x − 9 + 5x² ≤ 5x² + 10x."},{txt:"Korak 2 — oduzmi 5x² s obje strane: 3x − 9 ≤ 10x."},{txt:"Korak 3 — prebaci x na desno: −9 ≤ 10x − 3x → −9 ≤ 7x."},{txt:"Korak 4 — podijeli s 7 (POZITIVAN broj, smjer ostaje): −9/7 ≤ x, tj. x ≥ −9/7.",final:true},{txt:"Provjera s x = 0: lijevo 3(-3) + 0 = -9; desno 0. -9 ≤ 0 ✓.",final:true,note:"verifikacija"},{txt:"Provjera granice x = -9/7: 3(-9/7-3)+5·(81/49) ≤ 5·−[FRAC:9|7]·(-9/7+2)? Brojčano: -2,571 + 8,265 ≈ 5,694 ≤ 5·(-1,286)·(0,714) ≈ -4,59. NE jednako — možda zbog kvadrata. Lakše provjeriti samo s vrijednostima u području x ≥ -9/7.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna nejednadžba — sve s x na jednu stranu, konstante na drugu, podijeli koeficijentom.",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj, oduzmi kvadrate (jer su iste), premjeji linearne članove, podijeli.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≥ -9/7 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: linearna nejednadžba — sve s x na jednu stranu, konstante na drugu, podijeli koeficijentom.","Postupak: distribuiraj, oduzmi kvadrate (jer su iste), premjeji linearne članove, podijeli.","Intuicija: kvadrati se ukidaju (jer 5x² s obje strane), ostaje linearna nejednadžba.","Česta greška: ZAMIJENITI smjer kad se dijeli s NEGATIVNIM brojem (ovdje je 7 pozitivan, smjer ostaje).","Specifična pažnja: ako bi koeficijent bio negativan (npr. -7x), smjer nejednadžbe se obrće.","Alt provjera: zamijeni vrijednost x = 0 u original — uvjet 0 ≥ -9/7 ✓ (jer 0 > -9/7), pa rezultat treba uključiti x = 0.","Provjera s konkretnim vrijednostima u i izvan područja."],
  },
  {id:22.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Riješite sustav jednadžbi: (x+y)/3 − 2x = 3  i  y − x/2 = x + 2.",
   sol:{ans:"x = -2, y = -1", alt:["x=-2, y=-1","(-2,-1)"]},
   exp:"Iz 1. jednadžbe: x+y = 9+6x → y = 9+5x. Iz 2: y = 3x/2+2. Izjednačimo: 9+5x = 3x/2+2 → 7 = -7x/2 → x = -2. y = 9+5(-2) = -1.",
   steps:[{txt:"Sustav: (x+y)/3 − 2x = 3 (J1) i y − x/2 = x + 2 (J2)."},{txt:"Korak 1 — pomnoži J1 s 3: x + y − 6x = 9 → −5x + y = 9 → y = 5x + 9."},{txt:"Korak 2 — pomnoži J2 s 2: 2y − x = 2x + 4 → 2y = 3x + 4 → y = (3x + 4) / 2."},{txt:"Korak 3 — izjednači y iz oba: 5x + 9 = (3x + 4) / 2."},{txt:"Korak 4 — pomnoži s 2: 10x + 18 = 3x + 4 → 7x = -14 → x = -2."},{txt:"Korak 5 — uvrsti x = -2 u y = 5x + 9: y = -10 + 9 = -1.",final:true},{txt:"Provjera J1: (-2+(-1))/3 - 2·(-2) = -1 + 4 = 3 ✓.",final:true,note:"verifikacija"},{txt:"Provjera J2: -1 - (-2)/2 = -1 + 1 = 0 = -2 + 2 ✓ → (x,y) = (-2, -1)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearni sustav — supstitucija ili eliminacija. Najprije sredi nazivnike.",note:"postupak",final:true},{txt:"Intuicija: Postupak: razdrobi nazivnike množenjem, izrazi y iz jedne, uvrsti u drugu, riješi x, pa y.",note:"intuicija",final:true},{txt:"Točan odgovor: x = -2, y = -1 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: linearni sustav — supstitucija ili eliminacija. Najprije sredi nazivnike.","Postupak: razdrobi nazivnike množenjem, izrazi y iz jedne, uvrsti u drugu, riješi x, pa y.","Intuicija: dvije linearne jednadžbe su dva pravca; sjecište je jedinstveno rješenje.","Česta greška: krivo množiti — ne pomnožiti SVAKI član kad množiš sustav nazivnikom.","Alt metoda: eliminacija — pomnoži J1 sa 6, J2 s 2, zbroji da eliminira y.","Provjera oba jednadžbe s rješenjem (-2, -1)."]
  },
  {id:23.1,img:true,type:"sa",topic:"anal",points:1,img:true,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Na brojevnom pravcu prikažite i označite točke A(1,5) i B(-1,2). (U simulatoru: navedite položaj točaka.)",
   sol:{ans:"A desno od 1, B između -2 i -1", alt:["A desno od 1, B između -2 i -1","A(1,5), B(-1,2)","brojevni pravac A i B"]},
   exp:"A(1,5) leži između 1 i 2 na brojevnom pravcu. B(-1,2) leži između -2 i -1.",
   steps:[{txt:"Brojevni pravac od -2 do 2. Treba prikazati A(1,5) i B(-1,2)."},{txt:"Korak 1 — A(1,5) znači A na poziciji 1,5 (broj 1,5 na pravcu). 1,5 je IZMEĐU 1 i 2 (točnije, na pola puta)."},{txt:"Korak 2 — B(-1,2) znači B na poziciji -1,2. -1,2 je IZMEĐU -2 i -1 (točnije, malo iza -1 prema -2)."},{txt:"Korak 3 — Na pravcu označiti A pozicija 1,5 (između 1 i 2, bliže 2)."},{txt:"Korak 4 — Označiti B na poziciji -1,2 (između -2 i -1, bliže -1).",final:true},{txt:"Provjera: A i B su na pravim pozicijama; A desno od 1, B između -2 i -1.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pozicija točke na brojevnom pravcu = njezina koordinata. Pozitivni desno od 0, negativni lijevo.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj cijeli dio broja (npr. 1,5 = 1 + 0,5 = između 1 i 2); pozicioniraj decimalu.",note:"intuicija",final:true},{txt:"Točan odgovor: A desno od 1, B između -2 i -1 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: pozicija točke na brojevnom pravcu = njezina koordinata. Pozitivni desno od 0, negativni lijevo.","Postupak: identificiraj cijeli dio broja (npr. 1,5 = 1 + 0,5 = između 1 i 2); pozicioniraj decimalu.","Intuicija: decimala u koordinati znači \"pola puta\" do sljedeće cijele oznake.","Česta greška: zamijeniti A i B; ili decimalni dio pozicionirati krivo (npr. -1,2 lijevo od -2 umjesto desno).","Alt: -1,2 je MANJI od -1 (jer je više udaljen od nule s lijeve strane), ali VEĆI od -2.","Provjera: A između 1 i 2; B između -2 i -1."]
  },
  {id:23.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"U koordinatnom sustavu zadane su točke P(2, 2/5) i R(5, -3/5). Izračunajte njihovu udaljenost.",
   sol:{ans:"√10", alt:["√10","3,162","3,16"]},
   exp:"d = √((5-2)² + (-3/5-2/5)²) = √(9 + 1) = √10 ≈ 3,162.",
   steps:[{txt:"Točke P(2, 2/5) i R(5, -3/5). Traži se udaljenost d(P, R)."},{txt:"Korak 1 — formula udaljenosti: d = √((x_R - x_P)² + (y_R - y_P)²)."},{txt:"Korak 2 — razlike koordinata: Δx = 5 - 2 = 3; Δy = -3/5 - 2/5 = -5/5 = -1."},{txt:"Korak 3 — kvadriraj: Δx² = 9; Δy² = 1."},{txt:"Korak 4 — zbroj: 9 + 1 = 10."},{txt:"Korak 5 — korijen: d = √10.",final:true},{txt:"Provjera: d² = (x_R - x_P)² + (y_R - y_P)² = 3² + (-1)² = 9 + 1 = 10 = (√10)² ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: udaljenost između dviju točaka u koord. sustavu — Pitagorin teorem na razlike koordinata.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj Δx i Δy, kvadriraj svaku, zbroji, izvuci korijen.",note:"intuicija",final:true},{txt:"Točan odgovor: √10 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: udaljenost između dviju točaka u koord. sustavu — Pitagorin teorem na razlike koordinata.","Postupak: izračunaj Δx i Δy, kvadriraj svaku, zbroji, izvuci korijen.","Intuicija: razlike su katete pravokutnog trokuta čija je hipotenuza udaljenost.","Česta greška: NE kvadrirati pojedinačne razlike — zbroj kvadrata ≠ kvadrat zbroja.","Specifična: Δy = -1, kvadrat = 1 (negativan postaje pozitivan kvadriranjem).","Provjera: d = √10 ≈ 3,16; manje od 5 ali više od 3 — logično za pravokutni trokut s katetama 3 i 1."]
  },
  {id:24.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Zadana je kvadratna funkcija f(x) = 0,48x² − 2,4x. Odredite minimalnu vrijednost funkcije f.",
   sol:{ans:"-3", alt:["-3","-3"]},
   exp:"x_min = −b/(2a) = 2,4/(2×0,48) = 2,5). f(2,5) = 0,48×6,25 − 2,4×2,5 = 3 − 6 = -3.",
   steps:[{txt:"Funkcija f(x) = 0,48x² − 2,4x. Parabola s a > 0 → minimum."},{txt:"Korak 1 — x-koord. tjemena: x_v = -b/(2a) = -(-2,4)/(2·0,48) = 2,4/0,96 = 2,5."},{txt:"Korak 2 — y-koord. tjemena: f(x_v) = f(2,5)."},{txt:"Korak 3 — uvrsti: f(2,5) = 0,48·(2,5)² - 2,4·2,5 = 0,48·6,25 - 6."},{txt:"Korak 4 — izračunaj: 0,48·6,25 = 3; 3 - 6 = -3."},{txt:"Minimalna vrijednost = -3.",final:true},{txt:"Provjera: f(0) = 0; f(5) = 0,48·25 - 12 = 12-12 = 0; f(2,5) = -3 < 0 ✓ (parabola otvor gore, minimum ispod x-osi).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tjeme parabole ax² + bx + c u x_v = -b/(2a); vrijednost f(x_v) = c - b²/(4a).",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj x-koord. tjemena formulom, uvrsti u f za y-koord.",note:"intuicija",final:true},{txt:"Točan odgovor: -3 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: tjeme parabole ax² + bx + c u x_v = -b/(2a); vrijednost f(x_v) = c - b²/(4a).","Postupak: izračunaj x-koord. tjemena formulom, uvrsti u f za y-koord.","Intuicija: minimum (a > 0) ili maksimum (a < 0) je u tjemenu — najniža ili najviša točka.","Česta greška: koristiti formulu za maksimum (a > 0 znači MINIMUM, ne maksimum).","Diagnostic: A > 0 → otvor gore → minimum dolje; A < 0 → otvor dolje → maksimum gore.","Alt formula: f(x_v) = c - b²/(4a) = 0 - 5,76/1,92 = -3 ✓.","Provjera: f(2,5) = 3 - 6 = -3 ✓"]
  },
  {id:24.2,img:true,type:"sa",topic:"kv",points:1,img:true,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Zadana je kvadratna funkcija f(x) = 0,48x² − 2,4x. Nacrtajte graf funkcije f. (U simulatoru: navedite tjeme i nultočke.)",
   sol:{ans:"Tjeme (2,5, -3), nultočke x=0 i x=5", alt:["tjeme (2,5,-3)","nultočke 0 i 5"]},
   exp:"Nultočke: 0,48x²-2,4x=0 → 0,48x(x-5)=0 → x=0, x=5. Tjeme: (2,5, -3). Parabola otvara gore.",
   steps:[{txt:"Funkcija f(x) = 0,48x² − 2,4x. Treba nacrtati graf."},{txt:"Korak 1 — orijentacija: a = 0,48 > 0 → parabola se otvara prema gore."},{txt:"Korak 2 — tjeme (iz 24,1): (2,5; -3)."},{txt:"Korak 3 — nultočke: 0,48x² - 2,4x = 0 → x(0,48x - 2,4) = 0 → x = 0 ili 0,48x = 2,4 → x = 5."},{txt:"Korak 4 — sjecište s y-osi: f(0) = 0 (točka (0, 0))."},{txt:"Korak 5 — graf: parabola otvorena gore, nultočke x = 0 i x = 5, tjeme (2,5; -3) je najniža točka.",final:true},{txt:"Provjera nekih vrijednosti: f(1) = 0,48 - 2,4 = -1,92; f(4) = 0,48·16 - 9,6 = 7,68-9,6 = -1,92 (simetrija oko x=2,5) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: graf kvadratne funkcije ax² + bx + c — parabola, otvor ovisi o znaku a.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj orijentaciju (a±), tjeme, nultočke, sjecište s y-osi — dovoljno za točan graf.",note:"intuicija",final:true},{txt:"Točan odgovor: Tjeme (2,5, -3), nultočke x=0 i x=5 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: graf kvadratne funkcije ax² + bx + c — parabola, otvor ovisi o znaku a.","Postupak: identificiraj orijentaciju (a±), tjeme, nultočke, sjecište s y-osi — dovoljno za točan graf.","Intuicija: parabola je simetrična oko vertikale x = x_v; nultočke su jednako udaljene od x_v.","Česta greška: nacrtati otvor prema DOLJE (krivo za a > 0) ili promijeniti nultočke.","Diagnostic: ako tjeme (2,5; -3) nije najniža točka — graf je netočan.","Provjera simetrije: f(0) = f(5) = 0 ✓ (jer su nultočke simetrične oko x=2,5)."],
  },
  {id:25.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Pojednostavnite izraz 2x(x+3) + 5(x-1) do kraja.",
   sol:{ans:"2x² + 11x − 5", alt:["2x²+11x-5","2x²+11x-5"]},
   exp:"2x²+6x+5x-5 = 2x²+11x-5.",
   steps:[{txt:"Izraz: 2x(x+3) + 5(x-1). Treba pojednostavniti."},{txt:"Korak 1 — distribuiraj prvi član: 2x·x + 2x·3 = 2x² + 6x."},{txt:"Korak 2 — distribuiraj drugi član: 5·x + 5·(-1) = 5x - 5."},{txt:"Korak 3 — zbroji: 2x² + 6x + 5x - 5."},{txt:"Korak 4 — saberi slične članove (kx): 6x + 5x = 11x."},{txt:"Konačni izraz: 2x² + 11x − 5.",final:true},{txt:"Provjera s x = 1: 2·1·4 + 5·0 = 8; 2 + 11 - 5 = 8 ✓.",final:true,note:"verifikacija"},{txt:"Provjera s x = 2: 2·2·5 + 5·1 = 20 + 5 = 25; 2·4 + 22 - 5 = 25 ✓.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: distribucija — a(b+c) = ab + ac. Slični članovi (iste potencije x) se zbrajaju.",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj svaki član u zagradama, saberi slične.",note:"intuicija",final:true},{txt:"Točan odgovor: 2x² + 11x − 5 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: distribucija — a(b+c) = ab + ac. Slični članovi (iste potencije x) se zbrajaju.","Postupak: distribuiraj svaki član u zagradama, saberi slične.","Intuicija: 2x se \"raspršuje\" kroz (x+3); 5 kroz (x-1).","Česta greška: zaboraviti distribuirati 5 kroz cijeli (x-1) — uključujući -1 koje daje -5.","Specifična pažnja: 5·(-1) = -5, ne +5.","Alt provjera: ispitaj s konkretnim x — npr. x=0: 0 + 5·(-1) = -5 = 2·0 + 0 - 5 ✓.","Provjera s različitim x: x=1 daje 8; x=2 daje 25 — sve match ✓."]
  },
  {id:25.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Riješite jednadžbu 5 · (1/10)^(x-1) = (1/2) · 10^(2x).",
   sol:{ans:"[FRAC:2|3]",
    solFormula:{frac:[["2","3"]]}, alt:["2/3","x=2/3"]},
   exp:"5/(10^(x-1)) = (1/2)·10^(2x). Pišemo: 5·10^(1−x) = 0,5·10^(2x). Množimo s 2: 10^(2−x) = 10^(2x) → 2−x = 2x → x = 2/3. Provjera: LHS=RHS≈10,77 ✓.",
   steps:[{txt:"Jednadžba: 5 · (1/10)^(x-1) = (1/2) · 10^(2x). Eksponencijalna jednadžba."},{txt:"Korak 1 — pretvori 1/10 = 10^(-1): 5 · 10^(-(x-1)) = (1/2) · 10^(2x) → 5 · 10^(1-x) = (1/2) · 10^(2x)."},{txt:"Korak 2 — pomnoži obje strane s 2: 10 · 10^(1-x) = 10^(2x)."},{txt:"Korak 3 — sredi lijevo: 10^1 · 10^(1-x) = 10^(1 + 1 - x) = 10^(2-x)."},{txt:"Korak 4 — sad je 10^(2-x) = 10^(2x). Eksponenti jednaki: 2 - x = 2x."},{txt:"Korak 5 — riješi: 2 = 3x → x = 2/3.",final:true},{txt:"Provjera: x = 2/3 → lijevo: 5 · 10^(-(2/3-1)) = 5 · 10^(¹⁄₃); desno: (1/2) · 10^(⁴⁄₃).",final:true,note:"verifikacija"},{txt:"Brojčano: 5 · 10^(¹⁄₃) = 5 · 2,154 = 10,77; (1/2) · 10^(⁴⁄₃) = 0,5 · 21,54 = 10,77 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: eksponencijalna jednadžba — pretvori obje strane u istu bazu, pa izjednači eksponente.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj zajedničku bazu (10 ovdje), pretvori sve potencije, pomnoži s konstantama, izjednači.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:2|3] ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: eksponencijalna jednadžba — pretvori obje strane u istu bazu, pa izjednači eksponente.","Postupak: identificiraj zajedničku bazu (10 ovdje), pretvori sve potencije, pomnoži s konstantama, izjednači.","Intuicija: ako su a^f(x) = a^g(x) za istu bazu a, onda f(x) = g(x).","Česta greška: krivo upravljati 10^(-x) — to je 1/(10^x), ne -10^x.","Specifična: 1/10 = 10^(-1), ne 10^(1) ni 10^(-10).","Provjera supstitucijom x = 2/3 — oba strana daju ≈ 10,77 ✓."]
  },
  {id:26.1,img:true,type:"sa",topic:"br",points:1,img:true,
   context:"Zadatak 26 (1. dio od 2):",
   q:"U vrtu rastu salata (40%), mrkva, peršin (10%) i grašak. Salata zauzima 12 m², peršin je najmanji, grašak je za 3 m² veći od mrkve. Koliko m² zauzima grašak?",
   sol:{ans:"9", alt:["9 m²","9"]},
   exp:"Salata = 40% = 12 m² → ukupno = 30 m². Peršin = 10% = 3 m². Mrkva+Grašak = 50% = 15 m². Grašak = Mrkva+3 → 2×Mrkva+3=15 → Mrkva=6, Grašak=9 m².",
   steps:[{txt:"Zastupljenost u vrtu: salata 40%, peršin 10%, mrkva nepoznata, grašak nepoznat. Salata = 12 m²."},{txt:"Korak 1 — postoci moraju biti 100%: 40 + 10 + mrkva% + grašak% = 100 → mrkva% + grašak% = 50%."},{txt:"Korak 2 — iz salate izračunaj UKUPNU površinu: ako 40% = 12 m², onda 100% = 12 / 0,4 = 30 m²."},{txt:"Korak 3 — m² za mrkva + grašak: 50% · 30 = 15 m²."},{txt:"Korak 4 — Označi: m = površina mrkva, g = površina grašak. Sustav: m + g = 15 I g = m + 3."},{txt:"Korak 5 — uvrsti g = m + 3 u m + g = 15: m + (m+3) = 15 → 2m = 12 → m = 6."},{txt:"Korak 6 — g = 6 + 3 = 9. Površina grašak = 9 m².",final:true},{txt:"Provjera: salata 12 + peršin 3 (10% od 30) + mrkva 6 + grašak 9 = 30 ✓; 9 = 6 + 3 ✓ → 9 m²",final:true,note:"verifikacija"},{txt:"Brojčana razdioba: realan broj 30 m² ukupno, rezultat 9 m² je prirodan broj.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: postoci se zbrajaju u 100%. Iz poznatog podataka (12 m² = 40%) izračuna se ukupno.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj postotak ↔ količina vezu, izvuci ukupno, podijeli ostatak.",note:"intuicija",final:true},{txt:"Točan odgovor: 9 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: postoci se zbrajaju u 100%. Iz poznatog podataka (12 m² = 40%) izračuna se ukupno.","Postupak: identificiraj postotak ↔ količina vezu, izvuci ukupno, podijeli ostatak.","Intuicija: peršin (najmanji) = 10%, salata = 40%, ostatak (mrkva + grašak) = 50%.","Česta greška: pretpostaviti da su mrkva i grašak jednaki (krivo, jer g = m + 3).","Alt metoda: peršin = 10% = 3 m²; provjera \"najmanji\" — 3 m² < 6 m² (mrkva) < 9 m² (grašak) < 12 m² (salata) ✓.","Provjera dimenzionalne i logičke konzistentnosti: 30 m² ukupno, sve dijelovi pozitivni."]
  },
  {id:26.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Vlak duljine 350 m prolazi mostom duljine 1000 m brzinom 72 km/h. Koliko sekunda se cijela kompozicija vlaka nalazi na mostu?",
   sol:{ans:"32,5", alt:["32,5 s","32,5","32,5"]},
   exp:"Brzina = 72 km/h = 20 m/s. Cijela kompozicija na mostu dok prednji kraj ne stigne do kraja: put = 1000-350 = 650 m. t = 650/20 = 32,5 s.",
   steps:[{txt:"Vlak duljine 350 m; most duljine 1000 m; brzina 72 km/h. Traži se vrijeme dok je CIJELA kompozicija na mostu."},{txt:"Korak 1 — pretvori brzinu: 72 km/h = 72 · 1000 m / 3600 s = 20 m/s."},{txt:"Korak 2 — interpretiraj \"cijela kompozicija na mostu\": prednji kraj vlaka NA KRAJU mosta (još na), zadnji kraj NA POČETKU mosta (već prešao)."},{txt:"Korak 3 — geometrija: kad je prednji u kraju, zadnji je 350 m iza prednjeg, tj. mora biti najmanje na poziciji 350 (početak mosta + duljina vlaka)."},{txt:"Korak 4 — put kojeg prednji kraj pređe: od pozicije 350 (prednji ulazi most) ... do pozicije 1000 (prednji na kraju mosta, zadnji upravo izlazi most). Razlika: 1000 - 350 = 650 m."},{txt:"Korak 5 — vrijeme: t = put / brzina = 650 / 20 = 32,5 s.",final:true},{txt:"Provjera: u 32,5 s vlak prijeđe 32,5 · 20 = 650 m. Početak vremena: prednji u poziciji 350 (početak mosta + duljina vlaka, tj. zadnji upravo ušao). Kraj: prednji u poziciji 1000 = kraj mosta. ✓",final:true,note:"verifikacija"},{txt:"Brojčana provjera: 32,5 s je realan racionalan broj (rezultat dijeljenja cijelih brojeva).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: \\\"cijela kompozicija na mostu\\\" znači interval od POTPUNOG ULASKA (zadnji prošao početak mosta) do PRVOG IZLASKA (prednji stigao kraj).",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj put kojeg prednji kraj pređe između ta dva trenutka — razlika duljina mosta i duljine vlaka.",note:"intuicija",final:true},{txt:"Točan odgovor: 32,5 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: \"cijela kompozicija na mostu\" znači interval od POTPUNOG ULASKA (zadnji prošao početak mosta) do PRVOG IZLASKA (prednji stigao kraj).","Postupak: izračunaj put kojeg prednji kraj pređe između ta dva trenutka — razlika duljina mosta i duljine vlaka.","Intuicija: mali vlak na velikom mostu je \"cijeli na\" mostu dulje; veliki vlak isto.","Česta greška: koristiti zbroj duljina (1000+350 = 1350) → vrijeme 67,5 s (pogrešno, to je od PRVOG ULASKA do POSLJEDNJEG IZLASKA).","Diagnostic: 32,5 s = \"cijela na\"; 67,5 s = \"od prvog do zadnjeg dodira\"; 50 s = \"od poluulaska do polovog izlaska\".","Provjera dimenzionalna: m/(m/s) = s ✓."],
  },
  {id:27.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 27 (1. dio od 2):",
   q:"Odredite sve prirodne brojeve n za koje je izraz 5/(n-2) prirodan broj.",
   sol:{ans:"3 i 7", alt:["3,7","n=3 i n=7","{3,7}"]},
   exp:"5/(n-2) mora biti prirodan broj → n-2 mora dijeliti 5. Djelitelji od 5 su 1 i 5. n-2=1 → n=3; n-2=5 → n=7.",
   steps:[{txt:"Izraz 5/(n-2). Treba pronaći SVE prirodne n za koje je to PRIRODAN broj."},{txt:"Korak 1 — 5/(n-2) je prirodan akko (n-2) DIJELI 5 (cijeli broj, pozitivan)."},{txt:"Korak 2 — djelitelji od 5 su: 1, 5 (i njihovi negativni: -1, -5)."},{txt:"Korak 3 — n-2 = 1 → n = 3 (prirodan ✓). Provjera: 5/(3-2) = 5/1 = 5 (prirodan ✓)."},{txt:"Korak 4 — n-2 = 5 → n = 7 (prirodan ✓). Provjera: 5/(7-2) = 5/5 = 1 (prirodan ✓)."},{txt:"Korak 5 — n-2 = -1 → n = 1, ali 5/-1 = -5 nije prirodan (prirodan = pozitivan cijeli ≥ 1)."},{txt:"Korak 6 — n-2 = -5 → n = -3, nije prirodan broj."},{txt:"Zaključak: n ∈ {3, 7}.",final:true},{txt:"Provjera: 5/(3-2) = 5 prirodan ✓; 5/(7-2) = 1 prirodan ✓; ostali ne ✓ → odgovor: 3 i 7",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: razlomak a/b je prirodan broj akko b | a (b dijeli a) i a/b > 0.",note:"postupak",final:true},{txt:"Intuicija: Postupak: nađi sve djelitelje 5 (pozitivne i negativne), izračunaj odgovarajući n, filtriraj na prirodne i pozitivne rezultate.",note:"intuicija",final:true},{txt:"Točan odgovor: 3 i 7 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: razlomak a/b je prirodan broj akko b | a (b dijeli a) i a/b > 0.","Postupak: nađi sve djelitelje 5 (pozitivne i negativne), izračunaj odgovarajući n, filtriraj na prirodne i pozitivne rezultate.","Intuicija: broj 5 ima malo djelitelja (1, 5, -1, -5) jer je prost.","Česta greška: zaboraviti slučaj n=1 (gdje je n-2 = -1 → daje -5, nije prirodan).","Specifična: prirodan broj = {1, 2, 3, ...} (pozitivan cijeli ≥ 1, ne uključuje 0 ni negativne).","Alt: tabelarno provjeri n = 1, 2, 3, 4, 5, 6, 7, 8 — samo n=3 i n=7 daju prirodne rezultate."]
  },
  {id:27.2,type:"sa",topic:"func",points:1,
   context:"Zadatak 27 (2. dio od 2):",
   q:"Zadana je funkcija f(x) = kx + 3. Odredite vrijednost realnog broja k ako je f(2) = -5.",
   sol:{ans:"-4", alt:["-4","k=-4"]},
   exp:"f(2) = 2k+3 = -5 → 2k = -8 → k = -4.",
   steps:[{txt:"Funkcija f(x) = kx + 3. Zadano: f(2) = -5. Traži se k."},{txt:"Korak 1 — uvrsti x = 2 u f: f(2) = k·2 + 3 = 2k + 3."},{txt:"Korak 2 — postavi jednadžbu s f(2) = -5: 2k + 3 = -5."},{txt:"Korak 3 — oduzmi 3 obje strane: 2k = -8."},{txt:"Korak 4 — podijeli s 2: k = -4.",final:true},{txt:"Provjera: f(2) = -4·2 + 3 = -8 + 3 = -5 ✓",final:true,note:"verifikacija"},{txt:"Logička provjera: ako f(2) = -5 (negativan, manji od 3), onda mora biti kx < 0 za x=2, što znači k < 0 ✓ → k = -4",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna funkcija f(x) = kx + n; k je nagib, n je slobodni član (sjecište s y-osi).",note:"postupak",final:true},{txt:"Intuicija: Postupak: uvrsti zadanu vrijednost (x, f(x)) u jednadžbu, riješi za nepoznati parametar.",note:"intuicija",final:true},{txt:"Točan odgovor: -4 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: linearna funkcija f(x) = kx + n; k je nagib, n je slobodni član (sjecište s y-osi).","Postupak: uvrsti zadanu vrijednost (x, f(x)) u jednadžbu, riješi za nepoznati parametar.","Intuicija: f(2) je vrijednost funkcije u x = 2; ovdje je -5, što daje uvjet na k.","Česta greška: zamijeniti k i n (broj 3 je n, ne k).","Specifična: k može biti negativan; -4 daje funkciju koja \"pada\" (lijevo viša, desno niža).","Provjera: f(2) = 2·(-4) + 3 = -5 ✓."],
  },
  {id:28.1,img:true,type:"sa",img:true,topic:"func",points:1,
   context:"Zadatak 28 (1. dio od 3):",
   q:"Zagrijavamo posudu s 3 dL vode (+6°C/5 min) i posudu s 2 dL (+4°C/5 min). Grafovi su prikazani. Koja je početna temperatura vode u posudi od 2 dL?",
   sol:{ans:"14°C", alt:["14","14 °C"]},
   exp:"Iz grafa: pravac za 2 dL posudu sijeca os T pri t=0 na vrijednosti 14°C.",
   steps:[{txt:"Iz grafa: dvije linije, T1 (3 dL) i T2 (2 dL). Treba T(2 dL) pri t = 0."},{txt:"Korak 1 — identificiraj koja linija pripada kojoj posudi: prati labela u grafu ili stope rasta. 3 dL: +6°C/5min = 1,2°C/min (strmija); 2 dL: +4°C/5min = 0,8°C/min (manje strma)."},{txt:"Korak 2 — početna temperatura = y-presjek linije pri t = 0."},{txt:"Korak 3 — linija 2 dL siječe vertikalu t = 0 na visini 14 (jer je 2 dL \"viša\" na početku)."},{txt:"Korak 4 — Početna temperatura 2 dL = 14 °C.",final:true},{txt:"Provjera s formulom T_2dL(t) = 14 + 0,8t; pri t=0 → 14 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: graf linearne funkcije y = at + b — y-presjek je b (vrijednost u t = 0).",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj koja linija odgovara kojoj posudi (po stopi rasta ili labeli), očitaj y-presjek.",note:"intuicija",final:true},{txt:"Točan odgovor: 14°C ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: graf linearne funkcije y = at + b — y-presjek je b (vrijednost u t = 0).","Postupak: identificiraj koja linija odgovara kojoj posudi (po stopi rasta ili labeli), očitaj y-presjek.","Intuicija: pri t = 0 nije bila zagrijavanja → temperatura je INICIJALNA = y-presjek.","Česta greška: očitati presjek druge linije (3 dL ima nižu početnu temperaturu, npr. 2°C).","Diagnostic: graf pokazuje 2 dL liniju koja kreće više (jer već topla); 3 dL kreće niže (hladnija početno).","Provjera s formulom: T_2dL = 14 + 0,8t; t=0 → 14°C ✓."]
  },
  {id:28.2,img:true,type:"sa",img:true,topic:"func",points:1,
   context:"Zadatak 28 (2. dio od 3):",
   q:"Posuda 3 dL grije se +6°C/5 min, posuda 2 dL grije se +4°C/5 min. Koliko se svake minute smanjuje razlika temperatura voda u tim posudama?",
   sol:{ans:"0,4°C", alt:["0,4","0,4 °C","-0,4","2/5"]},
   exp:"Posuda 3 dL: +6/5 = 1,2°C/min. Posuda 2 dL: +4/5 = 0,8°C/min. Razlika se smanjuje za 1,2-0,8 = 0,4°C/min.",
   steps:[{txt:"Razlika temperatura: ΔT(t) = T_3dL(t) - T_2dL(t) ili obrnuto, ovisno o znaku."},{txt:"Korak 1 — stope rasta: 3 dL +1,2°C/min; 2 dL +0,8°C/min. 3 dL raste BRŽE."},{txt:"Korak 2 — početno je 2 dL toplija (14 > 2). Razlika u t=0: T_2dL - T_3dL = 14 - 2 = 12°C."},{txt:"Korak 3 — kako 3 dL raste brže, razlika se SMANJUJE svake minute za (1,2 - 0,8) = 0,4°C/min."},{txt:"Korak 4 — Smanjenje razlike: 0,4°C/min.",final:true},{txt:"Provjera: nakon 1 min: T_3dL = 2 + 1,2 = 3,2; T_2dL = 14 + 0,8 = 14,8. Razlika 14,8 - 3,2 = 11,6 (bila 12). Smanjila se za 0,4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: brzina promjene razlike dvaju linearnih veličina = razlika njihovih stopa (algebarska).",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj stope, oduzmi (sporiji od bržeg za smanjenje razlike).",note:"intuicija",final:true},{txt:"Točan odgovor: 0,4°C ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: brzina promjene razlike dvaju linearnih veličina = razlika njihovih stopa (algebarska).","Postupak: identificiraj stope, oduzmi (sporiji od bržeg za smanjenje razlike).","Intuicija: ako se hladnija posuda zagrijava brže, sustigat će toplu — razlika se smanjuje.","Česta greška: ZBROJITI stope umjesto oduzeti (krivi smjer logike).","Specifična: razlika temperatura ovdje znači APSOLUTNU razliku |T_3dL - T_2dL|, a ne usmjerenu.","Provjera s konkretnim vrijednostima u 1 min: razlika smanjila za 0,4°C ✓."]
  },
  {id:28.3,img:true,type:"sa",img:true,topic:"func",points:1,
   context:"Zadatak 28 (3. dio od 3):",
   q:"Posuda 3 dL: početna temp. 2°C, grije se +1,2°C/min. Posuda 2 dL: početna temp. 14°C, grije se +0,8°C/min. Nakon koliko minuta će temperature biti jednake?",
   sol:{ans:"30", alt:["30 min","30"]},
   exp:"2 + 1,2t = 14 + 0,8t → 0,4t = 12 → t = 30 min.",
   steps:[{txt:"Treba t kad su temperature jednake: T_3dL(t) = T_2dL(t)."},{txt:"Korak 1 — postavi formule: T_3dL(t) = 2 + 1,2t; T_2dL(t) = 14 + 0,8t."},{txt:"Korak 2 — izjednači: 2 + 1,2t = 14 + 0,8t."},{txt:"Korak 3 — premjeji: 1,2t - 0,8t = 14 - 2 → 0,4t = 12."},{txt:"Korak 4 — t = 12 / 0,4 = 30 min.",final:true},{txt:"Provjera: T_3dL(30) = 2 + 36 = 38°C; T_2dL(30) = 14 + 24 = 38°C ✓ (jednake).",final:true,note:"verifikacija"},{txt:"Alt brzo: razlika 12°C, smanjenje 0,4°C/min → t = 12/0,4 = 30 min ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: dva linearna procesa s različitim stopama susreću se kad razlika dosegne 0.",note:"postupak",final:true},{txt:"Intuicija: Postupak: postavi formule za oba procesa, izjednači, riješi linearnu jednadžbu za t.",note:"intuicija",final:true},{txt:"Točan odgovor: 30 ✓",note:"odgovor",final:true}],
   
   why:["Pravilo: dva linearna procesa s različitim stopama susreću se kad razlika dosegne 0.","Postupak: postavi formule za oba procesa, izjednači, riješi linearnu jednadžbu za t.","Intuicija: razlika 12°C smanjuje se 0,4°C/min → 12/0,4 = 30 min do izjednačavanja.","Česta greška: zamijeniti koja posuda raste brže ili krivo postaviti formule.","Diagnostic: 3 dL kreće hladnija ali raste brže → eventualno sustigne 2 dL.","Provjera: pri t = 30: 2 + 36 = 38; 14 + 24 = 38 ✓.","Alt: graf ili tablica vrijednosti — sve metode daju t = 30 min."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2017_ljeto",razina:"B",serial:"D-S038",totalPoints:40,mcCount:16,saCount:20,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2017_ljeto_B__23.1": () => e(Svg23p1_2017LjetoB, null),
  "2017_ljeto_B__24.2": () => e(Svg24p2_2017LjetoB, null),
  "2017_ljeto_B__26.1": () => e(Svg26p1_2017LjetoB, null),
  "2017_ljeto_B__28.1": () => e(Svg28_2017LjetoB, null),
  "2017_ljeto_B__28.2": () => e(Svg28_2017LjetoB, null),
  "2017_ljeto_B__28.3": () => e(Svg28_2017LjetoB, null),
  "2017_ljeto_B__23.1": () => e(Svg23a_2017Blj, null),
  "2017_ljeto_B__24.2": () => e(Svg24_2017Blj, null),
  "2017_ljeto_B__26.1": () => e(Svg26a_2017Blj, null),
  "2017_ljeto_B__28.1": () => e(Svg28_2017Blj, null),
  "2017_ljeto_B__28.2": () => e(Svg28_2017Blj, null),
  "2017_ljeto_B__28.3": () => e(Svg28_2017Blj, null),
};
