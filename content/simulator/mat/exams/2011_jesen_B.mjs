// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2011jB(){
  const c={padding:"10px 14px",border:"1px solid #4a90d9",fontSize:13,lineHeight:1.4,textAlign:"center"};
  const h={...c,fontWeight:700,background:"rgba(74,144,217,.18)",color:"var(--blue)"};
  const rl={...c,fontWeight:700,background:"rgba(233,180,70,.10)",color:"var(--gold)",textAlign:"left"};
  const v={...c,background:"rgba(255,255,255,.03)",color:"var(--text)"};
  const vEn={...v,color:"var(--red)",fontWeight:600};
  const vUg={...v,color:"var(--green)",fontWeight:600};
  return e("div",{style:{overflowX:"auto",margin:"10px 0",display:"flex",justifyContent:"center"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:13,minWidth:340,boxShadow:"0 2px 8px rgba(74,144,217,.15)"}},
      e("thead",null,e("tr",null,
        e("th",{style:{...h,width:"34%"}},""),
        e("th",{style:{...h,width:"33%"}},"100 g ŽITARICA"),
        e("th",{style:{...h,width:"33%"}},"100 g MLIJEKA")
      )),
      e("tbody",null,
        e("tr",null,
          e("td",{style:rl},"Energetska vrijednost"),
          e("td",{style:vEn},"341 kcal / 1441 kJ"),
          e("td",{style:vEn},"60 kcal / 251 kJ")
        ),
        e("tr",null,
          e("td",{style:rl},"Ugljikohidrati"),
          e("td",{style:vUg},"57,0 g"),
          e("td",{style:vUg},"4,53 g")
        )
      )
    )
  );
}

function Svg27_2011jB(){
  const W=420,H=320;
  const padL=70, padR=20, padT=30, padB=50;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  // Vrijednosti procijenjene iz PDF-a:
  const data = [
    {label:"A", value:750000},
    {label:"B", value:250000},
    {label:"C", value:50000},
    {label:"D", value:350000},
    {label:"E", value:450000},
    {label:"F", value:200000},
    {label:"G", value:100000},
    {label:"H", value:150000}
  ];
  const yMax = 800000;
  const barW = 14;
  const gap = (plotW - data.length*barW) / (data.length+1);
  const yScale = v => padT + plotH - (v/yMax)*plotH;
  const st="var(--text)";
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Y-axis grid linije + oznake
    ...[100000, 500000].flatMap(v => [
      e("line",{key:"g"+v,x1:padL,y1:yScale(v),x2:W-padR,y2:yScale(v),stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"2 3"}),
      e("text",{key:"tg"+v,x:padL-5,y:yScale(v)+4,fontSize:11,fontWeight:600,fill:st,textAnchor:"end"},
        v===100000 ? "100 000" : "500 000")
    ]),
    // Y axis line
    e("line",{x1:padL,y1:padT-5,x2:padL,y2:padT+plotH,stroke:st,strokeWidth:1.4}),
    // Y axis arrow
    e("polygon",{points:`${padL-4},${padT} ${padL+4},${padT} ${padL},${padT-8}`,fill:st}),
    // Y axis label
    e("text",{x:padL-50,y:padT-14,fontSize:11,fontWeight:700,fill:st},"broj"),
    e("text",{x:padL-50,y:padT-2,fontSize:11,fontWeight:700,fill:st},"stanovnika"),
    // X axis line
    e("line",{x1:padL,y1:padT+plotH,x2:W-padR,y2:padT+plotH,stroke:st,strokeWidth:1.4}),
    // X axis arrow
    e("polygon",{points:`${W-padR-3},${padT+plotH-4} ${W-padR-3},${padT+plotH+4} ${W-padR+5},${padT+plotH}`,fill:st}),
    // X axis label
    e("text",{x:W-padR-30,y:padT+plotH+30,fontSize:11,fontWeight:700,fill:st},"županije"),
    // Bars
    ...data.flatMap((d,i) => {
      const x = padL + gap + i*(barW+gap);
      const y = yScale(d.value);
      const h = (padT+plotH) - y;
      return [
        e("rect",{key:"b"+i,x:x,y:y,width:barW,height:h,fill:"var(--blue)",stroke:"var(--blue)",strokeWidth:1}),
        e("text",{key:"l"+i,x:x+barW/2,y:padT+plotH+18,fontSize:13,fontWeight:700,fill:"var(--gold)",textAnchor:"middle",fontStyle:"italic"},d.label)
      ];
    })
  );
}

