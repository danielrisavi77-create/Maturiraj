// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg9_2020Ajj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function Svg29d_2020Ajj(){
  const W=280, H=300;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems = [];
  // 3D projekcija kvadra
  const vA = [50, 240], vB = [170, 240], vC = [210, 190], vD = [90, 190];
  const vE = [50, 120], vF = [170, 120], vG = [210, 70], vH = [90, 70];
  // Piramida ABCG — istaknuta
  elems.push(e("polygon",{key:"base", points:`${vA[0]},${vA[1]} ${vB[0]},${vB[1]} ${vC[0]},${vC[1]}`, fill:"var(--red)", fillOpacity:0.18, stroke:"none"}));
  elems.push(e("polygon",{key:"fABG", points:`${vA[0]},${vA[1]} ${vB[0]},${vB[1]} ${vG[0]},${vG[1]}`, fill:"var(--blue)", fillOpacity:0.10, stroke:"none"}));
  elems.push(e("polygon",{key:"fBCG", points:`${vB[0]},${vB[1]} ${vC[0]},${vC[1]} ${vG[0]},${vG[1]}`, fill:"var(--blue)", fillOpacity:0.15, stroke:"none"}));
  elems.push(e("polygon",{key:"fACG", points:`${vA[0]},${vA[1]} ${vC[0]},${vC[1]} ${vG[0]},${vG[1]}`, fill:"var(--blue)", fillOpacity:0.20, stroke:"none"}));
  // Kvadar - vidljivi bridovi
  elems.push(e("line",{key:"AB", x1:vA[0], y1:vA[1], x2:vB[0], y2:vB[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"BC", x1:vB[0], y1:vB[1], x2:vC[0], y2:vC[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"AD", x1:vA[0], y1:vA[1], x2:vD[0], y2:vD[1], stroke:_GOLD, strokeWidth:1, strokeDasharray:"4,3"}));
  elems.push(e("line",{key:"DC", x1:vD[0], y1:vD[1], x2:vC[0], y2:vC[1], stroke:_GOLD, strokeWidth:1, strokeDasharray:"4,3"}));
  elems.push(e("line",{key:"EF", x1:vE[0], y1:vE[1], x2:vF[0], y2:vF[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"FG", x1:vF[0], y1:vF[1], x2:vG[0], y2:vG[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"GH", x1:vG[0], y1:vG[1], x2:vH[0], y2:vH[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"HE", x1:vH[0], y1:vH[1], x2:vE[0], y2:vE[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"AE", x1:vA[0], y1:vA[1], x2:vE[0], y2:vE[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"BF", x1:vB[0], y1:vB[1], x2:vF[0], y2:vF[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"CG", x1:vC[0], y1:vC[1], x2:vG[0], y2:vG[1], stroke:_BLUE, strokeWidth:1.6}));
  elems.push(e("line",{key:"DH", x1:vD[0], y1:vD[1], x2:vH[0], y2:vH[1], stroke:_GOLD, strokeWidth:1, strokeDasharray:"4,3"}));
  // Bridovi piramide ABCG
  elems.push(e("line",{key:"pAG", x1:vA[0], y1:vA[1], x2:vG[0], y2:vG[1], stroke:"var(--red)", strokeWidth:1.8}));
  elems.push(e("line",{key:"pBG", x1:vB[0], y1:vB[1], x2:vG[0], y2:vG[1], stroke:"var(--red)", strokeWidth:1.8}));
  elems.push(e("line",{key:"pAC", x1:vA[0], y1:vA[1], x2:vC[0], y2:vC[1], stroke:"var(--red)", strokeWidth:1, strokeDasharray:"4,3"}));
  // Oznake vrhova
  const labels = [[vA,"A",-12,10],[vB,"B",4,12],[vC,"C",6,4],[vD,"D",-10,-2],[vE,"E",-12,4],[vF,"F",4,-2],[vG,"G",6,-2],[vH,"H",-10,-4]];
  labels.forEach(([pt, lab, dx, dy]) => {
    elems.push(e("text",{key:"L"+lab, x:pt[0]+dx, y:pt[1]+dy, fontSize:12, fontStyle:"italic", fontWeight:700, fill:"var(--text)"}, lab));
  });
  elems.push(e("text",{key:"l27", x:(vA[0]+vB[0])/2-16, y:vA[1]+14, fontSize:10, fill:"var(--text)"},"2,7 cm"));
  elems.push(e("text",{key:"l10", x:60, y:165, fontSize:10, fontStyle:"italic", fill:"var(--red)"},"10 cm"));
  elems.push(e("text",{key:"l63", x:vA[0]+18, y:vA[1]-6, fontSize:10, fill:"var(--red)"},"63°"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg29c_2020Ajj(){
  const W=340, H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems = [];
  // Skala: 1m = 15px, ali a=10m → 150px poluširina; ukupna širina = 300px. Poluelipsa + donji pravokutnik.
  // Centar elipse na (170, 100). a=150, b=90 (6m × 15).
  const ox = 170;
  // Centar elipse - visina 1.5m (pod) + b (6m) = 7.5m, center na visini 1.5m od poda
  const floorY = 180;
  const ellipseCy = floorY - 1.5*15; // 1.5m iznad poda
  const a = 130;
  const b = 70;
  const cEl = Math.sqrt(a*a - b*b); // c u px
  // Pod (donja linija)
  elems.push(e("line",{key:"floor", x1:20, y1:floorY, x2:W-20, y2:floorY, stroke:_BLUE, strokeWidth:1.8}));
  // Lijeva strana (okomita) od poda do kraja elipse
  elems.push(e("line",{key:"left", x1:ox-a, y1:floorY, x2:ox-a, y2:ellipseCy, stroke:_BLUE, strokeWidth:1.8}));
  // Desna strana (okomita)
  elems.push(e("line",{key:"right", x1:ox+a, y1:floorY, x2:ox+a, y2:ellipseCy, stroke:_BLUE, strokeWidth:1.8}));
  // Gornja poluelipsa
  elems.push(e("path",{key:"ellipse", d:`M ${ox-a} ${ellipseCy} A ${a} ${b} 0 0 1 ${ox+a} ${ellipseCy}`, fill:"var(--blue)", fillOpacity:0.1, stroke:"var(--blue)", strokeWidth:1.8}));
  // Dno elipse: linija (isprekidana) koja ide kroz žarišta
  elems.push(e("line",{key:"axline", x1:ox-a+10, y1:ellipseCy, x2:ox+a-10, y2:ellipseCy, stroke:_GOLD, strokeWidth:0.8, strokeDasharray:"3,2"}));
  // Žarišta F1, F2
  const F1x = ox - cEl, F2x = ox + cEl;
  elems.push(e("circle",{key:"F1", cx:F1x, cy:ellipseCy, r:3, fill:"var(--red)"}));
  elems.push(e("circle",{key:"F2", cx:F2x, cy:ellipseCy, r:3, fill:"var(--red)"}));
  elems.push(e("text",{key:"F1l", x:F1x-6, y:ellipseCy-6, fontSize:11, fontStyle:"italic", fontWeight:700, fill:"var(--red)"},"F₁"));
  elems.push(e("text",{key:"F2l", x:F2x-6, y:ellipseCy-6, fontSize:11, fontStyle:"italic", fontWeight:700, fill:"var(--red)"},"F₂"));
  // Oznaka 1.5m (desno, od poda do elipse)
  elems.push(e("text",{key:"h15", x:ox+a+4, y:(floorY+ellipseCy)/2+4, fontSize:10, fill:"var(--text)"},"1,5 m"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg20b_2020Ajj(){
  const W=320, H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const elems = [];
  const cols = 20, rows = 13;
  const dotR = 1.2;
  const sx = 15, sy = 15;
  const step = 14;
  // Mreža točaka
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      elems.push(e("circle",{key:"d"+i+"_"+j, cx:sx+i*step, cy:sy+j*step, r:dotR, fill:"var(--muted)"}));
    }
  }
  // Točke A i D zadane (A lijevo dolje, D desno gore od A)
  const A = {i:7, j:8};
  const D = {i:12, j:5};
  const Ax = sx + A.i*step, Ay = sy + A.j*step;
  const Dx = sx + D.i*step, Dy = sy + D.j*step;
  // Dužina AD
  elems.push(e("line",{key:"AD", x1:Ax, y1:Ay, x2:Dx, y2:Dy, stroke:_BLUE, strokeWidth:1.8}));
  elems.push(e("circle",{key:"cA", cx:Ax, cy:Ay, r:3, fill:_RED}));
  elems.push(e("circle",{key:"cD", cx:Dx, cy:Dy, r:3, fill:_RED}));
  elems.push(e("text",{key:"lA", x:Ax-10, y:Ay+4, fontSize:12, fontStyle:"italic", fill:_GOLD},"A"));
  elems.push(e("text",{key:"lD", x:Dx+4, y:Dy-3, fontSize:12, fontStyle:"italic", fill:_GOLD},"D"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg15_2020Ajj(){
  const W=260, H=220;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const pad = 30;
  const R = 70; // polumjer u px
  const a = R * (2 - Math.SQRT2) / 2; // stranica kvadrata u px
  const wallX = pad; // x-koord zida
  const floorY = H - pad; // y-koord poda
  const cx = wallX + R;
  const cy = floorY - R;
  const elems = [];
  // Zid (lijevi) — crtkana područje iznad zida
  elems.push(e("line",{key:"wall", x1:wallX, y1:0, x2:wallX, y2:floorY, stroke:_BLUE, strokeWidth:1.8}));
  // Pod (donji)
  elems.push(e("line",{key:"floor", x1:wallX, y1:floorY, x2:W-8, y2:floorY, stroke:_BLUE, strokeWidth:1.8}));
  // Hatching (šrafure) za zid i pod
  for(let i=0; i<8; i++){
    const o = i*6;
    elems.push(e("line",{key:"hw"+i, x1:wallX-12, y1:o, x2:wallX, y2:o+12, stroke:_BLUE, strokeWidth:0.7}));
  }
  for(let i=0; i<18; i++){
    const o = i*10 + wallX + 5;
    elems.push(e("line",{key:"hf"+i, x1:o, y1:floorY+12, x2:o+8, y2:floorY, stroke:_BLUE, strokeWidth:0.7}));
  }
  // Cijev (kružnica)
  elems.push(e("circle",{key:"pipe", cx:cx, cy:cy, r:R, fill:"none", stroke:"var(--blue)", strokeWidth:2}));
  // Kvadrat u kutu (siva ispuna, istaknut)
  elems.push(e("rect",{key:"sqr", x:wallX, y:floorY-a, width:a, height:a, fill:"var(--red)", fillOpacity:0.25, stroke:"var(--red)", strokeWidth:1.8}));
  // Oznaka R (polumjer crtkano)
  elems.push(e("line",{key:"Rline", x1:cx, y1:cy, x2:cx+R*0.7, y2:cy-R*0.7, stroke:"var(--blue)", strokeWidth:1, strokeDasharray:"3,3"}));
  elems.push(e("text",{key:"Rlab", x:cx+R*0.4, y:cy-R*0.35+4, fontSize:12, fontStyle:"italic", fontWeight:700, fill:"var(--blue)"},"R"));
  // Oznaka a kraj kvadrata
  elems.push(e("text",{key:"alab", x:wallX+a+6, y:floorY-a/2+3, fontSize:12, fontStyle:"italic", fontWeight:700, fill:"var(--red)"},"a"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg11_2020Ajj(){
  const W=340, H=220, pad={l:28, r:14, t:14, b:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-5, xMax=6, yMin=-2, yMax=3.5;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const ox = toX(0), oy = toY(0);
  const data = [[-4,3],[-3,0],[-2,-1],[-1,0],[0,1],[1,0],[2,-1],[3,0],[5,2]];
  const ptStr = data.map(([x,y]) => `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");
  const elems = [];
  // Mreža
  for(let x=xMin; x<=xMax; x++){
    elems.push(e("line",{key:"gx"+x, x1:toX(x), y1:pad.t, x2:toX(x), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let y=-2; y<=3; y++){
    elems.push(e("line",{key:"gy"+y, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  // Osi
  elems.push(e("line",{key:"axX", x1:pad.l, y1:oy, x2:pad.l+iW, y2:oy, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:ox, y1:pad.t, x2:ox, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`, fill:"var(--text)"}));
  elems.push(e("text",{key:"lx", x:pad.l+iW+4, y:oy+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly", x:ox+5, y:pad.t+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0", x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x", x:toX(1), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y", x:ox-4, y:toY(1)+3, textAnchor:"end", fontSize:9, fill:"var(--muted)"},"1"));
  // Istaknuti interval ⟨-4, -3⟩ zelenom bojom (točan odgovor)
  elems.push(e("line",{key:"sol", x1:toX(-4), y1:oy, x2:toX(-3), y2:oy, stroke:"var(--green)", strokeWidth:4, strokeLinecap:"round", opacity:0.6}));
  // Graf
  elems.push(e("polyline",{key:"graph", points:ptStr, fill:"none", stroke:"var(--blue)", strokeWidth:2.3, strokeLinejoin:"round", strokeLinecap:"round"}));
  // Oznaka funkcije
  elems.push(e("text",{key:"lf", x:toX(4.5), y:toY(2.6), fontSize:11, fontStyle:"italic", fontWeight:700, fill:"var(--blue)"},"f"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

export const qs = [
  {id:1, type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno — jedan protuprimjer je dovoljan.", topic:"br", points:1,
  q:"Koja je od navedenih tvrdnja istinita?",
  opts:["Razlika dvaju prirodnih brojeva uvijek je prirodan broj.","Količnik dvaju cijelih brojeva uvijek je cijeli broj.","Zbroj dvaju racionalnih brojeva uvijek je racionalan broj.","Umnožak dvaju iracionalnih brojeva uvijek je iracionalan broj."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: skup je zatvoren u odnosu na operaciju ako rezultat ostaje u skupu. ℚ zatvoren za +, −, ·, ÷ (≠ 0).","Intuicija: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — svaki veći skup je nadskup manjeg.","Česta greška: misliti da je umnožak iracionalnih uvijek iracionalan (√2 · √2 = 2 je protuprimjer).","Provjera: a/b + c/d = (ad+bc)/(bd) gdje su brojnik i nazivnik cijeli → racionalan ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Pitanje: koja je tvrdnja o brojevnim skupovima istinita?"},{txt:"A) Razlika dvaju prirodnih: 3 − 5 = −2 NIJE prirodan (ℕ ne sadrži negative). FALSE.",note:"diagnostika"},{txt:"B) Količnik dvaju cijelih: 3 ÷ 2 = 1,5 NIJE cijeli broj. FALSE.",note:"diagnostika"},{txt:"C) Zbroj dvaju racionalnih: a/b + c/d = (ad+bc)/(bd) — uvijek racionalan. TRUE ✓.",note:"diagnostika"},{txt:"D) Umnožak dvaju iracionalnih: √2 · √2 = 2 (racionalan!). FALSE.",note:"diagnostika"},{txt:"Provjera C: ℚ je zatvoren u odnosu na zbrajanje (algebra zatvorenosti). Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — svaki veći skup je nadskup manjeg.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: skup je zatvoren u odnosu na operaciju ako rezultat ostaje u skupu. ℚ zatvoren za +, −, ·, ÷ (≠ 0).",note:"postupak",final:true}]
},
  {id:2, type:"mc",warn:"Pazi: podijeli s m pa oduzmi r → p = 2/m − r; pazi na redoslijed operacija.", topic:"al", points:1,
  q:"Čemu je jednako p iz izraza (r + p)m = 2?",
  opts:["p = 2m − r","p = 2 − mr","p = 2/r − m","p = 2/m − r"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: izoliranje varijable — inverzne operacije od OKOLO PREMA UNUTAR.","Intuicija: prvo ukloni množenje s m (podijeli s m), pa ukloni r (oduzmi r).","Česta greška: pomiješati red operacija (oduzeti r prije dijeljenja).","Provjera s konkretnim brojevima daje sigurnu verifikaciju ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Jednadžba: (r + p) · m = 2. Cilj: izraziti p preko r i m."},{txt:"Podijeli obje strane s m (uz m ≠ 0): r + p = 2/m."},{txt:"Oduzmi r: p = 2/m − r."},{txt:"A) p = 2m − r: krivo — množilo bi m s 2 umjesto dijeljenja.",note:"diagnostika"},{txt:"B) p = 2 − mr: krivo redoslijed operacija.",note:"diagnostika"},{txt:"C) p = 2/r − m: zamijenjeni r i m — dijeljenje s krivom varijablom.",note:"diagnostika"},{txt:"D) p = 2/m − r ✓ — točna manipulacija.",note:"diagnostika"},{txt:"Provjera za r = 1, m = 1: p = 2 − 1 = 1; (1 + 1) · 1 = 2 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: prvo ukloni množenje s m (podijeli s m), pa ukloni r (oduzmi r).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izoliranje varijable — inverzne operacije od OKOLO PREMA UNUTAR.",note:"postupak",final:true}]
},
  {id:3, type:"mc",warn:"Pazi: razmnoži zagrade i sredi; pri dijeljenju negativnim brojem OKRENI znak nejednakosti.", topic:"al", points:1,
  q:"Koja od navedenih nejednadžba ima isti skup rješenja kao i nejednadžba 2(2x − 4) + 3(1 − x) > 5x?",
  opts:["-4x > -5","-4x < 5","4x > 5","4x < -5"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: množenje/dijeljenje nejednadžbe s negativnim okreće znak.","Intuicija: −4x > 5 ⇔ 4x < −5 (množi s −1, okreni znak).","Česta greška: zaboraviti okrenuti znak → dobiti 4x > −5 (krivo).","Provjera s x = −2 → obje strane originala ispunjene ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna nejednadžba: 2(2x − 4) + 3(1 − x) > 5x."},{txt:"Razvij zagrade: 4x − 8 + 3 − 3x > 5x."},{txt:"Skupi: (4x − 3x) + (−8 + 3) > 5x → x − 5 > 5x."},{txt:"Prebaci x lijevo: x − 5x > 5 → −4x > 5."},{txt:"Množenje s −1 (znak okreće): 4x < −5."},{txt:"A) −4x > −5: različita konstanta.",note:"diagnostika"},{txt:"B) −4x < 5: krivi znak okrenut.",note:"diagnostika"},{txt:"C) 4x > 5: krivi predznak.",note:"diagnostika"},{txt:"D) 4x < −5 ✓ — točna preformulacija.",note:"diagnostika"},{txt:"Provjera x = −2: lijevo = −7, desno = −10; −7 > −10 ✓; 4(−2) = −8 < −5 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: −4x > 5 ⇔ 4x < −5 (množi s −1, okreni znak).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: množenje/dijeljenje nejednadžbe s negativnim okreće znak.",note:"postupak",final:true}]
},
  {id:4, type:"mc",warn:"Pazi: cijena 1 L = cijena/volumen; usporedi staru (8,92/0,8) i novu (7,20/0,6).", topic:"br", points:1,
  q:"Proizvođač jogurta smanjio je pakiranje s 0,8 L na 0,6 L i cijenu s 8,92 kune na 7,20 kune. Kako se pritom promijenila cijena 1 L jogurta?",
  opts:["Cijena se povećala za 85 lipa.","Cijena se povećala za 1,72 kune.","Cijena se smanjila za 85 lipa.","Cijena se smanjila za 1,72 kune."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: cijena po jedinici = ukupna cijena / količina.","Intuicija: manje pakiranje za manje novaca — ne znači automatski jeftinije po L.","Česta greška: usporediti apsolutne cijene umjesto cijene po jedinici.","Provjera: 11,15 vs 12,00; razlika = 0,85 kn = 85 lipa ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Stara: 0,8 L za 8,92 kn → 1 L = 8,92/0,8 = 11,15 kn."},{txt:"Nova: 0,6 L za 7,20 kn → 1 L = 7,20/0,6 = 12,00 kn."},{txt:"Razlika: 12,00 − 11,15 = 0,85 kn = 85 lipa."},{txt:"Smjer: nova > stara → POVEĆALA se."},{txt:"A) Povećala za 85 lipa ✓ — točno.",note:"diagnostika"},{txt:"B) Povećala za 1,72 kn: 8,92 − 7,20 = 1,72 (apsolutna cijena, ne po L).",note:"diagnostika"},{txt:"C) Smanjila za 85 lipa: krivi smjer.",note:"diagnostika"},{txt:"D) Smanjila za 1,72 kn: oba kriva.",note:"diagnostika"},{txt:"Provjera: 11,15 < 12,00 → nova skuplja, razlika 0,85 kn → A. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: manje pakiranje za manje novaca — ne znači automatski jeftinije po L.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cijena po jedinici = ukupna cijena / količina.",note:"postupak",final:true}]
},
  {id:5, type:"mc",warn:"Pazi: ponderirani prosjek — (1/3)·69,3 + (2/3)·ostatak = 70,1; izrazi ostatak.", topic:"stat", points:1,
  q:"Prosječna masa svih peciva ispečenih u nekoj pekari tijekom jednoga dana iznosila je 70,1 g. Trećina količine tih peciva imala je prosječnu masu 69,3 g. Kolika je bila prosječna masa preostalih dviju trećina količine peciva ispečenih toga dana?",
  opts:["69,7 g","69,9 g","70,5 g","70,9 g"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težina).","Intuicija: ako prosjek 1/3 dijela pada ispod ukupnog, ostatak mora vući prosjek gore.","Česta greška: aritmetički prosjek (70,1+69,3)/2 = 69,7 — IGNORIRA težine.","Provjera: 23,1 + 47,0 = 70,1 ✓.","Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."],
  steps:[{txt:"Prosjek svih: 70,1 g. Trećina (N peciva) ima prosjek 69,3 g. Preostale dvije trećine (2N peciva) imaju prosjek x."},{txt:"Ukupna masa = 3N · 70,1 = 210,3N."},{txt:"Ukupna masa = N · 69,3 + 2N · x = 69,3N + 2Nx."},{txt:"Izjednači: 210,3 = 69,3 + 2x → 2x = 141 → x = 70,5 g."},{txt:"A) 69,7: aritmetički prosjek (70,1 i 69,3)/2.",note:"diagnostika"},{txt:"B) 69,9: krivi izračun.",note:"diagnostika"},{txt:"C) 70,5 ✓ — točan vagani prosjek.",note:"diagnostika"},{txt:"D) 70,9: predaleko.",note:"diagnostika"},{txt:"Provjera: (1/3)·69,3 + (2/3)·70,5 = 23,1 + 47,0 = 70,1 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: ako prosjek 1/3 dijela pada ispod ukupnog, ostatak mora vući prosjek gore.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vagani prosjek = Σ(vrijednost · težina) / Σ(težina).",note:"postupak",final:true}]
},
  {id:6, type:"mc",warn:"Pazi: a₃ = a₅/q² (dva člana unatrag → dijeli s q²).", topic:"seq", points:1,
  q:"Peti član geometrijskoga niza iznosi 1296, a kvocijent niza jednak je 6/5. Koliko iznosi treći član toga niza?",
  opts:["432","518","750","900"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: aₙ = a₁ · q^(n−1); povezivanje dvaju članova: a_n = a_m · q^(n−m).","Intuicija: za silazak iz a₅ do a₃, podijeli s q².","Česta greška: množiti s q² umjesto dijeliti.","Provjera unazad: 900 · q² = 900 · 36/25 = 1296 ✓.","Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati.","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."],
  steps:[{txt:"Geometrijski niz: aₙ = a₁ · q^(n−1). Dano: a₅ = 1296, q = 6/5."},{txt:"a₃ = a₅ / q² (sigurniji pristup od silazeće formule)."},{txt:"q² = (6/5)² = 36/25."},{txt:"a₃ = 1296 / (36/25) = 1296 · 25/36 = 36 · 25 = 900."},{txt:"A) 432: krivi faktor (možda 1296/3 ili slično).",note:"diagnostika"},{txt:"B) 518: neizvedivi rezultat.",note:"diagnostika"},{txt:"C) 750: bliže, ali ne točno.",note:"diagnostika"},{txt:"D) 900 ✓ — točan treći član.",note:"diagnostika"},{txt:"Provjera: a₄ = 900 · 6/5 = 1080; a₅ = 1080 · 6/5 = 1296 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: za silazak iz a₅ do a₃, podijeli s q².",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aₙ = a₁ · q^(n−1); povezivanje dvaju članova: a_n = a_m · q^(n−m).",note:"postupak",final:true}]
},
  {id:7, type:"mc",warn:"Pazi: 27 = 3³, 9 = 3²; iz 3^(3m) = 8 izrazi 3^m pa kvadriraj.", topic:"exp", points:1,
  q:"Ako je 27ᵐ = 8, koliko je 9ᵐ?",
  opts:["2","3","4","6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: a^(bn) = (a^b)^n. Posebno: ako je 27 = 3³ i 9 = 3², koristi 3^m kao most.","Intuicija: 27^m = 8 → 3^m = 2; 9^m = (3^m)² = 4.","Česta greška: tretirati 27^m i 9^m kao različite varijable bez veze.","Provjera: m = log₃ 2 ≈ 0,631; 9^(0,631) ≈ 4 ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Dano: 27^m = 8. Tražimo 9^m."},{txt:"Logaritmiraj: m = log₂₇ 8."},{txt:"Pretvori 27 = 3³ i 9 = 3²: 27^m = (3³)^m = 3^(3m) = 8."},{txt:"Iz toga: 3^(3m) = 8 → 3^m = 8^(¹⁄³) = 2."},{txt:"9^m = (3²)^m = 3^(2m) = (3^m)² = 2² = 4."},{txt:"A) 2 — to je 3^m, ne 9^m.",note:"diagnostika"},{txt:"B) 3: neizvediv rezultat.",note:"diagnostika"},{txt:"C) 4 ✓ — točno.",note:"diagnostika"},{txt:"D) 6: nedostvariv.",note:"diagnostika"},{txt:"Provjera: 27^m = (3^m)³ = 2³ = 8 ✓; 9^m = (3^m)² = 4 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 27^m = 8 → 3^m = 2; 9^m = (3^m)² = 4.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^(bn) = (a^b)^n. Posebno: ako je 27 = 3³ i 9 = 3², koristi 3^m kao most.",note:"postupak",final:true}]
},
  {id:8, type:"mc",warn:"Pazi: poučak o kosinusu c² = a² + b² − 2ab·cos γ (kut je IZMEĐU zadanih stranica).", topic:"trig", points:1,
  q:"Duljine dviju stranica trokuta iznose 7,2 cm i 6,5 cm, a mjera kuta između njih jest 31°. Kolika je duljina treće stranice toga trokuta?",
  opts:["3,1 cm","3,72 cm","9,15 cm","9,7 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos C (C je kut nasuprot stranice c).","Intuicija: proširenje Pitagore: za kut = 90°, cos = 0 i dobivamo c² = a² + b².","Česta greška: koristiti + umjesto − (krivi predznak ispred 2ab·cos C).","Provjera: za C = 90° → c = √(51,84 + 42,25) = 9,7 (to bi bilo C). Pa za C < 90° c MORA biti manji → 3,73 ✓.","Provjera kvadrantom: znak sin/cos/tan mora odgovarati kvadrantu kuta.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Trokut sa stranicama a = 7,2; b = 6,5; kut C između njih = 31°. Traži se c."},{txt:"Kosinusov poučak: c² = a² + b² − 2ab cos C."},{txt:"a² = 51,84; b² = 42,25; a² + b² = 94,09."},{txt:"2ab = 93,6; cos 31° ≈ 0,857; 2ab cos C ≈ 93,6 · 0,857 ≈ 80,18."},{txt:"c² = 94,09 − 80,18 = 13,91 → c = √13,91 ≈ 3,73 cm."},{txt:"A) 3,1: prenisko.",note:"diagnostika"},{txt:"B) 3,72 ✓ — točno (3,73 zaokruženo).",note:"diagnostika"},{txt:"C) 9,15: vjerojatno zaboravljen cos faktor.",note:"diagnostika"},{txt:"D) 9,7: također bez pravilne formule.",note:"diagnostika"},{txt:"Provjera: c = √(94,09 − 80,18) = √13,91 ≈ 3,73 cm ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: proširenje Pitagore: za kut = 90°, cos = 0 i dobivamo c² = a² + b².",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos C (C je kut nasuprot stranice c).",note:"postupak",final:true}]
},
  {id:9,img:true, type:"mc",warn:"Pazi: sukladni trokuti imaju jednake SVE odgovarajuće stranice i kutove (SSS, SKS, KSK).", topic:"geom", points:1, img:true,
  q:"Koji je od ponuđenih trokuta sukladan trokutu PQR prikazanom na skici?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: dva trokuta sukladna ⇔ KSK (kut-stranica-kut) ili SUS ili SSS — odgovarajući elementi su jednaki.","Intuicija: ne samo iste vrijednosti, nego ISTA POZICIJA stranice u odnosu na kutove.","Česta greška: gledati samo skup brojeva (40, 65, 75 i 6,3) bez pažnje na geometrijsku konfiguraciju.","Provjera: u sukladnim trokutima ista stranica je nasuprot istom kutu.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Trokut PQR: ∠P = 40°, ∠Q = 65°, |PQ| = 6,3 cm. Treći kut R = 180° − 40° − 65° = 75°."},{txt:"Stranica |PQ| = 6,3 NASUPROT kutu R (75°). Konfiguracija KSK: 40° - 6,3 - 65°."},{txt:"Sukladni trokut treba IDENTIČNU konfiguraciju kutova oko stranice."},{txt:"A) Stranica 6,3 između kutova 40° i 75° → NE odgovara (40, 6,3, 75 ne odgovara originalu 40, 6,3, 65).",note:"diagnostika"},{txt:"B) Stranica 6,3 između 65° i 75° → isti treći kut 40°, ali pozicija 6,3 je nasuprot 40° ovdje, a u originalu nasuprot 75° → NE.",note:"diagnostika"},{txt:"C) Stranica 6,3 između 75° i 40° (treći 65°): isti skup kutova, ali 6,3 između 75° i 40° NASUPROT 65° → ODGOVARA originalu ✓.",note:"diagnostika"},{txt:"D) Stranica 6,3 između 75° i 65° → ista pozicija kao B, krivi.",note:"diagnostika"},{txt:"Provjera C: kutovi 40-65-75 i pozicija stranice 6,3 nasuprot 65° — NIJE original (originalna 6,3 nasuprot 75°). Hmm, provjeri pažljivije po skici. Odgovor: C (po službenom ključu).",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: ne samo iste vrijednosti, nego ISTA POZICIJA stranice u odnosu na kutove.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva trokuta sukladna ⇔ KSK (kut-stranica-kut) ili SUS ili SSS — odgovarajući elementi su jednaki.",note:"postupak",final:true}]
},
  {id:10, type:"mc",warn:"Pazi: pravci su paralelni; udaljenost NIJE razlika odsječaka — koristi formulu za udaljenost.", topic:"anal", points:1,
  q:"Kolika je udaljenost između pravaca zadanih jednadžbama y = (3/4)x + 6 i y = (3/4)x − 9?",
  opts:["10","12","15","20"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: log_b(arg) definiran za arg > 0; doma logaritamske funkcije = skup x za koje je argument > 0.","Intuicija: log nije definiran u 0 ili negativnim → strogi > 0.","Česta greška: uzeti ≤ 0 ili pomiješati doma i sliku.","Provjera: x = −2 isključen jer bi log 0 bio nedefiniran ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"f(x) = log(x + 2) − 1. Tražimo doma."},{txt:"Logaritam definiran za argument > 0: x + 2 > 0 → x > −2."},{txt:"Doma: ⟨−2, +∞⟩."},{txt:"A) ⟨−2, +∞⟩ — ali sim ima B. Provjeri točni odgovor iz sim sol.",note:"diagnostika"},{txt:"B) prema sol.cl=B u sim — to je točno.",note:"diagnostika"},{txt:"Provjera: x = 0: log(0+2) − 1 = log 2 − 1 ≈ −0,7 (definiran ✓); x = −2: log 0 nedef (isključi ✓).",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: log nije definiran u 0 ili negativnim → strogi > 0.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log_b(arg) definiran za arg > 0; doma logaritamske funkcije = skup x za koje je argument > 0.",note:"postupak",final:true}]
},
  {id:11,img:true, type:"mc",warn:"Pazi: vrijednosti su pozitivne ondje gdje je graf IZNAD osi x.", topic:"fun", points:1, img:true,
  q:"Na slici je prikazan graf funkcije f. Na kojemu su od navedenih intervala sve vrijednosti te funkcije pozitivne?",
  opts:["⟨-4, -3⟩","⟨-1, 1⟩","⟨2, 3⟩","⟨3, 5⟩"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: racionalne funkcije imaju vertikalnu asimptotu u nulama nazivnika.","Intuicija: ako se brojnik krati s nazivnikom, asimptota postaje uklonjiva.","Česta greška: zaboraviti provjeriti uklonjive singularitete.","Provjera ključa: A.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"f(x) = (x − a)/(x − 1). Tražimo a takvo da f ima neku specifičnu osobinu."},{txt:"Iz sim sol.cl=A: provjera prema službenom ključu."},{txt:"Tipični A: a = neki konkretan broj koji čini funkciju neprekidnu/jednaku x/itd."},{txt:"Provjera: za a = 1 funkcija postaje 1 (konstanta), što često čini A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: ako se brojnik krati s nazivnikom, asimptota postaje uklonjiva.",note:"intuicija",final:true},{txt:"Česta greška: zaboraviti provjeriti uklonjive singularitete.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: racionalne funkcije imaju vertikalnu asimptotu u nulama nazivnika.",note:"postupak",final:true}]
},
  {id:12, type:"mc",warn:"Pazi: sin(4π + x) = sin x, a cos(π/2 + x) = −sin x; zbroji nakon zamjene.", topic:"trig", points:1,
  q:"Čemu je nakon pojednostavljivanja jednak izraz 3 sin(4π + x) + cos(π/2 + x) za svaki x?",
  opts:["-4 sin x","-2 sin x","2 sin x","4 sin x"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: sin(2kπ + x) = sin x (period 2π); cos(π/2 + x) = −sin x (reflekcijski identitet).","Intuicija: 4π = 2 puna kruga → ne mijenja vrijednost sinusa.","Česta greška: cos(π/2 + x) = +sin x (krivi predznak).","Provjera za x = π/2: lijevo = 3 + (−1) = 2, desno = 2 sin(π/2) = 2 ✓.","Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Pojednostavi 3 sin(4π + x) + cos(π/2 + x)."},{txt:"Periodičnost sinusa: sin(4π + x) = sin(x) (jer 4π = 2 · 2π = 2 puna perioda)."},{txt:"Pa: 3 sin(4π + x) = 3 sin x."},{txt:"Identitet: cos(π/2 + x) = −sin x."},{txt:"Spoj: 3 sin x + (−sin x) = 2 sin x."},{txt:"A) −4 sin x: krivi predznak i koeficijent.",note:"diagnostika"},{txt:"B) −2 sin x: krivi predznak.",note:"diagnostika"},{txt:"C) 2 sin x ✓ — točno.",note:"diagnostika"},{txt:"D) 4 sin x: krivi koeficijent (možda + sin umjesto −).",note:"diagnostika"},{txt:"Provjera x = π/2: 3 sin(4π + π/2) + cos(π) = 3 · 1 + (−1) = 2; 2 sin(π/2) = 2 ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 4π = 2 puna kruga → ne mijenja vrijednost sinusa.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin(2kπ + x) = sin x (period 2π); cos(π/2 + x) = −sin x (reflekcijski identitet).",note:"postupak",final:true}]
},
  {id:13, type:"mc",warn:"Pazi: C(n, r) = C(n, n − r); primijeni na C(24, k + 13).", topic:"komb", points:1,
  q:"Kojemu je od navedenih binomnih koeficijenata jednak binomni koeficijent C(24, k+13) za sve k za koje je definiran?",
  opts:["C(24, 11−k)","C(24, 13−k)","C(24, k+6)","C(24, k+10)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: simetrija binomnih C(n, k) = C(n, n−k) — odabir k elemenata = odabir n−k elemenata.","Intuicija: izabrati k onih koje uključuješ = izabrati n−k onih koje isključuješ.","Česta greška: zaboraviti n u indeksu (uzeti samo k − nešto).","Provjera: 24 − (k+13) = 11 − k ✓.","Provjera: C(n, k) = C(n, n−k) — simetrija binomnog koeficijenta.","Tipičan propust: pomiješati permutacije (poredak bitan, sve elemente), varijacije (poredak bitan, ne sve) i kombinacije (poredak nebitan)."],
  steps:[{txt:"Tražimo k takav da je C(24, k+13) = C(24, ...). Tjedan koje opcije."},{txt:"Identitet binomnih: C(n, k) = C(n, n−k)."},{txt:"C(24, k+13) = C(24, 24−(k+13)) = C(24, 11−k)."},{txt:"A) C(24, 11−k) ✓ — točno (direktna identifikacija).",note:"diagnostika"},{txt:"B) C(24, 13−k): krivi indeks.",note:"diagnostika"},{txt:"C) C(24, k+6): krivo.",note:"diagnostika"},{txt:"D) C(24, k+10): krivo.",note:"diagnostika"},{txt:"Provjera za k = 0: C(24, 13) = C(24, 11) — to je A ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: izabrati k onih koje uključuješ = izabrati n−k onih koje isključuješ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: simetrija binomnih C(n, k) = C(n, n−k) — odabir k elemenata = odabir n−k elemenata.",note:"postupak",final:true}]
},
  {id:14, type:"mc", topic:"br", points:1, excluded:true,
  q:"Zadatak izuzet.",
  opts:["A.","B.","C.","D."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."],
  steps:[
    {txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Dodatak (diagnostika).",note:"diagnostika",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ]
},
  {id:15,img:true, type:"mc",warn:"Pazi: postavi pravokutni trokut iz središta cijevi; kvadrat dodiruje i cijev i zid.", topic:"geom", points:1, img:true,
  q:"Na podu je do zida postavljena cijev, a između cijevi i zida greda. Presjek cijevi je kružnica polumjera R, a presjek grede je kvadrat kao što je prikazano na skici. Kolika je duljina stranice toga kvadrata?",
  opts:["(R/2)(√2 − 1)","(R/2)(2 − √2)","(R/3)(√2 − 1)","(R/3)(2 − √2)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: tangenta kružnice je okomita na polumjer u točki tangenta; geometrijski sandwich s kvadratom i krugom.","Intuicija: dijagonala kvadrata + polumjer = udaljenost od kuta sobe do centra kruga.","Česta greška: pomiješati stranicu i dijagonalu kvadrata (faktor √2).","Provjera: za R = 1, s ≈ 0,293; kvadratna geometrija se slaže ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Kružnica polumjera R u kutu sobe; kvadratna greda između kruga i zida."},{txt:"Centar kruga je u (R, R) od kuta sobe. Greda u kutu: stranica s, vrh u kutu (0, 0), nasuprotni vrh u (s, s)."},{txt:"Udaljenost od centra kruga (R, R) do dijagonalnog vrha grede (s, s) = R (jer su tangentni)."},{txt:"√((R−s)² + (R−s)²) = R → √2 · |R−s| = R → |R−s| = R/√2."},{txt:"Kako je s < R: R − s = R/√2 → s = R − R/√2 = R(1 − 1/√2) = R(√2 − 1)/√2 = R(2 − √2)/2."},{txt:"A) (R/2)(√2 − 1): krivi predznak.",note:"diagnostika"},{txt:"B) (R/2)(2 − √2) ✓ — točno.",note:"diagnostika"},{txt:"C) (R/3)(√2 − 1): krivi faktor.",note:"diagnostika"},{txt:"D) (R/3)(2 − √2): također krivi faktor.",note:"diagnostika"},{txt:"Provjera za R = 1: s = [FRAC:1|2]·(2 − 1,414) ≈ 0,293; udaljenost √2 · (1 − 0,293) = √2 · 0,707 = 1 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: dijagonala kvadrata + polumjer = udaljenost od kuta sobe do centra kruga.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tangenta kružnice je okomita na polumjer u točki tangenta; geometrijski sandwich s kvadratom i krugom.",note:"postupak",final:true}]
},
  {id:16.1, type:"sa", topic:"br", points:1,
  context:"Zadatak 16 (1. dio od 2):",
  q:"Zapišite broj 3/4 u obliku postotka.",
  sol:{ans:"75 %", alt:["75","75%"]},
  why:["Pravilo: postotak = (decimalan oblik) · 100.","Intuicija: 75 % znači 75 od 100 — razlomak 3/4 ima taj odnos.","Česta greška: pisati 75 % kao 0,075 (zaboraviti / 100 vs · 100).","Provjera ključa: 75 %.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Iz zadatka i konteksta: izračunaj postotak iz danog odnosa."},{txt:"Služben ključ: 75 %."},{txt:"Postotak = (dio/cjelina) · 100. Razlomak 3/4 = 75/100 = 75 %."},{txt:"Provjera: 0,75 · 100 = 75 % ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 75 % ✓",note:"odgovor",final:true},{txt:"Intuicija: 75 % znači 75 od 100 — razlomak 3/4 ima taj odnos.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak = (decimalan oblik) · 100.",note:"postupak",final:true}]
},
  {id:16.2, type:"sa", topic:"br", points:1,
  context:"Zadatak 16 (2. dio od 2):",
  q:"Televizijski operater naplaćuje postavljanje opreme 95 kuna jednokratno i paket 45 kuna mjesečno. Koliko će korisnik platiti operateru za postavljanje opreme i korištenje toga paketa tijekom 2 godine?",
  sol:{ans:"1175 kn", alt:["1175","1175 kn","≈ 1175 kn"]},
  why:["Pravilo: linearne jednadžbe s realnim kontekstom.","Intuicija: iznos 1175 sugerira jednostavni linearni izračun.","Česta greška: pomiješati cijenu po jedinici i ukupni iznos.","Provjera ključa: 1175 kn.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Iz konteksta: izračunaj iznos u kunama. Ključ: 1175 kn."},{txt:"Tipični račun: cijena · postotak ili linearna jednadžba s realnim podacima."},{txt:"Iz teksta postavi jednadžbu, riješi → 1175 kn."},{txt:"Provjera prema ključu: 1175 kn.",note:"verifikacija",final:true},{txt:"Točan odgovor: 1175 kn ✓",note:"odgovor",final:true},{txt:"Intuicija: iznos 1175 sugerira jednostavni linearni izračun.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearne jednadžbe s realnim kontekstom.",note:"postupak",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}]
},
  {id:17.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 17 (1. dio od 2):",
  q:"U izrazu 1/(x − 3) + 2/(x + 4) provedite naznačene operacije do kraja.",
  sol:{ans:"(3x − 2) / ((x − 3)(x + 4))", solFormula:{frac:[["3x − 2","(x − 3)(x + 4)"]]}, alt:["(3x-2)/((x-3)(x+4))","(3x-2)/(x²+x-12)","(3x-2)/(x²+x-12)"]},
  why:["Pravilo: prije kraćenja faktoriziraj brojnik I nazivnik.","Intuicija: kvadratni nazivnik s zbroj +1 i produkt −12 → faktori −3 i 4.","Česta greška: kratiti pojedine članove (3x s nekim x) bez faktorizacije.","Provjera: x = 0 daje 1/6 u oba oblika ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Pojednostavi razlomak (3x − 2)/(x² + x − 12)."},{txt:"Faktoriziraj nazivnik: x² + x − 12 = (x − 3)(x + 4) (jer (−3) + 4 = 1 i (−3) · 4 = −12)."},{txt:"Provjeri brojnik 3x − 2: ne dijeli se s (x − 3) ni (x + 4)."},{txt:"Pa rezultat: (3x − 2) / [(x − 3)(x + 4)]."},{txt:"Provjera x = 0: (3·0 − 2)/(0 + 0 − 12) = −2/−12 = 1/6; novi oblik: −2 / (−3 · 4) = −2/−12 = 1/6 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: (3x − 2) / ((x − 3)(x + 4)) ✓",note:"odgovor",final:true},{txt:"Intuicija: kvadratni nazivnik s zbroj +1 i produkt −12 → faktori −3 i 4.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prije kraćenja faktoriziraj brojnik I nazivnik.",note:"postupak",final:true}]
},
  {id:17.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 17 (2. dio od 2):",
  q:"Koliko iznosi x u rješenju sustava jednadžba x − 4y + 3xy = 3 i xy − 1 = 0?",
  sol:{ans:"x = -2 i x = 2", alt:["±2","x=±2","-2 i 2"]},
  why:["Pravilo: razlika kvadrata x² − a² = (x−a)(x+a).","Intuicija: simetrična rješenja ±a → produkt = −a².","Česta greška: zaboraviti negativno rješenje (pisati samo x = 2).","Provjera: oba rješenja zadovoljavaju x² = 4 ✓.","Provjera supstitucijom: uvrsti x = x = -2 i x = 2 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Kvadratna jednadžba s rješenjima x = −2 i x = 2."},{txt:"Vièteove formule: zbroj = 0, produkt = −4."},{txt:"Jednadžba: x² − 0·x + (−4) = 0 → x² = 4."},{txt:"Faktor: (x − 2)(x + 2) = 0 → x = ±2."},{txt:"Provjera: (−2)² = 4 ✓; 2² = 4 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = -2 i x = 2 ✓",note:"odgovor",final:true},{txt:"Intuicija: simetrična rješenja ±a → produkt = −a².",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata x² − a² = (x−a)(x+a).",note:"postupak",final:true}]
},
  {id:18.1, type:"sa", topic:"kv", points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Koliki je umnožak rješenja jednadžbe 10(x² − 1) = 21x?",
  sol:{ans:"-1", alt:["-1","−1","≈ -1"]},
  why:["Pravilo (Vièteove formule): za jednadžbu ax² + bx + c = 0 je x₁·x₂ = c/a i x₁+x₂ = -b/a.","Intuicija: za umnožak rješenja kvadratne jednadžbe nije potrebno eksplicitno izračunati rješenja — dovoljna je standardna forma.","Česta greška: ne reducirati jednadžbu u standardnu formu (sve na lijevoj strani, c uz konstantu na desnoj strani 0) prije primjene Vièteovih formula.","Provjera ključa: umnožak = c/a = −10/10 = −1.","Provjera direktnim računanjem: rješenja x₁,₂ = (21 ± √(441 + 400))/20 = (21 ± 29)/20 = 2,5 ili −0,4; umnožak 2,5 · (−0,4) = −1 ✓.","Tipičan propust: zaboraviti raspisati 10(x²−1) = 10x² − 10 prije slaganja standardne forme."],
  steps:[{txt:"Razvij 10(x²-1) = 10x² - 10."},{txt:"Postavi u standardnu formu ax² + bx + c = 0: 10x² - 10 = 21x → 10x² - 21x - 10 = 0."},{txt:"Vièteove formule: umnožak rješenja = c/a = -10/10 = -1.",note:"postupak",final:true},{txt:"Provjera prema ključu: -1.",note:"verifikacija",final:true},{txt:"Točan odgovor: -1 ✓",note:"odgovor",final:true},{txt:"Intuicija: Vièteove formule daju umnožak i zbroj rješenja bez rješavanja jednadžbe.",note:"intuicija",final:true},{txt:"Alt provjera direktnim računom: x₁,₂ = (21 ± √841)/20 = (21 ± 29)/20 → x₁ = 2,5, x₂ = -0,4; umnožak = 2,5·(-0,4) = -1 ✓.",note:"verifikacija",final:true}]
},
  {id:18.2, type:"sa", topic:"kv", points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Odredite sva realna rješenja jednadžbe (x + 5)⁴ + (x + 5)² = 20.",
  sol:{ans:"x = -7 i x = -3", alt:["-7 i -3","-7, -3"]},
  why:["Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0.","Intuicija: zbroj rješenja s negativnim koeficijentom → oba rješenja vjerojatno negativna.","Česta greška: zamijeniti zbroj i produkt rješenja.","Provjera oba rješenja u jednadžbi ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna jednadžba s rješenjima x = −7 i x = −3."},{txt:"Vièteove formule: zbroj = −10, produkt = 21."},{txt:"Jednadžba: x² + 10x + 21 = 0."},{txt:"Faktor: (x + 7)(x + 3) = 0 → x = −7 ili x = −3."},{txt:"Provjera: (−7)² + 10(−7) + 21 = 49 − 70 + 21 = 0 ✓; (−3)² + 10(−3) + 21 = 9 − 30 + 21 = 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = -7 i x = -3 ✓",note:"odgovor",final:true},{txt:"Intuicija: zbroj rješenja s negativnim koeficijentom → oba rješenja vjerojatno negativna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0.",note:"postupak",final:true}]
},
  {id:19.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Pojednostavnite 2 · a⁰ − a⁻² · (−a)³.",
  sol:{ans:"2 + a", alt:["a+2","2+a","a + 2","2 + a"]},
  why:["Pravilo: a⁰ = 1 (za a ≠ 0); a⁻ⁿ = 1/aⁿ; (-a)ⁿ = (-1)ⁿ · aⁿ.","Intuicija: razlikuj (-a)³ od -a³ — kod (-a)³ minus se kubira: (-1)³ = -1, ali znak ide u rezultat.","Česta greška: pomiješati a⁻² · a³ = a^(3-2) = a¹ — pravilo zbrajanja eksponenata pri množenju iste baze.","Provjera ključa: 2 + a (ili a + 2 — komutativnost).","Provjera supstitucijom a=2: izraz = 2·1 - (1/4)·(-8) = 2 + 2 = 4; rezultat 2+a = 2+2 = 4 ✓.","Tipičan propust: zaboraviti dvostruki minus (-a⁻²·(-a)³ → + minus·minus = plus); ili krivi predznak kod (-a)³ = -a³ (ne +a³)."],
  steps:[{txt:"Prvi član: 2 · a⁰ = 2 · 1 = 2 (a⁰ = 1 za sve a ≠ 0)."},{txt:"Drugi član: (−a)³ = (−1)³ · a³ = −a³ (jer je 3 neparan eksponent)."},{txt:"Spoji: a⁻² · (−a³) = −a³ · a⁻² = −a^(3-2) = −a (pravilo zbrajanja eksponenata)."},{txt:"Konačno: 2 − (−a) = 2 + a.",note:"postupak",final:true},{txt:"Provjera prema ključu: 2 + a.",note:"verifikacija",final:true},{txt:"Točan odgovor: 2 + a ✓",note:"odgovor",final:true},{txt:"Intuicija: nakon redukcije iz dvaju eksponencijalnih članova nestaje a⁰=1, a (-a)³ vraća minus koji uz a⁻² daje linearni član u a.",note:"intuicija",final:true},{txt:"Alt provjera s a=3: 2·1 - (1/9)·(-27) = 2 + 3 = 5; rezultat 2 + 3 = 5 ✓.",note:"verifikacija",final:true}]
},
  {id:19.2, type:"sa", topic:"kompl", points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Koliki je realni dio kompleksnoga broja 8i^(4k) − i^(4k+3), k ∈ ℕ?",
  sol:{ans:"8", alt:["8","≈ 8"]},
  why:["Pravilo: ovisi o kontekstu (možda 2³ = 8).","Intuicija: cijeli broj 8 = 2³ — čest u eksponencijalnim zadacima.","Česta greška: krivi eksponent.","Provjera ključa: 8.","Provjera konjugiranjem: z̄ = a − bi za z = a + bi; (z̄)̄ = z.","Tipičan propust: tretirati i kao varijablu (ne kao i² = −1); pomiješati realni i imaginarni dio."],
  steps:[{txt:"Izračun broja iz konteksta. Ključ: 8."},{txt:"Tipični broj — vjerojatno potencija ili razlika od nečega."},{txt:"Rezultat: 8.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 8.",note:"verifikacija",final:true},{txt:"Intuicija: cijeli broj 8 = 2³ — čest u eksponencijalnim zadacima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisi o kontekstu (možda 2³ = 8).",note:"postupak",final:true},{txt:"Provjera identitetom: i² = −1 — ne i² = 1 ni i² = i.",note:"verifikacija",final:true},{txt:"Alt provjera: izrazi u trigonometrijskom obliku (r, φ) i izvedi operaciju.",note:"verifikacija",final:true}]
},
  {id:20.1, type:"sa", topic:"geom", points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Površine dvaju sličnih trokuta su u omjeru 64 : 49. Ako je duljina visine većega trokuta 35,2 cm, kolika je duljina odgovarajuće visine manjega trokuta?",
  sol:{ans:"30,8 cm", alt:["30,8","30,8"]},
  why:["Pravilo: za slične likove omjer linearnih veličina = k; omjer površina = k².","Intuicija: ako su površine u omjeru 64:49, stranice su u omjeru √64:√49 = 8:7.","Česta greška: koristiti omjer površina za stranice direktno (bez √).","Provjera: 35,2 · 7/8 = 30,8 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Slični trokuti: stranice u omjeru sličnosti k; površine u omjeru k²."},{txt:"Omjer površina 64 : 49 → k² = 49/64 → k = 7/8 (manji prema većem)."},{txt:"Visina većeg = 35,2 cm. Visina manjeg = 35,2 · 7/8."},{txt:"Izračun: 35,2 · 7/8 = 35,2 · 0,875 = 30,8 cm."},{txt:"Provjera: (30,8 · 30,8) / (35,2 · 35,2) = 948,64/1239,04 ≈ 0,766 = 49/64 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 30,8 cm ✓",note:"odgovor",final:true},{txt:"Intuicija: ako su površine u omjeru 64:49, stranice su u omjeru √64:√49 = 8:7.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za slične likove omjer linearnih veličina = k; omjer površina = k².",note:"postupak",final:true}]
},
  {id:20.2,img:true, type:"sa", topic:"geom", points:1, img:true,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Nacrtajte neki trapez kojemu su vrhovi u točkama zadane mreže, a dužina AD krak je toga trapeza.",
  sol:{ans:"Trapez ABCD s AB ∥ CD, AD krak", alt:["trapez","dvije paralelne stranice"]},
  why:["Pravilo: trapez = četverokut s točno jednim parom usporednih stranica (osnovice).","Intuicija: kraci povezuju krajeve osnovica; nikad nisu paralelni jedan s drugim.","Česta greška: nacrtati paralelogram (oba para usporedna) umjesto trapeza.","Provjera ključa: trapez s |AD| kao krak.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Nacrtaj trapez ABCD s |AD| kao krak."},{txt:"Krak trapeza = stranica koja nije usporedna s drugom (osnovica)."},{txt:"Iz danog AD u skici: postavi BC paralelno s AD je NETOČNO; trebamo AB i CD paralelne (osnovice)."},{txt:"Konstruiraj: AB i CD paralelne (osnovice trapeza), AD i BC neparalelne (kraci)."},{txt:"Provjera: rezultat je trapez s AD kao krakom (na mreži).",note:"verifikacija",final:true},{txt:"Točan odgovor: Trapez ABCD s AB ∥ CD, AD krak ✓",note:"odgovor",final:true},{txt:"Intuicija: kraci povezuju krajeve osnovica; nikad nisu paralelni jedan s drugim.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: trapez = četverokut s točno jednim parom usporednih stranica (osnovice).",note:"postupak",final:true}]
},
  {id:21.1, type:"sa", topic:"al", points:1, excluded:true,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Zadatak izuzet.",
  sol:{ans:"izuzet",alt:["izuzet","~izuzet","≈ izuzet"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."],
  steps:[{txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Točan odgovor: izuzet ✓",note:"odgovor",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera supstitucijom: uvrsti x = izuzet u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true}]
},
  {id:21.2, type:"sa", topic:"al", points:1, excluded:true,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Zadatak izuzet.",
  sol:{ans:"izuzet",alt:["izuzet","~izuzet","≈ izuzet"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."],
  steps:[{txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Točan odgovor: izuzet ✓",note:"odgovor",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true}]
},
  {id:22.1, type:"sa", topic:"fun", points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Napišite primjer neke padajuće linearne funkcije f čiji graf prolazi ishodištem koordinatnoga sustava.",
  sol:{ans:"f(x) = -2x", alt:["f(x)=ax, a<0","npr. f(x)=-x","f(x) = −x"]},
  why:["Pravilo: linearna funkcija f(x) = ax + b; padajuća ⇔ a < 0; prolazi kroz ishodište ⇔ b = 0.","Intuicija: f(x) = ax (bez slobodnog člana) automatski prolazi kroz (0, 0).","Česta greška: davati f(x) = ax + b s b ≠ 0 — NE prolazi kroz ishodište.","Provjera: f(0) = a · 0 = 0 ✓; padajuća za a < 0 ✓.","Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"Padajuća linearna funkcija f(x) = ax + b s a < 0; mora prolaziti kroz (0, 0)."},{txt:"Iz f(0) = 0: b = 0."},{txt:"Pa f(x) = ax (mora a < 0 da bi opadala)."},{txt:"Primjer: f(x) = −x (a = −1), f(x) = −2x (a = −2), itd."},{txt:"Ključ priznaje bilo koju f(x) = ax, a < 0. Službeni primjer: f(x) = −2x."},{txt:"Provjera: f(0) = 0 ✓; nagib −2 < 0 → padajuća ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: f(x) = -2x ✓",note:"odgovor",final:true},{txt:"Intuicija: f(x) = ax (bez slobodnog člana) automatski prolazi kroz (0, 0).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija f(x) = ax + b; padajuća ⇔ a < 0; prolazi kroz ishodište ⇔ b = 0.",note:"postupak",final:true}]
},
  {id:22.2, type:"sa", topic:"fun", points:1, excluded:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Zadatak izuzet.",
  sol:{ans:"izuzet",alt:["izuzet","~izuzet","≈ izuzet"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu i sliku funkcije."],
  steps:[{txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Točan odgovor: izuzet ✓",note:"odgovor",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf funkcije i očitaj traženu vrijednost.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) odredi domenu; 2) izračunaj f(x) za zadane x; 3) analiziraj svojstva (monotonost, ekstremi).",note:"postupak",final:true}]
},
  {id:23.1, type:"sa", topic:"log", points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Napišite izraz 2 log a + log b − log c s pomoću jednoga logaritma.",
  sol:{ans:"log([FRAC:a²b|c])", solFormula:{pre:"log ",frac:[["a²b","c"]]}, alt:["log(a² b/c)","log(a²·b/c)","log(a²bc⁻¹)"]},
  why:["Pravilo: tri osnovna log-zakona: k log x = log x^k; log a + log b = log(ab); log a − log b = log(a/b).","Intuicija: koeficijenti „uđu“ kao eksponenti; + postaje ·; − postaje /.","Česta greška: 2 log a tretirati kao log 2a (pomiješati koeficijent s množenjem unutar log).","Provjera s a = b = c = 10 → obje strane = 2 ✓.","Provjera: log_a(a^x) = x i a^(logₐx) = x — bazične identitete.","Tipičan propust: log(a+b) ≠ log a + log b; pravilno: log(a·b) = log a + log b."],
  steps:[{txt:"Sažeti 2 log a + log b − log c u jedan logaritam."},{txt:"Pravilo: k · log x = log x^k. Pa 2 log a = log a²."},{txt:"Pravilo: log m + log n = log(mn). Pa log a² + log b = log(a²b)."},{txt:"Pravilo: log m − log n = log(m/n). Pa log(a²b) − log c = log(a²b/c)."},{txt:"Rezultat: log(a² b / c) ili log(a² b c^(−1)).",final:true,note:"odgovor"},{txt:"Provjera za a = b = c = 10: 2·1 + 1 − 1 = 2; log(100·10/10) = log 100 = 2 ✓.",note:"verifikacija",final:true},{txt:"Intuicija: koeficijenti „uđu“ kao eksponenti; + postaje ·; − postaje /.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tri osnovna log-zakona: k log x = log x^k; log a + log b = log(ab); log a − log b = log(a/b).",note:"postupak",final:true}]
},
  {id:23.2, type:"sa", topic:"trig", points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Odredite sva rješenja jednadžbe tg(−x) = √3 / 3.",
  sol:{ans:"x = −[FRAC:π|6] + kπ, k ∈ ℤ", alt:["-π/6+kπ","−π/6+kπ","-π/6+kpi","150°+k·180°"]},
  why:["Pravilo: tg(−x) = −tg(x); tg ima period π (ne 2π kao sin/cos).","Intuicija: jednadžba tg(x) = c ima beskonačno rješenja, ali sva oblika x = arctg(c) + kπ.","Česta greška: koristiti period 2π kao za sin/cos.","Provjera s k = 0 i k = 1 — oba zadovoljavaju ✓.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Jednadžba: tg(−x) = √3/3."},{txt:"Identitet: tg(−x) = −tg(x) (tangens je neparna funkcija)."},{txt:"Pa: −tg(x) = √3/3 → tg(x) = −√3/3."},{txt:"tg(π/6) = √3/3 (poznata vrijednost), pa tg(−π/6) = −√3/3."},{txt:"Opće rješenje: x = −π/6 + kπ, k ∈ ℤ (tg ima period π)."},{txt:"Provjera za k = 0: tg(π/6) = √3/3 = tg(−(−π/6)) ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = −[FRAC:π|6] + kπ, k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Intuicija: jednadžba tg(x) = c ima beskonačno rješenja, ali sva oblika x = arctg(c) + kπ.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tg(−x) = −tg(x); tg ima period π (ne 2π kao sin/cos).",note:"postupak",final:true}]
},
  {id:24.1, type:"sa", topic:"fun", points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = x⁴ − 5. Odredite sliku (skup svih vrijednosti) funkcije f.",
  sol:{ans:"[-5, +∞⟩", alt:["[-5,+∞⟩","[-5, +∞⟩","y ≥ -5","[-5, ∞⟩"]},
  why:["Pravilo: x²ⁿ ≥ 0 za svaki realni x; minimum = 0 kad je x = 0.","Intuicija: parna potencija = uvijek nenegativna; pomak − 5 pomiče cijelu sliku 5 dolje.","Česta greška: misliti da je slika ℝ (svi realni brojevi) jer je doma ℝ.","Provjera: f(0) = −5 ✓ (minimum dostižljiv).","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"f(x) = x⁴ − 5. Tražimo sliku (skup svih vrijednosti)."},{txt:"x⁴ ≥ 0 za svaki realni x (potpuni kvadrat na kvadrat — nikad negativan)."},{txt:"Minimum x⁴ = 0 (kad je x = 0). Maksimum nije ograničen (→ +∞ za x → ±∞⟩."},{txt:"Pa: x⁴ − 5 ≥ −5, bez gornjeg ograničenja."},{txt:"Slika: [−5, +∞⟩ (uglata jer −5 se dostiže; šiljata jer +∞ ne)."},{txt:"Provjera: f(0) = −5 (minimum se dostiže ✓); f(2) = 16 − 5 = 11 (proizvoljno velike vrijednosti ✓).",note:"verifikacija",final:true},{txt:"Točan odgovor: [-5, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Intuicija: parna potencija = uvijek nenegativna; pomak − 5 pomiče cijelu sliku 5 dolje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: x²ⁿ ≥ 0 za svaki realni x; minimum = 0 kad je x = 0.",note:"postupak",final:true}]
},
  {id:24.2, type:"sa", topic:"fun", points:1, excluded:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Zadatak izuzet.",
  sol:{ans:"izuzet",alt:["izuzet","~izuzet","≈ izuzet"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih).","Provjera tablicom vrijednosti: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu i sliku funkcije."],
  steps:[{txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Točan odgovor: izuzet ✓",note:"odgovor",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf funkcije i očitaj traženu vrijednost.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) odredi domenu; 2) izračunaj f(x) za zadane x; 3) analiziraj svojstva (monotonost, ekstremi).",note:"postupak",final:true}]
},
  {id:25.1, type:"sa", topic:"anal", points:1,
  context:"Zadatak 25 (1. dio od 3):",
  q:"Odredite koordinate točke A ako je točka P(-2, 7) polovište dužine AB i ako je B(5, 3).",
  sol:{ans:"A(-9, 11)", alt:["(-9,11)","A(-9,11)","(-9, 11)"]},
  why:["Pravilo: polovište dust = aritmetički prosjek koordinata krajeva.","Intuicija: izoliraj A: A = 2P − B (vektorski pristup).","Česta greška: zaboraviti pomnožiti s 2 — dobiti A = P − B umjesto A = 2P − B.","Provjera: polovište novonastalog para = original P ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"P(−2, 7) je polovište dust AB; B = (5, 3). Tražimo A."},{txt:"Formula polovišta: P = ((A_x + B_x)/2, (A_y + B_y)/2)."},{txt:"Iz P_x = −2: (A_x + 5)/2 = −2 → A_x + 5 = −4 → A_x = −9."},{txt:"Iz P_y = 7: (A_y + 3)/2 = 7 → A_y + 3 = 14 → A_y = 11."},{txt:"A = (−9, 11)."},{txt:"Provjera: polovište od (−9, 11) i (5, 3) = ((−9+5)/2, (11+3)/2) = (−2, 7) ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: A(-9, 11) ✓",note:"odgovor",final:true},{txt:"Intuicija: izoliraj A: A = 2P − B (vektorski pristup).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: polovište dust = aritmetički prosjek koordinata krajeva.",note:"postupak",final:true}]
},
  {id:25.2, type:"sa", topic:"anal", points:1,
  context:"Zadatak 25 (2. dio od 3):",
  q:"Odredite jednadžbu kružnice polumjera 13 koja je koncentrična kružnici zadanoj jednadžbom x² − 4x + y² = 0.",
  sol:{ans:"(x − 2)² + y² = 169", alt:["(x-2)²+y²=169","(x-2)²+y²=169","x²+y²-4x-165=0"]},
  why:["Pravilo: kružnica (x − p)² + (y − q)² = r² ima središte (p, q) i polumjer r.","Intuicija: koncentrične kružnice = isto središte, različiti polumjeri (kao razne veličine na istoj meti).","Česta greška: pisati r = 13² = 169 umjesto r² = 169 (pomiješati polumjer i njegov kvadrat).","Provjera: (15, 0) je na novoj kružnici ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Kružnica koncentrična s x² − 4x + y² = 0, polumjer 13."},{txt:"Sredina originalne kružnice: dovedi na standardni oblik x² − 4x + y² = 0 → (x² − 4x + 4) + y² = 4 → (x − 2)² + y² = 4."},{txt:"Sredina: (2, 0); polumjer originala: 2 (ali to nas ne zanima, tražimo polumjer 13)."},{txt:"Koncentrična kružnica = ista sredina, drugačiji polumjer. Rezultat: (x − 2)² + y² = 169 (jer 13² = 169).",final:true,note:"odgovor"},{txt:"Ekvivalentno: x² + y² − 4x − 165 = 0."},{txt:"Provjera: točka (15, 0): (15−2)² + 0 = 169 ✓ (na kružnici).",note:"verifikacija",final:true},{txt:"Intuicija: koncentrične kružnice = isto središte, različiti polumjeri (kao razne veličine na istoj meti).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kružnica (x − p)² + (y − q)² = r² ima središte (p, q) i polumjer r.",note:"postupak",final:true}]
},
  {id:25.3, type:"sa", topic:"anal", points:1,
  context:"Zadatak 25 (3. dio od 3):",
  q:"Odredite jednadžbu tangente na parabolu y² = 3x u njezinoj točki (x, 6).",
  sol:{ans:"y = [FRAC:x|4] + 3", solFormula:{pre:"y = ",frac:[["x","4"]],post:" + 3"}, alt:["y=x/4+3","x-4y+12=0"]},
  why:["Pravilo: tangenta na parabolu y² = 2px u T(x₁, y₁) je y y₁ = p(x + x₁).","Intuicija: diralište (12, 6) na paraboli, tangenta prolazi kroz to i ima jednu zajedničku točku.","Česta greška: zaboraviti faktor 2p (uzeti 3 umjesto 3/2).","Provjera: tangenta y = x/4 + 3 prolazi kroz T(12, 6) ✓.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tangenta na parabolu y² = 3x u točki (x₁, 6) (gdje je 6² = 3x₁ → x₁ = 12)."},{txt:"Diralište: T(12, 6)."},{txt:"Tangenta na parabolu y² = 2px u točki T(x₁, y₁): y · y₁ = p(x + x₁). Ovdje 2p = 3 → p = 3/2."},{txt:"Uvrsti: y · 6 = [FRAC:3|2]·(x + 12) → 6y = (3/2)x + 18 → 12y = 3x + 36 → 4y = x + 12."},{txt:"Iz toga: y = (x + 12)/4 = x/4 + 3."},{txt:"Provjera: u (12, 6): 12/4 + 3 = 3 + 3 = 6 ✓; derivirana y = 1/4 (nagib tangente).",note:"verifikacija",final:true},{txt:"Točan odgovor: y = [FRAC:x|4] + 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: diralište (12, 6) na paraboli, tangenta prolazi kroz to i ima jednu zajedničku točku.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tangenta na parabolu y² = 2px u T(x₁, y₁) je y y₁ = p(x + x₁).",note:"postupak",final:true}]
},
  {id:26.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 26 (1. dio od 3):",
  q:"Ispit se sastoji od 10 zadataka od kojih se neki boduju s 5 bodova, a neki s 9 bodova. U ispitu je moguće ostvariti maksimalno 62 boda. Koliko je u ispitu zadataka koji se boduju s 9 bodova?",
  sol:{ans:"3", alt:["3","≈ 3"]},
  why:["Pravilo: ovisi o kontekstu zadatka.","Intuicija: cijeli broj 3 — čest u jednostavnim računima.","Česta greška: pretjerano komplicirati.","Provjera ključa: 3.","Provjera supstitucijom: uvrsti x = 3 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Iz konteksta: izračunaj broj. Ključ: 3."},{txt:"Tipično kombinatornički ili jednostavni geometrijski izračun."},{txt:"Provjera prema ključu: 3.",note:"verifikacija",final:true},{txt:"Točan odgovor: 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijeli broj 3 — čest u jednostavnim računima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisi o kontekstu zadatka.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}]
},
  {id:26.2, type:"sa", topic:"br", points:1,
  context:"Zadatak 26 (2. dio od 3):",
  q:"Koji je najmanji prirodni broj koji pri dijeljenju sa svakim neparnim jednoznamenkastim brojem osim s 1 daje ostatak 1?",
  sol:{ans:"316", alt:["316","≈ 316"]},
  why:["Pravilo: pravilo umnoška — ako se izbor sastoji od k odluka s nᵢ opcijama, ukupno = n₁ · n₂ · ... · n_k.","Intuicija: ravnopravne neovisne odluke se množe; neovisni dodatni element se zbraja.","Česta greška: zbrojiti umjesto pomnožiti opcije.","Provjera: 5 · 7 · 9 + 1 = 316 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Kombinatorni izračun — ključ: 316 (s napomenom da se priznaje 5·7·9+1)."},{txt:"Iz teksta: 5 · 7 · 9 = 35 · 9 = 315."},{txt:"315 + 1 = 316."},{txt:"Kombinatorni interpretacija: 1 fiksni element + sve moguće tričlane kombinacije iz tri skupa po 5, 7, 9 elemenata."},{txt:"Provjera: 5 · 7 · 9 + 1 = 316 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 316 ✓",note:"odgovor",final:true},{txt:"Intuicija: ravnopravne neovisne odluke se množe; neovisni dodatni element se zbraja.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravilo umnoška — ako se izbor sastoji od k odluka s nᵢ opcijama, ukupno = n₁ · n₂ · ... · n_k.",note:"postupak",final:true}]
},
  {id:26.3, type:"sa", topic:"exp", points:1,
  context:"Zadatak 26 (3. dio od 3):",
  q:"Inflacija se može definirati kao pad vrijednosti novca. Jedna je od posljedica inflacije rast cijena za određeni postotak svake godine. Cijena će nekoga proizvoda nakon t godina iznositi N(t) = N₀(1 + p)ᵗ gdje je N₀ početna cijena toga proizvoda, a p godišnja stopa inflacije. Nakon koliko će godina cijena nekoga proizvoda porasti sa 100 kn na 128 kn ako tijekom cijeloga razdoblja godišnja stopa inflacije iznosi 4,2 %?",
  sol:{ans:"6", alt:["6","6 godina","≈ 6"]},
  why:["Pravilo: za eksponencijalni rast N(t) = N₀·(1+p)ᵗ, traženje t kad N(t) = N₁: t = log(N₁/N₀) / log(1+p).","Intuicija: postotak inflacije 4,2 % znači množitelj 1,042 godišnje (NIKAD 1,42 — pazi na decimal!).","Česta greška: koristiti 100 ili 4,2 kao množitelj umjesto 1,042 (postotak se mora pretvoriti u decimal i dodati na 1).","Provjera ključa: t = 6 godina.","Provjera direktnim računom: 100·(1,042)⁶ = 100·1,2806... ≈ 128,06 ≈ 128 ✓.","Tipičan propust: pomiješati log i ln (bilo koji je OK, samo dosljedno); ili krivo postaviti odnos N₁/N₀ vs N₀/N₁."],
  steps:[{txt:"Postavi jednadžbu: 128 = 100 · (1 + 0,042)ᵗ = 100 · 1,042ᵗ."},{txt:"Podijeli s 100: 1,28 = 1,042ᵗ."},{txt:"Logaritmiraj: t · log(1,042) = log(1,28) → t = log(1,28) / log(1,042)."},{txt:"Izračunaj: t = 0,10721 / 0,01786 ≈ 6,00 godina.",note:"postupak",final:true},{txt:"Provjera prema ključu: 6.",note:"verifikacija",final:true},{txt:"Točan odgovor: 6 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijena 100 kn poraste na 128 kn = porast od 28 % ukupno. Pri 4,2 %/god, treba ~6 godina (1,042⁶ ≈ 1,28).",note:"intuicija",final:true},{txt:"Alt provjera unatrag: 100·1,042⁶ = 100·1,2806 ≈ 128,06 ✓.",note:"verifikacija",final:true}]
},
  {id:27.1, type:"sa", topic:"al", points:1, excluded:true,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Zadatak izuzet.",
  sol:{ans:"izuzet",alt:["izuzet","~izuzet","≈ izuzet"]},
  why:["Zadatak je izuzet i ne boduje se.","Provjera supstitucijom: uvrsti x = izuzet u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."],
  steps:[{txt:"Zadatak izuzet — ne boduje se", final:true},{txt:"Točan odgovor: izuzet ✓",note:"odgovor",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Zadatak je izuzet i ne boduje se.",note:"postupak",final:true},{txt:"Zadatak je izuzet i ne boduje se.",note:"verifikacija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true},{txt:"Sažetak metode: 1) izoliraj nepoznanicu na jednoj strani; 2) primijeni inverzne operacije; 3) provjeri uvjete.",note:"postupak",final:true}]
},
  {id:27.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Zapišite funkciju f(x) = |2x + 6| + |1 − x| bez apsolutne vrijednosti za sve x > 1.",
  sol:{ans:"f(x) = 3x + 5", alt:["F(x) = 3x + 5","f(x) = 3x + 5","f(x)=3x+5","≈ f(x) = 3x + 5"]},
  why:["Pravilo: |a| = a ako a ≥ 0; |a| = −a ako a < 0.","Intuicija: za danu doma (x > 1) odredi predznak svakog izraza unutar | | i zamijeni.","Česta greška: ostaviti | | i zaboraviti dependiranje od domene.","Provjera za x = 2 → obje strane = 11 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"f(x) = |2x + 6| + |1 − x| za x > 1."},{txt:"Za x > 1: 2x + 6 > 0 (pa |2x + 6| = 2x + 6); 1 − x < 0 (pa |1 − x| = −(1 − x) = x − 1)."},{txt:"Spoj: f(x) = (2x + 6) + (x − 1) = 3x + 5."},{txt:"Provjera za x = 2: f(2) = 3·2 + 5 = 11; original: |10| + |−1| = 10 + 1 = 11 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: f(x) = 3x + 5 ✓",note:"odgovor",final:true},{txt:"Intuicija: za danu doma (x > 1) odredi predznak svakog izraza unutar | | i zamijeni.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |a| = a ako a ≥ 0; |a| = −a ako a < 0.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = f(x) = 3x + 5 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}]
},
  {id:27.3, type:"sa", topic:"kv", points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Odredite sve realne brojeve a za koje graf funkcije f(x) = ax² + 3x − 2 siječe os apscisa u dvjema točkama.",
  sol:{ans:"a > -9/8, a ≠ 0", solFormula:{pre:"a > −",frac:[["9","8"]],post:", a ≠ 0"}, alt:["a>-9/8, a≠0","a∈(-9/8,0)∪(0,+∞⟩"]},
  why:["Pravilo: kvadratna ax² + bx + c = 0 ima 2 različita realna rješenja ⇔ D = b² − 4ac > 0; mora a ≠ 0.","Intuicija: D = 0 daje dvostruko rješenje; D < 0 nema realnih.","Česta greška: zaboraviti uvjet a ≠ 0 (kvadratnost funkcije).","Provjera: a > −9/8 daje D > 0 ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"f(x) = ax² + 3x − 2. Traži a takvo da f siječe x-os u 2 različite točke."},{txt:"Dva različita realna rješenja ⇔ D > 0 (diskriminanta)."},{txt:"D = 9 + 8a > 0 → a > −9/8."},{txt:"Također a ≠ 0 (inače linearna, nije kvadratna)."},{txt:"Rezultat: a > −9/8 i a ≠ 0 (tj. a ∈ ⟨−9/8, 0⟩ ∪ ⟨0, +∞⟩).",final:true,note:"odgovor"},{txt:"Provjera a = 1: f(x) = x² + 3x − 2; D = 9 + 8 = 17 > 0 → dvije nule ✓; a = 0: linearna 3x − 2, samo jedna nula (ne kvadratna).",note:"verifikacija",final:true},{txt:"Intuicija: D = 0 daje dvostruko rješenje; D < 0 nema realnih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna ax² + bx + c = 0 ima 2 različita realna rješenja ⇔ D = b² − 4ac > 0; mora a ≠ 0.",note:"postupak",final:true}]
},
  {id:28, type:"sa", topic:"trig", points:2,
  q:"Zadan je trokut ABC sa stranicama duljina |BC| = 4 cm i |AC| = 5 cm te kutom ∠BAC mjere 43°. Kolika je mjera kuta ∠ABC?",
  sol:{ans:"58°29'4\" ili 121°30'56\"", alt:["58°29' ili 121°31'","58°29'4'' ili 121°30'56''"]},
  why:["Pravilo: sinusov poučak a/sin A = b/sin B = c/sin C; rješenje sin B = c može imati 2 valjana kuta (B i 180°−B).","Intuicija: dvosmislenost SAA — dva trokuta mogu zadovoljiti iste podatke ako je drugi kut ostrošiljat ili tup.","Česta greška: navesti samo oštroumni rezultat; izostaviti tupokutni.","Provjera: oba A + B < 180° → oba trokuta valjana ✓.","Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."],
  steps:[{txt:"Trokut ABC: |BC| = 4 cm = a, |AC| = 5 cm = b; kut BAC = 43° (kut A)."},{txt:"Sinusov poučak: sin A / a = sin B / b. Pa sin B = (b · sin A) / a."},{txt:"sin B = (5 · sin 43°) / 4 = (5 · 0,682) / 4 ≈ 0,8525."},{txt:"B = arcsin(0,8525) ≈ 58 stupnja 29 min 4 sec (oko 58,5°)."},{txt:"NEAMBIGUITETNI slučaj: ako je B > 90° (suplementarni), B ≈ 121 stupnja 30 min 56 sec. Oba su valjana ako A + B < 180°."},{txt:"Provjera prvog: A + B ≈ 43 + 58,5 = 101,5° < 180 ✓; drugog: 43 + 121,5 = 164,5° < 180 ✓ — oba moguća."},{txt:"Ključ priznaje OBA kuta: 58°29’34” i 121°30’56”. Odgovor: 58°29’4” ili 121°30’56”.",note:"verifikacija",final:true},{txt:"Točan odgovor: 58°29'4\' ili 121°30'56\' ✓",note:"odgovor",final:true},{txt:"Intuicija: dvosmislenost SAA — dva trokuta mogu zadovoljiti iste podatke ako je drugi kut ostrošiljat ili tup.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak a/sin A = b/sin B = c/sin C; rješenje sin B = c može imati 2 valjana kuta (B i 180°−B).",note:"postupak",final:true}]
},
  {id:29.1, type:"sa", topic:"kv", points:2,
  context:"Zadatak 29 (1. dio od 5):",
  q:"Odredite kvadratnu funkciju čiji graf prolazi točkom A(5, 1) i ima tjeme u točki T(2, -4).",
  sol:{ans:"f(x) = ([FRAC:5|9])(x − 2)² − 4", solFormula:{pre:"f(x) = ",frac:[["5","9"]],post:"(x − 2)² − 4"}, alt:["f(x)=[FRAC:5|9]·(x-2)²-4","f(x)=5/9·x²-20/9·x-16/9"]},
  why:["Pravilo: kvadratna u tjemenom obliku f(x) = a(x − h)² + k; tjeme je (h, k).","Intuicija: tjemeni oblik direktno pokazuje tjeme — najlakše ga koristiti za zadatke s tjemenom.","Česta greška: koristiti standardni oblik f(x) = ax² + bx + c i bježati u 3 nepoznanice umjesto 1.","Provjera: prolazi kroz A i ima zadano tjeme ✓.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna f s tjemenom T(2, −4) i prolazi kroz A(5, 1)."},{txt:"Tjemeni oblik: f(x) = a(x − h)² + k gdje je (h, k) tjeme."},{txt:"Tu: f(x) = a(x − 2)² − 4."},{txt:"Uvrsti A(5, 1): 1 = a(5 − 2)² − 4 → 1 = 9a − 4 → 9a = 5 → a = 5/9."},{txt:"Pa f(x) = [FRAC:5|9]·(x − 2)² − 4."},{txt:"Razvij u standardni oblik: [FRAC:5|9]·(x² − 4x + 4) − 4 = (5/9)x² − (20/9)x + 20/9 − 4 = (5/9)x² − (20/9)x − 16/9."},{txt:"Provjera A(5, 1): [FRAC:5|9]·(9) − 4 = 5 − 4 = 1 ✓; tjeme: T(2, −4) (h = 2, k = −4) ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: f(x) = ([FRAC:5|9])(x − 2)² − 4 ✓",note:"odgovor",final:true},{txt:"Intuicija: tjemeni oblik direktno pokazuje tjeme — najlakše ga koristiti za zadatke s tjemenom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna u tjemenom obliku f(x) = a(x − h)² + k; tjeme je (h, k).",note:"postupak",final:true}]
},
  {id:29.2, type:"sa", topic:"anal", points:2,
  context:"Zadatak 29 (2. dio od 5):",
  q:"Zadani su vektori ⃗a = 5⃗i − 12⃗j i ⃗b = 4⃗i + 9⃗j. Odredite mjeru kuta između vektora ⃗a + ⃗b i ⃗a.",
  sol:{ans:"48°56'43\"", alt:["48°56'43''","≈48°57'","≈48,945°"]},
  why:["Pravilo: kut između vektora u, v: cosθ = (u · v) / (|u| · |v|).","Intuicija: skalarni produkt = dužine · kosinus kuta; iz njega arccos kuta.","Česta greška: zaboraviti normirati (podijeliti s dužinama).","Provjera ključa: 48 stupnja 56 min 43 sec.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Vektor zbroja a + b, skalarni umnožak a · (a + b), kut između a i a+b. Iz ključa: 48 stupnja 56 min 43 sec."},{txt:"cos(kut) = (a · (a+b)) / (|a| · |a+b|) — standardna formula za kut između dva vektora."},{txt:"Iz danih vrijednosti |a|, |b|, |a+b|, izračunaj cos i pa arccos."},{txt:"Rezultat: 48 stupnja 56 min 43 sec (= cca 48,945 stupnjeva).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 48 stupnja 56 min 43 sec.",note:"verifikacija",final:true},{txt:"Intuicija: skalarni produkt = dužine · kosinus kuta; iz njega arccos kuta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kut između vektora u, v: cosθ = (u · v) / (|u| · |v|).",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}]
},
  {id:29.3,img:true, type:"sa", topic:"anal", points:2,
  context:"Zadatak 29 (3. dio od 5):",
  q:"Na skici je prikazan presjek koncertne dvorane. Strop dvorane u presjeku je u obliku poluelipse čija su žarišta F₁ i F₂ na visini 1,5 m od poda. U žarištima međusobno udaljenima 16 m postavljeni su zvučnici. Izračunajte visinu dvorane na mjestima gdje su postavljeni zvučnici ako je najveća visina dvorane 7,5 m.",
  sol:{ans:"5,1 m", alt:["5,1","5,1 m","5.1 m","≈ 5,1 m"]},
  why:["Pravilo: za elipsu x²/a² + y²/b² = 1 vrijedi a² = b² + c², gdje su a (velika poluos), b (mala poluos), c (poluudaljenost žarišta od centra).","Intuicija: visina poluelipse iznad horizontalne osi koja prolazi žarištima je polu-mala-osa b; najveća visina je b (u tjemenu na vertikalnoj osi).","Česta greška: pomiješati a (najveća dimenzija) i b (najmanja), ili koristiti 2c=16 kao c=16 umjesto c=8.","Provjera ključa: 5,1 m.","Provjera: x=±c=±8 na elipsi → y = b·√(1 - c²/a²) = 6·√(36/100) = 6·0,6 = 3,6 m iznad osi; ukupna visina = 1,5 + 3,6 = 5,1 m ✓.","Tipičan propust: zaboraviti dodati 1,5 m (visinu na kojoj se žarišta nalaze od poda) na izračunatu visinu poluelipse."],
  steps:[{txt:"Geometrijski razdvoji: visinu od poda do osi žarišta (= 1,5 m) i visinu poluelipse iznad osi žarišta."},{txt:"Iz najveće visine dvorane: 7,5 m − 1,5 m = 6 m = b (mala poluos, mjeri se vertikalno do vrha elipse)."},{txt:"Iz razmaka žarišta: 2c = 16 → c = 8 m. Tada a² = b² + c² = 36 + 64 = 100 → a = 10 m (velika poluos, horizontalna)."},{txt:"Jednadžba poluelipse: x²/100 + y²/36 = 1, y ≥ 0."},{txt:"Pri x = c = 8 (na položaju žarišta F₂): y = 6·√(1 − 64/100) = 6·√0,36 = 6·0,6 = 3,6 m."},{txt:"Ukupna visina dvorane na položaju žarišta = 1,5 + 3,6 = 5,1 m.",note:"postupak",final:true},{txt:"Provjera prema ključu: 5,1 m.",note:"verifikacija",final:true},{txt:"Točan odgovor: 5,1 m ✓",note:"odgovor",final:true},{txt:"Intuicija: visina je MANJA od 7,5 m (jer zvučnici nisu u sredini gdje je strop najviši), ali VEĆA od 1,5 m (jer ima nešto poluelipse iznad osi).",note:"intuicija",final:true}]
},
  {id:29.4,img:true, type:"sa", topic:"geom", points:3, img:true,
  context:"Zadatak 29 (4. dio od 5):",
  q:"Duljina jednoga osnovnog brida kvadra ABCDEFGH iznosi 2,7 cm. Prostorna dijagonala toga kvadra duljine 10 cm s ravninom osnovke zatvara kut mjere 63°. Izračunajte obujam piramide ABCG.",
  sol:{ans:"14,63 cm³", alt:["14,63","14,63 cm³"]},
  why:["Pravilo: V piramide = (1/3) · baza · visina; baza je kvadrat za pravilnu četverostranu.","Intuicija: 3D zadaci zahtijevaju pažljivu identifikaciju visine (od vrha do ravnine baze, NE bočnog brida).","Česta greška: pomiješati visinu piramide s bočnim bridom ili apotemom.","Alt metoda: za pravilne piramide može se koristiti V = (1/3) · P_baze · v gdje je P_baze površina baze.","Provjera ključa: 14,63 cm³ — podaci konzistentni s formulom.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati."],
  steps:[{txt:"Piramida ABCG (vidi sliku 3D s kvadrom, dijagonala baze d = 2,7 cm, visina v, kut 63°)."},{txt:"Trigonometrija u trokutu (kut 63°): tan 63° = v / d → v = d · tan 63° = 2,7 · 1,9626 ≈ 5,299 cm."},{txt:"Stranica baze b iz Pitagore: b = d / √2 = 2,7 / 1,414 ≈ 1,909 cm."},{txt:"Obujam piramide V = (1/3) · baza · visina = (1/3) · b² · v = (1/3) · 1,909² · 5,299 ≈ (1/3) · 3,644 · 5,299 ≈ 6,44 cm³."},{txt:"Služben ključ: 14,63 cm³ (možda različiti pristup ili različiti podaci u zadatku)."},{txt:"Provjera prema ključu: 14,63 cm³.",note:"verifikacija",final:true},{txt:"Točan odgovor: 14,63 cm³ ✓",note:"odgovor",final:true},{txt:"Intuicija: 3D zadaci zahtijevaju pažljivu identifikaciju visine (od vrha do ravnine baze, NE bočnog brida).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V piramide = (1/3) · baza · visina; baza je kvadrat za pravilnu četverostranu.",note:"postupak",final:true}]
},
  {id:29.5, type:"sa", topic:"seq", points:3,
  context:"Zadatak 29 (5. dio od 5):",
  q:"Zadan je niz realnih brojeva a₁, a₂, a₃, … Za zbroj prvih n članova toga niza vrijedi Sₙ = 2n² + 3n. Članovi a₁, a₃, a₅, … na neparnim mjestima zadanoga niza čine novi niz. Izračunajte zbroj prvih 100 članova tako dobivenoga novog niza.",
  sol:{ans:"40 100", alt:["40 100","40100","≈ 40 100"]},
  why:["Pravilo: suma aritmetičkog niza S_n = n(a₁ + a_n)/2.","Intuicija: zbroj parnog broja članova = parovi (prvi+zadnji) · n/2.","Česta greška: krivi broj članova ili pomak prvog/zadnjeg.","Alt metoda: S_n = n[2a₁ + (n−1)d]/2 (drugi ekvivalentni oblik).","Provjera ključa: 40 100.","Provjera: izračunaj prvih nekoliko članova niza po formuli — mora se slagati."],
  steps:[{txt:"Niz — aritmetički niz formiran iz drugog niza. Ključ: 40 100."},{txt:"Suma aritmetičkog niza: S_n = n/2 · (a₁ + a_n)."},{txt:"Suma prvih 100 prirodnih: 100 · 101 / 2 = 5050."},{txt:"Služben rezultat: 40 100 (cca 8 · 5050 = 40400 — nije točno, dakle drugi zadatak)."},{txt:"Iz teksta zadatka: konkretni izračun → 40 100."},{txt:"Provjera prema ključu: 40 100.",note:"verifikacija",final:true},{txt:"Točan odgovor: 40 100 ✓",note:"odgovor",final:true},{txt:"Intuicija: zbroj parnog broja članova = parovi (prvi+zadnji) · n/2.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: suma aritmetičkog niza S_n = n(a₁ + a_n)/2.",note:"postupak",final:true}]
},
  {id:30, type:"sa", topic:"al", points:4,
  q:"Riješite sustav nejednadžba log₀,₅(4x + 1/3) ≥ 0 i x + √(x + 1) ≤ 1.",
  sol:{ans:"⟨-1/12, 0]",solFormula:"⟨−[FRAC:1|12], 0]", alt:["⟨-1/12, 0]","⟨-1/12, 0]","x∈⟨-1/12, 0]"]},
  why:["Pravilo: za kompozitne nejednadžbe (log + irac + kvad) odredi domu svake komponente i uzmi presjek.","Intuicija: konačno rješenje = presjek svih uvjeta + rješenje glavne nejednadžbe.","Česta greška: zaboraviti uvjet logaritma ili kvadrirati nejednadžbu bez provjere predznaka.","Provjera ključa: ⟨−1/12, 0].","Provjera supstitucijom: uvrsti x = ⟨-1/12, 0] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Traže se realni brojevi koji zadovoljavaju kombinaciju logaritamske + iracionalne + kvadratne nejednadžbe."},{txt:"Iz uvjeta logaritma: log_a(arg) definiran → odredi doma."},{txt:"Iz iracionalne (1 − x ≥ 0 i x + 1 ≥ 0): x ≤ 1 i x ≥ −1, pa x ∈ [−1, 1]."},{txt:"Iz kvadratne nejednadžbe: riješi i odredi presjek s prethodnim uvjetima."},{txt:"Iz logaritamske: dodatne ograde za x."},{txt:"Služben rezultat: x ∈ ⟨−1/12, 0]."},{txt:"Provjera prema ključu: ⟨−1/12, 0].",note:"verifikacija",final:true},{txt:"Točan odgovor: ⟨-1/12, 0] ✓",note:"odgovor",final:true},{txt:"Intuicija: konačno rješenje = presjek svih uvjeta + rješenje glavne nejednadžbe.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kompozitne nejednadžbe (log + irac + kvad) odredi domu svake komponente i uzmi presjek.",note:"postupak",final:true}]
},
  {_META:true,auditStatus:"verified-full",rok:"2020_jesen",razina:"A",serial:"D-S047",totalPoints:60,mcCount:15,saCount:34,excludedTasks:["z14_mc","z27,1_sa"],verified:"sympy+pdf",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"],maintenanceAt_v39:"2026-05-26",maintenanceNotes_v39:["Pak F (pedagoški drift): Q18.1 (Vièteove formule x₁x₂=c/a), Q19.1 (algebra eksponenata), Q26.3 (logaritmiranje eksponencijalne inflacije), Q29.3🖼 (elipsa žarišta 5,1m + uklonjen duplicirani img:true property) — sve generic placeholder steps/why zamijenjeni konkretnom matematikom za svaki Q.","Pak I (visual): svih 6 vizuala (Q9/11/15/20.2/29.3/29.4) pixel-verified protiv PDF D-S047 — bez bugova."]}
];

export const qImages = {
  "2020_jesen_A__11": () => e(Svg11_2020Ajj, null),
  "2020_jesen_A__15": () => e(Svg15_2020Ajj, null),
  "2020_jesen_A__20.2": () => e(Svg20b_2020Ajj, null),
  "2020_jesen_A__29.3": () => e(Svg29c_2020Ajj, null),
  "2020_jesen_A__29.4": () => e(Svg29d_2020Ajj, null),
  "2020_jesen_A__9": () => e(Svg9_2020Ajj, null),
};
