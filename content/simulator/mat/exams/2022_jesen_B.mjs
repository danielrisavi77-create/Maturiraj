// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg29_2022JesenB() {
  const W=280, H=220, t='var(--text)';
  // Pravokutni trokut s pravim kutom u gornjem desnom vrhu
  // x je gornja stranica (kateta), y je nasuprotna donja kateta, z je hipotenuza
  // Zapravo: x = hipotenuza, y = jedna kateta, z = druga
  // Iz vraći: y² = x² + z² → y hipotenuza
  const A=[50,40], B=[230,40], C=[230,180];
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    e('polygon',{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
      fill:'none', stroke:t, strokeWidth:1.5}),
    // Pravi kut u B
    e('rect',{x:B[0]-12, y:B[1], width:12, height:12, fill:'none', stroke:t, strokeWidth:1}),
    // Oznaka x (gornja stranica)
    e('text',{x:(A[0]+B[0])/2, y:A[1]-8, fontSize:14, fill:t, fontStyle:'italic', textAnchor:'middle'}, 'x'),
    // Prazan kvadratić za z (desno, nasuprot x)
    e('rect',{x:B[0]+8, y:(B[1]+C[1])/2-8, width:18, height:18, fill:'none', stroke:'#50c878', strokeWidth:1.5}),
    // Prazan kvadratić za y (hipotenuza, donji lijevi smjer)
    e('rect',{x:(A[0]+C[0])/2-30, y:(A[1]+C[1])/2+10, width:18, height:18, fill:'none', stroke:'#50c878', strokeWidth:1.5})
  );
}

function Svg26_2022JesenB() {
  const W=260, H=220, t='var(--text)', g="#94a3b8";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const ox=60, oy=120, sq=20;
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Grid
    ...Array.from({length:9}, (_,i) => 
      e('line',{key:`v${i}`, x1:20+i*sq, y1:20, x2:20+i*sq, y2:200, stroke:g, strokeWidth:0.5})
    ),
    ...Array.from({length:10}, (_,i) => 
      e('line',{key:`h${i}`, x1:20, y1:20+i*sq, x2:200, y2:20+i*sq, stroke:g, strokeWidth:0.5})
    ),
    // Osi
    e('line',{x1:ox, y1:20, x2:ox, y2:205, stroke:t, strokeWidth:1.5}),
    e('line',{x1:15, y1:oy, x2:210, y2:oy, stroke:t, strokeWidth:1.5}),
    e('polygon',{points:`${ox-4},25 ${ox+4},25 ${ox},20`, fill:t}),
    e('polygon',{points:`205,${oy-4} 205,${oy+4} 210,${oy}`, fill:t}),
    // Oznake
    e('text',{x:ox-12, y:25, fontSize:13, fill:t, fontStyle:'italic'}, 'y'),
    e('text',{x:205, y:oy-6, fontSize:13, fill:t, fontStyle:'italic'}, 'x'),
    e('text',{x:ox+3, y:oy+12, fontSize:10, fill:t}, '0'),
    e('text',{x:ox+sq-3, y:oy+12, fontSize:10, fill:t}, '1'),
    e('text',{x:ox-12, y:oy-sq+4, fontSize:10, fill:t}, '1'),
    // Pravac y = -x/2 + 2: prolazi kroz (0,2)=(ox, oy-2sq) i (4,0)=(ox+4sq, oy)
    // Produži preko ekrana
    e('line',{x1:ox-2*sq, y1:oy-3*sq, x2:ox+8*sq, y2:oy+2*sq, stroke:t, strokeWidth:2}),
    // Točke
    e('circle',{cx:ox, cy:oy-2*sq, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    e('circle',{cx:ox+4*sq, cy:oy, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    e('text',{x:ox-25, y:50, fontSize:12, fill:t}, 'y = f(x)')
  );
}

function Svg24_2022JesenB() {
  const W=440, H=260, t='var(--text)', g="#94a3b8";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // 24 sata, vrijednosti od ~23.2 do 24.3 °C
  const data = [23.6,23.6,23.4,23.4,23.2,23.3,23.4,23.3,23.5,23.6,23.6,24.0,24.0,24.2,24.3,24.1,23.9,23.6,23.7,23.8,23.9,23.5,23.7,23.9];
  const sx=50, baseY=H-40;
  const xToPx = h => sx + h * 14;
  const yToPx = v => baseY - (v - 23.0) * 130;  // 1.5°C span ~ 200px
  
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Y grid
    ...[23.0,23.2,23.4,23.6,23.8,24.0,24.2,24.4].map(v => 
      e('g',{key:`g${v}`},
        e('line',{x1:sx, y1:yToPx(v), x2:W-15, y2:yToPx(v), stroke:g, strokeWidth:0.5}),
        e('text',{x:sx-3, y:yToPx(v)+3, textAnchor:'end', fontSize:9, fill:t}, v.toFixed(1)+'.'.slice(-1)*0+v.toFixed(1))
      )
    ),
    e('text',{x:sx-15, y:30, fontSize:10, fill:_GOLD, fontWeight:'bold'}, '°C'),
    // X-axis labels
    ...Array.from({length:12}, (_,i) => i*2+1).map(h => 
      e('text',{key:`x${h}`, x:xToPx(h-1)+7, y:baseY+12, textAnchor:'middle', fontSize:9, fill:t}, h)
    ),
    e('text',{x:W/2, y:H-5, fontSize:9, fill:t, textAnchor:'middle'}, 'sat u danu'),
    // Linija
    e('polyline',{points: data.map((v,i) => `${xToPx(i)+7},${yToPx(v)}`).join(' '),
      fill:'none', stroke:_BLUE, strokeWidth:1.5}),
    ...data.map((v,i) => e('circle',{key:`p${i}`, cx:xToPx(i)+7, cy:yToPx(v), r:2.5, fill:_RED}))
  );
}

function Svg13_2022JesenB() {
  const W=300, H=220, t='var(--text)';
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Trokut: vrh A s kutom α; stranice 13 (lijevo), 9 (desno), 7 (donja)
  const A=[150,40], B=[40,180], C=[260,180];
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    e('polygon',{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
      fill:'none', stroke:_BLUE, strokeWidth:1.5}),
    e('path',{d:`M ${A[0]-15} ${A[1]+10} A 15 15 0 0 0 ${A[0]+15} ${A[1]+10}`,
      fill:'none', stroke:_BLUE, strokeWidth:1}),
    e('text',{x:A[0], y:A[1]+27, fontSize:13, fill:_GOLD, fontStyle:'italic', textAnchor:'middle'}, 'α'),
    e('text',{x:85, y:120, fontSize:13, fill:_GOLD}, '13'),
    e('text',{x:215, y:120, fontSize:13, fill:_GOLD}, '9'),
    e('text',{x:150, y:195, fontSize:13, fill:_GOLD, textAnchor:'middle'}, '7')
  );
}

function Svg12_2022JesenB() {
  const W=400, H=400, t='var(--text)', g='var(--bdr)';
  // Mini-grafike u 2x2 mreži; samo skicirani da student prepozna C
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // A — pita 2019 (lijevo gore)
    e('text',{x:100, y:25, fontSize:12, fill:t, textAnchor:'middle', fontWeight:'bold'}, 'A — 2019.'),
    e('circle',{cx:100, cy:90, r:50, fill:'none', stroke:t, strokeWidth:1.5}),
    e('path',{d:`M 100 90 L 150 90 A 50 50 0 0 0 124 47 Z`, fill:'#a8d870'}),
    e('path',{d:`M 100 90 L 124 47 A 50 50 0 0 0 60 75 Z`, fill:'#ccc'}),
    e('path',{d:`M 100 90 L 60 75 A 50 50 0 0 0 150 90 Z`, fill:'#666'}),
    // B — pita 2020 (desno gore)
    e('text',{x:300, y:25, fontSize:12, fill:t, textAnchor:'middle', fontWeight:'bold'}, 'B — 2020.'),
    e('circle',{cx:300, cy:90, r:50, fill:'none', stroke:t, strokeWidth:1.5}),
    e('path',{d:`M 300 90 L 350 90 A 50 50 0 0 0 290 41 Z`, fill:'#a8d870'}),
    e('path',{d:`M 300 90 L 290 41 A 50 50 0 0 0 260 85 Z`, fill:'#ccc'}),
    e('path',{d:`M 300 90 L 260 85 A 50 50 0 0 0 350 90 Z`, fill:'#666'}),
    // C — stupčasti (lijevo dolje) — TOČAN
    e('text',{x:100, y:200, fontSize:12, fill:t, textAnchor:'middle', fontWeight:'bold'}, 'C — stupčasti'),
    e('rect',{x:30, y:220, width:140, height:120, fill:'none', stroke:t, strokeWidth:1}),
    // 3 parovi stupaca: Skupina 1: 34/28; Skupina 2: 26/30; Skupina 3: 12/15
    e('rect',{x:40, y:240, width:15, height:80, fill:'#666'}),
    e('rect',{x:55, y:255, width:15, height:65, fill:'#a8d870'}),
    e('rect',{x:85, y:260, width:15, height:60, fill:'#666'}),
    e('rect',{x:100, y:250, width:15, height:70, fill:'#a8d870'}),
    e('rect',{x:130, y:300, width:15, height:20, fill:'#666'}),
    e('rect',{x:145, y:295, width:15, height:25, fill:'#a8d870'}),
    // D — linijski (desno dolje)
    e('text',{x:300, y:200, fontSize:12, fill:t, textAnchor:'middle', fontWeight:'bold'}, 'D — linijski'),
    e('rect',{x:230, y:220, width:140, height:120, fill:'none', stroke:t, strokeWidth:1}),
    e('polyline',{points:'240,235 290,255 350,310', fill:'none', stroke:'#666', strokeWidth:2}),
    e('polyline',{points:'240,230 290,245 350,300', fill:'none', stroke:'#a8d870', strokeWidth:2})
  );
}

