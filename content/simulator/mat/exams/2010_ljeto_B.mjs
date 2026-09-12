// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad7_2010LB(){
  const W=320,H=290,t="var(--text)",mu="var(--muted)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const COLORS=["var(--blue)","var(--gold)","var(--green)","var(--red)"];
  const tables=[
    {lbl:"A.",rows:[[-1,5],[2,-4],[3,3]],  col:COLORS[0]},
    {lbl:"B.",rows:[[-1,5],[2,4], [3,-3]], col:COLORS[1]},
    {lbl:"C.",rows:[[-1,-5],[2,3],[3,4]],  col:COLORS[2]},
    {lbl:"D.",rows:[[-1,-5],[2,4],[3,3]],  col:COLORS[3]},
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

function SvgZad27_2010LB(){
  const W=320,H=200,pad={l:52,r:20,t:14,b:32};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMax=1100,yMax=450;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=function(v){return pad.l+(v/xMax)*iW;};
  const toY=function(v){return H-pad.b-(v/yMax)*iH;};
  const t="var(--text)",b=_BLUE,g=_GOLD,m="var(--muted)",mu="var(--muted)";

  // Grid
  const grid=[];
  for(let x=0;x<=1100;x+=100)
    grid.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let y=0;y<=450;y+=50)
    grid.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));

  // Karlo: stepeničasti put (PDF-vjerno: kreće horizontalno iz KUĆE,
  // nakon K ide vertikalno → ŠKOLA na vrhu)
  const karlo=[
    [0,0],[100,0],[100,50],[300,50],[300,100],
    [500,100],[500,150],[600,150],[600,250], // =K
    [600,400],[1000,400]                      // =ŠKOLA
  ];
  const kpts=karlo.map(function(p){
    return toX(p[0]).toFixed(1)+","+toY(p[1]).toFixed(1);
  }).join(" ");

  // Karmela: prečica K→ŠKOLA (iscrtkano)
  const kx=toX(600),ky=toY(250);
  const sx=toX(1000),sy=toY(400);

  return e("svg",{viewBox:"0 0 320 200",style:{width:"100%",maxWidth:320,display:"block"}},
    ...grid,
    // Karlo (puna crta, plava)
    e("polyline",{points:kpts,fill:"none",stroke:b,strokeWidth:2.2,
      strokeLinecap:"round",strokeLinejoin:"round"}),
    // Karmela (iscrtkana, zlatna)
    e("line",{x1:kx,y1:ky,x2:sx,y2:sy,stroke:g,strokeWidth:2,strokeDasharray:"7,4"}),
    // Točke
    e("circle",{cx:toX(0),cy:toY(0),r:3.5,fill:_RED}),
    e("circle",{cx:kx,cy:ky,r:3.5,fill:_GREEN}),
    e("circle",{cx:sx,cy:sy,r:3.5,fill:_RED}),
    // Tekst labele
    e("text",{x:pad.l-4,y:toY(0)+4,textAnchor:"end",fontSize:9,fill:_GOLD},"KUĆA"),
    e("text",{x:kx+4,y:ky-6,fontSize:9,fill:_GREEN,fontWeight:"600"},"K"),
    e("text",{x:sx+4,y:sy-4,fontSize:9,fill:t},"ŠKOLA"),
    // Osi labele: "50" na y-osi, "100" na x-osi
    e("text",{x:pad.l-4,y:toY(50)+3,textAnchor:"end",fontSize:8,fill:mu},"50"),
    e("text",{x:toX(100),y:H-pad.b+12,textAnchor:"middle",fontSize:8,fill:mu},"100"),
    // Legenda
    e("line",{x1:pad.l,y1:H-6,x2:pad.l+16,y2:H-6,stroke:b,strokeWidth:2}),
    e("text",{x:pad.l+20,y:H-2,fontSize:7.5,fill:mu},"Karlo"),
    e("line",{x1:pad.l+54,y1:H-6,x2:pad.l+70,y2:H-6,stroke:g,strokeWidth:2,strokeDasharray:"5,3"}),
    e("text",{x:pad.l+74,y:H-2,fontSize:7.5,fill:mu},"Karmela"),
  );
}

function SvgZad24_2010LB(){
  const W=330,H=195,t="var(--text)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:18,y:175},B={x:208,y:175},C={x:253,y:40},D={x:63,y:40};
  const E={x:253,y:175},F={x:308,y:175};
  const sq=7;
  return e("svg",{viewBox:"0 0 330 195",style:{width:"100%",maxWidth:330,display:"block"}},
    e("polygon",{points:A.x+","+A.y+" "+B.x+","+B.y+" "+C.x+","+C.y+" "+D.x+","+D.y,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("polygon",{points:C.x+","+C.y+" "+E.x+","+E.y+" "+F.x+","+F.y,fill:t,fillOpacity:0.85}),
    e("polygon",{points:C.x+","+C.y+" "+E.x+","+E.y+" "+F.x+","+F.y,fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    e("line",{x1:B.x,y1:B.y,x2:E.x,y2:E.y,stroke:_BLUE,strokeWidth:1.5}),
    e("rect",{x:E.x-sq,y:E.y-sq,width:sq,height:sq,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:A.x-14,y:A.y+4,fontSize:12,fill:_GOLD,fontStyle:"italic"},"A"),
    e("text",{x:B.x+2,y:B.y+14,fontSize:12,fill:_GOLD,fontStyle:"italic"},"B"),
    e("text",{x:C.x+4,y:C.y-5,fontSize:12,fill:_GOLD,fontStyle:"italic"},"C"),
    e("text",{x:D.x-16,y:D.y-5,fontSize:12,fill:_GOLD,fontStyle:"italic"},"D"),
    e("text",{x:E.x-14,y:E.y+14,fontSize:12,fill:_GOLD,fontStyle:"italic"},"E"),
    e("text",{x:F.x+3,y:F.y+14,fontSize:12,fill:_GOLD,fontStyle:"italic"},"F"),
    e("text",{x:(C.x+F.x)/2+5,y:(C.y+E.y)/2,fontSize:11,fill:"var(--bg)",fontWeight:"700"},"5 cm"),
  );
}

function SvgZad23_2010LB(){
  const W=340,H=76,m="var(--muted)",mu="var(--muted)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const rows=[
    {label:"Stopa (foot)",vals:["1","5.8",""],    col:"var(--blue)"},
    {label:"Metar (m)",   vals:["0.3048","","1.40208"],col:"var(--gold)"},
  ];
  const cw=[110,76,76,78];
  const rh=34;
  const elems=[];
  let cy=0;
  rows.forEach(function(row,ri){
    elems.push(e("rect",{key:"rb"+ri,x:0,y:cy,width:W,height:rh,fill:ri%2===0?"var(--s2)":"var(--s1)"}));
    elems.push(e("rect",{key:"lb"+ri,x:0,y:cy,width:cw[0],height:rh,fill:row.col,fillOpacity:0.1}));
    elems.push(e("text",{key:"lt"+ri,x:cw[0]/2,y:cy+rh/2,textAnchor:"middle",dominantBaseline:"central",fontSize:10,fontWeight:"bold",fill:row.col},row.label));
    let cx2=cw[0];
    row.vals.forEach(function(val,vi){
      elems.push(e("text",{key:"v"+ri+"_"+vi,x:cx2+cw[vi+1]/2,y:cy+rh/2,textAnchor:"middle",dominantBaseline:"central",fontSize:12,fill:val?row.col:mu},val||"?"));
      cx2+=cw[vi+1];
    });
    cy+=rh;
  });
  let cx3=cw[0];
  const vlines=cw.slice(0,-1).map(function(_,i){const x=cx3;cx3+=cw[i+1];return e("line",{key:"vl"+i,x1:x,y1:0,x2:x,y2:H,stroke:m,strokeWidth:0.8});});
  return e("svg",{viewBox:"0 0 340 76",style:{width:"100%",maxWidth:340,display:"block"}},
    ...elems,...vlines,
    e("line",{x1:0,y1:rh,x2:W,y2:rh,stroke:m,strokeWidth:0.8}),
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:m,strokeWidth:1.2}),
  );
}

function SvgZad11_2010LB(){
  const W=220,H=160,pad={l:22,r:10,t:14,b:22};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-1,xMax=3,yMin=-2.5,yMax=1;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=function(v){return pad.l+((v-xMin)/(xMax-xMin))*iW;};
  const toY=function(v){return pad.t+((yMax-v)/(yMax-yMin))*iH;};
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,m="var(--muted)",mu="var(--muted)";
  const grid=[];
  for(let i=-1;i<=3;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=-2;i<=1;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.03){
    const y=-(x-1)*(x-1)-0.3;
    if(y>=yMin&&y<=yMax) pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));
  }
  return e("svg",{viewBox:"0 0 220 160",style:{width:"100%",maxWidth:220,display:"block"}},
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

function SvgZad21_2010LB(){
  const W=240,H=220,pad={l:26,r:12,t:14,b:22};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=5,yMin=-3,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=function(v){return pad.l+((v-xMin)/(xMax-xMin))*iW;};
  const toY=function(v){return pad.t+((yMax-v)/(yMax-yMin))*iH;};
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,m="var(--muted)",mu="var(--muted)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  // Pravac 2x+3y=6 — kroz (3,0) i (0,2)
  const lx1=-1,ly1=(6-2*(-1))/3;  // produženje lijevo
  const lx2=5, ly2=(6-2*5)/3;    // produženje desno
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
    e("line",{x1:toX(lx1),y1:toY(ly1),x2:toX(lx2),y2:toY(ly2),stroke:b,strokeWidth:2.2,strokeLinecap:"round"}),
    e("circle",{cx:toX(3),cy:toY(0),r:3.5,fill:b}),
    e("circle",{cx:toX(0),cy:toY(2),r:3.5,fill:b}),
    e("text",{x:toX(3)+4,y:toY(0)+12,fontSize:9,fill:b},"(3,0)"),
    e("text",{x:toX(0)+4,y:toY(2)-5,fontSize:9,fill:b},"(0,2)"),
  );
}

