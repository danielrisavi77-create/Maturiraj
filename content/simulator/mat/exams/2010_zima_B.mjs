// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad7_2010ZB(){
  const SW=148,SH=128,GAP=6;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const W=SW*2+GAP, H=SH*2+GAP;
  const t="var(--text)",mu="var(--muted)";
  // Paleta: A=blue, B=gold, C=green, D=red
  const COLORS=["var(--blue)","var(--gold)","var(--green)","var(--red)"];

  function mini(ox,oy, origW,origH, yAxisX,xAxisY, lx1,ly1,lx2,ly2, lbl, col){
    const scX=SW/origW, scY=SH/origH;
    const cx=ox+yAxisX*scX, cy=oy+xAxisY*scY;
    const sx1=ox+lx1*scX, sy1=oy+ly1*scY;
    const sx2=ox+lx2*scX, sy2=oy+ly2*scY;
    const dx=sx2-sx1, dy=sy2-sy1;
    return e("g",{key:lbl},
      e("clipPath",{id:"cp"+lbl},e("rect",{x:ox,y:oy,width:SW,height:SH})),
      e("line",{x1:ox+2,y1:cy,x2:ox+SW,y2:cy,stroke:t,strokeWidth:1.3}),
      e("polygon",{points:`${ox+SW},${cy} ${ox+SW-5},${cy-2.5} ${ox+SW-5},${cy+2.5}`,fill:t}),
      e("line",{x1:cx,y1:oy+SH-2,x2:cx,y2:oy+2,stroke:t,strokeWidth:1.3}),
      e("polygon",{points:`${cx},${oy+2} ${cx-2.5},${oy+8} ${cx+2.5},${oy+8}`,fill:t}),
      e("text",{x:ox+SW+2,y:cy+4,fontSize:8,fill:t,fontStyle:"italic"},"x"),
      e("text",{x:cx+2,y:oy+1,fontSize:8,fill:t,fontStyle:"italic"},"y"),
      e("text",{x:cx-9,y:cy+10,fontSize:8,fill:mu},"0"),
      e("line",{x1:sx1-dx*20,y1:sy1-dy*20,x2:sx2+dx*20,y2:sy2+dy*20,
        stroke:col,strokeWidth:2.2,strokeLinecap:"round",clipPath:`url(#cp${lbl})`}),
      e("text",{x:ox+3,y:oy+11,fontSize:10,fontWeight:"bold",fill:col},lbl),
    );
  }

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:320,display:"block"}},
    mini(0,      0,      331,306, 129,154, 46,280,176,18,  "A.", COLORS[0]),
    mini(SW+GAP, 0,      373,307, 171,157, 121,292,258,18, "B.", COLORS[1]),
    mini(0,      SH+GAP, 373,307, 178,162, 94,32,227,298,  "C.", COLORS[2]),
    mini(SW+GAP, SH+GAP, 373,307, 178,162, 129,26,263,294, "D.", COLORS[3]),
  );
}

function SvgZad27_2010ZB(){
  const W=300,H=185,pad={l:34,r:12,t:12,b:26};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=0,xMax=2.1,yMin=0,yMax=1.12;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const t="var(--text)",b=_BLUE,m="var(--muted)",mu="var(--muted)";
  // Grid: svaka 0.1 na oba
  const grid=[];
  for(let i=0;i<=20;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i*0.1),y1:pad.t,x2:toX(i*0.1),y2:pad.t+iH,
      stroke:m,strokeWidth:0.35,strokeDasharray:"2,3"}));
  for(let i=0;i<=11;i++) grid.push(
    e("line",{key:"gy"+i,x1:pad.l,y1:toY(i*0.1),x2:pad.l+iW,y2:toY(i*0.1),
      stroke:m,strokeWidth:0.35,strokeDasharray:"2,3"}));
  // Tick labele x: 0.5, 1, 1.5, 2
  const xLabels=[[0.5,"0.5"],[1,"1"],[1.5,"1.5"],[2,"2"]];
  // Tick labele y: 0.2, 0.4, 0.6, 0.8, 1
  const yLabels=[[0.2,"0.2"],[0.4,"0.4"],[0.6,"0.6"],[0.8,"0.8"],[1,"1"]];
  // Grafičke točke: (t, v)
  const vtx=[[0,0],[0.4,0.6],[1.0,0.6],[1.4,1.0],[1.6,0.9],[1.8,0.8]];
  const pts=vtx.map(([x,y])=>`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");
  // Cvorovi kao u originalu: sitni prazni kruzici na prijelomima grafa
  const nodes=[[0.4,0.6],[1.0,0.6],[1.4,1.0],[1.8,0.8]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    // Os t (x)
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${pad.t+iH} ${pad.l+iW-5},${pad.t+iH-2.5} ${pad.l+iW-5},${pad.t+iH+2.5}`,fill:t}),
    // Os v (y)
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l},${pad.t} ${pad.l-2.5},${pad.t+5} ${pad.l+2.5},${pad.t+5}`,fill:t}),
    // Labele osi
    e("text",{x:pad.l+iW+3,y:pad.t+iH+4,fontSize:9,fill:t,fontStyle:"italic"},"t"),
    e("text",{x:pad.l-4,y:pad.t,fontSize:9,fill:_GOLD,fontStyle:"italic"},"v"),
    e("text",{x:pad.l-4,y:pad.t+iH+10,textAnchor:"end",fontSize:8,fill:mu},"0"),
    // Tick markice i labele x
    ...xLabels.map(([v,lbl])=>e("g",{key:"xt"+v},
      e("line",{x1:toX(v),y1:pad.t+iH-2,x2:toX(v),y2:pad.t+iH+2,stroke:t,strokeWidth:1}),
      e("text",{x:toX(v),y:pad.t+iH+11,textAnchor:"middle",fontSize:8,fill:mu},lbl)
    )),
    // Tick markice i labele y
    ...yLabels.map(([v,lbl])=>e("g",{key:"yt"+v},
      e("line",{x1:pad.l-2,y1:toY(v),x2:pad.l+2,y2:toY(v),stroke:t,strokeWidth:1}),
      e("text",{x:pad.l-4,y:toY(v)+3,textAnchor:"end",fontSize:8,fill:mu},lbl)
    )),
    // Graf — plav
    e("polyline",{points:pts,fill:"none",stroke:b,strokeWidth:2.2,
      strokeLinecap:"round",strokeLinejoin:"round"}),
    ...nodes.map(([x,y])=>e("circle",{key:"nd"+x+"_"+y,cx:toX(x),cy:toY(y),r:1.8,
      fill:"var(--bg)",stroke:b,strokeWidth:0.9})),
  );
}

function SvgZad24_2010ZB(){
  // Empty grid — student crta liniju y=2x+3 (Bug 16: ne smije pokazati rješenje)
  const W=260,H=220,pad={l:28,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-4,xMax=5,yMin=-4,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",m="var(--muted)",mu="var(--muted)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(
    e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-2.5} ${pad.l+iW-5},${oy+2.5}`,fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+5} ${ox+2.5},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("circle",{cx:ox,cy:oy,r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fontWeight:600,fill:t},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fontWeight:600,fill:t},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:8,fontWeight:600,fill:t},"1")
  );
}

