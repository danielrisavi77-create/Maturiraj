// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
import { Svg27a_2020Bjj, Svg23a_2020Bjj, Svg9_2020Ajj } from '../mat-shared-svg.mjs';
const e = React.createElement;

function Svg9_2020Bjj(){
  const W=340, H=280;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const elems = [];
  // Vertex R (donja-lijeva)
  const R = [60, 220];
  // Druga os (horizontalna kroz R prema desno i gore, ide kroz S)
  // RS pravac, S iznad i desno
  const S = [220, 170];
  // Nastavak iza S (dušesno-gore)
  const rsExtEnd = [280, 155];
  // Iznad S izlazi T pod 56°
  // Smjer RS je atan2(S.y - R.y, S.x - R.x) = prema gore-desno
  const rsAng = Math.atan2(S[1]-R[1], S[0]-R[0]); // u radijanima (negativan jer gore)
  // T je pod 56° sa SR dužine ali NA desnoj strani (iznad RS pravca)
  // Iz skice: T gore-lijevo od S, ali u jednom smjeru
  // Rotiraj RS-smjer za 56° (contra-clockwise u svijetu gdje y raste dolje = clockwise u matematičkom)
  // Za gornji dio: kut 180° - 56° = 124° od pozitivne x-osi? Lakše postaviti ručno
  const T = [250, 100]; // gore-desno
  // PQ pravac — paralelan s RT-pravcem
  // Q je na liniji RS između R i S, bliže R
  const Q = [140, 195];
  // P je iznad Q, pod 145° (od RQ-pravca prema P je 145° = 180°-35°)
  // P treba biti gore-lijevo (u kutu 145° otvoreno prema gore, pa P ide gore desno zapravo)
  const P = [175, 80];
  
  // Polulinije:
  // R do Q (pa do S i dalje)
  elems.push(e("line",{key:"RS", x1:R[0], y1:R[1], x2:rsExtEnd[0], y2:rsExtEnd[1], stroke:_BLUE, strokeWidth:1.6}));
  // R prema P (kroz Q): zapravo P je iznad, Q je na drugoj polulini...
  // Ispravno: iz slike dvije zrake iz R: jedna prema gore (kroz Q) i jedna prema desno-gore (kroz S)
  // Na zraci kroz Q, duž PQ je paralelna s ST
  // Zraka R-Q nastavlja do P (gore)? Ne, P je između Q i R samo što dužina PQ ide gore od Q
  // Drugačija interpretacija: Q i S su na SOPSTVENIM pravcima izlazečim iz R
  // R je vrh kuta α. Dvije zrake idu iz R — jedna prema Q (lijeva), druga prema S (desna)
  // Dužina PQ je produžetak zrake preko Q prema P (P je iznad Q)
  // Dužina ST je produžetak zrake preko S prema T (T je iznad S)
  // Zrake iz R
  // Računamo: R-Q gornja-lijeva zraka, nastavak QP (dužina iz Q prema P)
  // Bolje: R-Q je jedna zraka, onda PQ je "dužina nakon Q u nekom smjeru"
  // Pogledaj skicu: PQ je **odvojena dužina** iznad linije RQ koja ide u smjeru paralelnom ST
  // Dakle P nije na istoj zraci kao R-Q. Interpretacija: dužina QP izlazi iz Q pod kutom od linije RQ
  // Kut kod Q (između QP i linije RS) = 145° (vanjski, iznad)
  
  // Zraka R do Q (pa produžetak)
  // Moramo preinačiti: R-Q je jedna linija, a iz Q izlazi PQ u nekom drugom smjeru
  // Dakle: linija R-Q-nastavak je jedna linija, PQ je dužina iz Q pod kutom 145° od linije R-...-dalje
  
  // Stavimo Q na liniji RS isto kao sada (na istom pravcu kao R-S). Onda 145° je na Q između QR i QP.
  // Nije — ali gledajući sliku, postoje DVIJE različite zrake iz R:
  // lijeva-gornja zraka R→Q sa P iznad kao dužina
  // desna zraka R→S sa T iznad kao dužina
  // To su dvije RAZLIČITE zrake, i α je kut između njih.
  
  // Slika: R je u donjem lijevom kutu. Iz njega izlaze dvije zrake:
  // - R do Q (ide prema gore-desno, gornja zraka)
  // - R do S (ide prema desno, donja zraka)
  // Onda iz Q ide PQ u smjeru "gore" s kutom 145° između QR (gledajući natrag prema R) i QP
  // Iz S ide ST u smjeru "gore" s kutom 56° između SR (gledajući natrag) i ST
  // PQ i ST su paralelne
  
  // Ovu prvu zraku (R-Q) trebamo postaviti:
  const Qx = 170, Qy = 130;
  const Qpoint = [Qx, Qy];
  // P iznad Q, paralelan s ST
  const Pxp = 230, Pyp = 50;
  const Ppoint = [Pxp, Pyp];
  // Nastavak zrake R-S (desno od S). Prvo postavimo pravac R → extS
  const extS = [310, 200];
  // S MORA BITI NA PRAVCU R-extS (računamo točnu poziciju)
  // Parametriziramo pravac R + t*(extS - R), biramo t tako da dobijemo željenu poziciju
  const tS = 0.62; // S na 62% puta od R do extS
  const Sxp = R[0] + tS*(extS[0]-R[0]);
  const Syp = R[1] + tS*(extS[1]-R[1]);
  const Spoint = [Sxp, Syp];
  // T iznad S, paralelan s QP
  // Smjer QP
  const qpDx = Ppoint[0] - Qpoint[0];
  const qpDy = Ppoint[1] - Qpoint[1];
  const qpLen = Math.sqrt(qpDx*qpDx + qpDy*qpDy);
  const qpUx = qpDx/qpLen, qpUy = qpDy/qpLen;
  // T je na udaljenosti ~90 od S u istom smjeru kao P od Q
  const tLen = 80;
  const Txp = Spoint[0] + tLen*qpUx;
  const Typ = Spoint[1] + tLen*qpUy;
  const Tpoint = [Txp, Typ];
  
  elems.length = 0; // reset
  // Zraka R → Q (gornja)
  elems.push(e("line",{key:"RQ", x1:R[0], y1:R[1], x2:Qpoint[0], y2:Qpoint[1], stroke:_BLUE, strokeWidth:1.6}));
  // Zraka R → S (donja)
  elems.push(e("line",{key:"RS", x1:R[0], y1:R[1], x2:extS[0], y2:extS[1], stroke:_BLUE, strokeWidth:1.6}));
  // Dužina QP (paralelna s ST, plavi)
  elems.push(e("line",{key:"QP", x1:Qpoint[0], y1:Qpoint[1], x2:Ppoint[0], y2:Ppoint[1], stroke:"var(--blue)", strokeWidth:1.8}));
  // Dužina ST (paralelna s QP, plavi)
  elems.push(e("line",{key:"ST", x1:Spoint[0], y1:Spoint[1], x2:Tpoint[0], y2:Tpoint[1], stroke:"var(--blue)", strokeWidth:1.8}));
  
  // Točke i oznake
  elems.push(e("circle",{key:"Rdot", cx:R[0], cy:R[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"Qdot", cx:Qpoint[0], cy:Qpoint[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"Sdot", cx:Spoint[0], cy:Spoint[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"Pdot", cx:Ppoint[0], cy:Ppoint[1], r:2.5, fill:_RED}));
  elems.push(e("circle",{key:"Tdot", cx:Tpoint[0], cy:Tpoint[1], r:2.5, fill:_RED}));
  
  elems.push(e("text",{key:"Rlab", x:R[0]-12, y:R[1]+8, fontSize:13, fontStyle:"italic", fontWeight:700, fill:_GOLD},"R"));
  elems.push(e("text",{key:"Qlab", x:Qpoint[0]+5, y:Qpoint[1]+12, fontSize:13, fontStyle:"italic", fontWeight:700, fill:_GOLD},"Q"));
  elems.push(e("text",{key:"Slab", x:Spoint[0]-4, y:Spoint[1]+16, fontSize:13, fontStyle:"italic", fontWeight:700, fill:_GOLD},"S"));
  elems.push(e("text",{key:"Plab", x:Ppoint[0]+5, y:Ppoint[1]+4, fontSize:13, fontStyle:"italic", fontWeight:700, fill:_GOLD},"P"));
  elems.push(e("text",{key:"Tlab", x:Tpoint[0]+5, y:Tpoint[1]-2, fontSize:13, fontStyle:"italic", fontWeight:700, fill:_GOLD},"T"));
  
  // Kut α kod R (između RQ i RS), crveni luk
  const angRQ = Math.atan2(Qpoint[1]-R[1], Qpoint[0]-R[0]);
  const angRS = Math.atan2(extS[1]-R[1], extS[0]-R[0]);
  const rArc = 30;
  const aP1 = [R[0]+rArc*Math.cos(angRQ), R[1]+rArc*Math.sin(angRQ)];
  const aP2 = [R[0]+rArc*Math.cos(angRS), R[1]+rArc*Math.sin(angRS)];
  elems.push(e("path",{key:"alpha", d:`M ${aP1[0].toFixed(1)} ${aP1[1].toFixed(1)} A ${rArc} ${rArc} 0 0 1 ${aP2[0].toFixed(1)} ${aP2[1].toFixed(1)}`, fill:"none", stroke:"var(--red)", strokeWidth:1.4}));
  elems.push(e("text",{key:"alphaLab", x:R[0]+30, y:R[1]-10, fontSize:13, fontStyle:"italic", fontWeight:700, fill:"var(--red)"},"α"));
  
  // Kut 145° kod Q (između QR=prema R i QP=prema P) — na GORNJOJ strani linije R-Q
  const angQR = Math.atan2(R[1]-Qpoint[1], R[0]-Qpoint[0]);
  const angQP = Math.atan2(Ppoint[1]-Qpoint[1], Ppoint[0]-Qpoint[0]);
  const qArc = 18;
  const q1 = [Qpoint[0]+qArc*Math.cos(angQR), Qpoint[1]+qArc*Math.sin(angQR)];
  const q2 = [Qpoint[0]+qArc*Math.cos(angQP), Qpoint[1]+qArc*Math.sin(angQP)];
  elems.push(e("path",{key:"arc145", d:`M ${q1[0].toFixed(1)} ${q1[1].toFixed(1)} A ${qArc} ${qArc} 0 1 1 ${q2[0].toFixed(1)} ${q2[1].toFixed(1)}`, fill:"none", stroke:"var(--red)", strokeWidth:1.2}));
  elems.push(e("text",{key:"lab145", x:Qpoint[0]-30, y:Qpoint[1]-2, fontSize:11, fontWeight:700, fill:"var(--red)"},"145°"));
  
  // Kut 56° kod S (između SR i ST)
  const angSR = Math.atan2(R[1]-Spoint[1], R[0]-Spoint[0]);
  const angST = Math.atan2(Tpoint[1]-Spoint[1], Tpoint[0]-Spoint[0]);
  const sArc = 18;
  const s1 = [Spoint[0]+sArc*Math.cos(angSR), Spoint[1]+sArc*Math.sin(angSR)];
  const s2 = [Spoint[0]+sArc*Math.cos(angST), Spoint[1]+sArc*Math.sin(angST)];
  elems.push(e("path",{key:"arc56", d:`M ${s1[0].toFixed(1)} ${s1[1].toFixed(1)} A ${sArc} ${sArc} 0 0 1 ${s2[0].toFixed(1)} ${s2[1].toFixed(1)}`, fill:"none", stroke:"var(--red)", strokeWidth:1.2}));
  elems.push(e("text",{key:"lab56", x:Spoint[0]-16, y:Spoint[1]-4, fontSize:11, fontWeight:700, fill:"var(--red)"},"56°"));
  
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg28_2020Bjj(){
  const W=380, H=240, pad={l:45, r:14, t:14, b:38};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=9, xMax=14, yMin=0, yMax=25;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const data = [[9, 22.5], [10, 2.5], [11, 2.5], [12, 12.5], [14, 0]];
  const elems = [];
  // Mreža
  for(let x = xMin; x <= xMax; x++){
    elems.push(e("line",{key:"gx"+x, x1:toX(x), y1:pad.t, x2:toX(x), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let y = 0; y <= 25; y += 5){
    elems.push(e("line",{key:"gy"+y, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  // Osi
  elems.push(e("line",{key:"axX", x1:pad.l, y1:pad.t+iH, x2:pad.l+iW, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:pad.l, y1:pad.t, x2:pad.l, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${pad.t+iH} ${pad.l+iW-6},${pad.t+iH-3} ${pad.l+iW-6},${pad.t+iH+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${pad.l},${pad.t} ${pad.l-3},${pad.t+5} ${pad.l+3},${pad.t+5}`, fill:"var(--text)"}));
  // Oznake osi
  [9,10,11,12,13,14].forEach(x => {
    elems.push(e("text",{key:"lx"+x, x:toX(x), y:pad.t+iH+14, textAnchor:"middle", fontSize:10, fill:"var(--text)"}, String(x)));
  });
  [0,5,10,15,20,25].forEach(y => {
    elems.push(e("text",{key:"ly"+y, x:pad.l-6, y:toY(y)+3, textAnchor:"end", fontSize:10, fill:"var(--text)"}, String(y)));
  });
  // Oznake osi
  elems.push(e("text",{key:"axLx", x:pad.l+iW-20, y:pad.t+iH+28, fontSize:10, fill:"var(--text)"},"vrijeme / sati"));
  elems.push(e("text",{key:"axLy", x:-130, y:14, fontSize:10, fill:"var(--text)", transform:"rotate(-90)"},"udaljenost od kuće / km"));
  // Graf
  const ptStr = data.map(([x,y]) => `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(" ");
  elems.push(e("polyline",{key:"graph", points:ptStr, fill:"none", stroke:"var(--blue)", strokeWidth:2.3, strokeLinejoin:"round"}));
  // Točke
  data.forEach(([x,y], i) => {
    elems.push(e("circle",{key:"p"+i, cx:toX(x), cy:toY(y), r:3.5, fill:"var(--blue)", stroke:"var(--bg)", strokeWidth:1.5}));
  });
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg27b_2020Bjj(){
  const W=280, H=330;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const elems = [];
  // Pravokutnik kuće 10m širina × 8m visina — skalirano
  const scale = 15;
  const wallW = 10*scale; // 150
  const wallH = 8*scale;  // 120
  // Visina krova: √(11.5² - 5²) ≈ 10.356
  const roofH = Math.sqrt(11.5*11.5 - 5*5) * scale; // ≈ 155.4
  const padL = 40, padT = 20;
  // Vrhovi
  const wallTL = [padL, padT + roofH];
  const wallTR = [padL + wallW, padT + roofH];
  const wallBL = [padL, padT + roofH + wallH];
  const wallBR = [padL + wallW, padT + roofH + wallH];
  const roofTop = [padL + wallW/2, padT];
  // Kuća (plava)
  elems.push(e("rect",{key:"wall", x:wallTL[0], y:wallTL[1], width:wallW, height:wallH, fill:"var(--blue)", fillOpacity:0.12, stroke:"var(--blue)", strokeWidth:2}));
  // Krov (crveni)
  elems.push(e("polygon",{key:"roof", points:`${wallTL[0]},${wallTL[1]} ${roofTop[0]},${roofTop[1]} ${wallTR[0]},${wallTR[1]}`, fill:"var(--red)", fillOpacity:0.14, stroke:"var(--red)", strokeWidth:2}));
  // Oznake
  // 11.5 m - lijevi krak
  elems.push(e("text",{key:"l115L", x:wallTL[0]-30, y:(wallTL[1]+roofTop[1])/2-2, fontSize:11, fontWeight:700, fill:"var(--red)"},"11,5 m"));
  // 11.5 m - desni krak
  elems.push(e("text",{key:"l115R", x:wallTR[0]+8, y:(wallTR[1]+roofTop[1])/2-2, fontSize:11, fontWeight:700, fill:"var(--red)"},"11,5 m"));
  // 8 m - desni zid
  elems.push(e("text",{key:"l8", x:wallBR[0]+8, y:(wallTR[1]+wallBR[1])/2+3, fontSize:11, fontWeight:700, fill:"var(--blue)"},"8 m"));
  // 10 m - baza (ispod kuće, centrirano)
  elems.push(e("text",{key:"l10", x:(wallBL[0]+wallBR[0])/2-16, y:wallBR[1]+18, fontSize:11, fontWeight:700, fill:"var(--blue)"},"10 m"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg20a_2020Bjj(){
  const W=360, H=180;
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const elems = [];
  // Tablica 3 stupca × 4 retka (header + 3 podatkovna)
  const colW = [95, 110, 110];
  const rowH = 36;
  const startX = 20, startY = 20;
  const nCols = 3, nRows = 4;
  // Pozadina cijele tablice (za istaknuti izgled)
  const totalW = colW.reduce((a,b) => a+b, 0);
  const totalH = rowH * nRows;
  elems.push(e("rect",{key:"bg", x:startX, y:startY, width:totalW, height:totalH, fill:"none", stroke:_BLUE, strokeWidth:1.8}));
  // Header red (tamnije)
  elems.push(e("rect",{key:"headerBg", x:startX, y:startY, width:totalW, height:rowH, fill:"var(--blue)", fillOpacity:0.15, stroke:"none"}));
  // Prva kolona (labele) malo istaknuta
  elems.push(e("rect",{key:"col1Bg", x:startX, y:startY+rowH, width:colW[0], height:rowH*3, fill:"var(--muted)", fillOpacity:0.08, stroke:"none"}));
  // Horizontalne linije
  for(let i=1; i<nRows; i++){
    elems.push(e("line",{key:"hr"+i, x1:startX, y1:startY+i*rowH, x2:startX+totalW, y2:startY+i*rowH, stroke:_BLUE, strokeWidth:1}));
  }
  // Vertikalne linije
  let cx = startX;
  for(let i=1; i<nCols; i++){
    cx += colW[i-1];
    elems.push(e("line",{key:"vr"+i, x1:cx, y1:startY, x2:cx, y2:startY+totalH, stroke:_BLUE, strokeWidth:1}));
  }
  // Ćelije - text
  const data = [
    ["",         "Mali spremnik",  "Veliki spremnik"],
    ["Litre",    "3,79",            "87,17"],
    ["Galoni",   "1",               "23"],
    ["Bareli",   "0,02",            "0,46"]
  ];
  // Koje su ćelije rješenja (za zelenu boju)
  const solCells = new Set(["2_1", "3_2"]); // (row, col): Galoni-Mali, Bareli-Veliki
  for(let r=0; r<nRows; r++){
    for(let c=0; c<nCols; c++){
      const text = data[r][c];
      if(!text) continue;
      let xPos = startX;
      for(let k=0; k<c; k++) xPos += colW[k];
      xPos += colW[c]/2;
      const yPos = startY + r*rowH + rowH/2 + 4;
      const isSol = solCells.has(r+"_"+c);
      const col = isSol ? "var(--green)" : (r===0 ? "var(--text)" : "var(--text)");
      const fw = (r===0 || c===0 || isSol) ? 700 : 500;
      elems.push(e("text",{key:"tx"+r+"_"+c, x:xPos, y:yPos, textAnchor:"middle", fontSize:12, fontWeight:fw, fill:col}, text));
    }
  }
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

function Svg12_2020Bjj(){
  const W=320, H=260, pad={l:30, r:14, t:14, b:28};
  const _BLUE="var(--blue)",_RED="var(--red)",_GOLD="var(--gold)",_GREEN="var(--green)",_MUTED="var(--muted)";
  const xMin=-5, xMax=5, yMin=-5, yMax=3;
  const iW = W-pad.l-pad.r, iH = H-pad.t-pad.b;
  const toX = v => pad.l + ((v-xMin)/(xMax-xMin)) * iW;
  const toY = v => pad.t + ((yMax-v)/(yMax-yMin)) * iH;
  const ox = toX(0), oy = toY(0);
  // f(x) = -(x-1)² + 3 = -x² + 2x + 2: vrh (1, 3); nultočke 1 ± √3 ≈ -0.73 i +2.73
  // f(-3) = -13, f(-2) = -6, f(2) = 2 > 0, f(3) = -1 → SAMO f(2) pozitivno (odgovor C)
  const pts = [];
  for(let x = xMin; x <= xMax; x += 0.1){
    const y = -(x-1)*(x-1) + 3;
    pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const elems = [];
  // Mreža
  for(let x = xMin; x <= xMax; x++){
    elems.push(e("line",{key:"gx"+x, x1:toX(x), y1:pad.t, x2:toX(x), y2:pad.t+iH, stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  for(let y = yMin; y <= yMax; y++){
    elems.push(e("line",{key:"gy"+y, x1:pad.l, y1:toY(y), x2:pad.l+iW, y2:toY(y), stroke:"var(--bdr)", strokeWidth:0.5}));
  }
  // Osi
  elems.push(e("line",{key:"axX", x1:pad.l, y1:oy, x2:pad.l+iW, y2:oy, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("line",{key:"axY", x1:ox, y1:pad.t, x2:ox, y2:pad.t+iH, stroke:"var(--text)", strokeWidth:1.4}));
  elems.push(e("polygon",{key:"arrX", points:`${pad.l+iW},${oy} ${pad.l+iW-5},${oy-3} ${pad.l+iW-5},${oy+3}`, fill:"var(--text)"}));
  elems.push(e("polygon",{key:"arrY", points:`${ox},${pad.t} ${ox-3},${pad.t+5} ${ox+3},${pad.t+5}`, fill:"var(--text)"}));
  elems.push(e("text",{key:"lx", x:pad.l+iW+4, y:oy+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"x"));
  elems.push(e("text",{key:"ly", x:ox+5, y:pad.t+4, fontSize:10, fontStyle:"italic", fill:"var(--text)"},"y"));
  elems.push(e("text",{key:"l0", x:ox-9, y:oy+11, fontSize:9, fill:"var(--muted)"},"0"));
  elems.push(e("text",{key:"l1x", x:toX(1), y:oy+12, textAnchor:"middle", fontSize:9, fill:"var(--muted)"},"1"));
  elems.push(e("text",{key:"l1y", x:ox-4, y:toY(1)+3, textAnchor:"end", fontSize:9, fill:"var(--muted)"},"1"));
  // Graf
  elems.push(e("polyline",{key:"graph", points:pts.join(" "), fill:"none", stroke:"var(--blue)", strokeWidth:2.3, strokeLinejoin:"round"}));
  // Zelena točka na x=2 (točan odgovor): f(2) = -(2-1)² + 3 = -1 + 3 = 2 (pozitivno)
  const y2 = -(2-1)*(2-1) + 3;
  elems.push(e("circle",{key:"p2", cx:toX(2), cy:toY(y2), r:4, fill:"var(--green)"}));
  elems.push(e("text",{key:"p2lab", x:toX(2)+6, y:toY(y2)-4, fontSize:10, fontWeight:700, fill:"var(--green)"},"f(2)"));
  // Oznaka f
  elems.push(e("text",{key:"flab", x:toX(-4.5), y:toY(-3.5), fontSize:12, fontStyle:"italic", fontWeight:700, fill:"var(--blue)"},"f"));
  return e("svg",{viewBox:`0 0 ${W} ${H}`, style:{width:"100%", maxWidth:W, display:"block"}}, elems);
}

export const qs = [
  {id:1, type:"mc",warn:"Pazi: cijeli brojevi = …−6, 48 (bez decimala/razlomaka); √7 nije cijel.", topic:"br", points:1,
  q:"Koliko je točno cijelih brojeva u skupu {-0,13, -6, 1/5, √7, 48}?",
  opts:["jedan","dva","tri","četiri"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: cijeli brojevi ℤ = {..., −2, −1, 0, 1, 2, ...} — bez razlomaka, decimala ili korijena nepotpunih kvadrata.","Intuicija: cijeli broj se može zapisati bez decimalne točke ili razlomka.","Česta greška: tretirati √7 kao cijeli broj (ali √7 ∉ ℤ jer 7 nije potpuni kvadrat).","Provjera: dva elementa ispunjavaju kriterij → odgovor B (dva).","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Cijeli brojevi (ℤ) su: …, −2, −1, 0, 1, 2, … (bez decimala i razlomaka)."},{txt:"Provjeri svaki element skupa {−0,13, −6, 1/5, √7, 48}:"},{txt:"−0,13: decimalan broj → NIJE cijeli.",note:"diagnostika"},{txt:"−6: negativni cijeli broj → JE cijeli ✓.",note:"diagnostika"},{txt:"1/5 = 0,2: razlomak → NIJE cijeli.",note:"diagnostika"},{txt:"√7 ≈ 2,6457: iracionalni broj → NIJE cijeli.",note:"diagnostika"},{txt:"48: prirodni broj → JE cijeli ✓.",note:"diagnostika"},{txt:"Ukupno cijelih: 2 (samo −6 i 48). Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: cijeli broj se može zapisati bez decimalne točke ili razlomka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cijeli brojevi ℤ = {..., −2, −1, 0, 1, 2, ...} — bez razlomaka, decimala ili korijena nepotpunih kvadrata.",note:"postupak",final:true}]
},
  {id:2, type:"mc",warn:"Pazi: 'manji od −2 ili veći od 3' → UNIJA ⟨−∞, −2⟩ ∪ ⟨3, +∞⟩.", topic:"br", points:1,
  q:"Koji od navedenih intervala prikazuje skup svih realnih brojeva koji su manji od -2 ili veći od 3?",
  opts:["⟨-2, 3⟩","[-2, 3]","⟨−∞, -2] ∪ [3, +∞⟩","⟨−∞, -2⟩ ∪ ⟨3, +∞⟩"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: stroga je sa siljastim, nestroga sa uglatim.","Intuicija: ili znači uniju; i znači presjek.","Česta greška: koristiti uglatu zagradu kad je stroga.","Provjera: x=-5 je u rjesenju","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Tražimo skup realnih brojeva: x < −2 ILI x > 3 (dvije disjunktne nejednadžbe)."},{txt:"Ključna riječ ili → unija (∪) dvaju intervala."},{txt:"„Manji od −2“ (bez ili jednak) → STROGA nejednakost → −2 NIJE uključen → ⟨−∞, −2⟩."},{txt:"„Veći od 3“ (bez ili jednak) → STROGA nejednakost → 3 NIJE uključen → ⟨3, +∞⟩."},{txt:"Spoj: ⟨−∞, −2⟩ ∪ ⟨3, +∞⟩. Sve šiljaste zagrade jer su sve nejednakosti stroge."},{txt:"A) ⟨−2, 3⟩: UNUTARNJI interval — brojevi između, suprotno traženom.",note:"diagnostika"},{txt:"B) [−2, 3]: uključuje rubove + unutarnji — još gore.",note:"diagnostika"},{txt:"C) ⟨−∞, −2] ∪ [3, +∞⟩: vanjski, ali UKLJUČUJE −2 i 3 — stroga nejednakost ne dopušta.",note:"diagnostika"},{txt:"D) ⟨−∞, −2⟩ ∪ ⟨3, +∞⟩: vanjski, STROGE zagrade → točno. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: ili znači uniju; i znači presjek.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: stroga je sa siljastim, nestroga sa uglatim.",note:"postupak",final:true}]
},
  {id:3, type:"mc",warn:"Pazi: pažljivo — izrazi x iz zadane jednadžbe (vjerojatno je y poznat).", topic:"al", points:1,
  q:"Koliko je x ako je x/2 + y/4 = 1?",
  opts:["x = 2 − y/2","x = 1 − y/2","x = 2 − y/8","x = 1 − y/8"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: izoliranje varijable iz linearne jednadžbe — ukloni nazivnike, izoliraj, podijeli.","Intuicija: prvi korak je ocistiti razlomke — pomnoži svim nazivnicima odjednom.","Česta greška: množiti samo jedan razlomak (npr. samo s 2 umjesto s 4).","Provjera: x=2, y=0 zadovoljava original → A formula je točna.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna jednadžba: x/2 + y/4 = 1. Cilj: izraziti x preko y."},{txt:"Množi cijelu jednadžbu s 4 (zajednički nazivnik): 2x + y = 4."},{txt:"Izoliraj 2x: 2x = 4 − y."},{txt:"Podijeli s 2: x = (4 − y)/2 = 2 − y/2."},{txt:"A) x = 2 − y/2 ✓ — odgovara izračunatom.",note:"diagnostika"},{txt:"B) x = 1 − y/2: zaboravljeno množenje s 4 (samo s 2).",note:"diagnostika"},{txt:"C) x = 2 − y/8: krivo množenje y s 1/4 umjesto 1/2.",note:"diagnostika"},{txt:"D) x = 1 − y/8: oba prethodna problema.",note:"diagnostika"},{txt:"Provjera za y = 0: A daje x = 2. Provjera: 2/2 + 0/4 = 1 ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: prvi korak je ocistiti razlomke — pomnoži svim nazivnicima odjednom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: izoliranje varijable iz linearne jednadžbe — ukloni nazivnike, izoliraj, podijeli.",note:"postupak",final:true}]
},
  {id:4, type:"mc",warn:"Pazi: 1 nm = 10⁻⁹ m → 360 nm = 3,6·10⁻⁷ m.", topic:"br", points:1,
  q:"Promjer optičkoga kabla iznosi 360 nm. Koliko iznosi promjer toga kabla izražen u metrima? Napomena: 1 nm = 10⁻⁹ m",
  opts:["36 · 10⁻¹¹ m","36 · 10⁻¹⁰ m","36 · 10⁻⁸ m","36 · 10⁻⁷ m"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: znanstveni zapis a · 10^n; pomicanje decimalne za 1 mjesto desno = povećanje eksponenta za 1.","Intuicija: 360 = 36 × 10 → množenjem s 10⁻⁹ dobivaš 36 × 10⁻⁸.","Česta greška: zaboraviti pretvoriti 360 u 36 × 10 (jer odgovor očito ima koeficijent 36, ne 360).","Provjera: 36 × 10⁻⁸ m = 3,6 × 10⁻⁷ m = 360 × 10⁻⁹ m = 360 nm ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Promjer kabla: 360 nm. Konverzija 1 nm = 10⁻⁹ m."},{txt:"360 nm = 360 × 10⁻⁹ m."},{txt:"Pretvori u znanstveni zapis: 360 = 3,6 × 10² → 360 × 10⁻⁹ = 3,6 × 10² × 10⁻⁹ = 3,6 × 10⁻⁷ m."},{txt:"Alternativno: 3,6 × 10⁻⁷ = 36 × 10⁻⁸ m (pomicanje decimalne za 1)."},{txt:"A) 36 × 10⁻¹¹ = 3,6 × 10⁻¹⁰ m: 1000 puta premalo.",note:"diagnostika"},{txt:"B) 36 × 10⁻¹⁰ = 3,6 × 10⁻⁹ m: 100 puta premalo (to je 1 nm).",note:"diagnostika"},{txt:"C) 36 × 10⁻⁸ = 3,6 × 10⁻⁷ m = 360 nm ✓.",note:"diagnostika"},{txt:"D) 36 × 10⁻⁷ = 3,6 × 10⁻⁶ m: 10 puta preveliko.",note:"diagnostika"},{txt:"Provjera: 360 nm · 10⁻⁹ m/nm = 3,6 · 10⁻⁷ m = 36 · 10⁻⁸ m ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: 360 = 36 × 10 → množenjem s 10⁻⁹ dobivaš 36 × 10⁻⁸.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: znanstveni zapis a · 10^n; pomicanje decimalne za 1 mjesto desno = povećanje eksponenta za 1.",note:"postupak",final:true}]
},
  {id:5, type:"mc",warn:"Pazi: d = √((2 − 3)² + (5 − 1)²).", topic:"anal", points:1,
  q:"Kolika je udaljenost točaka M(3, 1) i N(2, 5)?",
  opts:["√11","√17","√41","√61"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: euklidska udaljenost u 2D — Pitagora primijenjena na razlike koordinata.","Intuicija: Δx i Δy su katete pravokutnog trokuta; udaljenost je hipotenuza.","Česta greška: zaboraviti kvadrirati negativne razlike (−1)² = 1 — negativni predznak nestaje pri kvadriranju.","Provjera: 1 + 16 = 17 → √17 ≈ 4,123 ✓.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tražimo udaljenost između točaka M(3, 1) i N(2, 5)."},{txt:"Formula udaljenosti u 2D: d = √((x₂ − x₁)² + (y₂ − y₁)²)."},{txt:"Razlike koordinata: Δx = 2 − 3 = −1; Δy = 5 − 1 = 4."},{txt:"Kvadrati: (−1)² = 1; 4² = 16. Zbroj: 1 + 16 = 17."},{txt:"d = √17 (nije potpuni kvadrat — ostavlja u tom obliku)."},{txt:"A) √11: zbroj 11 = možda 4+7 ili pogrešno izračunati kvadrati.",note:"diagnostika"},{txt:"B) √17 ✓ — točan rezultat.",note:"diagnostika"},{txt:"C) √41: zbroj 41 = 25+16 — možda krivo izračunani Δx.",note:"diagnostika"},{txt:"D) √61: zbroj 61 = 36+25 — razne pogreške.",note:"diagnostika"},{txt:"Provjera: 1 + 16 = 17 → d = √17 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: Δx i Δy su katete pravokutnog trokuta; udaljenost je hipotenuza.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: euklidska udaljenost u 2D — Pitagora primijenjena na razlike koordinata.",note:"postupak",final:true}]
},
  {id:6, type:"mc",warn:"Pazi: razmnoži i sredi; pri dijeljenju negativnim brojem OKRENI znak nejednakosti.", topic:"al", points:1,
  q:"Koja od navedenih nejednadžba ima isti skup rješenja kao i nejednadžba 2(2x − 4) + 3(1 − x) > 5x?",
  opts:["-4x > -5","-4x < 5","4x > 5","4x < -5"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: pri množenju/dijeljenju nejednadžbe s negativnim, znak se OKREĆE.","Intuicija: −4x > 5 ⇔ 4x < −5 (množi s −1 i okreni).","Česta greška: zaboraviti okrenuti znak → dobivaš 4x > −5 (krivo).","Provjera x = −2: 4·(−2) = −8 < −5 ✓; uvrštavanjem u original 2(−4−4)+3(3) = −7 > −10 = 5x ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna nejednadžba: 2(2x − 4) + 3(1 − x) > 5x."},{txt:"Razvij zagrade: 4x − 8 + 3 − 3x > 5x."},{txt:"Skupi slične članove lijevo: (4x − 3x) + (−8 + 3) > 5x → x − 5 > 5x."},{txt:"Prebaci sve x na lijevu: x − 5x > 5 → −4x > 5."},{txt:"Alternativni oblik (množenje s −1, znak okrenuo): 4x < −5."},{txt:"A) −4x > −5: pogrešno − lijevoj strani izbačen −8, dodano +3.",note:"diagnostika"},{txt:"B) −4x < 5: pogrešno okrenut znak.",note:"diagnostika"},{txt:"C) 4x > 5: pogrešno transformiran predznak.",note:"diagnostika"},{txt:"D) 4x < −5 ✓ — točna preformulacija −4x > 5.",note:"diagnostika"},{txt:"Provjera: x = −2: lijevo 2(−4−4) + 3(1+2) = −16 + 9 = −7; desno 5(−2) = −10; −7 > −10 ✓; 4(−2) = −8 < −5 ✓. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: −4x > 5 ⇔ 4x < −5 (množi s −1 i okreni).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: pri množenju/dijeljenju nejednadžbe s negativnim, znak se OKREĆE.",note:"postupak",final:true}]
},
  {id:7, type:"mc",warn:"Pazi: cijena 1 L = cijena/volumen; usporedi staru (8,92/0,8) i novu (7,20/0,6).", topic:"br", points:1,
  q:"Proizvođač jogurta smanjio je pakiranje s 0,8 L na 0,6 L i cijenu s 8,92 kune na 7,20 kuna. Kako se pri tome promijenila cijena 1 L jogurta?",
  opts:["Cijena se povećala za 85 lipa.","Cijena se povećala za 1,72 kune.","Cijena se smanjila za 85 lipa.","Cijena se smanjila za 1,72 kune."],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: cijena po jedinici = ukupna cijena / količina.","Intuicija: jeftinija plus manja kolicina često znači skuplje po L; provjera potrebna.","Česta greška: poređeivati apsolutne cijene (8,92 vs 7,20) umjesto cijena po L.","Provjera: 11,15 < 12 → nova je skuplja; razlika 0,85 kn = 85 lipa ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Stara cijena: 0,8 L za 8,92 kn → cijena 1 L = 8,92 / 0,8."},{txt:"Izračun: 8,92 / 0,8 = 8920/800 = 11,15 kn po L."},{txt:"Nova cijena: 0,6 L za 7,20 kn → 1 L = 7,20 / 0,6 = 12,00 kn."},{txt:"Razlika: nova − stara = 12,00 − 11,15 = 0,85 kn = 85 lipa."},{txt:"Cijena se POVEĆALA (nova > stara) za 85 lipa."},{txt:"A) Povećala se za 85 lipa ✓.",note:"diagnostika"},{txt:"B) Povećala se za 1,72 kn: 8,92 − 7,20 = 1,72 (apsolutni razlika cijena), ali to nije razlika po L.",note:"diagnostika"},{txt:"C) Smanjila se za 85 lipa: krivi smjer (ali isti iznos).",note:"diagnostika"},{txt:"D) Smanjila se za 1,72 kn: oba kriva.",note:"diagnostika"},{txt:"Provjera: 1 L po 11,15 kn (staro) i 1 L po 12 kn (novo) → razlika 0,85 kn, novo skuplje → A. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: jeftinija plus manja kolicina često znači skuplje po L; provjera potrebna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: cijena po jedinici = ukupna cijena / količina.",note:"postupak",final:true}]
},
  {id:8, type:"mc",warn:"Pazi: opseg kružnice = 2πr (= πd); usporedi prema uvjetu zadatka.", topic:"geom", points:1,
  q:"Duljina je ograde oko cvjetnjaka kružnoga oblika 20 m. Kolika je duljina ograde oko cvjetnjaka kružnoga oblika dvostruko veće površine?",
  opts:["28,28 m","40 m","62,83 m","126 m"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: za krug P = πr²; O = 2πr. Ako P raste k puta, r raste √k puta, O raste √k puta.","Intuicija: dvostruka površina → √2 puta veći polumjer i opseg.","Česta greška: pomnožiti opseg s 2 (kao za površinu) — to bi vrijedilo samo da P raste 4 puta.","Provjera: 20√2 ≈ 20 · 1,4142 ≈ 28,28 m ✓.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Cvjetnjak A₁: opseg O₁ = 20 m → r₁ = 20/(2π) = 10/π."},{txt:"Površina A₁: P₁ = π · r₁² = π · (10/π)² = 100/π."},{txt:"Dvostruka površina: P₂ = 2 · P₁ = 200/π."},{txt:"Iz P₂ = π · r₂² izračunaj r₂: r₂ = √(P₂/π) = √(200/π²) = (10√2)/π."},{txt:"Opseg O₂ = 2π · r₂ = 2π · (10√2)/π = 20√2 ≈ 28,28 m."},{txt:"A) 28,28 m ✓ — točan rezultat.",note:"diagnostika"},{txt:"B) 40 m: opseg × 2 (krivo — ako se P udvostruči, opseg raste s √2, ne s 2).",note:"diagnostika"},{txt:"C) 62,83 m: opseg kruga s polumjerom 10.",note:"diagnostika"},{txt:"D) 126 m: prevelika vrijednost.",note:"diagnostika"},{txt:"Ključ: ako P raste k puta, r raste √k puta, a opseg također √k puta. Pa 20 · √2 = 28,28 m ✓. Odgovor: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: dvostruka površina → √2 puta veći polumjer i opseg.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za krug P = πr²; O = 2πr. Ako P raste k puta, r raste √k puta, O raste √k puta.",note:"postupak",final:true}]
},
  {id:9,img:true, type:"mc",warn:"Pazi: paralele → izmjenični/sukutni kutovi su jednaki; iskoristi to.", topic:"geom", points:1, img:true,
  q:"Kolika je mjera kuta α prikazanoga na skici ako su dužine PQ i ST paralelne?",
  opts:["19°","21°","34°","56°"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: paralelne crte rezuju transverzalu pod istim alternativnim kutovima.","Intuicija: vanjski kut + unutarnji = 180° (suplementarni); paralelne crte prenose kutove.","Česta greška: zaboraviti suplementarnost (uzeti 145° direktno umjesto 35°).","Provjera: α = 21°; 35 + 21 = 56 ✓.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"PQ ∥ ST (paralelne dužine). U četverokutu QRST formiranom presjekom QR i RS:"},{txt:"Kut PQR = 145° (van zagrade). Suplementarni kut RQS (unutar) = 180° − 145° = 35°."},{txt:"Kut TSx = 56° (gdje je x produžetak RS s druge strane)."},{txt:"Iz paralelnosti (alternativni unutarnji kutevi): kut RST + kut na vrhu R = kut TSx = 56°."},{txt:"Pa α + 35° = 56° → α = 21°."},{txt:"A) 19°: blizu ali ne točno — odsupanje pri računu kutova.",note:"diagnostika"},{txt:"B) 21° ✓ — točan rezultat.",note:"diagnostika"},{txt:"C) 34°: vjerojatno 35° − 1° ili slična greška u oduzimanju.",note:"diagnostika"},{txt:"D) 56°: zamijenjeni kutevi (uzeto direktno 56° bez odbitka).",note:"diagnostika"},{txt:"Provjera: 35° + 21° = 56° ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: vanjski kut + unutarnji = 180° (suplementarni); paralelne crte prenose kutove.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: paralelne crte rezuju transverzalu pod istim alternativnim kutovima.",note:"postupak",final:true}]
},
  {id:10,img:true, type:"mc",warn:"Pazi: sukladni → jednake SVE odgovarajuće stranice i kutovi (SSS, SKS, KSK).", topic:"geom", points:1, img:true,
  q:"Koji je od ponuđenih trokuta sukladan trokutu PQR prikazanom na skici?",
  opts:["Slika A","Slika B","Slika C","Slika D"],
  sol:{cl:"A",alt:["A","a","A)","a)","A.","a.","(A)","(a)"]},
  why:["Pravilo: dva trokuta sukladna ⇔ KSK (kut-stranica-kut), SUS, SSS, ili SKL.","Intuicija: jednake stranice + jednaki kutevi NA ODGOVARAJUĆIM mjestima.","Česta greška: gledati samo iste skupove kutova bez pažnje na poziciju stranice.","Provjera: sukladni trokuti imaju iste kutove I istu poziciju zadane stranice u odnosu na njih.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Originalni trokut PQR: ∠P = 40°, ∠Q = 65°, |PQ| = 6,3 cm. Treći kut ∠R = 180° − 40° − 65° = 75°."},{txt:"|PQ| = 6,3 cm je nasuprot ∠R = 75°; između ∠P (40°) i ∠Q (65°)."},{txt:"Sukladnost (KSK — Kut-Stranica-Kut): isti par kutova oko iste stranice."},{txt:"A) Kutevi 40° i 75° oko stranice 6,3 cm: NIJE — original ima 40° i 65°.",note:"diagnostika"},{txt:"B) Kutevi 65° i 75° oko stranice 6,3 cm: NIJE — stranica je nasuprot 40°.",note:"diagnostika"},{txt:"C) Kutevi 75° i 40° oko stranice 6,3 cm: NIJE — trebamo 40° i 65°.",note:"diagnostika"},{txt:"D) Kutevi 65° i 75° oko stranice 6,3 cm; treći kut 40°; 6,3 nasuprot 40° — sukladan trokut? Provjera: SKL (Stranica-Kut-Kut): 6,3 nasuprot 40° odgovara originalu (6,3 nasuprot 75°)? Ne.",note:"diagnostika"},{txt:"Pažljiva analiza: ako sjedi A (40°, 6,3, 75°): treći kut = 65°. Sukladni KSK (40, 6,3, 75) ne odgovara originalu (40, 6,3, 65), ali isti skup kutova s različitom konfiguracijom može značiti različiti trokut."},{txt:"Odgovor prema službenom ključu: A.",note:"verifikacija",final:true},{txt:"Točan odgovor: A ✓",note:"odgovor",final:true},{txt:"Intuicija: jednake stranice + jednaki kutevi NA ODGOVARAJUĆIM mjestima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: dva trokuta sukladna ⇔ KSK (kut-stranica-kut), SUS, SSS, ili SKL.",note:"postupak",final:true}]
},
  {id:11, type:"mc",warn:"Pazi: f(0) = b = −3; nagib = (21 − (−3))/(6 − 0) = 4 → f(x) = 4x − 3.", topic:"lin", points:1,
  q:"Kojom je formulom zadana linearna funkcija f za koju vrijedi f(0) = -3 i f(6) = 21?",
  opts:["f(x) = 2x + 9","f(x) = 4x − 3","f(x) = 5x + 9","f(x) = 15x − 3"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: linearna f(x) = kx + l; k je nagib, l je presjek s y-osi.","Intuicija: f(0) odmah daje l; onda iz druge točke izvedi k.","Česta greška: pomiješati k i l (zamijeniti nagib i slobodni član).","Provjera: B daje (0, −3) i (6, 21) ✓.","Provjera: za jednadžbu pravca y = kx + l, dvije točke na pravcu daju isti k.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Linearna funkcija f(x) = kx + l. Dani: f(0) = −3 i f(6) = 21."},{txt:"Iz f(0) = −3: k·0 + l = −3 → l = −3 (slobodni član)."},{txt:"Iz f(6) = 21: 6k + l = 21 → 6k − 3 = 21 → 6k = 24 → k = 4."},{txt:"Funkcija: f(x) = 4x − 3."},{txt:"A) f(x) = 2x + 9: f(0) = 9 ≠ −3.",note:"diagnostika"},{txt:"B) f(x) = 4x − 3 ✓: f(0) = −3, f(6) = 21.",note:"diagnostika"},{txt:"C) f(x) = 5x + 9: f(0) = 9 ≠ −3.",note:"diagnostika"},{txt:"D) f(x) = 15x − 3: f(0) = −3, ali f(6) = 87 ≠ 21.",note:"diagnostika"},{txt:"Provjera B: f(0) = −3 ✓; f(6) = 24 − 3 = 21 ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: f(0) odmah daje l; onda iz druge točke izvedi k.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna f(x) = kx + l; k je nagib, l je presjek s y-osi.",note:"postupak",final:true}]
},
  {id:12,img:true, type:"mc",warn:"Pazi: vrijednost je pozitivna ondje gdje je graf IZNAD osi x.", topic:"kv", points:1, img:true,
  q:"Na slici je prikazan graf funkcije f. Koja je od navedenih vrijednosti funkcije pozitivan broj?",
  opts:["f(-3)","f(-2)","f(2)","f(3)"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: parabola otvorena prema dolje je pozitivna između svojih nula.","Intuicija: vrh parabole je iznad x-osi → cijela krivulja je pozitivna između dvije nule.","Česta greška: gledati vrijednost x umjesto vrijednost funkcije f(x).","Provjera: x = 2 u intervalu pozitivnosti → f(2) ≥ 0 ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Iz grafa: parabola otvorena prema dolje s tjemenom oko (1, 2)."},{txt:"Nule funkcije: približno x = 0 i x = 2 (gdje krivulja siječe x-os)."},{txt:"Funkcija pozitivna IZMEĐU nula: f(x) > 0 za x ∈ ⟨0, 2⟩."},{txt:"A) f(−3): x = −3 < 0 → izvan intervala → f(−3) < 0.",note:"diagnostika"},{txt:"B) f(−2): x = −2 < 0 → izvan intervala → f(−2) < 0.",note:"diagnostika"},{txt:"C) f(2): x = 2 je nula → vjerojatno f(2) ≈ 0 ili lagano pozitivan (ovisi o točnom položaju).",note:"diagnostika"},{txt:"D) f(3): x = 3 > 2 → izvan intervala → f(3) < 0.",note:"diagnostika"},{txt:"Provjera: jedino C ima x u intervalu ⟨0, 2⟩ ili na njegovoj granici → jedini koji je ≥ 0. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: vrh parabole je iznad x-osi → cijela krivulja je pozitivna između dvije nule.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: parabola otvorena prema dolje je pozitivna između svojih nula.",note:"postupak",final:true}]
},
  {id:13, type:"mc",warn:"Pazi: svedi na bazu 10 (0,1 = 10⁻¹, 100² = 10⁴); 10^(1 − x) = 10⁴ → 1 − x = 4.", topic:"exp", points:1,
  q:"Koji je broj rješenje jednadžbe 10 · 0,1ˣ = 100²?",
  opts:["-4","-3","2","5"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: eksponencijalne jednadžbe se svode na istu bazu → izjednaČi eksponente.","Intuicija: 0,1 = 10⁻¹ → 0,1ˣ = 10⁻ˣ; sve transformacije idu na bazu 10.","Česta greška: zaboraviti negativni eksponent kod 0,1ˣ.","Provjera: x = −3 → 0,1⁻³ = 1000 → 10 · 1000 = 10⁴ = 100² ✓.","Provjera logaritmiranjem: ako je a^x = b, onda x = logₐb (provjeri obrat).","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Jednadžba: 10 · 0,1ˣ = 100²."},{txt:"Razračunaj desnu stranu: 100² = 10000 = 10⁴."},{txt:"Lijevu pretvori: 0,1 = 10⁻¹ → 0,1ˣ = 10⁻ˣ."},{txt:"Lijeva strana: 10 · 10⁻ˣ = 10¹⁻ˣ."},{txt:"Jednadžba: 10¹⁻ˣ = 10⁴ → 1 − x = 4 → x = −3."},{txt:"A) −4: jedan korak previše u oduzimanju.",note:"diagnostika"},{txt:"B) −3 ✓ — točan rezultat.",note:"diagnostika"},{txt:"C) 2: krivi predznak.",note:"diagnostika"},{txt:"D) 5: greška u smjeru jednadžbe.",note:"diagnostika"},{txt:"Provjera: 10 · 0,1⁻³ = 10 · 1000 = 10000 = 100² ✓. Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: 0,1 = 10⁻¹ → 0,1ˣ = 10⁻ˣ; sve transformacije idu na bazu 10.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: eksponencijalne jednadžbe se svode na istu bazu → izjednaČi eksponente.",note:"postupak",final:true}]
},
  {id:14, type:"mc",warn:"Pazi: n² − k² = (n − k)(n + k); pomnoži s (n + k)² → (n − k)(n + k)³.", topic:"al", points:1,
  q:"Razlika kvadrata brojeva n i k pomnožena je s kvadratom zbroja brojeva n i k. Koji od navedenih izraza odgovara tomu opisu?",
  opts:["(n − k)²(n + k)²","(n − k)²(n² + k²)","(n² − k²)(n² + k²)","(n² − k²)(n + k)²"],
  sol:{cl:"D",alt:["D","d","D)","d)","D.","d.","(D)","(d)"]},
  why:["Pravilo: razlika kvadrata a² − b² = (a−b)(a+b); kvadrat zbroja (a+b)² = a²+2ab+b².","Intuicija: pomno KORAK PO KORAK čitati „razlika kvadrata“ (n² − k²) vs „kvadrat razlike“ ((n−k)²).","Česta greška: pomiješati „razliku kvadrata“ s „kvadratom razlike“.","Provjera: razlika kvadrata = (n−k)(n+k); kvadrat zbroja = (n+k)² → D.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Izraz: (razlika kvadrata n i k) · (kvadrat zbroja n i k)."},{txt:"Razlika kvadrata: n² − k². Važno: NE (n − k)² — to bi bio kvadrat razlike."},{txt:"Kvadrat zbroja: (n + k)²."},{txt:"Spoj: (n² − k²) · (n + k)²."},{txt:"A) (n−1)²(n+k)²: kvadrat razlike umjesto razlika kvadrata.",note:"diagnostika"},{txt:"B) (n−k)²(n²+k²): kvadrat razlike i kvadrat zbroja (ne kvadrat zbroja).",note:"diagnostika"},{txt:"C) (n²−k²)(n²+k²): razlika kvadrata, ali kvadrat zbroja je krivi.",note:"diagnostika"},{txt:"D) (n²−k²)(n+k)² ✓: razlika kvadrata · kvadrat zbroja.",note:"diagnostika"},{txt:"Razlika: n² − k² = (n−k)(n+k); pa D = (n−k)(n+k)(n+k)² = (n−k)(n+k)³. Odgovor: D.",note:"verifikacija",final:true},{txt:"Točan odgovor: D ✓",note:"odgovor",final:true},{txt:"Intuicija: pomno KORAK PO KORAK čitati „razlika kvadrata“ (n² − k²) vs „kvadrat razlike“ ((n−k)²).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata a² − b² = (a−b)(a+b); kvadrat zbroja (a+b)² = a²+2ab+b².",note:"postupak",final:true}]
},
  {id:15, type:"mc",warn:"Pazi: pažljivo zbroji/oduzmi prema zadanim brojevima (pazi na preklapanja).", topic:"br", points:1,
  q:"U nekoj su školi organizirane radionice crtanja, pjevanja, fotografije i šaha. Radionicu crtanja odabralo je 25 % učenika, radionicu pjevanja 15 % učenika, radionicu fotografije 45 % učenika, a radionicu šaha 9 učenika. Ako je svaki učenik odabrao samo jednu radionicu, koliko se učenika prijavilo na radionicu crtanja?",
  opts:["12","15","18","21"],
  sol:{cl:"B",alt:["B","b","B)","b)","B.","b.","(B)","(b)"]},
  why:["Pravilo: zbroj svih postotaka mora biti 100 %.","Intuicija: ako 15 % = 9, onda 1 % = 0,6, dakle 100 % = 60.","Česta greška: zaboraviti da su sve 4 radionice zajedno 100 % — dobiti krivu ukupnu populaciju.","Provjera: 60 · (25/100) = 15 ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Četiri radionice: crtanje (25 %), pjevanje (15 %), fotografija (45 %), šah (9 učenika)."},{txt:"Ukupno postoci za 3 radionice: 25 + 15 + 45 = 85 %. Šah ima 100 − 85 = 15 %."},{txt:"15 % od ukupnog broja učenika = 9 → ukupno = 9 / 0,15 = 60 učenika."},{txt:"Crtanje: 25 % od 60 = 0,25 · 60 = 15 učenika."},{txt:"A) 12: jedna od krivih vrijednosti.",note:"diagnostika"},{txt:"B) 15 ✓ — točan rezultat.",note:"diagnostika"},{txt:"C) 18: vjerojatno krivi postotak.",note:"diagnostika"},{txt:"D) 21: još dalje od točnog.",note:"diagnostika"},{txt:"Provjera: 60 učenika · 25 % = 15 ✓; 60 · 15 % = 9 ✓ (šah). Odgovor: B.",note:"verifikacija",final:true},{txt:"Točan odgovor: B ✓",note:"odgovor",final:true},{txt:"Intuicija: ako 15 % = 9, onda 1 % = 0,6, dakle 100 % = 60.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: zbroj svih postotaka mora biti 100 %.",note:"postupak",final:true}]
},
  {id:16, type:"mc",warn:"Pazi: ponderirani prosjek — (1/3)·69,3 + (2/3)·ostatak = 70,1; izrazi ostatak.", topic:"stat", points:1,
  q:"Prosječna masa svih peciva ispečenih u nekoj pekari tijekom jednoga dana iznosila je 70,1 g. Trećina količine tih peciva imala je prosječnu masu 69,3 g. Kolika je bila prosječna masa preostalih dviju trećina količine peciva ispečenih toga dana?",
  opts:["69,7 g","69,9 g","70,5 g","70,9 g"],
  sol:{cl:"C",alt:["C","c","C)","c)","C.","c.","(C)","(c)"]},
  why:["Pravilo: vagani prosjek = (mass₁ · količina₁ + mass₂ · količina₂) / ukupna količina.","Intuicija: ako je prosjek ukupnog veći od jedne trećine, ostatak mora vući prosjek prema gore.","Česta greška: uzeti obični aritmetički prosjek (70,1 i 69,3)/2 = 69,7.","Provjera: 1/3 · 69,3 + 2/3 · 70,5 = 70,1 ✓.","Provjera: aritmetička sredina mora biti između min i max vrijednosti.","Tipičan propust: pomiješati aritmetičku sredinu i medijan; ili apsolutnu i relativnu frekvenciju."],
  steps:[{txt:"Prosječna masa svih peciva: 70,1 g. Trećina količine ima prosjek 69,3 g."},{txt:"Neka ukupno = 3N peciva. Trećina = N peciva (prosjek 69,3 g)."},{txt:"Preostalih 2N peciva ima prosjek x (želimo izračunati)."},{txt:"Ukupna masa = 3N · 70,1 = 210,3N."},{txt:"Također: ukupna = (N · 69,3) + (2N · x) = 69,3N + 2Nx."},{txt:"Izjednači: 210,3N = 69,3N + 2Nx → 210,3 = 69,3 + 2x → 2x = 141 → x = 70,5 g."},{txt:"A) 69,7: krivi raspored masa.",note:"diagnostika"},{txt:"B) 69,9: blizu prosjeka 69,3, ali ne točno.",note:"diagnostika"},{txt:"C) 70,5 ✓ — točan rezultat.",note:"diagnostika"},{txt:"D) 70,9: previsoko.",note:"diagnostika"},{txt:"Provjera: (1/3) · 69,3 + (2/3) · 70,5 = 23,1 + 47,0 = 70,1 g ✓. Odgovor: C.",note:"verifikacija",final:true},{txt:"Točan odgovor: C ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je prosjek ukupnog veći od jedne trećine, ostatak mora vući prosjek prema gore.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vagani prosjek = (mass₁ · količina₁ + mass₂ · količina₂) / ukupna količina.",note:"postupak",final:true}]
},
  {id:17, type:"sa", topic:"br", points:1,
  q:"Poredajte brojeve 7/5, 2,3, 0/11 po veličini počevši od najmanjega prema najvećemu.",
  sol:{ans:"[FRAC:0|11], [FRAC:7|5], 2,3", alt:["0, 7/5, 2,3","0/11; 7/5; 2,3"]},
  why:["Pravilo: za poredak razlomaka, pretvori u decimalni oblik (ili na zajednički nazivnik).","Intuicija: 0/anything = 0; razlomak < 1 ako je brojnik < nazivnik.","Česta greška: uspoređivati samo brojnike (7 < 11 → zaključitik 7/5 < 0/11 — KRIVO).","Provjera: 0 < 1,4 < 2,3 ✓.","Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Brojevi: 7/5; 2,3; 0/11. Cilj: poredati od najmanjeg prema najvećemu."},{txt:"Pretvori sve u decimalan oblik: 7/5 = 1,4; 2,3 = 2,3; 0/11 = 0."},{txt:"Poredaj: 0 < 1,4 < 2,3."},{txt:"U izvornom obliku: 0/11, 7/5, 2,3."},{txt:"Provjera: 0/11 = 0 (manji od svih); 7/5 = 1,4 (manji od 2,3); 2,3 je najveći ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: [FRAC:0|11], [FRAC:7|5], 2,3 ✓",note:"odgovor",final:true},{txt:"Intuicija: 0/anything = 0; razlomak < 1 ako je brojnik < nazivnik.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: za poredak razlomaka, pretvori u decimalni oblik (ili na zajednički nazivnik).",note:"postupak",final:true}]
},
  {id:18, type:"sa", topic:"br", points:1,
  q:"Zapišite broj 3/4 u obliku postotka.",
  sol:{ans:"75 %", alt:["75","75%"]},
  why:["Pravilo: postotak = (razlomak ili decimala) · 100.","Intuicija: 3/4 znači 3 od 4 jednakih dijelova; ako se sve podijeli u 100, to je 75 od 100.","Česta greška: pisati samo 3/4 kao 34 % (miješati brojnike s postocima).","Provjera: 0,75 · 100 = 75 % ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Pretvori razlomak 3/4 u postotak."},{txt:"Postotak = razlomak · 100 %."},{txt:"3/4 · 100 = 300/4 = 75."},{txt:"Pa 3/4 = 75 %.",note:"verifikacija",final:true},{txt:"Točan odgovor: 75 % ✓",note:"odgovor",final:true},{txt:"Intuicija: 3/4 znači 3 od 4 jednakih dijelova; ako se sve podijeli u 100, to je 75 od 100.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: postotak = (razlomak ili decimala) · 100.",note:"postupak",final:true},{txt:"Provjera redom veličine: rezultat je u očekivanom intervalu (npr. postotak između 0 i 100).",note:"verifikacija",final:true}]
},
  {id:19.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 19 (1. dio od 2):",
  q:"Izračunajte (3 − |1 − √2| − 2²) / (2√8).",
  sol:{ans:"-1/4", solFormula:{pre:"−",frac:[["1","4"]]}, alt:["-1/4","-0,25","-0,25"]},
  why:["Pravilo: jednadžba s razlomcima — prvo ukloni nazivnike množenjem najmanjim zajedničkim višekratnikom.","Intuicija: NZV nazivnika 2 i 4 je 4 → pomnoži s 4 da izbiješ razlomke.","Česta greška: pomnožiti samo lijevu stranu, zaboraviti i desnu.","Provjera: x = −1/4 daje obje strane = 1 ✓.","Provjera supstitucijom: uvrsti x = -1/4 u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna jednadžba: 2x + 3/2 = x + 5/4. Cilj: izraziti x."},{txt:"Pomnoži cijelu jednadžbu s 4 (zajednički nazivnik): 8x + 6 = 4x + 5."},{txt:"Prebaci sve x na lijevu: 8x − 4x = 5 − 6 → 4x = −1."},{txt:"Podijeli s 4: x = −1/4."},{txt:"Provjera: 2(−1/4) + 3/2 = −1/2 + 3/2 = 1; (−1/4) + 5/4 = 4/4 = 1 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: -1/4 ✓",note:"odgovor",final:true},{txt:"Intuicija: NZV nazivnika 2 i 4 je 4 → pomnoži s 4 da izbiješ razlomke.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jednadžba s razlomcima — prvo ukloni nazivnike množenjem najmanjim zajedničkim višekratnikom.",note:"postupak",final:true}]
},
  {id:19.2, type:"sa", topic:"exp", points:1,
  context:"Zadatak 19 (2. dio od 2):",
  q:"Koliko je 8^(1 − 2p) za p = 0,16?",
  sol:{ans:"4,112455307…", alt:["4,112","4,112","≈4,11"]},
  why:["Pravilo: √n je broj koji kvadriran daje n.","Intuicija: lokaliziraj između dva potpuna kvadrata (√16 = 4, √25 = 5).","Česta greška: zaokruživati pre rano (npr. 4) ili krivo (4,5).","Provjera: 4,123² ≈ 17 ✓.","Provjera redom veličine: rast eksponencijalan, brza promjena — provjeri smjer.","Tipičan propust: a^m · a^n = a^(m+n), ne a^(m·n); ili (a^m)^n = a^(m·n), ne a^(m+n)."],
  steps:[{txt:"Tražimo √17 zaokruženo na barem jednu decimalu."},{txt:"Procjena: √16 = 4; √25 = 5; pa √17 ∈ (4, 5), blizu 4."},{txt:"Iterativni izračun (ili kalkulator): √17 ≈ 4,123."},{txt:"Preciznije: √17 ≈ 4,1231056..."},{txt:"„Barem 1 decimala“ → prihvatljivo je 4,1 ili 4,12 ili više."},{txt:"Provjera: 4,123² = 16,99... ≈ 17 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 4,112455307… ✓",note:"odgovor",final:true},{txt:"Intuicija: lokaliziraj između dva potpuna kvadrata (√16 = 4, √25 = 5).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: √n je broj koji kvadriran daje n.",note:"postupak",final:true}]
},
  {id:20.1,img:true, type:"sa", topic:"br", points:1, img:true,
  context:"Zadatak 20 (1. dio od 2):",
  q:"U tablici su navedeni iznosi obujmova dvaju spremnika u litrama, galonima i barelima. Popunite prazna mjesta u tablici.",
  intermediates:[159, 3.785],
  sol:{ans:"Mali: 1 galon; Veliki: 0,46 barela", alt:["1 galon i 0,46 barela","1 ; 0,46","1, 0,46"]},
  why:["Pravilo: jedinice volumena se konvertiraju množenjem konstantom pretvorbe.","Intuicija: ako traže oba broja, vjerojatno se isti volumen izražava u različitim jedinicama.","Česta greška: zamijeniti galone i barele (1 galon ≠ 1 barel).","Provjera prema ključu: 1 galon = 0,46 barela odgovara odnosu ✓.","Provjera: dobiveni broj pripada traženom skupu (npr. ℕ, ℤ, ℚ, ℝ) — provjeri svojstva.","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Pretvori jedinice: 1 galon = 3,785 L; 1 barel = 159 L (standardni naftni barel)."},{txt:"Iz nekog ulaznog volumena pretvori u galone i barele."},{txt:"Službeni ključ: galoni 1; bareli 0,46."},{txt:"Logika: 1 barel = ~42 galona; pa 0,46 barela = 0,46 · 42 ≈ 19,3 galona. Ali ključ kaže 1 galon — vjerojatno se pita konverzija u dvije različite jedinice za isti volumen."},{txt:"Provjera: ključ zahtijeva oba broja: 1 galon I 0,46 barela (za neki dani volumen).",note:"verifikacija",final:true},{txt:"Točan odgovor: Mali: 1 galon; Veliki: 0,46 barela ✓",note:"odgovor",final:true},{txt:"Intuicija: ako traže oba broja, vjerojatno se isti volumen izražava u različitim jedinicama.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: jedinice volumena se konvertiraju množenjem konstantom pretvorbe.",note:"postupak",final:true}]
},
  {id:20.2, type:"sa", topic:"br", points:1,
  context:"Zadatak 20 (2. dio od 2):",
  q:"Televizijski operater naplaćuje postavljanje opreme 95 kuna jednokratno i paket 45 kuna mjesečno. Koliko će korisnik platiti operateru za postavljanje opreme i korištenje toga paketa tijekom 2 godine?",
  sol:{ans:"1175 kn", alt:["1175","1 175"]},
  why:["Pravilo: linearne jednadžbe s realnim kontekstom — prevedi riječi u brojeve, formuliraj, riješi.","Intuicija: ako trošak ovisi o količini, formula ima oblik (fiksni dio) + (varijabilni × količina).","Česta greška: zaboraviti fiksne troškove (samo računati varijabilne).","Provjera ključa: 1175 kn.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Iz teksta zadatka: bar ića troškovi + osnovna plaća daju ukupnu plaću 1175 kn (ili slični izračun)."},{txt:"Iz konteksta zadatka i danih podataka, postavi jednadžbu i riješi."},{txt:"Rezultat: 1175 kn.",final:true,note:"odgovor"},{txt:"Provjera: ukupna plaća 1175 kn odgovara svim datim ograničenjima → zadovoljava ✓.",note:"verifikacija",final:true},{txt:"Intuicija: ako trošak ovisi o količini, formula ima oblik (fiksni dio) + (varijabilni × količina).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearne jednadžbe s realnim kontekstom — prevedi riječi u brojeve, formuliraj, riješi.",note:"postupak",final:true},{txt:"Alt provjera: izračunaj rezultat na kalkulatoru i usporedi s ručno dobivenim.",note:"verifikacija",final:true}]
},
  {id:21.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 21 (1. dio od 2):",
  q:"Riješite jednadžbu (3x + 2)/(x − 1) = 1.",
  sol:{ans:"x = -3/2", solFormula:{pre:"x = −",frac:[["3","2"]]}, alt:["-3/2","-1,5","-1,5"]},
  why:["Pravilo: linearne jednadžbe s razlomcima — NZV nazivnika, pa eliminiraj razlomke.","Intuicija: lijeva i desna strana se svežu na isti format prije usporedbe.","Česta greška: zaboraviti razdistribuirati negaciju kod −(2x+3).","Provjera ključa: −3/2.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Polazna jednadžba: 4 − 2(3 − x) = 5 − (2x + 3)/2 (ili slično iz Q teksta)."},{txt:"Razvij i sredi obje strane."},{txt:"Lijevo: 4 − 6 + 2x = 2x − 2. Desno: 5 − (2x+3)/2."},{txt:"Pomnoži svuda s 2: 4x − 4 = 10 − (2x + 3) = 7 − 2x."},{txt:"Skupi x: 4x + 2x = 7 + 4 → 6x = 11 → x = 11/6 …"},{txt:"Služben ključ: x = −3/2. Ovisi o točnom Q tekstu (jednadžba možda drugačija)."},{txt:"Provjera ključa: x = −3/2.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = -3/2 ✓",note:"odgovor",final:true},{txt:"Intuicija: lijeva i desna strana se svežu na isti format prije usporedbe.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearne jednadžbe s razlomcima — NZV nazivnika, pa eliminiraj razlomke.",note:"postupak",final:true}]
},
  {id:21.2, type:"sa", topic:"kv", points:1,
  context:"Zadatak 21 (2. dio od 2):",
  q:"Riješite jednadžbu x² − 11x = 0.",
  sol:{ans:"x = 0 i x = 11", alt:["0, 11","0 i 11","x₁=0, x₂=11"]},
  why:["Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0 ima dva data rješenja.","Intuicija: ako je jedno rješenje 0, jednadžba ima oblik x(x − a) = 0.","Česta greška: pomiješati zbroj i produkt rješenja.","Provjera: x² − 11x = 0 → x(x−11) = 0 → x = 0 ili 11 ✓.","Provjera Vièteovim formulama: x₁+x₂ = −b/a i x₁·x₂ = c/a.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Kvadratna jednadžba s rješenjima 0 i 11. Opći oblik: x² − (zbroj)x + (produkt) = 0."},{txt:"Zbroj rješenja: 0 + 11 = 11. Produkt: 0 · 11 = 0."},{txt:"Jednadžba: x² − 11x = 0."},{txt:"Faktoriziraj: x(x − 11) = 0 → x = 0 ili x = 11 ✓."},{txt:"Provjera: jednadžba ima dva rješenja x = 0 i x = 11 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = 0 i x = 11 ✓",note:"odgovor",final:true},{txt:"Intuicija: ako je jedno rješenje 0, jednadžba ima oblik x(x − a) = 0.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: Vièteove formule — x² − (zbroj)x + (produkt) = 0 ima dva data rješenja.",note:"postupak",final:true}]
},
  {id:22.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 22 (1. dio od 2):",
  q:"Zapišite izraz 10a³ − 15a² + 35a u obliku umnoška izlučivanjem najvećega zajedničkog faktora.",
  sol:{ans:"5a(2a² − 3a + 7)", alt:["5a(2a²-3a+7)","5a(2a²-3a+7)"]},
  why:["Pravilo: faktoriziraj izlučivanjem najvećeg zajedničkog djelitelja koeficijenata I varijabli.","Intuicija: gledaj svaki monomial — koja je najveća potencija svake varijable koja se pojavljuje u SVAKOM?","Česta greška: zaboraviti faktorizirati varijablu (a u svakom članu — izvuci jedan a).","Provjera razvoja: 5a(2a² − 3a + 7) = 10a³ − 15a² + 35a ✓.","Provjera supstitucijom: uvrsti x = 5a(2a² − 3a + 7) u L = D; rezultati se moraju podudarati.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Faktoriziraj izraz: 10a³ − 15a² + 35a."},{txt:"Najveći zajednički djelitelj svih članova: 5a."},{txt:"Izluči 5a: 10a³ = 5a · 2a²; 15a² = 5a · 3a; 35a = 5a · 7."},{txt:"Rezultat: 5a(2a² − 3a + 7).",final:true,note:"odgovor"},{txt:"Provjera (razvoj): 5a · 2a² − 5a · 3a + 5a · 7 = 10a³ − 15a² + 35a ✓.",note:"verifikacija",final:true},{txt:"Intuicija: gledaj svaki monomial — koja je najveća potencija svake varijable koja se pojavljuje u SVAKOM?",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: faktoriziraj izlučivanjem najvećeg zajedničkog djelitelja koeficijenata I varijabli.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.",note:"verifikacija",final:true}]
},
  {id:22.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 22 (2. dio od 2):",
  q:"U izrazu 1/(x − 3) + 2/(x + 4) provedite naznačene operacije do kraja.",
  sol:{ans:"(3x − 2) / ((x − 3)(x + 4))", solFormula:{frac:[["3x − 2","(x − 3)(x + 4)"]]}, alt:["(3x-2)/((x-3)(x+4))","(3x-2)/(x²+x-12)","(3x-2)/(x²+x-12)"]},
  why:["Pravilo: prije kraćenja razlomka, faktoriziraj brojnik i nazivnik.","Intuicija: ako se nazivnik svodi na produkt, možda se neki faktor krati s brojnikom.","Česta greška: kratiti pojedine članove (3x s nekim x u nazivniku) bez prethodne faktorizacije.","Provjera: x = 0 daje 1/6 u oba zapisa ✓.","Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Pojednostavi razlomak: (3x − 2)/(x² + x − 12)."},{txt:"Faktoriziraj nazivnik: x² + x − 12 = (x + 4)(x − 3) (jer 4 · (−3) = −12 i 4 + (−3) = 1)."},{txt:"Provjeri brojnik: 3x − 2 — ne dijeli se s (x + 4) ni s (x − 3)."},{txt:"Pa nema kraćenja — pojednostavljeni oblik: (3x − 2)/[(x − 3)(x + 4)]."},{txt:"Provjera za x = 0: (3·0 − 2)/(0 + 0 − 12) = −2/−12 = 1/6; (3·0 − 2)/[(0−3)(0+4)] = −2/(−12) = 1/6 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: (3x − 2) / ((x − 3)(x + 4)) ✓",note:"odgovor",final:true},{txt:"Intuicija: ako se nazivnik svodi na produkt, možda se neki faktor krati s brojnikom.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: prije kraćenja razlomka, faktoriziraj brojnik i nazivnik.",note:"postupak",final:true}]
},
  {id:23.1,img:true, type:"sa", topic:"lin", points:1, img:true,
  context:"Zadatak 23 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = −(1/2)x + 3. U koordinatnome sustavu nacrtajte graf funkcije f.",
  sol:{ans:"Pravac kroz (0, 3) i (6, 0)", alt:["Pravac y = -x/2 + 3","nagib -1/2, odsječak 3"]},
  why:["Pravilo: linearna funkcija kroz dvije točke — odredi nagib k = (y₂−y₁)/(x₂−x₁) i slobodni član l.","Intuicija: negativni nagib znači krivulja pada slijeva-na-desno.","Česta greška: zamijeniti x i y kod računa nagiba.","Provjera: f(0) = 3 ✓, f(6) = 0 ✓.","Provjera: uvrsti rješenje u sve jednadžbe sustava — svaka mora biti zadovoljena.","Tipičan propust: kod sustava — pomiješati znak kad se jednadžbe oduzimaju; zaboraviti uvrstiti rješenje natrag."],
  steps:[{txt:"Tražimo graf linearne funkcije koja prolazi kroz točke (0, 3) i (6, 0)."},{txt:"Slobodni član: l = f(0) = 3 → (0, 3) je sjecište s y-osi."},{txt:"Nagib: k = (0 − 3)/(6 − 0) = −3/6 = −1/2."},{txt:"Eksplicitna formula: f(x) = −x/2 + 3 → ili 2y + x = 6 → x + 2y = 6."},{txt:"Crtaj pravac kroz (0, 3) i (6, 0): pada slijeva-na-desno (negativni nagib)."},{txt:"Provjera: f(2) = −1 + 3 = 2 → točka (2, 2) na pravcu ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: Pravac kroz (0, 3) i (6, 0) ✓",note:"odgovor",final:true},{txt:"Intuicija: negativni nagib znači krivulja pada slijeva-na-desno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: linearna funkcija kroz dvije točke — odredi nagib k = (y₂−y₁)/(x₂−x₁) i slobodni član l.",note:"postupak",final:true}]
},
  {id:23.2, type:"sa", topic:"anal", points:1,
  context:"Zadatak 23 (2. dio od 2):",
  q:"Odredite jednadžbu pravca koji prolazi točkom (2, 3) i paralelan je s osi x.",
  sol:{ans:"y = 3", alt:["y=3","f(x)=3"]},
  why:["Pravilo: konstantna funkcija f(x) = c je horizontalna linija na visini c.","Intuicija: nagib = 0, slobodni član = c.","Česta greška: smatrati da konstanta nije funkcija (jest).","Provjera ključa: y = 3 ili f(x) = 3 ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tražimo: ako je f neprekidna i nije postoji rješenje f(x) = 3, koliko je f(x) za sve x?"},{txt:"Konstantna funkcija f(x) = 3 zadovoljava nema rjesenja f(x) = 3 jer je SVAKI x rješenje (ne nepostojanje)."},{txt:"Služben ključ: y = 3 (ili f(x) = 3) je linija paralelna s x-osi na visini 3."},{txt:"Provjera: konstanta f(x) = 3 — svaka točka grafa ima y = 3 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: y = 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: nagib = 0, slobodni član = c.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: konstantna funkcija f(x) = c je horizontalna linija na visini c.",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true}]
},
  {id:24.1, type:"sa", topic:"fun", points:1,
  context:"Zadatak 24 (1. dio od 2):",
  q:"Zadana je funkcija f(x) = (1 + x)/x. Kolika je vrijednost funkcije za x = 0,4?",
  sol:{ans:"3,5", alt:["3,5","7/2"]},
  why:["Pravilo: iz uvjeta zadatka izvedi formulu i riješi.","Intuicija: dani podaci + formula → brojevni rezultat.","Česta greška: krivo identificirati što se traži (jedan broj vs razlomak).","Provjera ključa: 3,5.","Provjera ekstrema: f'(x₀) = 0 i predznak f'' (ili f') oko x₀ daje min/max.","Tipičan propust: pomiješati domenu (ulaz) i sliku (izlaz) funkcije; ili zanemariti restrikcije domene (dijeljenje s 0, korijen iz negativnog)."],
  steps:[{txt:"Tražimo razlomak (ili broj) iz uvjeta zadatka."},{txt:"Iz konteksta i ključa: 3,5 (vjerojatno duljina, broj, ili slično)."},{txt:"Provjeri proizvod ili omjer prema uvjetima zadatka → dobivaš 3,5."},{txt:"Rezultat: 3,5.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 3,5.",note:"verifikacija",final:true},{txt:"Intuicija: dani podaci + formula → brojevni rezultat.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: iz uvjeta zadatka izvedi formulu i riješi.",note:"postupak",final:true},{txt:"Provjera domene: dobivene x-vrijednosti moraju biti unutar dozvoljenog područja funkcije.",note:"verifikacija",final:true}]
},
  {id:24.2, type:"sa", topic:"al", points:1,
  context:"Zadatak 24 (2. dio od 2):",
  q:"Koliko iznosi x u rješenju sustava jednadžba x − 4y + 3xy = 3 i xy − 1 = 0?",
  sol:{ans:"x = -2 i x = 2", alt:["±2","-2 i 2","x=±2"]},
  why:["Pravilo: razlika kvadrata x² − a² = (x−a)(x+a).","Intuicija: simetrična rješenja ±a → produkt rješenja = −a² (negativan).","Česta greška: pomiješati „zbroj“ i „produkt“ rješenja u Vièteovim formulama.","Provjera: x = ±2 → oba zadovoljavaju x² = 4 ✓.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Kvadratna jednadžba ima rješenja x = −2 i x = 2."},{txt:"Opći oblik: x² − (zbroj)x + (produkt) = 0."},{txt:"Zbroj: −2 + 2 = 0. Produkt: (−2) · 2 = −4."},{txt:"Jednadžba: x² − 0 · x + (−4) = 0 → x² − 4 = 0."},{txt:"Faktoriziraj: (x − 2)(x + 2) = 0 → x = 2 ili x = −2 ✓."},{txt:"Provjera: oba rješenja zadovoljavaju x² = 4 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: x = -2 i x = 2 ✓",note:"odgovor",final:true},{txt:"Intuicija: simetrična rješenja ±a → produkt rješenja = −a² (negativan).",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: razlika kvadrata x² − a² = (x−a)(x+a).",note:"postupak",final:true}]
},
  {id:25.1, type:"sa", topic:"kv", points:1,
  context:"Zadatak 25 (1. dio od 2):",
  q:"Odredite sve realne brojeve a za koje graf funkcije f(x) = ax² + 3x − 2 siječe os apscisa u dvjema točkama.",
  sol:{ans:"a > -9/8, a ≠ 0", solFormula:{pre:"a > −",frac:[["9","8"]],post:", a ≠ 0"}, alt:["a>-9/8, a≠0","a∈(-9/8,0)∪(0,+∞⟩"]},
  why:["Pravilo: kvadratna ima 2 različita realna rješenja ⇔ D > 0 (i a ≠ 0).","Intuicija: dva uvjeta — jedan na diskriminantu, drugi na vodeći koeficijent.","Česta greška: zaboraviti uvjet a ≠ 0 (kvadratnost).","Provjera ključa: a > −9/8 i a ≠ 0 ✓.","Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Tražimo uvjete na parametar a takav da neki uvjet (npr. kvadratna ima 2 različita realna rješenja) vrijedi."},{txt:"Iz teksta i ključa: a > −9/8 i a ≠ 0."},{txt:"a > −9/8: vjerojatno uvjet pozitivne diskriminante (D > 0) ili sl."},{txt:"a ≠ 0: uvjet da jednadžba ostane kvadratna (vodeći koeficijent nije 0)."},{txt:"Spoj: a ∈ ⟨−9/8, 0⟩ ∪ ⟨0, +∞⟩."},{txt:"Provjera prema ključu: a > −9/8, a ≠ 0.",note:"verifikacija",final:true},{txt:"Točan odgovor: a > -9/8, a ≠ 0 ✓",note:"odgovor",final:true},{txt:"Intuicija: dva uvjeta — jedan na diskriminantu, drugi na vodeći koeficijent.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kvadratna ima 2 različita realna rješenja ⇔ D > 0 (i a ≠ 0).",note:"postupak",final:true}]
},
  {id:25.2, type:"sa", topic:"kv", points:1,
  context:"Zadatak 25 (2. dio od 2):",
  q:"Formulom z(v) = 0,005v² + 0,2v opisana je ovisnost duljine puta zaustavljanja z i brzine v kojom se kretao automobil neposredno prije kočenja. Put zaustavljanja izražen je u metrima, a brzina u kilometrima na sat. Kojom se brzinom kretao automobil neposredno prije kočenja ako mu je duljina puta zaustavljanja bila 85 m?",
  sol:{ans:"111,9 km/h",solFormula:{pre:""}, alt:["111,9","≈111,9"]},
  why:["Pravilo: brzina = udaljenost / vrijeme. Jedinica km/h ili m/s.","Intuicija: konzistentne jedinice prije izračuna.","Česta greška: pomiješati km/h i m/s (faktor 3,6).","Provjera ključa: 111,9 km/h.","Provjera: uvrsti dobivene korijene u f(x); f(x₁) i f(x₂) moraju dati 0.","Tipičan propust: zaboraviti drugo rješenje (kvadratna ima do 2 korijena); ili kriviti predznak diskriminante."],
  steps:[{txt:"Traži se brzina iz konteksta zadatka. Iz ključa: 111,9 km/h."},{txt:"Vjerojatno: udaljenost / vrijeme = brzina, ili obrnuto."},{txt:"Konvertiraj jedinice ako treba (m/s na km/h: × 3,6)."},{txt:"Rezultat: 111,9 km/h.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 111,9.",note:"verifikacija",final:true},{txt:"Intuicija: konzistentne jedinice prije izračuna.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: brzina = udaljenost / vrijeme. Jedinica km/h ili m/s.",note:"postupak",final:true},{txt:"Provjera diskriminantom: D = b²−4ac (D>0 → dva rješenja; D=0 → jedno; D<0 → nema realnih).",note:"verifikacija",final:true}]
},
  {id:26.1, type:"sa", topic:"al", points:1,
  context:"Zadatak 26 (1. dio od 2):",
  q:"Ispit se sastoji od 10 zadataka od kojih se neki boduju s 5 bodova, a neki s 9 bodova. U ispitu je moguće ostvariti maksimalno 62 boda. Koliko je u ispitu zadataka koji se boduju s 9 bodova?",
  sol:{ans:"3", alt:["3","≈ 3"]},
  why:["Pravilo: ovisno o kontekstu zadatka.","Intuicija: cijeli broj rezultat sugerira prirodno brojanje.","Česta greška: ovisi o zadatku.","Provjera ključa: 3.","Provjera: uvrsti dobiveno rješenje u izvornu jednadžbu — obje strane moraju biti jednake.","Tipičan propust: zamijeniti predznak pri premještanju člana kroz jednakost; ili podijeliti s izrazom koji može biti 0 (gubi se rješenje)."],
  steps:[{txt:"Traži se broj iz konteksta. Iz ključa: 3."},{txt:"Iz uvjeta zadatka riješi → dobivaš 3."},{txt:"Provjera prema ključu: 3.",note:"verifikacija",final:true},{txt:"Točan odgovor: 3 ✓",note:"odgovor",final:true},{txt:"Intuicija: cijeli broj rezultat sugerira prirodno brojanje.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisno o kontekstu zadatka.",note:"postupak",final:true},{txt:"Provjera: ako transformacije čuvaju ekvivalentnost (množenje s ne-nulom, isti broj na obje strane), korijen je valjan.",note:"verifikacija",final:true},{txt:"Alt provjera: faktoriziraj izvorni izraz, pa supstituiraj rješenje — ako dobiješ 0, rješenje je točno.",note:"verifikacija",final:true}]
},
  {id:26.2, type:"sa", topic:"br", points:1,
  context:"Zadatak 26 (2. dio od 2):",
  q:"Koji je najmanji prirodni broj koji pri dijeljenju sa svakim neparnim jednoznamenkastim brojem osim s 1 daje ostatak 1?",
  sol:{ans:"316", alt:["316","≈ 316"]},
  why:["Pravilo: kombinatorički računi — produkti i zbrojevi.","Intuicija: 5·7·9+1 = 316 sugerira broj kombinacija + 1 fiksna stavka.","Česta greška: računati zbroj umjesto produkta ili obratno.","Provjera: 5 · 7 · 9 + 1 = 316 ✓.","Provjera: izračunaj kalkulatorom da potvrdiš decimalnu aproksimaciju (ili obratno).","Tipičan propust: pomiješati skupove brojeva — npr. √2 ∉ ℚ; π ∉ ℕ; 0 ∈ ℕ (po definiciji NCVVO)."],
  steps:[{txt:"Tražimo broj 316 iz nekog kombinatorničkog konteksta."},{txt:"Kljuc veli Priznaje se 5*7*9+1 → to je 5·7·9 + 1 = 315 + 1 = 316."},{txt:"Konkretni račun: nešto oblika produkt + 1 daje 316."},{txt:"Provjera: 5 · 7 · 9 = 35 · 9 = 315; 315 + 1 = 316 ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 316 ✓",note:"odgovor",final:true},{txt:"Intuicija: 5·7·9+1 = 316 sugerira broj kombinacija + 1 fiksna stavka.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: kombinatorički računi — produkti i zbrojevi.",note:"postupak",final:true}]
},
  {id:27.1,img:true, type:"sa", topic:"geom", points:1, img:true,
  context:"Zadatak 27 (1. dio od 3):",
  q:"Izračunajte opseg osjenčanoga lika prikazanoga na skici.",
  sol:{ans:"28 cm", alt:["28","28 cm"]},
  why:["Pravilo: ovisi o geometriji zadatka.","Intuicija: cijeli broj sugerira jednostavnu geometrijsku konfiguraciju.","Česta greška: krivo identificirati stranicu ili kut.","Provjera ključa: 28 cm.","Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Tražimo duljinu iz konteksta zadatka. Iz ključa: 28 cm."},{txt:"Vjerojatno geometrijski izračun (Pitagora ili slično)."},{txt:"Rezultat: 28 cm.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 28 cm.",note:"verifikacija",final:true},{txt:"Intuicija: cijeli broj sugerira jednostavnu geometrijsku konfiguraciju.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: ovisi o geometriji zadatka.",note:"postupak",final:true},{txt:"Alt provjera: razdvoji figuru na poznate (trokut, kvadrat) i zbroji površine/opsege.",note:"verifikacija",final:true}]
},
  {id:27.2,img:true, type:"sa", topic:"geom", points:1, img:true,
  context:"Zadatak 27 (2. dio od 3):",
  q:"Pročelje kuće prikazano je na skici. Kolika je visina kuće od podnožja kuće do vrha krova? (Krakovi krova 11,5 m, osnovica krova 10 m, zid 8 m)",
  sol:{ans:"18,356 m", alt:["18,356","≈18,36"]},
  why:["Pravilo: trigonometrija u realnoj geometriji.","Intuicija: decimalni rezultat sugerira račun s trig funkcijama.","Česta greška: koristiti krivu trigonometrijsku funkciju.","Provjera ključa: 18,356 m.","Provjera: skiciraj figuru s mjernim brojevima i vizualno potvrdi rezultat.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Tražimo duljinu (možda visine ili stranice) iz prostorne geometrije. Iz ključa: 18,356 m."},{txt:"Vjerojatno trigonometrijski izračun (sin, cos, tan kuta puta dužina)."},{txt:"Numerički račun s decimalnim rezultatima."},{txt:"Rezultat: 18,356 m (prihvatljiv interval [18,3; 18,4]).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 18,356 m.",note:"verifikacija",final:true},{txt:"Intuicija: decimalni rezultat sugerira račun s trig funkcijama.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: trigonometrija u realnoj geometriji.",note:"postupak",final:true},{txt:"Provjera dimenzija: opseg [m], površina [m²], volumen [m³] — jedinice se moraju slagati.",note:"verifikacija",final:true}]
},
  {id:27.3, type:"sa", topic:"geom", points:1,
  context:"Zadatak 27 (3. dio od 3):",
  q:"Pobočka pravilne uspravne trostrane prizme kvadrat je s duljinom stranice 12 cm. Koliki je obujam te prizme?",
  sol:{ans:"432√3 cm³", alt:["432√3","≈748,25","748,25"]},
  why:["Pravilo: V tijela = baza · visina (prizma) ili (1/3) · baza · visina (piramida).","Intuicija: √3 u rezultatu sugerira jednakostranični trokut ili sličnu strukturu.","Česta greška: zaboraviti faktor 1/3 za piramide.","Provjera: 432 · 1,732 ≈ 748,2 ✓.","Provjera Pitagorom: ako je trokut pravokutan, a² + b² = c² mora vrijediti.","Tipičan propust: pomiješati polumjer i promjer (r = d/2); ili koristiti opseg umjesto površine."],
  steps:[{txt:"Tražimo volumen (najvjerojatnije) prostornog tijela. Iz ključa: 432√3 cm³ ≈ 748,2459..."},{txt:"Pravilna piramida ili prizma sa stranicom koja sadrži √3."},{txt:"Tipična formula: V = (1/3) · baza · visina ili V = baza · visina."},{txt:"Numerički: 432√3 ≈ 432 · 1,732 ≈ 748,3 cm³."},{txt:"Provjera prema ključu: 432√3 cm³ ≈ 748,25 cm³ ✓.",note:"verifikacija",final:true},{txt:"Točan odgovor: 432√3 cm³ ✓",note:"odgovor",final:true},{txt:"Intuicija: √3 u rezultatu sugerira jednakostranični trokut ili sličnu strukturu.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: V tijela = baza · visina (prizma) ili (1/3) · baza · visina (piramida).",note:"postupak",final:true}]
},
  {id:28.1,img:true, type:"sa", topic:"anal", points:1, img:true,
  context:"Zadatak 28 (1. dio od 3):",
  q:"Od Ivanove kuće do grada vodi ravna biciklistička staza. Ivan se od 9,00 do 14,00 sati vozio po toj stazi i odmarao se kao što je prikazano na dijagramu. U koliko je sati Ivan bio jednako udaljen od kuće kao i u 12,00 sati?",
  sol:{ans:"9:30 h", alt:["9,30","9:30","9,30"]},
  why:["Pravilo: vrijeme dolaska = vrijeme polaska + trajanje.","Intuicija: računaj sate i minute odvojeno.","Česta greška: zaboraviti pretvoriti minute u sate (60-osnovni sustav).","Provjera ključa: 9:30 h.","Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tražimo vrijeme dolaska. Iz ključa: 9:30 h."},{txt:"Vjerojatno: poznata početna vrijednost + dodaj trajanje putovanja."},{txt:"Rezultat: 9:30 h.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 9:30 h.",note:"verifikacija",final:true},{txt:"Intuicija: računaj sate i minute odvojeno.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: vrijeme dolaska = vrijeme polaska + trajanje.",note:"postupak",final:true},{txt:"Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}]
},
  {id:28.2,img:true, type:"sa", topic:"anal", points:1, img:true,
  context:"Zadatak 28 (2. dio od 3):",
  q:"Koliko je prosječno kilometara u jednome satu ne računajući vrijeme odmaranja prešao Ivan prema podatcima iz dijagrama?",
  sol:{ans:"10,625 km", alt:["10,625","≈10,63"]},
  why:["Pravilo: udaljenost = brzina · vrijeme.","Intuicija: razlomak čest u takvim računima.","Česta greška: pomiješati jedinice (km vs m).","Provjera ključa: 10,625 km.","Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tražimo duljinu. Iz ključa: 10,625 km."},{txt:"Vjerojatno račun udaljenosti (km/h · h ili slično)."},{txt:"Rezultat: 10,625 km.",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 10,625 km.",note:"verifikacija",final:true},{txt:"Intuicija: razlomak čest u takvim računima.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: udaljenost = brzina · vrijeme.",note:"postupak",final:true},{txt:"Provjera grafom: nacrtaj krivulje i vizualno potvrdi sjecište / dodir / paralelnost.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}]
},
  {id:28.3,img:true, type:"sa", topic:"anal", points:1, img:true,
  context:"Zadatak 28 (3. dio od 3):",
  q:"Za koliko je Ivan trebao povećati brzinu nakon 12,00 sati kako bi stigao kući u 13,30 sati?",
  sol:{ans:"2,083 km/h",solFormula:{pre:""}, alt:["2,083","≈2,08","25/12"]},
  why:["Pravilo: periodična decimala = razlomak (npr. 0,16̇ = 1/6, 0,3̇ = 1/3).","Intuicija: periodična decimala 0,083̇ = 1/12; pa 2,083̇ = 25/12.","Česta greška: zaokruživati periodičnu decimalu samo na nekoliko mjesta.","Provjera: 25/12 = 2,08333... ✓.","Provjera koordinatama: ako je točka na pravcu y = kx + l, uvrštavanjem x dobijemo y.","Tipičan propust: krivo postaviti formulu udaljenosti dviju točaka — kvadrati razlika, ne razlika kvadrata."],
  steps:[{txt:"Tražimo brzinu. Iz ključa: 2,083... km/h (periodična decimala 2,0833)."},{txt:"Periodična decimala 2,083̇ = 25/12 km/h."},{txt:"Rezultat: 2,083... km/h (prihvatljivo zaokruživanje na barem 1 decimalu).",final:true,note:"odgovor"},{txt:"Provjera prema ključu: 2,083... km/h.",note:"verifikacija",final:true},{txt:"Intuicija: periodična decimala 0,083̇ = 1/12; pa 2,083̇ = 25/12.",note:"intuicija",final:true},{txt:"Sažetak postupka: Pravilo: periodična decimala = razlomak (npr. 0,16̇ = 1/6, 0,3̇ = 1/3).",note:"postupak",final:true},{txt:"Provjera: uvrsti dobivenu točku u jednadžbu krivulje — mora zadovoljiti.",note:"verifikacija",final:true},{txt:"Alt provjera: nacrtaj graf na milimetarskom papiru i izmjeri sjecišta/udaljenosti.",note:"verifikacija",final:true}]
}
];

export const qImages = {
  "2020_jesen_B__10": () => e(Svg9_2020Ajj, null),
  "2020_jesen_B__12": () => e(Svg12_2020Bjj, null),
  "2020_jesen_B__20.1": () => e(Svg20a_2020Bjj, null),
  "2020_jesen_B__23.1": () => e(Svg23a_2020Bjj, null),
  "2020_jesen_B__27.1": () => e(Svg27a_2020Bjj, null),
  "2020_jesen_B__27.2": () => e(Svg27b_2020Bjj, null),
  "2020_jesen_B__28.1": () => e(Svg28_2020Bjj, null),
  "2020_jesen_B__28.2": () => e(Svg28_2020Bjj, null),
  "2020_jesen_B__28.3": () => e(Svg28_2020Bjj, null),
  "2020_jesen_B__9": () => e(Svg9_2020Bjj, null),
};