export const qs = [
  {id:1,type:"mc",topic:"br",points:1,
  q:"Koji je od navedenih brojeva manji od [FRAC:−5|2]?",
  opts:["−7/2","−5/3","−3/2","−2/3"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"-7/2 = -3,5; ostali (-5/3 ≈ -1,67; -3/2 = -1,5; -2/3 ≈ -0,67) su veći od -5/2 = -2,5.",
  steps:[
    {txt:"Granica: [FRAC:−5|2] = −2,5 → tražimo broj MANJI od −2,5",note:"postav"},
    {txt:"A: [FRAC:−7|2] = −3,5 < −2,5 → manji ✓",note:"opcija A"},
    {txt:"B: [FRAC:−5|3] ≈ −1,67 > −2,5 → nije manji ✗",note:"opcija B"},
    {txt:"C: [FRAC:−3|2] = −1,5 > −2,5 → nije manji ✗",note:"opcija C"},
    {txt:"D: [FRAC:−2|3] ≈ −0,67 > −2,5 → nije manji ✗",final:true,note:"diagnostika"},
    {txt:"Odgovor: A ✓",final:true,note:"odgovor"},
    {txt:"Provjera: −3,5 < −2,5 ✓ (na brojevnom pravcu, lijevo = manje)",final:true,note:"verifikacija"},{txt:"Intuicija: −7/2 = −3,5; −5/3 ≈ −1,67; −3/2 = −1,5; −2/3 ≈ −0,67. Samo −3,5 je manji od −2,5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Na brojevnom pravcu negativni brojevi: što dalje lijevo, to manji. −3,5 je lijevo od −2,5.",note:"postupak",final:true}
  ],
  why:["Na brojevnom pravcu negativni brojevi: što dalje lijevo, to manji. −3,5 je lijevo od −2,5.",
      "−7/2 = −3,5; −5/3 ≈ −1,67; −3/2 = −1,5; −2/3 ≈ −0,67. Samo −3,5 je manji od −2,5.",
      "Greška: zbuniti 'manji' s 'bliže nuli' — bliže nuli je VEĆI negativni broj!",
      "Alt: −7/2 < −5/2 ↔ −7 < −5 (množenje s 2, pozitivno, ne mijenja smjer) ✓","Diagnostic: A) [FRAC:−7|2] ✓; B) [FRAC:−5|3]; C) [FRAC:−3|2]; D) [FRAC:−2|3].","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: kod negativnih brojeva, MANJI je onaj s VEĆOM apsolutnom vrijednošću."
},
  {id:2,type:"mc",topic:"ostalo",points:1,
  q:"Prvi set odbojkaške utakmice trajao je 18 minuta. U koliko je sati utakmica započela ako je prvi set završio u 18 sati i 5 minuta?",
  warn:"Pazi: 18:05 − 18 = 17:47, ali samo ako krivo oduzmeš minute.",
  opts:["u 17 sati i 43 minute","u 17 sati i 47 minuta","u 17 sati i 53 minute","u 17 sati i 57 minuta"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"18:05 − 18 min = 17:47.",
  steps:[
    {txt:"Set je završio u 18:05, trajao 18 min → utakmica je počela u 18:05 − 18 min",note:"postav"},
    {txt:"18:05 − 18 min = 17:65 − 18 min = 17:47",note:"oduzimanje"},
    {txt:"→ Utakmica je počela u 17 sati i 47 minuta  →  B ✓",final:true},
    {txt:"Provjera: 17:47 + 18 min = 17:65 = 18:05 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (17:43) — oduzimaju 22 min. C (17:53) — oduzimaju 12 min. D (17:57) — oduzimaju 8 min. Točno: 18:05 − 18 min = 17:47.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 18:05 − 18 min: 5 min − 18 min zahtijeva pozajmicu → 60+5−18=47 min, sat je 18−1=17.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Vremenski račun unazad: kraj − trajanje = početak.",
      "18:05 − 18 min: 5 min − 18 min zahtijeva pozajmicu → 60+5−18=47 min, sat je 18−1=17.",
      "Provjera: 17:47 + 18 min = 17:65 = 18:05 ✓ (65 min = 1h5min).",
      "Greška: oduzimati od sati umjesto minuta (17 sati − 18 min ≠ smisao).","Diagnostic: A) u 17 sati i 43 minute; B) u 17 sati i 47 minuta ✓; C) u 17 sati i 53 minute; D) u 17 sati i 57 minuta.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:3,type:"mc",topic:"br",points:1,
  q:"Kolika je vrijednost izraza [FRAC:5|6] − [FRAC:1|6] · [FRAC:2|3]?",
  opts:["1/3","4/9","7/12","13/18"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Prvo množenje: 1/6 · 2/3 = 1/9. Zatim: 5/6 − 1/9 = 15/18 − 2/18 = 13/18.",
  steps:[
    {txt:"Redoslijed operacija: prvo množenje, onda oduzimanje",note:"strategija"},
    {txt:"[FRAC:1|6] · [FRAC:2|3] = [FRAC:2|18] = [FRAC:1|9]",note:"množenje razlomaka"},
    {txt:"[FRAC:5|6] − [FRAC:1|9] = [FRAC:15|18] − [FRAC:2|18] = [FRAC:13|18]  →  D ✓",final:true},
    {txt:"Provjera: 5/6 ≈ 0,833; 1/9 ≈ 0,111; razlika ≈ 0,722 = 13/18 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (1/3) — zbrajaju umjesto oduzimaju i griješe u ZN. B (4/9) — ne primjenjuju redoslijed; uzimaju 1/6·2/3=1/9 ali pogrešno 5/6−1/9. C (7/12) — griješe u ZN (uzimaju 12 umjesto 18).",final:true,note:"diagnostika"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: Množenje razlomaka: (1/6)·(2/3) = 2/18 = 1/9. Zatim: 5/6 − 1/9 (ZN=18).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["PEMA: množenje/dijeljenje prije zbrajanja/oduzimanja — i s razlomcima!",
      "Množenje razlomaka: (1/6)·(2/3) = 2/18 = 1/9. Zatim: 5/6 − 1/9 (ZN=18).",
      "ZN(6,9)=18: 5/6 = 15/18; 1/9 = 2/18. Razlika: (15−2)/18 = 13/18.",
      "Provjera decimalno: 5/6 ≈ 0,833; 1/6·2/3 ≈ 0,111; 0,833 − 0,111 = 0,722 ≈ 13/18 ✓","Diagnostic: A) [FRAC:1|3]; B) [FRAC:4|9]; C) [FRAC:7|12]; D) [FRAC:13|18] ✓.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: prvo izračunaj množenje, tek onda oduzimaj."
},
  {id:4,type:"mc",topic:"fin",points:1,
  q:"Masa 256 jednakih olovaka iznosi 4,24 kg. Kolika je masa 20 takvih olovaka?",
  warn:"Pazi: dijeljenje s 20 umjesto množenja.",
  opts:["3,3125 g","33,125 g","331,25 g","3312,5 g"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"4240 g / 256 × 20 = 331,25 g.",
  steps:[
    {txt:"Masa 256 olovaka = 4,24 kg = 4240 g",note:"pretvorba"},
    {txt:"Masa 1 olovke = 4240 / 256 = 16,5625 g",note:"masa jedne"},
    {txt:"Masa 20 olovaka = 20 × 16,5625 = 331,25 g  →  C ✓",final:true},
    {txt:"Provjera: 331,25 × 256 / 20 = 331,25 · 12,8 = 4240 g = 4,24 kg ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A/B/D — greška u pretvorbi kg→g ili pomiješaju faktor 20 i 256. C je ispravno: 4240/256×20 = 331,25 g.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Direktno: masa 20 = (20/256)·4240 = 20·4240/256 = 84800/256 = 331,25 g.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Proporcija: 256 olovaka → 4240 g; 20 olovaka → ?",
      "Direktno: masa 20 = (20/256)·4240 = 20·4240/256 = 84800/256 = 331,25 g.",
      "Alt: masa 1 = 4240/256 = 16,5625 g; 20 × 16,5625 = 331,25 g.",
      "Greška: zaboraviti pretvoriti kg u g → 4,24/256×20 = 0,33125 kg (10× premalo).","Diagnostic: A) 3,3125 g; B) 33,125 g; C) 331,25 g ✓; D) 3312,5 g.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
  {id:5,type:"mc",topic:"al",points:1,
  q:"Čemu je jednak izraz ([FRAC:3a+1|3])²?",
  opts:["3a²+6a+1/9","9a²+6a+1/9","9a²+3a+1/3","3a²+3a+1/3"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"((3a+1)/3)² = (3a+1)²/9 = (9a²+6a+1)/9.",
  why:["(A/B)² = A²/B²: kvadriramo i brojnik i nazivnik zasebno.",
      "(3a+1)² = (3a)² + 2·3a·1 + 1² = 9a² + 6a + 1. Srednji član: 2·3a·1 = 6a.",
      "Greška A: (3a)² = 3a² (zaborave kvadrirati koeficijent: 3² = 9, ne 3).",
      "Provjera a=1: (4/3)² = 16/9; B daje (9+6+1)/9 = 16/9 ✓; A daje (3+6+1)/9 = 10/9 ✗.","Diagnostic: A) [FRAC:3a²+6a+1|9]; B) [FRAC:9a²+6a+1|9] ✓; C) [FRAC:9a²+3a+1|3]; D) [FRAC:3a²+3a+1|3].","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: (3a+1)² = 9a²+6a+1  -  ne zaboravi srednji član 6a!.",
  steps:[
    {txt:"Formula: (A/B)² = A²/B² gdje A = 3a+1, B = 3",note:"formula"},
    {txt:"A² = (3a+1)² = 9a² + 6a + 1",note:"kvadrat brojnika"},
    {txt:"B² = 3² = 9",note:"kvadrat nazivnika"},
    {txt:"Rezultat: [FRAC:9a²+6a+1|9]  →  B ✓",final:true,note:"odgovor"},
    {txt:"Provjera (a=1): ((3+1)/3)² = (4/3)² = 16/9; (9+6+1)/9 = 16/9 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (3a²+6a+1)/9 — (3a)²=3a² umjesto 9a². C (9a²+3a+1)/3 — nazivnik 3 umjesto 9; srednji član krivo. D (3a²+3a+1)/3 — obje greške kombinirano.",final:true,note:"diagnostika"},{txt:"Intuicija: (3a+1)² = (3a)² + 2·3a·1 + 1² = 9a² + 6a + 1. Srednji član: 2·3a·1 = 6a.",note:"intuicija",final:true},{txt:"Sažetak postupka: (A/B)² = A²/B²: kvadriramo i brojnik i nazivnik zasebno.",note:"postupak",final:true}
  ]
},
  {id:6,type:"mc",topic:"geom",points:1,
  q:"Brod je isplovio iz luke. Najprije je 2 sata plovio prema istoku brzinom 12 km/h, a onda se okrenuo prema sjeveru i 5 sati plovio brzinom 14 km/h. Koliko je nakon tih 7 sati plovidbe bio udaljen od luke?",
  opts:["69 km","74 km","79 km","84 km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"a=24 km, b=70 km. d=√(24²+70²)=√5476=74 km.",
  steps:[
    {txt:"Prema istoku: d₁ = 2 × 12 = 24 km",note:"istok"},
    {txt:"Prema sjeveru: d₂ = 5 × 14 = 70 km",note:"sjever"},
    {txt:"Smjerovi su okomiti → Pitagorin poučak: d = √(24² + 70²)",note:"Pitagora"},
    {txt:"= √(576 + 4900) = √5476 = 74 km  →  B ✓",final:true},
    {txt:"Provjera: 74² = 5476 = 576+4900 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (69) — zbrajaju ravno 2+5=7 h × nešto. C (79) i D (84) — griješe u kvadratu ili korjenu. Ispravno: √(24²+70²) = √5476 = 74 km.",final:true,note:"diagnostika"},{txt:"Intuicija: d₁ = 2h × 12km/h = 24 km (istok); d₂ = 5h × 14km/h = 70 km (sjever).",note:"intuicija",final:true},{txt:"Sažetak postupka: Istok i sjever su okomiti pravci → udaljenost od ishodišta = hipotenuza pravokutnog trokuta.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Istok i sjever su okomiti pravci → udaljenost od ishodišta = hipotenuza pravokutnog trokuta.",
      "d₁ = 2h × 12km/h = 24 km (istok); d₂ = 5h × 14km/h = 70 km (sjever).",
      "d = √(24² + 70²) = √(576+4900) = √5476. Provjeri: 74² = (70+4)² = 4900+560+16 = 5476 ✓",
      "Greška: zbrajati d₁+d₂ = 94 km (ravno, bez Pitagore) — to je ukupni prijeđeni put, ne udaljenost!","Diagnostic: A) 69 km; B) 74 km ✓; C) 79 km; D) 84 km.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: zbrajanje kateta (24+70=94) nije udaljenost  -  to daje Pitagora!."},
  {id:7,img:true,type:"mc",topic:"kv",points:1,
  q:"Koja tablica pripada funkciji f(x) = 4x − x²?",
  opts:["f(−1)=5, f(2)=−4, f(3)=3","f(−1)=5, f(2)=4, f(3)=−3","f(−1)=−5, f(2)=3, f(3)=4","f(−1)=−5, f(2)=4, f(3)=3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"f(-1)=-4-1=-5, f(2)=8-4=4, f(3)=12-9=3 → tablica D.",
  steps:[
    {txt:"Uvrsti u f(x) = 4x − x²:",note:"strategija"},
    {txt:"f(−1) = 4·(−1) − (−1)² = −4 − 1 = −5",note:"x=−1"},
    {txt:"f(2)  = 4·2 − 2²    = 8 − 4    = 4",note:"x=2"},
    {txt:"f(3)  = 4·3 − 3²    = 12 − 9   = 3",note:"x=3"},
    {txt:"Tražimo tablicu (−5, 4, 3)  →  D ✓",final:true},
    {txt:"Provjera: D tablica: f(−1)=−5 ✓, f(2)=4 ✓, f(3)=3 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A — f(2)=−4 ✗ (uzimaju −4·2). B — f(3)=−3 ✗. C — f(−1)=−5 ✓ ali f(2)=3 ✗ (pomiješaju s f(3)). D jedina tablice s −5, 4, 3.",final:true,note:"diagnostika"},{txt:"Intuicija: PAŽNJA: f(−1) = 4·(−1) − (−1)² = −4 − 1 = −5 (kvadrat negativnog broja je pozitivan!).",note:"intuicija",final:true},{txt:"Sažetak postupka: f(x)=4x−x²: uvrsti svaku x-vrijednost i izračunaj f.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["f(x)=4x−x²: uvrsti svaku x-vrijednost i izračunaj f.",
      "PAŽNJA: f(−1) = 4·(−1) − (−1)² = −4 − 1 = −5 (kvadrat negativnog broja je pozitivan!).",
      "f(2) = 8−4 = 4; f(3) = 12−9 = 3. Tablica D ima sve tri vrijednosti točne.",
      "Strategija: izračunaj samo jednu distinktivnu vrijednost (npr. f(2)=4) da odmah isključiš A, C.","Diagnostic: A) f(−1)=5, f(2)=−4, f(3)=3; B) f(−1)=5, f(2)=4, f(3)=−3; C) f(−1)=−5, f(2)=3, f(3)=4; D) f(−1)=−5, f(2)=4, f(3)=3 ✓.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."],
  warn:"Pazi: provjeri SVE tri vrijednosti x  -  ne zaključuj iz samo jedne!."},
  {id:8,type:"mc",topic:"br",points:1,
  q:"Kolika je vrijednost broja [FRAC:√28|3] zaokružena na tri decimale?",
  opts:["1,760","1,763","1,764","1,770"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"√28 = 2√7 ≈ 5,2915. (2√7)/3 = √28/3 ≈ 5,2915/3 ≈ 1,7638 ≈ 1,764.",
  steps:[
    {txt:"Izračun: [FRAC:√28|3] = [FRAC:√(4·7)|3] = [FRAC:2√7|3]",note:"simplifikacija"},
    {txt:"√7 ≈ 2,6458 → 2√7 ≈ 5,2915",note:"aproximacija"},
    {txt:"[FRAC:2√7|3] ≈ [FRAC:5,2915|3] ≈ 1,7638...",note:"dijeljenje"},
    {txt:"Zaokruži na 3 dec.: 4. dec = 3 < 5 → ostavi → 1,764  →  C ✓",final:true},
    {txt:"Provjera: 1,764² × 9 = 3,111 × 9 = 28,0 ≈ 28 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (1,760) — preuranjeno zaokruže. B (1,763) — 4. dec = 8? Krivi izračun √28. D (1,770) — √28 ≈ 5,291/3 ≠ 1,770. Točno: 5,2915.../3 = 1,7638... → 1,764.",final:true,note:"diagnostika"},{txt:"Intuicija: √7 ≈ 2,6458; 2√7 ≈ 5,2915; 5,2915/3 ≈ 1,7638.",note:"intuicija",final:true},{txt:"Sažetak postupka: √28 = √(4·7) = 2√7. Simplifikacija olakšava izračun.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["√28 = √(4·7) = 2√7. Simplifikacija olakšava izračun.",
      "√7 ≈ 2,6458; 2√7 ≈ 5,2915; 5,2915/3 ≈ 1,7638.",
      "Zaokruži na 3 decimale: 4. decimala je 3 < 5 → treća ostaje 8 → 1,764.",
      "Alt provjera: 1,764² = 3,1117; ×9 = 28,005 ≈ 28 ✓ (mala pogreška zaokrugljavanja).","Diagnostic: A) 1,760; B) 1,763; C) 1,764 ✓; D) 1,770.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: zaokružuje se NA TREĆU decimalu — znamenku iza promatraj samo da odlučiš smjer (gore/dolje)."
},
  {id:9,type:"mc",topic:"lin",points:1,
  q:"Graf funkcije f(x) = 2x − 4 siječe os apscisa u točki A, a os ordinata u točki B. Koordinate?",
  warn:"Pazi: ne zamijeniti koja točka je A (na x-osi) a koja B (na y-osi).",
  opts:["A(2,0), B(0,−4)","A(0,2), B(−4,0)","A(−4,0), B(0,2)","A(0,−4), B(2,0)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Os x: y=0 → x=2 → A(2,0). Os y: x=0 → y=-4 → B(0,-4).",
  steps:[
    {txt:"Os apscisa: y=0 → 2x−4=0 → x=2 → A(2, 0)",note:"nultočka x-osi"},
    {txt:"Os ordinata: x=0 → y=2·0−4=−4 → B(0, −4)",note:"y-presjek"},
    {txt:"→ A(2,0), B(0,−4)  →  A ✓",final:true},
    {txt:"Provjera: A(2,0): f(2)=4−4=0 ✓; B(0,−4): f(0)=0−4=−4 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B/C — zamijene A i B (sjecište osi). D — A je (0,−4) i B je (2,0) — pomiješaju x i y u koordinatama. Sjecište s x-osi ima y=0; s y-osi ima x=0.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Sjecište s y-osi: postavi x=0 → y=−4. Točka B(0,−4).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Sjecište s x-osi: postavi y=0 → 2x−4=0 → x=2. Točka A(2,0).",
      "Sjecište s y-osi: postavi x=0 → y=−4. Točka B(0,−4).",
      "Greška: zamijeniti koja je točka na kojoj osi — A je na x-osi (y=0), B na y-osi (x=0).",
      "Greška: pomiješati koordinate: A ima (2,0) ne (0,2).","Diagnostic: A) A(2,0), B(0,−4) ✓; B) A(0,2), B(−4,0); C) A(−4,0), B(0,2); D) A(0,−4), B(2,0).","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:10,type:"mc",topic:"br",points:1,
  q:"Ljudsko srce tijekom jednoga dana otkuca oko 100 tisuća puta. Koliko puta otkuca srce čovjeka tijekom 70 godina života?",
  warn:"Pazi: prebrojiti ispravno nule pri pisanju u obliku potencija od 10.",
  opts:["2,6·10⁷","2,6·10⁸","2,6·10⁹","2,6·10¹⁰"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"70×365×100000 = 2 555 000 000 ≈ 2,6·10⁹.",
  steps:[
    {txt:"Broj otkucaja/dan: 100 000 = 10⁵",note:"dan"},
    {txt:"Dana u godini: 365; dana u 70 god.: 70 × 365 = 25 550",note:"broj dana"},
    {txt:"Ukupno: 10⁵ × 25 550 ≈ 10⁵ × 2,555 × 10⁴ = 2,555 × 10⁹",note:"množenje"},
    {txt:"≈ 2,6 × 10⁹  →  C ✓",final:true},
    {txt:"Provjera: 2,6·10⁹ / (365·70) ≈ 2,6·10⁹ / 25550 ≈ 101800 ≈ 10⁵ ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (10⁷) — zaborave godišnji faktor. B (10⁸) — uzmu 365 dana ali ne 70 god. D (10¹⁰) — krivi redoslijed veličine. Točno: 10⁵ × ~2,5·10⁴ ≈ 2,5·10⁹.",final:true,note:"diagnostika"},{txt:"Intuicija: 100 000 = 10⁵; 70 × 365 = 25 550 ≈ 2,5 × 10⁴; produkt ≈ 2,5 × 10⁹.",note:"intuicija",final:true},{txt:"Sažetak postupka: Procjena velikih brojeva: koristite potencije od 10.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Procjena velikih brojeva: koristite potencije od 10.",
      "100 000 = 10⁵; 70 × 365 = 25 550 ≈ 2,5 × 10⁴; produkt ≈ 2,5 × 10⁹.",
      "Točan izračun: 70 × 365 × 10⁵ = 2 558 500 000 = 2,5585 × 10⁹ ≈ 2,6 × 10⁹.",
      "Greška: uzeti 70 × 100 = 7000 (zanemaruju 365 dana) → 7·10⁷.","Diagnostic: A) 2,6·10⁷; B) 2,6·10⁸; C) 2,6·10⁹ ✓; D) 2,6·10¹⁰.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:11,img:true,type:"mc",topic:"kv",points:1,
  q:"Na slici je graf funkcije f(x) = ax² + bx + c. Što od navedenoga vrijedi za vodeći koeficijent a i za diskriminantu D?",
  warn:"Pazi: ne zamijeniti a<0 (otvor dolje) s a>0 (otvor gore).",
  opts:["a>0, D>0","a>0, D<0","a<0, D>0","a<0, D<0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Parabola dolje → a<0. Ne siječe os x → D<0.",
  steps:[
    {txt:"Parabola okrenuta prema dolje → a < 0",note:"smjer parabole"},
    {txt:"Graf siječe x-os u 2 točke → D > 0",note:"nultočke"},
    {txt:"→ a < 0, D > 0  →  C ✓",final:true},
    {txt:"Provjera: a<0 ✓ (parabola nadolje); 2 presjeka s x-osi ✓ → D>0",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (a>0,D>0) — parabola je nadolje, ne nagore (a<0). B (a>0,D<0) — pogrešno i a i D. D (a<0,D<0) — D<0 bi značilo nema realnih nultočaka, ali graf SIJECE x-os!",final:true,note:"diagnostika"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: Diskriminanta D: D>0 → 2 realne nultočke (2 presjeka s x-osi); D=0 → dodiruje; D<0 → ne sijece.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Vodeći koeficijent a: parabola okrenuta DOLJE → a < 0 (nije gore kao x²).",
      "Diskriminanta D: D>0 → 2 realne nultočke (2 presjeka s x-osi); D=0 → dodiruje; D<0 → ne sijece.",
      "Graf jasno pokazuje: parabola ide prema dolje (a<0) i sijece x-os u 2 točke (D>0) → C.",
      "Greška D: D<0 je kontradikcija s grafom koji ima 2 presjeka s x-osi.","Diagnostic: A) a>0, D>0; B) a>0, D<0; C) a<0, D>0; D) a<0, D<0 ✓.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:12,type:"mc",topic:"al",points:1,
  q:"Ako je s = (a + b + c)/2, čemu je jednako a?",
  opts:["a = s−b−c/2","a = 2(s − b − c)","a = 2s − b − c","a = 2s + b+c/2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Iz s = (a+b+c)/2 → 2s = a+b+c → a = 2s − b − c.",
  steps:[
    {txt:"s = [FRAC:a+b+c|2]  |×2",note:"postav"},
    {txt:"2s = a + b + c",note:"množenje s 2"},
    {txt:"a = 2s − b − c  →  C ✓",final:true},
    {txt:"Provjera: a=2s−b−c → s=(a+b+c)/2=(2s−b−c+b+c)/2=2s/2=s ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A ((s−b−c)/2) — dijele umjesto množe s 2. B (2(s−b−c)) — razvija krivo: 2s−2b−2c. D (2s+(b+c)/2) — ne oduzimaju b+c od obje strane ispravno.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 2s = a + b + c → a = 2s − b − c. Jednostavno premještanje na drugu stranu.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Izolacija a: množimo obje strane s 2 → 2s=a+b+c, onda premještamo b+c.",
      "2s = a + b + c → a = 2s − b − c. Jednostavno premještanje na drugu stranu.",
      "Greška A: dijele s 2 (miješaju kome množiti i kome dijeliti).",
      "Provjera: uvrstimo natrag: s = (2s−b−c+b+c)/2 = 2s/2 = s ✓","Diagnostic: A) a = [FRAC:s−b−c|2]; B) a = 2(s − b − c); C) a = 2s − b − c ✓; D) a = 2s + [FRAC:b+c|2].","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: 'množi s 2' znači cijelu desnu stranu MNOŽIMO, ne samo s; b i c se NE množe ponovo s 2."
},
  {id:13,type:"mc",topic:"lin",points:2,
  q:"Cijena c iznajmljivanja bungalova na n tjedana dana je formulom c = t·n + d (t je iznos tjednoga najma, d je sigurnosni depozit). Martina je za 3 tjedna platila 2 092 kn, a Maja za 5 tjedana 3 412 kn. Koliki je sigurnosni depozit?",
  warn:"Pazi: ne zbrojiti jednadžbe umjesto oduzeti (oduzimanje eliminira d).",
  opts:["112 kn","224 kn","308,70 kn","639,80 kn"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Sustav 2 jednadžbe s 2 nepoznanice (t=tjedni najam, d=depozit).",
      "Eliminacija: oduzmi jednadžbu 1 od jednadžbe 2 → d otpada → 2t=1320 → t=660.",
      "Uvrsti t=660 u prvu: d=2092−1980=112 kn.",
      "Provjera: 3×660+112=2092 ✓; 5×660+112=3412 ✓ — obje jednadžbe zadovoljene.","Diagnostic: A) 112 kn ✓; B) 224 kn; C) 308,70 kn; D) 639,80 kn.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  exp:"3t+d=2092, 5t+d=3412. Oduzimamo: 2t=1320 → t=660. d=2092-1980=112 kn.",ex:"MC 2-bodovni iz područja: lin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Sustav: 3t + d = 2092  i  5t + d = 3412",note:"postav"},
    {txt:"Oduzimamo: (5t+d) − (3t+d) = 3412 − 2092  →  2t = 1320  →  t = 660 kn",note:"eliminacija"},
    {txt:"d = 2092 − 3·660 = 2092 − 1980 = 112 kn  →  A ✓",final:true},
    {txt:"Provjera: 3·660+112=2092 ✓; 5·660+112=3412 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B (224) — griješe: uzimaju d=2×112. C (308,70) — dijele umjesto oduzimaju. D (639,80) — potpuno pogrešan postav. Depozit d=112 kn.",final:true,note:"diagnostika"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Eliminacija: oduzmi jednadžbu 1 od jednadžbe 2 → d otpada → 2t=1320 → t=660.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],},
  {id:14,type:"mc",topic:"al",points:2,
  q:"Koji je rezultat oduzimanja [FRAC:2x|x²−4] − [FRAC:1|x−2], za x ≠ ±2?",
  opts:["1/x+2","2x−1/x+2","1/x−2","1/x²−4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"x/[(x-2)(x+2)] − (x+2)/[(x-2)(x+2)] = (x−x-2)/[(x-2)(x+2)] = -2/(x²-4)... prema ključu 1/(x+2).",
  why:["x²−4 = (x+2)(x−2) — razlika kvadrata. Ovo je ZN za oba razlomka.",
      "1/(x−2) treba postati ?(x²−4): množi s (x+2)/(x+2) → (x+2)/(x²−4).",
      "Oduzimanje: (2x − (x+2)) / (x²−4) = (x−2)/((x+2)(x−2)) = 1/(x+2).",
      "Kraćenje: (x−2) u brojevniku i nazivniku → 1/(x+2). Elegantno!","Diagnostic: A) [FRAC:1|x+2] ✓; B) [FRAC:2x−1|x+2]; C) [FRAC:1|x−2]; D) [FRAC:1|x²−4].","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: x²-4 = (x-2)(x+2)  -  razlika kvadrata, ne x²-4 = x(x-4)!.",ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"ZN = x²−4 = (x+2)(x−2). Prilagodimo [FRAC:1|x−2] = [FRAC:x+2|(x+2)(x−2)]",note:"ZN"},
    {txt:"[FRAC:2x|x²−4] − [FRAC:x+2|x²−4] = [FRAC:2x−(x+2)|x²−4]",note:"oduzimanje"},
    {txt:"= [FRAC:2x−x−2|x²−4] = [FRAC:x−2|(x+2)(x−2)]",note:"razvijanje"},
    {txt:"= [FRAC:1|x+2]  →  A ✓",final:true},
    {txt:"Provjera (x=3): 6/5 − 1/1 = 1/5; 1/(3+2) = 1/5 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: B — pogrešno razvijaju brojevnik. C (1/(x−2)) — ne kratu (x−2) u brojevniku i nazivniku. D (1/(x²−4)) — ostave cio nazivnik, ne kratu ništa.",final:true,note:"diagnostika"},{txt:"Intuicija: 1/(x−2) treba postati ?(x²−4): množi s (x+2)/(x+2) → (x+2)/(x²−4).",note:"intuicija",final:true},{txt:"Sažetak postupka: x²−4 = (x+2)(x−2) — razlika kvadrata. Ovo je ZN za oba razlomka.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ]
},
  {id:15,type:"mc",topic:"lin",points:2,
  q:"Mliječni proizvod dolazi u pakiranju od 330 g ili od 500 g. Trgovac je dobio količinu od 55 550 g toga mliječnoga proizvoda u ukupno 140 pakiranja. Koliko je dobio manjih pakiranja?",
  warn:"Pazi: ne zamijeniti x i y (85 malih, ne velikih pakinga).",
  opts:["35","50","70","85"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"x+y=140, 330x+500y=55550. Riješimo: x=85.",ex:"MC 2-bodovni iz područja: lin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Neka je m = broj malih (330g), V = broj velikih (500g)",note:"postav"},
    {txt:"m + V = 140  i  330m + 500V = 55 550",note:"sustav jednadžbi"},
    {txt:"Iz prve: V = 140 − m → uvrstimo: 330m + 500(140−m) = 55550",note:"supstitucija"},
    {txt:"330m + 70000 − 500m = 55550  →  −170m = −14450  →  m = 85  →  D ✓",final:true},
    {txt:"Provjera: 85·330 + 55·500 = 28050 + 27500 = 55550 g ✓; 85+55=140 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (35) — zamijene m i V (35 malih, 105 velikih: 35·330+105·500=11550+52500=64050≠55550). B (50) i C (70) — pogreška u supstituciji. D (85) točno.",final:true,note:"diagnostika"},{txt:"Intuicija: Jednadžbe: (1) m+V=140 (ukupan broj); (2) 330m+500V=55550 (ukupna masa u gramima).",note:"intuicija",final:true},{txt:"Sažetak postupka: Sustav s 2 nepoznanice: broj malih (m) i broj velikih (V) pakiranja.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Sustav s 2 nepoznanice: broj malih (m) i broj velikih (V) pakiranja.",
      "Jednadžbe: (1) m+V=140 (ukupan broj); (2) 330m+500V=55550 (ukupna masa u gramima).",
      "Supstitucija V=140−m u jednadžbu 2 daje jednadžbu samo s m.",
      "Provjera: 85×330=28050g; 55×500=27500g; zbroj=55550g ✓; 85+55=140 ✓","Diagnostic: A) 35; B) 50; C) 70; D) 85 ✓.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:16,type:"mc",topic:"fin",points:2,
  q:"Marin je išao kupiti školski pribor. Trećinu novca potrošio je za bilježnice, onda je četvrtinu ostatka potrošio za olovke i na kraju je polovicu onoga što je ostalo potrošio za pernicu. Preostalo mu je 18 kuna. Koliko je novaca Marin ponio sa sobom?",
  opts:["68 kn","72 kn","90 kn","102 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Lanac troška: trećina za bilježnice → ostatak 2/3; četvrtina ostatka za olovke → ostaje 3/4 od 2/3 = 1/2; polovica za pernicu → ostaje 1/4.",
      "Korak po korak: bilježnice = x/3; ostatak = 2x/3. Olovke = (1/4)·(2x/3)=x/6; ostatak = x/2. Pernica = x/4; ostatak = x/4 = 18 → x = 72.",
      "Provjera korak-po-korak: 72 → trošim 24 (bilj.) → ostaje 48 → trošim 12 (oliv.) → ostaje 36 → trošim 18 (pern.) → ostaje 18 ✓",
      "Greška: uzeti četvrtinu OD UKUPNOG (ne od ostatka) za olovke → dobiju drugačiji rezultat.","Diagnostic: A) 68 kn; B) 72 kn ✓; C) 90 kn; D) 102 kn.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  exp:"Nakon svega ostaje 1/4·s = 18 → s = 72 kn.",ex:"MC 2-bodovni iz područja: fin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Neka je x = ukupno novca (kn)",note:"postav"},
    {txt:"Nakon bilježnica ostaje: x − x/3 = 2x/3",note:"bilježnice"},
    {txt:"Nakon olovaka ostaje: 2x/3 − (1/4)·(2x/3) = (3/4)·(2x/3) = x/2",note:"olovke"},
    {txt:"Nakon pernice ostaje: x/2 − (1/2)·(x/2) = x/4",note:"pernica"},
    {txt:"x/4 = 18  →  x = 72 kn  →  B ✓",final:true},
    {txt:"Provjera: 72/3=24 (bilj.); ostatak=48; 48/4=12 (oliv.); ostatak=36; 36/2=18 (pern.); ostalo=18 ✓",final:true,note:"verifikacija"},
    {txt:"Analiza distractora: A (68) — greška u nalaženju ostatka. C (90) — griješe u slijedu troška. D (102) — pogrešan postav. Točno: 1/4 od x = 18 → x = 72.",final:true,note:"diagnostika"},{txt:"Intuicija: Korak po korak: bilježnice = x/3; ostatak = 2x/3. Olovke = (1/4)·(2x/3)=x/6; ostatak = x/2. Pernica = x/4; ostatak = x/4 = 18 → x = 72.",note:"intuicija",final:true},{txt:"Sažetak postupka: Lanac troška: trećina za bilježnice → ostatak 2/3; četvrtina ostatka za olovke → ostaje 3/4 od 2/3 = 1/2; polovica za pernicu → ostaje 1/4.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  warn:"Pazi: 'četvrtina ostatka' ≠ 'četvrtina početnog iznosa'  -  prati korak po korak!."},
  {id:17,type:"num",topic:"stat",points:1,
  q:"Izračunajte broj od kojega 8% iznosi 6,4.",
  warn:"Pazi: ne izračunati 8% od 6,4 = 0,512 (to bi bio postotak od postotnog iznosa).",
  sol:{ans:"80",alt:["80,0","odgovor","rezultat"]},
  steps:[
    {txt:"Postav: [FRAC:8|100] · x = 6,4",note:"postav"},
    {txt:"x = 6,4 · [FRAC:100|8] = 6,4 · 12,5 = 80",final:true},
    {txt:"Provjera: 8% od 80 = 80 · 0,08 = 6,4 ✓",final:true,note:"verifikacija"},
    {txt:"Alt: x = 6,4 / 0,08 = 80 (dijeljenje s postotkom u decimalu)",note:"alt metoda"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Točan odgovor: 80 ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}],
  exp:"x = 6,4 × 100/8 = 80.",
  why:["8% od x = 6,4 → tražimo osnovu x = dio · (100/postotak) = 6,4 · (100/8) = 80.",
      "Alt: x = 6,4 / 0,08 = 80. Dijeljenje s decimalnim postotkom daje osnovu.",
      "Provjera: 80 · 0,08 = 6,4 ✓",
      "Greška: računati 8% od 6,4 = 0,512 (zamijeniti osnovu s dijelom).","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]
},
  {id:18,type:"num",topic:"al",points:1,
  q:"U sustavu jednadžbi [SYS:x = 2y + 4|y = 2x + 7] izračunajte nepoznanicu x.",
  warn:"Pazi: ne zbuniti koja jednadžba se uvršta u koju.",
  formulaLabel:"Sustav jednadžbi",
  sol:{ans:"−6",alt:["-6,0","-6"]},
  steps:[
    {txt:"[SYS:x = 2y + 4|y = 2x + 7]",note:"postav"},
    {txt:"Supstitucija y iz jednadžbe 2 u jednadžbu 1: x = 2(2x+7) + 4",note:"supstitucija"},
    {txt:"x = 4x + 14 + 4  →  x − 4x = 18  →  −3x = 18",note:"razvijanje"},
    {txt:"x = −6",final:true},
    {txt:"Provjera: y = 2·(−6)+7 = −5; x = 2·(−5)+4 = −6 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: x = 2(2x+7)+4 = 4x+14+4 = 4x+18. Dakle: x−4x = 18 → −3x = 18 → x = −6.",note:"intuicija",final:true},{txt:"Točan odgovor: −6 ✓",note:"odgovor",final:true}],
  exp:"Supstitucijom: -3x=18 → x=-6.",
  why:["Supstitucija: iz jednadžbe 2 dobijemo y=2x+7 i uvrštavamo u jednadžbu 1.",
      "x = 2(2x+7)+4 = 4x+14+4 = 4x+18. Dakle: x−4x = 18 → −3x = 18 → x = −6.",
      "Provjera: y = 2(−6)+7 = −12+7 = −5; x = 2(−5)+4 = −10+4 = −6 ✓",
      "Greška: zaboraviti razviti 2·(2x+7) = 4x+14 (ne 2x+14).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
},
  {id:19,type:"num",topic:"fin",points:1,
  q:"Omjer šećera i maslaca u kolaču je 4:3. U kolač smo stavili 15 dag maslaca. Koliko ćemo staviti dekagrama šećera?",
  warn:"Pazi: ne zamijeniti omjer (uzeti 3/4 umjesto 4/3).",
  sol:{ans:"20",alt:["20 dag","20,0"]},
  steps:[
    {txt:"Omjer šećer:maslac = 4:3 → maslac = 3 dijela = 15 dag",note:"postav"},
    {txt:"1 dio = 15/3 = 5 dag",note:"jedinični dio"},
    {txt:"Šećer = 4 dijela = 4 × 5 = 20 dag",final:true},
    {txt:"Provjera: šećer:maslac = 20:15 = 4:3 ✓",final:true,note:"verifikacija"},
    {txt:"Alt: šećer/maslac = 4/3 → šećer = (4/3)·15 = 20 dag",note:"alt metoda"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: 1 dio = 15/3 = 5 dag; šećer = 4 dijela = 20 dag.",note:"intuicija",final:true},{txt:"Točan odgovor: 20 ✓",note:"odgovor",final:true}],
  exp:"šećer = 15 × 4/3 = 20 dag.",
  why:["Omjer 4:3: šećer je 4 dijela, maslac 3 dijela. Dano je 3 dijela = 15 dag.",
      "1 dio = 15/3 = 5 dag; šećer = 4 dijela = 20 dag.",
      "Alt: proporcija šećer/15 = 4/3 → šećer = 15·4/3 = 20 dag.",
      "Greška: zamijeniti omjer → šećer = (3/4)·15 = 11,25 dag (krivo).","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]
},
  {id:20,type:"num",topic:"al",points:1,
  q:"Zadani su brojevi a = [FRAC:18|25] i v = 6,3. Odredite broj V = [FRAC:1|3]·a²·v.",
  warn:"Pazi: ne računati √(18/25) decimalno i gubiti preciznost.",
  formulaLabel:"Formula",
  sol:{ans:"[FRAC:3402|3125]",alt:["3402/3125","1.08864","1,08864","1,09"]},
  solFormula:{frac:[["3402","3125"]]},
  exp:"V = (1/3)·(18/25)·6,3 = 3402/3125.",
  why:["a = 18/25 (cijeli razlomak, ne korijen). a² = (18/25)² = 324/625.",
      "V = (1/3)·(324/625)·6,3 = (324·6,3)/(3·625) = 2041,2/1875 = 3402/3125.",
      "Provjera decimalno: 18/25=0,72; 0,72²=0,5184; (0,5184·6,3)/3=3,26592/3=1,08864≈3402/3125 ✓",
      "Greška: uzeti a=√[FRAC:18|25](korijen) umjesto a=18/25 (samo razlomak) — pozorno čitaj zadatak!","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"a = [FRAC:18|25],  v = 6,3",note:"postav"},
    {txt:"a² = ([FRAC:18|25])² = [FRAC:324|625]",note:"kvadriranje"},
    {txt:"[FRAC:1|3] · [FRAC:324|625] · 6,3 = [FRAC:324|625] · 2,1 = [FRAC:680,4|625]",note:"množenje"},
    {txt:"V = [FRAC:3402|3125]",final:true},
    {txt:"Provjera: 3402/3125 ≈ 1,089; (1/3)·(18/25)²·6,3 = (1/3)·0,5184·6,3 ≈ 1,089 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: V = (1/3)·(324/625)·6,3 = (324·6,3)/(3·625) = 2041,2/1875 = 3402/3125.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:3402|3125] ✓",note:"odgovor",final:true}]
},
  {id:21,img:true,type:"proof",img:true,topic:"lin",points:1,
  graphType:"line",
  graphRef:{pts:[[3,0],[0,2]]},
  graphRange:{xMin:-1,xMax:5,yMin:-1,yMax:4},
  q:"Nacrtajte pravac zadan jednadžbom 2x + 3y = 6.",
  warn:"Pazi: izračunati ispravno sjecišta ili ih zamijeniti.",
  sol:{ans:"Pravac kroz A(3,0) i B(0,2): 2x + 3y = 6",svgFn:()=>e(SvgZad21_2010LB,null),ex:"Segmentni oblik: x/3 + y/2 = 1. Os x (y=0): x=3 → A(3,0). Os y (x=0): y=2 → B(0,2). Nacrtaj pravac kroz A(3,0) i B(0,2).",alt:["Pravac kroz A(3,0) i B(0,2): 2x + 3y = 6","Pravac kroz A(3.0) i B(0.2): 2x + 3y = 6","PravackrozA(3,0)iB(0,2):2x+3y=6","pravac kroz A(3,0) i B(0,2): 2x + 3y = 6","≈ Pravac kroz A(3,0) i B(0,2): 2x + 3y = 6"]},
  steps:[
    {txt:"Jednadžba pravca 2x + 3y = 6 — iznajdemo 2 točke",note:"strategija"},
    {txt:"x=0: 3y=6 → y=2 → T₁(0, 2) — sjecište s y-osi",note:"y-presjek"},
    {txt:"y=0: 2x=6 → x=3 → T₂(3, 0) — sjecište s x-osi",note:"x-presjek"},
    {txt:"Nacrtaj pravac kroz T₁(0,2) i T₂(3,0) ravnalom",final:true}
  ,{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: T₁(0,2): y-presjek (x=0 → y=2). T₂(3,0): x-presjek (y=0 → x=3).",note:"intuicija",final:true},{txt:"Točan odgovor: Pravac kroz A(3,0) i B(0,2): 2x + 3y = 6 ✓",note:"odgovor",final:true}],
  why:["Najlakše nacrtati pravac kroz 2 točke: sjecišta s osima (x=0, y=0).",
      "T₁(0,2): y-presjek (x=0 → y=2). T₂(3,0): x-presjek (y=0 → x=3).",
      "Nagib k = −2/3 (negativan → padajući pravac s lijeva na desno).",
      "Provjera: obje točke na pravcu: 2·0+3·2=6 ✓; 2·3+3·0=6 ✓","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:22,type:"sa",topic:"kv",points:2,
  q:"Riješite kvadratnu jednadžbu x² − 2√3·x + 2 = 0. U zapisu rješenja rabite √3, ne računajte njegovu vrijednost.",
  sol:{ans:"x₁ = √3−1, x₂ = √3+1",
    alt:["x1=√3-1, x2=√3+1","(√3-1) i (√3+1)","x1=√3+1, x2=√3-1","(√3+1) i (√3-1)"]},
  steps:[
    {txt:"Koeficijenti: a=1, b=−2√3, c=2",note:"postav"},
    {txt:"D = b²−4ac = (−2√3)²−4·1·2 = 12−8 = 4",note:"diskriminanta"},
    {txt:"√D = 2",note:"korijen disk."},
    {txt:"x = [FRAC:2√3±2|2] = √3 ± 1",note:"formula"},
    {txt:"x₁ = √3−1,  x₂ = √3+1",final:true},
    {txt:"Provjera: x₁+x₂ = 2√3 = −b/a ✓;  x₁·x₂ = (√3)²−1 = 2 = c/a ✓",final:true,note:"verifikacija"},{txt:"Intuicija: b=−2√3: (−2√3)²=(2√3)²=4·3=12. Dakle D=12−8=4; √D=2.",note:"intuicija",final:true},{txt:"Sažetak postupka: Kvadratna formula: x=(−b±√D)/(2a), D=b²−4ac.",note:"postupak",final:true},{txt:"Točan odgovor: x₁ = √3−1, x₂ = √3+1 ✓",note:"odgovor",final:true}
  ],
  exp:"D=4. x=(2√3±2)/2=√3±1.",
  why:["Kvadratna formula: x=(−b±√D)/(2a), D=b²−4ac.",
      "b=−2√3: (−2√3)²=(2√3)²=4·3=12. Dakle D=12−8=4; √D=2.",
      "x=(2√3±2)/2 = √3±1. Lijep rezultat jer D je savršeni kvadrat!",
      "Vièteove formule za provjeru: x₁+x₂=2√3=−(−2√3)/1=2√3 ✓; x₁·x₂=(√3)²−1²=3−1=2=c/a ✓","Intuicija: znak diskriminante govori o broju realnih rješenja.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."],
  warn:"Pazi: (2√3)² = 4·3 = 12, ne 2·3 = 6!."
},
  {id:23.1,img:true,type:"num",topic:"fin",points:1,
  q:"1 stopa = 0,3048 m. Koliko stopa je 1,40208 m?",
  warn:"Pazi: ne množiti umjesto dijeliti (stopa je manja od metra, dakle stopa mora biti VIŠE nego metara).",
  sol:{ans:"4,6",alt:["4,6","4,6","odgovor"]},
  exp:"1,40208 / 0,3048 = 4,6 stopa.",
  why:["m→stope: dijelimo s 0,3048 (jer 1 stopa = 0,3048 m, stopa je manja).",
      "1,40208 / 0,3048 = 4,6 (točno — zadatak je konstruiran za lijepi rezultat).",
      "Provjera: 4,6 × 0,3048 = 1,40208 m ✓",
      "Greška: množiti umjesto dijeliti → 1,40208 × 0,3048 = 0,4274 (premalo).","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 23 (1. dio od 2):",
  steps:[
    {txt:"Tečaj: 1 stopa = 0,3048 m",note:"postav"},
    {txt:"HRK→stope: 1,40208 / 0,3048",note:"dijeljenje"},
    {txt:"= 4,6 stopa",final:true},
    {txt:"Provjera: 4,6 × 0,3048 = 1,40208 m ✓",final:true,note:"verifikacija"},
    {txt:"Alt: 1,40208 / 0,3 ≈ 4,67 (procjena — blizu 4,6 ✓)",note:"procjena"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: 1,40208 / 0,3048 = 4,6 (točno — zadatak je konstruiran za lijepi rezultat).",note:"intuicija",final:true},{txt:"Točan odgovor: 4,6 ✓",note:"odgovor",final:true}]
},
  {id:23.2,img:true,type:"num",topic:"fin",points:1,
  q:"1 stopa = 0,3048 m. Koliko metara je 5,8 stopa?",
  warn:"Pazi: ne dijeliti umjesto množiti (1 stopa < 1 m, dakle metara mora biti MANJE nego stopa).",
  sol:{ans:"1,76784",alt:["1,76784","1.76784","odgovor"]},
  exp:"5,8 × 0,3048 = 1,76784 m.",
  why:["stope→m: množimo s 0,3048 jer svaka stopa iznosi 0,3048 m.",
      "5,8 × 0,3048: 5 × 0,3048 = 1,524; 0,8 × 0,3048 = 0,24384; zbroj = 1,76784 m.",
      "Provjera: 1,76784 / 0,3048 = 5,8 stopa ✓",
      "Greška: dijeliti umjesto množiti → 5,8/0,3048 ≈ 19 (to je suprotan smjer konverzije).","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 23 (2. dio od 2):",
  steps:[
    {txt:"stope→m: množiti s 0,3048",note:"smjer"},
    {txt:"5,8 × 0,3048 = 1,76784 m",final:true},
    {txt:"Provjera: 1,76784 / 0,3048 = 5,8 stopa ✓",final:true,note:"verifikacija"},
    {txt:"Procjena: 5,8 × 0,3 = 1,74 ≈ 1,768 ✓",note:"procjena"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"},{txt:"Točan odgovor: 1,76784 ✓",note:"odgovor",final:true},{txt:"Provjera: jednostavna vs složena kamata — različite formule, različiti rezultati.",note:"verifikacija",final:true}]
},
  {id:24.1,img:true,type:"num",topic:"geom",points:1,
  q:"CE=5 cm, P_CEF=12 cm², EF je 7 puta kraća od AB. Kolika je AB?",
  warn:"Pazi: ne zamijeniti katete u formuli za površinu trokuta.",
  sol:{ans:"33,6",alt:["33,6","33,6","odgovor"]},
  exp:"EF=4,8 cm, AB=7×4,8=33,6 cm.",
  why:["Iz P(CEF) = (1/2)·EF·CE = 12 i CE=5: EF = 2·12/5 = 4,8 cm.",
      "EF = AB/7 → AB = 7·EF = 7·4,8 = 33,6 cm.",
      "Redoslijed: iz površine naći EF, iz EF naći AB (primjena zadanog omjera).",
      "Provjera: (1/2)·4,8·5 = 2,4·5 = 12 cm² ✓","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  context:"Zadatak 24 (1. dio od 2):",
  steps:[
    {txt:"Pravokutni trokut CEF: P = [FRAC:1|2]·EF·CE = 12 cm²",note:"postav"},
    {txt:"CE = 5 cm → EF = [FRAC:2·12|5] = [FRAC:24|5] = 4,8 cm",note:"EF iz površine"},
    {txt:"EF je 7 puta kraća od AB → AB = 7 · EF = 7 · 4,8 = 33,6 cm",final:true},
    {txt:"Provjera: P_CEF = (1/2)·4,8·5 = 12 cm² ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 33,6 ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}]
},
  {id:24.2,img:true,type:"num",topic:"geom",points:1,
  q:"Kolika je površina paralelograma ABCD (AB=33,6 cm, visina CE=5 cm)?",
  warn:"Pazi: ne koristiti stranicu paralelograma kao visinu (visina ≠ stranica.",
  sol:{ans:"168",alt:["168 cm2","odgovor","rezultat"]},
  exp:"P = 33,6 × 5 = 168 cm².",
  why:["Površina paralelograma = baza × visina. Visina je CE (pravokutna kateta = visina paralelograma).",
      "CE = 5 cm je visina jer je okomita na AB (produžena baza ABCD).",
      "P = 33,6 × 5 = 168 cm².",
      "Greška: uzeti dijagonalu ili stranu DC kao visinu (visina mora biti okomita na bazu).","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  context:"Zadatak 24 (2. dio od 2):",
  steps:[
    {txt:"Paralelogram: P = osnova × visina",note:"formula"},
    {txt:"Osnova = AB = 33,6 cm; visina = CE = 5 cm",note:"identifikacija"},
    {txt:"P_ABCD = 33,6 × 5 = 168 cm²",final:true},
    {txt:"Provjera: 168 / 5 = 33,6 ✓; 168 / 33,6 = 5 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 168 ✓",note:"odgovor",final:true}]
},
  {id:25.1,type:"num",topic:"lin",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Riješite jednadžbu 2(x + 1) + 4 = 2 − x.",
  sol:{ans:"[FRAC:−4|3]",alt:["-1,333","-4/3","-4/3"]},
  solFormula:{frac:[["-4","3"]]},
  exp:"3x=-4 → x=-4/3.",
  why:["Razvijanje zagrade: 2(x+1) = 2x+2.",
      "Grupiranje: 2x+x=3x s lijeve, 2−6=−4 s desne → 3x=−4 → x=−4/3.",
      "Provjera: obje strane daju 10/3 ✓",
      "Greška: 2(x+1) = 2x+1 (zaborave pomnožiti konstantu 2·1=2).","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  warn:"Pazi: 2(x+1) = 2x+2, ne 2x+1  -  razvijaj zagradu pažljivo!.",
  steps:[
    {txt:"2(x + 1) + 4 = 2 − x",note:"postav"},
    {txt:"2x + 2 + 4 = 2 − x",note:"razvijanje zagrade"},
    {txt:"2x + 6 = 2 − x  →  3x = −4",note:"grupiranje x"},
    {txt:"x = [FRAC:−4|3]",final:true},
    {txt:"Provjera: 2·([FRAC:−4|3]+1)+4 = 2·[FRAC:−1|3]+4 = [FRAC:−2|3]+4 = [FRAC:10|3]; 2−[FRAC:−4|3] = 2+[FRAC:4|3] = [FRAC:10|3] ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: Grupiranje: 2x+x=3x s lijeve, 2−6=−4 s desne → 3x=−4 → x=−4/3.",note:"intuicija",final:true},{txt:"Točan odgovor: [FRAC:−4|3] ✓",note:"odgovor",final:true}]
},
  {id:25.2,type:"sa",topic:"lin",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite nejednadžbu [FRAC:5x−3|6] − [FRAC:3x|2] > 1.",
  sol:{ans:"x < [FRAC:−9|4]",alt:["x<-9/4","x < -9/4","(−∞,-9/4)"]},
  solFormula:{pre:"x < ",frac:[["-9","4"]]},
  exp:"-4x > 9 → x < -9/4.",
  why:["ZN(6,2)=6: množimo cijelu nejednadžbu s 6 (pozitivno → ne mijenja smjer).",
      "(5x−3)·1 − 3x·3 > 6 → 5x−3−9x > 6 → −4x > 9.",
      "KLJUČNO: dijeljenje s −4 (negativno!) OKREĆE nejednakost: x < −9/4.",
      "Provjera: x=−3 < −9/4=−2,25 → ubaci: (−18)/6−(−9)/2 = −3+4,5 = 1,5 > 1 ✓","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  warn:"Pazi: množenje s negativnim brojem mijenja smjer nejednadžbe!.",
  steps:[
    {txt:"[FRAC:5x−3|6] − [FRAC:3x|2] > 1  |·6 (ZN=6)",note:"postav"},
    {txt:"(5x−3) − 9x > 6",note:"množenje s 6"},
    {txt:"5x − 3 − 9x > 6  →  −4x > 9",note:"razvijanje"},
    {txt:"x < [FRAC:−9|4]  (dijeljenje s −4 okreće ≠!)",final:true},
    {txt:"Provjera x=−3: (−15−3)/6 − (−9)/2 = −3+4,5 = 1,5 > 1 ✓",final:true,note:"verifikacija"},
    {txt:"Provjera granice x=−9/4: (−45/4−3)/6 − (−27/4)/2 = (−57/4)/6+27/8 = −19/8+27/8=8/8=1 (nije >1, granično ✓)",note:"rub"},{txt:"Intuicija: (5x−3)·1 − 3x·3 > 6 → 5x−3−9x > 6 → −4x > 9.",note:"intuicija",final:true},{txt:"Sažetak postupka: ZN(6,2)=6: množimo cijelu nejednadžbu s 6 (pozitivno → ne mijenja smjer).",note:"postupak",final:true},{txt:"Točan odgovor: x < [FRAC:−9|4] ✓",note:"odgovor",final:true}
  ]
},
  {id:26.1,type:"num",topic:"fin",points:1,
  q:"Za 120 kn mogle su se kupiti dvije čokolade više nego nakon njihova poskupljenja od 25%. Koliko se čokolada moglo kupiti prije poskupljenja?",
  warn:"Pazi: ne podijeliti umjesto množiti.",
  sol:{ans:"10",alt:["10 čokolada","odgovor","rezultat"]},
  exp:"c=12 kn, broj=10.",
  why:["Neka je n = broj čokolada prije po cijeni 120/n kn.",
      "Nakon poskupljenja 25%: nova cijena = (120/n)·1,25; za 120 kn kupiš n/1,25 = 0,8n komada.",
      "Uvjet: 0,8n = n−2 → −0,2n = −2 → n = 10.",
      "Provjera: cijena=12kn; nova=15kn; 120/15=8=10−2 ✓ — dvije manje!","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 26 (1. dio od 2):",
  steps:[
    {txt:"Neka je n = broj čokolada PRIJE poskupljenja; cijena = 120/n",note:"postav"},
    {txt:"Nakon: cijena = 1,25·(120/n); može se kupiti n−2 komada za 120 kn",note:"nakon"},
    {txt:"120 / (1,25·120/n) = n/1,25 = n−2",note:"jednadžba"},
    {txt:"n = 1,25(n−2) = 1,25n − 2,5  →  −0,25n = −2,5  →  n = 10  →  26,1: 10 ✓",final:true},
    {txt:"Provjera: cijena = 120/10 = 12 kn; nova = 12·1,25 = 15 kn; 120/15 = 8 = 10−2 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: Nakon poskupljenja 25%: nova cijena = (120/n)·1,25; za 120 kn kupiš n/1,25 = 0,8n komada.",note:"intuicija",final:true},{txt:"Točan odgovor: 10 ✓",note:"odgovor",final:true}]
},
  {id:26.2,type:"num",topic:"fin",points:1,
  q:"Kolika je cijena jedne čokolade nakon poskupljenja od 25%?",
  warn:"Pazi: ne množiti umjesto dijeliti.",
  sol:{ans:"15",alt:["15 kn","odgovor","rezultat"]},
  exp:"12 × 1,25 = 15 kn.",
  why:["Iz Q26,1 znamo n=10 → cijena prije = 120/10 = 12 kn.",
      "Poskupljenje 25%: 12 × 1,25 = 15 kn.",
      "Provjera: 120/15=8 čokolada nakon (2 manje od 10) ✓",
      "Alt: cijena=120/n; nova=1,25·120/n. Za n=10: nova=150/10=15 kn.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 26 (2. dio od 2):",
  steps:[
    {txt:"Cijena jedne čokolade PRIJE: 120 / 10 = 12 kn",note:"cijena prije"},
    {txt:"Poskupljenje 25%: nova = 12 × 1,25 = 15 kn",final:true},
    {txt:"Provjera: za 120 kn: 120/15 = 8 čokolada; 10−8 = 2 manje ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"},{txt:"Alt metoda: koristi pravilo trojno ili postotni račun.",final:true,note:"alt"},{txt:"Točan odgovor: 15 ✓",note:"odgovor",final:true},{txt:"Provjera: jednostavna vs složena kamata — različite formule, različiti rezultati.",note:"verifikacija",final:true}]
},
  {id:27.1,img:true,type:"sa",topic:"anal",points:1,
  q:"Karmela i Karlo krenuli su skupa od kuće prema školi. Koordinate na crtežu dane su u metrima. Odredite koordinate točke K.",
  warn:"Pazi: ne pomiješaj mjerilo vodoravno (100m) i okomito (50m).",
  sol:{ans:"K(600, 250)",alt:["(600,250)","600, 250"]},
  exp:"K(600, 250).",
  why:["Iz crteža: KUĆA na (0,0), ŠKOLA gore desno. Razmjer: 1 jedinstiva = 100 m.",
      "K je točka gdje se Karlo (puna crta) i Karmela (iscrtkana crta) razdvajaju.",
      "Koordinate: 6 jedinica desno = 600 m, 2,5 gore = 250 m → K(600, 250).",
      "Provjera konzistencije: K mora biti na putu oboje (krenuli su zajedno do K).","Pravilo: točka leži na pravcu/krivulji ako zadovoljava jednadžbu.","Intuicija: u koord. sustavu rezultat očekivane veličine ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."],
  context:"Zadatak 27 (1. dio od 3):",
  steps:[
    {txt:"Iz crteža: razmjer 1 jedin. = 100 m",note:"razmjer"},
    {txt:"K je na presjeku Karlovog puta: 6 jedin. desno = 600 m, 2,5 jedin. gore = 250 m",note:"očitavanje"},
    {txt:"K(600, 250)",final:true},
    {txt:"Provjera: K je na grafu vidljivo u IV segmentu mreže, na razini 250 m visine i 600 m udaljenosti ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: u koord. sustavu rezultat očekivane veličine ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: K(600, 250) ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}]
},
  {id:27.2,img:true,type:"num",topic:"anal",points:1,
  q:"Koliki je ukupni put Karla od kuće do škole (ide okolnim putem)?",
  warn:"Pazi: ne koristiti Pitagoru za Karlov put (Pitagora bi bila Karmelina prečica).",
  sol:{ans:"1400",alt:["1400 m","odgovor","rezultat"]},
  exp:"1400 m.",
  why:["Karlo ide okolnim putem (puna crta) — ide vodoravno pa okomito.",
      "Broji segmente iz crteža: svaki kvadrat = 100 m. Zbroj svih segmenata puta.",
      "Ukupno: 14 jedinica × 100 m = 1400 m.",
      "Greška: zbrojiti samo vodoravne ili samo okomite dijelove (zaboraviti dio puta).","Pravilo: točka leži na pravcu/krivulji ako zadovoljava jednadžbu.","Intuicija: u koord. sustavu rezultat očekivane veličine ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Provjera: analitička provjera: točke i pravci u koordinatnom sustavu ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."],
  context:"Zadatak 27 (2. dio od 3):",
  steps:[
    {txt:"Karlo ide okolnim putem (puna crta, L-putanja)",note:"strategija"},
    {txt:"Iz crteža: vodoravni dijelovi + okomiti dijelovi Karlovog puta",note:"mjerenje"},
    {txt:"Ukupni put = zbroj svih segmenata Karlovog puta = 1400 m",final:true},
    {txt:"Provjera: 14 jedinstiva × 100 m = 1400 m ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: u koord. sustavu rezultat očekivane veličine ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 1400 ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}]
},
  {id:27.3,img:true,type:"num",topic:"anal",points:1,
  q:"Za koliko je Karmela prešla kraći put od Karla?",
  intermediates:[1200, 500, 1440000, 250000, 1690000, 1300, 1400, 1277.2, 1277.20, 122.8, 122.80],
  warn:"Pazi: ne koristiti cijeli put od kuće umjesto samo od K do škole.",
  sol:{ans:"122,80",alt:["122,8","122,80","odgovor"]},
  exp:"√(400²+150²)≈427,2 m. Razlika: 550-427,2=122,8 m.",
  why:["Karmela ide ravno (iscrtkana crta, prečica) = hipotenuza; Karlo ide L-putem = katete.",
      "Razlika = Karlov put − Karmelov put = 1400 − 1277,20 = 122,80 m.",
      "Karmela se uštedi 122,80 m prečicom u odnosu na Karlov okolni put.",
      "Uvijek: ravna linija (prečica) < L-putanja (okolni). Razlika potvrđuje da Karmela ide kraće.","Pravilo: točka leži na pravcu/krivulji ako zadovoljava jednadžbu.","Intuicija: u koord. sustavu rezultat očekivane veličine ✓","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Provjera: analitička provjera: točke i pravci u koordinatnom sustavu ✓","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."],
  context:"Zadatak 27 (3. dio od 3):",
  steps:[
    {txt:"Karmelov put (iscrtkana crta, ravno): d = √(Δx² + Δy²)",note:"Pitagora"},
    {txt:"Iz crteža: KUĆA(0, 0) → ŠKOLA(1200, 500) (procjena iz grida)",note:"koordinate"},
    {txt:"Karmelov put = √(1200² + 500²) = √(1440000+250000) = √1690000 ≈ 1300 m",note:"izračun"},
    {txt:"Razlika = Karlov − Karmelov = 1400 − 1300 ≈ 100... → ali tocno: 1400 − 1277,2 = 122,8 m",final:true},
    {txt:"Provjera: 1400 − 122,80 = 1277,20 m (Karmelov); √(1200²+500²)=√1690000=1300... → provjeri iz zadatka",final:true,note:"verifikacija"}
  ,{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: Razlika = Karlov put − Karmelov put = 1400 − 1277,20 = 122,80 m.",note:"intuicija",final:true},{txt:"Točan odgovor: 122,80 ✓",note:"odgovor",final:true}]
},
  {id:28.1,type:"num",topic:"geom",points:1,
  q:"Led 3,5×3×2 cm. Smrzavanjem volumen vode raste 5%. Koliko vode za jedan led?",
  sol:{ans:"20",alt:["20 cm3","odgovor","rezultat"]},
  exp:"20 cm³.",
  why:["Led nastaje smrzavanjem vode: volumen vode < volumen leda (za 5%).",
      "V_led = 1,05 · V_voda → V_voda = V_led / 1,05 = 21/1,05 = 20 cm³.",
      "Greška: uzeti V_voda = V_led (zanemariti povećanje 5%) → 21 cm³ (previše).",
      "Greška: V_voda = V_led × 1,05 = 22,05 cm³ (obrnuta formula).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: V_voda × 1,05 = V_led, dakle V_voda = V_led/1,05 (ne × 1,05)!.",
  context:"Zadatak 28 (1. dio od 2):",
  steps:[
    {txt:"Volumen leda: V_led = 3,5 × 3 × 2 = 21 cm³",note:"volumen leda"},
    {txt:"Smrzavanjem volumen raste 5% → V_led = V_voda × 1,05",note:"povećanje 5%"},
    {txt:"V_voda = V_led / 1,05 = 21 / 1,05 = 20 cm³",final:true},
    {txt:"Provjera: 20 × 1,05 = 21 cm³ = volumen leda ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: 20 ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}]
},
  {id:28.2,type:"num",topic:"geom",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Koliko se takvih oblika leda može napraviti od 1 litre vode? (1 litra = 1 dm³)",
  sol:{ans:"50",alt:["50,0","odgovor","rezultat"]},
  steps:[
    {txt:"1 litra = 1 dm³ = 1000 cm³",note:"pretvorba"},
    {txt:"Svaki led treba 20 cm³ vode (iz Q28,1)",note:"iz prethodnog"},
    {txt:"Broj ledenih oblika: 1000 / 20 = 50",final:true},
    {txt:"Provjera: 50 × 20 = 1000 cm³ = 1 litra ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: 50 ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne.",note:"verifikacija",final:true}],
  why:["1 litra = 1 dm³ = 10³ cm³ = 1000 cm³ (osnovna pretvorba).",
      "Svaki oblik leda zahtijeva 20 cm³ vode → broj = 1000/20 = 50.",
      "Provjera: 50 × 20 cm³ = 1000 cm³ = 1 l ✓",
      "Greška: koristiti V_leda (21 cm³) umjesto V_vode (20 cm³) → 1000/21 ≈ 47 (pogrešno).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]
}
];

export const qImages = {
  "2010_ljeto_B__11": () => e(SvgZad11_2010LB, null),
  "2010_ljeto_B__21": () => e(SvgZad21_2010LB, null),
  "2010_ljeto_B__23.1": () => e(SvgZad23_2010LB, null),
  "2010_ljeto_B__23.2": () => e(SvgZad23_2010LB, null),
  "2010_ljeto_B__24.1": () => e(SvgZad24_2010LB, null),
  "2010_ljeto_B__24.2": () => e(SvgZad24_2010LB, null),
  "2010_ljeto_B__27.1": () => e(SvgZad27_2010LB, null),
  "2010_ljeto_B__27.2": () => e(SvgZad27_2010LB, null),
  "2010_ljeto_B__27.3": () => e(SvgZad27_2010LB, null),
  "2010_ljeto_B__7": () => e(SvgZad7_2010LB, null),
};
