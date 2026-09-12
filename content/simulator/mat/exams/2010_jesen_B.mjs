// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg9j(){
  const W=340,H=180,dx=18,dy=10;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const s=60,kx=30,ky=85;
  const kFront=[[kx,ky],[kx+s,ky],[kx+s,ky-s],[kx,ky-s]];
  const kTop=[[kx,ky-s],[kx+s,ky-s],[kx+s+dx,ky-s-dy],[kx+dx,ky-s-dy]];
  const kRight=[[kx+s,ky],[kx+s+dx,ky-dy],[kx+s+dx,ky-s-dy],[kx+s,ky-s]];
  const qw=90,qh=40,qd=60,qx=190,qy=120;
  const qFront=[[qx,qy],[qx+qw,qy],[qx+qw,qy-qd],[qx,qy-qd]];
  const qTop=[[qx,qy-qd],[qx+qw,qy-qd],[qx+qw+dx,qy-qd-dy],[qx+dx,qy-qd-dy]];
  const qRight=[[qx+qw,qy],[qx+qw+dx,qy-dy],[qx+qw+dx,qy-qd-dy],[qx+qw,qy-qd]];
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  const st="var(--text)",sw=1.5,fi="var(--s1)",ft="var(--s2)",fr="var(--muted)";
  const dash={strokeDasharray:"3 2"};
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:pts(kFront),fill:fi,stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(kTop),fill:ft,stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(kRight),fill:fr,stroke:st,strokeWidth:sw}),
    e("line",{x1:kx+dx,y1:ky-dy,x2:kx+dx,y2:ky-s-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("line",{x1:kx,y1:ky,x2:kx+dx,y2:ky-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("line",{x1:kx+dx,y1:ky-dy,x2:kx+s+dx,y2:ky-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("text",{x:kx-22,y:ky-s/2+4,fontSize:11,fill:_GOLD},"6 cm"),
    e("text",{x:kx+s/2-8,y:ky+14,fontSize:11,fill:_GOLD},"6 cm"),
    e("text",{x:kx+s+dx/2+2,y:ky+2,fontSize:11,fill:_GOLD},"6 cm"),
    e("polygon",{points:pts(qFront),fill:fi,stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(qTop),fill:ft,stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(qRight),fill:fr,stroke:st,strokeWidth:sw}),
    e("line",{x1:qx+dx,y1:qy-dy,x2:qx+dx,y2:qy-qd-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("line",{x1:qx,y1:qy,x2:qx+dx,y2:qy-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("line",{x1:qx+dx,y1:qy-dy,x2:qx+qw+dx,y2:qy-dy,stroke:_BLUE,strokeWidth:.8,...dash}),
    e("text",{x:qx-22,y:qy-qd/2+4,fontSize:11,fill:_GOLD},"6 cm"),
    e("text",{x:qx+qw/2-8,y:qy+14,fontSize:11,fill:_GOLD},"9 cm"),
    e("text",{x:qx+qw+dx/2+2,y:qy+2,fontSize:11,fill:_GOLD},"4 cm")
  );
}

function SvgZad7_2010JB(){
  const W=320,H=290,t="var(--text)",mu="var(--muted)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const COLORS=["var(--blue)","var(--gold)","var(--green)","var(--red)"];
  const tables=[
    {lbl:"A.",rows:[[-1,-5],[2,1],[3,3]],  col:COLORS[0]},
    {lbl:"B.",rows:[[-1,-5],[2,1],[3,-3]], col:COLORS[1]},
    {lbl:"C.",rows:[[-1,-3],[2,-1],[3,5]],  col:COLORS[2]},
    {lbl:"D.",rows:[[-1,3],[2,-1],[3,-5]],  col:COLORS[3]},
  ];
  const CW=70,RH=26,LBL_H=22;
  function miniTable(ox,oy,tbl){
    const {lbl,rows,col}=tbl;
    const TW=CW*2;
    const elems=[
      e("text",{x:ox+3,y:oy+14,fontSize:11,fontWeight:"bold",fill:col},lbl),
      e("rect",{x:ox,y:oy+LBL_H,width:TW,height:RH,fill:col,fillOpacity:0.12}),
      e("text",{x:ox+CW/2,y:oy+LBL_H+RH/2+4,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:col,fontStyle:"italic"},"x"),
      e("text",{x:ox+CW+CW/2,y:oy+LBL_H+RH/2+4,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:col,fontStyle:"italic"},"f(x)"),
      e("line",{x1:ox+CW,y1:oy+LBL_H,x2:ox+CW,y2:oy+LBL_H+RH*(rows.length+1),stroke:"var(--bdr)",strokeWidth:0.8}),
    ];
    rows.forEach(function([x,fx],i){
      const ry=oy+LBL_H+RH*(i+1);
      elems.push(e("rect",{key:"rb"+i,x:ox,y:ry,width:TW,height:RH,fill:i%2===0?"var(--s2)":"var(--s1)"}));
      elems.push(e("line",{key:"hl"+i,x1:ox,y1:ry,x2:ox+TW,y2:ry,stroke:"var(--bdr)",strokeWidth:0.5}));
      elems.push(e("text",{key:"tx"+i,x:ox+CW/2,y:ry+RH/2+4,textAnchor:"middle",fontSize:12,fill:col},String(x)));
      elems.push(e("text",{key:"tf"+i,x:ox+CW+CW/2,y:ry+RH/2+4,textAnchor:"middle",fontSize:12,fill:col},String(fx)));
    });
    elems.push(e("rect",{x:ox,y:oy+LBL_H,width:TW,height:RH*(rows.length+1),fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1}));
    return e("g",{key:lbl},...elems);
  }
  const gap=16,tw=CW*2,rowH=LBL_H+RH*4+20;
  return e("svg",{viewBox:"0 0 320 290",style:{width:"100%",maxWidth:320,display:"block"}},
    miniTable(0,0,tables[0]),
    miniTable(tw+gap,0,tables[1]),
    miniTable(0,rowH,tables[2]),
    miniTable(tw+gap,rowH,tables[3]),
  );
}

function Svg28j(){
  const c={padding:"7px 10px",border:"1px solid var(--bdr2)",fontSize:12,textAlign:"center"};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // Color-coded per ocjena (PDF-faithful: each grade column distinguished)
  const colors={
    dov:{bg:"rgba(233,180,70,.18)",fg:"var(--gold)"},     // dovoljan = amber
    dob:{bg:"rgba(74,144,217,.18)",fg:"var(--blue)"},     // dobar = blue
    vrd:{bg:"rgba(80,200,120,.18)",fg:"var(--green)"},    // vrlo dobar = green
    odl:{bg:"rgba(186,134,221,.20)",fg:"#ba86dd"}         // odličan = purple
  };
  const h=col=>({...c,fontWeight:700,background:col.bg,color:col.fg,borderColor:col.fg});
  const v=col=>({...c,background:col.bg,color:col.fg,borderColor:col.fg,fontVariantNumeric:"tabular-nums"});
  const hRow={...c,fontWeight:700,background:"var(--s2)",textAlign:"left"};
  return e("div",{style:{overflowX:"auto",margin:"10px 0"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:12,minWidth:380}},
      e("thead",null,e("tr",null,
        e("th",{style:hRow},"Ocjena"),
        e("th",{style:h(colors.dov)},"dovoljan (2)"),
        e("th",{style:h(colors.dob)},"dobar (3)"),
        e("th",{style:h(colors.vrd)},"vrlo dobar (4)"),
        e("th",{style:h(colors.odl)},"odličan (5)")
      )),
      e("tbody",null,e("tr",null,
        e("td",{style:hRow},"Ostvareni postotak (%) bodova"),
        e("td",{style:v(colors.dov)},"51 – 64"),
        e("td",{style:v(colors.dob)},"65 – 79"),
        e("td",{style:v(colors.vrd)},"80 – 89"),
        e("td",{style:v(colors.odl)},"90 – 100")
      ))
    )
  );
}

function Svg27j(){
  const W=260,H=260,pad=28;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const iW=W-2*pad,iH=H-2*pad;
  const xMin=-5,xMax=7,yMin=-5,yMax=7;
  const toX=v=>pad+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad+((yMax-v)/(yMax-yMin))*iH;
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad,x2:toX(i),y2:H-pad,stroke:"var(--bdr)",strokeWidth:.5}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad,y1:toY(i),x2:W-pad,y2:toY(i),stroke:"var(--bdr)",strokeWidth:.5}));
  const ox=toX(0),oy=toY(0);
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad,y1:oy,x2:W-pad,y2:oy,stroke:_BLUE,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad,x2:ox,y2:H-pad,stroke:_BLUE,strokeWidth:1.5}),
    e("polygon",{points:(W-pad)+","+oy+" "+(W-pad-5)+","+(oy-2.5)+" "+(W-pad-5)+","+(oy+2.5),fill:"var(--text)"}),
    e("polygon",{points:ox+","+pad+" "+(ox-2.5)+","+(pad+5)+" "+(ox+2.5)+","+(pad+5),fill:"var(--text)"}),
    e("text",{x:W-pad+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+3,y:pad-2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+10,fontSize:8,fill:"var(--muted)"},"0"),
    // Tick marks + "25" labels (PDF-faithful — first tick on each axis labeled)
    e("line",{x1:toX(1),y1:oy-3,x2:toX(1),y2:oy+3,stroke:_BLUE,strokeWidth:1.2}),
    e("text",{x:toX(1)-3,y:oy+12,fontSize:8,fill:"var(--muted)"},"25"),
    e("line",{x1:ox-3,y1:toY(1),x2:ox+3,y2:toY(1),stroke:_BLUE,strokeWidth:1.2}),
    e("text",{x:ox-15,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"25"),
    e("circle",{cx:toX(-3),cy:toY(4),r:5,fill:_GREEN}),
    e("text",{x:toX(-3)+7,y:toY(4)-4,fontSize:9,fontWeight:700,fill:_GREEN},"A"),
    e("circle",{cx:toX(-3),cy:toY(-3),r:5,fill:_GOLD}),
    e("text",{x:toX(-3)+7,y:toY(-3)+12,fontSize:9,fontWeight:700,fill:_GOLD},"B"),
    e("text",{x:toX(5),y:toY(-3)-6,fontSize:9,fontStyle:"italic",fill:"var(--muted)"},"T(150,−75)=?"),
    e("text",{x:pad,y:H-5,fontSize:8,fill:"var(--muted)"},"1 kvadratić = 25 m")
  );
}

function Svg23j(){
  const c={padding:"7px 10px",border:"1px solid var(--bdr2)",fontSize:12,lineHeight:1.4};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const h={...c,fontWeight:700,background:"var(--s2)",textAlign:"center"};
  const v={...c,textAlign:"center",background:"var(--s1)"};
  const em={...c,textAlign:"center",background:"rgba(233,180,70,.06)",border:"1px dashed var(--gold)",color:"var(--gold)",fontSize:11};
  return e("div",{style:{overflowX:"auto",margin:"10px 0"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:12}},
      e("thead",null,e("tr",null,e("th",{style:{...h,width:"40%"}},"Valuta"),e("th",{style:{...h,width:"30%"}},"Iznos 1"),e("th",{style:{...h,width:"30%"}},"Iznos 2"))),
      e("tbody",null,
        e("tr",null,e("td",{style:h},"EURO (€)"),e("td",{style:v},"1"),e("td",{style:v},"256,78")),
        e("tr",null,e("td",{style:h},"KUNA (HRK)"),e("td",{style:v},"7,4456"),e("td",{style:em},"?")),
        e("tr",null,e("td",{style:h},"KUNA (HRK)"),e("td",{style:em},"?"),e("td",{style:v},"1 000"))
      )
    )
  );
}

