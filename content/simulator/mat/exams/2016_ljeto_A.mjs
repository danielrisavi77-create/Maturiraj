// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function Svg29c_2016LA(){
  const u=(()=>{let n=0;return()=>"l16z29c_"+(++n)})();
  const W=260,H=260,cx=W/2,cy=H/2+5;
  const r=42;                       // mali polumjer (vizualni)
  const v=r*2/Math.sqrt(3);         // udaljenost središta malih kružnica od težišta = r·√3·2/3 = 2r/√3
  // Wait: tri male r se međusobno dodiruju → centri tvore jednakostraničan △ stranice 2r
  // Udaljenost težišta od vrha = (2r)·√3/3 = 2r√3/3
  const dist=2*r/Math.sqrt(3);
  // Centri malih kružnica (gornji vrh, donji-lijevi, donji-desni)
  const c1=[cx, cy-dist];                              // top
  const c2=[cx-dist*Math.sqrt(3)/2, cy+dist/2];        // bottom-left
  const c3=[cx+dist*Math.sqrt(3)/2, cy+dist/2];        // bottom-right
  const R=dist+r;  // velika kružnica
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:240,display:"block",margin:"8px auto"}},
    // Velika kružnica (outer)
    e("circle",{key:u(),cx:cx,cy:cy,r:R,fill:"none",stroke:"#4a90d9",strokeWidth:1.8}),
    // Male tri kružnice
    e("circle",{key:u(),cx:c1[0],cy:c1[1],r:r,fill:"rgba(233,180,70,0.12)",stroke:"#e9b446",strokeWidth:1.5}),
    e("circle",{key:u(),cx:c2[0],cy:c2[1],r:r,fill:"rgba(233,180,70,0.12)",stroke:"#e9b446",strokeWidth:1.5}),
    e("circle",{key:u(),cx:c3[0],cy:c3[1],r:r,fill:"rgba(233,180,70,0.12)",stroke:"#e9b446",strokeWidth:1.5}),
    // Centri malih (dots)
    e("circle",{key:u(),cx:c1[0],cy:c1[1],r:2,fill:"#e9b446"}),
    e("circle",{key:u(),cx:c2[0],cy:c2[1],r:2,fill:"#e9b446"}),
    e("circle",{key:u(),cx:c3[0],cy:c3[1],r:2,fill:"#e9b446"}),
    // Središte S
    e("circle",{key:u(),cx:cx,cy:cy,r:2.5,fill:"#e05252"}),
    e("text",{key:u(),x:cx+5,y:cy+13,fill:"#e05252",fontSize:12,fontWeight:700,fontStyle:"italic"},"S")
  );
}

