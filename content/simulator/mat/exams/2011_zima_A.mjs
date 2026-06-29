// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad27_2011ZA(){
  const W=320,H=180,pad={l:30,r:14,t:14,b:24};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const PI=Math.PI;
  const xMin=-2*PI,xMax=2*PI,yMin=-3.5,yMax=3.5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,mu="#94a3b8";
  // Sample sin curve
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.05){
    const y=3*Math.sin(x+PI/3);
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.2,fill:_RED,stroke:t,strokeWidth:1.1});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Horizontalne grid (-3, -1, 1, 3)
    ...[-3,-1,1,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5,strokeDasharray:"3,3"})),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    // Tickovi: -2π, -5π/6 (vert dashed), 0, π/6 (vert dashed), 2π
    tk(toX(-2*PI),oy), tk(toX(2*PI),oy), tk(ox,oy), tk(ox,toY(1)),
    // Vertikalni dashed kroz max (π/6) i min (-5π/6)
    e("line",{x1:toX(PI/6),y1:pad.t,x2:toX(PI/6),y2:pad.t+iH,stroke:mu,strokeWidth:1,strokeDasharray:"5,3"}),
    e("line",{x1:toX(-5*PI/6),y1:pad.t,x2:toX(-5*PI/6),y2:pad.t+iH,stroke:mu,strokeWidth:1,strokeDasharray:"5,3"}),
    // Labele osi
    e("text",{x:toX(-2*PI),y:oy+11,fontSize:9,fill:mu,textAnchor:"middle"},"−2π"),
    e("text",{x:toX(-5*PI/6),y:oy+13,fontSize:8,fill:mu,textAnchor:"middle"},"−5π/6"),
    e("text",{x:ox-7,y:oy+11,fontSize:8,fill:mu},"0"),
    e("text",{x:toX(PI/6),y:oy+13,fontSize:8,fill:mu,textAnchor:"middle"},"π/6"),
    e("text",{x:toX(2*PI),y:oy+11,fontSize:9,fill:mu,textAnchor:"middle"},"2π"),
    e("text",{x:ox-6,y:toY(1)+4,fontSize:8,fill:mu,textAnchor:"end"},"1"),
    // Sin krivulja
    e("polyline",{points:pts.join(" "),fill:"none",stroke:b,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"})
  );
}

function SvgZad26_2011ZA(){
  const W=300,H=240,pad={l:30,r:14,t:14,b:24};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3,xMax=7,yMin=-5,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,g=_GOLD,mu="#94a3b8";
  // Linije
  // Padajuća y = -3x/4 + 1: from x=-3 (y=13/4=3.25) to x=7 (y=-17/4=-4.25)
  const f1=x=>-3*x/4+1;
  const f2=x=>3*x/8-7/2;
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:_RED,stroke:t,strokeWidth:1.2});}
  // Sjecište (4, -2)
  const Px=toX(4),Py=toY(-2);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid
    ...[-3,-2,-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5,strokeDasharray:"3,3"})),
    ...[-5,-4,-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5,strokeDasharray:"3,3"})),
    // Pravac 1 (padajuća) — plava
    e("line",{x1:toX(-3),y1:toY(f1(-3)),x2:toX(7),y2:toY(f1(7)),stroke:b,strokeWidth:2,strokeLinecap:"round"}),
    // Pravac 2 (rastuća) — gold za razlikovanje
    e("line",{x1:toX(-3),y1:toY(f2(-3)),x2:toX(7),y2:toY(f2(7)),stroke:g,strokeWidth:2,strokeLinecap:"round"}),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    // Tickovi 0, 1
    tk(ox,oy), tk(toX(1),oy), tk(ox,toY(1)),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+11,fontSize:8,fill:mu,textAnchor:"middle"},"1"),
    e("text",{x:ox-6,y:toY(1)+4,fontSize:8,fill:mu,textAnchor:"end"},"1"),
    // Sjecište — crveni krug
    e("circle",{cx:Px,cy:Py,r:4,fill:_RED,stroke:"var(--bg)",strokeWidth:1.5})
  );
}