function SvgZad21_2010JB(){
  // Prazan grid za f(x) = x² + 1  — proof
  const W=240,H=220,pad={l:26,r:12,t:14,b:22};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=3,yMin=-1,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=function(v){return pad.l+((v-xMin)/(xMax-xMin))*iW;};
  const toY=function(v){return pad.t+((yMax-v)/(yMax-yMin))*iH;};
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",m="var(--muted)",mu="var(--muted)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  return e("svg",{viewBox:"0 0 240 220",style:{width:"100%",maxWidth:240,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:_BLUE,strokeWidth:1.4}),
    e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-5)+","+(oy-2.5)+" "+(pad.l+iW-5)+","+(oy+2.5),fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:_BLUE,strokeWidth:1.4}),
    e("polygon",{points:ox+","+pad.t+" "+(ox-2.5)+","+(pad.t+5)+" "+(ox+2.5)+","+(pad.t+5),fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("line",{x1:toX(1),y1:oy-2.5,x2:toX(1),y2:oy+2.5,stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fill:mu},"1"),
    e("line",{x1:ox-2.5,y1:toY(1),x2:ox+2.5,y2:toY(1),stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox+3,y:toY(1)+3,fontSize:8,fill:mu},"1"),
  );
}

function SvgZad11_2010JB(){
  // Luk: y = -0.3x² + 1.8x   nule x=0, x=6   tjeme (3, 2.7)
  const W=220,H=155,pad={l:24,r:12,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-0.3,xMax=7.2,yMin=-0.3,yMax=3.4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=function(v){return pad.l+((v-xMin)/(xMax-xMin))*iW;};
  const toY=function(v){return pad.t+((yMax-v)/(yMax-yMin))*iH;};
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,m="var(--muted)",mu="var(--muted)";
  const grid=[];
  for(let i=0;i<=7;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=0;i<=3;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  const pts=[];
  for(let x=0;x<=6.01;x+=0.04){
    const y=-0.3*x*x+1.8*x;
    if(y>=yMin&&y<=yMax) pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));
  }
  return e("svg",{viewBox:"0 0 220 155",style:{width:"100%",maxWidth:220,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:_BLUE,strokeWidth:1.4}),
    e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-5)+","+(oy-2.5)+" "+(pad.l+iW-5)+","+(oy+2.5),fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:_BLUE,strokeWidth:1.4}),
    e("polygon",{points:ox+","+pad.t+" "+(ox-2.5)+","+(pad.t+5)+" "+(ox+2.5)+","+(pad.t+5),fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("line",{x1:toX(1),y1:oy-2.5,x2:toX(1),y2:oy+2.5,stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fill:mu},"1"),
    e("line",{x1:ox-2.5,y1:toY(1),x2:ox+2.5,y2:toY(1),stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox+3,y:toY(1)+3,fontSize:8,fill:mu},"1"),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
  );
}