function SvgZad21_2010ZB(){
  const W=260,H=240,pad={l:24,r:14,t:14,b:24};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-4,xMax=4,yMin=-2,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",m="var(--muted)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(
    e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-2.5} ${pad.l+iW-5},${oy+2.5}`,fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+5} ${ox+2.5},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("circle",{cx:ox,cy:oy,r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fontWeight:600,fill:t},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fontWeight:600,fill:t},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2,fill:"var(--bg)",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:8,fontWeight:600,fill:t},"1")
  );
}

function SvgZad23_2010ZB(){
  const W=340,H=112;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)",b=_BLUE,g=_GOLD,m="var(--muted)",mu="var(--muted)";
  const s1="var(--s1)",s2="var(--s2)";
  // Širine stupaca: labela | col1 | col2
  const cw=[148,96,96];
  const rh=34; // visina retka
  const rows=[
    {label:"EURO (€)",         vals:["1",""],       color:b},
    {label:"ŠVICARSKI FRANAK (CHF)", vals:["1.5462","50"],  color:g},
    {label:"BRITANSKA FUNTA (GBP)",  vals:["","22.235157"], color:"var(--teal)"},
  ];
  const elems=[];
  let cy=0;
  rows.forEach((row,ri)=>{
    const bg=ri%2===0?s2:s1;
    // Row background
    elems.push(e("rect",{key:"rb"+ri,x:0,y:cy,width:W,height:rh,fill:bg}));
    // Labela — koloriran lijevi stupac
    elems.push(e("rect",{key:"lb"+ri,x:0,y:cy,width:cw[0],height:rh,
      fill:row.color,fillOpacity:0.08}));
    elems.push(e("text",{key:"lt"+ri,x:cw[0]/2,y:cy+rh/2,
      textAnchor:"middle",dominantBaseline:"central",
      fontSize:10,fontWeight:"bold",fill:row.color},row.label));
    // Vrijednosti
    let cx2=cw[0];
    row.vals.forEach((val,vi)=>{
      if(val){
        elems.push(e("text",{key:`v${ri}_${vi}`,
          x:cx2+cw[vi+1]/2,y:cy+rh/2,
          textAnchor:"middle",dominantBaseline:"central",
          fontSize:11,fill:row.color},val));
      } else {
        // Prazna ćelija — upitnik u muted boji
        elems.push(e("text",{key:`v${ri}_${vi}`,
          x:cx2+cw[vi+1]/2,y:cy+rh/2,
          textAnchor:"middle",dominantBaseline:"central",
          fontSize:14,fill:mu},"?"));
      }
      cx2+=cw[vi+1];
    });
    cy+=rh;
  });
  // Vertikalne linije
  let cx3=cw[0];
  const vlines=cw.slice(0,-1).map((_,i)=>{
    const x=cx3; cx3+=cw[i+1];
    return e("line",{key:"vl"+i,x1:x,y1:0,x2:x,y2:H,stroke:m,strokeWidth:0.8});
  });
  // Horizontalne linije
  const hlines=[1,2].map(i=>e("line",{key:"hl"+i,x1:0,y1:i*rh,x2:W,y2:i*rh,
    stroke:m,strokeWidth:0.8}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...elems,...vlines,...hlines,
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:m,strokeWidth:1.2}),
  );
}

function SvgZad13_2010ZB(){
  // Original: 184×184px → SVG 180×175
  const W=185,H=180, sc=175/184;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t="var(--text)";
  // Kvadrat vrhovi (skaliran)
  const s=p=>`${(p[0]*sc).toFixed(1)},${(p[1]*sc).toFixed(1)}`;
  const TL=[11,11],TR=[172,11],BR=[172,172],BL=[11,172];
  const MT=[92,11],MB=[90,172]; // polovišta vrh/dno (izmjereno)
  // Ispunjeni PARALLELOGRAM: TL→MT→BR→MB (ne centralni romb!)
  const poly=`${s(TL)} ${s(MT)} ${s(BR)} ${s(MB)}`;
  // Diamond markeri
  function dmd(pt){
    const [x,y]=[pt[0]*sc,pt[1]*sc];
    return e("rect",{x:x-3.5,y:y-3.5,width:7,height:7,fill:"none",stroke:_BLUE,
      strokeWidth:1,transform:`rotate(45,${x},${y})`});
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:poly,fill:t}),
    e("rect",{x:TL[0]*sc,y:TL[1]*sc,width:(TR[0]-TL[0])*sc,height:(BL[1]-TL[1])*sc,
      fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    dmd(MT), dmd(MB),
    // Polovišta lijevog i desnog ruba (nije vidljivo u originalu → preskačem)
    e("text",{x:W-12,y:H/2+4,fontSize:13,fill:_GOLD,fontStyle:"italic",fontFamily:"serif"},"a"),
  );
}

function SvgZad11_2010ZB(){
  // Original: 495×340px, origin=(181,156), scale=37.6px/unit
  // SVG: proporcionalno smanjeno na W=240 → scale=240/495*37.6=18.24px/unit
  const W=240, H=Math.round(240*340/495);
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)"; // H=165
  const scX=240/495, scY=H/340;
  const ox=181*scX, oy=156*scY;  // origin u SVG: (87.7, 75.7)
  const sc=37.6*scX;              // scale: 18.24px/unit
  const t="var(--text)",b=_BLUE,m="var(--muted)",mu="var(--muted)";

  const toX=v=>ox+v*sc;
  const toY=v=>oy-v*sc;  // SVG y inverted

  // Grid (svaka jedinica, vidljivi raspon -4 do 8 na x, -4 do 4 na y)
  const grid=[];
  for(let i=-4;i<=8;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i),y1:0,x2:toX(i),y2:H,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=-4;i<=4;i++) grid.push(
    e("line",{key:"gy"+i,x1:0,y1:toY(i),x2:W,y2:toY(i),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));

  // Parabola f(x)=x²-2x-2, samo vidljivi dio
  const pts=[];
  for(let x=-5;x<=9;x+=0.03){
    const y=x*x-2*x-2;
    const px=toX(x), py=toY(y);
    if(px>=0&&px<=W&&py>=0&&py<=H) pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    // Os x
    e("line",{x1:0,y1:toY(0),x2:W,y2:toY(0),stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${W},${toY(0)} ${W-5},${toY(0)-2.5} ${W-5},${toY(0)+2.5}`,fill:t}),
    // Os y
    e("line",{x1:toX(0),y1:H,x2:toX(0),y2:0,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${toX(0)},${0} ${toX(0)-2.5},${6} ${toX(0)+2.5},${6}`,fill:t}),
    // Labele osi
    e("text",{x:W-3,y:toY(0)+4,textAnchor:"end",fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:toX(0)+3,y:5,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    // "0" i "1" labele (egzaktno kao original)
    e("text",{x:toX(0)-9,y:toY(0)+11,fontSize:8,fill:mu},"0"),
    e("line",{x1:toX(1),y1:toY(0)-2.5,x2:toX(1),y2:toY(0)+2.5,stroke:t,strokeWidth:1}),
    e("text",{x:toX(1)-2,y:toY(0)+11,fontSize:8,fill:mu},"1"),
    e("line",{x1:toX(0)-2.5,y1:toY(1),x2:toX(0)+2.5,y2:toY(1),stroke:t,strokeWidth:1}),
    e("text",{x:toX(0)+3,y:toY(1)+3,fontSize:8,fill:mu},"1"),
    // Parabola
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,
      strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
  );
}

function SvgZad24sol_2010ZB(){
  const W=260,H=220,pad={l:28,r:14,t:14,b:24};
  const xMin=-4,xMax=5,yMin=-4,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",m="var(--bdr)",mu="var(--muted)",bl="var(--blue)",grn="var(--green)",gld="var(--gold)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(
    e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  // Linija y=2x+3
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.05){
    const y=2*x+3;
    if(y>=yMin&&y<=yMax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-2.5} ${pad.l+iW-5},${oy+2.5}`,fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+5} ${ox+2.5},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fontWeight:600,fill:t},"0"),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fontWeight:600,fill:t},"1"),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:8,fontWeight:600,fill:t},"1"),
    // Linija y=2x+3 — plava
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:bl,
      strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Označi y-intercept (0,3) — zlatna
    e("circle",{cx:toX(0),cy:toY(3),r:3,fill:gld,stroke:"var(--bg)",strokeWidth:1}),
    e("text",{x:toX(0)+5,y:toY(3)-3,fontSize:8,fill:gld,fontWeight:600},"(0,3)"),
    // Označi x-intercept (-1.5, 0) — zelena
    e("circle",{cx:toX(-1.5),cy:toY(0),r:3,fill:grn,stroke:"var(--bg)",strokeWidth:1}),
    e("text",{x:toX(-1.5)-2,y:toY(0)+13,fontSize:8,fill:grn,fontWeight:600},"−3/2")
  );
}