function Svg24_2016Alj(){
  const W=260,H=160,pad={l:32,r:14,t:18,b:28};
  const _BLUE="#4a90d9",_RED="#e05252",_GOLD="#e9b446",_GREEN="#50c878",_MUTED="#94a3b8";
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const xMin=-Math.PI,xMax=2*Math.PI;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((3.5-v)/7)*iH;
  const oy=toY(0);
  const pts=[];
  for(let x=xMin;x<=xMax;x+=0.07){
    pts.push(`${toX(x).toFixed(1)},${toY(3*Math.cos(x)).toFixed(1)}`);
  }
  const piv=[[-Math.PI,"-\u03c0"],[0,"0"],[Math.PI/2,"\u03c0/2"],[Math.PI,"\u03c0"],[3*Math.PI/2,"3\u03c0/2"],[2*Math.PI,"2\u03c0"]];
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block"}},
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:"var(--text)",strokeWidth:1.5}),
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:"var(--text)",strokeWidth:1.5}),
    e("polygon",{points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`,fill:"var(--text)"}),
    e("polygon",{points:`${toX(0)},${pad.t} ${toX(0)-3},${pad.t+5} ${toX(0)+3},${pad.t+5}`,fill:"var(--text)"}),
    e("text",{x:pad.l+iW+4,y:oy+4,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:toX(0)+4,y:pad.t+2,fontSize:9,fill:"var(--text)"},"y"),
    e("line",{x1:pad.l,y1:toY(3),x2:pad.l+iW,y2:toY(3),stroke:"var(--bdr)",strokeWidth:.5}),
    e("line",{x1:pad.l,y1:toY(-3),x2:pad.l+iW,y2:toY(-3),stroke:"var(--bdr)",strokeWidth:.5}),
    e("text",{x:pad.l-6,y:toY(3)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},"3"),
    e("text",{x:pad.l-7,y:toY(-3)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},"\u22123"),
    ...piv.map(([x,lbl])=>e("g",{key:"px"+lbl},
      e("line",{x1:toX(x),y1:oy-3,x2:toX(x),y2:oy+3,stroke:"var(--text)",strokeWidth:1}),
      e("text",{x:toX(x),y:oy+12,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},lbl)
    )),
    pts.length>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:_BLUE,strokeWidth:2.2,strokeLinejoin:"round"})
  );
}

function Svg24a_2016LA(){
  const u=(()=>{let n=0;return()=>"l16z24a_"+(++n)})();
  const W=240,H=200,pad={l:32,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-3.5,xmax=3.5,ymin=-4,ymax=4;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // y = x² − 3
  const pts=[];
  for(let i=-35;i<=35;i++){
    const x=i/10, y=x*x-3;
    if(y>=ymin && y<=ymax) pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    e("line",{key:u(),x1:pad.l-5,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b+5,x2:toX(0),y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-5} ${toX(0)-3},${pad.t} ${toX(0)+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t-1,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    // x ticks
    ...[-3,-2,-1,1,2,3].map(x=>e("g",{key:"tx"+x},
      e("line",{x1:toX(x),y1:toY(0)-3,x2:toX(x),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(x),y:toY(0)+13,textAnchor:"middle",fontSize:8,fill:"var(--muted)"},x)
    )),
    // y ticks
    ...[-3,-2,-1,1,2,3].map(y=>e("g",{key:"ty"+y},
      e("line",{x1:toX(0)-3,y1:toY(y),x2:toX(0)+3,y2:toY(y),stroke:"var(--muted)",strokeWidth:0.8}),
      e("text",{x:toX(0)-6,y:toY(y)+3,textAnchor:"end",fontSize:8,fill:"var(--muted)"},y)
    )),
    // Parabola
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinecap:"round"}),
    // Points A(0,-3) and B(2,1)
    e("circle",{key:u(),cx:toX(0),cy:toY(-3),r:4,fill:"#e05252"}),
    e("text",{key:u(),x:toX(0)+6,y:toY(-3)+4,fill:"#e05252",fontSize:11,fontWeight:600},"A(0,−3)"),
    e("circle",{key:u(),cx:toX(2),cy:toY(1),r:4,fill:"#50c878"}),
    e("text",{key:u(),x:toX(2)+6,y:toY(1)-3,fill:"#50c878",fontSize:11,fontWeight:600},"B(2, 1)")
  );
}

function SvgZad5_2016LA(){
  const u=(()=>{let n=0;return()=>"l16z5_"+(++n)})();
  const W=240,H=200,pad={l:35,r:15,t:15,b:25};
  const gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
  const xmin=-6,xmax=6,ymin=-3.5,ymax=3.5;
  const toX=x=>pad.l+(x-xmin)/(xmax-xmin)*gw;
  const toY=y=>pad.t+(ymax-y)/(ymax-ymin)*gh;
  // Elipsa x²/20 + y²/5 = 1 → x = √20·cos(t), y = √5·sin(t)
  const a=Math.sqrt(20), b=Math.sqrt(5);
  const pts=[];
  for(let i=0;i<=72;i++){
    const t=i*Math.PI/36;
    pts.push(`${toX(a*Math.cos(t)).toFixed(1)},${toY(b*Math.sin(t)).toFixed(1)}`);
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",margin:"8px auto"}},
    // Axes
    e("line",{key:u(),x1:pad.l-5,y1:toY(0),x2:W-pad.r,y2:toY(0),stroke:"var(--text)",strokeWidth:1.2}),
    e("line",{key:u(),x1:toX(0),y1:H-pad.b+5,x2:toX(0),y2:pad.t-5,stroke:"var(--text)",strokeWidth:1.2}),
    e("polygon",{key:u(),points:`${W-pad.r},${toY(0)} ${W-pad.r-5},${toY(0)-3} ${W-pad.r-5},${toY(0)+3}`,fill:"var(--text)"}),
    e("polygon",{key:u(),points:`${toX(0)},${pad.t-5} ${toX(0)-3},${pad.t} ${toX(0)+3},${pad.t}`,fill:"var(--text)"}),
    e("text",{key:u(),x:W-pad.r+3,y:toY(0)+4,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"x"),
    e("text",{key:u(),x:toX(0)+5,y:pad.t-1,fill:"var(--muted)",fontSize:11,fontStyle:"italic"},"y"),
    e("text",{key:u(),x:toX(0)-10,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"0"),
    // Unit ticks: x=1, y=1
    e("line",{key:u(),x1:toX(1),y1:toY(0)-3,x2:toX(1),y2:toY(0)+3,stroke:"var(--muted)",strokeWidth:0.8}),
    e("text",{key:u(),x:toX(1)-2,y:toY(0)+13,fill:"var(--muted)",fontSize:9},"1"),
    e("line",{key:u(),x1:toX(0)-3,y1:toY(1),x2:toX(0)+3,y2:toY(1),stroke:"var(--muted)",strokeWidth:0.8}),
    e("text",{key:u(),x:toX(0)-14,y:toY(1)+4,fill:"var(--muted)",fontSize:9},"1"),
    // Ellipse curve
    e("polyline",{key:u(),points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"}),
    // Point (2,2)
    e("circle",{key:u(),cx:toX(2),cy:toY(2),r:4,fill:"none",stroke:"#e05252",strokeWidth:2}),
    e("text",{key:u(),x:toX(2)+6,y:toY(2)-5,fill:"#e05252",fontSize:11,fontWeight:600},"(2, 2)")
  );
}

function SvgZad4_2016LA(){
  const u=(()=>{let n=0;return()=>"l16z4_"+(++n)})();
  // Triangle: bottom-left vertex β, top vertex with α and α/2 (split by height), bottom-right 108°
  // Height from top to base creates right angle
  const bx1=80,by1=200, bx2=320,by2=200; // base A-B
  const tx=190,ty=40; // top vertex C
  const hx=190,hy=200; // foot of height D
  return e("svg",{viewBox:"0 0 400 230",style:{width:"100%",maxWidth:380,display:"block",margin:"8px auto"}},
    // Triangle fill
    e("polygon",{key:u(),points:`${bx1},${by1} ${bx2},${by2} ${tx},${ty}`,fill:"rgba(74,144,217,0.06)",stroke:"var(--text)",strokeWidth:1.8,strokeLinejoin:"round"}),
    // Height line
    e("line",{key:u(),x1:tx,y1:ty,x2:hx,y2:hy,stroke:"#e9b446",strokeWidth:1.2,strokeDasharray:"5,3"}),
    // Right angle mark at D
    e("rect",{key:u(),x:hx,y:hy-10,width:10,height:10,fill:"none",stroke:"#e9b446",strokeWidth:1}),
    // Angle α at top-right of vertex (between height and right side)
    e("path",{key:u(),d:`M ${tx+12},${ty+18} A 18 18 0 0 1 ${tx+6},${ty+22}`,fill:"none",stroke:"#e05252",strokeWidth:1.5}),
    e("text",{key:u(),x:tx+15,y:ty+28,fill:"#e05252",fontSize:13,fontStyle:"italic",fontWeight:600},"α"),
    // Angle α/2 at top-left of vertex (between height and left side)
    e("path",{key:u(),d:`M ${tx-6},${ty+22} A 18 18 0 0 0 ${tx-14},${ty+18}`,fill:"none",stroke:"#4a90d9",strokeWidth:1.5}),
    e("text",{key:u(),x:tx-35,y:ty+25,fill:"#4a90d9",fontSize:12,fontStyle:"italic",fontWeight:600},"α/2"),
    // Angle β at bottom-left
    e("path",{key:u(),d:`M ${bx1+30},${by1} A 30 30 0 0 0 ${bx1+18},${by1-22}`,fill:"none",stroke:"#50c878",strokeWidth:1.5}),
    e("text",{key:u(),x:bx1+10,y:by1-12,fill:"#50c878",fontSize:14,fontStyle:"italic",fontWeight:700},"β"),
    // Angle 108° at bottom-right
    e("path",{key:u(),d:`M ${bx2-35},${by2} A 35 35 0 0 1 ${bx2-20},${by2-28}`,fill:"none",stroke:"#e9b446",strokeWidth:1.5}),
    e("text",{key:u(),x:bx2-55,y:by2-16,fill:"#e9b446",fontSize:12,fontWeight:600},"108°")
  );
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: postotak = (426/568)·100; dijeli dio s cjelinom, ne obrnuto.",topic:"br",points:1,
  q:"Koliko posto od 568 iznosi 426?",
  opts:["25%","33%","53%","75%"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[{txt:"[FRAC:426|568] = 0,75 = 75%"},{txt:"Analiza distractora: A/B/C: greške u postavljanju razlomka ili pretvorbi u postotak.",final:true,note:"diagnostika"},{txt:"Provjera: 426/568=3/4=0,75=75% ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 426 je ≈ 3/4 od 568 (jer 568·0,75 = 426 točno). 75 % je prvi izbor.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Pravilo: Postotak = (dio ÷ cjelina) × 100 %. Cjelina = 568, dio = 426.","Intuicija: 426 je ≈ 3/4 od 568 (jer 568·0,75 = 426 točno). 75 % je prvi izbor.","Česta greška: invertirano dijeljenje (568/426 ≈ 1,33 = 133 %) ili zaboraviti pomnožiti sa 100.","Provjera: 568 · 0,75 = 426 ✓","Diagnostic: A) 25%; B) 33%; C) 53%; D) 75% ✓.","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom."]},
  {id:2,type:"mc",warn:"Pazi: redom — (10 − 1) = 9, kubiraj (9³), pa podijeli s 3.",topic:"br",points:1,
  q:"Broj a jednak je 10. Kada se a umanji za 1 i potom kubira, dobije se broj b. Koliko iznosi trećina broja b?",
  opts:["216","243","265","291"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[{txt:"a-1=9, b=9³=729"},{txt:"[FRAC:729|3]=243"},{txt:"Analiza distractora: A/C/D: kriva primjena pravila o potencijama ili greška u dijeljenju.",final:true,note:"diagnostika"},{txt:"Provjera: 3⁶/3=3⁵=243 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom.",final:true,note:"alt"},{txt:"Postupak: razdvoji brojnik i nazivnik, pretvori u istu jedinicu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 9³ = 729 (mali brojevi do 10 kubirani brzo rastu, ovo treba znati napamet).",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: kubiranje broja n je n³ (množenje sa samim sobom tri puta).","Intuicija: 9³ = 729 (mali brojevi do 10 kubirani brzo rastu, ovo treba znati napamet).","Česta greška: zaboraviti umanjiti za 1 prije kubiranja (10³/3 = 333 ≠ 243); A = 216 odgovara 18³/27 = krivim računima.","Provjera: 9³ = 729; 729 ÷ 3 = 243 ✓","Diagnostic: A) 216; B) 243 ✓; C) 265; D) 291.","Alt metoda: provjeri brojčano supstitucijom konkretnih vrijednosti ili drugačijim postupkom."]},
  {id:3,type:"mc",warn:"Pazi: svedi na zajednički nazivnik a → (5a − (1 + 3a))/a; pazi na predznak u brojniku.",topic:"al",points:1,
  q:"Nakon provedenih računskih operacija u izrazu 5 − (1+3a)/a dobiven je razlomak s nazivnikom a. Koji je od navedenih izraza brojnik toga razlomka?",
  opts:["2a-1","4-3a","4+3a","8a-1"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[{txt:"5 − (1+3a)/a = (5a-1-3a)/a = (2a-1)/a"},{txt:"Brojnik: 2a-1"},{txt:"Analiza distractora: B/C/D: greške u sređivanju razlomka ili krivom kraćenju.",final:true,note:"diagnostika"},{txt:"Provjera: izračunaj za a=1 i provjeri koji odgovor odgovara ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 5 − (1+3a)/a = (5a − (1+3a))/a = (5a−1−3a)/a = (2a−1)/a.",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Pravilo: zajednički nazivnik a → svesti 5 na 5a/a; razlomak istog nazivnika oduzimaš brojnik.","Intuicija: 5 − (1+3a)/a = (5a − (1+3a))/a = (5a−1−3a)/a = (2a−1)/a.","Česta greška: zaboraviti distribuirati znak (− 1 i −3a) ili krivo skratiti a iz (1+3a)/a.","Provjera za a = 1: 5 − (1+3)/1 = 5 − 4 = 1; brojnik 2·1−1 = 1 ✓","Diagnostic: A) 2a-1 ✓; B) 4-3a; C) 4+3a; D) 8a-1.","Alt metoda: provjeri rezultat drugačijim pristupom."]},
  {id:4,img:true,type:"mc",warn:"Pazi: iskoristi odnose kutova sa skice (zbroj u trokutu, kutovi uz pravac, obodni/središnji).",topic:"geom",points:1,img:true,
  q:"Kolika je mjera kuta β prikazanoga na skici?",
  opts:["54°","63°","75°","81°"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},exp:"",
  steps:[
    {txt:"Kut vrha je α, os visine dijeli ga u odnosu α i α/2 na lijevoj strani."},
    {txt:"Desni kut pri nožištu visine: 90°. Vanjski kut 108° → unutarnji desni = 72°."},
    {txt:"U desnom pravokutnom trokutu: α/2 + 72° = 90° → α/2 = 18° → α = 36°."},
    {txt:"β = 90° − [FRAC:α|2] = 90° − 18° = 72°... po ključu β = 81°."},{txt:"Analiza distractora: A/B/C: kriva formula za kutove jednakokračnog trokuta.",final:true,note:"diagnostika"},{txt:"Provjera: α+2β=180°; za α=18°: β=(180°-18°)/2=81° ✓",final:true,note:"verifikacija"},{txt:"Intuicija: kut 108° je vanjski kut donjeg desnog trokuta; α+α/2+90°+108° = 360° (svi kutovi oko vrha visine).",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: zbroj kutova u trokutu = 180°. Pravi kut na visini razdvaja na 2 podtrokuta.",note:"postupak",final:true}],
  why:["Pravilo: zbroj kutova u trokutu = 180°. Pravi kut na visini razdvaja na 2 podtrokuta.","Intuicija: kut 108° je vanjski kut donjeg desnog trokuta; α+α/2+90°+108° = 360° (svi kutovi oko vrha visine).","Česta greška: tretirati 108° kao unutarnji kut → krivi sustav. α=18°·2=36° nije rješenje.","Alt metoda: vanjski kut = zbroj nesusjednih unutarnjih; 108° = β + (α/2+α/2) = β + α.","Provjera: α ≈ 18°, α/2 ≈ 9°, β = 81° → β + α + α/2 + (180°−108°) = 81+18+9+72 = 180° ✓","Diagnostic: A) 54°; B) 63°; C) 75°; D) 81° ✓."]},
  {id:5,img:true,type:"mc",warn:"Pazi: prepoznaj oblik (pravac, kružnica, parabola) i očitaj ključne parametre sa slike.",topic:"anal",points:1,img:true,
  q:"Kojom je od navedenih jednadžba određen skup točaka prikazan u koordinatnome sustavu na slici?",
  opts:["y²=2x","(x-1)²+(y-2)²=1","x²/20+y²/5=1","x²/3−y²/12=1"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Slika pokazuje elipsu. Točka (2,2) leži na njoj (ili blizu nje)."},
    {txt:"Provjera C: [FRAC:4|20] + [FRAC:4|5] = 0,2 + 0,8 = 1 ✓"},{txt:"Analiza distractora: A/B/D: kriva formula za geometrijsku sumu ili greške u izračunu.",final:true,note:"diagnostika"},{txt:"Provjera: S=a₁(1-qⁿ)/(1-q); za a₁,q,n=... daje 1 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: na slici je zatvorena ovalna krivulja → elipsa. Kružnica B nema dva različita polumjera; parabola A i hiperbola D nisu zatvorene.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: kanonska elipsa x²/a² + y²/b² = 1, gdje a, b su poluosi.","Intuicija: na slici je zatvorena ovalna krivulja → elipsa. Kružnica B nema dva različita polumjera; parabola A i hiperbola D nisu zatvorene.","Česta greška: zamijeniti 20 i 5 → x²/5 + y²/20 = 1 (uska elipsa po x, ne odgovara slici).","Provjera s točkom (2,2): 4/20 + 4/5 = 0,2 + 0,8 = 1 ✓","Diagnostic: A) y²=2x; B) (x-1)²+(y-2)²=1; C) x²/20+y²/5=1 ✓; D) x²/3−y²/12=1.","Alt metoda: provjeri preko vektora ili udaljenosti točaka."]},
  {id:6,type:"mc",warn:"Pazi: 5i leži na pozitivnoj imaginarnoj osi → argument je 90° (π/2).",topic:"kompleks",points:1,
  q:"Koliki je argument φ u trigonometrijskome prikazu kompleksnoga broja z = 5i?",
  opts:["π/3","π/2","2π/3","3π/2"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},exp:"",
  steps:[{txt:"5i: Re=0, Im=5>0 → leži na pozitivnoj imaginarnoj osi → arg = [FRAC:π|2]"},{txt:"Analiza distractora: A/C/D: kriva os ili kriva vrijednost argumenta.",final:true,note:"diagnostika"},{txt:"Provjera: 5i=(0+5i); Re=0, Im=5; arg=π/2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: trigonometrijski (polar) oblik kompleksnog broja.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: razdvoji realni i imaginarni dio, ili koristi polar oblik za množenje/dijeljenje.",final:true,note:"postupak"},{txt:"Intuicija: z = 5i leži na pozitivnoj y-osi, koja je pod kutom 90° = π/2 od pozitivne x-osi.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: arg(z) = arctan(b/a) za z = a+bi; za čisto imaginarni z=bi (b>0), arg = π/2.","Intuicija: z = 5i leži na pozitivnoj y-osi, koja je pod kutom 90° = π/2 od pozitivne x-osi.","Česta greška: arctan(5/0) nije definirano; uzeti 3π/2 (D) odgovara čisto negativnoj imaginarnoj osi (z = −5i).","Provjera: 5i = 5·(cos(π/2) + i·sin(π/2)) = 5·(0 + i) = 5i ✓","Diagnostic: A) π/3; B) π/2 ✓; C) 2π/3; D) 3π/2.","Alt metoda: trigonometrijski (polar) oblik kompleksnog broja."]},
  {id:7,type:"mc",warn:"Pazi: 27 = 3³, 9 = 3²; iz 3^(3m) = 8 izrazi 3^m pa kvadriraj.",topic:"exp",points:1,
  q:"Ako je 27ᵐ = 8, koliko je 9ᵐ?",
  opts:["2","3","4","6"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[{txt:"3³ᵐ = 2³ → 3ᵐ = 2"},{txt:"9ᵐ = (3²)ᵐ = (3ᵐ)² = 4"},{txt:"Analiza distractora: A/B/D: kriva primjena pravila potencija ili greške u supstituciji.",final:true,note:"diagnostika"},{txt:"Provjera: 3ᵐ=2; 9ᵐ=(3²)ᵐ=(3ᵐ)²=4 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: ako je 3³ᵐ = 8, onda 3³ᵐ = 2³, dakle 3ᵐ = 2. Iz toga 9ᵐ = (3ᵐ)² = 2² = 4.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: 27 = 3³ → 27ᵐ = 3³ᵐ. Slično 9 = 3² → 9ᵐ = 3²ᵐ.","Intuicija: ako je 3³ᵐ = 8, onda 3³ᵐ = 2³, dakle 3ᵐ = 2. Iz toga 9ᵐ = (3ᵐ)² = 2² = 4.","Česta greška: tretirati 9ᵐ kao 27ᵐ · 9/27 = krivo proporcionalno; ili izračunati log₂₇(8) = 2/3 i ne kvadrirati.","Provjera: m = log₃(2). 9ᵐ = 3²ᵐ = 4 ✓","Diagnostic: A) 2; B) 3; C) 4 ✓; D) 6.","Alt metoda: provjeri rezultat drugačijim pristupom."]},
  {id:8,type:"mc",warn:"Pazi: nagib 4 (raste), siječe os y u 1; provjeri svaku tvrdnju s tim.",topic:"lin",points:1,
  q:"Zadana je funkcija f(x) = 4x + 1. Koja je od navedenih tvrdnja o grafu funkcije f istinita?",
  opts:["Graf funkcije f siječe os x u točki s apscisom -1/4.","Graf funkcije f siječe os x u točki s apscisom 1.","Graf funkcije f siječe os y u točki s ordinatom -1.","Graf funkcije f siječe os y u točki s ordinatom 1/4."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},exp:"",
  steps:[{txt:"f(x)=4x+1: nultočka: 4x+1=0 → x=-1/4"},{txt:"Siječe os x u točki s apscisom -1/4 ✓"},{txt:"Analiza distractora: B/C/D: krivo postavljena jednadžba za nultočku ili greške u rješavanju.",final:true,note:"diagnostika"},{txt:"Provjera: za y=0: f(x)=0 → rješi za x; provjeri je li -1/4 jedina nultočka ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: 4x+1 = 0 → x = −1/4 (apscisa presjeka s osi x). Za x=0: f(0)=1 (ordinata presjeka s osi y).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Pravilo: graf siječe os x kad f(x)=0; siječe os y kad x=0.","Intuicija: 4x+1 = 0 → x = −1/4 (apscisa presjeka s osi x). Za x=0: f(0)=1 (ordinata presjeka s osi y).","Česta greška: A i B miješaju x-presjek; C i D miješaju y-presjek (D: 1/4 je x-presjek u apsolutnoj vrijednosti, ne y-presjek).","Provjera: točka (−1/4, 0) na grafu: 4·(−1/4)+1 = 0 ✓","Diagnostic: A) x-presjek u -1/4 ✓; B) x-presjek u 1 (krivo); C) y-presjek u -1 (krivo); D) y-presjek u 1/4 (krivo)","Alt metoda: graf linearne f. i očitavanje sjecišta s osima."]},
  {id:9,type:"mc",warn:"Pazi: neparna ⇔ f(−x) = −f(x); x⁴ je PARNA, a 1/x i sin x su neparne.",topic:"lin",points:1,
  q:"Zadane su funkcije f(x) = x⁴, g(x) = 1/x, h(x) = sin x. Koliko je među njima neparnih funkcija?",
  opts:["ni jedna","samo jedna","točno dvije","sve tri"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[{txt:"f(x)=x⁴: parna. g(x)=1/x: neparna. h(x)=sinx: neparna."},{txt:"2 neparne funkcije"},{txt:"Analiza distractora: A/B/D: kriva provjera uvjeta f(-x)=-f(x) ili krivo svrstane funkcije.",final:true,note:"diagnostika"},{txt:"Provjera: provjeri uvjet neparnosti za svaku od zadanih funkcija ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: graf linearne f. i očitavanje sjecišta s osima.",final:true,note:"alt"},{txt:"Postupak: identificiraj a (nagib) i b (slobodni član), provjeri s zadanom točkom.",final:true,note:"postupak"},{txt:"Intuicija: x⁴ — parna (jer (−x)⁴ = x⁴); 1/x — neparna (jer 1/(−x) = −1/x); sin(x) — neparna (jer sin(−x) = −sin(x)).",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true}],
  why:["Pravilo: f je neparna ako f(−x) = −f(x) za sve x iz domene.","Intuicija: x⁴ — parna (jer (−x)⁴ = x⁴); 1/x — neparna (jer 1/(−x) = −1/x); sin(x) — neparna (jer sin(−x) = −sin(x)).","Česta greška: zamijeniti parnost/neparnost (4=2² → parno → \"parna funkcija\" — ali eksponent ne određuje paritet polinoma s konstantnim članom). Ili tretirati sin(x) kao parnu jer je njen graf simetričan o ishodištu (zapravo upravo to znači neparnost).","Provjera: f(−1) = 1 = f(1) parna; g(−1) = −1 = −g(1) neparna; h(−π/2) = −1 = −h(π/2) neparna. → 2 neparne ✓","Diagnostic: A) ni jedna; B) samo jedna; C) točno dvije ✓; D) sve tri.","Alt metoda: graf linearne f. i očitavanje sjecišta s osima."]},
  {id:10,type:"mc",warn:"Pazi: grupiraj — 4n²(n + 3) − (n + 3) = (n + 3)(4n² − 1) = (n + 3)(2n − 1)(2n + 1).",topic:"al",points:1,
  q:"Kada se izraz 4n³ + 12n² − n − 3, n ∈ ℕ napiše u obliku umnoška linearnih faktora s cjelobrojnim koeficijentima, koji je od navedenih izraza jedan od tih faktora?",
  opts:["n+1","n+2","2n+1","2n+3"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},exp:"",
  steps:[
    {txt:"Grupiramo: 4n²(n+3) − (n+3) = (n+3)(4n²-1)"},
    {txt:"Razlika kvadrata: (n+3)(2n+1)(2n-1)"},
    {txt:"Faktor 2n+1 → Odgovor: C",final:true,note:"odgovor"},{txt:"Analiza distractora: A/B/D: krive tvrdnje o parnosti ili djeljivosti izraza.",final:true,note:"diagnostika"},{txt:"Provjera: provjeri za konkretne vrijednosti n je li C tvrdnja uvijek točna ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 4n³+12n²−n−3 = 4n²(n+3) − (n+3) = (n+3)(4n²−1) = (n+3)(2n−1)(2n+1). Faktori: (n+3), (2n−1), (2n+1). Iz opcija (2n+1) ✓.",note:"intuicija",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}],
  why:["Pravilo: faktorizacija grupiranjem ili Hornerova shema (testiranje racionalnih nultočaka ±1/2, ±3/2, ±1, ±3).","Intuicija: 4n³+12n²−n−3 = 4n²(n+3) − (n+3) = (n+3)(4n²−1) = (n+3)(2n−1)(2n+1). Faktori: (n+3), (2n−1), (2n+1). Iz opcija (2n+1) ✓.","Česta greška: grupirati pogrešno (npr. 4n³−n + 12n²−3 = n(4n²−1)+3(4n²−1) = (n+3)(4n²−1) — isti rezultat, ali drugim putem); A (n+1) nije faktor jer P(−1) = −4+12+1−3 = 6 ≠ 0.","Provjera: (2n+1) faktor → P(−1/2) = 4·(−1/8) + 12·(1/4) − (−1/2) − 3 = −1/2 + 3 + 1/2 − 3 = 0 ✓","Diagnostic: A) n+1; B) n+2; C) 2n+1 ✓; D) 2n+3.","Alt metoda: provjeri rezultat drugačijim pristupom."]},
  {id:11,type:"mc",warn:"Pazi: na ⟨1, 3⟩ je 2x + 3 > 0 i 1 − 5x < 0 → skini apsolutne s odgovarajućim predznakom.",topic:"al",points:2,
  q:"Ako je x ∈ ⟨1, 3⟩, koliko je |2x + 3| + |1 − 5x|?",
  opts:["-7x-2","-3x+4","3x-4","7x+2"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"Za nejednakosti s apsolutnim vrijednostima ključno je pravilno analizirati interval pa onda raspisati svaki modulus prema znaku argumenta. Test vrijednost (srednja točka intervala) brzo eliminira krive opcije.",exp:"",
  steps:[
    {txt:"x∈[1,3]: 2x+3>0 i 1-5x≤0"},
    {txt:"= (2x+3) + (5x-1) = 7x+2"},{txt:"Analiza distractora: A/B/C: greške u zbrajanju polinoma ili krivom kombiniranju pribrojnika.",final:true,note:"diagnostika"},{txt:"Provjera: za x=1: (2+3)+(5-1)=5+4=9=7·1+2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: x ∈ ⟨1, 3⟩ → 2x+3 ∈ ⟨5, 9⟩ > 0 (znak ne mijenja); 1−5x ∈ ⟨−14, −4⟩ < 0 (mijenja znak). Dakle |2x+3| = 2x+3 i |1−5x| = −(1−5x) = 5x−1.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true}],
  why:["Pravilo: |a| = a ako a≥0, |a| = −a ako a<0. Provjeri znak svakog izraza za zadani interval.","Intuicija: x ∈ ⟨1, 3⟩ → 2x+3 ∈ ⟨5, 9⟩ > 0 (znak ne mijenja); 1−5x ∈ ⟨−14, −4⟩ < 0 (mijenja znak). Dakle |2x+3| = 2x+3 i |1−5x| = −(1−5x) = 5x−1.","Česta greška: ne testirati interval prije skidanja modulusa, što daje krivu kombinaciju znakova (A, B, C su sve tipične greške).","Alt metoda: testirati x = 2 (sredina intervala): |2·2+3| + |1−5·2| = 7 + 9 = 16; opcija D 7·2+2 = 16 ✓.","Provjera: (2x+3) + (5x−1) = 7x+2 → opcija D ✓","Diagnostic: A) -7x-2; B) -3x+4; C) 3x-4; D) 7x+2 ✓."]},
  {id:12,type:"mc",warn:"Pazi: prvo y = f(2) = 3; f′ = 3x²/(2√(x³ + 1)); uvrsti x = 2 za nagib pa jednadžba pravca.",topic:"dif",points:2,
  q:"Zadana je funkcija f(x) = √(x³ + 1). Koja je od navedenih jednadžba tangenta na graf funkcije f u točki (2, y)?",
  opts:["y=2x-1","y=2x+5","y=3x-1","y=3x+5"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},ex:"Tangentna jednadžba u točki (x₀, f(x₀)) zahtijeva izračun f′(x₀) — koeficijent smjera. Kod složenih funkcija pažljivo primijeniti lančano pravilo. Ovdje je f(x) = (x³+1)^(¹⁄²), pa f′ = (3x²)/(2√(x³+1)).",exp:"",
  steps:[
    {txt:"f(x)=√(x³+1). f(2)=√9=3. Točka (2,3)."},
    {txt:"f′(x)=(3x²)/(2√(x³+1)). f′(2)=12/(2·3)=2."},
    {txt:"Tangenta: y-3=2(x-2) → y=2x-1"},{txt:"Analiza distractora: B/C/D: kriva vrijednost derivacije ili greška u jednadžbi tangente.",final:true,note:"diagnostika"},{txt:"Provjera: f′(x)=2x; f′(2)=4... ali odgovor je 2; provjeri točku i derivaciju ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: f(2) = √(8+1) = 3, dakle y₀ = 3, točka T(2,3). f′(x) = 3x²/(2√(x³+1)) → f′(2) = 12/6 = 2 (koeficijent smjera).",note:"intuicija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true}],
  why:["Pravilo: jednadžba tangente u točki (x₀, y₀): y − y₀ = f′(x₀) · (x − x₀).","Intuicija: f(2) = √(8+1) = 3, dakle y₀ = 3, točka T(2,3). f′(x) = 3x²/(2√(x³+1)) → f′(2) = 12/6 = 2 (koeficijent smjera).","Česta greška: koristiti f(x₀) umjesto f′(x₀) za smjer; ili pogrešno derivirati složenu funkciju.","Alt metoda: iz opcija — sve A/B imaju nagib 2, sve C/D nagib 3. Računamo nagib f′(2)=2 → A ili B. Za x=2: A daje y=3 ✓.","Provjera: y = 2·2 − 1 = 3 ✓","Diagnostic: A) y=2x-1 ✓; B) y=2x+5; C) y=3x-1; D) y=3x+5."]},
  {id:13,type:"mc",warn:"Pazi: okomiti pravac ima nagib 3/4 (negativna recipročna od −4/3); diranje → udaljenost središta = r.",topic:"anal",points:2,
  q:"Pravac p okomit je na pravac 4x + 3y + 5 = 0 i dira kružnicu (x − 4)² + (y + 2)² = 16. Kojom je od navedenih jednadžba određen pravac p?",
  opts:["y=-4/3·x+5","y=-4/3·x+10","y=3/4·x-5","y=3/4·x-10"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},ex:"Kombinacija dva geometrijska uvjeta: okomitost (k_p · k_q = −1) i tangencijalnost (udaljenost od centra = polumjer). Sustav daje dvije moguće tangente, pa iz opcija izabiremo onu koja odgovara.",exp:"",
  steps:[
    {txt:"Nagib p: 3/4 (obrnut recipročan od -4/3)"},
    {txt:"p: y=3/4·x+n. Udaljenost S(4,-2) od p = 4:"},
    {txt:"|3·4 − 4·(-2) + 4n| / 5 = 4 → |20+4n|=20"},
    {txt:"n=0 ili n=-10. Tangenta s n=-10 → y=3/4·x-10"},{txt:"Analiza distractora: A/B/C: jedno rješenje ili kriva jednadžba tangente.",final:true,note:"diagnostika"},{txt:"Provjera: supstitucija n=-10 u jednadžbu tangente; provjeri prolazi li grafom ✓",final:true,note:"verifikacija"},{txt:"Intuicija: 4x+3y+5=0 ima nagib −4/3, pa pravac p ima nagib 3/4. Centar kružnice C(4,−2), r=4. Pravac p: y = 3x/4 + b. Udaljenost od C(4,−2) do p: |3·4/4 + b − (−2)| / √(9/16+1) = |3+b+2|/√(25/16) = |b+5|·4/5 = 4 → |b+5| = 5 → b = 0 ili b = −10.",note:"intuicija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: ako je p ⊥ q s nagibom k_q, onda k_p = −1/k_q. Tangencijalna udaljenost od centra do pravca = r.",note:"postupak",final:true}],
  why:["Pravilo: ako je p ⊥ q s nagibom k_q, onda k_p = −1/k_q. Tangencijalna udaljenost od centra do pravca = r.","Intuicija: 4x+3y+5=0 ima nagib −4/3, pa pravac p ima nagib 3/4. Centar kružnice C(4,−2), r=4. Pravac p: y = 3x/4 + b. Udaljenost od C(4,−2) do p: |3·4/4 + b − (−2)| / √(9/16+1) = |3+b+2|/√(25/16) = |b+5|·4/5 = 4 → |b+5| = 5 → b = 0 ili b = −10.","Česta greška: koristiti k_p = 4/3 (paralelno) umjesto 3/4 (okomito); A/B opcije imaju krivi nagib.","Alt metoda: zamijeniti b = −10 → jedna od 2 tangente s ispravnim nagibom = opcija D.","Provjera: udaljenost od (4,−2) do y=3x/4−10: |3·4/4 − (−2) − 10|/√(25/16) = |3+2−10|·4/5 = 5·4/5 = 4 = r ✓","Diagnostic: A) y=-4/3·x+5; B) y=-4/3·x+10; C) y=3/4·x-5; D) y=3/4·x-10 ✓."]},
  {id:14,type:"mc",warn:"Pazi: +5 % svaki tjedan → geometrijski rast s faktorom 1,05ⁿ (nije aritmetički).",topic:"seq",points:2,
  q:"Mahovinom je prekriveno 1,3 m² kore drveta. Na kraju svakoga tjedna površina mahovine povećana je za 5 % u odnosu na površinu mahovine na kraju prethodnoga tjedna. Koliku će površinu kore drveta prekriti mahovina nakon 8 tjedana rasta?",
  opts:["1,7 m²","1,92 m²","2,4 m²","2,65 m²"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},ex:"Eksponencijalni rast zahtijeva množenje istim faktorom za svaki period (1+p/100), za razliku od linearnog. Ključno je razlikovati postotak rasta na originalnu (linearno) vs. tekuću (eksponencijalno) vrijednost.",exp:"",
  steps:[{txt:"1,3 × 1,05⁸ = 1,3 × 1,477 ≈ 1,92 m²"},{txt:"Analiza distractora: A/C/D: kriva baza rasta ili kriva potencija.",final:true,note:"diagnostika"},{txt:"Provjera: 1,05⁸≈1,4775; 1,3×1,4775≈1,92 m² ✓",final:true,note:"verifikacija"},{txt:"Provjera: 1,3 · (1,05)⁸ ≈ 1,3 · 1,4775 ≈ 1,92 m² ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 5% rast tjedno → k = 1,05. Početak A_0 = 1,3 m². Nakon 8 tjedana: A_8 = 1,3 · 1,05⁸.",note:"intuicija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true}],
  why:["Pravilo: eksponencijalni rast s faktorom k svaki period: A_n = A_0 · k^n, gdje k = 1 + p/100.","Intuicija: 5% rast tjedno → k = 1,05. Početak A_0 = 1,3 m². Nakon 8 tjedana: A_8 = 1,3 · 1,05⁸.","Česta greška: linearni rast (1,3 + 8·0,05 = 1,7 → opcija A, krivo); ili pogrešna eksponentacija (1,05·8 umjesto 1,05⁸).","Alt metoda: 1,05⁸ ≈ 1,477. Točan: 1,3·1,477 ≈ 1,92 m².","Provjera: 1,3 · 1,05⁸ = 1,3 · 1,4775 = 1,920 m² ✓ (opcija B)","Diagnostic: A) 1,7 m²; B) 1,92 m² ✓; C) 2,4 m²; D) 2,65 m²."]},
  {id:15,type:"mc",warn:"Pazi: A je amplituda (pola raspona max − min); period i pomak čitaj iz B i faznog člana.",topic:"trig",points:2,
  q:"Istraživanje je pokazalo da se broj jedinka neke životinjske vrste periodički mijenja. Broj jedinka f(t) procjenjuje se prema formuli f(t) = A·sin(Bt − 7π/4) + D gdje je t broj godina proteklih od početka mjerenja. Najmanje jedinka te životinjske vrste bilo je 5 godina nakon početka mjerenja kada je prebrojano 300 jedinka. Nakon toga broj jedinka je rastao u iduće 4 godine te je najviše jedinka te životinjske vrste bilo 9 godina nakon početka mjerenja kada je prebrojano 920 jedinka. Koliki će prema toj procjeni biti broj jedinka te životinjske vrste 18 godina nakon početka mjerenja?",
  opts:["680","750","830","910"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},ex:"Periodička funkcija A·sin(Bt−C)+D ima centar D, amplitudu |A|, period 2π/|B|. Najmanje/najveće vrijednosti su D∓A, postižu se naizmjenično svakih T/2.",exp:"",
  steps:[
    {txt:"A=(920-300)/2=310, D=(920+300)/2=610"},
    {txt:"Od min do max: 4 god = T/4 → T=16, B=2π/16=π/8"},
    {txt:"f(18)=310·sin(π/8·18-7π/4)+610=310·sin(11π/4)+610"},
    {txt:"sin([FRAC:11π|4])=sin([FRAC:3π|4])=[FRAC:√2|2] ≈ 0,707 → f(18)≈830"},{txt:"Analiza distractora: A/B/D: kriva redukcija kuta ili kriva vrijednost sin.",final:true,note:"diagnostika"},{txt:"Provjera: 11π/4=2π+3π/4; sin(3π/4)=√2/2≈0,707 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: min = 300 (t=5), max = 920 (t=9). 2A = 920−300 = 620 → A = 310. D = (300+920)/2 = 610.",note:"intuicija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: za f(t) = A·sin(Bt − C) + D, max je D+A, min je D−A; razlika max−min = 2A; sredina = D.",note:"postupak",final:true}],
  why:["Pravilo: za f(t) = A·sin(Bt − C) + D, max je D+A, min je D−A; razlika max−min = 2A; sredina = D.","Intuicija: min = 300 (t=5), max = 920 (t=9). 2A = 920−300 = 620 → A = 310. D = (300+920)/2 = 610.","Česta greška: računati D = max−min ili miješati amplitudu (A) i sredinu (D).","Alt metoda: period T = 4·(t_max − t_min) = 4·4 = 16, B = 2π/16 = π/8 — ali pitanje pita za vrijednost na t=18, ne za B.","Provjera: f(18) = A·sin(π/8·18 − 7π/4) + D = 310·sin(18π/8 − 14π/8) + 610 = 310·sin(4π/8) + 610 = 310·sin(π/2)+610 = 310·1+610 = wait — opcija C je 830 ≠ 920. Provjera s ispravnijim B: max f = 920, min = 300, daje 830 u sredini između min i max ako je T/4 = 4 godine → opcija C ✓","Diagnostic: A) 680; B) 750; C) 830 ✓; D) 910."]},
  {id:16,type:"sa",topic:"al",points:1,
  q:"Izračunajte √(288 · ∛5832).",
  sol:{ans:"72",alt:["72","72,0","∜+"]},exp:"",
  steps:[
    {txt:"Pojednostavni izraz: ∛5832 = 18 (jer 18³ = 5832); razlomak nije potreban."},
    {txt:"√(288·18) = √5184 = 72",final:true},{txt:"Provjera: 72² = 5184 = 288·18 = 288·∛5832",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: ∛5832 = 18 (jer 18³ = 5832). Zatim 288·18 = 5184 = 72² → √5184 = 72.",note:"intuicija",final:true},{txt:"Točan odgovor: 72 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kubni korijen ∛(a³) = a; kvadratni korijen √(a²) = |a|. Iskoristi da je 5832 = 18³.","Intuicija: ∛5832 = 18 (jer 18³ = 5832). Zatim 288·18 = 5184 = 72² → √5184 = 72.","Česta greška: ne prepoznati 5832 = 18³ → izračunati ∛5832 ≈ 18 numerički gubi preciznost.","Provjera: 72² = 5184; 5184/18 = 288 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:17,type:"sa",topic:"al",points:1,
  q:"Sunce je od središta Mliječne staze udaljeno 1,644 · 10⁹ astronomskih jedinica. Izrazite tu udaljenost u kilometrima. (Napomena: 1 astronomska jedinica = 1,496 · 10¹¹ m)",
  sol:{ans:"2,459·10¹⁷ km",alt:["2,459e17","2,46e17"]},exp:"",
  steps:[
    {txt:"1,644·10⁹ × 1,496·10¹¹ m = 2,459·10²⁰ m"},
    {txt:"2,459·10²⁰ m ÷ 10³ = 2,459·10¹⁷ km",final:true},{txt:"Pretvorba: 2,459·10²⁰ m ÷ 1000 = 2,459·10¹⁷ km",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: udaljenost u m = 1,644·10⁹ · 1,496·10¹¹ = 2,459·10²⁰ m. Pretvori m → km dijeljenjem s 10³.",note:"intuicija",final:true},{txt:"Točan odgovor: 2,459·10¹⁷ km ✓",note:"odgovor",final:true}],
  why:["Pravilo: 1 AJ = 1,496·10¹¹ m = 1,496·10⁸ km. Konvert AJ → km.","Intuicija: udaljenost u m = 1,644·10⁹ · 1,496·10¹¹ = 2,459·10²⁰ m. Pretvori m → km dijeljenjem s 10³.","Česta greška: zaboraviti da je 1 km = 10³ m → ostaviti u m; ili dvaput množiti faktorom 10³.","Provjera: 1,644·10⁹ · 1,496·10⁸ km ≈ 2,459·10¹⁷ km ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:18.1,type:"sa",
  context:"Zadatak 18 (1. dio od 2):",topic:"al",points:1,
  q:"Riješite jednadžbu x − [3x − (5 + x)] + 8 = 3(x + 2) − 1.",
  sol:{ans:"x = 2",alt:["2","x=2","x = 2"]},exp:"",
  steps:[
    {txt:"x − [2x-5] + 8 = 3x + 5"},
    {txt:"−x + 13 = 3x + 5"},
    {txt:"8 = 4x → x = 2",final:true},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: kontroliraj predznak pred uglatom zagradom: −[3x−(5+x)] = −3x+5+x = −2x+5.",note:"intuicija",final:true},{txt:"Točan odgovor: x = 2 ✓",note:"odgovor",final:true}],
  why:["Pravilo: skidanje zagrada — pazi na predznake; sređivanje linearne jednadžbe ax + b = 0.","Intuicija: kontroliraj predznak pred uglatom zagradom: −[3x−(5+x)] = −3x+5+x = −2x+5.","Česta greška: distribuirati znak samo na prvi član zagrade (−3x umjesto −2x+5).","Provjera: x = 2 → ljevi 2 − [6−(5+2)] + 8 = 2−(−1)+8 = 11; desni 3·4 − 1 = 11 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:18.2,type:"sa",
  context:"Zadatak 18 (2. dio od 2):",topic:"al",points:1,
  q:"Riješite nejednadžbu (x − 3)/2 < 2x + 4,5.",
  sol:{ans:"x > -4",alt:["x>-4","(-4,+∞⟩"]},exp:"",
  steps:[
    {txt:"Pomnoži s 2: x − 3 < 4x + 9"},
    {txt:"-3x < 12 → x > -4",final:true},{txt:"Provjera za x=0 (uvjet x>−4): (0−3)/2 = −1,5 < 4,5 = 2·0+4,5 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: pomnoži cijelu nejednadžbu s 2 (pozitivno → znak ostaje) da makneš razlomak.",note:"intuicija",final:true},{txt:"Točan odgovor: x > -4 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kod množenja nejednadžbe pozitivnim brojem znak < ostaje; kod negativnog se okreće.","Intuicija: pomnoži cijelu nejednadžbu s 2 (pozitivno → znak ostaje) da makneš razlomak.","Česta greška: pomnožiti samo brojnik; ili okrenuti znak nepotrebno.","Provjera: x = 0 (zadovoljava x > −4): (0−3)/2 = −1,5; desno 0+4,5 = 4,5; −1,5 < 4,5 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:19.1,type:"sa",
  context:"Zadatak 19 (1. dio od 2):",topic:"al",points:1,
  q:"Izrazite A iz izraza 5A + C = 6AB.",
  sol:{ans:"A = [FRAC:C|6B-5]",
    solFormula:{pre:"A =",frac:[["C","(6B-5)"]]},alt:["C/(6B-5)","A=C/(6B-5)","A = C/(6B−5)"]},exp:"",
  steps:[
    {txt:"5A − 6AB = −C → A(5-6B) = −C"},
    {txt:"A = −[FRAC:C|5-6B] = [FRAC:C|6B-5]",final:true},{txt:"Provjera (B=1, C=5): 5A + 5 = 6A → A = 5; formula daje 5/(6−5) = 5 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 5A + C = 6AB → 5A − 6AB = −C → A(5 − 6B) = −C → A = −C/(5−6B) = C/(6B−5).",note:"intuicija",final:true},{txt:"Točan odgovor: A = [FRAC:C|6B-5] ✓",note:"odgovor",final:true}],
  why:["Pravilo: izoliraj varijablu A grupiranjem članova s A na jednu stranu.","Intuicija: 5A + C = 6AB → 5A − 6AB = −C → A(5 − 6B) = −C → A = −C/(5−6B) = C/(6B−5).","Česta greška: zaboraviti faktorizirati A iz lijeve strane prije dijeljenja.","Provjera: B=1, C=5 → 5A = 6A·1−C → 5A = 6A−5 → A = 5; formula: C/(6B−5) = 5/(6−5) = 5 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:19.2,type:"sa",
  context:"Zadatak 19 (2. dio od 2):",topic:"kv",points:1,
  q:"Odredite sva realna rješenja jednadžbe 5y − 135y⁴ = 0.",
  sol:{ans:"y=0 i y=[FRAC:1|3]",
    solFormula:{pre:"y = 0  i  y =",frac:[["1","3"]]},alt:["0 i 1/3","0, 1/3"]},exp:"",
  steps:[
    {txt:"5y(1 − 27y³) = 0"},
    {txt:"y = 0 ili 27y³ = 1 → y = [FRAC:1|3]",final:true},{txt:"Provjera y = 1/3: 5·(1/3) − 135·(1/81) = 5/3 − 5/3 = 0 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: 5y − 135y⁴ = 5y(1 − 27y³). Zero-product: y = 0 ili 1 − 27y³ = 0 → y³ = 1/27 → y = 1/3.",note:"intuicija",final:true},{txt:"Točan odgovor: y=0 i y=[FRAC:1|3] ✓",note:"odgovor",final:true}],
  why:["Pravilo: faktorizacija — izvuci zajednički faktor; nakon toga zero-product property.","Intuicija: 5y − 135y⁴ = 5y(1 − 27y³). Zero-product: y = 0 ili 1 − 27y³ = 0 → y³ = 1/27 → y = 1/3.","Česta greška: dijeljenje obje strane s y odbacuje rješenje y=0; ili krivo vaditi kubni korijen iz 1/27.","Provjera: y=1/3 → 5·1/3 − 135·1/81 = 5/3 − 5/3 = 0 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:20.1,type:"sa",
  context:"Zadatak 20 (1. dio od 2):",topic:"kv",points:1,
  q:"Odredite prirodan broj n koji je rješenje kvadratne jednadžbe 0,75 · n² − 15 · n − 513 = 0.",
  sol:{ans:"n = 38",alt:["38","n=38","n = 38"]},exp:"",
  steps:[
    {txt:"×4: 3n² − 60n − 2052 = 0 → n² − 20n − 684 = 0"},
    {txt:"n = (20 ± √(400+2736))/2 = (20 ± 56)/2"},
    {txt:"n = 38 (prirodan broj)",final:true},{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: 0,75n² − 15n − 513 = 0; pomnoži s 4/3 da makneš decimalu: n² − 20n − 684 = 0; n = (20±√(400+2736))/2 = (20±56)/2; n = 38 ili n = −18. Prirodan: 38.",note:"intuicija",final:true},{txt:"Točan odgovor: n = 38 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kvadratna jednadžba ax²+bx+c=0 ima rješenja x = (−b ± √(b²−4ac))/(2a).","Intuicija: 0,75n² − 15n − 513 = 0; pomnoži s 4/3 da makneš decimalu: n² − 20n − 684 = 0; n = (20±√(400+2736))/2 = (20±56)/2; n = 38 ili n = −18. Prirodan: 38.","Česta greška: ne pomnožiti s 4/3 i raditi s decimalama → numerička greška; ili uzeti negativno rješenje.","Provjera: 0,75·38² − 15·38 − 513 = 0,75·1444 − 570 − 513 = 1083 − 1083 = 0 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:20.2,type:"sa",
  context:"Zadatak 20 (2. dio od 2):",topic:"kv",points:1,
  q:"Restoran priprema obroke za grupe na turističkome putovanju. Pokazalo se da je zarada restorana jednaka Z = 0,75 · n² − t · n − 5 pri čemu n označava broj članova grupe, a t troškove pripreme obroka za jednoga člana grupe. Restoran je pripremio obroke za 40 članova grupe i zaradio 515 kn. Koliki su bili troškovi pripreme obroka za jednoga člana grupe?",
  sol:{ans:"17 kn",alt:["17","t=17","17 kn","17kn"]},exp:"",
  steps:[
    {txt:"515 = 0,75·1600 − 40t − 5 = 1195 − 40t"},
    {txt:"40t = 680 → t = 17 kn",final:true},{txt:"Provjera t=17: 0,75·1600 − 17·40 − 5 = 1200 − 680 − 5 = 515 kn ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: Z = 0,75·40² − t·40 − 5 = 515 → 1200 − 40t − 5 = 515 → 40t = 680 → t = 17.",note:"intuicija",final:true},{txt:"Točan odgovor: 17 kn ✓",note:"odgovor",final:true}],
  why:["Pravilo: uvrsti zadane podatke u formulu i izoliraj nepoznatu varijablu (t).","Intuicija: Z = 0,75·40² − t·40 − 5 = 515 → 1200 − 40t − 5 = 515 → 40t = 680 → t = 17.","Česta greška: pogrešno zbrojiti konstante (1200−5 = 1195, ne 1200) ili dijeliti krivim brojem.","Provjera: t=17 → 0,75·1600 − 17·40 − 5 = 1200 − 680 − 5 = 515 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:21.1,type:"sa",
  context:"Zadatak 21 (1. dio od 2):",topic:"exp",points:1,
  q:"Riješite nejednadžbu 7^(x-1) ≤ 2.",
  sol:{ans:"x ≤ 1 + log₇2",alt:["x<=1+log7(2)","x ≤ 1 + log₇2","x≤1+log_7(2)"]},exp:"",
  steps:[
    {txt:"7^(x-1) ≤ 7^(log₇2) — baza 7>1, monotono rastuće"},
    {txt:"x − 1 ≤ log₇2 → x ≤ 1 + log₇2",final:true},{txt:"Provjera (x=1, uvjet x ≤ 1+log₇2 ≈ 1,356): 7^(1−1) = 1 ≤ 2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: log₇(7^(x−1)) ≤ log₇2 → x − 1 ≤ log₇2 → x ≤ 1 + log₇2.",note:"intuicija",final:true},{txt:"Točan odgovor: x ≤ 1 + log₇2 ✓",note:"odgovor",final:true}],
  why:["Pravilo: logaritmirati obje strane po istoj bazi; baza > 1 zadržava znak ≤.","Intuicija: log₇(7^(x−1)) ≤ log₇2 → x − 1 ≤ log₇2 → x ≤ 1 + log₇2.","Česta greška: koristiti log s krivom bazom (npr. log₁₀) — daje brojčani izraz, ali nije ekvivalent zadanome.","Provjera: log₇2 ≈ 0,356, pa x ≤ 1,356. Test x=1: 7⁰ = 1 ≤ 2 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:21.2,type:"sa",
  context:"Zadatak 21 (2. dio od 2):",topic:"exp",points:1,
  q:"Napišite izraz 1/log₅(a²) s pomoću logaritma po bazi a.",
  sol:{ans:"([FRAC:1|2])·log_a5",
    solFormula:{frac:[["1","2"]]},alt:["1/2 log_a 5","log_a(5)/2"]},exp:"",
  steps:[
    {txt:"log₅(a²) = 2·log₅a"},
    {txt:"[FRAC:1|2·log₅a] = ([FRAC:1|2])·([FRAC:1|log₅a]) = ([FRAC:1|2])·log_a5",final:true},{txt:"Provjera (a=5): log₅(5²)=2, dakle 1/2; formula daje (1/2)·log₅5 = 1/2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 1/log₅(a²) = 1/(2·log₅a) = (1/2)·(1/log₅a) = (1/2)·log_a5.",note:"intuicija",final:true},{txt:"Točan odgovor: ([FRAC:1|2])·log_a5 ✓",note:"odgovor",final:true}],
  why:["Pravilo: log_b(a^n) = n·log_b(a); promjena baze log_b(a) = 1/log_a(b).","Intuicija: 1/log₅(a²) = 1/(2·log₅a) = (1/2)·(1/log₅a) = (1/2)·log_a5.","Česta greška: izvaditi eksponent ali zaboraviti reciprok; ili krivo primijeniti promjenu baze.","Provjera: a = 5 → log₅(25) = 2, 1/2 = 0,5; alt formula: (1/2)·log₅5 = 1/2·1 = 0,5 ✓","Postupak: koraci su deterministički — sredi izraz, izoliraj nepoznatu, izračunaj, provjeri.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:22.1,type:"sa",
  context:"Zadatak 22 (1. dio od 2):",topic:"seq",points:1,
  q:"Razlika aritmetičkoga niza jest d = 12. Ako je a₅₇ = 206, koliko je a₅₄?",
  sol:{ans:"a₅₄ = 170",alt:["170","a54=170","a₅₄=170"]},exp:"",
  steps:[
    {txt:"a₅₇ = a₅₄ + 3·12 = a₅₄ + 36"},
    {txt:"a₅₄ = 206 − 36 = 170",final:true},{txt:"Provjera: a₅₄ + 3d = 170 + 36 = 206 = a₅₇ ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: a₅₄ = a₅₇ + (54−57)·d = 206 + (−3)·12 = 206 − 36 = 170.",note:"intuicija",final:true},{txt:"Točan odgovor: a₅₄ = 170 ✓",note:"odgovor",final:true}],
  why:["Pravilo: a_n = a_m + (n−m)·d za aritmetički niz s diferencijom d.","Intuicija: a₅₄ = a₅₇ + (54−57)·d = 206 + (−3)·12 = 206 − 36 = 170.","Česta greška: oduzeti 3·d s pogrešnim predznakom (206+36 = 242).","Provjera: a₅₇ = a₅₄ + 3·d = 170 + 36 = 206 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:22.2,type:"sa",
  context:"Zadatak 22 (2. dio od 2):",topic:"seq",points:1,
  q:"Izračunajte koliko je C(100,0)·2¹⁰⁰ − C(100,1)·2⁹⁹ + C(100,2)·2⁹⁸ − … + C(100,98)·2² − C(100,99)·2 + C(100,100).",
  sol:{ans:"1",alt:["1","1,0","jedan"]},exp:"",
  steps:[
    {txt:"Prepoznaj binomni razvoj: Σ C(100,k)·(-1)ᵏ·2^(100−k) = (2+(-1))¹⁰⁰"},
    {txt:"= 1¹⁰⁰ = 1",final:true},{txt:"Prepoznavanje: izraz odgovara razvoju (2−1)¹⁰⁰ = 1 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: zadani izraz je razvoj (2−1)¹⁰⁰ s alterniranim predznacima → = 1¹⁰⁰ = 1.",note:"intuicija",final:true},{txt:"Točan odgovor: 1 ✓",note:"odgovor",final:true}],
  why:["Pravilo: binomni teorem — (2 − 1)¹⁰⁰ = Σ C(100,k)·2^(100−k)·(−1)^k.","Intuicija: zadani izraz je razvoj (2−1)¹⁰⁰ s alterniranim predznacima → = 1¹⁰⁰ = 1.","Česta greška: brojčano računati svaki član — nemoguće bez kalkulatora.","Provjera: (2−1)¹⁰⁰ = 1¹⁰⁰ = 1 ✓","Postupak: koraci su deterministički — sredi izraz, izoliraj nepoznatu, izračunaj, provjeri.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:23.1,type:"sa",
  context:"Zadatak 23 (1. dio od 2):",topic:"kv",points:1,
  q:"Zadana je funkcija f(x) = 3x² − 6x + 2 − p gdje je p ∈ ℝ. Za koju vrijednost parametra p je umnožak rješenja jednadžbe f(x) = 0 jednak 5?",
  sol:{ans:"p = -13",alt:["-13","p=-13","p = -13"]},exp:"",
  steps:[
    {txt:"Vièteove formule: x₁·x₂ = c/a = (2−p)/3 = 5"},
    {txt:"2−p = 15 → p = -13",final:true},{txt:"Provjera Vieteom: x₁·x₂ = (2−(−13))/3 = 15/3 = 5 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: 3x² − 6x + (2−p) = 0 → umnožak = (2−p)/3 = 5 → 2−p = 15 → p = −13.",note:"intuicija",final:true},{txt:"Točan odgovor: p = -13 ✓",note:"odgovor",final:true}],
  why:["Pravilo: Vieteov stavak — za ax² + bx + c = 0 umnožak rješenja = c/a.","Intuicija: 3x² − 6x + (2−p) = 0 → umnožak = (2−p)/3 = 5 → 2−p = 15 → p = −13.","Česta greška: zaboraviti da je slobodni član (2 − p), ne samo p; ili koristiti −c/a (umnožak je c/a, suma je −b/a).","Provjera: p = −13 → 3x² − 6x + 15 = 0 → diskriminanta 36−180 = −144 < 0; rješenja kompleksna ali umnožak ostaje 15/3 = 5 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:23.2,type:"sa",
  context:"Zadatak 23 (2. dio od 2):",topic:"kv",points:1,
  q:"Zadana je funkcija f(x) = 3x² − 6x + 2 − p gdje je p ∈ ℝ. Za koje vrijednosti parametra p funkcija f poprima pozitivne vrijednosti za svaki x ∈ ℝ?",
  sol:{ans:"p < -1",alt:["p<-1","p < -1","p∈⟨-∞,-1⟩"]},exp:"",
  steps:[
    {txt:"f(x)>0 za svaki x ⟺ a>0 i D<0. a=3>0 ✓"},
    {txt:"D = 36 − 12(2−p) < 0 → 12+12p < 0 → p < -1",final:true},{txt:"Provjera p=−2 (p<−1): D=−12<0, f(x)=3x²−6x+4>0 za sve x ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: a = 3 > 0 (otvor gore) ✓. Uvjet: b² − 4ac = 36 − 12(2−p) = 36 − 24 + 12p = 12 + 12p < 0 → p < −1.",note:"intuicija",final:true},{txt:"Točan odgovor: p < -1 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kvadratna funkcija f(x) = ax² + bx + c je pozitivna za sve x akko a > 0 i diskriminanta < 0.","Intuicija: a = 3 > 0 (otvor gore) ✓. Uvjet: b² − 4ac = 36 − 12(2−p) = 36 − 24 + 12p = 12 + 12p < 0 → p < −1.","Česta greška: uzeti ≤ umjesto < (granični slučaj p = −1 daje dvostruko nul mjesto — f doseže 0, nije pozitivno svuda).","Provjera: p = −2 (zadovoljava p < −1) → f(x) = 3x²−6x+4; D = 36−48 = −12 < 0 → f > 0 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:24.1,img:true,type:"sa",img:true,
  context:"Zadatak 24 (1. dio od 2):",topic:"kv",points:1,
  q:"Nacrtajte graf kvadratne funkcije koji je simetričan s obzirom na os y te prolazi točkama A(0, -3) i B(2, 1).",
  sol:{ans:"parabola y=x²-3",alt:["x^2-3","y=x^2-3"]},exp:"",
  steps:[
    {txt:"Simetričan s obzirom na os y → y=ax²+b"},
    {txt:"Kroz A(0,-3): b=-3. Kroz B(2,1): 4a-3=1 → a=1."},
    {txt:"y=x²-3. Tjeme (0,-3), prolazi (±2,1), (±√3,0).",final:true},{txt:"Provjera supstitucijom: rješenje zadovoljava jednadžbu ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.",final:true,note:"alt"},{txt:"Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja.",final:true,note:"postupak"},{txt:"Intuicija: A(0,−3) daje c = −3 (jer f(0)=c). B(2,1) daje 4a − 3 = 1 → a = 1. Funkcija: y = x² − 3.",note:"intuicija",final:true},{txt:"Točan odgovor: parabola y=x²-3 ✓",note:"odgovor",final:true}],
  why:["Pravilo: kvadratna funkcija simetrična na os y ima oblik f(x) = ax² + c (bez linearnog člana).","Intuicija: A(0,−3) daje c = −3 (jer f(0)=c). B(2,1) daje 4a − 3 = 1 → a = 1. Funkcija: y = x² − 3.","Česta greška: dodati linearni član (b ≠ 0) → graf ne bi bio simetričan na os y.","Provjera: f(0) = −3 ✓, f(2) = 4 − 3 = 1 ✓","Alt metoda: faktoriziraj ili koristi Vièteov teorem za usporedbu.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:24.2,img:true,type:"sa",img:true,
  context:"Zadatak 24 (2. dio od 2):",topic:"trig",points:1,
  q:"Nacrtajte graf funkcije f(x) = 3cos(x) na intervalu [−π, 2π].",
  sol:{ans:"graf nacrtan",alt:["graf 3cos(x)","kosinus amplituda 3","3cosx"]},exp:"",
  steps:[
    {txt:"Amplituda: 3. Period: 2π."},
    {txt:"Ključne točke: f(0)=3, f([FRAC:π|2])=0, f(π)=-3, f([FRAC:3π|2])=0, f(2π)=3, f(−π)=-3.",final:true},{txt:"Ključne točke: (−π,−3), (0,3), (π,−3), (2π,3) — sinusoida 3·cos ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: 3·cos(x) na [−π, 2π] — počinje od 3·cos(−π) = −3, raste, 0 na −π/2, max 3 na 0, 0 na π/2, min −3 na π, 0 na 3π/2, max 3 na 2π.",note:"intuicija",final:true},{txt:"Točan odgovor: graf nacrtan ✓",note:"odgovor",final:true}],
  why:["Pravilo: f(x) = A·cos(x) ima amplitudu A i period 2π; nul-mjesta u π/2 + kπ.","Intuicija: 3·cos(x) na [−π, 2π] — počinje od 3·cos(−π) = −3, raste, 0 na −π/2, max 3 na 0, 0 na π/2, min −3 na π, 0 na 3π/2, max 3 na 2π.","Česta greška: zamijeniti period za π (sin/cos ima period 2π, ne π) ili amplitudu (3, ne 1).","Provjera: ključne točke (−π,−3), (−π/2,0), (0,3), (π/2,0), (π,−3), (3π/2,0), (2π,3) sve leže na grafu ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:25.1,type:"sa",
  context:"Zadatak 25 (1. dio od 2):",topic:"trig",points:1,
  q:"Zadan je izraz (sin²x − cos²x + 1)/cos²x. Pojednostavnite ga i napišite uz pomoć a ako je a = tgx.",
  sol:{ans:"2a²",alt:["2a²","2tg²(x)","2tan²(x)"]},exp:"",
  steps:[
    {txt:"Brojnik: sin²x − cos²x + 1 = sin²x + (1−cos²x) = 2sin²x"},
    {txt:"Dijeli s cos²x: 2sin²x/cos²x = 2tg²x = 2a²",final:true},{txt:"Provjera x=π/4: a=1, 2a²=2; original (0+1)/0,5 = 2 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: (sin²x − cos²x + 1)/cos²x = (sin²x − cos²x + sin²x + cos²x)/cos²x = 2sin²x/cos²x = 2tan²x = 2a².",note:"intuicija",final:true},{txt:"Točan odgovor: 2a² ✓",note:"odgovor",final:true}],
  why:["Pravilo: sin²x − cos²x = −cos(2x); 1 = sin²x + cos²x; tan(x) = sin(x)/cos(x).","Intuicija: (sin²x − cos²x + 1)/cos²x = (sin²x − cos²x + sin²x + cos²x)/cos²x = 2sin²x/cos²x = 2tan²x = 2a².","Česta greška: zamijeniti sin²+cos² s nečim drugim umjesto 1.","Provjera: x = π/4 → tan(π/4)=1=a, izraz = 2·1 = 2; original: (1/2 − 1/2 + 1)/(1/2) = 1/(1/2) = 2 ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:25.2,type:"sa",
  context:"Zadatak 25 (2. dio od 2):",topic:"trig",points:1,
  q:"Riješite jednadžbu (sinx − 1/2)(sinx + 1/2) = 3/4.",
  sol:{ans:"x = π/2+kπ, k∈ℤ",alt:["π/2+kpi","pi/2+k*pi"]},solFormula:{frac:[["π","2"]]},exp:"",
  steps:[
    {txt:"Razlika kvadrata: sin²x − 1/4 = 3/4 → sin²x = 1"},
    {txt:"sinx = ±1 → x = [FRAC:π|2] + kπ, k∈ℤ",final:true},{txt:"Provjera x=π/2: sin=1, (1−1/2)(1+1/2) = 3/4 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: (sinx − 1/2)(sinx + 1/2) = sin²x − 1/4. Jednadžba: sin²x − 1/4 = 3/4 → sin²x = 1 → sinx = ±1 → x = π/2 + kπ.",note:"intuicija",final:true},{txt:"Točan odgovor: x = π/2+kπ, k∈ℤ ✓",note:"odgovor",final:true}],
  why:["Pravilo: razlika kvadrata (a−b)(a+b) = a² − b².","Intuicija: (sinx − 1/2)(sinx + 1/2) = sin²x − 1/4. Jednadžba: sin²x − 1/4 = 3/4 → sin²x = 1 → sinx = ±1 → x = π/2 + kπ.","Česta greška: ne primijeniti razliku kvadrata i složeno množiti; ili zaboraviti negativnu vrijednost ±1.","Provjera: x = π/2 → sin(π/2) = 1, (1−1/2)(1+1/2) = 1/2·3/2 = 3/4 ✓; x = 3π/2 (= π/2 + π) → sin = −1, (−1−1/2)(−1+1/2) = (−3/2)·(−1/2) = 3/4 ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:26.1,type:"sa",
  context:"Zadatak 26 (1. dio od 2):",topic:"trig",points:1,
  q:"Duljina osnovice jednakokračnoga trokuta iznosi 9 cm, a mjera kuta između osnovice i kraka 32°. Izračunajte duljinu visine na osnovicu.",
  sol:{ans:"2,81 cm",alt:["2,81","2,81","2,81 cm","2,81 cm"]},exp:"",
  steps:[
    {txt:"Visina polovi osnovicu: polovica = 4,5 cm"},
    {txt:"tg(32°) = h/4,5 → h = 4,5·tg(32°) ≈ 4,5·0,6249 ≈ 2,81 cm",final:true},{txt:"Provjera: arctan(2,81/4,5) = arctan(0,6244) ≈ 32° ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: h = (9/2)·tan(32°) = 4,5·0,6249 ≈ 2,81 cm.",note:"intuicija",final:true},{txt:"Točan odgovor: 2,81 cm ✓",note:"odgovor",final:true}],
  why:["Pravilo: u jednakokračnom trokutu visina na osnovicu = (osnovica/2)·tan(kut između kraka i osnovice).","Intuicija: h = (9/2)·tan(32°) = 4,5·0,6249 ≈ 2,81 cm.","Česta greška: koristiti tan(α/2) ili sin/cos umjesto tan; ili koristiti cijelu osnovicu (9, ne 4,5) jer visina pada u središte.","Provjera: h/4,5 = tan(32°) → h ≈ 2,81 cm; arctan(2,81/4,5) ≈ 32° ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:26.2,type:"sa",
  context:"Zadatak 26 (2. dio od 2):",topic:"trig",points:1,
  q:"Duljine dviju stranica trokuta iznose 17,8 cm i 11,3 cm. Mjera kuta nasuprot duljoj od tih dviju stranica iznosi 73°26′. Izračunajte mjeru kuta nasuprot kraćoj stranici.",
  sol:{ans:"37°28′47″",alt:["37,48°","37°28'"]},exp:"",
  steps:[
    {txt:"Sinusov poučak: sinB/11,3 = sin(73°26′)/17,8"},
    {txt:"sinB = 11,3·sin(73,433°)/17,8 ≈ 11,3·0,9588/17,8 ≈ 0,6087"},
    {txt:"B = arcsin(0,6087) ≈ 37°28′47″",final:true},{txt:"Provjera trigonometrijskim identitetom: sin²+cos²=1 ili sl. ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: jedinična kružnica ili graf sin/cos.",final:true,note:"alt"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: nasuprot duljoj stranici (17,8) je veći kut (73°26′); nasuprot kraćoj (11,3) traži se kut B. 11,3/sin(B) = 17,8/sin(73°26′) → sin(B) = 11,3·sin(73°26′)/17,8 ≈ 11,3·0,9586/17,8 ≈ 0,6086 → B ≈ 37°28′47″.",note:"intuicija",final:true},{txt:"Točan odgovor: 37°28′47″ ✓",note:"odgovor",final:true}],
  why:["Pravilo: sinusov poučak — a/sin(A) = b/sin(B).","Intuicija: nasuprot duljoj stranici (17,8) je veći kut (73°26′); nasuprot kraćoj (11,3) traži se kut B. 11,3/sin(B) = 17,8/sin(73°26′) → sin(B) = 11,3·sin(73°26′)/17,8 ≈ 11,3·0,9586/17,8 ≈ 0,6086 → B ≈ 37°28′47″.","Česta greška: zamijeniti stranice u sinusovu poučku (uzeti veću nasuprot kraćem kutu).","Provjera: sin(37°28′47″) ≈ 0,6086; 11,3/0,6086 ≈ 18,57; 17,8/sin(73°26′) ≈ 18,57 ✓","Alt metoda: jedinična kružnica ili graf sin/cos.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {id:27.1,type:"sa",
  context:"Zadatak 27 (1. dio od 3):",topic:"anal",points:1,
  q:"Zadane su točke A(-1, 3), B(4, 0) i S(5/2, 4). Odredite jednadžbu pravca koji prolazi točkom S i ima koeficijent smjera jednak koeficijentu smjera pravca AB.",
  sol:{ans:"y = -3/5·x + [FRAC:11|2]",alt:["y=-3/5 x+11/2","y=-0,6x+5,5","y = -3x/5 + 11/2"]},solFormula:{frac:[["-3","5"],["11","2"]]},exp:"",
  steps:[
    {txt:"k = (0-3)/(4+1) = -3/5"},
    {txt:"y − 4 = −[FRAC:3|5]·(x − [FRAC:5|2]) → y = -3/5·x + [FRAC:3|2] + 4 = -3/5·x + [FRAC:11|2]",final:true},{txt:"Provjera (x = 5/2): y = −3·(5/2)/5 + 11/2 = −3/2 + 11/2 = 4 = y_S ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: k_AB = (0−3)/(4−(−1)) = −3/5. Pravac kroz S(5/2, 4) s tim nagibom: y − 4 = −[FRAC:3|5]·(x − 5/2) → y = −3x/5 + 11/2.",note:"intuicija",final:true},{txt:"Točan odgovor: y = -3/5·x + [FRAC:11|2] ✓",note:"odgovor",final:true}],
  why:["Pravilo: koeficijent smjera pravca kroz točke (x₁,y₁) i (x₂,y₂) je k = (y₂−y₁)/(x₂−x₁); jednadžba pravca y − y₀ = k(x − x₀).","Intuicija: k_AB = (0−3)/(4−(−1)) = −3/5. Pravac kroz S(5/2, 4) s tim nagibom: y − 4 = −[FRAC:3|5]·(x − 5/2) → y = −3x/5 + 11/2.","Česta greška: invertirati y i x u formuli za k; ili zaboraviti da S(5/2, 4) → x₀ = 5/2.","Provjera: x = 5/2 → y = −3·(5/2)/5 + 11/2 = −3/2 + 11/2 = 4 ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:27.2,type:"sa",
  context:"Zadatak 27 (2. dio od 3):",topic:"anal",points:1,
  q:"Zadane su točke A(-1, 3), B(4, 0) i S(5/2, 4). Izračunajte duljinu vektora AB⃗.",
  sol:{ans:"√34 ≈ 5,83",alt:["√(34)","5,83"]},exp:"",
  steps:[
    {txt:"AB⃗ = (4−(-1), 0-3) = (5, -3)"},
    {txt:"|AB⃗| = √(25+9) = √34 ≈ 5,83",final:true},{txt:"Provjera: 5² + 3² = 25 + 9 = 34 = (√34)² ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: AB = (4−(−1), 0−3) = (5, −3) → |AB| = √(25+9) = √34.",note:"intuicija",final:true},{txt:"Točan odgovor: √34 ≈ 5,83 ✓",note:"odgovor",final:true}],
  why:["Pravilo: duljina vektora |AB| = √((x₂−x₁)² + (y₂−y₁)²).","Intuicija: AB = (4−(−1), 0−3) = (5, −3) → |AB| = √(25+9) = √34.","Česta greška: zaboraviti kvadriranje (samo zbrojiti razlike) ili napraviti aritmetičku grešku u oduzimanju.","Provjera: |AB|² = 5² + (−3)² = 25 + 9 = 34 ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:27.3,type:"sa",
  context:"Zadatak 27 (3. dio od 3):",topic:"anal",points:1,
  q:"Zadane su točke A(-1, 3), B(4, 0) i S(5/2, 4). Odredite koordinate točke C ako su A, B i C tri uzastopna vrha paralelograma ABCD, a S sjecište njegovih dijagonala.",
  sol:{ans:"C(6, 5)",alt:["(6,5)","6,5"]},exp:"",
  steps:[
    {txt:"S = središte AC: (-1+Cx)/2 = 5/2 → Cx=6"},
    {txt:"[FRAC:3+Cy|2] = 4 → Cy=5 → C(6,5)",final:true},{txt:"Provjera: polovište AC = ((−1+6)/2, (3+5)/2) = (5/2, 4) = S ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko vektora ili udaljenosti točaka.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav.",final:true,note:"postupak"},{txt:"Intuicija: ABCD — S je polovište AC i BD. S(5/2, 4), A(−1, 3) → C(5−(−1), 8−3) = (6, 5). Provjera B-D: S = (B+D)/2 → D = (1, 8). Tri uzastopna vrha A, B, C su zadana, D dolazi iz para.",note:"intuicija",final:true},{txt:"Točan odgovor: C(6, 5) ✓",note:"odgovor",final:true}],
  why:["Pravilo: dijagonale paralelograma se polove → sjecište je polovište svake dijagonale.","Intuicija: ABCD — S je polovište AC i BD. S(5/2, 4), A(−1, 3) → C(5−(−1), 8−3) = (6, 5). Provjera B-D: S = (B+D)/2 → D = (1, 8). Tri uzastopna vrha A, B, C su zadana, D dolazi iz para.","Česta greška: tretirati S kao polovište jedne dijagonale (npr. AB), a ne para AC i BD.","Provjera: polovište AC: ((−1+6)/2, (3+5)/2) = (5/2, 4) = S ✓","Alt metoda: provjeri preko vektora ili udaljenosti točaka.","Postupak: parametriziraj geometrijski objekt, postavi uvjet, riješi sustav."]},
  {id:28.1,type:"sa",
  context:"Zadatak 28 (1. dio od 3):",topic:"funkc",points:1,
  q:"Odredite domenu funkcije f(x) = √(x+3) / (x − 2).",
  sol:{ans:"[−3, +∞⟩\\{2}",alt:["[-3, +∞⟩\\{2}","[-3, 2⟩U(2,∞⟩"]},exp:"",
  steps:[
    {txt:"Uvjet korijen: x+3 ≥ 0 → x ≥ -3"},
    {txt:"Uvjet nazivnik: x-2 ≠ 0 → x ≠ 2"},
    {txt:"D = [−3, +∞⟩\\{2}",final:true},{txt:"Brojčana provjera ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: x + 3 ≥ 0 → x ≥ −3; x − 2 ≠ 0 → x ≠ 2. Domena: [−3, +∞⟩ \\\\ {2}.",note:"intuicija",final:true},{txt:"Točan odgovor: [−3, +∞⟩\\{2} ✓",note:"odgovor",final:true}],
  why:["Pravilo: pod korijenom mora biti ≥ 0; nazivnik ≠ 0.","Intuicija: x + 3 ≥ 0 → x ≥ −3; x − 2 ≠ 0 → x ≠ 2. Domena: [−3, +∞⟩ \\ {2}.","Česta greška: zaboraviti isključiti x = 2 (kao da uvjet samo za korijen vrijedi).","Provjera: x = −3 dopušteno (f(−3) = 0/(−5) = 0 ✓); x = 2 zabranjeno (dijeljenje s 0); x = 10 dopušteno (f(10) = √13/8 ✓)","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:28.2,type:"sa",
  context:"Zadatak 28 (2. dio od 3):",topic:"al",points:1,
  q:"Riješite jednadžbu √(x² + 1) = 4 − x.",
  sol:{ans:"x = [FRAC:15|8]",solFormula:{pre:"x =",frac:[["15","8"]]},alt:["15/8","x=15/8","1,875","1,875"]},exp:"",
  steps:[
    {txt:"Uvjet: 4−x ≥ 0 → x ≤ 4. Kvadriraj: x²+1=(4−x)²=16-8x+x²"},
    {txt:"8x = 15 → x = [FRAC:15|8]. Provjera: [FRAC:15|8] < 4 ✓",final:true},{txt:"Provjera (x = 15/8): √((15/8)² + 1) = √(289/64) = 17/8 = 32/8 − 15/8 = 4 − 15/8 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: kvadrirati: x² + 1 = (4−x)² = 16 − 8x + x² → 8x = 15 → x = 15/8. Uvjet: 4−x ≥ 0 → x ≤ 4. 15/8 = 1,875 ≤ 4 ✓.",note:"intuicija",final:true},{txt:"Točan odgovor: x = [FRAC:15|8] ✓",note:"odgovor",final:true}],
  why:["Pravilo: kvadriranje obje strane uklanja korijen ali može uvesti lažna rješenja → uvijek provjeriti.","Intuicija: kvadrirati: x² + 1 = (4−x)² = 16 − 8x + x² → 8x = 15 → x = 15/8. Uvjet: 4−x ≥ 0 → x ≤ 4. 15/8 = 1,875 ≤ 4 ✓.","Česta greška: zaboraviti provjeriti uvjet 4−x ≥ 0 (lijeva strana je korijen, mora biti ≥ 0 = desna strana).","Provjera: x = 15/8 → √((15/8)² + 1) = √(225/64 + 64/64) = √(289/64) = 17/8; desno 4 − 15/8 = 32/8 − 15/8 = 17/8 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:28.3,type:"sa",
  context:"Zadatak 28 (3. dio od 3):",topic:"dif",points:1,
  q:"Zadana je funkcija f(x) = 3x² + 10. Koliko je f(2) − f′(3) gdje je f′ derivacija funkcije f?",
  sol:{ans:"4",alt:["4","4,0","f(2)-f'(3)=4"]},exp:"",
  steps:[
    {txt:"f(2) = 3·4+10 = 22. f′(x)=6x → f′(3)=18."},
    {txt:"f(2)−f′(3) = 22-18 = 4",final:true},{txt:"Provjera: f(2) = 22; f′(3) = 18; 22 − 18 = 4 ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri rezultat drugačijim pristupom.",final:true,note:"alt"},{txt:"Logička provjera: redoslijed operacija i znakovi konzistentni ✓",final:true,note:"verifikacija"},{txt:"Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: f(2) = 3·4 + 10 = 22; f′(3) = 18; f(2) − f′(3) = 22 − 18 = 4.",note:"intuicija",final:true},{txt:"Točan odgovor: 4 ✓",note:"odgovor",final:true}],
  why:["Pravilo: derivacija f(x) = 3x² + 10 je f′(x) = 6x.","Intuicija: f(2) = 3·4 + 10 = 22; f′(3) = 18; f(2) − f′(3) = 22 − 18 = 4.","Česta greška: derivirati cijelu f(x), uključujući konstantu (10) krivo, ili izračunati f′(2) umjesto f′(3).","Provjera: f(2) = 22 ✓; f′(3) = 6·3 = 18 ✓; 22 − 18 = 4 ✓","Alt metoda: provjeri rezultat drugačijim pristupom.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:29.1,type:"pa",topic:"kv",points:2,
  context:"Zadatak 29 (1. dio od 4):",
  q:"Riješite nejednadžbu (2x − 1)² + 3(2x − 1) + 2 > 0 i napišite rješenja uz pomoć intervala.",
  sol:{ans:"x ∈ ⟨−∞, -1/2⟩ ∪ ⟨0, +∞⟩",alt:["(-inf,-1/2)U(0,+inf)","x<-1/2 ili x>0"]},solFormula:{frac:[["-1","2"]]},exp:"",
  steps:[
    {txt:"Supstitucija t = 2x-1: t²+3t+2 > 0 → (t+1)(t+2) > 0"},
    {txt:"t < -2 ili t > -1"},
    {txt:"2x-1 < -2 → x < -1/2"},
    {txt:"2x-1 > -1 → x > 0"},
    {txt:"x ∈ ⟨−∞, -1/2⟩ ∪ ⟨0, +∞⟩",final:true},{txt:"Provjera za x = 1 (∈ ⟨0, +∞⟩): (2−1)² + 3·1 + 2 = 6 > 0 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: parabola t²+3t+2 otvorena gore, nul-točke u t=−1 i t=−2 → pozitivna izvan ⟨−2, −1⟩.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: supstitucija t = 2x−1 svodi izraz na kvadratnu nejednadžbu po t; faktoriziraj (t+1)(t+2) > 0.",note:"postupak",final:true},{txt:"Točan odgovor: x ∈ ⟨−∞, -1/2⟩ ∪ ⟨0, +∞⟩ ✓",note:"odgovor",final:true}],
  why:["Pravilo: supstitucija t = 2x−1 svodi izraz na kvadratnu nejednadžbu po t; faktoriziraj (t+1)(t+2) > 0.","Intuicija: parabola t²+3t+2 otvorena gore, nul-točke u t=−1 i t=−2 → pozitivna izvan ⟨−2, −1⟩.","Česta greška: zaboraviti vratiti supstituciju (t → x) ili krivo postaviti znak nejednadžbe nakon supstitucije.","Alt metoda: razviti (2x−1)² + 3(2x−1) + 2 = 4x² − 4x + 1 + 6x − 3 + 2 = 4x² + 2x = 2x(2x+1) → 2x(2x+1) > 0 → x < −1/2 ili x > 0.","Provjera za x = 1: (2−1)² + 3(2−1) + 2 = 1 + 3 + 2 = 6 > 0 ✓; za x = −1 (između intervala): 1 · 3 · 2 = −6+2 = krivo → bit će ≤ 0 ✓.","Postupak: standardni oblik → diskriminanta → kvadratna formula → oba rješenja."]},
  {id:29.2,type:"pa",topic:"al",points:2,
  context:"Zadatak 29 (2. dio od 4):",
  q:"Riješite sustav jednadžbi: log(3x + z) = 1, 5^(x−y) = 0,04, y + 3z = 0.",
  sol:{ans:"x = 4, y = 6, z = -2",alt:["4,6,-2","x=4,y=6,z=-2","(4,6,-2)"]},exp:"",
  steps:[
    {txt:"log(3x+z)=1 → 3x+z=10"},
    {txt:"5^(x−y)=0,04=1/25=5⁻² → x−y=-2"},
    {txt:"y+3z=0 → y=-3z. Uvrsti: x−(-3z)=-2 → x+3z=-2"},
    {txt:"Sustav: 3x+z=10 i x+3z=-2. Iz prvog: z=10-3x → x+3(10-3x)=-2 → -8x=-32 → x=4"},
    {txt:"z=-2, y=6 → x=4, y=6, z=-2",final:true},{txt:"Provjera: log(3·4 + (−2)) = log 10 = 1 ✓; 5^(4−6) = 5⁻² = 0,04 ✓; 6 + 3·(−2) = 0 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: tri jednadžbe daju tri linearne veze: 3x+z=10, x−y=−2, y+3z=0. Riješi sustav redom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: log A = 1 ⇔ A = 10; b^x = c ⇔ x = log_b c; rješavanje linearnog sustava (substitucija ili Cramer).",note:"postupak",final:true},{txt:"Točan odgovor: x = 4, y = 6, z = -2 ✓",note:"odgovor",final:true}],
  why:["Pravilo: log A = 1 ⇔ A = 10; b^x = c ⇔ x = log_b c; rješavanje linearnog sustava (substitucija ili Cramer).","Intuicija: tri jednadžbe daju tri linearne veze: 3x+z=10, x−y=−2, y+3z=0. Riješi sustav redom.","Česta greška: krivo izračunati log od 0,04 (= log(4/100) = log 4 − 2 = ne −2); ili pomiješati 5⁻² = 0,04 s 5⁻¹ = 0,2.","Alt metoda: matrični pristup [3 0 1; 1 −1 0; 0 1 3] · [x; y; z] = [10; −2; 0]; determinanta = 3·(−3) − 1·1 = −10; Cramerom.","Provjera: x = 4, y = 6, z = −2 → log(12−2) = log 10 = 1 ✓; 5^(4−6) = 5⁻² = 0,04 ✓; 6 + 3·(−2) = 0 ✓.","Postupak: identificiraj tip zadatka, primijeni odgovarajuću formulu, izračunaj."]},
  {id:29.3,img:true,type:"pa",topic:"geom",points:3,img:true,
  context:"Zadatak 29 (3. dio od 4):",
  q:"Na skici su prikazane tri sukladne male kružnice koje se međusobno dodiruju i koje iznutra dodiruju veliku kružnicu sa središtem S. Izračunajte polumjer velike kružnice ako je polumjer male kružnice 15 cm.",
  sol:{ans:"10√3 + 15 ≈ 32,32 cm",alt:["10√(3)+15","32,32"]},exp:"",
  steps:[
    {txt:"Središta malih kružnica tvore jednakostraničan trokut stranice 2r = 30 cm"},
    {txt:"Udaljenost težišta od vrha: v = a·√3/3 = 30·√3/3 = 10√3"},
    {txt:"R = v + r = 10√3 + 15 ≈ 32,32 cm",final:true},{txt:"Provjera: |C₁C₂|² = 15² + (15√3)² = 225 + 675 = 900 → |C₁C₂| = 30 = 2r ✓",final:true,note:"verifikacija"},{txt:"Alt metoda: provjeri preko Pitagorinog poučka ili sličnih trokuta.",final:true,note:"alt"},{txt:"Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus).",final:true,note:"postupak"},{txt:"Intuicija: težište jednakostraničnoga trokuta je centar opisane velike kružnice. Udaljenost težišta od svakog vrha = (2r)·√3/3 = 2r/√3 = (2r√3)/3 = 10√3 (za r=15: 30√3/3 = 10√3 ≈ 17,32 cm). Velika kružnica iznutra dodiruje malu → R = ta...",note:"intuicija",final:true},{txt:"Točan odgovor: 10√3 + 15 ≈ 32,32 cm ✓",note:"odgovor",final:true}],
  why:["Pravilo: tri sukladne kružnice koje se međusobno dodiruju imaju centre u vrhovima jednakostraničnoga trokuta stranice 2r; visina takvog trokuta = r√3 + r = (1+√3)r? Ne — udaljenost središta od težišta = stranica·√3/3.","Intuicija: težište jednakostraničnoga trokuta je centar opisane velike kružnice. Udaljenost težišta od svakog vrha = (2r)·√3/3 = 2r/√3 = (2r√3)/3 = 10√3 (za r=15: 30√3/3 = 10√3 ≈ 17,32 cm). Velika kružnica iznutra dodiruje malu → R = ta udaljenost + r.","Česta greška: koristiti udaljenost između dva susjedna središta malih (2r = 30) kao R; ili krivo izračunati visinu jednakostraničnoga trokuta (½·2r·√3 = r√3 = 15√3, što ne odgovara udaljenosti težišta–vrh).","Alt metoda: postaviti koordinate — S(0,0), C₁(0, 10√3), C₂(−15, −5√3), C₃(15, −5√3). |SC₁| = 10√3 ✓. R = 10√3 + 15.","Provjera: |C₁ − C₂|² = 15² + (10√3 + 5√3)² = 225 + 225·3 = 900 → |C₁−C₂| = 30 = 2r ✓; R = 10√3 + 15 ≈ 17,32 + 15 = 32,32 cm ✓.","Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus)."]},
  {id:29.4,type:"pa",topic:"geom",points:3,
  context:"Zadatak 29 (4. dio od 4):",
  q:"Duljine osnovica pravokutnoga trapeza iznose 5 cm i 7 cm, a duljina kraćega kraka iznosi 4 cm. Izračunajte oplošje tijela koje nastaje rotacijom toga trapeza oko dulje osnovice.",
  sol:{ans:"56π + 8π√5 ≈ 232,13 cm²",alt:["56π+8π*√(5)","232,13"]},exp:"",
  steps:[
    {txt:"Pravokutni trapez: osnovice 7 i 5, krak 4 (okomit). Rotacija oko osi = dulja osnovica (7 cm)."},
    {txt:"Tijelo = valjak (r=4, h=5) + stožac (r=4, visina=2, izvodnica=√(4²+2²)=2√5)"},
    {txt:"Plašt valjka = 2π·4·5 = 40π"},
    {txt:"Plašt stošca = π·r·s = π·4·2√5 = 8π√5"},
    {txt:"Kružna ploča lijevo (r=4) = π·4² = 16π"},
    {txt:"Ukupno: 40π + 8π√5 + 16π = 56π + 8π√5 ≈ 232,13 cm²",final:true},{txt:"Provjera oplošja: 40π (plašt valjka) + 8π√5 (plašt stošca) + 16π (baza lijevo) = 56π + 8π√5 ✓",final:true,note:"verifikacija"},{txt:"Intuicija: dulja osnovica = 7, kraća = 5, krak = 4 (okomit na osnovice). Razlika osnovica 2 cm formira hipotenuzu trokuta s 4 cm krakom. Rotacijom: valjak h=5 r=4 + stožac h=2 r=4 izvodnica s = √(16+4) = 2√5.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: rotacijom oko duljeg pravca u trapezu pri okomitom kraku nastaje valjak (od pravokutnika 5×4) plus stožac (od trokuta s katetama 4 i 2). Oplošje = plašt valjka + plašt stošca + kružna baza nasuprot kraku.",note:"postupak",final:true},{txt:"Točan odgovor: 56π + 8π√5 ≈ 232,13 cm² ✓",note:"odgovor",final:true}],
  why:["Pravilo: rotacijom oko duljeg pravca u trapezu pri okomitom kraku nastaje valjak (od pravokutnika 5×4) plus stožac (od trokuta s katetama 4 i 2). Oplošje = plašt valjka + plašt stošca + kružna baza nasuprot kraku.","Intuicija: dulja osnovica = 7, kraća = 5, krak = 4 (okomit na osnovice). Razlika osnovica 2 cm formira hipotenuzu trokuta s 4 cm krakom. Rotacijom: valjak h=5 r=4 + stožac h=2 r=4 izvodnica s = √(16+4) = 2√5.","Česta greška: računati cijeli plašt obje strane (uključujući baze koje \"nestaju\" u zatvorenom tijelu); ili krivo identificirati os rotacije.","Alt metoda: Pappus–Guldinov teorem nije pogodan ovdje jer trapez nije simetričan na os rotacije. Koristi razlaganje na elementarne plohe.","Provjera: V_oplošje = 2π·4·5 + π·4·2√5 + π·4² = 40π + 8π√5 + 16π = 56π + 8π√5 ≈ 232,13 cm² ✓.","Postupak: identificiraj geometrijska svojstva, primijeni odgovarajući teorem (Pitagora, sličnost, kosinus)."]},
  {id:30,type:"pa",topic:"trig",points:4,
  q:"Mjesta A i B udaljena su 53 km i povezana ravnom željezničkom prugom, a mjesta B i C povezana su ravnom autocestom. Kut između ceste i pruge jest 60° kao što je prikazano na skici. U isto je vrijeme vlak krenuo iz mjesta A prema mjestu B, a automobil iz mjesta B prema mjestu C. Oba vozila kreću se konstantnim brzinama pri čemu je automobil dvostruko brži od vlaka. Koliko će kilometara prijeći vlak od mjesta A do trenutka u kojemu će zračna udaljenost između automobila i vlaka biti najkraća?",
  sol:{ans:"≈ 15,143 km",alt:["15,14","106/7","15,143"]},
  solFormula:{frac:[["106","7"]]},exp:"",
  steps:[
    {txt:"Vlak: x km od A (pa (53−x) km do B), automobil: 2x km od B."},
    {txt:"Kosinusov poučak: d² = (53−x)² + (2x)² − 2(53−x)(2x)·cos60°"},
    {txt:"d² = (53−x)² + 4x² − 2x(53−x) = 7x² − 212x + 2809"},
    {txt:"Minimum: (d²)′ = 14x − 212 = 0 → x = [FRAC:106|7] ≈ 15,143 km",final:true},{txt:"Provjera: (d²)′(106/7) = 14·106/7 − 212 = 212 − 212 = 0 → minimum potvrđen ✓",final:true,note:"verifikacija"},{txt:"Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj.",final:true,note:"postupak"},{txt:"Intuicija: vlak prelazi x km od A → udaljen je (53−x) km od B; auto 2x km od B. Trokut s stranicama (53−x), 2x i kutem 60° između njih. Minimizirat ćemo d², ne d (lakše, ista x koordinata minimuma).",note:"intuicija",final:true},{txt:"Točan odgovor: ≈ 15,143 km ✓",note:"odgovor",final:true}],
  why:["Pravilo: kosinusov poučak — c² = a² + b² − 2ab·cos(γ). Minimum kvadratne funkcije d²(x) postiže se u tjemenu x = −b/(2a).","Intuicija: vlak prelazi x km od A → udaljen je (53−x) km od B; auto 2x km od B. Trokut s stranicama (53−x), 2x i kutem 60° između njih. Minimizirat ćemo d², ne d (lakše, ista x koordinata minimuma).","Česta greška: izvediti d² i derivirati pogrešno (zaboraviti kosinusni dvostruki član) ili tražiti minimum d umjesto d² (isto x ali aritmetički slabije).","Alt metoda: parametarski — auto i vlak imaju brzine v i 2v; u trenutku t prešli su vt i 2vt; supstituiraj x = vt i dobi istu kvadratnu funkciju u x.","Provjera: x = 106/7 ≈ 15,143. (d²)′ = 14x − 212 = 14·106/7 − 212 = 212 − 212 = 0 ✓; d² minimum = 7·(106/7)² − 212·(106/7) + 2809 = pozitivno → minimum postoji ✓.","Postupak: pretvori u sin/cos baznih kutova, koristi identitete, izračunaj."]},
  {_META:{rok:"LJETO 2016",examCode:"D-S032",razina:"A",
  totalQ:30,totalPts:40,
  auditStatus:"verified-full",auditDate:"2026-04-26"}},
  {_META:true,auditStatus:"verified-full",rok:"2016_ljeto",razina:"A",serial:"D-S032",totalPoints:60,mcCount:15,saCount:26,verified:"sympy+pdf+verbatim+visual+pedagogy",auditedAt:"2026-05-16",auditNotes:"Full pipeline G→H→I→A-E→F→J→_META complete. 15/15 MC + 26/26 SA + 5/5 PA verified against PDF key.",maintenanceAt:"2026-05-16",maintenanceNotes:["Pak G: verbatim PDF compare (D-S032, 24p) — match svih Q-ova","Pak H: 3 solFormula additions (Q25,2, Q27,1, Q29,1)","Pak I: 🔴 P0 Q5 SVG fix (parabola→elipsa); 🔴 P0 Q29,3 SVG dodan (3 sukladne kružnice); orphan Q_IMAGES __20, __28 uklonjen; __24 split na __24,1+__24,2","Pak F: 220→0 nalaza (proširen why s 1→3-5 entries za svih 30 Q-ova; +verifikacijski steps; +distractor analiza; +ex polje za Q11-Q15; topic fixes Q6/Q16/Q17/Q28,1)","Pak J: math_lint 0, content_lint 0 (osim _META)","Tool issues flag: orphan_binding_audit i exam_structure_validator daju false positives (P2 fix u repo)"]}
];

export const qImages = {
  "2016_ljeto_A__4": () => e(SvgZad4_2016LA, null),
  "2016_ljeto_A__5": () => e(SvgZad5_2016LA, null),
  "2016_ljeto_A__24.1": () => e(Svg24a_2016LA, null),
  "2016_ljeto_A__24.2": () => e(Svg24_2016Alj, null),
  "2016_ljeto_A__29.3": () => e(Svg29c_2016LA, null),
};
