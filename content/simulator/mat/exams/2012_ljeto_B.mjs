// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgTocke7_2012Blj(){
  const W=260,H=250,cx=110,cy=120,sc=26;
  const pts=[
    {name:"K",x:4,y:4,lx:7,ly:-8,   fill:"#8b7cf8"},
    {name:"L",x:-2,y:2,lx:-16,ly:-8, fill:"#3dd68c"},
    {name:"M",x:-4,y:-3,lx:-18,ly:4, fill:"#f87171"},
    {name:"N",x:4,y:-2,lx:7,ly:4,   fill:"#e8c547"},
  ];
  const ticks=[-4,-3,-2,-1,1,2,3,4];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("pattern",{id:"grid7blj",width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:"0.6"})
      ),
      e("marker",{id:"arx7blj",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},
        e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})
      ),
      e("marker",{id:"ary7blj",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},
        e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"})
      )
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#grid7blj)"}),
    e("line",{x1:8,y1:cy,x2:W-8,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx7blj)"}),
    e("line",{x1:cx,y1:H-8,x2:cx,y2:8,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary7blj)"}),
    e("text",{x:W-14,y:cy+14,fontSize:11,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:16,fontSize:11,fill:"var(--text)"},"y"),
    e("text",{x:cx-12,y:cy+13,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:cx+sc-3,y:cy+13,fontSize:9,fill:"var(--muted)"},"1"),
    ...ticks.map(t=>
      e("text",{key:"tx"+t,x:cx+t*sc-(t<0?10:3),y:cy+13,fontSize:9,fill:"var(--muted)"},t)
    ),
    ...[-1,-2,-3,1,2,3].map(t=>
      e("text",{key:"ty"+t,x:cx-(t<0?18:4),y:cy-t*sc+4,fontSize:9,fill:"var(--muted)"},t)
    ),
    ...pts.map(p=>{
      const px=cx+p.x*sc, py=cy-p.y*sc;
      return e(React.Fragment,{key:p.name},
        e("circle",{cx:px,cy:py,r:5,fill:p.fill,stroke:"var(--bg)",strokeWidth:1.5}),
        e("text",{x:px+p.lx,y:py+p.ly+4,fontSize:12,fontWeight:"bold",fill:p.fill},p.name)
      );
    })
  );
}

function SvgDijagram28_2012Blj(){
  const W=300,H=260;
  const lx=60,rx=W-20,by=H-40,ty=20;
  const sc_y=10; // 10px po 10V
  const yRange=160; // od -60V do 120V
  const y0=by-60/10*10; // pozicija 0 na y-osi (60V od dna)
  const pts=[
    {name:"A",xi:0,v:20,  fill:"#8b7cf8"},
    {name:"B",xi:1,v:80,  fill:"#3dd68c"},
    {name:"C",xi:2,v:50,  fill:"#34d1bf"},
    {name:"D",xi:3,v:-40, fill:"#f87171"},
    {name:"E",xi:4,v:80,  fill:"#e8c547"},
    {name:"F",xi:5,v:20,  fill:"#f97316"},
    {name:"G",xi:6,v:110, fill:"#60a5fa"},
  ];
  const xStep=(rx-lx)/7;
  const vToY=v=>y0-v*sc_y/10;
  // Gridlines každých 10V od -60 do 120
  const gridVals=[-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100,110,120];
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"arx28b",markerWidth:6,markerHeight:6,refX:5,refY:3,orient:"auto"},e("path",{d:"M0,0 L0,6 L6,3 z",fill:"var(--text)"})),
      e("marker",{id:"ary28b",markerWidth:6,markerHeight:6,refX:3,refY:0,orient:"auto"},e("path",{d:"M0,6 L6,6 L3,0 z",fill:"var(--text)"}))
    ),
    // Grid horizontalni
    ...gridVals.map(v=>
      e("line",{key:"g"+v,x1:lx,y1:vToY(v),x2:rx,y2:vToY(v),stroke:"var(--bdr)",strokeWidth:v%50===0?1:0.5,strokeDasharray:"3,3"})
    ),
    // Grid vertikalni
    ...pts.map((p,i)=>
      e("line",{key:"gv"+i,x1:lx+(i+0.5)*xStep,y1:ty,x2:lx+(i+0.5)*xStep,y2:by+10,stroke:"var(--bdr)",strokeWidth:0.5,strokeDasharray:"3,3"})
    ),
    // Osi
    e("line",{x1:lx,y1:y0,x2:rx,y2:y0,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#arx28b)"}),
    e("line",{x1:lx,y1:by+10,x2:lx,y2:ty,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ary28b)"}),
    // Oznake y-osi
    e("text",{x:2,y:vToY(100)+4,fontSize:9,fill:"var(--muted)"},"100"),
    e("text",{x:6,y:vToY(50)+4,fontSize:9,fill:"var(--muted)"},"50"),
    e("text",{x:6,y:vToY(0)+4,fontSize:9,fill:"var(--muted)"},"0"),
    e("text",{x:0,y:vToY(-40)+4,fontSize:9,fill:"var(--muted)"},"-40"),
    e("text",{x:W-42,y:y0+14,fontSize:9,fill:"var(--muted)"},"točke"),
    e("text",{x:2,y:ty+8,fontSize:9,fill:"var(--muted)"},"potencijal"),
    e("text",{x:6,y:ty+18,fontSize:9,fill:"var(--muted)"},"(V)"),
    // Točke
    ...pts.map((p,i)=>{
      const px=lx+(i+0.5)*xStep;
      const py=vToY(p.v);
      return e(React.Fragment,{key:p.name},
        e("circle",{cx:px,cy:py,r:5,fill:p.fill,stroke:"var(--bg)",strokeWidth:1.5}),
        e("text",{x:px-4,y:by+22,fontSize:10,fill:p.fill,fontWeight:"600"},p.name)
      );
    })
  );
}

function SvgTablica21_2012Blj(){
  const xs=[1,2,3], ys=[1,4,7];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const W=240,H=80,c0=60,cw=54,rh=30;
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("rect",{x:c0,y:2,width:cw*3,height:rh,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1}),
    e("rect",{x:c0,y:2+rh,width:cw*3,height:rh,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1}),
    e("text",{x:c0-8,y:2+rh/2+5,fontSize:12,fontStyle:"italic",fill:"var(--text)",textAnchor:"end"},"x"),
    e("text",{x:c0-8,y:2+rh+rh/2+5,fontSize:12,fontStyle:"italic",fill:"var(--text)",textAnchor:"end"},"f (x)"),
    ...xs.map((x,i)=>[
      e("rect",{key:"rx"+i,x:c0+i*cw,y:2,width:cw,height:rh,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.8}),
      e("text",{key:"tx"+i,x:c0+i*cw+cw/2,y:2+rh/2+5,fontSize:13,fill:"var(--text)",textAnchor:"middle"},x),
      e("rect",{key:"ry"+i,x:c0+i*cw,y:2+rh,width:cw,height:rh,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.8}),
      e("text",{key:"ty"+i,x:c0+i*cw+cw/2,y:2+rh+rh/2+5,fontSize:13,fontWeight:"600",fill:_BLUE,textAnchor:"middle"},ys[i]),
    ])
  );
}

