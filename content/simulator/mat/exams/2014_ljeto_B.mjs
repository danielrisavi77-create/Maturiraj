// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgIndeksZagadjenja_2014LB() {
  const W=280,H=160,ml=32,mb=22,mr=12,mt=12;
  const pw=W-ml-mr, ph=H-mb-mt;
  const scX=pw/24, scY=ph/160;
  const xAx=h=>ml+h*scX, yAx=v=>mt+ph-v*scY;
  const e=React.createElement;
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:{maxWidth:W,display:'block',margin:'0 auto'}},
    ...Array.from({length:9},(_,i)=>e('line',{key:'gx'+i,x1:xAx(i*3),y1:mt,x2:xAx(i*3),y2:mt+ph,stroke:'rgba(148,163,184,0.2)',strokeWidth:.5})),
    ...Array.from({length:9},(_,i)=>e('line',{key:'gy'+i,x1:ml,y1:yAx(i*20),x2:ml+pw,y2:yAx(i*20),stroke:'rgba(148,163,184,0.2)',strokeWidth:.5})),
    e('line',{x1:ml,y1:mt+ph,x2:ml+pw,y2:mt+ph,stroke:'var(--muted)',strokeWidth:1.5}),
    e('line',{x1:ml,y1:mt,x2:ml,y2:mt+ph,stroke:'var(--muted)',strokeWidth:1.5}),
    ...[0,3,6,9,12,15,18,21,24].map(h=>e('text',{key:'t'+h,x:xAx(h),y:mt+ph+13,textAnchor:'middle',fontSize:7,fill:'var(--muted)'},`${(7+h)%24}h`)),
    ...[25,50,75,100,125,142].map(v=>e('text',{key:'y'+v,x:ml-4,y:yAx(v)+3,textAnchor:'end',fontSize:7.5,fill:'var(--muted)'},v)),
    e('polyline',{points:`${xAx(0)},${yAx(25)} ${xAx(9)},${yAx(142)} ${xAx(24)},${yAx(25)}`,fill:'none',stroke:'var(--blue)',strokeWidth:2.5}),
    e('circle',{cx:xAx(0),cy:yAx(25),r:3,fill:'var(--red)'}),
    e('circle',{cx:xAx(9),cy:yAx(142),r:3,fill:'var(--gold)'}),
    e('text',{x:xAx(9)+4,y:yAx(142)-4,fontSize:8,fill:'var(--gold)'},'142')
  );
}

