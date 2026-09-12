// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgZad27c_2015LB(){
  const W=320,H=260,cx=130,cy=140,sc=35;
  const gridLines=[];
  for(let i=-3;i<=2;i++) gridLines.push(e("line",{key:"gv"+i,x1:cx+i*sc,y1:10,x2:cx+i*sc,y2:H-10,stroke:"#2a2d3e",strokeWidth:1}));
  for(let i=-4;i<=2;i++) gridLines.push(e("line",{key:"gh"+i,x1:10,y1:cy-i*sc,x2:W-10,y2:cy-i*sc,stroke:"#2a2d3e",strokeWidth:1}));
  let path=`M ${cx-3.3*sc} ${cy-((-3.3)**2+2*(-3.3)-3)*sc}`;
  for(let xi=-3.3;xi<=1.4;xi+=0.04){
    path+=` L ${cx+xi*sc} ${cy-(xi*xi+2*xi-3)*sc}`;
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    ...gridLines,
    e("line",{x1:10,y1:cy,x2:W-10,y2:cy,stroke:"var(--muted)",strokeWidth:1.5}),
    e("line",{x1:cx,y1:H-10,x2:cx,y2:10,stroke:"var(--muted)",strokeWidth:1.5}),
    e("polygon",{points:`${W-10},${cy} ${W-20},${cy-4} ${W-20},${cy+4}`,fill:"var(--muted)"}),
    e("polygon",{points:`${cx},10 ${cx-4},20 ${cx+4},20`,fill:"var(--muted)"}),
    e("text",{x:W-8,y:cy+4,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"x"),
    e("text",{x:cx+4,y:10,fill:"var(--muted)",fontSize:12,fontStyle:"italic"},"y"),
    e("text",{x:cx+4,y:cy+14,fill:"var(--muted)",fontSize:10},"0"),
    ...[-3,-2,-1,1].map(i=>e("text",{key:"lx"+i,x:cx+i*sc-5,y:cy+13,fill:"var(--muted)",fontSize:10},i)),
    ...[-4,-3,-2,-1,1,2].map(i=>e("text",{key:"ly"+i,x:cx-16,y:cy-i*sc+4,fill:"var(--muted)",fontSize:10},i)),
    e("path",{d:path,fill:"none",stroke:"var(--blue)",strokeWidth:2.5}),
    e("circle",{cx:cx-3*sc,cy:cy,r:4,fill:"#e8c547"}),
    e("circle",{cx:cx+1*sc,cy:cy,r:4,fill:"#e8c547"}),
    e("circle",{cx:cx-1*sc,cy:cy+4*sc,r:4,fill:"#3dd68c"}),
    e("text",{x:cx-1*sc+5,y:cy+4*sc+4,fill:"#3dd68c",fontSize:10},"tjeme"),
    e("text",{x:cx+0.5*sc,y:cy-2*sc,fill:"var(--blue)",fontSize:10,fontStyle:"italic"},"y=x²+2x−3")
  );
}

