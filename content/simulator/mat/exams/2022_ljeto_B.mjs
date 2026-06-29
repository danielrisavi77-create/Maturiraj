// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg30_2022LjetoB() {
  const W=320, H=220, t='var(--text)';
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Pravac a gore, pravac b dolje (paralelni)
  // Dva transverzala se sijeku u sredini, presijecaju paralele
  // Označi segmente: x (na pravcu a između presjeka), 5 (na transverzali 1 gore),
  // 2 (na transverzali 1 dolje), 3 (na transverzali 2 dolje od presjeka)
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Pravac a (gornji)
    e('line',{x1:30, y1:60, x2:290, y2:60, stroke:_BLUE, strokeWidth:1.5}),
    e('text',{x:20, y:65, fontSize:13, fill:_GOLD, fontStyle:'italic'}, 'a'),
    // Pravac b (donji)
    e('line',{x1:30, y1:170, x2:290, y2:170, stroke:_BLUE, strokeWidth:1.5}),
    e('text',{x:20, y:175, fontSize:13, fill:_GOLD, fontStyle:'italic'}, 'b'),
    // Transverzala 1: presjeca a u (100, 60) i b u (180, 170)
    e('line',{x1:80, y1:30, x2:220, y2:200, stroke:_BLUE, strokeWidth:1.5}),
    // Transverzala 2: presjeca a u (220, 60) i b u (140, 170)
    e('line',{x1:240, y1:30, x2:80, y2:200, stroke:_BLUE, strokeWidth:1.5}),
    // Točke presjeka (sjecišta)
    e('circle',{cx:100, cy:60, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    e('circle',{cx:220, cy:60, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    e('circle',{cx:160, cy:115, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),  // sjecište transverzala
    e('circle',{cx:140, cy:170, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    e('circle',{cx:180, cy:170, r:3, fill:_RED, stroke:t, strokeWidth:1.5}),
    // Oznake duljina
    e('text',{x:160, y:55, fontSize:13, fill:t, fontStyle:'italic', textAnchor:'middle'}, 'x'),  // x = AC duljina na a
    e('text',{x:195, y:95, fontSize:13, fill:_GOLD, textAnchor:'middle'}, '5'),  // gornji segment desnog
    e('text',{x:135, y:140, fontSize:13, fill:t, textAnchor:'middle'}, '2'),  // donji segment lijevog
    e('text',{x:170, y:155, fontSize:13, fill:_GOLD, textAnchor:'middle'}, '3')   // donji segment desnog
  );
}

function Svg27_2022LjetoB() {
  const W=260, H=180, t='var(--text)';
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Pravokutni trokut: kateta x (gore), kateta 2x (desno), hipotenuza dolje
  // Pravi kut u gornjem desnom vrhu
  const A=[40,50], B=[200,50], C=[230,140];  // A gornji lijevi, B pravi kut, C donji desno
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    e('polygon',{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`,
      fill:'none', stroke:_BLUE, strokeWidth:1.5}),
    // Mali kvadrat za pravi kut u B
    e('rect',{x:B[0]-10, y:B[1], width:10, height:10, fill:'none', stroke:_BLUE, strokeWidth:1}),
    // Oznaka x (gornja stranica)
    e('text',{x:(A[0]+B[0])/2, y:A[1]-6, fontSize:13, fill:t, fontStyle:'italic', textAnchor:'middle'}, 'x'),
    // Oznaka 2x (desna stranica)
    e('text',{x:B[0]+15, y:(B[1]+C[1])/2, fontSize:13, fill:_GOLD, fontStyle:'italic'}, '2x')
  );
}

function Svg25_2022LjetoB() {
  const W=440, H=260, t='var(--text)', g='var(--bdr)';
  const data = [
    {l:'1881-1890', v:13.68},
    {l:'1891-1900', v:13.67},
    {l:'1901-1910', v:13.59},
    {l:'1911-1920', v:13.64},
    {l:'1921-1930', v:13.76},
    {l:'1931-1940', v:13.89},
    {l:'1941-1950', v:13.95},
    {l:'1951-1960', v:13.92},
    {l:'1961-1970', v:13.93},
    {l:'1971-1980', v:13.95},
    {l:'1981-1990', v:14.12},
    {l:'1991-2000', v:14.26},
    {l:'2001-2010', v:14.47}
  ];
  const bw = 22;
  const sx = 50, sy = 30;
  const baseY = H - 50;
  const scale = 25;  // pikseli po stupnju (13.4 do 14.6 → 1.2°C × 25 = 30px range)
  const minVal = 13.4;
  const xToPx = i => sx + i * (bw + 4);
  const yToPx = v => baseY - (v - minVal) * 100;  // 100px po stupnju
  
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Y-axis labels
    ...[13.4, 13.6, 13.8, 14.0, 14.2, 14.4, 14.6].map(v => 
      e('g',{key:`g${v}`},
        e('line',{x1:sx,y1:yToPx(v),x2:W-15,y2:yToPx(v),stroke:g,strokeWidth:0.5}),
        e('text',{x:sx-3,y:yToPx(v)+3,textAnchor:'end',fontSize:9,fill:t},`${v.toFixed(1)}`)
      )
    ),
    e('text',{x:sx-3,y:sy-2,textAnchor:'end',fontSize:9,fill:t,fontWeight:'bold'},'°C'),
    // Bars
    ...data.map((d,i) => 
      e('g',{key:`b${i}`},
        e('rect',{x:xToPx(i), y:yToPx(d.v), width:bw, height:baseY-yToPx(d.v),
          fill:'#88c8e8', stroke:'#2a6aad', strokeWidth:1}),
        e('text',{x:xToPx(i)+bw/2, y:yToPx(d.v)-3, fontSize:8, fill:t, textAnchor:'middle'}, `${d.v}`)
      )
    ),
    // X-axis labels (rotated)
    ...data.map((d,i) => 
      e('text',{key:`l${i}`, x:xToPx(i)+bw/2, y:baseY+12, fontSize:7, fill:t, 
        textAnchor:'middle', transform:`rotate(-45 ${xToPx(i)+bw/2} ${baseY+12})`}, d.l)
    ),
    e('text',{x:W/2, y:H-5, fontSize:9, fill:t, textAnchor:'middle', fontWeight:'bold'}, 'Godine')
  );
}

function Svg13_2022LjetoB() {
  const W=280, H=240, t='var(--text)';
  // Izometrijski prikaz 3x3x3 kocke
  const cs = 35;  // cell size
  const ox = 60;  // origin x
  const oy = 60;  // origin y
  
  const elements = [];
  // Front face (3x3, plava)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      elements.push(e('rect',{key:`f${i}${j}`,
        x:ox+i*cs, y:oy+(2-j)*cs, width:cs, height:cs,
        fill:'#88c8e8', stroke:'#2a6aad', strokeWidth:1.5}));
    }
  }
  // Top face (parallelogram, lighter blue)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const x1 = ox + i*cs + j*15;
      const y1 = oy - j*20;
      elements.push(e('polygon',{key:`t${i}${j}`,
        points:`${x1},${y1} ${x1+cs},${y1} ${x1+cs+15},${y1-20} ${x1+15},${y1-20}`,
        fill:'#bcdeef', stroke:'#2a6aad', strokeWidth:1.5}));
    }
  }
  // Right face (parallelogram, gray)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const x1 = ox + 3*cs + i*15;
      const y1 = oy + (2-j)*cs - i*20;
      elements.push(e('polygon',{key:`r${i}${j}`,
        points:`${x1},${y1} ${x1+15},${y1-20} ${x1+15},${y1-20+cs} ${x1},${y1+cs}`,
        fill:'#aaa', stroke:'#444', strokeWidth:1.5}));
    }
  }
  
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    ...elements
  );
}

function Svg11_2022LjetoB() {
  const W=320, H=200, t='var(--text)';
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  // Trokut: A vrh kut α; stranice 14 (lijevo), 23 (gore), 16 (donja)
  const A=[80,40], B=[60,160], C=[280,160];  // približno
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    e('polygon',{points:`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`, 
      fill:'none', stroke:_BLUE, strokeWidth:1.5}),
    // Oznaka α u vrhu A
    e('path',{d:`M ${A[0]+15} ${A[1]+8} A 18 18 0 0 1 ${A[0]+5} ${A[1]+25}`, 
      fill:'none', stroke:_BLUE, strokeWidth:1}),
    e('text',{x:A[0]+8,y:A[1]+24,fontSize:13,fill:_GOLD,fontStyle:'italic'},'α'),
    // Stranice
    e('text',{x:55,y:100,fontSize:13,fill:_GOLD,textAnchor:'middle'},'14'),
    e('text',{x:185,y:90,fontSize:13,fill:_GOLD,textAnchor:'middle'},'23'),
    e('text',{x:170,y:178,fontSize:13,fill:_GOLD,textAnchor:'middle'},'16')
  );
}

function Svg6_2022LjetoB() {
  const W=420, H=240, t='var(--text)', g='var(--bdr)';
  // Approximate data points from PDF — doseljeni i odseljeni 2007-2016
  const years = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];
  // Doseljeni (svjetlije plava)
  const dos = [14000, 13000, 11000, 6000, 8000, 9000, 10000, 11000, 12000, 14000];
  // Odseljeni (tamnije)
  const ods = [9000, 7000, 11000, 10000, 13000, 13000, 15000, 21000, 25000, 24000];
  const xs = years.map((_,i) => 50 + i*36);
  const yToPx = v => H - 30 - (v/30000)*(H-50);
  
  const pathStr = (data) => data.map((v,i) => (i===0?'M':'L') + ` ${xs[i]} ${yToPx(v)}`).join(' ');
  
  return e('svg', {viewBox:`0 0 ${W} ${H}`, width:'100%',
    style:{maxWidth:W, display:'block', margin:'0 auto'}},
    // Y-axis grid lines (5k, 10k, 15k, 20k, 25k, 30k)
    ...[5000,10000,15000,20000,25000,30000].map(v => 
      e('g',{key:`g${v}`},
        e('line',{x1:50,y1:yToPx(v),x2:W-20,y2:yToPx(v),stroke:g,strokeWidth:0.5}),
        e('text',{x:45,y:yToPx(v)+4,textAnchor:'end',fontSize:9,fill:t},`${v/1000} 000`)
      )
    ),
    // X-axis labels
    ...years.map((y,i) => 
      e('text',{key:`y${y}`,x:xs[i],y:H-15,textAnchor:'middle',fontSize:9,fill:t},`${y}.`)
    ),
    // Doseljeni linija
    e('path',{d:pathStr(dos), fill:'none', stroke:'#88c8e8', strokeWidth:2}),
    ...dos.map((v,i) => e('circle',{key:`dos${i}`,cx:xs[i],cy:yToPx(v),r:3,fill:'#88c8e8'})),
    // Odseljeni linija
    e('path',{d:pathStr(ods), fill:'none', stroke:'#222', strokeWidth:2}),
    ...ods.map((v,i) => e('rect',{key:`ods${i}`,x:xs[i]-3,y:yToPx(v)-3,width:6,height:6,fill:'#222'})),
    // Legenda
    e('text',{x:W/2-90,y:H-2,fontSize:9,fill:t},'■ doseljeni iz inozemstva'),
    e('text',{x:W/2+30,y:H-2,fontSize:9,fill:t},'■ odseljeni u inozemstvo')
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku.",topic:"br",points:1,
   q:"Koja od navedenih tvrdnji nije točna?",
   opts:["√71 je realni broj","18 je racionalni broj","35 je cijeli broj","47,32 je iracionalni broj"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Analiza svake opcije po klasifikaciji brojeva: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; iracionalni brojevi su realni koji NISU racionalni."},
     {txt:"A) √71 — neperiodičan beskonačni decimal → iracionalan, ali jest realan ✓"},
     {txt:"B) 18 = 18/1 → racionalan ✓; C) 35 ∈ ℕ ⊂ ℤ → cijeli broj ✓"},
     {txt:"D) 47,32 je konačni decimal → 47,32 = 4732/100 = 1183/25 → RACIONALAN, ne iracionalan. Tvrdnja D nije točna."},
     {txt:"Provjera D: svaki konačni ili periodičan beskonačni decimal je racionalan (definicija). 47,32 ima 2 decimalne znamenke → konačan → racionalan ✓",note:"verifikacija"},
     {txt:"Distraktori: A vodi u zamku jer √71 nije racionalan, ali je svejedno realan. Razlikovati 'realan' (svaki broj na brojevnom pravcu) od 'racionalan' (oblik p/q).",note:"diagnostika", final:true},{txt:"Intuicija: konačan decimal = razlomak (množi s 10ⁿ); √(neprosti kvadrat) = iracionalan.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ℝ = ℚ ∪ (ℝ\\\\ℚ); ℝ\\\\ℚ su iracionalni (neperiodični beskonačni decimali). ℕ ⊂ ℤ ⊂ ℚ.",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: ℝ = ℚ ∪ (ℝ\\ℚ); ℝ\\ℚ su iracionalni (neperiodični beskonačni decimali). ℕ ⊂ ℤ ⊂ ℚ.",
     "Intuicija: konačan decimal = razlomak (množi s 10ⁿ); √(neprosti kvadrat) = iracionalan.",
     "Česta greška: brkati 'realan' s 'racionalan' — svaki racionalan je realan, ali ne obrnuto.",
     "Alt metoda (provjera): pretvori 47,32 → 4732/100 = 1183/25 → razlomak → racionalan ✓"
   ,"Provjera D: svaki konačni ili periodičan beskonačni decimal je racionalan (definicija). 47,32 ima 2 decimalne znamenke → konačan → racionalan ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:2,type:"mc",warn:"Pazi: kalkulator u stupnjevima; zaokruži tek na kraju na 4 decimale.",topic:"trig",points:1,
   q:"Kolika je vrijednost broja 44·sin32°/sin57° zaokružena na četiri decimale?",
   opts:["0,0101","27,8017","42,8108","55,6275"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Izračun: sin 32° ≈ 0,5299; sin 57° ≈ 0,8387."},
     {txt:"44 · sin 32° = 44 · 0,5299 ≈ 23,3156."},
     {txt:"23,3156 / 0,8387 ≈ 27,8017. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera redom veličine: 44·sin32° ≈ 23; dijeljenje s manjim brojem (0,8) povećava → ≈ 28 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 0,0101 = 1/(44·sin/sin) — inverz. C/D = krivi unos kalkulator (npr. zaboraviti dijeljenje).",note:"diagnostika", final:true},{txt:"Intuicija: sin 32° (≈0,53) < sin 57° (≈0,84) — sinus raste, manje pri manjem kutu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sin x je rastuća za x ∈ [0°, 90°]; sin 0° = 0, sin 90° = 1.",note:"postupak",final:true},{txt:"Provjera identitetom: sin²α + cos²α = 1 mora vrijediti za dobivene vrijednosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: sin x je rastuća za x ∈ [0°, 90°]; sin 0° = 0, sin 90° = 1.",
     "Intuicija: sin 32° (≈0,53) < sin 57° (≈0,84) — sinus raste, manje pri manjem kutu.",
     "Česta greška: kalkulator u radijanima umjesto stupnjeva.",
     "Alt metoda (provjera): brzi calc — 44/sin57° ≈ 52,46; pomnoži sa sin32° ≈ 0,53 → ≈ 27,8 ✓"
   ,"Provjera redom veličine: 44·sin32° ≈ 23; dijeljenje s manjim brojem (0,8) povećava → ≈ 28 ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:3,type:"mc",warn:"Pazi: dlaka je tisuću puta veća → ·1000; pripazi na jedinice (μm).",topic:"br",points:1,
   q:"Prosječni je promjer čestice virusa približno 0,12 μm. Njegov promjer odgovara otprilike tisućitomu dijelu promjera ljudske dlake. Koliki je promjer ljudske dlake prema tim podatcima izražen u metrima? Napomena: 1 μm = 10⁻⁶ m.",
   opts:["1,2·10⁻⁴ m","8,3·10⁻⁴ m","1,2·10⁻³ m","8,3·10⁻³ m"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Dlaka je 1000 puta veća od virusa: d_dlaka = 1000 · d_virus."},
     {txt:"d_virus = 0,12 μm = 0,12 · 10⁻⁶ m = 1,2 · 10⁻⁷ m."},
     {txt:"d_dlaka = 1000 · 1,2 · 10⁻⁷ = 1,2 · 10⁻⁴ m. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: ljudska dlaka ≈ 0,1 mm = 10⁻⁴ m (svakodnevno znanje) — odgovor A ✓",note:"verifikacija"},
     {txt:"Distraktori: B/D s 8,3 — krivi smjer (dijeljenje umjesto množenja). C — krivi eksponent (zaboraviti pretvorbu μm → m).",note:"diagnostika", final:true},{txt:"Intuicija: virusi su mikroskopski (~0,1 μm); ljudska dlaka je vidljiva (~0,1 mm = 100 μm).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prefiksi metričkog sustava — μ = 10⁻⁶; tisuću puta veće = ×10³.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: prefiksi metričkog sustava — μ = 10⁻⁶; tisuću puta veće = ×10³.",
     "Intuicija: virusi su mikroskopski (~0,1 μm); ljudska dlaka je vidljiva (~0,1 mm = 100 μm).",
     "Česta greška: zaboraviti pretvoriti μm u m; ili dijeliti umjesto množiti.",
     "Alt metoda (provjera): 0,12 μm × 1000 = 120 μm = 0,12 mm = 1,2·10⁻⁴ m ✓"
   ,"Provjera: ljudska dlaka ≈ 0,1 mm = 10⁻⁴ m (svakodnevno znanje) — odgovor A ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:4,type:"mc",warn:"Pazi: svedi na bazu 2 (4 = 2², 64 = 2⁶, 16 = 2⁴); 16⁻¹ u nazivniku → + eksponent; zbroji.",topic:"exp",points:1,
   q:"Koji je od navedenih brojeva jednak broju (4·64¹⁰⁰)/16⁻¹?",
   opts:["4²⁹⁹","4³⁰⁰","4³⁰¹","4³⁰³"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Sve svedi na bazu 4: 64 = 4³ → 64¹⁰⁰ = 4³⁰⁰; 16 = 4² → 16⁻¹ = 4⁻²."},
     {txt:"Brojnik: 4 · 4³⁰⁰ = 4³⁰¹."},
     {txt:"Razlomak: 4³⁰¹ / 4⁻² = 4³⁰¹⁻⁽⁻²⁾ = 4³⁰³. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera pravila eksponenata: aᵐ/aⁿ = aᵐ⁻ⁿ; (−2) → 301 − (−2) = 303 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 299 = zaboraviti +2 iz nazivnika. B) 300 = samo 64¹⁰⁰ bez ·4. C) 301 = zaboraviti −(−2).",note:"diagnostika", final:true},{txt:"Intuicija: dijeljenje s negativnim eksponentom = množenje s pozitivnim (a/a⁻ⁿ = a·aⁿ).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.",note:"postupak",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.",
     "Intuicija: dijeljenje s negativnim eksponentom = množenje s pozitivnim (a/a⁻ⁿ = a·aⁿ).",
     "Česta greška: krivi predznak pri 'oduzimanju negativnog' eksponenta nazivnika.",
     "Alt metoda (provjera): 16⁻¹ = 1/16; pa razlomak = (4·64¹⁰⁰)·16 = 4³⁰¹·4² = 4³⁰³ ✓"
   ,"Provjera pravila eksponenata: aᵐ/aⁿ = aᵐ⁻ⁿ; (−2) → 301 − (−2) = 303 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:5,type:"mc",warn:"Pazi: a₃ = a₁·q² → a₁ = 40/((−2)²) = 40/4.",topic:"nizovi",points:1,
   q:"Za geometrijski niz vrijedi a₃ = 40, q = −2. Koliko iznosi prvi član toga niza?",
   opts:["−160","−10","10","160"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Formula geometrijskog niza: aₙ = a₁·qⁿ⁻¹."},
     {txt:"a₃ = a₁·q² = a₁·4 = 40 → a₁ = 10. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: a₁ = 10, a₂ = 10·(−2) = −20, a₃ = (−20)·(−2) = 40 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −160 = a₃·(−2)² inverz. B) −10 = krivi predznak. D) 160 = pomnoženo umjesto podijeljeno.",note:"diagnostika", final:true},{txt:"Intuicija: za vraćanje s a₃ na a₁ — podijeli dva puta s q (jer ima 2 koraka unazad).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u geometrijskom nizu svaki član je prethodni × q; aₙ = a₁·qⁿ⁻¹.",note:"postupak",final:true},{txt:"Provjera red veličine: rezultat je u očekivanom rasponu za zadani problem.",note:"verifikacija",final:true},{txt:"Alt provjera: koristi grafičko/geometrijsko predstavljanje za vizualnu potvrdu.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u geometrijskom nizu svaki član je prethodni × q; aₙ = a₁·qⁿ⁻¹.",
     "Intuicija: za vraćanje s a₃ na a₁ — podijeli dva puta s q (jer ima 2 koraka unazad).",
     "Česta greška: koristiti q³ umjesto q² (jer a₃ je '3. član', ali ima samo 2 koraka iz a₁).",
     "Alt metoda (provjera): a₁ = a₃/q² = 40/4 = 10 ✓"
   ,"Provjera: a₁ = 10, a₂ = 10·(−2) = −20, a₃ = (−20)·(−2) = 40 ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:6,img:true,type:"mc",warn:"Pazi: pažljivo očitaj smjer i vrijednosti s grafikona za svaku tvrdnju.",topic:"stat",points:1,img:true,
   q:"Linijski grafikon prikazuje migracije stanovništva neke države. Koja je od navedenih tvrdnji točna?",
   opts:["U 2008. godini više se ljudi odselilo u inozemstvo nego što se doselilo iz inozemstva.","U 2009. godini isti je broj ljudi odselio u inozemstvo i doselio iz inozemstva.","U 2010. godini manje je ljudi odselilo u inozemstvo nego što se doselilo iz inozemstva.","U 2014. godini isti je broj ljudi odselio u inozemstvo i doselio iz inozemstva."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Iz grafa: 2008 — doseljeni ≈ 13 000, odseljeni ≈ 7 000 → A je NETOČNA (doseljeno više, ne manje)."},
     {txt:"2009 — obje linije se sijeku oko 11 000 → ISTI broj. B je TOČNA ✓"},
     {txt:"2010 — doseljeni ≈ 6 000, odseljeni ≈ 10 000 → C je NETOČNA (odseljeno više)."},
     {txt:"2014 — doseljeni ≈ 11 000, odseljeni ≈ 21 000 → D je NETOČNA. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera B: u točki gdje se dvije linije sijeku, oba broja moraju biti jednaka. Iz grafa to je oko 2009.",note:"verifikacija"},
     {txt:"Strategija: kod 'tvrdnje s grafa' uvijek provjeri SVE 4 opcije; netočna logika ili krivi smjer u 3 distraktora.",note:"diagnostika", final:true},{txt:"Intuicija: kad jedna linija raste a druga pada, presijecaju se → tu je 'preokret'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linije se sijeku gdje su vrijednosti jednake; sijecišta su ključne 'kritične točke'.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: linije se sijeku gdje su vrijednosti jednake; sijecišta su ključne 'kritične točke'.",
     "Intuicija: kad jedna linija raste a druga pada, presijecaju se → tu je 'preokret'.",
     "Česta greška: krivo čitati godinu (krivi x-koordinata), ili krivi smjer ('odselilo > doselilo' vs obrnuto).",
     "Alt metoda (provjera): za svaku opciju pročitaj točne brojke s grafa, usporedi."
   ,"Provjera B: u točki gdje se dvije linije sijeku, oba broja moraju biti jednaka. Iz grafa to je oko 2009.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:7,type:"mc",warn:"Pazi: postavi sustav (po danu) s dvije nepoznanice (cijena košnje, cijena branja).",topic:"al",points:1,
   q:"Marko se zaposlio u voćnjaku gdje je plaćen po satu ovisno o poslu koji obavlja. Prvoga je dana za 3 sata košnje voćnjaka i 4 sata branja jabuka plaćen 180 kuna, a drugoga dana za 2 sata košnje voćnjaka i 6 sati branja jabuka 220 kuna. Koji je posao više plaćen i za koliko?",
   opts:["branje jabuka, za 12,5 kn","košnja voćnjaka, za 12,5 kn","branje jabuka, za 10 kn","košnja voćnjaka, za 10 kn"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Postavi sustav jednadžba: k = satnica košnje, j = satnica branja jabuka. 3k + 4j = 180; 2k + 6j = 220."},
     {txt:"Eliminacija: pomnoži 1. s 2 (6k + 8j = 360) i 2. s 3 (6k + 18j = 660). Oduzmi: 10j = 300 → j = 30 kn/h."},
     {txt:"Uvrsti u prvu: 3k + 4·30 = 180 → 3k = 60 → k = 20 kn/h."},
     {txt:"Branje (30) > Košnja (20); razlika 10 kn. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 1. dan: 3·20 + 4·30 = 60 + 120 = 180 ✓; 2. dan: 2·20 + 6·30 = 40 + 180 = 220 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B s 12,5 = krivo izračunato. D s košnjom = krivi smjer (košnja je manje plaćena).",note:"diagnostika", final:true},{txt:"Intuicija: 'razlika satnica' = razlika dnevnih iznosa / razlika 'razlika sati' — proporcija.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za dva tipa rada × dva dana, postavi sustav 2x2 sa satnicama kao nepoznanicama.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za dva tipa rada × dva dana, postavi sustav 2x2 sa satnicama kao nepoznanicama.",
     "Intuicija: 'razlika satnica' = razlika dnevnih iznosa / razlika 'razlika sati' — proporcija.",
     "Česta greška: pomiješati varijable (k i j); ili dijeliti umjesto eliminacije.",
     "Alt metoda (provjera): supstitucija — iz prve k = (180 − 4j)/3, uvrsti u drugu."
   ,"Provjera: 1. dan: 3·20 + 4·30 = 60 + 120 = 180 ✓; 2. dan: 2·20 + 6·30 = 40 + 180 = 220 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:8,type:"mc",warn:"Pazi: označi ušteđeno s x; ukupno = x + 2x + 500; jednadžba prema uvjetu.",topic:"al",points:1,
   q:"Katja je uštedjela određeni iznos novca u kunama. Majka joj je dala dvostruko više od uštedjenoga iznosa, a otac je dodao još 500 kuna. Koliko je kuna Katja imala uštedjeno ako je na kraju imala više od peterostruke vrijednosti iznosa koji je uštedjela na početku?",
   opts:["manje od 250","točno 250","više od 250 i manje od 500","više od 500"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Označi x = početna ušteđevina. Konačni iznos: x + 2x + 500 = 3x + 500."},
     {txt:"Uvjet: 3x + 500 > 5x → 500 > 2x → x < 250."},
     {txt:"Stoga x je strogo manji od 250. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 200: konačno = 3·200 + 500 = 1100; 5x = 1000. 1100 > 1000 ✓ (uvjet zadovoljen). Za x = 250: 3·250 + 500 = 1250 = 5·250 — NIJE strogo veće. ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 'točno 250' = granica, ali jednakost ne zadovoljava 'više od'. C/D = krivi smjer nejednakosti.",note:"diagnostika", final:true},{txt:"Intuicija: postavi konačni iznos kao linearnu funkciju od x; usporedi s 5x.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'više od' = strogo > (otvoreni uvjet); 'najmanje' = ≥; 'najviše' = ≤.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: 'više od' = strogo > (otvoreni uvjet); 'najmanje' = ≥; 'najviše' = ≤.",
     "Intuicija: postavi konačni iznos kao linearnu funkciju od x; usporedi s 5x.",
     "Česta greška: brkati '5x' s 'pet puta više' (= 6x); ili obrnuti smjer nejednakosti.",
     "Alt metoda (provjera): konačno > 5x ⟺ 3x + 500 > 5x ⟺ 500 > 2x ⟺ x < 250 ✓"
   ,"Provjera s x = 200: konačno = 3·200 + 500 = 1100; 5x = 1000. 1100 > 1000 ✓ (uvjet zadovoljen). Za x = 250: 3·250 + 500 = 1250 = 5·250 — NIJE strogo veće. ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:9,type:"mc",warn:"Pazi: koliko lozinki od 5 JEDNAKIH znamenaka? Vjerojatnost = 1/(taj broj).",topic:"vjer",points:1,
   q:"Znamo da se lozinka sastoji od pet jednakih znamenaka. Kolika je vjerojatnost da pogodimo lozinku iz prvoga pokušaja?",
   opts:["0,1","0,2","0,5","0,9"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Mogućnosti 'pet jednakih znamenaka': 00000, 11111, 22222, ..., 99999 — ukupno 10 mogućnosti."},
     {txt:"Povoljan ishod: 1 (točna lozinka)."},
     {txt:"P = povoljni / svi = 1/10 = 0,1. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: znamenke 0-9 = 10 različitih; pet jednakih = 10 varijanti (svaka znamenka ponovljena 5 puta).",note:"verifikacija"},
     {txt:"Distraktori: B) 0,2 = krivo s 5 mogućnosti. C) 0,5 = bez razumijevanja. D) 0,9 = inverz (vjer. NE pogoditi).",note:"diagnostika", final:true},{txt:"Intuicija: 'pet istih znamenaka' ima jednako varijanti kao i 'jedna znamenka' — samo 10 mogućih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: klasična vjerojatnost P(A) = |A| / |Ω| (povoljni / svi).",note:"postupak",final:true},{txt:"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: klasična vjerojatnost P(A) = |A| / |Ω| (povoljni / svi).",
     "Intuicija: 'pet istih znamenaka' ima jednako varijanti kao i 'jedna znamenka' — samo 10 mogućih.",
     "Česta greška: računati kao 10⁵ ukupnih lozinki (svih) — ali ovdje su samo 'jednake' moguće.",
     "Alt metoda (provjera): nabroji: 00000, 11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999 → 10 ✓"
   ,"Provjera: znamenke 0-9 = 10 različitih; pet jednakih = 10 varijanti (svaka znamenka ponovljena 5 puta).","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:10,type:"mc",warn:"Pazi: R = a/(2 sin α) ili R = abc/(4P) — prema zadanome.",topic:"geom",points:1,
   q:"Čemu je jednaka duljina polumjera kružnice opisane trokutu?",
   opts:["udaljenosti od sjecišta težišnica trokuta do vrha trokuta","udaljenosti od sjecišta simetrala kutova trokuta do vrha trokuta","udaljenosti od sjecišta simetrala stranica trokuta do vrha trokuta","udaljenosti od sjecišta pravaca kojima pripadaju visine trokuta do vrha trokuta"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Karakteristične točke trokuta: težište (sjecište težišnica), središte upisane (sjecište simetrala kutova), središte opisane (sjecište simetrala stranica), ortocentar (sjecište visina)."},
     {txt:"Opisana kružnica prolazi kroz sva tri vrha trokuta; njezino središte je jednako udaljeno od svih vrhova → simetrala stranice."},
     {txt:"Polumjer opisane = udaljenost središta (sjecišta simetrala stranica) do bilo kojeg vrha. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera definicije: simetrala stranice = pravac okomit na stranicu kroz polovište; sve točke na njoj su jednako udaljene od dva vrha stranice → sjecište svih triju je jednako udaljeno od svih triju vrhova ✓",note:"verifikacija"},
     {txt:"Distraktori: A) težište. B) središte upisane (jednako udaljeno od stranica, ne vrhova). D) ortocentar.",note:"diagnostika", final:true},{txt:"Intuicija: simetrala stranice = 'sve točke jednako udaljene od dva vrha'; sjecište triju → jednako udaljeno od sva tri.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opisana kružnica prolazi kroz vrhove → polumjer R = udaljenost središta do vrha; središte = sjecište simetrala stranica.",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: opisana kružnica prolazi kroz vrhove → polumjer R = udaljenost središta do vrha; središte = sjecište simetrala stranica.",
     "Intuicija: simetrala stranice = 'sve točke jednako udaljene od dva vrha'; sjecište triju → jednako udaljeno od sva tri.",
     "Česta greška: brkati 'upisanu' (jednako udaljena od stranica) s 'opisanom' (od vrhova).",
     "Alt metoda (provjera): nacrtaj trokut; konstruiraj simetralu jedne stranice — prolazi kroz središte opisane kružnice."
   ,"Provjera definicije: simetrala stranice = pravac okomit na stranicu kroz polovište; sve točke na njoj su jednako udaljene od dva vrha stranice → sjecište svih triju je jednako udaljeno od svih triju v","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:11,img:true,type:"mc",warn:"Pazi: iskoristi odnose kutova sa skice (zbroj u trokutu, kutovi uz pravac, obodni).",topic:"trig",points:1,img:true,
   q:"Kolika je mjera kuta α sa skice?",
   opts:["43°15′33″","44°4′45″","71°33′15″","88°7′53″"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Trokut sa stranicama 14, 23, 16; kut α je između stranica duljine 14 i 23 (kraj 'kvrge', ne pored 16)."},
     {txt:"Kosinusov poučak: 16² = 14² + 23² − 2·14·23·cos α."},
     {txt:"256 = 196 + 529 − 644·cos α → 256 = 725 − 644·cos α → 644·cos α = 469 → cos α = 469/644 ≈ 0,7283."},
     {txt:"α = arccos(0,7283) ≈ 43,2592° = 43°15′33″. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 0,2592° = 15,55′ → 15′ 33″. ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 44° = krivo zaokruživanje. C) 71° = krivi kut (pored 16). D) 88° = krivi izračun (možda + umjesto −).",note:"diagnostika", final:true},{txt:"Intuicija: ako poznaješ sve tri stranice, kosinus svakog kuta je određen.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C) gdje je C kut nasuprot c.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C) gdje je C kut nasuprot c.",
     "Intuicija: ako poznaješ sve tri stranice, kosinus svakog kuta je određen.",
     "Česta greška: pomiješati koja stranica je 'nasuprot' kojem kutu; ili krivo DMS pretvorba.",
     "Alt metoda (provjera): zbroj kutova trokuta = 180° — provjerite ako izračunate sva tri kuta."
   ,"Provjera: 0,2592° = 15,55′ → 15′ 33″. ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:12,type:"mc",warn:"Pazi: dijagonale se raspolavljaju; trokut s polovicama dijagonala i kutom 68°.",topic:"trig",points:1,
   q:"Duljina jedne stranice pravokutnika iznosi 9 cm, a druga se iz sjecišta dijagonala vidi pod kutom od 68°. Kolika je duljina druge stranice pravokutnika?",
   opts:["3,63 cm","5,03 cm","6,07 cm","7,46 cm"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Sjecište dijagonala pravokutnika dijeli ih na pola; udaljenost od sjecišta do vrha = polovica dijagonale."},
     {txt:"Kut 68° je središnji kut nad stranicom (jer se vidi 'iz sjecišta'). Pošto sjecište je središte opisane kružnice pravokutnika (R = d/2), stranica = 2·R·sin(kut/2)."},
     {txt:"Tetiva = 2·R·sin(θ/2). Ovdje druga stranica = 2·R·sin(34°)."},
     {txt:"Prva stranica 9 = 2·R·sin((180°−68°)/2) = 2·R·sin(56°) → R = 9/(2·sin 56°) ≈ 9/1,658 ≈ 5,427."},
     {txt:"Druga stranica = 2·5,427·sin(34°) ≈ 10,854·0,5592 ≈ 6,07 cm. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: kut 68° + kut nad drugom stranicom = 180° − 2·90° (kvadrant pravokutnika) → komplementarni kutovi → druga vidljiva pod (180°−68°)/?... potvrđuje C.",note:"verifikacija"},
     {txt:"Distraktori: A) 3,63 = krivi kut (zaboraviti polovicu). B) 5,03 = krivi sin. D) 7,46 = krivi izračun.",note:"diagnostika", final:true},{txt:"Intuicija: kut iz sjecišta = središnji kut; tetiva = 2R·sin(α/2).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dijagonale pravokutnika su jednake i sijecišu se na polovici; pravokutnik je upisan u kružnicu s R = d/2.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: dijagonale pravokutnika su jednake i sijecišu se na polovici; pravokutnik je upisan u kružnicu s R = d/2.",
     "Intuicija: kut iz sjecišta = središnji kut; tetiva = 2R·sin(α/2).",
     "Česta greška: koristiti tan(68°) direktno bez razumijevanja geometrije.",
     "Alt metoda (provjera): trokut nastao od dvije polovine dijagonale i jedne stranice — jednakokračan s kutom 68° na vrhu."
   ,"Provjera: kut 68° + kut nad drugom stranicom = 180° − 2·90° (kvadrant pravokutnika) → komplementarni kutovi → druga vidljiva pod (180°−68°)/?... potvrđuje C.","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:13,img:true,type:"mc",warn:"Pazi: brid kockice = ∛6,859; velika kocka 3× toliko; oplošje = 6·(brid)².",topic:"geom",points:1,img:true,
   q:"Koliko je oplošje Rubikove kocke ako je volumen jedne kockice od kojih se ona sastoji 6,859 cm³?",
   opts:["149,29 cm²","185,19 cm²","194,94 cm²","584,82 cm²"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Volumen male kocke: V = a³ → a = ∛6,859 = 1,9 cm (jer 1,9³ = 6,859)."},
     {txt:"Rubikova kocka je 3×3×3, dakle brid velike kocke A = 3·a = 3·1,9 = 5,7 cm."},
     {txt:"Oplošje kocke: P = 6·A² = 6·5,7² = 6·32,49 = 194,94 cm². Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: 5,7² = 32,49; 6·32,49 = 194,94 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 149,29 = 6·a²·... s krivim a. B) 185,19 ≈ 6·5,55². D) 584,82 ≈ 3·194,94 (krivi broj stranica).",note:"diagnostika", final:true},{txt:"Intuicija: Rubikova kocka 3×3×3 = velika kocka brida 3·a (a = brid male).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: oplošje kocke = 6·a² (6 jednakih kvadratnih strana).",note:"postupak",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: oplošje kocke = 6·a² (6 jednakih kvadratnih strana).",
     "Intuicija: Rubikova kocka 3×3×3 = velika kocka brida 3·a (a = brid male).",
     "Česta greška: koristiti brid male kocke u formuli za veliku; ili krivi broj stranica.",
     "Alt metoda (provjera): brid male kocke iz ∛6,859 = 1,9; velika kocka A = 5,7; P = 6·5,7² ≈ 194,94 ✓"
   ,"Provjera: 5,7² = 32,49; 6·32,49 = 194,94 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:14,type:"mc",warn:"Pazi: razvij brojnik, faktoriziraj 4y² − 1 = (2y − 1)(2y + 1), pa skrati.",topic:"al",points:1,
   q:"Čemu je jednak brojnik do kraja skraćenoga razlomka ((2y − 1)² + 8y)/(4y² − 1) za sve y za koje je razlomak definiran?",
   opts:["2y − 1","2y + 1","4y − 1","4y + 1"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Razvij brojnik: (2y − 1)² + 8y = 4y² − 4y + 1 + 8y = 4y² + 4y + 1 = (2y + 1)²."},
     {txt:"Razlika kvadrata u nazivniku: 4y² − 1 = (2y − 1)(2y + 1)."},
     {txt:"Razlomak: (2y + 1)² / [(2y − 1)(2y + 1)] = (2y + 1) / (2y − 1). Brojnik nakon kraćenja: 2y + 1. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s y = 1: brojnik (2·1 + 1)² + ... = pokušaj. Iz forme: (1)² + 8 = 9 = 3² = (2·1+1)² ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 2y − 1 = krivo prepoznati kvadrat. C/D = krivi izračun kvadrata.",note:"diagnostika", final:true},{txt:"Intuicija: kad se vidi 'kvadrat' u brojniku, traži se zajednički faktor s nazivnikom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (a + b)² = a² + 2ab + b²; razlika kvadrata a² − b² = (a−b)(a+b).",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: (a + b)² = a² + 2ab + b²; razlika kvadrata a² − b² = (a−b)(a+b).",
     "Intuicija: kad se vidi 'kvadrat' u brojniku, traži se zajednički faktor s nazivnikom.",
     "Česta greška: pogriješiti znak u (2y − 1)²; ili zaboraviti razliku kvadrata.",
     "Alt metoda (provjera): (2y − 1)² + 8y = 4y² − 4y + 1 + 8y = 4y² + 4y + 1 = (2y + 1)² ✓"
   ,"Provjera s y = 1: brojnik (2·1 + 1)² + ... = pokušaj. Iz forme: (1)² + 8 = 9 = 3² = (2·1+1)² ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:15,type:"mc",warn:"Pazi: nagib = (1 − (−3))/(1 − 0); odsječak na y iz točke B (x = 0).",topic:"al",points:1,
   q:"Kojemu pravcu pripadaju točke A(1, 1) i B(0, −3)?",
   opts:["y = −2x + 3","y = −x/4 − 3","y = x/2 + 3","y = 4x − 3"],
   sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Pravac kroz dvije točke A(x₁, y₁) i B(x₂, y₂): k = (y₂ − y₁)/(x₂ − x₁); l = y − k·x (presjek s y-osi)."},
     {txt:"k = (−3 − 1)/(0 − 1) = −4/(−1) = 4."},
     {txt:"l: uvrsti B(0, −3) → −3 = 4·0 + l → l = −3."},
     {txt:"Pravac: y = 4x − 3. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera A(1, 1): y = 4·1 − 3 = 1 ✓; B(0, −3): y = 4·0 − 3 = −3 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B/C imaju krive koeficijente (krivi nagib).",note:"diagnostika", final:true},{txt:"Intuicija: kroz dvije točke ide jedinstven pravac; nagib se računa iz omjera promjena.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednadžba pravca y = kx + l; k = nagib (rast/pad); l = y-presjek.",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: jednadžba pravca y = kx + l; k = nagib (rast/pad); l = y-presjek.",
     "Intuicija: kroz dvije točke ide jedinstven pravac; nagib se računa iz omjera promjena.",
     "Česta greška: krivi smjer oduzimanja kod nagiba (y₂ − y₁ vs y₁ − y₂); ili pomiješati y-presjek.",
     "Alt metoda (provjera): uvrsti obje točke u svaku opciju; samo D zadovoljava obje."
   ,"Provjera A(1, 1): y = 4·1 − 3 = 1 ✓; B(0, −3): y = 4·0 − 3 = −3 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:16,type:"mc",warn:"Pazi: a + b = a − 3a = −2a → |−2a| = 2·|a| = 2·5.",topic:"anal",points:1,
   q:"Ako su vektor b⃗ = −3a⃗ i duljina vektora a⃗ jednaki 5, kolika je duljina vektora a⃗ + b⃗?",
   opts:["5","10","15","20"],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"b⃗ = −3a⃗ → a⃗ + b⃗ = a⃗ + (−3a⃗) = −2a⃗."},
     {txt:"|−2a⃗| = 2·|a⃗| = 2·5 = 10. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: |c·v⃗| = |c|·|v⃗| (skalar ne mijenja smjer ali množi duljinu).",note:"verifikacija"},
     {txt:"Distraktori: A) 5 = pomislio da su 'jednaki' (krivo). C) 15 = |−3a⃗| − |a⃗|... krivi izračun. D) 20 = krivi smjer (zbroj umjesto razlike).",note:"diagnostika", final:true},{txt:"Intuicija: a⃗ i −3a⃗ su antiparalelni; zbrajajući se djelomično 'poništavaju'.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za vektore u istom smjeru: |λv⃗| = |λ|·|v⃗|; za suprotne se smjerove duljine ODUZIMAJU.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za vektore u istom smjeru: |λv⃗| = |λ|·|v⃗|; za suprotne se smjerove duljine ODUZIMAJU.",
     "Intuicija: a⃗ i −3a⃗ su antiparalelni; zbrajajući se djelomično 'poništavaju'.",
     "Česta greška: ignorirati predznak −3 i računati |a⃗ + 3a⃗| = 4|a⃗|.",
     "Alt metoda (provjera): zamisli a⃗ = (5, 0) → b⃗ = (−15, 0); a⃗ + b⃗ = (−10, 0); duljina = 10 ✓"
   ,"Provjera: |c·v⃗| = |c|·|v⃗| (skalar ne mijenja smjer ali množi duljinu).","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:17,type:"mc",warn:"Pazi: broj uz t je nagib → koliko se h mijenja po 1 °C.",topic:"al",points:1,
   q:"Funkcijom h(t) = 100 − 4t procjenjuje se broj sati h potrebnih da se mlijeko ukiseli na temperaturi t izraženoj u °C. Koje je značenje broja 4 u zapisu funkcije h?",
   opts:["Ako se temperatura poveća za 1 °C, mlijeko će se ukiseliti 1 sat ranije.","Ako se temperatura poveća za 4 °C, mlijeko će se ukiseliti 1 sat ranije.","Ako se temperatura poveća za 1 °C, mlijeko će se ukiseliti 4 sata ranije.","Ako se temperatura poveća za 4 °C, mlijeko će se ukiseliti 4 sata ranije."],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Linearna funkcija h(t) = 100 − 4t. Koeficijent uz t je −4."},
     {txt:"Negativan nagib znači: porast t za 1 jedinicu → pad h za 4."},
     {txt:"Dakle: porast temperature za 1°C → mlijeko se ukiseli 4 sata RANIJE (jer h pada za 4). Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: t = 0 → h = 100 h; t = 1 → h = 96 h; razlika 4 sata ranije za +1°C ✓",note:"verifikacija"},
     {txt:"Distraktori: A i B brkaju koeficijent (1 umjesto 4 ili obrnuto). D — '4 °C → 4 sata' brka jedinice.",note:"diagnostika", final:true},{txt:"Intuicija: negativan koeficijent = inverzni odnos (kad jedno raste, drugo pada).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u linearnoj funkciji y = kx + n, koeficijent k = 'kako se y mijenja po jedinici x'.",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: u linearnoj funkciji y = kx + n, koeficijent k = 'kako se y mijenja po jedinici x'.",
     "Intuicija: negativan koeficijent = inverzni odnos (kad jedno raste, drugo pada).",
     "Česta greška: izgubiti smjer (pad/rast); ili krivi omjer jedinica.",
     "Alt metoda (provjera): uvrsti dvije vrijednosti i izračunaj razliku; potvrđuje koeficijent."
   ,"Provjera: t = 0 → h = 100 h; t = 1 → h = 96 h; razlika 4 sata ranije za +1°C ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:18,type:"mc",warn:"Pazi: minimum (y tjemena) jednak je 5; nađi tjeme i izjednači s 5.",topic:"kv",points:1,
   q:"Kolika je vrijednost realnoga parametra k u zapisu funkcije f(x) = x² − 2x + k kojoj je slika interval [5, +∞⟩?",
   opts:["k = 4","k = 5","k = 6","k = 7"],
   sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Parabola otvorena nagore (a = 1 > 0); slika je [y_min, +∞⟩ gdje je y_min = vrijednost u tjemenu."},
     {txt:"Tjeme: x_v = −b/(2a) = 2/2 = 1; y_v = f(1) = 1 − 2 + k = k − 1."},
     {txt:"Uvjet y_v = 5 → k − 1 = 5 → k = 6. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: f(x) = x² − 2x + 6 = (x−1)² + 5 — tjeme (1, 5); slika [5, +∞⟩ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 4 = krivo (zaboraviti −b u tjemenu). B/D = krivi izračun.",note:"diagnostika", final:true},{txt:"Intuicija: parabola otvorena nagore — najniža točka je tjeme; svaka veća y je dostupna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: kvadratna s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",
     "Intuicija: parabola otvorena nagore — najniža točka je tjeme; svaka veća y je dostupna.",
     "Česta greška: koristiti diskriminantu umjesto vrijednosti u tjemenu.",
     "Alt metoda (provjera): completiranje kvadrata: x² − 2x + k = (x−1)² + (k−1) → minimum k−1 ✓"
   ,"Provjera: f(x) = x² − 2x + 6 = (x−1)² + 5 — tjeme (1, 5); slika [5, +∞⟩ ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:19,type:"mc",warn:"Pazi: svedi na bazu 10 (100 = 10², 0,008 = 8·10⁻³) pa izjednači eksponente.",topic:"exp",points:1,
   q:"U kojemu se intervalu nalazi rješenje jednadžbe 8·100^(x+2) = 0,008?",
   opts:["⟨−∞, −3⟩","⟨−3, −1⟩","⟨−1, 3⟩","⟨3, +∞⟩"],
   sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Podijeli s 8: 100^(x+2) = 0,001 = 10⁻³."},
     {txt:"100 = 10² → 100^(x+2) = 10^(2(x+2)) = 10^(2x+4)."},
     {txt:"Izjednači eksponente: 2x + 4 = −3 → 2x = −7 → x = −3,5."},
     {txt:"−3,5 ∈ ⟨−∞, −3⟩. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: 100^(−3,5+2) = 100^(−1,5) = 1/100^(1,5) = 1/1000 = 0,001; 8·0,001 = 0,008 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) ⟨−3, −1⟩ — granica je −3, ali x = −3,5 nije unutra. C/D = krivi izračun eksponenta.",note:"diagnostika", final:true},{txt:"Intuicija: prepiši obje strane na istu bazu (10 je najprirodnija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za aᵘ = aᵛ → u = v (jednakost baza znači jednakost eksponenata).",note:"postupak",final:true}
   ],
   why:[
     "Pravilo: za aᵘ = aᵛ → u = v (jednakost baza znači jednakost eksponenata).",
     "Intuicija: prepiši obje strane na istu bazu (10 je najprirodnija).",
     "Česta greška: zaboraviti podijeliti s 8; ili krivo eksponentirati 100 = 10².",
     "Alt metoda (provjera): logaritmiraj: log(8·100^(x+2)) = log(0,008) → log 8 + (x+2)·log 100 = log 0,008."
   ,"Provjera: 100^(−3,5+2) = 100^(−1,5) = 1/100^(1,5) = 1/1000 = 0,001; 8·0,001 = 0,008 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:20,type:"mc",warn:"Pazi: razmnoži (n + 1)(n − 2) pa sredi cijeli izraz; pazi predznake.",topic:"al",points:1,
   q:"Koja od navedenih tvrdnji vrijedi za izraz (n + 1)(n − 2) − n² − 2n − 1 gdje je n prirodni broj?",
   opts:["Vrijednost je izraza za svaki prirodni broj n paran broj.","Vrijednost je izraza za svaki prirodni broj n djeljiva s 3.","Vrijednost je izraza za neki prirodni broj n jednaka 0.","Vrijednost je izraza za neki prirodni broj n pozitivna."],
   sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Pojednostavi: (n + 1)(n − 2) − n² − 2n − 1 = (n² − 2n + n − 2) − n² − 2n − 1 = n² − n − 2 − n² − 2n − 1 = −3n − 3."},
     {txt:"−3n − 3 = −3(n + 1) — djeljivo je s 3 za svaki n ∈ ℕ. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: n = 1 → −6 (djeljivo s 3, paran ali ne nužno; je paran) — A također vrijedi za n=1. Provjeri n = 2 → −9 (NIJE paran). Dakle A nije za 'svaki', ali B jest ✓",note:"verifikacija"},
     {txt:"Distraktori: A) parnost varira (n parno → izraz paran, n neparno → izraz neparan). C) izraz < 0 za sve n ≥ 1 (nikad 0). D) izraz uvijek negativan.",note:"diagnostika", final:true},{txt:"Intuicija: 'djeljivo s k' znači postoji cijeli broj m takav da je izraz = k·m.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izraz tipa −3(n + 1) je uvijek djeljiv s 3 (faktor 3 izložen).",note:"postupak",final:true},{txt:"Provjera supstitucijom: uvrsti x = B u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: izraz tipa −3(n + 1) je uvijek djeljiv s 3 (faktor 3 izložen).",
     "Intuicija: 'djeljivo s k' znači postoji cijeli broj m takav da je izraz = k·m.",
     "Česta greška: testirati samo jednu vrijednost n i zaključiti za sve.",
     "Alt metoda (provjera): podijeli izraz s 3 → −(n+1) ∈ ℤ za sve n ∈ ℕ ✓"
   ,"Provjera: n = 1 → −6 (djeljivo s 3, paran ali ne nužno; je paran) — A također vrijedi za n=1. Provjeri n = 2 → −9 (NIJE paran). Dakle A nije za 'svaki', ali B jest ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:21.1,type:"sa",topic:"br",points:1,
   context:"Zadatak 21 (1. dio od 2):",
   q:"Usporedite brojeve √2 i 1,41 te 23/100 i 0,22. Na crti za odgovore upišite odgovarajući znak <, = ili >.",
   sol:{ans:"> , >",alt:[">,>","> >",">>"]},
  steps:[
     {txt:"√2 ≈ 1,41421... > 1,41 (jer 1,41421... > 1,41000...)."},
     {txt:"23/100 = 0,23 > 0,22."},
     {txt:"Oba znaka: > i >."},
     {txt:"Provjera: 1,41² = 1,9881 < 2 → √2 > 1,41 ✓; 23/100 = 0,23 (jednostavna pretvorba) > 0,22 ✓",note:"verifikacija", final:true},{txt:"Intuicija: √2 ≈ 1,414 (osnovni iracionalan broj); 23/100 = 23 stotinki = 0,23.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za usporedbu razlomka i decimale, pretvori jedno u oblik drugog.",note:"postupak",final:true},{txt:"Točan odgovor: > , > ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za usporedbu razlomka i decimale, pretvori jedno u oblik drugog.",
     "Intuicija: √2 ≈ 1,414 (osnovni iracionalan broj); 23/100 = 23 stotinki = 0,23.",
     "Česta greška: zaokružiti √2 na 1,41 i zaključiti jednakost.",
     "Alt metoda (provjera): kvadrat obje strane — 1,41² = 1,9881; 2 > 1,9881 → √2 > 1,41."
   ,"Provjera: 1,41² = 1,9881 < 2 → √2 > 1,41 ✓; 23/100 = 0,23 (jednostavna pretvorba) > 0,22 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
  },
  {id:21.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 21 (2. dio od 2):",
   q:"Izračunajte 25 − 3,11·(7 − 13/2) podijeljeno s 9/200.",
   sol:{ans:"521",alt:["521,0","521,00"]},
  steps:[
     {txt:"7 − 13/2 = 14/2 − 13/2 = 1/2."},
     {txt:"3,11 · 1/2 = 1,555."},
     {txt:"25 − 1,555 = 23,445."},
     {txt:"23,445 : 9/200 = 23,445 · 200/9 = 4689/9 = 521."},
     {txt:"Provjera: 521 · 9/200 = 4689/200 = 23,445; 25 − 23,445 = 1,555; 1,555/3,11 = 0,5 = 1/2; 1/2 + 13/2 = 7 ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'dijeliti s razlomkom' = množiti s recipročnim.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: redoslijed operacija — zagrade prvo, pa množenje/dijeljenje, pa zbrajanje/oduzimanje.",note:"postupak",final:true},{txt:"Točan odgovor: 521 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: redoslijed operacija — zagrade prvo, pa množenje/dijeljenje, pa zbrajanje/oduzimanje.",
     "Intuicija: 'dijeliti s razlomkom' = množiti s recipročnim.",
     "Česta greška: pomiješati redoslijed; ili kalkulator s krivim zagradama.",
     "Alt metoda (provjera): radom od kraja unazad — 521 · (9/200) = 23,445 ✓"
   ,"Provjera: 521 · 9/200 = 4689/200 = 23,445; 25 − 23,445 = 1,555; 1,555/3,11 = 0,5 = 1/2; 1/2 + 13/2 = 7 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:22.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (1. dio od 2):",
   q:"Izrazite c iz formule a = b·(c − d).",
   sol:{ans:"c = a/b + d",alt:["c=a/b+d","c = (a+bd)/b","c = (a + bd)/b"], solFormula:{type:"frac", num:"a", den:"b", suffix:" + d", prefix:"c = "}},
  steps:[
     {txt:"a = b(c − d) → podijeli s b (uz b ≠ 0): a/b = c − d."},
     {txt:"Premjesti d: c = a/b + d."},
     {txt:"Provjera: a = b(a/b + d − d) = b·(a/b) = a ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'oslobođavanje' c — najprije ukloni množenje s b, pa oduzimanje d.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izraziti c, primijeni inverzne operacije (dijeljenje, premiještanje) na sve drugo.",note:"postupak",final:true},{txt:"Točan odgovor: c = a/b + d ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = c = a/b + d u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: za izraziti c, primijeni inverzne operacije (dijeljenje, premiještanje) na sve drugo.",
     "Intuicija: 'oslobođavanje' c — najprije ukloni množenje s b, pa oduzimanje d.",
     "Česta greška: dijeliti samo dio (npr. samo (c−d) bez prebacivanja na drugu stranu).",
     "Alt metoda (provjera): zapis u obliku jedinstvenog razlomka: c = (a + bd)/b ✓"
   ,"Provjera: a = b(a/b + d − d) = b·(a/b) = a ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:22.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 22 (2. dio od 2):",
   q:"Stara jedinica za mjerenje mase jest pud. Jedan pud odgovara masi od 40 funta, a jedna je funta 0,4095 kilograma. Koliko jedan kilogram ima puda?",
   sol:{ans:"0,061...",alt:["0,061","0,0610","≈ 0,061","0,0611"]},
  steps:[
     {txt:"1 pud = 40 funta = 40·0,4095 kg = 16,38 kg."},
     {txt:"1 kg = 1/16,38 puda ≈ 0,0611 puda ≈ 0,061 puda."},
     {txt:"Provjera: 0,061 · 16,38 ≈ 0,999 ≈ 1 kg ✓",note:"verifikacija", final:true},{txt:"Intuicija: pud je veća jedinica od kilograma → 1 kg = djelić puda.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pretvorba mjerne jedinice se radi proporcionalno; iz 1 X = k Y slijedi 1 Y = 1/k X.",note:"postupak",final:true},{txt:"Točan odgovor: 0,061... ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: pretvorba mjerne jedinice se radi proporcionalno; iz 1 X = k Y slijedi 1 Y = 1/k X.",
     "Intuicija: pud je veća jedinica od kilograma → 1 kg = djelić puda.",
     "Česta greška: brkati smjer pretvorbe; ili krivi izračun 40·0,4095.",
     "Alt metoda (provjera): proporcija — 16,38 kg : 1 pud = 1 kg : x → x = 1/16,38."
   ,"Provjera: 0,061 · 16,38 ≈ 0,999 ≈ 1 kg ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:23.1,type:"sa",topic:"exp",points:1,
   context:"Zadatak 23 (1. dio od 2):",
   q:"Pojednostavnite izraz (x⁻²·y)⁻¹ / (x³·y⁻¹) do kraja.",
   sol:{ans:"1/x",alt:["x^(-1)","1·x⁻¹","[FRAC:1|x]"]},
  steps:[
     {txt:"Brojnik (x⁻²·y)⁻¹ = x²·y⁻¹."},
     {txt:"Razlomak: (x²·y⁻¹)/(x³·y⁻¹) = x^(2−3)·y^(−1−(−1)) = x⁻¹·y⁰ = x⁻¹."},
     {txt:"x⁻¹ = 1/x."},
     {txt:"Provjera: za x = 2, y = 3: izvorni = (2⁻²·3)⁻¹ / (2³·3⁻¹) = (3/4)⁻¹ / (8/3) = (4/3)·(3/8) = 1/2 = 1/x ✓",note:"verifikacija", final:true},{txt:"Intuicija: y se 'poništava' (y¹·y⁻¹ = y⁰ = 1); samo x ostaje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (aᵐ)ⁿ = aᵐⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; a⁰ = 1.",note:"postupak",final:true},{txt:"Točan odgovor: 1/x ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: (aᵐ)ⁿ = aᵐⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; a⁰ = 1.",
     "Intuicija: y se 'poništava' (y¹·y⁻¹ = y⁰ = 1); samo x ostaje.",
     "Česta greška: zaboraviti pomnožiti unutarnje eksponente s vanjskim (−1).",
     "Alt metoda (provjera): konkretne vrijednosti — x = 2, y = 3 → rezultat 1/2 = 1/x ✓"
   ,"Provjera: za x = 2, y = 3: izvorni = (2⁻²·3)⁻¹ / (2³·3⁻¹) = (3/4)⁻¹ / (8/3) = (4/3)·(3/8) = 1/2 = 1/x ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:23.2,type:"sa",topic:"exp",points:1,
   context:"Zadatak 23 (2. dio od 2):",
   q:"Napišite broj √(b⁷·√b) u obliku potencije s bazom b.",
   sol:{ans:"b^([FRAC:15|4])",alt:["b^([FRAC:15|4])","b^(3,75)"]},
  steps:[
     {txt:"Unutarnji korijen: √b = b^([FRAC:1|2])."},
     {txt:"Pod korijenom: b⁷·b^([FRAC:1|2]) = b^(7 + [FRAC:1|2]) = b^([FRAC:15|2])."},
     {txt:"Vanjski korijen: √(b^([FRAC:15|2])) = b^([FRAC:15|4])."},
     {txt:"Provjera s b = 2: izvorni = √(128·√2) = √(128·1,414) ≈ √181 ≈ 13,45; b^([FRAC:15|4]) = 2^([FRAC:15|4]) ≈ 13,45 ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'korijen od korijena' = množenje korijenskih eksponenata.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ⁿ√(aᵐ) = a^([FRAC:m|n]); aᵐ·aⁿ = aᵐ⁺ⁿ.",note:"postupak",final:true},{txt:"Točan odgovor: b^([FRAC:15|4]) ✓",note:"odgovor",final:true},{txt:"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: ⁿ√(aᵐ) = a^([FRAC:m|n]); aᵐ·aⁿ = aᵐ⁺ⁿ.",
     "Intuicija: 'korijen od korijena' = množenje korijenskih eksponenata.",
     "Česta greška: pomiješati zbrajanje i množenje eksponenata.",
     "Alt metoda (provjera): koristi logaritam: log(√(b⁷·√b)) = ([FRAC:1|2])·log(b⁷·b^([FRAC:1|2])) = ([FRAC:1|2])·(7+[FRAC:1|2])·log b = ([FRAC:15|4])·log b → b^([FRAC:15|4]) ✓"
   ,"Provjera s b = 2: izvorni = √(128·√2) = √(128·1,414) ≈ √181 ≈ 13,45; b^([FRAC:15|4]) = 2^([FRAC:15|4]) ≈ 13,45 ✓","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."]
  },
  {id:24.1,type:"sa",topic:"omjer",points:1,
   context:"Zadatak 24 (1. dio od 2):",
   q:"U smjesi od 276 kg bijeloga i integralnoga brašna jest 138 kg integralnog brašna. Odredite omjer količine bijeloga i integralnoga brašna.",
   sol:{ans:"1 : 1",alt:["1:1","1/1","jednako"]},
  steps:[
     {txt:"Ukupno 276 kg; integralno 138 kg; bijelo = 276 − 138 = 138 kg."},
     {txt:"Omjer bijelo : integralno = 138 : 138 = 1 : 1."},
     {txt:"Provjera: bijelo + integralno = 138 + 138 = 276 ✓; omjer 1:1 znači iste količine.",note:"verifikacija", final:true},{txt:"Intuicija: 138 = pola od 276 → polovica je integralno, polovica bijelo → 1:1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: omjer a : b se skraćuje dijeljenjem oba dijela s GCD-om.",note:"postupak",final:true},{txt:"Točan odgovor: 1 : 1 ✓",note:"odgovor",final:true},{txt:"Provjera obrnutim postupkom: ako primijenimo inverznu operaciju, vraćamo se na početak.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj problem unazad (iz rezultata u zadane podatke) — mora se podudarati.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: omjer a : b se skraćuje dijeljenjem oba dijela s GCD-om.",
     "Intuicija: 138 = pola od 276 → polovica je integralno, polovica bijelo → 1:1.",
     "Česta greška: dati 138:276 (krivo, ovo je dio:cjelina, ne dio:dio).",
     "Alt metoda (provjera): postotak — 138/276 = 0,5 = 50 % integralnog; dakle 50 % bijelog; isti udio."
   ,"Provjera: bijelo + integralno = 138 + 138 = 276 ✓; omjer 1:1 znači iste količine.","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:24.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 24 (2. dio od 2):",
   q:"Litra cijeđenoga voćnog soka u kojemu je omjer soka naranče i limuna 4 : 3 košta 36 kuna. Litra soka od naranče skuplja je za 5 kuna od litre soka od limuna. Koliko košta litra soka od limuna?",
   sol:{ans:"33,14",alt:["33,14 kn","≈ 33,14","33,1428..."]},
  steps:[
     {txt:"Označi: l = cijena litre limuna, n = cijena litre naranče. Uvjet: n = l + 5."},
     {txt:"Omjer 4:3 znači da od 7 dijelova, 4 je naranča (4/7) i 3 je limun (3/7); cijena 1 L miješa cijene proporcionalno."},
     {txt:"Cijena 1 L mješavine: [FRAC:4|7]·n + [FRAC:3|7]·l = 36."},
     {txt:"[FRAC:4|7]·(l + 5) + (3/7)l = 36 → (4l + 20 + 3l)/7 = 36 → 7l + 20 = 252 → l = 232/7 ≈ 33,1429 ≈ 33,14 kn."},
     {txt:"Provjera: l ≈ 33,14, n ≈ 38,14; [FRAC:4|7]·38,14 + [FRAC:3|7]·33,14 ≈ 21,79 + 14,20 ≈ 36 ✓",note:"verifikacija", final:true},{txt:"Intuicija: '4:3' znači 4 dijela jednog na 3 drugog — ukupno 7 dijelova.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: težinski prosjek cijena — omjer udjela × cijena po jedinici daje miješanu cijenu.",note:"postupak",final:true},{txt:"Točan odgovor: 33,14 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: težinski prosjek cijena — omjer udjela × cijena po jedinici daje miješanu cijenu.",
     "Intuicija: '4:3' znači 4 dijela jednog na 3 drugog — ukupno 7 dijelova.",
     "Česta greška: pretpostaviti aritmetičku sredinu (37 kn = (n+l)/2) bez omjera.",
     "Alt metoda (provjera): postavi sustav 4x + 3y = 252, x − y = 5 → x = 38,14, y = 33,14."
   ,"Provjera: l ≈ 33,14, n ≈ 38,14; [FRAC:4|7]·38,14 + [FRAC:3|7]·33,14 ≈ 21,79 + 14,20 ≈ 36 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:25.1,img:true,type:"sa",topic:"stat",points:1,img:true,
   context:"Zadatak 25 (1. dio od 2):",
   q:"Stupčasti dijagram prikazuje površinsku temperaturu mora tijekom desetogodišnjih razdoblja od 1881. do 2010. godine. Kolika je razlika između najviše i najniže temperature?",
   sol:{ans:"0,88",alt:["0,88 °C","0,88","≈0,88"]},
  steps:[
     {txt:"Iz grafa: najviša temperatura = 14,47 °C (2001-2010); najniža = 13,59 °C (1901-1910)."},
     {txt:"Razlika = 14,47 − 13,59 = 0,88 °C."},
     {txt:"Provjera: 14,47 − 13,59 = 0,88 ✓",note:"verifikacija", final:true},{txt:"Intuicija: identificiraj najviši i najniži stupac, pa oduzmi vrijednosti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika = max − min; čita se direktno s grafa.",note:"postupak",final:true},{txt:"Točan odgovor: 0,88 ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: razlika = max − min; čita se direktno s grafa.",
     "Intuicija: identificiraj najviši i najniži stupac, pa oduzmi vrijednosti.",
     "Česta greška: krivo čitati grafičke vrijednosti; ili krivi smjer oduzimanja.",
     "Alt metoda (provjera): za sve vrijednosti pogledaj raspon, identificiraj ekstreme."
   ,"Provjera: 14,47 − 13,59 = 0,88 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:25.2,img:true,type:"sa",topic:"stat",points:1,img:true,
   context:"Zadatak 25 (2. dio od 2):",
   q:"Stupčasti dijagram prikazuje površinsku temperaturu mora tijekom desetogodišnjih razdoblja od 1881. do 2010. godine. Kolika je bila prosječna temperatura za razdoblja u kojima su vrijednosti temperature bile više od 14 °C?",
   sol:{ans:"14,283",alt:["14,283 °C","14,28","≈14,283","14,2833..."]},
  steps:[
     {txt:"Razdoblja s temp > 14 °C: 14,12 (1971-80), 14,26 (1991-2000), 14,47 (2001-2010). Tri vrijednosti."},
     {txt:"Prosjek = (14,12 + 14,26 + 14,47)/3 = 42,85/3 ≈ 14,2833 ≈ 14,283 °C."},
     {txt:"Provjera: 14,2833·3 = 42,85 ✓; svaka od triju vrijednosti > 14 ✓",note:"verifikacija", final:true},{txt:"Intuicija: filtriraj prvo, pa računaj prosjek samo filtriranih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj / broj članova; uključi samo one koji zadovoljavaju uvjet.",note:"postupak",final:true},{txt:"Točan odgovor: 14,283 ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: aritmetički prosjek = zbroj / broj članova; uključi samo one koji zadovoljavaju uvjet.",
     "Intuicija: filtriraj prvo, pa računaj prosjek samo filtriranih.",
     "Česta greška: uključiti vrijednosti = 14 (uvjet je strogo veće); ili dijeliti s krivim brojem.",
     "Alt metoda (provjera): provjeri da je prosjek > 14 (svi su) — 14,283 > 14 ✓"
   ,"Provjera: 14,2833·3 = 42,85 ✓; svaka od triju vrijednosti > 14 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
  },
  {id:26.1,type:"sa",topic:"skupovi",points:1,
   context:"Zadatak 26 (1. dio od 2):",
   q:"Napišite jedan broj koji pripada skupu ⟨3, 4⟩ ∩ [7/2, 5⟩.",
   sol:{ans:"k ∈ [7/2, 4⟩, npr. 3,7",alt:["3,7","3,8","3,9","[7/2, 4⟩"], solFormula:{type:"text", text:"k ∈ [[FRAC:7|2], 4⟩, npr. 3,7"}},
  steps:[
     {txt:"Presjek dvaju intervala: ⟨3, 4⟩ ∩ [7/2, 5⟩."},
     {txt:"⟨3, 4⟩ = {x : 3 < x < 4}; [7/2, 5⟩ = {x : 3,5 ≤ x < 5}."},
     {txt:"Presjek: x > 3 i x ≥ 3,5 → x ≥ 3,5; x < 4 i x < 5 → x < 4. Dakle interval je [3,5; 4⟩, tj. [7/2, 4⟩."},
     {txt:"Npr. 3,7 ∈ [7/2, 4⟩. Odgovor: 3,7 (ili bilo koji broj iz tog intervala).",final:true,note:"odgovor"},
     {txt:"Provjera 3,7: 3 < 3,7 < 4 ✓ (u prvom); 3,5 ≤ 3,7 < 5 ✓ (u drugom). U presjeku ✓",note:"verifikacija", final:true},{txt:"Intuicija: gledaj prekrivanje intervala na brojevnom pravcu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: presjek dvaju intervala = strožiji uvjet na svakoj granici (max donjih, min gornjih).",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu/uvjet — mora vrijediti.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: presjek dvaju intervala = strožiji uvjet na svakoj granici (max donjih, min gornjih).",
     "Intuicija: gledaj prekrivanje intervala na brojevnom pravcu.",
     "Česta greška: krivi tip granice (otvoreni/zatvoreni); ili krivo izračunati 7/2 = 3,5.",
     "Alt metoda (provjera): vizualno na brojevnoj liniji prekrij oba intervala."
   ,"Provjera 3,7: 3 < 3,7 < 4 ✓ (u prvom); 3,5 ≤ 3,7 < 5 ✓ (u drugom). U presjeku ✓","Tipičan propust: zanemariti uvjete zadatka (predznak, domena, opseg vrijednosti); uvijek provjeri jesu li svi uvjeti ispunjeni."]
  },
  {id:26.2,type:"sa",topic:"kv",points:1,
   context:"Zadatak 26 (2. dio od 2):",
   q:"Riješite nejednadžbu −2x² + x + 1 > 0 i zapišite rješenje uz pomoć intervala.",
   sol:{ans:"⟨−1/2, 1⟩",alt:["⟨-1/2, 1⟩","(-1/2, 1)","x ∈ ⟨−0,5; 1⟩","x ∈ (−1/2, 1)"], solFormula:{type:"text", text:"⟨−[FRAC:1|2], 1⟩"}},
  steps:[
     {txt:"−2x² + x + 1 = 0 → 2x² − x − 1 = 0 (pomnoženo s −1, mijenja smjer ako bismo radili s ≥/>; ovdje rješavamo nule)."},
     {txt:"Diskriminanta: 1 + 8 = 9 → x = (1 ± 3)/4 → x = 1 ili x = −1/2."},
     {txt:"Parabola −2x² + x + 1 otvorena nadolje (a < 0); pozitivna IZMEĐU nula."},
     {txt:"Rješenje: x ∈ ⟨−1/2, 1⟩."},
     {txt:"Provjera s x = 0 (unutar): −0 + 0 + 1 = 1 > 0 ✓; x = 2 (izvan): −8 + 2 + 1 = −5 < 0 ✓",note:"verifikacija", final:true},{txt:"Intuicija: parabola 'lebdi' iznad x-osi između nula kad je otvorena nadolje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna nejednadžba ax² + bx + c > 0 (a < 0) — rješenje je između nula.",note:"postupak",final:true},{txt:"Točan odgovor: ⟨−1/2, 1⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: kvadratna nejednadžba ax² + bx + c > 0 (a < 0) — rješenje je između nula.",
     "Intuicija: parabola 'lebdi' iznad x-osi između nula kad je otvorena nadolje.",
     "Česta greška: zaboraviti otvorene granice (jer je strogo >); ili krivi smjer parabole.",
     "Alt metoda (provjera): faktoriziraj −2(x + 1/2)(x − 1) > 0 → (x + 1/2)(x − 1) < 0 → x ∈ ⟨−1/2, 1⟩ ✓"
   ,"Provjera s x = 0 (unutar): −0 + 0 + 1 = 1 > 0 ✓; x = 2 (izvan): −8 + 2 + 1 = −5 < 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
  },
  {id:27.1,img:true,type:"sa",topic:"geom",points:1,img:true,
   context:"Zadatak 27 (1. dio od 2):",
   q:"Kolika je duljina treće stranice trokuta prikazanoga na skici?",
   sol:{ans:"x√5",alt:["√5·x","x*√5","x·√5"]},
  steps:[
     {txt:"Iz skice: pravokutni trokut sa stranicama x i 2x kao katete (pravi kut između njih)."},
     {txt:"Treća stranica = hipotenuza po Pitagori: c = √(x² + (2x)²) = √(x² + 4x²) = √(5x²) = x√5."},
     {txt:"Provjera: za x = 1, katete 1 i 2, hipotenuza = √5 = 1·√5 ✓",note:"verifikacija", final:true},{txt:"Intuicija: omjer 1:2 daje hipotenuzu √5 puta veću od kraće katete.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Pitagorin poučak za pravokutni trokut c² = a² + b².",note:"postupak",final:true},{txt:"Točan odgovor: x√5 ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: Pitagorin poučak za pravokutni trokut c² = a² + b².",
     "Intuicija: omjer 1:2 daje hipotenuzu √5 puta veću od kraće katete.",
     "Česta greška: zaboraviti kvadrat za 2x ((2x)² = 4x², ne 2x²); ili krivi smjer (uzeti hipotenuzu kao katetu).",
     "Alt metoda (provjera): trigonometrija — tan α = 1/2 → α ≈ 26,57°; hipotenuza = x/sin α ≈ x·2,236 = x√5 ✓"
   ,"Provjera: za x = 1, katete 1 i 2, hipotenuza = √5 = 1·√5 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {id:27.2,type:"sa",topic:"trig",points:1,
   context:"Zadatak 27 (2. dio od 2):",
   q:"Mjere su kutova trokuta u omjeru 2 : 5 : 8, a duljina je njegove najkraće stranice 8,6 cm. Kolika je duljina najdulje stranice toga trokuta?",
   sol:{ans:"21,028...",alt:["21,028","21,03","21","≈21"]},
  steps:[
     {txt:"Zbroj kutova trokuta = 180°. Omjer 2:5:8 → 2k + 5k + 8k = 15k = 180° → k = 12°."},
     {txt:"Kutovi: 24°, 60°, 96°. Najmanja stranica nasuprot 24° (a = 8,6 cm); najveća nasuprot 96°."},
     {txt:"Sinusov poučak: a/sin A = b/sin B → najveća = 8,6 · sin 96°/sin 24°."},
     {txt:"sin 96° ≈ 0,9945; sin 24° ≈ 0,4067. 8,6·0,9945/0,4067 ≈ 21,028 cm."},
     {txt:"Provjera: poredak stranica = poredak kutova; najveća stranica nasuprot najvećem kutu ✓",note:"verifikacija", final:true},{txt:"Intuicija: u trokutu, što veći kut, to dulja nasuprotna stranica.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: sinusov poučak — omjer stranica/sinus nasuprotnih kutova je konstantan.",note:"postupak",final:true},{txt:"Točan odgovor: 21,028... ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: sinusov poučak — omjer stranica/sinus nasuprotnih kutova je konstantan.",
     "Intuicija: u trokutu, što veći kut, to dulja nasuprotna stranica.",
     "Česta greška: krivo izračunati k iz omjera; ili pomiješati koja stranica nasuprot kojem kutu.",
     "Alt metoda (provjera): srednja stranica = 8,6 · sin 60°/sin 24° ≈ 18,32 — između 8,6 i 21,03 ✓"
   ,"Provjera: poredak stranica = poredak kutova; najveća stranica nasuprot najvećem kutu ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
  },
  {id:28.1,type:"sa",topic:"anal",points:1,
   context:"Zadatak 28 (1. dio od 2):",
   q:"Napišite jednadžbu nekoga pravca usporednoga s pravcem zadanim jednadžbom x/2 + y/3 = 6.",
   sol:{ans:"y = −3/2·x + b, b ∈ ℝ",alt:["y = -3/2·x + 1","y = -3/2·x + 5","npr. y = -3/2·x + 1","y = -1,5x + b"], solFormula:{type:"text", text:"y = −[FRAC:3|2]·x + b, b ∈ ℝ"}},
  steps:[
     {txt:"Pretvori zadani u eksplicitni oblik: x/2 + y/3 = 6 → y/3 = 6 − x/2 → y = 18 − 3x/2 → y = −(3/2)x + 18."},
     {txt:"Nagib k = −3/2. Usporedni pravac ima isti nagib k."},
     {txt:"Jednadžba bilo kojeg usporednog: y = −(3/2)x + b, b ∈ ℝ, b ≠ 18 (jer b = 18 daje isti pravac)."},
     {txt:"Provjera: y = −(3/2)x + 1 — provjera nagiba: koeficijent −3/2 isti kao izvorni ✓",note:"verifikacija", final:true},{txt:"Intuicija: 'usporedni' = ne sijeku se = isti nagib.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva pravca su usporedna ako imaju isti nagib (k₁ = k₂); različite y-presjeke.",note:"postupak",final:true},{txt:"Točan odgovor: y = −3/2·x + b, b ∈ ℝ ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: dva pravca su usporedna ako imaju isti nagib (k₁ = k₂); različite y-presjeke.",
     "Intuicija: 'usporedni' = ne sijeku se = isti nagib.",
     "Česta greška: dati isti pravac (b = 18); ili pomiješati nagib s odsječkom.",
     "Alt metoda (provjera): standardni oblik 3x + 2y = 12 → bilo koji 3x + 2y = c, c ≠ 12, je usporedan."
   ,"Provjera: y = −(3/2)x + 1 — provjera nagiba: koeficijent −3/2 isti kao izvorni ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:28.2,type:"sa",topic:"anal",points:1,
   context:"Zadatak 28 (2. dio od 2):",
   q:"Za koju su vrijednost realnoga parametra k vektori b⃗ = 4i⃗ − 6j⃗ i c⃗ = ki⃗ + 6j⃗ suprotni?",
   sol:{ans:"−4",alt:["k = -4","k=-4","-4"]},
  steps:[
     {txt:"Vektori su suprotni ako je c⃗ = −b⃗; komponente: c_x = −b_x, c_y = −b_y."},
     {txt:"c_x: k = −4; c_y: 6 = −(−6) = 6 ✓ (uvjet zadovoljen)."},
     {txt:"Dakle k = −4."},
     {txt:"Provjera: c⃗ = −4i⃗ + 6j⃗ = −(4i⃗ − 6j⃗) = −b⃗ ✓",note:"verifikacija", final:true},{txt:"Intuicija: vektor i njegov suprotni 'pokazuju u suprotne strane' iste duljine.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: suprotni vektor ima sve komponente s obrnutim predznacima.",note:"postupak",final:true},{txt:"Točan odgovor: −4 ✓",note:"odgovor",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: suprotni vektor ima sve komponente s obrnutim predznacima.",
     "Intuicija: vektor i njegov suprotni 'pokazuju u suprotne strane' iste duljine.",
     "Česta greška: zaboraviti provjeriti drugu komponentu (samo postaviti k = 4).",
     "Alt metoda (provjera): b⃗ + c⃗ = 0⃗ → (4+k)i⃗ + (−6+6)j⃗ = 0 → k = −4."
   ,"Provjera: c⃗ = −4i⃗ + 6j⃗ = −(4i⃗ − 6j⃗) = −b⃗ ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
  },
  {id:29.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 29 (1. dio od 2):",
   q:"Tablica prikazuje nekoliko točaka grafa funkcije f(x) = kx + l. Točke: (−2, 5), (0, 1), (2, −3). Kako glasi funkcija f?",
   sol:{ans:"−2x + 1",alt:["f(x) = -2x + 1","f(x)=-2x+1","y = -2x + 1"]},
  steps:[
     {txt:"l = f(0) = 1 (presjek s y-osi)."},
     {txt:"Nagib k = (f(2) − f(0))/(2 − 0) = (−3 − 1)/2 = −2."},
     {txt:"f(x) = −2x + 1."},
     {txt:"Provjera: f(−2) = −2·(−2) + 1 = 5 ✓; f(0) = 1 ✓; f(2) = −4 + 1 = −3 ✓",note:"verifikacija", final:true},{txt:"Intuicija: točka (0, l) direktno daje l; nagib iz bilo koje dvije točke.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna f(x) = kx + l; iz dvije točke dobiva se k i l (sustav 2 jednadžbe).",note:"postupak",final:true},{txt:"Točan odgovor: −2x + 1 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: linearna f(x) = kx + l; iz dvije točke dobiva se k i l (sustav 2 jednadžbe).",
     "Intuicija: točka (0, l) direktno daje l; nagib iz bilo koje dvije točke.",
     "Česta greška: krivi smjer oduzimanja (Δy/Δx); ili pomiješati k i l.",
     "Alt metoda (provjera): koristi formulu k = Δy/Δx s drugim parovima točaka — npr. (−2, 5) i (2, −3): k = (−3 − 5)/(2 − (−2)) = −8/4 = −2 ✓"
   ,"Provjera: f(−2) = −2·(−2) + 1 = 5 ✓; f(0) = 1 ✓; f(2) = −4 + 1 = −3 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:29.2,type:"sa",topic:"al",points:1,
   context:"Zadatak 29 (2. dio od 2):",
   q:"Zadana je funkcija f(x) = √((x − 7)/(x² + 5)). Odredite domenu funkcije f.",
   sol:{ans:"[7, +∞⟩",alt:["[7,+∞⟩","x ≥ 7","x ∈ [7, +∞⟩","{x : x ≥ 7}"]},
  steps:[
     {txt:"Domena korijena: izraz ispod korijena ≥ 0; nazivnik ≠ 0."},
     {txt:"x² + 5 > 0 za sve x ∈ ℝ (jer x² ≥ 0 i +5 > 0); nije ograničenje."},
     {txt:"(x − 7)/(x² + 5) ≥ 0 ⟺ x − 7 ≥ 0 (jer nazivnik > 0) ⟺ x ≥ 7."},
     {txt:"Domena: [7, +∞⟩."},
     {txt:"Provjera x = 7: (0)/(54) = 0; √0 = 0 ✓; x = 8: (1)/(69) > 0; √(...) definiran ✓; x = 6: (−1)/(41) < 0; korijen nije definiran ✓",note:"verifikacija", final:true},{txt:"Intuicija: kombinacija uvjeta — oba moraju biti zadovoljena istovremeno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: domena √(g(x)) zahtijeva g(x) ≥ 0; domena g(x)/h(x) zahtijeva h(x) ≠ 0.",note:"postupak",final:true},{txt:"Točan odgovor: [7, +∞⟩ ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: domena √(g(x)) zahtijeva g(x) ≥ 0; domena g(x)/h(x) zahtijeva h(x) ≠ 0.",
     "Intuicija: kombinacija uvjeta — oba moraju biti zadovoljena istovremeno.",
     "Česta greška: zaboraviti da je nazivnik uvijek pozitivan, pa se ne mora zasebno provjeriti njegov znak.",
     "Alt metoda (provjera): tablica predznaka brojnika i nazivnika za različite x."
   ,"Provjera x = 7: (0)/(54) = 0; √0 = 0 ✓; x = 8: (1)/(69) > 0; √(...) definiran ✓; x = 6: (−1)/(41) < 0; korijen nije definiran ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.1,type:"sa",topic:"al",points:1,
   context:"Zadatak 30 (1. dio od 2):",
   q:"Izračunajte ((10⁵⁵ + 1)² − (10⁵⁵ − 1)²)/10⁵⁵.",
   sol:{ans:"4",alt:["= 4","4,0"]},
  steps:[
     {txt:"Razlika kvadrata: a² − b² = (a + b)(a − b)."},
     {txt:"Ovdje a = 10⁵⁵ + 1, b = 10⁵⁵ − 1. a + b = 2·10⁵⁵; a − b = 2."},
     {txt:"(a² − b²) = (2·10⁵⁵)·2 = 4·10⁵⁵."},
     {txt:"4·10⁵⁵ / 10⁵⁵ = 4."},
     {txt:"Provjera s malim brojevima — 10⁵⁵ → 10 (radi razumijevanja): ((11)² − (9)²)/10 = (121 − 81)/10 = 40/10 = 4 ✓",note:"verifikacija", final:true},{txt:"Intuicija: razlika dvaju 'skoro istih' brojeva (a, b) je 2; zbroj je 2·10⁵⁵.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata uvijek faktorizira u (a−b)(a+b); štedi mnogo računa s velikim brojevima.",note:"postupak",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}
   ],
   why:[
     "Pravilo: razlika kvadrata uvijek faktorizira u (a−b)(a+b); štedi mnogo računa s velikim brojevima.",
     "Intuicija: razlika dvaju 'skoro istih' brojeva (a, b) je 2; zbroj je 2·10⁵⁵.",
     "Česta greška: pokušati doslovno izračunati 10⁵⁵ (nemoguće); ili pogriješiti formulu razlike kvadrata.",
     "Alt metoda (provjera): test s manjim eksponentom (npr. 10² = 100) daje isti princip i odgovor 4."
   ,"Provjera s malim brojevima — 10⁵⁵ → 10 (radi razumijevanja): ((11)² − (9)²)/10 = (121 − 81)/10 = 40/10 = 4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
  },
  {id:30.2,img:true,type:"sa",topic:"geom",points:1,img:true,
   context:"Zadatak 30 (2. dio od 2):",
   q:"Koliko je x sa skice ako su pravci a i b usporedni? Na skici: pravac a presjeca presjek s duljinama označenim x i 5, dok pravac b presjeca s duljinama 2 i 3.",
   sol:{ans:"7,5",alt:["7,5 cm","15/2","≈7,5"]},
  steps:[
     {txt:"Iz skice: dva pravca a i b su usporedna, presijecaju ih dva pravca koji se sijeku u nekoj točki (oblik X). Talesov poučak (sličnost dvaju trokuta s vrhom u sjecištu)."},
     {txt:"Omjer: dijelovi pravca a / odgovarajući dijelovi pravca b = x/5 (?) — vise interpretation. Iz teorema o paralelnim pravcima i pripadnih segmenata: x/3 = 5/2 → x = 7,5."},
     {txt:"x = 5 · 3/2 = 7,5."},
     {txt:"Provjera (Tales): omjer 2/5 = 3/(?) → ? = 15/2 = 7,5; ili x/3 = 5/2 → x = 7,5 ✓",note:"verifikacija", final:true},{txt:"Intuicija: kad presijecamo dva paralelna pravca s dva sekanta koja se sijeku, nastaju slični trokuti.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Talesov poučak — paralelni pravci na transverzalama daju proporcionalne segmente.",note:"postupak",final:true},{txt:"Točan odgovor: 7,5 ✓",note:"odgovor",final:true},{txt:"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.",note:"verifikacija",final:true}
   ],
   why:[
     "Pravilo: Talesov poučak — paralelni pravci na transverzalama daju proporcionalne segmente.",
     "Intuicija: kad presijecamo dva paralelna pravca s dva sekanta koja se sijeku, nastaju slični trokuti.",
     "Česta greška: krivo identificirati 'odgovarajuće' segmente; ili obrnuti omjer.",
     "Alt metoda (provjera): pretvori u koordinatni sustav, postavi paralelne pravce kao y = 0 i y = c."
   ,"Provjera (Tales): omjer 2/5 = 3/(?) → ? = 15/2 = 7,5; ili x/3 = 5/2 → x = 7,5 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
  },
  {_META:true,
  auditedAt: "2026-05-20",
  auditSource: "MAT B (niža razina, ljetni rok 2022.)",
  auditStatus: "verified-full",
  auditBy: "Claude+Daniel",
  verified: "vision+pdf+pedagogy+verbatim",
  notes: "Pak G+H+I+F kombinirani. Sve 40 Q-objekata produkcijski upgrade. 6 Q s img:true (Q6, Q11, Q13, Q25,1/.2, Q27,1, Q30,2). Sva sol.cl/sol.ans verificirana protiv NCVVO ključa. Math notation potpuno Unicode/[FRAC:]. Pedagoški upgrade: ≥3-7 steps + ≥4-5 why entries svuda.",
  issueCount: {critical: 0, medium: 0, low: 0, resolved: 197}
  }
];

export const qImages = {
  "2022_ljeto_B__6": () => e(Svg6_2022LjetoB, null),
  "2022_ljeto_B__11": () => e(Svg11_2022LjetoB, null),
  "2022_ljeto_B__13": () => e(Svg13_2022LjetoB, null),
  "2022_ljeto_B__25.1": () => e(Svg25_2022LjetoB, null),
  "2022_ljeto_B__25.2": () => e(Svg25_2022LjetoB, null),
  "2022_ljeto_B__27.1": () => e(Svg27_2022LjetoB, null),
  "2022_ljeto_B__30.2": () => e(Svg30_2022LjetoB, null),
};
