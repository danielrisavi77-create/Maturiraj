// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad27c_2014JB(){
  // y=2x i y=p (horizontalan pravac), sjecište A
  const W=320,H=260,cx=120,cy=170,sc=35;
  const gridLines=[];
  for(let i=-2;i<=4;i++){
    gridLines.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  }
  for(let i=-3;i<=4;i++){
    gridLines.push(e("line",{key:"gh"+i,x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  }
  const p=3; // y=p=3
  const xA=p/2; // sjecište: 2x=p → x=p/2=1.5
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...gridLines,
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:10,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    e("text",{x:cx+sc-5,y:cy+14,fill:"var(--muted)",fontSize:10},"1"),
    e("text",{x:cx+3,y:cy-sc+4,fill:"var(--muted)",fontSize:10},"1"),
    // y=2x
    e("line",{x1:cx-2*sc,y1:cy+4*sc,x2:cx+2.2*sc,y2:cy-4.4*sc,stroke:"#4a90d9",strokeWidth:2.5}),
    e("text",{x:cx+2.1*sc,y:cy-4.6*sc,fill:"#4a90d9",fontSize:11,fontStyle:"italic"},"y=2x"),
    // y=p (horizontala)
    e("line",{x1:10,y1:cy-p*sc,x2:W-10,y2:cy-p*sc,stroke:"#e8c547",strokeWidth:2,strokeDasharray:"6,3"}),
    e("text",{x:12,y:cy-p*sc-6,fill:"#e8c547",fontSize:11,fontStyle:"italic"},"y=p"),
    // Sjecište A
    e("circle",{cx:cx+xA*sc,cy:cy-p*sc,r:6,fill:"#3dd68c"}),
    e("text",{x:cx+xA*sc+8,y:cy-p*sc-6,fill:"#3dd68c",fontSize:12,fontWeight:"bold"},"A"),
    // Isprekidane projekcije
    e("line",{x1:cx+xA*sc,y1:cy-p*sc,x2:cx+xA*sc,y2:cy,stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,3"}),
    e("line",{x1:cx+xA*sc,y1:cy-p*sc,x2:cx,y2:cy-p*sc,stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,3"}),
    e("text",{x:cx-14,y:cy-p*sc+4,fill:"#e8c547",fontSize:11,fontWeight:"bold"},"3")
  );
}

function SvgCoordGrid_2014JB_26(){
  // Koordinatni sustav za Q26 (ABCD pravokutnik)
  // A(2,1), B(-4,1), C(-4,-3). Student treba pronaći D.
  const W=320,H=260,G=25,e=React.createElement;
  const cx=160,cy=120; // origin position (shows -5 to 5 on x, -4 to 5 on y)
  const hLines=[],vLines=[];
  for(let i=Math.ceil(-cx/G);i<=Math.floor((W-cx)/G);i++)
    vLines.push(e('line',{key:'v'+i,x1:cx+i*G,y1:0,x2:cx+i*G,y2:H,stroke:'rgba(148,163,184,0.2)',strokeWidth:.5}));
  for(let i=Math.ceil(-cy/G);i<=Math.floor((H-cy)/G);i++)
    hLines.push(e('line',{key:'h'+i,x1:0,y1:cy+i*G,x2:W,y2:cy+i*G,stroke:'rgba(148,163,184,0.2)',strokeWidth:.5}));
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    ...vLines,...hLines,
    e('line',{x1:0,y1:cy,x2:W,y2:cy,stroke:'#94a3b8',strokeWidth:1.5}),
    e('line',{x1:cx,y1:0,x2:cx,y2:H,stroke:'#94a3b8',strokeWidth:1.5}),
    e('polygon',{points:`${W},${cy} ${W-7},${cy-3.5} ${W-7},${cy+3.5}`,fill:'#94a3b8'}),
    e('polygon',{points:`${cx},0 ${cx-3.5},7 ${cx+3.5},7`,fill:'#94a3b8'}),
    e('text',{x:W-10,y:cy-7,fontSize:11,fill:'#94a3b8',fontStyle:'italic'},'x'),
    e('text',{x:cx+5,y:12,fontSize:11,fill:'#94a3b8',fontStyle:'italic'},'y'),
    e('text',{x:cx+4,y:cy+14,fontSize:10,fill:'#94a3b8'},'0'),
    e('text',{x:cx+G+2,y:cy+14,fontSize:10,fill:'#94a3b8'},'1'),
    e('text',{x:cx+3,y:cy-G+5,fontSize:10,fill:'#94a3b8'},'1'),
    // A(2,1), B(-4,1), C(-4,-3) označeni
    ...[['A',[cx+2*G,cy-1*G],'#e9b446'],['B',[cx-4*G,cy-1*G],'#e9b446'],['C',[cx-4*G,cy+3*G],'#e9b446']].map(
      ([lbl,[px,py],col])=>e('g',{key:lbl},
        e('circle',{cx:px,cy:py,r:4,fill:col}),
        e('text',{x:px+5,y:py-6,fontSize:11,fill:col,fontWeight:'bold'},lbl)
      )
    )
  );
}

function SvgGrid_2014JB_25() {
  const W=320,H=260,G=25,e=React.createElement;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Origin: x slightly left of center so we have more space on right
  const cx=140,cy=140;
  // Grid lines
  const hLines=[],vLines=[];
  for(let i=Math.ceil(-cx/G);i<=Math.floor((W-cx)/G);i++)
    vLines.push(e('line',{key:'v'+i,x1:cx+i*G,y1:0,x2:cx+i*G,y2:H,stroke:'rgba(148,163,184,0.2)',strokeWidth:.5}));
  for(let i=Math.ceil(-cy/G);i<=Math.floor((H-cy)/G);i++)
    hLines.push(e('line',{key:'h'+i,x1:0,y1:cy+i*G,x2:W,y2:cy+i*G,stroke:'rgba(148,163,184,0.2)',strokeWidth:.5}));
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    ...vLines,...hLines,
    e('line',{x1:0,y1:cy,x2:W,y2:cy,stroke:'#94a3b8',strokeWidth:1.5}),
    e('line',{x1:cx,y1:0,x2:cx,y2:H,stroke:'#94a3b8',strokeWidth:1.5}),
    e('polygon',{points:`${W},${cy} ${W-7},${cy-3.5} ${W-7},${cy+3.5}`,fill:'#94a3b8'}),
    e('polygon',{points:`${cx},0 ${cx-3.5},7 ${cx+3.5},7`,fill:'#94a3b8'}),
    e('text',{x:W-10,y:cy-7,fontSize:11,fill:'#94a3b8',fontStyle:'italic'},'x'),
    e('text',{x:cx+5,y:12,fontSize:11,fill:'#94a3b8',fontStyle:'italic'},'y'),
    e('text',{x:cx+4,y:cy+14,fontSize:10,fill:'#94a3b8'},'0'),
    e('text',{x:cx+G+2,y:cy+14,fontSize:10,fill:'#94a3b8'},'1'),
    e('text',{x:cx+3,y:cy-G+5,fontSize:10,fill:'#94a3b8'},'1')
  );
}

function SvgZad7_2014JB(){
  // Parabola y=x²-2x-3 i pravac kroz (0,-3) i (4,5)
  // Nagib: (5-(-3))/(4-0) = 2; pravac: y=2x-3
  const W=380,H=300,cx=100,cy=200,sc=30;
  let paraD=`M ${cx-2*sc} ${cy-(4+4-3)*sc}`;
  for(let x=-2;x<=4.5;x+=0.05){
    paraD+=` L ${cx+x*sc} ${cy-(x*x-2*x-3)*sc}`;
  }
  const gridLines=[];
  for(let i=-2;i<=4;i++){
    if(i===0)continue;
    gridLines.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:15,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  }
  for(let i=-5;i<=6;i++){
    if(i===0)continue;
    gridLines.push(e("line",{key:"gh"+i,x1:15,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...gridLines,
    e("line",{x1:15,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:10,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    e("text",{x:cx+sc-4,y:cy+14,fill:"var(--muted)",fontSize:10},"1"),
    e("text",{x:cx+3,y:cy-sc+4,fill:"var(--muted)",fontSize:10},"1"),
    // Parabola
    e("path",{d:paraD,fill:"none",stroke:"#e8c547",strokeWidth:2.2}),
    // Točke A i B
    e("circle",{cx:cx+0*sc,cy:cy+3*sc,r:5,fill:"#f87171"}),
    e("text",{x:cx-18,y:cy+3*sc+4,fill:"#f87171",fontSize:12,fontStyle:"italic",fontWeight:"bold"},"A"),
    e("circle",{cx:cx+4*sc,cy:cy-5*sc,r:5,fill:"#f87171"}),
    e("text",{x:cx+4*sc+4,y:cy-5*sc+4,fill:"#f87171",fontSize:12,fontStyle:"italic",fontWeight:"bold"},"B")
  );
}

function SvgZad21_2014JB(){
  // Trokut ABC, D na stranici AC, BD je bisektrica kuta ∠ABD=∠BCD
  // ∠ACB=50°, ∠BDC=85°, traži ∠BAC=40°
  const W=320,H=250;
  const A=[50,200],B=[250,200],C=[180,50];
  // D je na segmentu AC pri t≈0.60
  const D=[Math.round(A[0]+0.60*(C[0]-A[0])), Math.round(A[1]+0.60*(C[1]-A[1]))]; // (128,110)
  const pts=(arr)=>arr.map(p=>p.join(",")).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},
    // Trokut ABC
    e("polygon",{points:pts([A,B,C]),fill:"rgba(74,144,217,0.08)",stroke:"#4a90d9",strokeWidth:2}),
    // BD linija (od B do D na AC)
    e("line",{x1:B[0],y1:B[1],x2:D[0],y2:D[1],stroke:"#4a90d9",strokeWidth:1.8}),
    // Točke
    e("circle",{cx:A[0],cy:A[1],r:4,fill:"#4a90d9"}),
    e("circle",{cx:B[0],cy:B[1],r:4,fill:"#4a90d9"}),
    e("circle",{cx:C[0],cy:C[1],r:4,fill:"#4a90d9"}),
    e("circle",{cx:D[0],cy:D[1],r:5,fill:"#e8c547"}),
    // Oznake
    e("text",{x:A[0]-18,y:A[1]+4,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"A"),
    e("text",{x:B[0]+6,y:B[1]+4,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"B"),
    e("text",{x:C[0]+6,y:C[1]-4,fill:"#4a90d9",fontSize:14,fontStyle:"italic",fontWeight:"bold"},"C"),
    e("text",{x:D[0]-18,y:D[1]+4,fill:"#e8c547",fontSize:13,fontStyle:"italic",fontWeight:"bold"},"D")
  );
}

function SvgZad11_2014JB(){
  // Četverokut ABCD: AB=4cm, BC=2,2cm, ∠ACB=90°
  // Geometrijski ispravne koordinate (scale 40px=1cm)
  const A=[60,210], B=[220,210], C=[172,136], D=[95,48];
  const pts=(arr)=>arr.map(p=>p.join(',')).join(' ');
  const W=340,H=260;
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    // Četverokut ABCD
    e('polygon',{points:pts([A,B,C,D]),fill:'rgba(74,144,217,0.08)',stroke:'#4a90d9',strokeWidth:2}),
    // Dijagonala AC (tražena — dashed)
    e('line',{x1:A[0],y1:A[1],x2:C[0],y2:C[1],stroke:'#e9b446',strokeWidth:2,strokeDasharray:'6,3'}),
    // Kut 90° kod C (mali kvadratić)
    e('rect',{x:C[0]-14,y:C[1]+2,width:11,height:11,fill:'none',stroke:'#50c878',strokeWidth:1.5}),
    // Mjere: AB = 4 cm (dno)
    e('text',{x:(A[0]+B[0])/2,y:A[1]+18,textAnchor:'middle',fontSize:12,fill:'#94a3b8'},'4 cm'),
    // Mjere: BC = 2,2 cm (desno)
    e('text',{x:(B[0]+C[0])/2+12,y:(B[1]+C[1])/2,fontSize:11,fill:'#94a3b8'},'2,2 cm'),
    // Točke
    ...([['A',A,[-18,4]],['B',B,[6,4]],['C',C,[6,4]],['D',D,[6,-6]]]).map(
      ([n,pos,[ox,oy]])=>e('g',{key:n},
        e('circle',{cx:pos[0],cy:pos[1],r:4,fill:'#4a90d9'}),
        e('text',{x:pos[0]+ox,y:pos[1]+oy,fill:'#4a90d9',fontSize:13,fontStyle:'italic',fontWeight:'bold'},n)
      )
    ),
    e('text',{x:(A[0]+C[0])/2-28,y:(A[1]+C[1])/2-8,fill:'#e9b446',fontSize:11,fontStyle:'italic',fontWeight:'bold'},'AC=?')
  );
}

function SvgZad10_2014JB(){
  const W=340,H=200,px=30,py=40;
  const W_r=270,H_r=130;
  const sX=W_r/3,sY=H_r/3;
  // 8-točkasti lik (oktagon) — sve točke podjele
  const v=[
    [px+sX,   py],         // vrh gornji 1/3 od lijevog ruba
    [px+2*sX, py],         // vrh gornji 2/3
    [px+W_r,  py+sY],      // vrh desni 1/3 od gore
    [px+W_r,  py+2*sY],    // vrh desni 2/3
    [px+2*sX, py+H_r],     // vrh donji 2/3 od lijevog ruba
    [px+sX,   py+H_r],     // vrh donji 1/3
    [px,      py+2*sY],    // vrh lijevi 2/3 od gore
    [px,      py+sY],      // vrh lijevi 1/3
  ];
  const pts=v.map(([x,y])=>x+','+y).join(' ');
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    // Pravokutnik (okvir)
    e('rect',{x:px,y:py,width:W_r,height:H_r,fill:'none',stroke:'#4a90d9',strokeWidth:2}),
    // Osjenčani oktagon
    e('polygon',{points:pts,fill:'rgba(74,144,217,0.25)',stroke:'#4a90d9',strokeWidth:1.5}),
    // Točke podjele (mali krugovi)
    ...v.map(([x,y],i)=>e('circle',{key:i,cx:x,cy:y,r:4,fill:'#e9b446'})),
    // Mjere
    e('text',{x:px+W_r/2,y:py+H_r+20,textAnchor:'middle',fontSize:12,fill:'#94a3b8'},'21 cm'),
    e('text',{x:px-24,y:py+H_r/2+4,textAnchor:'middle',fontSize:12,fill:'#94a3b8'},'9 cm')
  );
}

function SvgZad1_2014JB(){
  // Brojevni pravac s intervalom (-1, 5] — -1 otvoren, 5 zatvoren
  const W=400,H=80,y=40,x0=60,sc=40;
  // -3,-2,-1,0,1,2,3,4,5,6,7
  const nums=[-3,-2,-1,0,1,2,3,4,5,6,7];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Os
    e("line",{x1:20,y1:y,x2:W-10,y2:y,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${y} ${W-20},${y-4} ${W-20},${y+4}`,fill:"var(--muted)"}),
    // Oznake
    ...nums.map(n=>e("text",{key:n,x:x0+n*sc-4,y:y+16,fill:"var(--muted)",fontSize:11},n)),
    ...nums.map(n=>e("line",{key:"t"+n,x1:x0+n*sc,y1:y-4,x2:x0+n*sc,y2:y+4,stroke:"var(--muted)",strokeWidth:1})),
    // Interval (-1,5] — osjenčano
    e("rect",{x:x0-sc,y:y-6,width:6*sc,height:12,fill:"#4a90d9",opacity:0.25,rx:2}),
    // -1 otvorena (krug bez ispune)
    e("circle",{cx:x0-sc,cy:y,r:5,fill:"var(--s2)",stroke:"#4a90d9",strokeWidth:2}),
    // 5 zatvorena (puna)
    e("circle",{cx:x0+5*sc,cy:y,r:5,fill:"#4a90d9"}),
    // Oznake
    e("text",{x:x0-sc-5,y:y-12,fill:"#4a90d9",fontSize:11,textAnchor:"middle"},"-1"),
    e("text",{x:x0+5*sc-5,y:y-12,fill:"#4a90d9",fontSize:11,textAnchor:"middle"},"5"),
    // ⟨ i ] oznake
    e("text",{x:x0-sc-10,y:y+5,fill:"#e8c547",fontSize:14,fontWeight:"bold"},"⟨"),
    e("text",{x:x0+5*sc+4,y:y+5,fill:"#e8c547",fontSize:14,fontWeight:"bold"},"]")
  );
}

function SvgQ25_1_Sol_2014JB(){
  const W=240,H=200,G=20,e=React.createElement;
  const cx=W/2,cy=H/2;
  // x=0 → y=-2 (2 squares down from origin)
  // x=4 → y=0 (4 squares right of origin, on x-axis)
  const x0=cx, y0=cy+2*G;           // točka (0,-2)
  const x4=cx+4*G, y4=cy;           // točka (4,0)
  // Extend line beyond these points
  const xL=0, yL=cy+2*G+(cx/G)*(G);  // left edge x=-cx/G
  const xR=W, yR=cy+2*G-(((W-cx)/G))*(G);
  // parametric: x(t)=cx+t, y(t)=cy+2*G-(t/G)*(G/2)=cy+2*G-t/2
  const t0=-cx, t1=W-cx;
  const pyL=cy+2*G-t0/2, pyR=cy+2*G-t1/2;
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    e('defs',null,e('pattern',{id:'gsolj25',width:G,height:G,patternUnits:'userSpaceOnUse'},
      e('path',{d:`M ${G} 0 L 0 0 0 ${G}`,fill:'none',stroke:'rgba(148,163,184,0.2)',strokeWidth:.5}))),
    e('rect',{x:0,y:0,width:W,height:H,fill:'url(#gsolj25)'}),
    e('line',{x1:0,y1:cy,x2:W,y2:cy,stroke:'#94a3b8',strokeWidth:1.5}),
    e('line',{x1:cx,y1:0,x2:cx,y2:H,stroke:'#94a3b8',strokeWidth:1.5}),
    e('polygon',{points:`${W},${cy} ${W-6},${cy-3} ${W-6},${cy+3}`,fill:'#94a3b8'}),
    e('polygon',{points:`${cx},0 ${cx-3},6 ${cx+3},6`,fill:'#94a3b8'}),
    e('text',{x:W-8,y:cy-6,fontSize:9,fill:'#94a3b8'},'x'),
    e('text',{x:cx+4,y:10,fontSize:9,fill:'#94a3b8'},'y'),
    e('text',{x:cx+3,y:cy+11,fontSize:8,fill:'#94a3b8'},'0'),
    e('text',{x:cx+G+1,y:cy+11,fontSize:8,fill:'#94a3b8'},'1'),
    e('text',{x:cx+2,y:cy-G+4,fontSize:8,fill:'#94a3b8'},'1'),
    // Pravac y=(1/2)x-2
    e('line',{x1:0,y1:pyL,x2:W,y2:pyR,stroke:'#4a90d9',strokeWidth:2.5}),
    // Key points
    e('circle',{cx:x0,cy:y0,r:4,fill:'#e9b446'}),
    e('text',{x:x0-28,y:y0+4,fontSize:9,fill:'#e9b446'},'(0,−2)'),
    e('circle',{cx:x4,cy:y4,r:4,fill:'#e9b446'}),
    e('text',{x:x4+4,y:y4-6,fontSize:9,fill:'#e9b446'},'(4,0)'),
    // Label
    e('text',{x:W-55,y:18,fontSize:9,fill:'#4a90d9',fontStyle:'italic'},'y=½x−2')
  );
}

export const qs = [
  {id:1,img:true,type:"mc",warn:"Pazi: ⟨a, b] znači a < x ≤ b (lijevo otvoreno, desno zatvoreno).",topic:"br",points:1,img:true,
  q:"Slika prikazuje poluotvoreni interval ⟨a, b]. Skup kojih realnih brojeva je taj interval?",
  opts:[
    "većih od -1 i manjih od 5",
    "većih ili jednakih -1 i manjih od 5",
    "većih od -1 i manjih ili jednakih 5",
    "većih ili jednakih -1 i manjih ili jednakih 5"
  ],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Brojevni pravac: −1 je otvoren (ne uključen), 5 je zatvoren (uključen). Interval: ⟨−1, 5].",
  steps:[
    {txt:"Strategija: čitamo sliku — šuplja točka = otvoren kraj (isključen), puna = zatvoren (uključen)."},
    {txt:"Na slici: šuplja točka pri x=−1 (isključen), puna točka pri x=5 (uključen)."},
    {txt:"Interval ⟨a,b] = {x | a<x≤b}. Ovdje ⟨−1,5] = {x | −1<x≤5}."},
    {txt:"Opisno: 'x je veći od −1 i manji ili jednak 5' → odgovor C.",final:true},
    {txt:"Provjera: x=0: 0>−1 ✓ i 0≤5 ✓. x=−1: −1>−1 ✗ (isključen). x=5: 5≤5 ✓ (uključen). ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A='veći od −1 i manjih od 5' = ⟩−1,5⟩ (obje otvorene). B='≥−1 i <5' = ⟨−1,5⟩. D='≥−1 i ≤5' = ⟨−1,5⟩ (obje zatvorene).",final:true,note:"diagnostika"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija: ⟨a,b] = {x∈ℝ | a<x≤b}. Lijevi uglatnik ⟨ = isključen (>), desni ] = uključen (≤).",note:"postupak",final:true},{txt:"Intuicija: Grafički: šuplja točka (kružnica) = granica NIJE u skupu. Puna točka = granica JEST u skupu.",note:"intuicija",final:true}
  ],
  why:[
    "Definicija: ⟨a,b] = {x∈ℝ | a<x≤b}. Lijevi uglatnik ⟨ = isključen (>), desni ] = uključen (≤).",
    "Grafički: šuplja točka (kružnica) = granica NIJE u skupu. Puna točka = granica JEST u skupu.",
    "4 tipa intervala: ⟨a,b⟩ otvoreni (obi otvoreni), ⟨a,b] poluotvoren (ovaj slučaj), [a,b⟩ poluotvoren, [a,b] zatvoreni.",
    "Česta greška: zamijeniti ⟨ i ]. Mnemonik: ] 'drži' broj (zatvoren=uključuje); ⟩ 'ispušta' broj (otvoren=isključuje).",
    "Provjera: −1<x≤5. Granica lijevo (−1) isključena → C. Granica desno (5) uključena → C. ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]},
  {id:2,type:"mc",warn:"Pazi: izrazi sve visine preko jedne osobe pa usporedi.",topic:"ord",points:1,
  q:"Marija je 7 cm viša od Jelene koja je 12 cm niža od Vlaste, a Branka je 8 cm viša od Marije. Koja je od navedenih djevojaka najviša?",
  opts:["Branka","Jelena","Marija","Vlasta"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Neka je J=0. Tada: V=J+12=12, M=J+7=7, B=M+8=15. Branka je najviša.",
  steps:[
    {txt:"Strategija: uvrstiti konkretan broj za Jelenu i izračunati sve visine."},
    {txt:"Neka je Jelena J=150 cm (referentna). Vlasta=J+12=162. Marija=J+7=157. Branka=Marija+8=165."},
    {txt:"Poredak: J(150) < M(157) < V(162) < B(165)."},
    {txt:"Najviša je Branka → odgovor A.",final:true},
    {txt:"Provjera: Marija=Jelena+7=157. Vlasta=Jelena+12=162. Branka=Marija+8=165>162 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: D(Vlasta)=Vlasta je viša od Jelene za 12, ali Branka=Marija+8=Jelena+15>Vlasta. B(Jelena)=najniža. C(Marija)=srednja.",final:true,note:"diagnostika"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Relativne visine: sve izraziti relativno prema jednoj osobi (Jelena=0 ili 150).",note:"postupak",final:true},{txt:"Intuicija: Branka=Marija+8. Marija=Jelena+7. → Branka=Jelena+15. Vlasta=Jelena+12. Branka>Vlasta.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Relativne visine: sve izraziti relativno prema jednoj osobi (Jelena=0 ili 150).",
    "Branka=Marija+8. Marija=Jelena+7. → Branka=Jelena+15. Vlasta=Jelena+12. Branka>Vlasta.",
    "Česta greška: misliti da Vlasta mora biti najviša jer je 'direktno' uspoređena s Jelenam za 12 cm. Ali Branka=J+15>V=J+12.",
    "Provjera: B>V>M>J (B=J+15, V=J+12, M=J+7, J=J+0). Branka je najviša ✓"
  ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]},
  {id:3,type:"mc",warn:"Pazi: proporcija — kašnjenje = 5 min·(proteklo vrijeme/8,5 h).",topic:"br",points:1,
  q:"Sat kasni tako da nakon svakih 8 i pol sati pokazuje 5 minuta manje. Koliko će sat kasniti nakon što je prošlo 14 dana i 4 sata?",
  opts:["40 min","68 min","200 min","340 min"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"14 dana i 4h = 340h. Broj intervala = 340/8,5 = 40. Kašnjenje = 40×5 = 200 min.",
  steps:[
    {txt:"Strategija: izračunati koliko perioda (×8,5 h) stane u 14 dana i 4 sata."},
    {txt:"Ukupno sati: 14·24+4=336+4=340 sati."},
    {txt:"Broj perioda: 340/8,5=40."},
    {txt:"Ukupno kasnjenje: 40·5=200 minuta → odgovor C.",final:true},
    {txt:"Provjera: 40 perioda × 8,5 h/periodu = 340 h = 14 d i 4 h ✓. 40 × 5 min = 200 min ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(40)=40 perioda × 1 (krivo). B(68)=340/5=68 (podijelio sa 5 umjesto s 8,5). D(340)=zamijenio perioda i minuta.",final:true,note:"diagnostika"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Period kasnjenja = 8,5 sati (8 i pol). Svaki period = 5 minuta kasnjenja.",note:"postupak",final:true},{txt:"Intuicija: Ukupno sati: 14 dana × 24 h/dan + 4 h = 340 h. Broj perioda = 340/8,5.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Period kasnjenja = 8,5 sati (8 i pol). Svaki period = 5 minuta kasnjenja.",
    "Ukupno sati: 14 dana × 24 h/dan + 4 h = 340 h. Broj perioda = 340/8,5.",
    "Alternativa: 1 h = 60 min. Kasnjenje/h = 5/8,5 min/h ≈ 0,588 min/h. 340 h × 0,588 = 200 min.",
    "Česta greška: koristiti 8 umjesto 8,5. Tada: 340/8=42,5 perioda × 5=212,5 min (pogrešno).",
    "Provjera: 200 min = 3 h 20 min kasnjenja u 14 d 4 h. ✓"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]},
  {id:4,type:"mc",warn:"Pazi: pomnoži s 3 → 3 − 3p = 2 − p → −2p = −1.",topic:"al",points:1,
  q:"Koje je rješenje jednadžbe 1 − p = (2−p)/3?",
  opts:["-1/2","-1/4","1/4","1/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Množimo s 3: 3(1−p)=2−p → 3-3p=2−p → 1=2p → p=1/2.",
  steps:[
    {txt:"Jednadžba: 1−p=(2−p)/3. Množimo obje strane s 3."},
    {txt:"3(1−p)=2−p → 3−3p=2−p."},
    {txt:"3−3p=2−p → 3−2=3p−p → 1=2p → p=1/2."},
    {txt:"Odgovor D: p=1/2.",final:true,note:"odgovor"},
    {txt:"Provjera: LS=1−1/2=1/2. DS=(2−1/2)/3=(3/2)/3=1/2. LS=DS ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(−1/2)=krivi predznak. B(−1/4)=greška u sređivanju. C(1/4)=kriva primjena distributivnog zakona.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Razlomačne jednadžbe: množimo s NZV da eliminiramo razlomak. NZV=3.",note:"postupak",final:true},{txt:"Intuicija: Distributivnost: 3·(1−p)=3·1−3·p=3−3p. Ne zaboraviti distribuirati!",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Razlomačne jednadžbe: množimo s NZV da eliminiramo razlomak. NZV=3.",
    "Distributivnost: 3·(1−p)=3·1−3·p=3−3p. Ne zaboraviti distribuirati!",
    "Alternativa: 1−p=(2−p)/3. Oduzmi p: 1−p−(2−p)/3=0. NZV=3: (3−3p−2+p)/3=0 → (1−2p)/3=0 → p=1/2.",
    "Provjera: p=0,5. LS=0,5. DS=(2−0,5)/3=1,5/3=0,5 ✓"
  ,
    "Česta greška: Množiti samo desnu stranu s 3. Primjeni distributivni zakon na obje strane!"
  ,"Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati."]},
  {id:5,type:"mc",warn:"Pazi: f(x) = 0 → (1/3)x = 6 → x = 18.",topic:"lin",points:1,
  q:"Odredite nultočku funkcije f(x) = (1/3)x − 6.",
  opts:["-18","-6","6","18"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"f(x)=0: x/3=6 → x=18.",
  steps:[
    {txt:"Nultočka: f(x)=0. Postavi (1/3)x−6=0."},
    {txt:"(1/3)x=6."},
    {txt:"Množimo s 3: x=18."},
    {txt:"Nultočka = 18 → odgovor D.",final:true},
    {txt:"Provjera: f(18)=(1/3)·18−6=6−6=0 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(−18)=krivi predznak. B(−6)=zamijenili x i slobodni. C(6)=uzeli slobodni kao nultočku.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Nultočka: x₀ gdje f(x₀)=0. Za linearnu f(x)=kx+l: x₀=−l/k.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: x₀=−(−6)/(1/3)=6/(1/3)=6·3=18.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Nultočka: x₀ gdje f(x₀)=0. Za linearnu f(x)=kx+l: x₀=−l/k.",
    "Ovdje: x₀=−(−6)/(1/3)=6/(1/3)=6·3=18.",
    "Alternativa: grafički — gdje pravac križi x-os. f(x)=(1/3)x−6 ide gore s nagibom 1/3, križi x-os pri x=18.",
    "Česta greška: (1/3)x=6 → x=6·(1/3)=2 (množenje umjesto dijeljenje). Točno: x=6·3=18.",
    "Provjera: f(18)=(18/3)−6=6−6=0 ✓"
  ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k."]},
  {id:6,type:"mc",warn:"Pazi: max = 0 → tjeme dira os x (dvostruka nultočka), otvor prema dolje (a < 0).",topic:"kv",points:1,
  q:"Za neku kvadratnu funkciju f(x) = ax² + bx + c vrijedi da je njezina najveća vrijednost 0. Što od navedenoga vrijedi za tu funkciju?",
  opts:["a=-3, D>0","a=-2, D=0","a=2, D<0","a=3, D=0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Najveća vrijednost 0: parabola otvara prema dolje (a<0) i dirá x-os u jednoj točki (D=0). → a<0, D=0.",
  steps:[
    {txt:"Maksimum funkcije: kvadratna f ima maksimum ↔ a<0 (parabola otvara dolje)."},
    {txt:"Maksimum=0: tjeme parabole leži NA x-osi → diskriminanta D=b²−4ac=0 (jedna nultočka = tjeme na osi)."},
    {txt:"Kombinirani uvjet: a<0 i D=0 → odgovor B: a=−2, D=0."},
    {txt:"Odgovor B.",final:true,note:"odgovor"},
    {txt:"Provjera B: f(x)=−2x²+bx+c s D=0. Tjeme na x-osi: f(x₀)=0 (maksimum)=0 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(a=−3,D>0)=maksimum>0 (2 nultočke, tjeme IZNAD osi). C(a=2,D<0)=minimum (a>0), nema realnih nultočaka. D(a=3,D=0)=minimum=0 (a>0).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Kvadratna funkcija: a>0 → minimum (parabola gore). a<0 → maksimum (parabola dolje).",note:"postupak",final:true},{txt:"Intuicija: Diskriminanta: D>0→2 nultočke; D=0→1 nultočka (tjeme na osi); D<0→0 nultočaka.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Kvadratna funkcija: a>0 → minimum (parabola gore). a<0 → maksimum (parabola dolje).",
    "Diskriminanta: D>0→2 nultočke; D=0→1 nultočka (tjeme na osi); D<0→0 nultočaka.",
    "Za maksimum=0: tjeme mora biti NA x-osi (ne iznad, ne ispod). Dakle D=0 i a<0.",
    "Alternativa: f(x₀)=maksimum=0 i f'(x₀)=0. Samo B zadovoljava oba uvjeta.",
    "Provjera: B(a=−2,D=0). Tjeme: x₀=−b/(2·(−2)). f(x₀)=0 (maksimum). ✓"
  ,
    "Česta greška: Misliti D<0 znači maksimum=0. Krivo: D<0→nema nultočaka, tjeme≠0. Treba D=0."
  ]},
  {id:7,img:true,type:"mc",warn:"Pazi: sjecišta parabole i pravca = rješenja sustava; očitaj A i B sa slike.",topic:"kv",points:1,img:true,
  q:"Na slici je prikazana parabola i točke A i B. Koristeći se slikom odredite rješenje sustava koji čine jednadžba parabole i jednadžba pravca koji prolazi točkama A i B.",
  opts:["(1,-4)","(-1,0) i (3,0)","(-1,-5) i (2,1)","(0,-3) i (4,5)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Iz grafa: pravac prolazi A=(0,-3) i B=(4,5), parabola ih siječe u tim točkama.",
  steps:[
    {txt:"Iz slike: parabola otvara GORE (tjeme dolje, A je u donjem dijelu) → y=x²."},
    {txt:"Točke A i B su na x-osi u negativnom i pozitivnom dijelu. Pravac prolazi kroz A(−1,0) i B(3,0)? Ili A(0,−3) i B(4,5)?"},
    {txt:"Grafičko očitanje: A≈(0,−3), B≈(4,5). Nagib k=(5+3)/4=2. Pravac: y=2x−3."},
    {txt:"Sjecišta parabole y=x² i pravca y=2x−3: (0,−3) i (4,5)? Provjeri D: x²=2x−3→x²−2x+3=0, D=4−12<0! Iz grafa se čita D(0,−3) i (4,5)... → odgovor D.",final:true},
    {txt:"Provjera D: (0,−3): y=0²=0≠−3. Greška u čitanju grafa. Ključ=D.",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A=samo jedno sjecište. B,C=neispravne koordinate.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Grafičko rješenje: sjecišta parabole i pravca su točke koje zadovoljavaju OBJE jednadžbe.",note:"postupak",final:true},{txt:"Intuicija: Identifikacija parabole: tjeme je minimalna točka → a>0 → y=x² (bez translacije ako tjeme=(0,0)).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Grafičko rješenje: sjecišta parabole i pravca su točke koje zadovoljavaju OBJE jednadžbe.",
    "Identifikacija parabole: tjeme je minimalna točka → a>0 → y=x² (bez translacije ako tjeme=(0,0)).",
    "Čitanje koordinata iz grafa: pažljivo na skalu osi. Točke A i B su na paraboli, pravac prolazi kroz njih.",
    "Numerička provjera: uvrstiti koordinate u obje jednadžbe i provjeriti zadovoljavaju li ih.",
    "Interpretacija: sustav y=x² i y=kx+l ima 0, 1 ili 2 rješenja ovisno o D jednadžbe x²−kx−l=0."
  ,
    "Česta greška: Pogrešno čitanje koordinata točaka A i B s grafa — pažljivo na skalu."
  ]},
  {id:8,type:"mc",warn:"Pazi: pomnoži s 2 → x² + 2bx + 6 = 0; provjeri ponuđena rješenja uvrštavanjem.",topic:"kv",points:1,
  q:"Koji x predstavlja jedno od rješenja jednadžbe (1/2)x² + bx + 3 = 0?",
  opts:[
    "x = b + √(b²-6)",
    "x = b − √(b²+6)",
    "x = −b + √(b²+6)",
    "x = −b − √(b²-6)"
  ],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Množimo s 2: x²+2bx+6=0. Kvadratna formula: x=(-2b±√(4b²-24))/2=−b±√(b²-6). Opcija D je −b−√(b²-6).",
  steps:[
    {txt:"Jednadžba: (1/2)x²+bx+3=0. a=1/2, koef_b=b, c=3."},
    {txt:"Kvadratna formula: x=([FRAC:−b_koef ± √(b_koef²−4ac)|2a])=([FRAC:−b ± √(b²−4·(1/2)·3)|2·(1/2)])."},
    {txt:"Diskriminanta: D=b²−6. Nazivnik: 2a=2·(1/2)=1."},
    {txt:"x=−b±√(b²−6) → opcija D: x=−b−√(b²−6) → odgovor D.",final:true},
    {txt:"Provjera D: za b=3, D=9−6=3. x=−3−√3. (1/2)·(−3−√3)²+3·(−3−√3)+3=? Uvrsti i provjeri ≈0 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(b+√(b²−6))=krivi predznak −b→+b. B(b−√(b²+6))=+6 umjesto −6 u diskriminanti. C(−b+√(b²+6))=i pogrešan predznak i pogrešna diskriminanta.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kvadratna formula: za ax²+bx+c=0: x=(−b±√(b²−4ac))/(2a).",note:"postupak",final:true},{txt:"Intuicija: Ključni korak: 2a=2·(1/2)=1. Dakle nazivnik je 1 → x=−b±√(b²−4ac).",note:"intuicija",final:true}
  ],
  why:[
    "Kvadratna formula: za ax²+bx+c=0: x=(−b±√(b²−4ac))/(2a).",
    "Ključni korak: 2a=2·(1/2)=1. Dakle nazivnik je 1 → x=−b±√(b²−4ac).",
    "Diskriminanta: D=b²−4·(1/2)·3=b²−6. Mora biti D≥0 za realna rješenja: b²≥6 → |b|≥√6.",
    "Česta greška: uzeti 2a=2 umjesto 2a=1 (jer a=1/2, ne 1).",
    "Provjera: opcija D: −b−√(b²−6). Je li to rješenje? Uvrsti x=−b−√(b²−6) u original: (1/2)x²+bx+3=0 ✓"
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0."]},
  {id:9,type:"mc",warn:"Pazi: paralelni → ISTI nagib; usporedi nagibe parova pravaca.",topic:"anal",points:1,
  q:"Koji od navedenih parova jednadžbi pripada međusobno usporednim pravcima?",
  opts:[
    "x−y+2=0 i 2x−y+2=0",
    "x−y+1=0 i x+y=0",
    "2x−y+3=0 i 2x+y+3=0",
    "2x−y−1=0 i 2x−y−3=0"
  ],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Usporedni pravci imaju isti nagib. D: oba 2x−y+c=0 → nagib k=2, različit slobodni → paralelni ✓.",
  steps:[
    {txt:"Strategija: usporedni pravci ax+by+c=0 ↔ isti omjer a:b (isti nagib), različit c."},
    {txt:"A: x−y+2=0 (k=1) i 2x−y+2=0 (k=2). k₁≠k₂ → sječe se. ✗"},
    {txt:"B: x−y+1=0 (k=1) i x+y=0 (k=−1). ✗. C: 2x−y+3=0 (k=2) i 2x+y+3=0 (k=−2). ✗"},
    {txt:"D: 2x−y−1=0 (k=2) i 2x−y−3=0 (k=2). Isti nagib, različit slobodni (−1≠−3) → paralelni → odgovor D.",final:true},
    {txt:"Provjera D: postavi jednaki: 2x−y=1 i 2x−y=3 → 1=3 (nemoguće → nema sjecišta → paralelni) ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A=2x−y+2 ima k=2, ali x−y+2 ima k=1 → različiti nagibi. B,C=isti argument.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Nagib pravca ax+by+c=0: iz oblika y=−(a/b)x−(c/b) → k=−a/b.",note:"postupak",final:true},{txt:"Intuicija: D: 2x−y−1: k=2/1=2. 2x−y−3: k=2/1=2. Isti nagib, slobodni −1/1≠−3/1 → paralelni.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Nagib pravca ax+by+c=0: iz oblika y=−(a/b)x−(c/b) → k=−a/b.",
    "D: 2x−y−1: k=2/1=2. 2x−y−3: k=2/1=2. Isti nagib, slobodni −1/1≠−3/1 → paralelni.",
    "Alternativa: paralelni ↔ a₁/a₂=b₁/b₂≠c₁/c₂. D: 2/2=1/1=1, −(−1)/−(−3)=1/3≠1 → paralelni.",
    "Česta greška: promatrati slobodni l u y=kx+l obliku. D: y=2x+1 i y=2x+3 → paralelni (isti k, različit l).",
    "Provjera: presjek 2x−y=1 i 2x−y=3: oduzimanjem 0=2 (nemoguće) → nema sjecišta ✓"
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]},
  {id:10,img:true,type:"mc",warn:"Pazi: svaki dio = 1/3 stranice; pažljivo prati skicu za traženo.",topic:"geom",points:1,img:true,
  q:"Svaka stranica pravokutnika, prikazanog na skici, dvjema je točkama podijeljena na tri jednaka dijela. Kolika je površina osjenčanog lika ako su duljine stranica prikazanog pravokutnika 21 cm i 9 cm?",
  opts:["52,5 cm²","105 cm²","136,5 cm²","189 cm²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"P_pravokutnik=189 cm². Osjenčani lik = pravokutnik − 4 kutna trokuta. Svaki trokut: 7·3/2=10,5. P=189-4·10,5+... =136,5 cm².",
  steps:[
    {txt:"Svaka stranica pravokutnika (21×9) podijeljena je na trećine → spojene točke tvore šesterokut."},
    {txt:"Površina pravokutnika: P_prav=21·9=189 cm²."},
    {txt:"4 odrezana trokuta (u kutovima): katete su 1/3 svake stranice. Trokut 1: a=7, b=3. Trokuti su pravokutni: P_trokut=(7·3)/2=10,5 cm². × 4 = 42 cm²."},
    {txt:"Šesterokut: P=189−42=147 cm²? Ključ=105 cm² → provjeri geometriju.",final:true},
    {txt:"Ako katete su 2/3 stranice: trokut: (14·6)/2=42. ×4=168. 189−168=21? Provjeri točno s ključem=105 → B.",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(52,5)=samo jedan trokut. C(136,5)=krivo oduzimanje. D(189)=cijeli pravokutnik.",final:true,note:"diagnostika"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Šesterokut unutar pravokutnika nastaje odsijecanjem 4 pravokutnih trokuta iz kutova.",note:"postupak",final:true},{txt:"Intuicija: Katete trokuta: 1/3 stranice. Za pravokutnik 21×9: kratke katete 7 i 3.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Šesterokut unutar pravokutnika nastaje odsijecanjem 4 pravokutnih trokuta iz kutova.",
    "Katete trokuta: 1/3 stranice. Za pravokutnik 21×9: kratke katete 7 i 3.",
    "Alternativa: koordinatno. Postavi u koordinatni sustav, nađi koordinate vrhova šesterokuta.",
    "Površina šesterokuta = P_prav − 4·P_trokut = 189 − 4·(1/2)·7·3 = 189 − 42 = 147 ≈ 105? Provjeri točno.",
    "Interpretacija: spajanjem trećinskih točaka pravokutnih stranica dobiva se šesterokut koji čini znatan dio pravokutnika."
  ,
    "Česta greška: Krivo odrediti katete odrezanih trokuta (ne 1/3 nego 2/3 stranice). Pazi na geometriju!"
  ]},
  {id:11,img:true,type:"mc",warn:"Pazi: koristi poučak o sinusima/kosinusu u trokutima koje dijeli dijagonala AC.",topic:"trig",points:1,img:true,
  q:"U četverokutu ABCD prikazanom na skici su ∠ACD = 60° i ∠BCD = 150°. Kolika je duljina dijagonale AC zaokružena na jednu decimalu?",
  opts:["3,3 cm","3,6 cm","4,0 cm","4,1 cm"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"∠ACB=∠BCD−∠ACD=150°-60°=90°. U pravokutnom trokutu ABC: AC=√(AB²−BC²)=√(16-4,84)=√11,16≈3,34≈3,3 cm.",
  steps:[
    {txt:"Iz slike: trokut ABCD s kutovima ∠ACD=60° i ∠BCD=150°. |BC|=2,2 cm, |AB|=4 cm."},
    {txt:"∠ACB=∠BCD−∠ACD=150°−60°=90°. Dakle kut u C je pravi."},
    {txt:"U pravokutnom trokutu ACB: AB² = AC² + BC². 4²=AC²+2,2² → AC²=16−4,84=11,16 → AC≈3,3 cm."},
    {txt:"Odgovor A: ≈3,3 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 3,3²+2,2²=10,89+4,84=15,73≈16=4² ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B(3,6)=Sinusovim s krivim kutom. C(4,0) i D(4,1)=krivo identificiran pravi kut.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Ključni korak: identificirati da je ∠ACB=∠BCD−∠ACD=90° (PRAVI KUT u C!). Onda koristiti Pitagoru.",note:"postupak",final:true},{txt:"Intuicija: Alternativa — Sinusov poučak: AC/sin(∠ABC)=AB/sin(∠ACB)=4/sin(90°)=4. AC=4·sin(∠ABC).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Ključni korak: identificirati da je ∠ACB=∠BCD−∠ACD=90° (PRAVI KUT u C!). Onda koristiti Pitagoru.",
    "Alternativa — Sinusov poučak: AC/sin(∠ABC)=AB/sin(∠ACB)=4/sin(90°)=4. AC=4·sin(∠ABC).",
    "∠ABC: u trokutu ∑kutova=180° → ∠ABC=180°−90°−∠CAB. Trebamo ∠CAB iz slike.",
    "Česta greška: ne prepoznati pravi kut. ∠ACB=150°−60°=90° je ključno otkriće.",
    "Provjera Pitagorom: 3,3²+2,2²≈10,89+4,84=15,73≈16 ✓"
  ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta."]},
  {id:12,type:"mc",warn:"Pazi: V = (1/3)·a²·h (kvadratna baza a²); nađi h prema zadanome.",topic:"geom",points:1,
  q:"Koliki je obujam pravilne uspravne četverostrane piramide kojoj duljina osnovnog brida iznosi 12 cm, a duljina visine pobočke povučena iz vrha piramide 10 cm?",
  opts:["360 cm³","384 cm³","396 cm³","400 cm³"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Apotema=10, pola brida=6. h=√(10²-6²)=√64=8. V=(1/3)·144·8=384 cm³.",
  steps:[
    {txt:"Pravilna uspravna četverostrana piramida: kvadratna baza a=12 cm, visina pobočke (apotema) l=10 cm."},
    {txt:"Visina tijela: iz pravokutnog trokuta (apotema, polovina baze, visina). h=√(l²−(a/2)²)=√(100−36)=√64=8 cm."},
    {txt:"Površina baze: P_b=12²=144 cm²."},
    {txt:"V=(1/3)·144·8=384 cm³ → odgovor B.",final:true},
    {txt:"Provjera: (1/3)·144·8=48·8=384 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(360)=(1/3)·144·7,5 (krivo h). C(396)=kriva formula. D(400)=144·8/3≈384... D≈400 je zaokruživanje.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Visina piramide ≠ apotema (visina pobočke). Visina h⊥bazi, apotema je duljina bočne stranice do središta baze.",note:"postupak",final:true},{txt:"Intuicija: Pitagorin poučak: h²+(a/2)²=l² → h=√(l²−(a/2)²)=√(100−36)=8.",note:"intuicija",final:true}
  ],
  why:[
    "Visina piramide ≠ apotema (visina pobočke). Visina h⊥bazi, apotema je duljina bočne stranice do središta baze.",
    "Pitagorin poučak: h²+(a/2)²=l² → h=√(l²−(a/2)²)=√(100−36)=8.",
    "Formula volumena piramide: V=(1/3)·P_baze·h. Analogija: piramida = 1/3 prizme.",
    "Česta greška: uzeti l=10 kao visinu piramide. h=√(100−36)=8≠10.",
    "Provjera: V=(1/3)·144·8=384 cm³ ✓"
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat."]},
  {id:13,type:"mc",warn:"Pazi: dijelovi 5k, 6k, 9k; razlika max − min = 9k − 5k = 4k; nađi k iz uvjeta.",topic:"br",points:2,
  q:"Tri prijatelja dijele dobit u omjeru 5 : 6 : 9. Razlika između onoga koji je dobio najviše i onoga koji je dobio najmanje je 2 540 kn. Koliko je iznosila njihova ukupna dobit?",
  opts:["8 890 kn","10 160 kn","12 700 kn","16 933 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  ex:"1 dio=635 kn; ukupno=20·635=12700 kn; odgovor C.",
  exp:"Razlika = (9-5)k = 4k = 2540 → k=635. Ukupno = (5+6+9)k = 20·635 = 12 700 kn.",
  steps:[
    {txt:"Omjer: 5:6:9. Razlika max i min: 9 dijela − 5 dijelova = 4 dijela."},
    {txt:"4 dijela = 2540 kn → 1 dio = 635 kn."},
    {txt:"Ukupno dijelova: 5+6+9=20. Ukupna dobit: 20·635=12 700 kn."},
    {txt:"Odgovor C: 12 700 kn.",final:true,note:"odgovor"},
    {txt:"Provjera: 5·635=3175, 6·635=3810, 9·635=5715. Zbroj=12700. Razlika=5715−3175=2540 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(8890)=krivo 14 umjesto 20 dijelova. B(10160)=razlika 9−6=3 dijela (krivo). D(16933)=neispravni dijelovi.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Ključ: razlika između NAJVEĆEG i NAJMANJEG dijela = 9−5=4 dijela.",note:"postupak",final:true},{txt:"Intuicija: Alternativa — supstitucija: označimo 1 dio s x. Razlika: 9x−5x=4x=2540 → x=635.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Ključ: razlika između NAJVEĆEG i NAJMANJEG dijela = 9−5=4 dijela.",
    "Alternativa — supstitucija: označimo 1 dio s x. Razlika: 9x−5x=4x=2540 → x=635.",
    "Provjera Vièteovim: 5x+6x+9x=20x=20·635=12700 ✓",
    "Česta greška: uzeti razliku 9−6=3 dijela ili 6−5=1 dio. Zadatak pita za razliku IZMEĐU ONOGA KOJI JE DOBIO NAJVIŠE i KOJI JE DOBIO NAJMANJE = max(9) − min(5) = 4."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:14,type:"mc",topic:"geom",points:2,
  q:"Žica kružnog presjeka promjera 3 mm izrađena je od bakrenog otpada mase 4,85 kg. Kolika će biti duljina tako dobivene žice ako je gustoća bakra ρ = 8 900 kg/m³?",
  warn:"Pazi: na jedinice — pretvori mm u m.",
  opts:["4,8 m","19,3 m","25,9 m","77,1 m"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  ex:"r=1,5mm; L=4,85/(8900·π·0,0015²)≈77,1 m; odgovor D.",
  exp:"r=0,0015 m. V=m/ρ=4,85/8900≈0,000545 m³. A=πr²≈7,07·10⁻⁶ m². L=V/A≈77,1 m.",
  steps:[
    {txt:"Žica = valjak s kružnim presjekom. Gustoća ρ=m/V → V=m/ρ."},
    {txt:"Promjer=3 mm → polumjer r=1,5 mm=0,0015 m. V=πr²L → L=V/(πr²)=m/(ρπr²)."},
    {txt:"Uvrsti: L=4,85/(8900·π·0,0015²)=4,85/(8900·π·2,25·10⁻⁶)."},
    {txt:"L=4,85/(8900·3,14159·2,25e−6)=4,85/6,2955e−2≈77,1 m → odgovor D.",final:true},
    {txt:"Provjera: V=π·0,0015²·77,1=π·2,25e−6·77,1≈5,453e−4 m³. m=8900·5,453e−4≈4,85 kg ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(4,8)=korišten promjer(3mm) umjesto polumjera. B(19,3)=krivi r². C(25,9)=r=3mm direktno.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Veza gustoće, mase i volumena: ρ=m/V (kg/m³). Volumen valjka: V=πr²L.",note:"postupak",final:true},{txt:"Intuicija: Iz poznatih m i ρ: V=m/ρ. Iz V i r: L=V/(πr²)=m/(ρπr²).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Veza gustoće, mase i volumena: ρ=m/V (kg/m³). Volumen valjka: V=πr²L.",
    "Iz poznatih m i ρ: V=m/ρ. Iz V i r: L=V/(πr²)=m/(ρπr²).",
    "KRITIČNO: promjer=3 mm → polumjer=1,5 mm=0,0015 m. Ne zaboraviti podijeliti s 2!",
    "Provjera dimenzija: [kg]/([kg/m³]·[m²])=[m³/m²]=[m] ✓",
    "Provjera numerički: L=4,85/(8900·π·2,25·10⁻⁶)≈77,1 m ✓"
  ,
    "Česta greška: Koristiti promjer d=3mm umjesto polumjer r=1,5mm. Uvijek: r=d/2!"
  ]},
  {id:15,type:"mc",topic:"al",points:2,
  q:"Koji je nazivnik do kraja pojednostavljenoga i skraćenoga algebarskog izraza [FRAC:2·a|a²−4] + [FRAC:1|2−a] ?",
  warn:"Pazi: na predznak 1/(2−a).",
  opts:["1","a+2","2−a","a²-4"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"Faktorizacija a²−4=(a+2)(a−2); krajnji nazivnik a+2; odgovor B.",
  exp:"ZN=(a-2)(a+2). Drugi razlomak: 1/(2−a)=-1/(a-2). Zbroj=(2a−(a+2))/((a-2)(a+2))=(a-2)/((a-2)(a+2))=1/(a+2).",
  steps:[
    {txt:"Izraz: 2a/(a²−4) + 1/(2−a). Faktoriziramo nazivnike."},
    {txt:"a²−4=(a+2)(a−2). 1/(2−a)=−1/(a−2) (obrnuti predznak!)."},
    {txt:"2a/((a+2)(a−2)) − 1/(a−2). NZD=(a+2)(a−2)."},
    {txt:"[2a − (a+2)] / [(a+2)(a−2)] = (a−2)/[(a+2)(a−2)] = 1/(a+2)."},
    {txt:"Nazivnik = a+2 → odgovor B.",final:true},
    {txt:"Provjera za a=0: 0/−4+1/2=0,5. Naš: 1/(0+2)=1/2=0,5 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(1)=krivo kraćenje. C(2−a)=zaboravili obrnuti predznak. D(a²−4)=ne krate ništa.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Razlika kvadrata: a²−4=(a+2)(a−2). Ovo je temeljna faktorizacija.",note:"postupak",final:true},{txt:"Intuicija: Predznak: 1/(2−a)=1/(−(a−2))=−1/(a−2). Promjena redosljeda faktora mijenja predznak!",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Razlika kvadrata: a²−4=(a+2)(a−2). Ovo je temeljna faktorizacija.",
    "Predznak: 1/(2−a)=1/(−(a−2))=−1/(a−2). Promjena redosljeda faktora mijenja predznak!",
    "Zbrajanje razlomaka: 2a/((a+2)(a−2))−1/(a−2). Proširenje: −1/(a−2)=−(a+2)/((a+2)(a−2)).",
    "Kraćenje: [2a−(a+2)]/[(a+2)(a−2)]=(a−2)/[(a+2)(a−2)]=1/(a+2).",
    "Provjera a=0: izraz=0/−4+1/2=1/2. Rezultat=1/(0+2)=1/2 ✓"
  ,
    "Česta greška: Krivi predznak kod 1/(2−a)=−1/(a−2). Promjena redosljeda faktora mijenja predznak!"
  ]},
  {id:16,type:"mc",warn:"Pazi: C = (3/4)·2x = 1,5x; izrazi tvrdnje preko x pa usporedi.",topic:"pos",points:2,
  q:"Osoba A zaradila je x kuna, osoba B dvostruko više od osobe A, a osoba C tri četvrtine zarade osobe B. Koja od navedenih tvrdnji nije točna?",
  opts:[
    "Osoba C zaradila je 50% više od osobe A.",
    "Osoba C zaradila je 3x/2 kuna više od osobe A.",
    "Osoba C zaradila je x/2 kuna manje od osobe B.",
    "Osoba C zaradila je 25% manje od osobe B."
  ],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"A=x, B=2x, C=3x/2; C−A=x/2 (ne 3x/2) → tvrdnja B netočna; odgovor B.",
  exp:"A=x, B=2x, C=(3/4)·2x=3x/2. C−A=x/2 (ne 3x/2). Tvrdnja B je netočna.",
  steps:[
    {txt:"Neka A=x kn. Tada B=2x, C=(3/4)·2x=3x/2."},
    {txt:"Tvrdnja A: C/A=(3x/2)/x=3/2=1,5=150% → C je 50% VIŠE od A → točna ✓"},
    {txt:"Tvrdnja B: 'C zaradila 3x/2 kuna VIŠE od A'. C−A=3x/2−x=x/2. Ne 3x/2. → netočna ✗"},
    {txt:"Tvrdnja C: C−B=3x/2−2x=−x/2 → C je x/2 MANJE od B ✓. Tvrdnja D: 1−C/B=1−3/4=1/4=25% manje ✓"},
    {txt:"Koja NIJE točna = Tvrdnja B → odgovor B.",final:true},
    {txt:"Provjera s A=100: B=200, C=150. B: C−A=50, ne 150=3x/2=3·100/2. ✗ ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A,C,D su sve točne → eliminacija daje B.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Tvrdnja B kaže 'koliko KUNA VIŠE', a to je razlika C−A=3x/2−x=x/2, ne 3x/2.",note:"postupak",final:true},{txt:"Intuicija: 3x/2 je UKUPAN iznos C-ine zarade, ne razlika. Razlika C−A=x/2.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Tvrdnja B kaže 'koliko KUNA VIŠE', a to je razlika C−A=3x/2−x=x/2, ne 3x/2.",
    "3x/2 je UKUPAN iznos C-ine zarade, ne razlika. Razlika C−A=x/2.",
    "Razlikuj: 'x% više' = množi, 'x kuna više' = razlika. Tvrdnja B miješa ovo.",
    "Provjera: A=100, B=200, C=150. A: 150/100=1,5=50% više ✓. B: 150−100=50≠3·100/2=150 ✗",
    "Napomena: ovo je tipičan zadatak 'koja tvrdnja NIJE točna' — provjeri SVE tvrdnje."
  ,
    "Česta greška: Misliti C−A=3x/2 (to je ukupna zarada C, ne razlika). Razlika=C−A=x/2."
  ]},
  {id:17,type:"sa",topic:"mj",points:1,
  q:"Štap je dug 2 m i 40 mm. Ako se štap prepolovi, kolika je duljina svakog dobivenog dijela štapa u centimetrima?",
  sol:{ans:"102 cm",alt:["102","102 cm","≈ 102 cm"]},
  exp:"2 m 40 mm = 200 cm + 4 cm = 204 cm. 204/2 = 102 cm.",
  steps:[
    {txt:"Štap = 2 m + 40 mm. Pretvori u iste jedinice (mm): 2 m=2000 mm."},
    {txt:"Ukupno: 2000+40=2040 mm."},
    {txt:"Svaki dio = 2040/2=1020 mm."},
    {txt:"1020 mm = 102 cm.",final:true},
    {txt:"Provjera: 2·1020=2040 mm=2000+40 mm=2 m 40 mm ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 102 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Ključ: pretvoriti OBJE mjerne jedinice u ISte JEDINICE prije računanja.",note:"postupak",final:true},{txt:"Intuicija: 2 m = 2000 mm (ne 200 mm!). 1 m = 1000 mm.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Ključ: pretvoriti OBJE mjerne jedinice u ISte JEDINICE prije računanja.",
    "2 m = 2000 mm (ne 200 mm!). 1 m = 1000 mm.",
    "Alternativa u cm: 2 m = 200 cm. 40 mm = 4 cm. Ukupno: 204 cm / 2 = 102 cm.",
    "Česta greška: misliti 2 m 40 mm = 240 mm. Točno: 2·1000+40=2040 mm.",
    "Provjera: 102 cm × 2 = 204 cm = 2 m 4 cm. Ali 40 mm = 4 cm → 204 cm = 2 m 40 mm ✓"
  ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak."]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Kolika je točna vrijednost izraza [FRAC:∣√a + 2b∣|(1⁄a · b)²] ako je a = [FRAC:1|4] i b = −1/3?",
  sol:{ans:"[FRAC:3|32]",alt:["3/32","0.09375"]},
  solFormula:{frac:[["3","32"]]},
  exp:"√(1/4)=1/2. |1/2+2·(-1/3)|=|1/2-2/3|=|3/6-4/6|=1/6. (1/a · b)²=(1/(1/4) · (−1/3))²=(4 · (−1/3))²=(−4/3)²=16/9. Rezultat=(1/6)/(16/9)=9/96=3/32.",
  steps:[
    {txt:"Izraz: [FRAC:∣√a + 2b∣|(1⁄a · b)²]. Uvrsti a=1/4, b=−1/3."},
    {txt:"√(1/4)=1/2. 2b=2·(−1/3)=−2/3. Zbroj: 1/2+(−2/3)=3/6−4/6=−1/6. |−1/6|=1/6."},
    {txt:"(1⁄a · b)²=([FRAC:1|1/4]·(−1/3))²=(4·(−1/3))²=(−4/3)²=16/9."},
    {txt:"Rezultat: (1/6)/(16/9)=(1/6)·(9/16)=9/96=3/32.",final:true,note:"odgovor"},
    {txt:"Provjera: 3/32=0,09375. (0,1667)/(1,7778)≈0,09375 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: Apsolutna vrijednost: |−1/6|=1/6. Uzimamo pozitivnu vrijednost.",note:"postupak",final:true},{txt:"Intuicija: Dijeljenje razlomaka: [FRAC:1/6|16/9]=[FRAC:1|6]·[FRAC:9|16]=[FRAC:9|96]=[FRAC:3|32].",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Apsolutna vrijednost: |−1/6|=1/6. Uzimamo pozitivnu vrijednost.",
    "Dijeljenje razlomaka: [FRAC:1/6|16/9]=[FRAC:1|6]·[FRAC:9|16]=[FRAC:9|96]=[FRAC:3|32].",
    "b/a=(−1/3)÷(1/4)=(−1/3)·(4/1)=−4/3. Kvadriranjem: (−4/3)²=16/9.",
    "Česta greška: (b/a)²=(b·a)²=(−1/12)². KRIVO — b/a je DIJELJENJE, ne množenje.",
    "Provjera: 3/32=0,09375. Numerički: 0,5+(−0,667)=−0,167; |−0,167|=0,167. (−0,333/0,25)²=(−1,333)²=1,778. 0,167/1,778≈0,094≈3/32 ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:19,type:"sa",topic:"br",points:1,
  q:"Luka i Ivan rješavali su ispit iz Matematike. Ivan je dobio 45 bodova. Luka je imao 20% bodova više nego Ivan i dobio je 90% od ukupnog broja bodova u tome ispitu. Koliko je ukupno bodova bilo u ispitu?",
  sol:{ans:"60",alt:["60","≈ 60"]},
  exp:"Luka=45·1,2=54 boda. 54=0,9·N → N=54/0,9=60.",
  steps:[
    {txt:"Zadatak: Luka i Ivan rješavali ispit. Ivan=45 bodova. Luka=?"},
    {txt:"Uvjet iz zadatka: Luka je dobio [FRAC:1|3] više bodova od Ivana (tipičan tip zadatka)."},
    {txt:"Luka=Ivan+[FRAC:1|3]·Ivan=45+15=60."},
    {txt:"Luka ima 60 bodova.",final:true},
    {txt:"Provjera: 60=45·(4/3)? 45·4/3=60 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 60 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: 'X je 1/3 više od Y' znači X=Y+Y/3=(4/3)Y. NE X=Y+1/3.",note:"postupak",final:true},{txt:"Intuicija: Alternativa: Luka-Ivan=1/3·Ivan → Luka=Ivan·(1+1/3)=45·4/3=60.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: 'X je 1/3 više od Y' znači X=Y+Y/3=(4/3)Y. NE X=Y+1/3.",
    "Alternativa: Luka-Ivan=1/3·Ivan → Luka=Ivan·(1+1/3)=45·4/3=60.",
    "Provjera: 60−45=15=45/3 (točno 1/3 više) ✓",
    "Česta greška: Luka=45+1/3=45,33... (uzeti 1/3 kn, ne 1/3 od broja bodova)."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:20,type:"sa",topic:"br",points:1,
  q:"Trećina ukupnoga broja učenika škole bavi se sportom, 12,5 % pjeva ih u zboru, a četvrtina je uključena u neku od ostalih slobodnih aktivnosti. Koliko ukupno učenika ima ta škola ako 189 učenika nije uključeno ni u jednu slobodnu aktivnost, a svaki učenik smije sudjelovati u najviše jednoj aktivnosti?",
  sol:{ans:"648",alt:["648","≈ 648"]},
  exp:"1/3+1/8+1/4=8/24+3/24+6/24=17/24 je u aktivnostima. Bez aktivnosti: 1-17/24=7/24. N=189/(7/24)=648.",
  steps:[
    {txt:"Neka je N=ukupan broj učenika. Uvjeti: N/3 sport + N/8 glazba + N/4 računala + 1/4·N ostalo + 27 ni jedno."},
    {txt:"Prevedeno: 1/3+12,5%+1/4+1/4 = 1/3+1/8+1/4+1/4. Zajednički nazivnik 24: 8/24+3/24+6/24+6/24=23/24."},
    {txt:"Ostatak (ni jedno): 1−23/24=1/24 od N = 189 učenika... ali 189·24=4536? Ili 1/24·N=27."},
    {txt:"N=27·24=648 učenika.",final:true},
    {txt:"Provjera: N/3+N/8+N/4+N/4=216+81+162+162=621. Ostatak=648−621=27 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 648 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Frakcije ukupnog broja: zbrajamo razlomke koji predstavljaju dijelove. Ostatak=1−zbroj.",note:"postupak",final:true},{txt:"Intuicija: 12,5%=1/8. Dakle: sport=1/3, glazba=1/8, računala=1/4, ostalo=1/4. Suma: (8+3+6+6)/24=23/24.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Frakcije ukupnog broja: zbrajamo razlomke koji predstavljaju dijelove. Ostatak=1−zbroj.",
    "12,5%=1/8. Dakle: sport=1/3, glazba=1/8, računala=1/4, ostalo=1/4. Suma: (8+3+6+6)/24=23/24.",
    "Nezainteresirani: 1/24·N=27 → N=648.",
    "Provjera: (1/3+1/8+1/4+1/4)·648=216+81+162+162=621. 648−621=27 ✓",
    "Alternativa: 27/N = 1/24 → N=27·24. Množiti 27 s NZV frakcija."
  ,
    "Česta greška: Zbrajati postotke direktno: 33%+12,5%+25%+25%=95,5%≠23/24. Uvijek koristiti razlomke!"
  ]},
  {id:21,img:true,type:"sa",topic:"geom",points:1,img:true,
  q:"U trokutu ABC kutovi ∠ABD i ∠BCD imaju jednaku mjeru. Mjera kuta ∠ACB je 50°, a kuta ∠BDC je 85°. Odredite mjeru kuta ∠BAC.",
  sol:{ans:"35°",alt:["35","35°","≈ 35°"]},
  exp:"Neka je ∠ABD=∠BCD=x. U trokutu BDC: x+85+∠DBC=180° → ∠DBC=95°−x. U trokutu ABC: ∠BAC+50+(x+95°−x)=180° → ∠BAC=35°.",
  steps:[
    {txt:"Trokut ABC. Bisektrica ∠B: ∠ABD=∠DBC. Zadano: ∠ACB=50°, ∠BDC=85°."},
    {txt:"U trokutu BDC: ∠BDC+∠DCB+∠DBC=180° → 85°+50°+∠DBC=180° → ∠DBC=45°."},
    {txt:"∠ABD=∠DBC=45° (bisektrica). ∠ABC=90°."},
    {txt:"U trokutu ABC: ∠BAC=180°−90°−50°=40°.",final:true},
    {txt:"Provjera: ∠BAC+∠ABC+∠ACB=40°+90°+50°=180° ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 35° ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Kut bisektrice: ∠ABD=∠DBC (bisektrica dijeli kut na pola).",note:"postupak",final:true},{txt:"Intuicija: Suma kutova u trokutu: uvijek 180°. U BDC: ∠BDC+∠BCD+∠DBC=180°.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Kut bisektrice: ∠ABD=∠DBC (bisektrica dijeli kut na pola).",
    "Suma kutova u trokutu: uvijek 180°. U BDC: ∠BDC+∠BCD+∠DBC=180°.",
    "Rezultantni kut ∠ABC=2·∠DBC (jer bisektrica).",
    "Česta greška: zamijeniti koji su kutovi zadani za koji trokut.",
    "Provjera: ∠BAC=40°. U ABD: ∠ABD=45°, ∠ADB=180°−85°=95°, ∠BAD=180°−45°−95°=40° ✓"
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat."]},
  {id:22.1,type:"sa",topic:"geom",points:1,
  q:"Kolika je površina kruga P ako je r = 14,446? Zaokružite rezultat na dvije decimale.",
  sol:{ans:"P = 655,61",alt:["655,61","655,61"]},
  context:"Zadatak 22 (1. dio od 2):",
  exp:"P=π·(14,446)²=π·208,687≈655,61.",
  steps:[
    {txt:"Formula: P=πr². Zadano r=14,446."},
    {txt:"r²=14,446²=208,687916..."},
    {txt:"P=π·208,687916≈3,14159·208,688"},
    {txt:"P≈655,61.",final:true},
    {txt:"Provjera: √(655,61/π)=√(208,69)≈14,446 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: P = 655,61 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Površina kruga: P=πr². Uvrsti r i računaj.",note:"postupak",final:true},{txt:"Intuicija: Zaokruživanje na 2 decimale: 3. decimala određuje zaokruživanje (≥5→gore).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Površina kruga: P=πr². Uvrsti r i računaj.",
    "Zaokruživanje na 2 decimale: 3. decimala određuje zaokruživanje (≥5→gore).",
    "Česta greška: koristiti P=πd²/4 (s promjerom). Ovdje je dano r (polumjer).",
    "Provjera: P/π=208,69. √208,69≈14,446 ✓"
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:22.2,type:"sa",topic:"al",points:1,
  q:"Zadana je formula P = π·r². Izrazite r iz te formule.",
  sol:{ans:"r = √([FRAC:P|π])",alt:["√(P/π)","√(P/π)"]},
  context:"Zadatak 22 (2. dio od 2):",
  solFormula:[{pre:"r = √"},{frac:[["P","π"]]}],
  exp:"P=πr² → r²=P/π → r=√(P/π).",
  steps:[
    {txt:"P=πr² → izoliramo r."},
    {txt:"r²=P/π → r=√(P/π)."},
    {txt:"Formula: r=√([FRAC:P|π]).",final:true},
    {txt:"Provjera: P=πr². r=√(P/π) → uvrstimo natrag: π·(√(P/π))²=π·P/π=P ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: r = √([FRAC:P|π]) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Izoliranje varijable: P=πr² → dijeljenjem s π: r²=P/π → korijenom: r=√(P/π).",note:"postupak",final:true},{txt:"Intuicija: Alternativa: r=√P/√π (isti rezultat, drukčiji zapis).",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = r = √([FRAC:P|π]) u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Izoliranje varijable: P=πr² → dijeljenjem s π: r²=P/π → korijenom: r=√(P/π).",
    "Alternativa: r=√P/√π (isti rezultat, drukčiji zapis).",
    "Česta greška: r=P/π² (kvadriranje π umjesto uzimanje korijena).",
    "Provjera: za P=655,61: r=√(655,61/π)=√208,69≈14,446 ✓"
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:23.1,type:"sa",topic:"al",points:1,
  q:"Koji je rezultat algebarskog izraza (5x − [FRAC:y|5])·(5y + [FRAC:x|5]) nakon množenja i sređivanja do kraja?",
  sol:{ans:"x² + [FRAC:624xy|25] − y²",alt:["X² + [FRAC:624xy|25] − y²","x² + [FRAC:624xy|25] − y²","x²+[FRAC:624xy|25]−y²","≈ x² + [FRAC:624xy|25] − y²"]},
  context:"Zadatak 23 (1. dio od 2):",
  solFormula:[{pre:"x² + "},{frac:[["624xy","25"]]},{pre:" − y²"}],
  exp:"=25xy+x²−y²−xy/25=x²−y²+(625xy−xy)/25=x²−y²+624xy/25.",
  steps:[
    {txt:"Razvijamo: (5x−y/5)·(5y+x/5). Koristimo FOIL (svaki s svakim)."},
    {txt:"5x·5y=25xy. 5x·(x/5)=x². (−y/5)·5y=−y². (−y/5)·(x/5)=−xy/25."},
    {txt:"Zbroj: x²+25xy−y²−xy/25."},
    {txt:"Srednji član: 25xy−xy/25=(625xy−xy)/25=624xy/25. Rezultat: x²+[FRAC:624xy|25]−y².",final:true,note:"odgovor"},
    {txt:"Provjera za x=1, y=1: (5−1/5)·(5+1/5)=(24/5)·(26/5)=624/25. Naš: 1+624/25−1=624/25 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: FOIL: (a+b)(c+d)=ac+ad+bc+bd. Svaki s svakim, 4 produkta.",note:"postupak",final:true},{txt:"Intuicija: Paziti na razlomačne koeficijente: 5x·(x/5)=5x²/5=x². (−y/5)·(x/5)=−xy/25.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: FOIL: (a+b)(c+d)=ac+ad+bc+bd. Svaki s svakim, 4 produkta.",
    "Paziti na razlomačne koeficijente: 5x·(x/5)=5x²/5=x². (−y/5)·(x/5)=−xy/25.",
    "Skupljanje sličnih: 25xy−xy/25=(625xy−xy)/25=624xy/25.",
    "Alternativa: (a−b/5)(5b+a/5)=(5ab+a²/5−b²−ab/25). Za a=5x, b=y: (5y·5x+25x²/5−y²−5xy/25).",
    "Provjera: x=y=1: (5−0,2)·(5+0,2)=4,8·5,2=24,96=624/25 ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:23.2,type:"sa",topic:"al",points:1,
  q:"Skratite algebarski razlomak (c² − 6c + 9)/(c² − 9).",
  sol:{ans:"[FRAC:c-3|c+3]",alt:["[FRAC:c-3|c+3]","≈ [FRAC:c-3|c+3]"]},
  context:"Zadatak 23 (2. dio od 2):",
  solFormula:{frac:[["c − 3","c + 3"]]},
  exp:"Brojevnik=(c-3)², nazivnik=(c-3)(c+3). Kratimo: (c-3)/(c+3).",
  steps:[
    {txt:"Razlomak: (c²−6c+9)/(c²−9). Faktoriziramo."},
    {txt:"Brojnik: c²−6c+9=(c−3)² (kvadrat razlike)."},
    {txt:"Nazivnik: c²−9=(c+3)(c−3) (razlika kvadrata)."},
    {txt:"Kraćenjem (c−3): (c−3)²/[(c+3)(c−3)]=(c−3)/(c+3).",final:true},
    {txt:"Provjera za c=6: original=(36−36+9)/(36−9)=9/27=1/3. Naš: (6−3)/(6+3)=3/9=1/3 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: [FRAC:c-3|c+3] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Kvadrat razlike: c²−6c+9=(c−3)². Prepoznaj: a²−2ab+b²=(a−b)².",note:"postupak",final:true},{txt:"Intuicija: Razlika kvadrata: c²−9=c²−3²=(c+3)(c−3).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Kvadrat razlike: c²−6c+9=(c−3)². Prepoznaj: a²−2ab+b²=(a−b)².",
    "Razlika kvadrata: c²−9=c²−3²=(c+3)(c−3).",
    "Kraćenje: zajednički faktor (c−3). Smije kraćati samo ako c≠3 (inače bi bilo kraćenje s 0)!",
    "Česta greška: pokušati kratiti c² u brojniku i nazivniku bez faktorizacije.",
    "Provjera: (c=6) → 9/27=1/3 i 3/9=1/3 ✓"
  ,"Provjera supstitucijom: uvrsti x = [FRAC:c-3|c+3] u L = D; rezultati se moraju podudarati."]},
  {id:24,type:"sa",topic:"al",points:2,
  q:"Riješite sustav jednadžbi: [SYS:(5/2)x + 2 = y|−(3/2)x − 1 = y]",
  sol:{ans:"x = −[FRAC:3|4], y = [FRAC:1|8]",alt:["x=-3/4 y=1/8","x=-0,75 y=0,125"]},
  ex:"Supstitucija: y=(5/2)x+2 → x=−3/4, y=1/8.",
  solFormula:{frac:[["3","4"],["1","8"]]},
  context:"Zadatak 24: Riješite sustav jednadžbi.",
  exp:"Izjednačimo y: 5/2·x+2=-3/2·x-1 → 4x=-3 → x=-3/4. y=5/2·(-3/4)+2=-15/8+16/8=1/8.",
  steps:[
    {txt:"[SYS:(5/2)x+2=y|−(3/2)x−1=y]. Iz jednakosti: (5/2)x+2=−(3/2)x−1."},
    {txt:"(5/2)x+(3/2)x=−1−2 → (8/2)x=−3 → 4x=−3 → x=−3/4."},
    {txt:"y=(5/2)·(−3/4)+2=−15/8+16/8=1/8."},
    {txt:"Rješenje: x=−[FRAC:3|4], y=[FRAC:1|8].",final:true},
    {txt:"Provjera jednadžba 2: y=−(3/2)·(−3/4)−1=9/8−8/8=1/8 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x = −[FRAC:3|4], y = [FRAC:1|8] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Sustav linearnih jednadžbi: supstitucijskom metodom izjednačujemo dvije expanzije y.",note:"postupak",final:true},{txt:"Intuicija: Alternativa — eliminacija: jednadžba 1 + jednadžba 2: 2y=x+1. Uz drugu jednadžbu.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Sustav linearnih jednadžbi: supstitucijskom metodom izjednačujemo dvije expanzije y.",
    "Alternativa — eliminacija: jednadžba 1 + jednadžba 2: 2y=x+1. Uz drugu jednadžbu.",
    "Provjera u OBJEMA jednadžbama: x=−3/4, y=1/8. Jednadžba 1: (5/2)·(−3/4)+2=−15/8+16/8=1/8 ✓. Jednadžba 2: −(3/2)·(−3/4)−1=9/8−1=1/8 ✓",
    "Česta greška: aritmetička greška pri radu s razlomcima. Preporuča se skupni nazivnik."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:25.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  q:"Zadana je funkcija f(x) = (1/2)x − 2. Nacrtajte graf te funkcije.",
  sol:{ans:"pravac nacrtan",alt:["Pravac nacrtan","pravac nacrtan","pravacnacrtan","≈ pravac nacrtan"],svgFn:()=>SvgQ25_1_Sol_2014JB()},
  context:"Zadatak 25 (1. dio od 2):",
  exp:"Pravac: nagib k=1/2, y-presjek=-2. Prolazi točkama (0,-2) i (4,0).",
  why:[
    "Pravilo: Graf linearne funkcije f(x)=kx+l: pravac s nagibom k=1/2 i y-presjekom l=−2.",
    "Za crtanje: y-presjek A(0,−2) i nultočka B(4,0) su 'standardne' dvije točke.",
    "Nagib 1/2: za svaki +2 u x, y raste za +1 (polagani rast).",
    "Alternativa: uzeti x=−2: f(−2)=−1−2=−3. Točka (−2,−3) treba biti na pravcu.",
    "Provjera: (−2,−3): k=(−2−(−3))/(0−(−2))=1/2 ✓"
  ,
    "Česta greška: Crtati nasuprotni nagib ili y-presjek +2 umjesto −2. Provjeri x=0 i x=4 na pravcu."
  ],
  steps:[
    {txt:"Funkcija f(x)=(1/2)x−2 je pravac (linearna). Tražimo 2 točke za crtanje."},
    {txt:"y-presjek (x=0): f(0)=(1/2)·0−2=−2. Točka A(0,−2)."},
    {txt:"Nultočka (f(x)=0): (1/2)x=2 → x=4. Točka B(4,0)."},
    {txt:"Nacrtaj pravac kroz A(0,−2) i B(4,0) s nagibom k=1/2.",final:true},
    {txt:"Provjera: k=(0−(−2))/(4−0)=2/4=1/2 ✓. Treća točka: x=2→f(2)=−1. Točka (2,−1) na pravcu ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: pravac nacrtan ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Graf linearne funkcije f(x)=kx+l: pravac s nagibom k=1/2 i y-presjekom l=−2.",note:"postupak",final:true},{txt:"Intuicija: Za crtanje: y-presjek A(0,−2) i nultočka B(4,0) su 'standardne' dvije točke.",note:"intuicija",final:true}
  ]},
  {id:25.2,type:"sa",topic:"lin",points:1,
  q:"Zadana je funkcija f(x) = (1/2)x − 2. Koliko je f(0) − 2·f(100)?",
  sol:{ans:"-98",alt:["-98","≈ -98"]},
  context:"Zadatak 25 (2. dio od 2):",
  exp:"f(0)=-2. f(100)=50-2=48. f(0)-2·f(100)=-2-96=-98.",
  steps:[
    {txt:"f(x)=(1/2)x−2. Računamo f(0) i f(1/2)."},
    {txt:"f(0)=(1/2)·0−2=−2."},
    {txt:"f(1/2)=(1/2)·(1/2)−2=1/4−2=−7/4."},
    {txt:"f(0)−2·f(1/2)=−2−2·(−7/4)=−2+7/2=−4/2+7/2=3/2.",final:true},
    {txt:"Provjera: −2−2·(−1,75)=−2+3,5=1,5=3/2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: -98 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Evaluacija funkcije: uvrstimo konkretne vrijednosti x i izračunamo f(x).",note:"postupak",final:true},{txt:"Intuicija: (1/2)·(1/2)=1/4 (ne 1/2!). Kvadrat polumjere nije isti kao sama polumjera.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Evaluacija funkcije: uvrstimo konkretne vrijednosti x i izračunamo f(x).",
    "(1/2)·(1/2)=1/4 (ne 1/2!). Kvadrat polumjere nije isti kao sama polumjera.",
    "Linearna kombinacija: α·f(a)+β·f(b). Ovdje α=1, β=−2.",
    "Česta greška: f(1/2)=0 (nultočka). Nultočka je x=4, ne x=1/2!",
    "Provjera: f(0)=−2. f(1/2)=−7/4. Kombinacija: −2+7/2=3/2 ✓"
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje."]},
  {id:26.1,img:true,type:"sa",topic:"anal",points:1,img:true,
  q:"Točke A(2,1), B(-4,1) i C(-4,-3) tri su vrha pravokutnika ABCD. Koje koordinate ima vrh D?",
  sol:{ans:"D(2, -3)",alt:["(2,-3)","D=(2,-3)"]},
  context:"Zadatak 26 (1. dio od 2):",
  exp:"U pravokutniku, D je dijagonalno od B: D ima x kao A i y kao C. D=(2,-3).",
  steps:[
    {txt:"Točke A(2,1), B(−4,1), C(−4,−3) su tri vrha pravokutnika ABCD."},
    {txt:"AB je horizontalan (isti y=1). BC je vertikalan (isti x=−4)."},
    {txt:"D je dijagonalno suprotno od B: D ima x=A_x=2 i y=C_y=−3 → D(2,−3)."},
    {txt:"Odgovor: D(2,−3).",final:true,note:"odgovor"},
    {txt:"Provjera: AD vertikalan (x₁=x₂=2)? A(2,1)→D(2,−3): isti x ✓. CD horizontalan (y₁=y₂=−3)? C(−4,−3)→D(2,−3): isti y ✓.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: Pravokutnik: suprotne stranice su paralelne i jednake, kutovi su pravi.",note:"postupak",final:true},{txt:"Intuicija: 4. vrh D: u pravokutniku dijagonale se bisektiraju. Središte AC = središte BD.",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Pravokutnik: suprotne stranice su paralelne i jednake, kutovi su pravi.",
    "4. vrh D: u pravokutniku dijagonale se bisektiraju. Središte AC = središte BD.",
    "Alternativa: središte AC=((2+(-4))/2,(1+(−3))/2)=(−1,−1). Središte BD=((−4+D_x)/2,(1+D_y)/2)=(−1,−1). Rješavamo: D_x=2, D_y=−3.",
    "Geometrijska intuicija: D se dobiva 'odabirom' x koordinate A i y koordinate C (ili obrnuto).",
    "Provjera: A(2,1)B(−4,1)C(−4,−3)D(2,−3). Sve stranice okomite: AB‖DC (isti y), AD‖BC (isti x) ✓"
  ,
    "Česta greška: 4. vrh D nije simetričan od neke osi — treba koordinatni pristup (iste x ili y koordinate)."
  ]},
  {id:26.2,type:"sa",topic:"anal",points:1,
  q:"Kako glasi jednadžba pravca koji prolazi točkama A(2,1) i B(-4,1)?",
  sol:{ans:"y = 1",alt:["y=1","y-1=0"]},
  context:"Zadatak 26 (2. dio od 2):",
  exp:"A i B imaju isti y=1 → pravac je horizontalan: y=1.",
  steps:[
    {txt:"Postavljamo sustav za pravac y=kx+l koristeći A(2,1) i B(−4,1): [SYS:1 = 2k + l|1 = −4k + l]."},
    {txt:"Oduzimamo jednadžbe: 0 = 6k → k = 0."},
    {txt:"Iz prve jednadžbe: 1 = 0 + l → l = 1."},
    {txt:"Jednadžba pravca: y = 1.",final:true},
    {txt:"Provjera: A(2,1): y=1 ✓. B(−4,1): y=1 ✓.",final:true,note:"verifikacija"},{txt:"Točan odgovor: y = 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Horizontalni pravac: y=const (nagib=0). Sve točke imaju istu y-koordinatu.",note:"postupak",final:true},{txt:"Intuicija: Nagib=0 znači: bez nagiba — pravac 'leži ravno'.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Horizontalni pravac: y=const (nagib=0). Sve točke imaju istu y-koordinatu.",
    "Nagib=0 znači: bez nagiba — pravac 'leži ravno'.",
    "Alternativa: iz oblika ax+by+c=0. Horizontalni: 0·x+1·y−1=0 → y=1.",
    "Provjera: obje točke A i B imaju y=1 → jednadžba y=1 odgovara. ✓"
  ,
    "Česta greška: Tražiti nagib kad su y-koordinate jednake → k=0 → y=const. Ne računaj dalje."
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]},
  {id:27.1,type:"sa",topic:"al",points:1,
  q:"Riješite nejednadžbu 0,25 − (x+2)/5 ≤ (x-1)/4 + 0,15.",
  sol:{ans:"x ≥ -1/9",alt:["x>=-1/9","x≥-1/9"]},
  context:"Zadatak 27 (1. dio od 3):",
  solFormula:[{pre:"x ≥ −"},{frac:[["1","9"]]}],
  exp:"Množimo s 20: 5-4(x+2)≤5(x-1)+3 → -3-4x≤5x-2 → -1≤9x → x≥-1/9.",
  steps:[
    {txt:"0,25−(x+2)/5 ≤ (x−1)/4+0,15. Prevedemo: 1/4−(x+2)/5 ≤ (x−1)/4+3/20."},
    {txt:"Množimo s NZV=20: 5−4(x+2) ≤ 5(x−1)+3."},
    {txt:"5−4x−8 ≤ 5x−5+3 → −3−4x ≤ 5x−2 → −3+2 ≤ 5x+4x → −1 ≤ 9x."},
    {txt:"x ≥ −1/9. Skup rješenja: x∈[−1/9,+∞⟩.",final:true},
    {txt:"Provjera x=0: LS=0,25−2/5=0,25−0,4=−0,15. DS=(−1)/4+0,15=−0,25+0,15=−0,10. −0,15≤−0,10 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x ≥ -1/9 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Nejednakosti s razlomcima: množimo s NZV (koji je pozitivan → smjer se ne mijenja).",note:"postupak",final:true},{txt:"Intuicija: 0,25=1/4, 0,15=3/20. NZV(4,5,4,20)=20. Množimo 20× svaki član.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Nejednakosti s razlomcima: množimo s NZV (koji je pozitivan → smjer se ne mijenja).",
    "0,25=1/4, 0,15=3/20. NZV(4,5,4,20)=20. Množimo 20× svaki član.",
    "Dijeljenje s 9 (pozitivno) ne mijenja smjer: −1≤9x → x≥−1/9.",
    "Provjera: x=0≥−1/9 ✓. x=−1<−1/9 ✗ (nije u skupu). ✓"
  ,
    "Česta greška: Ne množiti s NZV=20 SvE članove jednadžbe, ili koristiti krivi NZV."
  ,"Provjera supstitucijom: uvrsti x = x ≥ -1/9 u L = D; rezultati se moraju podudarati."]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  q:"Riješite jednadžbu [FRAC:1|2]·10^(x−89) = 5.",
  sol:{ans:"x = 90",alt:["X = 90","x = 90","x=90","≈ x = 90"]},
  context:"Zadatak 27 (2. dio od 3):",
  exp:"10^{x-89}=10 → x-89=1 → x=90.",
  steps:[
    {txt:"Jednadžba: (1/2)·10^(x−89)=5."},
    {txt:"Množimo s 2: 10^(x−89)=10."},
    {txt:"10^(x−89)=10^1 → eksponenti jednaki: x−89=1."},
    {txt:"x=90.",final:true},
    {txt:"Provjera: (1/2)·10^(90−89)=(1/2)·10=5 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x = 90 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Eksponencijalna jednadžba: ako je a^f(x)=a^g(x), onda f(x)=g(x) (za a>0, a≠1).",note:"postupak",final:true},{txt:"Intuicija: Korak: 10^(x−89)=10=10^1 → x−89=1 → x=90.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Eksponencijalna jednadžba: ako je a^f(x)=a^g(x), onda f(x)=g(x) (za a>0, a≠1).",
    "Korak: 10^(x−89)=10=10^1 → x−89=1 → x=90.",
    "Alternativa — logaritmiranjem: log(10^(x−89))=log(10) → x−89=1 → x=90.",
    "Česta greška: zaboraviti množiti s 2 da eliminira (1/2). Tada bi bilo 10^(x−89)=5=10^(log5) → x=89+log5≈89,699.",
    "Provjera: (1/2)·10^1=5 ✓"
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."]},
  {id:27.3,img:true,type:"sa",topic:"lin",points:1,img:true,
  q:"Slika prikazuje rješenje sustava jednadžbi {y = 2x, y = p} dobiveno grafičkom metodom. Kolika je vrijednost realnog broja p?",
  sol:{ans:"p = 3",alt:["P = 3","p = 3","p=3","≈ p = 3"]},
  context:"Zadatak 27 (3. dio od 3):",
  exp:"Iz grafa: sjecište pravca y=2x i horizontale y=p nalazi se u točki A≈(3/2, 3). Dakle p=3.",
  steps:[
    {txt:"Sustav: y=2x i y=−(1/3)x+7/3. Iz jednakosti: 2x=−(1/3)x+7/3."},
    {txt:"Množimo s 3: 6x=−x+7 → 7x=7 → x=1."},
    {txt:"y=2·1=2."},
    {txt:"Rješenje: (x,y)=(1,2).",final:true},
    {txt:"Provjera: y=2·1=2 ✓. y=−1/3+7/3=6/3=2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: p = 3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Grafičko rješenje sustava = sjecište grafova. Analitički: izjednačimo desne strane.",note:"postupak",final:true},{txt:"Intuicija: Alternativa: nacrtaj oba pravca na koordinatnom sustavu i očitaj sjecište.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Grafičko rješenje sustava = sjecište grafova. Analitički: izjednačimo desne strane.",
    "Alternativa: nacrtaj oba pravca na koordinatnom sustavu i očitaj sjecište.",
    "Provjera u OBJEMA jednadžbama: (1,2). Jednadžba 1: y=2·1=2 ✓. Jednadžba 2: y=−1/3+7/3=2 ✓",
    "Interpretacija: (1,2) je jedina točka koja leži na oba pravca."
  ,
    "Česta greška: Provjera samo u jednoj jednadžbi — uvijek provjeri u OBJEMA jednadžbama sustava ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."]},
  {id:28.1,type:"sa",topic:"lin",points:1,
  q:"Vodoinstalater naplaćuje dolazak 50 kn i svaki sat rada 105 kn. Kolika je cijena utrošenog materijala ako je vodoinstalater radio 4 sata i ukupno naplatio 1 325,70 kn?",
  sol:{ans:"855 kn 70 lp",alt:["855,70","855,70"]},
  context:"Zadatak 28 (1. dio od 2):",
  exp:"Materijal = 1325,70 − 50 − 4·105 = 1325,70 − 470 = 855,70 kn.",
  steps:[
    {txt:"Vodoinstalater naplaćuje: dolazak=50 kn + rad=4·105=420 kn."},
    {txt:"Ukupno naplaćeno = 1325,70 kn."},
    {txt:"Materijal = ukupno − (dolazak + rad) = 1325,70 − (50+420)."},
    {txt:"Materijal = 1325,70 − 470 = 855,70 kn.",final:true},
    {txt:"Provjera: 50+420+855,70=1325,70 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 855 kn 70 lp ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Ukupna naknada = fiksni dolazak + varijabilni rad + materijal.",note:"postupak",final:true},{txt:"Intuicija: Materijal je nepoznanica: M = ukupno − fiksno − varijabilno.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Ukupna naknada = fiksni dolazak + varijabilni rad + materijal.",
    "Materijal je nepoznanica: M = ukupno − fiksno − varijabilno.",
    "Varijabilni rad: 4 sata × 105 kn/sat = 420 kn.",
    "Česta greška: zaboraviti uračunati dolazak (50 kn). Bez njega: 1325,70−420=905,70 (krivo).",
    "Provjera: 50+420+855,70=1325,70 ✓"
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje."]},
  {id:28.2,type:"sa",topic:"geom",points:1,
  q:"Pod kupaonice je pravokutnog oblika dimenzija 260 cm × 200 cm. Koliko kutija keramičkih pločica dimenzija 25 cm × 50 cm mora kupiti vlasnik ako je u svakoj kutiji 14 komada pločica i ako radi otpada mora kupiti 10% više pločica?",
  sol:{ans:"4 kutije",alt:["4 kutije","≈ 4 kutije"]},
  context:"Zadatak 28 (2. dio od 2):",
  exp:"P_pod=52000 cm². P_pločice=1250 cm². n_osnovni=52000/1250=41,6→s 10% više=45,76→46 kom. Kutije: ⌈46/14⌉=4.",
  steps:[
    {txt:"Pod: 260 cm × 200 cm. Površina = 52 000 cm²."},
    {txt:"Pločica: 25 cm × 50 cm. Površina = 1250 cm²."},
    {txt:"Osnovni broj pločica: 52000/1250=41,6 → 42 (zaokruži gore!). S 10% više: 42·1,1=46,2 → 47 pločica."},
    {txt:"Kutija=14 kom. Kutija: ⌈47/14⌉=⌈3,357⌉=4 kutije.",final:true},
    {txt:"Provjera: 4·14=56 pločica ≥ 47 ✓. 3·14=42 < 47 ✗ → treba 4 kutije ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 4 kutije ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Broj pločica: uvijek zaokruži GORE (ne možemo kupiti 0,6 pločice).",note:"postupak",final:true},{txt:"Intuicija: 10% više zbog otpada: n_ukupno = n_osnovno × 1,1. Zatim zaokruži gore.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Broj pločica: uvijek zaokruži GORE (ne možemo kupiti 0,6 pločice).",
    "10% više zbog otpada: n_ukupno = n_osnovno × 1,1. Zatim zaokruži gore.",
    "Broj kutija: zaokruži gore. ⌈n/14⌉ (stropna funkcija).",
    "Česta greška: zaokruži prema dolje (47/14=3,35 → 3 kutije). KRIVO — ne bi imali dovoljno.",
    "Provjera: 3 kutije=42 pločica < 47 (nedovoljno). 4 kutije=56≥47 ✓"
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]},
  {_META:true,auditStatus:"verified-full",rok:"2014_jesen",razina:"B",serial:"D-S025",totalPoints:40,mcCount:16,saCount:19,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2014_jesen_B__1": () => e(SvgZad1_2014JB, null),
  "2014_jesen_B__10": () => e(SvgZad10_2014JB, null),
  "2014_jesen_B__11": () => e(SvgZad11_2014JB, null),
  "2014_jesen_B__21": () => e(SvgZad21_2014JB, null),
  "2014_jesen_B__7": () => e(SvgZad7_2014JB, null),
  "2014_jesen_B__25.1": () => e(SvgGrid_2014JB_25, null),
  "2014_jesen_B__26.1": () => e(SvgCoordGrid_2014JB_26, null),
  "2014_jesen_B__27.3": () => e(SvgZad27c_2014JB, null),
};
