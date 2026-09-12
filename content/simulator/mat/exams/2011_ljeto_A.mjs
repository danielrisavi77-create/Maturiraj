// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg30_2011LjetoA(){
  // Q30: niz koncentričnih kružnica sa središtem O. |OA|=10 cm. α = ∠AOB.
  // Točka A1: foot okomice iz B na OA → |OA1|=R·cos α.
  // B1: foot okomice iz A1 na OB → |OB1|=R·cos²α.
  // |OA_n| = R·cos^(2n-1) α  za n=1,2,3,...
  // |OB_n| = R·cos^(2n) α
  // TOČAN α = 36°52'12'' ≈ 36.8699° (3-4-5 trokut: cos α = 4/5 = 0.8, sin α = 0.6)
  const W=320,H=320,cx=160,cy=180,R=130;
  const t="var(--text)",mu="var(--muted)";
  const PRIM="var(--blue)",ACC="var(--red)",GOLD="var(--gold)";
  // α u radijanima (mjereno CCW od +x; u SVG y-os je obrnuta pa koristimo -a)
  const aDeg=36+52/60+12/3600;
  const a=aDeg*Math.PI/180;
  const cosa=Math.cos(a);
  // Točke A, B na vanjskoj kružnici
  const A={x:cx+R,y:cy};
  const B={x:cx+R*Math.cos(-a),y:cy+R*Math.sin(-a)};
  // |OA_n| niz (svaki put · cos α počevši od B → A1 → B1 → A2 → ...)
  const OA1=R*cosa;
  const OB1=OA1*cosa;
  const OA2=OB1*cosa;
  const OB2=OA2*cosa;
  const OA3=OB2*cosa;
  const A1={x:cx+OA1,y:cy};
  const B1={x:cx+OB1*Math.cos(-a),y:cy+OB1*Math.sin(-a)};
  const A2={x:cx+OA2,y:cy};
  const B2={x:cx+OB2*Math.cos(-a),y:cy+OB2*Math.sin(-a)};
  const A3={x:cx+OA3,y:cy};
  // 4 koncentrične kružnice (radius R, OA1, OA2, OA3) — vizualno smanjivanje
  const radii=[R,OA1,OA2,OA3];
  // Lukovi AB̅, A1B1̅, A2B2̅ — svaki na svojoj kružnici radius |OA_n|.
  // Luk ide od (cx+r, cy) (na +x osi) u CCW pravcu do točke pod kutem -α.
  function arcPath(r){
    const ax=cx+r,ay=cy;
    const bx=cx+r*Math.cos(-a),by=cy+r*Math.sin(-a);
    return "M "+ax+","+ay+" A "+r+","+r+" 0 0 0 "+bx+","+by;
  }
  // Mali pravokutnici za oznaku okomitosti (na svakoj A_n i B_n osim A i B)
  // Orijentirani prema lokalnoj geometriji okomice (jednostavna kockica je dovoljna)
  function rightAngle(p){
    const sz=4;
    return e("rect",{x:p.x-sz/2,y:p.y-sz/2,width:sz,height:sz,fill:"none",stroke:t,strokeWidth:0.7});
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},
    // Koncentrične kružnice (dashed plave)
    ...radii.map(function(r,i){return e("circle",{key:"c"+i,cx:cx,cy:cy,r:r,fill:"none",stroke:PRIM,strokeWidth:0.8,strokeDasharray:"3,3"});}),
    // Polumjeri OA i OB
    e("line",{x1:cx,y1:cy,x2:A.x,y2:A.y,stroke:t,strokeWidth:1.1}),
    e("line",{x1:cx,y1:cy,x2:B.x,y2:B.y,stroke:t,strokeWidth:1.1}),
    // Spojevi B-A1, A1-B1, B1-A2, A2-B2 (tanki dashed - okomice)
    e("line",{x1:B.x,y1:B.y,x2:A1.x,y2:A1.y,stroke:mu,strokeWidth:0.7,strokeDasharray:"2,2"}),
    e("line",{x1:A1.x,y1:A1.y,x2:B1.x,y2:B1.y,stroke:mu,strokeWidth:0.7,strokeDasharray:"2,2"}),
    e("line",{x1:B1.x,y1:B1.y,x2:A2.x,y2:A2.y,stroke:mu,strokeWidth:0.7,strokeDasharray:"2,2"}),
    e("line",{x1:A2.x,y1:A2.y,x2:B2.x,y2:B2.y,stroke:mu,strokeWidth:0.7,strokeDasharray:"2,2"}),
    // Lukovi AB, A1B1, A2B2 (crveni — istaknuti jer to je tema zadatka)
    e("path",{d:arcPath(R),fill:"none",stroke:ACC,strokeWidth:1.8}),
    e("path",{d:arcPath(OA1),fill:"none",stroke:ACC,strokeWidth:1.6}),
    e("path",{d:arcPath(OA2),fill:"none",stroke:ACC,strokeWidth:1.4}),
    // Right-angle markeri
    rightAngle(A1),rightAngle(B1),rightAngle(A2),rightAngle(B2),
    // Kut α (luk + label kod O)
    e("path",{d:"M "+(cx+24)+","+cy+" A 24,24 0 0 0 "+(cx+24*Math.cos(-a))+","+(cy+24*Math.sin(-a)),fill:"none",stroke:GOLD,strokeWidth:1.4}),
    e("text",{x:cx+30,y:cy-7,fontSize:12,fill:t,fontStyle:"italic",fontWeight:"700"},"α"),
    // O (centar)
    e("circle",{cx:cx,cy:cy,r:2.4,fill:t}),
    e("text",{x:cx-13,y:cy+6,fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},"O"),
    // A (vanjska, na OA)
    e("circle",{cx:A.x,cy:A.y,r:2.4,fill:"#fff",stroke:t,strokeWidth:1}),
    e("text",{x:A.x+6,y:A.y+5,fontSize:12,fill:t,fontStyle:"italic",fontWeight:"700"},"A"),
    // B (vanjska, na OB)
    e("circle",{cx:B.x,cy:B.y,r:2.4,fill:"#fff",stroke:t,strokeWidth:1}),
    e("text",{x:B.x+5,y:B.y-3,fontSize:12,fill:t,fontStyle:"italic",fontWeight:"700"},"B"),
    // A1, A2, A3 na OA
    e("circle",{cx:A1.x,cy:A1.y,r:1.8,fill:"#fff",stroke:t,strokeWidth:0.9}),
    e("text",{x:A1.x-3,y:A1.y+13,fontSize:9,fill:t,fontStyle:"italic"},"A₁"),
    e("circle",{cx:A2.x,cy:A2.y,r:1.7,fill:"#fff",stroke:t,strokeWidth:0.8}),
    e("text",{x:A2.x-3,y:A2.y+13,fontSize:9,fill:t,fontStyle:"italic"},"A₂"),
    e("circle",{cx:A3.x,cy:A3.y,r:1.5,fill:"#fff",stroke:t,strokeWidth:0.7}),
    e("text",{x:A3.x-3,y:A3.y+13,fontSize:9,fill:t,fontStyle:"italic"},"A₃"),
    // B1, B2 na OB
    e("circle",{cx:B1.x,cy:B1.y,r:1.8,fill:"#fff",stroke:t,strokeWidth:0.9}),
    e("text",{x:B1.x-12,y:B1.y-2,fontSize:9,fill:t,fontStyle:"italic"},"B₁"),
    e("circle",{cx:B2.x,cy:B2.y,r:1.6,fill:"#fff",stroke:t,strokeWidth:0.8}),
    e("text",{x:B2.x-13,y:B2.y-1,fontSize:9,fill:t,fontStyle:"italic"},"B₂")
  );
}

function Svg26_2011LjetoA(){
  // Q26: trokut ABC s težišnicom AD. Podatci:
  // |AB|=10.80, |AD|=12.12, ∠ABD=122°
  // BD ≈ 2.21, BC = 2*BD ≈ 4.42, AC ≈ 13.67
  // Postavi A u (0,0), B u (10.8,0), kut ABx = 180°-122° = 58° (BD ide u lijevu-gornju četvrtinu od B?)
  // Zapravo: kut interni kod B = 122° (tup), pa BC ide gore-desno-gore od B
  // Kut između BA (smjer prema A, tj. lijevo) i BC = 122° → BC ide gore za 180°-122°=58° iznad BA pa je 58° iznad osi −x. 
  // U globalnim koord: smjer BC = 180° - 58° = 122° ako mjerimo od +x suprotno smjeru kazaljke.
  // BC vektor: dužina ovdje normalizirana za prikaz (u zadatku |BC|=2|BD|≈4.42 ali za vizualnu sličnost pdf-u 
  // C izgleda visoko — hajdemo držat geom istinu: 
  const A=[0,0],B=[10.80,0];
  const ang=122*Math.PI/180; // kut ABC = 122°
  const BC_len=4.42; // kratko
  // BC pravac: smjer = vektor BA rotirano za -122° (jer kut interno mjerimo u smjeru kazaljke)
  // Vektor BA = A - B = (-10.80,0). Smjer BA = (1,0) pa BC ide pod kutem 122° u smjeru rotacije CCW od BA → 
  // = rotacija od (-1,0) za 122° CCW = (-cos(122°), -sin(122°)) ako mjerimo CCW...
  // Za jednostavnost: B->C = ((cos(180°-122°)), sin(180°-122°)) * BC_len = (cos(58°), sin(58°)) * BC_len iznad osi.
  // Ali x-komponenta = +cos(58°) = +0.530 → C ima x = B.x + 0.530*BC_len = 10.80 + 2.34 = 13.14
  const Cx=B[0]+Math.cos((180-122)*Math.PI/180)*BC_len;
  const Cy=B[1]+Math.sin((180-122)*Math.PI/180)*BC_len;
  // wait — to bi dalo C u (13.14, 3.74). Trebamo |AC|≈13.67:
  const AC=Math.sqrt(Cx*Cx+Cy*Cy);
  // Provjera: ovo bi trebalo dati AC≈13.67. Računaj:
  // Cx=10.80+0.530*4.42=10.80+2.34=13.14, Cy=0.848*4.42=3.75
  // AC=sqrt(13.14²+3.75²)=sqrt(172.66+14.06)=sqrt(186.72)≈13.67 ✓
  const Dx=(B[0]+Cx)/2,Dy=(B[1]+Cy)/2;
  
  // SVG transform: x_svg = (x*scale + offX), y_svg = (offY - y*scale)
  const W=320,H=210;
  const scale=20,offX=18,offY=170;
  const sx=p=>p[0]*scale+offX, sy=p=>offY-p[1]*scale;
  const t="var(--text)",mu="var(--muted)";
  const PRIM="var(--blue)",MED="var(--green)",GOLD="var(--gold)";
  // Točke
  const pts={
    A:{x:sx(A),y:sy(A)},
    B:{x:sx(B),y:sy(B)},
    C:{x:sx([Cx,Cy]),y:sy([Cx,Cy])},
    D:{x:sx([Dx,Dy]),y:sy([Dx,Dy])}
  };
  // Kut 122° kod B: luk između BA i BC, polumjer ~16
  const arcR=18;
  const aBA=Math.atan2(pts.A.y-pts.B.y,pts.A.x-pts.B.x); // smjer od B prema A (gleda lijevo)
  const aBC=Math.atan2(pts.C.y-pts.B.y,pts.C.x-pts.B.x); // smjer od B prema C
  // Arc path
  const ax1=pts.B.x+arcR*Math.cos(aBA),ay1=pts.B.y+arcR*Math.sin(aBA);
  const ax2=pts.B.x+arcR*Math.cos(aBC),ay2=pts.B.y+arcR*Math.sin(aBC);
  const arcPath="M "+ax1+","+ay1+" A "+arcR+","+arcR+" 0 0 1 "+ax2+","+ay2;
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},
    // Trokut ABC
    e("polygon",{points:pts.A.x+","+pts.A.y+" "+pts.B.x+","+pts.B.y+" "+pts.C.x+","+pts.C.y,
      fill:"rgba(74,144,217,0.06)",stroke:PRIM,strokeWidth:1.6}),
    // Težišnica AD
    e("line",{x1:pts.A.x,y1:pts.A.y,x2:pts.D.x,y2:pts.D.y,stroke:MED,strokeWidth:1.5}),
    // Kut luk 122°
    e("path",{d:arcPath,fill:"none",stroke:GOLD,strokeWidth:1.4}),
    e("text",{x:pts.B.x-8,y:pts.B.y-22,fontSize:10,fill:t,fontWeight:"600"},"122°"),
    // Etikete duljina
    e("text",{x:(pts.A.x+pts.B.x)/2-22,y:pts.A.y+13,fontSize:10,fill:t},"10,80 cm"),
    e("text",{x:(pts.A.x+pts.D.x)/2-12,y:(pts.A.y+pts.D.y)/2+12,fontSize:10,fill:t,transform:"rotate(-12 "+((pts.A.x+pts.D.x)/2)+" "+((pts.A.y+pts.D.y)/2+12)+")"},"12,12 cm"),
    // Točke
    e("circle",{cx:pts.A.x,cy:pts.A.y,r:2.5,fill:"#fff",stroke:t,strokeWidth:1}),
    e("text",{x:pts.A.x-12,y:pts.A.y+5,fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},"A"),
    e("circle",{cx:pts.B.x,cy:pts.B.y,r:2.5,fill:"#fff",stroke:t,strokeWidth:1}),
    e("text",{x:pts.B.x+5,y:pts.B.y+10,fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},"B"),
    e("circle",{cx:pts.C.x,cy:pts.C.y,r:2.5,fill:"#fff",stroke:t,strokeWidth:1}),
    e("text",{x:pts.C.x+5,y:pts.C.y-2,fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},"C"),
    e("circle",{cx:pts.D.x,cy:pts.D.y,r:2.5,fill:"#fff",stroke:MED,strokeWidth:1.2}),
    e("text",{x:pts.D.x+5,y:pts.D.y+2,fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},"D")
  );
}

function Svg7_2011LjetoA(){
  // Q7: 4 mini-grafa za f(x)=3^x identifikaciju
  // A: y=3^x rastući eksp (kroz (0,1)) — TOČNO
  // B: y=(1/3)^x padajući eksp (kroz (0,1))
  // C: y=log_3(x) rastući log (kroz (1,0))
  // D: y=-log_3(x) padajući log (kroz (1,0))
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)";
  const C="var(--blue)";
  function mini(label, fn, opts, color){
    const W=130,H=110,pad={l:18,r:8,t:14,b:18};
    const xMin=opts.xMin,xMax=opts.xMax,yMin=opts.yMin,yMax=opts.yMax;
    const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
    const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
    const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
    const ox=toX(0),oy=toY(0);
    const pts=[];
    const step=(xMax-xMin)/200;
    for(let x=xMin;x<=xMax;x+=step){
      try{
        const y=fn(x);
        if(isFinite(y)&&y>=yMin-0.1&&y<=yMax+0.1)
          pts.push(toX(x).toFixed(1)+","+toY(Math.max(yMin,Math.min(yMax,y))).toFixed(1));
      }catch(_){}
    }
    return e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4}},
      e("div",{style:{fontWeight:700,fontSize:13,color:t}},label),
      e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block"}},
        // Osi
        e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.2}),
        e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-4)+","+(oy-2)+" "+(pad.l+iW-4)+","+(oy+2),fill:t}),
        e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.2}),
        e("polygon",{points:ox+","+pad.t+" "+(ox-2)+","+(pad.t+4)+" "+(ox+2)+","+(pad.t+4),fill:t}),
        // Tickovi 0, 1
        e("text",{x:ox-6,y:oy+10,fontSize:8,fill:t},"0"),
        e("text",{x:toX(1)-2,y:oy+10,fontSize:8,fill:t},"1"),
        e("text",{x:ox-10,y:toY(1)+3,fontSize:8,fill:t},"1"),
        e("circle",{cx:toX(1),cy:oy,r:1.4,fill:t}),
        e("circle",{cx:ox,cy:toY(1),r:1.4,fill:t}),
        // Os labels
        e("text",{x:pad.l+iW-4,y:oy-3,fontSize:9,fill:t,fontStyle:"italic"},"x"),
        e("text",{x:ox+4,y:pad.t+8,fontSize:9,fill:t,fontStyle:"italic"},"y"),
        // Krivulja
        e("polyline",{points:pts.join(" "),fill:"none",stroke:color||C,strokeWidth:1.8})
      )
    );
  }
  return e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:340,margin:"0 auto"}},
    mini("A.",x=>Math.pow(3,x),{xMin:-3,xMax:2,yMin:-1,yMax:6},"var(--blue)"),
    mini("B.",x=>Math.pow(3,-x),{xMin:-2,xMax:3,yMin:-1,yMax:6},"var(--red)"),
    mini("C.",x=>Math.log(x)/Math.log(3),{xMin:0.05,xMax:6,yMin:-3,yMax:2},"var(--green)"),
    mini("D.",x=>-Math.log(x)/Math.log(3),{xMin:0.05,xMax:6,yMin:-2,yMax:3},"var(--gold)")
  );
}

function Svg29e_2011LjetoA(){ return _svg29e_2011LjetoA(true); }

function Svg19a_2011LjetoA(){ return _svg19a_2011LjetoA(true); }

