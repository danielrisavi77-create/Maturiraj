// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg7_2023Alj, Svg14_2023Alj, Svg10_2023Alj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function Svg25_2023Blj(){
  // Urod lješnjaka po godinama (u tonama): 2013=600, 2014=450, 2015=600, 2016=550, 2017=300
  const st="var(--text)";
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const W=500, H=340;
  const pad={l:60, r:20, t:30, b:55};
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const data=[
    {year:"2013.", val:500},
    {year:"2014.", val:450},
    {year:"2015.", val:600},
    {year:"2016.", val:550},
    {year:"2017.", val:400},
  ];
  const yMax=700;
  const yTicks=[300, 350, 400, 450, 500, 550, 600, 650];
  // x pozicije - 5 barova centrirano u iW
  const barW = iW/5 * 0.55;
  const slot = iW/5;
  const xForBar = (i)=> pad.l + slot*(i+0.5) - barW/2;
  const yForVal = (v)=> pad.t + (1 - (v-300)/(yMax-300)) * iH;
  // Note: y-axis starts at 300 (not 0) to match typical PDF layout
  // Horizontal gridlines at each tick
  const gridLines = yTicks.map((t,i)=> e("line",{key:"g"+t,x1:pad.l,y1:yForVal(t),x2:pad.l+iW,y2:yForVal(t),stroke:_BLUE,strokeOpacity:0.18,strokeDasharray:"2 3",strokeWidth:0.6}));
  const tickLabels = yTicks.map(t=> e("text",{key:"tl"+t,x:pad.l-8,y:yForVal(t)+4,textAnchor:"end",fontSize:11,fontFamily:"sans-serif",fill:st},String(t)));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,xmlns:"http://www.w3.org/2000/svg",style:{maxWidth:"500px",width:"100%",display:"block",margin:"12px auto"}},
    // Y-axis label (rotated)
    e("text",{key:"yt",x:18,y:pad.t+iH/2,fontSize:11,fontFamily:"sans-serif",fill:st,transform:`rotate(-90 18 ${pad.t+iH/2})`,textAnchor:"middle"},"urod lješnjaka / tone"),
    // gridlines
    ...gridLines,
    // axes
    e("line",{key:"ya",x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.5}),
    e("line",{key:"xa",x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:_BLUE,strokeWidth:1.5}),
    // y-tick labels
    ...tickLabels,
    // bars + x-labels + value labels
    ...data.flatMap((d,i)=>{
      const bx=xForBar(i), by=yForVal(d.val), bh=pad.t+iH-by;
      return [
        e("rect",{key:"b"+i,x:bx,y:by,width:barW,height:bh,fill:_GOLD,fillOpacity:0.35,stroke:_BLUE,strokeWidth:1.2}),
        e("text",{key:"xl"+i,x:bx+barW/2,y:pad.t+iH+16,textAnchor:"middle",fontSize:11,fontFamily:"sans-serif",fill:st},d.year),
        // value on top of bar
        e("text",{key:"vl"+i,x:bx+barW/2,y:by-4,textAnchor:"middle",fontSize:11,fontFamily:"sans-serif",fill:st},String(d.val)),
      ];
    }),
    // x-axis label
    e("text",{key:"xt",x:pad.l+iW/2,y:pad.t+iH+40,textAnchor:"middle",fontSize:11,fontFamily:"sans-serif",fill:st},"godina")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: iracionalan = ne pojednostavi se u razlomak (npr. √2, π); provjeri korijene.",topic:"br",points:1,
  q:"Koji je od navedenih brojeva iracionalan?",
  opts:["√0,49","0,777…","√113","√225"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Iracionalan broj = ne može se zapisati kao razlomak; √n je iracionalan samo ako n NIJE potpuni kvadrat."},
     {txt:"A) √0,49 = 0,7 — racionalan (0,49 = (0,7)²)."},
     {txt:"B) 0,777… = 7/9 — racionalan (periodična decimala)."},
     {txt:"D) √225 = 15 — racionalan (225 = 15²)."},
     {txt:"C) √113 — 113 nije potpuni kvadrat (10² = 100, 11² = 121, dakle 100 < 113 < 121); iracionalan. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: √113 ≈ 10,6301... — beskonačna neperiodična decimala ✓",note:"verifikacija"},
     {txt:"Distraktori: A i D su potpuni kvadrati (0,49 = 0,7², 225 = 15²); B je periodičnost (racionalan).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: √n je racionalan ⟺ n je potpuni kvadrat racionalnog broja.",note:"postupak",final:true},{txt:"Intuicija: 'periodička decimala' = razlomak (racionalan); 'neperiodička beskonačna decimala' = iracionalan.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: √n je racionalan ⟺ n je potpuni kvadrat racionalnog broja.",
     "Intuicija: 'periodička decimala' = razlomak (racionalan); 'neperiodička beskonačna decimala' = iracionalan.",
     "Česta greška: pretpostaviti da je svaki √ iracionalan; ili da je svaka decimala iracionalna.",
     "Alt metoda (provjera): zaokruži opcije — 0,7, 0,777..., 10,63..., 15; samo treća nema 'lijep' oblik ✓"
   ,"Provjera: √113 ≈ 10,6301... — beskonačna neperiodična decimala ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:2,type:"mc",warn:"Pazi: dodavanjem n petica → (20 + 5n)/(5 + n) = 4,5; riješi po n.",topic:"stat",points:1,
  q:"Lovrine trenutačne ocjene su: 3, 3, 4, 5 i 5. Koliko petica Lovri nedostaje da mu prosječna ocjena bude 4,5?",
  opts:["tri","četiri","pet","šest"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Trenutni zbroj: 3+3+4+5+5 = 20; trenutni broj ocjena: 5."},
     {txt:"Nakon dodavanja n petica: zbroj = 20 + 5n; broj ocjena = 5 + n."},
     {txt:"Uvjet: (20 + 5n)/(5 + n) = 4,5."},
     {txt:"20 + 5n = 4,5·(5 + n) = 22,5 + 4,5n → 0,5n = 2,5 → n = 5. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: nakon 5 dodatnih petica — zbroj = 20 + 25 = 45; ocjena = 5 + 5 = 10; prosjek = 45/10 = 4,5 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 3 daje 35/8 = 4,375; B) 4 daje 40/9 ≈ 4,44; D) 6 daje 50/11 ≈ 4,55.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aritmetički prosjek = zbroj / broj članova.",note:"postupak",final:true},{txt:"Intuicija: dodajemo samo petice; svaka peticа diže prosjek jer je 5 > 4,5.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: aritmetički prosjek = zbroj / broj članova.",
     "Intuicija: dodajemo samo petice; svaka peticа diže prosjek jer je 5 > 4,5.",
     "Česta greška: zaboraviti da se i nazivnik (broj ocjena) povećava, ne samo brojnik.",
     "Alt metoda (provjera): za prosjek 4,5 iz n petica — trenutni 'manjak' = 5·(4,5 − 4) = 2,5; višak po petici = 5 − 4,5 = 0,5; n = 2,5/0,5 = 5 ✓"
   ,"Provjera: nakon 5 dodatnih petica — zbroj = 20 + 25 = 45; ocjena = 5 + 5 = 10; prosjek = 45/10 = 4,5 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:3,type:"mc",warn:"Pazi: ·1,5 pa ·0,5 = 0,75 → konačna cijena je manja od početne.",topic:"br",points:1,
  q:"Početna cijena nekoga proizvoda poveća se za 50 %, a zatim se dobivena umanji za 50 %. Koja od navedenih tvrdnja vrijedi za konačnu cijenu toga proizvoda?",
  opts:["Jednaka je 50 % početne cijene.","Jednaka je 75 % početne cijene.","Jednaka je 100 % početne cijene.","Jednaka je 125 % početne cijene."],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Početna cijena = x; nakon povećanja za 50 %: x · 1,5 = 1,5x."},
     {txt:"Nakon smanjenja za 50 %: 1,5x · 0,5 = 0,75x."},
     {txt:"0,75x = 75 % početne cijene. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 100 kn: nakon +50 % → 150 kn; nakon −50 % → 75 kn = 75 % od 100 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 50 % = ignorira prvo povećanje; C) 100 % = krivo 'isti rezultat'; D) 125 % = krivi smjer.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: postotci nisu komutativni s zbrajanjem — +50 % zatim −50 % ≠ povratak na 100 %.",note:"postupak",final:true},{txt:"Intuicija: drugi postotak djeluje na VEĆU bazu, pa je njegovo apsolutno smanjenje veće od početnog povećanja.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: postotci nisu komutativni s zbrajanjem — +50 % zatim −50 % ≠ povratak na 100 %.",
     "Intuicija: drugi postotak djeluje na VEĆU bazu, pa je njegovo apsolutno smanjenje veće od početnog povećanja.",
     "Česta greška: pretpostaviti da +50 % i −50 % se 'poništavaju' (krivo!).",
     "Alt metoda (provjera): faktor = 1,5·0,5 = 0,75 = 75 % ✓"
   ,"Provjera s x = 100 kn: nakon +50 % → 150 kn; nakon −50 % → 75 kn = 75 % od 100 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:4,type:"mc",warn:"Pazi: vjerojatnost = povoljni/ukupni; ukupno je 13 + 11 = 24.",topic:"stat",points:1,
  q:"U nekome je razredu 13 učenika rođenih 2004. godine i 11 učenika rođenih 2005. godine. Kolika je vjerojatnost da je slučajnim odabirom odabran učenik rođen 2004. godine?",
  opts:["1/13","1/12","13/24","11/13"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"Klasična vjerojatnost: P(A) = povoljni / svi."},
     {txt:"Ukupno učenika: 13 + 11 = 24."},
     {txt:"Povoljni (rođeni 2004.): 13."},
     {txt:"P = 13/24. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera: P(2004.) + P(2005.) = 13/24 + 11/24 = 24/24 = 1 ✓ (dvije moguće mogućnosti)",note:"verifikacija"},
     {txt:"Distraktori: A) 1/13 = krivi razlomak; B) 1/12 = krivo zaokruživanje; D) 11/13 = vjer. od 2005 / od 2004 (krivi smjer).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: vjerojatnost = broj povoljnih ishoda / broj svih ishoda.",note:"postupak",final:true},{txt:"Intuicija: razred ima 24 učenika; izaberi jednog — 13 od 24 je iz 2004.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: vjerojatnost = broj povoljnih ishoda / broj svih ishoda.",
     "Intuicija: razred ima 24 učenika; izaberi jednog — 13 od 24 je iz 2004.",
     "Česta greška: zaboraviti zbrojiti sve učenike; ili pomiješati godine.",
     "Alt metoda (provjera): 13/24 ≈ 0,542; više od pola učenika je iz 2004. (jer 13 > 11) ✓"
   ,"Provjera: P(2004.) + P(2005.) = 13/24 + 11/24 = 24/24 = 1 ✓ (dvije moguće mogućnosti)","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:5,type:"mc",warn:"Pazi: dvoznamenkasti su 10–99; djeljivi s 5 završavaju na 0 ili 5; broji ih.",topic:"br",points:1,
  q:"Koliko je dvoznamenkastih brojeva djeljivih s pet?",
  opts:["17","18","19","20"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"Dvoznamenkasti = brojevi 10, 11, …, 99 (raspon [10, 99])."},
     {txt:"Djeljivi s 5 u tom rasponu: 10, 15, 20, 25, …, 95."},
     {txt:"Aritmetički niz s a₁ = 10, d = 5, aₙ = 95: n = (aₙ − a₁)/d + 1 = (95 − 10)/5 + 1 = 17 + 1 = 18."},
     {txt:"Broj: 18. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera krajeva: prvi je 10 (1·5+5), zadnji 95 (19·5); među njima 10, 15, ..., 95 ima 18 brojeva ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 17 = zaboraviti +1 (greška pomaka); C/D = krivi izračun.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: broj članova aritmetičkog niza n = (aₙ − a₁)/d + 1.",note:"postupak",final:true},{txt:"Intuicija: brojevi djeljivi s 5 završavaju s 0 ili 5; među dvoznamenkastim njih 99/5 − 9/5 ≈ 18.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: broj članova aritmetičkog niza n = (aₙ − a₁)/d + 1.",
     "Intuicija: brojevi djeljivi s 5 završavaju s 0 ili 5; među dvoznamenkastim njih 99/5 − 9/5 ≈ 18.",
     "Česta greška: zaboraviti +1 (broj 'intervala' vs broj 'krajeva').",
     "Alt metoda (provjera): brojevi 10/5 = 2 do 95/5 = 19 → 19 − 2 + 1 = 18 ✓"
   ,"Provjera krajeva: prvi je 10 (1·5+5), zadnji 95 (19·5); među njima 10, 15, ..., 95 ima 18 brojeva ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:6,type:"mc",warn:"Pazi: razlomak se krati ako brojnik i nazivnik imaju zajednički faktor — faktoriziraj oba.",topic:"al",points:1,
  q:"Koji se od navedenih razlomaka može skratiti za sve cijele brojeve x i y za koje je definiran?",
  opts:["(3x + 8y)/(4xy)","(10xy)/(2x − 5y)","(3x − 4y)/(6x + 8y)","(4y + xy)/(xy − 2y)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Skratljivost ⟺ brojnik i nazivnik imaju zajednički faktor (osim 1)."},
     {txt:"D) brojnik 4y + xy = y(4 + x); nazivnik xy − 2y = y(x − 2)."},
     {txt:"Zajednički faktor y (za sve x, y); razlomak = (x + 4)/(x − 2) (već skraćeno)."},
     {txt:"Ostale opcije: A nema zajednički, B nema, C ima 1/2 ali ne y ili x. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 1, y = 2: D) (4·2 + 1·2)/(1·2 − 2·2) = 10/(−2) = −5; skraćeno (1+4)/(1−2) = 5/(−1) = −5 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) brojnik nema zajednički s nazivnikom; B/C) ne mogu se skratiti algebarski.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: razlomak se skraćuje izlučivanjem zajedničkog faktora iz brojnika i nazivnika.",note:"postupak",final:true},{txt:"Intuicija: traži ponavljajući izraz (varijablu ili kombinaciju) u oba.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: razlomak se skraćuje izlučivanjem zajedničkog faktora iz brojnika i nazivnika.",
     "Intuicija: traži ponavljajući izraz (varijablu ili kombinaciju) u oba.",
     "Česta greška: pokušati skratiti samo dijelove brojnika ili nazivnika (ne dijelove izraza).",
     "Alt metoda (provjera): test s konkretnim vrijednostima da provjeriš je li razlomak isti nakon skraćivanja."
   ,"Provjera s x = 1, y = 2: D) (4·2 + 1·2)/(1·2 − 2·2) = 10/(−2) = −5; skraćeno (1+4)/(1−2) = 5/(−1) = −5 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:7,type:"mc",warn:"Pazi: ∛(x²) = x^(2/3); množenje iste baze → zbroji eksponente (4 + 2/3).",topic:"al",points:1,
  q:"Čemu je jednako x⁴ · ∛(x²)?",
  opts:["x^(5/2)","x^(8/3)","x^(14/3)","x^(11/2)"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"∛(x²) = x^([FRAC:2|3]) (treći korijen = eksponent 1/3)."},
     {txt:"Umnožak iste baze: x⁴ · x^([FRAC:2|3]) = x^(4 + [FRAC:2|3])."},
     {txt:"4 = [FRAC:12|3], pa 4 + [FRAC:2|3] = [FRAC:12|3] + [FRAC:2|3] = [FRAC:14|3]."},
     {txt:"Rezultat: x^([FRAC:14|3]). Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera s x = 64 = 2⁶: x⁴ = 2²⁴; x^([FRAC:2|3]) = 2⁴; umnožak = 2²⁸; 64^([FRAC:14|3]) = 2^(6·[FRAC:14|3]) = 2²⁸ ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 5/2 = 4 + 1/2 (krivo); B) 8/3 = 2 + 2/3; D) 11/2 (krivi zbroj).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",note:"postupak",final:true},{txt:"Intuicija: pretvori sve u eksponente, pa zbroji (pazi na zajednički nazivnik).",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; ⁿ√(aᵐ) = a^(m/n).",
     "Intuicija: pretvori sve u eksponente, pa zbroji (pazi na zajednički nazivnik).",
     "Česta greška: pomnožiti eksponente umjesto zbrojiti (krivi smjer); ili krivi zajednički nazivnik.",
     "Alt metoda (provjera): zajednički nazivnik 3 — 4 = 12/3; 12/3 + 2/3 = 14/3 ✓"
   ,"Provjera s x = 64 = 2⁶: x⁴ = 2²⁴; x^([FRAC:2|3]) = 2⁴; umnožak = 2²⁸; 64^([FRAC:14|3]) = 2^(6·[FRAC:14|3]) = 2²⁸ ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:8,type:"mc",warn:"Pazi: (−7)ᵃ = (−1)ᵃ·7ᵃ; a neparan → (−1)ᵃ = −1, pa 7^(−a)·(−1)·7ᵃ = −1.",topic:"al",points:1,
  q:"Koliko je 7^(−a) · (−7)^a ako je a neparni cijeli broj?",
  opts:["−7","−1","1","7"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"7^(−a) = 1/7^a (inverzni eksponent)."},
     {txt:"(−7)^a = (−1)^a · 7^a; za neparan a, (−1)^a = −1, dakle (−7)^a = −7^a."},
     {txt:"Umnožak: (1/7^a) · (−7^a) = −1."},
     {txt:"Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera s a = 1: 7⁻¹ · (−7)¹ = (1/7)·(−7) = −1 ✓; a = 3: 7⁻³ · (−7)³ = (1/343)·(−343) = −1 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −7 = zaboraviti razlomak; C) 1 = krivi predznak (parno + neparno); D) 7 = krivi predznak.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: (−a)ⁿ = (−1)ⁿ · aⁿ; (−1)ⁿ = 1 za parno n, −1 za neparno n.",note:"postupak",final:true},{txt:"Intuicija: za neparan eksponent, predznak baze 'preživljava'; za paran, predznak nestaje.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: (−a)ⁿ = (−1)ⁿ · aⁿ; (−1)ⁿ = 1 za parno n, −1 za neparno n.",
     "Intuicija: za neparan eksponent, predznak baze 'preživljava'; za paran, predznak nestaje.",
     "Česta greška: zaboraviti negativni predznak za neparno a; ili krivi smjer recipročne.",
     "Alt metoda (provjera): kombinirano (−7/7)^a = (−1)^a = −1 za neparan a ✓"
   ,"Provjera s a = 1: 7⁻¹ · (−7)¹ = (1/7)·(−7) = −1 ✓; a = 3: 7⁻³ · (−7)³ = (1/343)·(−343) = −1 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:9,img:true,type:"mc",warn:"Pazi: negativan nagib → pravac PADA; siječe os y u 1.",topic:"lin",points:1,
  q:"Na kojoj je slici prikazan graf funkcije f(x) = −0,5x + 1?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Linearna f(x) = kx + l; k = −0,5 (nagib); l = 1 (y-presjek)."},
     {txt:"k < 0 → padajuća; l > 0 → presjek s y-osi iznad ishodišta (točka (0, 1))."},
     {txt:"Provjera druge točke: f(2) = −1 + 1 = 0 → presjek s x-osi u (2, 0)."},
     {txt:"Tražimo padajuću crtu kroz (0, 1) i (2, 0). Slika A."},
     {txt:"Provjera nagiba: pad y-osi od 1 do 0 dok x raste od 0 do 2 → nagib −1/2 = −0,5 ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C/D imaju krive nagibe (rastući, prestrmi, ili krivi y-presjek).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: za y = kx + l, k = nagib (pad/rast), l = y-presjek.",note:"postupak",final:true},{txt:"Intuicija: nagib k > 0 → graf raste lijevo desno; k < 0 → pada.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: za y = kx + l, k = nagib (pad/rast), l = y-presjek.",
     "Intuicija: nagib k > 0 → graf raste lijevo desno; k < 0 → pada.",
     "Česta greška: zamijeniti nagib i y-presjek; ili krivi predznak.",
     "Alt metoda (provjera): provjeri točke (0, 1) i (2, 0) na slici — slika A ✓"
   ,"Provjera druge točke: f(2) = −1 + 1 = 0 → presjek s x-osi u (2, 0).","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
},
  {id:10,type:"mc",warn:"Pazi: pad 2 °C u 5 min → negativan nagib; postavi linearnu funkciju.",topic:"lin",points:1,
  q:"U trenutku uključivanja klimatizacijskoga uređaja temperatura zraka u prostoriji iznosila je 28 °C, a pet minuta nakon uključivanja iznosila je 26 °C. Kojom je od navedenih funkcija opisana ovisnost temperature zraka T o vremenu t u minutama koje je proteklo od uključivanja klimatizacijskoga uređaja ako se temperatura smanjuje jednoliko?",
  opts:["T(t) = −5/2 · t + 26","T(t) = −5/2 · t + 28","T(t) = −2/5 · t + 26","T(t) = −2/5 · t + 28"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Linearno smanjenje: T(t) = k·t + n. Dvije točke: (0, 28) i (5, 26)."},
     {txt:"n = T(0) = 28 (početna temperatura)."},
     {txt:"k = (T(5) − T(0))/(5 − 0) = (26 − 28)/5 = −2/5."},
     {txt:"T(t) = −2/5 · t + 28. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera u t = 5: T(5) = −2/5·5 + 28 = −2 + 28 = 26 ✓",note:"verifikacija"},
     {txt:"Distraktori: A) −5/2 = krivi smjer omjera; B) 28 ali krivi nagib; C) 26 = krivi početak (mora biti 28).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: linearna f(t) = kt + n; nagib k = Δy/Δx; n = vrijednost u t = 0.",note:"postupak",final:true},{txt:"Intuicija: 'jednoliko smanjenje' = konstantna brzina pada → linearna funkcija.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: linearna f(t) = kt + n; nagib k = Δy/Δx; n = vrijednost u t = 0.",
     "Intuicija: 'jednoliko smanjenje' = konstantna brzina pada → linearna funkcija.",
     "Česta greška: pomiješati k i n; ili krivi smjer omjera (5/2 vs 2/5).",
     "Alt metoda (provjera): pad 2 °C u 5 min → 0,4 °C/min = 2/5 °C/min; pa nagib −2/5 ✓"
   ,"Provjera u t = 5: T(5) = −2/5·5 + 28 = −2 + 28 = 26 ✓","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."]
},
  {id:11,type:"mc",warn:"Pazi: paralelni → isti nagib; izrazi y da očitaš nagib (−3).",topic:"anal",points:1,
  q:"Koji je od navedenih pravaca paralelan pravcu 9x + 3y = 5?",
  opts:["y = −3x","y = −(1/3)x","y = (1/3)x","y = 3x"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Pretvori u eksplicitan oblik: 9x + 3y = 5 → 3y = −9x + 5 → y = −3x + 5/3."},
     {txt:"Nagib pravca: k = −3."},
     {txt:"Paralelan pravac ima isti nagib k = −3."},
     {txt:"Opcija A: y = −3x (k = −3, l = 0); paralelna jer ima isti nagib. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: A i original imaju različite y-presjeke (0 vs 5/3) → različiti, ali paralelni ✓",note:"verifikacija"},
     {txt:"Distraktori: B/C imaju nagib ±1/3 (recipročni s krivim predznakom — to su okomice umjesto paralelnih); D = +3 (krivi predznak).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: dva pravca su paralelna ⟺ imaju iste nagibe (k₁ = k₂).",note:"postupak",final:true},{txt:"Intuicija: 'paralelni' = nikad se ne sijeku = idu u istom smjeru.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: dva pravca su paralelna ⟺ imaju iste nagibe (k₁ = k₂).",
     "Intuicija: 'paralelni' = nikad se ne sijeku = idu u istom smjeru.",
     "Česta greška: brkati paralelne (isti k) s okomitima (k₁·k₂ = −1).",
     "Alt metoda (provjera): u opće obliku Ax + By + C = 0, k = −A/B; ovdje k = −9/3 = −3 ✓"
   ,"Provjera: A i original imaju različite y-presjeke (0 vs 5/3) → različiti, ali paralelni ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:12,img:true,type:"mc",warn:"Pazi: komponente = (pomak po x, pomak po y) od početka do kraja vektora.",topic:"anal",points:1,
  q:"Vektor a⃗ prikazan je na slici. Što je od navedenoga zapis vektora a⃗?",
  opts:["a⃗ = −4i⃗ − 3j⃗","a⃗ = 4i⃗ − 3j⃗","a⃗ = −3i⃗ − 4j⃗","a⃗ = 3i⃗ − 4j⃗"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Vektor u 2D zapisan kao a⃗ = xi⃗ + yj⃗ gdje su (x, y) komponente."},
     {txt:"Iz slike: pomak 3 jedinice udesno (Δx = +3) i 4 jedinice dolje (Δy = −4)."},
     {txt:"a⃗ = 3i⃗ + (−4)j⃗ = 3i⃗ − 4j⃗. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera duljine: |a⃗| = √(3² + 4²) = √25 = 5 — standardna 3-4-5 trojka ✓",note:"verifikacija"},
     {txt:"Distraktori: A) krivi smjer (lijevo umjesto desno); B/C) pomiješane komponente.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: vektor u i, j komponentnoj formi — a⃗ = xi⃗ + yj⃗ s pomakom (x, y).",note:"postupak",final:true},{txt:"Intuicija: 'i' = horizontalna jedinica (desno +); 'j' = vertikalna (gore +).",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: vektor u i, j komponentnoj formi — a⃗ = xi⃗ + yj⃗ s pomakom (x, y).",
     "Intuicija: 'i' = horizontalna jedinica (desno +); 'j' = vertikalna (gore +).",
     "Česta greška: zamijeniti komponente i, j; ili krivi predznak smjera.",
     "Alt metoda (provjera): nacrtaj koordinate krajeva vektora na slici — 'iz repa u glavu'."
   ,"Provjera duljine: |a⃗| = √(3² + 4²) = √25 = 5 — standardna 3-4-5 trojka ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:13,type:"mc",warn:"Pazi: traži tvrdnju koja vrijedi za SVAKI trokut — protuprimjer obara.",topic:"geom",points:1,
  q:"Koja je od navedenih tvrdnja točna za svaki trokut?",
  opts:["Težište dijeli težišnicu u omjeru 2 : 1.","Visina trokuta spaja vrh i polovište nasuprotne stranice trokuta.","Simetrala kuta trokuta okomita je na stranicu nasuprotnu tomu kutu.","Simetrale stranica trokuta sijeku se u ortocentru."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"A) Težište (sjecište težišnica) dijeli svaku težišnicu u omjeru 2:1 od vrha — STANDARDNA ČINJENICA."},
     {txt:"B) Visina je OKOMICA iz vrha na nasuprotnu stranicu, ne polovište — netočno."},
     {txt:"C) Simetrala KUTA prolazi vrhom, ali nije okomita na nasuprotnu stranicu (osim u jednakokračnom/jednakostraničnom) — netočno."},
     {txt:"D) Simetrale stranica sijeku se u SREDIŠTU OPISANE kružnice, ne u ortocentru — netočno. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera A: težište T dijeli težišnicu u 2:1 od vrha (vrh — T — polovište nasuprotne stranice) ✓",note:"verifikacija"},
     {txt:"Distraktori: B brka visinu s težišnicom; C brka simetralu kuta s visinom; D brka opisanu s ortocentrom.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: težište T dijeli težišnicu u omjeru 2:1 od vrha; visina = okomica iz vrha; simetrala kuta općenito nije okomita.",note:"postupak",final:true},{txt:"Intuicija: zapamti 4 karakteristične točke — težište, ortocentar, središte opisane, središte upisane.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: težište T dijeli težišnicu u omjeru 2:1 od vrha; visina = okomica iz vrha; simetrala kuta općenito nije okomita.",
     "Intuicija: zapamti 4 karakteristične točke — težište, ortocentar, središte opisane, središte upisane.",
     "Česta greška: brkati ove četiri točke i njihova svojstva.",
     "Alt metoda (provjera): za jednakostraničan trokut sve se 4 točke podudaraju — ali u opće trokutu su različite."
   ,"Provjera A: težište T dijeli težišnicu u 2:1 od vrha (vrh — T — polovište nasuprotne stranice) ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:14,img:true,type:"mc",warn:"Pazi: paralele → slični trokuti; primijeni omjer 3 : 5 na duljine.",topic:"geom",points:1,
  q:"Pravci AB i CD prikazani na skici su paralelni. Ako je |BC| : |CE| = 3 : 5 i |AB| = 24 cm, kolika je duljina dužine ̅CD?",
  opts:["9 cm","9,6 cm","14,4 cm","15 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Iz skice: trokut EAB s paralelom CD koja siječe stranice EA i EB; nastaje manji trokut ECD sličan EAB."},
     {txt:"Omjer |BC|:|CE| = 3:5 → |BE| = |BC| + |CE| = 3 + 5 = 8 dijelova; |CE| = 5 dijelova."},
     {txt:"Sličnost ECD ~ EAB s omjerom CE/EB = 5/8."},
     {txt:"CD/AB = 5/8 → CD = 24 · 5/8 = 15 cm. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera omjera: 15/24 = 5/8 ✓ (= 0,625)",note:"verifikacija"},
     {txt:"Distraktori: A) 9 = 24·3/8 (krivi omjer); B) 9,6 = krivi izračun; C) 14,4 = 24·3/5 (krivi nazivnik).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: paralelne stranice u trokutu daju sličnost (Talesov poučak) — proporcionalne stranice.",note:"postupak",final:true},{txt:"Intuicija: manji trokut 'sličan' većem ako su stranice paralelne; omjer = koeficijent sličnosti.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: paralelne stranice u trokutu daju sličnost (Talesov poučak) — proporcionalne stranice.",
     "Intuicija: manji trokut 'sličan' većem ako su stranice paralelne; omjer = koeficijent sličnosti.",
     "Česta greška: pomiješati omjer BC:CE s omjerom CE:BE.",
     "Alt metoda (provjera): u sličnim trokutima sve odgovarajuće stranice imaju isti omjer."
   ,"Provjera omjera: 15/24 = 5/8 ✓ (= 0,625)","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:15,type:"mc",warn:"Pazi: traži se NETOČNA tvrdnja — provjeri svaku.",topic:"geom",points:1,
  q:"Koja od navedenih tvrdnja nije točna?",
  opts:["Obodni je kut nad promjerom pravi.","Obodni je kut dvostruko manji od pripadnoga središnjeg kuta.","Ako se opseg kruga poveća dva puta, dva mu se puta poveća i površina.","Ako se polumjer kruga poveća dva puta, dva mu se puta poveća i opseg."],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
     {txt:"A) Talesov teorem: obodni kut nad promjerom = 90° ✓"},
     {txt:"B) Obodni kut = (1/2)·središnji kut nad istom tetivom ✓"},
     {txt:"C) Ako O₁ = 2πr → O₂ = 2·O₁ → r₂ = 2r; P₁ = πr² → P₂ = π(2r)² = 4πr² = 4P₁ — ČETVEROSTRUKO (ne dvostruko)! NETOČNO."},
     {txt:"D) Polumjer × 2 → opseg = 2πr → 2π(2r) = 2·opseg ✓. Odgovor C.",final:true,note:"odgovor"},
     {txt:"Provjera C: P ovisi o r² → 'dva puta' polumjer kvadrira faktor (×4); 'dva puta' opseg samo udvostručuje r ali kvadrira P ✓",note:"verifikacija"},
     {txt:"Distraktori: A, B, D su sve standardne istinite tvrdnje; samo C je netočna.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: O = 2πr (linearno u r); P = πr² (kvadratično u r); pravilan faktor — opseg ×k → polumjer ×k → površina ×k².",note:"postupak",final:true},{txt:"Intuicija: 'linearno' i 'kvadratno' skaliranje su različita; provjeri eksponente.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: O = 2πr (linearno u r); P = πr² (kvadratično u r); pravilan faktor — opseg ×k → polumjer ×k → površina ×k².",
     "Intuicija: 'linearno' i 'kvadratno' skaliranje su različita; provjeri eksponente.",
     "Česta greška: pretpostaviti da se sve veličine skaliraju linearno (kao opseg).",
     "Alt metoda (provjera): za r = 1 → P = π ≈ 3,14; za r = 2 → P = 4π ≈ 12,57 → odnos 4× ✓"
   ,"Provjera C: P ovisi o r² → 'dva puta' polumjer kvadrira faktor (×4); 'dva puta' opseg samo udvostručuje r ali kvadrira P ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:16,type:"mc",warn:"Pazi: tangens = nasuprotna/priležeća kateta; nasuprot kraćoj (5).",topic:"trig",points:1,
  q:"Duljine kateta pravokutnoga trokuta su 5 cm i 12 cm. Koliko iznosi tangens kuta nasuprot kraćoj kateti?",
  opts:["5/13","5/12","12/13","12/5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
     {txt:"U pravokutnom trokutu tg(α) = nasuprotna kateta / priležeća kateta."},
     {txt:"Kut nasuprot kraćoj kateti (5 cm): nasuprotna = 5, priležeća = 12."},
     {txt:"tg(α) = 5/12. Odgovor B.",final:true,note:"odgovor"},
     {txt:"Provjera: kraći kut → manja vrijednost tg (tg < 1 jer α < 45°); 5/12 ≈ 0,417 → α ≈ 22,6° ✓",note:"verifikacija"},
     {txt:"Distraktori: A) 5/13 = sin (hipotenuza 13); C) 12/13 = cos; D) 12/5 = tg drugog kuta (90° − α).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: tg = nasuprotna/priležeća; sin = nasuprotna/hipotenuza; cos = priležeća/hipotenuza.",note:"postupak",final:true},{txt:"Intuicija: 'tan' = 'tangens' = omjer dviju kateta.",note:"intuicija",final:true},{txt:"Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: tg = nasuprotna/priležeća; sin = nasuprotna/hipotenuza; cos = priležeća/hipotenuza.",
     "Intuicija: 'tan' = 'tangens' = omjer dviju kateta.",
     "Česta greška: pomiješati sin, cos, tan; ili krivi raspored stranica.",
     "Alt metoda (provjera): hipotenuza = √(5²+12²) = 13 (3-4-5 trojka pomnožena × 2,6 nije, ali 5-12-13 je standardna Pitagorina trojka)."
   ,"Provjera: kraći kut → manja vrijednost tg (tg < 1 jer α < 45°); 5/12 ≈ 0,417 → α ≈ 22,6° ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:17,type:"mc",warn:"Pazi: formula za rješenja; pazi predznak ispod korijena (−4·(−c) = +4c).",topic:"kv",points:1,
  q:"Čemu je jednako jedno rješenje kvadratne jednadžbe x² − x − c = 0?",
  opts:["(−1 + √(1 − 4c))/2","(−1 + √(1 + 4c))/2","(1 + √(1 − 4c))/2","(1 + √(1 + 4c))/2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Kvadratna formula: za ax² + bx + c' = 0, x = (−b ± √(b² − 4ac'))/(2a)."},
     {txt:"Ovdje a = 1, b = −1, c' = −c. Dakle x = −(−1) ± √((−1)² − 4·1·(−c))/(2·1)."},
     {txt:"x = (1 ± √(1 + 4c))/2."},
     {txt:"Jedno od rješenja: (1 + √(1 + 4c))/2. Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera s c = 0: x² − x = 0 → x(x−1) = 0 → x = 0 ili x = 1; formula: (1 ± √1)/2 = 1 ili 0 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/C imaju −1 (krivi predznak vodećeg člana); B ima krivi predznak unutar korijena.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: kvadratna formula x = (−b ± √(b² − 4ac))/(2a); pažljivo s predznacima.",note:"postupak",final:true},{txt:"Intuicija: za x² + ... pre-faktor je 1 (pa /(2a) = /2); −b daje pozitivan +1 jer je b = −1.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: kvadratna formula x = (−b ± √(b² − 4ac))/(2a); pažljivo s predznacima.",
     "Intuicija: za x² + ... pre-faktor je 1 (pa /(2a) = /2); −b daje pozitivan +1 jer je b = −1.",
     "Česta greška: krivi predznak −b (zaboraviti minus minus = plus); ili krivi predznak −4ac.",
     "Alt metoda (provjera): provjeri s c = 2 — x² − x − 2 = 0 → (x − 2)(x + 1) = 0 → x = 2 ili −1; formula: (1 ± √9)/2 = 2 ili −1 ✓"
   ,"Provjera s c = 0: x² − x = 0 → x(x−1) = 0 → x = 0 ili x = 1; formula: (1 ± √1)/2 = 1 ili 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:18,type:"mc",warn:"Pazi: D = 19 nije potpun kvadrat → rješenja su iracionalna i različita.",topic:"kv",points:1,
  q:"Koja od navedenih tvrdnja vrijedi za rješenja svih kvadratnih jednadžba kojima je diskriminanta jednaka 19?",
  opts:["Rješenja su realni brojevi.","Rješenja nisu realni brojevi.","Umnožak rješenja iznosi 19.","Zbroj rješenja iznosi 19."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Diskriminanta D = b² − 4ac određuje vrstu rješenja."},
     {txt:"D > 0 → dva različita REALNA rješenja; D = 0 → jedno (dvostruko) realno; D < 0 → nema realnih (kompleksna)."},
     {txt:"D = 19 > 0 → dva različita realna rješenja. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: bilo koja kvadratna s D = 19 (npr. x² − x − 4,5 = 0 → D = 1 + 18 = 19) ima realna rješenja ✓",note:"verifikacija"},
     {txt:"Distraktori: B) krivi smjer; C/D) Vièteove formule daju zbroj −b/a i umnožak c/a, ne D direktno.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: D = b² − 4ac > 0 ⟺ dva različita realna rješenja.",note:"postupak",final:true},{txt:"Intuicija: D je 'iza korijena' u kvadratnoj formuli; pozitivna D omogućuje računanje √D u realnim brojevima.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: D = b² − 4ac > 0 ⟺ dva različita realna rješenja.",
     "Intuicija: D je 'iza korijena' u kvadratnoj formuli; pozitivna D omogućuje računanje √D u realnim brojevima.",
     "Česta greška: brkati zbroj/umnožak rješenja s diskriminantom.",
     "Alt metoda (provjera): vrh parabole je na x = −b/(2a); D određuje koliko je tjeme udaljeno od x-osi (i je li 'iznad' ili 'ispod')."
   ,"Provjera: bilo koja kvadratna s D = 19 (npr. x² − x − 4,5 = 0 → D = 1 + 18 = 19) ima realna rješenja ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:19,type:"mc",warn:"Pazi: slika [6, +∞⟩ znači minimum 6 — tipično |...| + 6 ili kvadrat + 6.",topic:"kv",points:1,
  q:"Kojoj je od navedenih funkcija slika [6, +∞⟩?",
  opts:["f(x) = −x² − 6","f(x) = −x² + 6","f(x) = x² − 6","f(x) = x² + 6"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
     {txt:"Slika kvadratne f(x) = ax² + bx + c s a > 0: [y_v, +∞⟩ gdje je y_v = vrijednost u tjemenu."},
     {txt:"D) f(x) = x² + 6; tjeme: x_v = 0, y_v = f(0) = 6; slika [6, +∞⟩. ✓"},
     {txt:"A) a = −1 < 0 → slika ⟨−∞, y_max] (krivi smjer); B) slično."},
     {txt:"C) f(x) = x² − 6 → slika [−6, +∞⟩ (krivi minimum). Odgovor D.",final:true,note:"odgovor"},
     {txt:"Provjera D: f(0) = 6 (minimum); za |x| > 0, f(x) > 6 → svi vrijednosti ≥ 6 ✓",note:"verifikacija"},
     {txt:"Distraktori: A/B otvorene nadolje (a < 0); C ima krivi minimum −6.",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: f(x) = ax² + ... s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",note:"postupak",final:true},{txt:"Intuicija: x² ≥ 0 uvijek → x² + 6 ≥ 6.",note:"intuicija",final:true}
   ],
  why:[
     "Pravilo: f(x) = ax² + ... s a > 0 ima minimum u tjemenu; slika = [y_v, +∞⟩.",
     "Intuicija: x² ≥ 0 uvijek → x² + 6 ≥ 6.",
     "Česta greška: zaboraviti predznak vodećeg koeficijenta (a); ili krivo identificirati tjeme.",
     "Alt metoda (provjera): za f(x) = x² + 6, najmanja vrijednost je f(0) = 6; za bilo koji veći y, postoji x t.d. f(x) = y ✓"
   ,"Provjera D: f(0) = 6 (minimum); za |x| > 0, f(x) > 6 → svi vrijednosti ≥ 6 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:20,type:"mc",warn:"Pazi: S₅ = (5/2)(a₁ + a₅) = (5/2)(−2 + 26).",topic:"niz",points:1,
  q:"Ako je u aritmetičkome nizu prvi član −2, a peti član 26, koliko iznosi zbroj prvih pet članova toga niza?",
  opts:["60","70","120","140"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
     {txt:"Aritmetički niz: zbroj prvih n članova S_n = (a₁ + a_n)·n/2."},
     {txt:"Ovdje n = 5, a₁ = −2, a₅ = 26."},
     {txt:"S₅ = (−2 + 26)·5/2 = 24·5/2 = 60. Odgovor A.",final:true,note:"odgovor"},
     {txt:"Provjera: d = (a₅ − a₁)/(5 − 1) = 28/4 = 7; niz: −2, 5, 12, 19, 26; zbroj = −2 + 5 + 12 + 19 + 26 = 60 ✓",note:"verifikacija"},
     {txt:"Distraktori: B) 70 = krivi izračun; C) 120 = krivi faktor 5; D) 140 = krivi (×5 umjesto ×5/2).",note:"diagnostika", final:true},{txt:"Sažetak postupka: Pravilo: zbroj aritmetičkog niza S_n = (a₁ + a_n)·n/2 (formula 'prvi + zadnji' krat polovica broja članova).",note:"postupak",final:true},{txt:"Intuicija: prosjek prvog i zadnjeg člana × broj članova.",note:"intuicija",final:true},{txt:"Provjera: za aritmetički niz, razlika d je konstantna; za geometrijski, omjer q je konstantan.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: zbroj aritmetičkog niza S_n = (a₁ + a_n)·n/2 (formula 'prvi + zadnji' krat polovica broja članova).",
     "Intuicija: prosjek prvog i zadnjeg člana × broj članova.",
     "Česta greška: zaboraviti dijeliti s 2; ili pomiješati a_n s d.",
     "Alt metoda (provjera): prosjek niza = (a₁ + a₅)/2 = (−2 + 26)/2 = 12; zbroj = 12·5 = 60 ✓"
   ,"Provjera: d = (a₅ − a₁)/(5 − 1) = 28/4 = 7; niz: −2, 5, 12, 19, 26; zbroj = −2 + 5 + 12 + 19 + 26 = 60 ✓","Tipičan propust: aritmetički niz koristi razliku d, geometrijski koristi omjer q — ne miješati."]
},
  {id:21.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Zapišite broj 620 milijuna znanstvenim zapisom.",
  sol:{ans:"6,2·10⁸",alt:["6,2·10^8","6,2 · 10^8","6,2e8","6,2*10^8"]},
  steps:[
     {txt:"620 milijuna = 620 000 000 (8 nula iza 62)."},
     {txt:"Znanstveni zapis: broj između 1 i 10 puta potencija 10."},
     {txt:"620 000 000 = 6,2·10⁸ (pomakni decimalnu točku 8 mjesta lijevo)."},
     {txt:"Provjera: 6,2·10⁸ = 6,2·100 000 000 = 620 000 000 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: znanstveni zapis A·10ⁿ gdje je A ∈ [1, 10⟩ i n cijeli broj.",note:"postupak",final:true},{txt:"Intuicija: broj decimalnih mjesta = eksponent (za velike brojeve, pozitivan eksponent).",note:"intuicija",final:true},{txt:"Točan odgovor: 6,2·10⁸ ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: znanstveni zapis A·10ⁿ gdje je A ∈ [1, 10⟩ i n cijeli broj.",
     "Intuicija: broj decimalnih mjesta = eksponent (za velike brojeve, pozitivan eksponent).",
     "Česta greška: krivi eksponent (broj nula); ili A van [1, 10⟩.",
     "Alt metoda (provjera): broj znamenki broja − 1 = eksponent (620 000 000 ima 9 znamenki → 10⁸) ✓"
   ,"Provjera: 6,2·10⁸ = 6,2·100 000 000 = 620 000 000 ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:21.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Površina Saturna iznosi približno 4,27·10¹⁰ km², a Zemlje 5,1·10⁸ km². Za koliko je površina Saturna veća od površine Zemlje?",
  sol:{ans:"4,219·10¹⁰ km²",alt:["4,219·10^10","4,219 · 10^10","42,19·10^9","4,219·10¹⁰"]},
  steps:[
     {txt:"Pretvori na istu potenciju 10: 5,1·10⁸ = 0,051·10¹⁰."},
     {txt:"Razlika: 4,27·10¹⁰ − 0,051·10¹⁰ = 4,219·10¹⁰ km²."},
     {txt:"Provjera: 4,219·10¹⁰ + 0,051·10¹⁰ = 4,270·10¹⁰ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za zbroj/razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",note:"postupak",final:true},{txt:"Intuicija: Zemlja je puno manja od Saturna; razlika je gotovo cijela površina Saturna.",note:"intuicija",final:true},{txt:"Točan odgovor: 4,219·10¹⁰ km² ✓",note:"odgovor",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za zbroj/razliku brojeva u znanstvenom zapisu, svedi na istu potenciju.",
     "Intuicija: Zemlja je puno manja od Saturna; razlika je gotovo cijela površina Saturna.",
     "Česta greška: oduzeti direktno bez svodenja eksponenata (4,27 − 5,1 = krivi).",
     "Alt metoda (provjera): 4,27·10¹⁰ − 5,1·10⁸ = (427 − 5,1)·10⁸ = 421,9·10⁸ = 4,219·10¹⁰ ✓"
   ,"Provjera: 4,219·10¹⁰ + 0,051·10¹⁰ = 4,270·10¹⁰ ✓","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]
},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Zadani su brojevi A = 8x³y i B = ([FRAC:1|2])x⁻³y². Izračunajte A · B.",
  sol:{ans:"4y³",alt:["4 y³","4·y³","4y^3"]},
  steps:[
     {txt:"Pravilo: aᵐ · aⁿ = aᵐ⁺ⁿ; množenje koeficijenata zasebno."},
     {txt:"A·B = (8 · 1/2) · (x³ · x⁻³) · (y · y²) = 4 · x⁰ · y³."},
     {txt:"x⁰ = 1, pa A·B = 4y³."},
     {txt:"Provjera s x = 2, y = 1: A = 8·8·1 = 64; B = (1/2)·(1/8)·1 = 1/16; A·B = 64/16 = 4; formula 4·1³ = 4 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: kod množenja jednake baze — zbroji eksponente.",note:"postupak",final:true},{txt:"Intuicija: 'x se kraćuje' (x³·x⁻³ = 1); 'y se akumulira'.",note:"intuicija",final:true},{txt:"Točan odgovor: 4y³ ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = 4y³ u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: kod množenja jednake baze — zbroji eksponente.",
     "Intuicija: 'x se kraćuje' (x³·x⁻³ = 1); 'y se akumulira'.",
     "Česta greška: pomiješati x i y eksponente; ili pomnožiti umjesto zbrojiti.",
     "Alt metoda (provjera): koeficijent 8 · 1/2 = 4; varijable x → poništavanje, y → y³ ✓"
   ,"Provjera s x = 2, y = 1: A = 8·8·1 = 64; B = (1/2)·(1/8)·1 = 1/16; A·B = 64/16 = 4; formula 4·1³ = 4 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Izračunajte B⁻⁴ (za B = ([FRAC:1|2])x⁻³y²).",
  sol:{ans:"16x¹²y⁻⁸",alt:["16 x^12 y^-8","16x^12/y^8","16·x¹²·y⁻⁸","16x^12y^(-8)"]},
  steps:[
     {txt:"Pravilo: (a·b·c)ⁿ = aⁿ·bⁿ·cⁿ; (aᵐ)ⁿ = aᵐⁿ."},
     {txt:"B⁻⁴ = ([FRAC:1|2])⁻⁴ · (x⁻³)⁻⁴ · (y²)⁻⁴."},
     {txt:"(1/2)⁻⁴ = 2⁴ = 16; (x⁻³)⁻⁴ = x¹²; (y²)⁻⁴ = y⁻⁸."},
     {txt:"B⁻⁴ = 16x¹²y⁻⁸."},
     {txt:"Provjera: B = (1/2)·1·1 = 0,5 za x = 1, y = 1; B⁻⁴ = 0,5⁻⁴ = 1/0,0625 = 16 ✓ (drugi članovi su 1)",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: negativan eksponent obrće i kvadrira; predznak ide na sve eksponente unutra.",note:"postupak",final:true},{txt:"Intuicija: 'inverzija → eksponenti se množe s −4 (predznak se obrne)'.",note:"intuicija",final:true},{txt:"Točan odgovor: 16x¹²y⁻⁸ ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: negativan eksponent obrće i kvadrira; predznak ide na sve eksponente unutra.",
     "Intuicija: 'inverzija → eksponenti se množe s −4 (predznak se obrne)'.",
     "Česta greška: zaboraviti dignuti koeficijent (1/2 → 16); ili krivi predznak eksponenta.",
     "Alt metoda (provjera): B⁻¹ = 2x³y⁻²; B⁻⁴ = (2x³y⁻²)⁴ = 16x¹²y⁻⁸ ✓"
   ,"Provjera: B = (1/2)·1·1 = 0,5 za x = 1, y = 1; B⁻⁴ = 0,5⁻⁴ = 1/0,0625 = 16 ✓ (drugi članovi su 1)","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Zadan je izraz 16y² + 3x(3x − 8y). Izračunajte vrijednost zadanoga izraza za x = 1 i y = −2.",
  sol:{ans:"121",alt:["121","121,0"]},
  steps:[
     {txt:"Uvrsti x = 1, y = −2 u izraz."},
     {txt:"16·(−2)² = 16·4 = 64."},
     {txt:"3·1·(3·1 − 8·(−2)) = 3·(3 + 16) = 3·19 = 57."},
     {txt:"Zbroj: 64 + 57 = 121."},
     {txt:"Provjera: 16·4 = 64 ✓; (3·1 − 8·(−2)) = 3 + 16 = 19 ✓; 3·19 = 57 ✓; 64 + 57 = 121 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: prvi razriješi zagrade pa zbrajaj; pazi na negativne brojeve.",note:"postupak",final:true},{txt:"Intuicija: '−8·(−2) = +16' (dva minusa daju plus).",note:"intuicija",final:true},{txt:"Točan odgovor: 121 ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: prvi razriješi zagrade pa zbrajaj; pazi na negativne brojeve.",
     "Intuicija: '−8·(−2) = +16' (dva minusa daju plus).",
     "Česta greška: krivi predznak −8·(−2); ili krivi redoslijed operacija.",
     "Alt metoda (provjera): razvij izraz prvo — 16y² + 9x² − 24xy; uvrsti: 64 + 9 − 24·1·(−2) = 64 + 9 + 48 = 121 ✓"
   ,"Provjera: 16·4 = 64 ✓; (3·1 − 8·(−2)) = 3 + 16 = 19 ✓; 3·19 = 57 ✓; 64 + 57 = 121 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:23.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Izraz 16y² + 3x(3x − 8y) zapišite u obliku kvadrata binoma.",
  sol:{ans:"(4y − 3x)²",alt:["(3x-4y)²","(3x − 4y)²","(4y-3x)²","(4y − 3x)²"]},
  steps:[
     {txt:"Razvij izraz: 16y² + 9x² − 24xy."},
     {txt:"Preoredaj: 9x² − 24xy + 16y² = (3x)² − 2·3x·4y + (4y)²."},
     {txt:"Prepoznavanje (a − b)² = a² − 2ab + b² s a = 3x, b = 4y."},
     {txt:"(3x − 4y)² = (4y − 3x)² (jer je kvadrat suprotnih jednak)."},
     {txt:"Provjera s x = 1, y = −2: (4·(−2) − 3·1)² = (−8 − 3)² = (−11)² = 121 = vrijednost iz Q23,1 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: kvadrat binoma (a − b)² = a² − 2ab + b²; prepoznaj 'savršeni kvadrat' u trinom.",note:"postupak",final:true},{txt:"Intuicija: traži pattern 'kvadrat + kvadrat − 2 puta umnožak'.",note:"intuicija",final:true},{txt:"Točan odgovor: (4y − 3x)² ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: kvadrat binoma (a − b)² = a² − 2ab + b²; prepoznaj 'savršeni kvadrat' u trinom.",
     "Intuicija: traži pattern 'kvadrat + kvadrat − 2 puta umnožak'.",
     "Česta greška: zaboraviti −2ab član; ili krivi predznak.",
     "Alt metoda (provjera): provjeri 2·3x·4y = 24xy ✓; rastav je točan."
   ,"Provjera s x = 1, y = −2: (4·(−2) − 3·1)² = (−8 − 3)² = (−11)² = 121 = vrijednost iz Q23,1 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:24.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Riješite jednadžbu 2 − (7m + 1)/5 = m.",
  sol:{ans:"m = [FRAC:3|4]",alt:["3/4","0,75","0,75","m = 0,75"], solFormula:{pre:"m = ", frac:[["3","4"]]}},
  steps:[
     {txt:"Pomnoži obje strane s 5 (ukloni nazivnik): 5·2 − (7m + 1) = 5m."},
     {txt:"10 − 7m − 1 = 5m → 9 − 7m = 5m."},
     {txt:"Premjesti m na jednu stranu: 9 = 12m."},
     {txt:"m = 9/12 = 3/4."},
     {txt:"Provjera: 2 − (7·3/4 + 1)/5 = 2 − (21/4 + 4/4)/5 = 2 − (25/4)/5 = 2 − 5/4 = 3/4 = m ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za jednadžbu s razlomkom, pomnoži sve s nazivnikom da ukloniš.",note:"postupak",final:true},{txt:"Intuicija: linearna jednadžba s razlomcima — najlakše ih maknuti odmah.",note:"intuicija",final:true},{txt:"Točan odgovor: m = [FRAC:3|4] ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: za jednadžbu s razlomkom, pomnoži sve s nazivnikom da ukloniš.",
     "Intuicija: linearna jednadžba s razlomcima — najlakše ih maknuti odmah.",
     "Česta greška: zaboraviti pomnožiti SVE članove (i one bez razlomka).",
     "Alt metoda (provjera): supstitucija m = 3/4 u izvornu jednadžbu daje 2 − 25/20 = 2 − 5/4 = 3/4 ✓"
   ,"Provjera: 2 − (7·3/4 + 1)/5 = 2 − (21/4 + 4/4)/5 = 2 − (25/4)/5 = 2 − 5/4 = 3/4 = m ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:24.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Marko u jednoj minuti pretrči 200 metara, a Luka u jednoj minuti biciklom prijeđe 500 metara. Ako je svaki od njih prešao put od šest kilometara, koliko je minuta više Marko trčao nego što je Luka vozio bicikl?",
  sol:{ans:"18 min",alt:["18","18 minuta"]},
  steps:[
     {txt:"6 km = 6000 m (pretvorba)."},
     {txt:"Markov čas: 6000/200 = 30 min; Lukin čas: 6000/500 = 12 min."},
     {txt:"Razlika: 30 − 12 = 18 min."},
     {txt:"Provjera: za 30 min, Marko prijeđe 30·200 = 6000 m ✓; Luka u 12 min: 12·500 = 6000 m ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: vrijeme = put / brzina (pazi na iste jedinice).",note:"postupak",final:true},{txt:"Intuicija: brži (bicikl) treba kraće vrijeme za isti put.",note:"intuicija",final:true},{txt:"Točan odgovor: 18 min ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: vrijeme = put / brzina (pazi na iste jedinice).",
     "Intuicija: brži (bicikl) treba kraće vrijeme za isti put.",
     "Česta greška: zaboraviti pretvorbu km → m; ili krivi smjer omjera.",
     "Alt metoda (provjera): omjer brzina 500/200 = 2,5 → Lukin čas 2,5× kraći od Markovog; 30/2,5 = 12 ✓"
   ,"Provjera: za 30 min, Marko prijeđe 30·200 = 6000 m ✓; Luka u 12 min: 12·500 = 6000 m ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:25.1,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Grafikon prikazuje urod lješnjaka izražen u tonama od 2013. do 2017. godine. Koliko iznosi ukupan urod lješnjaka u svih pet godina?",
  sol:{ans:"2500 t",alt:["2500","2500 t","2 500"]},
  steps:[
     {txt:"Iz grafikona očitaj vrijednosti po godinama: 2013: 500 t; 2014: 450 t; 2015: 600 t; 2016: 550 t; 2017: 400 t."},
     {txt:"Zbroj: 500 + 450 + 600 + 550 + 400 = 2500 t."},
     {txt:"Provjera: 500+450 = 950; +600 = 1550; +550 = 2100; +400 = 2500 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: ukupno = zbroj vrijednosti po godinama (čitano s grafa).",note:"postupak",final:true},{txt:"Intuicija: za stupčasti graf, čitaj visine svih stupaca i zbroji.",note:"intuicija",final:true},{txt:"Točan odgovor: 2500 t ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj iz kumulativne tablice — rezultat mora biti isti.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: ukupno = zbroj vrijednosti po godinama (čitano s grafa).",
     "Intuicija: za stupčasti graf, čitaj visine svih stupaca i zbroji.",
     "Česta greška: krivo očitati vrijednosti s grafa; ili zaboraviti neku godinu.",
     "Alt metoda (provjera): prosjek 500 t/god × 5 god = 2500 t ✓"
   ,"Provjera: 500+450 = 950; +600 = 1550; +550 = 2100; +400 = 2500 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:25.2,img:true,type:"sa",topic:"stat",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Za koliko se posto smanjio urod lješnjaka 2016. godine u odnosu na 2015. godinu?",
  sol:{ans:"≈ 8,33 %",alt:["8,3 %","8,33 %","8,33%","≈8,33%","8,3̄ %"]},
  steps:[
     {txt:"2015.: 600 t; 2016.: 550 t. Apsolutno smanjenje: 600 − 550 = 50 t."},
     {txt:"Postotak smanjenja u odnosu na 2015.: 50/600 · 100 % = 100/12 % ≈ 8,33 %."},
     {txt:"Točno: 8,3̄ % (periodička decimala 8,333...)."},
     {txt:"Provjera: 600 · (1 − 8,33/100) = 600·0,9167 ≈ 550 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: postotak promjene = (razlika / početna vrijednost) · 100 %.",note:"postupak",final:true},{txt:"Intuicija: u odnosu na 2015 — koristi 600 kao bazu (a ne 2016).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 8,33 % ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: postotak promjene = (razlika / početna vrijednost) · 100 %.",
     "Intuicija: u odnosu na 2015 — koristi 600 kao bazu (a ne 2016).",
     "Česta greška: koristiti 550 kao bazu (krivi smjer); ili izračunati apsolutnu razliku umjesto postotak.",
     "Alt metoda (provjera): 50/600 = 1/12 ≈ 0,0833 = 8,33 % ✓"
   ,"Provjera: 600 · (1 − 8,33/100) = 600·0,9167 ≈ 550 ✓","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."]
},
  {id:26.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Pravac p zadan je jednadžbom 3x − 2y + a = 0, a ∈ ℝ. Za koju vrijednost parametra a točka T(2, 3) pripada pravcu p?",
  sol:{ans:"a = 0",alt:["0","a=0"]},
  steps:[
     {txt:"Točka pripada pravcu ⟺ koordinate zadovoljavaju jednadžbu pravca."},
     {txt:"Uvrsti T(2, 3) u 3x − 2y + a = 0: 3·2 − 2·3 + a = 0."},
     {txt:"6 − 6 + a = 0 → a = 0."},
     {txt:"Provjera: za a = 0, pravac je 3x − 2y = 0; T(2, 3) → 6 − 6 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: točka (x₀, y₀) pripada pravcu Ax + By + C = 0 ⟺ Ax₀ + By₀ + C = 0.",note:"postupak",final:true},{txt:"Intuicija: 'uvrstiti koordinate i provjeriti je li jednadžba zadovoljena'.",note:"intuicija",final:true},{txt:"Točan odgovor: a = 0 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: točka (x₀, y₀) pripada pravcu Ax + By + C = 0 ⟺ Ax₀ + By₀ + C = 0.",
     "Intuicija: 'uvrstiti koordinate i provjeriti je li jednadžba zadovoljena'.",
     "Česta greška: brkati x i y koordinatu; ili krivi predznak člana.",
     "Alt metoda (provjera): pravac 3x − 2y = 0 prolazi ishodištem i ima nagib k = 3/2; T(2, 3) je na pravcu jer 3 = (3/2)·2 ✓"
   ,"Provjera: za a = 0, pravac je 3x − 2y = 0; T(2, 3) → 6 − 6 = 0 ✓","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:26.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko iznosi mjera kuta koji pravac p zatvara s pozitivnim smjerom osi apscisa?",
  sol:{ans:"56°18'36''",alt:["56°18'","56°19'","arctan(3/2)","≈56°18'","56°18'36''"]},
  steps:[
     {txt:"Iz Q26,1: pravac je 3x − 2y = 0 → y = (3/2)x; nagib k = 3/2."},
     {txt:"Kut s pozitivnim smjerom x-osi: tg(α) = k = 3/2 = 1,5."},
     {txt:"α = arctan(1,5) ≈ 56,3099° ≈ 56°18'36\"."},
     {txt:"Provjera: 56°18'36\" u decimalama = 56 + 18/60 + 36/3600 = 56,31° ≈ 56,3099° ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: pravac y = kx + n zatvara s x-osi kut α takav da je tg(α) = k.",note:"postupak",final:true},{txt:"Intuicija: nagib veći od 1 → kut veći od 45°; nagib 1,5 → ≈ 56°.",note:"intuicija",final:true},{txt:"Točan odgovor: 56°18'36'' ✓",note:"odgovor",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: pravac y = kx + n zatvara s x-osi kut α takav da je tg(α) = k.",
     "Intuicija: nagib veći od 1 → kut veći od 45°; nagib 1,5 → ≈ 56°.",
     "Česta greška: koristiti pogrešnu trig. funkciju (sin, cos umjesto tg); ili krivi izračun.",
     "Alt metoda (provjera): arctg(1,5) ≈ 0,9828 rad ≈ 56,31° ≈ 56°18'36'' ✓"
   ,"Provjera: 56°18'36\\","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."]
},
  {id:27.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Zadana je kvadratna funkcija f(x) = 3x² + 12x − 15. Napišite jednadžbu osi simetrije grafa funkcije f.",
  sol:{ans:"x = −2",alt:["-2","x=-2","x = -2"]},
  steps:[
     {txt:"Os simetrije parabole prolazi tjemenom; jednadžba je x = x_v gdje je x_v = −b/(2a)."},
     {txt:"Ovdje a = 3, b = 12, c = −15. x_v = −12/(2·3) = −12/6 = −2."},
     {txt:"Jednadžba osi simetrije: x = −2."},
     {txt:"Provjera: f(−2 + h) = f(−2 − h) za svaki h — npr. f(−1) = 3 − 12 − 15 = −24; f(−3) = 27 − 36 − 15 = −24 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: os simetrije parabole f(x) = ax² + bx + c je x = −b/(2a).",note:"postupak",final:true},{txt:"Intuicija: tjeme je 'centar' parabole; simetrala prolazi kroz tjeme okomito na x-os.",note:"intuicija",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: os simetrije parabole f(x) = ax² + bx + c je x = −b/(2a).",
     "Intuicija: tjeme je 'centar' parabole; simetrala prolazi kroz tjeme okomito na x-os.",
     "Česta greška: krivi predznak (b umjesto −b); ili krivi vodeći koeficijent a.",
     "Alt metoda (provjera): completiranje kvadrata 3x² + 12x − 15 = 3(x² + 4x) − 15 = 3(x + 2)² − 27 → tjeme (−2, −27) ✓"
   ,"Provjera: f(−2 + h) = f(−2 − h) za svaki h — npr. f(−1) = 3 − 12 − 15 = −24; f(−3) = 27 − 36 − 15 = −24 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:27.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (2. dio od 2):",
  q:"Odredite sve realne brojeve x za koje funkcija f poprima negativne vrijednosti.",
  sol:{ans:"⟨−5, 1⟩",alt:["(-5,1)","-5<x<1","⟨-5, 1⟩","⟨-5,1⟩"]},
  steps:[
     {txt:"f(x) < 0 ⟺ 3x² + 12x − 15 < 0 ⟺ x² + 4x − 5 < 0 (dijelimo s 3)."},
     {txt:"Faktorizacija: x² + 4x − 5 = (x + 5)(x − 1)."},
     {txt:"Parabola a = 1 > 0 (otvorena nagore); pozitivna izvan nula, negativna IZMEĐU nula."},
     {txt:"Nule: x = −5 i x = 1; rješenje x ∈ ⟨−5, 1⟩ (strogo, jer < 0)."},
     {txt:"Provjera s x = 0 (unutar): f(0) = −15 < 0 ✓; s x = 2 (van): f(2) = 12 + 24 − 15 = 21 > 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za parabolu s a > 0, f(x) < 0 ⟺ x je između nula.",note:"postupak",final:true},{txt:"Intuicija: parabola 'visi' ispod x-osi između svojih dviju nul-točaka.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨−5, 1⟩ ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: za parabolu s a > 0, f(x) < 0 ⟺ x je između nula.",
     "Intuicija: parabola 'visi' ispod x-osi između svojih dviju nul-točaka.",
     "Česta greška: zatvoreni interval [−5, 1] umjesto otvorenog (strogo < 0).",
     "Alt metoda (provjera): graf f(x) — parabola otvorena nagore s nulama u −5 i 1; negativna između ✓"
   ,"Provjera s x = 0 (unutar): f(0) = −15 < 0 ✓; s x = 2 (van): f(2) = 12 + 24 − 15 = 21 > 0 ✓","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."]
},
  {id:28.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = (x − 9)/(x + 1). Odredite nultočku funkcije f.",
  sol:{ans:"x = 9",alt:["9","x=9"]},
  steps:[
     {txt:"Nultočka funkcije: f(x) = 0 ⟺ brojnik = 0 i nazivnik ≠ 0."},
     {txt:"Brojnik: x − 9 = 0 → x = 9."},
     {txt:"Provjeri nazivnik: x + 1 = 9 + 1 = 10 ≠ 0 ✓."},
     {txt:"Nultočka: x = 9."},
     {txt:"Provjera: f(9) = (9 − 9)/(9 + 1) = 0/10 = 0 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: nultočka racionalne funkcije = nula brojnika (uz uvjet da nazivnik nije nula).",note:"postupak",final:true},{txt:"Intuicija: 'razlomak = 0' ⟺ 'brojnik = 0'.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 9 ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: nultočka racionalne funkcije = nula brojnika (uz uvjet da nazivnik nije nula).",
     "Intuicija: 'razlomak = 0' ⟺ 'brojnik = 0'.",
     "Česta greška: zaboraviti provjeriti nazivnik (mogući uklonjivi prekidi).",
     "Alt metoda (provjera): graf hiperbole y = (x−9)/(x+1) presjeca x-os u x = 9 ✓"
   ,"Provjera: f(9) = (9 − 9)/(9 + 1) = 0/10 = 0 ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Odredite domenu funkcije f.",
  sol:{ans:"ℝ \\ {−1}",alt:["R\\{-1}","x ≠ -1","ℝ∖{-1}","ℝ \\ {-1}"]},
  steps:[
     {txt:"Domena racionalne funkcije: svi realni brojevi za koje nazivnik nije nula."},
     {txt:"Uvjet: x + 1 ≠ 0 → x ≠ −1."},
     {txt:"Domena: ℝ \\ {−1} (svi realni osim −1)."},
     {txt:"Provjera: za x = −1, nazivnik = 0 → dijeljenje s nulom, funkcija nije definirana ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: za razlomak f(x) = N(x)/D(x), domena = {x : D(x) ≠ 0}.",note:"postupak",final:true},{txt:"Intuicija: 'isključi sve vrijednosti gdje nazivnik nestaje'.",note:"intuicija",final:true},{txt:"Točan odgovor: ℝ \\ {−1} ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
   ],
  why:[
     "Pravilo: za razlomak f(x) = N(x)/D(x), domena = {x : D(x) ≠ 0}.",
     "Intuicija: 'isključi sve vrijednosti gdje nazivnik nestaje'.",
     "Česta greška: uključiti −1 u domenu; ili krivi zapis 'ℝ \\ {−1}'.",
     "Alt metoda (provjera): graf y = (x−9)/(x+1) ima vertikalnu asimptotu u x = −1 (funkcija nije definirana tu) ✓"
   ,"Provjera: za x = −1, nazivnik = 0 → dijeljenje s nulom, funkcija nije definirana ✓","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."]
},
  {id:29.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 29 (1. dio od 2):",
  q:"Ratar želi ograditi zemljište u obliku trokuta. Duljine dviju strana ograde su 72 m i 55 m, a kut između njih je 83°. Koliko iznosi površina toga zemljišta?",
  sol:{ans:"≈ 1965,24 m²",alt:["1965,24","≈1965 m²","1965,24","≈1965,24"]},
  steps:[
     {txt:"Formula površine trokuta: P = (1/2)·a·b·sin(C), gdje su a, b stranice i C kut između njih."},
     {txt:"a = 72, b = 55, C = 83°."},
     {txt:"P = (1/2)·72·55·sin 83° = 1980·sin 83°."},
     {txt:"sin 83° ≈ 0,9925; P ≈ 1980·0,9925 ≈ 1965,24 m²."},
     {txt:"Provjera: sin 83° vrlo blizu 1 (jer 83° blizu 90°); površina ≈ 1980 m² (gornja granica) ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: P = (1/2)·a·b·sin(C) za trokut s dvjema stranicama a, b i kutom C između njih.",note:"postupak",final:true},{txt:"Intuicija: za pravokutan trokut (C = 90°), formula daje uobičajeno (1/2)·a·b.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 1965,24 m² ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: P = (1/2)·a·b·sin(C) za trokut s dvjema stranicama a, b i kutom C između njih.",
     "Intuicija: za pravokutan trokut (C = 90°), formula daje uobičajeno (1/2)·a·b.",
     "Česta greška: koristiti kut nasuprot stranici umjesto između njih; ili zaboraviti faktor 1/2.",
     "Alt metoda (provjera): za kut blizu 90° (kao 83°), formula ≈ (1/2)·a·b ≈ 1980 m² ✓"
   ,"Provjera: sin 83° vrlo blizu 1 (jer 83° blizu 90°); površina ≈ 1980 m² (gornja granica) ✓","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:29.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 29 (2. dio od 2):",
  q:"Koliko iznosi duljina ograde koju ratar treba postaviti oko toga zemljišta?",
  sol:{ans:"≈ 212,11 m",alt:["212,11","≈212 m","212,11","≈212,11"]},
  steps:[
     {txt:"Ograda = opseg trokuta = zbroj svih triju stranica. Treća stranica c iz kosinusovog poučka."},
     {txt:"c² = a² + b² − 2ab·cos(C) = 72² + 55² − 2·72·55·cos 83°."},
     {txt:"= 5184 + 3025 − 7920·cos 83° = 8209 − 7920·0,1219 ≈ 8209 − 965,7 ≈ 7243,3."},
     {txt:"c ≈ √7243,3 ≈ 85,11 m."},
     {txt:"Opseg: 72 + 55 + 85,11 ≈ 212,11 m."},
     {txt:"Provjera: c je između |72 − 55| = 17 i 72 + 55 = 127 (nejednakost trokuta) ✓; cos 83° ≈ 0,12 (mali pozitivan)",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C) za stranicu nasuprot kutu C.",note:"postupak",final:true},{txt:"Intuicija: za pravi kut (C = 90°), cos = 0 i formula postaje Pitagora.",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 212,11 m ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: kosinusov poučak c² = a² + b² − 2ab·cos(C) za stranicu nasuprot kutu C.",
     "Intuicija: za pravi kut (C = 90°), cos = 0 i formula postaje Pitagora.",
     "Česta greška: zaboraviti dvostruki član 2ab·cos(C); ili krivi predznak za tup kut.",
     "Alt metoda (provjera): za kut 83° blizu pravog, c ≈ √(72² + 55²) ≈ 90 m (Pitagora aproksimacija); preciznije 85,11 ✓"
   ,"Provjera: c je između |72 − 55| = 17 i 72 + 55 = 127 (nejednakost trokuta) ✓; cos 83° ≈ 0,12 (mali pozitivan)","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan."]
},
  {id:30.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 30 (1. dio od 2):",
  q:"Duljina je osnovnoga brida pravilne trostrane prizme 6 cm, a visina je prizme 9 cm. Koliko iznosi volumen te prizme?",
  sol:{ans:"81√3 ≈ 140,296 cm³",alt:["140,296","81√3","81*√(3)","≈140,3 cm³","140,30","≈140,296"]},
  steps:[
     {txt:"Pravilna trostrana prizma: baza = jednakostraničan trokut s bridom a = 6 cm."},
     {txt:"Površina jednakostraničnog trokuta: B = (a²√3)/4 = (36√3)/4 = 9√3 cm²."},
     {txt:"Volumen prizme: V = B·h = 9√3·9 = 81√3 cm³."},
     {txt:"81·1,7321 ≈ 140,296 cm³."},
     {txt:"Provjera dimenzija: cm²·cm = cm³ ✓; B ≈ 15,59 cm²; V ≈ 15,59·9 ≈ 140,3 cm³ ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: volumen prizme V = B·h; površina jednakostraničnog trokuta B = (a²√3)/4.",note:"postupak",final:true},{txt:"Intuicija: prizma = baza × visina (kao kocka, ali baza nije kvadrat).",note:"intuicija",final:true},{txt:"Točan odgovor: 81√3 ≈ 140,296 cm³ ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: volumen prizme V = B·h; površina jednakostraničnog trokuta B = (a²√3)/4.",
     "Intuicija: prizma = baza × visina (kao kocka, ali baza nije kvadrat).",
     "Česta greška: koristiti pravokutni trokut umjesto jednakostraničnog; ili krivi √3 faktor.",
     "Alt metoda (provjera): visina trokuta h_b = a√3/2 = 3√3; B = (1/2)·a·h_b = (1/2)·6·3√3 = 9√3 ✓"
   ,"Provjera dimenzija: cm²·cm = cm³ ✓; B ≈ 15,59 cm²; V ≈ 15,59·9 ≈ 140,3 cm³ ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
},
  {id:30.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 30 (2. dio od 2):",
  q:"Koliko iznosi oplošje te prizme?",
  sol:{ans:"18√3 + 162 ≈ 193,177 cm²",alt:["193,177","18√3 + 162","≈193 cm²","193,18","≈193,177"]},
  steps:[
     {txt:"Oplošje prizme: O = 2·B + plašt, gdje je plašt = opseg baze × visina."},
     {txt:"Iz Q30,1: B = 9√3 cm²; opseg baze (jednakostraničan trokut): 3a = 18 cm; visina prizme = 9 cm."},
     {txt:"Plašt = 18·9 = 162 cm²."},
     {txt:"O = 2·9√3 + 162 = 18√3 + 162 cm²."},
     {txt:"18·1,7321 + 162 ≈ 31,177 + 162 = 193,177 cm²."},
     {txt:"Provjera: 18√3 ≈ 31,18; 31,18 + 162 = 193,18 ✓",note:"verifikacija", final:true},{txt:"Sažetak postupka: Pravilo: O = 2·B + opseg·visina (dvije baze + pobočne plohe).",note:"postupak",final:true},{txt:"Intuicija: prizma 'razmotana' u 2D = dva trokuta + tri pravokutnika.",note:"intuicija",final:true},{txt:"Točan odgovor: 18√3 + 162 ≈ 193,177 cm² ✓",note:"odgovor",final:true}
   ],
  why:[
     "Pravilo: O = 2·B + opseg·visina (dvije baze + pobočne plohe).",
     "Intuicija: prizma 'razmotana' u 2D = dva trokuta + tri pravokutnika.",
     "Česta greška: zaboraviti broj baza (2) ili broj pobočnih stranica (3).",
     "Alt metoda (provjera): pobočnih ploha 3, svaka 6×9 = 54 cm²; ukupno 3·54 = 162 cm²; + 2·9√3 = 18√3 ≈ 31,18; suma ≈ 193,18 ✓"
   ,"Provjera: 18√3 ≈ 31,18; 31,18 + 162 = 193,18 ✓","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]
}
];

export const qImages = {
  "2023_ljeto_B__12": () => e(Svg10_2023Alj, null),
  "2023_ljeto_B__14": () => e(Svg14_2023Alj, null),
  "2023_ljeto_B__25.1": () => e(Svg25_2023Blj, null),
  "2023_ljeto_B__25.2": () => e(Svg25_2023Blj, null),
  "2023_ljeto_B__9": () => e(Svg7_2023Alj, null),
};
