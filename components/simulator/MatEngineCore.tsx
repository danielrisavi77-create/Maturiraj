// @ts-nocheck
'use client';
/* AUTO-GENERATED engine core from mat-simulator monolith (AST-extracted).
   SVG (628) + exam data (70) + Q_IMAGES externalized. Exposes Sim + ErrorBoundary + __setQImages. */
import React from 'react';
// 3.2: ocjenjivanje kratkih odgovora je jedan izvor istine (lib/mat-grading.ts).
import { normalizeAnswer, numEquals } from "@/lib/mat-grading";
// 5.3: infrastruktura je izdvojena u components/simulator/mat/core/* (isto ponasanje).
import { __MAT, IS_PRO, PLAN_NAME, planCta, askUpgrade, SUBJECT, __rk, DS, TOPIC_LABELS, FORMULE_DATA } from './mat/core/state';
import { EXAMS, __onExamsChanged, isExamLoaded, allExamsLoaded, examQCount, loadExam, loadAllExams } from './mat/core/exams';
import { __imgKey, __aiErrMsg, __aiPost } from './mat/core/runtime';
import { renderOptText, renderQText, FractionSVG, FormulaBlock, renderOptContent } from './mat/core/mathText';
export { __setSubject } from './mat/core/state';
export { __onExamsChanged, __setExamLoader, __setExamCatalog, __addExams, isExamLoaded, isExamLocked, allExamsLoaded, examQCount, loadExam, loadAllExams, __setExams } from './mat/core/exams';
// 5.3: vizualni dio (grafovi, interaktivni prikazi, zoom slike) zivi u ./mat/viz/*.
import { GLBL, GC, SHORT_LABELS, useEscape, LEVEL_NAMES, XP_LEVELS, getLevel, TLBL, LL, fireConfetti } from './mat/core/ui';
import { CountUp, AnimatedRing } from './mat/viz/charts';
import { GraphInput } from './mat/viz/graph';
import { FigZoom, ZoomableFig } from './mat/viz/figzoom';
import { VizModal, resolveViz } from './mat/viz/interactive';
import { chk, hasAns } from './mat/core/grading';
import { grade, calcXpGain, updateStreak } from './mat/core/progress';
// 5.3: alati oko zadatka (modali, pomoc, kalkulator, formule) zive u ./mat/tools/*.
import { Calculator, ScratchPad } from './mat/tools/calc';
import { FormulaModal, FormulaSheet } from './mat/tools/formulas';
import { ERROR_TAGS, ErrorTagger, SelfExplain, StuckHelper, WarmupItem, WeakSpotTips } from './mat/tools/hints';
import { AboutModal, DDayModal, DisclaimerModal, OnboardingModal, ShareCard, UpgradeModal, XpFloater } from './mat/tools/modals';
import { AnswerHelper, CalcQuestion, FeedbackBox, MaturaRubric, QToolbar } from './mat/tools/question';
// 5.3: ekrani izvan tijeka rjesavanja (statistika, vjezbanje, pregled, kartice) zive u ./mat/screens/*.
import { TodayHero, DailyChallengeScreen } from './mat/screens/today';
import { ModeSelect, GuideScreen } from './mat/screens/modes';
import { StatsScreen, PDFReportScreen } from './mat/screens/stats';
import { AIPractice, TopicFilterScreen, ErrorsScreen, AdaptiveTrening } from './mat/screens/practice';
import { BookmarksScreen, BrowseScreen } from './mat/screens/browse';
import { SpacedRepetitionScreen, FlashcardScreen } from './mat/screens/srs';
// 5.3: glavni ekran ispita (Sim) i njegovi pomocnici zive u ./mat/sim/*.
import { Sim } from './mat/sim/sim';
"use strict";
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
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
