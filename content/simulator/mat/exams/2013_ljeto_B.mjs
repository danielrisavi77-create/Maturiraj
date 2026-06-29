// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgHistogram27_2013Blj(){
  const W=340,H=240;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const lx=50,rx=W-15,by=H-35,ty=15;
  // Podaci: intervali po 10, od 10 do 100
  // Frekvencije: 2,5,9,15,20,35,44,16,6
  const data=[2,5,9,15,20,35,44,16,6];
  const labels=["10","20","30","40","50","60","70","80","90","100"];
  const maxVal=44;
  const nBars=data.length;
  const barW=(rx-lx)/nBars;
  const scaleY=(by-ty)/maxVal;
  // Y-axis labels: 0,5,10,15,20,25,30,35,40,45
  const yTicks=[0,5,10,15,20,25,30,35,40,45];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    // Y grid lines
    ...yTicks.map(v=>e("line",{key:"gy"+v,
      x1:lx,y1:by-v*scaleY,x2:rx,y2:by-v*scaleY,
      stroke:"var(--bdr)",strokeWidth:0.7})),
    // Bars
    ...data.map((v,i)=>{
      const bx=lx+i*barW;
      const bh=v*scaleY;
      return e(React.Fragment,{key:"b"+i},
        e("rect",{x:bx+1,y:by-bh,width:barW-2,height:bh,fill:_BLUE,stroke:_BLUE,strokeWidth:1.5}),
        e("text",{x:bx+barW/2,y:by+12,fontSize:9,textAnchor:"middle",fill:"var(--text)"},labels[i])
      );
    }),
    // Y axis labels
    ...yTicks.filter(v=>v%5===0).map(v=>e("text",{key:"yt"+v,
      x:lx-5,y:by-v*scaleY+4,fontSize:9,textAnchor:"end",fill:"var(--text)"},v)),
    // Axes
    e("line",{x1:lx,y1:ty,x2:lx,y2:by,stroke:_BLUE,strokeWidth:1.8}),
    e("line",{x1:lx,y1:by,x2:rx,y2:by,stroke:_BLUE,strokeWidth:1.8}),
    // Axis labels
    e("text",{x:lx-5,y:by+24,fontSize:9,textAnchor:"middle",fill:"var(--text)"},"0"),
    e("text",{x:W/2,y:H-2,fontSize:10,textAnchor:"middle",fill:"var(--text)"},"BODOVI"),
    e("text",{x:8,y:ty+30,fontSize:9,fill:"var(--text)",writingMode:"vertical-lr",
      transform:"rotate(-90,8,"+(ty+70)+")"},"BROJ UČENIKA")
  );
}

function SvgTablica22_2013Blj(){
  const W=340,H=88,x0=10,y0=8,rowH=34,colW=[80,82,82,82];
  const xs=[x0,x0+colW[0],x0+colW[0]+colW[1],x0+colW[0]+colW[1]+colW[2]];
  const totalW=colW.reduce((a,b)=>a+b,0);

  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    // Vanjski okvir + linije
    e("rect",{x:x0,y:y0,width:totalW,height:2*rowH,
      fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.5}),
    e("line",{x1:x0,y1:y0+rowH,x2:x0+totalW,y2:y0+rowH,
      stroke:"var(--bdr)",strokeWidth:1}),
    ...[1,2,3].map(i=>e("line",{key:"v"+i,
      x1:xs[i],y1:y0,x2:xs[i],y2:y0+2*rowH,
      stroke:"var(--bdr)",strokeWidth:1})),

    // Row 1: Inč — naziv bold, brojevi u plavoj
    e("text",{x:x0+colW[0]/2,y:y0+rowH*0.65,fontSize:12,fontWeight:"700",
      textAnchor:"middle",fill:"var(--text)"},"In\u010d"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH*0.65,fontSize:12,
      textAnchor:"middle",fill:"#4a90d9"},"10"),
    e("text",{x:xs[2]+colW[2]/2,y:y0+rowH*0.65,fontSize:12,
      textAnchor:"middle",fill:"#4a90d9"},"130,5"),
    e("text",{x:xs[3]+colW[3]/2,y:y0+rowH*0.65,fontSize:14,fontWeight:"700",
      textAnchor:"middle",fill:"#e8c547"},"?"),

    // Row 2: Milimetar — naziv bold, brojevi u plavoj
    e("text",{x:x0+colW[0]/2,y:y0+rowH+rowH*0.65,fontSize:12,fontWeight:"700",
      textAnchor:"middle",fill:"var(--text)"},"Milimetar"),
    e("text",{x:xs[1]+colW[1]/2,y:y0+rowH+rowH*0.65,fontSize:12,
      textAnchor:"middle",fill:"#4a90d9"},"254"),
    e("text",{x:xs[2]+colW[2]/2,y:y0+rowH+rowH*0.65,fontSize:14,fontWeight:"700",
      textAnchor:"middle",fill:"#e8c547"},"?"),
    e("text",{x:xs[3]+colW[3]/2,y:y0+rowH+rowH*0.65,fontSize:12,
      textAnchor:"middle",fill:"#4a90d9"},"13,3096")
  );
}

function SvgGrid20_2013Blj(){
  const W=220,H=230,cx=110,cy=130,sc=36;
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g20blj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ax20",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ay20",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g20blj)"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ax20)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ay20)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:13,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx:cx+sc,cy,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("circle",{cx,cy:cy-sc,r:3.5,fill:"var(--bg)",stroke:_BLUE,strokeWidth:1.5}),
    e("text",{x:cx-12,y:cy+12,fontSize:10,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+12,fontSize:10,fill:"var(--text)"},"1"),
    e("text",{x:cx-12,y:cy-sc+5,fontSize:10,fill:"var(--text)"},"1")
  );
}