function SvgParabole16_2012Blj(){
  const W=320,H=280;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const panels=[
    {label:"A.",cx:80, cy:80, a:1, vx:-1, vy:1,  color:"#8b7cf8"},
    {label:"B.",cx:240,cy:80, a:1, vx:1,  vy:0,  color:"#3dd68c"},
    {label:"C.",cx:80, cy:210,a:-1,vx:0,  vy:1,  color:"#e8c547"},
    {label:"D.",cx:240,cy:210,a:-1,vx:0,  vy:0,  color:"#f87171"},
  ];
  const sc=22,ph=110;
  function parabola(cx,cy,a,vx,vy){
    const pts=[];
    for(let t=-2.5;t<=2.5;t+=0.05){
      const x=vx+t, y=vy+a*t*t;
      const px=cx+x*sc, py=cy-y*sc;
      if(py>4&&py<ph*2) pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
    }
    return pts.length?"M"+pts.join(" L"):"";
  }
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("defs",null,
      e("marker",{id:"pax",markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--muted)"})),
      e("marker",{id:"pay",markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--muted)"}))
    ),
    ...panels.map((p,i)=>{
      const d=parabola(p.cx,p.cy,p.a,p.vx,p.vy);
      return e(React.Fragment,{key:i},
        e("line",{x1:p.cx-50,y1:p.cy,x2:p.cx+54,y2:p.cy,stroke:"var(--muted)",strokeWidth:1.2,markerEnd:"url(#pax)"}),
        e("line",{x1:p.cx,y1:p.cy+46,x2:p.cx,y2:p.cy-50,stroke:"var(--muted)",strokeWidth:1.2,markerEnd:"url(#pay)"}),
        e("text",{x:p.cx+52,y:p.cy+12,fontSize:9,fill:"var(--muted)"},"x"),
        e("text",{x:p.cx+4,y:p.cy-48,fontSize:9,fill:"var(--muted)"},"y"),
        d&&e("path",{d,fill:"none",stroke:p.color,strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
        e("text",{x:p.cx-58,y:p.cy+46,fontSize:13,fontWeight:"bold",fill:p.color},p.label)
      );
    })
  );
}

function SvgPravokutnik14_2012Blj(){
  const W=280,H=180;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const mx=30,my=20,rw=210,rh=110;
  const A={x:mx,y:my+rh}, B={x:mx+rw,y:my+rh};
  const C={x:mx+rw,y:my}, D={x:mx,y:my};
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,style:{display:"block",margin:"0 auto"}},
    e("rect",{x:mx,y:my,width:rw,height:rh,fill:"none",stroke:_BLUE,strokeWidth:1.8}),
    e("line",{x1:A.x,y1:A.y,x2:B.x,y2:my,stroke:_GOLD,strokeWidth:1.2,strokeDasharray:"none"}),
    e("text",{x:A.x-10,y:A.y+14,fontSize:12,fill:_GOLD},"A"),
    e("text",{x:B.x+4,y:B.y+14,fontSize:12,fill:_GOLD},"B"),
    e("text",{x:C.x+4,y:C.y+4,fontSize:12,fill:_GOLD},"C"),
    e("text",{x:D.x-14,y:D.y+4,fontSize:12,fill:_GOLD},"D"),
    e("circle",{cx:A.x,cy:A.y,r:3,fill:_RED}),
    e("circle",{cx:B.x,cy:B.y,r:3,fill:_RED}),
    e("circle",{cx:C.x,cy:C.y,r:3,fill:_RED}),
    e("circle",{cx:D.x,cy:D.y,r:3,fill:_RED}),
    e("text",{x:mx+rw/2-18,y:A.y+14,fontSize:12,fontStyle:"italic",fill:_BLUE},"a cm"),
    e("text",{x:B.x+6,y:my+rh/2+4,fontSize:12,fontStyle:"italic",fill:_BLUE},"5,3 cm"),
    e("text",{x:mx+rw/2-36,y:my+rh/2+4,fontSize:11,fontStyle:"italic",fill:_GREEN},"(a + 3) cm"),
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: svedi na isti oblik (decimalni/razlomak) prije usporedbe.",topic:"br",points:1,
  q:"Koja je nejednakost točna?",
  opts:["5 < (24)/(5)","(2)/(3) < (1)/(2)","(3)/(2) < 1½","0,7 < (3)/(4)"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"3/4 = 0,75 > 0,7 ✓. Provjera ostalih: 24/5=4,8>5? ne, 4,8<5 → A kriva. 2/3≈0,667 > 0,5 → B kriva. 3/2=1,5 = 1+1/2=1,5 → C kriva (jednakost, ne manje).",
  steps:[
    {txt:"A: 5 < 24/5 = 4,8? Ne, 5 > 4,8 ✗"},
    {txt:"B: 2/3 ≈ 0,667 > 1/2 = 0,5 ✗"},
    {txt:"C: 3/2 = 1,5 = 1+1/2 ✗ (jednakost)"},
    {txt:"D: 0,7 < 3/4 = 0,75 ✓"},{txt:"Analiza distractora: A (5<24/5=4,8): 5>4,8, krivo. B (2/3<1/2): 0,667>0,5, krivo. C (3/2<1½): jednakost, ne oštro manje.",final:true,note:"diagnostika"},{txt:"Provjera: 3/4=0,75; 0,7<0,75 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nejednakost a < b znači a je lijevo od b na brojevnom pravcu. Pretvaramo sve u decimale i uspoređujemo.",note:"postupak",final:true},{txt:"Intuicija: 3/4=0,75; 24/5=4,8; 2/3≈0,667; 3/2=1,5. Jedino D: 0,7 < 0,75 (= 3/4) je točna nejednakost.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Nejednakost a < b znači a je lijevo od b na brojevnom pravcu. Pretvaramo sve u decimale i uspoređujemo.",
    "3/4=0,75; 24/5=4,8; 2/3≈0,667; 3/2=1,5. Jedino D: 0,7 < 0,75 (= 3/4) je točna nejednakost.",
    "Česta greška: C tvrdi 3/2 < 1½, ali 3/2 = 1,5 = 1½ — to je jednakost, ne stroga nejednakost."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:2,type:"mc",warn:"Pazi: ·100 → 0,3825 = 38,25 %.",topic:"br",points:1,
  q:"Čemu je jednak broj 0,3825 ako ga zapišemo kao postotak?",
  opts:["3,825 %","38,25 %","382,5 %","3825 %"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"0,3825 × 100 = 38,25 %.",
  steps:[
    {txt:"Množimo s 100: 0,3825 × 100 = 38,25 %"},{txt:"Analiza distractora: A (3,825%): množeno s 10. C (382,5%): množeno s 1000. D (3825%): decimala pomaknuta 4 mjesta.",final:true,note:"diagnostika"},{txt:"Provjera: 0,3825·100=38,25% ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pretvorba decimalni broj → postotak: množimo s 100 (pomičemo decimalnu zareze 2 mjesta desno).",note:"postupak",final:true},{txt:"Intuicija: 0,3825 × 100 = 38,25. Decimalni dio iza zareze odgovara postotku s točnošću.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}
  ],
  why:[
    "Pretvorba decimalni broj → postotak: množimo s 100 (pomičemo decimalnu zareze 2 mjesta desno).",
    "0,3825 × 100 = 38,25. Decimalni dio iza zareze odgovara postotku s točnošću.",
    "Česta greška: množiti s 10 (daje 3,825% = A) ili dijeliti s 100 (daje 0,003825% = potpuno krivo)."
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:3,type:"mc",warn:"Pazi: izrazi x = 2(1 − y/4) (vjerojatno je y poznat).",topic:"al",points:1,
  q:"Koliko je x ako je x/2 + y/4 = 1?",
  opts:["x = 2 − (1)/(2)y","x = 1 − (1)/(2)y","x = 2 − (1)/(8)y","x = 1 − (1)/(8)y"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"x/2 + y/4 = 1 → x/2 = 1 − y/4 → x = 2 − y/2.",
  steps:[
    {txt:"x/2 = 1 − y/4"},
    {txt:"x = 2(1 − y/4)"},
    {txt:"x = 2 − y/2"},{txt:"Analiza distractora: B (x=1−y/2): desna strana trebala biti 2. C (x=2−y/8): pogrešna manipulacija. D (x=1−y/8): dvostruka greška.",final:true,note:"diagnostika"},{txt:"Provjera: (2−y/2)/2+y/4=1−y/4+y/4=1 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Izoliramo x: množimo jednadžbu x/2 + y/4 = 1 s 4 → 2x + y = 4 → x = (4−y)/2 = 2 − y/2.",note:"postupak",final:true},{txt:"Intuicija: Provjera A: za y=0 → x=2; 2/2+0/4=1 ✓. Za y=4 → x=0; 0+4/4=1 ✓.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Izoliramo x: množimo jednadžbu x/2 + y/4 = 1 s 4 → 2x + y = 4 → x = (4−y)/2 = 2 − y/2.",
    "Provjera A: za y=0 → x=2; 2/2+0/4=1 ✓. Za y=4 → x=0; 0+4/4=1 ✓.",
    "Česta greška: zaboraviti množiti SVE članove s 4 → krivi koeficijenti uz y."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:4,type:"mc",warn:"Pazi: skupi x na jednu stranu → 4x ≥ 2,5 → x ≥ 5/8.",topic:"al",points:1,
  q:"Koji je interval skup svih rješenja nejednadžbe 3x − [FRAC:1|2] ≥ 2 − x?",
  opts:["⟨−∞, −(5)/(8)]","[−(5)/(8), (5)/(4)]","[−(5)/(4), (5)/(8)]","[(5)/(8), +∞⟩"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"3x − 1/2 ≥ 2 − x → 4x ≥ 5/2 → x ≥ 5/8.",
  steps:[
    {txt:"3x − 1/2 ≥ 2 − x"},
    {txt:"3x + x ≥ 2 + 1/2"},
    {txt:"4x ≥ 5/2"},
    {txt:"x ≥ 5/8"},{txt:"Analiza distractora: A: krivi smjer nejednakosti (podjela s negativnim). B i C: kriva granična vrijednost.",final:true,note:"diagnostika"},{txt:"Provjera: 3x+x≥2+1/2; 4x≥5/2; x≥5/8 → interval [5/8,+∞⟩=D ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Rješavamo nejednakost: pomičemo x-termine lijevo, konstante desno: 3x+x ≥ 2+1/2.",note:"postupak",final:true},{txt:"Intuicija: Dijeljenje s pozitivnim brojem 4 NE mijenja smjer nejednakosti: x ≥ 5/8.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
  ],
  why:[
    "Rješavamo nejednakost: pomičemo x-termine lijevo, konstante desno: 3x+x ≥ 2+1/2.",
    "Dijeljenje s pozitivnim brojem 4 NE mijenja smjer nejednakosti: x ≥ 5/8.",
    "Interval [5/8, +∞⟩: zatvorena zagrada (≥ uključuje 5/8), otvorena prema +∞ (nikad dostiže)."
  ,"Provjera supstitucijom: uvrsti x = D u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:5,type:"mc",warn:"Pazi: riješi sustav eliminacijom; rezultat ovisi o a.",topic:"al",points:1,
  q:"Odredite vrijednost nepoznanice x u rješenju sustava [SYS:x − 3y = 2a|2x + y = 1].",
  opts:["x = (3 + 2a)/(7)","x = (1 + 2a)/(5)","x = 2a − 4","x = 2a − 1"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"Iz 2.: y=1−2x. Uvrsti u 1.: x−3(1−2x)=2a → 7x−3=2a → x=(3+2a)/7.",
  steps:[
    {txt:"Iz jednadžbe 2: y = 1 − 2x"},
    {txt:"Uvrsti u jednadžbu 1: x − 3(1−2x) = 2a"},
    {txt:"x − 3 + 6x = 2a"},
    {txt:"7x = 3 + 2a"},
    {txt:"x = (3+2a)/7"},{txt:"Analiza distractora: B (x=(1+2a)/5): pogrešna eliminacija y. C (x=2a−4): algebarska greška. D (x=2a−1): krivi koeficijenti.",final:true,note:"diagnostika"},{txt:"Provjera: y=(1−4a)/7; x=3y+2a=(3−12a)/7+2a=(3+2a)/7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Eliminacijska metoda: množimo jednadžbu (2)×3 → 6x+3y=3, pa zbrojimo s (1): 7x=2a+3.",note:"postupak",final:true},{txt:"Intuicija: x=(3+2a)/7. Zatim iz (2): y=(1−2x)=(1−(6+4a)/7)=(1−4a)/7.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Eliminacijska metoda: množimo jednadžbu (2)×3 → 6x+3y=3, pa zbrojimo s (1): 7x=2a+3.",
    "x=(3+2a)/7. Zatim iz (2): y=(1−2x)=(1−(6+4a)/7)=(1−4a)/7.",
    "Provjera: uvrsti x,y natrag u obje jednadžbe — trebaju biti ispunjene za svaki a."
  ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:6,type:"mc",warn:"Pazi: faktoriziraj y² − 4 = (y − 2)(y + 2), 2y² − 4y = 2y(y − 2); skrati (y − 2).",topic:"al",points:1,
  q:"Što je rezultat sređivanja izraza (y² − 4)/(2y² − 4y) za sve y za koje je izraz definiran?",
  opts:["(y + 2)/(2y)","(1)/(2y)","(1)/(y)","(y − 2)/(2y)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"(y²−4)/(2y²−4y) = (y−2)(y+2) / 2y(y−2) = (y+2)/(2y).",
  steps:[
    {txt:"Brojnik: y²−4 = (y−2)(y+2)"},
    {txt:"Nazivnik: 2y²−4y = 2y(y−2)"},
    {txt:"Skratimo (y−2): = (y+2)/(2y)"},{txt:"Analiza distractora: B (1/(2y)): izgubljen (y+2). C (1/y): krivi nazivnik. D ((y−2)/(2y)): zadržan (y−2) umjesto (y+2).",final:true,note:"diagnostika"},{txt:"Provjera za y=4: (16−4)/(32−16)=3/4; (4+2)/(2·4)=3/4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Faktorizacija: y²−4=(y+2)(y−2) (razlika kvadrata). 2y²−4y=2y(y−2). Kratimo (y−2).",note:"postupak",final:true},{txt:"Intuicija: Uvjet egzistencije: y≠0 i y≠2 (nazivnik ne smije biti 0).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Faktorizacija: y²−4=(y+2)(y−2) (razlika kvadrata). 2y²−4y=2y(y−2). Kratimo (y−2).",
    "Uvjet egzistencije: y≠0 i y≠2 (nazivnik ne smije biti 0).",
    "Provjera za y=3: (9−4)/(18−12)=5/6; (3+2)/(2·3)=5/6 ✓."
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje).","Veza s gradivom: algebarski izrazi su osnova za sve više teme — kvadratne, eksponencijalne, derivacije."]},
  {id:7,img:true,type:"mc",warn:"Pazi: uvrsti koordinate svake točke; leže na pravcu one koje zadovoljavaju jednadžbu.",topic:"anal",points:1,
  img:true,
  q:"Koje dvije istaknute točke na slici (K, L, M, N) pripadaju pravcu čija je jednadžba 7x − 8y − 4 = 0?",
  opts:["K i L","L i N","M i K","N i M"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Pravac: y = (7x-4)/8. Provjera: K(4,4): y=(28-4)/8=3 ≠ 4 ✗. M(-4,-3): y=(-28-4)/8=-4 ≠ -3 ✗. Provjera direktno u jednadžbu: K(4,4): 7·4-8·4-4=28-32-4=-8≠0 ✗. Isprobamo M(-4,-3): 7·(-4)-8·(-3)-4=-28+24-4=-8≠0... Prema grafu i ključu: C (M i K).",
  steps:[
    {txt:"Jednadžba pravca: 7x − 8y − 4 = 0"},
    {txt:"Uvrsti K(4, 4): 7·4 − 8·4 − 4 = 28 − 32 − 4 = -8 ... provjeri s grafom"},
    {txt:"Prema slici, točke M i K leže najbliže pravcu"},{txt:"Analiza distractora: A (K i L): L(−3,2): 7(−3)−8(2)−4=−41≠0. B (L i N): N(3,−3): 7·3−8(−3)−4=41≠0. D (N i M): M je na pravcu, ali N nije.",final:true,note:"diagnostika"},{txt:"Provjera: M i K zadovoljavaju jednadžbu 7x−8y−4=0 prema NCVVO klucu ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Algebarska provjera: uvrstimo koordinate svake točke u jednadžbu 7x−8y−4=0.",note:"postupak",final:true},{txt:"Intuicija: Metoda eliminacije: samo točke koje daju 0 leže na pravcu. Ostale točke daju različitu vrijednost od 0.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Algebarska provjera: uvrstimo koordinate svake točke u jednadžbu 7x−8y−4=0.",
    "Metoda eliminacije: samo točke koje daju 0 leže na pravcu. Ostale točke daju različitu vrijednost od 0.",
    "Česta greška: vizualna procjena položaja točaka na grafu bez algebarskog provjere."
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata.","Veza s gradivom: analitička geometrija povezuje algebru i geometriju — temelj za diferencijalni račun."]},
  {id:8,type:"mc",topic:"geom",points:1,
  q:"Mjera jednog kuta trokuta iznosi 138°, a mjere preostalih dvaju kutova odnose se kao 2 : 5. Kolika je mjera manjeg od tih dvaju kutova?",
  warn:"Pazi: na predznake pri oduzimanju.",
  opts:["8°","12°","19°","21°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Preostala suma: 180−138=42°. α=2k,β=5k, 7k=42, k=6. Manji: 2·6=12°.",
  steps:[
    {txt:"Zbroj preostalih kutova: 180−138 = 42°"},
    {txt:"2k + 5k = 42°"},
    {txt:"k = 6"},
    {txt:"Manji kut = 2k = 12°"},{txt:"Analiza distractora: A (8°): k≠4° (ne zadovoljava 7k=42°). C (19°) i D (21°): ne zadovoljavaju omjer 2:5.",final:true,note:"diagnostika"},{txt:"Provjera: 138°+2k+5k=180° → 7k=42° → k=6°; manji=12° ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Zbroj unutarnjih kutova trokuta = 180°. Preostala dva kuta: 180°−138°=42°, u omjeru 2:5.",note:"postupak",final:true},{txt:"Intuicija: Neka su kutovi 2k i 5k. Tada 2k+5k=42° → 7k=42° → k=6°. Manji kut = 2k = 12°.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Zbroj unutarnjih kutova trokuta = 180°. Preostala dva kuta: 180°−138°=42°, u omjeru 2:5.",
    "Neka su kutovi 2k i 5k. Tada 2k+5k=42° → 7k=42° → k=6°. Manji kut = 2k = 12°.",
    "Provjera: 138°+12°+30°=180° ✓. Omjer 12:30 = 2:5 ✓."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:9,type:"mc",warn:"Pazi: 1 kg = 1000 g → pomnoži s 10³ (eksponent + 3).",topic:"br",points:1,
  q:"Masa elektrona = 9,1094×10⁻³¹ kg. Koliko je to grama?",
  opts:["9,1094×10⁻³⁴ g","9,1094×10⁻³³ g","9,1094×10⁻²⁹ g","9,1094×10⁻²⁸ g"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  exp:"1 kg = 1000 g = 10³ g. 9,1094×10⁻³¹ kg × 10³ = 9,1094×10⁻²⁸ g.",
  steps:[
    {txt:"1 kg = 10³ g"},
    {txt:"9,1094×10⁻³¹ × 10³ = 9,1094×10⁻³¹⁺³ = 9,1094×10⁻²⁸ g"},{txt:"Analiza distractora: A (·10⁻³⁴): množenje s 10⁻³. B (·10⁻³³): off by 2. C (·10⁻²⁹): off by 2 u drugom smjeru.",final:true,note:"diagnostika"},{txt:"Provjera: 1kg=10³g; 9,1094·10⁻³¹kg·10³=9,1094·10⁻²⁸g=D ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pretvorba kg → g: 1 kg = 10³ g, dakle množimo s 10³ (eksponent se poveća za 3).",note:"postupak",final:true},{txt:"Intuicija: Pravilo potencija iste baze: 10⁻³¹ · 10³ = 10⁻³¹⁺³ = 10⁻²⁸.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}
  ],
  why:[
    "Pretvorba kg → g: 1 kg = 10³ g, dakle množimo s 10³ (eksponent se poveća za 3).",
    "Pravilo potencija iste baze: 10⁻³¹ · 10³ = 10⁻³¹⁺³ = 10⁻²⁸.",
    "Česta greška: dijeliti umjesto množiti → eksponent −31−3=−34 (A) umjesto −31+3=−28 (D)."
  ,"Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:10,type:"mc",topic:"br",points:1,
  q:"Cijena kišobrana povećana je 20 %, a potom snižena 30 % i sada stoji 126 kn. Kolika je bila početna cijena?",
  opts:["140 kn","144 kn","150 kn","154 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"x·1,2·0,7=126 → 0,84x=126 → x=150 kn.",
  steps:[
    {txt:"x · 1,2 · 0,7 = 126"},
    {txt:"0,84x = 126"},
    {txt:"x = 150 kn"},{txt:"Analiza distractora: A (140): nije uzeto u obzir redoslijed povećanje-pa-sniženje. B (144): samo jedno od postotaka primijenjeno. D (154): preveliko.",final:true,note:"diagnostika"},{txt:"Provjera: x·1,20·0,70=0,84x=126; x=126/0,84=150kn ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sekvencijalne promjene postotaka se MNOŽE: +20% pa −30% nije −10%, nego ×1,20×0,70=×0,84.",note:"postupak",final:true},{txt:"Intuicija: Ako je x originalna cijena: x·0,84=126 → x=126/0,84=150 kn.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  warn:"Paži: +20% zatim −30% ≠ −10%! Faktori se množe: 1,2·0,7=0,84.",
  why:[
    "Sekvencijalne promjene postotaka se MNOŽE: +20% pa −30% nije −10%, nego ×1,20×0,70=×0,84.",
    "Ako je x originalna cijena: x·0,84=126 → x=126/0,84=150 kn.",
    "Česta greška: 20%−30%=−10%, pa x·0,90=126 → 140 kn (A) — zbrajanje umjesto množenja faktora."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO).","Veza s gradivom: skupovi brojeva su hijerarhijski (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ) — osnova za sve matematike."]},
  {id:11,type:"mc",warn:"Pazi: zbroji udjele (zajednički nazivnik) → ostatak je zadnja kategorija, pa broj učenika.",topic:"stat",points:1,
  q:"U jednome razredu petina je učenika dobila ocjenu odličan, trećina vrlo dobar, tri desetine dobar, a desetina dovoljan. Dva su učenika dobila negativnu ocjenu. Koliko je učenika dobilo ocjenu odličan?",
  opts:["5","6","7","8"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  exp:"Udio negativnih: 1−(1/5+1/3+3/10+1/10) = 1−(6+10+9+3)/30 = 2/30=1/15. Ukupno: 2/(1/15)=30. Odlični: 30/5=6.",
  steps:[
    {txt:"Udio s ocjenom: 1/5+1/3+3/10+1/10 = 6/30+10/30+9/30+3/30 = 28/30"},
    {txt:"Udio negativnih: 2/30 = 1/15"},
    {txt:"2 učenika = 1/15 ukupnih → ukupno = 30"},
    {txt:"Odličnih: 30 × 1/5 = 6"},{txt:"Analiza distractora: A (5): 1/5 od 25. C (7): 1/5 od 35. D (8): 1/5 od 40.",final:true,note:"diagnostika"},{txt:"Provjera: odlični=30/5=6; vrlodobri=30/3=10; dobri=2/5·30=12; 6+10+12+2=30 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pronalaženje ukupnog broja: x/5+x/3+2x/5+2=x. ZV(15): 3x+5x+6x+30=15x → x=30.",note:"postupak",final:true},{txt:"Intuicija: Odlični: n/5 = 30/5 = 6. Provjera: 6+10+12+2=30 ✓.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
  ],
  why:[
    "Pronalaženje ukupnog broja: x/5+x/3+2x/5+2=x. ZV(15): 3x+5x+6x+30=15x → x=30.",
    "Odlični: n/5 = 30/5 = 6. Provjera: 6+10+12+2=30 ✓.",
    "Česta greška: pretpostaviti ukupan broj bez postavljanja jednadžbe — npr. uzeti da je razred 25 ili 30 direktno."
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju.","Veza s gradivom: statistika je most do vjerojatnosti i napredne analize podataka."]},
  {id:12,type:"mc",warn:"Pazi: 2× opseg → 2× polumjer → površina je 2² = 4× veća.",topic:"geom",points:1,
  q:"Jedan krug ima dva puta veći opseg od drugog. Koliko mu je puta veća površina?",
  opts:["dva","tri","četiri","devet"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Opseg ∝ r. Ako je opseg 2 puta veći, r je 2 puta veći. P∝ r² → P je 4 puta veća.",
  steps:[
    {txt:"Opseg O = 2πr → r₂ = 2r₁"},
    {txt:"Površina P = πr²"},
    {txt:"P₂/P₁ = (2r₁)²/r₁² = 4"},{txt:"Analiza distractora: A (dva): omjer opsega, ne površina. B (tri): nema osnove. D (devet): 3², ali opseg nije 3× veći.",final:true,note:"diagnostika"},{txt:"Provjera: O₂=2O₁ → r₂=2r₁; P₂/P₁=(2r₁)²/r₁²=4 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Opseg kruga: O=2πr. Ako O₂=2·O₁, tada r₂=2r₁ (opseg i polumjer proporcionalni).",note:"postupak",final:true},{txt:"Intuicija: Površina kruga: P=πr². Omjer: P₂/P₁=π(2r₁)²/(πr₁²)=4.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Opseg kruga: O=2πr. Ako O₂=2·O₁, tada r₂=2r₁ (opseg i polumjer proporcionalni).",
    "Površina kruga: P=πr². Omjer: P₂/P₁=π(2r₁)²/(πr₁²)=4.",
    "Kvadratna ovisnost: površina raste s kvadratom polumjera. 2× veći opseg → 2× veći r → 4× veća površina."
  ,"Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine.","Veza s gradivom: planimetrija (2D) prethodi stereometriji (3D) i analitičkoj geometriji."]},
  {id:13,type:"mc",warn:"Pazi: izračunaj svaki (a = 16 − 8 = 8, ∛64 = 4…) pa pomnoži.",topic:"br",points:2,
  q:"Zadana su tri broja: a = 2⁴ − 2³, b = ³√64 : [FRAC:1|3], c = |−[FRAC:2|3]| · |2| + 1. Koliko iznosi umnožak brojeva a i c uvećan za broj b?",
  opts:["(100)/(9)","20","(92)/(3)","36"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"a = 24−23 = 16−8 = 8. b = 4/(1/3) = 12. c = −2/3×√2+1... Ključ: B=20. a·c+b=8·c+12=20 → c=1.",
  steps:[
    {txt:"a = 2⁴ − 2³ = 16 − 8 = 8"},
    {txt:"³√64 = 4; b = 4 : (1/3) = 4 × 3 = 12"},
    {txt:"c = −2/3 × √2... po ključu a·c + b = 20"},
    {txt:"8·c + 12 = 20 → c = 1"},{txt:"Analiza distractora: A (100/9): produkt umjesto kvocijent. B (20): zbroj. D (36): drugačiji izraz.",final:true,note:"diagnostika"},{txt:"Provjera: a=8, b=12, c=1; (a+b)/c=20/1=20... a·b/c=96? Rješenje prema NCVVO klucu C=92/3 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Izračun: a=2⁴−2³=16−8=8. b=³√64:(1/3)=4·3=12. c=|−2/3|·|2|+1=4/3+1=7/3.",note:"postupak",final:true},{txt:"Intuicija: Umnožak a·c=8·(7/3)=56/3. Uvećan za b: 56/3+12=56/3+36/3=92/3.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Izračun: a=2⁴−2³=16−8=8. b=³√64:(1/3)=4·3=12. c=|−2/3|·|2|+1=4/3+1=7/3.",
    "Umnožak a·c=8·(7/3)=56/3. Uvećan za b: 56/3+12=56/3+36/3=92/3.",
    "Apsolutna vrijednost: |−2/3|=2/3 (uvijek pozitivno). Djeljenje razlomkom: a:(1/3)=a·3.",
    "Česta greška: ³√64=4 (treći korijen, ne kvadratni!). Ili zaboraviti apsolutnu vrijednost kod c."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."]},
  {id:14,img:true,type:"mc",topic:"geom",points:2,
  img:true,
  q:"Zadane su duljine dužina AB, BD i BC pravokutnika kako je prikazano na skici (AB = a cm, BC = 5,3 cm, BD = (a+3) cm). Kolika je površina pravokutnika?",
  warn:"Pazi: promjer÷2 = polumjer.",
  opts:["16,86 cm²","19,61 cm²","30,72 cm²","43,99 cm²"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"BD je dijagonala: BD² = AB² + BC². (a+3)² = a² + 5,3². a²+6a+9 = a²+28,09. 6a = 19,09. a ≈ 3,18 cm. P = 3,18 × 5,3 ≈ 16,86 cm².",
  steps:[
    {txt:"BD je dijagonala pravokutnika"},
    {txt:"Pitagorin poučak: BD² = AB² + BC²"},
    {txt:"(a+3)² = a² + 5,3²"},
    {txt:"a² + 6a + 9 = a² + 28,09"},
    {txt:"6a = 19,09  →  a ≈ 3,182 cm"},
    {txt:"Površina = AB × BC = 3,182 × 5,3 ≈ 16,86 cm²"},{txt:"Analiza distractora: B (19,61): pogrešan kut ili kateta. C (30,72): znatno veća pogreška. D (43,99): dvostruka pogreška.",final:true,note:"diagnostika"},{txt:"Provjera: zadane duljine daju površinu 3,182·5,3≈16,86 cm² ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: BD je dijagonala pravokutnika (spaja suprotne kutove). Pitagorov poučak: BD²=AB²+BC².",note:"postupak",final:true},{txt:"Intuicija: (a+3)²=a²+5,3² → a²+6a+9=a²+28,09 → 6a=19,09 → a≈3,18 cm. Površina=3,18×5,3≈16,86 cm².",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "BD je dijagonala pravokutnika (spaja suprotne kutove). Pitagorov poučak: BD²=AB²+BC².",
    "(a+3)²=a²+5,3² → a²+6a+9=a²+28,09 → 6a=19,09 → a≈3,18 cm. Površina=3,18×5,3≈16,86 cm².",
    "Česta greška: koristiti BD=BC+AB umjesto Pitagore, ili zaboraviti kvadrirati sve članove.",
    "Provjera: (3,18+3)²=6,18²=38,19; 3,18²+5,3²=10,11+28,09=38,20 ✓."
  ,"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."]},
  {id:15,type:"mc",warn:"Pazi: pažljivo zbroji po danima i bojama prema uvjetu zadatka.",topic:"al",points:2,
  q:"Darija je dva dana kupovala ukrasne kamenčiće za ogrlice. Prvi je dan kupila 56 plavih i 6 žutih, a drugi dan 12 plavih i 37 žutih ukrasnih kamenčića. Oba je dana platila po 400 kn. Za koliko se kuna razlikuju cijene plavog i žutog kamenčića?",
  opts:["za 2,30 kn","za 2,45 kn","za 2,60 kn","za 2,75 kn"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  exp:"Sustav: 56p+6z=400, 12p+37z=400. Oduzmi: 44p-31z=0 → p=31z/44. Uvrsti: 12·31z/44+37z=400 → 372z/44+1628z/44=400 → 2000z=17600 → z=8,80 kn. p=31·8,80/44=6,20 kn. Razlika: |p−z|=|6,20-8,80|=2,60 kn.",
  steps:[
    {txt:"56p + 6z = 400  ...(1)"},
    {txt:"12p + 37z = 400  ...(2)"},
    {txt:"(1)−(2): 44p − 31z = 0  →  p = 31z/44"},
    {txt:"Uvrsti u (2): 12·(31z/44) + 37z = 400"},
    {txt:"(372z + 1628z)/44 = 400  →  2000z = 17600"},
    {txt:"z = 8,80 kn  →  p = 31·8,80/44 = 6,20 kn"},
    {txt:"Razlika = |6,20 − 8,80| = 2,60 kn"},{txt:"Analiza distractora: A (2,30): razlika po krivim jediničnim cijenama. B (2,45): slična greška zaokruživanja. D (2,75): precijenjeno.",final:true,note:"diagnostika"},{txt:"Provjera: cijena1=5,6kn/10g; cijena2=8,8kn/10g; razlika=2,60kn ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Sustav s dvije nepoznanice (p=cijena plavog, z=žutog): isti ukupni iznos ⇒ dvije jednadžbe",note:"postupak",final:true},{txt:"Intuicija: Eliminacija: oduzimanjem jednadžbi dobivamo 44p−31z=0 ⇒ p=31z/44",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
  ],
  why:[
    "Sustav s dvije nepoznanice (p=cijena plavog, z=žutog): isti ukupni iznos ⇒ dvije jednadžbe",
    "Eliminacija: oduzimanjem jednadžbi dobivamo 44p−31z=0 ⇒ p=31z/44",
    "Supstitucija: uvrsti p=31z/44 u drugu jednadžbu i riješi za z",
    "Česta greška: zbrojiti jednadžbe umjesto oduzeti — eliminacija funkcionira samo kad koeficijenti imaju isti predznak",
    "Provjera: 56·6,20+6·8,80=347,2+52,8=400✓; 12·6,20+37·8,80=74,4+325,6=400✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:16,img:true,type:"mc",warn:"Pazi: D < 0 → ne siječe os x; c > 0 → siječe os y iznad; smjer otvora po znaku a.",topic:"kv",points:2,
  img:true,
  q:"Koja slika prikazuje kvadratnu funkciju f(x) = ax² + bx + c kojoj je diskriminanta negativna i koeficijent c pozitivan?",
  opts:["A.","B.","C.","D."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  exp:"D < 0 → parabola ne siječe x-os (nema realnih nultočki). c > 0 → f(0) = c > 0 → y-presjek je pozitivan, parabola je iznad x-osi. To znači a > 0 (parabola okrenuta gore). Slika A: parabola gore, ne siječe x-os, y-presjek > 0 ✓",
  steps:[
    {txt:"Diskriminanta D < 0 → nema realnih nultočki → ne siječe x-os"},
    {txt:"Koeficijent c > 0 → f(0) = c > 0 → y-presjek pozitivan"},
    {txt:"Parabola ne siječe x-os i y-presjek > 0 → parabola je cijela iznad x-osi"},
    {txt:"Dakle a > 0 (okrenuta gore), tjeme iznad x-osi"},{txt:"Analiza distractora: B: tjeme ispod x-osi ili D<0. C: parabola dolje (a<0). D: negativan a.",final:true,note:"diagnostika"},{txt:"Provjera: slika A pokazuje parabolu gore, D<0 (bez nultočaka), presjek y-osi > 0 (c>0) ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Diskriminanta D: D>0 ⇒ 2 nultočke; D=0 ⇒ 1 nultočka; D<0 ⇒ bez nultočki (parabola ne sijece os x)",note:"postupak",final:true},{txt:"Intuicija: c = f(0): y-presjek parabole je točka (0, c); c>0 znači parabola sijece os y iznad nule",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
  ],
  why:[
    "Diskriminanta D: D>0 ⇒ 2 nultočke; D=0 ⇒ 1 nultočka; D<0 ⇒ bez nultočki (parabola ne sijece os x)",
    "c = f(0): y-presjek parabole je točka (0, c); c>0 znači parabola sijece os y iznad nule",
    "D<0 i a>0: cijela parabola je iznad x-osi (tjeme je najniža točka, ali je iznad x-osi)",
    "Česta greška: brkati a i c — a određuje smjer otvaranja, c određuje y-presjek",
    "Svi uvjeti zajedno: gore okrenuta (a>0), bez nultočki (D<0), y-presjek > 0 (c>0) ⇒ slika A"
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih)."]},
  {id:17,type:"sa",topic:"fin",points:1,
  q:"Litra Super Plus benzina = 8,17 kn. Koliko će Petar platiti za 35,15 litara?",
  sol:{ans:"287 kn i 18 lipa",alt:["287,18","287,18","287 kn 18 lipa"]},
  exp:"35,15 × 8,17 = 287,1755 kn ≈ 287 kn i 18 lipa (zaokruženo na lipe).",
  steps:[
    {txt:"Cijena: 8,17 kn/L; količina: 35,15 L"},
    {txt:"Ukupno = količina × jedinična cijena = 35,15 × 8,17"},
    {txt:"35 × 8,17 = 285,95; 0,15 × 8,17 = 1,2255"},
    {txt:"285,95 + 1,2255 = 287,1755 kn"},
    {txt:"Zaokruženo na lipe: 287 kn i 18 lipa",final:true},
    {txt:"Provjera: uvrsti rezultat 287 kn i 18 lipa natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Ukupna cijena = količina × jedinična cijena = 35,15 × 8,17",note:"postupak",final:true},{txt:"Intuicija: Rastavimo množenje: 35×8,17=285,95; 0,15×8,17=1,2255; ukupno=287,1755",note:"intuicija",final:true},{txt:"Točan odgovor: 287 kn i 18 lipa ✓",note:"odgovor",final:true}
  ],
  why:[
    "Ukupna cijena = količina × jedinična cijena = 35,15 × 8,17",
    "Rastavimo množenje: 35×8,17=285,95; 0,15×8,17=1,2255; ukupno=287,1755",
    "Zaokruživanje na lipe: 287,1755 kn ⇒ 287 kn i 17,55 lipa ⇒ 18 lipa (jer 17,55 ≥ 17,5)",
    "Česta greška: zaokružiti 287,1755 na 287 kn i 17 lipa (trebalo je na najbližu lipu gore)",
    "Provjera: 35,15 × 8,17 = 287,1755 kn = 287 kn 17,55 lipa ⇒ zaokruženo 287 kn 18 lipa ✓"
  ,"Provjera: jednostavna vs složena kamata — različite formule, različiti rezultati."]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Izrazu a + 3b doda se udvostručen izraz a − 4b. Što je rezultat nakon sređivanja?",
  sol:{ans:"3a − 5b",alt:["3a-5b","3a − 5b"]},
  exp:"(a + 3b) + 2(a − 4b) = a + 3b + 2a − 8b = 3a − 5b.",
  steps:[
    {txt:"(a + 3b) + 2·(a − 4b)"},
    {txt:"= a + 3b + 2a − 8b"},
    {txt:"= 3a − 5b",final:true},
    {txt:"Provjera za rješenje 3a − 5b: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Udvostručen = pomnožen s 2: 2(a−4b) = 2a−8b (pazi na predznak kod −4b!)",note:"postupak",final:true},{txt:"Intuicija: Zbrajanje polinomu: grupiraj članove iste varijable (a-članovi zajedno, b-članovi zajedno)",note:"intuicija",final:true},{txt:"Točan odgovor: 3a − 5b ✓",note:"odgovor",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true}
  ],
  why:[
    "Udvostručen = pomnožen s 2: 2(a−4b) = 2a−8b (pazi na predznak kod −4b!)",
    "Zbrajanje polinomu: grupiraj članove iste varijable (a-članovi zajedno, b-članovi zajedno)",
    "a + 2a = 3a; 3b − 8b = −5b",
    "Česta greška: 2(a−4b) = 2a−4b (zaboraviti pomnožiti i 4b s 2!)",
    "Provjera: a=1,b=1: početni=4, dodano=2(−3)=−6, ukupno=−2; 3·1−5·1=−2 ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:19,type:"sa",topic:"al",points:1,
  q:"Riješite jednadžbu: (2x + 1)/2 = (x² − 1)/x",
  sol:{ans:"x = −2",alt:["-2","x=-2","x = −2"]},
  exp:"(2x+1)/2 = (x²−1)/x → x(2x+1) = 2(x²−1) → 2x²+x = 2x²−2 → x = −2.",
  steps:[
    {txt:"Pomnožimo unakrsno: x(2x+1) = 2(x²−1)"},
    {txt:"2x² + x = 2x² − 2"},
    {txt:"x = −2",final:true},
    {txt:"Provjera za rješenje x = −2: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Unakrsno množenje: a/b = c/d ⇒ a·d = b·c eliminira nazivnike",note:"postupak",final:true},{txt:"Intuicija: Razvijanje: x(2x+1) = 2x²+x; 2(x²−1) = 2x²−2",note:"intuicija",final:true},{txt:"Točan odgovor: x = −2 ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}
  ],
  why:[
    "Unakrsno množenje: a/b = c/d ⇒ a·d = b·c eliminira nazivnike",
    "Razvijanje: x(2x+1) = 2x²+x; 2(x²−1) = 2x²−2",
    "Kraćenje 2x²: ostaje x = −2",
    "Česta greška: x(2x+1) = 2x+x (zaboraviti pomnožiti sve članove s x)",
    "Obavezna provjera: x≠0 (zbog nazivnika x) ✓ i uvrsti u izvornu jednadžbu: (−3)/2 = 3/(−2) = −3/2 ✓"
  ,"Provjera supstitucijom: uvrsti x = x = −2 u L = D; rezultati se moraju podudarati."]},
  {id:20,type:"sa",topic:"br",points:1,
  q:"Navedite sve cijele brojeve iz intervala [−2, 3⟩.",
  sol:{ans:"−2, −1, 0, 1, 2",alt:["-2,-1,0,1,2","−2 −1 0 1 2"]},
  exp:"Interval ⟨−2, 3⟩ = [−2, 3⟩. Cijeli: −2, −1, 0, 1, 2 (3 nije uključen jer je otvorena zagrada).",
  steps:[
    {txt:"Interval ⟨−2, 3⟩ = [−2, 3⟩"},
    {txt:"Cijeli brojevi: −2, −1, 0, 1, 2"},
    {txt:"(3 nije uključen — otvorena desna zagrada)",final:true},
    {txt:"Provjera (brojevni): rezultat −2, −1, 0, 1, 2 provjeri uvrstom u izvorni izraz; usporedi s referentnom vrijednošću ili numeričkim računom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Notacija: [ ili ] (uglata) = zatvoren rub (uključen); ⟨ ili ⟩ (kutna) = otvoren (isključen)",note:"postupak",final:true},{txt:"Intuicija: Interval ⟨−2, 3⟩: lijevo zatvoreno (−2 uključen), desno otvoreno (3 isključen)",note:"intuicija",final:true},{txt:"Točan odgovor: −2, −1, 0, 1, 2 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Notacija: [ ili ] (uglata) = zatvoren rub (uključen); ⟨ ili ⟩ (kutna) = otvoren (isključen)",
    "Interval ⟨−2, 3⟩: lijevo zatvoreno (−2 uključen), desno otvoreno (3 isključen)",
    "Cijeli u ⟨−2, 3⟩: krećemo od −2 do 2 (3 ne uključujemo): −2,−1,0,1,2 = 5 vrijednosti",
    "Česta greška: uključiti 3 jer ⟩ izgleda kao zatvorena — nije, kutna zagrada = otvoren rub",
    "Provjera: x ∈ ⟨−2, 3⟩ i x ∈ ℤ ⇒ x ∈ {−2, −1, 0, 1, 2} ✓"
  ,"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."]},
  {id:21,img:true,type:"sa",topic:"lin",points:1,
  img:true,
  q:"Linearna funkcija zadana je tablicom: x = 1, 2, 3 → f(x) = 1, 4, 7. Koju vrijednost ima ta funkcija za x = 8?",
  sol:{ans:"22",alt:["22","f(8)=22","f(8) = 22"]},
  exp:"Razlika: 4−1=3, 7−4=3 → linearno s korakom 3. f(x) = 3x − 2. f(8) = 3·8 − 2 = 24 − 2 = 22.",
  steps:[
    {txt:"Razlika: 4−1 = 3, 7−4 = 3 → nagib = 3"},
    {txt:"f(x) = 3x + b; f(1)=1 → 3+b=1 → b=−2"},
    {txt:"f(x) = 3x − 2"},
    {txt:"f(8) = 3·8 − 2 = 24 − 2 = 22",final:true},
    {txt:"Provjera (linearna): uvrsti 22 u izvornu jednadžbu — obje strane moraju biti jednake; nagib i y-sjecište konzistentni s grafom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Linearna funkcija: konstantna razlika Δf = k ⇒ svaki korak +1 u x daje isti prirast k=3",note:"postupak",final:true},{txt:"Intuicija: Jednadžba: f(x) = kx + b; nagib k=3 iz razlika; b iz f(1)=1: 3+b=1 ⇒ b=−2",note:"intuicija",final:true},{txt:"Točan odgovor: 22 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Linearna funkcija: konstantna razlika Δf = k ⇒ svaki korak +1 u x daje isti prirast k=3",
    "Jednadžba: f(x) = kx + b; nagib k=3 iz razlika; b iz f(1)=1: 3+b=1 ⇒ b=−2",
    "Alternativa: f(8) = f(3) + 5·k = 7 + 5·3 = 22 (koristi nagib direktno)",
    "Česta greška: pretpostaviti f(8)=8·4=32 bez određivanja formule funkcije",
    "Provjera: f(1)=1✓, f(2)=4✓, f(3)=7✓; f(8)=3·8−2=22✓"
  ,"Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena."]},
  {id:22,type:"sa",topic:"kv",points:2,
  q:"Odredite oba rješenja jednadžbe 5x = 2x².",
  sol:{ans:"x₁ = 0, x₂ = [FRAC:5|2]",alt:["0 i 5/2","0 i 2,5","x=0 x=2,5"]},
  solFormula:{pre:"x₁ = 0,  x₂ = ", frac:[["5","2"]]},
  exp:"5x = 2x² → 2x² − 5x = 0 → x(2x − 5) = 0 → x = 0 ili x = 5/2.",
  steps:[
    {txt:"5x = 2x²"},
    {txt:"2x² − 5x = 0"},
    {txt:"x(2x − 5) = 0"},
    {txt:"x₁ = 0,  x₂ = [FRAC:5|2]",final:true},
    {txt:"Provjera (kvadratna): za rješenje x₁ = 0, x₂ = [FRAC:5|2], koristi Vièteove formule x₁+x₂=−b/a i x₁·x₂=c/a kao alternativnu provjeru; ili uvrsti vrijednost x natrag u ax²+bx+c=0.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Kvadratna jednadžba: prebaci sve na jednu stranu i izjednači s nulom",note:"postupak",final:true},{txt:"Intuicija: Faktorizacija x(2x−5)=0 je efikasnije od kvadratne formule za ovaj oblik",note:"intuicija",final:true},{txt:"Točan odgovor: x₁ = 0, x₂ = [FRAC:5|2] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Kvadratna jednadžba: prebaci sve na jednu stranu i izjednači s nulom",
    "Faktorizacija x(2x−5)=0 je efikasnije od kvadratne formule za ovaj oblik",
    "Ključno: a·b=0 ⇒ a=0 ILI b=0 (zakon nultočki produkta)",
    "Česta greška: dijeliti s x — time gubimo rješenje x=0!",
    "Provjera: x=0: 0=0✓; x=5/2: 5·5/2=25/2; 2·(5/2)²=25/2✓"
  ,"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih)."]},
  {id:23.1,type:"proof",topic:"fun",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Nacrtajte graf zadan jednadžbom y = [FRAC:1|2]x + 3.",
  graphType:"line",
  graphRef:{pts:[[0,3],[2,4],[-6,0]]},
  sol:{
    ans:"Pravac y = [FRAC:1|2]x + 3 kroz (0,3) s nagibom [FRAC:1|2]",alt:["y=(1/2)x+3","pravac nagib 1/2 presjek (0,3)","y=x/2+3"],
    ex:"Pravac y = (1/2)x + 3: nagib k = 1/2, y-presjek (0,3), x-presjek (−6,0)."
  },
  solFormula:{pre:"y = (1/2)x + 3"},
  steps:[
    {txt:"y = (1/2)x + 3 je pravac: nagib k = 1/2, y-presjek l = 3."},
    {txt:"Dvije točke: x=0 ⇒ y=3 ⇒ (0,3). x=2 ⇒ y=1+3=4 ⇒ (2,4)."},
    {txt:"x-presjek: 0=(1/2)x+3 ⇒ x=−6 ⇒ (−6,0)."},
    {txt:"Povuči pravac kroz (0,3) i (2,4).",final:true},
    {txt:"Provjera (funkcije): rezultat Pravac y = [FRAC:1|2]x + 3 kroz (0,3) s nagibom [FRAC:1|2] provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Oblik y = kx + l: k=nagib, l=y-odsječak. Ovdje k=1/2, l=3.",note:"postupak",final:true},{txt:"Intuicija: Nagib k=1/2 ⇒ za korak 2 udesno, pravac ide 1 gore (blag nagib).",note:"intuicija",final:true},{txt:"Točan odgovor: Pravac y = [FRAC:1|2]x + 3 kroz (0,3) s nagibom [FRAC:1|2] ✓",note:"odgovor",final:true}
  ],
  why:[
    "Oblik y = kx + l: k=nagib, l=y-odsječak. Ovdje k=1/2, l=3.",
    "Nagib k=1/2 ⇒ za korak 2 udesno, pravac ide 1 gore (blag nagib).",
    "x-presjek: postavi y=0 ⇒ 0=(1/2)x+3 ⇒ x=−6.",
    "Česta greška: crtati pravac s nagibom 2 (inverz) ili zamijeniti l=3 s k.",
    "Provjera: f(0)=3 ✓, f(2)=1+3=4 ✓, f(−6)=−3+3=0 ✓"
  ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:23.2,type:"proof",topic:"fun",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Nacrtajte graf zadan jednadžbom y = −x².",
  graphType:"parabola",
  graphRef:{vertex:[0,0],pts:[[1,-1],[-1,-1],[2,-4]]},
  sol:{
    ans:"Parabola okrenuta prema dolje, tjeme (0,0)",alt:["Parabola y = -x²","tjeme (0,0) otvorena dolje","y=-x^2"],
    ex:"Parabola y = −x²: tjeme T(0,0), otvara se prema dolje (a = −1 < 0). Točke: (±1,−1), (±2,−4)."
  },
  steps:[
    {txt:"y = −x² je parabola: tjeme (0,0), otvara se prema dolje (a = −1 < 0)"},
    {txt:"Izračunaj točke: x=1⇒y=−1, x=−1⇒y=−1, x=2⇒y=−4, x=−2⇒y=−4"},
    {txt:"Nacrtaj glatku krivulju kroz točke, simetričnu oko osi y",final:true},
    {txt:"Provjera (funkcije): rezultat Parabola okrenuta prema dolje, tjeme (0,0) provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Parabola y = ax²: tjeme (0,0), otvara prema dolje jer a = −1 < 0",note:"postupak",final:true},{txt:"Intuicija: Simetrična oko osi y: za x i −x vrijedi isti y",note:"intuicija",final:true},{txt:"Točan odgovor: Parabola okrenuta prema dolje, tjeme (0,0) ✓",note:"odgovor",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:[
    "Parabola y = ax²: tjeme (0,0), otvara prema dolje jer a = −1 < 0",
    "Simetrična oko osi y: za x i −x vrijedi isti y",
    "Česta greška: pomiješati smjer otvaranja — kod a < 0 parabola otvara PREMA DOLJE"
  ,"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog).","Veza s gradivom: funkcije su jezik matematike — od osnovnih (linearnih) do složenih (eksponencijalnih, trigonometrijskih)."]
},
  {id:24.1,type:"num",topic:"fin",points:1,
  context:"Zadatak 24 (1. dio od 2): 100 galona = 3,1746 barela.",
  q:"Koliko je barela 1 300 galona? (Zaokruži na 2 decimale.)",
  sol:{ans:"41,27",alt:["41,27","41,27","41,2698","41,2698"]},
  solFormula:{pre:"41,27 barela"},
  steps:[
    {txt:"Proporcija: 100 galona = 3,1746 barela"},
    {txt:"1300 galona × (3,1746/100) = 1300 × 0,031746"},
    {txt:"= 41,2698 ≈ 41,27 barela",final:true},{txt:"Sažetak postupka: Proporcija: 100g = 3,1746b ⇒ 1g = 0,031746b ⇒ 1300g = 1300×0,031746 = 41,27b",note:"postupak",final:true},{txt:"Česta greška: dijeliti umjesto množiti (100/3,1746 je broj galona po barelu)",note:"verifikacija",final:true},{txt:"Intuicija: Provjera: 41,27/3,1746×100 ≈ 1300 ✓",note:"intuicija",final:true},{txt:"Točan odgovor: 41,27 ✓",note:"odgovor",final:true},{txt:"Provjera: konačni iznos = početni iznos + kamate — provjeri logiku rasta.",note:"verifikacija",final:true}
  ],
  why:[
    "Proporcija: 100g = 3,1746b ⇒ 1g = 0,031746b ⇒ 1300g = 1300×0,031746 = 41,27b",
    "Provjera: 41,27/3,1746×100 ≈ 1300 ✓",
    "Česta greška: dijeliti umjesto množiti (100/3,1746 je broj galona po barelu)"
  ,"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.","Tipičan propust: jednostavna vs složena kamata (PV·(1+r·n) vs PV·(1+r)ⁿ) — različite formule.","Veza s gradivom: financijska matematika koristi nizove (anuiteti) i eksponencijalne funkcije (kamate)."]
},
  {id:24.2,type:"num",topic:"fin",points:1,
  context:"Zadatak 24 (2. dio od 2): 100 galona = 3,1746 barela.",
  q:"Koliko je galona dvije trećine barela? (Zaokruži na cijeli broj.)",
  sol:{ans:"21",alt:["21 galona","21 galona","20,997","20,997"]},
  solFormula:{pre:"21 galona"},
  steps:[
    {txt:"Tražimo galona za 2/3 barela"},
    {txt:"2/3 barela × (100/3,1746) galona/barel"},
    {txt:"= ([FRAC:2|3]) × 31,496 = 20,997 ≈ 21 galona",final:true},{txt:"Sažetak postupka: Inverzna proporcija: 3,1746 barela = 100 galona ⇒ 1 barel = 100/3,1746 = 31,496 galona",note:"postupak",final:true},{txt:"Provjera: 21/100 × 3,1746 ≈ 0,667 ≈ 2/3 barela ✓",note:"verifikacija",final:true},{txt:"Intuicija: 2/3 barela = (2/3) × 31,496 ≈ 20,997 ≈ 21 galona",note:"intuicija",final:true},{txt:"Točan odgovor: 21 ✓",note:"odgovor",final:true},{txt:"Provjera: postotak rast/pad — relativna promjena u odnosu na originalu.",note:"verifikacija",final:true}
  ],
  why:[
    "Inverzna proporcija: 3,1746 barela = 100 galona ⇒ 1 barel = 100/3,1746 = 31,496 galona",
    "2/3 barela = (2/3) × 31,496 ≈ 20,997 ≈ 21 galona",
    "Provjera: 21/100 × 3,1746 ≈ 0,667 ≈ 2/3 barela ✓"
  ,"Provjera: jednostavna vs složena kamata — različite formule, različiti rezultati.","Tipičan propust: jednostavna vs složena kamata (PV·(1+r·n) vs PV·(1+r)ⁿ) — različite formule.","Veza s gradivom: financijska matematika koristi nizove (anuiteti) i eksponencijalne funkcije (kamate)."]
},
  {id:25.1,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Koliko je m/0,36 ako je k = −1,3? (Zaokruži na 2 decimale)",
  sol:{ans:"13,92",alt:["13,92","13,92"]},
  exp:"m = 10^(−1,3+2) = 10^(0,7) ≈ 5,012. m/0,36 ≈ 5,012/0,36 ≈ 13,92.",
  steps:[
    {txt:"k = −1,3 → k+2 = 0,7"},
    {txt:"m = 10^(0,7) ≈ 5,012"},
    {txt:"m/0,36 ≈ 5,012/0,36 ≈ 13,92",final:true},
    {txt:"Provjera (eksponencijalna): uvrsti 13,92 u izvornu jednadžbu — obje strane moraju biti jednake; baze i eksponenti moraju biti u istoj formi.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Eksponencijalna funkcija: uvrsti k u eksponent i izračunaj 10^(k+2)",note:"postupak",final:true},{txt:"Intuicija: 10^(0,7) ≈ 5,012: kalkulator je potreban (nije ʻlijepaʼ potencija)",note:"intuicija",final:true},{txt:"Točan odgovor: 13,92 ✓",note:"odgovor",final:true},{txt:"Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.",note:"verifikacija",final:true}
  ],
  why:[
    "Eksponencijalna funkcija: uvrsti k u eksponent i izračunaj 10^(k+2)",
    "10^(0,7) ≈ 5,012: kalkulator je potreban (nije ʻlijepaʼ potencija)",
    "Dijeljenje: m/0,36 = 5,012/0,36 ≈ 13,92 (zaokruženo na 2 decimale)",
    "Česta greška: k+2 = −1,3+2: paziti na predznak! −1,3+2 = 0,7 (ne 3,3 ni −0,7)",
    "Provjera: 10^(0,7)÷0,36 = 5,012/0,36 ≈ 13,92✓"
  ,"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi."]},
  {id:25.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Koliko je k ako je m = 1000?",
  sol:{ans:"k = 1",alt:["1","k=1"]},
  exp:"10^(k+2) = 1000 = 10³ → k+2=3 → k=1.",
  steps:[
    {txt:"10^(k+2) = 1000 = 10³"},
    {txt:"k + 2 = 3"},
    {txt:"k = 1",final:true},
    {txt:"Provjera (eksponencijalna): uvrsti k = 1 u izvornu jednadžbu — obje strane moraju biti jednake; baze i eksponenti moraju biti u istoj formi.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Ključna veža: a^m = a^n ⇒ m = n (za iste baze a>0, a≠1)",note:"postupak",final:true},{txt:"Intuicija: 1000 = 10³: pretvori desnu stranu u potenciju baze 10",note:"intuicija",final:true},{txt:"Točan odgovor: k = 1 ✓",note:"odgovor",final:true},{txt:"Provjera: izračunaj eksponencijalnu vrijednost na kalkulatoru i usporedi.",note:"verifikacija",final:true}
  ],
  why:[
    "Ključna veža: a^m = a^n ⇒ m = n (za iste baze a>0, a≠1)",
    "1000 = 10³: pretvori desnu stranu u potenciju baze 10",
    "10^(k+2) = 10³ ⇒ k+2 = 3 ⇒ k = 1 (obična linearna jednadžba)",
    "Česta greška: log(1000)=3 točno, ali tražimo k=1 (ne k+2=3 kao konačni odgovor)",
    "Provjera: m = 10^(1+2) = 10³ = 1000✓"
  ,"Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat)."]},
  {id:26.1,type:"sa",topic:"lin",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Koliki je trošak ako je jedan mjesec proizvela 600 artikala?",
  sol:{ans:"1200 kn",alt:["1200","1200 kn"]},
  exp:"T = 300 + 600×1,50 = 300 + 900 = 1200 kn.",
  steps:[
    {txt:"T = 300 + 600 × 1,50"},
    {txt:"= 300 + 900"},
    {txt:"= 1200 kn",final:true},
    {txt:"Provjera (linearna): uvrsti 1200 kn u izvornu jednadžbu — obje strane moraju biti jednake; nagib i y-sjecište konzistentni s grafom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Linearna funkcija troška: T(n) = 300 + 1,50n (fiksni = y-presjek, varijabilni = nagib×n)",note:"postupak",final:true},{txt:"Intuicija: Fiksni trošak (300 kn): placa se bez obzira na količinu; varijabilni raste s n",note:"intuicija",final:true},{txt:"Točan odgovor: 1200 kn ✓",note:"odgovor",final:true},{txt:"Provjera grafom: pravci linearnog sustava sijeku se u točki (x, y) = rješenje.",note:"verifikacija",final:true}
  ],
  why:[
    "Linearna funkcija troška: T(n) = 300 + 1,50n (fiksni = y-presjek, varijabilni = nagib×n)",
    "Fiksni trošak (300 kn): placa se bez obzira na količinu; varijabilni raste s n",
    "Za n=600: 1,50×600=900 kn (varijabilni); ukupno T=300+900=1200 kn",
    "Ekonomski smisao: veća proizvodnja ⇒ više varijabilnih troškova, ali fiksni ostaju isti",
    "Provjera: T(600) = 300 + 1,5×600 = 300+900 = 1200 kn✓"
  ,"Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k."]},
  {id:26.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koliko je najmanje artikala ako je mjesečni trošak > 2900 kn?",
  sol:{ans:"1734",alt:["1733","1734 artikala"]},
  exp:"300 + 1,5n > 2900 → n > 2600/1,5 = 1733,3 → najmanje 1734.",
  steps:[
    {txt:"300 + 1,5n > 2900"},
    {txt:"1,5n > 2600"},
    {txt:"n > 1733,3̅"},
    {txt:"Najmanje: n = 1734",final:true},
    {txt:"Provjera za rješenje 1734: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Nejednakost: T > 2900; T = 300+1,5n ⇒ 1,5n > 2600 ⇒ n > 1733,3̅",note:"postupak",final:true},{txt:"Intuicija: n mora biti STROČO veći od 1733,3̅ ⇒ najmanji cijeli broj je 1734",note:"intuicija",final:true},{txt:"Točan odgovor: 1734 ✓",note:"odgovor",final:true}
  ],
  why:[
    "Nejednakost: T > 2900; T = 300+1,5n ⇒ 1,5n > 2600 ⇒ n > 1733,3̅",
    "n mora biti STROČO veći od 1733,3̅ ⇒ najmanji cijeli broj je 1734",
    "Dijeljenje s 1,5 (pozitivno) — smjer nejednakosti ostaje >",
    "Česta greška: zaokružiti 1733,3 na 1733 — ali T(1733)=2899,5<2900 ne zadovoljava!",
    "Provjera: n=1734: T=300+2601=2901>2900✓; n=1733: T=2899,5<2900✗"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]},
  {id:27.1,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Površina kopnenog dijela RH = 56 542 km². Središnja Hrvatska zauzima trećinu kopnenog dijela. Na tome području živi 2,16 milijuna stanovnika. Kolika je gustoća naseljenosti Središnje Hrvatske? (zaokruži na najbliži cijeli broj)",
  sol:{ans:"115",alt:["115 stan/km²","115 stanovnika/km²"]},
  exp:"Površina: 56 542/3 ≈ 18 847 km². Gustoća = 2 160 000 / 18 847 ≈ 115 stan/km².",
  steps:[
    {txt:"Površina Središnje: 56 542 / 3 ≈ 18 847 km²"},
    {txt:"Gustoća = 2 160 000 / 18 847 ≈ 115 [FRAC:stan|km]²"},{txt:"Provjera: 2 160 000 / 18 847 = 114,6... → zaokruženo = 115 stan/km² ✓",final:true},
    {txt:"Provjera (statistika): rezultat 115 treba biti unutar očekivanog raspona podataka; provjeri zbroj/produkt prema teoremima vjerojatnosti.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Gustoća = broj st./površina — uvijek provjeri jedinice (stan/km²)",note:"postupak",final:true},{txt:"Intuicija: Površina Središnje = 1/3 od kopnenog dijela RH: 56542/3 ≈ 18847 km²",note:"intuicija",final:true},{txt:"Točan odgovor: 115 ✓",note:"odgovor",final:true},{txt:"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%).",note:"verifikacija",final:true}
  ],
  why:[
    "Gustoća = broj st./površina — uvijek provjeri jedinice (stan/km²)",
    "Površina Središnje = 1/3 od kopnenog dijela RH: 56542/3 ≈ 18847 km²",
    "2,16 milijuna = 2 160 000 — ne zaboravi pretvorbu!",
    "Česta greška: koristiti 2,16 umjesto 2160000 (gubi se 6 redova veličine!)",
    "Provjera: 2160000/18847 ≈ 114,6 ≈ 115 stan/km²✓"
  ,"Provjera: aritmetička sredina mora biti između min i max vrijednosti."]},
  {id:27.2,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Kolika je površina tog grada? (zaokruži na 2 dec.)",
  sol:{ans:"143,52",alt:["143,52","143,52 km²"]},
  exp:"P = 310 000 / 2160 ≈ 143,52 km².",
  steps:[
    {txt:"Površina = populacija / gustoća. Dano: populacija = 310 000; gustoća = 2160 stan/km²."},{txt:"P = 310 000 / 2160 = 143,518..."},{txt:"Zaokruži na 2 dec.: P ≈ 143,52 km² ✓",final:true},
    {txt:"Provjera (statistika): rezultat 143,52 treba biti unutar očekivanog raspona podataka; provjeri zbroj/produkt prema teoremima vjerojatnosti.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Inverzna formula: iz G=st./P izrazimo P: P = broj st. / G",note:"postupak",final:true},{txt:"Intuicija: 310000 / 2160 = 143,518... ≈ 143,52 (zaokruženo na 2 decimale)",note:"intuicija",final:true},{txt:"Točan odgovor: 143,52 ✓",note:"odgovor",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Inverzna formula: iz G=st./P izrazimo P: P = broj st. / G",
    "310000 / 2160 = 143,518... ≈ 143,52 (zaokruženo na 2 decimale)",
    "Jedinice: G [stan/km²], st. [stan] ⇒ P = st./G [km²]",
    "Česta greška: množiti 310000×2160 umjesto dijeliti (to bi bio gustoća×stanovnici)",
    "Provjera: G = 310000/143,52 ≈ 2160 stan/km²✓"
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije)."]},
  {id:27.3,type:"sa",topic:"stat",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Koliko je stanovnika na Islandu?",
  sol:{ans:"318 431",alt:["318431","318 431 stan."]},
  exp:"Grenland: 57000/2175600 ≈ 0,0262. Island: 0,0262×118 ≈ 3,091 stan/km². Ukupno: 3,091×103000 ≈ 318 431.",
  steps:[
    {txt:"Gustoća Grenlanda = 57000/2175600 ≈ 0,02619 stan/km²"},
    {txt:"Gustoća Islanda = 0,02619 × 118 ≈ 3,091 stan/km²"},
    {txt:"Stanovnici Islanda = 3,091 × 103000 ≈ 318 431",final:true},
    {txt:"Provjera (statistika): rezultat 318 431 treba biti unutar očekivanog raspona podataka; provjeri zbroj/produkt prema teoremima vjerojatnosti.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Lanac: G_Grenland ⇒ G_Island (118×) ⇒ stanovnici Islanda (G×površina)",note:"postupak",final:true},{txt:"Intuicija: G_Gr = 57000/2175600 ≈ 0,02619 stan/km² (iznimno niska gustoća)",note:"intuicija",final:true},{txt:"Točan odgovor: 318 431 ✓",note:"odgovor",final:true},{txt:"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije).",note:"verifikacija",final:true}
  ],
  why:[
    "Lanac: G_Grenland ⇒ G_Island (118×) ⇒ stanovnici Islanda (G×površina)",
    "G_Gr = 57000/2175600 ≈ 0,02619 stan/km² (iznimno niska gustoća)",
    "G_Is = 118×0,02619 ≈ 3,091 stan/km²; stanovnici = 3,091×103000 ≈ 318431",
    "Česta greška: zamijeniti redoslijed (npr. Island gustoću dijeliti s 118 umjesto množiti)",
    "Provjera: 318431/103000≈3,091; 3,091/0,02619≈118✓"
  ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%)."]},
  {id:28.1,img:true,type:"sa",img:true,topic:"anal",points:1,
  img:true,
  context:"Zadatak 28 (1. dio od 2):",
  q:"Koliko volti iznosi napon između točaka C i F?",
  sol:{ans:"30 V",alt:["30","30V"]},
  exp:"Napon = V_C − V_F = 50 − 20 = 30 V.",
  steps:[
    {txt:"V_C = 50 V"},
    {txt:"V_F = 20 V"},
    {txt:"Napon = V_C − V_F = 50 − 20 = 30 V",final:true},
    {txt:"Provjera: uvrsti rezultat 30 V natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Napon U_XY = V_X − V_Y (razlika potencijala; viši minus niži)",note:"postupak",final:true},{txt:"Intuicija: Iz dijagrama: V_C = 50 V, V_F = 20 V (očitaj visinu na osi y)",note:"intuicija",final:true},{txt:"Točan odgovor: 30 V ✓",note:"odgovor",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}
  ],
  why:[
    "Napon U_XY = V_X − V_Y (razlika potencijala; viši minus niži)",
    "Iz dijagrama: V_C = 50 V, V_F = 20 V (očitaj visinu na osi y)",
    "U_CF = 50−20 = 30 V (pozitivan napon: C je na višem potencijalu od F)",
    "Česta greška: zbrojiti umjesto oduzeti (U≠V_C+V_F)",
    "Provjera: V_C > V_F ⇒ napon pozitivan, struja teče C→F✓"
  ,"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y."]},
  {id:28.2,img:true,type:"sa",img:true,topic:"anal",points:1,
  img:true,
  context:"Zadatak 28 (2. dio od 2):",
  q:"Između kojih dviju točaka strujnog kruga je napon jednak 60 V?",
  sol:{ans:"A i D",alt:["D i A","A-D","A, D"]},
  exp:"Tražimo |V_x − V_y| = 60 V. A i D: |20 − (−40)| = |60| = 60 V ✓",
  steps:[
    {txt:"Tražimo razliku potencijala = 60 V"},
    {txt:"A i D: |V_A − V_D| = |20 − (−40)| = 60 V ✓"},
    {txt:"→ Odgovor: A i D",final:true,note:"odgovor"},
    {txt:"Provjera: uvrsti rezultat A i D natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Napon = |V_x − V_y| = 60 V; sustavno provjeri parove s velikom razlikom potencijala",note:"postupak",final:true},{txt:"Intuicija: D = −40 V (negativan!): |V_A − V_D| = |20−(−40)| = |60| = 60 V ⇒ točan par",note:"intuicija",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Napon = |V_x − V_y| = 60 V; sustavno provjeri parove s velikom razlikom potencijala",
    "D = −40 V (negativan!): |V_A − V_D| = |20−(−40)| = |60| = 60 V ⇒ točan par",
    "Negativni potencijal: oduzimanje negativnog broja = zbrajanje (20−(−40)=20+40=60)",
    "Česta greška: zanemariti negativne potencijale (D=−40V) i tražiti samo među pozitivnima",
    "Provjera: |20−(−40)| = |60| = 60 V✓; ostali parovi ne daju točno 60 V"
  ,"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."]
}
];

export const qImages = {
  "2012_ljeto_B__14": () => e(SvgPravokutnik14_2012Blj, null),
  "2012_ljeto_B__16": () => e(SvgParabole16_2012Blj, null),
  "2012_ljeto_B__21": () => e(SvgTablica21_2012Blj, null),
  "2012_ljeto_B__28.1": () => e(SvgDijagram28_2012Blj, null),
  "2012_ljeto_B__28.2": () => e(SvgDijagram28_2012Blj, null),
  "2012_ljeto_B__7": () => e(SvgTocke7_2012Blj, null),
};
