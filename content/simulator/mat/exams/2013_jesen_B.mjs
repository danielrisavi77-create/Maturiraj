// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgCjenik28_2013Bj(){
  // Tri odvojena cjenika (pizze / dodatci / bezalkoholna pića) kao u ispitu.
  // Stupci su fiksne širine pa se tablica s 2 stupca ne rasteže preko cijele slike.
  const W=360,H=350,x0=8;
  const col0=112,colW=76,rH=22,titleH=16;
  function section(title,headers,rows,y){
    const nCols=headers.length;
    const tw=col0+colW*(nCols-1);
    const items=[];
    const uid=title.slice(0,3).replace(/\s/g,"")+y;
    const cellX=(ci)=>x0+(ci===0?col0/2:col0+(ci-0.5)*colW);
    const tblTop=y+titleH, tblBot=y+titleH+rH*(rows.length+1);
    // Naslov cjenika
    items.push(e("text",{key:"t"+uid,x:x0,y:y+titleH-5,
      fontSize:9,fontWeight:"700",letterSpacing:"0.04em",fill:"var(--text)"},title));
    // Zaglavlje (blaga podloga da se stupci raspoznaju u obje teme)
    items.push(e("rect",{key:"hbg"+uid,x:x0,y:tblTop,width:tw,height:rH,
      fill:"var(--s2)",stroke:"var(--bdr2)",strokeWidth:1}));
    items.push(...headers.map((h,i)=>e("text",{key:"hh"+uid+i,
      x:cellX(i),y:tblTop+rH*0.68,
      fontSize:9,fontWeight:"700",textAnchor:"middle",fill:"var(--text)"},h)));
    // Retci
    rows.forEach((row,ri)=>{
      const ry=tblTop+rH*(ri+1);
      items.push(e("rect",{key:"rr"+uid+ri,x:x0,y:ry,width:tw,height:rH,
        fill:"none",stroke:"var(--bdr2)",strokeWidth:0.8}));
      row.forEach((cell,ci)=>items.push(e("text",{key:"rc"+uid+ri+ci,
        x:cellX(ci),y:ry+rH*0.68,
        fontSize:9,textAnchor:"middle",
        fill:ci===0?"var(--text)":"var(--blue)"},cell)));
    });
    // Okomite crte između stupaca
    for(let ci=1;ci<nCols;ci++){
      const vx=x0+col0+(ci-1)*colW;
      items.push(e("line",{key:"vl"+uid+ci,x1:vx,y1:tblTop,x2:vx,y2:tblBot,
        stroke:"var(--bdr2)",strokeWidth:0.8}));
    }
    // Vanjski okvir tablice
    items.push(e("rect",{key:"fr"+uid,x:x0,y:tblTop,width:tw,height:tblBot-tblTop,
      fill:"none",stroke:"var(--text)",strokeWidth:1.2}));
    return items;
  }
  // Visina sekcije = titleH(16) + rH(22)·(3 retka + zaglavlje) = 104; razmak 12
  const secH=titleH+rH*4;
  const y1=8, y2=y1+secH+12, y3=y2+secH+12;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    ...section("CIJENE PIZZA",["Vrsta pizze","Mala","Velika","Jumbo"],[
      ["Dalmatinska","30,00 kn","35,00 kn","70,00 kn"],
      ["Slavonska","32,00 kn","38,00 kn","76,00 kn"],
      ["Istarska","35,00 kn","40,00 kn","80,00 kn"]
    ],y1),
    ...section("CIJENE DODATAKA",["Dodatak","Cijena"],[
      ["Masline \u2013 porcija","5,00 kn"],
      ["Raj\u010dica \u2013 2 dl","7,00 kn"],
      ["Feferoni \u2013 porcija","10,00 kn"]
    ],y2),
    ...section("CIJENE BEZALKOHOLNIH PI\u0106A",["Pi\u0107e","Cijena"],[
      ["Voda u bo\u010dici","8,00 kn"],
      ["Ledeni \u010daj","10,00 kn"],
      ["Gazirani sokovi","13,00 kn"]
    ],y3)
  );
}

function SvgGraf25_2013Bj(){
  const W=370,H=220;
  const lx=72,rx=W-18,ty=14,by=H-26;
  const years=[1900,1920,1940,1960,1980,2000,2020];
  const yw=y=>lx+(y-1900)/(2020-1900)*(rx-lx);
  // Boje isključivo iz palete teme — čitljive i u svijetloj i u tamnoj temi.
  const colors=["var(--red)","var(--gold)","var(--blue)","var(--green)","var(--teal)","var(--text)"];
  const persons=[
    {name:"Filip",   segs:[[1984,1997]]},
    {name:"Ena",     segs:[[1978,2008]]},
    {name:"Dragica", segs:[[1955,1990]]},
    {name:"Cvita",   segs:[[1930,1940],[1954,1964]]},
    {name:"Boris",   segs:[[1924,1934]]},
    {name:"Ava",     segs:[[1900,1920]]}
  ];
  const nP=persons.length;
  const rowH=(by-ty)/nP;

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto",fontFamily:"inherit"}},

    // Vertikalni grid
    ...years.map(y=>e("line",{key:"gy"+y,
      x1:yw(y),y1:ty,x2:yw(y),y2:by,
      stroke:"var(--bdr)",strokeWidth:0.8,strokeDasharray:"4,3"})),

    // Horizontalni grid (između redova)
    ...persons.map((_,i)=>e("line",{key:"hg"+i,
      x1:lx,y1:ty+i*rowH,x2:rx,y2:ty+i*rowH,
      stroke:"var(--bdr)",strokeWidth:0.5})),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:"var(--bdr)",strokeWidth:0.5}),

    // Oznake godina (dolje)
    ...years.map(y=>e("text",{key:"yt"+y,
      x:yw(y),y:by+14,fontSize:9,textAnchor:"middle",fill:"var(--muted)"},y+".")),

    // Osobni redovi
    ...persons.map((p,i)=>{
      const cy=ty+i*rowH+rowH/2;
      const col=colors[i];
      return e(React.Fragment,{key:p.name},
        // Ime (lijevo, bold)
        e("text",{x:lx-6,y:cy+4,fontSize:10,fontWeight:"600",
          textAnchor:"end",fill:"var(--text)"},p.name),
        // Kružić marker
        e("circle",{cx:lx-1,cy:cy,r:2.5,fill:col}),
        // Segmenti zapošljavanja
        ...p.segs.map((seg,si)=>{
          const x1=yw(seg[0]),x2=yw(seg[1]);
          const barH=rowH*0.42;
          return e(React.Fragment,{key:"seg"+si},
            // Pozadinska traka (svjetlija)
            e("rect",{x:x1,y:cy-barH/2,width:x2-x1,height:barH,
              fill:col,opacity:0.18,rx:2}),
            // Deblja linija
            e("line",{x1,y1:cy,x2,y2:cy,
              stroke:col,strokeWidth:4.5,strokeLinecap:"round"}),
            // Start i end točke
            e("circle",{cx:x1,cy,r:3,fill:"var(--bg)",stroke:col,strokeWidth:1.8}),
            e("circle",{cx:x2,cy,r:3,fill:col,stroke:"var(--bg)",strokeWidth:1})
          );
        })
      );
    })
  );
}

function SvgTablica23_2013Bj(){
  // W mora obuhvatiti x0 + col0 + 7\u00b7colW = 8 + 62 + 294 = 364 (prije je desni rub tablice bio odrezan)
  const W=372,H=80,x0=8,y0=8;
  const headers=["Pon","Uto","Sri","\u010cet","Pet","Sub","Ned"];
  const values=["12 000","7 000","0","30 000","15 000","23 000","10 000"];
  const col0=62, colW=42;
  const rowH=32;
  const totalW=col0+colW*7;
  const cx=(i)=>x0+col0+(i+0.5)*colW;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    // Border
    e("rect",{x:x0,y:y0,width:totalW,height:2*rowH,fill:"none",stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:x0,y1:y0+rowH,x2:x0+totalW,y2:y0+rowH,stroke:"var(--text)",strokeWidth:1}),
    // Vertical lines — unique keys "vl"+i
    e("line",{x1:x0+col0,y1:y0,x2:x0+col0,y2:y0+2*rowH,stroke:"var(--text)",strokeWidth:1}),
    ...[1,2,3,4,5,6].map(i=>e("line",{key:"vl"+i,
      x1:x0+col0+i*colW,y1:y0,x2:x0+col0+i*colW,y2:y0+2*rowH,
      stroke:"var(--text)",strokeWidth:0.8})),
    // Label
    e("text",{x:x0+col0/2,y:y0+rowH*0.6,fontSize:9,textAnchor:"middle",fill:"var(--text)"},"PRIHOD"),
    e("text",{x:x0+col0/2,y:y0+rowH*0.6+9,fontSize:8,textAnchor:"middle",fill:"var(--muted)"},"(u kunama)"),
    // Day headers — unique keys "hd"+i
    ...headers.map((h,i)=>e("text",{key:"hd"+i,x:cx(i),y:y0+rowH*0.65,fontSize:10,
      fontWeight:"600",textAnchor:"middle",fill:"var(--text)"},h)),
    // Values — unique keys "val"+i
    ...values.map((v,i)=>e("text",{key:"val"+i,x:cx(i),y:y0+rowH+rowH*0.65,fontSize:10,
      textAnchor:"middle",fill:"var(--blue)"},v))
  );
}

function SvgTablica22_2013Bj(){
  const W=320,H=88,x0=10,y0=10,rowH=32,colW=[70,70,70,70];
  const xs=[x0,x0+colW[0],x0+colW[0]+colW[1],x0+colW[0]+colW[1]+colW[2]];
  const totalW=colW.reduce((a,b)=>a+b,0);
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    // Okvir bez pozadina
    e("rect",{x:x0,y:y0,width:totalW,height:2*rowH,fill:"none",stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:x0,y1:y0+rowH,x2:x0+totalW,y2:y0+rowH,stroke:"var(--text)",strokeWidth:1}),
    ...[1,2,3].map(i=>e("line",{key:"v"+i,x1:xs[i],y1:y0,x2:xs[i],y2:y0+2*rowH,stroke:"var(--text)",strokeWidth:1})),
    // Row x
    e("text",{x:x0+colW[0]/2,y:y0+rowH*0.65,fontSize:12,fontStyle:"italic",textAnchor:"middle",fill:"var(--text)"},"x"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH*0.65,fontSize:12,textAnchor:"middle",fill:"var(--blue)"},"\u22122"),
    // 1/8 kao razlomak SVG
    e("text",{x:xs[2]+colW[2]/2-4,y:y0+rowH*0.42,fontSize:10,textAnchor:"middle",fill:"var(--blue)"},"1"),
    e("line",{x1:xs[2]+colW[2]/2-10,y1:y0+rowH*0.52,x2:xs[2]+colW[2]/2+10,y2:y0+rowH*0.52,stroke:"var(--blue)",strokeWidth:1}),
    e("text",{x:xs[2]+colW[2]/2,y:y0+rowH*0.72,fontSize:10,textAnchor:"middle",fill:"var(--blue)"},"8"),
    e("text",{x:xs[3]+colW[3]/2,y:y0+rowH*0.65,fontSize:14,fontWeight:"700",textAnchor:"middle",fill:"var(--gold)"},"?"),
    // Row f(x)
    e("text",{x:x0+colW[0]/2,y:y0+rowH+rowH*0.65,fontSize:11,fontStyle:"italic",textAnchor:"middle",fill:"var(--text)"},"f(x)"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH+rowH*0.65,fontSize:14,fontWeight:"700",textAnchor:"middle",fill:"var(--gold)"},"?"),
    e("text",{x:xs[2]+colW[2]/2,y:y0+rowH+rowH*0.65,fontSize:14,fontWeight:"700",textAnchor:"middle",fill:"var(--gold)"},"?"),
    e("text",{x:xs[3]+colW[3]/2,y:y0+rowH+rowH*0.65,fontSize:12,textAnchor:"middle",fill:"var(--blue)"},"10")
  );
}

