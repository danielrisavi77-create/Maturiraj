// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad28_2015JB(){
  const uid=()=>"t28"+(++_s15jk);
  const W=480, H=130;
  // Stupci: [labela, Taksi A, Taksi B, Taksi C]
  const colW=[148, 110, 110, 110];
  const rowH=36;
  const xs=[0,148,258,368];
  const hdrs=["","TAKSI A","TAKSI B","TAKSI C"];
  const hdrColors=["","var(--blue)","#e8c547","#3dd68c"];
  const rows=[
    ["Startnina","10,00 kn","5,00 kn","20,00 kn"],
    ["Cijena 1 km vožnje","3,00 kn","4,00 kn","1,50 kn"]
  ];
  const valColors=["","var(--blue)","#e8c547","#3dd68c"];

  const els=[];
  // Header
  hdrs.forEach((h,ci)=>{
    const x=xs[ci], w=colW[ci];
    els.push(e("rect",{key:uid(),x,y:0,width:w,height:rowH,
      fill:ci===0?"#161825":"#1e2235",stroke:"rgba(255,255,255,0.08)",strokeWidth:0.8}));
    if(h) els.push(e("text",{key:uid(),x:x+w/2,y:rowH/2+5,
      fill:hdrColors[ci],fontSize:11,fontWeight:800,textAnchor:"middle",letterSpacing:"0.5"},h));
  });
  // Redovi
  rows.forEach((row,ri)=>{
    row.forEach((cell,ci)=>{
      const x=xs[ci], w=colW[ci], y=(ri+1)*rowH;
      const bg=ri===0?"#1a1d2e":"#171a28";
      els.push(e("rect",{key:uid(),x,y,width:w,height:rowH,
        fill:ci===0?"#1c1f31":bg,stroke:"rgba(255,255,255,0.06)",strokeWidth:0.8}));
      if(ci===0){
        // Label - sivi tekst
        els.push(e("text",{key:uid(),x:x+10,y:y+rowH/2+5,
          fill:"#9099b0",fontSize:10,fontWeight:600},cell));
      } else {
        // Vrijednost - u boji stupca
        els.push(e("text",{key:uid(),x:x+w/2,y:y+rowH/2+5,
          fill:valColors[ci],fontSize:12,fontWeight:700,textAnchor:"middle"},cell));
      }
    });
  });
  // Horizontalna linija ispod headera
  els.push(e("line",{key:uid(),x1:0,y1:rowH,x2:W-2,y2:rowH,stroke:"rgba(255,255,255,0.15)",strokeWidth:1}));
  // Vertikalne linije između stupaca
  [148,258,368].forEach(x=>
    els.push(e("line",{key:uid(),x1:x,y1:0,x2:x,y2:H-2,stroke:"rgba(255,255,255,0.08)",strokeWidth:0.8}))
  );
  // Vanjski border
  els.push(e("rect",{key:uid(),x:0,y:0,width:W-2,height:H-2,
    fill:"none",stroke:"rgba(255,255,255,0.12)",strokeWidth:1,rx:6}));

  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",borderRadius:8,marginBottom:10}},
    ...els
  );
}

function SvgZad24_2015JB(){
  // Stupčasti dijagram dohodaka
  const W=320,H=210;
  const months=["SIJ","VELJ","OŽU","TRV"];
  const vals=[5370,4982,5010,5428];
  const colors=["var(--blue)","var(--blue)","var(--blue)","#3dd68c"];
  const barW=45,gap=18,leftPad=50,topPad=20,botPad=40;
  const chartH=H-topPad-botPad;
  const minV=4800,maxV=5500,range=maxV-minV;
  const yScale=(v)=>chartH-(v-minV)/range*chartH;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Gridlines
    ...[4800,4900,5000,5100,5200,5300,5400,5500].map(v=>
      e("line",{key:_uid15j(),x1:leftPad,y1:topPad+yScale(v),x2:W-10,y2:topPad+yScale(v),stroke:"#2a2d3e",strokeWidth:0.8})
    ),
    // Y osi oznake
    ...[4900,5000,5100,5200,5300,5400,5500].map(v=>
      e("text",{key:_uid15j(),x:leftPad-4,y:topPad+yScale(v)+4,fill:"var(--muted)",fontSize:8,textAnchor:"end"},v)
    ),
    // Y os
    e("line",{key:_uid15j(),x1:leftPad,y1:topPad,x2:leftPad,y2:topPad+chartH,stroke:"var(--muted)",strokeWidth:1.2}),
    // Stupci
    ...vals.map((v,i)=>{
      const x=leftPad+10+i*(barW+gap);
      const barH=chartH-yScale(v);
      return e("g",{key:_uid15j()},
        e("rect",{x,y:topPad+yScale(v),width:barW,height:barH,fill:colors[i],rx:2}),
        e("text",{x:x+barW/2,y:topPad+yScale(v)-4,fill:"var(--text)",fontSize:9,textAnchor:"middle"},v),
        e("text",{x:x+barW/2,y:topPad+chartH+14,fill:"var(--muted)",fontSize:9,textAnchor:"middle"},months[i])
      );
    }),
    e("text",{key:_uid15j(),x:W/2,y:H-2,fill:"var(--muted)",fontSize:9,textAnchor:"middle"},"Osobni dohodak (kn)")
  );
}

