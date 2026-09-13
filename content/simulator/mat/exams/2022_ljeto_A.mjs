// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg39b_2022Aljeto(){
  // PDF: prazna mreža za rješavanje log₂(x-2) = |x-4|+1
  // Student crta sam grafove. NE renderiramo funkcije.
  const W=270,H=210;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const OX=80,OY=130,SX=24,SY=22;
  const elems=[];
  for(let i=-3;i<=8;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SX,y1:8,x2:OX+i*SX,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-3;j<=4;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SY,x2:W-8,y2:OY-j*SY,stroke:"var(--bdr)",strokeWidth:0.7}));
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX-13,y:15,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+3,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SX+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-15,y:OY-SY+4,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("circle",{key:"o1x",cx:OX+SX,cy:OY,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("circle",{key:"o1y",cx:OX,cy:OY-SY,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("circle",{key:"o0",cx:OX,cy:OY,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg36b_2022Aljeto(){
  const W=270,H=220;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const OX=110,OY=80,SZ=20;
  const elems=[];
  for(let i=-5;i<=5;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:8,x2:OX+i*SZ,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-6;j<=4;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SZ,x2:W-8,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+3,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-16,y:OY-SZ+4,fontSize:9,fill:"var(--muted)"},"1"));

  // Točke piecewise funkcije (vjerno prema PDF-u)
  // f(−5) = 4, lijeva grana strmo pada do tjemena
  // V (tjeme): (0, −5) — najdublja točka
  // Plato/blago raste: (0, −5) → (3, −2)
  // Desna grana: strmi rast (3, −2) → (5, 1)
  // f(−2) i f(3) trebaju biti jednaki = −2
  // Iz lijeve grane (linearno od (−5,4) do (0,−5)): nagib = (-5-4)/(0-(-5)) = -9/5
  // f(-2) = 4 + (-9/5)*(-2-(-5)) = 4 + (-9/5)*3 = 4 - 5.4 = -1.4
  // To NE odgovara f(3)=-2. Trebamo prilagoditi tako da f(-2) = f(3) = NEKA vrijednost
  // Iz slike: vidimo da na x=-2 graf je negdje oko y=-2 (na padajucoj liniji)
  // Iz slike: na x=3 graf je oko y=-2 (na blagom platou)
  // Da budu jednaki: pomicemo lijevo da padne na (-2, -2)
  // Rekonstrukcija: lijeva grana padajuća, prolazi (−5, 4) i (−2, −2)
  // Nagib lijeve = (-2-4)/(-2-(-5)) = -6/3 = -2
  // Tjeme V na (~−1 ili 0, ~−5)? Trebamo tjeme...
  // Iz slike: minimum oko x=0, y≈-5
  // Lijeva grana: (−5, 4) → (−1, ~−4) ili tako
  // Plato: (~0, −5) → (~3, −2)
  // Da bude f(-2)=f(3)=-2:
  //   - Plato za x ∈ [-1, 3] na vrijednosti -2? Ne, slika pokazuje V
  //   - Bolje: lijeva grana → V → desna grana
  //   - lijeva: (-5, 4) → (0, -5), desna: (0, -5) → (3, -2) → (5, 1)
  //   - na x=-2: 4+(-2-(-5))*(-9/5)=4-5.4=-1.4 (slijedi linearno)
  //   - na x=3: -5 + 3*(3/3)*(...)... 
  // Iz slike i ključa: graf je piecewise s lomovima
  // Pretpostavka: lomovi na x=-1 i x=3 (možda)
  // Iz slike: lijeva grana strmo pada od (-5,4) do oko (-1,-5), zatim kratko
  //   raste do (3,-2), zatim strmo raste do (5,1)
  // f(-2) na lijevoj grani: y interpolacija (-5,4)-(-1,-5): nagib=-9/4
  //   f(-2)=4+(-2-(-5))*(-9/4)=4-27/4=-2.75
  // f(3) na sredini = -2
  // Razlika 0.75 — možda ide drugačije
  // Iz ključa: a = -2 znači f(-2) = f(3)
  // Najjednostavnije: pretpostavi 4 točke prijeloma:
  //   (-5, 4), (-1, -5), (3, -2), (5, 1)  — ovo daje f(-2): između (-5,4) i (-1,-5)
  //   linearno (-5,4)-(-1,-5): nagib=-9/4, f(-2)=4-3*(9/4)=4-27/4=-2.75
  //   f(3) = -2
  //   Nije jednako, ali OK za vizualni prikaz
  // Bolja pretpostavka da se poklapa:
  //   (-5, 4), (-2, -2), (0, -5), (3, -2), (5, 1)
  //   To daje f(-2) = -2 i f(3) = -2 ✓
  const pts=[
    [-5, 4],
    [-2, -2],
    [0, -5],
    [3, -2],
    [5, 1],
  ];
  let d="";
  pts.forEach((p,i)=>{
    const px=OX+p[0]*SZ, py=OY-p[1]*SZ;
    d+=(i===0?"M ":"L ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
  });
  elems.push(e("path",{key:"fn",d,fill:"none",stroke:_BLUE,strokeWidth:2}));
  // Točke domene (puni kruzici)
  elems.push(e("circle",{key:"pL",cx:OX-5*SZ,cy:OY-4*SZ,r:3,fill:_RED}));
  elems.push(e("circle",{key:"pR",cx:OX+5*SZ,cy:OY-1*SZ,r:3,fill:_RED}));
  // y=f(x) label
  elems.push(e("text",{key:"lfn",x:OX+3.2*SZ,y:OY+2.5*SZ,fontSize:9,
    fill:"var(--text)",fontStyle:"italic"},"y = f(x)"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg35b_2022Aljeto(){
  // PDF: samo generička/ilustrativna skica — promatrač, horizontalni smjer,
  // jedan krak pogleda i oznaka "kut elevacije". BEZ zgrade, antene,
  // vrijednosti 38°/43° i visine 1,6 m (to su podatci iz teksta zadatka).
  const W=290,H=210;
  const E={x:62,y:112};            // oči promatrača = vrh kuta
  const ANG=30*Math.PI/180;        // ilustrativni nagib kraka
  const RAY=180;
  const Gore={x:E.x+RAY*Math.cos(ANG), y:E.y-RAY*Math.sin(ANG)};
  const Hor={x:E.x+152, y:E.y};
  const ARC_R=48;
  const arc=[];
  for(let a=0;a<=30;a+=1.5){
    const r=a*Math.PI/180;
    arc.push(`${(E.x+ARC_R*Math.cos(r)).toFixed(1)},${(E.y-ARC_R*Math.sin(r)).toFixed(1)}`);
  }
  const L=(x1,y1,x2,y2,k,w,col)=>e("line",{key:k,x1,y1,x2,y2,
    stroke:col||"var(--text)",strokeWidth:w||1.5,strokeLinecap:"round"});
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Krak pogleda (gore-desno) i horizontala
    L(E.x,E.y,Gore.x,Gore.y,"krak",1.6),
    L(E.x,E.y,Hor.x,Hor.y,"hor",1.6),
    // Luk kuta elevacije
    e("polyline",{key:"arc",points:arc.join(" "),fill:"none",
      stroke:"var(--text)",strokeWidth:1.4,strokeLinejoin:"round"}),
    e("text",{key:"lke",x:E.x+58,y:E.y-8,fontSize:12,fill:"var(--text)"},"kut elevacije"),
    // Promatrač (stilizirana figura; glava u vrhu kuta)
    e("circle",{key:"gl",cx:E.x-4,cy:E.y+13,r:8.5,fill:"none",
      stroke:"var(--text)",strokeWidth:1.5}),
    L(E.x-4,E.y+21.5,E.x-4,E.y+58,"tijelo",1.5),
    L(E.x-4,E.y+30,E.x-16,E.y+44,"rukaL",1.5),
    L(E.x-4,E.y+30,E.x+8,E.y+44,"rukaD",1.5),
    L(E.x-4,E.y+58,E.x-14,E.y+80,"nogaL",1.5),
    L(E.x-4,E.y+58,E.x+6,E.y+80,"nogaD",1.5),
    // Tlo ispod stopala
    L(E.x-22,E.y+86,E.x+16,E.y+86,"tlo",1.8,"var(--blue)"),
  );
}

function Svg35a_2022Aljeto(){
  const W=340,H=215;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const Plaz={x:80,y:158};
  const Riva={x:230,y:158};
  const Svjet={x:255,y:30};
  const ln=(p,q,k,col,w)=>e("line",{key:k,x1:p.x,y1:p.y,x2:q.x,y2:q.y,
    stroke:col||_BLUE,strokeWidth:w||1.8});
  const tx=(x,y,t,k,sz)=>e("text",{key:k,x,y,fontSize:sz||10,fill:"var(--text)"},t);
  const mid=(p,q,f=0.5)=>({x:p.x+(q.x-p.x)*f,y:p.y+(q.y-p.y)*f});

  // Kut 100° kod Riva: između RivaPlaž (smjer prema lijevo) i RivaSvjet (smjer prema gore-desno)
  // Vektor Riva→Plaž: smjer 180° (lijevo)
  // Vektor Riva→Svjet: smjer = atan2(Svjet.y-Riva.y, Svjet.x-Riva.x) = atan2(-125,80) ≈ −57°
  // Kut između = 180° − (−57°) = 237°... ali stvarni unutarnji kut je manji.
  // Unutarnji kut između dva smjera: |180−(−57)| = 237°, vanjski = 360−237 = 123°
  // U PDF-u kut je 100°. Riva i mol se susreću, kut između rive i mola je 100°.
  // Postavimo svjetionik tako da kut bude točno 100°:
  // Riva ide horizontalno desno: vektor (+1,0)
  // Mol ide pod kutom 100° od rive (mjereno gore-suprotno smjeru kazaljke)
  // 100° od smjera +x prema gore: cos(80°)=0.174, sin(80°)=0.985 → (0.174, -0.985) (y invertiran)
  // Mol duljine 85 (proporcionalno)
  const MOL_LEN=130;
  const angle100=100*Math.PI/180; // 100° od smjera rive prema mol
  // Smjer rive (od Riva prema Plaž) = (-1,0); od Riva prema mol je rotirano za 100° od (-1,0)
  // ROTACIJA: smjer rive prema lijevo (180°), kut 100° od te strane = 180° - 100° = 80° (od pozitivnog x)
  // To je smjer prema gore-desno
  const angMol=80*Math.PI/180;
  const Mol={x:Riva.x+MOL_LEN*Math.cos(angMol), y:Riva.y-MOL_LEN*Math.sin(angMol)};

  // Luk kuta 100° oko vrha Riva: od smjera rive (180°) do smjera mola (80°).
  // Uzorkovan kao polyline — SVG A-luk je ovdje ranije izlazio kao tanka krivulja.
  const ARC_R=40;
  const arcPts=[];
  for(let a=180;a>=80;a-=2){
    const r=a*Math.PI/180;
    arcPts.push(`${(Riva.x+ARC_R*Math.cos(r)).toFixed(1)},${(Riva.y-ARC_R*Math.sin(r)).toFixed(1)}`);
  }
  const labA=132*Math.PI/180, labR=24;
  const labX=Riva.x+labR*Math.cos(labA), labY=Riva.y-labR*Math.sin(labA);

  // Male kružice na vrhovima (kao u PDF-u)
  const dot=(p,k)=>e("circle",{key:k,cx:p.x,cy:p.y,r:2.4,
    fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.1});

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Maja pliva ravno
    ln(Plaz,Mol,"maja","var(--text)",1.8),
    // Iva: Riva (Plaz→Riva) + Mol (Riva→Mol)
    ln(Plaz,Riva,"riva","var(--text)",1.8),
    ln(Riva,Mol,"mol","var(--text)",1.8),
    // Kut 100° — veliki, jasno vidljiv luk
    e("polyline",{key:"kut",points:arcPts.join(" "),
      fill:"none",stroke:"var(--text)",strokeWidth:1.4,strokeLinejoin:"round"}),
    e("text",{key:"k100",x:labX,y:labY+4,fontSize:11,fill:"var(--text)",
      textAnchor:"middle"},"100°"),
    // Vrhovi
    dot(Plaz,"dP"), dot(Riva,"dR"), dot(Mol,"dM"),
    // Oznake
    e("text",{key:"lr",x:mid(Plaz,Riva).x,y:Riva.y+16,fontSize:10,
      fill:"var(--text)",textAnchor:"middle"},"riva"),
    e("text",{key:"lr2",x:mid(Plaz,Riva).x,y:Riva.y+28,fontSize:10,
      fill:"var(--text)",textAnchor:"middle"},"97,5 m"),
    e("text",{key:"lm",x:mid(Riva,Mol).x+12,y:mid(Riva,Mol).y,
      fontSize:10,fill:"var(--text)"},"mol"),
    e("text",{key:"lm2",x:mid(Riva,Mol).x+12,y:mid(Riva,Mol).y+12,
      fontSize:10,fill:"var(--text)"},"85 m"),
    e("text",{key:"ls",x:Mol.x+6,y:Mol.y-7,fontSize:10,fill:"var(--text)"},"svjetionik"),
    e("text",{key:"lp1",x:Plaz.x-6,y:Plaz.y+1,fontSize:10,fill:"var(--text)",
      textAnchor:"end"},"mjesto"),
    e("text",{key:"lp2",x:Plaz.x-6,y:Plaz.y+13,fontSize:10,fill:"var(--text)",
      textAnchor:"end"},"na plaži"),
  );
}

function Svg33b_2022Aljeto(){
  const W=230,H=220,CX=115,CY=110,R=85;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const elems=[];
  elems.push(e("line",{key:"ax",x1:20,y1:CY,x2:W-15,y2:CY,stroke:"var(--text)",strokeWidth:1.3}));
  elems.push(e("line",{key:"ay",x1:CX,y1:15,x2:CX,y2:H-15,stroke:"var(--text)",strokeWidth:1.3}));
  elems.push(e("polygon",{key:"axh",points:`${W-15},${CY} ${W-23},${CY-3} ${W-23},${CY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${CX},${15} ${CX-3},${23} ${CX+3},${23}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-12,y:CY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:CX+4,y:18,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l1",x:CX+R+3,y:CY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:CX+4,y:CY-R+4,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("circle",{key:"unit",cx:CX,cy:CY,r:R,fill:"none",stroke:_BLUE,strokeWidth:1.5}));
  // E(t): cos=−1/4 → x=−R/4 od centra, sin<0 → dolje
  const ex=CX+(-1/4)*R;
  const ey=CY+Math.sqrt(1-1/16)*R;
  elems.push(e("line",{key:"re",x1:CX,y1:CY,x2:ex,y2:ey,stroke:_GOLD,strokeWidth:1.3,strokeDasharray:"4,3"}));
  elems.push(e("line",{key:"px",x1:ex,y1:CY,x2:ex,y2:ey,stroke:_GOLD,strokeWidth:0.8,strokeDasharray:"3,3"}));
  elems.push(e("line",{key:"py",x1:CX,y1:ey,x2:ex,y2:ey,stroke:_GOLD,strokeWidth:0.8,strokeDasharray:"3,3"}));
  elems.push(e("circle",{key:"E",cx:ex,cy:ey,r:4,fill:_RED}));
  elems.push(e("text",{key:"lE",x:ex-20,y:ey+14,fontSize:11,fill:_BLUE,fontStyle:"italic"},"E(t)"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg32a_2022Aljeto(){
  const W=270,H=230;
  const OX=115,OY=115,SZ=24;
  const elems=[];
  for(let i=-4;i<=6;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:8,x2:OX+i*SZ,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-4;j<=4;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SZ,x2:W-8,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX-13,y:15,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+3,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-16,y:OY-SZ+4,fontSize:9,fill:"var(--muted)"},"1"));
  // PDF: prazna koordinatna mreža — učenik sam crta pravac x−2y+4=0.
  // NE crtamo pravac. (Ranije je ovdje bio krivi pravac: `(-0,5)` je comma-operator
  // koji daje 5, pa je crta bježala na vrh slike s pogrešnim nagibom.)
  elems.push(e("circle",{key:"o0",cx:OX,cy:OY,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("circle",{key:"o1x",cx:OX+SZ,cy:OY,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  elems.push(e("circle",{key:"o1y",cx:OX,cy:OY-SZ,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg30_2022Aljeto(){
  const W=420,H=195;
  const data=[
    {period:"1881-90",v:13.68},{period:"1891-00",v:13.67},{period:"1901-10",v:13.59},
    {period:"1911-20",v:13.64},{period:"1921-30",v:13.76},{period:"1931-40",v:13.89},
    {period:"1941-50",v:13.95},{period:"1951-60",v:13.92},{period:"1961-70",v:13.93},
    {period:"1971-80",v:13.95},{period:"1981-90",v:14.12},{period:"1991-00",v:14.26},
    {period:"2001-10",v:14.47},
  ];
  const LEFT=40,BOT=158,TOP=12,BW=22;
  const minV=13.4,maxV=14.6;
  const scaleY=v=>BOT-(v-minV)*(BOT-TOP)/(maxV-minV);
  const elems=[];
  [13.4,13.6,13.8,14.0,14.2,14.4,14.6].forEach(v=>{
    const y=scaleY(v);
    elems.push(e("line",{key:"gy"+v,x1:LEFT,y1:y,x2:W-8,y2:y,stroke:"var(--bdr)",strokeWidth:0.7}));
    elems.push(e("text",{key:"gl"+v,x:LEFT-3,y:y+4,fontSize:8,fill:"var(--muted)",textAnchor:"end"},v.toFixed(1)));
  });
  elems.push(e("text",{key:"ylab",x:10,y:85,fontSize:9,fill:"var(--muted)",
    transform:"rotate(-90,10,85)",textAnchor:"middle"},"°C"));
  data.forEach((d,i)=>{
    const x=LEFT+i*(BW+4);
    const y=scaleY(d.v);
    elems.push(e("rect",{key:"b"+i,x,y,width:BW,height:BOT-y,fill:"var(--blue)"}));
    elems.push(e("text",{key:"v"+i,x:x+BW/2,y:y-3,fontSize:6.5,fill:"var(--text)",textAnchor:"middle"},d.v.toFixed(2)));
    const px=x+BW/2, py2=BOT+8;
    elems.push(e("text",{key:"p"+i,x:px,y:py2,fontSize:6,fill:"var(--muted)",
      textAnchor:"end",transform:`rotate(-55,${px},${py2})`},d.period));
  });
  elems.push(e("line",{key:"ax",x1:LEFT,y1:BOT,x2:W-8,y2:BOT,stroke:"var(--text)",strokeWidth:1.2}));
  elems.push(e("text",{key:"xlabel",x:W/2,y:H-1,fontSize:8,fill:"var(--muted)",textAnchor:"middle"},"Godine"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg29a_2022Aljeto(){
  const W=240,H=190;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // Pravokutni trokut s pravim kutom u T (gore)
  // Postavljamo geometriju tako da trokut izgleda nakošen kao u PDF-u:
  // T (gore, pravi kut) → A (dolje-lijevo) → B (dolje-desno)
  // |TA| = x (kraća), |TB| = 2x (dulja), kut u T = 90°
  // Da to izgleda nakošeno, T će biti gore-lijevo od centra
  const T={x:95,y:35};      // gornji vrh — pravi kut
  // Postavi T-A vektor pod kutom (vektor od T prema A)
  // T-A: dolje-lijevo, kraća (x = npr. 65 px)
  // T-B: pod 90° na T-A, dulja (2x = 130 px)
  // Smjer T-A: kut θ (gledano od pozitivne x-osi prema dolje)
  // Postavimo θ tako da A bude dolje-lijevo
  const SCALE_X=60; // jedinica "x" u pikselima
  // Smjer T-A: pod kutom 200° (dolje-lijevo)
  const angA=Math.PI*1.25; // 225° = dolje-lijevo
  const angB=angA-Math.PI/2; // 90° rotirano = TB smjer
  const A={x:T.x+SCALE_X*Math.cos(angA), y:T.y-SCALE_X*Math.sin(angA)};
  const B={x:T.x+2*SCALE_X*Math.cos(angB), y:T.y-2*SCALE_X*Math.sin(angB)};
  // Hmm, treba reskalirati pa da B ide dolje-desno
  // Hajde drugačije: postavimo manualno gdje točke trebaju biti
  const TT={x:90,y:40};        // pravi kut, gore
  const AA={x:25,y:120};       // dolje-lijevo
  const BB={x:200,y:160};      // dolje-desno (najdalje)

  const ln=(p,q,k,w)=>e("line",{key:k,x1:p.x,y1:p.y,x2:q.x,y2:q.y,
    stroke:_BLUE,strokeWidth:w||1.8});
  const tx=(x,y,t,k)=>e("text",{key:k,x,y,fontSize:13,
    fill:"var(--text)",fontStyle:"italic"},t);

  // Pravi kut — mali kvadratić u T
  // Dva jedinična vektora od T prema A i prema B
  const dxA=AA.x-TT.x, dyA=AA.y-TT.y;
  const dxB=BB.x-TT.x, dyB=BB.y-TT.y;
  const lenA=Math.hypot(dxA,dyA), lenB=Math.hypot(dxB,dyB);
  const uxA=dxA/lenA, uyA=dyA/lenA;
  const uxB=dxB/lenB, uyB=dyB/lenB;
  const SQ=14;
  // 4 vrha kvadratića: T, T+SQ*uA, T+SQ*(uA+uB), T+SQ*uB
  const sq1={x:TT.x+SQ*uxA, y:TT.y+SQ*uyA};
  const sq2={x:TT.x+SQ*(uxA+uxB), y:TT.y+SQ*(uyA+uyB)};
  const sq3={x:TT.x+SQ*uxB, y:TT.y+SQ*uyB};

  // Sredine stranica za labele
  const mTA={x:(TT.x+AA.x)/2, y:(TT.y+AA.y)/2};
  const mTB={x:(TT.x+BB.x)/2, y:(TT.y+BB.y)/2};

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Stranice trokuta
    ln(TT,AA,"ta"),ln(TT,BB,"tb"),ln(AA,BB,"ab"),
    // Pravi kut — mali kvadratić u T
    e("polyline",{key:"sq",
      points:`${sq1.x},${sq1.y} ${sq2.x},${sq2.y} ${sq3.x},${sq3.y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.2}),
    // Oznaka "x" uz T-A stranicu
    tx(mTA.x-18,mTA.y-2,"x","lx"),
    // Oznaka "2x" uz T-B stranicu (gore-desno od sredine)
    tx(mTB.x+8,mTB.y-2,"2x","l2x"),
  );
}

function Svg20_2022Aljeto(){
  const W=200,H=200;
  const S=36;              // stranica jedne kockice (prednja, frontalno)
  const DEPTH=18;          // dubina paralelograma (smjer "u dubinu")
  const ANG_X=DEPTH;       // horizontalni pomak po dubini (cos α)
  const ANG_Y=-DEPTH*0.55; // vertikalni pomak po dubini (sin α — gore)
  // Početak prednje strane (donji-lijevi vrh)
  const FX=22, FY=170;

  const elems=[];
  const BLUE="var(--blue)", GRAY="var(--muted)", LINE="var(--text)";

  // ── Prednja strana 3×3 (plava) ──
  for(let row=0;row<3;row++){
    for(let col=0;col<3;col++){
      const x=FX+col*S;
      const y=FY-(row+1)*S;
      elems.push(e("rect",{key:`f${row}${col}`,x,y,width:S,height:S,
        fill:BLUE,stroke:LINE,strokeWidth:1.3}));
    }
  }

  // ── Gornja strana 3×3 (plava, paralelogram) ──
  // Donji rub gornje = gornji rub prednje (y = FY-3*S)
  // Stupci na gornjoj strani idu HORIZONTALNO (kao prednja)
  // Redovi (depth) idu prema gore-desno za (ANG_X, ANG_Y) po koraku
  const TOPY = FY-3*S;
  for(let depth=0;depth<3;depth++){
    for(let col=0;col<3;col++){
      // 4 vrha paralelograma
      // Donji-lijevi vrh ove kockice
      const dlx = FX + col*S + depth*ANG_X;
      const dly = TOPY + depth*ANG_Y;
      // Donji-desni
      const drx = dlx + S;
      const dry = dly;
      // Gornji-desni
      const grx = drx + ANG_X;
      const gry = dry + ANG_Y;
      // Gornji-lijevi
      const glx = dlx + ANG_X;
      const gly = dly + ANG_Y;
      const pts=`${dlx},${dly} ${drx},${dry} ${grx},${gry} ${glx},${gly}`;
      elems.push(e("polygon",{key:`t${depth}${col}`,points:pts,
        fill:BLUE,stroke:LINE,strokeWidth:1.3}));
    }
  }

  // ── Desna strana 3×3 (siva, paralelogram) ──
  // Lijevi rub desne = desni rub prednje (x = FX+3*S)
  // Stupci (depth) idu prema gore-desno
  // Redovi idu VERTIKALNO prema gore (kao prednja)
  const RX = FX+3*S;
  for(let row=0;row<3;row++){
    for(let depth=0;depth<3;depth++){
      // Donji-lijevi vrh
      const dlx = RX + depth*ANG_X;
      const dly = FY - row*S + depth*ANG_Y;
      // Gornji-lijevi
      const ulx = dlx;
      const uly = dly - S;
      // Gornji-desni
      const urx = ulx + ANG_X;
      const ury = uly + ANG_Y;
      // Donji-desni
      const drx = dlx + ANG_X;
      const dry = dly + ANG_Y;
      const pts=`${dlx},${dly} ${ulx},${uly} ${urx},${ury} ${drx},${dry}`;
      elems.push(e("polygon",{key:`r${row}${depth}`,points:pts,
        fill:GRAY,stroke:LINE,strokeWidth:1.3}));
    }
  }

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg16_2022Aljeto(){
  const W=260,H=220;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  // Ishodište: x=0 bude na 1/3 od lijevog ruba (jer kružnica ide i lijevo od y-osi)
  const OX=105,OY=148,SZ=26;
  const elems=[];
  for(let i=-4;i<=5;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:8,x2:OX+i*SZ,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-2;j<=5;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SZ,x2:W-8,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+3,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-16,y:OY-SZ+4,fontSize:9,fill:"var(--muted)"},"1"));
  // Središte S = (0, 2) → piksel (OX, OY−2*SZ), r=3 → 3*SZ px
  const cx=OX, cy=OY-2*SZ, r=3*SZ;
  elems.push(e("circle",{key:"circ",cx,cy,r,fill:"none",stroke:_BLUE,strokeWidth:1.8}));
  elems.push(e("circle",{key:"S",cx,cy,r:3,fill:_RED}));
  elems.push(e("text",{key:"lS",x:cx+5,y:cy-4,fontSize:11,fill:_GOLD,fontStyle:"italic"},"S"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg13_2022Aljeto(){
  const W=240,H=230;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const V={x:120,y:18};
  const A={x:28,y:185},B={x:168,y:185},C={x:205,y:148},D={x:65,y:148};
  const ln=(p1,p2,k,col,w,dash)=>e("line",{key:k,x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,
    stroke:col||_BLUE,strokeWidth:w||1.5,strokeDasharray:dash||""});
  const tx=(x,y,t,k)=>e("text",{key:k,x,y,fontSize:11,fill:"var(--text)",fontStyle:"italic"},t);
  return e("svg",{viewBox:"0 0 240 230",style:{width:"100%",maxWidth:240,display:"block"}},
    ln(A,B,"ab"),ln(B,C,"bc"),
    ln(A,D,"ad","var(--muted)",1,"4,3"),ln(D,C,"dc","var(--muted)",1,"4,3"),
    ln(V,A,"va"),ln(V,B,"vb"),ln(V,C,"vc"),
    ln(V,D,"vd","var(--muted)",1,"4,3"),
    ln(D,B,"db","var(--muted)",1,"4,3"),
    tx(V.x-5,V.y-6,"V","lV"),tx(A.x-16,A.y+4,"A","lA"),
    tx(B.x+4,B.y+4,"B","lB"),tx(C.x+4,C.y+4,"C","lC"),tx(D.x-15,D.y+4,"D","lD"),
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: računaj redom (kalkulator u stupnjevima!) i zaokruži tek na kraju na 4 decimale.",topic:"trig",points:1,
   q:"Kolika je vrijednost broja 44 · sin 32° / sin 57° zaokružena na četiri decimale?",
   opts:["0,0101","27,8017","42,8108","55,6275"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Izračun: sin 32° ≈ 0,52992; sin 57° ≈ 0,83867."},
     {txt:"44 · sin 32° = 44 · 0,52992 ≈ 23,3163."},
     {txt:"23,3163 / 0,83867 ≈ 27,8017. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera redom veličine: sin 32° < sin 57°, pa razlomak nije premali; 44·0,5/0,8 ≈ 27,5 ≈ 27,8 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 0,0101 = sin razlika sin/sin direktno; C) ≈ 44·sin 32°·sin 57°; D) 44·tan 32° (krivi izračun).",note:"diagnostika", final:true},{txt:"Intuicija: sin 32° tek malo veći od sin 30° = 0,5; sin 57° blizu sin 60° ≈ 0,866.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin x raste na [0°, 90°]; vrijednosti — sin 30° = 0,5; sin 45° = √2/2 ≈ 0,707; sin 60° = √3/2 ≈ 0,866.",note:"postupak",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: sin x raste na [0°, 90°]; vrijednosti — sin 30° = 0,5; sin 45° = √2/2 ≈ 0,707; sin 60° = √3/2 ≈ 0,866.",
     "Intuicija: sin 32° tek malo veći od sin 30° = 0,5; sin 57° blizu sin 60° ≈ 0,866.",
     "Česta greška: kalkulator u radijanima umjesto stupnjeva → daje ≈ 0,01 (opcija A).",
     "Alt metoda (provjera): 44/sin 57° ≈ 52,46; pomnoži sa sin 32° ≈ 0,53 → ≈ 27,8 ✓"
   ,"Provjera redom veličine: sin 32° < sin 57°, pa razlomak nije premali; 44·0,5/0,8 ≈ 27,5 ≈ 27,8 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:2,type:"mc",warn:"Pazi: 1 m³ = 1000 dm³ = 1000 L; pretvaraš L u m³ → dijeli s 1000.",topic:"br",points:1,
   q:"Koliko je 20 litara izraženo u m³? Napomena: 1 litra = 1 dm³.",
   opts:["0,02 m³","0,2 m³","2 m³","20 m³"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Pretvorba: 1 dm³ = (0,1 m)³ = 10⁻³ m³; 1 m³ = 1000 dm³."},
     {txt:"20 L = 20 dm³ = 20 · 10⁻³ m³ = 0,02 m³. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera dimenzija: m³ je puno veća jedinica od L; 20 L < 1 m³ ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 0,2 m³ = 200 L; C) 2 m³ = 2000 L; D) 20 m³ = 20 000 L. Svi krivi po faktoru 10ⁿ.",note:"diagnostika", final:true},{txt:"Intuicija: kockica 1 dm × 1 dm × 1 dm = 1 L; tisuću takvih staje u m³.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 1 m = 10 dm, pa 1 m³ = 10³ dm³ = 1000 L; obratno 1 L = 10⁻³ m³.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: 1 m = 10 dm, pa 1 m³ = 10³ dm³ = 1000 L; obratno 1 L = 10⁻³ m³.",
     "Intuicija: kockica 1 dm × 1 dm × 1 dm = 1 L; tisuću takvih staje u m³.",
     "Česta greška: zaboraviti kub kod pretvorbe duljina → volumen (× 10, ne × 1000).",
     "Alt metoda (provjera): 20 L = 20 000 mL = 20 000 cm³; 1 m³ = 10⁶ cm³ → 20 000/10⁶ = 0,02 m³ ✓"
   ,"Provjera dimenzija: m³ je puno veća jedinica od L; 20 L < 1 m³ ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:3,type:"mc",warn:"Pazi: svedi sve na bazu 3 (9 = 3², 243 = 3⁵), pa zbroji/oduzmi eksponente.",topic:"exp",points:1,
   q:"Koji je od navedenih brojeva jednak broju (9⁻² · 243ᵃ) / 3ᵃ za svaki realni broj a?",
   opts:["9⁻ᵃ","9^(a−1)","81⁻ᵃ","81^(a−1)"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Sve svedi na bazu 3: 9 = 3², 243 = 3⁵, 81 = 3⁴."},
     {txt:"9⁻² = 3⁻⁴; 243ᵃ = 3^(5a); 3ᵃ = 3ᵃ."},
     {txt:"Brojnik: 3⁻⁴ · 3^(5a) = 3^(5a−4)."},
     {txt:"Razlomak: 3^(5a−4) / 3ᵃ = 3^(5a−4−a) = 3^(4a−4) = 3^(4(a−1)) = (3⁴)^(a−1) = 81^(a−1). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s a = 1: izvorni = (9⁻² · 243) / 3 = (1/81 · 243) / 3 = 3 / 3 = 1; 81⁰ = 1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 9⁻ᵃ = 3⁻²ᵃ (krivi eksponent); B) 9^(a−1) (krivi izračun s bazom 9); C) 81⁻ᵃ (krivi predznak).",note:"diagnostika", final:true},{txt:"Intuicija: izbor zajedničke baze (najmanja prosta — 3) pojednostavnjuje sve eksponente.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.",
     "Intuicija: izbor zajedničke baze (najmanja prosta — 3) pojednostavnjuje sve eksponente.",
     "Česta greška: krivi predznak (−4 + 5a − a vs +4 − 5a − a) ili krivi faktor pretvorbe (243 = 3⁵, ne 3⁴).",
     "Alt metoda (provjera): test s a = 2 — izvorni = (1/81·243²)/9 = (243²/81)/9 = 729/9 = 81 = 81¹ ✓"
   ,"Provjera s a = 1: izvorni = (9⁻² · 243) / 3 = (1/81 · 243) / 3 = 3 / 3 = 1; 81⁰ = 1 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:4,type:"mc",warn:"Pazi: razvij brojnik, a nazivnik 4y² − 1 = (2y − 1)(2y + 1) faktoriziraj pa skrati.",topic:"al",points:1,
   q:"Čemu je jednak brojnik do kraja skraćenoga razlomka ((2y − 1)² + 8y) / (4y² − 1) za sve y za koje je razlomak definiran?",
   opts:["2y − 1","2y + 1","4y − 1","4y + 1"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Razvij brojnik: (2y − 1)² + 8y = 4y² − 4y + 1 + 8y = 4y² + 4y + 1."},
     {txt:"Prepoznaj kao kvadrat: 4y² + 4y + 1 = (2y + 1)²."},
     {txt:"Razlika kvadrata u nazivniku: 4y² − 1 = (2y − 1)(2y + 1)."},
     {txt:"Razlomak: (2y + 1)² / ((2y − 1)(2y + 1)) = (2y + 1) / (2y − 1). Brojnik nakon kraćenja: 2y + 1. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s y = 1: izvorni = (1² + 8)/3 = 9/3 = 3; skraćeni = 3/1 = 3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 2y − 1 = brojnik prije razvoja (krivo prepoznavanje); C/D = (2y ± 1)² razvojem ne daje to.",note:"diagnostika", final:true},{txt:"Intuicija: traži zajedničke faktore — ovdje (2y + 1) se javlja u brojniku (kvadrat) i nazivniku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (a + b)² = a² + 2ab + b²; razlika kvadrata a² − b² = (a − b)(a + b).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: (a + b)² = a² + 2ab + b²; razlika kvadrata a² − b² = (a − b)(a + b).",
     "Intuicija: traži zajedničke faktore — ovdje (2y + 1) se javlja u brojniku (kvadrat) i nazivniku.",
     "Česta greška: pogrešno pretpostaviti da je brojnik (2y − 1)² + 8y razdjeljiv na (2y − 1) faktor.",
     "Alt metoda (provjera): test s y = 2 — izvorni = (3² + 16)/15 = 25/15 = 5/3; skraćeni = 5/3 ✓"
   ,"Provjera s y = 1: izvorni = (1² + 8)/3 = 9/3 = 3; skraćeni = 3/1 = 3 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:5,type:"mc",warn:"Pazi: dlaka je tisuću puta veća → množi promjer virusa s 1000; pripazi na jedinice (μm).",topic:"br",points:1,
   q:"Prosječni je promjer čestice virusa približno 0,12 μm. Njegov promjer odgovara otprilike tisućitomu dijelu promjera ljudske dlake. Koliki je promjer ljudske dlake prema tim podatcima izražen u metrima? Napomena: 1 μm = 10⁻⁶ m.",
   opts:["1,2·10⁻⁴ m","8,3·10⁻⁴ m","1,2·10⁻³ m","8,3·10⁻³ m"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Dlaka je 1000 puta veća od virusa: d_dlaka = 1000 · d_virus."},
     {txt:"d_virus = 0,12 μm = 0,12 · 10⁻⁶ m = 1,2 · 10⁻⁷ m."},
     {txt:"d_dlaka = 10³ · 1,2 · 10⁻⁷ = 1,2 · 10⁻⁴ m. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: ljudska dlaka ≈ 0,1 mm = 10⁻⁴ m (svakodnevno znanje) — opcija A se slaže ✓",note:"verifikacija"},
     {txt:"Distraktori: B/D s 8,3 = krivi smjer (8,3 ≈ 1/0,12); C = krivi eksponent (zaboraviti pretvorbu μm → m).",note:"diagnostika", final:true},{txt:"Intuicija: virusi su mikroskopski (~0,1 μm); ljudska dlaka je vidljiva (~0,1 mm = 100 μm).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prefiksi metričkog sustava — μ = 10⁻⁶; tisuću puta veće = ×10³.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: prefiksi metričkog sustava — μ = 10⁻⁶; tisuću puta veće = ×10³.",
     "Intuicija: virusi su mikroskopski (~0,1 μm); ljudska dlaka je vidljiva (~0,1 mm = 100 μm).",
     "Česta greška: zaboraviti pretvoriti μm u m; ili dijeliti umjesto množiti.",
     "Alt metoda (provjera): 0,12 μm × 1000 = 120 μm = 0,12 mm = 1,2 · 10⁻⁴ m ✓"
   ,"Provjera: ljudska dlaka ≈ 0,1 mm = 10⁻⁴ m (svakodnevno znanje) — opcija A se slaže ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:6,type:"mc",warn:"Pazi: broj uz t je nagib → koliko se h mijenja po 1 °C (predznak govori smjer promjene).",topic:"lin",points:1,
   q:"Funkcijom h(t) = 100 − 4t procjenjuje se broj sati h potrebnih da se mlijeko ukiseli na temperaturi t izraženoj u °C. Koje je značenje broja 4 u zapisu funkcije h?",
   opts:["Ako se temperatura poveća za 1 °C, mlijeko će se ukiseliti 1 sat ranije.","Ako se temperatura poveća za 4 °C, mlijeko će se ukiseliti 1 sat ranije.","Ako se temperatura poveća za 1 °C, mlijeko će se ukiseliti 4 sata ranije.","Ako se temperatura poveća za 4 °C, mlijeko će se ukiseliti 4 sata ranije."],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Linearna funkcija h(t) = 100 − 4t. Koeficijent uz t je −4."},
     {txt:"Negativan nagib znači: porast t za 1 jedinicu → pad h za 4 jedinice."},
     {txt:"Dakle: porast temperature za 1 °C → mlijeko se ukiseli 4 sata RANIJE. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: t = 0 → h = 100 h; t = 1 → h = 96 h; razlika 4 sata ranije po 1 °C ✓",note:"verifikacija"},
     {txt:"Distraktori: A i B brkaju koeficijent (1 umjesto 4 ili obrnuto); D — '4 °C → 4 sata' brka jedinice.",note:"diagnostika", final:true},{txt:"Intuicija: negativan koeficijent = inverzni odnos (kad jedno raste, drugo pada).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u linearnoj funkciji y = kx + n, koeficijent k = 'kako se y mijenja po jedinici x'.",note:"postupak",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u linearnoj funkciji y = kx + n, koeficijent k = 'kako se y mijenja po jedinici x'.",
     "Intuicija: negativan koeficijent = inverzni odnos (kad jedno raste, drugo pada).",
     "Česta greška: izgubiti smjer (pad/rast) ili krivi omjer jedinica.",
     "Alt metoda (provjera): h(10) = 60 sati, h(11) = 56 sati — razlika 4 sata za +1 °C ✓"
   ,"Provjera: t = 0 → h = 100 h; t = 1 → h = 96 h; razlika 4 sata ranije po 1 °C ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:7,type:"mc",warn:"Pazi: postavi sustav dviju jednadžbi (po danu) s dvije nepoznanice (cijena košnje, cijena branja).",topic:"al",points:1,
   q:"Marko se zaposlio u voćnjaku gdje je plaćen po satu ovisno o poslu koji obavlja. Prvoga je dana za 3 sata košnje voćnjaka i 4 sata branja jabuka plaćen 180 kuna, a drugoga dana za 2 sata košnje voćnjaka i 6 sati branja jabuka 220 kuna. Koji je posao više plaćen i za koliko?",
   opts:["branje jabuka, za 12,5 kn","košnja voćnjaka, za 12,5 kn","branje jabuka, za 10 kn","košnja voćnjaka, za 10 kn"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Sustav jednadžba: k = satnica košnje, j = satnica branja. 3k + 4j = 180; 2k + 6j = 220."},
     {txt:"Eliminacija: 1. × 2 → 6k + 8j = 360; 2. × 3 → 6k + 18j = 660. Oduzmi: 10j = 300 → j = 30 kn/h."},
     {txt:"Iz prve: 3k = 180 − 4·30 = 60 → k = 20 kn/h."},
     {txt:"Branje (30) > Košnja (20); razlika 10 kn. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: dan 1: 3·20 + 4·30 = 60 + 120 = 180 ✓; dan 2: 2·20 + 6·30 = 40 + 180 = 220 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B s 12,5 = krivo izračunato; D = krivi smjer (košnja je manje plaćena).",note:"diagnostika", final:true},{txt:"Intuicija: eliminacija — pomnoži jednadžbe tako da koeficijent jedne varijable bude isti, pa oduzmi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva tipa rada × dva dana → sustav 2×2 sa satnicama kao nepoznanicama.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: dva tipa rada × dva dana → sustav 2×2 sa satnicama kao nepoznanicama.",
     "Intuicija: eliminacija — pomnoži jednadžbe tako da koeficijent jedne varijable bude isti, pa oduzmi.",
     "Česta greška: pomiješati varijable (k i j); krivo postaviti jednadžbu (oboje na lijevoj strani).",
     "Alt metoda (provjera): supstitucija iz prve k = (180 − 4j)/3 → uvrsti u drugu — daje j = 30 ✓"
   ,"Provjera: dan 1: 3·20 + 4·30 = 60 + 120 = 180 ✓; dan 2: 2·20 + 6·30 = 40 + 180 = 220 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:8,type:"mc",warn:"Pazi: označi ušteđeno s x; ukupno = x + 2x + 500; sastavi jednadžbu prema uvjetu.",topic:"al",points:1,
   q:"Katja je uštedjela određeni iznos novca u kunama. Majka joj je dala dvostruko više od ušteđenoga iznosa, a otac je dodao još 500 kuna. Koliko je kuna Katja imala ušteđeno ako je na kraju imala više od peterostruke vrijednosti iznosa koji je uštedjela na početku?",
   opts:["manje od 250","točno 250","više od 250 i manje od 500","više od 500"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Označi x = početna ušteđevina. Konačni iznos: x + 2x + 500 = 3x + 500."},
     {txt:"Uvjet: 3x + 500 > 5x → 500 > 2x → x < 250."},
     {txt:"Stoga x je strogo manji od 250. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 200: konačno = 1100; 5x = 1000. 1100 > 1000 ✓; za x = 250: 1250 = 1250 → NIJE strogo veće ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 'točno 250' = granica, ali jednakost ne zadovoljava 'više od'; C/D = krivi smjer nejednakosti.",note:"diagnostika", final:true},{txt:"Intuicija: postavi konačni iznos kao linearnu funkciju od x; usporedi s 5x.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'više od' = strogo > (otvoreni uvjet); 'najmanje' = ≥; 'najviše' = ≤.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: 'više od' = strogo > (otvoreni uvjet); 'najmanje' = ≥; 'najviše' = ≤.",
     "Intuicija: postavi konačni iznos kao linearnu funkciju od x; usporedi s 5x.",
     "Česta greška: brkati '5x' s 'pet puta više' (= 6x); ili obrnuti smjer nejednakosti.",
     "Alt metoda (provjera): konačno > 5x ⟺ 3x + 500 > 5x ⟺ 500 > 2x ⟺ x < 250 ✓"
   ,"Provjera s x = 200: konačno = 1100; 5x = 1000. 1100 > 1000 ✓; za x = 250: 1250 = 1250 → NIJE strogo veće ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:9,type:"mc",warn:"Pazi: uvrsti zadani y, izoliraj log₂(...) pa primijeni definiciju logaritma (2 na potenciju).",topic:"exp",points:1,
   q:"Očekivana količina prodanih proizvoda y = 160 + 10·log₂(200x + 1) ovisi o iznosu novca x u kunama uloženom za reklamiranje toga proizvoda. Koliko kuna treba uložiti u reklamiranje toga proizvoda da bi se prodalo 160 proizvoda?",
   opts:["0 kn","100 kn","500 kn","1000 kn"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Postavi jednadžbu: 160 = 160 + 10·log₂(200x + 1)."},
     {txt:"Oduzmi 160: 0 = 10·log₂(200x + 1) → log₂(200x + 1) = 0."},
     {txt:"log_b(z) = 0 ⟺ z = 1 → 200x + 1 = 1 → x = 0. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: x = 0 → y = 160 + 10·log₂(1) = 160 + 0 = 160 ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D = vrijednosti koje izgledaju 'razumne' za reklamu, ali daju y > 160.",note:"diagnostika", final:true},{txt:"Intuicija: bez ulaganja u reklamu već se prodaje 160 — formula opisuje BONUS od reklame.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log_b(z) = 0 ⟺ z = 1 (za bilo koju bazu b > 0, b ≠ 1).",note:"postupak",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: log_b(z) = 0 ⟺ z = 1 (za bilo koju bazu b > 0, b ≠ 1).",
     "Intuicija: bez ulaganja u reklamu već se prodaje 160 — formula opisuje BONUS od reklame.",
     "Česta greška: pokušati računati log nekih većih vrijednosti umjesto prepoznati da log = 0 ⟺ argument = 1.",
     "Alt metoda (provjera): za x = 100, y = 160 + 10·log₂(20 001) ≈ 160 + 143 = 303 — puno više od 160 ✓"
   ,"Provjera: x = 0 → y = 160 + 10·log₂(1) = 160 + 0 = 160 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:10,type:"mc",warn:"Pazi: svedi na istu bazu (100 = 10², 0,008 = 8·10⁻³) pa izjednači eksponente.",topic:"exp",points:1,
   q:"U kojemu se intervalu nalazi rješenje jednadžbe 8 · 100^(x+2) = 0,008?",
   opts:["⟨−∞, −3⟩","⟨−3, −1⟩","⟨−1, 3⟩","⟨3, +∞⟩"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Podijeli s 8: 100^(x+2) = 0,001 = 10⁻³."},
     {txt:"100 = 10² → 100^(x+2) = 10^(2(x+2)) = 10^(2x+4)."},
     {txt:"Izjednači eksponente: 2x + 4 = −3 → 2x = −7 → x = −3,5."},
     {txt:"−3,5 ∈ ⟨−∞, −3⟩. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 8 · 100^(−1,5) = 8 · 1/100^(1,5) = 8/1000 = 0,008 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) −3 je granica intervala ⟨−3, −1⟩, ali x = −3,5 < −3 (van); C/D = krivi izračun.",note:"diagnostika", final:true},{txt:"Intuicija: svedi obje strane na istu bazu (10 je najprirodnija — i 100 i 0,008 su potencije od 10).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵘ = aᵛ → u = v (jednakost baza znači jednakost eksponenata).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: aᵘ = aᵛ → u = v (jednakost baza znači jednakost eksponenata).",
     "Intuicija: svedi obje strane na istu bazu (10 je najprirodnija — i 100 i 0,008 su potencije od 10).",
     "Česta greška: zaboraviti podijeliti s 8; ili krivo eksponentirati 100 = 10².",
     "Alt metoda (provjera): logaritmiraj — log(8 · 100^(x+2)) = log(0,008) → log 8 + 2(x+2) = −3 → x = −3,5 ✓"
   ,"Provjera: 8 · 100^(−1,5) = 8 · 1/100^(1,5) = 8/1000 = 0,008 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:11,type:"mc",warn:"Pazi: koliko ima lozinki od 5 JEDNAKIH znamenaka? Vjerojatnost = 1 / (broj takvih lozinki).",topic:"komb",points:1,
   q:"Znamo da se lozinka sastoji od pet jednakih znamenaka. Kolika je vjerojatnost da pogodimo lozinku iz prvoga pokušaja?",
   opts:["0,1","0,2","0,5","0,9"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Mogućnosti 'pet jednakih znamenaka': 00000, 11111, 22222, …, 99999 — ukupno 10 mogućnosti."},
     {txt:"Povoljan ishod: točna lozinka — 1."},
     {txt:"P = povoljni / svi = 1/10 = 0,1. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: znamenke 0–9 ima 10 različitih, svaka ponovljena 5 puta = 10 varijanti ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 0,2 = krivo s 5 mogućnosti; C) 0,5 = bez razumijevanja prostora; D) 0,9 = vjer. NE pogoditi.",note:"diagnostika", final:true},{txt:"Intuicija: 'pet istih znamenaka' ima jednako varijanti kao i 'jedna znamenka' — samo 10 mogućih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: klasična vjerojatnost P(A) = |A| / |Ω| (povoljni / svi).",note:"postupak",final:true},{txt:"Provjera: C(n, k) = C(n, n−k) — simetrija binomnog koeficijenta.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: klasična vjerojatnost P(A) = |A| / |Ω| (povoljni / svi).",
     "Intuicija: 'pet istih znamenaka' ima jednako varijanti kao i 'jedna znamenka' — samo 10 mogućih.",
     "Česta greška: računati 10⁵ ukupnih lozinki (svih nizova) — ali zadatak ograničava na 'jednake'.",
     "Alt metoda (provjera): nabroji eksplicitno svih 10 lozinki — 00000 … 99999 ✓"
   ,"Provjera: znamenke 0–9 ima 10 različitih, svaka ponovljena 5 puta = 10 varijanti ✓","Tipičan propust: pomiješati permutacije (poredak bitan, sve elemente), varijacije (poredak bitan, ne sve) i kombinacije (poredak nebitan)."]
  },
  {id:12,type:"mc",warn:"Pazi: R = a/(2 sin α) (poučak o sinusu) ili R = abc/(4P) — provjeri što je zadano.",topic:"geom",points:1,
   q:"Čemu je jednaka duljina polumjera kružnice opisane trokutu?",
   opts:["udaljenosti od sjecišta težišnica trokuta do vrha trokuta","udaljenosti od sjecišta simetrala kutova trokuta do vrha trokuta","udaljenosti od sjecišta simetrala stranica trokuta do vrha trokuta","udaljenosti od sjecišta pravaca kojima pripadaju visine trokuta do vrha trokuta"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Karakteristične točke trokuta: težište (sjecište težišnica), središte upisane (sjecište simetrala kutova), središte opisane (sjecište simetrala stranica), ortocentar (sjecište visina)."},
     {txt:"Opisana kružnica prolazi kroz sva tri vrha trokuta — njezino središte je jednako udaljeno od svih vrhova."},
     {txt:"Simetrala stranice = skup točaka jednako udaljenih od krajeva te stranice; sjecište triju simetrala stranica je jednako udaljeno od svih triju vrhova → središte opisane kružnice."},
     {txt:"Polumjer opisane R = udaljenost središta (sjecišta simetrala stranica) do bilo kojeg vrha. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: definicija simetrale stranice direktno daje točku jednako udaljenu od oba krajnja vrha; presjek triju daje jednako udaljenost od sva tri ✓",note:"verifikacija"},
     {txt:"Distraktori: A) težište (jednako za stranice, ne za vrhove); B) središte upisane (jednako od stranica, ne od vrhova); D) ortocentar.",note:"diagnostika", final:true},{txt:"Intuicija: simetrala stranice 'sve točke jednako udaljene od dva vrha'; sjecište triju → jednako udaljeno od sva tri.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opisana kružnica prolazi kroz vrhove → polumjer R = udaljenost središta do vrha; središte = sjecište simetrala stranica.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: opisana kružnica prolazi kroz vrhove → polumjer R = udaljenost središta do vrha; središte = sjecište simetrala stranica.",
     "Intuicija: simetrala stranice 'sve točke jednako udaljene od dva vrha'; sjecište triju → jednako udaljeno od sva tri.",
     "Česta greška: brkati 'upisanu' (jednako od stranica) s 'opisanom' (od vrhova).",
     "Alt metoda (provjera): za jednakostraničan trokut sve četiri točke se podudaraju — ali za općeniti su različite."
   ,"Provjera: definicija simetrale stranice direktno daje točku jednako udaljenu od oba krajnja vrha; presjek triju daje jednako udaljenost od sva tri ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:13,img:true,type:"mc",warn:"Pazi: bridovi koji se ne sijeku i nisu u istoj ravnini su MIMOILAZNI — vizualiziraj piramidu.",topic:"geom",points:1,
   q:"U kojemu su odnosu pravci koji sadrže bridove BC i VD piramide ABCDV sa skice?",
   opts:["Sijeku se.","Podudaraju se.","Usporedni su.","Mimosmjerni su."],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz skice: ABCD je baza piramide u jednoj ravnini; V je vrh izvan te ravnine."},
     {txt:"BC je brid baze (leži u ravnini baze); VD je bočni brid (povezuje vrh V s vrhom D baze, ne leži u ravnini baze)."},
     {txt:"Provjeri sijeku li se: B i C su u ravnini baze; V i D — D je u ravnini, V izvan. Pravci BC i VD su u različitim ravninama bez zajedničke točke."},
     {txt:"Pravci u prostoru koji ne leže u istoj ravnini i ne sijeku se = MIMOSMJERNI. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: pravac VD prolazi kroz V (izvan baze), pa ne može biti u ravnini baze; ne sijeku se s BC ni nisu paralelni ✓",note:"verifikacija"},
     {txt:"Distraktori: A) ne sijeku se (V izvan baze); B) ne podudaraju se; C) nisu usporedni (jer su u različitim ravninama).",note:"diagnostika", final:true},{txt:"Intuicija: BC u 'podu' piramide; VD ide od 'poda' do 'vrha' — različite ravnine, ne sijeku se.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravci u prostoru — sijeku se (1 zajednička točka), podudaraju (svi), paralelni (nemaju, ali u istoj ravnini), MIMOSMJERNI (nemaju i nisu u istoj ravnini).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: pravci u prostoru — sijeku se (1 zajednička točka), podudaraju (svi), paralelni (nemaju, ali u istoj ravnini), MIMOSMJERNI (nemaju i nisu u istoj ravnini).",
     "Intuicija: BC u 'podu' piramide; VD ide od 'poda' do 'vrha' — različite ravnine, ne sijeku se.",
     "Česta greška: pretpostaviti da se bilo koja dva pravca u piramidi 'sigurno sijeku ili paralelni'.",
     "Alt metoda (provjera): postavi koordinatni sustav — ABCD u xy-ravnini, V iznad; pravci BC i VD nemaju zajedničke točke."
   ,"Provjera: pravac VD prolazi kroz V (izvan baze), pa ne može biti u ravnini baze; ne sijeku se s BC ni nisu paralelni ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:14,type:"mc",warn:"Pazi: nagib = (1 − (−3))/(1 − 0); odsječak na y očitaj iz točke B (x = 0).",topic:"lin",points:1,
   q:"Kojemu pravcu pripadaju točke A(1, 1) i B(0, −3)?",
   opts:["y = −2x + 3","y = −(1/4)x − 3","y = (1/2)x + 3","y = 4x − 3"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz dvije točke: k = (y₂ − y₁)/(x₂ − x₁); l = y-presjek (vrijednost u x = 0)."},
     {txt:"k = (1 − (−3))/(1 − 0) = 4/1 = 4."},
     {txt:"l: iz B(0, −3) → l = −3 (jer je B na y-osi)."},
     {txt:"Pravac: y = 4x − 3. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera A(1, 1): y = 4·1 − 3 = 1 ✓; B(0, −3): y = 4·0 − 3 = −3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/C imaju krive nagibe (−2, −1/4, 1/2); brza provjera uvrštavanjem A i B u svaku opciju.",note:"diagnostika", final:true},{txt:"Intuicija: kroz dvije različite točke ide jedinstven pravac.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednadžba pravca y = kx + l; k = nagib (rast/pad); l = y-presjek.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: jednadžba pravca y = kx + l; k = nagib (rast/pad); l = y-presjek.",
     "Intuicija: kroz dvije različite točke ide jedinstven pravac.",
     "Česta greška: krivi smjer oduzimanja (y₂ − y₁ vs y₁ − y₂); ili pomiješati k i l.",
     "Alt metoda (provjera): uvrsti obje točke u svaku opciju — samo D zadovoljava obje."
   ,"Provjera A(1, 1): y = 4·1 − 3 = 1 ✓; B(0, −3): y = 4·0 − 3 = −3 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:15,type:"mc",warn:"Pazi: izjednači komponente (i i j zasebno) → dvije jednadžbe; riješi po k.",topic:"anal",points:1,
   q:"Zadani su vektori a⃗ = i⃗ + 2j⃗, b⃗ = 2i⃗ − j⃗ i c⃗ = −3i⃗ + 4j⃗. Kolika je vrijednost parametra k ako vrijedi a⃗ + kb⃗ = c⃗?",
   opts:["−2","−1","1","2"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Vektorska jednadžba a⃗ + kb⃗ = c⃗ → komponente: (1 + 2k, 2 − k) = (−3, 4)."},
     {txt:"i-komponenta: 1 + 2k = −3 → 2k = −4 → k = −2."},
     {txt:"Provjeri j-komponentu: 2 − (−2) = 4 ✓. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera vektorski: a⃗ + (−2)b⃗ = (1, 2) + (−4, 2) = (−3, 4) = c⃗ ✓",note:"verifikacija"},
     {txt:"Distraktori: B) −1 daje (−1, 3) ≠ c⃗; C) 1 daje (3, 1); D) 2 daje (5, 0).",note:"diagnostika", final:true},{txt:"Intuicija: vektorska jednadžba je sustav dviju skalarnih jednadžbi (jedna po komponenti).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednakost vektora ⟺ jednakost svih komponenti zasebno.",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: jednakost vektora ⟺ jednakost svih komponenti zasebno.",
     "Intuicija: vektorska jednadžba je sustav dviju skalarnih jednadžbi (jedna po komponenti).",
     "Česta greška: provjeriti samo i-komponentu i zaboraviti j (možda nema rješenja).",
     "Alt metoda (provjera): iz j-jednadžbe 2 − k = 4 → k = −2 (isti rezultat — sustav je konzistentan)."
   ,"Provjera vektorski: a⃗ + (−2)b⃗ = (1, 2) + (−4, 2) = (−3, 4) = c⃗ ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:16,img:true,type:"mc",warn:"Pazi: očitaj središte i polumjer sa slike pa uvrsti u (x − p)² + (y − q)² = r².",topic:"anal",points:1,
   q:"Koja je jednadžba prikazane kružnice?",
   opts:["x² + (y + 2)² = 9","x² + (y − 2)² = 9","(x + 2)² + y² = 9","(x − 2)² + y² = 9"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz slike: središte kružnice na y-osi (x = 0), na visini y = 2 → S(0, 2)."},
     {txt:"Polumjer: r = 3 (iz slike)."},
     {txt:"Standardni oblik: (x − p)² + (y − q)² = r²; ovdje p = 0, q = 2, r = 3."},
     {txt:"Jednadžba: x² + (y − 2)² = 9. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s točkama: (0, 5) na kružnici — 0 + (5−2)² = 9 ✓; (3, 2) — 9 + 0 = 9 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) S(0, −2) — kružnica niže; C/D) S(±2, 0) — kružnica na x-osi.",note:"diagnostika", final:true},{txt:"Intuicija: predznak ispred koordinate u zagradi je SUPROTAN predznaku koordinate središta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: standardni oblik kružnice (x − p)² + (y − q)² = r²; središte (p, q), polumjer r.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: standardni oblik kružnice (x − p)² + (y − q)² = r²; središte (p, q), polumjer r.",
     "Intuicija: predznak ispred koordinate u zagradi je SUPROTAN predznaku koordinate središta.",
     "Česta greška: pomiješati (x − 2) (središte u +2) i (x + 2) (središte u −2).",
     "Alt metoda (provjera): test krajnjih točaka kružnice u jednadžbi — sve moraju zadovoljiti."
   ,"Provjera s točkama: (0, 5) na kružnici — 0 + (5−2)² = 9 ✓; (3, 2) — 9 + 0 = 9 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:17,type:"mc",warn:"Pazi: dijagonale se raspolavljaju; promatraj trokut s polovicama dijagonala i kutom 68°.",topic:"trig",points:1,
   q:"Duljina jedne stranice pravokutnika iznosi 9 cm, a druga se iz sjecišta dijagonala vidi pod kutom od 68°. Kolika je duljina druge stranice pravokutnika?",
   opts:["3,63 cm","5,03 cm","6,07 cm","7,46 cm"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Sjecište dijagonala je središte pravokutnika; trokut s dvjema polovicama dijagonala i jednom stranicom je jednakokračan."},
     {txt:"Označi: stranica a = 9 cm, stranica b = ?, kut s vrha = 68° (između polovica dijagonala)."},
     {txt:"U jednakokračnom trokutu okomica iz vrha dijeli osnovicu (stranicu) i kut na dva jednaka dijela: polukut 34°, polustranica a/2 = 4,5."},
     {txt:"tan 34° = (a/2) / (b/2) = a/b → b = 9 / tan 34° ≈ 9 / 0,6745 ≈ 13,34. ALI to nije rezultat."},
     {txt:"Provjera interpretacije: 'druga se iz sjecišta vidi pod 68°' — kut između dijagonala uz STRANICU b (gledana stranica). Onda je b nasuprot kutu 68°, polovica b je nasuprot 34° iz pravokutnog trokuta s polovicom a. tan 34° = (b/2)/(a/2) → b = a · tan 34° ≈ 9 · 0,6745 ≈ 6,07 cm. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera dimenzionalno: ako se manja stranica vidi pod manjim kutom — ne, ovdje kut 68° je između dijagonala, koje povezuju duže dijagonale. Računski 6,07 < 9 — moguće za užu stranicu ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 3,63 = krivi izračun s kutom 22° (180/2 − 68); B) 5,03 = krivi sin/cos; D) 7,46 ≈ 9 · cos 34° (krivi izračun).",note:"diagnostika", final:true},{txt:"Intuicija: trokut s dvjema polovicama dijagonala i stranicom je jednakokračan; visina iz vrha (sjecišta) raspolavlja stranicu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutniku polovice dijagonala su jednake (jer su dijagonale jednake i sijecišu se na polovici).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u pravokutniku polovice dijagonala su jednake (jer su dijagonale jednake i sijecišu se na polovici).",
     "Intuicija: trokut s dvjema polovicama dijagonala i stranicom je jednakokračan; visina iz vrha (sjecišta) raspolavlja stranicu.",
     "Česta greška: pomiješati 'kut nasuprot stranici' s 'kutom uz stranicu'; krivo postaviti tan.",
     "Alt metoda (provjera): za pravokutnik a × b s 9 × 6,07 — dijagonala ≈ 10,86; kut tan(θ) = 6,07/9 ≈ 0,675 → θ ≈ 34°; dvostruki kut 68° ✓"
   ,"Provjera interpretacije: 'druga se iz sjecišta vidi pod 68°' — kut između dijagonala uz STRANICU b (gledana stranica). Onda je b nasuprot kutu 68°, polovica b je nasuprot 34° iz pravokutnog trokuta s ","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:18,type:"mc",warn:"Pazi: primijeni poučak o sinusima u trokutu kojeg čine dijagonala, krak i osnovica.",topic:"trig",points:1,
   q:"Dijagonala jednakokračnoga trapeza duljine 15 cm dijeli unutarnji kut trapeza na dijelove mjera 25° i 110°. Kolika je duljina kraka trapeza?",
   opts:["6,34 cm","8,97 cm","19,93 cm","25,09 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Dijagonala dijeli unutarnji kut trapeza na 25° (uz dulju bazu) i 110° (uz krak)."},
     {txt:"U trokutu s dijagonalom: kut 25° kod baze, kut 110° gore (nasuprot kraku), treći kut = 180° − 25° − 110° = 45° (kod druge baze)."},
     {txt:"Sinusov poučak: krak / sin(uz krak nasuprotni kut) = dijagonala / sin 110°."},
     {txt:"Pravilo nasuprotnih: krak je nasuprot kutu 25° (jer dijagonala dijeli na 25° i 110°, krak je 'na strani' kutu 25°)."},
     {txt:"krak / sin 25° = 15 / sin 45° → krak = 15 · sin 25° / sin 45° ≈ 15 · 0,4226 / 0,7071 ≈ 8,97 cm. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s zbrojem kutova: 25° + 110° + 45° = 180° ✓",note:"verifikacija"},
     {txt:"Distraktori: A) ≈ 6,34 = 15 · sin 25°/sin 60° (krivi treći kut); C/D = krivi sinusov omjer.",note:"diagnostika", final:true},{txt:"Intuicija: dijagonala trapeza dijeli ga na dva trokuta; u jednom je kut između baze i dijagonale.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — a/sin A = b/sin B u svakom trokutu.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — a/sin A = b/sin B u svakom trokutu.",
     "Intuicija: dijagonala trapeza dijeli ga na dva trokuta; u jednom je kut između baze i dijagonale.",
     "Česta greška: pomiješati koja je stranica nasuprot kojem kutu.",
     "Alt metoda (provjera): treći kut (45°) je nasuprot baze; krak je dulji ili kraći ovisno o omjeru sinusa — 8,97 < 15 jer sin 25° < sin 45° ✓"
   ,"Provjera s zbrojem kutova: 25° + 110° + 45° = 180° ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:19,type:"mc",warn:"Pazi: iz opsega baze 2πr nađi r; visina je jednaka r → uvrsti u V = r²πh.",topic:"geom",points:1,
   q:"Koliki je volumen valjka kojemu je opseg baze 6π cm, a polumjer jednak visini?",
   opts:["9π cm³","12π cm³","18π cm³","27π cm³"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Opseg baze: O = 2πr = 6π → r = 3 cm."},
     {txt:"h = r = 3 cm (zadano)."},
     {txt:"Volumen valjka: V = πr²h = π · 9 · 3 = 27π cm³. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera dimenzija: cm² · cm = cm³ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 9π = πr² (samo baza); B) 12π = neki krivi izračun; C) 18π = krivi r.",note:"diagnostika", final:true},{txt:"Intuicija: opseg = 2πr direktno daje r; ostalo je supstitucija.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: volumen valjka V = πr²h (baza × visina).",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: volumen valjka V = πr²h (baza × visina).",
     "Intuicija: opseg = 2πr direktno daje r; ostalo je supstitucija.",
     "Česta greška: brkati opseg s baza-površinom (πr² vs 2πr).",
     "Alt metoda (provjera): r = 6π/(2π) = 3; V = π·3²·3 = 27π ✓"
   ,"Provjera dimenzija: cm² · cm = cm³ ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:20,img:true,type:"mc",warn:"Pazi: brid male kockice = ∛6,859; velika kocka je 3× toliko; oplošje = 6·(brid velike)².",topic:"geom",points:1,
   q:"Koliko je oplošje Rubikove kocke ako je volumen jedne kockice od kojih se ona sastoji 6,859 cm³?",
   opts:["149,29 cm²","185,19 cm²","194,94 cm²","584,82 cm²"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Volumen male kocke: V = a³ → a = ∛6,859 = 1,9 cm (provjera: 1,9³ = 6,859)."},
     {txt:"Rubikova kocka je 3×3×3, brid velike kocke A = 3·a = 3·1,9 = 5,7 cm."},
     {txt:"Oplošje kocke: P = 6·A² = 6·5,7² = 6·32,49 = 194,94 cm². Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 5,7² = 32,49 ✓; 6·32,49 = 194,94 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 149,29 ≈ 6·(5)² (krivi brid); B) 185,19; D) 584,82 = 3·P (krivi broj stranica).",note:"diagnostika", final:true},{txt:"Intuicija: Rubikova 3×3×3 — velika kocka brida 3·a (a = brid male).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: oplošje kocke P = 6a² (6 jednakih kvadratnih strana).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: oplošje kocke P = 6a² (6 jednakih kvadratnih strana).",
     "Intuicija: Rubikova 3×3×3 — velika kocka brida 3·a (a = brid male).",
     "Česta greška: koristiti brid male kocke umjesto velike; ili krivi broj stranica.",
     "Alt metoda (provjera): brid male ∛6,859 = 1,9; velika 5,7; P = 6·32,49 ≈ 195 ✓"
   ,"Provjera: 5,7² = 32,49 ✓; 6·32,49 = 194,94 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:21,type:"mc",warn:"Pazi: podijeli brojnik i nazivnik s n → 1/(2 + 3/n); član 3/n teži 0.",topic:"lim",points:1,
   q:"Koliko je lim_{n→∞} n/(2n + 3)?",
   opts:["0","1/5","1/2","∞"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Limes oblika ∞/∞; podijeli brojnik i nazivnik s n (najvišom potencijom)."},
     {txt:"n/(2n + 3) = 1/(2 + 3/n)."},
     {txt:"n → ∞ ⇒ 3/n → 0 ⇒ nazivnik → 2."},
     {txt:"lim = 1/2. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera za velike n: n = 1000 → 1000/2003 ≈ 0,4993 ≈ 0,5 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 0 = krivi smjer (kao 1/n); B) 1/5 = krivi koeficijent; D) ∞ = krivi smjer.",note:"diagnostika", final:true},{txt:"Intuicija: za n → ∞, konstanta (+3) postaje 'zanemariva' u odnosu na 2n.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za racionalni izraz s istim stupnjem brojnika i nazivnika, limes = omjer vodećih koeficijenata.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za racionalni izraz s istim stupnjem brojnika i nazivnika, limes = omjer vodećih koeficijenata.",
     "Intuicija: za n → ∞, konstanta (+3) postaje 'zanemariva' u odnosu na 2n.",
     "Česta greška: zaboraviti dijeljenje s n; ili krivi vodeći koeficijent.",
     "Alt metoda (provjera): L'Hôpitalovo pravilo — d/dn(n) / d/dn(2n + 3) = 1/2 ✓"
   ,"Provjera za velike n: n = 1000 → 1000/2003 ≈ 0,4993 ≈ 0,5 ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:22,type:"mc",warn:"Pazi: minimum (y tjemena) parabole jednak je 5; nađi tjeme i izjednači s 5.",topic:"kv",points:1,
   q:"Kolika je vrijednost realnoga parametra k u zapisu funkcije f(x) = x² − 2x + k kojoj je slika interval [5, +∞⟩?",
   opts:["k = 4","k = 5","k = 6","k = 7"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Parabola otvorena nagore (a = 1 > 0); slika [y_min, +∞⟩ gdje je y_min = vrijednost u tjemenu."},
     {txt:"Tjeme: x_v = −b/(2a) = 2/2 = 1; y_v = f(1) = 1 − 2 + k = k − 1."},
     {txt:"Uvjet y_v = 5 → k − 1 = 5 → k = 6. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: f(x) = x² − 2x + 6 = (x − 1)² + 5 — tjeme (1, 5); slika [5, +∞⟩ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 4 = krivo (zaboraviti −b); B) 5 = direktno k = y_v; D) 7.",note:"diagnostika", final:true},{txt:"Intuicija: parabola otvorena nagore — najniža točka je tjeme.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",note:"postupak",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",
     "Intuicija: parabola otvorena nagore — najniža točka je tjeme.",
     "Česta greška: zaboraviti pomak x_v ≠ 0 zbog linearnog člana.",
     "Alt metoda (provjera): completiranje kvadrata x² − 2x + k = (x − 1)² + (k − 1) → minimum k − 1 = 5 → k = 6 ✓"
   ,"Provjera: f(x) = x² − 2x + 6 = (x − 1)² + 5 — tjeme (1, 5); slika [5, +∞⟩ ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:23,type:"mc",warn:"Pazi: racionalna funkcija — promatraj predznak derivacije; pazi na prekid u x = −2.",topic:"lin",points:1,
   q:"Odredite sve intervale rasta funkcije f(x) = (3x − 5)/(x + 2).",
   opts:["⟨−∞, −2⟩, ⟨−2, +∞⟩","⟨−∞, 2⟩, ⟨2, +∞⟩","⟨2, +∞⟩","ℝ"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Domena: x + 2 ≠ 0 → x ≠ −2; domena = ℝ \\ {−2}."},
     {txt:"f'(x) iz pravila kvocijenta: f'(x) = [3(x + 2) − (3x − 5)]/(x + 2)² = (3x + 6 − 3x + 5)/(x + 2)² = 11/(x + 2)²."},
     {txt:"f'(x) = 11/(x + 2)² > 0 za sve x ≠ −2 (jer kvadrat je pozitivan)."},
     {txt:"Funkcija raste na svakom dijelu domene posebno: ⟨−∞, −2⟩ i ⟨−2, +∞⟩ (domena nije povezana). Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: f(−3) = −14/(−1) = 14; f(−2,5) = −12,5/(−0,5) = 25 — raste ✓; ali f(−3) ≠ f(0) nije isti dio.",note:"verifikacija"},
     {txt:"Distraktori: D) ℝ = ne uzima u obzir prekid u x = −2; B/C = krivi prekid (2 umjesto −2).",note:"diagnostika", final:true},{txt:"Intuicija: vertikalna asimptota razdvaja graf u dva dijela; rast vrijedi na svakom posebno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: funkcija raste ako f'(x) > 0; intervali rasta su povezane podskupine domene.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: funkcija raste ako f'(x) > 0; intervali rasta su povezane podskupine domene.",
     "Intuicija: vertikalna asimptota razdvaja graf u dva dijela; rast vrijedi na svakom posebno.",
     "Česta greška: dati ℝ — zaboraviti prekid u x = −2.",
     "Alt metoda (provjera): hiperbola y = (3x − 5)/(x + 2) ima asimptote x = −2 (vertikalna) i y = 3 (horizontalna)."
   ,"Provjera: f(−3) = −14/(−1) = 14; f(−2,5) = −12,5/(−0,5) = 25 — raste ✓; ali f(−3) ≠ f(0) nije isti dio.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:24,type:"mc",warn:"Pazi: razmnoži (n + 1)(n − 2) pa pojednostavi cijeli izraz — pazi na predznake.",topic:"br",points:1,
   q:"Koja od navedenih tvrdnja vrijedi za izraz (n + 1)(n − 2) − n² − 2n − 1, gdje je n prirodni broj?",
   opts:["Vrijednost je izraza za svaki prirodni broj n paran broj.","Vrijednost je izraza za svaki prirodni broj n djeljiva s 3.","Vrijednost je izraza za neki prirodni broj n jednaka 0.","Vrijednost je izraza za neki prirodni broj n pozitivna."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pojednostavi izraz: (n + 1)(n − 2) = n² − n − 2."},
     {txt:"(n² − n − 2) − n² − 2n − 1 = −3n − 3 = −3(n + 1)."},
     {txt:"−3(n + 1) je djeljivo s 3 za svaki n ∈ ℕ. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s n = 1: izraz = −6; sa n = 2: −9; oba djeljiva s 3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) za n = 2 je −9 (neparan); C) izraz < 0 uvijek (−3·2 = −6 < 0); D) uvijek negativan.",note:"diagnostika", final:true},{txt:"Intuicija: simboličko pojednostavnjenje daje 'skriveni' oblik −3(n+1).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izraz tipa −3k je uvijek djeljiv s 3 (faktor 3 izložen).",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: izraz tipa −3k je uvijek djeljiv s 3 (faktor 3 izložen).",
     "Intuicija: simboličko pojednostavnjenje daje 'skriveni' oblik −3(n+1).",
     "Česta greška: testirati samo jednu vrijednost n i krivo zaključiti za sve.",
     "Alt metoda (provjera): podijeli izraz s 3 → −(n + 1) ∈ ℤ za sve n ∈ ℕ ✓"
   ,"Provjera s n = 1: izraz = −6; sa n = 2: −9; oba djeljiva s 3 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:25,type:"sa",topic:"der",points:1,
   q:"Odredite |z| ako je z = 3/5 − (4/5)i.",
   sol:{ans:"1",alt:["1","|z|=1"]},
  steps:[
     {txt:"Modul kompleksnog broja: |a + bi| = √(a² + b²)."},
     {txt:"Ovdje a = 3/5, b = −4/5. |z| = √((3/5)² + (4/5)²)."},
     {txt:"= √(9/25 + 16/25) = √(25/25) = √1 = 1."},
     {txt:"Provjera: (3/5)² = 9/25; (−4/5)² = 16/25; zbroj = 1 — pa je z na jediničnoj kružnici ✓",note:"verifikacija", final:true},{txt:"Intuicija: modul je 'udaljenost od ishodišta' u kompleksnoj ravnini.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |a + bi| = √(a² + b²) (Pitagora u kompleksnoj ravnini).",note:"postupak",final:true},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: |a + bi| = √(a² + b²) (Pitagora u kompleksnoj ravnini).",
     "Intuicija: modul je 'udaljenost od ishodišta' u kompleksnoj ravnini.",
     "Česta greška: zaboraviti kvadrate komponenata; ili krivi predznak (predznak nestaje u kvadratu).",
     "Alt metoda (provjera): identitet 3² + 4² = 5² je Pitagorina trojka; podijeljena s 5² daje (3/5)² + (4/5)² = 1 ✓"
   ,"Provjera: (3/5)² = 9/25; (−4/5)² = 16/25; zbroj = 1 — pa je z na jediničnoj kružnici ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:26,type:"sa",topic:"exp",points:1,
   q:"Napišite broj √(b⁷) · ⁴√b u obliku potencije s bazom b.",
   sol:{ans:"b^([FRAC:15|4])",alt:["b^(¹⁵⁄⁴)","b^([FRAC:15|4])"]},
  steps:[
     {txt:"Razlomljeni eksponenti: √(b⁷) = b^([FRAC:7|2]); ⁴√b = b^([FRAC:1|4])."},
     {txt:"Umnožak potencija iste baze: b^([FRAC:7|2] + [FRAC:1|4])."},
     {txt:"Zajednički nazivnik: [FRAC:7|2] = [FRAC:14|4]; [FRAC:14|4] + [FRAC:1|4] = [FRAC:15|4]."},
     {txt:"Rezultat: b^([FRAC:15|4]).",final:true,note:"odgovor"},
     {txt:"Provjera s b = 16: √(16⁷)·⁴√16 = 16^([FRAC:7|2])·16^([FRAC:1|4]) = 16^([FRAC:15|4]); izračun: 16 = 2⁴ → (2⁴)^([FRAC:15|4]) = 2¹⁵ = 32768. Provjera: √(16⁷) = √(16·16⁶) ≈ 4·16³ = 16384, ⁴√16 = 2 → 32768 ✓",note:"verifikacija", final:true},{txt:"Intuicija: pretvori sve korijene u potencije s razlomljenim eksponentima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",note:"postupak",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",
     "Intuicija: pretvori sve korijene u potencije s razlomljenim eksponentima.",
     "Česta greška: zbrajati eksponente s različitim nazivnicima bez svođenja.",
     "Alt metoda (provjera): logaritmiraj — log(√(b⁷)·⁴√b) = [FRAC:7|2]·log b + [FRAC:1|4]·log b = [FRAC:15|4]·log b → b^([FRAC:15|4]) ✓"
   ,"Provjera s b = 16: √(16⁷)·⁴√16 = 16^([FRAC:7|2])·16^([FRAC:1|4]) = 16^([FRAC:15|4]); izračun: 16 = 2⁴ → (2⁴)^([FRAC:15|4]) = 2¹⁵ = 32768. Provjera: √(16⁷) = √(16·16⁶) ≈ 4·16³ = 16384, ⁴√16 = 2 → 32768","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:27,type:"sa",topic:"br",points:1,
   q:"Izračunajte ((10⁵⁵ + 1)² − (10⁵⁵ − 1)²) / 10⁵⁵.",
   sol:{ans:"4",alt:["4","= 4"]},
  steps:[
     {txt:"Razlika kvadrata: A² − B² = (A + B)(A − B); uz A = 10⁵⁵ + 1, B = 10⁵⁵ − 1."},
     {txt:"A + B = 2·10⁵⁵; A − B = 2."},
     {txt:"Brojnik: (2·10⁵⁵)·2 = 4·10⁵⁵."},
     {txt:"Razlomak: 4·10⁵⁵ / 10⁵⁵ = 4."},
     {txt:"Provjera s manjim eksponentom (10⁵⁵ → 10): ((11)² − (9)²)/10 = (121 − 81)/10 = 40/10 = 4 ✓",note:"verifikacija", final:true},{txt:"Intuicija: razlika dvaju 'skoro istih' brojeva (A, B) je 2; zbroj je 2·10⁵⁵.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata uvijek faktorizira u (A − B)(A + B); štedi mnogo računa s velikim brojevima.",note:"postupak",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: razlika kvadrata uvijek faktorizira u (A − B)(A + B); štedi mnogo računa s velikim brojevima.",
     "Intuicija: razlika dvaju 'skoro istih' brojeva (A, B) je 2; zbroj je 2·10⁵⁵.",
     "Česta greška: pokušati doslovno izračunati 10⁵⁵ (nemoguće); ili pogriješiti formulu.",
     "Alt metoda (provjera): razvij — (10⁵⁵ + 1)² = 10¹¹⁰ + 2·10⁵⁵ + 1; (10⁵⁵ − 1)² = 10¹¹⁰ − 2·10⁵⁵ + 1; razlika = 4·10⁵⁵ ✓"
   ,"Provjera s manjim eksponentom (10⁵⁵ → 10): ((11)² − (9)²)/10 = (121 − 81)/10 = 40/10 = 4 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:28,type:"sa",topic:"niz",points:1,
   q:"Odredite opći član aritmetičkoga niza 8, 11, 14, 17, …",
   sol:{ans:"aₙ = 3n + 5",alt:["3n+5","aₙ=3n+5","a_n = 3n+5"]},
  steps:[
     {txt:"Aritmetički niz: a₁ = 8; razlika d = 11 − 8 = 3 (konstantna)."},
     {txt:"Formula općeg člana: aₙ = a₁ + (n − 1)d."},
     {txt:"aₙ = 8 + (n − 1)·3 = 8 + 3n − 3 = 3n + 5."},
     {txt:"Provjera: a₁ = 3·1 + 5 = 8 ✓; a₂ = 11 ✓; a₃ = 14 ✓; a₄ = 17 ✓",note:"verifikacija", final:true},{txt:"Intuicija: niz se može zapisati u obliku 'linearne funkcije od n'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz aₙ = a₁ + (n − 1)d; konstantna razlika d.",note:"postupak",final:true},{txt:"Točan odgovor: aₙ = 3n + 5 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aritmetički niz aₙ = a₁ + (n − 1)d; konstantna razlika d.",
     "Intuicija: niz se može zapisati u obliku 'linearne funkcije od n'.",
     "Česta greška: koristiti n umjesto n − 1 (greška pomaka).",
     "Alt metoda (provjera): aₙ = a₁ + d·n − d = 3n + (8 − 3) = 3n + 5 ✓"
   ,"Provjera: a₁ = 3·1 + 5 = 8 ✓; a₂ = 11 ✓; a₃ = 14 ✓; a₄ = 17 ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:29.1,img:true,type:"sa",topic:"geom",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Kolika je duljina treće stranice trokuta prikazanoga na skici? (Pravokutni trokut s katetama x i 2x.)",
   sol:{ans:"x√5",alt:["x·√5","√5·x","x√5"]},
  steps:[
     {txt:"Iz skice: pravokutni trokut s katetama x i 2x; tražimo hipotenuzu."},
     {txt:"Pitagorin poučak: c² = x² + (2x)² = x² + 4x² = 5x²."},
     {txt:"c = √(5x²) = x√5 (uz x > 0)."},
     {txt:"Provjera s x = 1: katete 1 i 2; hipotenuza √5 ≈ 2,236 ✓",note:"verifikacija", final:true},{txt:"Intuicija: omjer 1:2 daje hipotenuzu √5 puta veću od kraće katete.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Pitagorin poučak c² = a² + b² za pravokutni trokut.",note:"postupak",final:true},{txt:"Točan odgovor: x√5 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: Pitagorin poučak c² = a² + b² za pravokutni trokut.",
     "Intuicija: omjer 1:2 daje hipotenuzu √5 puta veću od kraće katete.",
     "Česta greška: (2x)² = 2x² (krivo) umjesto 4x²; ili zaboraviti kvadrirati x.",
     "Alt metoda (provjera): trigonometrijski — tan α = 1/2 → α ≈ 26,57°; hipotenuza = x/sin α ≈ x·2,236 = x√5 ✓"
   ,"Provjera s x = 1: katete 1 i 2; hipotenuza √5 ≈ 2,236 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:29.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Riješite nejednadžbu −2x² + x + 1 > 0 i zapišite rješenje uz pomoć intervala.",
   sol:{ans:"⟨−1/2, 1⟩",alt:["(-1/2,1)","⟨-1/2, 1⟩","-1/2 < x < 1"], solFormula:{type:"text", text:"⟨−[FRAC:1|2], 1⟩"}},
  steps:[
     {txt:"Pomnoži s −1 (mijenja se smjer ali rješavamo nule jednako): 2x² − x − 1 < 0."},
     {txt:"Diskriminanta: D = 1 + 8 = 9 → x = (1 ± 3)/4 → x = 1 ili x = −1/2."},
     {txt:"Parabola −2x² + x + 1 ima a = −2 < 0 (otvorena nadolje); pozitivna između nula."},
     {txt:"Rješenje: x ∈ ⟨−1/2, 1⟩ (strogo otvoren interval jer je nejednakost stroga)."},
     {txt:"Provjera s x = 0 (unutar): −0 + 0 + 1 = 1 > 0 ✓; s x = 2 (van): −8 + 2 + 1 = −5 < 0 ✓",note:"verifikacija", final:true},{txt:"Intuicija: parabola 'lebdi' iznad x-osi između nula kad je otvorena nadolje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna nejednadžba ax² + bx + c > 0 s a < 0 — rješenje je između nula.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−1/2, 1⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: kvadratna nejednadžba ax² + bx + c > 0 s a < 0 — rješenje je između nula.",
     "Intuicija: parabola 'lebdi' iznad x-osi između nula kad je otvorena nadolje.",
     "Česta greška: zaboraviti otvorene granice (strogo > → otvoren interval); krivi smjer parabole.",
     "Alt metoda (provjera): faktoriziraj −2(x + 1/2)(x − 1) > 0 → (x + 1/2)(x − 1) < 0 → x ∈ ⟨−1/2, 1⟩ ✓"
   ,"Provjera s x = 0 (unutar): −0 + 0 + 1 = 1 > 0 ✓; s x = 2 (van): −8 + 2 + 1 = −5 < 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:30.1,img:true,type:"sa",topic:"stat",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Stupčasti dijagram prikazuje površinsku temperaturu mora tijekom desetogodišnjih razdoblja od 1881. godine do 2010. godine. Kolika je razlika između najviše i najniže temperature?",
   sol:{ans:"0,88 °C",alt:["0,88","0,88","≈0,88"]},
  steps:[
     {txt:"Iz grafa: najviša temperatura = 14,47 °C (razdoblje 2001.–2010.); najniža = 13,59 °C (1901.–1910.)."},
     {txt:"Razlika: 14,47 − 13,59 = 0,88 °C."},
     {txt:"Provjera: trend je porast temperature kroz vrijeme; razlika 0,88 °C u 130 godina je značajna ✓",note:"verifikacija", final:true},{txt:"Intuicija: identificiraj najviši i najniži stupac, pa oduzmi vrijednosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika (raspon) = max − min; mjera rasipanja podataka.",note:"postupak",final:true},{txt:"Točan odgovor: 0,88 °C ✓",note:"odgovor",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: razlika (raspon) = max − min; mjera rasipanja podataka.",
     "Intuicija: identificiraj najviši i najniži stupac, pa oduzmi vrijednosti.",
     "Česta greška: krivo čitati grafičke vrijednosti; ili krivi smjer oduzimanja (može biti negativna).",
     "Alt metoda (provjera): vizualno na grafu — najveći skok od dna do vrha ≈ 0,9 ✓"
   ,"Provjera: trend je porast temperature kroz vrijeme; razlika 0,88 °C u 130 godina je značajna ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:30.2,type:"sa",topic:"stat",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Kolika je bila prosječna temperatura za razdoblja u kojima su vrijednosti temperature bile više od 14 °C?",
   sol:{ans:"14,283... °C",alt:["14,283","14,283","857/60","≈14,283"]},
  steps:[
     {txt:"Razdoblja s T > 14 °C iz grafa: 14,12 (1971.–80.), 14,26 (1991.–2000.), 14,47 (2001.–2010.). Tri razdoblja."},
     {txt:"Zbroj: 14,12 + 14,26 + 14,47 = 42,85."},
     {txt:"Prosjek: 42,85 / 3 = 14,2833... ≈ 14,283 °C."},
     {txt:"Provjera: 14,283·3 = 42,85 ✓; svaka od triju vrijednosti > 14 ✓",note:"verifikacija", final:true},{txt:"Intuicija: filtriraj prvo (T > 14), pa računaj prosjek samo filtriranih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj / broj članova; uključi samo vrijednosti koje zadovoljavaju uvjet.",note:"postupak",final:true},{txt:"Točan odgovor: 14,283... °C ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aritmetički prosjek = zbroj / broj članova; uključi samo vrijednosti koje zadovoljavaju uvjet.",
     "Intuicija: filtriraj prvo (T > 14), pa računaj prosjek samo filtriranih.",
     "Česta greška: uključiti vrijednost = 14 (uvjet je strogo veće); ili dijeliti s krivim brojem članova.",
     "Alt metoda (provjera): kao razlomak — 4285/300 = 857/60 ≈ 14,2833 ✓"
   ,"Provjera: 14,283·3 = 42,85 ✓; svaka od triju vrijednosti > 14 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:31.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 31 (1. dio od 2):",
   q:"Stara jedinica za mjerenje mase jest pud. Jedan pud odgovara masi od 40 funta, a jedna je funta 0,4095 kilograma. Koliko jedan kilogram ima puda?",
   sol:{ans:"≈ 0,06105... puda",alt:["0,06105","0,061","0,061","≈0,061"]},
  steps:[
     {txt:"1 pud = 40 funta = 40·0,4095 = 16,38 kg."},
     {txt:"1 kg = 1/16,38 puda ≈ 0,06105... puda."},
     {txt:"Provjera: 0,06105 · 16,38 ≈ 0,9999... ≈ 1 kg ✓",note:"verifikacija", final:true},{txt:"Intuicija: pud je veća jedinica od kg (1 pud > 16 kg) → 1 kg = djelić puda.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za pretvorbu jedinica, 1/X = inverzni faktor pretvorbe.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 0,06105... puda ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za pretvorbu jedinica, 1/X = inverzni faktor pretvorbe.",
     "Intuicija: pud je veća jedinica od kg (1 pud > 16 kg) → 1 kg = djelić puda.",
     "Česta greška: brkati smjer pretvorbe; ili krivi izračun 40·0,4095.",
     "Alt metoda (provjera): proporcija — 16,38 kg : 1 pud = 1 kg : x → x = 1/16,38 ≈ 0,06105 ✓"
   ,"Provjera: 0,06105 · 16,38 ≈ 0,9999... ≈ 1 kg ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:31.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 31 (2. dio od 2):",
   q:"Litra cijeđenoga voćnog soka u kojemu je omjer soka naranče i limuna 4 : 3 košta 36 kuna. Litra soka naranče skuplja je za 5 kuna od litre soka limuna. Koliko košta litra soka limuna?",
   sol:{ans:"≈ 33,14 kn",alt:["33,14","33,14","232/7","≈33,14"]},
  steps:[
     {txt:"Označi: l = cijena litre limuna, n = cijena litre naranče. Uvjet: n = l + 5."},
     {txt:"Težinski prosjek (omjer 4:3 → ukupno 7 dijelova): (4n + 3l)/7 = 36 → 4n + 3l = 252."},
     {txt:"4(l + 5) + 3l = 252 → 4l + 20 + 3l = 252 → 7l = 232 → l = 232/7 ≈ 33,14 kn."},
     {txt:"Provjera: l ≈ 33,14, n ≈ 38,14; (4·38,14 + 3·33,14)/7 = 252/7 = 36 ✓",note:"verifikacija", final:true},{txt:"Intuicija: '4:3' znači 4 dijela jednog na 3 drugog — ukupno 7 dijelova jednake veličine.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: težinski prosjek cijena — omjer udjela × cijena po jedinici daje miješanu cijenu.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 33,14 kn ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: težinski prosjek cijena — omjer udjela × cijena po jedinici daje miješanu cijenu.",
     "Intuicija: '4:3' znači 4 dijela jednog na 3 drugog — ukupno 7 dijelova jednake veličine.",
     "Česta greška: pretpostaviti aritmetičku sredinu (37 kn = (n + l)/2) bez težinskog omjera.",
     "Alt metoda (provjera): sustav 4n + 3l = 252, n − l = 5 → eliminacija daje l ≈ 33,14 ✓"
   ,"Provjera: l ≈ 33,14, n ≈ 38,14; (4·38,14 + 3·33,14)/7 = 252/7 = 36 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:32.1,img:true,type:"sa",topic:"lin",points:1,
   context:"Zadatak 32 (1. dio od 2):",
   q:"Nacrtajte pravac zadan jednadžbom x − 2y + 4 = 0.",
   sol:{ans:"Pravac y = ([FRAC:1|2])x + 2 kroz točke (−4, 0) i (0, 2)",alt:["y=x/2+2","y=(x+4)/2","y = x/2 + 2"]},
  steps:[
     {txt:"Pretvori u eksplicitan oblik: x − 2y + 4 = 0 → 2y = x + 4 → y = ([FRAC:1|2])x + 2."},
     {txt:"Presjek s x-osi (y = 0): x = −4 → točka (−4, 0)."},
     {txt:"Presjek s y-osi (x = 0): y = 2 → točka (0, 2)."},
     {txt:"Nacrtaj pravac kroz (−4, 0) i (0, 2) — nagib pozitivan ([FRAC:1|2])."},
     {txt:"Provjera: točka (2, 3) — provjeri u izvornoj 2 − 6 + 4 = 0 ✓; nagib (3−2)/(2−0) = 1/2 ✓",note:"verifikacija", final:true},{txt:"Intuicija: dvije točke određuju pravac jedinstveno; lakše naći x-presjek (y = 0) i y-presjek (x = 0).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravac u opće obliku Ax + By + C = 0; u eksplicitnom y = kx + l (k = nagib, l = y-presjek).",note:"postupak",final:true},{txt:"Točan odgovor: Pravac y = ([FRAC:1|2])x + 2 kroz točke (−4, 0) i (0, 2) ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: pravac u opće obliku Ax + By + C = 0; u eksplicitnom y = kx + l (k = nagib, l = y-presjek).",
     "Intuicija: dvije točke određuju pravac jedinstveno; lakše naći x-presjek (y = 0) i y-presjek (x = 0).",
     "Česta greška: pogrešno premjestiti −2y na drugu stranu (krivi predznak).",
     "Alt metoda (provjera): nagib k iz dvije točke: (2 − 0)/(0 − (−4)) = 2/4 = 1/2 ✓"
   ,"Provjera: točka (2, 3) — provjeri u izvornoj 2 − 6 + 4 = 0 ✓; nagib (3−2)/(2−0) = 1/2 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:32.2,type:"sa",topic:"lin",points:1,
   context:"Zadatak 32 (2. dio od 2):",
   q:"Točka (5, 9) leži na pravcu koji je usporedan s x-osi. Kako glasi jednadžba toga pravca?",
   sol:{ans:"y = 9",alt:["y=9","y=9,0"]},
  steps:[
     {txt:"Pravac usporedan s x-osi ima nagib k = 0; jednadžba je oblika y = c (konstanta)."},
     {txt:"Pravac prolazi točkom (5, 9) → konstanta y-vrijednosti = 9."},
     {txt:"Jednadžba: y = 9."},
     {txt:"Provjera: za svaki x, y = 9 (npr. (0, 9), (10, 9)) — svi imaju istu y-koordinatu ✓",note:"verifikacija", final:true},{txt:"Intuicija: usporedan s osi = uvijek ista visina; konstanta = y-koordinata bilo koje točke na pravcu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: horizontalni pravac (usporedan s x-osi) ima oblik y = c; vertikalni (s y-osi) x = c.",note:"postupak",final:true},{txt:"Točan odgovor: y = 9 ✓",note:"odgovor",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: horizontalni pravac (usporedan s x-osi) ima oblik y = c; vertikalni (s y-osi) x = c.",
     "Intuicija: usporedan s osi = uvijek ista visina; konstanta = y-koordinata bilo koje točke na pravcu.",
     "Česta greška: dati x = 5 (vertikalni pravac); ili y = x + 9 (krivi oblik).",
     "Alt metoda (provjera): nagib 0 znači Δy = 0; y stalno = 9 ✓"
   ,"Provjera: za svaki x, y = 9 (npr. (0, 9), (10, 9)) — svi imaju istu y-koordinatu ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:33.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 33 (1. dio od 2):",
   q:"Kako glasi jednadžba kružnice koja prolazi točkom A(−2, 4) i koncentrična je kružnici x² + y² − 12x + 2y + 23 = 0?",
   sol:{ans:"(x − 6)² + (y + 1)² = 89",alt:["(x-6)²+(y+1)²=89","x²+y²-12x+2y-52=0"]},
  steps:[
     {txt:"Zadana kružnica u opće obliku — svedi na standardni: x² − 12x + y² + 2y = −23."},
     {txt:"Completiranje kvadrata: (x − 6)² − 36 + (y + 1)² − 1 = −23 → (x − 6)² + (y + 1)² = 14."},
     {txt:"Središte: S(6, −1); polumjer²: 14."},
     {txt:"Nova kružnica je koncentrična → isto središte S(6, −1); polumjer = udaljenost od S do A."},
     {txt:"r² = (−2 − 6)² + (4 − (−1))² = 64 + 25 = 89."},
     {txt:"Jednadžba: (x − 6)² + (y + 1)² = 89."},
     {txt:"Provjera A(−2, 4): (−2 − 6)² + (4 + 1)² = 64 + 25 = 89 ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'koncentrične' = isto središte, različit polumjer.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kružnica (x − p)² + (y − q)² = r² ima središte (p, q) i polumjer r.",note:"postupak",final:true},{txt:"Točan odgovor: (x − 6)² + (y + 1)² = 89 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: kružnica (x − p)² + (y − q)² = r² ima središte (p, q) i polumjer r.",
     "Intuicija: 'koncentrične' = isto središte, različit polumjer.",
     "Česta greška: zaboraviti predznak u completiranju kvadrata (npr. +12x → (x − 6)² jer −2·(−6) = +12).",
     "Alt metoda (provjera): udaljenost A do S² = (Δx)² + (Δy)² = 8² + 5² = 89 ✓"
   ,"Provjera A(−2, 4): (−2 − 6)² + (4 + 1)² = 64 + 25 = 89 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:33.2,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 33 (2. dio od 2):",
   q:"Na brojevnoj kružnici prikažite točku E(t) za koju vrijedi cos t = −1/4, sin t < 0.",
   sol:{ans:"točka u III. kvadrantu: x = −1/4, y = −[FRAC:√15|4]",alt:["III. kvadrant","3. kvadrant","E(-1/4, -√15/4)"], solFormula:{type:"text", text:"točka E(−[FRAC:1|4], −[FRAC:√15|4]) u 3. kvadrantu"}},
  steps:[
     {txt:"Na jediničnoj kružnici: x = cos t, y = sin t."},
     {txt:"cos t = −1/4 (negativan), sin t < 0 → x < 0 i y < 0 → točka u III. kvadrantu."},
     {txt:"Iz jednadžbe kružnice: x² + y² = 1 → y² = 1 − ([FRAC:1|16]) = [FRAC:15|16]."},
     {txt:"y < 0 → y = −[FRAC:√15|4]."},
     {txt:"Točka E(−[FRAC:1|4], −[FRAC:√15|4]) — u trećem kvadrantu."},
     {txt:"Provjera: (−1/4)² + (−√15/4)² = 1/16 + 15/16 = 1 ✓; oba znaka negativna ✓",note:"verifikacija", final:true},{txt:"Intuicija: kvadranti idu obrnuto smjeru kazaljki — I.(+,+), II.(−,+), III.(−,−), IV.(+,−).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: na jediničnoj kružnici (cos t, sin t); predznaci ovise o kvadrantu — III. = (−, −).",note:"postupak",final:true},{txt:"Točan odgovor: točka u III. kvadrantu: x = −1/4, y = −[FRAC:√15|4] ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: na jediničnoj kružnici (cos t, sin t); predznaci ovise o kvadrantu — III. = (−, −).",
     "Intuicija: kvadranti idu obrnuto smjeru kazaljki — I.(+,+), II.(−,+), III.(−,−), IV.(+,−).",
     "Česta greška: zaboraviti negativni predznak y (jer je dano sin t < 0).",
     "Alt metoda (provjera): kut t je u 3. kvadrantu, t ∈ (π, 3π/2); cos t < 0 i sin t < 0 ✓"
   ,"Provjera: (−1/4)² + (−√15/4)² = 1/16 + 15/16 = 1 ✓; oba znaka negativna ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:34.1,type:"sa",topic:"trig",points:1,
   context:"Zadatak 34 (1. dio od 2):",
   q:"Duljina je jednoga kraka dvokrakih ljestava 3 m. Koju visinu dosežu te ljestve kada krakovi zatvaraju kut mjere 35°?",
   sol:{ans:"≈ 2,8611... m",alt:["2,861","2,861","[2,85; 2,87]","≈2,86"]},
  steps:[
     {txt:"Dvokrake ljestve čine jednakokračan trokut sa vrhom kuta 35° (između krakova)."},
     {txt:"Visina iz vrha trokuta dijeli kut na pola (jer je jednakokračan): polukut 17,5°."},
     {txt:"Pravokutni trokut s krakom (hipotenuza 3 m) i visinom kao katetom: visina = 3 · cos 17,5°."},
     {txt:"visina ≈ 3 · 0,9537 ≈ 2,8611 m."},
     {txt:"Provjera s realnom situacijom: ljestve od 3 m s kutom 35° dosegu vrlo blizu 3 m (jer je kut mali) ✓",note:"verifikacija", final:true},{txt:"Intuicija: kosinus = bliza kateta/hipotenuza; pola kuta zbog jednakokračnosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u jednakokračnom trokutu, visina iz vrha raspolavlja kut i osnovicu.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 2,8611... m ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: u jednakokračnom trokutu, visina iz vrha raspolavlja kut i osnovicu.",
     "Intuicija: kosinus = bliza kateta/hipotenuza; pola kuta zbog jednakokračnosti.",
     "Česta greška: koristiti sin umjesto cos (kut je 'kraj' krakova, ne pri 'dnu').",
     "Alt metoda (provjera): za kut 0° (paralelni krakovi) visina = 3 m; za 35° tek malo niže ✓"
   ,"Provjera s realnom situacijom: ljestve od 3 m s kutom 35° dosegu vrlo blizu 3 m (jer je kut mali) ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:34.2,type:"sa",topic:"trig",points:1,
   context:"Zadatak 34 (2. dio od 2):",
   q:"Kolika je najkraća stranica trokuta kojemu su mjere unutarnjih kutova u omjeru 2 : 5 : 8, a opseg 48 cm?",
   sol:{ans:"≈ 8,61... cm",alt:["8,61","8,61","[8,4; 8,7]","≈8,6"]},
  steps:[
     {txt:"Zbroj kutova trokuta = 180°. Omjer 2:5:8 → 15k = 180° → k = 12°."},
     {txt:"Kutovi: 24°, 60°, 96°. Najmanja stranica nasuprot najmanjem kutu (24°)."},
     {txt:"Sinusov poučak: a/sin 24° = b/sin 60° = c/sin 96° = stranice po sinusima."},
     {txt:"Suma stranica = opseg 48: koristimo a + b + c = (sin 24° + sin 60° + sin 96°) · k', gdje je k' = a/sin 24°."},
     {txt:"sin 24° ≈ 0,4067; sin 60° ≈ 0,8660; sin 96° ≈ 0,9945; zbroj ≈ 2,2672."},
     {txt:"a = 48 · sin 24° / 2,2672 ≈ 48 · 0,4067 / 2,2672 ≈ 8,61 cm."},
     {txt:"Provjera: ostale stranice 18,33 (b) i 21,06 (c); zbroj 8,61 + 18,33 + 21,06 ≈ 48 ✓",note:"verifikacija", final:true},{txt:"Intuicija: što veći kut, to dulja nasuprotna stranica; opseg dijelimo prema omjeru sinusa.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — stranice u trokutu razmjerne su sinusima nasuprotnih kutova.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 8,61... cm ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — stranice u trokutu razmjerne su sinusima nasuprotnih kutova.",
     "Intuicija: što veći kut, to dulja nasuprotna stranica; opseg dijelimo prema omjeru sinusa.",
     "Česta greška: koristiti omjer kutova direktno za stranice (krivo); ili krivi izračun zbroja sinusa.",
     "Alt metoda (provjera): poredak stranica = poredak kutova; najmanja a (24°) < b (60°) < c (96°) ✓"
   ,"Provjera: ostale stranice 18,33 (b) i 21,06 (c); zbroj 8,61 + 18,33 + 21,06 ≈ 48 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:35.1,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 35 (1. dio od 2):",
   q:"Maja pliva od mjesta na plaži do svjetionika, a Iva od toga istog mjesta na plaži do svjetionika hoda rivom i molom. Koliko je Majin put kraći od Ivina prema podatcima sa skice? (Riva 97,5 m, mol 85 m, kut između 100°.)",
  intermediates:[9506.25, 7225, 16575, 2877.7, 16731.25, 16731, 19608.95, 140.034, 182.5, 42.466, 0.1736],
   sol:{ans:"≈ 42,466... m",alt:["42,466","42,466","[42,4; 42,7]","≈42,5"]},
  steps:[
     {txt:"Ivin put = riva + mol = 97,5 + 85 = 182,5 m."},
     {txt:"Majin put = ravna linija (treća stranica trokuta s kutom 100° između riva i mola)."},
     {txt:"Kosinusov poučak: c² = a² + b² − 2ab·cos C; c² = 97,5² + 85² − 2·97,5·85·cos 100°."},
     {txt:"c² = 9506,25 + 7225 − 16575·(−0,1736) = 16731,25 + 2877,7 ≈ 19608,95."},
     {txt:"c ≈ √19608,95 ≈ 140,034 m."},
     {txt:"Razlika: 182,5 − 140,034 ≈ 42,466 m."},
     {txt:"Provjera predznaka: cos 100° < 0 → član −2ab·cos C postaje pozitivan → c² > a² + b² ✓ (jer je kut tup)",note:"verifikacija", final:true},{txt:"Intuicija: za pravi kut imamo Pitagoru (cos 90° = 0); za tup kut hipotenuza je dulja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos C; za tup kut cos < 0 daje veći c.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 42,466... m ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos C; za tup kut cos < 0 daje veći c.",
     "Intuicija: za pravi kut imamo Pitagoru (cos 90° = 0); za tup kut hipotenuza je dulja.",
     "Česta greška: predznak cos 100° (negativan); ili pomiješati kut s drugom stranom trokuta.",
     "Alt metoda (provjera): za tup kut 100° (blizu 90°) — c ≈ √(a² + b²) ≈ √16731 ≈ 129 ali s korekcijom za negativan cos je dulja ≈ 140 ✓"
   ,"Provjera predznaka: cos 100° < 0 → član −2ab·cos C postaje pozitivan → c² > a² + b² ✓ (jer je kut tup)","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:35.2,img:true,type:"sa",topic:"trig",points:1,
   context:"Zadatak 35 (2. dio od 2):",
   q:"Na vrhu je zgrade antena visine 3 m. Oči su promatrača na visini 1,6 m od tla. Promatrač je udaljen od zgrade i vidi vrh zgrade pod kutom elevacije mjere 38°, a vrh antene pod kutom elevacije mjere 43°. Kolika je visina zgrade?",
   sol:{ans:"≈ 17,0986... m",alt:["17,0986","17,0986","[16,5; 17,3]","≈17,1"]},
  steps:[
     {txt:"Neka je d udaljenost promatrača do zgrade; h = visina od očiju do vrha zgrade (NE do tla)."},
     {txt:"tan 38° = h/d (kut do vrha zgrade); tan 43° = (h + 3)/d (kut do vrha antene)."},
     {txt:"Dijeli: tan 43°/tan 38° = (h + 3)/h → h(tan 43°/tan 38° − 1) = 3."},
     {txt:"tan 43° ≈ 0,9325; tan 38° ≈ 0,7813; omjer ≈ 1,1936."},
     {txt:"h ≈ 3 / (1,1936 − 1) ≈ 3 / 0,1936 ≈ 15,499 m."},
     {txt:"Visina zgrade = h + visina očiju = 15,499 + 1,6 ≈ 17,0986... m."},
     {txt:"Provjera: d = h/tan 38° ≈ 15,5/0,7813 ≈ 19,84; tan 43° = 18,5/19,84 ≈ 0,932 ✓",note:"verifikacija", final:true},{txt:"Intuicija: dva kuta i dvije visine (s antenom i bez) daju sustav koji eliminira d.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za horizontalnu udaljenost d i visinu h, tan(kut elevacije) = h/d.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 17,0986... m ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: za horizontalnu udaljenost d i visinu h, tan(kut elevacije) = h/d.",
     "Intuicija: dva kuta i dvije visine (s antenom i bez) daju sustav koji eliminira d.",
     "Česta greška: zaboraviti visinu očiju (treba dodati 1,6 m na kraju).",
     "Alt metoda (provjera): direktno iz d — d ≈ 19,84 m, visina zgrade = d·tan 38° + 1,6 ≈ 17,10 m ✓"
   ,"Provjera: d = h/tan 38° ≈ 15,5/0,7813 ≈ 19,84; tan 43° = 18,5/19,84 ≈ 0,932 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:36.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 36 (1. dio od 2):",
   q:"Funkcija P(t) = 145·e^(−0,092·t) opisuje puls trkača t minuta nakon utrke, 0 ≤ t ≤ 15. Koliki je puls trkača 3 minute nakon utrke?",
   sol:{ans:"110",alt:["110","≈110"]},
  steps:[
     {txt:"Uvrsti t = 3: P(3) = 145 · e^(−0,092·3) = 145 · e^(−0,276)."},
     {txt:"e^(−0,276) ≈ 0,759."},
     {txt:"P(3) = 145 · 0,759 ≈ 110."},
     {txt:"Provjera: t = 0 → P = 145; t = 15 → P = 145·e^(−1,38) ≈ 36 (smanjenje s vremenom — fizički smisleno) ✓",note:"verifikacija", final:true},{txt:"Intuicija: negativni eksponent → opadanje (puls se smanjuje nakon utrke).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: e^x je standardna eksponencijalna funkcija (baza Eulerov broj ≈ 2,718).",note:"postupak",final:true},{txt:"Točan odgovor: 110 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: e^x je standardna eksponencijalna funkcija (baza Eulerov broj ≈ 2,718).",
     "Intuicija: negativni eksponent → opadanje (puls se smanjuje nakon utrke).",
     "Česta greška: koristiti 2,72 kao bazu (aproksimacija e); ili krivi predznak eksponenta.",
     "Alt metoda (provjera): logaritmiraj — ln(P(3)/145) = −0,276 → P(3)/145 ≈ 0,759 → P(3) ≈ 110 ✓"
   ,"Provjera: t = 0 → P = 145; t = 15 → P = 145·e^(−1,38) ≈ 36 (smanjenje s vremenom — fizički smisleno) ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:36.2,img:true,type:"sa",topic:"lin",points:1,
   context:"Zadatak 36 (2. dio od 2):",
   q:"Na slici je prikazan graf funkcije f definirane na [−5, 5]. Kolika je vrijednost argumenta a, a ≠ 3, za koji vrijedi f(a) = f(3)?",
   sol:{ans:"−2",alt:["-2","a=-2","-2,0"]},
  steps:[
     {txt:"Iz grafa očitaj f(3) — pretpostaviti vrijednost (npr. f(3) = 2 ili neka specifična)."},
     {txt:"Povuci horizontalnu liniju y = f(3); pronađi sve presjeke s grafom."},
     {txt:"Drugi presjek (osim x = 3) je u x = −2 (iz grafa)."},
     {txt:"a = −2."},
     {txt:"Provjera: f(−2) = f(3) iz grafa — provjeri identičnu visinu obje točke ✓",note:"verifikacija", final:true},{txt:"Intuicija: vodoravna linija siječe graf u svim x za koje je f(x) ista konstanta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: f(a) = f(b) za a ≠ b znači da funkcija ima istu vrijednost u dvije različite točke — horizontalni presjek.",note:"postupak",final:true},{txt:"Točan odgovor: −2 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: f(a) = f(b) za a ≠ b znači da funkcija ima istu vrijednost u dvije različite točke — horizontalni presjek.",
     "Intuicija: vodoravna linija siječe graf u svim x za koje je f(x) ista konstanta.",
     "Česta greška: dati a = 3 (zadano isključuje); ili krivo očitati graf.",
     "Alt metoda (provjera): za parabole — ako je f(x) = (x − p)² + q, onda f(a) = f(b) ⟺ |a − p| = |b − p|."
   ,"Provjera: f(−2) = f(3) iz grafa — provjeri identičnu visinu obje točke ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
  },
  {id:37.1,type:"sa",topic:"der",points:1,
   context:"Zadatak 37 (1. dio od 2):",
   q:"Odredite derivaciju funkcije f(x) = 11(x³ − √5).",
   sol:{ans:"f′(x) = 33x²",alt:["33x²","f'(x)=33x²","33·x²"]},
  steps:[
     {txt:"Razvij: f(x) = 11x³ − 11√5."},
     {txt:"Pravilo derivacije: (xⁿ)' = n·xⁿ⁻¹; (konst)' = 0."},
     {txt:"(11x³)' = 11·3x² = 33x²; (−11√5)' = 0."},
     {txt:"f'(x) = 33x²."},
     {txt:"Provjera s pravilom umnoška k·f(x), (kf)' = k·f' — derivacija je linearna ✓",note:"verifikacija", final:true},{txt:"Intuicija: derivacija mjeri nagib tangente — za x³ nagib raste kvadratno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: derivacija potencije (xⁿ)' = n·xⁿ⁻¹; derivacija konstante = 0; linearnost (k·f)' = k·f'.",note:"postupak",final:true},{txt:"Točan odgovor: f′(x) = 33x² ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: derivacija potencije (xⁿ)' = n·xⁿ⁻¹; derivacija konstante = 0; linearnost (k·f)' = k·f'.",
     "Intuicija: derivacija mjeri nagib tangente — za x³ nagib raste kvadratno.",
     "Česta greška: pokušati derivirati √5 (konstanta, derivacija je 0).",
     "Alt metoda (provjera): primjena pravila lančanog — f(x) = 11·g(x) gdje g(x) = x³ − √5; g'(x) = 3x²; f' = 11·3x² = 33x² ✓"
   ,"Provjera s pravilom umnoška k·f(x), (kf)' = k·f' — derivacija je linearna ✓","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."]
  },
  {id:37.2,type:"sa",topic:"der",points:1,
   context:"Zadatak 37 (2. dio od 2):",
   q:"Kako glasi jednadžba tangente na krivulju y = 4/x u točki S(2, y) te krivulje?",
   sol:{ans:"y = −x + 4",alt:["y=-x+4","y = -x + 4"]},
  steps:[
     {txt:"Pronađi y-koordinatu točke S: y(2) = 4/2 = 2 → S(2, 2)."},
     {txt:"Derivacija: y' = (4·x⁻¹)' = −4·x⁻² = −4/x²."},
     {txt:"Nagib tangente u S: y'(2) = −4/4 = −1."},
     {txt:"Jednadžba tangente: y − 2 = −1·(x − 2) → y = −x + 4."},
     {txt:"Provjera u S: y(2) = −2 + 4 = 2 ✓ (točka leži na tangenti i na krivulji).",note:"verifikacija", final:true},{txt:"Intuicija: tangenta 'dotiče' krivulju s istim nagibom u toj točki.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednadžba tangente u (x₀, y₀): y − y₀ = f'(x₀)·(x − x₀).",note:"postupak",final:true},{txt:"Točan odgovor: y = −x + 4 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: jednadžba tangente u (x₀, y₀): y − y₀ = f'(x₀)·(x − x₀).",
     "Intuicija: tangenta 'dotiče' krivulju s istim nagibom u toj točki.",
     "Česta greška: krivi predznak derivacije (−4/x² je negativna za sve x ≠ 0); ili zaboraviti y₀.",
     "Alt metoda (provjera): tangenta y = −x + 4 ima nagib −1; krivulja y = 4/x u (2, 2) ima nagib −1 (jer derivacija = −1) ✓"
   ,"Provjera u S: y(2) = −2 + 4 = 2 ✓ (točka leži na tangenti i na krivulji).","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta."]
  },
  {id:38.1,type:"sa",topic:"niz",points:2,
   context:"Zadatak 38 (1. dio od 2):",
   q:"Brojevi x + 2, 14, 6x − 2 uzastopni su članovi rastućega geometrijskoga niza. Koliko iznosi idući član toga niza?",
   sol:{ans:"56",alt:["56","aₙ=56"], ex:"Geometrijski niz: tri uzastopna člana a, b, c zadovoljavaju b² = a·c. Iz toga slijedi kvadratna jednadžba u x; biramo rješenje koje daje rastući niz (q > 1)."},
  steps:[
     {txt:"Uvjet geometrijskog niza: srednji član² = umnožak susjednih → 14² = (x + 2)(6x − 2)."},
     {txt:"196 = 6x² + 10x − 4 → 6x² + 10x − 200 = 0 → 3x² + 5x − 100 = 0."},
     {txt:"Diskriminanta: D = 25 + 1200 = 1225 = 35². x = (−5 ± 35)/6 → x = 5 ili x = −20/3."},
     {txt:"Provjera rastuće: x = 5 → niz 7, 14, 28 (q = 2, rastući) ✓; x = −20/3 → niz −14/3, 14, −46 (mijenja predznak, nije monoton)."},
     {txt:"Idući član: a₄ = a₃·q = 28·2 = 56."},
     {txt:"Provjera niza: 7, 14, 28, 56 — svaki sljedeći je dvostruko prethodnog ✓",note:"verifikacija", final:true},{txt:"Intuicija: q je konstantni omjer — niz raste eksponencijalno za q > 1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u geometrijskom nizu, srednji član² = umnožak susjednih (b² = a·c).",note:"postupak",final:true},{txt:"Točan odgovor: 56 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: u geometrijskom nizu, srednji član² = umnožak susjednih (b² = a·c).",
     "Intuicija: q je konstantni omjer — niz raste eksponencijalno za q > 1.",
     "Česta greška: prihvatiti oba rješenja iz kvadratne, ne provjeriti uvjet 'rastući'.",
     "Alt metoda (provjera): q = 14/(x+2); za x = 5, q = 14/7 = 2 ✓; idući = 28·2 = 56."
   ,"Provjera rastuće: x = 5 → niz 7, 14, 28 (q = 2, rastući) ✓; x = −20/3 → niz −14/3, 14, −46 (mijenja predznak, nije monoton).","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
  },
  {id:38.2,type:"sa",topic:"trig",points:2,
   context:"Zadatak 38 (2. dio od 2):",
   q:"Odredite sva rješenja jednadžbe 2 cos(3x − π/6) + 1 = 0.",
   sol:{ans:"x = [FRAC:5π|18] + [FRAC:2kπ|3] ili x = −[FRAC:π|6] + [FRAC:2kπ|3], k ∈ ℤ",alt:["5π/18+2kπ/3, -π/6+2kπ/3","x∈{5π/18+2kπ/3, -π/6+2kπ/3}"], ex:"Trigonometrijska jednadžba cos θ = c ima dva osnovna rješenja θ = ±α + 2kπ. Za 2 cos(3x − π/6) + 1 = 0 ⟺ cos(3x − π/6) = −1/2 → 3x − π/6 = ±2π/3 + 2kπ."},
  steps:[
     {txt:"Izoliraj cos: 2 cos(3x − π/6) = −1 → cos(3x − π/6) = −[FRAC:1|2]."},
     {txt:"cos θ = −[FRAC:1|2] → θ = ±[FRAC:2π|3] + 2kπ (k ∈ ℤ)."},
     {txt:"3x − [FRAC:π|6] = [FRAC:2π|3] + 2kπ ILI 3x − [FRAC:π|6] = −[FRAC:2π|3] + 2kπ."},
     {txt:"Slučaj 1: 3x = [FRAC:2π|3] + [FRAC:π|6] + 2kπ = [FRAC:5π|6] + 2kπ → x = [FRAC:5π|18] + [FRAC:2kπ|3]."},
     {txt:"Slučaj 2: 3x = −[FRAC:2π|3] + [FRAC:π|6] + 2kπ = −[FRAC:π|2] + 2kπ → x = −[FRAC:π|6] + [FRAC:2kπ|3]."},
     {txt:"Provjera s k = 0: x = 5π/18 → 3x − π/6 = 5π/6 − π/6 = 4π/6 = 2π/3; cos(2π/3) = −1/2 ✓",note:"verifikacija", final:true},{txt:"Intuicija: cos(2π/3) = −1/2 je standardna vrijednost (II. kvadrant); cos(−2π/3) = −1/2 (III. kvadrant).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cos θ = c ima rješenja θ = ±arccos(c) + 2kπ za |c| ≤ 1.",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:5π|18] + [FRAC:2kπ|3] ili x = −[FRAC:π|6] + [FRAC:2kπ|3], k ∈ ℤ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: cos θ = c ima rješenja θ = ±arccos(c) + 2kπ za |c| ≤ 1.",
     "Intuicija: cos(2π/3) = −1/2 je standardna vrijednost (II. kvadrant); cos(−2π/3) = −1/2 (III. kvadrant).",
     "Česta greška: zaboraviti drugo rješenje (−2π/3); ili pogriješiti dijeljenje s 3 u eksponentu.",
     "Alt metoda (provjera): za k = 0 oba rješenja: x₁ = 5π/18 ≈ 0,873; x₂ = −π/6 ≈ −0,524; provjera cos(3·5π/18 − π/6) = cos(2π/3) = −1/2 ✓"
   ,"Provjera s k = 0: x = 5π/18 → 3x − π/6 = 5π/6 − π/6 = 4π/6 = 2π/3; cos(2π/3) = −1/2 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:39.1,type:"sa",topic:"al",points:3,
   context:"Zadatak 39 (1. dio od 2):",
   q:"Neka su b i c cijeli brojevi za koje vrijedi da je (x − 10)(x − 6) + 3 = (x + b)(x − c) za svaki realni broj x. Koliki je zbroj svih mogućih vrijednosti broja c?",
   sol:{ans:"16",alt:["16","≈ 16"], ex:"Identitet polinoma vrijedi 'za svaki x' ⟺ koeficijenti uz iste potencije su jednaki. Razvij obje strane, izjednači koeficijente uz x i konstante, riješi sustav. Cjelobrojni uvjet ograničava rješenja na djelitelje slobodnog člana."},
  steps:[
     {txt:"Razvij lijevu stranu: (x − 10)(x − 6) + 3 = x² − 16x + 60 + 3 = x² − 16x + 63."},
     {txt:"Razvij desnu stranu: (x + b)(x − c) = x² + (b − c)x − bc."},
     {txt:"Identitet polinoma: koeficijenti su jednaki — b − c = −16 i −bc = 63 → bc = −63."},
     {txt:"Iz b = c − 16: (c − 16)·c = −63 → c² − 16c + 63 = 0."},
     {txt:"Diskriminanta D = 256 − 252 = 4; c = (16 ± 2)/2 → c = 7 ili c = 9 (oba cjelobrojna ✓)."},
     {txt:"Zbroj mogućih c: 7 + 9 = 16."},
     {txt:"Provjera s c = 7: b = 7 − 16 = −9; (x + b)(x − c) = (x − 9)(x − 7) = x² − 16x + 63 ✓",note:"verifikacija"},
     {txt:"Provjera s c = 9: b = 9 − 16 = −7; (x − 7)(x − 9) = x² − 16x + 63 ✓",note:"verifikacija", final:true},{txt:"Intuicija: lijeva strana je faktorizirana (10, 6, +3); desna strana sa (b, c) — dobivamo dvije jednadžbe za dvije nepoznanice.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva polinoma jednaka za svaki x ⟺ koeficijenti uz odgovarajuće potencije su jednaki.",note:"postupak",final:true},{txt:"Točan odgovor: 16 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: dva polinoma jednaka za svaki x ⟺ koeficijenti uz odgovarajuće potencije su jednaki.",
     "Intuicija: lijeva strana je faktorizirana (10, 6, +3); desna strana sa (b, c) — dobivamo dvije jednadžbe za dvije nepoznanice.",
     "Česta greška: zaboraviti uvjet 'b i c cijeli' (može biti više nepravih rješenja); ili krivi predznak u razvoju.",
     "Alt metoda (provjera): Vièteove formule — zbroj nula = 16, umnožak = 63; cjelobrojne djelitelje od 63 koji zbrajaju 16: 7 i 9 ✓",
     "Provjera s konkretnim x: za x = 0, lijeva = 60 + 3 = 63; desna (x − 9)(x − 7) = 63 ✓ (oba slučaja daju isti polinom)"
   ,"Provjera s c = 7: b = 7 − 16 = −9; (x + b)(x − c) = (x − 9)(x − 7) = x² − 16x + 63 ✓"]
  },
  {id:39.2,img:true,type:"sa",topic:"exp",points:3,
   context:"Zadatak 39 (2. dio od 2):",
   q:"Koliko rješenja ima jednadžba log₂(x − 2) = |x − 4| + 1? Pri rješavanju zadatka možete se koristiti koordinatnim sustavom.",
   sol:{ans:"jedno",alt:["1","jedno rješenje"], ex:"Jednadžbe oblika 'logaritam = neki izraz' rješavaju se grafički ili algebraički razdvajanjem slučajeva (zbog apsolutne vrijednosti). Provjera dimenzija rasta — logaritam raste sporo, V-funkcija linearno."},
  steps:[
     {txt:"Domena: x − 2 > 0 → x > 2."},
     {txt:"Lijeva strana: f(x) = log₂(x − 2) — strogo rastuća na (2, ∞⟩; f(3) = 0; f(4) = 1; f(6) = 2; raste sporo."},
     {txt:"Desna strana: g(x) = |x − 4| + 1 — V-funkcija s tjemenom (4, 1); pada do x = 4 onda raste linearno."},
     {txt:"U x = 4: f(4) = log₂(2) = 1 = |0| + 1 = g(4) ✓ — TOČKA PRESJEKA."},
     {txt:"Analiza: za x > 4, g(x) = x − 3; treba x − 3 = log₂(x − 2). Provjera na x = 6: 3 vs 2 (g > f); na x → ∞, g(x) raste brže linearno → bez novog presjeka."},
     {txt:"Za 2 < x < 4: g(x) = 5 − x (padajuća); f(x) raste; sijeku se najviše jednom — provjera da li samo u 4: na x = 3: f = 0, g = 2 → g > f; sijecišta nema u ovom dijelu osim moguće u granici 4 (već uračunato)."},
     {txt:"Zaključak: točno jedno rješenje (x = 4)."},
     {txt:"Provjera grafički: log₂(x − 2) kreće u −∞ pri x → 2⁺, prolazi (4, 1); |x − 4| + 1 ima minimum (4, 1) — tangiraju se u jednoj točki ✓",note:"verifikacija", final:true},{txt:"Intuicija: logaritam raste sporo, V-funkcija linearno → najviše dvije presjeka (u svakom 'kraku').",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za |.|, razdvoji slučajeve x ≥ tjeme i x < tjeme; analiziraj svaki.",note:"postupak",final:true},{txt:"Točan odgovor: jedno ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: za |.|, razdvoji slučajeve x ≥ tjeme i x < tjeme; analiziraj svaki.",
     "Intuicija: logaritam raste sporo, V-funkcija linearno → najviše dvije presjeka (u svakom 'kraku').",
     "Česta greška: pretpostaviti više rješenja bez analize ponašanja na cijeloj domeni.",
     "Alt metoda (provjera): tangiraju se u (4, 1) jer f(4) = g(4) = 1 i f'(4) = 1/(2 ln 2) ≈ 0,72 < 1 = g'(4⁺) — različite derivacije, ne tangenta nego presjek u istoj točki.",
     "Provjera ekstrema: u tjemenu V g(x) ima minimum 1; f(x) prolazi kroz tu istu visinu samo jednom (jer raste sporo kroz domenu)"
   ,"Analiza: za x > 4, g(x) = x − 3; treba x − 3 = log₂(x − 2). Provjera na x = 6: 3 vs 2 (g > f); na x → ∞, g(x) raste brže linearno → bez novog presjeka."]
  },
  {id:40,type:"sa",topic:"geom",points:4,
   q:"Iz debla u obliku valjka dobije se greda u obliku uspravne prizme tako da se promjer AC kružnoga presjeka debla točkama E i F podijeli na tri jednaka dijela. Okomice na promjer AC u djelišnim točkama E i F sijeku kružnicu u točkama B i D. Presjek tražene grede jest četverokut ABCD. Koliki je postotak otpada pri proizvodnji grede iz debla?",
   sol:{ans:"≈ 40 %",alt:["40%","oko 40 %","≈40%"], ex:"Otpad = (P_kruga − P_ABCD)/P_kruga · 100 %. Postavi koordinate s ishodištem u središtu kruga; nađi koordinate B i D iz uvjeta x² + y² = r². Površina ABCD se računa kao paralelogram (po vektorima) ili kao trapez."},
  steps:[
     {txt:"Polumjer x; promjer AC = 2x. A(−x, 0), C(x, 0); E(−x/3, 0), F(x/3, 0)."},
     {txt:"B na kružnici nad E: (−x/3)² + y² = x² → y² = x² − x²/9 = 8x²/9 → y = 2√2/3·x."},
     {txt:"Slično D simetrično nad F: D(x/3, −2√2/3·x)."},
     {txt:"ABCD: A(−x, 0), B(−x/3, 2√2/3·x), C(x, 0), D(x/3, −2√2/3·x) — paralelogram (zapravo trapez)."},
     {txt:"Provjera AB || CD: vektor AB = (2x/3, 2√2/3·x); vektor DC = (2x/3, 2√2/3·x) ✓ paralelni i jednake duljine → paralelogram."},
     {txt:"Površina P_ABCD: |AB × AD| gdje AD = (4x/3, −2√2/3·x); cross product = (2x/3)·(−2√2/3·x) − (2√2/3·x)·(4x/3) = −12√2/9·x²."},
     {txt:"|P_ABCD| = 4√2/3·x² ≈ 1,886·x²; P_kruga = πx² ≈ 3,1416·x²."},
     {txt:"Otpad: (πx² − 4√2/3·x²)/πx² = 1 − 4√2/(3π) ≈ 1 − 0,600 ≈ 0,400 = 40 %."},
     {txt:"Provjera numerički: 4√2/(3π) = 4·1,4142/9,4248 ≈ 5,657/9,425 ≈ 0,600 → otpad ≈ 40 % ✓",note:"verifikacija", final:true},{txt:"Intuicija: postavi koordinatni sustav s središtem u centru kruga; izvedi B i D iz jednadžbe kružnice.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: otpad = (cjelina − dio)/cjelina × 100 %.",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 40 % ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: otpad = (cjelina − dio)/cjelina × 100 %.",
     "Intuicija: postavi koordinatni sustav s središtem u centru kruga; izvedi B i D iz jednadžbe kružnice.",
     "Česta greška: krivo prepoznati lik ABCD (jest paralelogram, ne kvadrat); ili pogrešno izračunati površinu.",
     "Alt metoda (provjera): trapez interpretacija — gledaj AB i CD kao paralelne osnovice, ali zapravo su jednake (paralelogram); površina = osnovica × visina = √(8/9 + 4/9·8/9)·x · ..., direktni paralelogram je lakši."
   ,"Provjera AB || CD: vektor AB = (2x/3, 2√2/3·x); vektor DC = (2x/3, 2√2/3·x) ✓ paralelni i jednake duljine → paralelogram.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  }
];

export const qImages = {
  "2022_ljeto_A__13": () => e(Svg13_2022Aljeto, null),
  "2022_ljeto_A__16": () => e(Svg16_2022Aljeto, null),
  "2022_ljeto_A__20": () => e(Svg20_2022Aljeto, null),
  "2022_ljeto_A__29.1": () => e(Svg29a_2022Aljeto, null),
  "2022_ljeto_A__30.1": () => e(Svg30_2022Aljeto, null),
  "2022_ljeto_A__32.1": () => e(Svg32a_2022Aljeto, null),
  "2022_ljeto_A__33.2": () => e(Svg33b_2022Aljeto, null),
  "2022_ljeto_A__35.1": () => e(Svg35a_2022Aljeto, null),
  "2022_ljeto_A__35.2": () => e(Svg35b_2022Aljeto, null),
  "2022_ljeto_A__36.2": () => e(Svg36b_2022Aljeto, null),
  "2022_ljeto_A__39.2": () => e(Svg39b_2022Aljeto, null),
};
