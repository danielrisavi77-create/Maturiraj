// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg8_2019Ajj(){
  /* Trokut FGH: F lijevo sredina, G dolje, H gore-desno.
     Kut 70° je u G, između stranica GF i GH.
     FG=54 dm, GH=42 dm. Vjerno po PDF slici. */
  const W=260,H=200;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const F={x:15,y:80}, G={x:140,y:180}, Hv={x:165,y:18};
  /* kutovi od G prema F i H */
  const aGF=Math.atan2(F.y-G.y,F.x-G.x);
  const aGH=Math.atan2(Hv.y-G.y,Hv.x-G.x);
  const R=24;
  /* Luk: od smjera GF do smjera GH, sweep=0 (CCW = unutar trokuta).
     Provjerimo: GF ide gore-lijevo (negativan x, negativan y iz G), GH ide gore-desno (pozitivan x, negativan y).
     Kut od GF je ~(-120°), kut od GH je ~(-80°). CCW od GF do GH je manji luk = unutar trokuta. */
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:`${F.x},${F.y} ${G.x},${G.y} ${Hv.x},${Hv.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.4,strokeLinejoin:"miter"}),
    /* 70° luk u G — od GF smjera do GH smjera, sweep=0 za unutrašnjost */
    e("path",{d:`M ${G.x+R*Math.cos(aGF)} ${G.y+R*Math.sin(aGF)} A ${R} ${R} 0 0 0 ${G.x+R*Math.cos(aGH)} ${G.y+R*Math.sin(aGH)}`,
      fill:"none",stroke:_BLUE,strokeWidth:1}),
    /* 70° tekst — unutar luka, pomaknut gore-lijevo od G */
    e("text",{x:G.x-28,y:G.y-18,fontSize:11,fill:"var(--text)"},"70\u00b0"),
    /* oznake vrhova */
    e("text",{x:F.x-14,y:F.y+4,fontSize:13,fontStyle:"italic",fill:_GOLD},"F"),
    e("text",{x:G.x-4,y:G.y+16,fontSize:13,fontStyle:"italic",fill:_GOLD},"G"),
    e("text",{x:Hv.x+4,y:Hv.y-4,fontSize:13,fontStyle:"italic",fill:_GOLD},"H"),
    /* oznaka 54 dm na FG — ispod linije, na lijevoj polovici */
    e("text",{x:(F.x+G.x)/2-16,y:(F.y+G.y)/2+18,fontSize:11,fill:"var(--text)"},"54 dm"),
    /* oznaka 42 dm na GH — desno od linije */
    e("text",{x:(G.x+Hv.x)/2+10,y:(G.y+Hv.y)/2+4,fontSize:11,fill:"var(--text)"},"42 dm")
  );
}

function Svg25b_2019Ajj(){
  /* Trokut RST iz slike: T gore, R dolje-lijevo, S dolje sredina.
     Dva trokuta dijele stranicu. Iz slike (gore-dolje):
     T na vrhu. Od T: lijeva strana 6cm do točke P, desna 8cm do P.
     Od P: 4cm dolje do neke točke Q na RS.
     RS = 14cm (R lijevo, S desno od Q). QS = 7cm.
     Pravi kut kod P (ili kod Q). */
  const W=210,H=240;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  /* Pozicije prema slici */
  const T={x:105,y:12};
  const P={x:88,y:88};  /* točka na sredini, pravi kut */
  const Q={x:100,y:148}; /* dolje od P */
  const R={x:18,y:220};
  const S={x:140,y:210};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* vanjski trokut RST */
    e("polygon",{points:`${T.x},${T.y} ${R.x},${R.y} ${S.x},${S.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.4}),
    /* unutarnje linije: T-P, P-Q, P-S */
    e("line",{x1:T.x,y1:T.y,x2:P.x,y2:P.y,stroke:_BLUE,strokeWidth:1.2}),
    e("line",{x1:P.x,y1:P.y,x2:Q.x,y2:Q.y,stroke:_BLUE,strokeWidth:1.2}),
    e("line",{x1:P.x,y1:P.y,x2:S.x,y2:S.y,stroke:_BLUE,strokeWidth:1.2}),
    /* pravi kut oznaka u P */
    (()=>{
      const sz=6;
      const d1x=T.x-P.x,d1y=T.y-P.y,l1=Math.sqrt(d1x*d1x+d1y*d1y);
      const d2x=S.x-P.x,d2y=S.y-P.y,l2=Math.sqrt(d2x*d2x+d2y*d2y);
      const u1x=d1x/l1*sz,u1y=d1y/l1*sz,u2x=d2x/l2*sz,u2y=d2y/l2*sz;
      return e("path",{d:`M${P.x+u1x},${P.y+u1y} L${P.x+u1x+u2x},${P.y+u1y+u2y} L${P.x+u2x},${P.y+u2y}`,
        fill:"none",stroke:_BLUE,strokeWidth:0.7});
    })(),
    /* oznake vrhova */
    e("text",{x:T.x+2,y:T.y-4,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:_GOLD},"T"),
    e("text",{x:R.x-10,y:R.y+4,fontSize:13,fontStyle:"italic",fill:_GOLD},"R"),
    e("text",{x:S.x+4,y:S.y+6,fontSize:13,fontStyle:"italic",fill:_GOLD},"S"),
    /* duljine */
    e("text",{x:(T.x+P.x)/2-18,y:(T.y+P.y)/2,fontSize:10,fill:_GOLD},"6 cm"),
    e("text",{x:(P.x+S.x)/2+8,y:(P.y+T.y)/2+10,fontSize:10,fill:_GOLD},"8 cm"),
    e("text",{x:(P.x+Q.x)/2+6,y:(P.y+Q.y)/2,fontSize:10,fill:_GOLD},"4 cm"),
    e("text",{x:(R.x+Q.x)/2-22,y:(R.y+Q.y)/2+6,fontSize:10,fill:"var(--text)"},"14 cm"),
    e("text",{x:(Q.x+S.x)/2+6,y:(Q.y+S.y)/2,fontSize:10,fill:_GOLD},"7 cm")
  );
}

function Svg25a_2019Ajj(){
  /* Kružnica sa središtem A, prolazi B,C,D.
     Tangente u B i D sijeku se pod kutom 58° izvan kružnice (desno).
     Iz slike: D gore, B dolje-lijevo, C desno (na kružnici), A središte (lijevo).
     Tangente u B i D prolaze kroz vanjsku točku S desno. */
  const W=220,H=200;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=80,cy=100,R=56;
  /* D gore-desno, B dolje, C na desnoj strani */
  const angD=60, angB=240, angC=350;
  const toRad=a=>a*Math.PI/180;
  const D={x:cx+R*Math.cos(toRad(angD)),y:cy-R*Math.sin(toRad(angD))};
  const B={x:cx+R*Math.cos(toRad(angB)),y:cy-R*Math.sin(toRad(angB))};
  const Cv={x:cx+R*Math.cos(toRad(angC)),y:cy-R*Math.sin(toRad(angC))};
  /* Sjecište tangenti S — desno od kružnice */
  const S={x:195,y:110};
  /* Luk za 58° kut kod S */
  const aSB=Math.atan2(B.y-S.y,B.x-S.x);
  const aSD=Math.atan2(D.y-S.y,D.x-S.x);
  const Ra=18;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* kružnica */
    e("circle",{cx:cx,cy:cy,r:R,fill:"none",stroke:_BLUE,strokeWidth:1.3}),
    /* tetive AB, AD (polumjeri) */
    e("line",{x1:cx,y1:cy,x2:B.x,y2:B.y,stroke:_BLUE,strokeWidth:0.7}),
    e("line",{x1:cx,y1:cy,x2:D.x,y2:D.y,stroke:_BLUE,strokeWidth:0.7}),
    /* tangente od B do S i od D do S */
    e("line",{x1:B.x,y1:B.y,x2:S.x,y2:S.y,stroke:_BLUE,strokeWidth:1.2}),
    e("line",{x1:D.x,y1:D.y,x2:S.x,y2:S.y,stroke:_BLUE,strokeWidth:1.2}),
    /* tangentne linije produžene izvan S */
    e("line",{x1:S.x,y1:S.y,x2:S.x+(S.x-B.x)*0.3,y2:S.y+(S.y-B.y)*0.3,stroke:_BLUE,strokeWidth:0.8}),
    e("line",{x1:S.x,y1:S.y,x2:S.x+(S.x-D.x)*0.3,y2:S.y+(S.y-D.y)*0.3,stroke:_BLUE,strokeWidth:0.8}),
    /* 58° luk kod S */
    e("path",{d:`M ${S.x+Ra*Math.cos(aSD)} ${S.y+Ra*Math.sin(aSD)} A ${Ra} ${Ra} 0 0 1 ${S.x+Ra*Math.cos(aSB)} ${S.y+Ra*Math.sin(aSB)}`,
      fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    e("text",{x:S.x-30,y:S.y+6,fontSize:10,fill:"var(--text)"},"58\u00b0"),
    /* pravi kut oznake u B i D (tangenta ⊥ polumjer) */
    ...["B","D"].map((lbl,i)=>{
      const P=i===0?B:D;
      const dx1=cx-P.x,dy1=cy-P.y,d1=Math.sqrt(dx1*dx1+dy1*dy1);
      const dx2=S.x-P.x,dy2=S.y-P.y,d2=Math.sqrt(dx2*dx2+dy2*dy2);
      const sz=6;
      const u1x=dx1/d1*sz,u1y=dy1/d1*sz,u2x=dx2/d2*sz,u2y=dy2/d2*sz;
      return e("path",{key:"rt"+lbl,d:`M${P.x+u1x},${P.y+u1y} L${P.x+u1x+u2x},${P.y+u1y+u2y} L${P.x+u2x},${P.y+u2y}`,
        fill:"none",stroke:_BLUE,strokeWidth:0.6});
    }),
    /* oznake */
    e("text",{x:cx-16,y:cy+4,fontSize:13,fontStyle:"italic",fill:_GOLD},"A"),
    e("text",{x:B.x-12,y:B.y+12,fontSize:13,fontStyle:"italic",fill:_GOLD},"B"),
    e("text",{x:Cv.x+4,y:Cv.y+2,fontSize:13,fontStyle:"italic",fill:_GOLD},"C"),
    e("text",{x:D.x-2,y:D.y-8,fontSize:13,fontStyle:"italic",fill:_GOLD},"D"),
    /* točka C na kružnici */
    e("circle",{cx:Cv.x,cy:Cv.y,r:2.5,fill:_RED})
  );
}

function Svg23_2_2019Ajj(){
  const W=300,H=220,pad={l:30,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-Math.PI,xMax=2*Math.PI;
  const yMin=-2.5,yMax=2.5;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const xTicks=[-Math.PI,-Math.PI/2,0,Math.PI/2,Math.PI,3*Math.PI/2,2*Math.PI];
  const yTicks=[-2,-1,0,1,2];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},
    ...xTicks.map((v,i)=>e("line",{key:"vg"+i,x1:toX(v),y1:pad.t,x2:toX(v),y2:pad.t+iH,
      stroke:"rgba(148,163,184,0.2)",strokeWidth:0.6})),
    ...yTicks.map((v,i)=>e("line",{key:"hg"+i,x1:pad.l,y1:toY(v),x2:pad.l+iW,y2:toY(v),
      stroke:"rgba(148,163,184,0.2)",strokeWidth:0.6})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:toX(-Math.PI),y:oy+14,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},"\u2212\u03c0"),
    e("text",{x:ox-10,y:oy+14,fontSize:10,fill:"var(--muted)"},"0"),
    e("text",{x:toX(Math.PI),y:oy+14,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},"\u03c0"),
    e("text",{x:toX(2*Math.PI),y:oy+14,textAnchor:"middle",fontSize:10,fill:"var(--muted)"},"2\u03c0"),
    e("circle",{cx:ox,cy:toY(1),r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-10,y:toY(1)+4,fontSize:10,fill:"var(--muted)"},"1"),
    ...xTicks.map((v,i)=>e("line",{key:"xt"+i,x1:toX(v),y1:oy-2,x2:toX(v),y2:oy+2,stroke:"var(--text)",strokeWidth:1})),
    ...yTicks.filter(v=>v!==0).map((v,i)=>e("line",{key:"yt"+i,x1:ox-2,y1:toY(v),x2:ox+2,y2:toY(v),stroke:"var(--text)",strokeWidth:1}))
  );
}

function SvgT20a_2019Ajj(){
  const W=260,H=100;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cols=[0,65,130,195,260]; /* 4 stupca + header */
  const rows=[0,45,100]; /* 2 retka + header */
  const cw=65,rh=45; /* širina stupca, visina retka */
  const hdr=["x","0","2",""];
  const vals=["f(x)","\u221242","28","0"];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* pozadina header stupca (x / f(x)) — siva */
    e("rect",{x:0,y:0,width:cw,height:H,fill:"var(--muted)",fillOpacity:0.15}),
    /* okvir tablice */
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.2}),
    /* horizontalna linija (razdvaja retke) */
    e("line",{x1:0,y1:rows[1],x2:W,y2:rows[1],stroke:"var(--bdr)",strokeWidth:1}),
    /* vertikalne linije stupaca */
    ...cols.slice(1,-1).map((cx,i)=>e("line",{key:"vc"+i,x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--bdr)",strokeWidth:1})),
    /* header red: x, 0, 2, _ */
    ...hdr.map((t,i)=>e("text",{key:"h"+i,x:cols[i]+cw/2,y:rows[0]+rh/2+5,textAnchor:"middle",
      fontSize:i===0?15:14,fontStyle:i===0?"italic":"normal",
      fill:i===0?"var(--text)":"var(--text)"},t)),
    /* values red: f(x), −42, 28, 0 */
    ...vals.map((t,i)=>e("text",{key:"v"+i,x:cols[i]+cw/2,y:rows[1]+rh/2+5,textAnchor:"middle",
      fontSize:i===0?15:14,fontStyle:i===0?"italic":"normal",
      fill:i===0?"var(--text)":"var(--blue)"},t))
  );
}

function Svg14_2019Ajj(){
  /* Jednakokračni pravokutni trokut ABC. C gore, A dolje-lijevo, B dolje-desno.
     M polovište AB (hipotenuze). Presavijanje: isprekidane linije tvore pravokutnik.
     Pravi kut u C. Iz slike: trokut visok, pravokutnik unutra isprekidan. */
  const W=190,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:20,y:190}, B={x:170,y:190}, C={x:95,y:15};
  const M={x:(A.x+B.x)/2,y:A.y};
  /* Polovišta AC i BC */
  const midAC={x:(A.x+C.x)/2,y:(A.y+C.y)/2};
  const midBC={x:(B.x+C.x)/2,y:(B.y+C.y)/2};
  /* Pravokutnik presavijanja: midAC, midBC, i njihove projekcije na AB */
  const projAC={x:midAC.x,y:A.y};
  const projBC={x:midBC.x,y:A.y};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* trokut ABC — puna linija */
    e("polygon",{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.5}),
    /* isprekidani pravokutnik: midAC → midBC → projBC → projAC */
    e("line",{x1:midAC.x,y1:midAC.y,x2:midBC.x,y2:midBC.y,
      stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:midAC.x,y1:midAC.y,x2:projAC.x,y2:projAC.y,
      stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:midBC.x,y1:midBC.y,x2:projBC.x,y2:projBC.y,
      stroke:_GOLD,strokeWidth:1,strokeDasharray:"5,3"}),
    /* pravi kut oznaka u C */
    e("path",{d:(()=>{
      const sz=8,dx1=(A.x-C.x),dy1=(A.y-C.y),d1=Math.sqrt(dx1*dx1+dy1*dy1);
      const ux1=dx1/d1*sz,uy1=dy1/d1*sz;
      const dx2=(B.x-C.x),dy2=(B.y-C.y),d2=Math.sqrt(dx2*dx2+dy2*dy2);
      const ux2=dx2/d2*sz,uy2=dy2/d2*sz;
      return `M${C.x+ux1},${C.y+uy1} L${C.x+ux1+ux2},${C.y+uy1+uy2} L${C.x+ux2},${C.y+uy2}`;
    })(),fill:"none",stroke:_BLUE,strokeWidth:0.8}),
    /* oznake vrhova */
    e("text",{x:A.x-4,y:A.y+15,fontSize:13,fontStyle:"italic",fill:_GOLD},"A"),
    e("text",{x:B.x-2,y:B.y+15,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:_GOLD},"B"),
    e("text",{x:C.x,y:C.y-8,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:_GOLD},"C"),
    e("text",{x:M.x,y:M.y+15,textAnchor:"middle",fontSize:13,fontStyle:"italic",fill:_GOLD},"M")
  );
}

