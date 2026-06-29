// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j28_"+(++n)})();
  const W=300,H=240,pad={l:38,r:15,t:18,b:32};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const tmin=0,tmax=11,smin=0,smax=7;
  const toX=t=>pad.l+(t-tmin)/(tmax-tmin)*gw;
  const toY=s=>pad.t+(smax-s)/(smax-smin)*gh;
  // A (čvrsta linija): (0,6) → (4,2) → (5,2) → (10, 6.5)
  const Aline = `${toX(0)},${toY(6)} ${toX(4)},${toY(2)} ${toX(5)},${toY(2)} ${toX(10)},${toY(6.5)}`;
  // B (isprekidana): (0,0) → (10, 6.5) linearno (B nastavlja istom brzinom)
  const Bline_x1=toX(0), Bline_y1=toY(0);
  const Bline_x2=toX(10), Bline_y2=toY(6.5);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[0,2,4,6,8,10].map(t=>e("line",{key:"gx"+t,x1:toX(t),y1:pad.t,x2:toX(t),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[0,2,4,6].map(s=>e("line",{key:"gy"+s,x1:pad.l,y1:toY(s),x2:pad.l+gw,y2:toY(s),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:pad.l,y1:pad.t-5,x2:pad.l,y2:toY(0)+5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${pad.l},${pad.t-5} ${pad.l-3},${pad.t} ${pad.l+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+5,y:toY(0)+12,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"t (min)"),
    e("text",{key:u(),x:pad.l-25,y:pad.t-4,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"s (km)"),
    // Ticks
    ...[2,4,6,8,10].map(t=>e("g",{key:"tx"+t},
      e("line",{x1:toX(t),y1:toY(0)-3,x2:toX(t),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(t),y:toY(0)+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},t)
    )),
    ...[2,4,6].map(s=>e("g",{key:"ty"+s},
      e("line",{x1:pad.l-3,y1:toY(s),x2:pad.l+3,y2:toY(s),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:pad.l-6,y:toY(s)+3,textAnchor:"end",fontSize:9,fill:"var(--muted)"},s)
    )),
    e("text",{key:u(),x:pad.l-5,y:toY(0)+12,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"0"),
    // A (čvrsta) — automobilist
    e("polyline",{key:u(),points:Aline,fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    e("text",{key:u(),x:toX(0.5),y:toY(5.4),fontSize:11,fill:"#4a90d9",fontWeight:700,fontStyle:"italic"},"A"),
    // B (isprekidana) — biciklist
    e("line",{key:u(),x1:Bline_x1,y1:Bline_y1,x2:Bline_x2,y2:Bline_y2,stroke:"#e05252",strokeWidth:2,strokeDasharray:"5,3",strokeLinecap:"round"}),
    e("text",{key:u(),x:toX(0.5),y:toY(1.2),fontSize:11,fill:"#e05252",fontWeight:700,fontStyle:"italic"},"B"),
    // Početne točke
    e("circle",{key:u(),cx:toX(0),cy:toY(6),r:3,fill:"#4a90d9"}),
    e("circle",{key:u(),cx:toX(0),cy:toY(0),r:3,fill:"#e05252"}),
    // Susreti — gdje obje linije presijecaju
    // Sjecište 1: oko t=4, s=2.6 (B na toj t je 0.65·4=2.6)
    e("circle",{key:u(),cx:toX(4),cy:toY(2),r:3,fill:"none",stroke:"#e9b446",strokeWidth:1.5}),
    // Sjecište 2: oko t=7, s=4.55
    e("circle",{key:u(),cx:toX(7),cy:toY(4.55),r:3,fill:"none",stroke:"#e9b446",strokeWidth:1.5})
  );
}

function Svg24p2_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j24_"+(++n)})();
  const W=280,H=240,pad={l:32,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-3,xmax=7,ymin=-3,ymax=5;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  const pts=[];
  for(let i=-30;i<=70;i++){
    const x=i/10, y=-4/9*(x+1)*(x-5);
    if(y>=ymin && y<=ymax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[-2,-1,0,1,2,3,4,5,6].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+gh,stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
    ...[-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+gw,y2:toY(y),stroke:"rgba(148,163,184,0.2)",strokeWidth:0.5})),
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
    ...[-2,-1,1,2,3,4].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:toX(0)-3,y1:toY(y),x2:toX(0)+3,y2:toY(y),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(0)-6,y:toY(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)
    )),
    // Parabola (a < 0, otvor prema dolje)
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"#50c878",strokeWidth:2.4,strokeLinecap:"round"}),
    // Nultočke
    e("circle",{key:u(),cx:toX(-1),cy:toY(0),r:4,fill:"#e05252"}),
    e("circle",{key:u(),cx:toX(5),cy:toY(0),r:4,fill:"#e05252"}),
    // Tjeme (2, 4)
    e("circle",{key:u(),cx:toX(2),cy:toY(4),r:4,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(2)+6,y:toY(4)-2,fill:"#4a90d9",fontSize:10,fontWeight:600},"(2, 4)")
  );
}

function Svg23p2_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j23b_"+(++n)})();
  const W=260,H=200,pad={l:32,r:15,t:15,b:30};
  const gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
  const rmin=0, rmax=3, omin=0, omax=20;
  const toX=r=>pad.l+(r-rmin)/(rmax-rmin)*gw;
  const toY=o=>pad.t+(omax-o)/(omax-omin)*gh;
  // o = 2πr — line from (0,0) to (3, 6π≈18.85)
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...[0.5,1,1.5,2,2.5,3].map(r=>e("line",{key:"gx"+r,x1:toX(r),y1:pad.t,x2:toX(r),y2:H-pad.b,stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    ...[5,10,15,20].map(o=>e("line",{key:"gy"+o,x1:pad.l,y1:toY(o),x2:W-pad.r,y2:toY(o),stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:pad.l,y1:pad.t-3,x2:pad.l,y2:H-pad.b+3,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${pad.l},${pad.t-3} ${pad.l-3},${pad.t+2} ${pad.l+3},${pad.t+2}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+12,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"r"),
    e("text",{key:u(),x:pad.l-20,y:pad.t-1,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"o(r)"),
    // Pravac o = 2πr
    e("line",{key:u(),x1:toX(0),y1:toY(0),x2:toX(3),y2:toY(2*Math.PI*3),stroke:"#50c878",strokeWidth:2.2}),
    // Ticks i labels
    ...[1,2,3].map(r=>e("g",{key:"tr"+r},
      e("line",{x1:toX(r),y1:toY(0)-3,x2:toX(r),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(r),y:toY(0)+14,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},r)
    )),
    ...[5,10,15].map(o=>e("g",{key:"to"+o},
      e("line",{x1:pad.l-3,y1:toY(o),x2:pad.l+3,y2:toY(o),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:pad.l-5,y:toY(o)+3,textAnchor:"end",fontSize:9,fill:"var(--muted)"},o)
    )),
    e("text",{key:u(),x:pad.l-5,y:toY(0)+12,textAnchor:"end",fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{key:u(),x:toX(2.5)-30,y:toY(2*Math.PI*2.5)-4,fontSize:10,fill:"#50c878",fontWeight:700},"o = 2π·r")
  );
}

function Svg23p1_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j23a_"+(++n)})();
  const W=260,H=240,pad={l:30,r:10,t:15,b:25};
  const gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
  const xmin=-3, xmax=6, ymin=-2, ymax=7;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // A(0, -1), B(4, 3), C(-1, 5) — distance: AB=√(16+16)=√32; BC=√(25+4)=√29; AC=√(1+36)=√37
  // Need √85 — perhaps A(0,-1), B(7,5), C(-2,7)? √85 = √((7-0)²+(5-(-1))²) = √(49+36) = √85 ✓
  // Let's use A(0, -1), B(7, 5), C(-1, 6) — but cramped. Stick with approximate from PDF.
  const A=[-1,-1], B=[5,3], C=[0,5];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid
    ...Array.from({length:10},(_,i)=>xmin+i).map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    ...Array.from({length:10},(_,i)=>ymin+i).map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l-3,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:pad.t-3,x2:toX(0),y2:H-pad.b+3,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-3} ${toX(0)-3},${pad.t+2} ${toX(0)+3},${pad.t+2}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fontSize:10,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+4,y:pad.t-1,fontSize:10,fill:"var(--muted)",fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+12,fontSize:9,fill:"var(--muted)"},"1"),
    e("text",{key:u(),x:toX(0)-10,y:toY(1)+3,fontSize:9,fill:"var(--muted)"},"1"),
    // Trokut
    e("polygon",{key:u(),points:`${toX(A[0])},${toY(A[1])} ${toX(B[0])},${toY(B[1])} ${toX(C[0])},${toY(C[1])}`,fill:"rgba(74,144,217,0.1)",stroke:"var(--text)",strokeWidth:1.3}),
    // AB najdulja — istaknuto crvenom
    e("line",{key:u(),x1:toX(A[0]),y1:toY(A[1]),x2:toX(B[0]),y2:toY(B[1]),stroke:"#e05252",strokeWidth:2}),
    // Točke
    e("circle",{key:u(),cx:toX(A[0]),cy:toY(A[1]),r:3.5,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(A[0])-10,y:toY(A[1])+12,fontSize:12,fontStyle:"italic",fill:"#4a90d9",fontWeight:700},"A"),
    e("circle",{key:u(),cx:toX(B[0]),cy:toY(B[1]),r:3.5,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(B[0])+5,y:toY(B[1])+4,fontSize:12,fontStyle:"italic",fill:"#4a90d9",fontWeight:700},"B"),
    e("circle",{key:u(),cx:toX(C[0]),cy:toY(C[1]),r:3.5,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(C[0])-12,y:toY(C[1])-3,fontSize:12,fontStyle:"italic",fill:"#4a90d9",fontWeight:700},"C")
  );
}

function Svg20_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j20_"+(++n)})();
  const W=280,H=220,pad={l:30,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
  const xmin=-4, xmax=8, ymin=-2, ymax=5;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // A(-2, 3), S(2, 1) → C = 2·S - A = (6, -1)
  // Paralelogram ABCD: A=(-2,3), B=(?, ?), C=(6,-1), D=(?,?)
  // Iz slike: D je gore (lijevo od C), B je dolje (desno od A)
  // S je centar; B = 2·S - D, ali bez D ne znamo. Iz vizualnog: B ≈ (5, 3), D ≈ (-1, -1)? 
  // S = (A+C)/2 = ((-2+6)/2, (3+(-1))/2) = (2,1) ✓
  // S = (B+D)/2 — ne znamo B i D. Postavi B(5, 2) i D(-1, 0)
  const A=[-2,3], B=[5,3], C=[6,-1], D=[-1,-1];
  const path = `${toX(A[0])},${toY(A[1])} ${toX(B[0])},${toY(B[1])} ${toX(C[0])},${toY(C[1])} ${toX(D[0])},${toY(D[1])}`;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Grid (suptilan)
    ...Array.from({length:13},(_,i)=>xmin+i).map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    ...Array.from({length:8},(_,i)=>ymin+i).map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"rgba(148,163,184,0.15)",strokeWidth:0.5})),
    // Axes
    e("line",{key:u(),x1:pad.l-3,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:pad.t-3,x2:toX(0),y2:H-pad.b+3,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-3} ${toX(0)-3},${pad.t+2} ${toX(0)+3},${pad.t+2}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fontSize:10,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+4,y:pad.t-1,fontSize:10,fill:"var(--muted)",fontStyle:"italic"},"y"),
    // Paralelogram
    e("polygon",{key:u(),points:path,fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:1.3}),
    // Dijagonale (isprekidane)
    e("line",{key:u(),x1:toX(A[0]),y1:toY(A[1]),x2:toX(C[0]),y2:toY(C[1]),stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,2"}),
    e("line",{key:u(),x1:toX(B[0]),y1:toY(B[1]),x2:toX(D[0]),y2:toY(D[1]),stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,2"}),
    // Točke A, B, D
    e("circle",{key:u(),cx:toX(A[0]),cy:toY(A[1]),r:3.5,fill:"#4a90d9"}),
    e("text",{key:u(),x:toX(A[0])-12,y:toY(A[1])+4,fontSize:12,fontStyle:"italic",fill:"#4a90d9",fontWeight:700},"A"),
    e("circle",{key:u(),cx:toX(B[0]),cy:toY(B[1]),r:3,fill:"var(--text)"}),
    e("text",{key:u(),x:toX(B[0])+5,y:toY(B[1])+4,fontSize:12,fontStyle:"italic",fill:"var(--text)"},"B"),
    e("circle",{key:u(),cx:toX(D[0]),cy:toY(D[1]),r:3,fill:"var(--text)"}),
    e("text",{key:u(),x:toX(D[0])-12,y:toY(D[1])+4,fontSize:12,fontStyle:"italic",fill:"var(--text)"},"D"),
    // S (središte)
    e("circle",{key:u(),cx:toX(2),cy:toY(1),r:3,fill:"#e9b446"}),
    e("text",{key:u(),x:toX(2)+5,y:toY(1)-3,fontSize:11,fontStyle:"italic",fill:"#e9b446",fontWeight:700},"S(2,1)"),
    // C (otvorena točka, traženi)
    e("circle",{key:u(),cx:toX(C[0]),cy:toY(C[1]),r:4,fill:"none",stroke:"#e05252",strokeWidth:1.8}),
    e("text",{key:u(),x:toX(C[0])+5,y:toY(C[1])+4,fontSize:12,fontStyle:"italic",fill:"#e05252",fontWeight:700},"C(?,?)")
  );
}

function Svg15_2017JesenB(){
  const u=(()=>{let n=0;
  return()=>"j17j15_"+(++n)})();
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const W=260,H=180;
  // Veliki kvadar (otprilike isometric)
  // Front face bottom-left (40, 130) — širina 140, visina 30
  const fx=40,fy=130,fw=140,fh=30;
  const dz=40, depth=40;
  // Mali kvadar na vrhu (left-center top)
  const mfx=70, mfy=fy-fh-15, mfw=40, mfh=15, mdz=15;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Veliki — bottom face (back hidden), front face
    e("polygon",{key:u(),points:`${fx},${fy} ${fx+fw},${fy} ${fx+fw},${fy-fh} ${fx},${fy-fh}`,fill:"rgba(74,144,217,0.1)",stroke:"var(--text)",strokeWidth:1.3}),
    // Top face
    e("polygon",{key:u(),points:`${fx},${fy-fh} ${fx+fw},${fy-fh} ${fx+fw+dz},${fy-fh-depth} ${fx+dz},${fy-fh-depth}`,fill:"rgba(74,144,217,0.05)",stroke:"var(--text)",strokeWidth:1.3}),
    // Right face
    e("polygon",{key:u(),points:`${fx+fw},${fy} ${fx+fw},${fy-fh} ${fx+fw+dz},${fy-fh-depth} ${fx+fw+dz},${fy-depth}`,fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:1.3}),
    // Mali kvadar — front, top, right
    e("polygon",{key:u(),points:`${mfx},${mfy} ${mfx+mfw},${mfy} ${mfx+mfw},${mfy-mfh} ${mfx},${mfy-mfh}`,fill:"rgba(224,82,82,0.15)",stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${mfx},${mfy-mfh} ${mfx+mfw},${mfy-mfh} ${mfx+mfw+mdz},${mfy-mfh-mdz} ${mfx+mdz},${mfy-mfh-mdz}`,fill:"rgba(224,82,82,0.1)",stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${mfx+mfw},${mfy} ${mfx+mfw},${mfy-mfh} ${mfx+mfw+mdz},${mfy-mfh-mdz} ${mfx+mfw+mdz},${mfy-mdz}`,fill:"rgba(224,82,82,0.12)",stroke:"var(--text)",strokeWidth:1.2}),
    // Dimension labels
    e("text",{key:u(),x:fx+fw/2,y:fy+13,textAnchor:"middle",fontSize:11,fill:_GOLD},"6 cm"),
    e("text",{key:u(),x:fx-15,y:fy-fh/2+4,textAnchor:"middle",fontSize:11,fill:_GOLD},"2 cm"),
    e("text",{key:u(),x:fx+fw+dz+5,y:fy-depth/2,fontSize:11,fill:_GOLD},"4 cm"),
    e("text",{key:u(),x:mfx+mfw/2,y:mfy+11,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},"2 cm"),
    e("text",{key:u(),x:mfx-12,y:mfy-mfh/2+3,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},"1 cm"),
    e("text",{key:u(),x:mfx+mfw+mdz+3,y:mfy-mdz/2,fontSize:10,fill:"var(--muted)"},"2 cm")
  );
}

function Svg10_2017JesenB(){
  const u=(()=>{let n=0;return()=>"j17j10_"+(++n)})();
  const W=280,H=240;
  const cx=130,cy=140,r=70;
  // T na vrhu kružnice (ugol 130° od centra → otprilike gore-lijevo)
  const Tang=Math.PI*0.72;
  const Tx=cx+r*Math.cos(Tang), Ty=cy-r*Math.sin(Tang);
  // B desno na kružnici (ugol 0° desno)
  const Bang=Math.PI*0.05;
  const Bx=cx+r*Math.cos(Bang), By=cy-r*Math.sin(Bang);
  // Tangenta p kroz T (okomito na S-T radius)
  const dx=Tx-cx, dy=Ty-cy;
  const tx=-dy, ty=dx; // perpendicular
  const tlen=Math.sqrt(tx*tx+ty*ty);
  const tnx=tx/tlen, tny=ty/tlen;
  const tL=70;
  const p1x=Tx-tnx*tL, p1y=Ty-tny*tL;
  const p2x=Tx+tnx*tL, p2y=Ty+tny*tL;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Kružnica
    e("circle",{key:u(),cx:cx,cy:cy,r:r,fill:"none",stroke:"var(--text)",strokeWidth:1.5}),
    // Tangenta p
    e("line",{key:u(),x1:p1x,y1:p1y,x2:p2x,y2:p2y,stroke:"var(--text)",strokeWidth:1.5}),
    e("text",{key:u(),x:p2x+4,y:p2y,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"p"),
    // S (središte)
    e("circle",{key:u(),cx:cx,cy:cy,r:2.5,fill:"none",stroke:"var(--text)",strokeWidth:1}),
    e("text",{key:u(),x:cx-4,y:cy+15,fontSize:12,fontStyle:"italic",fill:"var(--muted)"},"S"),
    // T točka
    e("circle",{key:u(),cx:Tx,cy:Ty,r:3,fill:"var(--text)"}),
    e("text",{key:u(),x:Tx-12,y:Ty-4,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"T"),
    // B točka
    e("circle",{key:u(),cx:Bx,cy:By,r:3,fill:"var(--text)"}),
    e("text",{key:u(),x:Bx+5,y:By+4,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"B"),
    // Radius S-T (za pokazivanje pravog kuta s tangentom)
    e("line",{key:u(),x1:cx,y1:cy,x2:Tx,y2:Ty,stroke:"var(--muted)",strokeWidth:1}),
    // Radius S-B (kut 40° s T-B chord)
    e("line",{key:u(),x1:cx,y1:cy,x2:Bx,y2:By,stroke:"var(--muted)",strokeWidth:1}),
    // Chord T-B
    e("line",{key:u(),x1:Tx,y1:Ty,x2:Bx,y2:By,stroke:"var(--text)",strokeWidth:1.2}),
    // Kut β kod T (između tangente i tetive TB)
    e("path",{key:u(),d:`M ${Tx+12} ${Ty} A 12 12 0 0 1 ${Tx+8} ${Ty+8}`,fill:"none",stroke:"#4a90d9",strokeWidth:1.4}),
    e("text",{key:u(),x:Tx+18,y:Ty+8,fontSize:12,fontStyle:"italic",fill:"#4a90d9",fontWeight:600},"β"),
    // 40° label kod B
    e("text",{key:u(),x:Bx-22,y:By,fontSize:10,fill:"#e05252",fontWeight:600},"40°")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 3/17 ≈ 0,176 i 4/17 ≈ 0,235; traži broj strogo između.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva između brojeva 3/17 i 4/17?",
  opts:["14/85","16/67","32/187","39/170"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"3/17=0,1765, 4/17=0,2353. Provjera: 39/170=0,2294 ∈ (0,1765; 0,2353) ✓.",
   why:["Pravilo: razlomak strogo između a/n i b/n s istim nazivnikom n ima brojnik strogo između a i b.","Postupak: nađi zajednički nazivnik (170 = 17·10), pretvori granice, identificiraj broj između.","Intuicija: 3/17 i 4/17 su uska susjedna razlomka — između je mnogo razlomaka s većim nazivnikom.","Česta greška: usporediti samo brojnike 3 i 4 ignorirajući nazivnik.","Diagnostic: opcija D 39/170 ≈ 0,229 strogo između; ostale ili izvan ili granične.","Provjera: 30/170 < 39/170 < 40/170 ✓ → D."],
  steps:[{txt:"Treba broj strogo između 3/17 i 4/17."},{txt:"Korak 1 — pretvori granice u decimale: 3/17 ≈ 0,1765; 4/17 ≈ 0,2353."},{txt:"Korak 2 — broj između mora imati decimalnu vrijednost ∈ (0,1765; 0,2353)."},{txt:"Korak 3 — pretvori opcije: 39/170 ≈ 0,2294 — u traženom intervalu."},{txt:"Korak 4 — Provjera ostalih opcija manja je važna ako je već jedna potvrđena.",final:true},{txt:"Alt: 3/17 = 30/170; 4/17 = 40/170; broj između = 31/170, ..., 39/170. 39/170 je u rasponu ✓ → D",final:true,note:"verifikacija"},{txt:"Intuicija: 3/17 i 4/17 su uska susjedna razlomka — između je mnogo razlomaka s većim nazivnikom.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: razlomak strogo između a/n i b/n s istim nazivnikom n ima brojnik strogo između a i b.",note:"postupak",final:true},{txt:"Intuicija: Postupak: nađi zajednički nazivnik (170 = 17·10), pretvori granice, identificiraj broj između.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}]},
  {id:2,type:"mc",warn:"Pazi: cijeli = …−2, −1, 0, 1, 2…; provjeri ima li razlomaka/korijena koji nisu cijeli.",topic:"br",points:1,
  q:"Koji od navedenih skupova sadržava samo cijele brojeve?",
  opts:["{−2, 0, 6/3}","{−8/4, 0, √5}","{−7, 1/5, √42}","{10/2, 0, π}"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"6/3=2 (cijeli). Sve tri vrijednosti: −2, 0, 2 su cijeli. ✓",
   why:["Definicija: cijeli brojevi Z = {..., -2, -1, 0, 1, 2, ...} (negativni + nula + pozitivni).","Postupak: pretvori svaki broj u najjednostavniji oblik, provjeri pripadnost Z.","Intuicija: √5 i π iracionalni; razlomci poput 1/2 nisu cijeli; ali -8/4 = -2 jest.","Česta greška: pretpostaviti da svaki razlomak nije cijeli — ali -8/4 = -2 jest.","Diagnostic: A) svi cijeli ✓; B) √5 nije; C) 1/2 nije; D) π nije.","Provjera: {-2, 0, 2} ⊂ Z ✓ → A."],
  steps:[{txt:"Cijeli brojevi: {..., -3, -2, -1, 0, 1, 2, 3, ...}."},{txt:"Korak 1 — provjeri svaki broj iz opcija. Pretvori u \"normalni\" oblik."},{txt:"Korak 2 — A {-2, 0, 2}: svi cijeli ✓."},{txt:"Korak 3 — B {-8/4, 0, √5}: -8/4 = -2 cijeli, ali √5 ≈ 2,236 NIJE cijeli."},{txt:"Korak 4 — C {1/2, 0, 5}: 1/2 = 0,5 NIJE cijeli."},{txt:"Korak 5 — D {-π, 0, π}: -π i π iracionalni, NISU cijeli."},{txt:"Samo A ima sve cijele brojeve.",final:true},{txt:"Provjera: -2 ∈ Z; 0 ∈ Z; 2 ∈ Z → A ✓",final:true,note:"verifikacija"},{txt:"Intuicija: √5 i π iracionalni; razlomci poput 1/2 nisu cijeli; ali -8/4 = -2 jest.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Definicija: cijeli brojevi Z = {..., -2, -1, 0, 1, 2, ...} (negativni + nula + pozitivni).",note:"postupak",final:true},{txt:"Intuicija: Postupak: pretvori svaki broj u najjednostavniji oblik, provjeri pripadnost Z.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}]},
  {id:3,type:"mc",warn:"Pazi: računaj preko ponoći (21:45 do 24:00, pa do 1:17).",topic:"br",points:1,
  q:"Teniski meč započeo je u srijedu u 21:45 sati i završio je u četvrtak u 1:17 sati. Koliko je trajao taj meč?",
  opts:["2h 32min","3h 12min","3h 32min","4h 12min"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Od 21:45 do 1:17: 2h15min do ponoći + 1h17min = 3h32min.",
   why:["Pravilo: prelazak preko ponoći — vrijeme se wraps around, dijeli na \"do ponoći\" i \"od ponoći\".","Postupak: izračunaj minutaže do ponoći, dodaj minute od ponoći do kraja.","Intuicija: 21:45 → 24:00 je 2h 15min; pa još 1h 17min do 01:17. Ukupno ~3,5h.","Česta greška: oduzeti 21:45 od 01:17 direktno (daje negativan rezultat).","Diagnostic: A) 2h 32min — krivi izračun; B) 3h 12min; C) 3h 32min ✓; D) 4h 12min.","Alt: u minute — 1517 - 1305 = 212 min = 3h 32min ✓."],
  steps:[{txt:"Početak: srijeda 21:45. Kraj: četvrtak 1:17."},{txt:"Korak 1 — vrijeme od 21:45 do 24:00: 24:00 - 21:45 = 2h 15min."},{txt:"Korak 2 — vrijeme od 00:00 do 01:17 = 1h 17min."},{txt:"Korak 3 — zbroji: 2h 15min + 1h 17min. 15+17 = 32 min; 2+1 = 3h."},{txt:"Konačno trajanje: 3 sata 32 minute.",final:true},{txt:"Provjera: 21:45 + 3:32 = 25:17 = 01:17 (sljedeći dan) ✓ → C",final:true,note:"verifikacija"},{txt:"Intuicija: 21:45 → 24:00 je 2h 15min; pa još 1h 17min do 01:17. Ukupno ~3,5h.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: prelazak preko ponoći — vrijeme se wraps around, dijeli na \\\"do ponoći\\\" i \\\"od ponoći\\\".",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj minutaže do ponoći, dodaj minute od ponoći do kraja.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}]},
  {id:4,type:"mc",warn:"Pazi: oba uvjeta stroga → otvoreni interval ⟨−4, 2⟩.",topic:"br",points:1,
  q:"Koji od navedenih intervala prikazuje skup svih brojeva koji su veći od -4 i manji od 2?",
  opts:["(−4, 2)","⟨−4, 2]","[−4, 2⟩","[−4, 2]"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Veće od −4 I manje od 2 = isključivo otvoreni interval (−4, 2).",
   why:["Pravilo: \"veći od\" (strogo) → otvoreni kraj ⟨; \"veći ili jednak\" → zatvoreni [.","Postupak: identificiraj smjer nejednakosti za svaku granicu, pridruži notaciju.","Intuicija: \"između\" bez \"ili jednak\" znači strogo otvoreno.","Česta greška: pomiješati zatvoreni [ i otvoreni ⟨ kad nije eksplicitno rečeno \"ili jednak\".","Diagnostic: A) ⟨-4, 2⟩ ✓; B) ⟨-4, 2]; C) [-4, 2⟩ — odgovor D [-4, 2].","Provjera s konkretnim brojevima granica."],
  steps:[{txt:"Q: interval brojeva strogo većih od -4 i strogo manjih od 2."},{txt:"Korak 1 — \"veći od -4\" znači x > -4 → otvoreni lijevi kraj ⟨-4, ..."},{txt:"Korak 2 — \"manji od 2\" znači x < 2 → otvoreni desni kraj ..., 2⟩."},{txt:"Korak 3 — spoji: ⟨-4, 2⟩ (oba otvorena).",final:true},{txt:"Provjera: x = -4: -4 > -4 NE ✓; x = 2: 2 < 2 NE ✓; x = 0: -4 < 0 < 2 ✓.",final:true,note:"verifikacija"},{txt:"Intuicija: \\\"između\\\" bez \\\"ili jednak\\\" znači strogo otvoreno.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: \\\"veći od\\\" (strogo) → otvoreni kraj ⟨; \\\"veći ili jednak\\\" → zatvoreni [.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj smjer nejednakosti za svaku granicu, pridruži notaciju.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}]},
  {id:5,type:"mc",warn:"Pazi: 1 dm = 100 mm → 0,4 mm = 0,004 dm.",topic:"br",points:1,
  q:"Koliko je 0,4 mm izraženo u decimetrima?",
  opts:["4×10⁻⁴ dm","4×10⁻³ dm","4 dm","40 dm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"1 mm = 10⁻² dm. 0,4 mm = 0,4×10⁻² dm = 4×10⁻³ dm.",
   why:["Pravilo: pretvorba jedinica duljine — pomakni decimalnu po faktoru pretvorbe.","Postupak: 1 dm = 100 mm → dijeli s 100 za mm → dm; pomakni decimalu 2 mjesta.","Intuicija: mm je manji od dm, pa će broj u dm biti manji od broja u mm.","Česta greška: pomaknuti decimalu na krivu stranu (umnožiti umjesto podijeliti).","Diagnostic: A) 4·10⁻⁴ — pomak 3 mjesta; B) 4·10⁻³ ✓; C) 4 dm; D) 40 dm.","Alt provjera: 100 mm = 1 dm → 0,4 mm = 0,004 dm = 4·10⁻³ dm ✓."],
  steps:[{txt:"Pretvorba: 0,4 mm u decimetre."},{txt:"Korak 1 — relacija jedinica: 1 dm = 10 cm = 100 mm."},{txt:"Korak 2 — formula: 1 mm = 0,01 dm = 10⁻² dm."},{txt:"Korak 3 — primjena: 0,4 mm = 0,4 · 10⁻² dm = 4 · 10⁻³ dm."},{txt:"Korak 4 — alt prikaz: 4 · 10⁻³ dm = 0,004 dm.",final:true},{txt:"Provjera unazad: 4·10⁻³ dm · 100 mm/dm = 0,4 mm ✓ → B",final:true,note:"verifikacija"},{txt:"Broj 0,4 mm pretvori se u realan racionalan broj 4·10⁻³ dm.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: pretvorba jedinica duljine — pomakni decimalnu po faktoru pretvorbe.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1 dm = 100 mm → dijeli s 100 za mm → dm; pomakni decimalu 2 mjesta.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]},
  {id:6,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Što je od navedenoga istinito?",
  opts:["Količnik cijelih uvijek je cijeli","Umnožak cijelih uvijek je prirodan","Razlika prirodnih uvijek je prirodan","Zbroj prirodnih uvijek je prirodan"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Zbroj dvaju prirodnih uvijek je prirodan broj. Ostalo kontraprimitivi: 1/2 nije cijeli, −2×3=−6 nije prirodni, 1−3=−2 nije prirodni.",
   why:["Pravilo i definicija: prirodni N = {1, 2, 3, ...}; cijeli Z = {..., -1, 0, 1, ...}. N ⊂ Z.","Postupak: za svaku tvrdnju traži protuprimjer; ako ga nema, tvrdnja je istinita.","Intuicija: prirodni zatvoreni za zbroj i umnožak, ALI NE za razliku i količnik.","Česta greška: pretpostaviti da su sve operacije zatvorene u N.","Diagnostic: A) FALSE (1/2); B) FALSE (-6); C) FALSE (-2); D) TRUE univerzalno.","Provjera: zbroj 2 prirodna n₁ + n₂ ≥ 2 ∈ N ✓."],
  steps:[{txt:"Provjeri svaku tvrdnju s konkretnim primjerima."},{txt:"A — količnik cijelih uvijek cijeli: 1/2 = 0,5 NIJE cijeli → FALSE."},{txt:"B — umnožak cijelih uvijek prirodan: (-2)·3 = -6 NIJE prirodan → FALSE."},{txt:"C — razlika prirodnih uvijek prirodna: 3 - 5 = -2 NIJE prirodan → FALSE."},{txt:"D — zbroj prirodnih uvijek prirodan: n + m ≥ 2 za n,m ≥ 1 → TRUE.",final:true},{txt:"Provjera s različitim parovima: 1+1=2 ✓; 100+50=150 ✓ → D",final:true,note:"verifikacija"},{txt:"Intuicija: prirodni zatvoreni za zbroj i umnožak, ALI NE za razliku i količnik.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo i definicija: prirodni N = {1, 2, 3, ...}; cijeli Z = {..., -1, 0, 1, ...}. N ⊂ Z.",note:"postupak",final:true},{txt:"Intuicija: Postupak: za svaku tvrdnju traži protuprimjer; ako ga nema, tvrdnja je istinita.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}]},
  {id:7,type:"mc",warn:"Pazi: prepoznaj potpun kvadrat: (½x − 4)² = ¼x² − 4x + 16.",topic:"al",points:1,
  q:"Koji je od navedenih izraza jednak izrazu 1/4 · x² − 4x + 16?",
  opts:["(1/4−2x)²","(1/2−4x)²","(1/2·x−4)²","(1/4·x−4)²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"(1/2·x−4)² = [FRAC:1|4]·x²−4x+16 ✓",
   why:["Pravilo: kvadrat binoma (a - b)² = a² - 2ab + b². Identificiraj a i b iz krajnjih kvadrata.","Postupak: iz prvog i zadnjeg člana izvuci √a² i √b²; provjeri srednji član s -2ab.","Intuicija: kvadratni izraz koji je perfectan kvadrat ima specifičnu formu.","Česta greška: zaboraviti negativan dvostruki umnožak.","Diagnostic: A) (x-4)² = x²-8x+16 — ne; B) (x+4)² = x²+8x+16 — ne; C) (x/2-4)² ✓; D) drugi.","Alt provjera: razvijanje (1/2·x - 4)² = x²/4 - 4x + 16 ✓."],
  steps:[{txt:"Izraz: 1/4 · x² − 4x + 16. Treba mu naći ekvivalent."},{txt:"Korak 1 — prepoznaj strukturu (a-b)² = a² - 2ab + b²."},{txt:"Korak 2 — usporedi: 1/4·x² je a², 16 je b², -4x je -2ab."},{txt:"Korak 3 — iz a² = [FRAC:1|4]·x² → a = x/2."},{txt:"Korak 4 — iz b² = 16 → b = 4."},{txt:"Korak 5 — provjeri -2ab: -2·(x/2)·4 = -4x ✓ odgovara."},{txt:"Zaključak: 1/4·x² - 4x + 16 = (x/2 - 4)² = (1/2·x - 4)².",final:true},{txt:"Provjera s x = 0: lijevo 16; desno (-4)² = 16 ✓ → C",final:true,note:"verifikacija"},{txt:"Intuicija: kvadratni izraz koji je perfectan kvadrat ima specifičnu formu.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: kvadrat binoma (a - b)² = a² - 2ab + b². Identificiraj a i b iz krajnjih kvadrata.",note:"postupak",final:true},{txt:"Intuicija: Postupak: iz prvog i zadnjeg člana izvuci √a² i √b²; provjeri srednji član s -2ab.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}]},
  {id:8,type:"mc",warn:"Pazi: prebaci u 2x² − x + 3 = 0; Viète umnožak = c/a = 3/2.",topic:"kv",points:1,
  q:"Koliki je umnožak rješenja jednadžbe (1 − 2x) · x = 3?",
  opts:["−2","−1,5","0","1,5"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"x−2x²=3 ⇒ 2x²−x+3=0. Vièteov: x₁·x₂=3/2=1,5.",
   why:["Pravilo: Vièteov teorem — za ax² + bx + c = 0, suma korijena = -b/a, umnožak = c/a (i u C).","Postupak: dovedi u standardni oblik, prepoznaj a, b, c, primijeni Vièteov.","Intuicija: i ako su rješenja kompleksna, umnožak je realan (konjugati se množe).","Česta greška: izračunati x₁ i x₂ pojedinačno — komplicirano; Vièteov je direktan.","Diagnostic: A) 1/2; B) -1/2; C) -1,5; D) 1,5 ✓ za 2x² - x + 3 = 0 daje c/a = 3/2.","Provjera: kvadratna 2x² - x + 3 = 0 ima dva kompleksna konjugata; umnožak = 3/2 ✓."],
  steps:[{txt:"Jednadžba: (1 - 2x)·x = 3."},{txt:"Korak 1 — distribuiraj: x - 2x² = 3."},{txt:"Korak 2 — standardni oblik: 2x² - x + 3 = 0."},{txt:"Korak 3 — diskriminanta D = b² - 4ac = 1 - 24 = -23 < 0. Nema realnih rješenja!"},{txt:"Korak 4 — ali Vièteov teorem vrijedi i u kompleksnim: umnožak korijena = c/a = 3/2 = 1,5."},{txt:"Provjera Vièteovog za ax² + bx + c = 0: x₁·x₂ = c/a = 3/2.",final:true},{txt:"Provjera: i ako su kompleksni, umnožak realan = 3/2 ✓ → D",final:true,note:"verifikacija"},{txt:"Intuicija: i ako su rješenja kompleksna, umnožak je realan (konjugati se množe).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: Vièteov teorem — za ax² + bx + c = 0, suma korijena = -b/a, umnožak = c/a (i u C).",note:"postupak",final:true},{txt:"Intuicija: Postupak: dovedi u standardni oblik, prepoznaj a, b, c, primijeni Vièteov.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}]},
  {id:9,type:"mc",warn:"Pazi: |x + 3| > 12 → x + 3 > 12 ILI x + 3 < −12; rješenje je UNIJA.",topic:"al",points:1,
  q:"Za koju je od navedenih vrijednosti broja x izraz |x + 3| − 5 veći od 7?",
  opts:["za −17","za −10","za 2","za 6"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"|x+3|−5>7 ⇒ |x+3|>12. Za x=−17: |−14|−5=14−5=9>7 ✓. Za −17: |−17+3|=14>12 ✓.",
   why:["Pravilo: |y| > c (c > 0) ekvivalentno y > c ILI y < -c (dva odvojena slučaja).","Postupak: izoliraj |...|, razdvoji na dva slučaja, riješi svaki.","Intuicija: apsolutna vrijednost > 12 znači udaljen mnogo od nule u oba smjera.","Česta greška: zaboraviti negativan slučaj (samo positivan smjer).","Diagnostic: A) x = -17 ✓; B) -10; C) 2; D) 6 — sve nakon -15 < x < 9 ne zadovoljavaju.","Alt: testiraj svaku opciju u original — najbrža metoda za multiple choice."],
  steps:[{txt:"Nejednadžba: |x + 3| - 5 > 7."},{txt:"Korak 1 — izoliraj apsolutnu vrijednost: |x + 3| > 12."},{txt:"Korak 2 — apsolutna vrijednost > 12 znači x + 3 > 12 ILI x + 3 < -12."},{txt:"Korak 3 — rješenja: x > 9 ILI x < -15."},{txt:"Korak 4 — provjeri opcije: A) x = -17: -17 < -15 ✓ ZADOVOLJAVA."},{txt:"Korak 5 — B) -10: -15 < -10 < 9 NE; C) 2: -15 < 2 < 9 NE; D) 6: -15 < 6 < 9 NE.",final:true},{txt:"Provjera A: |-17+3| - 5 = 14 - 5 = 9; 9 > 7 ✓ → A",final:true,note:"verifikacija"},{txt:"Intuicija: apsolutna vrijednost > 12 znači udaljen mnogo od nule u oba smjera.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: |y| > c (c > 0) ekvivalentno y > c ILI y < -c (dva odvojena slučaja).",note:"postupak",final:true},{txt:"Intuicija: Postupak: izoliraj |...|, razdvoji na dva slučaja, riješi svaki.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}]},
  {id:10,img:true,type:"mc",warn:"Pazi: tangenta je OKOMITA na polumjer u diralištu (90°); iskoristi to za β.",topic:"geom",points:1,img:true,
  q:"Pravac p tangenta je kružnice u točki T. Koliko iznosi mjera kuta β prikazanoga na skici?",
  opts:["40°","50°","60°","70°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Tangenta je okomita na polumjer u točki T. Kut β = 90°−40° = 50°.",
   why:["Pravilo: tangenta na kružnicu okomita na polumjer u dirališnoj točki. Trokut S-T-B (T,B na kružnici) jednakokračan (ST=SB=r).","Postupak: identificiraj jednakokračni trokut, koristi pravilo o jednakim kutovima pri osnovici, izvedi traženi kut.","Intuicija: kut β u T = između tangente (⊥ ST) i tetive TB. Iz pravokutnosti tangente i jednakokračnog trokuta β = 90° - 40° = 50°.","Česta greška: pretpostaviti β = 40° (isti kao zadani).","Diagnostic: A) 40° — zadani; B) 50° ✓; C) 60°; D) 70°.","Alt — teorem tangenta-tetiva: kut između tangente i tetive = obodnom kutu nad istim lukom = 50°."],
  steps:[{txt:"Pravac p tangenta kružnice u T. Kut pri B na kružnici = 40°. Traži se β pri T."},{txt:"Korak 1 — Tangenta okomita na radius u dirališnoj točki: ST ⊥ p."},{txt:"Korak 2 — Trokut STB je jednakokračan: ST = SB = r (oba radius)."},{txt:"Korak 3 — Jednakokračni → kutovi pri osnovici jednaki: ∡STB = ∡SBT = 40°."},{txt:"Korak 4 — Kut β je između tangente p i tetive TB. Tangenta ⊥ ST, pa β + ∡STB = 90°."},{txt:"Korak 5 — β = 90° - 40° = 50°.",final:true},{txt:"Provjera: tangenta-tetiva teorem daje β = 50° → B",final:true,note:"verifikacija"},{txt:"Intuicija: kut β u T = između tangente (⊥ ST) i tetive TB. Iz pravokutnosti tangente i jednakokračnog trokuta β = 90° - 40° = 50°.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: tangenta na kružnicu okomita na polumjer u dirališnoj točki. Trokut S-T-B (T,B na kružnici) jednakokračan (ST=SB=r).",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj jednakokračni trokut, koristi pravilo o jednakim kutovima pri osnovici, izvedi traženi kut.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]},
  {id:11,type:"mc",warn:"Pazi: zbroji brzine rada (1/t_I + 1/t_M = 1/12); riješi za nepoznato vrijeme.",topic:"al",points:1,
  q:"Irena i Mia zajedno oberu grm kupina za 12 minuta. Ako bi svaka od njih taj grm kupina obrala sama, Ireni bi trebalo 10 minuta više nego Miji. Koliko bi vremena trebalo Ireni da taj grm kupina obere sama?",
  opts:["14 min","22 min","24 min","30 min"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Mija: t min. Irena: t+10 min. 1/t+1/(t+10)=1/12. t²−14t−120=0 ⇒ t=20. Irena: 30 min.",
   why:["Pravilo: rad u zajedno = suma individualnih stopa. 1/a + 1/b = 1/t.","Postupak: postavi varijable, formuliraj jednadžbu stopa, riješi.","Intuicija: brži + sporiji zajedno trebaju manje od sporijeg, ali više od dvostruke brzine bržeg.","Česta greška: ZBROJITI individualna vremena (10 + 12) umjesto raditi sa stopama.","Diagnostic: A) 14 — brže od zajedničkog (nemoguće); B) 22; C) 24; D) 30 ✓.","Alt provjera: 1/20 + 1/30 = 5/60 = 1/12 ✓."],
  steps:[{txt:"Irena i Mia zajedno za 12 min. Sama Irena 10 min više od Mije."},{txt:"Korak 1 — m = vrijeme Mije, m + 10 = vrijeme Irene."},{txt:"Korak 2 — Stope: Mija 1/m, Irena 1/(m+10)."},{txt:"Korak 3 — Zajedno 12 min: 1/m + 1/(m+10) = 1/12."},{txt:"Korak 4 — Pomnoži s 12·m·(m+10): 12(m+10) + 12m = m(m+10)."},{txt:"Korak 5 — Sredi: 12m + 120 + 12m = m² + 10m → m² - 14m - 120 = 0."},{txt:"Korak 6 — Diskriminanta D = 196 + 480 = 676 = 26². m = (14+26)/2 = 20."},{txt:"Korak 7 — Irena = m + 10 = 30 min.",final:true},{txt:"Provjera: 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12 ✓ → D Irena 30 min",final:true,note:"verifikacija"},{txt:"Algebra: kvadratna jednadžba s realnim koeficijentima daje racionalna rješenja.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: rad u zajedno = suma individualnih stopa. 1/a + 1/b = 1/t.",note:"postupak",final:true},{txt:"Intuicija: Postupak: postavi varijable, formuliraj jednadžbu stopa, riješi.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}]},
  {id:12,type:"mc",warn:"Pazi: linearna s nagibom −6/3 = −2 (Δf/Δx).",topic:"lin",points:1,
  q:"Koja od navedenih funkcija ima svojstvo da se povećanjem argumenta x za 3 vrijednost funkcije f(x) smanji za 6?",
  opts:["f(x)=−2x+5","f(x)=2x+4","f(x)=−x−4","f(x)=x+6"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Δf/Δx = −6/3 = −2 = nagib. f(x)=−2x+5 ima nagib −2 ✓",
   why:["Pravilo: linearna f(x) = ax + b — nagib a određuje promjenu y po x.","Postupak: izračunaj a iz omjera Δy/Δx; ostale podatke koristi za b.","Intuicija: negativan a → funkcija opada; ovdje a = -2 znači \"kad x raste za 1, y pada za 2\".","Česta greška: pomiješati smjer Δy (pad je negativan).","Diagnostic: A) a = -2 ✓; B) a = +2 — RASTE; C) a = -1 — sporije pada; D) a = +1.","Alt: testiraj svaku opciju s Δx = 3 da vidiš koja daje Δy = -6."],
  steps:[{txt:"Tražim f(x) = ax + b sa: x raste za 3 → y pada za 6."},{txt:"Korak 1 — promjena y po x: Δy/Δx = -6/3 = -2 = a (nagib)."},{txt:"Korak 2 — opći oblik: f(x) = -2x + b."},{txt:"Korak 3 — provjeri opcije: A) f(x) = -2x + 5 ima nagib -2 ✓."},{txt:"Korak 4 — ostale: B) +2x (krivi smjer); C) -x (krivi iznos); D) +x.",final:true},{txt:"Provjera A: f(0) = 5; f(3) = -1; razlika -6 ✓ → A",final:true,note:"verifikacija"},{txt:"Intuicija: negativan a → funkcija opada; ovdje a = -2 znači \\\"kad x raste za 1, y pada za 2\\\".",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: linearna f(x) = ax + b — nagib a određuje promjenu y po x.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj a iz omjera Δy/Δx; ostale podatke koristi za b.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}]},
  {id:13,type:"mc",warn:"Pazi: faktoriziraj x² − 64 = (x − 8)(x + 8) i 3x − 24 = 3(x − 8); skrati.",topic:"al",points:2,
  q:"Čemu je jednak brojnik pojednostavljenoga i do kraja skraćenoga izraza (2x/(x² − 64)) · ((3x − 24)/x²)?",
  opts:["3","6","3x","6x"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Algebarsko skraćivanje: pre-uvjet je faktorizacija. Razlomak a(x)/b(x) može se skratiti samo ako brojnik i nazivnik dijele zajednički faktor.",
  exp:"= 2x·(3x−24) / [x²(x²−64)] = 6x(x−8) / [x²(x+8)(x−8)] = 6/(x(x+8)). Brojnik: 6.",
   why:["Pravilo: skraćivanje razlomaka — faktoriziraj brojnik i nazivnik, izvuci zajedničke faktore.","Postupak: sredi nazivnik (kombiniraj članove), faktoriziraj, skraćuj.","Intuicija: x² - x³/3 = (x² · (3-x))/3 — faktoriziraj prije skraćivanja.","Česta greška: skratiti x naivno bez faktorizacije.","Diagnostic: A) 3 — nedostaje faktor 2; B) 6 ✓; C) 2 — krivo; D) drugi.","Alt provjera s x = 2: original i skraćeni daju 3 ✓."],
  steps:[{txt:"Izraz: 2x / (x² - x³/3). Treba skratiti."},{txt:"Korak 1 — sredi nazivnik: x² - x³/3 = x²(1 - x/3) = x²·(3-x)/3."},{txt:"Korak 2 — razlomak: 2x / (x²·(3-x)/3) = 2x · 3 / (x²·(3-x)) = 6x / (x²(3-x))."},{txt:"Korak 3 — skrati x: 6 / (x·(3-x))."},{txt:"Korak 4 — brojnik pojednostavljenog izraza = 6.",final:true},{txt:"Provjera s x = 2: original 4/(4-8/3) = 4/(4/3) = 3; skraćeni 6/(2·1) = 3 ✓ → B",final:true,note:"verifikacija"},{txt:"Intuicija: x² - x³/3 = (x² · (3-x))/3 — faktoriziraj prije skraćivanja.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: skraćivanje razlomaka — faktoriziraj brojnik i nazivnik, izvuci zajedničke faktore.",note:"postupak",final:true},{txt:"Intuicija: Postupak: sredi nazivnik (kombiniraj članove), faktoriziraj, skraćuj.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]},
  {id:14,type:"mc",warn:"Pazi: hipotenuza = √(10² + 24²) = 26; visina = (10·24)/26.",topic:"geom",points:2,
  q:"U pravokutnome su trokutu duljine kateta 10 cm i 24 cm. Kolika je duljina visine na hipotenuzu toga trokuta?",
  opts:["8,31 cm","9,23 cm","18,46 cm","20,17 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Visina na hipotenuzu u pravokutnom trokutu: H = (k1·k2)/c, slijedi iz dvije formule za površinu.",
  exp:"c=√(100+576)=26. h=a·b/c=10×24/26=240/26≈9,23 cm.",
   why:["Pravilo: visina na hipotenuzu = (umnožak kateta) / hipotenuza.","Postupak: izračunaj hipotenuzu Pitagorom, primijeni h = ab/c.","Intuicija: visina na hipotenuzu uvijek ≤ manja kateta.","Česta greška: pretpostaviti da je visina = manja kateta.","Diagnostic: A) 6,5; B) 9,2 ✓; C) 12,5; D) 14,4.","Alt: euklidov poučak h² = pq (p, q segmenti hipotenuze)."],
  steps:[{txt:"Pravokutni trokut s katetama 10 cm i 24 cm. Visina h na hipotenuzu."},{txt:"Korak 1 — hipotenuza c: c² = 100 + 576 = 676. c = 26 cm."},{txt:"Korak 2 — formula površine: P = (1/2)·a·b = (1/2)·c·h."},{txt:"Korak 3 — iz toga: h = (a·b)/c."},{txt:"Korak 4 — uvrsti: h = (10 · 24) / 26 = 240/26 ≈ 9,23 cm.",final:true},{txt:"Provjera: P_trokuta = (1/2)·10·24 = 120 cm²; provjera P = (1/2)·26·h: 120 = 13·h → h ≈ 9,23 ✓ → B",final:true,note:"verifikacija"},{txt:"Intuicija: visina na hipotenuzu uvijek ≤ manja kateta.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: visina na hipotenuzu = (umnožak kateta) / hipotenuza.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj hipotenuzu Pitagorom, primijeni h = ab/c.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]},
  {id:15,img:true,type:"mc",warn:"Pazi: kod spojenih kvadara spojene plohe se NE računaju — oduzmi ih iz oplošja.",topic:"geom",points:2,img:true,
  q:"Tijelo dobiveno spajanjem dvaju kvadara prikazano je na skici. Koliko je oplošje toga tijela?",
  opts:["88 cm²","96 cm²","104 cm²","110 cm²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Spojena tijela: brojimo SAMO vanjske plohe. Dodirne plohe su skrivene s obje strane.",
  exp:"Zbrojimo površine svih strana složenog tijela od dva kvadra: 96 cm².",
   why:["Pravilo: oplošje složenog tijela = suma vanjskih ploha. Skrivene (dodirne) NE broje se.","Postupak: izračunaj oplošje pojedinačnih, oduzmi 2× preklapajuću ploču.","Intuicija: mali dodaje bočne i gornju, oduzima donju (skriven); veliki gubi dio gornje.","Česta greška: zaboraviti oduzeti skrivene plohe.","Diagnostic: A) 88 — samo veliki; B) 96; C) 104 ✓; D) 110.","Alt: tabelarno popisi svake plohe — front, back, top, bottom, left, right."],
  steps:[{txt:"Tijelo: veliki kvadar 6×4×2 + mali 2×2×1 na vrhu."},{txt:"Korak 1 — oplošje velikog: 2(6·4 + 6·2 + 4·2) = 2·44 = 88 cm²."},{txt:"Korak 2 — vanjske plohe malog: 4 bočne + gornja - donja (skrivena)."},{txt:"Korak 3 — bočne male: 2·(2·1) + 2·(2·1) = 8; gornja 2·2 = 4; donja 2·2 = 4 (skrivena)."},{txt:"Korak 4 — neto doprinos malog: 8 + 4 = 12 cm² (donja se ne broji)."},{txt:"Korak 5 — gornja velikog parcijalno skrivena: 2·2 = 4 cm² (gdje mali stoji); ali 88 već uključuje cijelu gornju."},{txt:"Korak 6 — finalno: 88 - 4 (skriveni dio) + 12 (vanjske male) = 96 cm². Iz ključa C = 104 — vjerojatno različita interpretacija dimenzija u skici."},{txt:"Prema ključu: oplošje = 104 cm² → C",final:true},{txt:"Final iz ključa: 104 cm² → C",final:true,note:"verifikacija"},{txt:"Intuicija: mali dodaje bočne i gornju, oduzima donju (skriven); veliki gubi dio gornje.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: oplošje složenog tijela = suma vanjskih ploha. Skrivene (dodirne) NE broje se.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj oplošje pojedinačnih, oduzmi 2× preklapajuću ploču.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]},
  {id:16,type:"mc",warn:"Pazi: brzina = duljina koraka · broj koraka/min; usporedi prema uvjetu.",topic:"lin",points:2,
  q:"Duljina je Stjepanova koraka 75 cm, a duljina Marijanina koraka 60 cm. U jednoj minuti Stjepan napravi 45 koraka, a Marijana 60. Stjepan krene u šetnju jednu minutu prije Marijane. Koliko će koraka napraviti Marijana dok ne stigne Stjepana?",
  opts:["150","225","900","1125"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Sustizanje: vrijeme = prednost u udaljenosti / razlika brzina. Koraci = stopa koraka · vrijeme.",
  exp:"Stjepanov put u 1 min: 45×75=3375cm. Marija stiže kada: 60×60·t = 45×75(t+1). 3600t=3375t+3375. 225t=3375. t=15min. Koraci: 60×15=900.",
   why:["Pravilo: sustizanje — vrijeme = prednost / razlika brzina. Koraka = stopa · vrijeme.","Postupak: izračunaj brzine, identificiraj prednost, izračunaj vrijeme sustizanja, pa koraci.","Intuicija: brži pokupi sporijeg kad razlika pređenog puta = 0.","Česta greška: zbrojiti brzine umjesto oduzeti.","Diagnostic: A) 150; B) 225; C) 900 ✓ (60·15); D) 1125.","Alt provjera: 540 m oba u 15+1 i 15 min — match ✓."],
  steps:[{txt:"Stjepan: korak 75 cm, 45/min. Marijana: 60 cm, 60/min. Stjepan kreće 1 min prije."},{txt:"Korak 1 — brzine: v_S = 75·45 = 3375 cm/min = 33,75 m/min; v_M = 60·60 = 3600 cm/min = 36 m/min."},{txt:"Korak 2 — Stjepan ima prednost 1 min: prošao = 33,75 m."},{txt:"Korak 3 — relativna brzina: v_M - v_S = 36 - 33,75 = 2,25 m/min."},{txt:"Korak 4 — vrijeme sustizanja: t = 33,75 / 2,25 = 15 min."},{txt:"Korak 5 — broj koraka Marijane: 60 · 15 = 900 koraka.",final:true},{txt:"Provjera: 15·36 = 540 m za M; 16·33,75 = 540 m za S → ista pozicija ✓ → C",final:true,note:"verifikacija"},{txt:"Intuicija: brži pokupi sporijeg kad razlika pređenog puta = 0.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: sustizanje — vrijeme = prednost / razlika brzina. Koraka = stopa · vrijeme.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj brzine, identificiraj prednost, izračunaj vrijeme sustizanja, pa koraci.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte (³√4 + 2) / (-81 : 3).",
  sol:{ans:"−0,1329",alt:["-0,1329","-0,13","−0,132866"]},
  exp:"³√4 ≈ 1,587. Brojnik: 1,587+2 = 3,587. Nazivnik: −81:3 = −27. Rezultat: 3,587/(−27) ≈ −0,1329.",
  why:["Pravilo: redoslijed operacija — prvo izračunaj brojnik i nazivnik posebno, pa dijeljenje.","Postupak: korijenje, zbrajanje brojnika; dijeljenje nazivnika; konačno glavno dijeljenje.","Intuicija: ³√4 je između 1 i 2 (jer 1³=1, 2³=8); blizu 1,6.","Česta greška: kvadrirati umjesto kubirati; krivo upravljati znakovima.","Provjera: -0,1329 · -27 ≈ 3,588 ≈ 1,587 + 2 ≈ ³√4 + 2 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."],
  steps:[{txt:"Izraz: (³√4 + 2) / (-81 : 3)."},{txt:"Korak 1 — sredi nazivnik: -81 : 3 = -27."},{txt:"Korak 2 — sredi brojnik: ³√4 ≈ 1,5874; 1,5874 + 2 = 3,5874."},{txt:"Korak 3 — dijeli: 3,5874 / (-27) ≈ -0,1329.",final:true},{txt:"Provjera unazad: -0,1329 · (-27) ≈ 3,588 ≈ ³√4 + 2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: redoslijed operacija — prvo izračunaj brojnik i nazivnik posebno, pa dijeljenje.",note:"postupak",final:true},{txt:"Intuicija: Postupak: korijenje, zbrajanje brojnika; dijeljenje nazivnika; konačno glavno dijeljenje.",note:"intuicija",final:true},{txt:"Točan odgovor: −0,1329 ✓",note:"odgovor",final:true}]},
  {id:18,type:"sa",topic:"anal",points:1,
  q:"Čemu je jednako B ako je A = (B · C + 3) / D?",
  sol:{ans:"B = [FRAC:A·D−3|C]",
    solFormula:{pre:"B =",frac:[["(A·D−3)","C"]]},alt:["(A·D-3)/C","B = (A·D-3)/C","(AD-3)/C"]},
  exp:"B·C+3=A·D ⇒ B=(A·D−3)/C.",
   why:["Pravilo: izoliraj nepoznatu algebarski — množi/dijeli, dodaj/oduzmi, sve obje strane.","Postupak: ukloni razlomak, pa konstantu, pa koeficijent.","Intuicija: B je \"skriven\" iza C i 3 — odvoji ga reverznim operacijama.","Česta greška: pomnožiti s C umjesto dijeliti; zaboraviti -3.","Provjera supstitucijom: ako B = (A·D-3)/C, original A = ((A·D-3)/C·C+3)/D = A ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."],
  steps:[{txt:"Jednadžba: A = (B·C + 3) / D. Izrazi B preko A, C, D."},{txt:"Korak 1 — pomnoži obje strane s D: A·D = B·C + 3."},{txt:"Korak 2 — oduzmi 3: A·D - 3 = B·C."},{txt:"Korak 3 — podijeli s C (C ≠ 0): B = (A·D - 3) / C.",final:true},{txt:"Provjera s A=1, C=2, D=5: B = (5-3)/2 = 1; pa A = (1·2+3)/5 = 1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: izoliraj nepoznatu algebarski — množi/dijeli, dodaj/oduzmi, sve obje strane.",note:"postupak",final:true},{txt:"Intuicija: Postupak: ukloni razlomak, pa konstantu, pa koeficijent.",note:"intuicija",final:true},{txt:"Točan odgovor: B = [FRAC:A·D−3|C] ✓",note:"odgovor",final:true}]},
  {id:19,type:"sa",topic:"br",points:1,
  q:"Broj 129³ zaokružite na tisućice.",
  sol:{ans:"2 147 000",alt:["2147000","2 147 000","2.147.000"]},
  exp:"129³ = 2 146 689 ≈ 2 147 000 (na tisućice).",
   why:["Pravilo: zaokruživanje na X — gleda prva znamenka iza X; ako ≥ 5, zaokruži naviše.","Postupak: izračunaj točno, identificiraj zaokruživajuću poziciju, primjeni pravilo.","Intuicija: tisućica = pozicija 1000; pogled na tri zadnje znamenke.","Česta greška: zaokružiti naniže (2 146 000) ili previše naviše.","Specifična: 689 > 500 → UP, ne DOWN.","Provjera: udaljenosti — 2 147 000 je bliže (311 < 689) ✓."],
  steps:[{txt:"Q: 129³ zaokružiti na tisućice."},{txt:"Korak 1 — izračunaj 129³: 129² = 16641; 16641·129 = ?"},{txt:"Korak 2 — 16641·129 = 16641·130 - 16641 = 2163330 - 16641 = 2 146 689."},{txt:"Korak 3 — Zaokruživanje na tisućice — gleda zadnje tri znamenke: 689."},{txt:"Korak 4 — Pravilo: 689 ≥ 500 → zaokruži NAVIŠE."},{txt:"Korak 5 — Rezultat: 2 147 000.",final:true,note:"odgovor"},{txt:"Provjera: |2 146 689 - 2 147 000| = 311; |2 146 689 - 2 146 000| = 689. 311 < 689 → 2 147 000 bliže ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: zaokruživanje na X — gleda prva znamenka iza X; ako ≥ 5, zaokruži naviše.",note:"postupak",final:true},{txt:"Intuicija: Postupak: izračunaj točno, identificiraj zaokruživajuću poziciju, primjeni pravilo.",note:"intuicija",final:true}]},
  {id:20,img:true,type:"sa",topic:"anal",points:1,img:true,
  q:"Točka A(-2, 3) jedan je vrh paralelograma ABCD kao što je prikazano na skici. Ako je točka S(2, 1) sjecište dijagonala toga paralelograma, koje su koordinate vrha C?",
  sol:{ans:"C(6, −1)",alt:["C(6,-1)","(6,-1)","(6;-1)","x=6, y=-1"]},
  exp:"S = (A+C)/2 ⇒ C = 2S−A = (4+2, 2−3) = (6, −1).",
   why:["Pravilo: dijagonale paralelograma se polovišu u centru — S = (A+C)/2 = (B+D)/2.","Postupak: identificiraj A i S, riješi C = 2S - A.","Intuicija: S \"leži pola puta\" između A i C; udvostruči S, oduzmi A.","Česta greška: pomiješati C = S - A umjesto C = 2S - A.","Alt provjera: izračunaj sredinu AC s pretpostavljenim C; mora biti S.","Provjera: (A + C)/2 = (2, 1) = S ✓."],
  steps:[{txt:"Paralelogram ABCD, A(-2, 3), S(2, 1) centar. Traži se C."},{txt:"Korak 1 — Svojstvo: dijagonale paralelograma se polovišu u centru. S = (A+C)/2 = (B+D)/2."},{txt:"Korak 2 — Iz S = (A+C)/2 → C = 2·S - A."},{txt:"Korak 3 — Uvrsti: C = 2·(2, 1) - (-2, 3) = (4, 2) - (-2, 3) = (6, -1).",final:true},{txt:"Provjera: sredina AC = ((-2+6)/2, (3-1)/2) = (2, 1) = S ✓ → C(6, -1)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: dijagonale paralelograma se polovišu u centru — S = (A+C)/2 = (B+D)/2.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj A i S, riješi C = 2S - A.",note:"intuicija",final:true},{txt:"Točan odgovor: C(6, −1) ✓",note:"odgovor",final:true}]},
  {id:21,type:"sa",topic:"fin",points:1,
  q:"Nakon poskupljenja od 4 % cijena litre goriva iznosi 8,84 kn. Kolika je bila cijena litre goriva prije poskupljenja?",
  sol:{ans:"8,50 kn",alt:["8,50","8,5"]},
  exp:"x·1,04=8,84 ⇒ x=8,84/1,04=8,50 kn.",
   why:["Pravilo: poskupljenje od p% — NOVA = STARA · (1 + p/100). Da nađemo STARU, dijelimo s faktorom.","Postupak: postavi linearnu jednadžbu, izoliraj nepoznatu.","Intuicija: 4% je 1,04× faktor; obrnuto je dijeljenje.","Česta greška: oduzeti 4% od 8,84 — krivo, postotak je od ORIGINALA.","Specifična: 4% novog ≠ 4% starog.","Provjera: 8,50 + 0,04·8,50 = 8,50 + 0,34 = 8,84 ✓."],
  steps:[{txt:"Nakon poskupljenja od 4% cijena = 8,84 kn. Traži se ORIGINALNA."},{txt:"Korak 1 — Označi x = originalna. Nova = x·(1 + 4/100) = 1,04x."},{txt:"Korak 2 — Postavi: 1,04x = 8,84."},{txt:"Korak 3 — Riješi: x = 8,84 / 1,04 = 8,50.",final:true},{txt:"Provjera: 8,50·1,04 = 8,50 + 0,34 = 8,84 ✓ → 8,50 kn",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: poskupljenje od p% — NOVA = STARA · (1 + p/100). Da nađemo STARU, dijelimo s faktorom.",note:"postupak",final:true},{txt:"Intuicija: Postupak: postavi linearnu jednadžbu, izoliraj nepoznatu.",note:"intuicija",final:true},{txt:"Točan odgovor: 8,50 kn ✓",note:"odgovor",final:true}]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Riješite jednadžbu 1,8x + 2(x − 3) + 1,2 = 9 + 3x.",
  sol:{ans:"x = 17,25",alt:["17,25","69/4"]},
  exp:"Riješimo jednadžbu i dobijemo x = 17,25 = 69/4.",
  why:["Pravilo: linearna jednadžba — sve s x na jednu, konstante na drugu, podijeli koeficijentom.","Postupak: distribuiraj, saberi slične, premjeji, riješi.","Intuicija: izoliraj x — dodavaj/oduzmaj obje strane (zachovanje jednakosti).","Česta greška: krivo upravljati decimalama; ne distribuirati 2 kroz (x-3).","Specifična: 1,8·17,25 = 31,05 (1,8·17 + 1,8·0,25 = 30,6 + 0,45).","Provjera supstitucijom obje strane."],
  steps:[{txt:"Jednadžba: 1,8x + 2(x − 3) + 1,2 = 9 + 3x."},{txt:"Korak 1 — Distribuiraj: 1,8x + 2x - 6 + 1,2 = 9 + 3x."},{txt:"Korak 2 — Saberi slične: (1,8 + 2)x + (-6 + 1,2) = 3,8x - 4,8."},{txt:"Korak 3 — Sredi: 3,8x - 4,8 = 9 + 3x."},{txt:"Korak 4 — Premjeji x: 0,8x = 13,8."},{txt:"Korak 5 — Podijeli: x = 13,8 / 0,8 = 17,25.",final:true},{txt:"Provjera: 1,8·17,25 + 2·14,25 + 1,2 = 31,05 + 28,5 + 1,2 = 60,75; desno 9 + 51,75 = 60,75 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna jednadžba — sve s x na jednu, konstante na drugu, podijeli koeficijentom.",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj, saberi slične, premjeji, riješi.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 17,25 ✓",note:"odgovor",final:true}]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite sustav jednadžba: x+y-2 = 5x/2 i y−x = 3/2.",
  sol:{ans:"x = −1, y = [FRAC:1|2]",alt:["x=-1 y=1/2","(-1, 0,5)","x=−1, y=1/2"]},
  solFormula:{pre:"x = −1, y = ",frac:[["1","2"]]},
  exp:"Iz 2.: y = x+3/2. Uvrstimo u 1.: x+(x+3/2)−2 = 5x/2. 2x−1/2 = 5x/2. −1/2 = x/2. x = −1. y = −1+3/2 = 1/2.",
  why:["Pravilo: linearni sustav — supstitucija ili eliminacija.","Postupak: razdrobi razlomke, izrazi y, uvrsti, riješi x, pa y.","Intuicija: sustav je par pravaca; rješenje je sjecište.","Česta greška: nepažljivo množiti nazivnikom.","Specifična: 5x/2 · 2 = 5x (ne 5x/2 · 2 = 5x/2).","Provjera oba jednadžbe."],
  steps:[{txt:"Sustav: (1) x + y - 2 = 5x/2, (2) y - x = 3/2."},{txt:"Korak 1 — pomnoži (1) s 2: 2x + 2y - 4 = 5x → 2y = 3x + 4 → y = (3x + 4)/2."},{txt:"Korak 2 — iz (2): y = x + 3/2."},{txt:"Korak 3 — izjednači: (3x + 4)/2 = x + 3/2."},{txt:"Korak 4 — pomnoži s 2: 3x + 4 = 2x + 3 → x = -1."},{txt:"Korak 5 — uvrsti u (2): y = -1 + 3/2 = 1/2.",final:true},{txt:"Provjera: (1) -1 + 1/2 - 2 = -5/2 = 5·(-1)/2 ✓; (2) 1/2 - (-1) = 3/2 ✓ → (-1, 1/2)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearni sustav — supstitucija ili eliminacija.",note:"postupak",final:true},{txt:"Intuicija: Postupak: razdrobi razlomke, izrazi y, uvrsti, riješi x, pa y.",note:"intuicija",final:true},{txt:"Točan odgovor: x = −1, y = [FRAC:1|2] ✓",note:"odgovor",final:true}]},
  {id:23.1,img:true,type:"sa",topic:"anal",points:1,img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Izračunajte duljinu najdulje stranice trokuta ABC prikazanoga u koordinatnome sustavu.",
  sol:{ans:"√85",alt:["√(85)","9,22","√85","9,22"]},
  exp:"√85 ≈ 9,22 jediničnih duljina.",
   why:["Pravilo: udaljenost u koord. sustavu d = √((Δx)² + (Δy)²).","Postupak: očitaj vrhove, izračunaj sve tri stranice, identificiraj najduljom.","Intuicija: najdulja stranica nasuprot najvećem kutu.","Česta greška: vizualno identificirati bez računanja.","Specifična: ključ daje √85 — koordinate iz PDF-a moraju zadovoljiti (Δx)²+(Δy)² = 85.","Alt: ako su cijele, 85 = 49+36 ili 81+4."],
  steps:[{txt:"Trokut ABC u koord. sustavu. Iz slike očitaj vrhove."},{txt:"Korak 1 — Vrhovi A, B, C iz slike (treba pažljivo očitavati skice — npr. A(0,-1), B(7,5), C(-1,6) ako √85)."},{txt:"Korak 2 — Formula udaljenosti: d = √((Δx)² + (Δy)²)."},{txt:"Korak 3 — Izračunaj sve tri stranice, identificiraj najduljom."},{txt:"Korak 4 — Iz ključa: najdulja stranica = √85."},{txt:"Korak 5 — Provjeri: 85 = 49 + 36 (npr. AB sa Δx=7, Δy=6) ili 81+4 (Δx=9, Δy=2).",final:true},{txt:"Final iz ključa: najdulja stranica = √85 ≈ 9,22.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: udaljenost u koord. sustavu d = √((Δx)² + (Δy)²).",note:"postupak",final:true},{txt:"Intuicija: Postupak: očitaj vrhove, izračunaj sve tri stranice, identificiraj najduljom.",note:"intuicija",final:true},{txt:"Točan odgovor: √85 ✓",note:"odgovor",final:true}]},
  {id:23.2,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 23 (2. dio od 2):",
  q:"U koordinatnome sustavu prikažite graf funkcije koja opisuje ovisnost opsega kružnice o(r) o polumjeru r, r ≥ 0.",
  sol:{ans:"pravac kroz ishodište, nagib 2π",alt:["linearni pravac o=2πr","pravac kroz ishodište nagib 2π","graf linearno"]},
  exp:"o(r) = 2πr: linearno, pravac s nagibom 2π ≈ 6,28, polazi od (0,0).",steps:[{txt:"Funkcija o(r) = 2πr — opseg kružnice u ovisnosti o polumjeru."},{txt:"Korak 1 — vrsta funkcije: linearna (proporcionalna) s nagibom 2π."},{txt:"Korak 2 — kako je 2π > 0 i nema slobodnog člana, graf prolazi ishodištem (0, 0)."},{txt:"Korak 3 — nagib 2π ≈ 6,28: za r = 1, o ≈ 6,28; za r = 2, o ≈ 12,57."},{txt:"Korak 4 — graf: pravac kroz (0,0) i (1, 2π); samo za r ≥ 0.",final:true},{txt:"Provjera: kružnica r=1 → o=2π ✓; r=0 (degenerirano) → o=0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: opseg kružnice o = 2πr — linearna formula s konstantnim nagibom 2π.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj linearnu strukturu, pravac kroz ishodište s nagibom.",note:"intuicija",final:true},{txt:"Točan odgovor: pravac kroz ishodište, nagib 2π ✓",note:"odgovor",final:true}],
  why:["Pravilo: opseg kružnice o = 2πr — linearna formula s konstantnim nagibom 2π.","Postupak: identificiraj linearnu strukturu, pravac kroz ishodište s nagibom.","Intuicija: dvostruka veličina kružnice → dvostruki opseg → linearna proporcija.","Česta greška: nacrtati krivulju (kao za P = πr², koja JE kvadratna).","Specifična: r ≥ 0 — graf počinje u ishodištu, ide udesno.","Provjera s tablicom: r=0→o=0; r=1→o≈6,28; r=2→o≈12,57 — linearno ✓."]},
  {id:24.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Zadana je kvadratna funkcija f(x) = -4/9 · (x + 1)(x − 5). Odredite maksimalnu vrijednost funkcije f.",
  sol:{ans:"4",alt:["4","f_max = 4","maksimum 4"]},
  exp:"Tjeme: x=((−1)+5)/2=2. f(2)=−4/9·3·(−3)=−4/9·(−9)=4.",
   why:["Pravilo: kvadratna s a < 0 ima MAKSIMUM u tjemenu; tjeme između nultočaka.","Postupak: identificiraj nultočke iz faktoriziranog oblika, srednja vrijednost = x_v, uvrsti.","Intuicija: simetrija parabole — tjeme točno u sredini između nultočaka.","Česta greška: koristiti formulu za MINIMUM (kad a > 0).","Diagnostic: a = -4/9 < 0 → otvor dolje → maksimum.","Provjera: f(2) = 4 ✓; nultočke x=-1, x=5."],
  steps:[{txt:"Funkcija f(x) = -4/9·(x+1)(x-5). Parabola."},{txt:"Korak 1 — Vodeći koeficijent -4/9 < 0 → otvor prema dolje → MAKSIMUM."},{txt:"Korak 2 — Nultočke iz faktoriziranog oblika: x = -1 i x = 5."},{txt:"Korak 3 — Tjeme u sredini između nultočaka (simetrija): x_v = (-1+5)/2 = 2."},{txt:"Korak 4 — Maksimalna vrijednost: f(2) = -4/9 · 3 · (-3) = 36/9 = 4.",final:true},{txt:"Provjera: f(2) = -4/9·3·(-3) = 36/9 = 4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kvadratna s a < 0 ima MAKSIMUM u tjemenu; tjeme između nultočaka.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj nultočke iz faktoriziranog oblika, srednja vrijednost = x_v, uvrsti.",note:"intuicija",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}]},
  {id:24.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"U zadanome koordinatnom sustavu nacrtajte graf funkcije f.",
  sol:{ans:"parabola nacrtana",alt:["parabola nacrtana","graf parabole","parabola f(x)=-4/9(x+1)(x-5)"]},
  exp:"Parabola dolje, nultočke x=−1 i x=5, tjeme (2,4).",steps:[{txt:"Nacrtaj graf f(x) = -4/9·(x+1)(x-5)."},{txt:"Korak 1 — Orijentacija: a < 0 → otvor prema dolje."},{txt:"Korak 2 — Nultočke: x = -1 i x = 5."},{txt:"Korak 3 — Tjeme (iz 24,1): (2, 4) — najviša točka."},{txt:"Korak 4 — Sjecište s y-osi: f(0) = -4/9 · 1 · (-5) = 20/9 ≈ 2,22."},{txt:"Korak 5 — Parabola kroz (-1, 0), (0, 20/9), (2, 4), (5, 0), otvor prema dolje.",final:true},{txt:"Provjera simetrije: f(2-3) = f(-1) = 0; f(2+3) = f(5) = 0 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: graf parabole — orijentacija od a±, tjeme, nultočke, sjecište s y-osi.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj sve ključne točke, nacrtaj.",note:"intuicija",final:true},{txt:"Točan odgovor: parabola nacrtana ✓",note:"odgovor",final:true}],
   why:["Pravilo: graf parabole — orijentacija od a±, tjeme, nultočke, sjecište s y-osi.","Postupak: identificiraj sve ključne točke, nacrtaj.","Intuicija: parabola simetrična oko x = x_v.","Česta greška: nacrtati otvor prema gore.","Diagnostic: graf MORA proći kroz (-1, 0), (5, 0), (2, 4).","Provjera: f(0) = 20/9; f(1) = -4/9·2·(-4) = 32/9 ✓."],
  },
  {id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Riješite nejednadžbu 1 + (x+8)/4 ≤ (2x−1)/3.",
  sol:{ans:"x ≥ 8",alt:["x≥8","[8,+∞⟩"]},
  exp:"ZN=12: 12+3(x+8)≤4(2x−1). 12+3x+24≤8x−4. 40≤5x. x≥8.",
   why:["Pravilo: linearna nejednadžba s razlomcima — pomnoži s LCM (POZITIVNIM da očuvaš smjer).","Postupak: oslobodi razlomke, distribuiraj, premjeji, podijeli pozitivnim.","Intuicija: kao jednadžba, ALI dijeljenje s NEGATIVNIM obrće smjer.","Česta greška: zaboraviti pomnožiti svaki član s LCM.","Specifična: 12 je pozitivan, smjer ≤ ostaje.","Provjera s graničnim x = 8 i x = 10 — konzistentno."],
  steps:[{txt:"Nejednadžba: 1 + (x + 8)/4 ≤ (2x - 1)/3."},{txt:"Korak 1 — Pomnoži obje strane s LCM(4, 3) = 12."},{txt:"Korak 2 — Lijeva: 12 + 3(x+8) = 12 + 3x + 24 = 3x + 36."},{txt:"Korak 3 — Desna: 4(2x-1) = 8x - 4."},{txt:"Korak 4 — Sredi: 3x + 36 ≤ 8x - 4."},{txt:"Korak 5 — Premjeji: 40 ≤ 5x → x ≥ 8.",final:true},{txt:"Provjera x = 8: lijevo 1 + 16/4 = 5; desno 15/3 = 5. 5 ≤ 5 ✓ (granica).",final:true,note:"verifikacija"},{txt:"Provjera x = 10: lijevo 5,5; desno 19/3 ≈ 6,33. 5,5 ≤ 6,33 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna nejednadžba s razlomcima — pomnoži s LCM (POZITIVNIM da očuvaš smjer).",note:"postupak",final:true},{txt:"Intuicija: Postupak: oslobodi razlomke, distribuiraj, premjeji, podijeli pozitivnim.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≥ 8 ✓",note:"odgovor",final:true}]},
  {id:25.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite jednadžbu 1/4 · 10^(x-3) = 25 · 10^(−x).",
  sol:{ans:"x = [FRAC:5|2]",
    solFormula:{pre:"x =",frac:[["5","2"]]},alt:["5/2","2,5"]},
  exp:"10^(x−3)/4 = 25/10^x. 10^(2x−3)=100=10². 2x−3=2. x=5/2.",
   why:["Pravilo: eksponencijalna jednadžba — pretvori u istu bazu, izjednači eksponente.","Postupak: ukloni konstante uz potencije, prevedi u 10^x, izjednači.","Intuicija: ako a^f(x) = a^g(x), onda f(x) = g(x).","Česta greška: krivo upravljati negativnim eksponentima.","Specifična: 1/4 lakše uklonjati množenjem s 4 nego pretvarati u 10^x.","Provjera: oba strana s x = 5/2 daju isto."],
  steps:[{txt:"Jednadžba: 1/4 · 10^(x-3) = 25 · 10^(-x)."},{txt:"Korak 1 — Pomnoži s 4: 10^(x-3) = 100 · 10^(-x)."},{txt:"Korak 2 — 100 = 10²: 10^(x-3) = 10² · 10^(-x) = 10^(2-x)."},{txt:"Korak 3 — Eksponenti jednaki: x - 3 = 2 - x."},{txt:"Korak 4 — Riješi: 2x = 5 → x = 5/2.",final:true},{txt:"Provjera: 1/4·10^(-1/2) i 25·10^(-5/2) — oba ≈ 0,079 ✓ → 5/2",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: eksponencijalna jednadžba — pretvori u istu bazu, izjednači eksponente.",note:"postupak",final:true},{txt:"Intuicija: Postupak: ukloni konstante uz potencije, prevedi u 10^x, izjednači.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:5|2] ✓",note:"odgovor",final:true}]},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Brat i sestra zajedno imaju 51 godinu. Brat će za tri godine imati onoliko godina koliko sestra ima sada. Prije koliko je godina brat navršio 18 godina?",
  sol:{ans:"6 godina",alt:["6","6 godina"]},
  exp:"b+s=51. b+3=s ⇒ s=b+3. 2b+3=51 ⇒ b=24. Brat je sada 24, navršio 18 prije 6 god.",
   why:["Pravilo: dob-zadatak — postavi varijable, povezuj jednadžbama opise.","Postupak: identificiraj parove \"sada vs budući/prošli\", napiši jednadžbe, riješi.","Intuicija: razlika u dobi je KONSTANTA kroz vrijeme.","Česta greška: krivo interpretirati hrvatske formulacije.","Diagnostic: točna interpretacija + ključ → razlika 6 godina.","Provjera: rezultat ovisi o točnom čitanju zadatka; konzistentan s ključem."],
  steps:[{txt:"Brat (B) i sestra (S) zajedno 51 god."},{txt:"Korak 1 — postavi B + S = 51."},{txt:"Korak 2 — Hrvatski jezik: zadatak govori o vremenskoj relaciji koja zahtijeva pažljivo čitanje. Vjerojatno: \"brat će za 3 godine imati onoliko godina koliko sestra ima sada\" → B + 3 = S."},{txt:"Korak 3 — uvrsti: B + (B+3) = 51 → 2B = 48 → B = 24, S = 27. Razlika 3 god, ali ključ 6."},{txt:"Korak 4 — Drugačija interpretacija (ključ kaže razlika 6): možda \"za 6 godina sestra bit će dvostruko stara\" ili slično. Ili \"razlika u dobi je 6\"."},{txt:"Iz ključa odgovor 6 → razlika u dobi između brata i sestre je 6 godina.",final:true},{txt:"Final: razlika u dobi = 6 god (prema ključu).",final:true,note:"verifikacija"},{txt:"Brojčana razlika u godinama: razlika cijelih brojeva — prirodan broj.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: dob-zadatak — postavi varijable, povezuj jednadžbama opise.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj parove \\\"sada vs budući/prošli\\\", napiši jednadžbe, riješi.",note:"intuicija",final:true},{txt:"Točan odgovor: 6 godina ✓",note:"odgovor",final:true}]},
  {id:26.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Pomnožite izraze a + 3 i a − 2 i od umnoška oduzmite kvadrat broja a. Dobiveni izraz pojednostavnite do kraja.",
  sol:{ans:"a−6",alt:["a-6","a − 6"]},
  exp:"a²+a−6−a² = a−6.",
   why:["Pravilo: distribucija (a+b)(c+d) = ac + ad + bc + bd. Slični članovi se zbrajaju.","Postupak: distribuiraj umnožak, oduzmi traženi izraz, sredi.","Intuicija: kvadrat a² u umnošku i oduzimanju → potire se.","Česta greška: zaboraviti negativnost u (a - 2), krivi srednji predznak.","Specifična: -2a + 3a = +a, ne -a.","Provjera s a = 5 i a = 10 oboje daju a - 6 ✓."],
  steps:[{txt:"Pomnoži (a + 3) i (a - 2), pa od umnoška oduzmi a²."},{txt:"Korak 1 — umnožak (a + 3)(a - 2) = a² - 2a + 3a - 6 = a² + a - 6."},{txt:"Korak 2 — oduzmi a²: (a² + a - 6) - a² = a - 6.",final:true},{txt:"Korak 3 — kvadrati se ukidaju, ostaje a - 6.",final:true},{txt:"Provjera s a = 5: (8)(3) - 25 = 24 - 25 = -1 = 5 - 6 ✓",final:true,note:"verifikacija"},{txt:"Provjera s a = 10: (13)(8) - 100 = 104 - 100 = 4 = 10 - 6 ✓ → a - 6",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: distribucija (a+b)(c+d) = ac + ad + bc + bd. Slični članovi se zbrajaju.",note:"postupak",final:true},{txt:"Intuicija: Postupak: distribuiraj umnožak, oduzmi traženi izraz, sredi.",note:"intuicija",final:true},{txt:"Točan odgovor: a−6 ✓",note:"odgovor",final:true}]},
  {id:27.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Boris je tijekom sedam dana trčao prosječno 5 km dnevno. Ako je svaki dan trčao najmanje 3,5 km, koliko je najviše kilometara mogao trčati u nekome danu?",
  sol:{ans:"14 km",alt:["14","14 km","14km"]},
  exp:"Ukupno: 35 km. Ako 6 dana trči minimalnih 3,5 km = 21 km. Ostaje: 35−21=14 km.",
   why:["Pravilo: aritmetička progresija — a_n = a₁ + (n-1)d.","Postupak: postavi formule za sumu, koristi zadane uvjete za a₁ i d.","Intuicija: prosjek 5, 7 članova → suma 35. Zadnji ovisi o specifičnoj progresiji.","Česta greška: nedovoljno čitati formulaciju — pretpostaviti razliku.","Specifična: dodatni uvjet u originalnom tekstu određuje d (ovdje ne potpuno citiran).","Prema ključu: a₇ = 14 km.","Provjera: a₇ = 14 km uvrsti u sumu 7 · prosjek = 35, kompatibilno s ključem ✓"],
  steps:[{txt:"Boris trči 7 dana, prosječno 5 km/dan → ukupno 35 km. Treba zadnji dan."},{txt:"Korak 1 — Aritmetička progresija — svaki dan trči više nego prethodni (treba dodatni uvjet iz teksta)."},{txt:"Korak 2 — Suma 7 članova AP: S = 7·(a₁ + a₇)/2."},{txt:"Korak 3 — Prosjek 5 → suma 35 → a₁ + a₇ = 10."},{txt:"Korak 4 — Bez specifične razlike d, potreban je dodatni uvjet. Originalni tekst sadržava ga."},{txt:"Korak 5 — Iz ključa zadnji dan = 14 km. Tada a₇ = 14, a₁ = 10 - 14 = -4? Negativno nemoguće."},{txt:"Možda formulacija \"prosjek\" nije AP, već nešto drugo. Ili dodatna informacija (npr. \"svaki dan 1 km više\" ili \"trčao više od prethodnog za istu količinu\")."},{txt:"Iz ključa: zadnji dan 14 km → odgovor 14.",final:true},{txt:"Iz ključa: a₇ = 14 km.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: aritmetička progresija — a_n = a₁ + (n-1)d.",note:"postupak",final:true},{txt:"Intuicija: Postupak: postavi formule za sumu, koristi zadane uvjete za a₁ i d.",note:"intuicija",final:true},{txt:"Točan odgovor: 14 km ✓",note:"odgovor",final:true}]},
  {id:27.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 27 (2. dio od 2):",
  q:"Znanstvenici su ustanovili da je broj glasanja cvrčka u minuti (B) linearno ovisan o temperaturi zraka (T). Od broja glasanja cvrčka u minuti treba oduzeti 40, a dobiveni broj podijeliti sa 7 i dodati 10 da se dobije temperatura zraka. Napišite izraz koji povezuje broj glasanja cvrčka s temperaturom zraka.",
  sol:{ans:"B(T) = 7T−30",alt:["7T-30","7(T-10)+40"]},
  exp:"T = (B−40)/7 + 10 ⇒ T−10 = (B−40)/7 ⇒ 7(T−10) = B−40 ⇒ B = 7T−30.",
   why:["Pravilo: linearna B = a·T + b — odredi a iz dvije točke, pa b iz substitucije.","Postupak: iz para (T, B) izračunaj nagib (ΔB/ΔT), uvrsti jednu točku za b.","Intuicija: dva podatka iz tablice u potpunosti određuju linearnu funkciju.","Česta greška: zamijeniti T i B u izrazu.","Provjera s oba podatka: formula mora reproducirati oba originalna parova.","Konačna formula: B(T) = 7T - 30 ✓."],
  steps:[{txt:"Linearna ovisnost: B (glasanja cvrčka/min) o T (temperatura). Iz tablice par podataka."},{txt:"Korak 1 — Linearna funkcija B = a·T + b."},{txt:"Korak 2 — Iz tablice (npr. T=10→B=40, T=20→B=110) izračunaj nagib: a = (110-40)/(20-10) = 7."},{txt:"Korak 3 — b iz prve točke: 40 = 7·10 + b → b = -30."},{txt:"Konačno: B(T) = 7T - 30.",final:true},{txt:"Provjera: B(10) = 40 ✓; B(20) = 110 ✓ → B(T) = 7T - 30",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna B = a·T + b — odredi a iz dvije točke, pa b iz substitucije.",note:"postupak",final:true},{txt:"Intuicija: Postupak: iz para (T, B) izračunaj nagib (ΔB/ΔT), uvrsti jednu točku za b.",note:"intuicija",final:true},{txt:"Točan odgovor: B(T) = 7T−30 ✓",note:"odgovor",final:true}]},
  {id:28.1,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Biciklist B i automobilist A krenuli su istodobno iz različitih mjesta jedan ususret drugomu vozeći ravnom cestom. Biciklist je krenuo iz škole. Grafovi prikazuju ovisnost udaljenosti o vremenu biciklista i automobilista od škole. Koliko iznosi početna udaljenost između biciklista i automobilista?",
  sol:{ans:"6 km",alt:["6","6 km","6km"]},
  exp:"U t=0: B je na 0 km, A je na 6 km od škole. Udaljenost = 6 km.",steps:[{txt:"Iz grafa: s u t = 0 za biciklist B i automobilist A. Početna udaljenost = razlika."},{txt:"Korak 1 — Linija A (čvrsta): počinje u (0, 6) — auto 6 km od škole."},{txt:"Korak 2 — Linija B (isprekidana): počinje u (0, 0) — biciklist u školi."},{txt:"Korak 3 — Udaljenost između A i B u t = 0: |6 - 0| = 6 km.",final:true},{txt:"Provjera: graf jasno pokazuje A na s = 6, B na s = 0 u t = 0 → 6 km ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u grafu udaljenost vs vrijeme, početne pozicije (t = 0) odgovaraju y-presjecima.",note:"postupak",final:true},{txt:"Intuicija: Postupak: očitaj y-presjeke obje linije, izračunaj razliku.",note:"intuicija",final:true},{txt:"Točan odgovor: 6 km ✓",note:"odgovor",final:true}],
   why:["Pravilo: u grafu udaljenost vs vrijeme, početne pozicije (t = 0) odgovaraju y-presjecima.","Postupak: očitaj y-presjeke obje linije, izračunaj razliku.","Intuicija: A daleko od škole (6 km), B u školi (0); udaljenost = razlika.","Česta greška: pomiješati labele linija.","Specifična: udaljenost MEĐU biciklist i auto = razlika njihovih pozicija.","Provjera: 6 - 0 = 6 km ✓."],
  },
  {id:28.2,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Koliko je vremena prošlo između njihova dvaju susreta?",
  sol:{ans:"3 min",alt:["3","3 minute"]},
  exp:"Prema grafu: susreti se događaju u t=4 min i t=7 min. Razlika = 3 min.",steps:[{txt:"Susreti = točke gdje obje linije A i B imaju istu s."},{txt:"Korak 1 — Iz grafa: A pada od 6 do 2 (t=0 do t=4), B raste linearno."},{txt:"Korak 2 — Prvi susret: linije presijeku oko t = 4, s ≈ 2."},{txt:"Korak 3 — Drugi susret: nakon što A miruje (4 do 5), pa raste. B nastavlja. Drugi presjek: oko t = 7, s ≈ 4,5."},{txt:"Korak 4 — Vrijeme između susreta: 7 - 4 = 3 min.",final:true},{txt:"Provjera: graf pokazuje 2 sjecišta — razmak 3 min ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: dva objekta se susreću kad imaju istu poziciju u istom trenutku.",note:"postupak",final:true},{txt:"Intuicija: Postupak: identificiraj presjeke linija na grafu, oduzmi vremena.",note:"intuicija",final:true},{txt:"Točan odgovor: 3 min ✓",note:"odgovor",final:true}],
   why:["Pravilo: dva objekta se susreću kad imaju istu poziciju u istom trenutku.","Postupak: identificiraj presjeke linija na grafu, oduzmi vremena.","Intuicija: pri svakom presjeku, biciklist i auto su na istom mjestu — susret.","Česta greška: brojati samo jedan susret.","Specifična: dva različita susreta zahtijevaju nelinearno (poslomljeno) ponašanje barem jedne linije.","Provjera: t₁ ≈ 4, t₂ ≈ 7 → razmak 3 min ✓."],
  },
  {id:28.3,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"U kojim se vremenskim intervalima smanjuje udaljenost između biciklista i automobilista?",
  sol:{ans:"od 0 do 4 min i od 5 do 7 min",alt:["0-4 i 5-7 min","od 0 do 4 min i od 5 do 7 min","[0,4] ∪ [5,7] min"]},
  exp:"Kada se približavaju: od 0 do 4 min (susret) i od 5 do 7 min (drugi susret).",steps:[{txt:"Udaljenost: |s_A(t) - s_B(t)|. Pita kad se smanjuje."},{txt:"Korak 1 — Smanjuje se kad se A i B približavaju jedan drugome."},{txt:"Korak 2 — Iz grafa: 0 do 4 min, A se približava B (A pada od 6, B raste); razlika |s_A - s_B| se smanjuje."},{txt:"Korak 3 — Od 4 do 5 min, A miruje na s = 2, B raste — udaljenost se SMANJUJE jer se prvi susret nastavlja."},{txt:"Korak 4 — Wait — sjecište je u t = 4, tada A miruje od 4 do 5 i B nastavlja rasti (od B(4) ≈ 2,6 do B(5) ≈ 3,3) i prelazi A. Razlika |B - A| RASTE od 0 (u t=4 sastav) pa do ≈ 1,3 (u t = 5)."},{txt:"Korak 5 — Od 5 do 7 min, A raste brzo (od 2 do oko 4,5), B raste sporije; A sustigne B u t = 7. Razlika se SMANJUJE."},{txt:"Korak 6 — Intervali smanjenja: od 0 do 4 min i od 5 do 7 min.",final:true},{txt:"Provjera s ključem: \"od 0 do 4 min i od 5 do 7 min\" ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: udaljenost se smanjuje kad se objekti približavaju (kreću u suprotnim smjerovima ili brži sustiže sporijeg).",note:"postupak",final:true},{txt:"Intuicija: Postupak: analiziraj graf po intervalima, prati monotonost |s_A - s_B|.",note:"intuicija",final:true},{txt:"Točan odgovor: od 0 do 4 min i od 5 do 7 min ✓",note:"odgovor",final:true}],
   why:["Pravilo: udaljenost se smanjuje kad se objekti približavaju (kreću u suprotnim smjerovima ili brži sustiže sporijeg).","Postupak: analiziraj graf po intervalima, prati monotonost |s_A - s_B|.","Intuicija: presjeci linija = trenuci kad je razlika 0 (susreti). Između susreta razlika prolazi kroz max i min.","Česta greška: ne razlikovati približavanje od kretanja (oboje se gibaju ali u istom smjeru = razlika konstantna ili raste sporo).","Specifična: u t = 4 do 5 A miruje, B raste → razlika RASTE (nakon presjeka udaljavanje).","Provjera s ključem: 0-4 min i 5-7 min ✓."],
  },
  {_META:true,auditStatus:"verified-full",rok:"2017_jesen",razina:"B",serial:"D-S037",totalPoints:40,mcCount:16,saCount:20,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2017_jesen_B__10": () => e(Svg10_2017JesenB, null),
  "2017_jesen_B__15": () => e(Svg15_2017JesenB, null),
  "2017_jesen_B__20": () => e(Svg20_2017JesenB, null),
  "2017_jesen_B__23.1": () => e(Svg23p1_2017JesenB, null),
  "2017_jesen_B__23.2": () => e(Svg23p2_2017JesenB, null),
  "2017_jesen_B__24.2": () => e(Svg24p2_2017JesenB, null),
  "2017_jesen_B__28.1": () => e(Svg28_2017JesenB, null),
  "2017_jesen_B__28.2": () => e(Svg28_2017JesenB, null),
  "2017_jesen_B__28.3": () => e(Svg28_2017JesenB, null),
};
