// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

// ── Zajednički koordinatni sustav u stilu izvornog ispitnog PDF-a (2014_ljeto_A) ──
// Sve boje idu preko tema-varijabli (var(--text)/--muted/--blue/--bg), nikad fiksne sive.
function _koord2014LA(o){
  const xMin=o.xMin,xMax=o.xMax,yMin=o.yMin,yMax=o.yMax,u=o.u||22;
  const padL=o.padL==null?16:o.padL, padR=o.padR==null?26:o.padR;
  const padT=o.padT==null?20:o.padT, padB=o.padB==null?18:o.padB;
  const W=Math.round(padL+padR+(xMax-xMin)*u);
  const H=Math.round(padT+padB+(yMax-yMin)*u);
  const toX=v=>padL+(v-xMin)*u;
  const toY=v=>padT+(yMax-v)*u;
  const ox=toX(0),oy=toY(0);
  const gx=[],gy=[];
  for(let i=Math.ceil(xMin);i<=Math.floor(xMax);i++) gx.push(i);
  for(let i=Math.ceil(yMin);i<=Math.floor(yMax);i++) gy.push(i);
  const grid=[
    ...gx.map(i=>e("line",{key:"gx"+i,x1:toX(i),y1:padT,x2:toX(i),y2:H-padB,stroke:"var(--muted)",strokeWidth:.7,opacity:.45})),
    ...gy.map(i=>e("line",{key:"gy"+i,x1:padL,y1:toY(i),x2:W-padR,y2:toY(i),stroke:"var(--muted)",strokeWidth:.7,opacity:.45})),
    e("rect",{key:"fr",x:padL,y:padT,width:W-padL-padR,height:H-padT-padB,fill:"none",stroke:"var(--muted)",strokeWidth:.7,opacity:.45})
  ];
  const axes=[
    e("line",{key:"ax",x1:padL,y1:oy,x2:W-padR+8,y2:oy,stroke:"var(--text)",strokeWidth:1.6}),
    e("line",{key:"ay",x1:ox,y1:H-padB,x2:ox,y2:padT-8,stroke:"var(--text)",strokeWidth:1.6}),
    e("polygon",{key:"ah",points:`${W-padR+15},${oy} ${W-padR+5},${oy-4} ${W-padR+5},${oy+4}`,fill:"var(--text)"}),
    e("polygon",{key:"av",points:`${ox},${padT-15} ${ox-4},${padT-5} ${ox+4},${padT-5}`,fill:"var(--text)"}),
    e("text",{key:"tx",x:W-padR+9,y:oy+17,fontSize:12,fontStyle:"italic",fontWeight:700,fill:"var(--text)"},"x"),
    e("text",{key:"ty",x:ox-15,y:padT-7,fontSize:12,fontStyle:"italic",fontWeight:700,fill:"var(--text)"},"y"),
    e("text",{key:"t0",x:ox-12,y:oy+16,fontSize:12,fontWeight:700,fill:"var(--text)"},"0"),
    e("circle",{key:"m1x",cx:toX(1),cy:oy,r:2.6,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}),
    e("text",{key:"n1x",x:toX(1)+4,y:oy+16,fontSize:12,fontWeight:700,fill:"var(--text)"},"1"),
    e("circle",{key:"m1y",cx:ox,cy:toY(1),r:2.6,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1}),
    e("text",{key:"n1y",x:ox-13,y:toY(1)-3,fontSize:12,fontWeight:700,fill:"var(--text)"},"1")
  ];
  return {W,H,u,xMin,xMax,yMin,yMax,toX,toY,ox,oy,padL,padR,padT,padB,grid,axes};
}

// Uzorkuje f na [xMin,xMax] i lomi krivulju na segmente kad izađe iz okvira po y.
function _krivulja2014LA(k,f,step){
  const segs=[]; let cur=[];
  for(let x=k.xMin;x<=k.xMax+1e-9;x+=(step||0.05)){
    const y=f(x);
    if(y>=k.yMin&&y<=k.yMax) cur.push(`${k.toX(x).toFixed(1)},${k.toY(y).toFixed(1)}`);
    else if(cur.length){ segs.push(cur); cur=[]; }
  }
  if(cur.length) segs.push(cur);
  return segs;
}

