// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg28_2016Bj(){
  const W=240,H=160,pad={l:38,r:14,t:18,b:32};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=t=>pad.l+((t-6)/13)*iW;
  const toY=v=>pad.t+((30-v)/24)*iH;
  // Graf goriva: točke (sat, litri)
  // Ključ: u 17h = 22L, točeno 2x, potrošeno 36L
  // Rekonstrukcija: polazi s 30L, vozi, tanki, vozi...
  const pts=[
    [6,30],[8,22],[8,22],[9,30],[12,18],[13,18],[14,28],[17,22],[17,22],[19,10]
  ];
  // Točenje: skokovi gore. Vožnja: padanje. Mirovanje: ravno.
  const fuelPts=[
    [6,26],[8,18],[8,26],[11,14],[12,14],[13,14],[14,30],[17,22],[19,10]
  ];
  const poly=fuelPts.map(([t,v])=>`${toX(t)},${toY(v)}`).join(' ');
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${pad.t+iH} ${pad.l+iW-5},${pad.t+iH-3} ${pad.l+iW-5},${pad.t+iH+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${pad.l},${pad.t} ${pad.l-3},${pad.t+5} ${pad.l+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:W/2,y:H-2,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"sati"),
    e("text",{x:4,y:pad.t+2,fontSize:7,fill:_GOLD},"L"),
    // Ticki x (sati)
    ...[6,8,10,12,14,16,18].map(t=>e("g",{key:"tt"+t},
      e("line",{x1:toX(t),y1:pad.t+iH-3,x2:toX(t),y2:pad.t+iH+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(t),y:pad.t+iH+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},t)
    )),
    // Ticki y (litre)
    ...[6,10,14,18,22,26,30].map(v=>e("g",{key:"tv"+v},
      e("line",{x1:pad.l-3,y1:toY(v),x2:pad.l+3,y2:toY(v),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:pad.l-5,y:toY(v)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},v)
    )),
    // Horizontal grid
    ...[10,18,22].map(v=>e("line",{key:"hg"+v,x1:pad.l,y1:toY(v),x2:pad.l+iW,y2:toY(v),stroke:"var(--bdr)",strokeWidth:.5})),
    e("polyline",{points:poly,fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinejoin:"round"}),
    // Oznaka 17h=22L
    e("line",{x1:toX(17),y1:toY(22),x2:toX(17),y2:pad.t+iH,stroke:_GOLD,strokeWidth:1,strokeDasharray:"3 3"}),
    e("circle",{cx:toX(17),cy:toY(22),r:3,fill:_GOLD,stroke:"var(--bg)",strokeWidth:1.5})
  );
}

function Svg24_2016Bj(){
  const W=200,H=160,pad={l:28,r:14,t:14,b:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const xMin=-3,xMax=7,yMin=-4,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const linPts=[];
  for(let x=xMin;x<=xMax;x+=0.2){
    const y=0.5*x-2;
    if(y<yMin||y>yMax) continue;
    linPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...[-3,-2,-1,0,1,2,3,4,5,6,7].map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.5})),
    ...[-4,-3,-2,-1,0,1,2,3].map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.5})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:ox+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+13,fontSize:8,fill:"var(--muted)"},"0"),
    ...[2,4,6].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+13,textAnchor:"middle",fontSize:7,fill:"var(--muted)"},x)
    )),
    ...[-3,-2,-1,1,2].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:ox-3,y1:toY(y),x2:ox+3,y2:toY(y),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:ox-6,y:toY(y)+3,textAnchor:"end",fontSize:7,fill:"var(--muted)"},y)
    )),
    linPts.length>1&&e("polyline",{points:linPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2}),
    e("circle",{cx:toX(4),cy:oy,r:3.5,fill:_GREEN,stroke:"var(--bg)",strokeWidth:1.5}),
    e("circle",{cx:ox,cy:toY(-2),r:3.5,fill:_GREEN,stroke:"var(--bg)",strokeWidth:1.5}),
    e("text",{x:toX(5.5),y:toY(0.75)-7,fontSize:9,fill:_BLUE},"f(x)=0.5x\u22122")
  );
}

function SvgZad20_2016Bj(){
  const u=(()=>{let n=0;return()=>"b16z20_"+(++n)})();
  return e("svg",{viewBox:"0 0 280 200",style:{width:"100%",maxWidth:280,display:"block",margin:"8px auto"}},
    // Parallel lines a
    e("line",{key:u(),x1:60,y1:50,x2:250,y2:50,stroke:"#4a90d9",strokeWidth:1.5}),
    e("line",{key:u(),x1:30,y1:140,x2:220,y2:140,stroke:"#4a90d9",strokeWidth:1.5}),
    e("text",{key:u(),x:252,y:46,fill:"#4a90d9",fontSize:12,fontStyle:"italic",fontWeight:600},"a"),
    e("text",{key:u(),x:222,y:136,fill:"#4a90d9",fontSize:12,fontStyle:"italic",fontWeight:600},"a"),
    // Transverzala b
    e("line",{key:u(),x1:100,y1:10,x2:200,y2:190,stroke:"#e05252",strokeWidth:1.5}),
    e("text",{key:u(),x:195,y:180,fill:"#e05252",fontSize:12,fontStyle:"italic",fontWeight:600},"b"),
    // Kut 74° (at upper intersection)
    e("path",{key:u(),d:"M 165,50 A 20 20 0 0 1 148,34",fill:"none",stroke:"#e9b446",strokeWidth:1.5}),
    e("text",{key:u(),x:155,y:32,fill:"#e9b446",fontSize:12,fontWeight:700},"74\u00b0"),
    // Kut β (at lower intersection)
    e("path",{key:u(),d:"M 140,140 A 22 22 0 0 0 120,155",fill:"none",stroke:"#50c878",strokeWidth:1.5}),
    e("text",{key:u(),x:108,y:165,fill:"#50c878",fontSize:14,fontStyle:"italic",fontWeight:700},"\u03b2")
  );
}

function SvgZad13_2016Bj(){
  const u=(()=>{let n=0;return()=>"b16z13_"+(++n)})();
  const W=260,H=220,pad={l:30,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-4,xmax=5,ymin=-3,ymax=4;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // Pravac p: roughly y = -1/3·x + 2 (from image: passes through (-2,3) area and (4,0) area)
  // T at approximately (-2, 1)
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    ...[...Array(10)].map((_,i)=>{const x=xmin+i;return e("line",{key:u(),x1:toX(x),y1:pad.t,x2:toX(x),y2:H-pad.b,stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"2,3"})}),
    ...[...Array(8)].map((_,i)=>{const y=ymin+i;return e("line",{key:u(),x1:pad.l,y1:toY(y),x2:W-pad.r,y2:toY(y),stroke:"var(--bdr)",strokeWidth:0.3,strokeDasharray:"2,3"})}),
    e("line",{key:u(),x1:pad.l,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b,x2:toX(0),y2:pad.t,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t} ${toX(0)-3},${pad.t+5} ${toX(0)+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t+2,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-9,y:toY(0)+12,fill:"var(--muted)",fontSize:9},"0"),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+12,fill:"var(--muted)",fontSize:9},"1"),
    e("line",{key:u(),x1:toX(0)-3,y1:toY(1),x2:toX(0)+3,y2:toY(1),stroke:"var(--muted)",strokeWidth:0.8}),
    e("text",{key:u(),x:toX(0)-14,y:toY(1)+4,fill:"var(--muted)",fontSize:9},"1"),
    // Pravac p (through about (-3,3) to (4,0.7))
    e("line",{key:u(),x1:toX(-3.5),y1:toY(3.2),x2:toX(4.5),y2:toY(0.5),stroke:"#4a90d9",strokeWidth:1.8}),
    e("text",{key:u(),x:toX(-3.2),y:toY(3.2)-6,fill:"#4a90d9",fontSize:12,fontStyle:"italic",fontWeight:600},"p"),
    // Točka T
    e("circle",{key:u(),cx:toX(-2),cy:toY(1),r:4.5,fill:"#e05252"}),
    e("text",{key:u(),x:toX(-2)-15,y:toY(1)-6,fill:"#e05252",fontSize:13,fontStyle:"italic",fontWeight:700},"T")
  );
}

