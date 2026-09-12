// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgT28_2019Blj(){
  const W=280,H=68;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const hdr=["Prije\u0111eni put\nu kilometrima (km)","0","225","480"];
  const vals=["Koli\u010dina goriva u\nspremniku u litrama (L)","41,2","26,8","10,48"];
  const cw=[130,45,45,45];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* blue header row bg */
    e("rect",{x:0,y:0,width:W,height:34,fill:"var(--blue)",fillOpacity:0.10}),
    /* header label col */
    e("rect",{x:0,y:0,width:cw[0],height:H,fill:"var(--blue)",fillOpacity:0.08}),
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.2}),
    e("line",{x1:0,y1:34,x2:W,y2:34,stroke:"var(--bdr)",strokeWidth:1}),
    ...(()=>{let x=0;return cw.slice(0,-1).map((_,i)=>{x+=cw[i];return e("line",{key:"vc"+i,x1:x,y1:0,x2:x,y2:H,stroke:"var(--bdr)",strokeWidth:.7})})})(),
    e("rect",{x:0,y:0,width:cw[0],height:H,fill:"var(--muted)",fillOpacity:0.12}),
    ...(()=>{let x=0;return hdr.map((t,i)=>{const xx=x+cw[i]/2;x+=cw[i];return e("text",{key:"h"+i,x:xx,y:i===0?14:22,textAnchor:"middle",fontSize:i===0?8:12,fill:"var(--text)"},
      i===0?"Prije\u0111eni put":t)})})(),
    e("text",{x:cw[0]/2,y:26,textAnchor:"middle",fontSize:8,fill:"var(--text)"},"u kilometrima (km)"),
    ...(()=>{let x=0;return vals.map((t,i)=>{const xx=x+cw[i]/2;x+=cw[i];return e("text",{key:"tv"+i,x:xx,y:i===0?50:55,textAnchor:"middle",fontSize:i===0?8:11,fill:i===0?"var(--text)":"var(--blue)"},
      i===0?"Koli\u010dina goriva (L)":t)})})()
  );
}

function Svg27_2019Blj(){
  const W=240,H=260,pad={l:30,r:14,t:14,b:30};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-2,xMax=6,yMin=-5.5,yMax=6.5;
  const iW=W-pad.l-pad.r, iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  /* f(x) = -(x-2)^2 + 5 */
  const fPts=[];
  for(let x=-1.5;x<=5.5;x+=0.08){
    const y=-(x-2)*(x-2)+5;
    if(y>=yMin&&y<=yMax) fPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  /* g(x) = 3x - 1 */
  const gPts=[];
  for(let x=-1.5;x<=2.5;x+=0.1){
    const y=3*x-1;
    if(y>=yMin&&y<=yMax) gPts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  /* Cjelobrojne točke na f */
  const fInt=[[-1,-4],[0,1],[1,4],[2,5],[3,4],[4,1],[5,-4]];
  /* Cjelobrojne točke na g */
  const gInt=[[-1,-4],[0,-1],[1,2],[2,5]];
  const gridX=[-1,0,1,2,3,4,5], gridY=[-5,-4,-3,-2,-1,0,1,2,3,4,5,6];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    ...gridX.map(x=>e("line",{key:"gx"+x,x1:toX(x),y1:pad.t,x2:toX(x),y2:pad.t+iH,stroke:"var(--bdr)",strokeWidth:.3})),
    ...gridY.map(y=>e("line",{key:"gy"+y,x1:pad.l,y1:toY(y),x2:pad.l+iW,y2:toY(y),stroke:"var(--bdr)",strokeWidth:.3})),
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{x1:ox,y1:pad.t,x2:ox,y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-4},${oy-2.5} ${pad.l+iW-4},${oy+2.5}`,fill:"var(--text)"}),
    e("polygon",{points:`${ox},${pad.t} ${ox-2.5},${pad.t+4} ${ox+2.5},${pad.t+4}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+3,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"x"),
    e("text",{x:ox+5,y:pad.t+3,fontSize:10,fontStyle:"italic",fill:"var(--text)"},"y"),
    e("text",{x:ox-10,y:oy+12,fontSize:8,fill:"var(--muted)"},"0"),
    e("circle",{cx:toX(1),cy:oy,r:1.5,fill:_RED}),
    e("text",{x:toX(1),y:oy+12,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},"1"),
    e("circle",{cx:ox,cy:toY(1),r:1.5,fill:_RED}),
    e("text",{x:ox-10,y:toY(1)+3,fontSize:8,fill:"var(--muted)"},"1"),
    /* f: parabola — plava */
    fPts.length>1&&e("polyline",{points:fPts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2,strokeLinejoin:"round"}),
    /* g: linearna — narančasta */
    gPts.length>1&&e("polyline",{points:gPts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2,strokeLinejoin:"round"}),
    /* cjelobrojne točke na f — plave */
    ...fInt.map(([x,y])=>e("circle",{key:"f"+x,cx:toX(x),cy:toY(y),r:3.5,fill:"var(--blue)"})),
    /* cjelobrojne točke na g — narančaste */
    ...gInt.map(([x,y])=>e("circle",{key:"g"+x+"g",cx:toX(x),cy:toY(y),r:3.5,fill:_RED})),
    /* oznake f i g */
    e("text",{x:toX(3.2),y:toY(3.5),fontSize:13,fontWeight:"bold",fontStyle:"italic",fill:"var(--blue)"},"f"),
    e("text",{x:toX(1.5),y:toY(4.5),fontSize:13,fontWeight:"bold",fontStyle:"italic",fill:_BLUE},"g")
  );
}

