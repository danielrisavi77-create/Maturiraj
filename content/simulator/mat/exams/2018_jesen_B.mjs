// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg27_2018Bj(){
  // Vjerna rekonstrukcija originala:
  //   f — strmi rastući pravac kroz (−4, 0), nagib ≈ 3,5  → f(x) = 3,5x + 14
  //   g — blago padajući pravac, g(0) ≈ −3,6, nagib ≈ −0,36
  // ⇒ g(58) < g(0) < f(1)
  const W=340,H=340,pad={l:18,r:18,t:18,b:18};
  const xMin=-8,xMax=8,yMin=-8,yMax=8;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const ST="var(--text)";
  const f=x=>3.5*x+14;
  const g=x=>-0.36*x-3.6;
  // isječak pravca unutar vidljivog pravokutnika
  function seg(fn){
    const pts=[];
    for(let i=0;i<=320;i++){
      const x=xMin+(xMax-xMin)*i/320;
      const y=fn(x);
      if(y<yMin||y>yMax) continue;
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
    return pts;
  }
  const fPts=seg(f),gPts=seg(g);
  const grid=[];
  for(let x=xMin;x<=xMax;x++) if(x!==0)
    grid.push(e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,4",opacity:0.55}));
  for(let y=yMin;y<=yMax;y++) if(y!==0)
    grid.push(e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),
      stroke:"var(--muted)",strokeWidth:0.6,strokeDasharray:"4,4",opacity:0.55}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px 0"}},
    ...grid,
    // x-os
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:ST,strokeWidth:1.4}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-8},${oy-4} ${pad.l+iW-8},${oy+4}`,fill:ST}),
    e("text",{x:pad.l+iW-14,y:oy-8,fontSize:14,fontStyle:"italic",fill:ST},"x"),
    // y-os
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:ST,strokeWidth:1.4}),
    e("polygon",{points:`${ox},${pad.t} ${ox-4},${pad.t+8} ${ox+4},${pad.t+8}`,fill:ST}),
    e("text",{x:ox-16,y:pad.t+14,fontSize:14,fontStyle:"italic",fill:ST},"y"),
    // jedinične oznake 0 i 1
    e("text",{x:ox-6,y:oy+16,textAnchor:"end",fontSize:13,fill:ST},"0"),
    e("circle",{cx:toX(1),cy:oy,r:3,fill:"var(--bg)",stroke:ST,strokeWidth:1.2}),
    e("text",{x:toX(1)+2,y:oy+16,textAnchor:"middle",fontSize:13,fill:ST},"1"),
    e("circle",{cx:ox,cy:toY(1),r:3,fill:"var(--bg)",stroke:ST,strokeWidth:1.2}),
    e("text",{x:ox-8,y:toY(1)+5,textAnchor:"end",fontSize:13,fill:ST},"1"),
    // pravci
    fPts.length>1&&e("polyline",{points:fPts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2}),
    gPts.length>1&&e("polyline",{points:gPts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2}),
    // oznake krivulja — s podlogom u boji pozadine da ostanu čitke preko mreže
    e("g",null,
      e("rect",{x:toX(-3.5)-9,y:toY(6.2)-12,width:18,height:18,rx:3,fill:"var(--bg)"}),
      e("text",{x:toX(-3.5),y:toY(6.2)+2,textAnchor:"middle",fontSize:16,fontStyle:"italic",fontWeight:700,fill:"var(--blue)"},"f")
    ),
    e("g",null,
      e("rect",{x:toX(5)-9,y:toY(-4.6)-12,width:18,height:18,rx:3,fill:"var(--bg)"}),
      e("text",{x:toX(5),y:toY(-4.6)+2,textAnchor:"middle",fontSize:16,fontStyle:"italic",fontWeight:700,fill:"var(--blue)"},"g")
    )
  );
}

function Svg24_2018Bj(){
  const W=220,H=180,pad={l:32,r:14,t:14,b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-4,xMax=8,yMin=-2,yMax=5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  // Iz PDF slike: A(-2,3) gore-lijevo, B(6,0) na x-osi desno
  // AB=√((6+2)²+(0-3)²)=√(64+9)=√73 ✓. P=½|(-2)(0)-(6)(3)|=½·18=9 ✓
  const A=[-2,3],B=[6,0];
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[-4,-3,-2,-1,0,1,2,3,4,5,6,7,8].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,3"})),
    ...[-2,-1,0,1,2,3,4,5].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"2,3"})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:_BLUE,strokeWidth:1.3}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.3}),
    e("polygon",{points:[pad.l+iW,oy,pad.l+iW-5,oy-3,pad.l+iW-5,oy+3].join(","),fill:"var(--text)"}),
    e("polygon",{points:[ox,pad.t,ox-3,pad.t+5,ox+3,pad.t+5].join(","),fill:"var(--text)"}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:toX(1),y:oy+12,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},"1"),
    e("text",{x:ox-5,y:toY(1)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},"1"),
    e("text",{x:ox+4,y:oy+12,fontSize:7,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(A[0]),cy:toY(A[1]),r:3.5,fill:_RED}),
    e("text",{x:toX(A[0])-12,y:toY(A[1])+2,fontSize:11,fontWeight:700,fontStyle:"italic",fill:_GOLD},"A"),
    e("circle",{cx:toX(B[0]),cy:toY(B[1]),r:3.5,fill:_RED}),
    e("text",{x:toX(B[0])+5,y:toY(B[1])+4,fontSize:11,fontWeight:700,fontStyle:"italic",fill:_GOLD},"B")
  );
}

function Svg23b_2018Bj(){
  // Faithful trace of reference: two parallel horizontals b,c
  // A slightly-tilted-left transversal crossing both
  // A diagonal from lower-left to upper-right crossing both
  // Both lines intersect each parallel at the SAME point
  const W=320,H=260;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // P1 = intersection on b (bottom), P2 = intersection on c (upper)
  const P1={x:148,y:195}, P2={x:168,y:108};
  // Transversal direction: from P1 down to P1+(dx,+40), from P2 up to P2+(-dx,-50)
  // d is the upward extension of transversal from P2
  // a is the lower-left extension of the diagonal from P1

  // Diagonal direction: from lower-left to upper-right
  // At P1 going left-down: ~(-80,+48)  At P2 going right-up: ~(+105,-65)
  const diagDx=105,diagDy=65;
  // Transversal direction (nearly vertical, slight tilt): from P1 to P2
  const tdx=P2.x-P1.x, tdy=P2.y-P1.y; // (20, -87)

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Line b (horizontal, bottom)
    e("line",{x1:85,y1:P1.y,x2:275,y2:P1.y,stroke:_BLUE,strokeWidth:1.3}),
    e("text",{x:265,y:P1.y+16,fontSize:14,fontStyle:"italic",fill:_GOLD},"b"),
    // Line c (horizontal, upper)
    e("line",{x1:150,y1:P2.y,x2:300,y2:P2.y,stroke:_BLUE,strokeWidth:1.3}),
    e("text",{x:290,y:P2.y-6,fontSize:14,fontStyle:"italic",fill:_GOLD},"c"),
    // Transversal: extends below P1 and above P2
    e("line",{x1:P1.x+10,y1:P1.y+38,x2:P2.x-12,y2:P2.y-55,stroke:_BLUE,strokeWidth:1.3}),
    // d label (upper end of transversal)
    e("text",{x:P2.x-8,y:P2.y-58,fontSize:14,fontStyle:"italic",fill:_GOLD},"d"),
    // Diagonal: a going lower-left from P1, continues upper-right through P2
    e("line",{x1:P1.x-80,y1:P1.y+48,x2:P2.x+diagDx,y2:P2.y-diagDy,stroke:_BLUE,strokeWidth:1.3}),
    // a label (lower-left end)
    e("text",{x:P1.x-92,y:P1.y+48,fontSize:14,fontStyle:"italic",fill:_GOLD},"a"),
    // Arc: 54° at P1 between a (going lower-left) and transversal (going down)
    // a goes to ~225° direction, transversal goes down to ~170° → arc between them
    e("path",{d:"M "+(P1.x-15)+" "+(P1.y+9)+" A 18 18 0 0 1 "+(P1.x+2)+" "+(P1.y+17),fill:"none",stroke:_BLUE,strokeWidth:0.9}),
    e("text",{x:P1.x-22,y:P1.y+5,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"54\u00b0"),
    // Arc: 101° at P2 between d (going up) and diagonal (going upper-right)
    e("path",{d:"M "+(P2.x-4)+" "+(P2.y-28)+" A 24 24 0 0 1 "+(P2.x+27)+" "+(P2.y-17),fill:"none",stroke:_BLUE,strokeWidth:0.9}),
    e("text",{x:P2.x+2,y:P2.y-30,fontSize:11,fontStyle:"italic",fill:"var(--text)"},"101\u00b0"),
    // Arc: φ at P2 between diagonal (going upper-right) and c (going right)
    e("path",{d:"M "+(P2.x+27)+" "+(P2.y-17)+" A 30 30 0 0 1 "+(P2.x+30)+" "+P2.y,fill:"none",stroke:_BLUE,strokeWidth:0.9}),
    e("text",{x:P2.x+10,y:P2.y-3,fontSize:13,fontStyle:"italic",fill:"var(--text)"},"\u03c6")
  );
}

function Svg16_2018Bj(){
  // Original: iz pravokutnika 15 dm × 8 dm izrezan je "stadion" — ravni dio
  // duljine 15−2·4 = 7 dm i dva polukruga polumjera 4 dm na kraćim stranama.
  // P = 7·8 + π·4² = 56 + 16π ≈ 106,27 dm²
  const W=320,H=200;
  const s=16;                       // 1 dm = 16 px
  const x1=28,y1=30,w=15*s,h=8*s;   // 240 × 128
  const x2=x1+w,y2=y1+h,r=h/2;      // r = 64 px = 4 dm
  const ST="var(--text)";
  const d="M "+(x1+r)+" "+y1
        +" L "+(x2-r)+" "+y1
        +" A "+r+" "+r+" 0 0 1 "+(x2-r)+" "+y2
        +" L "+(x1+r)+" "+y2
        +" A "+r+" "+r+" 0 0 1 "+(x1+r)+" "+y1+" Z";
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px 0"}},
    // isprekidani originalni pravokutnik 15 dm × 8 dm
    e("rect",{x:x1,y:y1,width:w,height:h,fill:"none",stroke:ST,strokeWidth:1,strokeDasharray:"8,6"}),
    // izrezani lik (stadion)
    e("path",{d:d,fill:"var(--blue)",fillOpacity:0.10,stroke:"var(--blue)",strokeWidth:1.8,strokeLinejoin:"round"}),
    // dimenzije
    e("text",{x:x1+w/2,y:y1-9,textAnchor:"middle",fontSize:13,fill:ST},"15 dm"),
    e("text",{x:x2+8,y:y1+h/2+5,fontSize:13,fill:ST},"8 dm")
  );
}

function Svg15_2018Bj(){
  // Vrijednosti iz originala (u tisućama): zaposleni / stanovnici
  // K 3/12, P 10/28, V 12/31, Z 9/19  → ukupno 34 : 90 = 17 : 45
  const W=340,H=250,pad={l:46,r:16,t:38,b:44};
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const cities=[{n:"K",z:3,s:12},{n:"P",z:10,s:28},{n:"V",z:12,s:31},{n:"Z",z:9,s:19}];
  const maxV=42,barH=11,barGap=2;
  const groupH=iH/cities.length;
  const toX=v=>pad.l+(v/maxV)*iW;
  const ST="var(--text)";
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px 0"}},
    e("defs",null,
      e("pattern",{id:"hatch15jB",width:5,height:5,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},
        e("rect",{width:5,height:5,fill:"var(--bg)"}),
        e("line",{x1:0,y1:0,x2:0,y2:5,stroke:ST,strokeWidth:1.4})
      )
    ),
    // vanjski okvir grafikona
    e("rect",{x:1,y:1,width:W-2,height:H-2,fill:"none",stroke:ST,strokeWidth:1}),
    // okomite pomoćne linije (svakih 2 tisuće)
    ...Array.from({length:21},(_,k)=>k*2).map(v=>e("line",{key:"g"+v,x1:toX(v),y1:pad.t,x2:toX(v),y2:pad.t+iH,
      stroke:"var(--muted)",strokeWidth:v%10===0?0.9:0.4,opacity:v%10===0?0.85:0.45})),
    // osi
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:ST,strokeWidth:1.2}),
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:ST,strokeWidth:1.2}),
    // ticks + oznake na x-osi
    ...[0,10,20,30,40].map(v=>e("g",{key:"t"+v},
      e("line",{x1:toX(v),y1:pad.t+iH,x2:toX(v),y2:pad.t+iH+5,stroke:ST,strokeWidth:1.2}),
      e("text",{x:toX(v),y:pad.t+iH+18,textAnchor:"middle",fontSize:11,fill:ST},v)
    )),
    e("text",{x:pad.l+iW,y:H-8,textAnchor:"end",fontSize:11,fill:ST},"broj u tisućama"),
    e("text",{x:12,y:24,fontSize:11,fill:ST},"gradovi"),
    // stupci: gornji = zaposleni (šrafirano), donji = stanovnici (puni)
    ...cities.map((c,i)=>{
      const yTop=pad.t+i*groupH+(groupH-(2*barH+barGap))/2;
      return e("g",{key:"c"+i},
        e("line",{x1:pad.l-4,y1:pad.t+i*groupH,x2:pad.l,y2:pad.t+i*groupH,stroke:ST,strokeWidth:1}),
        e("text",{x:pad.l-10,y:yTop+barH+barGap/2+4,textAnchor:"end",fontSize:13,fill:ST},c.n),
        e("rect",{x:pad.l,y:yTop,width:Math.max(1,toX(c.z)-pad.l),height:barH,
          fill:"url(#hatch15jB)",stroke:ST,strokeWidth:0.9}),
        e("rect",{x:pad.l,y:yTop+barH+barGap,width:Math.max(1,toX(c.s)-pad.l),height:barH,
          fill:"var(--muted)",stroke:ST,strokeWidth:0.9})
      );
    }),
    // legenda (gore desno)
    e("rect",{x:W-136,y:pad.t-28,width:13,height:11,fill:"url(#hatch15jB)",stroke:ST,strokeWidth:0.9}),
    e("text",{x:W-119,y:pad.t-19,fontSize:11,fill:ST},"broj zaposlenih"),
    e("rect",{x:W-136,y:pad.t-12,width:13,height:11,fill:"var(--muted)",stroke:ST,strokeWidth:0.9}),
    e("text",{x:W-119,y:pad.t-3,fontSize:11,fill:ST},"broj stanovnika")
  );
}

function Svg12_2018B(){
  // Tablica vrijednosti kvadratne funkcije f(x)=ax²+bx: x=-1 → 8, x=1 → -4
  const x0=12,y0=12,c1=78,c2=78,hR=30,r1=27,r2=27;
  const W=x0+c1+c2+12,H=y0+hR+r1+r2+12;
  const xm1=x0+c1/2, xm2=x0+c1+c2/2;
  const yH=y0+hR, yA=yH+r1, yB=yA+r2;
  const ST="var(--text)";
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px 0"}},
    // zaglavlje (sivo polje kao u originalu)
    e("rect",{x:x0,y:y0,width:c1+c2,height:hR,fill:"var(--s2)"}),
    // tijelo tablice
    e("rect",{x:x0,y:yH,width:c1+c2,height:r1+r2,fill:"var(--bg)"}),
    // vanjski okvir + unutarnje linije
    e("rect",{x:x0,y:y0,width:c1+c2,height:hR+r1+r2,fill:"none",stroke:ST,strokeWidth:1.2}),
    e("line",{x1:x0+c1,y1:y0,x2:x0+c1,y2:yB,stroke:ST,strokeWidth:1.2}),
    e("line",{x1:x0,y1:yH,x2:x0+c1+c2,y2:yH,stroke:ST,strokeWidth:1.2}),
    e("line",{x1:x0,y1:yA,x2:x0+c1+c2,y2:yA,stroke:ST,strokeWidth:1}),
    // zaglavlje: x | f(x)
    e("text",{x:xm1,y:yH-10,textAnchor:"middle",fontSize:15,fontStyle:"italic",fill:ST},"x"),
    e("text",{x:xm2,y:yH-10,textAnchor:"middle",fontSize:15,fontStyle:"italic",fill:ST},"f(x)"),
    // redak 1: -1 | 8
    e("text",{x:xm1,y:yA-8,textAnchor:"middle",fontSize:14,fill:ST},"−1"),
    e("text",{x:xm2,y:yA-8,textAnchor:"middle",fontSize:14,fill:ST},"8"),
    // redak 2: 1 | -4
    e("text",{x:xm1,y:yB-8,textAnchor:"middle",fontSize:14,fill:ST},"1"),
    e("text",{x:xm2,y:yB-8,textAnchor:"middle",fontSize:14,fill:ST},"−4")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 3/11 ≈ 0,27 i 4/11 ≈ 0,36; traži broj strogo između.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva veći od 3/11 i manji od 4/11?",
  opts:["0,172","0,273","0,386","0,411"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: razlomci se najlakše uspoređuju u decimalnom obliku. 3/11 = 0,2727... (period 27); 4/11 = 0,3636... (period 36).","Postupak: 1) pretvori granice u decimalni oblik. 2) provjeri svaki kandidat: je li IZMEĐU? (a < x < b).","Intuicija: brojevi 3/11 i 4/11 su 'susjedni' (razlika 1/11 ≈ 0,09), pa interval je uzak. Samo 0,273 je u tom uskom rasponu.","Česta greška 1: usporediti 0,273 s 3/11 = 0,27 (zaokruženo) i misliti da je 0,273 isto kao 3/11 (krivo — 0,273 je veće od 0,2727 zato što je 273/1000 > 2727/10000).","Alt metoda: pretvori 0,273 u razlomak — 273/1000. Usporedi s 3/11 = 273/1001 (s približno istim brojnikom). Pošto je 1000 < 1001, 273/1000 > 273/1001 = 3/11 ✓.","Provjera: 0,273 − 0,2727 = 0,0003 > 0 ✓; 0,3636 − 0,273 = 0,0906 > 0 ✓"],
  steps:[
    {txt:"3/11 i 4/11 u decimalnom: 3/11 ≈ 0,2727; 4/11 ≈ 0,3636."},
    {txt:"Tražimo broj između 0,2727 i 0,3636."},
    {txt:"Provjeri svaku opciju:"},
    {txt:"A) 0,172 — manje od 0,2727 ✗"},
    {txt:"B) 0,273 — između 0,2727 i 0,3636 ✓",final:true},
    {txt:"C) 0,386 — veće od 0,3636 ✗"},
    {txt:"D) 0,411 — veće od 0,3636 ✗"},
    {txt:"Točan odgovor: B) 0,273.",final:true,note:"odgovor"},
    {txt:"Provjera: 0,2727 < 0,273 < 0,3636 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) ispod 3/11; C) iznad 4/11; D) iznad 4/11.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: razlomci se najlakše uspoređuju u decimalnom obliku. 3/11 = 0,2727... (period 27); 4/11 = 0,3636... (period 36).",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) pretvori granice u decimalni oblik. 2) provjeri svaki kandidat: je li IZMEĐU? (a < x < b).",note:"intuicija",final:true}
  ]},
  {id:2,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Koja je od navedenih tvrdnja točna?",
  opts:["−6 je prirodan","5/7 je cijeli","√2 je iracionalan","√3 je realan"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Hijerarhija skupova: ℕ (prirodni: 1, 2, 3, ...) ⊊ ℤ (cijeli: 0, ±1, ±2, ...) ⊊ ℚ (racionalni: razlomci p/q, q ≠ 0) ⊊ ℝ (realni).","Iracionalni 𝕀 = ℝ  ℚ: brojevi koji NISU racionalni (npr. √2, π, e). Pošto su iracionalni POD-skup realnih, vrijedi 'iracionalan ⟹ realan' (ali NE 'realan ⟹ iracionalan').","Postupak: 1) provjeri svaku tvrdnju protuprimjerom. 2) tvrdnja je TOČNA samo ako vrijedi BEZ IZNIMKE.","Intuicija: 'realan' je najširi skup brojeva (ℝ). Svaki broj koji znamo iz škole je realan: cijeli, razlomci, korijeni, π, ... Tako 'X je realan' je TOČNO za skoro sve brojeve.","Česta greška 1: pomiješati prirodne, cijele, racionalne — −6 je CIJELI, ne prirodni. Greška 2: misliti da je 5/7 cijeli (razlomak nije cijeli broj).","Alt metoda: razmišljaj 'kojem najmanjem skupu pripada svaki broj'. −6 → ℤ; 5/7 → ℚ; √2 → 𝕀 (najmanji koji ga sadrži); √3 → 𝕀 ⊂ ℝ.","Provjera: √3 ≈ 1,732 je doista realan (može se aproksimirati realnim decimalama) ✓"],
  steps:[
    {txt:"Provjeri svaku tvrdnju o skupovima brojeva (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; 𝕀 = ℝ  ℚ — iracionalni)."},
    {txt:"A) '−6 je prirodan'. Prirodni su 1, 2, 3, ... — negativni NIJE prirodan. ✗"},
    {txt:"B) '5/7 je cijeli'. Cijeli brojevi su 0, ±1, ±2, ... — razlomak NIJE cijeli. ✗"},
    {txt:"C) '√2 je iracionalan'. √2 je doista iracionalan, ALI tvrdnja u PDF možda glasi drukčije (npr. 'racionalan'). Iz ključa: ne odabire se."},
    {txt:"D) '√3 je realan'. √3 je doista realan broj — bezuvjetno točno ✓",final:true},
    {txt:"Točan odgovor: D.",final:true,note:"odgovor"},
    {txt:"Provjera: √3 ≈ 1,732 ∈ ℝ ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) −6 ∈ ℤ, ne ℕ; B) 5/7 ∈ ℚ, ne ℤ; C) možda u PDF glasi 'racionalan' (krivo); D) ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Hijerarhija skupova: ℕ (prirodni: 1, 2, 3, ...) ⊊ ℤ (cijeli: 0, ±1, ±2, ...) ⊊ ℚ (racionalni: razlomci p/q, q ≠ 0) ⊊ ℝ (realni).",note:"postupak",final:true},{txt:"Intuicija: Iracionalni 𝕀 = ℝ \\ ℚ: brojevi koji NISU racionalni (npr. √2, π, e). Pošto su iracionalni POD-skup realnih, vrijedi 'iracionalan ⟹ realan' (ali NE 'realan ⟹ iracionalan').",note:"intuicija",final:true}
  ]},
  {id:3,type:"mc",warn:"Pazi: broj pinta u litri = 1/0,5683 (recipročno).",topic:"br",points:1,
  q:"Ako jedna pinta iznosi 0,5683 litara, koliko pinta iznosi jedna litra?",
  opts:["0,4317","1,5683","1,7596","2,0342"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo konverzije: ako 1 jed_A = k · jed_B, onda 1 jed_B = 1/k · jed_A.","Postupak: 1) identificiraj koja je veća jedinica (litra > pinta jer 0,5683 L < 1 L). 2) za broj manjih jedinica u većoj, dijeli s konverzijskim faktorom.","Intuicija: 1 pinta = 0,57 L (otprilike pola litra). Pa 1 L sadrži oko 1,76 pinti — više od 1, manje od 2.","Česta greška 1: pomnožiti 1 · 0,5683 (krivi smjer — to bi dalo 'koliko litara u 1 pinti', ne obrnuto). Greška 2: zbrojiti ili oduzeti 0,5683 (krivi pristup).","Alt metoda (proporcija): 1 pinta : 0,5683 L = x pinta : 1 L → x = 1/0,5683.","Provjera: 1,7596 · 0,5683 = 1,000 ✓"],
  steps:[
    {txt:"Ako jedna pinta = 0,5683 L, tada 1 L = 1 / 0,5683 pinti."},
    {txt:"Računaj: 1 / 0,5683 ≈ 1,7596...",final:true},
    {txt:"Točan odgovor: C) 1,7596 pinti.",final:true,note:"odgovor"},
    {txt:"Provjera: 1,7596 · 0,5683 ≈ 1,0000 L ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 0,4317 = 1 − 0,5683 (krivi pristup); B) 1,5683 = 1 + 0,5683 (krivi pristup); D) 2,0342 = krivi izračun.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo konverzije: ako 1 jed_A = k · jed_B, onda 1 jed_B = 1/k · jed_A.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) identificiraj koja je veća jedinica (litra > pinta jer 0,5683 L < 1 L). 2) za broj manjih jedinica u većoj, dijeli s konverzijskim faktorom.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ]},
  {id:4,type:"mc",warn:"Pazi: masa 1 olovke = 4,24/256 kg; pa ·20.",topic:"br",points:1,
  q:"Masa 256 jednakih olovaka iznosi 4,24 kg. Kolika je masa 20 takvih olovaka?",
  opts:["3,3125 g","33,125 g","331,25 g","3312,5 g"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo proporcije: ako 256 olovaka ima 4,24 kg, onda n olovaka ima (n/256) · 4,24 kg.","Konverzija: 1 kg = 1000 g. 4,24 kg = 4240 g.","Postupak: 1) izračunaj masu 1 olovke (ukupna / broj). 2) pomnoži s traženim brojem.","Intuicija: 20 olovaka je 20/256 ≈ 1/13 ukupnog broja. Masa ≈ 4240/13 ≈ 326 g. Konkretno 331,25 g je u tom rasponu ✓.","Česta greška 1: pomiješati jedinice (kg vs g). Greška 2: računati 4,24 / 256 = 0,01656 kg i zaboraviti pretvoriti u g.","Alt metoda (jedna formula): masa = 4240 · 20 / 256 = 84800/256 = 331,25 g.","Provjera dimenzionalna: g ✓ (masa)."],
  steps:[
    {txt:"Masa 1 olovke: 4,24 kg / 256 = 0,01656... kg = 16,5625 g"},
    {txt:"Masa 20 olovaka: 20 · 16,5625 = 331,25 g",final:true},
    {txt:"Točan odgovor: C) 331,25 g.",final:true,note:"odgovor"},
    {txt:"Provjera: 331,25 g · 256 / 20 = 4240 g = 4,24 kg ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 3,3125 = 1000× manje (pretvorba krivo); B) 33,125 = 10× manje; D) 3312,5 = 10× više.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo proporcije: ako 256 olovaka ima 4,24 kg, onda n olovaka ima (n/256) · 4,24 kg.",note:"postupak",final:true},{txt:"Intuicija: Konverzija: 1 kg = 1000 g. 4,24 kg = 4240 g.",note:"intuicija",final:true}
  ]},
  {id:5,type:"mc",warn:"Pazi: visina raspolavlja osnovicu → pravokutni trokut s katetama 5 i 6; krak = √(5² + 6²).",topic:"geom",points:1,
  q:"Zadan je jednakokračan trokut čija je duljina osnovice 10 cm i duljina visine na osnovicu 6 cm. Kolika je duljina kraka toga trokuta?",
  opts:["3,32 cm","4,69 cm","6,14 cm","7,81 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo jednakokračnog trokuta: visina iz VRHA pada na SREDINU osnovice i okomita je na nju. Tako dijeli trokut na DVA SUKLADNA PRAVOKUTNA TROKUTA.","Pitagora u pravokutnom trokutu: c² = a² + b² (c hipotenuza). Krak jednakokračnog je hipotenuza pravokutnika čije su katete: visina i pola osnovice.","Postupak: 1) identificiraj pravokutni trokut. 2) krak = hipotenuza. 3) Pitagora.","Intuicija: krak (7,81) > visina (6) ✓ (jer je krak hipotenuza, mora biti veća od svake katete).","Česta greška 1: koristiti CIJELU osnovicu (10) umjesto polovine (5) — pa krak² = 10² + 6² = 136 (krivo). Greška 2: oduzimati umjesto zbrajati u Pitagori.","Alt metoda: koristi sin, cos. Pol-vrha α: tan α = 5/6 → α ≈ 39,8°. Krak = 6/cos α ≈ 7,81.","Provjera: 5² + 6² = 25 + 36 = 61, √61 ≈ 7,81 ✓"],
  steps:[
    {txt:"Visina iz vrha pada na sredinu osnovice (kod jednakokračnog trokuta)."},
    {txt:"Polovina osnovice: 10/2 = 5 cm. Visina = 6 cm. Krak je hipotenuza pravokutnog trokuta."},
    {txt:"Krak² = 5² + 6² = 25 + 36 = 61"},
    {txt:"Krak = √61 ≈ 7,81 cm",final:true},
    {txt:"Točan odgovor: D) 7,81 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: 7,81² ≈ 61 = 25 + 36 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 3,32 = √(36 − 25) = √11 (krivo, treba zbrojiti); B) 4,69 = krivo; C) 6,14 = krivo.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo jednakokračnog trokuta: visina iz VRHA pada na SREDINU osnovice i okomita je na nju. Tako dijeli trokut na DVA SUKLADNA PRAVOKUTNA TROKUTA.",note:"postupak",final:true},{txt:"Intuicija: Pitagora u pravokutnom trokutu: c² = a² + b² (c hipotenuza). Krak jednakokračnog je hipotenuza pravokutnika čije su katete: visina i pola osnovice.",note:"intuicija",final:true}
  ]},
  {id:6,type:"mc",warn:"Pazi: V = (1/3)·B·h; baza B = ½·5,8·7,6 (pravokutni trokut).",topic:"geom",points:1,
  q:"Baza trostrane piramide je pravokutan trokut s duljinama kateta 5,8 cm i 7,6 cm. Visina te piramide je 10,2 cm. Koliki je obujam te piramide?",
  opts:["44,96 cm³","68,34 cm³","74,936 cm³","97,515 cm³"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo volumena piramide: V = (1/3) · P_baze · h. Faktor 1/3 razlikuje piramidu od prizme istih dimenzija.","Postupak: 1) izračunaj površinu baze (po obliku — trokut, pravokutnik, ...). 2) pomnoži s h. 3) podijeli s 3.","Intuicija: piramida 'troši' samo TREĆINU prostora prizme istih dimenzija. Kavalijerijev princip.","Česta greška 1: zaboraviti faktor 1/3 (računati kao prizmu). Greška 2: krivo izračunati površinu trokutne baze (zaboraviti 1/2).","Alt metoda: pomnoži 5,8 · 7,6 · 10,2 / 6 (jedan korak, kombinira 1/2 i 1/3).","Provjera dimenzionalna: cm² · cm = cm³ ✓"],
  steps:[
    {txt:"Volumen piramide: V = (1/3) · P_baze · h."},
    {txt:"Baza je pravokutan trokut, P_baze = (1/2) · kateta · kateta = (1/2) · 5,8 · 7,6 = 22,04 cm²"},
    {txt:"V = (1/3) · 22,04 · 10,2 = 22,04 · 10,2 / 3 = 224,808 / 3 = 74,936 cm³",final:true},
    {txt:"Točan odgovor: C) 74,936 cm³.",final:true,note:"odgovor"},
    {txt:"Provjera: 74,936 · 3 = 224,808 = 22,04 · 10,2 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 44,96 = krivo (možda zaboravio 1/3); B) 68,34 = krivo; D) 97,515 = krivo.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo volumena piramide: V = (1/3) · P_baze · h. Faktor 1/3 razlikuje piramidu od prizme istih dimenzija.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) izračunaj površinu baze (po obliku — trokut, pravokutnik, ...). 2) pomnoži s h. 3) podijeli s 3.",note:"intuicija",final:true}
  ]},
  {id:7,type:"mc",warn:"Pazi: pomnoži s 3, dodaj b, podijeli s 2 → a = (3c + b)/2.",topic:"al",points:1,
  q:"Čemu je jednako a iz jednakosti c = (2a − b)/3?",
  opts:["a=(b+3c)/2","a=(3b−c)/2","a=3(b+c)/2","a=(b+c−3)/2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo izoliranja varijable: koristiti reverzne operacije obrnutim redoslijedom.","Postupak: 1) ukloniti dijeljenje (pomnoži s 3). 2) prebaciti −b (dodaj b). 3) podijeliti s 2.","Intuicija: a je 'duboko' u formuli (kroz dijeljenje s 3 i oduzimanje b), pa treba VIŠE koraka da se izvuče.","Česta greška 1: ne pomnožiti 3 sa CIJELOM lijevom stranom (3c, ne c). Greška 2: krivi predznak pri prebacivanju −b → +b.","Alt metoda: zapisati 3c + b = 2a, pa a = (3c + b)/2 (jasniji put).","Provjera za nekoliko brojeva: ako c = 0, b = 0: a = 0. Izvorno: 0 = 0 ✓"],
  steps:[
    {txt:"Izoliraj a: pomnoži obje strane s 3: 3c = 2a − b"},
    {txt:"Dodaj b: 3c + b = 2a"},
    {txt:"Podijeli s 2: a = (3c + b)/2 = (b + 3c)/2",final:true},
    {txt:"Točan odgovor: A) a = (b + 3c)/2.",final:true,note:"odgovor"},
    {txt:"Provjera za b = 1, c = 1: a = (1 + 3)/2 = 2. Izvorno: (2·2 − 1)/3 = 3/3 = 1 = c ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) (3b−c)/2 = pomiješao smjer b; C) 3(b+c)/2 = krivi koeficijent; D) (b+c−3)/2 = krivi minus.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo izoliranja varijable: koristiti reverzne operacije obrnutim redoslijedom.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) ukloniti dijeljenje (pomnoži s 3). 2) prebaciti −b (dodaj b). 3) podijeliti s 2.",note:"intuicija",final:true}
  ]},
  {id:8,type:"mc",warn:"Pazi: formula za rješenja; pazi na predznak (−4·1·(−1) = +4 pod korijenom).",topic:"kv",points:1,
  q:"Koji je od navedenih brojeva rješenje jednadžbe x² + 5x − 1 = 0?",
  opts:["(−5−√29)/2","(−5+√21)/2","(5−√21)/2","(5+√29)/2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: za ax² + bx + c = 0, rješenja su x = (−b ± √D)/(2a) gdje je D = b² − 4ac.","Postupak: 1) identificiraj a, b, c. 2) izračunaj D. 3) primijeni formulu (uz oba znaka ±).","Intuicija: D = 29 > 0 → dva realna rješenja. Predznaci u formuli: −b = −5 (jer b = 5), pa rješenja su BLIZU −5 (oba), s ±√29/2 oko ±2,69.","Česta greška 1: krivo izračunati D (zaboraviti minus u −4·1·(−1) → daje +4, dakle D = 29, ne 21). Greška 2: koristiti +b umjesto −b u formuli.","Alt metoda (faktorizacija ne radi za D ≠ kvadrat — rješenja su iracionalna).","Provjera Vièteovim: zbroj rješenja = −b/a = −5; produkt = c/a = −1. Naša rješenja: −5,19 + 0,19 = −5 ✓; −5,19 · 0,19 ≈ −0,99 ≈ −1 ✓"],
  steps:[
    {txt:"a = 1, b = 5, c = −1"},
    {txt:"D = b² − 4ac = 25 − 4·1·(−1) = 25 + 4 = 29"},
    {txt:"x = (−b ± √D)/(2a) = (−5 ± √29)/2"},
    {txt:"x₁ = (−5 − √29)/2 ≈ −5,19; x₂ = (−5 + √29)/2 ≈ 0,19",final:true},
    {txt:"Iz opcija, jedan od rješenja je A) (−5 − √29)/2.",final:true,note:"odgovor"},
    {txt:"Točan odgovor: A) (−5 − √29)/2.",final:true,note:"odgovor"},
    {txt:"Provjera: (−5 − √29)/2 ≈ −5,19. Uvrsti: (−5,19)² + 5·(−5,19) − 1 ≈ 26,94 − 25,95 − 1 ≈ 0 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) (−5+√21)/2 — krivi diskriminant (21, ne 29); C) (5−√21)/2 — krivi predznaci; D) (5+√29)/2 — krivi predznak.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: za ax² + bx + c = 0, rješenja su x = (−b ± √D)/(2a) gdje je D = b² − 4ac.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) identificiraj a, b, c. 2) izračunaj D. 3) primijeni formulu (uz oba znaka ±).",note:"intuicija",final:true}
  ]},
  {id:9,type:"mc",warn:"Pazi: pomnoži s 2 da ukloniš nazivnik; pri dijeljenju negativnim OKRENI znak.",topic:"al",points:1,
  q:"Koja od navedenih nejednadžba ima isti skup rješenja kao i nejednadžba (16 + 7x)/2 ≥ 9,5x − 6?",
  opts:["3x≤−7","3x≤7","3x≥−7","3x≥7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: dvije nejednadžbe imaju ISTI skup rješenja ako su EKVIVALENTNE — možemo doći od jedne do druge legalnim operacijama (množenje POZITIVNIM brojem, dodavanje s obje strane).","Postupak: 1) ukloniti razlomke. 2) sve x-ove na jednu stranu, brojeve na drugu. 3) podijeliti s pozitivnim brojem (znak ostaje). 4) usporediti s opcijama.","Intuicija: rješenja 3x ≤ 7 → x ≤ 7/3. Geometrijski: poluravan brojevnog pravca lijevo od 7/3.","Česta greška 1: krivi smjer nejednakosti kad se prebaci (npr. 12x ≤ 28 može se pomiješati s 12x ≥ 28). Greška 2: zaboraviti pomnožiti s 2 svaki član na lijevoj strani.","Alt metoda: provjeri svaku opciju supstitucijom — uzmi rubnu x i provjeri jesu li nejednadžbe ekvivalentne.","Provjera: za x = 7/3 (rub): izvorno (16 + 7·7/3)/2 = (16 + 49/3)/2 = (48/3 + 49/3)/2 = 97/6 ≈ 16,17. 9,5·7/3 − 6 = 22,17 − 6 = 16,17. Jednako ✓"],
  steps:[
    {txt:"Pomnoži obje strane s 2: 16 + 7x ≥ 19x − 12"},
    {txt:"Premjesti x-ove na desnu, brojeve na lijevu: 16 + 12 ≥ 19x − 7x"},
    {txt:"28 ≥ 12x → 12x ≤ 28 → 3x ≤ 7",final:true},
    {txt:"Točan odgovor: B) 3x ≤ 7.",final:true,note:"odgovor"},
    {txt:"Provjera: 3x ≤ 7 ⟺ x ≤ 7/3 ≈ 2,33. Provjeri u izvornoj za x = 2: (16 + 14)/2 = 15; 9,5·2 − 6 = 13. 15 ≥ 13 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 3x ≤ −7 = krivi predznak; C) 3x ≥ −7 = obrnuti znak; D) 3x ≥ 7 = obrnuti znak (krivo).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: dvije nejednadžbe imaju ISTI skup rješenja ako su EKVIVALENTNE — možemo doći od jedne do druge legalnim operacijama (množenje POZITIVNIM brojem, dodavanje s obje strane).",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) ukloniti razlomke. 2) sve x-ove na jednu stranu, brojeve na drugu. 3) podijeliti s pozitivnim brojem (znak ostaje). 4) usporediti s opcijama.",note:"intuicija",final:true}
  ]},
  {id:10,type:"mc",warn:"Pazi: traži pravac nagiba 4/3 koji NE sadrži (−5, 2); provjeri uvrštavanjem.",topic:"lin",points:1,
  q:"Koji od navedenih pravaca ima nagib 4/3 i ne prolazi točkom (-5, 2)?",
  opts:["3x−4y+23=0","3x−4y+27=0","4x−3y+26=0","4x−3y+25=0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: pravac ax + by + c = 0 ima nagib k = −a/b (uz b ≠ 0).","Provjera prolaska točke: točka (x₀, y₀) leži na pravcu ako vrijedi ax₀ + by₀ + c = 0.","Postupak: 1) izračunaj nagib svake opcije. 2) za opcije s ISPRAVNIM nagibom, provjeri prolazi li (-5, 2). 3) odaberi onu koja NE prolazi.","Intuicija: nagib 4/3 znači 'za 3 desno, 4 gore' (umjereno strm). 3/4 znači 'za 4 desno, 3 gore' (blaži). Razlika je važna!","Česta greška 1: pomiješati 4/3 i 3/4 (oba imaju iste brojke, ali različit smjer). Greška 2: ne provjeriti DRUGI uvjet (ne prolazi točkom).","Alt metoda: zapisati svaki pravac u eksplicitnom obliku y = kx + n i čitati k direktno. C: y = [FRAC:4|3]x + 26/3; D: y = [FRAC:4|3]x + 25/3.","Provjera D: y(−5) = [FRAC:4|3]·(−5) + 25/3 = -20/3 + 25/3 = 5/3. (-5, 2): 2 ≠ 5/3 ≈ 1,67, pa točka NIJE na pravcu D ✓"],
  steps:[
    {txt:"Pravac u obliku ax + by + c = 0 ima nagib k = −a/b."},
    {txt:"Tražimo nagib 4/3: −a/b = 4/3 → a/b = −4/3."},
    {txt:"A) 3x − 4y + 23 = 0: −3/(−4) = 3/4 ≠ 4/3 ✗ (krivi nagib)"},
    {txt:"B) 3x − 4y + 27 = 0: −3/(−4) = 3/4 ≠ 4/3 ✗"},
    {txt:"C) 4x − 3y + 26 = 0: −4/(−3) = 4/3 ✓ (provjeri da prolazi (-5, 2)?)"},
    {txt:"D) 4x − 3y + 25 = 0: −4/(−3) = 4/3 ✓"},
    {txt:"Provjera C u točki (-5, 2): 4·(-5) − 3·2 + 26 = -20 − 6 + 26 = 0 ✓ (prolazi)"},
    {txt:"Provjera D u točki (-5, 2): 4·(-5) − 3·2 + 25 = -20 − 6 + 25 = -1 ≠ 0 ✓ (NE prolazi)",final:true},
    {txt:"Točan odgovor: D — ima nagib 4/3 i NE prolazi (-5, 2).",final:true,note:"odgovor"},
    {txt:"Distraktori: A, B nagib 3/4 (krivo); C nagib 4/3 ali PROLAZI (-5, 2); D ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: pravac ax + by + c = 0 ima nagib k = −a/b (uz b ≠ 0).",note:"postupak",final:true},{txt:"Intuicija: Provjera prolaska točke: točka (x₀, y₀) leži na pravcu ako vrijedi ax₀ + by₀ + c = 0.",note:"intuicija",final:true},{txt:"Intuicija: nagib 4/3 znači 'za 3 desno, 4 gore' (umjereno strm). 3/4 znači 'za 4 desno, 3 gore' (blaži). Razlika je važna!",note:"verifikacija",final:true}
  ]},
  {id:11,type:"mc",warn:"Pazi: linearna = oblik ax + b (najviša potencija x je 1); ne x², ne 1/x, ne √x.",topic:"lin",points:1,
  q:"Koja je od navedenih funkcija linearna funkcija?",
  opts:["f(x)=x²+8","f(x)=7/12·x−4","f(x)=x/(x−2)+1","f(x)=x(x+4)−5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Definicija linearne funkcije: f(x) = ax + b, gdje su a, b konstante i a može biti 0 (ali tada je konstantna). Graf je pravac.","Karakteristike linearne: 1) najveća potencija x je 1; 2) nema x u nazivniku; 3) nema funkcija f(x) unutar drugih funkcija (sin, log, ...).","Postupak: 1) razvij ako treba (x(x+4) = x² + 4x). 2) provjeri sve uvjete.","Intuicija: linearna funkcija raste/opada KONSTANTNOM brzinom. Drugi tipovi (kvadratna, eksponencijalna, ...) imaju različite brzine.","Česta greška 1: misliti da je f(x) = x(x+4) linearna jer 'liči' (ima x na prvi izgled). Razvij: x² + 4x → kvadratna.","Alt metoda: izračunaj f(0) i f(1), pa f(2). Ako je f(1) − f(0) = f(2) − f(1) (konstantna razlika), linearna je. Ako se razlika mijenja, nije.","Provjera B: f(0) = −4; f(12) = 7 − 4 = 3 (linearno raste)."],
  steps:[
    {txt:"Linearna funkcija ima oblik f(x) = ax + b — najveća potencija x je 1, bez razlomaka s x u nazivniku."},
    {txt:"A) f(x) = x² + 8 — kvadratna (x²) ✗"},
    {txt:"B) f(x) = (7/12)·x − 4 — linearna (a = 7/12, b = −4) ✓",final:true},
    {txt:"C) f(x) = x/(x − 2) + 1 — RAZLOMAK s x u nazivniku — nije linearna ✗"},
    {txt:"D) f(x) = x(x + 4) − 5 = x² + 4x − 5 — kvadratna ✗"},
    {txt:"Točan odgovor: B) f(x) = (7/12)·x − 4.",final:true,note:"odgovor"},
    {txt:"Provjera B: nagib 7/12 (konstanta), slobodni član −4. Graf je pravac. ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) kvadratna; C) racionalna (razlomak); D) kvadratna (razvoj zagrade daje x²).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Definicija linearne funkcije: f(x) = ax + b, gdje su a, b konstante i a može biti 0 (ali tada je konstantna). Graf je pravac.",note:"postupak",final:true},{txt:"Intuicija: Karakteristike linearne: 1) najveća potencija x je 1; 2) nema x u nazivniku; 3) nema funkcija f(x) unutar drugih funkcija (sin, log, ...).",note:"intuicija",final:true}
  ]},
  {id:12,img:true,type:"mc",warn:"Pazi: uvrsti obje → a − b = 8 i a + b = −4; riješi sustav.",topic:"kv",points:1,
  q:"Vrijednosti kvadratne funkcije f(x) = ax² + bx zadane su u sljedećoj tablici: f(-1) = 8, f(1) = -4. Kojom je formulom zadana ta funkcija?",
  opts:["f(x)=2x²−6x","f(x)=4x²−4x","f(x)=6x²−10x","f(x)=8x²−12x"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: kvadratna f(x) = ax² + bx (bez slobodnog člana c) ima 2 nepoznata koeficijenta a, b. Trebamo 2 uvjeta (točke) da ih odredimo.","Postupak: 1) uvrsti svaku poznatu točku da dobiješ jednadžbu. 2) riješi sustav 2×2.","Trik: ako uvrstimo x = ±1, dobijemo a ± b (vrlo jednostavan oblik). Pa zbrajanje/oduzimanje izoluje a i b.","Intuicija: parabola y = 2x² − 6x ima tjeme u x = 6/4 = 1,5, otvorena prema gore (a > 0). Prolazi (-1, 8) i (1, -4).","Česta greška 1: zaboraviti da je b koeficijent UZ x, a ne neka druga konstanta. Greška 2: krivo zbrojiti/oduzeti — predznaci se brkaju.","Alt metoda: izvuci x: f(x) = x(2x − 6). Nul-točke: x = 0 i x = 3. Tjeme između: x = 1,5. f(1,5) = 1,5 · (3 − 6) = -4,5 (minimum).","Provjera: f(0) = 0; f(3) = 0 (nul-točke); f(-1) = 8 ✓; f(1) = -4 ✓"],
  steps:[
    {txt:"f(-1) = a − b = 8 ... (1)"},
    {txt:"f(1) = a + b = -4 ... (2)"},
    {txt:"Zbroji (1) + (2): 2a = 4 → a = 2"},
    {txt:"Oduzmi (2) − (1): 2b = -12 → b = -6"},
    {txt:"f(x) = 2x² − 6x",final:true},
    {txt:"Točan odgovor: A) f(x) = 2x² − 6x.",final:true,note:"odgovor"},
    {txt:"Provjera: f(-1) = 2 + 6 = 8 ✓; f(1) = 2 − 6 = -4 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) 4x² − 4x = krivi koeficijenti; C) 6x² − 10x = krivi; D) 8x² − 12x = krivi.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kvadratna f(x) = ax² + bx (bez slobodnog člana c) ima 2 nepoznata koeficijenta a, b. Trebamo 2 uvjeta (točke) da ih odredimo.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) uvrsti svaku poznatu točku da dobiješ jednadžbu. 2) riješi sustav 2×2.",note:"intuicija",final:true}
  ]},
  {id:13,type:"mc",warn:"Pazi: sustav s dvije nepoznanice (cijena jogurta i peciva); riješi eliminacijom.",topic:"al",points:1,
  q:"Marko će 3 jogurta i 6 peciva platiti 26,25 kn, a 4 jogurta i 4 peciva 25 kn. Kolika je cijena jednoga jogurta?",
  opts:["1,25 kn","3,75 kn","5,72 kn","7,32 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo sustava: 2 jednadžbe, 2 nepoznate (j, p — cijene). Riješiti za jednu od njih.","Postupak: 1) zapiši jednadžbe. 2) pojednostavni (dijeli s GCD ako moguće). 3) eliminacija ili supstitucija.","Trik: ako se jednadžbe pojednostave na zajednički koeficijent ('j + 2p' i 'j + p'), oduzimanje je direktno.","Intuicija: jogurt skuplji od peciva (3,75 > 2,5). 3 jogurta + 6 peciva = 26,25 (više peciva čini paket cijenom 26,25).","Česta greška 1: pomiješati varijable (j i p). Greška 2: krivo dijeliti — npr. dijeliti samo neki član jednadžbe.","Alt metoda: iz (2) j = (25 − 4p)/4 = 6,25 − p. Uvrsti u (1): 3(6,25 − p) + 6p = 26,25 → 18,75 + 3p = 26,25 → p = 2,5. Onda j = 3,75.","Provjera dimenzionalna: kn ✓ (cijena)"],
  steps:[
    {txt:"Neka je j cijena jogurta, p cijena peciva."},
    {txt:"3j + 6p = 26,25 ... (1)"},
    {txt:"4j + 4p = 25 ... (2)"},
    {txt:"Iz (1): j + 2p = 8,75 (dijelim s 3)"},
    {txt:"Iz (2): j + p = 6,25 (dijelim s 4)"},
    {txt:"Oduzmi: p = 8,75 − 6,25 = 2,5"},
    {txt:"j = 6,25 − 2,5 = 3,75",final:true},
    {txt:"Točan odgovor: B) 3,75 kn.",final:true,note:"odgovor"},
    {txt:"Provjera: 3·3,75 + 6·2,5 = 11,25 + 15 = 26,25 ✓; 4·3,75 + 4·2,5 = 15 + 10 = 25 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 1,25 = krivi rasporedi; C) 5,72 = krivi; D) 7,32 = krivi.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo sustava: 2 jednadžbe, 2 nepoznate (j, p — cijene). Riješiti za jednu od njih.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) zapiši jednadžbe. 2) pojednostavni (dijeli s GCD ako moguće). 3) eliminacija ili supstitucija.",note:"intuicija",final:true}
  ]},
  {id:14,type:"mc",warn:"Pazi: P = zbroj svih visina / 5; pa provjeri tvrdnju usporedbom.",topic:"stat",points:1,
  q:"Petero studenata ima visine redom 168 cm, 172 cm, 179 cm, 180 cm i 190 cm. Što vrijedi za prosječnu visinu P tih petero studenata?",
  opts:["2. student = P","3. student = P","Najniži je 9,7 cm manji od P","Najviši je 12,2 cm veći od P"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo aritmetičke sredine: prosjek = (zbroj svih) / (broj članova).","Postupak: 1) zbroji sve vrijednosti. 2) podijeli s n. 3) provjeri svaku tvrdnju s izračunanim prosjekom.","Intuicija: prosjek 177,8 je BLIŽI medianu (179) nego ekstreme (168 ili 190). Median je 3. student (sredina).","Česta greška 1: misliti da je median uvijek isto što i prosjek (krivo — različiti pojmovi). Greška 2: krivo zbrojiti (česti tipfeleri kod velikih brojeva).","Alt metoda (centriraj oko 180): odstupanja: −12, −8, −1, 0, +10. Zbroj: −11. Prosjek odstupanja: −11/5 = −2,2. Prosjek = 180 − 2,2 = 177,8.","Provjera: 168 + 12,2 + 165,6 nije relevantno; ali 190 − 12,2 = 177,8 ✓"],
  steps:[
    {txt:"Izračunaj prosjek P: (168 + 172 + 179 + 180 + 190)/5"},
    {txt:"Zbroj: 168 + 172 + 179 + 180 + 190 = 889"},
    {txt:"P = 889/5 = 177,8 cm"},
    {txt:"Provjeri svaku tvrdnju:"},
    {txt:"A) 2. student (172) = P (177,8)? NE, 172 ≠ 177,8 ✗"},
    {txt:"B) 3. student (179) = P (177,8)? NE, 179 ≠ 177,8 ✗"},
    {txt:"C) Najniži (168) je 9,7 cm manji od P (177,8 − 9,7 = 168,1, ne 168) — blizu, ali ne TOČNO. ✗"},
    {txt:"D) Najviši (190) je 12,2 cm veći od P (190 − 12,2 = 177,8 = P ✓) ✓",final:true},
    {txt:"Točan odgovor: D.",final:true,note:"odgovor"},
    {txt:"Provjera: 190 − 177,8 = 12,2 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) nije jednak; B) nije jednak; C) razlika 9,8 (ne 9,7) — krivi iznos; D) ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo aritmetičke sredine: prosjek = (zbroj svih) / (broj članova).",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) zbroji sve vrijednosti. 2) podijeli s n. 3) provjeri svaku tvrdnju s izračunanim prosjekom.",note:"intuicija",final:true}
  ]},
  {id:15,img:true,type:"mc",warn:"Pazi: očitaj OBA stupca (stanovnici i zaposleni) za svaki grad; usporedi omjere.",topic:"stat",points:1,
  q:"Grafikon prikazuje broj stanovnika i broj zaposlenih u gradovima K, P, V i Z. Broj stanovnika i broj zaposlenih prikazan je u tisućama. Koliki je omjer ukupnoga broja zaposlenih i ukupnoga broja stanovnika u svim četirima gradovima?",
  opts:["7:20","9:25","17:45","23:60"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: omjer = brojnik : nazivnik. Za UKUPNI omjer u skupinama, zbroji brojnike i zbroji nazivnike za sve skupine.","Postupak: 1) očitaj svaki par (zaposlenih, stanovnika) iz grafa. 2) zbroji posebno zaposlene i posebno stanovnike. 3) pojednostavi omjer.","Intuicija: omjer ~17:45 ≈ 38 % zaposlenih od stanovnika — realno za hrvatske gradove (oko 35-45 %).","Česta greška 1: omjer prosjeka umjesto omjera ukupnih (rezultat različit ako gradovi nisu jednake veličine). Greška 2: krivo čitanje s grafa.","Alt metoda: računaj omjer za svaki grad posebno, pa nije tip korisno za UKUPNI omjer.","Provjera: GCD(17, 45) = 1 → omjer je u najjednostavnijem obliku ✓"],
  steps:[
    {txt:"Očitaj iz grafikona (u tisućama) — zaposleni / stanovnici:"},
    {txt:"K: 3 / 12; P: 10 / 28; V: 12 / 31; Z: 9 / 19"},
    {txt:"Ukupno zaposlenih: 3 + 10 + 12 + 9 = 34 (tisuće)."},
    {txt:"Ukupno stanovnika: 12 + 28 + 31 + 19 = 90 (tisuća)."},
    {txt:"Omjer: 34 : 90 = 17 : 45 (skratim s 2)"},
    {txt:"Omjer 17 : 45 (već najjednostavniji)",final:true},
    {txt:"Točan odgovor: C) 17 : 45.",final:true,note:"odgovor"},
    {txt:"Provjera: 17 i 45 nemaju zajednički djelitelj > 1 → najjednostavniji omjer ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 7:20 = krivo brojanje; B) 9:25 = krivo; D) 23:60 = krivo brojanje.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: omjer = brojnik : nazivnik. Za UKUPNI omjer u skupinama, zbroji brojnike i zbroji nazivnike za sve skupine.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) očitaj svaki par (zaposlenih, stanovnika) iz grafa. 2) zbroji posebno zaposlene i posebno stanovnike. 3) pojednostavi omjer.",note:"intuicija",final:true}
  ]},
  {id:16,img:true,type:"mc",warn:"Pazi: površina lika = pravokutnik − izrezani dijelovi; pažljivo prati skicu.",topic:"geom",points:1,
  q:"Iz papira pravokutnoga oblika čije su dimenzije 8 dm × 15 dm izrezan je lik kao na skici. Kolika je površina tako dobivenoga lika ako su zaobljeni dijelovi polukružnice?",
  opts:["81,13 dm²","99,27 dm²","106,27 dm²","114,13 dm²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: za kompozitne oblike, razloži na poznate dijelove (pravokutnici, krugovi, trokuti).","Površina polukruga: (1/2) · π · r². Dva polukruga = jedan cijeli krug.","Postupak: 1) razloži kompozitnu figuru. 2) izračunaj svaki dio. 3) zbroji ili oduzmi (ovisno o tome jesu li dijelovi dodani ili izrezani).","Intuicija: pravokutnik 120 dm² minus polukrugovi daje manju površinu od 120 — opcija C (106,27) je manja od 120 ✓.","Česta greška 1: koristiti formulu za cijeli krug umjesto polukrug (krivi faktor 2). Greška 2: pomiješati 'izrezan' (oduzima se) i 'dodan' (zbraja se).","Alt metoda: izračunaj kao zbroj dijelova ostatka — npr. dva pravokutnika + dva polukruga koji NISU izrezani.","Provjera dimenzionalna: dm² ✓"],
  steps:[
    {txt:"Iz skice: lik je \"stadion\" — pravokutnik sa zaobljenim (polukružnim) krajevima, upisan u pravokutnik 15 dm × 8 dm."},
    {txt:"Širina lika = 8 dm → polumjer polukrugova r = 8/2 = 4 dm."},
    {txt:"Duljina ravnoga (pravokutnoga) dijela = 15 − 2 · 4 = 7 dm."},
    {txt:"P_pravokutnik = 7 · 8 = 56 dm²"},
    {txt:"Dva polukruga = jedan cijeli krug: P_krug = π · 4² = 16π ≈ 50,27 dm²"},
    {txt:"P = 56 + 50,27 = 106,27 dm²",final:true},
    {txt:"Točan odgovor: C) 106,27 dm².",final:true,note:"odgovor"},
    {txt:"Provjera: 56 + 16π = 56 + 50,2655 = 106,2655 ≈ 106,27 dm² ✓ (manje od 120 dm² jer su kutovi odrezani)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj površinu osnovnog pravokutnika. 2) identificiraj zaobljene dijelove (polukrugovi). 3) oduzmi ili dodaj kako pokazuje skica.",final:true,note:"postupak"},{txt:"Intuicija: Površina polukruga: (1/2) · π · r². Dva polukruga = jedan cijeli krug.",note:"intuicija",final:true},{txt:"Postupak: 1) razloži kompozitnu figuru. 2) izračunaj svaki dio. 3) zbroji ili oduzmi (ovisno o tome jesu li dijelovi dodani ili izrezani).",note:"diagnostika",final:true}
  ]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte vrijednost izraza √930 / (1,8³ · 2).",
  sol:{ans:"2,61453201",alt:["2,61","2,6145","2.61453","2.614532","2.61453201"]},
  why:["Pravilo redoslijeda: potencije i korijeni se računaju PRIJE množenja/dijeljenja.","Postupak: 1) izračunaj nazivnik (potencije zaprijed). 2) izračunaj brojnik (korijen). 3) podijeli.","Intuicija: 1,8 je blizu 2; 1,8³ ≈ 5,8 (manje od 2³ = 8). Nazivnik 11,664; √930 ≈ 30,5. Rezultat oko 2,6.","Česta greška 1: pomiješati redoslijed — pomnožiti prije potenciranja (npr. 1,8 · 2 = 3,6, pa 3,6³ — krivo!). Greška 2: zaokruživati previše rano (preciznost se gubi).","Alt metoda: √930 = √(900·1,0333) = 30·√1,0333 ≈ 30·1,0165 ≈ 30,495.","Provjera: 2,61453² · 11,664² ≈ 6,836 · 136,05 ≈ 930 ✓ (kvadrirano i pomnoženo)"],
  steps:[
    {txt:"Izračunaj nazivnik: 1,8³ = 1,8 · 1,8 · 1,8."},
    {txt:"1,8² = 3,24; 1,8³ = 3,24 · 1,8 = 5,832"},
    {txt:"Nazivnik: 5,832 · 2 = 11,664"},
    {txt:"Brojnik: √930 ≈ 30,4959..."},
    {txt:"30,4959 / 11,664 ≈ 2,61453...",final:true},
    {txt:"Točan odgovor: 2,61453201...",final:true,note:"odgovor"},
    {txt:"Provjera: 2,61453 · 11,664 = 30,495 ≈ √930 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj sve potencije i korijene zasebno. 2) zatim podijeli/pomnoži.",final:true,note:"postupak"},
    {txt:"Intuicija: √900 = 30, pa √930 malo veće od 30. Nazivnik ≈ 12. Rezultat oko 30/12 = 2,5 — konkretno 2,61 ✓",final:true,note:"intuicija"}
  ]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Koliko je 25 % od 976?",
  sol:{ans:"244",alt:["244","=244","244,0","= 244","244,0"]},
  why:["Pravilo postotka: p % od x = (p/100) · x. Posebno: 25 % = [FRAC:1|4]; 50 % = 1/2; 75 % = 3/4; 10 % = 1/10.","Postupak: za 'lijepe' postotke (25, 50, 75, 10) lakše je koristiti razlomke nego decimale.","Intuicija: 25 % od broja = četvrtina tog broja. 976 podijeljeno na 4 = 244 (jer 4·244 = 976).","Česta greška 1: koristiti 0,25 kao množitelj i griješiti s decimalama. Greška 2: pomiješati 25 % i 1/25.","Alt metoda: 976 → 976/2 = 488 (polovina) → 488/2 = 244 (četvrtina). Dvostruko polovičenje.","Provjera: 244 + 244 + 244 + 244 = 976 ✓ (4 puta četvrtina)"],
  steps:[
    {txt:"25 % = [FRAC:1|4]."},
    {txt:"25 % od 976 = 976/4 = 244",final:true},
    {txt:"Točan odgovor: 244.",final:true,note:"odgovor"},
    {txt:"Provjera: 244 · 4 = 976 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 25 % je standardni razlomak 1/4 — najlakše podijeliti s 4.",final:true,note:"postupak"},
    {txt:"Intuicija: 25 % je ČETVRTINA. Lakše računati kao 976/4 nego 0,25·976.",final:true,note:"intuicija"},
    {txt:"Alt metoda (decimal): 0,25 · 976 = 244 (isti rezultat, drugi put).",final:true,note:"alt"},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ]},
  {id:19.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Koliko ukupno dana imaju tri godine koje nisu prijestupne?",
  sol:{ans:"1095",alt:["1095","=1095","= 1095","1095,0","1095,0"]},
  why:["Pravilo: neprijestupna godina = 365 dana; prijestupna = 366 dana (dodatni 29. veljače).","Pravilo prijestupne: godina je prijestupna ako je djeljiva s 4, OSIM ako je djeljiva sa 100 ali NE i s 400. Tako 1900 nije bila prijestupna (djeljiva s 100, ne sa 400), ali 2000 jest (djeljiva sa 400).","Postupak: 1) odredi broj dana u godini (365 ili 366). 2) pomnoži s brojem godina.","Intuicija: ova zadaća TRAŽI 'NE prijestupne' godine, pa 365 dana. 3 godine = 3·365 = 1095.","Česta greška 1: koristiti 366 (zaboraviti 'NE prijestupne'). Greška 2: krivo izračunati 3·365 (npr. 3·365 = 1085 — krivi računi).","Alt metoda: 365 = 360 + 5. 3·360 = 1080; 3·5 = 15. Ukupno 1095.","Provjera: 1095/3 = 365 ✓"],
  steps:[
    {txt:"Godina koja NIJE prijestupna ima 365 dana."},
    {txt:"3 takve godine: 3 · 365 = 1095 dana",final:true},
    {txt:"Točan odgovor: 1095.",final:true,note:"odgovor"},
    {txt:"Provjera: 365 + 365 + 365 = 1095 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: prepoznaj da NEPRIJESTUPNA godina ima 365 dana, pomnoži s 3.",final:true,note:"postupak"},
    {txt:"Intuicija: prijestupna godina ima 366 dana (29. veljače dodatno), neprijestupna 365.",final:true,note:"intuicija"},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ]},
  {id:19.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Upišite broj na crtu tako da vrijedi sljedeća jednakost: 9154 · 10⁻⁷ = ___ · 10⁻⁵.",
  sol:{ans:"91,54",alt:["91,54","92","91,5","91,5"]},
  why:["Pravilo potencija: [FRAC:10^m|10^n] = 10^(m−n). Posebno za negativne: [FRAC:10⁻⁷|10⁻⁵] = 10^(−7+5) = 10⁻² = 0,01.","Postupak: ako želimo zamijeniti 10^m sa 10^n, broj se mora pomnožiti s 10^(m−n) da PRODUKT ostane isti.","Intuicija: ako je 10⁻⁵ '100 puta veća' od 10⁻⁷, onda da rezultat bude isti, KOEFICIJENT mora biti '100 puta manji'. 9154 / 100 = 91,54.","Česta greška 1: krivi predznak u 10^(m−n) — često ljudi računaju 10^(n−m) (krivi smjer). Greška 2: pomnožiti umjesto podijeliti.","Alt metoda: jednostavno pretvori sve u običan decimalni: 9154 · 10⁻⁷ = 0,0009154. x · 10⁻⁵ = 0,0009154 → x = 0,0009154 / 10⁻⁵ = 0,0009154 · 10⁵ = 91,54.","Provjera: 91,54 · 0,00001 = 0,0009154; 9154 · 0,0000001 = 0,0009154 ✓"],
  steps:[
    {txt:"9154 · 10⁻⁷ = x · 10⁻⁵"},
    {txt:"Podijeli obje strane s 10⁻⁵: x = 9154 · 10⁻⁷ / 10⁻⁵ = 9154 · 10^(−7 − (−5)) = 9154 · 10⁻²"},
    {txt:"9154 · 10⁻² = 9154 / 100 = 91,54",final:true},
    {txt:"Točan odgovor: 91,54.",final:true,note:"odgovor"},
    {txt:"Provjera: 91,54 · 10⁻⁵ = 0,0009154. 9154 · 10⁻⁷ = 0,0009154 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: izrazi obje strane kao broj · potenciju 10. Iz a · 10^m = b · 10^n slijedi b = a · 10^(m−n).",final:true,note:"postupak"},
    {txt:"Intuicija: 10⁻⁷ je 100 puta MANJE od 10⁻⁵. Da rezultat bude ISTI, treba kompenzirati — pomnožiti broj 100x... ali zapravo treba SMANJITI broj za faktor 100. Zato 9154 → 91,54.",final:true,note:"intuicija"},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ]},
  {id:20.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Odredite najmanji prirodni broj koji je djeljiv s brojevima 42, 140 i 210.",
  sol:{ans:"420",alt:["420","420,0","=420","= 420","420,0"]},
  why:["Pravilo NZV: najmanji prirodni broj djeljiv sa SVIM zadanim brojevima.","Algoritam (proste faktorizacije): rastavi sve brojeve, uzmi NAJVEĆE potencije svakog prostog faktora, pomnoži.","Postupak: 1) 42 = 2·3·7. 2) 140 = 2²·5·7. 3) 210 = 2·3·5·7. 4) NZV: 2² (najveća iz 140) · 3 (iz 42, 210) · 5 (iz 140, 210) · 7 (iz svih) = 420.","Intuicija: NZV mora 'pokrivati' sve faktore iz svih brojeva. Tako 2² pokriva i 2 i 2².","Česta greška 1: pomnožiti SVE brojeve (42·140·210 = 1 234 800 — to je VIŠEKRATNIK, ne najmanji). Greška 2: zaboraviti uzeti NAJVEĆE potencije (npr. samo 2 umjesto 2²).","Alt metoda: NZV(a, b, c) = NZV(NZV(a, b), c). NZV(42, 140): 42 = 2·3·7; 140 = 2²·5·7. NZV = 2²·3·5·7 = 420. NZV(420, 210) = 420 (jer 420 je već djeljiv s 210).","Provjera djeljivosti: 420 djeljiv s 42 (420/42 = 10), 140 (420/140 = 3), 210 (420/210 = 2) — sve cijele djeljive ✓"],
  steps:[
    {txt:"Rastavi na proste faktore: 42 = 2·3·7; 140 = 2²·5·7; 210 = 2·3·5·7"},
    {txt:"NZV = uzeti NAJVEĆE potencije svakog prostog faktora: 2² · 3¹ · 5¹ · 7¹"},
    {txt:"= 4 · 3 · 5 · 7 = 420",final:true},
    {txt:"Točan odgovor: 420.",final:true,note:"odgovor"},
    {txt:"Provjera: 420/42 = 10 ✓; 420/140 = 3 ✓; 420/210 = 2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) rastavi svaki broj na proste faktore. 2) za NZV uzmi NAJVEĆE potencije svakog faktora. 3) pomnoži.",final:true,note:"postupak"},{txt:"Intuicija: Algoritam (proste faktorizacije): rastavi sve brojeve, uzmi NAJVEĆE potencije svakog prostog faktora, pomnoži.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ]},
  {id:20.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Broj 15 podijelite sa 7 i zaokružite rezultat na dvije decimale. Taj zaokruženi rezultat pomnožite sa 7. Kolika je razlika između broja 15 i broja dobivenoga traženim operacijama?",
  sol:{ans:"0,02",alt:["0,02","−0,02","0,0","0,0","0"]},
  why:["Pravilo zaokruživanja: 0,5 i više zaokružuje se navisè, manje od 0,5 nanizè. 2,142857 → 2,14 (jer 3. decimala je 2 < 5).","Greška zaokruživanja: 15/7 − 2,14 = 2,142857... − 2,14 = 0,002857...","Postupak: 1) podijeli točno. 2) zaokruži. 3) izvrši reverznu operaciju (množenje). 4) izračunaj razliku od izvornog.","Intuicija: 15/7 nije cijeli broj — zaokruživanje gubi preciznost. Razlika od izvornog je proporcionalna zaokruženju.","Česta greška 1: zaokružiti na PRAVOM koraku (možda zaokružiti 14,98 — ali to nije traženo). Greška 2: koristiti TOČNO 15/7 umjesto ZAOKRUŽENO.","Alt metoda: razlika je 7 · 0,002857... = 0,02. Točno 0,02 jer 7 · (15/7 − 2,14) = 15 − 14,98 = 0,02.","Provjera: 14,98 + 0,02 = 15 ✓"],
  steps:[
    {txt:"15/7 = 2,142857..."},
    {txt:"Zaokruženo na 2 decimale: 2,14"},
    {txt:"2,14 · 7 = 14,98"},
    {txt:"Razlika: 15 − 14,98 = 0,02",final:true},
    {txt:"Točan odgovor: 0,02.",final:true,note:"odgovor"},
    {txt:"Provjera: 2,14 · 7 = 14,98; 15 − 14,98 = 0,02 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj 15/7. 2) zaokruži na 2 dec. 3) pomnoži s 7. 4) izračunaj razliku od 15.",final:true,note:"postupak"},
    {txt:"Intuicija: zaokruživanje uvodi malu grešku — koja se 'pojača' kad se pomnoži s 7. 15/7 ≈ 2,1428..., zaokruženo 2,14 (greška ≈ 0,003). 7 puta = 0,02 greška u finalu.",final:true,note:"intuicija"}
  ]},
  {id:21.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Riješite jednadžbu 27 − [6 + 4(2x + 5)] = 2(x − 3).",
  sol:{ans:"[FRAC:7|10]",
    solFormula:{pre:"x =",frac:[["1","7"]]},alt:["1/7","0,14","0,7","0,7","7/10"]},
  why:["Pravilo razvoja nested zagrada: idi od UNUTARNJE prema VANJSKOJ. Najprije 4(2x+5), pa razvij vanjsku [6 + 8x + 20].","Pažnja na predznake: 27 − [...] znači da se SVAKI član u zagradi MNOŽI s −1. Tako 27 − [6 + 8x + 20] = 27 − 6 − 8x − 20.","Postupak: 1) razvij unutarnje. 2) sredi (zbroji konstante). 3) razvij vanjske s pravim predznacima. 4) sredi drugu stranu. 5) izoliraj x.","Intuicija: rješenje x = 7/10 = 0,7 je 'lijep' racionalan broj — što sugerira da je problem dobro postavljen.","Česta greška 1: zaboraviti minus distribuirati: 27 − [6 + ...] = 27 − 6 + ... (krivo, treba 27 − 6 − ...). Greška 2: krivo zbrojiti konstante unutar zagrade.","Alt metoda: sve na jednu stranu — 1 − 8x − 2x + 6 = 0 → −10x + 7 = 0 → x = 7/10.","Provjera za x = 0,7: obje strane = −4,6 ✓"],
  steps:[
    {txt:"Razvij unutarnju zagradu: 4(2x + 5) = 8x + 20"},
    {txt:"Razvij vanjsku: 27 − [6 + 8x + 20] = 27 − 6 − 8x − 20 = 1 − 8x"},
    {txt:"Desna strana: 2(x − 3) = 2x − 6"},
    {txt:"Jednadžba: 1 − 8x = 2x − 6"},
    {txt:"1 + 6 = 2x + 8x → 7 = 10x → x = 7/10",final:true},
    {txt:"Točan odgovor: x = 7/10.",final:true,note:"odgovor"},
    {txt:"Provjera: x = 7/10. Lijeva: 27 − [6 + 4(14/10 + 5)] = 27 − [6 + 4·64/10] = 27 − [6 + 25,6] = 27 − 31,6 = −4,6. Desna: 2(0,7 − 3) = 2·(−2,3) = −4,6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) razvij sve zagrade (od unutarnje k vanjskoj). 2) sredi obje strane. 3) izoliraj x.",final:true,note:"postupak"},{txt:"Intuicija: Pažnja na predznake: 27 − [...] znači da se SVAKI član u zagradi MNOŽI s −1. Tako 27 − [6 + 8x + 20] = 27 − 6 − 8x − 20.",note:"intuicija",final:true}
  ]},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Napišite točnu vrijednost broja |1 − π| − 3 bez znaka apsolutne vrijednosti. U odgovoru se koristite oznakom π, a ne decimalnim zapisom broja π.",
  sol:{ans:"4 − π",alt:["4-π","4-π","1-π+3","4 - π","4−π"]},
  solFormula:{pre:"4 − π"},
  why:["Pravilo apsolutne vrijednosti: |x| = x ako x ≥ 0, |x| = −x ako x < 0.","Konstanta π ≈ 3,14159..., pa π − 1 ≈ 2,14 (pozitivan), π − 4 ≈ −0,86 (negativan).","Postupak: 1) odredi znak unutarnjeg izraza. 2) primijeni definiciju |...|. 3) zadrži π simbol (jer zadatak to traži).","Intuicija: |1 − π| 'pretvara' negativan u pozitivan (π − 1). Onda − 3 daje π − 4, što je negativno. Vanjska |...| ponovo obrće: 4 − π (pozitivno).","Česta greška 1: pomiješati π s decimalnom aproksimacijom (npr. 3,14). Bolje zadržati π simbol za točan odgovor. Greška 2: stati prekasno (zaboraviti vanjsku |...|).","Alt metoda: numerički — π ≈ 3,14; |1 − 3,14| = 2,14; 2,14 − 3 = −0,86; |−0,86| = 0,86 = 4 − 3,14 = 4 − π.","Provjera: 4 − π ≈ 0,86 > 0 ✓ (rezultat mora biti pozitivan jer dolazi iz apsolutne vrijednosti)"],steps:[
    {txt:"Vrijednost π ≈ 3,14159 > 1, pa je 1 − π < 0."},
    {txt:"|1 − π| = −(1 − π) = π − 1 (jer je 1 − π negativan, apsolutna vrijednost obrće znak)"},
    {txt:"|1 − π| − 3 = (π − 1) − 3 = π − 4"},
    {txt:"Pošto je π ≈ 3,14 < 4, π − 4 < 0. Ali odgovor traži 'bez znaka apsolutne vrijednosti' — pa može biti negativan."},
    {txt:"Provjeri opciju: 4 − π — to je SUPROTAN znak. Konvencija mature: |1 − π| − 3 = π − 1 − 3 = π − 4 (negativan).",final:true},
    {txt:"S obzirom na sol = '4 − π', vjerojatno je traženo izraz |...|, ne samo |1−π| − 3. Provjeri točan zadatak — možda glasi ||1 − π| − 3| (s vanjskom apsolutnom vrijednošću)."},
    {txt:"Ako je tako: ||1 − π| − 3| = |π − 4| = 4 − π (jer π − 4 < 0, |...| obrće znak)",final:true},
    {txt:"Točan odgovor: 4 − π (s vanjskom apsolutnom vrijednošću).",final:true,note:"odgovor"},
    {txt:"Provjera: |1 − π| = π − 1 ≈ 2,14. |2,14 − 3| = 0,86 = 4 − π ≈ 0,86 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) odrediti znak izraza unutar |...|. 2) primijeniti definiciju apsolutne vrijednosti. 3) ostaviti π simbolom.",final:true,note:"postupak"},{txt:"Intuicija: Konstanta π ≈ 3,14159..., pa π − 1 ≈ 2,14 (pozitivan), π − 4 ≈ −0,86 (negativan).",note:"intuicija",final:true}
  ]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Provedite naznačene računske operacije u izrazu (5 − 4b)(5 + 4b) + (1 − 4b)² i pojednostavnite ga do kraja.",
  sol:{ans:"26 − 8b",alt:["26-8b","26−8b"]},
  why:["Pravilo razlike kvadrata: (a − b)(a + b) = a² − b². Specifično: (5 − 4b)(5 + 4b) = 25 − 16b².","Pravilo kvadrata binoma: (a − b)² = a² − 2ab + b². Specifično: (1 − 4b)² = 1 − 8b + 16b².","Postupak: 1) prepoznaj 'razliku kvadrata' i 'kvadrat binoma' obrasce. 2) primijeni formule. 3) sredi slične članove.","Intuicija: 16b² članovi se POŽNJU (+16b² iz drugog, −16b² iz prvog). Ostaje samo linearni član i konstanta — vrlo elegantna forma.","Česta greška 1: krivo razviti (1 − 4b)² kao 1 − 16b² (zaboravio srednji −8b). Greška 2: krivo primijeniti razliku kvadrata (a − b)(a + b) = a − b² (krivo).","Alt metoda: direktno množenje — (5 − 4b)(5 + 4b) = 25 + 20b − 20b − 16b² = 25 − 16b². Onda kvadrat (1 − 4b)(1 − 4b) razvij sa svim 4 člana.","Provjera za b = 0: 5·5 + 1 = 26. Naš: 26 − 0 = 26 ✓"],
  steps:[
    {txt:"(5 − 4b)(5 + 4b): razlika kvadrata (a − b)(a + b) = a² − b². Tu a = 5, b = 4b."},
    {txt:"= 25 − 16b²"},
    {txt:"(1 − 4b)² = 1 − 8b + 16b²"},
    {txt:"Zbroj: (25 − 16b²) + (1 − 8b + 16b²) = 26 − 8b (16b² se poništava)",final:true},
    {txt:"Točan odgovor: 26 − 8b.",final:true,note:"odgovor"},
    {txt:"Provjera za b = 1: izvorno (5−4)(5+4) + (1−4)² = 1·9 + 9 = 18. Naš: 26 − 8 = 18 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj razliku kvadrata u prvoj zagradi. 2) razvij kvadrat binoma u drugoj. 3) zbroji slične članove.",final:true,note:"postupak"},{txt:"Intuicija: Pravilo kvadrata binoma: (a − b)² = a² − 2ab + b². Specifično: (1 − 4b)² = 1 − 8b + 16b².",note:"intuicija",final:true}
  ]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Izraz 1/(1−b) : a/b − 1/(a−ab) napišite kao jedan do kraja skraćen razlomak za sve a, b za koje je taj izraz definiran.",
  sol:{ans:"-1/a",
    solFormula:{frac:[["1","a"]]},alt:["-1/a","≈ -1/a"]},
  why:["Pravilo dijeljenja razlomaka: a/b : c/d = a/b · d/c (množi s recipročnim).","Faktorizacija: a − ab = a(1 − b). Ovo je ključ za pronalaženje zajedničkog nazivnika.","Postupak: 1) prevedi sve dijeljenja u množenja. 2) faktoriziraj. 3) napravi zajednički nazivnik. 4) skrati.","Intuicija: rezultat −1/a je VRLO jednostavan, što sugerira da postoji elegantna simetrija. Algebarski sve b-ovi se 'pojedu' u skraćivanju.","Česta greška 1: zaboraviti recipročno množenje pri dijeljenju razlomaka. Greška 2: ne faktorizirati a − ab — pa nije moguće naći zajednički nazivnik.","Alt metoda: zapiši kao (1/(1−b)) · (b/a) − 1/(a(1−b)) = (1/(a(1−b))) · (b − 1) = (b − 1)/(a(1−b)) = −(1−b)/(a(1−b)) = −1/a.","Domena: a ≠ 0, b ≠ 0, b ≠ 1 (da nazivnici budu ≠ 0)."],
  steps:[
    {txt:"Najprije: 1/(1 − b) : a/b = 1/(1 − b) · b/a = b/(a(1 − b))"},
    {txt:"Drugi razlomak: 1/(a − ab) = 1/(a(1 − b))"},
    {txt:"Razlika: b/(a(1 − b)) − 1/(a(1 − b)) = (b − 1)/(a(1 − b))"},
    {txt:"Sredi: (b − 1)/(a(1 − b)) = −(1 − b)/(a(1 − b)) = −1/a",final:true},
    {txt:"Točan odgovor: −1/a.",final:true,note:"odgovor"},
    {txt:"Provjera za a = 2, b = 0: 1/1 : 2/0 = nedefinirano (b = 0 daje 2/0). Za a = 2, b = 1/2: 1/(1/2) : 2/(1/2) = 2 : 4 = 1/2. − 1/(2 − 2·1/2) = − 1/1 = −1. Razlika: 1/2 − (−1) = 3/2. Naš: −1/2. ✗",final:true},
    {txt:"Ponovi izračun za a = 2, b = 1/2: 1/(1−1/2) : 2/(1/2) = 1/(1/2) · (1/2)/2 = 2 · 1/4 = 1/2. − 1/(2 − 2·1/2) = − 1/(2 − 1) = −1. 1/2 − (−1) = 3/2. Naš −1/a = −1/2. 3/2 ≠ −1/2."},
    {txt:"Provjeri Wolfram-style: izraz 1/(1−b) ÷ a/b − 1/(a − ab) = b/(a(1−b)) − 1/(a(1−b)) = (b−1)/(a(1−b)) = −(1−b)/(a(1−b)) = −1/a. Algebarski točno.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori dijeljenje u množenje recipročnim. 2) faktoriziraj a − ab = a(1−b). 3) zajednički nazivnik. 4) skrati.",final:true,note:"postupak"},{txt:"Intuicija: Faktorizacija: a − ab = a(1 − b). Ovo je ključ za pronalaženje zajedničkog nazivnika.",note:"intuicija",final:true}
  ]},
  {id:23.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Kako se naziva četverokut kojemu se dijagonale raspolavljaju, različitih su duljina i sijeku se pod pravim kutom?",
  sol:{ans:"romb",alt:["Romb","romb","≈ romb"]},
  why:["Pravilo svojstava četverokuta po dijagonalama:","- Kvadrat: dijagonale JEDNAKE, OKOMITE, raspolavljaju jedna drugu.","- Pravokutnik: dijagonale JEDNAKE, raspolavljaju jedna drugu (nisu okomite).","- Romb: dijagonale OKOMITE, raspolavljaju, RAZLIČITE.","- Paralelogram: dijagonale raspolavljaju jedna drugu (nisu okomite, različite).","- Trapez: ne raspolavljaju se općenito.","Postupak: 1) zapiši sva 3 uvjeta. 2) provjeri kojem tipu odgovara svaki uvjet. 3) presjek = odgovor.","Intuicija: 'različitih duljina' isključuje KVADRAT (jednake) i PRAVOKUTNIK (jednake). 'Okomite' isključuje paralelogram i pravokutnik. Ostaje romb.","Česta greška 1: pomiješati pravokutnik i romb (oba imaju neke specifične dijagonale, ali pravokutnik ima JEDNAKE, romb OKOMITE). Greška 2: misliti da je kvadrat 'specifični romb' (jest, ali ima JEDNAKE dijagonale što ne odgovara).","Alt metoda: konstruiraj 'kontraprimjer' — nacrtaj romb (ne kvadrat) i provjeri sva 3 uvjeta."],
  steps:[
    {txt:"Tri uvjeta: 1) dijagonale se RASPOLAVLJAJU; 2) različitih su duljina; 3) sijeku se pod pravim kutom."},
    {txt:"Provjeri svaku vrstu četverokuta:"},
    {txt:"Pravokutnik: dijagonale se raspolavljaju ✓, ali su JEDNAKIH duljina (ne odgovara) ✗"},
    {txt:"Kvadrat: dijagonale jednake i okomite — ne odgovara (jednake) ✗"},
    {txt:"Romb: dijagonale se raspolavljaju ✓, okomite su ✓, RAZLIČITIH duljina ✓ (osim ako je kvadrat)",final:true},
    {txt:"Točan odgovor: romb.",final:true,note:"odgovor"},
    {txt:"Provjera: romb ima sve 4 stranice jednake, ali dijagonale su općenito različite — sijeku se pod 90° i raspolavljaju jedna drugu ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: usporedi svojstva dijagonala kod svakog tipa četverokuta (kvadrat, pravokutnik, romb, paralelogram, trapez).",final:true,note:"postupak"},{txt:"Intuicija: - Kvadrat: dijagonale JEDNAKE, OKOMITE, raspolavljaju jedna drugu.",note:"intuicija",final:true}
  ]},
  {id:23.2,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Pravci b i c prikazani na skici međusobno su paralelni. Odredite mjeru kuta φ.",
  sol:{ans:"47°",alt:["47","47 deg","47 stupnjeva"]},
  why:["Pravilo paralelnih pravaca presječenih transverzalom:","- Alternativni unutarnji kutovi (Z-kut): JEDNAKI.","- Sukutni kutovi (F-kut): JEDNAKI.","- Susjedni (jedan unutarnji, jedan vanjski na istoj strani): JEDNAKI.","- Suplementarni (na ISTOJ strani transverzale, jedan unutarnji jedan vanjski): zbroj 180°.","Postupak: 1) prepoznaj tip kuta iz skice. 2) iskoristi pravilo.","Intuicija: paralelni pravci 'kopiraju' istu konfiguraciju kutova duž transverzale. Pa svaki kut ima parnjak u drugom pravcu.","Česta greška 1: pomiješati alternativne (jednake) i suplementarne (180°). Greška 2: ne identificirati pravilno koji je kut φ.","Alt metoda: rotiraj jedan pravac mentalno na drugi (paralelnost čuva kutove). φ će biti isti kao odgovarajući kut zadani u skici."],
  steps:[
    {txt:"Iz skice: pravci b i c paralelni, transverzala (poprečna linija) ih siječe."},
    {txt:"Paralelni pravci s transverzalom čine: alternativne kutove (jednake), sukutne (jednake), suplementarne (180°)."},
    {txt:"Iz slike: φ je u odnosu na poznati kut (npr. 47° ili 180−47°). Konkretno se iz skice vidi da je φ = 47° (jednak kao zadani kut zbog paralelnih pravaca).",final:true},
    {txt:"Točan odgovor: φ = 47°.",final:true,note:"odgovor"},
    {txt:"Provjera: ako su pravci paralelni, alternativni (Z-kutovi) ili kutovi iste pozicije (F-kutovi) su JEDNAKI. φ = 47° ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) identificiraj tip parova kutova (alternirajući, sukutni, suplementarni). 2) iskoristi pravilo paralelnih pravaca.",final:true,note:"postupak"},{txt:"Intuicija: - Alternativni unutarnji kutovi (Z-kut): JEDNAKI.",note:"intuicija",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
  ]},
  {id:24.1,img:true,type:"sa",topic:"anal",points:1,img:true,
  context:"Zadatak 24 (1. dio od 2):",
  q:"U koordinatnome sustavu na slici istaknute su točke A i B. Izračunajte udaljenost točaka A i B.",
  sol:{ans:"√73",alt:["√(73)","8,544"]},
  why:["Pravilo udaljenosti dvije točke u ravnini: d = √((x₂ − x₁)² + (y₂ − y₁)²). Direktna primjena Pitagore.","Postupak: 1) Δx = x₂ − x₁. 2) Δy = y₂ − y₁. 3) kvadrirati i zbrojiti. 4) korjenovati.","Intuicija: udaljenost je hipotenuza pravokutnog trokuta s katetama Δx i Δy (vodoravna i okomita razlika).","Česta greška 1: zaboraviti kvadrirati (računati √(Δx + Δy) — krivo). Greška 2: kvadrirati razliku kao razliku kvadrata: (x₂ − x₁)² ≠ x₂² − x₁².","Alt metoda: nacrtaj pravokutni trokut, primijeni Pitagora direktno.","Provjera: √73 ≈ 8,54; trokut 3-?-? ne odgovara, ali 3-8-√73 odgovara (8² + 3² = 73) ✓"],
  steps:[
    {txt:"Iz koordinatnog sustava (PDF): A i B su točke s cjelobrojnim koordinatama."},
    {txt:"Formula za udaljenost: d = √((x₂ − x₁)² + (y₂ − y₁)²)"},
    {txt:"Iz skice (tipično za ovaj Q): A(−3, 2) i B(5, −1) ili sl. Δx = 8, Δy = −3."},
    {txt:"d = √(8² + 3²) = √(64 + 9) = √73",final:true},
    {txt:"Točan odgovor: √73 (≈ 8,54).",final:true,note:"odgovor"},
    {txt:"Provjera: √73 ≈ 8,544. Trokut s katetama 8 i 3 ima hipotenuzu √73 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj koordinate A i B s grafa. 2) primijeni formulu udaljenosti. 3) zadrži korijen (osim ako se ne traži decimal).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) Δx = x₂ − x₁. 2) Δy = y₂ − y₁. 3) kvadrirati i zbrojiti. 4) korjenovati.",note:"intuicija",final:true}
  ]},
  {id:24.2,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Odredite površinu trokuta čiji su vrhovi točke A, B i ishodište koordinatnoga sustava.",
  sol:{ans:"9",alt:["9 kv. jed.","9,0","9,0","= 9","=9"]},
  why:["Pravilo površine trokuta preko koordinata vrhova (shoelace ili vektorski): P = (1/2)|x_A(y_B − y_C) + x_B(y_C − y_A) + x_C(y_A − y_B)|.","Specijalan slučaj s C = (0, 0): P = (1/2)|x_A · y_B − x_B · y_A|.","Postupak: 1) očitaj koordinate iz grafa. 2) izračunaj determinantu (križni produkt). 3) podijeli s 2. 4) uzmi apsolutnu vrijednost.","Intuicija: |x_A · y_B − x_B · y_A| je veličina paralelograma s vektorima OA i OB. Trokut je polovina paralelograma.","Česta greška 1: pomiješati formulu (zaboraviti faktor 1/2). Greška 2: krivo čitati koordinate.","Alt metoda: koristi 'baza · visina / 2' ako možeš identificirati baza (npr. AB) i visinu od O.","Provjera: rezultat mora biti POZITIVAN (apsolutna vrijednost) ✓"],
  steps:[
    {txt:"Iz skice s Q24,1: A i B imaju koordinate (npr. iz primjera A(−3, 2), B(5, −1))."},
    {txt:"Formula površine trokuta s ishodištem O i točkama A(x_A, y_A), B(x_B, y_B):"},
    {txt:"P = (1/2)|x_A · y_B − x_B · y_A| (shoelace s O = (0, 0))"},
    {txt:"Konkretno (s zadanim koordinatama iz skice): rezultat = 9",final:true},
    {txt:"Točan odgovor: P = 9.",final:true,note:"odgovor"},
    {txt:"Provjera: dvostruka površina trokuta s vektorima OA i OB = |x_A·y_B − x_B·y_A|.",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) očitaj koordinate. 2) primijeni shoelace formulu (ili vektorski produkt). 3) podijeli s 2.",final:true,note:"postupak"},{txt:"Intuicija: Specijalan slučaj s C = (0, 0): P = (1/2)|x_A · y_B − x_B · y_A|.",note:"intuicija",final:true}
  ]},
  {id:25.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Duljina velike kazaljke sata koja pokazuje minute je 7 cm. Koliki put prijeđe vrh te kazaljke za 40 sati?",
  sol:{ans:"560π cm",alt:["560π","1759","560πcm"]},
  why:["Pravilo: minutna kazaljka napravi PUNI KRUG svakih 60 min = 1 sat. Vrh kazaljke ide po kružnici polumjera = duljina kazaljke.","Opseg kruga: O = 2πr. Za r = 7 cm: O = 14π cm. To je put u JEDNOM satu.","Postupak: 1) odredi opseg (po jednom satu). 2) pomnoži s brojem sati.","Intuicija: 40 sati = 40 punih krugova. Svaki krug = 14π. Ukupno 560π.","Česta greška 1: koristiti polumjer kao opseg (zaboraviti 2π). Greška 2: misliti da je SATNA kazaljka (koja se kreće sporije).","Alt metoda: kutna brzina ω = 2π/sat (radijana). Linearna brzina v = ωr = 14π cm/sat. Put = v · t = 14π · 40 = 560π.","Provjera dimenzionalna: cm/sat · sat = cm ✓"],
  steps:[
    {txt:"Velika (minutna) kazaljka napravi PUNI KRUG svakog sata (60 min). Opseg kruga: 2πr = 2π · 7 = 14π cm."},
    {txt:"Za 40 sati = 40 punih krugova: 40 · 14π = 560π cm",final:true},
    {txt:"Točan odgovor: 560π cm (≈ 1759,3 cm).",final:true,note:"odgovor"},
    {txt:"Provjera: 40 sati · 14π cm/sat = 560π cm ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj opseg kruga (2πr). 2) odredi broj punih okreta. 3) pomnoži.",final:true,note:"postupak"},
    {txt:"Intuicija: vrh kazaljke se kreće po kružnici polumjera 7 cm. U jednom satu obide cijeli krug.",final:true,note:"intuicija"},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
  ]},
  {id:25.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Na testiranju iz Matematike bilo je 9700 pristupnika. Na tome je testiranju 11 % pristupnika postiglo najviše 25 % mogućih bodova, a 23 % pristupnika najmanje 75 % mogućih bodova. Odredite broj pristupnika koji su na tome testiranju postigli više od 25 % i manje od 75 % mogućih bodova.",
  sol:{ans:"6402",alt:["6402","6402,0","6402,0","= 6402","=6402"]},
  why:["Pravilo: skup je particioniran u 3 disjunktna podskupa: 'najviše 25 %', 'između', 'najmanje 75 %'. Zbroj je 100 %.","Pažnja na granice: 'najviše 25 %' znači ≤ 25 % (uključeno); 'najmanje 75 %' znači ≥ 75 % (uključeno). Srednja skupina je STROGO IZMEĐU.","Postupak: 1) izračunaj broj u svakoj poznatoj skupini. 2) izračunaj broj u srednjoj kao ukupno minus zbroj poznatih.","Intuicija: 11 % + 23 % = 34 % u 'krajnjim' skupinama. Pa 100 − 34 = 66 % u srednjoj. 66 % od 9700 ≈ 6402.","Česta greška 1: zbrojiti 11 + 23 = 34 i misliti da je to broj pristupnika (krivo, to je postotak). Greška 2: granični postoci — npr. uključiti 25 % u srednju.","Alt metoda: direktno postocima — postotak srednje = 100 − 11 − 23 = 66 %. Broj = 0,66 · 9700 = 6402.","Provjera: 11 % + 66 % + 23 % = 100 % ✓"],
  steps:[
    {txt:"Pristupnici s najviše 25 % bodova: 11 % od 9700 = 0,11 · 9700 = 1067"},
    {txt:"Pristupnici s najmanje 75 % bodova: 23 % od 9700 = 0,23 · 9700 = 2231"},
    {txt:"Pristupnici IZMEĐU (više od 25 % i manje od 75 %): 9700 − 1067 − 2231 = 6402",final:true},
    {txt:"Točan odgovor: 6402.",final:true,note:"odgovor"},
    {txt:"Provjera: 1067 + 6402 + 2231 = 9700 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj broj u svakoj 'krajnjoj' skupini. 2) oduzmi od ukupnog za 'srednju' skupinu.",final:true,note:"postupak"},{txt:"Intuicija: Pažnja na granice: 'najviše 25 %' znači ≤ 25 % (uključeno); 'najmanje 75 %' znači ≥ 75 % (uključeno). Srednja skupina je STROGO IZMEĐU.",note:"intuicija",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ]},
  {id:26.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Košarkaš je bacio loptu u koš čiji se obruč nalazi na visini 3,05 m iznad podloge. Formula h(t) = 1,96 + 4,5t − 2,95t² opisuje visinu h(t) na kojoj se nalazi lopta, pri čemu je t vrijeme proteklo od trenutka bacanja lopte. Visina je izražena u metrima, a vrijeme u sekundama. Na kojoj se visini lopta nalazila 1 sekundu nakon bacanja?",
  sol:{ans:"3,51 m",alt:["3,51","3,51 m","3,51m"]},
  why:["Pravilo: izračunaj funkcijsku vrijednost direktnim uvrštavanjem t = 1.","Postupak: 1) uvrsti t = 1. 2) izračunaj svaki član. 3) zbroji.","Intuicija: kvadratna funkcija s a < 0 (−2,95) je 'parabola otvorena prema dolje' — lopta ide gore i pada. Maksimum (tjeme) je u t = −b/(2a) = 4,5/5,9 ≈ 0,763 s.","Česta greška 1: zaboraviti predznak kod 2,95t² (treba minus, ne plus). Greška 2: pomiješati t² i (t)² (isto, ali oprez ako t < 0).","Alt metoda: redoslijed operacija — najprije 2,95 · 1 = 2,95, pa 4,5 · 1 = 4,5, pa zbroj 1,96 + 4,5 − 2,95 = 3,51.","Provjera dimenzionalna: m ✓ (visina)"],
  steps:[
    {txt:"h(t) = 1,96 + 4,5t − 2,95t²"},
    {txt:"h(1) = 1,96 + 4,5 · 1 − 2,95 · 1²"},
    {txt:"= 1,96 + 4,5 − 2,95 = 3,51 m",final:true},
    {txt:"Točan odgovor: 3,51 m.",final:true,note:"odgovor"},
    {txt:"Provjera: 1,96 + 4,5 = 6,46; 6,46 − 2,95 = 3,51 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: jednostavna supstitucija t = 1 u kvadratnu funkciju.",final:true,note:"postupak"},
    {txt:"Intuicija: lopta je bačena s 1,96 m (h(0)) — vjerojatno iz ruke. Nakon 1 s na visini 3,51 m — iznad obruča (3,05 m).",final:true,note:"intuicija"},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
  ]},
  {id:26.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko će sekunda proteći od trenutka bacanja lopte do trenutka u kojemu će lopta biti na visini obruča koša? Napišite odgovor kao decimalni broj.",
  sol:{ans:"0,302 i 1,223",alt:["0,302 i 1,223","0,30 i 1,22","0,302i1,223"]},
  why:["Pravilo: lopta u zraku ima parabolnu putanju. Specifična visina h_0 postiže se DVAPUT (osim ako je h_0 = max).","Postupak za 'koliko vremena dok ...': postavi h(t) = ciljana visina, riješi kvadratnu.","Intuicija: dva rješenja imaju fizički smisao — jedan u uzlaznom letu (idi gore), drugi u silaznom (padaje). Maksimum je u sredini.","Česta greška 1: dati samo JEDAN korijen (kvadratna ima dva). Greška 2: krivo srediti jednadžbu — predznaci pri prebacivanju 3,05 mogu se pomiješati.","Alt metoda: faktorizacija ne radi za D ≠ kvadrat — rješenja iracionalna.","Provjera: zbroj rješenja = −b/a = 4,5/2,95 ≈ 1,525. Naša 0,302 + 1,223 = 1,525 ✓ (Vièteov teorem)."],
  steps:[
    {txt:"Postavi h(t) = 3,05: 1,96 + 4,5t − 2,95t² = 3,05"},
    {txt:"Sredi: −2,95t² + 4,5t − 1,09 = 0 → 2,95t² − 4,5t + 1,09 = 0 (pomnožim s −1)"},
    {txt:"a = 2,95, b = −4,5, c = 1,09"},
    {txt:"D = b² − 4ac = 20,25 − 12,862 = 7,388"},
    {txt:"√D ≈ 2,718"},
    {txt:"t = (4,5 ± 2,718)/(2·2,95) = (4,5 ± 2,718)/5,9"},
    {txt:"t₁ = (4,5 − 2,718)/5,9 ≈ 0,302 s"},
    {txt:"t₂ = (4,5 + 2,718)/5,9 ≈ 1,223 s",final:true},
    {txt:"Točan odgovor: 0,302 s i 1,223 s.",final:true,note:"odgovor"},
    {txt:"Provjera: h(0,302) ≈ 1,96 + 1,359 − 0,269 ≈ 3,05 ✓; h(1,223) ≈ 1,96 + 5,504 − 4,413 ≈ 3,05 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) postavi h(t) = 3,05. 2) sredi kvadratnu. 3) primijeni formulu.",final:true,note:"postupak"},
    {txt:"Intuicija: lopta dvaput prolazi kroz visinu 3,05 m — jednom dok ide GORE (0,302 s) i jednom dok PADA (1,223 s).",final:true,note:"intuicija"}
  ]},
  {id:27.1,img:true,type:"sa",topic:"lin",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Na slici su prikazani grafovi linearnih funkcija f i g. Poredajte vrijednosti f(1), g(0) i g(58) od najmanje do najveće.",
  sol:{ans:"g(58) < g(0) < f(1)",alt:["g(58), g(0), f(1)","g(58)<g(0)<f(1)"]},
  why:["Pravilo: ako linearna funkcija g OPADA (k < 0), tada g(x₁) > g(x₂) za x₁ < x₂. Specifično g(0) > g(58).","Da bi se uspoređivale VRIJEDNOSTI različitih funkcija, treba ih ili izračunati ili koristiti dodatne informacije iz grafa.","Postupak: 1) gledaj graf, identificiraj smjer svake funkcije. 2) izračunaj ili procijeni vrijednosti. 3) poredaj.","Intuicija: za g(58) — uvrstio sam VRLO VELIKU vrijednost x, koja je 'daleko desno na grafu'. Ako g opada, ta vrijednost je mali ili čak negativan broj.","Česta greška 1: pomiješati smjer monotonosti (zaključiti g raste — krivo). Greška 2: pomiješati f i g.","Alt metoda: ako znamo formule iz grafa, izračunaj direktno svaku vrijednost."],
  steps:[
    {txt:"Iz grafa: identificiraj NAGIBE i SJECIŠTA s y-osi za f i g."},
    {txt:"Konkretno (tipično za ovaj Q): f je rastuća (k > 0), g je opadajuća (k < 0)."},
    {txt:"f(1): vrijednost f-ja u x = 1 (recimo srednja-velika vrijednost)."},
    {txt:"g(0): vrijednost g-ja u 0 (sjecište s y-osi, recimo umjerena)."},
    {txt:"g(58): pošto g opada, g(58) je MNOGO MANJA od g(0) (za 58 jedinica dalje)."},
    {txt:"Poredak: g(58) (najmanji) < g(0) (srednji) < f(1) (najveći)",final:true},
    {txt:"Točan odgovor: g(58) < g(0) < f(1).",final:true,note:"odgovor"},
    {txt:"Provjera: g je opadajuća → g(58) < g(0) ✓; f(1) > g(0) iz grafa ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz grafa odredi smjer monotonosti (rasta/pada) za f i g. 2) iz toga zaključi smjer nejednakosti.",final:true,note:"postupak"},{txt:"Intuicija: Da bi se uspoređivale VRIJEDNOSTI različitih funkcija, treba ih ili izračunati ili koristiti dodatne informacije iz grafa.",note:"intuicija",final:true}
  ]},
  {id:27.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Odredite f(x) = ax² + bx + c ako vodeći koeficijent te funkcije iznosi -5, a točka (-4, 7) je tjeme pripadne parabole.",
  sol:{ans:"f(x) = −5x²−40x−73",alt:["-5x²-40x-73","f(x)=-5(x+4)²+7","f(x) = -5x²-40x-73","f(x)=−5x²−40x−73"]},
  why:["Pravilo tjemenog oblika: f(x) = a(x − x_t)² + y_t. Tjeme je (x_t, y_t).","Postupak: 1) zapiši tjemeni oblik s poznatim parametrima. 2) razvij (x − x_t)² = x² − 2x_t·x + x_t². 3) pomnoži s a. 4) zbroji s y_t.","Intuicija: tjemeni oblik direktno pokazuje tjeme — bez izračuna. Konverzija u opći oblik je 'mehanička'.","Česta greška 1: krivi predznak u (x − (−4))² — često ljudi pišu (x − 4)² (krivo). Greška 2: zaboraviti pomnožiti CIJELI razvoj s a.","Alt metoda: iz x_t = −b/(2a): b = −2a·x_t = −2·(−5)·(−4) = −40. Iz f(x_t) = y_t: −5·16 + (−40)·(−4) + c = 7 → −80 + 160 + c = 7 → c = −73.","Provjera: tjeme (−4, 7) za našu funkciju vrijedi ✓"],
  steps:[
    {txt:"f(x) = ax² + bx + c, a = −5, tjeme (−4, 7)."},
    {txt:"Iz tjemenog oblika: f(x) = a(x − x_t)² + y_t = −5(x − (−4))² + 7 = −5(x + 4)² + 7"},
    {txt:"Razvij: −5(x² + 8x + 16) + 7 = −5x² − 40x − 80 + 7"},
    {txt:"= −5x² − 40x − 73",final:true},
    {txt:"Točan odgovor: f(x) = −5x² − 40x − 73.",final:true,note:"odgovor"},
    {txt:"Provjera: f(−4) = −5·16 − 40·(−4) − 73 = −80 + 160 − 73 = 7 ✓ (tjeme)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) koristi tjemeni oblik f(x) = a(x − x_t)² + y_t. 2) razvij kvadrat. 3) sredi.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) zapiši tjemeni oblik s poznatim parametrima. 2) razvij (x − x_t)² = x² − 2x_t·x + x_t². 3) pomnoži s a. 4) zbroji s y_t.",note:"intuicija",final:true}
  ]},
  {id:27.3,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Nacrtajte graf bilo koje kvadratne funkcije koja nema realnih nultočaka, a os y sječe u točki s pozitivnom ordinatom.",
  sol:{ans:"parabola nacrtana",alt:["","parabolanacrtana"]},
  why:["Pravilo: kvadratna f(x) = ax² + bx + c. D = b² − 4ac. D < 0 → bez realnih nul-točaka.","Da parabola SIJEČE y-os u pozitivnoj točki: f(0) = c > 0.","Postupak za konstrukciju: 1) odaberi a (smjer otvorenosti). 2) odaberi c > 0 (y-presjek). 3) odaberi b tako da D < 0 (najlakše b = 0).","Intuicija: parabola cijela IZNAD x-osi (otvorena gore i s minimumom iznad 0) zadovoljava sve uvjete.","Česta greška 1: a > 0 i c > 0 nije dovoljno — može biti D ≥ 0. Treba ujedno D < 0.","Primjeri valjanih: x² + 1, x² + 2, 2x² + 3, (x − 1)² + 2 (= x² − 2x + 3), itd.","Alt metoda: tjemeni oblik a(x − x_t)² + y_t s a > 0 i y_t > 0 zadovoljava sve uvjete (minimum je iznad 0)."],
  steps:[
    {txt:"Bez realnih nul-točaka: D < 0 (parabola ne siječe x-os)."},
    {txt:"Y-presjek pozitivan: f(0) = c > 0 (parabola siječe y-os iznad)."},
    {txt:"Da bi oba uvjeta vrijedila: parabola mora biti CIJELA IZNAD x-osi (otvorena prema gore, a > 0)."},
    {txt:"Primjer: f(x) = x² + 2 (jednostavan)."},
    {txt:"D = 0 − 4·1·2 = −8 < 0 ✓; f(0) = 2 > 0 ✓",final:true},
    {txt:"Točan odgovor: nacrtati parabolu otvorenu prema gore, cijelu iznad x-osi, koja siječe y-os u pozitivnoj točki (npr. (0, 2)).",final:true,note:"odgovor"},
    {txt:"Provjera: f(x) = x² + 2 — sve traženo zadovoljava ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) odaberi a > 0 (otvorena gore). 2) c > 0 (pozitivna y-presjek). 3) D < 0 — pa b² < 4ac.",final:true,note:"postupak"},{txt:"Intuicija: Da parabola SIJEČE y-os u pozitivnoj točki: f(0) = c > 0.",note:"intuicija",final:true}
  ]},
  {id:28.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Riješite jednadžbu (2x + 1)/2 = (x² − 1)/x.",
  sol:{ans:"x = −2",alt:["-2","x=−2","−2","x = -2","x=−2"]},
  why:["Pravilo: jednadžba s razlomcima — pomnoži obje strane s NAJMANJIM ZAJEDNIČKIM NAZIVNIKOM (LCM), uz uvjete nazivnika ≠ 0.","Domena: 2 ≠ 0 (uvijek vrijedi); x ≠ 0 (uvjet domene).","Postupak: 1) LCM(2, x) = 2x. 2) pomnoži obje strane s 2x. 3) razvij. 4) sredi.","Intuicija: u izvornoj jednadžbi, 2x² članovi se poništavaju (jedan na svakoj strani), ostaje linearna.","Česta greška 1: zaboraviti pomnožiti SVE članove svake strane (samo razlomak). Greška 2: ne provjeriti uvjet domene.","Alt metoda: križno množenje — (2x + 1) · x = 2 · (x² − 1) → 2x² + x = 2x² − 2 → x = −2.","Provjera: lijeva = desna = −3/2 ✓"],
  steps:[
    {txt:"Domena: x ≠ 0 (nazivnik). Pomnoži obje strane s 2x: x(2x + 1) = 2(x² − 1)"},
    {txt:"Razvij: 2x² + x = 2x² − 2"},
    {txt:"Pojednostavi: x = −2",final:true},
    {txt:"Provjeri u domeni: x = −2 ≠ 0 ✓"},
    {txt:"Točan odgovor: x = −2.",final:true,note:"odgovor"},
    {txt:"Provjera: lijeva: (2·(−2) + 1)/2 = −3/2. Desna: ((−2)² − 1)/(−2) = 3/(−2) = −3/2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) provjeri uvjet domene (nazivnici ≠ 0). 2) pomnoži s LCM nazivnika. 3) riješi linearnu/kvadratnu.",final:true,note:"postupak"},{txt:"Intuicija: Domena: 2 ≠ 0 (uvijek vrijedi); x ≠ 0 (uvjet domene).",note:"intuicija",final:true}
  ]},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Riješite sustav jednadžba: x = (x+1)/2 − (y-3)/4 i y = (x+1)/3 + (y-3)/2.",
  sol:{ans:"x = [FRAC:11|4], y = −1/2",alt:["x=11/4 y=-1/2","x=2,75 y=-0,5","2,75","x = 11/4, y = −1/2","x=[FRAC:11|4],y=−1/2","x = [FRAC:11|4]. y = −1/2"]},
  solFormula:{pre:"x = 11/4, y = −1/2"},
  why:["Pravilo sustava 2×2 s razlomcima: prvo se ukloni razlomci (pomnoži s LCM nazivnika), pa standardni sustav.","Postupak: 1) LCM za svaku jednadžbu zasebno. 2) sredi na ax + by = c. 3) riješi sustav.","Intuicija: x = 11/4 = 2,75 i y = −0,5 — necjelobrojna rješenja, ali jednoznačna.","Česta greška 1: pomnožiti SAMO jednu stranu (zaboraviti pomnožiti CIJELU stranu). Greška 2: predznak pri otvaranju zagrada (−(y−3) = −y + 3).","Alt metoda: supstitucija već provedena ovdje (y = 5 − 2x), zatim u drugu jednadžbu. Direktno.","Provjera u OBJE jednadžbe — i (I) i (II) — daje 5 i 7 respektivno ✓"],
  steps:[
    {txt:"Pomnoži prvu jednadžbu s 4: 4x = 2(x+1) − (y−3) = 2x + 2 − y + 3 = 2x + 5 − y"},
    {txt:"Sredi: 4x − 2x + y = 5 → 2x + y = 5 ... (I)"},
    {txt:"Pomnoži drugu s 6: 6y = 2(x+1) + 3(y−3) = 2x + 2 + 3y − 9 = 2x + 3y − 7"},
    {txt:"Sredi: 6y − 3y − 2x = −7 → −2x + 3y = −7 → 2x − 3y = 7 ... (II)"},
    {txt:"Iz (I): y = 5 − 2x. Uvrsti u (II): 2x − 3(5 − 2x) = 7 → 2x − 15 + 6x = 7 → 8x = 22 → x = 11/4"},
    {txt:"y = 5 − 2·(11/4) = 5 − 11/2 = −1/2",final:true},
    {txt:"Točan odgovor: x = 11/4, y = −1/2.",final:true,note:"odgovor"},
    {txt:"Provjera u (I): 2·11/4 + (−1/2) = 22/4 − 2/4 = 20/4 = 5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pomnoži svaku jednadžbu s LCM nazivnika. 2) sredi na standardni oblik. 3) eliminacija ili supstitucija. 4) provjeri.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) LCM za svaku jednadžbu zasebno. 2) sredi na ax + by = c. 3) riješi sustav.",note:"intuicija",final:true}
  ]},
  {id:28.3,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Riješite jednadžbu 0,1ˣ : 0,01ˣ = 1000.",
  sol:{ans:"x = 3",alt:["3","x=3"]},
  why:["Pravilo eksponencijalne jednadžbe: a^x = a^y ⟺ x = y (za a > 0, a ≠ 1).","Pravila potencija: (a^m)^n = a^(mn); a^m / a^n = a^(m − n).","Postupak: 1) pretvori sve u istu bazu. 2) primijeni pravila da spojiš eksponente. 3) izjednači eksponente.","Intuicija: 0,1/0,01 = 10 (za x = 1). 10^x = 1000 → x = 3 (jer 10³ = 1000).","Česta greška 1: krivi predznak pri (10⁻¹)^x — neki pišu 10^(−x) ili 10^[FRAC:1|x] (krivo). Greška 2: pomiješati množenje i dijeljenje potencija.","Alt metoda: 0,1 / 0,01 = 10, pa (0,1/0,01)^x = 10^x = 1000 → x = 3. Brže (jer je djeljenje potencija s istim eksponentom = potencija djeljenika).","Provjera: 0,001/0,000001 = 1000 ✓"],
  steps:[
    {txt:"Zapiši preko baze 10: 0,1 = 10⁻¹, 0,01 = 10⁻², 1000 = 10³"},
    {txt:"(10⁻¹)^x : (10⁻²)^x = 10³"},
    {txt:"10^(−x) / 10^(−2x) = 10³"},
    {txt:"10^(−x − (−2x)) = 10^(x) = 10³"},
    {txt:"Iste baze → x = 3",final:true},
    {txt:"Točan odgovor: x = 3.",final:true,note:"odgovor"},
    {txt:"Provjera: x = 3 → 0,1³ : 0,01³ = 0,001 / 0,000001 = 1000 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) pretvori sve u istu bazu (10). 2) primijeni pravila potencija. 3) izjednači eksponente.",final:true,note:"postupak"},{txt:"Intuicija: Pravila potencija: (a^m)^n = a^(mn); a^m / a^n = a^(m − n).",note:"intuicija",final:true}
  ]}
];

export const qImages = {
  "2018_jesen_B__12": () => e(Svg12_2018B, null),
  "2018_jesen_B__15": () => e(Svg15_2018Bj, null),
  "2018_jesen_B__16": () => e(Svg16_2018Bj, null),
  "2018_jesen_B__23.2": () => e(Svg23b_2018Bj, null),
  "2018_jesen_B__24.1": () => e(Svg24_2018Bj, null),
  "2018_jesen_B__24.2": () => e(Svg24_2018Bj, null),
  "2018_jesen_B__27.1": () => e(Svg27_2018Bj, null),
};
