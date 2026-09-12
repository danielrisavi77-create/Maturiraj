// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { KoordOs } from '../mat-shared-svg.mjs';
const e = React.createElement;

function Svg9z11(){
  // Uspravna prizma s pravokutnom osnovicom 500 cm² i visinom 8 dm = 80 cm
  // Proporcije ~80:25 (visina:širina) — visoka uska prizma kao u PDF-u
  const W=220, H=240;
  const bw=80, bh=42, bd=22, hh=160; // bolji omjer širina:visina prema realnom 25:80
  const x0=60, y0=205;
  const front=[[x0,y0],[x0+bw,y0],[x0+bw,y0-hh],[x0,y0-hh]];
  const right=[[x0+bw,y0],[x0+bw+bd,y0-bh],[x0+bw+bd,y0-hh-bh],[x0+bw,y0-hh]];
  const top=[[x0,y0-hh],[x0+bw,y0-hh],[x0+bw+bd,y0-hh-bh],[x0+bd,y0-hh-bh]];
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  const st="var(--blue)", sw=1.6; // standardna plava
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Plohe — semi-transparent fill koji ne pokriva tamnu pozadinu
    e("polygon",{points:pts(front),fill:"rgba(74,144,217,.12)",stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(right),fill:"rgba(74,144,217,.20)",stroke:st,strokeWidth:sw}),
    e("polygon",{points:pts(top),fill:"rgba(74,144,217,.08)",stroke:st,strokeWidth:sw}),
    // Skrivena baza — isprekidana
    e("line",{x1:x0,y1:y0,x2:x0+bd,y2:y0-bh,stroke:st,strokeWidth:1,strokeDasharray:"5 3",opacity:.55}),
    e("line",{x1:x0+bd,y1:y0-bh,x2:x0+bw+bd,y2:y0-bh,stroke:st,strokeWidth:1,strokeDasharray:"5 3",opacity:.55}),
    // Strelica visine + oznaka 8 dm
    e("line",{x1:x0-22,y1:y0,x2:x0-22,y2:y0-hh,stroke:"var(--gold)",strokeWidth:1.4}),
    e("polygon",{points:`${x0-22},${y0-hh} ${x0-26},${y0-hh+7} ${x0-18},${y0-hh+7}`,fill:"var(--gold)"}),
    e("polygon",{points:`${x0-22},${y0} ${x0-26},${y0-7} ${x0-18},${y0-7}`,fill:"var(--gold)"}),
    e("text",{x:x0-44,y:y0-hh/2+4,fontSize:13,fill:"var(--gold)",fontWeight:700},"8 dm"),
    // Oznaka osnovice 500 cm²
    e("text",{x:x0+bw/2,y:y0+22,fontSize:12,fill:"var(--green)",fontWeight:700,textAnchor:"middle"},"B = 500 cm²")
  );
}

function Svg28z11(){
  // Tablica pakiranja s kolor-kodiranim stupcima A/B/C
  const c={padding:"9px 14px",border:"1px solid rgba(74,144,217,.25)",fontSize:13,textAlign:"center"};
  // Header — tamno plava pozadina, bijeli tekst
  const h={...c,fontWeight:800,background:"rgba(74,144,217,.18)",color:"var(--blue)"};
  // Row label (lijeva kolona)
  const rl={...c,fontWeight:700,background:"rgba(74,144,217,.08)",color:"var(--text)",textAlign:"left"};
  // Vrijednosti — alternating slight tint
  const v1={...c,background:"rgba(74,144,217,.04)"};
  const v2={...c,background:"rgba(80,200,120,.05)"};
  // Distinct colors za pakiranja A/B/C — prepoznatljive boje
  const colA={...h,background:"rgba(80,200,120,.20)",color:"var(--green)"};   // A — zelena
  const colB={...h,background:"rgba(233,180,70,.20)",color:"var(--gold)"};   // B — žuta
  const colC={...h,background:"rgba(224,82,82,.20)",color:"var(--red)"};    // C — crvena
  return e("div",{style:{overflowX:"auto",margin:"12px 0"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:13,width:"100%",borderRadius:6,overflow:"hidden"}},
      e("thead",null,e("tr",null,
        e("th",{style:{...h,textAlign:"left"}},"Pakiranje"),
        e("th",{style:colA},"A"),
        e("th",{style:colB},"B"),
        e("th",{style:colC},"C")
      )),
      e("tbody",null,
        e("tr",null,
          e("td",{style:rl},"Masa"),
          e("td",{style:v1},"1 kg"),
          e("td",{style:v1},"5 kg"),
          e("td",{style:v1},"12 kg")),
        e("tr",null,
          e("td",{style:rl},"Cijena"),
          e("td",{style:v2},"9,80 kn"),
          e("td",{style:v2},"34,30 kn"),
          e("td",{style:v2},"68,00 kn"))
      )
    )
  );
}