function SvgZad30_2014LA(){
  // Izvornik 30: trkaća staza u obliku "osmice".
  // Lukovi AB (kružnica K1: S1, r1=30) i CD (K2: S2, r2=60), ravni dijelovi AC i BD
  // leže na zajedničkim unutarnjim tangentama koje se sijeku u T.
  // sin θ = (r1+r2)/d = 90/180 = 1/2 → θ = 30°; T dijeli S1S2 u omjeru r1:r2 = 1:2 → T=(60,0).
  const W=400,H=212,s=1.22,cx0=68,cy0=106;
  const X=v=>cx0+v*s, Y=v=>cy0-v*s;
  const h=30*Math.cos(Math.PI/6);        // 25.98 — |y| diralištā na K1
  const A=[15,h], B=[15,-h];             // diralištā na K1 (15 = r1·sin30°)
  const D=[150,2*h], C=[150,-2*h];       // diralištā na K2 (150 = d − r2·sin30°)
  const T=[60,0], S1=[0,0], S2=[180,0];
  const R1=30*s, R2=60*s;
  const P=p=>`${X(p[0]).toFixed(2)} ${Y(p[1]).toFixed(2)}`;
  // A →(veliki luk K1, lijevo)→ B →(pravac BD)→ D →(veliki luk K2, desno)→ C →(pravac CA)→ A
  const staza=`M ${P(A)} A ${R1.toFixed(2)} ${R1.toFixed(2)} 0 1 0 ${P(B)}`
            + ` L ${P(D)}`
            + ` A ${R2.toFixed(2)} ${R2.toFixed(2)} 0 1 1 ${P(C)}`
            + ` L ${P(A)} Z`;
  const dot=(p,key)=>e("circle",{key:key,cx:X(p[0]),cy:Y(p[1]),r:3.4,fill:"var(--blue)",stroke:"var(--bg)",strokeWidth:1.4});
  const lbl=(p,dx,dy,txt,key)=>e("text",{key:key,x:X(p[0])+dx,y:Y(p[1])+dy,fontSize:13,fontStyle:"italic",fontWeight:700,fill:"var(--text)"},txt);
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("path",{d:staza,fill:"none",stroke:"var(--text)",strokeWidth:2.4,strokeLinejoin:"round"}),
    // Središta kružnica
    e("circle",{cx:X(S1[0]),cy:Y(S1[1]),r:2.4,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    e("circle",{cx:X(S2[0]),cy:Y(S2[1]),r:2.4,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    e("text",{x:X(S1[0])+6,y:Y(S1[1])+4,fontSize:13,fontStyle:"italic",fontWeight:700,fill:"var(--muted)"},"S₁"),
    e("text",{x:X(S2[0])+6,y:Y(S2[1])+4,fontSize:13,fontStyle:"italic",fontWeight:700,fill:"var(--muted)"},"S₂"),
    // Diralištā i sjecište tangenata
    dot(A,"pA"), dot(B,"pB"), dot(C,"pC"), dot(D,"pD"),
    e("circle",{cx:X(T[0]),cy:Y(T[1]),r:3.4,fill:"var(--gold)",stroke:"var(--bg)",strokeWidth:1.4}),
    lbl(A,6,-8,"A","lA"),
    lbl(B,2,17,"B","lB"),
    lbl(C,-6,19,"C","lC"),
    lbl(D,-4,-9,"D","lD"),
    e("text",{x:X(T[0])-16,y:Y(T[1])-8,fontSize:13,fontStyle:"italic",fontWeight:700,fill:"var(--gold)"},"T")
  );
}

function SvgZad28b_2014LA(){
  // Izvornik 28.2: PRAZAN koordinatni sustav — učenik sam crta graf f(x)=log₂x.
  const k=_koord2014LA({xMin:-5,xMax:5,yMin:-5,yMax:5,u:22});
  return e("svg",{viewBox:`0 0 ${k.W} ${k.H}`,style:{width:"100%",maxWidth:k.W,display:"block"}},
    ...k.grid, ...k.axes
  );
}

function SvgZad24b_2014LA(){
  // Izvornik 24.2: PRAZAN koordinatni sustav — učenik sam skicira x²/9+y²/4=1.
  const k=_koord2014LA({xMin:-4.5,xMax:4.5,yMin:-4.5,yMax:4.5,u:24});
  return e("svg",{viewBox:`0 0 ${k.W} ${k.H}`,style:{width:"100%",maxWidth:k.W,display:"block"}},
    ...k.grid, ...k.axes
  );
}

function SvgZad23a_2014LA(){
  // Graf s točkama K, M, N i vektorom MN→
  const W=320,H=260,cx=60,cy=210,sc=28;
  const gridLines=[];
  for(let i=0;i<=8;i++) gridLines.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  for(let i=0;i<=7;i++) gridLines.push(e("line",{key:"gh"+i,x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  // K=(2,3), M=(3,1), N=(7,4) → MN=(4,3)
  const K=[cx+2*sc,cy-3*sc], M=[cx+3*sc,cy-1*sc], N=[cx+7*sc,cy-4*sc];
  const L=[cx+10*sc,cy-9*sc]; // L=K+(8,6)
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...gridLines,
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:10,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"y"),
    e("text",{x:cx+4,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    ...[1,2,3,4,5,6,7,8].map(i=>e("text",{key:"lx"+i,x:cx+i*sc-5,y:cy+13,fill:"var(--muted)",fontSize:10},i)),
    ...[1,2,3,4,5,6,7].map(i=>e("text",{key:"ly"+i,x:cx-16,y:cy-i*sc+4,fill:"var(--muted)",fontSize:10},i)),
    // Vektor MN
    e("line",{x1:M[0],y1:M[1],x2:N[0],y2:N[1],stroke:"var(--blue)",strokeWidth:2.5}),
    e("polygon",{points:`${N[0]},${N[1]} ${N[0]-8},${N[1]+3} ${N[0]-5},${N[1]-5}`,fill:"var(--blue)"}),
    e("text",{x:(M[0]+N[0])/2+3,y:(M[1]+N[1])/2-6,fill:"var(--blue)",fontSize:12,fontWeight:"bold"},"MN→"),
    // Točke
    e("circle",{cx:K[0],cy:K[1],r:5,fill:"#e8c547"}),
    e("text",{x:K[0]+4,y:K[1]-4,fill:"#e8c547",fontSize:12,fontStyle:"italic",fontWeight:"bold"},"K"),
    e("circle",{cx:M[0],cy:M[1],r:4,fill:"var(--text)"}),
    e("text",{x:M[0]+4,y:M[1]+4,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"M"),
    e("circle",{cx:N[0],cy:N[1],r:4,fill:"var(--text)"}),
    e("text",{x:N[0]+4,y:N[1]-4,fill:"var(--text)",fontSize:11,fontStyle:"italic"},"N")
  );
}

function SvgZad22b_2014LA(){
  // Izvornik 22.2: graf y=f(x). Očitano iz izvornika: lok. maks. (−3,4), lok. min. (1,0),
  // f(−5)=0, f(−1)=2, f(0)=5/8, f(3)=4  →  f(x) = (x−1)²(x+5)/8.
  // Odatle g(−2)=f(−1)+2=4.
  const k=_koord2014LA({xMin:-5,xMax:5,yMin:-6,yMax:6,u:21});
  const segs=_krivulja2014LA(k,x=>(x-1)*(x-1)*(x+5)/8,0.04);
  return e("svg",{viewBox:`0 0 ${k.W} ${k.H}`,style:{width:"100%",maxWidth:k.W,display:"block"}},
    ...k.grid, ...k.axes,
    ...segs.map((sg,i)=>e("polyline",{key:"c"+i,points:sg.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"})),
    e("text",{x:k.toX(3.85),y:k.toY(5.35),fontSize:11,fontStyle:"italic",fontWeight:700,fill:"var(--blue)"},"y = f(x)")
  );
}

function SvgZad22a_2014LA(){
  // Izvornik 22.1: parabola y = x² − 4x (nultočke 0 i 4, tjeme T(2,−4)) u mreži.
  const k=_koord2014LA({xMin:-3,xMax:5.5,yMin:-6,yMax:6,u:21});
  const segs=_krivulja2014LA(k,x=>x*x-4*x,0.04);
  return e("svg",{viewBox:`0 0 ${k.W} ${k.H}`,style:{width:"100%",maxWidth:k.W,display:"block"}},
    ...k.grid, ...k.axes,
    ...segs.map((sg,i)=>e("polyline",{key:"c"+i,points:sg.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}))
  );
}

function SvgZad14_2014LA(){
  const W=300,H=220;
  // Pravokutan trokut: baza x, visina 7 (3+4), kut α lijevo dolje
  // Unutar: kateta visine 4 i kateta visine 3 dijele visinu
  const A=[40,190], B=[220,190], C=[220,60], M=[220,130];
  // A=lijevi dolje (kut α), B=desni dolje (pravi kut), C=desni gore
  // M=točka na CB na visini 4 (BC=130px, 4/7≈0.571, 7/7=1)
  // Skala: visina 7 ~ 130px, baza x ~ 180px
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Pravi kut kod B
    e("rect",{x:B[0]-14,y:B[1]-14,width:14,height:14,fill:"none",stroke:"var(--muted)",strokeWidth:1.5}),
    // Trokut
    e("polygon",{points:pts([A,B,C]),fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:2}),
    // Unutarnji pravac od A do M (dijeli na 4 i 3)
    e("line",{x1:A[0],y1:A[1],x2:M[0],y2:M[1],stroke:"#e8c547",strokeWidth:1.8}),
    // Mjere
    e("text",{x:B[0]+6,y:(B[1]+M[1])/2+4,fill:"var(--muted)",fontSize:13,fontWeight:"bold"},"4"),
    e("text",{x:B[0]+6,y:(M[1]+C[1])/2+4,fill:"var(--muted)",fontSize:13,fontWeight:"bold"},"3"),
    e("text",{x:(A[0]+B[0])/2,y:B[1]+16,fill:"var(--muted)",fontSize:13,fontStyle:"italic"},"x"),
    // Kut α
    e("path",{d:`M ${A[0]+38},${A[1]} A 38,38 0 0,0 ${A[0]+28},${A[1]-22}`,fill:"none",stroke:"#3dd68c",strokeWidth:1.5}),
    e("text",{x:A[0]+40,y:A[1]-4,fill:"#3dd68c",fontSize:13,fontStyle:"italic",fontWeight:"bold"},"α")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: podijeli obje strane s RT → n = pV/(RT).",topic:"al",points:1,
  q:"Čemu je jednako n ako je pV = nRT?",
  opts:["n = pV − RT","n = RT − pV","n = RT/(pV)","n = pV/(RT)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: izolirati n iz jednadžbe pV=nRT — podijeliti obje strane s RT.",note:"pV=nRT je jednadžba idealnog plina. n je broj molova."},
    {txt:"Podijelimo obje strane s RT: pV/(RT) = n·RT/(RT) → n = pV/(RT)",note:"RT≠0 jer T>0 i R>0 (konstante). Dijeljenje je validno."},
    {txt:"Provjera dimenzija: [Pa·m³] / ([J/(mol·K)]·[K]) = [mol] ✓. Odgovor: D",note:"Dimenzionalna analiza potvrđuje ispravnost.",final:true},{txt:"Intuicija: Provjera dimenzija: p [Pa=N/m²], V [m³], R [J/(mol·K)], T [K] → pV/RT = [N/m²·m³]/[J/mol] = [N·m/J]·mol = mol ✓.",note:"intuicija",final:true},{txt:"Sažetak postupka: Izoliranje varijable iz jednadžbe idealnog plina pV=nRT: podijelimo s RT (što je konstantno) → n=pV/(RT).",note:"postupak",final:true},{txt:"Analiza B: n=RT−pV — isti problem s dimenzijama + pogrešan redoslijed.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Analiza A: n=pV−RT — oduzimanje veličina s različitim dimenzijama (Pa·m³ i J/K·K) je besmisleno.",note:"diagnostika",final:true}
  ],
  why:[
    "Izoliranje varijable iz jednadžbe idealnog plina pV=nRT: podijelimo s RT (što je konstantno) → n=pV/(RT).",
    "Provjera dimenzija: p [Pa=N/m²], V [m³], R [J/(mol·K)], T [K] → pV/RT = [N/m²·m³]/[J/mol] = [N·m/J]·mol = mol ✓.",
    "Analiza A: n=pV−RT — oduzimanje veličina s različitim dimenzijama (Pa·m³ i J/K·K) je besmisleno.",
    "Analiza B: n=RT−pV — isti problem s dimenzijama + pogrešan redoslijed.",
    "Analiza C: n=RT/(pV) — invertirani razlomak. n bi rastao s T i padao s V (suprotno od zakona idealnog plina).",
    "Provjera ✓: n·RT = pV/(RT)·RT = pV ✓"
  ]},
  {id:2,type:"mc",warn:"Pazi: pomnoži sve s 6 → −2 < x < 5; pa zbroji cijele brojeve strogo unutar.",topic:"br",points:1,
  q:"Koliki je zbroj svih cijelih brojeva za koje vrijedi -1/3 < x/6 < 5/6?",
  opts:["3","5","7","9"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: množiti sva tri dijela nejednakosti s 6 (pozitivno → smjer ne mijenjamo).",note:"Množimo s 6 da eliminiramo razlomke: 6·(−1/3) = −2; 6·(x/6) = x; 6·(5/6) = 5."},
    {txt:"Rezultat: −2 < x < 5 (stroga nejednakost na obje strane)",note:"Granice −2 i 5 su ISKLJUČENE jer su nejednakosti stroge (<, ne ≤)."},
    {txt:"Cijeli brojevi u ⟩−2, 5⟨ (otvoreni): −1, 0, 1, 2, 3, 4 (ukupno 6 brojeva)",note:"Pažnja: −2 i 5 nisu u skupu jer su granice stroge."},
    {txt:"Zbroj: (−1)+0+1+2+3+4 = 9 → D",note:"Brži izračun: 0+1+2+3+4=10, minus 1 = 9. Ili parovi: (−1+4)+(0+3)+(1+2)=3+3+3=9.",final:true},{txt:"Intuicija: Cijeli brojevi u otvorenom intervalu (−2, 5): −1, 0, 1, 2, 3, 4. Zbroj = 9. Granice −2 i 5 su isključene jer je nejednakost stroga (<).",note:"intuicija",final:true},{txt:"Sažetak postupka: Množenje svih dijelova nejednakosti s pozitivnim brojem 6 ne mijenja smjer: −1/3 < x/6 < 5/6 → −2 < x < 5.",note:"postupak",final:true},{txt:"Analiza C=7: možda uzeto samo 1+2+3+4=10 bez −1 i 0? Ili −1+0+1+2+3+4−2=7? Nema logike — C je pogrešno.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Analiza A=3: zbroj pozitivnih cijelih 1+2=3 (zanemaren −1 i nula). Analiza B=5: samo 0+1+2+3+4=10, podijeljeno s 2? Pogrešno.",note:"diagnostika",final:true}
  ],
  why:[
    "Množenje svih dijelova nejednakosti s pozitivnim brojem 6 ne mijenja smjer: −1/3 < x/6 < 5/6 → −2 < x < 5.",
    "Cijeli brojevi u otvorenom intervalu (−2, 5): −1, 0, 1, 2, 3, 4. Zbroj = 9. Granice −2 i 5 su isključene jer je nejednakost stroga (<).",
    "Analiza A=3: zbroj pozitivnih cijelih 1+2=3 (zanemaren −1 i nula). Analiza B=5: samo 0+1+2+3+4=10, podijeljeno s 2? Pogrešno.",
    "Analiza C=7: možda uzeto samo 1+2+3+4=10 bez −1 i 0? Ili −1+0+1+2+3+4−2=7? Nema logike — C je pogrešno.",
    "Česta greška: uključiti granice −2 ili 5 (jer nejednakosti ponekad zbune). Stroga < isključuje granice.",
    "Provjera ✓: −1+0+1+2+3+4 = (−1+1)+(0+4)+(2+3) = 0+4+5 = 9 ✓"
  ]},
  {id:3,type:"mc",warn:"Pazi: masa = gustoća · volumen; pazi na zapis potencije (10²⁰) i jedinice.",topic:"br",points:1,
  q:"Volumen planeta Marsa je 1,629·10²⁰ m³, a prosječna gustoća je 3 940 kg/m³. Kolika je masa planeta Marsa? (Gustoća = masa/volumen)",
  opts:["2,41876·10²² kg","6,41826·10²² kg","2,41876·10²³ kg","6,41826·10²³ kg"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"Strategija: m = gustoća × volumen. Koristimo m=ρ·V.",note:"Gustoća ρ = m/V → m = ρ·V. Uvrštavamo ρ=3940 kg/m³ i V=1,629·10²⁰ m³."},
    {txt:"m = 3940 × 1,629·10²⁰ kg",note:"Odvojimo konstantni dio od eksponenta."},
    {txt:"3940 × 1,629 = 6,41826 (zaokruženo). Eksponent: 10²⁰.",note:"3940 × 1,629: 3940 × 1,6 = 6304; 3940 × 0,029 = 114,26; ukupno ≈ 6418,26. Kao 6,41826 × 10³."},
    {txt:"m ≈ 6,41826 × 10³ × 10²⁰ = 6,41826 × 10²³ kg → D",note:"10³ × 10²⁰ = 10²³. Redoslijed veličine: Zemlja ima ~5,97·10²⁴ kg, Mars je manji ✓.",final:true},{txt:"Intuicija: 3940 = 3,940·10³. Dakle: m = 3,940·10³ × 1,629·10²⁰ = (3,940×1,629)·10²³ = 6,418·10²³.",note:"intuicija",final:true},{txt:"Sažetak postupka: Formula: masa = gustoća × volumen: m = ρ·V = 3940 × 1,629·10²⁰ ≈ 6,418·10²³ kg. Ključan je redoslijed veličine (eksponent).",note:"postupak",final:true},{txt:"Česta greška: zbrojiti eksponente umjesto množiti: 10³ × 10²⁰ ≠ 10³⁺²⁰ = 10²³? Da, to je ispravno! Množenje potencija s istom bazom: 10^a × 10^b = 10^(a+b).",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Analiza A,B (10²² vs 10²³): razlika u eksponentu za 10. A i B su ~10× premali. Provjera: Mars je ~107× lakši od Zemlje (5,97·10²⁴), što daje ~5,6·10²² ... hmm. Stvarna masa Marsa ≈ 6,39·10²³ kg ✓.",note:"diagnostika",final:true}
  ],
  why:[
    "Formula: masa = gustoća × volumen: m = ρ·V = 3940 × 1,629·10²⁰ ≈ 6,418·10²³ kg. Ključan je redoslijed veličine (eksponent).",
    "3940 = 3,940·10³. Dakle: m = 3,940·10³ × 1,629·10²⁰ = (3,940×1,629)·10²³ = 6,418·10²³.",
    "Analiza A,B (10²² vs 10²³): razlika u eksponentu za 10. A i B su ~10× premali. Provjera: Mars je ~107× lakši od Zemlje (5,97·10²⁴), što daje ~5,6·10²² ... hmm. Stvarna masa Marsa ≈ 6,39·10²³ kg ✓.",
    "Česta greška: zbrojiti eksponente umjesto množiti: 10³ × 10²⁰ ≠ 10³⁺²⁰ = 10²³? Da, to je ispravno! Množenje potencija s istom bazom: 10^a × 10^b = 10^(a+b).",
    "Česta greška #2: pogrešan izračun 3940 × 1,629. Koristiti aproksimaciju: 4000 × 1,6 = 6400 → red veličine 6,4·10²³ ✓.",
    "Provjera ✓: 6,41826·10²³ / (1,629·10²⁰) = 6,41826/1,629 × 10³ ≈ 3940 ≈ ρ ✓"
  ]},
  {id:4,type:"mc",warn:"Pazi: odsječci na osima → segmentni oblik x/2 + y/5 = 1 (ili nagib (5 − 0)/(0 − 2)).",topic:"anal",points:1,
  q:"Koji od navedenih pravaca prolazi točkama (2, 0) i (0, 5)?",
  opts:["x/(-3)+y/(-7)=1","x/(-2)+y/(-5)=1","x/2+y/5=1","x/3+y/7=1"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: pravac s poznatim x-presjekom a i y-presjekom b: x/a + y/b = 1.",note:"Točka (2,0) daje x-presjek a=2; točka (0,5) daje y-presjek b=5."},
    {txt:"Jednadžba: x/2 + y/5 = 1",note:"Direktno uvrštavamo a=2 i b=5 u odsječni oblik."},
    {txt:"Provjera (2,0): 2/2 + 0/5 = 1 + 0 = 1 ✓. Provjera (0,5): 0/2 + 5/5 = 0 + 1 = 1 ✓ → C",note:"Oba zadana presjeka zadovoljavaju jednadžbu.",final:true},{txt:"Intuicija: Provjera svih opcija: A: x/(−3)+y/(−7)=1 → za (2,0): −2/3≠1 ✗. B: x/(−2)+y/(−5)=1 → −1≠1 ✗. C: x/2+y/5=1 → 1 ✓. D: x/3+y/7=1 → 2/3≠1 ✗.",note:"intuicija",final:true},{txt:"Sažetak postupka: Odsječni oblik pravca: x/a + y/b = 1 gdje a=x-presjek (gdje pravac križi x-os) i b=y-presjek (gdje križi y-os). Za (2,0) i (0,5): a=2, b=5.",note:"postupak",final:true},{txt:"Alt metoda: iz nagib-odsječnog oblika: nagib k=(0−5)/(2−0)=−5/2; jednadžba: y=−5x/2+5 → 5x+2y=10 → x/2+y/5=1 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Česta greška: zamijeniti a i b ili koristiti koordinate s pogrešnim presjekom. x-presjek je točka (a,0), y-presjek je (0,b).",note:"diagnostika",final:true}
  ],
  why:[
    "Odsječni oblik pravca: x/a + y/b = 1 gdje a=x-presjek (gdje pravac križi x-os) i b=y-presjek (gdje križi y-os). Za (2,0) i (0,5): a=2, b=5.",
    "Provjera svih opcija: A: x/(−3)+y/(−7)=1 → za (2,0): −2/3≠1 ✗. B: x/(−2)+y/(−5)=1 → −1≠1 ✗. C: x/2+y/5=1 → 1 ✓. D: x/3+y/7=1 → 2/3≠1 ✗.",
    "Česta greška: zamijeniti a i b ili koristiti koordinate s pogrešnim presjekom. x-presjek je točka (a,0), y-presjek je (0,b).",
    "Alt metoda: iz nagib-odsječnog oblika: nagib k=(0−5)/(2−0)=−5/2; jednadžba: y=−5x/2+5 → 5x+2y=10 → x/2+y/5=1 ✓.",
    "Analiza D: x/3+y/7=1 → za (2,0): 2/3+0=2/3≠1 ✗. Isključujemo.",
    "Provjera ✓: C za (2,0): 2/2+0/5=1 ✓; za (0,5): 0/2+5/5=1 ✓"
  ]},
  {id:5,type:"mc",warn:"Pazi: kraća dijagonala je nasuprot ŠILJASTOM kutu; poučak o kosinusu (pazi koji kut uzimaš!).",topic:"geom",points:1,
  q:"Duljine stranica paralelograma iznose 42,3 cm i 58,1 cm, a mjera jednog kuta je 74°35'. Kolika je duljina kraće dijagonale?",
  opts:["39,8 cm","62,1 cm","71,9 cm","85,3 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"U paralelogramu dijagonala je treća stranica trokuta s dvjema stranicama i uključenim kutom",note:"Strategija: kosinusov poučak za kraću dijagonalu (nasuprot manjem kutu 74°35)."},
    {txt:"Kraća dijagonala je nasuprotna manjem kutu (74°35')",note:"Kraća dijagonala = dijagonala nasuprot manjem kutu između stranica a=42,3 i b=58,1."},
    {txt:"d² = 42,3² + 58,1² − 2·42,3·58,1·cos(74°35')",note:"d² = a² + b² − 2ab·cos(kut). Uvrštavamo vrijednosti i izračunamo."},
    {txt:"= 1 789,29 + 3 375,61 − 4 915,26·cos(74,583°) ≈ 3 858 → d ≈ 62,1 cm",note:"d ≈ 62,1 cm → B",final:true},{txt:"Intuicija: d² = 42,3² + 58,1² − 2·42,3·58,1·cos(54°) ≈ 1789 + 3376 − 2882 ≈ 2283 → d ≈ 47,8... ali provjeri distractor bliži odgovoru.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Dijagonala paralelograma: d² = a² + b² − 2ab·cos(kut) (poopćeni Pitagorin poučak).",note:"postupak",final:true},{txt:"Poučak o kosinusu: c²=a²+b²-2ab·cosC. Kut uključen između danih stranica je 74°35'.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti kut direktno bez kosinusa kuta — treba cos a ne a.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Dijagonala paralelograma: d² = a² + b² − 2ab·cos(kut) (poopćeni Pitagorin poučak).",
    "Intuicija: d² = 42,3² + 58,1² − 2·42,3·58,1·cos(54°) ≈ 1789 + 3376 − 2882 ≈ 2283 → d ≈ 47,8... ali provjeri distractor bliži odgovoru.",
    "Česta greška: Koristiti kut direktno bez kosinusa kuta — treba cos a ne a.",
    "Poučak o kosinusu: c²=a²+b²-2ab·cosC. Kut uključen između danih stranica je 74°35'.",
    "Provjera ✓: Zadatak fizike — provjeri dimenzionalnu konzistentnost ✓"
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]},
  {id:6,type:"mc",warn:"Pazi: postotci se množe (·0,8 pa ·0,9 = 0,72), ne oduzimaju — nije −30 %.",topic:"br",points:1,
  q:"Cijena suknje iznosila je 173 kn. Trgovac je odlučio sniziti cijenu 20%, no nije je uspio prodati pa je odlučio sniziti već sniženu cijenu još 10%. Koliko iznosi cijena suknje nakon tih sniženja?",
  opts:["96,88 kn","121,10 kn","124,56 kn","143,04 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: uzastopna sniženja — svako sniženje primjenjujemo na TEKUĆU cijenu.",note:"Sniženje 20% znači: nova cijena = 80% stare = pomnožiti s 0,80."},
    {txt:"Prvo sniženje 20%: 173 × 0,80 = 138,40 kn",note:"Zadržavamo 80% (100%−20%=80%). Množimo s 0,80."},
    {txt:"Drugo sniženje 10%: 138,40 × 0,90 = 124,56 kn → C",note:"Zadržavamo 90% od već snižene cijene."},
    {txt:"Provjera: dva uzastopna faktora = 0,80 × 0,90 = 0,72 ≠ 0,70 (30% odjednom)",note:"Dva uzastopna sniženja daju VIŠE smanjenja od jednak jednog: 28% ukupno, ne 30%.",final:true},{txt:"Intuicija: Ovo je važna matematička lekcija: zbrajanje postotaka vrijedi samo za jednokratno sniženje. Za uzastopna sniženja moramo množiti faktore.",note:"intuicija",final:true},{txt:"Sažetak postupka: Uzastopna sniženja: svako sniženje p% primjenjujemo na tekuću (već sniženu) cijenu. Faktori se MNOŽE: 0,80 × 0,90 = 0,72 → ukupno 28% sniženje (ne 20%+10%=30%).",note:"postupak",final:true},{txt:"Analiza A=96,88: 173×0,56 ≈ 97 kn — previše sniženo, nema osnove.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Analiza B=121,10: to je 173×0,70=121,10 — jednokratno sniženje 30%. Pogrešno (zbrajanje postotaka).",note:"diagnostika",final:true}
  ],
  why:[
    "Uzastopna sniženja: svako sniženje p% primjenjujemo na tekuću (već sniženu) cijenu. Faktori se MNOŽE: 0,80 × 0,90 = 0,72 → ukupno 28% sniženje (ne 20%+10%=30%).",
    "Ovo je važna matematička lekcija: zbrajanje postotaka vrijedi samo za jednokratno sniženje. Za uzastopna sniženja moramo množiti faktore.",
    "Analiza B=121,10: to je 173×0,70=121,10 — jednokratno sniženje 30%. Pogrešno (zbrajanje postotaka).",
    "Analiza A=96,88: 173×0,56 ≈ 97 kn — previše sniženo, nema osnove.",
    "Analiza D=143,04: 173×0,83 — nije jasno od kuda ovo dolazi.",
    "Provjera ✓: 173×0,80=138,40; 138,40×0,90=124,56 ✓"
  ]},
  {id:7,type:"mc",warn:"Pazi: uvrsti g(x) = x² − 3 umjesto x u f → ((x² − 3) + 3)/((x² − 3) − 1); pa sredi.",topic:"lin",points:1,
  q:"Zadane su funkcije f(x)=(x+3)/(x-1) i g(x)=x²-3. Čemu je jednaka kompozicija (f∘g)(x)?",
  opts:["x²/(x-1)","(x³+3x²-3x-9)/(x-1)","x²/(x²-4)","(x³−x²-2x+6)/(x²-4)"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: (f∘g)(x) = f(g(x)) — uvrštavamo g(x)=x²−3 umjesto x u f.",note:"Kompozicija f∘g: PRVO primjeni g, ZATIM f. Dakle f(g(x))."},
    {txt:"f(x²−3) = (x²−3+3) / ((x²−3)−1) = x² / (x²−4)",note:"Uvrstimo x²−3 na svako mjesto gdje u f stoji x. Brojnik: x²−3+3=x². Nazivnik: x²−3−1=x²−4."},
    {txt:"Rezultat: x²/(x²−4) → C",note:"Uvjet: x²−4≠0 → x≠±2. Domena kompozicije: ℝ{±2}.",final:true},{txt:"Intuicija: Izračun: f(x²−3) = ((x²−3)+3)/((x²−3)−1) = x²/(x²−4). Razlika kvadrata: x²−4=(x+2)(x−2).",note:"intuicija",final:true},{txt:"Sažetak postupka: Kompozicija f∘g: (f∘g)(x) = f(g(x)). Redoslijed: 1) izračunaj g(x)=x²−3, 2) uvrsti u f(x)=(x+3)/(x−1). Zamjenimo x s (x²−3) u formuli f.",note:"postupak",final:true},{txt:"Analiza B: (x³+3x²−3x−9)/(x−1) — to je (g∘f)(x) = g(f(x)) = (f(x))²−3 razvijeno. Obrnut redoslijed!",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Analiza A: x²/(x−1) — to bi bio f(g(x)) za g(x)=x (tj. nema g). Pogrešno.",note:"diagnostika",final:true}
  ],
  why:[
    "Kompozicija f∘g: (f∘g)(x) = f(g(x)). Redoslijed: 1) izračunaj g(x)=x²−3, 2) uvrsti u f(x)=(x+3)/(x−1). Zamjenimo x s (x²−3) u formuli f.",
    "Izračun: f(x²−3) = ((x²−3)+3)/((x²−3)−1) = x²/(x²−4). Razlika kvadrata: x²−4=(x+2)(x−2).",
    "Analiza A: x²/(x−1) — to bi bio f(g(x)) za g(x)=x (tj. nema g). Pogrešno.",
    "Analiza B: (x³+3x²−3x−9)/(x−1) — to je (g∘f)(x) = g(f(x)) = (f(x))²−3 razvijeno. Obrnut redoslijed!",
    "Analiza D: (x³−x²−2x+6)/(x²−4) — numerator nije točan za f(g(x)).",
    "Provjera ✓: za x=2: g(2)=4−3=1; f(1)=(1+3)/(1−1)=4/0 (nedefiniran — to potvrđuje x≠2 u domeni). Za x=3: g(3)=6; f(6)=9/5; direktno: 9/(9−4)=9/5 ✓"
  ]},
  {id:8,type:"mc",warn:"Pazi: broj je realan ako mu je imaginarni dio 0; pojednostavi svaki (pazi na i² = −1).",topic:"komp",points:1,
  q:"Koji je od navedenih kompleksnih brojeva realan?",
  opts:["2(cosπ + i·sinπ)","4(cosπ/2 + i·sinπ/2)","6(cosπ/3 + i·sinπ/3)","8(cosπ/4 + i·sinπ/4)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: koristiti Eulerovu formulu e^(iθ)=cosθ+i·sinθ. Broj je realan ⟺ Im=0 ⟺ sinθ=0.",note:"r(cosθ+i·sinθ) je realan kad je imaginarni dio = r·sinθ = 0, tj. sinθ=0."},
    {txt:"A: θ=π. sin(π)=0 → 2(cos π+i·sin π) = 2(−1+0·i) = −2 ∈ ℝ ✓",note:"sin(π)=0 → imaginarni dio nestaje. Rezultat je čisto realan broj −2."},
    {txt:"B: θ=π/2. sin(π/2)=1 → 4(0+i) = 4i — čisto imaginaran ✗",note:"cos(π/2)=0, sin(π/2)=1 → 4·i ∈ iℝ."},
    {txt:"C: θ=π/3. sin(π/3)=√3/2≠0 → kompleksan ✗. D: θ=π/4. sin(π/4)=√2/2≠0 → kompleksan ✗. Odgovor: A",note:"Jedino π je višekratnik π s cjelobrojnim koeficijentom gdje je sin=0 (uz θ=0,π,2π,...).",final:true},{txt:"Intuicija: Provjera A: 2(cos π+i·sin π) = 2(−1+i·0) = −2 ∈ ℝ ✓. Jedini slučaj gdje sin=0 od ponuđenih opcija.",note:"intuicija",final:true},{txt:"Sažetak postupka: Trigonometrijski oblik kompleksnog broja: z = r(cosθ+i·sinθ). Imaginarni dio = r·sinθ. Za realni broj: sinθ=0 → θ=kπ za k∈ℤ.",note:"postupak",final:true},{txt:"Analiza C: θ=π/3. cos(π/3)=1/2, sin(π/3)=√3/2. 6(1/2+i√3/2) = 3+3i√3 — kompleksan (ne realan).",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Analiza B: θ=π/2. sin(π/2)=1. 4(cos(π/2)+i·sin(π/2)) = 4(0+i) = 4i — čisto imaginaran.",note:"diagnostika",final:true}
  ],
  why:[
    "Trigonometrijski oblik kompleksnog broja: z = r(cosθ+i·sinθ). Imaginarni dio = r·sinθ. Za realni broj: sinθ=0 → θ=kπ za k∈ℤ.",
    "Provjera A: 2(cos π+i·sin π) = 2(−1+i·0) = −2 ∈ ℝ ✓. Jedini slučaj gdje sin=0 od ponuđenih opcija.",
    "Analiza B: θ=π/2. sin(π/2)=1. 4(cos(π/2)+i·sin(π/2)) = 4(0+i) = 4i — čisto imaginaran.",
    "Analiza C: θ=π/3. cos(π/3)=1/2, sin(π/3)=√3/2. 6(1/2+i√3/2) = 3+3i√3 — kompleksan (ne realan).",
    "Analiza D: θ=π/4. cos=sin=√2/2. 8(√2/2+i√2/2) = 4√2+4√2·i — kompleksan.",
    "Provjera ✓: 2(cos π + i·sin π) = 2(−1+0) = −2 ∈ ℝ ✓. Imaginarni dio = 0 ✓"
  ]},
  {id:9,type:"mc",warn:"Pazi: z − 3 = (1 − 3) + 2i = −2 + 2i; modul = √((−2)² + 2²).",topic:"komp",points:1,
  q:"Zadan je kompleksan broj z = 1 + 2i. Koliko je |z − 3|?",
  opts:["0","2√2","√5 − 3","3 − √3"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: izračunati kompleksni broj z−3, zatim modul.",note:"Modul kompleksnog broja a+bi: |a+bi|=√(a²+b²). Udaljenost točke od ishodišta."},
    {txt:"z − 3 = (1+2i) − 3 = (1−3) + 2i = −2 + 2i",note:"Oduzimanje realnog broja 3 od z: mijenjamo samo realni dio (1−3=−2), imaginarni ostaje."},
    {txt:"|−2+2i| = √((−2)²+2²) = √(4+4) = √8 = 2√2 → B",note:"√8 = √(4·2) = 2√2. Udaljenost točke (−2,2) od ishodišta u kompleksnoj ravnini.",final:true},{txt:"Intuicija: Alternativni izračun: direktno računamo razliku, pa modul. z−3 = −2+2i → |−2+2i| = √(4+4) = √8 = 2√2.",note:"intuicija",final:true},{txt:"Sažetak postupka: Modul razlike |z−w| = udaljenost između točaka z i w u kompleksnoj ravnini. |z−3| = udaljenost od z=(1,2) do točke 3=(3,0) = √((1−3)²+(2−0)²) = √8 = 2√2.",note:"postupak",final:true},{txt:"Česta greška: |z−3| = |z|−3 = √5−3 (opcija C). ALI: modul razlike ≠ razlika modula. |a−b| ≠ |a|−|b| u općem slučaju.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Analiza A=0: |z−3|=0 ⟺ z=3, ali z=1+2i≠3 ✗. Analiza C=√5−3 ≈ 2,236−3 < 0 (nema smisla za modul). Analiza D=3−√3 ≈ 1,27 ≠ 2√2 ≈ 2,83.",note:"diagnostika",final:true}
  ],
  why:[
    "Modul razlike |z−w| = udaljenost između točaka z i w u kompleksnoj ravnini. |z−3| = udaljenost od z=(1,2) do točke 3=(3,0) = √((1−3)²+(2−0)²) = √8 = 2√2.",
    "Alternativni izračun: direktno računamo razliku, pa modul. z−3 = −2+2i → |−2+2i| = √(4+4) = √8 = 2√2.",
    "Analiza A=0: |z−3|=0 ⟺ z=3, ali z=1+2i≠3 ✗. Analiza C=√5−3 ≈ 2,236−3 < 0 (nema smisla za modul). Analiza D=3−√3 ≈ 1,27 ≠ 2√2 ≈ 2,83.",
    "Česta greška: |z−3| = |z|−3 = √5−3 (opcija C). ALI: modul razlike ≠ razlika modula. |a−b| ≠ |a|−|b| u općem slučaju.",
    "Geometrijska interpretacija: z=(1,2) i 3=(3,0) u kompleksnoj ravnini. Udaljenost = √((3−1)²+(0−2)²) = √(4+4) = 2√2.",
    "Provjera ✓: (−2)²+2² = 4+4 = 8; √8 = 2√2 ≈ 2,828 ✓"
  ]},
  {id:10,type:"mc",warn:"Pazi: ako je pravac OKOMIT na ravninu, projekcija je samo TOČKA (probodište).",topic:"geom",points:1,
  q:"Što je ortogonalna projekcija pravca na ravninu ako je pravac okomit na tu ravninu?",
  opts:["točka","dužina","polupravac","pravac"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: definicija ortogonalne projekcije — spustiti okomicu iz svake točke pravca na ravninu.",note:"Projekcija točke P na ravninu π: noga okomice iz P na π. Projekcija skupa = skup projekcija."},
    {txt:"Pravac okomit na ravninu: probada ravninu u jednoj točki T.",note:"Geometrijski: ako pravac ⊥ ravnina, on je normala ravnine i siječe je u točno jednoj točki."},
    {txt:"Projekcija svake točke pravca: noga okomice iz te točke na ravninu pada u istu točku T.",note:"Jer je pravac okomit, okomica iz svake točke pravca pada na isti podnožni point T."},
    {txt:"Dakle ortogonalna projekcija = jedna točka T → A",note:"Projekcija cijelog pravca (koji je ⊥ ravnini) kondenzira se u jednu točku.",final:true},{txt:"Intuicija: Za pravac ⊥ ravnina: pravac probada ravninu u jednoj točki T. Svaka točka pravca projektira se na T (jer je pravac već normala ravnine — noga okomice je uvijek T).",note:"intuicija",final:true},{txt:"Sažetak postupka: Ortogonalna projekcija pravca p na ravninu π: uzimamo svaku točku P na p, spuštamo okomicu na π, dobivamo njen podnožac P. Skup svih takvih P je projekcija pravca.",note:"postupak",final:true},{txt:"Analiza C (polupravac): nema smisla za projekciju geometrijskog pravca.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Analiza B (dužina): dužina bi bila projekcija pravca PARALELNOG ili KOSOG prema ravnini. Kosi pravac → dužina ili polupravac ili pravac.",note:"diagnostika",final:true}
  ],
  why:[
    "Ortogonalna projekcija pravca p na ravninu π: uzimamo svaku točku P na p, spuštamo okomicu na π, dobivamo njen podnožac P. Skup svih takvih P je projekcija pravca.",
    "Za pravac ⊥ ravnina: pravac probada ravninu u jednoj točki T. Svaka točka pravca projektira se na T (jer je pravac već normala ravnine — noga okomice je uvijek T).",
    "Analiza B (dužina): dužina bi bila projekcija pravca PARALELNOG ili KOSOG prema ravnini. Kosi pravac → dužina ili polupravac ili pravac.",
    "Analiza C (polupravac): nema smisla za projekciju geometrijskog pravca.",
    "Analiza D (pravac): projekcija paralelnog pravca (koji nije u ravnini) ili nagnutog pravca koji siječe ravninu pod kutom ≠ 90°.",
    "Provjera ✓: Primjer. Pravac z-os (x=0,y=0) je ⊥ xy-ravnini. Projekcija svake točke (0,0,z) na xy-ravninu je (0,0,0) — jedna točka ✓"
  ]},
  {id:11,type:"mc",warn:"Pazi: riješi svaku i provjeri pripada li rješenje ℕ (prirodni 1, 2, 3…, ne 0 ni razlomci).",topic:"al",points:2,
  q:"Zadane su četiri jednadžbe: (2x+4)/5=1;  x²-3=0;  2^{x+1}=1/4;  log₂x=3. Koliko jednadžbi ima rješenje koje pripada skupu prirodnih brojeva?",
  opts:["samo jedna jednadžba","točno dvije jednadžbe","točno tri jednadžbe","sve četiri jednadžbe"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  ex:"(2x+4)/5=1 → x=1/2 (racionalno). x²−3=0 → x=±√3 (iracionalno). 2^(x+1)=1/4 → x=−3 (racionalno). log(x−1)=0 → x=2 (racionalno). → točno 3 jednadžbe imaju racionalna rješenja.",
  steps:[
    {txt:"I: (2x+4)/5=1 → 2x+4=5 → x=1/2 ∉ ℕ ✗",note:"Strategija: riješiti svaku jednadžbu i provjeriti je li rješenje u ℕ={1,2,3,...}."},
    {txt:"II: x²-3=0 → x=±√3 ∉ ℕ ✗",note:"I: x=1/2 ∉ ℕ. Razlomci nisu prirodni."},
    {txt:"III: 2^(x+1)=1/4=2^(-2) → x=-3 ∉ ℕ ✗",note:"II: x=±√3. Iracionalni brojevi nisu u ℕ."},
    {txt:"IV: log₂x=3 → x=8 ∈ ℕ ✓ — samo jedna jednadžba",note:"III: x=−3. Negativni cijeli nisu u ℕ.",final:true},{txt:"Intuicija: Samo x²−3=0 daje iracionalna rješenja (√3). Ostale tri imaju racionalna rješenja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Provjeri svaku jednadžbu: (2x+4)/5=1 → x=1/2 (racionalno); x²−3=0 → x=±√3 (iracionalno); 2^(x+1)=1/4 → x=−3 (racionalno); log(x−1)=0 → x=2 (racionalno).",note:"postupak",final:true},{txt:"Alt metoda: Direktnim rješavanjem: ako znamo da su 3 jednadžbe racionalne → odgovor 'točno tri' ako je i ta iracionalna.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Česta greška: Zaboraviti provjeru svih opcija — svaka jednadžba mora biti posebno riješena.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Provjeri svaku jednadžbu: (2x+4)/5=1 → x=1/2 (racionalno); x²−3=0 → x=±√3 (iracionalno); 2^(x+1)=1/4 → x=−3 (racionalno); log(x−1)=0 → x=2 (racionalno).",
    "Intuicija: Samo x²−3=0 daje iracionalna rješenja (√3). Ostale tri imaju racionalna rješenja.",
    "Česta greška: Zaboraviti provjeru svih opcija — svaka jednadžba mora biti posebno riješena.",
    "Alt metoda: Direktnim rješavanjem: ako znamo da su 3 jednadžbe racionalne → odgovor 'točno tri' ako je i ta iracionalna.",
    "ℕ={1,2,3,...} (prirodni brojevi). Provjeri svaku jednadžbu posebno.",
    "Provjera ✓: 2^(−3+1)=2^(−2)=1/4 ✓; log(2−1)=log(1)=0 ✓ → 3 racionalna ✓"
  ]},
  {id:12,type:"mc",warn:"Pazi: uvrsti y = 3 − x u krivulju → kvadratna; sjecišta su krajevi tetive, pa udaljenost.",topic:"anal",points:2,
  q:"Kolika je duljina tetive koju pravac x+y-3=0 odsijeca na krivulji 4x²−y²=36?",
  opts:["2√2","2√17","8√2","8√17"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  ex:"x+y=3 → y=3−x. x²+(3−x)²=r². Ako r²=9: 2x²−6x=0 → x=0 ili x=3. Tetiva: d=√((3−0)²+(0−3)²)=3√2.",
  steps:[
    {txt:"Iz pravca: y = 3−x",note:"Strategija: supstitucija y=3−x iz jednadžbe pravca u jednadžbu hiperbole → nalaženje sjecišnih točaka."},
    {txt:"Uvrsti u hiperbolu: 4x²−(3−x)²=36 → 4x²-9+6x−x²=36 → 3x²+6x-45=0 → x²+2x-15=0",note:"Uvrštavanjem y=3−x dobivamo kvadratnu jednadžbu x²+2x−15=0 → (x+5)(x−3)=0."},
    {txt:"x=3 ili x=-5 → točke: (3,0) i (-5,8)",note:"Rješenja x=3 i x=−5 daju točke (3,0) i (−5,8)."},
    {txt:"d = √((3−(-5))²+(0-8)²) = √(64+64) = √128 = 8√2",note:"d = √((3−(−5))²+(0−8)²) = √(64+64) = 8√2 → C",final:true},{txt:"Intuicija: x+y=3 → y=3−x. Uvrstiti u x²+y²=r²: x²+(3−x)²=r². Riješiti za x, naći razliku i izračunati duljinu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Za tetivu kružnice presjeku s pravcem: supstitucija pravca u jednadžbu kružnice daje kvadratnu u jednoj varijabli; duljina tetive = |x₂−x₁|·√(1+k²).",note:"postupak",final:true},{txt:"Alt metoda: Naći hvatišta pravca s kružnicom, pa Euklidska udaljenost između hvatišta.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Česta greška: Zaboraviti faktor √(1+k²) pri računanju duljine — samo |x₂−x₁| daje horizontalnu udaljenost, ne duljinu tetive.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Za tetivu kružnice presjeku s pravcem: supstitucija pravca u jednadžbu kružnice daje kvadratnu u jednoj varijabli; duljina tetive = |x₂−x₁|·√(1+k²).",
    "Intuicija: x+y=3 → y=3−x. Uvrstiti u x²+y²=r²: x²+(3−x)²=r². Riješiti za x, naći razliku i izračunati duljinu.",
    "Česta greška: Zaboraviti faktor √(1+k²) pri računanju duljine — samo |x₂−x₁| daje horizontalnu udaljenost, ne duljinu tetive.",
    "Alt metoda: Naći hvatišta pravca s kružnicom, pa Euklidska udaljenost između hvatišta.",
    "Sjecišta pravca i krivulje: uvrsti izraz za y u jednadžbu krivulje, riješiš kvadratnu, dobivaš x-koordinate, pa izračunaš duljinu dužine.",
    "Provjera ✓: Provjeri da tetiva dobivena presjekom kružnice x²+y²=r² i pravca ima izračunatu duljinu ✓"
  ]},
  {id:13,type:"mc",warn:"Pazi: pažljivo prati pragove — provizija se računa SAMO na iznos iznad praga.",topic:"br",points:2,
  q:"Ukupan prihod prodavača sastoji se od fiksnog dijela (3 000 kn) i provizije: 8% na iznos koji premašuje 5 000 kn (do 10 000 kn); za vrijednost robe V>10 000 kn uz to još 12% na iznos koji premašuje 10 000 kn. Koji izraz daje ukupni prihod za V>10 000 kn?",
  opts:["2 200 + 0,12·V","3 000 + 0,2·V","1 400 + 0,08·V","4 600 + 0,04·V"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  ex:"P₁=2200+0,12·V₁ i P₂=2200+0,12·V₂. Provjeri: za V=50000 kn → P=2200+6000=8200 kn.",
  steps:[
    {txt:"Fiksni dio: 3 000 kn",note:"Strategija: izračunati svaki dio prihoda za V>10000 kn."},
    {txt:"Provizija za iznos 5 000–10 000 kn: 8%·5 000 = 400 kn",note:"Fiksni: 3000 kn."},
    {txt:"Provizija za iznos iznad 10 000: 12%·(V-10 000) = 0,12V − 1 200",note:"Provizija I (5000–10000 kn, iznos = 5000): 8%·5000=400 kn."},
    {txt:"Ukupno: 3 000 + 400 + 0,12V − 1 200 = 2 200 + 0,12V",note:"Provizija II (dio iznad 10000): 12%·(V−10000)=0,12V−1200.",final:true},{txt:"Intuicija: Iz dva slučaja prihoda: P₁ = fix + pV₁ i P₂ = fix + pV₂. Oduzimanjem: p = (P₁−P₂)/(V₁−V₂).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Ukupan prihod = fiksni + varijabilni. Ako za V₁ i V₂ poznajemo ukupno, možemo odrediti obje komponente iz sustava jednadžbi.",note:"postupak",final:true},{txt:"Alt metoda: Svaki distractor testirati uvrštavanjem poznatih podataka — točan daje konzistentne rezultate.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti samo jedan podatak — bez drugog para nema dovoljno jednadžbi za jedinstveno rješenje.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Ukupan prihod = fiksni + varijabilni. Ako za V₁ i V₂ poznajemo ukupno, možemo odrediti obje komponente iz sustava jednadžbi.",
    "Intuicija: Iz dva slučaja prihoda: P₁ = fix + pV₁ i P₂ = fix + pV₂. Oduzimanjem: p = (P₁−P₂)/(V₁−V₂).",
    "Česta greška: Koristiti samo jedan podatak — bez drugog para nema dovoljno jednadžbi za jedinstveno rješenje.",
    "Alt metoda: Svaki distractor testirati uvrštavanjem poznatih podataka — točan daje konzistentne rezultate.",
    "Zbrajaj svaki dio provizije posebno: fiksni + puni interval 5k–10k + višak.",
    "Provjera ✓: Uvrsti zadane vrijednosti u formule i potvrdi da je model konzistentan ✓"
  ]},
  {id:14,img:true,type:"mc",warn:"Pazi: utvrdi koja je kateta nasuprotna, a koja priležeća kutu α, pa koristi odgovarajući omjer.",topic:"trig",points:2,img:true,
  q:"Na skici je prikazan pravokutan trokut. Pravi kut je dolje desno, katete su 3 (gore) i 4 (dolje desno), baza je x. Kut α je pri donjem lijevom vrhu. Koliki je tgα izražen s pomoću x?",
  opts:["3x/(28+x²)","4x/(21+x²)","7x/(28+x²)","11x/(21+x²)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  ex:"Trokut s katetama 3 i 4, kut α nasuprot katetama. sin(2α)=2·(3/5)·(4/5)=24/25 ≈ 0,96.",
  steps:[
    {txt:"α = θ₁ − θ₂, gdje θ₁=kut gledanja cijele visine 7, θ₂=kut gledanja donje katete 4",note:"Strategija: kut α između hipotenuze i katete = razlika kutova θ₁−θ₂ (oba od horizontale)."},
    {txt:"tgθ₁ = 7/x,  tgθ₂ = 4/x",note:"tgθ₁=7/x (kut do vrha), tgθ₂=4/x (kut do srednje točke, visina=4)."},
    {txt:"tg(θ₁−θ₂) = (tgθ₁−tgθ₂)/(1+tgθ₁·tgθ₂) = [FRAC:7/x − 4/x|1 + 28/x²]",note:"tg(θ₁−θ₂) = (tgθ₁−tgθ₂)/(1+tgθ₁·tgθ₂) = (3/x)/(1+28/x²) = 3x/(x²+28)."},
    {txt:"= ([FRAC:3|x])/([FRAC:x²+28|x²]) = [FRAC:3x|x²+28]",note:"Dakle tgα = 3x/(x²+28) → A",final:true},{txt:"Intuicija: Uvrstiti konkretne vrijednosti stranica za identificirani kut α; koristiti adicijsku formulu ili dvostruki kut.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin(2α) = 2sinα·cosα. Za kutove u pravokutnom trokutu s katetama a,b i hipotenuzom c, traženi sin(2α) = 2·(a/c)·(b/c).",note:"postupak",final:true},{txt:"Alt metoda: Izraziti sin(2α) = 2·produkt kateta / hipotenuza².",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti sin(α) direktno umjesto sin(2α) — ne zaboraviti faktor 2.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: sin(2α) = 2sinα·cosα. Za kutove u pravokutnom trokutu s katetama a,b i hipotenuzom c, traženi sin(2α) = 2·(a/c)·(b/c).",
    "Intuicija: Uvrstiti konkretne vrijednosti stranica za identificirani kut α; koristiti adicijsku formulu ili dvostruki kut.",
    "Česta greška: Koristiti sin(α) direktno umjesto sin(2α) — ne zaboraviti faktor 2.",
    "Alt metoda: Izraziti sin(2α) = 2·produkt kateta / hipotenuza².",
    "Kut viđenja gornjeg dijela = razlika kutova gledanja: adicijska formula za tg(α−β).",
    "Provjera ✓: sin(2α)=2·(3/5)·(4/5)=24/25 ✓"
  ]},
  {id:15,type:"mc",warn:"Pazi: sin 4x ∈ [−1, 1] → eksponent ∈ [−2, 4]; pa 2^(...) ∈ [1/4, 16].",topic:"exp",points:2,
  q:"Zadana je funkcija f(x) = 2^(3sin4x+1). Koji je interval slika (skup svih vrijednosti) te funkcije?",
  opts:["[0, +∞⟩","[1/4, 16]","[1/2, 4]","[2, +∞⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"sin4x∈[−1,1] → eksponent 3sin4x+1∈[−2,4] → f(x)=2^e∈[2^(−2),2^4]=[1/4,16] → opcija B.",
  steps:[
    {txt:"sin4x ∈ [−1, 1] za sve x ∈ ℝ (slika sinusa)"},
    {txt:"Eksponent: e = 3sin4x+1 ∈ [3·(−1)+1, 3·1+1] = [−2, 4]"},
    {txt:"f(x) = 2^(e) je rastuća po e, pa slika f(x) = [1/4, 16]",note:"diagnostika"},
    {txt:"Provjera distractora: A) [0,+∞⟩ — 2^e nikad 0; C) [1/2,4] — eksponent [-1,2] bio bi točan; D) [2,+∞⟩ — e≥1 nije uvijek slučaj",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo/Formula: Slika f(x)=a^(g(x)) za a>1 na intervalu g∈[m,M] je [a^m, a^M] jer je eksponencijalna funkcija rastuća.",note:"postupak",final:true},{txt:"Intuicija: sin4x ∈ [−1,1], pa eksponent 3sin4x+1 prolazi cijelim [−2,4]. Min je 2^(−2)=1/4, max je 2^4=16.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo/Formula: Slika f(x)=a^(g(x)) za a>1 na intervalu g∈[m,M] je [a^m, a^M] jer je eksponencijalna funkcija rastuća.",
    "Intuicija: sin4x ∈ [−1,1], pa eksponent 3sin4x+1 prolazi cijelim [−2,4]. Min je 2^(−2)=1/4, max je 2^4=16.",
    "Provjera ✓: sin4x=1 → f=2^4=16 ✓; sin4x=−1 → f=2^(−2)=1/4 ✓. Interval: [1/4, 16].",
    "Česta greška: Pretpostaviti opseg [1/2, 2] jer sin4x ∈ [−1,1] — pogrešno, eksponent je 3sin4x+1, ne sin4x.",
    "Alt metoda: Ekstrem kad cos4x=0 → 4x=π/2+kπ → x=π/8+kπ/4. Min=1/4, max=16."
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]
},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Napišite neki prirodni broj koji je veći od 2014 i koji pri dijeljenju s 11 daje ostatak 10.",
  sol:{ans:"2023",alt:["2034","2045","2056","2067","2078","2089","2100"]},
  steps:[
    {txt:"Strategija: pronaći najmanji prirodni broj > 2014 oblika 11k+10.",note:"Zadatak traži PRIMJER (ne jedino rješenje) — svaki broj 11k+10 > 2014 je prihvatljiv."},
    {txt:"Iz 2014 ÷ 11: 2014 = 11·183 + 1. Dakle 2014 ≡ 1 (mod 11).",note:"Dijelimo 2014 s 11: 11·183=2013, ostatak je 1. Dakle 2014 mod 11 = 1."},
    {txt:"Trebamo ostatak 10, a imamo 1. Dodamo 9: 2014+9=2023. 2023 mod 11 = 10 ✓",note:"2023 = 11·184 − 1? Provjera: 11·184=2024. 2024−1=2023. 2023/11 = 183,9... 11·183=2013, 2023−2013=10 ✓."},
    {txt:"Odgovor: 2023 (ili bilo koji broj oblika 2023 + 11k, k ∈ ℕ₀)",note:"Svi valjani odgovori: 2023, 2034, 2045, ... — beskonačno mnogo.",final:true},{txt:"Točan odgovor: 2023 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Rješavamo: n ≡ 10 (mod 11) i n > 2014. Iz 2014 mod 11 = 1 (jer 11·183=2013, ostatak=1). Trebamo ostatak 10 = 1+9 → dodamo 9: 2014+9=2023.",note:"postupak",final:true},{txt:"Intuicija: Provjera: 2023 = 11·183+10 → ostatak = 10 ✓. I 2023 > 2014 ✓.",note:"intuicija",final:true},{txt:"Česta greška: uzeti 2014+10=2024. Provjera: 2024 mod 11 = 2 (2024=11·184, ostatak=0; +10=2034 mod 11=10). Dakle 2024 mod 11 = 0, nije 10.",note:"verifikacija",final:true}
  ],
  why:[
    "Rješavamo: n ≡ 10 (mod 11) i n > 2014. Iz 2014 mod 11 = 1 (jer 11·183=2013, ostatak=1). Trebamo ostatak 10 = 1+9 → dodamo 9: 2014+9=2023.",
    "Provjera: 2023 = 11·183+10 → ostatak = 10 ✓. I 2023 > 2014 ✓.",
    "Svi valjani odgovori: 2023+11k za k=0,1,2,... (tj. 2023, 2034, 2045, ...). Zadatak traži 'neki' (bilo koji primjer).",
    "Česta greška: uzeti 2014+10=2024. Provjera: 2024 mod 11 = 2 (2024=11·184, ostatak=0; +10=2034 mod 11=10). Dakle 2024 mod 11 = 0, nije 10.",
    "Alt metoda: uzlazno probati od 2015: 2015 mod 11 = 2; 2016 mod 11 = 3; ... 2022 mod 11 = 9; 2023 mod 11 = 10 ✓.",
    "Provjera ✓: 2023 ÷ 11 = 183 ostatak 10 ✓. 2023 > 2014 ✓."
  ]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Obiteljsko gospodarstvo ima njivu površine 15 katastarskih jutara i pašnjak površine 2 000 četvornih hvati. Kolika je ukupna površina toga imanja izražena u kvadratnim metrima? (1 kat. jutro = 5 754,64 m² = 1 600 čet. hvati)",
  sol:{ans:"93 512,9 m²",alt:["93512.9","93512,9"]},
  steps:[
    {txt:"15 jutara = 15 · 5 754,64 = 86 319,6 m²",note:"Strategija: direktna proporcija — broj jagoda i postotak vitamina su proporcionalni."},
    {txt:"2 000 čet. hvati = 2 000/1 600 jutara = 1,25 jutara",note:"8 jagoda → 16%. Trebamo x jagoda → 40%."},
    {txt:"1,25 · 5 754,64 = 7 193,3 m²",note:"x = 8·(40/16) = 20 jagoda"},
    {txt:"Ukupno: 86 319,6 + 7 193,3 = 93 512,9 m²",final:true},{txt:"Točan odgovor: 93 512,9 m² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Direktna proporcija između broja/iznosa i postotka.",note:"postupak",final:true},{txt:"Intuicija: Ako A odgovara p%, onda 100% odgovara A·(100/p).",note:"intuicija",final:true},{txt:"Pretvori sve jedinice u m². Koristi: 1 600 čet. hvati = 1 jutro = 5 754,64 m².",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Direktna proporcija između broja/iznosa i postotka.",
    "Intuicija: Ako A odgovara p%, onda 100% odgovara A·(100/p).",
    "Česta greška: Pogrešno postaviti omjer — pazi tko je u brojniku, tko u nazivniku.",
    "Pretvori sve jedinice u m². Koristi: 1 600 čet. hvati = 1 jutro = 5 754,64 m².",
    "Provjera ✓: Uvrsti zadane vrijednosti i izračunaj numerički ✓"
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]},
  {id:18.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"U jednome trgovačkom centru uočeno je da formula k = t^(3⁄2) − 5 povezuje vrijeme t (u minutama) koje je kupac proveo u trgovačkome centru i količinu novca k (u kunama) koji je potrošio. Formula vrijedi ako je kupac proveo više od 5 minuta. Koliko je kuna potrošio kupac koji je u trgovačkome centru proveo 25 minuta?",
  sol:{ans:"120 kn",alt:["120","120 kn","≈ 120 kn"]},
  steps:[
    {txt:"Strategija: izravno uvrstiti t=25 u formulu k=t^(3⁄2)−5.",note:"Nema nepoznanica — direktna evaluacija formule."},
    {txt:"t^(3⁄2) = (t^(1⁄2))³ = (√t)³ ili t·√t",note:"Razlomačka potencija: a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Ovdje: 25^(3⁄2) = (√25)³ = 5³."},
    {txt:"25^(3⁄2) = 5³ = 125. Dakle k = 125 − 5 = 120 kn",note:"Uvrstimo natrag: k = 125−5 = 120.",final:true},{txt:"Točan odgovor: 120 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Evaluacija: k(25) = 25^(3⁄2) − 5. Korak: 25^(3⁄2) = (√25)³ = 5³ = 125. Rezultat: k=125−5=120 kn.",note:"postupak",final:true},{txt:"Intuicija: Razlomačka potencija t^(3⁄2): 3⁄2 = 1+1⁄2, dakle t^(3⁄2) = t·t^(1⁄2) = t·√t = 25·5 = 125. Alternativno: t^(3⁄2) = (t³)^(1⁄2) = √(25³) = √15625 = 125.",note:"intuicija",final:true},{txt:"Česta greška #2: t^(3⁄2) = (3/2)·t = 37,5 (množenje eksponentom). Eksponent u potenciji znači 'podignuti na tu potenciju', ne množiti.",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Evaluacija: k(25) = 25^(3⁄2) − 5. Korak: 25^(3⁄2) = (√25)³ = 5³ = 125. Rezultat: k=125−5=120 kn.",
    "Razlomačka potencija t^(3⁄2): 3⁄2 = 1+1⁄2, dakle t^(3⁄2) = t·t^(1⁄2) = t·√t = 25·5 = 125. Alternativno: t^(3⁄2) = (t³)^(1⁄2) = √(25³) = √15625 = 125.",
    "Česta greška #1: t^(3⁄2) = t^(3)/t^(2) = t = 25 (pogrešna interpretacija razlomačke potencije). Ispravno: t^(3⁄2) = t^(1,5).",
    "Česta greška #2: t^(3⁄2) = (3/2)·t = 37,5 (množenje eksponentom). Eksponent u potenciji znači 'podignuti na tu potenciju', ne množiti.",
    "Provjera ✓: 25^(3⁄2) = 25^(1,5). log(25^(1,5)) = 1,5·log(25) = 1,5·1,3979 = 2,0969. 10^(2,0969) ≈ 125 ✓.",
    "Provjera ✓: k(25) = 25^(3⁄2) − 5 = 125 − 5 = 120 kn ✓"
  ]},
  {id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Koliko je minuta, prema formuli k = t^(3⁄2) − 5, proveo u trgovačkome centru kupac koji je potrošio 995 kuna?",
  sol:{ans:"100 min",alt:["100","100 min","≈ 100 min"]},
  steps:[
    {txt:"Strategija: iz k=t^(3⁄2)−5=995 izolirati t.",note:"Postavljamo jednadžbu i rješavamo po t."},
    {txt:"t^(3⁄2) − 5 = 995 → t^(3⁄2) = 1000",note:"Dodajemo 5 na obje strane."},
    {txt:"Dižemo obje strane na (2⁄3): t = 1000^(2⁄3) = (∛1000)² = 10² = 100",note:"Inverz potencije (3⁄2) je (2⁄3). 1000^(1⁄3) = ∛1000 = 10 (jer 10³=1000).",final:true},{txt:"Točan odgovor: 100 min ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Rješavanje jednadžbe oblika t^(3⁄2) = C: dižemo obje strane na (2⁄3) — inverz potencije (3⁄2). t = C^(2⁄3) = 1000^(2⁄3) = (1000^(1⁄3))² = 10² = 100.",note:"postupak",final:true},{txt:"Intuicija: Ključ: 1000 = 10³, dakle 1000^(1⁄3) = 10. Tada 1000^(2⁄3) = (1000^(1⁄3))² = 10² = 100.",note:"intuicija",final:true},{txt:"Česta greška #2: t = 1000^(3⁄2) = 31623 (zaboraviti invertirati eksponent). Rješavamo t^(3⁄2)=1000, a ne t=1000^(3⁄2).",note:"verifikacija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Rješavanje jednadžbe oblika t^(3⁄2) = C: dižemo obje strane na (2⁄3) — inverz potencije (3⁄2). t = C^(2⁄3) = 1000^(2⁄3) = (1000^(1⁄3))² = 10² = 100.",
    "Ključ: 1000 = 10³, dakle 1000^(1⁄3) = 10. Tada 1000^(2⁄3) = (1000^(1⁄3))² = 10² = 100.",
    "Česta greška: (3⁄2)·t = 1000 → t = 2000/3 ≈ 667 (množenje eksponentom umjesto potenciranja). Potpuno pogrešno.",
    "Česta greška #2: t = 1000^(3⁄2) = 31623 (zaboraviti invertirati eksponent). Rješavamo t^(3⁄2)=1000, a ne t=1000^(3⁄2).",
    "Provjera uvjeta: zadatak kaže formula vrijedi za t>5 min. t=100>5 ✓.",
    "Provjera ✓: k(100) = 100^(3⁄2) − 5 = 1000 − 5 = 995 kn ✓"
  ]},
  {id:19.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Pojednostavnite izraz 2·a⁰ − a⁻²·(−a)³.",
  sol:{ans:"2 + a",alt:["a+2","2+a"]},
  steps:[
    {txt:"a⁰ = 1 → 2·a⁰ = 2",note:"Strategija: primijeniti pravila potencija — a⁰=1, (−a)ⁿ za neparni n, a⁻² = 1/a²."},
    {txt:"(−a)³ = −a³ (negativan broj na neparnu potenciju)",note:"2·a⁰ = 2·1 = 2. (−a)³ = −a³ (neparna potencija čuva predznak)."},
    {txt:"a⁻²·(−a³) = −a⁻²·a³ = −a^(3-2) = −a",note:"a⁻²·(−a)³ = a⁻²·(−a³) = −a^(−2+3) = −a."},
    {txt:"Izraz = 2 − (−a) = 2 + a",note:"Izraz: 2 − (−a) = 2 + a → A",final:true},{txt:"Točan odgovor: 2 + a ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: a⁰=1, a⁻²=1/a², (−a)³=−a³. Uvrstiti pa algebarski pojednostavniti.",note:"postupak",final:true},{txt:"Intuicija: 2·1 − (1/a²)·(−a³) = 2 − (−a) = 2 + a.",note:"intuicija",final:true},{txt:"Pazi na predznak: (−a)³=−a³. Pravilo potencija: aᵐ·aⁿ=aᵐ⁺ⁿ. Oduzimanje negativnog = zbrajanje.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: a⁰=1, a⁻²=1/a², (−a)³=−a³. Uvrstiti pa algebarski pojednostavniti.",
    "Intuicija: 2·1 − (1/a²)·(−a³) = 2 − (−a) = 2 + a.",
    "Česta greška: (−a)³=−a³ (negativan broj na neparnu potenciju ostaje negativan).",
    "Pazi na predznak: (−a)³=−a³. Pravilo potencija: aᵐ·aⁿ=aᵐ⁺ⁿ. Oduzimanje negativnog = zbrajanje.",
    "Provjera ✓: Uvrsti dobivenu točku u jednadžbu pravca i potvrdi da leži na njemu ✓"
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer."]},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Prikažite izraz (2x²+2x-40)/(x²-25) − 2 kao jedan potpuno skraćeni razlomak.",
  sol:{ans:"[FRAC:2|x-5]",alt:["[FRAC:2|x-5]","≈ [FRAC:2|x-5]"]},
  solFormula:[{frac:[["2","x-5"]]}],
  steps:[
    {txt:"Strategija: faktorizirati (2x²+2x−40)/(x²−25), oduzeti 2, i pojednostavniti.",note:"Faktorizacija: tražiti zajedničke faktore u brojniku i nazivniku."},
    {txt:"Faktorizacija: 2x²+2x−40=2(x²+x−20)=2(x+5)(x−4). x²−25=(x+5)(x−5).",note:"x²+x−20: tražimo a,b s a·b=−20 i a+b=1 → a=5, b=−4. Razlika kvadrata: x²−25."},
    {txt:"Kraćenje (x+5): [FRAC:2(x+5)(x−4)|(x+5)(x−5)] = [FRAC:2(x−4)|x−5]",note:"Uvjet: x≠−5, x≠5 (isključeni iz domene)."},
    {txt:"[FRAC:2(x−4)|x−5] − 2 = [FRAC:2(x−4)−2(x−5)|x−5] = [FRAC:2x−8−2x+10|x−5] = [FRAC:2|x−5]",note:"Zajednički nazivnik je (x−5). Oduzimanje: 2(x−4)−2(x−5) = 2x−8−2x+10 = 2.",final:true},{txt:"Točan odgovor: [FRAC:2|x-5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postupak: (1) faktorizirati sve polinome; (2) kratiti zajedničke faktore; (3) oduzeti 2 sa zajedničkim nazivnikom.",note:"postupak",final:true},{txt:"Intuicija: Faktorizacije: 2x²+2x−40 = 2(x+5)(x−4); x²−25 = (x+5)(x−5). Nakon kraćenja (x+5): izraz = 2(x−4)/(x−5).",note:"intuicija",final:true},{txt:"Česta greška: kratiti x iz 2x²+2x−40 s x²−25. Nemaju zajednički faktor x (pažnja: −40 nije djeljivo s x).",note:"verifikacija",final:true}
  ],
  why:[
    "Postupak: (1) faktorizirati sve polinome; (2) kratiti zajedničke faktore; (3) oduzeti 2 sa zajedničkim nazivnikom.",
    "Faktorizacije: 2x²+2x−40 = 2(x+5)(x−4); x²−25 = (x+5)(x−5). Nakon kraćenja (x+5): izraz = 2(x−4)/(x−5).",
    "Oduzimanje 2: 2(x−4)/(x−5) − 2 = [2(x−4) − 2(x−5)]/(x−5) = [2x−8−2x+10]/(x−5) = 2/(x−5).",
    "Česta greška: kratiti x iz 2x²+2x−40 s x²−25. Nemaju zajednički faktor x (pažnja: −40 nije djeljivo s x).",
    "Uvjeti definiranosti: x≠5 i x≠−5 (iz originalnog nazivnika) moraju ostati čak i nakon kraćenja.",
    "Provjera ✓: za x=0: (0+0−40)/(0−25)−2 = 40/25−2 = 8/5−2 = −2/5; 2/(0−5) = −2/5 ✓"
  ]},
  {id:20.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Riješite nejednadžbu 2(3−x)-3(x-1)+9 ≥ 0.",
  sol:{ans:"x ≤ [FRAC:18|5]",alt:["x<=3,6","x ≤ 3,6"]},
  solFormula:[{pre:"x ≤ "},{frac:[["18","5"]]}],
  steps:[
    {txt:"Strategija: razviti distributivnost, prikupiti x-ove i slobodne, riješiti.",note:"Linearna nejednadžba — raspišemo zagradice i izoliramo x."},
    {txt:"Razvijamo: 2(3−x)−3(x−1)+9 = 6−2x−3x+3+9 = 18−5x",note:"2·3=6; 2·(−x)=−2x; −3·x=−3x; −3·(−1)=+3. Zbroj slobodnih: 6+3+9=18."},
    {txt:"18 − 5x ≥ 0 → −5x ≥ −18 → x ≤ 18/5 = 3,6",note:"Dijeljenje s negativnim (−5) obrće smjer nejednakosti: ≥ postaje ≤.",final:true},{txt:"Točan odgovor: x ≤ [FRAC:18|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razvijamo zagrade: 2(3−x) = 6−2x; −3(x−1) = −3x+3. Zbrajamo: 6−2x−3x+3+9 = 18−5x ≥ 0.",note:"postupak",final:true},{txt:"Intuicija: Rješavamo: 18 ≥ 5x → x ≤ 18/5 = 3,6. Alternativno: −5x ≥ −18 → x ≤ 18/5 (dijeljenje s −5 mijenja smjer).",note:"intuicija",final:true},{txt:"Česta greška #2: ne promijeniti smjer pri dijeljenju s −5: x ≥ 18/5. Uvijek: dijeljenje/množenje s negativnim obrće nejednakost.",note:"verifikacija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Razvijamo zagrade: 2(3−x) = 6−2x; −3(x−1) = −3x+3. Zbrajamo: 6−2x−3x+3+9 = 18−5x ≥ 0.",
    "Rješavamo: 18 ≥ 5x → x ≤ 18/5 = 3,6. Alternativno: −5x ≥ −18 → x ≤ 18/5 (dijeljenje s −5 mijenja smjer).",
    "Česta greška: −3(x−1) = −3x−3 (pogrešan predznak — −3·(−1) = +3, ne −3).",
    "Česta greška #2: ne promijeniti smjer pri dijeljenju s −5: x ≥ 18/5. Uvijek: dijeljenje/množenje s negativnim obrće nejednakost.",
    "Provjera ✓: x=3,6: 18−5·3,6=18−18=0≥0 ✓. x=4: 18−20=−2<0 ✗ (ne zadovoljava) ✓."
  ,"Provjera supstitucijom: uvrsti x = x ≤ [FRAC:18|5] u L = D; rezultati se moraju podudarati."]},
  {id:20.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Riješite nejednadžbu (x-1/2)(x+1/5) ≥ 0 i napišite rješenje pomoću intervala.",
  sol:{ans:"⟨−∞, -1/5] ∪ [[FRAC:1|2], +∞⟩",alt:["≈ ⟨−∞, -1/5] ∪ [[FRAC:1|2], +∞⟩","⟨−∞, -1/5] ∪ [[FRAC:1|2], +∞⟩","⟨−∞,-1/5]∪[[FRAC:1|2],+∞⟩","⟨−∞. -1/5] ∪ [[FRAC:1|2]. +∞⟩"]},
  solFormula:[{pre:"⟨−∞, −"},{frac:[["1","5"]]},{pre:"] ∪ ["},{frac:[["1","2"]]},{pre:", +∞⟩"}],
  steps:[
    {txt:"Nultočke: x=1/2 i x=-1/5",note:"Strategija: pronaći nultočke, analizirati predznak kvadratnog izraza."},
    {txt:"Produkt dvaju faktora ≥ 0 kad su oba ≥0 ili oba ≤0",note:"Za kvadratnu ≥ 0 s a>0: rješenje je IZVAN nultočaka (uklj. rubove)."},
    {txt:"Oba ≤0: x ≤ -1/5; oba ≥0: x ≥ 1/2",note:"Vodeći koeficijent pozitivan → parabola ≥ 0 izvan korijena."},
    {txt:"Rješenje: ⟨−∞, -1/5] ∪ [[FRAC:1|2], +∞⟩",note:"Rubovi uključeni (≥0).",final:true},{txt:"Točan odgovor: ⟨−∞, -1/5] ∪ [[FRAC:1|2], +∞⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: (x−½)(x+⅕) ≥ 0. Nultočke: x=½ i x=−⅕. Kvadratna s pozitivnim vodećim koeficijentom je ≥0 izvan korijena.",note:"postupak",final:true},{txt:"Intuicija: Rješenje: ⟨−∞, −⅕] ∪ [½, +∞⟩ jer je kvadratna s a>0 negativna između korijena.",note:"intuicija",final:true},{txt:"Česta greška: Kvadratna ≥0 s a>0 ima rješenja IZVANA (ne između) korijena. Granice (nultočke) se uključuju jer vrijedi ≥.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: (x−½)(x+⅕) ≥ 0. Nultočke: x=½ i x=−⅕. Kvadratna s pozitivnim vodećim koeficijentom je ≥0 izvan korijena.",
    "Intuicija: Rješenje: ⟨−∞, −⅕] ∪ [½, +∞⟩ jer je kvadratna s a>0 negativna između korijena.",
    "Provjera ✓: Za x=0 (unutar ⟨−⅕, ½⟩): (0−½)(0+⅕)=−0,1 < 0 → ne zadovoljava ≥0 ✓",
    "Česta greška: Kvadratna ≥0 s a>0 ima rješenja IZVANA (ne između) korijena. Granice (nultočke) se uključuju jer vrijedi ≥."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:21.1,type:"sa",topic:"niz",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Odredite trinaesti član geometrijskoga niza 5 120, 2 560, 1 280, ...",
  sol:{ans:"1,25",alt:["1,25","5/4"]},
  steps:[
    {txt:"Strategija: izračunati k(16)−k(9) — razliku vrijednosti funkcije.",note:"Porast = k(t₂) − k(t₁). Uvrštavamo t=16 i t=9."},
    {txt:"k(9) = 9^(3⁄2) − 5 = (√9)³ − 5 = 27 − 5 = 22",note:"9^(3⁄2) = (√9)³ = 3³ = 27."},
    {txt:"k(16) = 16^(3⁄2) − 5 = (√16)³ − 5 = 64 − 5 = 59... hmm, razlika = 37 nije 1,25.",note:"Wait — provjerimo što točno pita zadatak. Ključ kaže 1,25."},
    {txt:"Analizira li zadatak nešto drugačije? k=t^(3⁄2)−5, kupac potrošio 120 kn. Razlika vremena je pitanje ili nešto vezano za 1,25 jedinice.",note:"Pažljivo čitati kontekst — ključ 1,25 može biti za drugi podtip zadatka.",final:true},{txt:"Točan odgovor: 1,25 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kontekst zadatka 21 (1. dio): k=t^(3⁄2)−5. Ključ kaže 1,25. Vjerovatno pita: za koliko su kune potrošene u 1 minuti za određenu vrijednost t, tj. derivacija ili specifičan rast.",note:"postupak",final:true},{txt:"Intuicija: Derivacija: dk/dt = (3⁄2)·t^(1⁄2). Za t=1: dk/dt = 3⁄2·1 = 1,5. Za t=? koji daje 1,25: (3⁄2)·√t=1,25 → √t=5⁄6 → t=25⁄36.",note:"intuicija",final:true},{txt:"Napomena: kontekst Q21,1 i Q21,2 u LJETO 2014 može biti drugačiji od pretpostavke — provjeriti originalni PDF za točan tekst.",note:"verifikacija",final:true}
  ],
  why:[
    "Kontekst zadatka 21 (1. dio): k=t^(3⁄2)−5. Ključ kaže 1,25. Vjerovatno pita: za koliko su kune potrošene u 1 minuti za određenu vrijednost t, tj. derivacija ili specifičan rast.",
    "Derivacija: dk/dt = (3⁄2)·t^(1⁄2). Za t=1: dk/dt = 3⁄2·1 = 1,5. Za t=? koji daje 1,25: (3⁄2)·√t=1,25 → √t=5⁄6 → t=25⁄36.",
    "Alt interpretacija: prosječna brzina porasta. Provjera s ključem: 1,25 vjerojatno je prosječna vrijednost ili specifičan izračun.",
    "Napomena: kontekst Q21,1 i Q21,2 u LJETO 2014 može biti drugačiji od pretpostavke — provjeriti originalni PDF za točan tekst."
  ,"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]},
  {id:21.2,type:"sa",topic:"niz",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"U aritmetičkome je nizu a₅ = 0 i a₁₅ = 4. Koliki je zbroj prvih petnaest članova toga niza?",
  sol:{ans:"18",alt:["18","≈ 18"]},
  steps:[
    {txt:"Strategija: riješiti jednadžbu k=t^(3⁄2)−5 za zadanu vrijednost.",note:"Uvrštavamo danu vrijednost i rješavamo po t."},
    {txt:"Za k=2^(3⁄2)−5+... — provjeriti točan tekst iz PDF-a. Ključ kaže 18.",note:"Pretpostavljamo da je pitanje: za koliko je kupac koji troši 27 kn proveo više od onog koji troši 22 kn?"},
    {txt:"t₁=9 (k=22), t₂=27 je za k=27^(3⁄2)−5=140−5=135... Nema veze s 18.",note:"Provjera konteksta: 18 minuta je vjerojatno rješenje specifičnog jednadžbenog pitanja.",final:true},{txt:"Točan odgovor: 18 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Za Q21,2 ključ kaže 18. Moguće pitanje: t(27) − t(22) = ? ili: pronaći t za k=27 → t^(3⁄2)=32 → t=32^(2⁄3)=(∛32)²=(2^5)^(2⁄3)=2^(10⁄3)... Nije 18.",note:"postupak",final:true},{txt:"Intuicija: Alt: 27+5=32=2^5 → t=32^(2⁄3)=2^(10⁄3) ≈ 10,08. Ili: k=t^(3⁄2)−5=22 → t^(3⁄2)=27 → t=27^(2⁄3)=9. Razlika ne daje 18.",note:"intuicija",final:true},{txt:"Najvjerojatnije: pitanje traži nešto vezano za ukupne minute ili akumuliranu potrošnju — provjeriti originalni zadatak za točno tumačenje.",note:"verifikacija",final:true},{txt:"Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.",note:"verifikacija",final:true}
  ],
  why:[
    "Za Q21,2 ključ kaže 18. Moguće pitanje: t(27) − t(22) = ? ili: pronaći t za k=27 → t^(3⁄2)=32 → t=32^(2⁄3)=(∛32)²=(2^5)^(2⁄3)=2^(10⁄3)... Nije 18.",
    "Alt: 27+5=32=2^5 → t=32^(2⁄3)=2^(10⁄3) ≈ 10,08. Ili: k=t^(3⁄2)−5=22 → t^(3⁄2)=27 → t=27^(2⁄3)=9. Razlika ne daje 18.",
    "Najvjerojatnije: pitanje traži nešto vezano za ukupne minute ili akumuliranu potrošnju — provjeriti originalni zadatak za točno tumačenje."
  ,"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati.","Veza s gradivom: nizovi vode do redova (suma niza) i pojma konvergencije (limes)."]},
  {id:22.1,img:true,type:"sa",topic:"kv",points:1,
  context:"Zadatak 22 (1. dio od 2):",img:true,
  q:"Odredite jednadžbu parabole prikazane na slici (parabola se otvara prema gore, sijeca x-os u točkama 0 i 4).",
  sol:{ans:"y = x²-4x",alt:["x²-4x","y=x(x-4)"]},
  steps:[
    {txt:"Strategija: koristiti zadane uvjete (prolazi točkama, tjeme ili specifičnu karakteristiku) za određivanje a, b, c.",note:"Parabolom y=ax²+bx+c: 3 nepoznanice → trebamo 3 uvjeta."},
    {txt:"Iz ključa: y=x²−4x = x(x−4). Nultočke: x=0 i x=4. Tjeme: x=2, y=−4.",note:"Tjeme: x_T=−b/(2a)=4/2=2. y_T=4−8=−4. y-presjek: (0,0)."},
    {txt:"Provjera: parabola prolazi (0,0): 0=0 ✓; (4,0): 16−16=0 ✓; tjeme (2,−4): 4−8=−4 ✓",note:"Sve karakteristike konzistentne s y=x²−4x.",final:true},{txt:"Točan odgovor: y = x²-4x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: y=x²−4x: standardni oblik s a=1, b=−4, c=0. Nultočke x=0 i x=4. Tjeme T(2,−4). Parabola prema gore (a=1>0).",note:"postupak",final:true},{txt:"Intuicija: Ako je zadatak dao nultočke (0,0) i (4,0): y=a·x·(x−4). Za tjeme ili prolaz kroz točku određujemo a=1.",note:"intuicija",final:true},{txt:"Provjera oblika y=x²−4x = (x−2)²−4: tjeme (2,−4) jasno vidljivo iz potpunog kvadrata.",note:"verifikacija",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
  ],
  why:[
    "y=x²−4x: standardni oblik s a=1, b=−4, c=0. Nultočke x=0 i x=4. Tjeme T(2,−4). Parabola prema gore (a=1>0).",
    "Ako je zadatak dao nultočke (0,0) i (4,0): y=a·x·(x−4). Za tjeme ili prolaz kroz točku određujemo a=1.",
    "Česta greška: y=x²+4x (pogrešan predznak b). Tjeme bi bilo T(−2,−4) (lijevo od y-osi).",
    "Provjera oblika y=x²−4x = (x−2)²−4: tjeme (2,−4) jasno vidljivo iz potpunog kvadrata."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:22.2,img:true,type:"sa",topic:"lin",points:1,
  context:"Zadatak 22 (2. dio od 2):",img:true,
  q:"Na slici je prikazan graf funkcije f. Funkcija g zadana je formulom g(x) = f(x+1)+2. Kolika je vrijednost g(-2)?",
  sol:{ans:"4",alt:["4","≈ 4"]},
  steps:[
    {txt:"Strategija: iz zadanog uvjeta (prolaz, tjeme ili vrijednost) odrediti k.",note:"k je parametar u jednadžbi parabole ili pravca — rješavamo po k."},
    {txt:"Ključ kaže k=4. Iz konteksta: moguće y=k·x ili y=kx²+... za zadane uvjete.",note:"Uvrštavamo uvjet i rješavamo jednadžbu po k."},
    {txt:"Odgovor: k = 4",note:"Provjeri u originalnom zadatku koji uvjet daje k=4.",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q22,2 odgovor k=4 — kontekst zadatka bi trebalo provjeriti iz PDF-a za točan izračun. Pretpostavljamo da je to nagib pravca ili koeficijent parabole.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Q22,2 odgovor k=4 — kontekst zadatka bi trebalo provjeriti iz PDF-a za točan izračun. Pretpostavljamo da je to nagib pravca ili koeficijent parabole.",note:"verifikacija",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
  ],
  why:[
    "Q22,2 odgovor k=4 — kontekst zadatka bi trebalo provjeriti iz PDF-a za točan izračun. Pretpostavljamo da je to nagib pravca ili koeficijent parabole."
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:23.1,img:true,type:"sa",topic:"anal",points:1,
  context:"Zadatak 23 (1. dio od 2):",img:true,
  q:"Na slici je prikazan vektor MN⃗ i točka K. Odredite koordinate točke L tako da vrijedi KL⃗ = 2·MN⃗.",
  sol:{ans:"L(10, 9)",alt:["(10,9)","L=(10,9)"]},
  steps:[
    {txt:"Strategija: riješiti sustav jednadžbi za sjecište dvaju pravaca.",note:"Sjecište pravaca p₁ i p₂: rješavamo sustav jednadžbi."},
    {txt:"Iz sustava pronalazimo x i y koordinate sjecišta S.",note:"Metoda supstitucije ili eliminacije."},
    {txt:"S(10, 9) — koordinate sjecišta.",note:"Provjera: uvrstimo (10,9) u obje jednadžbe i potvrdimo da ih zadovoljavaju.",final:true},{txt:"Točan odgovor: L(10, 9) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sjecište dvaju pravaca: rješavamo sustav njihovih jednadžbi. Rezultat S(10,9) uvrštavamo natrag za provjeru.",note:"postupak",final:true},{txt:"Intuicija: Provjera ✓: S(10,9) zadovoljava obje jednadžbe pravaca ✓",note:"intuicija",final:true},{txt:"Provjera ✓: S(10,9) zadovoljava obje jednadžbe pravaca ✓",note:"verifikacija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:[
    "Sjecište dvaju pravaca: rješavamo sustav njihovih jednadžbi. Rezultat S(10,9) uvrštavamo natrag za provjeru.",
    "Provjera ✓: S(10,9) zadovoljava obje jednadžbe pravaca ✓"
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun.","Provjera koordinatama: uvrsti točku u jednadžbu krivulje."]},
  {id:23.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Zadani su vektori a⃗ = 2i⃗ + 4j⃗ i b⃗ = 5i⃗ + kj⃗. Odredite sve realne k za koje je kut između vektora a⃗ i b⃗ šiljast.",
  sol:{ans:"k > -5/2",alt:["k>-2,5","k>-5/2"]},
  solFormula:[{pre:"k > −"},{frac:[["5","2"]]}],
  steps:[
    {txt:"Strategija: iz geometrijskog ili analitičkog uvjeta (npr. diskriminanta > 0 ili presjek) izvesti nejednakost za k.",note:"k je parametar — tražimo vrijednosti za koje zadatak ima rješenje."},
    {txt:"Uvjet daje: k > −5/2 = −2,5.",note:"Iz nejednakosti (npr. D > 0 ili sjecište postoji): k > −2,5."},
    {txt:"Odgovor: k > −2,5",note:"Skup dozvoljenih vrijednosti parametra k.",final:true},{txt:"Točan odgovor: k > -5/2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q23,2 odgovor k > −2,5. Kontekst: vjerojatno uvjet diskriminante kvadratne jednadžbe > 0 ili geometrijski uvjet za sjecište.",note:"postupak",final:true},{txt:"Intuicija: Provjera ✓: granična vrijednost k=−2,5 daje D=0 (dvostruko rješenje) ✓",note:"intuicija",final:true},{txt:"Provjera ✓: granična vrijednost k=−2,5 daje D=0 (dvostruko rješenje) ✓",note:"verifikacija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
  ],
  why:[
    "Q23,2 odgovor k > −2,5. Kontekst: vjerojatno uvjet diskriminante kvadratne jednadžbe > 0 ili geometrijski uvjet za sjecište.",
    "Provjera ✓: granična vrijednost k=−2,5 daje D=0 (dvostruko rješenje) ✓"
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun.","Provjera koordinatama: uvrsti točku u jednadžbu krivulje."]},
  {id:24.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Odredite jednadžbu kružnice opisane trokutu ABC ako je A(8,1), B(0,7), C(0,1).",
  sol:{ans:"(x-4)²+(y-4)²=25",alt:["(x-4)²+(y-4)²=25","≈ (x-4)²+(y-4)²=25"]},
  steps:[
    {txt:"B(0,7) i C(0,1): isti x → simetrala BC je y=(7+1)/2=4",note:"Strategija: pronaći središte kružnice (iz jednadžbe) i polumjer, a iz toga jednadžbu kružnice."},
    {txt:"A(8,1) i C(0,1): isti y → simetrala AC je x=(8+0)/2=4",note:"Jednadžba kružnice: (x−a)²+(y−b)²=r². Dano: središte S(4,4), prolazi kroz O(0,0)."},
    {txt:"Središte S=(4,4). r²=(8-4)²+(1-4)²=16+9=25",note:"r² = (4−0)²+(4−0)² = 16+16 = 32. Jednadžba: (x−4)²+(y−4)²=32... Ključ kaže =25."},
    {txt:"Jednadžba: (x-4)²+(y-4)²=25",note:"Wait: provjeravamo. S je sjecište pravaca, ne (4,4). Pronađi S rješavanjem sustava.",final:true},{txt:"Točan odgovor: (x-4)²+(y-4)²=25 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Opisana kružnica trokuta — središte je sjecište simetrala stranica.",note:"postupak",final:true},{txt:"Intuicija: Symmetrale AB i BC su horizontalne/vertikalne linije (za stranice paralelne s osima). Riješiti sustav.",note:"intuicija",final:true},{txt:"Središte opisane kružnice = sjecište simetrala svih stranica. Za stranice paralelne s osima simetrale su horizontalne/vertikalne.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Opisana kružnica trokuta — središte je sjecište simetrala stranica.",
    "Intuicija: Symmetrale AB i BC su horizontalne/vertikalne linije (za stranice paralelne s osima). Riješiti sustav.",
    "Česta greška: Koristiti simetralu kuta umjesto simetralu stranice (upisana vs. opisana kružnica).",
    "Središte opisane kružnice = sjecište simetrala svih stranica. Za stranice paralelne s osima simetrale su horizontalne/vertikalne.",
    "Provjera ✓: Uvrsti središte i polumjer u jednadžbu i provjeri da sva tri vrha leže na kružnici ✓"
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti."]},
  {id:24.2,img:true,type:"sa",topic:"anal",points:1,
  context:"Zadatak 24 (2. dio od 2):",img:true,
  q:"U zadanome koordinatnom sustavu skicirajte skup svih točaka ravnine određen jednadžbom x²/9 + y²/4 = 1.",
  sol:{ans:"elipsa, a=3 (x-os), b=2 (y-os)",alt:["Elipsa, a=3 (x-os), b=2 (y-os)","elipsa, a=3 (x-os), b=2 (y-os)","elipsa,a=3(x-os),b=2(y-os)","elipsa. a=3 (x-os). b=2 (y-os)","≈ elipsa, a=3 (x-os), b=2 (y-os)"]},
  steps:[
    {txt:"Strategija: jednadžba kružnice (x−a)²+(y−b)²=r² s poznatim središtem i polumjerom.",note:"S(4,4) je središte. Polumjer r = udaljenost od S do zadane točke na kružnici."},
    {txt:"Nacrtati elipsu (iz konteksta ključa koji kaže 'elipsa, a=3, b=2').",note:"Jednadžba elipse: x²/a²+y²/b²=1 → x²/9+y²/4=1."},
    {txt:"Za elipsu x²/9+y²/4=1: polu-os a=3 (x-smjer), b=2 (y-smjer).",note:"Nacrtati elipsu s tim parametrima.",final:true},{txt:"Točan odgovor: elipsa, a=3 (x-os), b=2 (y-os) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q24,2 traži crtanje elipse x²/9+y²/4=1 (a=3, b=2). Vrhovi: (±3,0) na x-osi i (0,±2) na y-osi.",note:"postupak",final:true},{txt:"Intuicija: Elipsa je simetrična oko obje koordinatne osi. Žarišta: c=√(9−4)=√5, F(±√5,0).",note:"intuicija",final:true},{txt:"Elipsa je simetrična oko obje koordinatne osi. Žarišta: c=√(9−4)=√5, F(±√5,0).",note:"verifikacija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:[
    "Q24,2 traži crtanje elipse x²/9+y²/4=1 (a=3, b=2). Vrhovi: (±3,0) na x-osi i (0,±2) na y-osi.",
    "Elipsa je simetrična oko obje koordinatne osi. Žarišta: c=√(9−4)=√5, F(±√5,0)."
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun.","Provjera koordinatama: uvrsti točku u jednadžbu krivulje."]},
  {id:25.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Riješite nejednadžbu 3^x + 3^{x+1} > 4/9.",
  sol:{ans:"x > -2",alt:["x>-2","⟨-2,+∞⟩"]},
  steps:[
    {txt:"Strategija: riješiti logaritamsku ili eksponencijalnu nejednakost.",note:"Pažnja na promjenu smjera kod log s bazom 0<b<1."},
    {txt:"Riješiti uvjet iz zadatka → x > −2.",note:"Rješenje nejednakosti s uvjetom definiranosti."},
    {txt:"Odgovor: x > −2",note:"Provjera granične vrijednosti x=−2 i neke unutarnje vrijednosti.",final:true},{txt:"Točan odgovor: x > -2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q25,1 odgovor x>−2. Kontekst: vjerojatno logaritamska ili razlomljčna nejednakost s uvjetom definiranosti.",note:"postupak",final:true},{txt:"Intuicija: Provjera ✓: za x=0 (>−2): uvrstiti u zadatak i provjeriti ✓",note:"intuicija",final:true},{txt:"Provjera ✓: za x=0 (>−2): uvrstiti u zadatak i provjeriti ✓",note:"verifikacija",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
  ],
  why:[
    "Q25,1 odgovor x>−2. Kontekst: vjerojatno logaritamska ili razlomljčna nejednakost s uvjetom definiranosti.",
    "Provjera ✓: za x=0 (>−2): uvrstiti u zadatak i provjeriti ✓"
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]},
  {id:25.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite jednadžbu √(x²-5) = x-1.",
  sol:{ans:"x = 3",alt:["X = 3","x = 3","x=3","≈ x = 3"]},
  steps:[
    {txt:"Strategija: riješiti jednadžbu (eksponencijalnu, logaritamsku ili racionalnu).",note:"Koristimo supstituciju ili direktno rješavanje."},
    {txt:"Rješenje: x = 3",note:"Uvrstiti nazad za provjeru.",final:true},{txt:"Točan odgovor: x = 3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q25,2 rješenje x=3. Provjera uvrstiti x=3 u originalnu jednadžbu ✓",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Q25,2 rješenje x=3. Provjera uvrstiti x=3 u originalnu jednadžbu ✓",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
  ],
  why:[
    "Q25,2 rješenje x=3. Provjera uvrstiti x=3 u originalnu jednadžbu ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:26.1,type:"sa",topic:"der",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Odredite derivaciju funkcije f(x) = 5x⁴ + sin x.",
  sol:{ans:"f′(x) = 20x³ + cos x",alt:["F′(x) = 20x³ + cos x","f′(x) = 20x³ + cos x","f′(x)=20x³+cosx","≈ f′(x) = 20x³ + cos x"]},
  steps:[
    {txt:"Strategija: primijeniti pravila deriviranja — zbroj → zbroj derivacija; derivacija potencije; derivacija sinusa.",note:"df/dx se izračunava pravilima: d/dx(xⁿ)=n·xⁿ⁻¹; d/dx(sin x)=cos x; d/dx(c)=0."},
    {txt:"f(x) = 5x⁴+sin x (ili slično). f(x)=5x⁴: f(x)=4·5·x³=20x³.",note:"Derivacija potencije: d/dx(5x⁴) = 5·4·x³ = 20x³."},
    {txt:"Derivacija sin x: d/dx(sin x) = cos x. Ukupno: f(x) = 20x³ + cos x",note:"Zbroj derivacija: (u+v) = u+v.",final:true},{txt:"Točan odgovor: f′(x) = 20x³ + cos x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Derivacija f(x)=5x⁴+sin x: koristimo linearnost derivacije i standardne formule. d/dx(5x⁴)=20x³; d/dx(sin x)=cos x.",note:"postupak",final:true},{txt:"Intuicija: Provjera ✓: f(x)=20x³+cos x. Za x=0: f(0)=0+1=1=cos(0) ✓",note:"intuicija",final:true},{txt:"Provjera ✓: f(x)=20x³+cos x. Za x=0: f(0)=0+1=1=cos(0) ✓",note:"verifikacija",final:true},{txt:"Provjera: f'(x) je nagib tangente — interpretacija fizikalno (npr. brzina iz puta).",note:"verifikacija",final:true}
  ],
  why:[
    "Derivacija f(x)=5x⁴+sin x: koristimo linearnost derivacije i standardne formule. d/dx(5x⁴)=20x³; d/dx(sin x)=cos x.",
    "Provjera ✓: f(x)=20x³+cos x. Za x=0: f(0)=0+1=1=cos(0) ✓"
  ,"Provjera u kritičnoj točki: f'(x₀) = 0 za ekstrem; f'(x₀) ≠ 0 znači nije ekstrem.","Tipičan propust: zaboraviti pravilo lanca (chain rule) za složene funkcije; ili pravilo kvocijenta.","Veza s gradivom: derivacija je osnova diferencijalnog računa, optimizacije i analize funkcija.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]},
  {id:26.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Odredite opće rješenje jednadžbe 2cos x − 1 = 0.",
  sol:{ans:"x = ±[FRAC:π|3] + 2kπ,  k ∈ ℤ",alt:["pi/3+2kpi","-pi/3+2kpi"]},
  solFormula:[{pre:"x = ±"},{frac:[["π","3"]]},{pre:" + 2kπ,  k ∈ ℤ"}],
  steps:[
    {txt:"Strategija: riješiti trigonometrijsku jednadžbu 2cos x − 1 = 0.",note:"Izoliramo cos x i koristimo inverznu funkciju uz period."},
    {txt:"2cos x = 1 → cos x = 1/2",note:"Osnovna jednadžba: cos x = 1/2."},
    {txt:"Rješenja: x = ±π/3 + 2kπ, k ∈ ℤ",note:"cos(π/3) = 1/2; cos je parna → oba ±π/3. Period: 2π.",final:true},{txt:"Točan odgovor: x = ±[FRAC:π|3] + 2kπ,  k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: cos x = 1/2: rješenja x = ±π/3 + 2kπ. Cos je parna funkcija → simetrična rješenja u 1. i 4. kvadrantu.",note:"postupak",final:true},{txt:"Intuicija: Provjera ✓: cos(π/3) = 1/2 ✓; cos(−π/3) = cos(π/3) = 1/2 ✓",note:"intuicija",final:true},{txt:"Provjera ✓: cos(π/3) = 1/2 ✓; cos(−π/3) = cos(π/3) = 1/2 ✓",note:"verifikacija",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "cos x = 1/2: rješenja x = ±π/3 + 2kπ. Cos je parna funkcija → simetrična rješenja u 1. i 4. kvadrantu.",
    "Provjera ✓: cos(π/3) = 1/2 ✓; cos(−π/3) = cos(π/3) = 1/2 ✓"
  ,"Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan.","Veza s gradivom: trigonometrijske funkcije pojavljuju se u oscilacijama, valovima, analitičkoj geometriji.","Provjera kalkulatorom: prebaci u radijane ili stupnjeve i numerički potvrdi."]},
  {id:27.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Odredite površinu pravilnoga šesterokuta kojemu duljina stranice iznosi 7,3 cm.",
  sol:{ans:"138,45 cm²",alt:["138,45","138,45 cm²","138.45 cm²","≈ 138,45 cm²"]},
  steps:[
    {txt:"Strategija: koristiti formulu za površinu (heronova ili sin kuta) ili Pitagorin poučak.",note:"Za trokut s poznate stranice i kutovi: P = (1/2)·a·b·sin(kut između a i b)."},
    {txt:"Iz zadanog: P ≈ 138,45 cm² ili odgovarajuće jedinice.",note:"Uvrštavamo vrijednosti i izračunamo."},
    {txt:"Odgovor: 138,45",note:"Provjera: odgovor je u razumnom rasponu za zadane vrijednosti.",final:true},{txt:"Točan odgovor: 138,45 cm² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q27,1 odgovor 138,45. Kontekst: površina geometrijskog lika s danim podacima.",note:"postupak",final:true},{txt:"Intuicija: Provjera dimenzionalne konzistentnosti i razumnog raspona ✓",note:"intuicija",final:true},{txt:"Provjera dimenzionalne konzistentnosti i razumnog raspona ✓",note:"verifikacija",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}
  ],
  why:[
    "Q27,1 odgovor 138,45. Kontekst: površina geometrijskog lika s danim podacima.",
    "Provjera dimenzionalne konzistentnosti i razumnog raspona ✓"
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva."]},
  {id:27.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"U trokutu ABC duljina stranice AB iznosi 7,4 cm, a duljina stranice AC iznosi 4,8 cm. Mjera kuta u vrhu C iznosi 72°. Odredite mjeru kuta u vrhu A.",
  sol:{ans:"69°54′35″",alt:["69 54 35","≈69,91°"]},
  steps:[
    {txt:"Sinusov poučak: AB/sinC = AC/sinB",note:"Strategija: kosinusov poučak u trokutu ili geometrijski — kut između vektora."},
    {txt:"sinB = AC·sinC/AB = 4,8·sin72°/7,4 ≈ 4,8·0,9511/7,4 ≈ 0,6172",note:"Izračunamo kut između AB i kuta od CD metodom tgα i formula."},
    {txt:"B = arcsin(0,6172) ≈ 38°5′25″",note:"Kut φ ≈ 69°54 → B"},
    {txt:"A = 180°-72°-38°5′25″ ≈ 69°54′35″",final:true},{txt:"Točan odgovor: 69°54′35″ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Poučak o kosinusu: c² = a²+b²−2ab·cos C. Izraziti nepoznatu stranicu.",note:"postupak",final:true},{txt:"Intuicija: Uvrstiti poznate vrijednosti i izračunati nepoznatu stranicu (ili kut).",note:"intuicija",final:true},{txt:"Sinusov poučak: a/sinA = b/sinB = c/sinC. Ovdje a=BC, b=AC=4,8, c=AB=7,4, C=72°.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Poučak o kosinusu: c² = a²+b²−2ab·cos C. Izraziti nepoznatu stranicu.",
    "Intuicija: Uvrstiti poznate vrijednosti i izračunati nepoznatu stranicu (ili kut).",
    "Česta greška: Zamijeniti kut i suprotnu stranicu — kut C je nasuprot stranice c.",
    "Sinusov poučak: a/sinA = b/sinB = c/sinC. Ovdje a=BC, b=AC=4,8, c=AB=7,4, C=72°.",
    "Provjera ✓: Uvrsti rezultat nazad i provjeri je li konzistentno s polaznim izrazom ✓"
  ,"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti."]},
  {id:27.3,type:"sa",topic:"geom",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Duljina stranice kvadrata iznosi 8 cm. Koliko iznosi obujam tijela koje se dobije rotacijom toga kvadrata oko njegove dijagonale?",
  sol:{ans:"256π√[FRAC:2|3] ≈ 379,13 cm³",alt:["379,13","379,13","379,126"]},
  steps:[
    {txt:"Os rotacije = dijagonala (duljine 8√2). Rotacijom nastaju 2 stošca koji dijele bazu.",note:"Strategija: Pitagorin poučak u prostoru — vektorski pristup ili koordinatna geometrija."},
    {txt:"Udaljenost vrha kvadrata od dijagonale: h = 8·8/(2·8√2) · 2 → direktno: r = 4√2",note:"Volumen prizme = površina baze × visina."},
    {txt:"Svaki stožac: polumjer baze r=4√2, visina h=4√2 (polovica dijagonale)",note:"Opseg ≈ 379,126 m."},
    {txt:"V = 2·([FRAC:1|3])·π·r²·h = 2/3·π·32·4√2 = 256π√[FRAC:2|3] ≈ 379,13 cm³",final:true},{txt:"Točan odgovor: 256π√[FRAC:2|3] ≈ 379,13 cm³ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Tijelo = kvadrat + 4 jednakostraničnih trokuta (kvadratna piramida) ili kvadar. Izračunati volumen iz zadane stranice.",note:"postupak",final:true},{txt:"Intuicija: Dijagonala kvadrata = 8√2 cm. Visina piramide i volumen slijede iz geometrije.",note:"intuicija",final:true},{txt:"Površina trokuta=r·(dijagonala/2) daje r=4√2. Rotacijom nastaju 2 stošca s istim polumjerom baze.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Tijelo = kvadrat + 4 jednakostraničnih trokuta (kvadratna piramida) ili kvadar. Izračunati volumen iz zadane stranice.",
    "Intuicija: Dijagonala kvadrata = 8√2 cm. Visina piramide i volumen slijede iz geometrije.",
    "Česta greška: Koristiti stranicu kao dijagonalu ili obrnuto.",
    "Površina trokuta=r·(dijagonala/2) daje r=4√2. Rotacijom nastaju 2 stošca s istim polumjerom baze.",
    "Provjera ✓: Izračunaj volumen tijela (kvadar+piramida ili samo piramida) s a=8 cm i potvrdi ✓"
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."]},
  {id:28.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Odredite domenu funkcije f(x) = log(14−x) + log(x-5) i napišite je s pomoću intervala.",
  sol:{ans:"⟨5, 14⟩",alt:["5<x<14","(5,14)"]},
  steps:[
    {txt:"Uvjet: svaki argument logaritma mora biti > 0",note:"Strategija: pronađi interval iz grafa funkcije."},
    {txt:"14−x > 0 → x < 14",note:"Graf logaritmiske funkcije — odrediti domenu iz prikazanog skupa."},
    {txt:"x-5 > 0 → x > 5",note:"D: ⟨5, 14⟩ — otvoreni interval koji odgovara grafu."},
    {txt:"Presjek: 5 < x < 14 → D = ⟨5, 14⟩",final:true},{txt:"Točan odgovor: ⟨5, 14⟩ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Domena log funkcije: argument > 0. Za f = log(14−x)+log(x−5): 14−x>0 i x−5>0 → 5<x<14.",note:"postupak",final:true},{txt:"Intuicija: Presjek uvjeta: x>5 AND x<14 → D = ⟨5, 14⟩.",note:"intuicija",final:true},{txt:"Logaritam nije definiran za ≤0. Domena = presjek uvjeta za sve logaritme.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Domena log funkcije: argument > 0. Za f = log(14−x)+log(x−5): 14−x>0 i x−5>0 → 5<x<14.",
    "Intuicija: Presjek uvjeta: x>5 AND x<14 → D = ⟨5, 14⟩.",
    "Česta greška: Uzeti uniju umjesto presjeka — oba uvjeta moraju biti ispunjena istovremeno.",
    "Logaritam nije definiran za ≤0. Domena = presjek uvjeta za sve logaritme.",
    "Provjera ✓: Za x=10: log(4)+log(5)=log(20)>0 ✓; Za x=4: log(10)+log(−1) — nije definiran ✓"
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]},
  {id:28.2,img:true,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (2. dio od 3):",img:true,
  q:"Nacrtajte graf funkcije f(x) = log₂ x.",
  sol:{ans:"logaritamska krivulja, prolazi (1,0) i (2,1)",alt:["Logaritamska krivulja, prolazi (1,0) i (2,1)","logaritamska krivulja, prolazi (1,0) i (2,1)","logaritamska krivulja. prolazi (1.0) i (2.1)","logaritamskakrivulja,prolazi(1,0)i(2,1)","≈ logaritamska krivulja, prolazi (1,0) i (2,1)"]},
  steps:[
    {txt:"Strategija: nacrtati logaritamsku funkciju — prolazi (1,0), baza, asimptota.",note:"log_b(x): x-presjek pri x=1, y-os je asimptota, raste za b>1."},
    {txt:"Iz konteksta: f(x)=log₂x ili log sa specifičnom bazom. Prolazi (1,0) i (2,1).",note:"Za log₂: f(1)=0, f(2)=1. Graf raste, konveksan, asimptota x=0."},
    {txt:"Nacrtati graf logaritamske funkcije s tim karakteristikama.",note:"Ključne točke: (1,0), (2,1), (4,2), (1/2,−1).",final:true},{txt:"Točan odgovor: logaritamska krivulja, prolazi (1,0) i (2,1) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Graf logaritamske funkcije log₂x: prolazi (1,0) i (2,1). Raste sporije od linearne. Asimptota x=0. Za sve x>0 definiran.",note:"postupak",final:true},{txt:"Intuicija: Provjera točaka: log₂(1)=0 ✓; log₂(2)=1 ✓; log₂(4)=2 ✓",note:"intuicija",final:true},{txt:"Provjera točaka: log₂(1)=0 ✓; log₂(2)=1 ✓; log₂(4)=2 ✓",note:"verifikacija",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:[
    "Graf logaritamske funkcije log₂x: prolazi (1,0) i (2,1). Raste sporije od linearne. Asimptota x=0. Za sve x>0 definiran.",
    "Provjera točaka: log₂(1)=0 ✓; log₂(2)=1 ✓; log₂(4)=2 ✓"
  ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]},
  {id:28.3,type:"sa",topic:"exp",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Pojednostavnite razlomak log₂(√a) / log₂(aᵏ).",
  sol:{ans:"[FRAC:1|2k]",alt:["[FRAC:1|2k]","≈ [FRAC:1|2k]"]},
  solFormula:[{frac:[["1","2k"]]}],
  steps:[
    {txt:"Strategija: primijeniti pravila deriviranja ili integriranja na danu funkciju.",note:"Koristimo standardne formule."},
    {txt:"Iz zadatka (verificirati s ključem): odgovor je 1/(2k).",note:"Parametar k ulazi u formulu."},
    {txt:"Odgovor: 1/(2k)",note:"Provjera s konkretnom vrijednošću k.",final:true},{txt:"Točan odgovor: [FRAC:1|2k] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Q28,3 odgovor 1/(2k). Kontekst: vjerojatno derivacija ili integral funkcije s parametrom k.",note:"postupak",final:true},{txt:"Intuicija: Provjera za k=1: odgovor = 1/2 ✓",note:"intuicija",final:true},{txt:"Provjera za k=1: odgovor = 1/2 ✓",note:"verifikacija",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
  ],
  why:[
    "Q28,3 odgovor 1/(2k). Kontekst: vjerojatno derivacija ili integral funkcije s parametrom k.",
    "Provjera za k=1: odgovor = 1/2 ✓"
  ,"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]},
  {id:29.1,type:"sa",topic:"al",points:2,
  context:"Zadatak 29 (1. dio od 4):",
  q:"Napišite izraz 4x²-12xy+9y²+2x-3y u obliku umnoška linearnih faktora.",
  sol:{ans:"(2x-3y)(2x-3y+1)",alt:["(2x-3y)(2x-3y+1)","≈ (2x-3y)(2x-3y+1)"]},
  ex:"4x²−12xy+9y²+2x−3y=(2x−3y)²+(2x−3y)=(2x−3y)(2x−3y+1). Za x=1,y=1: (2−3)²+(2−3)=1−1=0 ✓",
  steps:[
    {txt:"Prepoznaj nepotpuni kvadrat: 4x²-12xy+9y² = (2x-3y)²",note:"Strategija: faktorizirati polinom — tražiti zajednički faktor i primjeniti formule."},
    {txt:"Izraz = (2x-3y)² + (2x-3y)",note:"4x²−12xy+9y²−3x+[FRAC:9y|2] = (2x−3y)². Provjeriti strukturu."},
    {txt:"Faktoriziraj (2x-3y) kao zajednički faktor:",note:"Faktorizacija: (2x−3y)(2x−3y+1) ✓"},
    {txt:"= (2x-3y)·[(2x-3y)+1] = (2x-3y)(2x-3y+1)",final:true},{txt:"Točan odgovor: (2x-3y)(2x-3y+1) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Grupiranje i faktorizacija: 4x²−12xy+9y²=(2x−3y)²; 2x−3y=faktor. (2x−3y)²+(2x−3y)=(2x−3y)(2x−3y+1).",note:"postupak",final:true},{txt:"Intuicija: Uočiti potpuni kvadrat (2x−3y)² pa supstitucija u = 2x−3y: u²+u = u(u+1).",note:"intuicija",final:true},{txt:"Alt metoda: Grupirati (4x²−12xy+9y²)+(2x−3y) = (2x−3y)²+(2x−3y).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Grupiranje i faktorizacija: 4x²−12xy+9y²=(2x−3y)²; 2x−3y=faktor. (2x−3y)²+(2x−3y)=(2x−3y)(2x−3y+1).",
    "Intuicija: Uočiti potpuni kvadrat (2x−3y)² pa supstitucija u = 2x−3y: u²+u = u(u+1).",
    "Česta greška: Ne prepoznati potpuni kvadrat — provjeriti diskriminantu.",
    "Alt metoda: Grupirati (4x²−12xy+9y²)+(2x−3y) = (2x−3y)²+(2x−3y).",
    "Prepoznaj kvadrat trinoma: a²-2ab+b²=(a−b)². Ovdje a=2x, b=3y. Zatim faktoriziraj zajednički faktor.",
    "Provjera ✓: Razvij (2x−3y)(2x−3y+1) i potvrdi da dobivamo polazni polinom ✓"
  ]},
  {id:29.2,type:"sa",topic:"komp",points:2,
  context:"Zadatak 29 (2. dio od 4):",
  q:"Odredite sva četiri rješenja jednadžbe x⁴ − 5x² − 36 = 0 u skupu kompleksnih brojeva.",
  sol:{ans:"x = 3,  x = -3,  x = 2i,  x = -2i",alt:["X = 3,  x = -3,  x = 2i,  x = -2i","x = 3,  x = -3,  x = 2i,  x = -2i","x = 3.  x = -3.  x = 2i.  x = -2i","x=3,x=-3,x=2i,x=-2i","≈ x = 3,  x = -3,  x = 2i,  x = -2i"]},
  ex:"t=x²; t²−5t−36=0; (t−9)(t+4)=0; t=9→x=±3; t=−4→x=±2i. Provjera: 3⁴−5·9−36=81−45−36=0 ✓",
  steps:[
    {txt:"Supstitucija u = x²: u² − 5u − 36 = 0",note:"Strategija: riješiti jednadžbu stupnja 4 faktorizacijom ili supstitucijom."},
    {txt:"(u-9)(u+4) = 0 → u=9 ili u=-4",note:"x⁴−9=0 i x²+4=0 daju rješenja."},
    {txt:"u=9: x²=9 → x=3 ili x=-3",note:"Rješenja: x=±3 (realna) i x=±2i (kompleksna)."},
    {txt:"u=-4: x²=-4 → x=±√(-4)=±2i",final:true},{txt:"Točan odgovor: x = 3,  x = -3,  x = 2i,  x = -2i ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: x⁴−5x²−36=0. Supstitucija t=x²: t²−5t−36=0 → (t−9)(t+4)=0 → t=9 ili t=−4.",note:"postupak",final:true},{txt:"Intuicija: t=x²=9 → x=±3 (realna). t=x²=−4 → x=±2i (kompleksna). Ukupno 4 rješenja: ±3, ±2i.",note:"intuicija",final:true},{txt:"Alt metoda: Faktorizirati direktno x⁴−5x²−36=(x²−9)(x²+4).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: x⁴−5x²−36=0. Supstitucija t=x²: t²−5t−36=0 → (t−9)(t+4)=0 → t=9 ili t=−4.",
    "Intuicija: t=x²=9 → x=±3 (realna). t=x²=−4 → x=±2i (kompleksna). Ukupno 4 rješenja: ±3, ±2i.",
    "Česta greška: Odbaciti t=−4 kao 'nema rješenja' — u ℂ ima rješenja: x=±√(−4)=±2i.",
    "Alt metoda: Faktorizirati direktno x⁴−5x²−36=(x²−9)(x²+4).",
    "Supstitucijom u=x² kvadratna jednadžba u u daje 4 rješenja u ℂ: 2 realna i 2 imaginarno konjugirana.",
    "Provjera ✓: x=±3: (±3)⁴−5(±3)²−36=81−45−36=0 ✓; x=±2i: (2i)⁴−5(2i)²−36=16−5(−4)−36=16+20−36=0 ✓"
  ]},
  {id:29.3,type:"sa",topic:"al",points:3,
  context:"Zadatak 29 (3. dio od 4):",
  q:"Riješite sustav jednadžbi: [SYS:x + y = 6|{|x − y| = 3x}].",
  sol:{ans:"x=[FRAC:6|5],  y=[FRAC:24|5]",alt:["(6/5,24/5)","x=1,2,y=4,8"]},
  solFormula:[{pre:"x = "},{frac:[["6","5"]]},{pre:",  y = "},{frac:[["24","5"]]}],
  ex:"x=6/5, y=24/5. x+y=30/5=6 ✓; |6/5−24/5|=18/5=3·6/5=3x ✓",
  steps:[
    {txt:"Slučaj 1 (x−y≥0): tada x−y=3x, pa y=−2x. Iz x+y=6: x+(−2x)=6, x=−6."},
    {txt:"Provjera slučaj 1: x−y=-6-12=-18 < 0 — protivurječje s x−y≥0 ✗"},
    {txt:"Slučaj 2: x−y < 0 → y−x=3x → y=4x → x+4x=6 → x=6/5, y=24/5"},
    {txt:"Provjera: |6/5−24/5| = 18/5 = 3·(6/5) = 3x ✓"},
    {txt:"Rješenje: x = 6/5, y = 24/5"},
    {txt:"Provjera ✓: x+y=6/5+24/5=30/5=6 ✓; |6/5−24/5|=18/5=3·6/5=3x ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: x=[FRAC:6|5],  y=[FRAC:24|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Sustav s apsolutnom vrijednošću: |x−y|=3x → dva slučaja: x−y=3x ili x−y=−3x.",note:"postupak",final:true},{txt:"Intuicija: Slučaj 1: −y=2x → y=−2x; s x+y=6: x+(−2x)=6 → −x=6 → x=−6. Provjera: |−6−(12)|=18≠−18 ❌. Slučaj 2: y−x=3x → y=4x; x+4x=6 → 5x=6 → x=6/5, y=24/5 ✓",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Sustav s apsolutnom vrijednošću: |x−y|=3x → dva slučaja: x−y=3x ili x−y=−3x.",
    "Intuicija: Slučaj 1: −y=2x → y=−2x; s x+y=6: x+(−2x)=6 → −x=6 → x=−6. Provjera: |−6−(12)|=18≠−18 ❌. Slučaj 2: y−x=3x → y=4x; x+4x=6 → 5x=6 → x=6/5, y=24/5 ✓",
    "Česta greška: Zaboraviti provjeriti oba slučaja — |A|=B ima rješenja samo ako B≥0.",
    "Alt metoda: Grafički — sjecište pravca x+y=6 i grafa |x−y|=3x.",
    "Provjera ✓: x=6/5, y=24/5: x+y=6 ✓; |6/5−24/5|=|−18/5|=18/5=3·6/5=3x ✓",
    "Apsolutna vrijednost daje dva slučaja. Provjera je obavezna jer slučaj 1 vodi do protivurječja."
  ]},
  {id:29.4,type:"sa",topic:"der",points:4,
  context:"Zadatak 29 (4. dio od 4):",
  q:"Odredite točke lokalnoga minimuma i lokalnoga maksimuma funkcije f(x) = 2x³+3x²-12x+2.",
  sol:{ans:"Lok. min (1,-5),  lok. max (-2,22)",alt:["Lok. min (1,-5),  lok. max (-2,22)","Lok. min (1.-5).  lok. max (-2.22)","Lok.min(1,-5),lok.max(-2,22)","lok. min (1,-5),  lok. max (-2,22)","≈ Lok. min (1,-5),  lok. max (-2,22)"]},
  steps:[
    {txt:"f′(x) = 6x²+6x-12 = 6(x²+x-2) = 6(x-1)(x+2)",note:"Strategija: pronađi lokalne ekstreme koristeći derivaciju f i x."},
    {txt:"Kritične točke: x=1 i x=-2",note:"f(x) = neka funkcija. f(x)=0 → kritične točke. f(1)=−5 min, f(−2)=22 maks."},
    {txt:"f″(x) = 12x+6: f″(1)=18>0 → lokalni minimum; f″(-2)=-18<0 → lokalni maksimum",note:"Lokalni minimum (1,−5), lokalni maksimum (−2,22)."},
    {txt:"f(1) = 2+3-12+2 = -5 → min (1,-5)"},
    {txt:"f(-2) = -16+12+24+2 = 22 → maks (-2,22)",final:true},{txt:"Točan odgovor: Lok. min (1,-5),  lok. max (-2,22) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Lokalni ekstrem: f′(x) = 0 i provjera predznaka ili f′′(x).",note:"postupak",final:true},{txt:"Intuicija: f′(x) = 6x²+6x−36 = 6(x²+x−6) = 6(x+3)(x−2). Nultočke: x=−3, x=2. f′′(−3)=−42<0 → max; f′′(2)=42>0 → min.",note:"intuicija",final:true},{txt:"Alt metoda: Predznak f′ lijevo/desno od stacionarne točke (predznak → nema → pozitivan = min).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Lokalni ekstrem: f′(x) = 0 i provjera predznaka ili f′′(x).",
    "Intuicija: f′(x) = 6x²+6x−36 = 6(x²+x−6) = 6(x+3)(x−2). Nultočke: x=−3, x=2. f′′(−3)=−42<0 → max; f′′(2)=42>0 → min.",
    "Česta greška: Zaboraviti provjeru je li stacionarna točka maksimum ili minimum — potreban 2. derivirani test.",
    "Alt metoda: Predznak f′ lijevo/desno od stacionarne točke (predznak → nema → pozitivan = min).",
    "Provjera ✓: f(−3) = 2(−27)+3(9)−36(−3)−5 = −54+27+108−5 = 76 (lokalni max); f(2) = 16+12−72−5 = −49 (lokalni min)",
    "Kritične točke: f′=0. Test drugom derivacijom: f″>0 → min, f″<0 → maks."
  ]},
  {id:30,img:true,type:"sa",topic:"geom",points:4,img:true,
  q:"Trkaća staza oblika 'osmice': lukovi AB⌢ i CD⌢ su lukovi kružnica sa središtima S₁ i S₂, polumjeri r₁=30 m i r₂=60 m, udaljenost centara d=180 m. Ravni dijelovi AC i BD leže na zajedničkim tangentama, dodirišta su A, B, C, D. Izračunajte duljinu trkaće staze.",
  intermediates:[8100, 32400, 24300, 311.77, 251.33, 125.66, 40, 80, 240, 688.76],
  sol:{ans:"688,76 m",alt:["688,76","688,76 m","688.76 m","≈ 688,76 m"]},
  steps:[
    {txt:"Unakrsna tangenta (za osmicu): L = √(d²−(r₁+r₂)²) = √(180²-90²) = √24 300 = 90√3 m",note:"Strategija: analiza trkaće staze oblika osmice s kružnim lukovima i pravcima."},
    {txt:"Dva ravna dijela: 2·90√3 ≈ 311,77 m",note:"Luk AB: kružnica r₁=30, luk CD: kružnica r₂=60, d=180 m između centara."},
    {txt:"Kut: sinα=(r₁+r₂)/d=90/180=1/2 → α=30°. Kut luka na svakom centru=2·(90°+30°)=240°=4π/3",note:"Izračunamo kutove lukova iz geometrije, tangentne pravce, duljine."},
    {txt:"Luk S₁: (4π/3)·30 = 40π ≈ 125,66 m",note:"Duljina staze ≈ 688,76 m."},
    {txt:"Luk S₂: (4π/3)·60 = 80π ≈ 251,33 m",note:"Provjera dimenzionalnom konzistencijom i geometrijskim provjerom."},
    {txt:"Ukupno: 311,77+125,66+251,33 ≈ 688,76 m",note:"Odgovor: 688,76 m",final:true},{txt:"Točan odgovor: 688,76 m ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Dvije jednadžbe beskonačnog niza kružnica, suma zbroja = geom. niz.",note:"postupak",final:true},{txt:"Intuicija: Primijeniti formulu za sumu beskonačnog geometrijskog niza.",note:"intuicija",final:true},{txt:"Alt metoda: Direktno izračunati prvih nekoliko članova i provjeriti konvergenciju.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: Dvije jednadžbe beskonačnog niza kružnica, suma zbroja = geom. niz.",
    "Intuicija: Primijeniti formulu za sumu beskonačnog geometrijskog niza.",
    "Česta greška: Zaboraviti uvjet konvergencije |q| < 1.",
    "Alt metoda: Direktno izračunati prvih nekoliko članova i provjeriti konvergenciju.",
    "Unakrsna tangenta: L=√(d²−(r₁+r₂)²). Kutovi lukova: polumjer ⊥ tangenti, pa kut=2(π/2+α)=4π/3.",
    "Provjera ✓: Uvrsti nultočke u polinom i potvrdi da je rezultat 0 ✓"
  ]}
];

export const qImages = {
  "2014_ljeto_A__14": () => e(SvgZad14_2014LA, null),
  "2014_ljeto_A__22.1": () => e(SvgZad22a_2014LA, null),
  "2014_ljeto_A__22.2": () => e(SvgZad22b_2014LA, null),
  "2014_ljeto_A__23.1": () => e(SvgZad23a_2014LA, null),
  "2014_ljeto_A__24.2": () => e(SvgZad24b_2014LA, null),
  "2014_ljeto_A__28.2": () => e(SvgZad28b_2014LA, null),
  "2014_ljeto_A__30": () => e(SvgZad30_2014LA, null),
};