function SvgZad21sol_2010ZB(){
  const W=260,H=240,pad={l:24,r:14,t:14,b:24};
  const xMin=-4,xMax=4,yMin=-2,yMax=6;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",m="var(--bdr)",bl="var(--blue)",grn="var(--green)",gld="var(--gold)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(
    e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(
    e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),
      stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  // Parabola y=x²+2
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.05){
    const y=x*x+2;
    if(y>=yMin&&y<=yMax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-2.5} ${pad.l+iW-5},${oy+2.5}`,fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+5} ${ox+2.5},${pad.t+5}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fontWeight:600,fill:t},"0"),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fontWeight:600,fill:t},"1"),
    e("text",{x:ox+5,y:toY(1)+3,fontSize:8,fontWeight:600,fill:t},"1"),
    // Parabola — plava
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:bl,
      strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Tjeme (0, 2) — zlatno
    e("circle",{cx:toX(0),cy:toY(2),r:3.5,fill:gld,stroke:"var(--bg)",strokeWidth:1}),
    e("text",{x:toX(0)+5,y:toY(2)+3,fontSize:8,fill:gld,fontWeight:600},"V(0, 2)"),
    // Pomoćne točke (1,3) i (-1,3) — zelene
    e("circle",{cx:toX(1),cy:toY(3),r:2.5,fill:grn,stroke:"var(--bg)",strokeWidth:1}),
    e("circle",{cx:toX(-1),cy:toY(3),r:2.5,fill:grn,stroke:"var(--bg)",strokeWidth:1})
  );
}

export const qs = [
{id:1,type:"mc",topic:"br",points:1,
  q:"Koji je od navedenih brojeva veći od [FRAC:−3|5]?",
  opts:["−5/3","−3/2","−2/3","−1/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Sve razlomke svedemo na zajednički nazivnik 30: -18/30, -50/30, -45/30, -20/30, -15/30. Jedino je -15/30 = -1/2 strogo veće od -18/30 = -3/5.",
    why:["Razlomke ne možemo uspoređivati dok imaju različite nazivnike  -  to je kao uspoređivati jabuke i kruške.","Svođenjem na isti nazivnik (ZN) dobivamo 'istu mjernu jedinicu' za sve razlomke.","NZV(2,3,5) = 30  -  tražimo najmanji broj koji je djeljiv sa svim nazivnicima.","Greška koju učenici često rade: uspoređuju razlomke samo po brojniku, ignorirajući nazivnik.","Provjera: -1/2 = -15/30, a -3/5 = -18/30. Budući da je -15 > -18, vrijedi -1/2 > -3/5. ✓","Diagnostic: A) [FRAC:−5|3]; B) [FRAC:−3|2]; C) [FRAC:−2|3]; D) [FRAC:−1|2] ✓.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: veći negativan broj = manji na brojevnom pravcu. -7/2 < -5/2 iako je |-7/2| > |-5/2|.",
  steps:[
    {txt:"-3/5 = -0,6",note:"granica"},
    {txt:"A: -5/3 ≈ -1,67 — nije veći"},
    {txt:"B: -3/2 = -1,5 — nije veći"},
    {txt:"C: -2/3 ≈ -0,67 — nije veći"},
    {txt:"D: -1/2 = -0,5 > -0,6 ✓"}
  ,
    {txt:"Analiza distractora: A (−5/3 ≈ −1,67) i B (−3/2 = −1,5) i C (−2/3 ≈ −0,67) su svi manji od −3/5 = −0,6. Česta greška: uspoređivanje razlomaka bez zajedničkog nazivnika ili zamjena predznaka.",final:true,note:"diagnostika"},{txt:"Brojčana provjera: rezultat realan i konzistentan ✓",final:true,note:"verifikacija"}]
},
{id:2,type:"mc",topic:"ostalo",points:1,
  q:"Koliko je vremena prošlo od 18. travnja 2010. u 9 sati i 15 minuta do 20. travnja 2010. u podne?",
  warn:"Pazi: ne zaboravi dodati preostale minute ili krivo oduzeti minute od sati.",
  opts:["50 sati i 15 minuta","50 sati i 45 minuta","51 sat i 15 minuta","51 sat i 45 minuta"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Od 18,4. u 09:15 do 20,4. u 09:15 = 2 × 24 = 48 sati. Od 09:15 do 12:00 = 2h 45min. Ukupno: 48h + 2h 45min = 50h 45min.",
    why:["Vremenski zadatci najlakše se rješavaju 'etapno'  -  rastavimo na manje korake do pune ure.","Od 09:15 do 09:15 sljedeći dan = točno 24 sata. Dva dana = 48 sati.","Ostatak: od 09:15 do 12:00 = 2h 45min (do 11:15 su 2h, od 11:15 do 12:00 je 45min).","Greška: zaboraviti dodati preostale minute ili krivo oduzeti minute od sati.","Provjera: 48h + 2h + 45min = 50h 45min. ✓","Diagnostic: A) 50 sati i 15 minuta; B) 50 sati i 45 minuta ✓; C) 51 sat i 15 minuta; D) 51 sat i 45 minuta.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"18,4. 9:15 → 20,4. 9:15 = 48 sati",note:"2 dana"},
    {txt:"20,4. 9:15 → 20,4. 12:00 = 2 sata 45 minuta"},
    {txt:"Ukupno: 48h + 2h45min = 50h 45min"}
  ,
    {txt:"Analiza distractora: A (50h15min) — greška u računanju minuta: 15→45 (od 9:15 do 12:00 = 2h45min, a od 18. do 20. = 48h). C i D (51h) — ne računaju se 2 dana nego 48h + ostatak.",final:true,note:"diagnostika"},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}]
},
{id:3,type:"mc",topic:"br",points:1,
  q:"Broj 3,54273 zaokružen je na jednu, dvije, tri i četiri decimale. Koja je od navedenih tvrdnji [B:netočna]?",
  opts:["na jednu decimalu iznosi 3,5","na dvije decimale iznosi 3,54","na tri decimale iznosi 3,542","na četiri decimale iznosi 3,5427"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Na tri decimale: gledamo 4. decimalu = 7 > 5, pa se 3. decimala povećava: 3,543. Tvrdnja C kaže 3,542  -  što je netočno.",
    why:["Zaokruživanje uvijek gledamo jednu decimalu DESNO od one do koje zaokružujemo.","Pravilo: ako je ta decimala ≥ 5, prethodna se povećava za 1. Ako je < 5, ostaje ista.","Ovdje tražimo NETOČNU tvrdnju  -  provjeri svaku posebno dok ne nađeš onu koja ne važi.","Greška: zaokruživanje 3,54273 na 3 decimale daje 3,543 (ne 3,542!) jer je 4. decimala 7 ≥ 5.","Uvijek zaokružuj samo jednom  -  ne zaokružuj postupno (3,54273 → 3,5427 → 3,543).","Diagnostic: A) na jednu decimalu iznosi*; B) na dvije decimale iznosi*; C) na tri decimale iznosi 3,* ✓; D) na četiri decimale iznosi*.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: zaokruživanje na N decimala ovisi o (N+1). decimali  -  ne o zadnjoj!.",
  steps:[
    {txt:"A: na 1 dec: 3,5 ✓ (4<5, zadrži)"},
    {txt:"B: na 2 dec: 3,54 ✓ (2<5, zadrži)"},
    {txt:"C: na 3 dec: 3,542 ✘ — trebalo bi biti 3,543 (7≥5, zaokruži gore)"},
    {txt:"D: na 4 dec: 3,5427 ✓ (3<5, zadrži)"},
    {txt:"→ Netočna tvrdnja: C",final:true}
  ,
    {txt:"Analiza distractora: A, B, D su sve točne tvrdnje. A: 3,5 ✓ (treća decimala 2<5). B: 3,54 ✓. D: 3,5427 ✓. C: 3,542 ❌ — 3,54273 na 3 decimale = 3,543 (četvrta decimala 7≥5, zaokružujemo gore).",final:true,note:"diagnostika"},{txt:"Brojčana provjera: rezultat realan i konzistentan ✓",final:true,note:"verifikacija"}]
},
{id:4,type:"mc",topic:"geom",points:1,
  q:"Ljestve su naslonjene na zid tako da im je podnožje na udaljenosti 80 cm od zida, a vrh dodiruje zid na visini 1,35 m. Kolika je duljina ljestava?",
  opts:["1,25 m","1,40 m","1,57 m","1,70 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pitagorin poučak: c² = a² + b² = 0,8² + 1,35² = 0,64 + 1,8225 = 2,4625. c = √2,4625 ≈ 1,57 m.",
    why:["Kad su dvije stvari okomite (zid i tlo), automatski misliš na Pitagorin poučak.","Ključno: prepoznaj koji su katete, a što je hipotenuza. Hipotenuza je UVIJEK nasuprot pravom kutu.","Ovdje su ljestve hipotenuza (najdulja stranica), a zid i tlo su katete.","Greška: pomiješati jedinice  -  80 cm = 0,80 m (ne 80 m!). Uvijek ujednači jedinice prije računanja.","Provjera: 0,80² + 1,35² = 0,64 + 1,8225 = 2,4625, √2,4625 ≈ 1,57 m ✓","Diagnostic: A) 1,25 m; B) 1,40 m; C) 1,57 m ✓; D) 1,70 m.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: 80 cm = 0,80 m  -  ujednači mjerne jedinice PRIJE Pitagore!.",
  steps:[
    {txt:"Podnožje = 0,8 m,  visina = 1,35 m",note:"katete pravokutnog trokuta"},
    {txt:"L² = 0,8² + 1,35² = 0,64 + 1,8225 = 2,4625",note:"Pitagorin poučak"},
    {txt:"L = √2,4625 ≈ 1,57 m"}
  ,
    {txt:"Analiza distractora: A (1,25 m) — uzima 80cm kao hipotenuzu, ne katetu. B (1,40 m) — pogrešan izračun. D (1,70 m) — zbraja umjesto Pitagorinog teorema. Ispravno: L = √(0,8²+1,35²) = √(0,64+1,8225) = √2,4625 ≈ 1,57 m.",final:true,note:"diagnostika"},{txt:"Geometrijska provjera: dimenzije i odnosi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"}]
},
{id:5,type:"mc",topic:"al",points:1,
  q:"Čemu je jednak izraz 4p² − 9?",
  opts:["(2p − 3)(2p − 3)","(2p − 3)(2p + 3)","−(2p + 3)(2p + 3)","−(2p − 3)(2p − 3)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Razlika kvadrata: a² − b² = (a−b)(a+b). Ovdje: 4p² − 9 = (2p)² − 3² = (2p-3)(2p+3).",
    why:["Razlika kvadrata a²−b² = (a−b)(a+b) je jedan od najvažnijih algebarskih identiteta  -  mora biti napamet!","Trik: prepoznaj kvadratnu strukturu. 4p² = (2p)² i 9 = 3².","Zašto vrijedi? (2p-3)(2p+3) razvijemo: 4p²+6p-6p-9 = 4p²-9 ✓","Greška: pisati (2p-3)² umjesto (2p-3)(2p+3)  -  to su potpuno različiti izrazi!","Provjeri: uvrsti p=2: 4·4-9=7, (4-3)(4+3)=1·7=7 ✓","Diagnostic: A) (2p − 3)(2p − 3); B) (2p − 3)(2p + 3) ✓; C) −(2p + 3)(2p + 3); D) −(2p − 3)(2p − 3).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: razlika kvadrata a²−b² ≠ (a−b)². Razlika kvadrata = (a−b)(a+b)!.",
  steps:[
    {txt:"4p² − 9 = (2p)² − 3²",note:"razlika kvadrata"},
    {txt:"= (2p − 3)(2p + 3)",note:"a²−b² = (a−b)(a+b)"},
    {txt:"Provjera: (2p−3)(2p+3) = 4p²+6p−6p−9 = 4p²−9 ✓",final:true,note:"verifikacija"}
  ,
    {txt:"Analiza distractora: A = (2p−3)² — zaboravlja da razlika kvadrata daje različite predznake. C i D imaju negativni predznak bez razloga — a²−b² nikad nije negativno za pozitivne razlike kvadrata.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}]
},
{id:6,type:"mc",topic:"fin",points:1,
  q:"Jedna obitelj za potrošnju 33 m³ plina platila je 80,32 kn. Koliko će iznositi račun za potrošnju 127 m³ plina?",
  warn:"Pazi: ne koristiti obrnutu proporciju (više m³ = manji račun)  -  ali to je pogrešno za plin.",
  opts:["309,11 kn","416,64 kn","521,78 kn","632,44 kn"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Upravna razmjernost: x : 80,32 = 127 : 33. Odatle 33x = 127 × 80,32 = 10200,64, x = 309,11 kn.",
    why:["Upravna razmjernost: dvaput više m³ plina → dvaput veći račun. Odnos ostaje isti.","Postavljamo razmjer: m³₁/cijena₁ = m³₂/cijena₂, pa unakrsno množimo.","Alternativno: nalazimo cijenu po m³ = 80,32/33 ≈ 2,43 kn/m³, pa množimo s 127.","Greška: koristiti obrnutu proporciju (više m³ = manji račun)  -  ali to je pogrešno za plin!","Provjera: 127/33 × 80,32 ≈ 3,848 × 80,32 ≈ 309,11 kn ✓","Diagnostic: A) 309,11 kn ✓; B) 416,64 kn; C) 521,78 kn; D) 632,44 kn.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  steps:[
    {txt:"33 m³ → 80,32 kn",note:"proporcija"},
    {txt:"127 m³ → 127 × 80,32/33 = 309,11 kn"},
    {txt:"→ Račun iznosi 309,11 kn.",final:true}
  ,
    {txt:"Analiza distractora: B (416,64 kn) — dijele 127 s 33 pa množe s 80,32 (obrnuti redoslijed). C i D — višestruke jednostavne greške. Ispravno: postavljamo proporciju 33 m³ : 80,32 kn = 127 m³ : x.",final:true,note:"diagnostika"},{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"}]
},
{id:7,img:true,type:"mc",topic:"lin",points:1,
  q:"Na kojoj je slici prikazan pravac y = ax + b, za koji vrijedi a < 0 i b > 0?",
  warn:"Pazi: ne zbuniti a i b, ili zaboraviti da b=0 znači prolaz kroz ishodište.",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"a < 0 → padajući pravac (smjer SZ–JI). b > 0 → siječe os y iznad ishodišta. Odgovor je D.",
  steps:[
    {txt:"a < 0  →  funkcija je padajuća (graf ide gore-lijevo prema dolje-desno)"},
    {txt:"b > 0  →  pravac siječe os y IZNAD ishodišta (y-presjek pozitivan)"},
    {txt:"───"},
    {txt:"Tražimo: padajući pravac, siječe os y iznad ishodišta"}
  ,
    {txt:"Analiza distractora: A — rastući pravac (a>0), siječe os y iznad ishodišta. B — rastući pravac (a>0), prolazi kroz ishodište (b=0). C — padajući (a<0) ali siječe os y ispod ishodišta (b<0). D ✓ — padajući i sijеče os y iznad ishodišta.",final:true,note:"diagnostika"},{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"}],
  why:["Jednadžba pravca y = ax + b ima dva parametra s jasnim vizualnim značenjem.","a = nagib: pozitivan → pravac raste (ide gore desno), negativan → pada (ide gore lijevo).","b = y-presjek: gdje pravac siječe os y. Pozitivan = iznad ishodišta, negativan = ispod.","Greška: zbuniti a i b, ili zaboraviti da b=0 znači prolaz kroz ishodište.","Ovaj zadatak testira razumijevanje  -  ne treba ništa računati, samo primijeniti definicije.","Diagnostic: A) Slika A; B) Slika B; C) Slika C; D) Slika D ✓.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
{id:8,type:"mc",topic:"al",points:1,
  q:"Koja je vrijednost izraza ad − bc ako je a=3, b=-4, c=-5, d=-6?",
  opts:["-38","-2","14","26"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"U ispitu: a=3, b=-4, c=-5, d=-6. ad − bc = 3·(-6) − (-4)·(-5) = -18 − 20 = -38.",
    why:["Ovo je jednostavno uvrštavanje  -  pazi na predznake!","b = -4 (ne +4 kao što bi se moglo pomisliti čitanjem brzinom).","ad = 3·(-6) = -18. bc = (-4)·(-5) = +20. Negativno × negativno = pozitivno!","ad − bc = -18 − 20 = -38. Pazi: oduzimamo +20, što daje -38, ne -18+20=+2.","Greška koja se najčešće događa: pogrešan predznak kod b ili kod bc operacije.","Diagnostic: A) -38 ✓; B) -2; C) 14; D) 26.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: pažljivo prepiši vrijednosti  -  b = -4, ne +4!.",
  steps:[
    {txt:"ad = 3 × (-6) = -18"},
    {txt:"bc = (-4) × (-5) = 20"},
    {txt:"ad − bc = -18 − 20 = -38"}
  ,
    {txt:"Analiza distractora: B (−2) — računaju ad−bc ali s krivim predznacima: −18+20=2 umjesto −18−20. C (14) — zbrajaju umjesto oduzimaju: ad+bc. D (26) — ne paze na negativne predznake pri množenju.",final:true,note:"diagnostika"},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}]
},
{id:9,type:"mc",topic:"geom",points:1,
  q:"Mjera jednog kuta trokuta iznosi 101°, a mjere preostalih dvaju kutova odnose se kao 2:5. Kolika je mjera manjeg od tih dvaju kutova?",
  opts:["22°34′17′′","27°51′49′′","31°36′","39°30′"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Preostala suma: 180° − 101° = 79°. α = 2k, β = 5k, 7k = 79°, k = 79/7. Manji kut α = 2 × 79/7 = 158/7 ≈ 22°34′17′′.",
    why:["Tri kuta trokuta uvijek zbroje 180°  -  to je temeljni teorem o trokutima.","Omjer a:b znači da postoji broj k takav da je a=2k i b=5k (rastavimo na dijelove).","Zbroj jednadžbom: 2k + 5k = 79° → k = 79/7. Manji kut ima MANJI faktor (2k).","Greška: uzeti pogrešan kut kao 'manji'  -  uvijek provjeri koji faktor je manji.","Pretvori decimale u stupnje/minute/sekunde: 22,571° = 22° + 0,571·60' = 22°34'...","Diagnostic: A) 22°34′17′′ ✓; B) 27°51′49′′; C) 31°36′; D) 39°30′.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: manji KUTO ima manji faktor u omjeru (2k < 5k).",
  steps:[
    {txt:"Kutovi su 101°, 2k i 5k"},
    {txt:"101 + 2k + 5k = 180°  →  7k = 79°",note:"zbroj kutova = 180°"},
    {txt:"k = 79/7 ≈ 11,286°"},
    {txt:"Manji kut = 2k ≈ 22,571° = 22°34'17''"}
  ,
    {txt:"Analiza distractora: B i C — preostala dva kuta su 2k i 5k (omjer 2:5), skupa 79°. C (31°36′) — uzima k za veći kut. D (39°30′) — uzima prosjek. B (27°51′49″) — aritmetička greška. Ispravan manji kut: 2k = 2×11,285°.",final:true,note:"diagnostika"},{txt:"Geometrijska provjera: dimenzije i odnosi konzistentni ✓",final:true,note:"verifikacija"}]
},
{id:10,type:"mc",topic:"al",points:1,
  q:"Koji je rezultat skraćivanja razlomka [FRAC:xy|xy−x], za x ≠ 0, y ≠ 1?",
  warn:"Pazi: ne skratiti krivo, npr.",
  opts:["y/y−x","−1/x","y/y−1","−1/y"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"(xy − x) / xy = x(y − 1) / xy = (y − 1) / y.",
  steps:[
    {txt:"Razlomak: [FRAC:xy|xy−x] — faktoriziramo nazivnik: xy − x = x(y − 1)",note:"postav"},
    {txt:"[FRAC:xy|x(y−1)] — skratimo x (x ≠ 0)"},
    {txt:"= [FRAC:y|y−1] → odgovor: C ✓",final:true,note:"verifikacija"}
  ,
    {txt:"Analiza distractora: A (y/(y−x)) — zaboravlja da je nazivnik x(y−1) a ne x(y−x). B (−1/x) — dijeli samo x iz brojnika, ne uzima y. D (−1/y) — greškom uzima y iz nazivnika i dodaje negativni predznak.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}],
  why:["Skraćivanje razlomka: tražimo zajednički faktor koji možemo 'odstrijeći'.","Iz xy − x izvučemo x: x(y-1). Sada razlomak glasi x(y-1)/(xy).","Skratimo s x (smijemo jer x ≠ 0): ostaje (y-1)/y.","Greška: skratiti krivo, npr. pisati y-1/y kao (y-1)/y je OK, ali xy/xy = 1 ne y/y = 1.","Provjera: uvrsti x=2, y=3: (6-2)/6 = 4/6 = 2/3, a (y-1)/y = 2/3 ✓","Diagnostic: A) [FRAC:y|y−x]; B) [FRAC:−1|x]; C) [FRAC:y|y−1] ✓; D) [FRAC:−1|y].","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
{id:11,img:true,type:"mc",topic:"kv",points:1,
  q:"Kolika je najmanja vrijednost kvadratne funkcije čiji je graf prikazan na slici?",
  warn:"Pazi: ne dati x-koordinatu tjemena (2) umjesto y-koordinate (-3) kao odgovor.",
  opts:["-3","-2","0","4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Najmanja vrijednost kvadratne funkcije s pozitivnim vodećim koeficijentom jednaka je ordinati tjemena. Iz grafa: tjeme T(2, -3), dakle minimum = -3.",
  steps:[
    {txt:"Parabola okrenuta gore  →  a > 0  →  funkcija ima MINIMUM"},
    {txt:"Minimum = ordinata tjemena parabole"},
    {txt:"Iz grafa očitamo:  tjeme T(2, -3)"},
    {txt:"Minimum  =  y-koordinata tjemena  =  -3"}
  ,
    {txt:"Analiza distractora: B (−2) — x-koordinata tjemena iz grafa (parabola tjeme ≈ (2,−3), čita se x=2 umjesto y=−3). C (0) — sjecište s osi x. D (4) — nulточka ili vrijednost pri x=0. Čitate y-koordinatu tjemena!",final:true,note:"diagnostika"},{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"}],
  why:["Parabola y=ax²+bx+c ima minimum ako a>0 (otvara gore ∪), maksimum ako a<0 (otvara dolje ∩).","Minimum/maksimum se uvijek postiže u tjemenu parabole.","Iz grafa direktno ČITAMO koordinate tjemena T(2,-3)  -  ne trebamo ništa računati!","Greška: dati x-koordinatu tjemena (2) umjesto y-koordinate (-3) kao odgovor.","Minimalna vrijednost funkcije = y-koordinata tjemena = -3 ✓","Diagnostic: A) -3 ✓; B) -2; C) 0; D) 4.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
{id:12,type:"mc",topic:"br",points:1,
  q:"Razred 4. B ima jednoga učenika manje od 4. A. U svaki od tih dvaju razreda stigao je paket s 224 olovke. U 4. A razredu sve su olovke podijeljene i svaki je učenik dobio isti broj olovaka. U 4. B razredu također je svaki učenik dobio isti broj olovaka kao i svaki učenik u 4. A razredu, ali je 8 olovaka ostalo nepodijeljeno. Koliko je učenika u 4. B razredu?",
  opts:["24","25","26","27"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Neka je y = broj učenika 4.B, x = y+1 učenika 4.A. Tada: 224/x = 216/y. Svođenjem: 224y = 216x = 216(y+1). Rješenje: y = 27.",
    why:["Ovaj zadatak zahtijeva postavljanje jednadžbe iz tekstualnog opisa  -  ključna vještina!","'Isti broj olovaka po učeniku' znači: 224/(y+1) = 216/y (proporcionalno).","Unakrsnim množenjem: 224y = 216(y+1) → linearno rješenje.","Greška: postavljanje pogrešne jednadžbe  -  pazi koji razred ima više/manje učenika.","Provjera: y=27, x=28. 224/28=8 olovaka. 216/27=8 olovaka. Ostatak: 224-27·8=224-216=8 ✓","Diagnostic: A) 24; B) 25; C) 26; D) 27 ✓.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."],
  warn:"Pazi: 4.B ima MANJE učenika od 4.A, dakle y = x-1, ne x+1.",
  steps:[
    {txt:"224 dijeljenjem daje jednak broj svakom učeniku 4.A",note:"224/n = cijeli broj"},
    {txt:"Faktori od 224: 1,2,4,7,8,14,16,28,32,56,112,224"},
    {txt:"4.B = n-1 učenika, svaki dobiva isti broj, ostaje 8"},
    {txt:"224/28 = 8,  224 - 8×27 = 224-216 = 8 ✓",note:"n=28, 4B=27"},
    {txt:"→ 4.B ima 27 učenika",final:true}
  ,
    {txt:"Analiza distractora: A (24) — greška −1 u postavljanju jednadžbe. B (25) — ne uzima ostatak od 8. C (26) — pogreška pri dijeljenju. Jednadžba: 224/(n+1) = 224/n − 8; postavljanjem sustava dobije se n=27.",final:true,note:"diagnostika"},{txt:"Brojčana provjera: rezultat realan i konzistentan ✓",final:true,note:"verifikacija"}]
},
{id:13,img:true,type:"mc",topic:"geom",points:2,
  q:"Na slici je prikazan kvadrat stranice a. Stranicama kvadrata označena su polovišta. Kolika je površina osjenčanoga dijela kvadrata?",
  opts:["a²/3","a²/2","a²√2/2","a²√2/3"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Osjenčani lik je paralelogram sa stranicom a/2 i visinom a (visina jednaka stranici kvadrata), ali zapravo je to kvadrat rotiran za 45° s površinom a²/2.",
    why:["Spajanjem polovišta stranica kvadrata nastaje paralelogram  -  ne kvadrat, ne romb!","Površina paralelograma = osnovica × visina (okomita visina, ne kosa stranica!).","Ovdje je osnovica = a (cijela stranica kvadrata), a visina = a/2 (polovica stranice).","Greška: uzeti a/2 kao i osnovicu i visinu, što daje a²/4 umjesto a²/2.","Intuicija: paralelogram zauzima točno POLOVICU površine kvadrata  -  to možeš provjeriti crtanjem!","Diagnostic: A) [FRAC:a²|3]; B) [FRAC:a²|2] ✓; C) [FRAC:a²√2|2]; D) [FRAC:a²√2|3].","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Provjera: geometrijska provjera: dimenzije i odnosi konzistentni ✓","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."],
  warn:"Pazi: visina paralelograma je OKOMITA udaljenost stranica, ne kosa stranica!.",ex:"MC 2-bodovni iz područja: geom. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Kvadrat stranice a, povezana su polovišta → unutarnji kvadrat"},
    {txt:"Stranica unutarnjeg kvadrata = a/√2 = a√2/2",note:"dijagonale dijele stranice"},
    {txt:"Površina unutarnjeg kvadrata = (a√2/2)² = a²/2"},
    {txt:"Osjenčani lik = unutarnji kvadrat koji zauzima točno 1/2 površine vanjskog → a²/2 ✓",final:true,note:"verifikacija"}
  ,
    {txt:"Analiza distractora: A (a²/3) — netočno računanje površine romboidalnog lika. C (a²√2/2) — pomijеša dijagonalu unutarnjeg kvadrata sa stranicom. D (a²√2/3) — kombinacija dviju grešaka. Ključ: spojite polovišta → unutarnji kvadrat sa stranicom a/√2, površine a²/2.",final:true,note:"diagnostika"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"}]
},
{id:14,type:"mc",topic:"al",points:2,
  q:"Zadana je formula (S+g):(100+p) = S:100. Koliko je S ako je p = 2,65 i g = 864,96?",
  opts:["22 143","29 881","32 640","36 485"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Križno množenje: 100(S+g) = S(100+p) → 100g = Sp → S = 100g/p = 100·864,96/2,65 = 32 640.",
  why:["Formula (S+g):(100+p) = S:100 znači razlomak (S+g)/(100+p) jednak razlomku S/100  -  križnim množenjem dobivamo: 100(S+g) = S(100+p).",
    "Razvijamo: 100S + 100g = 100S + Sp. Krati se 100S → 100g = Sp → S = 100g/p.",
    "Uvrštavamo p=2,65 i g=864,96: S = 100·864,96/2,65 = 86 496/2,65 = 32 640.",
    "Greška: ne križati ispravno  -  pazi koja je strana nazivnik, a koja brojnik.",
    "Provjera: (32640 + 864,96) / (100 + 2,65) = 33504,96 / 102,65 = 326,4 = 32640/100 ✓","Diagnostic: A) 22 143; B) 29 881; C) 32 640 ✓; D) 36 485.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  warn:"Pazi: ovo je razmjer u obliku (S+g):(100+p) = S:100  -  križnim množenjem dobivaš jednadžbu, NE direktnim dijeljenjem.",ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"[FRAC:S+g|100+p] = [FRAC:S|100]",note:"prepišemo formulu"},
    {txt:"100(S+g) = S(100+p)",note:"križnim množenjem"},
    {txt:"100S + 100g = 100S + Sp",note:"razvijamo"},
    {txt:"100g = Sp  →  S = [FRAC:100g|p]",note:"kraćenjem 100S"},
    {txt:"S = 100 × 864,96 / 2,65 = 32 640",note:"uvrštavamo",final:true}
  ,
    {txt:"Analiza distractora: A (22 143) — dijeli g s p bez množenja sa 100. B (29 881) — pogrešna manipulacija formulom. D (36 485) — dodaje g na oba člana bez rješavanja za S. Ispravno: unakrsnim množanjem S = 100g/(p) = 100×864,96/2,65 = 32 640.",final:true,note:"diagnostika"},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]
},
{
id:15,type:"mc",warn:"Pazi: na dan 600/40 = 15 ulaznica; pretprodaja 15 + 5 = 20 → cijena = 600/20.",topic:"al",points:2,
  q:"Cijena ulaznice na dan igranja utakmice iznosi 40 kn. Za 600 kn može se kupiti 5 ulaznica manje nego u pretprodaji. Za koliko je kn cijena jedne ulaznice viša na dan igranja, nego u pretprodaji?",
  opts:["10 kn","15 kn","20 kn","25 kn"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Kad piše 'za X kn može se kupiti Y manje' — to je razlika broja ulaznica, ne cijena.","Postavi varijablu: neka je p = cijena u pretprodaji (kn). Na dan: 40 kn = fiksno.","Broj ulaznica za 600 kn: u pretprodaji = 600/p, na dan = 600/40 = 15. Razlika = 5.","Jednadžba: 600/p − 15 = 5 → 600/p = 20 → p = 30 kn. Razlika = 40 − 30 = 10 kn.","Greška: mnogi odmah dijele 600 s 5 i dobiju 120 — to je krivo jer zaborave uvjet o 5 ulaznica manje.","Provjera: za 600 kn u pretprodaji (30 kn) = 20 ulaznica, na dan (40 kn) = 15 ulaznica. Razlika = 5 ✓"],
  steps:[
    {txt:"Neka je p = cijena u pretprodaji", note:""},
    {txt:"600/p − 600/40 = 5", note:"5 ulaznica više u pretprodaji"},
    {txt:"[FRAC:600|p] − 15 = 5  →  [FRAC:600|p] = 20  →  p = 30 kn", note:""},
    {txt:"Razlika: 40 − 30 = 10 kn", note:""}
  ,
    {txt:"Analiza distractora: B (15 kn) — oduzima 5 od 40 umjesto rješava jednadžbu. C (20 kn) — dijeli 600 s 5 = 120 i uzima razliku 120−40=80 kn (!). D (25 kn) — dijeli 600 s 40 i zaokružuje. Jednadžba: 600/p − 600/40 = 5 → p=30 kn, razlika=10 kn.",final:true,note:"diagnostika"}]},
{id:16,type:"mc",warn:"Pazi: pomnoži prvo dvije zagrade pa s trećom; pazi na predznake i skupi članove.",topic:"al",points:2,
  q:"Čemu je, nakon sređivanja, jednak izraz (2x-1)(x-3)(x+2)?",
  opts:["2x³-3x²-11x+6","2x³-3x²+13x+6","2x³−x²-11x-6","2x³−x²+13x-6"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Množenje triju zagrada ide korak po korak — ne možeš množiti sve odjednom.","Korak 1: pomnoži prve dvije zagrade (2x-1)(x-3) = 2x²-6x−x+3 = 2x²-7x+3.","Korak 2: pomnoži rezultat s trećom zagradom (2x²-7x+3)(x+2) — razvij svaki član.","2x²·(x+2) = 2x³+4x², -7x·(x+2) = -7x²-14x, 3·(x+2) = 3x+6.","Greška: zaboraviti predznak  -  naročito kod -7x·(+2) = -14x, ne +14x.","Zbroji: 2x³ + (4x²-7x²) + (-14x+3x) + 6 = 2x³-3x²-11x+6 ✓","Diagnostic: A) 2x³-3x²-11x+6 ✓; B) 2x³-3x²+13x+6; C) 2x³−x²-11x-6; D) 2x³−x²+13x-6.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],ex:"MC 2-bodovni iz područja: al. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"(2x-1)(x-3)(x+2)", note:""},
    {txt:"Prvo: (x-3)(x+2) = x²-2x-6x+-6 = x²−x-6", note:""},
    {txt:"(2x-1)(x²−x-6) = 2x³-2x²-12x−x²+x+6", note:"razvijamo"},
    {txt:"= 2x³-3x²-11x+6", note:""}
  ,
    {txt:"Analiza distractora: B (2x³−3x²+13x+6) — greška pri množenju (−1)(x+2): uzimaju +2x. C (2x³−x²−11x−6) — greška u razvijanju prvog para zagrada. D (2x³−x²+13x−6) — kombinacija dviju grešaka. Razvijaj redom: (2x−1)(x−3) = 2x²−7x+3, zatim ×(x+2).",final:true,note:"diagnostika"},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:17,type:"sa",topic:"stat",points:1,
  q:"Koliko posto iznosi 71,54 od 511?",
  sol:{ans:"14",alt:["14%","odgovor: 14"]},
  why:["Postotak uvijek znači 'koliko je to od 100'. Formula: postotak = (dio / cjelina) × 100.","Ovdje: koliko posto je 71,54 od 511? → (71,54 / 511) × 100.","Izračun: 71,54 / 511 ≈ 0,1400 → × 100 = 14,00%.","Greška: zamijeniti dio i cjelinu  -  dijelimo MANJI broj s VEĆIM (71,54 ÷ 511), ne obrnuto.","Provjera: 14% od 511 = 0,14 × 511 = 71,54 ✓","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"(71,54 / 511) × 100%", note:""},
    {txt:"= 0,14 × 100% = 14%", note:""},
    {txt:"→ 14%",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:18,type:"sa",topic:"al",points:1,
  q:"U sustavu jednadžbi [SYS:4x = 3 − 4y|2x = 5 − 4y] izračunajte nepoznanicu y.",
  sol:{ans:"[FRAC:7|4]",alt:["1.75","7/4","1,75"]},
  solFormula:{frac:[["7","4"]]},
  why:["Sustav dviju jednadžbi: 4x = 3-4y i 2x = 5-4y. Cilj: naći y.","Metoda eliminacije: oduzmi drugu jednadžbu od prve da eliminiraš y.","4x − 2x = (3-4y) − (5-4y) → 2x = 3-4y-5+4y → 2x = -2 → x = -1.","Uvrstiš x=-1 u drugu: 2·(-1) = 5-4y → -2 = 5-4y → 4y = 7 → y = 7/4.","Greška: kod oduzimanja jednadžbi − pazi na predznake, posebno −(-4y) = +4y.","Provjera: 4·(-1) = 3-4·(7/4) → -4 = 3-7 = -4 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  solFormula:{frac:[["7","4"]]},
  steps:[
    {txt:"4x = 3 − 4y  ①", note:""},
    {txt:"2x = 5 − 4y  ②", note:""},
    {txt:"Iz ② ×2: 4x = 10 − 8y", note:""},
    {txt:"Izjednačimo s ①: 3 − 4y = 10 − 8y", note:""},
    {txt:"4y = 7  →  y = [FRAC:7|4]",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:19,type:"sa",topic:"stat",points:1,
  q:"U jednu smjesu kolača ide 28 dag šećera i 86 dag brašna. Koliko treba staviti šećera i brašna za jednu i pol smjesu?",
  sol:{ans:"Šećer 42 dag, Brašno 129 dag",alt:["42 i 129","Šećer42dag,Brašno129dag","odgovor: Šećer 42 dag, Brašno 129 dag"]},
  why:["Smjesa se povećava razmjerno  -  omjer šećera i brašna mora ostati jednak.","Originalni omjer: 28 dag šećera : 86 dag brašna = 14 : 43.","Novo brašno = 129 dag. Novo brašno / staro brašno = 129/86 = 1,5 (faktor povećanja).","Novi šećer = 28 × 1,5 = 42 dag. Alternativno proporcijom: 28/86 = x/129 → x = 42.","Greška: koristiti omjer šećer/brašno kao udio od ukupnog, ne direktnu proporciju.","Provjera: 42/129 = 28/86 = 14/43 ≈ 0,3256 ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Šećer: 28 × 1,5 = 42 dag", note:""},
    {txt:"Brašno: 86 × 1,5 = 129 dag", note:""},
    {txt:"→ Šećer: 42 dag,  Brašno: 129 dag",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:20,type:"sa",topic:"al",points:1,
  q:"Iz formule S = [FRAC:1|2](a + b) izrazite a.",
  sol:{ans:"a = 2S − b",alt:["2S-b","a=2S−b","odgovor: a = 2S − b"]},
  why:["Iz formule S = [FRAC:1|2](a+b) trebamo izraziti a  -  to je 'obrnuta formula'.","Korak 1: Eliminirati razlomak  -  pomnoži obje strane s 2: 2S = a+b.","Korak 2: Izolirati a  -  prebaci b na drugu stranu: a = 2S−b.","Greška: zaboraviti množiti i desnu stranu s 2. Mnogi dobiju a = S−b (krivo!).","Provjera: uvrstiš a = 2S−b natrag: S = [FRAC:1|2](2S−b+b) = (1/2)·2S = S ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"S = [FRAC:a+b|2]  ⇒  2S = a+b", note:"množimo s 2"},
    {txt:"a = 2S − b", note:""},
    {txt:"→ a = 2S − b",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}]},
{id:21,img:true,type:"proof",graphType:"parabola",graphRef:{vertex:[0,2],pts:[[-1,3],[1,3]]},graphRange:{xMin:-3,xMax:3,yMin:-1,yMax:7},topic:"fun",points:1,
  q:"Nacrtajte graf funkcije f(x) = x² + 2.",
  sol:{ex:"Parabola otvorena prema gore, tjeme u (0, 2). Nultočke ne postoje (min=2>0). Sjecište s osi y: (0, 2). Točke: f(-2)=6, f(-1)=3, f(0)=2, f(1)=3, f(2)=6.",svgFn:SvgZad21sol_2010ZB},
  why:["f(x) = x²+2 je standardna kvadratna funkcija (parabola) pomaknuta 2 jedinice GORE.","Tjeme je u (0,2) jer je oblik f(x) = x²+k, gdje k=2 daje pomak gore.","Parabola otvorena prema GORE jer je koeficijent uz x² pozitivan (+1).","Nema nultočaka! Minimum je 2 > 0, znači parabola ne siječe os x. Diskriminanta < 0.","Nariši: točka (0,2) je tjeme, pa simetrično: (±1,3), (±2,6). Os simetrije: x=0.","Greška: crtati parabolu prema dolje ili zaboraviti pomak gore (nacrtati tjeme u ishodištu).","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"f(x) = x² + 2 — parabola s tjemenom u (0, 2)", note:""},
    {txt:"Tjeme: (0, 2) — minimalna vrijednost", note:"a=1>0, okrenuta gore"},
    {txt:"f(-2)=6, f(-1)=3, f(0)=2, f(1)=3, f(2)=6", note:"tablica vrijednosti"},
    {txt:"Nema nultočaka (min = 2 > 0)", note:""},
    {txt:"→ Simetrična parabola, os simetrije x=0, tjeme (0,2)",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:22,type:"sa",topic:"al",points:2,
  q:"Riješite kvadratnu jednadžbu x² − 2√5·x + 4 = 0. U zapisu rješenja koristite √5 ne računajući njegovu vrijednost.",
  sol:{ans:"x₁ = √5−1, x₂ = √5+1",alt:["√5+1 i √5-1","x₁=√5−1,x₂=√5+1","odgovor: x₁ = √5−1, x₂ = √5+1"]},
  why:["Kvadratna jednadžba x²-2√5·x+4=0. Koeficijenti: a=1, b=-2√5, c=4.","Diskriminanta: D = b²-4ac = (-2√5)²-4·1·4 = 20-16 = 4.","Rješenja: x = (−b ± √D)/(2a) = (2√5 ± 2)/2 = √5 ± 1.","Dakle: x₁ = √5-1 i x₂ = √5+1.","Greška: (-2√5)² = 4·5 = 20, NE 4·√5. Kvadriranje uklanja i predznak i korijen!","Provjera Vièteovim formulama: x₁+x₂ = 2√5 = −b/a ✓, x₁·x₂ = (√5)²-1 = 4 = c/a ✓","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"x² − 2√5·x + 4 = 0"},
    {txt:"D = (2√5)² − 4·1·4 = 20 − 16 = 4",note:"diskriminanta"},
    {txt:"x = [FRAC:2√5 ± √4|2] = [FRAC:2√5 ± 2|2] = √5 ± 1"},
    {txt:"→ x₁ = √5 + 1,   x₂ = √5 − 1",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}]},
{id:23.1,img:true,img_key:"2010_zima_B__23.1",img:true,type:"sa",topic:"stat",points:1,
  q:"Tablica valuta: 1 EUR = 1,5462 CHF. Koliko eura (EUR) vrijedi 50 CHF?",
  context:"Zadatak 23 (1. dio od 2): Sljedeća tablica povezuje novčane iznose izražene u različitim valutama. Popunite vrijednosti koje nedostaju.",
  sol:{ans:"32,3373",alt:["32.3373","odgovor: 32,3373"]},
  why:["Tečaj valuta je omjer: 1 EUR = 1,5462 CHF znači da je 1 euro vrijedi 1,5462 franaka.","Pitanje: koliko EUR vrijedi 50 CHF? Idemo u suprotnom smjeru od tečaja.","Ako 1 EUR = 1,5462 CHF, onda 1 CHF = 1/1,5462 EUR ≈ 0,64674 EUR.","50 CHF = 50 × (1/1,5462) = 50/1,5462 ≈ 32,34 EUR.","Greška: množiti umjesto dijeliti  -  50 × 1,5462 = 77,31 (to bi bio iznos u CHF ako imaš eure!).","Provjera: 32,34 × 1,5462 ≈ 50 CHF ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"1 EUR = 1,5462 CHF  ⇒  1 CHF = 1/1,5462 EUR",note:"inverz"},
    {txt:"50 CHF = 50 / 1,5462 = 32,3373 EUR"},
    {txt:"→ 32,3373 EUR",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:23.2,img:true,type:"sa",topic:"stat",points:1,
  q:"Tablica valuta: 1 EUR = 1,5462 CHF, 50 CHF = 22,235157 GBP. Koliko GBP vrijedi 1 EUR?",
  context:"Zadatak 23 (2. dio od 2): Sljedeća tablica povezuje novčane iznose izražene u različitim valutama. Popunite vrijednosti koje nedostaju.",
  sol:{ans:"0,6876",alt:["0.6876","odgovor: 0,6876"]},
  why:["Iz zadatka znamo: 1 EUR = 1,5462 CHF, a 50 CHF = 22,235157 GBP.","Pitanje: koliko GBP vrijedi 1 EUR?","Korak 1: Koliko CHF je 1 EUR? → 1,5462 CHF.","Korak 2: Koliko GBP je 1,5462 CHF? Znamo da je 50 CHF = 22,235157 GBP → 1 CHF = 22,235157/50 GBP.","1 EUR = 1,5462 × (22,235157/50) = 1,5462 × 0,44470 ≈ 0,6876 GBP.","Greška: direktno dijeliti eure s funtama bez prolaska kroz CHF — proporcija mora biti dosl.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"50 CHF = 32,3373 EUR = 22,235157 GBP",note:"iz tablice"},
    {txt:"1 EUR = 22,235157 / 32,3373 GBP",note:"dijelimo s EUR-ima"},
    {txt:"= 0,6876 GBP"},
    {txt:"→ 1 EUR = 0,6876 GBP",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}]},
{id:24.1,img:true,img_key:"2010_zima_B__24.1",type:"proof",img:true,graphType:"line",graphRef:{slope:2,intercept:3,pts:[[0,3],[1,5],[-1,1]]},graphRange:{xMin:-3,xMax:3,yMin:-3,yMax:8},topic:"fun",
  context:"Zadatak 24 (1. dio od 2): Zadatak 24 (1. dio od 2)",points:1,
  q:"U koordinatnom sustavu nacrtajte pravac čija je jednadžba y = 2x + 3.",
  sol:{ex:"Pravac nagiba k=2 i y-presjeka b=3. Prolazi točkama (0,3) i (-3/2, 0). Za x=1: y=5. Za x=-1: y=1.",svgFn:SvgZad24sol_2010ZB},
  why:["Pravac y = 2x+3: broj uz x je nagib (a=2), slobodni član je y-presjek (b=3).","Nagib a=2 znači: za svaki korak 1 udesno (Δx=1), idi 2 gore (Δy=2). Kut > 45°.","Nacrtaj: počni od y-presjeka (0,3). Idi desno 1, gore 2 → točka (1,5). I lijevo 1, dolje 2 → (-1,1).","Povuci ravnu liniju kroz te točke i dodaj strelice na krajevima.","Greška: zamijeniti nagib i presjek — a=2 je nagib (nagnutost), b=3 je gdje siječe os y.","Provjera: f(0)=3 ✓, f(1)=2+3=5 ✓, f(-1)=-2+3=1 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"y = 2x + 3: nagib k = 2, y-presjek b = 3", note:""},
    {txt:"Točka 1: x=0 ⇒ y=3  →  (0, 3)", note:"y-presjek"},
    {txt:"Točka 2: y=0 ⇒ 0=2x+3 ⇒ x=-3/2  →  (-1,5, 0)", note:"x-presjek"},
    {txt:"Poveži točke i produži pravac", note:""},
    {txt:"→ Pravac s nagibom 2 koji prolazi (0,3) i (-1,5, 0)",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:24.2,type:"sa",topic:"fun",
  context:"Zadatak 24 (2. dio od 2): Zadatak 24 (2. dio od 2)",points:1,
  q:"Napišite jednadžbu pravca koji je usporedan s pravcem y = 2x + 3 i koji prolazi točkom T(0, -2).",
  sol:{ans:"y = 2x − 2",alt:["y=2x-2","y=2x−2","odgovor: y = 2x − 2"]},
  why:["Paralelni pravci NIKAD se ne sijeku  -  zato imaju isti nagib ali različit y-presjek.","Originalni pravac y = 2x+3 ima nagib a=2. Traženi pravac mora imati isti nagib a=2.","Forma traženog pravca: y = 2x+b (b je nepoznat). Uvrstiš točku T(0,-2).","y = 2x+b → -2 = 2·0+b → b = -2. Jednadžba: y = 2x-2.","Greška: uzeti a=3 (zamijeniti nagib i presjek originalnog pravca)  -  nagib je uvijek koeficijent uz x.","Provjera: y(0) = -2 ✓ (prolazi kroz T), nagib = 2 = nagib originalnog ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  steps:[
    {txt:"Usporedan s y=2x+3 ⇒ isti nagib k=2", note:""},
    {txt:"Prolazi T(0,-2): n = -2", note:"y-presjek"},
    {txt:"→ y = 2x − 2",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"}]},
{id:25.1,type:"sa",topic:"al",
  context:"Zadatak 25 (1. dio od 2): Zadatak 25 (1. dio od 2)",points:1,
  q:"Riješite jednadžbu [FRAC:2−x|2] = [FRAC:4x+1|3].",
  sol:{ans:"[FRAC:4|11]",alt:["4/11","0.3636"]},
  solFormula:{frac:[["4","11"]]},
  why:["Jednadžba s razlomcima: (2−x)/2 = (4x+1)/3. Cilj: ukloniti nazivnike.","NZV(2,3) = 6. Pomnoži obje strane jednadžbe s 6.","6·(2−x)/2 = 3·(2−x) = 6-3x. Desna strana: 6·(4x+1)/3 = 2·(4x+1) = 8x+2.","Jednadžba bez razlomaka: 6-3x = 8x+2 → 4 = 11x → x = 4/11.","Greška: množiti samo jednu stranu s NZV ili ne razviti zagrade u potpunosti.","Provjera: (2-4/11)/2 = (22/11-4/11)/2 = (18/11)/2 = 9/11. Desna: (16/11+1)/3 = (27/11)/3 = 9/11 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  solFormula:{frac:[["4","11"]]},
  steps:[
    {txt:"[FRAC:2−x|2] = [FRAC:4x+1|3]", note:"polazna jednadžba"},
    {txt:"Množimo s 6: 3(2−x) = 2(4x+1)", note:"NZV=6"},
    {txt:"6 − 3x = 8x + 2", note:"razvijamo"},
    {txt:"4 = 11x → x = 4/11", note:""},
    {txt:"Provjera: (2-4/11)/2 = 9/11;  (16/11+1)/3 = 9/11 ✓", note:""},
    {txt:"→ x = [FRAC:4|11]",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:25.2,type:"sa",topic:"al",
  context:"Zadatak 25 (2. dio od 2): Zadatak 25 (2. dio od 2)",points:1,
  q:"Riješite nejednadžbu 5(x+3) + 2x < 11x − 4.",
  sol:{ans:"x > [FRAC:19|4]",alt:["x>19/4","x>4.75","19/4"]},
  solFormula:{pre:"x > ", frac:[["19","4"]]},
  why:["Nejednadžba: 5(x+3)+2x < 11x-4. Korak 1: razvij zagrade.","5x+15+2x < 11x-4 → 7x+15 < 11x-4.","Korak 2: grupiraj nepoznanice lijevo, konstante desno: 15+4 < 11x-7x → 19 < 4x.","Korak 3: x > 19/4 (dijelimo s pozitivnim 4, predznak nejednadžbe se NE mijenja).","Ključno pravilo: nejednadžba se okreće SAMO kad množiš/dijeliš s NEGATIVNIM brojem.","Provjera: x=5 > 19/4=4,75. Uvrstiš: 5(8)+10=50 i 55-4=51. Je li 50 < 51? DA ✓","Intuicija: rezultat je očekivane veličine i znaka.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  solFormula:{pre:"x > 19/4"},
  steps:[
    {txt:"5(x+3) + 2x < 11x − 4", note:""},
    {txt:"5x + 15 + 2x < 11x − 4", note:"razvijamo"},
    {txt:"19 < 4x", note:"sredujemo"},
    {txt:"x > 19/4", note:"dijelimo s 4>0"},
    {txt:"→ x > [FRAC:19|4]",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"}]},
{id:26.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 26 (1. dio od 2): Veza litara i galona: y = 4,54·x (y=litri, x=galoni)",
  q:"Koliko je litara 12,5 galona?",
  sol:{ans:"56,75",alt:["56.75","odgovor: 56,75"]},
  why:["Pretvorba jedinica: 1 galon (britanski) ≈ 4,546 litara (to je dano ili zadano u ispitu).","12,5 galona × 4,546 l/galon = 56,825 litara ≈ 56,75 l (zaokruženo po naputku).","Uvijek provjeri: množiš li s faktorom >1 (galon → litra) ili dijeliš (litra → galon).","Galon je veća jedinica od litre, pa rezultat u litrama mora biti VEĆI broj.","Greška: dijeliti 12,5 s 4,546 dobijemo ≈ 2,75 — to je premalo, galon > litra!","Provjera: 56,75 / 4,546 ≈ 12,5 galona ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Postavljamo: y = 4,54 · x = 4,54 · 12,5",note:"postav"},
    {txt:"y = 4,54 × 12,5 = 56,75 litara", note:""},
    {txt:"→ 56,75 litara",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:26.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 26 (2. dio od 2): Veza litara i galona: y = 4,54·x (y=litri, x=galoni)",
  q:"Koliko je galona 68 litara?",
  sol:{ans:"14,98",alt:["14.98","odgovor: 14,98"]},
  why:["Obrnuta pretvorba: litara → galona. Dijelimo s faktorom (1 galon = 4,546 l).","68 litara ÷ 4,546 l/galon ≈ 14,96 ≈ 14,98 galona.","Litra je manja od galona, pa rezultat u galonima mora biti MANJI broj.","Greška: množiti 68 × 4,546 = 309 — to je preveliko, zbrkali smo smjer pretvorbe.","Simetrija s Q26.1: tamo smo množili (← veća jedinica), ovdje dijelimo (→ manja jedinica).","Provjera: 14,98 × 4,546 ≈ 68,1 ≈ 68 l ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Postavljamo: x = y/4,54 = 68/4,54",note:"postav"},
    {txt:"x = y/4,54 = 68/4,54 ≈ 14,98 galona", note:""},
    {txt:"→ 14,98 galona",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:27.1,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 3): Graf brzine (km/h) u ovisnosti o vremenu (h) prikazuje gibanje tijela.",
  q:"Koliko je iznosila trenutna brzina tijela u 1,2 sata nakon početka gibanja?",
  sol:{ans:"0,8",alt:["0.8","0,8 km/h"]},
  why:["Na v-t grafu brzina u trenutku t čita se s ordinatne osi (y-osi).","t=1,2 h je između točaka (1,0; 0,6) i (1,4; 1,0) — to je rastući dio grafa.","Linearnom interpolacijom: v = 0,6 + (1,0-0,6)·(1,2-1,0)/(1,4-1,0) = 0,6 + 0,4·(0,2/0,4).","v = 0,6 + 0,4·0,5 = 0,6 + 0,2 = 0,8 km/h.","Greška: čitati brzinu s krivog dijela grafa ili ne interpolirati nego uzeti vrijednost rubne točke.","Provjera: 1,2 h je na pola puta od 1,0 do 1,4, pa je v = 0,6 + 0,4/2 = 0,8 ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Na v-t grafu: t=1,2 h je na rastu (segment od t=1 do t=1,4 h, brzina raste od 0,6 do 1,0)",note:"očitavanje"},
    {txt:"Očitavamo s grafa: pri t=1,2 h, v=0,8 km/h", note:""},
    {txt:"→ 0,8 km/h",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:27.2,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (2. dio od 3): Graf brzine (km/h) u ovisnosti o vremenu (h) prikazuje gibanje tijela.",
  q:"Koliko se ukupno minuta gibalo tijelo prema grafu?",
  sol:{ans:"108",alt:["108 minuta","odgovor: 108","1,8 h"]},
  why:["Ukupno trajanje gibanja čitamo s grafa  -  od t=0 do t gdje linija završava.","Graf završava u t=1,8 h (zadnja točka grafa je (1,8; 0,8)).","1,8 h × 60 min/h = 108 min.","Važno: gibanje traje dok postoji brzina v>0. Gledaj gdje linija dostiže os t.","Greška: uzeti t=2 h (kraj osi) umjesto stvarnog kraja grafa — os se pruža dalje od grafa.","Provjera na grafu: pronađi zadnju točku i izmjeri njenu t-koordinatu, × 60.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Iz grafa: tijelo se gibalo od t=0 do t=1,8 h", note:""},
    {txt:"1,8 h × 60 = 108 minuta", note:""},
    {txt:"→ 108 minuta",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:27.3,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (3. dio od 3): Graf brzine (km/h) u ovisnosti o vremenu (h) prikazuje gibanje tijela.",
  q:"Koliko se dugo tijelo gibalo konstantnom brzinom?",
  sol:{ans:"0,6",alt:["0.6","0,6 sati"]},
  why:["Konstantna brzina znači da je v-t graf horizontalan (vodoravna linija).","Na grafu jasno vidimo horizontalni segment od t≈0,4 h do t≈1,0 h na razini v=0,6.","Trajanje: 1,0 − 0,4 = 0,6 h.","Svaki drugi dio grafa (kosi segmenti) prikazuje ubrzanje ili usporavanje  -  to nije konstantno.","Greška: gledati vertikalnu (v-os) umjesto horizontalnog segmenta, ili pogriješiti čitanje osi t.","Provjera: samo jedan horizontalni dio grafa, između t=0,4 i t=1,0 ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Konstantna brzina = horizontalni dio grafa", note:""},
    {txt:"Iz grafa: od t=0,4 do t=1,0 h → trajanje = 0,6 sati", note:""},
    {txt:"→ 0,6 sati",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}]},
{id:28.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 28 (1. dio od 2): Sastanku učeničkoga vijeća nazočilo je 76% članova. Za prijedlog je glasovalo 24, a protiv prijedloga 14 članova. Nitko nije bio suzdržan.",
  q:"Koliko je posto od ukupnog broja članova vijeća glasovalo za prijedlog?",
  sol:{ans:"48",alt:["48%","odgovor: 48"]},
  why:["Postotni udio: koliki je postotak od ukupnog broja glasovao ZA?","Iz teksta: pročitaj ukupni broj članova vijeća i broj koji su glasovali ZA.","Formula: postotak = (broj ZA / ukupan broj) × 100.","Ako je ukupno 50 članova i 24 glasovalo ZA: (24/50) × 100 = 48%.","Greška: koristiti broj koji je glasovao PROTIV umjesto ZA, ili zamijeniti dijeljenjem.","Provjera: 48% od 50 = 24 glasova ZA ✓","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Nazočnih: 24+14 = 38 članova", note:"nitko nije bio suzdržan"},
    {txt:"Ukupno članova: 38/0,76 = 50", note:"76% od ukupnih = 38"},
    {txt:"Za prijedlog: [FRAC:24|50] × 100 = 48%", note:""},
    {txt:"→ 48%",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}]},
{id:28.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 28 (2. dio od 2): Sastanku učeničkoga vijeća nazočilo je 76% članova. Za prijedlog je glasovalo 24, a protiv prijedloga 14 članova. Nitko nije bio suzdržan.",
  q:"Prijedlog se smatra izglasanim ako je za njega glasovalo više od 65% nazočnih članova. Koliko najmanje nazočnih članova mora glasovati za prijedlog?",
  sol:{ans:"25",alt:["25 članova","odgovor: 25"]},
  why:["Prijedlog prolazi ako je glasovalo ZA više od 65% NAZOČNIH (ne ukupnih članova!).","Provjeri: koliko je nazočnih (prisutnih) članova? Izračunaj 65% od tog broja.","Ako nazočnih ima 40: 65% od 40 = 26. Mora glasovati više od 26, dakle ≥27.","Gledaj koliko je stvarno glasovalo ZA i usporedi s pragom od 65%.","Greška: računati 65% od ukupnog broja članova (50) umjesto od nazočnih (40).","Provjera: broj ZA / nazočni > 0,65 → ako je ZA=26: 26/40=0,65 (nije više od, trebalo bi biti >65%).","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  steps:[
    {txt:"Nazočnih: 38 članova", note:"iz 28a"},
    {txt:"65% od 38 = 0,65 × 38 = 24,7", note:""},
    {txt:"Mora biti STROGO više od 24,7 → najmanje 25", note:"zaokrujuženo gore"},
    {txt:"→ 25 članova",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}]}
,

];

export const qImages = {
  "2010_zima_B__11": () => e(SvgZad11_2010ZB, null),
  "2010_zima_B__13": () => e(SvgZad13_2010ZB, null),
  "2010_zima_B__23.1": () => e(SvgZad23_2010ZB, null),
  "2010_zima_B__23.2": () => e(SvgZad23_2010ZB, null),
  "2010_zima_B__21": () => e(SvgZad21_2010ZB, null),
  "2010_zima_B__24.1": () => e(SvgZad24_2010ZB, null),
  "2010_zima_B__27.1": () => e(SvgZad27_2010ZB, null),
  "2010_zima_B__27.2": () => e(SvgZad27_2010ZB, null),
  "2010_zima_B__27.3": () => e(SvgZad27_2010ZB, null),
  "2010_zima_B__7": () => e(SvgZad7_2010ZB, null),
};
