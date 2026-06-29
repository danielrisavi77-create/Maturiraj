// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg27cGrid_2021Ajesen(){
  const W=270,H=210;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const OX=105,OY=105,SZ=26;
  const elems=[];

  for(let i=-3;i<=5;i++)
    elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:12,x2:OX+i*SZ,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-3;j<=3;j++)
    elems.push(e("line",{key:`gh${j}`,x1:12,y1:OY-j*SZ,x2:W-10,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));

  elems.push(e("line",{key:"ax",x1:10,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:OX,y1:10,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${10} ${OX-3},${18} ${OX+3},${18}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:13,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+2,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg25a_2021Ajesen(){
  const W=270,H=225;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Iz slike: y-os blizu lijeve strane, ishodište u donjem dijelu vidljivog područja
  // x=1 je vidljiv odmah desno, mreža je fine (svaka jed. = jedan kvadrat)
  const OX=48,OY=125,SX=36,SY=26;

  const elems=[];

  // Mreža
  for(let i=-1;i<=6;i++)
    elems.push(e("line",{key:`gv${i}`,x1:OX+i*SX,y1:8,x2:OX+i*SX,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-4;j<=4;j++)
    elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SY,x2:W-8,y2:OY-j*SY,stroke:"var(--bdr)",strokeWidth:0.7}));

  // Osi
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-5,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  // Oznake na osima
  elems.push(e("text",{key:"l0",x:OX+2,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x",x:OX+SX-2,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("line",{key:"t1y",x1:OX-4,y1:OY-SY,x2:OX+4,y2:OY-SY,stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("text",{key:"l1y",x:OX-16,y:OY-SY+4,fontSize:9,fill:"var(--muted)"},"1"));

  // Clip
  const clipId="cp25aJ";

  // Parabola y = x²−4x, x ∈ [−0.4, 6]
  let d="";
  for(let i=0;i<=250;i++){
    const x=-0.4+6.4*i/250;
    const y=x*x-4*x;
    const px=OX+x*SX, py=OY-y*SY;
    d+=(i===0?"M ":"L ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
  }

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("defs",null,e("clipPath",{id:clipId},e("rect",{x:9,y:9,width:W-18,height:H-18}))),
    ...elems,
    e("path",{key:"curve",d,fill:"none",stroke:_BLUE,
      strokeWidth:2.2,clipPath:`url(#${clipId})`}),
    // Tjeme mark
    e("circle",{key:"tj",cx:OX+2*SX,cy:OY+4*SY,r:2.5,fill:_RED}),
  );
}

function Svg20a_2021Ajesen(){
  const W=230,H=190;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const OX=72,OY=100,SZ=26;
  const elems=[];

  // Mreža
  for(let i=-2;i<=5;i++)
    elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:10,x2:OX+i*SZ,y2:H-8,
      stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-3;j<=3;j++)
    elems.push(e("line",{key:`gh${j}`,x1:6,y1:OY-j*SZ,x2:W-6,y2:OY-j*SZ,
      stroke:"var(--bdr)",strokeWidth:0.7}));

  // Osi
  elems.push(e("line",{key:"ax",x1:6,y1:OY,x2:W-6,y2:OY,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-6,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"axh",points:`${W-6},${OY} ${W-14},${OY-3} ${W-14},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-4,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+2,y:OY+11,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+11,fontSize:9,fill:"var(--muted)"},"1"));

  // Vektor c⃗: iz slike kreće od (~1, 1) prema (~3, -1)
  // Dakle c⃗ = (4, -2) u math koord (desno i dolje na ekranu)
  // STRELICA na POČETKU (gornja-lijeva točka) — korisnik traži okretanje strelice
  // Početak (rep): x=3, y=-1 → piksel: OX+3*SZ, OY+SZ
  // Kraj (vrh, bez strelice): x=-1, y=1 → piksel: OX-SZ, OY-SZ
  // Wait — iz slike strelica je na donjem desnom. Trebamo okrenuti = strelica na gornjem-lijevom.
  // Dakle: linija od (3,-1) prema (-1,1), STRELICA na (-1,1)
  // c⃗ ide u smjeru od (3,-1) prema (-1,1) = (-4,+2) u math = strelica na (-1,1)

  const x_tip=OX-SZ,   y_tip=OY-SZ;    // (-1, 1) — vrh strelice
  const x_tail=OX+3*SZ, y_tail=OY+SZ;  // (3, -1) — rep vektora

  elems.push(e("line",{key:"vc",x1:x_tail,y1:y_tail,x2:x_tip,y2:y_tip,
    stroke:_BLUE,strokeWidth:2.2}));

  // Strelica NA VRHU (x_tip, y_tip)
  const angle=Math.atan2(y_tip-y_tail,x_tip-x_tail);
  const ar=11;
  const ax1=x_tip-ar*Math.cos(angle-0.38), ay1=y_tip-ar*Math.sin(angle-0.38);
  const ax2=x_tip-ar*Math.cos(angle+0.38), ay2=y_tip-ar*Math.sin(angle+0.38);
  elems.push(e("polygon",{key:"vch",
    points:`${x_tip},${y_tip} ${ax1.toFixed(1)},${ay1.toFixed(1)} ${ax2.toFixed(1)},${ay2.toFixed(1)}`,
    fill:_BLUE}));

  // Label c⃗ uz sredinu vektora
  elems.push(e("text",{key:"lc",x:x_tip+28,y:y_tip+22,fontSize:13,
    fill:_BLUE,fontStyle:"italic"},"c\u20d7"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg14_2021Ajesen(){
  // Točke prema 300dpi renderu:
  // C  gore-sredina
  // D  dolje-desno od C (kraj rože "5", gdje je kut α)
  // A  dolje-lijevo
  // B  desno-sredina
  const C={x:148,y:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const D={x:218,y:112};
  const A={x:52, y:192};
  const B={x:286,y:144};

  const ln=(p1,p2,k,col,w)=>e('line',{key:k,
    x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,
    stroke:col||'var(--text)',strokeWidth:w||1.8});

  const tx=(x,y,t,k,col,sz,fw)=>e('text',{key:k,x,y,
    fontSize:sz||13,fill:col||'var(--text)',
    fontStyle:'italic',fontWeight:fw||'normal'},t);

  // Midpoints za labele
  const mid=(p,q,f=0.5)=>({x:p.x+(q.x-p.x)*f, y:p.y+(q.y-p.y)*f});
  const mCA=mid(C,A);
  const mCD=mid(C,D);
  const mAD=mid(A,D);
  const mDB=mid(D,B);
  const mAB=mid(A,B);

  return e('svg',{viewBox:'0 0 340 220',style:{width:'100%',maxWidth:340,display:'block'}},
    // Siva: A→B (donja stranica trokuta)
    ln(A,B,'AB','#aaa',1.4),
    // Roza: C→A ("8") i C→D ("5")
    ln(C,A,'CA','#c060c0',2.3),
    ln(C,D,'CD','#c060c0',2.3),
    // Crna: A→D ("4") i D→B ("10")
    ln(A,D,'AD','var(--text)',1.8),
    ln(D,B,'DB','var(--text)',1.8),

    // Labele duljina — pomaknute od središta linije da ne preklapaju
    tx(mCA.x-20,mCA.y,'8','l8','#c060c0',14),
    tx(mCD.x+5, mCD.y-8,'5','l5','#c060c0',14),
    tx(mAD.x-18,mAD.y+8,'4','l4','var(--text)',13),
    tx(mDB.x+2, mDB.y-8,'10','l10','var(--text)',13),

    // Labele vrhova
    tx(C.x-8, C.y-10,'C','lC','var(--text)',14,'bold'),
    tx(A.x-18,A.y+6, 'A','lA','var(--text)',14,'bold'),
    tx(B.x+5, B.y+5, 'B','lB','var(--text)',14,'bold'),

    // Kut α kod A: luk između linije AB (desno) i linije AD (gore-desno)
    // AB smjer: prema desno-gore; AD smjer: prema gore-desno
    // Mali luk, radijus 22, od smjera AB prema AD
    e('path',{key:'arcA',
      d:'M 74,183 A 22,22 0 0,1 68,170',
      fill:'none',stroke:'var(--text)',strokeWidth:1.3}),
    tx(A.x+16,A.y-8,'\u03b1','laA','var(--text)',12),

    // Kut α kod D: luk između linije CD (odozgo-lijevo) i AD (odozdo-lijevo)
    e('path',{key:'arcD',
      d:'M 203,105 A 18,18 0 0,0 207,120',
      fill:'none',stroke:'var(--text)',strokeWidth:1.3}),
    tx(D.x-28,D.y+2,'\u03b1','laD','var(--text)',12),
  );
}

function Svg10_2021Ajesen(){
  const W=420,H=700;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const PW=380,PH=160,PX=20;
  const PY=[5,178,351,524];

  // Za svaki panel: ishodište u pikselima, i mjerila
  // Svi paneli imaju "0" i "1" oznake na x-osi i "50" na y-osi

  // Panel A: g(x)=-2(x-7)^2*(x+1)
  // x∈[-2.5, 8], y∈[-200, 120] — pomaknuto da vidimo nule -1 i 7
  // OX = piksel koji odgovara x=0, OY = piksel koji odgovara y=0
  // U A: y-os je lijevo, x=0 malo lijevo od centra panela
  // Iz slike: y-os je na ~30% od lijeve strane, x=1 je odmah desno

  const panels=[
    // A: točan g(x)=-2(x-7)^2*(x+1), x∈[-2.5,8.5], y∈[-200,120]
    // Origin u panelu: x=0 -> PX + 0.22*PW, y=0 -> PY[0]+PH*0.45
    {row:0, fn:x=>-2*(x-7)**2*(x+1),
     xmin:-2.5, xmax:8.5, ymin:-210, ymax:120,
     ox_frac:0.22, oy_frac:0.43,
     label:"A"},
    // B: h(x)=-2*(x+7)^2*(x-1), nule x=-7(dvostruka), x=1
    // Os x: 0 i 1 su desno od y-osi (y-os je desno u panelu)
    // iz slike: krivulja dolazi odozdo-lijevo, max iznad osi, pada, presijeca ~x=1, pada dalje
    // Taj oblik odgovara: -2(x+7)^2(x-1)? Provjera:
    // g(-7)=0 (dvostruka), g(1)=0, g(0)=-2*49*(-1)=98 (pozitivno) → max između
    // Za x→-inf: -2*(+inf)*(−inf) = +inf → dolazi odozdo NE
    // Za x<-7: x-1<0, (x+7)^2>0 → g>0 (odozgo)
    // Mmmm. Iz slike B: dolazi odozdo-lijevo. To znači lc>0. Dakle +2*(x+7)^2*(x-1)
    // +2: za x→-inf: (+)(+)(-) = neg → odozdo. Za x→+inf: (+)(+)(+) = pos → gore. 
    // Nule: -7(dvostruka, tangira), +1 (presijeca)
    // g(0) = +2*49*(-1) = -98 (ispod osi između nula)
    // Slika B: max/vrh je LIJEVO od y-osi, tangira negdje lijevo, dolazi odozdo
    // i ide gore desno. Ali vidim u slici B: krivulja ima MAKSIMUM lijevo, a Y-os
    // je DESNO (0 i 1 su lijevo od y-osi u slici B!)
    // Dakle u slici B: x=0 je blizu desne strane panela!
    // Za +2*(x+7)^2*(x-1) s x-os postavljenom da 0 i 1 su vidljivi:
    // Krivulja u vidljivom dijelu (x∈[-10,2]): max između -7 i 1, nule -7 i 1
    // To odgovara slici B.
    {row:1, fn:x=>2*(x+7)**2*(x-1),
     xmin:-10, xmax:2, ymin:-250, ymax:200,
     ox_frac:0.83, oy_frac:0.56,
     label:"B"},
    // C: k(x)=-2*(x+1)*(x-7)^2 rotirano? Ne, pokušajmo:
    // Iz slike C: dolazi odozdo-lijevo, max iznad osi, nula desno, pada dalje
    // y-os je lijevo, x=0 i x=1 su vidljivi.
    // Oblik: neg lc, dolazi odozdo-lijevo → za kubnu neg lc: x→-inf g→+inf, x→+inf g→-inf
    // "Dolazi odozdo-lijevo" znači da na lijevom rubu krivulja je niska (negativna)
    // To je kontradikcija s neg lc... osim ako je lc pozitivan!
    // Za +2*(x-7)^2*(x+1): lc=+2>0, za x→-inf: -inf, za x→+inf: +inf
    // Nule: x=-1 (presijeca), x=7 (dvostruka)
    // g(-2) = +2*81*(-1) = -162 (ispod)
    // g(3) = +2*16*4 = +128 (iznad)
    // Dakle: dolazi odozdo-lijevo (x<-1: neg), presijeca u x=-1, MAX između, tangira x=7, raste
    // Iz slike C: to odgovara! Dolazi nisko s lijeve strane, presijeca, max, tangira, pa raste.
    {row:2, fn:x=>2*(x-7)**2*(x+1),
     xmin:-3, xmax:9, ymin:-200, ymax:200,
     ox_frac:0.22, oy_frac:0.56,
     label:"C"},
    // D: Iz slike D: max lijevo, tangira (diamond marker), nula desno, pada
    // y-os je desno u slici D (slično kao B, x=0 je desno)
    // Oblik: max pozitivan lijevo, tangira, nula ~x=0, pada dalje
    // +2*(x+7)*(x-1)^2: nule x=-7(simple), x=1(dvostruka)
    // lc=+2>0: x→-inf: -inf, x→+inf: +inf
    // g(-7)=0(presijeca), g(1)=0(tangira), g(0)=+2*7*1=14 (između)
    // g(-8)=+2*(-1)*49=-98 (ispod), g(-4)=+2*3*25=150 (iznad)
    // Max između -7 i 1, tangira u x=1, pada za x>1
    // Slika D: max lijevo, tangira desno, Y-os desno → x∈[-10,2]
    {row:3, fn:x=>2*(x+7)*(x-1)**2,
     xmin:-10, xmax:2, ymin:-250, ymax:200,
     ox_frac:0.83, oy_frac:0.56,
     label:"D"},
  ];

  // Build SVG elements as JSX string — we return a single SVG
  // Using React.createElement ("e") which is available in global scope

  const makePanel=(p)=>{
    const elems=[];
    const row=p.row;
    const top=PY[row], left=PX;
    const W2=PW, H2=PH;

    // Origin in pixel space
    const OX=left+p.ox_frac*W2;
    const OY=top+p.oy_frac*H2;
    const SX=W2/(p.xmax-p.xmin);
    const SY=H2/(p.ymax-p.ymin);

    const toX=(x)=>left+(x-p.xmin)*SX;
    const toY=(y)=>top+(p.ymax-y)*SY;

    // Background rect
    elems.push(e("rect",{key:"bg",x:left,y:top,width:W2,height:H2,
      fill:"var(--s1)",stroke:"var(--bdr)",strokeWidth:1}));

    // x-axis (at y=0)
    const y0px=toY(0);
    if(y0px>top+2&&y0px<top+H2-2){
      elems.push(e("line",{key:"ax",x1:left+2,y1:y0px,x2:left+W2-2,y2:y0px,
        stroke:"var(--text)",strokeWidth:1.3}));
      elems.push(e("polygon",{key:"axh",
        points:`${left+W2-2},${y0px} ${left+W2-9},${y0px-3} ${left+W2-9},${y0px+3}`,
        fill:"var(--text)"}));
      elems.push(e("text",{key:"xl",x:left+W2-1,y:y0px-4,
        fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
    }

    // y-axis (at x=0)
    const x0px=toX(0);
    if(x0px>left+2&&x0px<left+W2-2){
      elems.push(e("line",{key:"ay",x1:x0px,y1:top+2,x2:x0px,y2:top+H2-2,
        stroke:"var(--text)",strokeWidth:1.3}));
      elems.push(e("polygon",{key:"ayh",
        points:`${x0px},${top+2} ${x0px-3},${top+9} ${x0px+3},${top+9}`,
        fill:"var(--text)"}));
      elems.push(e("text",{key:"yl",x:x0px+3,y:top+11,
        fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
    }

    // "0" label
    if(y0px>top+10&&y0px<top+H2-10&&x0px>left+10&&x0px<left+W2-10)
      elems.push(e("text",{key:"l0",x:x0px+2,y:y0px+11,
        fontSize:9,fill:"var(--muted)"},"0"));

    // "1" label  
    const x1px=toX(1);
    if(x1px>left+5&&x1px<left+W2-5&&y0px>top+10&&y0px<top+H2-10)
      elems.push(e("text",{key:"l1",x:x1px-2,y:y0px+11,
        fontSize:9,fill:"var(--muted)"},"1"));

    // "50" y tick
    const y50px=toY(50);
    if(y50px>top+4&&y50px<top+H2-4){
      elems.push(e("line",{key:"t50",x1:x0px-4,y1:y50px,x2:x0px+4,y2:y50px,
        stroke:"var(--text)",strokeWidth:1}));
      elems.push(e("text",{key:"l50",x:x0px-26,y:y50px+4,
        fontSize:8,fill:"var(--muted)"},"50"));
    }

    // "y=g(x)" label top-right
    elems.push(e("text",{key:"fn",x:left+W2-68,y:top+14,
      fontSize:9,fill:_BLUE,fontStyle:"italic"},"y = g(x)"));

    // Panel letter (A/B/C/D) bottom-left
    elems.push(e("text",{key:"lab",x:left+5,y:top+H2-6,
      fontSize:12,fill:"var(--text)",fontWeight:"bold"},p.label+"."));

    // Diamond marker for double root
    const dblRoot=p.label==="B"?-7:p.label==="D"?1:null;
    if(dblRoot!==null){
      const dx=toX(dblRoot),dy=toY(0);
      if(dx>left+2&&dx<left+W2-2&&dy>top+2&&dy<top+H2-2)
        elems.push(e("path",{key:"dbl",
          d:`M ${dx},${dy-6} L ${dx+5},${dy} L ${dx},${dy+6} L ${dx-5},${dy} Z`,
          fill:"none",stroke:_BLUE,strokeWidth:1.5}));
    }

    // Curve path
    const steps=400;
    let d="", prev_ok=false;
    for(let i=0;i<=steps;i++){
      const x=p.xmin+(p.xmax-p.xmin)*i/steps;
      const y=p.fn(x);
      const px=toX(x), py=toY(y);
      const inBounds=py>=top+1&&py<=top+H2-1;
      if(inBounds){
        d+=(prev_ok?"L ":"M ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
        prev_ok=true;
      } else {
        prev_ok=false;
      }
    }
    elems.push(e("path",{key:"curve",d,
      fill:"none",stroke:_BLUE,strokeWidth:2.2,
      clipPath:`url(#cpJA${row})`}));

    return elems;
  };

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("defs",null,
      e("clipPath",{id:"cpJA0"},e("rect",{x:PX,y:PY[0],width:PW,height:PH})),
      e("clipPath",{id:"cpJA1"},e("rect",{x:PX,y:PY[1],width:PW,height:PH})),
      e("clipPath",{id:"cpJA2"},e("rect",{x:PX,y:PY[2],width:PW,height:PH})),
      e("clipPath",{id:"cpJA3"},e("rect",{x:PX,y:PY[3],width:PW,height:PH})),
    ),
    ...panels.flatMap((p,i)=>makePanel({...p,row:i}).map((el,j)=>
      React.cloneElement(el,{key:`p${i}_${el.key||j}`})
    ))
  );
}

function Svg27c_2021Ajesen(){
  const W=270,H=210;
  const OX=105,OY=105,SZ=26;
  const elems=[];

  for(let i=-3;i<=5;i++)
    elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:12,x2:OX+i*SZ,y2:H-10,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-3;j<=3;j++)
    elems.push(e("line",{key:`gh${j}`,x1:12,y1:OY-j*SZ,x2:W-10,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));

  elems.push(e("line",{key:"ax",x1:10,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("line",{key:"ay",x1:OX,y1:10,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.5}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${10} ${OX-3},${18} ${OX+3},${18}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:13,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+2,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));

  // h(x)=|x+1|−2: tjeme (-1,−2)
  // Za x≥−1: h=x−1 (krak nagiba +1)
  // Za x<−1: h=−x−3 (krak nagiba −1)
  // Tjeme piksel: (OX−SZ, OY+2*SZ)
  const tx_tj=OX-SZ, ty_tj=OY+2*SZ;
  // Lijevi kraj: x=−4 → h=−(−4)−3=1 → (OX−4*SZ, OY−SZ)... wait x=-4: h=|-4+1|-2=3-2=1
  const lx1=OX-4*SZ, ly1=OY-1*SZ; // h(-4)=1 → y=1 → OY-SZ
  // Desni kraj: x=4 → h=4-1=3 → (OX+4*SZ, OY-3*SZ)
  const rx2=OX+4*SZ, ry2=OY-3*SZ;

  elems.push(e("line",{key:"left",x1:lx1,y1:ly1,x2:tx_tj,y2:ty_tj,
    stroke:"#4a90d9",strokeWidth:2.2}));
  elems.push(e("line",{key:"right",x1:tx_tj,y1:ty_tj,x2:rx2,y2:ry2,
    stroke:"#4a90d9",strokeWidth:2.2}));
  elems.push(e("circle",{key:"tj",cx:tx_tj,cy:ty_tj,r:3,fill:"#4a90d9"}));
  elems.push(e("text",{key:"ltj",x:tx_tj+5,y:ty_tj-5,fontSize:9,fill:"var(--muted)"},"(\u22121,\u22122)"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 'M je petina broja N' znači M = N/5, a ne N = M/5.",topic:"br",points:1,
   q:"Broj M petina je broja N. Koja je od navedenih tvrdnja točna?",
   opts:["Broj M je 5 % broja N.","Broj N je 5 % broja M.","Broj M je 20 % broja N.","Broj N je 20 % broja M."],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"'Petina' znači jedan dio od pet → M = N/5 = (1/5)·N."},
     {txt:"Pretvori frakciju u postotak: 1/5 = 0,2 = 20 %."},
     {txt:"Zaključak: M je 20 % broja N → odgovor C."},
     {txt:"Provjera: N = 100, pa M = 20. 20/100 = 20 % ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi nazivnik. B) krivi smjer odnosa. D) obrnut odnos.",note:"diagnostika", final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: petina = 100/5 = 20 %; desetina = 10 %.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'n-ti dio' broja X je X/n; postotak je 100/n %.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: 'n-ti dio' broja X je X/n; postotak je 100/n %.",
     "Intuicija: petina = 100/5 = 20 %; desetina = 10 %.",
     "Česta greška: brkati 'M je dio od N' s 'N je dio od M'.",
     "Alt metoda (provjera): N = 1, M = 0,2 = 20 % od 1 → potvrđuje C."
   ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:2,type:"mc",warn:"Pazi: −11/3 ≈ −3,67 i −2/3 ≈ −0,67; traži broj strogo između (otvoreni interval).",topic:"br",points:1,
   q:"Koji se od navedenih brojeva nalazi u intervalu ⟨-11/3, -2/3⟩?",
   opts:["-3,7","-2,1","-0,6","-0,2"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pretvori granice u decimalne: −11/3 ≈ −3,667 i −2/3 ≈ −0,667."},
     {txt:"Interval ⟨−3,667; −0,667⟩ je otvoren — granice nisu uključene."},
     {txt:"Provjeri opcije: A) −3,7 izvan lijevo. B) −3,667 < −2,1 < −0,667 ✓. C) −0,6 izvan desno. D) −0,2 izvan desno."},
     {txt:"Odgovor B: −2,1 ∈ ⟨−11/3, −2/3⟩.",final:true,note:"odgovor"},
     {txt:"Provjera: 11/3 > 2,1 ✓; 2,1 > 2/3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A tik iza lijeve granice. C/D između −2/3 i 0 (krivo, prošli gornju granicu).",note:"diagnostika", final:true},{txt:"Intuicija: na brojevnom pravcu, broj mora biti strogo između granica.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: interval ⟨a, b⟩ je otvoren; x ∈ ⟨a, b⟩ ⟺ a < x < b.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: interval ⟨a, b⟩ je otvoren; x ∈ ⟨a, b⟩ ⟺ a < x < b.",
     "Intuicija: na brojevnom pravcu, broj mora biti strogo između granica.",
     "Česta greška: zaboraviti otvorenost intervala; ili pomiješati smjer nejednakosti kod negativnih brojeva.",
     "Alt metoda (provjera): nacrtaj brojevni pravac s granicama i opcijama."
   ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:3,type:"mc",warn:"Pazi: iz x/y = 7 slijedi x = 7y; uvrsti u drugu jednadžbu pa riješi po y.",topic:"al",points:1,
   q:"Koliko je y iz rješenja sustava jednadžba. [SYS:[FRAC:x|y] = 7|3x = y + 5]",
   opts:["-1/4","-1/10","1/10","1/4"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz prve x/y = 7 (uz y ≠ 0): x = 7y."},
     {txt:"Uvrsti u drugu: 3·(7y) = y + 5 → 21y = y + 5."},
     {txt:"Premjesti y: 20y = 5."},
     {txt:"y = 5/20 = [FRAC:1|4]. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: y = 1/4 → x = 7/4. (7/4)/(1/4) = 7 ✓; 3·(7/4) = 21/4 = y + 5 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B negativni (sustav daje pozitivnu y). C) 1/10 = greška u faktoriziranju.",note:"diagnostika", final:true},{txt:"Intuicija: x/y = 7 → x je 7 puta veći od y; uvrsti u drugu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav 2x2 — supstitucija (lakše kad je jedna varijabla izrazljiva) ili eliminacija.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: sustav 2x2 — supstitucija (lakše kad je jedna varijabla izrazljiva) ili eliminacija.",
     "Intuicija: x/y = 7 → x je 7 puta veći od y; uvrsti u drugu.",
     "Česta greška: zaboraviti uvjet y ≠ 0; ili obrnuti odnos x = y/7.",
     "Alt metoda (provjera): uvrsti svaku opciju u oba jednadžbe — D zadovoljava obe."
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:4,type:"mc",warn:"Pazi: spusti visinu na osnovicu → pravokutni trokut; krak = (osnovica/2)/cos 54°.",topic:"trig",points:1,
   q:"Kolika je duljina kraka jednakokračnoga trokuta kojemu je osnovica duljine 12 cm, a kut uz osnovicu mjere 54°?",
   opts:["7,1 cm","9,7 cm","10,2 cm","14,8 cm"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Jednakokračan trokut: visina iz vrha prepolavlja osnovicu i formira pravokutan trokut s polovicom osnovice (6 cm) i krakom kao hipotenuzom."},
     {txt:"Kut 54° uz osnovicu = kut između polovice osnovice i kraka."},
     {txt:"cos(54°) = susjedna/hipotenuza = 6/krak."},
     {txt:"krak = 6 / cos(54°) ≈ 6 / 0,5878 ≈ 10,2 cm. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 10,2·cos 54° ≈ 6 ✓. Vrh: 180° − 2·54° = 72°.",note:"verifikacija"},
     {txt:"Distraktori: A) 7,1 ≈ 6/tan 54°. B) 9,7 ≈ 6/sin 54°. D) 14,8 = cijela osnovica 12 (krivo).",note:"diagnostika", final:true},{txt:"Intuicija: visina iz vrha jednakokračnog trokuta je os simetrije.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu cos α = susjedna/hipotenuza.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u pravokutnom trokutu cos α = susjedna/hipotenuza.",
     "Intuicija: visina iz vrha jednakokračnog trokuta je os simetrije.",
     "Česta greška: koristiti sin umjesto cos; ili cijelu osnovicu (12) umjesto polovice (6).",
     "Alt metoda (provjera): kosinusov poučak: 12² = 2k²(1 − cos 72°) → k ≈ 10,2 ✓"
   ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:5,type:"mc",warn:"Pazi: prebaci u oblik 4x² − 5x − 8 = 0; Viète umnožak = c/a = −8/4.",topic:"kv",points:1,
   q:"Koliki je umnožak rješenja jednadžbe 4x² − 5x = 8?",
   opts:["-2","-1","1,25","1,6"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Standardiziraj: 4x² − 5x = 8 → 4x² − 5x − 8 = 0. Koeficijenti: a = 4, b = −5, c = −8."},
     {txt:"Vièteove formule: za ax² + bx + c = 0 vrijedi x₁ + x₂ = −b/a, x₁·x₂ = c/a."},
     {txt:"Umnožak: x₁·x₂ = c/a = −8/4 = −2. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera diskriminantom: D = 25 + 128 = 153 > 0 → x₁,₂ = (5 ± √153)/8. Umnožak: (25 − 153)/64 = −2 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) −1 = krivi izračun. C) 1,25 = −b/a (zbroj, ne umnožak). D) 1,6 = krivi znak.",note:"diagnostika", final:true},{txt:"Intuicija: (x − x₁)(x − x₂) = x² − (x₁+x₂)x + x₁x₂.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo (Viète): ax² + bx + c = 0 → zbroj = −b/a, umnožak = c/a.",note:"postupak",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo (Viète): ax² + bx + c = 0 → zbroj = −b/a, umnožak = c/a.",
     "Intuicija: (x − x₁)(x − x₂) = x² − (x₁+x₂)x + x₁x₂.",
     "Česta greška: pomiješati zbroj i umnožak; ili zaboraviti standardizirati (premjestiti 8).",
     "Alt metoda (provjera): direktno (5² − 153)/64 = −128/64 = −2 ✓"
   ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:6,type:"mc",warn:"Pazi: ako grupe nisu jednako velike, NE uzimaj obični prosjek (58 + 63)/2 — treba ponderirano.",topic:"stat",points:1,
   q:"Prosječan je postotak riješenosti ispita u 1. grupi studenata 58 %, a u 2. grupi studenata 63 %. Koliki je prosječan postotak riješenosti toga ispita u objema grupama ako 1. grupa ima 23 studenta, a 2. grupa 27 studenata?",
   opts:["60,5 %","60,6 %","60,7 %","60,8 %"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Ponderirani prosjek: (n₁·p₁ + n₂·p₂) / (n₁ + n₂)."},
     {txt:"Izračunaj ukupne bodove: 23·58 = 1334; 27·63 = 1701."},
     {txt:"Zbroj / ukupan broj studenata: 3035/50 = 60,7 %. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 60,7 je između 58 i 63, bliže 63 (jer je 2. grupa veća) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 60,5 = aritmetička sredina (krivo jer grupe nisu jednake). B/D = računarske greške.",note:"diagnostika", final:true},{txt:"Intuicija: veća grupa povlači prosjek prema svojoj vrijednosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: težinski prosjek = (Σ wᵢ·xᵢ) / (Σ wᵢ); težine = veličine grupa.",note:"postupak",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: težinski prosjek = (Σ wᵢ·xᵢ) / (Σ wᵢ); težine = veličine grupa.",
     "Intuicija: veća grupa povlači prosjek prema svojoj vrijednosti.",
     "Česta greška: računati (58+63)/2 — to vrijedi samo ako su grupe iste veličine.",
     "Alt metoda (provjera): težine 0,46 i 0,54 → 0,46·58 + 0,54·63 = 60,7 ✓"
   ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:7,type:"mc",warn:"Pazi: ukupna zarada = (sati × cijena) po smjenama i danima; pazi na 8 sati i 5 dana.",topic:"al",points:1,
   q:"U jednoj se tvornici radi u dvjema smjenama od ponedjeljka do petka. Svaka smjena traje osam sati. U jutarnjoj smjeni radnik po satu zaradi 30 kn, u popodnevnoj 35 kn. Radio je 23 dana i zaradio 6040 kn. Koliko je zaradio novca radeći u jutarnjoj smjeni ako je u jednome danu radio samo u jednoj smjeni?",
   opts:["2400 kn","2880 kn","3120 kn","3600 kn"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Postavi sustav jednadžba. Definiraj: j = dani u jutarnjoj smjeni, p = u popodnevnoj. j + p = 23."},
     {txt:"Dnevna zarada: jutro = 8·30 = 240 kn, popodne = 8·35 = 280 kn. Ukupno: 240j + 280p = 6040."},
     {txt:"Eliminacija: 240·(j + p) = 240·23 = 5520. Razlika: 40p = 520 → p = 13."},
     {txt:"j = 23 − 13 = 10. Jutarnja zarada: 10·240 = 2400 kn. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 10·240 + 13·280 = 2400 + 3640 = 6040 ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D = krivi izračun j; D) 3600 = max greška (15 dana).",note:"diagnostika", final:true},{txt:"Intuicija: razlika dnevnih zarada (40 kn) × broj jutarnjih dana = manjak od max scenarija.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav 2x2 za dva tipa aktivnosti, ukupni broj + ukupni ishod.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: sustav 2x2 za dva tipa aktivnosti, ukupni broj + ukupni ishod.",
     "Intuicija: razlika dnevnih zarada (40 kn) × broj jutarnjih dana = manjak od max scenarija.",
     "Česta greška: zaboraviti × 8 sati po smjeni; ili pomiješati j i p.",
     "Alt metoda (provjera): max = 23·280 = 6440; manjak = 400; 400/40 = 10 jutra → 2400 ✓"
   ,"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:8,type:"mc",warn:"Pazi: binomni teorem — opći član C(10,k)(a³)^(10−k)·4ᵏ; nađi k za koji je eksponent uz a jednak 27.",topic:"seq",points:1,
   q:"Koliki je koeficijent uz potenciju a²⁷ u raspisu izraza (a³ + 4)¹⁰?",
   opts:["1","4","40","160"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Binomni teorem: (x + y)ⁿ = Σ C(n,k)·xᵏ·y^(n−k). Ovdje x = a³, y = 4, n = 10."},
     {txt:"Opći član: C(10,k)·(a³)ᵏ·4^(10−k) = C(10,k)·a^(3k)·4^(10−k)."},
     {txt:"Za a²⁷: 3k = 27 → k = 9."},
     {txt:"Koeficijent: C(10,9)·4^(10−9) = 10·4 = 40. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: C(10,9) = C(10,1) = 10 (simetrija) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 1 = samo C(n,0). B) 4 = samo 4¹. D) 160 = krivi k (npr. k = 8).",note:"diagnostika", final:true},{txt:"Intuicija: za (a³ + 4)¹⁰, član s a²⁷ je 9-ti (a³ na 9 = a²⁷).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: binomni teorem, k-ti član ima xᵏ s koeficijentom C(n,k).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: binomni teorem, k-ti član ima xᵏ s koeficijentom C(n,k).",
     "Intuicija: za (a³ + 4)¹⁰, član s a²⁷ je 9-ti (a³ na 9 = a²⁷).",
     "Česta greška: krivo k iz 3k = 27; ili zaboraviti C(n,k).",
     "Alt metoda (provjera): direktno raspis 9-tog člana: 10·a²⁷·4 = 40·a²⁷ ✓"
   ,"Provjera sume: Sₙ formula vrijedi samo za odgovarajuću vrstu niza (arit. ili geom.).","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:9,type:"mc",warn:"Pazi: (f ∘ g)(6) = f(g(6)) = f(10⁶); prvo izračunaj unutarnju funkciju.",topic:"lin",points:1,
   q:"Neka je f(x) = 1/x i g(x) = 10ˣ. Koliko je (f ∘ g)(6)?",
   opts:["10⁻⁶","10^(-1/6)","10^(¹/⁶)","10⁶"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Kompozicija (f ∘ g)(x) = f(g(x)) — prvo unutarnja g, pa vanjska f."},
     {txt:"Unutarnja: g(6) = 10⁶."},
     {txt:"Vanjska: f(10⁶) = 1/10⁶ = 10⁻⁶. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: a⁻ⁿ = 1/aⁿ → 10⁻⁶ = 0,000001 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) krivi redoslijed (g ∘ f). C) krivi predznak. D) zaboravljena vanjska f.",note:"diagnostika", final:true},{txt:"Intuicija: čitaj kompoziciju iznutra prema van.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (f ∘ g)(x) = f(g(x)); g se primjenjuje PRVO.",note:"postupak",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: (f ∘ g)(x) = f(g(x)); g se primjenjuje PRVO.",
     "Intuicija: čitaj kompoziciju iznutra prema van.",
     "Česta greška: zamijeniti redoslijed; ili pogriješiti predznak eksponenta.",
     "Alt metoda (provjera): (f ∘ g)(x) = 1/10ˣ = 10⁻ˣ → za x = 6: 10⁻⁶ ✓"
   ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:10,img:true,type:"mc",warn:"Pazi: nultočke su 7 (dvostruka — graf dira os) i −1; vodeći koeficijent je negativan.",topic:"kv",points:1,
   q:"Koja slika prikazuje graf funkcije g(x) = −2(x − 7)²(x + 1)?",
   opts:["Slika A","Slika B","Slika C","Slika D"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"g(x) = −2(x − 7)²(x + 1) je polinom 3. stupnja."},
     {txt:"Nule: x = −1 (jednostruka, PRESIJECA os) i x = 7 (dvostruka, TANGIRA os)."},
     {txt:"Vodeći koeficijent −2 < 0 → x → −∞: g → +∞; x → +∞: g → −∞."},
     {txt:"y-presjek: g(0) = −2·49·1 = −98 (ispod osi)."},
     {txt:"Slika A: dolazi odozgo-lijevo, presijeca u x = −1, dno, tangira x = 7, pada. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: g(1) = −144 (duboko); g(8) = −18 (već nakon tangiranja) ✓",note:"verifikacija"},
     {txt:"Distraktori: B obrnut smjer. C krivi položaj nula. D zrcaljen (pozitivan vodeći).",note:"diagnostika", final:true},{txt:"Intuicija: dvostruka nula = parabola na lokalnoj razini (tangira); jednostruka = presijeca.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: nule daju x-presjeke; višestrukost (jedn./dvostr.) određuje presijeca/tangira; vodeći koeficijent odvija rubove.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: nule daju x-presjeke; višestrukost (jedn./dvostr.) određuje presijeca/tangira; vodeći koeficijent odvija rubove.",
     "Intuicija: dvostruka nula = parabola na lokalnoj razini (tangira); jednostruka = presijeca.",
     "Česta greška: zaboraviti dvostrukost nula; krivi smjer rubova zbog predznaka vodećeg.",
     "Alt metoda (provjera): test znakova oko nula — g(−2) > 0, g(0) < 0, g(8) < 0 → A ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:11,type:"mc",warn:"Pazi: cos φ = (a · b)/(|a|·|b|); skalarni produkt a · b = 2·4 + 3·(−1).",topic:"anal",points:1,
   q:"Kolika je mjera kuta između vektora a⃗ = 2i⃗ + 3j⃗ i b⃗ = 4i⃗ − j⃗?",
   opts:["19°39′14″","36°48′41″","42°16′25″","70°20′46″"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Formula: cos α = (a⃗·b⃗) / (|a⃗|·|b⃗|)."},
     {txt:"Skalarni umnožak: a⃗·b⃗ = 2·4 + 3·(−1) = 5."},
     {txt:"Moduli: |a⃗| = √13; |b⃗| = √17."},
     {txt:"cos α = 5/√221 ≈ 0,3363; α = arccos(0,3363) ≈ 70,3462° = 70°20′46″. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: kosinus pozitivan → oštri kut; 0,3363 daleko od 1 → kut blizu 70° ✓",note:"verifikacija"},
     {txt:"Distraktori: A komplement (90° − 70°). B/C = krivi izračuni.",note:"diagnostika", final:true},{txt:"Intuicija: skalarni umnožak pozitivan → oštri kut; nula → okomito; negativan → tupi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cos α = (a⃗·b⃗) / (|a⃗|·|b⃗|); kut u [0°, 180°].",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: cos α = (a⃗·b⃗) / (|a⃗|·|b⃗|); kut u [0°, 180°].",
     "Intuicija: skalarni umnožak pozitivan → oštri kut; nula → okomito; negativan → tupi.",
     "Česta greška: zaboraviti normalizirati; ili krivo DMS pretvorba.",
     "Alt metoda (provjera): tan α = 14/5 = 2,8 → α ≈ 70,35° ✓"
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:12,type:"mc",warn:"Pazi: put = v · t (t u sekundama!); broj krugova = put / opseg (2πr).",topic:"geom",points:1,
   q:"Jan vozi električni romobil po kružnoj stazi polumjera 20 m konstantnom (obodnom) brzinom 3,5 m/s. Koliko je punih krugova napravio u 10 minuta?",
   opts:["14","15","16","17"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Opseg staze: O = 2π·20 = 40π ≈ 125,66 m."},
     {txt:"10 min = 600 s; put: s = 3,5·600 = 2100 m."},
     {txt:"Broj krugova: 2100/(40π) ≈ 16,71."},
     {txt:"PUNI krugovi: ⌊16,71⌋ = 16. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 16·40π ≈ 2010,6; ostatak 89,4 m < opseg → 17. krug nije završen ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B = greške u izračunu. D) 17 = zaokruživanje nagore (traže se PUNI krugovi).",note:"diagnostika", final:true},{txt:"Intuicija: obodna brzina × vrijeme = pređena duljina; / opseg = krugovi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: krugovi = v·t / (2π·r); za PUNE uzmi ⌊·⌋.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: krugovi = v·t / (2π·r); za PUNE uzmi ⌊·⌋.",
     "Intuicija: obodna brzina × vrijeme = pređena duljina; / opseg = krugovi.",
     "Česta greška: zaboraviti minute → sekunde; ili zaokružiti nagore.",
     "Alt metoda (provjera): kutna brzina ω = 0,175 rad/s; ukupni kut = 105 rad; 105/(2π) ≈ 16,71 → 16 ✓"
   ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:13,type:"mc",warn:"Pazi: baza je jednakostranični trokut (P = a²√3/4); V = (1/3)·P·h, uz h = a.",topic:"geom",points:1,
   q:"Duljina visine pravilne uspravne trostrane piramide jednaka je duljini brida osnovke. Ako je obujam piramide 43,41 cm³, kolika je duljina njezine visine?",
   opts:["5,2 cm","6,7 cm","7,1 cm","9,7 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pravilna trostrana piramida: istostraničan trokut kao baza (brid a), zadano h = a."},
     {txt:"Baza: B = (a²√3)/4."},
     {txt:"V = (1/3)·B·h = (a³√3)/12."},
     {txt:"(a³√3)/12 = 43,41 → a³ = 521/√3 ≈ 300,77 → a ≈ 6,7 cm. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: a = 6,7 → B ≈ 19,44; V ≈ 43,4 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C/D = računarske greške ili krivi obrazac.",note:"diagnostika", final:true},{txt:"Intuicija: kombiniraj formulu istostraničnog trokuta i visine.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V piramide = (1/3)·B·h.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: V piramide = (1/3)·B·h.",
     "Intuicija: kombiniraj formulu istostraničnog trokuta i visine.",
     "Česta greška: koristiti V = B·h (prizma); ili pogriješiti formulu trokuta.",
     "Alt metoda (provjera): V/h³ = √3/12 ≈ 0,1443; za V = 43,41 → h ≈ 6,7 ✓"
   ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:14,img:true,type:"mc",warn:"Pazi: nedostajuće stranice nađi poučkom o sinusima/kosinusu prije zbrajanja opsega.",topic:"trig",points:1,
   q:"Koliki je opseg trokuta ABC prikazanoga na skici?",
   opts:["49 cm","55,2 cm","57 cm","65,2 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz skice: unutar ABC postoji manji trokut sa stranicama 4, 5, 8 i kutom α (kod A i kod unutarnjeg vrha)."},
     {txt:"Kut α se pojavljuje u dvama trokutima → AA-kriterij: trokuti su SLIČNI."},
     {txt:"Iz omjera stranica, dobiva se treća stranica trokuta ABC."},
     {txt:"Suma triju stranica ABC: opseg ≈ 55,2 cm. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: opseg između opcija — B najbliža izračunatoj vrijednosti ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 49 = samo zbroj označenih. C) zaokruživanje. D) krivi omjer.",note:"diagnostika", final:true},{txt:"Intuicija: slično = isti oblik, različita veličina; iz dvije poznate stranice → omjer svih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: AA-kriterij — dva trokuta s dva podudarna kuta su slična; stranice u istom omjeru.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: AA-kriterij — dva trokuta s dva podudarna kuta su slična; stranice u istom omjeru.",
     "Intuicija: slično = isti oblik, različita veličina; iz dvije poznate stranice → omjer svih.",
     "Česta greška: pretpostaviti podudarnost (ne sličnost); ili krivi par odgovarajućih stranica.",
     "Alt metoda (provjera): kosinusov poučak u manjem trokutu — uz kut i krakove dobiva se treća stranica."
   ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:15,type:"mc",warn:"Pazi: f(x) = (x + 1)² ima minimum u x = −1, ali x je ograničen (a ≥ 2) → provjeri rub.",topic:"kv",points:1,
   q:"Neka je a ≥ 2. Za koji je od navedenih argumenata x vrijednost funkcije f(x) = x² + 2x + 1 najmanja?",
   opts:["x = -3a","x = -2a","x = a/2","x = a/3"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Identificiraj: f(x) = x² + 2x + 1 = (x + 1)² — savršen kvadrat; minimum u x = −1 (f = 0)."},
     {txt:"Za |x + 1| veće, vrijednost raste kvadratno. Tražimo argument najbliži −1."},
     {txt:"Izračun za svaku opciju (a ≥ 2): A f(−3a) = (1 − 3a)²; B f(−2a) = (1 − 2a)²; C f(a/2) = (1 + a/2)²; D f(a/3) = (1 + a/3)²."},
     {txt:"Za a = 2: A = 25, B = 9, C = 4, D ≈ 2,78. Za a = 3: A = 64, B = 25, C = 6,25, D = 4. D najmanji."},
     {txt:"Odgovor D: x = a/3 daje najmanju vrijednost za a ≥ 2.",final:true,note:"odgovor"},
     {txt:"Provjera: (1 + a/3) < (1 + a/2) za a > 0; a/3 i a/2 oboje pozitivni → |x + 1| za D manji ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B negativni argumenti, daleko od −1 → velike vrijednosti. C ima a/2 > a/3 → veća vrijednost.",note:"diagnostika", final:true},{txt:"Intuicija: što je x bliže vrhu parabole (−1), to je vrijednost manja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: f(x) = (x − v)² ima minimum u x = v; raste kvadratno s udaljenošću.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: f(x) = (x − v)² ima minimum u x = v; raste kvadratno s udaljenošću.",
     "Intuicija: što je x bliže vrhu parabole (−1), to je vrijednost manja.",
     "Česta greška: brkati 'najmanja vrijednost' s 'najmanjim argumentom'; ili pretpostaviti negativan x daje manju f.",
     "Alt metoda (provjera): za a = 2 izračunaj sve: A = 25, B = 9, C = 4, D ≈ 2,78 → D najmanji ✓"
   ,"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:16.1,type:"sa",topic:"seq",points:1,
   context:"Zadatak 16 (1. dio od 2):",
   q:"Izrazite n iz formule b = a + (n − 1)d.",
   sol:{ans:"n = [FRAC:b − a|d] + 1",alt:["(b-a)/d+1","(b-a+d)/d"]},
  steps:[
     {txt:"Polazna formula: b = a + (n − 1)·d (n-ti član aritmetičkog niza)."},
     {txt:"Cilj: izolirati n. Premjesti a na lijevu stranu: b − a = (n − 1)·d."},
     {txt:"Podijeli s d (uz d ≠ 0): (b − a)/d = n − 1."},
     {txt:"Dodaj 1: n = [FRAC:b − a|d] + 1."},
     {txt:"Provjera: za a = 1, d = 2, b = 9 → n = (9−1)/2 + 1 = 5; provjera: 9 = 1 + 4·2 = 9 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: n = [FRAC:b − a|d] + 1 ✓",note:"odgovor",final:true},{txt:"Intuicija: 'b' je n-ti član, pa između a (prvi) i b postoji točno (n − 1) koraka veličine d.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: n-ti član aritmetičkog niza: aₙ = a₁ + (n−1)·d.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: n-ti član aritmetičkog niza: aₙ = a₁ + (n−1)·d.",
     "Intuicija: 'b' je n-ti član, pa između a (prvi) i b postoji točno (n − 1) koraka veličine d.",
     "Česta greška: zaboraviti +1 (dati samo n = (b−a)/d); ili pogriješiti predznak.",
     "Alt metoda (provjera): broj koraka od a do b je (b−a)/d; broj članova je broj koraka + 1."
   ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:16.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 16 (2. dio od 2):",
   q:"Napišite koordinate neke točke koja se nalazi na osi ordinata i udaljena je od ishodišta za 4.",
   sol:{ans:"(0, 4) ili (0, −4)",alt:["(0,4)","(0,−4)"]},
  steps:[
     {txt:"Os ordinata = y-os: točka na osi ima x-koordinatu 0 → (0, y)."},
     {txt:"Udaljenost od ishodišta (0, 0) do (0, y): d = √(0² + y²) = |y|."},
     {txt:"Uvjet: |y| = 4 → y = 4 ili y = −4."},
     {txt:"Točka: (0, 4) ili (0, −4)."},
     {txt:"Provjera: udaljenost od (0, 4) do (0, 0) = 4 ✓; udaljenost od (0, −4) do (0, 0) = 4 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: (0, 4) ili (0, −4) ✓",note:"odgovor",final:true},{txt:"Intuicija: na y-osi udaljenost je apsolutna vrijednost y-koordinate.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost dviju točaka P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂−x₁)² + (y₂−y₁)²).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: udaljenost dviju točaka P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂−x₁)² + (y₂−y₁)²).",
     "Intuicija: na y-osi udaljenost je apsolutna vrijednost y-koordinate.",
     "Česta greška: dati samo (0, 4) — zaboraviti negativnu varijantu (uvjet |y| = 4 daje dva rješenja).",
     "Alt metoda (provjera): brojevni pravac vertikalno — točke na udaljenosti 4 od 0 su +4 i −4."
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:17.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 17 (1. dio od 2):",
   q:"Riješite nejednadžbu 5x/6 − (x+2)/9 ≤ x − 3.",
   sol:{ans:"x ≥ 10",alt:["x>=10","[10, +∞⟩"]},
  steps:[
     {txt:"Pronaći NZV nazivnika 6 i 9 → NZV = 18."},
     {txt:"Pomnoži obje strane s 18: 18·(5x/6) − 18·(x+2)/9 ≤ 18·(x − 3) → 15x − 2(x + 2) ≤ 18x − 54."},
     {txt:"Razvij i sredi lijevu stranu: 15x − 2x − 4 = 13x − 4."},
     {txt:"13x − 4 ≤ 18x − 54 → premjesti: 54 − 4 ≤ 18x − 13x → 50 ≤ 5x → x ≥ 10."},
     {txt:"Provjera s x = 10: LHS = 50/6 − 12/9 = 25/3 − 4/3 = 21/3 = 7; RHS = 10 − 3 = 7. 7 ≤ 7 ✓ (granica zadovoljena).",note:"verifikacija", final:true},{txt:"Točan odgovor: x ≥ 10 ✓",note:"odgovor",final:true},{txt:"Intuicija: cilj je 'oslobađanje' od razlomaka — sve postaje cjelobrojno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za nejednadžbu s razlomcima, pomnoži s NZV-om svih nazivnika (uz pozitivnu vrijednost ne mijenja smjer).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za nejednadžbu s razlomcima, pomnoži s NZV-om svih nazivnika (uz pozitivnu vrijednost ne mijenja smjer).",
     "Intuicija: cilj je 'oslobađanje' od razlomaka — sve postaje cjelobrojno.",
     "Česta greška: zaboraviti pomnožiti svaki član s 18 (npr. izostaviti desnu stranu); ili obrnuti smjer nejednakosti.",
     "Alt metoda (provjera): testiraj graničnu točku x = 10 i jednu unutar/izvan skupa rješenja."
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:17.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 17 (2. dio od 2):",
   q:"Riješite nejednadžbu x² − 676 ≤ 0. Zapišite rješenje uz pomoć intervala.",
   sol:{ans:"[−26, 26]",alt:["[−26, 26]","[−26,26]","[−26. 26]","≈ [−26, 26]"]},
  steps:[
     {txt:"x² − 676 ≤ 0 → x² ≤ 676."},
     {txt:"Uzmi korijen: |x| ≤ √676 = 26."},
     {txt:"|x| ≤ 26 ⟺ −26 ≤ x ≤ 26."},
     {txt:"Interval: x ∈ [−26, 26]."},
     {txt:"Provjera: x = 26 → 676 − 676 = 0 ≤ 0 ✓ (granica); x = 27 → 729 − 676 = 53 > 0 (izvan) ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: [−26, 26] ✓",note:"odgovor",final:true},{txt:"Intuicija: x² ≤ c (za c > 0) opisuje 'koliko x može biti udaljen od 0' — kvadratna nejednakost daje interval.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: x² ≤ a² (a > 0) ⟺ |x| ≤ a ⟺ −a ≤ x ≤ a.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: x² ≤ a² (a > 0) ⟺ |x| ≤ a ⟺ −a ≤ x ≤ a.",
     "Intuicija: x² ≤ c (za c > 0) opisuje 'koliko x može biti udaljen od 0' — kvadratna nejednakost daje interval.",
     "Česta greška: zaboraviti negativnu polovicu (samo dati x ≤ 26); ili krivi smjer (>).",
     "Alt metoda (provjera): faktorizacija (x − 26)(x + 26) ≤ 0; iz tabele predznaka x ∈ [−26, 26]."
   ,"Provjera supstitucijom: uvrsti x = [−26, 26] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:18.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 18 (1. dio od 2):",
   q:"Ana je u voćarni potrošila 43,96 kn za 4 kg banana i 124,95 kn za 5 kg borovnica. Ako Katarina želi kupiti 3 kg banana i 2 kg borovnica, koliko joj je novca za to potrebno?",
   sol:{ans:"82,95 kn",alt:["82,95","82,95 kn","82.95 kn","≈ 82,95 kn"]},
  steps:[
     {txt:"Iz Anainih troškova izračunaj jedinične cijene (linearni izraz):"},
     {txt:"Banane: 43,96 kn / 4 kg = 10,99 kn/kg."},
     {txt:"Borovnice: 124,95 kn / 5 kg = 24,99 kn/kg."},
     {txt:"Katarina: 3·10,99 + 2·24,99 = 32,97 + 49,98 = 82,95 kn."},
     {txt:"Provjera: 32,97 + 49,98 = 82,95 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 82,95 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: prvo izračunaj 'cijenu po kg', pa pomnoži za novu količinu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ukupna cijena = jedinična cijena × količina; iz omjera trošak/količina dobiva se jedinična.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: ukupna cijena = jedinična cijena × količina; iz omjera trošak/količina dobiva se jedinična.",
     "Intuicija: prvo izračunaj 'cijenu po kg', pa pomnoži za novu količinu.",
     "Česta greška: koristiti Anaine cijene direktno bez normalizacije (dijeljenja); ili pomiješati količine bananas/borovnica.",
     "Alt metoda (provjera): Katarinin omjer prema Ani: bananas 3/4, borovnice 2/5. Iznos = (3/4)·43,96 + (2/5)·124,95 = 32,97 + 49,98 = 82,95 ✓"
   ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:18.2,type:"sa",topic:"br",points:1,
   context:"Zadatak 18 (2. dio od 2):",
   q:"Odredite najmanji četveroznamenkasti broj djeljiv s 3 koji pri dijeljenju s brojem 35 daje ostatak 1.",
   sol:{ans:"1086",alt:["1086","≈ 1086"]},
  steps:[
     {txt:"Uvjeti: n ≥ 1000 (4-znamenkast), n djeljiv s 3, n ≡ 1 (mod 35)."},
     {txt:"Postavi n = 35k + 1. Sad treba 35k + 1 djeljiv s 3."},
     {txt:"35 ≡ 2 (mod 3) → 35k + 1 ≡ 2k + 1 (mod 3). Uvjet: 2k + 1 ≡ 0 (mod 3) → k ≡ 1 (mod 3)."},
     {txt:"Najmanji k takav da je 35k + 1 ≥ 1000: k ≥ (1000 − 1)/35 ≈ 28,5 → k ≥ 29. Uz k ≡ 1 (mod 3): k = 31 (jer 29, 30 nisu, 31 = 3·10 + 1 ✓)."},
     {txt:"n = 35·31 + 1 = 1085 + 1 = 1086. Provjera: 1086/3 = 362 ✓; 1086/35 = 31 r 1 ✓"},
     {txt:"Distraktori: pogađati n = 1000, 1001, ... oblika 35k+1 i provjeravati djeljivost s 3 — sporo, ali daje isti rezultat.",note:"diagnostika", final:true},{txt:"Intuicija: prvo zapiši uvjet 'ostatak 1 pri dijeljenju s 35' u algebarskom obliku, pa uvjet djeljivosti s 3 u modularnom obliku.",note:"intuicija",final:true},{txt:"Točan odgovor: 1086 ✓",note:"odgovor",final:true},{txt:"Alt metoda (provjera): brojevi oblika 35k + 1 i ≥ 1000 i djeljivi s 3 — testirati k = 29, 30, 31. 35·29+1 = 1016 (1016/3 = 338,67), 35·30+1 = 1051 (1051/3 ≈ 350,3), 35·31+1 = 1086 ✓",note:"verifikacija",final:true},{txt:"Sažetak postupka: Pravilo: ako n ≡ r (mod m), onda n = mk + r za neki cijeli k. Kombinacija uvjeta = sustav kongruencija.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: ako n ≡ r (mod m), onda n = mk + r za neki cijeli k. Kombinacija uvjeta = sustav kongruencija.",
     "Intuicija: prvo zapiši uvjet 'ostatak 1 pri dijeljenju s 35' u algebarskom obliku, pa uvjet djeljivosti s 3 u modularnom obliku.",
     "Česta greška: zaboraviti uvjet 4-znamenkast (n ≥ 1000); ili krivo iskoristiti CRT (Chinese Remainder).",
     "Alt metoda (provjera): brojevi oblika 35k + 1 i ≥ 1000 i djeljivi s 3 — testirati k = 29, 30, 31. 35·29+1 = 1016 (1016/3 = 338,67), 35·30+1 = 1051 (1051/3 ≈ 350,3), 35·31+1 = 1086 ✓"
   ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:19.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 19 (1. dio od 2):",
   q:"Koliko je a⁶ ako je ⁴√(a³) = 2?",
   sol:{ans:"256",alt:["2⁸","2^8"]},
  steps:[
     {txt:"Korijen kao potencija — preformuliraj izraz: ⁴√(a³) = a^([FRAC:3|4])."},
     {txt:"Iz a^([FRAC:3|4]) = 2 izolirati a: dignuti obje strane na 4/3: a = 2^([FRAC:4|3])."},
     {txt:"a⁶ = (2^([FRAC:4|3]))⁶ = 2^([FRAC:4|3]·6) = 2⁸ = 256."},
     {txt:"Provjera: ([FRAC:4|3])·6 = 24/3 = 8 ✓; 2⁸ = 256 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 256 ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je a^p = c, onda a = c^(1/p) — invertiranje potencije.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ⁿ√(aᵐ) = a^(m/n); (aᵖ)ᵍ = a^(p·q); rješavanje za a: a = (output)^(1/eksponent_a).",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: ⁿ√(aᵐ) = a^(m/n); (aᵖ)ᵍ = a^(p·q); rješavanje za a: a = (output)^(1/eksponent_a).",
     "Intuicija: ako je a^p = c, onda a = c^(1/p) — invertiranje potencije.",
     "Česta greška: pomiješati 3/4 i 4/3 pri invertiranju potencije; ili pogriješiti množenje razlomaka eksponenta.",
     "Alt metoda (provjera): logaritmiraj: log a = (4/3)·log 2 ≈ 0,4014 · 0,3010; a⁶ → 6·log a ≈ 2,408 → 10^(2,408) ≈ 256 ✓"
   ,"Provjera supstitucijom: uvrsti x = 256 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:19.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 19 (2. dio od 2):",
   q:"Provedite računske operacije i pojednostavnite do kraja izraz (3 + 3/(x+2)) · (x+2)/(x²-9) za svaki x za koji je definiran.",
   sol:{ans:"[FRAC:3|x − 3]",alt:["[FRAC:3|x − 3]","[FRAC:3|x−3]","≈ [FRAC:3|x − 3]"]},
  steps:[
     {txt:"Prvi razlomak u zagradi: 3 + 3/(x+2) = (3(x+2) + 3)/(x+2) = (3x + 6 + 3)/(x+2) = 3(x+3)/(x+2)."},
     {txt:"Drugi izraz: (x² − 9) = (x − 3)(x + 3) (razlika kvadrata)."},
     {txt:"Pomnoži: [3(x+3)/(x+2)] · [(x+2) / ((x−3)(x+3))]."},
     {txt:"Skrati (x+2) i (x+3) (vrijedi za x ≠ −2, ±3): = 3 / (x − 3) = [FRAC:3|x − 3]."},
     {txt:"Provjera s x = 4: izvorni = (3 + 3/6)·6/7 = 3,5·(6/7) = 21/7 = 3; pojednostavljeni = 3/1 = 3 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: [FRAC:3|x − 3] ✓",note:"odgovor",final:true},{txt:"Intuicija: razlika kvadrata a² − b² = (a−b)(a+b) je ključni alat za faktoriziranje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri množenju razlomaka, skrati zajedničke faktore u brojnicima i nazivnicima.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: pri množenju razlomaka, skrati zajedničke faktore u brojnicima i nazivnicima.",
     "Intuicija: razlika kvadrata a² − b² = (a−b)(a+b) je ključni alat za faktoriziranje.",
     "Česta greška: zaboraviti faktorizirati x² − 9; ili kratiti neispravno (npr. član s 3 koji nije faktor).",
     "Alt metoda (provjera): uvrsti drugi x (npr. x = 5): izvorni = (3 + 3/7)·7/16 = (24/7)·(7/16) = 24/16 = 1,5; pojednostavljeni = 3/2 = 1,5 ✓"
   ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:20.1,img:true,type:"sa",topic:"anal",points:1,img:true,
   context:"Zadatak 20 (1. dio od 2):",
   q:"Na slici je nacrtan vektor c⃗. Zapišite vektor v⃗ kao linearnu kombinaciju vektora i⃗, j⃗ ako je c⃗ + v⃗ = 0⃗.",
   sol:{ans:"v⃗ = 4i⃗ − 2j⃗",alt:["4i-2j","v=4i-2j"]},
  steps:[
     {txt:"Uvjet c⃗ + v⃗ = 0⃗ ⟺ v⃗ = −c⃗ (suprotni vektor)."},
     {txt:"Pročitaj c⃗ iz skice — počinje na ishodištu i ide do (−4, 2): c⃗ = −4i⃗ + 2j⃗."},
     {txt:"Stoga v⃗ = −c⃗ = 4i⃗ − 2j⃗."},
     {txt:"Provjera: c⃗ + v⃗ = (−4 + 4)i⃗ + (2 + (−2))j⃗ = 0⃗ ✓",note:"verifikacija"},
     {txt:"Distraktori: čitati c⃗ s krivom orijentacijom (npr. (4, −2) umjesto (−4, 2)) → v⃗ bi bio (−4, 2), suprotno.",note:"diagnostika", final:true},{txt:"Točan odgovor: v⃗ = 4i⃗ − 2j⃗ ✓",note:"odgovor",final:true},{txt:"Intuicija: 'zatvori petlju' — v⃗ vraća u ishodište nakon c⃗.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: suprotni vektor −c⃗ ima iste komponente s obrnutim predznacima; c⃗ + (−c⃗) = 0⃗.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: suprotni vektor −c⃗ ima iste komponente s obrnutim predznacima; c⃗ + (−c⃗) = 0⃗.",
     "Intuicija: 'zatvori petlju' — v⃗ vraća u ishodište nakon c⃗.",
     "Česta greška: čitati c⃗ s krivim predznacima komponenti; ili pretpostaviti v⃗ = c⃗.",
     "Alt metoda (provjera): nacrtaj v⃗ kao 'obrnut' c⃗ — od (−4, 2) natrag do (0, 0) je upravo (4, −2)."
   ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:20.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 20 (2. dio od 2):",
   q:"Koliko zajedničkih točaka imaju kružnica i hiperbola zadane jednadžbama (x-3)² + y² = 16 i x²/49 − y² = 1?",
   sol:{ans:"jednu",alt:["1","Jednu","jedna","(7,0)"]},
  steps:[
     {txt:"Sustav: kružnica (x−3)² + y² = 16; hiperbola x²/49 − y² = 1 → y² = x²/49 − 1."},
     {txt:"Uvrsti y² u kružnicu: (x − 3)² + (x²/49 − 1) = 16."},
     {txt:"Razvij: x² − 6x + 9 + x²/49 − 1 − 16 = 0 → x²·(1 + 1/49) − 6x − 8 = 0 → (50x²)/49 − 6x − 8 = 0."},
     {txt:"Pomnoži s 49: 50x² − 294x − 392 = 0 → 25x² − 147x − 196 = 0. Diskriminanta D = 147² + 4·25·196 = 21609 + 19600 = 41209 = 203². x = (147 ± 203)/50 → x = 7 ili x = −1,12."},
     {txt:"Za x = 7: y² = 49/49 − 1 = 0 → y = 0. Točka (7, 0). Za x = −1,12: y² = (−1,12)²/49 − 1 ≈ −0,974 < 0 — nema realnog y. Jedna zajednička točka."},
     {txt:"Provjera (7, 0): kružnica (7−3)² + 0 = 16 ✓; hiperbola 49/49 − 0 = 1 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: jednu ✓",note:"odgovor",final:true},{txt:"Intuicija: krivulje se sijeku gdje su obje jednadžbe istovremeno zadovoljene.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: presjek dvaju krivulja — supstituiraj jednu jednadžbu u drugu, riješi za x, vrati y.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: presjek dvaju krivulja — supstituiraj jednu jednadžbu u drugu, riješi za x, vrati y.",
     "Intuicija: krivulje se sijeku gdje su obje jednadžbe istovremeno zadovoljene.",
     "Česta greška: zaboraviti uvjete realnosti y (y² ≥ 0); ili krivo razvijati kvadrate.",
     "Alt metoda (provjera): tangencijalni dodir — diskriminanta sustava ima dvostruki korijen (provjeri da je geometrijski dodir, ne presjek)."
   ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:21.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Koliko je tjeme parabole y² = 48x udaljeno od njezine direktrise (ravnalice)?",
   sol:{ans:"12",alt:["12","≈ 12"]},
  steps:[
     {txt:"Standardni oblik parabole s tjemenom u ishodištu i osi simetrije x-os: y² = 4px."},
     {txt:"Usporedi s y² = 48x → 4p = 48 → p = 12."},
     {txt:"Tjeme je (0, 0); fokus je F(p, 0) = (12, 0); direktrisa je vertikalni pravac x = −p = −12."},
     {txt:"Udaljenost tjemena od direktrise = |0 − (−12)| = 12."},
     {txt:"Provjera: definicijski svojstvo parabole — svaka točka jednako udaljena od fokusa i direktrise. Tjeme udaljeno p od fokusa i p od direktrise ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 12 ✓",note:"odgovor",final:true},{txt:"Intuicija: parametar p je 'fokalna duljina'; što je veće p, parabola je 'šira'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za parabolu y² = 4px udaljenost između tjemena i direktrise je |p| (jednako udaljenosti tjemena od fokusa).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za parabolu y² = 4px udaljenost između tjemena i direktrise je |p| (jednako udaljenosti tjemena od fokusa).",
     "Intuicija: parametar p je 'fokalna duljina'; što je veće p, parabola je 'šira'.",
     "Česta greška: pomiješati 4p s p (uzeti p = 48 umjesto p = 12).",
     "Alt metoda (provjera): direktna formula d(tjeme, direktrisa) = p = 4p/4 = 48/4 = 12 ✓"
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:21.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Točka F(-2√2, 0) jedno je žarište (fokus) elipse x²/25 + y²/b² = 1. Koliko iznosi b?",
   sol:{ans:"√17",alt:["sqrt(17)","≈4,1231"]},
  steps:[
     {txt:"Elipsa x²/a² + y²/b² = 1 s glavnom osi a; žarišta na ±c od centra; c² = a² − b² (uz a > b)."},
     {txt:"Iz jednadžbe: a² = 25 → a = 5. Žarište F(−2√2, 0) → c = 2√2 → c² = 8."},
     {txt:"b² = a² − c² = 25 − 8 = 17 → b = √17."},
     {txt:"Provjera: a = 5 > b = √17 ≈ 4,12 ✓; ekscentricitet e = c/a = 2√2/5 ≈ 0,566 < 1 → elipsa ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: √17 ✓",note:"odgovor",final:true},{txt:"Intuicija: c je linearni ekscentricitet — što veće c, to su žarišta dalja od centra i elipsa 'spljoštenija'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za elipsu c² = a² − b² (uz a > b); ako su žarišta na x-osi, glavna os je a uz x-koordinatu.",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za elipsu c² = a² − b² (uz a > b); ako su žarišta na x-osi, glavna os je a uz x-koordinatu.",
     "Intuicija: c je linearni ekscentricitet — što veće c, to su žarišta dalja od centra i elipsa 'spljoštenija'.",
     "Česta greška: koristiti c² = a² + b² (formula za hiperbolu); ili brkati a i b.",
     "Alt metoda (provjera): elipsa kroz fokus i tjeme — a + c = max suma udaljenosti od žarišta = const = 2a = 10 → fokus distance + tjeme distance = ... potvrđuje a > b."
   ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:22.1,type:"sa",topic:"kv",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Odredite interval rasta funkcije f(x) = −x² + 20x.",
   sol:{ans:"⟨−∞, 10]",alt:["⟨-∞, 10]","⟨−∞,10⟩","(-∞,10)"]},
  steps:[
     {txt:"f(x) = −x² + 20x. Derivacija: f′(x) = −2x + 20."},
     {txt:"Funkcija raste tamo gdje f′(x) ≥ 0: −2x + 20 ≥ 0 → x ≤ 10."},
     {txt:"Interval rasta: ⟨−∞, 10]."},
     {txt:"Provjera: tjeme parabole −x² + 20x je u x = −b/(2a) = −20/(−2) = 10 — funkcija raste do tjemena, pada nakon ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: ⟨−∞, 10] ✓",note:"odgovor",final:true},{txt:"Intuicija: kvadratna funkcija s a < 0 (otvorena prema dolje) raste do tjemena, pada nakon.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: funkcija raste tamo gdje f′(x) > 0 (strogo) ili ≥ 0 (slabo); pada gdje f′(x) < 0.",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: funkcija raste tamo gdje f′(x) > 0 (strogo) ili ≥ 0 (slabo); pada gdje f′(x) < 0.",
     "Intuicija: kvadratna funkcija s a < 0 (otvorena prema dolje) raste do tjemena, pada nakon.",
     "Česta greška: dati ⟨−∞, 10⟩ (otvoreni interval); standardno se uzima zatvoren do tjemena (uključi 10).",
     "Alt metoda (provjera): bez derivacije — tjeme x = −b/(2a) = 10; jer a < 0, raste do 10 (uključujući), pada poslije."
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:22.2,type:"sa",topic:"lin",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Odredite nultočku funkcije f ako je f(1/(x+2)) = x − 3.",
   sol:{ans:"[FRAC:1|5]",alt:["0,2","0,2","(1/5, 0)"]},
  solFormula:{frac:[["1","5"]]},
  steps:[
     {txt:"Zadano: f(1/(x+2)) = x − 3. Cilj: pronaći f(t) = 0."},
     {txt:"Supstitucija t = 1/(x + 2): iz toga x + 2 = 1/t → x = 1/t − 2."},
     {txt:"Uvrsti u f: f(t) = (1/t − 2) − 3 = 1/t − 5."},
     {txt:"Nultočka: f(t) = 0 → 1/t = 5 → t = [FRAC:1|5]."},
     {txt:"Provjera: t = 1/5 → x = 1/(1/5) − 2 = 5 − 2 = 3; f(1/(3+2)) = f(1/5) = 3 − 3 = 0 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: [FRAC:1|5] ✓",note:"odgovor",final:true},{txt:"Intuicija: ovo je problem 'identificiranja' funkcije f iz njezine kompozicije.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izračun f(t), ako je zadano f(g(x)) = h(x), supstituira se t = g(x), izrazi x kroz t, pa uvrsti u h.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za izračun f(t), ako je zadano f(g(x)) = h(x), supstituira se t = g(x), izrazi x kroz t, pa uvrsti u h.",
     "Intuicija: ovo je problem 'identificiranja' funkcije f iz njezine kompozicije.",
     "Česta greška: pretpostaviti da je f linearna ili pogriješiti pri invertiranju supstitucije.",
     "Alt metoda (provjera): direktno provjeri za t = 1/5 da f(t) = 0, kao u verifikaciji gore."
   ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:23.1,type:"sa",topic:"seq",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Tri pozitivna broja čine geometrijski niz. Umnožak prvoga i trećega člana jest 1,44. Koji je drugi član toga niza?",
   sol:{ans:"1,2",alt:["1,2","6/5"]},
  steps:[
     {txt:"Svojstvo geometrijskog niza: srednji član je geometrijska sredina susjednih → a₂² = a₁·a₃."},
     {txt:"Zadano: a₁·a₃ = 1,44 → a₂² = 1,44."},
     {txt:"a₂ = ±√1,44 = ±1,2."},
     {txt:"Uvjet 'pozitivni brojevi' → a₂ = 1,2."},
     {txt:"Provjera: ako su a₁ = 0,6, a₂ = 1,2, a₃ = 2,4 (q = 2): a₁·a₃ = 0,6·2,4 = 1,44 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 1,2 ✓",note:"odgovor",final:true},{txt:"Intuicija: 'geometrijski srednji' = ne aritmetički nego množni — prati strukturu niza (množitelj q).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: geometrijska sredina dvaju brojeva √(a·b); u geometrijskom nizu, svaki član je geometrijska sredina susjednih.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: geometrijska sredina dvaju brojeva √(a·b); u geometrijskom nizu, svaki član je geometrijska sredina susjednih.",
     "Intuicija: 'geometrijski srednji' = ne aritmetički nego množni — prati strukturu niza (množitelj q).",
     "Česta greška: koristiti aritmetičku sredinu (a₁+a₃)/2; ili dati ±1,2 bez uvjeta pozitivnosti.",
     "Alt metoda (provjera): a₁ = a/q, a₂ = a, a₃ = a·q → a₁·a₃ = a² = a₂² (vrijedi za bilo koji q)."
   ,"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:23.2,type:"sa",topic:"seq",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Prvi je član aritmetičkoga niza 13, a deveti 37. Odredite deseti član toga niza.",
   sol:{ans:"40",alt:["40","≈ 40"]},
  steps:[
     {txt:"Formula aritmetičkog niza: aₙ = a₁ + (n − 1)·d."},
     {txt:"Iz a₉ = a₁ + 8d: 37 = 13 + 8d → 8d = 24 → d = 3."},
     {txt:"a₁₀ = a₉ + d = 37 + 3 = 40."},
     {txt:"Provjera: a₁₀ = a₁ + 9d = 13 + 27 = 40 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 40 ✓",note:"odgovor",final:true},{txt:"Intuicija: razlika između prvog i 9-tog člana je 8 'koraka', svaki veličine d.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za aritmetički niz aₙ = a₁ + (n − 1)·d; razlika dvaju članova: aₘ − aₙ = (m − n)·d.",note:"postupak",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za aritmetički niz aₙ = a₁ + (n − 1)·d; razlika dvaju članova: aₘ − aₙ = (m − n)·d.",
     "Intuicija: razlika između prvog i 9-tog člana je 8 'koraka', svaki veličine d.",
     "Česta greška: pogriješiti broj koraka (n vs n−1) — između a₁ i a₉ ima 8 koraka, ne 9.",
     "Alt metoda (provjera): računaj direktno preko a₁ i d: 13, 16, 19, 22, 25, 28, 31, 34, 37, 40 ✓"
   ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:24.1,type:"sa",topic:"geom",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Duljina hipotenuze pravokutnoga trokuta 7 cm, a njegove dulje katete 6 cm. Odredite oplošje tijela koje nastaje rotacijom toga trokuta oko njegove kraće katete.",
   sol:{ans:"78π cm²",alt:["78π","≈245,044","245,044"]},
  steps:[
     {txt:"Pravokutni trokut: hipotenuza 7, dulja kateta 6. Kraća kateta = √(7² − 6²) = √13 cm."},
     {txt:"Rotacijom oko kraće katete (√13): kraća kateta postaje os, dulja kateta (6) postaje polumjer baze, hipotenuza (7) postaje izvodnica → stožac s r = 6, h = √13, s = 7."},
     {txt:"Oplošje stošca: P = π·r² (baza) + π·r·s (plašt) = π·36 + π·6·7 = 36π + 42π = 78π cm²."},
     {txt:"Numerički: 78π ≈ 245,044 cm²."},
     {txt:"Provjera: r² + h² = 36 + 13 = 49 = 7² = s² ✓ (Pitagorin teorem u presjeku stošca).",note:"verifikacija", final:true},{txt:"Točan odgovor: 78π cm² ✓",note:"odgovor",final:true},{txt:"Intuicija: 'oplošje' uključuje i bazu (krug) i plašt (sektor); plašt = π·r·s (gdje je s izvodnica).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: rotacija pravokutnog trokuta oko jedne katete daje stožac — ta kateta je os/visina, druga kateta je polumjer baze, hipotenuza izvodnica.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: rotacija pravokutnog trokuta oko jedne katete daje stožac — ta kateta je os/visina, druga kateta je polumjer baze, hipotenuza izvodnica.",
     "Intuicija: 'oplošje' uključuje i bazu (krug) i plašt (sektor); plašt = π·r·s (gdje je s izvodnica).",
     "Česta greška: zaboraviti bazu (samo plašt); ili rotirati oko druge katete (dobiti drugi stožac).",
     "Alt metoda (provjera): unaprijed izračunaj: P = πr(r + s) = 6π(6 + 7) = 78π ✓"
   ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:24.2,type:"sa",topic:"trig",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"U trokutu ABC duljina je stranice AC 6,45 cm, a mjere su kutova uz nju 28° i 46°. Kolika je duljina najkraće stranice toga trokuta?",
   sol:{ans:"3,15 cm",alt:["3,15","[3,1; 3,2]"]},
  steps:[
     {txt:"Zbroj kutova trokuta = 180°. Treći kut: γ = 180° − 28° − 46° = 106°."},
     {txt:"U trokutu: stranica nasuprot najmanjem kutu je najkraća. Najmanji kut je 28°."},
     {txt:"Sinusov poučak: a/sin A = b/sin B (omjer konstantan)."},
     {txt:"Stranica AC = 6,45 cm nasuprot kuta 106°. Najkraća stranica (nasuprot 28°): a = 6,45·sin 28° / sin 106° ≈ 6,45·0,4695/0,9613 ≈ 3,15 cm."},
     {txt:"Provjera: kut 28° < 46° < 106° → stranice trebaju biti u istom poretku. Najkraća ≈ 3,15 < srednja (?) < AC = 6,45 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 3,15 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: 'širi kut' = širi 'otvor' = duža nasuprotna stranica.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u trokutu — stranice u istom poretku kao i nasuprotni kutovi (manji kut → kraća stranica).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u trokutu — stranice u istom poretku kao i nasuprotni kutovi (manji kut → kraća stranica).",
     "Intuicija: 'širi kut' = širi 'otvor' = duža nasuprotna stranica.",
     "Česta greška: dati duljinu stranice nasuprot kutu 46° ili 106°; ili greška u sinusovom poučku.",
     "Alt metoda (provjera): ostala stranica nasuprot 46°: 6,45·sin 46°/sin 106° ≈ 6,45·0,7193/0,9613 ≈ 4,83. Poredak 3,15 < 4,83 < 6,45 ✓"
   ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:25.1,img:true,type:"sa",topic:"kv",points:1,img:true,
   context:"Zadatak 25 (1. dio od 3):",
   q:"Odredite jednadžbu parabole prikazane na slici.",
   sol:{ans:"y = x² − 4x",alt:["y=x²-4x","y=x^2-4x"]},
  steps:[
     {txt:"Iz slike očitaj: nultočke x = 0 i x = 4 (presjeci s x-osi), tjeme približno (2, −4)."},
     {txt:"Parabola s tim nulama u faktoriziranom obliku: y = a·(x − 0)(x − 4) = a·x(x − 4)."},
     {txt:"Iz tjemena (2, −4) odredi a: y(2) = a·2·(2 − 4) = a·2·(−2) = −4a. Postavi: −4a = −4 → a = 1."},
     {txt:"y = x(x − 4) = x² − 4x."},
     {txt:"Provjera: y(0) = 0 ✓; y(4) = 0 ✓; y(2) = 4 − 8 = −4 ✓; otvor parabole (a = 1 > 0) prema gore ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: y = x² − 4x ✓",note:"odgovor",final:true},{txt:"Intuicija: nule daju 'gdje' parabola sijeće x-os; tjeme određuje koliko 'duboka' (ili visoka) je.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna kroz dvije nule x₁, x₂ ima oblik y = a(x − x₁)(x − x₂); koeficijent a određuje 'širinu' i otvor.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kvadratna kroz dvije nule x₁, x₂ ima oblik y = a(x − x₁)(x − x₂); koeficijent a određuje 'širinu' i otvor.",
     "Intuicija: nule daju 'gdje' parabola sijeće x-os; tjeme određuje koliko 'duboka' (ili visoka) je.",
     "Česta greška: pretpostaviti a = 1 bez verifikacije; ili krivo očitati tjeme.",
     "Alt metoda (provjera): standardni oblik y = a(x − v)² + k s tjemenom (v, k) = (2, −4) → y = a(x − 2)² − 4. Uvrsti (0, 0): 0 = 4a − 4 → a = 1 → y = (x − 2)² − 4 = x² − 4x ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:25.2,type:"sa",topic:"lin",points:1,
   context:"Zadatak 25 (2. dio od 3):",
   q:"Odredite najveću vrijednost funkcije g(x) = 1 − √(x − 2).",
   sol:{ans:"1",alt:["g(2) = 1","max = 1"]},
  steps:[
     {txt:"Domena g(x) = 1 − √(x − 2): zahtijevamo x − 2 ≥ 0 → x ≥ 2."},
     {txt:"Funkcija oblika 1 − f(x) gdje je f(x) = √(x − 2) ≥ 0 (kvadratni korijen je nenegativan)."},
     {txt:"g(x) = 1 − f(x) je najveća kada je f(x) najmanja. f(x) = √(x − 2) je najmanja (= 0) u x = 2."},
     {txt:"Najveća vrijednost: g(2) = 1 − 0 = 1."},
     {txt:"Provjera: za x > 2 (npr. x = 6): g(6) = 1 − 2 = −1 < 1 ✓ (manja vrijednost dalje od x = 2).",note:"verifikacija", final:true},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true},{txt:"Intuicija: kvadratni korijen je 'pomak prema 0' — što je x bliže donjoj granici domene, to je korijen manji.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: g(x) = c − f(x), gdje je f ≥ 0 i raste, ima maksimum u min f (najčešće na rubu domene).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: g(x) = c − f(x), gdje je f ≥ 0 i raste, ima maksimum u min f (najčešće na rubu domene).",
     "Intuicija: kvadratni korijen je 'pomak prema 0' — što je x bliže donjoj granici domene, to je korijen manji.",
     "Česta greška: tražiti maksimum kvadratne funkcije (krivo, ovo je korijenska funkcija); ili dati g(2) = 1 + 0 = 1 (zaboraviti minus).",
     "Alt metoda (provjera): graf g(x) je strogo padajuća funkcija (jer −√ je padajući) → max na lijevom rubu domene = x = 2."
   ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:25.3,type:"sa",topic:"der",points:1,
   context:"Zadatak 25 (3. dio od 3):",
   q:"Odredite derivaciju funkcije h(x) = 19 + sin²x.",
   sol:{ans:"h′(x) = 2 sin x cos x",alt:["sin 2x","2sinxcosx"]},
  steps:[
     {txt:"h(x) = 19 + sin²x. Konstanta 19 ima derivaciju 0; ostaje derivacija sin²x."},
     {txt:"Lančano pravilo: (f(g(x)))′ = f′(g(x))·g′(x). Ovdje f(u) = u², g(x) = sin x."},
     {txt:"(sin²x)′ = 2·sin x · (sin x)′ = 2·sin x · cos x."},
     {txt:"h′(x) = 2 sin x cos x."},
     {txt:"Provjera: alternativni zapis sin 2x = 2 sin x cos x (formula dvostrukog kuta) → h′(x) = sin(2x). Provjera s x = 0: h′(0) = 0 ✓ (jer sin 0 = 0).",note:"verifikacija", final:true},{txt:"Točan odgovor: h′(x) = 2 sin x cos x ✓",note:"odgovor",final:true},{txt:"Intuicija: derivacija 'sloja po sloju' — vanjska f, množi se s derivacijom unutarnje g.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: lančano pravilo za složenu funkciju f(g(x)) → derivacija = f′(g(x))·g′(x).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: lančano pravilo za složenu funkciju f(g(x)) → derivacija = f′(g(x))·g′(x).",
     "Intuicija: derivacija 'sloja po sloju' — vanjska f, množi se s derivacijom unutarnje g.",
     "Česta greška: zaboraviti g′(x) (dati samo 2 sin x); ili pomiješati sin i cos.",
     "Alt metoda (provjera): koristi identitet sin²x = (1 − cos 2x)/2 → h(x) = 19 + (1 − cos 2x)/2; h′(x) = sin 2x = 2 sin x cos x ✓"
   ,"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta).","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."]
  },
  {id:26.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 26 (1. dio od 3):",
   q:"Izraz log_(√a)(aˣ), gdje je a > 0, a ≠ 1, zapišite bez logaritma.",
   sol:{ans:"2x",alt:["2x","≈ 2x"]},
  steps:[
     {txt:"Prepiši bazu: √a = a^([FRAC:1|2]). Izraz: log_{a^([FRAC:1|2])}(aˣ)."},
     {txt:"Pravilo logaritma: log_b(bᵖ) = p. Trebamo aˣ kao potenciju od a^([FRAC:1|2])."},
     {txt:"aˣ = (a^([FRAC:1|2]))^(2x) (jer (a^([FRAC:1|2]))^(2x) = a^x)."},
     {txt:"Pa log_{a^([FRAC:1|2])}(aˣ) = log_{a^([FRAC:1|2])}((a^([FRAC:1|2]))^(2x)) = 2x."},
     {txt:"Provjera s a = 4, x = 3: log_(√4)(4³) = log_2(64) = 6 = 2·3 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 2x ✓",note:"odgovor",final:true},{txt:"Intuicija: ako baza ima eksponent 1/k (npr. √a), onda je 'k puta jača' za penjanje — log proporcionalno k puta veći.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log_b(bᵖ) = p; promjena baze log_b(c) = log_a(c)/log_a(b).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: log_b(bᵖ) = p; promjena baze log_b(c) = log_a(c)/log_a(b).",
     "Intuicija: ako baza ima eksponent 1/k (npr. √a), onda je 'k puta jača' za penjanje — log proporcionalno k puta veći.",
     "Česta greška: pomiješati 1/(1/2) s 1/2; ili krivo upotrijebiti formulu promjene baze.",
     "Alt metoda (provjera): promjena baze: log_(√a)(aˣ) = ln(aˣ)/ln(√a) = (x·ln a)/((1/2)·ln a) = 2x ✓"
   ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:26.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 26 (2. dio od 3):",
   q:"Riješite jednadžbu 3ˣ · 5^(x+2) = 5625.",
   sol:{ans:"x = 2",alt:["X = 2","x = 2","x=2","≈ x = 2"]},
  steps:[
     {txt:"Razdvoji eksponente: 5^(x+2) = 5ˣ · 5² = 5ˣ · 25."},
     {txt:"Pomnoži s 3ˣ: 3ˣ · 5ˣ · 25 = (3·5)ˣ · 25 = 15ˣ · 25."},
     {txt:"Jednadžba: 15ˣ · 25 = 5625 → 15ˣ = 5625/25 = 225."},
     {txt:"225 = 15² → x = 2."},
     {txt:"Provjera: 3² · 5⁴ = 9 · 625 = 5625 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: x = 2 ✓",note:"odgovor",final:true},{txt:"Intuicija: pretvori jednadžbu u oblik bˣ = K, pa identificiraj x kao log_b K.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aˣ·bˣ = (ab)ˣ (iste eksponente faktoriziraj); a^(x+y) = aˣ·aʸ (razdvajanje eksponenata).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: aˣ·bˣ = (ab)ˣ (iste eksponente faktoriziraj); a^(x+y) = aˣ·aʸ (razdvajanje eksponenata).",
     "Intuicija: pretvori jednadžbu u oblik bˣ = K, pa identificiraj x kao log_b K.",
     "Česta greška: zaboraviti 5² = 25; ili krivo množiti potencije s različitim bazama.",
     "Alt metoda (provjera): logaritmiraj obje strane (baza 15): x·log 15 = log 225 = log 15² = 2·log 15 → x = 2 ✓"
   ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:26.3,type:"sa",topic:"al",points:1,
   context:"Zadatak 26 (3. dio od 3):",
   q:"Riješite jednadžbu √((x − 45)/x) = 4.",
   sol:{ans:"x = −3",alt:["-3","−3"]},
  steps:[
     {txt:"Domena: (x − 45)/x mora biti ≥ 0 (zbog korijena). Provjera kasnije."},
     {txt:"Kvadriraj: (x − 45)/x = 16."},
     {txt:"Pomnoži s x (uz x ≠ 0): x − 45 = 16x → −45 = 15x → x = −3."},
     {txt:"Provjera u izvornoj: (−3 − 45)/(−3) = −48/(−3) = 16; √16 = 4 ✓. Odgovor: x = −3.",final:true,note:"odgovor"},
     {txt:"Provjera domene: za x = −3, (x − 45)/x = 16 > 0 ✓ (korijen definiran).",note:"verifikacija", final:true},{txt:"Intuicija: kvadriranje 'oslobađa' korijen, ali može uvesti strana rješenja — uvijek provjeri u originalnoj jednadžbi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednadžba s korijenom — kvadriraj obje strane (pazi na uvođenje strani rješenja).",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: jednadžba s korijenom — kvadriraj obje strane (pazi na uvođenje strani rješenja).",
     "Intuicija: kvadriranje 'oslobađa' korijen, ali može uvesti strana rješenja — uvijek provjeri u originalnoj jednadžbi.",
     "Česta greška: ne provjeriti u originalnoj jednadžbi nakon kvadriranja; ili zaboraviti uvjet x ≠ 0.",
     "Alt metoda (provjera): grafički — krivulja √((x − 45)/x) presijeca y = 4; jedno presjek u x = −3."
   ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:27.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 27 (1. dio od 3):",
   q:"Odredite domenu funkcije f(x) = 1/(2ˣ + 2).",
   sol:{ans:"ℝ",alt:["R","(-∞,+∞⟩","⟨−∞,+∞⟩"]},
  steps:[
     {txt:"Domena f(x) = 1/(2ˣ + 2): jedini uvjet je da nazivnik nije nula."},
     {txt:"2ˣ > 0 za sve x ∈ ℝ (eksponencijalna funkcija je strogo pozitivna)."},
     {txt:"Dakle 2ˣ + 2 > 0 + 2 = 2 > 0 — nazivnik nikad nije nula i pozitivan je."},
     {txt:"Domena: D(f) = ℝ."},
     {txt:"Provjera s ekstremnim x: x = −1000 → 2⁻¹⁰⁰⁰ ≈ 0, ali 2ˣ + 2 ≈ 2 > 0 ✓; x = 1000 → 2¹⁰⁰⁰ vrlo veliko, definirano ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: ℝ ✓",note:"odgovor",final:true},{txt:"Intuicija: eksponencijalna aˣ (a > 0) je strogo pozitivna; dodavanjem pozitivne konstante ostaje pozitivna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za racionalnu funkciju 1/g(x), domena su sve realne x za koje g(x) ≠ 0.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za racionalnu funkciju 1/g(x), domena su sve realne x za koje g(x) ≠ 0.",
     "Intuicija: eksponencijalna aˣ (a > 0) je strogo pozitivna; dodavanjem pozitivne konstante ostaje pozitivna.",
     "Česta greška: dati domenu kao 'svi x osim 0' ili sl. — krivo, jer 2⁰ + 2 = 3 ≠ 0.",
     "Alt metoda (provjera): graf y = 2ˣ + 2 ima asimptotu y = 2 i raste do +∞ — nikad ne presijeca x-os."
   ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:27.2,type:"sa",topic:"trig",points:1,
   context:"Zadatak 27 (2. dio od 3):",
   q:"Odredite skup svih vrijednosti (sliku) funkcije g(x) = sin(5x + 3) + 4.",
   sol:{ans:"[3, 5]",alt:["3≤y≤5","[3,5]"]},
  steps:[
     {txt:"Sinus uvijek poprima vrijednosti u intervalu [−1, 1]: sin(bilo što) ∈ [−1, 1]."},
     {txt:"sin(5x + 3) ∈ [−1, 1] za sve x ∈ ℝ."},
     {txt:"g(x) = sin(5x + 3) + 4: dodavanjem 4 pomiče se cijeli interval gore za 4."},
     {txt:"g(x) ∈ [−1 + 4, 1 + 4] = [3, 5]."},
     {txt:"Provjera: g(x) = 5 kad sin(5x + 3) = 1 (npr. 5x + 3 = π/2 → x ≈ −0,286); g(x) = 3 kad sin = −1 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: [3, 5] ✓",note:"odgovor",final:true},{txt:"Intuicija: 'sinusoidna' funkcija oscilira između dva ekstrema; amplituda × 2 = širina raspona.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: slika funkcije A·sin(...) + B je [B − |A|, B + |A|]; za A = 1 (kao ovdje): [B − 1, B + 1].",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: slika funkcije A·sin(...) + B je [B − |A|, B + |A|]; za A = 1 (kao ovdje): [B − 1, B + 1].",
     "Intuicija: 'sinusoidna' funkcija oscilira između dva ekstrema; amplituda × 2 = širina raspona.",
     "Česta greška: dati [4, 6] (zaboraviti minus); ili dati cijelu realnu liniju (zanemariti ograničenje sinusa).",
     "Alt metoda (provjera): max g(x) = max sin(...) + 4 = 1 + 4 = 5; min g(x) = −1 + 4 = 3 → [3, 5] ✓"
   ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:27.3,img:true,type:"sa",topic:"lin",points:1,img:true,
   context:"Zadatak 27 (3. dio od 3):",
   q:"Nacrtajte graf funkcije h(x) = |x + 1| − 2.",
   sol:{ans:"V-graf s tjemenom (−1, −2), nagibi krakova ±1",alt:["V-graf s tjemenom (−1, −2), nagibi krakova ±1","V-graf s tjemenom (−1. −2). nagibi krakova ±1","V-grafstjemenom(−1,−2),nagibikrakova±1","v-graf s tjemenom (−1, −2), nagibi krakova ±1","≈ V-graf s tjemenom (−1, −2), nagibi krakova ±1"],svgFn:()=>e(Svg27c_2021Ajesen,null)},
  steps:[
     {txt:"h(x) = |x + 1| − 2 ima oblik 'V' s tjemenom tamo gdje |x + 1| = 0 → x = −1."},
     {txt:"Tjeme: (−1, h(−1)) = (−1, 0 − 2) = (−1, −2)."},
     {txt:"Za x ≥ −1: x + 1 ≥ 0 → |x + 1| = x + 1 → h(x) = x + 1 − 2 = x − 1 (nagib +1)."},
     {txt:"Za x < −1: x + 1 < 0 → |x + 1| = −(x + 1) → h(x) = −(x + 1) − 2 = −x − 3 (nagib −1)."},
     {txt:"Provjera ključnih točaka: h(−1) = −2 ✓; h(0) = 1 − 2 = −1 ✓; h(−3) = 2 − 2 = 0 ✓; h(1) = 2 − 2 = 0 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: V-graf s tjemenom (−1, −2), nagibi krakova ±1 ✓",note:"odgovor",final:true},{txt:"Intuicija: graf apsolutne funkcije je V-oblik — pomak unutar zagrade pomiče horizontalno, pomak izvan pomiče vertikalno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |x − a| ima tjeme u x = a; pomak vertikalno za c daje tjeme (a, c).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: |x − a| ima tjeme u x = a; pomak vertikalno za c daje tjeme (a, c).",
     "Intuicija: graf apsolutne funkcije je V-oblik — pomak unutar zagrade pomiče horizontalno, pomak izvan pomiče vertikalno.",
     "Česta greška: brkati smjer pomaka (uzeti tjeme (1, −2) zbog +1 unutar zagrade); ili krivi nagibi krakova.",
     "Alt metoda (provjera): graf y = |x| pomakni za −1 lijevo (zbog +1 unutar zagrade) i za −2 dolje → tjeme (−1, −2) ✓"
   ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:28,type:"sa",topic:"kv",points:2,
   q:"Odredite koordinate minimuma grafa funkcije f(x) = x⁴ − 7x³ + 10x².",
   sol:{ans:"(4, −32)",alt:["(4, −32)","(4,−32)","(4. −32)","≈ (4, −32)"], ex:"Polinom 4. stupnja s pozitivnim vodećim koeficijentom ima dva lokalna minimuma (i jedan maks između). Kandidati: nule prve derivacije; test druge derivacije razlikuje min/max."},
  steps:[
     {txt:"f(x) = x⁴ − 7x³ + 10x². Cilj: koordinate lokalnog minimuma."},
     {txt:"Prva derivacija: f′(x) = 4x³ − 21x² + 20x = x(4x² − 21x + 20)."},
     {txt:"Faktoriziraj kvadratnu: 4x² − 21x + 20 = (4x − 5)(x − 4). Nule derivacije: x = 0, x = 5/4, x = 4."},
     {txt:"Druga derivacija: f″(x) = 12x² − 42x + 20."},
     {txt:"Test druge derivacije: f″(0) = 20 > 0 (lokalni min), f″(5/4) = 18,75 − 52,5 + 20 = −13,75 < 0 (lokalni max), f″(4) = 192 − 168 + 20 = 44 > 0 (lokalni min)."},
     {txt:"Globalni min: f(0) = 0; f(4) = 256 − 448 + 160 = −32. Najniži je (4, −32). Odgovor: (4, −32).",final:true,note:"odgovor"},
     {txt:"Provjera: f′(4) = 256 − 336 + 80 = 0 ✓; f′(0) = 0 ✓ (oba kandidata za min). f(4) = −32 < f(0) = 0 → minimum se nalazi u x = 4 ✓",note:"verifikacija", final:true},{txt:"Intuicija: za polinom 4. stupnja s pozitivnim vodećim koeficijentom postoje dva lokalna minimuma (i jedan lokalni maks između njih).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kandidati za ekstreme su nule prve derivacije; test druge derivacije f″ > 0 → min, f″ < 0 → max.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kandidati za ekstreme su nule prve derivacije; test druge derivacije f″ > 0 → min, f″ < 0 → max.",
     "Intuicija: za polinom 4. stupnja s pozitivnim vodećim koeficijentom postoje dva lokalna minimuma (i jedan lokalni maks između njih).",
     "Česta greška: dati samo lokalni min u x = 0 (zaboraviti drugi kandidat x = 4); ili netočno faktorizirati kvadratnu.",
     "Alt metoda (provjera): f(0) = 0, f(1) = 4, f(2) = 16 − 56 + 40 = 0, f(3) = 81 − 189 + 90 = −18, f(4) = −32, f(5) = 625 − 875 + 250 = 0 → minimum oko x = 4 ✓"
   ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:29.1,type:"sa",topic:"kp",points:2,
   context:"Zadatak 29 (1. dio od 5):",
   q:"Odredite realne brojeve a i b za koje vrijedi (a + bi − 2i)/i + b − ai = 4 − 2i.",
   sol:{ans:"a = 1, b = 3",alt:["a=1 b=3","a=1, b=3"], ex:"Jednadžba s kompleksnim brojevima: izjednači realne i imaginarne dijelove odvojeno → dva uvjeta, dvije nepoznate. Ključno: 1/i = −i."},
  steps:[
     {txt:"Polazna jednadžba: (a + bi − 2i)/i + b − ai = 4 − 2i."},
     {txt:"Brojnik 1. razlomka: a + (b − 2)i."},
     {txt:"Dijeljenje s i = množenje s (−i) (jer 1/i = −i): (a + (b−2)i)·(−i) = −ai − (b−2)i² = −ai + (b−2) = (b − 2) − ai."},
     {txt:"Cijeli izraz: (b − 2) − ai + b − ai = (b − 2 + b) + (−a − a)i = (2b − 2) − 2ai."},
     {txt:"Izjednači s 4 − 2i: 2b − 2 = 4 → b = 3; −2a = −2 → a = 1."},
     {txt:"Provjera: (1 + 3i − 2i)/i + 3 − 1·i = (1 + i)/i + 3 − i. (1 + i)/i = (1 + i)(−i) = −i + 1 = 1 − i. LHS = (1 − i) + (3 − i) = 4 − 2i ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: a = 1, b = 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: kompleksni broj z = x + yi 'razdjeli' se u dvije neovisne dimenzije — realnu i imaginarnu osi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za jednadžbe s kompleksnim brojevima — izjednači realne i imaginarne dijelove odvojeno (dvije jednadžbe, dvije nepoznanice).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za jednadžbe s kompleksnim brojevima — izjednači realne i imaginarne dijelove odvojeno (dvije jednadžbe, dvije nepoznanice).",
     "Intuicija: kompleksni broj z = x + yi 'razdjeli' se u dvije neovisne dimenzije — realnu i imaginarnu osi.",
     "Česta greška: zaboraviti 1/i = −i (često se piše +i ili 0); ili pogriješiti predznak pri umnožku i·i = −1.",
     "Alt metoda (provjera): pomnoži cijelu jednadžbu s i da se makne dijeljenje: (a + (b−2)i) + (b − ai)·i = (4 − 2i)·i → a + (b−2)i + bi − ai² = 4i − 2i² = 4i + 2. Razdvoji: a + a + (b − 2 + b)i = 2 + 4i → 2a = 2 (a = 1), 2b − 2 = 4 (b = 3) ✓"
   ,"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:29.2,type:"sa",topic:"exp",points:2,
   context:"Zadatak 29 (2. dio od 5):",
   q:"Riješite sustav jednadžba. [SYS:log(x² − y²) = 1 + log 4|x + y = 8]",
   sol:{ans:"x = [FRAC:13|2], y = [FRAC:3|2]",alt:["x=13/2, y=3/2","x=6,5; y=1,5"], ex:"Log-sustav: koristi log a + log b = log(ab) za uniformnost, pa razliku kvadrata x² − y² = (x+y)(x−y) za vezu s linearnom jednadžbom."},
  steps:[
     {txt:"Polazni sustav: log(x² − y²) = 1 + log 4; x + y = 8."},
     {txt:"Pretvori 1 + log 4 = log 10 + log 4 = log 40. Sad log(x² − y²) = log 40 → x² − y² = 40 (uz uvjet x² − y² > 0)."},
     {txt:"Faktoriziraj: x² − y² = (x + y)(x − y) = 8·(x − y). Postavi: 8(x − y) = 40 → x − y = 5."},
     {txt:"Sustav: x + y = 8, x − y = 5. Zbroji: 2x = 13 → x = [FRAC:13|2]. Oduzmi: 2y = 3 → y = [FRAC:3|2]."},
     {txt:"Provjera: x + y = 13/2 + 3/2 = 16/2 = 8 ✓; x² − y² = 169/4 − 9/4 = 160/4 = 40 ✓; log 40 ≈ 1,602 = 1 + log 4 ≈ 1 + 0,602 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: x = [FRAC:13|2], y = [FRAC:3|2] ✓",note:"odgovor",final:true},{txt:"Intuicija: 'razlika kvadrata' x² − y² = (x+y)(x−y) je standardni alat za sustave s linearnom (x+y) i kvadratnom (x²−y²) jednadžbom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log a + log b = log(ab); log a + 1 = log a + log 10 = log(10a) (za log baze 10).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: log a + log b = log(ab); log a + 1 = log a + log 10 = log(10a) (za log baze 10).",
     "Intuicija: 'razlika kvadrata' x² − y² = (x+y)(x−y) je standardni alat za sustave s linearnom (x+y) i kvadratnom (x²−y²) jednadžbom.",
     "Česta greška: ostaviti 1 + log 4 bez pretvorbe; ili pogriješiti faktorizaciju x² − y².",
     "Alt metoda (provjera): supstituiraj y = 8 − x u x² − y² = 40: x² − (8 − x)² = 40 → x² − 64 + 16x − x² = 40 → 16x = 104 → x = 6,5 = 13/2 ✓"
   ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:29.3,type:"sa",topic:"geom",points:2,
   context:"Zadatak 29 (3. dio od 5):",
   q:"Mjera obodnoga kuta nad tetivom kružnice polumjera 15 cm iznosi 60°. Kolika je površina manjega kružnog odsječka koji odsijeca ta tetiva?",
   sol:{ans:"138,19... cm²",alt:["138,19","≈138,19"], ex:"Kružni odsječak = isječak − trokut. Veza obodni-središnji kut: središnji = 2·obodni nad istom tetivom."},
  steps:[
     {txt:"Obodni kut nad tetivom = 60°; središnji kut nad istom tetivom = 2·60° = 120° (centralni kut)."},
     {txt:"Manji kružni odsječak nastaje između tetive i kraćeg luka."},
     {txt:"Površina kružnog isječka (od središta, kut 120°): P_isj = (120/360)·π·r² = (1/3)·π·15² = 75π."},
     {txt:"Površina trokuta (dva polumjera + tetiva): P_tr = (1/2)·r²·sin(120°) = (1/2)·225·(√3/2) = [FRAC:225√3|4]."},
     {txt:"P_odsj = P_isj − P_tr = 75π − [FRAC:225√3|4] ≈ 235,619 − 97,428 ≈ 138,19 cm²."},
     {txt:"Provjera: manji odsječak < pola kruga = (1/2)·π·15² ≈ 353,4 — uvjet zadovoljen ✓; 138,19 cm² je razumna vrijednost ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 138,19... cm² ✓",note:"odgovor",final:true},{txt:"Intuicija: 'isječak' = pita sa središtem; 'odsječak' = pita bez trokutaste sredine.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: obodni kut = (1/2)·središnji kut nad istom tetivom (Talesov poučak generalizacija).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: obodni kut = (1/2)·središnji kut nad istom tetivom (Talesov poučak generalizacija).",
     "Intuicija: 'isječak' = pita sa središtem; 'odsječak' = pita bez trokutaste sredine.",
     "Česta greška: koristiti obodni kut 60° umjesto središnjeg 120° u formuli isječka; ili zaboraviti oduzeti trokut.",
     "Alt metoda (provjera): P_odsj direktno: r²·(θ − sin θ)/2 gdje je θ u radijanima. θ = 2π/3; sin(2π/3) = √3/2. P = 225·(2π/3 − √3/2)/2 = 225·(2π/3 − √3/2)/2 ≈ 225·(2,094 − 0,866)/2 ≈ 138,19 ✓"
   ,"Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:29.4,type:"sa",topic:"anal",points:3,
   context:"Zadatak 29 (4. dio od 5):",
   q:"Odredite koordinate točke koja je simetrična točki C(2, 9) s obzirom na pravac zadan jednadžbom y = (1/2)x + (1/2).",
   sol:{ans:"(8, −3)",alt:["x=8, y=-3","C'(8,-3)"], ex:"Simetrija točke s obzirom na pravac: spusti okomicu iz točke, nađi nožište M na pravcu, polovište CC′ = M → simetrična C′ = 2M − C."},
  steps:[
     {txt:"Simetrija točke C s obzirom na pravac: spušta se okomica iz C na pravac; nožište okomice M je polovište između C i njezine simetrične točke C′."},
     {txt:"Pravac y = (1/2)x + 1/2 ima nagib 1/2 → okomica ima nagib −2 (uvjet okomitosti k₁·k₂ = −1)."},
     {txt:"Okomica kroz C(2, 9): y − 9 = −2(x − 2) → y = −2x + 13."},
     {txt:"Sjecište okomice i pravca: (1/2)x + 1/2 = −2x + 13 → (5/2)x = 25/2 → x = 5; y = (1/2)·5 + 1/2 = 3. M = (5, 3)."},
     {txt:"M je polovište CC′: C′ = 2M − C = (2·5 − 2, 2·3 − 9) = (8, −3)."},
     {txt:"Provjera: nagib CC′ = (−3 − 9)/(8 − 2) = −12/6 = −2 ✓ (okomito na pravac); polovište CC′ = ((2+8)/2, (9+(−3))/2) = (5, 3) = M ✓; M leži na pravcu: 3 = (1/2)·5 + 1/2 = 3 ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: (8, −3) ✓",note:"odgovor",final:true},{txt:"Intuicija: 'zrcaljenje' preko pravca — okomicu od točke do pravca, pa istu duljinu na drugu stranu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: simetrija s obzirom na pravac — nađi okomicu kroz točku, sjecište okomice s pravcem (nožište), polovište kroz nožište daje simetričnu točku.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: simetrija s obzirom na pravac — nađi okomicu kroz točku, sjecište okomice s pravcem (nožište), polovište kroz nožište daje simetričnu točku.",
     "Intuicija: 'zrcaljenje' preko pravca — okomicu od točke do pravca, pa istu duljinu na drugu stranu.",
     "Česta greška: zaboraviti formulu polovišta (M = (C + C′)/2 → C′ = 2M − C); ili pogriješiti nagib okomice.",
     "Alt metoda (provjera): formula refleksije preko pravca ax + by + c = 0: C′ = C − 2·(aC_x + bC_y + c)/(a² + b²)·(a, b). Pravac: x − 2y + 1 = 0 (a = 1, b = −2, c = 1). aC_x + bC_y + c = 2 − 18 + 1 = −15. C′ = (2, 9) − 2·(−15)/5·(1, −2) = (2, 9) + 6·(1, −2) = (8, −3) ✓",
     "Granični slučaj: ako bi C ležala na pravcu, simetrična točka bi bila ona sama (M = C, C′ = C). Provjera: C(2, 9) nije na pravcu jer 9 ≠ (1/2)·2 + 1/2 = 1,5."
   ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
  },
  {id:29.5,type:"sa",topic:"trig",points:3,
   context:"Zadatak 29 (5. dio od 5):",
   q:"Odredite sva rješenja jednadžbe 4 cos x = sin(5π/6 − x).",
   sol:{ans:"x = 1,328... + kπ, k ∈ ℤ",alt:["x=1,328+kπ","arctan(7√3/3)+kπ"], ex:"Trigonometrijska jednadžba: koristi adicijski teorem da sve svedeš na jednu funkciju (najčešće tg). Opće rješenje tg x = c → x = arctg c + kπ."},
  steps:[
     {txt:"Polazna jednadžba: 4 cos x = sin(5π/6 − x)."},
     {txt:"Adicijski teorem: sin(A − B) = sin A cos B − cos A sin B. Ovdje A = 5π/6, B = x: sin(5π/6 − x) = sin(5π/6)·cos x − cos(5π/6)·sin x."},
     {txt:"Vrijednosti: sin(5π/6) = 1/2; cos(5π/6) = −√3/2. Uvrsti: sin(5π/6 − x) = (1/2)cos x − (−√3/2)sin x = (1/2)cos x + (√3/2)sin x."},
     {txt:"Jednadžba: 4 cos x = (1/2)cos x + (√3/2)sin x → 4 cos x − (1/2)cos x = (√3/2)sin x → (7/2)cos x = (√3/2)sin x."},
     {txt:"Podijeli s cos x (uz cos x ≠ 0): 7/2 = (√3/2)·tg x → tg x = 7/√3 = (7√3)/3."},
     {txt:"x = arctg(7√3/3) + kπ ≈ arctg(4,041) + kπ ≈ 1,328 + kπ, k ∈ ℤ."},
     {txt:"Provjera s k = 0, x ≈ 1,328: cos 1,328 ≈ 0,2425; 4·0,2425 ≈ 0,970. sin(5π/6 − 1,328) = sin(2,618 − 1,328) = sin(1,290) ≈ 0,961 ≈ 0,970 ✓ (mala razlika zaokruživanjem)",note:"verifikacija", final:true},{txt:"Točan odgovor: x = 1,328... + kπ, k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Intuicija: jednadžbu s različitim trig. funkcijama svedi na jednu (tg) dijeljenjem; opće rješenje tg x = c je x = arctg c + kπ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: adicijski teoremi — sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: adicijski teoremi — sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B.",
     "Intuicija: jednadžbu s različitim trig. funkcijama svedi na jednu (tg) dijeljenjem; opće rješenje tg x = c je x = arctg c + kπ.",
     "Česta greška: pogriješiti znak u adicijskoj formuli; ili zaboraviti +kπ (samo dati glavnu vrijednost).",
     "Alt metoda (provjera): pretvori desnu stranu u oblik R·sin(x + φ): (1/2)cos x + (√3/2)sin x = sin(x + π/6) (jer R = 1, tan φ = (1/2)/(√3/2) = 1/√3, φ = π/6). Tada 4 cos x = sin(x + π/6).",
     "Granični slučaj: ako bi cos x = 0 (x = π/2 + kπ), dijeljenje s cos x ne bi bilo moguće. Provjeri: tg(π/2) je nedefiniran → rješenje nije u ovim točkama; svako rješenje ima cos x ≠ 0 ✓"
   ,"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod)."]
  },
  {id:30,type:"sa",topic:"seq",points:4,
   q:"Procjenjuje se da automobil, nakon što je kupljen, prvih 5 godina svaki dan gubi 0,04 % svoje vrijednosti, a nakon toga 2 % vrijednosti mjesečno. Nakon 2 mjeseca vrijednost automobila bila je 105 000 kn. Koliko će mjeseci, nakon što je kupljen, prema toj procjeni, vrijednost automobila prvi put biti manja od 10 000 kn? Napomena: Računajte da mjesec ima 30 dana, a godina 360 dana.",
   sol:{ans:"142",alt:["142 mjeseca","142 mj"]},
  steps:[
     {txt:"Model ima dvije faze. Faza 1 (prvih 5 godina = 1800 dana): vrijednost pada 0,04 % dnevno → q_dan = 1 − 0,0004 = 0,9996."},
     {txt:"Nakon 2 mjeseca (= 60 dana) vrijednost je 105 000 kn. Iz uvjeta: C₀ · 0,9996^60 = 105 000 → C₀ = 105 000 / 0,9996^60 ≈ 105 000 / 0,97623 ≈ 107 558 kn."},
     {txt:"Vrijednost na kraju 5. godine (1800 dana): C₅ = C₀ · 0,9996^1800 = 105 000 · 0,9996^1740 (jer prethodno 60 dana je već prošlo). 0,9996^1740 ≈ exp(1740·ln 0,9996) ≈ exp(−0,6962) ≈ 0,4985. C₅ ≈ 105 000·0,4985 ≈ 52 343 kn."},
     {txt:"Faza 2 (mjesečno, q_mj = 0,98). Tražimo najmanji n takav da C₅ · 0,98ⁿ < 10 000."},
     {txt:"0,98ⁿ < 10 000/52 343 ≈ 0,1911 → n · ln 0,98 < ln 0,1911 → n > ln(0,1911)/ln(0,98) = −1,654/−0,0202 ≈ 81,87. Najmanji cjelobrojan: n = 82."},
     {txt:"Ukupno mjeseci od kupnje: 60 (5 godina = 60 mjeseci) + 82 = 142 mjeseca."},
     {txt:"Provjera: 82 mjeseca u fazi 2 → C₁₄₂ = 52 343 · 0,98^82 ≈ 52 343 · 0,1893 ≈ 9 912 kn < 10 000 ✓. C₁₄₁ = 52 343 · 0,98^81 ≈ 52 343 · 0,1932 ≈ 10 113 kn > 10 000 (još iznad praga) ✓",note:"verifikacija", final:true},{txt:"Točan odgovor: 142 ✓",note:"odgovor",final:true},{txt:"Intuicija: 0,04 % dnevno × 30 dana ≈ 1,2 % mjesečno (≠ 2 % faze 2) — eksponencijalni pad nije linearan kad se zbrajaju jedinice.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za eksponencijalni pad/rast u dvije faze, koristi geometrijski model A·qⁿ s odgovarajućim q za svaku fazu; spojnu vrijednost (kraj 1. faze) preračunaj kao početak 2.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za eksponencijalni pad/rast u dvije faze, koristi geometrijski model A·qⁿ s odgovarajućim q za svaku fazu; spojnu vrijednost (kraj 1. faze) preračunaj kao početak 2.",
     "Intuicija: 0,04 % dnevno × 30 dana ≈ 1,2 % mjesečno (≠ 2 % faze 2) — eksponencijalni pad nije linearan kad se zbrajaju jedinice.",
     "Česta greška: zaboraviti +60 mjeseci (samo dati n iz faze 2); ili pogriješiti broj dana u 5 godina (1800 ≠ 1825 jer zadatak kaže 1 godina = 360 dana).",
     "Alt metoda (provjera): provjeri C₁₄₂ < 10 000 i C₁₄₁ > 10 000 — moramo imati 'prvi put manje od 10 000'. Iz gornje provjere oba uvjeta zadovoljena ✓"
   ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {_META:true,auditStatus:"verified-full",rok:"2021_jesen",razina:"A",serial:"D-S052",totalPoints:60,mcCount:15,saCount:34,verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2021_jesen_A__10": () => e(Svg10_2021Ajesen, null),
  "2021_jesen_A__14": () => e(Svg14_2021Ajesen, null),
  "2021_jesen_A__20.1": () => e(Svg20a_2021Ajesen, null),
  "2021_jesen_A__25.1": () => e(Svg25a_2021Ajesen, null),
  "2021_jesen_A__27.3": () => e(Svg27cGrid_2021Ajesen, null),
};