function Svg27z11(){
  const W=320, H=200;
  const pad={l:44,r:12,t:14,b:38};
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  // Podaci: bodovi 1-12, frekvencije
  const data=[1,2,3,1,4,7,0,1,5,0,2,4]; // indeks 0=1bod, 1=2boda...
  const maxF=7;
  const n=data.length; // 12 bodova
  const barW=(iW/n)*0.55;
  const toX=i=>pad.l+(i+0.5)*(iW/n);
  const toY=v=>pad.t+iH-v/maxF*iH;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    // Grid vodoravne linije
    [1,2,3,4,5,6,7].map(v=>e("line",{key:"g"+v,
      x1:pad.l,y1:toY(v),x2:pad.l+iW,y2:toY(v),
      stroke:"var(--bdr)",strokeWidth:.7,strokeDasharray:"3 3"})),
    // Osi
    e("line",{x1:pad.l,y1:pad.t,x2:pad.l,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:pad.l,y1:pad.t+iH,x2:pad.l+iW,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    // Strelice
    e("polygon",{points:`${pad.l},${pad.t} ${pad.l-3},${pad.t+7} ${pad.l+3},${pad.t+7}`,fill:"var(--text)"}),
    e("polygon",{points:`${pad.l+iW},${pad.t+iH} ${pad.l+iW-7},${pad.t+iH-3} ${pad.l+iW-7},${pad.t+iH+3}`,fill:"var(--text)"}),
    // Y tick oznake
    [1,2,3,4,5,6,7].map(v=>e("g",{key:"yt"+v},
      e("line",{x1:pad.l-3,y1:toY(v),x2:pad.l,y2:toY(v),stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:pad.l-6,y:toY(v)+4,textAnchor:"end",fontSize:9,fill:"var(--muted)"},v)
    )),
    // Stupci — modra boja s gradient highlightom za max
    data.map((f,i)=>f>0&&e("rect",{key:"b"+i,
      x:toX(i)-barW/2, y:toY(f),
      width:barW, height:f/maxF*iH,
      fill: f===maxF ? "var(--red)" : "var(--blue)",
      stroke: f===maxF ? "#c93030" : "#2e6cad",
      strokeWidth:0.8, rx:1.5})),
    // Vrijednost iznad svakog stupca (frekvencija)
    data.map((f,i)=>f>0&&e("text",{key:"v"+i,
      x:toX(i), y:toY(f)-3,
      textAnchor:"middle", fontSize:9, fontWeight:700,
      fill: f===maxF ? "var(--red)" : "var(--blue)"}, f)),
    // X tick oznake (1-12)
    data.map((_,i)=>e("g",{key:"xt"+i},
      e("line",{x1:toX(i),y1:pad.t+iH,x2:toX(i),y2:pad.t+iH+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(i),y:pad.t+iH+13,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},i+1)
    )),
    // Labele osi
    e("text",{x:pad.l-36,y:pad.t+iH/2,fontSize:9,fill:"var(--muted)",textAnchor:"middle",
      transform:`rotate(-90,${pad.l-36},${pad.t+iH/2})`},"broj učenika"),
    e("text",{x:pad.l+iW/2,y:H-4,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},"broj bodova")
  );
}

function Svg26z11(){
  return e(KoordOs,{W:240,H:220,xMin:-4,xMax:4,yMin:-4,yMax:5,label:"Koordinatni sustav za crtanje pravca"},
    ()=>null
  );
}

function Svg24z11(){
  const c={padding:"8px 12px",border:"1px solid var(--bdr2)",fontSize:12,textAlign:"center"};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const h={...c,fontWeight:700,background:"var(--s2)"};
  const v={...c,background:"var(--s1)"};
  const em={...c,background:"rgba(233,180,70,.06)",border:"1px dashed var(--gold)",color:"var(--gold)",fontSize:11};
  return e("div",{style:{overflowX:"auto",margin:"10px 0"}},
    e("table",{style:{borderCollapse:"collapse",fontSize:12,width:"100%"}},
      e("thead",null,e("tr",null,
        e("th",{style:h},"Polazak"),e("th",{style:h},"Dolazak"),e("th",{style:h},"Trajanje vožnje")
      )),
      e("tbody",null,
        e("tr",null,e("td",{style:v},"5:20"),e("td",{style:v},"11:40"),e("td",{style:v},"6 sati i 20 minuta")),
        e("tr",null,e("td",{style:em},"?"),e("td",{style:v},"10:27"),e("td",{style:v},"56 minuta")),
        e("tr",null,e("td",{style:v},"21:39"),e("td",{style:v},"4:48 (slj. dana)"),e("td",{style:em},"?"))
      )
    )
  );
}

function Svg20z11(){
  return e(KoordOs,{W:240,H:200,xMin:-3,xMax:4,yMin:-3,yMax:3},
    (toX,toY)=>{
      const A=[toX(-2),toY(-2)], B=[toX(3),toY(-2)], C=[toX(1),toY(1)];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
      const pts=`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`;
      return e("g",null,
        e("polygon",{points:pts,fill:"rgba(74,144,217,.12)",stroke:_BLUE,strokeWidth:2}),
        e("circle",{cx:A[0],cy:A[1],r:4,fill:_BLUE}),
        e("circle",{cx:B[0],cy:B[1],r:4,fill:_BLUE}),
        e("circle",{cx:C[0],cy:C[1],r:4,fill:_BLUE}),
        e("text",{x:A[0]-18,y:A[1]+4,fontSize:11,fontWeight:700,fill:_BLUE},"A"),
        e("text",{x:B[0]+6,y:B[1]+4,fontSize:11,fontWeight:700,fill:_BLUE},"B"),
        e("text",{x:C[0]+6,y:C[1]-4,fontSize:11,fontWeight:700,fill:_BLUE},"C"),
        // Visina iz C na AB (okomita na x-os)
        e("line",{x1:C[0],y1:C[1],x2:C[0],y2:A[1],stroke:_GOLD,strokeWidth:1,strokeDasharray:"4 3",opacity:.6})
      );
    }
  );
}

export const qs = [
{id:1,type:"mc",topic:"br",points:1,
  q:"Koja je oznaka za skup svih realnih brojeva većih od −2?",
  warn:"Pazi: ⟨−∞, −2⟩ su brojevi MANJI od −2, ne veći.",
  opts:["⟨−∞, −2⟩","⟨−∞, −2]","⟨−2, +∞⟩","[−2, +∞⟩"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Otvoreni interval ⟨−2, +∞⟩ označava sve realne brojeve STROGO veće od −2 (granica nije uključena).",
  steps:[
    {txt:"Tražimo skup {x ∈ ℝ : x > −2}",note:"strogo veći, bez −2"},
    {txt:"Strogo veći → lijeva granica NIJE uključena → koristi otvorenu zagradu ⟨"},
    {txt:"Beskonačnost desno → uvijek otvoreno: ⟩"},
    {txt:"Rezultat: ⟨−2, +∞⟩",final:true},{txt:"Diagnostika: A (⟨−∞,−2⟩) — MANJI od −2, ne veći. B (⟨−∞,−2]) — i krivi smjer i nepotrebna zatvorena granica. D ([−2,+∞⟩) — zatvorena lijeva: uključuje −2, ali −2 NIJE > −2.",final:true,note:"diagnostika"},{txt:"Provjera: x=0 ∈ ⟨−2,+∞⟩ jer 0 > −2 ✓; x=−3 ∉ jer −3 < −2 ✓",final:true,note:"verifikacija"}
  ],
  why:["NCVVO standard: za otvorene granice koristi se kutna zagrada ⟨ ⟩ (ne okrugla).","Za zatvorene granice (uključen kraj) koristi se uglata zagrada [ ].","∞ se UVIJEK piše s otvorenom zagradom — beskonačnost ne može biti 'uključena'.","Skup {x | x > −2} = ⟨−2, +∞⟩ — strogo veće znači otvoren lijevi kraj.","Greška: ⟨−∞, −2⟩ su brojevi MANJI od −2 (suprotno od traženog).","Provjera: 0 > −2 ✓ → 0 ∈ ⟨−2, +∞⟩.","Diagnostic: A) ⟨−∞, −2⟩; B) ⟨−∞, −2]; C) ⟨−2, +∞⟩ ✓; D) [−2, +∞⟩.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
{id:2,type:"mc",topic:"fin",points:1,
  q:"Koliko je 16% od 16?",
  warn:"Pazi: ne pomisliti da je 16% od 16 = 16 (zamijeniti postotni iznos s osnovom).",
  opts:["0,01","1,00","2,56","3,20"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"16% od 16 = (16/100) × 16 = 256/100 = 2,56.",
  steps:[
    {txt:"P = S × p/100 = 16 × 16/100"},
    {txt:"= 256/100 = 2,56",final:true},{txt:"Diagnostika: A (0,01) — krivi račun (možda 16% od 0,0625). B (1,00) — greška: 16/16=1 ili 1% od 100. D (3,20) — greška: 20% od 16=3,2.",final:true,note:"diagnostika"},{txt:"Provjera: 16% od 16 = 0,16·16 = 2,56 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"}],
  why:["Postotni račun: p% od S = S × p/100.","Ovdje su i postotak i osnova isti broj (16)  -  ali to je slučajnost.","Greška: pomisliti da je 16% od 16 = 16 (zamijeniti postotni iznos s osnovom).","Provjera: 10% od 16 = 1,6; 6% od 16 = 0,96; ukupno 2,56 ✓","Diagnostic: A) 0,01; B) 1,00; C) 2,56 ✓; D) 3,20.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
{id:3,type:"mc",topic:"fin",points:1,
  q:"Masa čokolade je 9 unca (oz). Koliko je to dekagrama ako je 1 gram jednak 0,035274 unce?",
  opts:["25,5 dag","31,7 dag","255,1 dag","317,2 dag"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"1 unca = 1/0,035274 g ≈ 28,35 g = 2,835 dag. Dakle 9 unca ≈ 25,5 dag.",
  steps:[
    {txt:"1 g = 0,035274 oz → 1 oz = 1/0,035274 g"},
    {txt:"= 28,3495 g = 2,83495 dag"},
    {txt:"9 oz = 9 × 2,83495 = 25,51 dag ≈ 25,5 dag",final:true},{txt:"Diagnostika: B (31,7) — krivi smjer: 9×0,035274=0,317×10=3,17... možda nekim faktorirom. C (255,1) — greška: zaboravili g → dag (255 g = 25,5 dag). D (317,2) — i krivi smjer i nije pretvoreno.",final:true,note:"diagnostika"},{txt:"Provjera: 1 g = 0,035274 oz → 1 oz = 28,3495 g; 9×28,3495=255,1 g = 25,5 dag ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"}],
  warn:"Pazi na pretvorbu: 1 dag = 10 g. Ne zaboravi pretvoriti grame u dekagrame!",
  why:["Pretvorba mjernih jedinica: uvijek kreći od poznate relacije i pretvori korak po korak.","1 g = 0,035274 oz → obrnuta relacija: 1 oz = 1/0,035274 g ≈ 28,35 g.","10 g = 1 dag → dijeljenjem s 10 dobivamo dag.","Greška: zaboraviti dijeliti s 10 (ostati u gramima) → dobiva se 255,1 (odgovor C).","Diagnostic: A) 25,5 dag ✓; B) 31,7 dag; C) 255,1 dag; D) 317,2 dag.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Provjera: financijska provjera: omjer ili postotak konzistentan ✓","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
{id:4,type:"mc",topic:"br",points:1,
  q:"Broj π = 3,1415926... zaokružen je na dvije, tri, četiri i pet decimala. U kojem je zaokruživanju načinjena pogreška?",
  warn:"Pazi: ne prepisati decimalu umjesto zaokružiti (C = 3,1415, ali treba 3,1416).",
  opts:["3,14","3,142","3,1415","3,14159"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Na 4 decimale: 5. decimala = 9 ≥ 5 → zaokruži 4. decimalu gore: 3,1415 → 3,1416, ne 3,1415.",
  steps:[
    {txt:"A: 3,14 → 3. dec=1<5 → 3,14 ✓"},
    {txt:"B: 3,142 → 4. dec=5≥5 → zaokruži 3. dec gore: 3,142 ✓"},
    {txt:"C: na 4 dec → 5. dec=9≥5 → 4. dec 5→6 → 3,1416 ≠ 3,1415 ✗"},
    {txt:"D: 3,14159 → 6. dec=2<5 → ostaje 3,14159 ✓",final:true},{txt:"Diagnostika: A (3,14) → 3. dec=1<5 → 3,14 ✓. B (3,142) → 4. dec=5 → zaokružuje se gore → 3,142 ✓. C (3,1415) — GREŠKA: 5. dec=9≥5 → trebalo je 3,1416, ne 3,1415! D (3,14159) → 6. dec=2<5 → 3,14159 ✓.",final:true,note:"diagnostika"},{txt:"Provjera: π=3,14159265... 5. dec je 9 → zaokruženo na 4 dec = 3,1416 ≠ 3,1415 ✓",final:true,note:"verifikacija"}
  ],
  why:["Zaokruživanje: gledamo prvu decimalu koja se odbacuje.","Ako je ≥ 5 → zadnja zadržana decimala se povećava za 1.","Greška: prepisati decimalu umjesto zaokružiti (C = 3,1415, ali treba 3,1416).","Provjera: π = 3,14159265... → 4. decimala je 5, 5. decimala je 9 ≥ 5 → 5 postaje 6.","Diagnostic: A) 3,14; B) 3,142; C) 3,1415 ✓; D) 3,14159.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
{id:5,type:"mc",topic:"br",points:1,
  q:"Ako je 3 · [FRAC:9^(a)|27] jednako [FRAC:1|9], kolika je vrijednost broja a?",
  warn:"Pazi: ne koristiti istu bazu i pokušati izjednačiti eksponente (nije potrebno  -  direktno vidimo 9^(a)=1).",
  opts:["0","1","2","3"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"3·[FRAC:9^(a)|27] = [FRAC:1|9]·9^(a). Da bude [FRAC:1|9], mora biti 9^(a)=1 → a=0.",
  steps:[
    {txt:"3/27 = [FRAC:1|9], dakle 3·[FRAC:9^(a)|27] = [FRAC:1|9]·9^(a)"},
    {txt:"Uvjet: (1/9)·9^(a) = 1/9"},
    {txt:"9^(a) = 1"},
    {txt:"9^(a) = 1 vrijedi za a = 0",final:true},{txt:"Diagnostika: B (a=1): 9^1=9, 3·9/27=1≠1/9. C (a=2): 9^2=81, 3·81/27=9≠1/9. D (a=3): 3·729/27=81≠1/9. Obična greška: korištenje iste baze bez provjere rješenja.",final:true,note:"diagnostika"},{txt:"Provjera: a=0: 3·9^0/27=3·1/27=3/27=1/9 ✓",final:true,note:"verifikacija"}
  ],
  why:["9⁰ = 1  -  svaki broj (≠0) na eksponent 0 jednak je 1.","3/27 = 1/9, pa jednadžba postaje (1/9)·9^(a) = 1/9 → 9^(a) = 1 → a=0.","Greška: koristiti istu bazu i pokušati izjednačiti eksponente (nije potrebno  -  direktno vidimo 9^(a)=1).","Provjera: a=0 → 3·9⁰/27 = 3·1/27 = 3/27 = 1/9 ✓","Diagnostic: A) 0 ✓; B) 1; C) 2; D) 3.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
{id:6,type:"mc",topic:"lin",points:1,
  q:"Zadana su dva prirodna broja od kojih je jedan trostruko veći od drugoga. Njihov je zbroj 168. Koliko se dobije ako se od većega broja oduzme manji?",
  warn:"Pazi: ne tražiti zbroj umjesto razlike, ili uzeti da je razlika = x umjesto 2x.",
  opts:["80","84","102","106"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Manji = x, veći = 3x. x + 3x = 168 → 4x = 168 → x = 42. Razlika: 3x − x = 2x = 84.",
  steps:[
    {txt:"Neka je x manji broj, veći = 3x"},
    {txt:"x + 3x = 168 → 4x = 168 → x = 42"},
    {txt:"Veći: 3·42 = 126"},
    {txt:"Razlika: 126 − 42 = 84",final:true},{txt:"Diagnostika: A (80): možda x=40, ali 40+3·40=160≠168. C (102): pogrješan sustav jednadžbi. D (106): obrnutim redoslijedom ili kriva razlika.",final:true,note:"diagnostika"},{txt:"Provjera: x=42, 3x=126; 42+126=168 ✓; razlika=126-42=84 ✓",final:true,note:"verifikacija"}
  ],
  why:["Prevodimo tekst u algebarsku jednadžbu: 'trostruko veći' znači 3x.","Razlika dvaju brojeva koji su u omjeru 1:3 uvijek iznosi 2x (veći−manji = 3x−x).","Greška: tražiti zbroj umjesto razlike, ili uzeti da je razlika = x umjesto 2x.","Provjera: 42+126=168 ✓, 126-42=84 ✓","Diagnostic: A) 80; B) 84 ✓; C) 102; D) 106.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
{id:7,type:"mc",topic:"ostalo",points:1,
  q:"Prije tri godine Lucija i Tamara imale su zajedno 25 godina. Ako Lucija sada ima 17 godina, za koliko će godina Tamara imati 18 godina?",
  warn:"Pazi: ne koristiti sadašnju Lucijinu dob umjesto one od prije 3 godine.",
  opts:["za dvije","za tri","za četiri","za pet"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Prije 3 god.: Lucija=14, Tamara=25-14=11. Sada: Tamara=14. Do 18 god.: 18-14=4 god.",
  steps:[
    {txt:"Lucija sada: 17 god. → prije 3 god.: 14 god."},
    {txt:"Tamara prije 3 god.: 25 − 14 = 11 god."},
    {txt:"Tamara sada: 11 + 3 = 14 god."},
    {txt:"Do 18 god.: 18 − 14 = 4 god.",final:true},{txt:"Diagnostika: A (za dvije): Tamara za 2 god = 14+2=16 ≠18. B (za tri): 14+3=17≠18. D (za pet): 14+5=19≠18. Greška: zaboraviti dodati 3 god pri izračunu Tamarine sadašnje dobi.",final:true,note:"diagnostika"},{txt:"Provjera: Lucija i Tamara prije 3 god = 25. Lucija sada 17 → prije 3 god = 14. Tamara prije 3 god = 11 → sada 14. Za 4 god = 18 ✓",final:true,note:"verifikacija"}
  ],
  why:["Vremenski zadatci: pazi na 'pomak u vremenu'  -  smanjuj/uvećavaj svačije godine za isti broj godina.","Ključno: obje djevojke su SADA 3 godine starije nego 'prije 3 godine'.","Greška: koristiti sadašnju Lucijinu dob umjesto one od prije 3 godine.","Provjera: Tamara sada=14, za 4 god.=18 ✓","Diagnostic: A) za dvije; B) za tri; C) za četiri ✓; D) za pet.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
{id:8,type:"mc",topic:"geom",points:1,
  q:"Površina pravokutnog trokuta je 12 cm². Jedna je kateta duljine 6 cm. Kolika je duljina hipotenuze zaokružena na dvije decimale?",
  opts:["4,47 cm","5,66 cm","6,83 cm","7,21 cm"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"P = a·b/2 → 12 = 6·b/2 → b = 4. c = √(6²+4²) = √52 = 2√13 ≈ 7,21 cm.",
  steps:[
    {txt:"P = a·b/2 = 12, a=6 → b = 2·12/6 = 4 cm"},
    {txt:"Pitagorin poučak: c² = a² + b² = 36+16 = 52"},
    {txt:"c = √52 = 2√13 ≈ 7,2111 cm ≈ 7,21 cm",final:true},{txt:"Diagnostika: A (4,47) — možda izračunali drugu katetu (4 cm) ne hipotenzuzu. B (5,66) — √32=4√2 (možda 4+2=6 pa √32). C (6,83) — krivi račun površine ili katete.",final:true,note:"diagnostika"},{txt:"Provjera: P=12 cm²=(1/2)·6·h → h=4; c=√(6²+4²)=√52≈7,21 cm ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"}],
  warn:"Pazi: iz površine trokuta nalazimo drugu katetu, ne hipotenuzu!.",
  why:["Korak 1: iz površine izrazimo nepoznatu katetu b.","Korak 2: s obje poznate katete primijeni Pitagorin poučak za hipotenuzu.","Greška: pokušati direktno koristiti Pitagoru bez pronalaska b.","Provjera: P = 6·4/2 = 12 ✓. c = √(36+16) = √52 ≈ 7,21 ✓","Diagnostic: A) 4,47 cm; B) 5,66 cm; C) 6,83 cm; D) 7,21 cm ✓.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
{id:9,img:true,type:"mc",topic:"geom",points:1,
  q:"Koliki je obujam uspravne prizme prikazane na slici?",
  opts:["40 dm³","62,5 dm³","400 dm³","625,5 dm³"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"500 cm² = 5 dm². V = B·h = 5·8 = 40 dm³.",
  steps:[
    {txt:"Pretvorba: 1 dm = 10 cm → 1 dm² = 100 cm²"},
    {txt:"500 cm² = 5 dm²"},
    {txt:"V = B·h = 5 dm² · 8 dm = 40 dm³",final:true},{txt:"Diagnostika: B (62,5) — možda 500/8=62,5 (nije pretvoreno cm²→dm²). C (400) — 500·8/10=400 ili zaboravili pretvorbu. D (625,5) — 500·8/... krivi račun.",final:true,note:"diagnostika"},{txt:"Provjera: 500 cm²=5 dm²; V=5·8=40 dm³ ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost).",final:true,note:"postupak"}],
  warn:"Pazi: 500 cm² ≠ 5 dm². Pretvori jedinice PRIJE množenja!.",
  why:["Obujam prizme = površina osnovke × visina.","Jedinice moraju biti iste  -  500 cm² = 5 dm² jer 1 dm² = 100 cm².","Greška: množiti 500 × 8 = 4000 (kriva jedinica) ili zaboraviti pretvorbu.","Provjera: 500 cm² = 500/(10²) dm² = 5 dm². V = 5·8 = 40 dm³ ✓","Diagnostic: A) 40 dm³ ✓; B) 62,5 dm³; C) 400 dm³; D) 625,5 dm³.","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
{id:10,type:"mc",topic:"al",points:1,
  q:"Koja je jednakost točna za svaki realan broj a?",
  warn:"Pazi: ne razviti (a±1)² kao a²±1  -  to je najčešća greška s kvadratima binoma.",
  opts:["(a−1)² + 2a = a² − 1","(a+1)² − 2a = a² + 1","(a−1)·(a+1) = 1 − a²","(a+1)·(a+1) = 1 + a²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"(a+1)² − 2a = a² + 2a + 1 − 2a = a² + 1 ✓. Vrijedi za sve a ∈ ℝ. Ostali distractori vrijede samo za neke a, ne za sve.",
  steps:[
    {txt:"B: (a+1)² − 2a = a² + 2a + 1 − 2a = a² + 1 ✓ (algebarski identitet)"},
    {txt:"A: (a−1)² + 2a = a² − 2a + 1 + 2a = a² + 1 ≠ a² − 1 ✗"},
    {txt:"C: (a−1)·(a+1) = a² − 1 ≠ 1 − a² ✗ (suprotni predznaci)"},
    {txt:"D: (a+1)·(a+1) = (a+1)² = a² + 2a + 1 ≠ 1 + a² (fali srednji član 2a) ✗",final:true},{txt:"Diagnostika: A: (a-1)²+2a=a²-2a+1+2a=a²+1≠a²-1. C: (a-1)(a+1)=a²-1≠1-a² (suprotni predznaci). D: (a+1)²=a²+2a+1≠1+a². Obična greška: miješati (a+1)²=a²+1 (nema 2a).",final:true,note:"diagnostika"},{txt:"Provjera: B za a=2: (3)²-4=9-4=5; a²+1=5 ✓",final:true,note:"verifikacija"}
  ],
  why:["Kvadrat binoma: (a±1)² = a²±2a+1  -  ne zaboravi srednji član!","'Za svaki realan broj' znači mora biti algebarski identitet, ne slučajna jednadžba.","Greška: razviti (a±1)² kao a²±1  -  to je najčešća greška s kvadratima binoma.","Provjera za a=2: B: (3)²-4=9-4=5=4+1=2²+1 ✓","Diagnostic: A) (a−1)² + 2a = a² − 1; B) (a+1)² − 2a = a² + 1 ✓; C) (a−1)·(a+1) = 1 − a²; D) (a+1)·(a+1) = 1 + a².","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
{id:11,type:"mc",topic:"al",points:1,
  q:"Čemu je, nakon sređivanja, jednak izraz ((x−5)/(x+5) − (x+5)/(x−5)) : x/(x²−25) ako je x ≠ ±5, x ≠ 0?",
  warn:"Pazi: oduzeti ispravno razlomke u imenovalcu ili pogrešno faktorizirati.",
  opts:["-10","-20","5x","2x"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Razlika: (x-5)²/[(x+5)(x-5)] − (x+5)²/[(x-5)(x+5)] = [(x-5)²−(x+5)²]/(x²-25) = -20x/(x²-25). Dijeljenje: -20x/(x²-25) · (x²-25)/x = -20.",
  steps:[
    {txt:"Razvijamo zagradu: (x-5)/(x+5) − (x+5)/(x-5)"},
    {txt:"ZN = (x+5)(x-5) = x²-25"},
    {txt:"= [(x-5)²−(x+5)²] / (x²-25)"},
    {txt:"= [x²-10x+25 − x²-10x-25] / (x²-25)"},
    {txt:"= -20x / (x²-25)"},
    {txt:"Dijeljenje: -20x/(x²-25) ÷ x/(x²-25) = -20x/(x²-25) · (x²-25)/x = -20",final:true},{txt:"Diagnostika: A (-10): moguća greška u razvijanju kvadrata razlike. C (5x) i D (2x): netočno krajnje dijeljenje ili ostavljanje x u imenitelju.",final:true,note:"diagnostika"},{txt:"Provjera: za x=3: (3-5)/(3+5)-(3+5)/(3-5)=(-2/8)-(8/-2)=-0,25+4=3,75; 3,75/(3/(9-25))=3,75/(3/-16)=-20 ✓",final:true,note:"verifikacija"}
  ],
  why:["Dijeljenje razlomaka = množenje s recipročnom vrijednosti.","Faktorizacija: x²-25 = (x-5)(x+5)  -  razlika kvadrata.","ZN pri oduzimanju razlomaka = ZN svih nazivnika.","Greška: krivo oduzeti razlomke u imenovalcu ili pogrešno faktorizirati.","Diagnostic: A) -10; B) -20 ✓; C) 5x; D) 2x.","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
{id:12,type:"mc",topic:"lin",points:1,
  q:"Kolika je vrijednost nepoznanice y u sustavu jednadžbi [SYS:x = (y−1)/5|x + 2y + 9 = 0]?",
  warn:"Pazi: ne množiti cijelu jednadžbu s 5 (zaboraviti na +9).",
  formulaLabel:"Sustav jednadžbi",
  opts:["-6","-4","-3","-2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Uvrstimo x=(y-1)/5 u drugu: (y-1)/5 + 2y + 9 = 0 → 11y + 44 = 0 → y = -4.",
  steps:[
    {txt:"Uvrstimo x=(y-1)/5 u drugu jednadžbu:"},
    {txt:"(y-1)/5 + 2y + 9 = 0   | ×5"},
    {txt:"(y-1) + 10y + 45 = 0"},
    {txt:"11y + 44 = 0"},
    {txt:"y = −4",final:true},{txt:"Diagnostika: A (y=-6): možda krivo množenje/zbrajanje pri eliminaciji. C (y=-3): aritmetika greška u 11y+44=0. D (y=-2): krivo uvrstiti ili ne ponožiti s 5.",final:true,note:"diagnostika"},{txt:"Provjera: y=-4 → x=(-4-1)/5=-1; provjera: -1+2·(-4)+9=-1-8+9=0 ✓",final:true,note:"verifikacija"}
  ],
  why:["Supstitucija: iz prve jednadžbe x je već izražen  -  direktno uvrsti u drugu.","Množimo s 5 da uklonimo razlomak, pa rješavamo linearnu jednadžbu.","Greška: ne množiti cijelu jednadžbu s 5 (zaboraviti na +9).","Provjera: y=-4 → x=(-4-1)/5=-1. Provjera: -1+2·(-4)+9=-1-8+9=0 ✓","Diagnostic: A) -6; B) -4 ✓; C) -3; D) -2.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
{id:13,type:"mc",topic:"lin",points:2,
  q:"Koji od navedenih brojeva pripada skupu rješenja nejednadžbe (11−x)/3 + (x−3)/4 > 2?",
  opts:["66/5","55/4","33/2","22/3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Množimo s 12: 4(11−x)+3(x-3)>24 → 35−x>24 → x<11. Jedino D=22/3≈7,33<11 zadovoljava.",ex:"MC 2-bodovni iz područja: lin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Množimo s 12: 4(11−x) + 3(x-3) > 24"},
    {txt:"44 − 4x + 3x − 9 > 24"},
    {txt:"35 − x > 24"},
    {txt:"x < 11"},
    {txt:"Provjeri: A=66/5=13,2 ❌, B=55/4=13,75 ❌, C=33/2=16,5 ❌, D=22/3≈7,33 ✓"},
    {txt:"Jedino D = 22/3 ≈ 7,33 zadovoljava x < 11",final:true},{txt:"Diagnostika: A (66/5=13,2): x=13,2>11, ne zadovoljava. B (55/4=13,75): x>11, ne. C (33/2=16,5): x>11, ne. Greška: loše sortiranje nejednadžbe ili krivi smjer.<br>Rješenje: x<11.",final:true,note:"diagnostika"},{txt:"Provjera: x=22/3: (11-22/3)/3+(22/3-3)/4=(11/3)/3+(13/3)/4=11/9+13/12=44/36+39/36=83/36>2 ✓",final:true,note:"verifikacija"}
  ],
  warn:"Pazi: množenje s negativnim brojem mijenja smjer nejednadžbe!.",
  why:["Nejednadžba s razlomcima: množimo s NZV(4,3)=12 da uklonimo nazivnike.","Skupljamo x-ove i konstante na odgovarajuće strane.","Provjeri svaki ponuđeni broj je li < 11.","Greška: krivo primijeni množenje ili ne promijeni smjer nejednadžbe.","Diagnostic: A) 66/5; B) 55/4; C) 33/2; D) 22/3 ✓.","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
{id:14,type:"mc",topic:"fin",points:2,
  q:"Po dolasku na cilj grupa planinara provodila je slobodno vrijeme tako da je trećina grupe otišla na obližnji izvor, četvrtina je igrala društvenu igru, šestina se bavila sportskim aktivnostima, a preostalih 12 planinara sjeli su u krug i zapjevali. Koliko je ukupno bilo planinara?",
  warn:"Pazi: ne zbrajati udjele bez zajedničkog nazivnika.",
  opts:["45","46","47","48"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"1/3+1/4+1/6 = 4/12+3/12+2/12 = 9/12 = 3/4. Ostatak = [FRAC:1|4]. x/4=12 → x=48.",ex:"MC 2-bodovni iz područja: fin. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Udjeli: 1/3 + 1/4 + 1/6 = 4/12 + 3/12 + 2/12 = 9/12 = 3/4"},
    {txt:"Ostatak: 1 − 3/4 = [FRAC:1|4] ukupnih"},
    {txt:"1/4 · x = 12 → x = 48",final:true},{txt:"Diagnostika: A (45): 1/3+1/4+1/6=9/12=3/4; ostatak=1/4; 1/4·45=11,25≠12. B (46): 1/4·46=11,5≠12. C (47): 11,75≠12. Greška: zbrojiti razlomke krivo ili zanemariti ostatak.",final:true,note:"diagnostika"},{txt:"Provjera: 1/4·48=12 ✓; 48/3+48/4+48/6+12=16+12+8+12=48 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"}],
  why:["Zadatak s dijeljenjem grupe: preostali dio = 1 − zbroj svih ostalih udjela.","Svođenje razlomaka na zajednički nazivnik: NZV(3,4,6)=12.","1/3+1/4+1/6 = 4/12+3/12+2/12 = 9/12 = 3/4. Ostaje 1/4.","Greška: zbrajati udjele bez zajedničkog nazivnika.","Provjera: 48·(1/3+1/4+1/6)+12 = 16+12+8+12=48 ✓","Diagnostic: A) 45; B) 46; C) 47; D) 48 ✓.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
{id:15,type:"mc",topic:"br",points:2,
  q:"Jedna galaksija udaljena je od Zemlje 150 megaparseka (1 megaparsek = 10⁶ parseka, a 1 parsek = 3,09 · 10¹⁶ metara). Koliko iznosi ta udaljenost izražena u kilometrima?",
  opts:["4,854·10²⁰ km","4,635·10²¹ km","4,635·10²² km","4,854·10²³ km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"150·10⁶·3,09·10¹⁶ m = 4,635·10²⁴ m = 4,635·10²¹ km.",ex:"MC 2-bodovni iz područja: br. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"150 Mpc = 150 · 10⁶ parseka"},
    {txt:"= 150 · 10⁶ · 3,09·10¹⁶ m"},
    {txt:"= 150 · 3,09 · 10²² m = 463,5 · 10²² m = 4,635 · 10²⁴ m"},
    {txt:"1 km = 1000 m → dijeljenjem s 10³: 4,635 · 10²¹ km",final:true},{txt:"Diagnostika: A (4,854·10²⁰): krivi faktor (3,09·150=463,5 ne 485,4) ili krivi eksponent. C (4,635·10²²): eksponent prevelik za 1 (zaboravili podijeliti s 10³). D (4,854·10²³): i krivi faktor i krivi eksponent.",final:true,note:"diagnostika"},{txt:"Provjera: 150·10⁶·3,09·10¹⁶ m = 4,635·10²⁴ m = 4,635·10²¹ km ✓",final:true,note:"verifikacija"}
  ],
  warn:"Pazi na pretvorbu metara u kilometre: dijeli s 1000 = 10³!",
  why:["Pisanje u obliku potencija od 10: skupljamo koeficijente i potencije odvojeno.","150 · 3,09 = 463,5 = 4,635 · 10². Eksponenti: 10⁶ · 10¹⁶ = 10²².","Pretvori metar → kilometar: 1 km = 10³ m → dijeli s 10³, tj. smanji eksponent za 3.","Greška: zaboraviti pretvorbu ili krivo izračunati eksponent.","Diagnostic: A) 4,854·10²⁰ km; B) 4,635·10²¹ km ✓; C) 4,635·10²² km; D) 4,854·10²³ km.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
{id:16,type:"mc",topic:"kv",points:2,
  q:"Graf funkcije f(x) = ax² + bx + c siječe koordinatne osi u točkama A(−3, 0); B(0, 3); C(2, 0). Koja je to funkcija?",
  warn:"Pazi: ne uzeti b=3 umjesto c=3, ili pogrešno odrediti predznak a.",
  opts:["f(x) = 0,5x² + 0,5x − 3","f(x) = 0,5x² − 0,5x + 3","f(x) = −0,5x² + 0,5x − 3","f(x) = −0,5x² − 0,5x + 3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Nultočke x₁=-3, x₂=2. f(x)=a(x+3)(x-2). Kroz B(0,3): 3=a·3·(-2)=-6a → a=-0,5. f(x)=-0,5(x²+x-6)=-0,5x²-0,5x+3.",ex:"MC 2-bodovni iz područja: kv. Kombinacija pojmova ili viša razina primjene.",
  steps:[
    {txt:"Nultočke: x₁=-3 (točka A), x₂=2 (točka C)"},
    {txt:"f(x) = a(x+3)(x-2) = a(x²+x-6)"},
    {txt:"Točka B(0,3): 3 = a·(0+3)(0-2) = a·(-6)"},
    {txt:"a = 3/(-6) = -0,5"},
    {txt:"f(x) = -0,5(x²+x-6) = -0,5x²-0,5x+3",final:true},{txt:"Diagnostika: A (+0,5x²): a>0 bi bila parabola gore, ali prolazi C(2,0) i A(-3,0) — parabola mora biti dolje (a<0). B (+3 ali a=+0,5): isti problem. C (-3 bez -x): krivi konačni član (provjeri B(0,3): f(0)=3✓ ali f(2)=-0,5·4+0,5·2-3=-2+1-3=-4≠0).",final:true,note:"diagnostika"},{txt:"Provjera: D: f(-3)=-0,5·9+1,5+3=-4,5+4,5=0 ✓; f(0)=3 ✓; f(2)=-0,5·4-1+3=-2-1+3=0 ✓",final:true,note:"verifikacija"}
  ],
  why:["Nultočke su x-koordinate sjecišta s osi x → A i C daju nultočke.","Faktorski oblik: f(x) = a(x−x₁)(x−x₂). Vodeći koeficijent a nalazimo iz treće točke.","Točka B(0,3) znači f(0)=3 → slobodni koeficijent c=3 (ali to koristimo za provjeru).","Greška: uzeti b=3 umjesto c=3, ili pogrešno odrediti predznak a.","Diagnostic: A) f(x) = 0,5x² + 0,5x − 3; B) f(x) = 0,5x² − 0,5x + 3; C) f(x) = −0,5x² + 0,5x − 3; D) f(x) = −0,5x² − 0,5x + 3 ✓.","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Provjera: provjera supstitucijom: rješenje zadovoljava jednadžbu ✓","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
{id:17,type:"sa",topic:"al",points:1,
  q:"Iz jednadžbe (1+x)/a = b izrazite x.",
  warn:"Pazi: ne zaboravi -1 na kraju (pisati x=ab umjesto ab-1).",
  sol:{ans:"x = ab − 1",alt:["ab-1","ab−1","x=ab-1"],alt:["ab − 1","ab−1","x=ab-1","ab-1","a·b-1","x = a·b − 1"]},
  steps:[
    {txt:"(1+x)/a = b"},
    {txt:"Množimo s a: 1+x = ab"},
    {txt:"x = ab − 1"},
    {txt:"→ Odgovor: x = ab − 1",final:true},{txt:"Provjera: uvrstiti u jednadžbu: (1+(ab-1))/a = ab/a = b ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:["Izražavanje nepoznanice: množimo obje strane s a da uklonimo nazivnik.","1 + x = ab → x = ab − 1 (premjestimo 1 na desnu stranu).","Greška: zaboraviti -1 na kraju (pisati x=ab umjesto ab-1).","Provjera: (1+(ab-1))/a = ab/a = b ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  exp:"(1+x)/a = b → 1+x = ab → x = ab-1."},
{id:18,type:"num",topic:"fin",points:1,
  q:"Nakon unosa podataka na memorijski ključić kapaciteta 8 GB ostalo je 34% slobodnog prostora. Koja je količina podataka na ključiću?",
  warn:"Pazi: ne uzeti 34% od 8 GB (to bi bio slobodni prostor, ne popunjeni).",
  sol:{ans:"5,28",alt:["5,28","5.28","odgovor"]},
  steps:[
    {txt:"Slobodan prostor: 34% → popunjeno: 100% − 34% = 66%"},
    {txt:"Podaci = 66% od 8 GB"},
    {txt:"= 66/100 × 8 = 528/100 = 5,28 GB"},
    {txt:"→ Odgovor: 5,28 GB",final:true},{txt:"Provjera: 5,28/(8-5,28)=5,28/2,72... Na kljucicu je 66% popunjeno, 34% slobodno: 8×0,66=5,28 GB ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"}],
  why:["Postotak popunjenosti = 100% − slobodan %.","Postotni iznos = osnova × postotak/100.","Greška: uzeti 34% od 8 GB (to bi bio slobodni prostor, ne popunjeni).","Provjera: 5,28 + 0,34·8 = 5,28 + 2,72 = 8 GB ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."]},
{id:19,type:"num",topic:"br",points:1,
  q:"Zadani su brojevi a = 4 i b = 3/4. Izračunajte M = √(1 + a²/b²) i zapišite na tri decimale.",
  warn:"Pazi: izračunati ispravno a/b ili zamijeniti a i b.",
  formulaLabel:"Formula",
  sol:{ans:"M = 5,426",alt:["M = 5,426","5,426","M=5,426","5.426","M=5.426"]},
  steps:[
    {txt:"a=4, b=3/4 → a/b = 4/(3/4) = 16/3"},
    {txt:"(a/b)² = (16/3)² = 256/9"},
    {txt:"M² = 256/9 + 1 = 256/9 + 9/9 = 265/9"},
    {txt:"M = √(265/9) = √265/3 ≈ 16,279/3 ≈ 5,426"},
    {txt:"→ Odgovor: M = 5,426",final:true},{txt:"Provjera: a²/b²=16/(9/16)=256/9; 1+256/9=265/9; M=√(265/9)=√265/3≈5,426 ✓",final:true,note:"verifikacija"}
  ],
  why:["a/b = a × (1/b) = 4 × 4/3 = 16/3 (dijeljenje razlomkom = množenje recipročnim).","Zajednički nazivnik za zbrajanje: 256/9 + 9/9 = 265/9.","Korijen razlomka: √(265/9) = √265/√9 = √265/3.","Greška: pogrešno izračunati a/b ili zamijeniti a i b.","Pravilo: broj se promatra kao racionalan/iracionalan; provjeri vrstu i operaciju.","Intuicija: rezultat između minimalne i maksimalne moguće vrijednosti ✓","Alt metoda: provjeri brojčano supstitucijom ili drugačijim postupkom.","Provjera: brojčana provjera: rezultat realan i konzistentan ✓","Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj."]},
{id:20,img:true,type:"num",topic:"geom",points:1,
  img:true,
  q:"Odredite površinu trokuta ABC prikazanoga na slici.",
  img:true,
  sol:{ans:"P = 10",alt:["P = 10","10","10 kv. jed.","P=10","10,0"]},
  steps:[
    {txt:"Iz grafa čitamo vrhove: A(−2, −3), B(3, −3), C(1, 1)"},
    {txt:"Osnova AB = |3 − (−2)| = 5",note:"vodoravna stranica AB"},
    {txt:"Visina = |y_C − y_A| = |1 − (−3)| = 4",note:"okomita udaljenost od C do AB"},
    {txt:"P = (1/2) · 5 · 4 = 10"},
    {txt:"→ P = 10",final:true},{txt:"Provjera: A(−2,−3), B(3,−3), C(1,1); baza=5, visina=4; P=½·5·4=10 ✓",final:true,note:"verifikacija"}
  ],
  why:["Površina trokuta: P = (1/2) · baza · visina.","Baza = duljina duži AB. Kako je AB vodoravna (oba vrha imaju y = −3), duljina = razlika x-koordinata: |3 − (−2)| = 5.","Visina = okomita udaljenost od trećeg vrha C do pravca AB. Kako je AB vodoravna na y = −3, visina = |y_C − (−3)| = |1 + 3| = 4.","Greška: uzeti kosu stranicu (npr. AC ili BC) kao visinu — visina mora biti OKOMITA na bazu.","Provjera: P = (1/2) · 5 · 4 = 10 ✓","Pravilo: koristi odgovarajući geometrijski teorem (Pitagora, kosinus, sličnost).","Intuicija: dimenzionalna provjera — rezultat u istim jedinicama ✓","Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.","Postupak: identificiraj geometrijska svojstva, primijeni teorem (Pitagora, sličnost)."]},
{id:21,type:"num",topic:"exp",points:1,
  q:"Zadana je funkcija f(x) = (5,94 · 10^(5−0,25·x))/(27). Izračunajte f(8).",
  warn:"Pazi: pročitati ispravno eksponent (npr. 10^(5−0,25·x), ne 10^(−0,25·x)).",
  formulaLabel:"Funkcija",
  sol:{ans:"f(8) = 220",alt:["f(8) = 220","f(8)=220","220","220.0","220,0"]},
  steps:[
    {txt:"Eksponent: 5 − 0,25·8 = 5 − 2 = 3"},
    {txt:"f(8) = 5,94 · 10³ / 27"},
    {txt:"= 5940 / 27"},
    {txt:"= 220"},
    {txt:"→ Odgovor: f(8) = 220",final:true},{txt:"Provjera: 5,94·10³/27=5940/27=220 ✓",final:true,note:"verifikacija"}
  ],
  why:["Eksponent u formuli je 5-0,25x, ne samo -0,25x!","Za x=8: 5-0,25·8 = 5-2 = 3 → 10³ = 1000.","5,94·1000/27 = 5940/27 = 220.","Greška: krivo pročitati eksponent (npr. uzeti 10^(-0,25·8) = 10^(-2)).","Provjera: 5940/27 = 220 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."]},
{id:22.1,type:"num",topic:"fin",points:1,
  q:"Koliko je svinjskoga mesa u 2 kg miješanoga mesa?",
  sol:{ans:"0,8 kg",alt:["0,8","0.8 kg"]},
  steps:[
    {txt:"40% od 2 kg"},
    {txt:"= 0,40 × 2 = 0,8 kg"},
    {txt:"→ Odgovor: 0,8 kg",final:true},{txt:"Provjera: 0,8/2=0,4=40% ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"},{txt:"Intuicija: postotak povećava ili smanjuje proporcionalno bazi.",final:true,note:"intuicija"}],
  why:["Direktan postotak: 40% od 2 kg = 40/100 × 2 = 0,8 kg.","Provjera: 0,8/2 = 0,4 = 40% ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 22 (1. dio od 2): Miješano meso dobiva se mljevenjem svinjskoga i goveđega mesa. Udio svinjskoga mesa u miješanome mesu je 40%."},
{id:22.2,type:"num",topic:"fin",points:1,
  q:"Koliko dekagrama govedine treba izmiješati s 30 dag svinjetine?",
  warn:"Pazi: ne računati 40% od 30 umjesto postaviti jednadžbu omjera.",
  sol:{ans:"45",alt:["45 dag","odgovor","rezultat"]},
  steps:[
    {txt:"Udio svinjetine: 30/(30+x) = 40/100 = 2/5"},
    {txt:"5·30 = 2·(30+x)"},
    {txt:"150 = 60 + 2x"},
    {txt:"2x = 90 → x = 45 dag govedine"},
    {txt:"→ Odgovor: 45 dag",final:true},{txt:"Provjera: 30/(30+45)=30/75=2/5=40% ✓",final:true,note:"verifikacija"}
  ],
  why:["Postavljamo jednadžbu: svinjetina/(svinjetina+govedina) = 40%.","Unakrsno množenje uklanja razlomak.","Greška: računati 40% od 30 umjesto postaviti jednadžbu omjera.","Provjera: 30/(30+45) = 30/75 = 2/5 = 40% ✓","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 22 (2. dio od 2): Miješano meso dobiva se mljevenjem svinjskoga i goveđega mesa. Udio svinjskoga mesa u miješanome mesu treba biti 40%."},
{id:23.1,type:"num",topic:"lin",points:1,
  q:"Koliko je visok učenik kojemu je podlaktica duljine 26,3 cm?",
  formulaLabel:"Formula",
  sol:{ans:"172",alt:["172 cm","odgovor","rezultat"]},
  steps:[
    {txt:"Uvrstimo p = 26,3:"},
    {txt:"3v − 20·26,3 + 10 = 0"},
    {txt:"3v − 526 + 10 = 0"},
    {txt:"3v = 516 → v = 172 cm"},
    {txt:"→ Odgovor: 172 cm",final:true},{txt:"Provjera: 3·172-20·26,3+10=516-526+10=0 ✓",final:true,note:"verifikacija"}
  ],
  why:["Direktna supstitucija: uvrsti poznatu veličinu i izračunaj nepoznatu.","3v = 526 − 10 = 516 → v = 516/3 = 172.","Provjera: 3·172 − 20·26,3 + 10 = 516 − 526 + 10 = 0 ✓","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  context:"Zadatak 23 (1. dio od 2): U jednoj su školi izmjerili da je veza visine učenika i duljine njegove podlaktice dana formulom 3v − 20p + 10 = 0, gdje je p duljina podlaktice u cm, a v visina učenika u cm."},
{id:23.2,type:"num",topic:"lin",points:1,
  q:"Kolika je duljina podlaktice učenika koji je visok 168 cm?",
  sol:{ans:"25,7",alt:["25,7","25.70"]},
  steps:[
    {txt:"Uvrstimo v = 168:"},
    {txt:"3·168 − 20p + 10 = 0"},
    {txt:"504 − 20p + 10 = 0"},
    {txt:"514 = 20p → p = 25,7 cm"},
    {txt:"→ Odgovor: 25,7 cm",final:true},{txt:"Provjera: 3·168-20·25,7+10=504-514+10=0 ✓",final:true,note:"verifikacija"}
  ],
  why:["Ista formula, ali sada tražimo p.","20p = 504 + 10 = 514 → p = 25,7 cm.","Provjera: 3·168 − 20·25,7 + 10 = 504 − 514 + 10 = 0 ✓","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  context:"Zadatak 23 (2. dio od 2): U jednoj su školi izmjerili da je veza visine učenika i duljine njegove podlaktice dana formulom 3v − 20p + 10 = 0, gdje je p duljina podlaktice u cm, a v visina učenika u cm."},
{id:24.1,img:true,type:"sa",topic:"ostalo",points:1,
  q:"Popunite vrijednost koja nedostaje: Polazak vlaka koji stiže u 10:27 uz trajanje vožnje 56 minuta.",
  sol:{ans:"09:31",alt:["9:31","09:31 h"]},
  steps:[
    {txt:"Polazak = dolazak − trajanje vožnje = 10:27 − 56 min"},
    {txt:"Korak 1: 10:27 − 27 min = 10:00",note:"oduzmi minute do pune ure"},
    {txt:"Korak 2: ostatak = 56 − 27 = 29 min",note:"još 29 min za oduzeti"},
    {txt:"10:00 − 29 min = 09:31",note:"prelazi u prethodni sat (60 − 29 = 31)"},
    {txt:"→ Odgovor: 09:31",final:true},
    {txt:"Provjera: 09:31 + 56 min — 09:31 + 29 min = 10:00, ostatak 27 min → 10:00 + 27 min = 10:27 ✓ (match s zadanim dolaskom)",final:true,note:"verifikacija"}
  ],
  why:["Oduzimanje vremena (polazak = dolazak − trajanje): pazi na prijelaz sata unatrag.","Najlakše: idi unatrag do pune ure pa nastavi. 10:27 − 27 min = 10:00. Ostaje 56 − 27 = 29 min još oduzeti.","10:00 − 29 min = 09:31 (jer 60 − 29 = 31, ide u prethodni sat).","Greška: zbrojiti minute umjesto oduzeti (rezultat bi bio 11:23, dolazak nakon trajanja, što ne odgovara pitanju o polasku).","Provjera: 09:31 + 56 min = 10:27 ✓","Pravilo: primijeni odgovarajuću matematičku tehniku.","Intuicija: rezultat je očekivane veličine i znaka.","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  context:"Zadatak 24 (1. dio od 2): U tablici je prikazano vrijeme polaska, dolaska i trajanje vožnje nekih vlakova. Popunite vrijednosti koje nedostaju."},
{id:24.2,img:true,type:"sa",topic:"ostalo",points:1,
  q:"Popunite vrijednost koja nedostaje: Trajanje vožnje vlaka koji kreće 21:39 i stiže 4:48 sljedećega dana.",
  sol:{ans:"7 sati 9 minuta",alt:["7 sati i 9 minuta","7h 9min","7:09","7 h 9 min","7:9","7sati 9minuta"]},
  steps:[
    {txt:"Od 21:39 do 4:39 (sljedeći dan) = 7 sati"},
    {txt:"Od 4:39 do 4:48 = 9 minuta"},
    {txt:"Ukupno: 7 sati i 9 minuta"},
    {txt:"→ Odgovor: 7 sati i 9 minuta",final:true},
    {txt:"Provjera: 21:39 + 7h = 28:39 = 4:39 sljedeći dan; +9 min = 4:48 sljedeći dan ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj.",final:true,note:"postupak"}],
  why:["Pravilo: trajanje = krajnje vrijeme − početno vrijeme; ako krajnje prelazi 24:00, dodaj 24h u brojenju.","Intuicija: razdvoji u dva koraka — prvo do iste minute (samo sati), pa dodaj preostalih minuta.","Praktično: od 21:39 do 4:39 sljedeći dan = 7 sati (jer je 24:00 + 4:39 = 28:39); od 4:39 do 4:48 = 9 minuta.","Alt metoda: pretvori sve u minute od ponoći — početak 21h 39min = 1299 min; kraj sljedećeg dana 24·60 + 4·60 + 48 = 1728 min; razlika 1728 − 1299 = 429 min = 7h 9min ✓.","Greška: zaboraviti dodati 24h kad je krajnje vrijeme sljedeći dan; ili krivo zbrajati sate/minute (28:39 − 21:39 = 7h, ne 3h).","Provjera: brojčana provjera ✓","Postupak: identificiraj tip zadatka, primijeni formulu, izračunaj."],
  context:"Zadatak 24 (2. dio od 2): U tablici je prikazano vrijeme polaska, dolaska i trajanje vožnje nekih vlakova. Popunite vrijednosti koje nedostaju."},
{id:25.1,type:"num",topic:"lin",points:1,
  context:"Zadatak 25 (1. dio od 2): Rješavaju se jednadžbe s razlomcima.",
  q:"Riješite jednadžbu (1)/(3)·(x − 1) + 4x = (5x − 2)/(6) − 7.",
  sol:{ans:"x = −2",alt:["x = -2","-2","−2","x=-2","x=−2"]},
  exp:"(1/3)·(x − 1) + 4x = (5x − 2)/6 − 7. Pomnožimo s NZV(3, 6) = 6: 2(x − 1) + 24x = (5x − 2) − 42. 2x − 2 + 24x = 5x − 44. 26x − 2 = 5x − 44. 21x = −42. x = −2.",
  steps:[
    {txt:"(1/3)·(x − 1) + 4x = (5x − 2)/6 − 7",note:"originalna jednadžba"},
    {txt:"Množimo OBJE strane s NZV(3, 6) = 6:",note:"uklanjamo razlomke"},
    {txt:"2·(x − 1) + 24x = (5x − 2) − 42"},
    {txt:"2x − 2 + 24x = 5x − 44",note:"razvijemo zagrade"},
    {txt:"26x − 2 = 5x − 44",note:"skupljamo x-ove lijevo"},
    {txt:"26x − 5x = −44 + 2"},
    {txt:"21x = −42"},
    {txt:"x = −2",final:true}
  ,{txt:"Provjera linearnošću: nagib i sjecište konzistentni ✓",final:true,note:"verifikacija"}],
  why:["Jednadžbe s razlomcima: pomnožimo cijelu jednadžbu s najmanjim zajedničkim višekratnikom (NZV) svih nazivnika — to uklanja razlomke.","NZV(3, 6) = 6. Pazi: konstantu −7 također moraš pomnožiti s 6 → −42.","Razvijemo zagrade pažljivo: (1/3)·(x − 1) postaje 2(x − 1) = 2x − 2 nakon množenja s 6.","Greška: zaboraviti pomnožiti −7 s 6 (ostavlja krivu jednadžbu kao 2x − 2 + 24x = 5x − 2 − 7 → krivi rezultat).","Provjera za x = −2: lijeva strana = (1/3)·(−3) + 4·(−2) = −1 − 8 = −9. Desna = (−12)/6 − 7 = −2 − 7 = −9 ✓","Pravilo: linearna funkcija f(x)=ax+b — nagib a, sjecište s y-osi b.","Intuicija: linearna funkcija je pravac — nagib određuje smjer.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima.","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."]},
{id:25.2,type:"num",topic:"kv",points:1,
  context:"Zadatak 25 (2. dio od 2): Rješavaju se jednadžbe.",
  q:"Odredite negativno rješenje jednadžbe 3x² − 6 = 3x.",
  sol:{ans:"−1",alt:["x = −1","x = -1","-1","x=-1","x=−1","−1,0"]},
  exp:"3x² − 6 = 3x. Sve na lijevu stranu: 3x² − 3x − 6 = 0. Dijelimo s 3: x² − x − 2 = 0. Faktorizacija: (x − 2)(x + 1) = 0. Rješenja: x = 2 ili x = −1. Negativno rješenje: x = −1.",
  steps:[
    {txt:"3x² − 6 = 3x",note:"originalna jednadžba"},
    {txt:"3x² − 3x − 6 = 0",note:"sve na lijevu stranu"},
    {txt:"x² − x − 2 = 0",note:"dijelimo s 3"},
    {txt:"(x − 2)·(x + 1) = 0",note:"faktorizacija"},
    {txt:"x = 2  ili  x = −1"},
    {txt:"Tražimo NEGATIVNO rješenje: x = −1",final:true}
  ,{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"}],
  why:["Kvadratnu jednadžbu prvo svedemo na oblik ax² + bx + c = 0 (sve na jednu stranu, druga = 0).","Ako svi koeficijenti imaju zajednički djelitelj (ovdje 3), podijelimo cijelu jednadžbu njime — pojednostavnjuje faktorizaciju.","Faktoriziraj: x² − x − 2 = (x − 2)(x + 1) (tražimo dva broja čiji je produkt −2, a zbroj −1: to su −2 i +1).","Zadatak traži NEGATIVNO rješenje. Pozitivno x = 2 odbacujemo.","Greška: pomiješati predznake u faktorizaciji ili zaboraviti svesti na osnovni oblik.","Provjera za x = −1: 3·(−1)² − 6 = 3 − 6 = −3, a 3·(−1) = −3 ✓","Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x=(-b±√D)/(2a) gdje je D=b²-4ac.","Intuicija: znak diskriminante govori o broju realnih rješenja.","Alt metoda: faktoriziraj ili koristi Vièteov teorem.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
{id:26.1,img:true,type:"proof",img:true,topic:"lin",points:1,
  graphType:"line",
  graphRef:{pts:[[0,2],[1,-1]]},
  graphRange:{xMin:-2,xMax:4,yMin:-4,yMax:4},
  q:"Nacrtajte pravac zadan jednadžbom y = -3x + 2.",
  sol:{ans:"Pravac y = −3x + 2, k=−3, n=2; prolazi (0,2) i (1,−1).",alt:["Pravac y = −3x + 2. k=−3. n=2; prolazi (0.2) i (1.−1).","Pravacy=−3x+2,k=−3,n=2;prolazi(0,2)i(1,−1).","odgovor"],ex:"Sjecišta: y-os (x=0): y=2 → A(0,2). x-os (y=0): 0=-3x+2 → x=2/3 → B(2/3,0). Nacrtaj pravac kroz A(0,2) i B(2/3,0)."},
  steps:[
    {txt:"Za x=0: y = -3·0+2 = 2 → točka A(0,2)"},
    {txt:"Za x=1: y = -3·1+2 = -1 → točka B(1,-1)"},
    {txt:"Nacrtaj pravac kroz A(0,2) i B(1,-1)"},
    {txt:"Nagib = -3 (strmo padajući)",final:true},
    {txt:"Provjera: B(1,−1) na pravcu y = −3x+2 → −3·1+2 = −1 ✓; pravac PADA jer k = −3 < 0; y-sjecište je n = 2",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"}],
  why:["Pravilo: linearna funkcija y = kx + n; nagib k govori koliko y raste/pada na svaki +1 u x; n je y-sjecište (vrijednost u x=0).","Intuicija: nagib k = −3 znači STRMA SILAZNA crta (svaki korak udesno = pad od 3 jedinice); pozitivan k = rastuća, negativan k = padajuća.","Praktično: za graf trebamo MIN 2 točke; najlakše: x=0 daje y-sjecište, x=1 daje (1, k+n).","Alt metoda: koristi x-sjecište (gdje y=0): −3x+2=0 → x = 2/3 → točka (2/3, 0). Zatim povezi (0,2) i (2/3, 0).","Greška: zamijeniti k i n (npr. nacrtati k=2 umjesto k=−3); ili koristiti samo jednu točku.","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  context:"Zadatak 26 (1. dio od 2): Zadani su pravci u koordinatnom sustavu."},
{id:26.2,type:"sa",topic:"lin",points:1,
  q:"Napišite jednadžbu pravca koji prolazi točkama A(-2,0) i B(2,2).",
  sol:{ans:"y = ([FRAC:1|2])x + 1",
    solFormula:{pre:"y = (",frac:[["1","2"]],post:")x + 1"},alt:["y=x/2+1","y=(0,5)x+1","x-2y+2=0"],
    steps:[
    {txt:"Nagib: k = (y₂−y₁)/(x₂−x₁) = (2-0)/(2−(-2)) = 2/4 = 1/2"},
    {txt:"Jednadžba: y-0 = [FRAC:1|2](x−(−2))"},
    {txt:"y = [FRAC:1|2](x+2) = [FRAC:x|2] + 1"},
    {txt:"→ Odgovor: y = [FRAC:1|2]x + 1",final:true},{txt:"Provjera: A(−2,0): 0=[FRAC:1|2](−2)+1=-1+1=0 ✓; B(2,2): 2=[FRAC:1|2]·2+1=2 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom.",final:true,note:"postupak"}]},
  why:["Pravilo: za pravac kroz dvije točke (x₁, y₁) i (x₂, y₂), nagib k = (y₂−y₁)/(x₂−x₁); jednadžba y − y₁ = k(x − x₁) (\"point-slope\" forma).","Intuicija: Δy/Δx je 'koliko y raste kad x raste za 1' — odgovara nagibu (strmini) pravca.","Praktično: izračunaj k iz koordinata, pa primijeni point-slope s BILO KOJOM od dvije točke (dobit ćeš identičan rezultat).","Alt metoda: pretpostavi y = kx + n; uvrsti obje točke i riješi sustav. Ovdje: 0 = −2k+n i 2 = 2k+n → zbroji: n = 1 → k = 1/2; daje y = x/2 + 1.","Greška: pomiješati red u Δy/Δx (npr. (y₁−y₂)/(x₂−x₁) — krivi predznak); ili korstiti samo jednu točku u jednadžbi (potrebno OBA podatka za pravac).","Provjera: provjera linearnošću: nagib i sjecište konzistentni ✓","Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s točkom."],
  context:"Zadatak 26 (2. dio od 2): Zadani su pravci u koordinatnom sustavu."},
{id:27.1,img:true,type:"num",topic:"stat",points:1,
  q:"Koliko je učenika postiglo 6 bodova?",
  sol:{ans:"7",alt:["odgovor","rezultat"]},
  steps:[
    {txt:"Iz histograma: stupac iznad '6 bodova' ima visinu 7"},
    {txt:"→ Odgovor: 7 učenika",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"},{txt:"Alt metoda: izračunaj korak po korak iz definicije.",final:true,note:"alt"}],
  why:["Na histogramu: os x = broj bodova, os y = broj učenika.","Visina stupca = koliko učenika ima taj broj bodova.","Direktno čitanje: stupac iznad 6 = 7.","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: izračunaj korak po korak iz definicije.","Provjera: brojčana provjera ✓","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  context:"Zadatak 27 (1. dio od 3): Nastavnik je rezultate učenika na ispitu prikazao grafom (histogramom). Pogledaj grafički prikaz."},
{id:27.2,img:true,type:"num",topic:"stat",points:1,
  q:"Koliko je učenika pisalo ispit?",
  sol:{ans:"30",alt:["30 učenika","odgovor","rezultat"]},
  steps:[
    {txt:"Zbrojimo sve visine stupaca:"},
    {txt:"1+2+3+1+4+7+0+1+5+0+2+4 = 30"},
    {txt:"→ Odgovor: 30 učenika",final:true}
  ,{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"},{txt:"Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.",final:true,note:"intuicija"}],
  why:["Ukupan broj = zbroj svih frekvencija (visina svih stupaca).","Pažljivo: ne preskočiti ni jedan stupac, uključiti i nultočke.","Provjera: 1+2+3+1+4+7+0+1+5+0+2+4 = 30 ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Česta greška: krivo primjeniti pravilo, zaboraviti znak, ili preskočiti korak.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  context:"Zadatak 27 (2. dio od 3): Nastavnik je rezultate učenika na ispitu prikazao grafom (histogramom). Pogledaj grafički prikaz."},
{id:27.3,img:true,type:"num",topic:"stat",points:1,
  q:"Koliki je prosječan broj bodova po učeniku? (zaokruži na 2 decimale)",
  warn:"Pazi: ne zbrojiti samo bodove bez ponderiranja s frekvencijama.",
  sol:{ans:"6,77",alt:["6,77","≈6.77"]},
  steps:[
    {txt:"Suma = 1·1+2·2+3·3+1·4+4·5+7·6+0·7+1·8+5·9+0·10+2·11+4·12"},
    {txt:"= 1+4+9+4+20+42+0+8+45+0+22+48 = 203"},
    {txt:"Prosjek = 203/30 ≈ 6,767 ≈ 6,77"},
    {txt:"→ Odgovor: 6,77",final:true},{txt:"Provjera: 203/30≈6,767≈6,77 ✓",final:true,note:"verifikacija"}
  ,{txt:"Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod).",final:true,note:"postupak"}],
  why:["Aritmetička sredina = (Σ fi·xi) / N, gdje je fi frekvencija, xi vrijednost.","Svaki bod množimo s brojem učenika koji ga imaju, zbrojimo, dijelimo s ukupnim brojem.","Greška: zbrojiti samo bodove bez ponderiranja s frekvencijama.","Provjera: suma umnožaka = 203, N=30, 203/30 ≈ 6,77 ✓","Pravilo: aritmetička sredina = suma podataka / broj podataka.","Intuicija: srednja vrijednost je \"tipična\" — provjeri redom veličine.","Alt metoda: izračunaj korak po korak iz definicije.","Postupak: organiziraj podatke, primijeni formulu (sredina, medijan, mod)."],
  context:"Zadatak 27 (3. dio od 3): Nastavnik je rezultate učenika na ispitu prikazao grafom (histogramom). Pogledaj grafički prikaz."},
{id:28.1,img:true,type:"num",topic:"fin",points:1,
  q:"Kolika je ušteda ako se kupi jedno pakiranje B umjesto pet pakiranja A?",
  img:true,
  sol:{ans:"14,70 kn",alt:["14,70","14,70 kn","14.7 kn","14.70","14,7"]},
  exp:"5 pakiranja A: 5 · 9,80 = 49,00 kn. 1 pakiranje B = 34,30 kn. Oba sadrže 5 kg praška. Ušteda = 49,00 − 34,30 = 14,70 kn.",
  steps:[
    {txt:"5 pakiranja A → ukupna cijena: 5 · 9,80 kn = 49,00 kn",note:"5 kg praška"},
    {txt:"1 pakiranje B → cijena: 34,30 kn",note:"također 5 kg praška"},
    {txt:"Ušteda = cijena (5×A) − cijena (1×B) = 49,00 − 34,30 = 14,70 kn"},
    {txt:"→ Odgovor: 14,70 kn",final:true}
  ,{txt:"Financijska provjera: omjer ili postotak konzistentan ✓",final:true,note:"verifikacija"},{txt:"Postupak: postavi proporciju ili postotak, riješi jednadžbu.",final:true,note:"postupak"}],
  why:["Obje opcije daju istu masu praška: 5 × 1 kg = 5 kg = masa pakiranja B. Stoga je usporedba opravdana.","Ušteda = veća cijena − manja cijena. Nikad ne smijemo dobiti negativan broj kao uštedu — ako se dogodi, opcije nisu poredane od skuplje prema jeftinijoj.","Greška: usporediti cijene bez provjere da iznose istu masu.","Provjera reda veličine: B (34,30) je manje od 5×A (49,00) → ušteda je realna.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 28 (1. dio od 2): Prašak za pranje prodaje se u pakiranjima A, B i C. Mase i cijene prikazane su u tablici (vidi sliku)."},
{id:28.2,img:true,type:"sa",img:true,topic:"fin",points:1,
  q:"Kupujemo 28 kg praška za pranje. Koliko komada pojedinoga pakiranja treba kupiti da bismo platili najmanji iznos?",
  intermediates:[136, 175.2, 68, 39.2, 9.8],
  img:true,
  sol:{ans:"A: 4 komada, B: 0 komada, C: 2 komada",alt:["A=4, B=0, C=2","4 kom A, 0 kom B, 2 kom C","A: 4, B: 0, C: 2","4-0-2"]},
  exp:"Cijena po kg: A = 9,80/1 = 9,80 kn/kg, B = 34,30/5 = 6,86 kn/kg, C = 68,00/12 ≈ 5,67 kn/kg → C najjeftinije. Uzmi maksimalno C: 2 kom = 24 kg, ostaje 4 kg. Za 4 kg najjeftinije je 4 × A (39,20 kn). 1 × B = 5 kg je previše. Optimum: A=4, B=0, C=2 (ukupno 175,20 kn).",
  steps:[
    {txt:"Računamo cijenu po kg: A = 9,80/1 = 9,80; B = 34,30/5 = 6,86; C = 68,00/12 ≈ 5,67",note:"što manji broj — tim bolje"},
    {txt:"Najjeftinije je C (5,67 kn/kg) → uzmi maksimalan broj C-ova"},
    {txt:"2 × C = 24 kg, ostaje 28 − 24 = 4 kg",note:"3 × C = 36 kg > 28, previše"},
    {txt:"Za preostalih 4 kg: opcije su 4 × A (4 kg) ili 1 × B (5 kg, previše)"},
    {txt:"4 × A = 4 · 9,80 = 39,20 kn (točno 4 kg)"},
    {txt:"Ukupno: 2 × 68,00 + 4 × 9,80 = 136,00 + 39,20 = 175,20 kn"},
    {txt:"→ Optimalno: A = 4 komada, B = 0 komada, C = 2 komada",final:true},{txt:"Provjera: 2×12+4·1=28 kg ✓; ukupno 175,20 kn = najjeftinija kombinacija za točno 28 kg ✓",final:true,note:"verifikacija"}
  ],
  why:["Cilj: minimizirati cijenu pri točnoj masi. Strategija: što više od najjeftinijeg pakiranja, ostatak nadopunjavati manjim.","Cijena po kg je ključni pokazatelj: A=9,80; B=6,86; C=5,67 kn/kg. C je 42% jeftinije od A.","Diophantska restrikcija: ne smijemo prijeći 28 kg jer onda kupujemo višak, što ne smatramo 'najmanji iznos za 28 kg'.","Greška 1: uzeti B umjesto A za ostatak 4 kg (1×B = 5 kg, što je više od potrebnih 4).","Greška 2: ne provjeriti je li ukupna masa točno 28 kg — npr. 2×C + 1×A = 25 kg (ne 28).","Provjera: 2·12 + 4·1 + 0·5 = 24 + 4 = 28 kg ✓; cijena = 175,20 kn.","Pravilo: postotak p% od vrijednosti V iznosi (p/100) · V.","Intuicija: postotak povećava ili smanjuje proporcionalno bazi.","Alt metoda: koristi pravilo trojno ili postotni račun.","Postupak: postavi proporciju ili postotak, riješi jednadžbu."],
  context:"Zadatak 28 (2. dio od 2): Prašak za pranje prodaje se u pakiranjima A, B i C. Mase i cijene prikazane su u tablici (vidi sliku)."}
,

];

export const qImages = {
  "2011_zima_B__20": () => e(Svg20z11, null),
  "2011_zima_B__24.1": () => e(Svg24z11, null),
  "2011_zima_B__24.2": () => e(Svg24z11, null),
  "2011_zima_B__26.1": () => e(Svg26z11, null),
  "2011_zima_B__27.1": () => e(Svg27z11, null),
  "2011_zima_B__27.2": () => e(Svg27z11, null),
  "2011_zima_B__27.3": () => e(Svg27z11, null),
  "2011_zima_B__28.1": () => e(Svg28z11, null),
  "2011_zima_B__28.2": () => e(Svg28z11, null),
  "2011_zima_B__9": () => e(Svg9z11, null),
};