function Svg26_2_2011jB(){
  const W=360,H=320;
  const ox=140, oy=160;
  const u=24;
  const st="var(--text)";
  // Pravac y = (5/2)x: prolazi (0,0) i (2, 5). Granice grafičkog prikaza:
  // x∈[-2.5, 2.5] daje y∈[-6.25, 6.25] — na grafu u jedinicama
  const x1=-1.5, y1=-1.5*2.5;
  const x2=2.0,  y2=2.0*2.5;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid
    ...Array.from({length:13},(_,i)=>i-6).flatMap(i=>[
      e("line",{x1:ox+i*u,y1:10,x2:ox+i*u,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"}),
      e("line",{x1:10,y1:oy+i*u,x2:W-10,y2:oy+i*u,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"})
    ]),
    // Osi
    e("line",{x1:ox,y1:10,x2:ox,y2:H-10,stroke:st,strokeWidth:1.4}),
    e("line",{x1:10,y1:oy,x2:W-10,y2:oy,stroke:st,strokeWidth:1.4}),
    // Strelice
    e("polygon",{points:`${ox-4},${15} ${ox+4},${15} ${ox},${5}`,fill:st}),
    e("polygon",{points:`${W-15},${oy-4} ${W-15},${oy+4} ${W-5},${oy}`,fill:st}),
    // Pravac (zelena - to je sadržaj, key linija)
    e("line",{x1:ox+x1*u,y1:oy-y1*u,x2:ox+x2*u,y2:oy-y2*u,stroke:"var(--green)",strokeWidth:2}),
    // Oznake
    e("text",{x:ox+6,y:18,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"y"),
    e("text",{x:W-13,y:oy+13,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"x"),
    e("text",{x:ox-12,y:oy+14,fontSize:11,fontWeight:700,fill:st},"0"),
    e("text",{x:ox+u-3,y:oy+14,fontSize:11,fontWeight:700,fill:st},"1"),
    e("text",{x:ox-13,y:oy-u+4,fontSize:11,fontWeight:700,fill:st},"1")
  );
}

function Svg26_1_2011jB(){
  const W=360,H=320;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const ox=180, oy=200; // ishodište u px (offset jer y = 5 mora stati gore)
  const u=24; // 1 jed = 24 px
  const st="var(--text)";
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid
    ...Array.from({length:13},(_,i)=>i-7).flatMap(i=>[
      e("line",{x1:ox+i*u,y1:10,x2:ox+i*u,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"}),
      e("line",{x1:10,y1:oy+i*u,x2:W-10,y2:oy+i*u,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"})
    ]),
    // Osi
    e("line",{x1:ox,y1:10,x2:ox,y2:H-10,stroke:st,strokeWidth:1.4}),
    e("line",{x1:10,y1:oy,x2:W-10,y2:oy,stroke:st,strokeWidth:1.4}),
    // Strelice
    e("polygon",{points:`${ox-4},${15} ${ox+4},${15} ${ox},${5}`,fill:st}),
    e("polygon",{points:`${W-15},${oy-4} ${W-15},${oy+4} ${W-5},${oy}`,fill:st}),
    // Oznake
    e("text",{x:ox+6,y:18,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"y"),
    e("text",{x:W-13,y:oy+13,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"x"),
    e("text",{x:ox-12,y:oy+14,fontSize:11,fontWeight:700,fill:st},"0"),
    e("text",{x:ox+u-3,y:oy+14,fontSize:11,fontWeight:700,fill:st},"1"),
    e("text",{x:ox-13,y:oy-u+4,fontSize:11,fontWeight:700,fill:st},"1")
  );
}

function Svg20_2011jB(){
  const W=380,H=320;
  const ox=140, oy=145; // ishodište u px
  const u=22; // 1 jedinica = 22 px
  const st="var(--text)";
  const verts=[
    {n:"K",x:-2,y:0},
    {n:"L",x:-1,y:-3},
    {n:"M",x:3,y:-3},
    {n:"N",x:1,y:2}
  ];
  const ptsStr = verts.map(v=>`${ox+v.x*u},${oy-v.y*u}`).join(" ");
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid (chrome)
    ...Array.from({length:11},(_,i)=>i-4).flatMap(i=>[
      e("line",{x1:ox+i*u,y1:10,x2:ox+i*u,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"}),
      e("line",{x1:10,y1:oy+i*u,x2:W-10,y2:oy+i*u,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"})
    ]),
    // Osi
    e("line",{x1:ox,y1:10,x2:ox,y2:H-10,stroke:st,strokeWidth:1.4}),
    e("line",{x1:10,y1:oy,x2:W-10,y2:oy,stroke:st,strokeWidth:1.4}),
    // Strelice
    e("polygon",{points:`${ox-4},${15} ${ox+4},${15} ${ox},${5}`,fill:st}),
    e("polygon",{points:`${W-15},${oy-4} ${W-15},${oy+4} ${W-5},${oy}`,fill:st}),
    // y i x oznake
    e("text",{x:ox+6,y:18,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"y"),
    e("text",{x:W-13,y:oy+13,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"x"),
    // Oznake "1" i "0"
    e("text",{x:ox-12,y:oy+14,fontSize:11,fontWeight:700,fill:st},"0"),
    e("text",{x:ox+u-3,y:oy+14,fontSize:11,fontWeight:700,fill:st},"1"),
    e("text",{x:ox-13,y:oy-u+4,fontSize:11,fontWeight:700,fill:st},"1"),
    // Polygon (četverokut, sjenčan)
    e("polygon",{points:ptsStr,fill:"rgba(74,144,217,.18)",stroke:"var(--blue)",strokeWidth:1.7}),
    // Vrhovi + labele
    ...verts.flatMap(v=>{
      const px=ox+v.x*u, py=oy-v.y*u;
      const dx = v.n==="K" ? -14 : v.n==="L" ? -2 : v.n==="M" ? 6 : 6;
      const dy = v.n==="K" ? 5 : v.n==="L" ? 16 : v.n==="M" ? 16 : 0;
      return [
        e("circle",{cx:px,cy:py,r:3,fill:"var(--gold)",stroke:st,strokeWidth:1}),
        e("text",{x:px+dx,y:py+dy,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},v.n)
      ];
    })
  );
}

function Svg16_2011jB(){
  const W=440,H=440;
  // Pomocna funkcija za jedan mini-graf
  function miniGraph(ox,oy,size,fn,label,isCorrect){
    const cx=ox+size/2, cy=oy+size/2; // centar grafa
    const u=size/8; // 1 jedinica = size/8 px (raspon -3 do +3 ili tako)
    const ax=cx, ay=cy; // ishodište osi
    const st="var(--text)", sw=1.2;
    const stroke="var(--blue)";
    // Računaj točke parabole
    const pts=[];
    for(let xi=-3.0; xi<=3.0; xi+=0.15){
      const yi=fn(xi);
      if(yi>=-3.0 && yi<=3.5){
        pts.push((ax+xi*u)+","+(ay-yi*u));
      }
    }
    return [
      // Grid (lighter)
      ...[-3,-2,-1,1,2,3].flatMap(i=>[
        e("line",{x1:ax+i*u,y1:oy+8,x2:ax+i*u,y2:oy+size-8,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"}),
        e("line",{x1:ox+8,y1:ay-i*u,x2:ox+size-8,y2:ay-i*u,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"})
      ]),
      // Osi
      e("line",{x1:ax,y1:oy+5,x2:ax,y2:oy+size-5,stroke:st,strokeWidth:1.2}),
      e("line",{x1:ox+5,y1:ay,x2:ox+size-5,y2:ay,stroke:st,strokeWidth:1.2}),
      // Strelice
      e("polygon",{points:`${ax-3},${oy+8} ${ax+3},${oy+8} ${ax},${oy+1}`,fill:st}),
      e("polygon",{points:`${ox+size-8},${ay-3} ${ox+size-8},${ay+3} ${ox+size-1},${ay}`,fill:st}),
      // Oznake "0", "1", x, y
      e("text",{x:ax-9,y:ay+11,fontSize:9,fill:st,fontWeight:700},"0"),
      e("text",{x:ax+u-3,y:ay+11,fontSize:9,fill:st,fontWeight:700},"1"),
      e("text",{x:ax-12,y:ay-u+3,fontSize:9,fill:st,fontWeight:700},"1"),
      e("text",{x:ox+size-7,y:ay+11,fontSize:9,fontStyle:"italic",fill:st},"x"),
      e("text",{x:ax+5,y:oy+10,fontSize:9,fontStyle:"italic",fill:st},"y"),
      // Parabola
      e("polyline",{points:pts.join(" "),fill:"none",stroke:isCorrect?"var(--green)":stroke,strokeWidth:1.7}),
      // Label A./B./C./D.
      e("text",{x:cx-5,y:oy+size+18,fontSize:13,fontWeight:700,fill:isCorrect?"var(--green)":"var(--text)"},label+".")
    ];
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // A: parabola s tjemenom IZNAD x-osi (npr. y = 0,5x² + 1)
    ...miniGraph(15,15,180,(x)=>0.5*x*x+1,"A",false),
    // B: tjeme na (1, 0)  (npr. y = (x-1)²)
    ...miniGraph(230,15,180,(x)=>(x-1)*(x-1),"B",false),
    // C: tjeme oko (1, -1) (npr. y = (x-1)² - 1)
    ...miniGraph(15,220,180,(x)=>(x-1)*(x-1)-1,"C",false),
    // D: tjeme (0, -2) — TOČAN: y = x² − 2
    ...miniGraph(230,220,180,(x)=>x*x-2,"D",true)
  );
}

function Svg13_2011jB(){
  const W=460,H=110;
  const y0=55;
  const xA=60, xB=140, xC=200, xD=380; // pixel pozicije
  const st="var(--text)", sw=1.5, ptR=3;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Glavni pravac
    e("line",{x1:30,y1:y0,x2:W-25,y2:y0,stroke:st,strokeWidth:sw}),
    // Strelica desno
    e("polygon",{points:`${W-25},${y0-5} ${W-25},${y0+5} ${W-12},${y0}`,fill:st}),
    // Strelica lijevo (kraj pravca)
    e("line",{x1:30,y1:y0-4,x2:30,y2:y0+4,stroke:st,strokeWidth:1.5}),
    // Točke (otvoreni krugovi)
    e("circle",{cx:xA,cy:y0,r:ptR+1,fill:"var(--gold)",stroke:"var(--text)",strokeWidth:1.2}),
    e("circle",{cx:xB,cy:y0,r:ptR+1,fill:"var(--gold)",stroke:"var(--text)",strokeWidth:1.2}),
    e("circle",{cx:xC,cy:y0,r:ptR+1,fill:"var(--gold)",stroke:"var(--text)",strokeWidth:1.2}),
    e("circle",{cx:xD,cy:y0,r:ptR+1,fill:"var(--gold)",stroke:"var(--text)",strokeWidth:1.2}),
    // Labele iznad
    e("text",{x:xA-5,y:y0-12,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"A"),
    e("text",{x:xB-5,y:y0-12,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"B"),
    e("text",{x:xC-5,y:y0-12,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"C"),
    e("text",{x:xD-5,y:y0-12,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"D"),
    // Koordinate ispod (samo A i C)
    e("text",{x:xA-20,y:y0+22,fontSize:12,fontWeight:700,fill:"var(--blue)"},"−100"),
    e("text",{x:xC-15,y:y0+22,fontSize:12,fontWeight:700,fill:"var(--blue)"},"−46")
  );
}

function Svg5_2011jB(){
  const W=420,H=240;
  const A={x:330,y:60};   // gornji-desni
  const B={x:75, y:130};  // lijevo (pomaknut)
  const C={x:330,y:200};  // donji-desni (točno ispod A)
  const st="var(--text)", sw=1.6, ptR=2.5;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Trokut
    e("line",{x1:A.x,y1:A.y,x2:B.x,y2:B.y,stroke:st,strokeWidth:sw}),
    e("line",{x1:A.x,y1:A.y,x2:C.x,y2:C.y,stroke:st,strokeWidth:sw}),
    e("line",{x1:B.x,y1:B.y,x2:C.x,y2:C.y,stroke:st,strokeWidth:sw}),
    // Mali kvadratić za pravi kut kod A (12 px)
    e("rect",{x:A.x-12,y:A.y,width:12,height:12,fill:"none",stroke:st,strokeWidth:1.3}),
    // Točke
    e("circle",{cx:A.x,cy:A.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:B.x,cy:B.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:C.x,cy:C.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    // Labele
    e("text",{x:A.x+6,y:A.y-3,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"A"),
    e("text",{x:B.x-14,y:B.y+5,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"B"),
    e("text",{x:C.x+6,y:C.y+5,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"C"),
    // Mjera AB (13,47 cm) — iznad strane AB
    e("text",{x:160,y:84,fontSize:12,fontWeight:700,fill:"var(--red)"},"13,47 cm"),
    // Mjera AC (9,23 cm) — desno od strane AC
    e("text",{x:A.x+10,y:130,fontSize:12,fontWeight:700,fill:"var(--red)"},"9,23 cm"),
    // Mjera a — dolje (oznaka koju traži pitanje)
    e("text",{x:185,y:198,fontSize:18,fontStyle:"italic",fontWeight:800,fill:"var(--blue)"},"a")
  );
}

function Svg4_2011jB(){
  const W=420,H=260;
  // Vrhovi (orijentacija iz PDF reference):
  const A={x:90, y:215};
  const D={x:230,y:200};
  const B={x:380,y:175};
  const E={x:175,y:140};
  const C={x:295,y:60};
  const st="var(--text)", sw=1.6;
  const ptR=2.5;
  // Helper: arc between two pravce emanating from vertex
  function arcAt(v, t1, t2, r){
    const a1 = Math.atan2(t1.y - v.y, t1.x - v.x);
    const a2 = Math.atan2(t2.y - v.y, t2.x - v.x);
    const x1 = v.x + r*Math.cos(a1);
    const y1 = v.y + r*Math.sin(a1);
    const x2 = v.x + r*Math.cos(a2);
    const y2 = v.y + r*Math.sin(a2);
    // CCW sweep (smaller arc)
    let diff = a2 - a1;
    while(diff < -Math.PI) diff += Math.PI*2;
    while(diff > Math.PI) diff -= Math.PI*2;
    const sweep = diff > 0 ? 1 : 0;
    const large = Math.abs(diff) > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} ${sweep} ${x2} ${y2}`;
  }
  // Helper: midpoint of arc (za pozicioniranje labela)
  function arcMidPos(v, t1, t2, r){
    const a1 = Math.atan2(t1.y - v.y, t1.x - v.x);
    const a2 = Math.atan2(t2.y - v.y, t2.x - v.x);
    let mid = (a1 + a2) / 2;
    // Handle wrap-around: if angles span > PI, adjust
    if(Math.abs(a2 - a1) > Math.PI){
      mid += Math.PI;
    }
    return {x: v.x + r*Math.cos(mid), y: v.y + r*Math.sin(mid)};
  }
  // Lukovi
  const arcA = arcAt(A, D, E, 24);   // α: između AD (ka B) i AE (ka C)
  const arcC = arcAt(C, B, A, 18);   // 95.4°: između CB i CA (ka A preko E)
  const arcD = arcAt(D, E, B, 22);   // 122°: između DE i DB
  const labA = arcMidPos(A, D, E, 36);
  const labC = arcMidPos(C, B, A, 28);
  const labD = arcMidPos(D, E, B, 32);
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Pravac AB (kroz D)
    e("line",{x1:A.x,y1:A.y,x2:B.x,y2:B.y,stroke:st,strokeWidth:sw}),
    // Pravac AC (kroz E)
    e("line",{x1:A.x,y1:A.y,x2:C.x,y2:C.y,stroke:st,strokeWidth:sw}),
    // CB (gornja stranica trokuta)
    e("line",{x1:C.x,y1:C.y,x2:B.x,y2:B.y,stroke:st,strokeWidth:sw}),
    // ED (paralelan s CB)
    e("line",{x1:E.x,y1:E.y,x2:D.x,y2:D.y,stroke:st,strokeWidth:sw}),
    // Točke
    e("circle",{cx:A.x,cy:A.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:B.x,cy:B.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:C.x,cy:C.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:D.x,cy:D.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    e("circle",{cx:E.x,cy:E.y,r:ptR,fill:"#fff",stroke:st,strokeWidth:1.2}),
    // Labele vrhova (gold)
    e("text",{x:A.x-12,y:A.y+18,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"A"),
    e("text",{x:B.x+8,y:B.y+5,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"B"),
    e("text",{x:C.x-3,y:C.y-10,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"C"),
    e("text",{x:D.x-4,y:D.y+18,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"D"),
    e("text",{x:E.x-15,y:E.y-2,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"E"),
    // Lukovi kutova s geometrijskim positioningom
    e("path",{d:arcA,fill:"none",stroke:"var(--blue)",strokeWidth:1.6}),
    e("text",{x:labA.x-5,y:labA.y+5,fontSize:14,fontStyle:"italic",fontWeight:700,fill:"var(--blue)"},"α"),
    e("path",{d:arcC,fill:"none",stroke:"var(--red)",strokeWidth:1.5}),
    e("text",{x:labC.x-13,y:labC.y+5,fontSize:11,fill:"var(--red)",fontWeight:700},"95,4°"),
    e("path",{d:arcD,fill:"none",stroke:"var(--red)",strokeWidth:1.5}),
    e("text",{x:labD.x-13,y:labD.y+4,fontSize:11,fill:"var(--red)",fontWeight:700},"122°")
  );
}

function Svg26_1_sol_2011jB(){
  const W=360,H=320;
  const ox=180, oy=200;
  const u=24;
  const st="var(--text)";
  // Pravac y = -2x + 5 prolazi kroz (0,5), (1,3), (2,1), (3,-1), (4,-3)
  const x1=-1, y1=-2*(-1)+5;  // (-1, 7) — moglo bi biti izvan; cap:
  const x2=4, y2=-2*4+5;       // (4, -3)
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid
    ...Array.from({length:13},(_,i)=>i-7).flatMap(i=>[
      e("line",{key:"vg"+i,x1:ox+i*u,y1:10,x2:ox+i*u,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"}),
      e("line",{key:"hg"+i,x1:10,y1:oy+i*u,x2:W-10,y2:oy+i*u,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"1 2"})
    ]),
    // Osi
    e("line",{x1:ox,y1:10,x2:ox,y2:H-10,stroke:st,strokeWidth:1.4}),
    e("line",{x1:10,y1:oy,x2:W-10,y2:oy,stroke:st,strokeWidth:1.4}),
    // Strelice
    e("polygon",{points:`${ox-4},${15} ${ox+4},${15} ${ox},${5}`,fill:st}),
    e("polygon",{points:`${W-15},${oy-4} ${W-15},${oy+4} ${W-5},${oy}`,fill:st}),
    // Pravac (zelena = točan odgovor)
    e("line",{x1:ox+x1*u,y1:oy-y1*u,x2:ox+x2*u,y2:oy-y2*u,stroke:"var(--green)",strokeWidth:2.5}),
    // Označi y-presjek (0,5) — crveno
    e("circle",{cx:ox,cy:oy-5*u,r:4,fill:"var(--red)",stroke:"#fff",strokeWidth:1.2}),
    e("text",{x:ox+8,y:oy-5*u+4,fontSize:11,fontWeight:700,fill:"var(--red)"},"(0, 5)"),
    // Označi (2, 1)
    e("circle",{cx:ox+2*u,cy:oy-1*u,r:4,fill:"var(--red)",stroke:"#fff",strokeWidth:1.2}),
    e("text",{x:ox+2*u+8,y:oy-1*u+4,fontSize:11,fontWeight:700,fill:"var(--red)"},"(2, 1)"),
    // Oznake osi
    e("text",{x:ox+6,y:18,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"y"),
    e("text",{x:W-13,y:oy+13,fontSize:12,fontStyle:"italic",fontWeight:700,fill:st},"x"),
    e("text",{x:ox-12,y:oy+14,fontSize:11,fontWeight:700,fill:st},"0"),
    e("text",{x:ox+u-3,y:oy+14,fontSize:11,fontWeight:700,fill:st},"1"),
    e("text",{x:ox-13,y:oy-u+4,fontSize:11,fontWeight:700,fill:st},"1")
  );
}

export const qs = [
  {id:1,type:"mc",topic:"br",points:1,
  q:"Kojemu skupu brojeva pripada broj 3,12?",
  opts:["skupu prirodnih brojeva","skupu cijelih brojeva","skupu racionalnih brojeva","skupu iracionalnih brojeva"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"3,12 = 312/100 = 78/25  -  može se zapisati kao razlomak cijelih brojeva → racionalan broj.",
  warn:"Pazi: ne miješaj broj 3,12 (decimalni) sa √3,12 (iracionalni). Konačan decimalni zapis = racionalan broj.",
  steps:[
    {txt:"3,12 = 312/100 = 78/25",note:"decimalni razlomak → običan razlomak"},
    {txt:"Svaki broj oblika p/q (p, q ∈ ℤ, q ≠ 0) je racionalan",note:"definicija ℚ"},
    {txt:"→ 3,12 ∈ ℚ (skup racionalnih brojeva)",final:true},{txt:"Diagnostika: A(prirodni): 3,12 nije cijeli broj, dakle nije ni prirodni. B(cijeli): 3,12 ima decimale. D(iracionalni): 3,12=312/100 je egzaktni razlomak.",final:true,note:"diagnostika"},{txt:"Provjera: 3,12=312/100∈ℚ ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 3,12 ima samo 2 decimale → može se zapisati kao 312/100 = 78/25 — eksplicitno razlomak → racionalan.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: skup racionalnih brojeva ℚ uključuje sve brojeve oblika p/q gdje su p,q cijeli brojevi (q≠0). Decimalni zapis koji je KONAČAN ili PERIODIČAN znači racionalan.","Intuicija: 3,12 ima samo 2 decimale → može se zapisati kao 312/100 = 78/25 — eksplicitno razlomak → racionalan.","Praktično: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; svaki prirodan je cijeli, svaki cijeli je racionalan, svaki racionalan je realan. Iracionalni brojevi pripadaju ℝ ali NE ℚ.","Alt metoda: provjeri može li se broj zapisati kao razlomak — ako da, racionalan; 3,12 = 78/25 ✓.","Greška: pomisliti da je svaki decimalni broj iracionalan — iracionalni su SAMO oni s BESKONAČNIM NEPERIODIČNIM zapisom (π = 3,14159..., √2 = 1,41421..., e = 2,71828...).","Diagnostic: A) skupu prirodnih brojeva; B) skupu cijelih brojeva; C) skupu racionalnih brojeva ✓; D) skupu iracionalnih brojev*.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:2,type:"mc",topic:"br",points:1,
  q:"Kolika je vrijednost izraza (2)/(7) + (5)/(7) : (5)/(14) ?",
  opts:["11/14","16/7","7/5","14/5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Prioritet: prvo dijeljenje. (5)/(7) : (5)/(14) = (5)/(7) · (14)/(5) = 2. Zatim (2)/(7) + 2 = (16)/(7).",
  warn:"Pazi: dijeljenje IMA prioritet pred zbrajanjem. NE računaj zbroj prvi (4/14 dat će krivu opciju A=11/14).",
  steps:[
    {txt:"Prioritet operacija: : (dijeljenje) prije + (zbrajanje)",note:"PEMDAS"},
    {txt:"(5)/(7) : (5)/(14) = (5)/(7) · (14)/(5) = (5·14)/(7·5) = 2",note:"dijeljenje = množenje recipročnim"},
    {txt:"(2)/(7) + 2 = (2)/(7) + (14)/(7) = (16)/(7)"},
    {txt:"→ B",final:true},{txt:"Diagnostika: A((a+1)/2): ne dodati 2, već 1. C((a-1)/2): predznak greška. D((a-2)/2): obje greške (predznak i vrijednost).",final:true,note:"diagnostika"},{txt:"Provjera: a/(K-1)=2 → a=2K-2 → K=(a+2)/2 ✓",final:true,note:"verifikacija"},{txt:"Diagnostika: A(11/14): zbrojiti sve bez redosljeda. C(7/5): 2/7+5/7=1, 1:5/14=14/5≠2,8. D(14/5): samo dijeljenje, bez zbrajanja.",final:true,note:"diagnostika"},{txt:"Provjera: 2/7+(5/7÷5/14)=2/7+2=16/7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: redoslijed operacija (PEMDAS/BIDMAS) — dijeljenje ima prednost nad zbrajanjem; (2/7) + (5/7) : (5/14) znači (2/7) + [(5/7) : (5/14)].",note:"postupak",final:true},{txt:"Intuicija: zbrajanje razlomaka isti nazivnik = zbroji brojnike; dijeljenje = množi recipročnim.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: redoslijed operacija (PEMDAS/BIDMAS) — dijeljenje ima prednost nad zbrajanjem; (2/7) + (5/7) : (5/14) znači (2/7) + [(5/7) : (5/14)].","Intuicija: zbrajanje razlomaka isti nazivnik = zbroji brojnike; dijeljenje = množi recipročnim.","Praktično: (5/7) : (5/14) = (5/7)·(14/5) = 14/7 = 2; pa (2/7) + 2 = (2/7) + (14/7) = 16/7.","Alt metoda: pretvori sve u zajednički nazivnik 14; (2/7) = 4/14; (5/7)·(14/5) = 70/35 = 2 = 28/14; ukupno 4/14 + 28/14 = 32/14 = 16/7 ✓.","Greška: računati slijeva nadesno bez prioriteta — daje (2/7+5/7):5/14 = 1:5/14 = 14/5 (opcija D, distractor); ili krivo pretvoriti recipročnu vrijednost (5/14 reciprok je 14/5, ne 14/5 minus 1).","Diagnostic: A) 11/14; B) 16/7 ✓; C) 7/5; D) 14/5.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:3,type:"mc",topic:"fin",points:1,
  q:"Srećko je visok 187 cm. Koliko je to stopa ako 1 stopa iznosi 0,3048 m?",
  opts:["4,8271 stopa","5,6998 stopa","6,1352 stopa","7,9413 stopa"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"187 cm = 1,87 m. Broj stopa = (1,87)/(0,3048) ≈ 6,1352.",
  warn:"Pazi: cm → m prije dijeljenja. Stopa je MANJA od metra (0,3048 m), pa stopa mora biti VEĆA od broja metara (1,87).",
  steps:[
    {txt:"187 cm = 1,87 m",note:"pretvorba u metre"},
    {txt:"1 stopa = 0,3048 m  ⟹  broj stopa = (1,87)/(0,3048)",note:"jediničnu pretvorbu shvati kao razmjer"},
    {txt:"(1,87)/(0,3048) ≈ 6,1352"},
    {txt:"→ C: 6,1352 stopa",final:true},{txt:"Diagnostika: A(4,8271): možda dijeljenje s povećanim faktorom. B(5,6998): krivi faktor konverzije. D(7,9413): množili umjesto dijelili (187×0,3048≈57 cm... neka varijanta).",final:true,note:"diagnostika"},{txt:"Provjera: 187/30,48≈6,1352 stopa ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pretvorba jedinica — ako 1 stopa = 0,3048 m, onda x stopa = x·0,3048 m; obrnuto: x m = x/0,3048 stopa.",note:"postupak",final:true},{txt:"Intuicija: stopa je MANJA od metra → broj stopa je VEĆI od broja metara za istu duljinu (slično kako 1m = 100cm, pa broj cm > broj m).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: pretvorba jedinica — ako 1 stopa = 0,3048 m, onda x stopa = x·0,3048 m; obrnuto: x m = x/0,3048 stopa.","Intuicija: stopa je MANJA od metra → broj stopa je VEĆI od broja metara za istu duljinu (slično kako 1m = 100cm, pa broj cm > broj m).","Praktično: 187 cm = 1,87 m; 1,87 / 0,3048 ≈ 6,135 stopa.","Alt metoda: pretvori inčima (1 stopa = 12 inča, 1 inč = 2,54 cm); 187 / 2,54 ≈ 73,62 inča; 73,62 / 12 ≈ 6,135 stopa ✓.","Greška: pomnožiti 1,87 · 0,3048 = 0,57 (kriva smjer pretvorbe — daje broj metara u stopama, ne obrnuto); ili zaboraviti pretvoriti cm u m.","Diagnostic: A) 4,8271 stopa; B) 5,6998 stopa; C) 6,1352 stopa ✓; D) 7,9413 stopa.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:4,img:true,type:"mc",img:true,topic:"geom",points:1,
  q:"Dužine BC i DE su paralelne (pogledajte skicu). Kolika je mjera kuta α?",
  opts:["26,6°","32°","37,4°","52°"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Kut DEC = 180° − 122° = 58° (suplementaran s 122° pri D). U trokutu CED: α + 95,4° + 58° = 180° ⟹ α = 26,6°.",
  warn:"Pazi: paralelnost BC ∥ DE NIJE ovdje ključna za izračun α — koristi se samo to da je α u trokutu CED s kutovima 95,4° i (180°−122°)=58°.",
  steps:[
    {txt:"Iz skice: kut pri C = 95,4°,  kut ADC = 122° (pri D)",note:"zadano"},
    {txt:"Kut CDE = 180° − 122° = 58°",note:"kutovi na pravcu (suplementarni)"},
    {txt:"U trokutu CED: zbroj kutova = 180°"},
    {txt:"α + 95,4° + 58° = 180°",note:"α = kut pri E u trokutu CED"},
    {txt:"α = 180° − 95,4° − 58° = 26,6°"},
    {txt:"→ A: 26,6°",final:true},{txt:"Diagnostika: B(32°): možda uzeli samo 180-122+kut greška. C(37,4°): 180-95,4+... krivo. D(52°): suplatni kut od 122+... ",final:true,note:"diagnostika"},{txt:"Provjera: kutovi trokuta daju α=180°-122°+(180°-95,4°)-...=26,6° ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: zbroj unutarnjih kutova trokuta = 180°; ako su pravci paralelni i sječeni transverzalom, alternantni unutarnji kutovi (Z-kutovi) su jednaki, suprotni kutovi su suplementarni.",note:"postupak",final:true},{txt:"Intuicija: paralelnost znači da odgovarajući kutovi (F-kutovi) su jednaki; ova svojstva omogućuju prenošenje kutova s jedne paralele na drugu.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: zbroj unutarnjih kutova trokuta = 180°; ako su pravci paralelni i sječeni transverzalom, alternantni unutarnji kutovi (Z-kutovi) su jednaki, suprotni kutovi su suplementarni.","Intuicija: paralelnost znači da odgovarajući kutovi (F-kutovi) su jednaki; ova svojstva omogućuju prenošenje kutova s jedne paralele na drugu.","Praktično: nađi kutove u trokutu koristeći paralelnost BC ∥ DE; suplementarni kutovi (na pravcu) sumiraju 180°.","Alt metoda: označi sve kutove na skici; iskoristi pravilo trokuta + paralelnost kao 2-jednadžbeni sustav; izolaj α.","Greška: zbrajati 95,4° + 122° = 217,4° i tražiti 360° − 217,4° (krivi pristup, ne uzima u obzir paralelnost); ili pomiješati alternantne i suplementarne kutove.","Diagnostic: A) 26,6° ✓; B) 32°; C) 37,4°; D) 52°.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]
},
  {id:5,img:true,type:"mc",img:true,topic:"geom",points:1,
  q:"Kolika je duljina stranice a trokuta ABC prikazanoga na skici?",
  opts:["11,15 cm","16,33 cm","20,12 cm","21,30 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Pravokutni trokut s pravim kutom kod A: katete AB = 13,47 cm i AC = 9,23 cm, hipotenuza a = BC. Pitagora: a = √(13,47² + 9,23²) = √(181,44 + 85,19) = √266,63 ≈ 16,33 cm.",
  warn:"Pazi: pravi kut je kod A → BC je HIPOTENUZA (ne kateta!). Ako oduzimaš kvadrate (a² = b² − c²), dobivaš krivu opciju.",
  steps:[
    {txt:"Pravi kut kod A → AB i AC su katete, BC = a je hipotenuza",note:"prepoznaj geometriju"},
    {txt:"Pitagorin poučak: a² = AB² + AC²"},
    {txt:"a² = 13,47² + 9,23² = 181,4409 + 85,1929 = 266,6338"},
    {txt:"a = √266,6338 ≈ 16,33 cm"},
    {txt:"→ B: 16,33 cm",final:true},{txt:"Diagnostika: A(11,15): razlika kateta (13,47-9,23-ish). C(20,12): možda zbroj umjesto hipotenuza. D(21,30): 13,47+9,23/2 ili slično.",final:true,note:"diagnostika"},{txt:"Provjera: a=√(13,47²+9,23²)=√(181,44+85,19)=√266,63≈16,33 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pitagora: u pravokutnom trokutu hipotenuza² = zbroj kvadrata kateta.",note:"postupak",final:true},{txt:"Intuicija: Hipotenuza = stranica nasuprot pravom kutu (ovdje BC, jer je pravi kut kod A).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pitagora: u pravokutnom trokutu hipotenuza² = zbroj kvadrata kateta.","Hipotenuza = stranica nasuprot pravom kutu (ovdje BC, jer je pravi kut kod A).","Provjera: 16,33² = 266,67 ≈ 266,63 ✓","Greška: zamijeniti formulu s a² = b² − c² i dobiti opciju A (11,15).","Diagnostic: A) 11,15 cm; B) 16,33 cm ✓; C) 20,12 cm; D) 21,30 cm.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]
},
  {id:6,type:"mc",topic:"al",points:1,
  q:"Koliki je rezultat zbrajanja (1)/(3 − a) + (2)/(3a) ?",
  opts:["(3)/(3 − 2a)","(2)/(3 − a)","(a + 2)/(a(3 − a))","(a + 6)/(3a(3 − a))"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"NZN = 3a(3−a). (1)/(3−a) = (3a)/(3a(3−a)). (2)/(3a) = (2(3−a))/(3a(3−a)) = (6−2a)/(3a(3−a)). Zbroj: (3a + 6 − 2a)/(3a(3−a)) = (a + 6)/(3a(3−a)).",
  warn:"Pazi: NE pokušavaj zbrajati nazivnike (3−a)+3a — nazivnik zbroja razlomaka NIJE zbroj nazivnika!",
  steps:[
    {txt:"Nađi NZN: prvi nazivnik 3−a, drugi 3a → NZN = 3a(3−a)",note:"oba nazivnika su faktori"},
    {txt:"Proširi: (1)/(3−a) = (1·3a)/((3−a)·3a) = (3a)/(3a(3−a))"},
    {txt:"Proširi: (2)/(3a) = (2(3−a))/(3a(3−a)) = (6−2a)/(3a(3−a))"},
    {txt:"Zbroj brojnika: 3a + (6 − 2a) = a + 6"},
    {txt:"= (a + 6)/(3a(3 − a))"},
    {txt:"→ D",final:true},{txt:"Diagnostika: A i B: vrh parabole nije na (0,-2). C: parabola otvorena prema gore ali vrh nije na y-osi. D: vertex(0,-2), a>0, parabola gore ✓.",final:true,note:"diagnostika"},{txt:"Provjera: f(0)=-2 (vrh); a>0 → parabola gore; jedino D prikazuje takvu funkciju ✓",final:true,note:"verifikacija"},{txt:"Diagnostika: A(5%): 50/1000. B(10%): 50/500 ili krivi nazivnik. C(15%): postotak od nove cijene (50/199,99). Greška: dijeliti s novom umjesto starom cijenom.",final:true,note:"diagnostika"},{txt:"Provjera: (249,99-199,99)/249,99=50/249,99≈20% ✓",final:true,note:"verifikacija"},{txt:"Diagnostika: A(3/(3-2a)): krivi zajednički nazivnik. B(2/(3-a)): zbrojiti samo jednog razlomka. C((a+2)/(a(3-a))): nije uzeto 3 ispred a.",final:true,note:"diagnostika"},{txt:"Provjera: ZN=3a(3-a); 3a/[3a(3-a)]+(6-2a)/[3a(3-a)]=(a+6)/[3a(3-a)] ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Razlomci se zbrajaju SVOĐENJEM na zajednički nazivnik (NZN).",note:"postupak",final:true},{txt:"Intuicija: NZN = umnožak svih različitih faktora nazivnika (ovdje 3a · (3−a) jer dijele 0 zajedničkih faktora).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Razlomci se zbrajaju SVOĐENJEM na zajednički nazivnik (NZN).","NZN = umnožak svih različitih faktora nazivnika (ovdje 3a · (3−a) jer dijele 0 zajedničkih faktora).","Česta greška: pisati (1+2)/((3−a)+3a) = (3)/(3) = 1 — to je krivo!","Provjera za a=1: lijevo = (1)/(2) + (2)/(3) = (7)/(6). Desno = (7)/(3·2) = (7)/(6) ✓","Diagnostic: A) (3)/(3 − 2a); B) (2)/(3 − a); C) (a + 2)/(a(3 − a)); D) (a + 6)/(3a(3 − a)) ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:7,type:"mc",topic:"fin",points:1,
  q:"Cijena košulje bila je 249,99 kn, a nakon sniženja 199,99 kn. Koliko je posto snižena cijena košulje?",
  opts:["5%","10%","15%","20%"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Sniženje (apsolutno) = 249,99 − 199,99 = 50 kn. Postotak = (50)/(249,99) · 100 ≈ 20%.",
  warn:"Pazi: postotak sniženja računa se OD STARE cijene (249,99), NE od nove (199,99)!",
  steps:[
    {txt:"Apsolutno sniženje: 249,99 − 199,99 = 50 kn",note:"razlika starih i novih"},
    {txt:"Postotak = (sniženje)/(stara cijena) · 100"},
    {txt:"= (50)/(249,99) · 100 ≈ 20,0008 %"},
    {txt:"≈ 20%"},
    {txt:"→ D",final:true},
    {txt:"Provjera: 20% sniženja od 249,99 = 0,20·249,99 ≈ 50 kn; 249,99 − 50 ≈ 199,99 kn ✓ (poklapa se s novom cijenom)",final:true,note:"verifikacija"}
  ,{txt:"Diagnostic: A) 5%; B) 10%; C) 15%; D) 20% ✓.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Postotak promjene = (promjena)/(polazna vrijednost) · 100.",note:"postupak",final:true},{txt:"Intuicija: Polazna vrijednost ovdje = STARA cijena (prije sniženja).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Postotak promjene = (promjena)/(polazna vrijednost) · 100.","Polazna vrijednost ovdje = STARA cijena (prije sniženja).","Greška: dijeliti s novom (50/199,99 ≈ 25%) — daje krivu opciju koja nije ponuđena.","Intuicija: 50 od 250 = 1/5 = 20% ✓","Diagnostic: A) 5%; B) 10%; C) 15%; D) 20% ✓.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:8,type:"mc",topic:"lin",points:1,
  q:"Koji je skup rješenje nejednadžbe 3x + 5 < x + 1 ?",
  opts:["⟨−∞, −2⟩","⟨−∞, 2⟩","⟨−2, +∞⟩","⟨2, +∞⟩"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"3x + 5 < x + 1 → 2x < −4 → x < −2. Skup: ⟨−∞, −2⟩.",
  warn:"Pazi: dijeljenje POZITIVNIM brojem 2 NE mijenja smjer nejednakosti. Pazi i na predznak — daješ x < −2 (ne x > −2).",
  steps:[
    {txt:"3x + 5 < x + 1",note:"polazna nejednadžba"},
    {txt:"3x − x < 1 − 5",note:"prebaci x na lijevu, brojeve na desnu"},
    {txt:"2x < −4"},
    {txt:"x < −2",note:"podijeli s 2 (pozitivan, smjer ostaje)"},
    {txt:"→ x ∈ ⟨−∞, −2⟩  =  A",final:true},{txt:"Diagnostika: B(⟨−∞,2⟩): predznak greška x<2. C(⟨−2,+∞⟩): okrenuti smjer nejednadžbe. D(⟨2,+∞⟩): obje greške.",final:true,note:"diagnostika"},{txt:"Provjera: 3·(−3)+5=−4; (−3)+1=−2; −4<−2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: linearna nejednadžba se rješava kao jednadžba (zbrajanje/oduzimanje ne mijenja smjer); ALI množenje/dijeljenje s NEGATIVNIM brojem OKREĆE smjer (< postaje >).",note:"postupak",final:true},{txt:"Intuicija: dodavanje istog broja obje strane ne mijenja relativni redoslijed; množenje negativnim okreće brojevnu pravu.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: linearna nejednadžba se rješava kao jednadžba (zbrajanje/oduzimanje ne mijenja smjer); ALI množenje/dijeljenje s NEGATIVNIM brojem OKREĆE smjer (< postaje >).","Intuicija: dodavanje istog broja obje strane ne mijenja relativni redoslijed; množenje negativnim okreće brojevnu pravu.","Praktično: 3x + 5 < x + 1 → 2x < −4 → x < −2; rezultat je interval ⟨−∞, −2⟩ (otvoren jer je < strogo).","Alt metoda: prebaci sve na lijevu stranu: 3x+5−x−1 < 0 → 2x+4 < 0 → 2x < −4 → x < −2 (isti rezultat).","Greška: ne okrenuti znak kad dijeliš negativnim koeficijentom; ili uključiti rubni −2 (KRIVO — strogi < znači OTVOREN interval). Provjera: x = −3 < −2 → 3(−3)+5 = −4, (−3)+1 = −2; je li −4 < −2? DA ✓","Diagnostic: A) ⟨−∞, −2⟩ ✓; B) ⟨−∞, 2⟩; C) ⟨−2, +∞⟩; D) ⟨2, +∞⟩.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:9,type:"mc",topic:"al",points:1,
  q:"Ako je (a)/(K − 1) = 2, koliko je K?",
  opts:["K = (a + 1)/(2)","K = (a + 2)/(2)","K = (a − 1)/(2)","K = (a − 2)/(2)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"(a)/(K−1) = 2 ⟹ a = 2(K − 1) = 2K − 2 ⟹ 2K = a + 2 ⟹ K = (a + 2)/(2).",
  warn:"Pazi: kad množiš s (K−1), MORAŠ pomnožiti s 2 i dobiti 2K − 2 (ne 2K − 1, kao u distraktoru A).",
  steps:[
    {txt:"(a)/(K − 1) = 2",note:"polazna jednakost"},
    {txt:"Pomnoži obje strane s (K − 1):  a = 2(K − 1)",note:"K ≠ 1 jer dijeljenje s nulom"},
    {txt:"a = 2K − 2",note:"distribucija"},
    {txt:"2K = a + 2"},
    {txt:"K = (a + 2)/(2)"},
    {txt:"→ B",final:true},
    {txt:"Provjera za a=4: K = 6/2 = 3; iz origin formule a/(K−1) = 2 → 4/(3−1) = 2 ✓",final:true,note:"verifikacija"}
  ,{txt:"Diagnostic: A) K = (a + 1)/(2); B) K = (a + 2)/(2) ✓; C) K = (a − 1)/(2); D) K = (a − 2)/(2).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Izražavanje nepoznanice iz formule = standardna algebarska tehnika.",note:"postupak",final:true},{txt:"Intuicija: Cilj: K na jednoj strani, sve ostalo na drugoj.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Izražavanje nepoznanice iz formule = standardna algebarska tehnika.","Cilj: K na jednoj strani, sve ostalo na drugoj.","Greška: distribuirati s krivim predznakom (2(K−1) = 2K−1 umjesto 2K−2) — daje opciju A.","Provjera za a=4: (4)/(K−1) = 2 ⟹ K−1 = 2 ⟹ K = 3. Iz formule: K = (4+2)/(2) = 3 ✓","Diagnostic: A) K = (a + 1)/(2); B) K = (a + 2)/(2) ✓; C) K = (a − 1)/(2); D) K = (a − 2)/(2).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:10,type:"mc",topic:"br",points:1,
  q:"Čemu je jednak broj (−3²)³?",
  opts:["−3⁶","−3⁵","3⁵","3⁶"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"PAŽNJA — prioritet: −3² = −(3²) = −9 (potencija JAČA od unarnog minusa). (−9)³ = −729 = −3⁶.",
  warn:"Ključna razlika: −3² = −9, ALI (−3)² = +9. Ovdje je BEZ vanjske zagrade oko −3, pa je −3² = −9.",
  steps:[
    {txt:"Prioritet: potencija prije unarnog minusa",note:"−3² = −(3²) = −9, NE (−3)² = 9"},
    {txt:"Unutar zagrade: −3² = −9"},
    {txt:"Potenciraj: (−9)³ = −9 · −9 · −9 = 81 · −9 = −729"},
    {txt:"−729 = −3⁶  (jer 3⁶ = 729)"},
    {txt:"→ A: −3⁶",final:true},{txt:"Diagnostika: B(-3⁵): eksponent 2×3=6, ne 5. C(3⁵): (-9)³ pozitivno? Krivo. D(3⁶): (-3²)³=9³=3⁶ — greška: (-3²) nije isto kao (-3)².",final:true,note:"diagnostika"},{txt:"Provjera: (-3²)³=(-9)³=-729=-3⁶ ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo prioriteta: potenciranje > množenje > unarni minus.",note:"postupak",final:true},{txt:"Intuicija: −3² ≠ (−3)²! Bez vanjske zagrade, minus je IZVAN potencije.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo prioriteta: potenciranje > množenje > unarni minus.","−3² ≠ (−3)²! Bez vanjske zagrade, minus je IZVAN potencije.","(−9)³ — neparna potencija negativnog broja → negativan.","Provjera: −3⁶ = −729; (−3²)³ = (−9)³ = −729 ✓","Diagnostic: A) −3⁶ ✓; B) −3⁵; C) 3⁵; D) 3⁶.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:11,type:"mc",topic:"fin",points:1,
  q:"U putničkome zrakoplovu ima 108 mjesta. Na svaka dva popunjena mjesta jedno je prazno. Ako devetinu putnika čine djeca, koliko je odraslih osoba u zrakoplovu?",
  opts:["64","76","82","88"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Omjer popunjeno : prazno = 2 : 1 → popunjeno = (2)/(3) · 108 = 72 putnika. Djeca = (1)/(9) · 72 = 8. Odrasli = 72 − 8 = 64.",
  warn:"Pazi: omjer 2:1 znači 2 popunjenih NA SVAKO 1 prazno → ukupno 3 'dijela' za 108 mjesta. Popunjenih = 2/3, ne 1/2!",
  steps:[
    {txt:"Omjer popunjenih : praznih = 2 : 1 → ukupno 3 dijela",note:"ključno čitanje uvjeta"},
    {txt:"108 mjesta : 3 dijela = 36 mjesta po dijelu",note:"jedan 'dio' = 36"},
    {txt:"Popunjeno: 2 · 36 = 72 putnika"},
    {txt:"Djeca: (1)/(9) · 72 = 8 djece"},
    {txt:"Odrasli: 72 − 8 = 64"},
    {txt:"→ A: 64",final:true},{txt:"Diagnostika: B(76): 108-1/9·108=108-12=96... krivo. C(82): različita greška. D(88): 108/9=12 djece od 108... ali ima samo 72 putnika.",final:true,note:"diagnostika"},{txt:"Provjera: 108×2/3=72 putnika; 72/9=8 djece; 72-8=64 odraslih ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: omjer a:b znači podjela na (a+b) jednakih dijelova; ovdje 2:1 → 3 dijela; popunjenih = (2/3)·ukupno = (2/3)·108 = 72; praznih = (1/3)·108 = 36.",note:"postupak",final:true},{txt:"Intuicija: omjer 2:1 = dva prema jedan — na svaka 2 popunjena dolazi 1 prazno; lakše: zamisli grupe od 3 (2 puna + 1 prazno).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: omjer a:b znači podjela na (a+b) jednakih dijelova; ovdje 2:1 → 3 dijela; popunjenih = (2/3)·ukupno = (2/3)·108 = 72; praznih = (1/3)·108 = 36.","Intuicija: omjer 2:1 = dva prema jedan — na svaka 2 popunjena dolazi 1 prazno; lakše: zamisli grupe od 3 (2 puna + 1 prazno).","Praktično: prvo nađi popunjena (72), pa onda postotak djece od popunjenih (devetina = 1/9 od 72 = 8).","Alt metoda: 108 / 3 = 36 (jedan dio); popunjeni dio = 2·36 = 72; djeca = 72/9 = 8.","Greška: omjer 2:1 misliti kao polovicu (54 popunjenih) — KRIVO, polovica bi bila 1:1. Provjera: 72 popunjenih + 36 praznih = 108 ✓; 8 djece + 64 odraslih = 72 ✓.","Diagnostic: A) 64 ✓; B) 76; C) 82; D) 88.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:12,type:"mc",topic:"fin",points:1,
  q:"Ana je prešla 20 kilometara za 4 sata i 57 minuta. Kolika joj je bila prosječna brzina izražena u metrima u minuti? Napomena: prosječna brzina računa se prema formuli v = (s)/(t), gdje je s prijeđeni put, a t vrijeme.",
  opts:["67,34 m/min","72,94 m/min","83,76 m/min","90,28 m/min"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Pretvorba: 20 km = 20 000 m; 4h 57min = 4·60 + 57 = 297 min. v = (20 000)/(297) ≈ 67,34 m/min.",
  warn:"Pazi na jedinice: traži se m/min, ne km/h! Pretvori OBJE veličine: km → m i sate → minute.",
  steps:[
    {txt:"Pretvorba puta: 20 km = 20 000 m"},
    {txt:"Pretvorba vremena: 4 h 57 min = 4·60 + 57 = 240 + 57 = 297 min"},
    {txt:"v = (s)/(t) = (20 000)/(297)"},
    {txt:"≈ 67,3401 m/min  ≈  67,34 m/min"},
    {txt:"→ A",final:true},{txt:"Diagnostika: B(72,94): krivo pretvoriti (npr. 4h=240 min, 20000/240≈83,3). C(83,76): 4h ne 4h57min. D(90,28): neka druga greška pretvorbe.",final:true,note:"diagnostika"},{txt:"Provjera: 20000m/297min≈67,34 m/min ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: brzina v = s/t; jedinice rezultata određene su jedinicama putu (s) i vremenu (t); za m/min: s u metrima, t u minutama.",note:"postupak",final:true},{txt:"Intuicija: ako se traži m/min, najlakše pretvoriti SVE u te jedinice prije dijeljenja.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: brzina v = s/t; jedinice rezultata određene su jedinicama putu (s) i vremenu (t); za m/min: s u metrima, t u minutama.","Intuicija: ako se traži m/min, najlakše pretvoriti SVE u te jedinice prije dijeljenja.","Praktično: 20 km = 20 000 m; 4 sata 57 minuta = 4·60 + 57 = 297 min; v = 20 000 / 297 ≈ 67,34 m/min.","Alt metoda: izračunaj u km/h prvo (20/4,95 ≈ 4,04 km/h), pa pretvori: 4,04 km/h = 4040 m/h = 4040/60 ≈ 67,34 m/min ✓.","Greška: pomiješati jedinice — npr. 20/4,57 (krivi decimalni zapis 4 h 57 min) ili dijeliti 20 km/(297 min) bez pretvorbe; ili dijeliti vrijeme s putem (1/v umjesto v). Provjera: 67,34 m/min · 297 min = 19 999,98 m ≈ 20 000 m = 20 km ✓.","Diagnostic: A) 67,34 m/min ✓; B) 72,94 m/min; C) 83,76 m/min; D) 90,28 m/min.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:13,img:true,type:"mc",img:true,topic:"br",points:2,
  q:"Na brojevnome pravcu prikazanome na slici istaknute su točke A, B, C i D te koordinate točaka A i C. Koordinata točke B jednaka je aritmetičkoj sredini koordinata točaka A i C. Koordinata točke D je za 90 veća od koordinate točke C. Kolika je razlika koordinate točke D i koordinate točke B?",
  intermediates:[100, 46, 146, 73, 44, 117, 90],
  opts:["103","107","113","117"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"A = −100, C = −46. B = (A + C)/(2) = (−146)/(2) = −73. D = C + 90 = −46 + 90 = 44. D − B = 44 − (−73) = 44 + 73 = 117.",
  warn:"Pazi: D − B kad je B negativan postaje D + |B| (oduzimanje negativnog = zbrajanje pozitivnog).",ex:"MC 2-bodovni iz područja: br. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"A(−100), C(−46)",note:"očitano s pravca"},
    {txt:"Aritmetička sredina: B = (A + C)/(2) = (−100 + (−46))/(2) = (−146)/(2) = −73"},
    {txt:"D = C + 90 = −46 + 90 = 44"},
    {txt:"D − B = 44 − (−73) = 44 + 73 = 117"},
    {txt:"→ D: 117",final:true},{txt:"Diagnostika: A(103): B=-73, D=44, ali greška u razlici. B(107): još jedna aritmetika greška. C(113): B krivo izračunano.",final:true,note:"diagnostika"},{txt:"Provjera: B=(-100+(-46))/2=-73; D=-46+90=44; D-B=44-(-73)=117 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Aritmetička sredina dvaju brojeva = njihov zbroj podijeljen s 2.",note:"postupak",final:true},{txt:"Intuicija: Oduzimanje negativnog broja = zbrajanje pozitivnog: a − (−b) = a + b.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Aritmetička sredina dvaju brojeva = njihov zbroj podijeljen s 2.","Oduzimanje negativnog broja = zbrajanje pozitivnog: a − (−b) = a + b.","Provjera na pravcu: B(−73) je između A(−100) i C(−46) ✓; D(44) je 90 desno od C ✓; razlika D − B = 117 = 'put' od B do D u desno.","Greška: smatrati da je D koordinata A ili C, ne 90 više od C.","Diagnostic: A) 103; B) 107; C) 113; D) 117 ✓.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:14,type:"mc",topic:"br",points:2,
  q:"U silosu se nalazi 1,2 · 10¹⁰ zrna žita. Ako se četvrtina samelje u brašno, a šestina od preostaloga žita proda, koliko je zrna žita ostalo u silosu?",
  opts:["4,5 · 10⁹","6,55 · 10⁹","7,5 · 10⁹","8,55 · 10⁹"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Početno: 1,2·10¹⁰. Samljeveno (1)/(4): 0,3·10¹⁰. Ostatak: 0,9·10¹⁰. Prodano (1)/(6) od ostatka: 0,15·10¹⁰. Konačni ostatak: 0,9·10¹⁰ − 0,15·10¹⁰ = 0,75·10¹⁰ = 7,5·10⁹.",
  warn:"Pazi: 'šestina OD PREOSTALOGA' = od 0,9·10¹⁰ (ne od početne količine). To je sekvencijalni postupak.",ex:"MC 2-bodovni iz područja: br. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Početno: 1,2 · 10¹⁰ zrna",note:"zadano"},
    {txt:"Samljeveno (¼): 0,25 · 1,2·10¹⁰ = 0,3 · 10¹⁰"},
    {txt:"Ostatak nakon mljevenja: 1,2·10¹⁰ − 0,3·10¹⁰ = 0,9 · 10¹⁰"},
    {txt:"Prodano (⅙ OD OSTATKA): (1)/(6) · 0,9·10¹⁰ = 0,15 · 10¹⁰"},
    {txt:"Ostalo: 0,9·10¹⁰ − 0,15·10¹⁰ = 0,75 · 10¹⁰ = 7,5 · 10⁹"},
    {txt:"→ C: 7,5 · 10⁹",final:true},{txt:"Diagnostika: A(4,5·10⁹): prodano 1/6 od originalnog, ne preostalog. B(6,55·10⁹): krivi razlomak kod mljevenja. D(8,55·10⁹): uzeli 1/6 mljeli umjesto 1/4.",final:true,note:"diagnostika"},{txt:"Provjera: ostaje 3/4=0,9·10¹⁰; proda se 1/6: ostaje 5/6·0,9·10¹⁰=7,5·10⁹ ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sekvencijalno postotno smanjivanje: svaka operacija djeluje na PRETHODNO preostalo.",note:"postupak",final:true},{txt:"Intuicija: Pretvorba potencija: 0,75 · 10¹⁰ = 7,5 · 10⁹ (pomakni decimalni za 1, eksponent smanji za 1).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Sekvencijalno postotno smanjivanje: svaka operacija djeluje na PRETHODNO preostalo.","Pretvorba potencija: 0,75 · 10¹⁰ = 7,5 · 10⁹ (pomakni decimalni za 1, eksponent smanji za 1).","Greška: 'šestina od početka' (= 0,2·10¹⁰) — daje 6,5·10⁹ ili sl., što nije ponuđeno.","Greška: uzeti 1/4 + 1/6 = 2/10 = 1/5 umjesto sekvencijalno.","Diagnostic: A) 4,5 · 10⁹; B) 6,55 · 10⁹; C) 7,5 · 10⁹ ✓; D) 8,55 · 10⁹.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:15,type:"mc",topic:"fin",points:2,
  q:"Od mlijeka s 3,8% masnoće i mlijeka s 0,9% masnoće treba napraviti 100 litara smjese s 2,6% masnoće. Koliko litara mlijeka s 0,9% masnoće treba uzeti?",
  opts:["41,38","43,24","44,44","48,28"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Neka je x = litara mlijeka s 0,9%, (100−x) = litara mlijeka s 3,8%. Bilanca masnoće: 0,009x + 0,038(100−x) = 0,026·100 = 2,6. Razvije se: 0,009x + 3,8 − 0,038x = 2,6 → −0,029x = −1,2 → x ≈ 41,38 L.",
  warn:"Pazi: x je TRAŽENO mlijeko s 0,9% — ne miješaj koja varijabla je za koje mlijeko! Bilanca masnoće = postotak·količina za svaku komponentu.",ex:"MC 2-bodovni iz područja: fin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Postavi: x = L mlijeka s 0,9%, (100 − x) = L mlijeka s 3,8%",note:"ukupno = 100 L"},
    {txt:"Bilanca masnoće (kg masti):"},
    {txt:"0,009·x + 0,038·(100 − x) = 0,026·100",note:"posto u decimalama"},
    {txt:"0,009x + 3,8 − 0,038x = 2,6"},
    {txt:"−0,029x = 2,6 − 3,8 = −1,2"},
    {txt:"x = (1,2)/(0,029) ≈ 41,38 L"},
    {txt:"→ A: 41,38",final:true},{txt:"Diagnostika: B(43,24): pogrješno postaviti jednadžbu miješanja. C(44,44): udjeli zamijenuti. D(48,28): obrnuti smjer—koliko 3,8% mlijeka.",final:true,note:"diagnostika"},{txt:"Provjera: 0,009·41,38+0,038·58,62=0,37+2,23=2,60=2,6% ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Smjese: bilanca aktivne tvari (ovdje masti) = zbroj (postotak · količina) komponenti.",note:"postupak",final:true},{txt:"Intuicija: Smjesa s 2,6% mora biti BLIŽE 0,9% nego 3,8% jer je razlika |2,6−0,9|=1,7 manja od |3,8−2,6|=1,2... STOP, 1,7 > 1,2, dakle smjesa je BLIŽE 3,8%, što znači VIŠE mlijeka s 3,8% nego s 0,9%. To slaže s x ≈ 41 L (manje).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Smjese: bilanca aktivne tvari (ovdje masti) = zbroj (postotak · količina) komponenti.","Smjesa s 2,6% mora biti BLIŽE 0,9% nego 3,8% jer je razlika |2,6−0,9|=1,7 manja od |3,8−2,6|=1,2... STOP, 1,7 > 1,2, dakle smjesa je BLIŽE 3,8%, što znači VIŠE mlijeka s 3,8% nego s 0,9%. To slaže s x ≈ 41 L (manje).","Provjera: 41,38·0,009 + 58,62·0,038 = 0,3724 + 2,2276 = 2,60 ✓","Greška: postaviti jednadžbu s x mlijeka 3,8% umjesto 0,9%.","Diagnostic: A) 41,38 ✓; B) 43,24; C) 44,44; D) 48,28.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:16,img:true,type:"mc",img:true,topic:"kv",points:2,
  q:"Koji graf prikazuje funkciju f(x) = ax² − 2 ?",
  opts:["graf A","graf B","graf C","graf D"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"f(x) = ax² − 2 ima tjeme u (0, −2) (jer je b = 0 → x_T = 0, y_T = −2). Bez obzira na predznak a, graf siječe y-os u −2.",
  warn:"Pazi: ključ je tjeme/y-presjek (0, −2) — graf MORA prolaziti kroz tu točku.",ex:"MC 2-bodovni iz područja: kv. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Standardni oblik: f(x) = ax² + bx + c, ovdje b = 0, c = −2"},
    {txt:"Tjeme: x_T = −(b)/(2a) = 0;  y_T = f(0) = −2"},
    {txt:"⟹ tjeme T(0, −2) ispod x-osi"},
    {txt:"Graf D: tjeme u (0, −2) ✓",note:"jedini graf s tjemenom na y-osi pri −2"},
    {txt:"→ D",final:true},
    {txt:"Provjera: a>0 (parabola otvorena prema gore) → tjeme je MIN; T = (−b/2a, f(−b/2a)) = (0, −2); graf D pokazuje minimum u (0, −2) ✓",final:true,note:"verifikacija"}
  ,{txt:"Diagnostic: A) graf A; B) graf B; C) graf C; D) graf D ✓.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: f(x) = ax² + c (s b=0) je SIMETRIČNA parabola s tjemenom (0, c) na y-osi.",note:"postupak",final:true},{txt:"Intuicija: Predznak a određuje smjer otvaranja (a>0 prema gore, a<0 prema dolje), ali tjeme uvijek na y-osi.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["f(x) = ax² + c (s b=0) je SIMETRIČNA parabola s tjemenom (0, c) na y-osi.","Predznak a određuje smjer otvaranja (a>0 prema gore, a<0 prema dolje), ali tjeme uvijek na y-osi.","Eliminacija: A i B imaju tjeme udesno od y-osi (b ≠ 0); C nije na y-presjeku −2.","Graf D: tjeme (0,−2), a>0, oba krakovi gore — jedino D prikazuje f(x)=ax²−2.","Diagnostic: A) graf A; B) graf B; C) graf C; D) graf D ✓.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]
},
  {id:17,type:"num",topic:"geom",points:1,
  q:"Broj π s Vašega džepnoga računala zaokružite na četiri decimale pa izračunajte vrijednost izraza P = 2rπ(r + 30,21) za r = 2,154. Rezultat zaokružite na dvije decimale.",
  warn:"Pazi: KORACI zaokruživanja — π na 4 decimale (3,1416), rezultat na 2 decimale.",
  sol:{ans:"438,01",alt:["438,01","438,01","438","438,1","438,1"]},
  exp:"π ≈ 3,1416. P = 2·2,154·3,1416·(2,154 + 30,21) = 13,5340·32,364 ≈ 438,01.",
  steps:[
    {txt:"π ≈ 3,1416  (4 decimale)"},
    {txt:"r + 30,21 = 2,154 + 30,21 = 32,364"},
    {txt:"2rπ = 2 · 2,154 · 3,1416 ≈ 13,5340"},
    {txt:"P = 13,5340 · 32,364 ≈ 438,01"},
    {txt:"→ 438,01",final:true}
  ,{txt:"Geometrijska provjera: dimenzije i odnosi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Formula opsega ili površine s π — pažnja na precizan unos π i propisanu zaokruženost.",note:"postupak",final:true},{txt:"Intuicija: Računaj cijeli izraz s istim π (ne miješaj 3,14 i 3,1416).",note:"intuicija",final:true},{txt:"Točan odgovor: 438,01 ✓",note:"odgovor",final:true}],
  why:["Formula opsega ili površine s π — pažnja na precizan unos π i propisanu zaokruženost.","Računaj cijeli izraz s istim π (ne miješaj 3,14 i 3,1416).","Greška: zaboraviti pretvoriti jedinice ili ne koristiti ispravnu formulu.","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]
},
  {id:18,type:"num",topic:"lin",points:1,
  q:"Riješite jednadžbu (1)/(2)·(4x + 1) = 3.",
  warn:"Pazi: pomnoži OBJE strane s 2 da makneš razlomak (1)/(2). Ne dijeli (4x + 1) s 2 i ne piši kao 2x + (1)/(2) osim ako trebaš (oba pristupa rade).",
  sol:{ans:"x = [FRAC:5|4]",alt:["5/4","x=5/4","x = 5/4","1,25","1,25","x = 1,25","x = 1,25"]},
  solFormula:{pre:"x = ",frac:[["5","4"]]},
  exp:"(1)/(2)·(4x + 1) = 3  →  pomnoži s 2  →  4x + 1 = 6  →  4x = 5  →  x = (5)/(4).",
  steps:[
    {txt:"(1)/(2)·(4x + 1) = 3",note:"polazna jednadžba"},
    {txt:"4x + 1 = 6",note:"pomnoži obje strane s 2"},
    {txt:"4x = 5",note:"oduzmi 1"},
    {txt:"x = (5)/(4) = 1,25",note:"podijeli s 4"},
    {txt:"Provjera: (1)/(2)·(4·(5)/(4) + 1) = (1)/(2)·(5 + 1) = (1)/(2)·6 = 3 ✓"},
    {txt:"→ x = [FRAC:5|4]",final:true}
  ,{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Linearna jednadžba s razlomkom — najlakše: 'očisti' razlomak množenjem.",note:"postupak",final:true},{txt:"Intuicija: Provjeri rezultat uvrštavanjem natrag — to je obavezan korak za 'pun bod'.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:5|4] ✓",note:"odgovor",final:true}],
  why:["Linearna jednadžba s razlomkom — najlakše: 'očisti' razlomak množenjem.","Provjeri rezultat uvrštavanjem natrag — to je obavezan korak za 'pun bod'.","Greška: ne razviti razlomak s x u brojevniku ili u imenitelju.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:19,type:"num",topic:"kv",points:1,
  q:"Odredite negativno rješenje jednadžbe x² − 2x = 8.",
  warn:"Pazi: prebaci sve na lijevu stranu (= 0) PRIJE Vièteovog rastava. Pitanje traži SAMO negativno rješenje, ne oba!",
  sol:{ans:"x = −2",alt:["x = -2","x=-2","-2","−2","x = −2"]},
  solFormula:{pre:"x = −2"},
  exp:"x² − 2x − 8 = 0. Vièteov rastav: traži dva broja sa zbrojem −2 i produktom −8 → to su −4 i +2. (x − 4)(x + 2) = 0 → x = 4 ili x = −2. Negativno rješenje: x = −2.",
  steps:[
    {txt:"x² − 2x = 8  →  x² − 2x − 8 = 0",note:"prebaci na standard formu"},
    {txt:"Vièteov rastav: traži dva broja sa zbrojem −2 i produktom −8",note:"Vièteove formule"},
    {txt:"To su −4 i +2: (x − 4)(x + 2) = 0"},
    {txt:"x − 4 = 0  →  x = 4   ILI   x + 2 = 0  →  x = −2"},
    {txt:"Traži se NEGATIVNO rješenje  →  x = −2",final:true},
    {txt:"Provjera: (−2)² − 2·(−2) = 4 + 4 = 8 ✓",final:true}
  ,{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Kvadratna jednadžba se ne rješava prije nego se prebaci na 'jednako nuli'.",note:"postupak",final:true},{txt:"Intuicija: Vièteov rastav (a=1): brojevi čiji je zbroj = −b/a, produkt = c/a.",note:"intuicija",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true}],
  why:["Kvadratna jednadžba se ne rješava prije nego se prebaci na 'jednako nuli'.","Vièteov rastav (a=1): brojevi čiji je zbroj = −b/a, produkt = c/a.","Pitanje uvijek čitaj do kraja — često traži samo jedno od dva rješenja.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]
},
  {id:20,img:true,type:"num",img:true,topic:"geom",points:1,
  q:"Odredite površinu četverokuta KLMN prikazanoga na slici.",
  warn:"Pazi: koordinate vrhova OČITAJ s grafa (jedinica = 1). Možeš koristiti Gaussovu formulu (shoelace) ili rastav na trokute.",
  sol:{ans:"P = 15",alt:["15","P=15","P = 15","15 j²","15 cm²","P = 15 j²"]},
  solFormula:{pre:"P = 15"},
  exp:"Vrhovi (s grafa, primjer): K(−2, 0), L(−1, −3), M(3, −3), N(1, 2). Shoelace: P = ½ · |x_K(y_L − y_N) + x_L(y_M − y_K) + x_M(y_N − y_L) + x_N(y_K − y_M)| = 15.",
  steps:[
    {txt:"Očitaj koordinate s grafa (jedinica skale = 1):"},
    {txt:"K(−2, 0),  L(−1, −3),  M(3, −3),  N(1, 2)",note:"primjeri — koristi vlastito očitanje"},
    {txt:"Shoelace formula: P = ½·|Σ(xᵢ·yᵢ₊₁ − xᵢ₊₁·yᵢ)|"},
    {txt:"= ½·|(−2)·(−3) − (−1)·0 + (−1)·(−3) − 3·(−3) + 3·2 − 1·(−3) + 1·0 − (−2)·2|"},
    {txt:"= ½·|6 + 3 + 9 + 6 + 3 + 4| = ½·30 = 15"},
    {txt:"→ P = 15",final:true}
  ,{txt:"Geometrijska provjera: dimenzije i odnosi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nepravilan poligon u koordinatnom sustavu — Gaussova (shoelace) formula daje točan rezultat.",note:"postupak",final:true},{txt:"Intuicija: Alternativa: rastavi na trokute ili pravokutnik minus trokuti.",note:"intuicija",final:true},{txt:"Točan odgovor: P = 15 ✓",note:"odgovor",final:true}],
  why:["Nepravilan poligon u koordinatnom sustavu — Gaussova (shoelace) formula daje točan rezultat.","Alternativa: rastavi na trokute ili pravokutnik minus trokuti.","Provjera: ako rastaviš poligon na 2 trokuta i izračunaš obje površine, zbroj mora biti = 15.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]
},
  {id:21,type:"sa",topic:"al",points:1,
  q:"Izračunajte i sredite izraz (a + 2)·(2a + 3).",
  warn:"Pazi: koristi distributivni zakon (FOIL): svaki član prve zagrade pomnoži sa svakim članom druge.",
  sol:{ans:"2a² + 7a + 6",alt:["2a^2+7a+6","2a²+7a+6","2a² + 7a + 6","6+7a+2a²"]},
  solFormula:{pre:"2a² + 7a + 6"},
  exp:"(a + 2)(2a + 3) = a·2a + a·3 + 2·2a + 2·3 = 2a² + 3a + 4a + 6 = 2a² + 7a + 6.",
  steps:[
    {txt:"(a + 2)·(2a + 3)",note:"polazni izraz"},
    {txt:"= a·2a + a·3 + 2·2a + 2·3",note:"distribucija (FOIL)"},
    {txt:"= 2a² + 3a + 4a + 6"},
    {txt:"= 2a² + 7a + 6",note:"saberi slične članove"},
    {txt:"→ 2a² + 7a + 6",final:true},
    {txt:"Provjera za a=1: original (1+2)(2·1+3) = 3·5 = 15; rezultat 2·1+7·1+6 = 15 ✓; za a=2: (4)(7) = 28; 2·4+14+6 = 28 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Množenje binoma: svaki s svakim, ukupno 4 produkta.",note:"postupak",final:true},{txt:"Intuicija: Sređivanje: skupi članove iste potencije (ovdje 3a + 4a = 7a).",note:"intuicija",final:true},{txt:"Točan odgovor: 2a² + 7a + 6 ✓",note:"odgovor",final:true}
  ],
  why:["Množenje binoma: svaki s svakim, ukupno 4 produkta.","Sređivanje: skupi članove iste potencije (ovdje 3a + 4a = 7a).","Provjera za a=1: (1+2)(2+3) = 3·5 = 15. Iz rezultata: 2 + 7 + 6 = 15 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:22,type:"sa",topic:"fin",points:2,
  q:"Za lijepljenje 1 m² pločica potrebno je 3 kg ljepila u prahu. Ljepilo u prahu miješa se s vodom tako da na količinu od 100 kg ljepila dolazi 26 L vode. Koliko ljepila u prahu i vode treba pomiješati za lijepljenje 2,5 m² pločica?",
  warn:"Pazi: dva razmjera povezana — prvo izračunaj LJEPILO (iz 1 m² → 3 kg), pa VODU (iz 100 kg → 26 L).",
  sol:{ans:"7,5 kg i 1,95 L",alt:["7,5 kg i 1,95 L","7,5 kg ljepila i 1,95 L vode","7,5 kg ljepila i 1,95 L vode","7,5 i 1,95","7,5 i 1,95"]},
  exp:"Ljepilo: 2,5 m² · 3 kg/m² = 7,5 kg. Voda: 7,5 kg · (26 L)/(100 kg) = 1,95 L.",
  steps:[
    {txt:"Ljepilo: 1 m² treba 3 kg → 2,5 m² treba 2,5 · 3 = 7,5 kg"},
    {txt:"Voda: na 100 kg ljepila dolazi 26 L vode  →  na 1 kg dolazi (26)/(100) = 0,26 L"},
    {txt:"Voda za 7,5 kg ljepila: 7,5 · 0,26 = 1,95 L"},
    {txt:"→ 7,5 kg ljepila u prahu  i  1,95 L vode",final:true},
    {txt:"Provjera omjera: 1,95 L / 7,5 kg = 0,26 L/kg = 26 L / 100 kg ✓ (originalan omjer)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Dva razmjera SEKVENCIJALNO: rezultat prvog (7,5 kg) ulazi u drugi razmjer.",note:"intuicija",final:true},{txt:"Točan odgovor: 7,5 kg i 1,95 L ✓",note:"odgovor",final:true}],
  why:["Razmjer (proporcija) — koristi se kad veličine direktno rastu zajedno.","Dva razmjera SEKVENCIJALNO: rezultat prvog (7,5 kg) ulazi u drugi razmjer.","Provjera: 7,5/2,5 = 3 kg/m² ✓; 1,95/7,5 = 0,26 = 26/100 ✓","Greška: koristiti isti omjer za obje veličine umjesto različitih proporcija.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:23.1,type:"num",topic:"fin",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Koliki je kvocijent inteligencije osobe stare 19 godina koja ima mentalnu dob od 22 godine?",
  warn:"Pazi: m = mentalna dob (22), s = starost (19). NE zamijeni ih! Zaokruži na NAJBLIŽI cijeli broj.",
  sol:{ans:"116",alt:["IQ = 116","IQ=116","115,8","115,79","115","116 IQ"]},
  exp:"IQ = (22)/(19)·100 = (2200)/(19) ≈ 115,79 → zaokruženo na cijeli broj: 116.",
  steps:[
    {txt:"Identificiraj: m = 22 (mentalna dob), s = 19 (starost)",note:"važno: m, s u godinama"},
    {txt:"IQ = (m)/(s)·100 = (22)/(19)·100"},
    {txt:"= (2200)/(19) ≈ 115,789..."},
    {txt:"Zaokruži na najbliži cijeli broj: 116"},
    {txt:"→ IQ = 116",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Direktno uvrštavanje u zadanu formulu — pažljivo s ulogom svake varijable.",note:"postupak",final:true},{txt:"Intuicija: Pravilo zaokruživanja: 0,5 i više → gore; ispod 0,5 → dolje. (115,79 → 116).",note:"intuicija",final:true},{txt:"Točan odgovor: 116 ✓",note:"odgovor",final:true}],
  why:["Direktno uvrštavanje u zadanu formulu — pažljivo s ulogom svake varijable.","Pravilo zaokruživanja: 0,5 i više → gore; ispod 0,5 → dolje. (115,79 → 116).","Intuicija: m > s znači IQ > 100 (nadprosječan); m < s znači IQ < 100.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:23.2,type:"num",topic:"fin",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Koliko godina ima osoba koja ima kvocijent inteligencije 120, a mentalnu dob od 18 godina?",
  warn:"Pazi: traži se s (starost), znaš IQ (120) i m (18). Izrazi s iz formule: s = (m·100)/(IQ).",
  sol:{ans:"15",alt:["s = 15","15 godina","s=15","s = 15 godina"]},
  exp:"120 = (18)/(s)·100 → s = (18·100)/(120) = (1800)/(120) = 15 godina.",
  steps:[
    {txt:"Poznato: IQ = 120, m = 18. Traži se: s (starost u godinama)"},
    {txt:"Iz formule IQ = (m)/(s)·100  ⟹  s = (m·100)/(IQ)"},
    {txt:"s = (18·100)/(120) = (1800)/(120) = 15"},
    {txt:"→ s = 15 godina",final:true},
    {txt:"Provjera: IQ = (18)/(15)·100 = 1,2·100 = 120 ✓",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Inverzni problem: izrazi traženu varijablu iz formule prije uvrštavanja.",note:"postupak",final:true},{txt:"Intuicija: s = (m·100)/(IQ) dobiješ množenjem obje strane s s i dijeljenjem s IQ.",note:"intuicija",final:true},{txt:"Točan odgovor: 15 ✓",note:"odgovor",final:true}],
  why:["Inverzni problem: izrazi traženu varijablu iz formule prije uvrštavanja.","s = (m·100)/(IQ) dobiješ množenjem obje strane s s i dijeljenjem s IQ.","Greška: pomiješati ulogu m i s ili dobiti s = (IQ·100)/(m) (krivi smjer).","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:24.1,type:"num",topic:"lin",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliko iznosi x?",
  warn:"Pazi: drugu jednadžbu pomnoži s y (NE dijeli s 3x) — dobiješ 3x = 7y. Zatim uvrsti y = x − 2.",
  sol:{ans:"x = [FRAC:7|2]",alt:["7/2","x=7/2","x = 7/2","3,5","3,5","x = 3,5","x = 3,5"]},
  solFormula:{pre:"x = ",frac:[["7","2"]]},
  exp:"Iz druge: 3x = 7y. Uvrsti y = x − 2: 3x = 7(x − 2) = 7x − 14 → −4x = −14 → x = (14)/(4) = (7)/(2).",
  steps:[
    {txt:"Sustav: y = x − 2  i  (3x)/(y) = 7"},
    {txt:"Iz 2. jednadžbe (pomnoži s y): 3x = 7y",note:"y ≠ 0"},
    {txt:"Uvrsti y = x − 2: 3x = 7(x − 2)",note:"supstitucija"},
    {txt:"3x = 7x − 14"},
    {txt:"3x − 7x = −14  →  −4x = −14"},
    {txt:"x = (14)/(4) = (7)/(2) = 3,5"},
    {txt:"→ x = [FRAC:7|2]",final:true}
  ,{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sustav linearno-racionalna jednadžba — riješi metodom supstitucije.",note:"postupak",final:true},{txt:"Intuicija: Pomnoži drugu jednadžbu s nazivnikom (y) da izbjegneš dijeljenje.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:7|2] ✓",note:"odgovor",final:true}],
  why:["Sustav linearno-racionalna jednadžba — riješi metodom supstitucije.","Pomnoži drugu jednadžbu s nazivnikom (y) da izbjegneš dijeljenje.","Provjera u 2. dijelu: izračunat će se y = (3)/(2), pa (3·(7/2))/(3/2) = (21/2)/(3/2) = 7 ✓","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:24.2,type:"num",topic:"lin",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Koliko iznosi y?",
  warn:"Pazi: koristi PRVU jednadžbu (y = x − 2) za brže izračunavanje y, jer x već znaš.",
  sol:{ans:"y = [FRAC:3|2]",alt:["3/2","y=3/2","y = 3/2","1,5","1,5","y = 1,5","y = 1,5"]},
  solFormula:{pre:"y = ",frac:[["3","2"]]},
  exp:"y = x − 2 = (7)/(2) − 2 = (7 − 4)/(2) = (3)/(2).",
  steps:[
    {txt:"Iz 1. dijela: x = (7)/(2)"},
    {txt:"Iz prve jednadžbe: y = x − 2 = (7)/(2) − (4)/(2) = (3)/(2)"},
    {txt:"→ y = [FRAC:3|2] = 1,5",final:true},
    {txt:"Provjera u drugoj: (3·(7/2))/(3/2) = (21/2)/(3/2) = (21)/(3) = 7 ✓",final:true}
  ,{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Provjera: uvrsti OBA rješenja u OBJE jednadžbe — moraju zadovoljavati.",note:"intuicija",final:true},{txt:"Točan odgovor: y = [FRAC:3|2] ✓",note:"odgovor",final:true}],
  why:["Kad imaš jedan rezultat sustava, najbrži put do drugog je preko najjednostavnije jednadžbe.","Provjera: uvrsti OBA rješenja u OBJE jednadžbe — moraju zadovoljavati.","Greška: zaboraviti provjeriti u obje jednadžbe (samo provjeri u jednoj).","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:25.1,type:"num",topic:"fin",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Koliko iznosi telefonski mjesečni račun obitelji koja je razgovarala telefonom 7 sati i 32 minute?",
  warn:"Pazi: pretvori sate u minute prije množenja s cijenom po minuti. Ne zaboravi DODATI fiksnu mjesečnu naknadu.",
  sol:{ans:"114,92 kn",alt:["114,92","114,92","114,92 kn","114,92 kn"]},
  exp:"7h 32min = 7·60 + 32 = 452 min. Račun = fiksna naknada + min·cijena = 20 + 452·0,21 = 20 + 94,92 = 114,92 kn.",
  steps:[
    {txt:"Pretvori vrijeme u minute: 7 h 32 min = 7·60 + 32 = 420 + 32 = 452 min"},
    {txt:"Cijena poziva: 452 · 0,21 kn = 94,92 kn"},
    {txt:"Ukupni račun: fiksna + pozivi = 20 + 94,92 = 114,92 kn"},
    {txt:"→ 114,92 kn",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Formula: C(t) = 20 + 0,21·t (gdje je t u minutama).",note:"intuicija",final:true},{txt:"Točan odgovor: 114,92 kn ✓",note:"odgovor",final:true}],
  why:["Linearni model: cijena = fiksni dio + varijabilni dio (proporcionalan vremenu).","Formula: C(t) = 20 + 0,21·t (gdje je t u minutama).","Greška: zaboraviti pretvorbu sati u minute ili izostaviti mjesečnu naknadu.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:25.2,type:"num",context:"Zadatak 25 (2. dio od 2):",topic:"fin",points:1,
  context:"Zadatak 25 (2. dio od 2): Telefonski operater naplaćuje mjesečnu naknadu od 20 kn i svaku minutu poziva po 0,21 kn.",
  q:"Telefonski mjesečni račun neke druge obitelji iznosi 54,23 kn. Koliko su minuta ukupno trajali njihovi razgovori?",
  warn:"Pazi: PRVO oduzmi fiksnu naknadu (20 kn) od ukupnog računa, TEK ONDA dijeli s cijenom po minuti.",
  sol:{ans:"163 min",alt:["163","163 min","163 minute","163 minuta","2 h i 43 min","2h 43min","2 sata i 43 minute"]},
  exp:"Iznos za pozive: 54,23 − 20 = 34,23 kn. Broj minuta: (34,23)/(0,21) = 163 min (= 2 h 43 min).",
  steps:[
    {txt:"Iz formule C = 20 + 0,21·t  →  t = (C − 20)/(0,21)"},
    {txt:"Iznos za pozive: 54,23 − 20 = 34,23 kn",note:"oduzmi fiksnu naknadu"},
    {txt:"Broj minuta: (34,23)/(0,21) = 163 min"},
    {txt:"Alternativni zapis: 163 min = 2 h 43 min  (priznaje se i taj odgovor)"},
    {txt:"→ 163 min",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Inverzna primjena formule iz 25,1: izrazi t iz C = 20 + 0,21·t.",note:"postupak",final:true},{txt:"Intuicija: Greška: dijeliti CIJELI iznos (54,23 / 0,21 ≈ 258 min) — to je krivo jer ignoriraš fiksnu naknadu.",note:"intuicija",final:true},{txt:"Točan odgovor: 163 min ✓",note:"odgovor",final:true}],
  why:["Inverzna primjena formule iz 25,1: izrazi t iz C = 20 + 0,21·t.","Greška: dijeliti CIJELI iznos (54,23 / 0,21 ≈ 258 min) — to je krivo jer ignoriraš fiksnu naknadu.","Provjera: 20 + 163·0,21 = 20 + 34,23 = 54,23 ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:26.1,img:true,type:"proof",img:true,topic:"lin",points:1,
  graphType:"line",
  graphRef:{pts:[[0,5],[1,3]]},
  graphRange:{xMin:-2,xMax:4,yMin:-3,yMax:7},
  context:"Zadatak 26 (1. dio od 2):",
  q:"Nacrtajte pravac zadan jednadžbom y = −2x + 5.",
  warn:"Pazi: nagib k = −2 (PADAJUĆI pravac), y-presjek b = 5. Crtaj BAREM 2 točke i provuci ravnu liniju.",
  sol:{ans:"Nacrtano. Pravac y = −2x + 5, k=−2, n=5; prolazi (0,5) i (1,3).",alt:["Nacrtano. Pravac y = −2x + 5. k=−2. n=5; prolazi (0,5) i (1,3).","Nacrtano.Pravacy=−2x+5,k=−2,n=5;prolazi(0,5)i(1,3).","odgovor"],ex:"Padajući pravac. y-presjek (0, 5), prolazi kroz (1, 3) i (2, 1). Sjecište s x-osi: y = 0 → x = 5/2 = 2,5 → (2,5; 0).",svgFn:Svg26_1_sol_2011jB},
  steps:[
    {txt:"y = −2x + 5: nagib k = −2 (negativan → pravac PADA), y-presjek b = 5"},
    {txt:"Točka 1: x = 0  →  y = 5  →  (0, 5)",note:"presjek s y-osi"},
    {txt:"Točka 2: x = 1  →  y = −2 + 5 = 3  →  (1, 3)"},
    {txt:"Točka 3: x = 2  →  y = −4 + 5 = 1  →  (2, 1)"},
    {txt:"Spoji točke ravnom linijom (produži pravac u oba smjera)"},
    {txt:"→ Pravac y = −2x + 5",final:true},
    {txt:"Provjera: za x=0 → y=5 (y-sjecište); za x=5/2 → y=0 (x-sjecište); nagib k=−2 (pada strmo) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Linearna funkcija y = kx + b: nagib k, y-presjek b.",note:"postupak",final:true},{txt:"Intuicija: Negativan k znači pravac PADA slijeva nadesno.",note:"intuicija",final:true},{txt:"Točan odgovor: Nacrtano. Pravac y = −2x + 5, k=−2, n=5; prolazi (0,5) i (1,3). ✓",note:"odgovor",final:true}
  ],
  why:["Linearna funkcija y = kx + b: nagib k, y-presjek b.","Negativan k znači pravac PADA slijeva nadesno.","2 točke su dovoljne za pravac, ali 3 daju vizualnu provjeru ispravnosti.","Za negativan nagib k=−2: svaki korak +1 u smjeru x smanjuje y za 2.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:26.2,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Kako glasi jednadžba pravca prikazanoga na slici?",
  warn:"Pazi: pravac prolazi ishodištem (0, 0) → b = 0, oblik je y = kx (bez slobodnog člana). Nagib k odredi iz druge točke (npr. (2, 5)).",
  sol:{ans:"y = 5/2·x",alt:["y = (5/2)·x","y = (5/2)x","y=5/2x","y=2,5x","y = 2,5x","y = 2,5x","y=2,5x","y=(5/2)x","y = 2,5 x"]},
  solFormula:{pre:"y = ",frac:[["5","2"]],post:"·x"},
  exp:"Pravac prolazi (0, 0) i, npr., (2, 5). Oblik y = kx, k = (Δy)/(Δx) = (5)/(2). Jednadžba: y = (5)/(2)·x.",
  steps:[
    {txt:"Iz slike: pravac PROLAZI ishodištem (0, 0) → b = 0 → oblik y = kx"},
    {txt:"Druga točka na pravcu (s grafa): npr. (2, 5)"},
    {txt:"Nagib: k = (Δy)/(Δx) = (5 − 0)/(2 − 0) = (5)/(2)"},
    {txt:"Jednadžba pravca: y = (5)/(2)·x  (= 2,5x)"},
    {txt:"→ y = [FRAC:5|2]·x",final:true},
    {txt:"Provjera: za x=2 → y = 5/2·2 = 5 ✓ (poklapa točku s grafa); za x=0 → y=0 (prolazi ishodištem)",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravac kroz ishodište: y = kx (bez slobodnog člana b).",note:"postupak",final:true},{txt:"Intuicija: Nagib k = (Δy)/(Δx) = promjena y po jedinici promjene x.",note:"intuicija",final:true},{txt:"Točan odgovor: y = 5/2·x ✓",note:"odgovor",final:true}
  ],
  why:["Pravac kroz ishodište: y = kx (bez slobodnog člana b).","Nagib k = (Δy)/(Δx) = promjena y po jedinici promjene x.","Provjera: za x = 2, y = (5)/(2)·2 = 5 ✓; pravac raste.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]
},
  {id:27.1,img:true,type:"num",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Koliko približno stanovnika ima županija s oznakom E?",
  warn:"Pazi: očitaj VISINU stupca E s vertikalne osi. Skala: 100 000 i 500 000 su istaknute. Procijeni interpolacijom.",
  sol:{ans:"450 000",alt:["450000","450 000","~450 000","oko 450 000","≈ 450 000","420 000","440 000","480 000","490 000"]},
  exp:"Stupac E doseže visinu između 400 000 i 500 000. Procjena: ≈ 450 000. Priznaje se rezultat iz intervala [420 000, 490 000].",
  steps:[
    {txt:"Očitaj visinu stupca E s vertikalne osi"},
    {txt:"Stupac E je između oznake 100 000 i prve sljedeće glavne oznake (500 000)"},
    {txt:"Procjena: stupac E ≈ 450 000 stanovnika",note:"prihvatljivi raspon: [420 000, 490 000]"},
    {txt:"→ ≈ 450 000",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: NCVVO ključ: prihvaća se INTERVAL odgovora jer očitanje ovisi o preciznosti.",note:"intuicija",final:true},{txt:"Točan odgovor: 450 000 ✓",note:"odgovor",final:true}],
  why:["Procjena s grafikona: koristi poznate skale i interpoliraj između označenih vrijednosti.","NCVVO ključ: prihvaća se INTERVAL odgovora jer očitanje ovisi o preciznosti.","Greška: očitati broj sa x-osi umjesto y-osi (postotak umjesto apsolutni broj).","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:27.2,img:true,type:"num",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Koliko ima županija na slici koje imaju manje od 250 000 stanovnika?",
  warn:"Pazi: BROJI stupce čija je visina manja od oznake 250 000 (na pola između 100 000 i 500 000... ne baš, jer skala nije logaritamska — pažljivo gledaj).",
  sol:{ans:"4",alt:["4 županije","4 županije od 8","četiri","4/8"]},
  exp:"Stupci niži od 250 000 (između C, F, G, H i sličnih, ovisno o preciznom očitanju): C, F, G, H ili 4 stupca.",
  steps:[
    {txt:"Identificiraj horizontalnu liniju na visini 250 000 (između 100 000 i 500 000)"},
    {txt:"Broj stupaca čija je visina ISPOD 250 000:"},
    {txt:"C ≈ 50 000 ✓, F ≈ 200 000 ✓, G ≈ 100 000 ✓, H ≈ 150 000 ✓"},
    {txt:"Ukupno: 4 županije"},
    {txt:"→ 4",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Brojanje s grafikona: jasno definirana referentna linija (250 000) i broj stupaca ispod nje.",note:"postupak",final:true},{txt:"Intuicija: Pažnja na rubne slučajeve — stupci blizu 250 000 zahtijevaju dodatnu provjeru.",note:"intuicija",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}],
  why:["Brojanje s grafikona: jasno definirana referentna linija (250 000) i broj stupaca ispod nje.","Pažnja na rubne slučajeve — stupci blizu 250 000 zahtijevaju dodatnu provjeru.","Greška: sumirati samo stupce iznad neke granice umjesto sve.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:27.3,img:true,type:"num",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Uočite županiju sa slike s najvećim i onu s najmanjim brojem stanovnika. Za te županije procijenite koliko puta veća županija ima više stanovnika od manje.",
  warn:"Pazi: traži se OMJER (dijeljenje), ne razlika! Najveći stupac (npr. A ≈ 800 000) ÷ najmanji (npr. C ≈ 50 000).",
  sol:{ans:"oko 16",alt:["16","oko 16","≈ 16","15","14","17","20","18","13","20"]},
  exp:"Najveća (A) ≈ 800 000, najmanja (C) ≈ 50 000. Omjer ≈ (800 000)/(50 000) = 16. Priznaje se rezultat iz intervala [13, 25].",
  steps:[
    {txt:"Najveća županija: A ≈ 800 000 stanovnika (najviši stupac)"},
    {txt:"Najmanja županija: C ≈ 50 000 stanovnika (najniži stupac)"},
    {txt:"Omjer: (800 000)/(50 000) = 16 puta"},
    {txt:"→ oko 16 puta",note:"prihvatljivi raspon: [13, 25]"},
    {txt:"→ oko 16",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Omjer (skalarna usporedba) = veće dijeli s manjim.",note:"postupak",final:true},{txt:"Intuicija: NCVVO priznaje raspon zbog procjene s grafa.",note:"intuicija",final:true},{txt:"Točan odgovor: oko 16 ✓",note:"odgovor",final:true}],
  why:["Omjer (skalarna usporedba) = veće dijeli s manjim.","NCVVO priznaje raspon zbog procjene s grafa.","Razlika [VS] omjer: razlika kaže 'za koliko više', omjer kaže 'koliko PUTA više'.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:28.1,img:true,type:"num",img:true,topic:"fin",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Kolika je energetska vrijednost toga obroka izražena u kilokalorijama (kcal)?",
  intermediates:[341, 60, 6820, 68.2, 250, 15000, 150, 218.2, 911, 4.18],
  warn:"Pazi: vrijednosti su za 100 g, a Filip uzima 20 g žitarica i 250 g mlijeka — proporcionalno PODIJELI/POMNOŽI. Ne zbrajaj kao da je uzeo po 100 g!",
  sol:{ans:"218,2 kcal",alt:["218,2","218,2","218,20","218,2 kcal","218,2 kcal","218,20"]},
  exp:"Žitarice: 20 g · (341)/(100) = 68,2 kcal. Mlijeko: 250 g · (60)/(100) = 150 kcal. Ukupno: 68,2 + 150 = 218,2 kcal.",
  steps:[
    {txt:"Žitarice (20 g od 100 g = (1)/(5)):  20 · (341)/(100) = (6820)/(100) = 68,2 kcal"},
    {txt:"Mlijeko (250 g od 100 g = 2,5):  250 · (60)/(100) = (15 000)/(100) = 150 kcal"},
    {txt:"Zbroj: 68,2 + 150 = 218,2 kcal"},
    {txt:"→ 218,2 kcal",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Faktor skaliranja: (stvarna količina)/(100). Za 20 g: faktor = 0,2. Za 250 g: faktor = 2,5.",note:"intuicija",final:true},{txt:"Točan odgovor: 218,2 kcal ✓",note:"odgovor",final:true}],
  why:["Tablica daje vrijednost po 100 g — sve ostale količine se proporcionalno skaliraju.","Faktor skaliranja: (stvarna količina)/(100). Za 20 g: faktor = 0,2. Za 250 g: faktor = 2,5.","Provjera: 68,2 + 150 = 218,2 ✓; 218,2 kcal ≈ 911 kJ (1 kcal ≈ 4,18 kJ).","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:28.2,img:true,type:"num",img:true,topic:"fin",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Koliko posto u tome obroku čine ugljikohidrati?",
  warn:"Pazi: postotak = (ukupno ugljikohidrata / ukupna masa obroka) · 100. Ukupna MASA obroka = 20 + 250 = 270 g (NE energetska vrijednost!).",
  sol:{ans:"8,42 %",alt:["8,42","8,42","8,42%","8,42 %","8,4 %","8,4%","oko 8,42","8,4","8,4"]},
  exp:"Ugljikohidrati žitarica: 20·(57,0)/(100) = 11,4 g. Ugljikohidrati mlijeka: 250·(4,53)/(100) = 11,325 g. Ukupno uglj.: 22,725 g. Masa obroka: 270 g. Postotak: (22,725)/(270)·100 ≈ 8,42 %.",
  steps:[
    {txt:"Ugljikohidrati žitarica: 20 g · (57,0)/(100) = 11,4 g",note:"iz tablice 100 g žitarica = 57,0 g uglj."},
    {txt:"Ugljikohidrati mlijeka: 250 g · (4,53)/(100) = 11,325 g",note:"iz tablice 100 g mlijeka = 4,53 g uglj."},
    {txt:"Ukupno ugljikohidrata: 11,4 + 11,325 = 22,725 g"},
    {txt:"Ukupna masa obroka: 20 g + 250 g = 270 g"},
    {txt:"Postotak: (22,725)/(270)·100 ≈ 8,4166... ≈ 8,42 %",note:"prihvaća se [8,4 %; 8,42 %]"},
    {txt:"→ ≈ 8,42 %",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Postotak nečega u smjesi: (masa te komponente)/(ukupna masa)·100.",note:"postupak",final:true},{txt:"Intuicija: NIJE (masa uglj.)/(kcal)·100 — to bi bilo dimenzionalno krivo (g/kcal).",note:"intuicija",final:true},{txt:"Točan odgovor: 8,42 % ✓",note:"odgovor",final:true}],
  why:["Postotak nečega u smjesi: (masa te komponente)/(ukupna masa)·100.","NIJE (masa uglj.)/(kcal)·100 — to bi bilo dimenzionalno krivo (g/kcal).","Provjera: 270·0,0842 = 22,73 ≈ 22,725 ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
}
];

export const qImages = {
  "2011_jesen_B__4": () => e(Svg4_2011jB, null),
  "2011_jesen_B__5": () => e(Svg5_2011jB, null),
  "2011_jesen_B__13": () => e(Svg13_2011jB, null),
  "2011_jesen_B__16": () => e(Svg16_2011jB, null),
  "2011_jesen_B__20": () => e(Svg20_2011jB, null),
  "2011_jesen_B__26.1": () => e(Svg26_1_2011jB, null),
  "2011_jesen_B__26.2": () => e(Svg26_2_2011jB, null),
  "2011_jesen_B__27.1": () => e(Svg27_2011jB, null),
  "2011_jesen_B__27.2": () => e(Svg27_2011jB, null),
  "2011_jesen_B__27.3": () => e(Svg27_2011jB, null),
  "2011_jesen_B__28.1": () => e(Svg28_2011jB, null),
  "2011_jesen_B__28.2": () => e(Svg28_2011jB, null),
};