function SvgPravac18_2013Bj(){
  // Pravac s originalne slike: y = (3/2)x − 3  →  sjecišta s osima (2,0) i (0,−3).
  // Mreža (kao u ispitu): x ∈ [−3,4], y ∈ [−3,3], jedinična ćelija = 1.
  const W=268,H=228,sc=30,cx=112,cy=116;
  const _BLUE="var(--blue)";
  const GRID="var(--muted)";
  const slope=3/2, b=-3;
  const NXL=3,NXR=4,NYT=3,NYB=3;
  const gx0=cx-NXL*sc, gx1=cx+NXR*sc, gy0=cy-NYT*sc, gy1=cy+NYB*sc;
  // Klip pravca na okvir crteža da ne izlazi izvan viewBoxa
  const RX0=gx0-6, RX1=W-16, RY0=8, RY1=H-8;
  const yTop=(cy-RY0)/sc, yBot=-(RY1-cy)/sc;
  const xAtTop=(yTop-b)/slope, xAtBot=(yBot-b)/slope;
  const xa=Math.max((RX0-cx)/sc, Math.min(xAtTop,xAtBot));
  const xb=Math.min((RX1-cx)/sc, Math.max(xAtTop,xAtBot));
  const pxa=cx+xa*sc, pya=cy-(slope*xa+b)*sc;
  const pxb=cx+xb*sc, pyb=cy-(slope*xb+b)*sc;
  const grid=[];
  for(let k=-NXL;k<=NXR;k++) grid.push(e("line",{key:"gv"+k,x1:cx+k*sc,y1:gy0,x2:cx+k*sc,y2:gy1,
    stroke:GRID,strokeWidth:0.8,strokeOpacity:0.55}));
  for(let k=-NYB;k<=NYT;k++) grid.push(e("line",{key:"gh"+k,x1:gx0,y1:cy-k*sc,x2:gx1,y2:cy-k*sc,
    stroke:GRID,strokeWidth:0.8,strokeOpacity:0.55}));
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"ax18bj",markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto",
        markerUnits:"userSpaceOnUse"},e("path",{d:"M0,0.6 L0,6.4 L7,3.5 z",fill:"var(--text)"}))
    ),
    ...grid,
    e("line",{x1:gx0-12,y1:cy,x2:W-6,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ax18bj)"}),
    e("line",{x1:cx,y1:H-6,x2:cx,y2:6,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ax18bj)"}),
    e("text",{x:W-16,y:cy+15,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:cx-14,y:16,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("line",{x1:pxa,y1:pya,x2:pxb,y2:pyb,stroke:"var(--text)",strokeWidth:2.3,strokeLinecap:"round"}),
    e("circle",{cx,cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-11,y:cy+13,fontSize:10,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-12,y:cy-sc+5,fontSize:10,fill:"var(--text)"},"1")
  );
}

function SvgGrafovi12_2013Bj(){
  // Četiri ponuđena grafa uz pitanje "Na kojoj je slici prikazan graf funkcije f(x)=x²+1?"
  //   A: y = x² + 1   (tjeme (0,1))      B: y = |x| + 1  ("V" s vrhom (0,1))
  //   C: y = x² − 1   (tjeme (0,−1))     D: y = |x| − 1  ("V" s vrhom (0,−1))
  // Mreža svakog panela odgovara originalu: x ∈ [−4,4], y ∈ [−1,7], ćelija = 1.
  const sc=16, NX=4, YTOP=7, YBOT=-1;
  const GW=2*NX*sc, GH=(YTOP-YBOT)*sc;
  const PXo=[16,184], PYo=[22,198];
  const W=PXo[1]+GW+26, H=PYo[1]+GH+30;
  const GRID="var(--muted)";

  function panel(tag,fn){
    const i=tag.charCodeAt(0)-65;
    const ox=PXo[i%2], oy=PYo[i<2?0:1];
    const cx=ox+NX*sc, cy=oy+YTOP*sc;
    const items=[];
    for(let k=-NX;k<=NX;k++) items.push(e("line",{key:"gv"+tag+k,
      x1:cx+k*sc,y1:oy,x2:cx+k*sc,y2:oy+GH,stroke:GRID,strokeWidth:0.7,strokeOpacity:0.55}));
    for(let k=YBOT;k<=YTOP;k++) items.push(e("line",{key:"gh"+tag+k,
      x1:ox,y1:cy-k*sc,x2:ox+GW,y2:cy-k*sc,stroke:GRID,strokeWidth:0.7,strokeOpacity:0.55}));
    items.push(e("line",{key:"ax"+tag,x1:ox-10,y1:cy,x2:ox+GW+18,y2:cy,
      stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ax12bj)"}));
    items.push(e("line",{key:"ay"+tag,x1:cx,y1:oy+GH,x2:cx,y2:oy-12,
      stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ax12bj)"}));
    items.push(e("text",{key:"lx"+tag,x:ox+GW+6,y:cy+14,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"));
    items.push(e("text",{key:"ly"+tag,x:cx-13,y:oy-3,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"));
    // krivulja
    const pts=[];
    for(let s=0;s<=240;s++){
      const x=-NX-0.2+(2*NX+0.4)*s/240, y=fn(x);
      if(y<YBOT-0.02||y>YTOP+0.02) continue;
      if(Math.abs(x)>NX+0.2) continue;
      pts.push(`${(cx+x*sc).toFixed(1)},${(cy-y*sc).toFixed(1)}`);
    }
    items.push(e("polyline",{key:"cv"+tag,points:pts.join(" "),fill:"none",
      stroke:"var(--text)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));
    // jedinične oznake
    items.push(e("circle",{key:"c0"+tag,cx,cy,r:2.6,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.2}));
    items.push(e("circle",{key:"cx1"+tag,cx:cx+sc,cy,r:2.6,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.2}));
    items.push(e("circle",{key:"cy1"+tag,cx,cy:cy-sc,r:2.6,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.2}));
    items.push(e("text",{key:"t0"+tag,x:cx-9,y:cy+12,fontSize:10,fill:"var(--text)"},"0"));
    items.push(e("text",{key:"tx1"+tag,x:cx+sc-3,y:cy+12,fontSize:10,fill:"var(--text)"},"1"));
    items.push(e("text",{key:"ty1"+tag,x:cx-10,y:cy-sc+4,fontSize:10,fill:"var(--text)"},"1"));
    // oznaka ponuđenog odgovora
    items.push(e("text",{key:"lb"+tag,x:cx,y:oy+GH+24,fontSize:12,fontWeight:"700",
      textAnchor:"middle",fill:"var(--text)"},tag+"."));
    return e("g",{key:"p"+tag},...items);
  }

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"ax12bj",markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto",
        markerUnits:"userSpaceOnUse"},e("path",{d:"M0,0.6 L0,6.4 L7,3.5 z",fill:"var(--text)"}))
    ),
    panel("A",(x)=>x*x+1),
    panel("B",(x)=>Math.abs(x)+1),
    panel("C",(x)=>x*x-1),
    panel("D",(x)=>Math.abs(x)-1)
  );
}

function SvgSkica15_2013Bj(){
  // Tlocrt prostorije sa samim pravim kutovima (a = 12 m, b = 7 m, x = 1,5 m).
  // Vanjski pravokutnik a × b iz kojega su izrezana DVA UGAONA STEPENA:
  //   • gornji lijevi kut: širina x, dubina 2x
  //   • gornji desni kut:  širina x, dubina x
  // Ugaoni stepen ne mijenja opseg (2(a+b)) — upravo je to poanta zadatka.
  const s=17;
  const a=12*s, bh=7*s, x=1.5*s;
  const ox=42, oy=26;                    // gornji lijevi kut vanjskog pravokutnika
  const W=ox+a+58, H=oy+bh+40;
  const bx=ox+a, by=oy+bh;               // donji desni kut
  const pts=[
    [ox,        oy+2*x],                 // lijevi rub ispod gornjeg lijevog stepena
    [ox+x,      oy+2*x],
    [ox+x,      oy],                     // gore
    [bx-x,      oy],                     // gornji rub do desnog stepena
    [bx-x,      oy+x],
    [bx,        oy+x],                   // desni rub ispod desnog stepena
    [bx,        by],                     // dolje desno
    [ox,        by]                      // dolje lijevo
  ].map(([px,py])=>`${px},${py}`).join(" ");

  // Kota (mjerna crta) s graničnicima
  const dimH=(x1,x2,y,label,lx,ly)=>[
    e("line",{key:"dl"+y+x1,x1,y1:y,x2,y2:y,stroke:"var(--muted)",strokeWidth:0.9}),
    e("line",{key:"da"+y+x1,x1,y1:y-4,x2:x1,y2:y+4,stroke:"var(--muted)",strokeWidth:0.9}),
    e("line",{key:"db"+y+x1,x1:x2,y1:y-4,x2:x2,y2:y+4,stroke:"var(--muted)",strokeWidth:0.9}),
    e("text",{key:"dt"+y+x1,x:lx,y:ly,fontSize:11,textAnchor:"middle",fontStyle:"italic",
      fill:"var(--gold)"},label)
  ];
  const dimV=(y1,y2,xx,label,lx,ly)=>[
    e("line",{key:"vl"+xx+y1,x1:xx,y1,x2:xx,y2,stroke:"var(--muted)",strokeWidth:0.9}),
    e("line",{key:"va"+xx+y1,x1:xx-4,y1,x2:xx+4,y2:y1,stroke:"var(--muted)",strokeWidth:0.9}),
    e("line",{key:"vb"+xx+y1,x1:xx-4,y1:y2,x2:xx+4,y2,stroke:"var(--muted)",strokeWidth:0.9}),
    e("text",{key:"vt"+xx+y1,x:lx,y:ly,fontSize:11,textAnchor:"middle",fontStyle:"italic",
      fill:"var(--gold)"},label)
  ];

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    // Tlocrt
    e("polygon",{points:pts,fill:"var(--blue-d)",stroke:"var(--blue)",strokeWidth:2,
      strokeLinejoin:"miter"}),
    // Kota a (donji rub)
    ...dimH(ox,bx,by+16,"a",ox+a/2,by+31),
    // Kota b (desni rub)
    ...dimV(oy,by,bx+18,"b",bx+34,oy+bh/2+4),
    // Gornji lijevi stepen: širina x, dubina 2x
    ...dimH(ox,ox+x,oy-12,"x",ox+x/2,oy-17),
    ...dimV(oy,oy+2*x,ox-14,"2x",ox-28,oy+x+4),
    // Gornji desni stepen: širina x, dubina x
    ...dimH(bx-x,bx,oy-12,"x",bx-x/2,oy-17),
    ...dimV(oy,oy+x,bx+6,"x",bx+13,oy+x/2+4)
  );
}

// Zajednička geometrija mreže za zad. 19 (prazan sustav) i njegovo rješenje.
// Mreža mora obuhvatiti (0,2) i (4,0) jer učenik u nju crta y = −1/2·x + 2.
const G19 = { sc:26, NXL:3, NXR:6, NYT:4, NYB:2, mL:14, mT:14 };
G19.cx = G19.mL + G19.NXL*G19.sc;                 // 92
G19.cy = G19.mT + G19.NYT*G19.sc;                 // 118
G19.W  = G19.cx + G19.NXR*G19.sc + 18;            // 266
G19.H  = G19.cy + G19.NYB*G19.sc + 18;            // 188

// Mreža crtana eksplicitnim linijama (ne <pattern>) da se linije poklope s ishodištem.
function grid19Lines(tag){
  const {sc,NXL,NXR,NYT,NYB,cx,cy}=G19;
  const x0=cx-NXL*sc, x1=cx+NXR*sc, y0=cy-NYT*sc, y1=cy+NYB*sc;
  const out=[];
  for(let k=-NXL;k<=NXR;k++) out.push(e("line",{key:"gv"+tag+k,
    x1:cx+k*sc,y1:y0,x2:cx+k*sc,y2:y1,
    stroke:"var(--muted)",strokeWidth:0.7,strokeOpacity:0.5,strokeDasharray:"3,3"}));
  for(let k=-NYB;k<=NYT;k++) out.push(e("line",{key:"gh"+tag+k,
    x1:x0,y1:cy-k*sc,x2:x1,y2:cy-k*sc,
    stroke:"var(--muted)",strokeWidth:0.7,strokeOpacity:0.5,strokeDasharray:"3,3"}));
  return out;
}

// Osi + jedinične oznake, zajedničke za zadatak i rješenje.
function axes19(tag,markerId){
  const {sc,NXL,NXR,NYT,NYB,cx,cy,W,H}=G19;
  return [
    e("line",{key:"ax"+tag,x1:cx-NXL*sc-10,y1:cy,x2:W-6,y2:cy,
      stroke:"var(--text)",strokeWidth:1.6,markerEnd:`url(#${markerId})`}),
    e("line",{key:"ay"+tag,x1:cx,y1:cy+NYB*sc+10,x2:cx,y2:6,
      stroke:"var(--text)",strokeWidth:1.6,markerEnd:`url(#${markerId})`}),
    e("text",{key:"lx"+tag,x:W-14,y:cy+15,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{key:"ly"+tag,x:cx-14,y:15,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("circle",{key:"c0"+tag,cx,cy,r:3,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.4}),
    e("circle",{key:"cx1"+tag,cx:cx+sc,cy,r:3,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.4}),
    e("circle",{key:"cy1"+tag,cx,cy:cy-sc,r:3,fill:"var(--bg)",stroke:"var(--blue)",strokeWidth:1.4}),
    e("text",{key:"t0"+tag,x:cx-11,y:cy+13,fontSize:10,fill:"var(--text)"},"0"),
    e("text",{key:"tx1"+tag,x:cx+sc-3,y:cy+13,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{key:"ty1"+tag,x:cx-11,y:cy-sc+4,fontSize:10,fill:"var(--text)"},"1")
  ];
}

function arrowMarker19(id){
  return e("marker",{id,markerWidth:7,markerHeight:7,refX:6,refY:3.5,orient:"auto",
    markerUnits:"userSpaceOnUse"},e("path",{d:"M0,0.6 L0,6.4 L7,3.5 z",fill:"var(--text)"}));
}

function SvgGrid19_2013Bj(){
  const {W,H}=G19;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,arrowMarker19("ax19bj")),
    ...grid19Lines("q"),
    ...axes19("q","ax19bj")
  );
}

function SvgParalelni11_2013Bj(){
  // Usporedni pravci p i q; A, B ∈ p te C, D ∈ q.
  // Trokuti ABC i ABD dijele osnovicu AB i imaju jednake visine ⇒ jednake površine.
  const W=320,H=170;
  const yp=132, yq=42;
  const A={x:46,y:yp}, B={x:166,y:yp};
  const C={x:66,y:yq}, D={x:252,y:yq};
  const pt=(p)=>`${p.x},${p.y}`;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    // Pravci p i q — pune tanke linije, kao na originalnoj skici
    e("line",{x1:10,y1:yq,x2:W-24,y2:yq,stroke:"var(--muted)",strokeWidth:1.2}),
    e("line",{x1:10,y1:yp,x2:W-24,y2:yp,stroke:"var(--muted)",strokeWidth:1.2}),
    e("text",{x:W-18,y:yq-5,fontSize:12,fontStyle:"italic",fill:"var(--text)"},"q"),
    e("text",{x:W-18,y:yp-5,fontSize:12,fontStyle:"italic",fill:"var(--text)"},"p"),
    // Trokut ABC
    e("polygon",{points:`${pt(A)} ${pt(B)} ${pt(C)}`,fill:"none",
      stroke:"var(--blue)",strokeWidth:2}),
    // Trokut ABD
    e("polygon",{points:`${pt(A)} ${pt(B)} ${pt(D)}`,fill:"none",
      stroke:"var(--green)",strokeWidth:2}),
    // Zajednička osnovica AB (deblje, preko oba trokuta)
    e("line",{x1:A.x,y1:A.y,x2:B.x,y2:B.y,stroke:"var(--text)",strokeWidth:2.4}),
    // Vrhovi
    ...[{p:A,n:"A",dx:-13,dy:15},{p:B,n:"B",dx:6,dy:15},
        {p:C,n:"C",dx:-14,dy:-8},{p:D,n:"D",dx:7,dy:-8}].map(({p,n,dx,dy})=>
      e(React.Fragment,{key:n},
        e("circle",{cx:p.x,cy:p.y,r:3.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.5}),
        e("text",{x:p.x+dx,y:p.y+dy,fontSize:12,fontStyle:"italic",fill:"var(--text)"},n)
      )
    )
  );
}

function SvgSol19_2013Bj(){
  // Rješenje: y = −1/2·x + 2 — prolazi kroz (0, 2) i (4, 0). Ista mreža kao u zadatku.
  const {sc,NXL,NXR,cx,cy,W,H}=G19;
  const slope=-0.5, b=2;
  const xa=-NXL, xb=NXR;                       // klip pravca na mrežu
  const pxa=cx+xa*sc, pya=cy-(slope*xa+b)*sc;
  const pxb=cx+xb*sc, pyb=cy-(slope*xb+b)*sc;
  const px0=cx, py2=cy-b*sc;                   // (0, 2)
  const px4=cx+4*sc, py0=cy;                   // (4, 0)
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,arrowMarker19("ax19bjsol")),
    ...grid19Lines("s"),
    ...axes19("s","ax19bjsol"),
    e("line",{x1:pxa,y1:pya,x2:pxb,y2:pyb,stroke:"var(--blue)",strokeWidth:2.2,strokeLinecap:"round"}),
    e("circle",{cx:px0,cy:py2,r:4,fill:"var(--blue)"}),
    e("text",{x:px0+9,y:py2-12,fontSize:9,fontWeight:"700",fill:"var(--blue)"},"(0, 2)"),
    e("circle",{cx:px4,cy:py0,r:4,fill:"var(--blue)"}),
    e("text",{x:px4+5,y:py0-7,fontSize:9,fontWeight:"700",fill:"var(--blue)"},"(4, 0)"),
    e("text",{x:cx+2.3*sc,y:cy-3.3*sc,fontSize:9,fontStyle:"italic",fill:"var(--blue)"},
      "y = −1/2·x + 2")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: iracionalni (korijeni koji se ne pojednostave, π) ne pripadaju ℚ.",topic:"br",points:1,
  q:"Koji od navedenih brojeva [B:ne pripada] skupu racionalnih brojeva?",
  opts:["−3","√11","19/4","13,5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"√11 je iracionalan broj (nije savršen kvadrat). Ostali su racionalni.",
  steps:[
    {txt:"−3 → cijeli broj ⇒ racionalan"},
    {txt:"19/4 = 4,75 ⇒ racionalan"},
    {txt:"13,5 ⇒ racionalan"},
    {txt:"√11 ≈ 3,3166… ⇒ iracionalan ✓"},{txt:"Analiza distractora: A(1,732)=√3. C/D: racionalni su, √11 nije.",final:true,note:"diagnostika"},{txt:"Provjera: √11=3,3166... ne može se zapisati kao razlomak ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Iracionalni broj: decimalni razvoj je beskonačan i neperiodičan. √11≈3,31662... ne može se zapisati kao razlomak p/q.",note:"postupak",final:true},{txt:"Intuicija: Racionalni su: −3 (cijeli), 19/4 = 4,75 (konačna decimala), 13,5 = 27/2 (konačna decimala). Svi su oblika p/q.",note:"intuicija",final:true}
  ],
  why:[
    "Iracionalni broj: decimalni razvoj je beskonačan i neperiodičan. √11≈3,31662... ne može se zapisati kao razlomak p/q.",
    "Racionalni su: −3 (cijeli), 19/4 = 4,75 (konačna decimala), 13,5 = 27/2 (konačna decimala). Svi su oblika p/q.",
    "Česta greška: misliti da 13,5 nije racionalan jer ima decimalu. Konačne i periodične decimale su uvijek racionalne."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:2,type:"mc",warn:"Pazi: redoslijed — potencija, množenje/dijeljenje prije oduzimanja; zaokruži na kraju.",topic:"br",points:1,
  q:"Koja je vrijednost broja (−0,2)² − 1 : (7 · [FRAC:3|2] + 1,25) zaokružena na četiri decimale?",
  opts:["−0,1251","−0,0885","−0,0817","−0,0451"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Unutra: (0,04−1)/7·1,25 = (−0,96/7)·1,25 = −0,1371… Kvadrat recipročne vrijednosti ≈ −0,0451.",
  steps:[
    {txt:"Unutar: 7 · [FRAC:3|2] + 1,25 = 10,5 + 1,25 = 11,75"},
    {txt:"Brojevnik: (−0,2)² − 1 = 0,04 − 1 = −0,96"},
    {txt:"−0,96 / 11,75 ≈ −0,0817"},
    {txt:"Analiza distractora: D(−0,0451) nastaje ako ':' dijeli samo jednom. A/B/C: kriva potencija.",final:true,note:"diagnostika"},
    {txt:"Provjera: −0,96/11,75≈−0,0817 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Prioritet operacija: zagrade, potencije, množenje/dijeljenje, zbrajanje/oduzimanje. Izrazi sa : označavaju dijeljenje.",note:"postupak",final:true},{txt:"Intuicija: Pazi na izraz oblika 'a − 1:b': to je a−(1/b). Točnost zapisa je ključna za točan rezultat.",note:"intuicija",final:true}
  ],
  why:[
    "Prioritet operacija: zagrade, potencije, množenje/dijeljenje, zbrajanje/oduzimanje. Izrazi sa : označavaju dijeljenje.",
    "Pazi na izraz oblika 'a − 1:b': to je a−(1/b). Točnost zapisa je ključna za točan rezultat.",
    "Česta greška: pogrešan redosljed operacija ili krivi nazivnik. Uvijek izračunaj zagrade POTPUNO prije dijeljenja."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:3,type:"mc",warn:"Pazi: uvrsti — b² = (−2/3)², −4ac = −4·(−2)·(1/4); pazi na predznake.",topic:"br",points:1,
  q:"Zadani su: a = −2, b = [FRAC:−2|3], c = [FRAC:1|4]. Kolika je vrijednost izraza D = b² − 4ac?",
  opts:["−22/9","−14/9","14/9","22/9"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"D = (−2/3)² − 4·(−2)·(1/4) = 4/9 + 2 = 4/9 + 18/9 = 22/9.",
  steps:[
    {txt:"b² = (−2/3)² = 4/9"},
    {txt:"4ac = 4·(−2)·(1/4) = −2"},
    {txt:"D = 4/9 − (−2) = 4/9 + 2 = 22/9"},{txt:"Analiza distractora: A(-22/9)/B(-14/9)/C(14/9): greška u predznaku -4ac.",final:true,note:"diagnostika"},{txt:"Provjera: b²-4ac=(2/3)²-4(-2)(1/4)=4/9+2=22/9 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: D = b² − 4ac je diskriminanta. Uvrsti: b=−2/3, a=−2, c=1/4. b²=(2/3)²=4/9; 4ac=4·(−2)·(1/4)=−2.",note:"postupak",final:true},{txt:"Intuicija: D = 4/9 − (−2) = 4/9 + 2 = 4/9 + 18/9 = 22/9. Ključno: oduzimanje negativnog broja = zbrajanje.",note:"intuicija",final:true}
  ],
  why:[
    "D = b² − 4ac je diskriminanta. Uvrsti: b=−2/3, a=−2, c=1/4. b²=(2/3)²=4/9; 4ac=4·(−2)·(1/4)=−2.",
    "D = 4/9 − (−2) = 4/9 + 2 = 4/9 + 18/9 = 22/9. Ključno: oduzimanje negativnog broja = zbrajanje.",
    "Česta greška: 4ac = 4·(−2)·(1/4) = −2 (ne +2!). D=4/9−(−2)=4/9+2, ne 4/9−2."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:4,type:"mc",warn:"Pazi: dodaj 3p pa pomnoži s 2 → k = 2(m + 3p).",topic:"al",points:1,
  q:"Čemu je jednako k ako je m = [FRAC:k|2] − 3p?",
  opts:["k=m+3p","k=m+6p","k=2(m+3p)","k=2m+6p"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"m = [FRAC:k|2] − 3p ⇒ k = 3m/(2p) = 2m/(6p)... ili k = m/(2p)·3. Prema ključu: D.",
  steps:[
    {txt:"m = [FRAC:k|2] − 3p ⇒ dodaj 3p: m + 3p = [FRAC:k|2]"},
    {txt:"Pomnoži s 2: k = 2(m + 3p) = 2m + 6p"},
    {txt:"Analiza distractora: A(k=m+3p): zaborava ×2. B(k=m+6p): samo 3p×2. C(k=2m+3p): samo m×2.",final:true,note:"diagnostika"},
    {txt:"Provjera: m=[FRAC:2m+6p|2]−3p=m ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Izolacija k iz m=k/2−3p: dodaj 3p na obje strane ⇒ m+3p=k/2. Pomnoži s 2 ⇒ k=2m+6p.",note:"postupak",final:true},{txt:"Intuicija: Svaki član desne strane se pomnoži s 2: 2(m+3p)=2m+6p.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Izolacija k iz m=k/2−3p: dodaj 3p na obje strane ⇒ m+3p=k/2. Pomnoži s 2 ⇒ k=2m+6p.",
    "Svaki član desne strane se pomnoži s 2: 2(m+3p)=2m+6p.",
    "Česta greška: množiti samo jedan član s 2 umjesto cijele desne strane."
  ,"Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:5,type:"mc",warn:"Pazi: prvo pomnoži (a − 1)(a + 2) = a² + a − 2, pa cijelo s a.",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza a(a−1)(a+2)?",
  opts:["a³+a²−2a","a³+a−2","a³−2a","a³−3a²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"(a−1)(a²+a) = (a−1)·a(a+1) = a(a−1)(a+1) = a(a²−1) = a³−a... Ili direktno: a³+a²−a²−a = a³−a. Ključ A.",
  steps:[
    {txt:"Razvij: (a−1)(a+2) = a²+2a−a−2 = a²+a−2"},
    {txt:"Pomnoži s a: a(a²+a−2) = a³+a²−2a"},
    {txt:"Analiza distractora: B(a³+a−2): propustio ·a. C(a³−2a): izgubio a². D(a³−3a²): krivo množenje.",final:true,note:"diagnostika"},
    {txt:"Provjera a=1: 1·0·3=0; a³+a²−2a=0 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razvijanje trostruke zagrade: najprije pomnoži prve dvije (a−1)(a+2)=a²+a−2, zatim ·a.",note:"postupak",final:true},{txt:"Intuicija: Alternativa: direktno: a·a·a+a·a·2+a·(−1)·a+a·(−1)·2=a³+2a²−a²−2a=a³+a²−2a.",note:"intuicija",final:true},{txt:"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:[
    "Razvijanje trostruke zagrade: najprije pomnoži prve dvije (a−1)(a+2)=a²+a−2, zatim ·a.",
    "Alternativa: direktno: a·a·a+a·a·2+a·(−1)·a+a·(−1)·2=a³+2a²−a²−2a=a³+a²−2a.",
    "Česta greška: zaborava ·a koji stoji ispred zagrada, ili pogrešan predznak kod −1·2=−2."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:6,type:"mc",warn:"Pazi: ukupno = 12·750 mL = 9 L; podijeli kapacitetom spremnika pa zaokruži NAGORE.",topic:"br",points:1,
  q:"U kutiji se nalazi 12 boca ulja. Obujam (volumen) svake boce je 750 mL. Koliko je [B:najmanje] potrebno spremnika obujma 1 000 L u koje bismo pretočili ulje iz 500 takvih kutija?",
  opts:["3","5","6","9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Ukupno: 500×12×0,75 L = 4 500 L. Broj: ⌈4500/1000⌉ = 5.",
  steps:[
    {txt:"Ukupni volumen: 500 × 12 × 750 mL = 4 500 000 mL = 4 500 L"},
    {txt:"⌈4 500 / 1 000⌉ = 5 spremnika"},{txt:"Analiza distractora: A(3)/C(6)/D(9): kriva pretvorba ili zaokruživanje.",final:true,note:"diagnostika"},{txt:"Provjera: 500×12×750mL=4500L; ⌈4500/1000⌉=5 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ukupni volumen: 500×12×750 mL = 4 500 000 mL = 4 500 L.",note:"postupak",final:true},{txt:"Intuicija: Broj: 4500/1000=4,5 ⇒ zaokruži GORE: ⌈4,5⌉=5. Ne mogu se pune 4 jer ne stane sve!",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "Ukupni volumen: 500×12×750 mL = 4 500 000 mL = 4 500 L.",
    "Broj: 4500/1000=4,5 ⇒ zaokruži GORE: ⌈4,5⌉=5. Ne mogu se pune 4 jer ne stane sve!",
    "Česta greška: zaokruživanje prema 4 umjesto 5 — sve ulje mora stati."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:7,type:"mc",warn:"Pazi: smanjenje % = (razlika/početni)·100; razlika = 7,532619 − 7,500981.",topic:"br",points:1,
  q:"Tečaj eura iznosio je 7,532619 kn, a tjedan dana kasnije 7,500981 kn. Za koji se postotak smanjio tečaj eura?",
  opts:["0,040%","0,042%","0,420%","0,422%"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Smanjenje = 7,532619−7,500981 = 0,031638. Postotak = 0,031638/7,532619×100 ≈ 0,420%.",
  steps:[
    {txt:"Razlika: 7,532619 − 7,500981 = 0,031638"},
    {txt:"Postotak: 0,031638 / 7,532619 × 100 ≈ 0,420%"},{txt:"Analiza distractora: A(0,040%)/B(0,042%)/D(0,422%): kriva razlika ili baza.",final:true,note:"diagnostika"},{txt:"Provjera: 0,031638/7,532619×100≈0,420% ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postotna promjena = [(nova−stara)/stara] × 100 = (7,500981−7,532619)/7,532619×100 ≈ −0,420%.",note:"postupak",final:true},{txt:"Intuicija: Pitanje traži postotak smanjenja ⇒ uzmi apsolutnu vrijednost: 0,420%.",note:"intuicija",final:true}
  ],
  why:[
    "Postotna promjena = [(nova−stara)/stara] × 100 = (7,500981−7,532619)/7,532619×100 ≈ −0,420%.",
    "Pitanje traži postotak smanjenja ⇒ uzmi apsolutnu vrijednost: 0,420%.",
    "Česta greška: dijeljenje razlike s novom vrijednošću (7,500981) umjesto staroj (7,532619) kao bazom."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:8,type:"mc",warn:"Pazi: zbroj kutova četverokuta = 360°; ostala dva = 360 − 82 − 114, podijeli u 1 : 2.",topic:"geom",points:1,
  q:"Mjera jednog kuta četverokuta je 82°, drugog 114°, a preostala dva su u omjeru 1:2. Kolika je mjera manjeg?",
  opts:["41°","49°","54°40'","65°20'"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Preostalo: 360°−82°−114° = 164°. Manji = 164/3 = 54,666…° = 54°40'.",
  steps:[
    {txt:"82° + 114° + α + 2α = 360°"},
    {txt:"3α = 164° ⇒ α = 54,67° = 54°40'"},{txt:"Analiza distractora: A(41°)/B(49°)/D: kriva raspodjela preostalih kutova.",final:true,note:"diagnostika"},{txt:"Provjera: 360-82-114=164°; manji kut=164/3≈54,67°=54°40' ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Zbroj unutarnjih kutova četverokuta = 360°. Preostalo: 360−(82+114)=164°.",note:"postupak",final:true},{txt:"Intuicija: Omjer 1:2: manji=α, veći=2α; 3α=164° ⇒ α=54,67°=54°40'.",note:"intuicija",final:true}
  ],
  why:[
    "Zbroj unutarnjih kutova četverokuta = 360°. Preostalo: 360−(82+114)=164°.",
    "Omjer 1:2: manji=α, veći=2α; 3α=164° ⇒ α=54,67°=54°40'.",
    "Česta greška: zaborava da su preostala DVA kuta u omjeru 1:2, ili zaokruživanje na cijele stupnjeve."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:9,type:"mc",warn:"Pazi: d = √((5 − (−2))² + (1 − 3)²); pazi na predznake.",topic:"anal",points:1,
  q:"Kolika je udaljenost točaka K(−2, 3) i L(5, 1) u koordinatnom sustavu?",
  opts:["−13","5","−53","9"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"d = √((5−(−2))²+(1−3)²) = √(49+4) = √53.",
  steps:[
    {txt:"d = √((5+2)² + (1−3)²)"},
    {txt:"= √(49 + 4) = √53"},{txt:"Analiza distractora: A(√13): samo jedna komponenta. B(5)/D(9): kriva formula.",final:true,note:"diagnostika"},{txt:"Provjera: d=√((5-(-2))²+(1-3)²)=√(49+4)=√53 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula udaljenosti: d=√((x₂−x₁)²+(y₂−y₁)²). K(−2,3), L(5,1): d=√(7²+(−2)²)=√53.",note:"postupak",final:true},{txt:"Intuicija: Provjera: 7²=49, (−2)²=4, zbroj=53. √53≈7,28. Ni 13 ni 9 nije 53.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:[
    "Formula udaljenosti: d=√((x₂−x₁)²+(y₂−y₁)²). K(−2,3), L(5,1): d=√(7²+(−2)²)=√53.",
    "Provjera: 7²=49, (−2)²=4, zbroj=53. √53≈7,28. Ni 13 ni 9 nije 53.",
    "Česta greška: √(49+4)=√13 umjesto √53 (nema dodavanja pod korijenima!)."
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun."]},
  {id:10,type:"mc",warn:"Pazi: r = 4,5 cm; V = r²πh u cm³; 1 L = 1000 cm³.",topic:"geom",points:1,
  q:"Koliko [B:litara] (L) vode stane u posudu oblika valjka čija je visina 15 cm, a [B:promjer] baze 9 cm? (Napomena: 1 litra = 1 dm³)",
  opts:["0,424 L","0,954 L","4,241 L","9,543 L"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"r = 4,5 cm = 0,045 dm, h = 0,15 dm. V = π·0,045²·0,15... Ili: r=0,45dm, h=1,5dm. V≈0,954 L.",
  steps:[
    {txt:"r = 4,5 cm, h = 15 cm"},
    {txt:"V = π · 4,5² · 15 = π · 20,25 · 15 ≈ 954,26 cm³"},
    {txt:"= 0,95426 dm³ ≈ 0,954 L"},{txt:"Analiza distractora: A(0,424L): r=9 umjesto r=4,5. C/D: greška u pretvorbi.",final:true,note:"diagnostika"},{txt:"Provjera: r=4,5cm=0,45dm; V=π·0,45²·1,5≈0,954 dm³ ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Volumen valjka: V=πr²h. Promjer=9 cm ⇒ r=4,5 cm. V=π·4,5²·15≈954,3 cm³=0,954 L.",note:"postupak",final:true},{txt:"Intuicija: Konverzija: 1 dm³=1 L; 1 dm³=1000 cm³. Dijeli cm³ s 1000 za litre.",note:"intuicija",final:true}
  ],
  why:[
    "Volumen valjka: V=πr²h. Promjer=9 cm ⇒ r=4,5 cm. V=π·4,5²·15≈954,3 cm³=0,954 L.",
    "Konverzija: 1 dm³=1 L; 1 dm³=1000 cm³. Dijeli cm³ s 1000 za litre.",
    "Česta greška: koristiti promjer (9 cm) kao polumjer ⇒ V=π·81·15=3817 cm³ (4× preveliko)."
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:11,img:true,type:"mc",warn:"Pazi: trokuti s istom osnovicom između paralela imaju JEDNAKE površine (ista visina).",topic:"geom",points:1,
  img:true,
  q:"Nacrtani su usporedni pravci p i q i po dvije točke na svakom. Koja tvrdnja vrijedi za površine trokuta ABC i ABD prikazanih na skici?",
  opts:["P_ABC = 0,5·P_ABD","P_ABC = P_ABD","P_ABC = 1,5·P_ABD","P_ABC = 2·P_ABD"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Trokuti ABC i ABD imaju istu osnovicu AB. C i D leže na istom pravcu q koji je paralelan s AB. Visine iz C i D na AB su jednake ⇒ površine su jednake.",
  steps:[
    {txt:"Oba trokuta dijele osnovicu AB"},
    {txt:"C i D su na pravcu q ∥ p ⇒ iste visine na AB"},
    {txt:"P = (1/2) · AB · h ⇒ P_ABC = P_ABD"},{txt:"Analiza distractora: A/C/D: kriva primjena teorema o paralelnim pravcima.",final:true,note:"diagnostika"},{txt:"Provjera: isti temelj AB, iste visine → P_ABC=P_ABD ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Teorem: trokuti s jednakom osnovicom i visinom imaju jednake površine. ABC i ABD dijele AB; C,D na q ∥ p ⇒ jednaka visina.",note:"postupak",final:true},{txt:"Intuicija: P=(1/2)·AB·h. Visina h = udaljenost između p i q — jednaka za oba jer su pravci paralelni.",note:"intuicija",final:true}
  ],
  why:[
    "Teorem: trokuti s jednakom osnovicom i visinom imaju jednake površine. ABC i ABD dijele AB; C,D na q ∥ p ⇒ jednaka visina.",
    "P=(1/2)·AB·h. Visina h = udaljenost između p i q — jednaka za oba jer su pravci paralelni.",
    "Česta greška: pretpostaviti da dužina CD utječe na površinu — ne utječe! Samo visina i osnoviča su bitni."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:12,img:true,type:"mc",warn:"Pazi: parabola, tjeme (0, 1), otvor prema gore; ne siječe os x.",topic:"kv",points:1,
  img:true,
  q:"Na kojoj je slici prikazan graf funkcije f(x) = x² + 1?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"f(x)=x²+1: a=1>0 ⇒ parabola gore. Tjeme: (0,1) — jedan kvadrat iznad x-osi. Nema sjecišta s x-osi.",
  steps:[
    {txt:"a = 1 > 0 ⇒ parabola okrenuta gore"},
    {txt:"f(0) = 1 ⇒ tjeme T(0,1) iznad x-osi"},
    {txt:"Nema nultočaka (x²+1 > 0 uvijek)"},{txt:"Analiza distractora: B/C/D: krive slike parabole; A ima tjeme (0,1) bez nultočaka.",final:true,note:"diagnostika"},{txt:"Provjera: x²+1≥1>0; tjeme (0,1), otvara gore → A ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: f(x)=x²+1: a=1>0 ⇒ parabola gore. Tjeme=(0, f(0))=(0,1) — jedan kvadrat iznad nule.",note:"postupak",final:true},{txt:"Intuicija: Nultočke: x²+1=0 ⇒ x²=−1 — nema realnih rješenja ⇒ parabola ne siječe x-os. Graf A.",note:"intuicija",final:true}
  ],
  why:[
    "f(x)=x²+1: a=1>0 ⇒ parabola gore. Tjeme=(0, f(0))=(0,1) — jedan kvadrat iznad nule.",
    "Nultočke: x²+1=0 ⇒ x²=−1 — nema realnih rješenja ⇒ parabola ne siječe x-os. Graf A.",
    "Česta greška: brkanje tjemena s ishodištem, ili netočno smještanje na (1,0) umjesto (0,1)."
  ,"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja."]},
  {id:13,type:"mc",warn:"Pazi: ukupna cijena/ukupna masa = (220·7 + 330·10)/(220 + 330).",topic:"fin",points:2,
  q:"Pekar pomiješa 220 kg pšeničnog brašna (7 kn/kg) i 330 kg kukuruznog (10 kn/kg). Cijena miješa nog brašna po kg?",
  opts:["7,80 kn/kg","8,50 kn/kg","8,80 kn/kg","9,50 kn/kg"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Ukupna cijena: 220×7+330×10=1540+3300=4840 kn. Masa: 550 kg. 4840/550=8,80 kn/kg.",
  steps:[
    {txt:"Ukupno: 220×7 + 330×10 = 1540 + 3300 = 4840 kn"},
    {txt:"Masa: 220+330 = 550 kg"},
    {txt:"Cijena/kg: 4840/550 = 8,80 kn"},{txt:"Analiza distractora: A(7,80)/B(8,50)/D(9,50): kriva proporcija pri miješanju.",final:true,note:"diagnostika"},{txt:"Provjera: ukupna masa=220+330=550 kg; ukupna cijena=220·7+330·10=1540+3300=4840; po kg=4840/550=8,80 kn ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Mješanje: ukupna cijena=220×7+330×10=1540+3300=4840 kn. Masa=550 kg. Cijena/kg=4840/550=8,80 kn.",note:"postupak",final:true},{txt:"Intuicija: Nije jednostavna sredina (7+10)/2=8,5 jer su količine različite. Treba težinsku sredinu.",note:"intuicija",final:true}
  ],
  why:[
    "Mješanje: ukupna cijena=220×7+330×10=1540+3300=4840 kn. Masa=550 kg. Cijena/kg=4840/550=8,80 kn.",
    "Nije jednostavna sredina (7+10)/2=8,5 jer su količine različite. Treba težinsku sredinu.",
    "Česta greška: uzimati (7+10)/2=8,5 umjesto težinske sredine s koeficijentima 220 i 330."
  ,"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.","Tipičan propust: jednostavna vs složena kamata (PV·(1+r·n) vs PV·(1+r)ⁿ) — različite formule.","Veza s gradivom: financijska matematika koristi nizove (anuiteti) i eksponencijalne funkcije (kamate)."]},
  {id:14,type:"mc",warn:"Pazi: dijagonala = √(50² + 30²); ukupni put = 7·dijag; brzina = put/vrijeme.",topic:"br",points:2,
  q:"Dječak trči po dijagonali pravokutnoga igralište dimenzija 50 m × 30 m. Za 4 minute pretrči dijagonalu 7 puta. Koliko će metara pretrčati za 45 minuta nastavi li trčati istom prosječnom brzinom? Napomena: Prosječna brzina računa se kao omjer prijeđenoga puta i vremena.",
  opts:["1 499 m","4 592 m","6 300 m","8 523 m"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Dijagonala = √(50²+30²) = √3400 ≈ 58,31 m. Brzina = 7×58,31/4 ≈ 102,04 m/min. Za 45 min: ≈45×102,04 ≈ 4592 m.",
  steps:[
    {txt:"d = √(2500+900) = √3400 ≈ 58,31 m"},
    {txt:"Brzina: 7×58,31/4 ≈ 102,04 m/min"},
    {txt:"Put: 45×102,04 ≈ 4592 m"},{txt:"Analiza distractora: A(1499m)/C(6300m)/D(8523m): kriva dijagonala ili brzina.",final:true,note:"diagnostika"},{txt:"Provjera: dijag=√3400≈58,31m; v≈58,31·7/4≈102,04m/min; 45×102,04≈4592m ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Dijagonala pravokutnika: d=√(a²+b²)=√(2500+900)=√3400≈58,31 m. Brzina=7×58,31/4≈102,04 m/min.",note:"postupak",final:true},{txt:"Intuicija: Put za 45 min: s=v·t=102,04×45≈4592 m. Prosječna brzina=prijedeni put/vrijeme.",note:"intuicija",final:true}
  ],
  why:[
    "Dijagonala pravokutnika: d=√(a²+b²)=√(2500+900)=√3400≈58,31 m. Brzina=7×58,31/4≈102,04 m/min.",
    "Put za 45 min: s=v·t=102,04×45≈4592 m. Prosječna brzina=prijedeni put/vrijeme.",
    "Česta greška: koristiti stranicu (50 m ili 30 m) kao dijagonalu, ili uzimati 7 prolaza kao 7·50=350 m."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:15,img:true,type:"mc",warn:"Pazi: rastavi tlocrt na pravokutnike (L-oblik); pazi na dimenziju x.",topic:"geom",points:2,
  img:true,
  q:"Skica prikazuje tlocrt prostorije čiji su svi kutovi pravi i čije su dimenzije a = 12 m, b = 7 m i x = 1,5 m. Visina prostorije je 2,7 m. Koliko će koštati bojanje zidova te prostorije ako bojanje jednoga m² košta 10 kn?",
  opts:["513 kn","715,50 kn","1 026 kn","1 228,50 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Opseg L-prostorije = 2(a+b) = 2(12+7) = 38 m. Površina zidova = 38×2,7 = 102,6 m². Cijena = 102,6×10 = 1026 kn.",
  steps:[
    {txt:"Opseg L-prostorije = 2(a+b) = 2×19 = 38 m"},
    {txt:"Površina zidova = 38 × 2,7 = 102,6 m²"},
    {txt:"Cijena = 102,6 × 10 = 1 026 kn"},{txt:"Analiza distractora: A(513)/B(715,50)/D(1228,50): kriva površina ili cijena.",final:true,note:"diagnostika"},{txt:"Provjera: površina=102,6m²; cijena=1026 kn ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: L-prostorija ima isti opseg kao pravokutnik a×b: opseg=2(a+b)=2(12+7)=38 m. Visina=2,7 m ⇒ površina=102,6 m².",note:"postupak",final:true},{txt:"Intuicija: Ključna spoznaja: x (udubine) ne mijenja opseg jer svaka udubina dodaje jedan rub ali oduzima jednaki.",note:"intuicija",final:true}
  ],
  why:[
    "L-prostorija ima isti opseg kao pravokutnik a×b: opseg=2(a+b)=2(12+7)=38 m. Visina=2,7 m ⇒ površina=102,6 m².",
    "Ključna spoznaja: x (udubine) ne mijenja opseg jer svaka udubina dodaje jedan rub ali oduzima jednaki.",
    "Česta greška: dodavati x-ove od opsega, ili računati površinu poda umjesto zidova."
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:16,type:"mc",warn:"Pazi: uvrsti x = 3 da nađeš m; pa Viète (umnožak = −(m + 1)/m) za drugo rješenje.",topic:"kv",points:2,
  q:"Zadana je kvadratna jednadžba mx² − 5x − (m+1) = 0. Jedno rješenje te jednadžbe je 3. Koje je drugo rješenje te jednadžbe?",
  opts:["−3","−1/2","1","3/2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Za x=3: 9m−5·3−m−1=0 ⇒ 8m=16 ⇒ m=2. Jednadžba: 2x²−5x−3=0 ⇒ (2x+1)(x−3)=0 ⇒ x₂=−1/2.",
  steps:[
    {txt:"Uvrsti x=3: 9m−5·3−(m+1)=0 ⇒ 9m−15−m−1=0 ⇒ 8m=16 ⇒ m=2"},
    {txt:"Jednadžba: 2x²−5x−3=0 ⇒ (2x+1)(x−3)=0"},
    {txt:"x₁=3, x₂=−1/2"},{txt:"Analiza distractora: A/B/D: greška u supstituciji ili kvadratnoj jednadžbi.",final:true,note:"diagnostika"},{txt:"Provjera: sustav: x=3y; y²=6·3y → y(y-18)=0 → (0,0) i (54,18); MC: x₁=3, x₂=-1/2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Korak 1: uvrsti x=3 i izračunaj m. 9m−5·3−(m+1)=0 ⇒ 8m=16 ⇒ m=2.",note:"postupak",final:true},{txt:"Intuicija: Korak 2: jednadžba 2x²−5x−3=0. Faktoriziraj: (2x+1)(x−3)=0 ⇒ x₂=−1/2.",note:"intuicija",final:true}
  ],
  why:[
    "Korak 1: uvrsti x=3 i izračunaj m. 9m−5·3−(m+1)=0 ⇒ 8m=16 ⇒ m=2.",
    "Korak 2: jednadžba 2x²−5x−3=0. Faktoriziraj: (2x+1)(x−3)=0 ⇒ x₂=−1/2.",
    "Alternativa: Vietove formule: x₁·x₂=c/a=−3/2; 3·x₂=−3/2 ⇒ x₂=−1/2."
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Koliko košta 7 kg jabuka ako 2,5 kg jabuka košta 18 kn i 50 lp?",
  sol:{ans:"51 kn i 80 lp",alt:["51,80","51 kn 80 lp","51,80"]},
  exp:"1 kg = 18,50/2,5 = 7,40 kn. 7 kg = 7×7,40 = 51,80 kn = 51 kn 80 lp.",
  steps:[
    {txt:"Cijena po kg: 18,50 / 2,5 = 7,40 kn/kg"},
    {txt:"7 kg × 7,40 kn/kg = 51,80 kn"},
    {txt:"= 51 kn i 80 lp",final:true},
    {txt:"Provjera: 2,5 × 7,40 = 18,50 kn ✓",note:"verifikacija"},{txt:"Točan odgovor: 51 kn i 80 lp ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Proporcionalna raspodjela: cijena po kg = ukupna cijena / broj kg = 18,50 / 2,5 = 7,40 kn/kg.",note:"postupak",final:true},{txt:"Intuicija: Ukupno: 7 kg × 7,40 kn = 51,80 kn = 51 kn i 80 lp (1 kuna = 100 lipa).",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Proporcionalna raspodjela: cijena po kg = ukupna cijena / broj kg = 18,50 / 2,5 = 7,40 kn/kg.",
    "Ukupno: 7 kg × 7,40 kn = 51,80 kn = 51 kn i 80 lp (1 kuna = 100 lipa).",
    "Najčešća greška: dijeljenje 7 s 18,50 umjesto 2,5 s 18,50. Uvijek nalazi cijenu po jednoj jedinici."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:18,img:true,type:"sa",topic:"anal",points:1,
  img:true,
  q:"Odredite sjecišta pravca, prikazanog na slici, s koordinatnim osima.",
  sol:{ans:"(2, 0) i (0, -3)",alt:["(2,0) i (0,-3)","(0,-3) i (2,0)"]},
  exp:"Iz grafa: pravac pada, siječe x-os pri x=2 i y-os pri y=−3.",
  steps:[
    {txt:"Sjecište s x-osi: y=0 ⇒ x=2 ⇒ točka (2, 0)"},
    {txt:"Sjecište s y-osi: x=0 ⇒ y=−3 ⇒ točka (0, −3)"},
    {txt:"Sjecišta: (2, 0) i (0, −3)",final:true,note:"verifikacija"},
    {txt:"Provjera: nagib k=(−3−0)/(0−2)=3/2; pravac y=(3/2)x−3 ✓",note:"verifikacija"},{txt:"Točan odgovor: (2, 0) i (0, -3) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sjecište s osi dežnicija: na x-osi je y=0, na y-osi je x=0. Očitaj točke iz grafa.",note:"postupak",final:true},{txt:"Intuicija: Nagib pravca: k=(y₂−y₁)/(x₂−x₁)=(−3−0)/(0−2)=3/2. Jednadžba: y=(3/2)x−3.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:[
    "Sjecište s osi dežnicija: na x-osi je y=0, na y-osi je x=0. Očitaj točke iz grafa.",
    "Nagib pravca: k=(y₂−y₁)/(x₂−x₁)=(−3−0)/(0−2)=3/2. Jednadžba: y=(3/2)x−3.",
    "Najčešća greška: zamjena predznaka pri očitavanju — paziti da je y-sjecište negativno (pravac pada ispod nule)."
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun."]},
  {id:19,img:true,type:"proof",topic:"lin",points:1,
  img:true,
  q:"Nacrtajte pravac y = −1/2·x + 2 u zadanom koordinatnom sustavu.",
  sol:{ans:"pravac nacrtan",alt:["1","nacrtano"],svgFn:()=>e(SvgSol19_2013Bj,null)},
  exp:"Nagib k = −1/2, y-presjek = 2. Nultočka: 0=−1/2x+2 ⇒ x=4. Pravac prolazi (0,2) i (4,0).",
  steps:[
    {txt:"y-presjek: x=0 ⇒ y=−1/2·0+2=2 ⇒ točka (0,2)"},
    {txt:"x-presjek: y=0 ⇒ 0=−1/2·x+2 ⇒ x=4 ⇒ točka (4,0)"},
    {txt:"Povuci pravac kroz (0,2) i (4,0)",final:true},
    {txt:"Provjera: uvrsti (2,1): y=−1/2·2+2=1 ✓",note:"verifikacija"},{txt:"Točan odgovor: pravac nacrtan ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Jednadžba y=kx+b: nagib k=−1/2 (negativan ⇒ pravac pada), y-presjek b=2 ⇒ točka (0,2).",note:"postupak",final:true},{txt:"Intuicija: Nultočka (x-presjek): postavi y=0 ⇒ 0=−1/2·x+2 ⇒ x=4 ⇒ točka (4,0). Povuci pravac kroz (0,2) i (4,0).",note:"intuicija",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}
  ],
  why:[
    "Jednadžba y=kx+b: nagib k=−1/2 (negativan ⇒ pravac pada), y-presjek b=2 ⇒ točka (0,2).",
    "Nultočka (x-presjek): postavi y=0 ⇒ 0=−1/2·x+2 ⇒ x=4 ⇒ točka (4,0). Povuci pravac kroz (0,2) i (4,0).",
    "Najčešća greška: zamijeniti predznak nagiba — negativan k znači da pravac ide prema dolje s lijeva na desno."
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele."]},
  {id:20,type:"sa",topic:"br",points:1,
  q:"Koliko je 132 g/cm³ izraženo u kg/m³?",
  sol:{ans:"132 000 kg/m³",alt:["132000","132 000"],solFormula:{lhs:"132 000 kg/m³"}},
  exp:"1 g/cm³ = 1000 kg/m³. 132 × 1000 = 132 000 kg/m³.",
  steps:[
    {txt:"1 g = 0,001 kg; 1 cm³ = 10⁻⁶ m³"},
    {txt:"1 g/cm³ = 0,001 kg / 10⁻⁶ m³ = 1 000 kg/m³"},
    {txt:"132 g/cm³ = 132 × 1 000 = 132 000 kg/m³",final:true},
    {txt:"Provjera: 132 000 / 1 000 = 132 g/cm³ ✓",note:"verifikacija"},{txt:"Točan odgovor: 132 000 kg/m³ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konverzija: 1 g = 0,001 kg; 1 cm³ = (0,01 m)³ = 10⁻⁶ m³. Dakle: 1 g/cm³ = 0,001 / 10⁻⁶ = 10³ kg/m³ = 1 000 kg/m³.",note:"postupak",final:true},{txt:"Intuicija: Ukupno: 132 g/cm³ = 132 × 1 000 = 132 000 kg/m³.",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Konverzija: 1 g = 0,001 kg; 1 cm³ = (0,01 m)³ = 10⁻⁶ m³. Dakle: 1 g/cm³ = 0,001 / 10⁻⁶ = 10³ kg/m³ = 1 000 kg/m³.",
    "Ukupno: 132 g/cm³ = 132 × 1 000 = 132 000 kg/m³.",
    "Intuicija: gustoće izražene u g/cm³ su obično mali brojevi (voda=1); u kg/m³ iste vrijednosti su 1 000 puta veće.",
    "Najčešća greška: mješanje smjera konverzije — zapamti faktor 1 000, ne 0,001."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:21,type:"sa",topic:"al",points:1,
  q:"Čemu je, nakon skraćivanja, jednak izraz [FRAC:a²+6a+9|a²+3a]?",
  sol:{ans:"[FRAC:a+3|a]",alt:["a+3)/a","(a+3)/a"]},
  solFormula:{frac:[["a+3","a"]]},
  exp:"Brojevnik: a²+6a+9=(a+3)². Nazivnik: a²+3a=a(a+3). Skraćivanje (a+3): (a+3)/a.",
  steps:[
    {txt:"Brojevnik: a²+6a+9 = (a+3)²"},
    {txt:"Nazivnik: a²+3a = a(a+3)"},
    {txt:"Skraći (a+3): [FRAC:a+3|a]",final:true},
    {txt:"Provjera a=1: [FRAC:16|4]=4; [FRAC:4|1]=4 ✓",note:"verifikacija"},{txt:"Točan odgovor: [FRAC:a+3|a] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Faktorizacija brojevnika: a²+6a+9 = (a+3)². Koristimo kvadrat binoma: (a+b)²=a²+2ab+b².",note:"postupak",final:true},{txt:"Intuicija: Faktorizacija nazivnika: a²+3a = a(a+3). Izvlačimo zajednički faktor a.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Faktorizacija brojevnika: a²+6a+9 = (a+3)². Koristimo kvadrat binoma: (a+b)²=a²+2ab+b².",
    "Faktorizacija nazivnika: a²+3a = a(a+3). Izvlačimo zajednički faktor a.",
    "Skraćivanje: (a+3)² / a(a+3) = (a+3)/a za a≠0 i a≠−3.",
    "Najčešća greška: pokušaj skraćenja bez faktorizacije — brojevnik i nazivnik se mogu skratiti tek kad su u faktoriziranom obliku."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:22,img:true,type:"sa",topic:"lin",points:2,
  img:true,
  q:"Za funkciju f(x) = 3x − 2 popunite tablicu.",
  sol:{ans:"f(−2)=−8; f([FRAC:1|8])=−13/8; x=4 za f(x)=10",solFormula:{lhs:"f(x)=3x−2"},alt:["-8 i 4","f(-2)=-8"]},
  exp:"f(−2)=−8. f(1/8)=3/8−2=−13/8. f(x)=10 ⇒ x=4.",
  steps:[
    {txt:"Evaluacija: uvrsti x u f(x)=3x−2"},
    {txt:"f(−2) = −6−2 = −8"},
    {txt:"f([FRAC:1|8]) = [FRAC:3|8]−2 = [FRAC:3− 16|8] = [FRAC:−13|8]"},
    {txt:"f(x)=10 ⇒ 3x=12 ⇒ x=4",final:true},
    {txt:"Provjera: f(4)=10 ✓; f(−2)=−8 ✓",note:"verifikacija"},{txt:"Točan odgovor: f(−2)=−8; f([FRAC:1|8])=−13/8; x=4 za f(x)=10 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Evaluacija funkcije: f(x)=3x−2. Uvrsti zadanu vrijednost x i izračunaj. f(−2)=3(−2)−2=−8.",note:"postupak",final:true},{txt:"Intuicija: f(1/8)=3·(1/8)−2=3/8−16/8=−13/8. (Pozor: 2=16/8 za zajednički nazivnik.)",note:"intuicija",final:true}
  ],
  why:[
    "Evaluacija funkcije: f(x)=3x−2. Uvrsti zadanu vrijednost x i izračunaj. f(−2)=3(−2)−2=−8.",
    "f(1/8)=3·(1/8)−2=3/8−16/8=−13/8. (Pozor: 2=16/8 za zajednički nazivnik.)",
    "Inverzni problem: f(x)=10 ⇒ 3x−2=10 ⇒ 3x=12 ⇒ x=4. Rješavamo za x.",
    "Najčešća greška: pri f(1/8) zaboraviti pretvoriti 2 u razlomak s nazivnikom 8 ⇒ krivi rezultat."
  ,"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:23.1,img:true,type:"sa",topic:"stat",points:1,
  img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Koliki je bio prosječan prihod prodavača po danu u prikazanih sedam dana?",
  sol:{ans:"13 857,14 kn",alt:["13857.14","13857","13 857"]},
  exp:"Ukupno: 12000+7000+0+30000+15000+23000+10000 = 97 000 kn. Prosjek: 97000/7 ≈ 13 857,14 kn.",
  steps:[
    {txt:"Zbroj: 12000+7000+0+30000+15000+23000+10000 = 97 000 kn"},
    {txt:"Broj dana: 7 (uključujući srijedu s 0)"},
    {txt:"Prosjek: 97 000 / 7 ≈ 13 857,14 kn",final:true},
    {txt:"Provjera: 7 × 13 857,14 ≈ 97 000 ✓",note:"verifikacija"},{txt:"Točan odgovor: 13 857,14 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Aritmetička sredina: prosjek = ukupan zbroj / broj članova = 97 000 / 7 ≈ 13 857,14 kn.",note:"postupak",final:true},{txt:"Intuicija: Prihod u srijedu je 0 — to se računa kao član i dijeli s 7 (ne s 6). Prosjek uključuje sve dane.",note:"intuicija",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Aritmetička sredina: prosjek = ukupan zbroj / broj članova = 97 000 / 7 ≈ 13 857,14 kn.",
    "Prihod u srijedu je 0 — to se računa kao član i dijeli s 7 (ne s 6). Prosjek uključuje sve dane.",
    "Najčešća greška: izostavljanje srijede (0 kn) iz zbroja ili dijeljenje s 6 umjesto 7."
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:23.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Izrazite postotkom prihod ostvaren u ponedjeljak u odnosu na ukupni tjedni prihod.",
  intermediates:[97000, 12000, 0.12371],
  sol:{ans:"12,37%",alt:["12,37","12,37"]},
  exp:"12000/97000×100 ≈ 12,37%.",
  steps:[
    {txt:"Udio: [FRAC:12 000|97 000]"},
    {txt:"= 0,12371... × 100"},
    {txt:"≈ 12,37%",final:true},
    {txt:"Provjera: 12,37% × 97 000/100 ≈ 12 000 kn ✓",note:"verifikacija"},{txt:"Točan odgovor: 12,37% ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postotak dijela od cjeline: p = (dio / cjelina) × 100 = (12 000 / 97 000) × 100 ≈ 12,37%.",note:"postupak",final:true},{txt:"Intuicija: Ukupni tjedni prihod: 97 000 kn (iz Q23,1). Ponedjeljak: 12 000 kn ⇒ udio = 12 000/97 000.",note:"intuicija",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ],
  why:[
    "Postotak dijela od cjeline: p = (dio / cjelina) × 100 = (12 000 / 97 000) × 100 ≈ 12,37%.",
    "Ukupni tjedni prihod: 97 000 kn (iz Q23,1). Ponedjeljak: 12 000 kn ⇒ udio = 12 000/97 000.",
    "Najčešća greška: dijeljenje 97 000 s 12 000 umjesto obrnuto, ili zaborava množenja s 100."
  ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:24,type:"sa",topic:"kv",points:2,
  q:"Riješite sustav jednadžbi [SYS:x=3y|y²=6x].",
  sol:{ans:"(x₁, y₁) = (0, 0)  i  (x₂, y₂) = (54, 18)",alt:["(0,0) i (54,18)","x=0 y=0 i x=54 y=18"]},
  exp:"Uvrsti x=3y: y²=6·3y=18y ⇒ y²−18y=0 ⇒ y(y−18)=0. y=0⇒x=0; y=18⇒x=54.",
  steps:[
    {txt:"Supstitucija x=3y u y²=6x: y²=18y"},
    {txt:"y²−18y=0 ⇒ y(y−18)=0 ⇒ y₁=0, y₂=18"},
    {txt:"y₁=0 ⇒ x₁=0; y₂=18 ⇒ x₂=54"},
    {txt:"Rješenja: (0, 0) i (54, 18)",final:true},
    {txt:"Provjera: 54=3·18 ✓; 18²=6·54=324 ✓",note:"verifikacija"},{txt:"Točan odgovor: (x₁, y₁) = (0, 0)  i  (x₂, y₂) = (54, 18) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Metoda supstitucije: iz prve jednadžbe x=3y. Uvrsti u drugu: y²=6·3y=18y ⇒ y²−18y=0.",note:"postupak",final:true},{txt:"Intuicija: Faktorizacija: y(y−18)=0 ⇒ y₁=0 ili y₂=18. Za y=0: x=0; za y=18: x=54.",note:"intuicija",final:true}
  ],
  why:[
    "Metoda supstitucije: iz prve jednadžbe x=3y. Uvrsti u drugu: y²=6·3y=18y ⇒ y²−18y=0.",
    "Faktorizacija: y(y−18)=0 ⇒ y₁=0 ili y₂=18. Za y=0: x=0; za y=18: x=54.",
    "Provjera rješenja u ob je jednadžbe: (54,18): x=3y ⇒ 54=54 ✓; y²=6x ⇒ 324=324 ✓.",
    "Najčešća greška: dijeljenje y²−18y=0 s y (gubitak rješenja y=0). Uvijek faktoriziraj!"
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:25.1,img:true,type:"sa",topic:"stat",points:1,
  img:true,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Koliko je navedenih osoba bilo zaposleno 1990. godine?",
  sol:{ans:"3 osobe",alt:["3","tri"]},
  exp:"U 1990: Dragica (1955–1990 ✓), Ena (1978–2008 ✓), Filip (1984–1997 ✓) = 3 osobe.",
  steps:[
    {txt:"Dragica: 1955–1990 ⇒ zaposlena 1990 ✓"},
    {txt:"Ena: 1978–2008 ⇒ zaposlena 1990 ✓"},
    {txt:"Filip: 1984–1997 ⇒ zaposlen 1990 ✓"},
    {txt:"Ava, Boris, Cvita: van intervala 1990 ✗"},
    {txt:"Ukupno: 3 osobe",final:true},
    {txt:"Provjera: Dragica+Ena+Filip=3 ✓",note:"verifikacija"},{txt:"Točan odgovor: 3 osobe ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Očitaj s grafikona: koja vremenski interval svake osobe sadrži 1990. godinu.",note:"postupak",final:true},{txt:"Intuicija: Dragica (1955–1990): 1990 je UKLJUČENA (zatvoreni interval desno). Ena (1978–2008): da. Filip (1984–1997): da.",note:"intuicija",final:true}
  ],
  why:[
    "Očitaj s grafikona: koja vremenski interval svake osobe sadrži 1990. godinu.",
    "Dragica (1955–1990): 1990 je UKLJUČENA (zatvoreni interval desno). Ena (1978–2008): da. Filip (1984–1997): da.",
    "Najčešća greška: izostaviti Filipu ili Dragicu — pažljivo provjeri rubne vrijednosti intervala."
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:25.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Koliko je godina Ava bila zaposlena dulje od Borisa?",
  sol:{ans:"10 godina",alt:["10","deset"]},
  exp:"Ava = 20 god, Boris = 10 god. Razlika = 10 god.",
  steps:[
    {txt:"Ava: 1920−1900 = 20 godina"},
    {txt:"Boris: 1934−1924 = 10 godina"},
    {txt:"Razlika: 20−10 = 10 godina",final:true},
    {txt:"Provjera: 10+10=20 ✓",note:"verifikacija"},{txt:"Točan odgovor: 10 godina ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Trajanje zaposlenja = kraj − početak. Ava: 1920−1900=20 god. Boris: 1934−1924=10 god.",note:"postupak",final:true},{txt:"Intuicija: Razlika: 20−10=10 godina. Ava je bila zaposlena 10 godina dulje od Borisa.",note:"intuicija",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ],
  why:[
    "Trajanje zaposlenja = kraj − početak. Ava: 1920−1900=20 god. Boris: 1934−1924=10 god.",
    "Razlika: 20−10=10 godina. Ava je bila zaposlena 10 godina dulje od Borisa.",
    "Najčešća greška: zbrajanje umjesto oduzimanja, ili zamjena tko je dulje radio."
  ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Koliko je portugalskih arroba jednako 5 kg?",
  sol:{ans:"0,34 arroba",alt:["0,34","0,34"]},
  exp:"5 kg / 14,69 kg/arroba ≈ 0,34 arroba.",
  steps:[
    {txt:"Koliko arroba u 5 kg? Dijeli s masom jedne arrobe."},
    {txt:"5 / 14,69 = 0,3404..."},
    {txt:"≈ 0,34 arroba",final:true},
    {txt:"Provjera: 0,34 × 14,69 ≈ 4,99 ≈ 5 kg ✓",note:"verifikacija"},{txt:"Točan odgovor: 0,34 arroba ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konverzija: tražimo broj arroba koji odgovara 5 kg. Dijelimo željenu masu s masom jedne arrobe: 5 / 14,69 ≈ 0,34.",note:"postupak",final:true},{txt:"Intuicija: Dimenzijska analiza: [kg] / [kg/arroba] = [arroba]. Rezultat: 0,34 arroba.",note:"intuicija",final:true}
  ],
  why:[
    "Konverzija: tražimo broj arroba koji odgovara 5 kg. Dijelimo željenu masu s masom jedne arrobe: 5 / 14,69 ≈ 0,34.",
    "Dimenzijska analiza: [kg] / [kg/arroba] = [arroba]. Rezultat: 0,34 arroba.",
    "Najčešća greška: množenje umjesto dijeljenja (5 × 14,69 = 73,45 — nečo je mnogo više od 5 kg, besmisleno)."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:26.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko unča ima jedna portugalska arroba?",
  sol:{ans:"518,17 unča",alt:["518,17","518,17"]},
  exp:"14 690 g / 28,35 g/unča ≈ 518,17 unča.",
  steps:[
    {txt:"Pretvori: 14,69 kg = 14 690 g"},
    {txt:"14 690 / 28,35 = 518,17..."},
    {txt:"≈ 518,17 unča",final:true},
    {txt:"Provjera: 518,17 × 28,35 ≈ 14 690 g ✓",note:"verifikacija"},{txt:"Točan odgovor: 518,17 unča ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konverzija kg ⇒ g: 14,69 kg = 14 690 g (pomnoži s 1 000).",note:"postupak",final:true},{txt:"Intuicija: Koliko unča u jednoj arroba: 14 690 / 28,35 ≈ 518,17 unča. Dimenzija: [g] / [g/unča] = [unča].",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Konverzija kg ⇒ g: 14,69 kg = 14 690 g (pomnoži s 1 000).",
    "Koliko unča u jednoj arroba: 14 690 / 28,35 ≈ 518,17 unča. Dimenzija: [g] / [g/unča] = [unča].",
    "Najčešća greška: zaborava konverzije kg ⇒ g prije dijeljenja s gramima."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:27.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Riješite jednadžbu 5(2x + 1) − 3 = [FRAC:3|2].",
  sol:{ans:"x = −0,05",alt:["-0,05","-1/20"]},
  exp:"10x+5−1,5=3 ⇒ 10x=3−5+1,5=−0,5 ⇒ x=−0,05.",
  steps:[
    {txt:"Razvij: 5(2x+1) = 10x+5"},
    {txt:"10x+5−3 = [FRAC:3|2]"},
    {txt:"10x+2 = [FRAC:3|2] ⇒ 10x = [FRAC:3|2]−2 = [FRAC:3−4|2] = [FRAC:−1|2]"},
    {txt:"x = [FRAC:−1|20] = −0,05",final:true,note:"verifikacija"},
    {txt:"Provjera: 5(2·(−1/20)+1)−3 = 5(−1/10+1)−3 = 5·(9/10)−3 = 9/2−3 = 3/2 ✓",note:"verifikacija"},{txt:"Točan odgovor: x = −0,05 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razvij zagrade: 5(2x+1)=10x+5. Jednadžba postaje: 10x+5−3=[FRAC:3|2].",note:"postupak",final:true},{txt:"Intuicija: Izolacija x: 10x=[FRAC:3|2]−2=[FRAC:3−4|2]=[FRAC:−1|2] ⇒ x=[FRAC:−1|20]=−0,05.",note:"intuicija",final:true}
  ],
  why:[
    "Razvij zagrade: 5(2x+1)=10x+5. Jednadžba postaje: 10x+5−3=[FRAC:3|2].",
    "Izolacija x: 10x=[FRAC:3|2]−2=[FRAC:3−4|2]=[FRAC:−1|2] ⇒ x=[FRAC:−1|20]=−0,05.",
    "Najčešća greška: pogrešan predznak pri prenošenju broja na desnu stranu (−3 postaje +3)."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Riješite jednadžbu 10^(1−x) = 0,1.",
  sol:{ans:"x = 2",alt:["2","x=2"]},
  exp:"0,1 = 10^−1. 10^(1−x)=10^−1 ⇒ 1−x=−1 ⇒ x=2.",
  steps:[
    {txt:"Prepoznaj: 0,1 = [FRAC:1|10] = 10^(−1)"},
    {txt:"Ista baza: 10^(1−x) = 10^(−1) ⇒ 1−x = −1"},
    {txt:"x = 2",final:true},
    {txt:"Provjera: 10^(1−2) = 10^(−1) = 0,1 ✓",note:"verifikacija"},{txt:"Točan odgovor: x = 2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Osnova jednadžbe: 0,1 = 1/10 = 10^(−1). Sada su obje strane potencije baze 10.",note:"postupak",final:true},{txt:"Intuicija: Jednadžba eksponenata: 10^(1−x) = 10^(−1) ⇒ 1−x = −1 ⇒ x = 2.",note:"intuicija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:[
    "Osnova jednadžbe: 0,1 = 1/10 = 10^(−1). Sada su obje strane potencije baze 10.",
    "Jednadžba eksponenata: 10^(1−x) = 10^(−1) ⇒ 1−x = −1 ⇒ x = 2.",
    "Provjera: 10^(1−2) = 10^(−1) = 0,1 ✓.",
    "Najčešća greška: ne prepoznati 0,1 kao potenciju baze 10. Uvijek izraži obje strane u istoj bazi."
  ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]},
  {id:27.3,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Riješite nejednadžbu x(4 − x) > 3 − (x + x²).",
  sol:{ans:"x > [FRAC:3|5]",alt:["x>3/5","x>0,6"]},
  solFormula:{pre:"x > ",frac:[["3","5"]]},
  exp:"2x²−4x > 3x+3x² ⇒ 0 > x²+7x... Prema ključu x>3/5. PDF: x(2−4)>3(x+x): −2x>6x ⇒ x<0? Ključ x>3/5.",
  steps:[
    {txt:"x(4−x) > 3−(x+x²)"},
    {txt:"4x−x² > 3−x−x²"},
    {txt:"4x > 3−x ⇒ 5x > 3"},
    {txt:"x > [FRAC:3|5]",final:true,note:"verifikacija"},
    {txt:"Provjera x=1: 1·3=3 > 3−2=1 ✓; x=0: 0 > 3 ✗ ⇒ x>3/5 ✓",note:"verifikacija"},{txt:"Točan odgovor: x > [FRAC:3|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razvij: 4x−x² > 3−x−x². X² se kraće s obje strane ⇒ 4x > 3−x.",note:"postupak",final:true},{txt:"Intuicija: Najčešća greška: ne razviti zagrade ili loše prenijeti −x². Ovdje se srećno poništi.",note:"intuicija",final:true}
  ],
  why:[
    "Razvij: 4x−x² > 3−x−x². X² se kraće s obje strane ⇒ 4x > 3−x.",
    "Najčešća greška: ne razviti zagrade ili loše prenijeti −x². Ovdje se srećno poništi.",
    "Alternativa: Provjeri s x=1 (zadovoljava) i x=0 (ne zadovoljava) ⇒ granica je 3/5."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"fin",points:1,
  img:true,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Iva je naručila veliku dalmatinsku pizzu, porciju maslina i vodu u bočici, a Matej malu slavonsku pizzu, porciju feferona i gazirani sok. Koliko kuna konobar mora vratiti ako su platili novčanico od 200 kn?",
  sol:{ans:"97 kn",alt:["97","97,00"]},
  exp:"Iva: 35+5+8=48 kn. Matej: 32+10+13=55 kn. Ukupno=103 kn. Kusur: 200−103=97 kn.",
  steps:[
    {txt:"Iva: velika dalmatinska (35) + masline (5) + voda (8) = 48 kn"},
    {txt:"Matej: mala slavonska (32) + feferoni (10) + gazirani (13) = 55 kn"},
    {txt:"Ukupno: 48 + 55 = 103 kn"},
    {txt:"Kusur: 200 − 103 = 97 kn",final:true,note:"verifikacija"},
    {txt:"Provjera: 97 + 103 = 200 ✓",note:"verifikacija"},{txt:"Točan odgovor: 97 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Zbroji stavke svakog gosta zasebno prema cjeniku. Iva: pizza 35 + masline 5 + voda 8 = 48 kn.",note:"postupak",final:true},{txt:"Intuicija: Matej: mala slavonska 32 + feferoni 10 + gazirani 13 = 55 kn. Ukupno = 48+55 = 103 kn.",note:"intuicija",final:true}
  ],
  why:[
    "Zbroji stavke svakog gosta zasebno prema cjeniku. Iva: pizza 35 + masline 5 + voda 8 = 48 kn.",
    "Matej: mala slavonska 32 + feferoni 10 + gazirani 13 = 55 kn. Ukupno = 48+55 = 103 kn.",
    "Kusur = plaćeno − ukupno = 200 − 103 = 97 kn. Provjera: 103+97=200 ✓.",
    "Najčešća greška: uzeti krivu veličinu pizze ili krivu vrstu (mala vs velika, slavonska vs dalmatinska)."
  ,"Provjera: konačni iznos = početni iznos + kamate — provjeri logiku rasta.","Tipičan propust: jednostavna vs složena kamata (PV·(1+r·n) vs PV·(1+r)ⁿ) — različite formule."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"geom",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Tri petine površine male pizze odgovara površini jedne osmine jumbo pizze. Koliki je polumjer jumbo pizze ako je polumjer male pizze 10 cm?",
  sol:{ans:"≈21,91 cm",alt:["21,91","21,91"]},
  exp:"3/5·π·10² = 1/8·π·R² ⇒ R² = 8·(3/5)·100 = 480 ⇒ R = √480 ≈ 21,91 cm.",
  steps:[
    {txt:"Površina kruga: P=πr². Uvjet: [FRAC:3|5]·π·10² = [FRAC:1|8]·π·R²"},
    {txt:"π se kraći: [FRAC:3|5]·100 = [FRAC:R²|8]"},
    {txt:"R² = 8 · [FRAC:3|5] · 100 = [FRAC:2400|5] = 480"},
    {txt:"R = √480 = 4√30 ≈ 21,91 cm",final:true,note:"verifikacija"},
    {txt:"Provjera: [FRAC:3|5]·π·100 = 60π; [FRAC:1|8]·π·480 = 60π ✓",note:"verifikacija"},{txt:"Točan odgovor: ≈21,91 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Površina kruga: P=πr². Tri petine male pizze = 3/5·π·10²=60π. Osmina jumbo = 1/8·π·R².",note:"postupak",final:true},{txt:"Intuicija: Jednadžba: 60π = πR²/8 ⇒ R² = 480 ⇒ R = √480 = 4√30 ≈ 21,91 cm.",note:"intuicija",final:true}
  ],
  why:[
    "Površina kruga: P=πr². Tri petine male pizze = 3/5·π·10²=60π. Osmina jumbo = 1/8·π·R².",
    "Jednadžba: 60π = πR²/8 ⇒ R² = 480 ⇒ R = √480 = 4√30 ≈ 21,91 cm.",
    "Ključna intuicija: π se kraći s obje strane — radi s omjerima površina bez π.",
    "Najčešća greška: zaborava kvadriranja polumjera (koristiti r ne r² u formuli za površinu)."
  ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]}
];

export const qImages = {
  "2013_jesen_B__11": () => e(SvgParalelni11_2013Bj, null),
  "2013_jesen_B__12": () => e(SvgGrafovi12_2013Bj, null),
  "2013_jesen_B__15": () => e(SvgSkica15_2013Bj, null),
  "2013_jesen_B__18": () => e(SvgPravac18_2013Bj, null),
  "2013_jesen_B__19": () => e(SvgGrid19_2013Bj, null),
  "2013_jesen_B__22": () => e(SvgTablica22_2013Bj, null),
  "2013_jesen_B__23.1": () => e(SvgTablica23_2013Bj, null),
  "2013_jesen_B__23.2": () => e(SvgTablica23_2013Bj, null),
  "2013_jesen_B__25.1": () => e(SvgGraf25_2013Bj, null),
  "2013_jesen_B__25.2": () => e(SvgGraf25_2013Bj, null),
  "2013_jesen_B__28.1": () => e(SvgCjenik28_2013Bj, null),
  "2013_jesen_B__28.2": () => e(SvgCjenik28_2013Bj, null),
};