function SvgZad23b_2015JB(){
  // f(x)=-1/3x+2, prolazi (0,2) i (6,0)
  const W=320,H=260,cx=90,cy=130,sc=30;
  const grid=[];
  for(let i=-2;i<=7;i++) grid.push(e("line",{key:_uid15j(),x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  for(let i=-3;i<=3;i++) grid.push(e("line",{key:_uid15j(),x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...grid,
    e("line",{key:_uid15j(),x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{key:_uid15j(),x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{key:_uid15j(),points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{key:_uid15j(),points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{key:_uid15j(),x:W-8,y:cy+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"x"),
    e("text",{key:_uid15j(),x:cx+4,y:10,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"y"),
    e("text",{key:_uid15j(),x:cx+4,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    ...[1,2,3,4,5,6].map(i=>e("text",{key:_uid15j(),x:cx+i*sc-4,y:cy+13,fill:"var(--muted)",fontSize:9},i)),
    ...[-3,-2,-1,1,2,3].map(i=>e("text",{key:_uid15j(),x:cx-16,y:cy-i*sc+4,fill:"var(--muted)",fontSize:9},i)),
    // Pravac: kroz (0,2) i (6,0)
    e("line",{key:_uid15j(),x1:cx-1*sc,y1:cy-(-1/3*(-1)+2)*sc,x2:cx+7*sc,y2:cy-(-1/3*7+2)*sc,
      stroke:"var(--blue)",strokeWidth:2.5}),
    // Ključne točke
    e("circle",{key:_uid15j(),cx:cx,cy:cy-2*sc,r:5,fill:"#e8c547"}),
    e("text",{key:_uid15j(),x:cx+5,y:cy-2*sc-5,fill:"#e8c547",fontSize:10},"(0,2)"),
    e("circle",{key:_uid15j(),cx:cx+6*sc,cy:cy,r:5,fill:"#e8c547"}),
    e("text",{key:_uid15j(),x:cx+6*sc+5,y:cy-5,fill:"#e8c547",fontSize:10},"(6,0)"),
    e("text",{key:_uid15j(),x:cx+2*sc,y:cy-1.5*sc,fill:"var(--blue)",fontSize:10,fontStyle:"italic"},"f(x)=−x/3+2")
  );
}

function SvgZad11_2015JB(){
  const uid=()=>"q11"+(++_s15jk);
  const sc=30; // 30px po jedinici — sve vidljivo

  function makeSVG(fn, cx, cy, W, H, gvRange, ghRange, nulls, color){
    const toX=x=>cx+x*sc, toY=y=>cy-y*sc;
    // Grid
    const grid=[];
    for(let i=gvRange[0];i<=gvRange[1];i++) grid.push(e("line",{key:uid(),x1:toX(i),y1:5,x2:toX(i),y2:H-5,stroke:"#1e2130",strokeWidth:0.8}));
    for(let i=ghRange[0];i<=ghRange[1];i++) grid.push(e("line",{key:uid(),x1:5,y1:toY(i),x2:W-5,y2:toY(i),stroke:"#1e2130",strokeWidth:0.8}));
    // Path
    const xPxStart=0, xPxEnd=W;
    const xStart=(xPxStart-cx)/sc, xEnd=(xPxEnd-cx)/sc;
    let path="", pen=false;
    for(let x=xStart;x<=xEnd;x+=0.025){
      const y=fn(x);
      const px=toX(x), py=toY(y);
      if(py<-10||py>H+10){pen=false;continue;}
      if(!pen){path+=`M ${px.toFixed(1)},${py.toFixed(1)}`;pen=true;}
      else path+=` L ${px.toFixed(1)},${py.toFixed(1)}`;
    }
    // Axis number labels
    const xLabels=[], yLabels=[];
    for(let i=gvRange[0];i<=gvRange[1];i++){
      if(i===0) continue;
      const px=toX(i);
      if(px>8&&px<W-8) xLabels.push(e("text",{key:uid(),x:px-4,y:cy+13,fill:"var(--muted)",fontSize:10},i));
    }
    for(let i=ghRange[0];i<=ghRange[1];i++){
      if(i===0) continue;
      const py=toY(i);
      if(py>8&&py<H-8) yLabels.push(e("text",{key:uid(),x:cx+4,y:py+4,fill:"var(--muted)",fontSize:10},i));
    }
    return e("svg",{viewBox:`0 0 ${W} ${H}`,
      style:{width:"100%",display:"block",background:"var(--s2)",borderRadius:6,border:"1px solid var(--bdr)"}},
      ...grid,
      e("line",{key:uid(),x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
      e("line",{key:uid(),x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--muted)",strokeWidth:1.5}),
      e("polygon",{key:uid(),points:`${W-5},${cy} ${W-14},${cy-4} ${W-14},${cy+4}`,fill:"var(--muted)"}),
      e("polygon",{key:uid(),points:`${cx},5 ${cx-4},14 ${cx+4},14`,fill:"var(--muted)"}),
      e("text",{key:uid(),x:W-4,y:cy+5,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
      e("text",{key:uid(),x:cx+4,y:12,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
      e("text",{key:uid(),x:cx+3,y:cy+13,fill:"var(--muted)",fontSize:10},"0"),
      ...xLabels,...yLabels,
      e("path",{key:uid(),d:path,fill:"none",stroke:color,strokeWidth:2.5}),
      ...nulls.map(n=>{
        const px=toX(n);
        if(px<4||px>W-4) return null;
        return e("circle",{key:uid(),cx:px,cy:cy,r:4,fill:"var(--s2)",stroke:color,strokeWidth:1.8});
      }).filter(Boolean),
    );
  }

  // A: 2(x-1)(x+2), gore
  // cx=140 → y-os daleko desno, nultočka -2 rubno vidljiva
  // cy=110 → x-os pri dnu, tjeme(-0.5,-4.5) vidljivo ispod
  // W=290,H=240
  const fA=x=>2*(x-1)*(x+2);
  const svgA=makeSVG(fA,140,110,290,230,[-4,1],[-4,3],[-2,1],"var(--blue)");

  // B: 2x(x-1), gore, tjeme(0.5,-0,5) — plitko, nultočke 0 i 1
  // cx=80, cy=105 — x-os pri sredini, puno prostora gore
  // W=290,H=220
  const fB=x=>2*x*(x-1);
  const svgB=makeSVG(fB,80,105,290,220,[-2,5],[-2,4],[0,1],"#f87171");

  // C: -2(x-1)(x+2), dolje, tjeme(-0.5,4.5) — visoko
  // cx=140, cy=140 — y-os desno, x-os pri dnu
  // W=290,H=230
  const fC=x=>-2*(x-1)*(x+2);
  const svgC=makeSVG(fC,140,140,290,230,[-4,1],[-3,5],[-2,1],"#3dd68c");

  // D: -2x(x-1), dolje, tjeme(0.5,0,5) — blago, nultočke 0 i 1
  // cx=80, cy=110 — x-os pri sredini
  // W=290,H=220
  const fD=x=>-2*x*(x-1);
  const svgD=makeSVG(fD,80,110,290,220,[-2,5],[-4,2],[0,1],"#e8c547");

  return e("div",{style:{width:"100%"}},
    e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--blue)",marginBottom:3}},"A."),svgA),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"#f87171",marginBottom:3}},"B."),svgB),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"#3dd68c",marginBottom:3}},"C."),svgC),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"#e8c547",marginBottom:3}},"D."),svgD)
    )
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: 31/3 ≈ 10,33; [2, 31/3⟩ znači 2 ≤ x < 10,33.",topic:"br",points:1,
  q:"Koji se od navedenih brojeva nalazi u intervalu [2, 31/3⟩?",
  opts:["1,99","5/3","49/6","10,6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"49/6≈8,167. Interval [2, 31/3⟩=[2, 10,333...⟩. 8,167 ∈ [2; 10,333⟩ ✓",
  steps:[
    {txt:"Pretvori granice u decimale: 2 (donja) i 31/3 = 10,333... (gornja, isključena)"},
    {txt:"Provjeri svaku opciju vs interval [2; 10,333...⟩"},
    {txt:"A: 1,99 < 2 → ispod donje granice ✗"},
    {txt:"B: 5/3 ≈ 1,667 < 2 → ispod donje granice ✗"},
    {txt:"C: 49/6 ≈ 8,167 → 2 ≤ 8,167 < 10,333 ✓"},
    {txt:"Distractor: A,B su klasične zamke (negativne ili premale decimale); D je opasna jer 10,6 izgleda blizu 10,333 ali je IZNAD",note:"diagnostika"},
    {txt:"D: 10,6 > 10,333 → iznad gornje granice (uz to, granica je otvorena) ✗",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo NCVVO interval notacije: uglata [ ili ] = ZATVORENO (granica uključena), strešica ⟨ ili ⟩ = OTVORENO (granica isključena). Za [2, 31/3⟩ vrijedi 2 ≤ x < 31/3. Intuicija: zamisli brojevni pravac — pun krug ● na...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo NCVVO interval notacije: uglata [ ili ] = ZATVORENO (granica uključena), strešica ⟨ ili ⟩ = OTVORENO (granica isključena). Za [2, 31/3⟩ vrijedi 2 ≤ x < 31/3. Intuicija: zamisli brojevni pravac — pun krug ● na zatvorenom, otvoren krug ○ na otvorenom. Česta greška: misliti da je 10,6 < 31/3 jer 10 < 31 (zaboraviti dijeljenje); ili tretirati ⟩ kao ] (uključujući granicu). Alt metoda: pretvori sve u 1 oblik (npr. razlomke): 2 = 6/3, 31/3 ostaje; 5/3, 49/6 → traži onaj između 6/3 i 31/3 → 49/6 = 98/12 = 8,167. Provjera: 49/6 = 8,1̄6; 2 < 8,167 < 10,333 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:2,type:"mc",warn:"Pazi: računaj redom (∛21, pa 1/√1,25), zbroji, zaokruži na kraju.",topic:"br",points:1,
  q:"Koliko je ∛21 + 1/√1,25 zaokruženo na četiri decimale?",
  opts:["3,6532","3,6534","3,6536","3,6538"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"∛21≈2,7589 i 1/√1,25≈0,8944. Zbroj≈3,6533... ≈ 3,6534.",
  steps:[
    {txt:"∛21 = 21^(¹⁄³): između ∛8=2 i ∛27=3, bliže 3 → ≈ 2,75892"},
    {txt:"1/√1,25: 1,25 = 5/4 → √(5/4) = √5/2 → 1/(√5/2) = 2/√5 = 2√5/5 ≈ 0,89443"},
    {txt:"Zbroj: 2,75892 + 0,89443 ≈ 3,65335..."},
    {txt:"Distractor: A (3,6532) zaokruživanje prema dolje (krivo, 5 ≥ 5); C i D imaju krive iznose — manje precizan račun bilo kojeg sumanda",note:"diagnostika"},
    {txt:"Zaokruživanje na 4 decimale: 5. decimala je 5 (≥5) → 4. decimala raste s 3 na 4 → 3,6534",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo zaokruživanja: za n decimala, ako je (n+1). decimala ≥ 5 → povećaj n-tu za 1. Pravilo reciproci korijena: 1/√a = √a/a (racionalizacija nazivnika). Intuicija: ∛21 procjeni kao malo manje od 3 (jer 3³=27 > 21);...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo zaokruživanja: za n decimala, ako je (n+1). decimala ≥ 5 → povećaj n-tu za 1. Pravilo reciproci korijena: 1/√a = √a/a (racionalizacija nazivnika). Intuicija: ∛21 procjeni kao malo manje od 3 (jer 3³=27 > 21); 1/√1,25 je između 1/√1 = 1 i 1/√4 = 0,5 → otprilike 0,9. Česta greška: zaokružiti 3,65335 na 3,6533 (zaboraviti pravilo ≥5) ili krivo procijeniti ∛21 ≈ 2,8 (premalo precizno). Alt metoda: 21^(¹⁄³) + 4^([FRAC:1|2])/5^(¹⁄²) — koristi kalkulatorski pristup ako se dopušta. Provjera: 3,6534⁴ = nije relevantno, ali 2,75892³ ≈ 21,000 ✓ i (2/√5)² = 4/5 = 1/1,25 → 1/√1,25 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:3,type:"mc",warn:"Pazi: racionalni = cijeli/razlomci/decimale; √3/2 je iracionalan.",topic:"br",points:1,
  q:"Koliko je ukupno racionalnih brojeva u skupu {-7, -1/3, 0, 2,45, √3/2}?",
  opts:["jedan","dva","tri","četiri"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"√3/2 je iracionalan. Ostali: -7, -1/3, 0, 2,45 su racionalni → 4.",
  steps:[
    {txt:"Definicija: racionalan broj = može se prikazati kao p/q gdje su p, q cijeli, q ≠ 0"},
    {txt:"Provjeri svaki element skupa {−7, −1/3, 0, 2,45, √3/2}"},
    {txt:"−7 = −7/1 ✓; −1/3 ✓ (već u p/q obliku); 0 = 0/1 ✓; 2,45 = 245/100 = 49/20 ✓ (konačna decimala)"},
    {txt:"√3/2: √3 je IRACIONALAN (3 nije savršen kvadrat) → √3/2 je također iracionalan ✗"},
    {txt:"Distractor: A,B,C imaju krive iznose — student koji uključi √3/2 dobije 5 (nije opt) ili izoluje samo cijele dobije 2",note:"diagnostika"},
    {txt:"Brojanje racionalnih: −7, −1/3, 0, 2,45 = ukupno 4 racionalna broja",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: racionalan broj ℚ = {p/q : p ∈ ℤ, q ∈ ℤ, q ≠ 0}. Iracionalan = ne može se prikazati kao p/q (npr. √2, √3, π, e). Intuicija: racionalni imaju konačne ili periodične decimalne zapise; iracionalni imaju beskonačne...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: racionalan broj ℚ = {p/q : p ∈ ℤ, q ∈ ℤ, q ≠ 0}. Iracionalan = ne može se prikazati kao p/q (npr. √2, √3, π, e). Intuicija: racionalni imaju konačne ili periodične decimalne zapise; iracionalni imaju beskonačne neperiodične. Česta greška: misliti da je svaki broj s korijenom iracionalan (KRIVO — √4 = 2 je racionalan) ili da decimalne brojeve treba 'nešto raditi' (već su racionalni ako su konačni). Alt metoda: izračunaj decimalno svaki član — onaj koji se ne može pretvoriti u razlomak je iracionalan; √3 ≈ 1,732... (neperiodičan) ⇒ iracionalan. Provjera: prebrojimo {−7, −1/3, 0, 2,45} = 4 elementa ∈ ℚ; jedinstveni izvan ℚ je √3/2 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:4,type:"mc",warn:"Pazi: razmnoži obje zagrade i skupi članove (pazi predznak −3·(−1)).",topic:"al",points:1,
  q:"Čemu je jednako 2(2x+y) − 3(x-1)?",
  opts:["−x+y-3","−x+y+3","x+2y-3","x+2y+3"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"4x+2y-3x+3 = x+2y+3.",
  steps:[
    {txt:"Razvij prvu zagradu (distributivnost): 2·(2x+y) = 2·2x + 2·y = 4x + 2y"},
    {txt:"Razvij drugu zagradu (pažljivo s predznakom): −3·(x−1) = −3·x + (−3)·(−1) = −3x + 3"},
    {txt:"Spoji u izraz: 4x + 2y − 3x + 3"},
    {txt:"Distractor: A,B krivo predznak konstante (−3 umjesto +3 zbog zaboravljanja minus·minus = plus); C ima krivi predznak konstante također",note:"diagnostika"},
    {txt:"Skupi istorodne članove: (4x − 3x) + 2y + 3 = x + 2y + 3 → opt D",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: distributivnost a·(b+c) = ab + ac; pažljivo s predznakom: −a·(b−c) = −ab + ac (minus·minus = plus!). Intuicija: zamisli da minus 'putuje' kroz zagradu i ulazi u svaki član; (−3)·(−1) = +3 (dva minusa ukidaju)....",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: distributivnost a·(b+c) = ab + ac; pažljivo s predznakom: −a·(b−c) = −ab + ac (minus·minus = plus!). Intuicija: zamisli da minus 'putuje' kroz zagradu i ulazi u svaki član; (−3)·(−1) = +3 (dva minusa ukidaju). Česta greška: u −3(x−1) izračunati −3x−3 (zaboraviti drugi minus) — najklasičnija zamka u algebri. Alt metoda: prepisati 2(2x+y) − 3(x−1) = 2(2x+y) + (−3)(x−1) = 4x+2y+(−3)·x+(−3)·(−1) = 4x+2y−3x+3. Provjera: za x=1, y=1 → original 2(2+1)−3(1−1) = 6−0 = 6; rezultat 1+2+3 = 6 ✓.","Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:5,type:"mc",warn:"Pazi: traži NETOČNU jednakost — provjeri na konkretnom pozitivnom broju.",topic:"exp",points:1,
  q:"Koja od navedenih jednakosti [B:nije] istinita za svaki pozitivan broj x?",
  opts:["x⁶=(x²)³","x⁶=x²·x³","x⁶=x⁹:x³","x⁶=x·x·x·x·x·x"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"x²·x³=x^(2+3)=x⁵ ≠ x⁶. Ostale su točne: (x²)³=x⁶, x⁹:x³=x⁶, 6 faktora x=x⁶.",
  steps:[
    {txt:"A: (x²)³ = x^(2·3) = x⁶ ✓ (potencija potencije: množimo eksponente)"},
    {txt:"B: x²·x³ = x^(2+3) = x⁵ ≠ x⁶ ✗ (potencija umnoška: zbrajamo eksponente)"},
    {txt:"C: x⁹:x³ = x^(9-3) = x⁶ ✓"},
    {txt:"D: x·x·x·x·x·x = x⁶ ✓ (definicija potencije)",final:true,note:"diagnostika"},
    {txt:"Provjera za x=2: A → (4)³=64=2⁶ ✓; B → 4·8=32=2⁵ ≠ 64 ✗; C → 512/8=64=2⁶ ✓; D → 2⁶=64 ✓ → B je jedina NETOČNA opcija.",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo potencija (3 ključna): (1) aᵐ·aⁿ = aᵐ⁺ⁿ (množenje: ZBROJI eksponente), (2) aᵐ:aⁿ = aᵐ⁻ⁿ (dijeljenje: ODUZMI), (3) (aᵐ)ⁿ = aᵐⁿ (potencija potencije: MNOŽI). Intuicija: x⁶ znači šest faktora x; potencija ŠTEDI...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo potencija (3 ključna): (1) aᵐ·aⁿ = aᵐ⁺ⁿ (množenje: ZBROJI eksponente), (2) aᵐ:aⁿ = aᵐ⁻ⁿ (dijeljenje: ODUZMI), (3) (aᵐ)ⁿ = aᵐⁿ (potencija potencije: MNOŽI). Intuicija: x⁶ znači šest faktora x; potencija ŠTEDI pisanje (x·x = x², itd.). Česta greška: zbrojiti eksponente kad treba množiti (ili obrnuto); npr. krivo (x²)³ = x⁵ umjesto x⁶ (treba množiti 2·3, ne zbrajati). Alt metoda: za svaku opciju izračunaj BROJ FAKTORA x — A ima (x²)³ = (x·x)·(x·x)·(x·x) = 6 faktora ✓; B ima x²·x³ = (x·x)·(x·x·x) = 5 faktora ≠ 6 ✗; C ima x⁹:x³ = 9 faktora ÷ 3 faktora = 6 ✓; D ima eksplicitno 6 faktora ✓. Provjera: za x=2 → A: (4)³=64=2⁶ ✓; B: 4·8=32=2⁵ ≠ 64 ✗; C: 512/8=64=2⁶ ✓; D: 2⁶=64 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:6,type:"mc",warn:"Pazi: dijeli — (5,974/7,349)·10^(24 − 22) = (...)·10².",topic:"br",points:1,
  q:"Masa Zemlje je 5,974·10²⁴ kg, a masa Mjeseca 7,349·10²² kg. Koliko je puta masa Zemlje veća od mase Mjeseca?",
  opts:["8 puta","12 puta","81 put","123 puta"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"5,974·10²⁴ / 7,349·10²² = (5,974/7,349)·10² ≈ 0,8129·100 ≈ 81.",
  steps:[
    {txt:"Postavi omjer: masa Zemlje / masa Mjeseca = (5,974·10²⁴) / (7,349·10²²)"},
    {txt:"Razdvoji: koeficijenti i potencije zasebno → (5,974/7,349) · 10^(24−22) = (5,974/7,349) · 10²"},
    {txt:"5,974/7,349 ≈ 0,8129 (manje od 1 jer 5,974 < 7,349)"},
    {txt:"Distractor: A (8) i B (12) imaju krivi red veličine (jer student zaboravi pomnožiti s 10²); D (123) krivo dijeli koeficijente",note:"diagnostika"},
    {txt:"Rezultat: 0,8129 · 100 ≈ 81,29 → najbliže 81 puta → opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za dijeljenje brojeva u znanstvenom zapisu (a·10ᵐ)/(b·10ⁿ) = (a/b)·10^(m−n) — dijeli koeficijente, oduzmi eksponente. Intuicija: 10²⁴ i 10²² razlikuju se za faktor 100 — to je dominantni doprinos omjeru;...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za dijeljenje brojeva u znanstvenom zapisu (a·10ᵐ)/(b·10ⁿ) = (a/b)·10^(m−n) — dijeli koeficijente, oduzmi eksponente. Intuicija: 10²⁴ i 10²² razlikuju se za faktor 100 — to je dominantni doprinos omjeru; koeficijenti samo 'fino podese'. Česta greška: zaboraviti 10²-faktor i staviti samo 5,974/7,349 ≈ 0,8 (krivi red veličine); ili krivo izračunati razliku eksponenata. Alt metoda: pretvori oba u obični broj — 5,974·10²⁴ = 5,974...·10²⁴, znatno veće od 7,349·10²² — približno 100 puta. Provjera: 81 · 7,349·10²² = 595,3·10²² = 5,953·10²⁴ ≈ 5,974·10²⁴ ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:7,type:"mc",warn:"Pazi: pretvori sve u jednu jedinicu (npr. inče), pa u metre prema odnosima.",topic:"br",points:1,
  q:"Spomenik je visok 15 stopa i 7 inča. Kolika je visina spomenika izražena u metrima? Napomena: Jedna stopa iznosi 0,3048 m. Stopa se sastoji od 12 inča.",
  opts:["4,7024 m","4,7214 m","4,7498 m","4,7858 m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"15 stopa 7 inča = 15 + 7/12 stopa = 187/12 stopa. ·0,3048 ≈ 4,7498 m.",
  steps:[
    {txt:"Pretvori inče u stope: 1 stopa = 12 inča → 7 inča = 7/12 stope"},
    {txt:"Ukupna visina u stopama: 15 + 7/12 = (180+7)/12 = 187/12 stopa"},
    {txt:"Pretvori u metre: (187/12) · 0,3048 m/stopa = 187 · 0,3048 / 12"},
    {txt:"Distractor: A (4,7024) zaboravlja 7 inča; B (4,7214) krivo dijeli s pogrešnim faktorom; D (4,7858) zbraja stopu cijelu (ne 7/12)",note:"diagnostika"},
    {txt:"Računaj: 187 · 0,3048 = 56,9976; 56,9976 / 12 ≈ 4,7498 m → opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za pretvorbu mješovitih jedinica (npr. stope + inči), najprije svedi sve na ISTU jedinicu (npr. samo stope), pa onda pomnoži s konverzijskim faktorom u željenu jedinicu. Intuicija: 7 inča je manje od 1 stope (jer...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za pretvorbu mješovitih jedinica (npr. stope + inči), najprije svedi sve na ISTU jedinicu (npr. samo stope), pa onda pomnoži s konverzijskim faktorom u željenu jedinicu. Intuicija: 7 inča je manje od 1 stope (jer 12 inča = 1 stopa), pa je 7/12 stope ≈ 0,583 stope; ukupno 15,583 stope. Česta greška: zbrojiti 15·0,3048 + 7·0,3048 (krivo — koristi konverziju stope za inče); ili zaboraviti dio s inčima i koristiti samo 15 stopa = 4,572 m. Alt metoda: pretvori sve u inče: 15 stopa · 12 + 7 = 187 inča; svaki inč = 0,0254 m (= 0,3048/12); 187 · 0,0254 ≈ 4,7498 m ✓. Provjera: 4,7498 m / 0,3048 = 15,5833... ≈ 187/12 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:8,type:"mc",warn:"Pazi: 2πr = 8π → r = 4; P = r²π = 16π.",topic:"geom",points:1,
  q:"Opseg kruga je 8π cm. Kolika mu je površina?",
  opts:["4π cm²","8π cm²","16π cm²","32π cm²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"O=2πr=8π → r=4. P=πr²=16π cm².",
  steps:[
    {txt:"Iz formule opsega O = 2πr izoliraj r: 8π = 2πr → r = 8π/(2π) = 4 cm"},
    {txt:"Uvrsti r u formulu površine: P = πr² = π·4² = π·16 = 16π cm²"},
    {txt:"Rezultat: 16π cm² → opt C",final:true,note:"odgovor"},
    {txt:"Distractor: A (4π) zaboravlja kvadrirati r (= πr umjesto πr²); B (8π) ostavlja isti broj kao opseg; D (32π) krivo r² = 4·4 = 16, ali množi s 2",note:"diagnostika"},
    {txt:"Provjera: ako r = 4, onda O = 2π·4 = 8π ✓ (match s polaznim uvjetom)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opseg kruga O = 2πr, površina kruga P = πr². Polumjer r povezuje obje formule. Intuicija: opseg je 'linearan' s r (otkriva 1D), površina je 'kvadratna' s r (otkriva 2D); pa se površina mijenja KVADRATNO s...",note:"postupak",final:true}
  ],
  why:["Pravilo: opseg kruga O = 2πr, površina kruga P = πr². Polumjer r povezuje obje formule. Intuicija: opseg je 'linearan' s r (otkriva 1D), površina je 'kvadratna' s r (otkriva 2D); pa se površina mijenja KVADRATNO s opsegom. Česta greška: pomiješati formule O i P (najklasičnija zamka u geometriji kruga); ili izračunati r ali zaboraviti kvadrirati. Alt metoda: koristi vezu O² = (2πr)² = 4π²r² = 4π · (πr²) = 4π · P → P = O²/(4π) = 64π²/(4π) = 16π ✓ (preciznije nego ići preko r). Provjera: P = πr² = π·16 = 16π; ako P = 16π i O = 8π, omjer P/O = 2 = r ✓ (jer P/O = πr²/2πr = r/2).","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:9,type:"mc",warn:"Pazi: rješenje [5/2, +∞⟩ znači x ≥ 5/2 (zatvoreno); provjeri smjer znaka.",topic:"al",points:1,
  q:"Kojoj je od navedenih nejednadžba skup svih rješenja interval [5/2, +∞⟩?",
  opts:["2x-5 ≥ 0","2x-5 < 0","5x-2 ≥ 0","5x-2 < 0"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"2x−5≥0 → 2x≥5 → x≥5/2 → [5/2,+∞⟩ ✓",
  steps:[
    {txt:"Traženi interval: [5/2, +∞⟩ — zatvoren na 5/2 (uključen), otvoren prema +∞"},
    {txt:"Riješi svaku nejednadžbu i usporedi s traženim intervalom"},
    {txt:"A: 2x−5 ≥ 0 → 2x ≥ 5 → x ≥ 5/2 → [5/2, +∞⟩ ✓ MATCH"},
    {txt:"B: 2x−5 < 0 → x < 5/2 → ⟨−∞, 5/2⟩ ✗ (krivi smjer + otvoren na 5/2)"},
    {txt:"C: 5x−2 ≥ 0 → x ≥ 2/5 → [2/5, +∞⟩ ✗ (krivi prag — 2/5 ≠ 5/2!)"},
    {txt:"Distractor: C je opasna zamka — student koji zamijeni 2 i 5 (mislljnima x≥2/5 ≈ x≥5/2) pada; D dvostruka greška",note:"diagnostika"},
    {txt:"D: 5x−2 < 0 → x < 2/5 → ⟨−∞, 2/5⟩ ✗ (krivi smjer i prag)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za rješavanje linearne nejednadžbe ax + b ≷ 0, izoliraj x. Pažnja: dijeljenje pozitivnim brojem NE MIJENJA znak, dijeljenje negativnim OKREĆE (≥ ↔ ≤). Skup rješenja zapisuje se intervalskom notacijom — uglata...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za rješavanje linearne nejednadžbe ax + b ≷ 0, izoliraj x. Pažnja: dijeljenje pozitivnim brojem NE MIJENJA znak, dijeljenje negativnim OKREĆE (≥ ↔ ≤). Skup rješenja zapisuje se intervalskom notacijom — uglata zagrada za uključenu granicu (≥, ≤), strešica za isključenu (>, <). Intuicija: 2x − 5 ≥ 0 znači 'koliko x da 2x bude barem 5' → x ≥ 5/2. Česta greška: pomiješati 5/2 i 2/5 (klasična zamka u zadacima s ≥); ili krivo pretvoriti znak nejednakosti pri rješavanju. Alt metoda: za svaku opciju, provjeri rubnu vrijednost — u opt A je 2(5/2) − 5 = 0, što odgovara ≥ 0 i granica je uključena → match s [5/2, ...] ✓. Provjera: uvrsti x = 5/2 u 2x − 5 = 0 ≥ 0 ✓; uvrsti x = 10 → 15 ≥ 0 ✓ — sve u intervalu [5/2, +∞⟩.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:10,type:"mc",warn:"Pazi: podijeli s m → v₂ − v₁ = Ft/m → v₁ = v₂ − Ft/m.",topic:"al",points:1,
  q:"Čemu je jednako v₁ iz formule F·t = m(v₂−v₁)?",
  opts:["v₁=v₂−m/(F·t)","v₁=(v₂−m)/(F·t)","v₁=(v₂−F·t)/m","v₁=v₂−F·t/m"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"F·t=m·v₂−m·v₁ → m·v₁=m·v₂−F·t → v₁=v₂−Ft/m.",
  steps:[
    {txt:"Razvij zagradu: F·t = m·v₂ − m·v₁"},
    {txt:"Pomakni m·v₁ na lijevu: m·v₁ = m·v₂ − F·t"},
    {txt:"Podijeli s m: v₁ = v₂ − [FRAC:F·t|m] → opt D"},
    {txt:"Distractor: A,B dijele s F·t (krivo); C grupira v₂−F·t pa dijeli s m (algebarska greška, ne odvaja v₂)",note:"diagnostika"},
    {txt:"Provjera: ako v₁=v₂−F·t/m, onda m(v₂−v₁)=m·F·t/m=F·t ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izolaciju varijable u linearnoj jednadžbi razvij zagrade pa premjesti članove s varijablom na jednu stranu (uobičajeno lijevu), ostalo na drugu, na kraju dijeli koeficijentom uz varijablu. Intuicija: F·t =...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za izolaciju varijable u linearnoj jednadžbi razvij zagrade pa premjesti članove s varijablom na jednu stranu (uobičajeno lijevu), ostalo na drugu, na kraju dijeli koeficijentom uz varijablu. Intuicija: F·t = promjena količine gibanja m·v₂ − m·v₁ → izoliraj m·v₁. Česta greška: dijeliti s F·t umjesto s m (opt A,B greška). Alt metoda: F·t/m = v₂ − v₁ → v₁ = v₂ − F·t/m direktno. Provjera: uvrsti rezultat natrag — m(v₂ − (v₂−Ft/m)) = m·Ft/m = F·t ✓.","Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:11,img:true,type:"mc",warn:"Pazi: nultočke 1 i −2; otvor prema gore (vodeći koeficijent 2 > 0).",topic:"kv",points:1,img:true,
  q:"Na kojoj je slici prikazan graf funkcije f(x) = 2(x−1)(x+2)?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Nultočke: x=1 i x=-2 (obje jednostruke). a=2>0 → parabola prema gore. f(0)=2·(-1)·2=-4 → y-sječ (0,-4).",
  steps:[
    {txt:"Nultočke: x−1=0 → x=1; x+2=0 → x=−2 (obje jednostruke — presijecaju x-os)"},
    {txt:"Vodeći koeficijent: a=2>0 → parabola otvorena prema gore"},
    {txt:"y-sječ: f(0) = 2·(0−1)·(0+2) = 2·(−1)·2 = −4 → prolazi (0,−4)"},
    {txt:"Tjeme: x_t = (1+(−2))/2 = −1/2; f(−1/2) = 2·(−3/2)·(3/2) = −9/2 → tjeme (−1/2, −9/2)"},
    {txt:"Distractor: B ima nultočke 0,1 (krivo); C i D su prema dolje (a<0, krivo)",note:"diagnostika"},
    {txt:"Tražimo graf prema gore s nultočkama −2 i 1, y-sječ −4 → opt A ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kvadratnu funkciju f(x)=a(x−x₁)(x−x₂) nultočke su x₁, x₂; smjer ovisi o a (a>0 prema gore, a<0 prema dolje); tjeme je u sredini između nultočaka. Intuicija: prepoznaj 4 ključne karakteristike grafa parabole —...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za kvadratnu funkciju f(x)=a(x−x₁)(x−x₂) nultočke su x₁, x₂; smjer ovisi o a (a>0 prema gore, a<0 prema dolje); tjeme je u sredini između nultočaka. Intuicija: prepoznaj 4 ključne karakteristike grafa parabole — (1) smjer otvorenosti, (2) položaj nultočaka, (3) y-sječ, (4) položaj tjemena. Česta greška: zaboraviti množenje s 2 pa krivo izračunati y-sječ. Alt metoda: razvij u standardni oblik f(x)=2x²+2x−4 pa primjeni x_t=−b/(2a)=−1/2. Provjera: f(1)=2·0·3=0 ✓, f(−2)=2·(−3)·0=0 ✓.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:12,type:"mc",warn:"Pazi: put = brzina·vrijeme (vrijeme u SATIMA: 40 min = 2/3 h); zbroji putove.",topic:"br",points:1,
  q:"Biciklist je 40 minuta vozio prosječnom brzinom 21,3 km/h, potom je pola sata vozio prosječnom brzinom 18,2 km/h i na kraju je 20 minuta vozio prosječnom brzinom 8,5 km/h. Koliki je ukupni put prešao? Napomena: Prosječna brzina računa se kao omjer prijeđenoga puta i vremena.",
  opts:["19,32 km","26,13 km","32 km","48 km"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"14,2+9,1+2,83=26,13 km.",
  steps:[
    {txt:"Formula: put = brzina × vrijeme (s = v·t); pretvori sve vrijeme u SATE (jer brzina je u km/h)"},
    {txt:"1. dio: 40 min = 40/60 h = 2/3 h → s₁ = 21,3 · 2/3 = 14,2 km"},
    {txt:"2. dio: pola sata = 30 min = 0,5 h → s₂ = 18,2 · 0,5 = 9,1 km"},
    {txt:"3. dio: 20 min = 20/60 h = 1/3 h → s₃ = 8,5 · 1/3 ≈ 2,8333 km"},
    {txt:"Distractor: A (19,32) zaboravlja jednu od dionica; C (32) krivo zbraja brzine·vremena u min; D (48) zbroji brzine direktno (krivi pristup)",note:"diagnostika"},
    {txt:"Ukupni put: s = s₁ + s₂ + s₃ = 14,2 + 9,1 + 2,83 ≈ 26,13 km → opt B",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kretanje konstantnom brzinom, put = brzina × vrijeme. Jedinice MORAJU biti usklađene: ako brzina u km/h, vrijeme MORA u h. Intuicija: brzina 'koliko km za 1 sat'; ako vozi pola sata, prijeđe pola tog puta....",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za kretanje konstantnom brzinom, put = brzina × vrijeme. Jedinice MORAJU biti usklađene: ako brzina u km/h, vrijeme MORA u h. Intuicija: brzina 'koliko km za 1 sat'; ako vozi pola sata, prijeđe pola tog puta. Česta greška: pomnožiti brzinu (km/h) s vremenom u minutama bez pretvorbe (krivo — 21,3·40 = 852 km za 40 min nije realno). Alt metoda: izračunaj prosječnu brzinu i pomnoži s ukupnim vremenom — prosječna brzina = (21,3·40 + 18,2·30 + 8,5·20)/90 min...; ali to je kompliciranije od direktnog zbrajanja. Provjera: ukupno vrijeme 40+30+20 = 90 min = 1,5 h; prosječna brzina = 26,13/1,5 ≈ 17,4 km/h (između najsporije 8,5 i najbrže 21,3) ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:13,type:"mc",warn:"Pazi: usporedi ukupnu površinu plakata s površinom zida (18 m²); pazi što se traži.",topic:"br",points:2,
  q:"Na zidu duljine 6 m i visine 3 m zalijepljeno je 5 malih i 4 velika plakata koji se međusobno ne preklapaju i ne dodiruju. Plakati su pravokutnoga oblika, mali dimenzija 25 cm × 60 cm, a veliki dimenzija 120 cm × 80 cm. Kolika je površina dijela zida koji [B:nije] prekriven plakatima?",
  opts:["5,73 m²","9,26 m²","13,41 m²","16,89 m²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"P_zid=18 m². P_mali=5·0,15=0,75 m². P_veliki=4·0,96=3,84 m². Slobodno=18-0,75-3,84=13,41 m².",
  steps:[
    {txt:"Pretvori sve dimenzije plakata u METRE: 25 cm = 0,25 m; 60 cm = 0,60 m; 120 cm = 1,20 m; 80 cm = 0,80 m"},
    {txt:"Površina zida: P_zid = 6 m · 3 m = 18 m²"},
    {txt:"Površina jednog malog plakata: 0,25 · 0,60 = 0,15 m²; ukupno 5 malih: 5 · 0,15 = 0,75 m²"},
    {txt:"Površina jednog velikog plakata: 1,20 · 0,80 = 0,96 m²; ukupno 4 velika: 4 · 0,96 = 3,84 m²"},
    {txt:"Distractor: A (5,73) zaboravlja oduzeti od zida; B (9,26) krivo množi plakate; D (16,89) krivo oduzima samo male plakate",note:"diagnostika"},
    {txt:"Slobodna (nije prekriven) površina: 18 − 0,75 − 3,84 = 13,41 m² → opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za 'koliko ostaje slobodno' = ukupno (zid) − zauzeto (plakati). KLJUČNO: sve mora biti u istoj jedinici (ovdje m², jer zid je u m). 1 m = 100 cm; 1 m² = 10 000 cm². Intuicija: zamisli zid kao veliki pravokutnik...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za 'koliko ostaje slobodno' = ukupno (zid) − zauzeto (plakati). KLJUČNO: sve mora biti u istoj jedinici (ovdje m², jer zid je u m). 1 m = 100 cm; 1 m² = 10 000 cm². Intuicija: zamisli zid kao veliki pravokutnik 6m × 3m, plakate kao manje pravokutnike unutar — slobodna površina je 'pozadina' koja viri. Česta greška: ostaviti plakate u cm² i oduzeti od m² (krivi red veličine — npr. 5·1500 cm² = 7500 cm² ≈ 0,75 m² ✓ ali ako se zaboravi pretvoriti, dobije se KRIVI rezultat 18 m² − 7500 m² = besmisleno). Alt metoda: izračunaj sve u cm²: zid 600·300 = 180 000 cm²; mali 25·60 = 1500 cm² (×5 = 7500); veliki 120·80 = 9600 cm² (×4 = 38 400); slobodno 180 000 − 7500 − 38 400 = 134 100 cm² = 13,41 m² ✓. Provjera: 13,41/18 ≈ 74,5% zida slobodno → razumno.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:14,type:"mc",warn:"Pazi: isti nagib 2/3; provedi pravac kroz točku (2, −1).",topic:"lin",points:2,
  q:"Koji je od navedenih pravaca usporedan s pravcem y = (2/3)x − 5 i prolazi točkom (2, −1)?",
  opts:["2x+3y-1=0","2x-3y-7=0","(2/3)x−y-1=0","(2/3)x+y-7=0"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Usporedan: k=2/3. y−(-1)=2/3(x-2) → y=2/3x-4/3-1=2/3x-7/3 → 3y=2x-7 → 2x-3y-7=0.",
  steps:[
    {txt:"Pravac y = (2/3)x − 5 ima nagib k = 2/3 (koeficijent uz x)"},
    {txt:"Paralelan pravac ima ISTI nagib k = 2/3"},
    {txt:"Jednadžba pravca kroz točku (x₁, y₁) s nagibom k: y − y₁ = k·(x − x₁)"},
    {txt:"Uvrsti (2, −1) i k = 2/3: y − (−1) = (2/3)·(x − 2) → y + 1 = (2/3)x − 4/3"},
    {txt:"Distractor: A (2x+3y−1=0) ima krivi predznak uz y (paralelan vs okomit); C i D imaju nagibe k=2/3 ali NE u eksplicitnom obliku, što ne odgovara standardnoj formi",note:"diagnostika"},
    {txt:"Izrazi y: y = (2/3)x − 4/3 − 1 = (2/3)x − 7/3; pomnoži s 3: 3y = 2x − 7 → 2x − 3y − 7 = 0 → opt B",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva pravca su paralelna ⟺ imaju isti nagib k (k₁ = k₂). Jednadžba pravca kroz zadanu točku (x₁, y₁) s nagibom k: y − y₁ = k(x − x₁). Standardni oblik: ax + by + c = 0. Intuicija: paralelne linije se 'kreću' istom...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: dva pravca su paralelna ⟺ imaju isti nagib k (k₁ = k₂). Jednadžba pravca kroz zadanu točku (x₁, y₁) s nagibom k: y − y₁ = k(x − x₁). Standardni oblik: ax + by + c = 0. Intuicija: paralelne linije se 'kreću' istom strminom; razlikuju se samo po y-sjecištu (visini). Česta greška: pretpostaviti da paralelnost znači jednake jednadžbe (KRIVO — različit y-sjecište); ili tražiti okomit pravac (nagibi onda imaju produkt −1). Alt metoda: provjeri svaki opt — preraditi u y = kx + b oblik i vidjeti je li k = 2/3 i je li (2, −1) na pravcu. Za opt B: 2·2 − 3·(−1) − 7 = 4 + 3 − 7 = 0 ✓; nagib iz 2x − 3y − 7 = 0 → y = (2/3)x − 7/3 → k = 2/3 ✓. Provjera: prolazi kroz (2, −1) ✓ i ima k = 2/3 ✓.","Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:15,type:"mc",warn:"Pazi: izrazi sve preko c; c je najveći, a najmanji → razlika c − a.",topic:"br",points:2,
  q:"Zadani su pozitivni brojevi a, b, c takvi da je a = (3/4)b i b = (5/7)c. Razlika najvećega i najmanjega broja je 31,2. Koliki je broj a?",
  opts:["4,5","21,6","36","42"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"a<b<c. c−a=31,2. a=15/28·c. c-15/28·c=13c/28=31,2 → c=67,2 → b=48 → a=36.",
  steps:[
    {txt:"Odredi poredak po veličini: a = (3/4)b < b (jer 3/4 < 1); b = (5/7)c < c (jer 5/7 < 1) → a < b < c"},
    {txt:"Najveći je c, najmanji a; razlika max − min = c − a = 31,2"},
    {txt:"Izrazi a pomoću c: a = (3/4)b = (3/4)·(5/7)c = 15/28·c"},
    {txt:"Postavi jednadžbu: c − (15/28)c = (13/28)c = 31,2 → c = 31,2·(28/13) = 67,2"},
    {txt:"Distractor: A (4,5) krivi mali iznos (možda krivo izračunata razlika); B (21,6) krivi pristup; D (42) krivo dijeli (npr. možda izračuna b umjesto a)",note:"diagnostika"},
    {txt:"Računaj b i a: b = (5/7)·67,2 = 48; a = (3/4)·48 = 36 → opt C",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kada imaš lančanu vezu varijabli (a u terminima b, b u terminima c), izrazi SVE pomoću jedne (najčešće 'zadnje' u lancu). Tako sustav od 2 jednadžbe s 3 nepoznate postaje 1 jednadžba s 1 nepoznatom. Intuicija: c...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kada imaš lančanu vezu varijabli (a u terminima b, b u terminima c), izrazi SVE pomoću jedne (najčešće 'zadnje' u lancu). Tako sustav od 2 jednadžbe s 3 nepoznate postaje 1 jednadžba s 1 nepoznatom. Intuicija: c je 'temelj' — a i b su skalirane verzije c; razlika max−min daje veličinu c. Česta greška: zaboraviti redoslijed (npr. krivo zaključiti a > b ili neuredan poredak); ili krivo izračunati lančani produkt 3/4 · 5/7 = 15/28 (ne 8/11 ili slično). Alt metoda: provjeri svaki opt putem reverzne logike — ako a = 36, onda b = a/(3/4) = 48, c = b/(5/7) = 48·7/5 = 67,2; razlika c − a = 31,2 ✓. Provjera: a = 36, b = 48, c = 67,2; (3/4)·48 = 36 ✓; (5/7)·67,2 = 48 ✓; 67,2 − 36 = 31,2 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:16,type:"mc",warn:"Pazi: x² − y² = (x − y)(x + y) → skrati (x − y) → ostaje x + y.",topic:"al",points:2,
  q:"Zadana su dva različita broja x i y. Razliku kvadrata brojeva x i y podijelite s razlikom brojeva x i y. Dobiveni količnik pomnožite sa zbrojem brojeva x i y. Što je rezultat?",
  opts:["kvadrat zbroja brojeva x i y","zbroj kvadrata brojeva x i y","kvadrat razlike brojeva x i y","razlika kvadrata brojeva x i y"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"((x²−y²)/(x−y))·(x+y)=((x+y)(x−y)/(x−y))·(x+y)=(x+y)².",
  steps:[
    {txt:"Postavi izraz simbolično: ((x² − y²) / (x − y)) · (x + y)"},
    {txt:"Faktoriziraj brojnik koristeći identitet razlike kvadrata: x² − y² = (x+y)(x−y)"},
    {txt:"Uvrsti i skrati (x−y): ((x+y)(x−y) / (x−y)) · (x+y) = (x+y) · (x+y)"},
    {txt:"Distractor: B (zbroj kvadrata x²+y²) klasična zamka — STUDENT misli da je (x+y)² = x²+y² (zaboravlja 2xy); C (kvadrat razlike) krivi predznak; D (razlika kvadrata) ne odgovara na pitanje (to bi bio polazni izraz, ne rezultat)",note:"diagnostika"},
    {txt:"Pomnoži: (x+y) · (x+y) = (x+y)² → kvadrat zbroja brojeva x i y → opt A",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata a² − b² = (a+b)(a−b) — jedan od najvažnijih algebarskih identiteta. Faktorizacija pomaže kraćenju u razlomcima. Intuicija: razlika kvadrata se uvijek može 'razbiti' na zbroj i razliku originalnih...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: razlika kvadrata a² − b² = (a+b)(a−b) — jedan od najvažnijih algebarskih identiteta. Faktorizacija pomaže kraćenju u razlomcima. Intuicija: razlika kvadrata se uvijek može 'razbiti' na zbroj i razliku originalnih članova. Česta greška: (x+y)² = x² + y² (KRIVO — zaboraviti 2xy); ili pokušati izračunati cijeli izraz numerički bez faktorizacije (uvijek dulji put). Alt metoda: provjeri s konkretnim brojevima — npr. x = 3, y = 1: (9−1)/(3−1)·(3+1) = 8/2·4 = 16; (3+1)² = 16 ✓ → potvrđuje kvadrat zbroja. Provjera: za x = 5, y = 2: (25−4)/(5−2)·(5+2) = 21/3·7 = 49; (5+2)² = 49 ✓.","Provjera supstitucijom: uvrsti x = A u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Koliko je 6,5 % od 900?",
  sol:{ans:"58,5",alt:["58,5","58.5","≈ 58,5"]},
  exp:"900·0,065=58,5.",
  steps:[
    {txt:"Pretvori postotak u decimalu: 6,5% = 6,5/100 = 0,065"},
    {txt:"Pomnoži: 900 · 0,065 = 58,5"},
    {txt:"Provjera: 58,5/900 = 0,065 = 6,5% ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: p% od n = n · (p/100). Postotak je samo razlomak s nazivnikom 100. Intuicija: 1% od 900 = 9 → 6,5% = 6,5 · 9 = 58,5. Česta greška: zaboraviti pomaknuti decimalu (6,5% pomnožiti kao 6,5 umjesto 0,065) — krivi...",note:"postupak",final:true},{txt:"Točan odgovor: 58,5 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: p% od n = n · (p/100). Postotak je samo razlomak s nazivnikom 100. Intuicija: 1% od 900 = 9 → 6,5% = 6,5 · 9 = 58,5. Česta greška: zaboraviti pomaknuti decimalu (6,5% pomnožiti kao 6,5 umjesto 0,065) — krivi rezultat 5850 (red veličine veći). Alt metoda: 10% od 900 = 90; 6,5% = 65% od 10% = 0,65 · 90 = 58,5 (kraćenje na jednostavnije postotke). Provjera: 58,5 + 93,5% od 900 = 58,5 + 841,5 = 900 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Za koji je broj x vrijednost izraza −7,14 − 0,05(x−1) jednaka −7,54?",
  sol:{ans:"x = 9",alt:["X = 9","x = 9","x=9","≈ x = 9"]},
  exp:"-0,05(x-1)=-0,4 → x-1=8 → x=9.",
  steps:[
    {txt:"Polazna jednadžba: −7,14 − 0,05(x−1) = −7,54"},
    {txt:"Izoliraj zagradu: −0,05(x−1) = −7,54 − (−7,14) = −7,54 + 7,14 = −0,40"},
    {txt:"Podijeli s koeficijentom (−0,05): x − 1 = (−0,40)/(−0,05) = 8 (minus·minus = plus)"},
    {txt:"Izoliraj x: x = 8 + 1 = 9"},
    {txt:"Provjera: −7,14 − 0,05·(9−1) = −7,14 − 0,05·8 = −7,14 − 0,40 = −7,54 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod linearne jednadžbe s izrazom u zagradi, korisno je izolirati zagradu PRIJE razvijanja — manje koraka, manje grešaka. Postupak: pomakni konstante, podijeli s koeficijentom ispred zagrade, pa izoliraj...",note:"postupak",final:true},{txt:"Točan odgovor: x = 9 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kod linearne jednadžbe s izrazom u zagradi, korisno je izolirati zagradu PRIJE razvijanja — manje koraka, manje grešaka. Postupak: pomakni konstante, podijeli s koeficijentom ispred zagrade, pa izoliraj varijablu. Intuicija: izraz −0,05(x−1) je 'nešto malo negativno' — mora dati −0,40 da bi cijeli LH bio −7,54. Česta greška: razviti zagradu prvo (vodi do više članova i grešaka s minusima), ili pogriješiti predznak pri dijeljenju (−0,40/−0,05 = +8, ne −8). Alt metoda: razvij zagradu: −7,14 − 0,05x + 0,05 = −7,54 → −0,05x = −7,54 + 7,14 − 0,05 = −0,45 → x = 9 (isti odgovor, više koraka). Provjera: x=9 → originalna LH = −7,14 − 0,05·8 = −7,54 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:19,type:"sa",topic:"kv",points:1,
  q:"Riješite kvadratnu jednadžbu (1/3)x² − 5x = -2 i napišite njezino manje rješenje.",
  sol:{ans:"x₁ = [FRAC:15−√201|2] ≈ 0,411",alt:["0,411","0,411","0,41","0,42","0,4113"]},
  exp:"Pomnoži s 3: x²-15x+6=0. D=225-24=201. x=(15±√201)/2. Manje: (15−√201)/2≈0,411.",
  steps:[
    {txt:"Polazna: (1/3)x² − 5x = −2; prebaci sve na lijevu stranu: (1/3)x² − 5x + 2 = 0"},
    {txt:"Ukloni razlomak: pomnoži s 3 → x² − 15x + 6 = 0 (a=1, b=−15, c=6)"},
    {txt:"Diskriminanta: D = b² − 4ac = (−15)² − 4·1·6 = 225 − 24 = 201"},
    {txt:"Rješenja: x = (−b ± √D)/(2a) = (15 ± √201)/2; √201 ≈ 14,177"},
    {txt:"Manje rješenje: x₁ = (15 − √201)/2 ≈ (15 − 14,177)/2 ≈ 0,823/2 ≈ 0,411"},
    {txt:"Provjera: (1/3)·(0,411)² − 5·0,411 = 0,0563 − 2,055 ≈ −1,999 ≈ −2 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima rješenja x = (−b ± √D)/(2a) gdje je D = b² − 4ac (diskriminanta). D > 0 → dva realna rješenja; D = 0 → jedno; D < 0 → nema realnih. Intuicija: parabola siječe x-os u...",note:"postupak",final:true},{txt:"Točan odgovor: x₁ = [FRAC:15−√201|2] ≈ 0,411 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima rješenja x = (−b ± √D)/(2a) gdje je D = b² − 4ac (diskriminanta). D > 0 → dva realna rješenja; D = 0 → jedno; D < 0 → nema realnih. Intuicija: parabola siječe x-os u dvjema točkama kad D > 0; manje rješenje je 'lijevo' (15 − √201 < 15 + √201). Česta greška: zaboraviti pomnožiti cijelu jednadžbu s 3 (razlomak komplicira diskriminantu), ili napisati 'manje' kao ono s + ispred √ (KRIVO — manje je sa −). Alt metoda: Vièteove formule x₁ + x₂ = 15, x₁ · x₂ = 6 → x₁ ≈ 0,411 (manje), x₂ ≈ 14,589 (veće). Provjera: 0,411 + 14,589 ≈ 15 ✓; 0,411 · 14,589 ≈ 6 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:20,type:"sa",topic:"al",points:1,
  q:"Riješite nejednadžbu (4-7x)/3 < 1 − (3x+1)/6.",
  sol:{ans:"x > [FRAC:3|11]",alt:["x>3/11","3/11"]},
  solFormula:[{pre:"x > "},{frac:[["3","11"]]}],
  exp:"Pomnoži s 6: 2(4-7x)<6−(3x+1) → 8-14x<5-3x → 3<11x → x>3/11.",
  steps:[
    {txt:"Polazna: (4 − 7x)/3 < 1 − (3x + 1)/6; ZN razlomaka = 6"},
    {txt:"Pomnoži cijelu nejednadžbu s 6 (POZITIVAN broj — znak NE okreće): 2(4 − 7x) < 6 − (3x + 1)"},
    {txt:"Razvij: 8 − 14x < 6 − 3x − 1 → 8 − 14x < 5 − 3x"},
    {txt:"Skupi: 8 − 5 < −3x + 14x → 3 < 11x"},
    {txt:"Podijeli s 11 (POZITIVAN — znak NE okreće): 3/11 < x → x > 3/11"},
    {txt:"Provjera za x = 1 (> 3/11): LH = (4−7)/3 = −1; RH = 1 − 4/6 = 1/3; −1 < 1/3 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod rješavanja nejednadžbi s razlomcima, najprije pomnoži cijelu nejednadžbu sa zajedničkim nazivnikom; PAŽNJA: ako je ZN negativan ili dijeliš s negativnim koeficijentom, ZNAK SE OKREĆE. Ovdje ZN = 6...",note:"postupak",final:true},{txt:"Točan odgovor: x > [FRAC:3|11] ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kod rješavanja nejednadžbi s razlomcima, najprije pomnoži cijelu nejednadžbu sa zajedničkim nazivnikom; PAŽNJA: ako je ZN negativan ili dijeliš s negativnim koeficijentom, ZNAK SE OKREĆE. Ovdje ZN = 6 (pozitivan), pa znak ostaje. Intuicija: razlomci čine račun težim — uklanjamo ih jednim korakom. Česta greška: krivo pomnožiti — npr. pomnožiti samo brojevnik s 6 (zaboraviti dijeljenje pomakom decimala) ili pomiješati zagradu (4−7x)/3 (TREBA: cijeli razlomak); ili zaboraviti DA ako pomnožiš s negativnim, znak se okreće. Alt metoda: zajednički nazivnik s lijeve strane i desne: LH = (4−7x)/3 = (8−14x)/6, RH = 1 − (3x+1)/6 = (6−(3x+1))/6 = (5−3x)/6; (8−14x)/6 < (5−3x)/6 → 8−14x < 5−3x → x > 3/11. Provjera: rubna vrijednost x = 3/11 daje LH = (4 − 21/11)/3 = (23/11)/3 = 23/33; RH = 1 − (9/11+1)/6 = 1 − (20/11)/6 = 1 − 20/66 = 46/66 = 23/33 → LH = RH ✓ (granica).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:21,type:"sa",topic:"al",points:1,
  q:"Prikažite izraz a/(a+1) − 1/(a(a+1)) u obliku razlomka skraćenoga do kraja.",
  sol:{ans:"[FRAC:a-1|a]",alt:["[FRAC:a-1|a]","≈ [FRAC:a-1|a]"]},
  solFormula:[{frac:[["a-1","a"]]}],
  exp:"ZN=a(a+1). (a²-1)/(a(a+1))=(a+1)(a-1)/(a(a+1))=(a-1)/a.",
  steps:[
    {txt:"Polazni izraz: a/(a+1) − 1/(a(a+1)); ZN = a·(a+1) (najmanji zajednički višekratnik)"},
    {txt:"Prepiši prvi razlomak na ZN: a/(a+1) = a·a/(a·(a+1)) = a²/(a(a+1))"},
    {txt:"Oduzmi: a²/(a(a+1)) − 1/(a(a+1)) = (a² − 1)/(a(a+1))"},
    {txt:"Faktoriziraj brojnik (razlika kvadrata): a² − 1 = (a+1)(a−1)"},
    {txt:"Skrati zajednički faktor (a+1): (a+1)(a−1)/(a(a+1)) = (a−1)/a"},
    {txt:"Provjera za a=2: original = 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2; rezultat = (2−1)/2 = 1/2 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za zbrajanje/oduzimanje razlomaka A/B ± C/D, nađi ZN = LCM(B, D), prepiši svaki razlomak s tim ZN, izvedi operaciju nad brojnicima. Za skraćivanje koristi faktorizaciju i identitete (razlika kvadrata a²−b² =...",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:a-1|a] ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za zbrajanje/oduzimanje razlomaka A/B ± C/D, nađi ZN = LCM(B, D), prepiši svaki razlomak s tim ZN, izvedi operaciju nad brojnicima. Za skraćivanje koristi faktorizaciju i identitete (razlika kvadrata a²−b² = (a+b)(a−b), perfect square a²+2ab+b² = (a+b)² itd.). Intuicija: zajednički nazivnik 'usklađuje' razlomke za usporedbu/operaciju. Česta greška: zbrojiti brojevnike i NAZIVNIKE direktno (KRIVO — a/(a+1) − 1/(a(a+1)) ≠ (a−1)/(a+1+a²+a)); ili zaboraviti faktorizirati a²−1. Alt metoda: prošireni račun s a = konkretan broj (npr. a=3): 3/4 − 1/12 = 9/12 − 1/12 = 8/12 = 2/3; (3−1)/3 = 2/3 ✓ → potvrđuje formulu. Provjera: za a = 5: original = 5/6 − 1/30 = 25/30 − 1/30 = 24/30 = 4/5; rezultat = 4/5 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:22.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Odredite vrijednost x u rješenju sustava jednadžba: [SYS:0,2x+0,5=0,6y|3x+6y=0]",
  sol:{ans:"x = -1",alt:["X = -1","x = -1","x=-1","x=−1","≈ x = -1"]},
  exp:"Iz 2. jednadžbe: y=−x/2. Uvrsti: 0,2x+0,5=0,6·(−x/2)=-0,3x → 0,5x=-0,5 → x=-1.",
  steps:[
    {txt:"Sustav: 0,2x + 0,5 = 0,6y (1) i 3x + 6y = 0 (2)"},
    {txt:"Iz 2. izoliraj y: 6y = −3x → y = −x/2"},
    {txt:"Uvrsti u 1.: 0,2x + 0,5 = 0,6·(−x/2) = −0,3x"},
    {txt:"Skupi x-ove: 0,2x + 0,3x = −0,5 → 0,5x = −0,5 → x = −1"},
    {txt:"Y dobiješ unatrag: y = −(−1)/2 = 0,5"},
    {txt:"Provjera: (1) 0,2·(−1) + 0,5 = −0,2 + 0,5 = 0,3 = 0,6·0,5 = 0,3 ✓; (2) 3·(−1) + 6·0,5 = −3 + 3 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Alt metoda: matricom; pomnožiš (1) s 10 → 2x + 5 = 6y → 2x − 6y = −5; uz (2) 3x + 6y = 0, zbroji: 5x = −5 → x = −1 ✓",final:true,note:"alt"},
    {txt:"Točan odgovor: x = -1 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: supstitucijska metoda — iz jedne jednadžbe izrazi jednu varijablu (y ili x), uvrsti je u drugu jednadžbu; dobiješ jednu linearnu jednadžbu s jednom nepoznanicom.","Intuicija: 'zamijeni' varijablu izrazom da reduciraš sustav.","Česta greška: krivo izolirati y (zaboraviti predznak u 3x + 6y = 0 → y = −x/2, ne y = x/2); ili krivo pomnožiti decimale.","Alt metoda: pomnoži (1) s 10 (uklanja decimale), pa metoda suprotnih koeficijenata: 2x − 6y = −5, 3x + 6y = 0 → 5x = −5 → x = −1.","Provjera ✓: 0,2·(−1) + 0,5 = 0,3 i 0,6·0,5 = 0,3 ✓; 3·(−1) + 6·0,5 = 0 ✓"]},
  {id:22.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite jednadžbu 0,2·10^(4x−7) − 200 = 0.",
  sol:{ans:"x = 2,5",alt:["2,5","5/2"]},
  exp:"10^(4x-7)=1000=10³ → 4x-7=3 → x=2,5.",
  steps:[
    {txt:"Polazna: 0,2·10^(4x−7) − 200 = 0 → 0,2·10^(4x−7) = 200"},
    {txt:"Izoliraj potenciju (podijeli s 0,2): 10^(4x−7) = 200/0,2 = 1000"},
    {txt:"Prepoznaj 1000 kao potenciju baze 10: 1000 = 10³"},
    {txt:"Baze su iste (10) → izjednači eksponente: 4x − 7 = 3 → 4x = 10 → x = 10/4 = 2,5"},
    {txt:"Provjera: 0,2·10^(4·2,5 − 7) = 0,2·10³ = 0,2·1000 = 200 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: eksponencijalna jednadžba a·bˣ = c → bˣ = c/a; ako je c/a = b^n, onda x = n. Ako baze NISU iste, koristi logaritam. Intuicija: 10⁰ = 1, 10¹ = 10, 10² = 100, 10³ = 1000 — možemo prepoznati 1000 = 10³ vizualno....",note:"postupak",final:true},{txt:"Točan odgovor: x = 2,5 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: eksponencijalna jednadžba a·bˣ = c → bˣ = c/a; ako je c/a = b^n, onda x = n. Ako baze NISU iste, koristi logaritam. Intuicija: 10⁰ = 1, 10¹ = 10, 10² = 100, 10³ = 1000 — možemo prepoznati 1000 = 10³ vizualno. Česta greška: zaboraviti dijeliti s 0,2 i izračunati log direktno; ili krivo pretvoriti 200/0,2 = 100 (KRIVO — treba 1000, jer 0,2·1000 = 200). Alt metoda: logaritam (ako baze nisu iste): log(10^(4x−7)) = log(1000) → 4x−7 = 3 → x = 2,5 (isti odgovor, ali logaritmiranje općenitije). Provjera: 4·2,5−7 = 3 ✓; 0,2·10³ = 200 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:23.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"U kojoj točki graf te funkcije siječe os x?",
  sol:{ans:"(6, 0)",alt:["6,0","(6,0)"]},
  exp:"f(x)=0: −x/3+2=0 → x=6 → točka (6,0).",
  steps:[
    {txt:"Sjecište s x-osi: točke na x-osi imaju y = 0 → postavi f(x) = 0"},
    {txt:"−(1/3)x + 2 = 0 → −(1/3)x = −2"},
    {txt:"Pomnoži s −3: x = (−2)·(−3) = 6"},
    {txt:"Točka sjecišta: (6, 0)"},
    {txt:"Provjera: f(6) = −(1/3)·6 + 2 = −2 + 2 = 0 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: x-sjecište (nultočka) funkcije f je x za koji je f(x) = 0; geometrijski je to točka (x, 0) gdje graf siječe x-os. Intuicija: na x-osi je y = 0 (po definiciji), pa tražimo x koji čini funkciju nulom. Česta greška:...",note:"postupak",final:true},{txt:"Točan odgovor: (6, 0) ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: x-sjecište (nultočka) funkcije f je x za koji je f(x) = 0; geometrijski je to točka (x, 0) gdje graf siječe x-os. Intuicija: na x-osi je y = 0 (po definiciji), pa tražimo x koji čini funkciju nulom. Česta greška: tražiti y-sjecište umjesto x-sjecišta (KRIVO — y-sjecište bi bilo (0, 2)); ili pomiješati znak: −(1/3)x = −2 → x = +6 (ne −6). Alt metoda: za linearnu f(x) = kx + n, x-sjecište je x = −n/k = −2/(−1/3) = 6. Provjera: nagib k = −1/3 (negativan, pravac pada), y-sjecište 2, x-sjecište 6 — funkcija prelazi iz pozitivne (lijevo) u negativnu (desno) u x = 6 ✓.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:23.2,img:true,type:"sa",topic:"lin",points:1,img:true,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Nacrtajte graf zadane funkcije.",
  sol:{ans:"pravac kroz (0,2) i (6,0)",alt:["pravac kroz (0,2) i (6,0)","pravac kroz (0,2) i (6,0)","pravackroz(0,2)i(6,0)","~pravac kroz (0,2) i (6,0)","≈ pravac kroz (0,2) i (6,0)"]},
  exp:"y-sječ (0,2), x-sječ (6,0). Nagib k=-1/3 (pada).",
  steps:[
    {txt:"Pravac je definiran s 2 točke — najlakše: y-sjecište i x-sjecište"},
    {txt:"y-sjecište: f(0) = −(1/3)·0 + 2 = 2 → točka (0, 2)"},
    {txt:"x-sjecište: iz Q23,1 → točka (6, 0)"},
    {txt:"Nacrtaj koordinatni sustav, označi obje točke, poveži ih ravnom crtom"},
    {txt:"Provjera: nagib k = (0−2)/(6−0) = −2/6 = −1/3 ✓ (jednak izvornom k iz formule); pravac PADA s lijeva na desno (jer k < 0) ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za crtanje pravca dovoljne su točno 2 točke (kroz 2 točke prolazi jedinstven pravac). Najpraktičnije: koordinatne osi (y-sjec i x-sjec). Intuicija: y-sjecište govori 'odakle pravac kreće na y-osi'; x-sjecište...",note:"postupak",final:true},{txt:"Točan odgovor: pravac kroz (0,2) i (6,0) ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za crtanje pravca dovoljne su točno 2 točke (kroz 2 točke prolazi jedinstven pravac). Najpraktičnije: koordinatne osi (y-sjec i x-sjec). Intuicija: y-sjecište govori 'odakle pravac kreće na y-osi'; x-sjecište 'gdje siječe x-os'; spajanje daje cijeli pravac. Česta greška: koristiti samo jednu točku (nedovoljno) ili krivo izračunati nagib pa pravac 'nije fit' za obje točke. Alt metoda: točka (0, 2) + nagib k = −1/3 → 'desno za 3, dolje za 1' → idi do točke (3, 1) → opet 'desno 3, dolje 1' → (6, 0) ✓. Provjera: nagib (Δy/Δx) = (0−2)/(6−0) = −1/3 ✓; y-sjec = 2 ✓ → graf je linija od (0,2) do (6,0) i dalje.","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:24.1,img:true,type:"sa",topic:"stat",points:1,img:true,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Koliki je prosječni osobni dohodak u ta četiri mjeseca?",
  sol:{ans:"5197,50 kn",alt:["5197,50","5197,5"]},
  exp:"(5370+4982+5010+5428)/4=20790/4=5197,50 kn.",
  steps:[
    {txt:"Aritmetička sredina: prosjek = (sum svih) / (broj elemenata)"},
    {txt:"Zbroj: 5370 + 4982 + 5010 + 5428 = 20 790 kn"},
    {txt:"Podijeli s brojem mjeseci (4): 20 790 / 4 = 5197,50 kn"},
    {txt:"Provjera: 4 · 5197,50 = 20 790 ✓ (zbroj match); prosjek je između min (4982) i max (5428) ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aritmetička sredina (prosjek) niza brojeva x₁, x₂, ..., xₙ = (x₁ + x₂ + ... + xₙ) / n. Intuicija: 'ujednačeni' iznos koji svaki mjesec mora donijeti da ukupno bude isto kao stvarnih 4 mjeseca. Česta greška:...",note:"postupak",final:true},{txt:"Točan odgovor: 5197,50 kn ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: aritmetička sredina (prosjek) niza brojeva x₁, x₂, ..., xₙ = (x₁ + x₂ + ... + xₙ) / n. Intuicija: 'ujednačeni' iznos koji svaki mjesec mora donijeti da ukupno bude isto kao stvarnih 4 mjeseca. Česta greška: zaboraviti dijeliti s brojem elemenata (ostaviti zbroj) ili dijeliti s krivim brojem (npr. 12 jer 'mjeseci u godini' — KRIVO, imamo samo 4 podatka). Alt metoda: ponderirana sredina ili median — ali ovdje sve vrijednosti imaju isti težinski faktor pa je obična aritmetička sredina dovoljna. Provjera: prosjek 5197,5 leži između minimuma (4982) i maksimuma (5428) — uvijek je tako za aritmetičku sredinu ✓; zbroj odstupanja od prosjeka = (5370−5197,5) + (4982−5197,5) + (5010−5197,5) + (5428−5197,5) = 172,5 − 215,5 − 187,5 + 230,5 = 0 ✓ (svojstvo prosjeka).","Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka.","Provjera grafom/tablicom: vizualizacija često otkriva greške.","Tipičan propust: pomiješati prosjek, medijan i mod; ili apsolutnu i relativnu frekvenciju."]},
  {id:24.2,img:true,type:"sa",topic:"stat",points:1,img:true,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Za koliko je posto povećan dohodak u travnju u odnosu na ožujak?",
  sol:{ans:"≈ 8,34%",alt:["8,34","8,34"]},
  exp:"(5428-5010)/5010·100 = 418/5010·100 ≈ 8,34%.",
  steps:[
    {txt:"Apsolutno povećanje: travanj − ožujak = 5428 − 5010 = 418 kn"},
    {txt:"Postotno povećanje = (apsolutno povećanje / stara vrijednost) · 100"},
    {txt:"= (418 / 5010) · 100 ≈ 0,08343 · 100 ≈ 8,34%"},
    {txt:"Provjera: 5010 · 1,0834 = 5428 kn ≈ travanj ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotna promjena = (Δ / početna vrijednost) · 100%; uvijek dijeli sa STAROM vrijednošću (referentna baza), nikad s novom. Intuicija: ako nešto 'raste za p%', množi se s (1 + p/100). Česta greška: dijeliti s...",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 8,34% ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: postotna promjena = (Δ / početna vrijednost) · 100%; uvijek dijeli sa STAROM vrijednošću (referentna baza), nikad s novom. Intuicija: ako nešto 'raste za p%', množi se s (1 + p/100). Česta greška: dijeliti s NOVOM vrijednošću (418/5428 ≈ 7,7% — KRIVO, to bi bila 'koliki je dio povećanja u odnosu na NOVI iznos'); ili pomiješati red oduzimanja (5010−5428 = −418 — daje negativni postotak iako je travanj veći). Alt metoda: faktor rasta = travanj/ožujak = 5428/5010 ≈ 1,0834; postotak rasta = (1,0834 − 1)·100 = 8,34%. Provjera: 5010 + 8,34% od 5010 = 5010 + 418 = 5428 ✓; obrnuto: 5428 / 1,0834 ≈ 5010 ✓.","Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka.","Provjera grafom/tablicom: vizualizacija često otkriva greške.","Tipičan propust: pomiješati prosjek, medijan i mod; ili apsolutnu i relativnu frekvenciju."]},
  {id:25.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Koliki je procijenjeni broj molekula ugljikova monoksida na milijun molekula zraka za 2026. godinu?",
  sol:{ans:"3",alt:["3,03","3,03"]},
  exp:"t=2026-2010=16. M(16)=0,01·256-0,24·16+4,31=2,56-3,84+4,31=3,03.",
  steps:[
    {txt:"Identifikacija t: t = broj godina OD 2010. (t=0 je 2010., t=1 je 2011., ...)"},
    {txt:"Za 2026.: t = 2026 − 2010 = 16"},
    {txt:"Uvrsti u formulu: M(16) = 0,01·16² − 0,24·16 + 4,31"},
    {txt:"Računaj: 16² = 256; 0,01·256 = 2,56; 0,24·16 = 3,84"},
    {txt:"M(16) = 2,56 − 3,84 + 4,31 = 3,03 molekula CO/milijun"},
    {txt:"Provjera: M(0) = 4,31 (2010.); M(16) = 3,03 — manji od polazne vrijednosti, što ima smisla jer smo blizu minimuma (Q25,2 pokazuje da je minimum 2022.) ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod matematičkog modela s vremenom kao varijablom, pažljivo identificiraj što varijabla PREDSTAVLJA — često nije apsolutna godina nego RAZLIKA (broj godina od referentne). Intuicija: t = 0 odgovara polaznoj...",note:"postupak",final:true},{txt:"Točan odgovor: 3 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: kod matematičkog modela s vremenom kao varijablom, pažljivo identificiraj što varijabla PREDSTAVLJA — često nije apsolutna godina nego RAZLIKA (broj godina od referentne). Intuicija: t = 0 odgovara polaznoj godini (ovdje 2010.), a t = 16 znači '16 godina kasnije' = 2026. Česta greška: uvrstiti t = 2026 direktno u formulu (krivi red veličine — M(2026) bi bio ~41 000, besmisleno); ili t = 26 (ako student misli da je referenca 2000., ne 2010.). Alt metoda: cijela vrijednost 16² = 256, 256·0,01 = 2,56; razdvoji ostatak: −0,24·16 + 4,31 = −3,84 + 4,31 = 0,47; ukupno 2,56 + 0,47 = 3,03. Provjera: za 2010. (t=0), M(0) = 4,31 (zadana baza); za 2022. (t=12, minimum iz Q25,2) trebamo provjeriti — M(12) = 0,01·144 − 0,24·12 + 4,31 = 1,44 − 2,88 + 4,31 = 2,87 (najmanja vrijednost — Q25,2 ✓).","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:25.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Koje će godine prema toj procjeni biti [B:najmanji] broj molekula ugljikova monoksida na milijun molekula zraka?",
  sol:{ans:"2022. godine",alt:["2022","12"]},
  exp:"Minimum kvadratne (a>0): t=−b/(2a)=0,24/0,02=12 → 2010+12=2022.",
  steps:[
    {txt:"M(t) = 0,01t² − 0,24t + 4,31; a = 0,01 > 0 → parabola otvorena prema gore → tjeme je MINIMUM"},
    {txt:"t-koordinata tjemena: t_min = −b/(2a) = −(−0,24)/(2·0,01) = 0,24/0,02 = 12"},
    {txt:"Pretvori t u godinu: t = 12 znači 12 godina od 2010. → 2010 + 12 = 2022. godina"},
    {txt:"Minimum vrijednost: M(12) = 0,01·144 − 0,24·12 + 4,31 = 1,44 − 2,88 + 4,31 = 2,87"},
    {txt:"Provjera simetrije: M(11) = 0,01·121 − 0,24·11 + 4,31 = 1,21 − 2,64 + 4,31 = 2,88; M(13) = 0,01·169 − 0,24·13 + 4,31 = 1,69 − 3,12 + 4,31 = 2,88 → M(11) = M(13) ≥ M(12) ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za kvadratnu funkciju f(t) = at² + bt + c, tjeme je u t = −b/(2a); ako a > 0, tjeme je MINIMUM, ako a < 0 — maksimum. Vrijednost u tjemenu = f(t_min). Intuicija: parabola otvorena prema gore (a > 0) ima 'dno' u...",note:"postupak",final:true},{txt:"Točan odgovor: 2022. godine ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za kvadratnu funkciju f(t) = at² + bt + c, tjeme je u t = −b/(2a); ako a > 0, tjeme je MINIMUM, ako a < 0 — maksimum. Vrijednost u tjemenu = f(t_min). Intuicija: parabola otvorena prema gore (a > 0) ima 'dno' u tjemenu; kvadratna ovisnost znači simetriju oko vertikale t = t_min. Česta greška: zaboraviti minus u −b/(2a) (ovdje −(−0,24) = +0,24 — pažljivo s dvostrukim minusom); ili miješati 'koja godina' s 't' (npr. odgovoriti '12' umjesto '2022.'). Alt metoda: derivacija M'(t) = 0,02t − 0,24 = 0 → t = 12; ili kanonski oblik M(t) = 0,01(t − 12)² + 2,87, gdje je 2,87 minimalna vrijednost. Provjera: M(t) simetrična oko t = 12 → M(0) = 4,31 = M(24) — provjera: M(24) = 0,01·576 − 0,24·24 + 4,31 = 5,76 − 5,76 + 4,31 = 4,31 ✓.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:26.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Oplošje je ___ dm².",
  sol:{ans:"1280 dm²",alt:["1280 d","1280 dm²","1280d","≈ 1280 dm²"]},
  exp:"Baza: 20²=400. Pobočke: 4·(1/2·20·22)=880. Oplošje=400+880=1280 dm².",
  steps:[
    {txt:"Identifikacija: pravilna uspravna četverostrana piramida → 4 jednake pobočne stranice (jednakokraki trokuti), baza je kvadrat"},
    {txt:"Površina baze (kvadrat sa stranicom a = 20 dm): P_b = a² = 20² = 400 dm²"},
    {txt:"Površina jedne pobočne stranice (trokut s bazom a i visinom h_s = apotema pobočke 22 dm): P_t = (1/2)·a·h_s = (1/2)·20·22 = 220 dm²"},
    {txt:"Pobočje (sve 4 stranice): P_p = 4·P_t = 4·220 = 880 dm²"},
    {txt:"Oplošje (ukupna vanjska površina): O = P_b + P_p = 400 + 880 = 1280 dm²"},
    {txt:"Provjera: 1280 dm² = 12,80 m² — razumna veličina za piramidu s bazom 4 m² ✓ (omjer oplošje:baza = 1280:400 = 3,2 — tipično za relativno 'visoku' piramidu)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: oplošje (totalna vanjska površina) piramide = površina baze + zbroj svih pobočnih stranica. Za pravilnu n-stranu piramidu, sve pobočne stranice su sukladni trokuti pa P_p = n·P_t. Visina pobočke (h_s, 'apotema')...",note:"postupak",final:true},{txt:"Točan odgovor: 1280 dm² ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: oplošje (totalna vanjska površina) piramide = površina baze + zbroj svih pobočnih stranica. Za pravilnu n-stranu piramidu, sve pobočne stranice su sukladni trokuti pa P_p = n·P_t. Visina pobočke (h_s, 'apotema') je visina jednog pobočnog trokuta, NE visina piramide. Intuicija: 'omotaj' piramidu papirom — koliko ti papira treba? Baza (jedan komad) + svi trokuti. Česta greška: zaboraviti bazu (krivo: 880 dm²); ili pomiješati h_s s visinom piramide h (te su DVIJE različite stvari — Q26,2 pokazuje razliku!). Alt metoda: oplošje = a² + 2·a·h_s (za pravilnu četverostranu) = 400 + 2·20·22 = 400 + 880 = 1280 ✓. Provjera: pobočje 880 dm² = 4 trokuta po 220 dm²; svaki trokut ima bazu 20 i visinu 22 → P = (20·22)/2 = 220 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:26.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Obujam je ___ dm³.",
  warn:"Pazi: visina piramide h ≠ visina pobočke (bočne strane). Visinu izračunaj iz Pitagorina poučka: h² = h_s² − (a/2)².",
  sol:{ans:"≈ 2612,79 dm³",alt:["2612,79","3200√6/3"]},
  exp:"h=√(22²-10²)=√384=8√6. V=1/3·400·8√6=3200√6/3≈2612,79 dm³.",
  steps:[
    {txt:"⚠️ Trebamo VISINU PIRAMIDE h, NE visinu pobočke h_s = 22 dm. Visina piramide ide od vrha okomito do središta baze."},
    {txt:"Pitagorin trokut: vrh V — središte baze N — sredina brida baze M; H_s je hipotenuza, h je kateta, a/2 = 10 je druga kateta"},
    {txt:"Pitagora: h² + (a/2)² = h_s² → h² = 22² − 10² = 484 − 100 = 384 → h = √384 = 8√6 ≈ 19,60 dm"},
    {txt:"Volumen piramide: V = (1/3)·P_baze·h = (1/3)·400·8√6 = 3200√6/3"},
    {txt:"Decimalno: 3200·2,449/3 ≈ 7836,67/3 ≈ 2612,79 dm³"},
    {txt:"Provjera: V/dm³ × 1 dm³/L = 2612,79 L ≈ 2,6 m³ (razumna veličina); h < h_s (19,60 < 22) ✓ (h_s je hipotenuza pa mora biti dulja)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: volumen piramide = (1/3)·P_baze·h, gdje h je VISINA PIRAMIDE (okomica iz vrha na ravninu baze). KLJUČNA RAZLIKA: visina piramide h ≠ visina pobočke h_s (apotema). Razlikovanje: h ide od vrha do CENTRA baze, h_s...",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 2612,79 dm³ ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: volumen piramide = (1/3)·P_baze·h, gdje h je VISINA PIRAMIDE (okomica iz vrha na ravninu baze). KLJUČNA RAZLIKA: visina piramide h ≠ visina pobočke h_s (apotema). Razlikovanje: h ide od vrha do CENTRA baze, h_s od vrha do SREDINE BRIDA baze. Pitagora: h² + (a/2)² = h_s². Intuicija: piramida je 'oštrija' od svojih pobočki — visina piramide je 'unutarnja' (kroz središte), pobočke su 'kose' (po stranicama). Česta greška: koristiti h_s = 22 umjesto h u formuli za V — najklasičnija zamka u zadacima s piramidom; daje V = (1/3)·400·22 ≈ 2933 dm³ (KRIVI rezultat, oko 12% viši). Alt metoda: iz volumena unatrag — V = 2612,79 → h = 3V/P_baze = 3·2612,79/400 ≈ 19,60 dm ✓. Provjera: 8√6 ≈ 8·2,449 = 19,60; (19,60)² + 10² = 384 + 100 = 484 = 22² ✓ (Pitagora vrijedi).","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:27.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 27 (1. dio od 2):",
  q:"Kada je završilo to ponovljeno upozorenje za nadolazeću opasnost?",
  sol:{ans:"8h 20min 55s",alt:["8h 20min 55","8h 20min 55s","8h20min55","8h20min55s","≈ 8h 20min 55s"]},
  exp:"Kraj prvog: 8:12:35+100s=8:14:15. Stanka 300s: 8:14:15+5min=8:19:15. Kraj drugog: 8:19:15+100s=8:20:55.",
  steps:[
    {txt:"Sastav 1 upozorenja: JZJZJ = 5 tonova · 20 s = 100 s ukupno"},
    {txt:"Početak 1. upozorenja: 8:12:35; kraj 1. = 8:12:35 + 100s"},
    {txt:"Zbroji sekunde: 35s + 100s = 135s = 2min 15s → 8:14:15 (kraj 1.)"},
    {txt:"Stanka 5 min: 8:14:15 + 5min = 8:19:15 (početak 2. upozorenja)"},
    {txt:"Kraj 2. upozorenja: 8:19:15 + 100s = 8:19:15 + 1min 40s = 8:20:55"},
    {txt:"Provjera: ukupno trajanje od 8:12:35 do 8:20:55 = 8min 20s = 100s + 300s + 100s = 500s ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbrajanje vremena radi se kao kod brojeva, ali baza je 60 (60 s = 1 min, 60 min = 1 h). Kad sekunde prijeđu 60, 'prelije se' u minute. Intuicija: zamisli štopericu — pribrajaš sekunde, kad pređu 60, dodaš minutu....",note:"postupak",final:true},{txt:"Točan odgovor: 8h 20min 55s ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: zbrajanje vremena radi se kao kod brojeva, ali baza je 60 (60 s = 1 min, 60 min = 1 h). Kad sekunde prijeđu 60, 'prelije se' u minute. Intuicija: zamisli štopericu — pribrajaš sekunde, kad pređu 60, dodaš minutu. Česta greška: zaboraviti pretvoriti sekunde > 60 u minute (npr. ostaviti 8:12:135) ili zaboraviti stanku (5 min) između 2 upozorenja. Alt metoda: pretvori sve u sekunde od 8:00:00 — početak: 12·60+35 = 755s; kraj 1.: 755+100 = 855s = 14min 15s = 8:14:15 ✓; početak 2.: 855+300 = 1155s = 19min 15s = 8:19:15 ✓; kraj 2.: 1155+100 = 1255s = 20min 55s = 8:20:55 ✓. Provjera: 1255s / 60 = 20,917 min → 20min 55s; 1255 − 20·60 = 1255 − 1200 = 55 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:27.2,type:"sa",topic:"br",points:1,
  q:"Je li u 8h 19min 48s bio jednoličan ton, zavijajući ton ili stanka?",
  context:"Zadatak 27 (2. dio od 2):",
  sol:{ans:"Zavijajući ton",alt:["Z","zavijajući"]},
  exp:"8:19:48 je 33s nakon 8:19:15. Raspored: J(0-20s), Z(20-40s), J(40-60s)... 33s → Z.",
  steps:[
    {txt:"Iz Q27,1: ponovljeno (drugo) upozorenje počelo u 8:19:15 (a NE original u 8:12:35)"},
    {txt:"Vrijeme proteklo od početka 2. upozorenja: 8:19:48 − 8:19:15 = 33 s"},
    {txt:"Vremenska linija upozorenja (JZJZJ, svaki ton 20s): J [0−20s] → Z [20−40s] → J [40−60s] → Z [60−80s] → J [80−100s]"},
    {txt:"33s pada u interval [20s, 40s⟩ → Zavijajući ton (Z)"},
    {txt:"Provjera: 33s je 13s nakon početka 2. tona (Z), koji traje od 20s do 40s → unutar intervala ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za zadatak s vremenskim slijedom akcija, postavi vremensku liniju od POČETKA relevantnog događaja i identificiraj koji je interval u tijeku u traženom trenutku. Intuicija: 33s znači 'nešto više od pola prvog Z...",note:"postupak",final:true},{txt:"Točan odgovor: Zavijajući ton ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za zadatak s vremenskim slijedom akcija, postavi vremensku liniju od POČETKA relevantnog događaja i identificiraj koji je interval u tijeku u traženom trenutku. Intuicija: 33s znači 'nešto više od pola prvog Z ciklusa' — student treba 'iscrtati' trakovi mental ili na papiru. Česta greška: računati 33s od POČETKA prvog upozorenja (8:12:35 + 33s = 8:13:08, krivo); ili pomiješati J i Z u rasporedu (npr. ZJZJZ umjesto JZJZJ). Alt metoda: dijeljenje s 20 — 33/20 = 1 (cijeli) + 13/20 (ostatak) → 1 cijeli ton + 13s drugog tona; raspored počinje s J, pa 2. ton je Z → trenutak je usred Z. Provjera: 8:19:15 + 33s = 8:19:48 ✓; u intervalu 20-40s nakon 8:19:15 je Z ton.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Koliko treba platiti uslugu prijevoza taksijem A na udaljenosti od 7 km?",
  sol:{ans:"31 kn",alt:["31","31 kn","≈ 31 kn"]},
  exp:"10+3·7=10+21=31 kn.",
  steps:[
    {txt:"Cijena = startnina + (cijena/km · broj km) — linearni model"},
    {txt:"Taksi A: startnina 10 kn, cijena 3 kn/km; za 7 km"},
    {txt:"Cijena = 10 + 3·7 = 10 + 21 = 31 kn"},
    {txt:"Provjera: 31 kn / 7 km = 4,43 kn/km — između čistog cijene po km (3) i punog tarifa s razdijeljenom startninom; razumno ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija cijene: y = b + k·x, gdje je b fiksni dio (startnina), k varijabilni (cijena po km), x količina (km). Intuicija: 'startnina je ulaznica', cijena po km je 'taksimetar'; uvijek plaćaš oba. Česta...",note:"postupak",final:true},{txt:"Točan odgovor: 31 kn ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: linearna funkcija cijene: y = b + k·x, gdje je b fiksni dio (startnina), k varijabilni (cijena po km), x količina (km). Intuicija: 'startnina je ulaznica', cijena po km je 'taksimetar'; uvijek plaćaš oba. Česta greška: zaboraviti startninu (krivo: 3·7 = 21 kn) ili krivo pomnožiti (3·7 = 24 — krivo pomnoženje). Alt metoda: za usporedbu — 7 km · 3 kn = 21 kn 'čista vožnja', + 10 kn 'fiksno' = 31 kn ukupno. Provjera: za 0 km (samo start) → cijena = 10 kn ✓; za 1 km → 13 kn; razlika 13−10 = 3 kn (cijena 1 km) ✓.","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Za koju će udaljenost u kilometrima usluga prijevoza taksijem B i taksijem C biti jednako naplaćena?",
  sol:{ans:"6 km",alt:["6","6 km","≈ 6 km"]},
  exp:"5+4x=20+1,5x → 2,5x=15 → x=6 km.",
  steps:[
    {txt:"Cijena B = 5 + 4x (startnina 5, cijena 4 kn/km); Cijena C = 20 + 1,5x (startnina 20, cijena 1,5 kn/km)"},
    {txt:"Postavi jednadžbu: cijena B = cijena C → 5 + 4x = 20 + 1,5x"},
    {txt:"Skupi x-ove: 4x − 1,5x = 20 − 5 → 2,5x = 15"},
    {txt:"Riješi: x = 15 / 2,5 = 6 km"},
    {txt:"Provjera: B(6) = 5 + 4·6 = 29 kn; C(6) = 20 + 1,5·6 = 29 kn → match ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'kada su dvije usluge jednako naplaćene' = traži x za koji f₁(x) = f₂(x); riješava se jednom linearnom jednadžbom. Intuicija: grafički — dva pravca se sijeku u točki; za kraće x, jeftinija je usluga s manjom...",note:"postupak",final:true},{txt:"Točan odgovor: 6 km ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: 'kada su dvije usluge jednako naplaćene' = traži x za koji f₁(x) = f₂(x); riješava se jednom linearnom jednadžbom. Intuicija: grafički — dva pravca se sijeku u točki; za kraće x, jeftinija je usluga s manjom startninom; za dulje x, jeftinija je s manjom cijenom po km. Točka sjecišta = 'break-even'. Česta greška: pomiješati startnine i cijene/km u modelu; ili krivo riješiti — npr. 2,5x = 15 → x = 2,5/15 (KRIVO — dijeli krivim brojem). Alt metoda: razlika cijena = 0 → (5+4x) − (20+1,5x) = 0 → 2,5x − 15 = 0 → x = 6. Provjera: za x < 6 (npr. 4 km): B = 21, C = 26 → B jeftinije ✓; za x > 6 (npr. 8 km): B = 37, C = 32 → C jeftinije ✓; u x = 6, izjednačeno na 29 kn.","Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:28.3,img:true,type:"sa",img:true,topic:"lin",points:1,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Napišite formulu prema kojoj se računa cijena usluge prijevoza taksijem B. Upotrijebite oznaku x za broj prijeđenih kilometara, a oznaku y za cijenu usluge prijevoza (u kunama).",
  sol:{ans:"y = 5 + 4x",alt:["y=5+4x","4x+5"]},
  exp:"Startnina 5 kn + 4 kn/km · x km = y kn.",
  steps:[
    {txt:"Linearni model cijene: y = (fiksni dio) + (varijabilni po km) · x"},
    {txt:"Taksi B: fiksni dio = startnina = 5 kn; varijabilni = cijena/km = 4 kn"},
    {txt:"Formula: y = 5 + 4·x = 4x + 5"},
    {txt:"Provjera: x = 0 (samo startnina) → y = 5 ✓; x = 1 km → y = 9 kn; razlika 9−5 = 4 kn (cijena 1 km) ✓; iz Q28,2 znamo y(6) = 29 → 5+24 = 29 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija y = kx + b — koeficijent k je nagib (stopa promjene, ovdje cijena po km), konstanta b je y-sjecište (vrijednost kad x = 0, ovdje startnina). Standardni zapis: y = kx + b ili y = b + kx...",note:"postupak",final:true},{txt:"Točan odgovor: y = 5 + 4x ✓",note:"odgovor",final:true},{txt:"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: linearna funkcija y = kx + b — koeficijent k je nagib (stopa promjene, ovdje cijena po km), konstanta b je y-sjecište (vrijednost kad x = 0, ovdje startnina). Standardni zapis: y = kx + b ili y = b + kx (semantički isto). Intuicija: zamisli pravac u koordinatnom sustavu (x = km, y = kn) — počinje u (0, b) i raste s nagibom k. Česta greška: zamijeniti k i b mjestima (npr. y = 5x + 4 — krivo, 5 je startnina, ne cijena/km); ili zaboraviti b (samo y = 4x — daje y(0) = 0, krivo). Alt metoda: dvije točke na pravcu — x=0, y=5 (samo startnina); x=10, y=45 (5 + 4·10); nagib = (45−5)/(10−0) = 4 ✓, y-sjecište = 5 ✓ → y = 4x + 5. Provjera: za 5 km → y = 20+5 = 25 kn (realan iznos); za 100 km → y = 405 kn (realno za duge udaljenosti).","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]}
];

export const qImages = {
  "2015_jesen_B__11": () => e(SvgZad11_2015JB, null),
  "2015_jesen_B__23.2": () => e(SvgZad23b_2015JB, null),
  "2015_jesen_B__24.1": () => e(SvgZad24_2015JB, null),
  "2015_jesen_B__24.2": () => e(SvgZad24_2015JB, null),
  "2015_jesen_B__28.1": () => e(SvgZad28_2015JB, null),
  "2015_jesen_B__28.2": () => e(SvgZad28_2015JB, null),
  "2015_jesen_B__28.3": () => e(SvgZad28_2015JB, null),
};