function SvgZad26_2015LB(){
  const W=320,H=220;
  const A=[60,180],B=[220,180],D=[60,180-104],C=[220,180-64];
  const pts=arr=>arr.map(p=>p.join(",")).join(" ");
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    e("polygon",{points:pts([A,B,C,D]),fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:2}),
    e("rect",{x:A[0],y:A[1]-14,width:14,height:14,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    e("rect",{x:B[0]-14,y:B[1]-14,width:14,height:14,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    e("text",{x:(A[0]+B[0])/2,y:A[1]+16,fill:"var(--muted)",fontSize:12,textAnchor:"middle"},"10 cm"),
    e("text",{x:A[0]-30,y:(A[1]+D[1])/2+4,fill:"var(--muted)",fontSize:12},"6,5 cm"),
    e("text",{x:B[0]+5,y:(B[1]+C[1])/2+4,fill:"var(--muted)",fontSize:12},"4 cm"),
    ...[["A",A,[-16,6]],["B",B,[6,6]],["C",C,[6,-4]],["D",D,[-16,-4]]].map(([n,p,[ox,oy]])=>
      e("text",{key:n,x:p[0]+ox,y:p[1]+oy,fill:"var(--blue)",fontSize:14,fontStyle:"italic",fontWeight:"bold"},n)
    )
  );
}

function SvgZad16_2015LB(){
  const W=680, H=320;
  // Skala: x=dob 2-18 (god), y=visina 80-195 (cm)
  // Lijevi graf: djevojčice, desni: dječaci
  const leftX=45, rightX=370, gW=285, gH=220;
  const topY=40;
  // x mapiranje: dob 2..18 → 0..gW
  const xd=(dob)=>(dob-2)/(18-2)*gW;
  // y mapiranje: visina 80..195 → gH..0
  const yh=(h)=>gH-(h-80)/(195-80)*gH;

  // Podaci — djevojčice
  const djevojcice = {
    c95:[91,99,106,113,120,126,133,139,145,152,159,164,167,170,171,172,173],
    c50:[86,93,100,107,113,119,125,131,137,144,151,156,159,162,163,164,164],
    c5: [81,87, 94,100,106,111,117,122,127,133,140,145,148,150,151,151,152],
  };
  // Podaci — dječaci
  const djecaci = {
    c95:[92,100,107,114,120,127,133,139,144,150,157,165,173,181,187,191,192],
    c50:[87, 94,101,108,114,120,126,132,138,143,149,156,163,169,173,176,177],
    c5: [82, 88, 95,101,107,113,118,123,128,133,138,143,149,155,160,163,164],
  };

  const dobi=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

  const makePath=(data,ox)=>{
    const pts=dobi.map((d,i)=>[ox+xd(d), topY+yh(data[i])]);
    return `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)} ` +
           pts.slice(1).map(p=>`L ${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  };

  const makeGrid=(ox)=>{
    const els=[];
    // y gridlines i oznake
    [80,90,100,110,120,130,140,150,160,170,180,190].forEach(h=>{
      const y=topY+yh(h);
      els.push(e("line",{key:`gh${h}${ox}`,x1:ox,y1:y,x2:ox+gW,y2:y,stroke:"#2a2d3e",strokeWidth:0.6}));
      els.push(e("text",{key:`gy${h}${ox}`,x:ox-4,y:y+3,fill:"var(--muted)",fontSize:7.5,textAnchor:"end"},h));
    });
    // x gridlines i oznake
    dobi.forEach(d=>{
      const x=ox+xd(d);
      els.push(e("line",{key:`gx${d}${ox}`,x1:x,y1:topY,x2:x,y2:topY+gH,stroke:"#2a2d3e",strokeWidth:0.6}));
      if(d<=17) els.push(e("text",{key:`gxl${d}${ox}`,x:x,y:topY+gH+12,fill:"var(--muted)",fontSize:7.5,textAnchor:"middle"},d));
    });
    // Okvir
    els.push(e("rect",{key:"fr"+ox,x:ox,y:topY,width:gW,height:gH,fill:"none",stroke:"var(--muted)",strokeWidth:1}));
    return els;
  };

  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},

    // ── DJEVOJČICE (lijevo) ──────────────────────
    ...makeGrid(leftX),
    // Krivulje
    e("path",{d:makePath(djevojcice.c95,leftX),fill:"none",stroke:"#1a1a1a",strokeWidth:2}),
    e("path",{d:makePath(djevojcice.c50,leftX),fill:"none",stroke:"var(--muted)",strokeWidth:1.8}),
    e("path",{d:makePath(djevojcice.c5,leftX), fill:"none",stroke:"rgba(148,163,184,0.3)",strokeWidth:1.8}),
    // Oznake centila
    e("text",{x:leftX+gW+3,y:topY+yh(173),fill:"#1a1a1a",fontSize:8,dominantBaseline:"middle"},"95. centil"),
    e("text",{x:leftX+gW+3,y:topY+yh(164),fill:"var(--muted)",fontSize:8,dominantBaseline:"middle"},"50. centil"),
    e("text",{x:leftX+gW+3,y:topY+yh(152),fill:"rgba(148,163,184,0.3)",fontSize:8,dominantBaseline:"middle"},"5. centil"),
    // Naslov i os
    e("text",{x:leftX+gW/2,y:18,fill:"var(--text)",fontSize:9,fontWeight:700,textAnchor:"middle"},"KRIVULJA RASTA DJEVOJČICA"),
    e("text",{x:leftX+gW/2,y:topY+gH+24,fill:"var(--muted)",fontSize:8,textAnchor:"middle"},"Dob (godine)"),
    e("text",{x:leftX-30,y:topY+gH/2,fill:"var(--muted)",fontSize:8,textAnchor:"middle",
      transform:`rotate(-90,${leftX-30},${topY+gH/2})`},"Visina (cm)"),

    // ── DJEČACI (desno) ──────────────────────────
    ...makeGrid(rightX),
    e("path",{d:makePath(djecaci.c95,rightX),fill:"none",stroke:"#1a1a1a",strokeWidth:2}),
    e("path",{d:makePath(djecaci.c50,rightX),fill:"none",stroke:"var(--muted)",strokeWidth:1.8}),
    e("path",{d:makePath(djecaci.c5,rightX), fill:"none",stroke:"rgba(148,163,184,0.3)",strokeWidth:1.8}),
    e("text",{x:rightX+gW+3,y:topY+yh(192),fill:"#1a1a1a",fontSize:8,dominantBaseline:"middle"},"95. centil"),
    e("text",{x:rightX+gW+3,y:topY+yh(177),fill:"var(--muted)",fontSize:8,dominantBaseline:"middle"},"50. centil"),
    e("text",{x:rightX+gW+3,y:topY+yh(164),fill:"rgba(148,163,184,0.3)",fontSize:8,dominantBaseline:"middle"},"5. centil"),
    e("text",{x:rightX+gW/2,y:18,fill:"var(--text)",fontSize:9,fontWeight:700,textAnchor:"middle"},"KRIVULJA RASTA DJEČAKA"),
    e("text",{x:rightX+gW/2,y:topY+gH+24,fill:"var(--muted)",fontSize:8,textAnchor:"middle"},"Dob (godine)"),
  );
}

function SvgZad13_2015LB(){
  // Prikazuje sve 4 opcije + objašnjenje
  return e("div",{style:{width:"100%"}},
    e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:8}},
      "Grafička rješenja sustava jednadžbi:"),
    e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--blue)",marginBottom:3}},"A."),
        e(SvgZad13_2015LB_A,null)
      ),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--muted)",marginBottom:3}},"B."),
        e(SvgZad13_2015LB_B,null)
      ),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--muted)",marginBottom:3}},"C."),
        e(SvgZad13_2015LB_C,null)
      ),
      e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--muted)",marginBottom:3}},"D."),
        e(SvgZad13_2015LB_D,null)
      )
    )
  );
}

function SvgZad13_2015LB_D(){
  // NETOČNO: P1: y=3x-3, P2: y=x/3+1 — sjecište u 1. kvadrantu
  return _makeSustav13Graf("D",{
    sx:1.5, sy:1.5,
    lines:[
      {x1:-0.5,y1:3*(-0,5)-3, x2:2.5,y2:3*2.5-3, color:"var(--blue)"},
      {x1:-3,  y1:-3/3+1,    x2:3,  y2:3/3+1,    color:"#f87171"},
    ]
  });
}

function SvgZad13_2015LB_C(){
  // NETOČNO: obrnuti nagibi — P1: y=-3x+3, P2: y=-x/3-1
  return _makeSustav13Graf("C",{
    sx:1, sy:0,
    lines:[
      {x1:-0.5,y1:-3*(-0,5)+3, x2:2.5,y2:-3*2.5+3, color:"var(--blue)"},
      {x1:-3,  y1:3/3-1,       x2:3,  y2:-3/3-1,  color:"#f87171"},
    ]
  });
}

function SvgZad13_2015LB_B(){
  // NETOČNO: P1: y=3x+3, P2: y=x/3+1 (y-os na +1, sjecište gore-desno)
  return _makeSustav13Graf("B",{
    sx:0, sy:1,
    lines:[
      {x1:-2.1,y1:3*(-2.1)+3, x2:0.8,y2:3*0.8+3, color:"var(--blue)"},
      {x1:-3,  y1:-3/3+1,     x2:3,  y2:3/3+1,   color:"#f87171"},
    ]
  });
}

function SvgZad13_2015LB_A(){
  // TOČAN: P1: y=3x+3 (strmiji, gore-lijevo↗), P2: y=x/3-1 (blaži)
  // S=(-1.5,-1.5) u 3. kvadrantu
  return _makeSustav13Graf("A",{
    sx:-1.5, sy:-1.5,
    lines:[
      {x1:-2.1,y1:3*(-2.1)+3, x2:0.8,y2:3*0.8+3, color:"var(--blue)"},    // y=3x+3
      {x1:-2.5,y1:-2.5/3-1,   x2:3,  y2:3/3-1,    color:"#f87171"},    // y=x/3-1
    ]
  });
}

function SvgZad12_2015LB(){
  const W=300,H=250;
  const ox=150,oy=210,dx=55,dy=22;
  const A=[ox-dx,oy+dy],B=[ox+dx,oy+dy],C=[ox+dx,oy-dy],D=[ox-dx,oy-dy];
  const N=[ox,oy],V=[ox,oy-165],P=[ox+dx,oy+dy/2];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    e("line",{x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:B[0],y1:B[1],x2:C[0],y2:C[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:C[0],y1:C[1],x2:D[0],y2:D[1],stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"4,3"}),
    e("line",{x1:D[0],y1:D[1],x2:A[0],y2:A[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:V[0],y1:V[1],x2:A[0],y2:A[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:V[0],y1:V[1],x2:B[0],y2:B[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:V[0],y1:V[1],x2:C[0],y2:C[1],stroke:"var(--text)",strokeWidth:1.8}),
    e("line",{x1:V[0],y1:V[1],x2:D[0],y2:D[1],stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"4,3"}),
    e("line",{x1:V[0],y1:V[1],x2:N[0],y2:N[1],stroke:"#3dd68c",strokeWidth:2.5,strokeDasharray:"6,3"}),
    e("line",{x1:V[0],y1:V[1],x2:P[0],y2:P[1],stroke:"#e8c547",strokeWidth:1.5,strokeDasharray:"4,3"}),
    ...[["V",V,[-8,-12]],["A",A,[-16,6]],["B",B,[6,6]],["C",C,[6,-4]],["D",D,[-16,-4]]].map(([n,p,[ox,oy]])=>
      e("text",{key:n,x:p[0]+ox,y:p[1]+oy,fill:"var(--text)",fontSize:14,fontStyle:"italic",fontWeight:"bold"},n)
    ),
    e("circle",{cx:N[0],cy:N[1],r:4,fill:"#3dd68c"}),
    e("text",{x:N[0]+5,y:N[1]+4,fill:"#3dd68c",fontSize:13,fontStyle:"italic",fontWeight:"bold"},"N"),
    e("circle",{cx:P[0],cy:P[1],r:3,fill:"#e8c547"}),
    e("text",{x:P[0]+5,y:P[1]+4,fill:"#e8c547",fontSize:12,fontStyle:"italic"},"P"),
    e("text",{x:8,y:H-8,fill:"#3dd68c",fontSize:11},"VN = visina piramide")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: provjeri koji interval sadrži 7 (pazi otvoreno/zatvoreno granice).",topic:"br",points:1,
  q:"Kojemu od navedenih intervala pripada broj 7?",
  opts:["⟨−∞, 7⟩","⟨7, 9]","[1, 8]","[8, +∞⟩"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"7 ∈ [1, 8] ✓. A: 7 isključen (otvoreni), B: 7 isključen s lijeva, D: 7 < 8.",
  steps:[
    {txt:"A: ⟨−∞, 7⟩ — desna granica 7 je OTVORENA (strešica) → 7 isključen ✗"},
    {txt:"B: ⟨7, 9] — lijeva granica 7 je OTVORENA → 7 isključen ✗"},
    {txt:"C: [1, 8] — granice zatvorene (uglate), 1 ≤ 7 ≤ 8 ✓"},
    {txt:"Distractor: A,B su otvoreni na 7 (klasična zamka kad student ne razlikuje strešicu od uglate); D zaokuplja jer 7 i 8 izgledaju blizu",note:"diagnostika"},
    {txt:"D: [8, +∞⟩ — 7 < 8, ispod donje granice ✗",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo NCVVO interval notacije: uglata [ ili ] = ZATVORENO (granica uključena), strešica ⟨ ili ⟩ = OTVORENO (granica isključena). Intuicija: zamisli zid u uglatu zagradu — granica je 'unutra'; strešica je 'otvorena...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo NCVVO interval notacije: uglata [ ili ] = ZATVORENO (granica uključena), strešica ⟨ ili ⟩ = OTVORENO (granica isključena). Intuicija: zamisli zid u uglatu zagradu — granica je 'unutra'; strešica je 'otvorena vrata' — granica izađe. Česta greška: studenti miješaju ⟨ i ( ili ⟩ i ) — oba znače otvoreno (NCVVO ima dvije konvencije). Alt metoda: za svaki interval pretvori u dvostruku nejednakost (npr. [1,8] = 1≤x≤8, ⟨7,9] = 7<x≤9) pa provjeri 7. Provjera: 7 je u [1,8] jer 1≤7≤8 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:2,type:"mc",warn:"Pazi: provjeri svaku tvrdnju zasebno.",topic:"br",points:1,
  q:"Koja je od navedenih tvrdnja točna?",
  opts:["-2,4 < -7/3 < -2","-2,4 < -2 < -7/3","-7/3 < -2,4 < -2","-2 < -7/3 < -2,4"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"-7/3 ≈ -2,333. Poredak: -2,4 < -2,333 < -2 → A.",
  steps:[
    {txt:"Pretvori u decimale: −7/3 = −2,333... (računaj 7÷3)"},
    {txt:"Sva tri broja na brojevnom pravcu: −2,4 |--- −2,333 |--- −2 (lijevo→desno)"},
    {txt:"Distractor: B,C,D imaju različite redoslijede — student koji misli da je −2,4 'veći' (jer je 'veća' brojka 2,4) pada na te varijante",note:"diagnostika"},
    {txt:"Poredak od najmanjeg (najljevije): −2,4 < −2,333 < −2",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: negativni brojevi imaju OBRNUTI poredak od pozitivnih. Što je apsolutni iznos veći, broj je manji. Intuicija: zamisli brojevni pravac — kako se krećeš lijevo, brojevi padaju (−2 > −2,33 > −2,4). Česta greška:...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: negativni brojevi imaju OBRNUTI poredak od pozitivnih. Što je apsolutni iznos veći, broj je manji. Intuicija: zamisli brojevni pravac — kako se krećeš lijevo, brojevi padaju (−2 > −2,33 > −2,4). Česta greška: gledati samo brojku iza minusa i zaključiti da je −2,4 > −2 jer 2,4 > 2 (KRIVO za negative). Alt metoda: pomnoži sve s −1 (okreće poredak) → 2 < 2,333 < 2,4 → original: −2 > −2,333 > −2,4. Provjera: na brojevnom pravcu −2,4 je dalje lijevo od −2,333, koji je dalje lijevo od −2 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:3,type:"mc",warn:"Pazi: uvrsti — |1 + (−2)| = 1, a³ = (−2)³ = −8; pazi na predznake.",topic:"br",points:1,
  q:"Koja je vrijednost izraza (b+|1+a|)/(a³-3b) za a=-2, b=1/3?",
  opts:["-4/3","-4/27","4/21","4/9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Brojevnik: 1/3+|1+(-2)|=1/3+1=4/3. Nazivnik: (-2)³-3·(1/3)=-8-1=-9. Rezultat: (4/3)/(-9)=-4/27.",
  steps:[
    {txt:"Brojevnik: b+|1+a| = (1/3) + |1+(−2)| = (1/3) + |−1| = (1/3) + 1 = 4/3"},
    {txt:"Nazivnik: a³ − 3b = (−2)³ − 3·(1/3) = −8 − 1 = −9"},
    {txt:"Distractor: A (−4/3) zaboravlja podijeliti s −9; C (4/21) pogrešno množi 3·7=21; D (4/9) gubi negativan predznak",note:"diagnostika"},
    {txt:"Razlomak: ([FRAC:4|3]) / (−9) = (4/3) · (−1/9) = −[FRAC:4|27]",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: apsolutna vrijednost |x| = x ako x≥0, inače −x — UVIJEK rezultat ≥0. Kubiranje očuvava predznak: (−2)³ = −8 (kubirаnje neparne potencije čuva − znak). Intuicija: razlomak / razlomak = razlomak · obrnutom...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: apsolutna vrijednost |x| = x ako x≥0, inače −x — UVIJEK rezultat ≥0. Kubiranje očuvava predznak: (−2)³ = −8 (kubirаnje neparne potencije čuva − znak). Intuicija: razlomak / razlomak = razlomak · obrnutom razlomku. Česta greška: zaboraviti predznak pri kubiranju (krivo: (−2)³ = +8), ili zbrojiti 1 + 3·(1/3) kao 2 umjesto izračunati nazivnik na svoj način. Alt metoda: zajednički nazivnik za 1/3 + 1: (1+3)/3 = 4/3, pa (4/3)/(-9) = 4/(3·(−9)) = −4/27. Provjera: (−4/27)·(−9) = 36/27 = 4/3 ✓ (brojevnik).","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:4,type:"mc",warn:"Pazi: pretvori u minute (113 vs 125) pa usporedi.",topic:"br",points:1,
  q:"Borna je ispit riješio za 1 sat i 53 minute, a Marko za 2 sata i 5 minuta. Koja je tvrdnja točna?",
  opts:["Borna je rješavao 52 min dulje","Borna je rješavao 52 min kraće","Borna je rješavao 12 min dulje","Borna je rješavao 12 min kraće"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"Borna: 113 min, Marko: 125 min. Borna je rješavao 12 min kraće.",
  steps:[
    {txt:"Borna: 1 h 53 min = 1·60 + 53 = 113 minuta"},
    {txt:"Marko: 2 h 5 min = 2·60 + 5 = 125 minuta"},
    {txt:"Razlika: 125 − 113 = 12 minuta. Borna manje → Borna kraće"},
    {txt:"Distractor: A,B '52 min' krivo (125−113 nije 52); C smjer pomiješan (Borna nije dulje, nego kraće)",note:"diagnostika"},
    {txt:"Provjera: 113 + 12 = 125 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za usporedbu mješovitih jedinica (sati + minute), svedi sve na manju jedinicu (minute). 1 h = 60 min, pa 1 h 53 min = 113 min. Intuicija: tko je 'završio brže' ima manju brojku — Borna ima 113 < 125, pa je Borna...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za usporedbu mješovitih jedinica (sati + minute), svedi sve na manju jedinicu (minute). 1 h = 60 min, pa 1 h 53 min = 113 min. Intuicija: tko je 'završio brže' ima manju brojku — Borna ima 113 < 125, pa je Borna brža (kraće rješavala). Česta greška: pretvoriti samo sate (1+2=3 h) i preostatak minuta razdvojeno → krivo. Alt metoda: razlika u satima 2−1=1 h = 60 min, plus razlika u minutama 5−53=−48 min, ukupno 60−48=12 min. Provjera: Marko 2 h 5 min minus 12 min = 1 h 53 min ✓ (Borna).","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:5,type:"mc",warn:"Pazi: d = √((2 − (−3))² + (3 − (−1))²); pazi na predznake.",topic:"anal",points:1,
  q:"Kolika je udaljenost točaka A(-3, -1) i B(2, 3)?",
  opts:["√5","3","√41","9"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"d=√((2−(-3))²+(3−(-1))²)=√(25+16)=√41.",
  steps:[
    {txt:"Formula: d(A,B) = √((x₂−x₁)² + (y₂−y₁)²) — Pitagora u koordinatnom sustavu"},
    {txt:"Razlika x-ova: 2 − (−3) = 5; razlika y-ova: 3 − (−1) = 4"},
    {txt:"d = √(5² + 4²) = √(25 + 16) = √41"},
    {txt:"Distractor: A (√5) gubi y-komponentu; B (3) je samo |y₂−y₁|=4 zaokruženo? Krivo; D (9) zbraja kvadrate ili katete bez √",note:"diagnostika"},
    {txt:"Provjera: 5−4−√41 je 5-4-? trojka? Ne, ali katetama 5,4 i hipotenuzom √41 vrijedi 5²+4² = 25+16 = 41 = (√41)² ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost između A(x₁,y₁) i B(x₂,y₂) = √((x₂−x₁)²+(y₂−y₁)²). Intuicija: nacrtaj A i B; razlike koordinata su KATETE pravokutnog trokuta čija je HIPOTENUZA udaljenost. Česta greška: zaboraviti kvadrirati razlike,...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: udaljenost između A(x₁,y₁) i B(x₂,y₂) = √((x₂−x₁)²+(y₂−y₁)²). Intuicija: nacrtaj A i B; razlike koordinata su KATETE pravokutnog trokuta čija je HIPOTENUZA udaljenost. Česta greška: zaboraviti kvadrirati razlike, ili zbrajati apsolutne razlike (5+4=9 → opt D). Alt metoda: skok od A(−3,−1) na B(2,3) — vodoravno 5 desno, okomito 4 gore; po Pitagori d=√(5²+4²)=√41. Provjera: √41 ≈ 6,40 — između 4 i √(2·25)≈7,07 ✓ što je u zoni za katete 4 i 5.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun.","Provjera koordinatama: uvrsti točku u jednadžbu krivulje.","Tipičan propust: koristiti pogrešnu formulu (npr. udaljenost dviju točaka vs duljina pravca)."]},
  {id:6,type:"mc",warn:"Pazi: f(x) = 0 → 3x = −15 → x = −5; točka (−5, 0).",topic:"lin",points:1,
  q:"Koja je točka nultočka funkcije f(x) = 3x + 15?",
  opts:["(-5, 0)","(-1, 0)","(1, 0)","(5, 0)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"3x+15=0 → x=-5 → nultočka (-5, 0).",
  steps:[
    {txt:"Nultočka funkcije: točka gdje f(x) = 0 (sjecište s x-osi)"},
    {txt:"Postavi: 3x + 15 = 0 → 3x = −15 → x = −5"},
    {txt:"Točka: x-koordinata = −5, y = 0 → (−5, 0)"},
    {txt:"Distractor: B (−1,0) i C (1,0) krivo dijele (15/3 = 5, ne 1); D (5,0) gubi predznak — student dijeli 15/3 i zaboravi −",note:"diagnostika"},
    {txt:"Provjera: f(−5) = 3·(−5) + 15 = −15 + 15 = 0 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: nultočka funkcije f je x za koji f(x) = 0; za linearnu f(x)=kx+n nultočka je x = −n/k. Intuicija: nultočka = sjecište grafa s x-osi; svaka točka na x-osi ima y = 0. Česta greška: ne dijeliti s koeficijentom uz x,...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: nultočka funkcije f je x za koji f(x) = 0; za linearnu f(x)=kx+n nultočka je x = −n/k. Intuicija: nultočka = sjecište grafa s x-osi; svaka točka na x-osi ima y = 0. Česta greška: ne dijeliti s koeficijentom uz x, ili zaboraviti minus (3x = −15 → x = −5, ne +5). Alt metoda: f(x) = 3(x+5), nultočka je x = −5 odmah (faktorizacija). Provjera: y-sjecište bi bilo f(0) = 15, a nultočka mora biti različita — (−5,0) odgovara grafu koji ide od (0,15) prema dolje desno preko x-osi u −5.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:7,type:"mc",warn:"Pazi: −5x ≤ −1; dijeljenje s −5 OKRENE znak → x ≥ 1/5.",topic:"al",points:1,
  q:"Koja od navedenih nejednadžba ima isti skup rješenja kao nejednadžba −5x + 2 ≤ 1?",
  opts:["5x ≤ -1","5x ≤ -3","5x ≥ 1","5x ≥ 3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"-5x≤-1 → 5x≥1 (množenje s -1 okreće znak).",
  steps:[
    {txt:"Pomakni konstantu: −5x + 2 ≤ 1 → −5x ≤ 1 − 2 → −5x ≤ −1"},
    {txt:"Pomnoži obje strane s (−1) — OKRENI znak nejednakosti: 5x ≥ 1"},
    {txt:"Distractor: A,B imaju ≤ (ne okreću znak — student zaboravi pravilo); D (5x≥3) ima krivu desnu stranu (2 umjesto 1 prebačeno)",note:"diagnostika"},
    {txt:"Provjera: ako x=1/5, lijeva originalna = −5·(1/5)+2 = −1+2 = 1 ≤ 1 ✓; opt C: 5·(1/5)=1 ≥ 1 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: množenje ili dijeljenje nejednakosti negativnim brojem OKREĆE znak (≤ ↔ ≥, < ↔ >). Zbrajanje/oduzimanje istog broja s obje strane NE mijenja znak. Intuicija: −2 < 1, ali ·(−1) → 2 > −1 (poredak se okreće). Česta...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: množenje ili dijeljenje nejednakosti negativnim brojem OKREĆE znak (≤ ↔ ≥, < ↔ >). Zbrajanje/oduzimanje istog broja s obje strane NE mijenja znak. Intuicija: −2 < 1, ali ·(−1) → 2 > −1 (poredak se okreće). Česta greška: pomnožiti s (−1) i zaboraviti okrenuti — daje krivu nejednakost s istim znakom. Alt metoda: ne množiti negativnim — premjesti člane: −5x ≤ −1 → 1 ≤ 5x → 5x ≥ 1. Provjera: za graničnu vrijednost x = 1/5, originalna i C nejednakost trebaju biti istinite (≤ i ≥ s jednakošću).","Provjera supstitucijom: uvrsti x = C u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:8,type:"mc",warn:"Pazi: dijelovi 4k i 3k; iz zadane količine nađi k, pa ukupno 7k.",topic:"br",points:1,
  q:"Mesar priprema smjesu za kobasice od svinjskoga i junećega mesa u omjeru 4 : 3. Koliko je ukupno mesa upotrijebio za kobasice ako je u smjesi 12 kg junećega mesa?",
  opts:["20 kg","28 kg","36 kg","48 kg"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Juneće=3 dijela=12 kg → 1 dio=4 kg. Ukupno=7 dijelova=28 kg.",
  steps:[
    {txt:"Omjer svinjsko : juneće = 4 : 3 → ukupno 7 dijelova"},
    {txt:"Juneće = 3 dijela = 12 kg → vrijednost 1 dijela = 12/3 = 4 kg"},
    {txt:"Ukupno = 7 dijelova · 4 kg = 28 kg"},
    {txt:"Distractor: A (20) je samo svinjsko+0,5juneće; C (36) je 3·12 (krivo množi); D (48) je 4·12 (krivo množi)",note:"diagnostika"},
    {txt:"Provjera: svinjsko = 4·4 = 16 kg; svinjsko + juneće = 16 + 12 = 28 kg ✓; omjer 16:12 = 4:3 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: omjer a:b znači da svaka cjelina ima a+b 'jediničnih dijelova'. Ako poznaš jednu komponentu, izračunaj vrijednost 1 dijela pa pomnoži s ukupnim brojem dijelova. Intuicija: zamisli 7 jednakih posuda — 4 svinjskog,...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: omjer a:b znači da svaka cjelina ima a+b 'jediničnih dijelova'. Ako poznaš jednu komponentu, izračunaj vrijednost 1 dijela pa pomnoži s ukupnim brojem dijelova. Intuicija: zamisli 7 jednakih posuda — 4 svinjskog, 3 junećeg. Ako 3 posude = 12 kg, svaka = 4 kg, ukupno = 28 kg. Česta greška: pomnožiti 4·12 (D: 48 kg) ili 3·12 (C: 36 kg) bez korištenja vrijednosti jednog dijela. Alt metoda: postaviti proporciju 3/12 = 7/x → x = 7·12/3 = 28. Provjera: 28 kg / 7 dijelova = 4 kg po dijelu; juneće 3·4 = 12 kg ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:9,type:"mc",warn:"Pazi: izrazi y = kx + l; nagib uz x je k = −2.",topic:"lin",points:1,
  q:"Koja od navedenih jednadžba predstavlja pravac s koeficijentom smjera k = −2?",
  opts:["x+y+1=0","x+2y+2=0","2x−y−1=0","2x+y+1=0"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"2x+y+1=0 → y=-2x-1 → k=-2 ✓.",
  steps:[
    {txt:"Iz oblika ax+by+c=0 izoluj y: y = −(a/b)x − c/b → k = −a/b"},
    {txt:"A: x+y+1=0 → y = −x − 1 → k = −1 ✗ (treba −2)"},
    {txt:"B: x+2y+2=0 → y = −x/2 − 1 → k = −1/2 ✗"},
    {txt:"C: 2x−y−1=0 → y = 2x − 1 → k = +2 ✗ (krivi predznak)"},
    {txt:"Distractor: A,B podcjenjuju |k| (−1, −1/2); C ima točnu apsolutnu vrijednost ali krivi predznak — najopasnija zamka",note:"diagnostika"},
    {txt:"D: 2x+y+1=0 → y = −2x − 1 → k = −2 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: implicitni oblik ax+by+c=0 ↔ eksplicitni y = (−a/b)x − c/b; nagib k = −a/b (negativan ako a i b imaju isti predznak). Intuicija: što je |k| veći, pravac je strmiji; predznak određuje smjer (k<0 → silazi). Česta...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: implicitni oblik ax+by+c=0 ↔ eksplicitni y = (−a/b)x − c/b; nagib k = −a/b (negativan ako a i b imaju isti predznak). Intuicija: što je |k| veći, pravac je strmiji; predznak određuje smjer (k<0 → silazi). Česta greška: zaboraviti minus pri izoliranju y (zadržati 2x+y → y = 2x umjesto y = −2x) — opt C zamka. Alt metoda: provjeriti dvije točke iz pravca: za D postavi x=0 → y=−1; x=1 → y=−3; nagib = (−3−(−1))/(1−0) = −2 ✓. Provjera za D: −a/b = −2/1 = −2 ✓.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:10,type:"mc",warn:"Pazi: 1/10 = 10⁻¹, 100 = 10² → 10⁻ˣ = 10⁻⁴ → x = 4.",topic:"exp",points:1,
  q:"Koji je realan broj x rješenje jednadžbe [FRAC:1|10]^(x) = 100^(−2)?",
  opts:["-4","-2","2","4"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"0,1 = 10^(−1), 100 = 10^(2). (10^(−1))^x = (10^(2))^(−2) → 10^(−x) = 10^(−4) → x = 4.",
  steps:[
    {txt:"Svedi obje strane na bazu 10: 0,1 = 10^(−1), 100 = 10^(2)"},
    {txt:"Lijeva strana: (10^(−1))^(x) = 10^(−x) (pravilo (a^m)^n = a^(m·n))"},
    {txt:"Desna strana: (10^(2))^(−2) = 10^(−4)"},
    {txt:"Distractor: A (−4) i B (−2) krivi predznak — student možda zaboravlja da −x = −4 → x = +4; C (2) krivo množi 1·2 umjesto x·1 = 4",note:"diagnostika"},
    {txt:"Izjednači eksponente (baze su iste 10): −x = −4 → x = 4",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ako je a^m = a^n i a≠0,1 → m = n (izjednači eksponente kad su baze iste). Intuicija: 0,1 = 1/10 = 10^(−1), 100 = 10·10 = 10^(2) — svedi obje strane na potencije iste baze. Česta greška: zaboraviti pravilo (a^m)^n...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: ako je a^m = a^n i a≠0,1 → m = n (izjednači eksponente kad su baze iste). Intuicija: 0,1 = 1/10 = 10^(−1), 100 = 10·10 = 10^(2) — svedi obje strane na potencije iste baze. Česta greška: zaboraviti pravilo (a^m)^n = a^(m·n) i krivo množiti baze umjesto eksponente. Provjera: 0,1^4 = (10^(−1))^4 = 10^(−4) = 1/10000 ✓, a 100^(−2) = 1/100^2 = 1/10000 ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n).","Veza s gradivom: eksponencijalne funkcije modeliraju rast (populacija, kamata, radioaktivnost).","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:11,type:"mc",warn:"Pazi: maksimum (tjeme) u n = −b/2a = 1510/4; pazi traži li se max ili nešto drugo.",topic:"kv",points:1,
  q:"Dobit neke obrtničke radionice D u kunama izražena je formulom D(n) = −2n² + 1510n, gdje je n broj prodanih proizvoda. Kolika je dobit te obrtničke radionice ako je prodano 745 proizvoda?",
  opts:["11 400 kn","12 500 kn","14 900 kn","15 700 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"D(745)=-2·745²+1510·745=-1 110 050+1 124 950=14 900 kn.",
  steps:[
    {txt:"D(n) = −2n² + 1510n; uvrsti n = 745"},
    {txt:"745² = (750−5)² = 750² − 2·750·5 + 5² = 562 500 − 7 500 + 25 = 555 025"},
    {txt:"−2·555 025 = −1 110 050"},
    {txt:"1510·745 = 1510·(700+45) = 1 057 000 + 67 950 = 1 124 950"},
    {txt:"Distractor: A (11 400) krivo množi 745² ili gubi tisuće; B (12 500) je sredina; D (15 700) je ≈ +5% greška u eksponentu",note:"diagnostika"},
    {txt:"D(745) = −1 110 050 + 1 124 950 = 14 900 kn",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vrijednost funkcije = uvrštavanje vrijednosti varijable u formulu, redom računaj po algebarskim pravilima (poteciranje prije množenja). Intuicija: kvadratna dobit ima maksimum — vrh parabole je n = −b/(2a) =...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: vrijednost funkcije = uvrštavanje vrijednosti varijable u formulu, redom računaj po algebarskim pravilima (poteciranje prije množenja). Intuicija: kvadratna dobit ima maksimum — vrh parabole je n = −b/(2a) = −1510/(2·(−2)) = 377,5; n = 745 je daleko od optimuma, ali još uvijek pozitivna dobit. Česta greška: pomnožiti −2·745 prvo (krivi redoslijed) ili krivo izračunati 745². Alt metoda: faktorizacija D(n) = n·(−2n + 1510) = 745·(−1490+1510) = 745·20 = 14 900 — najbrži put. Provjera: D(377,5) = 377,5·(−755+1510) = 377,5·755 ≈ 285 000 (max); naša 14 900 je niža, što ima smisla jer je n daleko od maksimuma.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:12,img:true,type:"mc",warn:"Pazi: visina = OKOMICA od vrha na središte baze (ne pobočni brid ni apotema).",topic:"geom",points:1,img:true,
  q:"Koja dužina predstavlja visinu uspravne piramide prikazane na skici?",
  opts:["AB","AC","VN","VP"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Visina uspravne piramide = dužina od vrha V okomito do središta baze N.",
  steps:[
    {txt:"Definicija: visina piramide = okomita udaljenost od vrha V do ravnine baze"},
    {txt:"Uspravna piramida: vrh V je TOČNO iznad središta baze (N na slici)"},
    {txt:"Distractor: AB,AC su stranice baze (u ravnini baze, nisu visina); VP je apotema pobočke ili bočni brid (kosa dužina, ne okomita)",note:"diagnostika"},
    {txt:"Iz V do N: dužina VN je okomita na bazu → to je visina piramide ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: visina piramide = duljina okomice iz vrha na ravninu baze. Za USPRAVNU piramidu, vrh je nad središtem baze pa visina prolazi kroz središte. Intuicija: zamisli štap iz vrha koji 'pada' okomito na pod (ravninu...",note:"postupak",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: visina piramide = duljina okomice iz vrha na ravninu baze. Za USPRAVNU piramidu, vrh je nad središtem baze pa visina prolazi kroz središte. Intuicija: zamisli štap iz vrha koji 'pada' okomito na pod (ravninu baze) — duljina od vrha do poda je visina. Česta greška: pomiješati visinu piramide (h, okomito) s apotemom pobočke (h_s, kosa visina trokutaste pobočke) — dva različita pojma! Alt metoda: u kosoj projekciji prepoznaj vrh koji 'gleda' točno na središte baze; vertikalna dužina je visina. Provjera: VN ⊥ ravnini ABCD (po definiciji uspravne); AB,AC ⊂ ravnini ABCD (paralelni s ravninom, ne okomiti); VP ide do vrha P baze — kosa.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:13,img:true,type:"mc",warn:"Pazi: sjecište dvaju pravaca = rješenje sustava; nacrtaj/očitaj točku.",topic:"lin",points:2,img:true,
  q:"Koja slika prikazuje grafičko rješenje sustava jednadžbi 3x−y+3=0 i x−3y−3=0?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"P1: y=3x+3 (nagib 3, y-os: 3). P2: y=(x-3)/3 (nagib 1/3, y-os: -1). Sjecište: (-3/2, -3/2).",
  steps:[
    {txt:"P1: 3x − y + 3 = 0 → y = 3x + 3; sječe y-os u (0,3), x-os u (−1,0); strm nagib (k=3)"},
    {txt:"P2: x − 3y − 3 = 0 → y = (x−3)/3 = x/3 − 1; sječe y-os u (0,−1), x-os u (3,0); blag nagib (k=1/3)"},
    {txt:"Algebarsko sjecište: 3x+3 = x/3 − 1 → 9x+9 = x−3 → 8x = −12 → x = −3/2; y = 3·(−3/2)+3 = −3/2"},
    {txt:"Distractor: B,C,D imaju sjecište u drugim kvadrantima (1., 2., 4.) — student koji krivo izračuna predznak ili nagib jednog pravca pada na te varijante",note:"diagnostika"},
    {txt:"Sjecište S(−3/2, −3/2) — oba negativna → 3. kvadrant ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: grafičko rješenje sustava 2 linearne jednadžbe = točka u kojoj se pravci sijeku. Dovoljne su 2 točke po pravcu (najlakše y-sječ i x-sječ). Intuicija: svaka jednadžba je pravac; rješenje je presjek; ako su...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: grafičko rješenje sustava 2 linearne jednadžbe = točka u kojoj se pravci sijeku. Dovoljne su 2 točke po pravcu (najlakše y-sječ i x-sječ). Intuicija: svaka jednadžba je pravac; rješenje je presjek; ako su paralelni — nema rješenja, ako se poklapaju — beskonačno. Česta greška: krivo izoluti y (zaboravljen predznak −y → y) ili krivo identificirati nagib. Alt metoda: provjeriti svaku ponuđenu sliku — gdje su pravci u grafu, koji kvadrant sjecišta? Naše S(−3/2,−3/2) je 3. kvadrant, x≈y, slika A. Provjera: uvrsti S u oba: 3·(−3/2)−(−3/2)+3 = −9/2+3/2+3 = −6/2+3 = 0 ✓; (−3/2)−3·(−3/2)−3 = −3/2+9/2−3 = 6/2−3 = 0 ✓.","Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag.","Veza s gradivom: linearne funkcije i sustavi su osnovni model za sve više matematičke modele.","Provjera grafom: nacrtaj pravce i vizualno potvrdi rješenje sustava.","Tipičan propust: zaboraviti da paralelni pravci nemaju rješenje (sustav je nekonzistentan)."]},
  {id:14,type:"mc",warn:"Pazi: x² − y² = (x + y)(x − y) = 20 → 10·(x − y) = 20 → x − y = 2.",topic:"al",points:2,
  q:"Zadan je sustav [SYS:x+y=10|x²−y²=20]. Koliko je x−y?",
  opts:["2","5","10","20"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"x²−y²=(x+y)(x−y)=10(x−y)=20 → x−y=2.",
  steps:[
    {txt:"Identitet razlike kvadrata: x² − y² = (x+y)·(x−y)"},
    {txt:"Imamo (x+y) = 10 i x²−y² = 20; uvrsti: 10·(x−y) = 20"},
    {txt:"Dijeli s 10: x − y = 2",final:true,note:"verifikacija"},
    {txt:"Alt verifikacija: iz sustava x+y=10, x−y=2 → x=6, y=4; provjera: 6²−4² = 36−16 = 20 ✓"},
    {txt:"Distractor: B (5) je 10/2 (krivo dijeli); C (10) zapravo x+y; D (20) je rezultat x²−y² ne x−y — sve klasične zamke kad student ne vidi razliku kvadrata trik",note:"diagnostika"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata a²−b² = (a+b)(a−b) — jedan od ključnih algebarskih identiteta. Intuicija: faktorizacijom razlomimo problem koji izgleda komplicirano (2 nepoznata u 2 jednadžbe) na jedan algebarski trik —...",note:"postupak",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: razlika kvadrata a²−b² = (a+b)(a−b) — jedan od ključnih algebarskih identiteta. Intuicija: faktorizacijom razlomimo problem koji izgleda komplicirano (2 nepoznata u 2 jednadžbe) na jedan algebarski trik — direktno dobivamo x−y. Česta greška: pokušati riješiti sustav klasično (eliminirati y kroz kvadriranje x²-y²=20), što vodi u kvadratnu jednadžbu i dvostruko više rada. Alt metoda: klasično rješavanje x=10−y, uvrsti (10−y)²−y² = 20 → 100−20y = 20 → y=4, x=6, x−y=2 — daje isti odgovor ali sporije. Provjera: x+y=10 ✓, x²−y²=20 ✓, x−y=2 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:15,type:"mc",warn:"Pazi: skupljanje množi dimenziju s 0,98; pazi koja se dimenzija mijenja.",topic:"br",points:2,
  q:"Ručnik pravokutnoga oblika ima duljinu 100 cm i širinu 70 cm. Pri prvome pranju ručnik se skuplja 2 % po duljini i 3 % po širini. Za koliko će se posto smanjiti površina ručnika nakon prvoga pranja?",
  opts:["za 4,51 %","za 4,94 %","za 5 %","za 6 %"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Nova P=100·0,98·70·0,97=6654,2 cm². Smanjenje=(7000-6654,2)/7000≈4,94%.",
  steps:[
    {txt:"Stara P = 100 · 70 = 7000 cm²"},
    {txt:"Faktor skupljanja: duljina 0,98 (smanji se 2%), širina 0,97 (smanji se 3%)"},
    {txt:"Nova P = 100·0,98 · 70·0,97 = 7000 · 0,98 · 0,97 = 7000 · 0,9506 = 6654,2 cm²"},
    {txt:"Distractor: A (4,51%) krivo množi 0,98·0,97; C (5%) zbraja 2+3 (klasična zamka); D (6%) krivo zbraja 2·3=6",note:"diagnostika"},
    {txt:"Postotno smanjenje: (7000−6654,2)/7000 · 100 = 345,8/7000 · 100 ≈ 4,94%",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: uzastopni postotni faktori MNOŽE se, ne zbrajaju. P_nova = P_stara·(1−p₁/100)·(1−p₂/100); ukupno smanjenje = 1 − umnožak faktora. Intuicija: 2% × 3% nisu 5% jer drugo smanjenje radi na već smanjenoj površini, a...",note:"postupak",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: uzastopni postotni faktori MNOŽE se, ne zbrajaju. P_nova = P_stara·(1−p₁/100)·(1−p₂/100); ukupno smanjenje = 1 − umnožak faktora. Intuicija: 2% × 3% nisu 5% jer drugo smanjenje radi na već smanjenoj površini, a ne na originalu. Česta greška: zbrojiti 2% + 3% = 5% (opt C) — najklasičnija zamka u postotcima. Alt metoda: ukupni faktor = 0,98·0,97 = 0,9506; postotno smanjenje = 1 − 0,9506 = 0,0494 = 4,94%. Provjera: 7000·(1−0,0494) = 7000·0,9506 = 6654,2 cm² ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:16,img:true,type:"mc",warn:"Pazi: očitaj vrijednost na traženoj centilnoj krivulji za zadanu dob.",topic:"stat",points:2,img:true,
  q:"Na slikama su prikazane po tri centilne krivulje rasta za djevojčice i za dječake kojima se prati njihov razvoj. Primjerice, djevojčica dobi od 13 godina i visine 140 cm je na 5. centilu krivulje rasta. To znači da je 95 % djevojčica iste dobi više od nje, a samo 5 % djevojčica iste dobi niže je od nje. Koja je tvrdnja točna za dječaka koji je na 95. centilu krivulje rasta?",
  opts:[
    "Samo je 5 % dječaka dobi od 11 godina niže od 135 cm.",
    "Samo je 5 % dječaka dobi od 11 godina više od 135 cm.",
    "Samo je 5 % dječaka dobi od 12 godina niže od 165 cm.",
    "Samo je 5 % dječaka dobi od 12 godina više od 165 cm."
  ],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"95. centil: samo 5% je iznad te vrijednosti. Iz grafa: 95. centil za 12-godišnjake ≈ 165 cm → D.",
  steps:[
    {txt:"Definicija p. centila: 95. centil = vrijednost ispod koje je 95% populacije; iznad je 5%"},
    {txt:"Pročitaj graf: 95. centilna krivulja dječaka u dobi 12 god → visina ≈ 165 cm"},
    {txt:"Interpretacija: 95% dječaka 12 god je IZNAD 165? NE — 95% je ISPOD; samo 5% je IZNAD 165 cm"},
    {txt:"Distractor: A,B odnose se na 11 god i 135 cm (krivi podaci s grafa); C okreće smjer ('niže' umjesto 'više'); razlika između C i D je samo jedna riječ — KRITIČNA pažnja",note:"diagnostika"},
    {txt:"Match opcije: 'samo 5% dječaka dobi 12 god više od 165 cm' → opt D ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: p-ti centil je vrijednost ispod koje pada p% populacije; iznad je (100−p)%. Visok centil (95.) = velika vrijednost u distribuciji. Intuicija: zamisli rangiranje 100 dječaka po visini — 95. centil je 95. po redu...",note:"postupak",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: p-ti centil je vrijednost ispod koje pada p% populacije; iznad je (100−p)%. Visok centil (95.) = velika vrijednost u distribuciji. Intuicija: zamisli rangiranje 100 dječaka po visini — 95. centil je 95. po redu od najnižega; 95 ih je ispod, 5 iznad. Česta greška: pomiješati smjer 'ispod' i 'iznad' (opt C okreće smjer) ili dob/vrijednost (opt A,B). Alt metoda: ako 95. centil = 165 cm, onda je (100−95) = 5% populacije iznad. Provjera: primjer iz teksta — djevojčica na 5. centilu znači da je 95% iznad nje (jer 5% je ispod) → simetrično, 95. centil → 5% je iznad.","Provjera: aritmetička sredina mora biti između min i max vrijednosti.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka.","Provjera grafom/tablicom: vizualizacija često otkriva greške.","Tipičan propust: pomiješati prosjek, medijan i mod; ili apsolutnu i relativnu frekvenciju."]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Koliko je 85,3 · 2^(2,75)?",
  sol:{ans:"≈ 573,83",alt:["573,83","573,83","≈573,83","573,8","573,8"]},
  exp:"85,3 · 2^(2,75) = 85,3 · 6,7268 ≈ 573,83.",
  steps:[
    {txt:"Razdvoji eksponent: 2^(2,75) = 2^(2) · 2^(0,75) = 4 · 2^(³⁄⁴)"},
    {txt:"2^(0,75) = 2^(³⁄⁴) = ⁴√(2³) = ⁴√8 ≈ 1,6818"},
    {txt:"2^(2,75) = 4 · 1,6818 ≈ 6,7272"},
    {txt:"85,3 · 6,7272 ≈ 573,83",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: a^(m+n) = a^m · a^n — razdvoji eksponent na cijeli i razlomački dio. Intuicija: 2,75 = 2 + 0,75 = 2 + 3/4 → 2^(2,75) = 2² · 2^(³⁄⁴) = 4 · ⁴√(2³). Česta greška: zaboraviti razdvojiti eksponent i pokušati direktan...",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 573,83 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: a^(m+n) = a^m · a^n — razdvoji eksponent na cijeli i razlomački dio. Intuicija: 2,75 = 2 + 0,75 = 2 + 3/4 → 2^(2,75) = 2² · 2^(³⁄⁴) = 4 · ⁴√(2³). Česta greška: zaboraviti razdvojiti eksponent i pokušati direktan kalkulator-input (na maturi nema kalkulatora!). Alt metoda: 2,75 = 11/4 → 2^(¹¹⁄⁴) = ⁴√(2^11) = ⁴√2048 ≈ 6,7272. Provjera: log₂(6,7272) ≈ 2,75 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:18,type:"sa",topic:"br",points:1,
  q:"Zaokružite broj √15 na tri decimale.",
  sol:{ans:"3,873",alt:["3,873","3.873","≈ 3,873"]},
  exp:"√15 = 3,872983... ≈ 3,873.",
  steps:[
    {txt:"√15: najbliži kvadrati 3²=9 i 4²=16 → √15 je između 3 i 4, bliže 4"},
    {txt:"Procjena: 3,8² = 14,44; 3,9² = 15,21 → √15 je između 3,8 i 3,9"},
    {txt:"Preciznije: 3,87² = 14,9769; 3,88² = 15,0544 → √15 ≈ 3,872983..."},
    {txt:"Zaokruživanje na 3 decimale: 4. decimala je 9 (≥5) → 3. decimala raste s 2 na 3 → 3,873",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo zaokruživanja: za n decimala, pogledaj (n+1). decimalu — ako je ≥5, povećaj n-tu za 1; ako je <5, ostavi n-tu. Intuicija: 3,8729 je bliže 3,873 nego 3,872 (jer 3,8729 − 3,872 = 0,0009, a 3,873 − 3,8729 = 0,0001)....",note:"postupak",final:true},{txt:"Točan odgovor: 3,873 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:["Pravilo zaokruživanja: za n decimala, pogledaj (n+1). decimalu — ako je ≥5, povećaj n-tu za 1; ako je <5, ostavi n-tu. Intuicija: 3,8729 je bliže 3,873 nego 3,872 (jer 3,8729 − 3,872 = 0,0009, a 3,873 − 3,8729 = 0,0001). Česta greška: zaokružiti 3,872 (jer 'odbacujemo' 9) — ali 9 ≥ 5 pa MORAMO podići. Alt metoda: 3,872983 = 3,873 − 0,000017 → najbliža vrijednost na 3 decimale je 3,873. Provjera: 3,873² = 14,99999... ≈ 15 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:19,type:"sa",topic:"br",points:1,
  q:"Koliko ima cijelih brojeva u skupu S = {−√2, −1, 0, √9, 6, π², 21/2}?",
  sol:{ans:"4",alt:["-1, 0, √9, 6","4 cijela broja","4"]},
  exp:"Cijeli: -1, 0, √9=3, 6. Nisu: −√2, π², 21/2. Ukupno 4.",
  steps:[
    {txt:"−√2 ≈ −1,414: iracionalan → nije cijeli ✗"},
    {txt:"−1: cijeli ✓"},
    {txt:"0: cijeli ✓"},
    {txt:"√9 = 3: cijeli ✓"},
    {txt:"6: cijeli ✓"},
    {txt:"π² ≈ 9,8696: iracionalan ✗"},
    {txt:"21/2 = 10,5: racionalan ali ne cijeli ✗"},
    {txt:"Ukupno: 4 cijela broja (−1, 0, 3, 6)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Skup cijelih brojeva ℤ = {..., −2, −1, 0, 1, 2, ...}. Intuicija: izračunaj/uprostiti svaki element, pa provjeri pripada li ℤ. Česta greška: misliti da je √9 iracionalan (zapravo √9=3, savršen kvadrat ∈ ℤ); ili da je 21/2...",note:"postupak",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}
  ],
  why:["Skup cijelih brojeva ℤ = {..., −2, −1, 0, 1, 2, ...}. Intuicija: izračunaj/uprostiti svaki element, pa provjeri pripada li ℤ. Česta greška: misliti da je √9 iracionalan (zapravo √9=3, savršen kvadrat ∈ ℤ); ili da je 21/2 cijeli broj (zapravo 10,5 ∉ ℤ). Alt metoda: razvrstaj elemente u ℕ, ℤ, ℚ, ℝ\\ℚ pa prebroji one u ℤ. Provjera: ℕ ⊂ ℤ, savršeni kvadrati daju cijele korijene; π² je iracionalan jer je π iracionalan.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:20,type:"sa",topic:"br",points:1,
  q:"Koliko košta 4 kg jabuka ako 3 kg jabuka košta 22,5 kn?",
  sol:{ans:"30 kn",alt:["30","30 kn","≈ 30 kn"]},
  exp:"1 kg = 22,5/3 = 7,5 kn. 4 kg = 4·7,5 = 30 kn.",
  steps:[
    {txt:"Cijena 1 kg jabuka: 22,5 kn ÷ 3 kg = 7,5 kn/kg"},
    {txt:"Cijena 4 kg: 4 kg · 7,5 kn/kg = 30 kn"},
    {txt:"Provjera: 30 kn / 4 kg = 7,5 kn/kg ✓ (isti omjer kao 22,5/3 = 7,5)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kod direktne proporcije, omjer (cijena/količina) je konstantan. Ako 3 kg = 22,5 kn, onda 1 kg = 22,5/3 = 7,5 kn, a 4 kg = 4 · 7,5 = 30 kn. Intuicija: 4 kg je 4/3 puta više od 3 kg, pa će cijena biti 4/3 puta...",note:"postupak",final:true},{txt:"Točan odgovor: 30 kn ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: kod direktne proporcije, omjer (cijena/količina) je konstantan. Ako 3 kg = 22,5 kn, onda 1 kg = 22,5/3 = 7,5 kn, a 4 kg = 4 · 7,5 = 30 kn. Intuicija: 4 kg je 4/3 puta više od 3 kg, pa će cijena biti 4/3 puta veća: 22,5 · 4/3 = 30 kn. Česta greška: pomnožiti 22,5 · 4 (=90 kn) zaboravljajući podijeliti s 3 (krivi razmjer). Alt metoda: pravilo trojnog: 22,5/3 = x/4 → x = 22,5 · 4 / 3 = 30 kn. Provjera: cijena/kg = 7,5; 4 kg · 7,5 = 30 ✓; omjer 30/22,5 = 4/3 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:21,type:"sa",topic:"br",points:1,
  q:"Ispitu je pristupilo 48 učenika i svi su ga položili. Ocjenu dovoljan dobilo je 31,25 % učenika. Od preostalih učenika trećina je dobila ocjenu odličan. Koliki je broj učenika iz ispita dobio ocjenu odličan?",
  sol:{ans:"11",alt:["11","≈ 11"]},
  exp:"Dovoljan: 48·0,3125=15. Preostalo: 33. Odličan: 33/3=11.",
  steps:[
    {txt:"Dovoljan: 31,25% od 48 = 0,3125 · 48 = 15 učenika"},
    {txt:"Preostali (NE dovoljan): 48 − 15 = 33 učenika"},
    {txt:"Odličan: trećina preostalih = (1/3) · 33 = 11 učenika"},
    {txt:"Provjera: dovoljan + odličan = 15 + 11 = 26; ostali (vrlo dobar, dobar) = 22 = 33−11 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 'p% od broja n' = (p/100) · n; 'trećina' = 1/3. Pažljivo identificiraj OD ČEGA se računa: trećina preostalih (33), NE trećina svih (48). Intuicija: 31,25% = 5/16 → 5/16 · 48 = 5 · 3 = 15 (točan računski trik)....",note:"postupak",final:true},{txt:"Točan odgovor: 11 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: 'p% od broja n' = (p/100) · n; 'trećina' = 1/3. Pažljivo identificiraj OD ČEGA se računa: trećina preostalih (33), NE trećina svih (48). Intuicija: 31,25% = 5/16 → 5/16 · 48 = 5 · 3 = 15 (točan računski trik). Česta greška: izračunati 'trećinu od svih' = 48/3 = 16 (krivo — preostalih ne svih). Alt metoda: 31,25% = 5/16 → dovoljan = 5/16 · 48 = 15; preostali = 33; odličan = 33/3 = 11. Provjera: 11 odličnih je 11/48 = 22,9% svih učenika, što je razumna trećina od 33/48 = 68,75% preostalih.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Izraz (2x+y)² − 7xy pojednostavnite do kraja.",
  sol:{ans:"4x²-3xy+y²",alt:["4x²-3xy+y²","≈ 4x²-3xy+y²"]},
  exp:"(2x+y)²=4x²+4xy+y². Oduzmi 7xy: 4x²+4xy+y²-7xy=4x²-3xy+y².",
  steps:[
    {txt:"Razvij kvadrat binoma: (2x+y)² = (2x)² + 2·(2x)·y + y² = 4x² + 4xy + y²"},
    {txt:"Oduzmi 7xy: (4x² + 4xy + y²) − 7xy"},
    {txt:"Skupi istorodne članove (uz xy): 4xy − 7xy = −3xy"},
    {txt:"Rezultat: 4x² − 3xy + y²",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (a+b)² = a² + 2ab + b² (kvadrat binoma). Ovdje a=2x, b=y. Intuicija: kvadrat zbroja je zbroj kvadrata + dvostruki umnožak. Česta greška: zaboraviti 2ab član — krivo: (2x+y)² = 4x² + y² (nedostaje 4xy!). Alt...",note:"postupak",final:true},{txt:"Točan odgovor: 4x²-3xy+y² ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: (a+b)² = a² + 2ab + b² (kvadrat binoma). Ovdje a=2x, b=y. Intuicija: kvadrat zbroja je zbroj kvadrata + dvostruki umnožak. Česta greška: zaboraviti 2ab član — krivo: (2x+y)² = 4x² + y² (nedostaje 4xy!). Alt metoda: (2x+y)² = (2x+y)(2x+y) = 4x² + 2xy + 2xy + y² = 4x² + 4xy + y² (eksplicitno množenje). Provjera: za x=1, y=1: (2+1)²−7 = 9−7 = 2; rezultat 4−3+1 = 2 ✓.","Provjera supstitucijom: uvrsti x = 4x²-3xy+y² u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Prikažite izraz 2/(a−3) + 1, za a≠3, u obliku jednoga do kraja sređenoga razlomka.",
  sol:{ans:"[FRAC:a-1|a-3]",alt:["[FRAC:a-1|a-3]","≈ [FRAC:a-1|a-3]"]},
  solFormula:[{frac:[["a-1","a-3"]]}],
  exp:"2/(a-3)+1 = 2/(a-3)+(a-3)/(a-3) = (2+a-3)/(a-3) = (a-1)/(a-3).",
  steps:[
    {txt:"Zajednički nazivnik 2/(a−3) i 1: ZN = (a−3); 1 = (a−3)/(a−3)"},
    {txt:"Zbroji: 2/(a−3) + (a−3)/(a−3) = (2 + a − 3)/(a−3) = (a−1)/(a−3)"},
    {txt:"Provjera za a=4: original = 2/1 + 1 = 3; rezultat = (4−1)/(4−3) = 3/1 = 3 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za zbrajanje razlomaka A/B + C/D, svedi na zajednički nazivnik LCM(B,D), pa zbroji brojevnike. Za A/B + cijeli broj n, prepiši n = n·B/B. Intuicija: 2/(a−3) je razlomak; 1 = (a−3)/(a−3) (umnožak s 'jedinicom' u...",note:"postupak",final:true},{txt:"Točan odgovor: [FRAC:a-1|a-3] ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = [FRAC:a-1|a-3] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: za zbrajanje razlomaka A/B + C/D, svedi na zajednički nazivnik LCM(B,D), pa zbroji brojevnike. Za A/B + cijeli broj n, prepiši n = n·B/B. Intuicija: 2/(a−3) je razlomak; 1 = (a−3)/(a−3) (umnožak s 'jedinicom' u obliku omjera). Česta greška: pogrešno zbrojiti 2/(a−3) + 1 = 3/(a−3) (zaboravljen ZN trik). Alt metoda: 2/(a−3) + 1 = [2 + 1·(a−3)] / (a−3) = (a−1)/(a−3) direktno. Provjera za a=2: 2/(−1) + 1 = −2 + 1 = −1; (2−1)/(2−3) = 1/(−1) = −1 ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:23.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Koliko je godina imala majka kada je rodila sina?",
  sol:{ans:"31",alt:["31 godinu","31 god"]},
  exp:"Majka je rodila sina 5 godina nakon kćeri, dakle s 26+5=31 godinom.",
  steps:[
    {txt:"Iz teksta: majka je rodila kći s 26 godina"},
    {txt:"Sina je rodila 5 godina kasnije → majka je tada bila 26 + 5 godina starija"},
    {txt:"Dob majke pri rođenju sina: 26 + 5 = 31 godina"},
    {txt:"Provjera: sin je 5 godina mlađi od kćeri ✓ (jer ako je majka imala 26 kad je rodila kći, a 31 kad je rodila sina, sin je rođen 5 god kasnije)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika u dobi između djece = razlika u dobi majke pri njihovu rođenju. Intuicija: vrijeme prolazi linearno — ako 5 godina prođe između rođenja, i dob majke se poveća za točno 5. Česta greška: pokušati postaviti...",note:"postupak",final:true},{txt:"Točan odgovor: 31 ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: razlika u dobi između djece = razlika u dobi majke pri njihovu rođenju. Intuicija: vrijeme prolazi linearno — ako 5 godina prođe između rođenja, i dob majke se poveća za točno 5. Česta greška: pokušati postaviti sustav jednadžbi (sa zbrojem 87 god — to je za Q23,2). Alt metoda: pisanjem kroz vrijeme — pri rođenju kćeri: majka 26, kći 0, sin (još nerođen, −5); 5 god kasnije: majka 31, kći 5, sin 0 → potvrđeno. Provjera: razlika dobi sin-kći = uvijek 5 god; razlika dob majke u dva trenutka rođenja = 31 − 26 = 5 god ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:23.2,type:"sa",topic:"al",points:1,
  q:"Koliko godina ima kći sada?",
  context:"Zadatak 23 (2. dio od 2):",
  sol:{ans:"22",alt:["22 godine","22 god"]},
  exp:"Neka kći ima x god → majka x+26, sin x-5. x+(x+26)+(x-5)=87 → 3x=66 → x=22.",
  steps:[
    {txt:"Označi: x = dob kćeri sada (god)"},
    {txt:"Majka je rodila kći s 26 → majka je UVIJEK 26 god starija od kćeri → majka sada = x + 26"},
    {txt:"Sin je rođen 5 god kasnije od kćeri → sin je 5 god mlađi → sin sada = x − 5"},
    {txt:"Zbroj sva tri: x + (x + 26) + (x − 5) = 87 → 3x + 21 = 87 → 3x = 66 → x = 22"},
    {txt:"Provjera: kći 22, majka 22+26=48, sin 22−5=17; zbroj 22+48+17 = 87 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: tekstualni zadatak s nepoznatim dobima — uvedi varijablu za jednu osobu, izrazi ostale RELATIVNO (ne apsolutno), postavi jednadžbu na temelju zadanog uvjeta (ovdje: zbroj = 87). Intuicija: razlika u dobi između...",note:"postupak",final:true},{txt:"Točan odgovor: 22 ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: tekstualni zadatak s nepoznatim dobima — uvedi varijablu za jednu osobu, izrazi ostale RELATIVNO (ne apsolutno), postavi jednadžbu na temelju zadanog uvjeta (ovdje: zbroj = 87). Intuicija: razlika u dobi između bilo koje 2 osobe je KONSTANTNA kroz vrijeme — majka je uvijek 26 god starija od kćeri. Česta greška: zaboraviti da je sin 5 god mlađi (krivo: sin = x + 5 jer 'sina rodila 5 god kasnije od kćeri' znači sin je MLAĐI). Alt metoda: postaviti varijablu za majku — neka majka ima y god; kći = y−26, sin = y−31; y + (y−26) + (y−31) = 87 → 3y = 144 → y = 48, kći = 22, sin = 17. Provjera: 48+22+17 = 87 ✓; majka 26 god starija od kćeri ✓; sin 5 mlađi od kćeri ✓.","Provjera supstitucijom: uvrsti x = 22 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:24.1,type:"sa",topic:"geom",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Za koliko je opseg stražnjega kotača veći od opsega prednjega kotača?",
  sol:{ans:"50π ≈ 157,08 cm",alt:["50π","157,08","157,08"]},
  solFormula:[{pre:"50π ≈ 157,08 cm"}],
  exp:"O_str−O_pred=2π·55-2π·30=2π·25=50π≈157,08 cm.",
  steps:[
    {txt:"Opseg prednjeg kotača: O₁ = 2π·r₁ = 2π·30 = 60π cm"},
    {txt:"Opseg stražnjeg: O₂ = 2π·r₂ = 2π·55 = 110π cm"},
    {txt:"Razlika: O₂ − O₁ = 110π − 60π = 50π ≈ 50·3,14159 = 157,08 cm"},
    {txt:"Provjera: O₂ − O₁ = 2π·(r₂ − r₁) = 2π·25 = 50π ✓ (faktorizacija daje isti rezultat)",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: opseg kružnice O = 2πr je proporcionalan s r — pa razlika opsega je proporcionalna s razlikom polumjera: O₂ − O₁ = 2π·(r₂ − r₁). Intuicija: ako je veći kotač 25 cm veći u polumjeru, ima 2π·25 ≈ 157 cm više obima...",note:"postupak",final:true},{txt:"Točan odgovor: 50π ≈ 157,08 cm ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: opseg kružnice O = 2πr je proporcionalan s r — pa razlika opsega je proporcionalna s razlikom polumjera: O₂ − O₁ = 2π·(r₂ − r₁). Intuicija: ako je veći kotač 25 cm veći u polumjeru, ima 2π·25 ≈ 157 cm više obima (jer obim 'wrappa' oko polumjera). Česta greška: izračunati razliku polumjera (25 cm) i misliti da je to razlika opsega (KRIVO — treba pomnožiti s 2π). Alt metoda: izračunati direktno svaki opseg pa oduzeti (kao u koracima) — sigurnije ali sporije. Provjera: 50π/2π = 25 = r₂ − r₁ ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:24.2,type:"sa",topic:"geom",points:1,
  q:"Koliki je put prešao traktor ako je prednji kotač napravio 50 okretaja više nego stražnji kotač? Rezultat napišite u metrima.",
  context:"Zadatak 24 (2. dio od 2):",
  sol:{ans:"≈ 207,35 m",alt:["207,35","207,35"]},
  exp:"n₁=n₂+50, n₁·2πr₁=n₂·2πr₂. n₂·25=50·30 → n₂=60. L=60·2π·55 cm≈20735 cm=207,35 m.",
  steps:[
    {txt:"Označi: n₂ = okretaja stražnjeg kotača → n₁ = n₂ + 50 (prednji ima 50 više)"},
    {txt:"Put kotača = broj okretaja · opseg: L₁ = n₁·O₁ = (n₂+50)·60π; L₂ = n₂·O₂ = n₂·110π"},
    {txt:"Traktor prelazi ISTI put oba kotača: L₁ = L₂ → (n₂+50)·60π = n₂·110π → (n₂+50)·30 = n₂·55 (dijeli s 2π)"},
    {txt:"30n₂ + 1500 = 55n₂ → 25n₂ = 1500 → n₂ = 60 okretaja"},
    {txt:"Put: L = 60 · 110π = 6600π cm ≈ 20 735 cm = 207,35 m",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: put koji prijeđe okretni kotač = broj okretaja · opseg (L = n · 2πr). Kad jedan objekt nosi 2 kotača (traktor), oba prijeđu isti put — pa L₁ = L₂. Intuicija: prednji ima manji polumjer pa mora napraviti više...",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 207,35 m ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: put koji prijeđe okretni kotač = broj okretaja · opseg (L = n · 2πr). Kad jedan objekt nosi 2 kotača (traktor), oba prijeđu isti put — pa L₁ = L₂. Intuicija: prednji ima manji polumjer pa mora napraviti više okretaja za isti put — to objašnjava '+50 okretaja prednji'. Česta greška: zaboraviti uvjet 'isti put' pa krivo postaviti jednadžbu, ili tražiti vrijeme/brzinu (nije relevantno). Alt metoda: omjer okretaja = obrnutom omjeru polumjera: n₁/n₂ = r₂/r₁ = 55/30 = 11/6 → n₁ = (11/6)n₂; razlika n₁−n₂ = (5/6)n₂ = 50 → n₂ = 60. Provjera: n₁ = 110, n₂ = 60; n₁·O₁ = 110·60π = 6600π = n₂·O₂ = 60·110π ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:25.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite koordinate sjecišta grafa funkcije f s osi y.",
  sol:{ans:"(0, -2)",alt:["(0,-2)","0,-2"]},
  exp:"y-sječ: x=0 → f(0)=0+0-2=-2 → (0,-2).",
  steps:[
    {txt:"Sjecište s osi y: x = 0 (jer sve točke na y-osi imaju x = 0)"},
    {txt:"Uvrsti x = 0 u f: f(0) = −(3/4)·0² + 3·0 − 2 = 0 + 0 − 2 = −2"},
    {txt:"Sjecište: točka (0, −2)"},
    {txt:"Provjera: točka (0, −2) ima x = 0 ✓ (na y-osi); y = f(0) = −2 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: y-sjecište bilo koje funkcije f je točka (0, f(0)) — uvrsti x = 0 i izračunaj. Intuicija: y-os je vertikalna linija x = 0, pa sjecište mora imati x-koordinatu 0; y-koordinata je vrijednost funkcije u toj točki....",note:"postupak",final:true},{txt:"Točan odgovor: (0, -2) ✓",note:"odgovor",final:true},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: y-sjecište bilo koje funkcije f je točka (0, f(0)) — uvrsti x = 0 i izračunaj. Intuicija: y-os je vertikalna linija x = 0, pa sjecište mora imati x-koordinatu 0; y-koordinata je vrijednost funkcije u toj točki. Česta greška: postaviti f(x) = 0 (to je x-sjecište, NE y-sjecište) — opasna zamka. Alt metoda: u standardnom obliku f(x) = ax² + bx + c, koeficijent c je upravo y-sjecište (jer f(0) = c); ovdje c = −2 ✓. Provjera: ako uvrstimo x = 0, kvadratni i linearni član su 0, ostaje samo slobodni član c = −2.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:25.2,type:"sa",topic:"kv",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Kolika je maksimalna vrijednost funkcije f?",
  sol:{ans:"1",alt:["1","f_max=1"]},
  exp:"a=-3/4<0 → parabola prema dolje → ima maksimum. x_t=−b/(2a)=-3/(-3/2)=2. f(2)=-3+6-2=1.",
  steps:[
    {txt:"f(x) = −(3/4)x² + 3x − 2; vodeći koeficijent a = −3/4 < 0 → parabola otvorena prema dolje → ima MAKSIMUM"},
    {txt:"x-koordinata tjemena: x_t = −b/(2a) = −3 / (2·(−3/4)) = −3 / (−3/2) = 2"},
    {txt:"Maksimalna vrijednost = f(2) = −(3/4)·4 + 3·2 − 2 = −3 + 6 − 2 = 1"},
    {txt:"Provjera: f(1) = −0,75 + 3 − 2 = 0,25; f(2) = 1; f(3) = −6,75 + 9 − 2 = 0,25 → simetrija oko x=2 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za f(x) = ax² + bx + c, tjeme je u x_t = −b/(2a); ako a < 0, tjeme je MAKSIMUM, ako a > 0 — minimum. Vrijednost u tjemenu = f(x_t). Intuicija: parabola je simetrična oko vertikalne osi x = x_t; ekstrem je gore...",note:"postupak",final:true},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}
  ],
  why:["Pravilo: za f(x) = ax² + bx + c, tjeme je u x_t = −b/(2a); ako a < 0, tjeme je MAKSIMUM, ako a > 0 — minimum. Vrijednost u tjemenu = f(x_t). Intuicija: parabola je simetrična oko vertikalne osi x = x_t; ekstrem je gore (max) ili dole (min) ovisno o smjeru otvorenosti. Česta greška: tvrditi da je max = c (y-sjecište, KRIVO osim ako tjeme je u x = 0); ili krivo izračunati x_t (zaboraviti minus ili krivo podijeliti razlomak). Alt metoda: derivacija f'(x) = −(3/2)x + 3 = 0 → x = 2; f(2) = 1. Provjera: za parabolu otvorenu dolje, max u tjemenu; simetrija f(x_t − h) = f(x_t + h) (ovdje provjereno za h = 1).","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:26.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Kolika je površina četverokuta ABCD?",
  sol:{ans:"52,5 cm²",alt:["52,5","52,5 cm²","52.5 cm²","≈ 52,5 cm²"]},
  exp:"Trapez s visinom AB=10, paralelne stranice AD=6,5 i BC=4: P=(AD+BC)/2·AB=(6,5+4)/2·10=52,5 cm².",
  steps:[
    {txt:"Identifikacija: pravi kutovi kod A i B → AB ⊥ AD i AB ⊥ BC → AD i BC su paralelne (obje okomite na AB)"},
    {txt:"ABCD je TRAPEZ s paralelnim stranicama AD (=6,5 cm) i BC (=4 cm), visinom AB = 10 cm"},
    {txt:"Površina trapeza: P = (a + c)/2 · h = (AD + BC)/2 · AB = (6,5 + 4)/2 · 10 = 10,5/2 · 10 = 52,5 cm²"},
    {txt:"Provjera: aritmetička sredina paralelnih = 5,25 cm; mn s visinom 10 cm = 52,5 cm² ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: trapez s paralelnim stranicama a i c (a > c) i visinom h ima površinu P = ((a+c)/2) · h — produkt aritmetičke sredine paralelnih i visine. Intuicija: trapez se može 'razrezati' na pravokutnik srednje širine...",note:"postupak",final:true},{txt:"Točan odgovor: 52,5 cm² ✓",note:"odgovor",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: trapez s paralelnim stranicama a i c (a > c) i visinom h ima površinu P = ((a+c)/2) · h — produkt aritmetičke sredine paralelnih i visine. Intuicija: trapez se može 'razrezati' na pravokutnik srednje širine ((a+c)/2) i visine h; ili presložiti u paralelogram. Česta greška: pomnožiti samo a · h (=65) zaboravljajući c, ili dijeliti pogrešno (npr. (a−c)/2 daje krivu vrijednost). Alt metoda: rastaviti na pravokutnik (BC·AB = 4·10 = 40) + pravokutni trokut (kateta AD−BC = 2,5; druga kateta AB = 10; P_trokut = 12,5); ukupno 40 + 12,5 = 52,5 cm² ✓. Provjera: P = 52,5; AD+BC = 10,5; h = 10; (10,5/2)·10 = 52,5 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:26.2,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliki je opseg četverokuta ABCD?",
  sol:{ans:"≈ 30,81 cm",alt:["30,81","30,81"]},
  exp:"CD=√(AB²+(AD−BC)²)=√(100+6,25)=√106,25≈10,31. O=10+4+10,31+6,5≈30,81 cm.",
  steps:[
    {txt:"Nepoznata stranica CD: spusti okomicu iz C na produžetak AD → dobiješ pravokutni trokut s katetama (AD − BC) i AB"},
    {txt:"Katete: (AD − BC) = 6,5 − 4 = 2,5 cm (horizontalna razlika); AB = 10 cm (vertikalna)"},
    {txt:"Pitagora: CD = √((AD − BC)² + AB²) = √(2,5² + 10²) = √(6,25 + 100) = √106,25 ≈ 10,31 cm"},
    {txt:"Opseg: O = AB + BC + CD + AD = 10 + 4 + 10,31 + 6,5 = 30,81 cm"},
    {txt:"Provjera: AD > BC (6,5 > 4) pa je dijagonalno gibanje C → D 'dulje' od pravokutnog slučaja ✓; CD > AB (10,31 > 10) zbog horizontalnog odmaka ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: u trapezu s paralelnim a, c i visinom h, kosa stranica (nepoznata) ima duljinu √((a−c)² + h²) — Pitagorin poučak na pravokutnom trokutu formiranom okomicom. Intuicija: 'dijagonalna' stranica trapeza je hipotenuza...",note:"postupak",final:true},{txt:"Točan odgovor: ≈ 30,81 cm ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: u trapezu s paralelnim a, c i visinom h, kosa stranica (nepoznata) ima duljinu √((a−c)² + h²) — Pitagorin poučak na pravokutnom trokutu formiranom okomicom. Intuicija: 'dijagonalna' stranica trapeza je hipotenuza pravokutnog trokuta čije su katete: visina trapeza i razlika paralelnih stranica. Česta greška: izračunati CD = AD − BC = 2,5 (KRIVO — to je samo jedna kateta, ne hipotenuza); ili koristiti AD + BC. Alt metoda: koordinatno: A(0,0), B(0,10), C(4,10), D(6,5,0); CD = √((6,5−4)² + (0−10)²) = √(6,25 + 100) = √106,25 ✓. Provjera: O ≈ 30,81 cm; razumna vrijednost (zbroj 4 stranica trapezalnog oblika).","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji.","Provjera skicom: nacrtaj geometriju i izmjeri svojstva.","Tipičan propust: zamijeniti polumjer i promjer (r vs d = 2r)."]},
  {id:27.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Riješite jednadžbu 2(x+4) − 3(2x−1) = 4x + 2.",
  sol:{ans:"x = [FRAC:9|8]",alt:["9/8","1,125"]},
  solFormula:[{pre:"x = "},{frac:[["9","8"]]}],
  exp:"2x+8-6x+3=4x+2 → -4x+11=4x+2 → 9=8x → x=9/8.",
  steps:[
    {txt:"Razvij zagrade: 2(x+4) − 3(2x−1) = 2x + 8 − 6x + 3 = −4x + 11"},
    {txt:"Postavi: −4x + 11 = 4x + 2"},
    {txt:"Skupi x-ove i konstante: 11 − 2 = 4x + 4x → 9 = 8x → x = 9/8"},
    {txt:"Provjera: x = 9/8 = 1,125; LH = 2(1,125+4) − 3(2,25−1) = 2·5,125 − 3·1,25 = 10,25 − 3,75 = 6,5; RH = 4·1,125 + 2 = 4,5 + 2 = 6,5 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna jednadžba — razvij zagrade (distributivnost), skupi istorodne članove na jednoj strani, izoliraj varijablu dijeljenjem. Intuicija: 'kao vaga' — sve operacije moraju se primijeniti simetrično na obje...",note:"postupak",final:true},{txt:"Točan odgovor: x = [FRAC:9|8] ✓",note:"odgovor",final:true},{txt:"Provjera supstitucijom: uvrsti x = x = [FRAC:9|8] u L = D; rezultati se moraju podudarati.",note:"verifikacija",final:true}
  ],
  why:["Pravilo: linearna jednadžba — razvij zagrade (distributivnost), skupi istorodne članove na jednoj strani, izoliraj varijablu dijeljenjem. Intuicija: 'kao vaga' — sve operacije moraju se primijeniti simetrično na obje strane. Česta greška: zaboraviti distribuirati znak ispred zagrade (krivo: −3(2x−1) = −6x − 1 umjesto −6x + 3). Alt metoda: pomnoži cijelu jednadžbu sa zajedničkim nazivnikom ako su prisutni razlomci (ovdje nema). Provjera: uvrsti rješenje natrag u originalnu jednadžbu — obje strane moraju biti jednake (6,5 = 6,5 ✓).","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:27.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Čemu je jednako M ako je v = √(T/(3M))?",
  sol:{ans:"M = [FRAC:T|3v²]",alt:["M = [FRAC:T|3v²]","M=[FRAC:T|3v²]","m = [FRAC:T|3v²]","≈ M = [FRAC:T|3v²]"]},
  solFormula:[{pre:"M = "},{frac:[["T","3v²"]]}],
  exp:"v²=T/(3M) → 3M=T/v² → M=T/(3v²).",
  steps:[
    {txt:"Polazna formula: v = √(T/(3M))"},
    {txt:"Kvadriraj obje strane da ukloniš korijen: v² = T/(3M)"},
    {txt:"Pomnoži obje strane s 3M (da M iziđe iz nazivnika): 3Mv² = T"},
    {txt:"Podijeli s 3v² (izolacija M): M = T/(3v²)"},
    {txt:"Provjera: uvrsti M natrag u v² = T/(3M) → v² = T/(3 · T/(3v²)) = T · 3v²/(3T) = v² ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za izolaciju varijable koja je ispod korijena, najprije kvadriraj obje strane (uklanja √), zatim klasična algebra (množenje/dijeljenje). Pažnja: kvadriranje može stvoriti 'lažna rješenja' (negativne v zamijene +...",note:"postupak",final:true},{txt:"Točan odgovor: M = [FRAC:T|3v²] ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za izolaciju varijable koja je ispod korijena, najprije kvadriraj obje strane (uklanja √), zatim klasična algebra (množenje/dijeljenje). Pažnja: kvadriranje može stvoriti 'lažna rješenja' (negativne v zamijene + i −), pa provjeri kontekst (ovdje fizikalna v ≥ 0). Intuicija: M je 'ispod' korijena i u nazivniku — moramo ga 'izvući' korak po korak. Česta greška: dijeliti s v prije kvadriranja (ne uklanja √); ili zaboraviti 3 u nazivniku rezultata. Alt metoda: v² = T/(3M) → 1/v² = 3M/T → M = T/(3v²) (kroz reciproke). Provjera: za T=12, M=1 → v = √(12/3) = √4 = 2; reverzno M = 12/(3·4) = 1 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije.","Provjera supstitucijom: uvrsti konkretnu vrijednost u izvornu jednadžbu i provjeri ekvivalentnost.","Tipičan propust: zanemariti predznake pri premještanju članova kroz jednakost."]},
  {id:27.3,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Nacrtajte graf kvadratne funkcije f(x) = x² + 2x − 3.",
  sol:{ans:"parabola prema gore, nultočke x=-3 i x=1, tjeme (-1,-4)",alt:["parabola prema gore, nultočke x=-3 i x=1, tjeme (-1,-4)","parabola prema gore. nultočke x=-3 i x=1. tjeme (-1.-4)","~parabola prema gore, nultočke x=-3 i x=1, tjeme (-1,-4)","≈ parabola prema gore, nultočke x=-3 i x=1, tjeme (-1,-4)"]},
  exp:"Nultočke: x=1 i x=-3. Tjeme: (-1,-4). Parabola prema gore (a=1>0).",
  steps:[
    {txt:"Vodeći koeficijent: a = 1 > 0 → parabola otvorena PREMA GORE"},
    {txt:"Nultočke: x² + 2x − 3 = 0 → faktorizacija (x+3)(x−1) = 0 → x = −3 i x = 1"},
    {txt:"x-koordinata tjemena: x_t = −b/(2a) = −2/2 = −1 (točno u sredini između nultočaka)"},
    {txt:"y-koordinata tjemena: f(−1) = (−1)² + 2(−1) − 3 = 1 − 2 − 3 = −4 → tjeme T(−1, −4)"},
    {txt:"y-sjecište: f(0) = 0 + 0 − 3 = −3 → točka (0, −3)"},
    {txt:"Provjera: nultočke −3 i 1, sredina (−3+1)/2 = −1 ✓; f(−1) = −4; f(0) = −3 (između tjemena i nultočke) ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za graf kvadratne f(x) = ax² + bx + c potrebno je 4 karakteristike: (1) smjer otvorenosti po predznaku a, (2) nultočke iz f(x) = 0 (faktorizacija ili formula), (3) tjeme T(x_t, f(x_t)) gdje je x_t = −b/(2a), (4)...",note:"postupak",final:true},{txt:"Točan odgovor: parabola prema gore, nultočke x=-3 i x=1, tjeme (-1,-4) ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: za graf kvadratne f(x) = ax² + bx + c potrebno je 4 karakteristike: (1) smjer otvorenosti po predznaku a, (2) nultočke iz f(x) = 0 (faktorizacija ili formula), (3) tjeme T(x_t, f(x_t)) gdje je x_t = −b/(2a), (4) y-sjecište (0, c). Intuicija: x_t je AKSIJSKA SIMETRIJA — uvijek u sredini između nultočaka. Česta greška: krivo izračunati tjeme (zaboraviti minus u −b/(2a)) ili krivo faktorizirati. Alt metoda: kanonski oblik f(x) = (x+1)² − 4 odmah daje tjeme (−1, −4). Provjera: faktorizacija (x+3)(x−1) = x² + 2x − 3 ✓; tjeme u sredini nultočaka ✓; y-sjecište = c = −3 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante.","Veza s gradivom: kvadratne funkcije su temelj parabola, optimizacije i fizikalnih putanja.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti diskriminantu D = b² − 4ac kao indikator broja rješenja."]},
  {id:28.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Koliko je vremena potrebno da se bazen u potpunosti napuni?",
  sol:{ans:"830 min = 13 h 50 min",alt:["830","830 min"]},
  exp:"V=25·16,6·2=830 m³=830 000 L. t=830 000/1000=830 min=13 h 50 min.",
  steps:[
    {txt:"Volumen bazena: V = duljina · širina · dubina = 25 · 16,6 · 2 = 830 m³"},
    {txt:"Pretvori u litre: 1 m³ = 1000 dm³ = 1000 L (jer 1 dm³ = 1 L) → V = 830 · 1000 = 830 000 L"},
    {txt:"Vrijeme punjenja: t = volumen / protok = 830 000 L / (1000 L/min) = 830 min"},
    {txt:"Pretvori u sate i minute: 830 = 13 · 60 + 50 → 13 h 50 min"},
    {txt:"Provjera: 13 h 50 min · 1000 L/min = 830 · 1000 = 830 000 L = 830 m³ ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vrijeme = količina / protok (analogno udaljenost = put / brzina). Intuicija: konstantan protok 1000 L/min znači da se svake minute spremnik puni za fiksnu količinu — vrijeme je proporcionalno volumenu. Pretvorba...",note:"postupak",final:true},{txt:"Točan odgovor: 830 min = 13 h 50 min ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: vrijeme = količina / protok (analogno udaljenost = put / brzina). Intuicija: konstantan protok 1000 L/min znači da se svake minute spremnik puni za fiksnu količinu — vrijeme je proporcionalno volumenu. Pretvorba jedinica je ključna: 1 m³ = 1000 L (jer 1 dm³ = 1 L, a 1 m³ = 10·10·10 = 1000 dm³). Česta greška: zaboraviti pretvoriti m³ u L (giliti 830/1000 = 0,83 min) ili miješati dm³ i cm³ (1 m³ = 1 000 000 cm³, ne 1000 cm³). Alt metoda: 830 m³ / (1 m³/min) = 830 min — koristeći jedinicu protoka u m³ (protok 1 m³/min = 1000 L/min). Provjera: 830 m³ · 1000 L/m³ = 830 000 L; 830 000/1000 = 830 min ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]},
  {id:28.2,type:"sa",topic:"br",points:1,
  q:"Koncentracija klora u vodi je 1 mg/L. Koliko grama klora ima u punome bazenu?",
  context:"Zadatak 28 (2. dio od 2):",
  sol:{ans:"830 g",alt:["830","830 g","≈ 830 g"]},
  exp:"830 000 L · 1 mg/L = 830 000 mg = 830 g.",
  steps:[
    {txt:"Volumen punog bazena: V = 830 000 L (iz Q28,1)"},
    {txt:"Koncentracija: 1 mg klora na svaki 1 L vode → masa klora = volumen · koncentracija"},
    {txt:"Ukupna masa klora: 830 000 L · 1 mg/L = 830 000 mg"},
    {txt:"Pretvori u grame: 1000 mg = 1 g → 830 000 mg / 1000 = 830 g"},
    {txt:"Provjera: 830 g klora u 830 000 L vode = 1 mg / 1 L = zadana koncentracija ✓",final:true,note:"verifikacija"},{txt:"Intuicija: Dodatak (intuicija).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: masa otopljenog spoja = volumen otopine · koncentracija (m = V · c). Pretvorba jedinica je ključna: c [mg/L] · V [L] = m [mg]; podijeli s 1000 za g. Intuicija: koncentracija = 'koliko spoja po jedinici volumena';...",note:"postupak",final:true},{txt:"Točan odgovor: 830 g ✓",note:"odgovor",final:true}
  ],
  why:["Pravilo: masa otopljenog spoja = volumen otopine · koncentracija (m = V · c). Pretvorba jedinica je ključna: c [mg/L] · V [L] = m [mg]; podijeli s 1000 za g. Intuicija: koncentracija = 'koliko spoja po jedinici volumena'; ukupna masa je sumarno za sav volumen. Česta greška: zaboraviti pretvoriti mg u g (ostaviti 830 000 'g' umjesto 830 g) ili pomiješati protok s koncentracijom. Alt metoda: 1 mg/L = 1 g/1000 L → 830 000 L / 1000 = 830 g klora. Provjera: postotno = 830 g / 830 000 000 g = 10⁻⁶ = 1 ppm (uobičajena koncentracija klora u bazenu) ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike.","Provjera kategorije: uvijek provjeri pripadnost broja skupu (ℕ, ℤ, ℚ, ℝ) prije primjene operacija.","Tipičan propust: smatrati √2 racionalnim ili 0 prirodnim brojem (definicija ℕ se može razlikovati)."]}
];

export const qImages = {
  "2015_ljeto_B__12": () => e(SvgZad12_2015LB, null),
  "2015_ljeto_B__13": () => e(SvgZad13_2015LB, null),
  "2015_ljeto_B__16": () => e(SvgZad16_2015LB, null),
  "2015_ljeto_B__26.1": () => e(SvgZad26_2015LB, null),
  "2015_ljeto_B__26.2": () => e(SvgZad26_2015LB, null),
  "2015_ljeto_B__27.3": () => e(SvgZad27c_2015LB, null),
};
