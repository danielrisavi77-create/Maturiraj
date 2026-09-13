// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad9_2015JA(){
  const u=_uid15ja;
  return e("svg",{viewBox:"0 0 580 490",
    style:{width:"100%",maxWidth:520,display:"block",background:"var(--s2)",borderRadius:8}},

    // Kruznica
    e("circle",{key:u(),cx:260,cy:275,r:150,fill:"none",stroke:"#378ADD",strokeWidth:2.5}),

    // Pravac kroz B, S i C (ljubicasti)
    e("line",{key:u(),x1:146,y1:30,x2:374,y2:520,stroke:"#7F77DD",strokeWidth:1.8}),

    // Pravac kroz B i A (zlatni)
    e("line",{key:u(),x1:100,y1:111,x2:578,y2:248,stroke:"#BA7517",strokeWidth:1.8}),

    // Tangenta u A (zelena, prolazi kroz D)
    e("line",{key:u(),x1:250,y1:-16,x2:522,y2:403,stroke:"#1D9E75",strokeWidth:1.8}),

    // Tangenta u C (zelena, prolazi kroz D)
    e("line",{key:u(),x1:550,y1:305,x2:97,y2:517,stroke:"#1D9E75",strokeWidth:1.8}),

    // Kut ABS (sjenčica)
    e("path",{key:u(),d:"M 197 139 L 224 147 A 28 28 0 0 1 208 164 Z",fill:"#CECBF6",fillOpacity:0.55,stroke:"none"}),
    e("path",{key:u(),d:"M 224 147 A 28 28 0 0 1 208 164",fill:"none",stroke:"#534AB7",strokeWidth:1.8}),

    // Kut ADC = 82°
    e("path",{key:u(),d:"M 480 338 L 458 304 A 40 40 0 0 0 444 355 Z",fill:"#FAECE7",fillOpacity:0.45,stroke:"none"}),
    e("path",{key:u(),d:"M 458 304 A 40 40 0 0 0 444 355",fill:"none",stroke:"#D85A30",strokeWidth:2}),
    e("text",{key:u(),x:502,y:346,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"82°"),

    // Tocke
    e("circle",{key:u(),cx:260,cy:275,r:4.5,fill:"#378ADD"}),
    e("text",{key:u(),x:237,y:290,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"S"),

    e("circle",{key:u(),cx:197,cy:139,r:5.5,fill:"#534AB7"}),
    e("text",{key:u(),x:181,y:130,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"B"),

    e("circle",{key:u(),cx:386,cy:193,r:5.5,fill:"#1D9E75"}),
    e("text",{key:u(),x:396,y:184,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"A"),

    e("circle",{key:u(),cx:323,cy:411,r:5.5,fill:"#1D9E75"}),
    e("text",{key:u(),x:305,y:436,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"C"),

    e("circle",{key:u(),cx:480,cy:338,r:6,fill:"#D85A30"}),
    e("text",{key:u(),x:490,y:330,fill:"var(--text)",fontSize:14,fontWeight:500,fontStyle:"italic"},"D")
  );
}

function SvgZad8_2015JA(){
  // Vector formula: a = -3i + 4j  i  b = -6i + j
  // Arrow above each vector letter
  const u=_uid15ja;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ar=(x,y)=>[
    e("line",{key:u(),x1:x,y1:y-2,x2:x+8,y2:y-2,stroke:_BLUE,strokeWidth:1.1}),
    e("polyline",{key:u(),points:`${x+5},${y-5} ${x+8},${y-2} ${x+5},${y+1}`,fill:"none",stroke:_BLUE,strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})
  ];
  const fs=19,fs2=13;
  const tc="var(--text)",mc="var(--blue)";
  return e("svg",{viewBox:"0 0 440 80",style:{width:"100%",maxWidth:440,display:"block",margin:"8px auto"}},
    // a⃗ = −3 i⃗ + 4 j⃗
    e("text",{key:u(),x:10,y:45,fill:mc,fontSize:fs,fontStyle:"italic",fontWeight:500},"a"),
    ...ar(10,25),
    e("text",{key:u(),x:26,y:45,fill:tc,fontSize:fs}," = −3"),
    e("text",{key:u(),x:88,y:45,fill:mc,fontSize:fs,fontStyle:"italic"},"i"),
    ...ar(88,25),
    e("text",{key:u(),x:102,y:45,fill:_GOLD,fontSize:fs}," + 4"),
    e("text",{key:u(),x:152,y:45,fill:mc,fontSize:fs,fontStyle:"italic"},"j"),
    ...ar(152,25),
    // separator
    e("text",{key:u(),x:185,y:45,fill:"var(--muted)",fontSize:fs2},"  i  "),
    // b⃗ = −6 i⃗ + j⃗
    e("text",{key:u(),x:230,y:45,fill:mc,fontSize:fs,fontStyle:"italic",fontWeight:500},"b"),
    ...ar(230,25),
    e("text",{key:u(),x:246,y:45,fill:tc,fontSize:fs}," = −6"),
    e("text",{key:u(),x:310,y:45,fill:mc,fontSize:fs,fontStyle:"italic"},"i"),
    ...ar(310,25),
    e("text",{key:u(),x:325,y:45,fill:_GOLD,fontSize:fs}," + "),
    e("text",{key:u(),x:360,y:45,fill:mc,fontSize:fs,fontStyle:"italic"},"j"),
    ...ar(360,25)
  );
}

function SvgZad6_2015JA(){
  const W=220,H=220,cx=110,cy=110,r=80;
  // E(t) je u III. kvadrantu (x<0, y<0) — kao na izvornoj slici.
  // SVG y-os raste prema dolje, pa se sin oduzima.
  const angle=(180+35)*Math.PI/180; // ~215°
  const ex=cx+r*Math.cos(angle), ey=cy-r*Math.sin(angle);
  const u=_uid15ja;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // osi
    e("line",{key:u(),x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-8},${cy} ${W-17},${cy-3.5} ${W-17},${cy+3.5}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${cx},8 ${cx-3.5},17 ${cx+3.5},17`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-6,y:cy+13,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:cx-13,y:14,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"y"),
    // jedinicna kruznica
    e("circle",{key:u(),cx,cy,r,fill:"none",stroke:"var(--text)",strokeWidth:1.5}),
    // ishodiste i tocka 1 (male prazne kruzice, kao u originalu)
    e("circle",{key:u(),cx,cy,r:2.6,fill:"var(--s2)",stroke:"var(--text)",strokeWidth:1.2}),
    e("circle",{key:u(),cx:cx+r,cy,r:2.6,fill:"var(--s2)",stroke:"var(--text)",strokeWidth:1.2}),
    e("text",{key:u(),x:cx+4,y:cy+14,fill:"var(--text)",fontSize:11},"0"),
    e("text",{key:u(),x:cx+r+4,y:cy+14,fill:"var(--text)",fontSize:11},"1"),
    // E(t) na kruznici u III. kvadrantu
    e("circle",{key:u(),cx:ex,cy:ey,r:4.5,fill:"var(--text)"}),
    e("text",{key:u(),x:ex-38,y:ey+24,fill:"var(--text)",fontSize:12,fontStyle:"italic"},"E(t)")
  );
}

function SvgZad29b_2015JA(){
  const W=280,H=240;
  const u=_uid15ja;
  // izometrijska kocka (kao na slici)
  const o=[65,195], sc=110, sk=0.45, of=0.38;
  // baza: A,B,C,D
  const A=[o[0],o[1]];
  const B=[o[0]+sc,o[1]];
  const C=[o[0]+sc+sc*sk*of*2,o[1]-sc*sk];
  const D=[o[0]+sc*sk*of*2,o[1]-sc*sk];
  // gore: A1,B1,C1,D1
  const h=sc*0.85;
  const A1=[A[0],A[1]-h];
  const B1=[B[0],B[1]-h];
  const C1=[C[0],C[1]-h];
  const D1=[D[0],D[1]-h];
  const M=[(C[0]+C1[0])/2,(C[1]+C1[1])/2]; // poloviste CC1

  const pt=([x,y])=>x.toFixed(1)+","+y.toFixed(1);
  const line=(p1,p2,col,dsh,sw)=>e("line",{key:u(),x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1],stroke:col||"var(--text)",strokeWidth:sw||1.8,strokeDasharray:dsh||"none"});

  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // lice gore (D1C1B1A1)
    e("polygon",{key:u(),points:[D1,C1,B1,A1].map(pt).join(" "),fill:"rgba(74,144,217,0.08)",stroke:"none"}),
    // lice naprijed (A1B1BA)
    e("polygon",{key:u(),points:[A1,B1,B,A].map(pt).join(" "),fill:"rgba(61,214,140,0.06)",stroke:"none"}),
    // lice desno (B1C1CB)
    e("polygon",{key:u(),points:[B1,C1,C,B].map(pt).join(" "),fill:"rgba(74,144,217,0.05)",stroke:"none"}),
    // skriveni bridovi (crtana linija)
    line(A,D,"var(--muted)","5,4",1.2),
    line(D,C,"var(--muted)","5,4",1.2),
    line(D,D1,"var(--muted)","5,4",1.2),
    // vidljivi bridovi baze
    line(A,B),line(B,C),line(A,A1),
    // bridovi gore
    line(A1,B1),line(B1,C1),line(C1,D1),line(D1,A1),
    // bridovi vertikalni
    line(B,B1),line(C,C1),
    // dijagonala BD (narancastim/zelenim) — ključan element
    e("line",{key:u(),x1:B[0],y1:B[1],x2:D[0],y2:D[1],stroke:"#e8c547",strokeWidth:2,strokeDasharray:"6,3"}),
    // poloviste M brida CC1
    e("circle",{key:u(),cx:M[0],cy:M[1],r:4,fill:"#f87171"}),
    e("text",{key:u(),x:M[0]+6,y:M[1]+4,fill:"#f87171",fontSize:11,fontStyle:"italic"},"M"),
    // oznake vrhova
    ...([["A",A,[-14,14]],["B",B,[6,14]],["C",C,[6,6]],
         ["D",D,[-18,6]],["A₁",A1,[-20,-4]],["B₁",B1,[4,-4]],
         ["C₁",C1,[4,-4]],["D₁",D1,[-22,-4]]]).map(([n,p,[ox,oy]])=>
      e("text",{key:u(),x:p[0]+ox,y:p[1]+oy,fill:"var(--text)",fontSize:12,fontStyle:"italic",fontWeight:600},n)
    )
  );
}

function SvgZad28c_2015JA(){
  const W=300,H=240,cx=100,cy=180,sc=35;
  const u=_uid15ja;
  // mreza: isprekidana i tematski neutralna (kao na izvornoj slici)
  const gridStroke={stroke:"var(--muted)",strokeWidth:0.9,strokeDasharray:"4,3",opacity:0.45};
  const grid=[];
  for(let i=-2;i<=4;i++) grid.push(e("line",{key:u(),x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,...gridStroke}));
  for(let i=-1;i<=4;i++) grid.push(e("line",{key:u(),x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,...gridStroke}));
  let path="",pen=false;
  for(let xi=-0.3;xi<=4.3;xi+=0.04){
    const yi=(xi-2)**2;
    const px=cx+xi*sc, py=cy-yi*sc;
    if(py<5||py>H-5){pen=false;continue;}
    if(!pen){path+="M "+px.toFixed(1)+","+py.toFixed(1);pen=true;}
    else path+=" L "+px.toFixed(1)+","+py.toFixed(1);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...grid,
    // osi
    e("line",{key:u(),x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--text)",strokeWidth:1.4}),
    e("line",{key:u(),x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--text)",strokeWidth:1.4}),
    e("polygon",{key:u(),points:`${W-8},${cy} ${W-17},${cy-4} ${W-17},${cy+4}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${cx},8 ${cx-4},17 ${cx+4},17`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-6,y:cy+14,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:cx-14,y:14,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"y"),
    // oznake osi
    e("text",{key:u(),x:cx+5,y:cy+14,fill:"var(--text)",fontSize:10},"0"),
    ...[1,2,3,4].map(i=>e("text",{key:u(),x:cx+i*sc+4,y:cy+14,fill:"var(--text)",fontSize:10},i)),
    ...[-1,1,2,3,4].map(i=>e("text",{key:u(),x:cx-13,y:cy-i*sc+4,fill:"var(--text)",fontSize:10},i)),
    // graf y=(x-2)^2
    e("path",{key:u(),d:path,fill:"none",stroke:"var(--blue)",strokeWidth:2.5}),
    // tjeme (2,0)
    e("circle",{key:u(),cx:cx+2*sc,cy:cy,r:4.5,fill:"var(--gold)"}),
    e("text",{key:u(),x:cx+2*sc+9,y:cy-9,fill:"var(--gold)",fontSize:10},"tjeme (2, 0)"),
    // sjeciste s y-osi (0,4)
    e("circle",{key:u(),cx,cy:cy-4*sc,r:4,fill:"var(--green)"}),
    e("text",{key:u(),x:cx+9,y:cy-4*sc-7,fill:"var(--green)",fontSize:10},"(0, 4)")
  );
}

function SvgZad26_2015JA(){
  const W=300,H=180,cx=60,cy=90,sc=50;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const u=_uid15ja;
  const grid=[];
  // vertical grid lines
  const xmarks=[[0,"0"],[Math.PI/6,"π/6"],[Math.PI/2,"π/2"],[2*Math.PI/3,"2π/3"],[Math.PI,"π"],[4*Math.PI/3,"4π/3"]];
  for(let xi=-0.2;xi<=4.5;xi+=0.5) grid.push(e("line",{key:u(),x1:cx+xi*sc,y1:10,x2:cx+xi*sc,y2:H-10,stroke:"rgba(130,120,200,0.12)",strokeWidth:1}));
  for(let yi=-2;yi<=2;yi++) grid.push(e("line",{key:u(),x1:10,y1:cy-yi*sc/2,x2:W-10,y2:cy-yi*sc/2,stroke:"rgba(130,120,200,0.12)",strokeWidth:1}));
  // sinusni graf f(x)=2sin(2x+π/6)
  let path="",pen=false;
  for(let xi=-0.15;xi<=4.3;xi+=0.025){
    const yi=2*Math.sin(2*xi+Math.PI/6);
    const px=cx+xi*sc, py=cy-yi*sc/2;
    if(px<5||px>W-5){pen=false;continue;}
    if(!pen){path+="M "+px.toFixed(1)+","+py.toFixed(1);pen=true;}
    else path+=" L "+px.toFixed(1)+","+py.toFixed(1);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...grid,
    e("line",{key:u(),x1:6,y1:cy,x2:W-6,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{key:u(),x1:cx,y1:H-6,x2:cx,y2:6,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{key:u(),points:`${W-6},${cy} ${W-14},${cy-4} ${W-14},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{key:u(),points:`${cx},6 ${cx-4},14 ${cx+4},14`,fill:"var(--muted)"}),
    e("text",{key:u(),x:W-4,y:cy+5,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:cx+4,y:8,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:cx+4,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    // oznake y-osi
    e("text",{key:u(),x:cx-14,y:cy-sc/2+4,fill:"var(--muted)",fontSize:10},"1"),
    e("text",{key:u(),x:cx-18,y:cy-sc+4,fill:"var(--muted)",fontSize:10},"2"),
    e("text",{key:u(),x:cx-18,y:cy+sc/2+4,fill:"var(--muted)",fontSize:10},"-1"),
    e("text",{key:u(),x:cx-18,y:cy+sc+4,fill:"var(--muted)",fontSize:10},"-2"),
    // oznake x-osi
    e("text",{key:u(),x:cx+Math.PI/6*sc-6,y:cy+13,fill:"var(--muted)",fontSize:9},"π/6"),
    e("text",{key:u(),x:cx+2*Math.PI/3*sc-8,y:cy+13,fill:"var(--muted)",fontSize:9},"2π/3"),
    // nultočke (prazni krugovi)
    e("circle",{key:u(),cx:cx+Math.PI/6*sc,cy:cy,r:4,fill:"var(--s2)",stroke:"var(--text)",strokeWidth:1.5}),
    e("circle",{key:u(),cx:cx+2*Math.PI/3*sc,cy:cy,r:4,fill:"var(--s2)",stroke:"var(--text)",strokeWidth:1.5}),
    // graf
    e("path",{key:u(),d:path,fill:"none",stroke:_BLUE,strokeWidth:2.2})
  );
}

function SvgZad24b_2015JA(){
  const W=300,H=220,lm=36,rm=14,tm=16,bm=28;
  const W2=W-lm-rm, H2=H-tm-bm;
  const u=_uid15ja;
  // x raspon [1,11], y raspon [-2,3]
  const xmin=1,xmax=11,ymin=-2,ymax=3;
  const sx=W2/(xmax-xmin), sy=H2/(ymax-ymin);
  const px=x=>lm+(x-xmin)*sx;
  const py=y=>tm+H2-(y-ymin)*sy;
  // točke grafa (aproksimacija iz slike)
  const pts=[
    [1,1],[2,0],[3,0.5],[4,2.1],[5,2],[6,1.5],[7,1],[8,0.4],[9,1.5],[10,1.8],[11,4]
  ];
  let d="";
  pts.forEach(([x,y],i)=>{
    d+=(i===0?"M":"L")+px(x).toFixed(1)+","+py(y).toFixed(1)+" ";
  });
  const grid=[];
  for(let x=1;x<=11;x++) grid.push(e("line",{key:u(),x1:px(x),y1:tm,x2:px(x),y2:tm+H2,stroke:"rgba(130,120,200,0.15)",strokeWidth:1}));
  for(let y=ymin;y<=ymax;y++) grid.push(e("line",{key:u(),x1:lm,y1:py(y),x2:lm+W2,y2:py(y),stroke:"rgba(130,120,200,0.15)",strokeWidth:1}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...grid,
    // osi
    e("line",{key:u(),x1:lm,y1:py(0),x2:lm+W2,y2:py(0),stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{key:u(),x1:px(0)>lm?px(0):lm,y1:tm,x2:px(0)>lm?px(0):lm,y2:tm+H2,stroke:"var(--muted)",strokeWidth:1.5}),
    // oznake x
    ...[1,2,3,4,5,6,7,8,9,10].map(x=>e("text",{key:u(),x:px(x)-3,y:py(0)+14,fill:"var(--muted)",fontSize:9},x)),
    e("text",{key:u(),x:px(11)-3,y:py(0)+14,fill:"var(--muted)",fontSize:9},"11"),
    // oznake y
    ...[1,2,3].map(y=>e("text",{key:u(),x:lm-14,y:py(y)+4,fill:"var(--muted)",fontSize:9},y)),
    e("text",{key:u(),x:lm-18,y:py(-1)+4,fill:"var(--muted)",fontSize:9},"-1"),
    // os labele
    e("text",{key:u(),x:lm+W2+2,y:py(0)+5,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:lm-14,y:tm+4,fill:"var(--muted)",fontSize:10,fontStyle:"italic"},"y"),
    // graf
    e("path",{key:u(),d,fill:"none",stroke:"var(--text)",strokeWidth:2.4}),
    // istaknute tocke (otvoreni krug na x=1, y=1)
    e("circle",{key:u(),cx:px(1),cy:py(1),r:4.5,fill:"none",stroke:"var(--text)",strokeWidth:1.8}),
    // linija y=2 (za orijentaciju)
    e("line",{key:u(),x1:lm,y1:py(2),x2:lm+W2,y2:py(2),stroke:"rgba(232,197,71,0.35)",strokeWidth:1,strokeDasharray:"4,3"}),
    e("text",{key:u(),x:lm+W2+2,y:py(2)+4,fill:"#e8c547",fontSize:9},"2"),
    // zona pada i f<2 (zelena šrafura)
    e("rect",{key:u(),x:px(5),y:py(2),width:px(7)-px(5),height:py(0)-py(2),fill:"rgba(61,214,140,0.12)",stroke:"#3dd68c",strokeWidth:1,strokeDasharray:"3,2"})
  );
}

function SvgZad24a_2015JA(){
  const W=280,H=260,cx=140,cy=130,sc=24;
  const u=_uid15ja;
  const grid=[];
  for(let i=-5;i<=5;i++) grid.push(e("line",{key:u(),x1:cx+i*sc,y1:6,x2:cx+i*sc,y2:H-6,stroke:"rgba(130,120,200,0.15)",strokeWidth:1}));
  for(let i=-4;i<=4;i++) grid.push(e("line",{key:u(),x1:6,y1:cy-i*sc,x2:W-6,y2:cy-i*sc,stroke:"rgba(130,120,200,0.15)",strokeWidth:1}));
  // crtanje f(x)=-2x+1
  const x1v=-3,y1v=7,x2v=4,y2v=-7;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...grid,
    e("line",{key:u(),x1:6,y1:cy,x2:W-6,y2:cy,stroke:"var(--muted)",strokeWidth:1.8}),
    e("line",{key:u(),x1:cx,y1:H-6,x2:cx,y2:6,stroke:"var(--muted)",strokeWidth:1.8}),
    e("polygon",{key:u(),points:`${W-6},${cy} ${W-14},${cy-4} ${W-14},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{key:u(),points:`${cx},6 ${cx-4},14 ${cx+4},14`,fill:"var(--muted)"}),
    e("text",{key:u(),x:W-4,y:cy+5,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:cx+4,y:8,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:cx+4,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    e("text",{key:u(),x:cx+1*sc-4,y:cy+14,fill:"var(--muted)",fontSize:10},"1"),
    e("text",{key:u(),x:cx-16,y:cy-1*sc+4,fill:"var(--muted)",fontSize:10},"1"),
    // tocka (0,1) — y sjeciste
    e("circle",{key:u(),cx:cx,cy:cy-sc,r:5,fill:"none",stroke:"var(--text)",strokeWidth:1.8}),
    // pravac f(x)=-2x+1
    e("line",{key:u(),
      x1:cx+x1v*sc,y1:cy-y1v*sc,
      x2:cx+x2v*sc,y2:cy-y2v*sc,
      stroke:"#8b7cf8",strokeWidth:2.2,strokeDasharray:"none"
    }),
    // istaknute tocke
    e("circle",{key:u(),cx:cx,cy:cy-sc,r:4,fill:"#3dd68c"}),
    e("circle",{key:u(),cx:cx-sc,cy:cy+sc*2,r:4,fill:"#e8c547"})
  );
}

function SvgZad22b_2015JA(){
  const W=260,H=200;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const u=_uid15ja;
  const C=[60,160], B=[60,40], A=[220,160];
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    e("polygon",{key:u(),points:pts([A,B,C]),fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:2}),
    // pravokutni kut u C
    e("rect",{key:u(),x:C[0],y:C[1]-16,width:16,height:16,fill:"none",stroke:"var(--muted)",strokeWidth:1.5}),
    // oznake stranica
    e("text",{key:u(),x:C[0]-18,y:(C[1]+B[1])/2+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"a"),
    e("text",{key:u(),x:(A[0]+B[0])/2+4,y:(A[1]+B[1])/2-6,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"3a"),
    // oznake vrhova
    ...([["B",B,[-18,-6]],["C",C,[-18,6]],["A",A,[6,6]]]).map(([n,p,[ox,oy]])=>
      e("text",{key:u(),x:p[0]+ox,y:p[1]+oy,fill:"var(--text)",fontSize:13,fontStyle:"italic",fontWeight:"bold"},n)
    ),
    // kut A (tražen)
    e("text",{key:u(),x:A[0]-28,y:A[1]-8,fill:_BLUE,fontSize:10},"∠A=?")
  );
}

function SvgZad22a_2015JA(){
  const W=280,H=210;
  const A=[45,180], B=[235,180], C=[175,30];
  const t_E=1.962/2.2;
  const Ex=B[0]+(C[0]-B[0])*t_E;
  const Ey=B[1]+(C[1]-B[1])*t_E;
  const u=_uid15ja;
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    e("polygon",{key:u(),points:pts([A,B,C]),fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:2}),
    e("line",{key:u(),x1:A[0],y1:A[1],x2:Ex,y2:Ey,stroke:"#3dd68c",strokeWidth:2.2}),
    e("rect",{key:u(),x:Ex-9,y:Ey-9,width:9,height:9,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    ...[["A",A,[-18,8]],["B",B,[6,8]],["C",C,[-8,-12]]].map(([n,p,[ox,oy]])=>
      e("text",{key:u(),x:p[0]+ox,y:p[1]+oy,fill:"var(--text)",fontSize:13,fontStyle:"italic",fontWeight:"bold"},n)
    ),
    e("circle",{key:u(),cx:Ex,cy:Ey,r:4,fill:"#e8c547"}),
    e("text",{key:u(),x:Ex+7,y:Ey-3,fill:"#e8c547",fontSize:12,fontStyle:"italic"},"E"),
    e("text",{key:u(),x:(A[0]+Ex)/2-22,y:(A[1]+Ey)/2+5,fill:"#3dd68c",fontSize:10},"AE=3,6"),
    e("text",{key:u(),x:(A[0]+B[0])/2-20,y:A[1]+16,fill:"var(--muted)",fontSize:10},"AB=4,1"),
    e("text",{key:u(),x:(B[0]+C[0])/2+4,y:(B[1]+C[1])/2+5,fill:"var(--muted)",fontSize:10},"BC=2,2"),
    e("line",{key:u(),x1:Ex,y1:Ey,x2:C[0],y2:C[1],stroke:"#f87171",strokeWidth:2.5}),
    e("text",{key:u(),x:(Ex+C[0])/2+6,y:(Ey+C[1])/2,fill:"#f87171",fontSize:10,fontWeight:700},"CE=?")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: svedi obje strane na isti oblik (decimalni/razlomak) prije usporedbe.",topic:"br",points:1,
  q:"Koja je od navedenih nejednakosti istinita?",
  opts:["-5/7 < -1","-1/5 > -1/7","1/5 > 1/7","7/5 < 1"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"A: −5/7 ≈ −0,714. Usporedi s −1: −0,714 je VEĆI od −1 (negativni razlomak bliži nuli je veći). Nejednakost −5/7 < −1 je NETOČNA."},
    {txt:"B: −1/5 = −0,200; −1/7 ≈ −0,143. Vrijedi −0,200 < −0,143 (jer je −1/5 dalje od nule). Nejednakost −1/5 > −1/7 je NETOČNA."},
    {txt:"D: 7/5 = 1,4 > 1, pa je 7/5 < 1 NETOČNO. Distractor: A i D testiraju razumijevanje veličine kod negativnih razlomaka i nepravih razlomaka; B testira obrnut redoslijed kod negativnih razlomaka.",note:"diagnostika"},
    {txt:"C: 1/5 = 0,200 i 1/7 ≈ 0,143. Vrijedi 0,200 > 0,143, dakle [FRAC:1|5] > [FRAC:1|7] ✓ TOČNO ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: zamisli pizzu — 1/5 znači jedan od 5 jednakih dijelova (veći komad), a 1/7 jedan od 7 (manji komad). Veći broj komada → manji svaki komad.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za pozitivne razlomke s istim brojnikom, MANJI nazivnik daje VEĆI razlomak — funkcija 1/n je padajuća za n > 0.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za pozitivne razlomke s istim brojnikom, MANJI nazivnik daje VEĆI razlomak — funkcija 1/n je padajuća za n > 0.",
    "Intuicija: zamisli pizzu — 1/5 znači jedan od 5 jednakih dijelova (veći komad), a 1/7 jedan od 7 (manji komad). Veći broj komada → manji svaki komad.",
    "Česta greška: kod NEGATIVNIH razlomaka ova logika se OBRĆE. −1/5 je manje od −1/7 jer je DALJE od nule na brojevnom pravcu. Uvijek provjeri decimalnom aproksimacijom.",
    "Provjera ✓: opcija C je jedina s ispravnim smjerom i točnim brojevima: 0,200 > 0,143."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:2,type:"mc",warn:"Pazi: pomnoži s 3, podijeli s a → R − 2b = 3c/a, pa dodaj 2b.",topic:"al",points:1,
  q:"Čemu je jednak R iz formule c = (1/3)·a(R − 2b)?",
  opts:["R = 3c/a + 2b","R = 3c/(2ab)","R = c − a + 2b/3","R = c − a/3 + 2b"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Polazi od jednadžbe: c = (1/3)·a·(R − 2b). Pomnoži obje strane s 3 (ravnomjerno): 3c = a·(R − 2b)."},
    {txt:"Podijeli obje strane s a (uvjet: a ≠ 0): [FRAC:3c|a] = R − 2b."},
    {txt:"Distractor: B (3c/(2ab)) krivo umnaža a i 2b u nazivnik; C i D dijele samo POJEDINE članove s a umjesto cijele desne strane — to je tipična greška neravnomjernog dijeljenja u algebarskim izrazima.",note:"diagnostika"},
    {txt:"Prenesi 2b na lijevu stranu (dodaj 2b objema stranama): R = [FRAC:3c|a] + 2b ⇒ opt A",final:true,note:"verifikacija"},{txt:"Intuicija: 'oljušti' izraz oko R prema van — najprije ukloni faktor 1/3 (množenjem s 3), pa faktor a (dijeljenjem s a), pa konstantu −2b (prenošenjem).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri izoliranju varijable, primijeni iste inverzne operacije RAVNOMJERNO na obje strane jednadžbe; nikad ne dijeli samo dio izraza.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: pri izoliranju varijable, primijeni iste inverzne operacije RAVNOMJERNO na obje strane jednadžbe; nikad ne dijeli samo dio izraza.",
    "Intuicija: 'oljušti' izraz oko R prema van — najprije ukloni faktor 1/3 (množenjem s 3), pa faktor a (dijeljenjem s a), pa konstantu −2b (prenošenjem).",
    "Česta greška: dijeljenje samo pojedinih članova. Npr. iz c = a/3·R − 2ab/3 KRIVO bi bilo R = 3c/a − 2b/a; jer iako se a/3 dijeli, član 2ab/3 nije isto što i samostalni 2b.",
    "Provjera ✓: uvrsti R = 3c/a + 2b natrag u izvorni izraz: (1/3)·a·((3c/a + 2b) − 2b) = (1/3)·a·(3c/a) = c ✓"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:3,type:"mc",warn:"Pazi: r = 3,9 mm = 0,39 cm; V = (4/3)πr³; masa = gustoća·V; pazi na jedinice.",topic:"br",points:1,
  q:"Gustoća žive je 13,6 g/cm³. Kolika je masa kuglice žive promjera 7,8 mm? (Napomena: gustoća je omjer mase i obujma.)",
  opts:["2,59 g","3,38 g","25,99 g","33,79 g"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Pretvorba jedinica: promjer d = 7,8 mm = 0,78 cm (dijeli s 10). Polumjer r = d/2 = 0,39 cm."},
    {txt:"Volumen kugle: V = (4/3)·π·r³ = (4/3)·π·(0,39)³ = (4/3)·π·0,059319 ≈ 0,2485 cm³"},
    {txt:"Distractor: A (2,59 g) krivo koristi r umjesto r³ ili površinu kugle; C (25,99 g) i D (33,79 g) ZABORAVLJAJU pretvorbu mm → cm pa koriste preveliki broj (faktor 10³ = 1000 razlike u volumenu).",note:"diagnostika"},
    {txt:"Iz definicije gustoće ρ = m/V slijedi m = ρ·V = 13,6 g/cm³ · 0,2485 cm³ ≈ 3,376 g ≈ 3,38 g ⇒ opt B",final:true,note:"verifikacija"},{txt:"Intuicija: gustoća kaže koliko grama 'pakira' u 1 cm³. Pomnoži s ukupnim cm³ → ukupni grami.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: volumen kugle V = (4/3)·π·r³, gdje r je POLUMJER (pola promjera). Gustoća ρ = m/V pa masa m = ρ·V.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: volumen kugle V = (4/3)·π·r³, gdje r je POLUMJER (pola promjera). Gustoća ρ = m/V pa masa m = ρ·V.",
    "Intuicija: gustoća kaže koliko grama 'pakira' u 1 cm³. Pomnoži s ukupnim cm³ → ukupni grami.",
    "Česta greška: zaboraviti pretvorbu jedinica. Ako je ρ izraženo u g/cm³, polumjer MORA biti u cm (ne mm). Inače dobiješ faktor 1000 prevelik ili premali volumen.",
    "Provjera: 13,6 · 0,2485 ≈ 3,378 ≈ 3,38 ✓ (poredbeno s opcijom B)"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:4,type:"mc",warn:"Pazi: zbroj rješenja = −b/a = 6/a; izjednači s −2.",topic:"kv",points:1,
  q:"Za koju će vrijednost realnoga broja a zbroj rješenja jednadžbe ax² − 6x + 8 = 0 biti jednak -2?",
  opts:["a = -4","a = -3","a = 3","a = 4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Primijeni Vièteovu formulu na ax² + bx + c = 0: zbroj rješenja = −b/a. Ovdje je b = −6, a = a (parametar)."},
    {txt:"Zbroj rješenja = −(−6)/a = 6/a. Postavi traženi uvjet: 6/a = −2."},
    {txt:"Distractor: A (a = −4) i C (a = 3) testiraju krivi predznak ili krivu vrijednost b u formuli; D (a = 4) zaboravlja minus znak u −b/a (uzima b/a = 6/a = −2, što daje a = −3 ali s krivim znakom u zaključku).",note:"diagnostika"},
    {txt:"Riješi za a: a = 6/(−2) = −3 ⇒ opt B",final:true,note:"verifikacija"},{txt:"Intuicija: razvij (x − x₁)(x − x₂) = x² − (x₁ + x₂)·x + x₁·x₂; usporedi s normaliziranim x² + (b/a)x + (c/a) → koeficijenti daju Vièteove veze.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Vièteove formule za kvadratnu jednadžbu ax² + bx + c = 0: zbroj rješenja = −b/a, umnožak rješenja = c/a.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Vièteove formule za kvadratnu jednadžbu ax² + bx + c = 0: zbroj rješenja = −b/a, umnožak rješenja = c/a.",
    "Intuicija: razvij (x − x₁)(x − x₂) = x² − (x₁ + x₂)·x + x₁·x₂; usporedi s normaliziranim x² + (b/a)x + (c/a) → koeficijenti daju Vièteove veze.",
    "Česta greška: zaboraviti minus u −b/a kod negativnih b. Ovdje je b = −6 (negativan), pa je −b = +6, a 6/a = −2 daje NEGATIVAN a = −3.",
    "Provjera: za a = −3, jednadžba je −3x² − 6x + 8 = 0; rješenja x = (6 ± √(36 + 96))/(−6) = (6 ± √132)/(−6); zbroj = 12/(−6) = −2 ✓"
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:5,type:"mc",warn:"Pazi: n = 11k + 4; provjeri koji ponuđeni broj ima taj oblik.",topic:"br",points:1,
  q:"Koji od navedenih cijelih brojeva n pri dijeljenju s 11 daje ostatak 4, za sve cijele brojeve k?",
  opts:["n = 4k − 11","n = 7k − 11","n = 11k − 4","n = 11k − 7"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Uvjet: n ≡ 4 (mod 11). Drugim riječima, n = 11k + 4 za neki cijeli broj k. Provjeri svaku opciju modulo 11."},
    {txt:"D: n = 11k − 7. Zapis u obliku 11·k′ + r: 11k − 7 = 11(k − 1) + 11 − 7 = 11(k−1) + 4. Dakle ostatak = 4 ✓"},
    {txt:"Distractor: A (n = 4k − 11): k=3 → n=1, 1 mod 11 = 1 ≠ 4. B (n = 7k − 11): k=2 → n=3 ≠ 4. C (n = 11k − 4): n = 11(k−1)+7, ostatak 7, ne 4 — najsličnija forma ali krivi predznak.",note:"diagnostika"},
    {txt:"Konkretne provjere: k=1 → n=4 (ostatak 4 ✓); k=2 → n=15 = 11·1+4 ✓; k=0 → n=−7 = 11·(−1)+4 ✓ ⇒ opt D",final:true,note:"verifikacija"},{txt:"Intuicija: ekvivalentni zapisi: n = 11k + 4 (standardni); n = 11k′ − 7 (jer −7 + 11 = 4, posuđujemo jedinicu); n = 11k″ + 15 (jer 15 − 11 = 4).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cijeli broj n daje ostatak r pri dijeljenju s m ⟺ n = m·k + r za neki cijeli k, gdje je 0 ≤ r < m.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: cijeli broj n daje ostatak r pri dijeljenju s m ⟺ n = m·k + r za neki cijeli k, gdje je 0 ≤ r < m.",
    "Intuicija: ekvivalentni zapisi: n = 11k + 4 (standardni); n = 11k′ − 7 (jer −7 + 11 = 4, posuđujemo jedinicu); n = 11k″ + 15 (jer 15 − 11 = 4).",
    "Česta greška: zbuniti se sa znakovima. (−7) mod 11 = 4 (ne −7 ili 7), jer modulo uvijek vraća nenegativan ostatak u rasponu [0, m−1].",
    "Provjera: za bilo koji cijeli k, n = 11k − 7 daje cijeli broj s ostatkom 4 pri dijeljenju s 11."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:6,img:true,type:"mc",warn:"Pazi: odredi kvadrant iz predznaka sin i cos prikazane točke.",topic:"trig",points:1,img:true,
  q:"Realnome broju t eksponencijalnim je preslikavanjem (namatanjem pravca na kružnicu) pridružena točka E(t) na brojevnoj kružnici sa slike. Koja od navedenih tvrdnja je točna za vrijednosti sinusa i tangensa toga broja t?",
  opts:["sin t > 0, tg t > 0","sin t > 0, tg t < 0","sin t < 0, tg t < 0","sin t < 0, tg t > 0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Iz slike: točka E(t) leži u III. kvadrantu (lijevo-dolje od ishodišta), pa su obje koordinate negativne: x < 0 i y < 0."},
    {txt:"Na brojevnoj kružnici (jediničnoj): sin t = y-koordinata = y < 0 (negativan), cos t = x-koordinata = x < 0 (negativan)."},
    {txt:"Distractor: A (oba +) odgovara I. kvadrantu; B (sin>0, tg<0) je II. kvadrant; C (oba −) je NEMOGUĆE jer tg = sin/cos: ako oba imaju isti predznak, tg je pozitivan.",note:"diagnostika"},
    {txt:"Tangens: tg t = sin t / cos t = (−)/(−) = pozitivan broj > 0. Dakle sin t < 0 i tg t > 0 ⇒ opt D",final:true,note:"verifikacija"},{txt:"Intuicija: brojevna kružnica ima polumjer 1; točka E(t) ima koordinate (cos t, sin t). Predznak ovisi o kvadrantu u kojem se nalazi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo predznaka po kvadrantima: I — sve trig. funkcije pozitivne; II — samo sin; III — samo tg (i ctg); IV — samo cos. Mnemonik 'ASTC': All-Sine-Tangent-Cosine.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo predznaka po kvadrantima: I — sve trig. funkcije pozitivne; II — samo sin; III — samo tg (i ctg); IV — samo cos. Mnemonik 'ASTC': All-Sine-Tangent-Cosine.",
    "Intuicija: brojevna kružnica ima polumjer 1; točka E(t) ima koordinate (cos t, sin t). Predznak ovisi o kvadrantu u kojem se nalazi.",
    "Česta greška: zamijeniti sin i cos s y i x. Zapamti: sin = y (vertikala), cos = x (horizontala). Tangens je omjer (sin/cos).",
    "Provjera ✓: za točku u III. kvadrantu, npr. t = 5π/4: cos(5π/4) = −√2/2 < 0; sin(5π/4) = −√2/2 < 0; tg(5π/4) = sin/cos = (−)/(−) = +1 > 0 ✓"
  ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]},
  {id:7,type:"mc",warn:"Pazi: poveži omjere preko zajedničke jedinice; izrazi sve u istoj cijeni pa riješi.",topic:"br",points:1,
  q:"U knjižari tri tehničke olovke koštaju isto kao dvije bilježnice, a četiri bilježnice isto kao pet markera. Kolika je cijena jedne tehničke olovke ako je cijena jednoga markera 12,60 kuna?",
  opts:["7,88 kn","10,50 kn","20,16 kn","21,00 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Označi cijene: O = olovka, B = bilježnica, M = marker. Zadane jednakosti: 3O = 2B, 4B = 5M, M = 12,60 kn."},
    {txt:"Iz druge jednakosti: B = (5M)/4 = (5 · 12,60)/4 = 63,00/4 = 15,75 kn (cijena jedne bilježnice)."},
    {txt:"Distractor: A (7,88) krivo postavi proporciju (npr. 3O = 5M direktno); C (20,16) koristi 3O = 4B umjesto 3O = 2B; D (21,00) udvostručuje cijenu B umjesto da je dijeli s 3.",note:"diagnostika"},
    {txt:"Iz prve jednakosti: O = (2B)/3 = (2 · 15,75)/3 = 31,50/3 = 10,50 kn ⇒ opt B",final:true,note:"verifikacija"},{txt:"Intuicija: lanac M → B → O. Iz markera dobiješ cijenu bilježnice, iz bilježnice dobiješ cijenu olovke.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod lanca proporcija idi KORACIMA — svaki korak koristi jedan zadani omjer; ne pokušavaj direktno povezati marker s olovkom.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kod lanca proporcija idi KORACIMA — svaki korak koristi jedan zadani omjer; ne pokušavaj direktno povezati marker s olovkom.",
    "Intuicija: lanac M → B → O. Iz markera dobiješ cijenu bilježnice, iz bilježnice dobiješ cijenu olovke.",
    "Česta greška: zamijeniti smjer proporcije. '3 olovke koštaju kao 2 bilježnice' znači 3·O = 2·B (jednakost ukupnih iznosa), pa O = 2B/3 (ne 3B/2).",
    "Provjera ✓: 3 olovke = 3·10,50 = 31,50 kn = 2·15,75 = 2 bilježnice ✓; 4 bilježnice = 4·15,75 = 63,00 kn = 5·12,60 = 5 markera ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:8,img:true,type:"mc",warn:"Pazi: cos φ = (a · b)/(|a|·|b|); a · b = (−3)(−6) + 4·1.",topic:"anal",points:1,
  q:"Kolika je mjera kuta između vektora a⃗ = -3i⃗ + 4j⃗ i b⃗ = -6i⃗ + j⃗?",
  opts:["35,88°","43,67°","46,33°","52,59°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Skalarni (dot) produkt: a⃗·b⃗ = aₓ·bₓ + aᵧ·bᵧ = (−3)·(−6) + (4)·(1) = 18 + 4 = 22"},
    {txt:"Moduli (norme): |a⃗| = √((−3)² + 4²) = √(9 + 16) = √25 = 5; |b⃗| = √((−6)² + 1²) = √(36 + 1) = √37 ≈ 6,083"},
    {txt:"cos θ = (a⃗·b⃗)/(|a⃗|·|b⃗|) = 22/(5·√37) = [FRAC:22|5√37] ≈ 22/30,414 ≈ 0,7234"},
    {txt:"Distractor: A (35,88°) krivo izračunata norma jednog vektora; C (46,33°) je 90° − 43,67° (nadopunjavajući kut); D (52,59°) krivi arccos vrijednost.",note:"diagnostika"},
    {txt:"θ = arccos(0,7234) ≈ 43,67° ⇒ opt B",final:true,note:"verifikacija"},{txt:"Intuicija: skalarni produkt mjeri 'koliko vektori pokazuju u istom smjeru'. Maksimum (= |a⃗|·|b⃗|) za paralelne; nula za okomite; minimum (−|a⃗|·|b⃗|) za antiparalelne.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinus kuta između dvaju vektora je cos θ = (a⃗·b⃗) / (|a⃗|·|b⃗|), gdje je θ ∈ [0°, 180°].",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kosinus kuta između dvaju vektora je cos θ = (a⃗·b⃗) / (|a⃗|·|b⃗|), gdje je θ ∈ [0°, 180°].",
    "Intuicija: skalarni produkt mjeri 'koliko vektori pokazuju u istom smjeru'. Maksimum (= |a⃗|·|b⃗|) za paralelne; nula za okomite; minimum (−|a⃗|·|b⃗|) za antiparalelne.",
    "Česta greška: zaboraviti kvadrat pri računanju norme (|a⃗| = √(aₓ² + aᵧ²), NE √(aₓ + aᵧ)); ili neispravno koristiti arccos na negativnom broju (treba znati da je θ tupokutni).",
    "Provjera ✓: cos(43,67°) ≈ 0,7234. Uvrsti natrag: 0,7234 · 5 · 6,083 ≈ 22,00 ✓ (odgovara izračunatom a⃗·b⃗ = 22)"
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]},
  {id:9,img:true,type:"mc",warn:"Pazi: tangente iz iste točke su jednake, a polumjer ⊥ tangenta; iskoristi trokut/četverokut sa središtem.",topic:"geom",points:2,img:true,ex:"Tangentno-tangentni kut + upisani kut: kombinacija dvaju klasičnih poučaka o kružnici. Najčešća greška studenata: poistovjećivanje vanjskog kuta tangenti s polovinom središnjeg.",
  q:"Iz točke D su na kružnicu povučene tangente kao na skici. Kut pri D iznosi 82°. Kolika je mjera označenoga kuta ∠ABS?",
  opts:["41°","45°","49°","60°"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Označi: S = središte kružnice, A i B = dirališta tangenti, D = vanjska točka (vrh kuta tangenti). Zadano: ∠ADB = 82°."},
    {txt:"Tangenta je okomita na polumjer u dirališta: ∠DAS = ∠DBS = 90°. Četverokut DASB ima zbroj kutova 360°."},
    {txt:"Iz zbroja kutova: ∠ADB + ∠ASB + 90° + 90° = 360° ⇒ ∠ASB = 360° − 82° − 180° = 98°. Dakle središnji kut nad lukom AB je 98°."},
    {txt:"Distractor: A (41°) testira interpretaciju kao jednakokračan trokut s vrhom u S; B (45°) i D (60°) testiraju standardne 'krasne kutove' greške bez geometrijske podloge.",note:"diagnostika"},
    {txt:"∠ABS je upisani kut nad lukom AS koji ne sadržava B (točka B leži na kružnici, oznake A, B, S iz skice). Po poučku o upisanom kutu: ∠upisani = (1/2)·∠središnji nad istim lukom. Središnji kut nad AS = 98°/2 = 49° (jer je AS pola kružnice nasuprot strani DB tangentskog kuta). Stoga ∠ABS = 49° ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2: zbroj kutova četverokuta = 360°; za kvadrilateral DASB s dva pravoga kuta dobije se ∠ADB + ∠ASB = 180°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo 1: tangenta na kružnicu okomita je na polumjer kroz dirališta (∠ između tangente i polumjera = 90°).",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo 1: tangenta na kružnicu okomita je na polumjer kroz dirališta (∠ između tangente i polumjera = 90°).",
    "Pravilo 2: zbroj kutova četverokuta = 360°; za kvadrilateral DASB s dva pravoga kuta dobije se ∠ADB + ∠ASB = 180°.",
    "Pravilo 3 (upisani kut): kut s vrhom na kružnici i krakovima koji prolaze rubovima luka jednak je polovici središnjeg kuta nad istim lukom.",
    "Intuicija: dva 'kuta' su povezana — kut tangenti (vanjski, kod D) i središnji (unutarnji, kod S) su komplementarni do 180° (zbog dva prava kuta u dirališta). Upisani kut s ruba kružnice 'vidi' luk pod pola središnjeg.",
    "Česta greška: direktno dijeliti 82° s 2 (= 41°), zaboravljajući razliku između središnjeg i upisanog kuta. Pravilan put: 82° → 98° (središnji nad AB) → 49° (upisani s vrha B nad lukom AS).",
    "Provjera ✓: 82° + 98° = 180° (kvadrilateral DASB s dva 90°) ✓; upisani kut 49° = 98°/2 (poučak o upisanom kutu) ✓"
  ]},
  {id:10,type:"mc",warn:"Pazi: parna ⇔ f(−x) = f(x) (simetrija oko osi y).",topic:"lin",points:2,ex:"Test parnosti/neparnosti funkcija. Ključno: i uvjet f(−x)=f(x) I uvjet simetrične domene. Polinomi samo s parnim potencijama (x²ⁿ) su parni; nepolinomske funkcije (log, korijen) trebaju posebnu pažnju.",
  q:"Koja je od navedenih funkcija parna?",
  opts:["f(x) = 10 − x","f(x) = log₂x","f(x) = x·cos x","f(x) = x² + 1"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Definicija parne funkcije: f(−x) = f(x) za SVAKI x iz domene. Domena mora biti simetrična oko nule. Testiraj svaku opciju."},
    {txt:"A: f(x) = 10 − x. f(−x) = 10 − (−x) = 10 + x. Vrijedi f(−x) ≠ f(x) (osim za x = 0). NIJE parna."},
    {txt:"B: f(x) = log₂x. Domena: x > 0 (nije simetrična oko 0). Ne može biti parna ni neparna jer log₂(−x) nije definirano za x > 0."},
    {txt:"C: f(x) = x · cos x. f(−x) = (−x) · cos(−x) = (−x) · cos x = −x · cos x = −f(x). To je NEPARNA funkcija, ne parna."},
    {txt:"Distractor: A testira 'samo zamjenu znaka' (treba SVE x → −x); B testira pojam simetrične domene (kritično — ne svaka funkcija je ni parna ni neparna); C testira razliku između parne i neparne (proizvod neparne × parne = neparna).",note:"diagnostika"},
    {txt:"D: f(x) = x² + 1. f(−x) = (−x)² + 1 = x² + 1 = f(x) ✓. Domena ℝ (simetrična). PARNA ⇒ opt D",final:true,note:"verifikacija"},{txt:"Intuicija: graf parne funkcije je simetričan preko y-osi (kao zrcalo). Graf neparne je simetričan oko ishodišta (rotacija 180°).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: f je parna ⟺ (i) domena je simetrična oko 0, i (ii) f(−x) = f(x) za svaki x iz domene. Polinomi samo s PARNIM potencijama (x⁰, x², x⁴, ...) su parni.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: f je parna ⟺ (i) domena je simetrična oko 0, i (ii) f(−x) = f(x) za svaki x iz domene. Polinomi samo s PARNIM potencijama (x⁰, x², x⁴, ...) su parni.",
    "Intuicija: graf parne funkcije je simetričan preko y-osi (kao zrcalo). Graf neparne je simetričan oko ishodišta (rotacija 180°).",
    "Česta greška: zaboraviti uvjet SIMETRIČNE DOMENE. log₂x s domenom (0, ∞⟩ ne može biti ni parna ni neparna jer 'druga strana' nije definirana.",
    "Provjera: za D, f(2) = 5, f(−2) = 5 ✓; f(3) = 10, f(−3) = 10 ✓ (simetrija oko y-osi)."
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:11,type:"mc",warn:"Pazi: −3x² + 1 ima maksimum 1 (u x = 0) → eksponent ≤ 1, pa 2^(...) ∈ ⟨0, 2]; na kraju dodaj 4.",topic:"exp",points:2,ex:"Slika složene funkcije a^g(x)+c. Test razumijevanja: kako se transformira slika eksponenta kroz eksponencijalnu funkciju i pomak. Ključ: razlika između DOSEGNUTOG i ASIMPTOTSKOG ekstrema.",
  q:"Čemu je jednaka slika funkcije f(x) = 2^(−3x²+1) + 4? (Napomena: Slika funkcije je skup svih vrijednosti te funkcije.)",
  opts:["⟨−∞, 6⟩","⟨4, 6]","⟨4, 6⟩","⟨6, +∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Eksponent g(x) = −3x²+1: kvadratna, a=−3<0 → maksimum. Max u x=0: g(0)=1."},
    {txt:"Granice: kako x→±∞, g(x)→−∞ (eksponent neograničeno pada)"},
    {txt:"2^g(x): max kod g=1 → 2¹=2 (doseže se u x=0); min kako g→−∞ → 2^g→0 (ne doseže nulu)"},
    {txt:"Skup vrijednosti 2^g(x) je ⟨0, 2]. f(x) = 2^g(x) + 4 → ⟨0+4, 2+4] = ⟨4, 6] → opt B"},
    {txt:"Distractor: A (⟨−∞, 6⟩) zaboravlja da f ne ide ispod 4; C (⟨4, 6⟩) zaboravlja da je max dosegnut; D (⟨6, +∞⟩) je kompletno krivi smjer",note:"diagnostika"},
    {txt:"Provjera: f(0) = 2¹ + 4 = 6 ✓ (max se doseže); f(10) ≈ 2^(−299) + 4 ≈ 4,0000... (asimptotski prilazi 4 odozgo)",final:true,note:"verifikacija"},{txt:"Intuicija: nacrtaj prvo g(x) = −3x²+1 (parabola otvorena dolje s maksimumom u (0, 1)). Onda 2^g(x) ima max 2¹ = 2 u istoj x; asimptota prema 0. Konačno dodaj +4: slika postaje ⟨0+4, 2+4] = ⟨4, 6].",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za f(x) = a^g(x) + c (a > 0), slika funkcije ovisi o slici eksponenta g(x). Ako g(x) ima max M ali ne min (→ −∞⟩, tada a^g(x) ima max a^M (dosegnut) i asimptotu prema 0 (nedosegnuta). Pomak +c diže cijelu sliku.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za f(x) = a^g(x) + c (a > 0), slika funkcije ovisi o slici eksponenta g(x). Ako g(x) ima max M ali ne min (→ −∞⟩, tada a^g(x) ima max a^M (dosegnut) i asimptotu prema 0 (nedosegnuta). Pomak +c diže cijelu sliku.",
    "Intuicija: nacrtaj prvo g(x) = −3x²+1 (parabola otvorena dolje s maksimumom u (0, 1)). Onda 2^g(x) ima max 2¹ = 2 u istoj x; asimptota prema 0. Konačno dodaj +4: slika postaje ⟨0+4, 2+4] = ⟨4, 6].",
    "Česta greška: zaboraviti je li rub UKLJUČEN. Ako se ekstrem DOSEŽE (kao 6 = f(0)), koristi zatvorenu zagradu ]; ako se SAMO ASIMPTOTSKI prilazi (kao 4 kada x → ±∞⟩, koristi otvorenu ⟨.",
    "Alt metoda: derivacija f′(x) = 2^(−3x²+1)·ln2·(−6x). Jedina nultočka u x = 0 (jer −6x = 0); f′ mijenja znak iz + (za x < 0) u − (za x > 0), pa je x = 0 maksimum. f(0) = 2¹ + 4 = 6.",
    "Provjera ✓: f(0) = 6 (max se doseže); f(±1) = 2⁻² + 4 = 4,25; f(±10) ≈ 2⁻²⁹⁹ + 4 ≈ 4,0000... (asimptotski prilazi 4 odozgo)."
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."]},
  {id:12,type:"mc",warn:"Pazi: kvadriraj (obje strane ≥ 0) → −4x + 25 ≤ 16; uzmi i domenu (−4x + 25 ≥ 0), pa broji prirodne.",topic:"al",points:2,ex:"Nejednadžba s korijenom + brojanje cjelobrojnih rješenja. Test: domena korijena + smjer nejednakosti pri dijeljenju s negativnim brojem. Lako napraviti grešku zaboravljanjem jednog od ova dva uvjeta.",
  q:"Koliko je prirodnih brojeva među rješenjima nejednadžbe √(-4x + 25) ≤ 4?",
  opts:["dva","tri","četiri","pet"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Domena korijena: −4x + 25 ≥ 0 ⇒ x ≤ 25/4 = 6,25. Mora vrijediti uz svako rješenje."},
    {txt:"Nejednadžba √u ≤ 4 (u ≥ 0): kvadriraj (oba su nenegativna, smjer ostaje) → u ≤ 16, tj. −4x + 25 ≤ 16."},
    {txt:"Riješi: −4x ≤ −9 ⇒ x ≥ 9/4 = 2,25 (smjer se mijenja jer dijelimo s negativnim −4)."},
    {txt:"Distractor: A (dva) zaboravlja gornju granicu ili broji samo 2 prirodna; B (tri) propusti jedan rub; D (pet) ubraja 2 (ali 2 < 2,25) ili 7 (ali 7 > 6,25).",note:"diagnostika"},
    {txt:"Spoj uvjeta: 2,25 ≤ x ≤ 6,25, tj. x ∈ [[FRAC:9|4], [FRAC:25|4]]. Prirodni brojevi u tom intervalu: {3, 4, 5, 6} = 4 broja ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: √u ≤ 4 znači u ≤ 16, JER je √ monotono rastuća za u ≥ 0. Plus moramo provjeriti da je u ≥ 0 (inače √u nije realan).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri rješavanju √u ≤ k (k ≥ 0): KVADRIRAJ obje strane (sigurno jer su nenegativne) i dodaj uvjet u ≥ 0 (domena korijena).",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: pri rješavanju √u ≤ k (k ≥ 0): KVADRIRAJ obje strane (sigurno jer su nenegativne) i dodaj uvjet u ≥ 0 (domena korijena).",
    "Intuicija: √u ≤ 4 znači u ≤ 16, JER je √ monotono rastuća za u ≥ 0. Plus moramo provjeriti da je u ≥ 0 (inače √u nije realan).",
    "Česta greška: zaboraviti uvjet domene (može dati 'rješenja' koja nisu dopuštena); ili zaboraviti promijeniti smjer nejednakosti pri dijeljenju s negativnim brojem (−4).",
    "Provjera ✓: u rubu x = 9/4: √(−9 + 25) = √16 = 4 ≤ 4 ✓ (jednakost). U rubu x = 25/4: √0 = 0 ≤ 4 ✓. Sredina x = 5: √5 ≈ 2,24 ≤ 4 ✓."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:13,type:"mc",warn:"Pazi: asimptota daje omjer koeficijenata; uvrsti točku T da odrediš parametre hiperbole.",topic:"anal",points:2,ex:"Određivanje jednadžbe hiperbole iz asimptote i točke. Ključ: parametrizacija (a=4k, b=3k) jer jedan uvjet (omjer b/a) ne određuje konkretne vrijednosti — treba drugi (točka).",
  q:"Kako glasi jednadžba hiperbole koja prolazi točkom T(10, 9/2), a pravac 3x + 4y = 0 joj je asimptota?",
  opts:["x²/4 − y²/3 = 1","x²/16 − y²/9 = 1","x²/64 − y²/36 = 1","x²/80 − y²/81 = 1"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Asimptota 3x + 4y = 0 ⇒ y = −(3/4)x. Hiperbola oblika x²/a² − y²/b² = 1 ima asimptote y = ±(b/a)x, pa b/a = 3/4."},
    {txt:"Postavi parametarsku reprezentaciju: a = 4k, b = 3k za neki pozitivan k. Jednadžba postaje x²/(16k²) − y²/(9k²) = 1."},
    {txt:"Uvrsti T(10, 9/2): 100/(16k²) − (81/4)/(9k²) = 1. Pojednostavi: 100/(16k²) = 25/(4k²); (81/4)/(9k²) = 81/(36k²) = 9/(4k²)."},
    {txt:"25/(4k²) − 9/(4k²) = 16/(4k²) = 4/k² = 1 ⇒ k² = 4. Stoga a² = 16k² = 64, b² = 9k² = 36."},
    {txt:"Distractor: A (x²/4 − y²/3 = 1) ostavlja k = 1 (zaboravlja uvrstiti T); B (x²/16 − y²/9 = 1) uzima a = 4, b = 3 doslovno bez parametra; D (x²/80 − y²/81 = 1) miješa hiperbolu s elipsom ili koristi pogrešnu vezu.",note:"diagnostika"},
    {txt:"Jednadžba: [FRAC:x²|64] − [FRAC:y²|36] = 1 ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: jedan uvjet (asimptota) daje omjer; treba drugi uvjet (točka) da odredi 'veličinu' hiperbole. Parametrizacija s k rješava ovo.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za hiperbolu x²/a² − y²/b² = 1, asimptote su y = ±(b/a)x. Nagib asimptote odlučuje OMJER b/a, ne konkretne vrijednosti.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: za hiperbolu x²/a² − y²/b² = 1, asimptote su y = ±(b/a)x. Nagib asimptote odlučuje OMJER b/a, ne konkretne vrijednosti.",
    "Intuicija: jedan uvjet (asimptota) daje omjer; treba drugi uvjet (točka) da odredi 'veličinu' hiperbole. Parametrizacija s k rješava ovo.",
    "Česta greška: pretpostaviti a = 4, b = 3 iz nagiba i ne provjeriti prolazi li T(10, 9/2) tom hiperbolom: 100/16 − 81/36 = 6,25 − 2,25 = 4 ≠ 1. Krivi izbor.",
    "Provjera ✓: x²/64 − y²/36 = 1 s T(10, 9/2): 100/64 − (81/4)/36 = 25/16 − 81/144 = 225/144 − 81/144 = 144/144 = 1 ✓. Asimptote: y = ±(6/8)x = ±(3/4)x, što odgovara pravcu 3x + 4y = 0 ✓"
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]},
  {id:14,type:"mc",warn:"Pazi: paralele stvaraju manje slične trokute; omjer površina = kvadrat omjera (2/7 i 5/7).",topic:"geom",points:2,ex:"Pravilo kvadrata: omjer površina sličnih likova = (omjer linearnih dimenzija)². Klasična zamka: studenti koriste linearni omjer 2/7 umjesto kvadrata (2/7)². Test razumijevanja skaliranja u 2D.",
  q:"Zadan je trokut ABC površine 35 cm². Točka Q dijeli stranicu AB u omjeru 2 : 5. Kroz točku Q povučene su paralele s ostalim dvjema stranicama trokuta čime je trokut podijeljen na dva trokuta i paralelogram. Koliko iznosi površina manjega od tako dobivenih trokuta?",
  opts:["20/7 cm²","20/3 cm²","10 cm²","14 cm²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Q dijeli AB u omjeru 2:5, pa AQ:QB = 2:5. Stoga AQ = (2/7)·AB i QB = (5/7)·AB (od ukupno 7 dijelova)."},
    {txt:"Paralele iz Q s drugim dvjema stranicama tvore: manji trokut s vrhom A (sličan ABC s koeficijentom AQ/AB = 2/7), paralelogram u sredini, veći trokut s vrhom B (sličan ABC s koef. QB/AB = 5/7)."},
    {txt:"Manji trokut je sličan ABC s koeficijentom k = 2/7. Pravilo kvadrata za površine sličnih likova: omjer površina = k²."},
    {txt:"Distractor: B (20/3) koristi 2/5 umjesto 2/7 (krivo dijeljenje omjera); C (10 cm²) koristi LINEARNI omjer 2/7·35 = 10 (zaboravlja kvadrat); D (14 cm²) koristi 2/5·35 = 14 (kombinacija dviju grešaka).",note:"diagnostika"},
    {txt:"P(manji) = k²·P(ABC) = (2/7)²·35 = (4/49)·35 = 140/49 = [FRAC:20|7] cm² ⇒ opt A",final:true,note:"verifikacija"},{txt:"Intuicija: ako se sve linearne dimenzije pomnože faktorom k, tada se površina (kombinacija dvije perpendikularne dimenzije) skalira s k·k = k².",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod SLIČNIH likova (isti oblik, različita veličina), omjer odgovarajućih duljina = k, a omjer površina = k². Ovo se zove pravilo kvadrata.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kod SLIČNIH likova (isti oblik, različita veličina), omjer odgovarajućih duljina = k, a omjer površina = k². Ovo se zove pravilo kvadrata.",
    "Intuicija: ako se sve linearne dimenzije pomnože faktorom k, tada se površina (kombinacija dvije perpendikularne dimenzije) skalira s k·k = k².",
    "Česta greška: koristiti pogrešan omjer (npr. 2:5 umjesto 2:7). U omjeru 'a : b' AB se dijeli na a + b dijelova, pa AQ čini a/(a+b) od AB.",
    "Provjera: ukupna P = P(manji) + P(veći) + P(paralelogram) = (2/7)²·35 + (5/7)²·35 + 2·(2/7)·(5/7)·35 = 20/7 + 125/7 + 100/7 = 245/7 = 35 ✓"
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:15,type:"mc",warn:"Pazi: lančano množenje postotaka — masti = masa·0,132·0,245; pazi što se točno traži.",topic:"br",points:2,ex:"Lanac postotaka i konzervacija mliječne masti. Test razumijevanja koja veličina se očuva (mast) kroz transformacije (mlijeko → vrhnje → maslac). Najčešća greška: množenje umjesto dijeljenja u zadnjem koraku.",
  q:"Maslac se dobiva tehnološkom obradom vrhnja iz mlijeka. Svježe mlijeko sadržava 13,2 % vrhnja, a vrhnje sadržava 24,5 % mliječne masti. Koliko se kilograma maslaca, koji sadržava 82 % mliječne masti, dobije iz 350 kg mlijeka?",
  opts:["8,32 kg","9,28 kg","13,80 kg","23,75 kg"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Iz 350 kg mlijeka, vrhnja se dobije: 350 · 0,132 = 46,2 kg (13,2 % od mlijeka)."},
    {txt:"Mliječna mast u vrhnju: 46,2 · 0,245 = 11,319 kg (24,5 % od vrhnja). To je ukupna količina masti koja se prenosi u maslac."},
    {txt:"Distractor: A (8,32 kg) pomnoži krivim faktorom u koraku 3; B (9,28 kg) zamijeni redoslijed udjela; D (23,75 kg) možda primjenjuje 13,2 % direktno na 350 kg ili zaboravlja korak vrhnja.",note:"diagnostika"},
    {txt:"Maslac sadrži 82 % mliječne masti, pa ako je m_maslac masa maslaca: 0,82 · m_maslac = 11,319 ⇒ m_maslac = 11,319 / 0,82 ≈ 13,80 kg ⇒ opt C",final:true,note:"verifikacija"},{txt:"Intuicija: pratimo MAST kroz tri tvari: mlijeko → vrhnje → maslac. Postotak masti raste (13,2 % · 24,5 % ≈ 3,23 % u mlijeku, 24,5 % u vrhnju, 82 % u maslacu), dok ukupna masa pada.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri konzervaciji jedne komponente (mliječna mast) kroz lanac transformacija, masa te komponente OSTAJE ISTA, ali se mijenja njena koncentracija u različitim tvarima.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: pri konzervaciji jedne komponente (mliječna mast) kroz lanac transformacija, masa te komponente OSTAJE ISTA, ali se mijenja njena koncentracija u različitim tvarima.",
    "Intuicija: pratimo MAST kroz tri tvari: mlijeko → vrhnje → maslac. Postotak masti raste (13,2 % · 24,5 % ≈ 3,23 % u mlijeku, 24,5 % u vrhnju, 82 % u maslacu), dok ukupna masa pada.",
    "Česta greška: pomnožiti s 0,82 umjesto podijeliti u zadnjem koraku. 'Maslac sadrži 82 % masti' znači m_masti = 0,82 · m_maslac, pa m_maslac = m_masti / 0,82.",
    "Provjera: udjeli — 13,2 % · 24,5 % = 3,234 % mliječne masti u mlijeku. 350 · 0,03234 ≈ 11,319 kg masti. 11,319/0,82 ≈ 13,80 kg maslaca ✓"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Napišite broj √3 + 4^{1,25} u decimalnome zapisu zaokružen na četiri decimale.",
  sol:{ans:"7,3889",alt:["7,3889","7.3889","≈ 7,3889"]},
  steps:[
    {txt:"Pretvori decimalni eksponent u razlomak: 1,25 = 5/4. Dakle 4^(1,25) = 4^(⁵⁄⁴)."},
    {txt:"Pojednostavi bazu: 4 = 2², pa 4^(⁵⁄⁴) = (2²)^(⁵⁄⁴) = 2^(2·5/4) = 2^(⁵⁄²) = 2² · 2^(¹⁄²) = 4√2."},
    {txt:"Brojčano: 4√2 ≈ 4 · 1,41421 ≈ 5,6569. Također √3 ≈ 1,7321."},
    {txt:"Zbroj: √3 + 4^(1,25) ≈ 1,7321 + 5,6569 = 7,3889 (zaokruženo na 4 decimale) ⇒ 7,3889",final:true,note:"verifikacija"},{txt:"Intuicija: 4^(⁵⁄⁴) je 'malo više od 4¹' (jer je 5/4 = 1,25 blizu 1) i 'manje od 4²' — približno 5,66.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Decimalni eksponent uvijek prebaci u razlomak prije dalje manipulacije.",note:"postupak",final:true},{txt:"Točan odgovor: 7,3889 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Decimalni eksponent uvijek prebaci u razlomak prije dalje manipulacije.",
    "Intuicija: 4^(⁵⁄⁴) je 'malo više od 4¹' (jer je 5/4 = 1,25 blizu 1) i 'manje od 4²' — približno 5,66.",
    "Česta greška: zaboraviti pretvoriti decimalu u razlomak ili pomiješati pravila potencija (a^m·a^n = a^(m+n), ne a^(m·n)).",
    "Provjera ✓: izračunaj direktno 4^(1,25) na kalkulatoru: 4^(1,25) = e^(1,25·ln 4) = e^(1,25·1,38629) ≈ e^(1,7329) ≈ 5,6569. Plus √3 ≈ 1,7321 ⇒ ≈ 7,3889 ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:17,type:"sa",topic:"kv",points:1,
  q:"Riješite jednadžbu x² = (3 − 5x)/2.",
  sol:{ans:"x₁ = -3,  x₂ = [FRAC:1|2]",alt:["-3 i 1/2","x=-3,x=1/2"]},
  steps:[
    {txt:"Pomnoži obje strane s 2 (uklanja razlomak): 2x² = 3 − 5x."},
    {txt:"Prebaci sve na lijevu stranu: 2x² + 5x − 3 = 0 (standardni oblik ax² + bx + c = 0)."},
    {txt:"Identificiraj a = 2, b = 5, c = −3. Diskriminanta: D = b² − 4ac = 25 − 4·2·(−3) = 25 + 24 = 49."},
    {txt:"Kvadratna formula: x = (−b ± √D)/(2a) = (−5 ± 7)/4. Stoga x₁ = (−5−7)/4 = −3 i x₂ = (−5+7)/4 = 2/4 = [FRAC:1|2] ⇒ x ∈ {−3, 1/2}",final:true,note:"verifikacija"},{txt:"Intuicija: prvo prebaci na 'nulu' (standardni oblik), pa primijeni formulu ili faktoriziraj. Faktorizacija: 2x² + 5x − 3 = (2x − 1)(x + 3) = 0 daje x = 1/2 ili x = −3.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima rješenja x = (−b ± √(b² − 4ac))/(2a) (formula s diskriminantom).",note:"postupak",final:true},{txt:"Točan odgovor: x₁ = -3,  x₂ = [FRAC:1|2] ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima rješenja x = (−b ± √(b² − 4ac))/(2a) (formula s diskriminantom).",
    "Intuicija: prvo prebaci na 'nulu' (standardni oblik), pa primijeni formulu ili faktoriziraj. Faktorizacija: 2x² + 5x − 3 = (2x − 1)(x + 3) = 0 daje x = 1/2 ili x = −3.",
    "Česta greška: zaboraviti pomnožiti CIJELU jednu stranu (ne samo dio) ili krivo predznak −b/+b u formuli.",
    "Provjera ✓: x = −3: 9 = (3 − (−15))/2 = 18/2 = 9 ✓. x = 1/2: 1/4 = (3 − 5/2)/2 = (1/2)/2 = [FRAC:1|4] ✓"
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:18.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"U pet posuda nalazi se ukupno 200 bombona. U prvoj i drugoj posudi zajedno nalazi se 104 bombona, u drugoj i trećoj 86 bombona, u trećoj i četvrtoj 60 bombona, a u četvrtoj i petoj 54 bombona. Koliko posto od ukupnoga broja bombona sadržavaju druga i treća posuda zajedno?",
  sol:{ans:"43 %",alt:["43","43%"]},
  steps:[
    {txt:"Iz zadanih uvjeta: p₂ + p₃ = 86 (direktna informacija, ne treba sustav riješiti)."},
    {txt:"Ukupno bombona u svih pet posuda: 200. Tražimo udio koji posude 2 i 3 čine od ukupnog."},
    {txt:"Postotak = (dio/cjelina) · 100 % = (86/200) · 100 % = [FRAC:86|200] · 100 = 43 % ⇒ 43 %",final:true,note:"verifikacija"},{txt:"Intuicija: 86 od 200 je manje od polovice, pa će postotak biti manji od 50 %. Procjena: 86/200 ≈ 0,43 = 43 %.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak = (dio/cjelina) × 100. Za pretvorbu razlomka u postotak, pomnoži s 100.",note:"postupak",final:true},{txt:"Točan odgovor: 43 % ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: postotak = (dio/cjelina) × 100. Za pretvorbu razlomka u postotak, pomnoži s 100.",
    "Intuicija: 86 od 200 je manje od polovice, pa će postotak biti manji od 50 %. Procjena: 86/200 ≈ 0,43 = 43 %.",
    "Česta greška: pokušati riješiti cijeli sustav (p₁+p₂=104, p₂+p₃=86, ...) iako je informacija već direktno dostupna. Pažljivo pročitaj — odgovor je u zadatku.",
    "Provjera ✓: 200 × 0,43 = 86 ✓ (43 % od 200 = 86 bombona, što je direktno zbroj p₂ + p₃)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:18.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"U pet posuda nalazi se ukupno 200 bombona. Uvjeti: p₁+p₂=104, p₂+p₃=86, p₃+p₄=60, p₄+p₅=54. Koliko je bombona u prvoj posudi?",
  sol:{ans:"60",alt:["60","≈ 60"]},
  steps:[
    {txt:"Postavi sustav: p₁+p₂=104, p₂+p₃=86, p₃+p₄=60, p₄+p₅=54, te p₁+p₂+p₃+p₄+p₅=200 (ukupno)."},
    {txt:"Zbroji parove (1,2) i (3,4): (p₁+p₂) + (p₃+p₄) = 104 + 60 = 164. Dakle p₁+p₂+p₃+p₄ = 164, pa p₅ = 200 − 164 = 36."},
    {txt:"Iz p₄+p₅=54: p₄ = 54−36 = 18. Iz p₃+p₄=60: p₃ = 60−18 = 42. Iz p₂+p₃=86: p₂ = 86−42 = 44."},
    {txt:"Konačno: p₁ = 104 − p₂ = 104 − 44 = 60 ⇒ 60 bombona u prvoj posudi",final:true,note:"verifikacija"},{txt:"Intuicija: 5 nepoznanica + 5 jednadžbi (4 para + ukupan zbroj). Strategija: skupi parove (1+2) i (3+4) → ostavi (5) → odredi p₅, pa lančano natrag.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod sustava s 'lančanim' uvjetima (parovi uzastopnih posuda), počni od poznatog cjelovitog zbroja (200) i 'unatrag' iz njega oduzimaj parove.",note:"postupak",final:true},{txt:"Točan odgovor: 60 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo: kod sustava s 'lančanim' uvjetima (parovi uzastopnih posuda), počni od poznatog cjelovitog zbroja (200) i 'unatrag' iz njega oduzimaj parove.",
    "Intuicija: 5 nepoznanica + 5 jednadžbi (4 para + ukupan zbroj). Strategija: skupi parove (1+2) i (3+4) → ostavi (5) → odredi p₅, pa lančano natrag.",
    "Česta greška: pokušati linearnom algebrom bez korištenja informacije da je ukupni broj 200. Ako se zaboravi taj uvjet, sustav nema jednoznačno rješenje (jer 4 jednadžbe s 5 nepoznanica).",
    "Provjera ✓: brojevi po posudama: 60, 44, 42, 18, 36. Zbroj = 60+44+42+18+36 = 200 ✓. Parovi: 60+44=104 ✓, 44+42=86 ✓, 42+18=60 ✓, 18+36=54 ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Riješite nejednadžbu (x-1)/6 > (1/2)·(x/3 + (2−x)/4).",
  sol:{ans:"x > [FRAC:10|3]",alt:["x>10/3","x>3,33"]},
  solFormula:[{pre:"x > "},{frac:[["10","3"]]}],
  steps:[
    {txt:"Pomnoži obje strane s 24 (najmanji zajednički višekratnik nazivnika 6, 2, 3, 4) — smjer nejednakosti se NE mijenja jer 24 > 0."},
    {txt:"Lijeva strana: 24·(x−1)/6 = 4(x−1) = 4x − 4."},
    {txt:"Desna strana: 24·(1/2)·(x/3 + (2−x)/4) = 12·(x/3 + (2−x)/4) = 12·x/3 + 12·(2−x)/4 = 4x + 3(2−x) = 4x + 6 − 3x = x + 6."},
    {txt:"Nejednadžba postaje 4x − 4 > x + 6. Oduzmi x s obje strane: 3x − 4 > 6. Dodaj 4: 3x > 10. Podijeli s 3: x > [FRAC:10|3] ≈ 3,33 ⇒ x > 10/3",final:true,note:"verifikacija"},{txt:"Intuicija: razlomci → cijeli brojevi, manipulacija postaje algebarska. NZV(6, 2, 3, 4) = 12 dovoljno, ali 24 = 2·12 također radi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod nejednadžbi s razlomcima, pomnoži obje strane s najmanjim zajedničkim višekratnikom (NZV) nazivnika. POZITIVAN broj — smjer ostaje; NEGATIVAN — smjer se OBRĆE.",note:"postupak",final:true},{txt:"Točan odgovor: x > [FRAC:10|3] ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = x > [FRAC:10|3] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: kod nejednadžbi s razlomcima, pomnoži obje strane s najmanjim zajedničkim višekratnikom (NZV) nazivnika. POZITIVAN broj — smjer ostaje; NEGATIVAN — smjer se OBRĆE.",
    "Intuicija: razlomci → cijeli brojevi, manipulacija postaje algebarska. NZV(6, 2, 3, 4) = 12 dovoljno, ali 24 = 2·12 također radi.",
    "Česta greška: distribucija samo na PRVI razlomak (zaboraviti pomnožiti i drugu stranu); ili krivo distribuirati množenje preko zagrade (npr. zaboraviti minus znak pri (2−x)·3 = 6 − 3x).",
    "Provjera ✓: uvrsti x = 4 (> 10/3): LHS = (4−1)/6 = 0,5; RHS = (1/2)·(4/3 + (−2)/4) = (1/2)·(0,833) = 0,417. LHS > RHS ✓. Uvrsti x = 3 (< 10/3): LHS ≈ 0,333; RHS = (1/2)·(1 + (−1)/4) = 0,375. LHS < RHS (ne zadovoljava) ✓"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:19.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Riješite nejednadžbu -2x² + 7x − 6 ≤ 0 i prikažite rješenje s pomoću intervala.",
  sol:{ans:"⟨−∞, [FRAC:3|2]] ∪ [2, +∞⟩",alt:["⟨-inf, 3/2]U[2, inf⟩","x≤3/2 ili x≥2","x ∈ ⟨−∞, 3/2] ∪ [2, +∞⟩"]},
  steps:[
    {txt:"Pomnoži s −1 (preokreni smjer nejednakosti): 2x² − 7x + 6 ≥ 0"},
    {txt:"Nultočke: x = (7 ± √(49−48))/4 = (7±1)/4 → x = [FRAC:3|2] i x = 2"},
    {txt:"Parabola y = 2x² − 7x + 6 otvara se prema gore → y ≥ 0 IZVAN intervala ⟨3/2, 2⟩ (rubovi uključeni jer je ≥0)",note:"distractor"},
    {txt:"Rješenje: x ∈ ⟨−∞, [FRAC:3|2]] ∪ [2, +∞⟩",final:true,note:"verifikacija"},{txt:"Intuicija: −2x² + 7x − 6 otvara se prema DOLJE (a = −2 < 0). Vrijednosti ≥ 0 su UNUTAR [3/2, 2], a vrijednosti ≤ 0 su IZVAN tog intervala.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za parabolu y = ax² + bx + c, ako a > 0 (otvara se gore), tada y ≥ 0 IZVAN intervala između nultočaka. Ako a < 0 (otvara se dolje), y ≥ 0 UNUTAR intervala.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−∞, [FRAC:3|2]] ∪ [2, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: za parabolu y = ax² + bx + c, ako a > 0 (otvara se gore), tada y ≥ 0 IZVAN intervala između nultočaka. Ako a < 0 (otvara se dolje), y ≥ 0 UNUTAR intervala.",
    "Intuicija: −2x² + 7x − 6 otvara se prema DOLJE (a = −2 < 0). Vrijednosti ≥ 0 su UNUTAR [3/2, 2], a vrijednosti ≤ 0 su IZVAN tog intervala.",
    "Česta greška: studenti zaborave da nakon množenja s −1 nejednakost MIJENJA smjer; ili pomiješaju otvorene/zatvorene rubove (≤ uključuje rubove).",
    "Alt metoda: testiranje točaka. Uvrsti x=0: −2(0)+0−6 = −6 ≤ 0 ✓ (0 je u rješenju). Uvrsti x=1,75: −2(3,0625)+7(1,75)−6 = 0,125 > 0 (1,75 NIJE u rješenju). Potvrda rješenja.",
    "Provjera ✓: x=3/2 → −2(9/4)+7(3/2)−6 = −9/2+21/2−6 = 0 ≤ 0 ✓ (uključeno). x=2 → −8+14−6 = 0 ≤ 0 ✓ (uključeno)."
  ,"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a."]},
  {id:20.1,type:"sa",topic:"komp",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Kompleksni broj z = (4i²¹⁹)/(i-1) + i napišite u obliku z = a + bi gdje su a, b ∈ ℝ.",
  sol:{ans:"z = -2 + 3i",alt:["Z = -2 + 3i","z = -2 + 3i","z=-2+3i","≈ z = -2 + 3i"]},
  steps:[
    {txt:"Smanji potenciju imaginarne jedinice: i⁴ = 1, pa i²¹⁹ = i^(4·54 + 3) = (i⁴)⁵⁴ · i³ = 1 · (−i) = −i. Stoga 4i²¹⁹ = −4i."},
    {txt:"Sada z = −4i/(i−1) + i. Racionalizacija nazivnika: pomnoži brojnik i nazivnik s konjugatom (i+1)."},
    {txt:"(i−1)(i+1) = i² − 1 = −1 − 1 = −2. Brojnik: −4i·(i+1) = −4i² − 4i = 4 − 4i. Dakle −4i/(i−1) = (4 − 4i)/(−2) = −2 + 2i."},
    {txt:"Konačno: z = (−2 + 2i) + i = −2 + 3i ⇒ z = −2 + 3i  (a = −2, b = 3)",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (racionalizacija): da bi se uklonio kompleksan broj iz nazivnika, pomnoži brojnik i nazivnik s KONJUGATOM nazivnika. (a+bi)(a−bi) = a² + b² ∈ ℝ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: potencije imaginarne jedinice: i⁴ᵏ = 1, i⁴ᵏ⁺¹ = i, i⁴ᵏ⁺² = −1, i⁴ᵏ⁺³ = −i. Za i^n, podijeli n s 4 — ostatak određuje potenciju.",note:"postupak",final:true},{txt:"Točan odgovor: z = -2 + 3i ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: potencije imaginarne jedinice: i⁴ᵏ = 1, i⁴ᵏ⁺¹ = i, i⁴ᵏ⁺² = −1, i⁴ᵏ⁺³ = −i. Za i^n, podijeli n s 4 — ostatak određuje potenciju.",
    "Pravilo 2 (racionalizacija): da bi se uklonio kompleksan broj iz nazivnika, pomnoži brojnik i nazivnik s KONJUGATOM nazivnika. (a+bi)(a−bi) = a² + b² ∈ ℝ.",
    "Intuicija: 219 mod 4 = 3, pa i²¹⁹ = i³ = −i. Racionalizacija pretvara dijeljenje u množenje realnim brojem.",
    "Česta greška: pomiješati pravilo i² = −1 s i³ = −i; ili koristiti pogrešan konjugat (konjugat od (i−1) je (i+1), ne (−i+1) ili (−i−1)).",
    "Provjera ✓: z(i−1) − i(i−1) = 4i²¹⁹. (−2+3i)(i−1) = −2i+2+3i²−3i = −2i+2−3−3i = −1−5i. Onda −1−5i − i(i−1) = −1−5i − (i²−i) = −1−5i + 1 + i = −4i = 4·(−i) = 4i²¹⁹ ✓"
  ,"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem."]},
  {id:20.2,type:"sa",topic:"komp",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Odredite jedan kompleksan broj w za koji vrijedi w = ∛(8i).",
  sol:{ans:"√3 + i  (ili  −√3 + i  ili  -2i)",alt:["sqrt(3)+i","-sqrt(3)+i","-2i","1,732+i"]},
  steps:[
    {txt:"Trigonometrijski oblik: 8i = 8·(cos(π/2) + i·sin(π/2)) — modul 8, argument π/2."},
    {txt:"Moivreova formula za n-ti korijen: ⁿ√z ima n rješenja oblika ⁿ√(|z|)·(cos((θ+2kπ)/n) + i·sin((θ+2kπ)/n)), k = 0, 1, ..., n−1."},
    {txt:"Ovdje n = 3, |z| = 8, θ = π/2. Modul rezultata: ∛8 = 2. Argumenti za k = 0, 1, 2: π/6, π/6 + 2π/3 = 5π/6, π/6 + 4π/3 = 3π/2."},
    {txt:"k = 0: w₀ = 2(cos(π/6) + i·sin(π/6)) = 2·(√3/2 + i·(1/2)) = √3 + i."},
    {txt:"k = 1: w₁ = 2(cos(5π/6) + i·sin(5π/6)) = 2·(−√3/2 + i·(1/2)) = −√3 + i. k = 2: w₂ = 2(cos(3π/2) + i·sin(3π/2)) = 2·(0 + i·(−1)) = −2i. Bilo koji od ova tri je rješenje ⇒ npr. √3 + i",final:true,note:"verifikacija"},{txt:"Intuicija: n-ti korijeni leže na kružnici polumjera ⁿ√r, ravnomjerno raspoređeni — kut između susjednih = 2π/n. Za kubni korijen, tri točke razmaknute za 2π/3 = 120°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (Moivreova formula): kompleksan broj r·(cos θ + i sin θ) ima n različitih n-tih korijena: ⁿ√r·(cos((θ+2kπ)/n) + i·sin((θ+2kπ)/n)), k = 0, 1, ..., n−1.",note:"postupak",final:true},{txt:"Točan odgovor: √3 + i  (ili  −√3 + i  ili  -2i) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (Moivreova formula): kompleksan broj r·(cos θ + i sin θ) ima n različitih n-tih korijena: ⁿ√r·(cos((θ+2kπ)/n) + i·sin((θ+2kπ)/n)), k = 0, 1, ..., n−1.",
    "Intuicija: n-ti korijeni leže na kružnici polumjera ⁿ√r, ravnomjerno raspoređeni — kut između susjednih = 2π/n. Za kubni korijen, tri točke razmaknute za 2π/3 = 120°.",
    "Česta greška: dobiti samo JEDNO rješenje (npr. samo √3 + i) i ne tražiti druga dva. Kompleksni n-ti korijen UVIJEK ima n rješenja (osnovni teorem algebre).",
    "Provjera ✓: (√3 + i)³ = (√3)³ + 3(√3)²·i + 3√3·i² + i³ = 3√3 + 9i − 3√3 − i = 8i ✓ (računamo (a+b)³ = a³+3a²b+3ab²+b³)"
  ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]},
  {id:21.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Napišite izraz [(1/a³)² · √a]^{-1} u obliku potencije s bazom a, za a > 0.",
  sol:{ans:"a^([FRAC:11|2])",alt:["A^([FRAC:11|2])","a^([FRAC:11|2])","≈ a^([FRAC:11|2])"]},
  solFormula:[{pre:"a^"},{frac:[["11","2"]]}],
  steps:[
    {txt:"Pretvori svaki dio u potenciju s bazom a: 1/a³ = a^(−3), pa (1/a³)² = (a^(−3))² = a^(−6). √a = a^([FRAC:1|2])."},
    {txt:"Pomnoži unutra (pravilo: aᵐ · aⁿ = a^(m+n)): a^(−6) · a^([FRAC:1|2]) = a^(−6 + 1/2) = a^(−11/2)."},
    {txt:"Primijeni vanjski eksponent −1 (pravilo: (aᵐ)ⁿ = a^(m·n)): (a^(−11/2))^(−1) = a^((−11/2)·(−1)) = a^(¹¹⁄²) ⇒ a^([FRAC:11|2])",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2: aᵐ · aⁿ = a^(m+n) i (aᵐ)ⁿ = a^(m·n). Drugačiji koraci — pri MNOŽENJU saberi eksponente, pri POTENCIRANJU pomnoži ih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo 1: 1/aⁿ = a^(−n) (negativan eksponent znači recipročnu vrijednost).",note:"postupak",final:true},{txt:"Točan odgovor: a^([FRAC:11|2]) ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo 1: 1/aⁿ = a^(−n) (negativan eksponent znači recipročnu vrijednost).",
    "Pravilo 2: aᵐ · aⁿ = a^(m+n) i (aᵐ)ⁿ = a^(m·n). Drugačiji koraci — pri MNOŽENJU saberi eksponente, pri POTENCIRANJU pomnoži ih.",
    "Intuicija: 'rasporedi' sve potencije s istom bazom, primijeni pravila jedno za drugim. Krenuti od najunutarnjih zagrada van.",
    "Česta greška: zaboraviti pomnožiti eksponente s vanjskim −1 (kao da je samo negacija jednog koraka). Negativan vanjski eksponent UVIJEK obrće znak svih unutrašnjih eksponenta.",
    "Provjera ✓: za a = 4 (testna vrijednost): (1/4³)² · √4 = (1/64)² · 2 = 1/2048; inverz: 2048 = 4^(¹¹⁄²) = (4^([FRAC:1|2]))^11 = 2^11 = 2048 ✓"
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Čemu je nakon pojednostavljenja jednak algebarski izraz (a/(a²-4b²) − 1/(2a+4b)) · (a-2b)/b za sve a, b za koje je izraz definiran?",
  sol:{ans:"[FRAC:1|2b]",alt:["[FRAC:1|2b]","≈ [FRAC:1|2b]"]},
  solFormula:[{frac:[["1","2b"]]}],
  steps:[
    {txt:"Faktoriziraj nazivnike: a² − 4b² = (a−2b)(a+2b) (razlika kvadrata); 2a + 4b = 2(a+2b)."},
    {txt:"Zajednički nazivnik za razliku u zagradi: 2(a−2b)(a+2b). Prvi razlomak: a/((a−2b)(a+2b)) = 2a/(2(a−2b)(a+2b)). Drugi: 1/(2(a+2b)) = (a−2b)/(2(a−2b)(a+2b))."},
    {txt:"Razlika u brojniku: 2a − (a − 2b) = 2a − a + 2b = a + 2b. Dakle zagrada = (a+2b)/(2(a−2b)(a+2b)) = 1/(2(a−2b)) (krati se (a+2b) ako ≠ 0)."},
    {txt:"Pomnoži s (a−2b)/b: (1/(2(a−2b))) · ((a−2b)/b) = (a−2b) / (2b(a−2b)) = [FRAC:1|2b] (krati se (a−2b) ako ≠ 0) ⇒ 1/(2b)",final:true,note:"verifikacija"},{txt:"Intuicija: traži obrazac razlike kvadrata (a²−b² = (a−b)(a+b)) i zajednički faktor 2 u 2a+4b. Sve se uredno krati.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: faktoriziraj sve nazivnike, nađi zajednički nazivnik, kombiniraj brojnike, pa skrati ono što se može.",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:1|2b] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: faktoriziraj sve nazivnike, nađi zajednički nazivnik, kombiniraj brojnike, pa skrati ono što se može.",
    "Intuicija: traži obrazac razlike kvadrata (a²−b² = (a−b)(a+b)) i zajednički faktor 2 u 2a+4b. Sve se uredno krati.",
    "Česta greška: previše brzo kratiti — uvijek najprije faktoriziraj DO KRAJA, pa onda krati. Tipično: ne uočiti da je 2a+4b = 2(a+2b), pa ostaviti razlomak s dva različita oblika nazivnika.",
    "Provjera ✓: za a = 4, b = 1: prvi izraz = 4/(16−4) − 1/(8+4) = 4/12 − 1/12 = 3/12 = [FRAC:1|4]. Pomnoženo s (4−2)/1 = 2: dobiti 1/2. Provjera s rješenjem: 1/(2·1) = 1/2 ✓"
  ,"Provjera supstitucijom: uvrsti x = [FRAC:1|2b] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:22.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Kolika je duljina dužine CE prikazane na skici ako je |AB| = 4,1 cm, |BC| = 2,2 cm, |AE| = 3,6 cm i AE okomito na BC?",
  sol:{ans:"[FRAC:22 − √385|10] ≈ 0,24 cm",alt:["0,24","0,24"]},
  steps:[
    {txt:"AE ⊥ BC: E je podnožište okomice iz A na pravac BC. Tako trokut ABE je pravokutan u E."},
    {txt:"Pitagorin poučak u trokutu ABE: AB² = AE² + BE² (gdje je AB hipotenuza, AE i BE katete)."},
    {txt:"Riješi za BE: BE² = AB² − AE² = (4,1)² − (3,6)² = 16,81 − 12,96 = 3,85. Stoga BE = √3,85 ≈ 1,962 cm."},
    {txt:"CE = BC − BE = 2,2 − √3,85 = (22 − √385)/10 ≈ 2,2 − 1,962 ≈ 0,238 ≈ 0,24 cm ⇒ [FRAC:22 − √385|10] ≈ 0,24 cm",final:true,note:"verifikacija"},{txt:"Intuicija: kada je AE ⊥ BC, ima se dva pravokutna trokuta (ABE i ACE). Iz jednog od njih (s poznatim katetama AE i hipotenuzom AB) Pitagorom dobiješ BE.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (Pitagorin poučak): u pravokutnom trokutu s katetama a, b i hipotenuzom c vrijedi a² + b² = c². Hipotenuza je nasuprot pravom kutu.",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:22 − √385|10] ≈ 0,24 cm ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (Pitagorin poučak): u pravokutnom trokutu s katetama a, b i hipotenuzom c vrijedi a² + b² = c². Hipotenuza je nasuprot pravom kutu.",
    "Intuicija: kada je AE ⊥ BC, ima se dva pravokutna trokuta (ABE i ACE). Iz jednog od njih (s poznatim katetama AE i hipotenuzom AB) Pitagorom dobiješ BE.",
    "Česta greška: zaboraviti da je AB hipotenuza (a ne kateta) jer 'izgleda kao' obična stranica. Identifikacija pravog kuta i pripadajuće hipotenuze je ključ.",
    "Provjera ✓: AE² + BE² = 12,96 + 3,85 = 16,81 = (4,1)² = AB² ✓. CE = 2,2 − 1,962 = 0,238 cm ≈ 0,24 cm ✓"
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:22.2,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Kolika je mjera kuta u vrhu A pravokutnoga trokuta prikazanoga na skici? (Pravokutni trokut BCA: BC = a, BA = 3a, pravi kut u C.)",
  sol:{ans:"19°28′16″",alt:["19,47°","19°28'16\""]},
  steps:[
    {txt:"U pravokutnom trokutu BCA, pravi kut je u C. Hipotenuza je BA = 3a (nasuprot pravom kutu)."},
    {txt:"Stranica BC = a je nasuprot kutu u A. Stoga: sin(A) = nasuprotna/hipotenuza = BC/BA = a/(3a) = [FRAC:1|3]."},
    {txt:"A = arcsin(1/3). Računaj: arcsin(0,3333) ≈ 19,4712° u dec. zapisu. Pretvori u stupnjeve-minute-sekunde."},
    {txt:"0,4712° × 60 = 28,272′. 0,272′ × 60 = 16,32″ ≈ 16″. Dakle A ≈ 19°28′16″ ⇒ 19°28′16″",final:true,note:"verifikacija"},{txt:"Intuicija: identificiraj pravi kut → hipotenuza je nasuprot njemu (najveća stranica). Za kut α, nasuprotna stranica je preko od njega.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (osnovne trig. veze u pravokutnom trokutu): sin(α) = nasuprotna/hipotenuza, cos(α) = priležeća/hipotenuza, tg(α) = nasuprotna/priležeća.",note:"postupak",final:true},{txt:"Točan odgovor: 19°28′16″ ✓",note:"odgovor",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (osnovne trig. veze u pravokutnom trokutu): sin(α) = nasuprotna/hipotenuza, cos(α) = priležeća/hipotenuza, tg(α) = nasuprotna/priležeća.",
    "Intuicija: identificiraj pravi kut → hipotenuza je nasuprot njemu (najveća stranica). Za kut α, nasuprotna stranica je preko od njega.",
    "Česta greška: pomiješati nasuprotnu i priležeću stranicu kod kuta (ovisi koji kut promatraš); ili zaboraviti pretvoriti decimale u minute (množenjem s 60) i minute u sekunde (množenjem s 60).",
    "Provjera: sin(19,4712°) = 0,3333 ≈ 1/3. Sve OK."
  ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]},
  {id:23.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Neka je prirodan broj n takav da vrijedi C(n,3) = C(n,2). Odredite onaj član u razvoju binoma (a+2)ⁿ koji sadržava a³. (Napomena: C(n,k) = n!/(k!·(n−k)!))",
  sol:{ans:"40 a³",alt:["40 a³","≈ 40 a³"]},
  steps:[
    {txt:"Iz C(n,3) = C(n,2): n!/(3!·(n−3)!) = n!/(2!·(n−2)!). Krati n! i izrazi: 1/(6(n−3)!) = 1/(2(n−2)!). Pomnoži unakrsno."},
    {txt:"2(n−2)! = 6(n−3)!. Pošto (n−2)! = (n−2)·(n−3)!, dobivamo 2(n−2)(n−3)! = 6(n−3)!. Krati (n−3)!: 2(n−2) = 6 → n−2 = 3 → n = 5."},
    {txt:"Binomna formula za (a+2)⁵: opći član je C(5,k)·a^(5−k)·2^k. Tražimo član s a³, pa 5−k = 3 ⇒ k = 2."},
    {txt:"Član: C(5,2)·a³·2² = 10·a³·4 = 40a³ ⇒ 40a³",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (binomni koeficijent): C(n,k) = n!/(k!(n−k)!). Simetričan je: C(n,k) = C(n,n−k). Jednakost C(n,3) = C(n,2) ⇒ 3 + 2 = n = 5 (jer C(n,k) = C(n,n−k) ima n−k = 3 i k = 2).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (binomni razvoj): (a+b)ⁿ = Σ_{k=0}^{n} C(n,k)·a^(n−k)·b^k. Svaki član ima oblik C(n,k)·a^(n−k)·b^k.",note:"postupak",final:true},{txt:"Točan odgovor: 40 a³ ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (binomni razvoj): (a+b)ⁿ = Σ_{k=0}^{n} C(n,k)·a^(n−k)·b^k. Svaki član ima oblik C(n,k)·a^(n−k)·b^k.",
    "Pravilo 2 (binomni koeficijent): C(n,k) = n!/(k!(n−k)!). Simetričan je: C(n,k) = C(n,n−k). Jednakost C(n,3) = C(n,2) ⇒ 3 + 2 = n = 5 (jer C(n,k) = C(n,n−k) ima n−k = 3 i k = 2).",
    "Intuicija: 'koji k odgovara članu s a³ u (a+2)^n'? Pošto je eksponent a u članu (n−k), tražimo n−k = 3, tj. k = n−3. Onda član sadrži 2^k.",
    "Česta greška: zamijeniti redoslijed (a^k umjesto a^(n−k)) ili zaboraviti faktor 2^k iz drugog dijela binoma; također, greška u pretvorbi C(n,3) = C(n,2) → n = 5.",
    "Provjera ✓: razvoj (a+2)⁵ = a⁵ + 5·a⁴·2 + 10·a³·4 + 10·a²·8 + 5·a·16 + 32 = a⁵ + 10a⁴ + 40a³ + 80a² + 80a + 32. Treći član je 40a³ ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]},
  {id:23.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Odredite vrijednost realnoga broja x ako je ∛(x·∛(x·∛(x·∛x··· ))) = 10.",
  sol:{ans:"x = 100",alt:["X = 100","x = 100","x=100","≈ x = 100"]},
  steps:[
    {txt:"Označi L = ∛(x·∛(x·∛(x·∛x···))) — beskonačno ugnježdeni izraz. Ključno zapažanje: izraz POD prvim korijenom je x · L (jer se isti uzorak ponavlja unutar)."},
    {txt:"Dakle L = ∛(x·L). Kubiranje obje strane: L³ = x·L."},
    {txt:"Podijeli s L (uz pretpostavku L ≠ 0): L² = x."},
    {txt:"Zadano je L = 10, pa x = L² = 100 ⇒ x = 100",final:true,note:"verifikacija"},{txt:"Intuicija: 'auto-sličnost' — ono što je unutar prvog korijena je IDENTIČNO cijelom izrazu (s prvim faktorom x ispred). Označi L i postavi L = funkcija(L).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: beskonačno ugnježdeni radikali (i razlomci) rješavaju se uvođenjem supstitucije za cijeli izraz, jer se cijeli izraz POJAVLJUJE I U SEBI.",note:"postupak",final:true},{txt:"Točan odgovor: x = 100 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: beskonačno ugnježdeni radikali (i razlomci) rješavaju se uvođenjem supstitucije za cijeli izraz, jer se cijeli izraz POJAVLJUJE I U SEBI.",
    "Intuicija: 'auto-sličnost' — ono što je unutar prvog korijena je IDENTIČNO cijelom izrazu (s prvim faktorom x ispred). Označi L i postavi L = funkcija(L).",
    "Česta greška: pokušati 'odgrnuti' korijen po korijen (beskonačno mnogo!) ili koristiti netočan oblik supstitucije (npr. L = x·∛L umjesto L = ∛(x·L)).",
    "Provjera ✓: x = 100, pa pojedinačno ∛(100·∛(100·...)) = 10. Test: ako je L = 10, onda L³ = 1000 = 100·L = 100·10 = 1000 ✓. Konvergencija: ako počneš s y₀ = 1, y_{n+1} = ∛(100·y_n), niz teži ka 10."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:24.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Nacrtajte graf linearne funkcije f za koju vrijedi f(0) = 1, f(-1) = 3.",
  sol:{ans:"pravac kroz (0,1) i (-1,3) nacrtan",alt:["Pravac kroz (0,1) i (-1,3) nacrtan","pravac kroz (0,1) i (-1,3) nacrtan","pravac kroz (0.1) i (-1.3) nacrtan","pravackroz(0,1)i(-1,3)nacrtan","≈ pravac kroz (0,1) i (-1,3) nacrtan"]},
  steps:[
    {txt:"Linearna funkcija ima oblik f(x) = kx + n. Dvije točke u potpunosti je određuju."},
    {txt:"Nagib: k = Δy/Δx = (f(-1) − f(0))/(−1 − 0) = (3 − 1)/(−1) = 2/(−1) = −2."},
    {txt:"Iz f(0) = 1: n = 1 (odsječak na y-osi). Funkcija: f(x) = −2x + 1. Nultočka: −2x + 1 = 0 ⇒ x = 1/2."},
    {txt:"Crtaj pravac kroz točke A(0, 1) i B(−1, 3). Pravac pada (jer k = −2 < 0) i prolazi kroz y-os u (0, 1) i kroz x-os u (1/2, 0) ⇒ graf nacrtan",final:true,note:"verifikacija"},{txt:"Intuicija: ako je k pozitivan, pravac raste (lijevo dolje → desno gore); ako je k negativan, pada. Ovdje k = −2 (negativan), pa pravac PADA.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dvije točke (x₁, y₁) i (x₂, y₂) jednoznačno određuju pravac. Nagib k = (y₂ − y₁)/(x₂ − x₁). Linearna funkcija: f(x) = kx + n.",note:"postupak",final:true},{txt:"Točan odgovor: pravac kroz (0,1) i (-1,3) nacrtan ✓",note:"odgovor",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: dvije točke (x₁, y₁) i (x₂, y₂) jednoznačno određuju pravac. Nagib k = (y₂ − y₁)/(x₂ − x₁). Linearna funkcija: f(x) = kx + n.",
    "Intuicija: ako je k pozitivan, pravac raste (lijevo dolje → desno gore); ako je k negativan, pada. Ovdje k = −2 (negativan), pa pravac PADA.",
    "Česta greška: zamijeniti redoslijed (y₁ − y₂) i (x₂ − x₁) — pazi da je u istom smjeru. Također, kad je 'f(0) = 1', odsječak je 1, ne −1.",
    "Provjera: f(0) = −2·0 + 1 = 1 ✓; f(−1) = −2·(−1) + 1 = 3 ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:24.2,img:true,type:"sa",topic:"der",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Slika prikazuje graf funkcije f na intervalu ⟨1,11⟩. Odredite interval/intervale na kojemu/kojima je funkcija padajuća i postiže vrijednosti manje od 2.",
  sol:{ans:"⟨5, 8⟩",alt:["(5,8)","5<x<8"]},
  steps:[
    {txt:"Iz grafa odredi dva odvojena uvjeta: (i) intervali padanja funkcije, (ii) intervali gdje je f(x) < 2."},
    {txt:"Uvjet (i): graf prikazuje funkciju koja pada na intervalu ⟨5, 8⟩ (vrijednosti se smanjuju kako x raste)."},
    {txt:"Uvjet (ii): graf je ispod horizontalne crte y = 2 za x ∈ ⟨5, 8⟩ (prema slici)."},
    {txt:"Presjek: ⟨5, 8⟩ ∩ ⟨5, 8⟩ = ⟨5, 8⟩ ⇒ ⟨5, 8⟩",final:true,note:"verifikacija"},{txt:"Intuicija: tražimo intervale gdje obje stvari vrijede ISTOVREMENO — i 'pada' i 'ispod 2'. To je PRESJEK dvaju skupova.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: funkcija je padajuća na intervalu ako za svaki x₁ < x₂ iz tog intervala vrijedi f(x₁) > f(x₂). Geometrijski: graf 'pada' s lijeva na desno.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨5, 8⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: funkcija je padajuća na intervalu ako za svaki x₁ < x₂ iz tog intervala vrijedi f(x₁) > f(x₂). Geometrijski: graf 'pada' s lijeva na desno.",
    "Intuicija: tražimo intervale gdje obje stvari vrijede ISTOVREMENO — i 'pada' i 'ispod 2'. To je PRESJEK dvaju skupova.",
    "Česta greška: dati UNIJU (gdje vrijedi bilo koji uvjet) umjesto PRESJEKA (gdje vrijede oba istovremeno).",
    "Provjera: u sredini intervala ⟨5, 8⟩, npr. x = 6,5: graf je u padu i vrijednost f(6,5) < 2 (npr. f(6,5) ≈ 1) ✓"
  ,"Provjera u kritičnoj točki: f'(x₀) = 0 za ekstrem; f'(x₀) ≠ 0 znači nije ekstrem.","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."]},
  {id:25.1,type:"sa",topic:"der",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite derivaciju funkcije f(x) = tg(3x).",
  sol:{ans:"f′(x) = [FRAC:3|cos²](3x)",alt:["3/cos^2(3x)","3sec²(3x)"]},
  solFormula:[{frac:[["3","cos²(3x)"]]}],
  steps:[
    {txt:"Funkcija f(x) = tg(3x) je kompozicija: vanjska funkcija tg(u), unutarnja u = 3x. Treba primijeniti PRAVILO LANCA."},
    {txt:"Derivacija vanjske: (tg u)′ = 1/cos²(u). Derivacija unutarnje: u′(x) = (3x)′ = 3."},
    {txt:"Pravilo lanca: f′(x) = (tg u)′ · u′(x) = (1/cos²(u)) · 3 = 3/cos²(3x) = [FRAC:3|cos²](3x) ⇒ f′(x) = 3/cos²(3x)",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo lanca: ako je f(x) = g(h(x)), onda f′(x) = g′(h(x)) · h′(x). 'Deriviraj vanjsku, pomnoži s derivacijom unutarnje.'",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (derivacija tangensa): (tg x)′ = 1/cos²x = sec²x. Ovo proizlazi iz tg = sin/cos i pravila kvocijenta.",note:"postupak",final:true},{txt:"Točan odgovor: f′(x) = [FRAC:3|cos²](3x) ✓",note:"odgovor",final:true},{txt:"Provjera u kritičnoj točki: f'(x₀) = 0 za ekstrem; f'(x₀) ≠ 0 znači nije ekstrem.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj derivaciju definicijom (limes) za neovisnu potvrdu.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (derivacija tangensa): (tg x)′ = 1/cos²x = sec²x. Ovo proizlazi iz tg = sin/cos i pravila kvocijenta.",
    "Pravilo lanca: ako je f(x) = g(h(x)), onda f′(x) = g′(h(x)) · h′(x). 'Deriviraj vanjsku, pomnoži s derivacijom unutarnje.'",
    "Intuicija: kad se argument tangensa mijenja (3x umjesto x), brzina promjene je 3 puta veća, pa se i derivacija množi s 3.",
    "Česta greška: zaboraviti faktor 3 (derivaciju unutarnje funkcije), tj. napisati samo 1/cos²(3x) — ovo je TIPIČNA greška kod pravila lanca.",
    "Provjera ✓: numerički provjeri u x = 0: f(0) = tg(0) = 0; f′(0) = 3/cos²(0) = 3/1 = 3. Alternativno preko granice: lim_{h→0} (tg(3h) − 0)/h = 3 (jer tg(3h) ≈ 3h za male h) ✓"
  ,"Provjera derivacijom unazad: integriranjem f' moramo dobiti f (do konstante)."]},
  {id:25.2,type:"sa",topic:"der",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Odredite jednadžbu tangente na graf funkcije f(x) = √x u točki s apscisom x = 16.",
  sol:{ans:"y = [FRAC:x|8] + 2",alt:["y=x/8+2","y-4=1/8(x-16)"]},
  steps:[
    {txt:"Točka tangente: x₀ = 16, y₀ = f(16) = √16 = 4. Točka (16, 4) je na grafu."},
    {txt:"Derivacija: f′(x) = (√x)′ = (x^(¹⁄²))′ = (1/2)·x^(−1/2) = 1/(2√x). Nagib tangente: k = f′(16) = 1/(2·4) = 1/8."},
    {txt:"Jednadžba tangente: y − y₀ = k·(x − x₀) ⇒ y − 4 = (1/8)·(x − 16) ⇒ y = x/8 − 2 + 4 = x/8 + 2 ⇒ y = [FRAC:x|8] + 2",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (derivacija korijena): (√x)′ = 1/(2√x). Tipično pravilo koje se često zaboravlja jer nije 'standardni polinom'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (jednadžba tangente): za graf funkcije f u točki (x₀, f(x₀)), tangenta je pravac y − f(x₀) = f′(x₀)·(x − x₀), gdje je nagib jednak derivaciji u toj točki.",note:"postupak",final:true},{txt:"Točan odgovor: y = [FRAC:x|8] + 2 ✓",note:"odgovor",final:true},{txt:"Provjera derivacijom unazad: integriranjem f' moramo dobiti f (do konstante).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj derivaciju definicijom (limes) za neovisnu potvrdu.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (jednadžba tangente): za graf funkcije f u točki (x₀, f(x₀)), tangenta je pravac y − f(x₀) = f′(x₀)·(x − x₀), gdje je nagib jednak derivaciji u toj točki.",
    "Pravilo 2 (derivacija korijena): (√x)′ = 1/(2√x). Tipično pravilo koje se često zaboravlja jer nije 'standardni polinom'.",
    "Intuicija: tangenta 'dotiče' graf u jednoj točki s istim nagibom — to je linearizacija funkcije lokalno oko x₀.",
    "Česta greška: zaboraviti drugi član 'minus f(x₀)' u jednadžbi tangente, ili krivo izračunati derivaciju √x (često se zaboravi faktor 1/2).",
    "Provjera ✓: uvrsti x = 16 u tangentu: y = 16/8 + 2 = 2 + 2 = 4 = f(16) ✓ (tangenta prolazi kroz dirnu točku). Derivacija √x u x = 16: 1/(2·4) = 1/8 ✓"
  ,"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta)."]},
  {id:26.1,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Na slici je prikazan graf funkcije f(x) = 2sin(Bx + C). Koliki je temeljni period te funkcije?",
  sol:{ans:"π",alt:["pi","3,14","2π/B"]},
  steps:[
    {txt:"Funkcija oblika y = A·sin(Bx + C) ima temeljni period T = 2π/B. Treba odrediti period iz grafa."},
    {txt:"Iz grafa očitaj dvije karakteristične točke: nultočke s istim smjerom (npr. obje od minus prema plus) razdvojene su za TEMELJNI PERIOD. Alternativno: udaljenost između dva susjedna maximuma."},
    {txt:"Iz slike: vidi se da je period između dvaju uzastopnih maximuma jednak π. Odnosno: dvije susjedne nultočke 'iste vrste' razdvojene su točno za π."},
    {txt:"Stoga T = π (i posljedično B = 2π/T = 2π/π = 2) ⇒ temeljni period je π",final:true,note:"verifikacija"},{txt:"Intuicija: 2π je 'puni krug' za sinus. Faktor B 'sažima' tu duljinu — B = 2 znači da unutar 2π stane DVA puna ciklusa, pa svaki ciklus ima duljinu π.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za funkciju y = A·sin(Bx + C) + D, temeljni period je T = 2π/|B|. Veliki B → kratki period (gušći oscilacije).",note:"postupak",final:true},{txt:"Točan odgovor: π ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: za funkciju y = A·sin(Bx + C) + D, temeljni period je T = 2π/|B|. Veliki B → kratki period (gušći oscilacije).",
    "Intuicija: 2π je 'puni krug' za sinus. Faktor B 'sažima' tu duljinu — B = 2 znači da unutar 2π stane DVA puna ciklusa, pa svaki ciklus ima duljinu π.",
    "Česta greška: očitati period između susjednih nultočaka (to je samo POLOVICA perioda) ili između maximuma i minimuma (to je također polovica).",
    "Provjera ✓: B = 2 ⇒ 2π/B = π ✓. Funkcija f(x) = 2sin(2x + C) — period π je standardni rezultat za B = 2."
  ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]},
  {id:26.2,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Na slici je prikazan graf funkcije f(x) = 2sin(Bx + C) s B=2. Odredite najmanji pozitivan broj x za koji je f(x) = -2.",
  sol:{ans:"[FRAC:5π|12]",alt:["[FRAC:5π|12]","≈ [FRAC:5π|12]"]},
  solFormula:[{frac:[["5π","12"]]}],
  steps:[
    {txt:"f(x) = −2 znači 2·sin(2x + C) = −2 ⇒ sin(2x + C) = −1. To je minimum sinusne funkcije."},
    {txt:"sin(θ) = −1 za θ = 3π/2 + 2kπ, k ∈ ℤ (sve točke u kojima sinus doseže minimum)."},
    {txt:"Odredi C iz grafa (faza). S B = 2 i očitanim grafom: C = 2π/3 (faza koja pomakne graf prema lijevo za 2π/(3·2) = π/3)."},
    {txt:"Riješi 2x + [FRAC:2π|3] = [FRAC:3π|2] (uzimamo k = 0 za NAJMANJI pozitivan x). 2x = [FRAC:3π|2] − [FRAC:2π|3] = [FRAC:9π−4π|6] = [FRAC:5π|6] ⇒ x = [FRAC:5π|12] ⇒ x = 5π/12",final:true,note:"verifikacija"},{txt:"Intuicija: za 'najmanji pozitivan x', uzmi k = 0 (osnovno rješenje); ako je rezultat negativan, povisi k za 1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin(θ) doseže minimum −1 u θ = 3π/2 + 2kπ. Za jednadžbu sin(g(x)) = −1, riješi g(x) = 3π/2 + 2kπ za sve k ∈ ℤ.",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:5π|12] ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: sin(θ) doseže minimum −1 u θ = 3π/2 + 2kπ. Za jednadžbu sin(g(x)) = −1, riješi g(x) = 3π/2 + 2kπ za sve k ∈ ℤ.",
    "Intuicija: za 'najmanji pozitivan x', uzmi k = 0 (osnovno rješenje); ako je rezultat negativan, povisi k za 1.",
    "Česta greška: zaboraviti odrediti C iz grafa; pomiješati π/2 (gdje je sin = 1, MAXIMUM) s 3π/2 (gdje je sin = −1, MINIMUM); ili izabrati k = 1 umjesto k = 0 i dobiti veći pozitivan x.",
    "Provjera ✓: x = 5π/12 ⇒ 2x = 5π/6 ⇒ 2x + 2π/3 = 5π/6 + 4π/6 = 9π/6 = 3π/2. sin(3π/2) = −1, pa f(x) = 2·(−1) = −2 ✓"
  ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]},
  {id:27.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Riješite jednadžbu 4^{x+1} = 12.",
  sol:{ans:"x = log₄3 ≈ 0,7925",alt:["log4(3)","log3/log4","0.79248"]},
  steps:[
    {txt:"Rastavi lijevu stranu: 4^(x+1) = 4^x · 4¹ = 4·4^x. Jednadžba postaje 4·4^x = 12."},
    {txt:"Podijeli s 4: 4^x = 3."},
    {txt:"Logaritmiraj obje strane (npr. po bazi 4): log₄(4^x) = log₄(3) ⇒ x = log₄(3). Brojčano: log₄(3) = log(3)/log(4) ≈ 0,4771/0,6021 ≈ 0,7925 ⇒ x = log₄3 ≈ 0,7925",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2: a^(m+n) = aᵐ · aⁿ. Kod 4^(x+1) možeš izvući 4 i zatim raditi s 4^x.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (eksponencijalne jednadžbe): aˣ = b ⇒ x = log_a(b). Promjena baze: log_a(b) = log(b)/log(a) = ln(b)/ln(a).",note:"postupak",final:true},{txt:"Točan odgovor: x = log₄3 ≈ 0,7925 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (eksponencijalne jednadžbe): aˣ = b ⇒ x = log_a(b). Promjena baze: log_a(b) = log(b)/log(a) = ln(b)/ln(a).",
    "Pravilo 2: a^(m+n) = aᵐ · aⁿ. Kod 4^(x+1) možeš izvući 4 i zatim raditi s 4^x.",
    "Intuicija: pokušaj prvo svesti na isti broj (4^x = 3 — ne ide jer 3 nije potencija 4); zato koristi logaritam.",
    "Česta greška: pokušati 'usporediti baze' kad se ne može (npr. 4 i 3 nemaju zajedničku bazu kao racionalnu potenciju), pa zaglaviti. Logaritmiranje je univerzalan alat.",
    "Provjera ✓: uvrsti x = 0,7925 u izvornu jednadžbu: 4^(0,7925 + 1) = 4^(1,7925) ≈ 12,00 ✓ (uz zaokruživanje)."
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Riješite jednadžbu log₅(x + 4) − log₅x = 2.",
  sol:{ans:"x = [FRAC:1|6]",alt:["X = [FRAC:1|6]","x = [FRAC:1|6]","x=[FRAC:1|6]","≈ x = [FRAC:1|6]"]},
  solFormula:[{frac:[["1","6"]]}],
  steps:[
    {txt:"Domena logaritma: argumenti moraju biti POZITIVNI. Treba x > 0 i x + 4 > 0; objedinjeno: x > 0."},
    {txt:"Iskoristi pravilo logaritma: log_a(M) − log_a(N) = log_a(M/N). Dakle log₅((x+4)/x) = 2."},
    {txt:"Pretvori u eksponencijalni oblik: (x+4)/x = 5² = 25."},
    {txt:"Pomnoži s x (x > 0, smjer ostaje): x + 4 = 25x ⇒ 4 = 24x ⇒ x = [FRAC:1|6]. Provjera domene: 1/6 > 0 ✓ ⇒ x = 1/6",final:true,note:"verifikacija"},{txt:"Intuicija: lijeva strana je log₅(omjer). Desna strana 2 znači omjer = 5² = 25.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (logaritmi): log_a(M) − log_a(N) = log_a(M/N); log_a(M·N) = log_a(M) + log_a(N); log_a(Mⁿ) = n·log_a(M). Pravilo razlike je osobito korisno za 'objedinjavanje' dvije log-veličine.",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:1|6] ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (logaritmi): log_a(M) − log_a(N) = log_a(M/N); log_a(M·N) = log_a(M) + log_a(N); log_a(Mⁿ) = n·log_a(M). Pravilo razlike je osobito korisno za 'objedinjavanje' dvije log-veličine.",
    "Intuicija: lijeva strana je log₅(omjer). Desna strana 2 znači omjer = 5² = 25.",
    "Česta greška: zaboraviti provjeriti DOMENU. Logaritam dopušta samo pozitivne argumente, pa rješenje mora biti u domeni. Ako bi rješenje bilo x = −1, odbacilo bi se.",
    "Provjera ✓: log₅(1/6 + 4) − log₅(1/6) = log₅(25/6) − log₅(1/6) = log₅((25/6)·(6/1)) = log₅(25) = 2 ✓"
  ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]},
  {id:27.3,type:"sa",topic:"trig",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Odredite sva rješenja jednadžbe tg x − √3 = 0 iz intervala [0, 2π].",
  sol:{ans:"x = [FRAC:π|3]  i  x = [FRAC:4π|3]",alt:["pi/3 i 4pi/3","60° i 240°"]},
  solFormula:[{pre:"x = "},{frac:[["π","3"]]},{pre:"  i  x = "},{frac:[["4π","3"]]}],
  steps:[
    {txt:"Preuredi: tg x = √3 ≈ 1,732."},
    {txt:"Osnovno rješenje (osnovna grana arctangensa). tg(π/3) = √3, pa x₀ = π/3."},
    {txt:"Tangens ima period π, pa sva rješenja: x = π/3 + kπ, k ∈ ℤ. U intervalu [0, 2π] uzmi k = 0 i k = 1."},
    {txt:"k = 0: x = π/3 ≈ 1,047 ∈ [0, 2π] ✓. k = 1: x = π/3 + π = 4π/3 ≈ 4,189 ∈ [0, 2π] ✓. k = 2: x = 7π/3 > 2π, odbaci ⇒ x ∈ {π/3, 4π/3}",final:true,note:"verifikacija"},{txt:"Intuicija: tg ponavlja vrijednost svakih π (180°). U intervalu [0, 2π] (širine 2π = dva perioda) imaš TOČNO DVA rješenja za svaku vrijednost tangensa.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tg ima period π (NE 2π kao sin/cos). Sve rješenja tg(x) = a su x = arctan(a) + kπ, k ∈ ℤ.",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:π|3]  i  x = [FRAC:4π|3] ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: tg ima period π (NE 2π kao sin/cos). Sve rješenja tg(x) = a su x = arctan(a) + kπ, k ∈ ℤ.",
    "Intuicija: tg ponavlja vrijednost svakih π (180°). U intervalu [0, 2π] (širine 2π = dva perioda) imaš TOČNO DVA rješenja za svaku vrijednost tangensa.",
    "Česta greška: dodati 2π (period sin/cos) umjesto π (period tg) — daje samo jedno rješenje umjesto dva. Ili krivo: π/3 + π = 4π/3 (NE π/3 + π/2 = 5π/6).",
    "Provjera ✓: tg(π/3) = √3 ✓; tg(4π/3) = tg(π/3 + π) = tg(π/3) = √3 ✓ (zbog periodičnosti π)."
  ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]},
  {id:28.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"U kojoj točki graf funkcije f(x) = |5x − 3| siječe os ordinata?",
  sol:{ans:"(0, 3)",alt:["(0,3)","0;3"]},
  steps:[
    {txt:"Os ordinata (y-os) ima jednadžbu x = 0. Za sjecište grafa s y-osom, postavi x = 0 i izračunaj f(0)."},
    {txt:"f(0) = |5·0 − 3| = |−3| = 3 (apsolutna vrijednost negativnog broja = njegova vrijednost bez znaka)."},
    {txt:"Sjecište: točka (x, y) = (0, 3) ⇒ (0, 3)",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (apsolutna vrijednost): |a| = a ako a ≥ 0, |a| = −a ako a < 0. Rezultat je uvijek nenegativan.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: graf funkcije siječe y-os u točki (0, f(0)). Apscisa = 0, ordinata = vrijednost funkcije u nuli.",note:"postupak",final:true},{txt:"Točan odgovor: (0, 3) ✓",note:"odgovor",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: graf funkcije siječe y-os u točki (0, f(0)). Apscisa = 0, ordinata = vrijednost funkcije u nuli.",
    "Pravilo 2 (apsolutna vrijednost): |a| = a ako a ≥ 0, |a| = −a ako a < 0. Rezultat je uvijek nenegativan.",
    "Intuicija: y-os je 'vertikala kroz ishodište'. Sjecište s grafom je tamo gdje je x = 0. To je 'odsječak na y-osi'.",
    "Provjera ✓: f(0) = |−3| = 3. Točka (0, 3) je na grafu jer f(0) = 3 ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:28.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Zadane su funkcije f(x) = (x²+1)/5 i g(x) = x/(x+1), x ≠ -1. Kolika je vrijednost funkcije g∘f za x = 7?",
  sol:{ans:"[FRAC:10|11]",alt:["10/11","0,909"]},
  solFormula:[{frac:[["10","11"]]}],
  steps:[
    {txt:"Kompozicija funkcija: (g ∘ f)(x) = g(f(x)). Najprije izračunaj 'unutarnju' f(x), pa uvrsti rezultat u g."},
    {txt:"Izračunaj f(7) = (7² + 1)/5 = (49 + 1)/5 = 50/5 = 10."},
    {txt:"Uvrsti u g: g(10) = 10/(10 + 1) = [FRAC:10|11] ⇒ (g ∘ f)(7) = 10/11",final:true,note:"verifikacija"},{txt:"Intuicija: 'cijev' — input ide kroz f-stroj, izlaz f ulazi u g-stroj. Pa za (g ∘ f)(7): 7 → f → 10 → g → 10/11.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (kompozicija funkcija): (g ∘ f)(x) = g(f(x)) — 'najprije f, pa g'. NIJE komutativno: g ∘ f ≠ f ∘ g općenito.",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:10|11] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (kompozicija funkcija): (g ∘ f)(x) = g(f(x)) — 'najprije f, pa g'. NIJE komutativno: g ∘ f ≠ f ∘ g općenito.",
    "Intuicija: 'cijev' — input ide kroz f-stroj, izlaz f ulazi u g-stroj. Pa za (g ∘ f)(7): 7 → f → 10 → g → 10/11.",
    "Česta greška: zamijeniti smjer kompozicije. (g ∘ f)(x) znači g se primjenjuje POSLIJE f-a; učenici često računaju f(g(x)) umjesto.",
    "Provjera: domena g je x ≠ −1. Ovdje g se evaluira u x = 10, što je ≠ −1, pa je rezultat definiran ✓"
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:28.3,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 28 (3. dio od 3):",
  q:"U zadanome koordinatnom sustavu nacrtajte graf funkcije y = (x − 2)².",
  sol:{ans:"parabola s tjemenom (2,0), otvara se prema gore, nultočka x=2",alt:["Parabola s tjemenom (2,0), otvara se prema gore, nultočka x=2","parabola s tjemenom (2,0), otvara se prema gore, nultočka x=2","parabola s tjemenom (2.0). otvara se prema gore. nultočka x=2","parabolastjemenom(2,0),otvarasepremagore,nultočkax=2","≈ parabola s tjemenom (2,0), otvara se prema gore, nultočka x=2"]},
  steps:[
    {txt:"Identificiraj oblik funkcije: y = (x − 2)² je kvadratna funkcija u 'tjemenom obliku' y = a(x − h)² + k s a = 1, h = 2, k = 0."},
    {txt:"Tjeme parabole: (h, k) = (2, 0). Otvaranje: a = 1 > 0 ⇒ parabola se otvara prema GORE."},
    {txt:"Nultočke: postavi y = 0 ⇒ (x − 2)² = 0 ⇒ x = 2 (dvostruka nultočka). Y-os: f(0) = (−2)² = 4, pa graf prolazi (0, 4)."},
    {txt:"Crtaj: parabolu s tjemenom (2, 0), otvorenu prema gore, koja prolazi i kroz (0, 4) i (4, 4) (simetrično oko osi x = 2) ⇒ graf nacrtan",final:true,note:"verifikacija"},{txt:"Intuicija: (x − 2)² je 'pomaknuta x²'. Vodoravan pomak 2 u desno; vertikalan pomak 0 (jer k = 0). Tjeme se 'sjedi' u (2, 0).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (tjemena forma): y = a(x − h)² + k je parabola s tjemenom u (h, k). 'a' određuje smjer otvaranja (a > 0 gore, a < 0 dolje) i 'širinu' (veći |a| → uža parabola).",note:"postupak",final:true},{txt:"Točan odgovor: parabola s tjemenom (2,0), otvara se prema gore, nultočka x=2 ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo (tjemena forma): y = a(x − h)² + k je parabola s tjemenom u (h, k). 'a' određuje smjer otvaranja (a > 0 gore, a < 0 dolje) i 'širinu' (veći |a| → uža parabola).",
    "Intuicija: (x − 2)² je 'pomaknuta x²'. Vodoravan pomak 2 u desno; vertikalan pomak 0 (jer k = 0). Tjeme se 'sjedi' u (2, 0).",
    "Česta greška: pomiješati smjer pomaka. (x − 2)² je pomak u DESNO za 2 (ne u lijevo). Trik: tjeme je tamo gdje 'unutar zagrade nula' — to je x = 2.",
    "Provjera: y(2) = 0 (tjeme) ✓; y(0) = 4 ✓; y(4) = 4 ✓ (simetrija)."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:29.1,type:"sa",topic:"geom",points:2,ex:"Težišnica trokuta + Stewartova/težišnička formula. Test razumijevanja: kada se primjenjuje 4m² = 2b² + 2c² − a² (težišnica na stranicu a). Test kombinacije geometrije i algebarske manipulacije.",
  context:"Zadatak 29 (1. dio od 4):",
  q:"Zadan je raznostraničan trokut. Dvije stranice trokuta imaju duljine 6 cm i 7 cm. Duljina težišnice na kraću od tih dviju stranica jednaka je 5 cm. Kolika je duljina treće stranice toga trokuta?",
  sol:{ans:"√19 ≈ 4,36 cm",alt:["sqrt(19)","4,36"]},
  steps:[
    {txt:"Označi stranice trokuta: a = 6 (kraća od dvije zadane), b = 7 (dulja), c = nepoznata. Težišnica m_a polovi stranicu a."},
    {txt:"Formula za težišnicu: m_a² = (2b² + 2c² − a²)/4. Daje vezu između težišnice i triju stranica."},
    {txt:"Uvrsti zadane vrijednosti: m_a = 5, a = 6, b = 7. Stoga 25 = (2·49 + 2c² − 36)/4."},
    {txt:"Pomnoži s 4: 100 = 98 + 2c² − 36 = 62 + 2c² ⇒ 2c² = 38 ⇒ c² = 19."},
    {txt:"c = √19 ≈ 4,359 ≈ 4,36 cm ⇒ c = √19 ≈ 4,36 cm",final:true,note:"verifikacija"},{txt:"Intuicija: formula proizlazi iz primjene kosinusovog poučka u dva pod-trokuta koje težišnica stvara, koristeći činjenicu da težišnica polovi stranicu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (težišnička formula): u svakom trokutu, težišnica m_a na stranicu a zadovoljava 4m_a² = 2b² + 2c² − a², gdje su b i c susjedne stranice (drugim vrhovima).",note:"postupak",final:true},{txt:"Točan odgovor: √19 ≈ 4,36 cm ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (težišnička formula): u svakom trokutu, težišnica m_a na stranicu a zadovoljava 4m_a² = 2b² + 2c² − a², gdje su b i c susjedne stranice (drugim vrhovima).",
    "Intuicija: formula proizlazi iz primjene kosinusovog poučka u dva pod-trokuta koje težišnica stvara, koristeći činjenicu da težišnica polovi stranicu.",
    "Alt metoda: Stewartov poučak — m_a² = (2b² + 2c² − a²)/4 može se izvesti i koordinatnom geometrijom, postavljanjem trokuta s a na x-osi.",
    "Česta greška: pomiješati formulu, npr. napisati m_a² = (2b² + 2c² + a²)/4 (s +a² umjesto −a²) ili dijeliti s 2 umjesto s 4.",
    "Provjera ✓: c² = 19 ⇒ trokut sa stranicama 6, 7, √19 ≈ 4,36 je validan (ispunjava nejednakost trokuta: 4,36 + 6 > 7 ✓, 4,36 + 7 > 6 ✓, 6 + 7 > 4,36 ✓)."
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat."]},
  {id:29.2,img:true,type:"sa",topic:"geom",points:2,img:true,ex:"Presjek kocke ravninom + volumen tetraedra. Test: postavljanje 3D koordinata, identifikacija manjeg dijela (tetraedar BCDE), primjena formule V = (1/6)|det| za tetraedar.",
  context:"Zadatak 29 (2. dio od 4):",
  q:"Zadana je kocka ABCDA₁B₁C₁D₁ brida duljine a. Ravnina koja sadržava dijagonalu BD osnovke i polovište brida CC₁ dijeli tu kocku na dva dijela. Koliki je obujam (volumen) manjega od tih dvaju dijelova?",
  sol:{ans:"V = [FRAC:a³|12]",alt:["V = [FRAC:a³|12]","V=[FRAC:a³|12]","v = [FRAC:a³|12]","≈ V = [FRAC:a³|12]"]},
  solFormula:[{pre:"V = "},{frac:[["a³","12"]]}],
  steps:[
    {txt:"Postavi koordinate kocke: A(0,0,0), B(a,0,0), C(a,a,0), D(0,a,0), A₁(0,0,a), B₁(a,0,a), C₁(a,a,a), D₁(0,a,a). Brid CC₁ ide od (a,a,0) do (a,a,a)."},
    {txt:"Polovište brida CC₁: E = (a, a, a/2). Presječna ravnina prolazi kroz B(a,0,0), D(0,a,0) i E(a,a,a/2)."},
    {txt:"Manji dio kocke je tetraedar s vrhovima B, C, D, E (gdje je C najbliži presjeku jer ostane 'odvojen' od velikog dijela)."},
    {txt:"Volumen tetraedra: V = (1/6)·|det(CB⃗, CD⃗, CE⃗)|, gdje su to vektori iz C prema ostalim trima vrhovima."},
    {txt:"Vektori: CB⃗ = (0,−a,0), CD⃗ = (−a,0,0), CE⃗ = (0,0,a/2). Det = 0·(0·(a/2)−0·0) − (−a)·((−a)·(a/2)−0·0) + 0·... = (−a)·(−a²/2)·(−1) = −a³/2. |Det| = a³/2."},
    {txt:"V = (1/6)·(a³/2) = a³/12 ⇒ V = [FRAC:a³|12]",final:true,note:"verifikacija"},{txt:"Intuicija: tetraedar je 'piramida nad trokutnom bazom'. Volumen = (1/3)·baza·visina; alternativna formula s determinatom dovodi do istog rezultata.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (volumen tetraedra): za tetraedar s vrhom u ishodištu i tri bridna vektora u⃗, v⃗, w⃗, volumen V = (1/6)·|det[u⃗, v⃗, w⃗]| (treća dio paralelepipeda).",note:"postupak",final:true},{txt:"Točan odgovor: V = [FRAC:a³|12] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (volumen tetraedra): za tetraedar s vrhom u ishodištu i tri bridna vektora u⃗, v⃗, w⃗, volumen V = (1/6)·|det[u⃗, v⃗, w⃗]| (treća dio paralelepipeda).",
    "Intuicija: tetraedar je 'piramida nad trokutnom bazom'. Volumen = (1/3)·baza·visina; alternativna formula s determinatom dovodi do istog rezultata.",
    "Alt metoda: identificiraj bazu (npr. trokut BCD) i visinu (od E na ravninu BCD). Trokut BCD ima površinu a²/2 (pravokutni trokut s katetama a). Visina od E = a/2. V = (1/3)·(a²/2)·(a/2) = a³/12.",
    "Česta greška: zaboraviti faktor 1/6 u formuli s determinatom (to je za tetraedar; (1/3) je za općenitu piramidu kada baza nije trokut iz kojeg računamo).",
    "Provjera: volumen kocke = a³. Manji dio = a³/12, što je ~8,3% kocke — razumna veličina za 'mali tetraedar u kutu' ✓"
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti."]},
  {id:29.3,type:"sa",topic:"anal",points:3,ex:"Tangenta na kružnicu — dvostruki uvjet: (a) udaljenost središta od pravca = polumjer; (b) konkretna točka dodira. Test integracije udaljenosti točke od pravca, jednadžbe okomice, i kvadratnog izbora.",
  context:"Zadatak 29 (3. dio od 4):",
  q:"Pravac y = 2x + b je tangenta kružnice (x-1)² + (y+1)² = 5. Odredite točku dodira toga pravca i kružnice ako je b < 0.",
  sol:{ans:"(3, -2)",alt:["(3, -2)","(3,-2)","(3. -2)","≈ (3, -2)"]},
  steps:[
    {txt:"Iz jednadžbe kružnice: središte S(1, −1), polumjer r = √5. Pravac u standardnom obliku: 2x − y + b = 0."},
    {txt:"Uvjet tangente: udaljenost središta od pravca = polumjer. d(S, pravac) = |2·1 − (−1) + b|/√(2² + (−1)²) = |3 + b|/√5 = √5."},
    {txt:"Riješi: |3 + b| = 5 ⇒ 3 + b = 5 ili 3 + b = −5 ⇒ b = 2 ili b = −8. Uvjet b < 0 ⇒ b = −8. Pravac je y = 2x − 8."},
    {txt:"Točka dodira leži na pravcu OKOMITOM iz S na zadani pravac. Nagib zadanog pravca = 2, nagib okomice = −1/2. Okomica iz S(1,−1): y + 1 = −[FRAC:1|2]·(x − 1), tj. y = (−1/2)x − 1/2."},
    {txt:"Sjecište okomice s tangentom: 2x − 8 = (−1/2)x − 1/2 ⇒ (5/2)x = 7,5 ⇒ x = 3. y = 2·3 − 8 = −2."},
    {txt:"Provjera: točka (3, −2) na kružnici? (3−1)² + (−2+1)² = 4 + 1 = 5 ✓. Na pravcu? −2 = 2·3 − 8 = −2 ✓ ⇒ Točka dodira: (3, −2)",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (udaljenost točke od pravca): za pravac Ax + By + C = 0 i točku (x₀, y₀), udaljenost = |Ax₀ + By₀ + C|/√(A² + B²).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (tangenta na kružnicu): pravac je tangenta na kružnicu ako i samo ako je udaljenost središta od pravca jednaka polumjeru kružnice (točno jedno sjecište).",note:"postupak",final:true},{txt:"Točan odgovor: (3, -2) ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (tangenta na kružnicu): pravac je tangenta na kružnicu ako i samo ako je udaljenost središta od pravca jednaka polumjeru kružnice (točno jedno sjecište).",
    "Pravilo 2 (udaljenost točke od pravca): za pravac Ax + By + C = 0 i točku (x₀, y₀), udaljenost = |Ax₀ + By₀ + C|/√(A² + B²).",
    "Pravilo 3 (okomice): nagibi okomih pravaca: k₁ · k₂ = −1. Iz središta okomito na tangentu — to spušta na točku dodira.",
    "Intuicija: 'tangenta dotiče' znači jedna točka kontakta. Geometrijski, ta točka je TAMO GDJE OKOMICA IZ SREDIŠTA SIJEČE TANGENTU.",
    "Česta greška: koristiti samo jedno rješenje |3+b|=5 (zaboraviti drugu mogućnost) i ne provjeriti uvjet b < 0; ili krivo izračunati okomicu (nagib +1/2 umjesto −1/2)."
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]},
  {id:29.4,type:"sa",topic:"anal",points:3,ex:"Elipsa: određivanje parametara + geometrija trokuta fokusi-tjeme. Test integracije: jednadžba elipse, fokusna udaljenost c, koordinate tjemena, izračun stranica trokuta s pomoću udaljenosti.",
  context:"Zadatak 29 (4. dio od 4):",
  q:"Elipsa 25x² + a²y² = 25a² prolazi točkom T(8, 3). Odredite opseg trokuta kojemu su vrhovi u fokusima te elipse i jednome njezinu tjemenu na y-osi.",
  sol:{ans:"20 + 10√3",alt:["20+10sqrt(3)","37,32"]},
  steps:[
    {txt:"Pretvori jednadžbu elipse u standardni oblik: 25x² + a²y² = 25a². Podijeli s 25a²: x²/a² + y²/25 = 1."},
    {txt:"Uvrsti T(8, 3): 64/a² + 9/25 = 1 ⇒ 64/a² = 16/25 ⇒ a² = 100, a = 10. Elipsa: x²/100 + y²/25 = 1 (A = 10, B = 5; A > B, pa fokusi su na x-osi)."},
    {txt:"Fokusna udaljenost: c² = A² − B² = 100 − 25 = 75 ⇒ c = 5√3. Fokusi: F₁(−5√3, 0), F₂(5√3, 0)."},
    {txt:"Tjeme na y-osi (manjoj poluosi): (0, ±B) = (0, ±5). Uzmi npr. (0, 5)."},
    {txt:"Stranice trokuta s vrhovima F₁(−5√3, 0), F₂(5√3, 0), V(0, 5): |F₁V| = √(75 + 25) = √100 = 10; |F₂V| = √(75 + 25) = 10 (simetrija); |F₁F₂| = 2·5√3 = 10√3."},
    {txt:"Opseg = |F₁V| + |F₂V| + |F₁F₂| = 10 + 10 + 10√3 = 20 + 10√3 ≈ 37,32 ⇒ 20 + 10√3 ≈ 37,32",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (fokusi i tjemena): fokusi na osi VELIKE poluosi (ako A > B, na x-osi). Tjemena: (±A, 0) na velikoj osi i (0, ±B) na maloj osi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (elipsa): standardni oblik x²/A² + y²/B² = 1, gdje je A velika poluos i B mala poluos. Fokusna udaljenost: c² = A² − B² (A > B).",note:"postupak",final:true},{txt:"Točan odgovor: 20 + 10√3 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (elipsa): standardni oblik x²/A² + y²/B² = 1, gdje je A velika poluos i B mala poluos. Fokusna udaljenost: c² = A² − B² (A > B).",
    "Pravilo 2 (fokusi i tjemena): fokusi na osi VELIKE poluosi (ako A > B, na x-osi). Tjemena: (±A, 0) na velikoj osi i (0, ±B) na maloj osi.",
    "Intuicija: trokut s vrhovima u fokusima i tjemenu je jednakokračan (zbog simetrije elipse) — dvije stranice (F₁V i F₂V) su jednake duljine.",
    "Alt metoda: koristi 'fokusno svojstvo' elipse: zbroj udaljenosti od dvaju fokusa do bilo koje točke na elipsi jednak je 2A = 20. Tjeme V(0, 5) je na elipsi, pa |F₁V| + |F₂V| = 20, što direktno daje dvije stranice.",
    "Česta greška: zamijeniti velikom i malu poluos (postaviti fokuse na y-osu kada bi trebali biti na x); ili pomiješati c² = A² − B² s c² = A² + B².",
    "Provjera ✓: T(8, 3) na elipsi: 64/100 + 9/25 = 0,64 + 0,36 = 1 ✓. Tjeme (0, 5) na elipsi: 0 + 25/25 = 1 ✓. Fokusi: c² + B² = 75 + 25 = 100 = A² ✓"
  ]},
  {id:30,type:"sa",topic:"niz",points:4,ex:"Mješoviti niz — geometrijski i aritmetički naizmjenično. Test integracije: postavljanje algebarskog sustava iz dvaju različitih nizovskih svojstava, rješavanje kvadratne jednadžbe, dvostruko rješenje.",
  q:"Zadana su četiri broja. Prva tri čine geometrijski niz, a posljednja tri aritmetički niz. Zbroj prvoga i četvrtoga broja jednak je 32, a zbroj drugoga i trećega broja jednak je 24. Odredite zadane brojeve.",
  sol:{ans:"{2, 6, 18, 30}  i  {32, 16, 8, 0}",alt:["2,6,18,30","32,16,8,0"]},
  steps:[
    {txt:"Označi četiri broja kao a, b, c, d. Prva tri (a, b, c) čine geometrijski niz: b = a·r, c = a·r² (gdje je r kvocijent). Posljednja tri (b, c, d) čine aritmetički niz: c − b = d − c, tj. d = 2c − b."},
    {txt:"Iz a, b, c geometrijskog: b = ar, c = ar². Iz aritmetičkog uvjeta: d = 2c − b = 2ar² − ar = ar(2r − 1)."},
    {txt:"Postavi dvije jednadžbe iz zadanih zbrojeva: (1) a + d = 32 ⇒ a + ar(2r − 1) = 32, tj. a(1 + 2r² − r) = 32. (2) b + c = 24 ⇒ ar + ar² = 24, tj. ar(1 + r) = 24."},
    {txt:"Podijeli (1) s (2): (1 + 2r² − r)/(r(1 + r)) = 32/24 = 4/3. Pomnoži unakrsno: 3(1 + 2r² − r) = 4r(1 + r) ⇒ 3 + 6r² − 3r = 4r + 4r² ⇒ 2r² − 7r + 3 = 0."},
    {txt:"Riješi kvadratnu jednadžbu za r: r = (7 ± √(49 − 24))/4 = (7 ± 5)/4 ⇒ r = 3 ili r = 1/2."},
    {txt:"Slučaj r = 3: iz (2) ar(1+r) = 4a = 24 ⇒ a = 6... ali to ne valja, redo: ar(1+r)=24 ⇒ a·3·4 = 12a = 24 ⇒ a = 2. Brojevi: 2, 6, 18, 30. Slučaj r = 1/2: ar(1+r) = a·(1/2)·(3/2) = 3a/4 = 24 ⇒ a = 32. Brojevi: 32, 16, 8, 0 ⇒ {2, 6, 18, 30} ili {32, 16, 8, 0}",final:true,note:"verifikacija"},{txt:"Intuicija: Pravilo 2 (svojstva): u aritm. nizu srednji član je aritmetička sredina susjeda (b = (a+c)/2). U geom. nizu kvadrat srednjeg člana = umnožak susjeda (b² = a·c).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (geometrijski niz): a, ar, ar², ... — uzastopni članovi imaju isti KVOCIJENT r. Pravilo (aritmetički niz): a, a+d, a+2d, ... — uzastopni članovi imaju istu RAZLIKU d.",note:"postupak",final:true},{txt:"Točan odgovor: {2, 6, 18, 30}  i  {32, 16, 8, 0} ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pravilo (geometrijski niz): a, ar, ar², ... — uzastopni članovi imaju isti KVOCIJENT r. Pravilo (aritmetički niz): a, a+d, a+2d, ... — uzastopni članovi imaju istu RAZLIKU d.",
    "Pravilo 2 (svojstva): u aritm. nizu srednji član je aritmetička sredina susjeda (b = (a+c)/2). U geom. nizu kvadrat srednjeg člana = umnožak susjeda (b² = a·c).",
    "Intuicija: 4 nepoznata broja → 2 parametra (a i r) jer su preostali izvedeni; 2 jednadžbe iz zbrojeva → 2 rješenja općenito (kvadratna).",
    "Alt metoda: postavi alternativne oznake — npr. b, c kao zadani, pa izrazi a = b/r i d = 2c − b. Vodi do iste kvadratne za r.",
    "Česta greška: dati samo JEDNO rješenje (zaboraviti drugu mogućnost r-a); ili krivo aritmetičko/geometrijsko: zamijeniti uvjete (npr. tretirati a+d = aritm., kad to nije u zadatku).",
    "Provjera ✓ za {2, 6, 18, 30}: geom 2, 6, 18 (omjer 3) ✓; aritm 6, 18, 30 (razlika 12) ✓; 2+30=32 ✓; 6+18=24 ✓. Za {32, 16, 8, 0}: geom 32, 16, 8 (omjer 1/2) ✓; aritm 16, 8, 0 (razlika −8) ✓; 32+0=32 ✓; 16+8=24 ✓"
  ]}
];

export const qImages = {
  "2015_jesen_A__22.1": () => e(SvgZad22a_2015JA, null),
  "2015_jesen_A__22.2": () => e(SvgZad22b_2015JA, null),
  "2015_jesen_A__24.1": () => e(SvgZad24a_2015JA, null),
  "2015_jesen_A__24.2": () => e(SvgZad24b_2015JA, null),
  "2015_jesen_A__26.1": () => e(SvgZad26_2015JA, null),
  "2015_jesen_A__26.2": () => e(SvgZad26_2015JA, null),
  "2015_jesen_A__28.3": () => e(SvgZad28c_2015JA, null),
  "2015_jesen_A__29.2": () => e(SvgZad29b_2015JA, null),
  "2015_jesen_A__6": () => e(SvgZad6_2015JA, null),
  "2015_jesen_A__8": () => e(SvgZad8_2015JA, null),
  "2015_jesen_A__9": () => e(SvgZad9_2015JA, null),
};
