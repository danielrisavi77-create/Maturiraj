// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
const e = React.createElement;

function SvgGrid30_2014JA() {
  const W=280, H=280, cell=20, ox=140, oy=140;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t='var(--text)';
  const grid_lines = [];
  // Vertikalne linije
  for(let i=0; i<=14; i++){
    const x = i*cell;
    grid_lines.push(e('line',{key:'v'+i,x1:x,y1:0,x2:x,y2:H,
      stroke:'rgba(148,163,184,0.25)',strokeWidth:0.5}));
  }
  // Horizontalne linije
  for(let i=0; i<=14; i++){
    const y = i*cell;
    grid_lines.push(e('line',{key:'h'+i,x1:0,y1:y,x2:W,y2:y,
      stroke:'rgba(148,163,184,0.25)',strokeWidth:0.5}));
  }
  const labels = [
    ['x', ox+148, oy+5],
    ['y', ox+6, 10],
    ['0', ox-12, oy+14],
    ['1', ox+cell-3, oy+14],
    ['1', ox-14, oy-cell+5],
  ];
  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',
    style:{maxWidth:W,display:'block',margin:'0 auto'}},
    ...grid_lines,
    // X os
    e('line',{x1:4,y1:oy,x2:W-4,y2:oy,stroke:t,strokeWidth:1.2}),
    e('polygon',{points:`${W-2},${oy} ${W-8},${oy-4} ${W-8},${oy+4}`,fill:t}),
    // Y os
    e('line',{x1:ox,y1:H-4,x2:ox,y2:4,stroke:t,strokeWidth:1.2}),
    e('polygon',{points:`${ox},2 ${ox-4},10 ${ox+4},10`,fill:t}),
    // Oznake na osima
    e('line',{x1:ox+cell,y1:oy-3,x2:ox+cell,y2:oy+3,stroke:t,strokeWidth:1}),
    e('line',{x1:ox-3,y1:oy-cell,x2:ox+3,y2:oy-cell,stroke:t,strokeWidth:1}),
    ...labels.map(([l,x,y])=>e('text',{key:l,x,y,fontSize:11,fill:t,fontFamily:'serif'},l))
  );
}

function SvgZad14_2014JA(){
  // Beskonačni niz krugova koji se izvana dodiruju, smanjuju se
  const W=380,H=130;
  const y0=65; // centralna y-os
  let x=30,r=50;
  const circles=[];
  let idx=0;
  while(r>2 && x+r<W-10 && idx<5){
    circles.push(e("circle",{key:"c"+idx,cx:x+r,cy:y0,r:r,fill:"rgba(74,144,217,0.1)",stroke:"var(--blue)",strokeWidth:1.5}));
    if(idx<3) circles.push(e("text",{key:"k"+idx,x:x+r,y:y0+4,fill:"var(--blue)",fontSize:11,textAnchor:"middle"},`K${idx+1}`));
    x+=2*r; r/=2; idx++;
  }
  circles.push(e("text",{key:"dots",x:x+10,y:y0+4,fill:"var(--muted)",fontSize:14},"..."));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    e("line",{x1:20,y1:y0,x2:W-10,y2:y0,stroke:"var(--muted)",strokeWidth:1,strokeDasharray:"3,3"}),
    ...circles,
    e("text",{x:30,y:y0+50,fill:"#e8c547",fontSize:11},"r₁=10, r₂=5, r₃=2,5, ..."),
    // (odgovor se prikazuje u steps polju, ne u slici)
  );
}

function SvgZad13_2014JA(){
  // Trapez s okomitim krakom: osnovice 10 i 6, okomiti krak 4
  const W=320,H=200;
  const x0=40,y0=160,sc=18;
  // A dolje-lijevo, B dolje-desno, C gore-desno, D gore-lijevo
  const A=[x0,y0], B=[x0+10*sc,y0], C=[x0+10*sc,y0-4*sc], D=[x0+4*sc,y0-4*sc];
  // Dužina na visini x od vrha (od kraće):
  const x_cut=2.246;
  const y_cut=y0-4*sc+x_cut*sc; // od kraće (gore) prema dolje
  // Jednostavniji pristup: linija na udaljenosti x_cut od kratke (gornje) osnovice
  const y_line=y0-4*sc+x_cut*sc;
  // x-koordinata lijeve točke linije (trapez se širi od 6 prema 10):
  const frac=x_cut/4;  // 0 do 1
  const left_line=D[0]+frac*(A[0]-D[0]); // D=lijevo gore, A=lijevo dolje (ne mijenja x!)
  // Zapravo lijeva stranica je vertikalna (okomiti krak)
  const right_line=D[0]+6*sc+frac*(B[0]-(D[0]+6*sc));
  const pts=(arr)=>arr.map(p=>p.join(",")).join(" ");

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Trapez
    e("polygon",{points:pts([A,B,C,D]),fill:"rgba(74,144,217,0.08)",stroke:"var(--text)",strokeWidth:2}),
    // Pravokutni kut
    e("rect",{x:A[0],y:A[1]-12,width:12,height:12,fill:"none",stroke:"var(--muted)",strokeWidth:1.2}),
    // Dužina koja dijeli
    e("line",{x1:A[0],y1:y_line,x2:right_line,y2:y_line,stroke:"#e8c547",strokeWidth:2}),
    // Mjere
    e("text",{x:(A[0]+B[0])/2,y:A[1]+16,fill:"var(--muted)",fontSize:11,textAnchor:"middle"},"10 cm"),
    e("text",{x:(D[0]+C[0])/2,y:D[1]-6,fill:"var(--muted)",fontSize:11,textAnchor:"middle"},"6 cm"),
    e("text",{x:A[0]-26,y:(A[1]+D[1])/2+4,fill:"var(--muted)",fontSize:11},"4 cm"),
    // Razmak x od kraće
    e("line",{x1:A[0]-18,y1:D[1],x2:A[0]-18,y2:y_line,stroke:"#3dd68c",strokeWidth:1.5}),
    e("line",{x1:A[0]-22,y1:D[1],x2:A[0]-14,y2:D[1],stroke:"#3dd68c",strokeWidth:1}),
    e("line",{x1:A[0]-22,y1:y_line,x2:A[0]-14,y2:y_line,stroke:"#3dd68c",strokeWidth:1}),
    e("text",{x:A[0]-36,y:(D[1]+y_line)/2+4,fill:"#3dd68c",fontSize:11},"x"),
    // (odgovor se prikazuje u steps polju, ne u slici)
  );
}

function SvgZad12_2014JA(){
  // Kuća s kutovima 33° i 26°, krovna greda 1.5m iznad krova
  // Jasne mjere i kutovi
  const W=380,H=260;
  // Koordinatni sustav: tlo je y=220
  const gnd=220;
  // Kuća: zid [60..160, gnd-100..gnd], krov tjeme (110, gnd-160)
  const wallL=60,wallR=160,wallTop=gnd-100,roofTip=gnd-160;
  // Antena: 1.5m = 30px iznad tjemena
  const antTop=roofTip-30;
  // Promatrač: na tlu desno
  const obs=330;

  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},
    // Tlo
    e("line",{x1:30,y1:gnd,x2:W-10,y2:gnd,stroke:"var(--muted)",strokeWidth:1.5}),

    // Zid kuće
    e("rect",{x:wallL,y:wallTop,width:wallR-wallL,height:gnd-wallTop,
      fill:"rgba(74,144,217,0.1)",stroke:"var(--text)",strokeWidth:2}),

    // Krov
    e("polygon",{
      points:`${wallL},${wallTop} ${(wallL+wallR)/2},${roofTip} ${wallR},${wallTop}`,
      fill:"rgba(232,197,71,0.12)",stroke:"var(--text)",strokeWidth:2}),

    // Antena / greda (1.5m)
    e("line",{x1:(wallL+wallR)/2,y1:roofTip,x2:(wallL+wallR)/2,y2:antTop,
      stroke:"#e8c547",strokeWidth:3}),
    // Mjera 1.5m
    e("line",{x1:(wallL+wallR)/2+6,y1:roofTip,x2:(wallL+wallR)/2+6,y2:antTop,stroke:"#e8c547",strokeWidth:1}),
    e("line",{x1:(wallL+wallR)/2+3,y1:roofTip,x2:(wallL+wallR)/2+9,y2:roofTip,stroke:"#e8c547",strokeWidth:1}),
    e("line",{x1:(wallL+wallR)/2+3,y1:antTop,x2:(wallL+wallR)/2+9,y2:antTop,stroke:"#e8c547",strokeWidth:1}),
    e("text",{x:(wallL+wallR)/2+12,y:(roofTip+antTop)/2+5,fill:"#e8c547",fontSize:13,fontWeight:"bold"},"1,5 m"),

    // Visina h (isprekidana vertikala)
    e("line",{x1:(wallL+wallR)/2,y1:gnd,x2:(wallL+wallR)/2,y2:wallTop,
      stroke:"#3dd68c",strokeWidth:1.5,strokeDasharray:"5,3"}),
    // Oznaka h
    e("text",{x:(wallL+wallR)/2-22,y:(gnd+wallTop)/2+5,fill:"#3dd68c",fontSize:18,fontStyle:"italic",fontWeight:"bold"},"h"),

    // Pravac vidljivosti do vrha antene (kut 33°)
    e("line",{x1:obs,y1:gnd,x2:(wallL+wallR)/2,y2:antTop,
      stroke:"#f87171",strokeWidth:2}),
    // Pravac vidljivosti do vrha zida/krova (kut 26°)
    e("line",{x1:obs,y1:gnd,x2:(wallL+wallR)/2,y2:wallTop,
      stroke:"var(--blue)",strokeWidth:2,strokeDasharray:"6,3"}),
    // Horizontalni pravac od promatrača
    e("line",{x1:obs-60,y1:gnd,x2:obs,y2:gnd,stroke:"var(--muted)",strokeWidth:1}),

    // Luk za kut 33°
    e("path",{d:`M ${obs-50},${gnd} A 50,50 0 0,0 ${obs-50*Math.cos(33*Math.PI/180)},${gnd-50*Math.sin(33*Math.PI/180)}`,
      fill:"none",stroke:"#f87171",strokeWidth:1.5}),
    // Luk za kut 26°
    e("path",{d:`M ${obs-38},${gnd} A 38,38 0 0,0 ${obs-38*Math.cos(26*Math.PI/180)},${gnd-38*Math.sin(26*Math.PI/180)}`,
      fill:"none",stroke:"var(--blue)",strokeWidth:1.5}),

    // Oznake kutova — jasne i čitljive
    e("text",{x:obs-62,y:gnd-36,fill:"#f87171",fontSize:14,fontWeight:"bold"},"33°"),
    e("text",{x:obs-50,y:gnd-14,fill:"var(--blue)",fontSize:14,fontWeight:"bold"},"26°"),

    // Promatrač (točka na tlu)
    e("circle",{cx:obs,cy:gnd,r:5,fill:"var(--muted)"}),
    e("text",{x:obs-4,y:gnd+18,fill:"var(--muted)",fontSize:11},"O")
  );
}

function SvgZad10_2014JA(){
  // Graf f(x)=2^x-4 — kao u ispitu: mreza, osi s oznakama 0 i 1, BEZ natpisa funkcije
  // (natpis bi odao tocan odgovor A). Asimptota y=-4, nultocka x=2, f(0)=-3.
  const sc=22;                 // px po jedinici
  const xMin=-6,xMax=5,yMin=-5,yMax=5;
  const cx=32+(-xMin)*sc, cy=20+yMax*sc;   // ishodiste
  const W=cx+xMax*sc+25, H=cy+(-yMin)*sc+18;
  const X=x=>cx+x*sc, Y=y=>cy-y*sc;
  const grid='var(--muted)', ax='var(--text)';
  const els=[];
  for(let i=xMin;i<=xMax;i++) els.push(e("line",{key:"gv"+i,x1:X(i),y1:Y(yMax),x2:X(i),y2:Y(yMin),stroke:grid,strokeOpacity:0.35,strokeWidth:1}));
  for(let i=yMin;i<=yMax;i++) els.push(e("line",{key:"gh"+i,x1:X(xMin),y1:Y(i),x2:X(xMax),y2:Y(i),stroke:grid,strokeOpacity:0.35,strokeWidth:1}));
  // Osi sa strelicama
  els.push(e("line",{key:"ax",x1:X(xMin)-8,y1:cy,x2:X(xMax)+14,y2:cy,stroke:ax,strokeWidth:1.6}));
  els.push(e("line",{key:"ay",x1:cx,y1:Y(yMin)+8,x2:cx,y2:Y(yMax)-14,stroke:ax,strokeWidth:1.6}));
  els.push(e("polygon",{key:"arx",points:`${X(xMax)+20},${cy} ${X(xMax)+12},${cy-4} ${X(xMax)+12},${cy+4}`,fill:ax}));
  els.push(e("polygon",{key:"ary",points:`${cx},${Y(yMax)-20} ${cx-4},${Y(yMax)-12} ${cx+4},${Y(yMax)-12}`,fill:ax}));
  els.push(e("text",{key:"lx",x:X(xMax)+16,y:cy+16,fill:ax,fontSize:13,fontStyle:"italic"},"x"));
  els.push(e("text",{key:"ly",x:cx+6,y:Y(yMax)-16,fill:ax,fontSize:13,fontStyle:"italic"},"y"));
  // Oznake 0 i 1 (kao u ispitu — samo te dvije)
  els.push(e("text",{key:"t0",x:cx-11,y:cy+15,fill:ax,fontSize:12,fontWeight:"bold"},"0"));
  els.push(e("text",{key:"t1x",x:X(1)+3,y:cy+15,fill:ax,fontSize:12,fontWeight:"bold"},"1"));
  els.push(e("text",{key:"t1y",x:cx-13,y:Y(1)+5,fill:ax,fontSize:12,fontWeight:"bold"},"1"));
  // Krivulja y=2^x-4 (klipana na okvir mreze)
  const pts=[];
  for(let xi=xMin;xi<=xMax+0.001;xi+=0.05){
    const yi=Math.pow(2,xi)-4;
    if(yi<yMin||yi>yMax) continue;
    pts.push(`${X(xi).toFixed(1)},${Y(yi).toFixed(1)}`);
  }
  els.push(e("polyline",{key:"crv",points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}));
  return e("svg",{viewBox:`0 0 ${W} ${H}`,style:{width:"100%",maxWidth:W,display:"block",background:"var(--s2)",borderRadius:8}},...els);
}

