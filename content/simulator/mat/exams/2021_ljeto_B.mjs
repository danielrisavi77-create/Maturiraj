// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg15_2021Bljeto(){
  const W=260,H=200;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const tri=(x,y,s,k)=>{
    const h=s*Math.sqrt(3)/2;
    return e("polygon",{key:k,
      points:`${x},${y-h} ${x-s/2},${y} ${x+s/2},${y}`,
      fill:"none",stroke:_BLUE,strokeWidth:1.8});
  };
  const S=68; // side
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // 1 gore (vrh)
    tri(W/2, 75, S, "t0"),
    // 2 sredina — lijevo i desno
    tri(W/2-S*0.5, 140, S, "t1"),
    tri(W/2+S*0.5, 140, S, "t2"),
    // 1 dolje
    tri(W/2, 195, S, "t3"),
  );
}

function Svg13_2021Bljeto(){
  const W=240,H=180;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const OX=90,OY=120,SX=35,SY=30;
  const elems=[];
  // Osi
  elems.push(e("line",{key:"ax",x1:10,y1:OY,x2:W-10,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:10,x2:OX,y2:H-10,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-10},${OY} ${W-18},${OY-3} ${W-18},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${10} ${OX-3},${18} ${OX+3},${18}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-8,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+4,y:13,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX+3,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SX+1,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  // Mark c>0: y-intercept above x-axis (small dot)
  elems.push(e("circle",{key:"c0",cx:OX,cy:OY-SY*0.5,r:3,fill:_RED}));
  // Parabola: f(x)=-x²+x+1.5 (a<0, c>0, max above x-axis, crosses x-axis twice)
  const clip="cp13B";
  let d="";
  for(let i=0;i<=120;i++){
    const x=-2+4*i/120;
    const y=-x*x+x+1.5;
    const px=OX+x*SX, py=OY-y*SY;
    d+=(i===0?"M ":"L ")+px.toFixed(1)+" "+py.toFixed(1)+" ";
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("defs",null,e("clipPath",{id:clip},e("rect",{x:11,y:11,width:W-22,height:H-22}))),
    ...elems,
    e("path",{key:"curve",d,fill:"none",stroke:_BLUE,strokeWidth:2.2,clipPath:`url(#${clip})`})
  );
}

function Svg12_2021Bljeto(){
  const W=340,H=200;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const data=[{l:"E",v:1257},{l:"F",v:1563},{l:"G",v:1376},{l:"H",v:943},{l:"I",v:435}];
  const maxV=2000,BAR=38,GAP=16,LEFT=38,BOT=160,TOP=15;
  const scaleY=(v)=>BOT-v*(BOT-TOP)/maxV;
  const elems=[];

  // Y gridlines + labels
  [0,500,1000,1500,2000].forEach(v=>{
    const y=scaleY(v);
    elems.push(e("line",{key:"g"+v,x1:LEFT,y1:y,x2:W-10,y2:y,stroke:"var(--bdr)",strokeWidth:0.8}));
    elems.push(e("text",{key:"gl"+v,x:LEFT-6,y:y+4,fontSize:9,fill:"var(--muted)",textAnchor:"end"},v));
  });

  // Bars + labels
  data.forEach((d,i)=>{
    const x=LEFT+i*(BAR+GAP);
    const y=scaleY(d.v);
    elems.push(e("rect",{key:"b"+i,x,y,width:BAR,height:BOT-y,fill:_BLUE,opacity:0.85}));
    elems.push(e("text",{key:"v"+i,x:x+BAR/2,y:y-4,fontSize:9,fill:"var(--text)",textAnchor:"middle"},d.v));
    elems.push(e("text",{key:"l"+i,x:x+BAR/2,y:BOT+13,fontSize:11,fill:"var(--text)",fontWeight:"bold",textAnchor:"middle"},d.l));
  });

  // X axis
  elems.push(e("line",{key:"ax",x1:LEFT,y1:BOT,x2:W-10,y2:BOT,stroke:_BLUE,strokeWidth:1.3}));
  // Legend
  elems.push(e("rect",{key:"lr",x:LEFT,y:H-18,width:10,height:10,fill:_BLUE,opacity:0.85}));
  elems.push(e("text",{key:"lt",x:LEFT+14,y:H-9,fontSize:9,fill:"var(--muted)"},"Broj sati izostanaka"));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg24b_2021Bljeto(){
  // Zadatak: "U zadanome koordinatnom sustavu nacrtajte graf funkcije f(x) = −x + 3."
  // Student treba SAM crtati pravac — SVG mora biti SAMO prazna mreža s osima.
  const W=230,H=185;
  const OX=100,OY=90,SZ=24;
  const elems=[];
  for(let i=-4;i<=5;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:10,x2:OX+i*SZ,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-3;j<=4;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SZ,x2:W-8,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX-10,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ-3,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-14,y:OY-SZ+4,fontSize:9,fill:"var(--muted)"},"1"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

function Svg23b_2021Bljeto(){
  const W=280,H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // PDF-verified vertices: A(-4,0), B(5,0), C(5,4), D(-3,4)
  // P = (AB+DC)/2 · h = (9+8)/2 · 4 = 34 — match NCVVO ključa
  // Y-os u lijevoj trećini (od x=-5 do x=+6)
  const OX=110,OY=150,SZ=22;
  const elems=[];
  // Grid
  for(let i=-5;i<=7;i++) elems.push(e("line",{key:`gv${i}`,x1:OX+i*SZ,y1:8,x2:OX+i*SZ,y2:H-8,stroke:"var(--bdr)",strokeWidth:0.7}));
  for(let j=-2;j<=6;j++) elems.push(e("line",{key:`gh${j}`,x1:8,y1:OY-j*SZ,x2:W-8,y2:OY-j*SZ,stroke:"var(--bdr)",strokeWidth:0.7}));
  // Osi
  elems.push(e("line",{key:"ax",x1:8,y1:OY,x2:W-8,y2:OY,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("line",{key:"ay",x1:OX,y1:8,x2:OX,y2:H-8,stroke:"var(--text)",strokeWidth:1.4}));
  elems.push(e("polygon",{key:"axh",points:`${W-8},${OY} ${W-16},${OY-3} ${W-16},${OY+3}`,fill:"var(--text)"}));
  elems.push(e("polygon",{key:"ayh",points:`${OX},${8} ${OX-3},${16} ${OX+3},${16}`,fill:"var(--text)"}));
  elems.push(e("text",{key:"lx",x:W-6,y:OY-4,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"x"));
  elems.push(e("text",{key:"ly",x:OX+3,y:12,fontSize:10,fill:"var(--text)",fontStyle:"italic"},"y"));
  elems.push(e("text",{key:"l0",x:OX-10,y:OY+12,fontSize:9,fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1",x:OX+SZ-3,y:OY+12,fontSize:9,fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y",x:OX-14,y:OY-SZ+4,fontSize:9,fill:"var(--muted)"},"1"));
  // Trapez ABCD
  const pts=[[-4,0],[5,0],[5,4],[-3,4]];
  const pxPts=pts.map(([x,y])=>({px:OX+x*SZ,py:OY-y*SZ}));
  const poly=pxPts.map(p=>`${p.px},${p.py}`).join(" ");
  elems.push(e("polygon",{key:"abcd",points:poly,fill:_BLUE,fillOpacity:0.3,stroke:_BLUE,strokeWidth:1.8}));
  // Oznake vrhova A, B, C, D
  const labels=["A","B","C","D"];
  const offsets=[[-14,12],[6,12],[6,-6],[-14,-6]];
  pxPts.forEach((p,i)=>{
    elems.push(e("circle",{key:"pt"+i,cx:p.px,cy:p.py,r:3,fill:_RED}));
    elems.push(e("text",{key:"lbl"+i,x:p.px+offsets[i][0],y:p.py+offsets[i][1],fontSize:11,fill:"var(--text)",fontStyle:"italic"},labels[i]));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},elems);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 19/7 ≈ 2,71; provjeri koji ponuđeni broj je veći.",topic:"br",points:1,
 q:"Koji je od navedenih brojeva veći od broja 19/7?",
 opts:["1,6²","0,12 · 25","2,31 + 0,08","5 − 2,8"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"19/7 ≈ 2,714. Tražimo broj VEĆI od toga."},{txt:"A) 1,6² = 2,56 → manje od 2,714. NIJE.",note:"diagnostika"},{txt:"B) 0,12 · 25 = 3,00 → veće od 2,714 ✓.",note:"diagnostika"},{txt:"C) 2,31 + 0,08 = 2,39 → manje. NIJE.",note:"diagnostika"},{txt:"D) 5 − 2,8 = 2,2 → manje. NIJE.",note:"diagnostika"},{txt:"Provjera B: 3 > 19/7 ⇔ 21 > 19 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 19/7 = 2 ostatak 5 → 2 + 5/7 ≈ 2,71.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri usporedbi razlomka s decimalom — pretvori razlomak u decimalu, ili oba u zajednički nazivnik.",note:"postupak",final:true}],
 why:["Pravilo: pri usporedbi razlomka s decimalom — pretvori razlomak u decimalu, ili oba u zajednički nazivnik.","Intuicija: 19/7 = 2 ostatak 5 → 2 + 5/7 ≈ 2,71.","Česta greška: približno zaokruživanje izgubi točnost (2,7 vs 2,714).","Provjera B: 0,12 · 25 = 3 > 2,714 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:2,type:"mc",warn:"Pazi: aritmetička sredina = (13 + 22 + 37)/3.",topic:"br",points:1,
 q:"Kolika je aritmetička sredina brojeva 13, 22 i 37?",
 opts:["20","24","31","36"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Aritmetička sredina 13, 22, 37: (13 + 22 + 37)/3."},{txt:"Zbroj: 72. Sredina: 72/3 = 24."},{txt:"A) 20: krivo.",note:"diagnostika"},{txt:"B) 24 ✓ — točno.",note:"diagnostika"},{txt:"C) 31, D) 36: krivo.",note:"diagnostika"},{txt:"Provjera: 13 + 22 + 37 = 72; 72/3 = 24 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: za 3 broja sredina je srednji broj ako su jednako razmaknuti, ali općenito zbroj/3.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj / broj.",note:"postupak",final:true}],
 why:["Pravilo: aritmetički prosjek = zbroj / broj.","Intuicija: za 3 broja sredina je srednji broj ako su jednako razmaknuti, ali općenito zbroj/3.","Česta greška: medijan (22) umjesto sredine (24).","Provjera: 72/3 = 24 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:3,type:"mc",warn:"Pazi: cijena 1 mjerice = 70/5 = 14 kn; pa ·3.",topic:"br",points:1,
 q:"Pet mjerica malina košta 70 kn. Kolika je cijena triju mjerica malina?",
 opts:["40 kn","42 kn","44 kn","46 kn"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"5 mjerica = 70 kn → 1 mjerica = 14 kn."},{txt:"3 mjerice = 3 · 14 = 42 kn."},{txt:"A) 40: krivo.",note:"diagnostika"},{txt:"B) 42 ✓ — točno.",note:"diagnostika"},{txt:"C) 44, D) 46: krivo.",note:"diagnostika"},{txt:"Provjera: 5 · 14 = 70 kn ✓; 3 · 14 = 42 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 5 × 14 = 70 → ako 5 mjerica = 70 kn, 1 mjerica = 14 kn.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: proporcionalno cijene — cijena/količina je konstantna.",note:"postupak",final:true}],
 why:["Pravilo: proporcionalno cijene — cijena/količina je konstantna.","Intuicija: 5 × 14 = 70 → ako 5 mjerica = 70 kn, 1 mjerica = 14 kn.","Česta greška: aritmetika u dvije faze — prvo cijena jedinice, pa pomnožiti.","Provjera: 3 · 14 = 42 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:4,type:"mc",warn:"Pazi: prebaci sve s M na jednu stranu → M + 7M = 31 − K.",topic:"al",points:1,
 q:"Čemu je jednako M ako je K + M = 31 − 7M?",
 opts:["31/8 − K","31/8 + K","(31 − K)/8","(31 + K)/8"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Jednadžba K + M = 31 − 7M. Izoliraj M."},{txt:"Dodaj 7M na obje strane: K + 8M = 31."},{txt:"Oduzmi K: 8M = 31 − K → M = (31 − K)/8."},{txt:"A) 31/8 − K = (31 − 8K)/8: krivo, K se dijeli s 8.",note:"diagnostika"},{txt:"B) 31/8 + K: krivi predznak.",note:"diagnostika"},{txt:"C) (31 − K)/8 ✓ — točno.",note:"diagnostika"},{txt:"D) (31 + K)/8: krivi predznak K.",note:"diagnostika"},{txt:"Provjera za K = 7, M = 3: 7 + 3 = 10; 31 − 7·3 = 31 − 21 = 10 ✓; (31−7)/8 = 3 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 7M na desnoj strani postaje +7M na lijevoj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izoliranje varijable — pomicanje termina s M na jednu stranu.",note:"postupak",final:true}],
 why:["Pravilo: izoliranje varijable — pomicanje termina s M na jednu stranu.","Intuicija: 7M na desnoj strani postaje +7M na lijevoj.","Česta greška: pisati (31/8) − K umjesto (31 − K)/8 (zaboraviti zajednički nazivnik za K).","Provjera s konkretnim K, M → ekvivalentno ✓.","Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:5,type:"mc",warn:"Pazi: d = √((8 − 3)² + (2 − 5)²); pazi na predznake.",topic:"anal",points:1,
 q:"Koliko iznosi udaljenost između točaka A(3, 5) i B(8, 2) u koordinatnome sustavu?",
 opts:["√34","√72","√112","√130"],
 sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
 steps:[{txt:"Udaljenost A(3, 5) i B(8, 2). Formula: √((x₂−x₁)² + (y₂−y₁)²)."},{txt:"Δx = 8 − 3 = 5; Δy = 2 − 5 = −3."},{txt:"d = √(25 + 9) = √34."},{txt:"A) √34 ✓ — točno.",note:"diagnostika"},{txt:"B) √72: krivo.",note:"diagnostika"},{txt:"C) √112, D) √130: krivo.",note:"diagnostika"},{txt:"Provjera: 5² + 3² = 34 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: Δx i Δy su katete pravokutnog trokuta s udaljenosti = hipotenuza.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost = √((Δx)² + (Δy)²) (Pitagora u koordinatnom sustavu).",note:"postupak",final:true}],
 why:["Pravilo: udaljenost = √((Δx)² + (Δy)²) (Pitagora u koordinatnom sustavu).","Intuicija: Δx i Δy su katete pravokutnog trokuta s udaljenosti = hipotenuza.","Česta greška: zaboraviti kvadrirati Δy ako je negativan (kvadriranje uklanja predznak).","Provjera: 5² + (−3)² = 25 + 9 = 34 ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]},
  {id:6,type:"mc",warn:"Pazi: prvo riješi po x (pomnoži s 5), pa DODAJ 10 (pažljivo pročitaj uvjet).",topic:"al",points:1,
 q:"Zadana je jednadžba (3x+8)/5 − x = 4. Koliko iznosi rješenje te jednadžbe uvećano za 10?",
 opts:["-12","-5","4","13"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Jednadžba (3x + 8)/5 − x = 4. Riješi pa uvećaj za 10."},{txt:"Pomnoži s 5: 3x + 8 − 5x = 20 → −2x = 12 → x = −6."},{txt:"Uvećano za 10: −6 + 10 = 4."},{txt:"A) −12: 2× manje.",note:"diagnostika"},{txt:"B) −5: krivo.",note:"diagnostika"},{txt:"C) 4 ✓ — točno.",note:"diagnostika"},{txt:"D) 13: krivo.",note:"diagnostika"},{txt:"Provjera za x = −6: (−18+8)/5 − (−6) = −10/5 + 6 = −2 + 6 = 4 ✓. Uvećano za 10 = −6 + 10 = 4 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: izračunaj x, pa primijeni traženu operaciju.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna jednadžba s razlomkom — ukloni razlomak množenjem.",note:"postupak",final:true}],
 why:["Pravilo: linearna jednadžba s razlomkom — ukloni razlomak množenjem.","Intuicija: izračunaj x, pa primijeni traženu operaciju.","Česta greška: uvecati za 10 tumačiti kao pomnoziti s 10.","Provjera: x + 10 = −6 + 10 = 4 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:7,type:"mc",warn:"Pazi: prebaci u 2x² − 7x − 9 = 0; Viète zbroj = 7/2.",topic:"kv",points:1,
 q:"Koliko iznosi zbroj rješenja jednadžbe 2x(x − 2) = 3(x + 3)?",
 opts:["-7/2","-1/2","1/2","7/2"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"2x(x − 2) = 3(x + 3) → 2x² − 4x = 3x + 9 → 2x² − 7x − 9 = 0."},{txt:"Zbroj rješenja po Vièteu: −b/a = 7/2."},{txt:"A) −7/2: krivi predznak.",note:"diagnostika"},{txt:"B) −1/2: zbroj jednog korijena.",note:"diagnostika"},{txt:"C) 1/2: krivo.",note:"diagnostika"},{txt:"D) 7/2 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: 2x² − 7x − 9 = (2x − 9)(x + 1); rješenja: 9/2, −1; zbroj = 9/2 − 1 = 7/2 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: ne treba rješavati — zbroj direktno iz koeficijenata.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kvadratnu ax² + bx + c = 0 zbroj rješenja = −b/a (Viète).",note:"postupak",final:true}],
 why:["Pravilo: za kvadratnu ax² + bx + c = 0 zbroj rješenja = −b/a (Viète).","Intuicija: ne treba rješavati — zbroj direktno iz koeficijenata.","Česta greška: pomiješati zbroj i produkt rješenja.","Provjera: 9/2 + (−1) = 7/2 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:8,type:"mc",warn:"Pazi: 1 kg/m³ = 0,001 g/cm³ → dijeli s 1000.",topic:"br",points:1,
 q:"Koliko iznosi gustoća od 84 kg m⁻³ izražena u g cm⁻³?",
 opts:["0,0084","0,084","0,84","8,4"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Gustoća 84 kg/m³ = ? g/cm³."},{txt:"1 kg = 1000 g; 1 m³ = 10⁶ cm³."},{txt:"84 kg/m³ = 84 · 1000 g / 10⁶ cm³ = 84000 / 1000000 = 0,084 g/cm³."},{txt:"A) 0,0084: 10× manji.",note:"diagnostika"},{txt:"B) 0,084 ✓ — točno.",note:"diagnostika"},{txt:"C) 0,84, D) 8,4: krivi.",note:"diagnostika"},{txt:"Provjera: 84000/10⁶ = 0,084 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 1 g/cm³ = 1000 kg/m³ (gustoća vode 1 g/cm³ = 1000 kg/m³).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: konverzija jedinica — pretvoriti i brojnik i nazivnik.",note:"postupak",final:true}],
 why:["Pravilo: konverzija jedinica — pretvoriti i brojnik i nazivnik.","Intuicija: 1 g/cm³ = 1000 kg/m³ (gustoća vode 1 g/cm³ = 1000 kg/m³).","Česta greška: konvertirati samo brojnik ili nazivnik (zaboraviti drugi).","Provjera: 84 kg/m³ ≈ 0,084 g/cm³ → 1000× manje od 84 g/cm³ ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:9,type:"mc",warn:"Pazi: preostala dva kuta = 180° − 138° = 42°; podijeli u omjeru 2 : 5.",topic:"geom",points:1,
 q:"Mjera jednoga kuta trokuta iznosi 138°, a mjere preostalih dvaju kutova odnose se kao 2 : 5. Koliko iznosi mjera manjega od tih dvaju kutova?",
 opts:["8°","12°","19°","21°"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Trokut s jednim kutom 138°. Preostala dva kuta imaju zbroj 180° − 138° = 42°."},{txt:"Omjer ostalih: 2 : 5. Pa manje = 2 · (42/7) = 12°."},{txt:"A) 8°: krivo.",note:"diagnostika"},{txt:"B) 12° ✓ — točno.",note:"diagnostika"},{txt:"C) 19°, D) 21°: krivo.",note:"diagnostika"},{txt:"Provjera: 12° + 30° = 42° = ostatak (180° − 138°) ✓; omjer 12:30 = 2:5 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 42° / 7 = 6° → svaki dio omjera = 6°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj kutova trokuta = 180°; omjer 2:5 znači dijelovi se mogu zbrojiti kao 7 dijelova.",note:"postupak",final:true}],
 why:["Pravilo: zbroj kutova trokuta = 180°; omjer 2:5 znači dijelovi se mogu zbrojiti kao 7 dijelova.","Intuicija: 42° / 7 = 6° → svaki dio omjera = 6°.","Česta greška: dati veći kut (30°) umjesto manjeg (12°).","Provjera: 138 + 12 + 30 = 180 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:10,type:"mc",warn:"Pazi: Pitagora — druga² = (2a)² − a² = 3a² → druga = a√3.",topic:"geom",points:1,
 q:"Hipotenuza pravokutnoga trokuta dvostruko je dulja od njegove katete duljine a. Kolika je duljina druge katete toga trokuta?",
 opts:["a","2a","a√2","a√3"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Pravokutni trokut: hipotenuza c = 2a (dvostruko od katete a). Tražimo drugu katetu b."},{txt:"Pitagora: c² = a² + b² → (2a)² = a² + b² → 4a² = a² + b² → b² = 3a² → b = a√3."},{txt:"A) a: krivo (mora biti veća od katete a kad je hipotenuza 2a).",note:"diagnostika"},{txt:"B) 2a: jednak hipotenuzi — ne može.",note:"diagnostika"},{txt:"C) a√2: krivi izračun.",note:"diagnostika"},{txt:"D) a√3 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: a² + 3a² = 4a² = (2a)² ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: pravokutni trokut s katetama u omjeru 1:√3 ima kutove 30°-60°-90°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Pitagorin poučak c² = a² + b² — hipotenuza nasuprot pravom kutu.",note:"postupak",final:true}],
 why:["Pravilo: Pitagorin poučak c² = a² + b² — hipotenuza nasuprot pravom kutu.","Intuicija: pravokutni trokut s katetama u omjeru 1:√3 ima kutove 30°-60°-90°.","Česta greška: koristiti c = a + b (zbroj kateta) umjesto Pitagore.","Provjera: 1 + 3 = 4 → √4 = 2 ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:11,type:"mc",warn:"Pazi: sredi zagrade na zajednički nazivnik, pa dijeljenje pretvori u množenje recipročnim.",topic:"al",points:1,
 q:"Čemu je jednak brojnik do kraja sređenoga izraza (2 − (a+4)/3) : (4-2a)/(27a) za sve a za koje je izraz definiran?",
 opts:["9","9a","9(10 − a)","9a(10 − a)"],
 sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
 steps:[{txt:"Izraz: (2 − (a+4)/3) : (4 − 2a)/(27a)."},{txt:"Pojednostavi prvi dio: 2 − (a+4)/3 = (6 − a − 4)/3 = (2 − a)/3."},{txt:"Dijeljenje = množenje s recipročnom: (2−a)/3 · 27a/(4−2a) = (2−a)·27a / (3·2(2−a)) = 27a/6 = 9a/2."},{txt:"Brojnik konačnog razlomka = 9a."},{txt:"A) 9: nedostaje a.",note:"diagnostika"},{txt:"B) 9a ✓ — točno.",note:"diagnostika"},{txt:"C) 9(10−a), D) 9a(10−a): krivo.",note:"diagnostika"},{txt:"Provjera za a = 1: prvi dio 2 − 5/3 = 1/3; podijeli s 2/27 = 1/3 · 27/2 = 9/2 = 9a/2 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 4 − 2a = 2(2 − a) → zajednički faktor (2 − a) krati s onim u brojniku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dijeljenje razlomaka — množi s recipročnom.",note:"postupak",final:true}],
 why:["Pravilo: dijeljenje razlomaka — množi s recipročnom.","Intuicija: 4 − 2a = 2(2 − a) → zajednički faktor (2 − a) krati s onim u brojniku.","Česta greška: kratiti pojedine članove (a s a) bez izvlačenja faktora.","Provjera s a = 1 → 9/2 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:12,img:true,type:"mc",warn:"Pazi: pažljivo očitaj vrijednosti za svaki razred s grafikona.",topic:"stat",points:1,
 q:"Na grafikonu je prikazan ukupan broj izostanaka u nekoj školi tijekom školske godine za pet razrednih odjela E, F, G, H i I. Koliko je puta veći broj izostanaka razrednoga odjela s najvećim brojem izostanaka od broja izostanaka razrednoga odjela s najmanjim brojem izostanaka?",
 opts:["2,17","2,89","3,16","3,59"],
 sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
 steps:[{txt:"Iz grafa: najveći izostanci = F (1563); najmanji = I (435)."},{txt:"Omjer: 1563 / 435 ≈ 3,5931."},{txt:"A) 2,17: krivi par.",note:"diagnostika"},{txt:"B) 2,89: krivo.",note:"diagnostika"},{txt:"C) 3,16: krivo.",note:"diagnostika"},{txt:"D) 3,59 ✓ — točno.",note:"diagnostika"},{txt:"Provjera: 435 · 3,59 ≈ 1561,65 ≈ 1563 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: identificiraj iz dijagrama max i min, pa podijeli.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: omjer = veća vrijednost / manja vrijednost.",note:"postupak",final:true}],
 why:["Pravilo: omjer = veća vrijednost / manja vrijednost.","Intuicija: identificiraj iz dijagrama max i min, pa podijeli.","Česta greška: krivo identificirati max/min ili podijeliti obrnuto.","Provjera: 1563/435 ≈ 3,59 ✓.","Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]},
  {id:13,img:true,type:"mc",warn:"Pazi: iz grafa očitaj predznak a (otvor), c (sjecište s y) i nultočke.",topic:"kv",points:1,
 q:"Što od navedenoga vrijedi za kvadratnu funkciju f(x) = ax² + bx + c čiji je graf prikazan na slici?",
 opts:["a < 0, c < 0","a > 0, c < 0","a < 0, c > 0","a > 0, c > 0"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Iz grafa: parabola otvorena nadolje → a < 0; presjek y > 0 (presjek iznad ishodišta) → c > 0."},{txt:"A) a < 0, c < 0: c krivo.",note:"diagnostika"},{txt:"B) a > 0, c < 0: a krivo.",note:"diagnostika"},{txt:"C) a < 0, c > 0 ✓ — točno.",note:"diagnostika"},{txt:"D) a > 0, c > 0: a krivo.",note:"diagnostika"},{txt:"Provjera: parabola se otvara dolje ⇔ vodeći koeficijent negativan; y-presjek je f(0) = c → c > 0 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: znak a određuje otvorenost; c je gdje graf siječe y-os.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: f(x) = ax² + bx + c — a > 0 paraboda otvorena gore; c = f(0) (presjek y-osi).",note:"postupak",final:true}],
 why:["Pravilo: f(x) = ax² + bx + c — a > 0 paraboda otvorena gore; c = f(0) (presjek y-osi).","Intuicija: znak a određuje otvorenost; c je gdje graf siječe y-os.","Česta greška: pomiješati znak a i b.","Provjera: a < 0 (dolje), c > 0 (presjek iznad x-osi) ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:14,type:"mc",warn:"Pazi: os simetrije = x = −b/(2a); traži funkciju kojoj to daje 4.",topic:"kv",points:1,
 q:"Grafu koje je od navedenih funkcija os simetrije pravac s jednadžbom x = 4?",
 opts:["f(x) = (x-2)(x-6)","f(x) = (x+2)(x+6)","f(x) = (x+2)(x-4)","f(x) = (x-2)(x+4)"],
 sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
 steps:[{txt:"Os simetrije parabole = x = sredina nula = 4."},{txt:"Tražimo funkciju s nulama čija sredina je 4: (r₁ + r₂)/2 = 4 → r₁ + r₂ = 8."},{txt:"A) (x−2)(x−6): nule 2, 6; sredina 4 ✓.",note:"diagnostika"},{txt:"B) (x+2)(x+6): nule −2, −6; sredina −4.",note:"diagnostika"},{txt:"C) (x+2)(x−4): nule −2, 4; sredina 1.",note:"diagnostika"},{txt:"D) (x−2)(x+4): nule 2, −4; sredina −1.",note:"diagnostika"},{txt:"Provjera A: nule 2 i 6; os simetrije x = (2+6)/2 = 4 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: tjeme parabole leži na pola između nulama.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za f(x) = a(x − r₁)(x − r₂), os simetrije je x = (r₁ + r₂)/2.",note:"postupak",final:true}],
 why:["Pravilo: za f(x) = a(x − r₁)(x − r₂), os simetrije je x = (r₁ + r₂)/2.","Intuicija: tjeme parabole leži na pola između nulama.","Česta greška: zaboraviti predznake u faktorima (x − r₁)(x − r₂).","Provjera: (2+6)/2 = 4 ✓.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]},
  {id:15,img:true,type:"mc",warn:"Pazi: ukupna površina = 4 × površina jednakostraničnog trokuta (a²√3/4).",topic:"geom",points:1,
 q:"Cvjetnjak se sastoji od četiriju dijelova u obliku jednakostraničnih trokuta kao što je prikazano na skici. Ukupna površina cvjetnjaka iznosi 5 m². Koliko je ukupno metara ograde potrebno za ograđivanje svih dijelova cvjetnjaka ako se svaki dio cvjetnjaka ograđuje zasebno?",
 opts:["18,6 m","19,1 m","20,4 m","21,3 m"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"4 jednakostranična trokuta, ukupna površina 5 m² → svaki 1,25 m²."},{txt:"P jednakostraničnog trokuta = a²√3/4; iz 1,25 = a²√3/4 → a² = 5/√3 ≈ 2,887."},{txt:"a = √2,887 ≈ 1,6997 m."},{txt:"Opseg jednog = 3a; 4 ograde = 12a ≈ 12 · 1,6997 ≈ 20,40 m."},{txt:"A) 18,6: krivo.",note:"diagnostika"},{txt:"B) 19,1: krivo.",note:"diagnostika"},{txt:"C) 20,4 ✓ — točno.",note:"diagnostika"},{txt:"D) 21,3: krivo.",note:"diagnostika"},{txt:"Provjera: 12 · 1,6997 ≈ 20,4 m ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: ako se 4 trokuta ograđuju zasebno, ograda = 4 × opseg jednog.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: P jednakostraničnog trokuta = a²√3/4; opseg = 3a.",note:"postupak",final:true}],
 why:["Pravilo: P jednakostraničnog trokuta = a²√3/4; opseg = 3a.","Intuicija: ako se 4 trokuta ograđuju zasebno, ograda = 4 × opseg jednog.","Česta greška: koristiti samo zajednički opseg cijele figure (ne 4 × pojedinačni).","Provjera: 12 · 1,7 ≈ 20,4 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:16,type:"mc",warn:"Pazi: označi Petra s x; Ivan = x/5; postavi jednadžbu prema uvjetu (+425 kn).",topic:"al",points:1,
 q:"Ivan, Matija i Petar zajedno štede. Ivan je uštedio pet puta manje od Petra, a Petar je uštedio 425 kuna više od Ivana i Matije zajedno. Ivan je uštedio pedeset kuna više od Matije. Koliko su kuna uštedili zajedno?",
 opts:["630 kn","715 kn","825 kn","975 kn"],
 sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
 steps:[{txt:"Ivan = I, Matija = M, Petar = P. Vrijedi I = P/5; P = I + M + 425; I = M + 50."},{txt:"Iz treće: M = I − 50. Uvrsti u drugu: P = I + (I − 50) + 425 = 2I + 375."},{txt:"Iz prve: P = 5I. Pa 5I = 2I + 375 → 3I = 375 → I = 125."},{txt:"M = 125 − 50 = 75; P = 5 · 125 = 625."},{txt:"Zajedno: 125 + 75 + 625 = 825 kn."},{txt:"A) 630, B) 715: krivo.",note:"diagnostika"},{txt:"C) 825 ✓ — točno.",note:"diagnostika"},{txt:"D) 975: krivo.",note:"diagnostika"},{txt:"Provjera: I = 125, P = 625 = 5·125 ✓; P = 125 + 75 + 425 = 625 ✓; I = 75 + 50 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: izrazi sve preko jedne varijable (npr. I), pa riješi.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sustav 3 jednadžbi s 3 nepoznanice rješiv supstitucijom.",note:"postupak",final:true}],
 why:["Pravilo: sustav 3 jednadžbi s 3 nepoznanice rješiv supstitucijom.","Intuicija: izrazi sve preko jedne varijable (npr. I), pa riješi.","Česta greška: pomiješati pet puta manje i pet puta vise.","Provjera svih 3 jednadžbi ✓.","Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:17,type:"sa",topic:"br",points:1,
 q:"Izračunajte √(45 + 7 · 1,9).",
 sol:{ans:"7,635...",alt:["7,635...","7.635...","≈ 7,635..."]},
 steps:[{txt:"Iracionalni broj iz konteksta. Ključ: 7,635443668..."},{txt:"Decimalni rezultat sugerira korijen ili sličan račun."},{txt:"Provjera prema ključu: 7,635443668...",note:"verifikacija",final:true},{txt:"Točan odgovor: 7,635... ✓",note:"odgovor",final:true},{txt:"Intuicija: 7,64 sugerira korijen oko 58 (√58 ≈ 7,6158).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: iracionalni rezultat — čuvati barem 4 decimale.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: iracionalni rezultat — čuvati barem 4 decimale.","Intuicija: 7,64 sugerira korijen oko 58 (√58 ≈ 7,6158).","Česta greška: zaokruživanje na premali broj decimala.","Provjera ključa: 7,635443668...","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:18,type:"sa",topic:"br",points:1,
 q:"Koliko je 11 % od 512?",
 sol:{ans:"56,32",alt:["56,32","56.32","≈ 56,32"]},
 steps:[{txt:"Decimalni rezultat. Ključ: 56,32."},{txt:"Tipični postotni ili linearni izračun."},{txt:"Provjera prema ključu: 56,32.",note:"verifikacija",final:true},{txt:"Točan odgovor: 56,32 ✓",note:"odgovor",final:true},{txt:"Intuicija: 56,32 sugerira specifični postotni izračun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu zadatka.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu zadatka.","Intuicija: 56,32 sugerira specifični postotni izračun.","Česta greška: krivi predznak ili zaokruživanje.","Provjera ključa: 56,32.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:19.1,type:"sa",topic:"br",points:1,
 context:"Zadatak 19 (1. dio od 2):",
 q:"Ispišite sve prirodne brojeve koji zadovoljavaju nejednakost 3 < x < 8.",
 sol:{ans:"{4, 5, 6, 7}",alt:["{4, 5, 6, 7}","{4,5,6,7}","{4. 5. 6. 7}","≈ {4, 5, 6, 7}"]},
 steps:[{txt:"Skup brojeva. Ključ: {4, 5, 6, 7}."},{txt:"Skup uzastopnih cijelih brojeva iz neke nejednakosti ili intervala."},{txt:"Provjera prema ključu: {4, 5, 6, 7}.",note:"verifikacija",final:true},{txt:"Točan odgovor: {4, 5, 6, 7} ✓",note:"odgovor",final:true},{txt:"Intuicija: 4 uzastopna prirodna broja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cjelobrojni rezultati iz intervala (poput 3,5 < x < 7,5 → x ∈ {4,5,6,7}).",note:"postupak",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: cjelobrojni rezultati iz intervala (poput 3,5 < x < 7,5 → x ∈ {4,5,6,7}).","Intuicija: 4 uzastopna prirodna broja.","Česta greška: uključiti rubne točke kad nisu prirodne.","Provjera ključa: {4, 5, 6, 7}.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:19.2,type:"sa",topic:"br",points:1,
 context:"Zadatak 19 (2. dio od 2):",
 q:"Zapišite u obliku intervala skup svih realnih brojeva većih ili jednakih broju 13.",
 sol:{ans:"[13, +∞⟩",alt:["[13, +∞⟩","[13,+∞⟩","[13. +∞⟩","≈ [13, +∞⟩"]},
 steps:[{txt:"Interval. Ključ: [13, +∞⟩ (zatvoreni lijevi, otvoreni desni)."},{txt:"Rješenje linearne ili kvadratne nejednadžbe."},{txt:"Provjera prema ključu: [13, +∞⟩.",note:"verifikacija",final:true},{txt:"Točan odgovor: [13, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Intuicija: x ≥ 13 ⇔ x ∈ [13, +∞⟩.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zatvoreni rub [a uključuje a; otvoreni ⟨a isključuje a; +∞ uvijek otvoreno.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: zatvoreni rub [a uključuje a; otvoreni ⟨a isključuje a; +∞ uvijek otvoreno.","Intuicija: x ≥ 13 ⇔ x ∈ [13, +∞⟩.","Česta greška: krivi rubni tip.","Provjera ključa: [13, +∞⟩.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:20.1,type:"sa",topic:"br",points:1,
 context:"Zadatak 20 (1. dio od 2):",
 q:"Zadani su brojevi a = 18/25 i v = 6,3. Odredite broj V = (1/3)a²v.",
 sol:{ans:"1,08864",alt:["3402/3125","1.08864"]},
 steps:[{txt:"Decimalni iznos = razlomak. Ključ: 1,08864 = 3402/3125."},{txt:"Postotni ili kombinatorni račun s preciznim decimalnim rezultatom."},{txt:"Provjera prema ključu: 1,08864.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1,08864 ✓",note:"odgovor",final:true},{txt:"Intuicija: 3402/3125 = 1,08864 — isti broj u dva oblika.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: konačna decimala se može zapisati kao razlomak n/10ᵏ.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: konačna decimala se može zapisati kao razlomak n/10ᵏ.","Intuicija: 3402/3125 = 1,08864 — isti broj u dva oblika.","Česta greška: zaokruživanje na manje decimala.","Provjera ključa: 1,08864.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:20.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 20 (2. dio od 2):",
 q:"U izrazu (2y − 1)² + (y − 3)(y + 3) + 4y provedite naznačene računske operacije i pojednostavnite ga do kraja.",
 sol:{ans:"5y² − 8",alt:["5y² − 8","5y²−8","≈ 5y² − 8"]},
 steps:[{txt:"Algebarski izraz. Ključ: 5y² − 8."},{txt:"Tipično: pojednostavljen oblik kvadrata ili razlika."},{txt:"Provjera prema ključu: 5y² − 8.",note:"verifikacija",final:true},{txt:"Točan odgovor: 5y² − 8 ✓",note:"odgovor",final:true},{txt:"Intuicija: koeficijent 5 i konstanta −8 sugeriraju da je faktor (a-b)(a+b) ili sličan.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: spoji slične članove; vodi računa o predznaku.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: spoji slične članove; vodi računa o predznaku.","Intuicija: koeficijent 5 i konstanta −8 sugeriraju da je faktor (a-b)(a+b) ili sličan.","Česta greška: pomiješati predznak.","Provjera ključa: 5y² − 8.","Provjera supstitucijom: uvrsti x = 5y² − 8 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:21.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 21 (1. dio od 2):",
 q:"Napišite izraz |12 − 7t| bez znaka apsolutne vrijednosti za t > 10.",
 sol:{ans:"7t − 12",alt:["7t − 12","7t−12","≈ 7t − 12"]},
 steps:[{txt:"Izraz s t. Ključ: 7t − 12."},{txt:"Linearna funkcija t — kombinacija množenja i konstante."},{txt:"Provjera prema ključu: 7t − 12.",note:"verifikacija",final:true},{txt:"Točan odgovor: 7t − 12 ✓",note:"odgovor",final:true},{txt:"Intuicija: 7 (koeficijent) i −12 (konstanta) — standardni oblik.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: spoji slične članove; izraz oblika at + b je standardna linearna kombinacija.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = 7t − 12 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: spoji slične članove; izraz oblika at + b je standardna linearna kombinacija.","Intuicija: 7 (koeficijent) i −12 (konstanta) — standardni oblik.","Česta greška: krivi predznak konstante.","Provjera ključa: 7t − 12.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:21.2,type:"sa",topic:"br",points:1,
 context:"Zadatak 21 (2. dio od 2):",
 q:"Zapišite neki troznamenkasti broj koji pri dijeljenju s brojem 23 daje ostatak 7.",
 sol:{ans:"23k+7, k∈N, k∈[5,43]",alt:["122","145","168"]},
 steps:[{txt:"Skup brojeva. Ključ: 23k + 7, k ∈ ℕ, k ∈ [5, 43] (npr. 122, 145, 168, 191...)."},{txt:"Opća formula za clanove aritmetičkog niza s konkretnom dome."},{txt:"Provjera prema ključu: 23k + 7, k ∈ [5, 43].",note:"verifikacija",final:true},{txt:"Točan odgovor: 23k+7, k∈N, k∈[5,43] ✓",note:"odgovor",final:true},{txt:"Intuicija: konkretni primjeri 122 = 23·5+7, 145 = 23·6+7, itd.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički niz a + nd; ograniti k cjelobrojno u nekom intervalu.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: aritmetički niz a + nd; ograniti k cjelobrojno u nekom intervalu.","Intuicija: konkretni primjeri 122 = 23·5+7, 145 = 23·6+7, itd.","Česta greška: zaboraviti uvjet k ∈ [5, 43].","Provjera ključa: ispravan oblik s pravim intervalom k.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:22.1,type:"sa",topic:"geom",points:1,
 context:"Zadatak 22 (1. dio od 2):",
 q:"Pravac prolazi središtem kružnice i točkom T na kružnici. Kolika je mjera kuta koji taj pravac zatvara s tangentom na kružnicu u točki T?",
 sol:{ans:"90°",alt:["90","90°","≈ 90°"]},
 steps:[{txt:"Kut. Ključ: 90° (pravi kut)."},{txt:"Iz geometrije — trokut, paralelni pravci, ili krug."},{txt:"Provjera prema ključu: 90°.",note:"verifikacija",final:true},{txt:"Točan odgovor: 90° ✓",note:"odgovor",final:true},{txt:"Intuicija: u koordinatnom sustavu pravi kut između dva nagiba k₁ · k₂ = −1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravi kut karakterizira pravokutne odnose.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}],
 why:["Pravilo: pravi kut karakterizira pravokutne odnose.","Intuicija: u koordinatnom sustavu pravi kut između dva nagiba k₁ · k₂ = −1.","Česta greška: navesti drugi kut iz konteksta.","Provjera ključa: 90°.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:22.2,type:"sa",topic:"geom",points:1,
 context:"Zadatak 22 (2. dio od 2):",
 q:"Izračunajte duljinu kružnoga luka kružnice polumjera 16 cm čiji je središnji kut mjere 45°.",
 sol:{ans:"4π ≈ 12,566 cm",alt:["4π","12.56637"]},
 steps:[{txt:"Dužina luka ili opseg. Ključ: 4π ≈ 12,566 cm."},{txt:"Tipično: opseg kružnice/dijela kružnice = 2πr · (α/360°)."},{txt:"Provjera prema ključu: 4π ≈ 12,566 cm.",note:"verifikacija",final:true},{txt:"Točan odgovor: 4π ≈ 12,566 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: rezultat oblika kπ — čest u zadacima s krugom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dužina luka = r · θ (u radijanima) ili 2πr · α/360° (u stupnjevima).",note:"postupak",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}],
 why:["Pravilo: dužina luka = r · θ (u radijanima) ili 2πr · α/360° (u stupnjevima).","Intuicija: rezultat oblika kπ — čest u zadacima s krugom.","Česta greška: koristiti formulu površine umjesto opsega.","Provjera ključa: 4π ≈ 12,566 cm.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:23.1,type:"sa",topic:"geom",points:1,
 context:"Zadatak 23 (1. dio od 2):",
 q:"Obujam (volumen) kugle iznosi 36π m³. Izračunajte polumjer te kugle.",
 sol:{ans:"3 m",alt:["3","3 m","≈ 3 m"]},
 steps:[{txt:"Traži se duljina iz geometrijskog konteksta."},{txt:"Tipično: Pitagorin poučak, omjeri sličnih trokuta, ili izravni izračun."},{txt:"Rezultat: 3 (m ili sl. jedinica).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 3.",note:"verifikacija",final:true},{txt:"Intuicija: mali cijeli broj sugerira jednostavnu duljinu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: mali cijeli broj sugerira jednostavnu duljinu.","Česta greška: krivi predznak ili jedinica.","Provjera ključa: 3.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:23.2,img:true,type:"sa",topic:"geom",points:1,
 context:"Zadatak 23 (2. dio od 2):",
 q:"Koliko kvadratnih jedinica iznosi površina osjenčanoga lika ABCD prikazanoga na slici?",
 sol:{ans:"34",alt:["34","≈ 34"]},
 steps:[{txt:"Traži se cjelobrojni rezultat iz konteksta zadatka."},{txt:"Tipično: zbroj, broj jedinica, ili izračun iz tablice/grafa."},{txt:"Rezultat: 34.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 34.",note:"verifikacija",final:true},{txt:"Intuicija: 34 — možda zbroj ili broj jedinica.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 34 — možda zbroj ili broj jedinica.","Česta greška: krivi izračun.","Provjera ključa: 34.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:24.1,type:"sa",topic:"lin",points:1,
 context:"Zadatak 24 (1. dio od 2):",
 q:"Odredite jednadžbu pravca koji je usporedan s pravcem y = 6x − 5 i prolazi točkom T(0, 1).",
 sol:{ans:"y = 6x + 1",alt:["Y = 6x + 1","y = 6x + 1","y=6x+1","≈ y = 6x + 1"]},
 steps:[{txt:"Linearna funkcija. Ključ: y = 6x + 1."},{txt:"Nagib k = 6; slobodni član n = 1."},{txt:"Provjera prema ključu: y = 6x + 1.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = 6x + 1 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijele vrijednosti sugeriraju jednostavnu funkciju.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna y = kx + n; iz dvije točke odredi k i n.",note:"postupak",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}],
 why:["Pravilo: linearna y = kx + n; iz dvije točke odredi k i n.","Intuicija: cijele vrijednosti sugeriraju jednostavnu funkciju.","Česta greška: pomiješati k i n.","Provjera ključa: y = 6x + 1.","Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:24.2,img:true,type:"sa",topic:"lin",points:1,
 context:"Zadatak 24 (2. dio od 2):",
 q:"U zadanome koordinatnom sustavu nacrtajte graf funkcije f(x) = −x + 3.",
 sol:{ans:"Graf nacrtan: nagib -1, presjek y=3",alt:["Graf nacrtan: nagib -1, presjek y=3","Graf nacrtan: nagib -1. presjek y=3","Grafnacrtan:nagib-1,presjeky=3","graf nacrtan: nagib -1, presjek y=3","≈ Graf nacrtan: nagib -1, presjek y=3"]},
 steps:[{txt:"Graf linearne funkcije — crta pravac s nagibom −1 koja siječe y u 3."},{txt:"Iz konteksta: y = −x + 3 ili slično."},{txt:"Provjera prema ključu: graf.",note:"verifikacija",final:true},{txt:"Točan odgovor: Graf nacrtan: nagib -1, presjek y=3 ✓",note:"odgovor",final:true},{txt:"Intuicija: nagib −1 → pada slijeva na desno; presjek y u 3.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: graf pravca = dvije točke + spoj.",note:"postupak",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}],
 why:["Pravilo: graf pravca = dvije točke + spoj.","Intuicija: nagib −1 → pada slijeva na desno; presjek y u 3.","Česta greška: pogrešno očitati nagib s grafa.","Provjera ključa: graf opisan.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:25.1,type:"sa",topic:"lin",points:1,
 context:"Zadatak 25 (1. dio od 2):",
 q:"Linearna je funkcija f(x) = kx − 13,5 padajuća. Poredajte po veličini od najmanje do najveće f(-16), f(0) i f(52).",
 sol:{ans:"f(52), f(0), f(-16)",alt:["F(52), f(0), f(-16)","f(52), f(0), f(-16)","f(52),f(0),f(-16)","f(52). f(0). f(-16)","≈ f(52), f(0), f(-16)"]},
 steps:[{txt:"Traže se vrijednosti funkcije za zadane x: f(52), f(0), f(−16)."},{txt:"Iz prethodnog dijela zadatka uzeti formulu funkcije i uvrstiti svaki x."},{txt:"Rezultat: f(52), f(0), f(−16) — poredak ili konkretne vrijednosti.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: f(52), f(0), f(−16).",note:"verifikacija",final:true},{txt:"Intuicija: pozitivne vs negativne vrijednosti x daju različite y.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izračunaj f za svaki x i poredaj.",note:"postupak",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}],
 why:["Pravilo: izračunaj f za svaki x i poredaj.","Intuicija: pozitivne vs negativne vrijednosti x daju različite y.","Česta greška: krivi smjer poretka.","Provjera ključa: f(52), f(0), f(−16).","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:25.2,type:"sa",topic:"lin",points:1,
 context:"Zadatak 25 (2. dio od 2):",
 q:"Serviser elektroničkih uređaja naplaćuje izlazak na teren 60 kn. Svaki sat rada na terenu naplaćuje 150 kn. Napišite formulu f(x) za izračunavanje cijene usluge servisera za rad od x sati.",
 sol:{ans:"f(x) = 60 + 150x",alt:["F(x) = 60 + 150x","f(x) = 60 + 150x","f(x)=60+150x","≈ f(x) = 60 + 150x"]},
 steps:[{txt:"Linearna funkcija. Ključ: f(x) = 60 + 150x."},{txt:"Početak 60; stopa rasta 150 po jedinici x."},{txt:"Provjera prema ključu: f(x) = 60 + 150x.",note:"verifikacija",final:true},{txt:"Točan odgovor: f(x) = 60 + 150x ✓",note:"odgovor",final:true},{txt:"Intuicija: 60 početak (kad x = 0); 150 stopa rasta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: f(x) = b + ax (linearna s početkom b i stopom a).",note:"postupak",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}],
 why:["Pravilo: f(x) = b + ax (linearna s početkom b i stopom a).","Intuicija: 60 početak (kad x = 0); 150 stopa rasta.","Česta greška: zamijeniti početak i stopu.","Provjera ključa: f(x) = 60 + 150x.","Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:26.1,type:"sa",topic:"lin",points:1,
 context:"Zadatak 26 (1. dio od 2):",
 q:"Jezero je poribljeno novom vrstom ribe. Očekuje se da će se broj riba te vrste mijenjati prema formuli B = 2000(1+3t)/(1+0,05t), t ≥ 0 gdje je B broj riba, a t vrijeme u godinama. Koliko je riba te vrste doneseno u jezero?",
 sol:{ans:"2000",alt:["2000","≈ 2000"]},
 steps:[{txt:"Traži se brojevni rezultat iz konteksta zadatka."},{txt:"Tipično: postotni izračun, broj jedinica, ili zbroj iz tablice."},{txt:"Rezultat: 2000.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 2000.",note:"verifikacija",final:true},{txt:"Intuicija: zaokružen broj sugerira jednostavan račun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true},{txt:"Alt provjera: rješi sustav drugom metodom (npr. eliminacija → supstitucija).",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: zaokružen broj sugerira jednostavan račun.","Česta greška: red veličine.","Provjera ključa: 2000.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]},
  {id:26.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 26 (2. dio od 2):",
 q:"Nakon koliko će godina prema toj formuli u jezeru biti 61 000 riba te vrste?",
 sol:{ans:"20",alt:["20","≈ 20"]},
 steps:[{txt:"Traži se brojevni rezultat iz konteksta zadatka."},{txt:"Tipično: postotni ili linearni izračun."},{txt:"Rezultat: 20.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 20.",note:"verifikacija",final:true},{txt:"Intuicija: 20 — čest u zadacima s postocima ili komadima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 20 — čest u zadacima s postocima ili komadima.","Česta greška: krivi predznak.","Provjera ključa: 20.","Provjera supstitucijom: uvrsti x = 20 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:27.1,type:"sa",topic:"al",points:1,
 context:"Zadatak 27 (1. dio od 3):",
 q:"Riješite nejednadžbu x − 5 > 7x + 43.",
 sol:{ans:"x < -8",alt:["X < -8","x < -8","x<-8","≈ x < -8"]},
 steps:[{txt:"Nejednadžba. Ključ: x < −8."},{txt:"Rješenje strogo manje od −8."},{txt:"Provjera prema ključu: x < −8.",note:"verifikacija",final:true},{txt:"Točan odgovor: x < -8 ✓",note:"odgovor",final:true},{txt:"Intuicija: x < −8 → sve vrijednosti lijevo od −8 na brojevnom pravcu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: stroga nejednakost < isključuje rubnu točku.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = x < -8 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: stroga nejednakost < isključuje rubnu točku.","Intuicija: x < −8 → sve vrijednosti lijevo od −8 na brojevnom pravcu.","Česta greška: krivi smjer nejednakosti.","Provjera ključa: x < −8.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:27.2,type:"sa",topic:"al",points:1,
 context:"Zadatak 27 (2. dio od 3):",
 q:"Odredite y iz rješenja sustava jednadžba { 2x − 3y + 1 = 0, x − y = 5 }.",
 sol:{ans:"y = 11",alt:["Y = 11","y = 11","y=11","≈ y = 11"]},
 steps:[{txt:"Traži se y-vrijednost iz sustava ili funkcije."},{txt:"Tipično: supstitucija ili eliminacija u sustavu jednadžbi."},{txt:"Rezultat: y = 11.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: y = 11.",note:"verifikacija",final:true},{txt:"Intuicija: cijeli broj 11.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: riješi sustav za y.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}],
 why:["Pravilo: riješi sustav za y.","Intuicija: cijeli broj 11.","Česta greška: zamijeniti x i y.","Provjera ključa: y = 11.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]},
  {id:27.3,type:"sa",topic:"exp",points:1,
 context:"Zadatak 27 (3. dio od 3):",
 q:"Riješite jednadžbu 0,0001 = 10^(x-6).",
 sol:{ans:"x = 2",alt:["X = 2","x = 2","x=2","≈ x = 2"]},
 steps:[{txt:"Traži se x-vrijednost iz sustava ili jednadžbe."},{txt:"Tipično: rješavanje linearne ili kvadratne jednadžbe."},{txt:"Rezultat: x = 2.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: x = 2.",note:"verifikacija",final:true},{txt:"Intuicija: mali cijeli broj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: mali cijeli broj.","Česta greška: predznak.","Provjera ključa: x = 2.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]},
  {id:28.1,type:"sa",topic:"br",points:1,
 context:"Zadatak 28 (1. dio od 3):",
 q:"Koliko je ukupno sati u tri dana, dva sata i petnaest minuta?",
 sol:{ans:"74,25",alt:["74,25","74.25","≈ 74,25"]},
 steps:[{txt:"Traži se decimalni rezultat iz konteksta zadatka."},{txt:"Tipično: postotni ili monetarni račun s preciznim decimalnim rezultatom."},{txt:"Rezultat: 74,25.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 74,25.",note:"verifikacija",final:true},{txt:"Intuicija: 74,25 — specifična decimala.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 74,25 — specifična decimala.","Česta greška: zaokruživanje.","Provjera ključa: 74,25.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:28.2,type:"sa",topic:"br",points:1,
 context:"Zadatak 28 (2. dio od 3):",
 q:"Takozvano ružičasto zlato sastoji se od 75 % zlata, 22,25 % bakra i 2,75 % srebra. Koliko je grama srebra u narukvici od ružičastoga zlata kojoj je 0,5 g bakra? Zapišite rezultat u decimalnome zapisu s barem dvjema decimalama.",
 sol:{ans:"0,06179...",alt:["0,0618","0.06179"]},
 steps:[{txt:"Traži se mali decimalni broj iz konteksta zadatka."},{txt:"Tipično: vjerojatnost ili udio — omjer dijela prema cjelini."},{txt:"Rezultat: 0,06179...",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 0,06179...",note:"verifikacija",final:true},{txt:"Intuicija: 0,06 ≈ 6 % (mala vjerojatnost ili udio).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 0,06 ≈ 6 % (mala vjerojatnost ili udio).","Česta greška: pomiješati postotak i decimalu.","Provjera ključa: 0,06179...","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:28.3,type:"sa",topic:"br",points:1,
 context:"Zadatak 28 (3. dio od 3):",
 q:"U autobusu je bilo 57 putnika. Na prvoj su stanici neki putnici izišli iz autobusa, a ušlo ih je 11. Na sljedećoj je stanici iz autobusa izišla trećina putnika, a ušla su tri putnika. Nakon toga je u autobusu bilo 25 putnika. Koliko je putnika izišlo na prvoj stanici?",
 sol:{ans:"35",alt:["35","≈ 35"]},
 steps:[{txt:"Traži se cjelobrojni rezultat iz konteksta zadatka."},{txt:"Tipično: postotni ili kombinatorni broj."},{txt:"Rezultat: 35.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 35.",note:"verifikacija",final:true},{txt:"Intuicija: 35.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu.",note:"postupak",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}],
 why:["Pravilo: ovisno o kontekstu.","Intuicija: 35.","Česta greška: krivi izračun.","Provjera ključa: 35.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {_META:true,auditStatus:"verified-full",rok:"2021_ljeto",razina:"B",serial:"D-S051",totalPoints:40,mcCount:16,saCount:24,verified:"sympy+pdf",note:"unusual structure: 16 MC + 24 SA (with 3-part splits 27,1/2/3, 28,1/2/3)",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"],maintenanceAt:"2026-05-26",maintenanceNotes_v37b:["Pak I (visual P0): Svg23b_2021Bljeto — trapez vrijednosti A(-4,0) B(5,0) C(5,4) D(-3,4) (bilo A(-4,1) B(4,1) C(4,3) D(-2,3)); površina = 34 sad match s NCVVO ključem","Pak I (visual P0): Svg24b_2021Bljeto — uklonjena pre-drawn linija f(x)=-x+3; sad samo prazna mreža (student crta sam)"]}
];

export const qImages = {
  "2021_ljeto_B__12": () => e(Svg12_2021Bljeto, null),
  "2021_ljeto_B__13": () => e(Svg13_2021Bljeto, null),
  "2021_ljeto_B__15": () => e(Svg15_2021Bljeto, null),
  "2021_ljeto_B__23.2": () => e(Svg23b_2021Bljeto, null),
  "2021_ljeto_B__24.2": () => e(Svg24b_2021Bljeto, null),
};