export const qs = [
  {id:1,type:"mc",topic:"br",points:1,
  q:"Koji je od navedenih brojeva veći od [FRAC:−7|2] i manji od [FRAC:1|3]?",
  opts:["−23/6","−11/3","2/7","3/7"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"ZN=42: -7/2=-147/42, 1/3=14/42. A=-161/42, B=-154/42  -  oba manja od -147/42. C=12/42  -  između -147/42 i 14/42 ✓. D=18/42  -  veće od 14/42.",
  why:["Strategija: pretvori sve razlomke u decimale i usporedi s granicama −3,5 i 0,333.",
      "Negativni razlomci su manji što je veći broj ispred minusa: −11/3≈−3,67 < −7/2=−3,5.",
      "C = 2/7: 2÷7 = 0,286 — jedina opcija koja je pozitivna i manji od 1/3 ≈ 0,333.",
      "Greška: zaboraviti gornju granicu (1/3) — tada i D = 3/7 ≈ 0,43 djeluje ispravno.",
      "Alt provjera: 2/7 < 1/3 ↔ 6 < 7 ✓ (unakrsnim množenjem bez decimala).","Diagnostic: A) [FRAC:−23|6]; B) [FRAC:−11|3]; C) [FRAC:2|7] ✓; D) [FRAC:3|7].","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: broj mora biti IZMEĐU -7/2 i 1/3  -  obje nejednakosti moraju vrijediti!.",
  steps:[
    {txt:"Granice intervala: [FRAC:−7|2] = −3,5  i  [FRAC:1|3] ≈ 0,333",note:"postav"},
    {txt:"Provjeravamo svaku opciju — tražimo broj između −3,5 i 0,333:",note:"strategija"},
    {txt:"A: [FRAC:−23|6] ≈ −3,833 — manji od −3,5 → nije u intervalu ✗",note:"opcija A"},
    {txt:"B: [FRAC:−11|3] ≈ −3,667 — manji od −3,5 → nije u intervalu ✗",note:"opcija B"},
    {txt:"C: [FRAC:2|7] ≈ 0,286 — između −3,5 i 0,333 → u intervalu ✓",note:"opcija C"},
    {txt:"D: [FRAC:3|7] ≈ 0,429 — veći od 0,333 → nije u intervalu ✗",final:true,note:"diagnostika"},
    {txt:"Provjera C: −3,5 < [FRAC:2|7] < [FRAC:1|3]  →  −3,5 < 0,286 < 0,333 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Negativni razlomci su manji što je veći broj ispred minusa: −11/3≈−3,67 < −7/2=−3,5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Strategija: pretvori sve razlomke u decimale i usporedi s granicama −3,5 i 0,333.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ]
},
  {id:2,type:"mc",topic:"ostalo",points:1,
  q:"Koliko je trajao teniski meč ako je počeo u 10 sati i 45 minuta ujutro i bez prestanka trajao do 2 sata i 12 minuta poslijepodne?",
  warn:"Pazi: ne oduzimaj minute direktno bez prelaska kroz punu uru (10:45+3:27=14:12, ali to treba provjeriti).",
  opts:["3 sata i 13 minuta","3 sata i 17 minuta","3 sata i 27 minuta","3 sata i 33 minute"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Od 10:45 do 11:00 = 15 min. Od 11:00 do 14:00 = 3h. Od 14:00 do 14:12 = 12 min. Ukupno: 3h 27min.",
  steps:[
    {txt:"Razdvoji interval na jednostavne dijelove:",note:"strategija"},
    {txt:"10:45 → 11:00  =  15 min",note:"do pune ure"},
    {txt:"11:00 → 14:00  =  3 h",note:"pune ure"},
    {txt:"14:00 → 14:12  =  12 min",note:"ostatak"},
    {txt:"Ukupno: 3 h + 15 min + 12 min = 3 h 27 min",final:true},
    {txt:"Provjera: 10:45 + 3:27 = 13:72 = 14:12 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (13 min) — 12−45 krivo (ne pozajme sat). B (17 min) — pogrešan zbroj. D (33 min) — 45+12−24 ili sličan pogrešan izraz.",final:true,note:"diagnostika"},{txt:"Intuicija: 10:45 → 11:00 = 15 min; 11:00 → 14:00 = 3 h; 14:00 → 14:12 = 12 min. Zbroji.",note:"intuicija",final:true},{txt:"Sažetak postupka: Trik: nikad ne oduzimaj direktno sa satima i minutama — dijeli na dijelove do pune ure.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Trik: nikad ne oduzimaj direktno sa satima i minutama — dijeli na dijelove do pune ure.",
      "10:45 → 11:00 = 15 min; 11:00 → 14:00 = 3 h; 14:00 → 14:12 = 12 min. Zbroji.",
      "Alt: 14:12 − 10:45 = 13:72 − 10:45 = 3:27 (pozajmi 1 h = 60 min ako treba).",
      "Greška: 12 − 45 = −33, pa uzmu 33 min umjesto 27 (ne pozajme sat).",
      "Provjera: 10h45min + 3h27min = 10h72min = 11h12min — nije 14:12! ← pazi na zbroj sati: 10+3=13, +1h od minuta=14h ✓","Diagnostic: A) 3 sata i 13 minuta; B) 3 sata i 17 minuta; C) 3 sata i 27 minuta ✓; D) 3 sata i 33 minute.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:3,type:"mc",topic:"al",points:1,
  q:"Kolika je vrijednost izraza [FRAC:0,25 − 7·[FRAC:3|2]|(−[FRAC:1|2])²]?",
  warn:"Pazi: ne zaboravi da je (-1/2)² = +1/4, ne -1/4.",
  opts:["−41","−41/16","41/16","41"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Brojnik: 0,25 − 7·1,5 = 0,25 − 10,5 = -10,25. Nazivnik: (-1/2)² = [FRAC:1|4]. Rezultat: -10,25 / 0,25 = -41.",
  why:["Ključ: imentelj (−1/2)² = +1/4 (kvadrat negativnog broja je POZITIVAN).",
      "Dijeljenje razlomkom = množenje recipročnim: ÷(1/4) = ×4. Dakle −10,25 × 4 = −41.",
      "Greška D (41): zaborave negativni predznak brojnika (0,25−10,5 = −10,25, ne +10,25).",
      "Greška A/D (±41 vs ±41/16): zanemaruju kvadriranje nazivnika — uzimaju (−1/2)²=−1/2 ili 1/2 umjesto 1/4.",
      "Redoslijed operacija: uvijek prvo zagrade i potencije, zatim množenje/dijeljenje, zadnje zbrajanje/oduzimanje.","Diagnostic: A) −41 ✓; B) [FRAC:−41|16]; C) [FRAC:41|16]; D) 41.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"Brojnik: 0,25 − 7 · [FRAC:3|2] = 0,25 − 10,5 = −10,25",note:"brojnik"},
    {txt:"Nazivnik: (−[FRAC:1|2])² = (−0,5)² = 0,25 = [FRAC:1|4]",note:"nazivnik"},
    {txt:"Dijeljenje razlomkom: −10,25 ÷ [FRAC:1|4] = −10,25 · 4 = −41",note:"dijeljenje"},
    {txt:"Rezultat: −41  →  A ✓",final:true,note:"odgovor"},
    {txt:"Provjera: 7·(3/2) = 21/2 = 10,5; 0,25−10,5 = −10,25; −10,25/(1/4) = −41 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (−41/16) — (−1/2)²=1/16 (ne 1/4). C (41/16) — isti problem, krivi predznak. D (41) — zaborave negativni predznak brojnika.",final:true,note:"diagnostika"},{txt:"Intuicija: Dijeljenje razlomkom = množenje recipročnim: ÷(1/4) = ×4. Dakle −10,25 × 4 = −41.",note:"intuicija",final:true},{txt:"Sažetak postupka: Ključ: imentelj (−1/2)² = +1/4 (kvadrat negativnog broja je POZITIVAN).",note:"postupak",final:true}
  ]
},
  {id:4,type:"mc",topic:"geom",points:1,
  q:"Ljestve duljine 2,4 m naslonjene su na zid tako da im je podnožje na udaljenosti 1 m od zida. Na kojoj visini ljestve dodiruju zid?",
  warn:"Pazi: koristi ispravnu formulu (b²=a²+c² umjesto b²=c²−a²).",
  opts:["1,40 m","1,76 m","2,18 m","2,60 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pitagorin poučak: visina² = 2,4² − 1² = 5,76 − 1 = 4,76. visina = √4,76 ≈ 2,18 m.",
  why:["Ljestve tvore pravokutni trokut: podnožje i visina su katete, duljina ljestava je hipotenuza.",
      "Pitagorin poučak: h² + a² = c² → h² = c²−a² = 2,4²−1² = 5,76−1 = 4,76.",
      "√4,76: 2,1²=4,41; 2,2²=4,84 → između 2,1 i 2,2; 2,18²≈4,75 ≈ 4,76 ✓",
      "Greška A (1,40): zbrajaju umjesto oduzimaju: √(1²+2,4²−2,4²) ili krivi postav.",
      "Greška D (2,60): uzimaju 2,4+0,2=2,6 (bez Pitagore) ili h²=c²+a² (zbrajaju umjesto oduzimaju).","Diagnostic: A) 1,40 m; B) 1,76 m; C) 2,18 m ✓; D) 2,60 m.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  steps:[
    {txt:"Ljestve = hipotenuza (c = 2,4 m), podnožje = kateta (a = 1 m)",note:"postav"},
    {txt:"Pitagorin poučak: h² = c² − a² = 2,4² − 1²",note:"Pitagora"},
    {txt:"h² = 5,76 − 1,00 = 4,76",note:"kvadrati"},
    {txt:"h = √4,76 ≈ 2,18 m  →  C ✓",final:true},
    {txt:"Provjera: 1² + 2,18² = 1 + 4,7524 ≈ 5,75 ≈ 2,4² = 5,76 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (1,40) — uzimaju h²=1²+1²=2 (zbrajaju katete). B (1,76) — krivi izraz. D (2,60) — podnožje+nešto bez Pitagore.",final:true,note:"diagnostika"},{txt:"Intuicija: Pitagorin poučak: h² + a² = c² → h² = c²−a² = 2,4²−1² = 5,76−1 = 4,76.",note:"intuicija",final:true},{txt:"Sažetak postupka: Ljestve tvore pravokutni trokut: podnožje i visina su katete, duljina ljestava je hipotenuza.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ]
},
  {id:5,type:"mc",topic:"al",points:1,
  q:"Čemu je jednak izraz (a³ + 2)²?",
  opts:["a⁶ + 4a³ + 4","a⁶ + 2a³ + 4","a⁵ + 4a³ + 4","a⁵ + 2a³ + 4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Kvadrat binoma: (a³+2)² = (a³)² + 2·a³·2 + 2² = a⁶ + 4a³ + 4.",
  why:["(a+b)² = a²+2ab+b²: tri člana — kvadrat prvog + DUPLO umnožak + kvadrat drugog.",
      "A = a³: (a³)² = a³·² = a⁶ (množenje eksponenta). Česta greška: a³·² = a⁵ (zbrajanje umjesto množenja).",
      "2AB = 2·a³·2 = 4a³ (srednji član). B = 2: B² = 4.",
      "Provjera s a=1: (1+2)² = 9 = 1+4+4 ✓. Greška B daje 1+2+4=7 ≠ 9.",
      "Alt: direktno pomnoži (a³+2)(a³+2) = a⁶+2a³+2a³+4 = a⁶+4a³+4.","Diagnostic: A) a⁶ + 4a³ + 4 ✓; B) a⁶ + 2a³ + 4; C) a⁵ + 4a³ + 4; D) a⁵ + 2a³ + 4.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: (a³+2)² ima TRI člana  -  ne zaboravi srednji 2·a³·2 = 4a³!.",
  steps:[
    {txt:"Formula razvitak: (A + B)² = A² + 2AB + B², gdje A = a³, B = 2",note:"formula"},
    {txt:"= (a³)² + 2 · a³ · 2 + 2² = a⁶ + 4a³ + 4",note:"razvijanje"},
    {txt:"→ A ✓",final:true},
    {txt:"Provjera (a=1): (1+2)² = 9;  a⁶+4a³+4 = 1+4+4 = 9 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (a⁶+2a³+4) — srednji član trebao biti 2·a³·2=4a³, ne 2a³. C i D (a⁵) — (a³)² = a⁶, ne a⁵.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: A = a³: (a³)² = a³·² = a⁶ (množenje eksponenta). Česta greška: a³·² = a⁵ (zbrajanje umjesto množenja).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}]
},
  {id:6,type:"mc",topic:"stat",points:1,
  q:"U Republici Hrvatskoj 2004. godine rođeno je 20 875 dječaka. Godine 2005. rođeno je 4,19% više dječaka u odnosu na 2004. godinu. Koliko je dječaka rođeno 2005. godine?",
  warn:"Pazi: ne dodavaj 4,19 direktno (umjesto 4,19% tj.",
  opts:["20 964","21 750","24 875","29 626"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"20 875 · (1 + 4,19/100) = 20 875 · 1,0419 = 20 875 + 874,66 ≈ 21 750.",
  why:["4,19% više: novi broj = stari × (1 + 4,19/100) = 20875 × 1,0419.",
      "Brži izračun: 4% od 20875 = 835; 0,19% od 20875 ≈ 40; ukupno ≈ 875 → 20875+875=21750.",
      "Provjera: 21750/20875 = 1,0419 = 1 + 4,19/100 ✓",
      "Greška: uzeti 4,19% od 21750 (novo) umjesto od 20875 (staro) — postotak uvijek od BAZE.",
      "Greška C: zbuniti 4,19% s 19% → 20875×1,19 ≈ 24841 ≈ 24875 (zaokrugljeno).","Diagnostic: A) 20 964; B) 21 750 ✓; C) 24 875; D) 29 626.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"2004.: 20 875 dječaka  (baza)",note:"postav"},
    {txt:"Povećanje za 4,19%: 20 875 × 0,0419 ≈ 875",note:"iznos povećanja"},
    {txt:"2005.: 20 875 + 875 = 21 750  →  B ✓",final:true},
    {txt:"Provjera: 20 875 × 1,0419 = 20 875 + 875 = 21 750 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (20 964) — rabe 4% umjesto 4,19% (zaokruže previše). C (24 875) — dodaju 4,19% od pogrešne baze ili griješe u faktoru. D (29 626) — množe s 1,419 (zbrajaju 1 i postotak krivo).",final:true,note:"diagnostika"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: Brži izračun: 4% od 20875 = 835; 0,19% od 20875 ≈ 40; ukupno ≈ 875 → 20875+875=21750.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}]
},
  {id:7,img:true,type:"mc",topic:"lin",points:1,
  q:"Koja tablica pripada funkciji f(x) = 2x − 3?",
  warn:"Pazi: provjeri sve jednu vrijednost i zaključiti  -  možda je slučajno točna.",
  opts:["f(-1)=-5, f(2)=1, f(3)=3","f(-1)=-5, f(2)=1, f(3)=-3","f(-1)=-3, f(2)=-1, f(3)=5","f(-1)=3, f(2)=-1, f(3)=-5"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"f(-1)=2·(-1)-3=-5, f(2)=2·2-3=1, f(3)=2·3-3=3. Odgovor A.",
  steps:[
    {txt:"Uvrsti sve vrijednosti x u f(x) = 2x − 3:",note:"strategija"},
    {txt:"f(−1) = 2·(−1) − 3 = −5;  f(2) = 2·2 − 3 = 1;  f(3) = 2·3 − 3 = 3",note:"izračun"},
    {txt:"Tražimo tablicu s vrijednostima −5, 1, 3  →  Tablica A ✓",final:true},
    {txt:"Provjera: f(3) = 3 ✓ je razlikovna vrijednost (B ima −3, C ima 5, D ima −5)",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B — f(3)=−3 ✗ (−3 bi zahtijevalo f(3)=2·3−3=−3, ali 2·3=6, 6−3=3). C — f(−1)=−3 ✗ (2·(−1)−3=−5). D — f(−1)=3 ✗ i sve negacije krivo.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: f(3) = 2·3−3 = 6−3 = 3 (ne −3). Upravo ova vrijednost razdvaja A od B.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Metoda supstitucije: ubaci x=−1, x=2, x=3 u formulu i pogledaj koja tablica odgovara.",
      "f(3) = 2·3−3 = 6−3 = 3 (ne −3). Upravo ova vrijednost razdvaja A od B.",
      "f(−1) = 2·(−1)−3 = −2−3 = −5 (ne −3 ni 3). Ovo isključuje C i D.",
      "Strategija: dovoljno provjeriti jednu vrijednost koja razlikuje opcije — ovdje f(3) isključuje B.",
      "Tablica A ima sve tri vrijednosti točne: −5, 1, 3 ✓","Diagnostic: A) f(-1)=-5, f(2)=1, f(3)=3 ✓; B) f(-1)=-5, f(2)=1, f(3)=-3; C) f(-1)=-3, f(2)=-1, f(3)=5; D) f(-1)=3, f(2)=-1, f(3)=-5.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:8,type:"mc",topic:"br",points:1,
  q:"Koji od navedenih brojeva, zaokruživanjem na dvije decimale, daje broj 5,78?",
  warn:"Pazi: gledaj ispravnu decimalu ili obrnuto primijeniti pravilo.",
  opts:["5,7699","5,7731","5,7791","5,7866"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"5,7791 → 3. decimala=9≥5 → zaokruži 2. decimalu gore: 5,78 ✓.",
  steps:[
    {txt:"Zaokruživanje na 2 decimale: gleda se 3. decimala.",note:"pravilo"},
    {txt:"A: 5,7699 → 3. dec = 9 ≥ 5 → zaokruži gore → 5,77 ✗",note:"opcija A"},
    {txt:"B: 5,7731 → 3. dec = 3 < 5 → ostavi → 5,77 ✗",note:"opcija B"},
    {txt:"C: 5,7791 → 3. dec = 9 ≥ 5 → zaokruži gore → 5,78 ✓",final:true},
    {txt:"D: 5,7866 → 3. dec = 6 ≥ 5 → zaokruži gore → 5,79 ✗",note:"opcija D"},
    {txt:"Provjera C: 5,779... → 3. dec = 9 ≥ 5 → 5,78 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A → 5,77 (premalo). B → 5,77 (premalo, 3<5). D → 5,79 (previše, 6≥5 ali već 5,78+).",final:true,note:"diagnostika"},{txt:"Intuicija: Tražimo broj koji zaokruži TOČNO na 5,78 → 3. decimala mora biti ≥5 i 2. decimala mora biti 7 (ne 8).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 3. decimala ≥ 5 → zaokruži 2. decimalu gore; < 5 → ostavi.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: 3. decimala ≥ 5 → zaokruži 2. decimalu gore; < 5 → ostavi.",
      "Tražimo broj koji zaokruži TOČNO na 5,78 → 3. decimala mora biti ≥5 i 2. decimala mora biti 7 (ne 8).",
      "C = 5,7791: 3. dec = 9 → 5,77+1 = 5,78 ✓. Jedini koji daje 5,78.",
      "Greška A: 5,7699 → izgleda blizu 5,78, ali 3. dec = 9 → 5,77 (jer 2. dec = 6, ne 7!).",
      "Greška D: 5,7866 → 3. dec = 6 ≥ 5 → 5,79 (2. dec = 7 → postaje 8 pri zaokruživanju).","Diagnostic: A) 5,7699; B) 5,7731; C) 5,7791 ✓; D) 5,7866.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:9,img:true,type:"mc",topic:"geom",points:1,
  q:"Kocka ima stranicu 6 cm. Kvadar ima dimenzije 9×6×4 cm. Kocka i kvadar sa slike imaju:",
  intermediates:[54, 24, 36, 114, 228, 216],
  opts:["isti obujam i isto oplošje","isti obujam i različito oplošje","različiti obujam i isto oplošje","različiti obujam i različito oplošje"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Vkocke=6³=216 cm³, Vkvadra=9·6·4=216 cm³ (isti). Okocke=6·36=216 cm², Okvadra=2·(54+36+24)=228 cm² (različito).",
  steps:[
    {txt:"Obujam kocke:  V = 6³ = 216 cm³",note:"obujam kocke"},
    {txt:"Obujam kvadra: V = 9 · 6 · 4 = 216 cm³  →  isti ✓",note:"obujam kvadra"},
    {txt:"Oplošje kocke:  O = 6 · 6² = 216 cm²",note:"oplošje kocke"},
    {txt:"Oplošje kvadra: O = 2(9·6 + 9·4 + 6·4) = 2(54+36+24) = 2·114 = 228 cm²  →  različito ✓",note:"oplošje kvadra"},
    {txt:"→ Isti obujam, različito oplošje  →  B ✓",final:true},
    {txt:"Provjera: 216 = 216 ✓ (obujmi);  216 ≠ 228 ✓ (oplošja)",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A — ne provjere oba — pretpostave da isti obujam implicira isto oplošje (krivo!). C — zamijeniti obujam i oplošje u zaključku. D — ne izračunaju točno.",final:true,note:"diagnostika"},{txt:"Intuicija: Kocka 6³ = 216; kvadar 9·6·4 = 216 — isti! To je ključna 'zamka' u zadatku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Obujam = V = a³ za kocku; V = a·b·c za kvadar. Isti obujam ne znači isto oplošje!",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Obujam = V = a³ za kocku; V = a·b·c za kvadar. Isti obujam ne znači isto oplošje!",
      "Kocka 6³ = 216; kvadar 9·6·4 = 216 — isti! To je ključna 'zamka' u zadatku.",
      "Oplošje kocke: 6 stranica × 36 cm² = 216 cm². Oplošje kvadra: 2(54+36+24) = 228 cm².",
      "Matematički: od svih kutijastih oblika s istim obujmom, kocka ima NAJMANJE oplošje.",
      "Greška: pretpostaviti da isti obujam → isto oplošje. To vrijedi samo za sukladne likove!","Diagnostic: A) isti obujam i isto oplošj*; B) isti obujam i različito o* ✓; C) različiti obujam i isto o*; D) različiti obujam i različ*.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: jednaki obujmi NE znače jednako oplošje!."},
  {id:10,type:"mc",topic:"al",points:1,
  q:"Koji je rezultat sređivanja izraza x(5 − 2x) + 2x² − 9?",
  warn:"Pazi: prepoznaj da se kvadratni članovi pokrate, pa pisati 4x²+5x-9.",
  opts:["2x² + 3x − 9","4x² + 5x − 9","3x − 9","5x − 9"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"5x − 2x² + 2x² − 9 = 5x − 9. Kvadratni članovi se pokrate.",
  steps:[
    {txt:"Razvijamo: x(5 − 2x) = 5x − 2x²",note:"distributivnost"},
    {txt:"Cijeli izraz: 5x − 2x² + 2x² − 9",note:"zamjena"},
    {txt:"Kraćenje: −2x² + 2x² = 0  (kvadratni se pokrate!)",note:"kraćenje"},
    {txt:"Rezultat: 5x − 9  →  D ✓",final:true,note:"odgovor"},
    {txt:"Provjera (x=2): x(5−2x)+2x²−9 = 2(1)+8−9 = 1;  5·2−9 = 1 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (2x²+3x−9) — ne pokrate −2x²+2x², ostavi i krivo razvije. B (4x²+5x−9) — razviju −2x² s krivim predznakom. C (3x−9) — izgube jedan x pri razvijanju.",final:true,note:"diagnostika"},{txt:"Intuicija: x(5−2x) = 5x−2x² (distributivnost: svaki član u zagradi množi s x).",note:"intuicija",final:true},{txt:"Sažetak postupka: Ključ: −2x² iz razvijanja i +2x² iz izraza se pokrate → rezultat je linearan (bez x²)!",note:"postupak",final:true}
  ],
  why:["Ključ: −2x² iz razvijanja i +2x² iz izraza se pokrate → rezultat je linearan (bez x²)!",
      "x(5−2x) = 5x−2x² (distributivnost: svaki član u zagradi množi s x).",
      "−2x²+2x² = 0: ovo je 'namještena' podjela zadatka — kvadratni dio otpada.",
      "Provjera s x=2: x(5−2x)+2x²−9 = 2·1+8−9 = 1; 5x−9 = 10−9 = 1 ✓",
      "Greška A: 2x²+3x−9 → provjera x=2: 8+6−9=5 ≠ 1 ✗. Greška C: 3x−9 → 6−9=−3 ≠ 1 ✗.","Diagnostic: A) 2x² + 3x − 9; B) 4x² + 5x − 9; C) 3x − 9; D) 5x − 9 ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:11,img:true,type:"mc",topic:"kv",points:1,
  q:"Luk na slici ima jednadžbu y = −0,3x² + 1,8x, gdje je y udaljenost točke od x-osi u metrima. Kolika je maksimalna visina luka?",
  warn:"Pazi: ne zaboravi da a<0 znači maksimum (ne minimum) ili krivo izračunati tjeme.",
  opts:["1,7 m","2,3 m","2,7 m","3,3 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Maximum kvadratne funkcije: yₘₐₓ = (4ac−b²)/(4a) = (0-1,8²)/(4·(-0,3)) = -3,24/(-1,2) = 2,7 m.",
  why:["Maksimum kvadratne funkcije s a<0 je u tjemenu: x_T = −b/(2a).",
      "b=1,8, a=−0,3: x_T = −1,8/(2·(−0,3)) = −1,8/(−0,6) = +3. Pazi: minus i minus daju plus!",
      "y_max = f(3) = −0,3·9 + 1,8·3 = −2,7 + 5,4 = 2,7 m.",
      "Alt: y = −0,3(x²−6x) = −0,3(x−3)²+2,7 (kanonski oblik) → max=2,7 direktno.",
      "Greška: uzimati proizvoljni x (npr. x=2 ili x=1) — to nije tjeme, daje manju visinu.","Diagnostic: A) 1,7 m; B) 2,3 m; C) 2,7 m ✓; D) 3,3 m.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."],
  steps:[
    {txt:"Kvadratna funkcija a=−0,3<0 → parabola okrenuta prema dolje → maksimum u tjemenu",note:"analiza"},
    {txt:"x tjemena: x_T = −[FRAC:b|2a] = −[FRAC:1,8|2·(−0,3)] = −[FRAC:1,8|−0,6] = 3",note:"x-koordinata tjemena"},
    {txt:"y_max = −0,3·3² + 1,8·3 = −0,3·9 + 5,4 = −2,7 + 5,4 = 2,7 m",note:"y-koordinata tjemena"},
    {txt:"Maksimalna visina luka = 2,7 m  →  C ✓",final:true},
    {txt:"Provjera: y(3) = −0,3·9+1,8·3 = −2,7+5,4 = 2,7 m ✓; y(2) = −0,3·4+3,6 = 2,4 < 2,7 ✓ (nije tjeme)",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (1,7 m) — uzimaju x=1: y(1)=−0,3+1,8=1,5 ≈ 1,7. B (2,3 m) — uzimaju x=2: y(2)=2,4 ≈ 2,3. D (3,3 m) — griješe u x_T ili predznaku koeficijenta.",final:true,note:"diagnostika"},{txt:"Intuicija: b=1,8, a=−0,3: x_T = −1,8/(2·(−0,3)) = −1,8/(−0,6) = +3. Pazi: minus i minus daju plus!",note:"intuicija",final:true},{txt:"Sažetak postupka: Maksimum kvadratne funkcije s a<0 je u tjemenu: x_T = −b/(2a).",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ]
},
  {id:12,type:"mc",topic:"al",points:1,
  q:"Ako je kx + l = 0 i x ≠ 0, čemu je jednako k?",
  opts:["k = −l + x","k = −l − x","k = −x/l","k = −l/x"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"kx = −l → k = −l/x.",
  steps:[
    {txt:"Jednadžba: kx + l = 0",note:"postav"},
    {txt:"Izoliramo kx: kx = −l",note:"premještanje l"},
    {txt:"Dijelimo s x (x ≠ 0): k = [FRAC:−l|x]  →  D ✓",final:true},
    {txt:"Provjera: uvrstimo k=−l/x: (−l/x)·x + l = −l + l = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (k=−l+x) — zbrajaju x umjesto dijele. B (k=−l−x) — oduzimaju x. C (k=−x/l) — zamijenili x i l u nazivniku (obrnuta formula).",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: kx = −l → k = −l/x. Jedino dijeljenje s x (ne zbrajanje, ne oduzimanje).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Izražavanje nepoznanice: premjesti sve ostale na drugu stranu, podijeli s koeficijentom.",
      "kx = −l → k = −l/x. Jedino dijeljenje s x (ne zbrajanje, ne oduzimanje).",
      "PAŽNJA: uvjet x≠0 je neophodan — inače dijeljenje s nulom nije definirano.",
      "Provjera: k=−l/x uvrsti u kx+l = (−l/x)·x+l = −l+l = 0 ✓",
      "Greška C: k=−x/l — pogriješili koji je 'koeficijent' uz k (to je x, ne l).","Diagnostic: A) k = −l + x; B) k = −l − x; C) k = [FRAC:−x|l]; D) k = [FRAC:−l|x] ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: k = −l/x, ne −x/l  -  l ide u brojnik!."},
  {id:13,type:"mc",topic:"al",points:2,
  q:"U dječjoj kasici bilo je ukupno 132 kune u kovanicama od 5 kn, 2 kn i 50 lipa. Kovanica od 2 kn bilo je dvostruko više nego od 5 kn, a od 50 lipa tri puta više nego od 2 kn. Koliko je kovanica od 2 kune?",
  warn:"Pazi: ne pomiješaj koja kovanica je x i koja je y, ili pogrešno izračunati vrijednost 50 lipa (= 0,5 kn.",
  opts:["22","33","44","55"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Neka je x = br. kovanica od 5kn, y=2x (od 2kn), z=3y=6x (od 50lipa). 5x+2·2x+0,5·6x=132 → 12x=264 → x=22. y=2·11=22.",
  why:["Pažljivo definiraj varijablu: a = br. kovanica od 5 kn (ne od 2 kn!) — jer je jednostavnija relacija.",
      "Omjeri: kovanica od 2 kn = 2a (dvostruko više od 5 kn); od 50 lipa = 6a (3× više od 2 kn).",
      "Jednadžba u kunama: 5a + 2·2a + 0,50·6a = 132. Svaka kovanica pomnožena s VRIJEDNOŠĆU!",
      "Provjera: 11×5kn=55kn, 22×2kn=44kn, 66×0,5kn=33kn; 55+44+33=132 ✓",
      "Zadatak pita za kovanice od 2 kn (= 2a = 22), ne od 5 kn (= a = 11). Pažljivo čitaj!","Diagnostic: A) 22 ✓; B) 33; C) 44; D) 55.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Varijabla: a = broj kovanica od 5 kn",note:"postav"},
    {txt:"2 kn: dvostruko više → 2a;  50 lipa: tri puta više od 2 kn → 3·2a = 6a",note:"relacije"},
    {txt:"Jednadžba: 5·a + 2·(2a) + 0,5·(6a) = 132  →  5a+4a+3a = 132",note:"jednadžba"},
    {txt:"12a = 132  →  a = 11",note:"rješenje"},
    {txt:"Kovanica od 2 kn: 2a = 22  →  A ✓",final:true},
    {txt:"Provjera: 11·5 + 22·2 + 66·0,5 = 55 + 44 + 33 = 132 kn ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A≠D jer zadatak pita za 2 kn (2a=22), ne 5 kn (a=11). C (44) — uzimaju 4a umjesto 2a. D (55) — uzimaju 5·a = 55 (kune, ne kovanice).",final:true,note:"diagnostika"},{txt:"Intuicija: Omjeri: kovanica od 2 kn = 2a (dvostruko više od 5 kn); od 50 lipa = 6a (3× više od 2 kn).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pažljivo definiraj varijablu: a = br. kovanica od 5 kn (ne od 2 kn!) — jer je jednostavnija relacija.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ]
},
  {id:14,type:"mc",topic:"al",points:2,
  q:"Koji je rezultat dijeljenja ([FRAC:3a−b|b²] + [FRAC:1|b]) : [FRAC:6a|b], za a ≠ 0, b ≠ 0?",
  opts:["2/a","2/b","1/2a","1/2b"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Brojnik: (a²−b²)/b. Nazivnik: (b+a³)/(a³b). Dijeljenjem i sređivanjem dobivamo 1/(2b).",ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Izraz: ([FRAC:3a−b|b²] + [FRAC:1|b]) : [FRAC:6a|b]",note:"postav"},
    {txt:"Prilagodimo [FRAC:1|b] na nazivnik b²: [FRAC:1|b] = [FRAC:b|b²]",note:"zajednički nazivnik"},
    {txt:"Zbrojimo: [FRAC:3a−b|b²] + [FRAC:b|b²] = [FRAC:3a−b+b|b²] = [FRAC:3a|b²]",note:"zbroj razlomaka"},
    {txt:"Dijeljenje = množenje recipročnim: [FRAC:3a|b²] · [FRAC:b|6a]",note:"dijeljenje→množenje"},
    {txt:"= [FRAC:3ab|6ab²] = [FRAC:1|2b]  →  D ✓",final:true},
    {txt:"Provjera (a=1,b=1): ([FRAC:2|1]+[FRAC:1|1]):[FRAC:6|1] = 3:6 = [FRAC:1|2] = [FRAC:1|2b] ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (2/a) — ne pokrate a. B (2/b) — ne pokrate dobro b. C (1/(2a)) — zamijene a i b u nazivniku. Ispravno: 3ab/(6ab²) = 1/(2b).",final:true,note:"diagnostika"},{txt:"Intuicija: 1/b = b/b² (proširivanje razlomka). Tada: (3a−b+b)/b² = 3a/b² (b-ovi u brojniku se pokrate).",note:"intuicija",final:true},{txt:"Sažetak postupka: Korak 1: svedi razlomke na ZN = b² kako bi zbrojio. Korak 2: dijeljenje = množenje recipročnim.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Korak 1: svedi razlomke na ZN = b² kako bi zbrojio. Korak 2: dijeljenje = množenje recipročnim.",
      "1/b = b/b² (proširivanje razlomka). Tada: (3a−b+b)/b² = 3a/b² (b-ovi u brojniku se pokrate).",
      "3a/b² · b/(6a): krate se 3a s 6a → 1/2; i b s b² → 1/b. Rezultat: 1/(2b).",
      "Provjera a=1,b=2: (3−2)/4 + 1/2 = [FRAC:1|4]+2/4 = 3/4; 6/2 = 3; 3/4 ÷ 3 = [FRAC:1|4] = 1/(2·2) ✓",
      "Greška: zadržati b u prvom razlomku zbrajanja i ne kraćiti → previše članova zaostane.","Diagnostic: A) [FRAC:2|a]; B) [FRAC:2|b]; C) [FRAC:1|2a]; D) [FRAC:1|2b] ✓.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: prepoznaj razliku kvadrata a²−b² = (a−b)(a+b) u brojevniku!."},
  {id:15,type:"mc",topic:"geom",points:2,
  q:"Pod površine 15 m² treba popločati kvadratnim pločicama stranice 32 cm. Pločice se prodaju u paketima od 12 komada. Koliko najmanje paketa treba kupiti?",
  opts:["11","12","13","14"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Površina pločice = 0,32² = 0,1024 m². Potrebno pločica: 15/0,1024 ≈ 146,5 → 147. Paketa: 147/12 ≈ 12,25 → 13.",
  why:["Zaokruživanje GORE (⌈⌉): pri nepotpunim pločicama ili paketima uvijek kupuješ više.",
      "0,32² = 0,1024 m²; 15/0,1024 = 146,484 → trebamo 147 cijelih pločica (ne 146!).",
      "147/12 = 12,25 → trebamo 13 paketa (12 nije dovoljno: 12×12=144 < 147).",
      "Greška B: 146,48/12 ≈ 12,2 → zaokruže na 12, ne shvaćajući da to daje samo 144 pločice.",
      "Ključna ideja: nedovoljno pločica = pod nije pokriven = pogreška → uvijek zaokruži gore.","Diagnostic: A) 11; B) 12; C) 13 ✓; D) 14.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: zaokruži NAVIŠE  -  i broj pločica i broj paketa!.",ex:"MC 2-bodovni iz područja: geom. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Površina poda: 15 m²; stranica pločice: 32 cm = 0,32 m",note:"postav"},
    {txt:"Površina jedne pločice: 0,32² = 0,1024 m²",note:"površina pločice"},
    {txt:"Minimalni broj pločica: ⌈15 / 0,1024⌉ = ⌈146,48⌉ = 147 pločica",note:"broj pločica"},
    {txt:"Broj paketa (12 po paketu): ⌈147 / 12⌉ = ⌈12,25⌉ = 13 paketa  →  C ✓",final:true},
    {txt:"Provjera: 13 × 12 = 156 pločica ≥ 147 ✓;  12 × 12 = 144 < 147 (premalo) ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (12) — 12×12=144 pločica < 147 (nedovoljno!). A (11) — još manje. D (14) — previše, nepotrebno. C je minimum koji pokriva potrebu.",final:true,note:"diagnostika"},{txt:"Intuicija: 0,32² = 0,1024 m²; 15/0,1024 = 146,484 → trebamo 147 cijelih pločica (ne 146!).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zaokruživanje GORE (⌈⌉): pri nepotpunim pločicama ili paketima uvijek kupuješ više.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ]
},
  {id:16,type:"mc",topic:"al",points:2,
  q:"Cijena ulaznice je za 10 kn viša na dan igranja utakmice nego u pretprodaji. Na dan igranja utakmice za 600 kn može se kupiti 5 ulaznica manje nego u pretprodaji. Kolika je cijena ulaznice na dan utakmice?",
  warn:"Pazi: ne zamijeniti c i cp ili pogrešno postaviti razliku (600/c − 600/cp = 5 bi bio krivi redoslijed).",
  opts:["40 kn","50 kn","60 kn","70 kn"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"c = cp+10, 600/cp − 600/c = 5. Uvrstimo cp=c-10: 600c-600(c-10) = 5c(c-10) → c²-10c-1200=0 → c=40 kn.",
  why:["Dva uvjeta: (1) cijena na dan = pretprodaja + 10; (2) za 600 kn kupiš 5 manje ulaznica na dan.",
      "Broj ulaznica = novac/cijena: 600/p i 600/(p+10). Razlika tih dva broja = 5.",
      "Kvadratna jednadžba: p²+10p−1200=0; D=100+4800=4900=70². p=(−10+70)/2=30.",
      "Negativno rješenje p=(−10−70)/2=−40 nema smisla (cijena nije negativna).",
      "Provjera: 600/30=20 ulaznica u pretprodaji; 600/40=15 na dan; 20−15=5 ✓","Diagnostic: A) 40 kn ✓; B) 50 kn; C) 60 kn; D) 70 kn.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Neka je p = cijena u pretprodaji (kn); cijena na dan = p + 10",note:"postav"},
    {txt:"Za 600 kn: u pretprodaji 600/p ulaznica; na dan 600/(p+10) ulaznica",note:"broj ulaznica"},
    {txt:"Razlika = 5: [FRAC:600|p] − [FRAC:600|p+10] = 5",note:"jednadžba"},
    {txt:"Množimo s p(p+10): 600(p+10) − 600p = 5p(p+10)",note:"množenje"},
    {txt:"6000 = 5p² + 50p  →  p² + 10p − 1200 = 0",note:"kvadratna jednadžba"},
    {txt:"D = 100 + 4800 = 4900; p = [FRAC:−10 + 70|2] = 30 kn  (negativno rješenje odbacujemo)",note:"rješenje"},
    {txt:"Cijena na dan = p + 10 = 30 + 10 = 40 kn  →  A ✓",final:true},
    {txt:"Provjera: 600/30=20 ulaz. (pretprodaja); 600/40=15 ulaz. (dan); razlika=5 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (50) — uzimaju samo razliku cijena=10, ne uvjet broja ulaznica. C (60) — griješe u postavljanju jednadžbe. D (70) — krivo rješavaju kvadratnu jednadžbu.",final:true,note:"diagnostika"},{txt:"Intuicija: Broj ulaznica = novac/cijena: 600/p i 600/(p+10). Razlika tih dva broja = 5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Dva uvjeta: (1) cijena na dan = pretprodaja + 10; (2) za 600 kn kupiš 5 manje ulaznica na dan.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ]
},
  {id:17,type:"num",topic:"stat",points:1,
  q:"Izračunajte broj od kojega 11% iznosi 35,2.",
  warn:"Pazi: ne računati 11% od 35,2 umjesto tražiti od kojeg broja 11% iznosi 35,2.",
  sol:{ans:"320",alt:["320,0","odgovor","rezultat"]},
  steps:[
    {txt:"Postav: [FRAC:11|100] · x = 35,2",note:"postav"},
    {txt:"Izoliramo x: x = 35,2 · [FRAC:100|11]",note:"izolacija x"},
    {txt:"x = [FRAC:3520|11] = 320",note:"račun"},
    {txt:"→ x = 320",final:true},
    {txt:"Provjera: 11% od 320 = 320 · 0,11 = 35,2 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: Preuredi: osnova = dio · (100/postotak) = 35,2 · (100/11) = 320.",note:"intuicija",final:true},{txt:"Točan odgovor: 320 ✓",note:"odgovor",final:true}],
  exp:"Iz postotnog računa: x = P·100/p = 35,2·100/11 = 320.",
  why:["Postotni račun: dio = (postotak/100) · osnova — ovdje tražimo osnovu.",
      "Preuredi: osnova = dio · (100/postotak) = 35,2 · (100/11) = 320.",
      "Intuicija: 10% od 320 = 32; 1% od 320 = 3,2; 11% = 32 + 3,2 = 35,2 ✓",
      "Greška: računati 11% od 35,2 = 3,872 — to je 11% od pogrešnog broja (zamijenili osnovu i dio).",
      "Alt provjera: 35,2 / 0,11 = 320 (dijeljenje postotkom u decimalu daje osnovu).","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:18,type:"num",topic:"mat",points:1,
  q:"U sustavu jednadžbi [SYS:x = [FRAC:3|5] + 2y|x = −[FRAC:2|5] + 7y] izračunajte nepoznanicu y.",
  warn:"Pazi: prepoznaj da su lijeve strane iste i pokušati eliminirati drugu varijablu.",
  formulaLabel:"Sustav jednadžbi",
  sol:{ans:"[FRAC:1|5]",
    solFormula:{frac:[["1","5"]]},alt:["0,2","1/5","0,2"],
    steps:[
    {txt:"Lijeve strane sustava su jednake → izjednačimo desne:"},
    {txt:"3/5 + 2y = -2/5 + 7y"},
    {txt:"3/5 + 2/5 = 7y − 2y"},
    {txt:"1 = 5y"},
    {txt:"y = [FRAC:1|5]",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Zbroj razlomaka: 3/5 + 2/5 = 5/5 = 1. Desna strana postaje 1 = 5y.",note:"intuicija",final:true},{txt:"Sažetak postupka: Ključna opažaj: obje jednadžbe imaju x s lijeve strane — direktno ih izjednačimo (supstitucija).",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:1|5] ✓",note:"odgovor",final:true}]},
  steps:[
    {txt:"Jednadžba 1: x = [FRAC:3|5] + 2y;  Jednadžba 2: x = −[FRAC:2|5] + 7y",note:"postav"},
    {txt:"Obje jednadžbe daju x → izjednačimo desne strane:",note:"supstitucija"},
    {txt:"[FRAC:3|5] + 2y = −[FRAC:2|5] + 7y",note:"izjednačavanje"},
    {txt:"[FRAC:3|5] + [FRAC:2|5] = 7y − 2y  →  1 = 5y",note:"grupiranje"},
    {txt:"y = [FRAC:1|5]",final:true},
    {txt:"Provjera: x = [FRAC:3|5] + 2·[FRAC:1|5] = [FRAC:3|5]+[FRAC:2|5] = 1; x = −[FRAC:2|5]+7·[FRAC:1|5] = [FRAC:5|5] = 1 ✓",final:true,note:"verifikacija"}
  ],
  exp:"Izjednačimo desne strane: 3/5 + 2y = -2/5 + 7y → 1 = 5y → y = 1/5.",
  why:["Ključna opažaj: obje jednadžbe imaju x s lijeve strane — direktno ih izjednačimo (supstitucija).",
      "Zbroj razlomaka: 3/5 + 2/5 = 5/5 = 1. Desna strana postaje 1 = 5y.",
      "Alt: oduzmi jednadžbu 2 od jednadžbe 1: 0 = (3/5+2/5) + (2−7)y = 1 − 5y → y = 1/5.",
      "Greška: pokušati eliminirati x Gaussovom eliminacijom — radi, ali nepotrebno komplicira.",
      "Provjera: za y=1/5, obje jednadžbe daju x=1 ✓ — konzistentni rezultat.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:19,type:"num",topic:"fin",points:1,
  q:"Omjer brašna i šećera u kolaču je 5:2. U kolač smo stavili 150 g šećera. Koliko grama brašna?",
  warn:"Pazi: ne zamijeniti omjer (uzeti 2/5 umjesto 5/2).",
  sol:{ans:"375",alt:["375 g","375,0"]},
  steps:[
    {txt:"Omjer brašno:šećer = 5:2 → šećer = 2 dijela = 150 g",note:"postav"},
    {txt:"1 dio = [FRAC:150|2] = 75 g",note:"jedinični dio"},
    {txt:"Brašno = 5 dijelova = 5 · 75 = 375 g",final:true},
    {txt:"Alt: [FRAC:brašno|150] = [FRAC:5|2] → brašno = 150 · [FRAC:5|2] = 375 g",note:"alt metoda"},
    {txt:"Provjera: 375 : 150 = 2,5 = [FRAC:5|2] ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Jedinični dio: šećer = 2 dijela = 150 g → 1 dio = 75 g → brašno = 5 · 75 = 375 g.",note:"intuicija",final:true},{txt:"Točan odgovor: 375 ✓",note:"odgovor",final:true}],
  exp:"Iz razmjera 5:2 → brašno = šećer · 5/2 = 150 · 2,5 = 375 g.",
  why:["Omjer 5:2 znači: na svaka 2 dijela šećera dolazi 5 dijelova brašna.",
      "Jedinični dio: šećer = 2 dijela = 150 g → 1 dio = 75 g → brašno = 5 · 75 = 375 g.",
      "Alt: brašno/šećer = 5/2 → brašno = šećer · 5/2 = 150 · 5/2 = 375 g (proporcionalno).",
      "Greška: zamijeniti omjer naopako → brašno = 150 · 2/5 = 60 g (besmisleno malo).",
      "Intuicija: 1 dio šećera = 75 g; brašna ima 2,5× više → 150 · 2,5 = 375 g ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:20,type:"num",topic:"br",points:1,
  q:"Zadani su brojevi a = 2, b = [FRAC:2|3] i c = [FRAC:1|2]. Odredite broj H = [FRAC:3|[FRAC:1|a]+[FRAC:1|b]+[FRAC:1|c]].",
  warn:"Pazi: ne koristiti aritmetičku sredinu (a+b+c)/3 umjesto harmonijske.",
  formulaLabel:"Formula",
  sol:{ans:"[FRAC:3|4]",
    solFormula:{frac:[["3","4"]]},alt:["0,75","3/4","0,75"],
    steps:[
    {txt:"1/a = 1/2"},
    {txt:"1/b = 3/2"},
    {txt:"1/c = 2"},
    {txt:"1/a + 1/b + 1/c = 1/2 + 3/2 + 2 = 4"},
    {txt:"H = [FRAC:3|4]",final:true}
  ,{txt:"Brojčana provjera: rezultat realan i konzistentan ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Recipročna vrijednost razlomka: 1/(2/3) = 3/2; 1/(1/2) = 2 (dijeljenje = množenje recipročnim).",note:"intuicija",final:true},{txt:"Sažetak postupka: Harmonijska sredina: H = n / Σ(1/xᵢ) = 3 / (1/a + 1/b + 1/c).",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:3|4] ✓",note:"odgovor",final:true}]},
  steps:[
    {txt:"Izračunaj recipročne vrijednosti: [FRAC:1|a] = [FRAC:1|2];  [FRAC:1|b] = [FRAC:1|[FRAC:2|3]] = [FRAC:3|2];  [FRAC:1|c] = [FRAC:1|[FRAC:1|2]] = 2",note:"recipročne vrijednosti"},
    {txt:"Zbroj: [FRAC:1|2] + [FRAC:3|2] + [FRAC:4|2] = [FRAC:8|2] = 4",note:"zajednički nazivnik 2"},
    {txt:"H = [FRAC:3|4]",final:true},
    {txt:"Provjera: H = 3/4 < (a+b+c)/3 = (2+2/3+1/2)/3 ≈ 1,06 — harmonijska ≤ aritmetička ✓",final:true,note:"verifikacija"}
  ],
  exp:"1/2 + 3/2 + 2 = 4. H = 3/4.",
  why:["Harmonijska sredina: H = n / Σ(1/xᵢ) = 3 / (1/a + 1/b + 1/c).",
      "Recipročna vrijednost razlomka: 1/(2/3) = 3/2; 1/(1/2) = 2 (dijeljenje = množenje recipročnim).",
      "Zbroj recipročnih: 1/2 + 3/2 + 2 = 1/2 + 3/2 + 4/2 = 8/2 = 4.",
      "Greška: koristiti aritmetičku sredinu (a+b+c)/3 = (2+2/3+1/2)/3 ≠ 3/4 — zadatak traži harmonijsku!",
      "Teoremski: harmonijska sredina uvijek ≤ aritmetička (H≤A) — H=3/4 < A≈1,06 ✓","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
},
  {id:21,img:true,type:"proof",img:true,topic:"kv",points:1,
  graphType:"parabola",
  graphRef:{vertex:[0,1],pts:[[-1,2],[1,2]]},
  graphRange:{xMin:-3,xMax:3,yMin:-1,yMax:6},
  q:"Nacrtajte graf funkcije f(x) = x² + 1.",
  warn:"Pazi: ne nacrtati parabolu s krivim tjemenom ili pogrešnim smjerom otvaranja.",
  sol:{ex:"Tjeme: T(0,1)  -  jer a=1, b=0 → xT=0, yT=1. Nema sjecišta s osi x (x²+1>0 za sve x). Os y: točka (0,1)=tjeme. Dvije pomoćne točke: f(±1)=2 → T₁(-1,2), T₂(1,2). Parabola okrenuta gore."},
  steps:[
    {txt:"Tip: kvadratna funkcija f(x)=x²+1, a=1>0 → parabola okrenuta prema gore",note:"identifikacija"},
    {txt:"Tjeme: xT = 0, yT = 1 → T(0,1) — parabola x² pomaknuta za +1 gore",note:"tjeme"},
    {txt:"Tablica: x∈{−2,−1,0,1,2} → f(x)∈{5,2,1,2,5}",note:"tablica vrijednosti"},
    {txt:"Nultočke: x²+1=0 → x²=−1 — nema realnih rješenja (parabola ne siječe x-os)",note:"nultočke"},
    {txt:"Simetrija: os simetrije je y-os (x=0) jer nema linearnog člana",note:"simetrija"},
    {txt:"Nacrtaj glatku parabolu kroz (0,1), (±1,2), (±2,5)",final:true}
  ,{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Nultočke ne postoje jer x²≥0 uvijek, pa x²+1≥1>0 — parabola je uvijek iznad x-osi.",note:"intuicija",final:true},{txt:"Sažetak postupka: f(x) = x²+c: standardna parabola pomaknuta vertikalno za c — ovdje c=1, tjeme (0,1).",note:"postupak",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}],
  why:["f(x) = x²+c: standardna parabola pomaknuta vertikalno za c — ovdje c=1, tjeme (0,1).",
      "Nultočke ne postoje jer x²≥0 uvijek, pa x²+1≥1>0 — parabola je uvijek iznad x-osi.",
      "Tablica je neophodna: izračunaj f za bar 5 vrijednosti x, osi simetrije s obje strane tjemena.",
      "Simetrija: f(−x)=f(x) — parabola je simetrična na y-os; dovoljno nacrtati desnu stranu i zrcaliti.",
      "Provjera: f(1)=2, f(−1)=2 (simetričnost ✓); f(0)=1 (tjeme ✓); krivulja glatka i konveksna.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:22,type:"sa",topic:"kv",points:2,
  q:"Riješite kvadratnu jednadžbu x² − √5·x + 1 = 0. U zapisu rješenja rabite √5, ne računajte njegovu vrijednost.",
  sol:{ans:"x₁ = [FRAC:√5−1|2], x₂ = [FRAC:√5+1|2]",
    alt:["(√5+1)/2 i (√5-1)/2","x1=(√5+1)/2, x2=(√5-1)/2"]},
  steps:[
    {txt:"Koeficijenti: a=1, b=−√5, c=1",note:"postav"},
    {txt:"D = b²−4ac = (−√5)²−4·1·1 = 5−4 = 1",note:"diskriminanta"},
    {txt:"√D = √1 = 1",note:"korijen diskriminante"},
    {txt:"x = [FRAC:−b±√D|2a] = [FRAC:√5±1|2]",note:"kvadratna formula"},
    {txt:"x₁ = [FRAC:√5−1|2],  x₂ = [FRAC:√5+1|2]",final:true},
    {txt:"Provjera (Vièteove formule): x₁+x₂ = √5 = −b/a ✓;  x₁·x₂ = [FRAC:(5−1)|4] = 1 = c/a ✓",final:true,note:"verifikacija"},{txt:"Intuicija: PAŽNJA: b = −√5 (negativno!). (−√5)² = 5 (ne −5). Kvadriranje uvijek daje pozitivan rezultat.",note:"intuicija",final:true},{txt:"Sažetak postupka: Kvadratna formula: x = (−b ± √D) / (2a), D = b²−4ac.",note:"postupak",final:true},{txt:"Točan odgovor: x₁ = [FRAC:√5−1|2], x₂ = [FRAC:√5+1|2] ✓",note:"odgovor",final:true}
  ],
  exp:"Kvadratna formula: x=(−b±√D)/(2a). D=(√5)²-4=1. x=(√5±1)/2.",
  why:["Kvadratna formula: x = (−b ± √D) / (2a), D = b²−4ac.",
      "PAŽNJA: b = −√5 (negativno!). (−√5)² = 5 (ne −5). Kvadriranje uvijek daje pozitivan rezultat.",
      "D = 1 — cijeli broj! Ovo znači elegantna rješenja; √D = 1.",
      "Vièteove formule (brza provjera): x₁+x₂ = −b/a = √5; x₁·x₂ = c/a = 1. Provjeri bez računanja.",
      "Greška: (−√5)² = −5 → D = −5−4 = −9 (nema rješenja) — česta greška s predznakom kvadrata!","Intuicija: znak diskriminante govori o broju realnih rješenja.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."],
  warn:"Pazi: (−√5)² = +5, ne -5! Kvadrat negativnog broja je pozitivan."
},
  {id:23.1,img:true,type:"num",topic:"fin",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Koliko kuna (HRK) iznosi 256,78 €?",
  intermediates:[1900, 1911, 1920, 7.4456, 256.78],
  warn:"Pazi: EUR→HRK = množiti s tečajem.",
  sol:{ans:"1911,88",alt:["1911,88","1911,88 HRK","1911,9","1911,9"]},
  steps:[
    {txt:"EUR→HRK: množiti s tečajem (1 € = 7,4456 HRK)",note:"smjer konverzije"},
    {txt:"256,78 · 7,4456",note:"postav"},
    {txt:"Procjena: 257 · 7,4 ≈ 1900 HRK (kontrola reda veličine)",note:"procjena"},
    {txt:"256,78 · 7,4456 = 1911,88 HRK",final:true},
    {txt:"Provjera: 1911,88 / 7,4456 ≈ 256,78 € ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Procjena: 256 € · 7,5 = 1920 HRK — odgovor blizu 1911 ✓ (dobra provjera reda veličine).",note:"intuicija",final:true},{txt:"Točan odgovor: 1911,88 ✓",note:"odgovor",final:true}],
  exp:"256,78 × 7,4456 = 1911,88 HRK.",
  why:["EUR→HRK: 1 € = 7,4456 HRK → više eura = više kuna → množimo (veći broj).",
      "Procjena: 256 € · 7,5 = 1920 HRK — odgovor blizu 1911 ✓ (dobra provjera reda veličine).",
      "Greška: dijeliti s tečajem → 256,78/7,4456 ≈ 34,5 € (ne kune! — to je pretvaranje u suprotnom smjeru).",
      "Pravilo: EUR je 'jača' valuta → konverzija EUR→HRK uvijek daje veći broj.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:23.2,img:true,type:"num",topic:"fin",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Koliko eura (€) iznosi 1000 HRK?",
  warn:"Pazi: HRK→EUR = dijeliti s tečajem.",
  sol:{ans:"134,3075",alt:["134,3075","134,3075 EUR","134,31","134,31","134,3"]},
  steps:[
    {txt:"HRK→EUR: dijeliti s tečajem (1 € = 7,4456 HRK)",note:"smjer konverzije"},
    {txt:"1000 / 7,4456",note:"postav"},
    {txt:"Procjena: 1000 / 7,5 ≈ 133 € (kontrola reda veličine)",note:"procjena"},
    {txt:"1000 / 7,4456 ≈ 134,3075 €",final:true},
    {txt:"Provjera: 134,3075 · 7,4456 ≈ 1000 HRK ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: 1 HRK = 1/7,4456 €; 1000 HRK = 1000/7,4456 ≈ 134,31 €.",note:"intuicija",final:true},{txt:"Točan odgovor: 134,3075 ✓",note:"odgovor",final:true}],
  exp:"1000 / 7,4456 = 134,3075 €.",
  why:["HRK→EUR: HRK je 'slabija' valuta → konverzija daje manji broj (1000 HRK < 1000 €).",
      "1 HRK = 1/7,4456 €; 1000 HRK = 1000/7,4456 ≈ 134,31 €.",
      "Procjena: 1000/7,5 = 133,3 — odgovor 134,3 je blizu ✓",
      "Greška: množiti 1000 · 7,4456 = 7445 (to je 1000 € u HRK — obrnuto!).",
      "Tablica uvijek daje oba smjera: EUR↔HRK; pazi koji tražiš.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:24.1,type:"proof",topic:"fun",points:1,
  graphType:"line",
  graphRef:{pts:[[0,-2],[1,1]]},
  graphRange:{xMin:-3,xMax:3,yMin:-10,yMax:6},
  context:"Zadatak 24 (1. dio od 2):",
  q:"Zadan je koordinatni sustav. Nacrtajte pravac čija je jednadžba y = 3x − 2.",
  warn:"Pazi: sjecište s y-osi je -2 (ne 2), a nagib je +3.",
  sol:{ex:"Ključne točke: (0,-2) i (1,1). Nagib k=3 → za svaki +1 na x, y raste za 3."},
  steps:[
    {txt:"Pravac y = 3x − 2: nagib k=3, y-presjek n=−2",note:"parametri"},
    {txt:"Točka 1: x=0 → y=−2;  T₁(0, −2) — sjecište s y-osi",note:"y-presjek"},
    {txt:"Točka 2: x=1 → y=1;  T₂(1, 1)",note:"druga točka"},
    {txt:"Točka 3 (provjera): x=2 → y=4;  T₃(2, 4)",note:"provjera linearnosti"},
    {txt:"Ravnalom povuci pravac kroz T₁, T₂, T₃",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Uvijek počni od y-presjeka: T₁(0,−2) je sigurna točka (x=0 eliminira kx).",note:"intuicija",final:true},{txt:"Sažetak postupka: y=kx+n: k=nagib (strmina), n=y-presjek. Za k=3: svaki +1 na x → +3 na y (strm porast).",note:"postupak",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}],
  exp:"Nacrtaj kroz (0,-2) i (1,1).",
  why:["y=kx+n: k=nagib (strmina), n=y-presjek. Za k=3: svaki +1 na x → +3 na y (strm porast).",
      "Uvijek počni od y-presjeka: T₁(0,−2) je sigurna točka (x=0 eliminira kx).",
      "Sljedeća točka: od T₁ idi 1 desno i 3 gore (k=3) → T₂(1,1). Ponovi za T₃(2,4).",
      "3 kolinearne točke potvrđuju da je pravac točno nacrtan (nije kriva linija).",
      "Provjera: sve 3 točke na pravcu y=3x−2 ✓; pravac se proteže u oba smjera.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:24.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Napišite jednadžbu pravca koji je s tim pravcem usporedan i koji prolazi točkom T(0, −7).",
  warn:"Pazi: paralelni pravci imaju isti koeficijent smjera k, ali različitu ordinatu ishodišta n.",
  sol:{ans:"y = 3x − 7",
    alt:["y=3x-7","y=3x-7","y = 3x - 7","3x-7","3x-7"]},
  steps:[
    {txt:"Paralelni pravci: isti koeficijent smjera k=3",note:"uvjet paralelnosti"},
    {txt:"Točka T(0, −7) na y-osi → y-presjek n = −7",note:"y-presjek"},
    {txt:"Jednadžba: y = 3x − 7",final:true},
    {txt:"Provjera: T(0,−7): y = 3·0−7 = −7 ✓; k=3 (isti kao y=3x−2) → paralelni ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: y = 3x − 7 ✓",note:"odgovor",final:true},{txt:"Provjera domene: x unutar dozvoljenog područja.",note:"verifikacija",final:true}],
  exp:"Paralelno → isti k=3. Kroz T(0,-7) → n=-7. Jednadžba: y=3x-7.",
  why:["Paralelni pravci imaju isti nagib k i različit y-presjek n — mijenjamo samo n.",
      "T(0,−7): x-koordinata je 0 → ova točka je na y-osi → y-presjek = −7, dakle n=−7.",
      "Jednadžba: y = 3x + (−7) = 3x − 7. Nije potreban nikakav drugi izračun.",
      "Greška: promijeniti k (nagib) umjesto n → dobiju presječni, ne paralelni pravac.",
      "Udaljenost između y=3x−2 i y=3x−7 je konstantna (=|−2−(−7)|/√(1+9)=5/√10) — tipično za paralelne.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:25.1,type:"num",context:"Zadatak 25 (1. dio od 2):",topic:"mat",points:1,
  q:"Riješite jednadžbu x = [FRAC:4|3](x − 3).",
  warn:"Pazi: pomnožiti obje strane s 3 da bi se riješio razlomak.",
  sol:{ans:"12",alt:["12","12,0"]},
  steps:[
    {txt:"x = [FRAC:4|3]·(x − 3)",note:"postav"},
    {txt:"Množimo obje strane s 3 (eliminiramo razlomak): 3x = 4(x − 3)",note:"eliminiraj razlomak"},
    {txt:"3x = 4x − 12",note:"razvijanje zagrade"},
    {txt:"3x − 4x = −12  →  −x = −12",note:"grupiranje x"},
    {txt:"x = 12",final:true},
    {txt:"Provjera: [FRAC:4|3]·(12−3) = [FRAC:4|3]·9 = 12 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: 4(x−3) = 4x−12 — distributivnost: pazi da −3 pomnožiš s 4 (česta greška: 4x−3 umjesto 4x−12).",note:"intuicija",final:true},{txt:"Sažetak postupka: Razlomak 4/3: množenje cijele jednadžbe s 3 (nazivnikom) eliminira ga bez grešaka.",note:"postupak",final:true},{txt:"Točan odgovor: 12 ✓",note:"odgovor",final:true}
  ],
  exp:"Množimo s 3: 3x = 4(x-3) → 3x = 4x-12 → x = 12.",
  why:["Razlomak 4/3: množenje cijele jednadžbe s 3 (nazivnikom) eliminira ga bez grešaka.",
      "4(x−3) = 4x−12 — distributivnost: pazi da −3 pomnožiš s 4 (česta greška: 4x−3 umjesto 4x−12).",
      "Alt: x/(x−3) = 4/3 → unakrsno množenje → 3x = 4(x−3) (isti rezultat).",
      "Provjera: 12−3=9; (4/3)·9 = 36/3 = 12 ✓ — LHS = RHS.",
      "Greška: 3x = 4x−3 (zaboraviti pomnožiti −3 s 4) → x=3 (pogrešno).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:25.2,type:"sa",topic:"mat",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite nejednadžbu [FRAC:x − 4|3] − [FRAC:2x|5] > 0.",
  warn:"Pazi: pri množenju nejednadžbe s negativnim brojem mijenja se smjer znaka nejednakosti.",
  sol:{ans:"x < −20",alt:["x<-20","x < -20","x<-20"]},
  steps:[
    {txt:"[FRAC:x−4|3] − [FRAC:2x|5] > 0  |· 15 (zajednički nazivnik 3 i 5)",note:"zajednički nazivnik"},
    {txt:"5(x−4) − 6x > 0",note:"množenje s 15"},
    {txt:"5x − 20 − 6x > 0  →  −x − 20 > 0",note:"razvijanje i grupiranje"},
    {txt:"−x > 20",note:"izolacija x"},
    {txt:"x < −20  (dijeljenje s −1 okreće nejednakost!)",final:true},
    {txt:"Provjera x=−21: (−21−4)/3 − 2·(−21)/5 = −25/3 + 42/5 = −125/15 + 126/15 = [FRAC:1|15] > 0 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: KLJUČNO: dijeljenje (ili množenje) s NEGATIVNIM brojem OKREĆE smjer nejednakosti! −x>20 → x<−20.",note:"intuicija",final:true},{txt:"Sažetak postupka: Zajednički nazivnik 3 i 5 je 15 → množimo cijelu nejednakost s 15 (15>0, ne okreće ≠).",note:"postupak",final:true},{txt:"Točan odgovor: x < −20 ✓",note:"odgovor",final:true}
  ],
  exp:"ZN=15: (5(x-4)-6x)/15>0 → −x-20>0 → −x>20 → x<-20.",
  why:["Zajednički nazivnik 3 i 5 je 15 → množimo cijelu nejednakost s 15 (15>0, ne okreće ≠).",
      "KLJUČNO: dijeljenje (ili množenje) s NEGATIVNIM brojem OKREĆE smjer nejednakosti! −x>20 → x<−20.",
      "Provjera s konkretnim brojem: x=−21 (jest < −20) → dobijemo pozitivan rezultat ✓.",
      "Provjera graničnog slučaja: x=−20 → (−20−4)/3 − 2·(−20)/5 = −8+8 = 0 — nije > 0, rub nije uključen ✓.",
      "Greška: zaboraviti okrenuti nejednakost → dobiju x > −20 (suprotno rješenje!).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:26.1,type:"num",topic:"fun",points:1,
  q:"Veza između kilometara i milja dana je formulom y = 1,609x, gdje y označuje kilometre, a x milje. Koliko je kilometara 12,3 milje?",
  warn:"Pazi: u formuli y = 1,609x varijabla x je broj milja, y je broj kilometara.",
  context:"Zadatak 26 (1. dio od 2):",
  sol:{ans:"19,7907",alt:["19,7907","19,7907","19,79","19,79"]},
  steps:[
    {txt:"Formula: y = 1,609·x, gdje y = km, x = milje",note:"postav"},
    {txt:"Uvrsti x = 12,3 milje: y = 1,609 · 12,3",note:"uvrstiti"},
    {txt:"= 1,609·12 + 1,609·0,3 = 19,308 + 0,4827",note:"račun"},
    {txt:"y = 19,7907 km",final:true},
    {txt:"Provjera: 19,7907 / 1,609 ≈ 12,3 milje ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 12 milja = 19,308 km; 0,3 milje ≈ 0,48 km; ukupno ≈ 19,79 km ✓",note:"intuicija",final:true},{txt:"Točan odgovor: 19,7907 ✓",note:"odgovor",final:true}],
  exp:"y = 1,609 · 12,3 = 19,7907 km.",
  why:["Formula direktna: milje→km znači množimo jer 1 milja = 1,609 km > 1 km.",
      "Intuicija: 12 milja = 19,308 km; 0,3 milje ≈ 0,48 km; ukupno ≈ 19,79 km ✓",
      "Greška: dijeliti s 1,609 → 12,3/1,609 ≈ 7,6 (to je km→milje, obrnuto!).",
      "Provjera: 19,79/1,609 ≈ 12,3 ✓ — inverzna operacija potvrđuje rezultat.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:26.2,type:"num",topic:"fun",points:1,
  q:"Veza između kilometara i milja dana je formulom y = 1,609x, gdje y označuje kilometre, a x milje. Koliko je milja 100 km?",
  warn:"Pazi: sada tražiš x (milje) kad je poznato y (km) → treba dijeliti s tečajem.",
  context:"Zadatak 26 (2. dio od 2):",
  sol:{ans:"62,15",alt:["62,15","62,15","62,1504","62,1504"]},
  steps:[
    {txt:"km→milje: iz y = 1,609·x izrazimo x: x = [FRAC:y|1,609]",note:"inverzna formula"},
    {txt:"Uvrsti y = 100 km: x = [FRAC:100|1,609]",note:"uvrstiti"},
    {txt:"Procjena: 100/1,6 = 62,5 milja (kontrola)",note:"procjena"},
    {txt:"x ≈ 62,15 milja",final:true},
    {txt:"Provjera: 62,15 · 1,609 = 100,02 ≈ 100 km ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Alt formula: 1 km = 1/1,609 ≈ 0,6215 milje; 100 km = 100 · 0,6215 = 62,15 milja.",note:"intuicija",final:true},{txt:"Točan odgovor: 62,15 ✓",note:"odgovor",final:true}],
  exp:"x = y / 1,609 = 100 / 1,609 ≈ 62,15 milja.",
  why:["km→milje: obrnuta operacija od milje→km → dijelimo s 1,609 (jer milja > km).",
      "Alt formula: 1 km = 1/1,609 ≈ 0,6215 milje; 100 km = 100 · 0,6215 = 62,15 milja.",
      "Intuicija: 1 km ≈ 0,62 milje → 100 km ≈ 62 milje — odgovor 62,15 je razuman ✓",
      "Greška: množiti 100 · 1,609 = 160,9 (to je 100 milja u km, a ne km u milje!).","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:27.1,img:true,type:"proof",img:true,topic:"anal",points:1,
  graphType:"point",
  graphRef:{point:[150,-75],knownPts:[{lbl:"A",coord:[-75,100]},{lbl:"B",coord:[-75,-75]}]},
  graphRange:{xMin:-200,xMax:250,yMin:-150,yMax:150,scale:25},
  context:"Zadatak 27 (1. dio od 3):",
  q:"Na timskome radu grupa se nalazi u točki T(150, −75). Koordinate položaja dane su u metrima (razmjer: 1 jedinica = 25 m). Na karti su već označene točke A i B. Ucrtajte njihov položaj i označite ga točkom T.",
  warn:"Pazi: y = -75 znači 75 m ISPOD x-osi, ne iznad.",
  sol:{ex:"T(150, -75): idi 6 jedinica (150 m) desno, 3 jedinice (75 m) dolje od ishodišta. IV. kvadrant."},
  steps:[
    {txt:"Koordinate grupe: T(150, −75); razmjer: 1 jedinica = 25 m",note:"očitavanje"},
    {txt:"x-koordinata: 150 m → 150/25 = 6 jedinica desno od ishodišta",note:"x-os"},
    {txt:"y-koordinata: −75 m → 75/25 = 3 jedinice dolje od x-osi (negativno!)",note:"y-os"},
    {txt:"Ucrtaj točku T na poziciji (6, −3) u mreži karte",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: T(150,−75): x=150>0 (desno), y=−75<0 (dolje) → IV. kvadrant karte.",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}],
  exp:"T(150,-75): 6 jednica desno, 3 dolje. IV. kvadrant.",
  why:["Koordinatni sustav: x desno (pozitivno) / lijevo (negativno); y gore (pozitivno) / dolje (negativno).",
      "T(150,−75): x=150>0 (desno), y=−75<0 (dolje) → IV. kvadrant karte.",
      "Razmjer 25m/jed.: pretvori koordinate: 150/25=6 jed. desno, 75/25=3 jed. dolje.",
      "Provjera: T je u IV. kvadrantu (x pozitivno, y negativno) ✓ — konzistentno s koordinatama.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:27.2,img:true,type:"num",topic:"anal",points:1,
  q:"Odredite udaljenost točaka A(−75, 100) i T(150, −75) i zaokružite je na cijeli broj. (Koordinate su u metrima.)",
  intermediates:[50625, 30625, 81250, 225, 175, 285.04, 81225, 81796],
  warn:"Pazi: formula za udaljenost: d = √((x₂−x₁)² + (y₂−y₁)²). Zaokruži na CIJELI broj.",
  context:"Zadatak 27 (2. dio od 3):",
  sol:{ans:"285",alt:["285","285 m"]},
  steps:[
    {txt:"Formula: d = √((x₂−x₁)² + (y₂−y₁)²)",note:"formula udaljenosti"},
    {txt:"Δx = 150 − (−75) = 225 m  (pazi na minus u zagradi!)",note:"Δx"},
    {txt:"Δy = −75 − 100 = −175 m",note:"Δy"},
    {txt:"d = √(225² + 175²) = √(50625 + 30625) = √81250",note:"uvrštavanje"},
    {txt:"d ≈ 285,04 m  →  zaokrugljeno: 285 m",final:true},
    {txt:"Provjera: 285² = 81225 ≈ 81250 ✓; 286² = 81796 > 81250 → 285 je bliže ✓",final:true,note:"verifikacija"},{txt:"Intuicija: PAŽNJA: Δx = 150−(−75) = 150+75 = 225 (ne 150−75=75 — negativna koordinata!)",note:"intuicija",final:true},{txt:"Sažetak postupka: Pitagorin poučak u koordinatnom sustavu: horizontalna i vertikalna razlika su katete, udaljenost je hipotenuza.",note:"postupak",final:true},{txt:"Točan odgovor: 285 ✓",note:"odgovor",final:true}
  ],
  exp:"d = √(225²+175²) = √81250 ≈ 285,04 → 285 m.",
  why:["Pitagorin poučak u koordinatnom sustavu: horizontalna i vertikalna razlika su katete, udaljenost je hipotenuza.",
      "PAŽNJA: Δx = 150−(−75) = 150+75 = 225 (ne 150−75=75 — negativna koordinata!)",
      "225² = 50625; 175² = 30625; zbroj 81250. √81250 nije cijeli broj → zaokrugljujemo.",
      "Usporedba: 285² = 81225, 286² = 81796 → √81250 bliže 285 (razlika 25 vs 546) ✓",
      "Greška: Δx = 150−75 = 75 (zaboraviti minus A-koordinate) → d = √(75²+175²) ≈ 189 (pogrešno).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:27.3,img:true,type:"num",topic:"anal",points:1,
  q:"Iz svojega položaja T(150, −75) grupa može doći do položaja A(−75, 100) izravno ili preko točke B(−75, −75). Za koliko je dulji put preko točke B? (Koordinate su u metrima.)",
  warn:"Pazi: izračunaj put T→B→A (dva segmenta) i oduzmi izravni T→A.",
  context:"Zadatak 27 (3. dio od 3):",
  sol:{ans:"115",alt:["115","115 m"]},
  steps:[
    {txt:"Ravni put T→A: d(T,A) = 285 m (iz Q27,2)",note:"iz prethodnog"},
    {txt:"T→B: T(150,−75), B(−75,−75) — isti y! → horizontalna udaljenost:",note:"TB segment"},
    {txt:"d(T,B) = |150−(−75)| = 225 m",note:"horizontalna razlika"},
    {txt:"B→A: B(−75,−75), A(−75,100) — isti x! → vertikalna udaljenost:",note:"BA segment"},
    {txt:"d(B,A) = |100−(−75)| = 175 m",note:"vertikalna razlika"},
    {txt:"Zaobilazni put: 225 + 175 = 400 m",note:"zbroj"},
    {txt:"Razlika: 400 − 285 = 115 m",final:true},
    {txt:"Provjera: 225+175=400 ✓; 400−285=115 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: B i A imaju isti x=−75 → segment BA je okomito → d = samo |Δy| (bez korijena).",note:"intuicija",final:true},{txt:"Sažetak postupka: T i B imaju isti y=−75 → segment TB je vodoravno → d = samo |Δx| (bez korijena).",note:"postupak",final:true},{txt:"Točan odgovor: 115 ✓",note:"odgovor",final:true}
  ],
  exp:"Via B: TB+BA = 225+175 = 400 m. Izravno: 285 m. Razlika: 115 m.",
  why:["T i B imaju isti y=−75 → segment TB je vodoravno → d = samo |Δx| (bez korijena).",
      "B i A imaju isti x=−75 → segment BA je okomito → d = samo |Δy| (bez korijena).",
      "Zaobilazni put prati 'L' putanju: vodoravno do B, zatim vertikalno do A.",
      "Ravni put (285m) kraći je od zaobilaznog (400m) — trougao nejednakost: izravna udaljenost ≤ zaobilazna ✓",
      "Razlika 115m = 'višak' koji zaobilazni put troši u odnosu na ravnu liniju.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:28.1,img:true,type:"sa",topic:"stat",points:1,
  q:"Ispit iz Matematike ima ukupno 60 bodova. Mjerila za pozitivne ocjene: dovoljan(2): 51–64%; dobar(3): 65–79%; vrlo dobar(4): 80–89%; odličan(5): 90–100%. Koju će ocjenu dobiti Jakov ako je na ispitu postigao 41 bod?",
  warn:"Pazi: preračunati bodove u postotak PRIJE uspoređivanja s tablicom.",
  context:"Zadatak 28 (1. dio od 2):",
  sol:{ans:"dobar (3)",
    alt:["dobar","dobar (3)","3","ocjena dobar"]},
  steps:[
    {txt:"Preračunaj bodove u postotak: [FRAC:41|60] · 100 ≈ 68,33%",note:"preračun"},
    {txt:"Usporedi s tablicom: 68,33% ∈ ⟨65, 79⟩ → ocjena dobar (3)",note:"tablica"},
    {txt:"Odgovor: dobar (3)",final:true,note:"odgovor"},
    {txt:"Provjera pragova: 65%·60=39 boda (min dobar); 79%·60=47,4 boda (max dobar) → 41∈[39,47] ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}],
  exp:"41/60 = 68,33% → dobar (65-79%).",
  why:["Pretvorba: bodovi→% = (bodovi/max)·100 = (41/60)·100 = 68,33%.",
      "Greška: uspoređivati 41 direktno s postotnim pragovima 65, 79 (ne bodovima!) — npr. 41>65 je pogrešna logika.",
      "Provjera pragova u bodovima: dobar(3) = 65%·60=39 do 79%·60=47 boda. 41 je unutar [39,47] ✓",
      "Intuicija: 41/60 ≈ 2/3 ≈ 67% — u rasponu dobar (65−79%) ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:28.2,img:true,type:"num",img:true,topic:"br",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Marti je nedostajao 1 bod za ocjenu odličan (5). Koliko je bodova Marta postigla na ispitu?",
  sol:{ans:"53",alt:["53,0","odgovor","rezultat"]},
  steps:[
    {txt:"Prag odličan (5): 90% od 60 = 54 boda (minimum)",note:"prag"},
    {txt:"Marti nedostajao 1 bod → postigla 54 − 1 = 53 boda",final:true},
    {txt:"Provjera: 53/60·100 = 88,3% → vrlodobar (80–89%) ✓;  54/60·100 = 90% = prag odličan ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 53 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:["'Nedostajao 1 bod za odličan' = bila je 1 bod ispod minimalnog praga odličnog.",
    "Minimum za odličan: 90% · 60 = 54 boda. Marta = 54 − 1 = 53 boda.",
    "Provjera: 53/60 ≈ 88,3% → vrlodobar (80–89%) ✓; još 1 bod → 90% → odličan ✓",
    "Greška: uzeti 90 bodova kao prag (zaboraviti da max nije 100 nego 60!).",
    "Greška: prag odličan = 90% od 60 = 54, ne 90 bodova.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]
}
];

export const qImages = {
  "2010_jesen_B__11": () => e(SvgZad11_2010JB, null),
  "2010_jesen_B__21": () => e(SvgZad21_2010JB, null),
  "2010_jesen_B__23.1": () => e(Svg23j, null),
  "2010_jesen_B__23.2": () => e(Svg23j, null),
  "2010_jesen_B__27.1": () => e(Svg27j, null),
  "2010_jesen_B__27.2": () => e(Svg27j, null),
  "2010_jesen_B__27.3": () => e(Svg27j, null),
  "2010_jesen_B__28.1": () => e(Svg28j, null),
  "2010_jesen_B__28.2": () => e(Svg28j, null),
  "2010_jesen_B__28.3": () => e(Svg28j, null),
  "2010_jesen_B__7": () => e(SvgZad7_2010JB, null),
  "2010_jesen_B__9": () => e(Svg9j, null),
};