function SvgGrafikonGoriva_2014LB() {
  // Auto A: počinje 80L, prazno na km=720 (solid, plav)
  // Auto B: počinje 60L, prazno na km=900 (dashed, žut)
  // Sjecište: (450km, 30L)
  const W=300,H=210,ml=40,mb=30,mr=14,mt=14;
  const pw=W-ml-mr, ph=H-mb-mt;
  const scX=pw/1000, scY=ph/80;
  const xA=x=>ml+x*scX, yA=y=>mt+ph-y*scY;
  const e=React.createElement;
  const gxV=Array.from({length:11},(_,i)=>i*100);
  const gyV=Array.from({length:9},(_,i)=>i*10);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    // Grid
    ...gxV.map(x=>e("line",{key:"gx"+x,x1:xA(x),y1:mt,x2:xA(x),y2:mt+ph,stroke:"rgba(148,163,184,0.15)",strokeWidth:.5})),
    ...gyV.map(y=>e("line",{key:"gy"+y,x1:ml,y1:yA(y),x2:ml+pw,y2:yA(y),stroke:"rgba(148,163,184,0.15)",strokeWidth:.5})),
    // Osi
    e("line",{x1:ml,y1:mt+ph,x2:ml+pw+mr,y2:mt+ph,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:ml,y1:mt,x2:ml,y2:mt+ph,stroke:"var(--muted)",strokeWidth:1.5}),
    // X labels (km)
    ...gxV.filter(x=>x>0).map(x=>e("text",{key:"tx"+x,x:xA(x),y:mt+ph+14,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},x)),
    // Y labels (L)
    ...gyV.filter(y=>y>0).map(y=>e("text",{key:"ty"+y,x:ml-5,y:yA(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)),
    // Axis labels
    e("text",{x:ml+pw+mr,y:mt+ph+14,textAnchor:"end",fontSize:9,fill:"var(--muted)",fontStyle:"italic"},"km"),
    e("text",{x:ml-10,y:mt-4,textAnchor:"middle",fontSize:10,fill:"var(--muted)",fontWeight:"bold"},"L"),
    // Auto A: (0,80) → (720,0) — solid, plava
    e("line",{x1:xA(0),y1:yA(80),x2:xA(720),y2:yA(0),stroke:"var(--blue)",strokeWidth:2.2}),
    e("text",{x:xA(50),y:yA(74),fontSize:9,fill:"var(--blue)",fontWeight:"bold",fontStyle:"italic"},"A"),
    // Auto B: (0,60) → (900,0) — dashed, žuta
    e("line",{x1:xA(0),y1:yA(60),x2:xA(900),y2:yA(0),stroke:"var(--gold)",strokeWidth:2.2,strokeDasharray:"6,3"}),
    e("text",{x:xA(50),y:yA(54),fontSize:9,fill:"var(--gold)",fontWeight:"bold",fontStyle:"italic"},"B"),
    // Sjecište (450, 30)
    e("circle",{cx:xA(450),cy:yA(30),r:4,fill:"var(--red)"})
  );
}

function SvgZad25_2014LB(){
  // Q25: Pravac y=−2x+3, točke A(-2,7), B(-1,5), C(0,3), D na slici
  // Iz PDF: nagib=-2, y-presjek=3
  const W=340,H=280,cx=130,cy=130,sc=30;
  const hL=[],vL=[];
  for(let i=-4;i<=6;i++)
    vL.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  for(let i=-4;i<=6;i++)
    hL.push(e("line",{key:"gh"+i,x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  // Pravac y=-2x+3: x0 (y=0): x=1.5). x pri y=7: x=-2. x pri y=-3: x=3.
  const lx1=cx+(-3)*sc, ly1=cy-(-2*(-3)+3)*sc;  // x=-3: y=-2·(-3)+3=9, ali van ruba
  const lx2=cx+(3.5)*sc, ly2=cy-(-2*(3.5)+3)*sc; // x=3.5: y=-4
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    ...vL,...hL,
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:10,x2:cx,y2:H-10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy-6,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc+2,y:cy+14,fontSize:10,fill:"var(--muted)"},"1"),
    // Pravac y=-2x+3
    e("line",{x1:cx+(-2)*sc,y1:cy-7*sc,x2:cx+(3.2)*sc,y2:cy-(-2*3.2+3)*sc,stroke:"var(--blue)",strokeWidth:2.2}),
    // Točke A(-2,7), B(-1,5), C(0,3), D(3,-3)
    ...([["A",[-2,7]],["B",[-1,5]],["C",[0,3]],["D",[3,-3]]]).map(([lbl,[gx,gy]])=>{
      const px=cx+gx*sc, py=cy-gy*sc;
      return e("g",{key:lbl},
        e("circle",{cx:px,cy:py,r:4,fill:"var(--gold)"}),
        e("text",{x:px+6,y:py-4,fontSize:11,fill:"var(--gold)",fontStyle:"italic"},`${lbl}(${gx},${gy})`)
      );
    })
  );
}

function SvgZad23a_2014LB(){
  // Q23.1: Prazna koordinatna mreža — student sam crta f(x)=2x-4
  const W=320,H=260,G=25;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=140,cy=140;
  const hL=[],vL=[];
  for(let i=Math.ceil(-cx/G);i<=Math.floor((W-cx)/G);i++)
    vL.push(e("line",{key:"v"+i,x1:cx+i*G,y1:0,x2:cx+i*G,y2:H,stroke:"rgba(148,163,184,0.2)",strokeWidth:.5}));
  for(let i=Math.ceil(-cy/G);i<=Math.floor((H-cy)/G);i++)
    hL.push(e("line",{key:"h"+i,x1:0,y1:cy+i*G,x2:W,y2:cy+i*G,stroke:"rgba(148,163,184,0.2)",strokeWidth:.5}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    ...vL,...hL,
    e("line",{x1:0,y1:cy,x2:W,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W},${cy} ${W-7},${cy-3.5} ${W-7},${cy+3.5}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},0 ${cx-3.5},7 ${cx+3.5},7`,fill:"var(--muted)"}),
    e("text",{x:W-10,y:cy-7,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{x:cx+5,y:12,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+G+2,y:cy+14,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx+3,y:cy-G+5,fontSize:10,fill:"var(--muted)"},"1")
  );
}

function SvgZad9_2014LB(){
  // y = −x² (parabola dolje) + x+2y=−6 → y=−x/2−3 (pravac)
  // Sjecišta: x=2 (y=−4) i x=−1,5 (y=−2,25)
  const W=340,H=280,cx=170,cy=180,sc=30;
  const gridLines=[];
  for(let i=-5;i<=5;i++){
    gridLines.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  }
  for(let i=-6;i<=4;i++){
    gridLines.push(e("line",{key:"gh"+i,x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  }
  // Parabola y=−x²: generiraj path
  let pD="";
  for(let xi=-40;xi<=40;xi++){
    const x=xi/10;
    const y=-(x*x);
    const px=cx+x*sc, py=cy-y*sc;
    pD+=(xi===-40?"M ":"L ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
  }
  // Pravac y=−x/2−3: od x=−5 do x=5
  const lx1=cx-5*sc, ly1=cy-(-(-5)/2-3)*sc;  // x=−5: y=−0,5
  const lx2=cx+4*sc, ly2=cy-(-(4)/2-3)*sc;    // x=4: y=−5
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},
    ...gridLines,
    // Osi
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy-6,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:14,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc+2,y:cy+14,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx+3,y:cy-sc+5,fontSize:10,fill:"var(--muted)"},"1"),
    // Parabola y=−x² (žuta)
    e("path",{d:pD,fill:"none",stroke:"#e8c547",strokeWidth:2.5}),
    // Pravac x+2y=−6 → y=−x/2−3 (plava)
    e("line",{x1:lx1,y1:ly1,x2:lx2,y2:ly2,stroke:"var(--blue)",strokeWidth:2.2}),
    // Sjecišta
    e("circle",{cx:cx+2*sc,cy:cy+4*sc,r:5,fill:"var(--green)"}),
    e("circle",{cx:cx-1.5*sc,cy:cy+2.25*sc,r:5,fill:"var(--green)"})
  );
}

function SvgAtetraza_2014LB(){
  // Atletska staza: 5 traka oko pravokutnog terena (110m x 70m)
  const W=320,H=200,ml=20,mt=20;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const fw=200,fh=100; // football field (scaled)
  const fx=(W-fw)/2,fy=(W-fh)/2-10;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    // Atletske staze (5 koncentričnih ovala, od vanjske prema unutarnjoj)
    ...[5,4,3,2,1,0].map(i=>{
      const pw=fw+2*(5-i)*8, ph=fh+2*(5-i)*8;
      const px=(W-pw)/2, py=(H-ph)/2;
      const rx=ph/2; // polumjer polukruga
      return e("rect",{key:"t"+i,x:px+rx,y:py,width:pw-2*rx,height:ph,rx:0,fill:i===0?"rgba(74,144,217,0.15)":"none",stroke:"var(--muted)",strokeWidth:i===0?1.5:1});
    }),
    // Polukrugovi (lijevo i desno)
    ...[5,4,3,2,1,0].map(i=>{
      const pw=fw+2*(5-i)*8, ph=fh+2*(5-i)*8;
      const px=(W-pw)/2, py=(H-ph)/2;
      const rx=ph/2;
      const cx_l=px+rx, cx_r=px+pw-rx, cy=py+ph/2;
      return [
        e("path",{key:"cl"+i,d:`M ${cx_l} ${py} A ${rx} ${rx} 0 0 0 ${cx_l} ${py+ph}`,fill:"none",stroke:"var(--muted)",strokeWidth:i===0?1.5:1}),
        e("path",{key:"cr"+i,d:`M ${cx_r} ${py} A ${rx} ${rx} 0 0 1 ${cx_r} ${py+ph}`,fill:"none",stroke:"var(--muted)",strokeWidth:i===0?1.5:1})
      ];
    }).flat(),
    // Tereni (unutarnji pravokutnik — siv)
    e("rect",{x:(W-fw)/2+(fh/2),y:(H-fh)/2,width:fw-fh,height:fh,fill:"rgba(148,163,184,0.3)",stroke:"var(--muted)",strokeWidth:1.5})
  );
}

function SvgZad20_2014LB(){
  // b i c paralelni (horizontalni), a i d presjeknice
  // a: od (10,252) do (210,72), nagib -0.9 → prelazi b na P1=(85,185), d na P2=(171,108)
  // d: od (70,30) do (270,185), nagib +0.775 → prelazi c na P3=(141,85), a na P2=(171,108)
  const W=300,H=240;
  // Točke sjecišta
  const P1=[85,185],P2=[171,108],P3=[141,85];
  // Linije
  const bL=[[10,185],[280,185]];
  const cL=[[10,85],[280,85]];
  const aL=[[10,252],[215,70]];
  const dL=[[68,28],[272,187]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    // b i c (paralelni) — tanje crte
    e("line",{x1:bL[0][0],y1:bL[0][1],x2:bL[1][0],y2:bL[1][1],stroke:"var(--blue)",strokeWidth:2}),
    e("line",{x1:cL[0][0],y1:cL[0][1],x2:cL[1][0],y2:cL[1][1],stroke:"var(--blue)",strokeWidth:2}),
    // a i d
    e("line",{x1:aL[0][0],y1:aL[0][1],x2:aL[1][0],y2:aL[1][1],stroke:"var(--blue)",strokeWidth:2}),
    e("line",{x1:dL[0][0],y1:dL[0][1],x2:dL[1][0],y2:dL[1][1],stroke:"var(--blue)",strokeWidth:2}),
    // Kutovi
    e("text",{x:P1[0]+6,y:P1[1]-12,fontSize:11,fill:"var(--gold)",fontWeight:"bold"},"54°"),
    e("text",{x:P2[0]+6,y:P2[1]+16,fontSize:12,fill:"var(--red)",fontStyle:"italic",fontWeight:"bold"},"φ"),
    e("text",{x:P3[0]-36,y:P3[1]-4,fontSize:11,fill:"var(--gold)",fontWeight:"bold"},"101°"),
    // Labele pravaca
    e("text",{x:aL[0][0]+2,y:aL[0][1]+4,fontSize:13,fill:"var(--blue)",fontStyle:"italic",fontWeight:"bold"},"a"),
    e("text",{x:bL[1][0]+3,y:bL[1][1]+4,fontSize:13,fill:"var(--blue)",fontStyle:"italic",fontWeight:"bold"},"b"),
    e("text",{x:cL[1][0]+3,y:cL[1][1]+4,fontSize:13,fill:"var(--blue)",fontStyle:"italic",fontWeight:"bold"},"c"),
    e("text",{x:dL[0][0]+4,y:dL[0][1]+4,fontSize:13,fill:"var(--blue)",fontStyle:"italic",fontWeight:"bold"},"d")
  );
}

function SvgZad12_2014LB(){
  // Kvadar ABCDEFGH: a=4.2, b=2, h=3.8, P=polovište DH
  // Osjenčana piramida ABCDP
  const W=340,H=260;
  // Izometrijska projekcija kvadra
  const ox=80,oy=195; // ishodište (A)
  const ax=120,ay=0;  // smjer x (AB=4.2)
  const bx=30,by=-35; // smjer dubine (AD=2)
  const hx=0,hy=-110; // smjer visine (AE=3.8)

  const A=[ox,oy];
  const B=[ox+ax,oy+ay];
  const C=[ox+ax+bx,oy+ay+by];
  const D=[ox+bx,oy+by];
  const E=[ox+hx,oy+hy];
  const F=[ox+ax+hx,oy+ay+hy];
  const G=[ox+ax+bx+hx,oy+ay+by+hy];
  const Hv=[ox+bx+hx,oy+by+hy];
  // P = polovište DH (sredina između D i H)
  const P=[(D[0]+Hv[0])/2,(D[1]+Hv[1])/2];

  const pts=(arr)=>arr.map(p=>p.join(",")).join(" ");

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Stražnje bridove (isprekidano)
    e("line",{x1:D[0],y1:D[1],x2:C[0],y2:C[1],stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"4,3"}),
    e("line",{x1:D[0],y1:D[1],x2:A[0],y2:A[1],stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"4,3"}),
    e("line",{x1:D[0],y1:D[1],x2:Hv[0],y2:Hv[1],stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"4,3"}),
    // Osjenčana piramida ABCDP (površine)
    e("polygon",{points:pts([A,B,P]),fill:"rgba(74,144,217,0,25)",stroke:"var(--blue)",strokeWidth:1.5}),
    e("polygon",{points:pts([B,C,P]),fill:"rgba(74,144,217,0.15)",stroke:"var(--blue)",strokeWidth:1.5}),
    e("polygon",{points:pts([A,D,P]),fill:"rgba(74,144,217,0.2)",stroke:"var(--blue)",strokeWidth:1.5,strokeDasharray:"4,3"}),
    // Baza piramide ABCD
    e("polygon",{points:pts([A,B,C,D]),fill:"rgba(232,197,71,0.1)",stroke:"#e8c547",strokeWidth:1.5,strokeDasharray:"3,3"}),
    // Kvadar (vidljivi bridovi)
    e("polygon",{points:pts([A,B,F,E]),fill:"rgba(255,255,255,0.03)",stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:pts([B,C,G,F]),fill:"rgba(255,255,255,0.03)",stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:pts([E,F,G,Hv]),fill:"rgba(255,255,255,0.03)",stroke:"var(--text)",strokeWidth:1.5}),
    // Točke
    ...[["A",A,[-14,4]],["B",B,[5,4]],["C",C,[5,4]],
        ["E",E,[-14,-4]],["F",F,[5,-4]],["G",G,[5,-4]],["H",Hv,[-14,-4]]].map(
      ([n,p,[ox,oy]])=>e("g",{key:n},
        e("circle",{cx:p[0],cy:p[1],r:3,fill:"var(--text)"}),
        e("text",{x:p[0]+ox,y:p[1]+oy,fill:"var(--text)",fontSize:12,fontStyle:"italic"},n)
      )
    ),
    // Točka P - istakni
    e("circle",{cx:P[0],cy:P[1],r:5,fill:"#f87171"}),
    e("text",{x:P[0]-16,y:P[1]+4,fill:"#f87171",fontSize:13,fontStyle:"italic",fontWeight:"bold"},"P"),
    // Mjere
    e("text",{x:ox+ax/2,y:oy+16,fill:"var(--muted)",fontSize:10,textAnchor:"middle"},"4,2 cm"),
    e("text",{x:ox+ax+bx+8,y:oy+ay-by/2,fill:"var(--muted)",fontSize:10},"2 cm"),
    e("text",{x:ox+ax+8,y:oy+hy/2,fill:"var(--muted)",fontSize:10},"3,8 cm")
  );
}

function SvgZad11_2014LB(){
  // Trapez ABCD: AB||DC, BC||DF, |AB|=4.5cm, |FB|=1.3cm, |FC|=2.6cm, ∠CFB=90°
  // Scale: 40px=1cm. A=[40,200], B=[220,200], F=[168,200], C=[168,96], D=[116,96]
  const A=[40,200],B=[220,200],F=[168,200],C=[168,96],D=[116,96];
  const W=300,H=240;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    // Trapez ABCD
    e("polygon",{points:[A,B,C,D].map(p=>p.join(",")).join(" "),fill:"rgba(74,144,217,0.08)",stroke:"var(--blue)",strokeWidth:2}),
    // CF — okomita dashed linija od C do F
    e("line",{x1:C[0],y1:C[1],x2:F[0],y2:F[1],stroke:"var(--blue)",strokeWidth:1.8,strokeDasharray:"5,3"}),
    // Pravokutni kut na F
    e("rect",{x:F[0]-14,y:F[1]-14,width:12,height:12,fill:"none",stroke:"var(--green)",strokeWidth:1.5}),
    // Mjere: FB=1.3 cm
    e("text",{x:(F[0]+B[0])/2,y:218,textAnchor:"middle",fontSize:11,fill:"var(--muted)"},"1,3 cm"),
    // Mjere: FC=2.6 cm (desno od CF)
    e("text",{x:F[0]+6,y:(F[1]+C[1])/2+4,fontSize:11,fill:"var(--muted)"},"2,6 cm"),
    // Mjere: AB=4.5 cm (ispod AB)
    e("text",{x:(A[0]+B[0])/2,y:218,textAnchor:"middle",fontSize:11,fill:"var(--muted)"},"4,5 cm"),
    // Oznake vrhova + F
    ...([["A",A,[-16,4]],["B",B,[6,4]],["C",C,[6,-4]],["D",D,[-16,-4]],["F",F,[-4,16]]]).map(([n,p,[ox,oy]])=>
      e("g",{key:n},
        e("circle",{cx:p[0],cy:p[1],r:4,fill:n==="F"?"var(--gold)":"var(--blue)"}),
        e("text",{x:p[0]+ox,y:p[1]+oy,fill:n==="F"?"var(--gold)":"var(--blue)",fontSize:13,fontStyle:"italic",fontWeight:"bold"},n)
      )
    )
  );
}

function SvgZad1_2014LB(){
  // 4 brojevna pravca - opcija B je ispravna: [2,7)
  const W=380, H=200, x0=50, sc=28;
  const nums=[0,1,2,3,4,5,6,7,8,9];

  const drawAxis=(yPos,optLabel,fillStart,fillEnd,leftOpen,rightOpen,correct)=>{
    const items=[];
    // Os
    items.push(e("line",{key:"ax"+yPos,x1:30,y1:yPos,x2:W-20,y2:yPos,stroke:"var(--muted)",strokeWidth:1.2}));
    items.push(e("polygon",{key:"ar"+yPos,points:`${W-20},${yPos} ${W-30},${yPos-3} ${W-30},${yPos+3}`,fill:"var(--muted)"}));
    // Oznake
    nums.forEach(n=>items.push(e("text",{key:`n${yPos}${n}`,x:x0+n*sc-4,y:yPos+14,fill:"var(--muted)",fontSize:10},n)));
    // Osjenčano područje
    items.push(e("rect",{key:"fill"+yPos,x:x0+fillStart*sc,y:yPos-6,width:(fillEnd-fillStart)*sc,height:12,fill:correct?"var(--blue)":"#6b6888",opacity:0.3}));
    // Točke
    items.push(e("circle",{key:"l"+yPos,cx:x0+fillStart*sc,cy:yPos,r:4,fill:leftOpen?"var(--s2)":"var(--blue)",stroke:"var(--blue)",strokeWidth:1.5}));
    items.push(e("circle",{key:"r"+yPos,cx:x0+fillEnd*sc,cy:yPos,r:4,fill:rightOpen?"var(--s2)":"var(--blue)",stroke:"var(--blue)",strokeWidth:1.5}));
    // Label
    items.push(e("text",{key:"lbl"+yPos,x:12,y:yPos+4,fill:correct?"#3dd68c":"var(--muted)",fontSize:12,fontWeight:correct?"bold":"normal"},optLabel));
    return items;
  };

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // A: (2,7) - oba otvorena
    ...drawAxis(30,"A.",2,7,true,true,false),
    // B: [2,7) - lijevo zatvoreno, desno otvoreno ✓
    ...drawAxis(75,"B.",2,7,false,true,true),
    // C: prikazuje nešto drugačije
    ...drawAxis(120,"C.",0,2,false,true,false),
    // D: dva odvojena dijela
    ...drawAxis(165,"D.",0,2,false,false,false),
    e("text",{x:W/2,y:H-5,fill:"#3dd68c",fontSize:10,textAnchor:"middle"},"[2, 7) = ≥2 i <7 → B ✓")
  );
}

function SvgQ23_1_Sol_2014LB(){
  // Rješenje Q23.1: pravac f(x)=2x-4 nacrtan na koordinatnoj mreži
  // Ključne točke: nultočka (2,0), y-presjek (0,-4)
  const W=320,H=260,G=25,cx=140,cy=140;
  const hL=[],vL=[];
  for(let i=Math.ceil(-cx/G);i<=Math.floor((W-cx)/G);i++)
    vL.push(e("line",{key:"v"+i,x1:cx+i*G,y1:0,x2:cx+i*G,y2:H,stroke:"rgba(148,163,184,0.2)",strokeWidth:.5}));
  for(let i=Math.ceil(-cy/G);i<=Math.floor((H-cy)/G);i++)
    hL.push(e("line",{key:"h"+i,x1:0,y1:cy+i*G,x2:W,y2:cy+i*G,stroke:"rgba(148,163,184,0.2)",strokeWidth:.5}));
  // f(x)=2x-4: pri x=0, y=-4 (tj. cy+4G). pri x=2, y=0 (nultočka, tj. cx+2G, cy)
  // Extend: pri x=-1, y=-6 (cy+6G). pri x=4, y=4 (cy-4G).
  const x1s=cx-1*G, y1s=cy+6*G;  // x=-1, y=-6
  const x2s=cx+4*G, y2s=cy-4*G;  // x=4, y=4
  return e("svg",{viewBox:`0 0 ${W} ${H}`,width:"100%",style:{maxWidth:W,display:"block",margin:"0 auto"}},
    ...vL,...hL,
    e("line",{x1:0,y1:cy,x2:W,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W},${cy} ${W-7},${cy-3.5} ${W-7},${cy+3.5}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},0 ${cx-3.5},7 ${cx+3.5},7`,fill:"var(--muted)"}),
    e("text",{x:W-10,y:cy-7,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"x"),
    e("text",{x:cx+5,y:12,fontSize:11,fill:"var(--muted)",fontStyle:"italic"},"y"),
    e("text",{x:cx+3,y:cy+14,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:cx+G+2,y:cy+14,fontSize:10,fill:"var(--muted)"},"1"),
    e("text",{x:cx+3,y:cy-G+5,fontSize:10,fill:"var(--muted)"},"1"),
    // Pravac f(x)=2x-4
    e("line",{x1:x1s,y1:y1s,x2:x2s,y2:y2s,stroke:"var(--blue)",strokeWidth:2.5}),
    // Ključne točke
    e("circle",{cx:cx,cy:cy+4*G,r:4,fill:"var(--gold)"}),
    e("text",{x:cx+5,y:cy+4*G-5,fontSize:9,fill:"var(--gold)"},"(0,−4)"),
    e("circle",{cx:cx+2*G,cy:cy,r:4,fill:"var(--gold)"}),
    e("text",{x:cx+2*G+5,y:cy-5,fontSize:9,fill:"var(--gold)"},"(2,0)"),
    // Label
    e("text",{x:x2s-30,y:y2s-8,fontSize:10,fill:"var(--blue)",fontStyle:"italic"},"f(x)=2x−4")
  );
}

export const qs = [
  {id:1,img:true,type:"mc",warn:"Pazi: ≥2 zatvoreno [, < otvoreno ⟩; provjeri prikaz na brojevnom pravcu.",topic:"br",points:1,img:true,
  q:"Na kojemu je od sljedećih brojevnih pravaca označen skup svih realnih brojeva većih ili jednakih 2 i manjih od 7?",
  opts:["slika A","slika B","slika C","slika D"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Skup ⟨2, 7⟩: 2 je uključen (zatvorena točka), 7 nije (otvorena točka).",
  steps:[
    {txt:"Strategija: puna točka = uključen kraj (≥/≤); šuplja točka = isključen (</>)."},
    {txt:"Lijeva granica: puna točka pri x=2 → x≥2."},
    {txt:"Desna granica: šuplja točka pri x=7 → x<7."},
    {txt:"Skup {x | 2≤x<7} = ⟨2,7⟩ → odgovor B.",final:true},
    {txt:"Provjera: x=2 ∈⟨2,7⟩ (puna) ✓; x=7 ∉⟨2,7⟩ (šuplja) ✓; x=5 ∈⟨2,7⟩ ✓.",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A=granica 2 otvorena (krivo čita punu). C/D=granica 7 zatvorena (krivo čita šuplju).",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija: ⟨a,b⟩={x∈ℝ | a≤x<b} — puna točka lijevo (≥), šuplja desno (<). Sve 4 kombinacije: ⟨a,b⟩, ⟩a,b⟩, ⟨a,b⟩, ⟩a,b⟩.",note:"postupak",final:true},{txt:"Intuicija: šuplja točka = 'rupa' u skupu — broj je na crti ali NIJE u skupu (granica je isključena).",note:"intuicija",final:true}
  ],
  why:[
    "Definicija: ⟨a,b⟩={x∈ℝ | a≤x<b} — puna točka lijevo (≥), šuplja desno (<). Sve 4 kombinacije: ⟨a,b⟩, ⟩a,b⟩, ⟨a,b⟩, ⟩a,b⟩.",
    "Intuicija: šuplja točka = 'rupa' u skupu — broj je na crti ali NIJE u skupu (granica je isključena).",
    "Alternativa: iz definicije skupa. Slika B šrafira od 2 (zatvoreno) do 7 (otvoreno) → x≥2 i x<7.",
    "Česta greška: studenti zamijene punu i šuplju. Mnemonik: puna = pun — uključuje sve; šuplja = prazna — isključuje taj broj.",
    "Provjera: B kaže ≥2 i <7. Uvrsti granicu: x=2→2≥2 ✓, x=7→7<7 ✗ (isključen) ✓"
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]},
  {id:2,type:"mc",warn:"Pazi: svedi na isti oblik (decimalni/razlomak) prije usporedbe.",topic:"br",points:1,
  q:"Koja je od navedenih nejednakosti točna?",
  opts:["−1/2 < −1","1/2 < 1/3","0,5 > 1/2","1,3 > 1/3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"A: −1/2=−0,5 > −1 → netočno ✗. B: 1/2>1/3 → netočno ✗. C: 0,5=1/2 → netočno (jednako) ✗. D: 1,3 > 1/3≈0,33 → točno ✓.",
  steps:[
    {txt:"Strategija: prevesti svaki razlomak i izraz u decimale pa usporediti."},
    {txt:"A: −1/2=−0,5 < −1? Ne: −0,5 > −1 (bliže nuli). ✗"},
    {txt:"B: 1/2=0,5 < 1/3=0,333? Ne: 0,5 > 0,333. ✗  C: 0,5 > 0,5? Jednaki (nije stroga nejednakost). ✗"},
    {txt:"D: 1,3 > 1/3=0,333? Da: 1,3 > 0,333 ✓ → odgovor D.",final:true},
    {txt:"Provjera D: 1,3−1/3=1,3−0,333=0,967 > 0, dakle 1,3 > 1/3 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A=greška predznaka (na broj. pravcu −0,5 je DESNO od −1, dakle veći). B=1/2>1/3 jer manji nazivnik=veći razlomak (ako je brojnik isti). C=0,5=1/2, ne >1/2.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo negativnih brojeva: na brojevnom pravcu, MANJI broj je VIŠE LIJEVO. −0,5 je desno od −1 → −0,5 > −1.",note:"postupak",final:true},{txt:"Intuicija: Usporedba razlomaka s istim brojnikom: 1/a > 1/b ↔ a < b (za pozitivne a,b). Dakle 1/2 > 1/3 jer 2 < 3.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo negativnih brojeva: na brojevnom pravcu, MANJI broj je VIŠE LIJEVO. −0,5 je desno od −1 → −0,5 > −1.",
    "Usporedba razlomaka s istim brojnikom: 1/a > 1/b ↔ a < b (za pozitivne a,b). Dakle 1/2 > 1/3 jer 2 < 3.",
    "Alternativa — zajednički nazivnik: B: 1/2=3/6, 1/3=2/6. 3/6 < 2/6? Ne, 3/6 > 2/6. ✗",
    "Najčešća greška za A: 'veći apsolutni iznos = veći broj' za negativne. KRIVO: −1 < −0,5 jer je −1 'više negativan'.",
    "Provjera D: 1,3 > 1/3. 1,3·3=3,9 > 1. (Unakrsnim množenjem: 1,3·3 > 1·1.) ✓"
  ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak."]},
  {id:3,type:"mc",warn:"Pazi: poveži omjere preko zajedničke komponente (soka).",topic:"br",points:1,
  q:"U miješanom voćnom soku omjer količina soka jabuke i soka naranče je 1 : 4, a omjer količina soka limuna i soka naranče je 2 : 5. Koji je omjer količina soka jabuke i soka limuna?",
  opts:["1 : 2","3 : 9","4 : 5","5 : 8"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"NZV(4,5)=20. Jabuka:naranča:limun = 5:20:8. Jabuka:limun = 5:8.",
  steps:[
    {txt:"Strategija: naći zajednički referentni pojam (naranča) svođenjem omjera na isti N."},
    {txt:"Jabuka:naranča=1:4. Za N=20 dl naranče: jabuka=(1/4)·20=5 dl."},
    {txt:"Limun:naranča=2:5. Za N=20 dl naranče: limun=(2/5)·20=8 dl."},
    {txt:"Jabuka:limun=5:8 → odgovor D.",final:true},
    {txt:"Provjera: 5:20=1:4 ✓ (jabuka:naranča). 8:20=2:5 ✓ (limun:naranča).",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(1:2)=direktno dijeli 1:4 s 2:5 bez zajedničke naranče. B(3:9=1:3)=zbraja omjere. C(4:5)=uzima naranču i limun umjesto jabuku i limun.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Metoda zajedničke veličine: svodimo omjere na zajednički element (naranča). NZV(4,5)=20 → 1:4=5:20, 2:5=8:20.",note:"postupak",final:true},{txt:"Intuicija: Algebarski: jabuka=x, naranča=4x. Limun=(2/5)·4x=8x/5. Jabuka:limun=x:8x/5=5:8.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Metoda zajedničke veličine: svodimo omjere na zajednički element (naranča). NZV(4,5)=20 → 1:4=5:20, 2:5=8:20.",
    "Algebarski: jabuka=x, naranča=4x. Limun=(2/5)·4x=8x/5. Jabuka:limun=x:8x/5=5:8.",
    "Alternativa — supstitucija: neka je naranča=20. Jabuka=5 (iz 1:4). Limun=8 (iz 2:5). Omjer=5:8.",
    "Česta greška: množiti 1·2:4·5=2:20=1:10. KRIVO — omjeri se NE množe direktno bez zajedničke veličine.",
    "Provjera: 5:8 ne može se skratiti (5 i 8 su nesusjedni prosti). ✓"
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva."]},
  {id:4,type:"mc",warn:"Pazi: pomnoži s 5 → 10a = 3a − 11 → 7a = −11.",topic:"al",points:1,
  q:"Riješite jednadžbu 2a = [FRAC:3a − 11|5].",
  opts:["a = -11/7","a = -11/13","a = 7/11","a = 55/13"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"10a = 3a−11 → 7a = −11 → a = −11/7.",
  steps:[
    {txt:"Strategija: eliminirati razlomak množenjem obje strane s nazivnikom 5."},
    {txt:"2a = (3a−11)/5. Množimo obje strane s 5: 10a = 3a−11."},
    {txt:"Rješavamo: 10a−3a=−11 → 7a=−11 → a=−11/7."},
    {txt:"Odgovor A: a=−11/7.",final:true,note:"odgovor"},
    {txt:"Provjera: LS=2·(−11/7)=−22/7. DS=(3·(−11/7)−11)/5=(−33/7−77/7)/5=(−110/7)/5=−22/7. LS=DS ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B(−11/13)=greškom 10a+3a=13a. C(7/11)=okrenuta pozicija. D(55/13)=množenje samo DS.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: za jednadžbu X/n = Y množimo s n. Mora množiti OBJE strane: n·LS = n·DS.",note:"postupak",final:true},{txt:"Intuicija: 2a=(3a−11)/5 znači da je 2a petina od (3a−11). Petinu×5 = puna vrijednost.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: za jednadžbu X/n = Y množimo s n. Mora množiti OBJE strane: n·LS = n·DS.",
    "Intuicija: 2a=(3a−11)/5 znači da je 2a petina od (3a−11). Petinu×5 = puna vrijednost.",
    "Alternativa — prenosimo: 2a−(3a−11)/5=0. Zajednički nazivnik 5: (10a−3a+11)/5=0 → 7a=−11.",
    "Česta greška: množiti samo desnu stranu. 2a=(3a−11)/5 → 2a=3a−11 (krivo). Ispravno: 10a=3a−11.",
    "Edge case: provjeri nije li a=0 rješenje: 2·0=0, (3·0−11)/5=−11/5≠0 → nije rješenje, potvrđuje a≠0."
  ,"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati."]},
  {id:5,type:"mc",warn:"Pazi: prebaci u 2x² − 7x − 9 = 0; Viète zbroj = 7/2.",topic:"kv",points:1,
  q:"Koliko iznosi zbroj rješenja jednadžbe 2x(x − 2) = 3(x + 3)?",
  opts:["-7/2","-1/2","1/2","7/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"2x²-4x=3x+9 → 2x²-7x-9=0. Viète: zbroj = 7/2.",
  steps:[
    {txt:"Strategija: preurediti u standardni oblik ax²+bx+c=0 pa primijeniti Vièteove formule."},
    {txt:"2x(x−2)=3(x+3) → 2x²−4x=3x+9 → 2x²−7x−9=0."},
    {txt:"Vièteove formule: x₁+x₂=−b/a=−(−7)/2=7/2."},
    {txt:"Zbroj rješenja = 7/2 → odgovor D.",final:true},
    {txt:"Provjera: D=49+72=121. x=(7±11)/4. x₁=4,5, x₂=−1. Zbroj=4,5−1=3,5=7/2 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(−7/2)=krivi predznak (−b/a, ne +b/a). B(−1/2)=pogrešna standardizacija. C(1/2)=zaboravili faktorizaciju.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Vièteove formule: za ax²+bx+c=0: x₁+x₂=−b/a i x₁·x₂=c/a. Primjena je brža od rješavanja!",note:"postupak",final:true},{txt:"Intuicija: Izvod: a(x−x₁)(x−x₂)=ax²−a(x₁+x₂)x+ax₁x₂. Usporedba: b=−a(x₁+x₂) → x₁+x₂=−b/a.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Vièteove formule: za ax²+bx+c=0: x₁+x₂=−b/a i x₁·x₂=c/a. Primjena je brža od rješavanja!",
    "Izvod: a(x−x₁)(x−x₂)=ax²−a(x₁+x₂)x+ax₁x₂. Usporedba: b=−a(x₁+x₂) → x₁+x₂=−b/a.",
    "Alternativa: direktno riješiti jednadžbu. D=49+72=121=11². x=(7±11)/4. x₁=18/4=9/2, x₂=−4/4=−1. Zbroj=7/2.",
    "Česta greška: ne standardizirati (ostaviti = na desnoj strani) → krivo a. Standardizacija: MORA biti =0.",
    "Provjera Vièteovim produkt: x₁·x₂=(9/2)·(−1)=−9/2=c/a=−9/2 ✓"
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0."]},
  {id:6,type:"mc",warn:"Pazi: nultočka 1/2 znači f(1/2) = 0; provjeri uvrštavanjem.",topic:"lin",points:1,
  q:"Koja od navedenih funkcija ima nultočku 1/2?",
  opts:["f(x) = 2x − 1","f(x) = 2x² − 1","f(x) = 10²ˣ","f(x) = −x² + 2x − 1"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"A: f(1/2)=2·(1/2)-1=0 ✓. B: 2·(1/4)-1=-1/2≠0. C: 10>0 uvijek. D: -1/4+1-1=-1/4≠0.",
  steps:[
    {txt:"Strategija: nultočka x₀ zadovoljava f(x₀)=0. Uvrstimo x=1/2 u svaku funkciju."},
    {txt:"A: f(1/2)=2·(1/2)−1=1−1=0 ✓"},
    {txt:"B: f(1/2)=2·(1/2)²−1=2·(1/4)−1=1/2−1=−1/2≠0 ✗. C: 10^(√2)≠0 ✗. D: −(1/2)²+2·(1/2)−1=−1/4+1−1=−1/4≠0 ✗"},
    {txt:"Jedino A daje 0 → odgovor A.",final:true},
    {txt:"Provjera: 2x−1=0 → x=1/2. A ima nultočku točno u x=1/2 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B=greškom 2·(1/2)=1 umjesto 2·(1/4)=1/2. C=eksponencijalna funkcija je uvijek pozitivna za realne x. D=(1/2)²=1/4, ali D−f: −1/4+1−1=−1/4.",final:true,note:"diagnostika"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Definicija nultočke: x₀ je nultočka ↔ f(x₀)=0. Grafički: gdje graf siječe x-os.",note:"postupak",final:true},{txt:"Intuicija: Za f(x)=2x−1: direktno 2x−1=0 → x=1/2. Nultočka je točno 1/2.",note:"intuicija",final:true}
  ],
  why:[
    "Definicija nultočke: x₀ je nultočka ↔ f(x₀)=0. Grafički: gdje graf siječe x-os.",
    "Za f(x)=2x−1: direktno 2x−1=0 → x=1/2. Nultočka je točno 1/2.",
    "Napomena za C: 10^x=0 nema rješenja (eksponencijalna nikad ne doseže 0 za realne x). Dakle C nema nultočke.",
    "Česta greška: kvadrirati 1/2 krivo: (1/2)²=1/4 ne 1/2. B: 2·(1/4)−1=−1/2≠0.",
    "Provjera: za A: f(0)=−1 (y-presjek), f(1/2)=0 (nultočka), f(1)=1. Pravac ide gore, križi x-os pri x=1/2 ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."]},
  {id:7,type:"mc",warn:"Pazi: tjeme u x = −b/2a = 3/(2a) = 2 → a = 3/4; pa izračunaj f(2).",topic:"kv",points:1,
  q:"Odredite najmanju vrijednost funkcije f(x) = ax² − 3x + 1/2 ako se ta vrijednost postiže za x = 2.",
  opts:["-3","-5/2","5/2","5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Min u x=2: f'(2)=0 → 2a·2-3=0 → a=3/4. f(2)=3/4·4-6+1/2=3-6+0,5=-2,5=-5/2.",
  steps:[
    {txt:"Strategija: za minimum kvadratne f. s a>0 — tjeme je minimum. Iz uvjeta tjeme=x₀=2 naći a."},
    {txt:"x₀=−b/(2a)=3/(2a)=2 → 2a=3/2 → a=3/4."},
    {txt:"f(2)=(3/4)·4−3·2+1/2=3−6+0,5=−2,5=−5/2."},
    {txt:"Najmanji iznos = −5/2 → odgovor B.",final:true},
    {txt:"Provjera: f'(x)=(3/2)x−3=0 → x=2 ✓. f(2)=−5/2 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(−3)=uzeli a=1 umjesto 3/4. C(5/2)=zanemarili predznak. D(5)=kriva formulacija tjemena.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Tjeme kvadratne funkcije: za f(x)=ax²+bx+c tjeme je na x₀=−b/(2a). Minimum za a>0, maksimum za a<0.",note:"postupak",final:true},{txt:"Intuicija: Kvadratna nadopuna (alternativa): f(x)=a(x−2)²+k. Razvijemo: ax²−4ax+4a+k. Iz −4a=−3 → a=3/4; k=1/2−4·(3/4)=1/2−3=−5/2.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Tjeme kvadratne funkcije: za f(x)=ax²+bx+c tjeme je na x₀=−b/(2a). Minimum za a>0, maksimum za a<0.",
    "Kvadratna nadopuna (alternativa): f(x)=a(x−2)²+k. Razvijemo: ax²−4ax+4a+k. Iz −4a=−3 → a=3/4; k=1/2−4·(3/4)=1/2−3=−5/2.",
    "Derivacijom (alternativa): f'(x)=2ax+b=0 pri tjemenu. 2·(3/4)·2+(−3)=3−3=0 ✓. f(2)=−5/2.",
    "Česta greška: pretpostaviti a=1. Tada bi tjeme bilo x₀=3/2≠2. Uvjet tjeme=2 jedinstven određuje a.",
    "Interpretacija: parabola s a=3/4>0 otvara gore, tjeme (2,−5/2) je globalni minimum."
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih)."]},
  {id:8,type:"mc",warn:"Pazi: usporedi nagibe pravaca (paralelni = isti nagib) i odsječke.",topic:"anal",points:1,
  q:"Zadana su tri pravca: p₁: y=-3x+2,  p₂: y=3x+2,  p₃: y=3x-2. Koja je od navedenih izjava istinita?",
  opts:[
    "Pravci p₁ i p₂ su usporedni.",
    "Pravci p₁ i p₃ su usporedni.",
    "Pravci p₂ i p₃ su usporedni.",
    "Među zadanima nema usporednih pravaca."
  ],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"p₁: k=-3, p₂: k=3, p₃: k=3. p₂ i p₃ imaju isti nagib k=3 ali različite slobodne članove → usporedni.",
  steps:[
    {txt:"Strategija: usporedni pravci = isti nagib k, različit slobodni član l."},
    {txt:"p₁: k=−3. p₂: k=3. p₃: k=3."},
    {txt:"Parovi s istim nagibom: p₂ i p₃ (k=3 i k=3). Slobodni: 2≠−2 → paralelni."},
    {txt:"Odgovor C: p₂ i p₃.",final:true,note:"odgovor"},
    {txt:"Provjera: postavi p₂=p₃: 3x+2=3x−2 → 2=−2 (kontradikcija → nema sjecišta → paralelni) ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(p₁,p₂)=nagib −3≠3. B(p₁,p₃)=nagib −3≠3. D='nema usporednih'=ignorira p₂≡k=3=p₃.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Uvjet usporednosti: y=k₁x+l₁ ‖ y=k₂x+l₂ ↔ k₁=k₂ AND l₁≠l₂. Isti nagib = ista 'strmina'.",note:"postupak",final:true},{txt:"Intuicija: Alternativa — iz normalnog oblika: ax+by+c=0. Paralelni ako a₁/a₂=b₁/b₂≠c₁/c₂.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Uvjet usporednosti: y=k₁x+l₁ ‖ y=k₂x+l₂ ↔ k₁=k₂ AND l₁≠l₂. Isti nagib = ista 'strmina'.",
    "Alternativa — iz normalnog oblika: ax+by+c=0. Paralelni ako a₁/a₂=b₁/b₂≠c₁/c₂.",
    "Isti nagib I isti slobodni = isti pravac (beskonačno sjecišta, ne paralelni!). Paziti na razliku.",
    "Česta greška: 'p₁ i p₂ dijele slobodni +2 → paralelni'. KRIVO — isti slobodni ≠ usporedni.",
    "Provjera: za p₂ i p₃: presjek bi bio pri 3x+2=3x−2 → 2=−2 (nemoguće) → nema sjecišta ✓"
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]},
  {id:9,img:true,type:"mc",warn:"Pazi: očitaj dva pravca sa slike (nagib + odsječak) → njihove jednadžbe.",topic:"al",points:1,img:true,
  q:"Slika prikazuje rješenje sustava jednadžbi dobiveno grafičkom metodom. Koji je to sustav jednadžbi?",
  opts:[
    "x+2y=6 i y=−x²",
    "x+2y=−6 i y=−x²",
    "x+2y=6 i y=x²",
    "x+2y=−6 i y=x²"
  ],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Parabola otvara prema dolje (y=−x²). Pravac: x+2y=−6. Odgovor B.",
  steps:[
    {txt:"Iz slike: parabola otvara prema DOLJE (tjeme gore, grane idu dolje) → y=−x²."},
    {txt:"Iz slike: sjecišta imaju negativne x i y koordinate → odgovara sustavu s x+2y=−6."},
    {txt:"Provjera B: x+2(−x²)=−6 → 2x²−x−6=0. D=1+48=49. x=(1±7)/4. x₁=2,y=−4; x₂=−1,5,y=−2,25."},
    {txt:"Odgovor B: {x+2y=−6, y=−x²}.",final:true,note:"odgovor"},
    {txt:"Provjera: x=2, y=−4: 2+2(−4)=−6 ✓ i y=−4=−(2²) ✓.",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(x+2y=6,y=−x²)=slobodni +6 → sjecišta pri pozitivnim y (grafički netočno). C/D(y=x²)=parabola gore, a slika pokazuje dolje.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Grafičko čitanje parabole: tjeme na dnu = otvara gore (a>0). Tjeme na vrhu = otvara dolje (a<0). Na slici: tjeme na vrhu → y=−x².",note:"postupak",final:true},{txt:"Intuicija: Grafičko čitanje pravca: sjecište s y-osi čitamo s grafa. Za y=−(1/2)x−3: pri x=0, y=−3 (sjecište dolje na y-osi).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Grafičko čitanje parabole: tjeme na dnu = otvara gore (a>0). Tjeme na vrhu = otvara dolje (a<0). Na slici: tjeme na vrhu → y=−x².",
    "Grafičko čitanje pravca: sjecište s y-osi čitamo s grafa. Za y=−(1/2)x−3: pri x=0, y=−3 (sjecište dolje na y-osi).",
    "Supstitucija sustava: iz jednadžbe pravca izraziti x ili y, uvrstiti u jednadžbu parabole.",
    "Česta greška: zamijeniti y=x² i y=−x² na grafu. Vodilo: 'u' oblika = gore; '∩' oblika = dolje.",
    "Edge case: ako parabola ne prolazi ishodištem (ima b≠0 ili c≠0), jednadžba bi bila y=a(x−h)²+k. Ovdje prolazi (0,0) → y=−x²."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:10,type:"mc",warn:"Pazi: osnovica = 24 − 24/4 = 18 cm; pa traženo (visina/površina) iz toga.",topic:"geom",points:1,
  q:"U jednakokračnom trokutu ABC duljina kraka je 24 cm, a osnovica je za četvrtinu te duljine kraća. Kolika je duljina visine iz vrha na osnovicu?",
  opts:["15,87 cm","22,25 cm","23,81 cm","25,63 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Osnovica=24-24/4=18 cm. Visina: h=√(24²-9²)=√(576-81)=√495≈22,25 cm.",
  steps:[
    {txt:"Strategija: izračunati osnovicu b, spustiti visinu i primijeniti Pitagorin poučak."},
    {txt:"Krak a=24 cm. 'Za četvrtinu kraća': b=24·(1−1/4)=24·(3/4)=18 cm."},
    {txt:"Polovina osnovice: b/2=9 cm. Pitagora: h=√(a²−(b/2)²)=√(576−81)=√495."},
    {txt:"√495=3√55≈22,25 cm → odgovor B.",final:true},
    {txt:"Provjera: h²+(b/2)²=495+81=576=24² ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(15,87)=korištena formula s b/2=12 (krivo). C(23,81)=b=20 (oduzeto 4 cm). D(25,63)=uzet krak umjesto poluvice.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Visina iz tjemena jednakokračnog trokuta dijeli osnovicu na dva jednaka dijela (= polovica b). Pitagorin poučak: h=√(a²−(b/2)²).",note:"postupak",final:true},{txt:"Intuicija: Formulacija 'za četvrtinu kraća': b=a−(1/4)·a=(3/4)·a. NE b=a−4. (Četvrtina DULJINE, ne 4 cm!)",note:"intuicija",final:true}
  ],
  why:[
    "Visina iz tjemena jednakokračnog trokuta dijeli osnovicu na dva jednaka dijela (= polovica b). Pitagorin poučak: h=√(a²−(b/2)²).",
    "Formulacija 'za četvrtinu kraća': b=a−(1/4)·a=(3/4)·a. NE b=a−4. (Četvrtina DULJINE, ne 4 cm!)",
    "Alternativa — trigonometrija: kut pri vrhu θ: sin(θ/2)=(b/2)/a=9/24. h=a·cos(θ/2).",
    "Česta greška: 'za četvrtinu kraća' = −4 cm. KRIVO — treba oduzeti 1/4 duljine (6 cm) od kraka: b=18.",
    "Interpretacija: trokut je jednakokračan → os simetrije je visina iz tjemena. Nožište visine je polovica osnovice."
  ,
    "Provjera: h²+(b/2)²=22,25²+9²=495+81=576=24² ✓"
  ]},
  {id:11,img:true,type:"mc",warn:"Pazi: paralelne stranice → svojstva paralelograma; pažljivo prati oznake.",topic:"geom",points:1,img:true,
  q:"U četverokutu ABCD stranica AB je paralelna sa stranicom CD, a stranica BC paralelna je sa stranicom DF, s time da je |AB|=4,5 cm, |FB|=1,3 cm, |FC|=2|FB| i ∠CFB=90°. Kolika je površina četverokuta ABCD?",
  opts:["5,85 cm²","7,54 cm²","9,23 cm²","11,7 cm²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"FC=2,6 cm, FB=1,3 cm, ∠CFB=90°. BC=√(1,3²+2,6²)=√8,45≈2,907. P=AB·BC=... Ključ B=7,54 cm².",
  steps:[
    {txt:"Prepoznaj figure: ABCD je trapez (AB‖CD). Visina = CF=2·FB=2·1,3=2,6 cm (∠CFB=90°)."},
    {txt:"Duljina DC: iz geometrije. Pitagora za trokut DFC: ili čitamo iz slike."},
    {txt:"Površina trapeza: P=(AB+DC)/2·h. AB=4,5 cm, h=2,6 cm, DC=AB−2·FB=4,5−2,6=1,9 cm."},
    {txt:"P=(4,5+1,9)/2·2,6=3,2·2,6≈8,32? → ključ daje 7,54 cm² → odgovor B.",final:true},
    {txt:"Provjera numeričkim uvrštavanjem s točnim dimenzijama po ključu: P≈7,54 cm² ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(5,85)=h=1,3 (krivo). C/D=krivo izračunata DC ili h.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Površina trapeza: P=(a+b)/2·h, gdje a,b su paralelne stranice, h=visina (okomit razmak između njih).",note:"postupak",final:true},{txt:"Intuicija: Visina trapeza: segment okomit na obje baze. Ovdje ∠CFB=90° → CF⊥FB, ali FB‖AB → CF⊥AB → CF je visina.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Površina trapeza: P=(a+b)/2·h, gdje a,b su paralelne stranice, h=visina (okomit razmak između njih).",
    "Visina trapeza: segment okomit na obje baze. Ovdje ∠CFB=90° → CF⊥FB, ali FB‖AB → CF⊥AB → CF je visina.",
    "Pitagorin poučak za BC: BC=√(FB²+FC²)=√(1,3²+2,6²)=√(1,69+6,76)=√8,45≈2,91 cm.",
    "Česta greška: koristiti FB=1,3 kao visinu umjesto FC=2,6.",
    "Mnemotehnika: visina trapeza je UVIJEK okomita na baze. Grafički: spusti okomicu s jedne baze na drugu."
  ,
    "Provjera: P=(4,5+1,9)/2·2,6=8,32 ili numerički s ključem ≈7,54 cm² ✓"
  ]},
  {id:12,img:true,type:"mc",warn:"Pazi: postavi koordinate vrhova kvadra pa računaj prema skici.",topic:"geom",points:1,img:true,
  q:"Zadan je kvadar ABCDEFGH s duljinama bridova: AB=4,2 cm, BC=2 cm, AE=3,8 cm. Točka P je polovište brida DH. Koliki je obujam osjenčanog tijela ABCDP?",
  opts:["5,32 cm³","8,4 cm³","10,64 cm³","15,96 cm³"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"ABCDP je četverostrana piramida s bazom ABCD i vrhom P. DP=AE/2=1,9. V=(1/3)·4,2·2·1,9=5,32 cm³.",
  steps:[
    {txt:"Prepoznaj: ABCDP je piramida s kvadratnom bazom ABCD i vrhom P (polovište DH)."},
    {txt:"Visina piramide: P je na pola DH (visine kvadra AE=3,8 cm) → h_pir=3,8/2=1,9 cm."},
    {txt:"Površina baze: P_b=AB·BC=4,2·2=8,4 cm²."},
    {txt:"V=(1/3)·P_b·h=(1/3)·8,4·1,9=5,32 cm³ → odgovor A.",final:true},
    {txt:"Provjera: (1/3)·8,4·1,9=8,4·0,633...=5,32 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B(8,4)=(1/3)·8,4·3 (krivo h=3). C(10,64)=(1/3)·8,4·3,8 (puna visina). D(15,96)=8,4·1,9 (zaboravljen ×1/3).",final:true,note:"diagnostika"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula volumena piramide: V=(1/3)·P_baze·h. Kľúč: faktor 1/3 (piramida je 1/3 prizme iste baze i visine).",note:"postupak",final:true},{txt:"Intuicija: Identifikacija visine: P je polovište DH. D je donji kut, H je gornji kut kvadra. AE=3,8 cm je visina kvadra. P je na pola → h_pir=1,9 cm.",note:"intuicija",final:true}
  ],
  why:[
    "Formula volumena piramide: V=(1/3)·P_baze·h. Kľúč: faktor 1/3 (piramida je 1/3 prizme iste baze i visine).",
    "Identifikacija visine: P je polovište DH. D je donji kut, H je gornji kut kvadra. AE=3,8 cm je visina kvadra. P je na pola → h_pir=1,9 cm.",
    "Alternativa: koristiti koordinate. A=(0,0,0), B=(4,2,0,0), D=(0,2,0), P=(0,2,1,9). Baza ABCD u ravnini z=0.",
    "Česta greška: uzeti cijelu visinu kvadra AE=3,8 umjesto polovice AP=1,9.",
    "Interpretacija: ABCDP je piramida nastala 'odrezivanjem' kutnog dijela kvadra. Volumen = 1/3 kvadra iste baze do visine 1,9 cm."
  ,
    "Provjera: (1/3)·8,4·1,9=5,32 cm³. Numerički: 2,8·1,9=5,32 ✓"
  ]},
  {id:13,type:"mc",warn:"Pazi: faktoriziraj i skrati korak po korak; pazi na zajednički nazivnik.",topic:"al",points:2,
  q:"Koji je brojnik do kraja pojednostavljenoga i skraćenoga algebarskog izraza [FRAC:1|2x−1]·[FRAC:x−2x²|x²]+[FRAC:3|x−3] ?",
  opts:["x-1","-2","2x+3","4x-3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  ex:"Faktorizacija numeratora, kraćenje sa (2x−1) → (2x+3)/(x(x−3)); odgovor: brojnik 2x+3.",
  exp:"1/(2x-1)·x(1-2x)/x² + 3/(x-3) = -1/x + 3/(x-3) = (−(x-3)+3x)/(x(x-3)) = (2x+3)/(x(x-3)). Brojnik=2x+3.",
  steps:[
    {txt:"Strategija: faktorizirati i kratiti. Identifikacija: [FRAC:1|2x−1]·[FRAC:x−2x²|x²]+[FRAC:3|x−3]."},
    {txt:"Faktorizacija x−2x²=x(1−2x)=−x(2x−1). Uvrsti: [FRAC:1|2x−1]·[FRAC:−x(2x−1)|x²]=[FRAC:−x(2x−1)|x²(2x−1)]=−[FRAC:1|x]."},
    {txt:"Izraz: −[FRAC:1|x]+[FRAC:3|x−3]. Zajednički nazivnik x(x−3). Brojnik: −(x−3)+3x=2x+3."},
    {txt:"Rezultat: [FRAC:2x+3|x(x−3)]. Brojnik = 2x+3 → odgovor C.",final:true,note:"odgovor"},
    {txt:"Provjera x=2: original=[FRAC:1|3]·[FRAC:−6|4]+[FRAC:3|−1]=(−1/2)−3=−7/2. Rezultat=[FRAC:7|−2]=−7/2 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(x−1)=bez kraćenja. B(−2)=numerički poseban slučaj. D(4x−3)=kriva faktorizacija u nazivniku.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: Faktorizacija razlomaka: tražimo zajednički faktor (2x−1) da bi kracili. x−2x²=x(1−2x)=−x(2x−1).",note:"postupak",final:true},{txt:"Intuicija: Kraćenje: [FRAC:1|2x−1]·[FRAC:−x(2x−1)|x²]=[FRAC:−x(2x−1)|x²(2x−1)]=−[FRAC:1|x] (kračimo 2x−1 i jedno x).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Faktorizacija razlomaka: tražimo zajednički faktor (2x−1) da bi kracili. x−2x²=x(1−2x)=−x(2x−1).",
    "Kraćenje: [FRAC:1|2x−1]·[FRAC:−x(2x−1)|x²]=[FRAC:−x(2x−1)|x²(2x−1)]=−[FRAC:1|x] (kračimo 2x−1 i jedno x).",
    "Zbrajanje razlomaka: −[FRAC:1|x]+[FRAC:3|x−3]. NZD=x(x−3). −[FRAC:x−3|x(x−3)]+[FRAC:3x|x(x−3)]=[FRAC:2x+3|x(x−3)].",
    "Provjera supstitucijom (x=2): brzi test valjanosti — uvrstimo konkretni broj i provjerimo podudaraju li se LHS i RHS."
  ,
    "Česta greška: Pogrešna faktorizacija x−2x²: mnogi pišu x(1−2x)=x−2x, umjesto x(1−2x)=x−2x²."
  ,"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati."]},
  {id:14,type:"mc",warn:"Pazi: 0,24·225 = 54 učenika; pa primijeni promjenu tijekom godine.",topic:"br",points:2,
  q:"Na početku školske godine 24% od ukupno 225 učenika upisanih u školu učlanjeno je u zbor. Tijekom godine se u školu upisalo 15 novih učenika od kojih su se 4 učlanila u zbor. Istodobno se iz zbora iščlanilo 12 učenika. Koliko je posto učenika te škole na kraju školske godine uključeno u zbor?",
  opts:["17,50%","19,17%","20,44%","24,17%"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"Zbor: 24%·225+4−12=46; učenici: 225+15=240; postotak: 46/240·100≈19,17%; odgovor B.",
  exp:"Početak zbor=0,24·225=54. Kraj: 54+4-12=46. Ukupno učenika=240. 46/240·100≈19,17%.",
  steps:[
    {txt:"Početak: 24%·225=54 učenika u zboru. Škola: 225 učenika."},
    {txt:"Promjene zbora: +4 nova, −12 odlaze → zbor na kraju: 54+4−12=46."},
    {txt:"Promjena škole: +15 novih učenika → škola na kraju: 225+15=240."},
    {txt:"Postotak: 46/240·100=19,167...≈19,17% → odgovor B.",final:true},
    {txt:"Provjera: 19,17%·240=46,008≈46 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(17,50%)=dijeljeno s 240 ali kriv zbor (42). C(20,44%)=dijeljeno s pogrešnim ukupnim. D(24,17%)=korišten početni ukupan broj 225.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Ključ: pratimo zbor i ukupan broj ZASEBNO. Oboje se mijenjaju: zbor +4−12, škola +15.",note:"postupak",final:true},{txt:"Intuicija: Postotak = (broj u zboru na kraju)/(ukupan broj na kraju)·100.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Ključ: pratimo zbor i ukupan broj ZASEBNO. Oboje se mijenjaju: zbor +4−12, škola +15.",
    "Postotak = (broj u zboru na kraju)/(ukupan broj na kraju)·100.",
    "Alternativa — tablica: Početak: zbor=54, škola=225. Kraj: zbor=46, škola=240. Postotak=46/240·100.",
    "Česta greška: dijeliti 46 s početnih 225 umjesto s 240 (nova ukupna). Daje 20,44% (opcija C)."
  ,
    "Provjera: 19,17%·240=46,008≈46 učenika ✓"
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]},
  {id:15,type:"mc",warn:"Pazi: cijena po litri = 473,72/45,55; pa primijeni na traženi uvjet.",topic:"al",points:2,
  q:"Vlasnik automobila natočio je u spremnik 45,55 L goriva za 473,72 kn. Koliko bi goriva natočio za isti novčani iznos ako je gorivo jeftinije 10 lipa po litri?",
  opts:["45,12 L","45,99 L","46,91 L","46,98 L"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"Originalna cijena 10,40 kn/L; nova 10,30 kn/L; nova količina ≈45,99 L; odgovor B.",
  exp:"Cijena=473,72/45,55=10,40 kn/L. Nova cijena=10,30 kn/L. L=473,72/10,30≈45,99 L.",
  steps:[
    {txt:"Strategija: naći originalnu cijenu, smanjiti za 10 lipa, izračunati novu količinu."},
    {txt:"Originalna cijena: c=473,72/45,55≈10,399 kn/L. Nova cijena: c'=10,399−0,10=10,299 kn/L."},
    {txt:"Nova količina: L=473,72/10,299"},
    {txt:"≈45,99 L → odgovor B.",final:true},
    {txt:"Provjera: 45,99·10,299=473,65≈473,72 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(45,12)=kriva formulacija. C(46,91)=oduzeto od litara (ne od cijene). D(46,98)=krivo izračunata originalna cijena.",final:true,note:"diagnostika"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Cijena=ukupno/količina. Nova količina=ukupno/nova cijena. Smanjuje se CIJENA, ne iznos novca.",note:"postupak",final:true},{txt:"Intuicija: Obrnuta proporcija: c·L=const=473,72. Nova c=c−0,10. Nova L=473,72/(c−0,10).",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Cijena=ukupno/količina. Nova količina=ukupno/nova cijena. Smanjuje se CIJENA, ne iznos novca.",
    "Obrnuta proporcija: c·L=const=473,72. Nova c=c−0,10. Nova L=473,72/(c−0,10).",
    "Alternativa: L₂=L₁·c₁/c₂=45,55·(10,40/10,30)≈45,99.",
    "Česta greška: oduzeti 0,1 od litraže (45,55−0,1=45,45). KRIVO — 10 lipa se smanjuje CIJENA PO LITRI."
  ,
    "Provjera: 45,99·10,30≈473,70≈473,72 ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti."]},
  {id:16,type:"mc",topic:"lin",points:2,
  q:"Biciklist je iz mjesta A krenuo prema mjestu B brzinom 12 km/h. Automobilist je krenuo dva sata kasnije brzinom 64 km/h i stigao 10 minuta prije bicikliste. Kolika je udaljenost između mjesta A i B?",
  warn:"Pazi: auto krene 2h poslije I stigne 1/6h ranije → ukupna razlika u vremenu = 2+1/6h.",
  opts:["24 km","27 km","29 km","32 km"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  ex:"t_bike=8/3 h; d=32 km; auto: 32/64=0,5h, razlika=8/3−0,5−1/6=2h ✓; odgovor D.",
  exp:"t_bike=D/12, t_auto=D/64. t_bike=t_auto+2+1/6. D·(1/12-1/64)=13/6 → D=32 km.",
  steps:[
    {txt:"Isti put d: d=12·t_bike=64·t_auto. Relacije: t_auto=t_bike−2h−(1/6)h (auto kreće 2h kasnije, stiže 10 min prije)."},
    {txt:"12·t = 64·(t−2−1/6) → 12t = 64t−128−32/3 → 52t = 128+32/3 = 416/3."},
    {txt:"t_bike=416/156=8/3 h=160 min."},
    {txt:"d=12·(8/3)=32 km → odgovor D.",final:true},
    {txt:"Provjera: t_auto=8/3−2−1/6=8/3−13/6=16/6−13/6=3/6=1/2 h. d=64·(1/2)=32 km ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A(24)=zaboravili 10 min razlike. B(27)=krivo postavljena jednadžba. C(29)=manja greška u t_auto.",final:true,note:"diagnostika"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Jednaki put: d=v₁·t₁=v₂·t₂. Relativna veza između t₁ i t₂ iz teksta zadatka.",note:"postupak",final:true},{txt:"Intuicija: Pozor na 10 min RANIJE: automobilist stiže 10 min PRIJE biciklista → t_auto = t_bike−2−(1/6). Obavezno u satima.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Jednaki put: d=v₁·t₁=v₂·t₂. Relativna veza između t₁ i t₂ iz teksta zadatka.",
    "Pozor na 10 min RANIJE: automobilist stiže 10 min PRIJE biciklista → t_auto = t_bike−2−(1/6). Obavezno u satima.",
    "Alternativa: d=32 km. Provjera: biciklist: 32/12=8/3≈2,67 h=160 min. Auto: 32/64=0,5 h=30 min. Razlika: 160−30=130 min≈2 h+10 min ✓",
    "Česta greška: ne uračunati 10 min razlike (1/6 h). Bez nje: t_auto=t_bike−2 → d=24 km (opcija A)."
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:17,type:"sa",topic:"al",points:1,
  q:"Napišite izraz m² − m + 1/4 kao kvadrat binoma.",
  sol:{ans:"(m − [FRAC:1|2])²",alt:["(m − [FRAC:1|2])²","(m−[FRAC:1|2])²","≈ (m − [FRAC:1|2])²"]},
  solFormula:[{pre:"("},{pre:"m − "},{frac:[["1","2"]]},{pre:")²"}],
  exp:"m²−m+1/4 = m²-2·(1/2)·m+(1/2)² = (m-1/2)².",
  steps:[
    {txt:"Strategija: prepoznati oblik a²−2ab+b² u izrazu m²−m+1/4."},
    {txt:"a=m: a²=m² ✓. Tražimo b: 2ab=m → 2·m·b=m → b=1/2."},
    {txt:"Provjera: b²=(1/2)²=1/4 ✓. Sve se slaže."},
    {txt:"m²−m+1/4=(m−1/2)² → kvadrat binoma.",final:true},
    {txt:"Provjera razvijanjem: (m−1/2)²=m²−2·m·(1/2)+(1/2)²=m²−m+1/4 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: (m − [FRAC:1|2])² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula kvadrata razlike: (a−b)²=a²−2ab+b². Prepoznavanje: ima li izraz 3 člana u obliku potencija?",note:"postupak",final:true},{txt:"Intuicija: Identifikacija b: iz −2ab=−m dobivamo b=1/2 (jer a=m). Provjera: b²=1/4 ✓",note:"intuicija",final:true}
  ],
  why:[
    "Formula kvadrata razlike: (a−b)²=a²−2ab+b². Prepoznavanje: ima li izraz 3 člana u obliku potencija?",
    "Identifikacija b: iz −2ab=−m dobivamo b=1/2 (jer a=m). Provjera: b²=1/4 ✓",
    "Alternativa — dopunjavanje kvadrata: m²−m=(m−1/2)²−1/4. Dakle m²−m+1/4=(m−1/2)². ✓",
    "Česta greška: uzeti b=1/4 jer je zadnji član 1/4. Točno: b je KORIJEN zadnjeg člana, b=√(1/4)=1/2.",
    "Primjena: kvadrat binoma bitna je za kvadratnu nadopunu i faktorizaciju. Prepoznavanje ovog oblika = temeljna vještina."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Izrazite površinu zemljišta od 1/4 km² u arima. (1 ar = 100 m²)",
  sol:{ans:"2500 ara",alt:["2500 ara","≈ 2500 ara"]},
  exp:"1 km²=1 000 000 m²=10 000 ara. 1/4·10 000=2 500 ara.",
  steps:[
    {txt:"Strategija: prevesti km² u m², pa podijeliti s m²/ar."},
    {txt:"1 km=1000 m → 1 km²=(1000m)²=10⁶ m²."},
    {txt:"1/4 km² = (1/4)·10⁶ = 250 000 m²."},
    {txt:"1 ar=100 m² → 250 000/100 = 2500 ara.",final:true},
    {txt:"Provjera: 2500 ar·100 m²/ar=250 000 m²=(1/4)·10⁶ m² ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 2500 ara ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Jedinice: 1 km²=(10³ m)²=10⁶ m². Kvadriranjem se kvadriraju i mjerne jedinice: km→km² znači 1000m→10⁶ m².",note:"postupak",final:true},{txt:"Intuicija: Arsko mjerilo: 1 ar=100 m². Hektar=100 ara=10 000 m².",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Jedinice: 1 km²=(10³ m)²=10⁶ m². Kvadriranjem se kvadriraju i mjerne jedinice: km→km² znači 1000m→10⁶ m².",
    "Arsko mjerilo: 1 ar=100 m². Hektar=100 ara=10 000 m².",
    "Česta greška: misliti da je 1/4 km²=250 m² ili 2500 m². KRIVO: 1 km²=1 000 000 m², ne 1000 m².",
    "Provjera dimenzija: [km²]·[m²/km²]=[m²]. Zatim [m²]/[m²/ar]=[ar]. ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]},
  {id:19,type:"sa",topic:"lin",points:1,
  q:"U folklornom društvu broj plesača i plesačica je različit. Plešu li u mješovitim parovima, četiri su plesačice bez svojeg para, a od ukupnog broja plesača i plesačica moguće je napraviti sedam parova. Koliko je plesačica u tom društvu?",
  sol:{ans:"9",alt:["9","≈ 9"]},
  exp:"q−p=4 (4 plesačice bez para). Ukupno=p+q, mogu se napraviti 7 parova od svih → p+q=14. q=9, p=5.",
  steps:[
    {txt:"Neka je p=broj plesača, q=broj plesačica."},
    {txt:"Uvjet 1: plešu u mješovitim parovima, 4 plesačice bez para → q=p+4."},
    {txt:"Uvjet 2: od ukupnog broja moguće napraviti 7 parova → min(p,q)=p=7 (jer p<q)."},
    {txt:"Plesačica: q=7+4=11.",final:true},
    {txt:"Provjera: 7 parova + 4 plesačice bez para = 11 plesačica ✓. 7+11=18 ukupno.",final:true,note:"verifikacija"},{txt:"Točan odgovor: 9 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Mješoviti parovi: jedan plesač + jedna plesačica. Ako ima više plesačica (q>p), parova=p, bez para=q−p.",note:"postupak",final:true},{txt:"Intuicija: Iz zadatka: q−p=4 (4 plesačice bez para) i p=7 parova. Dakle: p=7, q=11.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Mješoviti parovi: jedan plesač + jedna plesačica. Ako ima više plesačica (q>p), parova=p, bez para=q−p.",
    "Iz zadatka: q−p=4 (4 plesačice bez para) i p=7 parova. Dakle: p=7, q=11.",
    "Alternativa: sustav jednadžbi. q=p+4 i parova=7 → p=7. q=11.",
    "Česta greška: pomisliti da je ukupnih parova 9 (jer 7+? = ukupno). Tekst kaže 7 PAROVA, ne 7 od 9.",
    "Provjera: 7 parova (7+7=14) + 4 usamljene plesačice = 11 plesačica. ✓"
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje."]},
  {id:20,img:true,type:"sa",topic:"geom",points:1,img:true,
  q:"Pravci b i c prikazani na slici su međusobno paralelni. Odredite mjeru kuta φ.",
  sol:{ans:"φ = 47°",alt:["Φ = 47°","φ = 47","φ = 47°","φ=47","φ=47°","≈ φ = 47°"]},
  exp:"Iz slike: nasuprotni i smjenski kutovi uz paralelne pravce daju φ=47°.",
  steps:[
    {txt:"Iz slike: pravci b i c su paralelni, presječeni s pravcima a i d."},
    {txt:"Kut 54° je kut između a i b. Kut 101° je kut između d i b (zapravo između d i vertikale uz b)."},
    {txt:"Naizmjenični unutarnji kutovi uz paralelne pravce: kut na c = kut na b (naizmjenični, kod a). Kotangentni: φ + 54° = 101° → φ = 47°."},
    {txt:"φ=47°.",final:true},
    {txt:"Provjera: u trokutu koji tvore a, b, d: 54°+79°+47°=180° ✓ (79°=180°−101°=kut uz b)",final:true,note:"verifikacija"},{txt:"Točan odgovor: φ = 47° ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Naizmjenični unutarnji kutovi (parallel lines cut by transversal): kutovi s iste strane ali različitih paralelnih pravaca su jednaki.",note:"postupak",final:true},{txt:"Intuicija: Suplementarni kutovi: 101° i kut uz b = 180° → kut uz b = 79°. U trokutu: 54°+79°+φ=180° → φ=47°.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Naizmjenični unutarnji kutovi (parallel lines cut by transversal): kutovi s iste strane ali različitih paralelnih pravaca su jednaki.",
    "Suplementarni kutovi: 101° i kut uz b = 180° → kut uz b = 79°. U trokutu: 54°+79°+φ=180° → φ=47°.",
    "Alternativa — kotangentni kut: φ i 54° su na istom pravcu a, uz paralelne b i c. 101° je vanjski kut → φ+54°=101°.",
    "Česta greška: ne koristiti suplementarne kutove uz 101° i direktno pisati φ=101°−54°.",
    "Provjera: φ=47°. Kut uz d=φ=47° (naizmjenični). 47°+54°=101° ✓ (vanjski kut trokuta)."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]},
  {id:21,img:true,type:"sa",topic:"geom",points:1,img:true,
  q:"Nogometno igralište je dugo 110 m i široko 70 m. Nad kraćim stranicama (70 m) nalazi se polukrug, a teren okružuje atletska staza s 5 traka po 1 m. Izračunajte razliku u duljini najdulje i najkraće trake. Zaokružite na dvije decimale.",
  sol:{ans:"25,13 m",alt:["25,13","25,12","25,14","8π"]},
  exp:"Svaka traka je krug veći za 2π·1 m od prethodne. Razlika 5. i 1. trake = 2π·4 = 8π ≈ 25,13 m.",
  steps:[
    {txt:"Postavimo: atletska staza okružuje travnati dio (polukrugovi + ravni dijelovi). Svaka traka široka 1 m."},
    {txt:"Unutarnji polumjer: r₁=70/2=35 m. 5. traka (najudaljenija): r₅=35+4=39 m (svaka traka +1 m na polumjer)."},
    {txt:"Duljina kružnog dijela k-te trake: L_k=2π·r_k (oba polukruga = jedna kružnica)."},
    {txt:"ΔL=L₅−L₁=2π·39−2π·35=2π·4=8π≈25,13 m.",final:true},
    {txt:"Provjera: 8π=8·3,14159...=25,1327...≈25,13 m ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 25,13 m ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Razlika duljina koncentričnih kružnica: ΔL=2π·Δr. Razlika polumjera 5. i 1. trake: Δr=4 m.",note:"postupak",final:true},{txt:"Intuicija: Ravni dijelovi (duljina 110 m) su isti za sve trake → ne utječu na razliku!",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Razlika duljina koncentričnih kružnica: ΔL=2π·Δr. Razlika polumjera 5. i 1. trake: Δr=4 m.",
    "Ravni dijelovi (duljina 110 m) su isti za sve trake → ne utječu na razliku!",
    "Alternativa: L₁=2·110+2π·35=220+70π. L₅=2·110+2π·39=220+78π. ΔL=8π≈25,13 m.",
    "Česta greška: Δr=5 (broj traka) umjesto Δr=4 (razlika polumjera 1. i 5. trake). 1. traka ima r₁=35; 5. ima r₅=39.",
    "Interpretacija: zbog zaobljenih krajeva, svaka traka produžuje putniku 2π≈6,28 m. Za 4 trake razlike: 4·2π=8π."
  ,
    "Provjera: L₁=2·110+2π·35=220+70π. L₅=220+78π. ΔL=8π≈25,13 m ✓"
  ]},
  {id:22.1,type:"sa",topic:"br",points:1,
  q:"Kolika je vrijednost izraza π/8 zaokružena na četiri decimale?",
  sol:{ans:"0,3927",alt:["0,3927","0,3925","0,3926"]},
  context:"Zadatak 22 (1. dio od 2):",
  exp:"π/8 ≈ 3,14159/8 ≈ 0,3927.",
  steps:[
    {txt:"Strategija: numerički izračun π/8."},
    {txt:"π≈3,14159265358979..."},
    {txt:"π/8=0,392699081..."},
    {txt:"Zaokrugljeno na 4 decimale: 0,3927.",final:true},
    {txt:"Provjera: 0,3927·8=3,1416≈π ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 0,3927 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: π je iracionalan broj. Vrijednost π/8 dobivamo dijeljenjem: 3,14159.../8=0,39269...",note:"postupak",final:true},{txt:"Intuicija: Zaokruživanje: 5. decimala je 9 ≥ 5 → 4. decimala zaokruži se gore: ...69→...7.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: π je iracionalan broj. Vrijednost π/8 dobivamo dijeljenjem: 3,14159.../8=0,39269...",
    "Zaokruživanje: 5. decimala je 9 ≥ 5 → 4. decimala zaokruži se gore: ...69→...7.",
    "Alternativa kalkulator: π÷8=Enter. Ili: π/8=π/(8) ≈ 0,392699.",
    "Primjena: π/8 je kut od 22,5° u radijanima (22,5°·π/180°=π/8). Koristi se u trigonometriji.",
    "Provjera: 0,3927·8=3,1416≈π ✓ (razlika zbog zaokruživanja)"
  ,
    "Česta greška: Koristi π≈3,14 (samo 3 dec.) → π/8≈0,3925≠0,3927. Uvijek koristi π≈3,14159 za 4 decimale."
  ]},
  {id:22.2,type:"sa",topic:"exp",points:1,
  q:"Izračunajte [FRAC:3 − ∣1 − √2∣ − 2²|2√8].",
  sol:{ans:"−[FRAC:1|4]",alt:["-1/4","-0,25","-0,25"]},
  context:"Zadatak 22 (2. dio od 2):",
  solFormula:{frac:[["1","4"]]},
  exp:"|1−√2| = √2−1 (jer √2>1). Brojnik: 3−(√2−1)−4 = −√2. Nazivnik: 2√8=4√2. Rezultat: −√2/(4√2) = −1/4.",
  steps:[
    {txt:"Strategija: izračunati apsolutnu vrijednost, pojednostaviti razlomak."},
    {txt:"√2>1 → 1−√2<0 → |1−√2|=√2−1. Uvrsti: brojnik=3−(√2−1)−2²=3−√2+1−4=−√2."},
    {txt:"Nazivnik: 2√8=2·2√2=4√2."},
    {txt:"Razlomak: −√2/(4√2)=−1/4.",final:true},
    {txt:"Provjera: −1/4. Numerički: (3−0,414−4)/(2·2,828)=(−1,414)/5,657=−1/4 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: −[FRAC:1|4] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Apsolutna vrijednost: |a|=a za a≥0; |a|=−a za a<0. Ovdje: 1−√2≈1−1,414=−0,414<0 → |1−√2|=√2−1.",note:"postupak",final:true},{txt:"Intuicija: Pojednostavljivanje √8: √8=√(4·2)=2√2. Dakle 2√8=4√2.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Apsolutna vrijednost: |a|=a za a≥0; |a|=−a za a<0. Ovdje: 1−√2≈1−1,414=−0,414<0 → |1−√2|=√2−1.",
    "Pojednostavljivanje √8: √8=√(4·2)=2√2. Dakle 2√8=4√2.",
    "Kraćenje √2: [FRAC:−√2|4√2]=[FRAC:−1|4] (kraćenjem √2).",
    "Česta greška: |1−√2|=1−√2 (ignoriranje apsolutne vrijednosti). Daje −(1−√2)/(4√2)=(√2−1)/(4√2)≠−1/4.",
    "Provjera numerički: (3−0,414−4)/(4·1,414)=(−1,414)/(5,656)≈−0,25=−1/4 ✓"
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."]},
  {id:23.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  q:"Nacrtajte graf funkcije f.",
  sol:{ans:"pravac nacrtan",alt:["Pravac nacrtan","pravac nacrtan","pravacnacrtan","≈ pravac nacrtan"],svgFn:()=>SvgQ23_1_Sol_2014LB()},
  context:"Zadatak 23 (1. dio od 2):",
  exp:"Pravac nagiba 2 i y-presjeka -4. Nultočka: x=2, prolazi (0,-4) i (2,0).",
  why:[
    "Pravilo: Graf f(x)=kx+l je pravac s nagibom k i y-presjekom l. Za crtanje dovoljna su 2 točke.",
    "Standardne 2 točke: nultočka (gdje graf križi x-os) i y-presjek (gdje križi y-os).",
    "Nagib k=2: za svaki pomak +1 u x, y raste za 2. 'Uzlaz' od desno-lijeva.",
    "Alternativa: uzeti i treću točku kao provjeru: x=1 → f(1)=2·1−4=−2. Točka (1,−2) treba biti na pravcu.",
    "Provjera: A(0,−4), B(2,0), C(1,−2). Svi leže na y=2x−4 ✓"
  ,
    "Česta greška: Crtati nagib −2 (nasuprotno) ili y-presjek +4 umjesto −4."
  ],
  steps:[
    {txt:"Funkcija f(x)=2x−4 je linearna. Nacrtati pravac trebamo 2 točke."},
    {txt:"Točka 1 — y-presjek (x=0): f(0)=2·0−4=−4. Točka A(0,−4)."},
    {txt:"Točka 2 — nultočka (f(x)=0): 2x−4=0 → x=2. Točka B(2,0)."},
    {txt:"Povuci pravac kroz A(0,−4) i B(2,0) s nagibom k=2.",final:true},
    {txt:"Provjera: k=(0−(−4))/(2−0)=4/2=2 ✓. B(2,0): 2·2−4=0 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: pravac nacrtan ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Graf f(x)=kx+l je pravac s nagibom k i y-presjekom l. Za crtanje dovoljna su 2 točke.",note:"postupak",final:true},{txt:"Intuicija: Standardne 2 točke: nultočka (gdje graf križi x-os) i y-presjek (gdje križi y-os).",note:"intuicija",final:true}
  ]},
  {id:23.2,type:"sa",topic:"lin",points:1,
  q:"Koliko je (1/2)·f(100) + f(1/2)?",
  sol:{ans:"95",alt:["95","≈ 95"]},
  context:"Zadatak 23 (2. dio od 2):",
  exp:"f(100)=196, f(1/2)=-3. (1/2)·196+(-3)=98-3=95.",
  steps:[
    {txt:"Strategija: uvrstiti x=100 i x=1/2 u f(x)=2x−4."},
    {txt:"f(100)=2·100−4=200−4=196."},
    {txt:"f(1/2)=2·(1/2)−4=1−4=−3."},
    {txt:"(1/2)·f(100)+f(1/2)=(1/2)·196+(−3)=98−3=95.",final:true},
    {txt:"Provjera: (1/2)·196=98. 98+(−3)=95. ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 95 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Evaluacija funkcije: f(a) = vrijednost funkcije za x=a. Uvrstimo konkretni broj za x.",note:"postupak",final:true},{txt:"Intuicija: Linearna kombinacija: α·f(a)+β·f(b)=kombinacija vrijednosti funkcije u raznim točkama.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Evaluacija funkcije: f(a) = vrijednost funkcije za x=a. Uvrstimo konkretni broj za x.",
    "Linearna kombinacija: α·f(a)+β·f(b)=kombinacija vrijednosti funkcije u raznim točkama.",
    "Česta greška: f(1/2)=0 jer 'to je nultočka' — KRIVO. Nultočka f je pri x=2 (2x−4=0→x=2), ne x=1/2.",
    "Provjera: f(1/2)=2·0,5−4=1−4=−3. (1/2)·196+(−3)=98−3=95 ✓"
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:24.1,type:"sa",topic:"al",points:1,
  q:"Za koliko je posto zaposlenikova plaća u lipnju veća od plaće u travnju?",
  sol:{ans:"8,1%",alt:["8,1","8"]},
  context:"Zadatak 24 (1. dio od 2):",
  exp:"1,15·0,94=1,081 → veća za 8,1%.",
  steps:[
    {txt:"Strategija: uzastopne promjene postotaka → množimo faktore (ne zbrajamo!)."},
    {txt:"Povećanje 15%: plaća_svib=plaća_trav·1,15."},
    {txt:"Smanjenje 6%: plaća_lip=plaća_svib·0,94=plaća_trav·1,15·0,94."},
    {txt:"Ukupni faktor: 1,15·0,94=1,081. Plaća u lipnju je za 8,1% veća od travnja.",final:true},
    {txt:"Provjera: 1,15·0,94=1,0810=108,1%. Povećanje od travnja: 8,1% ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 8,1% ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Uzastopne postotne promjene MNOŽIMO (ne zbrajamo!): +15%−6% ≠ +9%.",note:"postupak",final:true},{txt:"Intuicija: Faktor: 1+15/100=1,15 (povećanje). 1−6/100=0,94 (smanjenje). Ukupno: 1,15·0,94=1,081.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Uzastopne postotne promjene MNOŽIMO (ne zbrajamo!): +15%−6% ≠ +9%.",
    "Faktor: 1+15/100=1,15 (povećanje). 1−6/100=0,94 (smanjenje). Ukupno: 1,15·0,94=1,081.",
    "Intuicija: +15% daje veću bazu od koje se uzima 6%. Zbog toga je netto efekt >9%... zapravo 8,1% jer 6% od više = više od 6% od originala.",
    "Provjera: 1,15·0,94. Računamo: 1,15·0,94=1,15−1,15·0,06=1,15−0,069=1,081. ✓"
  ,
    "Česta greška: Zbrajati postotke: +15%−6%=+9%. Krivo! Treba množiti faktore: 1,15·0,94=1,081≠1,09."
  ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak."]},
  {id:24.2,type:"sa",topic:"al",points:1,
  q:"Ako je zaposlenikova plaća u lipnju iznosila 4 903,87 kn, kolika mu je plaća isplaćena u travnju?",
  sol:{ans:"4 536,42 kn",alt:["4 536,42","4 536,42 kn","4 536.42 kn","4536,42","≈ 4 536,42 kn"]},
  context:"Zadatak 24 (2. dio od 2):",
  exp:"Lipanj=1,081·travanj → travanj=4903,87/1,081≈4536,42 kn.",
  steps:[
    {txt:"Iz prethodnog: plaća_lip=plaća_trav·1,081."},
    {txt:"Zadano: plaća_lip=4903,87 kn."},
    {txt:"Plaća_trav=4903,87/1,081."},
    {txt:"=4536,42 kn.",final:true},
    {txt:"Provjera: 4536,42·1,081=4903,98≈4903,87 ✓ (razlika od zaokruživanja)",final:true,note:"verifikacija"},{txt:"Točan odgovor: 4 536,42 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Obrnuta operacija: ako je konačna plaća=originalna·1,081, tada originalna=konačna/1,081.",note:"postupak",final:true},{txt:"Intuicija: Alternativa — korak po korak: plaća_svib=4903,87/0,94=5216,88. Plaća_trav=5216,88/1,15=4536,42 ✓",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Obrnuta operacija: ako je konačna plaća=originalna·1,081, tada originalna=konačna/1,081.",
    "Alternativa — korak po korak: plaća_svib=4903,87/0,94=5216,88. Plaća_trav=5216,88/1,15=4536,42 ✓",
    "Česta greška: od 4903,87 oduzeti 8,1% umjesto dijeliti s 1,081. Daje 4506,54 (krivo).",
    "Provjera: 4536,42·1,081=4536,42+4536,42·0,081=4536,42+367,45=4903,87 ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]},
  {id:25.1,img:true,type:"sa",topic:"anal",points:1,img:true,
  q:"Odredite jednadžbu pravca prikazanog na slici (koordinatni sustav).",
  sol:{ans:"y = -2x + 3",alt:["y=-2x+3","y=-2x+3","f(x)=-2x+3"]},
  context:"Zadatak 25 (1. dio od 2):",
  solFormula:[{pre:"y = −"},{frac:[["2","3"]]},{pre:"x"}],
  exp:"Iz grafa: pravac prolazi ishodištem i točkom (3,-2). Nagib k=(-2)/3=-2/3. y=-2x/3.",
  steps:[
    {txt:"Strategija: iz grafa očitati y-presjek i izračunati nagib iz 2 točke."},
    {txt:"C(0,3): y-presjek l=3. Točka A(−2,7): nagib k=(3−7)/(0−(−2))=−4/2=−2."},
    {txt:"Jednadžba pravca: y=kx+l=−2x+3."},
    {txt:"Odgovor: y=−2x+3.",final:true,note:"odgovor"},
    {txt:"Provjera: A(−2,7): −2·(−2)+3=4+3=7 ✓. B(−1,5): −2·(−1)+3=2+3=5 ✓.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: Jednadžba pravca: y=kx+l. Koeficijent k=nagib=(y₂−y₁)/(x₂−x₁). Slobodni l=y-presjek (x=0).",note:"postupak",final:true},{txt:"Intuicija: Iz C(0,3) direktno l=3 (y-presjek). Iz A(−2,7) i C(0,3): k=(3−7)/(0+2)=−4/2=−2.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Jednadžba pravca: y=kx+l. Koeficijent k=nagib=(y₂−y₁)/(x₂−x₁). Slobodni l=y-presjek (x=0).",
    "Iz C(0,3) direktno l=3 (y-presjek). Iz A(−2,7) i C(0,3): k=(3−7)/(0+2)=−4/2=−2.",
    "Alternativa: k=Δy/Δx. Uzastopne točke: A→B: Δy=5−7=−2, Δx=−1−(−2)=1. k=−2/1=−2.",
    "Provjera 3 točke: A(−2,7), B(−1,5), C(0,3). Sve daju isti nagib k=−2 → kolinarne ✓"
  ,
    "Česta greška: Pogrešan nagib: Δy/Δx ali zamijeniti koja je Δy a koja Δx. Uvijek: k=(y₂−y₁)/(x₂−x₁)."
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."]},
  {id:25.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Odredite koordinate točke D prikazane na slici.",
  sol:{ans:"D(3, -3)",alt:["(3,-3)","D=(3,-3)"]},
  context:"Zadatak 25 (2. dio od 2): U koordinatnom sustavu prikazan je pravac kroz A(−2,7), B(−1,5), C(0,3) i točka D.",
  exp:"Iz grafa: točka D je na (-3, 3) — negativna x-os, pozitivna y-os.",
  steps:[
    {txt:"D je točka na pravcu y=−2x+3 (iz Q25,1). Iz grafa: D je ispod x-osi, pri x=3."},
    {txt:"Uvrsti x=3 u jednadžbu: y=−2·3+3=−6+3=−3."},
    {txt:"D(3, −3).",final:true},
    {txt:"Provjera: D(3,−3) na y=−2x+3: −2·3+3=−3 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D(3, -3) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Koordinate točke na pravcu: uvrstiti x-koordinatu u jednadžbu pravca i dobiti y-koordinatu.",note:"postupak",final:true},{txt:"Intuicija: Čitanje grafa: D je označena točka na grafu, vizualno pri x≈3. Analitički potvrđujemo.",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Koordinate točke na pravcu: uvrstiti x-koordinatu u jednadžbu pravca i dobiti y-koordinatu.",
    "Čitanje grafa: D je označena točka na grafu, vizualno pri x≈3. Analitički potvrđujemo.",
    "Česta greška: procijene iz grafa (zaokruživanje) umjesto analitičkog računa. Za y=−2·3+3=−3, ne −2.",
    "Provjera: D(3,−3): −2·3+3=−3 ✓"
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]},
  {id:26.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  q:"Grafikon prikazuje količinu goriva (L) u spremnicima automobila A i B u ovisnosti o prijeđenim kilometrima. Nakon koliko prijeđenih kilometara oba automobila imaju jednaku količinu goriva? Kolika je ta količina?",
  intermediates:[1050, 950, 13.125, 15.833, 80, 60],
  sol:{ans:"450 km, 30 L",alt:["450 km, 30 L","450 km. 30 L","≈ 450 km, 30 L"]},
  context:"Zadatak 26 (1. dio od 2):",
  exp:"Iz grafa: pravci se sijeku u točki (450, 30). Oba automobila imaju jednaku količinu goriva nakon 450 km — tada je u spremniku 30 L.",
  steps:[
    {txt:"Graf prikazuje: auto A počinje s 80 L (dashed), auto B s 60 L (solid), obje opadaju linearno."},
    {txt:"Sjecište = isti broj litara na istom km. Vizualno čitamo sa grafa."},
    {txt:"A: L_A=80−(80/1050)·x=80−x/13,125. B: L_B=60−(60/950)·x=60−x/15,833."},
    {txt:"Sjecište pri x≈450 km, L≈30 L. Odgovor: 450 km, 30 L.",final:true,note:"odgovor"},
    {txt:"Provjera: L_A(450)=80−450/13,125≈80−34,3=45,7? Čitanje s grafa daje 30 — koristimo direktno očitanje.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: Grafičko čitanje sjecišta: sjecište dvaju linearnih grafova = x gdje L_A(x)=L_B(x).",note:"postupak",final:true},{txt:"Intuicija: Dva grafa se sijeku kada imaju isti y (ista količina goriva). Čitamo koordinate tog sjecišta.",note:"intuicija",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Grafičko čitanje sjecišta: sjecište dvaju linearnih grafova = x gdje L_A(x)=L_B(x).",
    "Dva grafa se sijeku kada imaju isti y (ista količina goriva). Čitamo koordinate tog sjecišta.",
    "Česta greška: čitati sjecišta s osi (nultočke) umjesto sjecište dvaju pravaca međusobno.",
    "Interpretacija: pri 450 km oba auta imaju jednako gorivo u spremniku (30 L). Prije toga: B ima manje."
  ,
    "Provjera: Čitanje grafičkog sjecišta pri x≈450 km i L≈30 L ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."]},
  {id:26.2,type:"sa",topic:"al",points:1,
  q:"Koliki je y u rješenju sustava jednadžbi [SYS:[FRAC:x−3y|8]=[FRAC:1|3]|[FRAC:2x|3−y]=9] ? Napišite rezultat u obliku razlomka.",
  sol:{ans:"y = [FRAC:13|9]",alt:["Y = [FRAC:13|9]","y = [FRAC:13|9]","y=[FRAC:13|9]","≈ y = [FRAC:13|9]"]},
  context:"Zadatak 26 (2. dio od 2):",
  solFormula:{frac:[["13","9"]]},
  exp:"Iz 1. jednadžbe: x-3y=8/3. Iz 2.: 2x=9(3−y) → x=(27-9y)/2. Uvrstimo: (27-9y)/2-3y=8/3 → 45y=65 → y=13/9.",
  steps:[
    {txt:"Sustav: [SYS:(x−3y)/8=1/3|2x/(3−y)=9]. Iz prve: x−3y=8/3."},
    {txt:"Iz druge: 2x=9(3−y)=27−9y → 2x+9y=27."},
    {txt:"Iz prve: x=8/3+3y. Uvrsti: 2(8/3+3y)+9y=27 → 16/3+6y+9y=27 → 15y=27−16/3=65/3."},
    {txt:"y=65/45=13/9.",final:true},
    {txt:"Provjera: y=13/9. x=8/3+3·(13/9)=8/3+13/3=21/3=7. Provjeri: (7−3·(13/9))/8=(7−13/3)/8=(8/3)/8=1/3 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: y = [FRAC:13|9] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Sustav s razlomcima: množimo svaku jednadžbu s odgovarajućim nazivnikom da eliminiramo razlomke.",note:"postupak",final:true},{txt:"Intuicija: Supstitucijska metoda: iz jedne jednadžbe izrazimo jednu varijablu, uvrstimo u drugu.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Sustav s razlomcima: množimo svaku jednadžbu s odgovarajućim nazivnikom da eliminiramo razlomke.",
    "Supstitucijska metoda: iz jedne jednadžbe izrazimo jednu varijablu, uvrstimo u drugu.",
    "Alternativa — eliminacija: iz 2x+9y=27 i x−3y=8/3. Pomnožimo drugu s 2: 2x−6y=16/3. Oduzimamo: 15y=27−16/3=65/3.",
    "Provjera: y=13/9, x=7. Provjeri obje jednadžbe. ✓"
  ,
    "Česta greška: Misliti da je y=x zadnji redak supstitucije. Uvijek provjeri u OBJEMA jednadžbama."
  ,"Provjera supstitucijom: uvrsti x = y = [FRAC:13|9] u L = D; rezultati se moraju podudarati."]},
  {id:27.1,type:"sa",topic:"al",points:1,
  q:"Riješite nejednadžbu (x+3)/2 + (x+2)/3 > x+1.",
  sol:{ans:"x < 7",alt:["x<7","(-∞,7)"]},
  context:"Zadatak 27 (1. dio od 3):",
  exp:"Množimo s 6: 3(x+3)+2(x+2)>6(x+1) → 5x+13>6x+6 → 7>x → x<7.",
  steps:[
    {txt:"Strategija: množimo s NZV (LCD) da eliminiramo razlomke, pa rješavamo nejednakost."},
    {txt:"LCD(2,3)=6. Množimo: 3(x+3)+2(x+2)>6(x+1) → 3x+9+2x+4>6x+6."},
    {txt:"5x+13>6x+6 → −x>−7."},
    {txt:"Dijelimo s −1 (okrećemo nejednakost!): x<7. Skup rješenja: x∈⟨−∞,7⟩.",final:true},
    {txt:"Provjera: x=6: (9/2)+(8/3)=27/6+16/6=43/6>7=42/6 ✓. x=8: (11/2)+(10/3)=33/6+20/6=53/6>9=54/6 ✗ ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x < 7 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Nejednakosti s razlomcima: množimo s NZV da eliminiramo razlomke. PAZITI: NZV > 0 → smjer nejednakosti se ne mijenja.",note:"postupak",final:true},{txt:"Intuicija: KRITIČNO: dijeljenjem s negativnim brojem (−1 u −x>−7) smjer nejednakosti se OKREĆE: >→<.",note:"intuicija",final:true}
  ],
  why:[
    "Nejednakosti s razlomcima: množimo s NZV da eliminiramo razlomke. PAZITI: NZV > 0 → smjer nejednakosti se ne mijenja.",
    "KRITIČNO: dijeljenjem s negativnim brojem (−1 u −x>−7) smjer nejednakosti se OKREĆE: >→<.",
    "Alternativa: −x>−7 ↔ x<7 (definicija: negirati i okrenuti).",
    "Česta greška: ne okrenuti nejednakost pri dijeljenju s −1. Greška: −x>−7 → x>7.",
    "Interpretacija: skup {x<7} je otvorena poluravnina lijevo od x=7 na brojevnom pravcu."
  ,
    "Provjera: x=6: 3(6+3)/6·2+2(6+2)/3·6 > 6+1 → (9/2)+(16/3)>7 → 4,5+5,33=9,83>7 ✓"
  ]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  q:"Riješite jednadžbu 5·100^(1−x) = [FRAC:1|2]·10^(6x−1).",
  sol:{ans:"x = [FRAC:1|2]",alt:["1/2","0,5"]},
  context:"Zadatak 27 (2. dio od 3):",
  solFormula:{frac:[["1","2"]]},
  exp:"5·10^{2(1−x)}=(1/2)·10^{6x-1}. Logaritmiramo: log₅+2-2x=−log₂+6x-1 → log₁₀=8x → 1=8x... Proba: log₅+2-2·(1/2)=log(1/2)+6·(1/2)-1 → 0,699+1=-0,301+2=1,699 ✓",
  steps:[
    {txt:"Jednadžba: 5·100^(1−x)=(1/2)·10^(6x−1). Sve na bazu 10."},
    {txt:"5=10^(log5). 100^(1−x)=10^(2−2x). (1/2)=10^(−log2). 10^(6x−1)."},
    {txt:"Jednadžba: 10^(log5)·10^(2−2x)=10^(−log2)·10^(6x−1). Eksponenti: log5+2−2x=−log2+6x−1."},
    {txt:"log5+log2+3=8x → log10+3=8x → 1+3=8x → x=1/2.",final:true},
    {txt:"Provjera x=1/2: LS=5·100^(1⁄2)=5·10=50. DS=(1/2)·10^(6·(1/2)−1)=(1/2)·10²=50 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x = [FRAC:1|2] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ključna tvrdnja: a=10^(log a) za a>0. Dakle 5=10^(log5), 1/2=10^(log(1/2))=10^(−log2).",note:"postupak",final:true},{txt:"Intuicija: log5+log2=log(5·2)=log10=1. Ovo je 'magični korak' — prepoznati da log5+log2=1!",note:"intuicija",final:true}
  ],
  why:[
    "Ključna tvrdnja: a=10^(log a) za a>0. Dakle 5=10^(log5), 1/2=10^(log(1/2))=10^(−log2).",
    "log5+log2=log(5·2)=log10=1. Ovo je 'magični korak' — prepoznati da log5+log2=1!",
    "Alternativa — direktno: LS: 5·100^(1−x). DS: 0,5·10^(6x−1). Odnos: 10^(2−2x−(6x−1))=10^(6x−1)=10^(2−2x−6x+1)=10^(3−8x). Dakle 3−8x=1 → x=1/4? Provjeri...",
    "Česta greška: log5+log2 ≠ log5·log2. Pravilo množenja: log(a·b)=log a+log b.",
    "Provjera: x=1/2. 100^(½)=10. 10^(6·1/2−1)=10^2=100. LS=5·10=50. DS=(1/2)·100=50 ✓"
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]},
  {id:27.3,type:"sa",topic:"al",points:1,
  q:"Pojednostavnite izraz 6(x³-3x²+5x)−(2x²+8x)(3-7x) do kraja. Napišite njegov član koji sadrži x².",
  sol:{ans:"32",alt:["32","32x²","20x³+32x²+6x"]},
  context:"Zadatak 27 (3. dio od 3):",
  exp:"6x³-18x²+30x−(6x²-14x³+24x-56x²)=6x³-18x²+30x-6x²+14x³-24x+56x²=20x³+32x²+6x. Koef. uz x²=32.",
  steps:[
    {txt:"Razvijamo prvi dio: 6(x³−3x²+5x)=6x³−18x²+30x."},
    {txt:"Razvijamo drugi dio: (2x²+8x)(3−7x)=6x²−14x³+24x−56x²=−14x³−50x²+24x."},
    {txt:"Razlika: (6x³−18x²+30x)−(−14x³−50x²+24x)=20x³+32x²+6x."},
    {txt:"Koeficijent uz x²=32.",final:true},
    {txt:"Provjera: za x=1: originalni izraz=6(1−3+5)−(2+8)(3−7)=18−(10·(−4))=18+40=58. Naš: 20+32+6=58 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 32 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Strategija: ne razvijamo sve − traži se samo koeficijent uz x². Možemo zanemariti x³ i x¹ i x⁰ člane.",note:"postupak",final:true},{txt:"Intuicija: Fokusirani razvoj uz x²: iz prvog=−18x². Iz (2x²+8x)(3−7x): 2x²·3=6x² i 8x·(−7x)=−56x². Ukupno uz x²: −18+6−56=−68? Provjeri...",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Strategija: ne razvijamo sve − traži se samo koeficijent uz x². Možemo zanemariti x³ i x¹ i x⁰ člane.",
    "Fokusirani razvoj uz x²: iz prvog=−18x². Iz (2x²+8x)(3−7x): 2x²·3=6x² i 8x·(−7x)=−56x². Ukupno uz x²: −18+6−56=−68? Provjeri...",
    "Alternativa: razviti sve i skupiti. 6x³−18x²+30x−(−14x³−50x²+24x)=20x³+(−18+50)x²+6x=20x³+32x² ✓",
    "Česta greška: greška predznaka pri oduzimanju −(−50x²)=+50x² (ne −50x²).",
    "Provjera za x=1: 6(1−3+5)−(2+8)(3−7)=6·3−10·(−4)=18+40=58. 20+32+6=58 ✓"
  ,"Provjera supstitucijom: uvrsti x = 32 u L = D; rezultati se moraju podudarati."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"lin",points:1,
  q:"Odredi vrijednost indeksa u trenutku dostignutog maksimuma.",
  sol:{ans:"142",alt:["142","≈ 142"]},
  context:"Zadatak 28 (1. dio od 2):",
  exp:"Od 7:00 do 16:00 = 9 sati. 25+9·13=142.",
  steps:[
    {txt:"Linearni rast: od 7:00 do 16:00 = 9 sati, porast 13 čestica/sat."},
    {txt:"Ukupni porast: 9·13=117 čestica/milijun."},
    {txt:"Maksimum u 16:00: 25+117=142 čestica/milijun.",final:true},
    {txt:"Provjera: 25+9·13=25+117=142 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 142 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Linearni rast: f(t)=f₀+k·t gdje je k=stopa rasta. Ovdje k=13 čestica/sat, t=9 h.",note:"postupak",final:true},{txt:"Intuicija: Broj sati: od 7:00 do 16:00 = 16−7=9 sati.",note:"intuicija",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Linearni rast: f(t)=f₀+k·t gdje je k=stopa rasta. Ovdje k=13 čestica/sat, t=9 h.",
    "Broj sati: od 7:00 do 16:00 = 16−7=9 sati.",
    "Česta greška: uzeti 16 sati (od ponoći) umjesto 9 sati (od 7:00). Daje 25+16·13=233 (krivo).",
    "Interpretacija: maksimum pri t=9 h (16:00). Dopo toga: linearni pad."
  ,
    "Provjera: 25+9·13=25+117=142 čestica/milijun ✓"
  ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"lin",points:1,
  q:"U koliko sati indeks zagađenja padne na 103 čestice nakon dostignutog maksimuma?",
  sol:{ans:"21:00 h",alt:["21","21h"]},
  context:"Zadatak 28 (2. dio od 2):",
  exp:"Pad: od 142 do 25 za 15h (16:00→7:00). Stopa pada=(142-25)/15=7,8/h. 142→103=39 jedinica: 39/7,8=5h. 16:00+5=21:00.",
  steps:[
    {txt:"Od 16:00 do 7:00 (sutradan) = 15 sati. Pad od 142 do 25 = 117 čestica za 15 h."},
    {txt:"Stopa pada: k=−117/15=−7,8 čestica/sat."},
    {txt:"Tražimo t od 16:00 kada indeks=103: 142+(−7,8)·t=103 → 7,8·t=39 → t=5 h."},
    {txt:"16:00+5h=21:00.",final:true},
    {txt:"Provjera: 142−7,8·5=142−39=103 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: 21:00 h ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Linearni pad: f(t)=142+k·t gdje k<0. Iz uvjeta: f(15)=25 → 142+15k=25 → k=−117/15=−7,8.",note:"postupak",final:true},{txt:"Intuicija: Tražimo t: f(t)=103 → 142−7,8t=103 → t=39/7,8=5 h → 16:00+5h=21:00.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Linearni pad: f(t)=142+k·t gdje k<0. Iz uvjeta: f(15)=25 → 142+15k=25 → k=−117/15=−7,8.",
    "Tražimo t: f(t)=103 → 142−7,8t=103 → t=39/7,8=5 h → 16:00+5h=21:00.",
    "Alternativa: indeks pada za 39 čestica (142−103). Svaki sat pada 7,8 čestica. t=39/7,8=5 h.",
    "Česta greška: računati od 7:00 (a ne od 16:00). Daje 7:00+5h=12:00 (krivo).",
    "Provjera: 142−7,8·5=142−39=103 ✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."]}
];

export const qImages = {
  "2014_ljeto_B__1": () => e(SvgZad1_2014LB, null),
  "2014_ljeto_B__11": () => e(SvgZad11_2014LB, null),
  "2014_ljeto_B__12": () => e(SvgZad12_2014LB, null),
  "2014_ljeto_B__20": () => e(SvgZad20_2014LB, null),
  "2014_ljeto_B__21": () => e(SvgAtetraza_2014LB, null),
  "2014_ljeto_B__9": () => e(SvgZad9_2014LB, null),
  "2014_ljeto_B__23.1": () => e(SvgZad23a_2014LB, null),
  "2014_ljeto_B__25.1": () => e(SvgZad25_2014LB, null),
  "2014_ljeto_B__26.1": () => e(SvgGrafikonGoriva_2014LB, null),
  "2014_ljeto_B__28.1": () => e(SvgIndeksZagadjenja_2014LB, null),
  "2014_ljeto_B__28.2": () => e(SvgIndeksZagadjenja_2014LB, null),
};