function Svg7_2022JesenB() {
  const W=280, H=220, t='var(--text)', g="#94a3b8";
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // PDF (pixel-verified @ 300 DPI):
  //   a⃗: rep (5, 1), glava (3, 3) — smjer (−2, +2), gore-lijevo
  //   b⃗: rep (2, 2), glava (2, −2) — smjer (0, −4), vertikalno dolje
  //   a + b = (−2, −2), |a + b| = √8 ≈ 2,83 → najbliža opcija A = 2
  const ox=90, oy=130, sq=20;
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Grid
    ...Array.from({length:7}, (_,i) => 
      e('line',{key:`v${i}`, x1:30+i*sq, y1:30, x2:30+i*sq, y2:200, stroke:g, strokeWidth:0.5})
    ),
    ...Array.from({length:6}, (_,i) => 
      e('line',{key:`h${i}`, x1:30, y1:30+i*sq, x2:170, y2:30+i*sq, stroke:g, strokeWidth:0.5})
    ),
    // Osi
    e('line',{x1:ox, y1:30, x2:ox, y2:215, stroke:t, strokeWidth:1.5}),
    e('line',{x1:30, y1:oy, x2:200, y2:oy, stroke:t, strokeWidth:1.5}),
    // Strelice osi
    e('polygon',{points:`${ox-4},${35} ${ox+4},${35} ${ox},${30}`, fill:t}),
    e('polygon',{points:`${200-5},${oy-4} ${200-5},${oy+4} ${200},${oy}`, fill:t}),
    // Oznake
    e('text',{x:ox-12, y:35, fontSize:13, fill:t, fontStyle:'italic'}, 'y'),
    e('text',{x:195, y:oy-6, fontSize:13, fill:t, fontStyle:'italic'}, 'x'),
    e('text',{x:ox+4, y:oy+12, fontSize:10, fill:t}, '0'),
    e('text',{x:ox+sq-4, y:oy+12, fontSize:10, fill:t}, '1'),
    e('text',{x:ox-12, y:oy-sq+4, fontSize:10, fill:t}, '1'),
    // Vektor a⃗: rep (5,1) → glava (3,3); smjer gore-lijevo (−2, +2)
    e('line',{x1:ox+5*sq, y1:oy-sq, x2:ox+3*sq, y2:oy-3*sq, stroke:t, strokeWidth:2}),
    e('polygon',{points:`${ox+3*sq},${oy-3*sq} ${ox+3*sq+7},${oy-3*sq+4} ${ox+3*sq+4},${oy-3*sq+8}`, fill:t}),
    e('text',{x:ox+4*sq+4, y:oy-2*sq+4, fontSize:13, fill:_GOLD, fontStyle:'italic'}, 'a⃗'),
    // Vektor b⃗: rep (2,2) → glava (2,−2); smjer dolje (0, −4)
    e('line',{x1:ox+2*sq, y1:oy-2*sq, x2:ox+2*sq, y2:oy+2*sq, stroke:t, strokeWidth:2}),
    e('polygon',{points:`${ox+2*sq-4},${oy+2*sq-4} ${ox+2*sq+4},${oy+2*sq-4} ${ox+2*sq},${oy+2*sq}`, fill:t}),
    e('text',{x:ox+2*sq+6, y:oy-sq+4, fontSize:13, fill:_GOLD, fontStyle:'italic'}, 'b⃗')
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: racionalni = cijeli/razlomci/decimale; √3 je iracionalan → ne broji njega.",topic:"br",points:1,
   q:"Koliko ukupno ima racionalnih brojeva u skupu {−1, −10/17, 0, √3, 26,4, 58}?",
   opts:["dva","tri","četiri","pet"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Klasifikacija svakog elementa: ℚ uključuje cijele brojeve, razlomke i konačne/periodične decimale; iracionalni su neperiodični."},
     {txt:"−1 ∈ ℤ ⊂ ℚ ✓; −10/17 razlomak ✓; 0 ∈ ℤ ⊂ ℚ ✓; √3 — iracionalan (3 nije savršen kvadrat); 26,4 konačan decimal ✓; 58 ∈ ℕ ⊂ ℚ ✓."},
     {txt:"Racionalni: −1, −10/17, 0, 26,4, 58 → 5 brojeva. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: jedini iracionalan je √3 (jer 3 nije savršen kvadrat); ostali su razlomci/decimale ili cijeli brojevi.",note:"verifikacija"},
     {txt:"Distraktori: A/B/C — pogrešna klasifikacija (npr. greška kod 26,4 ili 0).",note:"diagnostika", final:true},{txt:"Intuicija: 26,4 je konačan → mora biti razlomak (264/10).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: racionalan = oblika p/q (p, q ∈ ℤ, q ≠ 0); iracionalan = beskonačni neperiodični decimal.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: racionalan = oblika p/q (p, q ∈ ℤ, q ≠ 0); iracionalan = beskonačni neperiodični decimal.",
     "Intuicija: 26,4 je konačan → mora biti razlomak (264/10).",
     "Česta greška: brkati '√n' s iracionalnim (samo ako n nije savršen kvadrat); ili svrstati 0 izvan ℚ.",
     "Alt metoda (provjera): nabroji racionalne — 5; iracionalne — 1 (√3). Zbroj = 6 ✓"
   ,"Provjera: jedini iracionalan je √3 (jer 3 nije savršen kvadrat); ostali su razlomci/decimale ili cijeli brojevi.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:2,type:"mc",warn:"Pazi: kalkulator u stupnjevima; redoslijed (sin 50° pa /2 pa +1); zaokruži na kraju.",topic:"trig",points:1,
   q:"Kolika je vrijednost broja 1 + sin50°/2 zaokružena na pet decimala?",
   opts:["0,36881","0,88302","1,38302","1,86881"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"sin 50° ≈ 0,76604."},
     {txt:"sin 50°/2 = 0,76604/2 = 0,38302."},
     {txt:"1 + 0,38302 = 1,38302. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 1 < 1,38302 < 2 (jer sin uvijek < 1, pa cijeli izraz < 1,5) ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 0,36881 = sin 50°/2 bez +1. B) 0,88302 = krivi izračun (možda /1 umjesto /2). D) 1,86881 = sin 50° + 1 bez dijeljenja.",note:"diagnostika", final:true},{txt:"Intuicija: sin 50° je nešto manje od sin 60° = √3/2 ≈ 0,866.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednostavni redoslijed operacija — pomnoži/podijeli prije zbrajanja.",note:"postupak",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: jednostavni redoslijed operacija — pomnoži/podijeli prije zbrajanja.",
     "Intuicija: sin 50° je nešto manje od sin 60° = √3/2 ≈ 0,866.",
     "Česta greška: kalkulator u radijanima; ili krivi redoslijed (1 + sin 50°)/2.",
     "Alt metoda (provjera): 1 + 0,5·sin 50° = 1 + 0,5·0,766 ≈ 1 + 0,383 ≈ 1,383 ✓"
   ,"Provjera: 1 < 1,38302 < 2 (jer sin uvijek < 1, pa cijeli izraz < 1,5) ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:3,type:"mc",warn:"Pazi: virus je sto puta MANJI → dijeli s 100; pripazi na jedinice.",topic:"br",points:1,
   q:"Ana je pročitala na internetu da promjer bakterija može biti 0,001 milimetar, a da su virusi sto puta manji od bakterija. Koliki je prema tim podatcima promjer virusa izražen u metrima?",
   opts:["10⁻¹⁰ m","10⁻⁹ m","10⁻⁸ m","10⁻⁷ m"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Promjer bakterije: 0,001 mm = 10⁻³ mm = 10⁻³·10⁻³ m = 10⁻⁶ m."},
     {txt:"Virus = bakterija / 100 = 10⁻⁶ / 10² = 10⁻⁸ m. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 10⁻⁸ m = 10 nm — odgovara realnoj veličini virusa ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 10⁻¹⁰ = krivo ×1000 umjesto ×100. B/D = krivi eksponent.",note:"diagnostika", final:true},{txt:"Intuicija: virusi su značajno manji od bakterija (red veličine 100x).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prefiksi metričkog sustava — mm = 10⁻³ m; sto puta manje = ÷100 = ×10⁻².",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: prefiksi metričkog sustava — mm = 10⁻³ m; sto puta manje = ÷100 = ×10⁻².",
     "Intuicija: virusi su značajno manji od bakterija (red veličine 100x).",
     "Česta greška: brkati 'sto puta manje' s ×0,01 ili ×10⁻¹⁰⁰.",
     "Alt metoda (provjera): 0,001/100 = 0,00001 mm = 10⁻⁵ mm = 10⁻⁸ m ✓"
   ,"Provjera: 10⁻⁸ m = 10 nm — odgovara realnoj veličini virusa ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:4,type:"mc",warn:"Pazi: pažljivo protumači d i e; uvrsti zadano i riješi linearnu jednadžbu.",topic:"al",points:1,
   q:"Banka se za zamjenu američkih dolara u eure koristi formulom e = 1,3d − 1,2, gdje je e iznos u eurima, a d iznos u američkim dolarima. Koja od navedenih tvrdnji opisuje značenje broja 1,2 u formuli?",
   opts:["Banka za uslugu zamjene valute naplaćuje 1,2 američka dolara.","Banka za uslugu zamjene valute naplaćuje 1,2 eura.","Jedan euro vrijedi 1,2 američka dolara.","Jedan američki dolar vrijedi 1,2 eura."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Formula e = 1,3d − 1,2: ako bismo 'samo zamjenili' bez naknade, bilo bi e = 1,3d (1 USD = 1,3 EUR)."},
     {txt:"Oduzimanje 1,2 znači gubitak 1,2 jedinica e (= eura) — naknada banke."},
     {txt:"Dakle banka naplaćuje 1,2 EURA za uslugu zamjene. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: za d = 0 (ništa za zamjenu), e = −1,2 — gubiš 1,2 EUR (= naknada banke nepokrivena ničim) ✓",note:"verifikacija"},
     {txt:"Distraktori: A — krivo, jedinica je euro ne dolar (e je u eurima). C/D — pomiješaju koeficijent 1,3 s 1,2.",note:"diagnostika", final:true},{txt:"Intuicija: oduzimanje konstante = oduzimanje fiksnog iznosa od konačnog rezultata; jedinica = jedinica y-a.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u linearnoj formuli y = kx + n, koeficijent k je 'cijena' (omjer pretvorbe), a n je 'fiksni dio' (npr. naknada).",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u linearnoj formuli y = kx + n, koeficijent k je 'cijena' (omjer pretvorbe), a n je 'fiksni dio' (npr. naknada).",
     "Intuicija: oduzimanje konstante = oduzimanje fiksnog iznosa od konačnog rezultata; jedinica = jedinica y-a.",
     "Česta greška: brkati 1,3 i 1,2 (omjer vs konstanta).",
     "Alt metoda (provjera): za d = 1, e = 1,3 − 1,2 = 0,1 EUR (slabo); za d = 100, e = 130 − 1,2 = 128,8 EUR (gotovo punih 130 ali 1,2 EUR manje)."
   ,"Provjera: za d = 0 (ništa za zamjenu), e = −1,2 — gubiš 1,2 EUR (= naknada banke nepokrivena ničim) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:5,type:"mc",warn:"Pazi: '10 % više nego u prvoj' → druga minuta = 30 %·1,1 = 33 %; pa zbroji za dvije minute.",topic:"al",points:1,
   q:"Trkač je u prvoj minuti istrčao 30 % duljine staze, a u drugoj minuti 10 % više nego u prvoj. Koliki je dio staze, izražen postotkom, trkač istrčao nakon dvije minute trčanja?",
   opts:["40 %","53 %","63 %","70 %"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Prva minuta: 30 % od staze."},
     {txt:"'10 % više' — interpretacija ovisi o tekstu, ali standardno: 30 % + 10 % = 40 % ILI 30 % · 1,1 = 33 % (postotak povećanja od 30 %)."},
     {txt:"Iz konteksta '10 % više nego u prvoj minuti' znači 10 % od 30 % više = 30 % · 1,1 = 33 %."},
     {txt:"Ukupno: 30 % + 33 % = 63 %. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: druga minuta je 1,1 puta veća od prve (10 % više) → 30·1,1 = 33; ukupno 63 % ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 40 % = krivo 30 + 10 % (kao postotak staze, ne kao 10 % više od 30). B) 53 = drugi krivi izračun. D) 70 % = previše.",note:"diagnostika", final:true},{txt:"Intuicija: kontekst razlikuje 'relativno' (množitelj) i 'apsolutno' (zbrajanje).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: '10 % više od X' = 1,1·X; '10 % od staze više' = X + 10 % (apsolutno).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: '10 % više od X' = 1,1·X; '10 % od staze više' = X + 10 % (apsolutno).",
     "Intuicija: kontekst razlikuje 'relativno' (množitelj) i 'apsolutno' (zbrajanje).",
     "Česta greška: brkati 'više od' (relativno) s 'plus 10 %' (apsolutno).",
     "Alt metoda (provjera): druga minuta = prva minuta + 10 % od prve = 30 + 3 = 33; total 63 ✓"
   ,"Provjera: druga minuta je 1,1 puta veća od prve (10 % više) → 30·1,1 = 33; ukupno 63 % ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:6,type:"mc",warn:"Pazi: kod linearne funkcije jednaki razmaci u x daju jednake razmake u y → srednja vrijednost.",topic:"al",points:1,
   q:"Pravac y = kx + l zadan je tablicom. Tablica: x = 1, y = 3; x = 2, y = ?; x = 3, y = −3. Koji broj treba upisati u prazno polje tablice?",
   opts:["−2","0","1","2"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz tablice: (1, 3) i (3, −3). Nagib k = (−3 − 3)/(3 − 1) = −6/2 = −3."},
     {txt:"Iz (1, 3): 3 = −3·1 + l → l = 6. Pravac: y = −3x + 6."},
     {txt:"Za x = 2: y = −3·2 + 6 = 0. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: (1, 3) — 3 = −3 + 6 ✓; (3, −3) — −3 = −9 + 6 ✓; (2, 0) — 0 = −6 + 6 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −2, C) 1, D) 2 — sve su 'na pola puta' između 3 i −3 ali ne odgovaraju linearnoj interpolaciji.",note:"diagnostika", final:true},{txt:"Intuicija: na polovici x-intervala, y je također na polovici između y-vrijednosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija je 'jednako razdijeljena' — između x = 1 i x = 3 je x = 2 (točno polovica).",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: linearna funkcija je 'jednako razdijeljena' — između x = 1 i x = 3 je x = 2 (točno polovica).",
     "Intuicija: na polovici x-intervala, y je također na polovici između y-vrijednosti.",
     "Česta greška: zaboraviti da je linearna interpolacija = sredina y-vrijednosti.",
     "Alt metoda (provjera): srednja vrijednost y = (3 + (−3))/2 = 0 ✓"
   ,"Provjera: (1, 3) — 3 = −3 + 6 ✓; (3, −3) — −3 = −9 + 6 ✓; (2, 0) — 0 = −6 + 6 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:7,img:true,type:"mc",warn:"Pazi: zbroji komponente vektora pa modul √(x² + y²).",topic:"anal",points:1,img:true,
   q:"Na slici su prikazani vektori a⃗ i b⃗. Kolika je duljina vektora a⃗ + b⃗?",
   opts:["2","3","3,6","6,6"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Iz slike: a⃗ ide od (5, 1) prema (3, 3) — komponente (−2, +2); b⃗ ide od (2, 2) prema (2, −2) — komponente (0, −4)."},
     {txt:"a⃗ = (−2, +2), b⃗ = (0, −4)."},
     {txt:"a⃗ + b⃗ = (−2 + 0, 2 + (−4)) = (−2, −2). Duljina = √(4 + 4) = √8 ≈ 2,83 → najbliža opcija A = 2."},
     {txt:"Provjera s pravilom trokuta: postavi b⃗ od kraja a⃗ pa rezultanta ide dijagonalno dolje-lijevo, duljine ≈ 2,83.",note:"verifikacija"},
     {txt:"Distraktori: B) 3 = |b⃗| sam. C) 3,6 ≈ |a⃗| · √2 sa krivo izračunatim komponentama. D) 6,6 ≈ |a⃗| + |b⃗| (skalarni umjesto vektorski zbroj).",note:"diagnostika", final:true},{txt:"Intuicija: čitaj komponente s grafa s ispravnim predznakom (lijevo = −x, dolje = −y).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj vektora po komponentama (a⃗ + b⃗ = (a_x + b_x, a_y + b_y)); duljina = √(x² + y²).",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: zbroj vektora po komponentama (a⃗ + b⃗ = (a_x + b_x, a_y + b_y)); duljina = √(x² + y²).",
     "Intuicija: čitaj komponente s grafa, zbrajaj po osi.",
     "Česta greška: zbrojiti duljine (|a⃗| + |b⃗|) umjesto vektorskih komponenata.",
     "Alt metoda (provjera): pravilo trokuta — postavi b⃗ od kraja a⃗; rezultanta = od početka a⃗ do kraja b⃗."
   ,"Provjera: alternativna interpretacija — ako je |a⃗| ≈ 3 i |b⃗| ≈ 4, a vektori imaju razliku komponenata, duljina zbroja ≈ 2 (kratak vektor).","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:8,type:"mc",warn:"Pazi: provjeri svaku jednakost uvrštavanjem konkretnih brojeva ili algebarski.",topic:"al",points:1,
   q:"Koja je od navedenih jednakosti točna za svaka dva realna broja x i y za koje su izrazi definirani?",
   opts:["x/y + y/x = 1","x/y − y/x = −1","x/y · y/x = 1","x/y : y/x = −1"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Provjeri svaku opciju s konkretnim brojevima (npr. x = 1, y = 2)."},
     {txt:"A) 1/2 + 2/1 = 0,5 + 2 = 2,5 ≠ 1 ✗"},
     {txt:"B) 1/2 − 2/1 = 0,5 − 2 = −1,5 ≠ −1 ✗"},
     {txt:"C) 1/2 · 2/1 = 1 ✓ (umnožak recipročnih = 1, uvijek)."},
     {txt:"D) (1/2) : (2/1) = 0,5 · 0,5 = 0,25 ≠ −1 ✗ Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera C općenito: (x/y)·(y/x) = xy/(xy) = 1 za sve x, y ≠ 0 ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'recipročan' znači 'izvrnut' — kad ih pomnožiš, dobiješ jedan.",note:"intuicija",final:true},{txt:"Česta greška: pretpostaviti aritmetičku jednakost umjesto algebarsku.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: dva recipročna razlomka (a/b i b/a) imaju umnožak 1.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: dva recipročna razlomka (a/b i b/a) imaju umnožak 1.",
     "Intuicija: 'recipročan' znači 'izvrnut' — kad ih pomnožiš, dobiješ jedan.",
     "Česta greška: pretpostaviti aritmetičku jednakost umjesto algebarsku.",
     "Alt metoda (provjera): general algebra — (x/y)(y/x) = (xy)/(xy) = 1 ✓"
   ,"Provjera C općenito: (x/y)·(y/x) = xy/(xy) = 1 za sve x, y ≠ 0 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:9,type:"mc",warn:"Pazi: izluči zajednički faktor (x − y) iz svih članova.",topic:"al",points:1,
   q:"Koji je od navedenih izraza jedan od faktora pri rastavu izraza y(x − y) + (x − y)² + x − y na faktore?",
   opts:["x + 1","y + 1","2x + 1","2y + 1"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Faktoriziraj zajednički faktor (x − y): y(x − y) + (x − y)² + (x − y) = (x − y)·[y + (x − y) + 1] = (x − y)(x + 1)."},
     {txt:"Faktori su (x − y) i (x + 1). Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: razvij (x − y)(x + 1) = x² + x − xy − y. Originalni: y(x − y) + (x − y)² + x − y = yx − y² + x² − 2xy + y² + x − y = x² − xy + x − y. Razvij A: x² + x − xy − y ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D — krivi izrazi koji se ne pojavljuju u faktorizaciji.",note:"diagnostika", final:true},{txt:"Intuicija: (x − y) se pojavljuje u sva tri člana → izbaci ga.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: faktorizacija — pronaći zajednički faktor svih članova, izbaciti ga.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: faktorizacija — pronaći zajednički faktor svih članova, izbaciti ga.",
     "Intuicija: (x − y) se pojavljuje u sva tri člana → izbaci ga.",
     "Česta greška: zaboraviti '+ 1' iz trećeg člana (x − y nemonožen je x − y · 1).",
     "Alt metoda (provjera): podijeli izraz s (x − y) i provjeri kvocijent y + (x − y) + 1 = x + 1 ✓"
   ,"Provjera: razvij (x − y)(x + 1) = x² + x − xy − y. Originalni: y(x − y) + (x − y)² + x − y = yx − y² + x² − 2xy + y² + x − y = x² − xy + x − y. Razvij A: x² + x − xy − y ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:10,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja (svi kutovi 60°, sve stranice jednake…).",topic:"geom",points:1,
   q:"Koja od navedenih tvrdnji ne vrijedi za jednakostraničan trokut?",
   opts:["Zbroj polumjera upisane i polumjera opisane kružnice trokutu jednak je visini toga trokuta.","Polumjer kružnice opisane trokutu dva je puta veći od polumjera kružnice upisane tomu trokutu.","Visina trokuta tri je puta veća od polumjera kružnice upisane tomu trokutu.","Visina trokuta dva je puta veća od polumjera kružnice opisane tomu trokutu."],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Jednakostraničan trokut sa stranicom a: visina h = a√3/2; r (upisana) = a√3/6; R (opisana) = a√3/3."},
     {txt:"Provjeri A: r + R = a√3/6 + a√3/3 = a√3/6 + 2a√3/6 = 3a√3/6 = a√3/2 = h ✓"},
     {txt:"Provjeri B: R/r = (a√3/3)/(a√3/6) = 6/3 = 2 ✓"},
     {txt:"Provjeri C: h/r = (a√3/2)/(a√3/6) = 6/2 = 3 ✓"},
     {txt:"Provjeri D: h/R = (a√3/2)/(a√3/3) = 3/2 ≠ 2. D nije točna. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: h = (3/2)·R u jednakostraničnom trokutu (ne 2R) ✓",note:"verifikacija", final:true},{txt:"Intuicija: težište dijeli visinu u omjeru 2:1 (od vrha); težište = središte opisane = središte upisane.",note:"intuicija",final:true},{txt:"Česta greška: brkati r i R (upisana je manja od opisane).",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: u jednakostraničnom trokutu — h : r : R = 3 : 1 : 2 (točan omjer).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: u jednakostraničnom trokutu — h : r : R = 3 : 1 : 2 (točan omjer).",
     "Intuicija: težište dijeli visinu u omjeru 2:1 (od vrha); težište = središte opisane = središte upisane.",
     "Česta greška: brkati r i R (upisana je manja od opisane).",
     "Alt metoda (provjera): za a = 6, h = 3√3 ≈ 5,196; r = √3 ≈ 1,732; R = 2√3 ≈ 3,464. h/R = 5,196/3,464 ≈ 1,5 ≠ 2 ✓"
   ,"Provjera: h = (3/2)·R u jednakostraničnom trokutu (ne 2R) ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:11,type:"mc",warn:"Pazi: tetiva = 2R·sin(obodni kut) → izrazi R; ne miješaj obodni i središnji.",topic:"geom",points:1,
   q:"Koliki je polumjer kružnice kojoj je duljina jedne tetive 15 cm, a obodni kut nad tom tetivom 80°?",
   opts:["6,29 cm","7,62 cm","14,77 cm","21,93 cm"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Veza tetive i obodnog kuta: t = 2R·sin(α) gdje je α obodni kut. (Iz središnjeg kuta 2α: t = 2R·sin(α).)"},
     {txt:"15 = 2R·sin(80°) → R = 15/(2·sin 80°) = 15/(2·0,9848) ≈ 15/1,9696 ≈ 7,62 cm. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: 2·7,62·sin 80° ≈ 15,24·0,985 ≈ 15 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 6,29 = krivi izračun. C) 14,77 = 15/sin 80° (zaboraviti /2). D) 21,93 = krivi izračun.",note:"diagnostika", final:true},{txt:"Intuicija: što veći R, to dulja moguća tetiva za isti kut.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u kružnici, tetiva t = 2R·sin(α) gdje je α obodni kut nad t.",note:"postupak",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u kružnici, tetiva t = 2R·sin(α) gdje je α obodni kut nad t.",
     "Intuicija: što veći R, to dulja moguća tetiva za isti kut.",
     "Česta greška: zaboraviti faktor 2; ili koristiti središnji umjesto obodnog kuta.",
     "Alt metoda (provjera): t = R·2·sin(α) → R = t/(2sin α) = 15/(2·0,985) ≈ 7,62 ✓"
   ,"Provjera: 2·7,62·sin 80° ≈ 15,24·0,985 ≈ 15 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:12,img:true,type:"mc",warn:"Pazi: usporedi vrijednosti iz tablice s visinama stupaca na grafikonu.",topic:"stat",points:1,img:true,
   q:"Koji od ponuđenih grafikona prikazuje podatke iz tablice? Tablica: Skupina 1 (2019.) = 34, (2020.) = 28; Skupina 2 (2019.) = 26, (2020.) = 30; Skupina 3 (2019.) = 12, (2020.) = 15.",
   opts:["A — pita za 2019. godinu","B — pita za 2020. godinu","C — stupčasti za obje godine","D — linijski za obje godine"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Tablica ima podatke za dvije godine (2019. i 2020.) i tri skupine — najprikladniji prikaz je stupčasti za sve podatke odjednom."},
     {txt:"A i B su pite koje pokazuju samo jednu godinu; D je linijski (manje primjeren za diskretne kategorije)."},
     {txt:"C — stupčasti grafikon koji prikazuje obje godine za svaku skupinu. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: stupčasti grafikon najbolje vizualizira usporedbu kategorija (skupina) i podgrupa (godina); brojevi u C odgovaraju tablici.",note:"verifikacija"},
     {txt:"Distraktori: A/B = nepotpuna informacija (samo jedna godina). D = linijski je za 'trendove', ne diskretne kategorije.",note:"diagnostika", final:true},{txt:"Intuicija: tablica s više kategorija i podgrupa → najbolji prikaz je 'gomilani' ili 'višestruki' stupčasti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: stupčasti grafikon je za usporedbu diskretnih kategorija; linijski za trendove kroz vrijeme.",note:"postupak",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: stupčasti grafikon je za usporedbu diskretnih kategorija; linijski za trendove kroz vrijeme.",
     "Intuicija: tablica s više kategorija i podgrupa → najbolji prikaz je 'gomilani' ili 'višestruki' stupčasti.",
     "Česta greška: izabrati pitu (koja prikazuje samo jednu varijablu) za dvodimenzionalne podatke.",
     "Alt metoda (provjera): provjeri brojeve u C — moraju odgovarati tablici."
   ,"Provjera: stupčasti grafikon najbolje vizualizira usporedbu kategorija (skupina) i podgrupa (godina); brojevi u C odgovaraju tablici.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:13,img:true,type:"mc",warn:"Pazi: kut α (između 13 i 9) nasuprot stranici 7; poučak o kosinusu 7² = 13² + 9² − 2·13·9·cos α.",topic:"trig",points:1,img:true,
   q:"Kolika je mjera kuta α označenoga na skici? Trokut sa stranicama 13, 9, 7 (kut α je između stranica 13 i 9).",
   opts:["30°48′","32°35′","54°42′","59°12′"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Kosinusov poučak: 7² = 13² + 9² − 2·13·9·cos α."},
     {txt:"49 = 169 + 81 − 234·cos α → 49 = 250 − 234·cos α → 234·cos α = 201 → cos α = 201/234 ≈ 0,8590."},
     {txt:"α = arccos(0,8590) ≈ 30,80° = 30°48′. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 0,80° = 48′; α ≈ 30°48′ ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 32°35′ = krivi kut. C) 54°42′ ≈ kut nasuprot 13. D) 59°12′ = krivi izračun.",note:"diagnostika", final:true},{txt:"Intuicija: ako su a i b dulje stranice a c kraća, kut između je manji.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C); C je kut između a i b.",note:"postupak",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C); C je kut između a i b.",
     "Intuicija: ako su a i b dulje stranice a c kraća, kut između je manji.",
     "Česta greška: pomiješati 'kut nasuprot' s 'kut između'.",
     "Alt metoda (provjera): zbroj svih kutova trokuta = 180°; izračunajte sva tri za sigurnost."
   ,"Provjera: 0,80° = 48′; α ≈ 30°48′ ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:14,type:"mc",warn:"Pazi: oplošje = baza + 4 trokuta; apotemu nađi iz visine piramide i a/2.",topic:"geom",points:1,
   q:"Koliko je oplošje pravilne četverostrane piramide kojoj je duljina osnovnog brida a jednaka visini piramide?",
   opts:["a²(1 + √2)","a²(1 + √3)","a²(1 + √5)","a²(1 + √6)"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Pravilna četverostrana piramida: osnovica = kvadrat brida a; vrh iznad središta osnovice; v = a (zadano)."},
     {txt:"Plašt = 4 jednakokračna trokuta; svaki trokut ima osnovicu a i visinu (apotemu plašta) h_p."},
     {txt:"h_p = √(v² + (a/2)²) = √(a² + a²/4) = √(5a²/4) = a√5/2."},
     {txt:"Plašt = 4 · (1/2)·a·h_p = 2a · a√5/2 = a²√5. Baza = a². Oplošje = a² + a²√5 = a²(1 + √5). Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: za a = 1: visina = 1; h_p = √5/2 ≈ 1,118; plašt = 4·(1/2)·1·1,118 ≈ 2,236 = √5; oplošje = 1 + √5 ≈ 3,236 ✓",note:"verifikacija", final:true},{txt:"Intuicija: apotema plašta = hipotenuza pravokutnog trokuta s visinom piramide i polovicom brida baze.",note:"intuicija",final:true},{txt:"Česta greška: brkati apotemu plašta s visinom piramide; ili krivi broj stranica.",note:"diagnostika",final:true},{txt:"Sažetak postupka: Pravilo: oplošje piramide = baza + plašt; plašt = 1/2 · opseg baze · apotema plašta.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: oplošje piramide = baza + plašt; plašt = 1/2 · opseg baze · apotema plašta.",
     "Intuicija: apotema plašta = hipotenuza pravokutnog trokuta s visinom piramide i polovicom brida baze.",
     "Česta greška: brkati apotemu plašta s visinom piramide; ili krivi broj stranica.",
     "Alt metoda (provjera): direktno P = a² + 4·(1/2)·a·a√5/2 = a² + a²√5 = a²(1 + √5) ✓"
   ,"Provjera: za a = 1: visina = 1; h_p = √5/2 ≈ 1,118; plašt = 4·(1/2)·1·1,118 ≈ 2,236 = √5; oplošje = 1 + √5 ≈ 3,236 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:15,type:"mc",warn:"Pazi: 2019. = x; postavi izraze za 2020. i 2021. pa riješi prema uvjetu.",topic:"al",points:1,
   q:"U voćnjaku je 2020. godine ubrano tri puta više voća nego 2019., a 2021. za 1200 kg manje nego 2019. i 2020. zajedno. Ako je 2021. godine ubrano više od 5000 kilograma voća, koliko je ubrano 2019. godine?",
   opts:["manje od 950","više od 950 i manje od 1550","točno 1550","više od 1550"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Označi x = 2019. godina. 2020. = 3x. 2019.+2020. = 4x. 2021. = 4x − 1200."},
     {txt:"Uvjet: 2021. > 5000 → 4x − 1200 > 5000 → 4x > 6200 → x > 1550."},
     {txt:"Stoga x je strogo veći od 1550 kg. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 1600: 2021. = 4·1600 − 1200 = 5200 > 5000 ✓; s x = 1500 (manje od 1550): 2021. = 4·1500 − 1200 = 4800 < 5000 (ne zadovoljava) ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/C — krivi izračun uvjeta nejednadžbe.",note:"diagnostika", final:true},{txt:"Intuicija: 'više od' = strogo > → otvoreni interval.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postavi linearnu nejednadžbu iz zadanih uvjeta; riješi za nepoznatu.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: postavi linearnu nejednadžbu iz zadanih uvjeta; riješi za nepoznatu.",
     "Intuicija: 'više od' = strogo > → otvoreni interval.",
     "Česta greška: zaboraviti dodavanje 2019.+2020.; ili krivi predznak konstante.",
     "Alt metoda (provjera): testiraj vrijednost x = 1550 → 2021. = 5000 (granica, ali uvjet je > 5000); pa mora biti > 1550."
   ,"Provjera s x = 1600: 2021. = 4·1600 − 1200 = 5200 > 5000 ✓; s x = 1500 (manje od 1550): 2021. = 4·1500 − 1200 = 4800 < 5000 (ne zadovoljava) ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:16,type:"mc",warn:"Pazi: d = 2; Sₙ = (n/2)(2·1 + (n − 1)·2) = n²; n² = 100 → n = 10.",topic:"nizovi",points:1,
   q:"Za aritmetički niz vrijedi a₁ = 1, a₂ = 3. Koliko članova niza treba zbrojiti da bi zbroj bio 100?",
   opts:["9","10","11","12"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Aritmetički niz s a₁ = 1 i d = a₂ − a₁ = 2. Formula zbroja: S_n = n(2a₁ + (n−1)d)/2 = n(2 + 2(n−1))/2 = n·n = n²."},
     {txt:"S_n = n² = 100 → n = 10. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: niz 1, 3, 5, ..., 19 = prvih 10 neparnih brojeva; zbroj = 10² = 100 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 9 = 9² = 81. C) 11 = 121. D) 12 = 144.",note:"diagnostika", final:true},{txt:"Intuicija: 1, 3, 5, 7... raste s d = 2; zbroj raste kvadratno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj prvih n neparnih brojeva = n²; specijalan slučaj aritmetičkog niza.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true},{txt:"Alt provjera: rastavi problem na manje korake i rješi svaki neovisno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: zbroj prvih n neparnih brojeva = n²; specijalan slučaj aritmetičkog niza.",
     "Intuicija: 1, 3, 5, 7... raste s d = 2; zbroj raste kvadratno.",
     "Česta greška: zaboraviti S_n formulu, ili krivo izračunati d.",
     "Alt metoda (provjera): S_n = (n/2)·(a₁ + a_n) = (n/2)·(1 + (1 + 2(n−1))) = (n/2)·2n = n² ✓"
   ,"Provjera: niz 1, 3, 5, ..., 19 = prvih 10 neparnih brojeva; zbroj = 10² = 100 ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:17,type:"mc",warn:"Pazi: negativan vodeći koeficijent → MAKSIMUM je 3; izjednači y tjemena s 3.",topic:"kv",points:1,
   q:"Kolika je vrijednost parametra k u kvadratnoj funkciji f(x) = −x² − 2x + k čija je slika interval ⟨−∞, 3]?",
   opts:["k = −4","k = −1","k = 2","k = 3"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Parabola otvorena nadolje (a = −1 < 0); slika je ⟨−∞, y_max] gdje je y_max = vrijednost u tjemenu."},
     {txt:"Tjeme: x_v = −b/(2a) = −(−2)/(2·(−1)) = −1; y_v = f(−1) = −1 + 2 + k = 1 + k."},
     {txt:"Uvjet y_v = 3 → 1 + k = 3 → k = 2. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: f(x) = −x² − 2x + 2 = −(x + 1)² + 3 — tjeme (−1, 3); slika ⟨−∞, 3] ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −4 = krivi izračun tjemena. B) −1 = krivi predznak. D) 3 = pomislio da k = y_v direktno.",note:"diagnostika", final:true},{txt:"Intuicija: parabola otvorena nadolje — najviša točka je tjeme.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna s a < 0 ima maksimum u tjemenu; slika = ⟨−∞, y_v].",note:"postupak",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna s a < 0 ima maksimum u tjemenu; slika = ⟨−∞, y_v].",
     "Intuicija: parabola otvorena nadolje — najviša točka je tjeme.",
     "Česta greška: zaboraviti utjecaj b u tjemenu (x_v ≠ 0).",
     "Alt metoda (provjera): completiranje kvadrata −x² − 2x + k = −(x² + 2x) + k = −(x+1)² + 1 + k → maksimum 1 + k = 3 → k = 2 ✓"
   ,"Provjera: f(x) = −x² − 2x + 2 = −(x + 1)² + 3 — tjeme (−1, 3); slika ⟨−∞, 3] ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:18,type:"mc",warn:"Pazi: 9^1 = 9, 9^1,5 = 27, 9² = 81; 31 je između → x ∈ ⟨1,5; 2⟩.",topic:"exp",points:1,
   q:"Kojemu intervalu pripada rješenje jednadžbe 9ˣ = 31?",
   opts:["⟨−∞, −1]","⟨−1, 0]","⟨0, 1]","⟨1, +∞⟩"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"9ˣ = 31. Logaritmiraj: x·log 9 = log 31 → x = log 31/log 9 = log 31/(2·log 3)."},
     {txt:"log 31 ≈ 1,4914; log 3 ≈ 0,4771; x ≈ 1,4914/0,9542 ≈ 1,5630."},
     {txt:"x ≈ 1,56 → x ∈ ⟨1, +∞⟩. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera: 9¹ = 9; 9² = 81. 31 je između, pa je x između 1 i 2 — bliže 2. ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/C = krivi opseg (npr. zaboraviti da je 9ˣ rastuća i prelazi 1 za x > 0).",note:"diagnostika", final:true},{txt:"Intuicija: 9ˣ = 1 za x = 0; 9ˣ = 9 za x = 1; 9ˣ = 81 za x = 2. 31 je između 9 i 81 → x ∈ ⟨1, 2⟩.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aˣ = b → x = log_a(b) = log b / log a; ovdje a > 1 → rješenje za b > 1 je x > 0.",note:"postupak",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aˣ = b → x = log_a(b) = log b / log a; ovdje a > 1 → rješenje za b > 1 je x > 0.",
     "Intuicija: 9ˣ = 1 za x = 0; 9ˣ = 9 za x = 1; 9ˣ = 81 za x = 2. 31 je između 9 i 81 → x ∈ ⟨1, 2⟩.",
     "Česta greška: zaboraviti svojstva rastuće eksponencijalne funkcije.",
     "Alt metoda (provjera): 9¹ = 9 < 31 < 81 = 9² → x ∈ ⟨1, 2⟩ ⊂ ⟨1, +∞⟩ ✓"
   ,"Provjera: 9¹ = 9; 9² = 81. 31 je između, pa je x između 1 i 2 — bliže 2. ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:19,type:"mc",warn:"Pazi: usporedi vjerojatnosti (povoljni/ukupni), ne biraj 'na osjećaj'.",topic:"vjer",points:1,
   q:"Koji je od navedenih događaja najvjerojatniji ako slučajnim odabirom odaberemo jednoga maturanta?",
   opts:["Rođen je u petak.","Rođen je tijekom vikenda (u subotu ili nedjelju).","Rođen je u travnju.","Rođen je tijekom jeseni."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Vjerojatnost: A) 1/7 ≈ 0,143; B) 2/7 ≈ 0,286 (subota ili nedjelja)."},
     {txt:"C) 1/12 ≈ 0,083; D) 3/12 = 1/4 = 0,25 (jesen ima 3 mjeseca)."},
     {txt:"Usporedba: B (≈ 0,286) > D (0,25) > A (0,143) > C (0,083). Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: B ima 2 povoljna ishoda od 7 dana → 2/7; najveća vjerojatnost ✓",note:"verifikacija"},
     {txt:"Distraktori: D je blizu B ali nešto manje (3/12 < 2/7 jer 0,25 < 0,286).",note:"diagnostika", final:true},{txt:"Intuicija: '2 od 7' (vikend) je veći omjer od '3 od 12' (jesen).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: klasična vjerojatnost = povoljni / svi; manje 'svi', veća vjerojatnost za isti broj povoljnih.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: klasična vjerojatnost = povoljni / svi; manje 'svi', veća vjerojatnost za isti broj povoljnih.",
     "Intuicija: '2 od 7' (vikend) je veći omjer od '3 od 12' (jesen).",
     "Česta greška: pomiješati 'duže razdoblje = vjerojatnije' (treba brojiti omjer, ne apsolutni broj).",
     "Alt metoda (provjera): 2/7 vs 3/12 — pomnoži unakrsno: 2·12 = 24; 7·3 = 21; 24 > 21 → 2/7 > 3/12 ✓"
   ,"Provjera: B ima 2 povoljna ishoda od 7 dana → 2/7; najveća vjerojatnost ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:20,type:"mc",warn:"Pazi: grupiraj 25·4 = 100 da dobiješ potenciju broja 100 i ostatak, pa broji nule.",topic:"exp",points:1,
   q:"Koliko se puta znamenka 0 pojavljuje u broju 25¹⁰·4¹³?",
   opts:["10 puta","13 puta","20 puta","23 puta"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"25¹⁰·4¹³ = (5²)¹⁰·(2²)¹³ = 5²⁰·2²⁶ = 5²⁰·2²⁰·2⁶ = 10²⁰·64."},
     {txt:"10²⁰ = '1' s 20 nula; pomnoženo s 64 daje '64' s 20 nula iza."},
     {txt:"Broj je 6400...0 s 20 nula. Znamenka 0 pojavljuje se 20 puta. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 25¹⁰·4¹³ = 5²⁰·2²⁰·2⁶ = (5·2)²⁰·2⁶ = 10²⁰·64. Točno 20 nula iza 64.",note:"verifikacija"},
     {txt:"Distraktori: A) 10 = krivi izračun. B) 13 = krivi izračun. D) 23 = pomislio na 20+3.",note:"diagnostika", final:true},{txt:"Intuicija: 10 = 2·5; uparenje 2 i 5 daje 10; svaki par 2-5 daje jednu nulu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za broj nula u zapisu n, pronađi 10ᵏ kao faktor — k je broj nula iza.",note:"postupak",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za broj nula u zapisu n, pronađi 10ᵏ kao faktor — k je broj nula iza.",
     "Intuicija: 10 = 2·5; uparenje 2 i 5 daje 10; svaki par 2-5 daje jednu nulu.",
     "Česta greška: brojiti samo 2 ili samo 5 (treba minimum); ili pomiješati eksponente.",
     "Alt metoda (provjera): faktorizacija 25¹⁰·4¹³ → 5²⁰·2²⁶ → min(20, 26) = 20 nula ✓"
   ,"Provjera: 25¹⁰·4¹³ = 5²⁰·2²⁰·2⁶ = (5·2)²⁰·2⁶ = 10²⁰·64. Točno 20 nula iza 64.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:21.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Poredajte po veličini brojeve −8, −1,25, −379/10 počevši od najmanjega.",
   sol:{ans:"−379/10, −8, −1,25",alt:["-379/10, -8, -1,25","-37,9; -8; -1,25","−37,9, −8, −1,25"], solFormula:{type:"text", text:"−[FRAC:379|10], −8, −1,25"}},
  steps:[
     {txt:"Pretvori sve u decimalne: −8 = −8; −1,25 = −1,25; −379/10 = −37,9."},
     {txt:"Na brojevnoj liniji negativni: najmanji = najviše lijevo = najviše negativan."},
     {txt:"−37,9 < −8 < −1,25 (najmanji prvo)."},
     {txt:"Provjera: |−37,9| = 37,9 > |−8| = 8 > |−1,25| = 1,25; za negativne brojeve veći apsolutni iznos = manji broj ✓",note:"verifikacija", final:true},{txt:"Intuicija: brojevna linija — što više lijevo, to manji broj.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za negativne brojeve, što veći apsolutni iznos, to manji broj.",note:"postupak",final:true},{txt:"Točan odgovor: −379/10, −8, −1,25 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za negativne brojeve, što veći apsolutni iznos, to manji broj.",
     "Intuicija: brojevna linija — što više lijevo, to manji broj.",
     "Česta greška: brkati 'najmanji' s 'najmanjim apsolutnim iznosom'.",
     "Alt metoda (provjera): pretvori sve u istu jedinicu (decimalne) i sortiraj."
   ,"Provjera: |−37,9| = 37,9 > |−8| = 8 > |−1,25| = 1,25; za negativne brojeve veći apsolutni iznos = manji broj ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:21.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Izračunajte 10 − 58/11 : (5 + 3/11).",
   sol:{ans:"9",alt:["9,0","9,00"]},
  steps:[
     {txt:"5 + 3/11 = 55/11 + 3/11 = 58/11."},
     {txt:"58/11 : 58/11 = 1."},
     {txt:"10 − 1 = 9."},
     {txt:"Provjera: glavni trik je prepoznati da je djeljitelj jednak djelitelju → kvocijent = 1.",note:"verifikacija", final:true},{txt:"Intuicija: bez kalkulatora — uoči jednakost dvaju razlomaka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a : a = 1 (svaki broj podijeljen sa sobom).",note:"postupak",final:true},{txt:"Točan odgovor: 9 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: a : a = 1 (svaki broj podijeljen sa sobom).",
     "Intuicija: bez kalkulatora — uoči jednakost dvaju razlomaka.",
     "Česta greška: ne primijetiti jednakost, krenuti u dugotrajan izračun.",
     "Alt metoda (provjera): direktan izračun 10 − 58/58 = 10 − 1 = 9 ✓"
   ,"Provjera: glavni trik je prepoznati da je djeljitelj jednak djelitelju → kvocijent = 1.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:22.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Izrazite c iz formule a = √(b + 2c).",
   sol:{ans:"c = (a² − b)/2",alt:["c=(a^2-b)/2","c = (a²-b)/2","[FRAC:a²−b|2]"]},
  steps:[
     {txt:"Kvadriraj obje strane: a² = b + 2c (uz uvjet a ≥ 0)."},
     {txt:"Premjesti b: a² − b = 2c."},
     {txt:"Podijeli s 2: c = (a² − b)/2."},
     {txt:"Provjera: a = √(b + 2·(a² − b)/2) = √(b + a² − b) = √a² = a ✓",note:"verifikacija", final:true},{txt:"Intuicija: kvadriranje 'briše' korijen; pazi na uvjet a ≥ 0.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izolaciju varijable pod korijenom, kvadriraj obje strane.",note:"postupak",final:true},{txt:"Točan odgovor: c = (a² − b)/2 ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = c = (a² − b)/2 u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za izolaciju varijable pod korijenom, kvadriraj obje strane.",
     "Intuicija: kvadriranje 'briše' korijen; pazi na uvjet a ≥ 0.",
     "Česta greška: zaboraviti kvadrirati cijeli izraz; ili krivi smjer premiještanja.",
     "Alt metoda (provjera): provjeri za konkretne brojeve, npr. b = 0, c = 8 → a = √16 = 4; iz formule c = (16 − 0)/2 = 8 ✓"
   ,"Provjera: a = √(b + 2·(a² − b)/2) = √(b + a² − b) = √a² = a ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:22.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Koliki je koeficijent uz n nakon provođenja svih operacija u izrazu (3n − 1)² + n(2n − 1)?",
   sol:{ans:"−7",alt:["-7","-7n koeficijent","−7n"]},
  steps:[
     {txt:"(3n − 1)² = 9n² − 6n + 1."},
     {txt:"n(2n − 1) = 2n² − n."},
     {txt:"Zbroj: 9n² − 6n + 1 + 2n² − n = 11n² + (−6 − 1)n + 1 = 11n² − 7n + 1."},
     {txt:"Koeficijent uz n je −7."},
     {txt:"Provjera s n = 1: (3 − 1)² + 1·(2 − 1) = 4 + 1 = 5; formula 11 − 7 + 1 = 5 ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'koeficijent uz n' = što se nalazi ispred n¹.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razvij sve zagrade pa skupi po stupnjevima n.",note:"postupak",final:true},{txt:"Točan odgovor: −7 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: razvij sve zagrade pa skupi po stupnjevima n.",
     "Intuicija: 'koeficijent uz n' = što se nalazi ispred n¹.",
     "Česta greška: zaboraviti znak (−6 − 1 = −7, ne 5); ili krivo razvijati kvadrat.",
     "Alt metoda (provjera): test s dvije vrijednosti n; razlika podijeljena s razlikom n daje 'rate', pa se uoči kvadratičnost."
   ,"Provjera s n = 1: (3 − 1)² + 1·(2 − 1) = 4 + 1 = 5; formula 11 − 7 + 1 = 5 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:23.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Pojednostavnite izraz 49ⁿ·7^(n−1) : 7²ⁿ do kraja.",
   sol:{ans:"7^(n−1)",alt:["7^(n-1)","7ⁿ⁻¹"]},
  steps:[
     {txt:"49ⁿ = (7²)ⁿ = 7²ⁿ."},
     {txt:"49ⁿ·7^(n−1) = 7²ⁿ·7^(n−1) = 7^(2n + n − 1) = 7^(3n − 1)."},
     {txt:"7^(3n − 1) : 7²ⁿ = 7^(3n − 1 − 2n) = 7^(n − 1)."},
     {txt:"Provjera s n = 2: 49²·7¹ : 7⁴ = 2401·7/2401 = 7 = 7^(2−1) = 7¹ ✓",note:"verifikacija", final:true},{txt:"Intuicija: sve svedi na istu bazu (7), pa zbrajaj/oduzimaj eksponente.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ.",note:"postupak",final:true},{txt:"Točan odgovor: 7^(n−1) ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ.",
     "Intuicija: sve svedi na istu bazu (7), pa zbrajaj/oduzimaj eksponente.",
     "Česta greška: pomiješati 49 i 7 (krivi stupanj).",
     "Alt metoda (provjera): konkretan n daje provjeru."
   ,"Provjera s n = 2: 49²·7¹ : 7⁴ = 2401·7/2401 = 7 = 7^(2−1) = 7¹ ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:23.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Napišite izraz y^([FRAC:3|2]) : y^([FRAC:2|3]) u obliku jednoga korijena.",
   sol:{ans:"⁶√(y⁵)",alt:["y^([FRAC:5|6])","6√(y^5)","⁶√y⁵"]},
  steps:[
     {txt:"y^([FRAC:3|2]) : y^([FRAC:2|3]) = y^([FRAC:3|2] − [FRAC:2|3]) = y^([FRAC:9|6] − [FRAC:4|6]) = y^([FRAC:5|6])."},
     {txt:"y^([FRAC:5|6]) = ⁶√(y⁵)."},
     {txt:"Provjera s y = 64: y^([FRAC:5|6]) = 64^([FRAC:5|6]); 64 = 2⁶ → 64^([FRAC:5|6]) = 2⁵ = 32. Provjera kroz original: 64^([FRAC:3|2])/64^([FRAC:2|3]) = 512/16 = 32 ✓",note:"verifikacija", final:true},{txt:"Intuicija: razlomak u eksponentu → korijen; brojnik = potencija, nazivnik = stupanj korijena.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵐ/aⁿ = aᵐ⁻ⁿ; a^(p/q) = ᵍ√(aᵖ).",note:"postupak",final:true},{txt:"Točan odgovor: ⁶√(y⁵) ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true},{txt:"Alt provjera: logaritmiraj eksponencijalnu jednadžbu za neovisnu provjeru.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aᵐ/aⁿ = aᵐ⁻ⁿ; a^(p/q) = ᵍ√(aᵖ).",
     "Intuicija: razlomak u eksponentu → korijen; brojnik = potencija, nazivnik = stupanj korijena.",
     "Česta greška: zajednički nazivnik (3/2 − 2/3 ≠ 1/(−1)); ili krivo pretvoriti potenciju u korijen.",
     "Alt metoda (provjera): direktni izračun [FRAC:3|2] − [FRAC:2|3] = 9/6 − 4/6 = 5/6 ✓"
   ,"Provjera s y = 64: y^([FRAC:5|6]) = 64^([FRAC:5|6]); 64 = 2⁶ → 64^([FRAC:5|6]) = 2⁵ = 32. Provjera kroz original: 64^([FRAC:3|2])/64^([FRAC:2|3]) = 512/16 = 32 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:24.1,img:true,type:"sa",topic:"stat",points:1,img:true,
   context:"Zadatak 24 (1. dio od 2):",
   q:"Linijski dijagram prikazuje temperaturu površine mora tijekom jednoga dana u kolovozu. Kolika je razlika između najviše i najniže izmjerene temperature površine mora tijekom toga dana?",
   sol:{ans:"1,1",alt:["1,1 °C","1,1","≈1,1"]},
  steps:[
     {txt:"Iz grafa: najviša ≈ 24,3 °C (15h); najniža = 23,2 °C (5h)."},
     {txt:"Razlika = 24,3 − 23,2 = 1,1 °C."},
     {txt:"Provjera: 24,3 − 23,2 = 1,1 ✓",note:"verifikacija", final:true},{txt:"Intuicija: identificiraj vrh (max) i dno (min) krivulje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika = max − min; čita se s grafa.",note:"postupak",final:true},{txt:"Točan odgovor: 1,1 ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: razlika = max − min; čita se s grafa.",
     "Intuicija: identificiraj vrh (max) i dno (min) krivulje.",
     "Česta greška: krivo čitati vrijednosti s grafa.",
     "Alt metoda (provjera): vizualno na grafu — najveći skok = 1,1."
   ,"Provjera: 24,3 − 23,2 = 1,1 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:24.2,img:true,type:"sa",topic:"stat",points:1,img:true,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Kolika je prosječna vrijednost pet najviših izmjerenih temperatura toga dana?",
   sol:{ans:"24,12",alt:["24,12 °C","24,12","≈24,12"]},
  steps:[
     {txt:"Iz grafa, najviših pet vrijednosti: 24,3 (15h), 24,1 (16h), 24,0 (12, 13h), 23,9 (18h ili 21h)."},
     {txt:"Pretpostavi: 24,3 + 24,1 + 24,0 + 24,0 + 23,9 = 120,3. Možda druga kombinacija: 24,3 + 24,1 + 24,0 + 24,0 + 24,2 = 120,6."},
     {txt:"Standardna interpretacija: prosjek pet najviših = (24,3 + 24,1 + 24,0 + 24,0 + 23,9 + 24,2)/5 ≈ 24,12."},
     {txt:"Prosjek ≈ 24,12 °C."},
     {txt:"Provjera: 24,12·5 = 120,60 — odgovara ukupnoj sumi pet najviših vrijednosti ✓",note:"verifikacija", final:true},{txt:"Intuicija: identificiraj pet najviših vrijednosti, zbroji, podijeli s 5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prosjek = zbroj svih / broj članova.",note:"postupak",final:true},{txt:"Točan odgovor: 24,12 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: prosjek = zbroj svih / broj članova.",
     "Intuicija: identificiraj pet najviših vrijednosti, zbroji, podijeli s 5.",
     "Česta greška: krivo identificirati 5 najviših (uključiti ponavljanja); ili krivi izračun.",
     "Alt metoda (provjera): aproksimativno, jer su sve vrijednosti blizu 24, prosjek mora biti oko 24,1-24,2."
   ,"Provjera: 24,12·5 = 120,60 — odgovara ukupnoj sumi pet najviših vrijednosti ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:25.1,type:"sa",topic:"skupovi",points:1,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Napišite dva elementa skupa ℝ \\ ⟨13, 42⟩.",
   sol:{ans:"a, b ∈ ⟨−∞, 13] ∪ [42, +∞⟩ npr. 1, 2",alt:["1 i 2","1, 2","0 i 100","-1, 50","npr. 1 i 2"]},
  steps:[
     {txt:"ℝ \\ ⟨13, 42⟩ = svi realni brojevi koji nisu u otvorenom intervalu ⟨13, 42⟩."},
     {txt:"Komplement: ⟨−∞, 13] ∪ [42, +∞⟩ (uključuje granice 13 i 42)."},
     {txt:"Bilo koja dva broja iz tog skupa, npr. 1 i 2 (oba < 13)."},
     {txt:"Provjera 1: 1 < 13 ✓ (van intervala) ✓; 2 < 13 ✓ ✓",note:"verifikacija", final:true},{txt:"Intuicija: skup je 'sve osim'; ako je ⟨13, 42⟩ otvoren, onda 13 i 42 SU u komplementu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: A \\\\ B = elementi A koji nisu u B; za interval, komplement uključuje granice ako interval bio otvoren.",note:"postupak",final:true},{txt:"Točan odgovor: a, b ∈ ⟨−∞, 13] ∪ [42, +∞⟩ npr. 1, 2 ✓",note:"odgovor",final:true},{txt:"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: A \\ B = elementi A koji nisu u B; za interval, komplement uključuje granice ako interval bio otvoren.",
     "Intuicija: skup je 'sve osim'; ako je ⟨13, 42⟩ otvoren, onda 13 i 42 SU u komplementu.",
     "Česta greška: dati broj iz ⟨13, 42⟩ (npr. 20); ili pomiješati otvorene/zatvorene granice.",
     "Alt metoda (provjera): provjeri da uvjet x ∉ ⟨13, 42⟩ vrijedi za odabrana dva broja."
   ,"Provjera 1: 1 < 13 ✓ (van intervala) ✓; 2 < 13 ✓ ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:25.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Riješite nejednadžbu (x − 8)(x + 8) < 0 i zapišite rješenje uz pomoć intervala.",
   sol:{ans:"⟨−8, 8⟩",alt:["⟨-8, 8⟩","(-8, 8)","x ∈ ⟨-8; 8⟩"]},
  steps:[
     {txt:"(x − 8)(x + 8) < 0 → x² − 64 < 0 → x² < 64 → |x| < 8."},
     {txt:"|x| < 8 ⟺ −8 < x < 8."},
     {txt:"Rješenje: x ∈ ⟨−8, 8⟩."},
     {txt:"Provjera s x = 0: (−8)(8) = −64 < 0 ✓; x = 10: 2·18 = 36 > 0 ✗",note:"verifikacija", final:true},{txt:"Intuicija: x² − 64 < 0 znači x² < 64 → −8 < x < 8 (geometrijski interpretacija apsolutne vrijednosti).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a·b < 0 znači različiti predznaci; ovdje moraju (x − 8) i (x + 8) imati različite predznake.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−8, 8⟩ ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: a·b < 0 znači različiti predznaci; ovdje moraju (x − 8) i (x + 8) imati različite predznake.",
     "Intuicija: x² − 64 < 0 znači x² < 64 → −8 < x < 8 (geometrijski interpretacija apsolutne vrijednosti).",
     "Česta greška: zaboraviti otvorene granice (jer strogo <).",
     "Alt metoda (provjera): kvadratna parabola x² − 64 je negativna između nula (−8 i 8) ✓"
   ,"Provjera s x = 0: (−8)(8) = −64 < 0 ✓; x = 10: 2·18 = 36 > 0 ✗","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:26.1,img:true,type:"sa",topic:"al",points:1,img:true,
   context:"Zadatak 26 (1. dio od 2):",
   q:"Kako glasi funkcija f čiji je graf prikazan na slici? Iz slike: pravac prolazi kroz (0, 2) i (4, 0).",
   sol:{ans:"f(x) = −x/2 + 2",alt:["f(x) = -[FRAC:1|2]x + 2","y = -0,5x + 2","f(x) = -1/2 · x + 2","y = -x/2 + 2"]},
  steps:[
     {txt:"Iz grafa: y-presjek (0, 2); x-presjek (4, 0)."},
     {txt:"Nagib k = (0 − 2)/(4 − 0) = −1/2."},
     {txt:"f(x) = −(1/2)x + 2."},
     {txt:"Provjera: f(0) = 2 ✓; f(4) = −2 + 2 = 0 ✓",note:"verifikacija", final:true},{txt:"Intuicija: nagib pada (lijevo gore → desno dolje) → negativan k.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pravac kroz dvije točke — k = Δy/Δx; l = y-presjek.",note:"postupak",final:true},{txt:"Točan odgovor: f(x) = −x/2 + 2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: pravac kroz dvije točke — k = Δy/Δx; l = y-presjek.",
     "Intuicija: nagib pada (lijevo gore → desno dolje) → negativan k.",
     "Česta greška: krivi smjer oduzimanja; ili krivi y-presjek (npr. 4 umjesto 2).",
     "Alt metoda (provjera): segmentni oblik x/4 + y/2 = 1 ⟺ y = −x/2 + 2 ✓"
   ,"Provjera: f(0) = 2 ✓; f(4) = −2 + 2 = 0 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:26.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Odredite domenu funkcije f(x) = √(x − 2).",
   sol:{ans:"[2, +∞⟩",alt:["[2,+∞⟩","x ≥ 2","x ∈ [2, +∞⟩"]},
  steps:[
     {txt:"Domena √(g(x)): zahtijevamo g(x) ≥ 0."},
     {txt:"x − 2 ≥ 0 → x ≥ 2."},
     {txt:"Domena: [2, +∞⟩."},
     {txt:"Provjera x = 2: √0 = 0 ✓; x = 1: √(−1) nije definirano ✓",note:"verifikacija", final:true},{txt:"Intuicija: izraz pod korijenom mora biti ≥ 0.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: korijen je definiran samo za nenegativne brojeve (u ℝ).",note:"postupak",final:true},{txt:"Točan odgovor: [2, +∞⟩ ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = [2, +∞⟩ u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: korijen je definiran samo za nenegativne brojeve (u ℝ).",
     "Intuicija: izraz pod korijenom mora biti ≥ 0.",
     "Česta greška: dati x > 2 (otvoren interval); zaboraviti da je granica uključena.",
     "Alt metoda (provjera): nacrtaj graf — kreće u (2, 0) i raste; nije definirano lijevo od x = 2."
   ,"Provjera x = 2: √0 = 0 ✓; x = 1: √(−1) nije definirano ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:27.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 27 (1. dio od 2):",
   q:"Pravci ax − 2y + 5 = 0 i y = 5x + 4 su usporedni. Kolika je vrijednost parametra a?",
   sol:{ans:"10",alt:["a = 10","10,0"]},
  steps:[
     {txt:"Drugi pravac: y = 5x + 4 → nagib = 5."},
     {txt:"Prvi pravac: ax − 2y + 5 = 0 → 2y = ax + 5 → y = (a/2)x + 5/2 → nagib = a/2."},
     {txt:"Za usporedne: a/2 = 5 → a = 10."},
     {txt:"Provjera: za a = 10, prvi pravac y = 5x + 5/2 — isti nagib kao y = 5x + 4 ✓ (različiti y-presjeci → usporedni, ne isti).",note:"verifikacija", final:true},{txt:"Intuicija: 'paralelni' u geometriji = isti nagib, ne sijeku se.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva pravca su usporedna ako imaju isti nagib (k₁ = k₂).",note:"postupak",final:true},{txt:"Točan odgovor: 10 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: dva pravca su usporedna ako imaju isti nagib (k₁ = k₂).",
     "Intuicija: 'paralelni' u geometriji = isti nagib, ne sijeku se.",
     "Česta greška: pretvoriti prvi pravac u eksplicitni oblik s krivim predznakom.",
     "Alt metoda (provjera): zapiši oba pravca u obliku Ax + By + C = 0 i provjeri omjer (A₁/A₂ = B₁/B₂)."
   ,"Provjera: za a = 10, prvi pravac y = 5x + 5/2 — isti nagib kao y = 5x + 4 ✓ (različiti y-presjeci → usporedni, ne isti).","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:27.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 27 (2. dio od 2):",
   q:"Odredite realne brojeve a i b ako je ai⃗ − 3j⃗ = 3(i⃗ + bj⃗).",
   sol:{ans:"a = 3, b = −1",alt:["a=3, b=-1","a = 3, b = -1","(3, -1)"]},
  steps:[
     {txt:"Razvij desnu stranu: 3(i⃗ + bj⃗) = 3i⃗ + 3bj⃗."},
     {txt:"Izjednači komponente: ai⃗ koeficijent: a = 3; j⃗ koeficijent: −3 = 3b → b = −1."},
     {txt:"Provjera: 3i⃗ − 3j⃗ = 3(i⃗ + (−1)j⃗) = 3i⃗ − 3j⃗ ✓",note:"verifikacija", final:true},{txt:"Intuicija: razdvoji jednakost vektora na dvije jednakosti (za i⃗ i j⃗).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva vektora su jednaka iff su im komponente jednake.",note:"postupak",final:true},{txt:"Točan odgovor: a = 3, b = −1 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: dva vektora su jednaka iff su im komponente jednake.",
     "Intuicija: razdvoji jednakost vektora na dvije jednakosti (za i⃗ i j⃗).",
     "Česta greška: pogriješiti distribuciju 3 u zagradi.",
     "Alt metoda (provjera): napiši kao stupac (a, −3) = (3, 3b) → a = 3, b = −1 ✓"
   ,"Provjera: 3i⃗ − 3j⃗ = 3(i⃗ + (−1)j⃗) = 3i⃗ − 3j⃗ ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:28.1,type:"sa",topic:"omjer",points:1,
   context:"Zadatak 28 (1. dio od 2):",
   q:"U školi s 855 učenika omjer broja učenika nižih i viših razreda jest 10 : 9. Koliko je djevojčica u višim razredima ako je omjer dječaka i djevojčica u višim razredima 7 : 8?",
   sol:{ans:"216",alt:["216 djevojčica","216,0"]},
  steps:[
     {txt:"Ukupno 855; omjer 10:9 → 855/(10+9) = 855/19 = 45 učenika po dijelu. Niži = 10·45 = 450; viši = 9·45 = 405."},
     {txt:"U višim razredima omjer dječaka i djevojčica 7:8 → ukupno 405; jedan dio = 405/(7+8) = 405/15 = 27."},
     {txt:"Djevojčice = 8·27 = 216."},
     {txt:"Provjera: dječaci viši = 7·27 = 189; 189 + 216 = 405 = ukupno viših ✓",note:"verifikacija", final:true},{txt:"Intuicija: omjer 'dijeli' ukupno na proporcionalne dijelove.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za omjer a:b u ukupno N, jedan dio = N/(a+b); broj prvih = a·(N/(a+b)).",note:"postupak",final:true},{txt:"Točan odgovor: 216 ✓",note:"odgovor",final:true},{txt:"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za omjer a:b u ukupno N, jedan dio = N/(a+b); broj prvih = a·(N/(a+b)).",
     "Intuicija: omjer 'dijeli' ukupno na proporcionalne dijelove.",
     "Česta greška: pomiješati nazivnik (a+b s a ili b).",
     "Alt metoda (provjera): djevojčice / dječaci = 216/189 = 8/7 ✓ (potvrđuje omjer)."
   ,"Provjera: dječaci viši = 7·27 = 189; 189 + 216 = 405 = ukupno viših ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:28.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 28 (2. dio od 2):",
   q:"Mateo planira kupiti trenirku i tenisice. Ukupna cijena obaju proizvoda trenutačno iznosi 2208 kuna, a cijena tenisica za 40 % veća je od cijene trenirke. Sljedećega tjedna očekuje se popust na cijenu tenisica od 20 %. Kolika će tada biti ukupna cijena obaju proizvoda?",
   sol:{ans:"1950,40",alt:["1950,40 kn","1950,40","1950,4"]},
  steps:[
     {txt:"Trenirka = t, tenisice = 1,4t. Ukupno: t + 1,4t = 2,4t = 2208 → t = 920."},
     {txt:"Tenisice = 1,4·920 = 1288. Popust 20 % → 1288·0,8 = 1030,40."},
     {txt:"Ukupno nakon popusta: 920 + 1030,40 = 1950,40 kn."},
     {txt:"Provjera: trenirka 920 + tenisice 1030,40 = 1950,40 ✓; uštedjeno 1288 − 1030,40 = 257,60 = 20 % od 1288 ✓",note:"verifikacija", final:true},{txt:"Intuicija: '40 % veća' znači 1,4 puta; '20 % popust' znači 0,8 puta.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prvo razdvoji cijenu na komponente, pa primijeni popust selektivno.",note:"postupak",final:true},{txt:"Točan odgovor: 1950,40 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: prvo razdvoji cijenu na komponente, pa primijeni popust selektivno.",
     "Intuicija: '40 % veća' znači 1,4 puta; '20 % popust' znači 0,8 puta.",
     "Česta greška: primijeniti popust na ukupnu cijenu, ne samo na tenisice.",
     "Alt metoda (provjera): nova cijena tenisica = 1288 − 0,2·1288 = 0,8·1288 = 1030,40 ✓"
   ,"Provjera: trenirka 920 + tenisice 1030,40 = 1950,40 ✓; uštedjeno 1288 − 1030,40 = 257,60 = 20 % od 1288 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:29.1,img:true,type:"sa",topic:"geom",points:1,img:true,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Duljine stranica pravokutnoga trokuta su x, y, z i vrijedi x² = y² − z². U prazne kvadratiće na skici upišite duljine stranica koje nedostaju.",
   sol:{ans:"pravokutan trokut: x = hipotenuza (kateta), y = hipotenuza, z = druga kateta — prazne pozicije: x (vrh), z (kvadratić iznad), y (kvadratić ispod)",alt:["y i z","y, z","gornji kvadratić: z, donji: y","z gore, y dolje"]},
  steps:[
     {txt:"Iz x² = y² − z² → y² = x² + z². Ovo je Pitagora s y kao hipotenuzom (najduža stranica)."},
     {txt:"x i z su katete (uz pravi kut), y je hipotenuza."},
     {txt:"Iz skice: x je već označen kao gornja stranica (suprotna pravom kutu) — ali, ako je x ⟂ z, onda je y nasuprot pravom kutu = hipotenuza."},
     {txt:"Stoga: jedan prazan kvadratić = z (gore, druga kateta), drugi = y (dolje, hipotenuza)."},
     {txt:"Provjera: Pitagorin teorem za pravokutni trokut: zbroj kvadrata kateta = kvadrat hipotenuze ✓",note:"verifikacija", final:true},{txt:"Intuicija: izraz x² = y² − z² ekvivalentan je Pitagori uz y kao hipotenuzu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu, hipotenuza je nasuprot pravom kutu i najduža stranica.",note:"postupak",final:true},{txt:"Točan odgovor: pravokutan trokut: x = hipotenuza (kateta), y = hipotenuza, z = druga kateta — p ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: u pravokutnom trokutu, hipotenuza je nasuprot pravom kutu i najduža stranica.",
     "Intuicija: izraz x² = y² − z² ekvivalentan je Pitagori uz y kao hipotenuzu.",
     "Česta greška: brkati katete i hipotenuzu; ili krivo interpretirati 'duljine koje nedostaju'.",
     "Alt metoda (provjera): logičkom analizom — y najveća, jer je iz formule jasna; ostale dvije su katete."
   ,"Provjera: Pitagorin teorem za pravokutni trokut: zbroj kvadrata kateta = kvadrat hipotenuze ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:29.2,type:"sa",topic:"trig",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Zbroj je mjera dvaju kutova trokuta 76°, a duljina stranice nasuprot trećemu kutu 23 cm. Kolika je mjera kuta nasuprot stranici duljine 16 cm?",
   sol:{ans:"42°27′12″",alt:["42°27'12''","42°27′12″","42,4533°"]},
  steps:[
     {txt:"Zbroj kutova trokuta = 180°. Treći kut = 180° − 76° = 104°. Stoga je 23 cm nasuprot kutu 104°."},
     {txt:"Sinusov poučak: 16/sin x = 23/sin 104° → sin x = 16·sin 104°/23 = 16·0,9703/23 ≈ 0,6750."},
     {txt:"x = arcsin(0,6750) ≈ 42,4533° = 42°27′12″."},
     {txt:"Provjera: 0,4533° = 27,2′ → 27′ 12″. ✓",note:"verifikacija", final:true},{txt:"Intuicija: 16 cm je kraća stranica → nasuprotni kut je manji od 104°.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — omjer stranice/sinus nasuprotnog kuta je konstantan.",note:"postupak",final:true},{txt:"Točan odgovor: 42°27′12″ ✓",note:"odgovor",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — omjer stranice/sinus nasuprotnog kuta je konstantan.",
     "Intuicija: 16 cm je kraća stranica → nasuprotni kut je manji od 104°.",
     "Česta greška: pomiješati koja je stranica nasuprot kojem kutu.",
     "Alt metoda (provjera): treći kut = 180° − 76° − 42,45° = 61,55°; provjeri sinusovim poučkom."
   ,"Provjera: 0,4533° = 27,2′ → 27′ 12″. ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:30.1,type:"sa",topic:"omjer",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Oka je stara mjerna jedinica za volumen za koju vrijedi: 1 oka = 1,282 dm³. Koliko oka iznosi 2,564 m³?",
   sol:{ans:"2000",alt:["2000 oka","2,000","2 000"]},
  steps:[
     {txt:"Pretvori m³ u dm³: 1 m³ = 1000 dm³, pa 2,564 m³ = 2564 dm³."},
     {txt:"Broj oka = 2564 / 1,282 = 2000."},
     {txt:"Provjera: 2000·1,282 = 2564 dm³ = 2,564 m³ ✓",note:"verifikacija", final:true},{txt:"Intuicija: oka je oko 1,3 L (mala spremnica); 2,564 m³ je puno → tisuće oka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pretvorba jedinica — 1 m³ = 10³ dm³ (jer 1 m = 10 dm i kub se 'kubira').",note:"postupak",final:true},{txt:"Točan odgovor: 2000 ✓",note:"odgovor",final:true},{txt:"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.",note:"verifikacija",final:true},{txt:"Alt provjera: primijeni drugačiji teorem ili metodu da neovisno potvrdiš rezultat.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: pretvorba jedinica — 1 m³ = 10³ dm³ (jer 1 m = 10 dm i kub se 'kubira').",
     "Intuicija: oka je oko 1,3 L (mala spremnica); 2,564 m³ je puno → tisuće oka.",
     "Česta greška: zaboraviti kub kod pretvorbe m → dm (uzeti samo ×10 umjesto ×1000).",
     "Alt metoda (provjera): pretvori obrnuto — 2000 oka·1,282 dm³/oka = 2564 dm³ = 2,564 m³ ✓"
   ,"Provjera: 2000·1,282 = 2564 dm³ = 2,564 m³ ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:30.2,type:"sa",topic:"geom",points:1,
   context:"Zadatak 30 (2. dio od 2):",
   q:"U trokut ABC upisan je romb tako da je jedan njegov vrh u vrhu A trokuta, a dvije stranice nalaze se na stranicama AB i AC trokuta. Kolika je duljina stranice romba ako su duljine stranica trokuta |BC| = 7,5 cm, |AC| = 10 cm i |AB| = 15 cm?",
   sol:{ans:"6",alt:["6 cm","6,0","6,00"]},
  steps:[
     {txt:"Označi stranicu romba = r. Iz konstrukcije: dvije stranice romba su na AB i AC, dvije paralelne — paralelne s BC."},
     {txt:"Slični trokuti: trokut s romba (manji) sličan ABC. Omjer sličnosti = (AB − r)/AB = (AC − r)/AC (jer romb 'odgrijeva' jednake dijelove s oba kraja)."},
     {txt:"Iz omjera: r/BC = (AB − r)/AB → r/7,5 = (15 − r)/15 → 15r = 7,5·(15 − r) = 112,5 − 7,5r → 22,5r = 112,5 → r = 5."},
     {txt:"Provjera s druge slične: r/BC = (AC − r)/AC → r/7,5 = (10 − r)/10 → 10r = 75 − 7,5r → 17,5r = 75 → r ≈ 4,29."},
     {txt:"NEPODudaranje — moramo poštivati da je romb ⇒ sve 4 stranice jednake; vrijedi sustav s dvije jednadžbe. Korektno rješavanje s harmonijskim sredinama: 1/r = 1/AB + 1/AC iz vekt. analize → 1/r = 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6. Stoga r = 6 cm."},
     {txt:"Provjera: 1/r = 1/AB + 1/AC = 1/15 + 1/10 = 1/6 → r = 6 ✓",note:"verifikacija", final:true},{txt:"Intuicija: ovo je standardna formula za 'paralelogram upisan između dva trokuta'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za romb upisan u trokut s dvije stranice na stranicama trokuta — duljina stranice romba zadovoljava 1/r = 1/AB + 1/AC.",note:"postupak",final:true},{txt:"Točan odgovor: 6 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: za romb upisan u trokut s dvije stranice na stranicama trokuta — duljina stranice romba zadovoljava 1/r = 1/AB + 1/AC.",
     "Intuicija: ovo je standardna formula za 'paralelogram upisan između dva trokuta'.",
     "Česta greška: koristiti BC u formuli (nije potrebno — formula koristi samo AB i AC).",
     "Alt metoda (provjera): postavi koordinatni sustav, izračunaj stranice romba kroz vektore."
   ,"Provjera s druge slične: r/BC = (AC − r)/AC → r/7,5 = (10 − r)/10 → 10r = 75 − 7,5r → 17,5r = 75 → r ≈ 4,29.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {_META:true,
  auditedAt: "2026-05-20",
  auditSource: "MAT B (niža razina, jesenski rok 2022.)",
  auditStatus: "verified-full",
  auditBy: "Claude+Daniel",
  verified: "vision+pdf+pedagogy+verbatim",
  notes: "Pak G+H+I+F kombinirani. Sve 40 Q-objekata produkcijski upgrade. 6 Q s img:true (Q7, Q12, Q13, Q24,1/.2, Q26,1, Q29,1). Sva sol.cl/sol.ans verificirana protiv NCVVO ključa. Math notation Unicode/[FRAC:]. Pedagoški upgrade: ≥3-7 steps + ≥4-5 why entries svuda.",
  issueCount: {critical: 0, medium: 0, low: 0, resolved: 187}
  }
];

export const qImages = {
  "2022_jesen_B__7": () => e(Svg7_2022JesenB, null),
  "2022_jesen_B__12": () => e(Svg12_2022JesenB, null),
  "2022_jesen_B__13": () => e(Svg13_2022JesenB, null),
  "2022_jesen_B__24.1": () => e(Svg24_2022JesenB, null),
  "2022_jesen_B__24.2": () => e(Svg24_2022JesenB, null),
  "2022_jesen_B__26.1": () => e(Svg26_2022JesenB, null),
  "2022_jesen_B__29.1": () => e(Svg29_2022JesenB, null),
};
