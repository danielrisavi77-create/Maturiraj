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
import { GLBL, GC, SHORT_LABELS, useEscape, LEVEL_NAMES, XP_LEVELS, getLevel, TLBL, LL } from './mat/core/ui';
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
"use strict";
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function vc(n){return"var("+n+")";}
const TYPE_ICON={mc:"\u25c9",num:"\u2211",calc:"\u2211",sa:"\u270e",pa:"\u270e",proof:"\u270e"};
const _TOPIC_COLORS=["#4a90d9","#50c878","#e9b446","#e05252","#2dcfbe","#a78bfa","#f59e0b","#ec4899"];
function topicColor(t){if(!t)return _TOPIC_COLORS[0];let h=0;for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;return _TOPIC_COLORS[h%_TOPIC_COLORS.length];}
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