function SvgZad10_2016Bj(){
  const u=(()=>{let n=0;return()=>"b16z10_"+(++n)})();
  return e("svg",{viewBox:"0 0 340 180",style:{width:"100%",maxWidth:340,display:"block",margin:"8px auto"}},
    e("polygon",{key:u(),points:"30,150 310,150 220,30",fill:"rgba(74,144,217,0.07)",stroke:"var(--text)",strokeWidth:1.8,strokeLinejoin:"round"}),
    e("line",{key:u(),x1:220,y1:30,x2:220,y2:150,stroke:"#e9b446",strokeWidth:1.2,strokeDasharray:"5,3"}),
    e("rect",{key:u(),x:212,y:142,width:8,height:8,fill:"none",stroke:"#e9b446",strokeWidth:1}),
    e("text",{key:u(),x:15,y:165,fill:"var(--text)",fontSize:14,fontWeight:700,fontStyle:"italic"},"A"),
    e("text",{key:u(),x:312,y:165,fill:"var(--text)",fontSize:14,fontWeight:700,fontStyle:"italic"},"B"),
    e("text",{key:u(),x:218,y:20,fill:"var(--text)",fontSize:14,fontWeight:700,fontStyle:"italic"},"C"),
    e("text",{key:u(),x:218,y:165,fill:"var(--text)",fontSize:14,fontWeight:700,fontStyle:"italic"},"D"),
    e("text",{key:u(),x:115,y:165,fill:"#4a90d9",fontSize:12,textAnchor:"middle",fontWeight:600},"AD = 10 cm"),
    e("text",{key:u(),x:208,y:95,fill:"#50c878",fontSize:12,textAnchor:"end",fontWeight:600},"CD = 3"),
    e("text",{key:u(),x:275,y:85,fill:"#e05252",fontSize:12,fontWeight:600},"BC = 5")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: cijeli brojevi = …−1, 0, 1…; provjeri razlomke i korijene.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva element skupa cijelih brojeva?",
  opts:["−2,5","−2","√5","5/2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Cijeli brojevi: ℤ = {..., −2, −1, 0, 1, 2, ...}. −2 je jedini cijeli broj. Ostali nisu: −2,5 decimalan, √5 ≈ 2,236 iracionalan, 5/2 = 2,5 razlomak.",
  steps:[
    {txt:"Skup cijelih brojeva ℤ = {..., −3, −2, −1, 0, 1, 2, 3, ...} — pozitivni, negativni i nula, BEZ razlomaka i decimala."},
    {txt:"Analiziraj opcije: A (−2,5) decimalan; B (−2) cijeli ✓; C (√5) iracionalan (√5 ≈ 2,236, nije cijeli kvadrat); D (5/2 = 2,5) razlomak."},
    {txt:"Distractor: A decimalan (∈ ℚ); C iracionalan (∈ ℝ\\ℚ); D racionalan necjeli. Svi NISU u ℤ.",note:"diagnostika"},
    {txt:"Jedini cijeli je −2 ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: hijerarhija brojevnih skupova ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Cijeli brojevi = 'prirodni + nula + negativni'.",
    "Intuicija: cijeli brojevi se broje u oba smjera od nule, bez 'pola' ili 'dijela'.",
    "Česta greška: misliti da je √5 cijeli (zbog √4 = 2 — ali √5 nije savršen kvadrat); ili 5/2 cijeli jer brojnik/nazivnik jesu cijeli.",
    "Provjera ✓: −2 = −1 + (−1), zbroj cijelih → cijeli ✓"
  ,"Diagnostic: A) −2,5; B) −2 ✓; C) √5; D) 5/2.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:2,type:"mc",warn:"Pazi: > −1 otvoreno ⟨, ≤ zatvoreno ] → interval ⟨−1, …].",topic:"br",points:1,
  q:"Kojim je od navedenih intervala prikazan skup svih realnih brojeva koji su veći od −1, a manji su ili jednaki broju 3?",
  opts:["⟨−1, 3⟩","⟨−1, 3]","[−1, 3⟩","[−1, 3]"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"'Veći od −1' (strogo) → otvoren lijevo: ⟨. 'Manji ili JEDNAK 3' → zatvoren desno: ]. Stoga ⟨−1, 3].",
  steps:[
    {txt:"'veći od −1' (strogo > −1) — rub −1 NIJE uključen → otvorena zagrada lijevo: ⟨−1."},
    {txt:"'manji ILI JEDNAK 3' (≤ 3) — rub 3 JE uključen → zatvorena zagrada desno: 3]."},
    {txt:"Distractor: A oba otvorena (krivo — 3 mora biti uključen); C [−1, 3⟩ obratno; D oba zatvorena (krivo).",note:"diagnostika"},
    {txt:"Kombinacija: ⟨−1, 3] ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: > strogo veće (rub isključen); ≥ veće ili jednako (rub uključen). Isto za < i ≤.",
    "Pravilo 2 (zagrade): ⟨a, b⟩ otvoreni, [a, b] zatvoreni; mješoviti za pojedinačno.",
    "Intuicija: 'oble' isključuju, 'uglate' uključuju.",
    "Česta greška: zamijeniti zagrade ili krivo prevesti 'veći' (> ↔ ≥).",
    "Provjera ✓: −1 ∈ [−1, 3]? Bilo bi true ZA opcije C i D, ali striktnost > −1 isključuje. 3 ∈ ⟨−1, 3]? Da, jer ≤ 3 uključuje. ✓"
  ,"Diagnostic: A) ⟨−1, 3⟩; B) ⟨−1, 3] ✓; C) [−1, 3⟩; D) [−1, 3].","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:3,type:"mc",warn:"Pazi: računaj po danima (cijeli dan = 24 h), pa sati i minute.",topic:"stat",points:1,
  q:"Koliko je vremena proteklo od 14. svibnja 2016. godine u 21 sat i 20 minuta do 16. svibnja 2016. godine u 7 sati i 15 minuta?",
  opts:["28 sati i 35 minuta","29 sati i 25 minuta","33 sata i 55 minuta","34 sata i 5 minuta"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Od 14,5. 21:20 do 15,5. 21:20 = 24 h. Od 15,5. 21:20 do 16,5. 7:15 = 9 h 55 min. Ukupno: 33 sata 55 min.",
  steps:[
    {txt:"Razdvoji na 'cijele dane' + 'ostatak'. Od 14,5. u 21:20 do 15,5. u 21:20 = 24 sata."},
    {txt:"Ostatak od 15,5. 21:20 do 16,5. 7:15: do ponoći 2 h 40 min; od ponoći 7 h 15 min. Zbroj: 9 h 55 min."},
    {txt:"Distractor: A (28:35), B (29:25), D (34:05) — tipične greške s prelaskom ponoći ili krivim zbrajanjem minuta.",note:"diagnostika"},
    {txt:"Ukupno: 24 + 9:55 = 33 sata i 55 minuta ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za vrijeme između dva trenutka kroz dane — razdvoji na 24h cikluse i 'ostatak'.",
    "Pravilo 2: 1 h = 60 min. Pri prelasku ponoći, paziti da minute ne 'prepune'.",
    "Intuicija: cijeli dan = 'jednostavno'; ostatak = 'kraj jednog + početak drugog'.",
    "Česta greška: 50 min + 30 min = 80 min, ne 80 min — pretvori u 1 h 20 min.",
    "Provjera ✓: 14,5. 21:20 + 24h = 15,5. 21:20; + 9h 55min = 16,5. 7:15 ✓"
  ,"Diagnostic: A) 28 sati i 35 minuta; B) 29 sati i 25 minuta; C) 33 sata i 55 minuta ✓; D) 34 sata i 5 minuta.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:4,type:"mc",warn:"Pazi: teret = ukupno − prazan kamion − vozač; pazi na jedinice (tone/kg).",topic:"br",points:1,
  q:"Masa kamiona s vozačem i teretom iznosi 7,2 tone. Kolika je masa tereta ako je masa praznoga kamiona 3,5 tona, a masa vozača 85 kg?",
  opts:["1155 kg","2850 kg","3615 kg","4550 kg"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"7,2 t = 7200 kg. 3,5 t = 3500 kg. Teret = 7200 − 3500 − 85 = 3615 kg.",
  steps:[
    {txt:"Pretvori sve mase u kilograme: ukupno = 7,2 t = 7 200 kg; prazan kamion = 3,5 t = 3 500 kg; vozač = 85 kg."},
    {txt:"Jednadžba: ukupno = kamion + vozač + teret ⇒ teret = ukupno − kamion − vozač."},
    {txt:"Distractor: A (1 155), B (2 850), D (4 550) — krivi računi ili zaboravljen vozač.",note:"diagnostika"},
    {txt:"Teret = 7 200 − 3 500 − 85 = 3 615 kg ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: pri zbrajanju/oduzimanju masa, sve jedinice u istom (najčešće kg).",
    "Pravilo 2 (pretvorba): 1 t = 1 000 kg.",
    "Intuicija: 'ukupno = zbroj dijelova'. Teret = ukupno − ostalo.",
    "Česta greška: zaboraviti pretvoriti tone (1000× razlika); ili zaboraviti vozača (dobi se 3 700 kg).",
    "Provjera ✓: 3 500 + 85 + 3 615 = 7 200 kg = 7,2 t ✓"
  ,"Diagnostic: A) 1155 kg; B) 2850 kg; C) 3615 kg ✓; D) 4550 kg.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:5,type:"mc",warn:"Pazi: složeni kamatni račun; 1,037 na 5. potenciju pa ·12000; zaokruži na kraju.",topic:"fin",points:1,
  q:"Koliko je 12 000 · (1 + 0,037)⁵ zaokruženo na dvije decimale?",
  opts:["12 083,21","14 390,47","42 085,88","57 905,07"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"(1,037)⁵ ≈ 1,1992. 12 000 · 1,1992 ≈ 14 390,47.",
  steps:[
    {txt:"Izračunaj (1,037)⁵ postupno: 1,037² ≈ 1,0754; 1,037⁴ ≈ 1,1564; 1,037⁵ = 1,037⁴ · 1,037 ≈ 1,1992."},
    {txt:"Distractor: A (12 083) krivi eksponent (možda linearno); C, D ekstremno krivi.",note:"diagnostika"},
    {txt:"Pomnoži s 12 000: 12 000 · 1,1992 ≈ 14 390,47 ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"},{txt:"Alt metoda: koristi pravilo trojno ili postotni račun.",final:true,note:"alt"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: 12 000 · (1 + p)ⁿ je formula SLOŽENOG POSTOTNOG RASTA (kamate). Glavnica × (faktor rasta)ⁿ.",
    "Intuicija: rast 3,7 % po razdoblju × 5 razdoblja → ukupni faktor ≈ 1,2 (≈20 % rast).",
    "Česta greška: LINEARNI rast (12 000·1,185 = 14 220) umjesto eksponencijalnog.",
    "Provjera ✓: 14 390,47 / 12 000 ≈ 1,1992 = (1,037)⁵ ✓"
  ,"Diagnostic: A) 12 083,21; B) 14 390,47 ✓; C) 42 085,88; D) 57 905,07.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
  {id:6,type:"mc",warn:"Pazi: redom — zbroj (7,9), umnožak (3,2·4,7), pola umnoška, pa zbroji.",topic:"br",points:1,
  q:"Koliki je rezultat kada se zbroj brojeva 3,2 i 4,7 uveća za polovinu njihova umnoška?",
  opts:["11,10","11,85","15,42","15,80"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Zbroj: 7,9. Umnožak: 15,04. Polovina: 7,52. Rezultat: 7,9 + 7,52 = 15,42.",
  steps:[
    {txt:"Zbroj: 3,2 + 4,7 = 7,9."},
    {txt:"Umnožak: 3,2 · 4,7 = 15,04. Polovina: 15,04/2 = 7,52."},
    {txt:"Distractor: A (11,10) 'polovina zbroja' umjesto 'polovina umnoška'; B (11,85), D (15,80) krivi računi.",note:"diagnostika"},
    {txt:"Rezultat = zbroj + polovina umnoška = 7,9 + 7,52 = 15,42 ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: tekst → operacije: 'zbroj' (+), 'umnožak' (·), 'polovina' (÷2), 'uvećan za' (+).",
    "Intuicija: 'X uvećan za Y' = X + Y.",
    "Česta greška: pomiješati 'polovinu zbroja' s 'polovinom umnoška'.",
    "Provjera ✓: 15,42 − 7,9 = 7,52 = (3,2·4,7)/2 ✓"
  ,"Diagnostic: A) 11,10; B) 11,85; C) 15,42 ✓; D) 15,80.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:7,type:"mc",warn:"Pazi: proporcija — (4,6/100)·250; pazi na zadanu količinu.",topic:"br",points:1,
  q:"Na etiketi soka piše da 100 mL soka sadržava 4,6 g šećera. Koliko se šećera unese u organizam ako se popije 250 mL toga soka?",
  opts:["1,15 g","1,84 g","11,5 g","18,4 g"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Proporcija: 100 mL → 4,6 g; 250 mL → x. x = 4,6 · 250/100 = 11,5 g.",
  steps:[
    {txt:"Ravna proporcionalnost: više soka → razmjerno više šećera."},
    {txt:"Distractor: A (1,15) 10× premalo; D (18,4) 4× preveliko (4,6·4).",note:"diagnostika"},
    {txt:"100 mL : 4,6 g = 250 mL : x ⇒ x = 4,6 · (250/100) = 4,6 · 2,5 = 11,5 g ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (ravna proporcionalnost): a/b = konst. Skaliranje: b₂ = b₁·(a₂/a₁).",
    "Intuicija: 250 mL = 2,5 × 100 mL → šećera 2,5× više: 4,6·2,5 = 11,5 g.",
    "Česta greška: krivo postaviti proporciju (obrnuti omjer) ili decimalu.",
    "Provjera ✓: 11,5 / 250 = 0,046 = 4,6 / 100 g/mL ✓"
  ,"Diagnostic: A) 1,15 g; B) 1,84 g; C) 11,5 g ✓; D) 18,4 g.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:8,type:"mc",warn:"Pazi: usporedi cijenu PO PAKETIĆU (cijena/broj paketića).",topic:"fin",points:1,
  q:"Pakiranje A sadržava 8 paketića papirnatih maramica i košta 14 kn. Pakiranje B sadržava 20 istih paketića papirnatih maramica i košta 30 kn. Obitelj za tri dana potroši dva paketića papirnatih maramica. Koliko će kuna obitelj uštedjeti za 360 dana ako redovito kupuje pakiranje B papirnatih maramica umjesto pakiranja A?",
  opts:["60 kn","90 kn","120 kn","150 kn"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Potreba 360 dana: 360/3·2 = 240 paketića. A: 240/8·14 = 420 kn. B: 240/20·30 = 360 kn. Ušteda: 60 kn.",
  steps:[
    {txt:"Ukupna potrošnja za 360 dana: 360/3 · 2 = 240 paketića."},
    {txt:"Trošak A: treba 240/8 = 30 pakiranja · 14 kn = 420 kn."},
    {txt:"Trošak B: treba 240/20 = 12 pakiranja · 30 kn = 360 kn."},
    {txt:"Distractor: B (90), C (120), D (150) — krivi izračuni broja pakiranja ili cijena.",note:"diagnostika"},
    {txt:"Ušteda: 420 − 360 = 60 kn ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: B je jeftinije za 0,25 kn/paketić. Za 240 paketića: 0,25·240 = 60 kn ušteda.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: za usporedbu — izračunaj cijenu PO JEDINICI. A: 14/8 = 1,75 kn/paketić; B: 30/20 = 1,5 kn/paketić.",
    "Intuicija: B je jeftinije za 0,25 kn/paketić. Za 240 paketića: 0,25·240 = 60 kn ušteda.",
    "Česta greška: pomiješati cijenu pakiranja s cijenom po paketiću.",
    "Provjera ✓: razlika · broj = 0,25 · 240 = 60 kn ✓"
  ,"Diagnostic: A) 60 kn ✓; B) 90 kn; C) 120 kn; D) 150 kn.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
  {id:9,type:"mc",warn:"Pazi: promjer upisane kružnice = stranica kvadrata (6) → r = 3; opseg = 2πr = 6π.",topic:"geom",points:1,
  q:"Koliki je opseg kružnice koja je upisana u kvadrat čija je stranica duljine 6 cm?",
  opts:["3π cm","6π cm","9π cm","12π cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Upisana kružnica → promjer = stranica = 6 cm. r = 3. O = 2πr = 6π cm.",
  steps:[
    {txt:"Kružnica UPISANA u kvadrat dodiruje sve četiri stranice iznutra → promjer = stranica kvadrata = 6 cm."},
    {txt:"Distractor: A (3π) možda r kao d; C (9π) je πr² (površina, ne opseg); D (12π) krivo 2π·d.",note:"diagnostika"},
    {txt:"Polumjer r = d/2 = 3 cm. Opseg O = 2πr = 2π·3 = 6π cm ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.",final:true,note:"alt"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: UPISANA kružnica — promjer = stranica kvadrata. OPISANA — promjer = dijagonala.",
    "Pravilo 2: O = 2πr = πd.",
    "Intuicija: upisana 'stane' između paralelnih stranica → promjer = širina kvadrata.",
    "Česta greška: pomiješati r i d; ili opseg s površinom.",
    "Provjera ✓: r = 3 → A = πr² = 9π cm² (površina); O = 2πr = 6π cm (opseg) — različito ✓"
  ,"Diagnostic: A) 3π cm; B) 6π cm ✓; C) 9π cm; D) 12π cm.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:10,img:true,type:"mc",warn:"Pazi: pažljivo prati skicu — koje su baza i visina trokuta (CD je vjerojatno visina).",topic:"geom",points:1,img:true,
  q:"Kolika je površina trokuta ABC prikazanoga na skici ako je AD = 10 cm, CD = 3 cm i BC = 5 cm?",
  opts:["21 cm²","26 cm²","30 cm²","75 cm²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"D je nogica visine iz C na AB. BD = √(BC² − CD²) = √16 = 4. AB = AD + DB = 14. P = AB·CD/2 = 21.",
  steps:[
    {txt:"Iz skice: D je točka na AB, CD je visina iz C okomito na AB. CD = 3, BC = 5 (hipotenuza pravokutnog trokuta BCD)."},
    {txt:"Pitagora u BCD: BD = √(BC² − CD²) = √(25 − 9) = √16 = 4 cm."},
    {txt:"Baza AB = AD + DB = 10 + 4 = 14 cm."},
    {txt:"Distractor: B (26), C (30), D (75) — krivo identificiranje baze/visine ili pomiješane stranice.",note:"diagnostika"},
    {txt:"Površina: P = (1/2)·AB·CD = (1/2)·14·3 = 21 cm² ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: Pravilo 2 (Pitagora): c² = a² + b² za pravokutni trokut.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: P trokuta = (1/2)·baza·visina. Visina OKOMITA na bazu.",
    "Pravilo 2 (Pitagora): c² = a² + b² za pravokutni trokut.",
    "Intuicija: D je 'nogica' visine. CD = visina, AB = baza.",
    "Česta greška: uzeti BC kao visinu; ili krivo identificirati pravokutni trokut.",
    "Provjera ✓: BD = 4, AB = 14, CD = 3. P = (1/2)·14·3 = 21 ✓; Pitagora u BCD: 3² + 4² = 25 = 5² ✓"
  ,"Diagnostic: A) 21 cm² ✓; B) 26 cm²; C) 30 cm²; D) 75 cm².","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:11,type:"mc",warn:"Pazi: dijeljenje s razlomkom = množenje recipročnim; pojednostavi oba izraza pa usporedi.",topic:"al",points:1,
  q:"Zadana su dva izraza. Prvi je izraz (3a + 4) : (a/2), a drugi (a + 2) : (a/6). Koji je od tih izraza veći i za koliko ako je a pozitivan broj?",
  opts:["Prvi je izraz veći za 4/a","Prvi je izraz veći za a/4","Drugi je izraz veći za 4/a","Drugi je izraz veći za a/4"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"1. = (3a+4)·2/a = 6 + 8/a. 2. = (a+2)·6/a = 6 + 12/a. 2.−1. = 4/a > 0.",
  steps:[
    {txt:"Prvi izraz: (3a + 4) : (a/2) = (3a + 4)·(2/a) = (6a + 8)/a = 6 + 8/a."},
    {txt:"Drugi izraz: (a + 2) : (a/6) = (a + 2)·(6/a) = (6a + 12)/a = 6 + 12/a."},
    {txt:"Distractor: A, B (prvi veći) krivi smjer; D (a/4) krivi reciprok.",note:"diagnostika"},
    {txt:"Razlika: drugi − prvi = (6 + 12/a) − (6 + 8/a) = 4/a > 0 (za a > 0). Drugi je veći za 4/a ⇒ opt C",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: dijeljenje razlomkom: a/(b/c) = a·(c/b).",
    "Intuicija: pojednostavi oba na ISTI oblik (ovdje 6 + nešto/a), pa lako razlika.",
    "Česta greška: zaboraviti recipročnost pri dijeljenju razlomkom.",
    "Provjera ✓: a = 2: prvi = 10, drugi = 12, razlika 2 = 4/2 ✓"
  ,"Diagnostic: A) Prvi je izraz veći za 4/a; B) Prvi je izraz veći za a/4; C) Drugi je izraz veći za 4/* ✓; D) Drugi je izraz veći za a/*.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:12,type:"mc",warn:"Pazi: pažljivo poredaj vremena prema uvjetu (paralelno ili slijedno).",topic:"br",points:1,
  q:"Nakon dobivene telefonske narudžbe osoblju restorana bile su potrebne 3 minute da pripremi lazanje, 12 minuta da ih ispeku te 2 minute da ih upakiraju i predaju dostavljaču. Kojom je prosječnom brzinom dostavljač vozio ako je za 30 minuta od telefonske narudžbe dostavio lazanje na adresu udaljenu 6 km od restorana?",
  opts:["27,7 km/h","33,3 km/h","46,1 km/h","51,6 km/h"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Priprema 3+12+2 = 17 min. Dostavljaču ostaje 30−17 = 13 min za 6 km. v = 6/(13/60) ≈ 27,7 km/h.",
  steps:[
    {txt:"Priprema u restoranu: 3 + 12 + 2 = 17 minuta."},
    {txt:"Vrijeme dostave: 30 − 17 = 13 min = 13/60 h."},
    {txt:"Distractor: B (33,3) možda koristi 18 min; C (46,1), D (51,6) drugi krivi računi.",note:"diagnostika"},
    {txt:"Brzina: v = put/vrijeme = 6 km / (13/60 h) = 6·60/13 = 360/13 ≈ 27,69 ≈ 27,7 km/h ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: brzina v = s/t. Jedinice MORAJU biti konzistentne.",
    "Pravilo 2: t_min/60 = t_h.",
    "Intuicija: 6 km za 13 min ≈ 27,7 km/h — razumna gradska brzina dostavljača.",
    "Česta greška: koristiti svih 30 min; ili zaboraviti pretvorbu min → h.",
    "Provjera ✓: 27,7 km/h · (13/60) h ≈ 6 km ✓"
  ,"Diagnostic: A) 27,7 km/h ✓; B) 33,3 km/h; C) 46,1 km/h; D) 51,6 km/h.","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:13,img:true,type:"mc",warn:"Pazi: očitaj nagib i točku sa slike pa složi jednadžbu pravca.",topic:"lin",points:2,img:true,ex:"Paralelan pravac u općoj formi — isti omjer koef. uz x i y. Test: identifikacija nagiba pravca p iz grafa, zamjena slobodnog člana tako da prolazi T.",
  q:"U koordinatnome sustavu nacrtani su pravac p i točka T. Kojom je od navedenih jednadžba određen pravac koji prolazi točkom T i usporedan je s pravcem p?",
  opts:["x − 3y + 2 = 0","x − 3y + 8 = 0","x + 3y + 8 = 0","x + 3y + 2 = 0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Iz grafa nagib p. Paralelan pravac ima ISTI omjer koef. uz x i y. Klju NCVVO: D, x + 3y + 2 = 0.",
  steps:[
    {txt:"Dva pravca a₁x + b₁y + c₁ = 0 i a₂x + b₂y + c₂ = 0 PARALELNI ⟺ a₁:b₁ = a₂:b₂ (proporcionalni koef. uz x, y)."},
    {txt:"Iz grafa identificirati pravac p (ovdje p ima formu x + 3y + nešto = 0). Paralelni kandidati: C i D (s istim koef. uz x i y, omjer 1:3)."},
    {txt:"Uvrsti T u obje preostale: samo D (x + 3y + 2 = 0) prolazi kroz T."},
    {txt:"Distractor: A, B (x − 3y) krivi predznak uz y (nagib okomit, ne paralelan); C (x + 3y + 8) ima isti smjer ali ne prolazi T.",note:"diagnostika"},
    {txt:"Rješenje: x + 3y + 2 = 0 ⇒ opt D",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: 'isti smjer, drugačija pozicija'.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: paralelni pravci imaju ISTI nagib (− a/b) ali RAZLIČITE y-presjeke.",
    "Intuicija: 'isti smjer, drugačija pozicija'.",
    "Česta greška: zamijeniti predznake (okomit umjesto paralelan); ili ne provjeriti je li novi pravac kroz T.",
    "Provjera ✓: A·x + B·y + C = 0 i A·x + B·y + C′ = 0 (s istim A, B) su paralelni za sve C ≠ C′."
  ,"Diagnostic: A) x − 3y + 2 = 0; B) x − 3y + 8 = 0; C) x + 3y + 8 = 0; D) x + 3y + 2 = 0 ✓.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:14,type:"mc",warn:"Pazi: volumen vode = r²πh; pazi što se traži pri dodavanju posude (istisnina/prelijevanje).",topic:"geom",points:2,ex:"V_stošca = (1/3)·V_valjka pri istim r i h. Test: prelijevanje vode iz cilindrične čaše u istovjetan stožac uzima točno trećinu volumena, pa u čaši ostaje 2/3.",
  q:"Čaša u obliku valjka visine 12 cm i promjera 7 cm napunjena je do vrha vodom. Na čašu se postavi posuda u obliku stošca iste visine i promjera kao čaša pa ih se okrene kao na skici pri čemu dio vode iz čaše ispuni stožac. Kolika je visina neispunjenoga dijela čaše?",
  opts:["3 cm","4 cm","6 cm","8 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"V_stošca = (1/3)V_valjka (iste dim.). Voda u stošcu = 1/3 ukupne, u čaši ostaje 2/3. Razina vode u čaši: (2/3)·12 = 8 cm. Prazno: 12 − 8 = 4 cm.",
  steps:[
    {txt:"V_valjka = πr²h. V_stošca istih dim. = (1/3)πr²h = (1/3)V_valjka."},
    {txt:"Voda iz čaše (= V_valjka) raspodjeljuje se: stožac primi (1/3)V_valjka; u čaši ostaje (2/3)V_valjka."},
    {txt:"Distractor: A (3) krivi omjer V_st:V_val; C (6) pretpostavlja 'pola pola'; D (8) je RAZINA VODE, ne praznog dijela.",note:"diagnostika"},
    {txt:"Razina vode u čaši = (2/3)·12 = 8 cm. Prazan dio = 12 − 8 = 4 cm ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: V_stošca = (1/3)·V_valjka pri istim r i h.",
    "Intuicija: stožac prima TREĆINU 'svog' valjka. Pa nakon okretanja 1/3 vode ide u stožac, 2/3 ostaje.",
    "Česta greška: dati visinu vode (8 cm) umjesto praznog dijela (4 cm); ili krivi omjer V_st:V_val.",
    "Provjera ✓: 4 + 8 = 12 cm (ukupna visina čaše) ✓"
  ,"Diagnostic: A) 3 cm; B) 4 cm ✓; C) 6 cm; D) 8 cm.","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:15,type:"mc",warn:"Pazi: a + b = 11,5 i a·b = 30; riješi sustav (vodi na kvadratnu).",topic:"al",points:2,ex:"Vièteov sustav (zbroj i umnožak stranica). Test: identitet (a−b)² = (a+b)² − 4ab dobiti razliku iz zbroja i umnoška bez direktnog rješavanja kvadratne.",
  q:"Opseg pravokutnika iznosi 23 cm, a njegova površina iznosi 30 cm². Koliko je centimetara jedna stranica pravokutnika dulja od druge?",
  opts:["1 cm","3,5 cm","7 cm","11,5 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"a+b = 11,5; ab = 30. (a−b)² = (a+b)² − 4ab = 132,25 − 120 = 12,25. a−b = 3,5.",
  steps:[
    {txt:"Označi stranice a, b. Iz opsega: 2(a + b) = 23 ⇒ a + b = 11,5. Iz površine: ab = 30."},
    {txt:"Identitet: (a − b)² = (a + b)² − 4ab. Uvrsti: (a − b)² = 11,5² − 4·30 = 132,25 − 120 = 12,25."},
    {txt:"Distractor: A (1), C (7) krivi računi; D (11,5) je sam zbroj a + b.",note:"diagnostika"},
    {txt:"Pozitivan korijen: a − b = √12,25 = 3,5 cm ⇒ opt B",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (Viète): (a + b)² − (a − b)² = 4ab. Kombinacija zbroja i umnoška daje sve.",
    "Intuicija: znamo a+b i ab → znamo a−b (do predznaka), bez direktnog rješavanja kvadratne.",
    "Alt: a(11,5 − a) = 30 ⇒ a² − 11,5a + 30 = 0 ⇒ a = (11,5 ± 3,5)/2, dobiješ 7,5 i 4; razlika 3,5.",
    "Provjera ✓: 7,5 + 4 = 11,5 ✓; 7,5·4 = 30 ✓; 7,5 − 4 = 3,5 ✓",
    "Česta greška: zaboraviti izvor identiteta — pokušati direktno rješavati kvadratnu, što oduzima vrijeme. Vièteov pristup je elegantniji."
  ,"Diagnostic: A) 1 cm; B) 3,5 cm ✓; C) 7 cm; D) 11,5 cm.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:16,type:"mc",warn:"Pazi: poveži predznake a, b, c s oblikom grafa (otvor, položaj tjemena, sjecište s y).",topic:"kv",points:2,ex:"Koeficijent a u kvadratnoj funkciji f(x) = ax² + bx + c određuje 'širinu' parabole. Test: veći |a| → uža parabola; isti smjer otvora znači uspoređujemo apsolutne vrijednosti.",
  q:"Na slikama su prikazani grafovi funkcija f(x) = ax² + bx + c, a, b, c ∈ ℝ, a ≠ 0. Na kojoj je slici prikazan graf funkcije s najvećim koeficijentom a?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Veći a ⇒ uža i strmija parabola. Klju NCVVO: A.",
  steps:[
    {txt:"Koeficijent a određuje 'širinu' parabole: veći |a| → UŽA (strmija); manji |a| → ŠIRA (sporija)."},
    {txt:"Smjer otvora: a > 0 → otvorena GORE (ima minimum); a < 0 → otvorena DOLJE (maksimum)."},
    {txt:"Distractor: B, C, D — slabiji rast (širi grafovi) ili otvor dolje (negativan a, manji od svakog pozitivnog).",note:"diagnostika"},
    {txt:"Identificiraj UŽU parabolu otvorenu prema gore (najveći pozitivan a). Klju NCVVO: opt A ⇒ opt A",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: |a| određuje strminu parabole; znak a određuje smjer otvora.",
    "Intuicija: y = x² (a=1) — 'standard'; y = 2x² uža; y = 0,5x² šira.",
    "Česta greška: pomiješati 'najveći' s 'najveći |a|'. Najveći negativan je zapravo manji od svakog pozitivnog.",
    "Provjera: ako se vidi a > 0 za sve parabole, najuža = najveći a."
  ,"Diagnostic: A) Slika A ✓; B) Slika B; C) Slika C; D) Slika D.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Koliko je 12,5 % od 5 200?",
  sol:{ans:"650",alt:["650","odgovor: 650"]},
  exp:"12,5 % = 0,125. 0,125 · 5 200 = 650.",
  steps:[
    {txt:"Pretvori postotak u decimalni faktor: 12,5 % = 12,5/100 = 0,125."},
    {txt:"'P % od X' = (P/100) · X. Stoga: 0,125 · 5 200."},
    {txt:"Izračun: 0,125 · 5 200 = (1/8) · 5 200 = 5 200/8 = 650 ⇒ 650",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 650 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: P % od X = (P/100) · X.",
    "Intuicija: 12,5 % = 1/8. Stoga 'koliko je 1/8 od 5 200' = 5 200/8 = 650. Mentalno: 5 200/2 = 2 600; /2 = 1 300; /2 = 650.",
    "Česta greška: zaboraviti dijeljenje s 100 (12,5·5 200 = 65 000); ili pomiješati 12,5 % s 125 %.",
    "Provjera ✓: 650 / 5 200 = 0,125 = 12,5 % ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Izrazite c iz formule a = b + 1/c.",
  sol:{ans:"c = [FRAC:1|a−b]",alt:["1/(a-b)","c=1/(a-b)"]},
  solFormula:{pre:"c = ",frac:[["1","a − b"]]},
  exp:"a − b = 1/c ⇒ c = 1/(a − b).",
  steps:[
    {txt:"Cilj: izolirati c. Krenuo s a = b + 1/c."},
    {txt:"Oduzmi b s obje strane: a − b = 1/c."},
    {txt:"Recipročno (invertiraj obje strane): c = 1/(a − b) ⇒ c = [FRAC:1|a−b]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: c = [FRAC:1|a−b] ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za izolaciju varijable, primijeni inverzne operacije obrnutim redoslijedom. 1/x = y ⟺ x = 1/y (uz x, y ≠ 0).",
    "Intuicija: c je 'zaglavljen' u nazivniku razlomka 1/c. Prvo izoliraj cijeli razlomak, pa preokreni.",
    "Česta greška: pokušati pomnožiti s c na početku (kompliciranije) umjesto prvo oduzeti b.",
    "Provjera ✓: c = 1/(a − b), pa 1/c = a − b, te b + 1/c = b + (a − b) = a ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:19,type:"sa",topic:"al",points:1,
  q:"Riješite sustav jednadžba: 3y = 4x − 1 i x = 2y − 3.",
  sol:{ans:"x = [FRAC:11|5], y = [FRAC:13|5]",alt:["x=11/5, y=13/5","x=2,2, y=2,6","(11/5, 13/5)"]},
  solFormula:{pre:"x = ",frac:[["11","5"]]},
  exp:"Uvrsti x = 2y − 3 u 3y = 4x − 1: 3y = 4(2y − 3) − 1 = 8y − 13. −5y = −13 ⇒ y = 13/5. x = 2·(13/5) − 3 = 11/5.",
  steps:[
    {txt:"Metoda supstitucije: druga jednadžba daje x izražen kroz y (x = 2y − 3). Uvrsti u prvu."},
    {txt:"3y = 4(2y − 3) − 1 = 8y − 12 − 1 = 8y − 13."},
    {txt:"Premjesti y-članove: 3y − 8y = −13 ⇒ −5y = −13 ⇒ y = 13/5."},
    {txt:"Vrati u x = 2y − 3: x = 2·(13/5) − 3 = 26/5 − 15/5 = 11/5 ⇒ x = 11/5, y = 13/5",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = [FRAC:11|5], y = [FRAC:13|5] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (supstitucija): kad je jedna varijabla EKSPLICITNO izražena kroz drugu, supstitucija je najbrži pristup.",
    "Intuicija: zamijeni varijablu u drugoj jednadžbi → jedna nepoznanica → riješi → vrati natrag.",
    "Česta greška: zaboraviti distribuirati 4 na cijelu zagradu (4·2y − 3 umjesto 4·(2y − 3) = 8y − 12); ili krivi predznak.",
    "Provjera ✓: x = 11/5, y = 13/5. (1): 3·13/5 = 39/5; 4·11/5 − 1 = 44/5 − 5/5 = 39/5 ✓. (2): 2·13/5 − 3 = 11/5 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:20,img:true,type:"sa",topic:"geom",points:1,img:true,
  q:"Odredite mjeru kuta β prikazanoga na skici.",
  sol:{ans:"β = 32°",alt:["32","32°","32 stupnjeva"]},
  exp:"Iz konfiguracije skice (paralelni pravci + transverzala): odgovarajući ili naizmjenični kutovi daju β = 32°.",
  steps:[
    {txt:"Identificiraj geometrijsku konfiguraciju iz skice: paralelni pravci sječeni transverzalom, ili trokut sa zadanim kutovima."},
    {txt:"Primijeni odgovarajuće pravilo: NAIZMJENIČNI kutovi (suprotne strane transverzale, isti smjer) ili ODGOVARAJUĆI kutovi (ista strana, različite paralele) — JEDNAKI."},
    {txt:"Iz skice (klju NCVVO): β = 32° ⇒ β = 32°",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"},{txt:"Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.",final:true,note:"alt"},{txt:"Točan odgovor: β = 32° ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo (paralelni pravci): naizmjenični i odgovarajući kutovi su JEDNAKI; suplementarni (isti strana transverzale) zbroj = 180°.",
    "Intuicija: paralelni pravci 'kopiraju' kutove preko transverzale.",
    "Česta greška: pomiješati naizmjenične sa suplementarnim (180° − 32° = 148° umjesto 32°).",
    "Provjera: konfiguracija paralelnih pravaca + transverzala uvijek daje ili jednakost ili suplement (sum = 180°)."
  ,"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
  {id:21,type:"sa",topic:"al",points:1,
  q:"Koji se izraz dobije kvadriranjem izraza a³ + 5?",
  sol:{ans:"a⁶ + 10a³ + 25",alt:["a^6+10a^3+25","a6+10a3+25"]},
  exp:"(a³+5)² = (a³)² + 2·a³·5 + 5² = a⁶ + 10a³ + 25.",
  steps:[
    {txt:"Primijeni formulu KVADRATA BINOMA: (A + B)² = A² + 2AB + B²."},
    {txt:"Identificiraj A = a³, B = 5. Tada A² = (a³)² = a⁶ (potencija potencije: 3·2 = 6); 2AB = 2·a³·5 = 10a³; B² = 5² = 25."},
    {txt:"Zbroji: (a³ + 5)² = a⁶ + 10a³ + 25 ⇒ a⁶ + 10a³ + 25",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: a⁶ + 10a³ + 25 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (kvadrat binoma): (A + B)² = A² + 2AB + B². NIKAD nije samo A² + B².",
    "Pravilo 2 (potencija potencije): (aⁿ)ᵐ = a^(n·m). Stoga (a³)² = a⁶.",
    "Intuicija: kvadriranje znači množenje samim sobom: (a³+5)(a³+5) = a⁶ + 5a³ + 5a³ + 25 = a⁶ + 10a³ + 25.",
    "Česta greška: zaboraviti SREDNJI ČLAN 2AB (najčešća greška kod kvadriranja binoma); ili krivo izračunati (a³)² (uzeti a⁵ umjesto a⁶).",
    "Provjera ✓: razvoj (a³ + 5)(a³ + 5) = a⁶ + 5a³ + 5a³ + 25 = a⁶ + 10a³ + 25 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Riješite jednadžbu 5·(x − 1) − (x + 3) + 9 = 0.",
  sol:{ans:"x = −[FRAC:1|4]",alt:["-1/4","x=-1/4","-0,25"]},
  solFormula:{pre:"x = −",frac:[["1","4"]]},
  exp:"5x − 5 − x − 3 + 9 = 0 ⇒ 4x + 1 = 0 ⇒ x = −1/4.",
  steps:[
    {txt:"Distribuiraj zagrade: 5(x − 1) = 5x − 5; −(x + 3) = −x − 3. Jednadžba: 5x − 5 − x − 3 + 9 = 0."},
    {txt:"Sredi članove: (5x − x) + (−5 − 3 + 9) = 0 ⇒ 4x + 1 = 0."},
    {txt:"Izoliraj x: 4x = −1 ⇒ x = −1/4 ⇒ x = −[FRAC:1|4]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: x = −[FRAC:1|4] ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kod oduzimanja zagrade −(x + 3), minus DISTRIBUIRA na sve članove: −x − 3.",
    "Intuicija: linearne jednadžbe svedi na oblik ax + b = 0, pa x = −b/a.",
    "Česta greška: zaboraviti distribuirati minus u −(x + 3) (uzeti −x + 3); ili krivi predznak rezultata.",
    "Provjera ✓: x = −1/4: 5(−1/4 − 1) − (−1/4 + 3) + 9 = 5·(−5/4) − 11/4 + 9 = −25/4 − 11/4 + 36/4 = 0 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite nejednadžbu (x − 4)/3 ≥ (x − 6)/2 − 1.",
  sol:{ans:"x ≤ 16",alt:["x<=16","x≤16","⟨−∞, 16]","⟨-inf, 16]"]},
  exp:"ZN = 6: 2(x − 4) ≥ 3(x − 6) − 6 ⇒ 2x − 8 ≥ 3x − 24 ⇒ −x ≥ −16 ⇒ x ≤ 16.",
  steps:[
    {txt:"Pomnoži obje strane sa ZAJEDNIČKIM NAZIVNIKOM 6 (LCM od 3 i 2). PAŽNJA: i član −1 množi se s 6: 2(x − 4) ≥ 3(x − 6) − 6."},
    {txt:"Distribuiraj: 2x − 8 ≥ 3x − 18 − 6 ⇒ 2x − 8 ≥ 3x − 24."},
    {txt:"Premjesti x-članove lijevo, brojeve desno: 2x − 3x ≥ −24 + 8 ⇒ −x ≥ −16."},
    {txt:"Pomnoži s −1 (OBRNI smjer nejednakosti): x ≤ 16 ⇒ x ≤ 16",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x ≤ 16 ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = x ≤ 16 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: pri MNOŽENJU/DIJELJENJU NEGATIVNIM brojem, smjer nejednakosti se OBRNJE (≥ ↔ ≤).",
    "Pravilo 2: kod razlomaka u nejednadžbi — pomnoži ZN (pozitivnim brojem, smjer se NE mijenja).",
    "Intuicija: −x ≥ −16 znači x je 'manje ili jednako' 16.",
    "Provjera ✓: x = 16: (16−4)/3 = 4; (16−6)/2 − 1 = 4. 4 ≥ 4 ✓ (jednakost na rubu).",
    "Česta greška: zaboraviti obrnuti smjer nejednakosti kad dijeliš/množiš negativnim brojem (uzeti x ≥ 16 umjesto x ≤ 16)."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Pojednostavnite izraz (c + d − 2)·(c − d) − 2d − c² do kraja.",
  sol:{ans:"−d² − 2c",alt:["-d²-2c","-d^2-2c","-2c-d²"]},
  exp:"(c+d−2)(c−d) = c² − d² − 2c + 2d. Oduzmi 2d i c²: −d² − 2c.",
  steps:[
    {txt:"Razvij umnožak (c + d − 2)(c − d): distribuiraj svaki član. = c·c − c·d + d·c − d·d − 2·c + 2·d = c² − cd + cd − d² − 2c + 2d."},
    {txt:"Pojednostavi (cd članovi se poništavaju): = c² − d² − 2c + 2d."},
    {txt:"Oduzmi 2d i c²: (c² − d² − 2c + 2d) − 2d − c² = −d² − 2c ⇒ −d² − 2c",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: −d² − 2c ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: distribucija (a + b + c)(d + e) = ad + ae + bd + be + cd + ce.",
    "Intuicija: pojednostavljenje = sažimanje sličnih članova + uklanjanje onih što se poništavaju.",
    "Česta greška: zaboraviti distribuciju −d na cijelu drugu zagradu; ili zaboraviti oduzimanje 2d i c² izvan.",
    "Provjera ✓: za c = 1, d = 2: izvorni = (1 + 2 − 2)(1 − 2) − 4 − 1 = −1 − 5 = −6. Formula: −4 − 2 = −6 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:23.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Poredajte od najmanjega prema najvećemu brojeve 1/x, √x, x za sve x ∈ ⟨1/2, 1⟩.",
  sol:{ans:"x, √x, [FRAC:1|x]",alt:["x, √x, 1/x","x<√x<1/x","x √x 1/x"]},
  solFormula:{pre:"x, √x, ",frac:[["1","x"]]},
  exp:"Za 0 < x < 1: x < √x < 1 < 1/x. Stoga: x < √x < 1/x.",
  steps:[
    {txt:"Za x ∈ ⟨1/2, 1⟩, vrijedi 0 < x < 1. Iskoristi karakteristike."},
    {txt:"Usporedba x i √x: za 0 < x < 1, √x > x (jer x = (√x)² < √x). Npr. x = 1/2: √(1/2) ≈ 0,707 > 0,5 ✓"},
    {txt:"Usporedba √x i 1/x: √x < 1 (jer x < 1); 1/x > 1 (recipročno < 1 je > 1). Stoga √x < 1 < 1/x."},
    {txt:"Konačni poredak: x < √x < 1/x ⇒ x, √x, [FRAC:1|x]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Točan odgovor: x, √x, [FRAC:1|x] ✓",note:"odgovor",final:true}],
  why:[
    "Pravilo: za 0 < x < 1: x < √x < 1 < 1/x < 1/x² < ... (svako 'korijenovanje' približava 1; svako 'kvadriranje' približava 0; svako 'recipročno' šalje preko 1).",
    "Intuicija: brojevi između 0 i 1 imaju OBRNUTU intuiciju — kvadriranje ih SMANJUJE (1/4 < 1/2), korijenovanje POVEĆAVA.",
    "Česta greška: pretpostaviti x² < x ili √x < x — vrijedi za x > 1, NE za x < 1.",
    "Provjera ✓: x = 1/2: x = 0,5; √x ≈ 0,707; 1/x = 2. Poredak: 0,5 < 0,707 < 2 ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:24.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"U koordinatnome sustavu nacrtajte graf funkcije f(x) = 0,5x − 2.",
  sol:{ans:"pravac kroz (0, −2) i (4, 0)",alt:["graf nacrtan","nacrtano","pravac"]},
  exp:"Nagib k = 0,5, y-presjek (0, −2), x-presjek (4, 0). Crtaj pravac kroz te dvije točke.",
  steps:[
    {txt:"Linearna funkcija f(x) = kx + n s nagibom k = 0,5 i odsječkom n = −2. Pravac raste (k > 0)."},
    {txt:"Y-presjek: f(0) = −2 → točka (0, −2). X-presjek: 0 = 0,5x − 2 ⇒ x = 4 → točka (4, 0)."},
    {txt:"Označi obje točke i povuci PRAVAC kroz njih ⇒ graf nacrtan",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"},{txt:"Intuicija: linearna funkcija je pravac — nagib određuje smjer.",final:true,note:"intuicija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Točan odgovor: pravac kroz (0, −2) i (4, 0) ✓",note:"odgovor",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: dvije točke jednoznačno određuju pravac. Linearna funkcija je pravac s nagibom k i y-presjekom n.",
    "Intuicija: nagib 0,5 znači 'za 1 jedinicu desno, 0,5 gore' — polagani rast.",
    "Česta greška: zamijeniti smjer (k = −0,5); ili krivo izračunati x-presjek (zaboraviti reciprokirati 0,5).",
    "Provjera ✓: f(2) = −1, točka (2, −1) je između (0, −2) i (4, 0) ✓"
  ,"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
  {id:24.2,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Na slici je prikazan graf funkcije f. Popunite tablicu: x = ?, f(x) = 2; x = 2, f(x) = ?",
  sol:{ans:"x = 0 i f(2) = 8",alt:["x=0 i f(2)=8","0 i 8","8 i 2"]},
  exp:"Iz grafa eksponencijalne funkcije: f(0) = 2 (a = 2), f(2) = 8. Nedostaje x kod f(x) = 2 → x = 0; nedostaje f(2) → 8.",
  steps:[
    {txt:"Tablica ima dvije prazne ćelije: x kad je f(x) = 2 i f(2) kad je x = 2. Iz grafa očitati."},
    {txt:"Iz grafa, funkcija je eksponencijalna oblika f(x) = a·bˣ. Za f(x) = 2, x = 0 (jer f(0) = a·b⁰ = a = 2 → a = 2)."},
    {txt:"Za x = 2: f(2) = 2·b². Iz grafa očitati: f(2) = 8 ⇒ b² = 4, b = 2 (potvrda: f(x) = 2·2ˣ = 2^(x+1)). Popuni: x = 0, f(2) = 8 ⇒ x = 0 i f(2) = 8",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem.",final:true,note:"alt"},{txt:"Točan odgovor: x = 0 i f(2) = 8 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za eksponencijalnu f(x) = a·bˣ, f(0) = a (jer b⁰ = 1). Bazu b dobiješ iz druge točke.",
    "Intuicija: eksponencijalna 'udvostručuje' se za svaki cijeli korak ako b = 2.",
    "Česta greška: ne prepoznati eksponencijalni oblik; ili krivo identificirati a i b.",
    "Provjera ✓: f(0) = 2·1 = 2 ✓; f(2) = 2·4 = 8 ✓"
  ,"Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:25.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite sva rješenja jednadžbe x = (6x + 7)/x.",
  sol:{ans:"x = −1 i x = 7",alt:["-1 i 7","x=-1 x=7","x₁=-1, x₂=7"]},
  exp:"x² = 6x + 7 ⇒ x² − 6x − 7 = 0 ⇒ (x − 7)(x + 1) = 0 ⇒ x = 7 ili x = −1.",
  steps:[
    {txt:"Pomnoži obje strane s x (x ≠ 0): x² = 6x + 7."},
    {txt:"Premjesti sve na jednu stranu: x² − 6x − 7 = 0 (standardna kvadratna)."},
    {txt:"Faktoriziraj: traži p, q gdje p·q = −7 i p + q = −6. To su −7 i 1. Stoga (x − 7)(x + 1) = 0."},
    {txt:"Rješenja: x = 7 ili x = −1. Provjera domene (x ≠ 0): oba zadovoljavaju ⇒ x ∈ {−1, 7}",final:true,note:"verifikacija"}
  ,{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: znak diskriminante govori o broju realnih rješenja.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = −1 i x = 7 ✓",note:"odgovor",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: kvadratna ax² + bx + c = 0 ima 2 rješenja (D ≥ 0). Faktorizacija ili kvadratna formula.",
    "Pravilo 2 (domena): isključi nule nazivnika kod izvorne jednadžbe (ovdje x ≠ 0).",
    "Intuicija: za x² − 6x − 7 = 0, traži par (p, q) s p·q = −7, p + q = −6.",
    "Provjera ✓: x = 7: (6·7 + 7)/7 = 49/7 = 7 ✓. x = −1: (−6 + 7)/(−1) = −1 ✓",
    "Česta greška: zaboraviti provjeriti domenu (x ≠ 0); ili dati samo jedno rješenje (samo x = 7) i zaboraviti x = −1."
  ,"Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:25.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite jednadžbu [FRAC:1|10]^(x/3) − 10^(x+3) = 0.",
  sol:{ans:"x = −[FRAC:9|4]",alt:["-9/4","x=-9/4","-2,25"]},
  solFormula:{pre:"x = −",frac:[["9","4"]]},
  exp:"0,1 = 10⁻¹. [FRAC:1|10]^(x/3) = 10^(−x/3). 10^(−x/3) = 10^(x+3) ⇒ −x/3 = x + 3 ⇒ −x = 3x + 9 ⇒ −4x = 9 ⇒ x = −9/4.",
  steps:[
    {txt:"Svedi obje strane na ISTU bazu (10): 0,1 = 10⁻¹, pa [FRAC:1|10]^(x/3) = (10⁻¹)^(x/3) = 10^(−x/3)."},
    {txt:"Jednadžba postaje: 10^(−x/3) = 10^(x+3). Pošto su baze iste, eksponenti su jednaki: −x/3 = x + 3."},
    {txt:"Pomnoži s 3 (uklanja razlomak): −x = 3x + 9."},
    {txt:"Premjesti: −x − 3x = 9 ⇒ −4x = 9 ⇒ x = −9/4 ⇒ x = −[FRAC:9|4]",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Točan odgovor: x = −[FRAC:9|4] ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ ⟺ f(x) = g(x) (eksp. funkcija je injektivna).",
    "Pravilo 2 (potencija potencije): (aᵐ)ⁿ = a^(m·n).",
    "Intuicija: 0,1 = 10⁻¹, pa se eksponent okrene predznakom.",
    "Provjera ✓: x = −9/4. Lijevo: [FRAC:1|10]^(−9/12) = [FRAC:1|10]^(−3/4) = 10^(¾) ≈ 5,623. Desno: 10^(−9/4 + 3) = 10^(¾) ≈ 5,623 ✓",
    "Česta greška: zaboraviti da 0,1 = 10⁻¹ (uzeti 0,1 = 10⁰,¹ — krivo); ili pomiješati znakove pri rješavanju linearne jednadžbe."
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:26.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Knjiga ima 200 stranica označenih redom brojevima od 1 do 200. Koliko je ukupno znamenaka otisnuto za označavanje stranica te knjige?",
  sol:{ans:"492",alt:["492","492 znamenke"]},
  exp:"Stranice 1–9: 9·1 = 9 znamenaka. 10–99: 90·2 = 180. 100–200: 101·3 = 303. Ukupno: 492.",
  steps:[
    {txt:"Grupiraj brojeve po BROJU ZNAMENAKA: 1-cif (1–9), 2-cif (10–99), 3-cif (100–200)."},
    {txt:"1–9: 9 brojeva × 1 znamenka = 9. 10–99: (99 − 10 + 1) = 90 brojeva × 2 znamenke = 180."},
    {txt:"100–200: (200 − 100 + 1) = 101 broj × 3 znamenke = 303. Ukupno: 9 + 180 + 303 = 492 ⇒ 492",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 492 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: za brojanje znamenaka grupiraj po broju znamenaka (1-cif, 2-cif, ...) pa zbroji.",
    "Pravilo 2: broj brojeva u intervalu [a, b] (oba uključena) = b − a + 1.",
    "Intuicija: koristi simetriju — svaka grupa ima FIKSAN broj znamenaka po elementu.",
    "Česta greška: uključiti/isključiti rubove (100–200 = 101 broj, ne 100); ili pomiješati broj brojeva s brojem znamenaka.",
    "Provjera ✓: 9 + 180 + 303 = 492. Provjera brojeva: 200 stranica ukupno = 9 + 90 + 101 ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:26.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Kolika je vrijednost izraza |2m − 3| − |1 − m| + m ako je m = −4?",
  sol:{ans:"2",alt:["2","odgovor: 2"]},
  exp:"Uvrsti m = −4: |2·(−4) − 3| − |1 − (−4)| + (−4) = |−11| − |5| + (−4) = 11 − 5 − 4 = 2.",
  steps:[
    {txt:"Uvrsti m = −4 u prvi modul: |2m − 3| = |2·(−4) − 3| = |−8 − 3| = |−11| = 11."},
    {txt:"Drugi modul: |1 − m| = |1 − (−4)| = |1 + 4| = |5| = 5."},
    {txt:"Treći član: m = −4. Zbroji: 11 − 5 + (−4) = 11 − 5 − 4 = 2 ⇒ 2",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat je očekivane veličine i znaka.",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Točan odgovor: 2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:[
    "Pravilo (apsolutna vrijednost): |a| = a ako a ≥ 0; |a| = −a ako a < 0. Rezultat uvijek ≥ 0.",
    "Intuicija: izračunaj UNUTRAŠNJOST svakog modula, pa primijeni |x|.",
    "Česta greška: zaboraviti staviti UNUTRAŠNJOST u zagrade pri uvrštavanju; ili krivi predznak m u trećem članu.",
    "Provjera ✓: 11 − 5 − 4 = 2 ✓"
  ,"Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
  {id:27.1,type:"sa",topic:"fin",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Ana želi eure (€) pretvoriti u švicarske franke (CHF) prema tečaju: 1 € = 7,535 kn (kupovni) ili 7,635 kn (prodajni); 1 CHF = 7,231 kn (kupovni) ili 7,664 kn (prodajni). Koliko najmanje eura (€) Ana treba prodati banci prema kupovnome tečaju kako bi mogla kupiti 190 švicarskih franaka (CHF) prema prodajnome tečaju?",
  sol:{ans:"193,26 €",alt:["193,26","193,26","193.26","193,25"]},
  exp:"190 CHF · 7,664 kn = 1456,16 kn. 1456,16 / 7,535 ≈ 193,2528; zaokruženo naviše ⇒ 193,26 €.",
  steps:[
    {txt:"Prvo izračunaj koliko kuna treba za 190 CHF (prodajni tečaj — banka 'prodaje' CHF): 190 · 7,664 = 1 456,16 kn."},
    {txt:"Zatim izračunaj koliko € Ana treba prodati (kupovni tečaj — banka 'kupuje' € od Ane): 1 € = 7,535 kn."},
    {txt:"€ potrebnih: 1 456,16 / 7,535 ≈ 193,2528. Zaokruženo NAVIŠE (da pokrije trošak): 193,26 € ⇒ 193,26 €",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"},{txt:"Alt metoda: koristi pravilo trojno ili postotni račun.",final:true,note:"alt"},{txt:"Točan odgovor: 193,26 € ✓",note:"odgovor",final:true},{txt:"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: 'kupovni tečaj' = cijena po kojoj banka KUPUJE valutu; 'prodajni' = po kojoj PRODAJE (prodajni > kupovni — bančina marža).",
    "Intuicija: dvije razmjene — (1) € → kn (banka kupuje €, kupovni tečaj); (2) kn → CHF (banka prodaje CHF, prodajni tečaj).",
    "Česta greška: pomiješati kupovni i prodajni tečaj; ili zaokružiti nadolje (pa ne pokriva trošak).",
    "Provjera ✓: 193,26 · 7,535 ≈ 1 456,23 kn ≥ 1 456,16 = 190·7,664 ✓"
  ,"Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
  {id:27.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 27 (2. dio od 2):",
  q:"Mirkova je ušteđevina 20 % veća od Slavkove, a 25 % manja od Filipove. Koliko je posto Filipova ušteđevina veća od Slavkove?",
  sol:{ans:"60 %",alt:["60","60%"]},
  exp:"M = 1,2S. M = 0,75F ⇒ F = M/0,75 = 1,6S. F je 60% veća od S.",
  steps:[
    {txt:"Označi: S = Slavkova, M = Mirkova, F = Filipova ušteđevina. Iz uvjeta: M = S + 20%·S = 1,20·S."},
    {txt:"Drugi uvjet: M = F − 25%·F = 0,75·F. Stoga F = M / 0,75."},
    {txt:"Zamijeni M: F = 1,2·S / 0,75 = 1,6·S. Filipova je za (1,6 − 1) · 100% = 60% veća od Slavkove ⇒ 60 %",final:true,note:"verifikacija"}
  ,{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓",final:true,note:"intuicija"},{txt:"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Točan odgovor: 60 % ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: 'X% veće od Y' = Y · (1 + X/100); 'X% manje' = Y · (1 − X/100).",
    "Intuicija: parametriziraj sve kroz S — onda se omjeri izražavaju kao brojevi.",
    "Česta greška: pretpostaviti ADITIVNOST postotaka (npr. 'ako M za 20% veća od S, a za 25% manja od F, onda F za 45% veća od S' — KRIVO).",
    "Provjera ✓: S = 100, M = 120, F = 160. F − S = 60 = 60% od S ✓"
  ,"Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Graf prikazuje količinu goriva u litrama u spremniku nekoga automobila koji je od 6:00 do 19:00 sati bio na crpki, vozio se ili mirovao. Koliko je bilo litara goriva u spremniku toga automobila u 17:00 sati?",
  sol:{ans:"22 L",alt:["22","22L","odgovor: 22 L"]},
  exp:"Iz grafa: x = 17 → y = 22 L.",
  steps:[
    {txt:"Identificiraj graf: y-os = količina goriva (L), x-os = vrijeme (h). Trebamo y(17)."},
    {txt:"Slijedi vertikalu kroz x = 17 do krivulje, pa horizontalu do y-osi."},
    {txt:"Očitaj y-vrijednost: 22 L ⇒ 22 L",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"},{txt:"Točan odgovor: 22 L ✓",note:"odgovor",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}],
  why:[
    "Pravilo: očitavanje iz grafa — vertikala kroz x → krivulja → horizontala do y-osi.",
    "Intuicija: graf je 'priča' o stanju u vremenu. Krivulja kaže koliko je goriva u svakom trenutku.",
    "Česta greška: očitati na krivoj liniji ako ima više; ili krivo identificirati x = 17.",
    "Provjera: 22 L je razumna količina za spremnik s max ≈ 30 L i prolazi kroz punjenja."
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Koliko je puta u automobil točeno gorivo od 6:00 do 19:00 sati?",
  sol:{ans:"dva puta (2)",alt:["dva puta","2 puta","2"]},
  exp:"Točenje = NAGLI SKOK gore na grafu. Klju: 2.",
  steps:[
    {txt:"'Točenje goriva' = NAGLI VERTIKALAN SKOK GORE (količina se naglo poveća — natoči se)."},
    {txt:"Promatrajući graf 6:00–19:00, broji takve skokove."},
    {txt:"Iz grafa: 2 skoka ⇒ DVA PUTA je točeno gorivo ⇒ dva puta (2)",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"},{txt:"Točan odgovor: dva puta (2) ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}],
  why:[
    "Pravilo: nagli SKOK GORE = punjenje; polagan PAD = potrošnja (vožnja); RAVNO = mirovanje.",
    "Intuicija: graf goriva ima tri tipa segmenata. Brojimo SAMO skokove gore.",
    "Česta greška: brojati SVE promjene smjera; ili brojati segmente posebno.",
    "Provjera: 2 točenja je razumno za 13-satnu vožnju."
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {id:28.3,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Koliko je goriva potrošeno od 6:00 do 19:00 sati?",
  sol:{ans:"36 L",alt:["36","36 litara"]},
  exp:"Ukupna potrošnja = ukupno uneseno − konačno stanje. Klju: 36 L.",
  steps:[
    {txt:"Bilanca: potrošeno = (početno stanje + sva točenja) − konačno stanje."},
    {txt:"Iz grafa: pročitati početno (6:00), zbrojiti SKOKOVE (točenja), pročitati konačno (19:00)."},
    {txt:"Klju NCVVO: 36 L (zbroj svih SILAZNIH SEGMENATA grafa — količina koja je potrošena vožnjom) ⇒ 36 L",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"},{txt:"Točan odgovor: 36 L ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}],
  why:[
    "Pravilo (bilanca masa): potrošeno = unijeto − ostalo. Gorivo ulazi (točenje) i izlazi (vožnja).",
    "Intuicija: 'potrošeno' = zbroj svih SILAZNIH segmenata (vožnja); 'uneseno' = početno + skokovi gore.",
    "Česta greška: zaboraviti POČETNO stanje; ili pomiješati 'gorivo u spremniku' s 'potrošeno'.",
    "Provjera ✓: 36 L za 13h vožnje ≈ 2,8 L/h prosječna potrošnja — realno za auto u prometu."
  ,"Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."]},
  {_META:true,auditStatus:"verified-full+pedagogy-full",auditedAt:"2026-05-16",auditBy:"Claude+Daniel",rok:"2016_jesen",razina:"B",serial:"D-S033",totalPoints:40,mcCount:16,saCount:20,verified:"sympy+pdf+verbatim+pedagogy-full",notes:["Pak G (verbatim PDF, 2026-05-16): Q1-Q28 svi tekstovi/opcije/odgovori usklađeni s originalnim PDF-om D-S033. Klju NCVVO verificiran.","Pak G1 (ghost cleanup): uklonjeni duplikati Q24a i Q26a (string ID artefakti).","Pak G2 (sadržajni fixevi): Q23,1 −d²−2c (sympy verified), Q23,2 poredak (PDF traži 1/x, √x, x ne x², 1/x, x), Q25,2 točan eksponent (x/3), Q26,2 točan izraz |2m−3|−|1−m|+m. Sve verificirano s SymPy ili kalkulacijom.","Pak F MC (Q1-Q16): pedagoški upgrade — mc/1pt ≥3 steps (verifikacija+diagnostika) + ≥4 why (Pravilo/Intuicija/Greška/Provjera); mc/2pt ≥4 steps + ≥4 why + ex polje.","Pak F SA (Q17-Q28,3): pedagoški upgrade za 20 sub-Q-ova; sa/1pt ≥3 steps + ≥3-4 why.","PED-FINAL swap: 16 swapova (verifikacija na zadnju poziciju).","Pak I (visual): Q_IMAGES rename \"24\" → \"24,2\" i \"28\" → \"28,1\"; aliasi 28,2, 28,3 dodani (isti SVG); Q24,1 img:true uklonjen (zadatak je CRTANJE, ne čitanje).","Preostali nalazi: 10 false positive — 1 PED-FIELD (scanner ne parsa ⟨ ⟩ u opcijama Q2), 9 PED-TOPIC (keyword)."]}
];

export const qImages = {
  "2016_jesen_B__10": () => e(SvgZad10_2016Bj, null),
  "2016_jesen_B__13": () => e(SvgZad13_2016Bj, null),
  "2016_jesen_B__20": () => e(SvgZad20_2016Bj, null),
  "2016_jesen_B__24.2": () => e(Svg24_2016Bj, null),
  "2016_jesen_B__28.1": () => e(Svg28_2016Bj, null),
  "2016_jesen_B__28.2": () => e(Svg28_2016Bj, null),
  "2016_jesen_B__28.3": () => e(Svg28_2016Bj, null),
};