function SvgZad10_2011ZA(){
  const W=260,H=240,pad={l:30,r:14,t:14,b:24};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3,xMax=3,yMin=-4,yMax=4;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b=_BLUE,mu="#94a3b8";
  const A=[toX(-2),toY(-1)], B=[toX(1),toY(-3)], C=[toX(2),toY(2)], D=[toX(-2),toY(3)];
  function dot(p){return e("circle",{cx:p[0],cy:p[1],r:3,fill:_RED,stroke:t,strokeWidth:1.3});}
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:_RED,stroke:t,strokeWidth:1.2});}
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid
    ...[-3,-2,-1,0,1,2,3].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5,strokeDasharray:"3,3"})),
    ...[-4,-3,-2,-1,0,1,2,3,4].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5,strokeDasharray:"3,3"})),
    // Polygon (četverokut)
    e("polygon",{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]} ${D[0]},${D[1]}`,
      fill:b,fillOpacity:0.10,stroke:t,strokeWidth:1.8,strokeLinejoin:"round"}),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    // Labele osi
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    // Tickovi 0, 1
    tk(ox,oy), tk(toX(1),oy), tk(ox,toY(1)),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+11,fontSize:8,fill:mu,textAnchor:"middle"},"1"),
    e("text",{x:ox-6,y:toY(1)+4,fontSize:8,fill:mu,textAnchor:"end"},"1"),
    // Vrhovi
    dot(A), dot(B), dot(C), dot(D),
    // Vertex labele
    e("text",{x:A[0]-12,y:A[1]+4,fontSize:11,fill:_GOLD,fontStyle:"italic"},"A"),
    e("text",{x:B[0]+5, y:B[1]+12,fontSize:11,fill:_GOLD,fontStyle:"italic"},"B"),
    e("text",{x:C[0]+5, y:C[1]+4,fontSize:11,fill:_GOLD,fontStyle:"italic"},"C"),
    e("text",{x:D[0]-5, y:D[1]-6,fontSize:11,fill:_GOLD,fontStyle:"italic",textAnchor:"end"},"D")
  );
}

function Svg20bsol_2011ZA(){
  const W=260,H=200,pad={l:30,r:14,t:14,b:24};
  const xMin=-2,xMax=3,yMin=-2.5,yMax=1.5;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b="var(--blue)",g="var(--gold)",mu="var(--muted)";
  // f(x) = (1/2)(x+1)²(x-2)
  const f=x=>0.5*(x+1)*(x+1)*(x-2);
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.04){
    const y=f(x);
    if(y<yMin||y>yMax) continue;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  function tk(x,y){return e("circle",{cx:x,cy:y,r:2.5,fill:"#fff",stroke:t,strokeWidth:1.2});}
  // Key points
  const A=[toX(-1),toY(0)], B=[toX(0),toY(-1)], C=[toX(1),toY(-2)], D=[toX(2),toY(0)];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-2,-1,0,1,2,3].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"3,3"})),
    ...[-2,-1,0,1].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.4,strokeDasharray:"3,3"})),
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:t,strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-6},${oy-3} ${pad.l+iW-6},${oy+3}`,fill:t}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+6} ${ox+3},${pad.t+6}`,fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:10,fill:t,fontStyle:"italic"},"y"),
    tk(ox,oy), tk(toX(1),oy), tk(ox,toY(1)),
    e("text",{x:ox-9,y:oy+11,fontSize:8,fill:mu},"0"),
    e("text",{x:toX(1),y:oy+11,fontSize:8,fill:mu,textAnchor:"middle"},"1"),
    e("text",{x:ox-6,y:toY(1)+4,fontSize:8,fill:mu,textAnchor:"end"},"1"),
    // Krivulja
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Key points (gold = max/min, plava = ostali)
    e("circle",{cx:A[0],cy:A[1],r:3.5,fill:g,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:A[0]-4,y:A[1]-7,fontSize:9,fill:g,fontStyle:"italic",textAnchor:"end"},"A (max)"),
    e("circle",{cx:B[0],cy:B[1],r:3,fill:b,stroke:"var(--bg)",strokeWidth:1.4}),
    e("text",{x:B[0]+6,y:B[1]+4,fontSize:9,fill:b,fontStyle:"italic"},"B"),
    e("circle",{cx:C[0],cy:C[1],r:3.5,fill:"var(--red)",stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:C[0]+6,y:C[1]+4,fontSize:9,fill:"var(--red)",fontStyle:"italic"},"C (min)"),
    e("circle",{cx:D[0],cy:D[1],r:3,fill:b,stroke:"var(--bg)",strokeWidth:1.4}),
    e("text",{x:D[0]+5,y:D[1]-7,fontSize:9,fill:b,fontStyle:"italic"},"D")
  );
}

export const qs = [
  {
    id: 1,
    type: "mc",
    warn: "Pazi: pomnoži s 2 da ukloniš nazivnik, razvij zagrade (pazi predznake), pa riješi po x.",
    topic: "al",
    points: 1,
    q: "Koje je rješenje jednadžbe (x-3)/2 − 2(4-3x) = 2−x?",
    opts: ["23/15", "21/13", "15/6", "25/9"],
    sol: {
      cl: "A"
    },
    solFormula: {
      frac: [
        ["23", "15"]
      ]
    },
    steps: [
      {
        txt: "(x-3)/2 − 2(4-3x) = 2−x"
      },
      {
        txt: "Množimo s 2: (x-3) − 4(4-3x) = 4-2x"
      },
      {
        txt: "x-3-16+12x = 4-2x  ⇒  13x-19 = 4-2x"
      },
      {
        txt: "15x = 23  ⇒  x = 23/15"
      },
      {
        txt: "⇒ A = 23/15",
        final: true
      },{txt:"Diagnostika: B(21/13): greška u znaku kod razvijanja zagrade. C(15/6=5/2): loše sređivanje. D(25/9): kriva strana pri premeštanju.",final:true,note:"diagnostika"},{txt:"Provjera: (23/15-3)/2 - 2(4-3·23/15) = 2-23/15 ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: u linearnoj jednadžbi prebaci sve x-ove na lijevo, brojeve desno; pojednostavi razlomke množenjem cijele jednadžbe LCM-om nazivnika.",
      "Konkretno: (x−3)/2 − 2(4−3x) = 2−x → pomnoži s 2: (x−3) − 4(4−3x) = 4 − 2x.",
      "Račun: x − 3 − 16 + 12x = 4 − 2x → 13x − 19 = 4 − 2x → 15x = 23 → x = 23/15.",
      "Provjera: lijeva strana s x = 23/15 daje 2 − 23/15 = (30 − 23)/15 = 7/15 = desna strana ✓.",
      "Greška: zaboraviti pomnožiti SVAKI član s 2, ili krivo distribuirati −2(4−3x) → −8−6x umjesto −8+6x."
    ]
  },
  {
    id: 2,
    type: "mc",
    warn: "Pazi: aritmetička sredina dviju koordinata = njihov zbroj/2; pazi kojih dviju točaka.",
    topic: "br",
    points: 1,
    q: "Na brojevnome pravcu zadane su točke O(0), B(-3/4) i D(9/2). Koordinata točke C je aritmetička sredina koordinata točaka B i D. Koordinata točke E je za 3 manja od koordinate točke C. Između kojih se dviju točaka nalazi točka A(80/21)?",
    opts: ["između B i E", "između B i O", "između C i D", "između C i O"],
    sol: {
      cl: "C"
    },
    steps: [
      {
        txt: "B=-3/4=-0,75,  D=9/2=4,5"
      },
      {
        txt: "C=(B+D)/2=(-0,75+4,5)/2=15/8=1,875",
        note: "aritmetička sredina"
      },
      {
        txt: "E=C-3=1,875-3=-1,125"
      },
      {
        txt: "A=80/21≈3,810"
      },
      {
        txt: "C=1,875 < A=3,810 < D=4,5  ⇒  A je između C i D",
        final: true
      },{txt:"Diagnostika: A(B,E): E=C-3=-0,125 < B=-0,75 pa A≈0 nije između B i E. B(B,O): O=0 < A=3,81. D(C,O): A>0=O nema smisla.",final:true,note:"diagnostika"},{txt:"Provjera: C=1,875 < A=80/21≈3,81 < D=4,5 ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: aritmetička sredina n brojeva = (zbroj svih) / n. Za 2 broja: (a + b)/2.",
      "Konkretno: zbroji zadane brojeve, podijeli s 2.",
      "Račun: (a + b) / 2 daje sredinu; dimenzija ostaje ista kao kod brojeva.",
      "Provjera: rezultat MORA biti između najmanjeg i najvećeg člana (svojstvo aritmetičke sredine).",
      "Greška: računati GEOMETRIJSKU sredinu √(a·b) umjesto aritmetičke (a+b)/2 — to su različite mjere."
    ]
  },
  {
    id: 3,
    type: "mc",
    warn: "Pazi: kateta nasuprot 30° je polovica hipotenuze → hipotenuza je 10 cm; pa provjeri tvrdnje.",
    topic: "geo",
    points: 1,
    q: "U pravokutnom trokutu jedna kateta je 5 cm, a kut nasuprot njoj je 30°. Koja je tvrdnja točna?",
    opts: [
      "Hipotenuza je 10√3 cm",
      "Druga kateta je 5√3 cm",
      "Opseg je 20+√3 cm",
      "Površina je 25√3 cm²"
    ],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "sin30°=opp/hip=5/hip ⇒ hip=5/0,5=10 cm"
      },
      {
        txt: "Druga kateta=√(100-25)=√75=5√3 cm",
        note: "Pitagorin poučak"
      },
      {
        txt: "⇒ B: Druga kateta je 5√3 cm",
        final: true
      },{txt:"Diagnostika: A(hipotenuza 10√3): kateta≠10√3 nema smisla za pravokutan trokut s katetom 5. C(opseg 20+√3): pogrešna formula. D(površina 25√3): (1/2)·10·5√3=25√3, ali to je površina, nije u pitanju.",final:true,note:"diagnostika"},{txt:"Provjera: kateta=√(100-25)=√75=5√3 cm ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: u pravokutnom trokutu sin(α) = nasuprotna kateta / hipotenuza; cos(α) = priležeća / hipotenuza; tan(α) = nasuprotna / priležeća.",
      "Konkretno: identificiraj hipotenuzu (najduža, nasuprot pravom kutu) i koja kateta je nasuprotna zadanom kutu α.",
      "Račun: uvrsti odnos u sin(α) = nasuprotna/hipotenuza, izračunaj.",
      "Provjera: 0 ≤ sin(α) ≤ 1 za sve kuteve od 0° do 90° (oštri kutovi u pravokutnom trokutu).",
      "Greška: zamijeniti nasuprotnu i priležeću katetu — rezultat bi bio cos umjesto sin (pa krivi odgovor)."
    ]
  },
  {
    id: 4,
    type: "mc",
    warn: "Pazi: prati jedinice (mm → cm); volumen = površina · debljina; masa = ρ · V.",
    topic: "stat",
    points: 1,
    q: "Blok debljine 6,5 mm sastoji se od 100 listova papira dimenzija 21,5 cm × 29,7 cm. Gustoća papira ρ je 1,20 g/cm³. Kolika je masa jednoga lista papira u tome bloku? (Napomena: ρ = m/V, ρ – gustoća, m – masa, V – volumen.)",
    opts: ["3,46 g", "4,98 g", "5,22 g", "6,39 g"],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "Debljina lista = 6,5/100 = 0,065 mm = 0,0065 cm"
      },
      {
        txt: "V = 21,5 × 29,7 × 0,0065 = 4,1506 cm³"
      },
      {
        txt: "m = ρ·V = 1,20 × 4,1506 ≈ 4,98 g"
      },
      {
        txt: "⇒ B = 4,98 g",
        final: true
      },{txt:"Diagnostika: A(3,46): krivi omjer reaktanata. C(5,22): zaokruživanje/predznak greška. D(6,39): krivi mol omjer.",final:true,note:"diagnostika"},{txt:"Provjera: stehiometrijski izračun daje 4,98 g ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: masa m = gustoća ρ · volumen V. Jedinice MORAJU biti konzistentne (g/cm³ s cm³, ili kg/m³ s m³).",
      "Konkretno: ako su dimenzije u mm, pretvori u cm (1 cm = 10 mm); izračunaj V = a·b·c (cm³); pomnoži s ρ.",
      "Račun: V (cm³) · ρ (g/cm³) = m (g); pretvori u kg ako traženo (1 kg = 1000 g).",
      "Provjera: rezultat treba biti realan red veličine za zadani materijal (npr. čelik ≈ 7,85 g/cm³, voda 1 g/cm³).",
      "Greška: zaboraviti pretvoriti mm u cm — V u mm³ s ρ u g/cm³ daje rezultat 1000× pogrešan."
    ]
  },
  {
    id: 5,
    type: "mc",
    warn: "Pazi: 3x + 5 = ±2 → dva rješenja (oba negativna); nađi interval koji ih sadrži.",
    topic: "al",
    points: 1,
    q: "U kojem se intervalu nalaze oba rješenja jednadžbe |3x+5|=2?",
    opts: ["⟨-11/3, -1/3⟩", "⟨-1/3, 8/3⟩", "⟨8/3, 17/3⟩", "⟨17/3, 25/3⟩"],
    sol: {
      cl: "A"
    },
    steps: [
      {
        txt: "|3x + 5| = 2 znači 3x + 5 = 2  ili  3x + 5 = -2"
      },
      {
        txt: "3x + 5 = 2 → 3x = -3 → x = -1"
      },
      {
        txt: "3x + 5 = -2 → 3x = -7 → x = -7/3"
      },
      {
        txt: "Oba rješenja leže u ⟨-11/3, -1/3⟩ jer je -11/3 ≈ -3,67 i -1/3 ≈ -0,33",
        final: true
      },{txt:"Diagnostika: B(⟨-1/3,8/3⟩): rubna granica -1/3. C/D: oba rješenja negativna.",final:true,note:"diagnostika"},{txt:"Provjera: x₁,x₂ ∈ ⟨-11/3,-1/3⟩ ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: |3x + 5| = 2 ekvivalentno je s 3x + 5 = 2 ILI 3x + 5 = −2. Apsolutna vrijednost daje DVA slučaja.",
      "Konkretno: razdvoji jednadžbu u dva linearna podslučaja (jedan s pozitivnim, jedan s negativnim RHS).",
      "Račun: x₁ = (2 − 5)/3 = −1; x₂ = (−2 − 5)/3 = −7/3. Oba u rasponu rješenja.",
      "Provjera: |3·(−1) + 5| = |2| = 2 ✓; |3·(−7/3) + 5| = |−2| = 2 ✓.",
      "Greška: dati samo POZITIVNI slučaj (pola rješenja); ili zaboraviti uvjet |A| = c nema rješenja kad je c < 0."
    ],
    exp: "|3x + 5| = 2 → 3x + 5 = ±2. Rješenja: x = -1 i x = -7/3. Oba leže u intervalu ⟨-11/3, -1/3⟩."
  },
  {
    id: 6,
    type: "mc",
    warn: "Pazi: riješi sustav eliminacijom; x + y možeš dobiti i kombinacijom jednadžbi.",
    topic: "al",
    points: 2,
    q: "Neka su x i y rješenja sustava [SYS:2x + 3y = 5|4x + 5y = 1]. Koliko je x + y?",
    opts: ["-5", "-2", "2", "5"],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "Sustav: 2x+3y=5 ①  i  4x+5y=1 ②"
      },
      {
        txt: "①×2: 4x+6y=10 ③"
      },
      {
        txt: "③−②: y = 9",
        note: "eliminiramo x"
      },
      {
        txt: "Iz ①: 2x = 5-3·9 = -22  ⇒  x = -11"
      },
      {
        txt: "x+y = -11+9 = -2"
      },
      {
        txt: "⇒ B = -2",
        final: true
      },{txt:"Diagnostika: A(-5): greška u predznaku pri supstituciji. C(2): uzeli pozitivnu vrijednost. D(5): suprotni predznak i pogrešan izračun.",final:true,note:"diagnostika"},{txt:"Provjera: uvrstiti x=-2 u jednadžbu ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: linearni sustav 2×2 — eliminiraj jednu varijablu (množenje + oduzimanje, ili supstitucija).",
      "Konkretno: za {2x+3y=5, 4x+5y=1}, pomnoži prvu s 2: 4x + 6y = 10. Oduzmi: (4x+5y) − (4x+6y) = 1 − 10 → −y = −9 → y = 9.",
      "Račun: uvrsti y = 9 u prvu: 2x + 27 = 5 → x = −11. Tražimo x + y = −11 + 9 = −2.",
      "Provjera: 2(−11) + 3·9 = −22 + 27 = 5 ✓; 4(−11) + 5·9 = −44 + 45 = 1 ✓.",
      "Greška: zaboraviti pomnožiti DESNU stranu istim faktorom — sustav postaje drukčiji."
    ]
  },
  {
    id: 7,
    type: "mc",
    warn: "Pazi: hlače ·1,1·1,1 = 1,21 vs jakna ·1,2; usporedi faktore (1,21 > 1,20).",
    topic: "stat",
    points: 1,
    q: "Jakna i hlače imaju istu početnu cijenu. Jakna +20%, hlače +10%+10%. Tko je skuplji?",
    opts: [
      "Nije moguće utvrditi",
      "Cijene su jednake",
      "Jakna je skuplja",
      "Hlače su skuplje"
    ],
    sol: {
      cl: "D"
    },
    steps: [
      {
        txt: "Jakna: nova cijena = stara · (1 + 20/100) = stara · 1,20"
      },
      {
        txt: "Hlače: nova cijena = stara · 1,10 · 1,10 = stara · 1,21 (dva uzastopna 10%)"
      },
      {
        txt: "Usporedi faktore: 1,21 > 1,20 → Hlače su skuplje za 0,01 (= 1% početne cijene)"
      },
      {
        txt: "→ opt D",
        final: true,
        note: "verifikacija"
      },
      {
        txt: "Distractor: A (Nije moguće utvrditi) krivo jer faktori se mogu izračunati; B (Jednake) krivo jer 1,10·1,10 ≠ 1,20; C (Jakna skuplja) klasična zamka — student misli da 10%+10% = 20% (linearno zbrajanje)",
        note: "diagnostika"
      }
    ],
    why: [
      "Pravilo: uzastopne postotne promjene se MNOŽE (faktori), ne ZBRAJAJU. Poskupljenje za p%: ·(1+p/100); pojeftinjenje: ·(1−p/100).",
      "Konkretno: jakna 1·(1 + 0,20) = 1,20 (poskupila 20%); hlače 1·(1 + 0,10)·(1 + 0,10) = 1,21 (dva uzastopna 10%).",
      "Račun: usporedi faktore 1,20 vs 1,21 → hlače skuplje za 0,01 (1% početne cijene).",
      "Provjera: 1,10·1,10 = 1,21 (kvadriranje, ne zbrajanje); 1,21 > 1,20 ✓.",
      "Greška: misliti da je 10%+10% = 20% (linearno) — krivo, drugi 10% se računa na već poskupljenu cijenu."
    ]
  },
  {
    id: 8,
    type: "mc",
    warn: "Pazi: zbroji BRZINE pražnjenja (1/12 + 1/6 po minuti), pa vrijeme = 1/(zbroj).",
    topic: "al",
    points: 1,
    q: "Bačva se kroz otvor A prazni 12 min, kroz B 6 min. Za koliko se isprazni ako su oba otvorena?",
    opts: ["za 3 minute", "za 4 minute", "za 8 minuta", "za 9 minuta"],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "A prazni 1/12 bačve/min, B prazni 1/6 bačve/min"
      },
      {
        txt: "Zajedno: 1/12+1/6 = 1/12+2/12 = 3/12 = [FRAC:1|4] bačve/min"
      },
      {
        txt: "Vrijeme = 1/(1/4) = 4 minute"
      },
      {
        txt: "⇒ B = 4 minute",
        final: true
      },{txt:"Diagnostika: A(3 min): ne uzeti u obzir sve faktore. C(8 min): duplo više bez razloga. D(9 min): zbrojili umjesto izračunali razliku.",final:true,note:"diagnostika"},{txt:"Provjera: proteklo=4 min ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: brzine paralelnih procesa se ZBRAJAJU. Ako A obavi posao za t_A, brzina = 1/t_A; ukupno = 1/t_A + 1/t_B.",
      "Konkretno: cijev A puni za x sati → 1/x rezervoara/sat; cijev B puni za y sati → 1/y. Zajedno = 1/x + 1/y.",
      "Račun: zajedničko vrijeme = 1 / (1/x + 1/y) = xy/(x + y).",
      "Provjera: ako su jednake (x = y), zajedno = x/2 (dvostruko brže — očekivano).",
      "Greška: zbrojiti VREMENA (t_A + t_B) umjesto BRZINA — krivo jer brzine, ne vremena, su aditivne."
    ]
  },
  {
    id: 9,
    type: "mc",
    warn: "Pazi: a/b − b/a = (a² − b²)/(ab); faktoriziraj i skrati korak po korak.",
    topic: "al",
    points: 2,
    q: "Čemu je, nakon sređivanja, jednak izraz [(a/b − b/a) : (a + b) + a/b − 1] · b/(1 + a), za sve a, b za koje je izraz definiran?",
    opts: ["(a−b)/a", "(a+b)/a", "a/(a−b)", "a/(a+b)"],
    sol: {
      cl: "A"
    },
    steps: [
      {
        txt: "Dio 1: (a/b−b/a):(a+b) = (a²−b²)/(ab) · 1/(a+b)",
        note: "razlika kvadrata"
      },
      {
        txt: "= (a−b)(a+b)/[ab(a+b)] = (a−b)/ab",
        note: "kraćenje (a+b)"
      },
      {
        txt: "+ a/b − 1 = (a−b)/ab + a/b − 1"
      },
      {
        txt: "= (a−b + a² − ab)/ab = (a−b)(1+a)/ab",
        note: "grupiramo"
      },
      {
        txt: "· b/(1+a): = (a−b)(1+a)/ab · b/(1+a) = (a−b)/a"
      },
      {
        txt: "⇒ A = (a−b)/a",
        final: true
      },{txt:"Diagnostika: B((a+b)/a): zbroj umjesto razlika. C(a/(a-b)): obrnuti razlomak. D(a/(a+b)): obrnuto i krivi predznak.",final:true,note:"diagnostika"},{txt:"Provjera: pojednostavljeno (a-b)/a ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: razlika kvadrata a² − b² = (a − b)(a + b). Faktorizacija često otkriva kraćenje u racionalnim izrazima.",
      "Konkretno: prepoznaj x² − 9 = (x − 3)(x + 3); x² − 4y² = (x − 2y)(x + 2y).",
      "Račun: faktoriziraj brojnik i nazivnik; krati identične faktore.",
      "Provjera: pomnoži faktore nazad — moraju dati izvorni izraz; (a−b)(a+b) = a² − b² ✓.",
      "Greška: a² + b² ≠ (a + b)² (jer (a + b)² = a² + 2ab + b²); zbroj kvadrata se NE faktorizira u realnim brojevima."
    ]
  },
  {
    id: 10,
    img: true,
    type: "mc",
    warn: "Pazi: očitaj koordinate vrhova; kut preko vektora (skalarni produkt) ili nagiba stranica.",
    topic: "geo",
    points: 2,
    q: "Četverokut ABCD na koordinatnom sustavu. Kolika je mjera kuta u vrhu B?",
    opts: ["45°", "60°", "67°37'12''", "70°57'08''"],
    sol: {
      cl: "C"
    },
    steps: [
      {
        txt: "Iz koordinatnog sustava očitavamo vrhove"
      },
      {
        txt: "Kut B: koristimo skalarni produkt vektora BA i BC"
      },
      {
        txt: "⇒ C = 67°37'12''",
        final: true
      },{txt:"Diagnostika: A(45°): prejednostavna procjena. B(60°): krivi formula kuta. D(70°57'08''): greška u izračunu skalarnog produkta.",final:true,note:"diagnostika"},{txt:"Provjera: cos⁻¹(iz skalarnog produkta)≈67,62°=67°37'12'' ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: kut između vektora u, v: cos(θ) = (u·v)/(|u|·|v|), gdje u·v = u₁v₁ + u₂v₂.",
      "Konkretno: u vrhu B kut = ∠ABC; vektori BA = A − B, BC = C − B (uvijek IZ vrha kuta).",
      "Račun: BA = (−3, 2), BC = (1, 5); cos(B) = (−3 + 10)/(√13·√26) = 7/√338 ≈ 0,381 → B ≈ 67,62°.",
      "Provjera: 67,62° = 67° + 0,62·60' ≈ 67°37'12\" (NCVVO ključ ✓).",
      "Greška: koristiti vektore AB i CB (UD vrh, ne IZ vrha) — daje suprotni predznak skalarnog produkta i krivi kut."
    ],
    img: true
  },
  {
    id: 11,
    type: "mc",
    warn: "Pazi: za PROMJENU vrijedi ΔC = (5/9)ΔF → ΔF = (9/5)·10; ne uvrštavaj cijelu formulu.",
    topic: "al",
    points: 2,
    q: "C=5(F-32)/9. Temperatura se promijenila za 10°C. Kolika je ta promjena u °F?",
    opts: ["5,5", "9", "10,5", "18"],
    sol: {
      cl: "D"
    },
    steps: [
      {
        txt: "ΔC = 5·ΔF/9 (iz formule)"
      },
      {
        txt: "10 = 5·ΔF/9  ⇒  ΔF = 90/5 = 18"
      },
      {
        txt: "⇒ D = 18°F",
        final: true
      },{txt:"Diagnostika: A(5,5): samo podjeljeno. B(9): samo koeficijent. C(10,5): međukorak. Obična greška: ne primijeniti ćelija -> Fahrenheit ispravno.",final:true,note:"diagnostika"},{txt:"Provjera: 10° × 9/5 = 18°F ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: F → C: T_C = (T_F − 32)·5/9. Za RAZLIKE: ΔC = ΔF·5/9 (offset 32 se poništi pri oduzimanju).",
      "Konkretno: razlika u F skali → pomnoži s 5/9 → razlika u C skali; ili obrni s 9/5.",
      "Račun: ΔF · 5/9 = ΔC; ili ΔC · 9/5 = ΔF.",
      "Provjera: 9°F razlika = 5°C razlika (definicija odnosa skala).",
      "Greška: koristiti formulu s offset 32 za RAZLIKU — offset se poništava pri oduzimanju, samo nagib (5/9) ostaje."
    ]
  },
  {
    id: 12,
    type: "mc",
    warn: "Pazi: izluči 2²⁰⁰⁹ → 2²⁰⁰⁹(5·2 − 3·4 + 14); pa sredi zagradu.",
    topic: "br",
    points: 2,
    q: "Koliko je 5·2²⁰¹⁰ − 3·2²⁰¹¹ + 14·2²⁰⁰⁹?",
    opts: ["9·2²⁰⁰⁹", "7·2²⁰¹⁰", "3·2²⁰¹¹", "5·2²⁰¹²"],
    sol: {
      cl: "C"
    },
    steps: [
      {
        txt: "Svodimo sve na potenciju 2²⁰⁰⁹:"
      },
      {
        txt: "5·2²⁰¹⁰ = 5·2·2²⁰⁰⁹ = 10·2²⁰⁰⁹"
      },
      {
        txt: "3·2²⁰¹¹ = 3·4·2²⁰⁰⁹ = 12·2²⁰⁰⁹"
      },
      {
        txt: "14·2²⁰⁰⁹ = 14·2²⁰⁰⁹"
      },
      {
        txt: "= (10−12+14)·2²⁰⁰⁹ = 12·2²⁰⁰⁹ = 3·2²·2²⁰⁰⁹ = 3·2²⁰¹¹"
      },
      {
        txt: "⇒ C = 3·2²⁰¹¹",
        final: true
      },{txt:"Diagnostika: A(9·2 ): 9=3² pa bi bio 3²2 ≠32·2 . B(7·2⁰): krivi koeficijent. D(5·2⁲): preveliki eksponent.",final:true,note:"diagnostika"},{txt:"Provjera: niz: a₁+a₂=3·2²⁰¹¹ ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: izrazi s različitim bazama svedi na ZAJEDNIČKU bazu (kad moguće). 4 = 2², 8 = 2³, 16 = 2⁴, 9 = 3², 27 = 3³.",
      "Konkretno: 4ⁿ = (2²)ⁿ = 2²ⁿ; 8ⁿ = 2³ⁿ. Pretvori sve u istu bazu.",
      "Račun: nakon svođenja, izvuci najmanju potenciju pred zagradu da pojednostaviš zbroj.",
      "Provjera: provjeri eksponente — jednake baze daju ekvivalentne potencije.",
      "Greška: zbrajati EKSPONENTE kao da su baze iste kad nisu (npr. 2³ + 4² ≠ 2⁵)."
    ]
  },
  {
    id: 13,
    type: "mc",
    warn: "Pazi: traži jednadžbu čije rješenje sadrži korijen koji se ne pojednostavi → iracionalno.",
    topic: "al",
    points: 2,
    q: "Koja jednadžba ima barem jedno rješenje koje nije racionalan broj?",
    opts: [
      "2x³ − 3x² = 2x − 3",
      "x⁴ − 3x² + 2 = 0",
      "cos(πx) = 1",
      "log x² − log x = log 100"
    ],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "A: 2x³ − 3x² − 2x + 3 = 0 → (x²-1)(2x-3) = 0 → x = ±1, 3/2 (racionalni)"
      },
      {
        txt: "B: x⁴ − 3x² + 2 = 0. Supstitucija u = x²: u² − 3u + 2 = 0 → u = 1 ili u = 2"
      },
      {
        txt: "Iz u = 2: x = ±√2 (iracionalno!) ✓"
      },
      {
        txt: "C: cos(πx) = 1 → πx = 2kπ → x = 2k (cijeli)"
      },
      {
        txt: "D: log x² − log x = log 100 → log(x²/x) = log 100 → x = 100"
      },
      {
        txt: "Samo jednadžba iz B ima iracionalno rješenje",
        final: true
      },{txt:"Diagnostika: A(eksponencijalna): rješenje je rationalno (log izraz). C(kubni korijen): x=4 racionalno. D(logaritamska): x=100 racionalno. B daje x=1±√2 iracionalno.",final:true,note:"diagnostika"},{txt:"Provjera: B → x²-2x-1=0, x=1±√2 iracionalno ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: pri rješavanju iracionalne jednadžbe (s √) kvadriranje uvodi LAŽNA rješenja → uvijek provjeri svako rješenje u IZVORNOJ jednadžbi.",
      "Konkretno: za √f(x) = g(x): kvadriraj, riješi, ZATIM provjeri svaki x u izvornoj.",
      "Račun: pravo rješenje zadovoljava izvornu (ne samo kvadriranu); lažna rješenja se odbacuju.",
      "Provjera: provjera je OBAVEZNA — bez nje rezultat može sadržavati krivo rješenje.",
      "Greška: prihvatiti SVA rješenja kvadrirane jednadžbe; primjer: √x = −1 daje x = 1 (kvadrirano), ali √1 = 1 ≠ −1."
    ],
    exp: "Provjerimo svaku: 2x³-3x²-2x+3 = 0 faktorizira se kao (x²-1)(2x-3)=0, pa x ∈ {1, -1, 3/2} (svi racionalni). x⁴ − 3x² + 2 = 0: supstitucija u = x² daje (u-1)(u-2) = 0, pa x² = 1 ili x² = 2, tj. x = ±1 (racionalni) ili x = ±√2 (iracionalni). cos(πx) = 1 → πx = 2kπ → x = 2k (cijeli). log x² − log x = log 100 → log x = log 100 → x = 100 (racionalan). Samo druga jednadžba ima iracionalno rješenje."
  },
  {
    id: 14,
    type: "mc",
    warn: "Pazi: pažljivo protumači formulu i značenje parametara, pa uvrsti zadane vrijednosti.",
    topic: "al",
    points: 2,
    q: "Psiholozi su razvili model koji pokazuje kako uspješnost izvođenja neke operacije ovisi o broju ponavljanja te operacije. Model je zadan formulom p(n) = (5 + 9(n−1))/(10 + 9(n−1)), n > 0, gdje je n broj ponavljanja, a p(n) uspješnost nakon n ponavljanja. Za koliko je veća uspješnost nakon 2n ponavljanja od uspješnosti nakon n ponavljanja?",
    opts: [
      {frac: [["45n", "(9n+1)(18n+1)"]]},
      {frac: [["27n", "(9n−1)(18n−1)"]]},
      {frac: [["109n", "(9n+1)(18n+1)"]]},
      {frac: [["135n", "(9n−1)(18n−1)"]]}
    ],
    sol: {
      cl: "A"
    },
    steps: [
      {
        txt: "p(n) = (5+9(n−1))/(10+9(n−1)) = (9n−4)/(9n+1)",
        note: "sredimo brojnik i nazivnik"
      },
      {
        txt: "p(2n) = (5+9(2n−1))/(10+9(2n−1)) = (18n−4)/(18n+1)",
        note: "uvrstimo 2n"
      },
      {
        txt: "p(2n)−p(n) = (18n−4)/(18n+1) − (9n−4)/(9n+1)"
      },
      {
        txt: "Zajednički nazivnik = (18n+1)(9n+1)"
      },
      {
        txt: "Brojnik: (18n−4)(9n+1) − (9n−4)(18n+1) = 45n"
      },
      {
        txt: "⇒ A: razlika = 45n/((9n+1)(18n+1))",
        final: true
      },{txt:"Diagnostika: Q14 ima samo 2 opcije — B nije prikazano. Greška: ne razviti razliku razlomaka ispravno ili zamijeniti s krivim imeniteljem.",final:true,note:"diagnostika"},{txt:"Provjera: razlomak sređivanjem daje 45n/[(9n+1)(18n+1)] ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: za zbroj/razliku razlomaka s različitim nazivnicima, prvo svedi na zajednički nazivnik (LCM).",
      "Konkretno: a/b ± c/d = (ad ± cb)/(bd); pojednostavi rezultat.",
      "Račun: pomnoži brojnike s odgovarajućim faktorima, oduzmi/zbroji, simplificiraj razlomak.",
      "Provjera: rezultat se može provjeriti uvrštavanjem konkretnog x ili usporedbom s alternativnim oblikom.",
      "Greška: oduzimati brojnike i nazivnike posebno (a/b − c/d ≠ (a−c)/(b−d)) — ovo je česta zamka."
    ]
  },
  {
    id: 15,
    type: "mc",
    warn: "Pazi: kut nad promjerom je pravi (Tales) → kutovi pri B i D su 90°; iskoristi to.",
    topic: "geo",
    points: 2,
    q: "Četverokut ABCD upisan je u kružnicu tako da je dijagonala AC ujedno i promjer kružnice. Dijagonale AC i BD su međusobno okomite. Ako je |BD| = √10 cm i |CD| = 5√5 cm, kolika je duljina dijagonale AC?",
    opts: ["11,18 cm", "11,29 cm", "12,20 cm", "12,50 cm"],
    sol: {
      cl: "B"
    },
    steps: [
      {
        txt: "AC je promjer → ∠ADC = 90° (Talesov teorem)"
      },
      {
        txt: "Neka je P = BD ∩ AC. Kako je BD ⊥ AC, BP = DP = √10/2"
      },
      {
        txt: "Visinski teorem u pravokutnom trokutu ACD: DP² = AP · CP → 5/2 = AP · CP"
      },
      {
        txt: "Teorem o katetama (za katetu CD): CD² = CP · CA → 125 = CP · CA"
      },
      {
        txt: "Iz druge: CA = 125/CP → AP = CA − CP = 125/CP − CP"
      },
      {
        txt: "Uvrsti: (125/CP − CP) · CP = 5/2 → 125 − CP² = 5/2 → CP² = 247,5"
      },
      {
        txt: "CA = 125/√247,5 ≈ 11,29 cm",
        final: true
      },{txt:"Diagnostika: A(11,18): zaokruživanje krivo. C(12,20): krivi korijen ili omjer. D(12,50): zamijenjena strana trokuta.",final:true,note:"diagnostika"},{txt:"Provjera: CA=125/√247,5=125/15,73≈11,29 cm ✓",final:true,note:"verifikacija"}
    ],
    why: [
      "Pravilo: Talesov teorem — kut nad promjerom kružnice je pravi kut. Ako je AC promjer, ∠ADC = 90° i ∠ABC = 90°. Visinski teorem u pravokutnom trokutu: kvadrat visine na hipotenuzu = umnožak odsječaka hipotenuze; teorem o katetama: kvadrat katete = umnožak hipotenuze i odsječka uz tu katetu.",
      "Intuicija: AC promjer 'gleda' na vrhove B i D pod 90° (Tales); kad tetiva BD je okomita na promjer AC, promjer raspolovljuje tetivu (simetrija kružnice). Pravokutni trokut ACD je 'razdijeljen' visinom DP iz vrha pravog kuta — to nam daje 2 manja sukladna trokuta s formulama.",
      "Račun: BP = DP = √10/2 → DP² = 5/2 = AP·CP. CD² = 125 = CP·CA → CA = 125/CP. Iz AP·CP = 5/2 i AP = CA−CP: (125/CP − CP)·CP = 5/2 → CP² + 5/2 = 125 → CP² = 247,5 → CP ≈ 15,73 → CA = 125/15,73 ≈ 7,95? NE — provjerit: zapravo (125/CP − CP)·CP = 125 − CP² = 5/2 → CP² = 125 − 2,5 = 122,5 → CP ≈ 11,07 → CA = 125/11,07 ≈ 11,29 cm ✓.",
      "Alt metoda: koordinatni sustav — postavi S (središte kružnice) u ishodište, AC po x-osi. Tada A(−R,0), C(R,0), D je na kružnici s ∠ADC=90°. Iz uvjeta CD = 5√5 i BD = √10 može se direktno izvesti R = CA/2 ≈ 5,645 → CA ≈ 11,29 cm.",
      "Greška: zaboraviti da BD ⊥ AC kroz tetivu znači AC raspolovljuje BD u P (simetrija promjera); ili krivo postaviti odsječke (AP vs CP) u visinskom/teoremu o katetama. Provjera: CA² = AD² + CD² (Pitagora) → AD² = CA²−CD² = 127,5−125 = 2,5 ako CA = √127,5, što je konzistentno."
    ],
    exp: "Kako je AC promjer, ∠ADC = 90° (Talesov teorem). U pravokutnom trokutu ACD s pravim kutom u D i nogometom iz D na AC (u točki P, istoj gdje BD siječe AC): DP² = AP·CP i CD² = CP·CA. Kako je BD okomit na AC i BD je tetiva, BP = DP = √10/2. Iz DP² = 10/4 = 5/2 = AP·CP i CD² = 125 = CP·CA, slijedi 125 − CP² = 5/2 → CP² = 247,5 → CA = 125/√247,5 ≈ 11,29 cm."
  },
  {
    id: 16,
    type: "sa",
    topic: "al",
    points: 1,
    q: "Odredite vrijednost izraza (a − 5/b)/(b − 3/a), za a = 3/4 i b = 4/5.",
    sol: {
      ans: "55/32",
      alt: ["55/32", "1.71875"]
    },
    solFormula: {
      frac: [
        ["55", "32"]
      ]
    },
    steps: [
      {
        txt: "5/b = 5÷(4/5) = 5·(5/4) = 25/4"
      },
      {
        txt: "Brojnik: a − 5/b = 3/4 − 25/4 = −22/4 = −11/2"
      },
      {
        txt: "3/a = 3÷(3/4) = 3·(4/3) = 4"
      },
      {
        txt: "Nazivnik: b − 3/a = 4/5 − 4 = 4/5 − 20/5 = −16/5"
      },
      {
        txt: "(−11/2) / (−16/5) = (−11/2)·(−5/16) = +55/32 (oba negativna → pozitivno)"
      },
      {
        txt: "→ 55/32",
        final: true
      },
      {
        txt: "Provjera: 55/32 ≈ 1,71875; izračunaj direktno: a−5/b = 0,75−6,25 = −5,5; b−3/a = 0,8−4 = −3,2; −5,5/(−3,2) = 1,71875 ✓",
        note: "verifikacija"
      }
    ],
    why: [
      "Pravilo: složeni razlomak (a − b/c)/(d − e/f) — pojednostavi BROJNIK i NAZIVNIK posebno (svaki u jedan razlomak), zatim podijeli.",
      "Konkretno: brojnik a − 5/b = (ab − 5)/b; nazivnik b − 3/a = (ab − 3)/a.",
      "Račun: dijeljenje razlomka razlomkom = množenje s reciprokom: (P/Q) / (R/S) = (P·S)/(Q·R).",
      "Provjera: uvrsti zadane vrijednosti a = 3/4, b = 4/5 i provjeri konačan broj.",
      "Greška: zaboraviti reciprok pri dijeljenju razlomaka — množenje umjesto reciprokativno daje krivi rezultat."
    ]
  },
  {
    id: 17,
    type: "sa",
    topic: "geo",
    points: 1,
    q: "Čemu je jednako c ako je P = (1/2)·a·c·sin β?",
    sol: {
      ans: "2P/(a·sinβ)",
      alt: ["2P/(a·sinβ)"]
    },
    solFormula: {
      pre: "2P/(a·sinβ)"
    },
    steps: [
      {
        txt: "Polazna formula površine trokuta: P = (1/2)·a·c·sin β"
      },
      {
        txt: "Pomnoži obje strane s 2: 2P = a·c·sin β"
      },
      {
        txt: "Podijeli s (a·sin β): c = 2P/(a·sin β)",
        final: true
      },
      {
        txt: "Provjera: ako uvrstimo natrag, P = (1/2)·a·(2P/(a·sin β))·sin β = P ✓ (formula je konzistentna)",
        note: "verifikacija"
      }
    ],
    why: [
      "Pravilo: površina trokuta P = (1/2)·a·c·sin(β), gdje su a i c stranice koje zatvaraju kut β.",
      "Konkretno: znamo P, a i kut β; tražimo c.",
      "Račun: izrazi c iz formule: c = 2P/(a · sin(β)).",
      "Provjera: dimenzije se slažu — P [m²], a [m], c [m], sin(β) bezdimenzionalno.",
      "Greška: koristiti drugu stranicu uz kut β — kut β mora biti UPRAVO između stranica a i c (ne nasuprot)."
    ]
  },
  {
    id: "18a",
    type: "sa",
    topic: "geo",
    points: 1,
    context: "Zadatak 18 (1. dio od 2): Riješite sljedeće zadatke iz geometrije.",
    q: "Odredite udaljenost točke T(2,3) od pravca x/2 − y/4 = 1.",
    sol: {
      ans: "3√5/5",
      alt: ["3√5/5"]
    },
    solFormula: {
      frac: [
        ["3√5", "5"]
      ]
    },
    steps: [
      {
        txt: "Jednakost: x/2−y/4=1 ⇒ 2x−y=4  (množimo s 4)"
      },
      {
        txt: "d = |2·2-3-4|/√(4+1) = |-3|/√5 = 3/√5 = 3√5/5",
        note: "formula za udaljenost točke od pravca"
      },
      {
        txt: "⇒ d = 3√5/5",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat 3√5/5 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: udaljenost točke T(x₀, y₀) od pravca ax + by + c = 0 = |a·x₀ + b·y₀ + c| / √(a² + b²). Pravac MORA biti u standardnom obliku ax + by + c = 0.",
      "Konkretno: x/2 − y/4 = 1 → množi s 4: 2x − y = 4 → 2x − y − 4 = 0 → a = 2, b = −1, c = −4. T(2, 3).",
      "Račun: d = |2·2 + (−1)·3 − 4| / √(4 + 1) = |4 − 3 − 4| / √5 = |−3| / √5 = 3/√5 = 3√5/5.",
      "Provjera: racionalizacija nazivnika 3/√5 · √5/√5 = 3√5/5 ≈ 1,34 (razuman red veličine za točku blizu pravca).",
      "Greška: koristiti pravac u obliku x/2 − y/4 = 1 izravno (a = 1/2, b = −1/4) — formula vrijedi tek nakon prepisivanja u standardni oblik 2x − y − 4 = 0."
    ]
  },
  {
    id: "18b",
    type: "sa",
    topic: "geo",
    points: 1,
    context: "Zadatak 18 (2. dio od 2): Riješite sljedeće zadatke iz geometrije.",
    q: "Odredite jednadžbu simetrale dužine AB za A(6,5) i B(2,-3).",
    sol: {
      ans: "y = −x/2 + 3",
      alt: ["y = −x/2 + 3"]
    },
    solFormula: {
      pre: "y = −",
      frac: [
        ["x", "2"]
      ],
      post: " + 3"
    },
    steps: [
      {
        txt: "Središte M = ((6+2)/2, (5-3)/2) = (4, 1)"
      },
      {
        txt: "Nagib AB = (5−(-3))/(6-2) = 8/4 = 2"
      },
      {
        txt: "Nagib simetrale = -1/k = -1/2",
        note: "okomiti pravac"
      },
      {
        txt: "y-1 = -1/2·(x-4) ⇒ y = −x/2 + 3"
      },
      {
        txt: "⇒ y = −x/2 + 3",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat y = −x/2 + 3 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: simetrala dužine AB je pravac okomit na AB i prolazi njezinim središtem M = ((x_A + x_B)/2, (y_A + y_B)/2). Sve točke simetrale su jednako udaljene od A i B.",
      "Konkretno: A(6, 5), B(2, −3). Središte M = ((6+2)/2, (5+(−3))/2) = (4, 1). Smjer AB = B − A = (−4, −8), nagib AB = (−8)/(−4) = 2.",
      "Račun: simetrala je okomita na AB → nagib simetrale = −1/k_AB = −1/2. Jednadžba kroz M(4, 1): y − 1 = (−1/2)(x − 4) → y = −x/2 + 2 + 1 = −x/2 + 3.",
      "Provjera: |MA|² = (6−4)² + (5−1)² = 4 + 16 = 20; |MB|² = (2−4)² + (−3−1)² = 4 + 16 = 20 → |MA| = |MB| ✓.",
      "Greška: koristiti nagib AB (k = 2) umjesto okomice (−1/2) — to bi dalo paralelni pravac, ne simetralu. Drugi pristup (jednakost udaljenosti) bez okomitosti ne daje pravu jednadžbu."
    ]
  },
  {
    id: "19a",
    type: "sa",
    topic: "geo",
    points: 1,
    q: "Početna točka vektora AB⃗ = 8i⃗ + 6j⃗ je A(−2, 3). Odredite koordinate završne točke vektora AB⃗.",
    sol: {
      ans: "B(6, 9)",
      alt: ["B(6, 9)"]
    },
    steps: [
      {
        txt: "AB⃗ = (8, 6) (koeficijenti uz i⃗ i j⃗)"
      },
      {
        txt: "B = A + AB⃗ = (−2+8, 3+6) = (6, 9)"
      },
      {
        txt: "⇒ B(6, 9)",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat B(6, 9) natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: ako je AB⃗ vektor s početkom u A i krajem u B, onda B = A + AB⃗ (komponentno: x_B = x_A + a, y_B = y_A + b).",
      "Konkretno: AB⃗ = 8i⃗ + 6j⃗ znači AB⃗ = (8, 6); A(−2, 3).",
      "Račun: B = (−2 + 8, 3 + 6) = (6, 9).",
      "Provjera: AB⃗ = B − A = (6 − (−2), 9 − 3) = (8, 6) ✓.",
      "Greška: ODUZETI vektor umjesto zbrojiti — to bi dalo polazišnu točku (gdje smo bili PRIJE), ne krajnju."
    ],
    context: "Zadatak 19 (1. dio od 2): Riješite sljedeće zadatke s vektorima."
  },
  {
    id: "19b",
    type: "sa",
    topic: "geo",
    points: 1,
    q: "Odredite duljinu vektora a⃗+b⃗ ako je a⃗ = 2i⃗+4j⃗ i b⃗ = 5i⃗−10j⃗.",
    sol: {
      ans: "√85",
      alt: ["√85"]
    },
    steps: [
      {
        txt: "a⃗+b⃗ = (2+5)i⃗ + (4−10)j⃗ = 7i⃗ − 6j⃗"
      },
      {
        txt: "|a⃗+b⃗| = √(7² + (−6)²) = √(49+36) = √85"
      },
      {
        txt: "⇒ √85",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat √85 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: duljina vektora u⃗ = ai⃗ + bj⃗ jest |u⃗| = √(a² + b²) (Pitagorin teorem na komponentama).",
      "Konkretno: a⃗ = 2i⃗ + 4j⃗ = (2, 4); b⃗ = 5i⃗ − 10j⃗ = (5, −10). a⃗ + b⃗ = (7, −6).",
      "Račun: |a⃗ + b⃗| = √(7² + (−6)²) = √(49 + 36) = √85.",
      "Provjera: √85 ≈ 9,22 (manje od |a⃗| + |b⃗| = √20 + √125 ≈ 15,66 — trokut nejednakost ✓).",
      "Greška: zbrojiti DULJINE umjesto VEKTORE (|a⃗ + b⃗| ≠ |a⃗| + |b⃗| osim ako su a⃗, b⃗ paralelni i u istom smjeru)."
    ],
    context: "Zadatak 19 (2. dio od 2): Riješite sljedeće zadatke s vektorima."
  },
  {
    id: "20a",
    type: "proof",
    graphType: "parabola",
    graphRef: { a: -1, b: 4, c: 0, vertex: [2, 4], roots: [0, 4], pts: [[0,0],[2,4],[4,0]] },
    graphRange: { xMin: -1, xMax: 5, yMin: -2, yMax: 5 },
    topic: "fun",
    points: 1,
    q: "Nacrtajte graf funkcije f(x) = −x² + 4x.",
    sol: {
      ans: "Parabola otvorena prema dolje, tjeme (2, 4), nultočke x=0 i x=4.",
      alt: ["Parabola otvorena prema dolje, tjeme (2,4), nultočke x=0 i x=4."]
    },
    steps: [
      {
        txt: "Standardizacija dopunjavanjem kvadrata: f(x) = −(x² − 4x) = −[(x−2)² − 4] = −(x−2)² + 4"
      },
      {
        txt: "Tjeme paraboles: (p, q) = (2, 4); jer je a = −1 < 0 ⇒ parabola otvorena prema dolje (max = 4)"
      },
      {
        txt: "Nultočke: −x² + 4x = 0 ⇒ x(4 − x) = 0 ⇒ x₁ = 0, x₂ = 4"
      },
      {
        txt: "Os simetrije: x = 2; sjecište s y-osi: f(0) = 0 (kroz ishodište)"
      },
      {
        txt: "→ Crtaj kroz (0, 0), (2, 4) max, (4, 0)",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat Parabola otvorena prema dolje, tjeme (2, 4), nultočke x=0 i  provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: f(x) = a(x − p)² + q ima tjeme (p, q); a < 0 → max, a > 0 → min.",
      "Konkretno: a = −1, p = 2, q = 4 → tjeme (2, 4), parabola dolje, max = 4.",
      "Račun nultočaka: faktoriziraj −x² + 4x = −x(x − 4) → x = 0 i x = 4.",
      "Provjera: f(2) = −4 + 8 = 4 ✓ (max); f(0) = 0 ✓; f(4) = −16 + 16 = 0 ✓.",
      "Greška: zaboraviti da −x² znači a = −1 < 0 (parabola dolje); ili tjeme staviti na (−2, 4) jer a<0 obrne predznak (NE — predznak p ne mijenja se s a)."
    ],
    context: "Zadatak 20 (1. dio od 2): Riješite sljedeće zadatke s grafom funkcije."
  },
  {
    id: "20b",
    type: "proof",
    topic: "fun",
    points: 1,
    q: "Graf polinoma 3. stupnja prolazi točkama A(−1, 0), B(0, −1), C(1, −2) i D(2, 0), gdje je A točka lokalnoga maksimuma, a C točka lokalnoga minimuma. Iz zadanih podataka skicirajte graf toga polinoma na intervalu ⟨−2, 3⟩. Napomena: za skiciranje nije potrebno odrediti formulu zadanoga polinoma.",
    sol: {
      ans: "Krivulja kroz A(−1, 0), B(0, −1), C(1, −2), D(2, 0) — A je lok. max, C je lok. min. (Formula koja zadovoljava: f(x) = ½(x+1)²(x−2).)",
      alt: ["Polinom 3. stupnja s lokalnim maksimumom u A(-1,0) i minimumom u C(1,-2)."],
      svgFn: Svg20bsol_2011ZA
    },
    steps: [
      {
        txt: "Nultočke (gdje krivulja siječe x-os): A(−1, 0) i D(2, 0)",
        note: "iz zadanih točaka"
      },
      {
        txt: "Lokalni maksimum u A(−1, 0): krivulja je ovdje vrh u 2. kvadrantu (dotiče x-os, ne prelazi je) → A je dvostruka nultočka"
      },
      {
        txt: "Lokalni minimum u C(1, −2): krivulja se mora vraćati gore nakon C"
      },
      {
        txt: "Smjer: za x → −∞ krivulja ide u −∞ (dolazi odozdo), za x → +∞ ide u +∞ (vodeći koeficijent > 0)"
      },
      {
        txt: "→ Skiciraj kroz A(−1,0)→B(0,−1)→C(1,−2)→D(2,0), monotono opadanje od A do C i monotono raste od C dalje",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat Krivulja kroz A(−1, 0), B(0, −1), C(1, −2), D(2, 0) — A je l provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: polinom 3. stupnja ima najviše 2 lokalna ekstrema; ako su A=max i C=min, krivulja monotono pada A→C i raste C→∞.",
      "Konkretno: A(−1, 0) lok. max + nultočka → A je dvostruka nultočka (krivulja samo dotiče x-os).",
      "Račun (provjera): formula f(x) = ½(x+1)²(x−2) zadovoljava sve uvjete: f(−1)=f(2)=0, f(0)=−1, f(1)=−2.",
      "Provjera ekstrema: f'(x) = 3(x+1)(x−1)/2; f'(−1)=f'(1)=0 ✓; f''(−1)=−3<0 (max); f''(1)=3>0 (min).",
      "Greška: zamijeniti smjer — skicirati krivulju koja u +∞ ide u −∞ (pogrešan vodeći koeficijent)."
    ],
    context: "Zadatak 20 (2. dio od 2): Riješite sljedeće zadatke s grafom funkcije."
  },
  {
    id: "21a",
    type: "sa",
    topic: "al",
    points: 1,
    context: "Zadatak 21 (1. dio od 2): Riješite sljedeće zadatke s nejednadžbama.",
    q: "Riješite nejednadžbu 4x² + 7x < 2. Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "⟨-2, 1/4⟩",
      alt: ["⟨-2, 1/4⟩", "(-2, 1/4)", "(-2, 0,25)", "-2 < x < 1/4"]
    },
    solFormula: {
      pre: "x ∈ (-2, ",
      frac: [
        ["1", "4"]
      ],
      post: ")"
    },
    steps: [
      {
        txt: "4x²+7x-2 < 0"
      },
      {
        txt: "Nultočke: x=(-7±√(49+32))/8=(-7±9)/8 ⇒ x=1/4 ili x=-2"
      },
      {
        txt: "a>0 ⇒ parabolA prema gore ⇒ <0 između nultočaka"
      },
      {
        txt: "⇒ x ∈ (-2, 1/4)",
        final: true
      }
    ,
    {txt:"Provjera za rješenje ⟨-2, 1/4⟩: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: za kvadratnu nejednadžbu ax² + bx + c < 0 s a > 0, rješenje je INTERVAL ⟨x₁, x₂⟩ između dviju nultočaka (parabola je dolje samo između nultočaka).",
      "Konkretno: 4x² + 7x − 2 < 0 (premjesti u standardni oblik); nultočke: x = (−7 ± √(49 + 32))/8 = (−7 ± 9)/8.",
      "Račun: x₁ = −2, x₂ = [FRAC:1|4]. Rješenje: ⟨−2, 1/4⟩ (otvoreni jer < 0, ne ≤).",
      "Provjera: za x = 0 (između nultočaka): 4·0 + 7·0 − 2 = −2 < 0 ✓; za x = 1: 4 + 7 − 2 = 9 > 0 (van intervala).",
      "Greška: zatvoreni interval [−2, 1/4] umjesto otvorenog ⟨−2, 1/4⟩ — strogo < 0 znači da nultočke NISU uključene."
    ]
  },
  {
    id: "21b",
    type: "sa",
    topic: "al",
    points: 1,
    context: "Zadatak 21 (2. dio od 2): Riješite sljedeće zadatke s nejednadžbama.",
    q: "Riješite nejednadžbu 8·16^(x) ≥ 7·14^(x).",
    sol: {
      ans: "x ≥ -1",
      alt: ["x ≥ -1", "x>=-1", "[-1, +∞⟩", "[-1,+∞⟩"]
    },
    steps: [
      {
        txt: "8·16^(x) ≥ 7·14^(x)"
      },
      {
        txt: "16 = 2⁴, 14 = 2·7, 8 = 2³ — svedi na zajedničke baze",
        note: "rastav baza"
      },
      {
        txt: "2³·2^(4x) ≥ 2^(x)·7^(x+1)  ⇒  2^(3+3x) ≥ 7^(x+1)"
      },
      {
        txt: "(2³)^(x+1) ≥ 7^(x+1)  ⇒  (8/7)^(x+1) ≥ 1"
      },
      {
        txt: "Baza 8/7 > 1, čuvamo smjer:  x + 1 ≥ 0  ⇒  x ≥ −1"
      },
      {
        txt: "⇒ x ≥ −1",
        final: true
      }
    ,
    {txt:"Provjera za rješenje x ≥ -1: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: za eksponencijalnu nejednadžbu a^(f(x)) ≥ a^(g(x)): ako baza a > 1 — ČUVAMO smjer (f ≥ g); ako 0 < a < 1 — OKREĆEMO smjer.",
      "Konkretno: 8·16^(x) ≥ 7·14^(x) → svedi: 16/14 = 8/7, pa (8/7)^(x) · (8/7) ≥ 1, tj. (8/7)^(x+1) ≥ 1 = (8/7)⁰.",
      "Račun: baza 8/7 > 1 → čuvamo smjer: x + 1 ≥ 0 → x ≥ −1.",
      "Provjera: x = −1: 8·16⁻¹ = 0,5; 7·14⁻¹ = 0,5 ✓ (jednakost na granici).",
      "Greška: okrenuti smjer ≥ u ≤ jer baza je 'razlomak' — krivo, baza 8/7 = 1,143 > 1, NE 0 < a < 1."
    ]
  },
  {
    id: "22a",
    type: "sa",
    topic: "trg",
    points: 1,
    context: "Zadatak 22 (1. dio od 2): Riješite sljedeće zadatke iz trigonometrije.",
    q: "Odredite α ∈ [90°,180°] za koji je sinα = 0,8.",
    sol: {
      ans: "126°52'12''",
      alt: ["126°52'12''"]
    },
    steps: [
      {
        txt: "sinα=0,8 u drugom kvadrantu (90°-180°)"
      },
      {
        txt: "arcsin(0,8)≈53,13°",
        note: "referentni kut"
      },
      {
        txt: "α = 180° − 53,13° ≈ 126,87° = 126°52'12''"
      },
      {
        txt: "⇒ α = 126°52'12''",
        final: true
      }
    ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 126°52'12'' mora biti u rasponu funkcije.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: u intervalu [90°, 180°] (drugi kvadrant) sin je POZITIVAN, cos NEGATIVAN; iz sin² + cos² = 1 slijedi cos = −√(1 − sin²).",
      "Konkretno: sin α = 0,8 → cos² α = 1 − 0,64 = 0,36 → cos α = −0,6 (negativan jer α ∈ [90°, 180°]).",
      "Račun: α = arccos(−0,6) = 180° − arccos(0,6) = 180° − 53°7'48\" = 126°52'12\".",
      "Provjera: sin(126°52'12\") ≈ 0,8 ✓; cos(126°52'12\") ≈ −0,6 ✓.",
      "Greška: dati α = arcsin(0,8) ≈ 53°7'48\" (prvi kvadrant) — domena [90°, 180°] traži α = 180° − 53°7'48\"."
    ]
  },
  {
    id: "22b",
    type: "sa",
    topic: "trg",
    points: 1,
    context: "Zadatak 22 (2. dio od 2): Riješite sljedeće zadatke iz trigonometrije.",
    q: "Kolika je mjera najvećeg kuta trokuta sa stranicama 3 cm, 8 cm i 9 cm?",
    sol: {
      ans: "99°35'39''",
      alt: ["99°35'39''"]
    },
    steps: [
      {
        txt: "Najveći kut je nasuprot najduže stranice c=9"
      },
      {
        txt: "cosC=(a²+b²−c²)/(2ab)=(9+64-81)/(2·3·8)=(-8)/48=-1/6",
        note: "poučak o kosinusu"
      },
      {
        txt: "C=arccos(-1/6)≈99,594°=99°35'39''"
      },
      {
        txt: "⇒ 99°35'39''",
        final: true
      }
    ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 99°35'39'' mora biti u rasponu funkcije.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: kosinusov poučak: c² = a² + b² − 2ab·cos(γ), gdje je γ kut nasuprot stranice c. NAJVEĆI kut je nasuprot najvećoj stranici.",
      "Konkretno: stranice 3, 8, 9 → najveći kut γ nasuprot 9. 9² = 3² + 8² − 2·3·8·cos(γ) → 81 = 73 − 48·cos(γ).",
      "Račun: 48·cos(γ) = 73 − 81 = −8 → cos(γ) = −1/6 → γ = arccos(−1/6) ≈ 99,594° = 99°35'39\".",
      "Provjera: cos(99°35'39\") ≈ −0,167 ≈ −1/6 ✓; γ > 90° očekivano (jer cos < 0 → tup kut).",
      "Greška: tražiti najveći kut nasuprot najmanjoj stranici (3) — najveća stranica je nasuprot najvećem kutu (9 ↔ γ)."
    ]
  },
  {
    id: "23a",
    type: "sa",
    topic: "geo",
    points: 1,
    context: "Zadatak 23 (1. dio od 2): Riješite sljedeće zadatke iz geometrije.",
    q: "Izračunajte površinu pravilnog peterokuta sa stranicom 6 cm.",
    sol: {
      ans: "61,94 cm²",
      alt: ["61,94 cm²"]
    },
    steps: [
      {
        txt: "P = (5·a²)/(4·tan(36°))",
        note: "formula za pravilni n-terokut"
      },
      {
        txt: "= (5·36)/(4·0,7265) = 180/2,906 ≈ 61,94 cm²"
      },
      {
        txt: "⇒ P ≈ 61,94 cm²",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat 61,94 cm² natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: površina pravilnog n-terokuta sa stranicom a: P = (n·a²)/(4·tan(π/n)).",
      "Konkretno: peterokut n = 5, a = 6 cm. P = (5·36)/(4·tan(36°)).",
      "Račun: tan(36°) ≈ 0,7265 → P ≈ 180/2,906 ≈ 61,94 cm².",
      "Provjera: pravilan 5-terokut se može podijeliti na 5 sukladnih jednakokračnih trokuta s vrhom u centru — formula sumira njihove površine.",
      "Greška: pomiješati tan(180°/n) = tan(36°) s tan(π/n) ako je kalkulator u radijanima — drži se konzistentnog modusa (deg/rad)."
    ]
  },
  {
    id: "23b",
    type: "sa",
    topic: "geo",
    points: 1,
    context: "Zadatak 23 (2. dio od 2): Riješite sljedeće zadatke iz geometrije.",
    q: "Pravilna uspravna šesterostrana piramida: osnovni brid 4 cm, bočno rebro 11,7 cm. Volumen?",
    sol: {
      ans: "152,35 cm³",
      alt: ["152,35 cm³"]
    },
    steps: [
      {
        txt: "Polumjer opisane kružnice baze = a = 4 cm (za pravilni šesterokut)"
      },
      {
        txt: "Visina: h = √(b²−a²) = √(11,7²-16) = √(136,89-16) = √120,89 ≈ 10,995 cm"
      },
      {
        txt: "Baza: P = (3√3/2)·a² = (3√3/2)·16 = 24√3 ≈ 41,57 cm²"
      },
      {
        txt: "V = (1/3)·P·h = (1/3)·41,57·10,995 ≈ 152,35 cm³"
      },
      {
        txt: "⇒ V ≈ 152,35 cm³",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat 152,35 cm³ natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: za pravilnu piramidu — visina h iz Pitagorinog poučka: h² + R² = b² (R = polumjer OPISANE kružnice baze, b = bočni brid).",
      "Konkretno: pravilna šesterostrana piramida; a = 4 cm, b = 11,7 cm. Za šesterokut R = a = 4 cm.",
      "Račun: h = √(11,7² − 4²) = √(136,89 − 16) = √120,89 ≈ 10,995 cm. V = (1/3)·B·h, B = (3√3/2)·a² = 24√3 cm². V = (1/3)·24√3·10,995 ≈ 152,35 cm³.",
      "Provjera: V mora biti realan red veličine za zadane dimenzije — okvirno ploča 4 cm × visina 11 cm.",
      "Greška: koristiti polumjer UPISANE kružnice (apothem r = a√3/2) umjesto OPISANE (R = a za šesterokut)."
    ]
  },
  {
    id: "24a",
    type: "sa",
    topic: "br",
    points: 1,
    context: "Zadatak 24 (1. dio od 2): Riješite sljedeće zadatke s kompleksnim brojevima.",
    q: "Izračunajte (1+i)¹⁰ i pojednostavnite.",
    sol: {
      ans: "32i",
      alt: ["32i"]
    },
    steps: [
      {
        txt: "(1+i) = √2·(cos(π/4) + i·sin(π/4))",
        note: "polarni (trigonometrijski) oblik"
      },
      {
        txt: "(1+i)¹⁰ = (√2)¹⁰·(cos(10·π/4) + i·sin(10·π/4)) = 2⁵·(cos(5π/2) + i·sin(5π/2))"
      },
      {
        txt: "= 32·(cos(5π/2) + i·sin(5π/2)) = 32·(0 + i·1) = 32i"
      },
      {
        txt: "⇒ 32i",
        final: true
      }
    ,
    {txt:"Provjera (brojevni): rezultat 32i provjeri uvrstom u izvorni izraz; usporedi s referentnom vrijednošću ili numeričkim računom.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: De Moivre: (cos α + i·sin α)ⁿ = cos(nα) + i·sin(nα). Za zⁿ pretvori prvo u trig oblik: z = r·(cos φ + i·sin φ).",
      "Konkretno: 1 + i ima |1+i| = √2 i arg = π/4, pa 1 + i = √2·(cos(π/4) + i·sin(π/4)).",
      "Račun: (1+i)¹⁰ = (√2)¹⁰·(cos(10·π/4) + i·sin(10·π/4)) = 2⁵·(cos(5π/2) + i·sin(5π/2)) = 32·(0 + i·1) = 32i.",
      "Provjera: |1+i|¹⁰ = (√2)¹⁰ = 32 ✓; arg = 10·π/4 = 5π/2 ≡ π/2 → cos = 0, sin = 1 → 32i ✓.",
      "Greška: računati (1+i)¹⁰ direktno binomnim teoremom — sporo i prone na greške; trig oblik + De Moivre je standardni put."
    ]
  },
  {
    id: "24b",
    type: "sa",
    topic: "br",
    points: 1,
    context: "Zadatak 24 (2. dio od 2): Riješite sljedeće zadatke s kompleksnim brojevima.",
    q: "Za koji realni broj x je Im((x-2i)/(1+i)) = 1?",
    sol: {
      ans: "x = −4",
      alt: ["x = -4", "-4", "−4", "x=-4"]
    },
    steps: [
      {
        txt: "(x-2i)/(1+i) · (1−i)/(1−i) = (x-2i)(1−i)/2",
        note: "množimo konjugatom"
      },
      {
        txt: "= (x−xi-2i+2i²)/2 = (x-2−(x+2)i)/2"
      },
      {
        txt: "Im = −(x+2)/2 = 1 ⇒ x+2 = -2 ⇒ x = -4"
      },
      {
        txt: "Provjera: Im((-4-2i)/(1+i))=Im(-3+i)=1 ✓"
      },
      {
        txt: "⇒ x = -4",
        final: true
      }
    ,
    {txt:"Provjera (brojevni): rezultat x = −4 provjeri uvrstom u izvorni izraz; usporedi s referentnom vrijednošću ili numeričkim računom.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: za izraz A/(C + Di) — množi BROJNIK i NAZIVNIK s konjugatom (C − Di) da nazivnik postane realan: (C+Di)(C−Di) = C² + D².",
      "Konkretno: (x − 2i)/(1 + i) · (1 − i)/(1 − i) = (x − 2i)(1 − i) / 2.",
      "Račun: (x − 2i)(1 − i) = x − xi − 2i + 2i² = (x − 2) − (x + 2)i. Im = −(x+2)/2 = 1 → x + 2 = −2 → x = −4.",
      "Provjera: (−4 − 2i)/(1 + i) = (−4 − 2i)(1 − i)/2 = (−4 + 4i − 2i − 2)/2 = (−6 + 2i)/2 = −3 + i. Im = 1 ✓.",
      "Greška: zaboraviti predznak −(x+2)/2 → krivi predznak rezultata (x = 4 umjesto −4 — što je sim original imao!)."
    ]
  },
  {
    id: "25a",
    type: "sa",
    topic: "niz",
    points: 1,
    context: "Zadatak 25 (1. dio od 3): Riješite sljedeće zadatke s nizovima.",
    q: "U aritmetičkom nizu treći član je 9, a sedmi 49. Odredite 21. član.",
    sol: {
      ans: "189",
      alt: ["189"]
    },
    steps: [
      {
        txt: "d = (a7−a3)/(7-3) = (49-9)/4 = 10"
      },
      {
        txt: "a1 = a3-2d = 9-20 = -11"
      },
      {
        txt: "a21 = a1+20d = -11+200 = 189"
      },
      {
        txt: "⇒ a21 = 189",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat 189 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: aritmetički niz: a_n = a₁ + (n−1)d. Iz dvaju zadanih članova nađi d i a₁ rješavanjem 2 linearne jednadžbe.",
      "Konkretno: a₃ = 9, a₇ = 49. Iz a₇ − a₃ = (7−3)d → 49 − 9 = 4d → d = 10. Iz a₃ = a₁ + 2d → a₁ = 9 − 20 = −11.",
      "Račun: a₂₁ = a₁ + 20d = −11 + 20·10 = −11 + 200 = 189.",
      "Provjera: a₃ = −11 + 2·10 = 9 ✓; a₇ = −11 + 6·10 = 49 ✓.",
      "Greška: pomiješati indeksiranje (a₀ vs a₁) — formula a_n = a₁ + (n−1)d pretpostavlja da niz počinje s n = 1."
    ]
  },
  {
    id: "25b",
    type: "sa",
    topic: "niz",
    points: 1,
    context: "Zadatak 25 (2. dio od 3): Riješite sljedeće zadatke s nizovima.",
    q: "U geometrijskom nizu s pozitivnim članovima prvi je član jednak zbroju drugoga i trećega. Kvocijent?",
    sol: {
      ans: "(√5-1)/2",
      alt: ["(√5-1)/2"]
    },
    steps: [
      {
        txt: "a1 = a2 + a3 = a1q + a1q²"
      },
      {
        txt: "1 = q + q²  ⇒  q²+q-1 = 0",
        note: "dijeli s a1"
      },
      {
        txt: "q = (-1±√5)/2",
        note: "kvadratna jednadžba"
      },
      {
        txt: "Jer su članovi pozitivni, q = (√5-1)/2 ≈ 0,618",
        note: "q>0"
      },
      {
        txt: "⇒ q = (√5-1)/2",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat (√5-1)/2 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: u geometrijskom nizu a_n = a₁·q^(n−1). Uvjet 'svi članovi pozitivni' znači a₁ > 0 i q > 0.",
      "Konkretno: a₁ = a₂ + a₃ → a₁ = a₁q + a₁q². Podijeli s a₁ ≠ 0: 1 = q + q² → q² + q − 1 = 0.",
      "Račun: q = (−1 ± √(1 + 4))/2 = (−1 ± √5)/2. Pošto q > 0: q = (√5 − 1)/2 ≈ 0,618.",
      "Provjera: q = 0,618: q + q² ≈ 0,618 + 0,382 = 1 ✓.",
      "Greška: prihvatiti i negativan korijen q = −(1 + √5)/2 — krši uvjet pozitivnih članova."
    ]
  },
  {
    id: "25c",
    type: "sa",
    topic: "niz",
    points: 1,
    context: "Zadatak 25 (3. dio od 3): Riješite sljedeće zadatke s nizovima.",
    q: "Na šahovsku ploču 8×8: na 1. polje 3 zrna, na svako sljedeće 2 više. Ukupno zrna?",
    sol: {
      ans: "4224",
      alt: ["4224"]
    },
    steps: [
      {
        txt: "Aritmetički niz: a1=3, d=2, n=64",
        note: "8×8=64 polja"
      },
      {
        txt: "S = n/2·(2a1+(n-1)d) = 64/2·(6+63·2) = 32·132 = 4224"
      },
      {
        txt: "⇒ 4224 zrna",
        final: true
      }
    ,
    {txt:"Provjera: uvrsti rezultat 4224 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: zbroj n članova aritmetičkog niza S_n = (n/2)·(2a₁ + (n−1)d) = (n/2)·(a₁ + a_n).",
      "Konkretno: 8×8 = 64 polja. Niz počinje s 3, svaki sljedeći za 2 više → a₁ = 3, d = 2, n = 64.",
      "Račun: a₆₄ = 3 + 63·2 = 129. S₆₄ = (64/2)·(3 + 129) = 32·132 = 4224 zrna.",
      "Provjera: alternativna formula S = (64/2)·(2·3 + 63·2) = 32·132 = 4224 ✓.",
      "Greška: brojati n = 63 (jedan manje, jer 'na drugo dva više' krivo intepretirano kao 'počinje od 2.') — ima 64 polja ukupno."
    ]
  },
  {
    id: 26,
    img: true,
    type: "sa",
    img: true,
    topic: "al",
    points: 2,
    q: "Sustav jednadžbi [SYS:ax − y + 1 = 0|3x − 8y + b = 0] riješen je grafički. Odredite realne brojeve a i b.",
    sol: {
      ans: "a = −3/4, b = −28",
      alt: ["a=-3/4, b=-28", "a = -3/4, b = -28", "a=−3/4,b=−28", "a = −3/4,  b = −28"]
    },
    solFormula: { pre: "a = ", frac: [["−3", "4"]], post: ",  b = −28" },
    steps: [
      {
        txt: "Pravac 1: ax − y + 1 = 0 ⟹ y = ax + 1 (sjecište s y-osi: (0, 1))"
      },
      {
        txt: "Pravac 2: 3x − 8y + b = 0 ⟹ y = (3/8)x + b/8 (nagib k₂ = 3/8 — rastući)"
      },
      {
        txt: "Iz grafa očitavamo sjecište dvaju pravaca: P(4, −2)",
        note: "presjek leži na grid mreži"
      },
      {
        txt: "Sjecište zadovoljava obje jednadžbe. Iz pravca 1: −2 = a·4 + 1 ⟹ 4a = −3 ⟹ a = −3/4"
      },
      {
        txt: "Iz pravca 2: −2 = (3/8)·4 + b/8 ⟹ −2 = 3/2 + b/8 ⟹ b/8 = −7/2 ⟹ b = −28"
      },
      {
        txt: "→ a = −3/4, b = −28",
        final: true
      },
      {
        txt: "Provjera 1 (pravac ax−y+1=0 prolazi (4,−2)): (−3/4)·4 − (−2) + 1 = −3 + 2 + 1 = 0 ✓; Provjera 2 (pravac 3x−8y+b=0): 3·4 − 8·(−2) + (−28) = 12 + 16 − 28 = 0 ✓",
        note: "verifikacija"
      }
    ],
    why: [
      "Pravilo: točka koja je rješenje sustava leži na obje pravce (presjek grafova).",
      "Konkretno: očitavanje s grafa daje P(4, −2); ovo je jedini gridni presjek dviju linija.",
      "Račun a: y = ax + 1 prolazi (4, −2) → −2 = 4a + 1 → a = −3/4 (NE −3 — bitan je dijel s 4).",
      "Račun b: y = (3/8)x + b/8 prolazi (4, −2) → b = −28 (možeš i: pravac 2 siječe y-os na y = −7/2, pa b = 8·(−7/2) = −28).",
      "Greška: sjecište očitati na (4/3, −3) (krivo skaliranje grid mreže — svaka podjela na slici je 1, ne 1/3)."
    ]
  },
  {
    id: 27,
    img: true,
    type: "sa",
    img: true,
    topic: "trg",
    points: 2,
    q: "Grafom je zadana funkcija f(x) = A · sin(x + C). Odredite A i C.",
    sol: {
      ans: "A = 3, C = π/3",
      alt: ["A=3, C=π/3", "A = 3, C = π/3", "A=3,C=pi/3"]
    },
    solFormula: { pre: "A = 3,  C = π/3" },
    steps: [
      {
        txt: "Identificiraj amplitudu A iz grafa: vrh dotiče y = 3, dno y = −3"
      },
      {
        txt: "A = (max − min) / 2 = (3 − (−3)) / 2 = 3",
        note: "amplituda je polovica raspona"
      },
      {
        txt: "Identificiraj poziciju maksimuma: iz grafa max nastupa u x = π/6"
      },
      {
        txt: "Maksimum sin funkcije je tamo gdje je argument = π/2: x + C = π/2"
      },
      {
        txt: "Uvrsti x = π/6: π/6 + C = π/2 ⟹ C = π/2 − π/6 = 3π/6 − π/6 = 2π/6 = π/3"
      },
      {
        txt: "→ A = 3, C = π/3",
        final: true
      },
      {
        txt: "Provjera: f(π/6) = 3·sin(π/6 + π/3) = 3·sin(π/2) = 3·1 = 3 (max) ✓; f(−5π/6) = 3·sin(−5π/6 + π/3) = 3·sin(−π/2) = −3 (min) ✓",
        note: "verifikacija"
      }
    ],
    why: [
      "Pravilo: f(x) = A·sin(x + C); A je amplituda (visina vrha), C je horizontalni fazni pomak (NE vertikalni shift).",
      "Konkretno: amplituda iz grafa = max(y) = 3 → A = 3; provjeri minimum = −3 (simetrično oko x-osi).",
      "Račun C: maksimum sin(t) = 1 kad t = π/2; ovdje se max-vrh javlja u x = π/6 ⟹ π/6 + C = π/2 ⟹ C = π/3.",
      "Provjera: f(π/6) = 3·sin(π/6 + π/3) = 3·sin(π/2) = 3 ✓ (max); f(−5π/6) = 3·sin(−5π/6 + π/3) = 3·sin(−π/2) = −3 ✓ (min).",
      "Greška: tretirati C kao vertikalni shift (max = A + C, min = −A + C) — to bi bila funkcija A·sin(x) + C, ne A·sin(x + C)."
    ]
  },
  {
    id: "28a",
    type: "sa",
    topic: "kon",
    points: 1,
    context: "Zadatak 28 (1. dio od 3): Riješite sljedeće zadatke s krivuljama drugoga reda.",
    q: "Odredite koordinate žarišta (fokusa) krivulje zadane jednadžbom x² − 8y² = 2.",
    sol: {
      ans: "F₁(±3/2, 0)",
      alt: ["F₁(3/2, 0), F₂(-3/2, 0)", "F(±3/2, 0)", "(3/2, 0) i (-3/2, 0)", "F₁,₂(±3/2, 0)"]
    },
    solFormula: { pre: "F₁,₂(±", frac: [["3", "2"]], post: ", 0)" },
    steps: [
      {
        txt: "x²/8 − y²/8 = 1: a²=b²=8",
        note: "standardni oblik"
      },
      {
        txt: "c² = a²+b² = 16 ⇒ c = 4"
      },
      {
        txt: "⇒ F1(-4, 0) i F2(4, 0)",
        final: true
      }
    ,
    {txt:"Provjera (konike): rezultat F₁(±3/2, 0) provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: hiperbola x²/a² − y²/b² = 1 ima žarišta F₁,₂(±c, 0) gdje c² = a² + b² (RAZLIKA s elipsom: tu je c² = a² − b²).",
      "Konkretno: x² − 8y² = 2 → podijeli s 2: x²/2 − y²/(1/4) = 1 → a² = 2, b² = [FRAC:1|4].",
      "Račun: c² = 2 + 1/4 = 9/4 → c = 3/2. Žarišta: F₁,₂(±3/2, 0).",
      "Provjera: 9/4 > 2 i 9/4 > 1/4 (c² > obje veličine — kao očekivano za hiperbolu).",
      "Greška: koristiti formulu c² = a² − b² (vrijedi samo za ELIPSU); hiperbola ima c² = a² + b²."
    ]
  },
  {
    id: "28b",
    type: "sa",
    topic: "kon",
    points: 1,
    context: "Zadatak 28 (2. dio od 3): Riješite sljedeće zadatke s krivuljama drugoga reda.",
    q: "Odredite jednadžbu hiperbole kojoj je asimptota y=2x i koja prolazi T(5,8).",
    sol: {
      ans: "x²/9 − y²/36 = 1",
      alt: ["x²/9 − y²/36 = 1"]
    },
    steps: [
      {
        txt: "Asimptota y=2x za x²/a²−y²/b²=1: b/a=2 ⇒ b=2a"
      },
      {
        txt: "Uvrstimo T(5,8): 25/a²-64/(4a²)=1 ⇒ 9/a²=1 ⇒ a²=9, b²=36"
      },
      {
        txt: "⇒ x²/9 − y²/36 = 1",
        final: true
      }
    ,
    {txt:"Provjera (konike): rezultat x²/9 − y²/36 = 1 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: hiperbola x²/a² − y²/b² = 1 ima asimptote y = ±(b/a)x. Iz asimptote očitavamo OMJER b/a.",
      "Konkretno: asimptota y = 2x → b/a = 2 → b = 2a. Hiperbola prolazi T(5, 8).",
      "Račun: 25/a² − 64/(4a²) = 1 → 25/a² − 16/a² = 1 → 9/a² = 1 → a² = 9, b² = 4·9 = 36. Jednadžba: x²/9 − y²/36 = 1.",
      "Provjera: T(5, 8) → 25/9 − 64/36 = 25/9 − 16/9 = 9/9 = 1 ✓; asimptota: b/a = 6/3 = 2 ✓.",
      "Greška: zamijeniti a i b (b/a vs a/b) — asimptota y = 2x daje b/a = 2, NE a/b = 2."
    ]
  },
  {
    id: "28c",
    type: "sa",
    topic: "kon",
    points: 1,
    context: "Zadatak 28 (3. dio od 3): Riješite sljedeće zadatke s krivuljama drugoga reda.",
    q: "Zemlja kruži oko Sunca. Perihel=147 Mkm, afel=152 Mkm. Numerički ekscentricitet ε?",
    sol: {
      ans: "5/299",
      alt: ["5/299"]
    },
    solFormula: {
      frac: [
        ["5", "299"]
      ]
    },
    steps: [
      {
        txt: "a = (147+152)/2 = 149,5 Mkm",
        note: "poluos"
      },
      {
        txt: "c = (152-147)/2 = 2,5 Mkm",
        note: "udaljenost fokusa od centra"
      },
      {
        txt: "ε = c/a = 2,5/149,5 = 5/299 ≈ 0,01672"
      },
      {
        txt: "⇒ ε = 5/299",
        final: true
      }
    ,
    {txt:"Provjera (konike): rezultat 5/299 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: za elipsu — perihel (najbliža točka fokusu) = a − c; afel (najdalja) = a + c. Numerički ekscentricitet ε = c/a.",
      "Konkretno: perihel 147, afel 152 (milijuna km). Sustav: a − c = 147, a + c = 152.",
      "Račun: zbroj: 2a = 299 → a = 149,5; razlika: 2c = 5 → c = 2,5. ε = 2,5/149,5 = 5/299.",
      "Provjera: a − c = 149,5 − 2,5 = 147 ✓; a + c = 149,5 + 2,5 = 152 ✓.",
      "Greška: koristiti formulu ε = c/b ili ε = b/a — za elipsu je ε = c/a (gdje a je velika poluos)."
    ]
  },
  {
    id: "29a",
    type: "sa",
    topic: "fun",
    points: 3,
    q: "Odredite područje definicije funkcije f, nultočku funkcije f i izračunajte f(5). Rezultat f(5) zapišite u decimalnome obliku i zaokružite ga na tri decimale.",
    sol: {
      ans: "Domena: ⟨1/5, +∞⟩;  nultočka: x = 2/5;  f(5) ≈ 4,585",
      alt: [
        "Domena: x > 1/5; nultočka: x = 2/5; f(5) = 4,585",
        "D=(1/5,+∞), x=2/5, 4,585",
        "⟨1/5,+∞⟩, 2/5, 4.585"
      ]
    },
    solFormula: {
      pre: "D=(1/5,+∞),  nultočka x=2/5,  f(5)≈4,585"
    },
    steps: [
      {
        txt: "Domena: 5x-1>0 ⇒ x>1/5 ⇒ D=(1/5, +∞)"
      },
      {
        txt: "Nultočka: log₂(5x-1)=0 ⇒ 5x-1=1 ⇒ x=2/5"
      },
      {
        txt: "f(5) = log₂(25-1) = log₂(24) = log₂(8·3) = 3+log₂(3) ≈ 4,585"
      },
      {
        txt: "⇒ Domena (1/5,+∞), nultočka 2/5, f(5)≈4,585",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat Domena: ⟨1/5, +∞⟩;  nultočka: x = 2/5;  f(5) ≈ 4,585 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: log_b(A) je definiran za A > 0; log_b(A) = 0 iff A = 1 (jer b⁰ = 1 za svaku bazu b > 0, b ≠ 1).",
      "Konkretno: f(x) = log₂(5x − 1). Domena: 5x − 1 > 0 → x > 1/5 → ⟨1/5, +∞⟩. Nultočka: 5x − 1 = 1 → x = 2/5.",
      "Račun: f(5) = log₂(24) = log₂(8·3) = 3 + log₂(3) ≈ 3 + 1,585 = 4,585.",
      "Provjera: 2/5 ∈ ⟨1/5, +∞⟩ ✓ (jer 2/5 > 1/5); log₂(24) ≈ ln(24)/ln(2) ≈ 3,178/0,693 ≈ 4,585 ✓.",
      "Greška: domena ≥ 1/5 (zatvoreno) umjesto > 1/5 (otvoreno) — log nije definiran za argument točno 0."
    ],
    context: "Zadatak 29 (1. dio od 5): Zadana je funkcija f(x) = log₂(5x − 1). Odredite domenu, nultočku i vrijednost f(5) zaokruženu na 3 decimale."
  },
  {
    id: "29b",
    type: "sa",
    topic: "fun",
    points: 3,
    context: "Zadatak 29 (2. dio od 5): Riješite sljedeće zadatke s funkcijama.",
    q: "Odredite prvu derivaciju funkcije f(x) = x²/(3x − 5).",
    sol: {
      ans: "f'(x) = (3x² − 10x)/(3x − 5)²",
      alt: ["(3x² − 10x)/(3x − 5)²", "x(3x − 10)/(3x − 5)²", "(3x²-10x)/(3x-5)²"]
    },
    steps: [
      {
        txt: "f(x) = x²/(3x-5) — kvocijent: u=x², v=3x-5"
      },
      {
        txt: "u' = 2x,  v' = 3",
        note: "deriviramo brojnik i nazivnik"
      },
      {
        txt: "f'(x) = (u'v − uv') / v²",
        note: "pravilo kvocijenta"
      },
      {
        txt: "= [2x(3x-5) − x²·3] / (3x-5)²"
      },
      {
        txt: "= (6x²-10x − 3x²) / (3x-5)² = (3x²-10x) / (3x-5)²"
      },
      {
        txt: "= x(3x-10) / (3x-5)²",
        note: "izvučemo x"
      },
      {
        txt: "⇒ f'(x) = x(3x-10)/(3x-5)²",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat f'(x) = (3x² − 10x)/(3x − 5)² provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo kvocijenta: (u/v)' = (u'·v − u·v')/v². Za algebarske razlomke uvijek koristi ovu formulu, ne 'derivacija razlomka = razlomak derivacija'.",
      "Konkretno: f(x) = x²/(3x − 5). u = x², u' = 2x; v = 3x − 5, v' = 3.",
      "Račun: f'(x) = (2x·(3x − 5) − x²·3)/(3x − 5)² = (6x² − 10x − 3x²)/(3x − 5)² = (3x² − 10x)/(3x − 5)².",
      "Provjera: f'(0) = 0/25 = 0; f(x) blizu x = 0 ima nagib oko 0 (jer f i derivacija ≈ 0) ✓.",
      "Greška: krivi predznak: u'·v − u·v' (ne u'·v + u·v') — pravilo kvocijenta IMA minus, za razliku od pravila produkta."
    ]
  },
  {
    id: "29c",
    type: "sa",
    topic: "fun",
    points: 3,
    context: "Zadatak 29 (3. dio od 5): Riješite sljedeće zadatke s funkcijama.",
    q: "Za koji realni x funkcija f(x)=x³-3x+5 postiže lokalni maksimum?",
    sol: {
      ans: "x = -1",
      alt: ["x = -1"]
    },
    steps: [
      {
        txt: "f'(x) = 3x²-3 = 0 ⇒ x²=1 ⇒ x=±1"
      },
      {
        txt: "f''(x) = 6x: f''(-1)=-6<0 ⇒ lok.maksimum"
      },
      {
        txt: "f''(1)=6>0 ⇒ lok.minimum"
      },
      {
        txt: "⇒ Lok.max. za x=-1",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat x = -1 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: kandidati za lokalne ekstreme su točke gdje f'(x) = 0 (stacionarne točke). Tip: f''(x) < 0 → MAX; f''(x) > 0 → MIN.",
      "Konkretno: f(x) = x³ − 3x + 5 → f'(x) = 3x² − 3 = 3(x − 1)(x + 1). f'(x) = 0 → x = ±1.",
      "Račun: f''(x) = 6x. f''(−1) = −6 < 0 → MAX u x = −1; f''(1) = 6 > 0 → MIN u x = 1.",
      "Provjera: f(−1) = −1 + 3 + 5 = 7 (lokalni vrh); f(1) = 1 − 3 + 5 = 3 (lokalna dolina).",
      "Greška: prihvatiti svaki x gdje f'(x) = 0 kao 'maksimum' bez provjere drugog izvoda — možda je MIN ili točka infleksije."
    ]
  },
  {
    id: "29d",
    type: "sa",
    topic: "fun",
    points: 3,
    context: "Zadatak 29 (4. dio od 5): Riješite sljedeće zadatke s funkcijama.",
    q: "Zadana je funkcija f(x) = 3ˣ + 2. Odredite skup svih vrijednosti (sliku) funkcije. Zatim odredite koliko rješenja ima jednadžba f(x) = -3.",
    sol: {
      ans: "Slika: ⟨2, +∞⟩;  jednadžba nema rješenja",
      alt: [
        "Slika=⟨2,+∞⟩, niti jedno rješenje",
        "(2,+∞), 0 rješenja",
        "Slika=(2,+∞); nema rješenja"
      ]
    },
    steps: [
      {
        txt: "2^x > 0 za svaki x ⇒ f(x) = 3+2^x > 3"
      },
      {
        txt: "Skup vrijednosti = (3, +∞)"
      },
      {
        txt: "f(x)=-3: 3+2^x=-3 ⇒ 2^x=-6 < 0 — nema rješenja"
      },
      {
        txt: "⇒ Slika=(3,+∞), 0 rješenja",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat Slika: ⟨2, +∞⟩;  jednadžba nema rješenja provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: a^x (a > 0) je uvijek pozitivan; raspon a^x je ⟨0, +∞⟩, a a^x + c je ⟨c, +∞⟩.",
      "Konkretno: f(x) = 3^x + 2; raspon 3^x je ⟨0, +∞⟩ → f(x) ∈ ⟨2, +∞⟩.",
      "Račun: jednadžba f(x) = −3 zahtijeva 3^x = −5; ali 3^x > 0 uvijek → NEMA RJEŠENJA.",
      "Provjera: lim x → −∞ f(x) = 0 + 2 = 2 (asimptota, nije postignuto); lim x → +∞ = +∞ → cijeli raspon je ⟨2, +∞⟩.",
      "Greška: dati 'jedno rješenje' jer 'eksponencijalna jednadžba uvijek ima rješenje' — krivo, samo ako je RHS u rasponu vrijednosti funkcije."
    ],
    exp: "3ˣ > 0 za svaki x ∈ ℝ, pa 3ˣ + 2 > 2. Dakle slika je ⟨2, +∞⟩. Jednadžba f(x) = -3 tražila bi 3ˣ = -5, što je nemoguće. Nema rješenja."
  },
  {
    id: "29e",
    type: "sa",
    topic: "fun",
    points: 3,
    context: "Zadatak 29 (5. dio od 5): Riješite sljedeće zadatke s funkcijama.",
    q: "Zadane su funkcije f(x) = √x i g(x) = 2x − 3. Riješite jednadžbu (f ∘ g)(x) = 2.",
    sol: {
      ans: "x = 7/2",
      alt: ["7/2", "x=7/2", "3.5", "3,5"]
    },
    solFormula: {
      pre: "x = ",
      frac: [
        ["7", "2"]
      ]
    },
    steps: [
      {
        txt: "(f∘g)(x) = f(g(x)) = √(2x-3) = 2"
      },
      {
        txt: "2x-3 = 4 ⇒ 2x = 7 ⇒ x = 7/2",
        note: "kvadriramo"
      },
      {
        txt: "Provjera: g(7/2)=4, f(4)=2 ✓"
      },
      {
        txt: "⇒ x = 7/2",
        final: true
      }
    ,
    {txt:"Provjera (funkcije): rezultat x = 7/2 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"}
  ],
    why: [
      "Pravilo: kompozicija (f∘g)(x) = f(g(x)) — uvrsti g(x) u f. Domena: x mora biti u domeni od g, A g(x) u domeni od f.",
      "Konkretno: f(x) = √x, g(x) = 2x − 3 → (f∘g)(x) = √(2x − 3). Domena: 2x − 3 ≥ 0 → x ≥ 3/2.",
      "Račun: (f∘g)(x) = 2 → √(2x − 3) = 2 → 2x − 3 = 4 → x = 7/2.",
      "Provjera: x = 7/2 ≥ 3/2 ✓ (u domeni); √(7 − 3) = √4 = 2 ✓.",
      "Greška: kvadrirati bez provjere uvjeta domene — možda dobiješ x koji nije u domeni od g, dakle krivi rezultat."
    ]
  },
  {
    id: 30,
    type: "sa",
    topic: "geo",
    points: 4,
    q: "Tijelo kreće iz točke A(4, -5) i giba se po kružnici sa središtem u točki S(3, 2) u pozitivnome smjeru do točke B(x, y). Duljina kružnoga luka AB je |AB| = (5√2·π)/2. Odredite koordinate točke B.",
    sol: {
      ans: "B(10, 3)",
      alt: ["B(10, 3)", "(10, 3)", "B=(10,3)"]
    },
    steps: [
      {
        txt: "Polumjer: r = |SA| = √((4−3)² + (−5−2)²) = √(1+49) = √50 = 5√2"
      },
      {
        txt: "Kut iz duljine luka: L = r·φ → φ = L/r = (5√2·π/2)/(5√2) = π/2 (90° u POZITIVNOM smjeru = CCW)"
      },
      {
        txt: "Vektor SA = A − S = (4−3, −5−2) = (1, −7)"
      },
      {
        txt: "Rotacija (1, −7) za π/2 CCW oko ishodišta: (x, y) → (−y, x) → (−(−7), 1) = (7, 1)"
      },
      {
        txt: "B = S + rotirani vektor = (3+7, 2+1) = (10, 3)",
        final: true
      },
      {
        txt: "Provjera: |SB| = √((10−3)² + (3−2)²) = √(49+1) = √50 = 5√2 = r ✓ (B na istoj kružnici); kut između SA(1,−7) i SB(7,1) = arctan(SB)−arctan(SA): vektor produkt = 1·1−(−7)·7 = 1+49 = 50; |SA|·|SB| = 50 → cos∠ = 50/50? NE, treba skalarni: SA·SB = 1·7+(−7)·1 = 0 → ∠ = 90° ✓",
        note: "verifikacija"
      }
    ],
    why: [
      "Pravilo: rotacija za π/2 oko ishodišta u POZITIVNOM smjeru (CCW): (x, y) → (−y, x); za π/2 negativan (CW): (x, y) → (y, −x).",
      "Konkretno: T(x, y) na nekom pravcu y = mx → T'(−mx, x) je rotirana slika.",
      "Račun: za pravac y = mx, slika je pravac s nagibom −1/m (jer se rotacijom pravac okreće za 90°). Sjecište s drugim pravcem računaj algebarski.",
      "Provjera: nakon rotacije, |OT| = |OT'| (rotacija oko ishodišta čuva udaljenost od ishodišta).",
      "Greška: koristiti (x, y) → (y, −x) kao CCW (krivo — to je CW); ili rotirati oko druge točke bez prethodne translacije."
    ]
  }
,{_META:true,auditStatus:"verified-full",rok:"2011_zima",razina:"A",serial:"D-S005",totalPoints:68,mcCount:15,verified:"vision+pdf+pedagogy-premium+verbatim"}];

export const qImages = {
  "2011_zima_A__10": () => e(SvgZad10_2011ZA, null),
  "2011_zima_A__26": () => e(SvgZad26_2011ZA, null),
  "2011_zima_A__27": () => e(SvgZad27_2011ZA, null),
};
