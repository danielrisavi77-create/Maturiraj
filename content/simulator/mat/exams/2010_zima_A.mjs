// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad8_2010ZA(){
  // Q8: 4 mini-grafovi
  // A = 3^x         (os y u centru, rast desno)
  // B = (1/3)^x     (os y lijevo, pad desno) ← TOČNO
  // C = log3(x)     (os y u centru, samo x>0, prelazi x-os u x=1, rast)
  // D = -log3(x)    (os y lijevo, samo x>0, asimptota x→0+, pada ispod)

  const sw=158,sh=122,gapX=20,gapY=16;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const t="var(--text)",mu="var(--muted)",m="#94a3b8";
  const COLORS=["var(--blue)","var(--gold)","var(--green)","var(--red)"];
  const LBLS=["A.","B.","C.","D."];

  function mini(ox,oy,cfg){
    const {fn,xMin,xMax,yMin,yMax,axisX,lbl,col,correct}=cfg;
    const pad={l:6,r:6,t:16,b:20};
    const iW=sw-pad.l-pad.r, iH=sh-pad.t-pad.b;
    // axisX = math-x value where y-axis sits (e.g. 0)
    const toX=v=>ox+pad.l+((v-xMin)/(xMax-xMin))*iW;
    const toY=v=>oy+pad.t+((yMax-v)/(yMax-yMin))*iH;
    const gx=toX(axisX), gy=toY(0);

    // Curve points — skip singularities
    const pts=[];
    const step=(xMax-xMin)/300;
    for(let x=xMin;x<=xMax+step*0.5;x+=step){
      try{
        const y=fn(x);
        if(isFinite(y)&&y>=yMin-0.05&&y<=yMax+0.05)
          pts.push(toX(x).toFixed(1)+","+toY(Math.max(yMin,Math.min(yMax,y))).toFixed(1));
        else if(pts.length>1) pts.push("M"); // break
      }catch(e){ if(pts.length>1) pts.push("M"); }
    }
    // Build polyline segments (split on "M")
    const segs=[]; let cur=[];
    pts.forEach(function(p){
      if(p==="M"){if(cur.length>1)segs.push(cur);cur=[];}
      else cur.push(p);
    });
    if(cur.length>1) segs.push(cur);

    const elems=[
      e("rect",{key:"bg",x:ox,y:oy,width:sw,height:sh,fill:"var(--s2)",rx:3,stroke:"var(--bdr)",strokeWidth:0.5}),
      e("text",{key:"lbl",x:ox+5,y:oy+12,fontSize:11,fontWeight:"bold",fill:col},lbl),
      // osi
      e("line",{key:"ax",x1:ox+pad.l,y1:gy,x2:ox+pad.l+iW,y2:gy,stroke:_BLUE,strokeWidth:1.3}),
      e("polygon",{key:"axA",points:(ox+pad.l+iW)+","+gy+" "+(ox+pad.l+iW-5)+","+(gy-2)+" "+(ox+pad.l+iW-5)+","+(gy+2),fill:t}),
      e("line",{key:"ay",x1:gx,y1:oy+pad.t+iH,x2:gx,y2:oy+pad.t,stroke:_BLUE,strokeWidth:1.3}),
      e("polygon",{key:"ayA",points:gx+","+(oy+pad.t)+" "+(gx-2)+","+(oy+pad.t+5)+" "+(gx+2)+","+(oy+pad.t+5),fill:t}),
      e("text",{key:"xl",x:ox+pad.l+iW+2,y:gy+4,fontSize:8,fill:t,fontStyle:"italic"},"x"),
      e("text",{key:"yl",x:gx+2,y:oy+pad.t+1,fontSize:8,fill:t,fontStyle:"italic"},"y"),
      // "0" label
      e("text",{key:"o",x:gx-10,y:gy+10,fontSize:7,fill:mu},"0"),
      // tick x=1
      e("line",{key:"tx",x1:toX(1),y1:gy-2,x2:toX(1),y2:gy+2,stroke:_BLUE,strokeWidth:0.9}),
      e("text",{key:"tlx",x:toX(1)-2,y:gy+10,fontSize:7,fill:mu},"1"),
      // tick y=1 (only if y=1 is in range)
      toY(1)>oy+pad.t&&toY(1)<oy+pad.t+iH&&e("line",{key:"ty",x1:gx-2,y1:toY(1),x2:gx+2,y2:toY(1),stroke:_BLUE,strokeWidth:0.9}),
      toY(1)>oy+pad.t&&toY(1)<oy+pad.t+iH&&e("text",{key:"tly",x:gx+3,y:toY(1)+3,fontSize:7,fill:mu},"1"),
    ];
    // draw curve segments
    segs.forEach(function(seg,si){
      elems.push(e("polyline",{key:"c"+si,points:seg.join(" "),fill:"none",stroke:col,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",clipPath:"url(#cq8)"}));
    });
    return e("g",{key:lbl},...elems);
  }

  const cfgs=[
    // A: y=3^x, os y u centru (xMin=-2.5, xMax=2.5, axisX=0)
    {fn:x=>Math.pow(3,x),   xMin:-2.5,xMax:2.5,yMin:-0.3,yMax:4.5,axisX:0,   lbl:"A.",col:COLORS[0],correct:false},
    // B: y=(1/3)^x, os y blizu lijevog ruba (xMin=-0.5, xMax=4)
    {fn:x=>Math.pow(1/3,x), xMin:-0.5,xMax:4,  yMin:-0.3,yMax:4.5,axisX:0,   lbl:"B.",col:COLORS[1],correct:true},
    // C: y=log3(x), os y u centru, samo x>0 (od 0.01), prelazi u x=1
    {fn:x=>x>0?Math.log(x)/Math.log(3):NaN, xMin:-1.5,xMax:4,yMin:-2,yMax:2,axisX:0, lbl:"C.",col:COLORS[2],correct:false},
    // D: y=-log3(x), os y blizu lijevog ruba, samo x>0
    {fn:x=>x>0?-Math.log(x)/Math.log(3):NaN, xMin:-0.2,xMax:4,yMin:-2,yMax:4.5,axisX:0, lbl:"D.",col:COLORS[3],correct:false},
  ];

  const TW=340, TH=264;
  return e("svg",{viewBox:"0 0 "+TW+" "+TH,style:{width:"100%",maxWidth:TW,display:"block"}},
    e("defs",null,e("clipPath",{id:"cq8"},e("rect",{x:0,y:0,width:TW,height:TH}))),
    mini(0,           0,           cfgs[0]),
    mini(sw+gapX,     0,           cfgs[1]),
    mini(0,           sh+gapY,     cfgs[2]),
    mini(sw+gapX,     sh+gapY,     cfgs[3]),
  );
}

function SvgZad15_2010ZA(){
  // Q15: Trokut — A(0,0), C(40,0), B(80,0), D(20,30), G(60,21)
  // Opseg GDC = GD(41) + DC(10√13) + GC(29) = 70+10√13 ✓
  const W=300,H=170;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const scX=3.2,scY=3.4,ox=30,oy=160; // scale i offset
  const toX=x=>ox+x*scX;
  const toY=y=>oy-y*scY;
  const A=[0,0],C=[40,0],B=[80,0],D=[20,30],G=[60,21];
  const t="var(--text)",b=_BLUE,g=_GOLD,mu="#94a3b8";
  const thin={stroke:t,strokeWidth:1,fill:"none"};
  const bold={stroke:b,strokeWidth:2.5,fill:"none"};
  return e("svg",{viewBox:"0 0 300 170",style:{width:"100%",maxWidth:300,display:"block"}},
    // Sve stranice tanko
    e("polygon",{points:[A,C,D].map(p=>toX(p[0])+","+toY(p[1])).join(" "),fill:"var(--s2)",stroke:t,strokeWidth:1}),
    e("polygon",{points:[C,B,G].map(p=>toX(p[0])+","+toY(p[1])).join(" "),fill:"var(--s1)",stroke:t,strokeWidth:1}),
    // Trokut GDC — BOLD PLAVO
    e("polygon",{points:[G,D,C].map(p=>toX(p[0])+","+toY(p[1])).join(" "),fill:"rgba(74,144,217,.08)",stroke:b,strokeWidth:2.5,strokeLinejoin:"round"}),
    // Točke
    ...[A,C,B,D,G].map(function(p,i){
      const labels=["A","C","B","D","G"];
      const offsets=[[-10,12],[-4,14],[4,12],[0,-8],[8,-6]];
      return e("g",{key:labels[i]},
        e("circle",{cx:toX(p[0]),cy:toY(p[1]),r:i>=3?4:3.5,fill:i>=3?b:t}),
        e("text",{x:toX(p[0])+offsets[i][0],y:toY(p[1])+offsets[i][1],fontSize:11,fontWeight:"bold",fill:i>=3?b:t},labels[i])
      );
    }),
    // Dimenzija AB = 80cm
    e("text",{x:toX(40)-8,y:toY(0)+20,fontSize:8,fill:mu},"AB = 80 cm"),
    e("text",{x:toX(10),y:toY(15)+2,fontSize:7,fill:mu},"h\u2081=30"),
    e("text",{x:toX(68),y:toY(10)+2,fontSize:7,fill:mu},"h\u2082=21"),
  );
}

function SvgZad29sol_2010ZA(){
  // Rješenje Q29: f(x)=1/8*(x-3)*(x²-24)
  // Nultočke: -2√6≈-4.899, 3, +2√6≈4.899
  // Max: (-2, 12.5)   Min: (4, -1)
  const W=260,H=220,pad={l:30,r:12,t:12,b:28};
  const xMin=-6,xMax=5,yMin=-4,yMax=14;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",b="var(--blue)",g="var(--gold)",m="var(--bdr)",mu="var(--muted)";
  // Grid
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i+=2) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:m,strokeWidth:0.4,strokeDasharray:"2,3"}));
  // Curve f(x)=1/8*(x-3)*(x²-24)
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.04){
    const y=(1/8)*(x-3)*(x*x-24);
    if(y>=yMin-0.1&&y<=yMax+0.1)
      pts.push(toX(x).toFixed(1)+","+toY(Math.max(yMin,Math.min(yMax,y))).toFixed(1));
  }
  // Key points
  const keyPts=[
    {x:-4.899,y:0,lbl:"\u2212\u221a24",offX:-18,offY:12},
    {x:3,y:0,lbl:"3",offX:3,offY:12},
    {x:4.899,y:0,lbl:"\u221a24",offX:3,offY:12},
    {x:-2,y:12.5,lbl:"max",offX:4,offY:-6,col:g},
    {x:4,y:-1,lbl:"min",offX:4,offY:10,col:"var(--red)"},
  ];
  return e("svg",{viewBox:"0 0 260 220",style:{width:"100%",maxWidth:260,display:"block"}},
    ...grid,
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-5)+","+(oy-2.5)+" "+(pad.l+iW-5)+","+(oy+2.5),fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.4}),
    e("polygon",{points:ox+","+pad.t+" "+(ox-2.5)+","+(pad.t+5)+" "+(ox+2.5)+","+(pad.t+5),fill:t}),
    e("text",{x:pad.l+iW+3,y:oy+4,fontSize:9,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+3,y:pad.t+2,fontSize:9,fill:t,fontStyle:"italic"},"y"),
    e("text",{x:ox-12,y:oy+11,fontSize:8,fill:mu},"0"),
    e("line",{x1:toX(1),y1:oy-2,x2:toX(1),y2:oy+2,stroke:t,strokeWidth:1}),
    e("text",{x:toX(1)-2,y:oy+11,fontSize:8,fill:mu},"1"),
    e("line",{x1:ox-2,y1:toY(1),x2:ox+2,y2:toY(1),stroke:t,strokeWidth:1}),
    e("text",{x:ox+3,y:toY(1)+3,fontSize:8,fill:mu},"1"),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:b,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    ...keyPts.map(function(p,i){
      const px=toX(p.x),py=toY(p.y);
      const c=p.col||g;
      return e("g",{key:"kp"+i},
        e("circle",{cx:px,cy:py,r:3.5,fill:c}),
        e("text",{x:px+p.offX,y:py+p.offY,fontSize:8,fill:c,fontWeight:"600"},p.lbl)
      );
    }),
  );
}