function Svg26a_2019Blj(){
  const W=220,H=170;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:30,y:145},B={x:185,y:145};
  const D={x:30,y:30},C={x:185,y:80};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("polygon",{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`,
      fill:"var(--blue)",fillOpacity:0.07,stroke:"var(--blue)",strokeWidth:1.5}),
    /* pravi kut u A */
    e("rect",{x:A.x,y:A.y-8,width:8,height:8,fill:"none",stroke:"var(--blue)",strokeWidth:0.8}),
    /* pravi kut u B */
    e("rect",{x:B.x-8,y:B.y-8,width:8,height:8,fill:"none",stroke:"var(--blue)",strokeWidth:0.8}),
    /* oznake vrhova */
    e("text",{x:A.x-4,y:A.y+14,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"A"),
    e("text",{x:B.x+4,y:B.y+14,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"B"),
    e("text",{x:C.x+6,y:C.y+4,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"C"),
    e("text",{x:D.x-4,y:D.y-6,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"D"),
    /* duljine */
    e("text",{x:(A.x+B.x)/2,y:A.y+16,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"var(--blue)"},"10 cm"),
    e("text",{x:B.x+10,y:(B.y+C.y)/2+4,fontSize:11,fontWeight:"bold",fill:"var(--blue)"},"4 cm"),
    e("text",{x:A.x-24,y:(A.y+D.y)/2+4,fontSize:11,fontWeight:"bold",fill:"var(--blue)"},"6,5 cm")
  );
}

function Svg25b_2019Blj(){
  const W=200,H=180;
  const cx=90,cy=95,R=65;
  const total=481+1952+3327;
  const a1=481/total*2*Math.PI, a2=1952/total*2*Math.PI;
  const start0=-Math.PI/2;
  const end1=start0+a1, end2=end1+a2;
  const p=a=>({x:cx+R*Math.cos(a),y:cy+R*Math.sin(a)});
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* sektor 3327 (najve\u0107i) — plavi */
    e("path",{d:`M${cx},${cy} L${p(end2).x},${p(end2).y} A${R},${R} 0 1,1 ${p(start0).x},${p(start0).y} Z`,
      fill:"var(--blue)",fillOpacity:0.18,stroke:"var(--bdr)",strokeWidth:0.5}),
    /* sektor 481 (mali, gore) — zelenkasti */
    e("path",{d:`M${cx},${cy} L${p(start0).x},${p(start0).y} A${R},${R} 0 0,1 ${p(end1).x},${p(end1).y} Z`,
      fill:"#4ade80",fillOpacity:0.25,stroke:"var(--bdr)",strokeWidth:0.5}),
    /* sektor 1952 (\u03b1) — naran\u010dasti/crvenkasti */
    e("path",{d:`M${cx},${cy} L${p(end1).x},${p(end1).y} A${R},${R} 0 0,1 ${p(end2).x},${p(end2).y} Z`,
      fill:"#f97316",fillOpacity:0.25,stroke:"var(--bdr)",strokeWidth:0.5}),
    /* okvir kruga */
    e("circle",{cx:cx,cy:cy,r:R,fill:"none",stroke:"var(--text)",strokeWidth:1.2}),
    /* crte sektora */
    e("line",{x1:cx,y1:cy,x2:p(start0).x,y2:p(start0).y,stroke:"var(--text)",strokeWidth:1}),
    e("line",{x1:cx,y1:cy,x2:p(end1).x,y2:p(end1).y,stroke:"var(--text)",strokeWidth:1}),
    e("line",{x1:cx,y1:cy,x2:p(end2).x,y2:p(end2).y,stroke:"var(--text)",strokeWidth:1}),
    /* oznake */
    e("text",{x:cx+8,y:cy-R-8,fontSize:12,fontWeight:"bold",fill:"#16a34a"},"481"),
    e("text",{x:cx+R+8,y:cy+10,fontSize:12,fontWeight:"bold",fill:"#ea580c"},"1952"),
    e("text",{x:cx-R-35,y:cy+10,fontSize:12,fontWeight:"bold",fill:"var(--blue)"},"3327"),
    /* \u03b1 oznaka */
    e("text",{x:cx+18,y:cy+12,fontSize:13,fontWeight:"bold",fontStyle:"italic",fill:"#ea580c"},"\u03b1")
  );
}

function Svg25a_2019Blj(){
  const W=220,H=150;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const A={x:15,y:130},B={x:195,y:130},C={x:195,y:30},D={x:15,y:30};
  const E={x:152,y:130};
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* pravokutnik ispuna */
    e("polygon",{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`,
      fill:"var(--blue)",fillOpacity:0.06,stroke:"var(--blue)",strokeWidth:1.5}),
    /* dijagonale CE i DE u nijansi */
    e("line",{x1:C.x,y1:C.y,x2:E.x,y2:E.y,stroke:_BLUE,strokeWidth:1.2}),
    e("line",{x1:D.x,y1:D.y,x2:E.x,y2:E.y,stroke:_BLUE,strokeWidth:1.2}),
    /* pravi kut u E */
    (()=>{const sz=7;
      const u1x=(C.x-E.x),u1y=(C.y-E.y),l1=Math.sqrt(u1x*u1x+u1y*u1y);
      const u2x=(D.x-E.x),u2y=(D.y-E.y),l2=Math.sqrt(u2x*u2x+u2y*u2y);
      const a1x=u1x/l1*sz,a1y=u1y/l1*sz,a2x=u2x/l2*sz,a2y=u2y/l2*sz;
      return e("path",{d:`M${E.x+a1x},${E.y+a1y} L${E.x+a1x+a2x},${E.y+a1y+a2y} L${E.x+a2x},${E.y+a2y}`,
        fill:"none",stroke:"var(--blue)",strokeWidth:0.8})})(),
    /* oznake vrhova */
    e("text",{x:A.x-4,y:A.y+14,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"A"),
    e("text",{x:B.x+4,y:B.y+14,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"B"),
    e("text",{x:C.x+4,y:C.y-2,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"C"),
    e("text",{x:D.x-4,y:D.y-4,fontSize:13,fontStyle:"italic",fill:"var(--blue)"},"D"),
    e("text",{x:E.x-2,y:E.y+14,fontSize:13,fontWeight:"bold",fontStyle:"italic",fill:"var(--blue)"},"E"),
    e("circle",{cx:E.x,cy:E.y,r:3,fill:"var(--blue)"})
  );
}

function SvgT19a_2019Blj(){
  const W=340,H=70;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const hdr=["Mjesec","I.","II.","III.","IV.","V.","VI."];
  const vals=["Neto pla\u0107a (kn)","7787","7911","8620","7712","7832","8253"];
  const cw=[90,38,38,38,38,38,38];
  let cx=0;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    /* header row blue bg */
    e("rect",{x:0,y:0,width:W,height:35,fill:"var(--blue)",fillOpacity:0.10}),
    /* header label col darker */
    e("rect",{x:0,y:0,width:cw[0],height:H,fill:"var(--blue)",fillOpacity:0.08}),
    /* okvir */
    e("rect",{x:0,y:0,width:W,height:H,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:1.2}),
    e("line",{x1:0,y1:35,x2:W,y2:35,stroke:"var(--bdr)",strokeWidth:1}),
    ...cw.slice(0,-1).map((_,i)=>{cx+=cw[i];return e("line",{key:"vl"+i,x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--bdr)",strokeWidth:.7})}),
    /* header tekst */
    ...(()=>{let x=0;return hdr.map((t,i)=>{const xx=x+cw[i]/2;x+=cw[i];return e("text",{key:"h"+i,x:xx,y:22,textAnchor:"middle",fontSize:i===0?10:11,fontWeight:i===0?"bold":"normal",fill:i===0?"var(--text)":"var(--blue)"},t)})})(),
    /* values tekst */
    ...(()=>{let x=0;return vals.map((t,i)=>{const xx=x+cw[i]/2;x+=cw[i];return e("text",{key:"tv"+i,x:xx,y:55,textAnchor:"middle",fontSize:i===0?9:11,fontWeight:i===0?"bold":"normal",fill:i===0?"var(--text)":"var(--blue)"},t)})})()
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: gleda se PRVA odbačena znamenka (≥5 zaokružuje gore); provjeri svaku.",topic:"br",points:1,
  q:"Koji od navedenih brojeva nije ispravno zaokružen broj 4,5726?",
  opts:["5","4,6","4,58","4,573"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo zaokruživanja: gleda se PRVA znamenka KOJU IZBACUJEMO. Ako je ≥ 5, zaokružimo naviše; ako je < 5, naniže.","Za 4,5726 zaokruženo na 2 decimale: zadržavamo 4,57; iduća (treća) znamenka je 2 — manja od 5 → zaokruživanje OSTAJE 4,57. Opcija C (4,58) implicira da je iduća znamenka bila ≥ 5, što nije slučaj.","Intuicija: 4,5726 je BLIŽE 4,57 nego 4,58 (razlika 0,0026 vs 0,0074), tako da je 4,57 ispravno.","Česta greška: zaokruživati 'lančano' — npr. 4,5726 → 4,573 → 4,58, što je dvostruko zaokruživanje (krivo). Uvijek gledamo IZVORNI broj.","Alt metoda: pretvori 4,5726 u razlomak 45726/10000 i provjeri u kojem je intervalu [4,57; 4,58] kojem je rubu bliži.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."],
  steps:[
    {txt:"Zaokružujemo broj 4,5726 na različite decimale i provjeravamo svaki odgovor."},
    {txt:"Na cijeli broj (jedinice): 4,5726 → 5 (jer je 5 ≥ 5, zaokružujemo naviše). Točno ⇒ A je ispravno."},
    {txt:"Na 1 decimalu: 4,5726 → 4,6 (jer je iduća znamenka 7 ≥ 5). Točno ⇒ B je ispravno."},
    {txt:"Na 2 decimale: 4,5726 → 4,57 (jer je iduća znamenka 2 < 5). Ali odgovor C kaže 4,58 — krivo zaokruženo!",final:true},
    {txt:"Na 3 decimale: 4,5726 → 4,573 (jer je iduća znamenka 6 ≥ 5). Točno ⇒ D je ispravno."},
    {txt:"Točan odgovor: C (4,58 nije ispravno zaokruženo).",final:true,note:"odgovor"},
    {txt:"Provjera: 4,5726 ima trećeznamenku 2, što znači zaokruživanje DOLJE na 2 decimale → 4,57, ne 4,58 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) ✓ točno zaokruženo; B) ✓ točno; C) krivi smjer zaokruživanja (zaokružili gore umjesto dolje); D) ✓ točno.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo zaokruživanja: gleda se PRVA znamenka KOJU IZBACUJEMO. Ako je ≥ 5, zaokružimo naviše; ako je < 5, naniže.",note:"postupak",final:true},{txt:"Intuicija: Za 4,5726 zaokruženo na 2 decimale: zadržavamo 4,57; iduća (treća) znamenka je 2 — manja od 5 → zaokruživanje OSTAJE 4,57. Opcija C (4,58) implicira da je iduća znamenka bila ≥ 5, što nije slučaj.",note:"intuicija",final:true}
  ]},
  {id:2,type:"mc",warn:"Pazi: prebroji cijele brojeve u svakom intervalu (pazi na otvoreno/zatvoreno).",topic:"br",points:1,
  q:"Koji od navedenih intervala sadrži točno tri cijela broja?",
  opts:["[3, 6]","⟨4, 7]","[5, 9⟩","⟨6, 9⟩"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: u intervalu uglate [ ] uključuju rub, šiljate ⟨ ⟩ isključuju. Broj cijelih brojeva u intervalu = (desni cijeli − lijevi cijeli) + 1 ako uključuje oba; oduzmi 1 za svaki otvoreni rub.","Formula za broj cijelih u intervalu od a do b: ako [a,b]: floor(b) − ceil(a) + 1. Za [3,6]: 6 − 3 + 1 = 4. Za ⟨4,7]: 7 − 5 + 1 = 3 ✓.","Intuicija: prebroji ručno cijele brojeve između rubova, uključujući rub ako je [ ] ili ] i isključujući ako je ⟨ ili ⟩.","Česta greška: zaboraviti pravilo zagrada — npr. čitati ⟨4, 7] kao [4, 7] i brojati 4, 5, 6, 7 = 4 (krivo). Lijevi rub je OTVOREN (4 nije uključen).","Alt metoda: nacrtati brojevni pravac, označiti rubove (puna točka za zatvoreni, prazna za otvoreni), prebrojati cijele između.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100)."],
  steps:[
    {txt:"Cijeli brojevi između rubova intervala — koliko ih ima ovisi o tipu rubova: [ ] zatvoreni (uključuje rub), ⟨ ⟩ otvoreni (ne uključuje)."},
    {txt:"A) [3, 6]: 3, 4, 5, 6 — 4 cijela broja. Nije 3."},
    {txt:"B) ⟨4, 7]: 5, 6, 7 — 3 cijela broja. Točno!",final:true},
    {txt:"C) [5, 9⟩: 5, 6, 7, 8 — 4 cijela broja. Nije 3."},
    {txt:"D) ⟨6, 9⟩: 7, 8 — 2 cijela broja. Nije 3."},
    {txt:"Točan odgovor: B.",final:true,note:"odgovor"},
    {txt:"Provjera: B ⟨4, 7] ⇒ uključuje 7 (zatvoreni desni), ne uključuje 4 (otvoreni lijevi). Brojimo: 5, 6, 7 = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) krivi tip rubova (oba zatvorena → 4 broja); C) krivi tip rubova; D) krivi tip rubova (oba otvorena → 2 broja).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: u intervalu uglate [ ] uključuju rub, šiljate ⟨ ⟩ isključuju. Broj cijelih brojeva u intervalu = (desni cijeli − lijevi cijeli) + 1 ako uključuje oba; oduzmi 1 za svaki otvoreni rub.",note:"postupak",final:true},{txt:"Intuicija: Formula za broj cijelih u intervalu od a do b: ako [a,b]: floor(b) − ceil(a) + 1. Za [3,6]: 6 − 3 + 1 = 4. Za ⟨4,7]: 7 − 5 + 1 = 3 ✓.",note:"intuicija",final:true}
  ]},
  {id:3,type:"mc",warn:"Pazi: 3⁻² = 1/9, −3⁻² = −1/9, −3² = −9, (−3)² = 9; pazi gdje minus ulazi u potenciju.",topic:"br",points:1,
  q:"Zadani su brojevi K = 3⁻², L = −3⁻², M = −3², N = (−3)². Što je od navedenoga točno?",
  opts:["K = L","K < M","L > N","M ≠ N"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo redoslijeda: bez zagrada, potencija ima veći prioritet od minusa. −3² znači −(3²) = −9. Tek (−3)² uračunava minus u kvadriranje, što daje +9.","Pravilo negativnog eksponenta: a⁻ⁿ = 1/aⁿ. Tako je 3⁻² = 1/9, a −3⁻² = −(1/9) = −1/9.","Intuicija: dva pravila koja se kombiniraju: 1) eksponent prije minusa (osim u zagradi); 2) negativni eksponent = recipročna potencija. Razlikuj K (pozitivan) i L (negativan).","Česta greška: misliti da −3² = 9 (krivo — zaboravljen redoslijed). Druga: misliti da je 3⁻² negativan broj (krivo — minus je u eksponentu, ne u znaku broja).","Alt metoda: napiši svaki broj kao razlomak ili decimalni: K=0,111, L=−0,111, M=−9, N=9. Tada je vizualno jasno koja je nejednakost točna.","Provjera: poredaj brojeve na pravcu od najmanjeg do najvećeg: M(−9) < L(−1/9) < K(1/9) < N(9). Sad sve tvrdnje provjeri brzo."],
  steps:[
    {txt:"Izračunaj svaki broj točno:"},
    {txt:"K = 3⁻² = 1/3² = 1/9 ≈ 0,111 (pozitivan)"},
    {txt:"L = −3⁻² = −(3⁻²) = −1/9 ≈ −0,111 (negativan)"},
    {txt:"M = −3² = −(3²) = −9 (negativan)"},
    {txt:"N = (−3)² = (−3)·(−3) = 9 (pozitivan)"},
    {txt:"Provjeri svaku tvrdnju:"},
    {txt:"A) K = L? 1/9 ≠ −1/9 ✗"},
    {txt:"B) K < M? 1/9 < −9? Pozitivan < negativan ✗"},
    {txt:"C) L > N? −1/9 > 9? Negativan > pozitivan ✗"},
    {txt:"D) M ≠ N? −9 ≠ 9 ✓",final:true},
    {txt:"Točan odgovor: D.",final:true,note:"odgovor"},
    {txt:"Provjera: ključ je razlika između −3² (negacija primijenjena POSLIJE kvadriranja, = −9) i (−3)² (kvadriranje primijenjeno na cijelo, = 9) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) misli da je − znak na potenciji ekvivalent; B) krivi predznak; C) krivi predznak.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo redoslijeda: bez zagrada, potencija ima veći prioritet od minusa. −3² znači −(3²) = −9. Tek (−3)² uračunava minus u kvadriranje, što daje +9.",note:"postupak",final:true},{txt:"Intuicija: Pravilo negativnog eksponenta: a⁻ⁿ = 1/aⁿ. Tako je 3⁻² = 1/9, a −3⁻² = −(1/9) = −1/9.",note:"intuicija",final:true}
  ]},
  {id:4,type:"mc",warn:"Pazi: pomnoži s 6 (zajednički nazivnik) da ukloniš razlomke, pa riješi po x.",topic:"al",points:1,
  q:"Koja od navedenih tvrdnji vrijedi za rješenje jednadžbe [FRAC:2|3](x − 1) = (x − 3)/2 − 1?",
  opts:["x ≤ −10","−10 < x ≤ −5","−5 < x ≤ 10","x > 10"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Postupak za linearnu jednadžbu s razlomcima: 1) pomnoži obje strane sa zajedničkim nazivnikom da ukloniš razlomke; 2) razvij zagrade; 3) prebaci x-ove na jednu stranu, brojeve na drugu; 4) riješi.","Pravilo: u jednadžbi sa razlomcima, množenje obje strane sa LCM nazivnika je legalna operacija (čuva ekvivalentnost) ako LCM ≠ 0.","Intuicija: rješenje x = −11 je 'jako daleko ulijevo' — provjeri da ima smisla. Lijeva strana negativna (mali negativan razlomak puta veliki minus = negativan); desna isto negativna (negativan razlomak − 1).","Česta greška: zaboraviti množenjem sa 6 cijelu desnu stranu (treba i −1 pomnožiti s 6, daje −6, ne −1). Druga: zaboraviti razviti zagradu 3(x − 3) = 3x − 9 (ne 3x − 3).","Alt metoda: rastaviti svaki razlomak posebno — [FRAC:2|3](x − 1) = [FRAC:2x|3] − [FRAC:2|3] = (2x − 2)/3 i slično za desnu, pa raditi s razlomcima do kraja.","Provjera: vrati x = −11 u izvornu — obje strane moraju dati isti broj (−8). Ako ne, postupak je krivi."],
  steps:[
    {txt:"Riješi jednadžbu, zatim provjeri koji raspon zadovoljava rješenje."},
    {txt:"[FRAC:2|3](x − 1) = [FRAC:x − 3|2] − 1"},
    {txt:"Pomnoži s 6 (zajednički nazivnik za 3 i 2): 6·[FRAC:2|3](x − 1) = 6·[FRAC:x − 3|2] − 6"},
    {txt:"4(x − 1) = 3(x − 3) − 6"},
    {txt:"4x − 4 = 3x − 9 − 6"},
    {txt:"4x − 4 = 3x − 15"},
    {txt:"4x − 3x = −15 + 4"},
    {txt:"x = −11",final:true},
    {txt:"Provjeri raspon: x = −11. A) x ≤ −10? −11 ≤ −10 ✓",final:true,note:"odgovor"},
    {txt:"Provjera supstitucijom: [FRAC:2|3](−11 − 1) = [FRAC:2|3](−12) = −8. Desna: [FRAC:−11 − 3|2] − 1 = [FRAC:−14|2] − 1 = −7 − 1 = −8 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) −10 < x ≤ −5 (računska greška, rezultat blizu pravom); C) −5 < x ≤ 10 (predznakom griješka); D) x > 10 (preokrenuti znakovi).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Postupak za linearnu jednadžbu s razlomcima: 1) pomnoži obje strane sa zajedničkim nazivnikom da ukloniš razlomke; 2) razvij zagrade; 3) prebaci x-ove na jednu stranu, brojeve na drugu; 4) riješi.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: u jednadžbi sa razlomcima, množenje obje strane sa LCM nazivnika je legalna operacija (čuva ekvivalentnost) ako LCM ≠ 0.",note:"intuicija",final:true}
  ]},
  {id:5,type:"mc",warn:"Pazi: √((x + 12)² + (y − 8)²) = 5; provjeri koja točka zadovoljava.",topic:"anal",points:1,
  q:"Koja je od navedenih točaka od točke T(−12, 8) udaljena za 5?",
  opts:["(−17, 8)","(5, 8)","(−12, 5)","(−12, −17)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: udaljenost u koord. ravnini između P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂ − x₁)² + (y₂ − y₁)²) (Pitagora primijenjena na razlike koordinata).","Intuicija: kad obje točke imaju ISTU y-koordinatu (kao A i T koji oba imaju y = 8), udaljenost je čista x-razlika: |x₂ − x₁| = |−17 − (−12)| = 5. To je horizontalna udaljenost.","Specijalno: ako se točka razlikuje od T samo po x-osi za 5 (ili −5), udaljenost je točno 5. Tako (−12 + 5, 8) = (−7, 8) ili (−12 − 5, 8) = (−17, 8) zadovoljavaju. Opcija A je (−17, 8). ✓","Česta greška: ne pratiti predznake u razlici. (−17) − (−12) = −17 + 12 = −5, a |−5| = 5. Druga: računati udaljenost kao samo |x| ili samo |y| bez kvadriranja.","Alt metoda: nacrtati T i provjeriti opcije na crtežu — odmah se vidi koja je na kružnici polumjera 5 oko T.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost."],
  steps:[
    {txt:"Točka A(x, y) je udaljena za d od točke T(x₀, y₀) ako d = √((x − x₀)² + (y − y₀)²)."},
    {txt:"Izračunaj udaljenost svake od opcija od T(−12, 8):"},
    {txt:"A) (−17, 8): d = √((−17 − (−12))² + (8 − 8)²) = √((−5)² + 0²) = √25 = 5 ✓",final:true},
    {txt:"B) (5, 8): d = √((5 − (−12))² + 0²) = √(17²) = 17"},
    {txt:"C) (−12, 5): d = √(0² + (5 − 8)²) = √(−3)² = 3"},
    {txt:"D) (−12, −17): d = √(0² + (−17 − 8)²) = √(−25)² = 25"},
    {txt:"Točan odgovor: A.",final:true,note:"odgovor"},
    {txt:"Provjera: |−17 − (−12)| = |−5| = 5, y koordinate iste → udaljenost je čisto horizontalna razlika = 5 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) preokrenutu razliku (5 − (−12) = 17 umjesto −5); C) krivu koordinatu (samo y, pa razlika 3); D) krivu apsolutnu razliku (25 cijela udaljenost po y).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: udaljenost u koord. ravnini između P(x₁, y₁) i Q(x₂, y₂) je d = √((x₂ − x₁)² + (y₂ − y₁)²) (Pitagora primijenjena na razlike koordinata).",note:"postupak",final:true},{txt:"Intuicija: kad obje točke imaju ISTU y-koordinatu (kao A i T koji oba imaju y = 8), udaljenost je čista x-razlika: |x₂ − x₁| = |−17 − (−12)| = 5. To je horizontalna udaljenost.",note:"intuicija",final:true}
  ]},
  {id:6,type:"mc",warn:"Pazi: pomnoži s R, podijeli s QvB → R = mv²/(QvB).",topic:"al",points:1,
  q:"Ako je QvB = m · v²/R, čemu je jednako R?",
  opts:["R = v/(mQB)","R = mv²/QB","R = m·QB/v","R = QB/(mv)"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo izoliranja varijable: identificiraj gdje je nepoznata (R u nazivniku desne strane), pa primijeni 'reverzne' operacije: ako je R u nazivniku → pomnoži; ako bi bila množitelj → podijeli.","Postupak: QvB = m·v²/R. Cilj: R sam na jednoj strani. Korak 1: ×R obje strane → QvB·R = m·v². Korak 2: ÷(QvB) obje strane → R = m·v²/(QvB).","Intuicija: ovo je fizikalna formula za radijus kružnog gibanja čestice u magnetskom polju. R raste s masom m i kvadratom brzine v² (proporcionalno); pada s nabojem Q, brzinom v i jakosti polja B (obrnuto proporcionalno).","Česta greška: zaboraviti kvadrat na v u brojniku (npr. dobiti v/(QB) umjesto v²/(QB)). Druga: zamijeniti m i v² (npr. v²/(mQB)).","Alt metoda: zapisati QvB · R = mv² i podijeliti s QvB direktno — bez treba dva koraka, samo račun.","Provjera dimenzionalna: ako m je masa [kg], v² je [m²/s²], onda mv² je [kg·m²/s²] = [J]. QvB je [C·m/s·T] = [N]. R = J/N = m (metar) ✓ — radijus."],
  steps:[
    {txt:"Polazna formula: QvB = m·v²/R."},
    {txt:"Cilj: izolirati R. R je u nazivniku, pa pomnoži obje strane s R: QvB · R = m · v²."},
    {txt:"Sad podijeli obje strane s QvB: R = m·v² / (QvB).",final:true},
    {txt:"Točan odgovor: B) R = mv²/(QvB).",final:true,note:"odgovor"},
    {txt:"Provjera substitucijom: ako je R = mv²/(QvB), onda m·v²/R = m·v²·(QvB)/(mv²) = QvB ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) R = v/(mQB) — krivi položaj v² i drugih (možda zaboravio kvadrat); C) R = m·QB/v — krivo dijeljenje s v²; D) R = QB/(mv) — krivi raspored.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo izoliranja varijable: identificiraj gdje je nepoznata (R u nazivniku desne strane), pa primijeni 'reverzne' operacije: ako je R u nazivniku → pomnoži; ako bi bila množitelj → podijeli.",note:"postupak",final:true},{txt:"Intuicija: Postupak: QvB = m·v²/R. Cilj: R sam na jednoj strani. Korak 1: ×R obje strane → QvB·R = m·v². Korak 2: ÷(QvB) obje strane → R = m·v²/(QvB).",note:"intuicija",final:true}
  ]},
  {id:7,type:"mc",warn:"Pazi: svedi sve na iste jedinice (npr. dm: 5 m = 50 dm, 4 mm = 0,04 dm) prije množenja.",topic:"geom",points:1,
  q:"Koliki je volumen (obujam) kvadra čiji su bridovi duljina 5 m, 2 dm i 4 mm?",
  opts:["0,004 cm³","0,4 cm³","400 cm³","4000 cm³"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: V kvadra = a · b · c. Svi bridovi MORAJU biti u istoj jedinici, ili volumen u kubičnoj jedinici neće biti ispravan.","Pretvorbe jedinica duljine: 1 m = 10 dm = 100 cm = 1000 mm. Brojevi rastu prema manjim jedinicama. Tako 5 m = 5·100 cm = 500 cm; 2 dm = 2·10 cm = 20 cm; 4 mm = 4/10 cm = 0,4 cm.","Intuicija: 5m × 2dm × 4mm — kvadar je dugačak (5m), srednje širok (20cm), vrlo tanak (4mm). Volumen u cm³ je 4000 cm³ ≈ kutija veličine 4 litre.","Česta greška 1: ne pretvoriti u istu jedinicu — npr. 5 · 2 · 4 = 40 (krivi rezultat). Greška 2: pretvoriti, ali pogriješiti smjer — npr. 5 m = 0,5 cm umjesto 500 cm.","Alt metoda: koristiti m³ — 5 m × 0,2 m × 0,004 m = 0,004 m³. Pretvoriti u cm³: 1 m³ = 1 000 000 cm³, pa 0,004 m³ = 4 000 cm³ ✓","Provjera reda veličine: 5 m je 500 cm; 2 dm je 20 cm; 4 mm je manje od 1 cm. Volumen mora biti veći od 500 · 20 · 0,1 = 1000 cm³, ali manji od 500 · 20 · 1 = 10 000 cm³. Rezultat 4 000 cm³ je u tom rasponu ✓"],
  steps:[
    {txt:"Volumen kvadra: V = a · b · c. Sve mjere moraju biti u istoj jedinici prije množenja."},
    {txt:"Pretvori sve u centimetre (rezultat je u cm³):"},
    {txt:"5 m = 500 cm"},
    {txt:"2 dm = 20 cm"},
    {txt:"4 mm = 0,4 cm"},
    {txt:"V = 500 · 20 · 0,4 = 10 000 · 0,4 = 4 000 cm³",final:true},
    {txt:"Točan odgovor: D) 4 000 cm³.",final:true,note:"odgovor"},
    {txt:"Provjera dimenzijama: 500 · 20 = 10 000 cm² (površina osnove); · 0,4 = 4 000 cm³ (volumen) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 0,004 cm³ (krivi smjer pretvorbe — sve u manje jedinice); B) 0,4 (zaboravio pomnožiti); C) 400 (krivo pomnožen — 5·2·4 = 40, pa pomnožen s 10).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: V kvadra = a · b · c. Svi bridovi MORAJU biti u istoj jedinici, ili volumen u kubičnoj jedinici neće biti ispravan.",note:"postupak",final:true},{txt:"Intuicija: Pretvorbe jedinica duljine: 1 m = 10 dm = 100 cm = 1000 mm. Brojevi rastu prema manjim jedinicama. Tako 5 m = 5·100 cm = 500 cm; 2 dm = 2·10 cm = 20 cm; 4 mm = 4/10 cm = 0,4 cm.",note:"intuicija",final:true}
  ]},
  {id:8,type:"mc",warn:"Pazi: trostrana piramida (tetraedar) ima 6 bridova (3 baze + 3 bočna).",topic:"geom",points:1,
  q:"Koliko bridova ima trostrana piramida?",
  opts:["3","6","8","9"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Definicija: n-strana piramida ima n-kutnu osnovu i jedan vrh (apex). Bridovi: n osnovnih + n bočnih = 2n.","Za trostranu piramidu (n = 3): 2·3 = 6 bridova. To je istovremeno i tetraedar (ako su sve plohe sukladni trokuti).","Intuicija: zamisli trokut na stolu (3 brida), pa stavi olovku na vrh — od svakog vrha trokuta ide brid prema vrhu olovke (3 dodatna). Ukupno 6.","Česta greška: brojati samo bridove osnove (3) ili samo bočne (3), zaboravljajući drugu skupinu. Druga: pomiješati s kvadratnom (četverostranom) piramidom koja ima 4 + 4 = 8 bridova.","Alt metoda: izbrojati pažljivo crtež trostrane piramide — svaki par susjednih vrhova ima jedan brid; broj parova je C(4, 2) = 6 (jer svaki brid spaja DVA vrha).","Provjera: Eulerova formula V − E + F = 2 za konveksne poliedre. Trostrana piramida: V=4, F=4, pa E = V + F − 2 = 6 ✓"],
  steps:[
    {txt:"Trostrana piramida ima trokutastu osnovu (3 brida) i jednu vršnu (apex) točku iznad."},
    {txt:"Bridovi osnove: 3 (stranice osnovnog trokuta)."},
    {txt:"Bridovi bočni (od vrha prema vrhovima osnove): 3."},
    {txt:"Ukupno bridova: 3 + 3 = 6.",final:true},
    {txt:"Točan odgovor: B) 6.",final:true,note:"odgovor"},
    {txt:"Provjera Eulerovom formulom: V − E + F = 2. Trostrana piramida ima V = 4 vrha (3 osnove + 1 apex), F = 4 plohe (1 trokut osnove + 3 trokuta bočna). 4 − E + 4 = 2 ⇒ E = 6 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 3 — samo bridovi osnove zaboravljeni bočni; C) 8 — krivo brojanje (možda misli na vrhove + plohe); D) 9 — možda pomiješan s četverostranom piramidom.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Definicija: n-strana piramida ima n-kutnu osnovu i jedan vrh (apex). Bridovi: n osnovnih + n bočnih = 2n.",note:"postupak",final:true},{txt:"Intuicija: Za trostranu piramidu (n = 3): 2·3 = 6 bridova. To je istovremeno i tetraedar (ako su sve plohe sukladni trokuti).",note:"intuicija",final:true}
  ]},
  {id:9,type:"mc",warn:"Pazi: manja kružnica ima POLOVICU polumjera veće (promjer manje = polumjer veće).",topic:"geom",points:1,
  q:"Dvije kružnice diraju se iznutra tako da manja kružnica prolazi središtem veće kružnice. Ako je opseg kruga omeđenoga većom kružnicom 100π cm, koliki je opseg kruga omeđenoga manjom kružnicom?",
  opts:["20π cm","25π cm","50π cm","75π cm"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Geometrijski uvjet: 'manja kružnica prolazi središtem veće' znači da je središte veće TOČKA na manjoj kružnici. 'Diraju se iznutra' znači da su unutarnje (manja je upisana u veću, obje imaju isti dirajući rub).","Iz uvjeta: promjer manje = polumjer veće (jer središte veće leži na manjoj, a manja se 'pruža' od dodirne točke do središta veće, što je polumjer veće).","Formula: O = 2πr, dakle r = O/(2π). Veća: r₁ = 100π/(2π) = 50; manja: r₂ = r₁/2 = 25, O₂ = 2π·25 = 50π.","Intuicija: ako se opseg PROPORCIONALAN polumjeru, a polumjer manje je pola polumjera veće, onda je i opseg manje TOČNO POLA opsega veće: 100π/2 = 50π. Direktan odgovor bez gen. izračuna.","Česta greška: misliti da je 'promjer manje = promjer veće' (krivo — to bi bile dvije iste kružnice); ili 'r manje = R/4' (krivo — geometrija ne potvrđuje to).","Alt metoda: nacrtati skicu — veća kružnica s središtem O, na njoj točka A koja je središte manje. Manja prolazi kroz O i točku dodira; vidiš da je |OA| = R (polumjer veće) = promjer manje."],
  steps:[
    {txt:"Manja kružnica prolazi središtem veće, a obje se diraju iznutra. Promjer manje je RADIUS veće."},
    {txt:"Opseg veće: O₁ = 2πR = 100π → R = 50 cm (radius veće)."},
    {txt:"Promjer manje = radius veće = R = 50 cm → radius manje r = 25 cm."},
    {txt:"Opseg manje: O₂ = 2πr = 2π · 25 = 50π cm",final:true},
    {txt:"Točan odgovor: C) 50π cm.",final:true,note:"odgovor"},
    {txt:"Provjera omjerom: O₂/O₁ = r/R = 25/50 = 1/2, pa O₂ = O₁/2 = 50π ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 20π = krivo pretpostavio r = 10 (krivi geometrijski odnos); B) 25π = uzeo r = 12,5 (krivo); D) 75π = uzeo r = 37,5 (krivo).",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Geometrijski uvjet: 'manja kružnica prolazi središtem veće' znači da je središte veće TOČKA na manjoj kružnici. 'Diraju se iznutra' znači da su unutarnje (manja je upisana u veću, obje imaju isti dirajući rub).",note:"postupak",final:true},{txt:"Intuicija: Iz uvjeta: promjer manje = polumjer veće (jer središte veće leži na manjoj, a manja se 'pruža' od dodirne točke do središta veće, što je polumjer veće).",note:"intuicija",final:true}
  ]},
  {id:10,type:"mc",warn:"Pazi: 3000 kg je 40 % ukupne mase (teret je 60 %) → ukupna = 3000/0,4.",topic:"br",points:1,
  q:"Masa vozila bez tereta je 3000 kilograma. Nakon utovara teret čini 60 % ukupne mase. Koliko posto ukupne mase čini teret nakon što je istovarena trećina tereta?",
  opts:["20 %","45 %","50 %","75 %"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: 'teret čini p % ukupne mase' znači t = (p/100) · (t + vozilo). Riješi za t.","Iz t = 0,6 · (t + 3000): teret je veći od vozila — fizikalno smisleno (kamion s teretom).","Intuicija: ako istovariš 1/3 tereta, ostane 2/3 tereta. Ukupna masa pada za 1/3 tereta (1500 kg). Novi udio = (2/3 · 4500) / (3000 + 2/3 · 4500) = 3000/6000 = 50 %.","Česta greška 1: misliti da 'istovariš 1/3 tereta' znači 'ostane 1/3' — krivo (ostaje 2/3). Greška 2: ne ažurirati ukupnu masu nakon istovara (računati postotak od stare ukupne 7500).","Alt metoda 1: postavi novu jednadžbu — neka je k kg preostali teret, k = 0,? · (k + 3000). Ako je k = 3000, postotak = 3000/6000 = 50 %.","Alt metoda 2: trotaktno — pre: 60 % (4500/7500); poslije istovara 1/3: 4500−1500 = 3000 kg tereta od ukupno 6000 = 50 %. Direktan put.","Provjera: jasno da je preostala količina tereta = masa vozila → omjer 1:1 → 50 % svakog ✓"],
  steps:[
    {txt:"Masa vozila bez tereta: 3000 kg. Nakon utovara, teret je 60 % ukupne mase."},
    {txt:"Ako je teret t kg i ukupna t + 3000 = m, onda t = 0,6m → t = 0,6(t + 3000)."},
    {txt:"t = 0,6t + 1800 → 0,4t = 1800 → t = 4500 kg"},
    {txt:"Ukupna masa nakon utovara: 3000 + 4500 = 7500 kg"},
    {txt:"Trećina tereta istovarena: istovareno = 4500/3 = 1500 kg. Ostalo: 4500 − 1500 = 3000 kg tereta."},
    {txt:"Nova ukupna masa: 3000 (vozilo) + 3000 (preostali teret) = 6000 kg."},
    {txt:"Postotak preostalog tereta: 3000/6000 = 0,5 = 50 %",final:true},
    {txt:"Točan odgovor: C) 50 %.",final:true,note:"odgovor"},
    {txt:"Provjera: 50 % od 6000 kg = 3000 kg, što je preostali teret ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 20 % = krivo izračunao teret kao postotak vozila; B) 45 % = krivo (možda 60 % − trećina, krivo izračunato); D) 75 % = pomiješao s drugim postocima.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: 'teret čini p % ukupne mase' znači t = (p/100) · (t + vozilo). Riješi za t.",note:"postupak",final:true},{txt:"Intuicija: Iz t = 0,6 · (t + 3000): teret je veći od vozila — fizikalno smisleno (kamion s teretom).",note:"intuicija",final:true}
  ]},
  {id:11,type:"mc",warn:"Pazi: ukupno = 350 + 47·n; linearna (350 je fiksni član).",topic:"al",points:1,
  q:"Elektroinstalater Marko naplaćuje dolazak u zgradu 350 kuna, a montiranje svakoga rasvjetnog tijela po 47 kuna. Elektroinstalater Ivan naplaćuje dolazak u zgradu 210 kuna, a montiranje svakoga rasvjetnog tijela po 52 kune. Za koliko će rasvjetnih tijela cijene usluga obaju majstora biti jednake?",
  opts:["za 5","za 28","za 112","za 140"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Postupak: postavi dvije linearne funkcije troška (po broju rasvjetnih tijela), izjednači, riješi za n.","Pravilo: 'cijene jednake' znači y₁(n) = y₂(n). Ovo je standardni 'break-even' problem.","Intuicija: Marko ima veći fiksni trošak (350 vs 210, razlika 140 kn) ali manji marginalni (47 vs 52 kn po tijelu, manje za 5 kn). Marku se isplati od trenutka kada broj tijela puta razlika marginalne (5 kn) prelazi razliku fiksne (140 kn): 140/5 = 28 tijela.","Česta greška: griješiti znakovima — ako se ne pazi koja strana ima veći fiksni trošak, n može ispasti negativan. Druga: dijeliti samo 350 ili 210 sa 5, umjesto razlike.","Alt metoda: zapisati Δ(n) = trošak Ivan − trošak Marko = (210 − 350) + (52 − 47)n = −140 + 5n. Postaviti Δ = 0 → n = 28.","Provjera: za n = 27 (ispod break-even), Ivan jeftiniji (210 + 52·27 = 1614 < 350 + 47·27 = 1619). Za n = 29 (iznad), Marko jeftiniji. Točno se sijeku u n = 28."],
  steps:[
    {txt:"Trošak za n rasvjetnih tijela:"},
    {txt:"Marko: 350 + 47n kuna"},
    {txt:"Ivan: 210 + 52n kuna"},
    {txt:"Cijene jednake: 350 + 47n = 210 + 52n"},
    {txt:"350 − 210 = 52n − 47n"},
    {txt:"140 = 5n"},
    {txt:"n = 28",final:true},
    {txt:"Točan odgovor: B) za 28.",final:true,note:"odgovor"},
    {txt:"Provjera: Marko: 350 + 47·28 = 350 + 1316 = 1666 kn. Ivan: 210 + 52·28 = 210 + 1456 = 1666 kn ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 5 = računska greška (140/47 ≈ 5? krivi pristup); C) 112 = pomnožio krivim faktorom; D) 140 = uzeo razliku 350−210 bez dijeljenja s 5.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Postupak: postavi dvije linearne funkcije troška (po broju rasvjetnih tijela), izjednači, riješi za n.",note:"postupak",final:true},{txt:"Intuicija: Pravilo: 'cijene jednake' znači y₁(n) = y₂(n). Ovo je standardni 'break-even' problem.",note:"intuicija",final:true}
  ]},
  {id:12,type:"mc",warn:"Pazi: nultočka → f(x) = 0 → (2/3)x = −4 → x = −6; točka (−6, 0).",topic:"fun",points:1,
  q:"Koje koordinate ima nultočka funkcije f(x) = (2/3)x + 4?",
  opts:["(−6, 0)","(0, −6)","(0, 4)","(4, 0)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Definicija nultočke: f(x) = 0. Geometrijski: točka u kojoj graf siječe x-os. Koordinate: (x, 0) jer y = 0.","Pravilo za linearnu f(x) = ax + b: nultočka je x = −b/a. Za našu: x = −4 / (2/3) = −4 · 3/2 = −6.","Intuicija: f je rastuća jer a > 0 (nagib 2/3). f(0) = 4 (sjecište s y-osi). Da bi došli do 0, treba ići ulijevo (negativna strana), što potvrđuje x = −6.","Česta greška 1: pomiješati nultočku (x-koord, y=0) s y-sjecištem (y-koord, x=0). Greška 2: krivo množiti razlomkom — −4 · 3/2 = −12/2 = −6, ne −12.","Alt metoda: nacrtati graf — pravac s nagibom 2/3 koji prolazi (0, 4). Idi unatrag dok ne dosegneš x-os: spušta se 4 jedinice (od y=4 do y=0), idući 4/(2/3) = 6 jedinica lijevo → (−6, 0).","Provjera: f(−6) = [FRAC:2|3](−6) + 4 = −4 + 4 = 0 ✓"],
  steps:[
    {txt:"Nultočka funkcije: točka u kojoj f(x) = 0. Koordinate: (x, 0) gdje je x rješenje f(x) = 0."},
    {txt:"f(x) = [FRAC:2|3]x + 4 = 0"},
    {txt:"[FRAC:2|3]x = −4"},
    {txt:"x = −4 · [FRAC:3|2] = −6",final:true},
    {txt:"Nultočka: (−6, 0).",final:true,note:"odgovor"},
    {txt:"Točan odgovor: A) (−6, 0).",final:true,note:"odgovor"},
    {txt:"Provjera: f(−6) = [FRAC:2|3]·(−6) + 4 = −4 + 4 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: B) (0, −6) = zamijenio x i y (zapravo sjecište s y-osi je (0, f(0)) = (0, 4), ne −6); C) (0, 4) = točka sjecišta s y-osi (krivo pitanje); D) (4, 0) = zaboravio podijeliti s 2/3.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Definicija nultočke: f(x) = 0. Geometrijski: točka u kojoj graf siječe x-os. Koordinate: (x, 0) jer y = 0.",note:"postupak",final:true},{txt:"Intuicija: Pravilo za linearnu f(x) = ax + b: nultočka je x = −b/a. Za našu: x = −4 / (2/3) = −4 · 3/2 = −6.",note:"intuicija",final:true}
  ]},
  {id:13,type:"mc",warn:"Pazi: iz (0, 2) je c = 2; uvrsti druge dvije točke za a i b, pa izračunaj f(3).",topic:"kv",points:1,
  q:"Graf kvadratne funkcije f prolazi točkama (−1, 8), (0, 2), (2, 2). Koliko je f(3)?",
  opts:["−2","−1","2","8"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: tri točke jednoznačno određuju kvadratnu f(x) = ax² + bx + c (3 jednadžbe, 3 nepoznate).","Postupak: 1) uvrsti svaku točku da dobiješ jednadžbu; 2) riješi sustav 3 jednadžbe; 3) vrati u f i izračunaj f(3).","Ključ za brže: f(0) DIREKTNO daje c (jer 0² · a = 0 i 0 · b = 0). Tu se uvijek isplati ići prvo.","Intuicija: f(2) = f(0) = 2 znači da je 2 prosječna vrijednost između x = 0 i x = 2, dakle tjeme parabole je na x = (0+2)/2 = 1. Provjeri: f(1) = 2·1 − 4 + 2 = 0 (min). Parabola otvorena gore (a = 2 > 0), tjeme dolje.","Tjeme je u (1, 0), pa je f(x) = 2(x − 1)². Tada f(3) = 2·(3 − 1)² = 2·4 = 8. Brže od cijelog sustava.","Česta greška: krivo upariti točku s jednadžbom (npr. (−1, 8) → a − b + c = 8, lako se zamjeni). Druga: zaboraviti da je f(0) = c.","Alt metoda: faktorski oblik f(x) = a(x − x₁)(x − x₂) gdje su x₁, x₂ nul-točke. Ali u ovom slučaju iz simetrije f(2) = f(0) = 2 nije f-vrijednost 0, već iste vrijednosti dvije točke na istoj visini — tjeme između.","Provjera dimenzionalna: f(3) je izvan zadanog raspona točaka (0, 2). Vrijednost 8 je konzistentna s ekstrapolacijom parabole otvorene gore."],
  steps:[
    {txt:"Kvadratna funkcija: f(x) = ax² + bx + c. Tri uvjeta daju tri nepoznate."},
    {txt:"f(0) = 2: a·0 + b·0 + c = 2 → c = 2."},
    {txt:"f(2) = 2: 4a + 2b + 2 = 2 → 4a + 2b = 0 → b = −2a."},
    {txt:"f(−1) = 8: a − b + 2 = 8 → a − b = 6."},
    {txt:"Iz b = −2a uvrsti u a − b = 6: a − (−2a) = 6 → 3a = 6 → a = 2. Onda b = −4."},
    {txt:"Funkcija: f(x) = 2x² − 4x + 2."},
    {txt:"f(3) = 2·9 − 4·3 + 2 = 18 − 12 + 2 = 8",final:true},
    {txt:"Točan odgovor: D) 8.",final:true,note:"odgovor"},
    {txt:"Provjera: f(x) = 2(x − 1)² (faktorizirano). f(0) = 2; f(2) = 2; f(−1) = 8; f(3) = 8 ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) −2 = krivi predznak ili koeficijenti; B) −1 = računska greška; C) 2 = krivo (možda mislio da je f(3) = f(0)); D) ✓",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: tri točke jednoznačno određuju kvadratnu f(x) = ax² + bx + c (3 jednadžbe, 3 nepoznate).",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) uvrsti svaku točku da dobiješ jednadžbu; 2) riješi sustav 3 jednadžbe; 3) vrati u f i izračunaj f(3).",note:"intuicija",final:true}
  ]},
  {id:14,type:"mc",warn:"Pazi: razmaka između stabala je 237; grmovi se izmjenjuju 2, 1 — zbroji po uzorku.",topic:"br",points:1,
  q:"U drvoredu je 238 stabala. Između prvoga i drugoga stabla posađena su 2 grma, između drugoga i trećega stabla posađen je 1 grm i dalje su naizmjenično redom posađena po 2 grma ili 1 grm. Koliko je ukupno grmova posađeno između prvoga i zadnjega stabla?",
  opts:["316","317","356","357"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: n stabala stvara n − 1 razmaka (slično kao n daštica u redu, n − 1 puta između).","Postupak za naizmjenične razmake: ukupno 237 razmaka, naizmjenično (2, 1, 2, 1, ...). U neparnim mjestima (1., 3., 5., ...) je 2 grma; u parnim (2., 4., ...) je 1 grm.","Brojanje neparnih u nizu 1..237: ima ih ⌈237/2⌉ = 119. Parnih: 237 − 119 = 118.","Intuicija: prosječan razmak ima (2 + 1)/2 = 1,5 grma, pa očekujemo ≈ 237 · 1,5 = 355,5. Konkretno 356 (jer jedan razmak više ima 2 grma nego 1).","Česta greška 1: računati s 238 razmaka (kao da svako stablo ima razmak prema sebi). Greška 2: krivo brojati neparnih/parnih u nizu (off-by-1).","Alt metoda: gledati u parovima: par razmaka (2 grma + 1 grm) = 3 grma. 237 razmaka = 118 punih parova + 1 dodatni razmak (2 grma). 118·3 + 2 = 354 + 2 = 356.","Provjera: 119 + 118 = 237 ✓ (svi razmaci obuhvaćeni). 2·119 + 118 = 238 + 118 = 356 ✓."],
  steps:[
    {txt:"238 stabala stvara 237 razmaka između susjednih stabala."},
    {txt:"U razmacima naizmjenično 2 ili 1 grm: razmak 1→2 grmova, razmak 2→1 grm, razmak 3→2, razmak 4→1, ..."},
    {txt:"Razmaci s 2 grma su neparni (1, 3, 5, ...): ima ih ceil(237/2) = 119 razmaka."},
    {txt:"Razmaci s 1 grmom su parni (2, 4, 6, ...): ima ih 237 − 119 = 118 razmaka."},
    {txt:"Grmova: 2·119 + 1·118 = 238 + 118 = 356",final:true},
    {txt:"Točan odgovor: C) 356.",final:true,note:"odgovor"},
    {txt:"Provjera: 119 + 118 = 237 razmaka ✓; 2·119 + 1·118 = 356 grmova ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 316 = krivo prebrojavanje razmaka; B) 317 = off-by-1; C) ✓; D) 357 = off-by-1.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: n stabala stvara n − 1 razmaka (slično kao n daštica u redu, n − 1 puta između).",note:"postupak",final:true},{txt:"Intuicija: Postupak za naizmjenične razmake: ukupno 237 razmaka, naizmjenično (2, 1, 2, 1, ...). U neparnim mjestima (1., 3., 5., ...) je 2 grma; u parnim (2., 4., ...) je 1 grm.",note:"intuicija",final:true}
  ]},
  {id:15,type:"mc",warn:"Pazi: pretvori m u cm; broj ploča po stranici zaokruži NAGORE (cijele ploče), pa pomnoži.",topic:"br",points:1,
  q:"Pod pravokutnoga oblika dimenzija 6,4 m × 9,1 m popločan je kvadratnim pločama dimenzija 34 cm × 34 cm. Ploče su lijepljene jedna do druge bez razmaka. Od svake ploče koju je trebalo rezati zalijepljen je samo jedan odrezani dio, a ostatak nije korišten. Koliko je komada ploča potrošeno za popločavanje?",
  opts:["473","494","504","513"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: kad ploča ne stane cijela, treba REZATI još jednu ploču za rubni dio. Ako je ostatak po x i po y, treba i dodatne ploče po oba ruba PLUS jednu za KUT.","Postupak: 1) brojevi cijelih ploča po x i y: ⌊W/p⌋ · ⌊H/p⌋. 2) ostatak po x (ako > 0): dodaj jednu ploču za svaki red ⌈H/p⌉ ploča. 3) isto za ostatak po y. 4) brojanje kuta već uračunato u oba (ili ne — pažljivo).","Brže: ukupan broj ploča = ⌈W/p⌉ · ⌈H/p⌉ jer svaka 'ćelija' u mreži treba ploču (bilo cijelu ili rezanu).","640/34 = 18,82 → ⌈18,82⌉ = 19 ploča po širini. 910/34 = 26,76 → ⌈26,76⌉ = 27 po visini. Ukupno: 19 · 27 = 513.","Intuicija: pod ima oblik mreže 19 × 27 'ćelija' (gdje su rubne ćelije manje). Svaka ćelija = jedna ploča (rezana ili cijela). Total 513.","Česta greška 1: zaokruživati prema dolje (uzeti samo cijele ploče, izgubiti rubove). Greška 2: pribrojiti kut DVOSTRUKO (jednom za x-rub i jednom za y-rub).","Alt metoda: izračunaj DIREKTNO ⌈640/34⌉ · ⌈910/34⌉ = 19 · 27 = 513. Najbrži put.","Provjera: 18 · 34 = 612 < 640 < 19 · 34 = 646 ✓; 26 · 34 = 884 < 910 < 27 · 34 = 918 ✓."],
  steps:[
    {txt:"Pretvori sve u iste jedinice (cm): 6,4 m = 640 cm, 9,1 m = 910 cm. Ploča: 34 × 34 cm."},
    {txt:"Po x: 640/34 = 18,82... → 18 cijelih + ostatak (640 − 18·34 = 640 − 612 = 28 cm — treba REZATI ploču)."},
    {txt:"Po y: 910/34 = 26,76... → 26 cijelih + ostatak (910 − 26·34 = 910 − 884 = 26 cm — treba REZATI ploču)."},
    {txt:"Cijele ploče (oba u cijelim koracima): 18 · 26 = 468."},
    {txt:"Rezane ploče u zadnjem stupcu (1 stupac od 18+1 = 19. mjesta po x, 26 redaka): 26 rezanih ploča za zadnji stupac (samo dio se koristi za 28 cm)."},
    {txt:"Rezane ploče u zadnjem redu: 18 cijele širine × 1 visine (samo dio za 26 cm) = 18 rezanih ploča."},
    {txt:"Plus 1 ploča u kutu (rez i po x i po y): još 1 rezana."},
    {txt:"Ukupno ploča: 468 cijele + 26 + 18 + 1 = 513",final:true},
    {txt:"Točan odgovor: D) 513.",final:true,note:"odgovor"},
    {txt:"Provjera: 19 · 27 = 513 (jer treba (18+1) stupaca × (26+1) redaka — sve mjesto popločano) ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 473 = krivo zaokruženo prema dolje (samo cijele 18·26+ostatak); B) 494 = pribrojio samo jedan rub, ne oba; C) 504 = pribrojio kut dvostruko ili pogrešna geometrija.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Pravilo: kad ploča ne stane cijela, treba REZATI još jednu ploču za rubni dio. Ako je ostatak po x i po y, treba i dodatne ploče po oba ruba PLUS jednu za KUT.",note:"postupak",final:true},{txt:"Intuicija: Postupak: 1) brojevi cijelih ploča po x i y: ⌊W/p⌋ · ⌊H/p⌋. 2) ostatak po x (ako > 0): dodaj jednu ploču za svaki red ⌈H/p⌉ ploča. 3) isto za ostatak po y. 4) brojanje kuta već uračunato u oba (ili ne — pažljivo).",note:"intuicija",final:true}
  ]},
  {id:16,type:"mc",warn:"Pazi: pozitivnih je 100 % − 25 % = 75 %; pažljivo odredi tražene postotke iz intervala.",topic:"br",points:1,
  q:"U nekome skupu brojeva 25 % ih je negativnih ili jednakih 0, a 65 % manjih ili jednakih 10. Čemu je u tome skupu jednak omjer broja pozitivnih brojeva manjih ili jednakih 10 i broja onih brojeva većih od 10?",
  opts:["5 : 7","5 : 13","8 : 7","13 : 7"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Postupak: skup je particioniran prema dva uvjeta (vrijednost i znak). Treba pažljivo identificirati tri DISJUNKTNE skupine.","Skupine: 1) negativni ili 0 (25 %); 2) pozitivni ≤ 10 (preklapa s ≤ 10, ali NIJE negativni ili 0); 3) > 10 (komplement od ≤ 10).","Pravilo skupova: 'pozitivni ≤ 10' = '≤ 10' MINUS 'negativni ili 0'. Postotno: 65 − 25 = 40.","Intuicija: zamisli brojeve na pravcu — 25 % je na ≤ 0; 40 % je u (0, 10]; 35 % je > 10. Tri komada koji čine cjelinu.","Česta greška 1: pomiješati 'pozitivni' s '> 0' (oprezno — 0 nije pozitivan); ovdje 'negativni ILI jednak 0' znači x ≤ 0. Greška 2: računati 'pozitivni ≤ 10' kao 65 % bez oduzimanja 25 %.","Alt metoda: postavi skupa od 100 elemenata: 25 negativnih ili 0, 40 pozitivnih ≤ 10, 35 > 10. Omjer (poz. ≤ 10) : (> 10) = 40 : 35 = 8 : 7.","Provjera kratkim: 8 + 7 = 15, što odgovara 40 + 35 = 75 (sve osim negativnih ili 0). 25 + 75 = 100 ✓."],
  steps:[
    {txt:"Označimo: N₁ = postotak negativnih ili 0 = 25 %; N₂ = postotak ≤ 10 = 65 %."},
    {txt:"Pozitivni brojevi ≤ 10: N₂ − N₁ = 65 − 25 = 40 % (oni koji su ≤ 10 ali NISU negativni ili 0)."},
    {txt:"Brojevi > 10: 100 % − 65 % = 35 %."},
    {txt:"Omjer pozitivnih ≤ 10 prema > 10: 40 : 35 = 8 : 7",final:true},
    {txt:"Točan odgovor: C) 8 : 7.",final:true,note:"odgovor"},
    {txt:"Provjera: 25 % (neg/0) + 40 % (poz ≤ 10) + 35 % (> 10) = 100 % ✓",final:true,note:"verifikacija"},
    {txt:"Distraktori: A) 5 : 7 = krivo izračunao 35 (možda 25 + 35); B) 5 : 13 = krivi raspored postotaka; D) 13 : 7 = zamijenio brojnik i nazivnik.",final:true,note:"diagnostika"},{txt:"Sažetak postupka: Postupak: skup je particioniran prema dva uvjeta (vrijednost i znak). Treba pažljivo identificirati tri DISJUNKTNE skupine.",note:"postupak",final:true},{txt:"Intuicija: Skupine: 1) negativni ili 0 (25 %); 2) pozitivni ≤ 10 (preklapa s ≤ 10, ali NIJE negativni ili 0); 3) > 10 (komplement od ≤ 10).",note:"intuicija",final:true}
  ]},
  {id:17,type:"sa",topic:"br",points:1,
  q:"Izračunajte √((√3 − √10)² + 5) i zapišite rezultat u decimalnome obliku.",
  sol:{ans:"2,654345277",alt:["2.654345277","2,654","2,654","2,65"]},
  why:["Pravilo: (a − b)² = a² − 2ab + b² za sve a, b. Posebno za korijene: (√x − √y)² = x − 2√(xy) + y.","Postupak: pojednostavni izraz unutar korijena (algebarski), pa izračunaj numerički ako se ne može daljnje pojednostaviti.","Intuicija: √3 ≈ 1,732, √10 ≈ 3,162, pa √3 − √10 ≈ −1,43, (√3 − √10)² ≈ 2,045. + 5 = 7,045. √7,045 ≈ 2,654 ✓","Česta greška 1: misliti da je (√3 − √10)² = 3 − 10 = −7 (krivo — nedostaje −2√30 i krivi je predznak). Greška 2: √(a + b) ≠ √a + √b — ne razdvajati korijen iz zbroja.","Alt metoda: direktno numerički — izračunaj √3 ≈ 1,73205, √10 ≈ 3,16228, razlika ≈ −1,43023, kvadrat ≈ 2,04555, + 5 = 7,04555, korijen ≈ 2,6543. Brže od algebarskog rastavljanja.","Provjera dimenzionalna: izraz pod korijenom je 18 − 2√30, što je pozitivno (jer 2√30 ≈ 10,95 < 18), pa korijen postoji u realnima ✓"],
  steps:[
    {txt:"Razvij (√3 − √10)²: (a − b)² = a² − 2ab + b² gdje je a = √3, b = √10."},
    {txt:"(√3)² − 2·√3·√10 + (√10)² = 3 − 2√30 + 10 = 13 − 2√30"},
    {txt:"Sad: (√3 − √10)² + 5 = 13 − 2√30 + 5 = 18 − 2√30"},
    {txt:"√(18 − 2√30): pojednostavni — provjeri može li se napisati kao (√a − √b)²"},
    {txt:"Ako 18 − 2√30 = (√a − √b)² = a + b − 2√(ab): a + b = 18, ab = 30 → a, b rješenja t² − 18t + 30 = 0"},
    {txt:"Diskriminanta: 324 − 120 = 204; √204 = 2√51, pa a, b nisu lijepi. Računaj numerički:"},
    {txt:"√30 ≈ 5,4772, 2√30 ≈ 10,9545; 18 − 10,9545 ≈ 7,0455"},
    {txt:"√7,0455 ≈ 2,6543...",final:true},
    {txt:"Točan odgovor: 2,654345277...",final:true,note:"odgovor"},
    {txt:"Provjera: (2,654)² = 7,0438... + 2·√30 ≈ 7,0438 + 10,9545 ≈ 17,998 ≈ 18 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: razvij kvadrat, zbroji s 5, izračunaj korijen — numerički (s kalkulatorom).",final:true,note:"postupak"},{txt:"Intuicija: Postupak: pojednostavni izraz unutar korijena (algebarski), pa izračunaj numerički ako se ne može daljnje pojednostaviti.",note:"intuicija",final:true}
  ]},
  {id:18,type:"sa",topic:"al",points:1,
  q:"Riješite sustav jednadžba x + 2y = 3x − 1 i 4x − 5y = 6 − 2y.",
  sol:{ans:"x = 4,5, y = 4",alt:["x=4,5, y=4","x=9/2, y=4","(4,5; 4)","(9/2, 4)","x = 4.5. y = 4","4,5, y = 4"]},
  why:["Pravilo: sustav 2 linearne jednadžbe s 2 nepoznate ima jedinstveno rješenje ako nisu paralelne. Metode: supstitucija, eliminacija (množenje + zbrajanje/oduzimanje), Cramerova s determinantama.","Postupak (eliminacija): 1) sredi obje jednadžbe na ax + by = c. 2) pomnoži jednu jednadžbu da koeficijenti uz jednu nepoznatu budu suprotni. 3) zbroji/oduzmi → jedna nepoznata eliminira. 4) riješi za drugu nepoznatu, vrati u jednu od izvornih.","Intuicija: dvije nepoznate, dvije jednadžbe — sustav je 'dobro postavljen'. Vizualno: dvije linije u ravnini koje se sijeku u jednoj točki (4,5; 4).","Česta greška 1: zaboraviti sa srediti jednadžbe prije eliminacije (ostaviti 'x' samostalan na lijevoj strani). Greška 2: krivo oduzeti — predznaci se mijenjaju kod oduzimanja, lako se zabuni.","Alt metoda (supstitucija): iz (i) 2x − 2y = 1 → x = (1 + 2y)/2. Uvrsti u (ii): 4·(1 + 2y)/2 − 3y = 6 → 2(1 + 2y) − 3y = 6 → 2 + 4y − 3y = 6 → y = 4. Onda x = (1 + 8)/2 = 4,5.","Provjera: uvrsti oba u SVAKU izvornu jednadžbu — ako obje vrijede, rješenje točno ✓"],
  steps:[
    {txt:"Sredi obje jednadžbe na standardni oblik ax + by = c."},
    {txt:"Prva: x + 2y = 3x − 1 → −2x + 2y = −1 → 2x − 2y = 1"},
    {txt:"Druga: 4x − 5y = 6 − 2y → 4x − 3y = 6"},
    {txt:"Sustav: 2x − 2y = 1 (i)  i  4x − 3y = 6 (ii)"},
    {txt:"Pomnoži (i) s 2: 4x − 4y = 2"},
    {txt:"Oduzmi od (ii): (4x − 3y) − (4x − 4y) = 6 − 2 → y = 4",final:true},
    {txt:"Uvrsti u (i): 2x − 8 = 1 → 2x = 9 → x = 4,5",final:true},
    {txt:"Rješenje: x = 4,5, y = 4",final:true,note:"odgovor"},
    {txt:"Provjera u izvornom: 4,5 + 8 = 12,5; 3·4,5 − 1 = 12,5 ✓. 4·4,5 − 5·4 = −2; 6 − 2·4 = −2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: sredi obje jednadžbe, eliminacija metodom množenja jedne i oduzimanja, supstitucija u drugu.",final:true,note:"postupak"},{txt:"Intuicija: Postupak (eliminacija): 1) sredi obje jednadžbe na ax + by = c. 2) pomnoži jednu jednadžbu da koeficijenti uz jednu nepoznatu budu suprotni. 3) zbroji/oduzmi → jedna nepoznata eliminira. 4) riješi za drugu nepoznatu, vrati u...",note:"intuicija",final:true}
  ]},
  {id:19.1,img:true,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"U tablici su prikazane mjesečne neto plaće jednoga djelatnika za prvih šest mjeseci 2013. godine. Kolika je njegova prosječna neto plaća za prva tri mjeseca te godine?",
  intermediates:[8100, 24318, 15698, 620, 318],
  sol:{ans:"8106",alt:["8106 kn","8 106","= 8106","8106,0","8106,00"]},
  why:["Pravilo: aritmetička sredina n brojeva = (x₁ + x₂ + ... + xₙ) / n.","Postupak: 1) identificiraj koje vrijednosti uključiti (samo prva 3 mjeseca: I., II., III.). 2) zbroji ih. 3) podijeli s 3.","Intuicija: prosjek mora biti unutar raspona [min, max] tih vrijednosti. Iz tablice: 7787 (min), 8620 (max) → prosjek ∈ [7787, 8620]. Rezultat 8106 je u tom rasponu ✓.","Česta greška 1: zbrojiti svih 6 mjeseci i podijeliti s 3 (krivo). Greška 2: krivo čitanje tablice (npr. uzeti 4. mjesec).","Alt metoda: bazna procjena oko 8000: 7787 = 8000−213, 7911 = 8000−89, 8620 = 8000+620. Suma odstupanja = 318. Prosjek = 8000 + 318/3 = 8106.","Provjera: 8106 · 3 = 24318 = 7787 + 7911 + 8620 ✓"],
  steps:[
    {txt:"Iz tablice (I., II., III. mjesec — siječanj, veljača, ožujak 2013.): 7787, 7911, 8620 kn."},
    {txt:"Prosjek = zbroj prvih tri vrijednosti / 3."},
    {txt:"Zbroj: 7787 + 7911 + 8620 = 24318"},
    {txt:"Prosjek: 24318 / 3 = 8106",final:true},
    {txt:"Točan odgovor: 8106 kn.",final:true,note:"odgovor"},
    {txt:"Provjera: 8106 · 3 = 24318; rastavi: 7787 + 7911 = 15698; 15698 + 8620 = 24318 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: identificiraj prva tri stupca iz tablice (7787, 7911, 8620), zbroji, podijeli s 3.",final:true,note:"postupak"},
    {txt:"Intuicija: prosjek je 'srednja' vrijednost — između 7787 (najmanje) i 8620 (najveće), pa očekujemo ≈ 8100.",final:true,note:"intuicija"}
  ]},
  {id:19.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Mirta je u prosincu 2015. godine kupila 10 bitcoina. Vrijednost jednoga bitcoina tada je bila 455,61 USD. Nakon dvije godine vrijednost bitcoina povećala se 38,5 puta i tada je Mirta prodala svojih 10 bitcoina. Koliko je dolara Mirta pritom zaradila?",
  sol:{ans:"170853,75",alt:["170853.75","170853,75 USD","170853.8","170853,8","170854"]},
  why:["Zarada = krajnja − početna vrijednost. Ovdje: krajnja je nakon 38,5× rasta cijene jednog bitcoina, početna je ulaganje (10 · 455,61).","Pravilo (postotno-faktorni račun): ako se vrijednost povećava x puta, krajnja = početna · x. Zarada je razlika (ne sama krajnja vrijednost).","Intuicija: ako 1 BTC vrijedi 455,61 USD i poraste 38,5× → 17 540,99 USD. 10 BTC × 17 540,99 ≈ 175 410 USD. Zarada ≈ 170 854 USD je ~37,5× ulaganja, što je faktor 38,5 − 1.","Česta greška 1: računati zaradu kao krajnja vrijednost (175 409,85 umjesto 170 853,75) — zaboravljeno oduzimanje ulaganja. Greška 2: pomnožiti 38,5 sa 10 (count) umjesto cijenom.","Alt metoda: zarada = ulaganje · (faktor − 1) = (10 · 455,61) · 37,5 = 170 853,75 USD. Jedan korak manje.","Provjera dimenzionalna: USD/BTC · BTC = USD ✓. Provjera red veličine: zarada ≈ 4 500 · 38 ≈ 171 000 USD ≈ rezultat ✓.","Postupak: 1) Identificiraj ulaganje (10 · 455,61). 2) Primijeni faktor rasta (× 38,5). 3) Pomnoži s količinom (× 10). 4) Oduzmi ulaganje za zaradu."],
  steps:[
    {txt:"Početna vrijednost: 10 · 455,61 = 4 556,1 USD"},
    {txt:"Nova vrijednost jednog bitcoina: 455,61 · 38,5 = 17 540,985 USD"},
    {txt:"Krajnja vrijednost: 10 · 17 540,985 = 175 409,85 USD"},
    {txt:"Zarada: 175 409,85 − 4 556,1 = 170 853,75 USD",final:true},
    {txt:"Brojčana provjera: 4 556,1 · (38,5 − 1) = 4 556,1 · 37,5 = 170 853,75 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) početna cijena · količina = ulaganje. 2) cijena · faktor rasta = nova cijena. 3) razlika = zarada. Provjeri jedinice (USD).",final:true,note:"postupak"},
    {txt:"Intuicija: faktor 38,5 puta veći znači da je krajnja cijena ≈ 38× veća. Zarada ≈ 37× ulaganja (jer oduzmemo originalno).",final:true,note:"intuicija"},
    {txt:"Alt metoda: zarada = ulaganje · (faktor − 1) = 4 556,1 · 37,5 = 170 853,75 (brže, bez međukoraka).",final:true,note:"alt"},{txt:"Točan odgovor: 170853,75 ✓",note:"odgovor",final:true}
  ]},
  {id:20.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Čemu je jednak izraz a(a + 4) − 3(2a − 5) nakon provođenja naznačenih operacija i sređivanja?",
  sol:{ans:"a² − 2a + 15",alt:["a²-2a+15","a²−2a+15","a² - 2a + 15"]},
  why:["Pravilo distribucije: a(b + c) = ab + ac; c(a − b) = ca − cb. Posebno: −n(a + b) = −na − nb (predznak ide na SVE članove zagrade).","Postupak: 1) razvij svaku zagradu zasebno. 2) zbroji slične članove (iste potencije i iste varijable).","Intuicija: rezultat ima a² (od prve zagrade), linearno (zbroj iz obje), i konstantu (samo iz druge). Bez korijena, bez razlomaka — čist polinom.","Česta greška 1: zaboraviti minus distribuirati: −3(2a − 5) = −6a − 15 (krivo, treba +15). Greška 2: pomiješati red operacija — npr. (a + 4)(a − 3) umjesto a(a+4) − 3(2a−5).","Alt metoda: izračunaj brojčano za nekoliko a (npr. a = 0, 1, 2) i provjeri uzorak. a = 0: 0 − 3(−5) = 15. a² − 2a + 15 = 0 + 15 = 15 ✓.","Provjera za a = 1: izvorno 1·5 − 3·(−3) = 5 + 9 = 14. Naš: 1 − 2 + 15 = 14 ✓"],
  steps:[
    {txt:"Razvij obje zagrade primjenom distribucije."},
    {txt:"a(a + 4) = a² + 4a"},
    {txt:"−3(2a − 5) = −6a + 15 (pazi na predznak − 3 puta cijela zagrada)"},
    {txt:"Sad zbroji: a² + 4a − 6a + 15"},
    {txt:"Sredi slične: a² + (4 − 6)a + 15 = a² − 2a + 15",final:true},
    {txt:"Točan odgovor: a² − 2a + 15.",final:true,note:"odgovor"},
    {txt:"Provjera supstitucijom za a = 2: izvorno: 2·(2 + 4) − 3·(2·2 − 5) = 2·6 − 3·(−1) = 12 + 3 = 15. Naš: 4 − 4 + 15 = 15 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: distribucija obiju zagrada (PAZI predznak kod −3), pa sredi članove iste potencije.",final:true,note:"postupak"},
    {txt:"Intuicija: izraz je kvadratni — siguran da ima a², jer prva zagrada daje a². Linearni član nestaje skoro (4a − 6a = −2a). Konstanta dolazi od druge zagrade.",final:true,note:"intuicija"}
  ]},
  {id:20.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Koji je rezultat do kraja sređenoga izraza (x−3)/(2x+4) · (x+2)/(x²−9) + 2 za sve x za koje je izraz definiran?",
  sol:{ans:"(4x + 13) / (2(x + 3))",solFormula:{frac:[["4x + 13","2(x + 3)"]]},alt:["(4x+13)/(2(x+3))","(4x+13)/2(x+3)"]},
  why:["Pravilo: a/b · c/d = (ac)/(bd) (množenje razlomaka). Skraćivanje: ako brojnik i nazivnik dijele isti faktor, skratiti.","Faktorizacija je ključna: 2x + 4 = 2(x + 2); x² − 9 = (x − 3)(x + 3) (razlika kvadrata).","Postupak: 1) faktoriziraj sve. 2) pomnoži brojnik i nazivnik 'kroz znak ÷'. 3) skrati zajedničke. 4) doda 2 ako je potrebno (zajednički nazivnik).","Intuicija: rezultat je razlomak s linearnim brojnikom i linearnim nazivnikom (oblik (ax + b)/(c(x + d))). Provjeri da rezultat NIJE 0 za sve x — to bi značilo da je razlomak konstanta.","Česta greška 1: dijeliti razlomak — (a/b) / (c/d) = a/b · d/c, ali (a/b) · (c/d) = ac/bd (drugačije!). Greška 2: skraćivati prije faktorizacije (npr. skratiti x iz x − 3 / x² — krivo).","Domena: izraz definiran za x ≠ −2, x ≠ 3, x ≠ −3 (gdje su nazivnici nula). Rezultat: x ≠ −3, ali izvorne restrikcije ostaju.","Alt metoda: ne skratiti odmah, već izračunati direktno. Multiplikacija: (x−3)(x+2) / [(2x+4)(x²−9)] = (x−3)(x+2) / [2(x+2)(x−3)(x+3)]. Skrati zajedničke → 1/(2(x+3)). Dodaj 2 → (1 + 4(x+3))/(2(x+3)) = (4x + 13)/(2(x+3)).","Provjera za x = 1: izvorno: (−2)/6 · 3/(−8) + 2 = (−6)/(−48) + 2 = 1/8 + 2 = 17/8. Naš: (4 + 13)/(2·4) = 17/8 ✓"],
  steps:[
    {txt:"Faktoriziraj svaki dio: 2x + 4 = 2(x + 2); x² − 9 = (x − 3)(x + 3)."},
    {txt:"Razlomak: [FRAC:x − 3|2(x + 2)] · [FRAC:x + 2|(x − 3)(x + 3)]"},
    {txt:"Skrati (x − 3) iz brojnika i nazivnika: [FRAC:1|2(x + 2)] · [FRAC:x + 2|x + 3]"},
    {txt:"Skrati (x + 2): [FRAC:1|2] · [FRAC:1|x + 3] = [FRAC:1|2(x + 3)]"},
    {txt:"Dodaj 2: [FRAC:1|2(x + 3)] + 2 = [FRAC:1|2(x + 3)] + [FRAC:4(x + 3)|2(x + 3)] = [FRAC:1 + 4(x + 3)|2(x + 3)]"},
    {txt:"1 + 4x + 12 = 4x + 13 → [FRAC:4x + 13|2(x + 3)]",final:true},
    {txt:"Točan odgovor: (4x + 13) / (2(x + 3)).",final:true,note:"odgovor"},
    {txt:"Provjera za x = 0: izvorno: (−3)/4 · 2/(−9) + 2 = (−6)/(−36) + 2 = 1/6 + 2 = 13/6. Naš: 13/6 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: faktoriziraj nazivnike i brojnike, skrati zajedničke faktore, doda 2 sa zajedničkim nazivnikom.",final:true,note:"postupak"},{txt:"Intuicija: Faktorizacija je ključna: 2x + 4 = 2(x + 2); x² − 9 = (x − 3)(x + 3) (razlika kvadrata).",note:"intuicija",final:true}
  ]},
  {id:21.1,type:"sa",topic:"br",points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Koliko je |a − b| + |0,25 − b| za a = −3 i b = 1/2?",
  sol:{ans:"[FRAC:15|4]",solFormula:{frac:[["15","4"]]},alt:["3,75","3,75","15/4"]},
  why:["Pravilo apsolutne vrijednosti: |x| = x ako x ≥ 0, |x| = −x ako x < 0. Geometrijski: udaljenost od 0.","Postupak: 1) uvrsti vrijednosti unutar zagrada. 2) izračunaj svaki izraz unutar |...|. 3) primijeni apsolutnu vrijednost (= odbacuje predznak ako negativno).","Intuicija: ovo je zbroj UDALJENOSTI: |a − b| = udaljenost od a do b. Za a = −3, b = 0,5: udaljenost 3,5. Za 0,25 i b = 0,5: udaljenost 0,25. Zbroj 3,75.","Česta greška 1: pomiješati 0,25 s 0,5 (paziti — 0,25 je KONKRETAN broj, ne b/2). Greška 2: zaboraviti apsolutnu vrijednost — npr. −3 − 0,5 = −3,5, ali |...| daje +3,5.","Alt metoda u razlomcima: a = −3, b = 1/2. |−3 − 1/2| = |−7/2| = 7/2. |1/4 − 1/2| = |−1/4| = [FRAC:1|4]. Zbroj 7/2 + 1/4 = 14/4 + 1/4 = 15/4.","Provjera: 15/4 = 3,75 ✓ (oba računa daju isti rezultat)."],
  steps:[
    {txt:"Uvrsti a = −3, b = 1/2."},
    {txt:"|a − b| = |−3 − 1/2| = |−3,5| = 3,5 = 7/2"},
    {txt:"|0,25 − b| = |0,25 − 0,5| = |−0,25| = 0,25 = [FRAC:1|4]"},
    {txt:"Zbroj: 7/2 + 1/4 = 14/4 + 1/4 = 15/4 = 3,75",final:true},
    {txt:"Točan odgovor: 15/4 (= 3,75).",final:true,note:"odgovor"},
    {txt:"Provjera u decimalnom: 3,5 + 0,25 = 3,75 = 15/4 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: uvrsti vrijednosti, izračunaj svaku apsolutnu vrijednost zasebno, zbroji.",final:true,note:"postupak"},
    {txt:"Intuicija: apsolutna vrijednost 'odbacuje minus' — udaljenost od 0 na brojevnom pravcu.",final:true,note:"intuicija"}
  ]},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Ako je 15 ≤ m ≤ 20 i 2 ≤ p ≤ 4, kolika je najveća moguća vrijednost izraza m − p?",
  sol:{ans:"18",alt:["18","18 komada","18,0","18,0","= 18"]},
  why:["Pravilo: max(a − b) = max(a) − min(b) kad su a i b nezavisne. Slično min(a − b) = min(a) − max(b).","Postupak: identificirajte koja varijabla ide u kojem smjeru za max razlike: a treba biti VELIKA, b treba biti MALA. Uvrsti odgovarajuće rubove iz raspona.","Intuicija: zamisli graf u (m, p) ravnini — pravokutnik [15, 20] × [2, 4]. Funkcija m − p mijenja se linearno; max je u kutu (20, 2), min u kutu (15, 4).","Česta greška 1: uzeti oba MAX (m = 20, p = 4) — krivo daje 20 − 4 = 16. Greška 2: uzeti oba MIN (15 − 2 = 13) — to bi bio min razlike, ne max.","Alt metoda: m − p ∈ [min − max, max − min] = [15 − 4, 20 − 2] = [11, 18]. Najveća vrijednost je gornja granica intervala = 18.","Provjera: niska kombinacija m = 15, p = 4: 11 ✓; visoka kombinacija m = 20, p = 2: 18 ✓; sve između je između 11 i 18."],
  steps:[
    {txt:"Izraz m − p — želimo NAJVEĆU vrijednost."},
    {txt:"m − p je najveći kad je m što veći, a p što manji."},
    {txt:"Max m = 20 (gornja granica). Min p = 2 (donja granica)."},
    {txt:"Najveća vrijednost: 20 − 2 = 18",final:true},
    {txt:"Točan odgovor: 18.",final:true,note:"odgovor"},
    {txt:"Provjera ekstremima: za m = 20, p = 2: m − p = 18. Za bilo koju drugu kombinaciju (npr. m = 15, p = 4): 15 − 4 = 11 < 18 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: za max razlike a − b, uzmi max(a) i min(b). Za min razlike, uzmi min(a) i max(b).",final:true,note:"postupak"},
    {txt:"Intuicija: razlika je najveća kad je brojnik (m) maksimalan i nazivnik (p) minimalan (u smislu oduzimanja, ne dijeljenja).",final:true,note:"intuicija"}
  ]},
  {id:22.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Riješite jednadžbu 2kx + 5 = k − 4x u kojoj je k realan broj, k ≠ −2.",
  sol:{ans:"x = [FRAC:k − 5|2k + 4]",solFormula:{pre:"x = ",frac:[["k − 5","2k + 4"]]},alt:["(k-5)/(2k+4)","(k-5)/(2(k+2))","x = [FRAC:k - 5|2k + 4]","x=[FRAC:k−5|2k+4]","[FRAC:k − 5|2k + 4]","x = k − 5/2k + 4"]},
  why:["Pravilo: linearna jednadžba s parametrom — rješenje ovisi o parametru. Postupak: 1) sve x-ove na lijevu stranu. 2) izvuci x kao faktor. 3) podijeli s koeficijentom (uz uvjet ≠ 0).","Razlog uvjeta k ≠ −2: ako je 2k + 4 = 0 (tj. k = −2), izraz ima oblik 'broj = 0' koji ili je identitet (sve x vrijedi) ili nema rješenja. Uvjet dan u zadatku eliminira taj slučaj.","Intuicija: za svaki konkretan k (osim −2), dobiješ konkretan broj x. Formula je 'generalno rješenje' koje vrijedi za sve dopuštene k.","Česta greška 1: zaboraviti dodati 4x na obje strane (samo prebaciti −4x na lijevu bez promjene znaka). Greška 2: pri izvlačenju x-a, krivo zbrojiti koeficijente (2k + 4, ne 2k − 4 ili sl.).","Alt metoda: faktoriziraj nazivnik — 2k + 4 = 2(k + 2). Rješenje x = (k − 5)/(2(k + 2)). Vidiš zašto k = −2 daje problem (dijeljenje nulom).","Provjera za nekoliko k: k = 0: x = (−5)/4 = −1,25. Izvorno: 0 + 5 = 0 − 4x → 4x = −5 → x = −5/4 = −1,25 ✓"],
  steps:[
    {txt:"Cilj: izoliraj x. Premjesti sve s x na jednu stranu, ostalo na drugu."},
    {txt:"2kx + 5 = k − 4x"},
    {txt:"2kx + 4x = k − 5 (dodavanjem 4x i oduzimanjem 5 obje strane)"},
    {txt:"x(2k + 4) = k − 5 (izvuci x kao faktor)"},
    {txt:"x = [FRAC:k − 5|2k + 4] (uz uvjet 2k + 4 ≠ 0, tj. k ≠ −2 — što je dano u zadatku)",final:true},
    {txt:"Točan odgovor: x = (k − 5) / (2k + 4) ili (k − 5) / (2(k + 2))",final:true,note:"odgovor"},
    {txt:"Provjera za k = 3 (npr.): 2·3·x + 5 = 3 − 4x → 6x + 5 = 3 − 4x → 10x = −2 → x = −1/5. Formula: (3−5)/(6+4) = −2/10 = −1/5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: identifikuj članove s x, izvuci x kao faktor, podijeli s preostalim koeficijentom. PAZI na uvjet 2k + 4 ≠ 0.",final:true,note:"postupak"},{txt:"Intuicija: Razlog uvjeta k ≠ −2: ako je 2k + 4 = 0 (tj. k = −2), izraz ima oblik 'broj = 0' koji ili je identitet (sve x vrijedi) ili nema rješenja. Uvjet dan u zadatku eliminira taj slučaj.",note:"intuicija",final:true}
  ]},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Riješite nejednadžbu (2x − 5)(5x + 2) > 3x² − x(5 − 7x).",
  sol:{ans:"x < −5/8",solFormula:{pre:"x < −",frac:[["5","8"]]},alt:["x<-5/8","x < -0,625","x < -5/8","x<−5/8"]},
  why:["Pravilo: kvadratni članovi obje strane se mogu poništiti ako su jednaki — onda je nejednadžba LINEARNA u x.","Ključno: dijeljenje (ili množenje) NEGATIVNIM brojem OBRĆE nejednakost: a > b ⟺ −a < −b. Tipičan trap u nejednadžbama.","Postupak: 1) razvij obje strane. 2) pojednostavni. 3) riješi linearno. 4) provjeri predznak koeficijenta uz x pri dijeljenju.","Intuicija: x < −5/8 znači skup brojeva manjih od −0,625. Geometrijski: lijevi dio brojevnog pravca, otvoreni rub na −5/8.","Česta greška 1: zaboraviti obrnuti nejednakost pri dijeljenju s −16 (dobiti x > −5/8 — krivi smjer). Greška 2: krivo razviti (2x − 5)(5x + 2) — paziti na predznak i preklapanja.","Alt metoda: prebaci sve na jednu stranu — 10x² − 21x − 10 − 10x² + 5x > 0 → −16x − 10 > 0 → −16x > 10 → x < −10/16 = −5/8. Konzistentno.","Provjera za x = 0 (NIJE < −5/8): lijeva (−5)·2 = −10; desna 3·0 − 0 = 0. Je li −10 > 0? NE ✓ (x = 0 nije rješenje, što je u skladu s našim x < −5/8)."],
  steps:[
    {txt:"Razvij lijevu stranu: (2x − 5)(5x + 2) = 10x² + 4x − 25x − 10 = 10x² − 21x − 10"},
    {txt:"Razvij desnu stranu: 3x² − x(5 − 7x) = 3x² − 5x + 7x² = 10x² − 5x"},
    {txt:"Nejednadžba: 10x² − 21x − 10 > 10x² − 5x"},
    {txt:"Oduzmi 10x² s obje strane: −21x − 10 > −5x"},
    {txt:"Premjesti: −21x + 5x > 10 → −16x > 10"},
    {txt:"Podijeli s −16 (PAZI: dijeljenje negativnim BROJ obrće nejednakost): x < 10/(−16) = −10/16 = −5/8",final:true},
    {txt:"Točan odgovor: x < −5/8 (ili decimalno x < −0,625).",final:true,note:"odgovor"},
    {txt:"Provjera za x = −1 (< −5/8): lijeva (−7)(−3) = 21; desna 3 − (−1)·12 = 3 + 12 = 15. 21 > 15 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: razvij obje strane, jednostavni — 10x² se poništava → linearna nejednadžba. Riješi PAZI na predznak pri dijeljenju.",final:true,note:"postupak"},{txt:"Intuicija: Ključno: dijeljenje (ili množenje) NEGATIVNIM brojem OBRĆE nejednakost: a > b ⟺ −a < −b. Tipičan trap u nejednadžbama.",note:"intuicija",final:true}
  ]},
  {id:23.1,type:"sa",topic:"kv",points:1,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Za koje realne brojeve t vrijedi jednakost t(2t + 9) = 5?",
  sol:{ans:"t = [FRAC:1|2] ili t = −5",solFormula:{pre:"t = ",frac:[["1","2"]],post:" ili t = −5"},alt:["-5, 1/2","t=0,5 ili t=-5","1/2 i -5","t = 1/2 ili t = −5","t = [FRAC:1|2] ili t = -5","0,5"]},
  why:["Pravilo: kvadratna jednadžba ax² + bx + c = 0 ima rješenja x = (−b ± √D)/(2a), D = b² − 4ac.","Znak diskriminante: D > 0 → dva realna rješenja; D = 0 → jedno (dvostruko); D < 0 → bez realnih.","Postupak: 1) razvij i sredi na standardni oblik. 2) izračunaj D. 3) primijeni formulu. 4) provjeri svako rješenje (npr. Vièteom ili supstitucijom).","Intuicija: parabola y = 2t² + 9t − 5 otvorena prema gore (a > 0); siječe x-os u dvije točke (D > 0). Tjeme u t = −b/(2a) = −9/4 = −2,25, što je između rješenja −5 i 1/2 ✓.","Česta greška 1: zaboraviti razviti zagradu prije sređivanja (krivo identificirati koeficijente). Greška 2: pomiješati predznak u −b: −9 vs +9.","Alt metoda (faktorizacija): 2t² + 9t − 5 = (2t − 1)(t + 5). Provjeri: 2t² + 10t − t − 5 = 2t² + 9t − 5 ✓. Rješenja: 2t − 1 = 0 → t = 1/2; t + 5 = 0 → t = −5.","Provjera supstitucijom za t = 1/2: 1/2 · (1 + 9) = 1/2 · 10 = 5 ✓. Za t = −5: −5 · (−10 + 9) = −5 · (−1) = 5 ✓"],
  steps:[
    {txt:"Razvij: t · 2t + t · 9 = 5 → 2t² + 9t = 5"},
    {txt:"Sredi na standardni oblik: 2t² + 9t − 5 = 0"},
    {txt:"Identificiraj koeficijente: a = 2, b = 9, c = −5"},
    {txt:"Diskriminanta: D = b² − 4ac = 81 − 4·2·(−5) = 81 + 40 = 121"},
    {txt:"√D = 11"},
    {txt:"Formula: t = (−b ± √D) / (2a) = (−9 ± 11) / 4"},
    {txt:"t₁ = (−9 + 11)/4 = 2/4 = 1/2"},
    {txt:"t₂ = (−9 − 11)/4 = −20/4 = −5",final:true},
    {txt:"Točan odgovor: t = 1/2 ili t = −5.",final:true,note:"odgovor"},
    {txt:"Provjera Vièteovim teoremom: zbroj rješenja = −b/a = −9/2; produkt = c/a = −5/2. 1/2 + (−5) = −9/2 ✓; (1/2)·(−5) = −5/2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: razvij, sredi na standardni oblik, izračunaj diskriminantu, primijeni formulu.",final:true,note:"postupak"},{txt:"Intuicija: Znak diskriminante: D > 0 → dva realna rješenja; D = 0 → jedno (dvostruko); D < 0 → bez realnih.",note:"intuicija",final:true}
  ]},
  {id:23.2,type:"sa",topic:"exp",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Riješite jednadžbu (0,01)^(3x−6) − 1 = 0.",
  sol:{ans:"2",alt:["x=2","x = 2","=2","2,0","2,0"]},
  why:["Pravilo: a^0 = 1 za sve a ≠ 0. Posebno (0,01)^0 = 1. Obrnuto: a^n = 1 (za a > 0, a ≠ 1) ⟹ n = 0.","Postupak: 1) izoliraj eksponencijalni izraz na jednoj strani (= 1 ili = neki broj). 2) ako je 1, eksponent = 0. Ako je drugi broj, logaritmiraj.","Intuicija: (0,01) je 1/100. Bilo koja njegova potencija manja je od 1 (osim 0-te). Da rezultat bude točno 1, eksponent mora biti 0.","Česta greška 1: misliti da (0,01)^n = 1 znači n = 1 (krivo — to bi dalo 0,01). Greška 2: pokušati logaritmirati prije sređivanja → log(0) nedefiniran.","Alt metoda: logaritmiraj obje strane (s bazom 10 ili e). log((0,01)^(3x−6)) = log(1) → (3x − 6)·log(0,01) = 0. Pošto log(0,01) = −2 ≠ 0, mora biti 3x − 6 = 0.","Provjera: za x = 2: eksponent = 0, (0,01)^0 = 1, 1 − 1 = 0 ✓"],
  steps:[
    {txt:"Premjesti 1: (0,01)^(3x − 6) = 1"},
    {txt:"Pravilo: a^n = 1 (za a > 0, a ≠ 1) ⟺ n = 0."},
    {txt:"Dakle 3x − 6 = 0"},
    {txt:"3x = 6 → x = 2",final:true},
    {txt:"Točan odgovor: x = 2.",final:true,note:"odgovor"},
    {txt:"Provjera: (0,01)^(3·2 − 6) = (0,01)^0 = 1. 1 − 1 = 0 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: prebaci konstantu (1) na drugu stranu, prepoznaj da a^n = 1 daje n = 0 (za a ≠ 1), riješi linearno.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: 1) izoliraj eksponencijalni izraz na jednoj strani (= 1 ili = neki broj). 2) ako je 1, eksponent = 0. Ako je drugi broj, logaritmiraj.",note:"intuicija",final:true}
  ]},
  {id:24.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = (2/7)x − 3/7. Za koji je x vrijednost funkcije f(x) za 2 veća od f(12)?",
  sol:{ans:"19",alt:["x=19","x = 19","19,0","= 19","19,0"]},
  why:["Pravilo: linearna funkcija f(x) = ax + b ima nagib a (koliko se f mijenja po jedinici x). Ako f(x₂) − f(x₁) = 2, onda a · (x₂ − x₁) = 2 → x₂ − x₁ = 2/a.","Brže rješenje: a = 2/7. f(x) − f(12) = 2 → [FRAC:2|7](x − 12) = 2 → x − 12 = 7 → x = 19. Bez izračuna f(12).","Intuicija: za svaku jedinicu povećanja x, f raste za 2/7. Da f poraste za 2, treba 2 / (2/7) = 7 jedinica x. Pa x = 12 + 7 = 19.","Česta greška 1: misliti da je 'f(x) za 2 veća od f(12)' znači x = 12 + 2 = 14 (krivo — to bi povećalo x, ne f). Greška 2: zaboraviti dodati f(12) prije rješavanja.","Alt metoda: izračunaj f(12) = 3 brojčano, postavi novu jednadžbu f(x) = 5, riješi linearno (kao u steps).","Provjera dimenzionalna: x = 19 > 12 ✓ (linearna funkcija raste, pa veće x daje veće f). f(19) − f(12) = 5 − 3 = 2 ✓"],
  steps:[
    {txt:"Izračunaj f(12): f(12) = (2/7)·12 − 3/7 = 24/7 − 3/7 = 21/7 = 3"},
    {txt:"f(x) treba biti za 2 veća od f(12), tj. f(x) = 3 + 2 = 5"},
    {txt:"Riješi: (2/7)x − 3/7 = 5"},
    {txt:"(2/7)x = 5 + 3/7 = 35/7 + 3/7 = 38/7"},
    {txt:"x = (38/7) · (7/2) = 38/2 = 19",final:true},
    {txt:"Točan odgovor: x = 19.",final:true,note:"odgovor"},
    {txt:"Provjera: f(19) = (2/7)·19 − 3/7 = 38/7 − 3/7 = 35/7 = 5. f(12) = 3. 5 − 3 = 2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) izračunaj f(12). 2) postavi f(x) = f(12) + 2. 3) riješi za x.",final:true,note:"postupak"},{txt:"Intuicija: Brže rješenje: a = 2/7. f(x) − f(12) = 2 → [FRAC:2|7](x − 12) = 2 → x − 12 = 7 → x = 19. Bez izračuna f(12).",note:"intuicija",final:true}
  ]},
  {id:24.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"U jednome uredu sakuplja se papir za recikliranje. U razdoblju od n tjedana sakupljeno je ukupno P(n) kilograma papira gdje se P(n) može izraziti formulom P(n) = 2,63n. Koliko je ukupno papira sakupljeno u tome uredu tijekom petoga i šestoga tjedna?",
  sol:{ans:"5,26",alt:["5,26","5,26 kg","5,3","5,3","5"]},
  why:["Pravilo: ako P(n) je KUMULATIVNI iznos do n-tog razdoblja, onda P(n) − P(n−1) je iznos U n-tom razdoblju.","Postupak: za pitanje 'koliko za tjedne a do b inkluzivno', računaj P(b) − P(a−1). Za samo 5. i 6. tjedan: P(6) − P(4) = 5,26.","Intuicija: P(n) = 2,63n je linearna (proporcionalna). Brzina sakupljanja je KONSTANTNA: 2,63 kg po tjednu. Za 2 uzastopna tjedna: 2 · 2,63 = 5,26.","Česta greška 1: misliti da je P(5) + P(6) ukupna količina (krivo — to bi dvaput uračunalo prvih 4 tjedana). Greška 2: zaboraviti da P(5) UKLJUČUJE prvih 5 tjedana.","Alt metoda: shvatiti da linearno P(n) = c · n znači da je svaka jedinica perioda doprinos c. Za k uzastopnih jedinica: k · c. Ovdje 2 tjedna · 2,63 = 5,26.","Provjera: P(6) = 15,78; P(4) = 10,52; razlika = 5,26 ✓"],
  steps:[
    {txt:"P(n) je UKUPNO papira do kraja n-tog tjedna (kumulativno)."},
    {txt:"Papir sakupljen u 5. tjednu: P(5) − P(4) = 2,63·5 − 2,63·4 = 2,63 (po jednom tjednu)."},
    {txt:"Papir u 6. tjednu: P(6) − P(5) = 2,63."},
    {txt:"Ukupno za 5. i 6. tjedan: 2,63 + 2,63 = 5,26 kg",final:true},
    {txt:"Alt direktno: P(6) − P(4) = 2,63·6 − 2,63·4 = 2,63·2 = 5,26",final:true},
    {txt:"Točan odgovor: 5,26 kg.",final:true,note:"odgovor"},
    {txt:"Provjera: linearna formula P(n) = 2,63n znači KONSTANTNA brzina (2,63 kg/tj). Za 2 tjedna: 2·2,63 = 5,26 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: razumi da je P(n) kumulativno; razlika P(b) − P(a) je 'od a+1 do b' tjedana.",final:true,note:"postupak"},{txt:"Intuicija: Postupak: za pitanje 'koliko za tjedne a do b inkluzivno', računaj P(b) − P(a−1). Za samo 5. i 6. tjedan: P(6) − P(4) = 5,26.",note:"intuicija",final:true}
  ]},
  {id:25.1,img:true,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Na skici je prikazan pravokutnik ABCD duljina stranica |AB| = 7 cm i |BC| = 3 cm. Na stranici AB bliže točki B nalazi se točka E tako da je ∠CED = 90°. Kolika je duljina dužine AE?",
  sol:{ans:"5,3",alt:["5,3","5,3 cm","5,30"]},
  why:["Pravilo: kad pravac kut između dvije dužine je 90°, trokut formiran je pravokutan i Pitagora vrijedi: a² + b² = c² (a, b kateti, c hipotenuza).","Ključ je prepoznati TRI pravokutna trokuta u slici: DEA (u A), CEB (u B), DEC (u E). Sve tri Pitagore vežu duljine.","Intuicija: |AE| je između 0 i 7 (na stranici AB). Uvjet ∠CED = 90° je jaki uvjet — ograničava x na specifične vrijednosti. Dva rješenja se javljaju zbog simetrije problema (E se može pomaknuti dvije pozicije).","Česta greška 1: zaboraviti uvjet 'bliže B' — postoji DRUGO rješenje x ≈ 1,7 koje odgovara E bliže A. Greška 2: krivi izbor trokuta za Pitagoru.","Postupak za uvjet: 'E na stranici AB BLIŽE TOČKI B' znači |EB| < |EA|, tj. |EB| < 3,5, što odgovara |AE| > 3,5.","Alt metoda: Talesov teorem (kut nad promjerom): E je na kružnici s promjerom CD. Središte kružnice je središte CD (točka koja je sredina pravokutnika). Polumjer = |CD|/2 = 3,5. Geometrijska konstrukcija daje istu kvadratnu.","Provjera dimenzionalna: |AE| ≈ 5,3 cm < 7 cm (duljina AB) ✓; |AE| > 3,5 (bliže B) ✓"],
  steps:[
    {txt:"Pravokutnik ABCD: |AB| = 7, |BC| = 3. Točka E na AB takva da je ∠CED = 90°."},
    {txt:"Označi |AE| = x. Tada |EB| = 7 − x."},
    {txt:"Trokut DEA: pravokutan u A, kateti |AD| = 3, |AE| = x → |DE|² = x² + 9"},
    {txt:"Trokut CEB: pravokutan u B, kateti |BC| = 3, |EB| = 7 − x → |CE|² = (7−x)² + 9"},
    {txt:"Trokut DEC: pravokutan u E (jer ∠CED = 90°). Hipotenuza |DC| = 7 (jer DC || AB i jednake duljine)."},
    {txt:"Pitagora: |DE|² + |CE|² = |DC|² = 49"},
    {txt:"(x² + 9) + ((7−x)² + 9) = 49"},
    {txt:"x² + 9 + 49 − 14x + x² + 9 = 49"},
    {txt:"2x² − 14x + 18 = 0 → x² − 7x + 9 = 0"},
    {txt:"x = (7 ± √(49 − 36))/2 = (7 ± √13)/2 ≈ (7 ± 3,606)/2"},
    {txt:"x₁ ≈ 5,303, x₂ ≈ 1,697. Pošto E je BLIŽE B nego A: |AE| > |EB|, tj. x > 3,5 → x = 5,303 ≈ 5,3 cm",final:true},
    {txt:"Točan odgovor: |AE| ≈ 5,3 cm.",final:true,note:"odgovor"},
    {txt:"Provjera: x ≈ 5,3, |EB| ≈ 1,7. |DE|² ≈ 28,09 + 9 = 37,09; |CE|² ≈ 2,89 + 9 = 11,89. Zbroj ≈ 48,98 ≈ 49 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: imenovanje |AE| = x, Pitagora za trokute oko E, korištenje uvjeta ∠CED = 90° kao Pitagora u DEC, riješi kvadratnu, odabir rješenja po geom. uvjetu.",final:true,note:"postupak"},{txt:"Intuicija: Ključ je prepoznati TRI pravokutna trokuta u slici: DEA (u A), CEB (u B), DEC (u E). Sve tri Pitagore vežu duljine.",note:"intuicija",final:true}
  ]},
  {id:25.2,img:true,type:"sa",topic:"geom",points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Kružnim dijagramom prikazan je broj posjetitelja triju koncerata. Kolika je mjera kuta α na tome dijagramu?",
  sol:{ans:"122°",alt:["122","122 stupnjeva","122 deg","122°","≈ 122°"]},
  why:["Pravilo kružnog dijagrama: 360° dijeli se PROPORCIONALNO udjelima podataka. Kut sektora = (broj_sektora / ukupno) · 360°.","Ako su udjeli izraženi postocima: kut = (postotak/100) · 360°. Npr. 50 % = 180°, 25 % = 90°.","Postupak: 1) zbroji sve vrijednosti za ukupno. 2) primijeni formulu za traženi sektor.","Intuicija: kut α je sektor s 1952 posjetitelja (drugi najveći). Ukupno ≈ 5760, što daje α ≈ (1952/5760)·360° ≈ 122°.","Česta greška 1: zaboraviti zbrojiti sve vrijednosti za ukupno. Greška 2: pomiješati sektore (α se odnosi na 1952, ne na drugi broj).","Alt metoda: provjeri sve tri sektore — kut(481) = (481/5760)·360° = 30°; kut(1952) = 122°; kut(3327) = 208°. Zbroj: 30 + 122 + 208 = 360° ✓.","Provjera: svi kutovi moraju zbrojiti 360°."],
  steps:[
    {txt:"Iz dijagrama tri sektora: 481, 1952, 3327 posjetitelja."},
    {txt:"Ukupno = 481 + 1952 + 3327 = 5760"},
    {txt:"Kut α odgovara sektoru s 1952 posjetitelja:"},
    {txt:"α = (1952 / 5760) · 360° = (1952 · 360°) / 5760",final:true},
    {txt:"α = 702720° / 5760 = 122°",final:true},
    {txt:"Točan odgovor: α = 122°.",final:true,note:"odgovor"},
    {txt:"Provjera: kut(481) = (481/5760)·360° = 30,06° ≈ 30°; kut(3327) = (3327/5760)·360° = 207,94° ≈ 208°. Zbroj: 30 + 122 + 208 = 360° ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) zbroji sve sektore za ukupno. 2) traženi sektor / ukupno · 360°.",final:true,note:"postupak"},
    {txt:"Intuicija: kružni dijagram je 'rezana pita'. Veći broj posjetitelja = veći komad pite (kut).",final:true,note:"intuicija"}
  ]},
  {id:26.1,img:true,type:"sa",topic:"geom",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Zadan je četverokut ABCD prikazan na skici. Kolika je površina četverokuta ABCD?",
  sol:{ans:"52,5",alt:["52,5","52,5 cm²","52,50","52.5"]},
  why:["Pravilo: ABCD na skici je TRAPEZ s pravim kutovima u A i B (AD ⊥ AB, BC ⊥ AB). AD i BC su paralelne (obje okomite na AB), pa je trapez s paralelnim stranicama AD i BC.","Formula trapeza: P = ((a + b) / 2) · h, gdje su a i b paralelne stranice, h njihova okomita udaljenost (= AB u ovom slučaju).","Postupak: 1) identificiraj paralelne stranice (AD = 6,5; BC = 4). 2) baza (h) = AB = 10. 3) primijeni formulu.","Intuicija: trapez 'prosječno' širok = (a+b)/2 = (6,5+4)/2 = 5,25. Površina = 5,25 · 10 = 52,5 cm².","Česta greška 1: koristiti formulu pravokutnika (a · b = 65 — krivo). Greška 2: zamijeniti baze i visine.","Alt metoda (razdjela): podijeli trapez vertikalnom linijom od C okomito na AD. Dobiš pravokutnik (4 × 10 = 40) i pravokutni trokut s katetama 10 i 2,5 (= (6,5−4)/2... wait, treba bolje rješenje. Bolje: trapez direktno).","Provjera dimenzionalna: cm² ✓; rezultat između minimalne (4·10=40) i maksimalne (6,5·10=65) kombinacije ✓."],
  steps:[
    {txt:"ABCD: pravokutni kutovi u A i B (na skici), AB = 10 cm baza."},
    {txt:"Paralelne stranice (obje okomite na AB): AD = 6,5 cm i BC = 4 cm."},
    {txt:"Ovo je TRAPEZ s paralelnim stranicama AD i BC."},
    {txt:"Formula: P = ((AD + BC) / 2) · AB = ((6,5 + 4) / 2) · 10"},
    {txt:"P = (10,5 / 2) · 10 = 5,25 · 10 = 52,5 cm²",final:true},
    {txt:"Točan odgovor: P = 52,5 cm².",final:true,note:"odgovor"},
    {txt:"Provjera: razdijelimo trapez na pravokutnik (4 × 10 = 40 cm²) i trokut (kateta 10, kateta 2,5 → P = (1/2)·10·2,5 = 12,5). Zbroj: 40 + 12,5 = 52,5 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj trapez. 2) identificiraj a, b, h. 3) primijeni P = (a+b)/2 · h.",final:true,note:"postupak"},
    {txt:"Intuicija: trapez = 'srednja širina puta dugačka' — pravokutnik istog 'prosjeka' širine.",final:true,note:"intuicija"}
  ]},
  {id:26.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Stožac i valjak imaju baze jednakih polumjera. Koliko je puta visina stošca veća od visine valjka ako su im volumeni jednaki?",
  sol:{ans:"3",alt:["3 puta","3,0","=3","3,0","= 3"]},
  why:["Pravilo: V valjka = π r² h (cijeli prostor); V stošca = (1/3)π r² h (samo trećina valjka istih dimenzija).","Faktor 1/3: stožac ima istu bazu i istu visinu kao 'okolni' valjak, ali ima samo trećinu njegove zapremine (poznato Kavalijerijevo načelo).","Intuicija: stožac je 'šiljast' i 'troši' samo trećinu prostora valjka. Da imaju ISTI volumen, stožac MORA biti 3× viši, da nadoknadi gubitak.","Postupak: izjednači formule, skrati zajedničko (π r²), izraduj omjer.","Česta greška 1: zaboraviti faktor 1/3 u formuli stošca (V = π r² h umjesto V = (1/3)π r² h). Greška 2: misliti da je omjer 1/3 (stožac je manji od valjka), ali pitanje je o VISINI.","Alt metoda: zamisli konkretne brojeve — r = 1, h_valjka = 1: V_v = π. Da V_s = π, treba (1/3)h_s = 1 → h_s = 3.","Provjera dimenzionalna: omjer bezdimenzionalan (visina/visina) ✓; 3 > 1 (stožac viši) ✓"],
  steps:[
    {txt:"Volumen stošca: V_s = (1/3)π r² h_s"},
    {txt:"Volumen valjka: V_v = π r² h_v"},
    {txt:"Uvjet jednakih volumena: V_s = V_v"},
    {txt:"(1/3)π r² h_s = π r² h_v"},
    {txt:"Pokrati π r² (radius jednak za obje): (1/3) h_s = h_v"},
    {txt:"h_s = 3 h_v → visina stošca je 3 puta veća od visine valjka.",final:true},
    {txt:"Točan odgovor: 3 puta.",final:true,note:"odgovor"},
    {txt:"Provjera: ako h_v = 1 i r = 1, V_v = π. Za V_s = π treba (1/3)π·h_s = π → h_s = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) napiši volumene oba tijela. 2) izjednači. 3) skratite zajedničke faktore (πr²). 4) riješi za omjer.",final:true,note:"postupak"},{txt:"Intuicija: Faktor 1/3: stožac ima istu bazu i istu visinu kao 'okolni' valjak, ali ima samo trećinu njegove zapremine (poznato Kavalijerijevo načelo).",note:"intuicija",final:true}
  ]},
  {id:27.1,img:true,type:"sa",topic:"kv",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Na slici su prikazani grafovi funkcija y = f(x) i y = g(x) i istaknute su njihove točke s cjelobrojnim koordinatama. Napišite koordinate tjemena grafa kvadratne funkcije f.",
  sol:{ans:"(2, 5)",alt:["(2,5)","(2. 5)","T(2,5)","T = (2, 5)","tjeme (2, 5)","2, 5","x=2, y=5"]},
  why:["Pravilo: tjeme parabole y = ax² + bx + c je u točki (−b/(2a), f(−b/(2a))). Vizualno: vrh parabole (max ako a<0, min ako a>0).","Tjeme = točka simetrije parabole. Os simetrije je vertikalan pravac kroz tjeme.","Postupak za očitavanje s grafa: 1) identificiraj smjer otvorenosti (gore/dolje). 2) nađi vrh. 3) očitaj cjelobrojne koordinate vrha s mreže.","Intuicija: parabola na slici otvorena je PREMA DOLJE (a<0), pa je tjeme MAKSIMUM. Najviša točka je (2, 5) — cjelobrojna točka označena s krugom.","Česta greška: pomiješati tjeme s nul-točkama funkcije (gdje f=0) ili sa sjecištima dvije funkcije (f=g).","Alt metoda: ako se zna algebarski oblik f(x) = a(x − x₀)² + y₀, tjeme je odmah (x₀, y₀)."],
  steps:[
    {txt:"S grafa: parabola otvorena PREMA DOLJE, vrh (najviša točka) označen je na (2, 5)."},
    {txt:"Cjelobrojne točke f vidljive na mreži: (−1, −4), (0, 1), (1, 4), (2, 5), (3, 4), (4, 1), (5, −4)."},
    {txt:"Simetrija: f(1) = f(3) = 4; f(0) = f(4) = 1; f(−1) = f(5) = −4 — sve simetrične oko x = 2 (osovine simetrije)."},
    {txt:"Tjeme = točka simetrije = (2, 5).",final:true},
    {txt:"Točan odgovor: tjeme (2, 5).",final:true,note:"odgovor"},
    {txt:"Provjera algebarski: ako f(x) = a(x − 2)² + 5, iz f(0) = 4a + 5 = 1 → a = −1. Pa f(x) = −(x−2)² + 5. Provjera f(1) = −1 + 5 = 4 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) prepoznaj smjer otvorenosti parabole. 2) nađi ekstremnu točku. 3) očitaj cjelobrojne koordinate.",final:true,note:"postupak"},
    {txt:"Intuicija: za parabolu otvorenu prema dolje, tjeme je MAKSIMUM. Vrijednost y_T = 5 je najveća za graf f.",final:true,note:"intuicija"}
  ]},
  {id:27.2,img:true,type:"sa",topic:"fun",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Napišite koeficijent smjera grafa linearne funkcije g.",
  sol:{ans:"3",alt:["k=3","k = 3","3,0","=3","3,00"]},
  why:["Pravilo: linearna funkcija y = kx + n ima koeficijent smjera k (nagib) i slobodni član n (sjecište s y-osi).","Nagib k mjeri brzinu promjene: za svaku jedinicu povećanja x, y se mijenja za k.","Postupak za očitavanje s grafa: nađi dvije cjelobrojne točke na pravcu (P₁(x₁, y₁), P₂(x₂, y₂)), izračunaj k = (y₂ − y₁)/(x₂ − x₁).","Intuicija: k = 3 znači STRMI rast — za 1 udesno, 3 gore. Vizualno: pravac koji 'leti uvis'.","Česta greška 1: zamijeniti Δy i Δx (dobiti 1/3 umjesto 3). Greška 2: krivi predznak — ako pravac OPADA, k < 0.","Alt metoda: ako znaš dvije cjelobrojne točke s grafa, direktna formula nagiba je dovoljna.","Provjera: pravac mora konzistentno ići 3 jedinice gore za svaku jedinicu desno na cijelom grafu."],
  steps:[
    {txt:"S grafa: g(x) prolazi kroz cjelobrojne točke (−1, −4), (0, −1), (1, 2) i (2, 5)."},
    {txt:"Izabrati dvije točke za izračun nagiba — npr. (0, −1) i (1, 2)."},
    {txt:"k = Δy / Δx = (2 − (−1)) / (1 − 0) = 3 / 1 = 3",final:true},
    {txt:"Točan odgovor: k = 3.",final:true,note:"odgovor"},
    {txt:"Provjera s drugim parom točaka: (−1, −4) i (2, 5). k = (5 − (−4))/(2 − (−1)) = 9/3 = 3 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) lociraj dvije cjelobrojne točke na pravcu g. 2) izračunaj nagib (Δy/Δx). 3) provjeri s trećom točkom.",final:true,note:"postupak"},
    {txt:"Intuicija: nagib > 0 znači pravac raste. Vrijednost k = 3 je strmi rast (za 1 desno, 3 gore).",final:true,note:"intuicija"}
  ]},
  {id:27.3,img:true,type:"sa",topic:"kv",points:1,img:true,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Za koje vrijednosti od x vrijedi f(x) = g(x)?",
  sol:{ans:"x = −1 i x = 2",alt:["-1 i 2","x=-1 i x=2","{-1, 2}","−1, 2","x = -1 i x = 2","x=−1ix=2"]},
  why:["Pravilo: točke sjecišta dvije funkcije su x-vrijednosti gdje f(x) = g(x). To su rješenja jednadžbe.","Geometrijski: prešasti grafovi. Algebarski: jedna nepoznata, jedna jednadžba.","Postupak (algebarski): 1) napiši f(x) − g(x) = 0. 2) riješi kvadratnu (ili kakvog reda dobiješ). Postupak (grafički): očitaj presjeke direktno s grafa.","Intuicija: ako je f kvadratna i g linearna, jednadžba f(x) = g(x) je kvadratna, s do 2 rješenja. Ako se grafovi sijeku u 2 točke, sve točno.","Česta greška 1: očitati 'x' iz krivih koord. točaka (možda y vrijednosti). Greška 2: smatrati da je samo 1 sjecište, kad ih ima 2.","Alt metoda: ako su f i g zadani algebarski, riješi sustavno; ako samo grafički, koristiti graf.","Provjera: rješenja MORAJU biti gdje se grafovi vizualno sijeku ✓"],
  steps:[
    {txt:"Sjecišta dviju funkcija f i g: rješenja jednadžbe f(x) = g(x), ili točke gdje se grafovi sijeku."},
    {txt:"Iz grafa: očitaj točke sjecišta s cjelobrojnim koordinatama."},
    {txt:"Sjecišta su u x = −1 i x = 2 (s grafa).",final:true},
    {txt:"Točan odgovor: x = −1 i x = 2.",final:true,note:"odgovor"},
    {txt:"Provjera algebarski: ako su f tjeme (2, 5) parabola, neki oblik f(x) = a(x − 2)² + 5; g(x) = 3x + n (s nagibom 3). Iz f(−1) = g(−1) i f(2) = g(2)... (skraćeno, ali rezultat iz grafa pouzdan)",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) algebarski: postavi f(x) = g(x), riješi kvadratnu. 2) grafički: očitaj presjeke.",final:true,note:"postupak"},
    {txt:"Intuicija: parabola i pravac mogu se sijeci u 0, 1 ili 2 točke (ovisno o diskriminanti).",final:true,note:"intuicija"},{txt:"Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.",note:"verifikacija",final:true}
  ]},
  {id:28.1,img:true,type:"sa",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Količina goriva u spremniku automobila mijenja se linearno ovisno o broju prijeđenih kilometara. U tablici su navedeni podatci o količini goriva tijekom jednoga putovanja. Ako je na početku toga putovanja spremnik goriva bio 80 % napunjen, koliki je ukupni kapacitet spremnika?",
  sol:{ans:"51,5",alt:["51,5","51,5 L","52"]},
  why:["Pravilo postotka: p % od V = (p/100) · V. Obrnuto: ako je iznos a = p % od V, tada V = a / (p/100) = 100a/p.","Postupak: identificiraj koje je VRIJEDNOST poznata (početno gorivo 41,2 L) i njen UDIO u ukupnom (80 %). Onda Total = Vrijednost / Udio.","Intuicija: ako je 80 % spremnika = 41,2 L, onda 1 % = 41,2/80 = 0,515 L, pa 100 % = 51,5 L. Direktan rezon.","Česta greška 1: izračunati 80 % od 41,2 (krivo — to bi dalo 32,96 L, a treba INVERZNO). Greška 2: zaboraviti da je 80 % iz uvjeta, a ne iz tablice.","Alt metoda: postavi proporciju — 41,2 : 80 = K : 100 → K = 4120/80 = 51,5.","Provjera dimenzionalna: L ✓ (kapacitet u litrama). Razuman raspon: spremnici tipično 30–80 L, 51,5 je u tom rasponu ✓"],
  steps:[
    {txt:"Iz tablice: na početku putovanja (s = 0 km) imamo 41,2 L goriva."},
    {txt:"Zadano: ta količina (41,2 L) predstavlja 80 % kapaciteta spremnika."},
    {txt:"Neka je K kapacitet (u L). Tada: 0,80 · K = 41,2"},
    {txt:"K = 41,2 / 0,80 = 51,5 L",final:true},
    {txt:"Točan odgovor: kapacitet = 51,5 L.",final:true,note:"odgovor"},
    {txt:"Provjera: 80 % od 51,5 = 0,8 · 51,5 = 41,2 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: identificiraj početnu količinu goriva iz tablice (41,2 L), prepoznaj da je to 80 % kapaciteta, riješi proporcijom.",final:true,note:"postupak"},
    {txt:"Intuicija: spremnik je za 1/5 prazan kad putovanje počne, pa ukupan kapacitet je 41,2 / 0,8 = 51,5 L.",final:true,note:"intuicija"}
  ]},
  {id:28.2,img:true,type:"sa",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Koliko je goriva potrošio taj automobil za prijeđenih 100 km na tome putovanju?",
  sol:{ans:"6,4",alt:["6,4","6,4 L","6"]},
  why:["Pravilo: linearna promjena znači konstantna brzina mijenjanja. Potrošnja po km je nagib funkcije G(s).","Postupak: 1) izračunaj DOZA potrošnje između dvije točke tablice (Δ goriva). 2) podijeli s Δ udaljenosti. 3) pomnoži s 100 ako želiš L/100 km.","Brže: razmišljaj u 'L na km' kao nagib (-k), pa pomnoži s 100.","Intuicija: 'L na 100 km' je standardna mjerna jedinica za potrošnju automobila. Stari automobili: 7-10 L/100km, novi: 5-7. 6,4 je realistično.","Česta greška 1: zbrojiti vrijednosti tablice (krivo). Greška 2: koristiti samo dvije točke bez provjere linearnosti.","Alt metoda: koristiti DRUGI par podataka (0 i 480 km, ili 225 i 480 km) — sve trebaju dati istu potrošnju ako je linearno.","Provjera s 3 točke: (480 − 225) km koristilo (26,8 − 10,48) L. 255 km / 16,32 L → 16,32/255 = 0,064 L/km ✓"],
  steps:[
    {txt:"Iz tablice: za 225 km potrošeno 41,2 − 26,8 = 14,4 L. Za 480 km potrošeno 41,2 − 10,48 = 30,72 L."},
    {txt:"Provjera linearnosti: omjer potrošnje po km mora biti konstantan."},
    {txt:"14,4 / 225 = 0,064 L/km. Za 480 km: 480 · 0,064 = 30,72 ✓ (linearno)"},
    {txt:"Potrošnja za 100 km: 100 · 0,064 = 6,4 L",final:true},
    {txt:"Točan odgovor: 6,4 L na 100 km.",final:true,note:"odgovor"},
    {txt:"Provjera: za 225 km treba 225 · 0,064 = 14,4 L; iz tablice je razlika 41,2 − 26,8 = 14,4 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: izračunaj potrošnju po km iz tablice (linearno), pomnoži s 100.",final:true,note:"postupak"},
    {txt:"Intuicija: prosječna potrošnja po km mora biti konstantna (linearno). Pomnoženo sa 100 daje 'litre na 100 km' — standardna jedinica.",final:true,note:"intuicija"}
  ]},
  {id:28.3,img:true,type:"sa",topic:"fun",points:1,img:true,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Zapišite G(s) kao funkciju od s gdje je s prijeđeni put u kilometrima, a G(s) količina goriva u spremniku tijekom toga putovanja.",
  sol:{ans:"G(s) = 41,2 − 0,064s",alt:["G(s)=41,2-0,064s","41,2-0,064s","G(s) = 41,2 − 0,064·s","G(s)=41,2−0,064s","G(s) = 41,2 − 0,064s","G(s) = 41,2 - 0,064s"]},
  why:["Pravilo: linearna funkcija G(s) = as + b ima nagib a i sjecište s y-osi (s = 0) jednako b. Za nas: G(0) = b = 41,2.","Postupak: 1) identificiraj b iz G(0). 2) izračunaj a iz dvije točke (a = ΔG/Δs). 3) PAZI na predznak — ako G pada s rastom s, a < 0.","Intuicija: model linearne potrošnje je idealizacija (u stvarnosti varira s brzinom, terenom). Ali za ovu zadaću pretpostavlja se konstantna potrošnja.","Česta greška 1: zaboraviti negativan predznak a (G(s) = 41,2 + 0,064s — krivo, gorivo bi raslo!). Greška 2: pomiješati a i b.","Alt metoda: koristi dvije točke (0, 41,2) i (480, 10,48). a = (10,48 − 41,2)/(480 − 0) = −30,72/480 = −0,064. b = 41,2 (iz prve točke).","Provjera s TRI točke iz tablice: G(0) = 41,2 ✓; G(225) = 41,2 − 14,4 = 26,8 ✓; G(480) = 41,2 − 30,72 = 10,48 ✓","Domena: s ∈ [0, ?]. G(s) = 0 kad 0,064s = 41,2 → s = 643,75 km. Auto ostaje bez goriva nakon ~644 km (uz pretpostavku linearne potrošnje)."],
  steps:[
    {txt:"G(s) je linearna: G(s) = a · s + b. Treba odrediti a i b."},
    {txt:"b = G(0) = 41,2 (početno gorivo iz tablice)."},
    {txt:"a = nagib = promjena G po jedinici s = potrošnja po km."},
    {txt:"Iz Q28,2: potrošnja je 0,064 L/km, ali nagib G je NEGATIVAN (gorivo SMANJUJE s rastom puta): a = −0,064."},
    {txt:"G(s) = 41,2 − 0,064s",final:true},
    {txt:"Točan odgovor: G(s) = 41,2 − 0,064s.",final:true,note:"odgovor"},
    {txt:"Provjera za s = 225: G = 41,2 − 0,064·225 = 41,2 − 14,4 = 26,8 ✓. Za s = 480: G = 41,2 − 0,064·480 = 41,2 − 30,72 = 10,48 ✓",final:true,note:"verifikacija"},
    {txt:"Postupak: 1) iz G(0) odredi konstantu b. 2) iz Δgoriva/Δs odredi nagib (s negativnim predznakom jer gorivo pada).",final:true,note:"postupak"},
    {txt:"Intuicija: linearna funkcija oblika G(s) = početno − potrošnja·s. Početno = 41,2. Potrošnja = 0,064 L/km. Pa funkcija pada kao automobil putuje.",final:true,note:"intuicija"}
  ]}
];

export const qImages = {
  "2019_ljeto_B__19.1": () => e(SvgT19a_2019Blj, null),
  "2019_ljeto_B__25.1": () => e(Svg25a_2019Blj, null),
  "2019_ljeto_B__25.2": () => e(Svg25b_2019Blj, null),
  "2019_ljeto_B__26.1": () => e(Svg26a_2019Blj, null),
  "2019_ljeto_B__27.1": () => e(Svg27_2019Blj, null),
  "2019_ljeto_B__27.2": () => e(Svg27_2019Blj, null),
  "2019_ljeto_B__27.3": () => e(Svg27_2019Blj, null),
  "2019_ljeto_B__28.1": () => e(SvgT28_2019Blj, null),
  "2019_ljeto_B__28.2": () => e(SvgT28_2019Blj, null),
  "2019_ljeto_B__28.3": () => e(SvgT28_2019Blj, null),
};