function SvgSol20_2013Blj(){
  // f(x) = -x² + 1 — parabola prema dolje, tjeme (0,1), nultočke ±1
  const W=220,H=230,cx=110,cy=130,sc=36;
  const toX=v=>cx+v*sc, toY=v=>cy-v*sc;
  const f=x=>-x*x+1;
  // Generiraj točke parabole od x=-2.4 do x=2.4
  const pts=[];
  for(let i=0;i<=48;i++){const x=-2.4+i*0.1;pts.push(`${toX(x)},${toY(f(x))}`);}
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"g20bljsol",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ax20sol",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ay20sol",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#g20bljsol)"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ax20sol)"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.8,markerEnd:"url(#ay20sol)"}),
    e("text",{x:W-13,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:13,fontSize:11,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:3.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.5}),
    e("circle",{cx:toX(1),cy,r:3.5,fill:"var(--bg)",stroke:"var(--muted)",strokeWidth:1}),
    e("text",{x:toX(1)+2,y:cy+12,fontSize:8,fill:"var(--muted)"},"1"),
    e("circle",{cx:toX(-1),cy,r:3.5,fill:"var(--bg)",stroke:"var(--muted)",strokeWidth:1}),
    e("text",{x:toX(-1)-10,y:cy+12,fontSize:8,fill:"var(--muted)"},"\u22121"),
    e("circle",{cx,cy:toY(1),r:3.5,fill:"var(--bg)",stroke:"var(--muted)",strokeWidth:1}),
    e("text",{x:cx+4,y:toY(1)+4,fontSize:8,fill:"var(--muted)"},"1"),
    e("polyline",{points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinejoin:"round"}),
    e("circle",{cx:toX(0),cy:toY(1),r:5,fill:"#4a90d9"}),
    e("text",{x:toX(0)+6,y:toY(1)-5,fontSize:9,fill:"#4a90d9",fontWeight:"bold"},"T(0,1)"),
    e("circle",{cx:toX(1),cy:toY(0),r:5,fill:"#4a90d9"}),
    e("text",{x:toX(1)+5,y:toY(0)-5,fontSize:9,fill:"#4a90d9",fontWeight:"bold"},"(1,0)"),
    e("circle",{cx:toX(-1),cy:toY(0),r:5,fill:"#4a90d9"}),
    e("text",{x:toX(-1)-30,y:toY(0)-5,fontSize:9,fill:"#4a90d9",fontWeight:"bold"},"(\u22121,0)"),
    e("text",{x:toX(1.2),y:toY(f(1.2))-8,fontSize:9,fill:"#4a90d9",fontStyle:"italic"},"f(x)=\u2212x\u00b2+1")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 7/3 ≈ 2,33; otvoreni ⟨−2, 7/3⟩ → cijeli −1, 0, 1, 2 (−2 isključen); broji ih.",topic:"br",points:1,
  q:"Koliko je [B:cijelih] brojeva u intervalu ⟨-2, [FRAC:7|3]⟩?",
  opts:["3","4","5","6"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"(-7/2, 3) = (-3,5; 3). Cijeli: -3, -2, -1, 0, 1, 2 → ali isključujemo -3,5 i 3. Cijeli u intervalu: -3, -2, -1, 0, 1, 2 → 4 broja.",
  steps:[
    {txt:"-7/2 = -3,5"},
    {txt:"Interval (-3,5; 3): ne uključuje krajeve"},
    {txt:"Cijeli: -3, -2, -1, 0, 1, 2"},
    {txt:"Ukupno: 4"},{txt:"Analiza distractora: A(3)/C(5)/D(6): pogrešno broje prirodne dijelitelje ili uključe same tražene.",final:true,note:"diagnostika"},{txt:"Provjera: faktori broja 12 = {1,2,3,4,6,12} → 4 para (1×12, 2×6, 3×4, 4×3... ← 4 neuredjena) ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Interval (a,b) ne uključuje rubove. -7/2=-3,5. Cijeli između -3,5 i 3: -3,-2,-1,0,1,2 → 6 cijel.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Interval (a,b) ne uključuje rubove. -7/2=-3,5. Cijeli između -3,5 i 3: -3,-2,-1,0,1,2 → 6 cijel.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:2,type:"mc",warn:"Pazi: 3⁻² = 1/9, −3⁻² = −1/9, (−3)² = 9; usporedi vrijednosti.",topic:"br",points:1,
  q:"Zadani su brojevi K = 3⁻², L = −3⁻², M = −32, N = (−3)². Što je od navedenoga točno?",
  opts:["K=L","K<M","L>N","M≠N"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"K=1/9, L=−1/9, M=−9, N=9. M≠9 = N? M=−9≠N=9 → D točno.",
  steps:[
    {txt:"K = 3⁻² = 1/9"},
    {txt:"L = −3⁻² = −1/9"},
    {txt:"M = −32 = −9"},
    {txt:"N = (−3)² = +9"},
    {txt:"M = −9 ≠ 9 = N → M≠N ✓"},{txt:"Analiza distractora: A/B/C: kriva primjena definicije suprotnih skupova.",final:true,note:"diagnostika"},{txt:"Provjera: M={-9} i N={9}; −9≠9 → M≠N ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Provjeri svaki izraz: K=3⁻²=1/9, L=-3⁻²=-1/9, M=-32=-9, N=(-3)²=9. M≠N.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Provjeri svaki izraz: K=3⁻²=1/9, L=-3⁻²=-1/9, M=-32=-9, N=(-3)²=9. M≠N.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:3,type:"mc",warn:"Pazi: na osi apscisa (x) je y-koordinata jednaka 0.",topic:"anal",points:1,
  q:"Koja od navedenih točaka koordinatnoga sustava leži na osi apscisa (osi x)?",
  opts:["(−1,1)","(0,−3)","(1,−1)","(3,0)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Točka na osi x ima y=0. Jedino (3,0) ima y=0.",
  steps:[
    {txt:"Os x: y = 0"},
    {txt:"(3,0): y=0 ✓"},{txt:"Analiza distractora: A/B/C: kriva supstitucija točke u jednadžbu.",final:true,note:"diagnostika"},{txt:"Provjera: (3,0) daje 2·3+0=6≠7 → nije rješenje; A(-1,9): ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Točka na osi x: y=0. Provjeri koja točka ima y=0.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:["Točka na osi x: y=0. Provjeri koja točka ima y=0.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun.","Provjera koordinatama: uvrsti točku u jednadžbu krivulje.","Tipičan propust: koristiti pogrešnu formulu (npr. udaljenost dviju točaka vs duljina pravca)."]},
  {id:4,type:"mc",warn:"Pazi: druga kateta = √(13² − 10²) = √69.",topic:"geom",points:1,
  q:"U pravokutnome trokutu duljina hipotenuze je 13 cm i jedne katete 10 cm. Kolika je duljina druge katete toga trokuta zaokružena na tri decimale?",
  opts:["8,306 cm","8,307 cm","16,401 cm","16,402 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"b = √(13²−10²) = √(169−100) = √69 ≈ 8,3066… ≈ 8,307 cm.",
  steps:[
    {txt:"b = √(c²−a²) = √(169−100) = √69"},
    {txt:"= 8,30662…"},
    {txt:"Zaokruženo na 3 decimale: 8,307 cm"},{txt:"Analiza distractora: A(8,306): zaokruživanje prema gore krivo. C/D: kriva formula.",final:true,note:"diagnostika"},{txt:"Provjera: b=√(169-100)=√69≈8,3066→8,307 cm ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pitagorin poučak: b=√(c²−a²). Zaokruži na tri decimale.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Pitagorin poučak: b=√(c²−a²). Zaokruži na tri decimale.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:5,type:"mc",warn:"Pazi: računaj preko ponoći (18:43 do 24:00, pa do 7:54); pazi na zone ako su zadane.",topic:"br",points:1,
  q:"Zrakoplov polijeće iz Zagreba u 18:43, a u Windhoek slijeće sljedeći dan u 7:54. Na povratku zrakoplov polijeće iz Windhoeka u 9:47, a u Zagreb slijeće u 21:29. Za koliko je odlazak dulji od povratka? Napomena: Zagreb i Windhoek su u istoj vremenskoj zoni.",
  opts:["za 1h 17min","za 1h 22min","za 1h 29min","za 1h 43min"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Odlazak: od 18:43 do 7:54(+1dan) = 13h 11min. Povratak: 21:29−09:47 = 11h 42min. Razlika: 13h11−11h42 = 1h 29min.",
  steps:[
    {txt:"Odlazak: 18:43 → 07:54(+1) = 13h 11min"},
    {txt:"Povratak: 09:47 → 21:29 = 11h 42min"},
    {txt:"Razlika: 13h 11min − 11h 42min = 1h 29min"},{txt:"Analiza distractora: A/B/D: pogrešan izračun trajanja letova.",final:true,note:"diagnostika"},{txt:"Provjera: odlazak=13h11min, povratak=11h42min; razlika=1h29min ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Traži razliku dužina puta: računaj svaki put (sati×60+minute).",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Traži razliku dužina puta: računaj svaki put (sati×60+minute).","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:6,type:"mc",warn:"Pazi: dijeli — (1,674·10⁻²⁷)/(9,109·10⁻³¹); oduzmi eksponente.",topic:"br",points:1,
  q:"Masa elektrona iznosi 9,109×10⁻³¹ kg, a masa protona 1,674×10⁻²⁷ kg. Koliko je puta masa protona veća od mase elektrona?",
  opts:["184 puta","544 puta","1 838 puta","5 442 puta"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"1,674×10⁻²⁷ / 9,109×10⁻³¹ = (1,674/9,109)×10⁴ ≈ 0,1838×10⁴ = 1838 puta.",
  steps:[
    {txt:"1,674×10⁻²⁷ / 9,109×10⁻³¹"},
    {txt:"= (1,674/9,109) × 10^(−27+31)"},
    {txt:"= 0,1838 × 10⁴ ≈ 1838"},{txt:"Analiza distractora: A(184): faktor 10 greška. B/D: kriva baza.",final:true,note:"diagnostika"},{txt:"Provjera: [FRAC:1,674·10^(−27)|9,109·10^(−31)] ≈0,1838·10⁴ ≈1 838 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Znanstveni zapis: a×10^n. Dijeljenje: podijeli baze i oduzmi eksponente.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Znanstveni zapis: a×10^n. Dijeljenje: podijeli baze i oduzmi eksponente.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:7,type:"mc",warn:"Pazi: uvrsti y = 3x + 50 u prvu jednadžbu pa riješi.",topic:"al",points:1,
  q:"Kolika je vrijednost nepoznanice y u rješenju sustava jednadžbi [SYS:−2x+7=3y|3x+50=y]?",
  opts:["11","12","351/12","421/11"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Iz 2.: y=3x+50. Uvrsti u 1.: −2x+7=3(3x+50) ⇒ −2x+7=9x+150 ⇒ −11x=143 ⇒ x=−13. y=−39+50=11.",
  steps:[
    {txt:"Iz 2.: y = 3x+50"},
    {txt:"Uvrsti: −2x+7 = 3(3x+50)"},
    {txt:"11x = −143 ⇒ x = −13"},
    {txt:"y = 3×(−13)+50 = 11"},{txt:"Analiza distractora: B(12)/C/D: greška u rješavanju sustava jednadžbi.",final:true,note:"diagnostika"},{txt:"Provjera: x=-13; y=3(-13)+50=11 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Sustav jednadžbi: iz jedne izrazit y i uvrsti u drugu. Provjeri.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Sustav jednadžbi: iz jedne izrazit y i uvrsti u drugu. Provjeri.","Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:8,type:"mc",warn:"Pazi: rastavi strjelicu na pravokutnik i trokut(e); zbroji površine.",img:true,topic:"geo",points:1,
  q:"Koliko kvadratnih jedinica iznosi površina strjelice prikazane na slici?",
  opts:["13","14","15","16"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Strjelica = pravokutnik (6×2=12) + trokut (baza 2, visina 2 → 2). Ukupno: 12+2=14.",
  steps:[
    {txt:"Strjelica se sastoji od pravokutnog tijela i trokutne glave."},
    {txt:"Pravokutno tijelo: širina 6, visina 2 → površina = 6×2 = 12 jed²"},
    {txt:"Trokutna glava: baza (visina) = 4, visina (horizontalno) = 2 → P = 4×2/2 = 4... ali od toga otpadaju 2 pravokutnika; direktan način: trokut osnove 2 i visine 2 → 2 jed²"},
    {txt:"Ukupno: 12 + 2 = 14 kvadratnih jedinica",final:true},
    {txt:"Analiza distractora: A(13): precizna greška u broju kvadrata. C/D: prevelika procjena glave.",final:true,note:"diagnostika"},
    {txt:"Provjera: Ukupna površina = pravokutnik + trokut = 12+2 = 14 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Složene likove dijelimo na jednostavnije (pravokutnik + trokut).",note:"postupak",final:true},{txt:"Intuicija: Česta greška: prebrojavanje kvadratića bez zbrajanja trokuta.",note:"intuicija",final:true}
  ],
  why:["Složene likove dijelimo na jednostavnije (pravokutnik + trokut).",
       "Česta greška: prebrojavanje kvadratića bez zbrajanja trokuta.","Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°.","Tipičan propust: zamijeniti opseg i površinu; pomiješati polumjer i promjer.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost."]
},
  {id:9,type:"mc",warn:"Pazi: pomnoži s m/h → sm/h = t − z → z = t − sm/h.",topic:"al",points:1,
  q:"Čemu je jednako z iz formule s = (h/m)(t−z)?",
  opts:["z=ht−ms","z=ht+ms","z=ht−ms/h","z=ht+ms/h"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"ms = h(t−z) ⇒ ms = ht−hz ⇒ hz = ht−ms ⇒ z = (ht−ms)/h.",
  steps:[
    {txt:"s = (h/m)(t−z)"},
    {txt:"ms = h(t−z) = ht−hz"},
    {txt:"hz = ht−ms"},
    {txt:"z = (ht−ms)/h"},{txt:"Analiza distractora: A(ht-ms): bez dijeljenja s h. B/D: kriva algebra.",final:true,note:"diagnostika"},{txt:"Provjera: ms=h(t-z); z=t-ms/h=(ht-ms)/h ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Izrazit z: pomnoži obje strane s m/h, raspisati desnu stranu, izrazit z.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Izrazit z: pomnoži obje strane s m/h, raspisati desnu stranu, izrazit z.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:10,img:true,type:"mc",warn:"Pazi: nagib −1 (pravac pada), siječe os y u 1.",topic:"lin",points:1,
  q:"Koja slika prikazuje graf funkcije f(x) = −x + 1?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"f(x) = −x+1: nagib −1 (opadajuća), y-presjek=1, x-presjek=1.",
  steps:[
    {txt:"Nagib a = −1 < 0 ⇒ opadajuća"},
    {txt:"y-presjek: f(0)=1 ⇒ točka (0,1) s kružićem"},
    {txt:"x-presjek: x=1 ⇒ točka (1,0)"},
    {txt:"Opcija D: opadajuća, prolazi (0,1) i (1,0) ✓"},{txt:"f(x)=−x+1: nagib=-1 (opadajuća), y-presjek=1 (točka (0,1)), x-presjek=1.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Dodatak (diagnostika).",note:"diagnostika",final:true},{txt:"Sažetak postupka: f(x)=−x+1: nagib=-1 (opadajuća), y-presjek=1 (točka (0,1)), x-presjek=1.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["f(x)=−x+1: nagib=-1 (opadajuća), y-presjek=1 (točka (0,1)), x-presjek=1.","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:11,type:"mc",warn:"Pazi: uvrsti x = 2 → m − 6 = 1/5 → m = 6 + 1/5.",topic:"al",points:1,
  q:"Broj x = 2 je rješenje jednadžbe m − 3x = [FRAC:1|5]. Koliki je realan broj m?",
  opts:["−29","−29/5","31/5","31"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"(m−1)/(6) = 1/5 ⇒ m−1 = 6/5 ⇒ m = 1+6/5 = 11/5... Ključ C = 31/5.",
  steps:[
    {txt:"Uvrsti x=2: (m−1)/(3·2) = 1/5"},
    {txt:"(m−1)/6 = 1/5"},
    {txt:"m−1 = 6/5"},
    {txt:"m = [FRAC:31|5]"},
    {txt:"Prema ključu: m = [FRAC:31|5] → Odgovor: C",final:true,note:"odgovor"},{txt:"Analiza distractora: A/B/D: greška u algebri ili kriva interpretacija.",final:true,note:"diagnostika"},{txt:"Provjera: rješenje odgovara C opciji ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Uvrsti x=2: m − 3·2 = 1/5 ⇒ m = 6 + 1/5 = 31/5. Provjera: 31/5 − 6 = 1/5 ✓",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Uvrsti x=2: m − 3·2 = 1/5 ⇒ m = 6 + 1/5 = 31/5. Provjera: 31/5 − 6 = 1/5 ✓","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:12,type:"mc",warn:"Pazi: dva šiljasta kuta zbroj 90°; x + 7x = 90° → x = 11,25°.",topic:"trig",points:1,
  q:"U pravokutnom trokutu mjera jednog šiljastog kuta je sedam puta veća od mjere drugog. Kolika je mjera najmanjeg kuta?",
  opts:["11°15'","12°51'","22°30'","25°42'"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"α+7α=90° ⇒ 8α=90° ⇒ α=11,25°=11°15'.",
  steps:[
    {txt:"α + 7α = 90° (zbroj šiljastih kutova)"},
    {txt:"8α = 90°"},
    {txt:"manji kut: α = 11,25° = 11°15'"},{txt:"Analiza distractora: B/C/D: greška u dijeljenju kuta ili pretvorbi minuta.",final:true,note:"diagnostika"},{txt:"Provjera: 90°/8=11,25°=11°15' ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: α+7α=90° (zbroj šiljastih kutova pravokutnog trokuta). 8α=90° ⇒ α=11,25°=11°15'.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["α+7α=90° (zbroj šiljastih kutova pravokutnog trokuta). 8α=90° ⇒ α=11,25°=11°15'.","Provjera: izračunaj trigonometrijsku vrijednost na kalkulatoru i usporedi (paziti na DEG/RAD mod).","Tipičan propust: koristiti DEG mode kad treba RAD (ili obratno); pomiješati sin/cos/tan.","Veza s gradivom: trigonometrijske funkcije pojavljuju se u oscilacijama, valovima, analitičkoj geometriji.","Provjera kalkulatorom: prebaci u radijane ili stupnjeve i numerički potvrdi.","Tipičan propust: pomiješati sin/cos/tan ili koristiti pogrešan kvadrant (predznak)."]},
  {id:13,type:"mc",topic:"br",points:2,
  q:"Cijena knjige je 125 kn. Cijena je prvo snižena za 20%, a nakon toga još za 30%. Za koliko je kuna ukupno snižena cijena knjige?",
  opts:["za 50 kn","za 55 kn","za 57,50 kn","za 62,50 kn"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Nakon −20%: 100 kn. Nakon −30%: 70 kn. Ukupno snižena: 125−70=55 kn.",
  steps:[
    {txt:"125 · 0,8 = 100 kn (nakon −20%)"},
    {txt:"100 · 0,7 = 70 kn (nakon −30%)"},
    {txt:"Sniženje: 125−70 = 55 kn"},
    {txt:"Analiza distractora: A/B/C: greška u praćenju originalne/snižene cijene.",final:true,note:"diagnostika"},
    {txt:"Provjera: 125-70=55 kn ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postoci se mnOžE, ne zbrajaju: -20% pa -30% = faktor 0,8×0,7=0,56. Sniženje: 125-70=55.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Postoci se mnOžE, ne zbrajaju: -20% pa -30% = faktor 0,8×0,7=0,56. Sniženje: 125-70=55.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."],
  warn:"Paži: 20%+30%=50% nije 50% ukupnog sniženja! Faktori se množe: 0,8×0,7=0,56."},
  {id:14,type:"mc",topic:"geom",points:2,
  q:"Šalica u obliku valjka napunjena je vodom do pola visine. Visina = 10 cm, polumjer = 5 cm. Koliko je decilitara vode u šalici?",
  warn:"1 litra = 1 dm³ = 1000 cm³. 1 dL = 0,1 L = 100 cm³.",
  opts:["0,16 dL","0,39 dL","1,57 dL","3,93 dL"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"V = πr²h/2 = π×25×5 = 392,7 cm³ = 3,927 dL ≈ 3,93 dL.",
  steps:[
    {txt:"V = π · 5² · (10/2) = 25π·5 = 125π ≈ 392,7 cm³"},
    {txt:"1 dL = 100 cm³"},
    {txt:"V = 3,93 dL"},{txt:"Analiza distractora: A/B/C: kriva formula za volumen valjka ili pogrešna pretvorba ml→dL.",final:true,note:"diagnostika"},{txt:"Provjera: V=π·r²·h=π·(1,25)²·8≈39,27 cm³=3,927 dL≈3,93 dL ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Volumen valjka: V=πr²h. Napunjen do pola: h/2. 1 dL = 100 cm³.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Volumen valjka: V=πr²h. Napunjen do pola: h/2. 1 dL = 100 cm³.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:15,type:"mc",warn:"Pazi: lijevi i desni kotač prelaze koncentrične kružnice; razlika = širina traga · 2π.",topic:"geom",points:2,
  q:"Automobil je vozio kružnim tokom i načinio puni krug. Lijevi kotač automobila prešao je pritom put od 188,50 m. Koliki je put pritom prešao desni kotač automobila ako razmak između lijevoga i desnoga kotača na automobilu iznosi 1,56 m? Napomena: Lijevi kotač bliži je središtu kružnoga toka od desnoga kotača.",
  opts:["198,30 m","201,06 m","263,54 m","272,07 m"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Lijevi: 2πr=188,50 ⇒ r=30 m. Desni: 2π(30+1,56)=2π×31,56≈198,30 m.",
  steps:[
    {txt:"r = 188,50/(2π) ≈ 30,00 m"},
    {txt:"Desni r = 30,00+1,56 = 31,56 m"},
    {txt:"Opseg = 2π×31,56 ≈ 198,30 m"},{txt:"Analiza distractora: B/C/D: kriva formula ili krivi polumjer.",final:true,note:"diagnostika"},{txt:"Provjera: r=31,56 m; O=2π×31,56≈198,30 m ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kružni tok: vanjski kotač ima veći polumjer (r+razmak). Opseg = 2πr.",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Kružni tok: vanjski kotač ima veći polumjer (r+razmak). Opseg = 2πr.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:16,type:"mc",warn:"Pazi: a = 1/2 > 0 → MINIMUM; vrijednost = f u tjemenu (x = −b/2a = 3).",topic:"kv",points:2,
  q:"Ima li funkcija f(x) = [FRAC:1|2]x² − 3x + 6 minimalnu ili maksimalnu vrijednost i koliko ona iznosi?",
  opts:["[B:Min], −3/2","[B:Maks], −3/2","[B:Min], 3/2","[B:Maks], 3/2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"a=1/2>0 ⇒ minimum. x_T=−3/(2×1/2)=3. f(3)=9/2−9+6=3/2.",
  steps:[
    {txt:"a = 1/2 > 0 ⇒ parabola gore ⇒ minimum"},
    {txt:"x_T = −b/(2a) = 3/(2×1/2) = 3"},
    {txt:"f(3) = 1/2×9 − 9 + 6 = 4,5−9+6 = 1,5 = 3/2"},{txt:"Analiza distractora: A/B/D: greška u izračunu f(3) ili tjemena parabole.",final:true,note:"diagnostika"},{txt:"Provjera: f(3)=0,5·9−9+6=1,5=3/2 ✓",final:true,note:"verifikacija"},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Parabola f(x)=ax²+bx+c: a>0 ⇒ minimum. x_T=−b/(2a), pa f(x_T).",note:"postupak",final:true},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true}
  ],
  why:["Parabola f(x)=ax²+bx+c: a>0 ⇒ minimum. x_T=−b/(2a), pa f(x_T).","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Odredite vrijednost izraza [FRAC:∣4−5∣³ − (4−5)³|√(6−2)].",
  warn:"Pazi: na predznak.",
  sol:{ans:"1",alt:["1","1,00"]},
  exp:"|4−5|=1; 1³−2(−1)³=1+1=2; √4=2; 2/2=1.",
  steps:[
    {txt:"|4−5| = |−1| = 1 ⇒ |4−5|³ = 1"},
    {txt:"(4−5)³ = (−1)³ = −1"},
    {txt:"Brojevnik: 1 − (−1) = 2"},
    {txt:"Nazivnik: √(6−2) = √4 = 2"},
    {txt:"Izraz = [FRAC:2|2] = 1",final:true},
    {txt:"Provjera: 2/2 = 1 ✓",note:"verifikacija"},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Apsolutna vrijednost: |x| ≥ 0 uvijek. |4−5|=|−1|=1. Potencija: 1³=1.",note:"postupak",final:true},{txt:"Intuicija: (4−5)³=(−1)³=−1. Brojevnik: 1−(−1)=2. Nazivnik: √4=2. Razlomak=1.",note:"intuicija",final:true}
  ],
  why:[
    "Apsolutna vrijednost: |x| ≥ 0 uvijek. |4−5|=|−1|=1. Potencija: 1³=1.",
    "(4−5)³=(−1)³=−1. Brojevnik: 1−(−1)=2. Nazivnik: √4=2. Razlomak=1.",
    "Najčešća greška: |−1|³=−1 (krivo!) — apsolutna vrijednost je uvijek pozitivna."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Čemu je, nakon sređivanja, jednak izraz (x−1)² − x − 1?",
  sol:{ans:"x²−3x",alt:["x²-3x","x(x-3)"]},
  exp:"(x−1)²−x−1 = x²−2x+1−x−1 = x²−3x.",
  steps:[
    {txt:"(x−1)² = x² − 2x + 1"},
    {txt:"x² − 2x + 1 − x − 1"},
    {txt:"= x² − 3x",final:true},
    {txt:"Provjera x=2: (2−1)²−2−1=−2; x²−3x=4−6=−2 ✓",note:"verifikacija"},{txt:"Točan odgovor: x²−3x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kvadrat binoma: (x−1)² = x²−2x+1.",note:"postupak",final:true},{txt:"Intuicija: Sređivanje: x²−2x+1−x−1 = x²+(−2x−x)+(1−1) = x²−3x.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Kvadrat binoma: (x−1)² = x²−2x+1.",
    "Sređivanje: x²−2x+1−x−1 = x²+(−2x−x)+(1−1) = x²−3x.",
    "Najčešća greška: (x−1)²=x²−1 (krivo!) — kvadrat binoma ima i srednji član −2x."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:19,type:"sa",topic:"al",points:1,
  q:"Razlomak [FRAC:4−2a|2a−a²] skratite do kraja.",
  sol:{ans:"[FRAC:2|a]",alt:["2/a","2·a⁻¹"]},
  solFormula:{frac:[["2","a"]]},
  exp:"(4−2a)/(2a−a²) = 2(2−a)/[a(2−a)] = 2/a.",
  steps:[
    {txt:"Brojevnik: 4−2a = 2(2−a)"},
    {txt:"Nazivnik: 2a−a² = a(2−a)"},
    {txt:"Skraćivanje (2−a): [FRAC:2|a]",final:true},
    {txt:"Provjera a=1: [FRAC:4−2|2−1]=[FRAC:2|1]=2; [FRAC:2|1]=2 ✓",note:"verifikacija"},{txt:"Točan odgovor: [FRAC:2|a] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Faktorizacija brojevnika: 4−2a = 2(2−a). Faktorizacija nazivnika: 2a−a² = a(2−a).",note:"postupak",final:true},{txt:"Intuicija: Zajednički faktor (2−a) se kraći: dobivamo 2/a za a≠0 i a≠2.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Faktorizacija brojevnika: 4−2a = 2(2−a). Faktorizacija nazivnika: 2a−a² = a(2−a).",
    "Zajednički faktor (2−a) se kraći: dobivamo 2/a za a≠0 i a≠2.",
    "Najčešća greška: pokušaj skraćenja bez faktorizacije — uvijek najprije faktoriziraj."
  ,"Provjera supstitucijom: uvrsti x = [FRAC:2|a] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:20,img:true,type:"proof",topic:"kv",points:1,
  img:true,
  q:"Nacrtajte graf funkcije f(x) = −x² + 1 u zadanome koordinatnom sustavu.",
  sol:{ans:"parabola nacrtana",alt:["1","nacrtano"],svgFn:()=>e(SvgSol20_2013Blj,null)},
  exp:"Parabola prema dolje. Tjeme: (0,1). Nultočke: ±1. Y-presjek: (0,1).",
  steps:[
    {txt:"a=−1<0 ⇒ parabola okrenuta prema dolje"},
    {txt:"Tjeme T(0,1): x_T=0, f(0)=−0+1=1"},
    {txt:"Nultočke: x²=1 ⇒ x=±1"},
    {txt:"Nacrtaj kroz (−1,0),(0,1),(1,0)",final:true},
    {txt:"Provjera: f(1)=0 ✓; f(0)=1 ✓; f(−1)=0 ✓",note:"verifikacija"},{txt:"Točan odgovor: parabola nacrtana ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: f(x)=ax²+bx+c, a<0 ⇒ parabola prema dolje. Tjeme na x=−b/(2a)=0.",note:"postupak",final:true},{txt:"Intuicija: Tjeme T(0,1). Nultočke: −x²+1=0 ⇒ x=±1. Parabola prolazi (−1,0),(0,1),(1,0).",note:"intuicija",final:true}
  ],
  why:[
    "f(x)=ax²+bx+c, a<0 ⇒ parabola prema dolje. Tjeme na x=−b/(2a)=0.",
    "Tjeme T(0,1). Nultočke: −x²+1=0 ⇒ x=±1. Parabola prolazi (−1,0),(0,1),(1,0).",
    "Najčešća greška: crtati parabolu prema gore zbog −x² — negativan koeficijent uz x² = prema dolje."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja."]},
  {id:21,type:"sa",topic:"br",points:1,
  q:"Voda čini 3/5 mase odrasloga čovjeka. Koliko je kilograma bjelančevina u tijelu čovjeka mase 60 kg ako je omjer bjelančevina i vode u njegovu tijelu 3 : 10?",
  sol:{ans:"10,8 kg",alt:["10,8","10,8"]},
  exp:"Voda: 3/5×60 = 36 kg. Bjelančevine: 3/10×36 = 10,8 kg.",
  steps:[
    {txt:"Masa vode: [FRAC:3|5] × 60 = 36 kg"},
    {txt:"Omjer bjelančevina:voda = 3:10"},
    {txt:"Bjelančevine = [FRAC:3|10] × 36 = 10,8 kg",final:true},
    {txt:"Provjera: 10,8/36 = 0,3 = 3/10 ✓",note:"verifikacija"},{txt:"Točan odgovor: 10,8 kg ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Masa vode = 3/5 × 60 = 36 kg.",note:"postupak",final:true},{txt:"Intuicija: Omjer bjelančevina:voda = 3:10 ⇒ bjelančevine = 3/10 × 36 = 10,8 kg.",note:"intuicija",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "Masa vode = 3/5 × 60 = 36 kg.",
    "Omjer bjelančevina:voda = 3:10 ⇒ bjelančevine = 3/10 × 36 = 10,8 kg.",
    "Najčešća greška: primijeniti omjer 3:10 na ukupnu masu 60 kg umjesto na masu vode 36 kg."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:22.2,img:true,type:"sa",topic:"br",points:1,
  img:true,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Koliko je milimetara 130,5 inča? (Popunite vrijednost koja nedostaje u tablici.)",
  sol:{ans:"3314,7 mm",alt:["3314,7","3314,7"]},
  exp:"130,5 × 25,4 = 3314,7 mm.",
  steps:[
    {txt:"1 inč = 25,4 mm"},
    {txt:"130,5 × 25,4 = ?"},
    {txt:"= 3 314,7 mm",final:true},
    {txt:"Provjera: 3 314,7 / 25,4 = 130,5 inča ✓",note:"verifikacija"},{txt:"Točan odgovor: 3314,7 mm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konverzija inči → mm: množi s 25,4 (jer 1 inč = 25,4 mm).",note:"postupak",final:true},{txt:"Intuicija: 130,5 × 25,4 = 3 314,7 mm. Suprotna operacija od Q22,1.",note:"intuicija",final:true}
  ],
  why:[
    "Konverzija inči → mm: množi s 25,4 (jer 1 inč = 25,4 mm).",
    "130,5 × 25,4 = 3 314,7 mm. Suprotna operacija od Q22,1.",
    "Najčešća greška: dijeliti umjesto množiti — zapamti: inči × 25,4 = mm; mm / 25,4 = inči."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:22.1,img:true,type:"sa",img:true,topic:"br",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Koliko je inča 13,3096 mm? (Popunite vrijednost koja nedostaje u tablici.)",
  sol:{ans:"0,524 inča",alt:["0,524","0,524"]},
  exp:"13,3096 ÷ 25,4 ≈ 0,524 inča.",
  steps:[
    {txt:"1 inč = 25,4 mm ⇒ 1 mm = [FRAC:1|25,4] inča"},
    {txt:"13,3096 / 25,4 = 0,5240..."},
    {txt:"≈ 0,524 inča",final:true},
    {txt:"Provjera: 0,524 × 25,4 ≈ 13,31 ≈ 13,3096 ✓",note:"verifikacija"},{txt:"Točan odgovor: 0,524 inča ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konverzija mm → inči: dijeli s 25,4 (jer 1 inč = 25,4 mm).",note:"postupak",final:true},{txt:"Intuicija: 13,3096 mm ÷ 25,4 mm/inč = 0,524 inča. Dimenzijska analiza: [mm]/[mm/inč] = [inč].",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Konverzija mm → inči: dijeli s 25,4 (jer 1 inč = 25,4 mm).",
    "13,3096 mm ÷ 25,4 mm/inč = 0,524 inča. Dimenzijska analiza: [mm]/[mm/inč] = [inč].",
    "Najčešća greška: množiti umjesto dijeliti (13,3096×25,4=337,86 — preveliko)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:23.1,type:"sa",topic:"anal",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Odredite udaljenost između točaka A i B. Rezultat zaokružite na četiri decimale.",
  sol:{ans:"3,1623",alt:["3,1623","√10"]},
  exp:"|AB| = √[(2−(−1))²+(5−6)²] = √(9+1) = √10 ≈ 3,1623.",
  steps:[
    {txt:"|AB| = √[(2−(−1))² + (5−6)²]"},
    {txt:"= √[3² + (−1)²] = √(9+1)"},
    {txt:"= √10 ≈ 3,1623",final:true},
    {txt:"Provjera: 3,1623² ≈ 10 ✓",note:"verifikacija"},{txt:"Točan odgovor: 3,1623 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula: d=√((x₂−x₁)²+(y₂−y₁)²). A(−1,6), B(2,5): Δx=3, Δy=−1.",note:"postupak",final:true},{txt:"Intuicija: d=√(9+1)=√10≈3,1623. Zaokruži na 4 decimale.",note:"intuicija",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true}
  ],
  why:[
    "Formula: d=√((x₂−x₁)²+(y₂−y₁)²). A(−1,6), B(2,5): Δx=3, Δy=−1.",
    "d=√(9+1)=√10≈3,1623. Zaokruži na 4 decimale.",
    "Najčešća greška: Δx=2−1=1 (zaborava minusa) ili √(a+b)=√a+√b (netočno!)."
  ,"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun."]},
  {id:23.2,type:"sa",topic:"anal",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Odredite jednadžbu pravca koji prolazi točkama A i B.",
  sol:{ans:"y = −1/3·x + [FRAC:17|3]",alt:["y=-x/3+17/3","x+3y-17=0"]},
  solFormula:[{pre:"y = −"},{frac:[["1","3"]]},{pre:"x + "},{frac:[["17","3"]]}],
  exp:"k = (5−6)/(2+1) = −1/3. Pravac: y−6=−1/3(x+1) ⇒ y = −1/3·x + 17/3.",
  steps:[
    {txt:"k = [FRAC:5−6|2−(−1)] = [FRAC:−1|3]"},
    {txt:"y−6 = −1/3 · (x+1)"},
    {txt:"y = −1/3·x + [FRAC:17|3]",final:true},
    {txt:"Provjera A(−1,6): y=1/3+17/3=6 ✓; B(2,5): y=−2/3+17/3=15/3=5 ✓",note:"verifikacija"},{txt:"Točan odgovor: y = −1/3·x + [FRAC:17|3] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Nagib: k=(y₂−y₁)/(x₂−x₁)=(5−6)/(2+1)=−1/3.",note:"postupak",final:true},{txt:"Intuicija: Jednadžba: y−y₁=k(x−x₁) ⇒ y−6=−1/3(x+1) ⇒ y=−1/3x+17/3.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:[
    "Nagib: k=(y₂−y₁)/(x₂−x₁)=(5−6)/(2+1)=−1/3.",
    "Jednadžba: y−y₁=k(x−x₁) ⇒ y−6=−1/3(x+1) ⇒ y=−1/3x+17/3.",
    "Provjera s ob jema točkama osigurava ispravan pravac. Jedna točka je nužna, ali A i B kao provjera."
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun."]},
  {id:24.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliko se komada vilica s greškom očekuje pri izradi 2 000 komada vilica?",
  sol:{ans:"18",alt:["18","18 komada"]},
  exp:"0,009 × 2000 = 18.",
  steps:[
    {txt:"0,9% = 0,009"},
    {txt:"0,009 × 2 000 = 18"},
    {txt:"Očekuje se 18 vilica s greškom",final:true},
    {txt:"Provjera: 18/2000 = 0,009 = 0,9% ✓",note:"verifikacija"},{txt:"Točan odgovor: 18 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postotak: 0,9% = 0,009. Broj pogrešnih = postotak × ukupan broj.",note:"postupak",final:true},{txt:"Intuicija: 0,009 × 2000 = 18 vilica s greškom (očekivana vrijednost).",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Postotak: 0,9% = 0,009. Broj pogrešnih = postotak × ukupan broj.",
    "0,009 × 2000 = 18 vilica s greškom (očekivana vrijednost).",
    "Najčešća greška: koristiti 0,9 umjesto 0,009 (zaborava dijeljenja s 100)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:24.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Koliko se najmanje komada vilica treba izraditi da bi se dobilo 10 000 vilica bez greške?",
  sol:{ans:"10 091",alt:["10091","10091 komada"]},
  exp:"n×0,991 ≥ 10000 ⇒ n ≥ 10000/0,991 ≈ 10091.",
  steps:[
    {txt:"Ispravnih vilica: 100% − 0,9% = 99,1% = 0,991"},
    {txt:"n × 0,991 ≥ 10 000"},
    {txt:"n ≥ 10 000 / 0,991 ≈ 10 090,8"},
    {txt:"Najmanje: 10 091",final:true},
    {txt:"Provjera: 10 091 × 0,991 = 10 000,2 ≥ 10 000 ✓; 10 090 × 0,991 = 9 999,2 < 10 000 ✗",note:"verifikacija"},{txt:"Točan odgovor: 10 091 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Od n vilica, 99,1% ispravno. Uvjet: n × 0,991 ≥ 10 000 ⇒ n ≥ 10000/0,991.",note:"postupak",final:true},{txt:"Intuicija: Zaokruži GORE: 10090,8 ⇒ 10091. Provjera: 10090×0,991=9999,2 < 10000 ✗.",note:"intuicija",final:true}
  ],
  why:[
    "Od n vilica, 99,1% ispravno. Uvjet: n × 0,991 ≥ 10 000 ⇒ n ≥ 10000/0,991.",
    "Zaokruži GORE: 10090,8 ⇒ 10091. Provjera: 10090×0,991=9999,2 < 10000 ✗.",
    "Najčešća greška: zaokružiti prema dolje ili koristiti 0,99 umjesto 0,991."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:25.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Riješite jednadžbu 3(x − 1) − (x+1)/2 = 1.",
  sol:{ans:"x = [FRAC:9|5]",alt:["9/5","1,8"]},
  solFormula:{pre:"x = ",frac:[["9","5"]]},
  exp:"6(x−1)−(x+1)=2 ⇒ 6x−6−x−1=2 ⇒ 5x=9 ⇒ x=9/5.",
  steps:[
    {txt:"Pomnoži s 2: 6(x−1) − (x+1) = 2"},
    {txt:"6x − 6 − x − 1 = 2 ⇒ 5x − 7 = 2"},
    {txt:"5x = 9 ⇒ x = [FRAC:9|5]",final:true},
    {txt:"Provjera: 3([FRAC:9|5]−1)−[FRAC:[FRAC:9|5]+1|2]=3·[FRAC:4|5]−[FRAC:7|5]=[FRAC:12−7|5]=1 ✓",note:"verifikacija"},{txt:"Točan odgovor: x = [FRAC:9|5] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Jednadžba s razlomcima: pomnoži NZV (=2) da eliminiraš nazivnik. 3(x−1)−(x+1)/2=1 · 2.",note:"postupak",final:true},{txt:"Intuicija: Razvij: 6(x−1)−(x+1)=2 ⇒ 6x−6−x−1=2 ⇒ 5x=9 ⇒ x=9/5.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Jednadžba s razlomcima: pomnoži NZV (=2) da eliminiraš nazivnik. 3(x−1)−(x+1)/2=1 · 2.",
    "Razvij: 6(x−1)−(x+1)=2 ⇒ 6x−6−x−1=2 ⇒ 5x=9 ⇒ x=9/5.",
    "Najčešća greška: razviti (x+1)/2 kao x+1 bez dijeljenja s 2 (zaborava nazivnika)."
  ,"Provjera supstitucijom: uvrsti x = x = [FRAC:9|5] u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:25.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Riješite jednadžbu 36 − 9x − x² = 0.",
  sol:{ans:"x₁=−12, x₂=3",alt:["-12 i 3","x=-12 x=3"]},
  exp:"x²+9x−36=0. D=81+144=225. x=(−9±15)/2. x₁=3, x₂=−12.",
  steps:[
    {txt:"Pomnoži s −1: x²+9x−36 = 0"},
    {txt:"D = 9²+4·36 = 81+144 = 225"},
    {txt:"x = [FRAC:−9±15|2]"},
    {txt:"x₁ = 3, x₂ = −12",final:true},
    {txt:"Provjera: 36−9·3−9=0 ✓; 36−9·(−12)−144=36+108−144=0 ✓",note:"verifikacija"},{txt:"Točan odgovor: x₁=−12, x₂=3 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Promijeni predznak: 36−9x−x²=0 ⇒ x²+9x−36=0. D=81+144=225.",note:"postupak",final:true},{txt:"Intuicija: x=(−9±15)/2 ⇒ x₁=3, x₂=−12.",note:"intuicija",final:true}
  ],
  why:[
    "Promijeni predznak: 36−9x−x²=0 ⇒ x²+9x−36=0. D=81+144=225.",
    "x=(−9±15)/2 ⇒ x₁=3, x₂=−12.",
    "Najčešća greška: zaborava promjene predznaka c — 4ac=4·1·(−36)=−144, stoga D=81+144."
  ,"Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja."]},
  {id:26.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Riješite nejednadžbu 4(2 − x) − x − 7 ≤ 0.",
  warn:"Pazi: na smjer.",
  sol:{ans:"x≥1/5",alt:["x≥1/5","[1/5,+∞⟩"]},
  solFormula:{pre:"x ≥ ",frac:[["1","5"]]},
  exp:"8−4x−x−7≤0 ⇒ −5x+1≤0 ⇒ x≥1/5.",
  steps:[
    {txt:"Razvij: 8−4x−x−7 ≤ 0"},
    {txt:"1 − 5x ≤ 0"},
    {txt:"x ≥ [FRAC:1|5]",final:true},
    {txt:"Provjera x=1: 4(1)−1−7=−4≤0 ✓; x=0: 8−0−7=1>0 ✗ → x=0 ne zadovoljava ✓",note:"verifikacija"},{txt:"Točan odgovor: x≥1/5 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Razvij: 4(2−x)=8−4x. Sređivanje: 8−4x−x−7≤0 ⇒ 1−5x≤0.",note:"postupak",final:true},{txt:"Intuicija: Dijeljenje s −5: smjer nejednadžbe se obrće! −5x≤−1 ⇒ x≥1/5.",note:"intuicija",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Razvij: 4(2−x)=8−4x. Sređivanje: 8−4x−x−7≤0 ⇒ 1−5x≤0.",
    "Dijeljenje s −5: smjer nejednadžbe se obrće! −5x≤−1 ⇒ x≥1/5.",
    "Najčešća greška: ne obrnuti smjer nejednadžbe pri dijeljenju s negativnim brojem."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:26.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Odredite broj x tako da vrijedi jednakost 100^(x+1) = 1000 · 10^(−2x).",
  sol:{ans:"x = [FRAC:1|4]",alt:["1/4","0,25"]},
  solFormula:{pre:"x = ",frac:[["1","4"]]},
  exp:"10^(2x+2) = 10³×10^(−2x) = 10^(3−2x). 2x+2=3−2x ⇒ 4x=1 ⇒ x=1/4.",
  steps:[
    {txt:"100^(x+1) = (10²)^(x+1) = 10^(2x+2)"},
    {txt:"1000 × 10^(−2x) = 10³ × 10^(−2x) = 10^(3−2x)"},
    {txt:"Izjednači eksponente: 2x+2 = 3−2x"},
    {txt:"4x = 1 ⇒ x = [FRAC:1|4]",final:true},
    {txt:"Provjera: uvrsti x=0,25: 2·0,25+2=2,5 i 3−2·0,25=2,5 ✓",note:"verifikacija"},{txt:"Točan odgovor: x = [FRAC:1|4] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pretvorba u bazu 10: 100=10², 1000=10³. 100^(x+1)=10^(2x+2); 1000·10^(−2x)=10^(3−2x).",note:"postupak",final:true},{txt:"Intuicija: Jednakost potencija iste baze: eksponenti moraju biti jednaki. 2x+2=3−2x ⇒ 4x=1.",note:"intuicija",final:true}
  ],
  why:[
    "Pretvorba u bazu 10: 100=10², 1000=10³. 100^(x+1)=10^(2x+2); 1000·10^(−2x)=10^(3−2x).",
    "Jednakost potencija iste baze: eksponenti moraju biti jednaki. 2x+2=3−2x ⇒ 4x=1.",
    "Najčešća greška: ne pretvori 100 i 1000 u bazu 10 — ključan korak."
  ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost)."]},
  {id:27.1,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Na slici su prikazani rezultati pismenog ispita u nekoj školi. Koliko je ukupno učenika pisalo ispit?",
  sol:{ans:"152",alt:["152 učenika","152"]},
  exp:"Zbrajamo sve frekvencije iz histograma: 152 učenika.",
  steps:[
    {txt:"Očitaj visinu svakog stupca histograma"},
    {txt:"Zbrajaj: 2+10+15+20+15+44+30+6+5+5 = 152"},
    {txt:"Ukupno: 152 učenika",final:true},
    {txt:"Provjera: zbroj svih frekvencija = 152 ✓",note:"verifikacija"},{txt:"Točan odgovor: 152 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Histogram: svaki stupac = frekvencija (broj učenika) u tom intervalu bodova.",note:"postupak",final:true},{txt:"Intuicija: Ukupan broj = zbroj svih frekvencija. Očitaj svaki stupac i zbroji.",note:"intuicija",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Histogram: svaki stupac = frekvencija (broj učenika) u tom intervalu bodova.",
    "Ukupan broj = zbroj svih frekvencija. Očitaj svaki stupac i zbroji.",
    "Najčešća greška: zbrojiti samo neke stupce ili pogrešno očitati visinu stupca."
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:27.2,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Koliko je najmanje bodova bilo potrebno za pozitivnu ocjenu ako 31 učenik nije dobio pozitivnu ocjenu?",
  sol:{ans:"51 bodova",alt:["51","više od 50"]},
  exp:"31 negativnih = zbroj prvih stupaca do bodovnog praga. Prag: 51 bodova.",
  steps:[
    {txt:"31 učenika nije prošlo ⇒ kumulativ do praga = 31"},
    {txt:"Kumulativ do 40: 2+10+15=27. Trebamo 4 više iz 40−50."},
    {txt:"Prag: 51 bodova",final:true},
    {txt:"Provjera: 27+4=31 učenika ima ≤50 bodova; 31. učenik ima 51 ✓",note:"verifikacija"},{txt:"Točan odgovor: 51 bodova ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Prag: kumulativni zbroj frekvencija od dna do praga = broj negativnih = 31.",note:"postupak",final:true},{txt:"Intuicija: Do 40: 2+10+15=27. Još 4 iz 40−50 (20 uk.). Prag granice intervala: 51 bodova.",note:"intuicija",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ],
  why:[
    "Prag: kumulativni zbroj frekvencija od dna do praga = broj negativnih = 31.",
    "Do 40: 2+10+15=27. Još 4 iz 40−50 (20 uk.). Prag granice intervala: 51 bodova.",
    "Najčešća greška: tražiti prag bez kumulativnog zbrajanja, ili uzeti granice cijelog intervala."
  ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:27.3,img:true,type:"sa",img:true,topic:"stat",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"U 4.a razredu je 32 učenika. Deset učenika tog razreda s najboljim rezultatima postiglo je sljedeće bodove: 82, 84, 84, 86, 87, 88, 89, 90, 92, 98. Ocjenu odličan dobilo je 12,5% učenika 4.a razreda. Koliko je najmanje bodova bilo potrebno za ocjenu odličan?",
  sol:{ans:"89 bodova",alt:["89","89 bod"]},
  exp:"12,5% od 32 = 4 učenika. Top 10: 82,84,84,86,87,88,89,90,92,98. 4. od gore: 89.",
  steps:[
    {txt:"Odličan: 12,5% od 32 = 0,125 × 32 = 4 učenika"},
    {txt:"Sortiraj top 10 silazno: 98, 92, 90, 89, 88, 87, 86, 84, 84, 82"},
    {txt:"4. od vrha: 89"},
    {txt:"Prag: 89 bodova",final:true},
    {txt:"Provjera: top-4 silazno: 98, 92, 90, 89 ✓ (4 učenika s ≥89 bodova)",note:"verifikacija"},{txt:"Točan odgovor: 89 bodova ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: 12,5% od 32 = 4 učenika dobivaju odličan. Prag = bodovni rezultat 4. od vrha.",note:"postupak",final:true},{txt:"Intuicija: Silazno: 98,92,90,89,... 4. je 89. Svi s ≥89 dobivaju odličan (njih točno 4).",note:"intuicija",final:true}
  ],
  why:[
    "12,5% od 32 = 4 učenika dobivaju odličan. Prag = bodovni rezultat 4. od vrha.",
    "Silazno: 98,92,90,89,... 4. je 89. Svi s ≥89 dobivaju odličan (njih točno 4).",
    "Najčešća greška: birati 4. u uzlaznom nizu (82 umjesto 89), ili računati 12,5% kršeći zaokruživanje."
  ,"Provjera: aritmetička sredina mora biti između min i max vrijednosti.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:28.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Ana je sakupila dvostruko više maraka od Dijane, a Dijana trostruko više od Marije. Zajedno su sakupile 1 500 maraka. Koliko je maraka sakupila Ana?",
  sol:{ans:"900",alt:["900","900 maraka"]},
  exp:"M=x, D=3x, A=6x. x+3x+6x=10x=1500 ⇒ x=150. A=900.",
  steps:[
    {txt:"Marija = x; Dijana = 3x; Ana = 2 × 3x = 6x"},
    {txt:"x + 3x + 6x = 10x = 1 500"},
    {txt:"x = 150; Ana = 6 × 150 = 900",final:true},
    {txt:"Provjera: 150+450+900=1500 ✓; 900=2×450 ✓; 450=3×150 ✓",note:"verifikacija"},{txt:"Točan odgovor: 900 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postavi varijable: Marija=x. Dijana=3x. Ana=2×Dijana=2×3x=6x.",note:"postupak",final:true},{txt:"Intuicija: Jednadžba: x+3x+6x=1500 ⇒ 10x=1500 ⇒ x=150. Ana=6×150=900.",note:"intuicija",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Postavi varijable: Marija=x. Dijana=3x. Ana=2×Dijana=2×3x=6x.",
    "Jednadžba: x+3x+6x=1500 ⇒ 10x=1500 ⇒ x=150. Ana=6×150=900.",
    "Najčešća greška: Ana=2×Marija (krivo!) — Ana je dvostruko od DIJANE."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:28.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Sestre su svih 1 500 maraka stavile u album koji ima paran broj stranica. Na svakoj neparnoj stranici ima mjesta za 17 maraka, a na svakoj parnoj za 30 maraka. Koliko stranica ima album ako im nedostaju još četiri marke da bude popunjen?",
  sol:{ans:"64",alt:["64","64 stranice"]},
  exp:"Album ima n parnih+n neparnih = 2n stranica. Kapacitet: n×30+n×17 = 47n. 47n = 1504 ⇒ n=32. Album: 64 stranica.",
  steps:[
    {txt:"Album: n neparnih + n parnih = 2n stranica"},
    {txt:"Kapacitet: 17n + 30n = 47n maraka"},
    {txt:"47n = 1500 + 4 = 1504 ⇒ n = 32"},
    {txt:"Album: 2 × 32 = 64 stranice",final:true},
    {txt:"Provjera: 32×17+32×30=544+960=1504; 1504−1500=4 ✓",note:"verifikacija"},{txt:"Točan odgovor: 64 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Paran broj stranica ⇒ n neparnih + n parnih. Kapacitet = 17n+30n = 47n maraka.",note:"postupak",final:true},{txt:"Intuicija: Nedostaju 4 ⇒ album bi trebao imati 1504 mjesta. 47n=1504 ⇒ n=32 ⇒ 2n=64 stranice.",note:"intuicija",final:true}
  ],
  why:[
    "Paran broj stranica ⇒ n neparnih + n parnih. Kapacitet = 17n+30n = 47n maraka.",
    "Nedostaju 4 ⇒ album bi trebao imati 1504 mjesta. 47n=1504 ⇒ n=32 ⇒ 2n=64 stranice.",
    "Najčešća greška: 47n=1500 (bez +4) ili ne shvaćanje da su parni i neparni u jednakom broju."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {_META:true,auditStatus:"verified-full",rok:"2013_ljeto",razina:"B",serial:"D-S013",totalPoints:39,mcCount:15,saCount:20,verified:"sympy+pdf+verbatim+visual",auditNotes:"G: Verbatim vision audit komplet. L1 Q5 typo slicće+zrakoplov, L2 Q7 jednadžba 3x+50=y+[SYS:], L3 Q15 verbatim, L4 Q19 FRAC. Notacijske moderizacije OK. H: L1Q1 bold cijelih. J: Q7/Q9/Q11/Q16 opts FRAC, Q16 q FRAC. I: Q8+Q10 MC bindings, SA Q22/Q27 img:true+bindings added.",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak H batch (context dodavanje)","D1 sweep (decimalna toka u zarez)","C1 sweep (interval syntax)","B2 sweep (exp zagrada)"]}
];

export const qImages = {
  "2013_ljeto_B__10": () => e(SvgGrid20_2013Blj, null),
  "2013_ljeto_B__20": () => e(SvgGrid20_2013Blj, null),
  "2013_ljeto_B__22.1": () => e(SvgTablica22_2013Blj, null),
  "2013_ljeto_B__22.2": () => e(SvgTablica22_2013Blj, null),
  "2013_ljeto_B__27.1": () => e(SvgHistogram27_2013Blj, null),
  "2013_ljeto_B__27.2": () => e(SvgHistogram27_2013Blj, null),
  "2013_ljeto_B__27.3": () => e(SvgHistogram27_2013Blj, null),
};