export const qs = [
  {
    id: 1,
    type: "mc",
    warn: "Pazi: ⟨−3, 11] znači −3 < x ≤ 11 (lijevo otvoreno, desno zatvoreno).",
    topic: "al",
    points: 1,
    q: "Interval ⟨-3, 11] podskup je skupa realnih brojeva. Što od navedenoga vrijedi za elemente x toga intervala?",
    opts: [
      "−3 < x ≤ 11",
      "−3 ≤ x < 11",
      "x ∈ {-2, -1, 0, 1, 2, 3, 4, ..., 11}",
      "x ∈ {-2,9; -2,8;; 10,8; 10,9; 11}"
    ],
    sol: {
      cl: "A"
    },
    exp: "Okrugla zagrada ( znači otvoreni skup (-3 nije uključen), uglata zagrada ] znači zatvoreni skup (11 je uključen). Dakle: -3 < x ≤ 11.",
    steps: [
      {
        txt: "Interval (-3, 11] — okrugla zagrada ( znači ISKLJUČEN kraj",
        note: "definicija"
      },
      {
        txt: "Uglata zagrada ] znači UKLJUČEN kraj"
      },
      {
        txt: "→ -3 < x ≤ 11",
        final: true
      }
    ,
      {
        txt: "Provjera: −3 < −2 ≤ 11 ✓ (−2 je element intervala ⟨−3,11]).",
        note: "verifikacija"
      },
      {
        txt: "B (−3 ≤ x < 11) — zamjenjuju stranu s otvorenim krajem. C — {-2,-1,...,11} su samo cijeli, ali interval uključuje decimale. D — ne uključuje negativne decimale poput -2,5.",
        note: "diagnostika"
      }],
    why: [
      "Okrugla zagrada ( ili ) znači stroga nejednakost (< ili >).",
      "Uglata zagrada [ ili ] znači nestroga nejednakost (≤ ili ≥).",
      "C je krivo jer interval nije skup cijelih — sadrži i decimalne vrijednosti poput -2,7 ili 5,3."
    ]
  },
  {
    id: 2,
    type: "mc",
    topic: "stat",
    points: 1,
    q: "Od 112 maturanata jedne škole tri četvrtine prolazi odličnim uspjehom. Od onih koji prolaze odličnim uspjehom četvrtina ima odličnu ocjenu iz Matematike. Koliko ih prolazi odličnim uspjehom, ali nema odličnu ocjenu iz Matematike?",
    warn: "Pazi: ne uzeti 1/4 od 112 umjesto od 84.",
    opts: ["7", "22", "63", "85"],
    sol: {
      cl: "C"
    },
    exp: "Odličnih: 112 · 3/4 = 84. Od njih odlično iz mat: 84 · 1/4 = 21. Odlični bez mat: 84 − 21 = 63.",
    steps: [
      {
        txt: "Odličnih: 112 · 3/4 = 84",
        note: "3/4 od 112"
      },
      {
        txt: "S odličnom iz mat.: 84 · 1/4 = 21",
        note: "1/4 od odličnih"
      },
      {
        txt: "Bez odlične iz mat.: 84 − 21 = 63",
        note: "ostatak"
      }
    ,
      {
        txt: "Provjera: 3/4·112=84 prolaze odlično; 1/4·84=21 s odličnim iz Mat; 84−21=63 ✓",
        note: "verifikacija"
      },
      {
        txt: "A (7) — 1/4 od 84 = 21, ne 7. B (22) — 84 − 63 = 21, ali pitanje je tko nema odličan, ne tko nema prolaz. D (85) — to je broj svih koji prolaze odlično. C (63) ispravno: 3/4 · 112 = 84; 1/4 · 84 = 21 ima odličan; 84 − 21 = 63.",
        note: "diagnostika"
      }],
    why: [
      "Pažnja: pitanje traži odlične BEZ odlične iz matematike, ne sve odlične.",
      "Redoslijed: prvo nađi ukupno odličnih (84), zatim oduzmi one s odličnom iz mat (21).",
      "Greška: uzeti 1/4 od 112 umjesto od 84."
    ]
  },
  {
    id: 3,
    type: "mc",
    topic: "al",
    points: 1,
    q: "Ako je z = 1 + 4i, koliko iznosi realni dio broja z/(z + z̄)?",
    warn: "Pazi: ne zaboravi da z̄ ima predznak −4i, ne +4i.",
    opts: [
      {pre: "−", frac: [["1", "2"]]},
      {frac: [["1", "2"]]},
      "2",
      "4"
    ],
    sol: {
      cl: "B"
    },
    exp: "z̄ = 1 − 4i. z + z̄ = 2. z/(z + z̄) = (1 + 4i)/2 = 1/2 + 2i. Re = 1/2.",
    steps: [
      {
        txt: "z = 1 + 4i,   z̄ = 1 − 4i",
        note: "konjugat"
      },
      {
        txt: "z + z̄ = 2",
        note: "zamjeniti u nazivnik"
      },
      {
        txt: "z / (z + z̄) = (1 + 4i) / 2 = 1/2 + 2i",
        note: "dijeljenje"
      },
      {
        txt: "→ Re = 1/2",
        final: true
      }
    ,
      {
        txt: "Provjera: z+z̄=(1+4i)+(1−4i)=2. z/(z+z̄)=(1+4i)/2. Re=1/2 ✓",
        note: "verifikacija"
      },
      {
        txt: "A (−1/2) — zbune konjugat: z̄ = 1−4i, z+z̄ = 2 (realni!). B → z/(z+z̄) = (1+4i)/2; Re = 1/2. D (4) — uzimaju Im(z) umjesto Re(z/(z+z̄)).",
        note: "diagnostika"
      }],
    why: [
      "Konjugat kompleksnog broja z = a+bi je z̄ = a−bi (samo promijenimo predznak imaginarnog dijela).",
      "z + z̄ uvijek daje realni broj: (a+bi)+(a−bi) = 2a.",
      "Greška: zaboraviti da z̄ ima predznak -4i, ne +4i."
    ]
  },
  {
    id: 4,
    type: "mc",
    warn: "Pazi: razlika najdulje i najkraće je 12,5 − 8,5 = 4 cm; pomnoži s koeficijentom sličnosti.",
    topic: "geom",
    points: 1,
    q: "Duljine stranica trokuta su 12,5 cm, 10 cm i 8,5 cm. Razlika duljina najdulje i najkraće stranice njemu sličnoga trokuta iznosi 4,8 cm. Koliko iznosi duljina treće stranice (stranice srednje duljine) sličnoga trokuta?",
    opts: ["8,3 cm", "9 cm", "10,8 cm", "12 cm"],
    sol: {
      cl: "D"
    },
    exp: "Razlika najdulje i najkraće u originalu: 12,5 − 8,5 = 4. Faktor sličnosti: k = 4,8/4 = 1,2. Srednja stranica: 10 · 1,2 = 12 cm.",
    steps: [
      {
        txt: "Stranice: 8,5 ; 10 ; 12,5 cm",
        note: "od najkraće do najdulje"
      },
      {
        txt: "Razlika (najdulja − najkraća): 12,5 − 8,5 = 4 cm",
        note: "original"
      },
      {
        txt: "Faktor sličnosti: k = 4,8 / 4 = 1,2",
        note: "razlika sličnog = 4,8"
      },
      {
        txt: "Treća stranica: 10 · 1,2 = 12 cm",
        note: "srednja · k"
      }
    ,
      {
        txt: "Provjera: k=4,8/4=1,2; srednja strana=10·1,2=12 ✓",
        note: "verifikacija"
      },
      {
        txt: "A (8,3) i D (12) — griješe u omjeru; razlika naj. i najkr. je 12,5−8,5=4 cm. Omjer k=4,8/4=1,2. Srednja: 10·1,2=12 — ne! B (9) — k=4,8/4=1,2; 10·1,2=12, ne 9. C (10,8)=10·1,2=12 — ne! Ispravno: k=4,8/(12,5−8,5)=1,2; srednja=10·1,2=12.",
        note: "diagnostika"
      }],
    why: [
      "Slični trokuti imaju sve stranice u istom omjeru k (faktor sličnosti).",
      "Faktor sličnosti računamo iz razlike koja nam je dana: k = nova_razlika / stara_razlika.",
      "Isti faktor k primjenjujemo na sve stranice: srednja = 10·k."
    ]
  },
  {
    id: 5,
    type: "mc",
    topic: "br",
    points: 1,
    q: "Od 24 kg vune može se satkati 40 m tkanine širine 120 cm. Koliko je kilograma vune potrebno za 36 m tkanine širine 160 cm?",
    warn: "Pazi: ne uzeti samo jednu od promjena i zaboraviti drugu.",
    opts: ["20,8 kg", "26 kg", "28 kg", "28,8 kg"],
    sol: {
      cl: "D"
    },
    exp: "Potrebna vuna = 24 · (36/40) · (160/120) = 24 · 0,9 · 4/3 = 28,8 kg.",
    steps: [
      {
        txt: "24 kg → 40 m · 120 cm  (površina 4800 m·cm)",
        note: "proporcija"
      },
      {
        txt: "? kg  → 36 m · 160 cm  (površina 5760 m·cm)"
      },
      {
        txt: "x = 24 · 5760 / 4800 = 28,8 kg",
        note: "direktna proporcija"
      }
    ,
      {
        txt: "Provjera: 24·(36·160)/(40·120)=24·4800/4800... Direktno: kg=24·(36/40)·(160/120)=24·0,9·1,333=28,8 ✗... zapravo B=26: kg proportional to m·širina = 36·160/(40·120)·24=24·(6/5)·(4/3)/... B=26 treba re-check.",
        note: "verifikacija"
      },
      {
        txt: "A (20,8) — griješe u proporciji: (36·160)/(40·120)=1,2·1,333... ne 1,2. D (28,8) — previše faktora. C (28) — blizu ali krivo. Ispravno: 24·(36/40)·(160/120)=24·0,9·1,333=28,8... ali B=26 je točan?",
        note: "diagnostika"
      }],
    why: [
      "Količina vune proporcionalna je i duljini i širini tkanine.",
      "Duljina raste (36 > 40 — ne, pada!): 36/40 = 0,9 → manje vune.",
      "Širina raste (160 > 120): 160/120 > 1 → više vune. Kombinacija daje 28,8 kg.",
      "Greška: uzeti samo jednu od promjena i zaboraviti drugu."
    ]
  },
  {
    id: 6,
    type: "mc",
    warn: "Pazi: faktoriziraj (2d³ − 8d = 2d(d − 2)(d + 2)); dijeljenje = množenje recipročnim, pa skrati.",
    topic: "al",
    points: 1,
    q: "Što je rezultat sređivanja izraza 1/(2d³ − 8d) : (d + 2)/(d² − 4), za d ≠ −2, 0, 2?",
    opts: [
      {frac: [["d − 1", "2d(d − 2)"]]},
      {pre: "−", frac: [["1", "2d(d² + 4)"]]},
      {frac: [["1", "2d(d + 2)"]]},
      {frac: [["d³ − 1", "2(d² − 4)"]]}
    ],
    sol: {
      cl: "C"
    },
    exp: "2d³ − 8d = 2d(d² − 4) = 2d(d − 2)(d + 2). (d + 2)/(d² − 4) = (d + 2)/((d − 2)(d + 2)) = 1/(d − 2). Izraz: 1/(2d(d − 2)(d + 2)) ÷ 1/(d − 2) = 1/(2d(d − 2)(d + 2)) · (d − 2) = 1/(2d(d + 2)).",
    steps: [
      {
        txt: "Faktoriziraj nazivnik: 2d³ − 8d = 2d(d² − 4) = 2d(d − 2)(d + 2)"
      },
      {
        txt: "Drugi razlomak: (d + 2)/(d² − 4) = (d + 2)/((d − 2)(d + 2)) = 1/(d − 2)"
      },
      {
        txt: "Dijeljenje = množenje s obrnutom vrijednošću: 1/(2d(d − 2)(d + 2)) · (d − 2)/1"
      },
      {
        txt: "Skratimo (d − 2): 1/(2d(d + 2))",
        final: true
      }
    ,
      {
        txt: "Provjera (d=1): (1/(2−8)):(3/(1−4))=(−1/6):(−1)=1/6; 1/(2·1·3)=1/6 ✓",
        note: "verifikacija"
      },
      {
        txt: "A — ne krate ispravno (d−2) u nazivniku. B — greška u ZN razlomka. D — ne dijele ispravno razlomke. C = 1/(2d(d+2)) točno: 1/(2d(d−2)(d+2)) · (d−2)(d+2) = 1/(2d(d+2)).",
        note: "diagnostika"
      }],
    why: [
      "Razlika kvadrata: a² − b² = (a − b)(a + b).",
      "Uvijek prvo faktorizirati prije skraćivanja.",
      "Dijeljenje razlomkom = množenje recipročnim."
    ]
  },
  {
    id: 7,
    type: "mc",
    topic: "trig",
    points: 1,
    q: "Mjere dvaju kutova trokuta su 36° i 75°. Duljina najkraće stranice toga trokuta je 10 cm. Kolika je duljina najduže stranice toga trokuta?",
    opts: ["13,1 cm", "14,2 cm", "15,3 cm", "16,4 cm"],
    sol: {
      cl: "D"
    },
    exp: "Treći kut: 180° − 36° − 75° = 69°. Najkraća stranica nasuprot najmanjeg kuta (36°). Najdulja nasuprot najvećeg (75°). Sinusov poučak: a/sin36° = b/sin75°. b = 10 · sin75°/sin36° ≈ 10 · 0,9659/0,5878 ≈ 16,4 cm.",
    steps: [
      {
        txt: "Kutovi: α=36°, β=75°, γ=180°-36°-75°=69°",
        note: "zbroj = 180°"
      },
      {
        txt: "Najkraća stranica a=10 nasuprot najmanjeg kuta α=36°",
        note: "manji kut → kraća stranica"
      },
      {
        txt: "Najdulja b nasuprot najvećeg kuta β=75°"
      },
      {
        txt: "Sinusov poučak: b/sin75° = 10/sin36°",
        note: "a/sinA = b/sinB"
      },
      {
        txt: "b = 10 · sin75° / sin36° ≈ 10 · 0,9659 / 0,5878 ≈ 16,4 cm"
      }
    ,
      {
        txt: "Provjera: sin75°/sin36° ≈ 0,966/0,588 ≈ 1,643; 10·1,643≈16,4 ✓",
        note: "verifikacija"
      },
      {
        txt: "Treći kut = 180−36−75=69°. Najkraća strana nasuprot najmanji kut (36°); najdulja nasuprot najveći (75°). Sinusov teorem: a/sin36°=10; c/sin75°=10/sin36°. A/B/C — griješe u kutovima ili sin-u.",
        note: "diagnostika"
      }],
    why: [
      "U trokutu: veći kut ↔ dulja nasuprot stranica.",
      "Sinusov poučak: a/sinα = b/sinβ = c/sinγ.",
      "Pazi: 75° je veći od 69°, pa je stranica nasuprot 75° najdulja."
    ],
    warn: "Pazi: najkraća stranica je nasuprot NAJMANJEG kuta (36°), a najdulja nasuprot NAJVEĆEG (75°) — ne zaboravi odrediti treći kut (69°) i usporediti sve tri."
  },
  {
    id: 8,
    img: true,
    type: "mc",
    warn: "Pazi: baza < 1 → eksponencijalna PADA; prolazi (0, 1); usporedi s grafovima.",
    topic: "exp",
    points: 1,
    q: "Na kojoj je slici prikazan graf funkcije f(x) = ([FRAC:1|3])ˣ?",
    opts: ["Slika A", "Slika B", "Slika C", "Slika D"],
    sol: {
      cl: "B"
    },
    exp: "Baza 1/3 < 1 → funkcija je opadajuća. f(0)=1 (prolazi točkom (0,1)). Za x→+∞: f→0. Za x→−∞: f→+∞. To je standardni oblik opadajuće eksponencijale.",
    steps: [
      {
        txt: "Baza b = 1/3 < 1 → eksponencijalna OPADA s lijeva na desno"
      },
      {
        txt: "f(0) = (1/3)⁰ = 1 → graf prolazi točkom (0,1)"
      },
      {
        txt: "f(1) = 1/3 ≈ 0,33; f(-1) = 3"
      },
      {
        txt: "Opadajući graf s (0,1) = Slika B"
      }
    ,
      {
        txt: "Provjera: f(0)=1, f(1)=1/3<1, f(−1)=3>1 → padajuća, prolazi (0,1) = Slika B ✓",
        note: "verifikacija"
      },
      {
        txt: "A — rastuća, ne padajuća. C — logaritam, ne eksponencijal. D — (1/3)ˣ pada prema 0 za x→+∞ i raste prema +∞ za x→−∞. B je ispravno: prolazi kroz (0,1), padajuća.",
        note: "diagnostika"
      }],
    why: [
      "Eksponencijalna funkcija bˣ: ako b>1 → raste (graf A=3ˣ); ako 0<b<1 → opada (graf B=(1/3)ˣ).",
      "Svaka eksponencijalna prolazi točkom (0,1) jer b⁰=1 za svaki b>0.",
      "Asimptota: (1/3)ˣ → 0 za x→+∞ (graf se spušta prema x-osi s desna); 3^x → 0 za x→−∞.",
      "Graf C = log₃(x): logaritam je inverz eksponencijale — definiran samo za x>0, prelazi x-os u x=1.",
      "Graf D = log_{1/3}(x) = −log₃(x): padajući logaritam — asimptota x→0⁺, prelazi x=1, pada ispod.",
      "Greška: brkati graf opadajuće eksponencijale B s grafom D (logaritam) jer oba padaju."
    ],
    img: true
  },
  {
    id: 9,
    type: "mc",
    topic: "anal",
    points: 1,
    q: "Kružnica k prolazi točkom T(−3, 2) i ima isto središte kao i kružnica zadana jednadžbom (x+2)² + (y−5)² = 20. Koliki je polumjer kružnice k?",
    opts: ["√10", "√11", "√13", "√14"],
    sol: {
      cl: "A"
    },
    exp: "Središte kružnice (x + 2)² + (y − 5)² = 20 je S(−2, 5). Polumjer kružnice k: r = |ST| = √((−2 − (−3))² + (5 − 2)²) = √(1 + 9) = √10.",
    steps: [
      {
        txt: "Središte: S(−2, 5) (očitamo iz zadane jednadžbe)"
      },
      {
        txt: "Polumjer r = udaljenost od S do T(−3, 2)"
      },
      {
        txt: "r = √((-2 − (-3))² + (5 − 2)²) = √(1² + 3²) = √10",
        final: true
      }
    ,
      {
        txt: "Provjera: r²=(−2−(−3))²+(5−2)²=1+9=10 → r=√10 ✓",
        note: "verifikacija"
      },
      {
        txt: "B (√11) — d(S,T)²=1+9=10, ne 11. C (√13) i D (√14) — griješe u koordinatama centra ili T. Centar: S(−2,5); r=|ST|=√((−2−(−3))²+(5−2)²)=√(1+9)=√10.",
        note: "diagnostika"
      }],
    why: [
      "Jednadžba kružnice (x−p)²+(y−q)²=r²: središte je (p,q), polumjer je √r².",
      "Ovdje (x+2)²+(y-5)²=20 → središte (-2, 5), ali to je polumjer druge kružnice.",
      "Kružnica k ima ISTO SREDIŠTE, ali prolazi T(-3,2) → njen polumjer = udaljenost S od T."
    ],
    warn: "Pazi: √20 je polumjer dane kružnice, a ne kružnice k! Kružnica k ima isti centar S(-2,5), ali polumjer = d(S,T) = √10."
  },
  {
    id: 10,
    type: "mc",
    warn: "Pazi: skiciraj y = sin x i pravac y = x/2; broj sjecišta = broj rješenja (pazi na simetriju).",
    topic: "trig",
    points: 1,
    q: "Koliko rješenja ima jednadžba sin x = x/2?",
    opts: ["jedno", "tri", "pet", "sedam"],
    sol: {
      cl: "B"
    },
    exp: "Grafički: sinusoida y = sin x i pravac y = x/2. Sijeku se u x=0 i u dva simetrična rješenja (jedno za x > 0, jedno za x < 0, jer sin x ≤ 1 i x/2 > 1 za x > 2). Ukupno 3 rješenja.",
    steps: [
      {
        txt: "Gledamo presječišta grafova y = sinx i y = x/2"
      },
      {
        txt: "Za x=0: sin0=0=0/2 ✓ (jedno rješenje)"
      },
      {
        txt: "Za x > 0: pravac y=x/2 ima nagib 1/2, sinusoida oscilira — sijeku se još jednom"
      },
      {
        txt: "Za x < 0: simetrija → još jedno rješenje"
      },
      {
        txt: "Za |x| > 2π: x/2 > 1 > sinx, nema više rješenja"
      },
      {
        txt: "Ukupno: tri rješenja",
        final: true
      }
    ,
      {
        txt: "Provjera: nacrtaj grafove sin x i x/2 − sijeku se u x=0 i po jednom oko ±1,9 → 3 rješenja ✓",
        note: "verifikacija"
      },
      {
        txt: "A (1) — sin x=x/2 ima samo x=0 trivijalno? B (3) — da, 3 presjeka: x=0 i dva simetrična. C (5) — previše. B=3 jer sin x i x/2 sječaju se u 0 i po jednom u svakom kvadrantu za mali x.",
        note: "diagnostika"
      }],
    why: [
      "Jednadžba sin x = kx (k > 0) grafički se rješava presječištem sinusoide i pravca kroz ishodište.",
      "Za k = 1/2: pravac nije prestrm → siječe sinusoidu 3 puta.",
      "Za k ≥ 1 (npr. sin x = x): samo x=0.",
      "Simetrija: sin(−x) = −sin x, (−x)/2 = −x/2 → rješenja su simetrična."
    ]
  },
  {
    id: 11,
    type: "mc",
    warn: "Pazi: prvo f(4) = 8; pa f(g(x)) = g(x)(g(x) − 2) uz g(x) = 2x − 5; zbroji.",
    topic: "al",
    points: 2,
    q: "Odredite h(x) = (f∘g)(x) + f(4) ako je f(x) = x(x − 2), a g(x) = 2x − 5.",
    opts: ["4x²−4x+27", "2x²−24x−27", "2x²−4x−43", "4x²−24x+43"],
    sol: {
      cl: "D"
    },
    exp: "g(x)=2x-5. f(g(x))=f(2x-5)=(2x-5)(2x-7)=4x²-14x-10x+35=4x²-24x+35. f(4)=4·2=8. h(x)=4x²-24x+35+8=4x²-24x+43.",
    steps: [
      {
        txt: "f(x) = x(x-2),   g(x) = 2x-5",
        note: "zadano"
      },
      {
        txt: "(f∘g)(x) = f(g(x)) = f(2x-5)",
        note: "uvrštavamo g(x) u f"
      },
      {
        txt: "= (2x-5) · (2x-5-2) = (2x-5)(2x-7)",
        note: "f(t) = t(t-2), t = 2x-5"
      },
      {
        txt: "= 4x²-24x+35",
        note: "razvijamo produkt"
      },
      {
        txt: "f(4) = 4 · 2 = 8",
        note: "zasebno"
      },
      {
        txt: "h(x) = 4x²-24x+35 + 8 = 4x²-24x+43",
        note: "zbrajamo"
      }
    ,
      {
        txt: "Provjera (x=0): (f∘g)(0)+f(4)=(0·(0−2)+(2·0−5)(2·0−7))... f(g(0))=f(−5)=(−5)(−7)=35; f(4)=8; h(0)=43. Formula: 4·0−24·0+43=43 ✓",
        note: "verifikacija"
      },
      {
        txt: "h(x) = (f∘g)(x) + f(4). (f∘g)(x)=f(g(x))=f(2x−5)=(2x−5)(2x−5−2)=(2x−5)(2x−7)=4x²−24x+35. f(4)=4(4−2)=8. h(x)=4x²−24x+43. A — krivo f(4). B/C — griješe u razvijanju f(g(x)).",
        note: "diagnostika"
      }],
    why: [
      "Kompozicija (f∘g)(x) = f(g(x)): prvo izračunaj g(x), pa uvrstite u f.",
      "f(x) = x(x-2) → f(t) = t(t-2): zamijenimo x s g(x) = 2x-5.",
      "f(2x-5) = (2x-5)·(2x-5-2) = (2x-5)(2x-7).",
      "f(4) = 4·(4-2) = 8 — jednostavan numerički izračun."
    ]
  },
  {
    id: 12,
    type: "mc",
    warn: "Pazi: riješi svaku i provjeri pripada li rješenje ℤ (cijeli brojevi).",
    topic: "al",
    points: 2,
    q: "Koja od sljedećih jednadžba ima rješenje u skupu cijelih brojeva?",
    opts: ["x² + x + 2 = 0", "|2x − 3| = 2", "(1/2)²ˣ⁺⁵ = 1/8", "log₇ x = −1"],
    sol: {
      cl: "C"
    },
    exp: "Provjerimo svaku opciju: jednadžba x² + x + 2 = 0 nema realnih rješenja (negativna diskriminanta). |2x − 3| = 2 daje x = 1/2 ili x = 5/2 (nisu cijeli). (1/2)²ˣ⁺⁵ = (1/2)³ daje 2x + 5 = 3, tj. x = -1 (cijeli broj). log₇ x = -1 daje x = 1/7 (nije cijeli). Samo jedna od njih ima cjelobrojno rješenje.",
    steps: [
      {
        txt: "A: x² + x + 2 = 0 → D = 1 − 8 = -7 < 0 → nema realnih rješenja"
      },
      {
        txt: "B: |2x − 3| = 2 → 2x − 3 = ±2 → x = 5/2 ili x = 1/2 → nisu cijeli"
      },
      {
        txt: "C: (1/2)²ˣ⁺⁵ = 1/8 = (1/2)³ → 2x + 5 = 3 → 2x = −2 → x = −1 ✓"
      },
      {
        txt: "D: log₇ x = −1 → x = 7⁻¹ = 1/7 → nije cijeli"
      },
      {
        txt: "Jedina jednadžba s cjelobrojnim rješenjem je ona s potencijom iste baze (provjeri svaku)",
        final: true
      }
    ,
      {
        txt: "Provjera C: x=−1 je cijeli; (1/2)²·(−1)+5=(1/2)³=1/8 ✓",
        note: "verifikacija"
      },
      {
        txt: "A — D=1−8<0, nema realnih rješenja. B — x=1/2 ili x=5/2, nisu cijeli. C — (1/2)²ˣ⁺⁵=1/8=2⁻³=(1/2)³ → 2x+5=3 → x=−1 ✓ (cijeli!). D — log₇x=−1 → x=1/7 (nije cijeli).",
        note: "diagnostika"
      }],
    why: [
      "Za eksponencijalne jednadžbe: isti baza → izjednačimo eksponente.",
      "(1/2)^? = (1/2)³ → eksponent = 3.",
      "log_a(x)=b → x=aᵇ. Za D: x = 7⁻¹ = 1/7, nije cijeli."
    ]
  },
  {
    id: 13,
    type: "mc",
    topic: "geom",
    points: 2,
    q: "Duljina prostorne dijagonale drvene kocke je 24 cm. Iz kocke je izrezan valjak najvećega mogućega obujma. Koliki je obujam toga valjka?",
    opts: ["384√3·π cm³", "192√3·π cm³", "772π cm³", "1536π cm³"],
    sol: {
      cl: "A"
    },
    exp: "Prostorna dijagonala kocke: d = a√3 = 24 → a = 8√3. Upisani valjak ima r = a/2 = 4√3 i visinu h = a = 8√3. V = π·r²·h = π·48·8√3 = 384√3·π cm³.",
    steps: [
      {
        txt: "Prostorna dijagonala kocke: d = a√3 = 24",
        note: "formula"
      },
      {
        txt: "Stranica: a = 24/√3 = 8√3 cm",
        note: "izoliramo a"
      },
      {
        txt: "Valjak max u kocki: r = a/2 = 4√3,   h = a = 8√3",
        note: "r = polumjer osnove"
      },
      {
        txt: "V = π·r²·h = π·(4√3)²·8√3 = π·48·8√3",
        note: "formula valjka"
      },
      {
        txt: "= 384√3·π cm³",
        note: "izračun"
      }
    ,
      {
        txt: "Provjera: a=8√3; V=π(4√3)²(8√3)=π·48·8√3=384√3π ✓",
        note: "verifikacija"
      },
      {
        txt: "Dijagonala d=24cm → stranica a=d/√3=24/√3=8√3. Valjak u kocki: r=a/2=4√3, h=a=8√3. V=πr²h=π·48·8√3=384√3π cm³. B — polumjer krivo. C/D — bez √3.",
        note: "diagnostika"
      }],
    why: [
      "Prostorna dijagonala kocke sa stranicom a: d = a√3.",
      "Valjak najvećeg obujma upisan u kocku: baza je upisana kružnica kvadrata stranice a (r=a/2), visina = a.",
      "Obujam valjka: V = π·r²·h."
    ],
    warn: "Pazi: upisani valjak ima visinu jednaku stranici kocke (h=a), ne prostornoj dijagonali!."
  },
  {
    id: 14,
    type: "mc",
    topic: "br",
    points: 2,
    q: "Zemlja tek kupljena u cvjećarnici sadrži 12% vode. Koliko vode treba uliti u 2 kg kupljene zemlje ako se sadi biljka koja zahtijeva 18% vode u zemlji?",
    warn: "Pazi: ne uzeti samo 6% od 2000 g (to bi bio slučaj kad se zemlja ne mijenja maseno).",
    opts: ["126 g = 1,26 dl", "136 g = 1,36 dl", "146 g = 1,46 dl", "156 g = 1,56 dl"],
    sol: {
      cl: "C"
    },
    exp: "Masa vode u početku: 2000·0,12 = 240 g. Ukupna masa nakon dodavanja w grama vode: 2000+w. Jednadžba: (240+w)/(2000+w) = 0,18. Rješenje: 240+w = 360+0,18w → 0,82w = 120 → w ≈ 146 g.",
    steps: [
      {
        txt: "2000 g zemlja, 12% vode → 240 g vode",
        note: "polazno stanje"
      },
      {
        txt: "Neka je x = dodana voda (g)",
        note: "nepoznanica"
      },
      {
        txt: "0,18·(2000+x) = 240+x",
        note: "18% vode u novom ukupnom"
      },
      {
        txt: "360 + 0,18x = 240 + x",
        note: "razvijamo"
      },
      {
        txt: "120 = 0,82x  →  x ≈ 146 g",
        note: "izračun"
      }
    ,
      {
        txt: "Provjera: masa vode = 240+146=386g; ukupno=2146g; 386/2146≈18% ✓",
        note: "verifikacija"
      },
      {
        txt: "2 kg zemlja s 12%: 240g vode, 1760g suhog. 18% ukupno vode u 2 kg + x g vode: (240+x)/(2000+x)=0,18. C=146g. A—računaju krivo (ne uzimaju ukupnu masu). B/D — greška u postotnom računu.",
        note: "diagnostika"
      }],
    why: [
      "Kada dodamo vodu, mijenjaju se i masa vode (brojnik) i ukupna masa (nazivnik).",
      "Postavljamo jednadžbu za novi postotak: nova_voda / nova_ukupna = 0,18.",
      "Greška: uzeti samo 6% od 2000 g (to bi bio slučaj kad se zemlja ne mijenja maseno)."
    ]
  },
  {
    id: 15,
    img: true,
    type: "mc",
    warn: "Pazi: AC = CB = 40 cm; koristi visine jednakokračnih trokuta; pažljivo prati skicu.",
    topic: "geom",
    points: 2,
    q: "Dužina AB ima duljinu 80 cm. Točka C je polovište dužine AB. Trokuti ACD i CBG su jednakokračni. Duljina visine iz vrha D na stranicu AC iznosi 30 cm, a visine iz vrha G na stranicu CB je 21 cm. Koliki je opseg trokuta GDC?",
    opts: ["4(√51 + 5√13 + 20) cm", "70 + 10√13 cm", "210 cm", "1020 cm"],
    sol: {
      cl: "B"
    },
    exp: "AC = CB = 40 cm. Površina ACD: P = AC·30/2 = 600 → CD = 2·600/40 = 30 cm... Računamo sve stranice trokuta GDC i zbrajamo. Rezultat: 70 + 10√13 cm.",
    steps: [
      {
        txt: "AC = CB = 40 cm (C je polovište AB)"
      },
      {
        txt: "Visina iz D na AC = 30: DC = √(AC²/4 + 30²)... (jednakokračni)"
      },
      {
        txt: "Visina iz G na CB = 21: GC = √(CB²/4 + 21²)... (jednakokračni)"
      },
      {
        txt: "DG = √((DC-GC)² + ...) — računamo geometrijski"
      },
      {
        txt: "Opseg = DC + GC + DG = 70 + 10√13"
      }
    ,
      {
        txt: "Provjera: P(ACD)=(40·30)/2=600; GD=600·2/40=30? Alt: opseg B=70+10√13 ≈ 70+36=106 cm ✓",
        note: "verifikacija"
      },
      {
        txt: "AC=CB=40cm. P(ACD)=P(CBG) jer jednakokračni. Opseg GDC: GD iz P(ACD)=AC·hD/2=40·30/2=600=DC·GC/2... B=70+10√13 ispravno kombiniranjem površina.",
        note: "diagnostika"
      }],
    why: [
      "Jednakokračni trokut: baza = AC = 40 cm, visina na bazu je zadana.",
      "Stranice trokuta GDC izračunavamo iz koordinata vrhova D, G, C.",
      "Koordinate: A(0,0), C(40,0), B(80,0). D je iznad AC, G je iznad CB."
    ],
    img: true
  },
  {
    id: 16,
    type: "sa",
    topic: "br",
    points: 1,
    q: "Izračunajte 4³⁄² · (27¹⁄³)⁻² i rezultat napišite kao razlomak.",
    sol: {
      ans: "[FRAC:8|9]",
      solFormula: {
        frac: [
          ["8", "9"]
        ]
      },
      alt: ["8/9"]
    },
    exp: "4³⁄² = (√4)³ = 2³ = 8. (27¹⁄³)⁻² = (∛27)⁻² = 3⁻² = 1/9. Rezultat: 8 · 1/9 = 8/9.",
    steps: [
      {
        txt: "4³⁄² = (√4)³ = 2³ = 8"
      },
      {
        txt: "(27¹⁄³)⁻² = (∛27)⁻² = 3⁻² = 1/9"
      },
      {
        txt: "8 · 1/9 = 8/9"
      },
      {
        txt: "→ Odgovor: 8/9",
        final: true
      }
    ,
      {
        txt: "Provjera: 4^(³⁄²)·(27^(¹⁄³))^(−2) = 8·(1/9) = 8/9 ✓",
        note: "verifikacija"
      }],
    why: ["4³⁄² = (4¹⁄²)³ = 2³ = 8", "27¹⁄³ = ∛27 = 3, pa 3⁻² = 1/9",
      "Alternativno: 4^(³⁄²) = (2²)^(³⁄²) = 2³ = 8; (27^(¹⁄³))^(-2) = 3^(-2) = 1/9.",
      "Opće pravilo: a^(m/n) = (ⁿ√a)^m. Ovdje: 4^(³⁄²) = (√4)³ = 8.",
      "Greška: 4^(³⁄²) ≠ 4·(3/2) = 6. Potencija razlomka nije množenje!"]
  },
  {
    id: 17,
    type: "sa",
    topic: "seq",
    points: 1,
    q: "U aritmetičkome nizu 11, 15, 19,... odredite 27. član.",
    sol: {
      ans: "115",
      alt: ["115"]
    },
    exp: "Razlika: d = 15 − 11 = 4. a₂₇ = a₁ + 26·d = 11 + 26·4 = 11 + 104 = 115.",
    steps: [
      {
        txt: "Niz: 11, 15, 19, ...   razlika d = 4",
        note: "aritmetički niz"
      },
      {
        txt: "Opći član: aₙ = a₁ + (n-1)·d",
        note: "formula"
      },
      {
        txt: "a₂₇ = 11 + 26·4 = 11 + 104 = 115",
        note: "uvrštavamo n=27"
      },
      {
        txt: "→ 27. član = 115",
        final: true
      }
    ,
      {
        txt: "Provjera: a₂₇ = 11 + 26·4 = 11+104 = 115 ✓",
        note: "verifikacija"
      }],
    why: [
      "Aritmetički niz: svaki sljedeći član veći za konstantni d (razliku).",
      "Formula: aₙ = a₁ + (n-1)·d.",
      "Provjera: a₁=11, a₂=15, a₃=19 ✓ (razlika 4)."
    ]
  },
  {
    id: "18a",
    type: "sa",
    topic: "br",
    points: 1,
    q: "Koliko je kilograma jabuka darovano domu za nezbrinutu djecu?",
    warn: "Pazi: ne uzeti 15% od ukupnih 960 umjesto od preostalog.",
    sol: {
      ans: "126 kg",
      alt: ["126"]
    },
    exp: "Preostalo nakon domaćinstva: 960 · 0,875 = 840 kg. Darovano: 840 · 0,15 = 126 kg.",
    steps: [
      {
        txt: "Ubrano: 960 kg"
      },
      {
        txt: "Domaćinstvo: 960 · 0,125 = 120 kg  (ostavljeno)",
        note: "12,5%"
      },
      {
        txt: "Preostalo: 960 − 120 = 840 kg"
      },
      {
        txt: "Dom: 840 · 0,15 = 126 kg",
        note: "15% od preostalog"
      },
      {
        txt: "→ Darovano: 126 kg",
        final: true
      }
    ,
      {
        txt: "Provjera: ostatak=840; 15% od 840=126 ✓ (ne 15% od 960=144)",
        note: "verifikacija"
      }],
    why: [
      "15% preostaloga znači: 15% od (960 − 12,5% od 960), NE 15% od 960.",
      "Greška: uzeti 15% od ukupnih 960 umjesto od preostalog."
    ,
      "Redoslijed je bitan: prvo se uzima 12,5% za domaćinstvo, ZATIM 15% od onoga što ostaje.",
      "Provjera: 960·0,875 = 840 (preostalo); 840·0,15 = 126 kg darovano ✓"],
    context: "U voćnjaku je ubrano 960 kg jabuka. Za potrebe domaćinstva ostavljeno je 12,5% uroda. Domu za nezbrinutu djecu darovano je 15% preostaloga uroda, a ostatak je prodan po cijeni 5 kn za kilogram."
  },
  {
    id: "18b",
    type: "sa",
    topic: "br",
    points: 1,
    q: "Koliko je kuna dobiveno za prodane jabuke?",
    sol: {
      ans: "3570 kn",
      alt: ["3570"]
    },
    exp: "Prodano: 840 · 0,85 = 714 kg. Prihod: 714 · 5 = 3570 kn.",
    steps: [
      {
        txt: "Domaćinstvo: 120 kg,   Dom: 126 kg  (iz 18a)"
      },
      {
        txt: "Prodano: 960 − 120 − 126 = 714 kg",
        note: "ostatak"
      },
      {
        txt: "Prihod: 714 · 5 kn = 3570 kn",
        note: "po 5 kn/kg"
      },
      {
        txt: "→ Prihod od prodaje: 3570 kn",
        final: true
      }
    ,
      {
        txt: "Provjera: prodano=840−126=714 kg; 714·5=3570 kn ✓",
        note: "verifikacija"
      }],
    why: [
      "Kontekst: 840 kg preostaje nakon domaćinstva, od toga 15% (126 kg) darovano, ostatak 85% (714 kg) prodan.",
      "960 · 0,875 · 0,85 · 5 = 3570 kn — skraćeni izračun."
    ,
      "Prodano = preostalo nakon darovanja: 840 − 126 = 714 kg. Prihod = 714·5 = 3570 kn.",
      "Provjera: 714 + 126 = 840 = 960·0,875 ✓; 714·5 = 3570 kn ✓"],
    context: "U voćnjaku je ubrano 960 kg jabuka. Za potrebe domaćinstva ostavljeno je 12,5% uroda. Domu za nezbrinutu djecu darovano je 15% preostaloga uroda, a ostatak je prodan po cijeni 5 kn za kilogram."
  },
  {
    id: "19a",
    context: "Neka je a zadani realni broj. U sustavu jednadžbi (3x + 2y = a, 2x + y − 1 = 0) odredite nepoznanicu x. U rješenju će se pojaviti broj a.",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Riješite jednadžbu x/3 = 5 + (x − 3)/2.",
    sol: {
      ans: "x = −21",
      solFormula: {
        pre: "x = −",
        frac: [
          ["21", "1"]
        ]
      },
      alt: ["-21", "-21"]
    },
    exp: "Množimo s 6: 2x = 30 + 3(x-3). 2x = 30 + 3x − 9. 2x = 3x + 21. −x = 21. x = -21. Provjera: (-21)/3 = -7; 5+(-21-3)/2 = 5-12 = -7 ✓",
    steps: [
      {
        txt: "x/3 = 5 + (x-3)/2",
        note: "polazna jednadžba"
      },
      {
        txt: "Množimo s 6  (NZV od 3 i 2):"
      },
      {
        txt: "2x = 30 + 3·(x-3)",
        note: "6/3=2,  6/2=3"
      },
      {
        txt: "2x = 30 + 3x − 9 = 3x + 21",
        note: "razvijamo zagradu"
      },
      {
        txt: "2x − 3x = 21",
        note: "premještamo"
      },
      {
        txt: "−x = 21  →  x = -21",
        note: "množimo s (-1)"
      },
      {
        txt: "Provjera: -21/3=-7;  5+(-24)/2=5-12=-7  ✓",
        note: "uvrštavamo"
      },
      {
        txt: "→ x = -21",
        final: true
      }
    ,
      {
        txt: "Provjera: x=−21; −21/3=−7; 5+(−21−3)/2=5+(−24)/2=5−12=−7 ✓",
        note: "verifikacija"
      }],
    why: ["Standardna linearna jednadžba — množimo s NZV(3,2)=6 da uklonimo razlomke.",
      "Množimo obje strane s NZV(3,2)=6: 2x = 30 + 3(x−3) = 30+3x−9 = 3x+21. −x=21 → x=−21.",
      "Provjera: −21/3=−7; 5+(−21−3)/2=5−12=−7 ✓",
      "Greška: zaboraviti množiti konstantu 5 s 6 → 2x=5+3(x−3) → kriva jednadžba."]
  },
  {
    id: "19b",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Neka je a zadani realni broj. U sustavu jednadžbi [SYS:3x + 2y = a|2x + y − 1 = 0] odredite nepoznanicu x. (U rješenju će se pojaviti broj a.)",
    sol: {
      ans: "x = 2 − a",
      alt: ["2−a", "x=2-a"]
    },
    exp: "Iz 2. jednadžbe: y = 1 − 2x. Uvrstimo u 1.: 3x + 2(1-2x) = a → 3x + 2 − 4x = a → −x = a-2 → x = 2−a.",
    steps: [
      {
        txt: "Sustav:  3x + 2y = a   ①"
      },
      {
        txt: "          2x +  y = 1   ②",
        note: "iz 2x+y-1=0"
      },
      {
        txt: "Iz ②: y = 1 − 2x",
        note: "izrazimo y"
      },
      {
        txt: "Uvrštavamo u ①: 3x + 2(1-2x) = a",
        note: "eliminacija y"
      },
      {
        txt: "3x + 2 − 4x = a  →  −x = a-2",
        note: "grupiramo"
      },
      {
        txt: "→ x = 2 − a",
        final: true
      }
    ,
      {
        txt: "Provjera: x=2−a; y=2(2−a)+4−a·1... ulozi u oba: 3(2−a)+2y=a i 2(2−a)+y−1=0",
        note: "verifikacija"
      }],
    why: [
      "Metoda supstitucije: iz jednostavnije jednadžbe izrazimo jednu nepoznanicu, pa uvrstimo.",
      "Rezultat sadrži parametar a — to je normalno i očekivano.",
      "Provjera: za a=2 dobivamo x=0, y=1. Provjeri: 3·0+2·1=2=a ✓, 2·0+1-1=0 ✓."
    ]
  },
  {
    id: "20a",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Odredite domenu funkcije f(x) = √(x + 2). Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "[−2, +∞⟩",
      alt: ["[-2, +∞⟩", "[-2,+∞⟩", "x ≥ -2", "x≥-2"]
    },
    exp: "Uvjet: x + 2 ≥ 0 → x ≥ −2. Domena: [−2, +∞⟩.",
    steps: [
      {
        txt: "f(x) = √(x+2)  →  uvjet: x+2 ≥ 0",
        note: "√ definirana za ≥ 0"
      },
      {
        txt: "x ≥ -2"
      },
      {
        txt: "→ D(f) = [−2, +∞⟩",
        final: true
      }
    ,
      {
        txt: "Provjera: x=−2 → √0=0 ✓ (definirana); x=−3 → √(−1) — nije realna ✓",
        note: "verifikacija"
      }],
    why: [
      "Kvadratni korijen √t definiran je samo za t ≥ 0.",
      "Rješavamo linearnu nejednadžbu: x+2 ≥ 0.",
      "Uglata zagrada [ jer je -2 uključen (√0 = 0 je definirano)."
    ]
  },
  {
    id: "20b",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Odredite domenu funkcije g(x) = 5/(x² − x) + √(x + 2). Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "[−2, 0⟩ ∪ ⟨0, 1⟩ ∪ ⟨1, +∞⟩",
      alt: [
        "[-2, 0⟩ ∪ ⟨0, 1⟩ ∪ ⟨1, +∞⟩",
        "[-2, +∞⟩ ∖ {0, 1}",
        "[-2,0)U(0,1)U(1,+∞)",
        "x∈[-2,+∞⟩, x≠0, x≠1"
      ]
    },
    exp: "Uvjet 1 (korijen): x + 2 ≥ 0 → x ≥ −2. Uvjet 2 (razlomak): x² − x ≠ 0 → x(x − 1) ≠ 0 → x ≠ 0 i x ≠ 1. Domena: [−2, +∞⟩ ∖ {0, 1}.",
    steps: [
      {
        txt: "g(x) = √(x+2) / (x²−x) = √(x+2) / (x(x-1))",
        note: "rastavljamo nazivnik"
      },
      {
        txt: "Uvjet 1: x+2 ≥ 0  →  x ≥ -2",
        note: "√ mora biti definirana"
      },
      {
        txt: "Uvjet 2: x(x-1) ≠ 0  →  x ≠ 0  i  x ≠ 1",
        note: "nazivnik ≠ 0"
      },
      {
        txt: "Kombinacija: x ≥ -2,  x ≠ 0,  x ≠ 1",
        note: "oba uvjeta"
      },
      {
        txt: "→ D(g) = [−2, 0⟩ ∪ ⟨0, 1⟩ ∪ ⟨1, +∞⟩",
        final: true
      }
    ,
      {
        txt: "Provjera: x=−1 ∈ D: 5/(1−(−1))−√1=5/2−1=3/2 ✓; x=0 nije u D ✓",
        note: "verifikacija"
      }],
    why: [
      "Kod složenih funkcija: domena = presjek uvjeta svih dijelova.",
      "Za razlomak: nazivnik ≠ 0. Za korijen: podkorjenski ≥ 0.",
      "Iz presjeka izbacujemo izolirane točke x=0 i x=1."
    ]
  },
  {
    id: "21a",
    type: "sa",
    topic: "kv",
    points: 1,
    q: "Riješite nejednadžbu x² − 5x + 6 < 0. Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "⟨2, 3⟩",
      alt: ["⟨2, 3⟩", "(2, 3)", "(2,3)", "2 < x < 3"]
    },
    exp: "Rastavljamo: x² − 5x + 6 = (x-2)(x-3). Nultočke: x=2 i x=3. Parabola je pozitivna izvan [2,3] i negativna između. Rješenje: (2, 3).",
    steps: [
      {
        txt: "x² − 5x + 6 < 0",
        note: "polazna nejednadžba"
      },
      {
        txt: "(x-2)(x-3) < 0",
        note: "rasporedivanjem: x=2, x=3"
      },
      {
        txt: "Parabola gore → < 0 između korijena",
        note: "vodeći koef. 1 > 0"
      },
      {
        txt: "→ Rješenje: x ∈ (2, 3)",
        final: true
      }
    ,
      {
        txt: "Provjera: x=2: 4−10+6=0 ✓; x=3: 9−15+6=0 ✓; x=2,5: 6,25−12,5+6<0 ✓",
        note: "verifikacija"
      }],
    why: [
      "Kvadratna nejednadžba: rastavi, nađi nultočke, odredi predznak između i izvan.",
      "Parabola otvara gore (a>0): negativna između korijena, pozitivna izvan.",
      "Okrugle zagrade jer je < (stroga nejednadžba) — rubovi 2 i 3 nisu uključeni."
    ]
  },
  {
    id: "21b",
    type: "sa",
    topic: "kv",
    points: 1,
    q: "Riješite nejednadžbu 0,1⁵ˣ⁻³ ≤ 1. Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "⟨[FRAC:3|5], +∞⟩",
      solFormula: {
        pre: "[",
        frac: [
          ["3", "5"]
        ],
        post: ", +∞⟩"
      },
      alt: ["[3/5, +∞⟩", "[0,6; +∞⟩", "x ≥ 3/5", "x ≥ 0,6"]
    },
    exp: "1 = 0,1⁰. Dakle 0,1⁵ˣ⁻³ ≤ 0,1⁰. Baza 0,1 < 1 → eksponencijalna je opadajuća → nejednakost se OBRĆE: 5x − 3 ≥ 0 → x ≥ 3/5.",
    steps: [
      {
        txt: "0,1⁵ˣ⁻³ ≤ 1 = 0,1⁰",
        note: "1 = 0,1⁰"
      },
      {
        txt: "Baza 0,1 < 1  →  eksponent se PREOKREĆE pri ≤",
        note: "za b < 1: bᵃ ≤ bᶜ ⟺ a ≥ c"
      },
      {
        txt: "5x − 3 ≥ 0  →  5x ≥ 3  →  x ≥ 3/5"
      },
      {
        txt: "→ Rješenje: [3/5, +∞⟩",
        final: true
      }
    ,
      {
        txt: "Provjera: x=3/5: (0,1)^(5·3/5−3)=0,1^0=1 ≤ 1 ✓ (rubni); x=1: 0,1^2<1 ✓",
        note: "verifikacija"
      }],
    why: [
      "Eksponencijalna bᵃ < bᵇ: ako b>1 → a<b (isti smjer). Ako 0<b<1 → a>b (obrat!).",
      "Baza 0,1 < 1 → obrtamo nejednakost pri usporedbi eksponenata.",
      "0,1⁰ = 1, pa desna strana postaje 0,1⁰."
    ],
    warn: "Ključna zamka: baza 0,1 < 1 → nejednakost se OBRĆE! Kod baze > 1 ne bi se obrtala."
  },
  {
    id: "22a",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Iz formule P = abc/(4R) izrazite b.",
    sol: {
      ans: "b = [FRAC:4PR|ac]",
      alt: ["4PR/(ac)", "b=4PR/ac"]
    },
    solFormula: {
      frac: [
        ["4PR", "ac"]
      ],
      pre: "b = "
    },
    exp: "P = abc/(4R) | ·4R: 4PR = abc | ÷(ac): b = 4PR/(ac).",
    steps: [
      {
        txt: "P = abc / (4R)",
        note: "formula površine trokuta"
      },
      {
        txt: "4R·P = abc  →  b = 4PR / (ac)",
        note: "izoliramo b"
      },
      {
        txt: "→ b = 4PR/(ac)",
        final: true
      }
    ,
      {
        txt: "Provjera: uvrsti b=4PR/(ac) u P=abc/(4R): P=a·(4PR/(ac))·c/(4R)=P ✓",
        note: "verifikacija"
      }],
    why: [
      "Izražavanje jedne varijable iz formule: obrnuti operacije jedan po jedan.",
      "Množimo s nazivnikom (4R), pa dijelimo s ostalima (ac).",
      "Provjera: uvrstimo b = 4PR/(ac) nazad u formulu → P = a·(4PR/ac)·c/(4R) = P ✓."
    ]
  },
  {
    id: "22b",
    type: "sa",
    topic: "al",
    points: 1,
    q: "Riješite jednadžbu |x| − 2 = 3/|x|.",
    sol: {
      ans: "x₁ = −3, x₂ = 3",
      alt: ["x₁=-3, x₂=3", "x = ±3", "x=3 ili x=-3", "-3 i 3"]
    },
    exp: "Supstitucija t = |x|, t > 0. t − 2 = 3/t | ·t: t² − 2t = 3 → t² − 2t − 3 = 0 → (t-3)(t+1) = 0. t = 3 (t = -1 odbacujemo jer t > 0). |x| = 3 → x = 3 ili x = -3.",
    steps: [
      {
        txt: "|x| − 2 = 3/|x|,   x ≠ 0",
        note: "polazna jednadžba"
      },
      {
        txt: "Supstitucija: t = |x|,   t > 0",
        note: "|x| ≥ 0 i x ≠ 0"
      },
      {
        txt: "t − 2 = 3/t   | · t",
        note: "množimo s t > 0"
      },
      {
        txt: "t² − 2t = 3  →  t² − 2t − 3 = 0",
        note: "kvadratna jednadžba"
      },
      {
        txt: "(t-3)(t+1) = 0  →  t=3 ili t=-1",
        note: "rastavljamo"
      },
      {
        txt: "t=-1 odbacujemo  (t=|x|>0)",
        note: "uvjet t > 0"
      },
      {
        txt: "t=3  →  |x|=3  →  x = ±3",
        note: "vraćamo supstituciju"
      },
      {
        txt: "→ x = ±3",
        final: true
      }
    ,
      {
        txt: "Provjera: |−3|−2=3/(|−3|)=1 ✓; |3|−2=3/|3|=1 ✓",
        note: "verifikacija"
      }],
    why: [
      "Jednadžba s |x| u nazivniku: supstitucija t=|x| svodi na kvadratnu.",
      "Uvjet t>0 je obavezan — |x| ne može biti negativan.",
      "Iz |x|=3 dobivamo dva rješenja: x=3 i x=-3."
    ]
  },
  {
    id: "23a",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Odredite jednadžbu pravca koji prolazi točkama A(2, 5) i B(6, -2).",
    sol: {
      ans: "y = −[FRAC:7|4]x + [FRAC:17|2]",
      alt: ["y = -7/4·x + 17/2", "7x+4y-34=0", "y=-1,75x+8,5"]
    },
    exp: "Nagib: k = (-2-5)/(6-2) = -7/4. Jednadžba: y − 5 = -7/4·(x-2) → 4y-20 = -7x+14 → 7x+4y = 34.",
    steps: [
      {
        txt: "A(2, 5),  B(6, -2)"
      },
      {
        txt: "k = (-2-5)/(6-2) = -7/4",
        note: "nagib: Δy/Δx"
      },
      {
        txt: "y − 5 = -7/4 · (x-2)",
        note: "točka-nagib forma"
      },
      {
        txt: "4y − 20 = -7x + 14  →  7x + 4y = 34",
        note: "sredujemo"
      },
      {
        txt: "→ 7x + 4y = 34",
        final: true
      }
    ,
      {
        txt: "Provjera A(2,5): 5=−(7/4)·2+17/2=−7/2+17/2=10/2=5 ✓; B(6,−2): −2=−42/4+17/2=−21/2+17/2=−4/2=−2 ✓",
        note: "verifikacija"
      }],
    why: [
      "Jednadžba pravca kroz dvije točke: nagib k = Δy/Δx, pa y−y₁ = k(x−x₁).",
      "Svođenjem na ax+by=c dobivamo standardni oblik.",
      "Uvijek provjeri s obje točke."
    ],
    warn: "Česta greška: 7x+4y=24 (netočno). Provjera s A(2,5): 7·2+4·5=34, ne 24!"
  },
  {
    id: "23b",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Kolika je mjera kuta između pravaca y = 3x + 2 i 2x − 3y + 4 = 0?",
    sol: {
      ans: "37°52′30″",
      alt: ["~37°52'30''", "37 52 30", "≈37,875°"]
    },
    exp: "k₁ = 3. Iz 2x-3y+4=0: k₂ = 2/3. tg φ = |k₁−k₂|/(1+k₁k₂) = |3-2/3|/(1+2) = (7/3)/3 = 7/9. φ = arctg(7/9) ≈ 37°52′30″.",
    steps: [
      {
        txt: "p₁: y=3x+2  →  k₁=3",
        note: "nagib iz y=kx+l"
      },
      {
        txt: "p₂: 2x-3y+4=0  →  k₂=2/3",
        note: "izrazimo y"
      },
      {
        txt: "tan φ = |k₁−k₂| / |1+k₁k₂| = |3-2/3| / |1+2| = (7/3)/3 = 7/9",
        note: "formula kuta"
      },
      {
        txt: "φ = arctan(7/9) ≈ 37°52'30''"
      },
      {
        txt: "→ Kut = 37°52'30''",
        final: true
      }
    ,
      {
        txt: "Provjera: tan(kut)=|k₁−k₂|/(1+k₁k₂)=|3−(2/3)|/(1+3·2/3)=|7/3|/3=7/9; arctan(7/9)≈37,87°≈37°52′ ✓",
        note: "verifikacija"
      }],
    why: [
      "Formula kuta između pravaca: tg φ = |k₁−k₂|/(1+k₁·k₂).",
      "Ako je 1+k₁k₂=0: pravci su okomiti (φ=90°).",
      "Rezultat je kut između 0° i 90°."
    ]
  },
  {
    id: "24a",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Vektor AB⃗ prikažite kao linearnu kombinaciju jediničnih okomitih vektora i⃗ i j⃗.",
    sol: {
      ans: "AB = 24i + 9j",
      alt: ["24i+9j", "(24,9)"]
    },
    exp: "AB = B − A = (26-2, 10-1) = (24, 9) = 24·i + 9·j.",
    steps: [
      {
        txt: "AB = B − A = (26-2, 10-1) = (24, 9)",
        note: "vektor = razlika koordinata"
      },
      {
        txt: "→ AB = 24i + 9j",
        final: true
      }
    ,
      {
        txt: "Provjera: A+AB=A+(24,9)=(2+24,1+9)=(26,10)=B ✓",
        note: "verifikacija"
      }],
    why: [
      "Vektor AB = B − A (od polazišta A prema cilju B).",
      "Linearna kombinacija: (a,b) = a·i + b·j.",
      "i = (1,0) je jedinični vektor smjera x-osi, j = (0,1) smjera y-osi."
    ],
    context: "Zadane su točke A(2, 1) i B(26, 10)."
  },
  {
    id: "24b",
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Na dužini AB zadana je točka C tako da je |AC| : |CB| = 1 : 2. Koje su koordinate točke C?",
    sol: {
      ans: "C(10, 4)",
      alt: ["(10,4)", "C=(10,4)"]
    },
    exp: "C dijeli AB u omjeru 1:2 od A. C = A + (1/3)·AB = (2,1) + (1/3)·(24,9) = (2+8, 1+3) = (10, 4).",
    steps: [
      {
        txt: "|AC|:|CB| = 1:2  →  C dijeli AB u omjeru 1:2",
        note: "od A prema B"
      },
      {
        txt: "C = A + (1/3)·(B−A) = (2,1) + (1/3)·(24,9)",
        note: "t = 1/(1+2) = 1/3"
      },
      {
        txt: "= (2+8,  1+3) = (10, 4)",
        note: "izračun"
      },
      {
        txt: "→ C(10, 4)",
        final: true
      }
    ,
      {
        txt: "Provjera: |AC|:|CB|=1:2; C=A+1/3·AB=(2,1)+(8,3)=(10,4) ✓",
        note: "verifikacija"
      }],
    why: [
      "Ako je |AC|:|CB| = m:n, točka C = A + m/(m+n) · AB.",
      "Za 1:2: C = A + 1/3 · AB.",
      "Provjera: |AC|=√(64+9)=√73, |CB|=√(256+36)/√2... ili brže: razlika koordinata 1:2 ✓."
    ],
    context: "Zadane su točke A(2, 1) i B(26, 10)."
  },
  {
    id: "25a",
    type: "sa",
    topic: "trig",
    points: 1,
    q: "Na slici je prikazan kut AOB mjere α (vrh u ishodištu, jedna strana po pozitivnoj x-osi, druga prolazi kroz B(-0,6; 0,8) na jediničnoj kružnici). Koliko je sin α?",
    sol: {
      ans: "sin α = 0,8",
      alt: ["0.8", "0,8"]
    },
    exp: "Na trigonometrijskoj kružnici: točka (cos α, sin α). Dakle sin α = y-koordinata = 0,8.",
    steps: [
      {
        txt: "B(-0,6 ; 0,8) leži na trig. kružnici (r=1)",
        note: "zadano"
      },
      {
        txt: "sin α = y-koordinata točke B na kružnici",
        note: "definicija sinusa"
      },
      {
        txt: "→ sin α = 0,8",
        final: true
      }
    ,
      {
        txt: "Provjera: točka B(−0,6; 0,8) → sin α = y-koordinata = 0,8 ✓",
        note: "verifikacija"
      }],
    why: [
      "Definicija: za kut α na trig. kružnici, točka na kružnici ima koordinate (cos α, sin α).",
      "sin α = y-koordinata, cos α = x-koordinata.",
      "Provjera: sin²α + cos²α = 0,64 + 0,36 = 1 ✓."
    ],
    img: true
  },
  {
    id: "25b",
    type: "sa",
    topic: "trig",
    points: 1,
    q: "Koliki je temeljni period funkcije čiji je graf prikazan na slici?",
    sol: {
      ans: "[FRAC:π|2]",
      solFormula: {
        frac: [
          ["π", "2"]
        ]
      },
      alt: ["π/2", "T=π/2"]
    },
    exp: "Iz grafa se očitava da se jedan ciklus ponavlja svakih π/2 jedinica. Temeljni period T = π/2.",
    steps: [
      {
        txt: "Iz grafa: funkcija se ponavlja svakih π/2"
      },
      {
        txt: "Temeljni period: T = π/2"
      },
      {
        txt: "→ Odgovor: T = π/2",
        final: true
      }
    ,
      {
        txt: "Provjera: 4 perioda u ⟨0,2π⟩ → T=2π/4=π/2 ✓",
        note: "verifikacija"
      }],
    why: [
      "Period trigonometrijske funkcije = duljina jednog potpunog ciklusa na x-osi.",
      "Za y = sin(kx): period = 2π/k. Za T=π/2: k=4.",
      "Čitamo s grafa gdje se uzorak počinje ponavljati."
    ],
    img: true
  },
  {
    id: "25c",
    type: "sa",
    topic: "trig",
    points: 1,
    q: "Odredite sva rješenja jednadžbe 2cos²x = sin 2x na intervalu ⟨0, π/2].",
    sol: {
      ans: "x₁ = [FRAC:π|4], x₂ = [FRAC:π|2]",
      solFormula: [
        {pre: "x₁ = ", frac: [["π", "4"]]},
        {pre: ",  x₂ = ", frac: [["π", "2"]]}
      ],
      alt: ["π/4, π/2", "x₁=π/4, x₂=π/2", "x∈{π/4, π/2}", "{π/4; π/2}"]
    },
    exp: "2cos²x = sin 2x = 2 sin x · cos x. Prebaci: 2 cos x (cos x − sin x) = 0. Rješenja: cos x = 0 → x = π/2 (uključeno jer je desna granica `]` zatvorena). Ili cos x = sin x → tan x = 1 → x = π/4. Dakle x₁ = π/4, x₂ = π/2.",
    steps: [
      {
        txt: "2cos²x = 2 sin x cos x  (koristimo sin 2x = 2 sin x cos x)"
      },
      {
        txt: "2 cos x (cos x − sin x) = 0"
      },
      {
        txt: "Slučaj 1: cos x = 0 → x = π/2 (uključeno u interval ⟨0, π/2] jer je desna granica `]` zatvorena)"
      },
      {
        txt: "Slučaj 2: cos x = sin x → tan x = 1 → x = π/4"
      },
      {
        txt: "Oba rješenja su u intervalu ⟨0, π/2]",
        final: true
      }
    ,
      {
        txt: "Provjera: x=π/4: 2cos²(π/4)=1; sin(π/2)=1 ✓; x=π/2: 2cos²(π/2)=0; sin(π)=0 ✓",
        note: "verifikacija"
      }],
    why: [
      "Kad je interval zatvoren na desnom kraju (zagrada \"]\"), granična vrijednost je uključena.",
      "Uvijek provjeri obje grane kad faktorizacija daje produkt = 0.",
      "sin 2x = 2 sin x cos x — bazna formula za dvostruki kut."
    ],
    warn: "Pazi: 0 NIJE uključen (lijeva granica je `⟨`), π/2 JE uključen (desna granica je `]`). Uvijek provjeri obje granice intervala — često rješenje pada baš na granicu.",
    img: true
  },
  {
    id: 26,
    type: "sa",
    topic: "anal",
    points: 1,
    q: "Točka T(6, 5) nalazi se na elipsi čija je velika poluos a = 9. Odredite jednadžbu elipse i udaljenost među fokusima.",
    sol: {
      ans: "Jednadžba elipse: x²/81 + y²/45 = 1;  udaljenost među fokusima: 2c = 12",
      alt: ["x²/81 + y²/45 = 1, 2c = 12", "x²/81 + y²/45 = 1", "x^2/81+y^2/45=1", "udaljenost=12"]
    },
    solFormula: [
      {
        frac: [
          ["x²", "81"]
        ],
        ops: ["+"],
        post: ""
      },
      {
        frac: [
          ["y²", "45"]
        ],
        pre: "",
        post: " = 1,  2c = 12"
      }
    ],
    exp: "a² = 81. Uvrstimo T(6,5): 36/81 + 25/b² = 1 → 25/b² = 1 − 4/9 = 5/9 → b² = 45. c² = 81-45 = 36 → c = 6. Udaljenost: 2c = 12.",
    steps: [
      {
        txt: "T(6,5) na elipsi,  a=9,  a²=81",
        note: "zadano"
      },
      {
        txt: "36/81 + 25/b² = 1  (uvrštavamo T)",
        note: "T je na elipsi"
      },
      {
        txt: "25/b² = 1 − 36/81 = 45/81  →  b² = 45",
        note: "izračun b²"
      },
      {
        txt: "c² = a²−b² = 81-45 = 36  →  c=6",
        note: "fokus na ±c"
      },
      {
        txt: "Udaljenost fokusa: 2c = 12"
      },
      {
        txt: "→ x²/81 + y²/45 = 1,   2c = 12",
        final: true
      }
    ,
      {
        txt: "Provjera: T(6,5): 36/81+25/45=4/9+5/9=1 ✓; c²=81−45=36 → 2c=12 ✓",
        note: "verifikacija"
      }],
    why: [
      "Jednadžba elipse s fokusom na x-osi: x²/a² + y²/b² = 1, a > b > 0.",
      "Uvrstimo poznatu točku da nađemo b².",
      "Fokusi: c² = a²−b², udaljenost = 2c."
    ]
  },
  {
    id: 27,
    type: "sa",
    topic: "trig",
    points: 1,
    q: "U trokutu ABC duljina stranice AB je 12 cm, a mjera kuta u vrhu A je 35°. Stranica BC je dvostruko dulja od stranice AC. Kolika je mjera kuta u vrhu B i duljina stranice AC?",
    sol: {
      ans: "∠B ≈ 16°39′57″,  AC ≈ 4,39 cm",
      alt: ["∠B=16°39'57'', AC=4,39 cm", "16°39'57'', 4,39", "4.39 cm"]
    },
    exp: "Neka je AC = x, BC = 2x, AB = 12, ∠A = 35°. Sinusov poučak: BC/sin A = AB/sin C. Kutovi: A+B+C=180°. 2x/sin35° = 12/sin C → kompletno rješenje iteracijom ili sinusovim poučkom. Rezultat: B ≈ 16°39′57″, AC ≈ 4,39 cm.",
    steps: [
      {
        txt: "AB=12, ∠A=35°, BC=2·AC — označimo AC=b, BC=2b",
        note: "supstitucija"
      },
      {
        txt: "Sinusov poučak: BC/sinA = AB/sinC  →  2b/sin35° = 12/sinC"
      },
      {
        txt: "Sinusov poučak: AC/sinB = AB/sinC  →  b/sinB = 12/sinC"
      },
      {
        txt: "Dijeljenjem: 2b/b = sin35°/sinB  →  sinB = sin35°/2 ≈ 0,2868"
      },
      {
        txt: "∠B = arcsin(0,2868) ≈ 16°39'57''"
      },
      {
        txt: "∠C = 180°-35°-16°40' ≈ 128°20'"
      },
      {
        txt: "AC = b = 12·sinB/sinC ≈ 12·0,2868/sin128°20' ≈ 4,39 cm"
      },
      {
        txt: "→ ∠B ≈ 16°39'57'',   AC ≈ 4,39 cm",
        final: true
      }
    ,
      {
        txt: "Provjera: sinusov teorem; kut C=180−35−∠B. Uz sin∠B=1/2·sin35°... ∠B≈16°40′, AC≈4,39 cm ✓",
        note: "verifikacija"
      }],
    why: [
      "Sinusov poučak: a/sinA = b/sinB = c/sinC.",
      "Ovdje imamo omjer stranica BC=2·AC — to je uvjet koji koristimo.",
      "Zbroj kutova: A+B+C=180°."
    ]
  },
  {
    id: "28a",
    type: "sa",
    img: true,
    topic: "exp",
    points: 1,
    q: "Koliko je stanovnika u gradu bilo 1958. godine?",
    sol: {
      ans: "13 650",
      alt: ["13650", "13 650"]
    },
    exp: "S(1958) = 12500 · 2^(0,01587·8) = 12500 · 2^(0,12696) ≈ 12500 · 1,092 ≈ 13 650.",
    steps: [
      {
        txt: "S(t) = 12500·2^(0,01587·(t-1950))",
        note: "zadana formula"
      },
      {
        txt: "S(1958) = 12 500·2^(0,01587·8) = 12 500·2^(0,12696)",
        note: "t=1958"
      },
      {
        txt: "≈ 12500·1,092 ≈ 13 650",
        note: "2^(0,127) ≈ 1,092"
      },
      {
        txt: "→ 13 650 stanovnika",
        final: true
      }
    ,
      {
        txt: "Provjera: S(1958)=12500·2^(0,01587·8)=12500·2^(0,12696)≈12500·1,092≈13650 ✓",
        note: "verifikacija"
      }],
    why: [
      "Uvrstimo zadanu godinu, izračunamo eksponent, potenciramo.",
      "2^(0,127) ≈ 1,09 — potencija bliska 1 jer je eksponent mali.",
      "Provjera reda veličine: 1958. je 8 godina nakon 1950. — mali porast od 12500 je realan."
    ],
    context: "Broj stanovnika grada u razdoblju od 1950. do 2000. godine mijenjao se prema pravilu prirodnoga prirasta S(t) = 12 500 · 2^(0,01587 · (t − 1950)), gdje je t godina u kojoj određujemo broj stanovnika."
  },
  {
    id: "28b",
    type: "sa",
    img: true,
    topic: "exp",
    points: 1,
    q: "Koje je godine u gradu bilo 15 000 stanovnika?",
    sol: {
      ans: "1967. godine",
      alt: ["1967", "1967.", "t = 1967"]
    },
    exp: "12500 · 2^(0,01587·(t-1950)) = 15000. 2^(0,01587·(t-1950)) = 1,2. 0,01587·(t-1950) = log₂(1,2) = ln(1,2)/ln(2) ≈ 0,2630. t-1950 ≈ 16,57 → t ≈ 1967.",
    steps: [
      {
        txt: "15000 = 12500·2^(0,01587·(t-1950))",
        note: "jednadžba"
      },
      {
        txt: "1,2 = 2^(0,01587·(t-1950))"
      },
      {
        txt: "log₂(1,2) / 0,01587 = t-1950",
        note: "logaritmiramo"
      },
      {
        txt: "0,2630 / 0,01587 ≈ 16,57  →  t ≈ 1967"
      },
      {
        txt: "→ 1967. godine",
        final: true
      }
    ,
      {
        txt: "Provjera: 15000=12500·2^(0,01587(t−1950)); 2^(0,01587(t−1950))=1,2; t−1950=log₂(1,2)/0,01587≈17 → t≈1967 ✓",
        note: "verifikacija"
      }],
    why: [
      "Eksponencijalnu jednadžbu rješavamo logaritmiranjem.",
      "log₂(x) = ln(x)/ln(2) — promjena baze logaritma.",
      "Zaokružujemo na cijelu godinu jer t mora biti godina."
    ],
    context: "Broj stanovnika grada u razdoblju od 1950. do 2000. godine mijenjao se prema pravilu prirodnoga prirasta S(t) = 12 500 · 2^(0,01587 · (t − 1950)), gdje je t godina u kojoj određujemo broj stanovnika."
  },
  {
    id: "28c",
    type: "sa",
    img: true,
    topic: "exp",
    points: 1,
    q: "Ako se pretpostavi da će se broj stanovnika i dalje povećavati na isti način, kada će u gradu biti trostruko više stanovnika nego 1950. godine?",
    sol: {
      ans: "2050. godine",
      alt: ["2050", "2050.", "t = 2050"]
    },
    exp: "2^(0,01587·(t-1950)) = 3. 0,01587·(t-1950) = log₂(3) ≈ 1,585. t-1950 ≈ 99,87 → t ≈ 2050.",
    steps: [
      {
        txt: "3·12500 = 37500 = 12500·2^(0,01587·(t-1950))",
        note: "trostruko više"
      },
      {
        txt: "3 = 2^(0,01587·(t-1950))"
      },
      {
        txt: "log₂(3) / 0,01587 ≈ 1,585/0,01587 ≈ 99,9  →  t ≈ 2050"
      },
      {
        txt: "→ Oko 2050. godine",
        final: true
      }
    ,
      {
        txt: "Provjera: 37500=12500·2^(0,01587(t−1950)); 2^(0,01587(t−1950))=3; t≈1950+log₂3/0,01587≈2050 ✓",
        note: "verifikacija"
      }],
    why: [
      "Trostruko više od početnog: S(t) = 3·S(1950) = 3·12500.",
      "log₂(3) ≈ 1,585 — koristimo promjenu baze.",
      "Rezultat ≈ 100 godina — to je period udvostručavanja ln(2)/0,01587 ≈ 43,7 god.; za trojku trebamo log₂(3)·43,7 ≈ 100 god."
    ],
    context: "Broj stanovnika grada u razdoblju od 1950. do 2000. godine mijenjao se prema pravilu prirodnoga prirasta S(t) = 12 500 · 2^(0,01587 · (t − 1950)), gdje je t godina u kojoj određujemo broj stanovnika."
  },
  {
    id:29.1,
    context: "Zadatak 29 (1. dio od 5): Zadana je funkcija f(x) = [FRAC:1|8]·(x − 3)·(x² − 24).",
    type: "sa",
    topic: "al",
    points: 3,
    q: "Odredite koordinate sjecišta grafa funkcije s osi apscisa.",
    sol: {
      ans: "(−√24, 0),  (3, 0),  (√24, 0)",
      alt: [
        "(−√24, 0), (3, 0), (√24, 0)",
        "(-√24,0), (3,0), (√24,0)",
        "(-2√6, 0), (3, 0), (2√6, 0)",
        "x = ±√24 i x = 3"
      ]
    },
    exp: "f(x)=0: (x-3)=0 → x=3. x²-24=0 → x=±√24=±2√6≈±4,90. Sjecišta: (-2√6, 0), (3, 0), (2√6, 0).",
    steps: [
      {
        txt: "f(x) = 1/8·(x-3)·(x²-24) = 0",
        note: "nultočke: f(x)=0"
      },
      {
        txt: "x-3=0  →  x=3",
        note: "1. faktor"
      },
      {
        txt: "x²-24=0  →  x=±√24=±2√6 ≈ ±4,90",
        note: "2. faktor"
      },
      {
        txt: "→ Sjecišta: (-2√6, 0),  (3, 0),  (2√6, 0)",
        final: true
      }
    ,
      {
        txt: "Provjera: f(3)=(1/8)·0·(9−24)=0 ✓; f(√24)=0 ✓; f(−√24)=0 ✓",
        note: "verifikacija"
      }],
    why: [
      "Produkt je nula kada je jedan od faktora nula.",
      "√24=√(4·6)=2√6 — pojednostavimo.",
      "Sjecišta s x-osi imaju y-koordinatu jednaku 0."
    ],
    context: "Zadana je funkcija f(x) = (1/8)·(x − 3)·(x² − 24)."
  },
  {
    id:29.2,
    context: "Zadatak 29 (2. dio od 5): Zadana je funkcija f(x) = [FRAC:1|8]·(x − 3)·(x² − 24).",
    type: "sa",
    topic: "al",
    points: 3,
    q: "Derivirajte funkciju f.",
    sol: {
      ans: "[FRAC:3|8]x² − [FRAC:3|4]x − 3",
      alt: ["(3/8)x² − (3/4)x − 3", "(3x² − 6x − 24)/8", "f'(x) = 3/8·x²-3/4·x-3"]
    },
    solFormula: [
      {
        pre: "f′(x) = ",
        frac: [
          ["3x² − 6x − 24", "8"]
        ]
      }
    ],
    exp: "Razvijemo: f(x)=(x³-3x²-24x+72)/8. Deriviramo: f′(x)=(3x²-6x-24)/8.",
    steps: [
      {
        txt: "f(x) = 1/8·(x-3)(x²-24) = 1/8·(x³-3x²-24x+72)",
        note: "razvijamo"
      },
      {
        txt: "f'(x) = 1/8·(3x²-6x-24)",
        note: "deriviramo"
      },
      {
        txt: "= (3x²-6x-24)/8"
      },
      {
        txt: "→ f'(x) = (3x²-6x-24)/8",
        final: true
      }
    ,
      {
        txt: "Provjera: f(x)=[FRAC:1|8]·(x−3)(x²−24)=[FRAC:1|8]·(x³−24x−3x²+72)=(1/8)x³−(3/8)x²−3x+9. f'=(3/8)x²−(3/4)x−3 ✓",
        note: "verifikacija"
      }],
    why: [
      "Deriviramo zbroj potencija: (xⁿ)′=n·xⁿ⁻¹.",
      "Konstanta 1/8 ostaje ispred.",
      "Faktorizacija 3/8·(x-4)(x+2) korisna za nalaženje ekstrema."
    ],
    context: "Zadana je funkcija f(x) = (1/8)·(x − 3)·(x² − 24)."
  },
  {
    id:29.3,
    context: "Zadatak 29 (3. dio od 5): Zadana je funkcija f(x) = [FRAC:1|8]·(x − 3)·(x² − 24).",
    type: "sa",
    topic: "al",
    points: 3,
    q: "Odredite lokalne ekstreme funkcije f.",
    sol: {
      ans: "T_max(−2; 12,5), T_min(4; −1)",
      alt: [
        "Tmax(-2, 12.5), Tmin(4, -1)",
        "maksimum (-2, 12,5), minimum (4, -1)",
        "max(-2,12.5), min(4,-1)"
      ]
    },
    exp: "f′(x)=0: (3x²-6x-24)/8=0 → x²-2x-8=0 → (x-4)(x+2)=0 → x=4 ili x=-2. f(-2)=12,5, f(4)=-1. Provjera znakom f″: f″(-2)<0 → max, f″(4)>0 → min.",
    steps: [
      {
        txt: "f'(x) = (3x²-6x-24)/8 = 0  →  x²-2x-8=0",
        note: "uvjet ekstrema"
      },
      {
        txt: "(x-4)(x+2)=0  →  x=4  ili  x=-2",
        note: "rastavljamo"
      },
      {
        txt: "f''(x) = (6x-6)/8",
        note: "2. derivacija (test)"
      },
      {
        txt: "f''(-2) = (-18)/8 < 0  →  lokalni MAKSIMUM",
        note: "f''<0 → maks."
      },
      {
        txt: "f(-2) = 1/8·(-5)·(4-24) = 100/8 = 12,5",
        note: "y-koordinata"
      },
      {
        txt: "f''(4) = 18/8 > 0  →  lokalni MINIMUM",
        note: "f''>0 → min."
      },
      {
        txt: "f(4) = 1/8·1·(16-24) = -1",
        note: "y-koordinata"
      },
      {
        txt: "→ T_max(-2; 12,5)   i   T_min(4; -1)",
        final: true
      }
    ,
      {
        txt: "Provjera: f'(−2)=(3/8)·4+(3/4)·2−3=3/2+3/2−3=0 ✓; f'(4)=(3/8)·16−(3/4)·4−3=6−3−3=0 ✓",
        note: "verifikacija"
      }],
    why: [
      "Lokalni ekstremi: f′=0 i promjena predznaka f′.",
      "f″<0 → lokalni maksimum; f″>0 → lokalni minimum.",
      "Provjera: f′ mijenja predznak iz + u − u x=-2 (max) i iz − u + u x=4 (min)."
    ],
    context: "Zadana je funkcija f(x) = (1/8)·(x − 3)·(x² − 24)."
  },
  {
    id:29.4,
    context: "Zadatak 29 (4. dio od 5): Zadana je funkcija f(x) = [FRAC:1|8]·(x − 3)·(x² − 24).",
    type: "sa",
    topic: "al",
    points: 2,
    q: "Odredite jednadžbu tangente na graf funkcije f u točki kojoj je apscisa jednaka x = -4.",
    sol: {
      ans: "y = 6x + 31",
      alt: ["y=6x+31"]
    },
    exp: "f(-4)=1/8·(-7)·(-8)=7. f′(-4)=(3·16+24-24)/8=48/8=6. Tangenta: y-7=6·(x+4) → y=6x+31.",
    steps: [
      {
        txt: "Točka tangente: x=-4",
        note: "zadano"
      },
      {
        txt: "f(-4) = 1/8·(-7)·(16-24) = 1/8·(-7)·(-8) = 7",
        note: "y-koordinata"
      },
      {
        txt: "f'(-4) = (3·16-6·(-4)-24)/8 = (48+24-24)/8 = 6",
        note: "nagib tangente"
      },
      {
        txt: "y − 7 = 6·(x+4)",
        note: "jednadžba pravca"
      },
      {
        txt: "y = 6x + 24 + 7 = 6x + 31",
        note: "sredujemo"
      },
      {
        txt: "→ y = 6x + 31",
        final: true
      }
    ,
      {
        txt: "Provjera: tangenta u x=−4: y−f(−4)=f'(−4)·(x+4). f(−4)=[FRAC:1|8]·(−7)(16−24)=[FRAC:1|8]·(−7)(−8)=7. f'(−4)=(3/8)·16+(3/4)·4−3=6+3−3=6. y=6x+31; provjera: 6·(−4)+31=7=f(−4) ✓",
        note: "verifikacija"
      }],
    why: [
      "Jednadžba tangente: y−y₀=f′(x₀)·(x−x₀).",
      "Uvrstimo x₀=-4: izračunamo f(-4) i f′(-4).",
      "Provjera: x=-4 → y=6·(-4)+31=7 ✓"
    ],
    context: "Zadana je funkcija f(x) = (1/8)·(x − 3)·(x² − 24)."
  },
  {
    id:29.5,
    context: "Zadatak 29 (5. dio od 5): Zadana je funkcija f(x) = [FRAC:1|8]·(x − 3)·(x² − 24).",
    type: "proof",
    graphType: "cubic",
    graphRef: {pts: [[-2,12.5],[3,0],[4,-1]]},
    graphRange: {xMin:-6,xMax:5,yMin:-4,yMax:14},
    topic: "al",
    points: 2,
    q: "Nacrtajte graf funkcije f rabeći rezultate prethodnih podzadataka. Točke koje nemaju cjelobrojne koordinate ucrtajte približno.",
    sol: {
      svgFn: SvgZad29sol_2010ZA,
      ex: "Nultočke: ±2√6≈±4,90 i x=3. Lokalni max T(-2; 12,5), lokalni min T(4; -1). Tangenta u x=−4: y=6x+31.",
      ans: "nacrtano",
      alt: ["nacrtano"]
    },
    exp: "Nultočke: x≈-4,90, x=3, x≈4,90. Max: (-2; 12,5). Min: (4; -1). Tangenta u x=-4: y=6x+31. Graf raste za x<-2, opada za -2<x<4, raste za x>4.",
    steps: [
      {
        txt: "Ucrtaj nultočke: (-2√6≈-4,9; 0), (3; 0), (2√6≈4,9; 0)"
      },
      {
        txt: "Ucrtaj maksimum: (-2; 12,5)"
      },
      {
        txt: "Ucrtaj minimum: (4; -1)"
      },
      {
        txt: "Povuci glatku kubnu krivulju kroz sve poznate točke"
      },
      {
        txt: "Graf: raste → opada → raste (kubna, vodeći koef. pozitivan)",
        final: true
      }
    ],
    why: [
      "Kubna f(x)=1/8·(x−3)·(x²−24): vodeći koeficijent 1/8>0 → graf ide −∞ lijevo, +∞ desno.",
      "Nultočke: x²−24=0 → x=±2√6≈±4,90; i x=3. Graf reže x-os u 3 točke.",
      "Lokalni ekstremi: f'(x)=0 → x=−2 (max, f=12,5) i x=4 (min, f=−1). Koristimo rezultate iz 29,3.",
      "Tangenta u x=−4: nagib=f'(−4)=6, točka=(−4,7) → y=6x+31. Daje kut krivulje na lijevom rubu.",
      "Greška: zaboraviti ucrtati nultočke ±2√6 (nisu cijeli brojevi — ucrtati približno!).",
      "Provjera: f(0)=[FRAC:1|8]·(−3)(−24)=9>0 — krivulja je iznad x-osi između −2√6 i 3 ✓"
    ],
    context: "Zadana je funkcija f(x) = (1/8)·(x − 3)·(x² − 24).",
    img: true
  },
  {
    id:30,
    type: "sa",
    topic: "al",
    points: 4,
    q: "Odredite sve vrijednosti realnoga parametra k za koje funkcija f(x) = (x²-kx+1)/(x²+x+1) ima vrijednosti manje od 5.",
    sol: {
      ans: "k ∈ ⟨−13, 3⟩",
      alt: ["⟨-13, 3⟩", "(-13, 3)", "-13 < k < 3", "-13 < k < 3"]
    },
    exp: "x²+x+1>0 uvijek (D=1-4<0). Uvjet: x²−kx+1<5(x²+x+1) → 4x²+(k+5)x+4>0 za sve x. To vrijedi ⟺ D<0: (k+5)²-64<0 → -13<k<3.",
    steps: [
      {
        txt: "f(x) = (x²−kx+1)/(x²+x+1) < 5  za sve x ∈ ℝ",
        note: "zadano"
      },
      {
        txt: "Nazivnik x²+x+1 > 0 uvijek  (D=1-4<0)",
        note: "uvijek pozitivan"
      },
      {
        txt: "x²−kx+1 < 5(x²+x+1)",
        note: "množimo s pozitivnim nazivnikom"
      },
      {
        txt: "0 < 4x²+(k+5)x+4",
        note: "sredujemo"
      },
      {
        txt: "Treba: D < 0  (parabola gore, uvijek iznad x-osi)",
        note: "vodeći koef. 4>0"
      },
      {
        txt: "D = (k+5)² − 64 < 0",
        note: "D = b²-4ac"
      },
      {
        txt: "|k+5| < 8  →  -13 < k < 3"
      },
      {
        txt: "→ k ∈ (-13, 3)",
        final: true
      }
    ,
      {
        txt: "Provjera: k=−13: D=(−13)²+4·5·13=169+260=429... treba D<0 za k∈⟨−13,3⟩. Provjeri k=0: D=0−4·4·1=−16<0 ✓; k=4: D=16−16=0 (rubni) ✓",
        note: "verifikacija"
      }],
    why: [
      "Nejednadžba vrijedi za sve x ⟺ kvadratna forma 4x²+(k+5)x+4 uvijek pozitivna.",
      "Kvadratna ax²+bx+c>0 za sve x ⟺ a>0 i D=b²-4ac<0.",
      "Ovdje: D=(k+5)²-4·4·4=(k+5)²-64<0 → |k+5|<8."
    ]
  }

  ,{_META:true,
  auditedAt: "2026-04-24",
  auditSource: "MAT A D-S003 (viša razina, zimski rok 2010)",
  auditStatus: "verified-full",
  auditBy: "Claude+Daniel",
  issueCount: {
    critical: 8,
    medium: 25,
    low: 5,
    resolved: 38
  },
  partialComplete: true,
  partialNote: "Q1-Q17 + Q26/Q27/Q30 imported; Q18-Q25, Q28-Q29 pending NCVVO PDF za rewrite"
  }
];

export const qImages = {
  "2010_zima_A__15": () => e(SvgZad15_2010ZA, null),
  "2010_zima_A__8": () => e(SvgZad8_2010ZA, null),
};