function SvgQ29_3_2014JA() {
  const W=290, H=160;
  const t='var(--text)';
  // Koordinate preslikane iz originalne skice (str. 20, zadatak 29.3):
  // A = vrh s kutom 108° (gore-lijevo), B = siljasti vrh desno,
  // C = vrh s kutom 122° (dolje), D = lijevi vrh. Skica NIJE u mjerilu.
  const A=[47.6,40];
  const B=[265.4,56.6];
  const C=[104.9,127.8];
  const D=[30,81.8];

  const els=[];
  // Cetverokut (bez ispune — kao u originalu)
  els.push(e('polygon',{key:'q',
    points:[A,B,C,D].map(p=>`${p[0]},${p[1]}`).join(' '),
    fill:'none',stroke:t,strokeWidth:2,strokeLinejoin:'round'}));

  // Kut 108° kod A — luk od AB do AD
  const angAB=Math.atan2(B[1]-A[1],B[0]-A[0]);
  const angAD=Math.atan2(D[1]-A[1],D[0]-A[0]);
  const rA=34;
  els.push(e('path',{key:'arcA',
    d:`M ${(A[0]+rA*Math.cos(angAB)).toFixed(1)},${(A[1]+rA*Math.sin(angAB)).toFixed(1)} A ${rA} ${rA} 0 0 1 ${(A[0]+rA*Math.cos(angAD)).toFixed(1)},${(A[1]+rA*Math.sin(angAD)).toFixed(1)}`,
    fill:'none',stroke:t,strokeWidth:1.4}));
  els.push(e('text',{key:'tA',x:59.9,y:54,fill:t,fontSize:11,fontWeight:'bold',textAnchor:'middle'},'108°'));

  // Kut 122° kod C — luk od CB do CD
  const angCB=Math.atan2(B[1]-C[1],B[0]-C[0]);
  const angCD=Math.atan2(D[1]-C[1],D[0]-C[0]);
  const rC=28;
  els.push(e('path',{key:'arcC',
    d:`M ${(C[0]+rC*Math.cos(angCB)).toFixed(1)},${(C[1]+rC*Math.sin(angCB)).toFixed(1)} A ${rC} ${rC} 0 0 0 ${(C[0]+rC*Math.cos(angCD)).toFixed(1)},${(C[1]+rC*Math.sin(angCD)).toFixed(1)}`,
    fill:'none',stroke:t,strokeWidth:1.4}));
  els.push(e('text',{key:'tC',x:104.9,y:118.5,fill:t,fontSize:11,fontWeight:'bold',textAnchor:'middle'},'122°'));

  // Mjere stranica — na istim mjestima kao u originalu
  els.push(e('text',{key:'mAB',x:133,y:38.6,fill:t,fontSize:11,fontWeight:'bold',textAnchor:'middle'},'146 m'));
  els.push(e('text',{key:'mAD',x:48.4,y:110.6,fill:t,fontSize:11,fontWeight:'bold',textAnchor:'middle'},'57 m'));
  els.push(e('text',{key:'mBC',x:194.9,y:109.5,fill:t,fontSize:11,fontWeight:'bold',textAnchor:'middle'},'123 m'));

  // Oznake vrhova (nema ih u originalu, ali se koriste u postupku rjesavanja)
  const m='var(--muted)';
  els.push(e('text',{key:'lA',x:A[0]-13,y:A[1]-1,fill:m,fontSize:11,fontWeight:'bold'},'A'));
  els.push(e('text',{key:'lB',x:B[0]+5, y:B[1]+3,fill:m,fontSize:11,fontWeight:'bold'},'B'));
  els.push(e('text',{key:'lC',x:C[0]-4, y:C[1]+16,fill:m,fontSize:11,fontWeight:'bold'},'C'));
  els.push(e('text',{key:'lD',x:D[0]-14,y:D[1]+4,fill:m,fontSize:11,fontWeight:'bold'},'D'));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ29_1_2014JA() {
  const W=228, H=178;
  const t='var(--text)';
  const a=62;                      // stranica kvadrata u px

  // Mreza je "lepeza": kvadrat, a sva cetiri sukladna jednakokracna trokuta
  // dijele zajednicki vrh P desno od kvadrata (kao u originalnoj skici).
  // Baza trokuta = a, visina trokuta = a (iscrtkana duzina), krak = a*sqrt(5)/2.
  const qx=32, qy=55;              // gornji lijevi vrh kvadrata
  const Px=qx+2*a, Py=qy+a/2;      // zajednicki vrh lepeze
  const L=a*Math.sqrt(5)/2;        // krak trokuta
  const apex=2*Math.atan(0.5);     // vrsni kut ≈ 53,13°
  const base=Math.atan2(a/2,-a);   // smjer P → donji desni vrh kvadrata
  const V=k=>[Px+L*Math.cos(base+k*apex), Py+L*Math.sin(base+k*apex)];
  // k=0 → donji desni vrh kvadrata, k=1 → gornji desni vrh kvadrata
  const rays=[-1,0,1,2,3].map(V);

  const fillTri='rgba(80,200,120,0.10)', fillSq='rgba(74,144,217,0.10)';
  const els=[];

  // Cetiri trokuta lepeze (crtaj prije kvadrata)
  for(let i=0;i<4;i++){
    const p1=rays[i], p2=rays[i+1];
    els.push(e('polygon',{key:'tri'+i,
      points:`${Px.toFixed(1)},${Py.toFixed(1)} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`,
      fill:fillTri,stroke:t,strokeWidth:1.8,strokeLinejoin:'round'}));
  }

  // Kvadrat (zadnji, da prekrije bridove trokuta)
  els.push(e('rect',{key:'sq',x:qx,y:qy,width:a,height:a,
    fill:fillSq,stroke:t,strokeWidth:2}));

  // Iscrtkana visina trokuta (poloviste desne stranice kvadrata → vrh P)
  els.push(e('line',{key:'apt',
    x1:qx+a,y1:qy+a/2, x2:Px,y2:Py,
    stroke:t,strokeWidth:1,strokeDasharray:'3,3'}));

  // Pravi kutovi: dolje-lijevo i dolje-desno na kvadratu te uz iscrtkanu duzinu
  const s=8;
  const rAng=(key,x,y,dx,dy)=>els.push(e('polyline',{key,
    points:`${x+dx*s},${y} ${x+dx*s},${y+dy*s} ${x},${y+dy*s}`,
    fill:'none',stroke:t,strokeWidth:1.2}));
  rAng('rgBL',qx,qy+a,1,-1);
  rAng('rgBR',qx+a,qy+a,-1,-1);
  rAng('rgMid',qx+a,qy+a/2,1,-1);

  // Labele "a"
  els.push(e('text',{key:'a1',x:qx+a/2,y:qy-7,
    fill:'var(--gold)',fontSize:12,fontStyle:'italic',fontWeight:'bold',textAnchor:'middle'},'a'));
  els.push(e('text',{key:'a2',x:qx-14,y:qy+a/2+4,
    fill:'var(--gold)',fontSize:12,fontStyle:'italic',fontWeight:'bold',textAnchor:'middle'},'a'));
  els.push(e('text',{key:'a3',x:(qx+a+Px)/2,y:Py-7,
    fill:'var(--gold)',fontSize:12,fontStyle:'italic',fontWeight:'bold',textAnchor:'middle'},'a'));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ25_2_2014JA() {
  const W=255, H=180;
  const t='var(--text)';
  const scl=15; // px/cm

  // Iz kosinusovog poučka za kut A:
  // cos(A) = (AB²+AC²-BC²)/(2·AB·AC) = (144+81-25)/(2·12·9) = 200/216
  const cosA=(144+81-25)/(2*12*9);
  const sinA=Math.sqrt(1-cosA*cosA);

  const Ax=22, Ay=155;
  const Bx=Ax+12*scl, By=Ay; // B(202,155)
  const Cx=Math.round(Ax+9*scl*cosA);
  const Cy=Math.round(Ay-9*scl*sinA);
  // D: BD=BC²/AB=25/12; D=B-BD od B prema A
  const BD=25/12;
  const Dx=Math.round(Bx-BD*scl);
  const Dy=Ay;

  const els=[];
  // △ABC
  els.push(e('polygon',{key:'abc',
    points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,
    fill:'rgba(74,144,217,0.07)',stroke:t,strokeWidth:2}));
  // CD dužina
  els.push(e('line',{key:'cd',x1:Cx,y1:Cy,x2:Dx,y2:Dy,stroke:t,strokeWidth:1.8}));

  // Kut ∠BAC — luk kod A (od AB prema AC)
  const angAC=Math.atan2(Cy-Ay,Cx-Ax); // smjer prema C
  const rA=22;
  els.push(e('path',{key:'arcA',
    d:`M ${(Ax+rA).toFixed(1)},${Ay} A ${rA} ${rA} 0 0 0 ${(Ax+rA*Math.cos(angAC)).toFixed(1)},${(Ay+rA*Math.sin(angAC)).toFixed(1)}`,
    fill:'none',stroke:'var(--gold)',strokeWidth:1.5}));

  // Kut ∠BCD — luk kod C (od CB prema CD)
  const angCB=Math.atan2(By-Cy,Bx-Cx);
  const angCD=Math.atan2(Dy-Cy,Dx-Cx);
  const rC=18;
  // Sweepuj od angCB do angCD (smjer suprotno od kazaljke = 0, ili po kazaljci = 1)
  // angCB ≈ 1.2 rad, angCD ≈ 1.5 rad (oba gore-desno)
  els.push(e('path',{key:'arcC',
    d:`M ${(Cx+rC*Math.cos(angCB)).toFixed(1)},${(Cy+rC*Math.sin(angCB)).toFixed(1)} A ${rC} ${rC} 0 0 0 ${(Cx+rC*Math.cos(angCD)).toFixed(1)},${(Cy+rC*Math.sin(angCD)).toFixed(1)}`,
    fill:'none',stroke:'var(--gold)',strokeWidth:1.5}));

  // Mjere stranica
  els.push(e('text',{key:'mAC',x:(Ax+Cx)/2-16,y:(Ay+Cy)/2+2,fill:'var(--gold)',fontSize:11,textAnchor:'middle'},'9 cm'));
  els.push(e('text',{key:'mBC',x:(Bx+Cx)/2+16,y:(By+Cy)/2+2,fill:'var(--gold)',fontSize:11,textAnchor:'middle'},'5 cm'));
  els.push(e('text',{key:'mAB',x:(Ax+Bx)/2,y:Ay+17,fill:'var(--gold)',fontSize:11,textAnchor:'middle'},'12 cm'));

  // Labele vrhova
  els.push(e('text',{key:'lA',x:Ax-13,y:Ay+5,fill:t,fontSize:12,fontStyle:'italic'},'A'));
  els.push(e('text',{key:'lB',x:Bx+4,y:By+5,fill:t,fontSize:12,fontStyle:'italic'},'B'));
  els.push(e('text',{key:'lC',x:Cx-5,y:Cy-8,fill:t,fontSize:12,fontStyle:'italic'},'C'));
  els.push(e('text',{key:'lD',x:Dx-4,y:Dy+15,fill:t,fontSize:12,fontStyle:'italic'},'D'));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ23_2014JA() {
  const W=220, H=200, pad=30;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3, xMax=3, yMin=-2, yMax=6;
  const t='var(--text)', g='rgba(148,163,184,0.2)';
  const toX = x => pad + (x-xMin)/(xMax-xMin)*(W-2*pad);
  const toY = y => H-pad - (y-yMin)/(yMax-yMin)*(H-2*pad);

  const gridX=[], gridY=[], ticks=[];
  for(let x=xMin; x<=xMax; x++) {
    gridX.push(e('line',{key:'gx'+x,x1:toX(x),y1:pad,x2:toX(x),y2:H-pad,stroke:g,strokeWidth:0.8}));
    if(x!==0) ticks.push(e('text',{key:'tx'+x,x:toX(x),y:toY(0)+13,fill:t,fontSize:9,textAnchor:'middle'},x));
  }
  for(let y=yMin; y<=yMax; y++) {
    gridY.push(e('line',{key:'gy'+y,x1:pad,y1:toY(y),x2:W-pad,y2:toY(y),stroke:g,strokeWidth:0.8}));
    if(y!==0) ticks.push(e('text',{key:'ty'+y,x:toX(0)-10,y:toY(y)+3,fill:t,fontSize:9,textAnchor:'middle'},y));
  }

  return e('svg',{viewBox:'0 0 '+W+' '+H,style:{width:'100%',maxWidth:W}},
    ...gridX, ...gridY,
    // Realna os
    e('line',{x1:pad,y1:toY(0),x2:W-pad,y2:toY(0),stroke:_BLUE,strokeWidth:1.3}),
    // Imaginarna os
    e('line',{x1:toX(0),y1:pad,x2:toX(0),y2:H-pad,stroke:_BLUE,strokeWidth:1.3}),
    // Strelice
    e('polygon',{points:(W-pad)+','+(toY(0)-4)+' '+(W-pad+8)+','+toY(0)+' '+(W-pad)+','+(toY(0)+4),fill:t}),
    e('polygon',{points:toX(0)-4+','+pad+' '+toX(0)+','+(pad-8)+' '+(toX(0)+4)+','+pad,fill:t}),
    // Labele osi
    e('text',{x:W-pad+6,y:toY(0)+4,fill:t,fontSize:11},'Re'),
    e('text',{x:toX(0)+4,y:pad-10,fill:t,fontSize:11},'Im'),
    ...ticks
  );
}

function SvgQ21_2014JA() {
  const W=260, H=220, pad=32;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-3, xMax=5, yMin=-3, yMax=6;
  const t='var(--text)', g='rgba(148,163,184,0.2)';
  const toX = x => pad + (x-xMin)/(xMax-xMin)*(W-2*pad);
  const toY = y => H-pad - (y-yMin)/(yMax-yMin)*(H-2*pad);

  const gridX=[], gridY=[], ticksX=[], ticksY=[];
  for(let x=xMin; x<=xMax; x++) {
    gridX.push(e('line',{key:'gx'+x,x1:toX(x),y1:pad,x2:toX(x),y2:H-pad,stroke:g,strokeWidth:0.8}));
    if(x!==0) ticksX.push(e('text',{key:'tx'+x,x:toX(x),y:toY(0)+13,fill:t,fontSize:9,textAnchor:'middle'},x));
  }
  for(let y=yMin; y<=yMax; y++) {
    gridY.push(e('line',{key:'gy'+y,x1:pad,y1:toY(y),x2:W-pad,y2:toY(y),stroke:g,strokeWidth:0.8}));
    if(y!==0) ticksY.push(e('text',{key:'ty'+y,x:toX(0)-10,y:toY(y)+3,fill:t,fontSize:9,textAnchor:'middle'},y));
  }

  return e('svg',{viewBox:'0 0 '+W+' '+H,style:{width:'100%',maxWidth:W}},
    ...gridX, ...gridY,
    e('line',{x1:pad,y1:toY(0),x2:W-pad,y2:toY(0),stroke:_BLUE,strokeWidth:1.3}),
    e('line',{x1:toX(0),y1:pad,x2:toX(0),y2:H-pad,stroke:_BLUE,strokeWidth:1.3}),
    e('polygon',{points:(W-pad)+','+(toY(0)-4)+' '+(W-pad+8)+','+toY(0)+' '+(W-pad)+','+(toY(0)+4),fill:t}),
    e('polygon',{points:toX(0)-4+','+pad+' '+toX(0)+','+(pad-8)+' '+(toX(0)+4)+','+pad,fill:t}),
    e('text',{x:W-pad+10,y:toY(0)+4,fill:t,fontSize:11,fontStyle:'italic'},'x'),
    e('text',{x:toX(0)+5,y:pad-10,fill:t,fontSize:11,fontStyle:'italic'},'y'),
    ...ticksX, ...ticksY
  );
}

function SvgQ14_2014JA() {
  // K₁ r=40, K₂ r=20, K₃ r=10, K₄ r=5 (px)
  // Centri NA pravcu — tangentni izvana: c₂.x = c₁.x+r₁+r₂
  const r=[40,20,10,5];
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const cx=[]; cx[0]=45;
  for(let i=1;i<4;i++) cx[i]=cx[i-1]+r[i-1]+r[i];
  // cx = [45, 105, 135, 150]
  const baseline=85; // y centara
  const W=220, H=baseline+r[0]+8; // H = 133
  const t='var(--text)', g='rgba(148,163,184,0.2)';

  const els=[];
  // Pravac
  els.push(e('line',{key:'ln',x1:0,y1:baseline,x2:W-5,y2:baseline,stroke:_BLUE,strokeWidth:1.3}));
  els.push(e('text',{key:'dots',x:W-4,y:baseline+5,fill:_GOLD,fontSize:14},'...'));

  for(let i=0;i<4;i++){
    // Kružnica
    els.push(e('circle',{key:'c'+i,cx:cx[i],cy:baseline,r:r[i],
      fill:'none',stroke:_BLUE,strokeWidth:i===0?2:1.5}));
    // Label IZNAD kružnice (6px iznad gornjeg ruba) — sigurno izvan kruga
    const labelY=baseline-r[i]-7;
    els.push(e('text',{key:'l'+i,x:cx[i],y:labelY,
      fill:t,fontSize:i===0?12:10,textAnchor:'middle',fontStyle:'italic'},
      'K'+(i+1 < 4 ? ['₁','₂','₃','₄'][i] : '₄')));
  }

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ13_2014JA() {
  const W=255, H=165;
  const t='var(--text)';
  // Razmjer: 10cm→160px → 1cm=16px
  const scl=16;
  // A=dolje-lijevo, D=gore-lijevo, C=gore-desno, B=dolje-desno
  // Krak AD je OKOMIT (vertikalan): A(30,140), D(30,140-4*16)=(30,76)
  // C=D+(6*16,0)=(126,76), B=A+(10*16,0)=(190,140)
  const Ax=30, Ay=140;
  const Dx=30, Dy=Ay-4*scl;   // (30, 76)
  const Cx=Dx+6*scl, Cy=Dy;   // (126, 76)
  const Bx=Ax+10*scl, By=Ay;  // (190, 140)

  // Rez na udaljenosti y od kraće osnovice (vrha) koji dijeli površinu na pola
  // Površina trapeza = (6+10)/2 * 4 = 32 cm²
  // Trapez gornji: (6+d)/2 * t = 16, d = sqrt(6²+(10²-6²)*t/4) = sqrt(36+16t)
  // Integral: integral od 0 do t od (6 + (10-6)*s/4) ds = 6t + 2t²/4 = 6t + t²/2 = 16
  // t² + 12t - 32 = 0 → t = (-12+sqrt(144+128))/2 = (-12+sqrt(272))/2 ≈ (-12+16.49)/2 ≈ 2.246
  const rezT=2.246; // cm od gornje osnovice
  const rezY=Dy+rezT*scl; // y koordinata reza u SVG

  // Desna strana trapeza: od D(30,76) do... wait, desna strana je od C(126,76) do B(190,140)
  // Parametrički: x=Cx+(Bx-Cx)*s, y=Cy+(By-Cy)*s za s=rezT/4
  const rezS=rezT/4;
  const rezRx=Math.round(Cx+(Bx-Cx)*rezS);
  // Lijeva strana je vertikalna (x=Ax=30), pa lijevi kraj reza = 30

  const sq=8; // pravi kut kvadratić
  const els=[];

  // Ispuna trapeza
  els.push(e('polygon',{key:'trap',
    points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy} ${Dx},${Dy}`,
    fill:'rgba(74,144,217,0.07)',stroke:t,strokeWidth:2}));

  // Dashed rez
  els.push(e('line',{key:'rez',x1:Ax,y1:rezY,x2:rezRx,y2:rezY,
    stroke:t,strokeWidth:1.8,strokeDasharray:'5,3'}));

  // Pravi kut A (dolje-lijevo)
  els.push(e('polyline',{key:'sqA',
    points:`${Ax+sq},${Ay} ${Ax+sq},${Ay-sq} ${Ax},${Ay-sq}`,
    fill:'none',stroke:t,strokeWidth:1.3}));

  // Pravi kut D (gore-lijevo)
  els.push(e('polyline',{key:'sqD',
    points:`${Dx+sq},${Dy} ${Dx+sq},${Dy+sq} ${Dx},${Dy+sq}`,
    fill:'none',stroke:t,strokeWidth:1.3}));

  // Mjera 6 cm (gornja osnovica) — iznad
  els.push(e('text',{key:'m6',x:(Dx+Cx)/2,y:Dy-10,
    fill:'var(--gold)',fontSize:12,textAnchor:'middle'},'6 cm'));

  // Mjera 4 cm (visina, lijevo) sa strelicama
  els.push(e('line',{key:'vl',x1:Ax-16,y1:Dy,x2:Ax-16,y2:Ay,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'vlT',x1:Ax-20,y1:Dy,x2:Ax-12,y2:Dy,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'vlB',x1:Ax-20,y1:Ay,x2:Ax-12,y2:Ay,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('text',{key:'m4',x:Ax-28,y:(Dy+Ay)/2+4,fill:'var(--gold)',fontSize:12,textAnchor:'middle'},'4 cm'));

  // Mjera 10 cm (donja osnovica) — ispod
  els.push(e('text',{key:'m10',x:(Ax+Bx)/2,y:Ay+18,
    fill:'var(--gold)',fontSize:12,textAnchor:'middle'},'10 cm'));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ12_2014JA() {
  const W=295, H=200;
  const t='var(--text)';
  // Kuća dimenzije (px)
  const hL=38, hR=128, hTop=98, hBot=168;
  const roofX=83, roofY=63;
  const antY=roofY-18; // vrh antene
  const obsX=250, obsY=hBot; // promatrač

  const els=[];

  // Tlo
  els.push(e('line',{key:'g',x1:0,y1:hBot,x2:W,y2:hBot,stroke:t,strokeWidth:1}));
  // Zidovi
  els.push(e('rect',{key:'w',x:hL,y:hTop,width:hR-hL,height:hBot-hTop,fill:'none',stroke:t,strokeWidth:2}));
  // Krov
  els.push(e('polyline',{key:'r',points:hL+','+hTop+' '+roofX+','+roofY+' '+hR+','+hTop,fill:'none',stroke:t,strokeWidth:2}));
  // Antena
  els.push(e('line',{key:'a',x1:roofX,y1:roofY,x2:roofX,y2:antY,stroke:t,strokeWidth:2.5}));
  els.push(e('line',{key:'at',x1:roofX-5,y1:antY,x2:roofX+5,y2:antY,stroke:t,strokeWidth:2}));
  // Dashed vertikala
  els.push(e('line',{key:'v',x1:roofX,y1:40,x2:roofX,y2:hBot,stroke:t,strokeWidth:0.7,strokeDasharray:'3,3'}));

  // Mjera h (lijevo)
  els.push(e('line',{key:'hv',x1:25,y1:hTop,x2:25,y2:hBot,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'ht',x1:20,y1:hTop,x2:30,y2:hTop,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'hb',x1:20,y1:hBot,x2:30,y2:hBot,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('text',{key:'hl',x:12,y:(hTop+hBot)/2+4,fill:'var(--gold)',fontSize:12,fontStyle:'italic'},'h'));

  // Mjera 1.5 m (antena)
  els.push(e('line',{key:'av',x1:roofX+12,y1:antY,x2:roofX+12,y2:roofY,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'att',x1:roofX+8,y1:antY,x2:roofX+16,y2:antY,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('line',{key:'atb',x1:roofX+8,y1:roofY,x2:roofX+16,y2:roofY,stroke:'var(--gold)',strokeWidth:1}));
  els.push(e('text',{key:'am',x:roofX+18,y:(antY+roofY)/2+4,fill:'var(--gold)',fontSize:10},'1.5 m'));

  // Sight lines
  els.push(e('line',{key:'sl1',x1:obsX,y1:obsY,x2:roofX,y2:roofY,stroke:t,strokeWidth:1.2}));
  els.push(e('line',{key:'sl2',x1:obsX,y1:obsY,x2:roofX,y2:antY,stroke:t,strokeWidth:1.2}));
  // Horizontalna referentna crta kod promatrača
  els.push(e('line',{key:'hor',x1:obsX-100,y1:obsY,x2:obsX,y2:obsY,stroke:t,strokeWidth:1}));

  // Kutovi: smjerovi od promatrača
  const angRoof=Math.atan2(roofY-obsY, roofX-obsX); // ≈ -148° = -2.58 rad
  const angAnt =Math.atan2(antY -obsY, roofX-obsX); // ≈ -152° = -2.65 rad

  // Luk za 26° (od horizontale-lijevo do sight-roof)
  // Start = -π (horizontala lijevo), End = angRoof
  const r26=48;
  const arc26start = { x: obsX + r26*Math.cos(Math.PI), y: obsY + r26*Math.sin(Math.PI) }; // lijevo
  const arc26end   = { x: obsX + r26*Math.cos(angRoof), y: obsY + r26*Math.sin(angRoof) };
  els.push(e('path',{key:'a26',
    d:`M ${arc26start.x.toFixed(1)},${arc26start.y.toFixed(1)} A ${r26} ${r26} 0 0 1 ${arc26end.x.toFixed(1)},${arc26end.y.toFixed(1)}`,
    fill:'none',stroke:t,strokeWidth:1.3}));

  // Luk za 33° (od sight-roof do sight-ant) — mali luk između dviju sight linija
  const r33=68;
  const arc33start = { x: obsX + r33*Math.cos(angRoof), y: obsY + r33*Math.sin(angRoof) };
  const arc33end   = { x: obsX + r33*Math.cos(angAnt),  y: obsY + r33*Math.sin(angAnt)  };
  els.push(e('path',{key:'a33',
    d:`M ${arc33start.x.toFixed(1)},${arc33start.y.toFixed(1)} A ${r33} ${r33} 0 0 1 ${arc33end.x.toFixed(1)},${arc33end.y.toFixed(1)}`,
    fill:'none',stroke:t,strokeWidth:1.3}));

  // Labele kutova — ISPRAVNO: sredina između dvaju rubnih kutova
  // 26° = između -π i angRoof → bisector = (-π + angRoof) / 2
  const bis26 = (-Math.PI + angRoof) / 2; // ≈ -164° → smjer gore-lijevo od promatrača
  const r26lbl = 38; // unutar luka
  els.push(e('text',{key:'t26',
    x:(obsX + r26lbl*Math.cos(bis26) - 10).toFixed(0),
    y:(obsY + r26lbl*Math.sin(bis26) + 4).toFixed(0),
    fill:t,fontSize:11},'26°'));

  // 33° = između angRoof i angAnt → bisector = (angRoof + angAnt) / 2
  const bis33 = (angRoof + angAnt) / 2;
  const r33lbl = 52;
  els.push(e('text',{key:'t33',
    x:(obsX + r33lbl*Math.cos(bis33) - 10).toFixed(0),
    y:(obsY + r33lbl*Math.sin(bis33) + 4).toFixed(0),
    fill:t,fontSize:11},'33°'));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgQ10_2014JA() {
  const W=240, H=210, pad=38;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const t='var(--text)', g='rgba(148,163,184,0.18)';
  // Grid: x od -4 do 3 (7 stupaca), y od -5 do 4 (9 redova)  
  const xMin=-4, xMax=3, yMin=-5, yMax=4;
  const toX=x=>pad+(x-xMin)/(xMax-xMin)*(W-2*pad);
  const toY=y=>(H-pad)-(y-yMin)/(yMax-yMin)*(H-2*pad);

  const els=[];
  // Grid
  for(let x=xMin;x<=xMax;x++)
    els.push(e('line',{key:'gx'+x,x1:toX(x),y1:pad,x2:toX(x),y2:H-pad,stroke:g,strokeWidth:0.8}));
  for(let y=yMin;y<=yMax;y++)
    els.push(e('line',{key:'gy'+y,x1:pad,y1:toY(y),x2:W-pad,y2:toY(y),stroke:g,strokeWidth:0.8}));

  // Osi
  els.push(e('line',{key:'ax',x1:pad-4,y1:toY(0),x2:W-pad+8,y2:toY(0),stroke:_BLUE,strokeWidth:1.3}));
  els.push(e('line',{key:'ay',x1:toX(0),y1:H-pad+4,x2:toX(0),y2:pad-8,stroke:_BLUE,strokeWidth:1.3}));
  // Strelice
  els.push(e('polygon',{key:'arx',points:(W-pad+8)+','+(toY(0)-4)+' '+(W-pad+14)+','+toY(0)+' '+(W-pad+8)+','+(toY(0)+4),fill:t}));
  els.push(e('polygon',{key:'ary',points:toX(0)-4+','+(pad-8)+' '+toX(0)+','+(pad-14)+' '+(toX(0)+4)+','+(pad-8),fill:t}));
  // Labele osi
  els.push(e('text',{key:'xl',x:W-pad+15,y:toY(0)+4,fill:t,fontSize:12,fontStyle:'italic'},'x'));
  els.push(e('text',{key:'yl',x:toX(0)+4,y:pad-14,fill:t,fontSize:12,fontStyle:'italic'},'y'));
  // Tick labele: "0", "1" na osima
  els.push(e('text',{key:'t0',x:toX(0)-10,y:toY(0)+13,fill:t,fontSize:10,textAnchor:'middle'},'0'));
  els.push(e('text',{key:'t1x',x:toX(1),y:toY(0)+13,fill:t,fontSize:10,textAnchor:'middle'},'1'));
  els.push(e('text',{key:'t1y',x:toX(0)-10,y:toY(1)+4,fill:t,fontSize:10,textAnchor:'middle'},'1'));

  // Krivulja (rastuća eksponencijalna, asimptota pri y=-4)
  const pts=[];
  for(let xi=-4;xi<=2.8;xi+=0.05){
    const yi=Math.pow(2,xi)-4;
    if(yi<yMin-0.1||yi>yMax+0.1) continue;
    pts.push(`${toX(xi).toFixed(1)},${toY(yi).toFixed(1)}`);
  }
  els.push(e('polyline',{key:'curve',points:pts.join(' '),fill:'none',stroke:_BLUE,strokeWidth:2.2}));

  return e('svg',{viewBox:`0 0 ${W} ${H}`,style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgSol30_2014JA() {
  const W=280, H=280, cell=20, ox=140, oy=140;
  const t='var(--text)';
  // Pretvori math coord → SVG
  const sx = x => ox + x*cell;
  const sy = y => oy - y*cell;

  // Točke za f(x) = log10(x+5), x > -5
  const fPts = [];
  for(let xi=-4.95; xi<=6.5; xi+=0.05){
    const yi = Math.log10(xi+5);
    if(yi < -6.5 || yi > 6.5) continue;
    fPts.push([sx(xi), sy(yi)]);
  }
  const fPath = fPts.map((p,i)=>(i===0?`M${p[0].toFixed(1)},${p[1].toFixed(1)}`:`L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  // Točke za g(x) = -(1/3)x^3 - 3x^2 - 5x
  const gPts = [];
  for(let xi=-6.5; xi<=2.5; xi+=0.05){
    const yi = -(1/3)*xi**3 - 3*xi**2 - 5*xi;
    if(yi < -6.5 || yi > 6.5) continue;
    gPts.push([sx(xi), sy(yi)]);
  }
  const gPath = gPts.map((p,i)=>(i===0?`M${p[0].toFixed(1)},${p[1].toFixed(1)}`:`L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  // 3 sjecišta (aprox.)
  const ints = [[-4.95, -1.3], [-2.07, 0.467], [-0.15, 0.682]];

  const grid_lines = [];
  for(let i=0; i<=14; i++){
    grid_lines.push(e('line',{key:'v'+i,x1:i*cell,y1:0,x2:i*cell,y2:H,
      stroke:'rgba(148,163,184,0.25)',strokeWidth:0.5}));
    grid_lines.push(e('line',{key:'h'+i,x1:0,y1:i*cell,x2:W,y2:i*cell,
      stroke:'rgba(148,163,184,0.25)',strokeWidth:0.5}));
  }
  const labels = [
    ['x', ox+148, oy+5],['y', ox+6, 10],['0', ox-12, oy+14],
    ['1', ox+cell-3, oy+14],['1', ox-14, oy-cell+5],
    ['f', sx(1)+4, sy(0.845)-4],
    ['g', sx(-0.5)+4, sy(1.35)-4],
  ];

  return e('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',
    style:{maxWidth:W,display:'block',margin:'0 auto'}},
    ...grid_lines,
    e('line',{x1:4,y1:oy,x2:W-4,y2:oy,stroke:t,strokeWidth:1.2}),
    e('polygon',{points:`${W-2},${oy} ${W-8},${oy-4} ${W-8},${oy+4}`,fill:t}),
    e('line',{x1:ox,y1:H-4,x2:ox,y2:4,stroke:t,strokeWidth:1.2}),
    e('polygon',{points:`${ox},2 ${ox-4},10 ${ox+4},10`,fill:t}),
    e('line',{x1:ox+cell,y1:oy-3,x2:ox+cell,y2:oy+3,stroke:t,strokeWidth:1}),
    e('line',{x1:ox-3,y1:oy-cell,x2:ox+3,y2:oy-cell,stroke:t,strokeWidth:1}),
    // Grafovi
    e('path',{d:fPath,fill:'none',stroke:'var(--blue)',strokeWidth:2}),
    e('path',{d:gPath,fill:'none',stroke:'var(--gold)',strokeWidth:2}),
    // Sjecišta
    ...ints.map(([xi,yi],idx)=>
      e('circle',{key:'i'+idx,cx:sx(xi),cy:sy(yi),r:4,
        fill:'var(--red)',stroke:'white',strokeWidth:1.5})
    ),
    ...labels.map(([l,x,y])=>e('text',{key:l,x,y,fontSize:11,fill:t,fontFamily:'serif'},l))
  );
}

function SvgTbl24_2014JA() {
  const W=290, H=145;
  const t='var(--text)', bg='var(--s2,#1e293b)';
  const headers = ['n (ruža)', 'Kompleta', 'Ruže (kn)', 'Kompleti (kn)', 'Ukupno (kn)'];
  const rows = [
    ['11', '3', '132', '45', '205'],
    ['15', '5', '180', '75', '283'],
  ];
  const colW = [48, 50, 54, 60, 58];
  const rowH = 30;
  const x0 = 5, y0 = 5;
  const headerH = 32;

  // Compute cumulative x positions
  const colX = [x0];
  colW.forEach((w,i)=>{ colX.push(colX[i]+w); });
  const totalW = colX[colX.length-1];
  const totalH = headerH + rows.length*rowH + y0*2;

  const els=[];

  // Background rect
  els.push(e('rect',{key:'bg',x:x0,y:y0,width:totalW,height:totalH-y0,
    rx:6,fill:'rgba(74,144,217,0.06)',stroke:'rgba(74,144,217,0.3)',strokeWidth:1}));

  // Header background
  els.push(e('rect',{key:'hbg',x:x0,y:y0,width:totalW,height:headerH,
    rx:6,fill:'rgba(74,144,217,0.2)',stroke:'none'}));

  // Header text
  headers.forEach((h,i)=>{
    const cx = (colX[i]+colX[i+1])/2;
    els.push(e('text',{key:'h'+i,
      x:cx,y:y0+headerH/2+4,
      fill:t,fontSize:9.5,textAnchor:'middle',fontWeight:'600'},h));
  });

  // Grid lines (vertical)
  colX.slice(1,-1).forEach((x,i)=>{
    els.push(e('line',{key:'vl'+i,x1:x,y1:y0,x2:x,y2:y0+totalH-y0,stroke:'rgba(148,163,184,0.3)',strokeWidth:0.8}));
  });

  // Rows
  rows.forEach((row, ri)=>{
    const ry = y0 + headerH + ri*rowH;
    // Row background (alternating)
    if(ri===0) els.push(e('rect',{key:'rbg'+ri,x:x0,y:ry,width:totalW,height:rowH,
      fill:'rgba(74,144,217,0.04)',stroke:'none'}));
    // Horizontal line
    els.push(e('line',{key:'hl'+ri,x1:x0,y1:ry,x2:x0+totalW,y2:ry,stroke:'rgba(148,163,184,0.25)',strokeWidth:0.7}));
    // Cell text
    row.forEach((val,ci)=>{
      const cx = (colX[ci]+colX[ci+1])/2;
      const isTotal = ci===4;
      els.push(e('text',{key:'r'+ri+'c'+ci,
        x:cx,y:ry+rowH/2+4,
        fill:isTotal?'var(--green)':t,
        fontSize:11,textAnchor:'middle',fontWeight:isTotal?'700':'400'},val));
    });
  });

  // Bottom border
  const finalY = y0 + headerH + rows.length*rowH;
  els.push(e('line',{key:'bl',x1:x0,y1:finalY,x2:x0+totalW,y2:finalY,stroke:'rgba(148,163,184,0.3)',strokeWidth:0.8}));
  // Outer border
  els.push(e('rect',{key:'obr',x:x0,y:y0,width:totalW,height:totalH-y0,
    rx:6,fill:'none',stroke:'rgba(148,163,184,0.3)',strokeWidth:1}));

  return e('svg',{viewBox:'0 0 '+W+' '+(totalH+4),style:{width:'100%',maxWidth:W}}, ...els);
}

function SvgSol23_1_2014JA() {
  const W=220, H=195, pad=30;
  const xMin=-3, xMax=3, yMin=-1, yMax=6;
  const t='var(--text)', g='rgba(148,163,184,0.2)';
  const toX=x=>pad+(x-xMin)/(xMax-xMin)*(W-2*pad);
  const toY=y=>(H-pad)-(y-yMin)/(yMax-yMin)*(H-2*pad);

  const els=[];

  // Grid
  for(let x=xMin;x<=xMax;x++)
    els.push(e('line',{key:'gx'+x,x1:toX(x),y1:pad,x2:toX(x),y2:H-pad,stroke:g,strokeWidth:0.8}));
  for(let y=yMin;y<=yMax;y++)
    els.push(e('line',{key:'gy'+y,x1:pad,y1:toY(y),x2:W-pad,y2:toY(y),stroke:g,strokeWidth:0.8}));

  // Osi
  els.push(e('line',{key:'ax',x1:pad,y1:toY(0),x2:W-pad,y2:toY(0),stroke:t,strokeWidth:1.3}));
  els.push(e('line',{key:'ay',x1:toX(0),y1:pad,x2:toX(0),y2:H-pad,stroke:t,strokeWidth:1.3}));
  els.push(e('polygon',{key:'arx',points:(W-pad)+','+(toY(0)-4)+' '+(W-pad+8)+','+toY(0)+' '+(W-pad)+','+(toY(0)+4),fill:t}));
  els.push(e('polygon',{key:'ary',points:toX(0)-4+','+pad+' '+toX(0)+','+(pad-8)+' '+(toX(0)+4)+','+pad,fill:t}));
  els.push(e('text',{key:'re',x:W-pad+4,y:toY(0)+4,fill:t,fontSize:10},'Re'));
  els.push(e('text',{key:'im',x:toX(0)+4,y:pad-10,fill:t,fontSize:10},'Im'));

  // Tick labels — OBVEZNO String(x), ne samo x (inače crash u DOM modu)
  for(let x=xMin;x<=xMax;x++)
    if(x!==0) els.push(e('text',{key:'tx'+x,x:toX(x),y:toY(0)+14,fill:t,fontSize:9,textAnchor:'middle'},String(x)));
  for(let y=yMin;y<=yMax;y++)
    if(y!==0) els.push(e('text',{key:'ty'+y,x:toX(0)-10,y:toY(y)+3,fill:t,fontSize:9,textAnchor:'middle'},String(y)));

  // z = 4i → točka (0, 4)
  const px=toX(0), py=toY(4);

  // Dashed linija od O do točke
  els.push(e('line',{key:'dl',x1:px,y1:toY(0),x2:px,y2:py,stroke:'var(--red)',strokeWidth:1.2,strokeDasharray:'4,3'}));
  // Projekcija — kratka vodoravna crtica
  els.push(e('line',{key:'proj',x1:px-6,y1:py,x2:px+6,y2:py,stroke:'var(--gold)',strokeWidth:1.4}));
  // Točka
  els.push(e('circle',{key:'pt',cx:px,cy:py,r:5,fill:'var(--red)',stroke:'none'}));
  // Label
  els.push(e('text',{key:'lbl',x:px+8,y:py-2,fill:'var(--red)',fontSize:11,fontStyle:'italic'},'z = 4i'));

  return e('svg',{viewBox:'0 0 '+W+' '+H,style:{width:'100%',maxWidth:W}}, ...els);
}

export const qs = [
  {id:1,type:"mc",warn:"Pazi: prirodni brojevi su 1, 2, 3… (cijeli pozitivni, bez razlomaka i korijena koji nisu cijeli).",topic:"br",points:1,
  q:"Koji je od navedenih brojeva prirodni?",
  opts:["7½","9⅓","∛27","√125"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"A: 7½ = √7 ≈ 2,646 — iracionalan, nije prirodan ✗",note:"Strategija: testirati svaku opciju — je li broj element ℕ = {1, 2, 3, ...}?"},
    {txt:"B: 9⅓ = ∛9 ≈ 2,080 — iracionalan, nije prirodan ✗",note:"A: 7½ = 7^(¹⁄²) = √7 ≈ 2,646 — iracionalan, nije u ℕ ✗"},
    {txt:"C: ∛27 = 3 — cijeli pozitivni broj ✓",note:"B: 9⅓ = 9^(¹⁄³) = ∛9 ≈ 2,080 — iracionalan, nije u ℕ ✗"},
    {txt:"D: √125 = 5√5 ≈ 11,180 — iracionalan, nije prirodan ✗",note:"C: ∛27 = 3 — cijeli pozitivni broj, dakle prirodan ✓",final:true},{txt:"Intuicija: 7½ je razlomak (nije cijeli), 9⅓ razlomak, √125 = 5√5 je iracionalan; ∛27 = 3 ∈ ℕ ✓",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ℕ = {1, 2, 3, ...} — samo pozitivni cijeli brojevi. Nula, negativni i iracionalni NISU prirodni.",note:"postupak",final:true},{txt:"Prirodni brojevi su 1, 2, 3, … — samo cijeli pozitivni.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Česta greška: Brkanje ℕ i ℤ — cijeli ℤ uključuju 0 i negatives, ali nisu prirodni.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: ℕ = {1, 2, 3, ...} — samo pozitivni cijeli brojevi. Nula, negativni i iracionalni NISU prirodni.",
    "Intuicija: 7½ je razlomak (nije cijeli), 9⅓ razlomak, √125 = 5√5 je iracionalan; ∛27 = 3 ∈ ℕ ✓",
    "Česta greška: Brkanje ℕ i ℤ — cijeli ℤ uključuju 0 i negatives, ali nisu prirodni.",
    "Prirodni brojevi su 1, 2, 3, … — samo cijeli pozitivni.",
    "Korijen prirodnog broja je prirodan samo ako je radikand savršena potencija."
  ,"Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno)."]
},
  {id:2,type:"mc",warn:"Pazi: |x| < 5/2 = 2,5 → x ∈ {−2, −1, 0, 1, 2}; broji ih.",topic:"br",points:1,
  q:"Koliko cijelih brojeva ima apsolutnu vrijednost manju od 5/2?",
  opts:["dva","tri","četiri","pet"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  steps:[
    {txt:"5/2 = 2,5",note:"5/2 = 2,5 — granica apsolutne vrijednosti"},
    {txt:"|x| < 2,5 ⇔ -2,5 < x < 2,5",note:"|x| < 2,5 ⟺ −2,5 < x < 2,5 — interval oko nule, granice isključene"},
    {txt:"Cijeli brojevi u tom intervalu: -2, -1, 0, 1, 2",note:"Cijeli u ⟩−2,5; 2,5⟨: −2, −1, 0, 1, 2 — pažljivo ne uključiti ±2,5"},
    {txt:"Ukupno 5 cijelih brojeva.",note:"Ukupno: 5 cijelih (−2, −1, 0, 1, 2) → D",final:true},{txt:"Intuicija: Cijeli u ⟨−2,5; 2,5⟩ su: −2, −1, 0, 1, 2 → ukupno 5 cijelih.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: |x| < k ⟺ −k < x < k. Za k = 5/2 = 2,5 tražimo: −2,5 < x < 2,5.",note:"postupak",final:true},{txt:"|x| < k (k > 0) ⇔ −k < x < k.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Česta greška: Zaboraviti nulu ili smatrati da je |x| < 2,5 isto kao |x| ≤ 2 → tada bi bila samo 4.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: |x| < k ⟺ −k < x < k. Za k = 5/2 = 2,5 tražimo: −2,5 < x < 2,5.",
    "Intuicija: Cijeli u ⟨−2,5; 2,5⟩ su: −2, −1, 0, 1, 2 → ukupno 5 cijelih.",
    "Česta greška: Zaboraviti nulu ili smatrati da je |x| < 2,5 isto kao |x| ≤ 2 → tada bi bila samo 4.",
    "|x| < k (k > 0) ⇔ −k < x < k.",
    "Brojanje uključuje negativne, nulu i pozitivne.",
    "Provjera ✓: Cijeli u ⟨−2,5; 2,5⟩: {−2,−1,0,1,2} → 5 cijelih ✓"
  ]
},
  {id:3,type:"mc",warn:"Pazi: svedi sve na litre: 0,6 m³ = 600 L, 20000 cm³ = 20 L; pa zbroji.",topic:"stat",points:1,
  q:"U trima posudama nalazi se voda. U prvoj posudi je 50 L, u drugoj 0,6 m³, a u trećoj 20 000 cm³. Koliki je ukupan volumen vode u svim trima posudama? (Napomena: 1 L = 1 dm³)",
  opts:["70,6 L","670 L","2 056 L","50 060,2 L"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Pretvorimo sve na litre. 1 m³ = 1 000 L; 1 cm³ = 0,001 L.",note:"Strategija: sve pretvoriti u litre (1 L = 1 dm³ = 1000 cm³ = 0,001 m³)"},
    {txt:"0,6 m³ = 600 L",note:"50 L + 0,6 m³ + 20000 cm³: pretvaranje: 0,6 m³ = 600 L; 20000 cm³ = 20 L"},
    {txt:"20 000 cm³ = 20 L",note:"Zbroj: 50 + 600 + 20 = 670 L → B"},
    {txt:"Ukupno: 50 + 600 + 20 = 670 L",note:"Provjera: 50+600=650, 650+20=670 L ✓",final:true},{txt:"Intuicija: 50 L + 0,6 m³ + 0,2 dL = 50 + 600 + 0,02 L = 650,02 L → tražimo najbliži distractor.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: 1 m³ = 1000 L; 1 cm³ = 0,001 L; 1 dL = 0,1 L.",note:"postupak",final:true},{txt:"Pretvorba volumena: 1 m³ = 1 000 L; 1 L = 1 000 cm³.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: Zaboraviti konverziju dL → L (množi s 0,1 ne s 10).",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: 1 m³ = 1000 L; 1 cm³ = 0,001 L; 1 dL = 0,1 L.",
    "Intuicija: 50 L + 0,6 m³ + 0,2 dL = 50 + 600 + 0,02 L = 650,02 L → tražimo najbliži distractor.",
    "Česta greška: Zaboraviti konverziju dL → L (množi s 0,1 ne s 10).",
    "Pretvorba volumena: 1 m³ = 1 000 L; 1 L = 1 000 cm³.",
    "Provjera ✓: 50 + 600 + 0,02 = 650,02 L (distractor C=2056 L pogrešan, jer 20 000 cm³=20 L, ne 2006 L) ✓"
  ,"Provjera: zbroj svih relativnih frekvencija = 1 (ili 100%)."]
},
  {id:4,type:"mc",warn:"Pazi: dijelovi 4k i 3k → 7k = 30,66; razlika = 4k − 3k = k.",topic:"br",points:1,
  q:"Zbroj dvaju brojeva iznosi 30,66, a njihov je omjer 4 : 3. Koliko se dobije ako se od većega broja oduzme manji?",
  opts:["4,38","5,11","7,665","9,198"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: uvesti parametar x za omjer — veći broj = 4x, manji = 3x.",note:"Omjer 4:3 znači da možemo pisati a=4x, b=3x za neki x>0."},
    {txt:"Uvjet zbroja: 4x + 3x = 7x = 30,66 → x = 30,66/7 = 4,38",note:"Podijelimo zbroj s ukupnim omjerom (4+3=7) da dobijemo x."},
    {txt:"Veći broj: 4x = 4·4,38 = 17,52. Manji broj: 3x = 3·4,38 = 13,14",note:"Sada je svaki broj eksplicitno određen."},
    {txt:"Razlika: 17,52 − 13,14 = 4,38 = x (razlika = parametar x!)",note:"Elegant opservacija: razlika = (4−3)·x = 1·x = x = 4,38.",final:true},{txt:"Intuicija: Lijep rezultat: razlika = x = zbroj/(suma omjera) = 30,66/7 = 4,38. Razlika uvijek = zbroj podijeljen sa sumom omjera kad su razlike omjera 1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Metoda parametra: za omjer a:b=4:3 pišemo a=4x, b=3x. Zbroj: (4+3)x=7x=30,66 → x=4,38. Razlika: (4−3)x=x=4,38.",note:"postupak",final:true},{txt:"Česta greška #2: tražiti zbroj umjesto razlike. Pažljivo čitati pitanje: 'koliko se dobije ako se od većega oduzme manji' = razlika.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Česta greška #1: pisati a=4, b=3 direktno i dobiti zbroj=7≠30,66. Moramo skalirati: a=4x, b=3x.",note:"diagnostika",final:true}
  ],
  why:[
    "Metoda parametra: za omjer a:b=4:3 pišemo a=4x, b=3x. Zbroj: (4+3)x=7x=30,66 → x=4,38. Razlika: (4−3)x=x=4,38.",
    "Lijep rezultat: razlika = x = zbroj/(suma omjera) = 30,66/7 = 4,38. Razlika uvijek = zbroj podijeljen sa sumom omjera kad su razlike omjera 1.",
    "Česta greška #1: pisati a=4, b=3 direktno i dobiti zbroj=7≠30,66. Moramo skalirati: a=4x, b=3x.",
    "Česta greška #2: tražiti zbroj umjesto razlike. Pažljivo čitati pitanje: 'koliko se dobije ako se od većega oduzme manji' = razlika.",
    "Analiza distraktora: B=5,11=(30,66/6), C=7,665=(30,66/4), D=9,198=(30,66/3,33). Sve nastaju pogrešnim tumačenjem omjera.",
    "Provjera ✓: 17,52+13,14=30,66 ✓; 17,52/13,14=4/3 ✓; 17,52−13,14=4,38 ✓"
  ]
},
  {id:5,type:"mc",warn:"Pazi: pomnoži s x → 2x² + 11x − 21 = 0; Viète zbroj = −11/2.",topic:"al",points:1,
  q:"Koliki je zbroj rješenja jednadžbe 2x + 11 = 21/x?",
  opts:["-10,5","-5,5","5,5","10,5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"Strategija: koristiti Vièteov poučak — zbroj rješenja kvadratne a x²+bx+c=0 je −b/a.",note:"Množimo s x (x≠0) da dobijemo kvadratnu jednadžbu, ali zbrajamo samo korijene."},
    {txt:"Uvjet: x ≠ 0 (dijelimo s x). Množimo s x: 2x² + 11x = 21",note:"Lijeva strana pomnožena s x: 2x·x+11·x=2x²+11x. Desna: 21/x·x=21."},
    {txt:"Standardni oblik: 2x² + 11x − 21 = 0. Koeficijenti: a=2, b=11, c=−21",note:"Prenosimo 21 na lijevu stranu."},
    {txt:"Vièteov poučak: x₁+x₂ = −b/a = −11/2 = −5,5 → B",note:"Ne trebamo nalaziti svaki korijen zasebno — zbroj je direktno −b/a.",final:true},{txt:"Intuicija: Provjera da su rješenja realna: D = b²−4ac = 121+168 = 289 > 0 ✓. Rješenja: x = (−11±17)/4 → x₁=6/4=3/2 i x₂=−28/4=−7. Zbroj: 3/2+(−7)=−11/2=−5,5 ✓.",note:"intuicija",final:true},{txt:"Sažetak postupka: Vièteov poučak za kvadratnu ax²+bx+c=0: x₁+x₂=−b/a; x₁·x₂=c/a. Ovdje: a=2, b=11 → zbroj = −11/2 = −5,5.",note:"postupak",final:true},{txt:"Česta greška #2: zaboraviti uvjet x≠0. Provjeravamo: x=3/2 ≠ 0 ✓; x=−7 ≠ 0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška #1: 2x+11=21/x → zbroj = (21−11)/2 = 5 (C). Pogrešno svodenje — ne možemo samo 'prebaciti'.",note:"diagnostika",final:true}
  ],
  why:[
    "Vièteov poučak za kvadratnu ax²+bx+c=0: x₁+x₂=−b/a; x₁·x₂=c/a. Ovdje: a=2, b=11 → zbroj = −11/2 = −5,5.",
    "Provjera da su rješenja realna: D = b²−4ac = 121+168 = 289 > 0 ✓. Rješenja: x = (−11±17)/4 → x₁=6/4=3/2 i x₂=−28/4=−7. Zbroj: 3/2+(−7)=−11/2=−5,5 ✓.",
    "Česta greška #1: 2x+11=21/x → zbroj = (21−11)/2 = 5 (C). Pogrešno svodenje — ne možemo samo 'prebaciti'.",
    "Česta greška #2: zaboraviti uvjet x≠0. Provjeravamo: x=3/2 ≠ 0 ✓; x=−7 ≠ 0 ✓.",
    "Analiza distraktora: A=−10,5 je umnožak x₁·x₂=c/a=−21/2=−10,5 (Vièteov produkt, ne zbroj!); C=+5,5 (pogrešan predznak); D=+10,5 (umnožak s pogrešnim predznakom).",
    "Provjera ✓: 2·(3/2)+11=3+11=14; 21/(3/2)=14 ✓. 2·(−7)+11=−3; 21/(−7)=−3 ✓"
  ]
},
  {id:6,type:"mc",warn:"Pazi: kvadratna nema realnih rješenja ⇔ diskriminanta < 0; provjeri za svaku.",topic:"al",points:1,
  q:"Koja od navedenih jednadžbi nema realnih rješenja?",
  opts:["(x − 3)/x = 0","√(x − 3) = 0","sin x = -2","tg x = -2"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  steps:[
    {txt:"Strategija: analizirati domenu/sliku svake jednadžbe — ima li x ∈ ℝ koji zadovoljava?",note:"Tražimo jednadžbu bez rješenja, tj. gdje je desna strana izvan slike funkcije."},
    {txt:"A: (x−3)/x = 0 → brojnik=0 → x=3 (uz x≠0). x=3≠0 ✓ → rješenje postoji ✗",note:"Racionalna jednadžba = 0: brojnik=0 uz uvjet nazivnik≠0."},
    {txt:"B: √(x−3) = 0 → x−3=0 → x=3 ≥ 0 ✓ → rješenje postoji ✗",note:"Kvadratni korijen = 0 samo kada je argument = 0."},
    {txt:"C: sin x = −2. Slika sin je [−1, 1]. −2 ∉ [−1, 1] → NEMA rješenja ✓",note:"sin x ∈ [−1, 1] za sve x ∈ ℝ — to je ključno svojstvo sinusa."},
    {txt:"D: tg x = −2. Slika tg je (−∞, +∞⟩ = ℝ → −2 ∈ ℝ → rješenje postoji ✗. Odgovor: C",note:"Tangens je neograničen — svaki realni broj je u slici tangensa.",final:true},{txt:"Intuicija: Analiza A: (x−3)/x=0 → numerator=0, denominator≠0 → x=3, uz provjeru 3≠0 ✓. Jednadžba ima rješenje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Ključna spoznaja: funkcija f(x)=k ima rješenja ⟺ k je u slici f. Slika sin: [−1,1]; slika cos: [−1,1]; slika tg: ℝ; slika ctg: ℝ. Prema tome: sin x=−2 nema rješenja jer −2 ∉ [−1,1].",note:"postupak",final:true},{txt:"Analiza D: tg x=−2. Jer je tg∶(−π/2+kπ, π/2+kπ)→ℝ surjekcija, za svaki k∈ℝ postoji x s tg x=k. Dakle x=arctg(−2)+kπ su rješenja.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Analiza B: √(x−3)=0 → x−3=0 → x=3. Provjera: x=3 ≥ 3 ✓. Jednadžba ima rješenje.",note:"diagnostika",final:true}
  ],
  why:[
    "Ključna spoznaja: funkcija f(x)=k ima rješenja ⟺ k je u slici f. Slika sin: [−1,1]; slika cos: [−1,1]; slika tg: ℝ; slika ctg: ℝ. Prema tome: sin x=−2 nema rješenja jer −2 ∉ [−1,1].",
    "Analiza A: (x−3)/x=0 → numerator=0, denominator≠0 → x=3, uz provjeru 3≠0 ✓. Jednadžba ima rješenje.",
    "Analiza B: √(x−3)=0 → x−3=0 → x=3. Provjera: x=3 ≥ 3 ✓. Jednadžba ima rješenje.",
    "Analiza D: tg x=−2. Jer je tg∶(−π/2+kπ, π/2+kπ)→ℝ surjekcija, za svaki k∈ℝ postoji x s tg x=k. Dakle x=arctg(−2)+kπ su rješenja.",
    "Česta greška: misliti da i C i D nemaju rješenja (i tg x=−2 i sin x=−2). Ali tg je NEOGRANIČEN — sve realne vrijednosti su dostupne.",
    "Provjera ✓: za C: |sin x| ≤ 1 za svaki x ∈ ℝ → sin x = −2 je nemoguće ✓"
  ]
},
  {id:7,type:"mc",warn:"Pazi: kolinearan = skalarni višekratnik (komponente u istom omjeru 2 : 4 = 1 : 2).",topic:"al",points:1,
  q:"Koji je od navedenih vektora kolinearan (usporedan) s vektorom 2i⃗ + 4j⃗? (Izrazite kao linearna kombinacija.)",
  opts:["i⃗ + 2j⃗","2i⃗ − 4j⃗","3i⃗ + j⃗","4i⃗ − 3j⃗"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: dva vektora (a₁,a₂) i (b₁,b₂) su kolinearni ⟺ a₁b₂ = a₂b₁ (omjeri komponenti jednaki).",note:"Kolinearnost = paralelnost = jedan vektor je skalarni višekratnik drugog."},
    {txt:"Referentni vektor: (2, 4). Uvjet za (b₁, b₂): 2·b₂ = 4·b₁, tj. b₂/b₁ = 2.",note:"Iz 2i+4j = (2,4): omjer komponenti = 4/2 = 2. Svaki kolinearni vektor mora imati isti omjer."},
    {txt:"A: (1, 2). Omjer: 2/1 = 2 ✓ → kolinearan! Ili: (1,2) = (1/2)·(2,4) ✓",note:"i+2j je točno pola vektora 2i+4j — isti smjer, polovica veličine."},
    {txt:"B: (2,−4). Omjer: −4/2 = −2 ≠ 2 ✗ (suprotan smjer ili isti - kolinearno u širem smislu)",note:"Negativan omjer = suprotan smjer. Ovisno o definiciji, može biti kolinearno, ali ovdje tražimo 'usporedan' (isti smjer)."},
    {txt:"C: (3,1). 1/3 ≠ 2 ✗. D: (4,−3). −3/4 ≠ 2 ✗. Jedini odgovor: A",note:"C i D imaju potpuno drugačije omjere komponenti.",final:true},{txt:"Intuicija: Analiza A: (1,2) = (1/2)·(2,4) ✓. Isti smjer, pola veličine — savršeno kolinearno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Uvjet kolinearnosti (paralelnosti) vektora (a₁,a₂) i (b₁,b₂): a₁b₂ − a₂b₁ = 0 (vektorski produkt = 0), ili ekvivalentno: b = λ·a za neki λ ∈ ℝ. Ovdje: (1,2) = (1/2)·(2,4) → λ=1/2.",note:"postupak",final:true},{txt:"Analiza C: (3,1). Omjer: 1/3 ≠ 4/2=2 → nije kolinearno. 2·1−4·3=2−12=−10≠0 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Analiza B: (2,−4) = (−1)·(−2,4)... hmm. 2i−4j = (2,−4) = (−1)·(−2,4) ili (1)·(2,−4). Omjer: 2/2=1 za i-komponente, −4/4=−1 za j-komponente → 1≠−1 → nije kolinearno s (2,4). Potvrda: 2·(−4)−4·2=−8−8=−16≠0.",note:"diagnostika",final:true}
  ],
  why:[
    "Uvjet kolinearnosti (paralelnosti) vektora (a₁,a₂) i (b₁,b₂): a₁b₂ − a₂b₁ = 0 (vektorski produkt = 0), ili ekvivalentno: b = λ·a za neki λ ∈ ℝ. Ovdje: (1,2) = (1/2)·(2,4) → λ=1/2.",
    "Analiza A: (1,2) = (1/2)·(2,4) ✓. Isti smjer, pola veličine — savršeno kolinearno.",
    "Analiza B: (2,−4) = (−1)·(−2,4)... hmm. 2i−4j = (2,−4) = (−1)·(−2,4) ili (1)·(2,−4). Omjer: 2/2=1 za i-komponente, −4/4=−1 za j-komponente → 1≠−1 → nije kolinearno s (2,4). Potvrda: 2·(−4)−4·2=−8−8=−16≠0.",
    "Analiza C: (3,1). Omjer: 1/3 ≠ 4/2=2 → nije kolinearno. 2·1−4·3=2−12=−10≠0 ✓.",
    "Analiza D: (4,−3). 2·(−3)−4·4=−6−16=−22≠0 ✓.",
    "Provjera ✓: 2·2−4·1=4−4=0 ✓ → A je kolinearan s (2,4) ✓"
  ]
},
  {id:8,type:"mc",warn:"Pazi: u IV. kvadrantu sin < 0 → sin x = −0,8; pa cos(x − π/3) = cos x·cos π/3 + sin x·sin π/3.",topic:"trig",points:1,
  q:"Ako je cos x = 0,6 i x ∈ ⟨3π/2, 2π⟩, koliko je cos(x − π/3)?",
  opts:["-0,44720","-0,39282","0,1","0,5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  steps:[
    {txt:"x ∈ ⟨3π/2, 2π⟩ je IV. kvadrant ⇒ sin x < 0",note:"Strategija: odrediti sin x iz sin²+cos²=1, uz predznak iz kvadranta."},
    {txt:"sin²x + cos²x = 1 ⇒ sin²x = 1 − 0,36 = 0,64 ⇒ sin x = -0,8",note:"x ∈ ⟨3π/2, 2π⟩ = 4. kvadrant → sin x < 0. sin x = −√(1−0,36) = −0,8"},
    {txt:"Adicijska formula: cos(x − π/3) = cos x · cos(π/3) + sin x · sin(π/3)",note:"Razvoj: cos(x−π/3) = cos x·cos(π/3) + sin x·sin(π/3)"},
    {txt:"= 0,6 · 0,5 + (-0,8) · (√3/2)",note:"Uvrštavanje: 0,6·0,5 + (−0,8)·(√3/2) = 0,3 − 0,4√3 ≈ 0,3 − 0,693 ≈ −0,393 ≈ −0,39282 → B"},
    {txt:"= 0,3 − 0,4√3 ≈ 0,3 − 0,6928 ≈ -0,39282",note:"Provjera: cos(π/3)=0,5; sin(π/3)=√3/2≈0,866. Rezultat ≈ −0,393 ✓",final:true},{txt:"Intuicija: sin x je negativan u 4. kvadrantu. sin²x = 1 − 0,36 = 0,64 → sin x = −0,8. Uvrstiti: 0,6·0,5 + (−0,8)·(√3/2) = 0,3 − 0,4√3 ≈ −0,39.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cos(x−π/3) = cos x·cos(π/3) + sin x·sin(π/3). Za x ∈ ⟨3π/2, 2π⟩: cos x = 0,6, sin x = −0,8.",note:"postupak",final:true},{txt:"Adicijska formula: cos(α − β) = cos α · cos β + sin α · sin β.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: Uzeti sin x = +0,8 (pozitivan) — ali x je u 4. kvadrantu gdje je sinus negativan.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: cos(x−π/3) = cos x·cos(π/3) + sin x·sin(π/3). Za x ∈ ⟨3π/2, 2π⟩: cos x = 0,6, sin x = −0,8.",
    "Intuicija: sin x je negativan u 4. kvadrantu. sin²x = 1 − 0,36 = 0,64 → sin x = −0,8. Uvrstiti: 0,6·0,5 + (−0,8)·(√3/2) = 0,3 − 0,4√3 ≈ −0,39.",
    "Česta greška: Uzeti sin x = +0,8 (pozitivan) — ali x je u 4. kvadrantu gdje je sinus negativan.",
    "Adicijska formula: cos(α − β) = cos α · cos β + sin α · sin β.",
    "Predznak sinusa/kosinusa ovisi o kvadrantu."
  ,"Provjera kalkulatorom: paziti na DEG/RAD mode."]
},
  {id:9,type:"mc",warn:"Pazi: 2^(3 + log₂x) = 2³·2^(log₂x) = 8x; izjednači s y pa izrazi x.",topic:"al",points:1,
  q:"Ako je y = 2^(3 + log₂ x), koliko je x?",
  opts:["x = y/8","x = y − 3","x = log(y + 3)","x = 2^(8/y)"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: rastaviti eksponent koristeći aᵐ⁺ⁿ = aᵐ·aⁿ, zatim koristiti 2^(log₂x) = x.",note:"Identitet: a^(log_a(x)) = x — to je definicija logaritma (inverz eksponencijalne)."},
    {txt:"Rastavljamo: y = 2^(3 + log₂x) = 2³ · 2^(log₂x)",note:"Pravilo aᵐ⁺ⁿ = aᵐ·aⁿ. Eksponent zbrajamo pa rastavljamo."},
    {txt:"Primjenjujemo identitet: 2^(log₂x) = x",note:"Baza 2 i log s bazom 2 su inverzi: 2^(log₂x) = x po definiciji log₂."},
    {txt:"y = 8·x → x = y/8 → A",note:"Izoliramo x: dijeljenje s 8.",final:true},{txt:"Intuicija: Rastavljanje eksponenta: 2^(3+log₂x) = 2³·2^(log₂x) = 8·x. Jednostavno i elegantno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Ključni identitet: a^(log_a(t)) = t za svaki t > 0 i bazu a > 0, a ≠ 1. Ovdje: 2^(log₂x) = x. To je definicija logaritma — log₂x je eksponent na koji trebamo podići 2 da dobijemo x.",note:"postupak",final:true},{txt:"Česta greška: 2^(3+log₂x) = (2+log₂x)³ ili slično — ne smijemo tako razvijati potenciju.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Analiza distraktora: B: x=y−3 (oduzimanje umjesto dijeljenja); C: x=log(y+3) (zamjena log i exp); D: x=2^([FRAC:8|y]) (inverz s pogrešnom formulom).",note:"diagnostika",final:true}
  ],
  why:[
    "Ključni identitet: a^(log_a(t)) = t za svaki t > 0 i bazu a > 0, a ≠ 1. Ovdje: 2^(log₂x) = x. To je definicija logaritma — log₂x je eksponent na koji trebamo podići 2 da dobijemo x.",
    "Rastavljanje eksponenta: 2^(3+log₂x) = 2³·2^(log₂x) = 8·x. Jednostavno i elegantno.",
    "Analiza distraktora: B: x=y−3 (oduzimanje umjesto dijeljenja); C: x=log(y+3) (zamjena log i exp); D: x=2^([FRAC:8|y]) (inverz s pogrešnom formulom).",
    "Česta greška: 2^(3+log₂x) = (2+log₂x)³ ili slično — ne smijemo tako razvijati potenciju.",
    "Alt metoda: log₂ obje strane: log₂y = 3+log₂x → log₂x = log₂y−3 = log₂(y/8) → x = y/8 ✓.",
    "Provjera ✓: x=y/8. Uvrsti: 2^(3+log₂(y/8)) = 8·(y/8) = y ✓"
  ]
},
  {id:10,img:true,type:"mc",warn:"Pazi: očitaj nultočke, asimptote i ponašanje grafa pa usporedi s ponuđenim funkcijama.",topic:"fun",points:1,img:true,
  q:"Na slici je prikazan graf funkcije f. Kojoj od navedenih funkcija pripada prikazani graf?",
  opts:["f(x) = 2^(x) − 4","f(x) = 2^(x) − 2","f(x) = (1/2)^(x) − 4","f(x) = (1/2)^(x) − 2"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  steps:[
    {txt:"Strategija: iz grafa odrediti (1) smjer rasta/pada, (2) horizontalnu asimptotu, (3) jednu točku.",note:"Za eksponencijalnu f(x)=a^x+c: baza a>1 → rastuća; a<1 → padajuća. Asimptota y=c."},
    {txt:"Graf je rastuć → baza > 1 → isključujemo C i D (baza 1/2 < 1 → padajuće).",note:"Na grafu: vrijednosti rastu slijeva udesno → eksponencijalna s bazom > 1."},
    {txt:"Horizontalna asimptota: graf teži y ≈ −4 za x→−∞ → c = −4 → isključujemo B (c=−2).",note:"Za f(x)=2^x+c: kad x→−∞, 2^x→0, pa f→c. Asimptota = c."},
    {txt:"Provjera A: f(0)=2⁰−4=−3; f(2)=4−4=0 (nultočka). Odgovara grafu → A",note:"Moguća provjera i s konkretnom točkom s grafa — nultočka je vidljiva pri x=2.",final:true},{txt:"Intuicija: Graf rastuć → C,D (baza 1/2) odmah eliminiramo. Ostaju A (c=−4) i B (c=−2). Graf pokazuje asimptotu daleko ispod x-osi, bliže y=−4 nego y=−2 → A.",note:"intuicija",final:true},{txt:"Sažetak postupka: Identifikacija eksponencijalne funkcije iz grafa: (1) rastuća ↔ baza>1; padajuća ↔ baza∈(0,1). (2) Horizontalna asimptota y=c za x→±∞. (3) Konkretna točka kao test.",note:"postupak",final:true},{txt:"Analiza B: f(x)=2^x−2 ima asimptotu y=−2. Graf pada prema y≈−4, ne −2. Eliminiramo.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Česta greška: uspoređivati samo jednu karakteristiku (npr. samo smjer) i ne koristiti asimptotu za eliminaciju. Treba koristiti sve dostupne informacije s grafa.",note:"diagnostika",final:true}
  ],
  why:[
    "Identifikacija eksponencijalne funkcije iz grafa: (1) rastuća ↔ baza>1; padajuća ↔ baza∈(0,1). (2) Horizontalna asimptota y=c za x→±∞. (3) Konkretna točka kao test.",
    "Graf rastuć → C,D (baza 1/2) odmah eliminiramo. Ostaju A (c=−4) i B (c=−2). Graf pokazuje asimptotu daleko ispod x-osi, bliže y=−4 nego y=−2 → A.",
    "Česta greška: uspoređivati samo jednu karakteristiku (npr. samo smjer) i ne koristiti asimptotu za eliminaciju. Treba koristiti sve dostupne informacije s grafa.",
    "Analiza B: f(x)=2^x−2 ima asimptotu y=−2. Graf pada prema y≈−4, ne −2. Eliminiramo.",
    "Analiza C,D: f(x)=(1/2)^x su padajuće funkcije (lim za x→+∞ je 0, za x→−∞ je +∞⟩. Graf je rastuć → oba eliminirana.",
    "Provjera ✓: A: f(0)=1−4=−3 (y-presjek ≈−3 na grafu) ✓; f(2)=0 (nultočka pri x=2) ✓"
  ]
},
  {id:11,type:"mc",warn:"Pazi: f(g(x)) = (2x + 3)/(2x + 4); izjednači s a pa riješi po x (a je parametar).",topic:"fun",points:2,
  q:"Zadane su funkcije f(x) = x/(x + 1) i g(x) = 2x + 3. Za koji x vrijedi f(g(x)) − a = 0?",
  opts:["x = a − 3/5 − a","x = a − 3/2a − 2","x = 4a − 3/a − 5","x = 4a − 3/2 − 2a"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  ex:"(f∘g)(x)=f(2x+3)=(2x+3)/((2x+3)+1)=(2x+3)/(2x+4). Npr. za x=0: f(g(0))=f(3)=3/4.",
  steps:[
    {txt:"f(g(x)) = g(x)/(g(x) + 1) = (2x + 3)/(2x + 4)",note:"Strategija: riješiti svaku jednadžbu i provjeriti je li rješenje u ℕ = {1, 2, 3, ...}"},
    {txt:"f(g(x)) = a: (2x + 3)/(2x + 4) = a",note:"(2x+4)/5=1 → 2x+4=5 → x=1/2 ∉ ℕ ✗"},
    {txt:"2x + 3 = a(2x + 4) = 2ax + 4a",note:"x²-3=0 → x=±√3 ∉ ℕ ✗"},
    {txt:"2x − 2ax = 4a − 3 ⇒ x(2 − 2a) = 4a − 3",note:"2^(x+1)=1/4=2^(−2) → x+1=−2 → x=−3 ∉ ℕ ✗"},
    {txt:"x = [FRAC:4a − 3|2 − 2a]",note:"log₂x=3 → x=8 ∈ ℕ ✓ → samo jedna jednadžba → A",final:true},{txt:"Intuicija: Postavljamo (f∘g)(x) = a (neki parametar koji se traži u opcijama) i riješimo za x algebraom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: (f∘g)(x) = f(g(x)). Uvrstiti g(x) = 2x+3 u f: f(g(x)) = (2x+3)/((2x+3)+1) = (2x+3)/(2x+4).",note:"postupak",final:true},{txt:"Alt metoda: Izjednačiti (2x+3)/(2x+4) = a → 2x+3 = a(2x+4) → riješiti za x → x = (a−3)/(4−2a).",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Česta greška: Greškom računati (g∘f)(x) = g(f(x)) umjesto (f∘g)(x) — redoslijed je bitan.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: (f∘g)(x) = f(g(x)). Uvrstiti g(x) = 2x+3 u f: f(g(x)) = (2x+3)/((2x+3)+1) = (2x+3)/(2x+4).",
    "Intuicija: Postavljamo (f∘g)(x) = a (neki parametar koji se traži u opcijama) i riješimo za x algebraom.",
    "Česta greška: Greškom računati (g∘f)(x) = g(f(x)) umjesto (f∘g)(x) — redoslijed je bitan.",
    "Alt metoda: Izjednačiti (2x+3)/(2x+4) = a → 2x+3 = a(2x+4) → riješiti za x → x = (a−3)/(4−2a).",
    "Kompozicija: (f ∘ g)(x) = f(g(x)) — uvrstimo g(x) na mjesto x u f."
  ,"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max."]
},
  {id:12,img:true,type:"mc",warn:"Pazi: dvije jednadžbe (tan 33° i tan 26°) s istom udaljenošću; oduzmi da eliminiraš antenu.",topic:"trig",points:2,img:true,
  q:"Kolika je visina h kuće prikazane na skici? (Ispred kuće promatrač gleda vrh antene pod kutom 33° i vrh krova pod kutom 26°. Antena je 1,5 m iznad vrha krova.)",
  opts:["4,2 m","4,5 m","5,1 m","5,4 m"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"Promatrač 10 m daleko; kut gledanja vrha 27°, baze 10°. Sustav: d=h/tg27°, d+10=h/tg10° → h≈5,1 m.",
  steps:[
    {txt:"Neka je D vodoravna udaljenost promatrača od kuće. Visina kuće je h.",note:"Strategija: koristiti trigonometriju — antena visine 1,5 m vidi se pod kutovima 33° i 26°."},
    {txt:"Vrh krova: tg 26° = h/D ⇒ h = D · tg 26°",note:"Neka je h = visina kuće. Kut 33° = kut do vrha antene (visina h+1,5), kut 26° = kut do krova (visina h)."},
    {txt:"Vrh antene: tg 33° = (h + 1,5)/D ⇒ h + 1,5 = D · tg 33°",note:"tg(33°)=(h+1,5)/d i tg(26°)=h/d. Dijeljenjem: tg(33°)/tg(26°)=(h+1,5)/h"},
    {txt:"Oduzimanje: 1,5 = D(tg 33° − tg 26°) ⇒ D = 1,5/(0,6494 − 0,4877) ≈ 9,28 m",note:"Rješavamo: h·tg(33°) = (h+1,5)·tg(26°) → h(tg33°−tg26°)=1,5·tg26° → h=1,5·tg26°/(tg33°−tg26°) ≈ 4,5 m → B"},
    {txt:"h = 9,28 · 0,4877 ≈ 4,5 m",note:"Numerički: tg33°≈0,6494; tg26°≈0,4877. h=1,5·0,4877/(0,6494−0,4877)≈4,5 m ✓",final:true},{txt:"Intuicija: Sustav dvaju tangensa daje dvije jednadžbe; oduzimanjem eliminiramo d₁, ostaje samo h.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Za kutove α i β gledanja vrha: tg α = h/d₁, tg β = h/(d₁+d₂). Eliminacijom d₁ dobivamo h.",note:"postupak",final:true},{txt:"Alt metoda: Iz oba kuta izraziti d₁ pa izjednačiti: d₁ = h/tg α = (h/tg β) − d₂ → riješiti za h.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti samo jedan kut — bez drugog ne možemo odrediti i visinu i udaljenost.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Za kutove α i β gledanja vrha: tg α = h/d₁, tg β = h/(d₁+d₂). Eliminacijom d₁ dobivamo h.",
    "Intuicija: Sustav dvaju tangensa daje dvije jednadžbe; oduzimanjem eliminiramo d₁, ostaje samo h.",
    "Česta greška: Koristiti samo jedan kut — bez drugog ne možemo odrediti i visinu i udaljenost.",
    "Alt metoda: Iz oba kuta izraziti d₁ pa izjednačiti: d₁ = h/tg α = (h/tg β) − d₂ → riješiti za h.",
    "Tehnika 'sustav dviju tangensa': dvije jednadžbe za istu udaljenost, oduzimanjem eliminiramo jednu nepoznanicu.",
    "Provjera ✓: Uvrsti h=5,1 u obje tg jednadžbe i potvrdi konzistentnost udaljenosti ✓"
  ]
},
  {id:13,img:true,type:"mc",warn:"Pazi: okomiti krak je visina trapeza; ostalo iz pravokutnog trokuta (razlika osnovica 10 − 6).",topic:"geom",points:2,img:true,
  q:"Na skici je prikazan trapez kojemu je jedan krak okomit na osnovice. Duljine osnovica iznose 10 cm i 6 cm, a duljina kraka okomitoga na osnovice iznosi 4 cm. Povučena je dužina usporedna s osnovicama i ona taj trapez dijeli na dva dijela jednakih površina. Na kojoj je udaljenosti od kraće osnovice trapeza povučena ta dužina?",
  intermediates:[32, 16, 144, 128, 272],
  opts:["2,057 cm","2,246 cm","2,793 cm","2,918 cm"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  ex:"Trapez: kraća osnovica a=3, dulja b=7, visina h=4. Presjek na h=2: duljina=3+(7−3)·2/4=3+2=5.",
  steps:[
    {txt:"Ukupna površina trapeza: P = (10 + 6)/2 · 4 = 32 cm²",note:"Strategija: površina trapeza = (a+b)/2·h. Dužina x dijeli trapez na 2 jednaka dijela."},
    {txt:"Na visini x od kraće osnovice (6) duljina paralelne dužine raste linearno: d(x) = 6 + (10 − 6)/4 · x = 6 + x",note:"Neka je x udaljenost od kraće osnovice (b=6). Donji trapez: (b+d)/2·x = (6+d)/2·x."},
    {txt:"Površina gornjeg trapeza (od kraće osnovice do dužine): P_g = (6 + (6 + x))/2 · x = (12 + x) · x/2",note:"Uvjet: (6+d)/2·x = S/2 = (6+10)/2·4/2 = 16. Geometrijska sredina: d²=(6²+10²)/2... hmm, točniji: d=√(b²+(a²−b²)·x/h)."},
    {txt:"P_g = P/2 = 16: (12 + x)x = 32 ⇒ x² + 12x − 32 = 0",note:"Formula: d = √(6² + (10²−6²)·x/4). Gornji trapez = donji → integralom: x=h·(2b²+(a²+b²))... Ispravno: x²·(a−b)/(2h) +bx = ah/2. Rješenje daje x≈2,246 cm → B"},
    {txt:"x = (-12 + √(144 + 128))/2 = [FRAC:-12 + √272|2] ≈ 2,246 cm",note:"Numerički: x=2,246 cm. Provjera: površina donjeg dijela = (6+d)/2·2,246 gdje d=√(36+16·2,246/4)≈8 ≈ 16 cm² = S/2 ✓",final:true},{txt:"Intuicija: Crtaj visinu hT i odredi omjer x/hT na kojoj se presijeca; duljina presječnice = a + (b−a)·x/hT.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Trapez s jednim pravokutnim krakom: duljina paralelnog presjeka na visini x interpolira linearno između kraće i duže osnovice.",note:"postupak",final:true},{txt:"Alt metoda: Koordinatna metoda — postavi trapez u koord. sustav, nađi jednadžbu kosog kraka, evaluiraj na zadanoj visini.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Česta greška: Zaboraviti pravokutni trokut koji se formira uz krak — koristiti Pitagoru za krak.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Trapez s jednim pravokutnim krakom: duljina paralelnog presjeka na visini x interpolira linearno između kraće i duže osnovice.",
    "Intuicija: Crtaj visinu hT i odredi omjer x/hT na kojoj se presijeca; duljina presječnice = a + (b−a)·x/hT.",
    "Česta greška: Zaboraviti pravokutni trokut koji se formira uz krak — koristiti Pitagoru za krak.",
    "Alt metoda: Koordinatna metoda — postavi trapez u koord. sustav, nađi jednadžbu kosog kraka, evaluiraj na zadanoj visini.",
    "U trapezu s nehomogenim krakovima: duljina paralelne dužine na visini x raste linearno između osnovica.",
    "Provjera ✓: Izračunaj duljinu paralelne dužine na zadanoj visini trapeza i provjeri ✓"
  ]
},
  {id:14,img:true,type:"mc",warn:"Pazi: polumjeri čine geometrijski niz; zbroj je geometrijski red (konvergira jer |q| < 1).",topic:"geom",points:2,img:true,
  q:"Zadano je beskonačno mnogo krugova kojima su središta na jednome pravcu i koji se dodiruju izvana kao što je prikazano na skici. Krug K₁ ima polumjer 10 cm. Promjer kruga K₂ jednak je polumjeru kruga K₁, promjer kruga K₃ jednak je polumjeru kruga K₂ itd. Koliki je zbroj površina svih tih beskonačno mnogo krugova?",
  opts:["75π cm²","125π cm²","400π/3 cm²","500π/3 cm²"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  ex:"r₁=10, r₂=5 (q=1/2). Površine: 100π, 25π, ... Suma=100π·1/(1−1/4)=400π/3.",
  steps:[
    {txt:"Polumjeri krugova: r_n+1 = polumjer K_n / 2 (jer je promjer sljedećeg = polumjeru prethodnog)",note:"Strategija: K₁ polumjer r₁=5 cm (polumjer=POLUMJER, tj. r₁=5). K₂ promjer=polumjer K₁=5 cm → r₂=2,5. Geometrijski niz r_n=5·(1/2)^(n−1)."},
    {txt:"r₁ = 10, r₂ = 5, r₃ = 2,5, … (geometrijski niz s kvocijentom 1/2)",note:"Zbroj površina: Σπr_n² = π·Σ[5·(1/2)^(n−1)]² = π·25·Σ(1/4)^(n−1) = 25π/(1−1/4) = 25π·4/3 = 100π/3... Čekaj: r₁=5 (polumjer), ne 10."},
    {txt:"Površine: P_n = π · r_n² ⇒ P₁ = 100π, P₂ = 25π, P₃ = 6,25π, … (geometrijski niz s kvocijentom 1/4)",note:"Pažnja na zadatak: K₁ ima POLUMJER 10 cm (ne 5). K₂ promjer = polumjer K₁ = 10 cm → r₂=5. Omjer r: 5/10=1/2."},
    {txt:"Suma: S = [FRAC:P₁|1 − q] = 100π/(1 − [FRAC:1|4]) = 100π · [FRAC:4|3] = [FRAC:400π|3] cm²",note:"Zbroj: π·100·Σ(1/4)^(n−1) = 100π/(1−1/4) = 400π/3 → C",final:true},{txt:"Intuicija: P = πr² → zbroj površina = π·r₁²·(1 + q² + q⁴ + ...) = π·r₁²·1/(1−q²) za |q| < 1.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Polumjeri r₁, r₂, r₃, ... tvore geometrijski niz s kvocijentom q → površine r₁², r₂², r₃², ... tvore geom. niz s kvocijentom q².",note:"postupak",final:true},{txt:"Alt metoda: Izraziti svaki r_n = r₁·qⁿ⁻¹, pa P_n = π·r₁²·q^(2n-2); suma geometrijskog niza P = πr₁²/(1−q²).",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti kvocijent q za površine umjesto q² — površina raste kao kvadrat polumjera.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: Polumjeri r₁, r₂, r₃, ... tvore geometrijski niz s kvocijentom q → površine r₁², r₂², r₃², ... tvore geom. niz s kvocijentom q².",
    "Intuicija: P = πr² → zbroj površina = π·r₁²·(1 + q² + q⁴ + ...) = π·r₁²·1/(1−q²) za |q| < 1.",
    "Česta greška: Koristiti kvocijent q za površine umjesto q² — površina raste kao kvadrat polumjera.",
    "Alt metoda: Izraziti svaki r_n = r₁·qⁿ⁻¹, pa P_n = π·r₁²·q^(2n-2); suma geometrijskog niza P = πr₁²/(1−q²).",
    "Površina je proporcionalna r² ⇒ ako polumjeri tvore geom. niz s q, površine tvore geom. niz s q².",
    "Beskonačni geom. red konvergira ako |q| < 1; suma S = a₁/(1 − q).",
    "Provjera ✓: Zbroj = πr₁²/(1−q²). Za zadane vrijednosti provjeri koji distractor matchira ✓"
  ]
},
  {id:15,type:"mc",warn:"Pazi: aₙ = Sₙ − Sₙ₋₁; izračunaj a₁₀ preko b pa izjednači s −16.",topic:"al",points:2,
  q:"Zbroj prvih n članova nekoga aritmetičkog niza jednak je Sₙ = bn − 2n². Koliki je koeficijent b ako je deseti član toga niza jednak -16?",
  opts:["b = 4","b = 9","b = 17","b = 22"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  ex:"Sₙ=5n−2n². a₁=S₁=3; a₂=S₂−S₁=(10−8)−3=−1; d=a₂−a₁=−4; b=a₁+4·1=7 → b=7? Provjeri aₙ=b−4n+2=b−4+2=b−2=a₁→b=5.",
  steps:[
    {txt:"Veza n-tog člana i sume: aₙ = Sₙ − Sₙ₋₁ za n ≥ 2",note:"Strategija: iz Sₙ izvesti formulu za aₙ, pa postaviti uvjet a₁₀=−16."},
    {txt:"Sₙ − Sₙ₋₁ = (bn − 2n²) − (b(n − 1) − 2(n − 1)²)",note:"aₙ = Sₙ − Sₙ₋₁ = (bn−2n²) − (b(n−1)−2(n−1)²) = b − 4n + 2"},
    {txt:"= bn − 2n² − bn + b + 2n² − 4n + 2 = b − 4n + 2",note:"a₁₀ = b − 40 + 2 = b − 38 = −16 → b = 22 → D"},
    {txt:"a₁₀ = b − 40 + 2 = b − 38 = -16 ⇒ b = 22",note:"Provjera: a₁₀ = 22 − 4·10 + 2 = 22−40+2 = −16 ✓",final:true},{txt:"Intuicija: Aritmetički niz ima linearnu formulu aₙ = b−4n+2. Razlika uzastopnih: aₙ₊₁ − aₙ = −4 (konstanta). a₁ = b − 2 = S₁.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: aₙ = Sₙ − Sₙ₋₁ za n ≥ 2. Sa Sₙ = bn − 2n²: aₙ = (bn−2n²) − (b(n−1)−2(n−1)²) = b − 4n + 2.",note:"postupak",final:true},{txt:"aₙ = Sₙ − Sₙ₋₁ vrijedi za svaki niz (ne samo aritmetički).",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Česta greška: Koristiti S₁ = a₁ ali zaboraviti da aₙ = Sₙ − Sₙ₋₁ NIJE valjano za n=1 — a₁ = S₁ direktno.",note:"diagnostika",final:true}
  ],
  why:[
    "Pravilo: aₙ = Sₙ − Sₙ₋₁ za n ≥ 2. Sa Sₙ = bn − 2n²: aₙ = (bn−2n²) − (b(n−1)−2(n−1)²) = b − 4n + 2.",
    "Intuicija: Aritmetički niz ima linearnu formulu aₙ = b−4n+2. Razlika uzastopnih: aₙ₊₁ − aₙ = −4 (konstanta). a₁ = b − 2 = S₁.",
    "Česta greška: Koristiti S₁ = a₁ ali zaboraviti da aₙ = Sₙ − Sₙ₋₁ NIJE valjano za n=1 — a₁ = S₁ direktno.",
    "aₙ = Sₙ − Sₙ₋₁ vrijedi za svaki niz (ne samo aritmetički).",
    "Za aritmetički niz: aₙ je linearna funkcija u n; Sₙ je kvadratna funkcija u n.",
    "Provjera ✓: aₙ = b−4n+2. a₁=b−2=S₁=b−2 ✓; d=aₙ₊₁−aₙ=−4 (konstantno) ✓"
  ]
},
  {id:16,type:"sa",topic:"br",points:1,
  q:"Izračunajte koliko je (7⁰ − (1/4) · (2/3)⁻³)/(⁴√4 − 1) i zaokružite rezultat na tri decimale.",
  sol:{ans:"≈ 0,377",alt:["0,377","0,377"]},
  solFormula:[{pre:"≈ 0,377"}],
  steps:[
    {txt:"7⁰ = 1; (2/3)⁻³ = (3/2)³ = 27/8",note:"Strategija: izračunati svaki dio izraza zasebno — brojnik i nazivnik odvojeno."},
    {txt:"(1/4) · (27/8) = 27/32",note:"7⁰=1; (2/3)⁻³=(3/2)³=27/8. Dakle (1/4)·(27/8)=27/32."},
    {txt:"Brojnik: 1 − 27/32 = 5/32",note:"Brojnik: 1−27/32 = 5/32."},
    {txt:"⁴√4 = 4¼ = (2²)¼ = 2½ = √2",note:"⁴√4 = (2²)^(¹⁄⁴) = 2^(¹⁄²) = √2 ≈ 1,4142. Nazivnik: √2−1 ≈ 0,4142."},
    {txt:"Nazivnik: √2 − 1",note:"Rezultat: (5/32)/(√2−1). Racionalizacija: ·(√2+1)/(√2+1) = 5(√2+1)/32 ≈ 5·2,4142/32 ≈ 0,377 ✓"},
    {txt:"Rezultat: ([FRAC:5|32])/(√2 − 1) = 5[FRAC:√2 + 1|32] ≈ 5 · 2,4142/32 ≈ 0,377",note:"Provjera: 0,377 · (√2−1) ≈ 0,377 · 0,4142 ≈ 0,156 ≈ 5/32 ✓",final:true},{txt:"Točan odgovor: ≈ 0,377 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: a⁰ = 1, a⁻ⁿ = 1/aⁿ, ⁿ√aᵐ = a^(m/n). Izračunaj brojnik i nazivnik zasebno.",note:"postupak",final:true},{txt:"Intuicija: Brojnik: 1 − (1/4)·(2/3)⁻³ = 1 − (1/4)·(27/8) = 1 − 27/32 = 5/32. Nazivnik: ⁴√4 − 1 = √2 − 1.",note:"intuicija",final:true},{txt:"a⁰ = 1 (za a ≠ 0); a⁻ⁿ = 1/aⁿ.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo: a⁰ = 1, a⁻ⁿ = 1/aⁿ, ⁿ√aᵐ = a^(m/n). Izračunaj brojnik i nazivnik zasebno.",
    "Intuicija: Brojnik: 1 − (1/4)·(2/3)⁻³ = 1 − (1/4)·(27/8) = 1 − 27/32 = 5/32. Nazivnik: ⁴√4 − 1 = √2 − 1.",
    "Česta greška: (2/3)⁻³ = (3/2)³ = 27/8 (ne 8/27!) — negativna potencija invertira razlomak.",
    "a⁰ = 1 (za a ≠ 0); a⁻ⁿ = 1/aⁿ.",
    "Racionalizacija nazivnika: pomnožimo s (√2 + 1)/(√2 + 1).",
    "Provjera ✓: Uvrsti vrijednosti nazad u izraz i potvrdi rezultat ✓"
  ]
},
  {id:17,type:"sa",topic:"stat",points:1,
  q:"Obrok od osam jagoda srednje veličine osigurava 16 % preporučenih dnevnih potreba za prehrambenim vlaknima. Koliko komada jagoda srednje veličine treba pojesti kako bi se zadovoljilo 40 % preporučenih dnevnih potreba za prehrambenim vlaknima?",
  sol:{ans:"20 komada",alt:["20 komada","≈ 20 komada"]},
  steps:[
    {txt:"Strategija: direktna proporcija — više jagoda → više vitamina C.",note:"Proporcionalni odnos: n jagoda / % vitamina = konstanta."},
    {txt:"Postavljamo proporciju: 8 jagoda → 16%, x jagoda → 40%",note:"Jednaka proporcija: [FRAC:8|16] = [FRAC:x|40] (ili: x = 8 · [FRAC:40|16])."},
    {txt:"x = 8 · [FRAC:40|16] = 8 · 2,5 = 20 jagoda",note:"[FRAC:40|16] = 2,5 — trebamo 2,5 puta više jagoda za 2,5 puta više vitamina.",final:true},{txt:"Točan odgovor: 20 komada ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Direktna proporcija: ako n jagoda daje p% vitamina C, tada x jagoda daje q% gdje je n/p = x/q → x = n·q/p. Ovdje: x = 8·40/16 = 20.",note:"postupak",final:true},{txt:"Intuicija: 8 jagoda → 16%. Koliko puta trebamo povećati? 40/16 = 2,5 puta. Dakle 8·2,5 = 20 jagoda.",note:"intuicija",final:true},{txt:"Alt metoda: koliko jagoda za 1%? 8/16 = 0,5 jagode za 1%. Za 40%: 0,5·40 = 20 ✓.",note:"verifikacija",final:true},{txt:"Provjera: aritmetička sredina mora biti između min i max vrijednosti.",note:"verifikacija",final:true}
  ],
  why:[
    "Direktna proporcija: ako n jagoda daje p% vitamina C, tada x jagoda daje q% gdje je n/p = x/q → x = n·q/p. Ovdje: x = 8·40/16 = 20.",
    "Intuicija: 8 jagoda → 16%. Koliko puta trebamo povećati? 40/16 = 2,5 puta. Dakle 8·2,5 = 20 jagoda.",
    "Česta greška: x = 40/16·1 = 2,5 (dijelimo samo postotak, zaboravljamo broj jagoda). Uvijek pisati proporciju: 8:16 = x:40.",
    "Alt metoda: koliko jagoda za 1%? 8/16 = 0,5 jagode za 1%. Za 40%: 0,5·40 = 20 ✓.",
    "Provjera ✓: 20/8 = 2,5 = 40/16 ✓. Proporcija je ispravna."
  ,"Provjera medijanom: za sortirane podatke, medijan je sredina (ili prosjek dvije)."]
},
  {id:18.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (1. dio od 2):",
  q:"Izrazite c iz formule 1/a = (1 + c)/b.",
  sol:{ans:"c = [FRAC:b − a|a]",alt:["(b-a)/a","b/a - 1","(b - a)/a"]},
  steps:[
    {txt:"Strategija: izraziti c — riješiti jednadžbu po c. Cilj: dobiti c = … na jednoj strani.",note:"Planiramo: 1) eliminirati nazivnik množenjem, 2) oduzeti 1, 3) zajednički nazivnik."},
    {txt:"Množimo obje strane s b da maknemo b iz nazivnika desne strane: b · (1/a) = b · (1+c)/b",note:"b je u nazivniku samo desno — množimo s b i kratimo b/b = 1."},
    {txt:"Lijeva strana: b/a. Desna strana: 1 + c. Jednadžba: b/a = 1 + c",note:"Sada je jednadžba linearna po c — nema razlomaka s c."},
    {txt:"Izoliraj c: oduzmi 1 s obje strane: c = b/a − 1",note:"Oduzimamo 1 (a ne b/a) jer je 1 na desnoj strani, ne b/a."},
    {txt:"Zajednički nazivnik a: c = b/a − a/a = [FRAC:b − a|a]",note:"Standardni oblik razlomka. Provjera: b/a − 1 = (b−a)/a ✓",final:true},{txt:"Točan odgovor: c = [FRAC:b − a|a] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Postupak izražavanja varijable: (1) množimo s b da uklonimo nazivnik → b/a = 1+c; (2) oduzimamo 1 → c = b/a−1; (3) zajednički nazivnik → c = (b−a)/a.",note:"postupak",final:true},{txt:"Intuicija: Klju čni korak je množenje s b. Nakon toga jednadžba postaje linearna: b/a = 1+c, iz čega direktno izoliramo c. Svaki korak je reverzibilan pa nema lažnih rješenja.",note:"intuicija",final:true},{txt:"Česta greška #2: dijeliti jednadžbu s a umjesto množiti s b — tada dobivamo 1/a² = (1+c)/(ab), što komplicira problem.",note:"verifikacija",final:true}
  ],
  why:[
    "Postupak izražavanja varijable: (1) množimo s b da uklonimo nazivnik → b/a = 1+c; (2) oduzimamo 1 → c = b/a−1; (3) zajednički nazivnik → c = (b−a)/a.",
    "Klju čni korak je množenje s b. Nakon toga jednadžba postaje linearna: b/a = 1+c, iz čega direktno izoliramo c. Svaki korak je reverzibilan pa nema lažnih rješenja.",
    "Česta greška #1: izostaviti oduzimanje 1 → c = b/a umjesto c = (b−a)/a. Uvrštavanjem provjera odmah: 1/a = (1+b/a)/b = (a+b)/(ab) ≠ 1/a za a≠b.",
    "Česta greška #2: dijeliti jednadžbu s a umjesto množiti s b — tada dobivamo 1/a² = (1+c)/(ab), što komplicira problem.",
    "Alt metoda (cross-multiplication): b = a(1+c) → b = a + ac → b − a = ac → c = (b−a)/a. Brže ali preskače eksplicitni korak s nazivnikom.",
    "Provjera ✓: uvrstimo c = (b−a)/a: desna strana = (1+(b−a)/a)/b = ((a+b−a)/a)/b = b/(ab) = 1/a = lijeva strana ✓"
  ]
},
  {id:18.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 18 (2. dio od 2):",
  q:"Napišite izraz (∛(a²) · a) : a^(-1/3) u obliku potencije s bazom a.",
  sol:{ans:"a²",alt:["a²","a^2"]},
  steps:[
    {txt:"Strategija: svesti sve na potencije s bazom a pa primijeniti pravila aᵐ·aⁿ=a^(m+n) i aᵐ:aⁿ=a^(m−n).",note:"Ključ: ⁿ√(aᵏ) = a^([FRAC:k|n]). Prepisat ćemo svaki faktor kao a na eksponent."},
    {txt:"Korak 1: ∛(a²) = a^(2⁄3). Provjera: (a^(2⁄3))³ = a² ✓",note:"Treći korijen = eksponent 1⁄3. Dakle ∛(a²) = (a²)^(¹⁄³) = a^(2⁄3)."},
    {txt:"Korak 2: a = a¹. Množenje: ∛(a²)·a = a^(2⁄3)·a¹ = a^(2/3 + 1) = a^(2/3 + 3/3) = a^(5⁄3)",note:"Zbrajamo eksponente: 2/3 + 1 = 2/3 + 3/3 = 5/3. Zajednički nazivnik 3."},
    {txt:"Korak 3: dijeljenje s a^(−1⁄3). Pravilo aᵐ:aⁿ = a^(m−n): a^(5⁄3) : a^(−1⁄3) = a^(5⁄3 − (−1⁄3))",note:"Dijeljenje s a^(−1⁄3) = množenje s a^(+1⁄3) jer je −(−1/3) = +1/3."},
    {txt:"a^(5⁄3 + 1⁄3) = a^(6⁄3) = a²",note:"Konačni eksponent: 5/3 + 1/3 = 6/3 = 2. Rezultat: a².",final:true},{txt:"Točan odgovor: a² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravila potencija: ⁿ√(aᵏ) = a^([FRAC:k|n]) (korijen kao razlomačka potencija); aᵐ·aⁿ = a^(m+n) (množenje = zbrajanje eksponenata); aᵐ:aⁿ = a^(m−n) (dijeljenje = oduzimanje); a^(−n) = 1/aⁿ (negativni eksponent = recipročna...",note:"postupak",final:true},{txt:"Intuicija: Redoslijed koraka: ∛(a²)=a^(2⁄3), zatim množenje s a¹ daje a^(5⁄3), zatim dijeljenje s a^(−1⁄3) = množenje s a^(1⁄3) daje a^(5⁄3+1/3) = a². Negativni eksponent u nazivniku postaje pozitivni eksponent pri dijeljenju.",note:"intuicija",final:true},{txt:"Česta greška #2: a^(−1⁄3) u nazivniku interpretirati kao dijeljenje s a^(1⁄3) = množenje s a^(−1⁄3), što daje a^(5⁄3−1⁄3) = a^(4⁄3) ≠ a². Ispravno: DIJELJENJE s a^(−1⁄3) = MNOŽENJE s a^(+1⁄3).",note:"verifikacija",final:true}
  ],
  why:[
    "Pravila potencija: ⁿ√(aᵏ) = a^([FRAC:k|n]) (korijen kao razlomačka potencija); aᵐ·aⁿ = a^(m+n) (množenje = zbrajanje eksponenata); aᵐ:aⁿ = a^(m−n) (dijeljenje = oduzimanje); a^(−n) = 1/aⁿ (negativni eksponent = recipročna vrijednost).",
    "Redoslijed koraka: ∛(a²)=a^(2⁄3), zatim množenje s a¹ daje a^(5⁄3), zatim dijeljenje s a^(−1⁄3) = množenje s a^(1⁄3) daje a^(5⁄3+1/3) = a². Negativni eksponent u nazivniku postaje pozitivni eksponent pri dijeljenju.",
    "Česta greška #1: ∛(a²) = a^(2·3) = a⁶ (množenje umjesto dijeljenja u eksponentu korijena). Ispravno: ⁿ√(aᵏ) = a^([FRAC:k|n]), dakle ∛(a²) = a^(2⁄3), ne a^6.",
    "Česta greška #2: a^(−1⁄3) u nazivniku interpretirati kao dijeljenje s a^(1⁄3) = množenje s a^(−1⁄3), što daje a^(5⁄3−1⁄3) = a^(4⁄3) ≠ a². Ispravno: DIJELJENJE s a^(−1⁄3) = MNOŽENJE s a^(+1⁄3).",
    "Provjera ✓: za a=8: ∛(64)·8 : 8^(−1/3) = 4·8 : (1/2) = 32·2 = 64 = 8² ✓"
  ,"Provjera supstitucijom: uvrsti x = a² u L = D; rezultati se moraju podudarati."]
},
  {id:19.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Pojednostavnite izraz (x − y)²(x − y) + (x + y)³ i napišite ga u obliku binoma.",
  sol:{ans:"2x³ + 6xy²",alt:["2x³+6xy²","2x(x²+3y²)"]},
  steps:[
    {txt:"Strategija: prepoznati da je (x−y)²(x−y) = (x−y)³, pa razviti obje kocke i zbrojiti.",note:"Binomna kocka: (A±B)³ = A³ ± 3A²B + 3AB² ± B³. Za A=x, B=y."},
    {txt:"(x−y)³ = x³ − 3x²y + 3xy² − y³",note:"Predznak: za (A−B)³ parni članovi (3A²B) su negativni, neparni pozitivni."},
    {txt:"(x+y)³ = x³ + 3x²y + 3xy² + y³",note:"Za (A+B)³ svi članovi su pozitivni."},
    {txt:"Zbrajamo: (x³ − 3x²y + 3xy² − y³) + (x³ + 3x²y + 3xy² + y³)",note:"Poravnavamo slične članove: x³+x³, −3x²y+3x²y, 3xy²+3xy², −y³+y³."},
    {txt:"Kraćenje: −3x²y + 3x²y = 0; −y³ + y³ = 0. Ostaje: 2x³ + 6xy²",note:"Parni po y se poništavaju, kubni i kvadratni po x se zdvostručuju.",final:true},{txt:"Točan odgovor: 2x³ + 6xy² ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ključno prepoznavanje: (x−y)²·(x−y) = (x−y)³ — ne (x−y)². Vrijedi jer (A·A)·A = A³. Tek tada primjenjujemo formule kocke.",note:"postupak",final:true},{txt:"Intuicija: Formula kocke (A−B)³ = A³−3A²B+3AB²−B³ i (A+B)³ = A³+3A²B+3AB²+B³. Pri zbrajanju: članovi s neparnim potencijama y (tj. y¹ i y³) se poništavaju, a s parnim (y⁰=1 i y²) se zdvostručuju.",note:"intuicija",final:true},{txt:"Česta greška #2: direktno razvijati (x−y)²(x−y) kao produkt bez prepoznavanja kocke — moguće ali dugotrajno. (A²)(A) = A³ je brže.",note:"verifikacija",final:true}
  ],
  why:[
    "Ključno prepoznavanje: (x−y)²·(x−y) = (x−y)³ — ne (x−y)². Vrijedi jer (A·A)·A = A³. Tek tada primjenjujemo formule kocke.",
    "Formula kocke (A−B)³ = A³−3A²B+3AB²−B³ i (A+B)³ = A³+3A²B+3AB²+B³. Pri zbrajanju: članovi s neparnim potencijama y (tj. y¹ i y³) se poništavaju, a s parnim (y⁰=1 i y²) se zdvostručuju.",
    "Česta greška #1: (x−y)²(x−y) = (x−y)² bez trećeg faktora. Provjera: (2−1)²·(2−1) = 1·1 = 1, ali (x−y)² za x=2,y=1 je 1. Dakle moramo imati (x−y)³ = 1³ = 1, što je konzistentno samo ako gledamo zbroj s (3)³=27 → 28.",
    "Česta greška #2: direktno razvijati (x−y)²(x−y) kao produkt bez prepoznavanja kocke — moguće ali dugotrajno. (A²)(A) = A³ je brže.",
    "Alt metoda za provjeru: zbroj kocki a³+b³ = (a+b)(a²−ab+b²) za a=x−y, b=x+y: a+b=2x, pa (2x)·((x−y)²−(x−y)(x+y)+(x+y)²) = 2x·(x²−2xy+y²−(x²−y²)+x²+2xy+y²) = 2x·(x²+3y²) = 2x³+6xy². ✓",
    "Provjera ✓: za x=2, y=1: (2−1)²(2−1)+(2+1)³ = 1+27 = 28 = 2·8+6·2·1 = 16+12 = 28 ✓"
  ]
},
  {id:19.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Pojednostavnite izraz (x² + x)/(x + 3) · (18 + 6x)/(x² − 1) i napišite ga kao potpuno skraćen razlomak.",
  sol:{ans:"[FRAC:6x|x − 1]",alt:["[FRAC:6x|x − 1]","[FRAC:6x|x−1]","≈ [FRAC:6x|x − 1]"]},
  steps:[
    {txt:"Strategija: faktorizirati SVE polinome, zatim kratiti zajedničke faktore.",note:"Pravilo: nikad ne kratiti nefaktoriziranu formu. Isti faktori u brojniku i nazivniku se skrate."},
    {txt:"Faktorizacija brojnika 1: x²+x = x(x+1)",note:"Izvučemo zajednički faktor x iz oba člana."},
    {txt:"Faktorizacija nazivnika 1: x+3 ostaje (linearan, ne faktorizira se dalje)",note:"Provjera: x+3 je ireducibilan polinom stupnja 1."},
    {txt:"Faktorizacija brojnika 2: 18+6x = 6(3+x) = 6(x+3)",note:"Izvučemo faktor 6, zatim uočimo da je 3+x = x+3."},
    {txt:"Faktorizacija nazivnika 2: x²−1 = (x+1)(x−1)",note:"Razlika kvadrata: a²−b² = (a+b)(a−b). Ovdje a=x, b=1."},
    {txt:"Produkt razlomaka: x(x+1)/(x+3) · 6(x+3)/((x+1)(x−1)). Kratimo (x+1) i (x+3): = [FRAC:6x|x−1]",note:"Nakon kraćenja preostaje: x·6 / (x−1) = 6x/(x−1). Uvjeti: x≠0,−1,1,−3.",final:true},{txt:"Točan odgovor: [FRAC:6x|x − 1] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Opći postupak za produkt racionalnih izraza: (1) faktorizirati sve polinome, (2) uočiti zajedničke faktore u brojniku i nazivniku, (3) kratiti, (4) zapisati uvjete definiranosti.",note:"postupak",final:true},{txt:"Intuicija: Ključne faktorizacije: x²+x = x(x+1); 18+6x = 6(x+3); x²−1 = (x+1)(x−1). Razlika kvadrata x²−1 je najvažnija — čest izvor grešaka.",note:"intuicija",final:true},{txt:"Česta greška #2: zaboraviti faktorizirati 18+6x = 6(x+3). Bez toga se ne vidi zajednički faktor (x+3) koji se kratiti s prvim nazivnikom.",note:"verifikacija",final:true}
  ],
  why:[
    "Opći postupak za produkt racionalnih izraza: (1) faktorizirati sve polinome, (2) uočiti zajedničke faktore u brojniku i nazivniku, (3) kratiti, (4) zapisati uvjete definiranosti.",
    "Ključne faktorizacije: x²+x = x(x+1); 18+6x = 6(x+3); x²−1 = (x+1)(x−1). Razlika kvadrata x²−1 je najvažnija — čest izvor grešaka.",
    "Česta greška #1: kratiti x² iz x²+x s x²−1 bez faktorizacije. To je NEMOGUĆE — x²+x i x²−1 ne dijele faktor x². Jedino nakon faktorizacije vidimo koji su zajednički faktori.",
    "Česta greška #2: zaboraviti faktorizirati 18+6x = 6(x+3). Bez toga se ne vidi zajednički faktor (x+3) koji se kratiti s prvim nazivnikom.",
    "Uvjeti definiranosti originalnog izraza: x≠0 (iz x²+x = x(x+1), x=0 bi nulirao samo brojnik, ali x je faktor koji se kratiti — uvjet ostaje), x≠−1 (nultočka x²−1), x≠1 (nultočka x²−1), x≠−3 (nultočka x+3).",
    "Provjera ✓: za x=2: (4+2)/5 · (18+12)/(4−1) = 6/5 · 30/3 = 6/5 · 10 = 12; 6·2/(2−1) = 12 ✓"
  ]
},
  {id:20.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 20 (1. dio od 2):",
  q:"Riješite nejednadžbu [FRAC:3|2](5x − 4) ≤ 7x − 1.",
  sol:{ans:"x ≤ 10",alt:["x<=10","⟨-∞, 10]"]},
  steps:[
    {txt:"Strategija: eliminirati razlomak množiti obje strane s 2 (LCM=2), zatim izolirati x.",note:"Množimo s pozitivnim brojem (2 > 0) pa se smjer nejednadžbe NE mijenja."},
    {txt:"Množimo obje strane s 2: 2 · [FRAC:3|2](5x−4) ≤ 2·(7x−1)",note:"Lijeva strana: 2·(3/2) = 3. Desna strana: 2·7x−2·1."},
    {txt:"Razvijemo: 3(5x−4) ≤ 14x − 2 → 15x − 12 ≤ 14x − 2",note:"Distributivnost: 3·5x = 15x; 3·(−4) = −12."},
    {txt:"Prenesemo x-ove lijevo, konstante desno: 15x − 14x ≤ −2 + 12",note:"Prebacivanje: 14x desno postaje −14x lijevo; −12 desno postaje +12."},
    {txt:"x ≤ 10",note:"Jednadžba nejednadžbe daje tačno jednu granicu. Provjera rubne točke: x=10 je uključen (≤).",final:true},{txt:"Točan odgovor: x ≤ 10 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Nejednadžba s razlomkom: množimo s LCM nazivnika da eliminiramo razlomak. Ovdje LCM = 2. Množimo s 2 > 0 → smjer nejednadžbe ostaje isti (≤ ostaje ≤).",note:"postupak",final:true},{txt:"Intuicija: Razvijamo: 3(5x−4) = 15x−12. Desna: 2(7x−1) = 14x−2. Jednadžba: 15x−12 ≤ 14x−2 → x ≤ 10.",note:"intuicija",final:true},{txt:"Česta greška: množiti samo jednu stranu s 2 → 15x−4 ≤ 14x−2 (propustili smo −12). Uvijek množiti SVAKI CLAN obje strane.",note:"verifikacija",final:true}
  ],
  why:[
    "Nejednadžba s razlomkom: množimo s LCM nazivnika da eliminiramo razlomak. Ovdje LCM = 2. Množimo s 2 > 0 → smjer nejednadžbe ostaje isti (≤ ostaje ≤).",
    "Razvijamo: 3(5x−4) = 15x−12. Desna: 2(7x−1) = 14x−2. Jednadžba: 15x−12 ≤ 14x−2 → x ≤ 10.",
    "Pravilo predznaka (kritično!): kad množimo/dijelimo nejednadžbu s NEGATIVNIM brojem, smjer se OBRĆE (≤ postaje ≥). Ovdje množimo s +2 pa smjer ostaje.",
    "Česta greška: množiti samo jednu stranu s 2 → 15x−4 ≤ 14x−2 (propustili smo −12). Uvijek množiti SVAKI CLAN obje strane.",
    "Alt metoda: ostaviti razlomak i preurediti → [FRAC:3|2](5x−4)−7x ≤ −1 → (15x/2 − 6 − 7x) ≤ −1 → x/2 ≤ 5 → x ≤ 10. Isti rezultat.",
    "Provjera ✓: x=10: (3/2)·(50−4) = (3/2)·46 = 69; 7·10−1 = 69; 69 ≤ 69 ✓ (granični slučaj). x=11: (3/2)·51=76,5 > 76 ✗"
  ]
},
  {id:20.2,type:"sa",topic:"geom",points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Odredite jednadžbu pravca koji prolazi točkama A(2, -2) i B(8, 1).",
  sol:{ans:"x − 2y − 6 = 0",alt:["x-2y-6=0","y = x/2 - 3"]},
  steps:[
    {txt:"Strategija: formula pravca kroz dvije točke — najpraktičniji je oblik točka-nagib.",note:"Koraci: 1) izračunati nagib k, 2) upisati u y−y₁=k(x−x₁), 3) standardizirati."},
    {txt:"Nagib: k = (y₂ − y₁) / (x₂ − x₁) = (1 − (−2)) / (8 − 2) = 3 / 6 = [FRAC:1|2]",note:"Nagib = promjena y / promjena x. Brojevni primjer: dizanje 3 u rasponu 6 = 0,5."},
    {txt:"Jednadžba točka-nagib s točkom A(2,−2): y − (−2) = [FRAC:1|2] · (x − 2)",note:"Uvrštavamo x₁=2, y₁=−2. Mogli smo uzeti i točku B — rezultat je isti."},
    {txt:"Razvijamo: y + 2 = [FRAC:1|2]x − 1. Množimo s 2: 2y + 4 = x − 2",note:"Množimo s 2 da maknemo razlomak. Sada je jednadžba s cijelim koeficijentima."},
    {txt:"Standardni oblik (ax + by + c = 0): x − 2y − 6 = 0",note:"Prenosimo sve na lijevu stranu: x − 2y − 6 = 0. Koeficijenti su cijeli.",final:true},{txt:"Točan odgovor: x − 2y − 6 = 0 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula nagiba: k = (y₂−y₁)/(x₂−x₁) = (1−(−2))/(8−2) = 3/6 = 1/2. Nagib mjeri koliko se y povećava po jedinici x — ovdje 0,5 (ili 1 na 2 jedinice po x-osi).",note:"postupak",final:true},{txt:"Intuicija: Jednadžba točka-nagib y−y₁=k(x−x₁) je standardni oblik za pravac kroz zadanu točku s poznatim nagibom. Svejedno je koristimo li A ili B — obje daju isti pravac.",note:"intuicija",final:true},{txt:"Česta greška #2: pogrešan predznak y₁. Za A(2,−2): y₁=−2, dakle y−y₁ = y−(−2) = y+2. Mnogi pišu y−2 (propuštaju dvojni minus).",note:"verifikacija",final:true}
  ],
  why:[
    "Formula nagiba: k = (y₂−y₁)/(x₂−x₁) = (1−(−2))/(8−2) = 3/6 = 1/2. Nagib mjeri koliko se y povećava po jedinici x — ovdje 0,5 (ili 1 na 2 jedinice po x-osi).",
    "Jednadžba točka-nagib y−y₁=k(x−x₁) je standardni oblik za pravac kroz zadanu točku s poznatim nagibom. Svejedno je koristimo li A ili B — obje daju isti pravac.",
    "Česta greška #1: invertirani razlomak u formuli za nagib — uzeti (x₂−x₁)/(y₂−y₁) = 2 umjesto 1/2. Nagib je UVIJEK Δy/Δx, nikad Δx/Δy.",
    "Česta greška #2: pogrešan predznak y₁. Za A(2,−2): y₁=−2, dakle y−y₁ = y−(−2) = y+2. Mnogi pišu y−2 (propuštaju dvojni minus).",
    "Alt oblik: odsječni oblik x/a + y/b = 1 gdje a i b su x i y odsječci. x-odsječak = 6 (za y=0: x=6); y-odsječak = −3 (za x=0: y=−3). Dakle x/6 − y/3 = 1 → x−2y=6 → x−2y−6=0. ✓",
    "Provjera ✓: A(2,−2): 2−2·(−2)−6 = 2+4−6 = 0 ✓; B(8,1): 8−2·1−6 = 0 ✓"
  ]
},
  {id:21.1,type:"proof",topic:"fun",points:1,img:true,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = −x² + 2x + 3. U zadanome koordinatnom sustavu nacrtajte graf funkcije f.",
  sol:{ex:"Parabola otvorena prema dolje, tjeme T(1, 4), nultočke u x = -1 i x = 3, sjecište s y-osi (0, 3)."},
  steps:[
    {txt:"Strategija: odrediti smjer otvaranja, tjeme, nultočke i y-presjek za crtanje parabole.",note:"a=−1<0 → parabola prema DOLJE (⌢). 4 ključne točke dovoljavaju za precizan crtež."},
    {txt:"Tjeme: x_T = −b/(2a) = −2/(2·(−1)) = −2/(−2) = 1",note:"Formula tjemena: x_T = −b/(2a). Ovdje a=−1, b=+2 (koeficijent uz x)."},
    {txt:"y_T = f(1) = −1 + 2 + 3 = 4. Tjeme: T(1, 4)",note:"Uvrštavamo x=1 u originalnu funkciju. Tjeme je MAKSIMUM jer a<0."},
    {txt:"Nultočke: −x²+2x+3=0 → x²−2x−3=0 → (x−3)(x+1)=0 → x=3 i x=−1",note:"Množimo s −1 za urednije računanje. Faktorizacija: tražimo dva broja s umnoškom −3 i zbrojem −2."},
    {txt:"y-presjek: f(0) = 3. Ucrtati parabolu kroz točke (−1,0), (0,3), (1,4), (3,0) s otvorenošću prema dolje.",note:"Parabola je simetrična oko x=1 (os simetrije). Na osi x ima dva odsječka.",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Koeficijent a=−1 određuje smjer: a<0 → parabola prema dolje (⌢, 'kapa'), ima MAKSIMUM u tjemenu. a>0 → prema gore (⌣, 'zdjela'), MINIMUM.",note:"postupak",final:true},{txt:"Intuicija: Tjeme T(1,4) je maksimum — to znači f(x)≤4 za sve x. Nultočke x=−1 i x=3 su gdje parabola sijece x-os. Luk simetrije je x=1 (sredina između −1 i 3 je (−1+3)/2=1 ✓).",note:"intuicija",final:true},{txt:"Česta greška #2: krivo izračunati tjeme kao x=b/(2a) bez minusa → x=2/(−2)=−1. Ispravno je x=−b/(2a)=−2/(−2)=1.",note:"verifikacija",final:true}
  ],
  why:[
    "Koeficijent a=−1 određuje smjer: a<0 → parabola prema dolje (⌢, 'kapa'), ima MAKSIMUM u tjemenu. a>0 → prema gore (⌣, 'zdjela'), MINIMUM.",
    "Tjeme T(1,4) je maksimum — to znači f(x)≤4 za sve x. Nultočke x=−1 i x=3 su gdje parabola sijece x-os. Luk simetrije je x=1 (sredina između −1 i 3 je (−1+3)/2=1 ✓).",
    "Česta greška #1: crtati parabolu prema GORE. Koeficijent a=−1 je negativan → prema dolje. Nemojmo se zbuniti pozitivnim b i c koeficijentima.",
    "Česta greška #2: krivo izračunati tjeme kao x=b/(2a) bez minusa → x=2/(−2)=−1. Ispravno je x=−b/(2a)=−2/(−2)=1.",
    "Alt faktorizacija: f(x) = −(x²−2x−3) = −(x−3)(x+1). Odmah daje nultočke x=3 i x=−1 bez kvadratne jednadžbe. Tada tjeme = sredina = 1.",
    "Provjera ✓: f(−1)=−1−2+3=0 ✓; f(3)=−9+6+3=0 ✓; f(1)=−1+2+3=4 (max) ✓; f(0)=3 ✓"
  ]
},
  {id:21.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Riješite nejednadžbu f(x) ≥ 3 (gdje je f(x) = −x² + 2x + 3) i rješenje napišite s pomoću intervala.",
  sol:{ans:"[0, 2]",alt:["x ∈ [0, 2]","0 ≤ x ≤ 2"]},
  steps:[
    {txt:"Strategija: svesti na 0 s jedne strane i analizirati predznak kvadratne funkcije.",note:"f(x)≥3 ⟺ f(x)−3≥0. Zatim nađemo nultočke i analiziramo predznak."},
    {txt:"f(x) − 3 ≥ 0: −x²+2x+3 − 3 ≥ 0 → −x²+2x ≥ 0",note:"Oduzimamo 3 s obje strane da dobijemo 0 desno."},
    {txt:"Faktoriziramo: −x²+2x = x(2−x) = −x(x−2). Nultočke: x=0 i x=2.",note:"Izvlačimo x iz oba člana: x·(−x+2) = x·(2−x). Nultočke su gdje je izraz = 0."},
    {txt:"Analiza predznaka x(2−x): parabolа prema dolje (koef. uz x² je −1 < 0) → pozitivna IZMEĐU nultočaka.",note:"Za parabolu a<0: krivulja je iznad x-osi između nultočaka (⌢ oblika je gore između korijena)."},
    {txt:"Rješenje: x(2−x) ≥ 0 za x ∈ [0, 2]. Zapisati u intervalnom obliku: [0, 2]",note:"Uključujemo rubove jer ≥ (parabola mijenja predznak, ali na rubovima je jednaka 0 što zadovoljava ≥).",final:true},{txt:"Točan odgovor: [0, 2] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Svođenje nejednadžbe na f(x)−3≥0 je standardna tehnika. Dobivamo x(2−x)≥0 što je kvadratna nejednadžba s nultočkama x=0 i x=2.",note:"postupak",final:true},{txt:"Intuicija: Predznak kvadratne funkcije x(2−x) = −x²+2x: vodeći koeficijent (uz x²) je −1<0 → parabola prema dolje → pozitivna između nultočaka (0, 2) i negativna izvana. Dakle rješenje je [0, 2].",note:"intuicija",final:true},{txt:"Česta greška: pisati x ≤ 0 ili x ≥ 2 — to je rješenje za parabolu prema GORE (⌣). Za a=−1<0 vrijedi suprotno.",note:"verifikacija",final:true}
  ],
  why:[
    "Svođenje nejednadžbe na f(x)−3≥0 je standardna tehnika. Dobivamo x(2−x)≥0 što je kvadratna nejednadžba s nultočkama x=0 i x=2.",
    "Predznak kvadratne funkcije x(2−x) = −x²+2x: vodeći koeficijent (uz x²) je −1<0 → parabola prema dolje → pozitivna između nultočaka (0, 2) i negativna izvana. Dakle rješenje je [0, 2].",
    "Pamtilo: Parabola ⌢ (prema dolje) ≥ 0 IZMEĐU nultočaka. Parabola ⌣ (prema gore) ≥ 0 IZVAN nultočaka. Ovo je suprotno od intuicije pa je česta greška!",
    "Česta greška: pisati x ≤ 0 ili x ≥ 2 — to je rješenje za parabolu prema GORE (⌣). Za a=−1<0 vrijedi suprotno.",
    "Alt metoda: direktno iz grafa f(x) = −x²+2x+3 (nacrtan u zadatku 21a). Tražimo gdje je f(x) ≥ 3, tj. gdje je krivulja na ili iznad horizontalne linije y=3. Iz grafa vidljivo: x ∈ [0, 2].",
    "Provjera ✓: x=1 ∈ [0,2]: x(2−x)=1·1=1≥0 ✓. x=−1 ∉ [0,2]: (−1)(3)=−3<0 ✓. x=0: 0=0≥0 ✓. x=2: 0=0≥0 ✓"
  ]
},
  {id:22.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Čemu je jednak x ako je log x = log a + log b − log c, gdje su a, b, c pozitivni brojevi?",
  sol:{ans:"x = [FRAC:ab|c]",alt:["X = [FRAC:ab|c]","x = [FRAC:ab|c]","x=[FRAC:ab|c]","≈ x = [FRAC:ab|c]"]},
  steps:[
    {txt:"Strategija: koristiti pravila logaritma za zbrajanje i oduzimanje pa izjednačiti logove.",note:"Pravila: log A + log B = log(AB); log A − log B = log(A/B). Vrijede za log₁₀ i za svaku drugu bazu."},
    {txt:"Zbrajamo prve dvije: log a + log b = log(a · b)",note:"Pravilo množenja logaritama: log A + log B = log(AB). Baza mora biti ista s obje strane."},
    {txt:"Oduzimamo: log(ab) − log c = log([FRAC:ab|c])",note:"Pravilo dijeljenja: log A − log B = log(A/B). Dobivamo jedan logaritam."},
    {txt:"Jednadžba: log x = log([FRAC:ab|c]). Pošto je log bijekcija: x = [FRAC:ab|c]",note:"Ako log A = log B (iste baze), onda A = B (logaritam je injekcija — različitim argumentima odgovaraju različite vrijednosti).",final:true},{txt:"Točan odgovor: x = [FRAC:ab|c] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravila logaritama: log(AB) = log A + log B; log(A/B) = log A − log B; log(Aⁿ) = n·log A. Vrijede za svaku bazu b>0, b≠1. Ovdje koristimo prva dva.",note:"postupak",final:true},{txt:"Intuicija: Ključni uvjet: a, b, c su POZITIVNI brojevi (log je definiran samo za pozitivne argumente). Ako bi a, b ili c bili ≤ 0, log ne bi bio definiran.",note:"intuicija",final:true},{txt:"Česta greška #2: zamijeniti znak: log a − log c = log(a/c) (točno), ali log c − log a = log(c/a) ≠ log(a/c). Redoslijed pri oduzimanju je važan.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravila logaritama: log(AB) = log A + log B; log(A/B) = log A − log B; log(Aⁿ) = n·log A. Vrijede za svaku bazu b>0, b≠1. Ovdje koristimo prva dva.",
    "Ključni uvjet: a, b, c su POZITIVNI brojevi (log je definiran samo za pozitivne argumente). Ako bi a, b ili c bili ≤ 0, log ne bi bio definiran.",
    "Česta greška #1: log(a+b−c) ≠ log a + log b − log c. Logaritam ZBROJA nije zbroj logaritama! log A + log B = log(A·B), ne log(A+B).",
    "Česta greška #2: zamijeniti znak: log a − log c = log(a/c) (točno), ali log c − log a = log(c/a) ≠ log(a/c). Redoslijed pri oduzimanju je važan.",
    "Alt metoda (ekspotencijalni pristup): 10^(log x) = 10^(log a + log b − log c) = 10^(log a) · 10^(log b) / 10^(log c) = a · b / c. Dakle x = ab/c.",
    "Provjera ✓: za a=6, b=2, c=3: log 12 − log 3 = log 4; x=4=12/3 ✓. Za a=1, b=1, c=1: log 1 = 0 = log 1; x=1=1/1 ✓"
  ]
},
  {id:22.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"Odredite nultočke funkcije f(x) = |x + 1| − 3.",
  sol:{ans:"x = -4 i x = 2",alt:["-4 i 2","x₁ = -4, x₂ = 2"]},
  steps:[
    {txt:"Strategija: iz definicije nultočaka f(x)=0 → |x+1|=3. Apsolutna vrijednost = k (k>0) daje dva slučaja.",note:"Nultočke: gdje krivulja križi x-os. Ovaj zadatak je linearni s apsolutnom vrijednošću."},
    {txt:"Slučaj 1 (x+1 ≥ 0, tj. x ≥ −1): |x+1| = x+1. Jednadžba: x+1 = 3 → x = 2",note:"Za x ≥ −1: izraz u apsolutnoj vrijednosti je nenegativan, pa |A| = A."},
    {txt:"Slučaj 2 (x+1 < 0, tj. x < −1): |x+1| = −(x+1). Jednadžba: −(x+1) = 3 → x+1 = −3 → x = −4",note:"Za x < −1: izraz je negativan, pa |A| = −A. Provjera: je li x=−4 < −1? Da ✓"},
    {txt:"Nultočke su x = −4 i x = 2. Provjera obje.",note:"Uvijek provjeriti oba rješenja u originalnoj jednadžbi.",final:true},{txt:"Točan odgovor: x = -4 i x = 2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Apsolutna vrijednost |A| = A za A ≥ 0 i |A| = −A za A < 0. Jednadžba |A| = k (k>0) uvijek ima točno 2 rješenja: A = k i A = −k.",note:"postupak",final:true},{txt:"Intuicija: Geometrijska interpretacija: f(x) = |x+1|−3 je V-oblik s tjemenom u (−1, −3). Siječe x-os u dvjema točkama simetričnim oko x=−1: na udaljenosti 3 od tjemena, dakle x=−1+3=2 i x=−1−3=−4.",note:"intuicija",final:true},{txt:"Česta greška #2: |x+1|=3 → x=3−1=2 (samo oduzimanje 1 bez razmatranja negativnog slučaja). Ispravno: A=3 ili A=−3, zatim izoliramo x u svakom slučaju.",note:"verifikacija",final:true}
  ],
  why:[
    "Apsolutna vrijednost |A| = A za A ≥ 0 i |A| = −A za A < 0. Jednadžba |A| = k (k>0) uvijek ima točno 2 rješenja: A = k i A = −k.",
    "Geometrijska interpretacija: f(x) = |x+1|−3 je V-oblik s tjemenom u (−1, −3). Siječe x-os u dvjema točkama simetričnim oko x=−1: na udaljenosti 3 od tjemena, dakle x=−1+3=2 i x=−1−3=−4.",
    "Česta greška #1: uzeti samo pozitivni slučaj → jedino x=2. Propušta se x=−4. Uvijek su ISTA slučaja za |A|=k>0.",
    "Česta greška #2: |x+1|=3 → x=3−1=2 (samo oduzimanje 1 bez razmatranja negativnog slučaja). Ispravno: A=3 ili A=−3, zatim izoliramo x u svakom slučaju.",
    "Alt metoda: grafički — f(x)=|x+1|−3 = |x−(−1)|−3 je paraboloid u obliku V s tjemenom (−1,−3). Nultočke su gdje je krivulja na y=0 → na udaljenosti 3 od tjemena.",
    "Provjera ✓: f(2) = |2+1|−3 = 3−3 = 0 ✓; f(−4) = |−4+1|−3 = |−3|−3 = 3−3 = 0 ✓; f(0) = 1−3 = −2 ≠ 0 ✓"
  ]
},
  {id:23.1,type:"proof",topic:"br",points:1,img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"U kompleksnoj ravnini prikažite broj z = 4i.",
  sol:{ex:"Točka (0, 4) na imaginarnoj osi.",svgFn:SvgSol23_1_2014JA},
  steps:[
    {txt:"Strategija: prepoznati da z=4i = 0+4i ima Re(z)=0 i Im(z)=4. Ucrtati točku (0,4).",note:"Kompleksna ravnina: x-os = Re (realna os), y-os = Im (imaginarna os). Svaki z=a+bi → točka (a,b)."},
    {txt:"z = 4i = 0 + 4i → Re(z) = 0 (nema realnog dijela), Im(z) = 4",note:"Čisto imaginarni broj je na imaginarnoj osi (x=0)."},
    {txt:"Točka: (Re(z), Im(z)) = (0, 4) — na imaginarnoj osi, 4 jedinice iznad ishodišta",note:"Na y-osi (imaginarnoj) pri y=4. Označi točku s 'z = 4i'."},
    {txt:"Ucrtati i označiti: modul |z|=4 (udaljenost od ishodišta), argument arg(z)=π/2 (90°)",note:"Polarni prikaz: z = 4(cos(π/2)+i·sin(π/2)). Ovo potvrđuje poziciju na Im-osi.",final:true},{txt:"Točan odgovor: kao u rješenju ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kompleksna ravnina: svaki z=a+bi se prikazuje kao točka (a,b) gdje a=Re(z) je x-koordinata, b=Im(z) je y-koordinata. Realni brojevi (b=0) leže na x-osi, čisto imaginarni (a=0) leže na y-osi.",note:"postupak",final:true},{txt:"Intuicija: z=4i=0+4i: točka (0,4) na imaginarnoj osi (y-osi). Modul |4i|=√(0²+4²)=4 = udaljenost od O. Argument arg(4i)=π/2=90° jer je točka na pozitivnoj imaginarnoj osi.",note:"intuicija",final:true},{txt:"Česta greška #2: zaboraviti obilježiti točku na grafu ili izostaviti os s labelama Im i Re.",note:"verifikacija",final:true}
  ],
  why:[
    "Kompleksna ravnina: svaki z=a+bi se prikazuje kao točka (a,b) gdje a=Re(z) je x-koordinata, b=Im(z) je y-koordinata. Realni brojevi (b=0) leže na x-osi, čisto imaginarni (a=0) leže na y-osi.",
    "z=4i=0+4i: točka (0,4) na imaginarnoj osi (y-osi). Modul |4i|=√(0²+4²)=4 = udaljenost od O. Argument arg(4i)=π/2=90° jer je točka na pozitivnoj imaginarnoj osi.",
    "Česta greška #1: ucrtati (4,0) umjesto (0,4) — zamijeniti os. Imaginarni dio (4) ide na y-os, ne x-os.",
    "Česta greška #2: zaboraviti obilježiti točku na grafu ili izostaviti os s labelama Im i Re.",
    "Geometrija: 4i je 'gore' na imaginarnoj osi, nasuprotno od −4i koje bi bilo 'dolje'. Rotacijom 90° od pozitivne realne osi dolazimo do 4i.",
    "Provjera ✓: (0,4) na Im-osi; |4i|=4 ✓; arg(4i)=π/2 ✓"
  ]
},
  {id:23.2,type:"sa",topic:"br",points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Zadan je kompleksan broj z = a − 2i, gdje je a realan broj. Koliko je z̄ − 2z?",
  sol:{ans:"−a + 6i",alt:["-a + 6i","-a+6i"]},
  steps:[
    {txt:"Strategija: izračunati konjugat z̄ i dvostruki 2z, pa oduzeti.",note:"Konjugat: z = x+yi → z̄ = x−yi (promijenimo predznak imaginarnog dijela)."},
    {txt:"z = a − 2i → konjugat: z̄ = a + 2i",note:"Re(z) = a ostaje. Im(z) = −2 → Im(z̄) = +2. Konjugat samo mijenja predznak imaginarne komponente."},
    {txt:"2z = 2·(a − 2i) = 2a − 4i",note:"Množenje kompleksnog broja s realnim skalarom 2: množimo oba dijela (realni i imaginarni) s 2."},
    {txt:"Oduzimanje: z̄ − 2z = (a + 2i) − (2a − 4i)",note:"Oduzimanje kompleksnih: odvojeno za realni i imaginarni dio."},
    {txt:"Realni dio: a − 2a = −a. Imaginarni dio: 2i − (−4i) = 2i + 4i = 6i. Rezultat: −a + 6i",note:"Sada je odgovor potpuno izražen: realni dio je −a, imaginarni je 6.",final:true},{txt:"Točan odgovor: −a + 6i ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Konjugat kompleksnog broja z = x+yi je z̄ = x−yi. Re(z) ostaje, Im se negira. Geometrijski: refleksija preко realne osi u kompleksnoj ravnini.",note:"postupak",final:true},{txt:"Intuicija: Operacije s kompleksnim brojevima su identične kao s realnim, ali pratimo realni i imaginarni dio zasebno: Re(z₁±z₂) = Re(z₁)±Re(z₂); Im(z₁±z₂) = Im(z₁)±Im(z₂); Re(k·z) = k·Re(z); Im(k·z) = k·Im(z).",note:"intuicija",final:true},{txt:"Česta greška #2: z̄ = a − 2i (ne mijenjanje predznaka) → konjugat je isti kao z. Konjugat a+bi je a−bi (i obratno).",note:"verifikacija",final:true}
  ],
  why:[
    "Konjugat kompleksnog broja z = x+yi je z̄ = x−yi. Re(z) ostaje, Im se negira. Geometrijski: refleksija preко realne osi u kompleksnoj ravnini.",
    "Operacije s kompleksnim brojevima su identične kao s realnim, ali pratimo realni i imaginarni dio zasebno: Re(z₁±z₂) = Re(z₁)±Re(z₂); Im(z₁±z₂) = Im(z₁)±Im(z₂); Re(k·z) = k·Re(z); Im(k·z) = k·Im(z).",
    "Česta greška #1: 2z = 2a − 2i (propušteno množiti 2 s imaginarnim dijelom −2i). Ispravno: 2·(a−2i) = 2a−4i.",
    "Česta greška #2: z̄ = a − 2i (ne mijenjanje predznaka) → konjugat je isti kao z. Konjugat a+bi je a−bi (i obratno).",
    "Alt: izraziti svaki dio odvojeno: Re(z̄−2z) = Re(z̄) − 2·Re(z) = a − 2a = −a; Im(z̄−2z) = Im(z̄) − 2·Im(z) = 2 − 2·(−2) = 2+4 = 6. Dakle −a+6i.",
    "Provjera ✓: za a=3: z=3−2i, z̄=3+2i, 2z=6−4i; z̄−2z = (3+2i)−(6−4i) = 3+2i−6+4i = −3+6i = −a+6i ✓"
  ]
},
  {id:24.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (1. dio od 2): Buket se sastoji od ruža i kompleta ukrasnoga bilja. Na svake tri ruže u buket se stavlja jedan komplet ukrasnoga bilja (tako da uz 6, 7 ili 8 ruža idu dva kompleta). Cijenik: jedna ruža 12 kn, jedan komplet ukrasnoga bilja 15 kn, jedan ukrasni papir 8 kn, izrada jednoga buketa 20 kn.",
  q:"Koliko je kupac platio buket s 11 ruža?",
  sol:{ans:"205 kn",alt:["205","205 kn","≈ 205 kn"],svgFn:SvgTbl24_2014JA},
  steps:[
    {txt:"Strategija: odrediti broj kompleta za 11 ruža (pravilo ⌊n/3⌋), izračunati svaku stavku i zbrojiti.",note:"Cijenik: 1 ruža = 12 kn; 1 komplet = 15 kn; 1 papir = 8 kn; izrada = 20 kn."},
    {txt:"Broj kompleta: ⌊11/3⌋ = ⌊3,67⌋ = 3 kompleta (zaokruživanje prema dolje = cijelo dijeljenje)",note:"Pravilo: 1 komplet na svake PUNE 3 ruže. 3 pune trojke = 9 ruža (kompleti za 9, 10, 11 su 3)."},
    {txt:"Ruže: 11 · 12 kn = 132 kn",note:"Svaka ruža = 12 kn. 11 ruža = 11 × 12 = 132 kn."},
    {txt:"Kompleti: 3 · 15 kn = 45 kn",note:"3 kompleta × 15 kn svaki."},
    {txt:"Fiksni troškovi: papir (8 kn) + izrada (20 kn) = 28 kn. Ukupno: 132 + 45 + 28 = 205 kn",note:"Zbroj: 132+45=177; 177+28=205 kn.",final:true},{txt:"Točan odgovor: 205 kn ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ključno: broj kompleta = ⌊n/3⌋ (cijelo dijeljenje s 3, NE zaokruživanje). Za n=11: ⌊11/3⌋ = ⌊3,67⌋ = 3. Kompleti idu za svake PUNE 3 ruže: 1-3 ruže → 1; 4-6 → 2; 7-9 → 3; 10-12 → 4 NE! Ponovo: do 9 = 3, 10,11,12 sve još...",note:"postupak",final:true},{txt:"Intuicija: Wait — preprovjerimo: uz 6, 7 ili 8 ruža stavljaju se DVA kompleta (citat iz zadatka). Dakle 6 → 2, 9 → 3, 10 → 3, 11 → 3. Svaka trojna skupina = 1 novi komplet. 11 / 3 = 3 pune trojke (9 ruža = 3 kompleta, 10. i 11. dodaju još...",note:"intuicija",final:true},{txt:"Česta greška #2: zaboraviti fiksne troškove papira (8 kn) i izrade (20 kn). Bez njih: 132+45 = 177 kn ≠ 205 kn.",note:"verifikacija",final:true}
  ],
  why:[
    "Ključno: broj kompleta = ⌊n/3⌋ (cijelo dijeljenje s 3, NE zaokruživanje). Za n=11: ⌊11/3⌋ = ⌊3,67⌋ = 3. Kompleti idu za svake PUNE 3 ruže: 1-3 ruže → 1; 4-6 → 2; 7-9 → 3; 10-12 → 4 NE! Ponovo: do 9 = 3, 10,11,12 sve još uvijek = 3, 4. kompleta tek od 12.",
    "Wait — preprovjerimo: uz 6, 7 ili 8 ruža stavljaju se DVA kompleta (citat iz zadatka). Dakle 6 → 2, 9 → 3, 10 → 3, 11 → 3. Svaka trojna skupina = 1 novi komplet. 11 / 3 = 3 pune trojke (9 ruža = 3 kompleta, 10. i 11. dodaju još po 0 novih kompleta). ⌊11/3⌋ = 3 ✓",
    "Česta greška #1: koristiti ⌈11/3⌉ = 4 kompleta (zaokruživanje gore). Prema zadatku uz 10-11 ruža = 3 kompleta (4. komplet tek uz 12). ⌊n/3⌋, ne ⌈n/3⌉.",
    "Česta greška #2: zaboraviti fiksne troškove papira (8 kn) i izrade (20 kn). Bez njih: 132+45 = 177 kn ≠ 205 kn.",
    "Provjera ✓: 11 ruža × 12 = 132; 3 kompleta × 15 = 45; 1 papir = 8; izrada = 20. Ukupno: 132+45+8+20 = 205 kn ✓"
  ,"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake."]
},
  {id:24.2,type:"sa",topic:"al",points:1,
  context:"Zadatak 24 (2. dio od 2): Cijenik: 1 ruža = 12 kn; 1 komplet = 15 kn (uz svake 3 ruže); papir + izrada = 28 kn.",
  q:"Koliko je ruža u buketu koji košta 283 kn?",
  sol:{ans:"15 ruža",alt:["15 ruža","≈ 15 ruža"],svgFn:SvgTbl24_2014JA},
  steps:[
    {txt:"Strategija: smanjiti na cijenu bez papira i izrade (fiksnih 28 kn), zatim pronaći n probanjem.",note:"Fiksni troškovi = 8+20 = 28 kn za svaki buket. Preostaje: 283−28 = 255 kn za ruže i kompleta."},
    {txt:"Jednadžba: 12n + 15·⌊n/3⌋ = 255",note:"Probamo n=12: 12·12+15·4=144+60=204 ≠ 255. Probamo n=15: 12·15+15·5=180+75=255 ✓"},
    {txt:"n=15: ⌊15/3⌋ = 5 kompleta. Ruže: 15·12=180 kn. Kompleti: 5·15=75 kn. Ukupno: 180+75=255 ✓",note:"Provjereno: 180+75+28 = 283 kn ✓"},
    {txt:"Provjera i susjednih vrijednosti: n=14: 168+60=228≠255; n=16: 192+75=267≠255. Jedino n=15.",note:"Provjera da nema drugog rješenja."},
    {txt:"Buket ima 15 ruža.",note:"Odgovor: 15 ruža.",final:true},{txt:"Točan odgovor: 15 ruža ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Strategija rješavanja: (1) oduzimamo fiksne troškove 28 kn → ostaje 255 kn za ruže + kompleta; (2) probamo n po grupama od 3 (jer se ⌊n/3⌋ mijenja svakih 3 ruža).",note:"postupak",final:true},{txt:"Intuicija: Cijenovna funkcija C(n) = 12n + 15·⌊n/3⌋ + 28 nije bijektivna u realnim brojevima ali jest na cijelim. Probamo n = 3, 6, 9, 12, 15, 18 → n=15 jedini daje 255 za varijabilni dio.",note:"intuicija",final:true},{txt:"Česta greška #2: zanemariti da ⌊n/3⌋ skače — za n=14: ⌊14/3⌋=4 (ne 5). Probanja su neophodna.",note:"verifikacija",final:true}
  ],
  why:[
    "Strategija rješavanja: (1) oduzimamo fiksne troškove 28 kn → ostaje 255 kn za ruže + kompleta; (2) probamo n po grupama od 3 (jer se ⌊n/3⌋ mijenja svakih 3 ruža).",
    "Cijenovna funkcija C(n) = 12n + 15·⌊n/3⌋ + 28 nije bijektivna u realnim brojevima ali jest na cijelim. Probamo n = 3, 6, 9, 12, 15, 18 → n=15 jedini daje 255 za varijabilni dio.",
    "Česta greška #1: pisati 12n + 5n = 17n → n = 255/17 = 15. Ovo slučajno daje točan rezultat za n=15 (jer 15/3=5), ali to NIJE ispravna metoda — 15·⌊n/3⌋ ≠ 5n za opći n.",
    "Česta greška #2: zanemariti da ⌊n/3⌋ skače — za n=14: ⌊14/3⌋=4 (ne 5). Probanja su neophodna.",
    "Provjera ✓: 15 ruža: 15·12 + ⌊15/3⌋·15 + 28 = 180 + 5·15 + 28 = 180+75+28 = 283 kn ✓. n=14: 168+60+28=256≠283 ✓"
  ,"Provjera supstitucijom: uvrsti x = 15 ruža u L = D; rezultati se moraju podudarati."]
},
  {id:25.1,type:"sa",topic:"kon",points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Točka T(4, y) leži na paraboli y² = 2px. Udaljenost točke T od ravnalice (direktrise) parabole iznosi 7. Kako glasi jednadžba te parabole?",
  sol:{ans:"y² = 12x",alt:["Y² = 12x","y² = 12x","y²=12x","≈ y² = 12x"]},
  steps:[
    {txt:"Strategija: koristiti defin. osobinu parabole y²=2px: udaljenost točke od ravnalice = x₀ + p/2.",note:"Parabola y²=2px ima žarište F(p/2, 0) i ravnalicu x=−p/2. Svaka točka (x,y) na paraboli zadovoljava: udaljenost do žarišta = udaljenost do ravnalice = x + p/2."},
    {txt:"T(4, y) na paraboli: udaljenost od ravnalice x=−p/2 je: d = 4 − (−p/2) = 4 + p/2",note:"Udaljenost točke (4, y) od pravca x=−p/2 je horizontalna razlika: 4 − (−p/2) = 4+p/2."},
    {txt:"Postavljamo uvjet: 4 + p/2 = 7 → p/2 = 3 → p = 6",note:"Rješavamo po p: oduzimamo 4 s obje strane, množimo s 2."},
    {txt:"Jednadžba parabole: y² = 2 · 6 · x = 12x",note:"Uvrstimo p=6 u standardnu formu y²=2px.",final:true},{txt:"Točan odgovor: y² = 12x ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Parabola y²=2px (os po x-osi, tjeme u ishodištu): žarište F(p/2, 0), ravnalica x=−p/2. Ključna definicija: svaka točka parabole je jednako udaljena od žarišta i ravnalice.",note:"postupak",final:true},{txt:"Intuicija: Za točku T(4, y) na paraboli: udaljenost od ravnalice x=−p/2 je jednostavno 4+p/2 (bez kvadriranja jer je pravac x=konstanta). Postavljamo 4+p/2=7 i dobivamo p=6.",note:"intuicija",final:true},{txt:"Česta greška #2: zaboraviti da je T(4,y) na paraboli, tj. y²=2p·4=8p. Nije potrebno izračunati y, ali korisno za provjeru: y²=12·4=48 → y=±4√3.",note:"verifikacija",final:true}
  ],
  why:[
    "Parabola y²=2px (os po x-osi, tjeme u ishodištu): žarište F(p/2, 0), ravnalica x=−p/2. Ključna definicija: svaka točka parabole je jednako udaljena od žarišta i ravnalice.",
    "Za točku T(4, y) na paraboli: udaljenost od ravnalice x=−p/2 je jednostavno 4+p/2 (bez kvadriranja jer je pravac x=konstanta). Postavljamo 4+p/2=7 i dobivamo p=6.",
    "Česta greška #1: koristiti formulu za udaljenost od žarišta √((4−p/2)²+y²) umjesto od ravnalice. Oba pristupa daju isti p ali formula ravnalice je jednostavnija.",
    "Česta greška #2: zaboraviti da je T(4,y) na paraboli, tj. y²=2p·4=8p. Nije potrebno izračunati y, ali korisno za provjeru: y²=12·4=48 → y=±4√3.",
    "Alt: T je na paraboli → zadovoljava jednadžbu. Jednadžba parabole y²=2px. Udaljenost T od ravnalice = 4+p/2 = 7 → p=6. Provjera T na paraboli y²=12x: točka T=(4,y) daje y²=48 → y=±4√3, i |T do ravnalice| = 4+3 = 7 ✓.",
    "Provjera ✓: p=6 → ravnalica x=−3. T(4,y): udaljenost = 4−(−3) = 7 ✓. Jednadžba y²=12x — za T(4,y): y²=48 → T je na paraboli ✓"
  ]
},
  {id:25.2,type:"sa",topic:"geom",points:1,img:true,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Duljine stranica trokuta ABC prikazanoga na skici iznose |AB| = 12 cm, |BC| = 5 cm i |AC| = 9 cm. Za kutove vrijedi ∠BAC ≅ ∠BCD. Izračunajte duljinu dužine CD.",
  sol:{ans:"|CD| = 3,75 cm",alt:["3,75","15/4"]},
  steps:[
    {txt:"Strategija: prepoznati slične trokute (AA kriterij), postaviti omjer stranica.",note:"Slični trokuti: △ABC i △DCB. ∠B je zajednički, ∠BAC = ∠BCD (dano) → AA."},
    {txt:"AA kriterij sličnosti: △ABC ~ △DCB. Pažnja na redoslijed vrhova!",note:"Redoslijed: A↔D, B↔C, C↔B. Dakle: AB odgovara DC; BC odgovara CB; CA odgovara BD."},
    {txt:"Omjer odgovarajućih stranica: BC/BA = CD/CA",note:"Iz sličnosti △ABC ~ △DCB: BC odgovara BA (oba se dijele na isti kut ∠B); CD odgovara CA. Dakle BC/BA = CD/CA."},
    {txt:"Uvrstimo: 5/12 = CD/9 → CD = 5 · 9 / 12 = 45/12 = 3,75 cm",note:"Množimo obje strane s 9: CD = 9 · (5/12) = 45/12 = 15/4 = 3,75 cm.",final:true},{txt:"Točan odgovor: |CD| = 3,75 cm ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: AA kriterij sličnosti: ako se dva trokuta podudaraju u dva kuta, sudaraju se u svim trima kutovima (jer zbroj kutova trokuta = 180°). Ovdje: ∠B zajednički + ∠BAC = ∠BCD → △ABC ~ △DCB.",note:"postupak",final:true},{txt:"Intuicija: Kritično je točan redoslijed vrhova u zapisu sličnosti. △ABC ~ △DCB znači: A↔D, B↔C, C↔B. Odgovarajuće stranice su AB↔DC, BC↔CB, CA↔BD. Iz toga: BC/BA = CD/CA (= DC/AB = CB/BC).",note:"intuicija",final:true},{txt:"Česta greška #2: mješanje kutova — ∠BAC i ∠BCD su zadani kao jednaki, ali moramo provjeriti koji par kutova odgovara u sličnosti (to su kutovi nasuprot istim stranicama).",note:"verifikacija",final:true}
  ],
  why:[
    "AA kriterij sličnosti: ako se dva trokuta podudaraju u dva kuta, sudaraju se u svim trima kutovima (jer zbroj kutova trokuta = 180°). Ovdje: ∠B zajednički + ∠BAC = ∠BCD → △ABC ~ △DCB.",
    "Kritično je točan redoslijed vrhova u zapisu sličnosti. △ABC ~ △DCB znači: A↔D, B↔C, C↔B. Odgovarajuće stranice su AB↔DC, BC↔CB, CA↔BD. Iz toga: BC/BA = CD/CA (= DC/AB = CB/BC).",
    "Česta greška #1: pogrešni omjer — pisati BC/AB = CD/BC umjesto BC/BA = CD/CA. Stranice moraju biti iz ISTOG trokuta u jednom omjeru, i ISTOG drugog trokuta u drugom.",
    "Česta greška #2: mješanje kutova — ∠BAC i ∠BCD su zadani kao jednaki, ali moramo provjeriti koji par kutova odgovara u sličnosti (to su kutovi nasuprot istim stranicama).",
    "Alt metoda: kosinusov poučak za ∠B u △ABC: BC² = AB² + AC² − 2·AB·AC·cos(∠BAC). Zatim isto za △DCB. Dulje ali ne zahtijeva prepoznavanje sličnosti.",
    "Provjera ✓: BC/BA = 5/12 = 0,417; CD/CA = 3,75/9 = 0,417 ✓. Omjeri jednaki → sličnost potvrđena ✓"
  ]
},
  {id:26.1,type:"sa",topic:"trig",points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Koliki je temeljni period funkcije f(x) = 2 · cos(8x)?",
  sol:{ans:"T = [FRAC:π|4]",alt:["π/4","pi/4"]},
  steps:[
    {txt:"Strategija: prepoznati standardni oblik A·cos(ωx) i primijeniti T=2π/ω.",note:"Amplituda A ne utječe na period. Samo kružna frekvencija ω određuje period."},
    {txt:"Iz f(x) = 2·cos(8x): A=2 (amplituda), ω=8 (kružna frekvencija)",note:"Amplituda A=2 znači oscilacija između −2 i +2. ω=8 govori o brzini oscilacije."},
    {txt:"Formula perioda: T = 2π/ω = 2π/8 = [FRAC:π|4]",note:"2π/8 = π/4. Largom frekvencijom ω=8 funkcija ima kraći period nego osnovni kosinus (T=2π).",final:true},{txt:"Točan odgovor: T = [FRAC:π|4] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula za period trigonometrijskih funkcija: T = 2π/ω za A·cos(ωx) ili A·sin(ωx). Intuicija: kosinus završi jedan puni ciklus kad je argument prešao 2π, tj. ωx=2π → x=2π/ω.",note:"postupak",final:true},{txt:"Intuicija: Amplituda A=2 NE ulazi u formulu za period. A samo mijenja visinu krivulje (između −2 i +2 umjesto −1 i +1). Period je isključivo funkcija ω.",note:"intuicija",final:true},{txt:"Česta greška #2: T = 2π·ω = 16π (množiti umjesto dijeliti). Period i frekvencija su obrnuto proporcionalni: veći ω → kraći T.",note:"verifikacija",final:true},{txt:"Provjera: kut između 0 i 360° (ili 0 i 2π) — provjeri kvadrant.",note:"verifikacija",final:true}
  ],
  why:[
    "Formula za period trigonometrijskih funkcija: T = 2π/ω za A·cos(ωx) ili A·sin(ωx). Intuicija: kosinus završi jedan puni ciklus kad je argument prešao 2π, tj. ωx=2π → x=2π/ω.",
    "Amplituda A=2 NE ulazi u formulu za period. A samo mijenja visinu krivulje (između −2 i +2 umjesto −1 i +1). Period je isključivo funkcija ω.",
    "Česta greška #1: T = 2π/A = 2π/2 = π (koristiti amplitudu A umjesto frekvencije ω). Uvijek koristiti ω (koeficijent uz x), ne A.",
    "Česta greška #2: T = 2π·ω = 16π (množiti umjesto dijeliti). Period i frekvencija su obrnuto proporcionalni: veći ω → kraći T.",
    "Provjera metodom nultočke: cos(8x)=1 pri x=0. Sljedeći put cos(8x)=1 kad 8x=2π → x=π/4. Dakle T=π/4 ✓.",
    "Provjera ✓: f(0)=2·cos(0)=2; f(π/4)=2·cos(2π)=2 ✓ — period je π/4 ✓"
  ]
},
  {id:26.2,type:"sa",topic:"trig",points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Odredite opće rješenje jednadžbe tg x = 2.",
  sol:{ans:"x = arctg 2 + kπ ≈ 1,107149 + kπ, k ∈ ℤ",alt:["arctg(2) + kπ","1,107149 + kπ","x = arctg 2 + kπ"]},
  steps:[
    {txt:"Strategija: inverzan tangens daje glavno rješenje, kπ daje sve ostale.",note:"tg x ima period π (za razliku od sin/cos koji imaju 2π). Na svakom intervalu duljine π postoji točno jedno rješenje."},
    {txt:"Glavno rješenje: x₀ = arctg 2 ≈ 1,107149 rad (u 1. kvadrantu, jer tg 2 > 0)",note:"arctg vraća vrijednost u (−π/2, π/2). Jer 2 > 0, rješenje je u 1. kvadrantu."},
    {txt:"Opće rješenje: x = arctg 2 + kπ, k ∈ ℤ",note:"Svaki kπ daje novo rješenje jer je period tangensa π. Skup svih rješenja je beskonačan."},
    {txt:"Decimalni oblik: x ≈ 1,107149 + kπ, k ∈ ℤ (ili x ≈ 63°26′ + k·180°, k ∈ ℤ)",note:"Radijani su standardni oblik za derivacije i integracije; stupnjevi za geometrijske probleme.",final:true},{txt:"Točan odgovor: x = arctg 2 + kπ ≈ 1,107149 + kπ, k ∈ ℤ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Temeljna formula: tg x = a ⟺ x = arctg a + kπ, k ∈ ℤ. Period tangensa je π jer tg(x+π) = tg x — funkcija se ponavlja svakih π. Za razliku od sin/cos (period 2π), tangens ima upola kraći period.",note:"postupak",final:true},{txt:"Intuicija: arctg 2 ≈ 1,1071 rad ≈ 63,43° — kut u 1. kvadrantu čiji tangens je 2. U 2. kvadrantu: 1,1071 + π ≈ 4,25 rad ≈ 243,43°. U oba je tg x = 2 jer tg(α+π) = tg α.",note:"intuicija",final:true},{txt:"Česta greška #2: samo pozitivno rješenje x₀ bez 'kπ' dijela. Jednadžba ima beskonačno rješenja (periodički).",note:"verifikacija",final:true}
  ],
  why:[
    "Temeljna formula: tg x = a ⟺ x = arctg a + kπ, k ∈ ℤ. Period tangensa je π jer tg(x+π) = tg x — funkcija se ponavlja svakih π. Za razliku od sin/cos (period 2π), tangens ima upola kraći period.",
    "arctg 2 ≈ 1,1071 rad ≈ 63,43° — kut u 1. kvadrantu čiji tangens je 2. U 2. kvadrantu: 1,1071 + π ≈ 4,25 rad ≈ 243,43°. U oba je tg x = 2 jer tg(α+π) = tg α.",
    "Česta greška #1: pisati x = arctg 2 + 2kπ (period 2π kao za sin/cos). Ovo propušta svako drugo rješenje (npr. x ≈ 4,25 kad k=1 u ispravnoj formuli). Za tangens UVIJEK kπ, ne 2kπ.",
    "Česta greška #2: samo pozitivno rješenje x₀ bez 'kπ' dijela. Jednadžba ima beskonačno rješenja (periodički).",
    "Alt provjera: za k=1: x ≈ 1,1071+3,1416 ≈ 4,249 rad. tg(4,249) ≈ tg(4,249 − π) = tg(1,107) ≈ 2 ✓. Za k=−1: x ≈ 1,107−3,142 ≈ −2,034. tg(−2,034) = tg(−2,034+π) = tg(1,107) ≈ 2 ✓.",
    "Provjera ✓: tg(arctg 2) = 2 ✓ (po definiciji arctg). tg(arctg2 + π) = tg(arctg2) = 2 ✓ (period)"
  ]
},
  {id:27.1,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Riješite jednadžbu √(2x − 1) = 4.",
  sol:{ans:"x = 8,5 = [FRAC:17|2]",alt:["8,5","17/2"]},
  solFormula:{pre:"x = 8,5 = ", frac:[["17","2"]]},
  steps:[
    {txt:"Strategija: kvadriramo obje strane (ekvivalentno jer je desna strana 4 ≥ 0), rješavamo, provjeravamo.",note:"Uvjet ekvivalentnosti kvadriranja: desna strana mora biti ≥ 0. Ovdje 4 > 0 ✓"},
    {txt:"Kvadriramo: (√(2x−1))² = 4² → 2x − 1 = 16",note:"(√A)² = A za A ≥ 0. Lijeva strana se uprašćuje na 2x−1."},
    {txt:"Rješavamo: 2x = 17 → x = 17/2 = 8,5",note:"Standardno linearno rješavanje: dodajemo 1, dijelimo s 2."},
    {txt:"Provjera uvjeta domene: 2x−1 ≥ 0 → x ≥ 0,5. Dobiveni x=8,5 ≥ 0,5 ✓",note:"Kvadratni korijen definiran samo za nenegativan argument."},
    {txt:"Provjera u polaznoj jednadžbi: √(2·8,5−1) = √16 = 4 ✓. Rješenje: x = [FRAC:17|2]",note:"Uvrstimo x=8,5: √(17−1) = √16 = 4 ✓. Potvrđeno.",final:true},{txt:"Točan odgovor: x = 8,5 = [FRAC:17|2] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Kvadriranje jednadžbe √A = k (k ≥ 0): kvadriramo → A = k². Ovo je ekvivalentna transformacija jer √A ≥ 0 uvijek, a k=4 ≥ 0, pa obje strane su nenegativne. Nema opasnosti od lažnih rješenja (javljaju se kad je k < 0).",note:"postupak",final:true},{txt:"Intuicija: Uvjet domene: argument korijena 2x−1 ≥ 0 → x ≥ 1/2. Dobiveno x=8,5 >> 1/2 ✓. Uvijek provjeriti.",note:"intuicija",final:true},{txt:"Česta greška #2: ne provjeriti domenu. Ovdje je neproblematično, ali za npr. √(x−3)=−2: kvadriranjem x−3=4 → x=7, ali √4 = 2 ≠ −2 (lažno rješenje!).",note:"verifikacija",final:true}
  ],
  why:[
    "Kvadriranje jednadžbe √A = k (k ≥ 0): kvadriramo → A = k². Ovo je ekvivalentna transformacija jer √A ≥ 0 uvijek, a k=4 ≥ 0, pa obje strane su nenegativne. Nema opasnosti od lažnih rješenja (javljaju se kad je k < 0).",
    "Uvjet domene: argument korijena 2x−1 ≥ 0 → x ≥ 1/2. Dobiveno x=8,5 >> 1/2 ✓. Uvijek provjeriti.",
    "Česta greška #1: kvadrirati svaki faktor zasebno kao √(2x−1) = 4 → 2x−1 = 4 (bez kvadriranja 4). √(A) = k → A = k², ne A = k.",
    "Česta greška #2: ne provjeriti domenu. Ovdje je neproblematično, ali za npr. √(x−3)=−2: kvadriranjem x−3=4 → x=7, ali √4 = 2 ≠ −2 (lažno rješenje!).",
    "Alt metoda: iz definicije korijena. √(2x−1) = 4 ⟺ 2x−1 = 4² = 16 (jer 4 > 0 → jedinstven preimage). Direktno bez kvadriranja.",
    "Provjera ✓: √(2·(17/2)−1) = √(17−1) = √16 = 4 ✓. Uvjet: 2·8,5−1 = 16 ≥ 0 ✓"
  ]
},
  {id:27.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Riješite jednadžbu 8 · 4^(2x + 3) = 2^(x − 6).",
  sol:{ans:"x = -5",alt:["X = -5","x = -5","x=-5","≈ x = -5"]},
  steps:[
    {txt:"Strategija: svesti sve potencije na istu bazu 2 (jer je 8=2³ i 4=2²), zatim izjednačiti eksponente.",note:"Eksponencijalna jednadžba: ako su baze jednake, eksponenti moraju biti jednaki. 2^A = 2^B ⟺ A = B."},
    {txt:"Prepisujemo svaki faktor: 8 = 2³ i 4^(2x+3) = (2²)^(2x+3) = 2^(2·(2x+3)) = 2^(4x+6)",note:"(aᵐ)ⁿ = a^(m·n). Ključni korak: 4 = 2² → eksponent se množi s 2."},
    {txt:"Lijeva strana: 2³ · 2^(4x+6) = 2^(3+4x+6) = 2^(4x+9)",note:"aᵐ·aⁿ = a^(m+n). Zbrajamo eksponente: 3 + (4x+6) = 4x+9."},
    {txt:"Jednadžba postaje: 2^(4x+9) = 2^(x−6). Baze su iste → eksponenti jednaki: 4x+9 = x−6",note:"Eksponencijalna bijekcija: 2^A = 2^B ⟺ A = B."},
    {txt:"Rješavamo: 4x−x = −6−9 → 3x = −15 → x = −5",note:"Linearno rješavanje: prenosimo x s desne strane, konstante s lijeve.",final:true},{txt:"Točan odgovor: x = -5 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Opća metoda za eksponencijalne jednadžbe s različitim bazama: (1) izraziti sve kao potencije jedne baze; (2) primijeniti aᵐ·aⁿ = a^(m+n) i (aᵐ)ⁿ = a^(mn) za spajanje; (3) izjednačiti eksponente.",note:"postupak",final:true},{txt:"Intuicija: Ključni koraci: 4^(2x+3) = (2²)^(2x+3) = 2^(2(2x+3)) = 2^(4x+6). Ovdje se eksponent MNOŽI s 2 (potencija potencije). Mnogi griješe samo dodavanjem 2.",note:"intuicija",final:true},{txt:"Česta greška #2: 8·4^(2x+3) = (8·4)^(2x+3) = 32^(2x+3) (množenje baza bez zbrajanja eksponenata). Ispravno: 8=2³ je konstantna baza, 4^(2x+3)=2^(4x+6); množenje → zbrajanje eksponenata 3+(4x+6)=4x+9.",note:"verifikacija",final:true}
  ],
  why:[
    "Opća metoda za eksponencijalne jednadžbe s različitim bazama: (1) izraziti sve kao potencije jedne baze; (2) primijeniti aᵐ·aⁿ = a^(m+n) i (aᵐ)ⁿ = a^(mn) za spajanje; (3) izjednačiti eksponente.",
    "Ključni koraci: 4^(2x+3) = (2²)^(2x+3) = 2^(2(2x+3)) = 2^(4x+6). Ovdje se eksponent MNOŽI s 2 (potencija potencije). Mnogi griješe samo dodavanjem 2.",
    "Česta greška #1: 4^(2x+3) = 2^(2x+3) (zaboraviti da je 4 = 2² → eksponent se udvostručuje). Ispravno: 4^(2x+3) = 2^(4x+6).",
    "Česta greška #2: 8·4^(2x+3) = (8·4)^(2x+3) = 32^(2x+3) (množenje baza bez zbrajanja eksponenata). Ispravno: 8=2³ je konstantna baza, 4^(2x+3)=2^(4x+6); množenje → zbrajanje eksponenata 3+(4x+6)=4x+9.",
    "Alt provjera: x=−5: lijeva = 8·4^(−7) = 2³·(2²)^(−7) = 2³·2^(−14) = 2^(3−14) = 2^(−11). Desna = 2^(−5−6) = 2^(−11). Jednaki ✓.",
    "Provjera ✓: 4x+9 = 4·(−5)+9 = −20+9 = −11; x−6 = −5−6 = −11; −11 = −11 ✓"
  ]
},
  {id:27.3,type:"sa",topic:"al",points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Odredite sva realna rješenja jednadžbe (x³ − 3)² − 3(x³ − 3) − 10 = 0.",
  sol:{ans:"x₁ = 1, x₂ = 2",alt:["1 i 2","x=1, x=2"]},
  steps:[
    {txt:"Strategija: prepoznati kvadratnu jednadžbu po x³−3, uvesti supstituciju u = x³−3.",note:"Izraz (x³−3)²−3(x³−3)−10 je oblika u²−3u−10 za u=x³−3. Supstitucija rješava problem."},
    {txt:"Supstitucija: u = x³−3. Jednadžba: u²−3u−10 = 0",note:"Kvadratna jednadžba po u. Tražimo faktorizaciju."},
    {txt:"Faktoriziramo: u²−3u−10 = (u−5)(u+2) = 0 → u = 5 ili u = −2",note:"Tražimo dva broja s umnoškom −10 i zbrojem −3: to su −5 i +2 → (u−5)(u+2). ✓"},
    {txt:"Vraćamo supstituciju za u=5: x³−3=5 → x³=8 → x=∛8 = 2",note:"Kubni korijen: ∛8 = 2 jer 2³=8. U ℝ, svaki broj ima točno jedan kubni korijen."},
    {txt:"Za u=−2: x³−3=−2 → x³=1 → x=∛1 = 1. Rješenja: x₁=1, x₂=2",note:"∛1 = 1 jer 1³=1. Oba rješenja su realna i cijela.",final:true},{txt:"Točan odgovor: x₁ = 1, x₂ = 2 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Supstitucija za kvadratnu jednadžbu 'po složenom izrazu': kad vidimo (A)²+p(A)+q=0, uvedemo u=A i rješavamo kvadratnu. Nakon nalaženja u, rješavamo A=u za originalnu varijablu.",note:"postupak",final:true},{txt:"Intuicija: Faktorizacija u²−3u−10: tražimo (u−a)(u−b) = u²−(a+b)u+ab. Trebamo ab=−10 i a+b=3. Probamo: a=5, b=−2 → ab=−10 ✓, a+b=3 ✓. Dakle (u−5)(u+2)=0.",note:"intuicija",final:true},{txt:"Česta greška #2: kubni korijen kao kvadratni — misliti da x³=8 daje x=±2√2 ili x=±2. Kubni korijen je JEDINSTVEN u ℝ: x³=8 → jedino x=2.",note:"verifikacija",final:true}
  ],
  why:[
    "Supstitucija za kvadratnu jednadžbu 'po složenom izrazu': kad vidimo (A)²+p(A)+q=0, uvedemo u=A i rješavamo kvadratnu. Nakon nalaženja u, rješavamo A=u za originalnu varijablu.",
    "Faktorizacija u²−3u−10: tražimo (u−a)(u−b) = u²−(a+b)u+ab. Trebamo ab=−10 i a+b=3. Probamo: a=5, b=−2 → ab=−10 ✓, a+b=3 ✓. Dakle (u−5)(u+2)=0.",
    "Česta greška #1: zanemariti jedan slučaj (npr. samo u=5 → x=2). Kvadratna jednadžba uvijek ima 2 rješenja (može biti dvostruko ili kompleksno, ali ovdje su oba realna i različita).",
    "Česta greška #2: kubni korijen kao kvadratni — misliti da x³=8 daje x=±2√2 ili x=±2. Kubni korijen je JEDINSTVEN u ℝ: x³=8 → jedino x=2.",
    "Alt metoda: razviti sve i dobiti jednadžbu stupnja 6: x⁶−6x³−10=0. Supstitucija w=x³ → w²−6w−10=0... ali naša supstitucija u=x³−3 je direktnija jer prepoznajemo kvadratnu strukturu.",
    "Provjera ✓: x=2: (8−3)²−3(8−3)−10 = 25−15−10 = 0 ✓; x=1: (1−3)²−3(1−3)−10 = 4+6−10 = 0 ✓"
  ]
},
  {id:28.1,type:"sa",topic:"fun",points:1,
  context:"Zadatak 28 (1. dio od 3): f(x) = (5x + 2)/(2x + 1)",
  q:"Odredite domenu funkcije f.",
  sol:{ans:"D(f) = ℝ \\ {-1/2}",alt:["R \\ {-1/2}","ℝ\\{-1/2}","x ≠ -1/2"]},
  solFormula:{pre:"D(f) = ℝ \\ {", frac:[["−1","2"]], post:"}"},
  steps:[
    {txt:"Strategija: kod racionalne funkcije f(x)=P(x)/Q(x), domena = ℝ  {x | Q(x)=0}.",note:"Jedina prepreka definiranosti: dijeljenje s nulom. Moramo pronaći gdje je nazivnik 0."},
    {txt:"Nazivnik: 2x + 1. Postavimo 2x+1 = 0 → x = −1/2",note:"Jednadžba 2x+1=0 je linearna → jedinstveno rješenje."},
    {txt:"D(f) = ℝ  {−1/2} — sve realne vrijednosti osim x = −1/2",note:"Zapis: skup realnih s izbačenim jednim elementom. Alternativni zapis: x ∈ ℝ, x ≠ −1/2.",final:true},{txt:"Točan odgovor: D(f) = ℝ \\ {-1/2} ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Domena racionalne funkcije P(x)/Q(x): isključujemo točke gdje je Q(x)=0 (ne smijemo dijeliti s nulom). Sve ostale vrijednosti x su u domeni — nema kvadratnih korijena ni logaritama koji bi dodali uvjete.",note:"postupak",final:true},{txt:"Intuicija: Ovdje Q(x) = 2x+1 = 0 → x = −1/2. Dakle D(f) = ℝ \\ {−1/2}. Funkcija f(x) = (5x+2)/(2x+1) ima vertikalni asimptot u x=−1/2 (f(x)→±∞ kad x→−1/2).",note:"intuicija",final:true},{txt:"Česta greška #2: D(f) = ℝ bez isključivanja x=−1/2. Provjera: f(−1/2) = (5·(−1/2)+2)/(2·(−1/2)+1) = (−5/2+2)/0 = (−1/2)/0 — nedefinirana!",note:"verifikacija",final:true},{txt:"Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.",note:"verifikacija",final:true}
  ],
  why:[
    "Domena racionalne funkcije P(x)/Q(x): isključujemo točke gdje je Q(x)=0 (ne smijemo dijeliti s nulom). Sve ostale vrijednosti x su u domeni — nema kvadratnih korijena ni logaritama koji bi dodali uvjete.",
    "Ovdje Q(x) = 2x+1 = 0 → x = −1/2. Dakle D(f) = ℝ  {−1/2}. Funkcija f(x) = (5x+2)/(2x+1) ima vertikalni asimptot u x=−1/2 (f(x)→±∞ kad x→−1/2).",
    "Česta greška #1: postavljati uvjete i za BROJNIK (5x+2 ≠ 0 → x ≠ −2/5). To je nultočka funkcije (f(−2/5)=0), ali x=−2/5 JE u domeni — funkcija je definirana. Nultočke se ne isključuju iz domene!",
    "Česta greška #2: D(f) = ℝ bez isključivanja x=−1/2. Provjera: f(−1/2) = (5·(−1/2)+2)/(2·(−1/2)+1) = (−5/2+2)/0 = (−1/2)/0 — nedefinirana!",
    "Geometrija: f(x) je racionalna funkcija oblika hiperbola (kada je i P i Q stupnja 1). Jedini prekid je u x=−1/2 (vertikalni asimptot). Graf postoji za sve ostale x.",
    "Provjera ✓: f(0) = 2/1 = 2 ✓ definirana; f(1) = 7/3 ✓; f(−1/2) = ... / 0 nedefinirana ✓"
  ]
},
  {id:28.2,type:"sa",topic:"fun",points:1,
  context:"Zadatak 28 (2. dio od 3): f(x) = (5x + 2)/(2x + 1)",
  q:"Odredite sjecišta grafa funkcije f s koordinatnim osima.",
  sol:{ans:"(0, 2) i (−2/5, 0)",alt:["(0,2) i (−2/5,0)","(−2/5, 0); (0, 2)"]},
  solFormula:[{pre:"("},{frac:[["−2","5"]]},{pre:", 0) i (0, 2)"}],
  steps:[
    {txt:"Strategija: (1) sjecište s y-osi: staviti x=0 i izračunati f(0); (2) sjecište s x-osi: postaviti f(x)=0 i riješiti.",note:"Sjecište s y-osi (x=0): uvrštavamo x=0 (uz provjeru da je 0 u domeni). Sjecište s x-osi (y=0): tražimo x gdje je broj=0."},
    {txt:"Sjecište s y-osi: provjera domene — je li x=0 u D(f)? 2·0+1=1≠0 ✓. f(0) = (0+2)/(0+1) = 2 → točka (0, 2)",note:"Uvijek provjeriti da x=0 nije isključen iz domene (ovdje nije)."},
    {txt:"Sjecište s x-osi: f(x)=0 ⟺ brojnik=0 (uz x∈D). 5x+2=0 → x=−2/5. Provjera: 2·(−2/5)+1=1/5≠0 ✓ → točka (−2/5, 0)",note:"Razlomak = 0 samo kad je brojnik = 0 (i nazivnik ≠ 0)."},
    {txt:"Sjecišta: (0, 2) i (−2/5, 0)",note:"Provjeravamo obje točke uvrštavanjem u funkciju.",final:true},{txt:"Točan odgovor: (0, 2) i (−2/5, 0) ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Opća metoda za sjecišta s osima: sjecište s y-osi ↔ x=0 (uvrštavamo, uz provjeru domene); sjecište s x-osi ↔ y=0 ↔ f(x)=0 ↔ brojnik=0 (uz provjeru da x nije isključen iz domene).",note:"postupak",final:true},{txt:"Intuicija: Za racionalnu funkciju P(x)/Q(x): (1) y-presjek: x=0 (ako 0∈D) → f(0)=P(0)/Q(0); (2) x-presjeci: P(x)=0 uz Q(x)≠0 → nultočke brojnika.",note:"intuicija",final:true},{txt:"Česta greška #2: zaboraviti provjeriti domenu za x=−2/5. Ako bi Q(−2/5)=0, ne bi bila nultočka nego jama.",note:"verifikacija",final:true}
  ],
  why:[
    "Opća metoda za sjecišta s osima: sjecište s y-osi ↔ x=0 (uvrštavamo, uz provjeru domene); sjecište s x-osi ↔ y=0 ↔ f(x)=0 ↔ brojnik=0 (uz provjeru da x nije isključen iz domene).",
    "Za racionalnu funkciju P(x)/Q(x): (1) y-presjek: x=0 (ako 0∈D) → f(0)=P(0)/Q(0); (2) x-presjeci: P(x)=0 uz Q(x)≠0 → nultočke brojnika.",
    "Česta greška #1: misliti da je x-presjek tamo gdje je NAZIVNIK=0 (tj. asimptota). Asimptota x=−1/2 nije sjecište s x-osi — funkcija tamo ide u ±∞, ne u 0.",
    "Česta greška #2: zaboraviti provjeriti domenu za x=−2/5. Ako bi Q(−2/5)=0, ne bi bila nultočka nego jama.",
    "Kontekst iz Q28: f(x)=(5x+2)/(2x+1), D(f)=ℝ{−1/2}. Asimptota x=−1/2 ≠ −2/5 (nultočka). Sve je konzistentno.",
    "Provjera ✓: f(0)=(0+2)/(0+1)=2 ✓; f(−2/5)=(−2+2)/(−4/5+1)=0/(1/5)=0 ✓"
  ]
},
  {id:28.3,type:"sa",topic:"fun",points:1,
  context:"Zadatak 28 (3. dio od 3): f(x) = (5x + 2)/(2x + 1)",
  q:"Odredite derivaciju funkcije f.",
  sol:{ans:"f ′(x) = [FRAC:1|(2x + 1)²]",
  solFormula:[{pre:"f′(x) = "},{frac:[["1","(2x + 1)²"]]}],alt:["F ′(x) = [FRAC:1|(2x + 1)²]","f ′(x) = [FRAC:1|(2x + 1)²]","f′(x)=[FRAC:1|(2x+1)²]","≈ f ′(x) = [FRAC:1|(2x + 1)²]"]},
  steps:[
    {txt:"Strategija: primijeniti pravilo količnika (u/v)′ = (u′v − uv′)/v² za f(x) = (5x+2)/(2x+1).",note:"Identificiramo u = 5x+2 i v = 2x+1, pa nalazimo derivacije u′ i v′."},
    {txt:"u = 5x+2 → u′ = 5. v = 2x+1 → v′ = 2",note:"Derivacija linearne funkcije ax+b je a (koeficijent uz x)."},
    {txt:"Primjena formule: f′(x) = (u′·v − u·v′) / v² = (5·(2x+1) − (5x+2)·2) / (2x+1)²",note:"Pažnja na redoslijed: u′v MINUS uv′ (ne obrnuto). v² u nazivniku."},
    {txt:"Razvijamo brojnik: 5(2x+1) − 2(5x+2) = 10x+5 − 10x−4 = 1",note:"10x se kratke, ostaje 5−4=1."},
    {txt:"f′(x) = [FRAC:1|(2x+1)²]",note:"Derivacija je pozitivna za sve x u domeni → f je rastuća na cijeloj domeni. Ima smisao za hiperbolu.",final:true},{txt:"Točan odgovor: f ′(x) = [FRAC:1|(2x + 1)²] ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo količnika: (u/v)′ = (u′v − uv′)/v². Ovo pravilo treba naučiti napamet uz napomenu: REDOSLIJED je bitan. u′v − uv′ (ne uv′ − u′v). Pogreška u predznaku je najčešća.",note:"postupak",final:true},{txt:"Intuicija: Razvoj: 5(2x+1) = 10x+5; 2(5x+2) = 10x+4. Oduzimamo: (10x+5) − (10x+4) = 1. Svi x se kratiti, ostaje konstanta 1 — tipično za linearni/linearni razlomak.",note:"intuicija",final:true},{txt:"Česta greška #2: (u/v)′ = u′/v′ = 5/2 (dijeljenje derivacija). Ovo je pogrešna 'formula'. Pravilo količnika je NEOPHODAN korak, nema skraćenice.",note:"verifikacija",final:true}
  ],
  why:[
    "Pravilo količnika: (u/v)′ = (u′v − uv′)/v². Ovo pravilo treba naučiti napamet uz napomenu: REDOSLIJED je bitan. u′v − uv′ (ne uv′ − u′v). Pogreška u predznaku je najčešća.",
    "Razvoj: 5(2x+1) = 10x+5; 2(5x+2) = 10x+4. Oduzimamo: (10x+5) − (10x+4) = 1. Svi x se kratiti, ostaje konstanta 1 — tipično za linearni/linearni razlomak.",
    "Česta greška #1: obrnuti redoslijed: (uv′ − u′v)/v² = (2(5x+2) − 5(2x+1))/(2x+1)² = (10x+4−10x−5)/(2x+1)² = −1/(2x+1)². Ovo je −f′(x) — pogrešan predznak!",
    "Česta greška #2: (u/v)′ = u′/v′ = 5/2 (dijeljenje derivacija). Ovo je pogrešna 'formula'. Pravilo količnika je NEOPHODAN korak, nema skraćenice.",
    "Alt metoda: f(x) = (5x+2)/(2x+1) = 5/2 − (3/2)/(2x+1) (razlomak dijeljenjem). Tada f′(x) = 0 − (3/2) · d/dx[(2x+1)^(−1)] = (3/2)·(2x+1)^(−2)·2 = 3/(2x+1)². Ovo je ≠ 1/(2x+1)²... Provjeri: 5(2x+1)−2(5x+2)=10x+5−10x−4=1. Dakle f′ = 1/(2x+1)². Provjeri alt: 5/2·(2x+1)−(5x+2) = 5x+5/2−5x−2 = 1/2, ne 3/2. Dakle f(x) = 5/2 − (1/2)/(2x+1), pa f′ = (1/2)·2/(2x+1)² = 1/(2x+1)² ✓.",
    "Provjera ✓: f′(0) = 1/1² = 1. Numerički: [f(0+h)−f(0)]/h za mali h: [(5h+2)/(2h+1)−2]/h = [(5h+2−2(2h+1))/(2h+1)]/h = [h/(2h+1)]/h = 1/(2h+1) → 1 za h→0 ✓"
  ]
},
  {id:29.1,type:"proof",topic:"geom",points:2,img:true,
  context:"Zadatak 29 (1. dio od 4):",
  q:"Na skici je prikazana mreža uspravnoga tijela. Mreža se sastoji od kvadrata i sukladnih jednakokračnih trokuta. Izračunajte obujam toga tijela ako je a = 5 cm.",
  sol:{ans:"V = [FRAC:125√3|6] cm³ ≈ 36,08 cm³",alt:["125√3/6","≈36,08"]},
  steps:[
    {txt:"Strategija: prepoznati tijelo iz mreže (kvadrat + 4 jednakokračna trokuta = četverostrana piramida), odrediti visinu, izračunati volumen.",note:"Mreža: 1 kvadrat (baza a×a) + 4 sukladna jednakokračna trokuta (pobočne plohe). Tijelo je pravilna četverostrana piramida."},
    {txt:"Parametri: a = 5 cm (strana kvadratne baze i bočni brid trokuta)",note:"Iz mreže: trokut ima bazu a i jednake bočne stranice a — jednakokračan, krakovi = a."},
    {txt:"Visina piramide h iz Pitagorinog poučka: u trokutu (vrh, središte brida baze, središte baze): h² + (a/2)² = a²",note:"Trokut: od vrha do središta brida baze = a (bočni brid piramide); vodoravna udaljenost = a/2 (pola brida baze)."},
    {txt:"h² = a² − (a/2)² = 25 − 6,25 = 18,75 → h = a√3/2 = 5√3/2 cm",note:"√(3a²/4) = a√3/2. Za a=5: h = 5√3/2."},
    {txt:"V = [FRAC:1|3] · a² · h = [FRAC:1|3] · 25 · [FRAC:5√3|2] = [FRAC:125√3|6] ≈ 36,08 cm³",note:"Formula: V = (1/3)·Baza·visina. Baza = a² = 25 cm². Visina = 5√3/2.",final:true},{txt:"Točan odgovor: V = [FRAC:125√3|6] cm³ ≈ 36,08 cm³ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Identifikacija tijela: mreža od kvadrata i 4 jednakokračna trokuta daje pravilnu četverostranu piramidu (kvadratna baza, vrh direktno iznad centra baze, sve pobočne plohe sukladne).",note:"postupak",final:true},{txt:"Intuicija: Visina piramide h: tražimo okomalu udaljenost od vrha do baze. Koristimo Pitagoru u troktu: vrh — središte jednog brida baze — središte baze. Kosa stranica = bočni brid piramide (= a = 5 cm); vodoravna kateta = a/2 = 2,5 cm. h²...",note:"intuicija",final:true},{txt:"Česta greška #2: zamijeniti apotem pobočne plohe (visina trokuta-plohe) s visinom piramide. Apotem = √(a²−(a/2)²) = a√3/2 za jednakokračni trokut s krakovima a i bazom a... Ali ovdje apotem = visina trokuta iz vrha piramide na brid baze....",note:"verifikacija",final:true}
  ],
  why:[
    "Identifikacija tijela: mreža od kvadrata i 4 jednakokračna trokuta daje pravilnu četverostranu piramidu (kvadratna baza, vrh direktno iznad centra baze, sve pobočne plohe sukladne).",
    "Visina piramide h: tražimo okomalu udaljenost od vrha do baze. Koristimo Pitagoru u troktu: vrh — središte jednog brida baze — središte baze. Kosa stranica = bočni brid piramide (= a = 5 cm); vodoravna kateta = a/2 = 2,5 cm. h² = a² − (a/2)² = a² − a²/4 = 3a²/4 → h = a√3/2.",
    "Česta greška #1: h = a (misliti da visina piramide = brid baze). Ovo vrijedi samo za specijalne piramide. Iz Pitagore: h = a√3/2 ≈ 0,866·a ≠ a.",
    "Česta greška #2: zamijeniti apotem pobočne plohe (visina trokuta-plohe) s visinom piramide. Apotem = √(a²−(a/2)²) = a√3/2 za jednakokračni trokut s krakovima a i bazom a... Ali ovdje apotem = visina trokuta iz vrha piramide na brid baze. Paziti na geometriju!",
    "Volumen pravilne piramide: V = (1/3)·B·h gdje B = površina baze. Ovdje B = a² = 25 cm², h = 5√3/2 cm.",
    "Provjera ✓: V = (1/3)·25·(5√3/2) = 125√3/6. √3 ≈ 1,732 → V ≈ 125·1,732/6 ≈ 216,5/6 ≈ 36,08 cm³ ✓"
  ]
},
  {id:29.2,type:"sa",topic:"geom",points:2,
  context:"Zadatak 29 (2. dio od 4):",
  q:"Zadan je vektor AB⃗ = 2i⃗ + 5j⃗ i točke C(1, 3) i D(4, -7). Odredite mjeru kuta između vektora AB⃗ i CD⃗.",
  sol:{ans:"≈ 141°29′58″",alt:["141°29'58\"","≈141,5°"]},
  steps:[
    {txt:"Strategija: izračunati vektor CD⃗, pa primijeniti formulu cos φ = (a⃗·b⃗)/(|a⃗|·|b⃗|).",note:"Zadano: AB⃗ = (2,5), C(1,3), D(4,−7). Trebamo CD⃗ i onda skalarni umnožak."},
    {txt:"CD⃗ = D − C = (4−1, −7−3) = (3, −10)",note:"Vektor od C do D: koordinate D minus koordinate C. (Ne C−D!)"},
    {txt:"Skalarni umnožak: AB⃗·CD⃗ = 2·3 + 5·(−10) = 6 − 50 = −44",note:"Skalarni umnožak (a₁,a₂)·(b₁,b₂) = a₁b₁ + a₂b₂. Negativan rezultat → tupi kut."},
    {txt:"Moduli: |AB⃗| = √(4+25) = √29; |CD⃗| = √(9+100) = √109",note:"|v| = √(v₁²+v₂²). Za AB: √(2²+5²)=√29. Za CD: √(3²+10²)=√109."},
    {txt:"cos φ = −44/(√29·√109) = −44/√3161 ≈ −0,7827 → φ = arccos(−0,7827) ≈ 141°29′58″",note:"Negativan kosinus → φ ∈ (90°, 180°) → tupi kut. arccos vraća vrijednost u [0°, 180°].",final:true},{txt:"Točan odgovor: ≈ 141°29′58″ ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Formula kuta između vektora: cos φ = (a⃗·b⃗)/(|a⃗|·|b⃗|) gdje φ ∈ [0°, 180°]. Skalarni umnožak a⃗·b⃗ = a₁b₁+a₂b₂+... (po komponentama). Ovo je temeljna formula analitičke geometrije.",note:"postupak",final:true},{txt:"Intuicija: CD⃗ = D − C = (3, −10). Pažnja: SMJER vektora je bitan. CD⃗ ide od C prema D. Skalarni umnožak AB⃗·CD⃗ = 2·3+5·(−10) = −44. Negativan umnožak → kut > 90°.",note:"intuicija",final:true},{txt:"Česta greška #2: cos φ = −0,7827 → φ = arccos(0,7827) = 38,5° (uzimanje apsolutne vrijednosti). Negativan kosinus → kut je TUP, ne akutan. arccos(−x) = 180° − arccos(x).",note:"verifikacija",final:true}
  ],
  why:[
    "Formula kuta između vektora: cos φ = (a⃗·b⃗)/(|a⃗|·|b⃗|) gdje φ ∈ [0°, 180°]. Skalarni umnožak a⃗·b⃗ = a₁b₁+a₂b₂+... (po komponentama). Ovo je temeljna formula analitičke geometrije.",
    "CD⃗ = D − C = (3, −10). Pažnja: SMJER vektora je bitan. CD⃗ ide od C prema D. Skalarni umnožak AB⃗·CD⃗ = 2·3+5·(−10) = −44. Negativan umnožak → kut > 90°.",
    "Česta greška #1: koristiti koordinate točaka A, B, C, D direktno kao vektore umjesto vektora AB⃗ i CD⃗. AB⃗ = B−A nije isto što i koordinata A ili B.",
    "Česta greška #2: cos φ = −0,7827 → φ = arccos(0,7827) = 38,5° (uzimanje apsolutne vrijednosti). Negativan kosinus → kut je TUP, ne akutan. arccos(−x) = 180° − arccos(x).",
    "Česta greška #3: |AB⃗|·|CD⃗| = √29·√109 = √(29·109) = √3161 ≈ 56,2 (ne 56,2² = 3161). Dijeljenje s |a||b| daje broj u [−1,1].",
    "Provjera ✓: cos(141°29′58″) = cos(141,5°) ≈ −0,783 ≈ −44/56,2 ✓"
  ]
},
  {id:29.3,type:"proof",topic:"trig",points:3,img:true,
  context:"Zadatak 29 (3. dio od 4):",
  q:"Odredite opseg četverokuta prikazanoga na skici (poznate stranice 146 m, 57 m, 123 m i kutovi 108° i 122° između susjednih stranica).",
  intermediates:[3249, 21316, 16644, 24565, 5143, 29708, 172.36, 35.68, 361.68, 0.309, 0.530],
  sol:{ans:"O ≈ 361,68 m",alt:["361,68","≈361,68 m"]},
  steps:[
    {txt:"Strategija: dijagonalom BD rastaviti četverokut ABCD na dva trokuta. Kosinusovim poučkom odrediti BD, zatim CD.",note:"Četverokut ABCD: poznato AB=57, AD=146, BC=123, ∠DAB=108°, ∠ABC=122°. Nepoznato: CD."},
    {txt:"U trokutu ABD: BD²=AB²+AD²−2·AB·AD·cos(∠DAB)",note:"Kosinusov poučak: c²=a²+b²−2ab·cosC. Kut ∠DAB=108° je između poznatih stranica AB=57 i AD=146."},
    {txt:"BD²=57²+146²−2·57·146·cos(108°) = 3249+21316−16644·(−0,309) ≈ 24565+5143 ≈ 29708 → BD ≈ 172,36 m",note:"cos(108°) ≈ −0,309 (tupi kut → negativan kosinus → BD² je veći od zbroja kvadrata stranica)."},
    {txt:"U trokutu ABD: sinusovim poučkom nalazimo ∠ABD: sin(∠ABD)/AD = sin(∠DAB)/BD",note:"Trebamo ∠ABD da bismo odredili ∠DBC = ∠ABC − ∠ABD = 122° − ∠ABD."},
    {txt:"U trokutu BCD: kosinusovim poučkom → CD² = BC²+BD²−2·BC·BD·cos(∠DBC). CD ≈ 35,68 m. Opseg ≈ 146+57+123+35,68 ≈ 361,68 m",note:"Zbrajamo sve četiri stranice.",final:true},{txt:"Točan odgovor: O ≈ 361,68 m ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Opća strategija za četverokut s nepoznatom stranicom: podijeliti dijagonalom na 2 trokuta. Svaki trokut rješavamo kosinusovim i sinusovim poučkom. Ovo je standardna metoda za 'nejasne' četverokute.",note:"postupak",final:true},{txt:"Intuicija: Kosinusov poučak: c² = a²+b²−2ab·cosC. Za kut 108°: cos(108°) ≈ −0,309 (tupi kut → negativan kosinus → BD² > a²+b²). Za kut 122°: cos(122°) ≈ −0,530.",note:"intuicija",final:true},{txt:"Česta greška #2: koristiti kosinusov poučak bez identifikacije pravilnih stranica i kuta. Uvijek: poznate stranicu a, b s kutom C između njih → nepoznata stranica c = √(a²+b²−2ab·cosC).",note:"verifikacija",final:true}
  ],
  why:[
    "Opća strategija za četverokut s nepoznatom stranicom: podijeliti dijagonalom na 2 trokuta. Svaki trokut rješavamo kosinusovim i sinusovim poučkom. Ovo je standardna metoda za 'nejasne' četverokute.",
    "Kosinusov poučak: c² = a²+b²−2ab·cosC. Za kut 108°: cos(108°) ≈ −0,309 (tupi kut → negativan kosinus → BD² > a²+b²). Za kut 122°: cos(122°) ≈ −0,530.",
    "Česta greška #1: misliti da je ∠DBC = 122° direktno. ∠ABC = 122° je kut cijelog četverokuta, a ∠DBC je manji kut u trokutu BCD. Trebamo ∠ABD (iz sinusovog poučka u △ABD) pa ∠DBC = 122° − ∠ABD.",
    "Česta greška #2: koristiti kosinusov poučak bez identifikacije pravilnih stranica i kuta. Uvijek: poznate stranicu a, b s kutom C između njih → nepoznata stranica c = √(a²+b²−2ab·cosC).",
    "Alternativni pristup: koristiti dijagonalu AC umjesto BD. Isti rezultat, ali drugačiji redoslijed izračuna.",
    "Provjera ✓: O = 146+57+123+35,68 ≈ 361,68 m ✓. Razmjerna provjera: stranice su reda veličine 57-146 m, pa opseg ~361 m je razuman."
  ]
},
  {id:29.4,type:"proof",topic:"kon",points:3,
  context:"Zadatak 29 (4. dio od 4):",
  q:"Zadana je kružnica kojoj je središte u sjecištu pravaca 2x + 3y − 1 = 0 i x + y + 3 = 0 i koja prolazi ishodištem koordinatnoga sustava. Odredite jednadžbu tangente na tu kružnicu u ishodištu.",
  sol:{ans:"10x − 7y = 0",alt:["10x − 7y = 0","10x−7y=0","≈ 10x − 7y = 0"]},
  steps:[
    {txt:"Strategija: naći središte kružnice rješavanjem sustava pravaca, zatim iskoristiti okomitost tangente i polumjera.",note:"Tangenta kroz točku T na kružnici ⊥ polumjer ST. Jednadžba tangente = jednadžba okomice na OS."},
    {txt:"Rješavamo sustav: 2x+3y=1 i x+y=−3. Iz 2. jednadžbe: x=−3−y.",note:"Supstitucija u 1. jednadžbu: 2(−3−y)+3y=1 → −6−2y+3y=1 → y=7."},
    {txt:"x=−3−7=−10. Središte kružnice: S(−10, 7)",note:"Provjera: 2·(−10)+3·7=−20+21=1 ✓; (−10)+7=−3 ✓"},
    {txt:"Vektor OS⃗ = S−O = (−10, 7). Tangenta u O(0,0) ⊥ OS → smjer tangente = (7, 10) (okomit na (−10,7)).",note:"Okomiti vektor na (a,b) je (−b,a) ili (b,−a). Ovdje: okomit na (−10,7) je (7,10) ili (−7,−10)."},
    {txt:"Jednadžba tangente kroz O s nagibom 10/7: y/x=10/7 → 7y=10x → 10x−7y=0",note:"Pravac kroz ishodište s usmjerenjem (7,10): y/x = 10/7. Standardni oblik: 10x−7y=0.",final:true},{txt:"Točan odgovor: 10x − 7y = 0 ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Ključno geometrijsko svojstvo: tangenta na kružnicu u točki T je okomita na polumjer ST. Ovdje je dodirna točka O(0,0) (ishodište), a S je središte kružnice. Dakle tangenta ⊥ OS.",note:"postupak",final:true},{txt:"Intuicija: Nalaženje S: rješavamo sustav pravaca 2x+3y=1 i x+y=−3. Supstitucija daje S(−10, 7). Provjera: obje jednadžbe zadovoljene.",note:"intuicija",final:true},{txt:"Česta greška #1: uzeti smjer OS⃗ direktno kao smjer tangente (umjesto okomiti smjer). Tada bismo dobili jednadžbu −10x+7y=0 što je NORMALA (polumjer), ne tangenta.",note:"verifikacija",final:true}
  ],
  why:[
    "Ključno geometrijsko svojstvo: tangenta na kružnicu u točki T je okomita na polumjer ST. Ovdje je dodirna točka O(0,0) (ishodište), a S je središte kružnice. Dakle tangenta ⊥ OS.",
    "Nalaženje S: rješavamo sustav pravaca 2x+3y=1 i x+y=−3. Supstitucija daje S(−10, 7). Provjera: obje jednadžbe zadovoljene.",
    "Smjer OS⃗ = (−10, 7). Okomiti smjer: vektor (a,b) je okomit na (−b,a). Dakle okomit na (−10,7) je (7,10). Tangenta kroz O s ovim smjerom: y/x = 10/7 → 10x−7y = 0.",
    "Česta greška #1: uzeti smjer OS⃗ direktno kao smjer tangente (umjesto okomiti smjer). Tada bismo dobili jednadžbu −10x+7y=0 što je NORMALA (polumjer), ne tangenta.",
    "Česta greška #2: ne provjeriti da O(0,0) leži na kružnici (to je uvjet da bi tangenta iz O imala smisla). Provjera: |OS| = √(100+49) = √149 = polumjer kružnice. Dakle O je na kružnici ✓.",
    "Provjera ✓: pravac 10x−7y=0 prolazi O(0,0): 0−0=0 ✓. Okomit na OS: (10,−7)·(−10,7) = −100−49 = −149 ≠ 0... hmm. Vektori tangente i OS: (7,10)·(−10,7) = −70+70 = 0 ✓ (okomiti)."
  ]
},
  {id:30,img:true,type:"proof",topic:"fun",points:4,img:true,
  q:"Analizirajte jednadžbu log(x + 5) = −(1/3)x³ − 3x² − 5x i utvrdite koliko rješenja ima ta jednadžba. (Napomena: tijekom rješavanja zadatka možete se koristiti koordinatnim sustavom.)",
  sol:{ans:"3 rješenja",alt:["3","tri"],
    graphType:"coordinate",
    graphRef:{pts:[{label:"I₁",x:-4.95,y:-1.3},{label:"I₂",x:-2.07,y:0.47},{label:"I₃",x:-0.15,y:0.68}]},
    svgFn:SvgSol30_2014JA
  },
  ex:"f(x)=log(x+5), g(x)=−x³/3−3x²−5x. d(−4,5)=log(0,5)−g(−4,5)=−0,3−2,6<0; d(−4,99)>0 → sjecište ≈−4,95.",
  steps:[
    {txt:"Definiramo funkciju f(x) = log(x + 5) i g(x) = −(1/3)x³ − 3x² − 5x"},
    {txt:"Domena f: x > −5. Domena g: ℝ. Jednadžba ima rješenja samo za x > −5."},
    {txt:"Ponašanje f: f(−5⁺) = −∞, polagano raste bez gornje granice."},
    {txt:"Ponašanje g: g′(x) = −x² − 6x − 5 = −(x+1)(x+5); lokalni min. x=−5 (g≈−8,33), lokalni max. x=−1 (g≈2,33)."},
    {txt:"d(x) = f(x)−g(x): d(−4,99) ≈ +6,33; d(−3) ≈ 0,3−(−3) = +3,3; d(−2,5) = log(2,5)−(−2,4) ≈ −1,4 → sign change → 1. sjecište ≈ −2,07"},
    {txt:"d(−2) = log(3)−(8/3−12+10) ≈ 0,48−0,67 = −0,19; d(0) = log(5)−0 ≈ 0,7 → sign change → 2. sjecište ≈ −0,15"},
    {txt:"d(−4,95) = log(0,05)−g(−4,95) ≈ −1,3−(−6,6) = +5,3 > 0; d(−4,5) = log(0,5)−g(−4,5) ≈ −0,3−2,6 < 0 → sign change → 3. sjecište ≈ −4,95"},
    {txt:"Ukupno 3 rješenja jednadžbe.",final:true,note:"verifikacija"},{txt:"Točan odgovor: 3 rješenja ✓",note:"odgovor",final:true},{txt:"Sažetak postupka: Pravilo: Jednadžba f(x)=g(x) ima onoliko rješenja koliko grafovi y=f i y=g imaju zajedničkih točaka.",note:"postupak",final:true},{txt:"Intuicija: f(x)=log(x+5) je polagano rastuća za x>−5; g(x) je kubna s lokalnim min. pri x=−5 (≈−8,33) i lokalnim max. pri x=−1 (≈2,33). Ova valovitost g-a daje 3 presjeka s logaritmom.",note:"intuicija",final:true}
  ],
  why:[
    "Pravilo: Jednadžba f(x)=g(x) ima onoliko rješenja koliko grafovi y=f i y=g imaju zajedničkih točaka.",
    "Intuicija: f(x)=log(x+5) je polagano rastuća za x>−5; g(x) je kubna s lokalnim min. pri x=−5 (≈−8,33) i lokalnim max. pri x=−1 (≈2,33). Ova valovitost g-a daje 3 presjeka s logaritmom.",
    "Česta greška: Zaboraviti da je domena f samo x>−5 → eliminira potencijalna sjecišta za x≤−5.",
    "Alt metoda: d(x)=f(x)−g(x) mijenja predznak 3 puta (teorem o međuvrijednosti) → 3 nultočke → 3 rješenja.",
    "Provjera ✓: d(−4,95)>0, d(−4,5)<0, d(−2,5)<0, d(−2)≈−0,19, d(0)≈+0,7 → mijenja predznak točno 3× ✓"
  ,"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije."]
}
];

export const qImages = {
  "2014_jesen_A__10": () => e(SvgQ10_2014JA, null),
  "2014_jesen_A__12": () => e(SvgQ12_2014JA, null),
  "2014_jesen_A__13": () => e(SvgQ13_2014JA, null),
  "2014_jesen_A__14": () => e(SvgQ14_2014JA, null),
  "2014_jesen_A__21.1": () => e(SvgQ21_2014JA, null),
  "2014_jesen_A__23.1": () => e(SvgQ23_2014JA, null),
  "2014_jesen_A__25.2": () => e(SvgQ25_2_2014JA, null),
  "2014_jesen_A__29.1": () => e(SvgQ29_1_2014JA, null),
  "2014_jesen_A__29.3": () => e(SvgQ29_3_2014JA, null),
  "2014_jesen_A__30": () => e(SvgSol30_2014JA, null),
  "2014_jesen_A__10": () => e(SvgZad10_2014JA, null),
  "2014_jesen_A__12": () => e(SvgZad12_2014JA, null),
  "2014_jesen_A__13": () => e(SvgZad13_2014JA, null),
  "2014_jesen_A__14": () => e(SvgZad14_2014JA, null),
  "2014_jesen_A__30": () => e(SvgGrid30_2014JA, null),
};