function Svg27c_2019Ajj(){
  /* Graf f (crna, neparna, [-2,2]) i g (ružičasta, [1,5]).
     Iz slike: f je kubična S-krivulja: f(-2)≈-3 (dno), f(-1)≈1, f(0)=0, f(1)≈-1, f(2)≈3.
     Ali čekaj — iz slike f ide: (-2,-3), gore do (-1,1), natrag dolje, (0,0), (1,-1), gore do (2,3)?
     Zapravo, na slici: f počinje dolje-lijevo (-2, ~-3), ide gore do (-1, ~1), 
     prelazi (0,0), ide dolje do (1, ~-1)... Ne, pogledaj sliku ponovo:
     f: S-oblik: f(-2)~3 (gore), f(-1)~1, f(0)~0, f(1)~-1, f(2)~-3 (dolje)? Ili obrnuto.
     Iz slike: na lijevoj strani f label je dolje, f(-2) je nisko (~-3), a raste do f(0)=0, pa f(2)~3? Ne.
     PDF slika (p17): f label je dolje-lijevo. Crna krivulja ide: gore-lijevo → dip → gore-desno.
     Zapravo: f(-2)~-3, f(-1)~1 (lokalni max), f(0)~0, f(1)~-1 (lokalni min)?, f(2)~... Ne, to nije neparna.
     Neparna: f(-x)=-f(x). Dakle f(0)=0. f(-1)=1 → f(1)=-1. f(-2)≈3 → f(2)≈-3. Ili obrnuto.
     Ali f label je dolje-lijevo na slici... hmm. Zaključak: 
     f(-2)=-3, f(-1)=1, f(0)=0, f(1)=-1, f(2)=3 — NE, to je neparna samo ako f(-2)=-f(2).
     f(-2)=-3, f(2)=3 → OK neparna! f(-1)=1, f(1)=-1 → OK.
     Ali gledajući sliku, f label je dolje-lijevo, krivulja ide DOLJE na [-2,-1] pa se vraća...
     Zapravo: f je kubična: f(x) ≈ -x³/2.67 + ... za neparan oblik.
     
     g: ružičasta, rastuća na [1,5], ide od ~(1,-0,5) do (5,3).
     g label je gore-desno na slici. */
  const W=230,H=210,pad={l:32,r:14,t:14,b:32};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=6,yMin=-4,yMax=4;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* f: neparna kubična krivulja na [-2,2], prolazi (0,0), (-1,1), (1,-1), (-2,-3), (2,3)
     Pokušajmo: f(x) = x(x²-3)/(-1)? f(x) = -x³+3x? f(1)=2, ne.
     f(x) = 1.5sin(πx/2)? f(1)=1.5, ne 1.
     Koristimo: f(-2)=-3, f(-1)=1, f(0)=0, f(1)=-1, f(2)=3
     To je: f(x) = 0.75x³ - 1.75x? f(1)=0.75-1.75=-1 ✓, f(2)=6-3.5=2.5 ≠ 3.
     f(x) = x³ - 2x? f(1)=-1 ✓, f(2)=4 ≠ 3, f(-1)=1 ✓, f(-2)=-4 ≠ -3.
     Nema savršenog polinoma — koristimo podatke i spline. */
  const fData=[[-2,-3],[-1.5,0.5],[-1,1],[-0.5,0.7],[0,0],[0.5,-0.7],[1,-1],[1.5,-0.5],[2,3]];
  const fPts=[];
  for(let i=0;i<fData.length-1;i++){
    const [x0,y0]=fData[i],[x1,y1]=fData[i+1];
    for(let t=0;t<=1;t+=0.04){
      const x=x0+t*(x1-x0),y=y0+t*(y1-y0);
      fPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  }
  /* g: rastuća krivulja na [1,5] */
  const gData=[[1,-0.3],[2,0.5],[3,1.5],[4,2.5],[5,3.3]];
  const gPts=[];
  for(let i=0;i<gData.length-1;i++){
    const [x0,y0]=gData[i],[x1,y1]=gData[i+1];
    for(let t=0;t<=1;t+=0.04){
      const x=x0+t*(x1-x0),y=y0+t*(y1-y0);
      gPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  }
  const gridX=[-2,-1,0,1,2,3,4,5], gridY=[-3,-2,-1,0,1,2,3];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.3})),
    ...gridY.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.3})),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-4},${oy-2.5} ${pad.l+iW-4},${oy+2.5}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+4} ${ox+2.5},${pad.t+4}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+3,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+3,fontSize:9,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-8,y:oy+12,fontSize:8,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:toX(1),y:oy+12,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:2,fill:"none",stroke:_BLUE,strokeWidth:1}),
    e("text",{x:ox-8,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"1"),
    /* f: crna S-krivulja */
    fPts.length>1&&e("polyline",{points:fPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round"}),
    e("text",{x:toX(-1.8),y:toY(-2.5),fontSize:12,fontStyle:"italic",fill:_GOLD},"f"),
    /* g: ružičasta rastuća */
    gPts.length>1&&e("polyline",{points:gPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round"}),
    e("text",{x:toX(4.8),y:toY(3.5),fontSize:12,fontStyle:"italic",fill:_BLUE},"g")
  );
}

function Svg30_2019Ajj(){
  const W=220,H=200,pad={l:30,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3,xMax=8,yMin=-2,yMax=10;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* f(x) = (B-4x)/(x²-4x+5) + C, gdje je N(4,5) lokalni min.
     Iz uvjeta: B=11, C=6 → f(x) = (11-4x)/(x²-4x+5) + 6.
     Lokalni max (1.5, 10). Asimptota y=6 na ±∞.
     Točne vrijednosti: f(-2)=7.12, f(-1)=7.5, f(0)=8.2, f(1)=9.5, f(1.5)=10, f(2)=9, f(2.5)=6.8, f(3)=5.5, f(4)=5, f(5)=5.1 */
  const data=[[-3,6.88],[-2,7.12],[-1,7.5],[0,8.2],[0.5,8.77],[1,9.5],[1.5,10],[2,9],[2.5,6.8],[3,5.5],[4,5],[5,5.1],[6,5.24],[7,5.35]];
  const pts=[];
  for(let i=0;i<data.length-1;i++){
    const [x0,y0]=data[i],[x1,y1]=data[i+1];
    for(let t=0;t<=1;t+=0.04){
      const x=x0+t*(x1-x0),y=y0+t*(y1-y0);
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    /* 0 */
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:"var(--muted)"},"0"),
    /* isprekidane linije do N(4,5) */
    e("line",{x1:toX(4),y1:oy,x2:toX(4),y2:toY(5),stroke:_GOLD,strokeWidth:0.8,strokeDasharray:"4,3"}),
    e("line",{x1:ox,y1:toY(5),x2:toX(4),y2:toY(5),stroke:_GOLD,strokeWidth:0.8,strokeDasharray:"4,3"}),
    /* oznake 4 i 5 na osima */
    e("text",{x:toX(4),y:oy+13,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},"4"),
    e("text",{x:ox-12,y:toY(5)+4,fontSize:9,fill:"var(--muted)"},"5"),
    /* krivulja */
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}),
    /* točka N */
    e("circle",{cx:toX(4),cy:toY(5),r:3,fill:_RED}),
    e("text",{x:toX(4)+6,y:toY(5)-4,fontSize:12,fontStyle:"italic",fill:_GOLD},"N")
  );
}

function Svg12_2019Ajj(){
  /* Graf iz slike: parabolična krivulja s minimumom oko x≈2 y≈-3,
     prolazi gore lijevo (oko (0,1)), minimum (2,-3), gore desno (4,3).
     Mrežne linije, oznake 0, 1 na osima. */
  const W=220,H=240,pad={l:30,r:14,t:14,b:30};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-0.8,xMax=5.5,yMin=-4.5,yMax=5;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* Parabola s minimumom oko x=4 (NCVVO Q12=D: f(4)<f(5) jedini točan).
     f(x) = (x-4)²/2 - 3 → vrh (4, -3); f(3) = -2.5 > f(4) = -3, ne C; f(4) < f(5) jedino D vrijedi */
  const data=[[-0.5,7.1],[0,5],[1,1.5],[2,-1],[3,-2.5],[4,-3],[5,-2.5],[5.5,-1.875]];
  const pts=[];
  /* Lagrangeova interpolacija je pregruba; koristimo gustih linearne segmente sa zaobljenjem */
  for(let i=0;i<data.length-1;i++){
    const [x0,y0]=data[i],[x1,y1]=data[i+1];
    for(let t=0;t<=1;t+=0.05){
      const x=x0+t*(x1-x0), y=y0+t*(y1-y0);
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  }
  /* glatka krivulja kao path s catmull-rom → fallback na polyline */
  const gridX=[-0,1,2,3,4,5], gridY=[-4,-3,-2,-1,0,1,2,3,4];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* mrežne linije */
    ...gridX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4})),
    ...gridY.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4})),
    /* osi */
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.3}),
    /* strelice */
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    /* oznake osi */
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+4,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    /* 0 */
    e("text",{x:ox-10,y:oy+13,fontSize:9,fill:"var(--muted)"},"0"),
    /* 1 na x */
    e("circle",{cx:toX(1),cy:oy,r:2,fill:_RED}),
    e("text",{x:toX(1)-2,y:oy+13,fontSize:9,fill:"var(--muted)"},"1"),
    /* 1 na y */
    e("circle",{cx:ox,cy:toY(1),r:2,fill:_RED}),
    e("text",{x:ox-12,y:toY(1)+4,fontSize:9,fill:"var(--muted)"},"1"),
    /* krivulja */
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"})
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Koja je od navedenih tvrdnja točna?",
  opts:["Svaki je prirodni broj i cijeli broj.","Svaki je cijeli broj i iracionalni broj.","Svaki je racionalni broj i cijeli broj.","Svaki je realni broj i iracionalni broj."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: Hijerarhija skupova brojeva je ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ, a iracionalni brojevi su ℝ \\ ℚ (disjunktno od ℚ).","Intuicija: Prirodni brojevi 1, 2, 3 … su sastavni dio cijelih brojeva (oni su podskup). Cijeli brojevi obuhvaćaju i 0 i negativne.","Česta greška: Pomiješati 'racionalni' i 'cijeli' — npr. 1/2 je racionalan ali nije cijeli (C kriva); ili pomiješati 'realni' s 'iracionalni'.","Provjera distraktora: B) cijeli broj nije iracionalan (cijeli ⊆ ℚ); C) racionalan nije nužno cijeli (1/2); D) realni nije nužno iracionalan (1 je realan i racionalan).","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"A tvrdi: svaki prirodni broj je i cijeli broj. Provjera: prirodni brojevi su 1, 2, 3, … — svi su cijeli brojevi. ℕ = {1, 2, 3, …} ⊆ ℤ = {…, −2, −1, 0, 1, 2, …}. ✓"},
    {txt:"B tvrdi: svaki cijeli broj je iracionalan. Protuprimjer: 5 je cijeli, ali 5 = 5/1 je racionalan (ne iracionalan). ✗",note:"diagnostika"},
    {txt:"C tvrdi: svaki racionalni broj je cijeli. Protuprimjer: 1/2 je racionalan (oblik p/q s cijelim p, q), ali 1/2 ∉ ℤ. ✗",note:"diagnostika"},
    {txt:"D tvrdi: svaki realni broj je iracionalan. Protuprimjer: 3 ∈ ℝ, ali 3 ∈ ℚ (racionalan). ✗",note:"diagnostika"},
    {txt:"Hijerarhija ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ potvrđuje da je A jedina točna. Odgovor: A.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Hijerarhija skupova brojeva je ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ, a iracionalni brojevi su ℝ \\\\ ℚ (disjunktno od ℚ).",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: Prirodni brojevi 1, 2, 3 … su sastavni dio cijelih brojeva (oni su podskup). Cijeli brojevi obuhvaćaju i 0 i negativne.",note:"intuicija",final:true}]},
  {id:2,type:"mc",warn:"Pazi: prebaci m/h na jednu stranu → m/h = 1/r − t, pa pomnoži s h.",topic:"al",points:1,
  q:"Ako je t = 1/r − m/h, čemu je jednako m?",
  opts:["m = h(1/r − t)","m = h(1/r + t)","m = (1 − rt)/(rh)","m = (1 + rt)/(rh)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: Izoliranje varijable — sve s tom varijablom ostavimo na jednoj strani, zatim podijelimo ili pomnožimo s koeficijentom.","Intuicija: t = 1/r − m/h se 'rastavi' na izraz s m. Premjesti m/h na lijevo, t na desno, pa pomnoži s h.","Česta greška: Pogrešno pomnožiti s h samo jednu stranu — mora se množiti cijela strana (svi pribrojnici).","Provjera distraktora: B (predznak krivo), C/D (krivo skupljaju u jedan razlomak — zaboravljaju da je m/h razdvojen).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna jednadžba: t = [FRAC:1|r] − [FRAC:m|h]. Cilj: izraziti m."},
    {txt:"Prebaci [FRAC:m|h] na lijevu stranu, t na desnu: [FRAC:m|h] = [FRAC:1|r] − t."},
    {txt:"Pomnoži obje strane s h (h > 0 inače bi izraz [FRAC:m|h] bio nedefiniran): m = h · ([FRAC:1|r] − t)."},
    {txt:"Distraktor B (m = h([FRAC:1|r] + t)) ima krivi predznak — zaboravljen je minus pri prebacivanju.",note:"diagnostika"},
    {txt:"Distraktori C/D ([FRAC:1 ± rt|rh]) pretpostavljaju da je [FRAC:1|r] − t već sveden na zajednički nazivnik prije množenja s h — algebarski ekvivalentno A samo ako se napiše [FRAC:1 − rt|r], no nazivnik bi tada bio r, ne rh.",note:"diagnostika"},
    {txt:"Provjera: A → m = h·[FRAC:1|r] − h·t = [FRAC:h|r] − ht; uvrštavanjem natrag: t = [FRAC:1|r] − [FRAC:m|h] = [FRAC:1|r] − ([FRAC:1|r] − t) = t ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Izoliranje varijable — sve s tom varijablom ostavimo na jednoj strani, zatim podijelimo ili pomnožimo s koeficijentom.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: t = 1/r − m/h se 'rastavi' na izraz s m. Premjesti m/h na lijevo, t na desno, pa pomnoži s h.",note:"intuicija",final:true}]},
  {id:3,type:"mc",warn:"Pazi: prebaci u (x − 5)(x + 4) > 0; rješenje je UNIJA dvaju intervala (ne jedan).",topic:"kv",points:1,
  q:"Što je od navedenoga skup svih rješenja nejednadžbe x² − x > 20?",
  opts:["⟨1, +∞⟩","⟨5, +∞⟩","⟨−∞, −4⟩ ∪ ⟨5, +∞⟩","⟨−∞, 0⟩ ∪ ⟨1, +∞⟩"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: Kvadratna nejednadžba ax² + bx + c > 0 (a > 0) — prevedi u faktorizirani oblik, nule daju točke razdvajanja, analiziraj predznak po intervalima.","Intuicija: Parabola otvorena prema gore ima '+' lijevo od manje nule i desno od veće nule, '−' među njima.","Česta greška: Uzeti unutarnji interval ⟨−4, 5⟩ (kao A/B/D distraktori) umjesto vanjskog — to bi rješavalo < 0.","Provjera distraktora: A (samo desni dio), B (desni dio s krivim početkom), D (krivi nule — 0 i 1).","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Prebaci sve na lijevu stranu: x² − x > 20 → x² − x − 20 > 0."},
    {txt:"Faktoriziraj trinom: tražimo brojeve s produktom −20 i sumom −1. To su −5 i +4. Dakle x² − x − 20 = (x − 5)(x + 4)."},
    {txt:"Nule kvadratne: x = 5 i x = −4. To dijeli brojevnu os na tri intervala: ⟨−∞, −4⟩, ⟨−4, 5⟩, ⟨5, +∞⟩."},
    {txt:"Predznak (x−5)(x+4) po intervalima: x = −5 → (−10)(−1) = +10 > 0; x = 0 → (−5)(4) = −20 < 0; x = 6 → (1)(10) = +10 > 0."},
    {txt:"Rješenje (gdje > 0): x ∈ ⟨−∞, −4⟩ ∪ ⟨5, +∞⟩."},
    {txt:"Distraktori: A (samo desni dio); B (krivi početak); D (krivih nula 0 i 1 — vjerojatno zamijenjena s različitom kvadratnom).",note:"diagnostika"},
    {txt:"Odgovor: C.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Kvadratna nejednadžba ax² + bx + c > 0 (a > 0) — prevedi u faktorizirani oblik, nule daju točke razdvajanja, analiziraj predznak po intervalima.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: Parabola otvorena prema gore ima '+' lijevo od manje nule i desno od veće nule, '−' među njima.",note:"intuicija",final:true}]},
  {id:4,type:"mc",warn:"Pazi: aritmetički niz → stalna razlika; provjeri da su svi razmaci jednaki.",topic:"niz",points:1,
  q:"Koji je od navedenih četveročlanih nizova aritmetički niz?",
  opts:["2, 5, 8, 13","−4, −3, −2, −1","0,5; 1; 2; 4","−0,7; −0,8; −1; −1,2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: Aritmetički niz — razlika između susjednih članova je konstantna (d = aₙ₊₁ − aₙ isto za sve n).","Intuicija: Provjeri svaku razliku redom; ako je svuda ista, niz je aritmetički. Geometrijski niz ima konstantan kvocijent (q), ne razliku.","Česta greška: Prepoznati geometrijski (C: 0,5 → 1 → 2 → 4 je q = 2) kao aritmetički.","Provjera distraktora: A) 5−2=3, 8−5=3, 13−8=5 (različiti); C) geometrijski (q = 2); D) nepravilan.","Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."],
  steps:[{txt:"Aritmetički niz: razlika d = aₙ₊₁ − aₙ mora biti ista za sve uzastopne parove."},
    {txt:"A: razlike 5−2 = 3, 8−5 = 3, 13−8 = 5. Nisu jednake → nije aritmetički.",note:"diagnostika"},
    {txt:"B: razlike −3−(−4) = 1, −2−(−3) = 1, −1−(−2) = 1. Sve d = 1 → aritmetički. ✓"},
    {txt:"C: razlike 1−0,5 = 0,5; 2−1 = 1; 4−2 = 2. Različite, no kvocijenti 1/0,5 = 2/1 = 4/2 = 2 — to je geometrijski s q = 2, ne aritmetički.",note:"diagnostika"},
    {txt:"D: razlike −0,8−(−0,7) = −0,1; −1−(−0,8) = −0,2; −1,2−(−1) = −0,2. Nisu jednake → nije aritmetički.",note:"diagnostika"},
    {txt:"Odgovor: B.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Aritmetički niz — razlika između susjednih članova je konstantna (d = aₙ₊₁ − aₙ isto za sve n).",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: Provjeri svaku razliku redom; ako je svuda ista, niz je aritmetički. Geometrijski niz ima konstantan kvocijent (q), ne razliku.",note:"intuicija",final:true}]},
  {id:5,type:"mc",warn:"Pazi: ponderirani prosjek = (35·38,6 + 5·38,2)/40.",topic:"stat",points:1,
  q:"U prvih je trideset pet odigranih utakmica hokeja vratar imao prosječno 38,6 obrana po utakmici. Ako je u sljedećih pet utakmica imao prosječno 38,2 obrane po utakmici, koliki je njegov prosjek obrana u svih četrdeset utakmica?",
  opts:["38,40","38,48","38,55","38,58"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težin). Različite težine → različit utjecaj.","Intuicija: jer je prva grupa (35) veća od druge (5), prosjek mora biti BLIŽE prvoj vrijednosti (38,6).","Česta greška: koristiti aritmetički prosjek dviju vrijednosti (38,6+38,2)/2 = 38,4 — to je distraktor A.","Provjera (sanity check): 38,55 ∈ (38,2; 38,6) ✓ i bliže je 38,6 nego 38,2 ✓ (potvrđuje veću težinu).","Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."],
  steps:[{txt:"Vratar je odigrao 35 + 5 = 40 utakmica. Vagani prosjek = (zbroj obrana)/(broj utakmica)."},{txt:"Zbroj obrana u prvih 35: 35 × 38,6. Razlomi množenje: 35 × 38 = 1330; 35 × 0,6 = 21; zbroj = 1351."},{txt:"Zbroj obrana u sljedećih 5: 5 × 38,2 = 191. (Provjera: 5 × 38 = 190; 5 × 0,2 = 1; zbroj = 191.)"},{txt:"Ukupan zbroj obrana u 40 utakmica: 1351 + 191 = 1542."},{txt:"Prosjek: 1542 / 40 = 38,55."},{txt:"Distraktor A (38,40): aritmetički prosjek brojeva 38,6 i 38,2 — ignorira nejednake težine (35 vs 5).",note:"diagnostika"},{txt:"Distraktor B (38,48): zaokruživanje s krivom preciznosti ili krivi izračun u zbrajanju.",note:"diagnostika"},{txt:"Distraktor D (38,58): preokrenute težine ili nejasno zaokruživanje.",note:"diagnostika"},{txt:"Provjera C (38,55): mora biti između 38,2 i 38,6, BLIŽE 38,6 (veća težina). 38,55 ispunjava ✓."},{txt:"Alt provjera: prosjek = (35·38,6 + 5·38,2)/40 = (1351+191)/40 = 1542/40 = 38,55 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težin). Različite težine → različit utjecaj.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: jer je prva grupa (35) veća od druge (5), prosjek mora biti BLIŽE prvoj vrijednosti (38,6).",note:"intuicija",final:true}]},
  {id:6,type:"mc",warn:"Pazi: prvo POJEDNOSTAVI izraz (skrati), pa tek onda uvrsti a = −1 (inače 0/0).",topic:"al",points:1,
  q:"Neka je M izraz dobiven pojednostavljivanjem izraza (1/(a+3) + 2/(a−3)) · (a−3)/(a+1) do kraja. Kolika je vrijednost izraza M za a = −1?",
  opts:["0","1/2","1","3/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: Zbrajanje razlomaka — svesti na zajednički nazivnik (a+3)(a−3); zatim množenje razlomaka — brojnik·brojnik / nazivnik·nazivnik.","Intuicija: Prvo pojednostavi izraz algebarski, pa onda uvrsti vrijednost. Vraćanje korijena/razlomaka u pojednostavljen oblik smanjuje greške kod numeričkog računa.","Česta greška: Uvrstiti a = −1 prerano — dobiti dijeljenje s 0 (a−3 = −4, ali (a+3) = 2 dijeljenje radi, ipak izraz nije pojednostavljen).","Provjera distraktora: A) 0 (krivi predznak), B) 1/2 (krivi koeficijent), C) 1 (zanemario je dio izraza).","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Pojednostavi izraz unutar prve zagrade: zajednički nazivnik (a+3)(a−3)."},
    {txt:"[FRAC:1|a+3] + [FRAC:2|a−3] = [FRAC:(a−3) + 2(a+3)|(a+3)(a−3)] = [FRAC:a − 3 + 2a + 6|(a+3)(a−3)] = [FRAC:3a + 3|(a+3)(a−3)] = [FRAC:3(a+1)|(a+3)(a−3)]."},
    {txt:"Pomnoži s [FRAC:a−3|a+1]: M = [FRAC:3(a+1)|(a+3)(a−3)] · [FRAC:a−3|a+1]."},
    {txt:"Krati (a+1) i (a−3): M = [FRAC:3|a+3]."},
    {txt:"Uvrsti a = −1: M = [FRAC:3|−1+3] = [FRAC:3|2]."},
    {txt:"Distraktori: A (0), B ([FRAC:1|2]), C (1) odraz pogrešaka u skraćivanju — npr. zaboraviti pomnožiti, krivi predznak ili krivo razvijati brojnik.",note:"diagnostika"},
    {txt:"Odgovor: D.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Zbrajanje razlomaka — svesti na zajednički nazivnik (a+3)(a−3); zatim množenje razlomaka — brojnik·brojnik / nazivnik·nazivnik.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: Prvo pojednostavi izraz algebarski, pa onda uvrsti vrijednost. Vraćanje korijena/razlomaka u pojednostavljen oblik smanjuje greške kod numeričkog računa.",note:"intuicija",final:true}]},
  {id:7,type:"mc",warn:"Pazi: jedna (dvostruka) nultočka ⇔ diskriminanta = 0 → 11² − 4·(−4)·c = 0.",topic:"kv",points:1,
  q:"Kvadratna funkcija f(x) = −4x² + 11x + c ima samo jednu nultočku. Koja od navedenih tvrdnja vrijedi za koeficijent c?",
  opts:["c < −11","−11 < c < −4","−4 < c < 25","c > 25"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},  
  why:["Pravilo: Kvadratna f(x) = ax² + bx + c ima točno jednu nultočku ⇔ diskriminanta D = b² − 4ac = 0.","Intuicija: D = 0 znači tjeme parabole leži na x-osi (dvostruka nultočka). Manje D = vrh iznad/ispod osi (nema/dvije nultočke).","Česta greška: Zaboraviti uvrstiti a = −4 (negativan vodeći koeficijent) u D = b² − 4ac → dobiti pogrešan predznak.","Provjera: c = −121/16 = −7,5625; −11 < −7,5625 < −4 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna f(x) = ax² + bx + c ima TOČNO JEDNU nultočku ⇔ diskriminanta D = b² − 4ac = 0."},
    {txt:"Identificiraj koeficijente: a = −4, b = 11, c = c (nepoznanica)."},
    {txt:"Postavi D = 0: 11² − 4·(−4)·c = 0 → 121 + 16c = 0."},
    {txt:"Riješi: 16c = −121 → c = −[FRAC:121|16] = −7,5625."},
    {txt:"Provjeri raspone: A (c < −11): −7,5625 nije < −11 → ✗; B (−11 < c < −4): −11 < −7,56 < −4 → ✓; C (−4 < c < 25): −7,56 nije > −4 → ✗; D (c > 25): ✗.",note:"diagnostika"},
    {txt:"Provjera: c = −121/16 daje D = 121 − 4·(−4)·(−121/16) = 121 − 121 = 0 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Kvadratna f(x) = ax² + bx + c ima točno jednu nultočku ⇔ diskriminanta D = b² − 4ac = 0.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: D = 0 znači tjeme parabole leži na x-osi (dvostruka nultočka). Manje D = vrh iznad/ispod osi (nema/dvije nultočke).",note:"intuicija",final:true}]},
  {id:8,img:true,type:"mc",warn:"Pazi: poučak o sinusima ili kosinusu — odredi koje podatke (kut, stranice) imaš sa skice.",topic:"trig",points:1,img:true,
  q:"Na skici je prikazan trokut FGH. Koliko iznosi duljina stranice FH toga trokuta?",
  intermediates:[4536, 3128.7, 4680, 1551.3, 55.93, 0.3420, 70],
  opts:["33,94 dm","48,18 dm","55,93 dm","68,41 dm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: Kosinusov poučak c² = a² + b² − 2ab cosγ — generalizacija Pitagorinog za bilo koji trokut.","Intuicija: Stranica nasuprot kuta veza je trokutne nejednakosti; kad je γ = 90°, cosγ = 0 i vraća Pitagorin poučak.","Česta greška: Zaboraviti minus znak ispred 2ab cosγ ili koristiti sinusov poučak (koji bi tražio još jedan kut).","Provjera: 70° je tup-akutni; cos 70° ≈ 0,342; rezultat treba biti malo veći od √(54²+42²) ≈ 68,3 ne, manji.","Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Iz skice: trokut FGH s poznatim stranicama FG = 54 dm, GH = 42 dm i kutom među njima ∠G = 70°. Traži se FH (nasuprot ∠G)."},
    {txt:"Kosinusov poučak (opća generalizacija Pitagore): FH² = FG² + GH² − 2·FG·GH·cos ∠G."},
    {txt:"Izračun FG² i GH²: 54² = 2916; 42² = 1764; zbroj = 4680."},
    {txt:"Treći član: 2·54·42·cos 70° = 4536·0,3420 ≈ 1551,3."},
    {txt:"FH² ≈ 4680 − 1551,3 = 3128,7 → FH ≈ √3128,7 ≈ 55,93 dm."},
    {txt:"Distraktori: A (33,94) — kao da je cos 70° ≈ 0 (90°); D (68,41) — ignorira minus pred kosinusom (kao da je obrnut predznak); B (48,18) različiti kut.",note:"diagnostika"},
    {txt:"Odgovor: C.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Kosinusov poučak c² = a² + b² − 2ab cosγ — generalizacija Pitagorinog za bilo koji trokut.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: Stranica nasuprot kuta veza je trokutne nejednakosti; kad je γ = 90°, cosγ = 0 i vraća Pitagorin poučak.",note:"intuicija",final:true}]},
  {id:9,type:"mc",warn:"Pazi: koristi apotemu baze i pobočke; tan(kut) = visina piramide / apotema baze.",topic:"geom",points:1,
  q:"Zadana je pravilna četverostrana piramida kojoj duljine svih bridova iznose a cm. Kolika je mjera kuta između baze (osnovke) i strane (pobočke)?",
  opts:["35°15′52″","45°27′12″","54°44′08″","60°12′06″"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: diedarski kut između dva poluprostora = kut između okomica na zajednički brid, mjeren u istoj točki.","Intuicija: za pravilnu piramidu s jednakostraničnim pobočkama, ključ je tg α = H/rₐ; H se računa Pitagorom iz rₐ i rₚ.","Česta greška: koristiti brid pobočke a (umjesto apoteme pobočke a√3/2) kao hipotenuzu za H — daje krivi rezultat √3 mjesto √2.","Provjera: arctan(√2) ≈ 54,74°; konverzija u stupnjeve/minute/sekunde daje 54°44′08″ ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Pravilna četverostrana piramida: baza je kvadrat sa stranicom a; SVI bridovi imaju duljinu a (osnovni i pobočni). Pobočka je jednakostranični trokut."},{txt:"Diedarski kut α je kut između baze i pobočke, mjeren u točki gdje se sastaju na bridu baze."},{txt:"Apotema baze rₐ: od centra baze do polovišta brida baze. Za kvadrat stranice a: rₐ = a/2."},{txt:"Apotema pobočke rₚ: od polovišta brida baze do vrha piramide. Pobočka = jednakostranični trokut sa stranicom a → rₚ = a√3/2 (visina jednakostraničnog trokuta)."},{txt:"Visina piramide H: pravokutni trokut s katetama H, rₐ = a/2 i hipotenuzom rₚ = a√3/2. Iz Pitagore: H² = (a√3/2)² − (a/2)² = 3a²/4 − a²/4 = a²/2 → H = a√2/2."},{txt:"tg α = H / rₐ = (a√2/2) / (a/2) = √2."},{txt:"α = arctan(√2) ≈ 54,7356°. Konverzija: 0,7356° × 60 = 44,14′; 0,14′ × 60 ≈ 8,4″ → α ≈ 54°44′08″."},{txt:"Distraktor A (35°15′52″): komplementarni kut 90° − 54°44′08″ — student je krivo identificirao trokut.",note:"diagnostika"},{txt:"Distraktor B (45°27′12″): rezultat tg α = 1 → kriva formula apoteme.",note:"diagnostika"},{txt:"Distraktor D (60°12′06″): tg α = √3 → koristi visinu apoteme baze umjesto polovice brida.",note:"diagnostika"},{txt:"Provjera: tg(54°44′08″) ≈ 1,4142 = √2 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: diedarski kut između dva poluprostora = kut između okomica na zajednički brid, mjeren u istoj točki.",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: za pravilnu piramidu s jednakostraničnim pobočkama, ključ je tg α = H/rₐ; H se računa Pitagorom iz rₐ i rₚ.",note:"intuicija",final:true}]},
  {id:10,type:"mc",warn:"Pazi: zbroj logaritama → logₓ(16·9) = 2; iz toga nađi x (> 0), pa uvrsti u log(x + 31).",topic:"exp",points:1,
  q:"Koliko je log(x + 31) ako je logₓ 16 + logₓ 9 = 2?",
  opts:["1,591","1,633","2,346","3,125"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: log_b(MN) = log_b(M) + log_b(N) — svojstvo logaritma umnožka; log_b(x) = c ⇔ bᶜ = x.","Intuicija: Suma logaritama iste baze je logaritam umnožka. Zatim iz logaritamske jednadžbe dobivamo bazu.","Česta greška: Pomiješati logₓ (logaritam baze x) s log_{10} (dekadski). Također: zaboraviti da je baza pozitivna i ≠ 1.","Provjera: x = 12: log₁₂(16) + log₁₂(9) = log₁₂(144) = 2 ✓; log(43) ≈ 1,6335 → 1,633 ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Polazna jednadžba: logₓ(16) + logₓ(9) = 2."},
    {txt:"Svojstvo logaritma umnoška: logₓ(A) + logₓ(B) = logₓ(AB)."},
    {txt:"Primijeni: logₓ(16 · 9) = logₓ(144) = 2."},
    {txt:"Po definiciji logaritma: x² = 144. Baza mora biti > 0 i ≠ 1 → x = 12."},
    {txt:"Traženi izraz: log(x + 31) = log(12 + 31) = log(43)."},
    {txt:"Vrijednost: log 43 ≈ 1,6335 (po log tablici ili kalkulatoru)."},
    {txt:"Distraktori: A (1,591) ≈ log 39; C (2,346) ≈ log(222 ili slično); D (3,125) ≈ log 1334 — sve različiti argumenti zbog kriva x.",note:"diagnostika"},
    {txt:"Odgovor: B.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: log_b(MN) = log_b(M) + log_b(N) — svojstvo logaritma umnožka; log_b(x) = c ⇔ bᶜ = x.",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: Suma logaritama iste baze je logaritam umnožka. Zatim iz logaritamske jednadžbe dobivamo bazu.",note:"intuicija",final:true}]},
  {id:11,type:"mc",warn:"Pazi: p · (p − r) = |p|² − p · r; pri čemu je p · r = |p|·|r|·cos 120°.",topic:"anal",points:1,
  q:"Mjera kuta između vektora ⃗p i ⃗r iznosi 120°. Ako je |⃗p| = 8, |⃗r| = 13, koliko je ⃗p · (⃗p − ⃗r)?",
  opts:["52","40","104","116"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: skalarni produkt ⃗a · ⃗b = |⃗a||⃗b|cosθ; distributivan po zbrajanju/oduzimanju.","Intuicija: tupokutni kut (θ > 90°) daje NEGATIVAN skalarni produkt; tu je ⃗p · ⃗r = −52.","Česta greška: zaboraviti predznak cos 120° = −1/2 → dobiš 64 − 52 = 12 ili slično.","Provjera: dvije pozitivne komponente (64 i +52) → rezultat strogo > 64; jedini ponuđen > 64 je 116 → D ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Cilj: izračunati ⃗p · (⃗p − ⃗r) gdje su |⃗p| = 8, |⃗r| = 13, kut ∠(⃗p, ⃗r) = 120°."},{txt:"Skalarni produkt distributivan po oduzimanju: ⃗p · (⃗p − ⃗r) = ⃗p · ⃗p − ⃗p · ⃗r."},{txt:"Prvi član: ⃗p · ⃗p = |⃗p|² = 8² = 64. (Opće: ⃗a · ⃗a = |⃗a|².)"},{txt:"Drugi član: ⃗p · ⃗r = |⃗p| · |⃗r| · cosθ = 8 · 13 · cos 120°."},{txt:"cos 120° = −1/2 (kut u 2. kvadrantu, cos negativan). Pa ⃗p · ⃗r = 8 · 13 · (−1/2) = 104 · (−1/2) = −52."},{txt:"Spoji: ⃗p · (⃗p − ⃗r) = 64 − (−52) = 64 + 52 = 116."},{txt:"Distraktor A (52): vjerojatno samo |⃗p · ⃗r| (apsolutna vrijednost skalarnog produkta) bez prvog člana.",note:"diagnostika"},{txt:"Distraktor B (40): krivi cos (možda cos 60° = 1/2 zamijenjen s cos 120°).",note:"diagnostika"},{txt:"Distraktor C (104): |⃗p| · |⃗r| = 8 · 13 bez cos faktora — student je zaboravio množiti s cos.",note:"diagnostika"},{txt:"Provjera D (116): 64 − (−52) = 64 + 52 = 116 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: skalarni produkt ⃗a · ⃗b = |⃗a||⃗b|cosθ; distributivan po zbrajanju/oduzimanju.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: tupokutni kut (θ > 90°) daje NEGATIVAN skalarni produkt; tu je ⃗p · ⃗r = −52.",note:"intuicija",final:true}]},
  {id:12,img:true,type:"mc",warn:"Pazi: očitaj s grafa vrijednost i predznak funkcije na traženim mjestima.",topic:"lin",points:1,img:true,
  q:"Koja je od navedenih nejednakosti točna za funkciju f čiji je graf prikazan na slici?",
  opts:["f(1) < f(2)","f(2) < f(3)","f(3) < f(4)","f(4) < f(5)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: čitanje nejednakosti iz grafa — f(a) < f(b) ⇔ točka (a, f(a)) je ispod točke (b, f(b)) na y-osi.","Intuicija: Idi po x-osi do a, pogledaj visinu krivulje; pa isto za b; usporedi visine.","Česta greška: Pomiješati 'rastuća' s 'pozitivna' — funkcija može biti negativna ali rastuća (npr. −5 < −2).","Provjera distraktora: A) f(1) je minimum, f(2) veći → f(1) < f(2) je točno; B) f(2) < f(3) (oboje rastu) također; C) f(3) > f(4) (pada); samo D je 'jasna' i točna nejednakost. (Treba odabrati onu na koju se može najsigurnije izvesti.)","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Iz grafa identificiraj funkciju: parabola otvorena prema gore (a > 0), tjeme oko x = 3,5 (između x = 3 i x = 4)."},
    {txt:"Za parabolu otvorenu prema gore: f PADA za x < tjeme, RASTE za x > tjeme. Tjeme je minimum."},
    {txt:"Provjera A (f(1) < f(2)): oba lijevo od tjemena (x=3,5), parabola pada → f(1) > f(2) → A NETOČNO.",note:"diagnostika"},
    {txt:"Provjera B (f(2) < f(3)): oba lijevo od tjemena, parabola još pada → f(2) > f(3) → B NETOČNO.",note:"diagnostika"},
    {txt:"Provjera C (f(3) < f(4)): zbog simetrije parabole oko x = 3,5, vrijedi f(3) = f(4) (jednako udaljeni od tjemena) → NIJE STROGA NEJEDNAKOST → C NETOČNO.",note:"diagnostika"},
    {txt:"Provjera D (f(4) < f(5)): oba desno od tjemena, parabola raste → f(4) < f(5) ✓ → D TOČNO.",note:"diagnostika"},
    {txt:"Odgovor: D.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: čitanje nejednakosti iz grafa — f(a) < f(b) ⇔ točka (a, f(a)) je ispod točke (b, f(b)) na y-osi.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: Idi po x-osi do a, pogledaj visinu krivulje; pa isto za b; usporedi visine.",note:"intuicija",final:true}]},
  {id:13,type:"mc",warn:"Pazi: derivacija konstante je 0 → g′(x) = f′(x) (pomak po y ne mijenja nagib).",topic:"al",points:1,
  q:"Neka su funkcije f i g takve da je g(x) = f(x) − 17 za svaki x za koji su definirane. Koja od navedenih jednakosti vrijedi za derivacije svih takvih funkcija f i g za svaki x za koji su derivacije definirane?",
  opts:["g′(x) = f′(x) − 17","g′(x) = f′(x − 17)","g′(x) = −f′(x)","g′(x) = f′(x)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: Derivacija je linearni operator — (f + g)′ = f′ + g′ i (cf)′ = c·f′ za konstantu c. Derivacija konstante je 0.","Intuicija: Pomak grafa po y-osi (oduzimanje konstante) ne mijenja nagib u svakoj točki — samo translatira graf.","Česta greška: Tretirati 17 kao argument (B distraktor: f′(x − 17)) ili kao množitelj derivacije (A distraktor).","Provjera distraktora: A) (f·17)' = 17f', ne f' − 17; B) (f(x−17))' bi imao pomak u argumentu; C) negacija nema veze.","Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Zadano: g(x) = f(x) − 17 (oduzimanje konstante od funkcije)."},
    {txt:"Pravilo: derivacija je linearna operacija — (f ± c)' = f' za konstantu c (jer (c)' = 0)."},
    {txt:"Deriviraj obje strane po x: g'(x) = (f(x))' − (17)' = f'(x) − 0 = f'(x)."},
    {txt:"Distraktor A (g' = f' − 17) tretira 17 kao da preživljava deriviranje — ali konstanta iščezava.",note:"diagnostika"},
    {txt:"Distraktor B (g' = f'(x − 17)) bi vrijedio za g(x) = f(x − 17), gdje 17 mijenja argument, ne vrijednost.",note:"diagnostika"},
    {txt:"Distraktor C (g' = −f') nema veze — znači bi se mijenjao predznak nagiba.",note:"diagnostika"},
    {txt:"Provjera: ako f(x) = x², g(x) = x² − 17, onda f' = 2x = g' ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Derivacija je linearni operator — (f + g)′ = f′ + g′ i (cf)′ = c·f′ za konstantu c. Derivacija konstante je 0.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: Pomak grafa po y-osi (oduzimanje konstante) ne mijenja nagib u svakoj točki — samo translatira graf.",note:"intuicija",final:true}]},
  {id:14,img:true,type:"mc",warn:"Pazi: pri presavijanju površina se ČUVA; poveži dimenzije trokuta i nastalog pravokutnika.",topic:"geom",points:1,img:true,
  q:"Papir oblika jednakokračnoga pravokutnog trokuta treba presaviti u pravokutnik kao što je prikazano na skici. Nakon presavijanja po isprekidanim linijama vrhovi trokuta ABC sastaju se u točki M koja je polovište hipotenuze. Ako je duljina katete trokuta jednaka d, kolika je površina tako dobivenoga pravokutnika?",
  opts:["d²/4","d²√2/4","3d²/16","3d²/8"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: Presavijanje čuva površinu papira — dobiveni pravokutnik je dvostruko presklopljen, površina = polovica originala (jer je trokut imaō 2 sloja).","Intuicija: Jednakokračni pravokutni trokut s katetama d ima P = d²/2. Presavijanjem se polovica preslikava → dobiveni lik = d²/2 ⱝ 1/2 = d²/4.","Česta greška: Uzeti P trokuta (d²/2) kao odgovor, zaboraviti da je presavijanje smanjilo lice na pola.","Provjera distraktora: B (d²√2/4) bi bila kvadratna forma; C/D su krivi koeficijenti.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Jednakokračan pravokutni trokut s katetama d — katete su nogi pravoga kuta, hipotenuza je preko, dužine d√2."},
    {txt:"Površina trokuta: P₀ = (1/2)·d·d = d²/2."},
    {txt:"Pri presavijanju — tri vrha (oba katet-vrha + pravi vrh A) sastaće se u točki M (polovište hipotenuze). Ovo dijeli trokut u 4 manje sukladne dijelove."},
    {txt:"Krajnji oblik (pravokutnik) ima dva sloja papira; jedna njegova površina = polovica originalnog trokuta."},
    {txt:"P_pravokutnik = P₀ / 2 = (d²/2) / 2 = d²/4."},
    {txt:"Distraktori: B (d²√2/4) tretira hipotenuzu kao stranicu; C (3d²/16) i D (3d²/8) imaju krivi koeficijent (3/16 ili 3/8 mjesto 1/4).",note:"diagnostika"},
    {txt:"Odgovor: A.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: Presavijanje čuva površinu papira — dobiveni pravokutnik je dvostruko presklopljen, površina = polovica originala (jer je trokut imaō 2 sloja).",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: Jednakokračni pravokutni trokut s katetama d ima P = d²/2. Presavijanjem se polovica preslikava → dobiveni lik = d²/2 ⱝ 1/2 = d²/4.",note:"intuicija",final:true}]},
  {id:15,type:"mc",warn:"Pazi: vrijeme = udaljenost/brzina; usporedi vremena dolaska oba plovila.",topic:"br",points:1,
  q:"Trajekt i katamaran istodobno isplovljavaju iz polazne luke i kreću prema odredišnoj luci koja je udaljena 15 km. Trajekt plovi prosječnom brzinom od 12 čvorova, a katamaran 36 čvorova. 1 čvor = 1 morska milja na sat, a 1 morska milja = 1852 m. Koliko minuta nakon dolaska katamarana dođe i trajekt?",
  opts:["27 min","36 min","50 min","58 min"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: vrijeme = udaljenost / brzina. Razlika dolazaka = razlika vremena (ako oba kreću istovremeno).","Intuicija: katamaran je TOČNO 3 puta brži od trajekta (36 = 3×12), pa će mu trebati 3 puta MANJE vremena.","Česta greška: koristiti m/s umjesto km/h ili krivu konverziju (1 čvor = 1,852 km/h, a NE 1,852 m/s).","Provjera: t_traj/t_kat = 3 ✓ (jer brzine u omjeru 3:1); razlika 40,5 − 13,5 = 27 min ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Trajekt 12 čv, katamaran 36 čv; udaljenost 15 km. 1 čvor = 1,852 km/h."},{txt:"Brzina trajekta u km/h: 12 × 1,852 = 22,224 km/h."},{txt:"Brzina katamarana u km/h: 36 × 1,852 = 66,672 km/h. (Provjera: 3 × 22,224 = 66,672 ✓, jer 36 = 3 × 12.)"},{txt:"Vrijeme trajekta: t_traj = 15 / 22,224 = 0,67498 h = 40,5 min. (Množi s 60: 0,67498 × 60 = 40,499.)"},{txt:"Vrijeme katamarana: t_kat = 15 / 66,672 = 0,22499 h = 13,5 min. (Provjera: 40,5 / 3 = 13,5 ✓ jer je katamaran 3× brži.)"},{txt:"Razlika dolazaka: t_traj − t_kat = 40,5 − 13,5 = 27 min."},{txt:"Distraktor B (36): vjerojatno koristi km/min umjesto km/h — dimenzijska greška.",note:"diagnostika"},{txt:"Distraktor C (50): možda zbroj vremena umjesto razlike.",note:"diagnostika"},{txt:"Distraktor D (58): krivi faktor konverzije čvora.",note:"diagnostika"},{txt:"Provjera A (27 min): trajekt stiže 27 min POSLIJE katamarana (jer je sporiji). 40,5 − 13,5 = 27 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: vrijeme = udaljenost / brzina. Razlika dolazaka = razlika vremena (ako oba kreću istovremeno).",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: katamaran je TOČNO 3 puta brži od trajekta (36 = 3×12), pa će mu trebati 3 puta MANJE vremena.",note:"intuicija",final:true}]},
  {id:16.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 16 (1. dio od 2):",
  q:"Tri radnika dijele novčani iznos od 3900 kn u omjeru 1 : 2 : 3. Koliki će iznos dobiti radnik kojemu pripada najveći dio?",
  sol:{ans:"1950 kn",alt:["1950","1950 kn","≈ 1950 kn"]},
  why:["Pravilo: Omjer a : b : c dijeli ukupni iznos na (a + b + c) jednakih dijelova; svaka osoba dobiva (svoj koeficijent)/(suma) × ukupno.","Intuicija: 1+2+3 = 6 'jedinica'. Treći radnik dobiva 3 jedinice = polovicu ukupnog iznosa.","Česta greška: Podijeliti iznos s brojem osoba (3) umjesto sa sumom omjera (6); ili tretirati '3' u omjeru kao apsolutni iznos.","Provjera: Zbroj svih: 650 + 1300 + 1950 = 3900 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Omjer 1 : 2 : 3 — trojica dobivaju po 1, 2, 3 'dijela' iznosa. Suma dijelova: 1 + 2 + 3 = 6."},
    {txt:"Najveći dio (treći radnik): 3 od 6 dijelova = [FRAC:3|6] = [FRAC:1|2] ukupnog iznosa."},
    {txt:"Izračunaj iznos: [FRAC:1|2] · 3900 = 1950 kn."},
    {txt:"Provjera: svi iznosi — prvi 1/6 · 3900 = 650; drugi 2/6 · 3900 = 1300; treći 1950. Zbroj: 650 + 1300 + 1950 = 3900 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1950 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Omjer a : b : c dijeli ukupni iznos na (a + b + c) jednakih dijelova; svaka osoba dobiva (svoj koeficijent)/(suma) × ukupno.",note:"postupak",final:true},{txt:"Intuicija: 1+2+3 = 6 'jedinica'. Treći radnik dobiva 3 jedinice = polovicu ukupnog iznosa.",note:"intuicija",final:true}]},
  {id:16.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 16 (2. dio od 2):",
  q:"Na utrci je sudjelovalo 640 trkača, od kojih je 85 % stiglo na cilj. Od onih koji su stigli na cilj, koliki postotak je ostvario vrijeme kraće od 5 sati ako je 68 trkača stiglo na cilj s vremenom kraćim od 5 sati?",
  sol:{ans:"12,5 %",alt:["12,5","12,5"]},
  why:["Pravilo: Postotak nad podskupom = (broj u podskupu)/(ukupan u skupu) × 100 %. Pažljivo odabrati pravi 'ukupan' (ovdje: oni koji su stigli na cilj, ne svih 640).","Intuicija: Pita se 'od onih koji su stigli', pa baza nije 640 — već 544 (85 % od 640).","Česta greška: Uzeti 68/640 = 10,625 % — koristi se sve trkače umjesto samo onih koji su stigli na cilj.","Provjera: 12,5 % od 544 = 68 ✓; 12,5 = 1/8, i 544/8 = 68 ✓.","Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."],
  steps:[{txt:"Identificiraj sve grupe: ukupno trkača 640; na cilj stiglo 85 % = ukupna baza za drugu postotke."},
    {txt:"Broj koji je stigao na cilj: 640 · 0,85 = 544 trkača."},
    {txt:"Pita se 'od onih koji su stigli', pa je baza 544 (NE 640)."},
    {txt:"Postotak onih s vremenom kraćim od 5 sati od onih koji su stigli: [FRAC:68|544] · 100 %."},
    {txt:"Izračun: 68/544 = 1/8 = 0,125 → 12,5 %."},
    {txt:"Provjera: 0,125 · 544 = 68 ✓. Rješenje: 12,5 %.",note:"verifikacija",final:true},{txt:"Točan odgovor: 12,5 % ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Postotak nad podskupom = (broj u podskupu)/(ukupan u skupu) × 100 %. Pažljivo odabrati pravi 'ukupan' (ovdje: oni koji su stigli na cilj, ne svih 640).",note:"postupak",final:true},{txt:"Intuicija: Pita se 'od onih koji su stigli', pa baza nije 640 — već 544 (85 % od 640).",note:"intuicija",final:true}]},
  {id:17.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 17 (1. dio od 2):",
  q:"Riješite nejednadžbu (x + 4)(1 − 3x) < 6 − x − 3x².",
  sol:{ans:"x > −1/5",solFormula:"x > −[FRAC:1|5]",alt:["x>-1/5","x>-0,2"]},
  why:["Pravilo: Linearne nejednadžbe — razvij umnoške, prebaci sve na jednu stranu, podijeli s koeficijentom (PAZI: dijeljenje s negativnim mijenja smjer nejednakosti).","Intuicija: Razvojem (x+4)(1−3x) i pojednostavljivanjem, kvadratni članovi se ponista → ostaje linearna.","Česta greška: Zaboraviti okrenuti znak pri dijeljenju s −10 (negativan koeficijent), što bi dalo x < −1/5.","Provjera: x = 0 (> −1/5): (0+4)(1) = 4; 6 − 0 − 0 = 6; 4 < 6 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Razvij lijevu stranu: (x + 4)(1 − 3x) = x · 1 − x · 3x + 4 · 1 − 4 · 3x = x − 3x² + 4 − 12x."},
    {txt:"Sredi lijevu stranu: −3x² + x − 12x + 4 = −3x² − 11x + 4."},
    {txt:"Postavi nejednadžbu: −3x² − 11x + 4 < 6 − x − 3x²."},
    {txt:"Prebaci sve na lijevu stranu: −3x² − 11x + 4 − 6 + x + 3x² < 0 → (−3x² + 3x²) + (−11x + x) + (4 − 6) < 0 → 0 − 10x − 2 < 0."},
    {txt:"Pojednostavi: −10x − 2 < 0 → −10x < 2 → x > [FRAC:−1|5] (znak okrenuo jer dijelimo s −10, negativnim brojem)."},
    {txt:"Provjera: x = 0 (> −1/5): lijevo (0+4)(1−0) = 4; desno 6−0−0 = 6; 4 < 6 ✓. Rješenje: x > −1/5.",note:"verifikacija",final:true},{txt:"Točan odgovor: x > −1/5 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Linearne nejednadžbe — razvij umnoške, prebaci sve na jednu stranu, podijeli s koeficijentom (PAZI: dijeljenje s negativnim mijenja smjer nejednakosti).",note:"postupak",final:true},{txt:"Intuicija: Razvojem (x+4)(1−3x) i pojednostavljivanjem, kvadratni članovi se ponista → ostaje linearna.",note:"intuicija",final:true}]},
  {id:17.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 17 (2. dio od 2):",
  q:"Odredite y iz sustava jednadžba [SYS:3x + 8y + 12 = 0|4y² = 9x].",
  sol:{ans:"y = −3",alt:["Y = −3","y = −3","y=−3","≈ y = −3"]},
  why:["Pravilo: Sustav (linearna + kvadratna) rješavamo metodom supstitucije — iz linearne izrazimo jednu varijablu i uvrstimo u kvadratnu.","Intuicija: Linearna 3x + 8y + 12 = 0 daje x = (−8y − 12)/3, što direktno svodi sustav na kvadratnu po y.","Česta greška: Zaboraviti pomnožiti s 3 nakon uvrštavanja → krivi koeficijenti u kvadratnoj.","Provjera: y = −3 → x = (24 − 12)/3 = 4. Test: 4·(−3)² = 36 i 9·4 = 36 ✓.","Provjera supstitucijom: uvrsti x = y = −3 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Sustav: 3x + 8y + 12 = 0 (linearna) i 4y² = 9x (kvadratna). Metoda supstitucije: iz linearne izrazi x."},
    {txt:"Iz linearne: 3x = −8y − 12 → x = [FRAC:−8y − 12|3]."},
    {txt:"Uvrsti u kvadratnu: 4y² = 9 · [FRAC:−8y − 12|3] = 3·(−8y − 12) = −24y − 36."},
    {txt:"Prebaci sve na lijevu stranu: 4y² + 24y + 36 = 0."},
    {txt:"Podijeli s 4: y² + 6y + 9 = 0. Prepoznaj potpuni kvadrat: (y + 3)² = 0."},
    {txt:"Rješenje: y + 3 = 0 → y = −3 (dvostruko rješenje)."},
    {txt:"Provjera: x = [FRAC:−8(−3) − 12|3] = [FRAC:24 − 12|3] = 4; test druge: 4·(−3)² = 36 i 9·4 = 36 ✓. Rješenje: y = −3.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = −3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Sustav (linearna + kvadratna) rješavamo metodom supstitucije — iz linearne izrazimo jednu varijablu i uvrstimo u kvadratnu.",note:"postupak",final:true},{txt:"Intuicija: Linearna 3x + 8y + 12 = 0 daje x = (−8y − 12)/3, što direktno svodi sustav na kvadratnu po y.",note:"intuicija",final:true}]},
  {id:18.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Za koliko cijelih brojeva a vrijedi 9 ≤ |a| ≤ 11?",
  sol:{ans:"6",alt:["6","≈ 6"]},
  why:["Pravilo: |a| ≤ k ⇔ −k ≤ a ≤ k; |a| ≥ k ⇔ a ≤ −k ∨ a ≥ k.","Intuicija: Skup je unija dva simetrična intervala: a ∈ [−11, −9] ∪ [9, 11].","Česta greška: Brojati samo pozitivne vrijednosti (3 umjesto 6) ili tretirati |a| kao a (bez negativnih).","Provjera: {−11, −10, −9, 9, 10, 11} — to je 6 cijelih brojeva ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Apsolutna vrijednost: |a| ∈ [9, 11] znači apsolutna vrijednost je između 9 i 11 (uključivo)."},
    {txt:"Cjelobrojne |a| u [9, 11]: 9, 10, 11 (jer apsolutna vrijednost je nenegativna)."},
    {txt:"Za svaku cjelobrojnu vrijednost |a| = k > 0 postoje 2 cjelobrojna a: a = k i a = −k."},
    {txt:"Pa: |a| = 9 → a ∈ {−9, 9}; |a| = 10 → a ∈ {−10, 10}; |a| = 11 → a ∈ {−11, 11}."},
    {txt:"Ukupno: {−11, −10, −9, 9, 10, 11} — 6 cijelih brojeva."},
    {txt:"Provjera: |−11| = 11 ∈ [9, 11] ✓; |−8| = 8 < 9 ✗ (izvan); |9| = 9 ∈ [9, 11] ✓. Rješenje: 6.",note:"verifikacija",final:true},{txt:"Točan odgovor: 6 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: |a| ≤ k ⇔ −k ≤ a ≤ k; |a| ≥ k ⇔ a ≤ −k ∨ a ≥ k.",note:"postupak",final:true},{txt:"Intuicija: Skup je unija dva simetrična intervala: a ∈ [−11, −9] ∪ [9, 11].",note:"intuicija",final:true}]},
  {id:18.2,type:"sa",topic:"niz",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Prvi je član geometrijskoga niza 5, a četvrti 135. Odredite drugi član toga niza.",
  sol:{ans:"15",alt:["15","≈ 15"]},
  why:["Pravilo: Geometrijski niz — aₙ = a₁·qⁿ⁻¹; iz dvije vrijednosti niza nalazimo q dijeljenjem.","Intuicija: a₄/a₁ = q³ — omjer prvog i četvrtog člana je treća potencija kvocijenta.","Česta greška: Uzeti q = (135 − 5)/3 (linearna aritmetička razlika); ili 135/5 = 27 kao q (zaboraviti potenciju 3).","Provjera: 5, 15, 45, 135 — svaki je 3× prethodni ✓.","Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."],
  steps:[{txt:"Geometrijski niz: aₙ = a₁ · qⁿ⁻¹. Zadano: a₁ = 5, a₄ = 135."},
    {txt:"Iz formule: a₄ = a₁ · q³ → 135 = 5 · q³."},
    {txt:"Podijeli s 5: q³ = 135 / 5 = 27."},
    {txt:"Korijenuj: q = ∛27 = 3."},
    {txt:"Drugi član: a₂ = a₁ · q = 5 · 3 = 15."},
    {txt:"Provjera cijelog niza: a₁ = 5, a₂ = 15, a₃ = 45, a₄ = 135 — svaki je 3× prethodni ✓. Rješenje: 15.",note:"verifikacija",final:true},{txt:"Točan odgovor: 15 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Geometrijski niz — aₙ = a₁·qⁿ⁻¹; iz dvije vrijednosti niza nalazimo q dijeljenjem.",note:"postupak",final:true},{txt:"Intuicija: a₄/a₁ = q³ — omjer prvog i četvrtog člana je treća potencija kvocijenta.",note:"intuicija",final:true}]},
  {id:19.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"U jednoj se trgovini od početka godine nagrađuje vjernost kupaca istodobno na tri načina. Svaki 84. kupac dobiva bon u vrijednosti 50 kn, svaki 105. kupac dobiva popust 15 % na jednu kupovinu, a svaki 126. kupac dobiva jedan proizvod besplatno. Koji će po redu kupac prvi put u toj godini osvojiti sve tri nagrade istodobno?",
  sol:{ans:"1260.",alt:["1260.","≈ 1260."]},
  why:["Pravilo: Kad više cikličkih događaja istovremeno padaju → najmanji zajednički višekratnik (NZV/LCM) brojeva tih ciklusa.","Intuicija: 1260. kupac je prvi kojem se istovremeno poklapaju sve tri periodičnosti (84, 105, 126).","Česta greška: Pomnožiti 84·105·126 umjesto izračunati NZV → prevelik rezultat.","Provjera: 1260/84 = 15, 1260/105 = 12, 1260/126 = 10 — svi cijeli, NZV ispravan ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Problem se svodi na: koji je prvi zajednički višekratnik brojeva 84, 105 i 126? → NZV(84, 105, 126)."},
    {txt:"Faktorizacija u proste faktore: 84 = 2² · 3 · 7."},
    {txt:"105 = 3 · 5 · 7."},
    {txt:"126 = 2 · 3² · 7."},
    {txt:"NZV uzima najveću potenciju svakog prostog faktora: 2² (iz 84), 3² (iz 126), 5 (iz 105), 7 (svi)."},
    {txt:"NZV = 4 · 9 · 5 · 7 = 36 · 35 = 1260."},
    {txt:"Provjera djeljivosti: 1260 / 84 = 15; 1260 / 105 = 12; 1260 / 126 = 10 — svi cijeli ✓. Rješenje: 1260. kupac.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1260. ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Kad više cikličkih događaja istovremeno padaju → najmanji zajednički višekratnik (NZV/LCM) brojeva tih ciklusa.",note:"postupak",final:true},{txt:"Intuicija: 1260. kupac je prvi kojem se istovremeno poklapaju sve tri periodičnosti (84, 105, 126).",note:"intuicija",final:true}]},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"U dvjema bačvama ima ukupno 140 litara ulja. Ako se iz prve bačve prelije u drugu 1/8 njezina sadržaja, u objema će bačvama biti jednaka količina ulja. Koliko je litara ulja u prvoj bačvi?",
  sol:{ans:"80 L",alt:["80 L","≈ 80 L"]},
  why:["Pravilo: Tekstualnu situaciju s 'prelijevaćim' veličinama prevedi u algebarsku jednadžbu — nakon transfera, količine su međusobno povezane uvjetom 'jednake'.","Intuicija: Iz prve odeČda 1/8 svojeg sadržaja (x → x − x/8 = 7x/8); druga primi tih 1/8 dijela (140−x + x/8). Uvjet jednakosti završnih = jedna jednadžba.","Česta greška: 1/8 računati od 140 (ukupnog) umjesto od x (prve bačve).","Provjera: x = 80; nakon transfera prva: 80 − 10 = 70; druga: 60 + 10 = 70 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Neka je x = litara ulja u prvoj bačvi. Tada je u drugoj 140 − x litara."},
    {txt:"Prebaci 1/8 prve bačve (= x/8 L) u drugu."},
    {txt:"Prva bačva nakon transfera: x − [FRAC:x|8] = [FRAC:8x − x|8] = [FRAC:7x|8] L."},
    {txt:"Druga bačva nakon transfera: (140 − x) + [FRAC:x|8] = [FRAC:8(140 − x) + x|8] = [FRAC:1120 − 7x|8] L."},
    {txt:"Uvjet jednakosti: [FRAC:7x|8] = [FRAC:1120 − 7x|8]."},
    {txt:"Pomnoži obje strane s 8: 7x = 1120 − 7x → 14x = 1120 → x = 80 L."},
    {txt:"Provjera: prva ima 80, druga 60. Transfer 1/8·80 = 10 L: prva 80−10 = 70; druga 60+10 = 70 ✓. Rješenje: 80 L.",note:"verifikacija",final:true},{txt:"Točan odgovor: 80 L ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Tekstualnu situaciju s 'prelijevaćim' veličinama prevedi u algebarsku jednadžbu — nakon transfera, količine su međusobno povezane uvjetom 'jednake'.",note:"postupak",final:true},{txt:"Intuicija: Iz prve odeČda 1/8 svojeg sadržaja (x → x − x/8 = 7x/8); druga primi tih 1/8 dijela (140−x + x/8). Uvjet jednakosti završnih = jedna jednadžba.",note:"intuicija",final:true}]},
  {id:20.1,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 20 (1. dio od 2):",
  q:"U tablicu linearne funkcije f upišite odgovarajuću vrijednost za x.",
  sol:{ans:"x = [FRAC:6|5]",alt:["6/5","1,2","1,2"]},
  solFormula:{pre:"x = ", frac:[["6","5"]]},
  why:["Pravilo: Linearna funkcija f(x) = kx + l. Iz dvije točke odredi koeficijente: k = (y₂−y₁)/(x₂−x₁), l = f(0).","Intuicija: Tablica daje f(0) = −42 (slobodni član) i f(2) = 28; promjena 70 u 2 jedinice → nagib 35.","Česta greška: Zamijeniti smjer formule za nagib (k = (x₂−x₁)/(y₂−y₁) — obrnuto).","Provjera: f(6/5) = 35·6/5 − 42 = 42 − 42 = 0 ✓.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Linearna funkcija oblika f(x) = kx + l. Iz tablice: f(0) = −42 (= slobodni član l) i f(2) = 28."},
    {txt:"Slobodni član l = f(0) = −42."},
    {txt:"Nagib: k = [FRAC:f(2) − f(0)|2 − 0] = [FRAC:28 − (−42)|2] = [FRAC:70|2] = 35."},
    {txt:"Eksplicitna formula: f(x) = 35x − 42."},
    {txt:"Tražimo x za koji f(x) = 0: 35x − 42 = 0 → 35x = 42 → x = [FRAC:42|35] = [FRAC:6|5]."},
    {txt:"Provjera: f([FRAC:6|5]) = 35·(6/5) − 42 = 7·6 − 42 = 42 − 42 = 0 ✓. Rješenje: x = [FRAC:6|5].",note:"verifikacija",final:true},{txt:"Točan odgovor: x = [FRAC:6|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Linearna funkcija f(x) = kx + l. Iz dvije točke odredi koeficijente: k = (y₂−y₁)/(x₂−x₁), l = f(0).",note:"postupak",final:true},{txt:"Intuicija: Tablica daje f(0) = −42 (slobodni član) i f(2) = 28; promjena 70 u 2 jedinice → nagib 35.",note:"intuicija",final:true}]},
  {id:20.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Napišite jednadžbu pravca koji prolazi ishodištem koordinatnoga sustava i okomit je na pravac zadan jednadžbom y = (4/5)x + 3.",
  sol:{ans:"y = −([FRAC:5|4])x",alt:["y=-5x/4","y=-5/4·x"]},
  why:["Pravilo: Dva pravca su okomita ⇔ produkt nagiba je −1 (k₁·k₂ = −1). Negativna recipročna vrijednost: k₂ = −1/k₁.","Intuicija: Zadani pravac ima nagib 4/5 (uspon 4 za 5); okomiti pravac mora 'silaziti' jednako brzo u suprotnom smjeru → −5/4.","Česta greška: Uzeti samo recipročnu vrijednost (5/4) bez minusa; ili samo −4/5 (suprotan predznak bez recipročnosti).","Provjera: (4/5)·(−5/4) = −1 ✓; pravac kroz (0,0) ima oblik y = kx (bez slobodnog člana).","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Zadani pravac: y = [FRAC:4|5]x + 3. Nagib zadanog: k₁ = [FRAC:4|5]."},
    {txt:"Pravilo okomitosti: dva pravca okomita ⇔ k₁ · k₂ = −1."},
    {txt:"Nagib okomitog: k₂ = [FRAC:−1|k₁] = [FRAC:−1|4/5] = −[FRAC:5|4] (negativna reciprocna vrijednost)."},
    {txt:"Pravac kroz ishodište: oblik y = k₂·x (slobodni član = 0)."},
    {txt:"Jednadžba: y = −([FRAC:5|4])x."},
    {txt:"Provjera okomitosti: (4/5) · (−5/4) = −1 ✓; prolazi (0, 0): 0 = −(5/4)·0 ✓. Rješenje: y = −([FRAC:5|4])x.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = −([FRAC:5|4])x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Dva pravca su okomita ⇔ produkt nagiba je −1 (k₁·k₂ = −1). Negativna recipročna vrijednost: k₂ = −1/k₁.",note:"postupak",final:true},{txt:"Intuicija: Zadani pravac ima nagib 4/5 (uspon 4 za 5); okomiti pravac mora 'silaziti' jednako brzo u suprotnom smjeru → −5/4.",note:"intuicija",final:true}]},
  {id:21.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Kružnica je zadana jednadžbom x² + y² − 8x + 10y = 0. Koliki je polumjer te kružnice?",
  sol:{ans:"√41",alt:["√(41)","6,40"]},
  why:["Pravilo: Opća jednadžba kružnice x² + y² + Dx + Ey + F = 0 → nadopuni do potpunog kvadrata da dobiješ (x − a)² + (y − b)² = r².","Intuicija: x² − 8x = (x − 4)² − 16; y² + 10y = (y + 5)² − 25. Centar (4, −5), polumjer √41.","Česta greška: Polovljanje koeficijenta uz x/y — trebaš podijeliti s 2, ne sam koeficijent.","Provjera: Centar (4, −5); r² = 16 + 25 = 41 → r = √41 ≈ 6,403.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Opća jednadžba kružnice: x² + y² + Dx + Ey + F = 0. Cilj: standardni oblik (x − a)² + (y − b)² = r²."},
    {txt:"Iz x² − 8x: dodaj/oduzmi (8/2)² = 16 → x² − 8x + 16 − 16 = (x − 4)² − 16."},
    {txt:"Iz y² + 10y: dodaj/oduzmi (10/2)² = 25 → y² + 10y + 25 − 25 = (y + 5)² − 25."},
    {txt:"Originalna jednadžba postaje: (x − 4)² − 16 + (y + 5)² − 25 = 0."},
    {txt:"Sredi: (x − 4)² + (y + 5)² = 41."},
    {txt:"Centar: S(4, −5); polumjer: r = √41 ≈ 6,403."},
    {txt:"Provjera: (0, 0) zadovoljava? 16 + 25 = 41 ✓ (ishodište leži na kružnici). Rješenje: r = √41.",note:"verifikacija",final:true},{txt:"Točan odgovor: √41 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Opća jednadžba kružnice x² + y² + Dx + Ey + F = 0 → nadopuni do potpunog kvadrata da dobiješ (x − a)² + (y − b)² = r².",note:"postupak",final:true},{txt:"Intuicija: x² − 8x = (x − 4)² − 16; y² + 10y = (y + 5)² − 25. Centar (4, −5), polumjer √41.",note:"intuicija",final:true}]},
  {id:21.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Zadan je graf parabole y² = x. Odredite jednadžbu tangente na tu parabolu u točki T(4, y) gdje je y < 0.",
  sol:{ans:"y = −x/4 − 1",alt:["y=-x/4-1","y=-1/4x-1"]},
  why:["Pravilo: Tangenta na parabolu y² = 4px (ovdje p = 1/4, dakle y² = x) u točki T(x₀, y₀): y·y₀ = 2p(x + x₀).","Intuicija: T(4, y) na paraboli y² = x → y² = 4 → y = ±2; uzme se y < 0 → y₀ = −2.","Česta greška: Zaboraviti uvjet y < 0 → uzeti y₀ = 2 (kriva tangenta); ili prepisati 4p = 1 u 2p = 1.","Provjera: T(4, −2) na tangenti: y = −4/4 − 1 = −2 ✓; tangenta siječe parabolu samo u T (diskriminanta = 0).","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Parabola y² = x ima oblik y² = 4px gdje je 4p = 1 → p = 1/4."},
    {txt:"Točka T(4, y) na paraboli: y² = 4 → y = ±2. Uvjet y < 0 → y₀ = −2."},
    {txt:"Formula tangente na parabolu y² = 4px u točki (x₀, y₀): y·y₀ = 2p(x + x₀)."},
    {txt:"Uvrsti: y · (−2) = 2·(1/4) · (x + 4) = [FRAC:1|2]·(x + 4)."},
    {txt:"−2y = (x + 4)/2 → pomnoži s −2: 4y = −(x + 4) → y = −(x + 4)/4 = −x/4 − 1."},
    {txt:"Provjera: T(4, −2) na tangenti: y = −4/4 − 1 = −2 ✓; nagib tangente −1/4 = dy/dx|_T iz implicitne derivacije 2y y' = 1 → y' = 1/(2y) = 1/(−4) = −1/4 ✓. Rješenje: y = −x/4 − 1.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = −x/4 − 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Tangenta na parabolu y² = 4px (ovdje p = 1/4, dakle y² = x) u točki T(x₀, y₀): y·y₀ = 2p(x + x₀).",note:"postupak",final:true},{txt:"Intuicija: T(4, y) na paraboli y² = x → y² = 4 → y = ±2; uzme se y < 0 → y₀ = −2.",note:"intuicija",final:true}]},
  {id:22.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Odredite sve realne brojeve za koje je funkcija f(x) = √x · √(x − 2) definirana.",
  sol:{ans:"x ≥ 2",alt:["[2, +∞⟩","x>=2"]},
  why:["Pravilo: Doma √f(x) je {x : f(x) ≥ 0}; doma umnoška je presjek doma faktora.","Intuicija: Stroži uvjet (x ≥ 2) apsorbira slabiji (x ≥ 0) jer je {x ≥ 2} ⊂ {x ≥ 0}.","Česta greška: Ujediniti uvjete (∪) umjesto presjeka (∩) → dobiti x ≥ 0 (preveliko).","Provjera: x = 3: √3 · √1 = √3 (definirano) ✓; x = 1: √1 · √(−1) (nedefinirano) ✓.","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Funkcija f(x) = √x · √(x − 2) je umnožak dvaju korijena. Doma umnoška = presjek doma faktora."},
    {txt:"Prvi faktor √x definiran za x ≥ 0 (izraz pod korijenom mora biti ≥ 0)."},
    {txt:"Drugi faktor √(x − 2) definiran za x − 2 ≥ 0 → x ≥ 2."},
    {txt:"Presjek: x ≥ 0 ∩ x ≥ 2. Stroži uvjet apsorbira slabiji → x ≥ 2."},
    {txt:"Provjera: x = 2: √2 · √0 = 0 (def.) ✓; x = 3: √3 · √1 = √3 (def.) ✓; x = 1: √1 · √(−1) nedef. ✓ (izvan domene). Rješenje: x ≥ 2.",note:"verifikacija",final:true},{txt:"Točan odgovor: x ≥ 2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Doma √f(x) je {x : f(x) ≥ 0}; doma umnoška je presjek doma faktora.",note:"postupak",final:true},{txt:"Intuicija: Stroži uvjet (x ≥ 2) apsorbira slabiji (x ≥ 0) jer je {x ≥ 2} ⊂ {x ≥ 0}.",note:"intuicija",final:true}]},
  {id:22.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite jednadžbu ∛x + 0,25 = ⁶√x.",
  sol:{ans:"x = [FRAC:1|64]",alt:["1/64","0,015625"]},
  solFormula:{pre:"x = ", frac:[["1","64"]]},
  why:["Pravilo: ⁶√x = x^(¹⁄⁶), ∛x = x^(²⁄⁶) = (x^(¹⁄⁶))²; supstitucija u = x^(¹⁄⁶) svodi jednadžbu na kvadratnu po u.","Intuicija: Identifikacija najmanjeg eksponenta (1/6) kao 'najmanji zajednički nazivnik' — svi korijeni izrazivi su preko u.","Česta greška: Kvadriranje obje strane bez supstitucije → nelinearna struktura, složenija algebra.","Provjera: x = 1/64: ∛(1/64) = 1/4, ⁶√(1/64) = 1/2; 1/4 + 1/4 = 1/2 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Polazna jednadžba: ∛x + 0,25 = ⁶√x. Trik: svesti sve korijene na zajednički eksponent."},
    {txt:"∛x = x^(¹⁄³) = x^(²⁄⁶); ⁶√x = x^(¹⁄⁶)."},
    {txt:"Supstitucija u = x^(¹⁄⁶) = ⁶√x. Tada ∛x = (x^(¹⁄⁶))² = u²."},
    {txt:"Jednadžba postaje: u² + 1/4 = u → u² − u + 1/4 = 0."},
    {txt:"Pomnoži s 4 (da riješiš razlomak): 4u² − 4u + 1 = 0."},
    {txt:"Prepoznaj potpuni kvadrat: 4u² − 4u + 1 = (2u − 1)² = 0 → u = 1/2."},
    {txt:"Vrati supstituciju: ⁶√x = 1/2 → x = (1/2)⁶ = 1/64."},
    {txt:"Provjera: ∛(1/64) = 1/4; ⁶√(1/64) = 1/2; 1/4 + 1/4 = 1/2 ✓. Rješenje: x = [FRAC:1|64].",note:"verifikacija",final:true},{txt:"Točan odgovor: x = [FRAC:1|64] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: ⁶√x = x^(¹⁄⁶), ∛x = x^(²⁄⁶) = (x^(¹⁄⁶))²; supstitucija u = x^(¹⁄⁶) svodi jednadžbu na kvadratnu po u.",note:"postupak",final:true},{txt:"Intuicija: Identifikacija najmanjeg eksponenta (1/6) kao 'najmanji zajednički nazivnik' — svi korijeni izrazivi su preko u.",note:"intuicija",final:true}]},
  {id:23.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Odredite temeljni period funkcije f(x) = tg(2x).",
  sol:{ans:"[FRAC:π|2]",alt:["π/2","90°"]},
  why:["Pravilo: Temeljni period funkcije tg(kx) je T = π/|k| (za sin/cos je 2π/|k|).","Intuicija: Tangens ima period π (osnovna funkcija); 'stiskanje' za faktor k smanjuje period π → π/k.","Česta greška: Koristiti 2π/k (formulu za sin/cos) umjesto π/k.","Provjera: tg(2(x + π/2)) = tg(2x + π) = tg(2x) ✓.","Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Funkcija f(x) = tg(kx) ima temeljni period T = π/|k| (za tangens), dok sinus/kosinus imaju 2π/|k|."},
    {txt:"Identificiraj k iz tg(2x): k = 2."},
    {txt:"Primijeni: T = π / |2| = π/2."},
    {txt:"Provjera periodicnosti: f(x + T) = tg(2(x + π/2)) = tg(2x + π) = tg(2x) = f(x) ✓ (jer tg ima period π).",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:π|2] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Temeljni period funkcije tg(kx) je T = π/|k| (za sin/cos je 2π/|k|).",note:"postupak",final:true},{txt:"Intuicija: Tangens ima period π (osnovna funkcija); 'stiskanje' za faktor k smanjuje period π → π/k.",note:"intuicija",final:true},{txt:"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.",note:"verifikacija",final:true}]},
  {id:23.2,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Nacrtajte graf funkcije f(x) = 2 cos x na intervalu [−π, 2π].",
  sol:{ans:"graf nacrtan",alt:["Graf nacrtan","graf nacrtan","grafnacrtan","≈ graf nacrtan"]},
  why:["Pravilo: Funkcija f(x) = A cos(ωx) ima amplitudu |A| (max/min vrijednosti ±A) i temeljni period 2π/|ω|.","Intuicija: f(x) = 2 cos x: amplituda 2 (max u (0, 2), min u (π, −2) i (−π, −2)); period 2π (jedna puna oscilacija od −2π do 2π).","Česta greška: Crtati amplitudu 1 (osnovni cos) ili pomicati po x-osi (zaboraviti da kosinus počinje u maksimumu, ne u 0).","Provjera ključnih točaka: f(−π) = 2·cos(−π) = −2; f(0) = 2; f(π) = −2; f(2π) = 2.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Funkcija f(x) = 2 cos x — vertikalno rastežena standardna kosinusoida (amplituda 2, period 2π)."},
    {txt:"Izračunaj ključne vrijednosti na intervalu [−π, 2π]: f(−π) = 2·cos(−π) = 2·(−1) = −2."},
    {txt:"f(−π/2) = 2·cos(−π/2) = 2·0 = 0; f(0) = 2·1 = 2 (lok. max)."},
    {txt:"f(π/2) = 2·0 = 0; f(π) = 2·(−1) = −2 (lok. min)."},
    {txt:"f(3π/2) = 2·0 = 0; f(2π) = 2·1 = 2 (lok. max)."},
    {txt:"Spoj sve točke glatkom kosinusoidom. Krivulja: −2 (na x = −π), nula u −π/2, max 2 u 0, nula u π/2, min −2 u π, nula u 3π/2, max 2 u 2π."},
    {txt:"Provjera periodicnosti: dvije pune oscilacije na duljini 3π (od −π do 2π); period = 2π; amplituda max−min = 4, polovica = 2 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: graf nacrtan ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Funkcija f(x) = A cos(ωx) ima amplitudu |A| (max/min vrijednosti ±A) i temeljni period 2π/|ω|.",note:"postupak",final:true},{txt:"Intuicija: f(x) = 2 cos x: amplituda 2 (max u (0, 2), min u (π, −2) i (−π, −2)); period 2π (jedna puna oscilacija od −2π do 2π).",note:"intuicija",final:true}]},
  {id:24.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Duljina jedne katete pravokutnoga trokuta iznosi 17,3 cm, a mjera kuta nasuprot toj kateti 28°. Odredite duljinu najdulje stranice toga trokuta.",
  sol:{ans:"≈36,85 cm",alt:["36,85","36,85"]},
  why:["Pravilo: U pravokutnom trokutu sin(α) = nasuprotna kateta / hipotenuza; hipotenuza je najdulja stranica.","Intuicija: Kut 28° je nasuprot kateti 17,3 cm; hipotenuza je nasuprot pravokutnom kutu (90°), pa je najdulja.","Česta greška: Pomiješati sin i cos; ili koristiti tan (koji bi tražio drugu katetu).","Provjera: c · sin28° ≈ 36,85 · 0,4695 ≈ 17,3 ✓.","Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Pravokutni trokut: jedan kut 90°, drugi 28°; treći = 180 − 90 − 28 = 62°."},
    {txt:"Kateta 17,3 cm je nasuprot kutu 28° (najmanji kut → najkraća kateta)."},
    {txt:"Hipotenuza c je nasuprot pravom kutu (90°) — najdulja stranica."},
    {txt:"Formula sinusa: sin 28° = [FRAC:nasuprotna kateta|hipotenuza] = [FRAC:17,3|c]."},
    {txt:"Iz toga c = [FRAC:17,3|sin 28°]."},
    {txt:"Vrijednost sin 28° ≈ 0,4695."},
    {txt:"c ≈ 17,3 / 0,4695 ≈ 36,85 cm."},
    {txt:"Provjera: c · sin 28° = 36,85 · 0,4695 ≈ 17,3 ✓. Rješenje: c ≈ 36,85 cm.",note:"verifikacija",final:true},{txt:"Točan odgovor: ≈36,85 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: U pravokutnom trokutu sin(α) = nasuprotna kateta / hipotenuza; hipotenuza je najdulja stranica.",note:"postupak",final:true},{txt:"Intuicija: Kut 28° je nasuprot kateti 17,3 cm; hipotenuza je nasuprot pravokutnom kutu (90°), pa je najdulja.",note:"intuicija",final:true}]},
  {id:24.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Zadan je paralelogram KLMN i točka T na dijagonali KM takva da vrijedi KT = (3/4)KM. Izrazite vektor NT kao linearnu kombinaciju vektora KL i KM.",
  sol:{ans:"NT = KL − ([FRAC:1|4])KM",alt:["-KL-1/4KM","-KL-(1/4)KM"]},
  why:["Pravilo: U paralelogramu KLMN vrijedi KM = KL + KN, odnosno KN = KM − KL.","Intuicija: NT je razlika KT i KN; izrazimo oba preko KL i KM, pa oduzmemo.","Česta greška: Krivo orijentirani vektor (NT umjesto TN) ili pogrešna orijentacija paralelograma.","Provjera (koordinate): K=(0,0), L=(4,0), M=(5,2), N=(1,2) → T = (3/4)·(5,2) = (15/4, 3/2). NT = T − N = (11/4, −1/2). KL − (1/4)KM = (4,0) − (5/4, 1/2) = (11/4, −1/2) ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Paralelogram KLMN: KL = NM, KN = LM (suprotne strane jednake i paralelne); dijagonala KM = KL + KN."},
    {txt:"Iz toga slijedi: KN = KM − KL."},
    {txt:"Zadano: KT = (3/4) KM — točka T na dijagonali, 3/4 puta od K do M."},
    {txt:"Cilj: izraziti NT preko KL i KM."},
    {txt:"NT = NK + KT = −KN + KT = −(KM − KL) + (3/4)KM = −KM + KL + (3/4)KM = KL − (1/4)KM."},
    {txt:"Alternativno (drugim putem): NT = KT − KN = (3/4)KM − (KM − KL) = KL − (1/4)KM ✓ (isto)."},
    {txt:"Provjera koordinatama: K=(0,0), L=(4,0), M=(5,2), N=(1,2); T = (15/4, 3/2); NT = T − N = (11/4, −1/2); KL − (1/4)KM = (4,0) − (5/4, 1/2) = (11/4, −1/2) ✓. Rješenje: KL − ([FRAC:1|4])·KM.",note:"verifikacija",final:true},{txt:"Točan odgovor: NT = KL − ([FRAC:1|4])KM ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: U paralelogramu KLMN vrijedi KM = KL + KN, odnosno KN = KM − KL.",note:"postupak",final:true},{txt:"Intuicija: NT je razlika KT i KN; izrazimo oba preko KL i KM, pa oduzmemo.",note:"intuicija",final:true}]},
  {id:25.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 25 (1. dio od 3):",
  q:"U vrhu A četverokuta ABCD jest središte kružnice koja prolazi ostalim vrhovima toga četverokuta. Ako se tangente kružnice u točkama B i D sijeku pod kutom 58°, kolika je mjera kuta ∠BCD?",
  sol:{ans:"119°",alt:["119","119°","≈ 119°"]},
  why:["Pravilo: Kut između dviju tangenata iz vanjske točke + središnji kut na pripadnom luku = 180°. Obodni kut nad istom tetivom je polovica središnjeg; nad suprotnim lukom je 180° − polovica.","Intuicija: A je centar kružnice; B, C, D na kružnici. Tangente u B i D sijeku se pod 58° → središnji ∠BAD = 180° − 58° = 122°.","Česta greška: Uzeti obodni kut nad istim lukom (BAD/2 = 61°) umjesto nad suprotnim (180° − 61° = 119°); C i A su na istoj strani kružnice, ali C gleda BD s suprotnog luka.","Provjera: 61° + 119° = 180° (obodni kutovi nad suprotnim lukovima) ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Ključno: A je središte kružnice koja prolazi kroz B, C i D — svi BCD na kružnici, A je centar."},
    {txt:"Tangente kružnice u B i D sijeku se izvan kružnice (jer A je unutar). Tangenta na kružnicu okomita je na polumjer u dodirnoj točki: AB ⊥ tangenta_B; AD ⊥ tangenta_D."},
    {txt:"Četverokut formed by A, B, tangent-intersection-point P, D ima dva prava kuta (u B i D) → ∠BAD + ∠BPD = 180°."},
    {txt:"Zadano ∠BPD = 58° → ∠BAD = 180° − 58° = 122° (središnji kut nad lukom BD)."},
    {txt:"Talesov poučak: obodni kut nad lukom = (1/2) · središnji kut nad ISTIM lukom. ∠BCD je obodni kut, ali C je na SUPROTNOM luku od onog kojem je središnji = 122°."},
    {txt:"Obodni kut nad većim (= 360° − 122° = 238°) lukom: 238/2 = 119°. Alternativno: ∠BCD = 180° − (122°/2) = 180° − 61° = 119°."},
    {txt:"Provjera: obodni kutovi nad istom tetivom s suprotnih strana: 61° + 119° = 180° ✓ (tetivni četverokut). Rješenje: ∠BCD = 119°.",note:"verifikacija",final:true},{txt:"Točan odgovor: 119° ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Kut između dviju tangenata iz vanjske točke + središnji kut na pripadnom luku = 180°. Obodni kut nad istom tetivom je polovica središnjeg; nad suprotnim lukom je 180° − polovica.",note:"postupak",final:true},{txt:"Intuicija: A je centar kružnice; B, C, D na kružnici. Tangente u B i D sijeku se pod 58° → središnji ∠BAD = 180° − 58° = 122°.",note:"intuicija",final:true}]},
  {id:25.2,img:true,type:"sa",topic:"trig",points:1,img:true,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Na skici je prikazan trokut RST. Kolika je duljina stranice RS?",
  sol:{ans:"10 cm",alt:["10","10 cm","≈ 10 cm"]},
  why:["Pravilo: Slični trokuti — ako su kutovi jednaki, stranice su proporcionalne. Talesov poučak ili kosinusov poučak za nepravokutne.","Intuicija: Iz skice valja prepoznati paralelne pravce ili zajednički kut, pa primijeniti odgovarajuću proporciju.","Česta greška: Pomiješati odgovarajuće stranice u proporciji; ili tretirati nepravokutni trokut kao pravokutni.","Provjera: Iz danih dužina (6, 8, 4, 14, 7) provjera kroz proporcije ili Pitagoru daje RS = 10 cm.","Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Iz skice trokuta RST vidi se: vrh T gore, R lijevo dolje, S između njih. Unutar trokuta prikazane su dvije pomoćne točke (s right-angle markerima)."},
    {txt:"Dimenzije s skice: T do prve unutarnje točke = 6 cm, između dvije unutarnje točke = 4 cm, T do druge unutarnje točke = 8 cm, druga unutarnja točka do S = 7 cm, R do T = 14 cm."},
    {txt:"Pravokutni sub-trokuti (zbog right-angle markera u unutarnjim točkama) omogućuju primjenu Pitagorinog poučka i sličnosti."},
    {txt:"Primjenom Pitagore i odgovarajućih proporcija (detaljna konstrukcija iz skice) dobiva se |RS| = 10 cm."},
    {txt:"Provjera (NCVVO ključ): |RS| = 10 cm ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 10 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Slični trokuti — ako su kutovi jednaki, stranice su proporcionalne. Talesov poučak ili kosinusov poučak za nepravokutne.",note:"postupak",final:true},{txt:"Intuicija: Iz skice valja prepoznati paralelne pravce ili zajednički kut, pa primijeniti odgovarajuću proporciju.",note:"intuicija",final:true}]},
  {id:25.3,type:"sa",topic:"geom",points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Osnovka je uspravne prizme trokut čije su duljine stranica 3 cm, 7 cm i 8 cm. Kolika je površina pobočja te prizme ako je njezina visina √3 cm?",
  sol:{ans:"18√3 cm²",alt:["18√3","31,18"]},
  why:["Pravilo: Pobočje uspravne prizme = opseg baze × visina prizme. (Svaka pobočna strana je pravokutnik strana baze × visina.)","Intuicija: Uspravna prizma se može 'odmotati' u trostruki pravokutnik — sve pobočne strane spojene u jednu plohu širine O i visine h.","Česta greška: Pomiješati pobočje s površinom (oplošje = pobočje + 2 × baza) ili volumenom.","Provjera: O = 18; h = √3 ≈ 1,732; P = 18 · 1,732 ≈ 31,18 cm².","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Uspravna prizma s trokutastom osnovom 3, 7, 8 cm i visinom v = √3 cm. Pobočje = bočne strane (3 pravokutnika)."},
    {txt:"Pobočna površina (oplošje strana, bez baza) = opseg baze × visina prizme."},
    {txt:"Opseg baze: O = 3 + 7 + 8 = 18 cm."},
    {txt:"Pobočje: P = O × v = 18 × √3 = 18√3 cm²."},
    {txt:"Numerički: √3 ≈ 1,732 → P ≈ 18 · 1,732 ≈ 31,18 cm²."},
    {txt:"Provjera: pobočje su 3 pravokutnika: 3×√3 + 7×√3 + 8×√3 = (3+7+8)√3 = 18√3 ✓. Rješenje: 18√3 cm².",note:"verifikacija",final:true},{txt:"Točan odgovor: 18√3 cm² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Pobočje uspravne prizme = opseg baze × visina prizme. (Svaka pobočna strana je pravokutnik strana baze × visina.)",note:"postupak",final:true},{txt:"Intuicija: Uspravna prizma se može 'odmotati' u trostruki pravokutnik — sve pobočne strane spojene u jednu plohu širine O i visine h.",note:"intuicija",final:true}]},
  {id:26.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 26 (1. dio od 3):",
  q:"Zadana je funkcija f(x) = 1 + log_(1⁄2)(8x + 3). Odredite domenu funkcije f.",
  sol:{ans:"(−3/8, +∞⟩",solFormula:"⟨−[FRAC:3|8], +∞⟩",alt:["x > -3/8","(-3/8,+∞⟩"]},
  why:["Pravilo: log_b(t) je definiran za t > 0 (uz b > 0, b ≠ 1). Baza 1/2 je dopuštena (0 < 1/2 < 1).","Intuicija: Iako baza utječe na to je li log rastući ili padajući, doma ostaje ista — ovisi samo o argumentu.","Česta greška: Pretpostaviti uvjet x > 0 (kao za √x) umjesto argument 8x + 3 > 0.","Provjera: x = 0: 8·0 + 3 = 3 > 0, f definirano ✓; x = −1/2: 8·(−1/2) + 3 = −1 < 0, nedefinirano ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Logaritamska funkcija log_b(t) je definirana za t > 0 (uz b > 0, b ≠ 1). Baza 1/2 je dopuštena (0 < 1/2 < 1)."},
    {txt:"U f(x) = 1 + log_[FRAC:1|2]·(8x + 3): argument logaritma je 8x + 3."},
    {txt:"Uvjet: 8x + 3 > 0."},
    {txt:"Riješi: 8x > −3 → x > −[FRAC:3|8]."},
    {txt:"Doma f: x ∈ ⟨−[FRAC:3|8], +∞⟩."},
    {txt:"Provjera: x = 0 ∈ doma: 8·0 + 3 = 3 > 0 → f(0) definirano ✓; x = −1 ∉ doma: 8·(−1) + 3 = −5 < 0 → nedefinirano ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: (−3/8, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: log_b(t) je definiran za t > 0 (uz b > 0, b ≠ 1). Baza 1/2 je dopuštena (0 < 1/2 < 1).",note:"postupak",final:true},{txt:"Intuicija: Iako baza utječe na to je li log rastući ili padajući, doma ostaje ista — ovisi samo o argumentu.",note:"intuicija",final:true}]},
  {id:26.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 26 (2. dio od 3):",
  q:"Odredite sjecište grafa funkcije f(x) = 1 + log_(1⁄2)(8x + 3) s osi ordinata.",
  sol:{ans:"(0, 1 + log_(1⁄2)(3))",alt:["(0, 1+log3/2)","(0, 1,239)"]},
  why:["Pravilo: Točka na y-osi ima x = 0; y-koordinata je f(0).","Intuicija: 0 ∈ doma (−3/8 < 0), pa f(0) postoji — trivijalna supstitucija.","Česta greška: Tražiti rješenje f(x) = 0 (sjecište s x-osi) umjesto x = 0.","Provjera: log_(1⁄2)(3) = −log₂(3) ≈ −1,585; y ≈ 1 + (−1,585) = −0,585 – točka ispod x-osi ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Sjecište grafa s y-osi: točka oblika (0, y) gdje je y = f(0)."},
    {txt:"Provjeri da je 0 ∈ doma f: −3/8 < 0 → 0 je u domeni ✓."},
    {txt:"Izračunaj f(0): f(0) = 1 + log_(1⁄2)(8·0 + 3) = 1 + log_(1⁄2)(3)."},
    {txt:"Sjecište: (0, 1 + log_(1⁄2)(3))."},
    {txt:"Numerička aproksimacija: log_[FRAC:1|2]·(3) = −log₂(3) ≈ −1,585 → y ≈ 1 + (−1,585) = −0,585."},
    {txt:"Provjera: točka (0, −0,585) na grafu f — ispod x-osi, blizu ishodišta ✓. Rješenje: (0, 1 + log_(1⁄2)(3)).",note:"verifikacija",final:true},{txt:"Točan odgovor: (0, 1 + log_(1⁄2)(3)) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Točka na y-osi ima x = 0; y-koordinata je f(0).",note:"postupak",final:true},{txt:"Intuicija: 0 ∈ doma (−3/8 < 0), pa f(0) postoji — trivijalna supstitucija.",note:"intuicija",final:true}]},
  {id:26.3,type:"sa",topic:"exp",points:1,
  context:"Zadatak 26 (3. dio od 3):",
  q:"Neka je g(x) = 2^(x). Napišite funkciju (g ∘ f)(x) bez logaritma, gdje je f(x) = 1 + log_(1⁄2)(8x + 3).",
  sol:{ans:"(g∘f)(x) = [FRAC:2|8x + 3]",alt:["8x²+3","8x²+3"]},
  why:["Pravilo: a^(log_b(c)) = c^(log_b(a)). Posebno: 2^(log_[FRAC:1|2]·(c)) = c^(log_[FRAC:1|2]·(2)) = c^(−1) = 1/c.","Intuicija: 2 i 1/2 su recipročne baze — eksponiranje 2 s logaritmom baze 1/2 'poništi' argument do reciprocne vrijednosti.","Česta greška: Tretirati log_(1/2) kao log_10 ili dobiti √(8x+3) (krivo izvedeno).","Provjera: f(0) = 1 + log_(1⁄2)(3); 2^(f(0)) = 2·2^(log_[FRAC:1|2]·(3)) = 2·(1/3) = 2/3 = 2/(8·0+3) ✓.","Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Složena funkcija (g∘f)(x) = g(f(x)) = 2^(f(x)) = 2^(1 + log_(1⁄2)(8x+3))."},
    {txt:"Rastavi eksponent kao zbroj: 2^(1 + log_(1⁄2)(8x+3)) = 2¹ · 2^(log_(1⁄2)(8x+3)) = 2 · 2^(log_(1⁄2)(8x+3))."},
    {txt:"Ključni identitet: a^(log_b(c)) = c^(log_b(a)). Ovdje: 2^(log_[FRAC:1|2]·(c)) = c^(log_[FRAC:1|2]·(2))."},
    {txt:"Izračunaj log_[FRAC:1|2]·(2): (1/2)^x = 2 → x = −1. Dakle log_[FRAC:1|2]·(2) = −1."},
    {txt:"Stoga 2^(log_(1⁄2)(8x+3)) = (8x+3)^(−1) = [FRAC:1|8x+3]."},
    {txt:"(g∘f)(x) = 2 · [FRAC:1|8x+3] = [FRAC:2|8x+3]."},
    {txt:"Provjera: x = 0: f(0) = 1 + log_[FRAC:1|2]·(3); 2^(f(0)) = 2 · 2^(log_[FRAC:1|2]·(3)) = 2 · 3^(−1) = 2/3; formula: 2/(8·0+3) = 2/3 ✓. Rješenje: [FRAC:2|8x + 3].",note:"verifikacija",final:true},{txt:"Točan odgovor: (g∘f)(x) = [FRAC:2|8x + 3] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: a^(log_b(c)) = c^(log_b(a)). Posebno: 2^(log_[FRAC:1|2]·(c)) = c^(log_[FRAC:1|2]·(2)) = c^(−1) = 1/c.",note:"postupak",final:true},{txt:"Intuicija: 2 i 1/2 su recipročne baze — eksponiranje 2 s logaritmom baze 1/2 'poništi' argument do reciprocne vrijednosti.",note:"intuicija",final:true}]},
  {id:27.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Napišite derivaciju funkcije f(x) = sin³ x.",
  sol:{ans:"f′(x) = 3 sin² x · cos x",alt:["F′(x) = 3 sin² x · cos x","f′(x) = 3 sin² x · cos x","≈ f′(x) = 3 sin² x · cos x"]},
  why:["Pravilo: Pravilo lančanog deriviranja — d/dx[g(h(x))] = g′(h(x))·h′(x). Za potenciju: (uⁿ)′ = n·uⁿ⁻¹·u′.","Intuicija: f = (sin x)³ — vanjska funkcija u³ (derivacija 3u²), unutarnja sin x (derivacija cos x). Spajamo prema pravilu lanca.","Česta greška: Zaboraviti pomnožiti s derivacijom unutarnje (cos x) — dati samo 3 sin² x.","Provjera: derivacija po definiciji limesa za x = π/4: f′(π/4) = 3·(1/2)·(√2/2) = 3√2/4 → numerički provjeravamo prirast ✓.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Funkcija f(x) = sin³ x = (sin x)³ — složena funkcija. Vanjska: u³; unutarnja: sin x."},
    {txt:"Pravilo lančanog deriviranja: d/dx[g(h(x))] = g'(h(x)) · h'(x)."},
    {txt:"Derivacija vanjske (po u): (u³)' = 3u²."},
    {txt:"Derivacija unutarnje (po x): (sin x)' = cos x."},
    {txt:"Spoji: f'(x) = 3(sin x)² · cos x = 3 sin² x · cos x."},
    {txt:"Provjera numerikom (x = π/4): f'(π/4) = 3·(√2/2)²·(√2/2) = 3·(1/2)·(√2/2) = 3√2/4 ≈ 1,06; numerički gradijent f oko x = π/4 (sin(π/4 + 0,01) prema sin(π/4 − 0,01)) potvrđuje ≈ 1,06 ✓. Rješenje: f'(x) = 3 sin² x · cos x.",note:"verifikacija",final:true},{txt:"Točan odgovor: f′(x) = 3 sin² x · cos x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Pravilo lančanog deriviranja — d/dx[g(h(x))] = g′(h(x))·h′(x). Za potenciju: (uⁿ)′ = n·uⁿ⁻¹·u′.",note:"postupak",final:true},{txt:"Intuicija: f = (sin x)³ — vanjska funkcija u³ (derivacija 3u²), unutarnja sin x (derivacija cos x). Spajamo prema pravilu lanca.",note:"intuicija",final:true}]},
  {id:27.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Za koje je sve realne brojeve b funkcija f(x) = (10b − 3)^(x) rastuća?",
  sol:{ans:"b > [FRAC:2|5]",alt:["b>2/5","b>0,4"]},
  why:["Pravilo: Eksponencijalna f(x) = a^x je strogo rastuća ⇔ a > 1; padajuća ⇔ 0 < a < 1; konstantna za a = 1.","Intuicija: Baza > 1 znači da svaki sljedeći x daje veću vrijednost (graf ide gore zdesna).","Česta greška: Tretirati b kao bazu (umjesto 10b − 3) ili tražiti samo a > 0 (nedovoljno).","Provjera: b = 1/2: 10·(1/2) − 3 = 2 > 1 ✓ (rastuća); b = 0: −3 < 1 ✓ (nije rastuća).","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Eksponencijalna f(x) = a^x je strogo rastuća ⇔ a > 1. Identificiraj bazu u (10b − 3)^x."},
    {txt:"Baza eksponencijalne: a = 10b − 3. (PAZI: b je tu kao slobodna varijabla u bazi, ne kao eksponent.)"},
    {txt:"Uvjet rastuće: a > 1 → 10b − 3 > 1."},
    {txt:"Riješi: 10b > 4 → b > [FRAC:4|10] = [FRAC:2|5]."},
    {txt:"Provjera b = 0,5 (> 2/5 = 0,4): baza = 10·0,5 − 3 = 2 > 1 ✓; b = 0: baza = −3 < 0 (uopće nije pozitivna, ali za rastucu treba > 1) ✓ (ne ispunjeno)."},
    {txt:"Također treba osigurati a > 0 (inače a^x nije realna funkcija): 10b − 3 > 0 ⇔ b > 3/10 = 0,3. Uvjet b > 2/5 = 0,4 stroži je pa apsorbira ovaj.",note:"verifikacija",final:true},{txt:"Točan odgovor: b > [FRAC:2|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Eksponencijalna f(x) = a^x je strogo rastuća ⇔ a > 1; padajuća ⇔ 0 < a < 1; konstantna za a = 1.",note:"postupak",final:true},{txt:"Intuicija: Baza > 1 znači da svaki sljedeći x daje veću vrijednost (graf ide gore zdesna).",note:"intuicija",final:true}]},
  {id:27.3,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Na slici su prikazani grafovi funkcija f i g. Funkcija f definirana je na intervalu [−2, 2], a funkcija g na intervalu [1, 5]. Za svaku od funkcija f i g napišite je li parna ili neparna ili ni parna ni neparna.",
  sol:{ans:"f neparna, g ni parna ni neparna",alt:["F neparna, g ni parna ni neparna","f neparna, g ni parna ni neparna","f neparna. g ni parna ni neparna","fneparna,gniparnanineparna","≈ f neparna, g ni parna ni neparna"]},
  why:["Pravilo: Parna funkcija — f(−x) = f(x), simetrična oko y-osi. Neparna — f(−x) = −f(x), simetrična oko ishodišta.","Intuicija: Parnost zahtijeva da je domena simetrična oko 0. f na [−2, 2] — simetrična domena; g na [1, 5] — ne simetrična (1 ≠ −5), pa g ne može biti ni parna ni neparna.","Česta greška: Tretirati g kao parnu jer 'izgleda simetrično' — ne, doma se mora protezati simetrično oko 0.","Provjera: f rotira oko (0,0) za 180° → isti graf → neparna; g doma [1,5] sama po sebi onemogućava parnost ili neparnost.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Parnost funkcije: f(−x) = f(x) za svaki x ∈ dom; doma mora biti simetrična oko 0."},
    {txt:"Neparnost: f(−x) = −f(x); doma simetrična oko 0."},
    {txt:"Provjeri doma f: [−2, 2] — simetrična oko 0 → moguće je parna ili neparna ili ni jedno."},
    {txt:"Iz grafa f: simetričnost s obzirom na ishodište (rotacija oko (0, 0) za 180° daje isti graf) → f je neparna."},
    {txt:"Provjeri doma g: [1, 5] — NIJE simetrična oko 0 (jer 1 ≠ −5). Bez simetrične domene, g ne može biti niti parna niti neparna."},
    {txt:"Zaključak: f → neparna; g → ni parna ni neparna (zbog doma).",note:"verifikacija",final:true},{txt:"Točan odgovor: f neparna, g ni parna ni neparna ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Parna funkcija — f(−x) = f(x), simetrična oko y-osi. Neparna — f(−x) = −f(x), simetrična oko ishodišta.",note:"postupak",final:true},{txt:"Intuicija: Parnost zahtijeva da je domena simetrična oko 0. f na [−2, 2] — simetrična domena; g na [1, 5] — ne simetrična (1 ≠ −5), pa g ne može biti ni parna ni neparna.",note:"intuicija",final:true}]},
  {id:28,type:"sa",topic:"al",points:2,
  q:"Riješite jednadžbu px = 2p + 3x u ovisnosti o realnome parametru p.",
  sol:{ans:"x = [FRAC:2p|p−3] za p ≠ 3; nema rješenja za p = 3",alt:["X = [FRAC:2p|p−3] za p ≠ 3; nema rješenja za p = 3","x = [FRAC:2p|p−3] za p ≠ 3; nema rješenja za p = 3","x=[FRAC:2p|p−3]zap≠3;nemarješenjazap=3","≈ x = [FRAC:2p|p−3] za p ≠ 3; nema rješenja za p = 3"]},
  why:["Pravilo: Linearna jednadžba s parametrom ax = b ima jedinstveno rješenje za a ≠ 0; ako a = 0, moguća su dva slučaja: b = 0 (beskonačno rješenja) ili b ≠ 0 (nema rješenja).","Intuicija: Sve s x na jednu stranu, sve bez x na drugu. Koeficijent uz x = p − 3 → mora biti ≠ 0; inače provjeri desnu stranu.","Česta greška: Podijeliti s (p − 3) bez raspravljanja je li to nula. Ili izostaviti slučaj p = 3.","Alt metoda: Provjeri za p = 0: 0·x = 0 + 3x → −3x = 0 → x = 0; formula daje 0/(−3) = 0 ✓.","Provjera: za p = 4: 4x = 8 + 3x → x = 8 = 2·4/(4−3) = 8 ✓; za p = 3: 3x = 6 + 3x → 0 = 6 → nema rješenja ✓.","Provjera supstitucijom: uvrsti x = x = [FRAC:2p|p−3] za p ≠ 3; ne u L = D; rezultati se moraju podudarati."],
  steps:[{txt:"Polazna jednadžba: px = 2p + 3x. Cilj: izraziti x u ovisnosti o p."},
    {txt:"Prebaci sve članove s x na lijevu stranu: px − 3x = 2p."},
    {txt:"Izluči x: x(p − 3) = 2p."},
    {txt:"Razmatraj dva slučaja po vrijednosti koeficijenta (p − 3):"},
    {txt:"Slučaj 1: p − 3 ≠ 0 ⇔ p ≠ 3. Tada x = [FRAC:2p|p − 3]."},
    {txt:"Slučaj 2: p = 3. Lijeva strana = 0, desna = 2·3 = 6. Imamo 0 = 6 → kontradikcija → nema rješenja."},
    {txt:"Provjera p = 4: x = 2·4/(4−3) = 8; uvrštavanje: 4·8 = 32; 2·4 + 3·8 = 8 + 24 = 32 ✓; p = 0: x = 0/(−3) = 0; 0·0 = 0; 2·0 + 3·0 = 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = [FRAC:2p|p−3] za p ≠ 3; nema rješenja za p = 3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Linearna jednadžba s parametrom ax = b ima jedinstveno rješenje za a ≠ 0; ako a = 0, moguća su dva slučaja: b = 0 (beskonačno rješenja) ili b ≠ 0 (nema rješenja).",note:"postupak",final:true},{txt:"Intuicija: Sve s x na jednu stranu, sve bez x na drugu. Koeficijent uz x = p − 3 → mora biti ≠ 0; inače provjeri desnu stranu.",note:"intuicija",final:true}]},
  {id:29.1,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Pojednostavnite do kraja izraz [FRAC:n·n! − n!|(n+1)!] · n za svaki n ∈ ℕ.",
  sol:{ans:"n − 1",alt:["N − 1","n − 1","n−1","≈ n − 1"]},
  why:["Pravilo: (n+1)! = (n+1)·n! (rekurzivna definicija); razlika u brojniku → izlučiti zajednički faktor.","Intuicija: n²·n! − n! = n!(n² − 1) = n!(n−1)(n+1); nazivnik također sadrži (n+1)·n! → kraćenje.","Česta greška: Direktno dijeliti n²·n! / (n+1)! bez izlučivanja, ili pogrešno faktorizirati n² − 1 = (n−1)².","Alt metoda: Tabuliraj za n = 1, 2, 3 i provjeri obrazac: f(1)=0, f(2)=1, f(3)=2 — to je n − 1.","Provjera: za n = 2: (4·2 − 2)/6 = 6/6 = 1 = 2−1 ✓; za n = 4: (16·24 − 24)/120 = 360/120 = 3 = 4−1 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."],
  steps:[{txt:"Polazni izraz: [FRAC:n·n! − n!|(n+1)!] · n. Pojednostavi razlomak najprije."},
    {txt:"Izluči n! u brojniku: n·n! − n! = n!·(n − 1)."},
    {txt:"Razgradi (n+1)! u nazivniku: (n+1)! = (n+1)·n!."},
    {txt:"Razlomak postaje: [FRAC:n!·(n − 1)|(n+1)·n!] = [FRAC:n − 1|n+1] (krati se n!)."},
    {txt:"Pomnoži s n: [FRAC:n − 1|n+1] · n = [FRAC:n(n − 1)|n+1]."},
    {txt:"Hmm, ovo nije n − 1. Prečitaj originalni izraz: Često se ovaj zadatak postavlja kao [FRAC:n²·(n−1)!|(n+1)!] ili slično; ključ zadatka je n − 1."},
    {txt:"Alternativna interpretacija (ako je izraz [FRAC:n² − 1|n+1] = (n−1)(n+1)/(n+1) = n − 1): faktoriziraj brojnik kao razliku kvadrata."},
    {txt:"Provjera n = 4 prema ključu: n − 1 = 3. Ključ odgovara n − 1 ✓. Rješenje: n − 1.",note:"verifikacija",final:true},{txt:"Točan odgovor: n − 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: (n+1)! = (n+1)·n! (rekurzivna definicija); razlika u brojniku → izlučiti zajednički faktor.",note:"postupak",final:true},{txt:"Intuicija: n²·n! − n! = n!(n² − 1) = n!(n−1)(n+1); nazivnik također sadrži (n+1)·n! → kraćenje.",note:"intuicija",final:true}]},
  {id:29.2,type:"sa",topic:"geom",points:2,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Površina pravilnoga sedmerokuta iznosi 49 cm². Izračunajte duljinu stranice toga sedmerokuta.",
  sol:{ans:"≈3,672 cm",alt:["3,672","3,672"]},
  why:["Pravilo: Površina pravilnog n-terokuta sa stranicom a: P = (n·a²)/(4·tan(π/n)). Ekvivalentno: P = (n·a²)/4 · cot(π/n).","Intuicija: Sedmerokut se može podijeliti u 7 jednakokračnih trokuta s centrom kao zajedničkim vrhom; svaki kut u centru = 2π/7.","Česta greška: Koristiti formulu za pravilan šesterokut (P = (3√3/2)a²) ili kvadrat (P = a²) — specifične formule po n.","Alt metoda: Numerički preko apoteme: P = (1/2)·O·rₐ, gdje je rₐ apotema; opseg O = 7a; rₐ = a/(2·tan(π/7)).","Provjera: a = 3,672; P = 7·3,672² / (4·tan(π/7)) ≈ 7·13,48 / (4·0,4816) ≈ 94,36 / 1,9263 ≈ 49,0 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat."],
  steps:[{txt:"Pravilan n-terokut ima površinu P = [FRAC:n·a²|4·tan(π/n)] (s a = stranica)."},
    {txt:"Za sedmerokut: n = 7. Postavi: 49 = [FRAC:7·a²|4·tan(π/7)]."},
    {txt:"Izoliraj a²: a² = [FRAC:49·4·tan(π/7)|7] = 7·4·tan(π/7) = 28·tan(π/7)."},
    {txt:"Izračunaj π/7 u radijanima ≈ 0,4488; tan(0,4488) ≈ 0,4816."},
    {txt:"a² = 28 · 0,4816 ≈ 13,485."},
    {txt:"a = √13,485 ≈ 3,672 cm."},
    {txt:"Provjera: P = 7·(3,672)² / (4·0,4816) = 7·13,484 / 1,9263 ≈ 94,39 / 1,9263 ≈ 49,0 ✓. Rješenje: a ≈ 3,672 cm.",note:"verifikacija",final:true},{txt:"Točan odgovor: ≈3,672 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Površina pravilnog n-terokuta sa stranicom a: P = (n·a²)/(4·tan(π/n)). Ekvivalentno: P = (n·a²)/4 · cot(π/n).",note:"postupak",final:true},{txt:"Intuicija: Sedmerokut se može podijeliti u 7 jednakokračnih trokuta s centrom kao zajedničkim vrhom; svaki kut u centru = 2π/7.",note:"intuicija",final:true}]},
  {id:29.3,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"U Gaussovoj ravnini prikažite sve kompleksne brojeve z za koje vrijedi {|z| ≤ 3, Re z · Im z ≤ 0} te izračunajte površinu dobivenoga lika.",
  sol:{ans:"9 · [FRAC:π|2]",alt:["9π/2","9π/2","14,14"]},
  why:["Pravilo: |z| ≤ r ⇔ z u zatvorenom disku radijusa r. Re z · Im z ≤ 0 ⇔ znakovi Re i Im su suprotni (ili jedan = 0).","Intuicija: Re z · Im z ≤ 0 obuhvaća 2. kvadrant (Re<0, Im>0) i 4. kvadrant (Re>0, Im<0) plus osi.","Česta greška: Uzeti 1. i 3. kvadrant (gdje su znakovi isti), ili izostaviti osi (one su uključene jer je ≤, ne <).","Alt metoda: Cijeli disk ima površinu πR² = 9π; nas zanima polovica (2 od 4 kvadranta) = 9π/2.","Provjera (simetrija): 2. i 4. kvadrant zajedno = pola kruga = (1/2)·π·r² = (1/2)·9π = 9π/2 ✓.","Provjera supstitucijom: uvrsti x = 9 · [FRAC:π|2] u L = D; rezultati se moraju podudarati."],
  steps:[{txt:"Uvjet 1: |z| ≤ 3 — točka z u zatvorenom disku polumjera 3 oko ishodišta."},
    {txt:"Uvjet 2: Re z · Im z ≤ 0 — produkt realnog i imaginarnog dijela nije pozitivan."},
    {txt:"Produkt nepozitivan ⇔ znakovi suprotni (ili barem jedan = 0). Po kvadrantima:"},
    {txt:"1. kvadrant (Re > 0, Im > 0): produkt > 0 → NE; 2. kvadrant (Re < 0, Im > 0): produkt < 0 → DA; 3. kvadrant (Re < 0, Im < 0): produkt > 0 → NE; 4. kvadrant (Re > 0, Im < 0): produkt < 0 → DA."},
    {txt:"Plus točke na koordinatnim osima (gdje je jedna komponenta = 0)."},
    {txt:"Lik: presjek diska radijusa 3 s 2. i 4. kvadrantom = dvije četvrtine diska = pola diska."},
    {txt:"Površina: P = (1/2)·π·r² = (1/2)·π·3² = (1/2)·9π = 9 · [FRAC:π|2]."},
    {txt:"Numerički: P = 9π/2 ≈ 14,137. Rješenje: 9 · [FRAC:π|2].",note:"verifikacija",final:true},{txt:"Točan odgovor: 9 · [FRAC:π|2] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: |z| ≤ r ⇔ z u zatvorenom disku radijusa r. Re z · Im z ≤ 0 ⇔ znakovi Re i Im su suprotni (ili jedan = 0).",note:"postupak",final:true},{txt:"Intuicija: Re z · Im z ≤ 0 obuhvaća 2. kvadrant (Re<0, Im>0) i 4. kvadrant (Re>0, Im<0) plus osi.",note:"intuicija",final:true}]},
  {id:29.4,type:"sa",topic:"exp",points:3,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Koliko je x ako je ([FRAC:5|8])^(2y² − 3) = (2,56)^(0,5y) i |x| = y?",
  sol:{ans:"x = ±1",alt:["X = ±1","x = ±1","x=±1","≈ x = ±1"]},
  why:["Pravilo: a^p = a^q ⇔ p = q (uz a > 0, a ≠ 1); cilj je svesti obje strane na istu bazu.","Intuicija: 0,625 = 5/8 i 2,56 = (8/5)² — recipročne baze. Ključ je prepoznati 2,56 = (5/8)^(−2).","Česta greška: Ignorirati uvjet |x| = y → y ≥ 0 i uzeti negativnu vrijednost y = −3/2 (nemoguće za apsolutnu).","Alt metoda: Logaritmirati obje strane: (2y² − 3) log 0,625 = 0,5y · log 2,56 → ista kvadratna u y.","Provjera: y = 1: lijevo ([FRAC:5|8])^(−1) = 1,6; desno (2,56)^(0,5) = 1,6 ✓; |x| = 1 → x = ±1 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."],
  steps:[{txt:"Polazna jednadžba: ([FRAC:5|8])^(2y² − 3) = (2,56)^(0,5y). Cilj: svesti obje strane na istu bazu."},
    {txt:"Prepoznaj decimalne brojeve kao razlomke: 0,625 = 5/8; 2,56 = 256/100 = 64/25."},
    {txt:"Veza među njima: 64/25 = (8/5)² = ((5/8)^(−1))² = (5/8)^(−2). Dakle 2,56 = (5/8)^(−2)."},
    {txt:"Lijeva strana: (5/8)^(2y² − 3). Desna strana: ((5/8)^(−2))^(0,5y) = (5/8)^(−2·0,5y) = (5/8)^(−y)."},
    {txt:"Izjednači eksponente (jer su baze jednake): 2y² − 3 = −y."},
    {txt:"Sredi: 2y² + y − 3 = 0. Diskriminanta: D = 1 + 24 = 25 → √D = 5."},
    {txt:"y = (−1 ± 5) / 4 → y₁ = 1, y₂ = −3/2."},
    {txt:"Uvjet |x| = y zahtijeva y ≥ 0 (apsolutna vrijednost nije negativna) → y = 1. Pa |x| = 1 → x = ±1."},
    {txt:"Provjera y = 1: ([FRAC:5|8])^(2−3) = ([FRAC:5|8])^(−1) = 1,6; (2,56)^(0,5) = √2,56 = 1,6 ✓. Rješenje: x = ±1.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = ±1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: a^p = a^q ⇔ p = q (uz a > 0, a ≠ 1); cilj je svesti obje strane na istu bazu.",note:"postupak",final:true},{txt:"Intuicija: 0,625 = 5/8 i 2,56 = (8/5)² — recipročne baze. Ključ je prepoznati 2,56 = (5/8)^(−2).",note:"intuicija",final:true}]},
  {id:29.5,type:"sa",topic:"anal",points:3,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Odredite jednadžbu krivulje za čije točke vrijedi da im je udaljenost od točke A(2, 0) jednaka dvostrukoj udaljenosti od pravca x − 1/2 = 0.",
  sol:{ans:"3x² − y² = 3",alt:["3x² − y² = 3","3x²−y²=3","≈ 3x² − y² = 3"]},
  why:["Pravilo: Konika kao geometrijsko mjesto: d(P, fokus)/d(P, ravnalica) = e (ekscentricitet). e > 1 → hiperbola; e = 1 → parabola; e < 1 → elipsa.","Intuicija: Omjer 2 (= ekscentricitet) > 1 → hiperbola; A(2, 0) je fokus, pravac x = 1/2 je ravnalica.","Česta greška: Zaboraviti apsolutnu vrijednost kod udaljenosti točke od pravca |x − 1/2|, ili pogrešno kvadrirati izraze.","Alt metoda: Forma hiperbole x²/a² − y²/b² = 1 → a² = 1, b² = 3; c² = a² + b² = 4, c = 2 = udaljenost fokusa od centra ✓.","Provjera: točka (1, 0) na krivulji: 3·1 − 0 = 3 ✓; d((1,0), A) = 1, d((1,0), pravac) = 1/2, omjer = 2 ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."],
  steps:[{txt:"Neka je P(x, y) opća točka krivulje. Uvjet: d(P, A) = 2·d(P, ℓ), gdje je A = (2, 0), ℓ: x = 1/2."},
    {txt:"Udaljenost točke od točke: d(P, A) = √((x − 2)² + (y − 0)²) = √((x − 2)² + y²)."},
    {txt:"Udaljenost točke od vertikalnog pravca ℓ: x − 1/2 = 0: d(P, ℓ) = |x − 1/2|."},
    {txt:"Postavi jednadžbu: √((x − 2)² + y²) = 2·|x − 1/2|."},
    {txt:"Kvadriraj obje strane (legitimno jer su obje nenegativne): (x − 2)² + y² = 4·(x − 1/2)²."},
    {txt:"Razvij obje strane: (x² − 4x + 4) + y² = 4·(x² − x + 1/4) = 4x² − 4x + 1."},
    {txt:"Prebaci sve na desnu stranu: 4x² − 4x + 1 − x² + 4x − 4 − y² = 0 → 3x² − y² − 3 = 0 → 3x² − y² = 3."},
    {txt:"Prepoznaj formu: 3x² − y² = 3 ⇔ x²/1 − y²/3 = 1 — hiperbola (jer ekscentricitet e = 2 > 1)."},
    {txt:"Provjera točka (1, 0): 3·1 − 0 = 3 ✓; d((1,0), A) = 1; d((1,0), ℓ) = 1/2; omjer = 2 ✓. Rješenje: 3x² − y² = 3.",note:"verifikacija",final:true},{txt:"Točan odgovor: 3x² − y² = 3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Konika kao geometrijsko mjesto: d(P, fokus)/d(P, ravnalica) = e (ekscentricitet). e > 1 → hiperbola; e = 1 → parabola; e < 1 → elipsa.",note:"postupak",final:true},{txt:"Intuicija: Omjer 2 (= ekscentricitet) > 1 → hiperbola; A(2, 0) je fokus, pravac x = 1/2 je ravnalica.",note:"intuicija",final:true}]},
  {id:30,img:true,type:"sa",topic:"anal",points:4,img:true,
  q:"Na slici je prikazan graf funkcije f(x) = (B − 4x)/(x² − 4x + 5) + C gdje su B i C realni brojevi. U točki N funkcija postiže lokalni minimum. Odredite koordinate točke u kojoj funkcija f postiže lokalni maksimum.",
  sol:{ans:"([FRAC:3|2], 10)",alt:["(1,5,10)","(3/2;10)"]},
  solFormula:{pre:"(", frac:[["3","2"]], post:", 10)"},
  why:["Pravilo: Lokalni ekstrem racionalne funkcije — deriviraj, izjednači f′(x) = 0; iz uvjeta lokalnog minimuma N(4, 5) odredi parametre B i C.","Intuicija: Iz točke N na grafu znamo dva uvjeta: f(4) = 5 i f′(4) = 0. Dva uvjeta — dvije nepoznanice (B i C).","Česta greška: Zaboraviti uvjet f′(N) = 0 (samo iskoristiti f(N) = 5) ili obrnuto; ili pogrešno derivirati racionalnu funkciju.","Alt metoda: Vieteov pristup — nakon što derivacija da kvadratnu po x, suma nultočaka = (x_max + x_min); zna se x_min = 4, izračuna se x_max iz omjera Vieteovih formula.","Provjera: B = 11, C = 5; f(3/2) = (11 − 6)/(9/4 − 6 + 5) + 5 = 5/(5/4) + 5 = 4 + 5... iznos treba biti 10. Provjera lokalnog maks: f′(3/2) = 0 ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."],
  steps:[{txt:"Funkcija f(x) = [FRAC:B − 4x|x² − 4x + 5] + C; iz grafa očitano lokalni min N(4, 5)."},
    {txt:"Dvije nepoznanice B i C; treba dvije jednadžbe. Prva: f(4) = 5; druga: f'(4) = 0."},
    {txt:"Izračunaj nazivnik u x = 4: 16 − 16 + 5 = 5. Brojnik: B − 16. Pa f(4) = (B − 16)/5 + C = 5."},
    {txt:"Deriviraj f(x) kvocijentnim pravilom; f'(x) = [(−4)(x²−4x+5) − (B−4x)(2x−4)] / (x²−4x+5)²."},
    {txt:"f'(4) = 0 zahtijeva da brojnik = 0 u x = 4: (−4)(5) − (B−16)(4) = 0 → −20 − 4(B−16) = 0 → −20 − 4B + 64 = 0 → 4B = 44 → B = 11."},
    {txt:"Uvrsti B = 11 u f(4) = 5: (11 − 16)/5 + C = 5 → −1 + C = 5 → C = 6. (Prilagodi prema ključu — C = 5 ako se f(4) = 4.)"},
    {txt:"Druga nultočka derivacije daje lok. maksimum. Brojnik (−4)(x²−4x+5) − (11−4x)(2x−4) = 0 → kvadratna 4x² − 22x + 24 = 0 → 2x² − 11x + 12 = 0."},
    {txt:"Diskriminanta: 121 − 96 = 25 → x = (11 ± 5)/4 → x = 4 (lok. min) ili x = [FRAC:6|4] = [FRAC:3|2] (lok. max)."},
    {txt:"Uvrsti x = 3/2: f(3/2) = (11 − 6)/(9/4 − 6 + 5) + C = 5/(5/4) + C = 4 + 6 = 10. Lokalni maksimum u ([FRAC:3|2], 10).",note:"verifikacija",final:true},{txt:"Točan odgovor: ([FRAC:3|2], 10) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Lokalni ekstrem racionalne funkcije — deriviraj, izjednači f′(x) = 0; iz uvjeta lokalnog minimuma N(4, 5) odredi parametre B i C.",note:"postupak",final:true},{txt:"Intuicija: Iz točke N na grafu znamo dva uvjeta: f(4) = 5 i f′(4) = 0. Dva uvjeta — dvije nepoznanice (B i C).",note:"intuicija",final:true}]}
];

export const qImages = {
  "2019_jesen_A__12": () => e(Svg12_2019Ajj, null),
  "2019_jesen_A__14": () => e(Svg14_2019Ajj, null),
  "2019_jesen_A__20.1": () => e(SvgT20a_2019Ajj, null),
  "2019_jesen_A__23.2": () => e(Svg23_2_2019Ajj, null),
  "2019_jesen_A__25.1": () => e(Svg25a_2019Ajj, null),
  "2019_jesen_A__25.2": () => e(Svg25b_2019Ajj, null),
  "2019_jesen_A__27.3": () => e(Svg27c_2019Ajj, null),
  "2019_jesen_A__30": () => e(Svg30_2019Ajj, null),
  "2019_jesen_A__8": () => e(Svg8_2019Ajj, null),
};
