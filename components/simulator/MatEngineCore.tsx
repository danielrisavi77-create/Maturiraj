// @ts-nocheck
'use client';
/* AUTO-GENERATED engine core from mat-simulator monolith (AST-extracted).
   SVG (628) + exam data (70) + Q_IMAGES externalized. Exposes Sim + ErrorBoundary + __setQImages. */
import React from 'react';
// 3.2: ocjenjivanje kratkih odgovora je jedan izvor istine (lib/mat-grading.ts).
import { normalizeAnswer, numEquals } from "@/lib/mat-grading";
// 5.3: infrastruktura je izdvojena u components/simulator/mat/core/* (isto ponasanje).
import { __MAT, IS_PRO, PLAN_NAME, planCta, askUpgrade, SUBJECT, __rk, DS, TOPIC_LABELS, FORMULE_DATA } from './mat/core/state';
import { EXAMS, __onExamsChanged, isExamLoaded, allExamsLoaded, examQCount, loadExam, loadAllExams, examTitle, nextMatura } from './mat/core/exams';
import { __ensureNerdamer, __imgKey, __aiErrMsg, __aiPost, __AI_LAST_ERR } from './mat/core/runtime';
import { parseMath, renderOptText, renderQText, FractionSVG, FormulaBlock, renderOptContent } from './mat/core/mathText';
export { __setSubject } from './mat/core/state';
export { __onExamsChanged, __setExamLoader, __setExamCatalog, __addExams, isExamLoaded, isExamLocked, allExamsLoaded, examQCount, loadExam, loadAllExams, __setExams } from './mat/core/exams';
// 5.3: vizualni dio (grafovi, interaktivni prikazi, zoom slike) zivi u ./mat/viz/*.
import { GLBL, GC, SHORT_LABELS, useEscape, LEVEL_NAMES, XP_LEVELS, getLevel } from './mat/core/ui';
import { KnowledgeMap, CountUp, AnimatedRing, TrendChart } from './mat/viz/charts';
import { GraphInput } from './mat/viz/graph';
import { FigZoom, ZoomableFig } from './mat/viz/figzoom';
import { VizModal, resolveViz } from './mat/viz/interactive';
import { chk, hasAns } from './mat/core/grading';
// 5.3: alati oko zadatka (modali, pomoc, kalkulator, formule) zive u ./mat/tools/*.
import { Calculator, ScratchPad } from './mat/tools/calc';
import { FormulaModal, FormulaSheet } from './mat/tools/formulas';
import { ERROR_TAGS, ErrorTagger, SelfExplain, StuckHelper, WarmupItem, WeakSpotTips } from './mat/tools/hints';
import { AboutModal, DDayModal, DisclaimerModal, OnboardingModal, ShareCard, UpgradeModal, XpFloater } from './mat/tools/modals';
import { AnswerHelper, CalcQuestion, FeedbackBox, MaturaRubric, QToolbar } from './mat/tools/question';
"use strict";
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function vc(n){return"var("+n+")";}
const TLBL={mc:"Jedan odgovor",num:"Numerički",calc:"Izračun",sa:"Kratki odgovor",pa:"Produženi odgovor",proof:"Dokaz/Opis"};
const TYPE_ICON={mc:"\u25c9",num:"\u2211",calc:"\u2211",sa:"\u270e",pa:"\u270e",proof:"\u270e"};
const _TOPIC_COLORS=["#4a90d9","#50c878","#e9b446","#e05252","#2dcfbe","#a78bfa","#f59e0b","#ec4899"];
function topicColor(t){if(!t)return _TOPIC_COLORS[0];let h=0;for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;return _TOPIC_COLORS[h%_TOPIC_COLORS.length];}
const TBDG={mc:"b-mc",num:"b-num",calc:"b-calc",sa:"b-sa",pa:"b-proof",proof:"b-proof"};
const LL=["A","B","C","D","E"];
function _G12j(id,W,H,cx,cy,sc){
  return (children)=>e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#mb"+id+")"}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+3,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx-10,y:cy+10,fontSize:8,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+10,fontSize:8,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:8,fill:"var(--text)"},"1"),
    ...children
  );
}
function _G10(id,W,H,cx,cy,sc){
  return (children)=>e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",stroke:"rgba(148,163,184,0,25)",strokeWidth:0.6,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"}))
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.5,markerEnd:"url(#mb"+id+")"}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+3,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:cx-10,y:cy+10,fontSize:8,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+10,fontSize:8,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:8,fill:"var(--text)"},"1"),
    ...children
  );
}
function _G13(id,W,H,cx,cy,sc,children){
  return e("svg",{width:W,height:H,viewBox:`0 0 ${W} ${H}`,
    style:{display:"block",background:"var(--s2)",
      border:"1px solid var(--bdr)",borderRadius:4}},
    e("defs",null,
      e("pattern",{id:"gp"+id,width:sc,height:sc,patternUnits:"userSpaceOnUse"},
        e("path",{d:`M ${sc} 0 L 0 0 0 ${sc}`,fill:"none",
          stroke:"var(--bdr)",strokeWidth:0.7,strokeDasharray:"3,3"})
      ),
      e("marker",{id:"ma"+id,markerWidth:5,markerHeight:5,refX:4,refY:2.5,orient:"auto"},
        e("path",{d:"M0,0 L0,5 L5,2.5 z",fill:"var(--text)"})
      ),
      e("marker",{id:"mb"+id,markerWidth:5,markerHeight:5,refX:2.5,refY:0,orient:"auto"},
        e("path",{d:"M0,5 L5,5 L2.5,0 z",fill:"var(--text)"})
      )
    ),
    e("rect",{x:0,y:0,width:W,height:H,fill:"url(#gp"+id+")"}),
    e("line",{x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#ma"+id+")"}),
    e("line",{x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--text)",strokeWidth:1.6,markerEnd:"url(#mb"+id+")"}),
    e("circle",{cx,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx:cx+sc,cy,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("circle",{cx,cy:cy-sc,r:2.5,fill:"var(--bg)",stroke:"var(--text)",strokeWidth:1.3}),
    e("text",{x:W-12,y:cy+11,fontSize:9,fill:"var(--text)"},"x"),
    e("text",{x:cx+4,y:11,fontSize:9,fill:"var(--text)"},"y"),
    e("text",{x:cx-10,y:cy+11,fontSize:9,fill:"var(--text)"},"0"),
    e("text",{x:cx+sc-3,y:cy+11,fontSize:9,fill:"var(--text)"},"1"),
    e("text",{x:cx-10,y:cy-sc+5,fontSize:9,fill:"var(--text)"},"1"),
    ...children
  );
}
let _s13k=0;
function _makeSustav13Graf(key, sOpts){
  const W=160,H=145,cx=75,cy=75,sc=22;
  // Koristimo globalni counter za jedinstvene key-eve svaki render
  const uid=()=>"k"+(++_s13k);
  const gridEls=[];
  for(let i=-3;i<=3;i++){
    gridEls.push(e("line",{key:uid(),x1:cx+i*sc,y1:5,x2:cx+i*sc,y2:H-5,stroke:"#1e2130",strokeWidth:0.8}));
    gridEls.push(e("line",{key:uid(),x1:5,y1:cy-i*sc,x2:W-5,y2:cy-i*sc,stroke:"#1e2130",strokeWidth:0.8}));
  }
  const sx=sOpts.sx, sy_=sOpts.sy;
  const sLabel=sOpts.showS!==false;
  return e("svg",{viewBox:`0 0 ${W} ${H}`,
    style:{width:"100%",display:"block",background:"var(--s2)",borderRadius:6,border:"1px solid var(--bdr)"}},
    ...gridEls,
    e("line",{key:uid(),x1:5,y1:cy,x2:W-5,y2:cy,stroke:"var(--muted)",strokeWidth:1.2}),
    e("line",{key:uid(),x1:cx,y1:H-5,x2:cx,y2:5,stroke:"var(--muted)",strokeWidth:1.2}),
    e("polygon",{key:uid(),points:`${W-5},${cy} ${W-13},${cy-3} ${W-13},${cy+3}`,fill:"var(--muted)"}),
    e("polygon",{key:uid(),points:`${cx},5 ${cx-3},13 ${cx+3},13`,fill:"var(--muted)"}),
    e("text",{key:uid(),x:W-4,y:cy+4,fill:"var(--muted)",fontSize:9,fontStyle:"italic"},"x"),
    e("text",{key:uid(),x:cx+3,y:7,fill:"var(--muted)",fontSize:9,fontStyle:"italic"},"y"),
    e("text",{key:uid(),x:cx+2,y:cy+10,fill:"var(--muted)",fontSize:8},"0"),
    e("text",{key:uid(),x:cx+sc-3,y:cy+10,fill:"var(--muted)",fontSize:8},"1"),
    e("text",{key:uid(),x:cx-12,y:cy-sc+4,fill:"var(--muted)",fontSize:8},"1"),
    ...sOpts.lines.map(l=>
      e("line",{key:uid(),x1:cx+l.x1*sc,y1:cy-l.y1*sc,x2:cx+l.x2*sc,y2:cy-l.y2*sc,
        stroke:l.color||"#4a90d9",strokeWidth:2})
    ),
    sLabel&&e("circle",{key:uid(),cx:cx+sx*sc,cy:cy-sy_*sc,r:4,fill:"#e8c547"}),
    sLabel&&e("text",{key:uid(),x:cx+sx*sc+4,y:cy-sy_*sc-3,fill:"#e8c547",fontSize:9},"S"),
  );
}
let _s15jk=0;
const _uid15j=()=>"j"+(++_s15jk);
let _s15jak=0;
const _uid15ja=()=>"ja"+(++_s15jak);
function _svg19a_2011LjetoA(showF){
  // Q19a: vektori AB, CD i točka E na koord. mreži.
  // A(1,-2), B(4,-1) => AB=(3,1)
  // C(-1,-1), D(-2,1) => CD=(-1,2)
  // E(2,-1)
  // F = E + AB + CD = (2,-1)+(3,1)+(-1,2) = (4,2)
  const W=320,H=240,pad={l:16,r:16,t:14,b:14};
  const xMin=-4,xMax=6,yMin=-3,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)";
  const C="#4a90d9",ACC="#e05252";
  // Grid
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:bdr,strokeWidth:0.4,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:bdr,strokeWidth:0.4,strokeDasharray:"2,3"}));
  function arrow(p1,p2,col,key){
    // strelica od p1 do p2
    const x1=toX(p1[0]),y1=toY(p1[1]),x2=toX(p2[0]),y2=toY(p2[1]);
    const dx=x2-x1,dy=y2-y1,len=Math.sqrt(dx*dx+dy*dy);
    const ux=dx/len,uy=dy/len;
    // pull back endpoint malo da strelica ne završi u sredinu krugu točke
    const ex=x2-ux*2,ey=y2-uy*2;
    const ahx=ex-ux*7,ahy=ey-uy*7;
    const px=-uy*3.5,py=ux*3.5;
    return e("g",{key:key},
      e("line",{x1:x1,y1:y1,x2:ahx,y2:ahy,stroke:col,strokeWidth:1.7}),
      e("polygon",{points:ex+","+ey+" "+(ahx+px)+","+(ahy+py)+" "+(ahx-px)+","+(ahy-py),fill:col})
    );
  }
  function pt(x,y,lbl,offX,offY,col){
    return e("g",{key:"p_"+lbl},
      e("circle",{cx:toX(x),cy:toY(y),r:2.2,fill:"#fff",stroke:col||t,strokeWidth:1.1}),
      e("text",{x:toX(x)+(offX||4),y:toY(y)+(offY||-4),fontSize:11,fill:t,fontStyle:"italic",fontWeight:"700"},lbl)
    );
  }
  const els=[
    ...grid,
    // Osi (subtle)
    e("line",{x1:toX(0),y1:pad.t,x2:toX(0),y2:pad.t+iH,stroke:mu,strokeWidth:0.7}),
    e("line",{x1:pad.l,y1:toY(0),x2:pad.l+iW,y2:toY(0),stroke:mu,strokeWidth:0.7}),
    // Vektori AB i CD
    arrow([1,-2],[4,-1],C,"AB"),
    arrow([-1,-1],[-2,1],C,"CD"),
    // Točke A, B, C, D, E
    pt(1,-2,"A",-3,12),
    pt(4,-1,"B",4,-3),
    pt(-1,-1,"C",-12,-2),
    pt(-2,1,"D",-10,-4),
    pt(2,-1,"E",4,-3)
  ];
  if(showF){
    // dodatna strelica EF
    els.push(arrow([2,-1],[4,2],ACC,"EF"));
    els.push(pt(4,2,"F",4,-3,ACC));
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},...els);
}
function _svg29e_2011LjetoA(showCurve){
  // Q29.5: graf f(x)=x³−3x²
  // Nultočke (0,0), (3,0); max (0,0); min (2,−4); T(1,−2)
  const W=300,H=300,pad={l:24,r:14,t:14,b:24};
  const xMin=-2,xMax=4,yMin=-5,yMax=3;
  const iW=W-pad.l-pad.r,iH=H-pad.t-pad.b;
  const toX=v=>pad.l+((v-xMin)/(xMax-xMin))*iW;
  const toY=v=>pad.t+((yMax-v)/(yMax-yMin))*iH;
  const ox=toX(0),oy=toY(0);
  const t="var(--text)",mu="var(--muted)",bdr="var(--bdr)";
  const grid=[];
  for(let i=xMin;i<=xMax;i++) grid.push(e("line",{key:"gx"+i,x1:toX(i),y1:pad.t,x2:toX(i),y2:pad.t+iH,stroke:bdr,strokeWidth:0.5,strokeDasharray:"2,3"}));
  for(let i=yMin;i<=yMax;i++) grid.push(e("line",{key:"gy"+i,x1:pad.l,y1:toY(i),x2:pad.l+iW,y2:toY(i),stroke:bdr,strokeWidth:0.5,strokeDasharray:"2,3"}));
  // Tickovi na cijelim brojima x ≠ 0 i y ≠ 0 (radi orijentacije, ne samo 0 i 1)
  for(let i=xMin;i<=xMax;i++){if(i!==0&&i!==1)grid.push(e("line",{key:"tx"+i,x1:toX(i),y1:oy-2,x2:toX(i),y2:oy+2,stroke:t,strokeWidth:0.8}));}
  for(let i=yMin;i<=yMax;i++){if(i!==0&&i!==1)grid.push(e("line",{key:"ty"+i,x1:ox-2,y1:toY(i),x2:ox+2,y2:toY(i),stroke:t,strokeWidth:0.8}));}
  const els=[
    ...grid,
    // Osi
    e("line",{x1:pad.l,y1:oy,x2:pad.l+iW,y2:oy,stroke:t,strokeWidth:1.2}),
    e("polygon",{points:(pad.l+iW)+","+oy+" "+(pad.l+iW-5)+","+(oy-2.5)+" "+(pad.l+iW-5)+","+(oy+2.5),fill:t}),
    e("line",{x1:ox,y1:pad.t+iH,x2:ox,y2:pad.t,stroke:t,strokeWidth:1.2}),
    e("polygon",{points:ox+","+pad.t+" "+(ox-2.5)+","+(pad.t+5)+" "+(ox+2.5)+","+(pad.t+5),fill:t}),
    // Tick 0 i 1
    e("text",{x:ox-7,y:oy+11,fontSize:9,fill:t},"0"),
    e("text",{x:toX(1)-3,y:oy+11,fontSize:9,fill:t},"1"),
    e("text",{x:ox-12,y:toY(1)+3,fontSize:9,fill:t},"1"),
    e("text",{x:pad.l+iW-4,y:oy-3,fontSize:10,fill:t,fontStyle:"italic"},"x"),
    e("text",{x:ox+4,y:pad.t+8,fontSize:10,fill:t,fontStyle:"italic"},"y")
  ];
  if(showCurve){
    // Krivulja x³−3x²
    const pts=[];
    for(let x=xMin;x<=xMax;x+=0.04){
      const y=x*x*x-3*x*x;
      if(y>=yMin-0.1&&y<=yMax+0.1)
        pts.push(toX(x).toFixed(1)+","+toY(Math.max(yMin,Math.min(yMax,y))).toFixed(1));
    }
    els.push(e("polyline",{key:"curve",points:pts.join(" "),fill:"none",stroke:"#4a90d9",strokeWidth:1.8}));
    // Key points
    const keyPts=[
      {x:0,y:0,lbl:"max",col:"var(--blue)",offX:6,offY:-6},
      {x:3,y:0,lbl:"3",col:"var(--green)",offX:4,offY:-6},
      {x:1,y:-2,lbl:"T(1, −2)",col:"var(--gold)",offX:6,offY:4},
      {x:2,y:-4,lbl:"min",col:"var(--red)",offX:6,offY:6}
    ];
    keyPts.forEach((p,i)=>{
      els.push(e("circle",{key:"kp_c"+i,cx:toX(p.x),cy:toY(p.y),r:3.2,fill:p.col,stroke:"var(--bg)",strokeWidth:1.2}));
      els.push(e("text",{key:"kp_t"+i,x:toX(p.x)+p.offX,y:toY(p.y)+p.offY,fontSize:9,fill:t,fontWeight:"600"},p.lbl));
    });
  }
  return e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",maxWidth:W,display:"block",margin:"0 auto"}},...els);
}
// 5.2: QS_*_META audit bilješke (70 konstanti) maknute iz klijentskog bundlea — žive u content/simulator/mat/audit/.
// 3.2: nrm/numEq/chk su samo tanki omotaci oko lib/mat-grading.ts.
function nrm(s){return normalizeAnswer(s);}
function numEq(a,b){return numEquals(a,b);}
function grade(p){return p>=85?5:p>=70?4:p>=55?3:p>=40?2:1}
function calcXpGain(pct,total){return Math.round(pct*0.5+total*2+(pct>=70?20:0))}
function fmt2(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
try{
  const _imp=DS.get("mat_import_pending");
  if(_imp){
    const _d=JSON.parse(_imp);
    Object.keys(_d).forEach(k=>{if(k.indexOf("mat_")===0&&k!=="mat_import_pending")DS.set(k,_d[k]);});
    DS.set("mat_import_pending","");
  }
}catch(_eImp){}
function useUserData(){
  const KEY="mat_sim_v1";
  const init=()=>{try{const d=DS.get(KEY);return d?JSON.parse(d):{xp:0,streak:0,history:[],errorTracker:{},lastLogin:null}}catch(e){return{xp:0,streak:0,history:[],errorTracker:{},lastLogin:null}}};
  const[ud,setUd]=useState(init);
  function update(fn){setUd(prev=>{const next=typeof fn==="function"?fn(prev):fn;DS.set(KEY,JSON.stringify(next));return next});}
  function reload(){setUd(init());}
  return[ud,update,reload];
}
function updateStreak(prev){
  const today=new Date().toLocaleDateString("hr");
  if(prev.lastLogin===today) return prev;
  const yesterday=new Date(Date.now()-86400000).toLocaleDateString("hr");
  const dayBefore=new Date(Date.now()-2*86400000).toLocaleDateString("hr");
  let freezes=prev.freezes||0, usedFreeze=false, streak;
  if(prev.lastLogin===yesterday){ streak=(prev.streak||0)+1; }
  else if(prev.lastLogin===dayBefore&&freezes>0){ freezes--; usedFreeze=true; streak=(prev.streak||0)+1; }
  else { streak=1; }
  if(streak>0&&streak%7===0) freezes=Math.min(2,freezes+1);
  return{...prev,streak,lastLogin:today,freezes,_freezeUsed:usedFreeze};
}
function useTimer(tot,run,onExpire,onWarn){
  const[s,setS]=useState(tot);
  const warned=useRef({ten:false,five:false,zero:false});
  useEffect(()=>{
    if(!run||s<=0){if(s<=0&&!warned.current.zero){warned.current.zero=true;if(onExpire)onExpire();}return;}
    const id=setInterval(()=>setS(x=>{
      const ns=Math.max(0,x-1);
      if(ns===600&&!warned.current.ten){warned.current.ten=true;if(onWarn)onWarn(600);}
      if(ns===300&&!warned.current.five){warned.current.five=true;if(onWarn)onWarn(300);}
      if(ns===0&&!warned.current.zero){warned.current.zero=true;if(onExpire)onExpire();}
      return ns;
    }),1000);
    return()=>clearInterval(id);
  },[run,s]);
  return{s,d:fmt2(s)};
}
function fireConfetti(){
  try{
    if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
    const c=document.createElement("canvas");
    c.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:400";
    c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);
    const ctx=c.getContext("2d");
    const cols=["#e9b446","#2d6ad4","#3dd68c","#f87171","#2dcfbe","#a78bfa","#ffd56b"];
    const P=Array.from({length:150},()=>({x:innerWidth/2+(Math.random()-.5)*innerWidth*.55,y:innerHeight*.22,
      vx:(Math.random()-.5)*9,vy:Math.random()*-9-3,g:.22+Math.random()*.16,s:4+Math.random()*5,
      r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,col:cols[Math.random()*cols.length|0]}));
    const t0=performance.now();
    (function tick(t){
      ctx.clearRect(0,0,c.width,c.height);
      P.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.col;
        ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*0.62);ctx.restore();});
      if(t-t0<2300)requestAnimationFrame(tick);else c.remove();
    })(t0);
  }catch(e){}
}
const TIER_MEDAL=["","🥉","🥈","🥇","💎"];
const TIER_NAME=["","Bronca","Srebro","Zlato","Platina"];
function achLevel(a,u){var c=0;try{c=a.prog?a.prog(u):0;}catch(e){c=0;}var lv=0;for(var i=0;i<a.tiers.length;i++){if(c>=a.tiers[i])lv=i+1;}return lv;}
function achNext(a,u){var lv=achLevel(a,u);return lv<a.tiers.length?a.tiers[lv]:null;}
const ACHIEVEMENTS=[
 {id:"exams",ico:"📚",name:"Kolekcionar",unit:"riješenih ispita",tiers:[1,20,45,70],prog:u=>(u.history||[]).length},
 {id:"streak",ico:"🔥",name:"Niz discipline",unit:"dana zaredom",tiers:[7,21,50,100],prog:u=>(u.streak||0)},
 {id:"perfect",ico:"💯",name:"Savršenstvo",unit:"ispita sa 100%",tiers:[1,5,12,25],prog:u=>(u.history||[]).filter(h=>h.pct===100).length},
 {id:"mastery",ico:"🎯",name:"Majstor tema",unit:"savladanih tema (≥80%)",tiers:[2,5,8,11],prog:u=>{const ag={};(u.history||[]).forEach(h=>{const tb=h.topic_breakdown||{};Object.keys(tb).forEach(t=>{ag[t]=ag[t]||{c:0,n:0};ag[t].c+=tb[t].correct||0;ag[t].n+=tb[t].total||0;});});return Object.values(ag).filter(x=>x.n>=10&&x.c/x.n>=0.8).length;}},
 {id:"sim",ico:"🏃",name:"Maratonac",unit:"punih simulacija",tiers:[1,7,15,30],prog:u=>(u.history||[]).filter(h=>h.mode==="simulacija"&&(h.total||0)>=30).length},
 {id:"speed",ico:"⚡",name:"Brzina",unit:"brzih ispita",tiers:[3,12,25,50],prog:u=>(u.history||[]).filter(h=>{const t=Object.values(h.qTimes||{});return t.length>=20&&t.reduce((a,b)=>a+b,0)/t.length<60;}).length},
 {id:"phoenix",ico:"🪶",name:"Feniks",unit:"podignutih tema",tiers:[1,3,6,11],prog:u=>{const lo={},hi={};(u.history||[]).forEach(h=>{const tb=h.topic_breakdown||{};Object.keys(tb).forEach(t=>{const v=tb[t];const p=v.total?Math.round((v.correct||0)/v.total*100):null;if(p==null)return;if(p<40)lo[t]=true;if(p>=70)hi[t]=true;});});return Object.keys(hi).filter(t=>lo[t]).length;}},
 {id:"years",ico:"🗓️",name:"Putnik kroz godine",unit:"različitih godišta",tiers:[3,7,12,16],prog:u=>new Set((u.history||[]).map(h=>String(h.examKey||"").split("_")[0]).filter(Boolean)).size},
 {id:"night",ico:"🦉",name:"Noćna ptica",unit:"ispita poslije 22 h",tiers:[1,8,25,50],prog:u=>(u.history||[]).filter(h=>h.hour!=null&&(h.hour>=22||h.hour<4)).length},
 {id:"early",ico:"🌅",name:"Ranoranilac",unit:"ispita prije 8 h",tiers:[1,8,25,50],prog:u=>(u.history||[]).filter(h=>h.hour!=null&&h.hour>=5&&h.hour<8).length},
];
function TodayHero({userData,onStartErrorSession,onSRS,onDailyChallenge,razina,onEditRazina,onPrepareExams}){
  const history=userData.history||[];
  const et=userData.errorTracker||{};
  const labelOf=t=>TOPIC_LABELS[t]||t;
  const[tgGoal,setTgGoal]=React.useState(()=>{try{return parseInt(DS.get("mat_target_grade"))||null}catch{return null}});
  const[goalEdit,setGoalEdit]=React.useState(false);
  function setHomeGoal(g){try{DS.set("mat_target_grade",String(g))}catch(e){}setTgGoal(g);setGoalEdit(false);}

  // Slabe teme: prvo po broju grešaka, pa po niskoj točnosti (topic_breakdown)
  const errByLabel={};
  Object.values(et).forEach(x=>{ if(x&&x.count>0){ const l=labelOf(x.topic); errByLabel[l]=(errByLabel[l]||0)+x.count; } });
  const accAgg={};
  history.forEach(h=>{ const tb=h.topic_breakdown||{}; Object.keys(tb).forEach(t=>{ const l=labelOf(t); if(!accAgg[l])accAgg[l]={c:0,t:0}; accAgg[l].c+=tb[t].correct||0; accAgg[l].t+=tb[t].total||0; }); });
  const ranked=[];
  Object.keys(errByLabel).sort((a,b)=>errByLabel[b]-errByLabel[a]).forEach(l=>ranked.push(l));
  Object.keys(accAgg).filter(l=>accAgg[l].t>=3 && (accAgg[l].c/accAgg[l].t)<0.7 && ranked.indexOf(l)<0)
    .sort((a,b)=>(accAgg[a].c/accAgg[a].t)-(accAgg[b].c/accAgg[b].t)).forEach(l=>ranked.push(l));
  const targetLabels=ranked.slice(0,3);
  const hasTargets=targetLabels.length>0;

  let srsDue=0; try{ srsDue=getSrsDueCards(srsLoad()).length; }catch(e){}

  // Adaptivni skup (mc+sa) iz ciljnih tema, balansiran
  function buildPool(){
    const out=[];
    Object.values(EXAMS).forEach(ex=>{
      if(razina && ex.razina!==razina) return;
      (ex.qs||[]).forEach(q=>{
        if(q.type!=="mc"&&q.type!=="sa") return;
        const l=labelOf(q.topic);
        if(!hasTargets || targetLabels.indexOf(l)>=0) out.push({...q,_examKey:ex.key,_label:l});
      });
    });
    return out;
  }
  const pool=buildPool();
  function pickBalanced(arr,labels,n){
    if(!labels.length) return [...arr].sort(()=>Math.random()-.5).slice(0,n);
    const byL={}; labels.forEach(l=>byL[l]=[]);
    arr.forEach(q=>{ if(byL[q._label]) byL[q._label].push(q); });
    labels.forEach(l=>byL[l].sort(()=>Math.random()-.5));
    const out=[]; let i=0, guard=0;
    while(out.length<n && guard<n*labels.length+labels.length){
      const l=labels[i%labels.length]; const idx=Math.floor(i/labels.length);
      if(byL[l] && byL[l][idx]) out.push(byL[l][idx]);
      i++; guard++;
    }
    return out.slice(0,n);
  }
  const trainCount=hasTargets?12:10;
  const session=pickBalanced(pool,targetLabels,trainCount);
  // 2.1: pool dolazi iz EXAMS, koji je do zavrsetka ucitavanja prazan. Dok nije spremno,
  // gumb ne laze s "0 pitanja" nego sam pokrene ucitavanje (s progress overlayem) i onda krene.
  const examsReady=allExamsLoaded();

  function _launchTraining(qs){
    if(!qs||!qs.length||!onStartErrorSession) return;
    onStartErrorSession({key:"errors_session",year:"Trening",season:"session",razina:razina||"B",
      label:"Trening dana", qs:[...qs], duration:qs.length*120});
  }
  function startTraining(){
    // Provjera na klik (ne iz rendera) — nakon ucitavanja pool se racuna iznova.
    if(!allExamsLoaded()){
      if(onPrepareExams) onPrepareExams(function(){ _launchTraining(pickBalanced(buildPool(),targetLabels,trainCount)); });
      return;
    }
    _launchTraining(session);
  }

  const mat=nextMatura(); const days=mat.days;
  const topicData=targetLabels.map(l=>{
    const a=accAgg[l];
    const acc=(a&&a.t>0)?Math.round(a.c/a.t*100):null;
    return {label:l, acc, errs:errByLabel[l]||0};
  });
  function sevOf(acc){return acc==null?"sev-red":acc<40?"sev-red":acc<70?"sev-gold":"sev-green";}

  return e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:18,padding:"18px 20px",marginBottom:34,boxShadow:"var(--shadow-sm)",position:"relative",overflow:"hidden"}},e("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:"linear-gradient(180deg,var(--blue),var(--blue-2))"}}),e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,marginBottom:4}},e("div",null,e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)",marginBottom:5}},"🎯 Trening dana"),e("div",{style:{fontFamily:"var(--fh)",fontSize:21,color:"var(--text)",lineHeight:1.15}}, hasTargets?"Fokus na slabe točke":"Zagrij se za maturu")),e("div",{style:{textAlign:"right",flexShrink:0,paddingLeft:8}},e("div",{style:{fontSize:19,fontWeight:800,fontFamily:"var(--fh)",color:days<=14?"var(--red)":"var(--blue)",lineHeight:1}}, mat.today?"DANAS":days),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3,maxWidth:92}}, mat.today?"matura — sretno!":(days===1?"dan do mature":"dana do mature")))),e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5,margin:"8px 0 15px"}}, hasTargets?"Sustav je posložio pitanja iz tvojih slabijih tema — vježbaj baš gdje gubiš bodove.":"Kreni s miješanim pitanjima kroz gradivo — sustav slaže plan čim vidi gdje griješiš."),(function(){var TH={5:85,4:70,3:55,2:40};var avg=history.length?Math.round(history.reduce(function(a,h){return a+h.pct;},0)/history.length):null;if(!tgGoal||goalEdit){return e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"}},e("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:600}},"Ciljam ocjenu:"),[3,4,5].map(function(g){return e("button",{key:g,onClick:function(){setHomeGoal(g);},style:{minWidth:40,padding:"6px 12px",borderRadius:9,border:"1px solid var(--bdr)",background:"var(--s2)",color:"var(--text)",fontSize:14,fontWeight:700,cursor:"pointer"}},g);}));}var th=TH[tgGoal],cur=avg||0,reached=cur>=th,p=Math.min(100,Math.round(cur/Math.max(1,th)*100));return e("div",{style:{marginBottom:16}},e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},e("span",{style:{fontSize:12,fontWeight:700,color:"var(--text)"}},"Cilj: ocjena "+tgGoal+" (≥"+th+"%)"),e("button",{onClick:function(){setGoalEdit(true);},style:{background:"none",border:"none",color:"var(--blue)",fontSize:11,fontWeight:600,cursor:"pointer",padding:0}},"promijeni")),e("div",{style:{height:6,borderRadius:99,background:"var(--s3)",overflow:"hidden"}}, e("div",{style:{height:"100%",width:p+"%",borderRadius:99,background:reached?"var(--green)":"linear-gradient(90deg,var(--blue),#7b9fff)",transition:"width .6s ease"}})),avg!=null&&e("div",{style:{fontSize:11,color:reached?"var(--green)":"var(--muted)",marginTop:6}}, reached?"Prosjek ti je iznad cilja 🎉":("Prosjek "+cur+"% · još "+(th-cur)+"% do cilja")));})(),e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"}},e("button",{onClick:startTraining,className:"shimmer-btn",style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--blue)",color:"#fff",border:"none",borderRadius:11,padding:"11px 18px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"🎯 Započni trening",e("span",{style:{opacity:.85,fontWeight:600,fontSize:13}},examsReady?(" · "+session.length+" pitanja"):" · pripremam zadatke…"),e("span",{style:{marginLeft:1,fontSize:15}},"→")),onEditRazina&&e("button",{onClick:onEditRazina,style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,fontWeight:600,cursor:"pointer"}}, "Razina "+(razina||"?")+" · promijeni")));
}
var __CASND=(typeof window!=="undefined"&&window.nerdamer)?window.nerdamer:null;
function __casNorm(s){return String(s==null?"":s)
  .replace(/\u2212/g,"-").replace(/\u2264/g,"<=").replace(/\u2265/g,">=")
  .replace(/[\u00b7\u00d7\u2219]/g,"*").replace(/\u221a/g,"sqrt").replace(/\u03c0/g,"pi")
  .replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3")
  .replace(/(\d),(\d)/g,"$1.$2").trim();}
function __casNum(x){try{return parseFloat((__CASND||window.nerdamer)(x).evaluate().text("decimals"));}catch(e){return NaN;}}
function __casDisp(s){s=String(s)
  .replace(/\*\*/g,"^").replace(/sqrt/g,"\u221a").replace(/\bpi\b/g,"\u03c0")
  .replace(/\^(\([^)]*\)|[A-Za-z0-9]+(?:\.[0-9]+)?)/g,function(_,x){return "^"+x;})
  .replace(/\*/g,"\u00b7").replace(/(\d)\.(\d)/g,"$1,$2").replace(/-/g,"\u2212");
  return s;}
function __casCheck(it){
  var ND=__CASND||window.nerdamer; if(!ND||!it||!it.izraz) return {ok:false};
  try{
    var v=it["var"]||"x";
    if(it.tip==="jednadzba"){
      var p=__casNorm(it.izraz).split("="); if(p.length<2) return {ok:false};
      var sol=ND.solve("("+p[0]+")-("+p[1]+")",v);
      var arr=sol.toString().replace(/^\[|\]$/g,"").split(",").map(function(x){return x.trim();}).filter(Boolean);
      var nums=arr.map(__casNum).filter(isFinite);
      if(!nums.length) return {ok:false};
      if(!arr.every(function(r){return !/[a-zA-Z]/.test(r);})) return {ok:false};var clean=arr.every(function(r){var m=r.match(/\/(\d+)/);return !m||parseInt(m[1],10)<=999;});
      if(!clean) return {ok:false};
      return {ok:true, nums:nums.sort(function(a,b){return a-b;}), display:arr.map(__casDisp).join(",  ")};
    }
    if(it.tip==="derivacija"){ var d=ND.diff(__casNorm(it.izraz),v).toString(); return d?{ok:true,sym:d,display:__casDisp(d)}:{ok:false}; }
    if(it.tip==="pojednostavi"){ var ex=ND(__casNorm(it.izraz)).expand().toString(); return ex?{ok:true,sym:ex,display:__casDisp(ex)}:{ok:false}; }
    if(it.tip==="vrijednost"){ var n=__casNum(__casNorm(it.izraz)); return isFinite(n)?{ok:true,val:n,display:__casDisp(String(n))}:{ok:false}; }
    return {ok:false};
  }catch(e){ return {ok:false}; }
}
function __casGrade(it, studentRaw){
  var ND=__CASND||window.nerdamer;
  var chk=__casCheck(it); if(!chk.ok) return {error:1};
  var stv=__casNorm(studentRaw); if(!stv) return {correct:false, expect:chk.display};
  try{
    if(it.tip==="jednadzba"){
      var sn=stv.split(/[,; ]+/).map(__casNum).filter(isFinite).sort(function(a,b){return a-b;});
      if(sn.length!==chk.nums.length) return {correct:false, expect:chk.display};
      return {correct:chk.nums.every(function(x,i){return Math.abs(x-sn[i])<1e-6;}), expect:chk.display};
    }
    if(it.tip==="vrijednost"){ return {correct:Math.abs(__casNum(stv)-chk.val)<1e-6, expect:chk.display}; }
    var diff=ND("("+stv+")-("+chk.sym+")").expand().toString();
    if(diff==="0") return {correct:true, expect:chk.display};
    var ok=true,v=it["var"]||"x"; for(var k=0;k<3;k++){var xv=2+k;
      var a=__casNum(ND(stv).sub(v,xv).toString()), b=__casNum(ND(chk.sym).sub(v,xv).toString());
      if(!(isFinite(a)&&isFinite(b)&&Math.abs(a-b)<1e-6)){ok=false;break;} }
    return {correct:ok, expect:chk.display};
  }catch(e){ return {correct:false, expect:chk.display}; }
}
function __aiGenQuestions(opts){
  var tema=opts.tema||"mije\u0161ano", razina=opts.razina||"B", n=opts.count||6;
  var prompt="Ti si sastavlja\u010d zadataka za hrvatsku dr\u017eavnu maturu iz matematike. Generiraj "+n+" RAZLI\u010cITIH zadataka razine "+razina+" iz teme: "+tema+". "
    +"Dozvoljeni tipovi (SAMO ovi, jer se rje\u0161enje provjerava simboli\u010dkim ra\u010dunalom): "
    +"jednadzba (rije\u0161i jednad\u017ebu), derivacija (deriviraj izraz), pojednostavi (raspi\u0161i/sredi izraz), vrijednost (izra\u010dunaj broj). "
    +"Za 'jednadzba' koristi ISKLJU\u010cIVO cijele ili jednostavne racionalne koeficijente i rje\u0161enja (npr. x=2, x=\u22123, x=1/2); izbjegavaj iracionalna rje\u0161enja. "
    +"Polje 'izraz' MORA biti strojno \u010ditljivo (* za mno\u017eenje, ^ za potenciju, sqrt() za korijen): za jednad\u017ebu obavezno sadr\u017ei '=' (npr. x^2-5*x+6=0), za derivaciju/pojednostavi samo izraz (npr. x^3+2*x), za vrijednost broj\u010dani izraz (npr. 2^5+3*4). "
    +"U polju 'pitanje' koristi lijep zapis (x\u00b2, \u221a, razlomci, \u00b7) i NCVVO stil. "
    +"Vrati ISKLJU\u010cIVO JSON niz (bez markdowna, bez backtickova):\n"
    +'[{"tip":"jednadzba","tema":"kratka tema","pitanje":"Rije\u0161i jednad\u017ebu x\u00b2 \u2212 5x + 6 = 0.","izraz":"x^2-5*x+6=0","var":"x"}]';
  // Rjesenja provjerava CAS, pa ga ucitaj prije poziva.
  return __ensureNerdamer().then(function(){ return __aiPost(prompt,1500); })
    .then(function(data){
      if(data.error||!data.content) throw new Error("api");
      var t=(data.content[0]&&data.content[0].text)||"[]";
      var arr=JSON.parse(t.replace(/```json|```/g,"").trim());
      if(!Array.isArray(arr)) throw new Error("fmt");
      var out=[]; arr.forEach(function(it){ var c=__casCheck(it); if(c.ok){ it._ans=c; out.push(it); } });
      return out;
    });
}
function AIPractice(props){
  var e=React.createElement;
  var onBack=props.onBack, onHome=props.onHome, userData=props.userData, onUpdateUserData=props.onUpdateUserData;
  var _pp=React.useState(0), bump=_pp[1];
  React.useEffect(function(){var f=function(){bump(function(x){return x+1;});};window.addEventListener("discere-pro",f);return function(){window.removeEventListener("discere-pro",f);};},[]);
  var pro=IS_PRO;
  var razina=(userData&&userData.razina)||DS.get("mat_razina")||"B";
  var TOPICS=[
    {id:"mije\u0161ano",label:"Mije\u0161ano"},
    {id:"Linearne i kvadratne jednad\u017ebe",label:"Jednad\u017ebe"},
    {id:"Algebarski izrazi",label:"Izrazi"},
    {id:"Derivacije",label:"Derivacije"},
    {id:"Potencije i korijeni",label:"Potencije"}
  ];
  var _t=React.useState("mije\u0161ano"), tema=_t[0], setTema=_t[1];
  var _s=React.useState("idle"), st=_s[0], setSt=_s[1];
  var _q=React.useState([]), qs=_q[0], setQs=_q[1];
  var _i=React.useState(0), idx=_i[0], setIdx=_i[1];
  var _a=React.useState(""), ans=_a[0], setAns=_a[1];
  var _f=React.useState(null), fb=_f[0], setFb=_f[1];
  var _sc=React.useState({c:0,t:0}), sc=_sc[0], setSc=_sc[1];
  var _e=React.useState(null), expl=_e[0], setExpl=_e[1];
  var _es=React.useState("idle"), explS=_es[0], setExplS=_es[1];

  function generate(){
    if(!pro) return;
    setSt("loading"); setQs([]); setIdx(0); setAns(""); setFb(null); setSc({c:0,t:0}); setExpl(null); setExplS("idle");
    __aiGenQuestions({tema:tema,count:6,razina:razina}).then(function(out){
      if(!out||!out.length){ setSt("error"); return; }
      setQs(out); setSt("active");
    }).catch(function(){ setSt("error"); });
  }
  function submit(){
    if(fb||!ans.trim()) return;
    var g=__casGrade(qs[idx], ans);
    if(g.error){ goNext(); return; }
    setFb(g); setSc(function(p){return {c:p.c+(g.correct?1:0), t:p.t+1};});
  }
  function goNext(){
    setFb(null); setAns(""); setExpl(null); setExplS("idle");
    if(idx+1>=qs.length){ setSt("done"); try{ if(onUpdateUserData) onUpdateUserData(function(p){return Object.assign({},p,{xp:(p.xp||0)+Math.round(sc.c*4)});}); }catch(x){} }
    else setIdx(idx+1);
  }
  function explain(){
    if(explS==="loading") return; var it=qs[idx]; setExplS("loading");
    var prompt="Rije\u0161i korak po korak (hrvatski, pedago\u0161ki, kratko) ovaj maturalni zadatak i objasni svaki korak. Vrati ISKLJU\u010cIVO JSON: {\"koraci\":[\"...\"],\"rjesenje\":\"konacno\"}.\nZadatak: "+it.pitanje+"\nTo\u010dno rje\u0161enje (provjereno): "+(it._ans&&it._ans.display)+"\n";
    __aiPost(prompt,900)
      .then(function(d){var t=(d.content&&d.content[0]&&d.content[0].text)||"{}";var o=JSON.parse(t.replace(/```json|```/g,"").trim());setExpl(o);setExplS("done");}).catch(function(){setExplS("error");});
  }

  var hdr=e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:22}},
    e("button",{onClick:onBack,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"var(--text)",fontSize:13,fontWeight:600}},"\u2190 Natrag"),
    e("div",{style:{fontFamily:"var(--fh)",fontSize:20,fontWeight:800,display:"flex",alignItems:"center",gap:8}},"AI vje\u017eba",
      e("span",{style:{fontSize:10,fontWeight:800,letterSpacing:".06em",color:"var(--gold)",background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderRadius:99,padding:"2px 8px"}},"PRO"))
  );
  function wrap(inner){return e("div",{className:"home",style:{paddingTop:18}}, hdr, inner);}

  if(!pro){
    return wrap(e("div",{style:{textAlign:"center",padding:"48px 20px",maxWidth:440,margin:"0 auto"}},
      e("div",{style:{fontSize:46,marginBottom:10}},"\u2728"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:20,fontWeight:800,marginBottom:8}},"Beskona\u010dno novih zadataka"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:20}},"AI generira sva\u017ee zadatke iz tvojih slabijih tema, a svaki je provjeren simboli\u010dkim ra\u010dunalom prije nego ga vidi\u0161. Dostupno u Pro paketu."),
      e("button",{onClick:function(){try{window.parent.postMessage({type:"DISCERE_UPGRADE"},"*");}catch(x){}},className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"12px 22px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"Otklju\u010daj Pro \u2192")
    ));
  }

  if(st==="idle"){
    return wrap(e("div",{style:{maxWidth:560,margin:"0 auto"}},
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:18}},"Odaberi temu \u2014 AI \u0107e generirati nove zadatke, a to\u010dnost svakog provjerava simboli\u010dko ra\u010dunalo. Razina: ",e("b",{style:{color:"var(--text)"}},razina),"."),
      e("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:24}},
        TOPICS.map(function(tp){return e("button",{key:tp.id,onClick:function(){setTema(tp.id);},
          style:{cursor:"pointer",borderRadius:99,padding:"8px 14px",fontSize:13,fontWeight:600,
            border:"1px solid "+(tema===tp.id?"var(--blue)":"var(--bdr)"),
            background:tema===tp.id?"var(--blue-d)":"var(--s1)",
            color:tema===tp.id?"var(--blue)":"var(--text)",transition:"all .15s"}},tp.label);})
      ),
      e("button",{onClick:generate,className:"shimmer-btn",style:{display:"inline-flex",alignItems:"center",gap:8,background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"13px 24px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px -4px rgba(74,144,217,.55)"}},"\u2728 Generiraj zadatke")
    ));
  }

  if(st==="loading"){
    return wrap(e("div",{style:{maxWidth:620,margin:"0 auto"}},
      e("div",{style:{display:"flex",alignItems:"center",gap:10,color:"var(--muted)",fontSize:14,marginBottom:18}},
        e("span",{className:"ai-spin"}),"AI sastavlja zadatke i provjerava rje\u0161enja\u2026"),
      e("div",{style:{display:"flex",flexDirection:"column",gap:14}},
        [0,1,2].map(function(k){return e("div",{key:k,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,padding:20}},
          e("div",{className:"ai-sk",style:{height:13,width:"38%",marginBottom:14}}),
          e("div",{className:"ai-sk",style:{height:11,width:"86%",marginBottom:8}}),
          e("div",{className:"ai-sk",style:{height:11,width:"64%"}})
        );})
      )
    ));
  }

  if(st==="error"){
    return wrap(e("div",{style:{textAlign:"center",padding:"40px 20px",maxWidth:440,margin:"0 auto"}},
      e("div",{style:{fontSize:40,marginBottom:10}},"\u26a0\ufe0f"),
      e("p",{style:{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:18}},(__AI_LAST_ERR||"Nije uspjelo dohvatiti zadatke. Provjeri vezu i poku\u0161aj ponovno.")),
      e("button",{onClick:generate,style:{background:"var(--s1)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"10px 18px",fontSize:14,fontWeight:600,cursor:"pointer",color:"var(--text)"}},"Poku\u0161aj ponovno")
    ));
  }

  if(st==="done"){
    var pct=sc.t?Math.round(sc.c/sc.t*100):0;
    return wrap(e("div",{style:{textAlign:"center",padding:"36px 20px",maxWidth:460,margin:"0 auto"}},
      e("div",{style:{fontSize:48,marginBottom:6}},pct>=80?"\ud83c\udfc6":pct>=50?"\ud83d\udcaa":"\ud83d\udcda"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,fontWeight:800,marginBottom:4}},sc.c+" / "+sc.t),
      e("p",{style:{color:"var(--muted)",fontSize:14,marginBottom:6}},"to\u010dnih odgovora ("+pct+"%)"),
      e("p",{style:{color:"var(--gold)",fontSize:13,fontWeight:700,marginBottom:24}},"+"+Math.round(sc.c*4)+" XP"),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
        e("button",{onClick:generate,className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px -4px rgba(74,144,217,.55)"}},"\u2728 Novi set"),
        e("button",{onClick:onHome,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:600,cursor:"pointer",color:"var(--text)"}},"Po\u010detna")
      )
    ));
  }

  // st==="active"
  var it=qs[idx];
  var ph=it.tip==="jednadzba"?"npr. 2, 3":it.tip==="vrijednost"?"npr. 44":it.tip==="derivacija"?"npr. 3x^2+2":"npr. x^2+2x+1";
  return wrap(e("div",{style:{maxWidth:620,margin:"0 auto"}},
    e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,fontSize:12,color:"var(--muted)",fontWeight:600}},
      e("span",null,"Zadatak "+(idx+1)+" / "+qs.length),
      e("span",null,it.tema||"")),
    e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:20}},
      e("div",{style:{height:"100%",width:Math.round((idx+(fb?1:0))/qs.length*100)+"%",background:"linear-gradient(90deg,var(--blue),#7b9fff)",borderRadius:99,transition:"width .4s"}})),
    e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:18,padding:"22px 22px",boxShadow:"var(--shadow-sm)"}},
      e("div",{style:{fontSize:17,lineHeight:1.6,color:"var(--text)",marginBottom:18,fontWeight:600}},it.pitanje),
      e("input",{type:"text",value:ans,disabled:!!fb,placeholder:ph,
        onChange:function(ev){setAns(ev.target.value);},
        onKeyDown:function(ev){if(ev.key==="Enter")submit();},
        style:{width:"100%",boxSizing:"border-box",padding:"12px 14px",fontSize:15,borderRadius:11,
          border:"1px solid "+(fb?(fb.correct?"var(--green)":"var(--red)"):"var(--bdr2)"),
          background:"var(--bg)",color:"var(--text)",outline:"none",fontFamily:"var(--fb)"}}),
      !fb&&e("button",{onClick:submit,disabled:!ans.trim(),className:"shimmer-btn",
        style:{marginTop:14,background:ans.trim()?"var(--blue)":"var(--s3)",color:ans.trim()?"#fff":"var(--muted)",border:"none",borderRadius:11,padding:"11px 20px",fontSize:14,fontWeight:700,cursor:ans.trim()?"pointer":"default",boxShadow:ans.trim()?"0 4px 14px -4px rgba(74,144,217,.55)":"none"}},"Provjeri"),
      fb&&e("div",{style:{marginTop:16,animation:(fb.correct?"fbPulse":"fbShake")+" .4s"}},
        e("div",{style:{display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:15,color:fb.correct?"var(--green)":"var(--red)",marginBottom:6}},
          fb.correct?"\u2713 To\u010dno!":"\u2717 Nije to\u010dno"),
        !fb.correct&&e("div",{style:{fontSize:14,color:"var(--text)"}},"To\u010dan odgovor: ",e("b",{style:{color:"var(--green)"}},fb.expect)),
        e("div",{style:{display:"flex",gap:10,marginTop:14,flexWrap:"wrap"}},
          e("button",{onClick:explain,style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:600,cursor:"pointer",color:"var(--text)"}},explS==="loading"?"\u2026":"\ud83d\udca1 Objasni"),
          e("button",{onClick:goNext,className:"shimmer-btn",style:{background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:"8px 16px",fontSize:13,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 12px -4px rgba(74,144,217,.5)"}},idx+1>=qs.length?"Zavr\u0161i \u2192":"Sljede\u0107e \u2192")
        ),
        expl&&e("div",{style:{marginTop:14,padding:"14px 16px",background:"var(--s2)",borderRadius:12,border:"1px solid var(--bdr)"}},
          e("ol",{style:{margin:0,paddingLeft:18,fontSize:13.5,lineHeight:1.65,color:"var(--text)"}},
            (expl.koraci||[]).map(function(k,ki){return e("li",{key:ki,style:{marginBottom:6}},__casDisp(k));})),
          expl.rjesenje&&e("div",{style:{marginTop:8,fontSize:13.5,fontWeight:700}},"Rje\u0161enje: ",__casDisp(expl.rjesenje)))
      )
    )
  ));
}
function Home({onExam,onPractice,onStats,onAdaptive,onFormule,onErrors,onBrowse,onFlashcards,onDailyChallenge,onBookmarks,onFilter,onMixed,onSRS,onAIPractice,onDDay,onGuide,onStartErrorSession,razina,onEditRazina,onPrepareExams,resume,onResume,onDiscardResume,onSetGoal,userData,toggles}){
  const[ioMsg,setIoMsg]=React.useState(null);
  React.useEffect(()=>{if(!ioMsg)return;const t=setTimeout(()=>setIoMsg(null),3200);return()=>clearTimeout(t);},[ioMsg]);
  const[navScrolled,setNavScrolled]=React.useState(false);
  React.useEffect(function(){var f=function(){setNavScrolled(window.scrollY>16);};window.addEventListener("scroll",f,{passive:true});f();return function(){window.removeEventListener("scroll",f);};},[]);
  const seasonOrder={"ljeto":0,"jesen":1,"zima":2};
  const[showAbout,setShowAbout]=React.useState(false);
  const[achDetail,setAchDetail]=React.useState(null);
  const[showReadiness,setShowReadiness]=React.useState(false);
  const history=userData.history||[];
  const avgPct=history.length?Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length):null;
  const totalSolved=history.length;
  const lv=getLevel(userData.xp||0);

  const allExams=Object.values(EXAMS).sort((a,b)=>b.year-a.year||(seasonOrder[a.season]??9)-(seasonOrder[b.season]??9));
  const newestExam=allExams[0];

  // Accordion za ispite
  const byYear={};
  allExams.forEach(ex=>{
    if(!byYear[ex.year]) byYear[ex.year]={A:[],B:[]};
    byYear[ex.year][ex.razina].push(ex);
  });
  const years=Object.keys(byYear).sort((a,b)=>b-a);
  const[openYear,setOpenYear]=React.useState(years[0]);
  const[showWrapped,setShowWrapped]=React.useState(false);
  const toggleYear=(y)=>setOpenYear(p=>p===y?null:y);
  const seasonLabel=(s)=>s==="ljeto"?"☀️ Ljetni rok":s==="jesen"?"🍂 Jesenski rok":"❄️ Zimski rok";

  // Greške count
  const errCount=userData.errorTracker?Object.keys(userData.errorTracker).filter(k=>userData.errorTracker[k].count>0).length:0;

  const _allTL=(()=>{const set=new Set();Object.values(EXAMS).forEach(ex=>{if(razina&&ex.razina!==razina)return;(ex.qs||[]).forEach(q=>{if(q.topic)set.add(TOPIC_LABELS[q.topic]||q.topic);});});return [...set];})();
  const _topicCov=(()=>{const o={};_allTL.forEach(l=>o[l]={c:0,n:0});history.forEach(h=>{const tb=h.topic_breakdown||{};Object.keys(tb).forEach(t=>{const l=TOPIC_LABELS[t]||t;if(!o[l])o[l]={c:0,n:0};o[l].c+=tb[t].correct||0;o[l].n+=tb[t].total||0;});});return o;})();
  const _totalTopics=_allTL.length||1;
  const _coveredN=_allTL.filter(l=>_topicCov[l]&&_topicCov[l].n>0).length;
  const _coveragePct=Math.round(_coveredN/_totalTopics*100);
  const _accAll=(()=>{let c=0,n=0;Object.values(_topicCov).forEach(x=>{c+=x.c;n+=x.n;});return n>0?Math.round(c/n*100):(avgPct||0);})();
  const _lastDays=(()=>{const pp=v=>{if(!v)return null;const a=String(v).replace(/\./g,"").trim().split(/\s+/);if(a.length<3)return null;return new Date(+a[2],+a[1]-1,+a[0]);};let l=null;history.forEach(h=>{const d=pp(h.date);if(d&&(!l||d>l))l=d;});if(!l)return 999;return Math.max(0,Math.round((Date.now()-l.getTime())/86400000));})();
  const _recMult=_lastDays<=3?1:_lastDays<=7?0.97:_lastDays<=14?0.92:0.85;
  // 2.1: pokrivenost gradiva ima smisla tek kad su svi (otkljucani) ispiti ucitani — do tada je
  // _allTL prazan pa bi spremnost ispala lazno niska i poslije bez objasnjenja skocila.
  const _topicsReady=allExamsLoaded()&&_allTL.length>0;
  const _readiness=history.length===0?0:(_topicsReady?Math.min(100,Math.round((0.55*_accAll+0.45*_coveragePct)*_recMult)):null);
  const _rdReady=_readiness!=null;
  const _rdPct=_rdReady?_readiness:0;
  const _rdTxt=_rdReady?(_readiness+"%"):"…";
  const _rdHint=!_rdReady?"Računam spremnost — još učitavam gradivo…":(()=>{var parts=[];if(_coveragePct<100){var miss=_totalTopics-_coveredN;parts.push("pokrij jo\u0161 "+miss+" "+(miss===1?"temu":"tema"));}var weak=_allTL.filter(l=>_topicCov[l].n>=5).map(l=>({l:l,p:Math.round(_topicCov[l].c/_topicCov[l].n*100)})).sort((a,b)=>a.p-b.p)[0];if(weak&&weak.p<60)parts.push("digni "+weak.l+" ("+weak.p+"%)");if(!parts.length)return _readiness>=85?"Skoro pa spreman/na \u2014 samo nastavi!":"Solidno \u2014 nastavi vje\u017ebati.";return "Do 100%: "+parts.slice(0,2).join(" \u00b7 ");})();
  return e("div",{className:"home"},
    showAbout&&e(AboutModal,{onClose:()=>setShowAbout(false)}),
    showReadiness&&e("div",{onClick:()=>setShowReadiness(false),style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:0}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:"1px solid var(--bdr)",padding:"22px 20px calc(20px + env(safe-area-inset-bottom))",width:"100%",maxWidth:560,maxHeight:"86vh",overflowY:"auto",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:20}},"\uD83C\uDFAF Spremnost za maturu"),
          e("button",{onClick:()=>setShowReadiness(false),style:{background:"var(--s2)",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--muted)",fontFamily:"var(--fb)"}},"\u2715")),
        e("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:18}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:42,lineHeight:1,color:_rdPct>=75?"var(--green)":_rdPct>=50?"var(--gold)":"var(--blue)"}},_rdTxt),
          e("div",{style:{flex:1,fontSize:12,color:"var(--muted)",lineHeight:1.5}},_rdHint)),
        e("div",{style:{display:"flex",gap:8,marginBottom:18}},
          [["To\u010dnost",_accAll+"%"],["Pokrivenost",_topicsReady?(_coveredN+"/"+_totalTopics):"\u2026"],["Aktivnost",_lastDays>=999?"\u2014":(_lastDays===0?"danas":_lastDays+"d")]].map((m,i)=>
            e("div",{key:i,style:{flex:1,background:"var(--s2)",borderRadius:10,padding:"10px 8px",textAlign:"center"}},
              e("div",{style:{fontSize:16,fontWeight:800}},m[1]),
              e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2}},m[0])))),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}},"Pokrivenost gradiva"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:7}},
          !_topicsReady&&e("div",{style:{fontSize:12,color:"var(--muted)",padding:"6px 0"}},"Učitavam popis tema…"),
          _allTL.slice().sort((a,b)=>{var pa=_topicCov[a].n>0?_topicCov[a].c/_topicCov[a].n:-1;var pb=_topicCov[b].n>0?_topicCov[b].c/_topicCov[b].n:-1;return pa-pb;}).map(function(l){
            var x=_topicCov[l];var done=x.n>0;var acc=done?Math.round(x.c/x.n*100):null;
            return e("div",{key:l,style:{display:"flex",alignItems:"center",gap:10}},
              e("span",{style:{fontSize:13,width:14,textAlign:"center",flexShrink:0}},done?(acc>=70?"\u2705":acc>=40?"\uD83D\uDFE1":"\uD83D\uDD34"):"\u2014"),
              e("span",{style:{fontSize:12.5,fontWeight:600,flex:1,minWidth:0,color:done?"var(--text)":"var(--muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},l),
              done?e("div",{style:{width:80,height:6,borderRadius:99,background:"var(--bdr2)",overflow:"hidden",flexShrink:0}},e("div",{style:{height:"100%",width:acc+"%",background:acc>=70?"var(--green)":acc>=40?"var(--gold)":"var(--red)",borderRadius:99}})):e("span",{style:{fontSize:10.5,color:"var(--muted)",flexShrink:0,width:80,textAlign:"right"}},"nije po\u010deto"),
              e("span",{style:{fontSize:11,fontWeight:700,width:34,textAlign:"right",flexShrink:0,color:done?"var(--text)":"transparent"}},done?acc+"%":"\u2014"));
          }))
      )),
    achDetail&&(function(){
      var a=achDetail;var lv=achLevel(a,userData);var pc=a.prog?a.prog(userData):0;var nx=achNext(a,userData);
      var pct=nx?Math.min(100,Math.round(pc/nx*100)):100;
      return e("div",{onClick:()=>setAchDetail(null),style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
        e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid "+(lv>0?"var(--gold-b)":"var(--bdr)"),borderRadius:"var(--rr)",padding:"24px 22px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)",position:"relative"}},
          e("button",{onClick:()=>setAchDetail(null),style:{position:"absolute",top:10,right:12,background:"none",border:"none",fontSize:18,color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)"}},"✕"),
          e("div",{style:{fontSize:50,marginBottom:6,filter:lv>0?"none":"grayscale(1)",opacity:lv>0?1:.55}},a.ico),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:21,marginBottom:3,color:lv>0?"var(--gold)":"var(--text)"}},a.name),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}},lv>0?(TIER_MEDAL[lv]+" "+TIER_NAME[lv]+(lv>=a.tiers.length?" · MAX":"")):"Zaključano"),
          nx?e("div",{style:{marginBottom:16}},
            e("div",{style:{height:9,borderRadius:99,background:"var(--bdr2)",overflow:"hidden",marginBottom:7}},e("div",{style:{height:"100%",width:pct+"%",background:"var(--gold)",borderRadius:99,transition:"width .5s"}})),
            e("div",{style:{fontSize:12.5,color:"var(--muted)",fontWeight:600}},"Još "+Math.max(0,nx-pc)+" do "+TIER_MEDAL[lv+1]+" "+TIER_NAME[lv+1]+" · "+Math.min(pc,nx)+"/"+nx+" "+a.unit)
          ):e("div",{style:{marginBottom:16,fontSize:13,color:"var(--green)",fontWeight:700}},"🏆 Sve razine osvojene! ("+pc+" "+a.unit+")"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
            a.tiers.map(function(t,i){var done=lv>=i+1;var isNext=lv===i;
              return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,padding:"7px 11px",borderRadius:9,background:done?"var(--gold-d)":isNext?"var(--s2)":"transparent",border:"1px solid "+(done?"var(--gold-b)":isNext?"var(--bdr2)":"var(--bdr)"),opacity:done||isNext?1:.5}},
                e("span",{style:{fontSize:17,filter:done?"none":"grayscale(1)"}},TIER_MEDAL[i+1]),
                e("span",{style:{fontSize:12.5,fontWeight:700,flex:1,textAlign:"left",color:done?"var(--text)":"var(--muted)"}},TIER_NAME[i+1]),
                e("span",{style:{fontSize:12,fontWeight:700,color:done?"var(--green)":"var(--muted)"}},done?("✓ "+t):String(t)));
            }))
        ));
    })(),

    // ── NAV ──
    e("div",{className:"nav nav-home"+(navScrolled?" nav-scrolled":"")},
      e("span",{className:"ntitle"},SUBJECT.navLabel),
      e("span",{className:"nbadge"},"Simulator mature"),
      e("span",{className:"nsp"}),
      
      e("button",{
        onClick:onGuide,
        style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",
          padding:"5px 12px",cursor:"pointer",fontSize:12,fontWeight:600,
          color:"var(--blue)",fontFamily:"var(--fb)",whiteSpace:"nowrap"}
      },"📖 Upute"),
      toggles
    ),

    // ── #8 TVOJ TRENING DANAS + #5 ODBROJAVANJE (action hub, vrh) ──
    
    
    resume&&(()=>{const ex=EXAMS[resume.key];if(!ex)return null;
      const n=examQCount(ex), ansN=Object.keys(resume.answers||{}).length;
      return e("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",marginBottom:18,
        background:"linear-gradient(135deg,var(--gold-d),var(--s1))",border:"1px solid var(--gold-b)",borderRadius:"var(--rr)"}},
        e("div",{style:{fontSize:22}},"⏸"),
        e("div",{style:{flex:1,minWidth:0}},
          e("div",{style:{fontSize:13.5,fontWeight:800,marginBottom:2}},"Nastavi ispit"),
          e("div",{style:{fontSize:11.5,color:"var(--muted)"}},
            ex.year+". - "+ex.label+" ("+(ex.razina||"")+") \u00b7 zadatak "+((resume.cur||0)+1)+"/"+n+" \u00b7 "+ansN+" odgovoreno"
            +(resume.timerS!=null?" \u00b7 \u23f1 "+Math.round(resume.timerS/60)+" min":""))),
        e("button",{onClick:onResume,className:"btn btn-gold",style:{fontSize:12.5,padding:"8px 16px",flexShrink:0}},"\u25b6 Nastavi"),
        e("button",{onClick:onDiscardResume,title:"Odbaci",style:{background:"none",border:"none",cursor:"pointer",fontSize:15,color:"var(--muted)",padding:6,flexShrink:0}},"\u2715")
      );})(),

    // ── HERO BANNER ── (samo prvi posjet; povratniku je TodayHero akcijski hub)
    e("div",{className:"hero"},e("div",{className:"hero-icon"},"∑"),e("h1",null,"Matura nije ",e("em",null,"sreća."),e("br"),"Matura je ",e("span",{className:"accent"},"priprema.")),e("p",null,"Svi ispiti državne mature 2010.–2025., A i B razina — s rješenjima korak po korak i AI profesorom.")),
      userData&&(function(){var xp=userData.xp||0,lv=getLevel(xp);var cur=XP_LEVELS[lv]||0,nx=XP_LEVELS[lv+1];var p=(nx==null)?100:Math.max(0,Math.min(100,Math.round((xp-cur)/(nx-cur)*100)));var toNext=(nx==null)?0:(nx-xp);return e("div",{style:{maxWidth:480,margin:"0 auto 30px",padding:"0 4px"}},e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}},e("div",{className:"level-badge"},"⭐ "+(LEVEL_NAMES[lv]||"Početnik")),(userData.streak||0)>0&&e("div",{className:"streak-badge"},e("span",null,"🔥"),(userData.streak||0)+" "+((userData.streak||0)===1?"dan":"dana")+" zaredom"),e("div",{style:{fontSize:12,color:"var(--muted)"}},xp+" XP")),e("div",{className:"xp-bar-wrap"},e("div",{className:"xp-bar",style:{width:p+"%"}})),e("div",{className:"xp-label"},e("span",null,"Razina "+(lv+1)),toNext>0&&e("span",null,toNext+" XP do sl. razine")));})(),
      history.length>0&&e("div",{onClick:()=>setShowReadiness(true),style:{display:"flex",alignItems:"center",gap:15,padding:"15px 17px",marginBottom:18,borderRadius:"var(--rr)",background:"var(--s1)",border:"1px solid var(--bdr)",cursor:"pointer"}},
      e("div",{style:{position:"relative",width:62,height:62,flexShrink:0}},
        e("svg",{width:62,height:62,viewBox:"0 0 36 36"},
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:"var(--bdr2)",strokeWidth:3.4}),
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:_rdPct>=75?"var(--green)":_rdPct>=50?"var(--gold)":"var(--blue)",strokeWidth:3.4,strokeDasharray:(_rdPct/100*97.4).toFixed(1)+" 97.4",strokeLinecap:"round",transform:"rotate(-90 18 18)"})),
        e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:16.5}},_rdTxt)),
      e("div",{style:{flex:1,minWidth:0}},
        e("div",{style:{fontSize:13.5,fontWeight:800,marginBottom:3}},"Spremnost za maturu"),
        e("div",{style:{fontSize:11.5,color:"var(--muted)",lineHeight:1.45}},_rdHint)),
      e("span",{style:{color:"var(--muted)",fontSize:20,flexShrink:0}},"\u203a")),
      e("div",{style:{maxWidth:480,margin:"0 auto 34px",padding:"0 4px"}},e("input",{type:"text",readOnly:true,placeholder:"🔍  Pretraži zadatke i rješenja…",onClick:onBrowse,onFocus:onBrowse,style:{width:"100%",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"12px 16px",color:"var(--muted)",fontSize:14,cursor:"pointer",boxShadow:"var(--shadow-sm)",transition:"border-color .15s,box-shadow .15s",outline:"none"},onMouseEnter:ev=>{ev.target.style.borderColor="var(--blue)";ev.target.style.boxShadow="0 0 0 3px rgba(74,144,217,.12)";},onMouseLeave:ev=>{ev.target.style.borderColor="var(--bdr)";ev.target.style.boxShadow="var(--shadow-sm)";}})),

      e(TodayHero,{userData,onStartErrorSession,onSRS,onDailyChallenge,razina,onEditRazina,onPrepareExams}),
      e("div",{className:"modes-section"},
      e("div",{className:"section-label"},"Vježba i testiranje"),

      // Primarni modovi  -  4 na vrhu
      e("div",{className:"modes"},
        e("div",{className:"mc red",onClick:onDDay},e("div",{className:"mc-ico-wrap"},"🎓"),e("h3",null,"Probna matura"),e("p",null,"Generalna proba — pun ispit pod stvarnim uvjetima, kao na maturi."),e("span",{className:"mtag"},"PROBA")),
        e("div",{className:"mc gold",onClick:()=>{var el=document.getElementById("ispiti-lista");if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}},e("div",{className:"mc-ico-wrap"},"📝"),e("h3",null,"Originalni ispiti"),e("p",null,"Riješi prave ispite državne mature — s vremenskim ograničenjem ili u vježbovnom modu."),e("span",{className:"mtag"},allExams.length+" ispita")),
        e("div",{className:"mc blue",onClick:onAdaptive},
          e("div",{className:"mc-ico-wrap"},"🎯"),
          e("h3",null,"Adaptivni trening"),
          e("p",null,"Težina se prilagođava tebi — gađa točno tvoj nivo."),
          e("span",{className:"mtag",style:{color:"var(--blue)",borderColor:"var(--blue-b)",background:"var(--blue-d)"}},"NOVO")
        ),
        e("div",{className:"mc blue",onClick:onAIPractice},e("div",{className:"mc-ico-wrap"},"✨"),e("h3",null,"AI vježba"),e("p",null,"Beskonačno novih zadataka iz tvojih tema — svaki provjeren simboličkim računalom."),e("span",{className:"mtag"},"PRO")),
        e("div",{className:"mc teal",onClick:onFilter},
          e("div",{className:"mc-ico-wrap"},"🎯"),
          e("h3",null,"Vježbaj po temi"),
          e("p",null,"Prilagođena sesija po temi, godini, razini.")
        ),
        e("div",{className:"mc purple",onClick:onMixed},
          e("div",{className:"mc-ico-wrap"},"🔀"),
          e("h3",null,"Miješane teme"),
          e("p",null,"Miješa tvoje slabije teme u jednu sesiju — interleaving za jače pamćenje."),
          e("span",{className:"mtag",style:{color:"#b97cf3",borderColor:"rgba(185,124,243,.4)",background:"rgba(185,124,243,.14)"}},"NOVO")
        ),
        e("div",{className:"mc gold",onClick:onDailyChallenge},
          e("div",{className:"mc-ico-wrap"},"⚡"),
          e("h3",null,"Dnevni izazov"),
          e("p",null,"5 pitanja svaki dan  -  izgradi naviku učenja."),
          e("span",{className:"mtag"},"DAILY")
        )),
      e("div",{className:"section-label",style:{marginTop:30}},"Ponovi i ispravi"),
      e("div",{className:"modes"},
        e("div",{className:"mc red",onClick:onErrors},
          e("div",{className:"mc-ico-wrap"},"🚨"),
          e("h3",null,"Greške"),
          e("p",null,errCount>0?errCount+" pitanja za ponavljanje":"Tu će se pojaviti tvoje greške - lakše ćeš ih pratiti i ponavljati."),
          errCount>0&&e("span",{className:"mtag",
            style:{color:"var(--red)",borderColor:"rgba(248,113,113,.3)",background:"var(--red-d)"}},
            errCount+" pit.")
        ),
        e("div",{className:"mc purple",onClick:onSRS},
          e("div",{className:"mc-ico-wrap"},"🔁"),
          e("h3",null,"Pametno ponavljanje"),
          e("p",null,"Sustav pamti što griješiš i vraća ti to pitanje kad je pravo vrijeme.")
        ),
        e("div",{className:"mc gold",onClick:onBookmarks},
          e("div",{className:"mc-ico-wrap"},"🔖"),
          e("h3",null,"Spremljena pitanja"),
          e("p",null,"Pitanja koja si spremio za kasnije ponavljanje.")
        )),
      e("div",{className:"section-label",style:{marginTop:30}},"Učenje i napredak"),
      e("div",{className:"modes"},
        e("div",{className:"mc blue",onClick:onStats},
          e("div",{className:"mc-ico-wrap"},"📊"),
          e("h3",null,"Statistika"),
          e("p",null,"Statistika, heatmap tema, predviđanje ocjene.")
        ),
        e("div",{className:"mc teal",onClick:onFlashcards},
          e("div",{className:"mc-ico-wrap"},"🃏"),
          e("h3",null,"Flashcards"),
          e("p",null,"Brzo ponavljanje formula i pojmova.")
        ),
        e("div",{className:"mc green",onClick:onFormule},
          e("div",{className:"mc-ico-wrap"},"📐"),
          e("h3",null,"Formule i tablice"),
          e("p",null,"Sve maturalne formule na jednom mjestu + igra za pamćenje."),
          e("span",{className:"mtag",style:{color:"var(--green)",borderColor:"rgba(80,200,120,.4)",background:"rgba(80,200,120,.14)"}},"NOVO · FREE")
        ),
        e("div",{className:"mc purple",onClick:onBrowse},
          e("div",{className:"mc-ico-wrap"},"🔍"),
          e("h3",null,"Pretraži"),
          e("p",null,"Sva pitanja po temi, tipu ili ključnoj riječi.")
        ))
    ),

    // ── POPIS ISPITA ──
    e("div",{className:"modes-section",id:"ispiti-lista"},
    history.length>0&&e("div",{style:{marginBottom:26}},
      e("div",{className:"section-label"},"Postignuća"+(function(){var earned=0,total=0;ACHIEVEMENTS.forEach(function(a){earned+=achLevel(a,userData);total+=a.tiers.length;});return " · "+earned+"/"+total+" razina";})()),
      e("div",{className:"trophy-grid"},
        ACHIEVEMENTS.map(a=>{
          const lv=achLevel(a,userData);const got=lv>0;const nx=achNext(a,userData);const pc=a.prog?a.prog(userData):0;const pr=nx?{cur:pc,tgt:nx}:null;return e("div",{key:a.id,onClick:()=>setAchDetail(a),style:{
            textAlign:"center",padding:"12px 6px 10px",borderRadius:"var(--r)",
            background:got?"var(--s1)":"var(--s2)",border:"1px solid "+(got?"var(--gold-b)":"var(--bdr)"),
            opacity:got?1:.62,cursor:"pointer",position:"relative",transition:"all .15s"}},
            e("span",{style:{position:"absolute",top:5,right:7,fontSize:11}},got?TIER_MEDAL[lv]:"\uD83D\uDD12"),
            e("div",{style:{fontSize:22,marginBottom:4,filter:got?"none":"grayscale(1)",opacity:got?1:.8}},a.ico),
            e("div",{style:{fontSize:9.5,fontWeight:700,lineHeight:1.25,color:got?"var(--text)":"var(--muted)"}},a.name),pr&&pr.tgt>1&&e("div",{style:{marginTop:6}},e("div",{style:{height:4,borderRadius:99,background:"var(--bdr2)",overflow:"hidden"}},e("div",{style:{height:"100%",width:Math.min(100,Math.round(pr.cur/pr.tgt*100))+"%",background:"var(--gold)",borderRadius:99}})),e("div",{style:{fontSize:8.5,fontWeight:700,color:"var(--muted)",marginTop:2}},Math.min(pr.cur,pr.tgt)+"/"+pr.tgt)));
        }))),
      e("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:6,marginTop:12,marginBottom:4,fontSize:11,color:"var(--muted)"}},
        e("span",null,"\uD83D\uDCBE Sigurnosna kopija:"),
        e("button",{onClick:()=>{try{
            const keys=["mat_sim_v1","mat_bookmarks","mat_razina","mat_target_grade","mat_dark","mat_sound","mat_resume"];
            const data={_app:SUBJECT.appId,_v:1,_ts:new Date().toISOString()};
            keys.forEach(k=>{const v=DS.get(k);if(v!=null&&v!=="")data[k]=v;});
            const blob=new Blob([JSON.stringify(data,null,1)],{type:"application/json"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);
            a.download="discere_backup_"+new Date().toISOString().slice(0,10)+".json";
            document.body.appendChild(a);a.click();a.remove();
          }catch(e2){setIoMsg({t:"Izvoz nije uspio. Pokušaj ponovo.",bad:true});}},
          className:"pill"},"\u2b07 Izvezi"),
        e("button",{onClick:()=>{const inp=document.getElementById("ds-import-inp");if(inp)inp.click();},
          className:"pill"},"\u2b06 Uvezi"),
        e("input",{id:"ds-import-inp",type:"file",accept:"application/json,.json",style:{display:"none"},
          onChange:ev=>{const file=ev.target.files&&ev.target.files[0];if(!file)return;
            const rd=new FileReader();
            rd.onload=()=>{try{
                const data=JSON.parse(rd.result);
                if(!data||data._app!==SUBJECT.appId||!data.mat_sim_v1) throw new Error("bad");
                if(!window.confirm("Uvoz zamjenjuje sav trenutni napredak ovom kopijom. Nastaviti?")) return;
                DS.set("mat_import_pending",JSON.stringify(data));
                window.location.reload();
              }catch(e3){setIoMsg({t:"Datoteka nije valjana Discere kopija.",bad:true});}
              finally{ev.target.value="";}};
            rd.readAsText(file);}}),
        ioMsg&&e("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:200,
          background:ioMsg.bad?"var(--red-d)":"var(--green-d)",border:"1px solid "+(ioMsg.bad?"rgba(248,113,113,.4)":"rgba(61,214,140,.4)"),
          color:ioMsg.bad?"var(--red)":"var(--green)",fontSize:12.5,fontWeight:700,padding:"10px 18px",borderRadius:99,
          boxShadow:"var(--shadow)",animation:"mcIn .3s both",maxWidth:"90vw",textAlign:"center"}},ioMsg.t)
      ),
      e("div",{className:"section-label"},"Svi ispiti  -  2010. – 2025."),
      e("div",{className:"exams-grid"},
        years.map(year=>{
          const isOpen=openYear===year;
          const yearExams=Object.values(byYear[year]).flat();
          const done=yearExams.filter(ex=>history.find(h=>h.examKey===ex.key)).length;
          const total=yearExams.filter(ex=>!ex.locked).length;

          return e("div",{key:year,className:"year-card"+(isOpen?" open":"")},
            e("div",{className:"year-card-hdr",onClick:()=>toggleYear(year)},
              e("span",{className:"year-num"},year),
              e("div",{className:"year-meta"},
                e("div",{className:"year-pips"},
                  yearExams.filter(ex=>!ex.locked).map(ex=>
                    e("span",{key:ex.key,className:"ypip"+(history.find(h=>h.examKey===ex.key)?" done":"")}))),
                e("span",{className:"year-meta-sub"},
                  (done>0?done+"/"+total+" riješeno · ":total+" ispita · ")+
                  (byYear[year].A.length>0?"A i ":"")+
                  (byYear[year].B.length>0?"B razina":"razina")
                )
              ),
              e("div",{className:"year-razina-badges"},
                byYear[year].A.length>0&&e("span",{className:"ybadge-a"},"A"),
                byYear[year].B.length>0&&e("span",{className:"ybadge-b"},"B")
              ),
              e("span",{className:"year-arrow"},"▾")
            ),
            isOpen&&e("div",{className:"year-card-body"},
              (razina==="B"?["B","A"]:["A","B"]).map(rz=>{
                const exList=byYear[year][rz];
                if(!exList||exList.length===0) return null;
                const sorted=[...exList].sort((a,b)=>(seasonOrder[a.season]??9)-(seasonOrder[b.season]??9));
                const isA=rz==="A";
                const mine=razina&&rz===razina;
                return e("div",{key:rz},
                  e("div",{className:"razina-label",
                    style:{color:isA?"var(--blue)":"var(--teal)",display:"flex",alignItems:"center",gap:7}},
                    isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)",
                    mine&&e("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:".04em",padding:"2px 7px",borderRadius:99,background:isA?"var(--blue-d)":"var(--teal-d)",border:"1px solid "+(isA?"var(--blue-b)":"rgba(52,209,191,.3)"),textTransform:"uppercase"}},"tvoja razina")),
                  sorted.map(ex=>{
                    const h=history.find(x=>x.examKey===ex.key);
                    const locked=ex.locked;
                    return e("div",{key:ex.key,className:"exam-btn",
                      title:locked?planCta():undefined,
                      onClick:locked?()=>askUpgrade():()=>onExam(ex.key),
                      style:{opacity:locked?.55:1,cursor:"pointer",
                        borderLeft:h?"3px solid var(--green)":undefined}},
                      e("span",{className:"exam-btn-ico"},
                        ex.season==="ljeto"?"☀️":ex.season==="jesen"?"🍂":"❄️"),
                      e("div",{className:"exam-btn-info"},
                        e("strong",null,ex.season==="ljeto"?"Ljetni rok":ex.season==="jesen"?"Jesenski rok":"Zimski rok"),
                        e("span",null,locked?planCta():examQCount(ex)+" zad. · "+Math.floor(ex.duration/60)+" min")
                      ),
                      locked
                        ?e("span",{style:{fontSize:10,fontWeight:800,color:"var(--gold)",background:"var(--gold-d)",padding:"2px 8px",borderRadius:99,border:"1px solid var(--gold-b)"}},"🔒 Otključaj")
                        :h
                          ?e("div",{className:"exam-btn-score"},
                            e("div",{className:"pct",style:{color:GC[h.grade]||"var(--muted)"}},h.pct+"%"),
                            e("div",{className:"dt"},h.date))
                          :e("span",{style:{fontSize:16,color:"var(--muted)"}},">")
                    );
                  })
                );
              })
            )
          );
        })
      )
    ),

    // ── FOOTER ──
    e("div",{style:{marginTop:40,paddingTop:22,borderTop:"1px solid var(--bdr)",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16}},e("div",{style:{display:"flex",flexDirection:"column",gap:10,flex:1,minWidth:220}},e("span",{style:{fontSize:11.5,color:"var(--muted)",lineHeight:1.65,maxWidth:580}},"Ispitna pitanja vlasništvo su NCVVO-a. Objašnjenja, AI ocjenjivanje i svi analitički alati autorsko su djelo Discerea."),e("button",{onClick:()=>setShowAbout(true),style:{background:"none",border:"none",padding:0,cursor:"pointer",color:"var(--muted)",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",textAlign:"left",alignSelf:"flex-start",transition:"color .15s"},onMouseEnter:ev=>ev.currentTarget.style.color="var(--text)",onMouseLeave:ev=>ev.currentTarget.style.color="var(--muted)"},"Više o aplikaciji →")),e("button",{onClick:onGuide,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,padding:"9px 16px",cursor:"pointer",fontSize:12,fontWeight:600,color:"var(--text)",fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0,boxShadow:"var(--shadow-sm)",transition:"border-color .15s"},onMouseEnter:ev=>ev.currentTarget.style.borderColor="var(--bdr2)",onMouseLeave:ev=>ev.currentTarget.style.borderColor="var(--bdr)"},"📖 Upute za korištenje"))
  );
}
function ModeSelect({examKey,onExamMode,onPractice,onPracticeTimer,onVirtual,onBack}){
  const exam=EXAMS[examKey];
  if(!exam) return null;
  const isA=exam.razina==="A";
  const seasonIcon=exam.season==="ljeto"?"☀️":exam.season==="jesen"?"🍂":"❄️";

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},examTitle(exam)),
      e("span",{className:"nsp"})
    ),
    e("div",{className:"mode-select-wrap"},

      // ── HERO kartice ispita ──
      e("div",{className:"ms-hero"},
        e("div",{className:"ms-razina"},
          isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)"
        ),
        e("div",{className:"ms-title"},
          exam.season==="session"?exam.label:[seasonIcon," ",exam.year,".  -  ",exam.label]
        ),
        e("div",{className:"ms-meta"},
          examQCount(exam)+" zadataka · "+Math.floor(exam.duration/60)+" minuta"
        )
      ),
      (function(){
        var labs={};(exam.qs||[]).forEach(function(q){if(!q.topic)return;var l=TOPIC_LABELS[q.topic]||q.topic;labs[l]=(labs[l]||0)+1;});
        var arr=Object.keys(labs).sort(function(a,b){return labs[b]-labs[a];});
        if(!arr.length)return null;
        var mc=(exam.qs||[]).filter(function(q){return q.type==="mc";}).length;
        var open=(exam.qs||[]).length-mc;
        return e("div",{style:{marginBottom:18,padding:"15px 16px",borderRadius:"var(--rr)",background:"var(--s2)",border:"1px solid var(--bdr)"}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11,display:"flex",justifyContent:"space-between",alignItems:"center"}},
            e("span",null,"\uD83D\uDCDA Što te čeka · "+arr.length+" tema"),
            e("span",{style:{fontWeight:600,textTransform:"none",letterSpacing:0}},mc+" × izbor · "+open+" × otvoreno")),
          e("div",{style:{display:"flex",flexWrap:"wrap",gap:7}},arr.map(function(l){return e("span",{key:l,style:{fontSize:11.5,fontWeight:600,padding:"5px 10px",borderRadius:99,background:"var(--s1)",border:"1px solid var(--bdr)",color:"var(--text)"}},l+" · "+labs[l]);})));
      })(),

      // ── Odaberi način ──
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Odaberi način vježbanja"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),

      e("div",{className:"ms-grid"},

        // Simulacija ispita
        e("div",{className:"mode-card sim",onClick:()=>onExamMode(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"⏱️"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--red)"}},"Ispit · "+Math.floor(exam.duration/60)+" min"),
              e("div",{className:"mc-title"},"Simulacija ispita"),
              e("div",{className:"mc-desc"},
                "Vremensko ograničenje, nema provjere između zadataka. Identično pravoj maturi.")
            )
          ),
          e("div",{className:"mc-tag",
            style:{background:"var(--red-d)",border:"1px solid rgba(248,113,113,.3)",color:"var(--red)"}},
            "MATURA MODE")
        ),

        // Vježbanje
        e("div",{className:"mode-card vjezba",onClick:()=>onPractice(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"📚"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--blue)"}},"Vježbanje · bez limita"),
              e("div",{className:"mc-title"},"Vježbanje"),
              e("div",{className:"mc-desc"},
                "Odmah vidi je li odgovor točan, provjeri rješenje korak po korak i zatraži AI objašnjenje.")
            )
          )
        ),

        // Vježba s timerom
        e("div",{className:"mode-card timed",onClick:()=>onPracticeTimer(examKey)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"⚡"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"var(--gold)"}},"Timed vježba · s pritiskom"),
              e("div",{className:"mc-title"},"Vježba s timerom"),
              e("div",{className:"mc-desc"},
                "Vremenski pritisak uz trenutnu povratnu informaciju. Dobra priprema za realne uvjete.")
            )
          )
        ),

        // Separator
        e("div",{className:"ms-sep"},
          e("span",null,"ili probaj nešto novo")
        ),

        // Virtualni ispit
        e("div",{className:"mode-card virtual",onClick:()=>onVirtual&&onVirtual(exam.razina)},
          e("div",{className:"mc-row"},
            e("div",{className:"mc-icon-box"},"🎲"),
            e("div",{style:{flex:1}},
              e("div",{className:"mc-label",style:{color:"#b97cf3"}},"Generiran ispit · nasumično"),
              e("div",{className:"mc-title"},"Virtualni ispit"),
              e("div",{className:"mc-desc"},
                "~36 nasumičnih zadataka iz svih ispita iste razine  -  nikad isti dvaput.")
            )
          )
        )
      )
    )
  );
}
const CalcQuestionM=React.memo(CalcQuestion);
const TOPIC_FREQ=(()=>{const cnt={},exCnt={};try{Object.values(EXAMS).forEach(function(ex){const seen={};(ex.qs||[]).forEach(function(q){if(!q||!q.topic)return;cnt[q.topic]=(cnt[q.topic]||0)+1;if(!seen[q.topic]){seen[q.topic]=1;exCnt[q.topic]=(exCnt[q.topic]||0)+1;}});});}catch(_e){}return{cnt:cnt,exCnt:exCnt,totalExams:Object.keys(EXAMS).length};})();
function Sim({exam,practice,examMode,timedPractice=false,onExit,onDone,userData,onPracticeErrors,onPracticeSimilar,onStats,onFilter,onHome,resume,onPatchResult}){
  const QSX=exam.qs;
  function toggleBookmark(qid){
    setBookmarks(prev=>{
      const next={...prev};
      const key=exam.key+"__"+String(qid);
      if(next[key]) delete next[key];
      else next[key]={qid,examKey:exam.key,examLabel:exam.year+"  -  "+exam.label,q:QSX.find(x=>x.id===qid)?.q?.slice(0,80)||""};
      DS.set("mat_bookmarks",JSON.stringify(next));
      return next;
    });
  }
  const[cur,setCur]=useState(()=>resume?.cur||0);
  const[answers,setAnswers]=useState(()=>resume?.answers||{});
  const[rev,setRev]=useState({});
  const[revFilter,setRevFilter]=useState("all");
  const[revCol,setRevCol]=useState({});
  const[selfGrade,setSelfGrade]=useState({});
  const[showUpgradeR,setShowUpgradeR]=useState(false);
  const[aiRes,setAiRes]=useState(null);
  const[aiResState,setAiResState]=useState("idle");
  const[hints,setHints]=useState({});
  const[conf,setConf]=useState(()=>resume?.conf||{});
  const[zen,setZen]=useState(false);
  const[showKbd,setShowKbd]=useState(false);
  const[scratchOpen,setScratchOpen]=useState(false);
  const[spAsk,setSpAsk]=useState(null);
  const[spSeen,setSpSeen]=useState(()=>{try{return !!localStorage.getItem(__rk("mat_sp_seen"));}catch(e){return true;}});
  React.useEffect(()=>{ if(scratchOpen&&!spSeen){ try{localStorage.setItem(__rk("mat_sp_seen"),"1");}catch(e){} setSpSeen(true); } },[scratchOpen]);
  React.useEffect(()=>{ document.body.classList.toggle("sp-docked", scratchOpen); return ()=>document.body.classList.remove("sp-docked"); },[scratchOpen]);
  const workspaceRef=React.useRef({});
  const[toolsOpen,setToolsOpen]=useState(false);
  const[navMore,setNavMore]=useState(false);
  const[vizOpen,setVizOpen]=useState(null);
  const[helpOpen,setHelpOpen]=useState(false);
  const[warmup,setWarmup]=useState(()=>practice&&!examMode&&!resume&&typeof window!=="undefined"&&!localStorage.getItem(__rk("mat_warmup_off")));
  const[selfExpl,setSelfExpl]=useState({});
  const[zenSeen,setZenSeen]=useState(()=>{try{return DS.get("mat_zen_seen")==="1"}catch(e){return false}});
  const[showReview,setShowReview]=useState(false);
  const[showCalc,setShowCalc]=useState(false);
  const[elim,setElim]=useState({});
  const[zoomFig,setZoomFig]=useState(null);
  useEscape(!!zoomFig,()=>setZoomFig(null));
  const[fbAnim,setFbAnim]=useState(null);
  const[combo,setCombo]=useState(0);
  const[solveToast,setSolveToast]=useState(null);
  const[scrolled,setScrolled]=useState(false);
  const[saved,setSaved]=useState(false);
  const[notes,setNotes]=useState({});
  const[fontScale,setFontScale]=useState(1);
  const[paused,setPaused]=useState(false);
  const[hlMode,setHlMode]=useState(false);
  const[highlights,setHighlights]=useState({});
  const[speaking,setSpeaking]=useState(false);
  const[navTopicFilter,setNavTopicFilter]=useState(null);
  const[hideSolved,setHideSolved]=useState(false);
  const[readMode,setReadMode]=useState(()=>{try{return DS.get("mat_read_mode")==="1"}catch(e){return false}});
  function ttsText(text){return String(text)
    .replace(/\[FRAC:([^|\]]*)\|([^\]]*)\]/g,"$1 kroz $2").replace(/\[SYS:([^\]]*)\]/g,(m,c)=>c.replace(/\|/g," ; "))
    .replace(/\[(?:B|BLOCK):([^\]]*)\]/g,"$1").replace(/\u2212/g," minus ").replace(/\u221a/g," korijen iz ")
    .replace(/\^/g," na ").replace(/[\u27e8\u27e9\[\]]/g,"").replace(/\s+/g," ").trim();}
  function speakQ(){
    try{const synth=window.speechSynthesis;if(!synth)return;
      if(synth.speaking){synth.cancel();setSpeaking(false);return;}
      const u=new SpeechSynthesisUtterance(ttsText(q.q));u.lang="hr-HR";u.rate=0.95;
      const vs=synth.getVoices();const v=vs.find(x=>/hr|croat/i.test(x.lang)||/hr|croat/i.test(x.name));if(v)u.voice=v;
      u.onend=()=>setSpeaking(false);u.onerror=()=>setSpeaking(false);setSpeaking(true);synth.speak(u);
    }catch(e){}
  }
  React.useEffect(()=>{try{if(window.speechSynthesis&&window.speechSynthesis.speaking){window.speechSynthesis.cancel();setSpeaking(false);}}catch(e){}},[cur]);
  React.useEffect(()=>{try{DS.set("mat_read_mode",readMode?"1":"0");}catch(e){}},[readMode]);
  function navFilterControls(inSheet){
    const labels=[...new Set(QSX.map(qq=>TOPIC_LABELS[qq.topic]||qq.topic))];
    if(labels.length<2)return null;
    return e("div",{className:"nav-filters",style:{display:"flex",flexDirection:"row",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:14}},
      e("select",{value:navTopicFilter||"",onChange:ev=>{const v=ev.target.value||null;setNavTopicFilter(v);if(v){const ix=QSX.findIndex(qq=>(TOPIC_LABELS[qq.topic]||qq.topic)===v);if(ix>=0){goTo(ix);if(inSheet)setShowNav(false);}}},style:{flex:"1 1 160px",minWidth:0,padding:"9px 12px",borderRadius:"var(--r)",border:"1px solid var(--bdr2)",background:"var(--s2)",color:"var(--text)",fontSize:13,fontWeight:600,fontFamily:"var(--fb)",cursor:"pointer"}},
        e("option",{value:""},"\uD83D\uDD0D Filtriraj po temi"),
        labels.map((l,i)=>e("option",{key:l||("__t"+i),value:l},l))),
      e("button",{className:"nf-toggle"+(hideSolved?" on":""),onClick:()=>setHideSolved(v=>!v)},(hideSolved?"\u2713 ":"")+"Sakrij rije\u0161ene"));
  }
  function tokenizeHL(text){const toks=[];let cur="",depth=0;for(const ch of String(text)){if(ch==="[")depth++;else if(ch==="]")depth=Math.max(0,depth-1);if(ch===" "&&depth===0){if(cur)toks.push(cur);toks.push(" ");cur="";}else cur+=ch;}if(cur)toks.push(cur);return toks;}
  function renderHL(text,qid){
    const toks=tokenizeHL(text);const hm=highlights[qid]||{};
    return toks.map((tok,i)=>tok===" "?" ":e("span",{key:i,className:"hl-tok"+(hm[i]?" hl-on":""),
      onClick:()=>setHighlights(p=>({...p,[qid]:{...(p[qid]||{}),[i]:!(p[qid]&&p[qid][i])}}))},renderQText(tok)));
  }
  const[example,setExample]=useState(null);
  const[formulaPeek,setFormulaPeek]=useState({});
  useEscape(!!example,()=>setExample(null));
  const _weakByTopic=(()=>{const et=(userData&&userData.errorTracker)||{};const o={};Object.values(et).forEach(x=>{if(x&&x.topic&&x.count>0)o[x.topic]=(o[x.topic]||0)+x.count;});return o;})();
  const _bestPct=(()=>{const h=((userData&&userData.history)||[]).filter(x=>x.examKey===exam.key&&typeof x.pct==="number");return h.length?Math.max.apply(null,h.map(x=>x.pct)):null;})();
  function showSolvedExample(){
    const pool=[];
    Object.values(EXAMS).forEach(ex=>{(ex.qs||[]).forEach(qq=>{
      if(qq.topic===q.topic&&qq.id!==q.id&&qq.steps&&qq.steps.length>0&&qq.type!=="proof"){pool.push(qq);}
    });});
    if(pool.length)setExample(pool[Math.floor(Math.random()*pool.length)]);
  }
  const[showNav,setShowNav]=useState(false);
  useEscape(showReview,()=>setShowReview(false));
  useEscape(showNav,()=>setShowNav(false));
  const[flag,setFlag]=useState(()=>resume?.flag||{});
  const[bookmarks,setBookmarks]=useState(()=>{
    try{return JSON.parse(DS.get("mat_bookmarks")||"{}");}catch{return {};}
  });
  const[visited,setVisited]=useState({0:true});
  const[modal,setModal]=useState(false);
  const[showFormulas,setShowFormulas]=useState(false);
  const[done,setDone]=useState(false);
  const[qTimes,setQTimes]=useState(()=>resume?.qTimes||{});
  const[shownAnswers,setShownAnswers]=useState({});
  const[timerAlert,setTimerAlert]=useState(null);
  const[flashRed,setFlashRed]=useState(false);
  const[errorTags,setErrorTags]=useState({});
  // Per-question elapsed timer
  const[qElapsed,setQElapsed]=useState(0);
  const qElapsedRef=useRef(0);
  const qStart=useRef(Date.now());
  const timerDur=examMode||timedPractice?((resume&&resume.timerS!=null)?resume.timerS:exam.duration):null;
  // Prosječno vrijeme po zadatku na maturi: 150min/35zad ≈ 257s
  const AVG_Q_TIME=Math.round((exam.duration||9000)/Math.max(QSX.length,1));

  // Tick per-question timer svake sekunde
  useEffect(()=>{
    if(done) return;
    const iv=setInterval(()=>{
      const el=Math.round((Date.now()-qStart.current)/1000);
      qElapsedRef.current=el;
      setQElapsed(el);
    },1000);
    return ()=>clearInterval(iv);
  },[cur,done]);

  function onTimerWarn(sLeft){if(examMode||timedPractice){setTimerAlert(sLeft);setFlashRed(true);setTimeout(()=>setFlashRed(false),500);}}
  function onTimerExpire(){if((examMode||timedPractice)&&!done)finishExam();}
  const timer=useTimer(timerDur||0,!!(timerDur&&!done&&!paused),onTimerExpire,onTimerWarn);
  useEffect(()=>{
    if(done||exam.season==="session"||exam.season==="random")return;
    try{DS.set("mat_resume",JSON.stringify({key:exam.key,examMode,timedPractice,practice,
      answers,cur,flag,conf,timerS:timerDur?timer.s:null,qTimes,ts:Date.now()}));}catch(e2){}
  },[cur,answers,flag,done]);

  function recordTime(fromIdx){
    const elapsed=Math.round((Date.now()-qStart.current)/1000);
    const qid=QSX[fromIdx].id;
    setQTimes(t=>({...t,[qid]:(t[qid]||0)+elapsed}));
    qStart.current=Date.now();
  }
  function goTo(i){recordTime(cur);setCur(i);setVisited(v=>({...v,[i]:true}));if(!practice)setShownAnswers({});qStart.current=Date.now();setQElapsed(0);}
  const qcardRef=React.useRef(null);
  const prevCurRef=React.useRef(cur);
  const touchRef=React.useRef(null);
  const _rm=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  React.useEffect(()=>{
    const dir=cur>prevCurRef.current?1:cur<prevCurRef.current?-1:0;
    prevCurRef.current=cur;
    const el=qcardRef.current;
    if(dir!==0&&el&&!_rm()){
      try{el.animate([{opacity:0,transform:"translateX("+(dir*22)+"px)"},{opacity:1,transform:"none"}],{duration:280,easing:"cubic-bezier(.22,1,.36,1)"});}catch(e){}
    }
  },[cur]);
  function onTouchStart(ev){const t=ev.touches&&ev.touches[0];if(t)touchRef.current={x:t.clientX,y:t.clientY,t:Date.now()};}
  function onTouchEnd(ev){
    const st=touchRef.current;touchRef.current=null;if(!st)return;
    const tg=ev.target;
    if(tg&&tg.closest&&tg.closest("input,textarea,.calc-panel,.symbar,.opt,button,a,.fig-zoomable")) return;
    const t=ev.changedTouches&&ev.changedTouches[0];if(!t)return;
    const dx=t.clientX-st.x,dy=t.clientY-st.y;
    if(Date.now()-st.t>600)return;
    if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*2){
      if(dx<0&&cur<QSX.length-1)goTo(cur+1);
      else if(dx>0&&cur>0)goTo(cur-1);
    }
  }
  function nextBlank(){
    for(let i=cur+1;i<QSX.length;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
    for(let i=0;i<=cur;i++){if(!hasAns(answers[QSX[i].id])){goTo(i);return;}}
  }
  const _toastT=React.useRef(null);
  function flashToast(msg){setSolveToast(msg);clearTimeout(_toastT.current);_toastT.current=setTimeout(()=>setSolveToast(null),2200);}
  function comboMsg(n){return n>=5?("\uD83D\uDD25\uD83D\uDD25 "+n+" zaredom \u2014 odli\u010dan niz!"):n>=3?("\uD83D\uDD25 "+n+" u nizu!"):("\uD83D\uDD25 "+n+" u nizu!");}
  function registerCheck(qq,res){
    setFbAnim({qid:qq.id,ok:res});setTimeout(()=>setFbAnim(a=>(a&&a.qid===qq.id?null:a)),700);
    if(res===true){setCombo(c=>{const nc=c+1;if(nc>=2)flashToast(comboMsg(nc));if(nc>0&&nc%5===0&&typeof fireConfetti==="function"&&!_rm())fireConfetti();return nc;});}
    else if(res===false){setCombo(0);}
  }
  const mileRef=React.useRef({half:false,dio1:false});
  React.useEffect(()=>{
    if(done)return;
    const ansN=QSX.filter(qq=>hasAns(answers[qq.id])).length;
    if(!mileRef.current.half&&QSX.length>=6&&ansN>=Math.ceil(QSX.length/2)&&ansN<QSX.length){mileRef.current.half=true;flashToast("Pola puta! \uD83D\uDCAA");}
  },[answers]);
  React.useEffect(()=>{
    if(done)return;
    if(!mileRef.current.dio1&&mcCount>0&&mcCount<QSX.length&&cur===mcCount){mileRef.current.dio1=true;flashToast("DIO 1 gotov \u2014 slijede zadaci s izra\u010dunom \u270f\ufe0f");}
  },[cur]);
  React.useEffect(()=>{
    const onScroll=()=>{const sc=window.scrollY>72;setScrolled(p=>p!==sc?sc:p);};
    window.addEventListener("scroll",onScroll,{passive:true});
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  const prevAnsRef=React.useRef(null);
  const _saveT=React.useRef(null);
  React.useEffect(()=>{
    const n=QSX.filter(qq=>hasAns(answers[qq.id])).length;
    if(prevAnsRef.current===null){prevAnsRef.current=n;return;}
    if(n>prevAnsRef.current&&!done){setSaved(true);clearTimeout(_saveT.current);_saveT.current=setTimeout(()=>setSaved(false),1200);}
    prevAnsRef.current=n;
  },[answers]);

  function finishExam(){
    try{DS.set("mat_resume","");}catch(e2){}
    if(done)return;
    recordTime(cur);
    setDone(true);
    window._playSound?.("done");
    // Izračun rezultata i callback
    const autoQ2=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const totalPoints2=autoQ2.reduce((s,q)=>s+(q.points||1),0);
    const earnedPoints2=autoQ2.reduce((s,q)=>{const ok=chk(q,answers[q.id]);return s+(ok===true?(q.points||1):0);},0);
    const pct2=Math.round(earnedPoints2/totalPoints2*100)||0;
    if(pct2===100) fireConfetti();
    const g2=grade(pct2);
    const cor2=autoQ2.filter(q=>chk(q,answers[q.id])===true).length;
    // Bug #1 fix: izgradi topic_breakdown
    const topic_breakdown={};
    autoQ2.forEach(q=>{
      const t=q.topic||"ostalo";
      if(!topic_breakdown[t]) topic_breakdown[t]={correct:0,total:0,points:0,earned:0};
      topic_breakdown[t].total++;
      topic_breakdown[t].points+=(q.points||1);
      if(chk(q,answers[q.id])===true){
        topic_breakdown[t].correct++;
        topic_breakdown[t].earned+=(q.points||1);
      }
    });
    if(onDone){
      setTimeout(()=>onDone({
        examKey:exam.key,
        examLabel:exam.year+"  -  "+exam.label,
        razina:exam.razina||"B",
        pct:pct2,grade:g2,cor:cor2,
        total:autoQ2.length,
        answers,qTimes,
        examMode:!!examMode,
        topic_breakdown,
        errorTags
      }),50);
    }
  }

  // Keyboard shortcuts
  useEffect(()=>{
    if(done)return;
    function onKey(e){
      if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
      const curQ=QSX[cur];
      const curIsRev=!!rev[curQ?.id]||done;
      if(curQ.type==="mc"&&!curIsRev&&["1","2","3","4"].includes(e.key)){
        const ix=+e.key-1;
        if(ix<(curQ.opts||[]).length){
          setAnswers(p=>({...p,[curQ.id]:"ABCD"[ix]}));
          if(practice)setShownAnswers(p=>({...p,[curQ.id]:true}));
        }
        return;
      }
      if(curQ.type==="mc"&&!curIsRev&&["a","b","c","d"].includes(e.key.toLowerCase())){
        const idx=["a","b","c","d"].indexOf(e.key.toLowerCase());
        if(idx<(curQ.opts||[]).length){
          setAnswers(p=>({...p,[curQ.id]:e.key.toUpperCase()}));
          if(practice)setShownAnswers(p=>({...p,[curQ.id]:true}));
        }
        return;
      }
      if(e.key==="Enter"){
        e.preventDefault();
        if(practice&&!curIsRev&&hasAns(answers[curQ.id])){
          setRev(p=>({...p,[curQ.id]:true}));
          const result=chk(curQ,answers[curQ.id]);
          registerCheck(curQ,result);
          if(result===true)window._playSound?.("correct");
          else if(result===false)window._playSound?.("wrong");
        } else if(cur<QSX.length-1){goTo(cur+1);}
        return;
      }
      if(e.key==="ArrowRight"&&cur<QSX.length-1){goTo(cur+1);return;}
      if(e.key==="ArrowLeft"&&cur>0){goTo(cur-1);return;}
      if(e.key==="f"&&e.shiftKey||e.key==="F"&&e.shiftKey){toggleBookmark(curQ.id);return;}
      if(e.key==="f"||e.key==="F"){setFlag(p=>({...p,[curQ.id]:!p[curQ.id]}));return;}
      if(e.key==="?"){setShowKbd(v=>!v);return;}
      if(e.key==="Escape"){setShowKbd(false);return;}
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[cur,answers,rev,done,QSX,practice]);

  const _cq=QSX[cur];
  useEscape(modal,()=>setModal(false));
  const onAnswerCb=React.useCallback(val=>{if(_cq)setAnswers(p=>({...p,[_cq.id]:val}));},[_cq&&_cq.id]);
  const mcStem=React.useMemo(()=>{
    if(!_cq||!_cq.img)return null;
    const imgKey=__imgKey(_cq._examKey||exam.key,_cq);
    const fn=__MAT.Q_IMAGES[imgKey];return fn?fn():null;
  },[_cq&&_cq.id,_cq&&_cq._examKey,_cq&&_cq._origId]);
  React.useEffect(()=>{
    if(!done||typeof onPatchResult!=="function")return;
    const aQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const sQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gQ=sQ.filter(q=>selfGrade[q.id]!==undefined);
    if(gQ.length===0)return;
    const gT=sQ.filter(q=>selfGrade[q.id]===true);
    const tp=[...aQ,...gQ].reduce((s2,q)=>s2+(q.points||1),0);
    const ep=aQ.reduce((s2,q)=>s2+(chk(q,answers[q.id])===true?(q.points||1):0),0)+gT.reduce((s2,q)=>s2+(q.points||1),0);
    const pc=Math.round(ep/tp*100)||0;
    const cr=aQ.filter(q=>chk(q,answers[q.id])===true).length+gT.length;
    const tot=aQ.length+gQ.length;
    const tb={};
    [...aQ,...gQ].forEach(q=>{const t=q.topic||"ostalo";if(!tb[t])tb[t]={correct:0,total:0,points:0,earned:0};
      tb[t].total++;tb[t].points+=(q.points||1);
      const ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
      if(ok){tb[t].correct++;tb[t].earned+=(q.points||1);}});
    onPatchResult({pct:pc,grade:grade(pc),cor:cr,total:tot,topic_breakdown:tb});
  },[selfGrade,done]);
  // Rezultati
  if(done){
    const autoQ=QSX.filter(q=>q.type!=="proof"&&q.type!=="sa");
    const selfQ=QSX.filter(q=>q.type==="proof"||q.type==="sa");
    const gradedQ=selfQ.filter(q=>selfGrade[q.id]!==undefined);
    const gradedTrue=selfQ.filter(q=>selfGrade[q.id]===true);
    const gradedFalse=selfQ.filter(q=>selfGrade[q.id]===false);
    const ungraded=selfQ.length-gradedQ.length;
    const totalPoints=[...autoQ,...gradedQ].reduce((s,q)=>s+(q.points||1),0);
    const earnedPoints=autoQ.reduce((s,q)=>{
      const ok=chk(q,answers[q.id]);
      return s+(ok===true?(q.points||1):0);
    },0)+gradedTrue.reduce((s,q)=>s+(q.points||1),0);
    const pct=Math.round(earnedPoints/totalPoints*100)||0;
    const g=grade(pct);
    const gc=GC[g];
    const heroMsg=pct>=90?"Vrhunski! Ovo je razina za samouvjeren izlazak na maturu. 🏆"
      :pct>=75?"Odličan rezultat — još malo finog brušenja i petica je tu."
      :pct>=50?"Solidno! Pogledaj teme ispod — tu se skrivaju najlakši dodatni bodovi."
      :pct>=25?"Dobar početak. Svaki riješeni ispit otkriva gdje se gube bodovi — kreni od najslabije teme."
      :"Svaki ispit je podatak, ne presuda. \"Vježbaj greške\" je najbrži put do napretka.";
    const cor=autoQ.filter(q=>chk(q,answers[q.id])===true).length+gradedTrue.length;
    const scoredN=autoQ.length+gradedQ.length;
    const manualQ=QSX.filter(q=>q.type==="proof"||q.type==="sa"||q.type==="pa");

    // Update user data  -  poziva se iz finishExam()
    const wrongAutoQ=autoQ.filter(q=>chk(q,answers[q.id])===false);
    const flaggedQ=QSX.filter(q=>flag[q.id]);
    const overconfQ=wrongAutoQ.filter(q=>conf[q.id]===2);
    const _revShow=new Set((revFilter==="wrong"?[...wrongAutoQ,...gradedFalse]:revFilter==="flag"?flaggedQ:revFilter==="manual"?selfQ:revFilter==="overconf"?overconfQ:QSX).map(q=>q.id));
    const revTab=(id,lbl,cnt,col)=>e("button",{key:id,onClick:()=>setRevFilter(id),
      style:{fontSize:11.5,fontWeight:700,padding:"5px 12px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
        border:"1px solid "+(revFilter===id?(col||"var(--blue-b)"):"var(--bdr)"),
        background:revFilter===id?"var(--s2)":"var(--s1)",
        color:revFilter===id?(col||"var(--blue)"):"var(--muted)",transition:"all .15s"}},
      lbl+(cnt!=null?" ("+cnt+")":""));

    async function runAiResults(){
      if(!IS_PRO){setShowUpgradeR(true);return;}
      if(aiResState==="loading")return;
      setAiResState("loading");
      const wrongTopics={};
      [...wrongAutoQ,...gradedFalse].forEach(q=>{const l=TOPIC_LABELS[q.topic]||q.topic;wrongTopics[l]=(wrongTopics[l]||0)+1;});
      const wt=Object.entries(wrongTopics).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([l,n])=>l+" ("+n+"\u00d7)").join(", ")||"nema gre\u0161aka";
      const slow=QSX.filter(q=>(qTimes[q.id]||0)>90).length;
      const prompt="Ti si mentor za hrvatsku dr\u017eavnu maturu iz matematike. U\u010denik je upravo zavr\u0161io ispit ("+(exam.season==="session"||exam.season==="random"?exam.label:exam.year+". "+exam.label)+", razina "+(exam.razina||"B")+").\n"
        +"Rezultat: "+pct+"% ("+cor+"/"+scoredN+" zadataka, "+earnedPoints+"/"+totalPoints+" bodova).\n"
        +"Gre\u0161ke po temama: "+wt+".\nSporih zadataka (>90s): "+slow+".\n"
        +"Vrati ISKLJU\u010cIVO JSON (bez markdown backtickova):\n"
        +'{"dijagnoza":"2-3 re\u010denice ZA\u0160TO se gube bodovi (uzroci, ne samo popis tema)","plan7":["5-7 konkretnih koraka za sljede\u0107ih 7 dana"],"poruka":"kratka motivacija u ti-formi"}';
      try{
        const data=await __aiPost(prompt,900);
        if(data.error||!data.content) throw new Error("api");
        const text=data?.content?.[0]?.text||"{}";
        setAiRes(JSON.parse(text.replace(/```json|```/g,"").trim()));
        setAiResState("done");
      }catch(err){setAiResState("error");}
    }
    return e("div",{className:"results"},
      showUpgradeR&&e(UpgradeModal,{onClose:()=>setShowUpgradeR(false)}),
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        e("span",{className:"ntitle"},exam.year+"  -  Rezultati")
      ),
      e("div",{className:"reshero"},
        e(AnimatedRing,{pct,gc,g}),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:32,color:"#fff",marginBottom:4,
          textShadow:"0 2px 12px rgba(0,0,0,.25)"}},GLBL[g]||""),
        e("div",{className:"res-pct",style:{color:"#fff"}},e(CountUp,{to:pct,suffix:"%",duration:950})),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",marginBottom:4}},
          cor+"/"+scoredN+" zadataka točno · "+earnedPoints+"/"+totalPoints+" bodova"),
        e("div",{style:{display:"inline-flex",gap:8,marginTop:10}},
          e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(233,180,70,.18)",border:"1px solid rgba(233,180,70,.4)",color:"#ffd56b"}},
            "+"+calcXpGain(pct,autoQ.length)+" XP"),
          (userData?.streak||0)>0&&e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,
            background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.22)",color:"#fff"}},
            "🔥 "+(userData.streak)+" dana"),(function(){var pt=autoQ.filter(function(q){return q.warn;}).length;if(!pt)return null;var pa=autoQ.filter(function(q){return q.warn&&chk(q,answers[q.id])===true;}).length;return e("span",{style:{fontSize:12,fontWeight:800,padding:"4px 12px",borderRadius:99,background:"rgba(80,200,120,.16)",border:"1px solid rgba(80,200,120,.42)",color:"#7CEBB0"}},"🛡️ "+pa+"/"+pt+" zamki izbjegnuto");})()
        ),
        e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.85)",margin:"12px auto 0",maxWidth:340,lineHeight:1.55}},heroMsg),
      (()=>{
        const _past=((userData&&userData.history)||[]).filter(h=>h.examKey===exam.key&&typeof h.pct==="number");
        if(_past.length===0) return null;
        const _l=_past[_past.length-1];const _lastCur=_l.cor===cor&&_l.total===scoredN&&_l.pct===pct;
        const _priorCount=_lastCur?_past.length-1:_past.length;
        if(_priorCount<1) return null;
        const _first=_past[0].pct;
        const _delta=pct-_first;
        return e("div",{style:{display:"inline-flex",alignItems:"center",gap:9,marginTop:12,padding:"7px 16px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.22)",fontSize:12.5,fontWeight:700,color:"#fff",flexWrap:"wrap",justifyContent:"center"}},
          e("span",{style:{opacity:.75}},"Prvi put "+_first+"%"),
          e("span",{style:{opacity:.45}},"→"),
          e("span",null,"sad "+pct+"%"),
          _delta>0?e("span",{style:{color:"#7CEBB0"}},"▲ +"+_delta+" napretka!"):_delta<0?e("span",{style:{color:"#ffb4b4"}},"▼ "+Math.abs(_delta)):e("span",{style:{opacity:.7}},"isti rezultat — idemo dalje!")
        );
      })(),
        selfQ.length>0&&e("div",{style:{
          fontSize:12,color:ungraded>0?"rgba(255,220,100,.95)":"rgba(140,235,180,.95)",marginTop:8,
          background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
          borderRadius:8,padding:"6px 12px",display:"inline-block"}},
          ungraded>0
            ?"✏️ "+ungraded+(ungraded===1?" opisni zadatak čeka":" opisnih zadataka čeka")+" tvoju ocjenu u pregledu — ocijeni i ulazi u rezultat."
            :"✓ Svi opisni zadaci ocijenjeni i uključeni u rezultat.")
      ),
      e("div",{className:"breakdown-grid"},
        [{label:"Točnih",val:cor,color:GC[5]},{label:"Netočnih",val:scoredN-cor,color:GC[1]},
         {label:"Neodgovoreno",val:autoQ.filter(q=>!hasAns(answers[q.id])).length,color:"var(--muted)"},
         {label:"Bodova",val:earnedPoints+"/"+totalPoints,color:gc}].map((b,i)=>
          e("div",{key:i,className:"bdk"},
            e("div",{className:"bdk-val",style:{color:b.color}},b.val),
            e("div",{className:"bdk-lbl"},b.label)))
      ),
      (function(){
        var byT={};
        autoQ.forEach(function(qq){var k=TOPIC_LABELS[qq.topic]||qq.topic||"Ostalo";var r=chk(qq,answers[qq.id]);if(r===null)return;if(!byT[k])byT[k]={c:0,t:0};byT[k].t++;if(r===true)byT[k].c++;});
        var rows=Object.keys(byT).map(function(k){return {k:k,c:byT[k].c,t:byT[k].t,p:byT[k].t?byT[k].c/byT[k].t:0};});
        if(rows.length<2)return null;
        rows.sort(function(a,b){return a.p-b.p;});
        return e("div",{style:{marginBottom:20}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},"📊 Točnost po temama"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"15px 16px"}},rows.map(function(r,i){
            var col=r.p>=0.7?"var(--green)":(r.p>=0.4?"var(--gold)":"var(--red)");
            return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10}},
              e("div",{style:{width:118,fontSize:12.5,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},r.k),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:Math.round(r.p*100)+"%",height:"100%",background:col,borderRadius:99,transition:"width .5s"}})),
              e("div",{style:{width:36,textAlign:"right",fontSize:12,fontWeight:800,color:col}},r.c+"/"+r.t));
          })),
          e("div",{style:{fontSize:11.5,color:"var(--muted)",marginTop:10,lineHeight:1.5}},"Najslabija tema je na vrhu — ondje najbrže dižeš rezultat ponavljanjem."));
      })(),
      e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,padding:"18px 18px 20px",marginBottom:20,
        background:"radial-gradient(120% 140% at 85% -20%,#2a5cb8 0%,#163769 45%,#0a1730 100%)",
        border:"1px solid rgba(74,144,217,.35)"}},
        e("div",{style:{position:"absolute",top:12,right:14,fontSize:9.5,fontWeight:800,letterSpacing:".1em",
          padding:"3px 9px",borderRadius:99,background:"rgba(233,180,70,.2)",
          border:"1px solid rgba(233,180,70,.45)",color:"#ffd56b"}},"PRO"),
        (aiResState==="done"&&aiRes)
          ?e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:14.5,fontWeight:700,color:"#fff",marginBottom:8}},"\uD83E\uDD16 AI analiza rezultata"),
              aiRes.dijagnoza&&e("div",{style:{fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,.92)",marginBottom:12}},aiRes.dijagnoza),
              Array.isArray(aiRes.plan7)&&e("div",{style:{marginBottom:12}},
                e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                e("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:4}},
                  aiRes.plan7.map((z,j)=>e("li",{key:j,style:{fontSize:12.5,lineHeight:1.55,color:"rgba(255,255,255,.88)"}},z)))),
              aiRes.poruka&&e("div",{style:{fontSize:12,fontStyle:"italic",color:"rgba(255,255,255,.7)",
                borderTop:"1px solid rgba(255,255,255,.15)",paddingTop:10}},"\uD83D\uDCAA "+aiRes.poruka),
              e("button",{onClick:runAiResults,style:{marginTop:10,background:"rgba(255,255,255,.14)",
                border:"1px solid rgba(255,255,255,.25)",color:"#fff",fontFamily:"var(--fb)",fontSize:12,
                fontWeight:600,padding:"7px 14px",borderRadius:8,cursor:"pointer"}},"\u21bb Nova analiza"))
          :e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:15,fontWeight:700,color:"#fff",marginBottom:5}},"\uD83E\uDD16 AI analiza rezultata"),
              e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.8)",marginBottom:13,maxWidth:430}},
                "Claude pregleda tvoje gre\u0161ke, objasni za\u0161to gubi\u0161 bodove na tim temama i slo\u017ei plan za sljede\u0107ih 7 dana."),
              aiResState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:10}},__aiErrMsg()),
              e("button",{onClick:runAiResults,disabled:aiResState==="loading",
                style:{background:IS_PRO?"#fff":"rgba(255,255,255,.16)",color:IS_PRO?"#0b1b3a":"#fff",
                  border:IS_PRO?"none":"1px solid rgba(255,255,255,.3)",fontFamily:"var(--fb)",fontSize:13.5,
                  fontWeight:700,padding:"11px 22px",borderRadius:10,cursor:"pointer",
                  boxShadow:IS_PRO?"0 6px 18px -6px rgba(0,0,0,.4)":"none"}},
                aiResState==="loading"?"\u23f3 Analiziram...":IS_PRO?"\u2728 Generiraj analizu":planCta()),
              !IS_PRO&&aiResState!=="done"&&e("div",{style:{position:"relative",marginTop:14,borderTop:"1px solid rgba(255,255,255,.12)",paddingTop:14}},
                e("div",{"aria-hidden":"true",style:{filter:"blur(3.5px)",opacity:.6,pointerEvents:"none",userSelect:"none"}},
                  e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:7}},"Plan za 7 dana"),
                  e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}},
                    "Geometrija ti je najslabija (47%) \u2014 ponovi sli\u010dnost trokuta i povr\u0161ine. Dan 1: 8 zadataka iz pitagorinog pou\u010dka. Dan 2\u20133: trigonometrija pravokutnog trokuta\u2026")),
                e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}},
                  e("span",{style:{fontSize:11,fontWeight:700,color:"#fff",background:"rgba(10,23,48,.55)",border:"1px solid rgba(255,255,255,.2)",borderRadius:99,padding:"4px 12px",backdropFilter:"blur(2px)"}},"\uD83D\uDD12 Tvoj personalizirani plan \u2014 uz Pro"))))
      ),
      pct>=70
        ?e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}})
        :e("details",{style:{marginBottom:20}},
            e("summary",{style:{cursor:"pointer",fontSize:12.5,fontWeight:700,color:"var(--muted)",
              padding:"11px 14px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,
              listStyle:"none",userSelect:"none",textAlign:"center"}},"📤 Podijeli rezultat"),
            e("div",{style:{marginTop:10}},
              e(ShareCard,{exam,pct,g,gc,cor,total:autoQ.length,userData:userData||{xp:0,streak:0}}))
          ),
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled po temama"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),
      (()=>{
        // Izgradi statistiku po temama
        const topicStats={};
        [...autoQ,...gradedQ].forEach(q=>{
          const _ok=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]===true:chk(q,answers[q.id])===true;
          const t=q.topic||"ostalo";
          if(!topicStats[t]) topicStats[t]={correct:0,total:0,points:0,maxPoints:0};
          topicStats[t].total++;
          topicStats[t].maxPoints+=q.points||1;
          if(_ok){
            topicStats[t].correct++;
            topicStats[t].points+=q.points||1;
          }
        });
        const sorted=Object.entries(topicStats)
          .map(([k,v])=>({k,label:TOPIC_LABELS[k]||k,...v,pct:Math.round(v.correct/v.total*100)}))
          .sort((a,b)=>a.pct-b.pct); // najslabije gore
        return e("div",{style:{marginBottom:24}},
          sorted.map(({k,label,correct,total,pct,points,maxPoints})=>{
            const col=pct>=80?"var(--green)":pct>=50?"var(--gold)":"var(--red)";
            return e("div",{key:k,style:{
              display:"flex",alignItems:"center",gap:10,
              padding:"8px 0",borderBottom:"1px solid var(--bdr)",flexWrap:"wrap"
            }},
              e("div",{style:{width:140,fontSize:12,color:"var(--text)",flexShrink:0}},label),
              e("div",{style:{flex:1,height:8,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{width:pct+"%",height:"100%",background:col,borderRadius:99,transition:"width .4s"}})
              ),
              e("div",{style:{width:44,textAlign:"right",fontSize:12,fontWeight:700,color:col,flexShrink:0}},pct+"%"),
              e("div",{style:{width:48,textAlign:"right",fontSize:11,color:"var(--muted)",flexShrink:0}},correct+"/"+total),
              onPracticeSimilar&&pct<100&&e("button",{
                onClick:()=>onPracticeSimilar(k,label),
                style:{fontSize:11,padding:"3px 9px",borderRadius:6,border:"1px solid var(--bdr)",
                  background:"var(--s2)",color:"var(--muted)",cursor:"pointer",flexShrink:0,
                  whiteSpace:"nowrap"},
                title:"Vježbaj sve zadatke na temu: "+label
              },"🔁 Ponovi")
            );
          })
        );
      })(),
      (function(){var ts={};[...autoQ,...gradedQ].forEach(function(qq){var ok=(qq.type==="proof"||qq.type==="sa")?selfGrade[qq.id]===true:chk(qq,answers[qq.id])===true;var lab=TOPIC_LABELS[qq.topic]||qq.topic||"ostalo";if(!ts[lab])ts[lab]={c:0,n:0,k:qq.topic};ts[lab].n++;if(ok)ts[lab].c++;});var rows=Object.keys(ts).map(function(lab){return{k:ts[lab].k,label:lab,pct:Math.round(ts[lab].c/ts[lab].n*100),n:ts[lab].n};});return e(WeakSpotTips,{rows:rows,onDrill:onPracticeSimilar});})(),
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
        color:"var(--muted)",marginBottom:14,marginTop:8,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Pregled zadataka"),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),
        (function(){var ids=QSX.filter(function(qq){return _revShow.has(qq.id);}).map(function(qq){return qq.id;});var anyOpen=ids.some(function(id){return !revCol[id];});return e("button",{onClick:function(){var nm={};if(anyOpen){ids.forEach(function(id){nm[id]=true;});}setRevCol(nm);},style:{fontSize:10.5,fontWeight:700,padding:"4px 11px",borderRadius:99,border:"1px solid var(--bdr2)",background:"var(--s1)",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)",textTransform:"none",whiteSpace:"nowrap"}},anyOpen?"⊟ Sažmi sve":"⊞ Proširi sve");})()
      ),
      (function(){
        var buckets={2:{c:0,n:0},1:{c:0,n:0},0:{c:0,n:0}};
        var rated=0;
        autoQ.forEach(function(q){ if(q.type!=="mc") return; var cv=conf[q.id]; if(cv===undefined||cv===null) return; var b=buckets[cv]; if(!b) return; b.n++; if(chk(q,answers[q.id])===true) b.c++; rated++; });
        if(rated<3) return null;
        var rows=[[2,"\uD83D\uDE0E Siguran","var(--green)"],[1,"\uD83E\uDD14 Nisam siguran","var(--gold)"],[0,"\uD83D\uDE2C Poga\u0111am","var(--red)"]];
        var sure=buckets[2], guess=buckets[0];
        var surePct=sure.n?Math.round(sure.c/sure.n*100):null;
        var guessPct=guess.n?Math.round(guess.c/guess.n*100):null;
        var sureWrong=sure.n-sure.c;
        var insight;
        if(surePct!=null && surePct>=85) insight="Kad si siguran/na, gotovo uvijek si u pravu \u2014 vjeruj prvom instinktu i ne gubi vrijeme na predomi\u0161ljanje.";
        else if(surePct!=null && sureWrong>=2 && surePct<70) insight="Oprez: kod \u201eSiguran\u201c grije\u0161i\u0161 \u010de\u0161\u0107e nego \u0161to misli\u0161 ("+sureWrong+"\u00d7). Prije nego potvrdi\u0161 \u201esiguran\u201c odgovor, brzo provjeri korak.";
        else if(guessPct!=null && guessPct>=60 && guess.n>=2) insight="Tvoja \u201enaga\u0111anja\u201c su bolja nego \u0161to misli\u0161 ("+guessPct+"% to\u010dno) \u2014 ima\u0161 dobar instinkt, ne precrtavaj opcije prebrzo.";
        else if(surePct!=null && guessPct!=null && (surePct-guessPct)>=30) insight="Dobra kalibracija \u2014 kad si siguran/na to\u010dniji/a si nego kad naga\u0111a\u0161. Vjeruj toj razlici na maturi.";
        else insight="Prati ovu podjelu kroz ispite \u2014 cilj je da \u201eSiguran\u201c bude \u0161to bli\u017ee 100%, a da rje\u0111e naga\u0111a\u0161.";
        return e("div",{style:{marginBottom:14,padding:"13px 15px",borderRadius:12,background:"var(--s2)",border:"1px solid var(--bdr)"}},
          e("div",{style:{fontSize:12.5,fontWeight:800,color:"var(--text)",marginBottom:3,display:"flex",alignItems:"center",gap:7}},"\uD83E\uDDED Kalibracija \u2014 koliko vjeruje\u0161 sebi"),
          e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:11}},"Tvoja procjena sigurnosti naspram stvarne to\u010dnosti"),
          rows.map(function(r){var b=buckets[r[0]];if(!b.n)return null;var pct=Math.round(b.c/b.n*100);return e("div",{key:r[0],style:{display:"flex",alignItems:"center",gap:10,padding:"5px 0"}},
            e("div",{style:{width:128,fontSize:12.5,color:"var(--text)",flexShrink:0}},r[1]),
            e("div",{style:{flex:1,height:8,background:"var(--s1)",borderRadius:99,overflow:"hidden"}},e("div",{style:{width:pct+"%",height:"100%",background:r[2],borderRadius:99,transition:"width .4s"}})),
            e("div",{style:{width:84,textAlign:"right",fontSize:12,fontWeight:700,color:r[2],flexShrink:0}},pct+"% ("+b.c+"/"+b.n+")")
          );}),
          e("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid var(--bdr)",fontSize:12.5,lineHeight:1.55,color:"var(--text)"}},insight)
        );
      })(),
      overconfQ.length>0&&(()=>{
        var tc={};overconfQ.forEach(function(q){if(!q.topic)return;var l=(typeof TOPIC_LABELS!=="undefined"&&TOPIC_LABELS[q.topic])||q.topic;tc[l]=(tc[l]||0)+1;});
        var top=Object.entries(tc).sort((a,b)=>b[1]-a[1])[0];
        var topPart=(top&&top[1]>=2)?(" Najvi\u0161e u temi \u201e"+top[0]+"\u201c ("+top[1]+"\u00d7) \u2014 tu se precjenjuje\u0161."):"";
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
        background:"var(--red-d)",border:"1px solid rgba(248,113,113,.3)",borderLeft:"3px solid var(--red)",
        borderRadius:10,color:"var(--text)"}},
        "\u26a0\ufe0f Kod "+overconfQ.length+" zadatka si bio/la siguran/na a pogrije\u0161io/la \u2014 to su prvi kandidati za ponavljanje."+topPart);})(),
      (()=>{const cnt={};Object.values(errorTags||{}).forEach(arr=>(arr||[]).forEach(t=>cnt[t]=(cnt[t]||0)+1));
        const lbl={};(typeof ERROR_TAGS!=="undefined"?ERROR_TAGS:[]).forEach(t=>lbl[t.id]=t.label);
        const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0];
        if(!top||top[1]<2)return null;
        return e("div",{style:{fontSize:12.5,lineHeight:1.55,padding:"10px 13px",marginBottom:12,
          background:"var(--gold-d)",border:"1px solid var(--gold-b)",borderLeft:"3px solid var(--gold)",
          borderRadius:10,color:"var(--text)"}},
          "\uD83D\uDD01 Uzorak gre\u0161ke: \u201e"+(lbl[top[0]]||top[0])+"\u201c \u00d7"+top[1]+" \u2014 isti tip pogre\u0161ke se ponavlja. Njega prvo razbij.");})(),
      e("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14}},
        revTab("all","Svi",QSX.length,null),
        (wrongAutoQ.length+gradedFalse.length)>0&&revTab("wrong","✗ Netočni",wrongAutoQ.length+gradedFalse.length,"var(--red)"),
        flaggedQ.length>0&&revTab("flag","⚑ Označeni",flaggedQ.length,"var(--gold)"),
        selfQ.length>0&&revTab("manual","✏️ Opisni",selfQ.length,"var(--gold)"),
        overconfQ.length>0&&revTab("overconf","😎 Siguran a kriv",overconfQ.length,"var(--red)")
      ),
      e("div",{className:"revlist"},QSX.map((q,i)=>{
        if(!_revShow.has(q.id)) return null;
        const isM=q.type==="proof"||q.type==="sa"||q.type==="pa";
        const isColl=!!revCol[q.id];
        const a=answers[q.id];
        const ok=isM?null:chk(q,a);
        const sg=(q.type==="proof"||q.type==="sa")?selfGrade[q.id]:undefined;
        const cls=isM?(sg===true?"rok":sg===false?"rbad":"rman"):ok===true?"rok":"rbad";
        const col=isM?(sg===true?"var(--green)":sg===false?"var(--red)":"var(--gold)"):ok===true?"var(--green)":"var(--red)";
        let ad=null,adOk=null;
        if(q.type==="mc"&&a) ad=["Tvoj odgovor: "+a+"  -  ",renderOptText(q.opts[LL.indexOf(a)]||"")];
        if(q.type==="mc"&&ok===false) adOk=["Točno: "+(q.sol?.cl||"")+") ",renderOptText(q.opts?.[LL.indexOf(q.sol?.cl)]||"")];
        if((q.type==="num"||q.type==="calc")&&a) ad=["Tvoj odgovor: "+a+" (točno: ",renderOptText(String(q.sol?.ans??"")),")"];
        if(isM&&a) ad="Odgovor napisan";
        return e("div",{key:q.id,className:"revitem "+cls},
          e("div",{style:{display:"flex",gap:10,alignItems:"flex-start"}},
            e("span",{style:{color:col,fontWeight:700,fontSize:14,minWidth:18}},isM?(sg===true?"✓":sg===false?"✗":"✏️"):ok?"✓":"✗"),
            e("div",{style:{flex:1}},
              e("div",{onClick:()=>setRevCol(p=>({...p,[q.id]:!p[q.id]})),style:{display:"flex",alignItems:"center",gap:8,marginBottom:isColl?0:3,flexWrap:"wrap",cursor:"pointer",userSelect:"none"}},
                e("span",{style:{order:99,marginLeft:"auto",color:"var(--muted)",fontSize:13,fontWeight:800}},isColl?"▾":"▴"),
                e("span",{style:{fontSize:11,color:"var(--muted)"}},(i+1)+". "+TLBL[q.type]),
                e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
                e("span",{style:{fontSize:11,color:"var(--gold)"}},q.points>1?q.points+" boda":""),
                qTimes[q.id]&&e("span",{className:"time-badge "+(qTimes[q.id]>90?"slow":qTimes[q.id]<15?"fast":"")},
                  "⏱ "+qTimes[q.id]+"s"),
                flag[q.id]&&e("span",{style:{fontSize:11,fontWeight:800,color:"var(--red)"}},"⚑ označeno")
              ),
              !isColl&&e("div",null,e("div",{style:{fontSize:13,lineHeight:1.55,marginBottom:5}},renderQText(q.q)),
              (()=>{const ik=__imgKey(q._examKey||exam.key,q);
                const fn=q.img?__MAT.Q_IMAGES[ik]:null;
                return fn&&e("div",{style:{margin:"4px 0 8px",padding:"10px",background:"var(--s2)",
                  border:"1px solid var(--bdr)",borderRadius:10,display:"inline-block",maxWidth:"100%"}},fn());})(),
              ad&&e("div",{style:{fontSize:12,color:"var(--muted)"}},ad),
              adOk&&e("div",{style:{fontSize:12,color:"var(--green)",fontWeight:600,marginTop:2}},adOk),
              e(AnswerHelper,{q,autoExpand:false}),
              (q.type==="proof"||q.type==="sa")&&e(Fragment,null,e(MaturaRubric,{q}),e("div",{style:{marginTop:9,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
                e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Usporedi s rješenjem:"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:true})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===true?"var(--green)":"var(--bdr)"),
                    background:sg===true?"var(--green)":"var(--s1)",color:sg===true?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✓ Riješio/la sam"),
                e("button",{onClick:()=>setSelfGrade(p=>({...p,[q.id]:false})),
                  style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",
                    border:"1px solid "+(sg===false?"var(--red)":"var(--bdr)"),
                    background:sg===false?"var(--red)":"var(--s1)",color:sg===false?"#fff":"var(--muted)",transition:"all .15s"}},
                  "✗ Nisam"))))
            )
          )
        );
      })),
      e("div",{style:{marginTop:28,display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",
        padding:"20px 0",borderTop:"1px solid var(--bdr)"}},
        e("button",{className:"btn btn-g",onClick:onExit},"← Natrag"),
        onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna"),
        wrongAutoQ.length>0&&onPracticeErrors&&e("button",{
          className:"btn btn-red",onClick:()=>onPracticeErrors(wrongAutoQ,exam),
          style:{background:"linear-gradient(135deg,var(--red-d),rgba(196,48,48,.15))",
            border:"1px solid rgba(196,48,48,.35)",color:"var(--red)",fontWeight:700}
        },"🔁 Vježbaj greške ("+wrongAutoQ.length+")")
      ),
      (()=>{
        var items=[];
        [...wrongAutoQ,...gradedFalse].forEach(function(q){
          var mw=(q.why||[]).find(function(w){return typeof w==="string"&&/greška|propust/i.test(w);});
          var txt=mw?String(mw).replace(/^(Tipičan propust:|Tipična greška:|Česta greška:|Greška:)\s*/i,"").trim():"";
          if(!txt){var d=(q.steps||[]).find(function(st){return st&&st.note==="diagnostika";});if(d)txt=String(d.txt).replace(/^Analiza distractora:\s*/i,"").replace(/Provjera[\s\S]*$/i,"").replace(/<br>[\s\S]*$/,"").trim();}
          if(txt&&txt.length<240)items.push({topic:TOPIC_LABELS[q.topic]||q.topic,txt:txt});
        });
        if(items.length===0) return null;
        var byTopic={};items.forEach(function(it){(byTopic[it.topic]=byTopic[it.topic]||[]).push(it.txt);});
        return e("div",{style:{marginTop:32}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"📝 Tvoj podsjetnik — na što paziti"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
            Object.entries(byTopic).map(function(en,ti){var tp=en[0],arr=en[1];return e("div",{key:ti,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--gold)",borderRadius:"var(--r)",padding:"12px 14px"}},
              e("div",{style:{fontWeight:800,fontSize:13,color:"var(--gold)",marginBottom:7}},tp),
              e("div",{style:{display:"flex",flexDirection:"column",gap:7}},
                arr.slice(0,3).map(function(t,i){return e("div",{key:i,style:{fontSize:12.5,color:"var(--text)",lineHeight:1.5,display:"flex",gap:8}},
                  e("span",{style:{color:"var(--gold)",flexShrink:0}},"•"),
                  e("span",null,renderOptText(t)));})));})));
      })(),
      e("div",{style:{marginTop:32}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Sljedeći koraci"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{className:"next-steps"},
          e("div",{className:"next-step-card gold",onClick:onExit},
            e("span",{className:"nsc-ico"},"📝"),
            e("div",{className:"nsc-title",style:{color:"var(--gold)"}},"Drugi ispit"),
            e("div",{className:"nsc-desc"},"Odaberi drugi rok ili godinu i nastavi vježbanje.")),
          e("div",{className:"next-step-card blue",onClick:()=>onFilter?onFilter():onExit()},
            e("span",{className:"nsc-ico"},"🎯"),
            e("div",{className:"nsc-title",style:{color:"var(--blue)"}},"Vježbaj po temi"),
            e("div",{className:"nsc-desc"},"Fokusiraj se na teme gdje si bio/la najslabiji/a.")),
          e("div",{className:"next-step-card green",onClick:()=>onStats&&onStats(),style:{cursor:"pointer"}},
            e("span",{className:"nsc-ico"},"📊"),
            e("div",{className:"nsc-title",style:{color:"var(--green)"}},"Statistika"),
            e("div",{className:"nsc-desc"},"Prati napredak, trend i predviđenu ocjenu.")),
          e("div",{className:"next-step-card",style:{cursor:"pointer"},
            onClick:()=>{try{(window.parent||window).postMessage({type:"DISCERE_NAVIGATE",to:"kalkulator",pct,razina:exam.razina||null},"*");}catch(e2){}}},
            e("span",{className:"nsc-ico"},"\uD83C\uDF93"),
            e("div",{className:"nsc-title",style:{color:"var(--teal)"}},"Bodovi za faks"),
            e("div",{className:"nsc-desc"},"Vidi koliko ti ovakav rezultat nosi na upisima \u2014 Kalkulator bodova."))
        )
      )
    );
  }

  // === AKTIVNI ISPIT ===
  const q=QSX[cur];
  const isRev=!!rev[q?.id];
  const a=answers[q?.id];
  const correct=q&&!practice?null:q?chk(q,a):null;
  const pct=Math.round(cur/QSX.length*100);
  const timerCls=timerDur?timer.s<300?"danger":timer.s<600?"warn":"":"";
  const _ghost=(()=>{if(!timerDur)return null;
    const hs=((userData&&userData.history)||[]).filter(h=>h.examKey===exam.key&&h.qTimes&&Object.keys(h.qTimes).length>3);
    return hs.length?hs[hs.length-1]:null;})();
  const bkKey=q?exam.key+"__"+String(q.id):null;
  const isBookmarked=!!(bkKey&&bookmarks[bkKey]);"";
  const _checkedN=practice?QSX.filter(qq=>rev[qq.id]).length:0;
  const _correctN=practice?QSX.filter(qq=>rev[qq.id]&&chk(qq,answers[qq.id])===true).length:0;
  const _accRatio=_checkedN>0?_correctN/_checkedN:0;

  // Sektori  -  dinamički na temelju tipa pitanja
  const mcCount = QSX.filter(q=>q.type==="mc").length;
  const sections=[
    {label:"DIO 1  -  Višestruki izbor",from:0,to:mcCount-1},
    {label:"DIO 2  -  Zadaci s izračunom",from:mcCount,to:QSX.length-1}
  ];
  const currentSection=cur<mcCount?0:1;

  return e("div",{className:(zen?"zen":"")+(readMode?" read-mode":""),style:{minHeight:"100vh"}},
    showCalc&&e(Calculator,{onClose:()=>setShowCalc(false),warnNoCalc:exam.razina==="A"&&cur<mcCount}),
    solveToast&&e("div",{className:"solve-toast"},solveToast),
    scrolled&&!done&&e("div",{className:"sticky-mini"},
      e("span",{className:"sm-q"},"Z "+(cur+1)+"/"+QSX.length),
      e("div",{className:"sm-prog"},e("div",{className:"sm-fill",style:{width:Math.round((cur+1)/QSX.length*100)+"%"}})),
      timerDur&&e("span",{className:"sm-timer "+timerCls,style:{color:timerCls==="danger"?"var(--red)":timerCls==="warn"?"var(--gold)":"var(--muted)"}},timer.d)),
    saved&&!done&&e("div",{className:"save-pulse"},"\u2713 spremljeno"),
    example&&e("div",{className:"ex-overlay",onClick:()=>setExample(null)},
      e("div",{className:"ex-card",onClick:ev=>ev.stopPropagation()},
        e("div",{className:"ex-head"},
          e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"var(--blue)"}},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer \u00b7 "+(TOPIC_LABELS[example.topic]||example.topic)),
          e("button",{onClick:()=>setExample(null),className:"ex-x"},"\u2715")),
        e("div",{className:"ex-q"},renderQText(example.q)),
        example.opts&&e("div",{style:{margin:"10px 0",fontSize:13,color:"var(--muted)"}},example.opts.map((o,oi)=>e("div",{key:oi,style:{padding:"3px 0"}},"ABCD"[oi]+") ",renderOptText(o)))),
        e("div",{className:"ex-steps-label"},"Postupak:"),
        e("div",{className:"ex-steps"},(example.steps||[]).filter(st=>st&&st.note!=="diagnostika").map((st,i)=>{
          const txt=typeof st==="string"?st:(st&&st.txt)||"";
          return e("div",{key:i,className:"ex-step"},e("span",{className:"ex-step-n"},i+1),e("span",null,renderOptText(txt)));
        })),
        e("div",{style:{marginTop:14,fontSize:11.5,color:"var(--muted)",fontStyle:"italic"}},"Ovo je drugi zadatak iste teme \u2014 iskoristi postupak kao predlo\u017eak, pa rije\u0161i svoj.")
      )),
    paused&&e("div",{className:"pause-overlay",onClick:()=>setPaused(false)},
      e("div",{className:"pause-card",onClick:ev=>ev.stopPropagation()},
        e("div",{style:{fontSize:46,marginBottom:8}},"\u23f8\ufe0f"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:6}},"Pauzirano"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18}},timerDur?"Vrijeme je zaustavljeno. Predahni i nastavi kad bude\u0161 spreman/na.":"Predahni i nastavi kad bude\u0161 spreman/na."),
        e("button",{className:"btn btn-blue",style:{padding:"11px 26px",fontSize:15},onClick:()=>setPaused(false)},"\u25b6 Nastavi"))),
    zoomFig&&e(FigZoom,{fig:zoomFig,onClose:()=>setZoomFig(null)}),
    showReview&&(()=>{
      const unans=QSX.filter(qq=>!hasAns(answers[qq.id]));
      const flg=QSX.filter(qq=>flag[qq.id]);
      const idxOf=qq=>QSX.indexOf(qq);
      return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:ev=>{if(ev.target===ev.currentTarget)setShowReview(false);}},
        e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:420,width:"100%",maxHeight:"82vh",overflowY:"auto",boxShadow:"var(--shadow-lg)"}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:21,marginBottom:6}},"Pregled prije predaje"),
          e("div",{style:{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}},
            e("span",{className:"pill pill-green"},"\u2713 "+(QSX.length-unans.length)+" rije\u0161eno"),
            unans.length>0&&e("span",{className:"pill pill-red"},"\u25cb "+unans.length+" neodgovoreno"),
            flg.length>0&&e("span",{className:"pill pill-gold"},"\u2691 "+flg.length+" ozna\u010deno")),
          (()=>{const ch=QSX.filter(qq=>rev[qq.id]).length;if(ch<1)return null;const co=QSX.filter(qq=>rev[qq.id]&&chk(qq,answers[qq.id])===true).length;const g=grade(Math.round(co/ch*100));return e("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,marginBottom:14,background:g>=4?"var(--green-d)":g>=3?"var(--gold-d)":"var(--red-d)",border:"1px solid "+(g>=4?"rgba(61,214,140,.35)":g>=3?"var(--gold-b)":"rgba(248,113,113,.35)")}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:34,lineHeight:1,color:g>=4?"var(--green)":g>=3?"var(--gold)":"var(--red)"}},g),
            e("div",null,e("div",{style:{fontSize:12.5,fontWeight:700,color:"var(--text)"}},"Projicirana ocjena"),e("div",{style:{fontSize:11,color:"var(--muted)"}},"na temelju "+co+"/"+ch+" to\u010dnih dosad")));})(),
          unans.length>0&&e("div",{style:{marginBottom:14}},
            e("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:".05em"}},"Neodgovoreni \u2014 klikni za skok"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},unans.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));setShowReview(false);},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.35)",color:"var(--red)"}},idxOf(qq)+1)))),
          flg.length>0&&e("div",{style:{marginBottom:16}},
            e("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:".05em"}},"Ozna\u010deni za pregled"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},flg.map((qq,i)=>e("button",{key:i,onClick:()=>{goTo(idxOf(qq));setShowReview(false);},
              style:{fontSize:12.5,fontWeight:800,minWidth:36,padding:"6px 10px",borderRadius:8,cursor:"pointer",fontFamily:"var(--fb)",background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)"}},idxOf(qq)+1)))),
          unans.length>0&&e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:14,lineHeight:1.5}},"Neodgovoreni zadaci nose 0 bodova. Mo\u017ee\u0161 se vratiti i rije\u0161iti ih prije predaje."),
          e("div",{style:{display:"flex",gap:8}},
            e("button",{onClick:()=>setShowReview(false),className:"btn btn-g",style:{flex:1,padding:"11px"}},"\u2190 Vrati se"),
            e("button",{onClick:()=>{setShowReview(false);finishExam();},className:"btn btn-gold",style:{flex:1,padding:"11px"}},"Predaj ispit \u2713")))
      );
    })(),
    showNav&&e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.6)",backdropFilter:"blur(3px)",zIndex:290,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:ev=>{if(ev.target===ev.currentTarget)setShowNav(false);}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:"1px solid var(--bdr)",padding:"18px 18px calc(18px + env(safe-area-inset-bottom))",width:"100%",maxWidth:560,maxHeight:"70vh",overflowY:"auto",boxShadow:"0 -10px 40px -10px rgba(0,0,0,.4)"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:18}},"Navigator"),
          e("button",{onClick:()=>setShowNav(false),style:{background:"var(--s2)",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--muted)",fontFamily:"var(--fb)"}},"\u2715")),
        navFilterControls(true),
        sections.map((sec,si)=>{
          const range=QSX.slice(sec.from,sec.to+1);
          return e("div",{key:si,style:{marginBottom:12}},
            e("div",{className:"section-divider"},sec.label.split(" - ")[0].trim()),
            e("div",{className:"qgrid"},range.map((qq,ri)=>{
              const qi=sec.from+ri;
              if(hideSolved&&hasAns(answers[qq.id])&&qi!==cur)return null;
              const isAns=hasAns(answers[qq.id]);const isF=flag[qq.id];const _chk2=done||rev[qq.id];const ok2=_chk2?chk(qq,answers[qq.id]):null;
              let cls="qgrid-btn";if(ok2===true)cls+=" ok";else if(ok2===false)cls+=" bad";else if(isAns)cls+=" ans";if(qi===cur)cls+=" cur";if(isF)cls+=" flag";if(navTopicFilter&&(TOPIC_LABELS[qq.topic]||qq.topic)!==navTopicFilter)cls+=" nf-dim";
              return e("button",{key:qi,className:cls,onClick:()=>{goTo(qi);setShowNav(false);}},qi+1,(!examMode&&ok2===null&&!isAns&&qi!==cur&&!isF)&&e("span",{key:"d",className:"qd-dot qd-"+(qq.points>=3?"tesko":qq.points===2?"srednje":"lako")}));
            })));
        }),
        e("div",{style:{marginTop:8,display:"flex",gap:14,flexWrap:"wrap",fontSize:10.5,color:"var(--muted)"}},
          e("span",null,"\u25a0 rije\u0161eno"),e("span",null,"\u2691 ozna\u010deno"),e("span",null,"\u25cb prazno"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--green)"}}),"lako"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--gold)"}}),"srednje"),e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},e("span",{style:{width:7,height:7,borderRadius:"50%",background:"var(--red)"}}),"teško"))
      )),
    showKbd&&e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:280,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>setShowKbd(false)},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"24px 26px",maxWidth:380,width:"100%",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:19,marginBottom:14}},"\u2328\uFE0F Pre\u010daci na tipkovnici"),
        [["A \u2013 D","Odaberi odgovor"],["Enter","Provjeri / sljede\u0107i"],["\u2190 / \u2192","Prethodni / sljede\u0107i zadatak"],["F","Ozna\u010di zadatak \u2691"],["Shift + F","Spremi zadatak \uD83D\uDD16"],["?","Ovaj popis"]].map(([k,d],i)=>
          e("div",{key:i,style:{display:"flex",alignItems:"center",gap:12,padding:"7px 0",borderBottom:i<5?"1px solid var(--bdr)":"none"}},
            e("kbd",{style:{fontFamily:"var(--fb)",fontSize:11.5,fontWeight:800,background:"var(--s2)",border:"1px solid var(--bdr2)",borderBottom:"2px solid var(--bdr2)",borderRadius:6,padding:"3px 9px",minWidth:64,textAlign:"center",color:"var(--text)"}},k),
            e("span",{style:{fontSize:12.5,color:"var(--muted)"}},d))),
        e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:12,textAlign:"center"}},"Pritisni ? ili klikni izvan za zatvaranje"))),
    // FORMULA MODAL
    scratchOpen&&e(ScratchPad,{onClose:()=>{setScratchOpen(false);setSpAsk(null);},wsKey:_cq&&_cq.id,store:workspaceRef.current,figure:mcStem,qText:_cq&&_cq.q,qOpts:_cq&&_cq.opts,qSteps:_cq&&_cq.steps,qSol:_cq&&_cq.sol,qType:_cq&&_cq.type,answered:!!(_cq&&(hasAns(answers[_cq.id])||done)),seedAsk:spAsk,onSeedUsed:()=>setSpAsk(null),examMode:examMode}),
    showFormulas&&e(FormulaModal,{onClose:()=>setShowFormulas(false),razina:exam&&exam.razina}),

    // NAV
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:()=>setModal(true)},"\u2715",e("span",{className:"nav-btn-txt"}," Izlaz")),
      e("span",{className:"nav-title-hide",style:{fontFamily:"var(--fh)",fontSize:15,marginLeft:4,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,flex:"1 1 auto"}},exam.season==="session"?exam.label:exam.year+"  -  "+exam.label),
      e("span",{style:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99,
    background:exam.razina==="B"?"var(--teal-d)":"var(--blue-d)",
    border:"1px solid "+(exam.razina==="B"?"rgba(45,207,190,.3)":"rgba(74,144,217,.3)"),
    color:exam.razina==="B"?"var(--teal)":"var(--blue)",
    marginLeft:4,whiteSpace:"nowrap"
  }},exam.razina==="B"?e(React.Fragment,null,"B",e("span",{className:"nav-btn-txt"}," \u00b7 osnovna")):e(React.Fragment,null,"A",e("span",{className:"nav-btn-txt"}," \u00b7 vi\u0161a"))),
      e("span",{className:"nsp"}),
      e("button",{
        className:"btn btn-g",title:"Formule",
        style:{fontSize:12,padding:"5px 9px"},
        onClick:()=>setShowFormulas(true)
      },e("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round"},e("rect",{x:5,y:3,width:14,height:18,rx:2}),e("path",{d:"M9 8h6M9 12h4M9 16h5"})),e("span",{className:"nav-btn-txt"}," Formule")),
      e("button",{className:"btn btn-g",title:"Kalkulator",style:{fontSize:12,padding:"5px 9px",background:showCalc?"var(--blue-d)":undefined,borderColor:showCalc?"var(--blue-b)":undefined,color:showCalc?"var(--blue)":undefined},
        onClick:()=>setShowCalc(v=>!v)},e("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round"},e("rect",{x:5,y:3,width:14,height:18,rx:2}),e("path",{d:"M8 7h8"}),e("path",{d:"M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"})),e("span",{className:"nav-btn-txt"}," Kalkulator")),
      e("div",{style:{position:"relative",display:"inline-flex"}},
        e("button",{className:"btn btn-g",title:"Više opcija",style:{position:"relative",fontSize:12,padding:"5px 9px"},onClick:()=>setNavMore(v=>!v)},"⋯",
          !zenSeen&&!zen&&e("span",{style:{position:"absolute",top:-4,right:-4,width:8,height:8,borderRadius:99,background:"var(--red)",border:"1.5px solid var(--s1)",boxShadow:"0 0 0 2px rgba(248,113,113,.25)"}})),
        navMore&&e("div",{onClick:()=>setNavMore(false),style:{position:"fixed",inset:0,zIndex:55}}),
        navMore&&e("div",{style:{position:"absolute",top:"112%",left:0,zIndex:56,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",boxShadow:"0 12px 32px -8px rgba(0,0,0,.35)",padding:7,display:"flex",flexDirection:"column",gap:2,minWidth:212}},
          QSX.some(qq=>!hasAns(answers[qq.id]))&&e("button",{key:"blank",onClick:()=>{setNavMore(false);nextBlank();},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"⤵"),"Skoči na neodgovoreni"),
          practice&&!examMode&&e("button",{key:"pause",onClick:()=>{setNavMore(false);setPaused(true);},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"⏸"),"Pauziraj"),
          e("button",{key:"zen",onClick:()=>{setNavMore(false);setZen(z=>!z);if(!zenSeen){try{DS.set("mat_zen_seen","1");}catch(e){}setZenSeen(true);}},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:zen?"var(--blue-d)":"transparent",color:zen?"var(--blue)":"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},"🧘"),zen?"Izađi iz fokus moda":"Fokus mod")
        )),
      e("button",{className:"btn btn-g nav-mobile-only",title:"Navigator zadataka",
        style:{fontSize:12,padding:"5px 9px"},onClick:()=>setShowNav(true)},"\u2630",e("span",{className:"nav-btn-txt"}," "+(cur+1)+"/"+QSX.length)),
      (!examMode&&_bestPct!=null)&&e("span",{className:"record-pill",title:"Tvoj najbolji rezultat na ovom ispitu"},"\uD83C\uDFC6 "+_bestPct+"%"),
      practice&&_checkedN>0&&e("div",{className:"acc-ring",title:"To\u010dnost u vje\u017ebi: "+_correctN+"/"+_checkedN},
        e("svg",{width:30,height:30,viewBox:"0 0 36 36"},
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:"var(--bdr2)",strokeWidth:3.2}),
          e("circle",{cx:18,cy:18,r:15.5,fill:"none",stroke:_accRatio>=0.7?"var(--green)":_accRatio>=0.4?"var(--gold)":"var(--red)",strokeWidth:3.2,strokeDasharray:(_accRatio*97.4).toFixed(1)+" 97.4",strokeLinecap:"round",transform:"rotate(-90 18 18)",style:{transition:"stroke-dasharray .4s"}})),
        e("span",{className:"acc-ring-txt"},_correctN+"/"+_checkedN)),
      practice&&_checkedN>=3&&(()=>{const g=grade(Math.round(_accRatio*100));return e("span",{className:"proj-grade",title:"Projicirana ocjena na temelju dosad provjerenog",style:{background:g>=4?"var(--green-d)":g>=3?"var(--gold-d)":"var(--red-d)",borderColor:g>=4?"rgba(61,214,140,.4)":g>=3?"var(--gold-b)":"rgba(248,113,113,.4)",color:g>=4?"var(--green)":g>=3?"var(--gold)":"var(--red)"}},"\u2248 ocjena "+g);})(),
      practice&&e("span",{className:"nbadge"},"Vježba"),
      timedPractice&&!examMode&&e("span",{className:"nbadge",style:{background:"var(--gold-d)",borderColor:vc("--gold-b"),color:vc("--gold")}},"Timed"),
      timerDur&&e("span",{className:"timer "+timerCls},timer.d),
      
      timerDur&&!done&&mcCount>0&&mcCount<QSX.length&&!examMode&&(()=>{
        let p1=0,p2=0,el1=0,el2=0;
        QSX.forEach((qq,i)=>{const pts=qq.points||1;const t=qTimes[qq.id]||0;if(i<mcCount){p1+=pts;el1+=t;}else{p2+=pts;el2+=t;}});
        const tot=p1+p2||1;const b1=Math.max(1,Math.round(timerDur*p1/tot/60)),b2=Math.max(1,Math.round(timerDur*p2/tot/60));
        const m1=Math.round(el1/60),m2=Math.round(el2/60);
        const seg=(lbl,m,bud)=>{const over=m>bud;const near=m>bud*0.85;return e("div",{className:"tb-seg"},
          e("span",{className:"tb-lbl"},lbl),e("span",{className:"tb-val",style:{color:over?"var(--red)":near?"var(--gold)":"var(--muted)"}},m+"/"+bud+" min"));};
        return e("div",{className:"time-budget"},e("span",{className:"tb-title"},"\u23f1\ufe0f Bud\u017eet vremena"),seg("DIO 1",m1,b1),seg("DIO 2",m2,b2));
      })()
    ),
    (()=>{
      if(!timerDur||done||examMode) return null;
      const answeredN=QSX.filter(qq=>hasAns(answers[qq.id])).length;
      if(answeredN<3) return null;
      const elapsed=timerDur-timer.s;
      const avg=elapsed/answeredN;
      const remaining=QSX.length-answeredN;
      const delta=Math.round((timer.s-remaining*avg)/60);
      if(remaining===0) return null;
      const ahead=delta>=0;
      const lots=delta>Math.round(timerDur/120);
      let ghostPill=null;
      if(_ghost&&_ghost.qTimes){
        let priorSum=0,cnt=0;
        QSX.forEach(qq=>{if(hasAns(answers[qq.id])&&_ghost.qTimes[qq.id]!=null){priorSum+=_ghost.qTimes[qq.id];cnt++;}});
        if(cnt>=2){
          const gd=Math.round(priorSum-elapsed);
          const gAhead=gd>=0;
          ghostPill=e("span",{className:"pill"+(gAhead?" pill-blue":"")},
            gAhead?"\uD83D\uDC7B +"+gd+"s ispred pro\u0161log sebe":"\uD83D\uDC7B "+Math.abs(gd)+"s iza pro\u0161log sebe");
        }
      }
      return e("div",{style:{maxWidth:1100,margin:"0 auto",padding:"6px 20px 0",display:"flex",justifyContent:"flex-end",gap:8,flexWrap:"wrap"}},
        ghostPill,
        e("span",{className:"pill "+(ahead?"pill-green":"pill-red")},
          ahead
            ?(lots?"⏱ Odličan tempo — imat ćeš vremena za provjeru"
                  :"⏱ Na ovom tempu završavaš ~"+Math.max(1,delta)+" min ranije")
            :"⏱ Na ovom tempu kasniš ~"+Math.abs(delta)+" min — ubrzaj"));
    })(),

    // WARMUP (K8) + INTERAKTIVNI VIZUAL (K7)
    vizOpen&&e(VizModal,{kind:vizOpen,onClose:()=>setVizOpen(null)}),
    warmup&&e("div",{style:{position:"fixed",inset:0,zIndex:260,background:"rgba(10,15,28,.82)",display:"flex",alignItems:"center",justifyContent:"center",padding:18}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"26px 22px 20px",maxWidth:380,width:"100%",maxHeight:"90vh",overflowY:"auto"}},
        e("div",{style:{fontSize:30,textAlign:"center",marginBottom:6}},"🧠"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:21,textAlign:"center",marginBottom:6}},"Zagrij mozak"),
        e("div",{style:{fontSize:13,color:"var(--muted)",textAlign:"center",lineHeight:1.55,marginBottom:18}},"3 brza zagrijavanja da otključaš fokus prije ispita. Klikni za odgovor."),
        [["7 × 8","56"],["15% od 200","30"],["Površina kvadrata stranice 5","25"]].map((w,i)=>e(WarmupItem,{key:i,q:w[0],a:w[1]})),
        e("div",{style:{display:"flex",gap:9,alignItems:"flex-start",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"10px 12px",marginTop:14,fontSize:12,lineHeight:1.5,color:"var(--muted)"}},
          e("span",{style:{fontSize:15,flexShrink:0}},"\u270f\ufe0f"),
          e("span",null,e("strong",{style:{color:"var(--text)"}},"Radni prostor")," \u2014 ispod svakog zadatka i u zaglavlju (\u270f\ufe0f). Skica, znanstveni kalkulator i rje\u0161ava\u010d jednad\u017ebi, sve uz pitanje.")),
        e("button",{onClick:()=>setWarmup(false),style:{width:"100%",marginTop:14,padding:"13px",borderRadius:"var(--r)",border:"none",background:"var(--blue)",color:"#fff",fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"var(--fb)"}},"Spreman/na — kreni! →"),
        e("div",{style:{display:"flex",justifyContent:"center",gap:18,marginTop:12}},
          e("button",{onClick:()=>setWarmup(false),style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Preskoči"),
          e("button",{onClick:()=>{try{localStorage.setItem(__rk("mat_warmup_off"),"1");}catch(e){}setWarmup(false);},style:{background:"none",border:"none",color:"var(--muted)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)",textDecoration:"underline"}},"Ne prikazuj više"))
      )
    ),

    // EXIT MODAL
    modal&&e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",z:200,display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"28px 24px",maxWidth:360,width:"90%",textAlign:"center"}},
        e("div",{style:{fontSize:28,marginBottom:12}},"⏸"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:8}},"Prekid ispita?"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:20}},(exam.season==="session"||exam.season==="random")?"Napredak neće biti spremljen.":"Bez brige — \"Nastavi ispit\" čeka te na početnoj."),
        e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
          e("button",{className:"btn btn-g",onClick:()=>setModal(false)},"Nastavi"),
          e("button",{className:"btn btn-red",onClick:onExit},"← Natrag"),
          onHome&&e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna")
        )
      )
    ),

    // TIMER ALERT
    timerAlert!==null&&e("div",{
      style:{position:"fixed",bottom:20,right:20,zIndex:150,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 18px",fontSize:13,fontWeight:600,color:timerAlert===0?"var(--red)":"var(--gold)",boxShadow:"var(--shadow)"},
      onClick:()=>setTimerAlert(null)
    },timerAlert===0?"⏰ Ispit završen!":`⚠️ Preostalo: ${fmt2(timerAlert)}`),

    // MAIN LAYOUT
    e("div",{className:"exam-layout",style:{background:flashRed?"rgba(196,48,48,.04)":""},onTouchStart:onTouchStart,onTouchEnd:onTouchEnd},
      // LIJEVI STUPAC  -  pitanje
      e("div",null,
        // Progress
        e("div",{className:"prog-bar"},e("div",{className:"prog-fill",style:{width:pct+"%"}})),

        // Sekcija
        e("div",{style:{fontSize:11,fontWeight:700,color:"var(--text)",letterSpacing:".09em",
          textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:10,opacity:.85}},
          e("span",{style:{width:3,height:14,background:exam.razina==="A"?"var(--blue)":"var(--teal)",borderRadius:2,display:"inline-block"}}),
          e("span",null,sections[currentSection]?.label),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),

        // Exam mode banner
        examMode&&e("div",{className:"exam-mode-banner"},
          "⏱ Simulacija ispita · uvjeti kao na maturi · dopušteno: kalkulator + papir · bez povratne informacije do kraja"
        ),

        e("div",{ref:qcardRef,className:"qcard",style:{borderLeft:examMode?"none":"3px solid "+topicColor(q.topic)}},
          !examMode&&e("div",{style:{display:"flex",gap:2,marginBottom:16,height:6,padding:"0 1px"}},QSX.map(function(qq,qi){var ans=hasAns(answers[qq.id]);return e("div",{key:qi,onClick:function(){goTo(qi);},title:examMode?String(qi+1):(qi+1)+". "+(TOPIC_LABELS[qq.topic]||qq.topic),style:{flex:1,minWidth:0,borderRadius:2,cursor:"pointer",background:examMode?"var(--bdr2)":topicColor(qq.topic),opacity:qi===cur?1:(ans?0.85:0.26),boxShadow:qi===cur?"0 0 0 2px var(--text)":"none",transition:"opacity .2s"}});})),
          // Meta
          e("div",{className:"qmeta"},
            e("div",{className:"qmeta-l"},
              e("span",{className:"qnum"},"Zadatak "+(cur+1)+"/"+QSX.length),
              q.points>1&&e("span",{className:"qpts"},q.points+(q.points>=5?" bodova":" boda")),
              (()=>{const dl=(q.points>=3)?["Te\u0161ko","tesko"]:(q.points===2)?["Srednje","srednje"]:["Lako","lako"];
                return examMode?null:e("span",{className:"qdiff qdiff-"+dl[1]},dl[0]);})()
            ),
            e("div",{className:"qmeta-actions"},
              !examMode&&e("button",{className:"qicon"+(flag[q.id]?" on-flag":""),title:(flag[q.id]?"Označeno":"Označi za pregled")+" (F)",onClick:()=>setFlag(p=>({...p,[q.id]:!p[q.id]}))},flag[q.id]?"🚩":"⚑"),
              e("button",{className:"qicon"+(scratchOpen?" on-scratch":"")+((!spSeen)?" sp-pulse":""),title:"Papir za račun — skiciraj i računaj",onClick:()=>setScratchOpen(true)},"✏️"),
              !examMode&&e("div",{style:{position:"relative",display:"inline-flex"}},
                e("button",{className:"qicon"+(toolsOpen?" on-tools":""),title:"Više alata",onClick:()=>setToolsOpen(v=>!v)},"⋯"),
                toolsOpen&&e("div",{onClick:()=>setToolsOpen(false),style:{position:"fixed",inset:0,zIndex:55}}),
                toolsOpen&&e("div",{style:{position:"absolute",top:"112%",right:0,zIndex:56,background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",boxShadow:"0 12px 32px -8px rgba(0,0,0,.35)",padding:7,display:"flex",flexDirection:"column",gap:2,minWidth:210}},
                  [[speaking?"⏹️":"🔊", speaking?"Zaustavi čitanje":"Pročitaj naglas", speakQ],
                   ["👁️", readMode?"Standardni prikaz":"Lakše čitanje", ()=>setReadMode(v=>!v)],
                   ["🖍️", hlMode?"Isključi marker":"Marker — označi ključno", ()=>setHlMode(v=>!v)],
                   ["🔖", isBookmarked?"Ukloni spremljeno":"Spremi zadatak", ()=>toggleBookmark(q.id)]
                  ].map((it,ti)=>e("button",{key:ti,onClick:()=>{it[2]();setToolsOpen(false);},style:{display:"flex",alignItems:"center",gap:11,padding:"9px 10px",borderRadius:9,border:"none",background:"transparent",color:"var(--text)",fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left",width:"100%"}},e("span",{style:{fontSize:15,width:20,textAlign:"center"}},it[0]),it[1])),
                  e("div",{style:{display:"flex",gap:6,alignItems:"center",padding:"7px 10px",borderTop:"1px solid var(--bdr)",marginTop:3}},
                    e("span",{style:{fontSize:12,color:"var(--muted)",marginRight:"auto"}},"Veličina teksta"),
                    e("button",{className:"qicon",title:"Smanji",onClick:()=>setFontScale(v=>Math.max(0.85,+(v-0.1).toFixed(2)))},e("span",{style:{fontSize:11,fontWeight:800}},"A−")),
                    e("button",{className:"qicon",title:"Povećaj",onClick:()=>setFontScale(v=>Math.min(1.6,+(v+0.1).toFixed(2)))},e("span",{style:{fontSize:15,fontWeight:800}},"A+"))
                  )
                )
              )
            )
          ),
          !examMode&&e("div",{className:"qmeta-sub"},(TOPIC_LABELS[q.topic]||q.topic)+" · "+(TYPE_ICON[q.type]||"")+" "+TLBL[q.type]+" · \u23f1\ufe0f \u2248 "+(q.points>=3?"5 min":q.points===2?"3 min":"1\u20132 min")+(function(){var _n=TOPIC_FREQ.exCnt[q.topic]||0,_t=TOPIC_FREQ.totalExams||1,_r=_n/_t;return _n>=3?" · 📊 "+(_r>=0.55?"vrlo česta":_r>=0.3?"česta":"povremena")+" tema":"";})()+(_ghost&&_ghost.qTimes&&_ghost.qTimes[q.id]?"  ·  \uD83D\uDC7B pro\u0161li put: "+_ghost.qTimes[q.id]+"s":"")),
          
          
          flag[q.id]&&e("input",{className:"flag-note",value:notes[q.id]||"",placeholder:"\uD83D\uDCDD Bilje\u0161ka uz ovaj zadatak (npr. provjeri formulu)...",
            onChange:ev=>setNotes(p=>({...p,[q.id]:ev.target.value}))}),

          // Kontekst zadatka  -  zajednički uvod za pod-pitanja (22a/b, 23a/b, itd.)
          q.context&&e("div",{style:{
            position:"relative",
            background:"linear-gradient(135deg, rgba(74,144,217,.06) 0%, rgba(74,144,217,.02) 100%)",
            borderLeft:"3px solid var(--blue)",
            borderRadius:"6px",
            padding:"12px 16px 14px 18px",
            marginBottom:16,
            boxShadow:"0 1px 0 rgba(74,144,217,.04)"
          }},
            e("div",{style:{
              fontSize:10,fontWeight:700,color:"var(--blue)",
              letterSpacing:".12em",textTransform:"uppercase",
              marginBottom:6,opacity:.85,
              display:"flex",alignItems:"center",gap:6
            }},
              e("svg",{width:11,height:11,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},
                e("circle",{cx:12,cy:12,r:10}),
                e("line",{x1:12,y1:8,x2:12,y2:12}),
                e("line",{x1:12,y1:16,x2:12.01,y2:16})
              ),
              "Kontekst"
            ),
            e("div",{style:{
              fontSize:14,color:"var(--text)",lineHeight:1.55,
              opacity:.92
            }},renderQText(q.context))
          ),

          // Tekst pitanja
          !examMode&&(_weakByTopic[q.topic]||0)>=2&&e("div",{className:"weak-banner"},
            e("span",{style:{fontSize:16}},"\uD83D\uDCAA"),
            e("span",null,"Fokus \u2014 temu ",e("strong",null,TOPIC_LABELS[q.topic]||q.topic)," \u010de\u0161\u0107e grije\u0161i\u0161. Uzmi si vremena i provjeri postupak.")),
          e("div",{className:"qtext"+(hlMode?" hl-mode":""),style:{fontSize:(15*fontScale)+"px"}},hlMode?renderHL(q.q,q.id):renderQText(q.q)),
          hlMode&&e("div",{className:"hl-hint"},"\uD83D\uDD8D\ufe0f Klikni rije\u010di da ozna\u010di\u0161 klju\u010dne podatke"),

          // Per-question timer upozorenje (samo u exam/timedPractice modu)
          timedPractice&&!done&&!isRev&&(()=>{
            if(qElapsed<AVG_Q_TIME) return null;
            const over=qElapsed-AVG_Q_TIME;
            const warn=qElapsed>AVG_Q_TIME*1.5;
            return e("div",{style:{
              display:"flex",alignItems:"center",gap:8,
              padding:"6px 12px",marginBottom:10,borderRadius:"var(--r)",
              background:warn?"rgba(196,48,48,.08)":"rgba(233,180,70,.08)",
              border:"1px solid "+(warn?"rgba(196,48,48,.25)":"rgba(233,180,70,.25)"),
              fontSize:12,color:warn?"var(--red)":"var(--gold)"
            }},
              e("span",null,warn?"⏰":"⚠️"),
              e("span",null,warn
                ? `${over}s iznad prosjeka  -  razmisli o prelasku dalje`
                : `Blizu prosjeka (${AVG_Q_TIME}s/zadatak)  -  ne zapinji`
              )
            );
          })(),

          // Formula blok (višeredne jednadžbe, razlomci...)
          q.formula&&e(FormulaBlock,{lines:q.formula,label:q.formulaLabel||null}),

          // SVG slika (ako postoji za ovo pitanje)
          // Pokušaj s exam-specifičnim ključem, pa s globalnim
          mcStem&&e("div",{className:"fig-zoomable",style:{
              margin:"0 0 16px",padding:"14px",
              background:"var(--s2)",border:"1px solid var(--bdr)",
              borderRadius:"var(--r)",display:"inline-block",maxWidth:"100%"
            },onClick:()=>setZoomFig(mcStem)},mcStem,e("span",{className:"fig-zoom-badge"},"\uD83D\uDD0D uve\u0107aj")),

          // ⚠️ PAZI NA  -  prikazuje se PRIJE rješavanja, skriveno u examMode
          // Samo za MC — CalcQuestion već renderira warn za sa/num/calc/proof
          null,
          null,
          e(QToolbar,{glossaryText:examMode?"":[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" "),warn:(q.type==="mc"&&!isRev&&!done&&!examMode)?q.warn:null,vizKind:examMode?null:resolveViz(q),qid:q.id,onViz:setVizOpen}),
          

          // === OPCIJE ZA MC ===
          q.type==="mc"&&e("div",null,
            e("div",{className:"opts"},
              q.opts.map((opt,oi)=>{
                const letter=LL[oi];
                let cls="opt";
                if(a===letter) cls+=" sel";
                if((isRev||(!practice&&done))&&a===letter&&correct===true) cls=" opt ok";
                if((isRev||(!practice&&done))&&a===letter&&correct===false) cls=" opt bad";
                if((isRev||(!practice&&done))&&letter===q.sol.cl) cls=(cls.includes("bad")?" opt bad":" opt ok");
                const isElim=!!(elim[q.id]&&elim[q.id][letter]);
                if(isElim&&!(isRev||done)) cls+=" elim";
                if(fbAnim&&fbAnim.qid===q.id&&a===letter) cls+=fbAnim.ok?" fb-ok":" fb-wrong";
                const locked=isRev||done||(examMode&&practice);
                return e("div",{key:oi,className:cls,onClick:()=>{
                  if(locked) return;
                  if(isElim){setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:false}}));return;}
                  setAnswers(p=>({...p,[q.id]:letter}));
                  if(practice) setShownAnswers(p=>({...p,[q.id]:true}));
                }},
                  e("div",{className:"optl"},letter),
                  e("div",{className:"optt"},
                    renderOptContent(opt)
                  ),
                  !locked&&e("button",{className:"opt-elim",title:isElim?"Vrati opciju":"Precrtaj (isključi)",
                    onClick:ev=>{ev.stopPropagation();setElim(p=>({...p,[q.id]:{...(p[q.id]||{}),[letter]:!isElim}}));}},isElim?"\u21a9":"\u2715")
                );
              })
            ),
            // Radni prostor launcher (otvara pun overlay; pamti rad po pitanju)
            (()=>{ const _ws=workspaceRef.current&&workspaceRef.current[q.id]; const _hw=!!(_ws&&((_ws.strokes&&_ws.strokes.length)||(_ws.calcHist&&_ws.calcHist.length)||(_ws.solveInput&&(""+_ws.solveInput).trim())||(_ws.funcs&&_ws.funcs.length)||_ws.figOn));
              return e("button",{onClick:()=>setScratchOpen(true),style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:_hw?"var(--blue-d)":"var(--s2)",border:"1px solid "+(_hw?"var(--blue-b)":"var(--bdr)"),borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
                e("span",{style:{fontSize:18,flexShrink:0}},"\u270f\ufe0f"),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{fontSize:13,fontWeight:700,color:_hw?"var(--blue-b)":"var(--text)"}}, _hw?"Nastavi svoj rad":"Radni prostor"),
                  e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}}, _hw?"ima\u0161 skicu ili ra\u010dun za ovo pitanje":(examMode?"skica \u00b7 kalkulator":"skica \u00b7 kalkulator \u00b7 asistent"))),
                _hw&&e("span",{style:{width:8,height:8,borderRadius:99,background:"var(--green)",flexShrink:0}}),
                e("span",{style:{color:"var(--muted)",fontSize:16,flexShrink:0}},"\u203a")
              ); })()
          ),

          // === ZADATCI S POSTUPKOM (num / calc / sa / proof) ===
          (q.type==="num"||q.type==="calc"||q.type==="sa"||q.type==="pa"||q.type==="proof")&&
            e(CalcQuestionM,{
              q,
              answer:a,
              onAnswer:onAnswerCb,
              isReviewed:isRev||done,
              isPractice:practice,
              isExamMode:examMode,
              onViz:setVizOpen
            }),

          // AI profesor — direktan ulaz (prefill pitanja + Asistent tab)
          !examMode&&(()=>{ var _qt=[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" ").replace(/\s+/g," ").trim();
            return e("button",{onClick:()=>{setSpAsk(_qt);setScratchOpen(true);},style:{marginTop:12,display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",background:"linear-gradient(135deg,rgba(233,180,70,.16),rgba(233,180,70,.05))",border:"1px solid rgba(233,180,70,.5)",borderRadius:"var(--r)",padding:"10px 13px",cursor:"pointer",fontFamily:"var(--fb)",transition:"all .15s"}},
              e("span",{style:{fontSize:18,flexShrink:0}},"\uD83C\uDF93"),
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:13,fontWeight:700,color:"#e9b446"}},"Pitaj AI profesora"),
                e("div",{style:{fontSize:11,color:"rgba(255,255,255,.5)",marginTop:1}},"objasni ovaj zadatak korak po korak")),
              !IS_PRO&&e("span",{style:{fontSize:9,fontWeight:800,letterSpacing:".05em",color:"#e9b446",background:"rgba(233,180,70,.15)",border:"1px solid rgba(233,180,70,.4)",borderRadius:5,padding:"2px 6px",flexShrink:0}},"PRO"),
              e("span",{style:{color:"rgba(233,180,70,.7)",fontSize:16,flexShrink:0}},"\u203a")
            ); })(),

          // FEEDBACK + standardno rješenje za MC
          // U examMode  -  ništa do završetka ispita
          q.type==="mc"&&!examMode&&(()=>{
            const showFeedback=practice&&isRev;
            const showHelper=hasAns(a)||done||isRev;
            if(!showFeedback&&!showHelper) return null;
            const hist=(userData?.history||[]);
            const avgT=(()=>{
              const times=hist.flatMap(h=>h.qTimes&&h.qTimes[q.id]?[h.qTimes[q.id]]:[]);
              return times.length>=2?Math.round(times.reduce((a,b)=>a+b,0)/times.length):null;
            })();
            return e("div",null,
              showFeedback&&e(FeedbackBox,{q,a,rev:isRev,elapsed:qTimes[q.id]||0,avgTime:avgT}),
              showFeedback&&chk(q,a)===true&&e(SelfExplain,{key:"se"+q.id,val:selfExpl[q.id]||"",onChange:t=>setSelfExpl(p=>({...p,[q.id]:t}))}),
              showFeedback&&chk(q,a)===false&&onPracticeSimilar&&e("button",{className:"similar-btn",
                onClick:()=>onPracticeSimilar(q.topic,TOPIC_LABELS[q.topic]||q.topic)},
                "\u2795 Vje\u017ebaj jo\u0161 zadataka iz teme \u201e"+(TOPIC_LABELS[q.topic]||q.topic)+"\u201d \u2192"),
              // Tagovi grešaka  -  samo u practice modu, nikad u examMode
              showFeedback&&chk(q,a)===false&&e(ErrorTagger,{qid:q.id,errorTags,setErrorTags}),
              showHelper&&e(AnswerHelper,{q,autoExpand:false})
            );
          })(),

          practice&&!isRev&&e("button",{onClick:()=>setHelpOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:7,marginTop:14,padding:"8px 15px",borderRadius:99,background:helpOpen?"var(--blue-d)":"var(--s2)",border:"1px solid "+(helpOpen?"var(--blue-b)":"var(--bdr2)"),color:helpOpen?"var(--blue)":"var(--muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"💡 Pomoć i alati",e("span",{style:{opacity:.7,marginLeft:1}},helpOpen?" ▴":" ▾")),
          practice&&!isRev&&helpOpen&&e(StuckHelper,{key:"stuck"+q.id}),

          // HINT LADDER (vježba): otkrivaj korake jedan po jedan
          practice&&!isRev&&helpOpen&&(()=>{
            const postupak=(q.steps||[]).find(st=>st&&st.note==="postupak");
            const peeked=!!formulaPeek[q.id];
            return e("div",{className:"study-aids"},
              postupak&&e("button",{className:"aid-btn",onClick:()=>setFormulaPeek(p=>({...p,[q.id]:!p[q.id]}))},peeked?"\uD83D\uDCD0 Sakrij formulu":"\uD83D\uDCD0 Klju\u010dna formula"),
              e("button",{className:"aid-btn",onClick:showSolvedExample},"\uD83D\uDCD6 Rije\u0161en sli\u010dan primjer"),
              peeked&&postupak&&e("div",{className:"formula-peek"},renderOptText(String(postupak.txt).replace(/^Sa\u017eetak postupka:\s*/i,""))));
          })(),
          practice&&!isRev&&helpOpen&&q.steps&&q.steps.length>0&&(()=>{
            const shown=hints[q.id]||0;
            return e("div",{style:{marginTop:14}},
              shown>0&&e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"12px 14px",marginBottom:10}},
                e("div",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"var(--blue)",marginBottom:8}},"💡 Koraci ("+shown+"/"+q.steps.length+")"),
                q.steps.slice(0,shown).map((st,i)=>{
                  const txt=typeof st==="string"?st:(st&&st.txt)||"";
                  return e("div",{key:i,className:"ah-step"},
                    e("span",{className:"ah-step-n"},i+1),
                    e("span",{className:"ah-step-txt"},renderOptText(txt)));
                })),
              shown<q.steps.length&&e("button",{
                onClick:()=>setHints(p=>({...p,[q.id]:shown+1})),
                style:{fontSize:12.5,fontWeight:700,padding:"7px 14px",borderRadius:"var(--r)",cursor:"pointer",fontFamily:"var(--fb)",
                  background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},
                shown===0?"💡 Otkrij prvi korak":"💡 Otkrij sljedeći korak ("+(shown+1)+"/"+q.steps.length+")"));
          })(),

          // CONFIDENCE CHECK (vježba, MC, prije provjere)
          practice&&!isRev&&q.type==="mc"&&hasAns(a)&&e("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}},
            e("span",{style:{fontSize:11.5,fontWeight:600,color:"var(--muted)"}},"Koliko si siguran/na?"),
            [["2","😎 Siguran"],["1","🤔 Nisam siguran"],["0","😬 Pogađam"]].map(([v,lbl])=>
              e("button",{key:v,onClick:()=>setConf(p=>({...p,[q.id]:+v})),
                className:"pill"+(conf[q.id]===+v?" pill-blue":"")},lbl))),

          // NAV GUMBI
          e("div",{className:"qnav"},
            e("button",{className:"btn btn-g",disabled:cur===0,onClick:()=>goTo(cur-1)},"← Prethodni"),
            // "Provjeri" gumb SAMO za MC u vježba modu
            practice&&!isRev&&q.type==="mc"&&hasAns(a)&&e("button",{className:"btn btn-chk",onClick:()=>{
              setRev(p=>({...p,[q.id]:true}));
              const result=chk(q,a);
              registerCheck(q,result);
              if(result===true)window._playSound?.("correct");
              else if(result===false)window._playSound?.("wrong");
            }},"✓ Provjeri odgovor"),
            cur<QSX.length-1
              ?e("button",{className:"btn btn-blue",onClick:()=>goTo(cur+1)},"Sljedeći →")
              :e("button",{className:"btn btn-gold",onClick:()=>setShowReview(true)},"Završi ispit ✓")
          )
        )
      ),

      // DESNI STUPAC  -  navigator
      e("div",{className:"sidebar"},
        e("h4",null,"Navigator"),
        navFilterControls(false),
        sections.map((sec,si)=>{
          const range=QSX.slice(sec.from,sec.to+1);
          return e("div",{key:si},
            e("div",{className:"section-divider"},sec.label.split(" - ")[0].trim()),
            e("div",{className:"qgrid"},
              range.map((qq,ri)=>{
                const qi=sec.from+ri;
                if(hideSolved&&hasAns(answers[qq.id])&&qi!==cur)return null;
                const isAns=hasAns(answers[qq.id]);
                const isF=flag[qq.id];
                const _chk2=done||rev[qq.id];const ok2=_chk2?chk(qq,answers[qq.id]):null;
                let cls="qgrid-btn";
                if(ok2===true) cls+=" ok";
                else if(ok2===false) cls+=" bad";
                else if(isAns) cls+=" ans";
                if(qi===cur) cls+=" cur";
                if(isF) cls+=" flag";
                if(navTopicFilter&&qq.topic!==navTopicFilter) cls+=" nf-dim";
                return e("button",{key:qi,className:cls,onClick:()=>goTo(qi)},qi+1,(!examMode&&ok2===null&&!isAns&&qi!==cur&&!isF)&&e("span",{key:"d",className:"qd-dot qd-"+(qq.points>=3?"tesko":qq.points===2?"srednje":"lako")}));
              })
            )
          );
        }),
        e("div",{style:{marginTop:14,fontSize:11,color:"var(--muted)",lineHeight:1.7}},
          e("div",null,"⚑ F  -  označi pitanje"),
          e("div",null,"🔖 Shift+F  -  spremi za kasnije"),
          e("div",null,"← → tipke  -  navigacija"),
          e("div",null,"A/B/C/D  -  odabir opcije"),
          e("div",null,"Enter  -  provjeri/nastavi")
        )
      )
    )
  );
}
function GuideScreen({onBack}){
  const totalExams=Object.keys(EXAMS).length;
  const totalQs=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.length,0);
  const[open,setOpen]=React.useState("modovi"); // otvoreno defaultno

  const sections=[
    {
      id:"sto",icon:"📚",title:SUBJECT.onboardingTitle,
      content:e("div",null,
        e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},
          "Simulator državne mature iz matematike - osnovna (B) i viša (A) razina. Sva originalna pitanja NCVVO-a s korak-po-korak rješenjima i AI objašnjenjima."),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
          [{ico:"🗂️",label:totalExams+" ispita",sub:"B i A razina, 2010-2025"},
           {ico:"❓",label:totalQs+" zadataka",sub:"MC, numerički, kratki odg."},
           {ico:"📐",label:"Korak-po-korak",sub:"Rješenja svih zadataka"},
           {ico:"🤖",label:"AI objašnjenja",sub:"Za svaki zadatak"}
          ].map((item,i)=>e("div",{key:i,style:{
            background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:12,padding:"14px 14px"
          }},
            e("div",{style:{fontSize:22,marginBottom:6}},item.ico),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:2}},item.label),
            e("div",{style:{fontSize:11,color:"var(--muted)"}},item.sub)
          ))
        )
      )
    },
    {
      id:"modovi",icon:"🎮",title:"Načini vježbanja",
      content:e("div",{style:{display:"flex",flexDirection:"column",gap:0}},
        [{ico:"🎓",name:"Simulacija ispita",col:"var(--red)",desc:"Timer 150/180 min, bez feedbacka, samo skica i osnovni kalkulator — identično pravoj maturi."},
         {ico:"📚",name:"Vježbanje",col:"var(--blue)",desc:"Instant feedback, korak-po-korak rješenja, AI objašnjenja."},
         {ico:"⚡",name:"Vježbanje s timerom",col:"var(--gold)",desc:"Feedback uz vremenski pritisak - dobra priprema za realne uvjete."},
         {ico:"🎲",name:"Virtualni ispit",col:"#b97cf3",desc:"~36 nasumičnih zadataka iz svih ispita iste razine. Nikad isti dvaput."},
         {ico:"🎯",name:"Vježbaj po temi",col:"var(--teal)",desc:"Filtriraj zadatke po temi, vrsti, godini i razini."},
         {ico:"🔁",name:"Pametno ponavljanje",col:"#b97cf3",desc:"Sustav pamti što griješiš i vraća ti pitanje točno kad ga trebaš ponoviti."},
         {ico:"⚡",name:"Dnevni izazov",col:"var(--gold)",desc:"5 zadataka svaki dan - mijenja se u ponoć."},
         {ico:"🃏",name:"Flashcards",col:"var(--blue)",desc:"Formule i pojmovi - okreni karticu, provjeri se sam/sama."},
         {ico:"🔖",name:"Spremljena pitanja",col:"var(--gold)",desc:"Spremi zadatke za kasniji pregled i sesiju ponavljanja."}
        ].map((m,i,arr)=>e("div",{key:i,style:{
          display:"flex",gap:12,padding:"11px 0",
          borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",
          alignItems:"flex-start"
        }},
          e("div",{style:{
            width:36,height:36,borderRadius:9,flexShrink:0,
            display:"flex",alignItems:"center",justifyContent:"center",
            background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",
            fontSize:18
          }},m.ico),
          e("div",null,
            e("div",{style:{fontWeight:700,fontSize:13,color:m.col,marginBottom:2}},m.name),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},m.desc)
          )
        ))
      )
    },
{
      id:"prostor",icon:"✏️",title:"Radni prostor i alati",
      content:e("div",null,e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},"Digitalni papir za račun uz svaki zadatak. Otvori ga ikonom ✏️ u zaglavlju ili karticom „Radni prostor” ispod zadatka — sve se pamti po pitanju."),e("div",{style:{display:"flex",flexDirection:"column",gap:0}},[{ico:"✏️",name:"Skica",col:"var(--blue)",desc:"Beskonačno platno: olovka, ravnalo, kvadratići, gumica, zoom. Upiši f(x) pa ti nacrta graf s nultočkama, tjemenima i sjecištima. Uvuci sliku iz zadatka i crtaj ili mjeri po njoj."},{ico:"🧮",name:"Računalo",col:"var(--teal)",desc:"Znanstveni kalkulator. Spremi međurezultate (STO → A–D), egzaktni mod (razlomci, √)."},{ico:"📐",name:"Asistent",col:"var(--gold)",desc:"Upiši izraz ili jednadžbu i dobiješ rješenje korak po korak: jednadžbe, sustavi, nejednadžbe (s intervalima), faktorizacija, razmnožavanje, derivacije, integrali i trigonometrijska opća rješenja (x = … + 2kπ)."}].map((m,i,arr)=>e("div",{key:i,style:{display:"flex",gap:12,padding:"11px 0",borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",alignItems:"flex-start"}},e("div",{style:{width:36,height:36,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",fontSize:18}},m.ico),e("div",null,e("div",{style:{fontWeight:700,fontSize:13,color:m.col,marginBottom:2}},m.name),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},m.desc))))),e("div",{style:{marginTop:14,display:"flex",gap:10,alignItems:"flex-start",background:"rgba(224,82,82,.08)",border:"1px solid rgba(224,82,82,.3)",borderRadius:10,padding:"11px 13px"}},e("span",{style:{fontSize:15,flexShrink:0}},"🎓"),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},e("strong",{style:{color:"#f0a8a8"}},"U Simulaciji ispita:")," radni prostor je sveden na Skicu i osnovni kalkulator — bez Asistenta, AI-a i grafera, točno kao na pravoj maturi.")))
    },
    {
      id:"ai",icon:"🎓",title:"AI profesor",
      content:e("div",null,e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:14}},"Zapeo/la na zadatku? Klikni „🎓 Pitaj AI profesora” ispod zadatka — otvara se Asistent s već upisanim zadatkom, a AI ti ga objasni korak po korak na hrvatskom."),e("div",{style:{display:"flex",flexDirection:"column",gap:6}},[["🎯","Baš taj zadatak","Objašnjenje je vezano uz konkretan zadatak, ne generičko."],["📝","Korak po korak","Razlaže postupak, ključnu ideju i tipičnu grešku."],["✨","Uz Pro","AI profesor je dio Pro pretplate."]].map(function(it,i){return e("div",{key:i,style:{display:"flex",gap:10,padding:"10px 12px",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10}},e("span",{style:{fontSize:16,flexShrink:0}},it[0]),e("div",null,e("div",{style:{fontWeight:700,fontSize:12,color:"var(--gold)",marginBottom:2}},it[1]),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},it[2])));})),e("div",{style:{marginTop:14,display:"flex",gap:10,alignItems:"flex-start",background:"rgba(224,82,82,.08)",border:"1px solid rgba(224,82,82,.3)",borderRadius:10,padding:"11px 13px"}},e("span",{style:{fontSize:15,flexShrink:0}},"🔒"),e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},e("strong",{style:{color:"#f0a8a8"}},"U Simulaciji ispita:")," AI profesor nije dostupan — kao ni na pravoj maturi.")))
    },
    {
      id:"analitika",icon:"📊",title:"Statistike i praćenje napretka",
      content:e("div",null,
        e("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.6}},
          "Otvori Statistika iz izbornika. Ima 6 tabova:"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
          [["📈","Pregled","Trend rezultata, predviđena ocjena, NCE usporedba, Sim vs Vježbanje"],
           ["🗺️","Teme","Uspješnost po temama - klikni temu za detalje i sva pitanja"],
           ["🔁","Greške","Greške grupirane po razini A/B i temi"],
           ["💀","Najteža","Pitanja s najviše grešaka kroz sve ispite"],
           ["🗓️","Kalendar","Pregled aktivnosti po danima - koji dani si vježbao/la"],
           ["💡","Savjeti","Personalizirane preporuke i analiza brzine rješavanja"]
          ].map(([ico,tab,desc],i)=>e("div",{key:i,style:{
            display:"flex",gap:10,padding:"10px 12px",
            background:"var(--s2)",border:"1px solid var(--bdr)",
            borderRadius:10
          }},
            e("span",{style:{fontSize:16,flexShrink:0}},ico),
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:12,color:"var(--blue)",marginBottom:2}},tab),
              e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},desc)
            )
          ))
        )
      )
    },
    {
      id:"savjeti",icon:"🎯",title:"Preporučeni redoslijed pripreme",
      content:e("div",{style:{display:"flex",flexDirection:"column",gap:0}},
        [["1-2 tjedan","var(--blue)","Rješavaj originalne ispite u modu Vježbanje. Prati koje teme su ti teže."],
         ["3-4 tjedan","var(--teal)","Pametno ponavljanje svaki dan (10-15 min) + barem 1 ispit dnevno. Koristi Tematske sesije za slabe teme."],
         ["5-6 tjedan","var(--gold)","Simulacija ispita u realnim uvjetima. Provjeri statistiku - fokusiraj što je najslabije."],
         ["Zadnji tjedan","var(--red)","Virtualni ispiti + Dnevni izazov + Pametno ponavljanje za utvrđivanje gradiva."],
         ["Dan prije","var(--green)","Kratka sesija Flashcards. Pregledaj formule. Odmori se - glava treba biti svježa."]
        ].map(([period,col,desc],i,arr)=>e("div",{key:i,style:{
          display:"flex",gap:12,padding:"12px 0",
          borderBottom:i<arr.length-1?"1px solid var(--bdr)":"none",
          alignItems:"flex-start"
        }},
          e("div",{style:{
            width:90,flexShrink:0,fontWeight:700,fontSize:11,
            color:col,lineHeight:1.4,paddingTop:2
          }},period),
          e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6}},desc)
        ))
      )
    },
    {
      id:"precaci",icon:"⌨️",title:"Tipkovni prečaci",
      content:e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}},
        [["A / B / C / D","Odaberi MC odgovor"],["Enter","Provjeri / Sljedeće"],
         ["→ / ←","Naprijed / Natrag"],["B","Bookmark zadatak"],
         ["F","Označi zadatak"],["Space (SRS)","Okreni karticu"],
         ["1 / 2 / 3","Nisam znao / Djelomično / Znao sam (SRS)"],["Esc","Zatvori modal"]
        ].map(([k,d],i)=>e("div",{key:i,style:{
          display:"flex",alignItems:"center",gap:8,fontSize:12,
          padding:"8px 10px",background:"var(--s2)",
          border:"1px solid var(--bdr)",borderRadius:9
        }},
          e("kbd",{style:{
            background:"var(--s1)",border:"1px solid var(--bdr2)",
            borderRadius:5,padding:"2px 8px",fontFamily:"monospace",
            fontSize:11,fontWeight:700,flexShrink:0,minWidth:50,
            textAlign:"center",color:"var(--blue)"
          }},k),
          e("span",{style:{color:"var(--muted)"}},d)
        ))
      )
    }
  ];

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📖 Upute za korištenje")
    ),
    e("div",{style:{maxWidth:680,margin:"0 auto",padding:"24px 20px 60px"}},

      // Hero
      e("div",{style:{
        borderRadius:18,padding:"24px 24px 20px",marginBottom:24,
        background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
        position:"relative",overflow:"hidden"
      }},
        e("div",{style:{position:"absolute",right:-8,bottom:-18,fontSize:100,
          fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"rgba(255,255,255,.5)",marginBottom:8}},"Discere "+SUBJECT.name),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--bg,#060910)",marginBottom:6}},
          "Sve što trebaš znati"),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.65)",lineHeight:1.6}},
          totalExams+" ispita · "+totalQs+" zadataka · radni prostor s rješavačem · AI profesor")
      ),

      // Accordion sekcije
      e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
        sections.map(s=>e("div",{key:s.id,style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",
          borderRadius:14,overflow:"hidden"
        }},
          // Header
          e("button",{
            onClick:()=>setOpen(o=>o===s.id?null:s.id),
            style:{
              width:"100%",display:"flex",alignItems:"center",gap:12,
              padding:"14px 18px",background:"none",border:"none",
              cursor:"pointer",textAlign:"left",fontFamily:"var(--fb)",
              background:open===s.id?"var(--s2)":"transparent"
            }
          },
            e("div",{style:{
              width:38,height:38,borderRadius:10,flexShrink:0,
              display:"flex",alignItems:"center",justifyContent:"center",
              background:"var(--blue-d)",border:"1px solid var(--blue-b)",fontSize:18
            }},s.icon),
            e("span",{style:{flex:1,fontWeight:700,fontSize:14,color:"var(--text)",textAlign:"left"}},s.title),
            e("span",{style:{
              fontSize:11,color:"var(--muted)",
              transition:"transform .2s",display:"inline-block",
              transform:open===s.id?"rotate(180deg)":"rotate(0deg)"
            }},"▾")
          ),
          // Sadržaj
          open===s.id&&e("div",{style:{
            padding:"4px 18px 18px",borderTop:"1px solid var(--bdr)"
          }},s.content)
        ))
      )
    )
  );
}
function getDailyChallengeQuestions(){
  const today=new Date();
  const seed=today.getFullYear()*10000+(today.getMonth()+1)*100+today.getDate();
  function seededRand(s){let x=Math.sin(s)*10000;return x-Math.floor(x);}

  // Uzmi sve MC zadatke s exp poljem iz svih ispita
  const pool=[];
  Object.values(EXAMS).forEach(exam=>{
    exam.qs.forEach(q=>{
      if(q.type==="mc"&&q.sol?.cl&&(q.exp||(q.why&&q.why.length))) pool.push({...q,_examKey:exam.key});
    });
  });

  // Fisher-Yates s determinističkim seedom  -  svaki dan ista 5 pitanja
  const arr=[...pool];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(seededRand(seed+i)*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr.slice(0,5).map((q,i)=>({...q,_uid:q._examKey+"__"+q.id+"__"+i}));
}
function DailyChallengeScreen({onBack,userData,onUpdateUserData}){
  const today=new Date().toLocaleDateString("hr");
  const qs=React.useMemo(()=>getDailyChallengeQuestions(),[]);
  const[cur,setCur]=useState(0);
  const[answers,setAnswers]=useState({});
  const[submitted,setSubmitted]=useState(false);
  const[xpGained,setXpGained]=useState(0);
  const[showMissing,setShowMissing]=useState(false);

  const todayKey="dc_"+today.replace(/\./g,"").replace(/ /g,"");
  const alreadyDone=userData?.history?.some(h=>h.examKey===todayKey);

  function selectAnswer(uid,letter){
    if(submitted) return;
    setAnswers(a=>({...a,[uid]:letter}));
  }

  function submit(){
    const missing=qs.length-Object.keys(answers).length;
    if(missing>0){ setShowMissing(true); return; }
    setSubmitted(true);
    const cor=qs.filter(q=>answers[q._uid]===q.sol.cl).length;
    const pct=Math.round(cor/qs.length*100);
    const gained=calcXpGain(pct,qs.length);
    setXpGained(gained);
    window._playSound&&window._playSound(pct>=80?"done":"click");
    if(onUpdateUserData){
      onUpdateUserData(prev=>{
        const streaked=updateStreak(prev);
        const errorTracker={...(prev.errorTracker||{})};
        const topic_breakdown={};
        qs.forEach(q=>{
          const t=q.topic||"ostalo";
          if(!topic_breakdown[t]) topic_breakdown[t]={correct:0,total:0};
          topic_breakdown[t].total++;
          const ok=answers[q._uid]===q.sol.cl;
          if(ok) topic_breakdown[t].correct++;
          const ekey=(q._examKey||"dc")+"__"+q.id;
          if(!ok){
            const ex=errorTracker[ekey]||{count:0,q:(q.q||"").slice(0,80),topic:t,examKey:q._examKey,qid:q.id,type:"mc"};
            errorTracker[ekey]={...ex,count:ex.count+1,lastDate:today};
          } else if(errorTracker[ekey]){
            errorTracker[ekey]={...errorTracker[ekey],count:Math.max(0,errorTracker[ekey].count-1)};
            if(errorTracker[ekey].count===0) delete errorTracker[ekey];
          }
        });
        const newHistory=[...(prev.history||[]),{
          examLabel:"Dnevni izazov "+today, examKey:todayKey,
          date:today,pct, grade:pct>=80?5:pct>=60?4:pct>=40?3:2,
          cor,total:qs.length,mode:"vježbanje",topic_breakdown
        }];
        return {...streaked, xp:(prev.xp||0)+gained, history:newHistory, errorTracker, totalExams:(prev.totalExams||0)+1};
      });
    }
  }

  // Već riješen danas
  if(alreadyDone&&!submitted){
    const entry=userData.history.find(h=>h.examKey===todayKey);
    const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);
    const ttl=tomorrow-new Date();
    const hrs=Math.floor(ttl/3600000);
    const mins=Math.floor((ttl%3600000)/60000);
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"⚡ Dnevni izazov")
      ),
      e("div",{style:{maxWidth:500,margin:"0 auto",padding:"60px 20px",textAlign:"center"}},
        e("div",{style:{fontSize:52,marginBottom:16}},entry?.pct>=80?"🏆":entry?.pct>=60?"✅":"💪"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:28,marginBottom:4}},entry?.cor+"/"+entry?.total+" točnih"),
        e("div",{style:{fontSize:18,fontWeight:700,color:"var(--gold)",marginBottom:20}},entry?.pct+"%"),
        e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:8}},"Dnevni izazov za ",e("strong",null,today)," je gotov! 🎉"),
        e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:24}},"Novi izazov za "+hrs+"h "+mins+"min"),
        e("button",{className:"btn btn-g",style:{padding:"10px 24px"},onClick:onBack},"← Natrag")
      )
    );
  }

  const q=qs[cur];
  const allAnswered=Object.keys(answers).length===qs.length;

  // Rezultati nakon predaje
  if(submitted){
    const cor=qs.filter(q=>answers[q._uid]===q.sol.cl).length;
    const pct=Math.round(cor/qs.length*100);
    const gc=pct===100?"var(--green)":pct>=80?"var(--green)":pct>=60?"var(--gold)":"var(--red)";
    const emoji=pct===100?"🏆":pct>=80?"✅":pct>=60?"💪":"📚";
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"⚡ Dnevni izazov - Rezultat")
      ),
      e("div",{style:{maxWidth:600,margin:"0 auto",padding:"24px 20px 60px"}},

        // Hero rezultata
        e("div",{style:{
          borderRadius:18,padding:"28px 24px",marginBottom:24,textAlign:"center",
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
          position:"relative",overflow:"hidden"
        }},
          e("div",{style:{position:"absolute",right:-8,bottom:-20,fontSize:100,
            fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
          e("div",{style:{fontSize:44,marginBottom:8}},emoji),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:42,color:"#fff",lineHeight:1,marginBottom:6}},pct+"%"),
          e("div",{style:{fontSize:14,color:"rgba(255,255,255,.7)",marginBottom:4}},
            cor+" od "+qs.length+" točnih · "+today),
          xpGained>0&&e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:8,flexWrap:"wrap"}},
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(232,197,71,.2)",border:"1px solid rgba(232,197,71,.4)",color:"#fcd34d"}},"+"+xpGained+" XP"),
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff"}},"🔥 "+(userData?.streak||0)+" dana")
          ),
          e("div",{style:{
            display:"inline-block",marginTop:8,
            fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:99,
            background:pct>=80?"rgba(61,214,140,.2)":pct>=60?"rgba(232,197,71,.2)":"rgba(248,113,113,.2)",
            border:"1px solid "+(pct>=80?"rgba(61,214,140,.4)":pct>=60?"rgba(232,197,71,.4)":"rgba(248,113,113,.4)"),
            color:pct>=80?"#6ee7a0":pct>=60?"#fcd34d":"#fca5a5"
          }},pct>=80?"Odličan rezultat!":pct>=60?"Dobar rezultat":"Ima prostora za napredak")
        ),

        // Sekcija label
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Pregled pitanja"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),

        // Pitanja
        e("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:24}},
          qs.map((q,i)=>{
            const userAns=answers[q._uid];
            const correct=q.sol.cl;
            const ok=userAns===correct;
            const borderCol=ok?"rgba(61,214,140,.3)":"rgba(248,113,113,.3)";
            const bgCol=ok?"rgba(61,214,140,.04)":"rgba(248,113,113,.04)";

            return e("div",{key:i,style:{
              background:"var(--s1)",
              border:"1px solid "+borderCol,
              borderLeft:"3px solid "+(ok?"var(--green)":"var(--red)"),
              borderRadius:"0 14px 14px 0",
              overflow:"hidden"
            }},
              // Header pitanja
              e("div",{style:{padding:"14px 16px",background:bgCol}},
                e("div",{style:{display:"flex",gap:10,alignItems:"center",marginBottom:10}},
                  e("div",{style:{
                    width:28,height:28,borderRadius:8,flexShrink:0,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    background:ok?"var(--green-d)":"var(--red-d)",
                    fontSize:14,fontWeight:800,
                    color:ok?"var(--green)":"var(--red)"
                  }},ok?"✓":"✗"),
                  e("div",{style:{flex:1}},
                    e("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}},
                      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--muted)"}},
                        (i+1)+". zadatak"),
                      e("span",{className:"topic-tag",style:{fontSize:10}},
                        TOPIC_LABELS[q.topic]||q.topic)
                    )
                  )
                ),
                e("div",{style:{fontSize:14,lineHeight:1.65,fontWeight:500}},renderQText(q.q))
              ),

              // Opcije
              e("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:6}},
                q.opts.map((opt,oi)=>{
                  const letter=LL[oi];
                  const isUser=userAns===letter;
                  const isCorrect=correct===letter;
                  let bg="var(--s2)";
                  let border="var(--bdr)";
                  let col="var(--muted)";
                  let badge=null;
                  if(isCorrect){bg="var(--green-d)";border="rgba(61,214,140,.4)";col="var(--green)";badge="✓ Točno";}
                  if(isUser&&!ok){bg="var(--red-d)";border="rgba(248,113,113,.4)";col="var(--red)";badge="✗ Tvoj odgovor";}
                  if(isUser&&ok){badge="✓ Točno";}
                  return e("div",{key:oi,style:{
                    display:"flex",alignItems:"center",gap:10,
                    padding:"8px 12px",borderRadius:9,
                    background:bg,border:"1px solid "+border
                  }},
                    e("div",{style:{
                      width:24,height:24,borderRadius:6,flexShrink:0,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:11,fontWeight:700,color:col,
                      background:"rgba(255,255,255,.06)"
                    }},letter),
                    e("div",{style:{flex:1,fontSize:13,color:isCorrect||isUser?"var(--text)":"var(--muted)",lineHeight:1.4}},renderOptContent(opt)),
                    badge&&e("span",{style:{
                      fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,flexShrink:0,
                      background:isCorrect?"var(--green-d)":"var(--red-d)",
                      color:isCorrect?"var(--green)":"var(--red)",
                      border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"rgba(248,113,113,.3)")
                    }},badge)
                  );
                })
              ),

              // Objašnjenje — uvijek ako postoji, istaknuto za krive
              (q.exp||(Array.isArray(q.why)&&q.why.length))&&e("div",{style:{
                margin:"0 16px 14px",padding:"10px 14px",borderRadius:10,
                background:ok?"rgba(74,144,217,.06)":"rgba(232,197,71,.08)",
                border:"1px solid "+(ok?"rgba(74,144,217,.15)":"rgba(232,197,71,.2)")
              }},
                e("div",{style:{fontSize:11,fontWeight:700,color:ok?"var(--blue)":"var(--gold)",
                  marginBottom:4,letterSpacing:".04em"}},"💡 Objašnjenje"),
                e("div",{style:{fontSize:13,color:"var(--text)",lineHeight:1.65}},q.exp||(Array.isArray(q.why)?q.why[0]:q.why))
              )
            );
          })
        ),

        // Natrag gumb
        e("button",{className:"btn btn-blue",style:{width:"100%",padding:"12px",fontSize:14},
          onClick:onBack},"← Natrag na početak")
      )
    );
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"⚡ Dnevni izazov"),
      e("span",{style:{fontSize:12,color:"var(--muted)"}},today)
    ),
    e("div",{style:{maxWidth:560,margin:"0 auto",padding:"24px 20px 60px"}},
      // Progress dots
      e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginBottom:24}},
        qs.map((_,i)=>{
          const answered=answers[qs[i]._uid];
          const isCur=i===cur;
          return e("div",{key:i,style:{
            width:10,height:10,borderRadius:"50%",cursor:"pointer",transition:"all .2s",
            background:answered?"var(--gold)":isCur?"var(--blue)":"var(--s3)",
            border:isCur?"2px solid var(--blue)":"2px solid transparent"
          },onClick:()=>setCur(i)});
        })
      ),
      e("div",{style:{fontSize:11,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".08em",marginBottom:6,display:"flex",alignItems:"center",gap:10,opacity:.85}},
        e("span",{style:{width:3,height:14,background:"var(--gold)",borderRadius:2,display:"inline-block"}}),
        e("span",null,"Zadatak "+(cur+1)+" od "+qs.length+" · "+(TOPIC_LABELS[q.topic]||q.topic)),
        e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
      ),
      e("div",{className:"qcard",style:{marginBottom:16}},
        e("div",{className:"qtext"},renderQText(q.q))
      ),
      e("div",{className:"opts",style:{marginBottom:20}},
        q.opts.map((opt,i)=>{
          const letter=String.fromCharCode(65+i);
          const sel=answers[q._uid]===letter;
          let cls="opt"+(sel?" sel":"");
          return e("div",{key:i,className:cls,onClick:()=>selectAnswer(q._uid,letter)},
            e("div",{className:"optl"},letter),
            e("div",{className:"optt"},renderOptContent(opt))
          );
        })
      ),
      e("div",{style:{display:"flex",gap:10}},
        cur>0&&e("button",{className:"btn btn-g",onClick:()=>setCur(c=>c-1)},"← Prethodno"),
        cur<qs.length-1&&e("button",{
          className:"btn btn-blue",style:{marginLeft:"auto"},
          onClick:()=>setCur(c=>c+1),disabled:!answers[q._uid]
        },"Sljedeći →"),
        cur===qs.length-1&&e("button",{
          className:"btn btn-gold",
          style:{marginLeft:"auto",opacity:allAnswered?1:.5,cursor:allAnswered?"pointer":"not-allowed"},
          onClick:submit
        },"Predaj ✓ "+(allAnswered?"":"("+( qs.length-Object.keys(answers).length)+" ostalo)"))
      ),
      showMissing&&!allAnswered&&e("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:600,color:"var(--red)",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.25)",borderRadius:8,padding:"8px 12px",marginTop:10}},
        "Odgovori na svih "+qs.length+" pitanja prije predaje ("+(qs.length-Object.keys(answers).length)+" preostalo)"),
      !allAnswered&&cur===qs.length-1&&e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",marginTop:8}},
        "Odgovori na sva pitanja da predaš izazov")
    )
  );
}
function DailySummary({userData,onWrapped,onSetGoal}){
  const history=userData.history||[];
  const today=new Date().toLocaleDateString("hr");
  const todayExams=history.filter(h=>h.date===today);
  const hour=new Date().getHours();
  const greeting=hour<12?"Dobro jutro":hour<18?"Dobar dan":"Dobra večer";

  function estimateTime(h){
    // qTimes su sekunde po pitanju  -  sumiramo i pretvaramo u minute
    if(h.qTimes&&Object.keys(h.qTimes).length>0){
      const totalSec=Object.values(h.qTimes).reduce((s,x)=>s+(x||0),0);
      if(totalSec>=60) return Math.round(totalSec/60); // bar 1 min zabilježeno
    }
    // Fallback: za simulaciju koristimo stvarno trajanje ispita ako znamo examKey
    if(h.examMode||h.mode==="simulacija"){
      const ex=EXAMS[h.examKey];
      if(ex?.duration) return Math.round(ex.duration/60); // 150 ili 180 min
      return 150;
    }
    // Vježbanje  -  gruba procjena ~1.5 min po zadatku
    if(h.total) return Math.min(90, Math.round(h.total*1.5));
    return 35;
  }
  function fmtMins(m){if(m===0)return "0 min";if(m<60)return m+" min";return Math.floor(m/60)+"h "+(m%60>0?m%60+"min":"");}

  const todayMinutes=todayExams.reduce((s,h)=>s+estimateTime(h),0);
  const last7=Array.from({length:7},(_,i)=>{
    const d=new Date(Date.now()-(6-i)*86400000).toLocaleDateString("hr");
    const dayExams=history.filter(h=>h.date===d);
    const mins=dayExams.reduce((s,h)=>s+estimateTime(h),0);
    const label=["Ned","Pon","Uto","Sri","Čet","Pet","Sub"][new Date(Date.now()-(6-i)*86400000).getDay()];
    return {d,hasExam:dayExams.length>0,isToday:d===today,mins,label,exams:dayExams.length};
  });
  const weekMinutes=last7.reduce((s,d)=>s+d.mins,0);
  const maxMins=Math.max(...last7.map(d=>d.mins),1);

  if(history.length===0) return null;

  return e("div",{className:"daily-card"},
    e("div",{className:"daily-head"},
      e("div",null,
        e("div",{className:"daily-greeting"},greeting+" 👋"),
        e("div",{className:"daily-sub"},
          todayExams.length===0
            ?"Nisi još danas vježbao/la. Hoćeš li riješiti zadatak?"
            :"Danas si riješio/la "+todayExams.length+" ispit"+(todayExams.length>1?"a":"")+(todayMinutes>0?" · "+fmtMins(todayMinutes)+" učenja":".")
        )
      ),
      e("div",{style:{display:"flex",gap:6,flexShrink:0,alignItems:"center"}},
        todayExams.length>0&&e("span",{className:"daily-today-chip"},"✅ "+todayExams.length+" danas"),
        onWrapped&&e("button",{onClick:onWrapped,className:"pill pill-blue"},"\uD83D\uDCCA Mjesec"))
    ),
    e("div",{className:"daily-stats"},
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico xp"},"⭐"),
        e("div",{className:"daily-stat-val",style:{color:"var(--gold)"}},e(CountUp,{to:userData.xp||0,duration:800})),
        e("div",{className:"daily-stat-lbl"},"Ukupni XP")
      ),
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico ex"},"📘"),
        e("div",{className:"daily-stat-val",style:{color:"var(--green)"}},e(CountUp,{to:history.length,duration:650})),
        e("div",{className:"daily-stat-lbl"},"Ispita riješeno")
      ),
      e("div",{className:"daily-stat"},
        e("div",{className:"ds-ico st"},"🔥"),
        e("div",{className:"daily-stat-val",style:{color:"#f97316"}},e(CountUp,{to:userData.streak||0,duration:650})),
        e("div",{className:"daily-stat-lbl"},"Dan streak"),
        (userData.freezes||0)>0&&e("div",{style:{fontSize:9.5,marginTop:3,color:"var(--blue)",fontWeight:800}},"🧊 ×"+userData.freezes+" zaštita"),
        (userData.streak||0)>0&&(userData.streak||0)%7===6&&(userData.freezes||0)<2&&e("div",{style:{fontSize:9,marginTop:2,color:"var(--muted)",fontWeight:600}},"još 1 dan do 🧊")
      )
    ),
    // Tjedna aktivnost  -  bar chart
    e("div",{className:"ds-act",style:{marginBottom:12}},
      e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:8,display:"flex",justifyContent:"space-between"}},
        e("span",null,"Aktivnost  -  zadnjih 7 dana"),
        weekMinutes>0&&e("span",null,fmtMins(weekMinutes)+" ukupno")
      ),
      e("div",{className:"ds-bars"},
        last7.map((d,i)=>e("div",{key:i,style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",gap:3,height:"100%"}},
          d.isToday&&d.mins>0&&e("div",{className:"ds-bar-val"},fmtMins(d.mins)),
          e("div",{title:d.label+": "+fmtMins(d.mins),className:"ds-bar"+(d.isToday?" today":""),style:{
            height:d.mins>0?Math.max(5,Math.round(d.mins/maxMins*40))+"px":"4px",
            background:d.isToday?"linear-gradient(180deg,#ffd989,var(--gold))":d.hasExam?"linear-gradient(180deg,#7ee8dc,var(--teal))":"var(--s3)",
            opacity:d.isToday||d.hasExam?1:.7
          }}),
          e("div",{style:{fontSize:9,color:d.isToday?"var(--gold)":"var(--muted)",fontWeight:d.isToday?800:400}},d.label)
        ))
      ),
      onSetGoal&&(()=>{
        const goal=userData.dailyGoalMin;
        if(!goal) return e("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginTop:12}},
          e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600}},"\uD83C\uDFAF Dnevni cilj:"),
          [15,30,45,60].map(m=>e("button",{key:m,onClick:()=>onSetGoal(m),className:"pill"},m+" min")));
        const p=Math.min(100,Math.round(todayMinutes/goal*100));
        const hit=todayMinutes>=goal;
        return e("div",{style:{marginTop:12}},
          e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:11,marginBottom:5}},
            e("span",{style:{color:"var(--muted)",fontWeight:600}},"\uD83C\uDFAF Dnevni cilj: ",
              e("strong",{style:{color:hit?"var(--green)":"var(--text)"}},Math.round(todayMinutes)+"/"+goal+" min"),
              hit?" \u00b7 ostvaren! \uD83C\uDF89":""),
            e("button",{onClick:()=>onSetGoal(null),title:"Promijeni cilj",
              style:{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"var(--muted)",padding:2}},"\u270e")),
          e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{width:p+"%",height:"100%",borderRadius:99,transition:"width .5s cubic-bezier(.22,1,.36,1)",
              background:hit?"linear-gradient(90deg,var(--green),#7ef0ad)":"linear-gradient(90deg,var(--blue),var(--teal))"}})));
      })()
    ),
    // Trend zadnjih 10 ispita
    history.length>=3&&e("div",{className:"streak-quality-wrap"},
      e("div",{className:"streak-quality-title"},"Trend rezultata (zadnjih "+Math.min(10,history.length)+")"),
      e("div",{className:"streak-quality-bars"},
        history.slice(-10).map((h,i,arr)=>{
          const prev=i>0?arr[i-1].pct:h.pct;
          const dir=h.pct>prev+3?"up":h.pct<prev-3?"down":h.pct>0?"flat":"none";
          return e("div",{key:i,className:"sq-bar-wrap",title:h.pct+"%"},
            e("div",{className:"sq-bar "+dir,style:{height:Math.max(4,h.pct*0.48)+"px"}}),
            e("div",{className:"sq-label"},h.pct+"%")
          );
        })
      )
    ),
    // Insight
    todayExams.length===0&&history.length>0&&e("div",{className:"daily-insight"},
      e("strong",null,"💡 Prijedlog: "),
      "Na zadnjem ispitu si imao/la "+history[history.length-1]?.pct+"%. Pokušaj danas pobiti taj rekord!")
  );
}
const SRS_KEY="mat_srs";
function srsLoad(){try{return JSON.parse(DS.get(SRS_KEY)||"{}");}catch(e){return {};}}
function srsSave(data){try{DS.set(SRS_KEY,JSON.stringify(data));}catch(e){}}
function today_ord(){return Math.floor(Date.now()/86400000);}
function sm2Update(card,quality){
  const ef=Math.max(1.3,(card.ef||2.5)+0.1-(2-quality)*(0.08+(2-quality)*0.02));
  let interval;
  if(quality===0) interval=1;
  else if(!card.interval||card.interval<1) interval=1;
  else if(card.interval===1) interval=6;
  else interval=Math.round(card.interval*ef);
  return{ef,interval,due:today_ord()+interval,reps:(card.reps||0)+1};
}
const SRS_NEW_PER_DAY=15;
function srsEligible(q){
  if(!q||!q.sol) return false;
  if(q.type==="mc") return !!q.sol.cl;
  if(q.type==="sa"||q.type==="num"||q.type==="proof") return !!(q.sol.ans||q.sol.ex||(q.steps&&q.steps.length));
  return false;
}
function srsNewBank(srsData){
  let n=0;
  Object.values(EXAMS).forEach(ex=>ex.qs.forEach(q=>{ if(srsEligible(q)&&!srsData[ex.key+"__"+q.id]) n++; }));
  return n;
}
function getSrsDueCards(srsData){
  const tod=today_ord();
  // Pravi SRS: sva dospjela ponavljanja + ograničen broj NOVIH kartica po danu
  const introToday=Object.values(srsData).filter(c=>c&&c.intro===tod).length;
  const newAllowed=Math.max(0,SRS_NEW_PER_DAY-introToday);
  const reviews=[],news=[];
  Object.values(EXAMS).forEach(exam=>{
    exam.qs.forEach(q=>{
      if(!srsEligible(q)) return;
      const key=exam.key+"__"+q.id;
      const card=srsData[key];
      if(card){ if(card.due<=tod) reviews.push({...q,_examKey:exam.key,_srsKey:key,_card:card}); }
      else news.push({...q,_examKey:exam.key,_srsKey:key,_card:null});
    });
  });
  reviews.sort((a,b)=>(a._card.due||0)-(b._card.due||0));
  const newPick=news.sort(()=>Math.random()-.5).slice(0,newAllowed);
  return [...reviews,...newPick];
}
function SpacedRepetitionScreen({onBack,userData,onUpdateUserData}){
  const[srsData,setSrsData]=React.useState(()=>srsLoad());
  const dueCards=React.useMemo(()=>getSrsDueCards(srsData),[srsData]);
  const[sessionCards,setSessionCards]=React.useState(()=>dueCards.slice(0,20));
  const[cur,setCur]=React.useState(0);
  const[flipped,setFlipped]=React.useState(false);
  const[done,setDone]=React.useState(false);
  const[stats,setStats]=React.useState({easy:0,hard:0,again:0});
  const[xpGained,setXpGained]=React.useState(0);
  const awardedRef=React.useRef(false);
  const[ioMsg,setIoMsg]=React.useState(null);

  const totalSeen=Object.keys(srsData).length;
  const totalDue=dueCards.length;
  const totalMC=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.filter(srsEligible).length,0);
  const _tod=today_ord();
  const dueTomorrow=Object.values(srsData).filter(c=>c&&c.due===_tod+1).length;
  const dueWeek=Object.values(srsData).filter(c=>c&&c.due>_tod&&c.due<=_tod+7).length;
  const introToday=Object.values(srsData).filter(c=>c&&c.intro===_tod).length;
  const newBank=srsNewBank(srsData);

  function answer(quality){
    const q=sessionCards[cur];
    const updated=sm2Update(q._card||{},quality);
    if(!q._card) updated.intro=today_ord();
    const newSrs={...srsData,[q._srsKey]:updated};
    setSrsData(newSrs);
    srsSave(newSrs);
    setStats(s=>({...s,easy:s.easy+(quality===2?1:0),hard:s.hard+(quality===1?1:0),again:s.again+(quality===0?1:0)}));
    setFlipped(false);
    if(cur+1>=sessionCards.length) setDone(true);
    else setCur(c=>c+1);
  }

  React.useEffect(()=>{
    if(done||sessionCards.length===0) return;
    function onKey(e){
      if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
      if(e.code==="Space"){e.preventDefault();setFlipped(f=>!f);}
      if(!flipped) return;
      if(e.key==="1") answer(0);
      if(e.key==="2") answer(1);
      if(e.key==="3") answer(2);
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[flipped,done,sessionCards,cur]);

  React.useEffect(()=>{
    if(done&&!awardedRef.current){
      awardedRef.current=true;
      const answered=stats.easy+stats.hard+stats.again;
      if(answered>0){
        const gained=10+answered*2+(stats.easy>=Math.ceil(answered*0.7)?10:0);
        setXpGained(gained);
        window._playSound&&window._playSound("done");
        if(onUpdateUserData) onUpdateUserData(prev=>{const ss=updateStreak(prev);return{...ss,xp:(prev.xp||0)+gained};});
      }
    }
  },[done]);

  // Nema kartica za danas
  if(sessionCards.length===0) return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Ponavljanje")
    ),
    e("div",{style:{maxWidth:500,margin:"0 auto",padding:"60px 20px",textAlign:"center"}},
      e("div",{style:{fontSize:52,marginBottom:16}},"✅"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:24,marginBottom:8}},introToday>0?"Današnja porcija gotova!":"Sve naučeno!"),
      e("div",{style:{color:"var(--muted)",marginBottom:16,fontSize:14}},
        newBank>0
          ?"Odradio/la si "+introToday+" novih + sva ponavljanja za danas. Sutra te čeka novih "+Math.min(SRS_NEW_PER_DAY,newBank)+" — bez gomilanja."
          :"Nema kartica za danas - odlično!"),
      e("div",{style:{background:"var(--blue-d)",border:"1px solid var(--blue-b)",borderRadius:12,
        padding:"14px 18px",marginBottom:20,fontSize:13,color:"var(--text)",lineHeight:1.65,textAlign:"left"}},
        e("div",{style:{fontWeight:700,color:"var(--blue)",marginBottom:6}},"Kako ovo funkcionira?"),
        e("div",null,"Svaki put kad odgovoriš na pitanje, sustav pamti koliko dobro to znaš. Ako znaš dobro — vraća ti pitanje za tjedan dana. Ako ne znaš — vraća ga sutra. Cilj je da ponavljaš ",e("strong",null,"točno kad počinješ zaboravljati"),", ne ranije ni kasnije.")
      ),
      e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"14px 18px",marginBottom:20,textAlign:"left"}},
        e("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6}},
          e("span",{style:{color:"var(--muted)",fontSize:13}},"Naučenih zadataka"),
          e("span",{style:{fontWeight:700}},totalSeen+" / "+totalMC)
        ),
        e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
          e("div",{style:{height:"100%",width:Math.round(totalSeen/Math.max(totalMC,1)*100)+"%",background:"var(--green)",borderRadius:99}})
        )
      ),
      (dueTomorrow>0||dueWeek>0)&&e("div",{style:{fontSize:12.5,color:"var(--muted)",marginBottom:20}},
        "📅 Sutra na redu: ",e("strong",{style:{color:"var(--text)"}},dueTomorrow)," · ovaj tjedan: ",e("strong",{style:{color:"var(--text)"}},dueWeek)),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}},
        e("button",{className:"btn btn-g",style:{padding:"10px 24px"},onClick:onBack},"← Natrag"),
        Object.keys(srsData).length>0&&e("button",{
          className:"btn btn-g",style:{padding:"10px 24px"},
          onClick:()=>{
            const blob=new Blob([JSON.stringify({exported:new Date().toISOString(),version:1,cards:srsData},null,2)],{type:"application/json"});
            const url=URL.createObjectURL(blob);
            const a=document.createElement("a");
            a.href=url;a.download="discere_mat_srs_"+new Date().toISOString().slice(0,10)+".json";
            a.click();URL.revokeObjectURL(url);
          }
        },"💾 Backup podataka"),
        e("label",{className:"btn btn-g",style:{padding:"10px 24px",cursor:"pointer"}},
          "📂 Uvezi backup",
          e("input",{type:"file",accept:".json",style:{display:"none"},
            onChange:ev=>{
              const file=ev.target.files?.[0];if(!file) return;
              const reader=new FileReader();
              reader.onload=ev2=>{
                try{
                  const data=JSON.parse(ev2.target.result);
                  if(data.cards&&typeof data.cards==="object"){
                    const merged={...srsData,...data.cards};
                    setSrsData(merged);srsSave(merged);
                    setIoMsg({ok:true,txt:"Uvezeno "+Object.keys(data.cards).length+" kartica."});
                  } else setIoMsg({ok:false,txt:"Nevažeći format datoteke."});
                }catch(e3){setIoMsg({ok:false,txt:"Greška pri čitanju datoteke."});}
              };
              reader.readAsText(file);ev.target.value="";
            }
          })
        )
      ),
      ioMsg&&e("div",{style:{marginTop:10,fontSize:12.5,fontWeight:600,
        color:ioMsg.ok?"var(--green)":"var(--red)"}},
        (ioMsg.ok?"✅ ":"❌ ")+ioMsg.txt)
    )
  );

  // Sesija završena
  if(done) return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Sesija završena")
    ),
    e("div",{style:{maxWidth:500,margin:"0 auto",padding:"40px 20px",textAlign:"center"}},
      e("div",{style:{fontSize:48,marginBottom:12}},"🎓"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,marginBottom:20}},"Sesija gotova!"),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:24}},
        [{bg:"var(--green-d)",bc:"rgba(61,214,140,.3)",c:"var(--green)",v:"✓ "+stats.easy,l:"Znao/la sam"},
         {bg:"var(--gold-d)",bc:"var(--gold-b)",c:"var(--gold)",v:"~ "+stats.hard,l:"Djelomično"},
         {bg:"var(--red-d)",bc:"rgba(248,113,113,.3)",c:"var(--red)",v:"✗ "+stats.again,l:"Nisam znao/la"}
        ].map((s,i)=>e("div",{key:i,style:{background:s.bg,border:"1px solid "+s.bc,borderRadius:"var(--r)",padding:"12px 18px",textAlign:"center"}},
          e("div",{style:{fontSize:22,fontWeight:800,color:s.c}},s.v),
          e("div",{style:{fontSize:11,color:"var(--muted)"}},s.l)
        ))
      ),
      xpGained>0&&e("div",{style:{display:"inline-flex",gap:8,marginBottom:18}},
        e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)"}},"+"+xpGained+" XP"),
        e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--text)"}},"🔥 "+(userData?.streak||0)+" dana")
      ),
      (dueTomorrow>0||dueWeek>0)&&e("div",{style:{fontSize:12.5,color:"var(--muted)",marginBottom:6}},
        "📅 Sutra na redu: ",e("strong",{style:{color:"var(--text)"}},dueTomorrow)," · ovaj tjedan: ",e("strong",{style:{color:"var(--text)"}},dueWeek)),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:18}},
        "🆕 Novih danas: ",e("strong",{style:{color:"var(--text)"}},introToday+"/"+SRS_NEW_PER_DAY)," · banka: ",e("strong",{style:{color:"var(--text)"}},newBank)),
      e("div",{style:{display:"flex",gap:10,justifyContent:"center"}},
        dueCards.length>0
          ?e("button",{className:"btn btn-gold",style:{padding:"10px 20px"},
              onClick:()=>{setSessionCards(dueCards.slice(0,20));setCur(0);setFlipped(false);setDone(false);setStats({easy:0,hard:0,again:0});awardedRef.current=false;setXpGained(0);}},
              "▶ Nastavi (+"+dueCards.length+")")
          :null,
        e("button",{className:"btn btn-g",style:{padding:"10px 20px"},onClick:onBack},"← Natrag")
      )
    )
  );

  const q=sessionCards[cur];
  const progress=Math.round((cur/sessionCards.length)*100);
  const isNew=!q._card;
  const daysOverdue=q._card?Math.max(0,today_ord()-q._card.due):null;

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Ponavljanje"),
      e("span",{style:{fontSize:12,color:"var(--muted)"}},(cur+1)+"/"+sessionCards.length)
    ),
    e("div",{style:{maxWidth:600,margin:"0 auto",padding:"24px 20px 80px"}},
      e("div",{style:{height:4,background:"var(--s3)",borderRadius:99,marginBottom:16,overflow:"hidden"}},
        e("div",{style:{height:"100%",width:progress+"%",background:"var(--teal)",borderRadius:99,transition:"width .3s"}})
      ),
      e("div",{style:{display:"flex",gap:6,marginBottom:14,alignItems:"center"}},
        e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
        isNew
          ?e("span",{style:{fontSize:11,color:"var(--blue)",background:"var(--blue-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"🆕 Novo · "+Math.min(introToday+1,SRS_NEW_PER_DAY)+"/"+SRS_NEW_PER_DAY+" danas")
          :daysOverdue>0
            ?e("span",{style:{fontSize:11,color:"var(--red)",background:"var(--red-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"⏰ Kasni "+daysOverdue+(daysOverdue===1?" dan":" dana"))
            :e("span",{style:{fontSize:11,color:"var(--green)",background:"var(--green-d)",padding:"2px 8px",borderRadius:99,fontWeight:700}},"📅 Na redu"),
        e("span",{style:{fontSize:11,color:"var(--muted)",marginLeft:"auto"}},"Interval: "+(q._card?.interval||0)+" dana")
      ),
      // Kartica
      e("div",{
        onClick:()=>setFlipped(f=>!f),
        style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",
          padding:"28px 24px",minHeight:200,cursor:"pointer",boxShadow:"var(--shadow)",
          marginBottom:16,userSelect:"none",position:"relative"
        }
      },
        e("div",{style:{position:"absolute",top:12,right:14,fontSize:11,color:"var(--muted)",fontWeight:600}},
          flipped?"↑ Odgovor":"↓ Klikni za odgovor"),
        e("div",{style:{fontSize:15,lineHeight:1.65,fontWeight:500,marginBottom:flipped?14:0}},renderQText(q.q)),
        flipped&&e("div",{style:{borderTop:"1px solid var(--bdr)",paddingTop:14}},
          e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:6}}, q.type==="proof"?"Rješenje:":"Točan odgovor:"),
          e("div",{style:{fontSize:15,fontWeight:700,color:"var(--green)",marginBottom:(q.exp||(q.why&&q.why.length)||(q.steps&&q.steps.length))?8:0}},
            q.type==="mc"
              ? [q.sol.cl+") ", renderOptText(q.opts?.["ABCDE".indexOf(q.sol.cl)]||"")]
              : ((q.sol&&q.sol.ans) ? renderOptText(String(q.sol.ans)) : "Vidi postupak \u2193")),
          (q.exp||(Array.isArray(q.why)&&q.why.length))&&e("div",{style:{fontSize:12,color:"var(--muted)",fontStyle:"italic",marginBottom:(q.steps&&q.steps.length)?8:0}}, e("span",{style:{marginRight:4}}, "💡"), renderOptText(q.exp||q.why[0])),
          (q.steps&&q.steps.length)&&e("details",{style:{marginTop:2}},
            e("summary",{style:{fontSize:12,color:"var(--blue)",cursor:"pointer",userSelect:"none",fontWeight:600,listStyle:"none"}},"Prikaži postupak"),
            e("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:6,maxHeight:240,overflowY:"auto"}},
              q.steps.filter(st=>st&&st.txt).map((st,i)=>
                e("div",{key:i,style:{fontSize:12.5,lineHeight:1.6,color:"var(--text)",paddingLeft:10,borderLeft:"2px solid var(--bdr)"}}, renderOptText(st.txt)))
            )
          )
        )
      ),
      // Gumbi za ocjenu
      flipped
        ?e("div",null,
            e("div",{style:{fontSize:12,color:"var(--muted)",textAlign:"center",marginBottom:8}},"Jesi li znao/la odgovor?"),
            e("div",{style:{display:"flex",gap:8}},
              e("button",{onClick:()=>answer(0),style:{flex:1,padding:"14px 8px",background:"var(--red-d)",border:"1px solid rgba(248,113,113,.4)",color:"var(--red)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"✗"),e("br"),e("span",{style:{fontSize:12}},"Nisam znao/la"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"(vraća se sutra)")),
              e("button",{onClick:()=>answer(1),style:{flex:1,padding:"14px 8px",background:"var(--gold-d)",border:"1px solid var(--gold-b)",color:"var(--gold)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"~"),e("br"),e("span",{style:{fontSize:12}},"Djelomično"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"("+Math.round((q._card?.interval||1)*((q._card?.ef||2.5)*0.8))+" dana)")),
              e("button",{onClick:()=>answer(2),style:{flex:1,padding:"14px 8px",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.4)",color:"var(--green)",fontSize:13,fontWeight:700,borderRadius:12,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.5}},
                e("span",null,"✓"),e("br"),e("span",{style:{fontSize:12}},"Znao/la sam!"),e("br"),e("span",{style:{fontSize:10,opacity:.7}},"("+Math.round((q._card?.interval||1)*(q._card?.ef||2.5))+" dana)"))
            ),
            e("div",{style:{textAlign:"center",fontSize:11,color:"var(--muted)",marginTop:6}},
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"1"),
              " Nisam znao · ",
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"2"),
              " Djelomično · ",
              e("kbd",{style:{background:"var(--s3)",border:"1px solid var(--bdr)",borderRadius:3,padding:"1px 5px",fontFamily:"monospace"}},"3"),
              " Znao sam"
            )
          )
        :e("div",{style:{textAlign:"center",color:"var(--muted)",fontSize:13,padding:"8px 0"}},
            "Klikni karticu pa ocijeni koliko ti je bilo lako")
    )
  );
}
function TopicFilterScreen({onStart,onBack}){
  const ALL_TOPICS=Object.keys(TOPIC_LABELS);
  // Grupiraj alias ključeve (geom/geo/3d→Geometrija) u jedan chip
  const TOPIC_GROUPS=(()=>{const m={};ALL_TOPICS.forEach(t=>{const l=TOPIC_LABELS[t];(m[l]=m[l]||[]).push(t);});return Object.keys(m).map(label=>({label,keys:m[label]}));})();
  const ALL_TYPES=[
    {key:"mc",  label:"Višestruki izbor", color:"sel-blue"},
    {key:"num", label:"Numerički",        color:"sel-blue"},
    {key:"sa",  label:"Kratki odgovor",   color:"sel-teal"},
    {key:"proof",label:"Dokaz/izvod",     color:"sel-teal"},
  ];
  const ALL_YEARS=[...new Set(Object.values(EXAMS).map(e=>e.year))].sort((a,b)=>b-a);
  const ALL_RAZINE=["A","B"];
  const ALL_SEASONS=["ljeto","jesen","zima"];

  const[selTopics,setSelTopics]=useState(new Set(ALL_TOPICS));
  const[selTypes,setSelTypes]=useState(new Set(["mc","num","sa","proof"]));
  const[selYears,setSelYears]=useState(new Set(ALL_YEARS));
  const[selRazine,setSelRazine]=useState(new Set(ALL_RAZINE));
  const[selSeasons,setSelSeasons]=useState(new Set(ALL_SEASONS));
  const[showPreview,setShowPreview]=useState(false);
  const ALL_DIFF=["lako","srednje","tesko"];
  const[selDiff,setSelDiff]=useState(new Set(ALL_DIFF));
  const[qCount,setQCount]=useState(0);

  function tog(set,setFn,val){
    setFn(prev=>{const next=new Set(prev);next.has(val)?next.delete(val):next.add(val);return next;});
  }
  function togAll(set,setFn,all){
    setFn(set.size===all.length?new Set():new Set(all));
  }

  const matchingQs=React.useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(exam=>{
      if(!selYears.has(exam.year)) return;
      if(!selSeasons.has(exam.season)) return;
      if(!selRazine.has(exam.razina)) return;
      exam.qs.forEach(q=>{
        if(!selTopics.has(q.topic||"ostalo")) return;
        if(!selTypes.has(q.type)) return;
        var _d=(q.points>=3)?"tesko":(q.points===2)?"srednje":"lako"; if(!selDiff.has(_d)) return;
        qs.push({...q,_examKey:exam.key,_examYear:exam.year,_examLabel:exam.label});
      });
    });
    return qs;
  },[selTopics,selTypes,selYears,selRazine,selSeasons,selDiff]);

  function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}

  function startSession(){
    if(matchingQs.length===0) return;
    const shuffled=shuffle(matchingQs).slice(0,qCount||60);
    onStart({
      key:"filter_session",year:"Filter",season:"session",razina:"B",
      label:"Tematska sesija",qs:shuffled,duration:60*60
    });
  }

  const typeStats={};
  matchingQs.forEach(q=>{typeStats[q.type]=(typeStats[q.type]||0)+1;});

  const seasonLabel=s=>s==="ljeto"?"☀️ Ljetni":s==="jesen"?"🍂 Jesenski":"❄️ Zimski";

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🎯 Vježbaj po temi")
    ),
    e("div",{style:{maxWidth:720,margin:"0 auto",padding:"20px 20px 60px"}},

      // Preview kartica — indigo gradijent
      e("div",{style:{
        borderRadius:16,padding:"20px 22px",marginBottom:22,
        background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
        display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden",
        flexWrap:"wrap"
      }},
        e("div",{style:{position:"absolute",right:-8,bottom:-14,fontSize:70,opacity:.05,
          lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"∑"),
        e("div",{style:{flex:"1 1 220px",minWidth:0}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:matchingQs.length===0?"rgba(255,255,255,.4)":"#fff",lineHeight:1,marginBottom:4}},matchingQs.length),
          e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",lineHeight:1.4}},
            matchingQs.length===0
              ?"Nema pitanja za odabrane filtere"
              :"pitanja pronađeno · "+Object.entries(typeStats).map(([t,n])=>(TLBL[t]||t)+": "+n).join(" · ")
          )
        ),
        e("button",{
          disabled:matchingQs.length===0,
          onClick:startSession,
          style:{background:matchingQs.length===0?"rgba(255,255,255,.12)":"#ffffff",
            color:matchingQs.length===0?"rgba(255,255,255,.45)":"#1e1040",
            border:"none",borderRadius:10,padding:"12px 22px",fontWeight:700,fontSize:14,
            cursor:matchingQs.length===0?"not-allowed":"pointer",
            fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0,
            boxShadow:matchingQs.length===0?"none":"0 4px 12px rgba(0,0,0,.25)"}
        },"▶ Pokreni "+(qCount?Math.min(matchingQs.length,qCount):Math.min(matchingQs.length,60)))
      ),

      // Filter: Razina
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Razina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selRazine.size===ALL_RAZINE.length?"var(--blue-b)":"var(--bdr)"),background:selRazine.size===ALL_RAZINE.length?"rgba(74,144,217,.22)":"var(--s1)",color:selRazine.size===ALL_RAZINE.length?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selRazine,setSelRazine,ALL_RAZINE)
          },"Obje razine"),
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selRazine.has("B")?"rgba(52,209,191,.3)":"var(--bdr)"),background:selRazine.has("B")?"rgba(52,209,191,.22)":"var(--s1)",color:selRazine.has("B")?"var(--teal)":"var(--muted)"},
            onClick:()=>tog(selRazine,setSelRazine,"B")
          },"B  -  Osnovna"),
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selRazine.has("A")?"var(--blue-b)":"var(--bdr)"),background:selRazine.has("A")?"rgba(74,144,217,.22)":"var(--s1)",color:selRazine.has("A")?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selRazine,setSelRazine,"A")
          },"A  -  Viša")
        )
      ),

      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Težina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selDiff.size===ALL_DIFF.length?"var(--blue-b)":"var(--bdr)"),background:selDiff.size===ALL_DIFF.length?"rgba(74,144,217,.22)":"var(--s1)",color:selDiff.size===ALL_DIFF.length?"var(--blue)":"var(--muted)"},onClick:()=>togAll(selDiff,setSelDiff,ALL_DIFF)},"Sve težine"),
          [["lako","Lako","var(--green)","rgba(80,200,120,.18)","rgba(80,200,120,.42)"],["srednje","Srednje","var(--gold)","var(--gold-d)","var(--gold-b)"],["tesko","Teško","var(--red)","var(--red-d)","rgba(248,113,113,.42)"]].map(function(d){var on=selDiff.has(d[0]);return e("div",{key:d[0],style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?d[4]:"var(--bdr)"),background:on?d[3]:"var(--s1)",color:on?d[2]:"var(--muted)"},onClick:()=>tog(selDiff,setSelDiff,d[0])},d[1]);})
        )
      ),

      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Broj zadataka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          [[10,"10"],[20,"20"],[30,"30"],[50,"50"],[0,"Sve"]].map(function(c){var on=qCount===c[0];return e("div",{key:c[1],style:{fontSize:11,fontWeight:600,padding:"4px 15px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"rgba(74,144,217,.22)":"var(--s1)",color:on?"var(--blue)":"var(--muted)"},onClick:()=>setQCount(c[0])},c[1]);})
        )
      ),

      // Filter: Teme
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Teme"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTopics.size===ALL_TOPICS.length?"var(--blue-b)":"var(--bdr)"),background:(selTopics.size===ALL_TOPICS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selTopics.size===ALL_TOPICS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selTopics,setSelTopics,ALL_TOPICS)
          },"Sve teme"),
          TOPIC_GROUPS.map(g=>{
            const on=g.keys.every(k=>selTopics.has(k));
            return e("div",{
              key:g.label,
              style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"rgba(74,144,217,.22)":"var(--s1)",color:on?"var(--blue)":"var(--muted)"},
              onClick:()=>{setSelTopics(p=>{const n=new Set(p);const all=g.keys.every(k=>n.has(k));g.keys.forEach(k=>all?n.delete(k):n.add(k));return n;});}
            },g.label);
          })
        )
      ),

      // Filter: Vrsta pitanja
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Vrsta zadatka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTypes.size===ALL_TYPES.length?"var(--blue-b)":"var(--bdr)"),background:(selTypes.size===ALL_TYPES.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selTypes.size===ALL_TYPES.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selTypes,setSelTypes,ALL_TYPES.map(t=>t.key))
          },"Sve vrste"),
          ALL_TYPES.map(t=>e("div",{
            key:t.key,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selTypes.has(t.key)?"var(--blue-b)":"var(--bdr)"),background:selTypes.has(t.key)?"rgba(74,144,217,.22)":"var(--s1)",color:selTypes.has(t.key)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selTypes,setSelTypes,t.key)
          },t.label))
        )
      ),

      // Filter: Rok
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Ispitni rok"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selSeasons.size===ALL_SEASONS.length?"var(--blue-b)":"var(--bdr)"),background:(selSeasons.size===ALL_SEASONS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selSeasons.size===ALL_SEASONS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selSeasons,setSelSeasons,ALL_SEASONS)
          },"Svi rokovi"),
          ALL_SEASONS.map(s=>e("div",{
            key:s,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selSeasons.has(s)?"var(--blue-b)":"var(--bdr)"),background:selSeasons.has(s)?"rgba(74,144,217,.22)":"var(--s1)",color:selSeasons.has(s)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selSeasons,setSelSeasons,s)
          },seasonLabel(s)))
        )
      ),

      // Filter: Godina
      e("div",{style:{marginBottom:18}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Ispitna godina"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("div",{
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selYears.size===ALL_YEARS.length?"var(--blue-b)":"var(--bdr)"),background:(selYears.size===ALL_YEARS.length)?"rgba(74,144,217,.22)":"var(--s1)",color:(selYears.size===ALL_YEARS.length)?"var(--blue)":"var(--muted)"},
            onClick:()=>togAll(selYears,setSelYears,ALL_YEARS)
          },"Sve godine"),
          ALL_YEARS.map(y=>e("div",{
            key:y,
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",border:"1px solid "+(selYears.has(y)?"var(--blue-b)":"var(--bdr)"),background:selYears.has(y)?"rgba(74,144,217,.22)":"var(--s1)",color:selYears.has(y)?"var(--blue)":"var(--muted)"},
            onClick:()=>tog(selYears,setSelYears,y)
          },y+"."))
        )
      ),

      // Pregled pitanja (sklopivo)
      matchingQs.length>0&&e("div",{style:{marginBottom:18}},
        e("div",{
          style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:10,cursor:"pointer",userSelect:"none",
            display:"flex",alignItems:"center",gap:8},
          onClick:()=>setShowPreview(p=>!p)
        },e("span",null,"Pregled pitanja"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),
          e("span",null,showPreview?"▲":"▼")),
        showPreview&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          matchingQs.slice(0,20).map((q,i)=>e("div",{key:i,style:{display:"flex",gap:8,alignItems:"flex-start",padding:"7px 10px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8}},
            e("span",{className:"qbadge "+(TBDG[q.type]||"b-mc"),style:{flexShrink:0}},TLBL[q.type]),
            e("span",{style:{color:"var(--muted)"}},q.q.slice(0,90)+(q.q.length>90?"...":""))
          )),
          matchingQs.length>20&&e("div",{style:{fontSize:11,color:"var(--muted)",padding:"6px 0"}},
            "...i još "+(matchingQs.length-20)+" pitanja")
        )
      )
    )
  );
}
function PDFReportScreen({userData,onBack}){
  const history=Array.isArray(userData?.history)?userData.history:[];
  const errors=Object.values(userData?.errorTracker||{})
    .filter(e=>e.count>0).sort((a,b)=>b.count-a.count).slice(0,8);
  const totalExams=history.length;
  const avgPct=totalExams?Math.round(history.reduce((s,h)=>s+h.pct,0)/totalExams):0;
  const lastFive=history.slice(-5);
  const trend=lastFive.length>=2
    ?Math.round(lastFive[lastFive.length-1].pct-lastFive[0].pct):null;

  // Teme stats iz historije
  const topicAcc={};
  history.forEach(h=>{
    if(!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([t,d])=>{
      if(!topicAcc[t]) topicAcc[t]={correct:0,total:0};
      topicAcc[t].correct+=d.correct||0;
      topicAcc[t].total+=d.total||0;
    });
  });
  const topicRows=Object.entries(topicAcc)
    .map(([t,v])=>({t,pct:v.total?Math.round(v.correct/v.total*100):null,total:v.total}))
    .filter(r=>r.pct!==null).sort((a,b)=>a.pct-b.pct);
  const weakTopics=topicRows.filter(r=>r.pct<60).slice(0,5);
  const strongTopics=topicRows.filter(r=>r.pct>=70).slice(-3).reverse();
  const today=new Date().toLocaleDateString("hr",{day:"numeric",month:"long",year:"numeric"});

  return e("div",{style:{maxWidth:700,margin:"0 auto",padding:"24px 20px 60px"}},
    // Nav
    e("div",{className:"nav no-print"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📄 PDF Izvještaj"),
      e("button",{className:"btn btn-gold no-print",style:{fontSize:13,padding:"6px 16px"},
        onClick:()=>window.print()
      },"🖨️ Ispiši / Spremi PDF")
    ),

    // PDF sadržaj
    e("div",{className:"pdf-report pdf-report-wrap"},
      // Zaglavlje
      e("div",{style:{
        display:"flex",justifyContent:"space-between",alignItems:"flex-start",
        borderRadius:18,padding:"22px 24px",marginBottom:22,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)"
      }},
        e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:4}},"Discere - "+SUBJECT.name),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:20,color:"var(--bg,#060910)",marginBottom:4}},"Izvještaj o napretku"),
          e("div",{style:{fontSize:12,color:"rgba(255,255,255,.6)"}},today)
        ),
        totalExams>0&&e("div",{style:{textAlign:"right"}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:36,color:"var(--blue)",lineHeight:1}},avgPct+"%"),
          e("div",{style:{fontSize:11,color:"var(--muted)"}},"prosječni rezultat")
        )
      ),

      // Sažetak  -  4 kartice
      e("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:24}},
        [
          {label:"Riješenih ispita",val:totalExams,col:"var(--blue)"},
          {label:"Prosječni %",val:avgPct+"%",col:avgPct>=70?"var(--green)":avgPct>=55?"var(--gold)":"var(--red)"},
          {label:"Trend (zadnjih 5)",val:trend!==null?(trend>0?"+"+trend+"%":trend+"%"):"-",
            col:trend>0?"var(--green)":trend<0?"var(--red)":"var(--muted)"},
          {label:"XP ukupno",val:(userData?.xp||0)+" XP",col:"var(--gold)"},
        ].map((item,i)=>e("div",{key:i,style:{
          background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,padding:"14px 12px",textAlign:"center"
        }},
          e("div",{style:{fontSize:20,fontWeight:800,color:item.col,fontFamily:"var(--fh)"}},item.val),
          e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2}},item.label)
        ))
      ),

      // Zadnjih 10 ispita
      totalExams>0&&e("div",{style:{marginBottom:24}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}},
          "Zadnjih "+Math.min(10,totalExams)+" ispita"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          history.slice(-10).reverse().map((h,i)=>{
            const col=h.pct>=70?"var(--green)":h.pct>=55?"var(--gold)":"var(--red)";
            return e("div",{key:i,style:{
              display:"flex",alignItems:"center",gap:10,
              padding:"6px 10px",background:"var(--s2)",borderRadius:"var(--r)"
            }},
              e("div",{style:{fontSize:12,color:"var(--muted)",minWidth:90}},h.date||""),
              e("div",{style:{flex:1,fontSize:12,fontWeight:500}},h.examLabel||""),
              e("div",{style:{fontSize:12,fontWeight:800,color:col,minWidth:44,textAlign:"right"}},h.pct+"%"),
              e("div",{style:{minWidth:16,height:16,borderRadius:99,background:col,opacity:.7}})
            );
          })
        )
      ),

      // Teme  -  slabe i jake
      topicRows.length>0&&e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}},
        weakTopics.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--red)",marginBottom:8}},
            "⚠️ Slabe teme"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
            weakTopics.map((r,i)=>e("div",{key:i,style:{
              display:"flex",justifyContent:"space-between",padding:"5px 8px",
              background:"var(--red-d)",borderRadius:"var(--r)",fontSize:12
            }},
              e("span",null,TOPIC_LABELS[r.t]||r.t),
              e("span",{style:{fontWeight:700,color:"var(--red)"}},r.pct+"%")
            ))
          )
        ),
        strongTopics.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--green)",marginBottom:8}},
            "✓ Jake teme"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
            strongTopics.map((r,i)=>e("div",{key:i,style:{
              display:"flex",justifyContent:"space-between",padding:"5px 8px",
              background:"var(--green-d)",borderRadius:"var(--r)",fontSize:12
            }},
              e("span",null,TOPIC_LABELS[r.t]||r.t),
              e("span",{style:{fontWeight:700,color:"var(--green)"}},r.pct+"%")
            ))
          )
        )
      ),

      // Najčešće greške
      errors.length>0&&e("div",{style:{marginBottom:24}},
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:8}},
          "Najčešće greške"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
          errors.map((err,i)=>e("div",{key:i,style:{
            display:"flex",alignItems:"flex-start",gap:8,padding:"6px 10px",
            background:"var(--s2)",borderRadius:"var(--r)"
          }},
            e("div",{style:{
              minWidth:22,height:22,borderRadius:99,background:"var(--red)",
              color:"var(--bg,#060910)",fontSize:10,fontWeight:800,
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0
            }},err.count+"×"),
            e("div",{style:{fontSize:12,lineHeight:1.4}},err.q)
          ))
        )
      ),

      // Footer
      e("div",{style:{
        borderTop:"1px solid var(--bdr)",paddingTop:12,marginTop:8,
        display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--muted)"
      }},
        e("span",null,"Discere · discere.app"),
        e("span",null,"Ispitna pitanja © NCVVO"),
        e("span",null,today)
      )
    ),

    // Print gumb dolje
    e("div",{className:"no-print",style:{textAlign:"center",marginTop:20}},
      e("button",{className:"btn btn-gold",style:{padding:"12px 32px",fontSize:15},
        onClick:()=>window.print()
      },"🖨️ Ispiši / Spremi kao PDF"),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8}},
        "U dijaloškom okviru odaberi 'Spremi kao PDF' umjesto pisača.")
    )
  );
}
function BookmarksScreen({onBack, onStartSession}){
  const[bookmarks,setBookmarks]=useState(()=>{
    try{return JSON.parse(DS.get("mat_bookmarks")||"{}");}catch{return {};}
  });
  const[filter,setFilter]=useState("sve");

  const bkList=Object.entries(bookmarks).map(([key,saved])=>{
    const parts=key.split("__");
    if(parts.length<2) return null;
    const examKey=parts[0], qidStr=parts[1];
    const exam=EXAMS[examKey];
    if(!exam) return null;
    const q=(exam.qs||[]).find(q=>String(q.id)===qidStr);
    if(!q) return null;
    return {key,examKey,q,saved};
  }).filter(Boolean);

  const topics=[...new Set(bkList.map(b=>b.q.topic).filter(Boolean))];
  const filtered=filter==="sve"?bkList:bkList.filter(b=>b.q.topic===filter);

  function removeBookmark(key){
    setBookmarks(prev=>{
      const next={...prev};
      delete next[key];
      DS.set("mat_bookmarks",JSON.stringify(next));
      return next;
    });
  }

  function startSession(){
    if(filtered.length===0) return;
    const qs=filtered.map(b=>({...b.q,_examKey:b.examKey}));
    const shuffled=[...qs].sort(()=>Math.random()-.5);
    onStartSession({
      key:"bookmarks_session",
      year:"Bookmarci",season:"session",razina:"B",
      label:"Bookmarci  -  vježbanje",
      qs:shuffled.slice(0,40),
      duration:60*60
    });
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔖 Spremljena pitanja")
    ),
    e("div",{style:{maxWidth:720,margin:"0 auto",padding:"28px 20px 80px"}},
      bkList.length===0
        ?e("div",{style:{textAlign:"center",padding:"60px 0"}},
            e("div",{style:{fontSize:48,opacity:.3,marginBottom:16}},"🔖"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Tu će se pojaviti označena pitanja"),
            e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:24,lineHeight:1.5,maxWidth:440,margin:"0 auto 24px"}},"Dok rješavaš zadatke, klikni 🔖 ikonu ili pritisni Shift+F da spremiš pitanje za kasniji pregled i ciljano ponavljanje."),
            e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
          )
        :e("div",null,
            // Header kartica — indigo gradijent
            e("div",{style:{
              borderRadius:16,padding:"20px 22px",marginBottom:20,
              background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
              display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-8,bottom:-14,fontSize:70,opacity:.05,
                lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"🔖"),
              e("div",{style:{flex:1}},
                e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--bg,#060910)",lineHeight:1,marginBottom:4}},bkList.length),
                e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)"}},
                  "bookmarkana pitanja · sesija do 40 pitanja nasumično")
              ),
              e("button",{
                onClick:startSession,
                style:{background:"var(--bg,#060910)",color:"#1e1040",border:"none",borderRadius:10,
                  padding:"10px 18px",fontWeight:700,fontSize:13,cursor:"pointer",
                  fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}
              },"▶ Pokreni")
            ),
            // Filter po temi
            topics.length>1&&e("div",{style:{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}},
              e("button",{
                onClick:()=>setFilter("sve"),
                style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
                  border:"1px solid "+(filter==="sve"?"var(--blue-b)":"var(--bdr)"),
                  background:filter==="sve"?"var(--blue-d)":"var(--s1)",
                  color:filter==="sve"?"var(--blue)":"var(--muted)"}
              },"Sve ("+bkList.length+")"),
              topics.map(t=>e("button",{key:t,
                onClick:()=>setFilter(t),
                style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
                  border:"1px solid "+(filter===t?"var(--blue-b)":"var(--bdr)"),
                  background:filter===t?"var(--blue-d)":"var(--s1)",
                  color:filter===t?"var(--blue)":"var(--muted)"}
              },TOPIC_LABELS[t]||t))
            ),
            // Lista bookmarkanih pitanja
            e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
              filtered.map(b=>{
                const q=b.q;
                const isMC=q.type==="mc";
                return e("div",{key:b.key,style:{
                  background:"var(--s1)",border:"1px solid var(--bdr)",
                  borderLeft:"3px solid var(--gold)",
                  borderRadius:"0 12px 12px 0",padding:"14px 16px"
                }},
                  e("div",{style:{display:"flex",alignItems:"flex-start",gap:10}},
                    e("div",{style:{flex:1}},
                      e("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:6,flexWrap:"wrap"}},
                        e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
                        e("span",{style:{fontSize:11,color:"var(--muted)"}},
                          b.examKey.replace("_ljeto_"," Ljetni ").replace("_jesen_"," Jesenski ").replace("_zima_"," Zimski "))
                      ),
                      e("div",{style:{fontSize:13,lineHeight:1.6,marginBottom:isMC?8:0}},q.q),
                      // Opcije za MC pitanja
                      isMC&&q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8}},
                        q.opts.map((opt,oi)=>{
                          const letter=LL[oi];
                          const isCorrect=q.sol?.cl===letter;
                          const hasFormula=false;
                          const optContent=hasFormula
                            ?renderOptText(opt)
                            :(opt&&opt.trim()&&opt.trim()!==letter+"."?renderOptText(opt):e("span",{style:{color:"var(--muted)",fontStyle:"italic"}},"(formula)"));
                          return e("div",{key:oi,style:{
                            fontSize:12,padding:"5px 10px",borderRadius:7,
                            background:isCorrect?"var(--green-d)":"var(--s2)",
                            border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"var(--bdr)"),
                            color:isCorrect?"var(--green)":"var(--muted)",
                            fontWeight:isCorrect?600:400,
                            display:"flex",alignItems:"center",gap:8
                          }},
                            e("span",{style:{fontWeight:700,minWidth:20,flexShrink:0}},letter+")"),
                            e("div",{style:{flex:1}},optContent),
                            isCorrect&&e("span",{style:{marginLeft:"auto"}},"✓")
                          );
                        })
                      ),
                      // Kratko objašnjenje
                      q.exp&&e("div",{style:{
                        marginTop:10,padding:"8px 12px",borderRadius:8,
                        background:"rgba(74,144,217,.06)",border:"1px solid rgba(74,144,217,.15)",
                        fontSize:12,color:"var(--text)",lineHeight:1.6
                      }},e("span",{style:{fontWeight:700,color:"var(--blue)",marginRight:6}},"💡"),q.exp)
                    ),
                    e("button",{
                      onClick:()=>removeBookmark(b.key),
                      title:"Ukloni bookmark",
                      style:{background:"none",border:"none",cursor:"pointer",
                        color:"var(--gold)",fontSize:18,padding:"2px 4px",flexShrink:0}
                    },"🔖")
                  )
                );
              })
            )
          )
    )
  );
}
function ScoreForecast({history}){
  var data=React.useMemo(function(){
    var hs=(history||[]).filter(function(h){return typeof h.pct==="number";});
    if(hs.length<2) return null;
    var recent=hs.slice(-12);
    var n=recent.length;
    var wsum=0,w=0;
    recent.forEach(function(h,i){var wt=i+1; wsum+=h.pct*wt; w+=wt;});
    var mu=wsum/w;
    var trend=recent[n-1].pct-recent[0].pct;
    mu=Math.max(0,Math.min(100,mu+trend*0.15));
    var mean=recent.reduce(function(a,h){return a+h.pct;},0)/n;
    var variance=recent.reduce(function(a,h){return a+(h.pct-mean)*(h.pct-mean);},0)/Math.max(1,n-1);
    var sd=Math.sqrt(variance);
    sd=Math.max(6,Math.min(18,sd));
    var seed=(Math.floor(mu*1000+sd*7+n)>>>0)||1;
    function rng(){seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}
    function gauss(){var u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
    var M=5000, counts={1:0,2:0,3:0,4:0,5:0};
    for(var k=0;k<M;k++){
      var x=mu+gauss()*sd; if(x<0)x=0; if(x>100)x=100;
      var g=x>=85?5:x>=70?4:x>=55?3:x>=40?2:1;
      counts[g]++;
    }
    var pc={}; [1,2,3,4,5].forEach(function(g){pc[g]=Math.round(counts[g]/M*100);});
    var p4=Math.round((counts[4]+counts[5])/M*100);
    var likely=[1,2,3,4,5].reduce(function(b,g){return counts[g]>counts[b]?g:b;},1);
    return {pc:pc,p4:p4,likely:likely,n:n};
  },[(history||[]).length,(history||[]).map(function(h){return h.pct;}).join(",")]);
  if(!data) return null;
  var COL={5:"#50c878",4:"#86c06a",3:"#e9b446",2:"#e08a3c",1:"#e05252"};
  return e("div",{style:{marginBottom:18,padding:"16px 16px 14px",borderRadius:14,background:"var(--s1)",border:"1px solid var(--bdr)"}},
    e("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}},
      e("div",{style:{fontFamily:"var(--fh)",fontSize:15}},"🎲 Procjena ocjene"),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginLeft:"auto"}},"Monte-Carlo · "+data.n+" ispita")),
    e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:14}},"5000 simuliranih matura na temelju tvojih rezultata"),
    e("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16}},
      e("div",{style:{textAlign:"center",flexShrink:0}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:38,lineHeight:1,color:data.p4>=50?"var(--green)":"var(--gold)"}},data.p4+"%"),
        e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:3,maxWidth:92,lineHeight:1.3}},"šanse za ocjenu 4 ili više")),
      e("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:6}},
        [5,4,3,2,1].map(function(g){var p=data.pc[g];return e("div",{key:g,style:{display:"flex",alignItems:"center",gap:8}},
          e("div",{style:{width:16,fontSize:12.5,fontWeight:800,color:COL[g],textAlign:"center",flexShrink:0}},g),
          e("div",{style:{flex:1,height:14,background:"var(--s2)",borderRadius:7,overflow:"hidden"}},e("div",{style:{height:"100%",width:(p>0?Math.max(3,p):0)+"%",background:COL[g],borderRadius:7,transition:"width .5s"}})),
          e("div",{style:{width:34,textAlign:"right",fontSize:11.5,fontWeight:700,color:"var(--muted)",flexShrink:0}},p+"%"));
        }))),
    e("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",borderRadius:9,background:"var(--s2)",fontSize:12,marginBottom:8}},
      e("span",null,"🎯"),e("span",{style:{color:"var(--text)"}},"Najvjerojatnija ocjena: "),e("span",{style:{fontWeight:800,color:COL[data.likely]}},data.likely)),
    e("div",{style:{fontSize:10.5,color:"var(--muted)",lineHeight:1.45,fontStyle:"italic"}},"Procjena se temelji na tvojim dosadašnjim rezultatima i ne jamči ishod na stvarnoj maturi.")
  );
}
function StatsScreen({userData,onBack,onPDFReport,onStartErrorSession}){
  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"📊 Statistika & napredak"),
      e("span",{className:"nsp"}),
      onPDFReport&&e("button",{className:"btn btn-g",style:{fontSize:12,padding:"5px 12px"},onClick:onPDFReport},"📄 PDF izvještaj")
    ),
    e("div",{className:"stats-screen"},
      e(KnowledgeMap,{userData,onTopic:function(k,label){if(!onStartErrorSession)return;var _rz=(typeof DS!=="undefined"&&DS.get)?DS.get("mat_razina"):null;var qs=[];Object.values(EXAMS).forEach(function(ex){if(_rz&&ex.razina&&ex.razina!==_rz)return;(ex.qs||[]).forEach(function(q){if((TOPIC_LABELS[q.topic]||q.topic)===label&&q.type!=="proof"&&q.type!=="sa"){qs.push(Object.assign({},q,{_examKey:ex.key}));}});});if(!qs.length)return;qs=qs.sort(function(){return Math.random()-0.5;}).slice(0,15);onStartErrorSession({key:"map_topic_session",year:"Mapa znanja",season:"session",razina:(userData&&userData.razina)||undefined,label:label,qs:qs,duration:qs.length*120});}}),
      e(AnalyticsPanel,{userData,defaultTab:"pregled",onBack,onStartErrorSession})
    )
  );
}
function AnalyticsPanel({userData,defaultTab,onFilter,onBack,onStartErrorSession}){
  const[tab,setTab]=React.useState(defaultTab||"pregled");
  const[drillTopic,setDrillTopic]=React.useState(null);
  const[calTooltip,setCalTooltip]=React.useState(null);
  const[openTopic,setOpenTopic]=React.useState(null);
  const[viewMonth,setViewMonth]=React.useState(()=>{
    const _p=v=>{if(!v)return null;const a=String(v).replace(/\./g,"").trim().split(/\s+/);if(a.length<3)return null;return new Date(+a[2],+a[1]-1,+a[0]);};
    let _l=null;(userData.history||[]).forEach(h=>{const d=_p(h.date);if(d&&(!_l||d>_l))_l=d;});
    const n=_l||new Date();return{y:n.getFullYear(),m:n.getMonth()};
  });
  const[distGrade,setDistGrade]=React.useState(null);
  const[targetGrade,setTargetGrade]=React.useState(()=>{try{return parseInt(DS.get("mat_target_grade"))||null}catch{return null}});
  const[aiPlanState,setAiPlanState]=React.useState("idle");
  const[aiPlan,setAiPlan]=React.useState(null);
  const[showUpgrade,setShowUpgrade]=React.useState(false);
  const history=userData.history||[];

  const topicStats={};
  history.forEach(h=>{
    if(!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([topic,data])=>{
      if(!topicStats[topic]) topicStats[topic]={correct:0,total:0};
      topicStats[topic].correct+=data.correct||0;
      topicStats[topic].total+=data.total||0;
    });
  });

  const topicList=Object.entries(topicStats)
    .map(([k,v])=>({key:k,label:TOPIC_LABELS[k]||k,...v,pct:v.total?Math.round(v.correct/v.total*100):null}))
    .filter(t=>t.total>0).sort((a,b)=>a.pct-b.pct);

  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);

  const simHistory=history.filter(h=>h.examMode===true||h.mode==="simulacija");
  const vjezbaHistory=history.filter(h=>!h.examMode&&h.mode!=="simulacija");
  const simAvg=simHistory.length?Math.round(simHistory.reduce((a,h)=>a+h.pct,0)/simHistory.length):null;
  const vjezbaAvg=vjezbaHistory.length?Math.round(vjezbaHistory.reduce((a,h)=>a+h.pct,0)/vjezbaHistory.length):null;
  const modeDiff=(simAvg!==null&&vjezbaAvg!==null)?simAvg-vjezbaAvg:null;

  const allTimes=history.flatMap(h=>h.qTimes?Object.values(h.qTimes):[]);
  const avgTime=allTimes.length?Math.round(allTimes.reduce((a,b)=>a+b,0)/allTimes.length):0;
  const avgPct=history.length?Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length):null;
  const best=history.length?Math.max(...history.map(h=>h.pct)):null;
  const totalQSolved=history.reduce((s,h)=>s+(h.total||0),0);

  // NCE podaci za Matematiku (NCVVO godišnji izvještaji — procjene)
  const NCE_DATA={
    2025:{avg:51,pass:68,label:"2024./2025."},
    2024:{avg:50,pass:67,label:"2023./2024."},
    2023:{avg:49,pass:66,label:"2022./2023."},
    2022:{avg:48,pass:65,label:"2021./2022."},
  };

  // Distribucija ocjena
  const gradeDist={1:0,2:0,3:0,4:0,5:0};
  history.forEach(h=>{if(h.grade>=1&&h.grade<=5)gradeDist[h.grade]++;});

  function getRecommendations(){
    const recs=[];
    const topErrors=errors.slice(0,3).filter(e=>e.count>=2);
    if(topErrors.length>0) recs.push({icon:"🔁",title:"Ponavljaš iste greške",desc:"Griješiš "+topErrors.length+"× na pitanjima o "+[...new Set(topErrors.map(e=>TOPIC_LABELS[e.topic]||e.topic))].join(", ")+". Pogledaj tab 'Greške'.",badge:"urgent"});
    if(modeDiff!==null&&modeDiff<-8) recs.push({icon:"⚖️",title:"Simulacija ti ide lošije",desc:"U simulaciji si za "+Math.abs(modeDiff)+"% slabiji/a nego u vježbanju. Uvježbaj više simulacija s timerom.",badge:"urgent"});
    topicList.slice(0,2).forEach(t=>{if(t.pct!==null&&t.pct<50) recs.push({icon:"🎯",title:"Uvježbaj: "+t.label,desc:"Trenutni rezultat "+t.pct+"% - ispod prolazne granice. Koristi 'Vježbaj po temi'.",badge:"urgent"});});
    const strong=[...topicList].reverse().find(t=>t.pct>=80);
    if(strong) recs.push({icon:"💪",title:"Snaga: "+strong.label,desc:strong.pct+"% - izvrsno! Nastavi ovim tempom.",badge:"good"});
    if(avgTime>60) recs.push({icon:"⏱",title:"Radi na brzini",desc:"Prosječno "+avgTime+"s po pitanju. Na maturi imaš ~4 min po pitanju za MAT B, ~3 min za MAT A.",badge:"tip"});
    if(history.length<3) recs.push({icon:"📄",title:"Riješi više ispita",desc:"Što više ispita riješiš, točnija je analiza slabih točaka. Cilj: barem 5 ispita.",badge:"tip"});
    if(best&&best>=85) recs.push({icon:"🏆",title:"Odličan rezultat!",desc:"Postigao/la si "+best+"% - odgovara ocjeni 5. Probaj i drugu razinu (A/B) za raznovrsnost.",badge:"good"});
    return recs.length?recs:[{icon:"📊",title:"Nastavi vježbati",desc:"Riješi još ispita za personalizirane preporuke.",badge:"tip"}];
  }

  const tabs=[
    {id:"pregled",label:"📈 Pregled"},
    {id:"teme",label:"🗺 Teme"},
    {id:"greške",label:"🔁 Greške"},
    {id:"teska",label:"💀 Najteža"},
    {id:"heatmap",label:"🗓 Kalendar"},
    {id:"savjeti",label:"💡 Savjeti"},
  ];
  const noData=e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"40px 24px",textAlign:"center"}},
    e("div",{style:{fontSize:48,opacity:.3,marginBottom:12}},"📊"),
    e("div",{style:{fontSize:15,fontWeight:600,marginBottom:6}},"Nema podataka za prikaz"),
    e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18,lineHeight:1.5}},"Riješi barem jedan ispit da se ovdje pojave statistike."),
    onBack&&e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
  );

  async function runAiPlan(){
    if(!IS_PRO){setShowUpgrade(true);return;}
    if(history.length===0)return;
    setAiPlanState("loading");
    const weak=topicList.slice(0,3).map(t=>t.label+" ("+t.pct+"%)").join(", ")||"nema podataka";
    const strong=[...topicList].reverse().slice(0,2).map(t=>t.label+" ("+t.pct+"%)").join(", ")||"nema podataka";
    const trend=history.length>=2?(history[history.length-1].pct-history[0].pct):0;
    const prompt=`Ti si mentor za hrvatsku državnu maturu iz matematike. Na temelju podataka učenika složi konkretan, izvediv plan učenja.
Podaci:
- Riješeno ispita: ${history.length}
- Prosjek: ${avgPct}% (rekord ${best}%)
- Trend (prvi do zadnji): ${trend>=0?"+":""}${trend}%
- Najslabije teme: ${weak}
- Najjače teme: ${strong}
- Prosječno vrijeme po pitanju: ${avgTime}s

Vrati ISKLJUČIVO JSON (bez markdown backtickova):
{"fokus":"jedna recenica glavni fokus","tjedni":[{"naslov":"Tjedan 1: ...","zadaci":["konkretan zadatak","konkretan zadatak"]}],"savjet":"jedan kratak motivacijski savjet"}
Plan 3-4 tjedna, fokus na najslabije teme, zadaci konkretni i izvedivi.`;
    try{
      const data=await __aiPost(prompt,1200);
      if(data?.error||!data?.content) throw new Error("api");
      const text=data?.content?.[0]?.text||"{}";
      setAiPlan(JSON.parse(text.replace(/```json|```/g,"").trim()));
      setAiPlanState("done");
    }catch(err){setAiPlanState("error");}
  }

  const aiPlanCard = history.length>0 && e("div",{style:{marginBottom:18}},
    e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
      e("span",null,"AI plan u\u010denja"),
      e("span",{style:{fontSize:9,fontWeight:800,letterSpacing:".06em",background:"var(--gold-d)",color:"var(--gold)",border:"1px solid var(--gold-b)",padding:"2px 7px",borderRadius:99}},"PRO"),
      e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
    ),
    e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,border:"1px solid var(--bdr)",background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",color:"#fff",padding:"20px 22px",minHeight:96}},
      e("div",{style:{position:"absolute",right:-10,bottom:-34,fontSize:130,fontFamily:"var(--fh)",opacity:.07,lineHeight:1,userSelect:"none",pointerEvents:"none"}},"\u2211"),
      aiPlanState==="loading"
        ? e("div",{style:{display:"flex",alignItems:"center",gap:12,position:"relative",zIndex:1}},
            e("div",{className:"spinner",style:{borderTopColor:"#fff",borderColor:"rgba(255,255,255,.25)"}}),
            e("div",{style:{fontSize:13,color:"rgba(255,255,255,.85)"}},"Claude analizira tvoje rezultate i sla\u017ee plan\u2026")
          )
        : (aiPlanState==="done"&&aiPlan)
          ? e("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:12}},
              aiPlan.fokus&&e("div",{style:{fontSize:13.5,lineHeight:1.55,color:"#fff"}},e("strong",null,"Fokus: "),aiPlan.fokus),
              Array.isArray(aiPlan.tjedni)&&e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                aiPlan.tjedni.map((w,i)=>e("div",{key:i,style:{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.14)",borderRadius:10,padding:"10px 13px"}},
                  e("div",{style:{fontSize:12.5,fontWeight:700,marginBottom:6,color:"#fff"}},w.naslov||("Tjedan "+(i+1))),
                  Array.isArray(w.zadaci)&&e("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:3}},
                    w.zadaci.map((z,j)=>e("li",{key:j,style:{fontSize:12,lineHeight:1.5,color:"rgba(255,255,255,.88)"}},z))
                  )
                ))
              ),
              aiPlan.savjet&&e("div",{style:{fontSize:12,fontStyle:"italic",color:"rgba(255,255,255,.7)",borderTop:"1px solid rgba(255,255,255,.15)",paddingTop:10}},"\uD83D\uDCA1 "+aiPlan.savjet),
              e("button",{onClick:runAiPlan,style:{alignSelf:"flex-start",marginTop:2,background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.25)",color:"#fff",fontFamily:"var(--fb)",fontSize:12,fontWeight:600,padding:"7px 14px",borderRadius:8,cursor:"pointer"}},"\u21bb Novi plan")
            )
          : e("div",{style:{position:"relative",zIndex:1}},
              e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6,color:"#fff"}},"\uD83E\uDD16 Personalizirani plan u\u010denja"),
              e("div",{style:{fontSize:13,lineHeight:1.6,color:"rgba(255,255,255,.8)",marginBottom:14,maxWidth:440}},
                "Claude analizira tvoj prosjek, trend i najslabije teme"+(topicList[0]?" (npr. "+topicList[0].label+")":"")+" pa sla\u017ee tjedni plan do mature."
              ),
              aiPlanState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:10}},__aiErrMsg()),
              e("button",{onClick:runAiPlan,style:{background:IS_PRO?"#fff":"rgba(255,255,255,.16)",color:IS_PRO?"#0b1b3a":"#fff",border:IS_PRO?"none":"1px solid rgba(255,255,255,.3)",fontFamily:"var(--fb)",fontSize:13.5,fontWeight:700,padding:"11px 22px",borderRadius:10,cursor:"pointer",boxShadow:IS_PRO?"0 6px 18px -6px rgba(0,0,0,.4)":"none"}},
                IS_PRO?"\u2728 Generiraj AI plan":planCta()
              )
            )
    )
  );

  const GOAL_THRESH={5:85,4:70,3:55,2:40};
  function setGoal(g){try{DS.set("mat_target_grade",String(g))}catch(e){}setTargetGrade(g);}
  const goalCard = e("div",{style:{marginBottom:18}},
    e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
      e("span",null,"Moj cilj"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
    !targetGrade
      ? e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"16px 18px"}},
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:12,lineHeight:1.5}},"Postavi ciljnu ocjenu \u2014 pratit \u0107u koliko ti jo\u0161 fali do nje."),
          e("div",{style:{display:"flex",gap:8}},
            [3,4,5].map(g=>e("button",{key:g,onClick:()=>setGoal(g),style:{flex:1,cursor:"pointer",fontFamily:"var(--fb)",fontWeight:700,fontSize:14,padding:"10px",borderRadius:10,border:"1px solid var(--bdr2)",background:"var(--s2)",color:GC[g]||"var(--text)"}},"Ocjena "+g))
          )
        )
      : (()=>{const th=GOAL_THRESH[targetGrade];const cur=avgPct||0;const gap=Math.max(0,th-cur);const reached=cur>=th;const pctToGoal=Math.min(100,Math.round(cur/th*100));return e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+(reached?"var(--green)":GC[targetGrade]),borderRadius:"0 14px 14px 0",padding:"16px 18px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:34,lineHeight:1,color:GC[targetGrade]}},targetGrade),
            e("div",{style:{flex:1}},
              e("div",{style:{fontSize:13,fontWeight:700}},"Cilj: ocjena "+targetGrade+" (\u2265"+th+"%)"),
              e("div",{style:{fontSize:12,color:reached?"var(--green)":"var(--muted)",marginTop:2}},reached?"🎉 Cilj dostignut \u2014 prosjek "+cur+"%!":"Trenutno "+cur+"% \u00b7 fali ti jo\u0161 +"+gap+"%")
            ),
            e("button",{onClick:()=>setGoal(null),style:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:11,fontFamily:"var(--fb)"}},"promijeni")
          ),
          e("div",{style:{height:7,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
            e("div",{style:{height:"100%",width:pctToGoal+"%",background:reached?"var(--green)":GC[targetGrade],borderRadius:99,transition:"width .8s ease"}}))
        );})()
  );

  const shareCard = history.length>0 && (()=>{
    const trend=history.length>=2?(history[history.length-1].pct-history[0].pct):0;
    const txt="📊 Moja matura-priprema (Discere):\n\u2022 "+history.length+" ispita rije\u0161eno\n\u2022 Prosjek "+(avgPct||0)+"% (rekord "+(best||0)+"%)\n"+(trend>0?"\u2022 Napredak +"+trend+"% 📈\n":"")+"maturiraj.hr";
    return e("div",{style:{marginBottom:18}},
      e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
        e("span",null,"Podijeli napredak"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
      e("div",{style:{position:"relative",overflow:"hidden",borderRadius:16,border:"1px solid var(--bdr)",background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",color:"#fff",padding:"18px 20px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}},
        e("div",{style:{position:"absolute",right:-8,bottom:-26,fontSize:96,fontFamily:"var(--fh)",opacity:.07,lineHeight:1,userSelect:"none",pointerEvents:"none"}},"\u2211"),
        e("div",{style:{flex:1,minWidth:160,position:"relative",zIndex:1}},
          e("div",{style:{fontFamily:"var(--fh)",fontSize:26,lineHeight:1}},(avgPct||0)+"% prosjek"),
          e("div",{style:{fontSize:12,color:"rgba(255,255,255,.8)",marginTop:4}},history.length+" ispita \u00b7 rekord "+(best||0)+"%"+(trend>0?" \u00b7 +"+trend+"% napredak":""))
        ),
        e("button",{onClick:ev=>{try{navigator.clipboard&&navigator.clipboard.writeText(txt);}catch(e){}const b=ev.currentTarget;const o=b.textContent;b.textContent="\u2713 Kopirano";setTimeout(()=>{b.textContent=o;},1800);},
          style:{position:"relative",zIndex:1,background:"#fff",color:"#0b1b3a",border:"none",cursor:"pointer",fontFamily:"var(--fb)",fontSize:13,fontWeight:700,padding:"10px 18px",borderRadius:10,whiteSpace:"nowrap"}},"📋 Kopiraj napredak")
      )
    );
  })();

  const topicTimes=(()=>{const acc={};history.forEach(h=>{if(!h.qTimes)return;const exam=EXAMS[h.examKey];if(!exam)return;Object.entries(h.qTimes).forEach(([qid,t])=>{const q=exam.qs.find(q=>String(q.id)===String(qid));if(!q||!q.topic)return;if(!acc[q.topic])acc[q.topic]={t:0,n:0};acc[q.topic].t+=(+t||0);acc[q.topic].n++;});});return Object.entries(acc).map(([k,v])=>({topic:k,label:TOPIC_LABELS[k]||k,avg:Math.round(v.t/v.n),n:v.n})).filter(x=>x.n>=2).sort((a,b)=>b.avg-a.avg);})();
  const TIME_BUDGET=120;

  function startErrorsSession(errList){
    if(!onStartErrorSession||!errList||!errList.length)return;
    const qs=errList.map(err=>{const exam=EXAMS[err.examKey];if(!exam)return null;const q=exam.qs.find(q=>String(q.id)===String(err.qid));return q?{...q,_examKey:err.examKey}:null;}).filter(Boolean);
    if(!qs.length)return;
    onStartErrorSession({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:qs.length*120});
  }

  function startTopicSession(topicKey,label){
    if(!onStartErrorSession)return;
    const qs=[];
    Object.entries(EXAMS).forEach(([ek,exam])=>{exam.qs.filter(q=>q.topic===topicKey).forEach(q=>qs.push({...q,_examKey:ek}));});
    if(!qs.length)return;
    const sel=[...qs].sort(()=>Math.random()-.5).slice(0,20);
    onStartErrorSession({key:"errors_session",year:label,season:"session",label:"Vježba: "+label,qs:sel,duration:sel.length*120});
  }

  return e("div",{className:"analytics-wrap"},
    showUpgrade&&e(UpgradeModal,{onClose:()=>setShowUpgrade(false)}),
    e("div",{className:"analytics-hdr"},
      e("span",{style:{fontSize:18}},"📊"),
      e("span",{className:"analytics-hdr-title"},"Moja statistika"),
      history.length>0&&e("span",{style:{marginLeft:"auto",fontSize:12,color:"var(--muted)"}},history.length+" ispita · "+totalQSolved+" pitanja")
    ),
    e("div",{className:"analytics-body"},
      // Hero stats
      history.length>0&&e("div",{style:{
        borderRadius:16,padding:"20px 22px 18px",marginBottom:18,
        background:"var(--s1)",border:"1px solid var(--bdr)",boxShadow:"var(--shadow-sm)",
        position:"relative",overflow:"hidden"
      }},
        e("div",{style:{position:"absolute",right:-6,bottom:-24,fontSize:100,fontFamily:"var(--fh)",opacity:.05,color:"var(--blue)",lineHeight:1,userSelect:"none",pointerEvents:"none"}},"∑"),
        e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:12,position:"relative",zIndex:1}},
          [{l:"Ispita",v:history.length,c:"var(--text)"},
           {l:"Pitanja",v:totalQSolved,c:"var(--text)"},
           {l:"Prosjek",v:(avgPct||0)+"%",c:avgPct>=70?"var(--green)":avgPct>=50?"var(--gold)":"var(--red)"},
           {l:"Rekord",v:(best||0)+"%",c:"var(--green)"},
           {l:"Streak",v:(userData.streak||0)+"🔥",c:"var(--gold)"}
          ].map((s,i)=>e("div",{key:i,style:{textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:24,color:s.c,lineHeight:1,marginBottom:3}},s.v),
            e("div",{style:{fontSize:10,fontWeight:600,letterSpacing:".05em",color:"var(--muted)",textTransform:"uppercase"}},s.l)
          ))
        )
      ),

      // Tab bar
      e("div",{className:"analytics-tab-bar"},
        tabs.map(t=>e("button",{key:t.id,className:"analytics-tab"+(tab===t.id?" active":""),onClick:()=>{setTab(t.id);setDrillTopic(null);}},t.label))
      ),

      /* ── PREGLED ── */
      tab==="pregled"&&e("div",null,
        goalCard,
        // Najslabija / Najjača tema
        topicList.length>=2&&e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:18}},
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 12px 12px 0",padding:"14px 16px"}},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--red)",marginBottom:4}},"Najslabija tema"),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:3}},topicList[0].label),
            e("div",{style:{fontSize:22,fontWeight:800,color:"var(--red)",fontFamily:"var(--fh)"}},(topicList[0].pct||0)+"%"),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},topicList[0].correct+"/"+topicList[0].total+" točno")
          ),
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--green)",borderRadius:"0 12px 12px 0",padding:"14px 16px"}},
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"var(--green)",marginBottom:4}},"Najjača tema"),
            e("div",{style:{fontWeight:700,fontSize:13,marginBottom:3}},topicList[topicList.length-1].label),
            e("div",{style:{fontSize:22,fontWeight:800,color:"var(--green)",fontFamily:"var(--fh)"}},(topicList[topicList.length-1].pct||0)+"%"),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},topicList[topicList.length-1].correct+"/"+topicList[topicList.length-1].total+" točno")
          )
        ),
        aiPlanCard,
        // NCE usporedba
        history.length>0&&(()=>{
          const userAvg=avgPct||0;
          const latestYear=Math.max(...history.map(h=>parseInt((h.examKey||"").split("_")[0])||2024));
          const nceBase=NCE_DATA[latestYear]||NCE_DATA[2024];
          const razCount={A:0,B:0};history.forEach(h=>{(h.examKey||"").includes("_A")?razCount.A++:razCount.B++;});
          const dominRaz=razCount.A>razCount.B?"A":"B";
          const nce={...nceBase,avg:Math.max(0,Math.round(nceBase.avg+(dominRaz==="A"?-4:2)))};
          const diff=userAvg-(nce?.avg||50);
          const diffColor=diff>=0?"var(--green)":"var(--red)";
          return e("div",{style:{marginBottom:20}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},e("span",null,"Usporedba s NCE prosjekom ("+dominRaz+" razina)"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
            e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"18px 20px"}},
              e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}},
                e("div",{style:{textAlign:"center",padding:"10px",background:"var(--s2)",borderRadius:"var(--r)"}},e("div",{style:{fontSize:24,fontWeight:800,color:"var(--blue)",fontFamily:"var(--fh)"}},userAvg+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Tvoj prosjek")),
                e("div",{style:{textAlign:"center",padding:"10px",background:"var(--s2)",borderRadius:"var(--r)"}},e("div",{style:{fontSize:24,fontWeight:800,color:"var(--muted)",fontFamily:"var(--fh)"}},(nce?.avg||50)+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"NCE prosjek")),
                e("div",{style:{textAlign:"center",padding:"10px",background:diff>=0?"var(--green-d)":"var(--red-d)",borderRadius:"var(--r)",border:"1px solid "+(diff>=0?"rgba(61,214,140,.2)":"rgba(248,113,113,.2)")}},e("div",{style:{fontSize:24,fontWeight:800,color:diffColor,fontFamily:"var(--fh)"}},(diff>=0?"+":"")+diff+"%"),e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Razlika"))
              ),
              [["Ti - "+userAvg+"%",userAvg,"var(--blue)"],["NCE prosjek - "+(nce?.avg||50)+"%",nce?.avg||50,"var(--muted)"],["Prolaznost - "+(nce?.pass||67)+"%",nce?.pass||67,"var(--gold)"]].map(([lbl,pct,col],i)=>
                e("div",{key:i,style:{marginBottom:6}},
                  e("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted)",marginBottom:2}},e("span",null,lbl.split(" - ")[0]),e("span",null,lbl.split(" - ")[1])),
                  e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},e("div",{style:{height:"100%",width:Math.min(100,pct)+"%",background:col,borderRadius:99,transition:"width 1s ease"}}))
                )
              ),
              e("div",{style:{fontSize:11,color:"var(--muted)",borderTop:"1px solid var(--bdr)",paddingTop:8,marginTop:6}},
                diff>=10?"🏆 Significantno iznad NCE prosjeka!":diff>=0?"✅ Iznad NCE prosjeka za "+(diff>=0?"+":"")+diff+"%.":diff>=-10?"⚠️ Ispod NCE prosjeka za "+Math.abs(diff)+"%.":" 📚 Daleko ispod NCE prosjeka - intenzivno vježbanje preporučeno.",
                e("span",{style:{float:"right",fontSize:10}},"Izvor: NCVVO, "+(nce?.label||"2023./2024.")+" · "+dominRaz+" razina (procjena)")
              )
            )
          );
        })(),
        // Trend + predikcija
        history.length>=2&&e("div",{style:{marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Trend rezultata"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"trend-wrap"},e(TrendChart,{history}))
        ),
        history.length>=2&&e("div",{style:{marginBottom:18}},e(GradePrediction,{history})),
        history.length>=2&&e(ScoreForecast,{history}),
        // Sim vs vježbanje
        (simHistory.length>0||vjezbaHistory.length>0)&&e("div",{style:{marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Simulacija vs Vježbanje"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:modeDiff!==null?12:0}},
            // Simulacija kartica
            e("div",{style:{
              background:"linear-gradient(135deg,rgba(248,113,113,.08),rgba(248,113,113,.03))",
              border:"1px solid rgba(248,113,113,.2)",borderRadius:14,padding:"18px 16px",position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-6,top:-8,fontSize:48,opacity:.07,lineHeight:1,userSelect:"none"}},"🎓"),
              e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
                color:"var(--red)",marginBottom:12}},"Simulacija"),
              simHistory.length===0
                ?e("div",{style:{fontSize:12,color:"var(--muted)",padding:"8px 0"}},"Još nisi rješavao/la simulaciju.")
                :e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
                  e("div",null,
                    e("div",{style:{fontFamily:"var(--fh)",fontSize:32,fontWeight:400,color:"var(--red)",lineHeight:1}},simAvg+"%"),
                    e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Prosječni rezultat")
                  ),
                  e("div",{style:{display:"flex",gap:16}},
                    e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},simHistory.length),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"ispita")
                    ),
                    [...simHistory].pop()&&e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},
                        [...simHistory].pop().pct+"%"),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"zadnji")
                    )
                  ),
                  e("div",{style:{height:4,background:"rgba(248,113,113,.15)",borderRadius:99,overflow:"hidden"}},
                    e("div",{style:{height:"100%",width:Math.min(100,simAvg||0)+"%",
                      background:"var(--red)",borderRadius:99,transition:"width .6s"}})
                  )
                )
            ),
            // Vježbanje kartica
            e("div",{style:{
              background:"linear-gradient(135deg,rgba(74,144,217,.08),rgba(74,144,217,.03))",
              border:"1px solid rgba(74,144,217,.2)",borderRadius:14,padding:"18px 16px",position:"relative",overflow:"hidden"
            }},
              e("div",{style:{position:"absolute",right:-6,top:-8,fontSize:48,opacity:.07,lineHeight:1,userSelect:"none"}},"🎯"),
              e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
                color:"var(--blue)",marginBottom:12}},"Vježbanje"),
              vjezbaHistory.length===0
                ?e("div",{style:{fontSize:12,color:"var(--muted)",padding:"8px 0"}},"Još nisi vježbao/la.")
                :e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
                  e("div",null,
                    e("div",{style:{fontFamily:"var(--fh)",fontSize:32,fontWeight:400,color:"var(--blue)",lineHeight:1}},vjezbaAvg+"%"),
                    e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Prosječni rezultat")
                  ),
                  e("div",{style:{display:"flex",gap:16}},
                    e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},vjezbaHistory.length),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"ispita")
                    ),
                    [...vjezbaHistory].pop()&&e("div",null,
                      e("div",{style:{fontSize:16,fontWeight:700,color:"var(--text)"}},
                        [...vjezbaHistory].pop().pct+"%"),
                      e("div",{style:{fontSize:10,color:"var(--muted)"}},"zadnji")
                    )
                  ),
                  e("div",{style:{height:4,background:"rgba(74,144,217,.15)",borderRadius:99,overflow:"hidden"}},
                    e("div",{style:{height:"100%",width:Math.min(100,vjezbaAvg||0)+"%",
                      background:"var(--blue)",borderRadius:99,transition:"width .6s"}})
                  )
                )
            )
          ),
          modeDiff!==null&&e("div",{style:{
            display:"flex",alignItems:"center",gap:10,padding:"10px 14px",
            background:modeDiff<-5?"rgba(248,113,113,.06)":modeDiff>5?"rgba(61,214,140,.06)":"rgba(74,144,217,.06)",
            border:"1px solid "+(modeDiff<-5?"rgba(248,113,113,.2)":modeDiff>5?"rgba(61,214,140,.2)":"rgba(74,144,217,.2)"),
            borderRadius:10,fontSize:12
          }},
            e("span",{style:{fontSize:16}},modeDiff<-5?"⚠️":modeDiff>5?"🏆":"✅"),
            e("span",{style:{color:"var(--text)",lineHeight:1.5}},
              modeDiff<-5
                ?e("span",null,e("strong",null,"Razlika od "+Math.abs(modeDiff)+"%.")," Simulacija ti ide lošije - uvježbaj više ispita s timerom.")
                :modeDiff>5
                  ?e("span",null,e("strong",null,"Simulacija ti ide odlično!")," Za "+Math.abs(modeDiff)+"% bolji/a si od vježbanja.")
                  :e("span",null,e("strong",null,"Mala razlika između modova.")," Nastavi redovito.")
            )
          )
        ),
        // Distribucija ocjena
        history.length>0?e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"18px 20px",marginBottom:18}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Distribucija ocjena"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"flex",gap:8,alignItems:"flex-end",height:100,paddingTop:20}},
            [1,2,3,4,5].map(g=>{
              const cnt=gradeDist[g]||0;
              const maxCnt=Math.max(...Object.values(gradeDist),1);
              const h=Math.round((cnt/maxCnt)*64);
              const isSel=distGrade===g;
              return e("div",{key:g,onClick:()=>cnt>0&&setDistGrade(isSel?null:g),style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:cnt>0?"pointer":"default",opacity:(distGrade&&!isSel)?.45:1,transition:"opacity .15s"}},
                cnt>0&&e("div",{style:{fontSize:11,fontWeight:700,color:GC[g]||"var(--muted)"}},cnt),
                e("div",{style:{width:"100%",height:h||4,background:cnt>0?(GC[g]||"var(--blue)"):"var(--s3)",borderRadius:"6px 6px 2px 2px",transition:"height .5s cubic-bezier(.22,1,.36,1),box-shadow .15s",minHeight:4,maxWidth:64,marginLeft:"auto",marginRight:"auto",boxShadow:isSel?"0 0 0 2px var(--text)":"none"}}),
                e("div",{style:{fontSize:12,fontWeight:700,color:GC[g]||"var(--muted)"}},GLBL[g]?.charAt(0)||g)
              );
            })
          )
        ):e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"40px 24px",marginBottom:18,textAlign:"center"}},
          e("div",{style:{fontSize:48,opacity:.3,marginBottom:12}},"📊"),
          e("div",{style:{fontSize:15,fontWeight:600,marginBottom:6}},"Statistika će se pojaviti ovdje"),
          e("div",{style:{fontSize:13,color:"var(--muted)",marginBottom:18,lineHeight:1.5}},"Riješi prvi ispit da vidiš svoju distribuciju ocjena, prosjek, povijest i personalizirane preporuke."),
          e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
        ),
        distGrade&&e("div",{style:{marginBottom:18,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:12,padding:"12px 14px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},
            e("span",{style:{fontSize:12,fontWeight:700,color:GC[distGrade]||"var(--text)"}},"Ispiti s ocjenom "+distGrade+" ("+(GLBL[distGrade]||"")+")"),
            e("button",{onClick:()=>setDistGrade(null),style:{marginLeft:"auto",background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:12,fontFamily:"var(--fb)"}},"✕ ukloni filter")
          ),
          [...history].reverse().filter(h=>h.grade===distGrade).map((h,i)=>e("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,fontSize:12,padding:"6px 0",borderBottom:"1px solid var(--bdr)"}},
            e("span",{style:{fontWeight:600,flex:1}},h.examLabel),
            e("span",{style:{color:"var(--muted)"}},h.date),
            e("span",{style:{fontWeight:700,color:GC[distGrade]}},h.pct+"%")
          ))
        ),
        shareCard,
        // Povijest
        history.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Povijest ispita"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"history-list"},
            [...history].reverse().slice(0,8).map((h,i)=>
              e("div",{key:i,className:"history-item"},
                e("div",{className:"history-grade",style:{color:GC[h.grade]||"var(--gold)"}},h.grade),
                e("div",{className:"history-info"},
                  e("strong",{style:{fontSize:13,display:"block",marginBottom:2}},h.examLabel),
                  e("span",{style:{fontSize:11,color:"var(--muted)"}},h.date+" · "+h.pct+"% · "+h.cor+"/"+h.total+" točnih"+(h.mode?" · "+h.mode:""))
                ),
                e("div",{className:"history-bar-wrap"},e("div",{className:"history-bar",style:{width:h.pct+"%",background:GC[h.grade]||"var(--gold)"}})),
                e("div",{style:{fontSize:18,fontWeight:800,color:GC[h.grade]||"var(--gold)",minWidth:44,textAlign:"right"}},h.pct+"%")
              )
            )
          )
        )
      ),

      /* ── TEME ── */
      tab==="teme"&&drillTopic&&(()=>{
        const topicLabel=TOPIC_LABELS[drillTopic]||drillTopic;
        const tStat=topicStats[drillTopic]||{correct:0,total:0};
        const tPct=tStat.total?Math.round(tStat.correct/tStat.total*100):0;
        const tColor=tPct>=70?"var(--green)":tPct>=50?"var(--gold)":"var(--red)";
        const allQs=[];
        Object.values(EXAMS).forEach(exam=>{exam.qs.filter(q=>q.topic===drillTopic).forEach(q=>allQs.push({q,exam}));});
        const wrongOnTopic=Object.values(userData.errorTracker||{}).filter(er=>er.count>0&&er.topic===drillTopic).sort((a,b)=>b.count-a.count);
        return e("div",null,
          e("button",{onClick:()=>setDrillTopic(null),style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",color:"var(--text)",cursor:"pointer",marginBottom:14}},"← Natrag na teme"),
          e("div",{style:{background:"linear-gradient(135deg,var(--blue-d),transparent)",border:"1px solid var(--blue-b)",borderRadius:14,padding:"18px 20px",marginBottom:18,position:"relative",overflow:"hidden"}},
            e("div",{style:{position:"absolute",right:-4,top:-8,fontSize:60,opacity:.06,color:"var(--blue)",lineHeight:1,userSelect:"none",pointerEvents:"none"}},"∑"),
            e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--blue)",marginBottom:6}},"Tema"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:22,fontWeight:400,marginBottom:12}},topicLabel),
            e("div",{style:{display:"flex",gap:16,alignItems:"flex-end",marginBottom:14}},
              e("div",null,
                e("div",{style:{fontFamily:"var(--fh)",fontSize:40,fontWeight:400,color:tColor,lineHeight:1}},tPct+"%"),
                e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:4}},tStat.correct+"/"+tStat.total+" točnih")
              ),
              e("div",{style:{flex:1,paddingBottom:4}},
                e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:6}},
                  e("div",{style:{height:"100%",width:tPct+"%",background:tColor,borderRadius:99,transition:"width .5s"}})
                ),
                e("div",{style:{fontSize:11,color:"var(--muted)"}},tPct>=70?"✅ Odlično — iznad prolazne granice":tPct>=50?"⚠️ Prolazno — ima prostora za napredak":"🔴 Ispod prolazne granice — treba uvježbati")
              )
            ),
            onStartErrorSession&&e("button",{onClick:()=>startTopicSession(drillTopic,topicLabel),
              style:{width:"100%",border:"none",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:10,padding:"11px",color:"#fff",fontSize:13.5,fontWeight:700,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",boxShadow:"0 6px 16px -8px rgba(45,106,212,.5)"}},"🎯 Vježbaj ovu temu")
          ),
          wrongOnTopic.length>0&&e("div",{style:{marginBottom:18}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10,display:"flex",alignItems:"center",gap:8}},e("span",null,"Tvoje greške na ovu temu ("+wrongOnTopic.length+")"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
            e("div",{style:{display:"flex",flexDirection:"column",gap:6}},
              wrongOnTopic.slice(0,10).map((er,i)=>e("div",{key:i,style:{display:"flex",gap:10,alignItems:"flex-start",background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 10px 10px 0",padding:"10px 13px"}},
                e("div",{style:{width:22,height:22,borderRadius:6,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--red-d)",color:"var(--red)",fontSize:10,fontWeight:700}},er.count+"×"),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{fontSize:12.5,lineHeight:1.5}},parseMath(er.q)||er.q),
                  er.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},"Zadnji put: "+er.lastDate)
                )
              ))
            )
          ),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Pitanja iz baze ("+allQs.length+")"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{className:"drill-q-list"},
            allQs.slice(0,30).map(({q,exam},i)=>{
              const seasonShort=exam.season==="ljeto"?"☀️":exam.season==="jesen"?"🍂":"❄️";
              const ans=(q.type==="mc"&&q.sol&&q.sol.cl)?(q.sol.cl+" — "+(q.opts[LL.indexOf(q.sol.cl)]||"")):((q.sol&&(q.sol.ans||q.sol.ex))||null);
              return e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:12,padding:"13px 15px",marginBottom:6}},
                e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"}},
                  e("span",{style:{fontSize:11}},seasonShort),
                  e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600}},exam.year+" · "+exam.label),
                  e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:99,background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},exam.razina==="A"?"Viša (A)":"Osnovna (B)"),
                  q.type&&q.type!=="mc"&&e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:99,background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--muted)"}},q.type==="proof"?"Dokaz":"Otvoreno")
                ),
                e("div",{style:{fontSize:13,lineHeight:1.55}},parseMath(q.q)||q.q),
                ans&&e("details",{style:{marginTop:8}},
                  e("summary",{style:{fontSize:11,color:"var(--blue)",cursor:"pointer",userSelect:"none",listStyle:"none"}},"Prikaži točan odgovor"),
                  e("div",{style:{marginTop:6,fontSize:12,color:"var(--green)",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.2)",borderRadius:6,padding:"6px 10px"}},"✓ ",e("strong",null,typeof ans==="string"?ans:String(ans)))
                )
              );
            }),
            allQs.length>30&&e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",padding:"12px",background:"var(--s2)",borderRadius:10,marginTop:4}},"Prikazano 30 od "+allQs.length+" pitanja")
          )
        );
      })(),
      tab==="teme"&&!drillTopic&&(topicList.length===0?noData:
        e("div",null,
          e("div",{style:{display:"flex",gap:14,marginBottom:14,fontSize:11,color:"var(--muted)",alignItems:"center",flexWrap:"wrap"}},
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--green)"}}),e("span",null,"≥70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--gold)"}}),e("span",null,"50-70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},e("div",{style:{width:10,height:10,borderRadius:2,background:"var(--red)"}}),e("span",null,"<50%")),
            e("div",{style:{marginLeft:"auto"}},"Sortirano: najslabije prvo")
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            topicList.map(t=>{
              const col=t.pct>=70?"var(--green)":t.pct>=50?"var(--gold)":"var(--red)";
              return e("div",{key:t.key,
                onClick:()=>setDrillTopic(t.key),
                style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+col,borderRadius:"0 12px 12px 0",padding:"12px 14px",cursor:"pointer",transition:"background .15s,border-color .15s"},
                onMouseEnter:ev=>{ev.currentTarget.style.background="var(--s2)";},
                onMouseLeave:ev=>{ev.currentTarget.style.background="";}
              },
                e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
                  e("div",{style:{flex:1,minWidth:0,fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t.label),
                  e("div",{style:{fontFamily:"var(--fh)",fontSize:15,fontWeight:400,color:col,flexShrink:0}},t.pct+"%"),
                  e("div",{style:{fontSize:14,color:"var(--muted)",flexShrink:0}},"›")
                ),
                e("div",{style:{height:6,background:"var(--s3)",borderRadius:99,overflow:"hidden",marginBottom:8}},
                  e("div",{style:{height:"100%",width:t.pct+"%",background:col,borderRadius:99,transition:"width .5s cubic-bezier(.4,0,.2,1)"}})
                ),
                e("div",{style:{display:"flex",alignItems:"center",gap:8}},
                  e("div",{style:{fontSize:11,color:"var(--muted)",flex:1}},t.correct+"/"+t.total+" točnih"),
                  onStartErrorSession&&e("button",{onClick:ev=>{ev.stopPropagation();startTopicSession(t.key,t.label);},
                    style:{border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",cursor:"pointer",fontFamily:"var(--fb)",fontSize:11.5,fontWeight:700,borderRadius:8,padding:"6px 12px",flexShrink:0}},
                    "🎯 Vježbaj temu")
                )
              );
            })
          ),
          e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:14,lineHeight:1.5}},"Prikazane su teme koje si već vježbao/la. Riješi više ispita za potpuniju sliku.")
        )
      ),

      /* ── GREŠKE ── */
      tab==="greške"&&(errors.length===0
        ?(history.length===0
          ?noData
          :e("div",{style:{textAlign:"center",padding:"40px 0"}},
              e("div",{style:{fontSize:48,marginBottom:12}},"🎉"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:6}},"Nema ponovljenih grešaka"),
              e("div",{style:{fontSize:13,color:"var(--muted)"}},"Odličan rad - nastavi ovim tempom!")
            )
          )
        :(()=>{
            // Grupiraj po razini → temi
            const byRazina={A:{label:"Viša razina (A)",errors:[],col:"var(--blue)",bg:"var(--blue-d)",bdr:"var(--blue-b)"},
                            B:{label:"Osnovna razina (B)",errors:[],col:"var(--teal)",bg:"var(--teal-d)",bdr:"rgba(52,209,191,.25)"}};
            errors.forEach(err=>{
              const razina=err.examKey?.includes("_A")?"A":"B";
              byRazina[razina].errors.push(err);
            });
            const totalErrors=errors.reduce((s,e)=>s+e.count,0);
            const activeRaz=["A","B"].filter(r=>byRazina[r].errors.length>0);

            return e("div",null,
              // Summary
              e("div",{style:{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}},
                [{l:"Pitanja s greškama",v:errors.length,c:"var(--red)"},
                 {l:"Ukupno pogrešnih",v:totalErrors,c:"var(--gold)"},
                 {l:"Tema zahvaćeno",v:[...new Set(errors.map(e=>e.topic))].length,c:"var(--blue)"}
                ].map((s,i)=>e("div",{key:i,style:{flex:"1 1 80px",background:"var(--s1)",
                  border:"1px solid var(--bdr)",borderRadius:12,padding:"12px 14px",textAlign:"center"}},
                  e("div",{style:{fontFamily:"var(--fh)",fontSize:24,color:s.c,lineHeight:1,marginBottom:3}},s.v),
                  e("div",{style:{fontSize:10,fontWeight:600,letterSpacing:".05em",color:"var(--muted)",textTransform:"uppercase"}},s.l)
                ))
              ),

              onStartErrorSession&&e("button",{onClick:()=>startErrorsSession(errors.slice(0,40)),
                style:{width:"100%",marginBottom:18,border:"none",cursor:"pointer",fontFamily:"var(--fb)",
                  borderRadius:12,padding:"13px 18px",color:"#fff",fontSize:14,fontWeight:700,
                  background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",
                  boxShadow:"0 8px 20px -8px rgba(45,106,212,.5)",display:"flex",alignItems:"center",justifyContent:"center",gap:8}},
                "🎯 Vježbaj sve greške ("+Math.min(errors.length,40)+")"),

              // Razine
              ["A","B"].map(razina=>{
                const rd=byRazina[razina];
                if(rd.errors.length===0) return null;

                // Grupiraj po temi unutar razine
                const byTopic={};
                rd.errors.forEach(err=>{
                  const t=err.topic||"ostalo";
                  if(!byTopic[t]) byTopic[t]={topic:t,label:TOPIC_LABELS[t]||t,errors:[],totalCount:0};
                  byTopic[t].errors.push(err);
                  byTopic[t].totalCount+=err.count;
                });
                const topicGroups=Object.values(byTopic).sort((a,b)=>b.totalCount-a.totalCount);
                const razinaTotalErrors=rd.errors.reduce((s,e)=>s+e.count,0);
                const isRazinaOpen=activeRaz.length===1||openTopic===("razina_"+razina);

                return e("div",{key:razina,style:{marginBottom:12}},
                  // Razina header
                  e("div",{
                    onClick:()=>setOpenTopic(o=>o===("razina_"+razina)?null:("razina_"+razina)),
                    style:{
                      display:"flex",alignItems:"center",gap:12,
                      padding:"14px 18px",cursor:"pointer",
                      background:isRazinaOpen?"var(--s2)":"var(--s1)",
                      border:"1px solid var(--bdr)",
                      borderLeft:"4px solid "+rd.col,
                      borderRadius:isRazinaOpen?"0 14px 0 0":"0 14px 14px 0",
                      transition:"all .15s"
                    },
                    onMouseEnter:ev=>{if(!isRazinaOpen)ev.currentTarget.style.background="var(--s2)"},
                    onMouseLeave:ev=>{if(!isRazinaOpen)ev.currentTarget.style.background="var(--s1)"}
                  },
                    e("div",{style:{
                      width:36,height:36,borderRadius:10,flexShrink:0,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      background:rd.bg,border:"1px solid "+rd.bdr,
                      fontSize:14,fontWeight:800,color:rd.col
                    }},razina),
                    e("div",{style:{flex:1}},
                      e("div",{style:{fontSize:14,fontWeight:700,color:rd.col}},rd.label),
                      e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},
                        rd.errors.length+" pitanja · "+razinaTotalErrors+" grešaka · "+topicGroups.length+" tema")
                    ),
                    e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,
                      transition:"transform .2s",transform:isRazinaOpen?"rotate(180deg)":"rotate(0deg)",
                      display:"inline-block"}},"▾")
                  ),

                  // Teme unutar razine
                  isRazinaOpen&&e("div",{style:{
                    border:"1px solid var(--bdr)",borderTop:"none",
                    borderRadius:"0 0 14px 14px",overflow:"hidden"
                  }},
                    topicGroups.map(({topic,label,errors:terrs,totalCount},ti)=>{
                      const topicKey=razina+"_"+topic;
                      const isTopicOpen=openTopic===topicKey;
                      const isWorst=ti===0;
                      const borderCol=isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--bdr2)";

                      return e("div",{key:topic,style:{borderBottom:ti<topicGroups.length-1?"1px solid var(--bdr)":"none"}},
                        // Tema header
                        e("div",{
                          onClick:()=>setOpenTopic(o=>o===topicKey?("razina_"+razina):topicKey),
                          style:{
                            display:"flex",alignItems:"center",gap:12,
                            padding:"11px 18px 11px 22px",cursor:"pointer",
                            background:isTopicOpen?"rgba(0,0,0,.04)":"var(--s1)",
                            borderLeft:"3px solid "+borderCol,
                            transition:"background .15s"
                          },
                          onMouseEnter:ev=>ev.currentTarget.style.background="var(--s2)",
                          onMouseLeave:ev=>ev.currentTarget.style.background=isTopicOpen?"rgba(0,0,0,.04)":"var(--s1)"
                        },
                          e("div",{style:{
                            width:28,height:28,borderRadius:7,flexShrink:0,
                            display:"flex",alignItems:"center",justifyContent:"center",
                            background:isWorst?"var(--red-d)":totalCount>=3?"var(--gold-d)":"var(--s2)",
                            fontSize:11,fontWeight:800,
                            color:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"
                          }},totalCount+"×"),
                          e("div",{style:{flex:1}},
                            e("div",{style:{fontSize:13,fontWeight:600}},label),
                            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}},terrs.length+" pitanja")
                          ),
                          e("div",{style:{width:50,height:3,background:"var(--s3)",borderRadius:99,overflow:"hidden",flexShrink:0}},
                            e("div",{style:{height:"100%",borderRadius:99,
                              width:Math.min(100,Math.round(totalCount/razinaTotalErrors*100)*3)+"%",
                              background:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"}})
                          ),
                          e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,marginLeft:6,
                            transition:"transform .2s",transform:isTopicOpen?"rotate(180deg)":"rotate(0deg)",
                            display:"inline-block"}},"▾")
                        ),

                        // Pitanja unutar teme
                        isTopicOpen&&e("div",{style:{background:"var(--s2)",borderTop:"1px solid var(--bdr)"}},
                          onStartErrorSession&&e("button",{onClick:ev=>{ev.stopPropagation();startErrorsSession(terrs);},
                            style:{margin:"10px 18px 6px 24px",border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",
                              cursor:"pointer",fontFamily:"var(--fb)",fontSize:12,fontWeight:700,borderRadius:8,padding:"7px 14px"}},
                            "🎯 Vježbaj ovih "+terrs.length+" pitanja"),
                          terrs.map((err,ei)=>e("div",{key:ei,style:{
                            display:"flex",alignItems:"flex-start",gap:10,
                            padding:"10px 18px 10px 24px",
                            borderBottom:ei<terrs.length-1?"1px solid var(--bdr)":"none"
                          }},
                            e("div",{style:{
                              width:22,height:22,borderRadius:6,flexShrink:0,
                              display:"flex",alignItems:"center",justifyContent:"center",
                              background:err.count>=3?"var(--red-d)":"var(--s3)",
                              fontSize:10,fontWeight:700,
                              color:err.count>=3?"var(--red)":"var(--muted)"
                            }},err.count+"×"),
                            e("div",{style:{flex:1,minWidth:0}},
                              e("div",{style:{fontSize:12,lineHeight:1.55,color:"var(--text)"}},
                                parseMath(err.q)||err.q),
                              err.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},
                                "Zadnji put: "+err.lastDate)
                            )
                          ))
                        )
                      );
                    })
                  )
                );
              })
            );
          })()
      ),

      /* ── NAJTEŽA ── */
      tab==="teska"&&(history.length===0?noData:(()=>{
        const hardest=errors.slice(0,20);
        if(hardest.length===0) return e("div",{style:{textAlign:"center",padding:"40px 0"}},e("div",{style:{fontSize:32,marginBottom:12}},"🏆"),e("div",{style:{fontSize:14,color:"var(--muted)"}},"Nema pogrešnih odgovora — odličan rad!"));
        const seasonLbl=ss=>ss==="ljeto"?"Ljetni":ss==="zima"?"Zimski":"Jesenski";
        return e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},e("span",null,"Najteža pitanja — po broju grešaka"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          onStartErrorSession&&e("button",{onClick:()=>startErrorsSession(hardest),
            style:{width:"100%",marginBottom:16,border:"none",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:12,padding:"13px 18px",color:"#fff",fontSize:14,fontWeight:700,background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 55%,#2d6ad4 100%)",boxShadow:"0 8px 20px -8px rgba(45,106,212,.5)"}},
            "🎯 Vježbaj "+hardest.length+" najtežih"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            hardest.map((err,i)=>{
              const ex=EXAMS[err.examKey];
              const q=ex&&ex.qs.find(qq=>String(qq.id)===String(err.qid));
              const exLabel=ex?(ex.year+" · "+seasonLbl(ex.season)+" ("+ex.razina+")"):err.examKey;
              const ans=(q&&q.type==="mc"&&q.sol&&q.sol.cl)?(q.sol.cl+" — "+(q.opts[LL.indexOf(q.sol.cl)]||"")):((q&&q.sol&&(q.sol.ans||q.sol.ex))||null);
              return e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderLeft:"3px solid var(--red)",borderRadius:"0 12px 12px 0",padding:"12px 14px",display:"flex",gap:12,alignItems:"flex-start"}},
                e("div",{style:{minWidth:44,height:44,borderRadius:10,background:"var(--red-d)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(248,113,113,.2)"}},
                  e("div",{style:{fontSize:15,fontWeight:800,color:"var(--red)",lineHeight:1}},err.count+"×"),
                  e("div",{style:{fontSize:9,color:"var(--muted)"}},err.count===1?"greška":"grešaka")
                ),
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{display:"flex",gap:6,marginBottom:4,flexWrap:"wrap",alignItems:"center"}},
                    e("span",{className:"topic-tag",style:{fontSize:10}},TOPIC_LABELS[err.topic]||err.topic),
                    e("span",{style:{fontSize:10,color:"var(--muted)"}},exLabel)
                  ),
                  e("div",{style:{fontSize:13,lineHeight:1.5}},parseMath(err.q)||err.q),
                  ans&&e("details",{style:{marginTop:6}},
                    e("summary",{style:{fontSize:11,color:"var(--blue)",cursor:"pointer",userSelect:"none",listStyle:"none"}},"Prikaži točan odgovor"),
                    e("div",{style:{marginTop:6,fontSize:11,color:"var(--green)",background:"var(--green-d)",border:"1px solid rgba(61,214,140,.2)",borderRadius:6,padding:"5px 9px",display:"inline-block"}},"✓ ",e("strong",null,typeof ans==="string"?ans:String(ans)))
                  )
                )
              );
            })
          )
        );
      })()),

      tab==="heatmap"&&(history.length===0?noData:(()=>{
        const dateMap={};
        history.forEach(h=>{
          if(!h.date) return;
          if(!dateMap[h.date]) dateMap[h.date]={exams:0,totalPct:0};
          dateMap[h.date].exams++;
          dateMap[h.date].totalPct+=h.pct||0;
        });
        function hrToDate(s){if(!s) return null;const p=s.replace(/\./g,"").trim().split(/\s+/);if(p.length<3) return null;return new Date(parseInt(p[2]),parseInt(p[1])-1,parseInt(p[0]));}
        function dateToHr(d){return d.toLocaleDateString("hr");}
        const today=new Date();today.setHours(0,0,0,0);

        // Streak stats
        const totalDays=Object.keys(dateMap).length;
        const maxStreak=(()=>{
          const dates=Object.keys(dateMap).map(d=>hrToDate(d)).filter(Boolean).sort((a,b)=>a-b);
          let ms=0,cs=0,prev=null;
          dates.forEach(d=>{if(prev&&(d-prev)===86400000)cs++;else cs=1;if(cs>ms)ms=cs;prev=d;});
          return ms;
        })();

        // Kalendar za odabrani mjesec
        const {y,m}=viewMonth;
        const monthNames=["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj",
          "Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"];
        const dayNames=["Pon","Uto","Sri","Čet","Pet","Sub","Ned"];

        // Dani u odabranom mjesecu
        const firstDay=new Date(y,m,1);
        const lastDay=new Date(y,m+1,0);
        // Koji dan tjedna je 1. (0=ned→6, 1=pon→0, ...)
        const startDow=(firstDay.getDay()+6)%7; // pretvori u pon=0
        const daysInMonth=lastDay.getDate();

        // Izgradi grid: popuni prazne do prvog dana
        const cells=[];
        for(let i=0;i<startDow;i++) cells.push(null);
        for(let d=1;d<=daysInMonth;d++){
          const date=new Date(y,m,d);
          const dateStr=dateToHr(date);
          cells.push({day:d,dateStr,data:dateMap[dateStr]||null,
            isToday:date.toDateString()===today.toDateString(),
            isFuture:date>today});
        }
        // Dopuni do punog tjedna
        while(cells.length%7!==0) cells.push(null);
        const weeks=[];
        for(let i=0;i<cells.length;i+=7) weeks.push(cells.slice(i,i+7));

        // Navigacija: može li ići naprijed/nazad
        const canPrev=!(y===today.getFullYear()-2&&m===0);
        const canNext=!(y===today.getFullYear()&&m===today.getMonth());

        function prevMonth(){setViewMonth(({y,m})=>m===0?{y:y-1,m:11}:{y,m:m-1});}
        function nextMonth(){setViewMonth(({y,m})=>m===11?{y:y+1,m:0}:{y,m:m+1});}

        // Aktivni dani u ovom mjesecu
        const activeDaysThisMonth=cells.filter(c=>c&&c.data).length;

        return e("div",null,
          // Streak kartice
          e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:8,marginBottom:18}},
            [{label:"Aktivni streak",val:(userData.streak||0)+"🔥",col:"var(--gold)"},
             {label:"Rekord",val:maxStreak+" dana",col:"var(--blue)"},
             {label:"Aktivni dani",val:totalDays,col:"var(--green)"},
             {label:"Ovaj mjesec",val:activeDaysThisMonth+" dana",col:"var(--teal)"}
            ].map((s,i)=>e("div",{key:i,style:{background:"var(--s1)",border:"1px solid var(--bdr)",
              borderRadius:10,padding:"10px 12px",textAlign:"center"}},
              e("div",{style:{fontSize:18,fontWeight:800,color:s.col,fontFamily:"var(--fh)",lineHeight:1,marginBottom:3}},s.val),
              e("div",{style:{fontSize:10,color:"var(--muted)",letterSpacing:".04em"}},s.label)
            ))
          ),

          // Navigacija mjeseca
          e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}},
            e("button",{
              onClick:prevMonth,disabled:!canPrev,
              style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8,
                width:32,height:32,cursor:canPrev?"pointer":"not-allowed",
                fontSize:16,color:canPrev?"var(--text)":"var(--muted)",
                opacity:canPrev?1:.4,display:"flex",alignItems:"center",justifyContent:"center"}
            },"‹"),
            e("div",{style:{fontFamily:"var(--fh)",fontSize:18,fontWeight:400}},
              monthNames[m]+" "+y),
            e("button",{
              onClick:nextMonth,disabled:!canNext,
              style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:8,
                width:32,height:32,cursor:canNext?"pointer":"not-allowed",
                fontSize:16,color:canNext?"var(--text)":"var(--muted)",
                opacity:canNext?1:.4,display:"flex",alignItems:"center",justifyContent:"center"}
            },"›")
          ),

          // Tap detalj (mobile-friendly)
          calTooltip&&e("div",{style:{marginBottom:12,background:"var(--s2)",border:"1px solid var(--bdr)",borderLeft:"3px solid "+(calTooltip.col||"var(--blue)"),borderRadius:"0 10px 10px 0",padding:"10px 14px",display:"flex",alignItems:"center",gap:10}},
            e("span",{style:{fontSize:13,fontWeight:700}},calTooltip.d),
            e("span",{style:{fontSize:12,color:"var(--muted)"}},calTooltip.exams+(calTooltip.exams===1?" ispit":" ispita")+" · prosjek "+calTooltip.avg+"%"),
            e("button",{onClick:()=>setCalTooltip(null),style:{marginLeft:"auto",background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:13,fontFamily:"var(--fb)"}},"✕")
          ),
          // Kalendar grid
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,overflow:"hidden"}},
            // Nazivi dana
            e("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",
              borderBottom:"1px solid var(--bdr)",background:"var(--s2)"}},
              dayNames.map(d=>e("div",{key:d,style:{
                textAlign:"center",padding:"8px 0",
                fontSize:11,fontWeight:700,letterSpacing:".06em",
                color:"var(--muted)",textTransform:"uppercase"
              }},d))
            ),
            // Tjedni
            weeks.map((week,wi)=>e("div",{key:wi,style:{
              display:"grid",gridTemplateColumns:"repeat(7,1fr)",
              borderBottom:wi<weeks.length-1?"1px solid var(--bdr)":"none"
            }},
              week.map((cell,di)=>{
                if(!cell) return e("div",{key:di,style:{
                  minHeight:56,background:"var(--s2)",
                  borderRight:di<6?"1px solid var(--bdr)":"none",
                  opacity:.3
                }});

                const hasData=!!cell.data;
                const avgPct=hasData?Math.round(cell.data.totalPct/cell.data.exams):null;
                const dotCol=avgPct>=70?"var(--green)":avgPct>=50?"var(--gold)":"var(--red)";

                return e("div",{key:di,style:{
                  minHeight:56,padding:"6px 8px",
                  borderRight:di<6?"1px solid var(--bdr)":"none",
                  background:cell.isToday?"color-mix(in srgb,var(--blue) 9%,transparent)":hasData?"color-mix(in srgb,var(--blue) 4%,transparent)":"",
                  position:"relative",
                  cursor:hasData?"pointer":"default",
                  transition:"background .15s"
                },
                  onClick:()=>{if(hasData)setCalTooltip(p=>(p&&p.d===cell.dateStr)?null:{d:cell.dateStr,exams:cell.data.exams,avg:avgPct,col:dotCol});},
                  title:hasData?cell.dateStr+" - "+cell.data.exams+" ispita · prosjek "+avgPct+"%":cell.dateStr,
                  onMouseEnter:ev=>{if(hasData)ev.currentTarget.style.background="color-mix(in srgb,var(--blue) 13%,transparent)"},
                  onMouseLeave:ev=>{ev.currentTarget.style.background=cell.isToday?"color-mix(in srgb,var(--blue) 9%,transparent)":hasData?"color-mix(in srgb,var(--blue) 4%,transparent)":""}
                },
                  // Broj dana
                  e("div",{style:{
                    fontSize:12,fontWeight:cell.isToday?700:400,
                    color:cell.isFuture?"var(--muted)":cell.isToday?"var(--blue)":"var(--text)",
                    lineHeight:1,marginBottom:4
                  }},cell.day),
                  // Indikatori ispita
                  hasData&&e("div",{style:{display:"flex",flexDirection:"column",gap:2}},
                    // Dot + broj ispita
                    e("div",{style:{display:"flex",alignItems:"center",gap:3}},
                      e("div",{style:{width:6,height:6,borderRadius:"50%",background:dotCol,flexShrink:0}}),
                      e("div",{style:{fontSize:10,fontWeight:600,color:dotCol}},
                        cell.data.exams+(cell.data.exams===1?" ispit":" ispita"))
                    ),
                    // Prosjek
                    e("div",{style:{fontSize:10,color:"var(--muted)"}},avgPct+"%")
                  ),
                  // Today marker
                  cell.isToday&&e("div",{style:{
                    position:"absolute",top:4,right:6,
                    width:4,height:4,borderRadius:"50%",
                    background:"var(--blue)"
                  }})
                );
              })
            ))
          ),

          // Legenda
          e("div",{style:{display:"flex",gap:14,marginTop:10,fontSize:11,color:"var(--muted)",flexWrap:"wrap",alignItems:"center"}},
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--green)"}}),
              e("span",null,"≥70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--gold)"}}),
              e("span",null,"50-70%")),
            e("div",{style:{display:"flex",alignItems:"center",gap:4}},
              e("div",{style:{width:7,height:7,borderRadius:"50%",background:"var(--red)"}}),
              e("span",null,"<50%")),
            e("span",{style:{marginLeft:"auto"}},"Dodirni dan za detalje")
          )
        );
      })()),

      /* ── SAVJETI ── */
      tab==="savjeti"&&e("div",null,

        history.length===0&&noData,

        // Preporuke
        history.length>0&&e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Personalizirane preporuke"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            getRecommendations().map((r,i)=>{
              const badgeMeta={
                urgent:{bg:"var(--red-d)",border:"rgba(248,113,113,.25)",color:"var(--red)",label:"Prioritet",barBg:"rgba(248,113,113,.15)"},
                good:{bg:"var(--green-d)",border:"rgba(61,214,140,.25)",color:"var(--green)",label:"Odlično",barBg:"rgba(61,214,140,.1)"},
                tip:{bg:"var(--blue-d)",border:"var(--blue-b)",color:"var(--blue)",label:"Savjet",barBg:"rgba(74,144,217,.08)"}
              }[r.badge]||{bg:"var(--s2)",border:"var(--bdr)",color:"var(--muted)",label:"Info",barBg:"var(--s2)"};

              return e("div",{key:i,style:{
                background:"var(--s1)",
                border:"1px solid var(--bdr)",
                borderLeft:"3px solid "+badgeMeta.color,
                borderRadius:"0 12px 12px 0",
                padding:"14px 16px",
                display:"flex",gap:14,alignItems:"flex-start",
                transition:"border-color .15s"
              }},
                // Ikona u obojenoj kutijici
                e("div",{style:{
                  width:40,height:40,borderRadius:10,flexShrink:0,
                  background:badgeMeta.bg,
                  border:"1px solid "+badgeMeta.border,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:20
                }},r.icon),
                // Sadržaj
                e("div",{style:{flex:1,minWidth:0}},
                  e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}},
                    e("div",{style:{fontSize:13,fontWeight:700,color:"var(--text)"}},r.title),
                    e("span",{style:{
                      fontSize:10,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",
                      padding:"2px 8px",borderRadius:99,
                      background:badgeMeta.bg,border:"1px solid "+badgeMeta.border,
                      color:badgeMeta.color,whiteSpace:"nowrap"
                    }},badgeMeta.label)
                  ),
                  e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.6}},r.desc)
                )
              );
            })
          )
        ),

        // Tempo po temama
        topicTimes.length>0&&e("div",{style:{marginBottom:24}},
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Tempo po temama"),e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})),
          e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"16px 18px",display:"flex",flexDirection:"column",gap:10}},
            topicTimes.slice(0,6).map((t,i)=>{const slow=t.avg>TIME_BUDGET;const col=slow?"var(--red)":t.avg>TIME_BUDGET*0.6?"var(--gold)":"var(--green)";return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:12}},
              e("div",{style:{flex:1,minWidth:0}},
                e("div",{style:{fontSize:12.5,fontWeight:600,marginBottom:4}},t.label),
                e("div",{style:{height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                  e("div",{style:{height:"100%",width:Math.min(100,Math.round(t.avg/(TIME_BUDGET*1.5)*100))+"%",background:col,borderRadius:99}}))
              ),
              e("div",{style:{textAlign:"right",flexShrink:0,minWidth:64}},
                e("div",{style:{fontSize:13,fontWeight:700,color:col}},t.avg+"s"),
                e("div",{style:{fontSize:10,color:"var(--muted)"}},slow?"presporo":"ok"))
            );}),
            e("div",{style:{fontSize:11,color:"var(--muted)",borderTop:"1px solid var(--bdr)",paddingTop:8}},"Budžet ~"+TIME_BUDGET+"s/pitanje · crveno = presporo, treba uvježbati brzinu")
          )
        ),

        // Brzina rješavanja
        allTimes.length>0&&e("div",null,
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
            e("span",null,"Brzina rješavanja"),
            e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
          ),
          e("div",{style:{
            background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,padding:"20px"
          }},
            e("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:18}},
              [
                {val:avgTime+"s",lbl:"Prosjek po pitanju",col:"var(--blue)"},
                {val:avgTime<=60?"Brzo":avgTime<=120?"Dobro":"Sporo",
                 lbl:"Tempo",col:avgTime<=60?"var(--green)":avgTime<=120?"var(--gold)":"var(--red)"},
                {val:Math.round(180*60/(avgTime||60)),lbl:"Pitanja za 180 min",col:"var(--muted)"}
              ].map((s,i)=>e("div",{key:i,style:{textAlign:"center",padding:"12px 8px",
                background:"var(--s2)",borderRadius:10}},
                e("div",{style:{fontFamily:"var(--fh)",fontSize:26,fontWeight:400,
                  color:s.col,lineHeight:1,marginBottom:4}},s.val),
                e("div",{style:{fontSize:11,color:"var(--muted)"}},s.lbl)
              ))
            ),
            // Vizualna skala brzine
            e("div",null,
              e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:6}},
                "Benchmark: ≤60s brzo · 60-120s dobro · >120s sporo"),
              e("div",{style:{position:"relative",height:8,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                // Gradijent skala
                e("div",{style:{position:"absolute",inset:0,
                  background:"linear-gradient(90deg,var(--green) 0%,var(--green) 33%,var(--gold) 33%,var(--gold) 66%,var(--red) 66%)",
                  opacity:.25}}),
                // Marker trenutne brzine
                e("div",{style:{
                  position:"absolute",top:0,bottom:0,
                  left:Math.min(95,Math.round(avgTime/180*100))+"%",
                  width:3,background:"var(--bg,#060910)",borderRadius:99,
                  boxShadow:"0 0 4px rgba(0,0,0,.4)"
                }})
              ),
              e("div",{style:{display:"flex",justifyContent:"space-between",
                fontSize:10,color:"var(--muted)",marginTop:4}},
                e("span",null,"0s"),e("span",null,"60s"),e("span",null,"120s"),e("span",null,"180s+")
              )
            )
          )
        )
      )
    )
  );
}
function GradePrediction({history}){
  if(!history||history.length<2) return e("div",{className:"trend-empty"},
    "📊 Trebaš barem 2 riješena ispita za predviđanje.");

  const GRADE_THRESH={5:85,4:70,3:55,2:40};
  const recent=history.slice(-5);
  const avgPct=Math.round(recent.reduce((a,h)=>a+h.pct,0)/recent.length);
  const weights=recent.map((_,i)=>i+1);
  const totalW=weights.reduce((a,b)=>a+b,0);
  const weightedPct=Math.round(recent.reduce((a,h,i)=>a+h.pct*weights[i],0)/totalW);
  const trend=history.length>=3
    ?(history.slice(-2).reduce((a,h)=>a+h.pct,0)/2)-(history.slice(-4,-2).reduce((a,h)=>a+h.pct,0)/Math.min(2,history.slice(-4,-2).length))
    :0;
  const predicted=Math.max(0,Math.min(100,Math.round(weightedPct+trend*0.3)));
  const g=predicted>=85?5:predicted>=70?4:predicted>=55?3:predicted>=40?2:1;
  const gc=GC[g];
  const confidence=history.length>=5?"Visoka":history.length>=3?"Srednja":"Niska";
  const confColor=confidence==="Visoka"?"var(--green)":confidence==="Srednja"?"var(--gold)":"var(--muted)";
  const best=Math.max(...history.map(h=>h.pct));
  const worst=Math.min(...history.map(h=>h.pct));
  const trendDir=trend>2?"↑ Rasteš":trend<-2?"↓ Padaš":"→ Stagniraš";
  const trendColor=trend>2?"var(--green)":trend<-2?"var(--red)":"var(--muted)";

  return e("div",null,
    e("div",{className:"pred-card"},
      e("div",{className:"pred-grade",style:{color:gc}},g),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:gc,marginBottom:4}},GLBL[g]||""),
      e("div",{className:"pred-label"},"Predviđena ocjena na temelju zadnjih "+recent.length+" ispita"),
      e("div",{className:"pred-confidence",style:{background:confColor+"20",color:confColor,border:"1px solid "+confColor+"40"}},
        "Pouzdanost: "+confidence+" · "+predicted+"%"
      ),
      (()=>{const sw=Math.round((best-worst)*(history.length<5?0.3:0.2));const lo=Math.max(0,predicted-sw),hi=Math.min(100,predicted+sw);return e("div",{style:{fontSize:12,color:"rgba(255,255,255,.78)",marginTop:8}},"Očekivani raspon: "+lo+"–"+hi+"%"+(history.length<5?" · riješi još "+(5-history.length)+" ispita za precizniju procjenu":""));})(),
      e("div",{className:"pred-breakdown"},
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Ponderirani prosjek"),
          e("div",{className:"pred-bd-val"},weightedPct+"%")),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Trend"),
          e("div",{className:"pred-bd-val",style:{color:trendColor}},trendDir)),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Najbolji ispit"),
          e("div",{className:"pred-bd-val",style:{color:"var(--green)"}},best+"%")),
        e("div",{className:"pred-bd-item"},
          e("div",{className:"pred-bd-label"},"Najslabiji ispit"),
          e("div",{className:"pred-bd-val",style:{color:"var(--red)"}},worst+"%"))
      )
    )
  );
}
function getRecommendations(userData){
  const recs=[];
  const history=userData.history||[];
  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);

  // Ponavljajuće greške
  const topErrors=errors.slice(0,3).filter(e=>e.count>=2);
  if(topErrors.length>0){
    recs.push({
      icon:"🔁",title:"Ponavljaš iste greške",
      desc:"Griješiš "+topErrors.length+"× na pitanjima o "+[...new Set(topErrors.map(e=>TOPIC_LABELS[e.topic]||e.topic))].join(", ")+". Pogledaj tab 'Greške'.",
      badge:"urgent"
    });
  }
  // Pad rezultata
  if(history.length>=4){
    const last4=history.slice(-4);
    const trend=last4[3].pct-last4[0].pct;
    if(trend<-10) recs.push({
      icon:"📉",title:"Pad rezultata",
      desc:"Zadnja 4 ispita pokazuju pad od "+Math.abs(trend)+"%. Provjeri slabe teme i uvježbaj ih.",
      badge:"warn"
    });
  }
  // Još nisi probao/la sve ispite
  const triedKeys=new Set(history.map(h=>h.examKey));
  const notTried=Object.keys(EXAMS).filter(k=>!triedKeys.has(k));
  if(notTried.length>0) recs.push({
    icon:"📄",title:"Neistraženi ispiti",
    desc:"Još nisi riješio/la "+notTried.length+" ispita. Svaki rok je malo drugačiji  -  proba sve!",
    badge:"info"
  });
  // Motivacijska poruka ako nema ništa loše
  if(recs.length===0&&history.length>0){
    const avg=Math.round(history.reduce((s,h)=>s+h.pct,0)/history.length);
    recs.push({
      icon:avg>=70?"🏆":"💪",title:avg>=70?"Sjajan napredak!":"Nastavi vježbati!",
      desc:avg>=70?"Prosjek od "+avg+"% je na razini odličnog. Provjeri slabiie teme za savršen rezultat."
             :"Prosjek od "+avg+"%. Fokusiraj se na teme koje su ti teže i vježbaj svaki dan.",
      badge:"ok"
    });
  }
  return recs;
}
function ErrorsScreen({userData,onStart,onBack}){
  const errors=Object.values(userData.errorTracker||{}).filter(e=>e.count>0).sort((a,b)=>b.count-a.count);
  const[openKey,setOpenKey]=React.useState(null);

  function startSessionAll(){
    if(!errors.length) return;
    const qs=errors.slice(0,40).map(err=>{
      const exam=EXAMS[err.examKey];if(!exam)return null;
      const q=exam.qs.find(q=>String(q.id)===String(err.qid));
      return q?{...q,_examKey:err.examKey}:null;
    }).filter(Boolean);
    if(!qs.length)return;
    onStart({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:40*60});
  }

  function startSessionFiltered(filteredErrors){
    const qs=filteredErrors.map(err=>{
      const exam=EXAMS[err.examKey];if(!exam)return null;
      const q=exam.qs.find(q=>String(q.id)===String(err.qid));
      return q?{...q,_examKey:err.examKey}:null;
    }).filter(Boolean);
    if(!qs.length)return;
    onStart({key:"errors_session",year:"Greške",season:"session",label:"Greške - ponavljanje",qs:[...qs].sort(()=>Math.random()-.5),duration:qs.length*120});
  }

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
      e("span",{className:"ntitle"},"🔁 Greške - ponavljanje"),
      e("span",{className:"nsp"})
    ),
    e("div",{style:{maxWidth:700,margin:"0 auto",padding:"24px 20px 60px"}},
      errors.length===0
        ?(userData.history&&userData.history.length>0
          ?e("div",{style:{textAlign:"center",padding:"60px 0"}},
              e("div",{style:{fontSize:48,marginBottom:16}},"🎉"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Nema grešaka!"),
              e("div",{style:{fontSize:14,color:"var(--muted)"}},"Odličan rad! Pokušaj još koji ispit.")
            )
          :e("div",{style:{textAlign:"center",padding:"60px 0"}},
              e("div",{style:{fontSize:48,opacity:.3,marginBottom:16}},"🚨"),
              e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},"Tu će se pojaviti tvoje greške"),
              e("div",{style:{fontSize:14,color:"var(--muted)",marginBottom:24,lineHeight:1.5,maxWidth:420,margin:"0 auto 24px"}},"Riješi prvi ispit da vidiš obrasce u kojima griješiš. Sustav će ih grupirati po temi i pomoći ti da ih ciljano vježbaš."),
              e("button",{onClick:onBack,className:"btn btn-blue",style:{fontSize:13,padding:"10px 22px"}},"▶ Odaberi ispit")
            ))
        :e("div",null,

          // Summary + pokretanje sve
          e("div",{style:{
            borderRadius:16,padding:"20px 22px",marginBottom:22,
            background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
            display:"flex",alignItems:"center",gap:16,position:"relative",overflow:"hidden"
          }},
            e("div",{style:{position:"absolute",right:-8,bottom:-16,fontSize:80,opacity:.05,lineHeight:1,fontFamily:"var(--fh)",userSelect:"none"}},"∑"),
            e("div",{style:{flex:1}},
              e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--bg,#060910)",lineHeight:1,marginBottom:4}},errors.length),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)"}},
                "pitanja s greškama · "+errors.reduce((s,e)=>s+e.count,0)+" ukupno pogrešnih odgovora")
            ),
            e("button",{
              onClick:startSessionAll,
              style:{background:"var(--bg,#060910)",color:"#1e1040",border:"none",borderRadius:10,
                padding:"10px 20px",fontWeight:700,fontSize:13,cursor:"pointer",
                fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}
            },"▶ Pokreni sve")
          ),

          // Razine A i B
          ["A","B"].map(razina=>{
            const rd={
              A:{label:"Viša razina (A)",col:"var(--blue)",bg:"var(--blue-d)",bdr:"var(--blue-b)"},
              B:{label:"Osnovna razina (B)",col:"var(--teal)",bg:"var(--teal-d)",bdr:"rgba(52,209,191,.25)"}
            }[razina];

            const razErrors=errors.filter(e=>e.examKey?.includes("_"+razina));
            if(razErrors.length===0) return null;

            // Grupiraj po temi
            const byTopic={};
            razErrors.forEach(err=>{
              const t=err.topic||"ostalo";
              if(!byTopic[t]) byTopic[t]={topic:t,label:TOPIC_LABELS[t]||t,errors:[],totalCount:0};
              byTopic[t].errors.push(err);
              byTopic[t].totalCount+=err.count;
            });
            const topicGroups=Object.values(byTopic).sort((a,b)=>b.totalCount-a.totalCount);
            const razTotal=razErrors.reduce((s,e)=>s+e.count,0);
            const razKey="razina_"+razina;
            const isRazOpen=openKey===razKey||openKey?.startsWith(razKey+"_");

            return e("div",{key:razina,style:{marginBottom:10}},
              // Razina header
              e("div",{
                onClick:()=>setOpenKey(o=>o===razKey?null:razKey),
                style:{
                  display:"flex",alignItems:"center",gap:12,padding:"14px 18px",
                  background:isRazOpen?"var(--s2)":"var(--s1)",
                  border:"1px solid var(--bdr)",
                  borderLeft:"4px solid "+rd.col,
                  borderRadius:isRazOpen?"0 14px 0 0":"0 14px 14px 0",
                  cursor:"pointer",transition:"all .15s",userSelect:"none"
                }
              },
                e("div",{style:{width:38,height:38,borderRadius:10,flexShrink:0,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:rd.bg,border:"1px solid "+rd.bdr,
                  fontSize:16,fontWeight:800,color:rd.col}},razina),
                e("div",{style:{flex:1}},
                  e("div",{style:{fontSize:14,fontWeight:700,color:rd.col}},rd.label),
                  e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:2}},
                    razErrors.length+" pitanja · "+razTotal+" grešaka · "+topicGroups.length+(topicGroups.length===1?" tema":" teme"))
                ),
                e("button",{
                  onClick:ev=>{ev.stopPropagation();startSessionFiltered(razErrors);},
                  style:{background:rd.bg,border:"1px solid "+rd.bdr,color:rd.col,
                    borderRadius:8,padding:"5px 12px",fontSize:12,fontWeight:700,
                    cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}
                },"▶ Pokreni"),
                e("div",{style:{fontSize:12,color:"var(--muted)",flexShrink:0,marginLeft:6,
                  transition:"transform .2s",transform:isRazOpen?"rotate(180deg)":"rotate(0deg)",
                  display:"inline-block"}},"▾")
              ),

              // Teme
              isRazOpen&&e("div",{style:{
                border:"1px solid var(--bdr)",borderTop:"none",
                borderRadius:"0 0 14px 14px",overflow:"hidden"
              }},
                topicGroups.map(({topic,label,errors:terrs,totalCount},ti)=>{
                  const topicKey=razKey+"_"+topic;
                  const isTopicOpen=openKey===topicKey;
                  const isWorst=ti===0;
                  const borderCol=isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--bdr2)";

                  return e("div",{key:topic,style:{
                    borderBottom:ti<topicGroups.length-1?"1px solid var(--bdr)":"none"
                  }},
                    // Tema header
                    e("div",{
                      onClick:()=>setOpenKey(o=>o===topicKey?razKey:topicKey),
                      style:{
                        display:"flex",alignItems:"center",gap:12,
                        padding:"11px 18px 11px 24px",cursor:"pointer",
                        background:isTopicOpen?"var(--s2)":"var(--s1)",
                        borderLeft:"3px solid "+borderCol,
                        transition:"background .15s",userSelect:"none"
                      }
                    },
                      e("div",{style:{width:28,height:28,borderRadius:7,flexShrink:0,
                        display:"flex",alignItems:"center",justifyContent:"center",
                        background:isWorst?"var(--red-d)":totalCount>=3?"var(--gold-d)":"var(--s2)",
                        fontSize:11,fontWeight:800,
                        color:isWorst?"var(--red)":totalCount>=3?"var(--gold)":"var(--muted)"}},totalCount+"×"),
                      e("div",{style:{flex:1}},
                        e("div",{style:{fontSize:13,fontWeight:600}},label),
                        e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:1}},terrs.length+" pitanja")
                      ),
                      e("button",{
                        onClick:ev=>{ev.stopPropagation();startSessionFiltered(terrs);},
                        style:{background:"var(--s2)",border:"1px solid var(--bdr)",color:"var(--muted)",
                          borderRadius:7,padding:"4px 10px",fontSize:11,fontWeight:600,
                          cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}
                      },"▶"),
                      e("div",{style:{fontSize:11,color:"var(--muted)",flexShrink:0,marginLeft:6,
                        transition:"transform .2s",transform:isTopicOpen?"rotate(180deg)":"rotate(0deg)",
                        display:"inline-block"}},"▾")
                    ),

                    // Pitanja
                    isTopicOpen&&e("div",{style:{background:"var(--s2)",borderTop:"1px solid var(--bdr)"}},
                      terrs.map((err,ei)=>e("div",{key:ei,style:{
                        display:"flex",alignItems:"flex-start",gap:10,
                        padding:"10px 18px 10px 28px",
                        borderBottom:ei<terrs.length-1?"1px solid var(--bdr)":"none"
                      }},
                        e("div",{style:{width:22,height:22,borderRadius:6,flexShrink:0,
                          display:"flex",alignItems:"center",justifyContent:"center",
                          background:err.count>=3?"var(--red-d)":"var(--s3)",
                          fontSize:10,fontWeight:700,
                          color:err.count>=3?"var(--red)":"var(--muted)"}},err.count+"×"),
                        e("div",{style:{flex:1,minWidth:0}},
                          e("div",{style:{fontSize:12,lineHeight:1.55,color:"var(--text)"}},
                            err.q+(err.q?.length>=80?"...":"")),
                          err.lastDate&&e("div",{style:{fontSize:10,color:"var(--muted)",marginTop:3}},
                            "Zadnji put: "+err.lastDate)
                        )
                      ))
                    )
                  );
                })
              )
            );
          })
        )
    )
  );
}
function BrowseScreen({onBack}){
  const[mode,setMode]=React.useState("pick"); // "pick" | "exam" | "global"
  const[selExam,setSelExam]=React.useState(null);
  const[search,setSearch]=React.useState("");
  const[filterTopic,setFilterTopic]=React.useState("sve");
  const[filterType,setFilterType]=React.useState("sve");
  const[filterRazina,setFilterRazina]=React.useState("sve");
  const[openYear,setOpenYear]=React.useState(null);

  const allQuestions=React.useMemo(()=>{
    const qs=[];
    Object.values(EXAMS).forEach(ex=>ex.qs.forEach(q=>qs.push({
      ...q,_examKey:ex.key,_examYear:ex.year,_examRazina:ex.razina,
      _examLabel:ex.year+" - "+(ex.season==="ljeto"?"Ljetni":ex.season==="jesen"?"Jesenski":"Zimski")+" ("+ex.razina+")"
    })));
    return qs;
  },[]);

  const exam=selExam?EXAMS[selExam]:null;
  const sourceQs=mode==="global"?allQuestions:(exam?exam.qs:[]);

  // Mapa svih slug-ova koji pripadaju istoj prikaznoj temi
  const topicAliases=React.useMemo(()=>{
    const m={};
    Object.entries(TOPIC_LABELS).forEach(([slug,lbl])=>{(m[lbl]=m[lbl]||[]).push(slug);});
    return m;
  },[]);

  const questions=sourceQs.filter(q=>{
    if(filterRazina!=="sve"&&q._examRazina&&q._examRazina!==filterRazina) return false;
    if(filterTopic!=="sve"){
      const allowed=topicAliases[TOPIC_LABELS[filterTopic]]||[filterTopic];
      if(!allowed.includes(q.topic)) return false;
    }
    if(filterType!=="sve"&&q.type!==filterType) return false;
    if(search){
      const s=search.toLowerCase();
      return q.q.toLowerCase().includes(s)||
        (q.opts||[]).some(o=>o.toLowerCase().includes(s))||
        (TOPIC_LABELS[q.topic]||"").toLowerCase().includes(s);
    }
    return true;
  });

  // Grupiraj ispite po godini
  const examsByYear={};
  Object.values(EXAMS).sort((a,b)=>b.year-a.year).forEach(ex=>{
    if(!examsByYear[ex.year]) examsByYear[ex.year]={A:[],B:[]};
    examsByYear[ex.year][ex.razina].push(ex);
  });
  const years=Object.keys(examsByYear).sort((a,b)=>b-a);
  const seasonIcon=s=>s==="ljeto"?"☀️":s==="jesen"?"🍂":"❄️";
  const seasonLabel=s=>s==="ljeto"?"Ljetni":s==="jesen"?"Jesenski":"Zimski";
  // Dedupliciraj po prikaznoj oznaci — više slug-ova može mapirati na istu temu
  const availableTopics=(()=>{
    const slugs=[...new Set(sourceQs.map(q=>q.topic||"ostalo"))].filter(t=>TOPIC_LABELS[t]);
    const seen=new Set();
    const out=[];
    slugs.forEach(s=>{
      const lbl=TOPIC_LABELS[s];
      if(!seen.has(lbl)){seen.add(lbl);out.push(s);}
    });
    return out.sort((a,b)=>TOPIC_LABELS[a].localeCompare(TOPIC_LABELS[b],"hr"));
  })();

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:mode==="pick"?onBack:()=>{setMode("pick");setSelExam(null);setSearch("");setFilterTopic("sve");setFilterType("sve");}},
        mode==="pick"?"← Natrag":"← Natrag"),
      e("span",{className:"ntitle"},"🔍 Pretraži pitanja")
    ),
    e("div",{style:{maxWidth:860,margin:"0 auto",padding:"20px 20px 60px"}},

      // ── ODABIR MODA ──
      mode==="pick"&&e("div",null,
        // Dvije opcije
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:28}},
          e("div",{
            onClick:()=>setMode("examPick"),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,
              padding:"22px 20px",cursor:"pointer",transition:"all .18s",position:"relative",overflow:"hidden"}
          },
            e("div",{style:{position:"absolute",right:-6,bottom:-10,fontSize:60,opacity:.05,lineHeight:1,userSelect:"none"}},"📝"),
            e("div",{style:{width:42,height:42,borderRadius:11,background:"var(--blue-d)",
              border:"1px solid var(--blue-b)",display:"flex",alignItems:"center",
              justifyContent:"center",fontSize:20,marginBottom:14}},"📝"),
            e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6}},"Po ispitu"),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},
              "Odaberi godinu i rok pa pretraži pitanja iz tog ispita.")
          ),
          e("div",{
            onClick:()=>setMode("global"),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,
              padding:"22px 20px",cursor:"pointer",transition:"all .18s",position:"relative",overflow:"hidden"}
          },
            e("div",{style:{position:"absolute",right:-6,bottom:-10,fontSize:60,opacity:.05,lineHeight:1,userSelect:"none"}},"🌐"),
            e("div",{style:{width:42,height:42,borderRadius:11,background:"rgba(61,214,140,.1)",
              border:"1px solid rgba(61,214,140,.25)",display:"flex",alignItems:"center",
              justifyContent:"center",fontSize:20,marginBottom:14}},"🌐"),
            e("div",{style:{fontSize:15,fontWeight:700,marginBottom:6}},"Svi ispiti"),
            e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.55}},
              "Pretraži sva pitanja iz svih 70 ispita — filtriraj po temi, tipu i razini.")
          )
        )
      ),

      // ── ODABIR ISPITA ──
      mode==="examPick"&&e("div",null,
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:14,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Odaberi ispit"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          years.map(year=>{
            const isOpen=openYear===year;
            const hasA=examsByYear[year].A.length>0;
            const hasB=examsByYear[year].B.length>0;
            return e("div",{key:year,style:{
              background:"var(--s1)",border:"1px solid var(--bdr)",
              borderRadius:14,overflow:"hidden"
            }},
              // Godina header
              e("div",{
                onClick:()=>setOpenYear(o=>o===year?null:year),
                style:{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",
                  cursor:"pointer",background:isOpen?"var(--s2)":"var(--s1)",
                  transition:"background .15s",userSelect:"none"}
              },
                e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--blue)",minWidth:52}},year),
                e("div",{style:{flex:1,fontSize:12,color:"var(--muted)"}},
                  (examsByYear[year].A.length+examsByYear[year].B.length)+" ispita"),
                e("div",{style:{display:"flex",gap:5}},
                  hasA&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                    background:"var(--blue-d)",border:"1px solid var(--blue-b)",color:"var(--blue)"}},"A"),
                  hasB&&e("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,
                    background:"var(--teal-d)",border:"1px solid rgba(52,209,191,.25)",color:"var(--teal)"}},"B")
                ),
                e("span",{style:{fontSize:11,color:"var(--muted)",transition:"transform .2s",
                  transform:isOpen?"rotate(180deg)":"rotate(0deg)",display:"inline-block"}},"▾")
              ),
              // Ispiti unutar godine
              isOpen&&e("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--bdr)",
                display:"flex",flexDirection:"column",gap:6}},
                ["A","B"].map(razina=>{
                  const exList=examsByYear[year][razina];
                  if(!exList.length) return null;
                  const isA=razina==="A";
                  return e("div",{key:razina},
                    e("div",{style:{fontSize:10,fontWeight:700,letterSpacing:".07em",
                      textTransform:"uppercase",color:isA?"var(--blue)":"var(--teal)",
                      marginBottom:5,paddingLeft:2}},
                      isA?"▲ Viša razina (A)":"▼ Osnovna razina (B)"),
                    e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
                      exList.sort((a,b)=>({ljeto:0,jesen:1,zima:2}[a.season]||0)-({ljeto:0,jesen:1,zima:2}[b.season]||0))
                      .map(ex=>e("div",{key:ex.key,
                        onClick:()=>{setSelExam(ex.key);setMode("exam");setSearch("");setFilterTopic("sve");},
                        style:{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",
                          background:"var(--bg)",border:"1px solid var(--bdr)",borderRadius:9,
                          cursor:"pointer",transition:"all .15s"}
                      },
                        e("span",{style:{fontSize:14}},seasonIcon(ex.season)),
                        e("div",{style:{flex:1}},
                          e("div",{style:{fontSize:13,fontWeight:600}},seasonLabel(ex.season)+" rok"),
                          e("div",{style:{fontSize:11,color:"var(--muted)"}},ex.qs.length+" zadataka")
                        ),
                        e("span",{style:{fontSize:14,color:"var(--muted)"}},"›")
                      ))
                    )
                  );
                })
              )
            );
          })
        )
      ),

      // ── PRETRAGA (exam ili global) ──
      (mode==="exam"||mode==="global")&&e("div",null,

        // Info header
        e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16,flexWrap:"wrap"}},
          mode==="exam"&&exam&&e("div",{style:{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"var(--blue-d)",border:"1px solid var(--blue-b)",
            borderRadius:99,padding:"4px 12px",fontSize:12,fontWeight:600,color:"var(--blue)"
          }},
            seasonIcon(exam.season)," ",exam.year," - ",seasonLabel(exam.season)," (",exam.razina,")"
          ),
          mode==="global"&&e("div",{style:{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"rgba(61,214,140,.1)",border:"1px solid rgba(61,214,140,.25)",
            borderRadius:99,padding:"4px 12px",fontSize:12,fontWeight:600,color:"var(--green)"
          }},"🌐 Svi ispiti - "+allQuestions.length+" pitanja"),
          e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:"auto"}},
            questions.length+" rezultata")
        ),

        // Filteri
        e("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}},
          e("input",{
            type:"text",placeholder:"🔍 Pretraži tekst pitanja...",value:search,
            onChange:ev=>setSearch(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 14px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)",
              flex:"1 1 200px",outline:"none",minWidth:180}
          }),
          mode==="global"&&e("select",{value:filterRazina,onChange:ev=>setFilterRazina(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 12px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)"}},
            e("option",{value:"sve"},"A i B razina"),
            e("option",{value:"A"},"Viša (A)"),
            e("option",{value:"B"},"Osnovna (B)")
          ),
          e("select",{value:filterType,onChange:ev=>setFilterType(ev.target.value),
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:10,
              padding:"9px 12px",fontSize:13,color:"var(--text)",fontFamily:"var(--fb)"}},
            e("option",{value:"sve"},"Svi tipovi"),
            Object.entries(TLBL).map(([k,v])=>e("option",{key:k,value:k},v))
          )
        ),

        // Tema filtri
        e("div",{style:{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}},
          e("button",{
            onClick:()=>setFilterTopic("sve"),
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
              border:"1px solid "+(filterTopic==="sve"?"var(--blue-b)":"var(--bdr)"),
              background:filterTopic==="sve"?"var(--blue-d)":"var(--s1)",
              color:filterTopic==="sve"?"var(--blue)":"var(--muted)"}
          },"Sve teme"),
          availableTopics.map(t=>e("button",{key:t,
            onClick:()=>setFilterTopic(t),
            style:{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:99,cursor:"pointer",
              border:"1px solid "+(filterTopic===t?"var(--blue-b)":"var(--bdr)"),
              background:filterTopic===t?"var(--blue-d)":"var(--s1)",
              color:filterTopic===t?"var(--blue)":"var(--muted)"}
          },TOPIC_LABELS[t]||t))
        ),

        // Lista pitanja
        e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          questions.slice(0,60).map((q,i)=>e("div",{
            key:(q._examKey||"")+q.id+i,
            style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:14,
              padding:"14px 16px"}
          },
            e("div",{style:{display:"flex",gap:7,marginBottom:10,flexWrap:"wrap",alignItems:"center"}},
              e("span",{style:{fontSize:11,color:"var(--muted)",fontWeight:600,minWidth:20}},(i+1)+"."),
              e("span",{className:TBDG[q.type]||"b-mc",style:{fontSize:10,fontWeight:700,
                letterSpacing:".07em",textTransform:"uppercase",padding:"2px 8px",borderRadius:99}},
                TLBL[q.type]),
              e("span",{className:"topic-tag"},TOPIC_LABELS[q.topic]||q.topic),
              mode==="global"&&q._examLabel&&e("span",{style:{
                fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:99,
                background:q._examRazina==="A"?"var(--blue-d)":"var(--teal-d)",
                border:"1px solid "+(q._examRazina==="A"?"var(--blue-b)":"rgba(52,209,191,.25)"),
                color:q._examRazina==="A"?"var(--blue)":"var(--teal)"
              }},q._examLabel),
              q.points>1&&e("span",{style:{fontSize:10,color:"var(--gold)",fontWeight:700,marginLeft:"auto"}},q.points+" bod.")
            ),
            e("div",{style:{fontSize:13,lineHeight:1.6,marginBottom:q.type==="mc"?10:0}},renderQText(q.q)),
            q.type==="mc"&&q.opts&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
              q.opts.map((opt,oi)=>{
                const isCorrect=q.sol?.cl===LL[oi];
                // opt može biti string ili objekt (parseMath result) — koristi renderOptContent koji handla obje
                const optContent=renderOptContent(opt);
                return e("div",{key:oi,style:{
                  fontSize:12,padding:"5px 10px",borderRadius:7,
                  background:isCorrect?"var(--green-d)":"var(--s2)",
                  border:"1px solid "+(isCorrect?"rgba(61,214,140,.3)":"var(--bdr)"),
                  color:isCorrect?"var(--green)":"var(--muted)",
                  fontWeight:isCorrect?600:400,
                  display:"flex",alignItems:"center",gap:8
                }},
                  e("span",{style:{fontWeight:700,minWidth:20,flexShrink:0}},LL[oi]+")"),
                  e("div",{style:{flex:1}},optContent),
                  isCorrect&&e("span",{style:{marginLeft:"auto",flexShrink:0}},"✓")
                );
              })
            ),
            (q.type==="num"||q.type==="calc")&&e("div",{style:{
              marginTop:8,fontSize:12,color:"var(--green)",fontWeight:700,
              background:"var(--green-d)",border:"1px solid rgba(61,214,140,.25)",
              borderRadius:7,padding:"5px 10px",display:"inline-block"
            }},"✓ Odgovor: "+q.sol.ans)
          ))
        ),
        questions.length>60&&e("div",{style:{textAlign:"center",padding:"16px 0",fontSize:12,
          color:"var(--muted)",background:"var(--s2)",borderRadius:10,marginTop:8}},
          "Prikazano 60 od "+questions.length+" pitanja - sužite pretragu filtrom teme ili tipa")
      )
    )
  );
}
function FlashcardScreen({onBack,userData,onUpdateUserData}){
  // ── Baza formula i pojmova (SUBJECT.flashcards overrides for fiz/kem/bio) ──
  const FORMULA_CARDS=SUBJECT.flashcards||[
    // TRIGONOMETRIJA
    {id:"t1",topic:"trig",front:"Što je osnovni trigonometrijski identitet?",back:"sin²x + cos²x = 1",hint:"Vrijedi za svaki kut x"},
    {id:"t2",topic:"trig",front:"Koliko iznosi sin 30°?",back:"sin 30° = 1/2",hint:"Upamti: 30-60-90 trokut"},
    {id:"t3",topic:"trig",front:"Koliko iznosi cos 60°?",back:"cos 60° = 1/2",hint:"Isti rezultat kao sin 30°"},
    {id:"t4",topic:"trig",front:"Koliko iznosi sin 90°?",back:"sin 90° = 1",hint:"Na vrhu jediničnog kružnice"},
    {id:"t5",topic:"trig",front:"Koliko iznosi cos 0°?",back:"cos 0° = 1",hint:"Na desnoj strani jediničnog kružnice"},
    {id:"t6",topic:"trig",front:"Što je formula za tan x?",back:"tan x = sin x / cos x",hint:"Vrijedi za sve x ≠ 90° + k·180°"},
    {id:"t7",topic:"trig",front:"Koliko iznosi sin 45°?",back:"sin 45° = √2 / 2",hint:"Jednakokračni pravokutni trokut"},
    {id:"t8",topic:"trig",front:"Koliko iznosi cos 30°?",back:"cos 30° = √3 / 2",hint:"30-60-90 trokut"},
    {id:"t9",topic:"trig",front:"Formula za sinus dvostrukog kuta?",back:"sin 2x = 2 · sin x · cos x",hint:"Važna formula za transformacije"},
    {id:"t10",topic:"trig",front:"Formula za kosinus dvostrukog kuta?",back:"cos 2x = cos²x - sin²x",hint:"Alternativno: 1 - 2sin²x ili 2cos²x - 1"},
    // KVADRATNA JEDNADŽBA
    {id:"k1",topic:"kv",front:"Što je kvadratna jednadžba i njeno opće rješenje?",back:"ax² + bx + c = 0\nx = (-b ± √(b²-4ac)) / 2a",hint:"Formula za rješavanje kvadratne jednadžbe"},
    {id:"k2",topic:"kv",front:"Što je diskriminanta kvadratne jednadžbe?",back:"D = b² - 4ac",hint:"D > 0: dva rješenja, D = 0: jedno, D < 0: nijedno realno"},
    {id:"k3",topic:"kv",front:"Vieteovi teoremi: suma i produkt korijena?",back:"x₁ + x₂ = -b/a\nx₁ · x₂ = c/a",hint:"Vrijedi za ax² + bx + c = 0"},
    {id:"k4",topic:"kv",front:"Tjeme parabole y = ax² + bx + c?",back:"x_T = -b / 2a\ny_T = c - b² / 4a",hint:"Ili uvrstiti x_T natrag u jednadžbu"},
    {id:"k5",topic:"kv",front:"Kada parabola ima tjeme ispod x-osi i otvara se prema gore?",back:"a > 0 i D > 0\n(dva presjeka s x-osi)",hint:"a > 0 = otvara gore, D > 0 = dva korijena"},
    // EKSPONENCIJALNE I LOG
    {id:"e1",topic:"exp",front:"Što je osnovno pravilo logaritma?",back:"logₐ(x·y) = logₐx + logₐy",hint:"Množenje ↔ zbrajanje u logaritmima"},
    {id:"e2",topic:"exp",front:"Logaritam potencije?",back:"logₐ(xⁿ) = n · logₐx",hint:"Eksponent izlazi kao faktor"},
    {id:"e3",topic:"exp",front:"Promjena baze logaritma?",back:"logₐx = log x / log a = ln x / ln a",hint:"Korisno za računanje na kalkulatoru"},
    {id:"e4",topic:"exp",front:"Koliko iznosi log 1?",back:"logₐ1 = 0",hint:"Vrijedi za svaku bazu a > 0, a ≠ 1"},
    {id:"e5",topic:"exp",front:"Koliko iznosi logₐa?",back:"logₐa = 1",hint:"Logaritam baze jednak je 1"},
    {id:"e6",topic:"exp",front:"Veza između eˣ i ln x?",back:"eˡⁿ ˣ = x i ln(eˣ) = x",hint:"Prirodni logaritam i e su inverzne funkcije"},
    {id:"e7",topic:"exp",front:"Što vrijedi za aˣ · aʸ?",back:"aˣ · aʸ = aˣ⁺ʸ",hint:"Osnovno pravilo potencija"},
    {id:"e8",topic:"exp",front:"Što vrijedi za (aˣ)ʸ?",back:"(aˣ)ʸ = aˣ·ʸ",hint:"Potencija potencije — množimo eksponente"},
    // DERIVACIJE
    {id:"d1",topic:"al",front:"Derivacija xⁿ?",back:"(xⁿ)' = n · xⁿ⁻¹",hint:"Eksponent postaje faktor, eksponent se smanji za 1"},
    {id:"d2",topic:"al",front:"Derivacija konstante c?",back:"(c)' = 0",hint:"Konstanta ne mijenja, njen prirast je nula"},
    {id:"d3",topic:"al",front:"Derivacija sin x?",back:"(sin x)' = cos x",hint:"Sinus ↔ kosinus pri deriviranju"},
    {id:"d4",topic:"al",front:"Derivacija cos x?",back:"(cos x)' = -sin x",hint:"Pazi na minus predznak!"},
    {id:"d5",topic:"al",front:"Derivacija eˣ?",back:"(eˣ)' = eˣ",hint:"Jedina funkcija koja je sama sebi derivacija"},
    {id:"d6",topic:"al",front:"Derivacija ln x?",back:"(ln x)' = 1/x",hint:"Vrijedi za x > 0"},
    {id:"d7",topic:"al",front:"Pravilo umnoška (u·v)?",back:"(u·v)' = u'·v + u·v'",hint:"Deriviraj prvu, ostavi drugu + ostavi prvu, deriviraj drugu"},
    {id:"d8",topic:"al",front:"Pravilo kvocijenta (u/v)?",back:"(u/v)' = (u'·v - u·v') / v²",hint:"Imenovalac se kvadrira"},
    // INTEGRALI
    {id:"i1",topic:"al",front:"Integral od xⁿ (n ≠ -1)?",back:"∫xⁿ dx = xⁿ⁺¹/(n+1) + C",hint:"Suprotno od deriviranja"},
    {id:"i2",topic:"al",front:"Integral od 1/x?",back:"∫(1/x) dx = ln|x| + C",hint:"Apsolutna vrijednost zbog definicijskog područja"},
    {id:"i3",topic:"al",front:"Integral od eˣ?",back:"∫eˣ dx = eˣ + C",hint:"Jedini integral jednak samoj funkciji"},
    {id:"i4",topic:"al",front:"Integral od sin x?",back:"∫sin x dx = -cos x + C",hint:"Pazi na minus!"},
    {id:"i5",topic:"al",front:"Integral od cos x?",back:"∫cos x dx = sin x + C",hint:"Bez minusa"},
    {id:"i6",topic:"al",front:"Što je Newton-Leibnizova formula?",back:"∫ₐᵇ f(x)dx = F(b) - F(a)",hint:"F je primitivna funkcija od f"},
    // ANALITIČKA GEOMETRIJA
    {id:"ag1",topic:"anal",front:"Jednadžba pravca kroz dvije točke?",back:"(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)",hint:"Ili: y = kx + l gdje k = (y₂-y₁)/(x₂-x₁)"},
    {id:"ag2",topic:"anal",front:"Nagib pravca kroz (x₁,y₁) i (x₂,y₂)?",back:"k = (y₂ - y₁) / (x₂ - x₁)",hint:"Promjena y / promjena x"},
    {id:"ag3",topic:"anal",front:"Uvjet paralelnosti dvaju pravaca?",back:"k₁ = k₂ (isti nagib)",hint:"Paralelni pravci imaju isti nagib, ali različit odsječak"},
    {id:"ag4",topic:"anal",front:"Uvjet okomitosti dvaju pravaca?",back:"k₁ · k₂ = -1",hint:"Umnožak nagiba okomitih pravaca je -1"},
    {id:"ag5",topic:"anal",front:"Jednadžba kružnice sa središtem (a,b) i polumjerom r?",back:"(x-a)² + (y-b)² = r²",hint:"Udaljenost točke od središta = r"},
    {id:"ag6",topic:"anal",front:"Udaljenost dviju točaka (x₁,y₁) i (x₂,y₂)?",back:"d = √((x₂-x₁)² + (y₂-y₁)²)",hint:"Pitagorin poučak u koordinatama"},
    {id:"ag7",topic:"anal",front:"Polovište segmenta (x₁,y₁)-(x₂,y₂)?",back:"H = ((x₁+x₂)/2 , (y₁+y₂)/2)",hint:"Aritmetičke sredine koordinata"},
    // NIZOVI
    {id:"n1",topic:"seq",front:"n-ti član aritmetičkog niza?",back:"aₙ = a₁ + (n-1)·d",hint:"a₁ = prvi član, d = razlika"},
    {id:"n2",topic:"seq",front:"Suma prvih n članova aritmetičkog niza?",back:"Sₙ = n · (a₁ + aₙ) / 2",hint:"Ili: Sₙ = n·a₁ + n(n-1)d/2"},
    {id:"n3",topic:"seq",front:"n-ti član geometrijskog niza?",back:"aₙ = a₁ · qⁿ⁻¹",hint:"a₁ = prvi član, q = kvocijent"},
    {id:"n4",topic:"seq",front:"Suma prvih n članova geometrijskog niza (q ≠ 1)?",back:"Sₙ = a₁ · (qⁿ - 1) / (q - 1)",hint:"Za q = 1: Sₙ = n·a₁"},
    {id:"n5",topic:"seq",front:"Suma beskonačnog geometrijskog niza (|q| < 1)?",back:"S = a₁ / (1 - q)",hint:"Vrijedi samo za |q| < 1"},
    // KOMBINATORIKA
    {id:"c1",topic:"comb",front:"Formula za permutacije n elemenata?",back:"Pₙ = n!",hint:"n! = 1·2·3·...·n"},
    {id:"c2",topic:"comb",front:"Formula za kombinacije C(n,k)?",back:"C(n,k) = n! / (k! · (n-k)!)",hint:"Broj načina odabira k iz n bez reda"},
    {id:"c3",topic:"comb",front:"Binomni teorem — razvoj (a+b)ⁿ?",back:"(a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ",hint:"Koeficijenti su binomni koeficijenti"},
    {id:"c4",topic:"comb",front:"Klasična definicija vjerojatnosti?",back:"P(A) = m / n",hint:"m = broj povoljnih, n = ukupni broj jednako mogućih ishoda"},
    {id:"c5",topic:"comb",front:"Vjerojatnost suprotnog događaja?",back:"P(Ā) = 1 - P(A)",hint:"P(A) + P(Ā) = 1 uvijek"},
    {id:"c6",topic:"comb",front:"Vjerojatnost unije dva međusobno isključiva događaja?",back:"P(A∪B) = P(A) + P(B)",hint:"Ako A i B ne mogu biti istovremeni"},
    // MATRICE
    {id:"m1",topic:"mat",front:"Kada je sustav linearnih jednadžbi određen?",back:"D ≠ 0 (determinanta matrice koeficijenata)",hint:"D ≠ 0 → jedno rješenje"},
    {id:"m2",topic:"mat",front:"Determinanta 2×2 matrice [[a,b],[c,d]]?",back:"det = a·d - b·c",hint:"Dijagonala minus antidijagonala"},
    {id:"m3",topic:"mat",front:"Cramerovo pravilo — rješenje x₁?",back:"x₁ = D₁ / D",hint:"D₁ = det matrice gdje je 1. stupac zamijenjen slobodnim članovima"},
    // FINANCIJSKA MATEMATIKA
    {id:"f1",topic:"fin",front:"Formula za složene kamate?",back:"K = K₀ · (1 + p/100)ⁿ",hint:"K₀ = početni kapital, p = kamatna stopa, n = broj perioda"},
    {id:"f2",topic:"fin",front:"Formula za jednostavne kamate?",back:"K = K₀ · (1 + n·p/100)",hint:"Kamata se ne pripisuje glavnici"},
    {id:"f3",topic:"fin",front:"Što je anuitet?",back:"Jednaki periodični iznosi za otplatu kredita ili štednju",hint:"Svaki anuitet = dio glavnice + kamata"},
    {id:"f4",topic:"fin",front:"Dekurzivno vs anticipativno obračunavanje?",back:"Dekurzivno: kamata na kraju perioda\nAnticipativno: kamata na početku perioda",hint:"Na maturi češće dekurzivno"},
    // SKUPOVI I BROJEVI
    {id:"b1",topic:"br",front:"Što su prirodni, cijeli, racionalni i realni brojevi?",back:"ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",hint:"Svaki skup je podskup sljedećeg"},
    {id:"b2",topic:"br",front:"Formula za apsolutnu vrijednost?",back:"|x| = x ako x≥0, -x ako x<0",hint:"Uvijek nenegativan broj"},
    {id:"b3",topic:"br",front:"Pitagorin poučak?",back:"a² + b² = c²",hint:"c = hipotenuza (najdulja stranica)"},
    {id:"b4",topic:"br",front:"Površina trokuta s osnovicom b i visinom h?",back:"P = b·h / 2",hint:"Polovica umnožka osnovice i visine"},
    {id:"b5",topic:"br",front:"Opseg i površina kružnice polumjera r?",back:"opseg = 2πr\npovršina = πr²",hint:"Opseg = duljina kružnice, površina = disk"},
  ];

  const TOPIC_NAMES={
    trig:"Trigonometrija",al:"Derivacije & Integrali",kv:"Kvadratna jednadžba",
    exp:"Eksponencijalne & Log.",anal:"Analitička geometrija",seq:"Nizovi",
    comb:"Kombinatorika",mat:"Matrice",fin:"Financijska matematika",br:"Skupovi & Brojevi"
  };

  const FC_KEY="mat_fc";
  const[fcStore,setFcStore]=React.useState(()=>{try{return JSON.parse(DS.get(FC_KEY)||"{}")}catch(e){return {}}});
  function saveFc(next){setFcStore(next);try{DS.set(FC_KEY,JSON.stringify(next))}catch(e){}}
  function cardStat(id){return fcStore[id]||{box:0,known:0,review:0};}
  const[selectedTopic,setSelectedTopic]=React.useState("sve");
  const[sessionCards,setSessionCards]=React.useState(null);
  const[cur,setCur]=React.useState(0);
  const[flipped,setFlipped]=React.useState(false);
  const[known,setKnown]=React.useState([]);
  const[review,setReview]=React.useState([]);
  const[done,setDone]=React.useState(false);
  const[xpGained,setXpGained]=React.useState(0);
  const awardedRef=React.useRef(false);
  function masteredCount(cards){return cards.filter(c=>(cardStat(c.id).box||0)>=4).length;}

  const topics=["sve",...[...new Set(FORMULA_CARDS.map(c=>c.topic))]];

  // Nagrada (XP + streak) na kraju sesije — jednom
  React.useEffect(()=>{
    if(done&&!awardedRef.current&&sessionCards&&sessionCards.length){
      awardedRef.current=true;
      const kp=Math.round(known.length/sessionCards.length*100);
      const gained=10+known.length*2+(kp>=80?15:0);
      setXpGained(gained);
      window._playSound&&window._playSound(kp>=80?"done":"click");
      if(onUpdateUserData) onUpdateUserData(prev=>{const ss=updateStreak(prev);return{...ss,xp:(prev.xp||0)+gained};});
    }
  },[done]);

  // Tipkovnica: space/Enter=flip, Z=znam, R=ponovi (samo u aktivnoj sesiji)
  React.useEffect(()=>{
    if(!sessionCards||done) return;
    function onKey(ev){
      if(ev.target&&/INPUT|TEXTAREA/.test(ev.target.tagName)) return;
      if(ev.code==="Space"||ev.code==="Enter"){ev.preventDefault();setFlipped(f=>!f);}
      else if(flipped&&(ev.key==="z"||ev.key==="Z")) markKnown();
      else if(flipped&&(ev.key==="r"||ev.key==="R")) markReview();
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[sessionCards,done,flipped,cur]);

  function startSession(){
    const pool=selectedTopic==="sve"
      ?FORMULA_CARDS
      :FORMULA_CARDS.filter(c=>c.topic===selectedTopic);
    // Weak-first: nepoznate/slabije kartice (niži box) prvo, nasumično unutar istog boxa
    const ordered=[...pool].map(c=>({c,box:cardStat(c.id).box||0,r:Math.random()}))
      .sort((a,b)=>a.box-b.box||a.r-b.r).map(x=>x.c);
    setSessionCards(ordered);
    setCur(0);setFlipped(false);setKnown([]);setReview([]);setDone(false);
    awardedRef.current=false;
  }

  function markKnown(){
    const id=sessionCards[cur].id;const st=cardStat(id);
    saveFc({...fcStore,[id]:{box:Math.min(5,(st.box||0)+1),known:(st.known||0)+1,review:st.review||0,last:Date.now()}});
    setKnown(k=>[...k,id]);
    next();
  }
  function markReview(){
    const id=sessionCards[cur].id;const st=cardStat(id);
    saveFc({...fcStore,[id]:{box:Math.max(0,(st.box||0)-1),known:st.known||0,review:(st.review||0)+1,last:Date.now()}});
    setReview(r=>[...r,id]);
    next();
  }
  function next(){
    setFlipped(false);
    setTimeout(()=>{
      if(cur>=sessionCards.length-1) setDone(true);
      else setCur(c=>c+1);
    },200);
  }

  // Odabir teme — početni ekran
  if(!sessionCards){
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onBack},"← Natrag"),
        e("span",{className:"ntitle"},"🃏 Flashcards — Formule & Pojmovi")
      ),
      e("div",{style:{maxWidth:560,margin:"0 auto",padding:"32px 20px 60px"}},
        e("div",{style:{
          borderRadius:18,padding:"28px 24px 24px",marginBottom:28,
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)",
          position:"relative",overflow:"hidden"
        }},
          e("div",{style:{position:"absolute",right:-8,bottom:-20,fontSize:100,
            fontFamily:"var(--fh)",opacity:.05,lineHeight:1,userSelect:"none"}},"∑"),
          e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
            color:"rgba(255,255,255,.55)",marginBottom:8}},"Flashcards"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:26,color:"#fff",marginBottom:8}},
            "Formule i pojmovi"),
          e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",lineHeight:1.6,marginBottom:14}},
            FORMULA_CARDS.length+" kartica · "+masteredCount(FORMULA_CARDS)+" savladano"),
          (()=>{const mp=Math.round(masteredCount(FORMULA_CARDS)/FORMULA_CARDS.length*100);return e("div",{style:{position:"relative",zIndex:1}},
            e("div",{style:{height:7,background:"rgba(255,255,255,.15)",borderRadius:99,overflow:"hidden"}},
              e("div",{style:{height:"100%",width:mp+"%",background:"linear-gradient(90deg,#6ee7a0,#50c878)",borderRadius:99,transition:"width .6s"}})),
            e("div",{style:{fontSize:11,color:"rgba(255,255,255,.6)",marginTop:5}},mp+"% formula savladano")
          );})()
        ),
        e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",
          color:"var(--muted)",marginBottom:12,display:"flex",alignItems:"center",gap:8}},
          e("span",null,"Odaberi temu"),
          e("div",{style:{flex:1,height:1,background:"var(--bdr)"}})
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:24}},
          topics.map(t=>e("div",{key:t,
            onClick:()=>setSelectedTopic(t),
            style:{
              display:"flex",alignItems:"center",gap:12,padding:"12px 16px",
              background:selectedTopic===t?"var(--blue-d)":"var(--s1)",
              border:"1px solid "+(selectedTopic===t?"var(--blue-b)":"var(--bdr)"),
              borderRadius:11,cursor:"pointer",transition:"all .15s"
            }
          },
            e("div",{style:{
              width:8,height:8,borderRadius:"50%",flexShrink:0,
              background:selectedTopic===t?"var(--blue)":"var(--s3)"
            }}),
            e("div",{style:{flex:1,fontSize:13,fontWeight:selectedTopic===t?700:400,
              color:selectedTopic===t?"var(--blue)":"var(--text)"}},
              t==="sve"?"Sve teme ("+FORMULA_CARDS.length+" kartica)":(TOPIC_NAMES[t]||t)+" ("+FORMULA_CARDS.filter(c=>c.topic===t).length+" kartica)"
            ),
            (()=>{const tc=t==="sve"?FORMULA_CARDS:FORMULA_CARDS.filter(c=>c.topic===t);const mc=masteredCount(tc);return e("div",{style:{display:"flex",alignItems:"center",gap:6,flexShrink:0}},
              e("div",{style:{width:42,height:5,background:"var(--s3)",borderRadius:99,overflow:"hidden"}},
                e("div",{style:{height:"100%",width:Math.round(mc/tc.length*100)+"%",background:mc===tc.length?"var(--green)":"var(--gold)",borderRadius:99}})),
              e("span",{style:{fontSize:11,color:"var(--muted)",minWidth:30,textAlign:"right"}},mc+"/"+tc.length)
            );})()
          ))
        ),
        e("button",{className:"btn btn-blue",style:{width:"100%",padding:"14px",fontSize:15},
          onClick:startSession},"Kreni →")
      )
    );
  }

  // Završetak sesije
  if(done){
    const total=sessionCards.length;
    const knownPct=Math.round(known.length/total*100);
    return e(Fragment,null,
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
          onClick:()=>setSessionCards(null)},"← Natrag"),
        e("span",{className:"ntitle"},"🃏 Flashcards — Gotovo")
      ),
      e("div",{style:{maxWidth:560,margin:"0 auto",padding:"32px 20px 60px"}},
        e("div",{style:{
          borderRadius:18,padding:"32px 24px",marginBottom:24,textAlign:"center",
          background:"linear-gradient(135deg,#0b1b3a 0%,#143a7a 50%,#2d6ad4 100%)"
        }},
          e("div",{style:{fontSize:44,marginBottom:12}},knownPct>=80?"🏆":knownPct>=60?"✅":"📚"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:38,color:"#fff",marginBottom:6}},knownPct+"%"),
          e("div",{style:{fontSize:14,color:"rgba(255,255,255,.7)"}},
            "znaš "+known.length+" od "+total+" kartica"),
          xpGained>0&&e("div",{style:{display:"inline-flex",gap:8,marginTop:10}},
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(232,197,71,.2)",border:"1px solid rgba(232,197,71,.4)",color:"#fcd34d"}},"+"+xpGained+" XP"),
            e("span",{style:{fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:99,background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff"}},"🔥 "+(userData?.streak||0)+" dana")
          )
        ),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}},
          e("div",{style:{background:"var(--green-d)",border:"1px solid rgba(61,214,140,.25)",
            borderRadius:14,padding:"16px",textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--green)"}},known.length),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Znam ✓")
          ),
          e("div",{style:{background:"var(--red-d)",border:"1px solid rgba(248,113,113,.25)",
            borderRadius:14,padding:"16px",textAlign:"center"}},
            e("div",{style:{fontFamily:"var(--fh)",fontSize:28,color:"var(--red)"}},review.length),
            e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:3}},"Za ponavljanje 🔁")
          )
        ),
        e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
          review.length>0&&e("button",{
            className:"btn btn-blue",style:{width:"100%",padding:"12px"},
            onClick:()=>{
              const reviewCards=sessionCards.filter(c=>review.includes(c.id));
              setSessionCards(reviewCards.sort(()=>Math.random()-.5));
              setCur(0);setFlipped(false);setKnown([]);setReview([]);setDone(false);
            }
          },"🔁 Ponovi greške ("+review.length+")"),
          e("button",{className:"btn btn-g",style:{width:"100%",padding:"12px"},
            onClick:startSession},"🔀 Nova sesija"),
          e("button",{className:"btn btn-g",style:{width:"100%",padding:"12px"},
            onClick:()=>setSessionCards(null)},"← Promijeni temu")
        )
      )
    );
  }

  // Aktivna sesija — kartica
  const card=sessionCards[cur];
  const progress=(cur/sessionCards.length)*100;

  return e(Fragment,null,
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},
        onClick:()=>setSessionCards(null)},"← Natrag"),
      e("span",{className:"ntitle"},"🃏 "+( TOPIC_NAMES[card.topic]||card.topic)),
      e("span",{style:{fontSize:12,color:"var(--muted)",marginLeft:"auto"}},
        (cur+1)+"/"+sessionCards.length)
    ),
    e("div",{style:{maxWidth:520,margin:"0 auto",padding:"20px 20px 60px"}},
      // Progress bar
      e("div",{className:"fc-progress"},
        e("div",{className:"fc-progress-fill",style:{width:progress+"%"}})
      ),

      // Kartica
      e("div",{className:"fc-scene",onClick:()=>setFlipped(f=>!f)},
        e("div",{className:"fc-card"+(flipped?" flipped":""),style:{minHeight:220}},
          // Prednja strana
          e("div",{className:"fc-face fc-front"},
            e("div",{className:"fc-label"},"Pitanje - klikni za odgovor"),
            e("div",{className:"fc-q",style:{flexDirection:"column",alignItems:"flex-start"}},
              e("div",null,card.front)
            ),
            e("div",{className:"fc-hint"},"👆 Klikni za prikaz odgovora")
          ),
          // Stražnja strana
          e("div",{className:"fc-face fc-back"},
            e("div",{className:"fc-label"},"Odgovor"),
            e("div",{className:"fc-q",style:{flexDirection:"column",alignItems:"flex-start",gap:8}},
              e("div",{className:"fc-formula"},card.back),
              card.hint&&e("div",{style:{fontSize:12,color:"rgba(255,255,255,.6)",
                marginTop:4,lineHeight:1.55}},
                "💡 "+card.hint)
            )
          )
        )
      ),

      // Gumbi — prikazani samo kad je flippano
      flipped
        ?e("div",{className:"fc-btns"},
            e("button",{className:"fc-btn-review",onClick:markReview},"🔁 Ponovi"),
            e("button",{className:"fc-btn-know",onClick:markKnown},"✓ Znam!")
          )
        :e("div",{style:{textAlign:"center",fontSize:12,color:"var(--muted)",padding:"8px 0"}},
            "Pokušaj se sjetiti odgovora, pa klikni karticu"),

      // Mini statistika
      e("div",{style:{display:"flex",justifyContent:"center",gap:20,marginTop:16,fontSize:12,color:"var(--muted)"}},
        e("span",{style:{color:"var(--green)"}},known.length+" ✓"),
        e("span",{style:{color:"var(--red)"}},review.length+" 🔁"),
        e("span",null,sessionCards.length-cur-1+" preostalo")
      )
    )
  );
}
function AdaptiveTrening({userData,onExit,onHome,onStartErrorSession}){
  var rz=(typeof DS!=="undefined"&&DS.get)?DS.get("mat_razina"):null;
  var pool=React.useMemo(function(){
    var arr=[];
    Object.values(EXAMS).forEach(function(ex){
      if(rz&&ex.razina&&ex.razina!==rz) return;
      (ex.qs||[]).forEach(function(q){
        if(q.type!=="mc"||!q.opts||!q.opts.length||!q.sol||!q.sol.cl) return;
        var t=(q.points>=3)?3:(q.points===2?2:1);
        arr.push(Object.assign({},q,{_examKey:ex.key,_tier:t}));
      });
    });
    return arr;
  },[]);
  var TOTAL=12;
  var TIERLBL={1:"Lako",2:"Srednje",3:"Teško"};
  var TIERCOL={1:"var(--green)",2:"var(--gold)",3:"var(--red)"};
  var _t=React.useState(2),tier=_t[0],setTier=_t[1];
  var _c=React.useState(null),curQ=_c[0],setCurQ=_c[1];
  var _s=React.useState(null),sel=_s[0],setSel=_s[1];
  var _k=React.useState(0),streak=_k[0],setStreak=_k[1];
  var _l=React.useState([]),log=_l[0],setLog=_l[1];
  var _d=React.useState(false),done=_d[0],setDone=_d[1];
  var askedRef=React.useRef({});
  var tierRef=React.useRef(2);
  var streakRef=React.useRef(0);

  function pickNext(t){
    var order=[t,t-1,t+1,t-2,t+2].filter(function(x){return x>=1&&x<=3;});
    for(var i=0;i<order.length;i++){
      var cands=pool.filter(function(q){return q._tier===order[i]&&!askedRef.current[q.id];});
      if(cands.length) return cands[Math.floor(Math.random()*cands.length)];
    }
    return null;
  }
  function begin(){
    askedRef.current={}; tierRef.current=2; streakRef.current=0;
    setTier(2); setStreak(0); setLog([]); setDone(false); setSel(null);
    var q=pickNext(2);
    if(q){askedRef.current[q.id]=1; setCurQ(q);} else setCurQ(null);
  }
  React.useEffect(function(){begin();},[]);

  function answer(letter){
    if(sel!==null||!curQ) return;
    setSel(letter);
    var ok=chk(curQ,letter)===true;
    setLog(function(L){return L.concat([{id:curQ.id,topic:curQ.topic,ok:ok,tier:curQ._tier}]);});
    var t=tierRef.current;
    if(ok){
      var ns=streakRef.current+1;
      if(ns>=2&&t<3){t=t+1;ns=0;}
      streakRef.current=ns; setStreak(ns);
    } else {
      if(t>1)t=t-1;
      streakRef.current=0; setStreak(0);
    }
    tierRef.current=t; setTier(t);
  }
  function nextQ(){
    if(log.length>=TOTAL){ setDone(true); return; }
    var q=pickNext(tierRef.current);
    if(!q){ setDone(true); return; }
    askedRef.current[q.id]=1; setCurQ(q); setSel(null);
  }

  if(pool.length<6) return e("div",{className:"home",style:{maxWidth:560,margin:"0 auto",padding:"18px 16px"}},
    e("button",{className:"btn btn-g",onClick:onExit},"← Natrag"),
    e("div",{style:{marginTop:24,textAlign:"center",color:"var(--muted)",fontSize:14}},"Nema dovoljno MC zadataka za adaptivni trening na ovoj razini."));

  if(done){
    var n=log.length, correct=log.filter(function(x){return x.ok;}).length;
    var pct=n?Math.round(correct/n*100):0;
    var byT={1:{c:0,n:0},2:{c:0,n:0},3:{c:0,n:0}};
    log.forEach(function(x){byT[x.tier].n++; if(x.ok)byT[x.tier].c++;});
    var stable=1;
    [1,2,3].forEach(function(t){ if(byT[t].n>=2 && byT[t].c/byT[t].n>=0.6) stable=t; });
    var levelTxt=stable===3?"Napredna razina — spreman/na za najteže zadatke (cilj 5)":stable===2?"Solidna razina — čvrsto stojiš na srednjima (cilj 4)":"Osnovna razina — gradi temelje (cilj 2–3)";
    var gradeEst=grade(pct);
    var wt={}; log.forEach(function(x){ if(!x.ok&&x.topic){var l=TOPIC_LABELS[x.topic]||x.topic; wt[l]=(wt[l]||0)+1;} });
    var weakArr=Object.keys(wt).sort(function(a,b){return wt[b]-wt[a];}).slice(0,3);
    return e("div",{className:"home",style:{maxWidth:560,margin:"0 auto",padding:"18px 16px"}},
      e("div",{className:"nav"},
        e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
        e("span",{className:"ntitle"},"🎯 Adaptivni rezultat"),
        e("span",{className:"nsp"})),
      e("div",{style:{textAlign:"center",padding:"18px 0 8px"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:46,lineHeight:1,color:TIERCOL[stable]}},pct+"%"),
        e("div",{style:{fontSize:13,color:"var(--muted)",marginTop:6}},correct+"/"+n+" točno · procijenjena ocjena ~"+gradeEst)),
      e("div",{style:{padding:"14px 16px",borderRadius:14,background:"var(--s2)",border:"1px solid var(--bdr)",margin:"14px 0"}},
        e("div",{style:{fontSize:13.5,fontWeight:800,color:TIERCOL[stable],marginBottom:4,lineHeight:1.45}},"📊 "+levelTxt),
        e("div",{style:{display:"flex",gap:8,marginTop:12}},[1,2,3].map(function(t){
          var b=byT[t];var p=b.n?Math.round(b.c/b.n*100):null;
          return e("div",{key:t,style:{flex:1,background:"var(--s1)",borderRadius:10,padding:"10px 6px",textAlign:"center",border:"1px solid "+(stable===t?TIERCOL[t]:"var(--bdr)")}},
            e("div",{style:{fontSize:15,fontWeight:800,color:b.n?TIERCOL[t]:"var(--muted)"}},p==null?"—":p+"%"),
            e("div",{style:{fontSize:10.5,color:"var(--muted)",marginTop:2}},TIERLBL[t]+(b.n?(" · "+b.n):"")));
        }))),
      weakArr.length>0&&e("div",{style:{padding:"12px 15px",borderRadius:12,background:"var(--gold-d)",border:"1px solid var(--gold-b)",marginBottom:14}},
        e("div",{style:{fontSize:12.5,fontWeight:700,color:"var(--gold)",marginBottom:6}},"🎯 Tu si najviše griješio/la"),
        e("div",{style:{fontSize:13,color:"var(--text)",lineHeight:1.5}},weakArr.join(" · "))),
      e("div",{style:{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}},
        e("button",{className:"btn btn-blue",onClick:begin},"🔁 Još jednom"),
        weakArr.length>0&&onStartErrorSession&&e("button",{className:"btn btn-g",onClick:function(){
          var qs=[]; var labels={}; weakArr.forEach(function(l){labels[l]=1;});
          Object.values(EXAMS).forEach(function(ex){ if(rz&&ex.razina&&ex.razina!==rz)return; (ex.qs||[]).forEach(function(q){ if(q.type==="proof"||q.type==="sa"||q.type==="pa")return; if(labels[TOPIC_LABELS[q.topic]||q.topic]) qs.push(Object.assign({},q,{_examKey:ex.key})); }); });
          qs=qs.sort(function(){return Math.random()-0.5;}).slice(0,12);
          if(qs.length) onStartErrorSession({key:"adaptive_weak",year:"Slabe",season:"session",razina:rz||"B",label:"Slabe teme",qs:qs,duration:qs.length*120});
        }},"📚 Vježbaj slabe teme"),
        e("button",{className:"btn btn-g",onClick:onHome},"🏠 Početna")));
  }

  if(!curQ) return e("div",{className:"home",style:{padding:30,textAlign:"center",color:"var(--muted)"}},"Učitavanje…");
  var answered=sel!==null;
  var ik=__imgKey(curQ._examKey,curQ);
  var figFn=curQ.img?__MAT.Q_IMAGES[ik]:null;
  var qnum=log.length+1;
  return e("div",{className:"home",style:{maxWidth:760,margin:"0 auto",padding:"14px 16px"}},
    e("div",{className:"nav"},
      e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"✕ Izlaz"),
      e("span",{className:"ntitle"},"🎯 Adaptivni trening"),
      e("span",{style:{marginLeft:"auto",fontSize:12,fontWeight:700,padding:"4px 11px",borderRadius:99,background:TIERCOL[tier]+"22",color:TIERCOL[tier],border:"1px solid "+TIERCOL[tier]}},TIERLBL[tier])),
    e("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"10px 0 16px"}},
      e("div",{style:{flex:1,height:7,background:"var(--s2)",borderRadius:99,overflow:"hidden"}},e("div",{style:{height:"100%",width:Math.round((qnum-1)/TOTAL*100)+"%",background:"var(--blue)",borderRadius:99,transition:"width .3s"}})),
      e("span",{style:{fontSize:12,fontWeight:700,color:"var(--muted)",flexShrink:0}},qnum+"/"+TOTAL)),
    e("div",{className:"qcard",style:{borderLeft:"3px solid "+TIERCOL[curQ._tier]}},
      e("div",{className:"qmeta-sub",style:{marginBottom:12,color:"var(--muted)",fontSize:12,fontWeight:600}},(TOPIC_LABELS[curQ.topic]||curQ.topic||"Zadatak")+" · "+TIERLBL[curQ._tier]),
      curQ.context&&e("div",{style:{fontSize:13.5,lineHeight:1.55,color:"var(--muted)",marginBottom:12,paddingLeft:12,borderLeft:"3px solid var(--blue)"}},renderQText(curQ.context)),
      figFn&&e("div",{style:{margin:"4px 0 12px",padding:10,background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,display:"inline-block",maxWidth:"100%"}},figFn()),
      e("div",{className:"qtext",style:{marginBottom:14,fontSize:15.5,lineHeight:1.5}},renderQText(curQ.q)),
      e("div",{className:"opts"}, curQ.opts.map(function(opt,oi){
        var letter=LL[oi];
        var cls="opt";
        if(sel===letter) cls+=" sel";
        if(answered&&letter===curQ.sol.cl) cls="opt ok";
        else if(answered&&sel===letter&&letter!==curQ.sol.cl) cls="opt bad";
        return e("div",{key:oi,className:cls,onClick:function(){answer(letter);},style:answered?{cursor:"default"}:null},
          e("div",{className:"optl"},letter),
          e("div",{className:"optt"},renderOptContent(opt)));
      })),
      answered&&e("div",{style:{marginTop:14}},
        e(AnswerHelper,{q:curQ,autoExpand:true,hideToggle:true}),
        e("button",{className:"btn btn-blue",style:{marginTop:14,width:"100%"},onClick:nextQ}, log.length>=TOTAL?"Vidi rezultat →":"Sljedeći zadatak →"))
    ));
}
function App(){
  const[screen,_setScreen]=useState("home");
  const navStackRef=React.useRef([]);
  function setScreen(to){if(typeof to==="string"&&to!==screen){navStackRef.current.push(screen);if(navStackRef.current.length>40)navStackRef.current.shift();}_setScreen(to);}
  function goBack(){pendingResumeRef.current=null;var prev=navStackRef.current.pop();_setScreen(prev||"home");window.scrollTo(0,0);}
  const[examKey,setExamKey]=useState(Object.keys(EXAMS)[0]);
  useEffect(()=>{
    const SEL=".opt,.mc,.exam-btn,.year-card-hdr,.next-step-card,.qicon";
    const stamp=root=>{if(!root||!root.querySelectorAll)return;
      root.querySelectorAll(SEL).forEach(el=>{if(!el.hasAttribute("tabindex")){el.setAttribute("tabindex","0");el.setAttribute("role","button");}});
      root.querySelectorAll("svg:not([role]):not([aria-hidden])").forEach(s=>{var w=s.getAttribute("width");var small=w&&/^\d+(\.\d+)?$/.test(w)&&parseFloat(w)<=24;if(small){s.setAttribute("aria-hidden","true");}else{s.setAttribute("role","img");if(!s.getAttribute("aria-label"))s.setAttribute("aria-label","Matemati\u010dka ilustracija uz zadatak");}});};
    stamp(document);
    const mo=new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)stamp(n);})));
    mo.observe(document.body,{childList:true,subtree:true});
    const onKey=ev=>{const a=document.activeElement;
      if(!a||!a.matches||!a.matches(SEL))return;
      if(ev.key===" "){ev.preventDefault();a.click();}
      else if(ev.key==="Enter"&&!a.matches(".opt")){ev.preventDefault();a.click();}};
    document.addEventListener("keydown",onKey);
    return()=>{mo.disconnect();document.removeEventListener("keydown",onKey);};
  },[]);
  const[pendingExamKey,setPendingExamKey]=useState(null);
  // 2.1: EXAMS se puni lazy — ponovo iscrtaj kad ispit stigne.
  const[,_bumpExams]=useState(0);
  const[examLoad,setExamLoad]=useState(null); // null | {pct}
  const[examErr,setExamErr]=useState(null);   // null | {msg,retry}
  useEffect(()=>__onExamsChanged(()=>_bumpExams(x=>x+1)),[]);
  // Home je iscrtan iz kataloga; ostatak (bez zakljucanih) se dovlaci u pozadini za cross-exam modove.
  useEffect(()=>{const t=setTimeout(()=>{loadAllExams().catch(()=>{});},1500);return()=>clearTimeout(t);},[]);
  // Ucitavanje moze pasti (offline, CDN 404, deploy u tijeku) — tada NE ulazimo u ekran s 0 pitanja,
  // nego korisnik dobije poruku i "Pokusaj ponovno".
  function withExam(k,fn){
    if(!k||isExamLoaded(k)) return fn();
    setExamLoad({pct:0});setExamErr(null);
    loadExam(k).then(()=>{
      setExamLoad(null);
      if(!isExamLoaded(k)) throw new Error("Ispit nije ucitan.");
      fn();
    }).catch(()=>{
      setExamLoad(null);
      setExamErr({msg:"Ne mogu učitati zadatke ovog ispita. Provjeri internetsku vezu.",retry:()=>withExam(k,fn)});
    });
  }
  function withAllExams(fn){
    if(allExamsLoaded()) return fn();
    setExamLoad({pct:0});setExamErr(null);
    loadAllExams(p=>setExamLoad({pct:p})).then((r)=>{
      setExamLoad(null);
      if(r&&r.total&&r.failed>=r.total) throw new Error("Nijedan ispit nije ucitan.");
      fn();
    }).catch(()=>{
      setExamLoad(null);
      setExamErr({msg:"Ne mogu učitati zadatke. Provjeri internetsku vezu.",retry:()=>withAllExams(fn)});
    });
  }
  function goAll(sc){ withAllExams(()=>{setScreen(sc);window.scrollTo(0,0);}); }
  const[dDayOpen,setDDayOpen]=useState(false);
  const[xpGains,setXpGains]=React.useState([]);
  const[darkMode,setDarkMode]=useState(()=>{try{
    const v=DS.get("mat_dark");
    if(v==="1")return true; if(v==="0")return false;
    return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
  }catch{return false}});
  const[soundOn,setSoundOn]=useState(()=>{try{return DS.get("mat_sound")!=="0"}catch{return true}});
  const[cbMode,setCbMode]=useState(()=>{try{return DS.get("mat_cb")==="1"}catch{return false}});
  const[dysMode,setDysMode]=useState(()=>{try{return DS.get("mat_dys")==="1"}catch{return false}});
  const[showDisclaimer,setShowDisclaimer]=useState(false);
  const[userRazina,setUserRazina]=useState(()=>{try{return DS.get("mat_razina")||null}catch(e){return null}});
  const[showOnboarding,setShowOnboarding]=useState(false);
  const[,_bumpResume]=useState(0);
  const[,_bumpPro]=useState(0);
  useEffect(()=>{const f=()=>_bumpPro(x=>x+1);window.addEventListener("discere-pro",f);return()=>window.removeEventListener("discere-pro",f);},[]);
  useEffect(()=>{try{document.title=SUBJECT.docTitleTpl(userRazina);}catch(e){}},[userRazina]);
  const[badgeToast,setBadgeToast]=useState(null);
  function goPatchResult(patch){updateUserData(p=>{const h=[...(p.history||[])];if(!h.length)return p;h[h.length-1]={...h[h.length-1],...patch};return{...p,history:h};});}
  const pendingResumeRef=React.useRef(null);
  const resumeInfo=(()=>{try{const r=JSON.parse(DS.get("mat_resume")||"null");
    return r&&r.key&&EXAMS[r.key]&&Object.keys(r.answers||{}).length>0&&(Date.now()-(r.ts||0)<48*3600*1000)?r:null;}catch(e){return null;}})();
  function goResume(){if(!resumeInfo)return;withExam(resumeInfo.key,()=>{pendingResumeRef.current=resumeInfo;setExamKey(resumeInfo.key);
    setScreen(resumeInfo.examMode?"exammode":resumeInfo.timedPractice?"practice_timed":resumeInfo.practice?"practice":"exam");window.scrollTo(0,0);});}
  function discardResume(){try{DS.set("mat_resume","");}catch(e){}pendingResumeRef.current=null;_bumpResume(x=>x+1);}

  useEffect(()=>{
    document.body.classList.toggle("dark-mode",darkMode);
    document.body.classList.toggle("light-mode",!darkMode);
    DS.set("mat_dark",darkMode?"1":"0");
  },[darkMode]);
  useEffect(()=>{
    document.body.classList.toggle("cb-mode",cbMode);
    document.body.classList.toggle("dys-mode",dysMode);
    DS.set("mat_cb",cbMode?"1":"0");
    DS.set("mat_dys",dysMode?"1":"0");
  },[cbMode,dysMode]);

  function playSound(type){
    if(!soundOn)return;
    try{if(navigator.vibrate){const VP={correct:[15],wrong:[20,50,20],done:[15,40,15,40,70],levelup:[15,40,15,40,70]};if(VP[type])navigator.vibrate(VP[type]);}}catch(eV){}
    try{
      const ctx=new(window.AudioContext||window.webkitAudioContext)();
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      if(type==="correct"){osc.frequency.setValueAtTime(880,ctx.currentTime);osc.frequency.setValueAtTime(1100,ctx.currentTime+.1);gain.gain.setValueAtTime(.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.3);osc.start();osc.stop(ctx.currentTime+.3);}
      else if(type==="wrong"){osc.frequency.setValueAtTime(330,ctx.currentTime);osc.frequency.setValueAtTime(220,ctx.currentTime+.1);gain.gain.setValueAtTime(.1,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.3);osc.type="sawtooth";osc.start();osc.stop(ctx.currentTime+.3);}
      else if(type==="done"){[523,659,784].forEach((f,i)=>{const o2=ctx.createOscillator(),g2=ctx.createGain();o2.connect(g2);g2.connect(ctx.destination);o2.frequency.value=f;g2.gain.setValueAtTime(.12,ctx.currentTime+i*.12);g2.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+i*.12+.25);o2.start(ctx.currentTime+i*.12);o2.stop(ctx.currentTime+i*.12+.25);});}
    }catch(e){}
  }
  window._playSound=playSound;

  const[userData,updateUserData,reloadUserData]=useUserData();
  const achInit=React.useRef(false);
  React.useEffect(()=>{
    if(!userData)return;
    const prevB=userData.badges||{};
    const next={...prevB};let changed=false,up=null,upLv=0;
    ACHIEVEMENTS.forEach(a=>{
      let lv=0;try{lv=achLevel(a,userData);}catch(e){lv=0;}
      const prev=prevB[a.id];
      const prevLv=(typeof prev==="number"&&prev<100)?prev:(prev?1:0);
      if(lv>0){if(prev!==lv){next[a.id]=lv;changed=true;}}else if(prev!=null){delete next[a.id];changed=true;}
      if(achInit.current&&lv>prevLv){up=a;upLv=lv;}
    });
    if(changed)updateUserData(p=>({...p,badges:{...next}}));
    if(up){setBadgeToast({...up,_lv:upLv});fireConfetti();setTimeout(()=>setBadgeToast(null),4200);}
    achInit.current=true;
  },[userData]);

  // ── Parent (Supabase) bridge: signaliziraj READY, primi HYDRATE ──
  useEffect(()=>{
    function applyHydrate(){
      const st=window.__DISCERE_HYDRATE__; if(!st) return;
      DS.hydrate(st);
      reloadUserData();
      try{ setDarkMode(DS.get("mat_dark")==="1"); }catch(e){}
      try{ setSoundOn(DS.get("mat_sound")!=="0"); }catch(e){}
      try{ setUserRazina(DS.get("mat_razina")||null); }catch(e){}
    }
    if(window.__DISCERE_HYDRATE__) applyHydrate();
    window.addEventListener("discere-hydrate",applyHydrate);
    try{ if(window.parent&&window.parent!==window) window.parent.postMessage({type:"DISCERE_READY"},"*"); }catch(e){}
    return()=>window.removeEventListener("discere-hydrate",applyHydrate);
  },[]);

  function goHome(){pendingResumeRef.current=null;navStackRef.current=[];_setScreen("home");window.scrollTo(0,0);}
  function goExam(k){withExam(k,()=>{setExamKey(k);setScreen("exam");window.scrollTo(0,0);});}
  // ModeSelect cita exam.qs (broj zadataka, "Sto te ceka") — zato i ovaj ulaz mora biti gated.
  function goModeSelect(k){withExam(k,()=>{setPendingExamKey(k);setScreen("modeselect");window.scrollTo(0,0);});}
  function goPractice(k){const kk=k||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("practice");window.scrollTo(0,0);});}
  function goPracticeTimer(k){const kk=k||pendingExamKey||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("practice_timed");window.scrollTo(0,0);});}
  function goExamMode(k){const kk=k||pendingExamKey||Object.keys(EXAMS)[0];withExam(kk,()=>{setExamKey(kk);setScreen("exammode");window.scrollTo(0,0);});}
  function goStats(){goAll("stats");}
  function goAdaptive(){goAll("adaptive");}
  function goFormule(){setScreen("formule");window.scrollTo(0,0);}
  function goPDFReport(){setScreen("pdf_report");window.scrollTo(0,0);}
  function goGuide(){setScreen("guide");window.scrollTo(0,0);}
  function goFilter(){goAll("filter");}
  function goSRS(){goAll("srs");}
  function goAIPractice(){setScreen("aipractice");window.scrollTo(0,0);}
  function goDDay(){setDDayOpen(true);}
  function goFilterSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);
    window._virtualExam=virtualExam;
    setScreen("filter_session");
    window.scrollTo(0,0);
  }
  function goVirtualExam(razina){ withAllExams(()=>__goVirtualExam(razina)); }
  function __goVirtualExam(razina){
    const target=razina||"B";
    const examKeys=Object.keys(EXAMS).filter(k=>EXAMS[k].razina===target && !k.startsWith("_virtual_"));
    const allQs=[];
    examKeys.forEach(k=>{
      (EXAMS[k].qs||[]).forEach(q=>allQs.push(Object.assign({},q,{_srcKey:k,_examKey:k,_origId:q.id})));
    });
    for(let i=allQs.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [allQs[i],allQs[j]]=[allQs[j],allQs[i]];
    }
    const count=target==="A"?36:28;
    const selected=allQs.slice(0,count).map((q,idx)=>Object.assign({},q,{id:idx+1}));
    const vex={
      key:"_virtual_"+target+"_"+Date.now(),
      year:"Virtual",
      season:"random",
      razina:target,
      label:"Virtualni ispit ("+target+" razina)",
      qs:selected,
      duration:(target==="A"?180:150)*60
    };
    vex._loaded=true;
    window._virtualExam=vex;
    EXAMS[vex.key]=vex;
    setExamKey(vex.key);
    setScreen("virtual_exam");
    window.scrollTo(0,0);
  }
  function goErrors(){goAll("errors");}
  function goBrowse(){goAll("browse");}
  // BookmarksScreen je cross-exam (rjesava EXAMS[examKey].qs.find) — treba sve ispite kao i browse/srs.
  function goBookmarks(){goAll("bookmarks");}
  function goBookmarkSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);
    window._virtualExam=virtualExam;
    setScreen("practice");
    window.scrollTo(0,0);
  }
  function goFlashcards(){goAll("flashcards");}
  function goDailyChallenge(){goAll("daily");}

  function goPracticeExamErrors(wrongQs,srcExam){
    const virtualExam={key:"exam_errors_session",year:srcExam.year,season:srcExam.season,label:srcExam.label+"  -  Greške",qs:[...wrongQs].sort(()=>Math.random()-.5),duration:30*60};
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;setScreen("errors_session");window.scrollTo(0,0);
  }
  function goPracticeSimilar(topic,topicLabel){ withAllExams(()=>__goPracticeSimilar(topic,topicLabel)); }
  function __goPracticeSimilar(topic,topicLabel){
    // Skupi sve zadatke iste teme iz SVIH ispita
    const allQs=[];
    Object.values(EXAMS).forEach(exam=>{
      (exam.qs||[]).forEach(q=>{
        if(q.topic===topic&&q.type!=="proof"&&q.type!=="sa"){
          allQs.push({...q,_examLabel:exam.year+" "+exam.label});
        }
      });
    });
    const shuffled=[...allQs].sort(()=>Math.random()-.5);
    const virtualExam={
      key:"similar_session",year:"Slični zadatci",season:"session",
      label:topicLabel||topic,
      qs:shuffled,duration:Math.max(20,shuffled.length*4)*60
    };
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;
    setScreen("similar_session");window.scrollTo(0,0);
  }
  function goMixedTopics(){ withAllExams(()=>__goMixedTopics()); }
  function __goMixedTopics(){
    const lvl=userRazina||"B";
    // slabost iz povijesti (topic_breakdown), >=3 pokušaja i pct<60%
    const acc={};
    ((userData&&userData.history)||[]).forEach(function(h){
      var tb=h&&h.topic_breakdown; if(!tb)return;
      Object.keys(tb).forEach(function(t){ if(!acc[t])acc[t]={c:0,n:0}; acc[t].c+=tb[t].correct||0; acc[t].n+=tb[t].total||0; });
    });
    var weak=Object.keys(acc).map(function(t){return {t:t,pct:acc[t].n?acc[t].c/acc[t].n:1,n:acc[t].n};})
      .filter(function(r){return r.n>=3 && r.pct<0.6;}).sort(function(a,b){return a.pct-b.pct;})
      .slice(0,4).map(function(r){return r.t;});
    // bazen po temi (samo trenutna razina, bez proof/sa za auto-feedback)
    var byTopic={};
    Object.keys(EXAMS).forEach(function(k){ var ex=EXAMS[k]; if(!ex||ex.razina!==lvl||k.indexOf("_virtual_")===0||k.indexOf("mixed_session_")===0)return;
      (ex.qs||[]).forEach(function(q){ if(q.type==="proof"||q.type==="sa"||!q.topic)return; (byTopic[q.topic]=byTopic[q.topic]||[]).push(Object.assign({},q,{_examLabel:ex.year+" "+ex.label})); });
    });
    // fallback: premalo signala -> 4 teme s najviše zadataka (spread)
    if(weak.length<2){ weak=Object.keys(byTopic).sort(function(a,b){return byTopic[b].length-byTopic[a].length;}).slice(0,4); }
    weak=weak.filter(function(t){return byTopic[t]&&byTopic[t].length;});
    if(weak.length<2){ try{alert("Nedovoljno zadataka za miješanu sesiju na ovoj razini.");}catch(e){} return; }
    weak.forEach(function(t){ byTopic[t].sort(function(){return Math.random()-0.5;}); });
    // INTERLEAVING: round-robin po temama do ~20
    var TARGET=20, ptr={}; weak.forEach(function(t){ptr[t]=0;});
    var out=[], added=true;
    while(out.length<TARGET && added){ added=false;
      for(var wi=0; wi<weak.length; wi++){ var t=weak[wi]; if(ptr[t]<byTopic[t].length){ out.push(byTopic[t][ptr[t]++]); added=true; if(out.length>=TARGET)break; } }
    }
    if(out.length<4){ try{alert("Nedovoljno zadataka za miješanu sesiju.");}catch(e){} return; }
    var qs=out.map(function(q,idx){return Object.assign({},q,{id:idx+1});});
    var labels=weak.map(function(t){return TOPIC_LABELS[t]||t;});
    var vex={ key:"mixed_session_"+Date.now(), year:"Mije\u0161ane teme", season:"session", razina:lvl,
      label:labels.slice(0,3).join(" \u00b7 ")+(labels.length>3?" +"+(labels.length-3):""), qs:qs, duration:Math.max(20,qs.length*3)*60 };
    vex._loaded=true;
    setExamKey(vex.key); window._virtualExam=vex; EXAMS[vex.key]=vex;
    setScreen("similar_session"); window.scrollTo(0,0);
  }
  function goErrorSession(virtualExam){
    if(!virtualExam.razina) virtualExam.razina=userRazina||"B";
    setExamKey(virtualExam.key);window._virtualExam=virtualExam;setScreen("errors_session");window.scrollTo(0,0);
  }

  function onExamDone(result){
    const xpGain=calcXpGain(result.pct,result.total);
    if(result.pct>=70)window._playSound?.("done");
    // Pokreni XP floater (čita trenutni userData.xp direktno)
    const _oldXp=userData?.xp||0;
    const _newXp=_oldXp+xpGain;
    const _oldLv=getLevel(_oldXp);
    const _newLv=getLevel(_newXp);
    setXpGains([{xp:xpGain,levelUp:_newLv>_oldLv,newLevel:LEVEL_NAMES[_newLv]||""}]);
    setTimeout(()=>setXpGains([]),3000);
    updateUserData(prev=>{
      const updated=updateStreak(prev);
      const errorTracker={...(prev.errorTracker||{})};
      const examQs=EXAMS[result.examKey]?.qs||[];
      examQs.forEach(q=>{
        if(q.type==="proof"||q.type==="sa"||q.type==="pa") return;
        const ok=chk(q,result.answers?.[q.id]);
        const key=result.examKey+"_"+q.id;
        if(ok===false){
          const ex=errorTracker[key]||{count:0,q:q.q.slice(0,80),topic:q.topic||"ostalo",examKey:result.examKey,qid:q.id,type:q.type};
          const tags=result.errorTags?.[q.id]||ex.tags||[];
          errorTracker[key]={...ex,count:ex.count+1,lastDate:new Date().toLocaleDateString("hr"),tags};
        } else if(ok===true&&errorTracker[key]){
          errorTracker[key]={...errorTracker[key],count:Math.max(0,errorTracker[key].count-1)};
          if(errorTracker[key].count===0) delete errorTracker[key];
        }
      });
      // Akumuliraj tagove grešaka globalno
      const globalErrorTags={...(prev.errorTagCounts||{})};
      if(result.errorTags){
        Object.values(result.errorTags).forEach(tags=>{
          (tags||[]).forEach(tag=>{
            globalErrorTags[tag]=(globalErrorTags[tag]||0)+1;
          });
        });
      }
      const newHistory=[...(prev.history||[]),{
        examLabel:result.examLabel,examKey:result.examKey,
        razina:result.razina||"B",
        date:new Date().toLocaleDateString("hr"),hour:new Date().getHours(),pct:result.pct,grade:result.grade,
        cor:result.cor,total:result.total,qTimes:result.qTimes||{},
        mode:result.examMode?"simulacija":"vježbanje",
        topic_breakdown:result.topic_breakdown||{},
        // 1.5: sim_progress treba odgovore i tagove grešaka, ne samo agregat.
        answers:result.answers||{},
        errorTags:result.errorTags||{}
      }];
      const merged={...updated,xp:(prev.xp||0)+xpGain,history:newHistory,errorTracker,errorTagCounts:globalErrorTags,totalExams:(prev.totalExams||0)+1};
      return merged;
    });
  }

  const activeExam=screen==="errors_session"?(window._virtualExam||EXAMS[examKey]):EXAMS[examKey];

  const toggles=e("div",{style:{display:"flex",gap:6,marginLeft:"auto"}},
    e("button",{onClick:()=>setShowDisclaimer(true),
      title:"O aplikaciji",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },"ℹ️"),
    e("button",{onClick:()=>{const n=!soundOn;setSoundOn(n);DS.set("mat_sound",n?"1":"0");},
      title:soundOn?"Isključi zvuk":"Uključi zvuk",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },soundOn?"🔊":"🔇"),
    e("button",{onClick:()=>setCbMode(v=>!v),title:cbMode?"Isključi mod za daltonizam":"Mod za daltonizam",style:{background:cbMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:cbMode?"var(--blue)":"var(--muted)"}},"👁️"),
    e("button",{onClick:()=>setDysMode(v=>!v),title:dysMode?"Standardni tekst":"Disleksija — lakše čitanje",style:{background:dysMode?"var(--blue-d)":"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:dysMode?"var(--blue)":"var(--muted)"}},"🔤"),
    e("button",{onClick:()=>setDarkMode(d=>!d),
      title:darkMode?"Svijetli mod":"Tamni mod",
      style:{background:"none",border:"1px solid var(--bdr)",borderRadius:"var(--r)",padding:"4px 8px",cursor:"pointer",fontSize:14,color:"var(--muted)"}
    },darkMode?"☀️":"🌙")
  );

  function saveOnboarding(raz,grade){
    setUserRazina(raz); DS.set("mat_razina",raz);
    if(grade) DS.set("mat_target_grade",String(grade));
    setShowOnboarding(false);
  }
  return e("div",{className:"app-shell",style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)"}},
    (showOnboarding||!userRazina)&&e(OnboardingModal,{initialRazina:userRazina,initialGrade:(()=>{const g=parseInt(DS.get("mat_target_grade"));return g>=2&&g<=5?g:null;})(),onSave:saveOnboarding,onClose:()=>setShowOnboarding(false),canClose:!!userRazina}),
    showDisclaimer&&e(DisclaimerModal,{onClose:()=>setShowDisclaimer(false)}),
    // 2.1: progress dok se ispiti dovlace (jedan ispit ili cijeli set za cross-exam modove).
    examLoad&&e("div",{style:{position:"fixed",inset:0,zIndex:320,background:"rgba(6,9,16,.72)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:320,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:12}},"Učitavam zadatke…"),
        e("div",{style:{height:6,borderRadius:99,background:"var(--s3)",overflow:"hidden"}},
          e("div",{style:{height:"100%",width:Math.max(6,Math.round((examLoad.pct||0)*100))+"%",background:"linear-gradient(90deg,var(--blue),#7b9fff)",borderRadius:99,transition:"width .25s ease"}})),
        e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:8}},Math.round((examLoad.pct||0)*100)+"%"))),
    // 2.1: ucitavanje palo — vidljiva poruka + ponovni pokusaj umjesto tihog ulaska u prazan ekran.
    examErr&&e("div",{style:{position:"fixed",inset:0,zIndex:321,background:"rgba(6,9,16,.72)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
      e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"22px 24px",maxWidth:340,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}},
        e("div",{style:{fontSize:34,marginBottom:10}},"📡"),
        e("div",{style:{fontFamily:"var(--fh)",fontSize:18,color:"var(--text)",marginBottom:8}},"Učitavanje nije uspjelo"),
        e("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.6,marginBottom:16}},examErr.msg),
        e("div",{style:{display:"flex",gap:8}},
          e("button",{onClick:function(){var r=examErr.retry;setExamErr(null);if(r)r();},style:{flex:1,background:"var(--blue)",color:"#fff",border:"none",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 14px",borderRadius:10,cursor:"pointer"}},"↻ Pokušaj ponovno"),
          e("button",{onClick:function(){setExamErr(null);},style:{background:"var(--s2)",color:"var(--text)",border:"1px solid var(--bdr)",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 14px",borderRadius:10,cursor:"pointer"}},"Odustani")))),
    dDayOpen&&e(DDayModal,{razina:userRazina,history:(userData&&userData.history)||[],onStart:function(k){setDDayOpen(false);goExamMode(k);},onClose:function(){setDDayOpen(false);}}),
    e(XpFloater,{gains:xpGains}),
    badgeToast&&e("div",{style:{position:"fixed",bottom:20,left:20,zIndex:160,display:"flex",gap:10,alignItems:"center",
      background:"linear-gradient(135deg,#143a7a,#2d6ad4)",border:"1px solid rgba(255,255,255,.25)",borderRadius:"var(--rr)",
      padding:"12px 16px",color:"#fff",boxShadow:"0 10px 30px -10px rgba(0,0,0,.5)",animation:"mcIn .4s both",cursor:"pointer"},
      onClick:()=>setBadgeToast(null)},
      e("span",{style:{fontSize:24}},badgeToast._lv?TIER_MEDAL[badgeToast._lv]:badgeToast.ico),
      e("div",null,
        e("div",{style:{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#8fb4f5"}},(badgeToast._lv&&badgeToast._lv>1)?("Nova razina \u00b7 "+(TIER_NAME[badgeToast._lv]||"")):"Novo postignu\u0107e"),
        e("div",{style:{fontSize:13.5,fontWeight:800}},badgeToast.name+(badgeToast._lv?" "+TIER_MEDAL[badgeToast._lv]:"")))),
    screen==="home"&&e(Home,{onExam:goModeSelect,onPrepareExams:(fn)=>withAllExams(fn||(()=>{})),onPractice:goPractice,onStats:goStats,onAdaptive:goAdaptive,onFormule:goFormule,onErrors:goErrors,onBrowse:goBrowse,onFlashcards:goFlashcards,onDailyChallenge:goDailyChallenge,onBookmarks:goBookmarks,onFilter:goFilter,onMixed:goMixedTopics,onSRS:goSRS,onAIPractice:goAIPractice,onDDay:goDDay,onGuide:goGuide,onStartErrorSession:goErrorSession,razina:userRazina,onEditRazina:()=>setShowOnboarding(true),resume:resumeInfo,onResume:goResume,onDiscardResume:discardResume,onSetGoal:(m)=>updateUserData(p=>({...p,dailyGoalMin:m})),userData,toggles}),
    screen==="modeselect"&&e(ModeSelect,{examKey:pendingExamKey,onExamMode:goExamMode,onPractice:goPractice,onPracticeTimer:goPracticeTimer,onVirtual:goVirtualExam,onBack:goBack}),
    screen==="adaptive"&&e(AdaptiveTrening,{userData,onExit:goBack,onHome:goHome,onStartErrorSession:goErrorSession}),
    screen==="formule"&&e(FormulaSheet,{onExit:goBack,onHome:goHome}),
    screen==="exam"&&e(Sim,{exam:EXAMS[examKey],practice:false,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="exammode"&&e(Sim,{exam:EXAMS[examKey],practice:false,examMode:true,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="practice"&&e(Sim,{exam:EXAMS[examKey],practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="practice_timed"&&e(Sim,{exam:EXAMS[examKey],practice:true,examMode:false,timedPractice:true,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="errors_session"&&e(Sim,{exam:activeExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="similar_session"&&e(Sim,{exam:window._virtualExam||activeExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="stats"&&e(StatsScreen,{userData,onBack:goBack,onPDFReport:goPDFReport,onStartErrorSession:goErrorSession}),
    screen==="errors"&&e(ErrorsScreen,{userData,onStart:goErrorSession,onBack:goBack}),
    screen==="browse"&&e(BrowseScreen,{onBack:goBack}),
    screen==="bookmarks"&&e(BookmarksScreen,{onBack:goBack,onStartSession:goBookmarkSession}),
    screen==="flashcards"&&e(FlashcardScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="srs"&&e(SpacedRepetitionScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="aipractice"&&e(AIPractice,{onBack:goBack,onHome:goHome,userData,onUpdateUserData:updateUserData}),
    screen==="daily"&&e(DailyChallengeScreen,{onBack:goBack,userData,onUpdateUserData:updateUserData}),
    screen==="pdf_report"&&e(PDFReportScreen,{userData,onBack:goStats}),
    screen==="guide"&&e(GuideScreen,{onBack:goBack}),
    screen==="filter"&&e(TopicFilterScreen,{onStart:goFilterSession,onBack:goBack}),
    screen==="filter_session"&&e(Sim,{exam:window._virtualExam,practice:true,examMode:false,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
    screen==="virtual_exam"&&e(Sim,{exam:window._virtualExam,practice:false,examMode:true,timedPractice:false,onExit:goBack,onHome:goHome,onDone:onExamDone,userData,onPracticeErrors:goPracticeExamErrors,onPracticeSimilar:goPracticeSimilar,onStats:goStats,onFilter:goFilter,resume:pendingResumeRef.current,onPatchResult:goPatchResult}),
  );
}
class ErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={err:false};}
  static getDerivedStateFromError(){return {err:true};}
  componentDidCatch(er,inf){try{console.error("Sim error:",er,inf);}catch(_){}}
  render(){
    if(this.state.err){
      return e("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,background:"var(--bg)",fontFamily:"var(--fb)"}},
        e("div",{style:{maxWidth:380,textAlign:"center",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,padding:"32px 26px",boxShadow:"var(--shadow-lg)"}},
          e("div",{style:{fontSize:42,marginBottom:12}},"\uD83D\uDE15"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--text)",marginBottom:8}},"Ups \u2014 ne\u0161to je zapelo"),
          e("div",{style:{fontSize:13.5,color:"var(--muted)",lineHeight:1.6,marginBottom:20}},"Dogodila se neo\u010dekivana gre\u0161ka. Tvoj napredak je spremljen. Osvje\u017ei stranicu da nastavi\u0161."),
          e("button",{onClick:function(){location.reload();},style:{background:"var(--blue)",color:"#fff",border:"none",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 24px",borderRadius:10,cursor:"pointer"}},"\u21bb Osvje\u017ei stranicu")
        ));
    }
    return this.props.children;
  }
}
export { Sim, ErrorBoundary, App };
export function __setQImages(q) { __MAT.Q_IMAGES = q || {}; }