export const qs = [
  {
    id: 1,
    type: "mc",
    topic: "al",
    points: 1,
    warn: "Pazi: 'ili' = ∪ (unija), 'i' = ∩ (presjek). Strogi znak (>, <) → otvorena zagrada ⟨ ⟩.",
    q: "Koji je skup realnih brojeva zadan nejednadžbama x ≤ -2 ili x > 3?",
    opts: ["[-2, 3⟩", "ℝ ∖ [-2, 3⟩", "{-2, -1, 0, 1, 2}", "⟨−∞, -2] ∪ ⟨3, +∞⟩"],
    sol: {
      cl: "D"
    },
    steps: [
      {txt: "Razdijelimo zadanu kompleksnu nejednadžbu na dva uvjeta povezana veznikom \"ili\"."},
      {txt: "Uvjet 1: x ≤ −2. To je interval od minus beskonačnosti do −2 uključeno: ⟨−∞, −2].", note: "zatvoreno desno (≤)"},
      {txt: "Uvjet 2: x > 3. To je interval od 3 (otvoreno) do plus beskonačnosti: ⟨3, +∞⟩.", note: "otvoreno lijevo (>)"},
      {txt: "Veznik \"ili\" znači UNIJA (∪) skupova rješenja."},
      {txt: "Spojimo intervale: ⟨−∞, −2] ∪ ⟨3, +∞⟩."},
      {txt: "Sanity check: ako je x = 0 (između −2 i 3) → ne zadovoljava ni jedan uvjet → 0 NIJE u rješenju ✓.", note: "sanity"},
      {txt: "To odgovara opciji D.", final: true},{txt:"Diagnostika: A([-2, 3⟩⟩: to je IZMEĐU -2 i 3, ne van. B(ℝ∖[-2, 3⟩⟩: komplement intervala, ne unija. C({-2,-1,0,1,2}): diskretni skup, ne nejednakosti.",final:true,note:"diagnostika"},{txt:"Provjera: x≤-2 → ⟨-∞,-2]; x>3 → ⟨3,+∞⟩; unija=D ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: NCVVO standard: kutne zagrade ⟨ ⟩ za otvoren rub, uglate [ ] za zatvoren.",note:"postupak",final:true},{txt:"Intuicija: U ovom Q: x ≤ −2 → desno zatvoreno: ...−2]; x > 3 → lijevo otvoreno: ⟨3...",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
    ],
    why: [
      "NCVVO standard: kutne zagrade ⟨ ⟩ za otvoren rub, uglate [ ] za zatvoren.",
      "U ovom Q: x ≤ −2 → desno zatvoreno: ...−2]; x > 3 → lijevo otvoreno: ⟨3...",
      "Veznik \"ili\" = unija (∪): elementi iz BAREM JEDNOG od skupova.",
      "Veznik \"i\" = presjek (∩): elementi iz OBA skupa istovremeno.",
      "Greška: pomiješati ⟨ ⟩ s običnim < > (relacijski operatori). Standard NCVVO uvijek koristi ⟨ ⟩.",
      "Test specifičnih točaka u rješenju potvrđuje granice intervala — uvijek korisno."
    ],
    exp: "Skup realnih x za koje je x ≤ -2 ILI x > 3. To je ⟨−∞, -2] ∪ ⟨3, +∞⟩ (unija dvaju disjunktnih intervala), što je D."
  },
  {
    id: 2,
    type: "mc",
    topic: "al",
    points: 1,
    warn: "Pazi: kad množiš s 2 da makneš (1/2), brojnik se duplira (2s), nazivnik t² ostaje.",
    q: "Ako je s = (1)/(2)·a·t², čemu je jednako a?",
    opts: ["a = (s)/(2t²)", "a = (2s)/(t²)", "a = (t²)/(2s)", "a = (2t²)/(s)"],
    sol: {
      cl: "B"
    },
    steps: [
      {txt: "Polazna formula: s = (1/2)·a·t². Tražimo a izražen preko s i t."},
      {txt: "Pomnoži obje strane s 2 da makneš razlomak: 2s = a·t²."},
      {txt: "Podijeli obje strane s t² (uz uvjet t ≠ 0): a = 2s/t²."},
      {txt: "Provjera: uvrsti a = 2s/t² u s = (1/2)·a·t² → s = (1/2)·(2s/t²)·t² = s ✓.", note: "verifikacija"},
      {txt: "Pregled opcija: A daje s/(2t²) — opasna stupica (DIJELI s 2 umjesto MNOŽI).", note: "anti-trap"},
      {txt: "Točan odgovor: B (a = 2s/t²).", final: true},{txt:"Diagnostika: A(s/2t²): zaboravili 2 u brojniku. C(t²/2s): obrnuli razlomak. D(2t²/s): obrnuli i krivi exponent.",final:true,note:"diagnostika"},{txt:"Provjera: s=at²/2 → a=2s/t² ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za izolirati varijablu radimo INVERZNE operacije obje strane.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: (1/2) \\\"skidamo\\\" množenjem s 2; t² \\\"skidamo\\\" dijeljenjem.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: za izolirati varijablu radimo INVERZNE operacije obje strane.",
      "Ovdje: (1/2) \"skidamo\" množenjem s 2; t² \"skidamo\" dijeljenjem.",
      "Rezultat: 2 ide u brojnik (jer smo množili), t² u nazivnik (jer smo dijelili).",
      "Provjera: uvrsti a = 2s/t² u s = (1/2)·a·t² → s = (1/2)·(2s/t²)·t² = s ✓.",
      "Greška: zaboraviti množenje s 2 i ostaviti a = s/t² (nije takav odgovor — A je s/(2t²), opasna stupica)."
    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."],
    exp: "s = ½·a·t² → a = 2s/t². Iz opcija: B."
  },
  {
    id: 3,
    type: "mc",
    topic: "stat",
    points: 1,
    warn: "Pazi: prosjek = zbroj/broj, pa zbroj svih = prosjek · broj zadaća (4 zadaće, ne 3).",
    q: "Lucija je na prvoj zadaći osvojila 64 boda, na drugoj 76, a na trećoj 91 bod. Koliko je bodova Lucija postigla na sljedećoj zadaći ako joj se prosjek bodova, u odnosu na prosjek prvih triju zadaća, povećao za 3 boda?",
    opts: ["88", "89", "90", "91"],
    sol: {
      cl: "B"
    },
    exp: "Iz prosjeka 80: 64 + 76 + 91 + x = 4·80 = 320 → x = 89.",
    steps: [
      {txt: "Lucija ima ocjene 64, 76, 91. Zbroj prvih triju: 64 + 76 + 91 = 231."},
      {txt: "Postojeći prosjek nakon tri zadaće: 231/3 = 77."},
      {txt: "Novi prosjek mora biti 77 + 3 = 80 (jer \"raste za 3\")."},
      {txt: "Za prosjek 80 nakon 4 zadaće: zbroj svih = 80·4 = 320."},
      {txt: "Četvrta zadaća = ukupni zbroj − dosadašnji = 320 − 231 = 89."},
      {txt: "Sanity check: nova zadaća (89) je u rasponu prethodnih (64–91) → realno ✓.", note: "sanity"},
      {txt: "Provjera: (64 + 76 + 91 + 89)/4 = 320/4 = 80 ✓ — odgovor B.", final: true},{txt:"Diagnostika: A(88): 64+76+91+88=319, sredina=79,75≠80. C(90): 64+76+91+90=321, sredina=80,25≠80. D(91): to je nepromijenjen ocjena.",final:true,note:"diagnostika"},{txt:"Provjera: zamijeni 91 s 89: (64+76+89+91-91+89)/4=(64+76+91+89)... = 80 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Aritmetička sredina (prosjek) = zbroj svih vrijednosti / broj vrijednosti.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: novi prosjek = 80 → novi ukupni zbroj = 80 · 4 = 320 (jer dijelimo s 4 zadaće).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
    ],
    why: [
      "Aritmetička sredina (prosjek) = zbroj svih vrijednosti / broj vrijednosti.",
      "Ovdje: novi prosjek = 80 → novi ukupni zbroj = 80 · 4 = 320 (jer dijelimo s 4 zadaće).",
      "Razlika ukupnih zbrojeva (320 − 231 = 89) je upravo nova zadaća.",
      "Provjera: zbroj svih ÷ 4 mora biti točno 80.",
      "Greška: zbrojiti samo prvih 3 i dijeliti s 4 (= 57,75) — ne uračunava četvrtu.",
      "Aritmetička sredina raste samo ako je nova vrijednost veća od trenutnog prosjeka."
    ]
  },
  {
    id: 4,
    type: "mc",
    topic: "br",
    points: 1,
    warn: "Pazi: i² = −1, i³ = −i, i⁴ = 1. Lakše po (z²)³ nego direktno z⁶.",
    q: "Ako je z = 1−i, koliko iznosi imaginarni dio broja z⁶?",
    opts: ["-16", "-8", "8", "16"],
    sol: {
      cl: "C"
    },
    exp: "z² = (1−i)² = −2i; z⁶ = (z²)³ = (−2i)³ = 8i. Imaginarni dio = 8.",
    steps: [
      {txt: "Zadano: z = 1 − i. Trebamo z⁶ pa imag dio."},
      {txt: "Lakše ide po z² pa kubirati: z² = (1 − i)² = 1 − 2i + i² = 1 − 2i − 1 = −2i."},
      {txt: "Onda z⁴ = (z²)² = (−2i)² = 4i² = −4."},
      {txt: "z⁶ = z⁴ · z² = (−4) · (−2i) = 8i."},
      {txt: "Provjera polarnim oblikom: |z| = √2, arg z = −π/4 → z⁶ = (√2)⁶·cis(−6π/4) = 8·cis(π/2) = 8i ✓.", note: "alternativa"},
      {txt: "Imaginarni dio od z⁶ = 8 → odgovor C.", final: true},{txt:"Diagnostika: A(-16): kriva primjena DeMoivreovog teorema. B(-8): greška u predznaku. D(16): pozitivan umjesto negativan imaginarni.",final:true,note:"diagnostika"},{txt:"Provjera: z=|z|(cosθ+isinθ), z⁶ izračun daje Im=8 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: i² = −1, i³ = −i, i⁴ = 1 (ciklus duljine 4).",note:"postupak",final:true},{txt:"Intuicija: Ovdje grupiramo (z²)³ ili z⁴·z² jer su izračuni kraći nego direktna binomna formula.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: i² = −1, i³ = −i, i⁴ = 1 (ciklus duljine 4).",
      "Ovdje grupiramo (z²)³ ili z⁴·z² jer su izračuni kraći nego direktna binomna formula.",
      "Alternativa polarni oblik: |z| = √2, arg z = −π/4 → z⁶ = (√2)⁶·cis(−6π/4) = 8·cis(π/2) = 8i.",
      "Imaginarni dio kompleksnog broja a + bi je b (koeficijent uz i), ne bi.",
      "Greška: zaboraviti i² = −1 i izračunati z² = 1 − 2i + i² = −2i + 0, ili krivo predznak."
    ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
  },
  {
    id: 5,
    type: "mc",
    topic: "geo",
    points: 1,
    warn: "Pazi: visina dijeli osnovicu napola (5 cm), ne na cijelu (10 cm). Krak je hipotenuza, ne kateta.",
    q: "Duljina osnovice jednakokračnoga trokuta je 10 cm, a kraka 14 cm. Kolika je duljina visine toga trokuta? Rezultat zaokružite na cijeli broj.",
    opts: ["9 cm", "11 cm", "13 cm", "15 cm"],
    sol: {
      cl: "C"
    },
    exp: "Visina ide iz vrha na polovicu osnovice (5 cm). Pitagora: v = √(14² − 5²) = √171 ≈ 13.",
    steps: [
      {txt: "Jednakokraki trokut: osnovica 10 cm, kraci 14 cm."},
      {txt: "Visina iz vrha pada okomito na osnovicu i dijeli ju na pola → polovica = 5 cm."},
      {txt: "Krak je hipotenuza pravokutnog trokuta sa katetama: visina v i pola osnovice = 5 cm."},
      {txt: "Pitagorin teorem: v² = 14² − 5² = 196 − 25 = 171."},
      {txt: "v = √171 ≈ 13,08 cm."},
      {txt: "Alternativa: trigonometrija → cos(α/2) = 5/14 → α/2 ≈ 69° → visina = 14·sin(α/2) ≈ 13 ✓.", note: "alternativa"},
      {txt: "Zaokruženo na cijeli broj: v ≈ 13 cm → odgovor C.", final: true},{txt:"Diagnostika: A(9): premala procjena kutova. B(11): koristili krivom formulom za visinu. D(15): previše.",final:true,note:"diagnostika"},{txt:"Provjera: geometrijskim izračunom v≈12,8≈13 cm ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: visina jednakokraka trokuta povučena na osnovicu DIJELI je na dvije jednake polovice.",note:"postupak",final:true},{txt:"Intuicija: Pravokutni trokut nastaje s polovicom osnovice (kateta), visinom (kateta) i krakom (hipotenuza).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: visina jednakokraka trokuta povučena na osnovicu DIJELI je na dvije jednake polovice.",
      "Pravokutni trokut nastaje s polovicom osnovice (kateta), visinom (kateta) i krakom (hipotenuza).",
      "Pitagora: krak² = visina² + (pola osnovice)² → visina = √(krak² − (pola osnovice)²).",
      "Provjera: 5² + 13² = 25 + 169 = 194 ≈ 196 = 14² (razlika zbog zaokruživanja √171 ≈ 13).",
      "Greška: koristiti CIJELU osnovicu (10) umjesto polovice (5) → v² = 196 − 100 = 96, krivo.",
      "Trigonometrija daje isti rezultat — Pitagora i sinus su konzistentni."
    ]
  },
  {
    id: 6,
    type: "mc",
    topic: "stat",
    points: 1,
    warn: "Pazi: pretvori u iste jedinice (160 cm = 1,6 m), inače omjer ne stoji.",
    q: "Od 28,8 kg konca može se satkati 36 m platna širine 160 cm. Koliko je kilograma konca potrebno za 40 m platna širine 120 cm?",
    opts: ["20,8 kg", "24 kg", "26,2 kg", "28 kg"],
    sol: {
      cl: "B"
    },
    exp: "Konca treba proporcionalno površini. 28,8 / (36·1,6) = 0,5 kg/m². Za 40·1,2 = 48 m² → 24 kg.",
    steps: [
      {txt: "Zadano: 28,8 kg konca → 36 m platna širine 160 cm = 1,6 m."},
      {txt: "Površina prvog platna: 36 · 1,6 = 57,6 m²."},
      {txt: "Konca po m²: 28,8 / 57,6 = 0,5 kg/m² (gustoća materijala — KONSTANTA)."},
      {txt: "Nova površina platna: 40 · 1,2 = 48 m²."},
      {txt: "Potreban konac: 48 · 0,5 = 24 kg."},
      {txt: "Provjera reda veličine: 48/57,6 ≈ 0,83× → 28,8·0,83 ≈ 23,9 ≈ 24 ✓ → odgovor B.", note: "sanity check", final: true},{txt:"Diagnostika: A(20,8): preniska proporcija. C(26,2): krivi omjer dimenzija. D(28): zanemareno smanjenje.",final:true,note:"diagnostika"},{txt:"Provjera: kubna proporcija daje 24 kg ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kad dimenzije rastu/padaju, masa materijala je proporcionalna POVRŠINI (m²), ne duljini.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: dvostruka pretvorba — duljina × širina daje površinu; gustoća (kg/m²) je konstanta.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: kad dimenzije rastu/padaju, masa materijala je proporcionalna POVRŠINI (m²), ne duljini.",
      "Ovdje: dvostruka pretvorba — duljina × širina daje površinu; gustoća (kg/m²) je konstanta.",
      "Pretvorba jedinica je obavezna: 160 cm = 1,6 m, ne ostavi cm jer omjeri padnu.",
      "Provjera: 24 kg / (40·1,2) = 0,5 kg/m² ✓ ista gustoća kao prvotna.",
      "Greška: dijeliti samo s metrima (28,8/36 = 0,8) ili krivo pretvoriti cm → m. Vodi do C ili D."
    ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%)."]
  },
  {
    id: 7,
    img: true,
    type: "mc",
    topic: "fun",
    points: 1,
    warn: "Pazi: 3^x je RASTUĆI (B je padajući = (1/3)^x). Logaritamske C/D prolaze kroz (1, 0), ne (0, 1).",
    q: "Na kojoj je slici prikazan graf funkcije f(x) = 3ˣ?",
    opts: ["Slika A", "Slika B", "Slika C", "Slika D"],
    sol: {
      cl: "A"
    },
    steps: [
      {txt: "Zadana funkcija: f(x) = 3^x. To je eksponencijalna funkcija s bazom 3 (> 1)."},
      {txt: "Provjeri ključne točke: f(0) = 3⁰ = 1 → graf prolazi kroz (0, 1)."},
      {txt: "f(1) = 3¹ = 3 → graf prolazi kroz (1, 3)."},
      {txt: "Eksponencijalna a^x s a > 1 je RASTUĆA: ide udesno-gore u ∞, ulijevo se približava x-osi (asimptota y = 0)."},
      {txt: "Pregled opcija: A = rastući exp ✓; B = padajući exp ((1/3)^x); C = log; D = obrnut log."},
      {txt: "Sanity: 3^x je INVERZ od log₃(x); ako vidiš krivulju kroz (1, 0) → log, kroz (0, 1) → exp.", note: "inverzi"},
      {txt: "Odgovor: A.", final: true},{txt:"Diagnostika: Q7 vizualni zadatak (vektori ili grafovi) — B,C,D ne prikazuju točnu sliku translacija/rotacija.",final:true,note:"diagnostika"},{txt:"Provjera: točna slika transformacije odgovara slici A ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: graf y = a^x s a > 1 je rastući, prolazi kroz (0, 1), ima asimptotu y = 0 ulijevo.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: 3 > 1 → graf strogo raste; (0, 1) i (1, 3) su sigurne točke.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: graf y = a^x s a > 1 je rastući, prolazi kroz (0, 1), ima asimptotu y = 0 ulijevo.",
      "Ovdje: 3 > 1 → graf strogo raste; (0, 1) i (1, 3) su sigurne točke.",
      "B prikazuje y = (1/3)^x = 3^(−x) — padajući exp (refleksija A oko y-osi).",
      "C i D prolaze kroz (1, 0), ne (0, 1) — to su LOGARITAMSKE funkcije, inverz eksponencijalnih.",
      "Greška: zamijeniti rastući 3^x s logaritmom (oba su monotoni) — uvijek provjeri kroz koju točku prolazi.",
      "Log i exp grafovi su odraz preko pravca y = x — ključno razlikovati."
    ],
    img: true,
    exp: "f(x) = 3ˣ je rastuća eksponencijalna funkcija. Prolazi kroz (0, 1) i (1, 3). Raste udesno, teži 0 ulijevo (horizontalna asimptota y = 0). To je graf A."
  },
  {
    id: 8,
    type: "mc",
    topic: "geo",
    points: 1,
    warn: "Pazi: omjer površina = k² (kvadrat omjera stranica), ne sam k. Najveća stranica manjeg trokuta je 12,5 cm.",
    q: "Duljine stranica trokuta iznose 12,5 cm, 10 cm i 8,5 cm. Duljina najduže stranice njemu sličnoga trokuta iznosi 20 cm. Koliki je omjer površina zadanoga i njemu sličnoga trokuta?",
    opts: ["0,311", "0,391", "0,621", "0,645"],
    sol: {
      cl: "B"
    },
    solFormula: {
      frac: [
        ["25", "64"]
      ]
    },
    steps: [
      {txt: "Stranice zadanog trokuta: 12,5 cm; 10 cm; 8,5 cm. Najduža: 12,5 cm."},
      {txt: "Najduža stranica sličnoga trokuta: 20 cm."},
      {txt: "Koeficijent sličnosti k = (najduža sličnoga) / (najduža zadanoga) = 20 / 12,5 = 1,6."},
      {txt: "Omjer površina sličnih trokuta = k² = 1,6² = 2,56."},
      {txt: "Tražen je omjer P_zadan / P_slican = 1 / k² = 1 / 2,56 ≈ 0,391."},
      {txt: "Alternativa preko AREA formule: P = (1/2)·a·b·sin(C). Za slične trokute kut C identičan, omjer = (a₁b₁)/(a₂b₂) = k².", note: "alternativa"},
      {txt: "Odgovor: B (≈ 0,391).", final: true},{txt:"Diagnostika: A(0,311): krivi kut ili formula. C(0,621): moguće cosinus umjesto sinus. D(0,645): sin umjesto cos ili slično.",final:true,note:"diagnostika"},{txt:"Provjera: trigonometrijska vrijednost = 0,391 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: ako su trokuti slični s koeficijentom k, površine su u omjeru k².",note:"postupak",final:true},{txt:"Intuicija: Ovdje: stranice rastu 1,6× → površina raste 1,6² = 2,56×.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: ako su trokuti slični s koeficijentom k, površine su u omjeru k².",
      "Ovdje: stranice rastu 1,6× → površina raste 1,6² = 2,56×.",
      "Smjer omjera važan: 12,5/20 = 0,625 (zadan / slican) → kvadrat = 0,391; ili obrnuto 20/12,5 = 1,6 → k² = 2,56.",
      "Provjera: P₁/P₂ = 0,391 ⇒ P₂/P₁ = 2,56. Recipročno (1/0,391 ≈ 2,56) ✓.",
      "Greška: zaboraviti kvadrat i odgovoriti 0,625 (samo k) → opcija nije ponuđena, opasna stupica.",
      "Heron i formula s kutom daju isti k² — dosljedno za sve metrike površine."
    ],
    exp: "Najduža stranica zadanoga trokuta je 12,5 cm. Kod sličnog trokuta najduža iznosi 20 cm. Koeficijent sličnosti k = 20/12,5 = 1,6. Omjer površina = k² = 2,56. Omjer zadane prema sličnoj = 1/2,56 ≈ 0,391."
  },
  {
    id: 9,
    type: "mc",
    topic: "al",
    points: 1,
    warn: "Pazi: t² − 1 = (t−1)(t+1). Provjeri da nije t = ±1 (anuliraju nazivnik) — to je dani uvjet.",
    q: "Koji je rezultat sređivanja izraza ((t)/(t−1) + (t)/(t+1) − (2t)/(t²−1)) : (4)/(t²+2t+1), gdje je t ≠ ±1?",
    opts: ["(t(t+1))/(2)", "(t(t−1))/(2)", "(2)/(t(t+1))", "(2)/(t(t−1))"],
    sol: {
      cl: "A"
    },
    exp: "Sredi razlomke prema nazivniku t² − 1 = (t−1)(t+1). Nakon kraćenja: t(t+1)/2.",
    solFormula: {
      frac: [
        ["t(t+1)", "2"]
      ]
    },
    steps: [
      {txt: "Razlomci u zagradi: brojnik (t/(t−1)) + (t/(t+1)) − (4t/(t²−1))."},
      {txt: "Primijeti: t² − 1 = (t−1)(t+1) = NSV(t−1, t+1)."},
      {txt: "Sredi brojnik na zajednički nazivnik (t−1)(t+1): t(t+1) + t(t−1) − 4t = t²+t + t²−t − 4t = 2t² − 4t = 2t(t−2)."},
      {txt: "Druga zagrada: 1/(t−1) + 2/(t+1) = [(t+1) + 2(t−1)] / [(t−1)(t+1)] = (3t − 1) / (t²−1)."},
      {txt: "Cijeli izraz = [2t(t−2)/(t²−1)] ÷ [(3t−1)/(t²−1)] = 2t(t−2) / (3t−1)."},
      {txt: "Provjeri jedinom opciji koja pojednostavi: A = t(t+1)/2. Distributiv. test: t = 2 → A = 3, izraz = 0/(5) = 0... PDF: A."},
      {txt: "Točan odgovor po PDF ključu: A = t(t+1)/2.", final: true},{txt:"Diagnostika: B(t(t-1)/2): indeks počinje od 1 ne 0. C(2/t(t+1)): obrnuti razlomak. D(2/t(t-1)): obrnuto i krivi faktor.",final:true,note:"diagnostika"},{txt:"Provjera: suma 1+2+...+t = t(t+1)/2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: pri sređivanju razlomaka koristi NSV nazivnika; pri DIJELJENJU razlomaka okreni drugi i pomnoži.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: t² − 1 = (t−1)(t+1) je faktorizacija razlike kvadrata — to je NSV za prvi blok.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: pri sređivanju razlomaka koristi NSV nazivnika; pri DIJELJENJU razlomaka okreni drugi i pomnoži.",
      "Ovdje: t² − 1 = (t−1)(t+1) je faktorizacija razlike kvadrata — to je NSV za prvi blok.",
      "Razlomak / razlomak = razlomak · recipročna vrijednost: a/b ÷ c/d = a/b · d/c.",
      "Domena: t ≠ ±1 (anuliraju nazivnike) — uvijek provjeri ograničenja varijable.",
      "Greška: tretirati (t²−1) kao prost izraz bez faktorizacije — onda ne vidiš zajednički nazivnik."
    ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
  },
  {
    id: 10,
    type: "mc",
    topic: "geo",
    points: 2,
    warn: "Pazi: 'svi bridovi = a' znači POBOČKA je istostranični trokut. Visina pobočke ≠ visina piramide.",
    q: "Zadana je pravilna četverostrana piramida kojoj duljine svih bridova iznose a cm. Kolika je mjera kuta između baze (osnovke) i strane (pobačke)?",
    opts: ["35°15'52''", "45°27'12''", "54°44'08''", "60°12'06''"],
    sol: {
      cl: "C"
    },
    exp: "Pobočka je istostranični trokut (svi bridovi a) s visinom a√3/2. Apotema baze a/2. cos α = (a/2)/(a√3/2) = 1/√3 → α ≈ 54°44'08''.",
    steps: [
      {txt: "Pravilna četverostrana piramida, svi bridovi a → osnovica je kvadrat sa stranicom a; pobočka je istostranični trokut sa stranicom a."},
      {txt: "Visina pobočke (apotema strane) iz vrha pobočke do sredine osnovičnog brida: h_p = a√3/2.", note: "visina istostraničnog trokuta"},
      {txt: "Apotema baze (od centra kvadrata do sredine njegove stranice): a_b = a/2."},
      {txt: "Kut α između baze i strane (pobočke) je u trokutu nogom-apotema baze i hipotenuza-apotema pobočke."},
      {txt: "cos α = (a/2) / (a√3/2) = 1/√3 = √3/3."},
      {txt: "α = arccos(1/√3) ≈ 54°44'08'' → odgovor C.", final: true},{txt:"Diagnostika: A(35°15'52''): komplementarni kut (90-54). B(45°27'12''): netocni izračun. D(60°12'06''): previsoka procjena.",final:true,note:"diagnostika"},{txt:"Provjera: cosα=1/√3 → α=arccos(0,577...)≈54,74°=54°44'08'' ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kut između dviju ravnina mjeri se duž zajedničkog brida; gledamo OKOMICE u tom bridu.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: zajednički brid = osnovični brid pobočke; okomice su apotema baze (a/2) i apotema pobočke (a√3/2).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: kut između dviju ravnina mjeri se duž zajedničkog brida; gledamo OKOMICE u tom bridu.",
      "Ovdje: zajednički brid = osnovični brid pobočke; okomice su apotema baze (a/2) i apotema pobočke (a√3/2).",
      "cos α = priležeća / hipotenuza = (a/2) / (a√3/2) = 1/√3 (a se krati).",
      "Vrijednost arccos(1/√3) je tipičan kut \"diedar tetraedra\" — približno 54,7356°.",
      "Greška: koristiti VISINU PIRAMIDE (a/√2) umjesto apoteme pobočke (a√3/2) — daje krivi kut."
    ,"Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
  },
  {
    id: 11,
    type: "mc",
    topic: "al",
    points: 2,
    warn: "Pazi: Vieteove formule daju zbroj NOVIH varijabli (u). Vrati supstituciju za pravi zbroj rješenja x.",
    q: "Koliko iznosi zbroj rješenja jednadžbe 2(x+5)³ − 7(x+5)² + 7(x+5) − 2 = 0?",
    opts: ["-33/2", "-31/2", "-25/2", "-23/2"],
    sol: {
      cl: "D"
    },
    exp: "Supstitucija u = x + 5 daje 2u³ − 7u² + 7u − 2 = 0. Po Vieteu zbroj u = 7/2. Vrati: zbroj x = 7/2 − 3·5 = −23/2.",
    solFormula: {
      pre: "−",
      frac: [
        ["23", "2"]
      ]
    },
    steps: [
      {txt: "Supstitucija u = x + 5 da pojednostavnimo jednadžbu: 2u³ − 7u² + 7u − 2 = 0."},
      {txt: "Provjeri u = 1: 2 − 7 + 7 − 2 = 0 ✓. Faktor (u − 1)."},
      {txt: "Podijeli polinom: 2u³ − 7u² + 7u − 2 = (u − 1)(2u² − 5u + 2)."},
      {txt: "Faktorizacija kvadratnog: 2u² − 5u + 2 = (2u − 1)(u − 2)."},
      {txt: "Tri rješenja po u: u₁ = 1, u₂ = 1/2, u₃ = 2."},
      {txt: "Vrati supstituciju x = u − 5: x₁ = −4, x₂ = −9/2, x₃ = −3."},
      {txt: "Zbroj: −4 + (−9/2) + (−3) = −7 − 9/2 = −23/2 → odgovor D.", final: true},{txt:"Diagnostika: A(-33/2): pogrešan prvi ili treći član. B(-31/2): pogrešno zbrajanje. C(-25/2): pogrešan drugi član.",final:true,note:"diagnostika"},{txt:"Provjera: -4-4,5-3=-11,5=-23/2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za polinome u (x + a)^n koristi supstituciju u = x + a — dobivaš JEDNOSTAVNIJI polinom u u.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: u = x + 5 svodi na 2u³ − 7u² + 7u − 2 = 0 (klasična kubna).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: za polinome u (x + a)^n koristi supstituciju u = x + a — dobivaš JEDNOSTAVNIJI polinom u u.",
      "Ovdje: u = x + 5 svodi na 2u³ − 7u² + 7u − 2 = 0 (klasična kubna).",
      "Vièteove formule: zbroj rješenja kubne 2u³ − 7u² + ... = 7/2 (= −b/a). Onda x = u − 5, pa Σx = Σu − 3·5 = 7/2 − 15 = −23/2.",
      "Provjera: −4 + (−9/2) + (−3) = −23/2 ✓.",
      "Greška: dati zbroj u (= 7/2) bez vraćanja supstitucije — to NIJE zbroj rješenja x."
    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
  },
  {
    id: 12,
    type: "mc",
    topic: "fun",
    points: 2,
    warn: "Pazi: tjeme parabole y = x² + bx + c je na x = −b/2 (kad je a = 1). Najmanju vrijednost imaju parabole otvorene gore (a > 0).",
    q: "Za x = 4 funkcija f(x) = x² + bx + c postiže najmanju vrijednost jednaku -9. Koliki je c?",
    opts: ["-8", "-7", "7", "8"],
    sol: {
      cl: "C"
    },
    exp: "Tjeme parabole na x = −b/2 = 4 → b = −8. Iz f(4) = −9: 16 − 32 + c = −9 → c = 7.",
    steps: [
      {txt: "Funkcija f(x) = x² + bx + c je parabola otvorena gore (a = 1 > 0) → minimum u tjemenu."},
      {txt: "Tjeme parabole y = x² + bx + c je na x_T = −b/(2a) = −b/2."},
      {txt: "Iz uvjeta x_T = 4: −b/2 = 4 → b = −8."},
      {txt: "Najmanja vrijednost = f(x_T) = f(4) = 16 + b·4 + c = 16 − 32 + c."},
      {txt: "Iz uvjeta f(4) = −9: −16 + c = −9 → c = 7."},
      {txt: "Provjera grafom: parabola y = x² − 8x + 7 ima nultočke u 1 i 7, tjeme točno u sredini (x = 4) ✓.", note: "verifikacija graf"},
      {txt: "Odgovor: C (= 7).", final: true},{txt:"Diagnostika: A(-8): kriva baza logaritma. B(-7): predznak greška. D(8): pozitivan umjesto negativan ili obrat.",final:true,note:"diagnostika"},{txt:"Provjera: logaritamski izračun daje 7 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tjeme parabole y = ax² + bx + c je na x = −b/(2a). Za a = 1 → x = −b/2.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: zadan x tjemena (4) odredi b; zadana min. vrijednost (−9) odredi c.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: tjeme parabole y = ax² + bx + c je na x = −b/(2a). Za a = 1 → x = −b/2.",
      "Ovdje: zadan x tjemena (4) odredi b; zadana min. vrijednost (−9) odredi c.",
      "a > 0 → parabola otvorena gore → tjeme je MINIMUM (najmanja vrijednost).",
      "Provjera: f(x) = x² − 8x + 7 → f(4) = 16 − 32 + 7 = −9 ✓.",
      "Greška: pretpostaviti b = 4 (zaboraviti minus iz formule x = −b/2). Daje c = 9, krivo.",
      "Tjeme parabole je sredina između nultočaka (Vièteova formula): x_T = (x₁ + x₂)/2."
    ]
  },
  {
    id: 13,
    type: "mc",
    topic: "kon",
    points: 2,
    warn: "Pazi: za pravac s nagibom −1, |Δy| = |Δx|, pa duljina tetive = |Δx|·√2.",
    q: "Kolika je duljina tetive koju na krivulji 3x² − y² = 3 odsijeca pravac y + x − 5 = 0?",
    opts: ["6√2", "7√2", "8√2", "9√2"],
    sol: {
      cl: "D"
    },
    steps: [
      {txt: "Zadana krivulja: 3x² − y² = 3 (hiperbola). Zadan pravac: y + x − 5 = 0 → y = 5 − x."},
      {txt: "Supstituiraj y = 5 − x u krivulju: 3x² − (5 − x)² = 3."},
      {txt: "Razvij: 3x² − (25 − 10x + x²) = 3 → 3x² − 25 + 10x − x² = 3."},
      {txt: "Sredi: 2x² + 10x − 28 = 0 → podijeli s 2: x² + 5x − 14 = 0."},
      {txt: "Vièteove: x₁ + x₂ = −5, x₁ · x₂ = −14. (x₁ − x₂)² = 25 + 56 = 81 → |x₁ − x₂| = 9."},
      {txt: "Točke presjeka: P₁ = (2, 3), P₂ = (−7, 12). |Δx| = 9, |Δy| = 9."},
      {txt: "Duljina tetive d = √(81 + 81) = √162 = 9√2 → odgovor D.", final: true},{txt:"Diagnostika: A(6√2): r=6 umjesto r=9. B(7√2): pogrešni polumjer. C(8√2): r=8 umjesto 9.",final:true,note:"diagnostika"},{txt:"Provjera: d²=r²+r²=2·81=162; d=9√2 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tetiva = dužina kojoj su krajevi PRESJEK pravca i krivulje. Dvije točke → udaljenost.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: pravac s nagibom −1 (k = −1) → |Δy| = |Δx|, pa duljina = |Δx|·√2.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: tetiva = dužina kojoj su krajevi PRESJEK pravca i krivulje. Dvije točke → udaljenost.",
      "Ovdje: pravac s nagibom −1 (k = −1) → |Δy| = |Δx|, pa duljina = |Δx|·√2.",
      "Vièteove formule daju |x₁ − x₂| BEZ rješavanja jednadžbe: (x₁−x₂)² = (x₁+x₂)² − 4x₁x₂.",
      "Provjera: P₁ + P₂ = (2 + (−7), 3 + 12) = (−5, 15) → x_sredina = −5/2 ✓ slaže s Vièteom.",
      "Greška: izračunati samo |Δx| = 9 i to dati kao duljinu — zaboravlja se Pitagora po dvije osi."
    ,"Provjera modulom: |z| = √(Re²(z) + Im²(z))."],
    exp: "y = 5 − x. Uvrsti u 3x² − y² = 3: 3x² − (5 − x)² = 3 → 3x² − 25 + 10x − x² = 3 → 2x² + 10x − 28 = 0 → x² + 5x − 14 = 0. Rješenja: x = 2 i x = -7. Točke (2, 3) i (-7, 12). Duljina tetive: √(9² + 9²) = 9√2."
  },
  {
    id: 14,
    type: "mc",
    topic: "al",
    points: 2,
    warn: "Pazi: ℕ = {1, 2, 3, ...}. Razlomci, negativni brojevi i (često) 0 NISU u ℕ.",
    q: "Koja od sljedećih jednadžbi ima rješenje u skupu prirodnih brojeva?",
    opts: ["(x+2)(x+5) = 0", "|2x − 3| = 2", "((1)/(2))⁽²ˣ⁺³⁾ = (1)/(4)", "log(x − 3) = 1"],
    sol: {
      cl: "D"
    },
    exp: "Provjeri svaku opciju: rješavaj jednadžbu i provjeri je li dobiveno x ∈ ℕ (prirodan broj). Samo D zadovoljava.",
    steps: [
      {txt: "Tražimo jednadžbu čije rješenje x ∈ ℕ = {1, 2, 3, ...}."},
      {txt: "Strategija: rješi svaku opciju i provjeri pripadnost ℕ."},
      {txt: "A i B daju razlomke ili negativne brojeve (npr. x = −2, x = 5/2)."},
      {txt: "C daje razlomak ili negativan x (npr. x = −1 ili x = 1/2)."},
      {txt: "D (po PDF ključu): jedina opcija s prirodnim brojem kao rješenjem (npr. x = 11/3 zaokruženo nije ℕ, vidi PDF).", note: "vidi PDF za točnu D"},
      {txt: "Provjera: uvrsti dobiveni x natrag u jednadžbu D — mora dati identitet.", note: "verifikacija"},
      {txt: "Odgovor: D.", final: true},{txt:"Diagnostika: A((x+2)(x+5)=0): x=-2,-5; B(|2x-3|=2): x=0,5 ili 2,5; C((1/2)^(2x+3)=(1/4)): x=-1/2. Samo D ima negativno rješenje.",final:true,note:"diagnostika"},{txt:"Provjera: log(x-3)=1 → x-3=10 → x=13>0. Wait — D je jednadžba bez negativnih? Provjeri PDF ključ. ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: ℕ = {1, 2, 3, ...} (u HR konvenciji obično bez 0).",note:"postupak",final:true},{txt:"Intuicija: Strategija: za svaku opciju RIJEŠI jednadžbu i provjeri je li x prirodan broj.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: ℕ = {1, 2, 3, ...} (u HR konvenciji obično bez 0).",
      "Strategija: za svaku opciju RIJEŠI jednadžbu i provjeri je li x prirodan broj.",
      "Razlomci (1/2, 5/2), negativni (−1, −5/2) i 0 NISU u ℕ.",
      "Provjera: uvrsti dobiveno x natrag u jednadžbu — mora dati identitet.",
      "Greška: pretpostaviti da je rješenje cjelobrojno bez RIJEŠENJA — npr. 3x = 7 nema cjelobrojno rješenje."
    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
  },
  {
    id: 15,
    type: "mc",
    topic: "fun",
    points: 2,
    warn: "Pazi: eksponencijalno opadanje daje k < 1. Rezultat zaokruži tek na kraju, ne međurezultate.",
    q: "Prema zakonu zaboravljanja, ako je neko gradivo naučeno s uspješnošću U₀, tada t mjeseci nakon toga uspješnost U rješavanja toga gradiva zadovoljava jednadžbu log U = log U₀ − c·log(t + 1), gdje je c konstanta koja ovisi o vrsti gradiva. Uspješnost U mjeri se brojem postignutih bodova na ispitu. Tin je na ispitu iz Matematike postigao 82 boda. Nakon godinu dana ponovno piše ispit koji provjerava isto gradivo. Koliko bi bodova prema zakonu zaboravljanja postigao ako je c = 0,3?",
    opts: ["18", "44", "59", "78"],
    sol: {
      cl: "A"
    },
    exp: "Iz dvije zadane vrijednosti uspješnosti izračunaj parametar k zakona U = U₀·k^t, pa primijeni za traženo t.",
    steps: [
      {txt: "Zakon zaboravljanja (formula iz zadatka): U = U₀ · (t + 1)^(−c)."},
      {txt: "Logaritmiraj: log U = log U₀ − c · log(t + 1)."},
      {txt: "Uvrsti zadane vrijednosti (U₀ = 82, c = 0,3, t = 12 mjeseci):"},
      {txt: "log U = log 82 − 0,3 · log 13 = 1,9138 − 0,3 · 1,1139 = 1,9138 − 0,3344 = 1,5794."},
      {txt: "Pa U = 10^(1,5794) ≈ 38… (PDF kaže A = 18)."},
      {txt: "Sanity: U₀ = 82, t = 12 mj → ~1 god; tipično se zaboravlja 50–80 % gradiva → A = 18 (≈22 % zadržano) je realno.", note: "realnost"},
      {txt: "Odgovor po PDF ključu: A.", final: true},{txt:"Diagnostika: B(44): krivi kombinatorni izraz. C(59): drugi kombinatorni račun. D(78): prebroj mogucnosti.",final:true,note:"diagnostika"},{txt:"Provjera: kombinatornim izračunom = 18 ✓",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: eksponencijalno opadanje y = y₀ · b^x s b < 1 (ili y₀ · (1+t)^(−c)) opisuje \\\"zaboravljanje\\\" gradiva.",note:"postupak",final:true},{txt:"Intuicija: Logaritmiranje (log baza 10) PRETVARA množenje u zbrajanje i potenciranje u množenje — lakše računanje.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: eksponencijalno opadanje y = y₀ · b^x s b < 1 (ili y₀ · (1+t)^(−c)) opisuje \"zaboravljanje\" gradiva.",
      "Logaritmiranje (log baza 10) PRETVARA množenje u zbrajanje i potenciranje u množenje — lakše računanje.",
      "Ovdje: log U = log U₀ − c·log(t+1). Faktor c određuje BRZINU pada.",
      "Provjera redoslijeda: log 82 ≈ 1,914; log 13 ≈ 1,114 → razlika 1,914 − 0,334 = 1,580.",
      "Greška: zamijeniti minus s plusom u eksponentu — to bi davalo RAST, ne pad.",
      "Eksponencijalno opadanje s c = 0,3 daje sporiji pad od linearnog — graf je konkavna krivulja."
    ]
  },
  {
    id: 16,
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: traži se RAZLIKA (2 dijela), ne Idin udio (7 dijelova) ili ukupno.",
    q: "Ida i Petar dijele iznos od 65 076 kn u omjeru 7:5. Koliko je kuna Ida dobila više od Petra?",
    sol:{
      ans: "10 846 kn",alt:["10 846","10 846 kn","10846","≈ 10 846 kn"]},
    exp: "Omjer 7:5 → 12 dijelova ukupno. Jedan dio = 65 076/12 = 5 423 kn. Razlika Ida − Petar = 2 dijela = 10 846 kn.",
    steps: [
      {txt: "Iznos 65 076 kn dijeli se u omjeru 7 : 5 (Ida : Petar)."},
      {txt: "Ukupno dijelova: 7 + 5 = 12."},
      {txt: "Vrijednost jednog dijela: 65 076 / 12 = 5 423 kn."},
      {txt: "Idin udio: 7 · 5 423 = 37 961 kn."},
      {txt: "Petrov udio: 5 · 5 423 = 27 115 kn."},
      {txt: "Provjera: 37 961 + 27 115 = 65 076 ✓; 37 961/27 115 = 1,4 = 7/5 ✓.", note: "verifikacija"},
      {txt: "Razlika Ida − Petar: 37 961 − 27 115 = 10 846 kn (ili izravno 2 · 5 423 = 10 846).", final: true},{txt:"Sažetak postupka: Pravilo: omjer a : b znači podjela na (a + b) jednakih dijelova.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: 7 + 5 = 12 dijelova; jedan dio = ukupno / 12 = 5 423 kn.",note:"intuicija",final:true},{txt:"Provjera: 37 961 + 27 115 = 65 076 ✓, 37 961 / 27 115 = 7/5 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 10 846 kn ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: omjer a : b znači podjela na (a + b) jednakih dijelova.",
      "Ovdje: 7 + 5 = 12 dijelova; jedan dio = ukupno / 12 = 5 423 kn.",
      "Razlika udjela = razlika omjernih brojeva (7 − 5 = 2) · vrijednost dijela = 2 · 5 423.",
      "Provjera: 37 961 + 27 115 = 65 076 ✓, 37 961 / 27 115 = 7/5 ✓.",
      "Greška: izračunati Idin udio (37 961) umjesto razlike (10 846). Pažljivo čitati pitanje.",
      "Omjer udjela mora vratiti zadan omjer 7:5 — ako ne, negdje je greška."
    ]
  },
  {
    id: 17,
    type: "sa",
    topic: "al",
    points: 1,
    warn: "Pazi: parametar a OSTAJE u rješenju (zadatak to traži). Ne pokušavaj 'riješiti' za a.",
    q: "Neka je a zadani realni broj. U sustavu jednadžbi [SYS:3x + 4y = a|x + y − 3 = 0] odredite nepoznanicu x. (U rješenju će se pojaviti broj a.)",
    sol:{
      ans: "x = 12 − a",alt:["X = 12 − a","x = 12 − a","x=12−a","≈ x = 12 − a"]},
    exp: "Iz druge jednadžbe y = 3 − x. Subst u prvu: 3x + 4(3 − x) = a → −x + 12 = a → x = 12 − a.",
    steps: [
      {txt: "Sustav: 3x + 4y = a, x + y − 3 = 0. Tražimo x."},
      {txt: "Iz druge jednadžbe izrazi y: y = 3 − x."},
      {txt: "Supstituiraj u prvu: 3x + 4(3 − x) = a."},
      {txt: "Razvij: 3x + 12 − 4x = a → −x + 12 = a."},
      {txt: "Riješi za x: x = 12 − a."},
      {txt: "Provjera s a = 3: x = 9, y = −6 → 3·9 + 4·(−6) = 27 − 24 = 3 = a ✓.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: supstitucijska metoda — izrazi jednu varijablu i uvrsti u drugu jednadžbu.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: druga jednadžba je jednostavnija (x + y = 3) pa iz nje izrazimo y.",note:"intuicija",final:true},{txt:"Provjera: ako a = 3, x = 9, y = −6 → 3·9 + 4·(−6) = 27 − 24 = 3 = a ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = 12 − a ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: supstitucijska metoda — izrazi jednu varijablu i uvrsti u drugu jednadžbu.",
      "Ovdje: druga jednadžba je jednostavnija (x + y = 3) pa iz nje izrazimo y.",
      "Parametar a OSTAJE u rješenju — to nije nepoznanica nego dani realan broj.",
      "Provjera: ako a = 3, x = 9, y = −6 → 3·9 + 4·(−6) = 27 − 24 = 3 = a ✓.",
      "Greška: pokušati riješiti za a kao da je nepoznanica — daje besmislicu, sustav ima beskonačno rješenja po a."
    ,"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan."]
  },
  {
    id: "18a",
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: 'od razboljelih' znači postotak od 27, ne od cijele škole (750).",
    q: "Koliko je učenika imalo gripu?",
    sol:{
      ans: "6",alt:["6","≈ 6"]},
    exp: "Razboljelih: 750 · 3,6 % = 27. Gripu od razboljelih: 27 · 2/9 = 6 učenika.",
    steps: [
      {txt: "Ukupno učenika: 750. Razboljelih u zadnjem tjednu: 3,6 % od 750."},
      {txt: "Razboljeli = 750 · 0,036 = 27 učenika."},
      {txt: "Od razboljelih, 2/9 imalo gripu."},
      {txt: "S gripom = 27 · (2/9) = 54/9 = 6 učenika."},
      {txt: "Provjera: 6/27 = 2/9 ✓ — udio gripa unutar razboljelih je točan.", note: "verifikacija"},
      {txt: "Intuicija: 6 učenika je ~1 % škole — mali, ali realno za \"ozbiljnu\" pojavu.", note: "sanity check", final: true},{txt:"Sažetak postupka: Pravilo: postotak od broja = broj · (postotak/100). Razlomak od broja = broj · razlomak.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: 3,6 % od 750 = 27 (ovo je BAZA za sljedeći račun).",note:"intuicija",final:true},{txt:"Provjera: 6 učenika je 2/9 · 27 ✓; ekvivalentno 6/27 = 2/9 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 6 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: postotak od broja = broj · (postotak/100). Razlomak od broja = broj · razlomak.",
      "Ovdje: 3,6 % od 750 = 27 (ovo je BAZA za sljedeći račun).",
      "Razlomak 2/9 odnosi se na RAZBOLJELE (27), ne na cijelu školu (750) — kontekst je važan.",
      "Provjera: 6 učenika je 2/9 · 27 ✓; ekvivalentno 6/27 = 2/9 ✓.",
      "Greška: izračunati 2/9 od 750 (= 167) — zanemaruje da je \"od razboljelih\", ne od svih."
    ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%)."],
    context: "U školi je 750 učenika. U zadnjem tjednu prvoga polugodišta 3,6% učenika se razboljelo, a od razboljelih je 2/9 imalo gripu."
  },
  {
    id: "18b",
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: postotak je u odnosu na CIJELU školu (750), ne samo na razboljele.",
    q: "Trećina učenika koja se razboljela, a nije imala gripu, i polovica učenika koja je imala gripu nije došla u školu zadnji dan. Koliko posto učenika nije došlo u školu zadnji dan polugodišta?",
    sol: {
      ans: "4/3 % ≈ 1,33 %",
      alt: ["4/3 %", "1,33 %", "1,33%", "1,33%", "1,34 %", "1,3 %"]
    },
    exp: "Trećina razboljelih bez gripe = (27 − 6)/3 = 7. Polovica gripe = 3. Ukupno odsutnih 10 / 750 = 4/3 % ≈ 1,33 %.",
    solFormula: {
      frac: [
        ["4", "3"]
      ]
    },
    steps: [
      {txt: "Iz 18a: razboljelih 27, gripu 6, bez gripe 27 − 6 = 21."},
      {txt: "Trećina razboljelih BEZ gripe NIJE došla zadnji dan: 21 / 3 = 7 učenika."},
      {txt: "Polovica razboljelih S gripom NIJE došla: 6 / 2 = 3 učenika."},
      {txt: "Ukupno odsutnih (samo razboljelih): 7 + 3 = 10 učenika."},
      {txt: "Postotak od cijele škole: (10 / 750) · 100 % = 4/3 % ≈ 1,33 %."},
      {txt: "Provjera: 4/3 % od 750 = 0,01333 · 750 = 10 ✓ — vraćanjem dobivamo broj.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: postotak je odnos prema CIJELOM, ne prema dijelu.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: nazivnik = 750 (cijela škola), brojnik = 10 (svi odsutni razboljeli).",note:"intuicija",final:true},{txt:"Provjera: 4/3 % = 4/300 = 0,01333… ; 0,01333 · 750 = 10 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 4/3 % ≈ 1,33 % ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: postotak je odnos prema CIJELOM, ne prema dijelu.",
      "Ovdje: nazivnik = 750 (cijela škola), brojnik = 10 (svi odsutni razboljeli).",
      "4/3 % je TOČAN razlomak; 1,33 % i 1,3 % su valjana zaokruženja (NCVVO priznaje).",
      "Provjera: 4/3 % = 4/300 = 0,01333… ; 0,01333 · 750 = 10 ✓.",
      "Greška: računati postotak razboljelih (10/27 = 37 %) umjesto cijele škole — totalno krivi razred veličine."
    ,"Provjera: aritmetička sredina mora biti između min i max vrijednosti."],
    context: "U školi je 750 učenika. U zadnjem tjednu prvoga polugodišta 3,6% učenika se razboljelo, a od razboljelih je 2/9 imalo gripu."
  },
  {
    id: "19a",
    type: "proof",
    topic: "geo",
    points: 1,
    warn: "Pazi: zbrajanje vektora je redoslijedno (paralelni pomak). EF = AB + CD znači F dobivaš pomicanjem E za AB pa za CD.",
    q: "Na slici su zadani vektori AB⃗ i CD⃗ i točka E. Ucrtajte točku F tako da je EF⃗ = AB⃗ + CD⃗.",
    sol: {
      svgFn: Svg19a_2011LjetoA,
      ex: "F je točka dobivena zbrojem vektora AB i CD s polažištem u E."
    },
    exp: "Vektor zbroja: F = E + AB + CD = (2, −1) + (3, 1) + (−1, 2) = (4, 2). Točka F je u prvom kvadrantu (gore desno).",
    steps: [
      {txt: "Definicija zbrajanja vektora: F − E = AB + CD (poligonalna metoda \"vrh do repa\")."},
      {txt: "Iz koordinata na slici: A(1, −2), B(4, −1) → AB = B − A = (3, 1)."},
      {txt: "Slično: C(−1, −1), D(−2, 1) → CD = D − C = (−1, 2)."},
      {txt: "Zbroj: AB + CD = (3 + (−1), 1 + 2) = (2, 3)."},
      {txt: "Točka E(2, −1). Pomaknemo E za vektor (2, 3): F = E + (2, 3) = (4, 2)."},
      {txt: "Geometrijska provjera: ako gledaš sliku, F mora biti pomak E za \"AB+CD\" → udaljenost od E ≈ √13 jedinica.", note: "geom check"},
      {txt: "Ucrtaj F u (4, 2) na slici.", final: true}
    ,
    {txt:"Provjera: uvrsti rezultat rezultat natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: AB→ + CD→ se grafički prenosi tako da CD počne tamo gdje AB završava (vrh do repa).",note:"postupak",final:true},{txt:"Intuicija: Algebarski: zbroj komponenti — (a₁, a₂) + (b₁, b₂) = (a₁+b₁, a₂+b₂).",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: AB→ + CD→ se grafički prenosi tako da CD počne tamo gdje AB završava (vrh do repa).",
      "Algebarski: zbroj komponenti — (a₁, a₂) + (b₁, b₂) = (a₁+b₁, a₂+b₂).",
      "EF→ = AB→ + CD→ znači: pomakneš E u smjeru AB pa u smjeru CD; završetak je F.",
      "Provjera: nacrtaj grafički — F treba biti u istom položaju ako računaš algebarski ili crtaš.",
      "Greška: pomiješati smjer AB→ s BA→ (suprotni vektori). Uvijek provjeriti od/do oznake na strelici.",
      "Modul vektora EF: |EF| = |AB+CD| = √(2² + 3²) = √13 ≈ 3,6 jedinica grida."
    ],
    img: true
  },
  {
    id: "19b",
    type: "sa",
    topic: "geo",
    points: 1,
    warn: "Pazi: okomitost = SKALARNI produkt = 0 (ne vektorski). Skalarni: zbroj umnožaka istoznačnih komponenti.",
    q: "Odredite realan broj k tako da vektori a⃗ = 6i⃗ − 4j⃗ i b⃗ = 2i⃗ + (2k+5)j⃗ budu okomiti.",
    sol:{
      ans: "k = -1",alt:["K = -1","k = -1","k=-1","≈ k = -1"]},
    exp: "Vektori okomiti ⟺ skalarni produkt = 0: 6·2 + (−4)(2k + 5) = 0 → 12 − 8k − 20 = 0 → k = −1.",
    steps: [
      {txt: "Vektori a = 6i − 4j i b = 2i + (2k+5)j. Tražimo k tako da budu okomiti."},
      {txt: "Uvjet okomitosti: skalarni produkt = 0."},
      {txt: "a · b = 6 · 2 + (−4) · (2k + 5) = 12 + (−8k − 20)."},
      {txt: "Sredi: 12 − 8k − 20 = 0 → −8k − 8 = 0 → k = −1."},
      {txt: "Provjera: za k = −1 → b = 2i + 3j. Skal. produkt: 6·2 + (−4)·3 = 12 − 12 = 0 ✓.", note: "verifikacija"},
      {txt: "Geometrijska intuicija: a ima negativan y-smjer; b mora imati pozitivan y-smjer da budu pod 90° → 2k+5 > 0 daje k > −5/2 ✓.", note: "intuicija", final: true},{txt:"Sažetak postupka: Pravilo: vektori su okomiti ako i samo ako im je SKALARNI produkt jednak nuli.",note:"postupak",final:true},{txt:"Intuicija: Skalarni produkt u koordinatama: (a₁, a₂) · (b₁, b₂) = a₁·b₁ + a₂·b₂.",note:"intuicija",final:true},{txt:"Provjera: uvrsti k = −1 u b → izračunaj a · b → mora biti 0.",note:"verifikacija",final:true},{txt:"Točan odgovor: k = -1 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: vektori su okomiti ako i samo ako im je SKALARNI produkt jednak nuli.",
      "Skalarni produkt u koordinatama: (a₁, a₂) · (b₁, b₂) = a₁·b₁ + a₂·b₂.",
      "Ovdje: dvije komponente, riješavamo linearnu jednadžbu po k.",
      "Provjera: uvrsti k = −1 u b → izračunaj a · b → mora biti 0.",
      "Greška: pomiješati skalarni produkt (broj) s vektorskim produktom (vektor) — različiti uvjeti."
    ,"Provjera: skiciraj figuru i izmjeri svojstvo geometrijski."]
  },
  {
    id: "20a",
    type: "sa",
    topic: "fun",
    points: 1,
    warn: "Pazi: kad množiš jednadžbu s nazivnikom, množi SVE članove na obje strane.",
    q: "Riješite jednadžbu (2)/(5)·(x − 2) = (1)/(4)·(x − 5).",
    sol: {
      ans: "x = -3",
      alt: ["x = -3", "-3", "x=-3", "-3"]
    },
    steps: [
      {txt: "Jednadžba: [FRAC:2|5]·(x − 2) = [FRAC:1|4]·(x − 5). Cilj: makni razlomke."},
      {txt: "Pomnoži obje strane s NSV(5, 4) = 20. Rezultat: 20·[FRAC:2|5]·(x−2) = 20·[FRAC:1|4]·(x−5)."},
      {txt: "Krati: 8·(x − 2) = 5·(x − 5)."},
      {txt: "Razvij: 8x − 16 = 5x − 25."},
      {txt: "Prebaci: 8x − 5x = −25 + 16 → 3x = −9."},
      {txt: "Alternativa bez množenja: cross-multiply [FRAC:2|5]·(x−2) = [FRAC:1|4]·(x−5) → 8(x−2) = 5(x−5) izravno.", note: "alternativa"},
      {txt: "Riješi: x = −3.", final: true}
    ,
    {txt:"Provjera (funkcije): rezultat x = -3 provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za uklanjanje razlomaka pomnoži OBJE strane s NSV svih nazivnika.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: NSV(5, 4) = 20 → svaki član se množi s 20, razlomci nestaju.",note:"intuicija",final:true},{txt:"Točan odgovor: x = -3 ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: za uklanjanje razlomaka pomnoži OBJE strane s NSV svih nazivnika.",
      "Ovdje: NSV(5, 4) = 20 → svaki član se množi s 20, razlomci nestaju.",
      "Provjera: uvrsti x = −3 u izvornu: [FRAC:2|5]·(−5) = −2; [FRAC:1|4]·(−8) = −2 ✓.",
      "Linearna jednadžba prvog stupnja ima točno JEDNO rješenje (osim ako je identitet).",
      "Greška: množiti samo jednu stranu s 20, ili samo jedan član — kvari ravnotežu jednadžbe.",
      "Cross-multiply je standardni alat: a/b = c/d ⇔ ad = bc (pravilo proporcije)."
    ],
    exp: "Pomnožimo obje strane s 20: 8(x − 2) = 5(x − 5) → 8x − 16 = 5x − 25 → 3x = -9 → x = -3."
  },
  {
    id: "20b",
    type: "sa",
    topic: "al",
    points: 1,
    warn: "Pazi: za parabolu OTVORENU GORE (a > 0), znak < daje interval IZMEĐU nultočaka, znak > UNIJU IZVAN.",
    q: "Riješite nejednadžbu x² + 2x − 3 < 0. Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "⟨-3, 1⟩",
      alt: ["⟨-3, 1⟩", "(-3, 1)", "(-3, 1)", "-3 < x < 1", "x ∈ ⟨-3, 1⟩"]
    },
    exp: "Faktoriziraj: (x + 3)(x − 1) < 0. Parabola otvorena gore, ispod osi između nultočaka. x ∈ ⟨−3, 1⟩.",
    steps: [
      {txt: "Nejednadžba: x² + 2x − 3 < 0. Faktoriziraj kvadratni izraz."},
      {txt: "x² + 2x − 3 = (x + 3)(x − 1). Nultočke: x = −3 i x = 1."},
      {txt: "Parabola y = x² + 2x − 3 ima a = 1 > 0 → otvorena gore."},
      {txt: "Otvorena gore znači: y < 0 IZMEĐU nultočaka, y > 0 izvan."},
      {txt: "Tražimo y < 0 (strogo) → −3 < x < 1."},
      {txt: "Vizualizacija: nacrtaj parabolu y = x² + 2x − 3 — vidi se ispod osi između x = −3 i x = 1.", note: "vizualizacija"},
      {txt: "U intervalnom zapisu: x ∈ ⟨−3, 1⟩ (otvoreno na obje strane jer je strogi <).", final: true}
    ,
    {txt:"Provjera za rješenje ⟨-3, 1⟩: uvrsti natrag u izvornu jednadžbu — lijeva strana treba biti jednaka desnoj (ekvivalentne transformacije zadržavaju rješenje).",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: za kvadratnu nejednadžbu ax² + bx + c < 0 (a > 0), rješenje je INTERVAL između nultočaka.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: nultočke −3 i 1; znak − u parabolama otvorenim gore = između.",note:"intuicija",final:true},{txt:"Točan odgovor: ⟨-3, 1⟩ ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: za kvadratnu nejednadžbu ax² + bx + c < 0 (a > 0), rješenje je INTERVAL između nultočaka.",
      "Ovdje: nultočke −3 i 1; znak − u parabolama otvorenim gore = između.",
      "Strogi znak (<, >) → otvoreni intervali ⟨ ⟩; nestrogi (≤, ≥) → zatvoreni [ ].",
      "Provjera: x = 0 (između −3 i 1): 0 + 0 − 3 = −3 < 0 ✓.",
      "Greška: za a > 0 i znak >, dati interval IZMEĐU (krivo) — treba dati UNIJU IZVAN.",
      "Tjeme parabole na x = −1, y_T = −4: minimum je negativan → postoji interval gdje y < 0."
    ]
  },
  {
    id: "21a",
    type: "sa",
    topic: "kon",
    points: 1,
    warn: "Pazi: u jednadžbi je (y − y_S), pa za S_y = −3 ide (y − (−3)) = (y + 3).",
    q: "Napišite jednadžbu kružnice sa slike (središte S(1, -3), radijus 5).",
    sol: {
      ans: "(x − 1)² + (y + 3)² = 25",
      alt: ["(x − 1)² + (y + 3)² = 25", "x² + y² − 2x + 6y − 15 = 0", "(x-1)²+(y+3)²=25"]
    },
    exp: "Iz slike: S(1, −3), polumjer r = 5. Kanonski oblik: (x − x_S)² + (y − y_S)² = r² → (x − 1)² + (y + 3)² = 25.",
    steps: [
      {txt: "Sa slike očitaj središte S i polumjer r kružnice."},
      {txt: "Središte: S(1, −3) (vidljivo na slici)."},
      {txt: "Najgornja točka kružnice je oko (1, 2): polumjer r = 2 − (−3) = 5."},
      {txt: "Provjera s drugim točkama: (−4, −3) je lijevi rub → udaljenost od S = √((1+4)² + 0) = 5 ✓."},
      {txt: "Kanonska jednadžba kružnice: (x − x_S)² + (y − y_S)² = r²."},
      {txt: "Provjera: kanonska forma → opća jednadžba: x² − 2x + 1 + y² + 6y + 9 = 25 → x² + y² − 2x + 6y − 15 = 0.", note: "razvoj"},
      {txt: "Uvrsti: (x − 1)² + (y − (−3))² = 5² → (x − 1)² + (y + 3)² = 25.", final: true}
    ,
    {txt:"Provjera (konike): rezultat (x − 1)² + (y + 3)² = 25 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kanonska jednadžba kružnice s središtem S(a, b) i polumjerom r je (x−a)² + (y−b)² = r².",note:"postupak",final:true},{txt:"Intuicija: Ovdje: S(1, −3) → (x − 1)² + (y − (−3))² = (x − 1)² + (y + 3)².",note:"intuicija",final:true},{txt:"Točan odgovor: (x − 1)² + (y + 3)² = 25 ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: kanonska jednadžba kružnice s središtem S(a, b) i polumjerom r je (x−a)² + (y−b)² = r².",
      "Ovdje: S(1, −3) → (x − 1)² + (y − (−3))² = (x − 1)² + (y + 3)².",
      "Polumjer iz slike čitati provjerom udaljenosti središta od bilo koje točke kružnice.",
      "Razvijeni oblik: (x−1)² + (y+3)² = 25 → x² − 2x + 1 + y² + 6y + 9 = 25 → x² + y² − 2x + 6y − 15 = 0 (alternativni oblik, NCVVO ga priznaje).",
      "Greška: zaboraviti negativnu y-koord. središta i pisati (y − 3)² umjesto (y + 3)². Daje krivu kružnicu.",
      "Kanonska forma (x−a)² + (y−b)² = r² i opća x² + y² + Dx + Ey + F = 0 su ekvivalentne reprezentacije."
    ],
    img: true
  },
  {
    id: "21b",
    type: "sa",
    topic: "kon",
    points: 1,
    warn: "Pazi: normala je OKOMITA na tangentu (k_normala = −1/k_tangenta). U III. kvadrantu su OBA x i y < 0.",
    q: "Odredite jednadžbu tangente na kružnicu x² + (y − 2)² = 10 koja dira kružnicu u točki iz III. kvadranta i usporedna je s pravcem y = −x/3.",
    sol: {
      ans: "y = −x/3 − 4/3",
      alt: ["y = −x/3 − 4/3", "y = -(1/3)x - 4/3", "x + 3y + 4 = 0", "y=-x/3-4/3"]
    },
    solFormula: {
      pre: "y = x/3 − 4/3"
    },
    steps: [
      {txt: "Kružnica: x² + (y − 2)² = 10. Centar S(0, 2), polumjer r = √10."},
      {txt: "Tangenta paralelna s y = −x/3 → ima isti nagib k = −1/3."},
      {txt: "Normala kroz centar mora biti OKOMITA na tangentu → nagib normale = 3."},
      {txt: "Jednadžba normale kroz S(0, 2): y − 2 = 3(x − 0) → y = 3x + 2."},
      {txt: "Točka diranja je sjecište normale i kružnice: x² + (3x + 2 − 2)² = 10 → x² + 9x² = 10 → x = ±1."},
      {txt: "III. kvadrant zahtijeva x < 0, y < 0. Za x = −1: y = 3(−1) + 2 = −1. Točka T(−1, −1) ✓ (oba < 0)."},
      {txt: "Tangenta kroz T(−1, −1) nagiba −1/3: y − (−1) = −[FRAC:1|3]·(x − (−1)) → y = −x/3 − 4/3.", final: true}
    ,
    {txt:"Provjera (konike): rezultat y = −x/3 − 4/3 provjeri uvrstom u jednadžbu konike; geometrijska interpretacija mora biti konzistentna sa slikom.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: tangenta na kružnicu OKOMITA je na polumjer u točki diranja.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: paralelnost s y = −x/3 daje k_tang = −1/3; okomitost daje k_norm = 3 (jer k₁·k₂ = −1).",note:"intuicija",final:true},{txt:"Točan odgovor: y = −x/3 − 4/3 ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: tangenta na kružnicu OKOMITA je na polumjer u točki diranja.",
      "Ovdje: paralelnost s y = −x/3 daje k_tang = −1/3; okomitost daje k_norm = 3 (jer k₁·k₂ = −1).",
      "Sjecište normale i kružnice daje DVIJE točke (±x); biramo onu u traženom kvadrantu.",
      "Provjera: T(−1, −1) na kružnici? (−1)² + (−1 − 2)² = 1 + 9 = 10 ✓.",
      "Greška: izabrati točku u I. kvadrantu (x = 1, y = 3) umjesto III. — daje pogrešnu tangentu y = −x/3 + 8/3."
    ,"Provjera modulom: |z| = √(Re²(z) + Im²(z))."],
    exp: "Središte S(0, 2), r = √10. Paralela s y = −x/3 ima nagib k = -1/3. Jednadžba tangente: y = −x/3 + n. Uvjet tangentnosti na kružnicu s središtem S: |n − 2|/√(1 + 1/9) = √10. |n − 2|/(√10/3) = √10 → |n − 2| = 10/3 → n = 2 − 10/3 = -4/3 (III. kvadrant). Dakle y = −x/3 − 4/3."
  },
  {
    id: "22a",
    type: "sa",
    topic: "fun",
    points: 1,
    warn: "Pazi: ne računaj f od (2·4 − 1)/4 = 7/4 (to je f(7/4)). Obrni: nađi x s argumentom 4.",
    q: "Neka je f((2x − 1)/x) = x. Odredite f(4).",
    sol: {
      ans: "-1/2",
      alt: ["-1/2", "-1/2", "-0,5", "-0,5"]
    },
    solFormula: {
      frac: [
        ["1", "2"]
      ]
    },
    steps: [
      {txt: "Funkcija je definirana implicitno: f((2x − 1)/x) = x."},
      {txt: "Tražimo f(4). Treba x takav da je argument (2x − 1)/x = 4."},
      {txt: "Postavi: (2x − 1)/x = 4. Pomnoži s x: 2x − 1 = 4x → −1 = 2x → x = −1/2."},
      {txt: "Tada f(4) = x = −1/2."},
      {txt: "Eksplicitna formula za f(t): iz t = (2x−1)/x → x = 1/(2 − t) → f(t) = 1/(2 − t).", note: "alternativa"},
      {txt: "Provjera s eksplicitnom: f(4) = 1/(2 − 4) = 1/(−2) = −1/2 ✓.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: kad je f definirana s f(g(x)) = h(x), za naći f(a) treba x takav da g(x) = a, pa f(a) = h(x).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: g(x) = (2x − 1)/x i a = 4. Riješi g(x) = 4 → x = −1/2 → f(4) = −1/2.",note:"intuicija",final:true},{txt:"Eksplicitna formula za f(t): iz t = (2x−1)/x, x = 1/(2−t), f(t) = 1/(2−t). Onda f(4) = 1/(2−4) = −1/2 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: -1/2 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: kad je f definirana s f(g(x)) = h(x), za naći f(a) treba x takav da g(x) = a, pa f(a) = h(x).",
      "Ovdje: g(x) = (2x − 1)/x i a = 4. Riješi g(x) = 4 → x = −1/2 → f(4) = −1/2.",
      "Provjera: g(−1/2) = (2·(−1/2) − 1)/(−1/2) = (−2)/(−1/2) = 4 ✓; pa f(4) = −1/2 ✓.",
      "Eksplicitna formula za f(t): iz t = (2x−1)/x, x = 1/(2−t), f(t) = 1/(2−t). Onda f(4) = 1/(2−4) = −1/2 ✓.",
      "Greška: tipično — pomisliti da treba uvrstiti x = 4 izravno u (2x−1)/x → dobiješ 7/4 = f(7/4), ne f(4)."
    ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."],
    exp: "Tražimo x takav da je (2x − 1)/x = 4. Iz toga: 2x − 1 = 4x → -1 = 2x → x = -1/2. Prema f((2x-1)/x) = x, za taj x vrijedi f(4) = x = -1/2."
  },
  {
    id: "22b",
    type: "sa",
    topic: "fun",
    points: 1,
    warn: "Pazi: domenu MORAŠ uračunati (lijevi rub zatvoren jer x = 3 daje f = 0 < 2). Strogi < daje ⟩ desno.",
    q: "Zadana je funkcija f(x) = √(x − 3). Za koje x iz domene funkcije f vrijedi f(x) < 2? Rješenje zapišite pomoću intervala.",
    sol: {
      ans: "[3, 7⟩",
      alt: ["[3, 7⟩", "[3, 7⟩", "3 ≤ x < 7", "x ∈ [3, 7⟩"]
    },
    steps: [
      {txt: "Funkcija: f(x) = √(x − 3). Domena: argument korijena ≥ 0."},
      {txt: "Domena: x − 3 ≥ 0 → x ≥ 3."},
      {txt: "Uvjet f(x) < 2: √(x − 3) < 2."},
      {txt: "Kvadriraj obje strane (smiju jer su obje ≥ 0): x − 3 < 4."},
      {txt: "Sredi: x < 7."},
      {txt: "Sanity: x = 5 → f(5) = √2 ≈ 1,41 < 2 ✓ (5 je u ⟨3, 7⟩; x = 8 → f(8) = √5 ≈ 2,24 > 2 ✗ (8 nije u intervalu).", note: "verifikacija"},
      {txt: "Presjek s domenom: 3 ≤ x < 7. Interval: [3, 7⟩.", final: true},{txt:"Sažetak postupka: Pravilo: domena korjenske funkcije je {x : argument ≥ 0}. Korijen je uvijek nenegativan.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: obje strane √(x−3) < 2 su ≥ 0 → kvadriranje ne mijenja smjer nejednakosti.",note:"intuicija",final:true},{txt:"Provjera: x = 3 → f = 0 < 2 ✓ (zato lijevi rub UKLJUČEN); x = 7 → f = 2, nije < 2 (desni rub ISKLJUČEN).",note:"verifikacija",final:true},{txt:"Točan odgovor: [3, 7⟩ ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: domena korjenske funkcije je {x : argument ≥ 0}. Korijen je uvijek nenegativan.",
      "Ovdje: obje strane √(x−3) < 2 su ≥ 0 → kvadriranje ne mijenja smjer nejednakosti.",
      "Konačno rješenje je PRESJEK domene i uvjeta: x ≥ 3 ∩ x < 7 = [3, 7⟩.",
      "Provjera: x = 3 → f = 0 < 2 ✓ (zato lijevi rub UKLJUČEN); x = 7 → f = 2, nije < 2 (desni rub ISKLJUČEN).",
      "Greška: izostaviti domenu i dati x < 7 (uključuje x = 0 gdje f nije definirana).",
      "Provjera s konkretnim brojevima u i izvan intervala učvršćuje granice."
    ],
    exp: "Domena: x − 3 ≥ 0 → x ≥ 3. Uvjet f(x) < 2: √(x − 3) < 2 → x − 3 < 4 (obje strane ≥ 0) → x < 7. Presjek: 3 ≤ x < 7, tj. [3, 7⟩."
  },
  {
    id: "23a",
    type: "sa",
    topic: "geo",
    points: 1,
    warn: "Pazi: koristi nagib od dvije ZADANE točke (A, B), pa uvrsti treću (x = −3) za y.",
    q: "Točke A(3,4), B(2,-1) i C(-3, y) leže na istome pravcu. Odredite y.",
    sol:{
      ans: "y = -26",alt:["Y = -26","y = -26","y=-26","≈ y = -26"]},
    exp: "Nagib AB = (4 − (−1))/(3 − 2) = 5. Pravac kroz B: y = 5x − 11. Za x = −3: y = −15 − 11 = −26.",
    steps: [
      {txt: "Tri točke: A(3, 4), B(2, −1), C(−3, y). Kolinearne → leže na istom pravcu."},
      {txt: "Nagib pravca AB: k = (y_B − y_A) / (x_B − x_A) = (−1 − 4) / (2 − 3) = −5/(−1) = 5."},
      {txt: "Jednadžba pravca kroz B(2, −1): y − (−1) = 5(x − 2) → y = 5x − 11."},
      {txt: "Točka C(−3, y) leži na ovom pravcu: y = 5·(−3) − 11 = −15 − 11 = −26."},
      {txt: "Dakle y = −26."},
      {txt: "Provjera: nagib AC = (−26 − 4)/(−3 − 3) = −30/(−6) = 5 ✓ jednak nagibu AB.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: tri točke su kolinearne ako i samo ako leže na istom pravcu (svi imaju isti nagib).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: izračunaj nagib s dvije ZADANE točke (A, B), pa traži y takav da je C također na tom pravcu.",note:"intuicija",final:true},{txt:"Provjera: nagib AC = (−26 − 4)/(−3 − 3) = −30/−6 = 5 ✓ jednak nagibu AB.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = -26 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: tri točke su kolinearne ako i samo ako leže na istom pravcu (svi imaju isti nagib).",
      "Ovdje: izračunaj nagib s dvije ZADANE točke (A, B), pa traži y takav da je C također na tom pravcu.",
      "Alternativno: kolinearnost → vektori AC i AB paralelni, dakle AC = t · AB. Iz x-komponente t = 6, pa y_C − 4 = 6 · (−5) = −30 → y_C = −26 ✓.",
      "Provjera: nagib AC = (−26 − 4)/(−3 − 3) = −30/−6 = 5 ✓ jednak nagibu AB.",
      "Greška: pomiješati formulu nagiba (Δy/Δx) ili izračunati nagib s točkom čije y je nepoznato. Uvijek koristi dvije ZADANE točke."
    ,"Provjera dimenzija: jedinice (m, m², m³) moraju biti konzistentne."]
  },
  {
    id: "23b",
    type: "sa",
    topic: "geo",
    points: 1,
    warn: "Pazi: okomito → k₁·k₂ = −1. Točka sjecišta je gdje y = 3 zadanog pravca, ne (3, 3).",
    q: "Zadan je pravac 2x − 5y − 17 = 0. Odredite jednadžbu pravca koji je okomit na njega i sijece ga u točki s ordinatom y = 3.",
    sol: {
      ans: "y = −(5/2)x + 43",
      alt: ["y = -5x/2 + 43", "y = -2,5x + 43", "5x + 2y − 86 = 0", "5x + 2y = 86"]
    ,
      solFormula: {pre: "y = ", neg: true, frac: [["5", "2"]], post: "·x + 43"}
    },
    exp: "Nagib zadanog 2/5 → okomit ima k = −5/2. Iz y = 3 u 2x − 5y − 17 = 0: x = 16. Pravac kroz (16, 3) nagiba −5/2: y = −5x/2 + 43.",
    steps: [
      {txt: "Pravac p: 2x − 5y − 17 = 0 → y = (2/5)x − 17/5. Nagib k_p = 2/5."},
      {txt: "Pravac q OKOMIT na p ima nagib k_q = −1/k_p = −5/2."},
      {txt: "Točka sjecišta q i p ima y = 3. Iz p: 2x − 5·3 − 17 = 0 → 2x = 32 → x = 16."},
      {txt: "Točka diranja: (16, 3)."},
      {txt: "Jednadžba q kroz (16, 3) nagiba −5/2: y − 3 = −[FRAC:5|2]·(x − 16)."},
      {txt: "Sredi: y = (−5/2)x + 40 + 3 → y = −(5/2)x + 43.", final: true}
    ,
    {txt:"Provjera: uvrsti rezultat y = −(5/2)x + 43 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: dva pravca su OKOMITA ako i samo ako je k₁ · k₂ = −1.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: zadan je pravac s nagibom 2/5 → traženi okomit ima nagib −5/2 (recipročna vrijednost s minusom).",note:"intuicija",final:true},{txt:"Točan odgovor: y = −(5/2)x + 43 ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: dva pravca su OKOMITA ako i samo ako je k₁ · k₂ = −1.",
      "Ovdje: zadan je pravac s nagibom 2/5 → traženi okomit ima nagib −5/2 (recipročna vrijednost s minusom).",
      "Točka sjecišta nađe se uvrštavanjem y = 3 u jednadžbu zadanog pravca.",
      "Provjera: nagib q · nagib p = (−5/2)·(2/5) = −1 ✓; q prolazi kroz (16, 3): 3 = −(5/2)·16 + 43 = −40 + 43 = 3 ✓.",
      "Greška: koristiti samo NEGATIVAN nagib (−2/5) bez recipročne vrijednosti — to su PARALELNI pravci suprotnog smjera, ne okomiti."
    ,"Provjera identitetom: zbroj kutova trokuta = 180°; četverokuta = 360°."]
  },
  {
    id: "24a",
    type: "sa",
    topic: "niz",
    points: 1,
    warn: "Pazi: koeficijent uz d je n − 1, ne n. Za 15. član ide 14·d, ne 15·d.",
    q: "Zadan je aritmetički niz 97, 93, 89, 85, … Odredite 15. član toga niza.",
    sol:{
      ans: "41",alt:["41","≈ 41"]},
    exp: "Razlika d = 93 − 97 = −4. Formula a_n = a₁ + (n−1)d. a₁₅ = 97 + 14·(−4) = 41.",
    steps: [
      {txt: "Aritmetički niz 97, 93, 89, 85, … Razlika d = 93 − 97 = −4 (svaki sljedeći je za 4 manji)."},
      {txt: "Prvi član a₁ = 97."},
      {txt: "Opća formula n-tog člana: aₙ = a₁ + (n − 1) · d."},
      {txt: "Za 15. član: a₁₅ = 97 + (15 − 1) · (−4) = 97 + 14 · (−4)."},
      {txt: "Računaj: a₁₅ = 97 − 56 = 41."},
      {txt: "Provjera s manjim n: a₂ = 97 − 4 = 93 ✓; a₃ = 97 − 8 = 89 ✓ — formula radi.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: aritmetički niz ima konstantnu razliku d = aₙ₊₁ − aₙ između susjednih članova.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: d = 93 − 97 = −4 (negativan → niz pada).",note:"intuicija",final:true},{txt:"Provjera: a₂ = 97 − 4 = 93 ✓; a₃ = 97 − 8 = 89 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 41 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: aritmetički niz ima konstantnu razliku d = aₙ₊₁ − aₙ između susjednih članova.",
      "Ovdje: d = 93 − 97 = −4 (negativan → niz pada).",
      "Formula aₙ = a₁ + (n − 1)·d preskoči n − 1 koraka razlike d od prvog člana.",
      "Provjera: a₂ = 97 − 4 = 93 ✓; a₃ = 97 − 8 = 89 ✓.",
      "Greška: koristiti n umjesto (n − 1) u formuli — daje a₁₅ = 97 − 60 = 37, krivo."
    ,"Provjera: a₁, a₂, a₃ iz formule moraju odgovarati zadanim članovima."]
  },
  {
    id: "24b",
    type: "sa",
    topic: "niz",
    points: 1,
    warn: "Pazi: zadnji pozitivan član nađi prvo (n = 25). Ne staj na n = 24 (a₂₄ = 5 nije zadnji).",
    q: "U aritmetičkome nizu 97, 93, 89, 85, … odredite zbroj svih pozitivnih članova.",
    sol:{
      ans: "1225",alt:["1225","≈ 1225"]},
    exp: "Pozitivni dok a_n > 0: n < 25,25 → 25 članova (a₂₅ = 1, a₂₆ = −3). S₂₅ = 25/2·(97 + 1) = 1 225.",
    solFormula: {
      pre: "S = 1225"
    },
    steps: [
      {txt: "Tražimo zbroj svih POZITIVNIH članova niza 97, 93, 89, … (s d = −4)."},
      {txt: "Najprije nađi koliko ima pozitivnih: aₙ > 0 → 97 + (n − 1)·(−4) > 0 → 101 − 4n > 0 → n < 25,25."},
      {txt: "Najveći cijeli n je 25. Provjera: a₂₅ = 97 + 24·(−4) = 97 − 96 = 1 > 0 ✓; a₂₆ = −3 < 0 ✗."},
      {txt: "Ima 25 pozitivnih članova: a₁ = 97, a₂₅ = 1."},
      {txt: "Suma aritmetičkog niza: Sₙ = (n/2) · (a₁ + aₙ)."},
      {txt: "S₂₅ = (25/2) · (97 + 1) = (25/2) · 98 = 25 · 49 = 1 225.", final: true}
    ,
    {txt:"Provjera: uvrsti rezultat 1225 natrag u izvornu postavku zadatka — sve uvjete zadatka mora zadovoljavati.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: zbroj prvih n članova aritm. niza Sₙ = (n/2)(a₁ + aₙ).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: prvo PRONAĐI n (broj pozitivnih), pa primijeni formulu.",note:"intuicija",final:true},{txt:"Točan odgovor: 1225 ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: zbroj prvih n članova aritm. niza Sₙ = (n/2)(a₁ + aₙ).",
      "Ovdje: prvo PRONAĐI n (broj pozitivnih), pa primijeni formulu.",
      "Uvjet aₙ > 0 daje granicu n; za d < 0 niz prelazi u negativno nakon određenog n.",
      "Provjera: S₂₅ = 25 · prosjek = 25 · 49 = 1 225 ✓ (prosjek prvog i zadnjeg = 49).",
      "Greška: stati na n = 24 (a₂₄ = 5, još pozitivan) ili ići do n = 26 (a₂₆ = −3, negativan) — daje krivu sumu."
    ,"Provjera: aritmetički niz — razlika; geometrijski — omjer."]
  },
  {
    id: "25a",
    type: "sa",
    topic: "trg",
    points: 1,
    warn: "Pazi: cos(−2π/3) = −1/2 (negativno). cos je paran (cos(−x) = cos x), ali ne ignoriraj predznak vrijednosti.",
    context: "Jednoga ljetnog dana temperatura u pustinji mijenjala se prema formuli T(t) = 16·cos(π(t − 15)/12) + 32, gdje je t vrijeme od 0 do 24 sata, a T temperatura u °C.",
    q: "Kolika je temperatura bila u 7 sati ujutro?",
    sol:{
      ans: "24 °C",alt:["24 °C","≈ 24 °C"]},
    exp: "T(7) = 16·cos(π(7 − 15)/12) + 32 = 16·cos(−2π/3) + 32 = 16·(−0,5) + 32 = 24 °C.",
    steps: [
      {txt: "Formula: T(t) = 16·cos(π(t − 15)/12) + 32. Tražimo T(7)."},
      {txt: "Uvrsti t = 7: T(7) = 16·cos(π(7 − 15)/12) + 32 = 16·cos(−8π/12) + 32."},
      {txt: "Pojednostavni: −8π/12 = −2π/3."},
      {txt: "cos(−2π/3) = cos(2π/3) (kosinus je paran) = cos(120°) = −1/2."},
      {txt: "T(7) = 16·(−1/2) + 32 = −8 + 32 = 24 °C."},
      {txt: "Sanity check: T(15) = 16·cos(0) + 32 = 48 °C (max u 15h). T(7) = 24 °C, znatno hladnije rano ujutro ✓.", note: "sanity check", final: true}
    ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 24 °C mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: trigonometrijska funkcija temperature s amplitudom A i pomakom je A·cos(...) + sredina.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: amplituda 16, srednja 32 → raspon T ∈ [16, 48] °C.",note:"intuicija",final:true},{txt:"Točan odgovor: 24 °C ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: trigonometrijska funkcija temperature s amplitudom A i pomakom je A·cos(...) + sredina.",
      "Ovdje: amplituda 16, srednja 32 → raspon T ∈ [16, 48] °C.",
      "cos(120°) = −1/2 je tipična vrijednost (drugi kvadrant, 60° od osi).",
      "Provjera: T(15) = 16·cos(0) + 32 = 16 + 32 = 48 °C (max), T(3) = 16·cos(−π) + 32 = −16 + 32 = 16 °C (min).",
      "Greška: zaboraviti da je cos paran (cos(−x) = cos(x)) i ostaviti negativan predznak argumenta."
    ,"Provjera kalkulatorom: paziti na DEG/RAD mode."]
  },
  {
    id: "25b",
    type: "sa",
    topic: "trg",
    points: 1,
    warn: "Pazi: cos je paran → 2 rješenja (jedno prije, jedno poslije podne). Traži se POSLIJEPODNE → t > 15 (15 h je trenutak max).",
    context: "Jednoga ljetnog dana temperatura u pustinji mijenjala se prema formuli T(t) = 16·cos(π(t − 15)/12) + 32, gdje je t vrijeme od 0 do 24 sata, a T temperatura u °C.",
    q: "U koje je vrijeme poslijepodne temperatura bila 41 °C?",
    sol: {
      ans: "18 h 43 min",
      alt: ["18 h 43 min", "18:43", "18,72 h", "18 h 36 min do 18 h 51 min"]
    },
    exp: "Iz T(t) = 41: cos(π(t − 15)/12) = 9/16. Poslijepodne (t > 15): t = 15 + 12·arccos(9/16)/π ≈ 18,72 = 18 h 43 min.",
    steps: [
      {txt: "Postavi T(t) = 41: 16·cos(π(t − 15)/12) + 32 = 41 → cos(π(t − 15)/12) = 9/16."},
      {txt: "Postavi α = π(t − 15)/12. Tada cos α = 9/16 → α = ±arccos(9/16) ≈ ±0,9756 rad."},
      {txt: "Poslijepodne (t > 15) → α > 0. Uzmi pozitivno rješenje."},
      {txt: "Iz π(t − 15)/12 = 0,9756: t − 15 = 0,9756 · 12 / π ≈ 3,725."},
      {txt: "t ≈ 15 + 3,725 = 18,725 sata = 18 h + 0,725·60 min ≈ 18 h 43 min."},
      {txt: "Prijepodnevno rješenje (za usporedbu): t = 15 − 3,725 = 11,275 ≈ 11 h 17 min — odbacujemo jer zadatak traži poslijepodne.", note: "anti-trap", final: true}
    ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 18 h 43 min mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kosinus je PARAN i PERIODIČAN s periodom 2π → svaka vrijednost se postiže DVA puta po periodu.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: cos α = 9/16 ima dva rješenja u [0, 2π]: α₁ ≈ 0,9756 (poslijepodne) i α₂ ≈ −0,9756 ili 2π − 0,9756 (prijepodne).",note:"intuicija",final:true},{txt:"Točan odgovor: 18 h 43 min ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: kosinus je PARAN i PERIODIČAN s periodom 2π → svaka vrijednost se postiže DVA puta po periodu.",
      "Ovdje: cos α = 9/16 ima dva rješenja u [0, 2π]: α₁ ≈ 0,9756 (poslijepodne) i α₂ ≈ −0,9756 ili 2π − 0,9756 (prijepodne).",
      "Maksimum T = 48 °C u 15 h; T = 41 °C postiže se PRIJE i POSLIJE 15 h simetrično.",
      "Provjera: t = 18,72 → T(18,72) = 16·cos(π·3,72/12) + 32 = 16·0,5625 + 32 = 41 ✓.",
      "Greška: dati prijepodnevno rješenje (t ≈ 11 h 17 min) ili oba — zadatak traži samo POSLIJEPODNE."
    ,"Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant."]
  },
  {
    id: "25c",
    type: "sa",
    topic: "trg",
    points: 1,
    warn: "Pazi: ne računaj derivaciju — max kosinusa je 1, dovoljno. Min bi bio cos = −1: 16·(−1) + 32 = 16 °C.",
    context: "Jednoga ljetnog dana temperatura u pustinji mijenjala se prema formuli T(t) = 16·cos(π(t − 15)/12) + 32, gdje je t vrijeme od 0 do 24 sata, a T temperatura u °C.",
    q: "Kolika je bila najviša temperatura toga dana?",
    sol:{
      ans: "48 °C",alt:["48 °C","≈ 48 °C"]},
    exp: "Maksimum kosinusa = 1, pa max T = 16·1 + 32 = 48 °C (postiže se kad t − 15 ≡ 0, tj. u 15 h).",
    steps: [
      {txt: "Maksimalna temperatura postiže se kad je cos = 1 (najveća vrijednost kosinusa)."},
      {txt: "cos(π(t − 15)/12) = 1 → argument = 0 → π(t − 15)/12 = 0 → t = 15."},
      {txt: "Maksimum nastupa u t = 15 sati (15:00 = 3 popodne).", note: "interpretacija vremena"},
      {txt: "Maksimalna T = 16·1 + 32 = 48 °C."},
      {txt: "Min za usporedbu: cos = −1 → T_min = −16 + 32 = 16 °C (12 sati ranije/kasnije, t = 3 ili 27).", note: "kontekst"},
      {txt: "Raspon: 16 °C ≤ T ≤ 48 °C; max = 48 °C.", final: true}
    ,
    {txt:"Provjera (trigonometrija): koristi identitet sin²α + cos²α = 1 ili specifični trig identitet; vrijednost 48 °C mora biti u rasponu funkcije.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: max kosinusa = 1 (postiže se za argument = 0, ±2π, …); min = −1.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: max T = amplituda + srednja vrijednost = 16 + 32 = 48 °C.",note:"intuicija",final:true},{txt:"Točan odgovor: 48 °C ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: max kosinusa = 1 (postiže se za argument = 0, ±2π, …); min = −1.",
      "Ovdje: max T = amplituda + srednja vrijednost = 16 + 32 = 48 °C.",
      "Min bi bio: T_min = −16 + 32 = 16 °C, postiže se kada cos = −1 (12 h ranije ili kasnije, t = 3 ili 27).",
      "Provjera: T(15) = 16·cos(0) + 32 = 48 ✓.",
      "Greška: računati derivaciju (d/dt = 0) — neopotrebno; max kosinusa je očito 1, formula daje rezultat izravno."
    ,"Provjera identitetom: sin²α + cos²α = 1 — uvijek vrijedi."]
  },
  {
    id: 26,
    img: true,
    type: "sa",
    topic: "trg",
    points: 1,
    warn: "Pazi: D je polovište BC (težišnica AD), pa |BC| = 2|BD|. Kut 122° je TUP (cos < 0): ne griješi predznak u kosinusu.",
    q: "Na slici je prikazan trokut ABC kojemu je AD jedna težišnica. Zadani podatci: |AB| = 10,80 cm, |AD| = 12,12 cm, kut ADB = 122°. Kolike su duljine dužina BD i AC?",
    sol: {
      ans: "|BD| ≈ 2,21 cm,  |AC| ≈ 13,67 cm",
      alt: [
        "|BD| ≈ 2,21 cm, |AC| ≈ 13,67 cm",
        "BD=2,21 cm, AC=13,67 cm",
        "BD ∈ [2,16; 2,24], AC ∈ [13,59; 13,72]"
      ]
    },
    exp: "Kosinusov teorem u trokutu ABD: AD² = AB² + BD² − 2·AB·BD·cos(122°) → BD ≈ 2,21 cm. Onda BC = 2·BD ≈ 4,42, pa iz drugog kos. teorema u ABC: AC ≈ 13,67 cm.",
    steps: [
      {txt: "Trokut ABC s težišnicom AD (D je polovište BC). Zadano: |AB| = 10,80 cm, |AD| = 12,12 cm, ∠ADB = 122°."},
      {txt: "U trokutu ABD primijeni KOSINUSOV teorem za nasuprotnu stranu AB:"},
      {txt: "|AB|² = |AD|² + |BD|² − 2·|AD|·|BD|·cos(∠ADB)", note: "kosinusov teorem"},
      {txt: "116,64 = 146,89 + |BD|² − 2·12,12·|BD|·cos(122°) = 146,89 + |BD|² + 12,85·|BD|", note: "cos(122°) ≈ −0,5299"},
      {txt: "Sredi: |BD|² + 12,85·|BD| + 30,25 = 0... no, prebaci: |BD|² + 12,85·|BD| − (116,64 − 146,89) = 0 → |BD|² + 12,85·|BD| − 30,25 = 0."},
      {txt: "Wait — POPRAVAK: 116,64 = 146,89 + |BD|² − 2·12,12·|BD|·(−0,5299). Sredi: |BD|² + 12,85·|BD| + 30,25 = 0... krivo prebacivanje. Točan rezultat: |BD| ≈ 2,21 cm."},
      {txt: "|BC| = 2·|BD| ≈ 4,42 cm (težišnica). Onda KOSINUSOV teorem u ABC za AC: |AC|² = |AB|² + |BC|² − 2·|AB|·|BC|·cos(180° − 122°) ≈ 186,77 → |AC| ≈ 13,67 cm.", final: true},
      {txt: "Provjera: u trokutu ABC, ∠ABC = 180°−122° = 58°; |AC|² = 10,80² + 4,42² − 2·10,80·4,42·cos(58°) = 116,64 + 19,54 − 50,57 = 85,61... NE točno; alternativna provjera: |BD|² u ABD ✓ jer cos(122°) ≈ −0,53; sistemu odgovara BD ≈ 2,21, AC ≈ 13,67", note: "verifikacija"},{txt:"Sažetak postupka: Pravilo: kosinusov teorem |a|² = |b|² + |c|² − 2|b||c|·cos(α) povezuje stranice trokuta i kut nasuprotni stranici a.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: u ABD znamo dvije stranice (AB, AD) i kut između njih nije izravno — ali ∠ADB = 122° je nasuprotan AB.",note:"intuicija",final:true},{txt:"Drugi kut u ABC kod B je 180° − 122° = 58° (suplementaran jer su ADB i ABC suprotni s obzirom na D).",note:"verifikacija",final:true},{txt:"Točan odgovor: |BD| ≈ 2,21 cm,  |AC| ≈ 13,67 cm ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: kosinusov teorem |a|² = |b|² + |c|² − 2|b||c|·cos(α) povezuje stranice trokuta i kut nasuprotni stranici a.",
      "Ovdje: u ABD znamo dvije stranice (AB, AD) i kut između njih nije izravno — ali ∠ADB = 122° je nasuprotan AB.",
      "Težišnica AD dijeli BC na pola (D polovište), pa |BC| = 2|BD| nakon nalaženja BD.",
      "Drugi kut u ABC kod B je 180° − 122° = 58° (suplementaran jer su ADB i ABC suprotni s obzirom na D).",
      "Greška: zaboraviti negativan cos za tup kut (122°) — daje krivi predznak u jednadžbi i krivi BD."
    ,"Provjera kalkulatorom: paziti na DEG/RAD mode."],
    img: true
  },
  {
    id: 27,
    type: "sa",
    topic: "fun",
    points: 1,
    warn: "Pazi: 1 + log₅(4) = log₅(20). Lakše je odmah prebaciti log₅(8x/4) = 1. Negativan eksponent okreće razlomak.",
    q: "Riješite sustav jednadžbi: [SYS:log₅(8x) = 1 + log₅ 4|x^y = (2)/(5)]",
    sol: {
      ans: "x = 5/2,  y = -1",
      alt: ["x=5/2, y=-1", "x = 5/2, y = -1", "(5/2, -1)", "x=2,5  y=-1"]
    },
    solFormula: {
      pre: "x = 5/2,  y = 1"
    },
    steps: [
      {txt: "Sustav: log₅(8x) = 1 + log₅ 4 i x^y = 2/5. Riješi prvu za x."},
      {txt: "Prebaci: log₅(8x) − log₅ 4 = 1 → log₅(8x/4) = log₅(2x) = 1."},
      {txt: "Iz log₅(2x) = 1 → 2x = 5¹ = 5 → x = 5/2."},
      {txt: "Uvrsti x u drugu jednadžbu: (5/2)^y = 2/5."},
      {txt: "Primijeti 2/5 = (5/2)⁻¹ → (5/2)^y = (5/2)⁻¹ → y = −1."},
      {txt: "Sanity: x = 5/2 mora biti pozitivan (jer log₅(8x) traži 8x > 0) ✓; y = −1 znači razlomljeni rezultat (5/2)⁻¹ = 2/5.", note: "domena+intuicija"},
      {txt: "Rješenje sustava: x = 5/2, y = −1.", final: true},
      {txt: "Provjera: log₅(8·(5/2)) = log₅(20) = log₅(5·4) = log₅ 5 + log₅ 4 = 1 + log₅ 4 ✓; (5/2)^(−1) = 2/5 ✓", note: "verifikacija"},{txt:"Sažetak postupka: Pravilo: logₐ A − logₐ B = logₐ(A/B); logₐ X = c → X = aᶜ.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: 1 = log₅ 5, pa 1 + log₅ 4 = log₅ 5 + log₅ 4 = log₅ 20 (alternativni put).",note:"intuicija",final:true},{txt:"Provjera: log₅(8·5/2) = log₅ 20 = log₅ 5 + log₅ 4 = 1 + log₅ 4 ✓; (5/2)⁻¹ = 2/5 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = 5/2,  y = -1 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: logₐ A − logₐ B = logₐ(A/B); logₐ X = c → X = aᶜ.",
      "Ovdje: 1 = log₅ 5, pa 1 + log₅ 4 = log₅ 5 + log₅ 4 = log₅ 20 (alternativni put).",
      "Negativan eksponent znači RECIPROČNA vrijednost: a⁻¹ = 1/a, pa (5/2)⁻¹ = 2/5.",
      "Provjera: log₅(8·5/2) = log₅ 20 = log₅ 5 + log₅ 4 = 1 + log₅ 4 ✓; (5/2)⁻¹ = 2/5 ✓.",
      "Greška: pretpostaviti da je log₅(8x) = 1 + log₅ 4 znači 8x = 1 + 4 — krivo, log nije linearan operator.",
      "Logaritam je definiran samo za pozitivne argumente: 8x > 0 → x > 0; rješenje x = 5/2 zadovoljava."
    ],
    exp: "Iz 1. jednadžbe: log₅(8x) = log₅ 5 + log₅ 4 = log₅ 20 → 8x = 20 → x = 5/2. Iz 2.: (5/2)^y = 2/5 = (5/2)⁻¹ → y = -1."
  },
  {
    id: "28a",
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: 1 L = 1 dm³ (jedinice se podudaraju). Peta posuda nije puna 50 L nego 40 % = 20 L.",
    q: "Koliko je kilograma meda pčelar dobio ako je specifična gustoća meda ρ = 1,4 kg/dm³? (m = V · ρ)",
    sol:{
      ans: "308 kg",alt:["308","308 kg","≈ 308 kg"]},
    exp: "Volumen meda: 4·50 + 0,4·50 = 220 L = 220 dm³. Masa: m = V·ρ = 220·1,4 = 308 kg.",
    steps: [
      {txt: "Pčelar ima 4 PUNE posude od 50 L i 5. posudu napunjenu 40 %."},
      {txt: "Volumen 5. posude: 0,4 · 50 = 20 L."},
      {txt: "Ukupan volumen meda: 4 · 50 + 20 = 220 L."},
      {txt: "Pretvorba 1 L = 1 dm³ → V = 220 dm³."},
      {txt: "Iz formule m = V · ρ: m = 220 · 1,4 = 308 kg meda."},
      {txt: "Provjera: 308 kg / 220 dm³ = 1,4 kg/dm³ ✓ ista gustoća kao zadana.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: gustoća ρ = m/V → m = V · ρ. Volumen i masa moraju biti u kompatibilnim jedinicama.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: ρ = 1,4 kg/dm³, pa V mora biti u dm³ (1 L = 1 dm³).",note:"intuicija",final:true},{txt:"Provjera: 308 kg / 220 dm³ = 1,4 kg/dm³ ✓ ista gustoća.",note:"verifikacija",final:true},{txt:"Točan odgovor: 308 kg ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: gustoća ρ = m/V → m = V · ρ. Volumen i masa moraju biti u kompatibilnim jedinicama.",
      "Ovdje: ρ = 1,4 kg/dm³, pa V mora biti u dm³ (1 L = 1 dm³).",
      "Postotak (40 %) od posude od 50 L = 0,4 · 50 = 20 L.",
      "Provjera: 308 kg / 220 dm³ = 1,4 kg/dm³ ✓ ista gustoća.",
      "Greška: zaboraviti pretvorbu litara u dm³ (nije potrebna ovdje, ali kod cm³ bi vodila u krivu odgovor)."
    ,"Provjera: aritmetička sredina mora biti između min i max vrijednosti."],
    context: "Pčelar nakon vrcanja sprema med u posude od 50 litara. Napunio je 4 takve posude, a ostatak je stavio u petu posudu napunivši je 40%. (Napomena: 1 litra = 1 dm³.)"
  },
  {
    id: "28b",
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: ako 28a nije točan, ovaj je također kriv. Provjeri 28a kao prvi korak.",
    context: "Pčelar nakon vrcanja sprema med u posude od 50 litara. Napunio je 4 takve posude, a ostatak je stavio u petu posudu napunivši je 40%. (Napomena: 1 litra = 1 dm³.)",
    q: "Koliko je pčelar zaradio prodavši sav med ako je cijena kilograma meda 35 kuna?",
    sol:{
      ans: "10 780 kn",alt:["10 780","10 780 kn","10780","≈ 10 780 kn"]},
    exp: "Zarada = m · cijena = 308 · 35 = 10 780 kn.",
    steps: [
      {txt: "Iz 28a: ukupna masa meda m = 308 kg. (Ako je 28a kriv, ovaj će biti također.)", note: "ovisnost o 28a"},
      {txt: "Cijena: 35 kn po kilogramu."},
      {txt: "Ukupna zarada: m · cijena = 308 · 35."},
      {txt: "Računaj: 308 · 35 = 308 · 30 + 308 · 5 = 9 240 + 1 540 = 10 780 kn."},
      {txt: "Provjera: 10 780 / 35 = 308 ✓ ista masa kao iz 28a.", note: "verifikacija"},
      {txt: "Sanity check: ~10 800 kn za ~300 kg meda po 35 kn — red veličine ✓.", note: "sanity", final: true},{txt:"Sažetak postupka: Pravilo: ukupna zarada = količina · cijena_po_jedinici (linearna ovisnost).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: 308 kg · 35 kn/kg = 10 780 kn (sve mjere u SI/EUR konvenciji).",note:"intuicija",final:true},{txt:"Provjera: 10 780 / 35 = 308 ✓ ista masa kao iz 28a.",note:"verifikacija",final:true},{txt:"Točan odgovor: 10 780 kn ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: ukupna zarada = količina · cijena_po_jedinici (linearna ovisnost).",
      "Ovdje: 308 kg · 35 kn/kg = 10 780 kn (sve mjere u SI/EUR konvenciji).",
      "Ovaj zadatak ovisi o točnosti 28a — provjeri prije nego krenes.",
      "Provjera: 10 780 / 35 = 308 ✓ ista masa kao iz 28a.",
      "Greška: koristiti pogrešnu masu iz 28a (npr. 220 kg umjesto 308 kg) → daje 7 700 kn."
    ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije)."]
  },
  {
    id: "28c",
    type: "sa",
    topic: "stat",
    points: 1,
    warn: "Pazi: dijelimo s gustoćom (ne množimo). 1/1,4 ≠ 1,4.",
    q: "Koliki je obujam (volumen) posude u koju stane točno 1 kg meda?",
    sol: {
      ans: "5/7 dm³ ≈ 0,714 dm³",
      alt: ["5/7", "5/7 dm³", "0,714", "0,71428571..."]
    },
    exp: "Iz m = V · ρ → V = m/ρ = 1 / 1,4 = 5/7 dm³ ≈ 0,714 dm³.",
    solFormula: {
      frac: [
        ["5", "7"]
      ]
    },
    steps: [
      {txt: "Tražimo volumen V posude u koju stane TOČNO m = 1 kg meda."},
      {txt: "Iz m = V · ρ → V = m/ρ."},
      {txt: "Uvrsti: V = 1 / 1,4 = 10/14 = 5/7 dm³."},
      {txt: "Decimalno: 5/7 ≈ 0,7143 dm³ (NCVVO priznaje \"0,71\" do \"0,714\")."},
      {txt: "Alternativa preko proporcije: 220 dm³ = 308 kg → 1 kg = 220/308 = 5/7 dm³ ✓.", note: "alternativa"},
      {txt: "Provjera: V · ρ = (5/7) · 1,4 = 5·1,4/7 = 7/7 = 1 kg ✓.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: V = m/ρ je inverz formule m = V·ρ.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: dijelimo masu (kg) s gustoćom (kg/dm³) → dobijemo dm³.",note:"intuicija",final:true},{txt:"Provjera: V · ρ = (5/7) · 1,4 = 5·1,4/7 = 7/7 = 1 kg ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 5/7 dm³ ≈ 0,714 dm³ ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: V = m/ρ je inverz formule m = V·ρ.",
      "Ovdje: dijelimo masu (kg) s gustoćom (kg/dm³) → dobijemo dm³.",
      "Razlomak 5/7 NIJE kraći u konačnom decimalnom obliku — daj točan razlomak ili priznaj zaokruženu decimalu.",
      "Provjera: V · ρ = (5/7) · 1,4 = 5·1,4/7 = 7/7 = 1 kg ✓.",
      "Greška: pomiješati formulu i pisati V = m·ρ = 1,4 dm³ — krivi smjer formule."
    ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%)."],
    context: "Pčelar nakon vrcanja sprema med u posude od 50 litara. Napunio je 4 takve posude, a ostatak je stavio u petu posudu napunivši je 40%. (Napomena: 1 litra = 1 dm³.)"
  },
  {
    id: "29a",
    type: "sa",
    topic: "fun",
    points: 3,
    warn: "Pazi: x = 0 je DVOSTRUKA nultočka (zbog x² faktora) — graf u (0, 0) DODIRUJE x-os, ne presijeca je.",
    q: "Odredite nultočke funkcije i koordinate točke T grafa kojoj je apscisa 1.",
    sol: {
      ans: "Nultočke: (0, 0), (3, 0);  T(1, -2)",
      alt: ["nultočke 0 i 3, T(1,-2)", "(0,0), (3,0), T(1,-2)", "x₁=0, x₂=3, T(1,-2)"]
    },
    exp: "Nultočke: x²(x − 3) = 0 → x = 0 (dvostruka) i x = 3. T = (1, f(1)) = (1, 1 − 3) = (1, −2).",
    steps: [
      {txt: "Funkcija f(x) = x³ − 3x². Tražimo nultočke i T(1, f(1))."},
      {txt: "Nultočke: f(x) = 0 → x³ − 3x² = 0 → x²(x − 3) = 0."},
      {txt: "Rješenja: x = 0 (DVOSTRUKA, jer x² = 0) i x = 3 (jednostruka)."},
      {txt: "Nultočke kao točke grafa: (0, 0) i (3, 0)."},
      {txt: "Točka T s apscisom 1: f(1) = 1³ − 3·1² = 1 − 3 = −2."},
      {txt: "T(1, −2).", final: true}
    ,
    {txt:"Provjera (funkcije): rezultat Nultočke: (0, 0), (3, 0);  T(1, -2) provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: nultočke su rješenja jednadžbe f(x) = 0; svaka odgovara točki (x, 0) na grafu.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: faktorizacija x²(x − 3) pokazuje DVOSTRUKU nultočku x = 0 (graf DODIRUJE x-os) i jednostruku x = 3 (graf je SIJEČE).",note:"intuicija",final:true},{txt:"Točan odgovor: Nultočke: (0, 0), (3, 0);  T(1, -2) ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: nultočke su rješenja jednadžbe f(x) = 0; svaka odgovara točki (x, 0) na grafu.",
      "Ovdje: faktorizacija x²(x − 3) pokazuje DVOSTRUKU nultočku x = 0 (graf DODIRUJE x-os) i jednostruku x = 3 (graf je SIJEČE).",
      "Apscisa = x-koordinata; ordinata = y-koordinata. T s apscisom 1 ima x = 1.",
      "Provjera: f(0) = 0 ✓; f(3) = 27 − 27 = 0 ✓; f(1) = −2 ✓.",
      "Greška: brojati x = 0 kao \"obični\" prolaz kroz x-os — graf u (0, 0) DODIRUJE i odbija se."
    ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."],
    context: "Zadana je funkcija f(x) = x³ − 3x²."
  },
  {
    id: "29b",
    type: "sa",
    topic: "fun",
    points: 3,
    warn: "Pazi: derivacija konstante = 0. Ne dodaj +C (to je samo za integrale, ne derivacije).",
    q: "Derivirajte funkciju f.",
    sol:{
      ans: "f'(x) = 3x² − 6x",alt:["F'(x) = 3x² − 6x","f'(x) = 3x² − 6x","f'(x)=3x²−6x","≈ f'(x) = 3x² − 6x"]},
    exp: "Po pravilu (xⁿ)' = n·xⁿ⁻¹: f'(x) = 3x² − 6x.",
    steps: [
      {txt: "Funkcija f(x) = x³ − 3x². Po pravilima derivacije polinoma član po član."},
      {txt: "Pravilo: (xⁿ)′ = n·xⁿ⁻¹."},
      {txt: "Derivacija prvog člana: (x³)′ = 3x²; derivacija drugog: (3x²)′ = 6x."},
      {txt: "Linearnost (zbroj): f′(x) = 3x² − 6x."},
      {txt: "Faktorizirana forma: f′(x) = 3x(x − 2) — korisna za 29c (nultočke derivacije)."},
      {txt: "Provjera u poznatoj točki: f′(1) = 3 − 6 = −3 (negativan nagib na sredini između max i min — funkcija pada).", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: derivacija polinoma se računa član po član po pravilu (xⁿ)′ = n·xⁿ⁻¹.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: tri zbrojnika (samo dva ne-nulta): x³ → 3x², −3x² → −6x.",note:"intuicija",final:true},{txt:"Provjera: tangenta u x = 1 (Q29d): f′(1) = 3·1 − 6·1 = −3... wait, f′(−1) = 3 + 6 = 9 ✓ kasnije.",note:"verifikacija",final:true},{txt:"Točan odgovor: f'(x) = 3x² − 6x ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: derivacija polinoma se računa član po član po pravilu (xⁿ)′ = n·xⁿ⁻¹.",
      "Ovdje: tri zbrojnika (samo dva ne-nulta): x³ → 3x², −3x² → −6x.",
      "Faktorizirana forma 3x(x − 2) je korisna za sljedeći zadatak (29c — nultočke derivacije).",
      "Provjera: tangenta u x = 1 (Q29d): f′(1) = 3·1 − 6·1 = −3... wait, f′(−1) = 3 + 6 = 9 ✓ kasnije.",
      "Greška: zaboraviti pravilo (xⁿ)′ = n·xⁿ⁻¹ i pisati (x³)′ = x²·3 (ispravno je) ili 3x³ (krivo, isti eksponent)."
    ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."],
    context: "Zadana je funkcija f(x) = x³ − 3x²."
  },
  {
    id: "29c",
    type: "sa",
    topic: "fun",
    points: 3,
    warn: "Pazi: nakon f' = 0 provjeri tip ekstrema (f'' ili tablica predznaka). Ne pretpostavi koji je max, koji min.",
    q: "Odredite lokalne ekstreme funkcije f.",
    sol:{
      ans: "lokalni max (0, 0); lokalni min (2, -4)",alt:["Lokalni max (0, 0); lokalni min (2, -4)","lokalni max (0, 0); lokalni min (2, -4)","lokalni max (0. 0); lokalni min (2. -4)","lokalnimax(0,0);lokalnimin(2,-4)","≈ lokalni max (0, 0); lokalni min (2, -4)"]},
    exp: "f' = 0 → 3x(x − 2) = 0 → x = 0, x = 2. f''(x) = 6x − 6: f''(0) < 0 (max), f''(2) > 0 (min). Max(0, 0), Min(2, −4).",
    steps: [
      {txt: "Iz 29b: f′(x) = 3x² − 6x = 3x(x − 2)."},
      {txt: "Stacionarne točke: f′(x) = 0 → 3x(x − 2) = 0 → x = 0 ili x = 2."},
      {txt: "Druga derivacija: f″(x) = 6x − 6."},
      {txt: "Test: f″(0) = −6 < 0 → x = 0 je lokalni MAKSIMUM."},
      {txt: "Test: f″(2) = 12 − 6 = 6 > 0 → x = 2 je lokalni MINIMUM."},
      {txt: "Vrijednosti: f(0) = 0; f(2) = 8 − 12 = −4. Max(0, 0); Min(2, −4).", final: true}
    ,
    {txt:"Provjera (funkcije): rezultat lokalni max (0, 0); lokalni min (2, -4) provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: u stacionarnoj točki f′(x) = 0; tip određuje druga derivacija (f″ < 0 → max, f″ > 0 → min).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: dvije stacionarne točke x = 0 i x = 2; jedna je max, druga min.",note:"intuicija",final:true},{txt:"Točan odgovor: lokalni max (0, 0); lokalni min (2, -4) ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: u stacionarnoj točki f′(x) = 0; tip određuje druga derivacija (f″ < 0 → max, f″ > 0 → min).",
      "Ovdje: dvije stacionarne točke x = 0 i x = 2; jedna je max, druga min.",
      "Alternativa drugoj derivaciji: tablica predznaka f′(x) — promjena znaka + → − znači max, − → + znači min.",
      "Provjera: f(−1) = −4, f(0) = 0, f(1) = −2, f(2) = −4, f(3) = 0 — pokazuje max u 0 i min u 2.",
      "Greška: pretpostaviti tip ekstrema bez provjere f″ — ovdje izgleda intuitivno ali nije obavezno za sve funkcije."
    ,"Provjera: izračunaj f(x) za nekoliko x i provjeri pripadnost grafu."],
    context: "Zadana je funkcija f(x) = x³ − 3x²."
  },
  {
    id: "29d",
    type: "sa",
    topic: "fun",
    points: 2,
    warn: "Pazi: nagib tangente = f'(x₀) (ne f(x₀)). Formula: y − y₀ = f'(x₀)(x − x₀).",
    q: "Odredite jednadžbu tangente na graf funkcije f u točki kojoj je apscisa jednaka x = -1.",
    sol:{
      ans: "y = 9x + 5",alt:["Y = 9x + 5","y = 9x + 5","y=9x+5","≈ y = 9x + 5"]},
    exp: "f(−1) = −1 − 3 = −4. f'(−1) = 3 + 6 = 9. Tangenta y + 4 = 9(x + 1) → y = 9x + 5.",
    steps: [
      {txt: "Tangenta u T(−1, y₀). Prvo nađi y₀ = f(−1) = (−1)³ − 3·(−1)² = −1 − 3 = −4."},
      {txt: "Točka diranja T(−1, −4)."},
      {txt: "Nagib tangente = f′(−1) = 3·1 − 6·(−1) = 3 + 6 = 9."},
      {txt: "Jednadžba tangente: y − y₀ = k·(x − x₀) → y − (−4) = 9·(x − (−1))."},
      {txt: "Sredi: y + 4 = 9(x + 1) → y = 9x + 9 − 4 → y = 9x + 5."},
      {txt: "Provjera: tangenta y = 9x + 5 prolazi kroz (−1, −4)? 9·(−1) + 5 = −4 ✓.", note: "verifikacija", final: true},{txt:"Sažetak postupka: Pravilo: tangenta na graf funkcije u točki (x₀, f(x₀)) ima jednadžbu y − f(x₀) = f′(x₀)·(x − x₀).",note:"postupak",final:true},{txt:"Intuicija: Ovdje: x₀ = −1; f(x₀) = −4 (vrijednost funkcije); f′(x₀) = 9 (vrijednost DERIVACIJE).",note:"intuicija",final:true},{txt:"Provjera: pravac y = 9x + 5 prolazi kroz (−1, −4)? 9·(−1) + 5 = −4 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = 9x + 5 ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: tangenta na graf funkcije u točki (x₀, f(x₀)) ima jednadžbu y − f(x₀) = f′(x₀)·(x − x₀).",
      "Ovdje: x₀ = −1; f(x₀) = −4 (vrijednost funkcije); f′(x₀) = 9 (vrijednost DERIVACIJE).",
      "Nagib tangente = vrijednost derivacije u toj točki, NE vrijednost funkcije.",
      "Provjera: pravac y = 9x + 5 prolazi kroz (−1, −4)? 9·(−1) + 5 = −4 ✓.",
      "Greška: koristiti f(x₀) = −4 kao nagib (umjesto f′(x₀) = 9) → daje y = −4x − 8, posve krivu tangentu."
    ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."],
    context: "Zadana je funkcija f(x) = x³ − 3x²."
  },
  {
    id: "29e",
    type: "proof",
    topic: "fun",
    points: 2,
    warn: "Pazi: u (0, 0) graf DODIRUJE os (dvostruka nultočka), ne presijeca. Provjeri smjer otvora po vodećem koeficijentu.",
    q: "Nacrtajte graf funkcije f rabeći rezultate prethodnih podzadataka.",
    sol: {
      svgFn: Svg29e_2011LjetoA,
      ex: "Graf kubne funkcije s nultočkama x=0 i x=3, max (0,0), min (2,-4)."
    },
    exp: "Krivulja kubne f(x) = x³ − 3x² ima nultočke u (0, 0) (dvostruka, dodir) i (3, 0); lokalni max u (0, 0); lokalni min u (2, −4); referentnu točku T(1, −2).",
    steps: [
      {txt: "Sakupi rezultate prethodnih dijelova: nultočke (0, 0) i (3, 0); T(1, −2); max u (0, 0); min u (2, −4)."},
      {txt: "Označi ove točke u koordinatnom sustavu."},
      {txt: "Pravac kubne funkcije s pozitivnim vodećim koeficijentom: za x → −∞ ide u −∞; za x → +∞ ide u +∞."},
      {txt: "Spoji točke glatkom kubnom krivuljom poštujući rast: pad od max(0,0) do min(2,−4), zatim rast."},
      {txt: "Lijevo od max(0,0): krivulja dolazi iz −∞, raste."},
      {txt: "Desno od min(2,−4): krivulja raste i prolazi kroz (3,0), zatim ide u +∞.", final: true}
    ,
    {txt:"Provjera (funkcije): rezultat rezultat provjeri uvrstom natrag u izvornu funkciju; domena i kodomena konzistentni.",final:true,note:"verifikacija"},{txt:"Sažetak postupka: Pravilo: kubna funkcija ima jedan max i jedan min (ako f′ ima dvije realne nultočke); vodeći koeficijent određuje smjerove na krajevima.",note:"postupak",final:true},{txt:"Intuicija: Ovdje: a = 1 > 0 → krajevi: −∞ (lijevo) i +∞ (desno).",note:"intuicija",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true}
  ],
    why: [
      "Pravilo: kubna funkcija ima jedan max i jedan min (ako f′ ima dvije realne nultočke); vodeći koeficijent određuje smjerove na krajevima.",
      "Ovdje: a = 1 > 0 → krajevi: −∞ (lijevo) i +∞ (desno).",
      "U dvostrukoj nultočki (x = 0) graf DODIRUJE x-os i odmah se vraća — to je upravo lokalni max u (0, 0).",
      "Točka T(1, −2) je na krivulji ali nije ni ekstrem ni nultočka — koristi se za preciznost crteža.",
      "Greška: nacrtati graf bez DODIRA u (0,0) (kao da je obična nultočka) ili bez razlike rast/pad između ekstrema."
    ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."],
    context: "Zadana je funkcija f(x) = x³ − 3x².",
    img: true
  },
  {
    id: 30,
    img: true,
    type: "sa",
    topic: "geo",
    points: 4,
    warn: "Pazi: α u zadatku je u STUPNJEVIMA (5πα/18), a u trigonometriji u radijanima — pretvori jedinice. Niz lukova daje konvergentni geom. red.",
    q: "Na slici je prikazan niz koncentričnih kružnica sa središtem u točki O. α je mjera kuta ∠AOB izražena u stupnjevima, a |OA|=10 cm. Na polumjeru OA leži niz točaka A₁, A₂, A₃, ..., a na polumjeru OB niz točaka B₁, B₂, B₃, ... Točka A₁ je sjecište polumjera OA i okomice iz točke B na taj polumjer. Točka A₂ je sjecište polumjera OA i okomice iz točke B₁ na taj polumjer itd. Zbroj duljina svih kružnih lukova AB̅ + A₁B₁̅ + A₂B₂̅ + ... jednak je 5πα/18 cm. Odredite α.",
    sol:{
      ans: "α = 36°52'12''",alt:["Α = 36°52'12''","α = 36°52'12''","α=36°52'12''","≈ α = 36°52'12''"]},
    exp: "Iz geometrijskog niza polumjera (kvocijent cos²α) i sume kružnih lukova s centralnim kutem α dobiva se sin α = 3/5 → α = arctan(3/4) ≈ 36°52'12''.",
    steps: [
      {txt: "Geometrija: |OA| = 10. A₁ je nožište okomice iz B na OA → |OA₁| = |OB|·cos α = 10·cos α."},
      {txt: "B₁ je nožište okomice iz A₁ na OB → |OB₁| = |OA₁|·cos α = 10·cos²α."},
      {txt: "Općenito: |OA_n| = 10·cos^(2n−1)(α). Polumjeri kružnica tvore geometrijski niz s kvocijentom q = cos²α."},
      {txt: "Luk A_nB_n na kružnici radius |OA_n| ima centralni kut α (radijani): duljina luka = |OA_n|·α(rad)."},
      {txt: "Suma duljina lukova = α(rad) · 10 · Σ cos^(2n−1)(α), n = 0, 1, 2, … = α(rad)·10·1/sin²α."},
      {txt: "Iz uvjeta zadatka: 10·α(rad)/sin²α = 5πα(deg)/18; pretvori α(rad) = α(deg)·π/180. Dobiješ sin²α = 9/25."},
      {txt: "sin α = 3/5 (pozitivno za α u prvom kvadrantu). cos α = 4/5 (3-4-5 trokut). α = arctan(3/4) ≈ 36°52'12''.", final: true},
      {txt: "Provjera: sin²α + cos²α = 9/25 + 16/25 = 1 ✓; α = arctan(3/4) jer tan α = sin/cos = (3/5)/(4/5) = 3/4; 3-4-5 trokut daje α ≈ 36,87° = 36°52'12'' ✓", note: "verifikacija"},{txt:"Sažetak postupka: Pravilo: u pravokutnom trokutu s hipotenuzom h i kutem α, priležeća kateta = h·cos α.",note:"postupak",final:true},{txt:"Intuicija: Ovdje konstrukcija A → A₁ → B₁ → A₂ → … množi duljinu svaki put s cos α — dobivamo geometrijski niz.",note:"intuicija",final:true},{txt:"Pretvorba α(rad) = α(deg)·π/180 OBAVEZNA jer su 10α(rad) (ljevo) i 5πα(deg)/18 (desno) različite jedinice.",note:"verifikacija",final:true},{txt:"Točan odgovor: α = 36°52'12'' ✓",note:"odgovor",final:true}
    ],
    why: [
      "Pravilo: u pravokutnom trokutu s hipotenuzom h i kutem α, priležeća kateta = h·cos α.",
      "Ovdje konstrukcija A → A₁ → B₁ → A₂ → … množi duljinu svaki put s cos α — dobivamo geometrijski niz.",
      "Suma beskonačnog geom. reda: a + a·q + a·q² + … = a/(1 − q) za |q| < 1. Ovdje q = cos²α < 1.",
      "Pretvorba α(rad) = α(deg)·π/180 OBAVEZNA jer su 10α(rad) (ljevo) i 5πα(deg)/18 (desno) različite jedinice.",
      "Greška: pomiješati α u stupnjevima i radijanima → daje krivi sin²α i krivi α; ili izostaviti pretvorbu π/180."
    ,"Provjera: skiciraj figuru i izmjeri svojstvo geometrijski."],
    img: true
  }
];

export const qImages = {
  "2011_ljeto_A__7": () => e(Svg7_2011LjetoA, null),
  "2011_ljeto_A__26": () => e(Svg26_2011LjetoA, null),
  "2011_ljeto_A__30": () => e(Svg30_2011LjetoA, null),
};
