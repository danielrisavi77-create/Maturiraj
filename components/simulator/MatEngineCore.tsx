// @ts-nocheck
'use client';
/* AUTO-GENERATED engine core from mat-simulator monolith (AST-extracted).
   SVG (628) + exam data (70) + Q_IMAGES externalized. Exposes Sim + ErrorBoundary + __setQImages. */
import React from 'react';
// 3.2: ocjenjivanje kratkih odgovora je jedan izvor istine (lib/mat-grading.ts).
import { isAnswerCorrect, normalizeAnswer, numEquals } from "@/lib/mat-grading";
// 5.3: infrastruktura je izdvojena u components/simulator/mat/core/* (isto ponasanje).
import { __MAT, IS_PRO, PLAN_NAME, planCta, askUpgrade, SUBJECT, __rk, DS, TOPIC_LABELS, FORMULE_DATA } from './mat/core/state';
import { EXAMS, __onExamsChanged, isExamLoaded, allExamsLoaded, examQCount, loadExam, loadAllExams } from './mat/core/exams';
import { __ensureNerdamer, __imgKey, __aiErrMsg, __aiPost, __AI_LAST_ERR } from './mat/core/runtime';
import { parseMath, renderOptText, renderQText, FractionSVG, FormulaBlock, renderOptContent } from './mat/core/mathText';
export { __setSubject } from './mat/core/state';
export { __onExamsChanged, __setExamLoader, __setExamCatalog, __addExams, isExamLoaded, isExamLocked, allExamsLoaded, examQCount, loadExam, loadAllExams, __setExams } from './mat/core/exams';
"use strict";
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
function vc(n){return"var("+n+")";}
const TLBL={mc:"Jedan odgovor",num:"Numerički",calc:"Izračun",sa:"Kratki odgovor",pa:"Produženi odgovor",proof:"Dokaz/Opis"};
const TYPE_ICON={mc:"\u25c9",num:"\u2211",calc:"\u2211",sa:"\u270e",pa:"\u270e",proof:"\u270e"};
const _TOPIC_COLORS=["#4a90d9","#50c878","#e9b446","#e05252","#2dcfbe","#a78bfa","#f59e0b","#ec4899"];
function topicColor(t){if(!t)return _TOPIC_COLORS[0];let h=0;for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;return _TOPIC_COLORS[h%_TOPIC_COLORS.length];}
const TBDG={mc:"b-mc",num:"b-num",calc:"b-calc",sa:"b-sa",pa:"b-proof",proof:"b-proof"};
const GLBL={1:"Nedovoljan",2:"Dovoljan",3:"Dobar",4:"Vrlo dobar",5:"Odličan"};
const XP_LEVELS=[0,100,250,450,700,1000,1400,1900,2500,3200,4000];
const LEVEL_NAMES={0:"Početnik",1:"Vježbač",2:"Student",3:"Napredni",4:"Stručnjak",5:"Majstor",6:"Ekspert",7:"Prvak",8:"Legenda",9:"Matematičar",10:"Genijalac"};
function getLevel(xp){let l=0;for(let i=0;i<XP_LEVELS.length;i++){if(xp>=XP_LEVELS[i])l=i;}return l;}
const GC={1:"var(--red)",2:"#f97316",3:"var(--gold)",4:"#60a5fa",5:"var(--green)"};
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
function __nd(){ try{ return (typeof window!=="undefined" && window.nerdamer) || null; }catch(e){ return null; } }
function hasAns(a){if(a===undefined||a===null||a==="")return false;if(Array.isArray(a))return a.length>0;return true}
// Vraca true | false | null (null = ne moze se automatski ocijeniti, npr. proof).
function chk(q,a){ return isAnswerCorrect(q,a,{nerdamer:__nd()}); }
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
function UpgradeModal({onClose}){
  useEscape(true,onClose);
  return e("div",{
    style:{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},
    onClick:onClose
  },
    e("div",{
      onClick:ev=>ev.stopPropagation(),
      style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"32px 28px",maxWidth:400,width:"100%",textAlign:"center",boxShadow:"var(--shadow-lg)"}
    },
      e("div",{style:{fontSize:44,marginBottom:16}},"✨"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,marginBottom:8}},PLAN_NAME),
      e("div",{style:{fontSize:14,color:"var(--muted)",lineHeight:1.7,marginBottom:24}},
        "AI ocjena tvojeg postupka rješavanja dostupna je na ",
        e("strong",{style:{color:"var(--text)"}},PLAN_NAME+" planu"),
        ".",e("br"),
        PLAN_NAME+" korisnici dobivaju personaliziranu povratnu informaciju  -  AI analizira tvoj postupak, daje djelomične bodove i objašnjava točno gdje si pogriješio."
      ),
      e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
        e("button",{
          className:"btn btn-gold",
          style:{padding:"13px",fontSize:15,width:"100%"},
          onClick:()=>{ askUpgrade(); onClose(); }
        },planCta()),
        e("button",{className:"btn btn-g",style:{padding:"10px",width:"100%"},onClick:onClose},"Ne sada")
      ),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:16}},
        "Standardna objašnjenja s koracima rješenja dostupna su i bez "+PLAN_NAME+" plana."
      )
    )
  );
}
var MISCONCEPTIONS={
 "Skupovi i brojevi":{title:"Provjeri pripadnost skupu",tip:"ℕ⊂ℤ⊂ℚ⊂ℝ⊂ℂ. √2 i π su iracionalni (∉ℚ); provjeri je li 0∈ℕ po NCVVO definiciji."},
 "Algebarski izrazi":{title:"Razlika kvadrata i kraćenje",tip:"a²−b²=(a−b)(a+b). Krati samo zajedničke faktore, nikad članove zbroja. Pazi predznak pri množenju zagrada."},
 "Linearne funkcije":{title:"Nagib i odsječak",tip:"y=kx+l: k je nagib (Δy/Δx), l odsječak na y-osi. Paralelni pravci imaju isti k, okomiti k₁·k₂=−1."},
 "Kvadratne funkcije":{title:"Ne zaboravi ± i diskriminantu",tip:"x=(−b±√D)/(2a), D=b²−4ac. Provjeri predznak D prije korjenovanja. Tjeme: x=−b/(2a)."},
 "Eksponencijalne i log.":{title:"Domena logaritma",tip:"logₐx postoji samo za x>0, a>0, a≠1. log(a·b)=log a+log b, ali log(a+b)≠log a+log b."},
 "Trigonometrija":{title:"Stupnjevi/radijani + kvadrant",tip:"Provjeri mjernu jedinicu kuta. SOH-CAH-TOA vrijedi samo u pravokutnom trokutu. Pazi predznak po kvadrantu."},
 "Geometrija":{title:"Površina vs opseg, jedinice",tip:"Ne miješaj formule za P i O. Provjeri jedinice (cm naspram cm²). Pitagora samo u pravokutnom trokutu."},
 "Analitička geometrija":{title:"Udaljenost i kružnica",tip:"d=√((x₂−x₁)²+(y₂−y₁)²). Kružnica: (x−p)²+(y−q)²=r²; pazi na predznak središta."},
 "Nizovi i redovi":{title:"Aritmetički vs geometrijski",tip:"Aritm.: aₙ=a₁+(n−1)d. Geom.: aₙ=a₁·qⁿ⁻¹. Suma GP postoji za |q|<1: S=a₁/(1−q)."},
 "Statistika i vjerojatnost":{title:"Sredina, medijan, komplement",tip:"Aritm. sredina=Σx/n; medijan=srednji poredani podatak. P(A′)=1−P(A); 'i'→množi, 'ili'(disjunktno)→zbrajaj."},
 "Financijska matematika":{title:"Postotak = ×(1±p/100)",tip:"Povećanje za p%: ×(1+p/100). Složeni kamatni: C=C₀·(1+p/100)ⁿ. Razlikuj jednostavni i složeni obračun."},
 "Matrice i sustavi":{title:"Predznak i provjera rješenja",tip:"Pri premještanju člana kroz jednakost mijenja se predznak. Uvrsti rješenje u OBJE jednadžbe za provjeru."},
 "Kombinatorika":{title:"Permutacije vs kombinacije",tip:"Bitan poredak → permutacije/varijacije; nije bitan → kombinacije C(n,k)=n!/(k!(n−k)!)."},
 "Kompleksni brojevi":{title:"i²=−1 i konjugat",tip:"i²=−1; |z|=√(a²+b²). Kod dijeljenja proširi konjugatom nazivnika (z̄)."},
 "Funkcije":{title:"Domena i nultočke",tip:"Provjeri domenu (nazivnik≠0, korijen≥0, log>0). Nultočke su sjecišta s x-osi; razlikuj rastuću/padajuću."},
 "Derivacije i integrali":{title:"Pravila deriviranja",tip:"(xⁿ)′=n·xⁿ⁻¹. Pazi na pravilo produkta/kvocijenta i lančano pravilo. Ekstrem: f′(x)=0."}
};
var SHORT_LABELS={"Skupovi i brojevi":"Skupovi","Algebarski izrazi":"Algebra","Linearne funkcije":"Linearne","Kvadratne funkcije":"Kvadratne","Eksponencijalne i log.":"Eksp/Log","Trigonometrija":"Trig","Geometrija":"Geometrija","Analitička geometrija":"Analit.geo","Nizovi i redovi":"Nizovi","Statistika i vjerojatnost":"Statistika","Financijska matematika":"Financije","Matrice i sustavi":"Sustavi","Kombinatorika":"Kombinat.","Kompleksni brojevi":"Kompleksni","Funkcije":"Funkcije","Derivacije i integrali":"Derivacije"};
function WeakSpotTips({rows,onDrill}){
  var weak=(rows||[]).filter(function(r){return r.n>=1&&r.pct<60&&MISCONCEPTIONS[r.label];}).sort(function(a,b){return a.pct-b.pct;}).slice(0,3);
  if(!weak.length) return null;
  return e("div",{style:{margin:"4px 0 24px",padding:"14px 16px",borderRadius:14,background:"var(--gold-d)",border:"1px solid var(--gold-b)"}},
    e("div",{style:{fontSize:12.5,fontWeight:800,color:"var(--gold)",marginBottom:10,display:"flex",alignItems:"center",gap:7}},"🎯 Tvoje slabe točke — na što paziti"),
    weak.map(function(r,i){var m=MISCONCEPTIONS[r.label];return e("div",{key:r.label,style:{padding:i?"10px 0 0":"0",borderTop:i?"1px solid var(--bdr)":"none",marginTop:i?10:0}},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:4}},
        e("span",{style:{fontSize:13,fontWeight:700,color:"var(--text)"}},r.label),
        e("span",{style:{fontSize:11,fontWeight:800,color:"var(--red)"}},r.pct+"%"),
        onDrill&&e("button",{onClick:function(){onDrill(r.k,r.label);},style:{marginLeft:"auto",fontSize:11,fontWeight:700,padding:"4px 11px",borderRadius:99,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",cursor:"pointer",fontFamily:"var(--fb)"}},"🔁 Vježbaj")),
      e("div",{style:{fontSize:12.5,color:"var(--muted)",lineHeight:1.5}},e("strong",{style:{color:"var(--text)"}},m.title+": "),m.tip)
    );})
  );
}
function MaturaRubric({q}){
  var st=useState(false),open=st[0],setOpen=st[1];
  var st2=useState({}),checks=st2[0],setChecks=st2[1];
  var META={intuicija:1,verifikacija:1,odgovor:1,diagnostika:1,postupak:1};
  var all=(q.steps||[]).map(function(s,i){return{i:i,s:s};}).filter(function(o){return o.s!=="───"&&o.s!=="---";});
  var steps=all.filter(function(o){var s=o.s;if(typeof s==="string")return !(s.indexOf("Točan odgovor")===0||s.indexOf("Sažetak")===0);return !(s.note&&META[s.note]);});
  if(steps.length<2) steps=all;
  var pts=q.points||1;
  if(steps.length<2||pts<2) return null;
  var done=steps.filter(function(o){return checks[o.i];}).length;
  var est=Math.round(pts*done/steps.length);
  var txt=function(s){return typeof s==="string"?s:(s.txt||"");};
  return e("div",{style:{marginTop:8,width:"100%"}},
    e("button",{onClick:function(){setOpen(!open);},style:{fontSize:11.5,fontWeight:700,padding:"5px 13px",borderRadius:99,cursor:"pointer",fontFamily:"var(--fb)",border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)"}},(open?"▾ ":"▸ ")+"⚖️ Boduj po koracima (kao matura)"),
    open&&e("div",{style:{marginTop:8,padding:"12px 14px",borderRadius:12,background:"var(--s2)",border:"1px solid var(--bdr)"}},
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:9,lineHeight:1.5}},"Označi korake koje si stvarno napravio/la. Na maturi se bodovi dijele po koracima — ne sve-ili-ništa."),
      steps.map(function(o){return e("label",{key:o.i,style:{display:"flex",gap:9,alignItems:"flex-start",padding:"6px 0",cursor:"pointer",fontSize:12.5,lineHeight:1.5}},
        e("input",{type:"checkbox",checked:!!checks[o.i],onChange:function(){var n={};for(var kk in checks)n[kk]=checks[kk];n[o.i]=!n[o.i];setChecks(n);},style:{marginTop:2,width:16,height:16,accentColor:"var(--blue)",flexShrink:0}}),
        e("span",{style:{color:"var(--text)"}},renderOptText(txt(o.s)))
      );}),
      e("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid var(--bdr)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}},
        e("span",{style:{fontSize:13.5,fontWeight:800,color:est>=pts?"var(--green)":est>0?"var(--gold)":"var(--muted)"}},"Procjena: "+est+"/"+pts+" "+(pts===1?"bod":(pts<5?"boda":"bodova"))+" ("+Math.round(done/steps.length*100)+"%)"),
        e("span",{style:{fontSize:11,color:"var(--muted)"}},done+"/"+steps.length+" koraka")
      )
    )
  );
}
function KnowledgeMap({userData,onTopic}){
  var hist=(userData&&userData.history)||[];
  var agg={};
  hist.forEach(function(h){var tb=h.topic_breakdown||{};Object.keys(tb).forEach(function(t){var l=TOPIC_LABELS[t]||t;if(l==="Ostalo")return;if(!agg[l])agg[l]={c:0,n:0};agg[l].c+=tb[t].correct||0;agg[l].n+=tb[t].total||0;});});
  var labelKey={};Object.keys(TOPIC_LABELS).forEach(function(k){var l=TOPIC_LABELS[k];if(!labelKey[l])labelKey[l]=k;});
  var nodes=Object.keys(agg).filter(function(l){return agg[l].n>0;}).map(function(l){var a=agg[l];return{label:l,short:SHORT_LABELS[l]||l,pct:Math.round(a.c/a.n*100),n:a.n,key:labelKey[l]||l};}).sort(function(a,b){return a.pct-b.pct;});
  if(nodes.length<3) return null;
  var W=360,H=360,cx=W/2,cy=H/2,R=120;
  var col=function(p){return p>=80?"var(--green)":p>=50?"var(--gold)":"var(--red)";};
  var maxN=Math.max.apply(null,nodes.map(function(n){return n.n;}));
  var lines=[],dots=[];
  nodes.forEach(function(nd,i){
    var ang=(-90+i*360/nodes.length)*Math.PI/180;
    var x=cx+R*Math.cos(ang),y=cy+R*Math.sin(ang);
    var r=12+Math.round(10*nd.n/Math.max(1,maxN));
    var c=col(nd.pct);
    var lx=cx+(R+r+7)*Math.cos(ang),ly=cy+(R+r+7)*Math.sin(ang);
    var anchor=Math.cos(ang)>0.3?"start":(Math.cos(ang)<-0.3?"end":"middle");
    lines.push(e("line",{key:"l"+i,x1:cx,y1:cy,x2:x,y2:y,stroke:"var(--bdr2)",strokeWidth:1.5}));
    dots.push(e("g",{key:"n"+i,style:{cursor:onTopic?"pointer":"default"},onClick:onTopic?function(){onTopic(nd.key,nd.label);}:null},
      e("circle",{cx:x,cy:y,r:r,fill:c,fillOpacity:0.2,stroke:c,strokeWidth:2}),
      e("text",{x:x,y:y+4,textAnchor:"middle",fontSize:11,fontWeight:800,fill:c},nd.pct),
      e("text",{x:lx,y:ly+3,textAnchor:anchor,fontSize:9.5,fontWeight:600,fill:"var(--muted)"},nd.short)
    ));
  });
  return e("div",{style:{marginBottom:18,padding:"16px 12px",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)"}},
    e("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)",marginBottom:2,textAlign:"center"}},"🗺️ Mapa znanja"),
    e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:4,textAlign:"center"}},"Boja = ovladanost · veličina = broj zadataka · dodirni temu za vježbu"),
    e("svg",{viewBox:"0 0 "+W+" "+H,width:"100%",style:{maxWidth:430,display:"block",margin:"0 auto"},role:"img","aria-label":"Mapa ovladanosti po temama"},
      lines,dots,
      e("circle",{cx:cx,cy:cy,r:30,fill:"var(--blue-d)",stroke:"var(--blue)",strokeWidth:2}),
      e("text",{x:cx,y:cy-1,textAnchor:"middle",fontSize:13,fontWeight:800,fill:"var(--blue)"},"Σ"),
      e("text",{x:cx,y:cy+12,textAnchor:"middle",fontSize:8,fontWeight:700,fill:"var(--blue)"},"MATURA")
    )
  );
}
function AnswerHelper({q,autoExpand,hideToggle}){
  const[open,setOpen]=useState(!!autoExpand);
  const[whyOpen,setWhyOpen]=useState(false);
  const[stepsShown,setStepsShown]=useState(1);
  const[playing,setPlaying]=useState(false);
  const _playRef=React.useRef(null);
  function _stopPlay(){if(_playRef.current){clearInterval(_playRef.current);_playRef.current=null;}setPlaying(false);}
  function _playSteps(total){if(_playRef.current){clearInterval(_playRef.current);_playRef.current=null;}setStepsShown(1);setPlaying(true);_playRef.current=setInterval(function(){setStepsShown(function(n){var nx=n+1;if(nx>=total){clearInterval(_playRef.current);_playRef.current=null;setPlaying(false);return total;}return nx;});},1100);}
  useEffect(function(){return function(){if(_playRef.current)clearInterval(_playRef.current);};},[]);
  useEffect(()=>{setOpen(!!autoExpand);setWhyOpen(false);setStepsShown(1);_stopPlay();},[q.id]);

  if(!open) return hideToggle?null:e("button",{
    className:"ah-toggle-btn",onClick:()=>setOpen(true)
  },"📐 Pogledaj rješenje");

  // ── Točan odgovor ──────────────────────────────────────────────────
  const ansContent=(()=>{
    if(q.type==="mc"){
      const idx=["A","B","C","D"].indexOf(q.sol.cl);
      const optFrac=null;
      const optTxt=(q.opts?.[idx]||"").replace(/^[A-D]\.\s*/,"");
      return e("span",{style:{display:"inline-flex",alignItems:"center",gap:8}},
        e("span",{style:{
          display:"inline-flex",alignItems:"center",justifyContent:"center",
          width:26,height:26,borderRadius:6,
          background:"var(--green)",color:"#0f1118",fontWeight:800,fontSize:14
        }},q.sol.cl),
        optFrac
          ? e("span",{style:{display:"inline-flex",alignItems:"center",gap:4}},renderOptContent(optFrac))
          : renderOptText(optTxt)
      );
    }
    if(q.sol?.solFormula){
      const sf=q.sol.solFormula;
      return e("span",{style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"}},
        sf.pre&&e("span",null,sf.pre+" "),
        sf.frac&&e(FractionSVG,{fracs:sf.frac,ops:sf.ops||[],pre:"",post:""}),
        sf.post&&e("span",null," "+sf.post)
      );
    }
    return renderOptText(q.sol?.ans||q.sol?.ex||"—");
  })();

  // ── Koraci rješavanja ───────────────────────────────────────────────
  const stepsEl=(()=>{
    if(!q.steps||q.steps.length===0) return null;
    const _total=q.steps.length;
    const _shown=Math.min(stepsShown,_total);
    let num=0;
    return e("div",{className:"ah-steps"},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2}},e("div",{className:"ah-steps-label",style:{marginBottom:0}},"📐 Postupak rješavanja"),_total>1&&e("button",{onClick:function(){playing?_stopPlay():_playSteps(_total);},title:playing?"Zaustavi reprodukciju":"Pusti korak po korak",style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:99,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",fontWeight:700,fontSize:11.5,cursor:"pointer",fontFamily:"var(--fb)"}},playing?"⏸ Stop":"▶ Pusti korake")),
      q.steps.slice(0,_shown).map((step,i)=>{
        if(step==="───"||step==="---")
          return e("div",{key:i,className:"ah-step-sep"});
        const s=typeof step==="string"
          ?{txt:step,note:null,final:step.startsWith("→")||step.startsWith("∴")||step.startsWith("Provjera")}
          :step;
        const isFinal=s.final||(i===q.steps.length-1);
        if(!isFinal) num++;
        return e("div",{key:i,className:"ah-step"+(isFinal?" ah-step-final":"")},
          e("span",{className:"ah-step-n"},isFinal?"→":num),
          e("span",{className:"ah-step-txt"},renderOptText(s.txt)),
          s.note&&typeof s.note==="string"&&e("span",{className:"ah-step-note"},s.note)
        );
      }),
      _shown<_total&&e("div",{style:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}},
        e("button",{onClick:()=>setStepsShown(n=>n+1),style:{flex:"1 1 auto",padding:"8px 12px",borderRadius:8,border:"1px solid var(--bdr)",background:"var(--s2)",color:"var(--text)",fontWeight:700,fontSize:13,cursor:"pointer"}},"▸ Sljedeći korak ("+_shown+"/"+_total+")"),
        e("button",{onClick:()=>setStepsShown(_total),style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--bdr)",background:"transparent",color:"var(--muted)",fontWeight:600,fontSize:12,cursor:"pointer"}},"Otkrij sve")
      )
    );
  })();

  // ── Zašto (sklopivo) ────────────────────────────────────────────────
  const whyEl=q.why&&q.why.length>0&&e("div",{className:"ah-why"},
    e("div",{className:"ah-why-header",onClick:()=>setWhyOpen(p=>!p)},
      e("span",null,"💡 Zašto tako?"),
      e("span",{style:{fontSize:11,opacity:.6}},whyOpen?"▲ sakrij":"▼ prikaži")
    ),
    whyOpen&&e("div",{className:"ah-why-body"},
      q.why.map((line,i)=>{const txt=typeof line==="string"?line:(line&&line.txt)||String(line);const note=typeof line==="object"&&line?line.note:null;const isFinal=typeof line==="object"&&line?line.final:false;return e("div",{key:i,className:"ah-why-line"+(isFinal?" ah-step-final":"")},renderOptText(txt),note&&e("span",{className:"ah-step-note"},note));})
    )
  );

  // ── Napomena (exp) ──────────────────────────────────────────────────
  const expEl=q.exp&&q.type!=="mc"&&e("div",{className:"ah-exp"},
    e("div",{className:"ah-exp-label"},"📖 Napomena"),
    e("div",{className:"ah-exp-text"},renderOptText(q.exp))
  );

  // ── Standardni graf rješenja (za proof zadatke s grafom) ──────────────
  const svgEl=q.sol?.svgFn&&e("div",{className:"ah-steps",style:{marginTop:8}},
    e("div",{className:"ah-steps-label"},"📐 Točan graf"),
    e("div",{style:{margin:"8px 0",display:"flex",justifyContent:"center"}},
      e(ZoomableFig,{fig:e(q.sol.svgFn,null)})
    )
  );

  return e("div",{className:"ah-wrap"},
    e("div",{className:"ah-answer"},
      e("div",{className:"ah-answer-label"},e("span",null,"✓")," Točan odgovor"),
      e("div",{className:"ah-answer-content"},ansContent)
    ),
    svgEl,
    stepsEl,
    whyEl,
    expEl,
    !hideToggle&&e("button",{
      className:"ah-toggle-btn",onClick:()=>setOpen(false)
    },"▲ Sakrij rješenje")
  );
}
function GraphSVG({graphType, points, range, color="var(--blue)", label}){
  const r=range||{xMin:-4,xMax:4,yMin:-2,yMax:7};
  return e(KoordOs,{W:240,H:200,xMin:r.xMin,xMax:r.xMax,yMin:r.yMin,yMax:r.yMax,label:label||""},
    (toX,toY)=>{
      if(!points||points.length===0) return null;
      const els=[];

      if(graphType==="parabola"&&points.length>=1){
        // Nacrtaj parabolu kroz dane točke (vertex + 2 točke)
        // Izračunaj a iz vertex forme: y = a(x-h)² + k
        const v=points[0]; // vertex [h,k]
        const p=points[1]; // još jedna točka
        if(v&&p){
          const a=(p[1]-v[1])/Math.pow(p[0]-v[0],2);
          const pts=[];
          for(let x=r.xMin;x<=r.xMax;x+=0.1){
            const y=a*Math.pow(x-v[0],2)+v[1];
            if(y<r.yMin||y>r.yMax) continue;
            pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));
          }
          if(pts.length>1) els.push(e("polyline",{key:"p",points:pts.join(" "),fill:"none",stroke:color,strokeWidth:2,strokeLinejoin:"round"}));
        }
      }

      if(graphType==="line"&&points.length>=2){
        const [p1,p2]=points;
        // Produži pravac do rubova
        const k=(p2[1]-p1[1])/(p2[0]-p1[0]);
        const b=p1[1]-k*p1[0];
        const x1=r.xMin, y1=k*x1+b;
        const x2=r.xMax, y2=k*x2+b;
        els.push(e("line",{key:"l",
          x1:toX(x1),y1:toY(y1),x2:toX(x2),y2:toY(y2),
          stroke:color,strokeWidth:2,strokeLinecap:"round"
        }));
      }

      // Ucrtaj sve točke s bijelim halogenom
      points.filter(p=>p!=null).forEach(([px,py],i)=>{
        if(px===undefined||py===undefined) return;
        els.push(e("circle",{key:"h"+i,cx:toX(px),cy:toY(py),r:6,fill:"var(--s1)",stroke:"none"}));
        els.push(e("circle",{key:"c"+i,cx:toX(px),cy:toY(py),r:4,fill:color,stroke:"var(--s1)",strokeWidth:1.5}));
        els.push(e("text",{key:"t"+i,x:toX(px)+8,y:toY(py)-6,fontSize:9,fill:color,fontWeight:600},
          "("+px+", "+py+")"));
      });

      return e("g",null,...els);
    }
  );
}
function GraphInput({q,answer,onAnswer,isReviewed,isPractice}){
  const[checked,setChecked]=useState(false);
  const[showSolution,setShowSolution]=useState(false);

  useEffect(()=>{setChecked(false);setShowSolution(false);},[q.id]);

  // Parsiraj učenikov unos u točke
  const isParabola=q.graphType==="parabola";
  const isLine=q.graphType==="line";

  // answer format: "0,2;-1,3;1,3" (točke odvojene ;)
  const parsePoints=val=>{
    if(!val) return [];
    return val.split(";").map(s=>{
      const [x,y]=s.split(",").map(v=>parseFloat(v.trim()));
      return isNaN(x)||isNaN(y)?null:[x,y];
    }).filter(Boolean);
  };

  const userPoints=parsePoints(answer);
  const refPoints=isParabola
    ?[q.graphRef?.vertex,...(q.graphRef?.pts||[])]
    :(q.graphRef?.pts||[]);

  // Provjeri točnost  -  usporedi korisnikove točke s referentnima
  const checkCorrect=()=>{
    if(!answer||userPoints.length<2) return null;
    const required=isParabola
      ?[q.graphRef?.vertex,...(q.graphRef?.pts||[])].filter(Boolean)
      :(q.graphRef?.pts||[]);
    let correct=0;
    required.forEach(([rx,ry])=>{
      if(userPoints.some(([ux,uy])=>Math.abs(ux-rx)<0.1&&Math.abs(uy-ry)<0.1)) correct++;
    });
    return correct>=Math.max(2,required.length-1);
  };

  const isCorrect=checked||isReviewed?checkCorrect():null;

  const placeholderText=isParabola
    ?"tjeme: 0,2 ;  točka: -1,3 ;  točka: 1,3"
    :"točka: 0,3 ;  točka: -1.5,0";

  return e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

    // Napomena o maturi
    e("div",{style:{
      fontSize:12,color:"var(--muted)",padding:"8px 12px",
      background:"var(--s2)",borderRadius:"var(--r)",
      border:"1px solid var(--bdr)",lineHeight:1.6
    }},
      "✏️ Na pravoj maturi crtat ćeš olovkom na papiru. Ovdje upiši koordinate ključnih točaka koje bi ucrtao  -  simulator će nacrtati tvoj graf."
    ),

    // Input za točke
    e("div",null,
      e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},
        isParabola?"📍 Tjeme i 2 pomoćne točke":"📍 Dvije točke pravca"
      ),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:8}},
        "Format: x,y odvojene s  ;   -  npr. ",
        e("code",{style:{background:"var(--s2)",padding:"1px 5px",borderRadius:4,fontSize:11}},
          isParabola?"0,1 ; -1,2 ; 1,2":"0,-2 ; 1,1")
      ),
      e("input",{
        type:"text",
        placeholder:placeholderText,
        className:"finp"+((checked||isReviewed)?(isCorrect?" ok":" bad"):""),
        style:{width:"100%",maxWidth:340,textAlign:"left",fontFamily:"monospace"},
        value:answer||"",
        disabled:checked||isReviewed,
        onChange:ev=>onAnswer(ev.target.value)
      }),

      // Provjeri gumb
      !checked&&!isReviewed&&userPoints.length>=2&&e("button",{
        className:"btn btn-chk",
        style:{marginTop:8,padding:"10px 18px"},
        onClick:()=>{setChecked(true); window._playSound?.(isCorrect?"correct":"wrong");}
      },"✓ Provjeri točke"),

      // Feedback
      (checked||isReviewed)&&isCorrect!==null&&e("div",{
        style:{
          marginTop:8,padding:"8px 12px",borderRadius:"var(--r)",
          background:isCorrect?"var(--green-d)":"var(--red-d)",
          border:"1px solid "+(isCorrect?"rgba(30,122,62,.3)":"rgba(196,48,48,.3)"),
          fontSize:13,fontWeight:600,color:isCorrect?"var(--green)":"var(--red)"
        }
      }, isCorrect?"✓ Točne ključne točke!":"✗ Provjeri koordinate  -  neke točke nisu točne.")
    ),

    // Prikaz učenikovog grafa (ako je unio barem 2 točke)
    userPoints.length>=2&&e("div",null,
      e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},
        "📊 Tvoj graf"
      ),
      e(GraphSVG,{
        graphType:q.graphType,
        points:userPoints,
        range:q.graphRange,
        color:"var(--blue)"
      })
    ),

    // Standardno rješenje s točnim grafom
    e("div",null,
      e("button",{
        className:"ah-toggle-btn",
        onClick:()=>setShowSolution(s=>!s),
        style:{marginTop:0}
      },showSolution?"▲ Sakrij rješenje":"📐 Pogledaj standardno rješenje"),
      showSolution&&e("div",{className:"ah-steps",style:{marginTop:8}},
        e("div",{className:"ah-steps-label"},"📐 Točan graf"),
        refPoints.length>0&&!q.sol?.svgFn&&e(GraphSVG,{
          graphType:q.graphType,
          points:refPoints,
          range:q.graphRange,
          color:"var(--green)",
          label:"Referentni graf"
        }),
        q.sol?.svgFn&&e("div",{style:{margin:"8px 0",display:"flex",justifyContent:"center"}},e(ZoomableFig,{fig:e(q.sol.svgFn,null)})),
        q.steps&&q.steps.map((s,i)=>{const txt=typeof s==="string"?s:(s&&s.txt)||"";const note=typeof s==="object"&&s?s.note:null;const fin=typeof s==="object"&&s?s.final:false;return e("div",{key:i,className:"ah-step"+(fin?" ah-step-final":"")},
  e("span",{className:"ah-step-n"},fin?"→":(i+1)),
  e("span",{className:"ah-step-txt"},renderOptText(txt)),
  note&&typeof note==="string"&&note&&e("span",{className:"ah-step-note"},note));}),
        q.sol?.ex&&e("div",{className:"ah-step ah-step-final"},
  e("span",{className:"ah-step-n"},"📖"),
  e("span",{className:"ah-step-txt"},renderOptText(q.sol.ex))
)
      )
    )
  );
}
function WarnBanner({text,qid}){
  const[open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[qid]);
  if(!open) return e("button",{
    onClick:()=>setOpen(true),
    style:{
      display:"inline-flex",alignItems:"center",gap:6,
      fontSize:11,fontWeight:600,padding:"4px 10px",
      borderRadius:6,border:"1px solid rgba(233,180,70,.35)",
      background:"rgba(233,180,70,.07)",color:"var(--gold)",
      cursor:"pointer",marginBottom:10
    }
  },"⚠️ Pazi na češću grešku");
  return e("div",{style:{
    display:"flex",alignItems:"flex-start",gap:8,
    padding:"8px 12px",marginBottom:10,borderRadius:"var(--r)",
    background:"rgba(233,180,70,.07)",
    border:"1px solid rgba(233,180,70,.3)",
    fontSize:12,color:"var(--gold)",lineHeight:1.6
  }},
    e("span",{style:{flexShrink:0,marginTop:1}},"⚠️"),
    e("span",{style:{flex:1}},text),
    e("button",{onClick:()=>setOpen(false),
      style:{background:"none",border:"none",cursor:"pointer",
        color:"var(--muted)",fontSize:14,padding:"0 0 0 4px",flexShrink:0}
    },"✕")
  );
}
const VIZ_TOPIC={kv:"quad",lin:"lin",trig:"circle",trg:"circle",exp:"explog",log:"explog",anal:"analgeo",kon:"analgeo",seq:"seq",niz:"seq",vek:"vec",komp:"complex",kompl:"complex",der:"deriv",dif:"deriv",fun:"fnfam",func:"fnfam",fn:"fnfam",stat:"stat",fin:"fin",geom:"geo",geo:"geo",ge:"geo",mj:"geo"};
var VIZ_KW={
  quad:/graf|nacrtaj|skiciraj|tjeme|nultočk|sjecišt|parabol|najveć|najmanj|maksimum|minimum|ekstrem|simetri|otvor|presjek|funkcij|kvadratn/,
  lin:/graf|nacrtaj|skiciraj|pravac|nagib|koeficijent smjera|sjecišt|odsje|raste|pada|nultočk|presjek|paralel|okomit|funkcij|linearn/,
  circle:/kružnic|jedinič|brojevn|sinusoid|kosinusoid|amplitud|period|faz|radijan|stup|kut|\bsin|\bcos|\btg\b|\bctg\b|tangens|kotangens|trigonometr|graf/,
  explog:/graf|nacrtaj|skiciraj|eksponencij|logaritam|logaritm|logaritamsk|asimptot|rast|pad|baz|funkcij/,
  analgeo:/pravac|kružnic|koordinat|jednadžb|sjecišt|presjek|udaljen|elips|hiperbol|parabol|žarišt|simetral|polumje|središt/,
  seq:/niz|član|aritmetič|geometrij|razlik|kvocijent|parcijaln|sum|rekurz/,
  vec:/vektor|kolinear|skalarn|intenzitet|komponent/,
  complex:/kompleksn|gaussov|imaginarn|realn|modul|argument|konjugir/,
  deriv:/derivacij|tangent|nagib|ekstrem|rast|pad|monoton|konkavn|prevoj|stacionarn|brzin|funkcij/,
  fnfam:/graf|funkcij|domen|kodomen|parn|neparn|inverz|monoton|asimptot|rast|pad|injektiv|surjekt|bijektiv|nultočk/,
  stat:/tablic|postotak|frekvencij|srednj|aritmetič|medijan|dijagram|histogram|graf|prikaz|raspodjel|devijacij/,
  fin:/kamat|glavnic|uloži|štedn|kredit|postotak|godišnj/,
  geo:/nacrtaj|skiciraj|trokut|kvadrat|pravokutnik|krug|kružnic|kut|površin|opseg|volumen|geometr|sličn|sukladn|tlocrt|presjek|dijagonal|polumje|kvadar|kocka|piramid|valjak|stož|kugl|prizm|šesterokut|peterokut|mnogokut|romb|trapez|tetiv|šiljast|sukut|pravokut/
};
function resolveViz(q){
  if(!q||q.viz===false) return null;
  if(typeof q.viz==="string") return q.viz;
  var k=VIZ_TOPIC[q.topic]; if(!k) return null;
  if(q.viz===true) return k;
  var t=((q.q||"")+" "+(q.context||"")+" "+(q.text||"")).toLowerCase();
  var rx=VIZ_KW[k]; return (rx&&rx.test(t))?k:null;
}
function QToolbar({glossaryText,warn,vizKind,qid,onViz}){
  const[panel,setPanel]=useState(null);
  const[selTerm,setSelTerm]=useState(null);
  useEffect(()=>{setPanel(null);setSelTerm(null);},[qid]);
  const terms=[];
  if(glossaryText){
    const low=" "+(""+glossaryText).toLowerCase()+" ";
    for(const term in GLOSSARY){
      const esc=term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
      const re=new RegExp("(^|[^a-zA-Zšđčćž])"+esc,"i");
      if(re.test(low)){terms.push(term);if(terms.length>=4)break;}
    }
  }
  const hasGloss=terms.length>0;
  if(!hasGloss&&!warn&&!vizKind) return null;
  function chip(key,bg,bd,col,onClick,label,caret){
    return e("button",{key:key,onClick:onClick,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 10px",borderRadius:999,border:"1px solid "+bd,background:bg,color:col,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",lineHeight:1.15,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"}},label,caret!=null?e("span",{key:"c",style:{opacity:.55,fontSize:10,marginLeft:1}},caret):null);
  }
  return e("div",null,
    e("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:panel?10:16}},
      hasGloss?chip("g","var(--s2)","var(--bdr2)","var(--muted)",function(){setSelTerm(null);setPanel(panel==="gloss"?null:"gloss");},"📖 Pojmovi",panel==="gloss"?"▴":"▾"):null,
      warn?chip("w","rgba(233,180,70,.09)","rgba(233,180,70,.42)","var(--gold)",function(){setPanel(panel==="warn"?null:"warn");},"⚠️ Česta greška",panel==="warn"?"▴":"▾"):null,
      vizKind?chip("v","var(--teal-d)","var(--teal-b)","var(--teal)",function(){onViz&&onViz(vizKind);},"🎛️ Prikaz",null):null
    ),
    (panel==="gloss"&&hasGloss)?e("div",{style:{marginBottom:16}},
      e("div",{style:{display:"flex",flexWrap:"wrap",gap:6}},terms.map(function(t,i){return e("button",{key:i,onClick:function(){setSelTerm(selTerm===t?null:t);},style:{padding:"5px 9px",borderRadius:8,border:"1px solid "+(selTerm===t?"var(--blue-b)":"var(--bdr)"),background:selTerm===t?"var(--blue-d)":"var(--s1)",color:selTerm===t?"var(--blue)":"var(--text)",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"var(--fb)",textTransform:"capitalize"}},t);})),
      selTerm?e("div",{style:{marginTop:10,padding:"11px 14px",borderRadius:"var(--r)",background:"var(--blue-d)",border:"1px solid var(--blue-b)",fontSize:13,lineHeight:1.55,color:"var(--text)"}},e("strong",{style:{color:"var(--blue)",textTransform:"capitalize"}},selTerm),": "+GLOSSARY[selTerm]):null
    ):null,
    (panel==="warn"&&warn)?e("div",{style:{display:"flex",alignItems:"flex-start",gap:9,padding:"11px 14px",marginBottom:16,borderRadius:"var(--r)",background:"rgba(233,180,70,.08)",border:"1px solid rgba(233,180,70,.32)",fontSize:12.5,color:"var(--gold)",lineHeight:1.62}},e("span",{style:{flexShrink:0,marginTop:1}},"⚠️"),e("span",{style:{flex:1}},warn)):null
  );
}
const ERROR_TAGS=[
  {id:"predznak", label:"Pogrešan predznak"},
  {id:"formula",  label:"Nisam znao formulu"},
  {id:"racun",    label:"Greška u računanju"},
  {id:"citanje",  label:"Krivo pročitao/la"},
  {id:"jedinice", label:"Pomiješao/la jedinice"},
  {id:"zaokr",    label:"Krivo zaokružio/la"},
];
function ErrorTagger({qid,errorTags,setErrorTags}){
  const selected=errorTags[qid]||[];
  const[etOpen,setEtOpen]=React.useState(selected.length>0);
  function toggle(id){
    setErrorTags(p=>{
      const cur=p[qid]||[];
      return {...p,[qid]:cur.includes(id)?cur.filter(x=>x!==id):[...cur,id]};
    });
  }
  return e("div",{style:{padding:"9px 12px",marginBottom:10,borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)"}},
    e("button",{onClick:()=>setEtOpen(o=>!o),style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0,color:"var(--muted)"}},
      e("span",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",marginRight:"auto",textAlign:"left"}},"Zašto si pogriješio/la?"+(selected.length>0?" · "+selected.length:"")),
      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--blue)"}},etOpen?"sakrij ▴":"označi ▾")
    ),
    etOpen&&e("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:9}},
      ERROR_TAGS.map(({id,label})=>{
        const on=selected.includes(id);
        return e("button",{key:id,onClick:()=>toggle(id),style:{fontSize:11,padding:"4px 10px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--red)":"var(--bdr)"),background:on?"rgba(196,48,48,.12)":"var(--s1)",color:on?"var(--red)":"var(--muted)",fontWeight:on?700:400,transition:"all .15s"}},label);
      })
    ),
    etOpen&&selected.length>0&&e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:8,fontStyle:"italic"}},"Bilježimo — pomoći će ti prepoznati vlastite obrasce grešaka.")
  );
}
function FormulaModal({onClose,razina}){
  useEscape(true,onClose);
  const r=razina||"B";
  const sec={
    borderBottom:"1px solid var(--bdr)",
    paddingBottom:14,marginBottom:14
  };
  const h={
    fontSize:11,fontWeight:700,textTransform:"uppercase",
    letterSpacing:".07em",color:"var(--muted)",marginBottom:10
  };
  // SVG razlomak helper
  function Fr({n,d,pre="",post=""}){
    return e("span",{style:{display:"inline-flex",alignItems:"center",verticalAlign:"middle",gap:2}},
      pre&&e("span",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)"}},pre),
      e("span",{className:"mfrac",style:{margin:"0 2px"}},
        e("span",{className:"mfrac-num",style:{fontSize:12,fontFamily:"'DM Sans',sans-serif"}},n),
        e("span",{className:"mfrac-bar"}),
        e("span",{className:"mfrac-den",style:{fontSize:12,fontFamily:"'DM Sans',sans-serif"}},d)
      ),
      post&&e("span",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)"}},post)
    );
  }
  // Redak formule
  function F({children,label}){
    return e("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:"1px solid var(--bdr)",flexWrap:"wrap"}},
      e("div",{style:{fontSize:13,fontFamily:"'DM Sans',sans-serif",color:"var(--text)",flex:1}},children),
      label&&e("div",{style:{fontSize:11,color:"var(--muted)",minWidth:120}},label)
    );
  }
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:16},
    onClick:e2=>{if(e2.target===e2.currentTarget)onClose();}},
    e("div",{style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",
      width:"100%",maxWidth:580,maxHeight:"90vh",overflow:"auto",padding:"24px 28px",boxShadow:"var(--shadow)"}},
      // Header
      e("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}},
        e("div",null,
          e("div",{style:{fontFamily:"var(--fh)",fontSize:18,fontWeight:700}},"📐 Knjižica formula"),
          e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:2}},SUBJECT.name+" · "+(r==="A"?"viša razina (A)":"osnovna razina (B)")+" · identična onoj na maturi")
        ),
        e("button",{onClick:onClose,style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"var(--muted)",padding:"4px 8px"}},"✕")
      ),

      // POTENCIJE I ALGEBRA
      e("div",{style:sec},
        e("div",{style:h},"Potencije"),
        e(F,{label:"produkt istih baza"},"aᵐ · aⁿ = aᵐ⁺ⁿ"),
        e(F,{label:"kvocijent istih baza"},"aᵐ : aⁿ = aᵐ⁻ⁿ   (a ≠ 0)"),
        e(F,{label:"negativni eksponent"},e("span",null,"a⁻ᵐ = ",e(Fr,{n:"1",d:"aᵐ"}),"   (a ≠ 0)")),
      ),

      // ALGEBARSKI IDENTITETI
      e("div",{style:sec},
        e("div",{style:h},"Algebarski identiteti"),
        e(F,{label:"kvadrat zbroja/razlike"},"(a ± b)² = a² ± 2ab + b²"),
        e(F,{label:"razlika kvadrata"},"a² − b² = (a − b)(a + b)"),
      ),

      // KVADRATNA JEDNADŽBA
      e("div",{style:sec},
        e("div",{style:h},"Kvadratna jednadžba"),
        e(F,{},"ax² + bx + c = 0,   a ≠ 0"),
        e(F,{label:"rješenja"},e("span",null,"x₁,₂ = ",e(Fr,{n:"−b ± √(b²−4ac)",d:"2a"}))),
        e(F,{label:"tjeme parabole"},e("span",null,"T = (",e(Fr,{n:"−b",d:"2a"}),",  ",e(Fr,{n:"4ac−b²",d:"4a"}),")")),
      ),

      // GEOMETRIJA  -  POVRŠINE
      e("div",{style:sec},
        e("div",{style:h},"Površine i opsezi"),
        e(F,{label:"trokut"},e("span",null,"P = ",e(Fr,{n:"a · vₐ",d:"2"}))),
        e(F,{label:"paralelogram"},"P = a · vₐ"),
        e(F,{label:"krug"},"P = r²π"),
        e(F,{label:"opseg kruga"},"O = 2rπ"),
      ),

      // GEOMETRIJA  -  TIJELA
      e("div",{style:sec},
        e("div",{style:h},"Tijela  (B = površina baze, h = visina, r = polumjer)"),
        e(F,{label:"prizma i valjak  -  obujam"},"V = B · h"),
        e(F,{label:"prizma  -  oplošje"},"O = 2B + P"),
        e(F,{label:"piramida i stožac  -  obujam"},e("span",null,"V = ",e(Fr,{n:"1",d:"3"})," · B · h")),
        e(F,{label:"piramida  -  oplošje"},"O = B + P"),
        e(F,{label:"kugla  -  obujam"},e("span",null,"V = ",e(Fr,{n:"4",d:"3"}),"r³π")),
      ),

      // ANALITIČKA GEOMETRIJA
      e("div",{style:sec},
        e("div",{style:h},"Analitička geometrija"),
        e(F,{label:"udaljenost točaka T₁, T₂"},"d = √[(x₂−x₁)² + (y₂−y₁)²]"),
        e(F,{label:"jednadžba pravca"},"y − y₁ = k(x − x₁)"),
        e(F,{label:"nagib kroz 2 točke"},e("span",null,"k = ",e(Fr,{n:"y₂−y₁",d:"x₂−x₁"}))),
        e(F,{label:"usporedni pravci"},"k₁ = k₂"),
      ),

      // POSTOTNI RAČUN
      e("div",{},
        e("div",{style:h},"Postotni račun  (S = osnovica, p = postotak, P = iznos)"),
        e(F,{label:"postotni iznos"},e("span",null,"P = ",e(Fr,{n:"S · p",d:"100"}))),
        e(F,{label:"postotak"},e("span",null,"p = ",e(Fr,{n:"P · 100",d:"S"}))),
        e(F,{label:"osnovica"},e("span",null,"S = ",e(Fr,{n:"P · 100",d:"p"}))),
      ),

      // ═══════ VIŠA RAZINA (A) — dodatne formule ═══════
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Logaritmi  (a > 0, a ≠ 1)"),
        e(F,{label:"definicija"},e("span",null,"log",e("sub",null,"a"),"(x) = y  ⇔  a^y = x")),
        e(F,{label:"produkt"},e("span",null,"log",e("sub",null,"a"),"(xy) = log",e("sub",null,"a"),"(x) + log",e("sub",null,"a"),"(y)")),
        e(F,{label:"kvocijent"},e("span",null,"log",e("sub",null,"a"),"(x/y) = log",e("sub",null,"a"),"(x) − log",e("sub",null,"a"),"(y)")),
        e(F,{label:"potencija"},e("span",null,"log",e("sub",null,"a"),"(xⁿ) = n · log",e("sub",null,"a"),"(x)")),
        e(F,{label:"promjena baze"},e("span",null,"log",e("sub",null,"a"),"(x) = ",e(Fr,{n:"log(x)",d:"log(a)"}))),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Trigonometrija  -  dodatne formule"),
        e(F,{label:"osnovni identitet"},"sin²x + cos²x = 1"),
        e(F,{label:"tangens"},e("span",null,"tg(x) = ",e(Fr,{n:"sin(x)",d:"cos(x)"}))),
        e(F,{label:"zbroj kutova (sin)"},"sin(α±β) = sinα cosβ ± cosα sinβ"),
        e(F,{label:"zbroj kutova (cos)"},"cos(α±β) = cosα cosβ ∓ sinα sinβ"),
        e(F,{label:"dvostruki kut"},e("span",null,"sin(2x) = 2 sin(x) cos(x)")),
        e(F,{label:"dvostruki kut"},"cos(2x) = cos²x − sin²x = 1 − 2sin²x"),
        e(F,{label:"poučak o sinusu"},e("span",null,e(Fr,{n:"a",d:"sin A"})," = ",e(Fr,{n:"b",d:"sin B"})," = ",e(Fr,{n:"c",d:"sin C"})," = 2R")),
        e(F,{label:"poučak o kosinusu"},"a² = b² + c² − 2bc · cos A"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Derivacije"),
        e(F,{label:"konstanta"},"(c)' = 0"),
        e(F,{label:"potencija"},"(xⁿ)' = n · xⁿ⁻¹"),
        e(F,{label:"trigonometrijske"},"(sin x)' = cos x,   (cos x)' = −sin x"),
        e(F,{label:"eksponencijalna"},"(eˣ)' = eˣ,   (aˣ)' = aˣ · ln(a)"),
        e(F,{label:"logaritamska"},e("span",null,"(ln x)' = ",e(Fr,{n:"1",d:"x"}))),
        e(F,{label:"zbroj/razlika"},"(f ± g)' = f' ± g'"),
        e(F,{label:"produkt"},"(f · g)' = f' · g + f · g'"),
        e(F,{label:"kvocijent"},e("span",null,"(f/g)' = ",e(Fr,{n:"f'·g − f·g'",d:"g²"}))),
        e(F,{label:"lančano pravilo"},"(f(g(x)))' = f'(g(x)) · g'(x)"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Integrali  (osnovni)"),
        e(F,{label:"potencija"},e("span",null,"∫ xⁿ dx = ",e(Fr,{n:"xⁿ⁺¹",d:"n+1"})," + C   (n ≠ −1)")),
        e(F,{label:"1/x"},e("span",null,"∫ ",e(Fr,{n:"1",d:"x"})," dx = ln|x| + C")),
        e(F,{label:"eksponencijalna"},"∫ eˣ dx = eˣ + C"),
        e(F,{label:"trigonometrijske"},"∫ sin x dx = −cos x + C,   ∫ cos x dx = sin x + C"),
        e(F,{label:"linearnost"},"∫ (af + bg) dx = a∫f dx + b∫g dx"),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Nizovi"),
        e(F,{label:"aritmetički — opći član"},"aₙ = a₁ + (n−1) · d"),
        e(F,{label:"aritmetički — suma"},e("span",null,"Sₙ = ",e(Fr,{n:"n(a₁ + aₙ)",d:"2"}))),
        e(F,{label:"geometrijski — opći član"},"aₙ = a₁ · qⁿ⁻¹"),
        e(F,{label:"geometrijski — suma"},e("span",null,"Sₙ = a₁ · ",e(Fr,{n:"qⁿ − 1",d:"q − 1"})," (q ≠ 1)")),
        e(F,{label:"beskonačni geom."},e("span",null,"S = ",e(Fr,{n:"a₁",d:"1 − q"})," (|q| < 1)")),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Kompleksni brojevi"),
        e(F,{label:"algebarski oblik"},"z = a + bi"),
        e(F,{label:"modul"},"|z| = √(a² + b²)"),
        e(F,{label:"trigonometrijski"},"z = |z| · (cos φ + i sin φ)"),
        e(F,{label:"Moivreova"},"zⁿ = |z|ⁿ · (cos(nφ) + i sin(nφ))"),
        e(F,{label:"konjugiranje"},e("span",null,"z̄ = a − bi,   z · z̄ = |z|²")),
      ),
      r==="A"&&e("div",{style:sec},
        e("div",{style:h},"Vektori i analitička (proširena)"),
        e(F,{label:"duljina vektora"},"|a⃗| = √(a₁² + a₂² + a₃²)"),
        e(F,{label:"skalarni produkt"},"a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ = |a⃗||b⃗| cos φ"),
        e(F,{label:"kut između vektora"},e("span",null,"cos φ = ",e(Fr,{n:"a⃗ · b⃗",d:"|a⃗||b⃗|"}))),
        e(F,{label:"krug"},"(x − p)² + (y − q)² = r²"),
        e(F,{label:"elipsa"},e("span",null,e(Fr,{n:"x²",d:"a²"})," + ",e(Fr,{n:"y²",d:"b²"})," = 1")),
        e(F,{label:"parabola"},"y² = 4px   (s tjemenom u ishodištu)"),
      ),

      e("div",{style:{marginTop:18,textAlign:"center"}},
        e("button",{className:"btn btn-blue",onClick:onClose},"Zatvori")
      )
    )
  );
}
function CalcQuestion({q,answer,onAnswer,isReviewed,isPractice,isExamMode,onViz}){
  const[postupak,setPostupak]=useState("");
  const inpRef=React.useRef(null);
  function insSym(sym){const el=inpRef.current;if(!el){onAnswer((answer||"")+sym);return;}const st=el.selectionStart??(answer||"").length,en=el.selectionEnd??st;const nv=(answer||"").slice(0,st)+sym+(answer||"").slice(en);onAnswer(nv);requestAnimationFrame(()=>{try{el.focus();el.setSelectionRange(st+sym.length,st+sym.length);}catch(e){}});}
  const[showUpgrade,setShowUpgrade]=useState(false);
  const[aiState,setAiState]=useState("idle");
  const[aiResult,setAiResult]=useState(null);
  const[showSolution,setShowSolution]=useState(true);
  const[checked,setChecked]=useState(false);
  const[,_bumpNd]=useState(0);

  useEffect(()=>{
    setPostupak("");setAiState("idle");setAiResult(null);
    setShowSolution(false);setChecked(false);
  },[q.id]);

  const needsFinalAnswer=q.type==="num"||q.type==="calc"||q.type==="sa"||q.type==="pa";
  const finalCorrect=needsFinalAnswer?(hasAns(answer)?chk(q,answer):null):null;

  function handleCheck(){
    // 2.2: CAS se ucitava tek na provjeru; kad stigne, ponovo ocijeni.
    __ensureNerdamer().then(function(nd){ if(nd) _bumpNd(function(x){ return x+1; }); });
    setChecked(true);
    if(finalCorrect===true) window._playSound?.("correct");
    else if(finalCorrect===false) window._playSound?.("wrong");
  }

  async function runAiGrade(){
    if(!IS_PRO){setShowUpgrade(true);return;}
    if(!postupak.trim()||postupak.trim().length<10) return;
    setAiState("loading");
    const refAnswer=q.steps?q.steps.join("\n"):(q.sol.ex||q.sol.ans||"");
    const prompt=`Ti si profesor matematike za državnu maturu (osnovna razina B) u Hrvatskoj.
Ocijeni učenikov POSTUPAK rješavanja matematičkog zadatka.

Zadatak: "${q.q}"
Maksimalni bodovi: ${q.points||2}
Točan postupak:
${refAnswer}

Učenikov postupak:
"${postupak}"
${needsFinalAnswer?`Učenikov konačni odgovor: ${answer||"(nije upisao)"}  Točan odgovor: ${q.sol.ans}`:""}

Ocijeni postupak i vrati ISKLJUČIVO JSON (bez markdown backtickova):
{
  "bodovi": 0,
  "max_bodovi": ${q.points||2},
  "ocjena": "Točno",
  "točno": ["element postupka koji je točan"],
  "netočno": ["element postupka koji nedostaje"],
  "feedback": "2-3 recenice savjeta",
  "savjet": "1 kratak savjet"
}`;
    try{
      const data=await __aiPost(prompt,1024);
      if(data?.error||!data?.content) throw new Error("api");
      const text=data?.content?.[0]?.text||"{}";
      setAiResult(JSON.parse(text.replace(/```json|```/g,"").trim()));
      setAiState("done");
    }catch(err){setAiState("error");}
  }

  return e(Fragment,null,
    showUpgrade&&e(UpgradeModal,{onClose:()=>setShowUpgrade(false)}),
    e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

      // ⚠️ Pazi na  -  prikazuje se prije rješavanja, skriveno u examMode
      e(QToolbar,{glossaryText:[q.q,q.text,q.question,q.context,q.prompt,q.stem].filter(Boolean).join(" "),warn:(!isReviewed&&!isExamMode)?q.warn:null,vizKind:isExamMode?null:resolveViz(q),qid:q.id,onViz:onViz}),

      // Textarea za postupak
      e("div",null,
        e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},"\uD83D\uDCDD Postupak rješavanja"),
        e("textarea",{
          className:"ta",rows:4,
          placeholder:"Napisi ovdje postupak rješavanja  -  korak po korak...",
          value:postupak,
          disabled:isReviewed&&!isPractice,
          onChange:ev=>setPostupak(ev.target.value)
        })
      ),

      // Konačni odgovor + Provjeri gumb
      needsFinalAnswer&&e("div",null,
        e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},"\uD83C\uDFAF Konačni odgovor"),
        !checked&&!isReviewed&&e("div",{className:"symbar"},
          ["\u221a","\u03c0","\u00b2","\u00b3","\u00b7","\u00f7","\u00b1","\u2264","\u2265","\u00b0","\u221e","\u2208"].map(sym=>
            e("button",{key:sym,type:"button",className:"symbar-btn",onMouseDown:ev=>ev.preventDefault(),onClick:()=>insSym(sym)},sym))),
        e("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}},
          e("input",{
            ref:inpRef,
            type:"text",
            inputMode:(q.type==="sa"||q.type==="pa")?"text":"decimal",
            placeholder:(q.type==="sa"||q.type==="pa")?"Upiši odgovor...":"Upiši numeričku vrijednost...",
            className:"finp"+((checked||isReviewed)?(finalCorrect?" ok":" bad"):""),
            style:{flex:"1 1 180px",maxWidth:280,textAlign:(q.type==="sa"||q.type==="pa")?"left":"center"},
            value:answer||"",
            disabled:checked||isReviewed,
            onChange:ev=>onAnswer(ev.target.value)
          }),
          !checked&&!isReviewed&&hasAns(answer)&&e("button",{
            className:"btn btn-chk",
            style:{padding:"10px 18px",flexShrink:0},
            onClick:handleCheck
          },"\u2713 Provjeri odgovor")
        ),
        (checked||isReviewed)&&finalCorrect!==null&&e(FeedbackBox,{
          q,a:answer,rev:true,elapsed:0,avgTime:null
        })
      ),

      // GRAPH QUESTION  -  za proof zadatke s crtanjem grafa
      q.type==="proof"&&q.graphType&&e(GraphInputM,{
        q,answer,onAnswer,isReviewed,isPractice
      }),

      // Obični proof (bez grafa)  -  kratka napomena
      q.type==="proof"&&!q.graphType&&e("div",{style:{
        fontSize:12,color:"var(--muted)",fontStyle:"italic",
        padding:"8px 12px",background:"var(--s2)",borderRadius:"var(--r)",
        border:"1px solid var(--bdr)"
      }},
        "📐 Na pravoj maturi crtat ćeš olovkom na papiru. Ovdje opiši što bi nacrtao ili koristi AI ocjenu."
      ),

      // AI ocjena gumb (Pro)  -  samo kad je nesto upisano u postupak
      isPractice&&postupak.trim().length>=10&&e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        e("button",{
          className:"ah-ai-btn",
          onClick:runAiGrade,
          style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px"}
        },
          IS_PRO
            ?"\uD83E\uDD16 AI ocijeni postupak"
            :e(Fragment,null,"\u2728 AI ocjena postupka ",
               e("span",{style:{fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99,background:"rgba(233,180,70,.2)",color:"var(--gold)",border:"1px solid rgba(233,180,70,.3)"}},"PRO"))
        )
      ),

      // AI rezultat
      aiState==="loading"&&e("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--muted)",padding:"8px 0"}},
        e("div",{style:{width:14,height:14,border:"2px solid var(--blue)",borderTopColor:"transparent",borderRadius:"50%",animation:"spin .8s linear infinite"}}),
        "AI analizira tvoj postupak..."
      ),
      aiState==="error"&&e("div",{style:{fontSize:13,color:"var(--red)"}},
        __aiErrMsg()+" ",e("button",{className:"ah-ai-btn",onClick:runAiGrade},"Pokusaj ponovo")
      ),
      aiState==="done"&&aiResult&&(()=>{
        const bodovi=aiResult.bodovi??0;
        const maxB=aiResult.max_bodovi||q.points||2;
        const col=bodovi>=maxB?"var(--green)":bodovi>0?"var(--gold)":"var(--red)";
        return e("div",{style:{background:"var(--s2)",border:"1px solid "+col+"40",borderLeft:"3px solid "+col,borderRadius:"var(--r)",padding:"14px 16px"}},
          e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:10}},
            e("div",{style:{width:46,height:46,borderRadius:"50%",border:"2px solid "+col,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},
              e("div",{style:{fontFamily:"var(--fh)",fontSize:15,fontWeight:800,color:col}},bodovi+"/"+maxB)
            ),
            e("div",null,
              e("div",{style:{fontWeight:700,fontSize:14,color:col}},aiResult.ocjena||""),
              e("div",{style:{fontSize:11,color:"var(--muted)"}},"AI ocjena \u00B7 "+PLAN_NAME)
            )
          ),
          (aiResult.točno||[]).map((t,i)=>e("div",{key:"t"+i,style:{fontSize:12,color:"var(--green)",marginBottom:3}},"\u2705 "+t)),
          (aiResult.netočno||[]).map((t,i)=>e("div",{key:"n"+i,style:{fontSize:12,color:"var(--red)",marginBottom:3}},"\u274C "+t)),
          aiResult.feedback&&e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.65,borderTop:"1px solid var(--bdr)",paddingTop:8,marginTop:6}},aiResult.feedback),
          aiResult.savjet&&e("div",{style:{fontSize:12,fontWeight:600,color:"var(--blue)",marginTop:6}},"\uD83D\uDCA1 "+aiResult.savjet),
          e("button",{className:"ah-ai-btn",style:{marginTop:10},onClick:()=>{setAiState("idle");setAiResult(null);}},"\uD83D\uDD04 Ocijeni ponovo")
        );
      })(),

      // Standardno rješenje  -  skriveno u examMode
      !isExamMode&&e("div",null,
        e("button",{
          className:"ah-toggle-btn",
          onClick:()=>setShowSolution(s=>!s),
          style:{marginTop:0}
        },showSolution?"▲ Sakrij rješenje":"📐 Pogledaj standardno rješenje"),
        showSolution&&e(AnswerHelper,{q,autoExpand:true,hideToggle:true})
      )
    )
  );
}
function McRadniProstor({qid}){
  const[open,setOpen]=useState(false);
  const[text,setText]=useState("");
  useEffect(()=>{setText("");},[qid]);
  return e("div",{style:{marginTop:12}},
    e("button",{
      onClick:()=>setOpen(o=>!o),
      style:{
        display:"flex",alignItems:"center",gap:6,
        fontFamily:"var(--fb)",fontSize:12,fontWeight:600,
        color:"var(--muted)",background:"none",border:"1px solid var(--bdr)",
        borderRadius:"var(--r)",padding:"5px 12px",cursor:"pointer",
        transition:"all .15s",width:"100%",textAlign:"left"
      }
    },
      e("span",null,open?"▲":"▶"),
      "📝 Radni prostor",
      e("span",{style:{marginLeft:"auto",fontSize:10,fontWeight:400,fontStyle:"italic"}},"nije bodovano")
    ),
    open&&e("textarea",{
      className:"ta",
      rows:4,
      placeholder:"Napiši ovdje skicu postupka ili provjeru odgovora...",
      value:text,
      onChange:ev=>setText(ev.target.value),
      style:{marginTop:6}
    })
  );
}
function XpFloater({gains}){
  if(!gains||gains.length===0) return null;
  return e("div",{className:"xp-floater"},
    gains.map((g,i)=>e("div",{key:i,className:"xp-bubble",
      style:{animationDelay:(i*0.3)+"s"}},
      e("span",null,"⚡"),
      e("span",null,"+"+g.xp+" XP"),
      g.levelUp&&e("span",{style:{fontSize:12,opacity:.85}},"↑ "+g.newLevel)
    ))
  );
}
function AboutModal({onClose}){
  return e("div",{
    style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",
      justifyContent:"center",padding:"20px",background:"rgba(10,15,40,.6)",
      backdropFilter:"blur(6px)"},
    onClick:onClose
  },
    e("div",{
      style:{
        maxWidth:440,width:"100%",borderRadius:20,overflow:"hidden",
        background:"linear-gradient(155deg,#0b1b3a 0%,#2d6ad4 50%,#4a90d9 100%)",
        boxShadow:"0 24px 60px rgba(0,0,0,.4)",position:"relative"
      },
      onClick:(ev)=>ev.stopPropagation()
    },
      // Header
      e("div",{style:{padding:"28px 28px 0",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}},
        e("div",null,
          e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
            e("div",{style:{width:44,height:44,borderRadius:12,
              background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.2)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:22}},"∑"),
            e("div",null,
              e("div",{style:{fontWeight:700,color:"var(--bg,#060910)",fontSize:16,fontFamily:"var(--fh)"}},
                "Discere "+SUBJECT.name),
              e("div",{style:{fontSize:11,color:"rgba(255,255,255,.55)",marginTop:1}},
                "Simulator državne mature · v2.0")
            )
          )
        ),
        e("button",{onClick:onClose,
          style:{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",
            borderRadius:8,width:30,height:30,cursor:"pointer",color:"var(--bg,#060910)",
            fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",
            flexShrink:0,fontFamily:"var(--fb)"}
        },"×")
      ),

      // Sadržaj
      e("div",{style:{padding:"20px 28px 28px",display:"flex",flexDirection:"column",gap:18}},

        // Opis
        e("p",{style:{fontSize:13,color:"rgba(255,255,255,.78)",lineHeight:1.7,margin:0}},
          "Kompletan simulator državne mature iz matematike  -  osnovna (B) i viša (A) razina. "+
          "Svi ispiti od 2010. do 2025., korak-po-korak rješenja, AI objašnjenja i pametno ponavljanje."
        ),

        // Separator
        e("div",{style:{height:1,background:"rgba(255,255,255,.1)"}}),

        // Sekcije
        e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"📚"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Izvor ispita"),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.82)",lineHeight:1.55}},
                "Ispitna pitanja vlasništvo su NCVVO-a (Nacionalni centar za vanjsko vrednovanje obrazovanja). "+
                "Koriste se isključivo u obrazovne svrhe.")
            )
          ),

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"⚖️"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Autorska prava"),
              e("div",{style:{fontSize:13,color:"rgba(255,255,255,.82)",lineHeight:1.55}},
                "Objašnjenja, AI ocjenjivanje, analitički alati i dizajn aplikacije "+
                "© 2025 Discere. Sva prava pridržana.")
            )
          ),

          e("div",{style:{display:"flex",gap:12,alignItems:"flex-start"}},
            e("span",{style:{fontSize:16,flexShrink:0}},"🌐"),
            e("div",null,
              e("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",
                letterSpacing:".07em",textTransform:"uppercase",marginBottom:3}},"Kontakt"),
              e("a",{href:"https://discere.io",target:"_blank",
                style:{fontSize:13,color:"#93b4ff",textDecoration:"none",fontWeight:600}},
                "discere.io ↗")
            )
          )
        ),

        // Zatvori gumb
        e("button",{onClick:onClose,
          style:{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.22)",
            borderRadius:10,padding:"10px",cursor:"pointer",color:"var(--bg,#060910)",
            fontSize:13,fontWeight:600,fontFamily:"var(--fb)",width:"100%",
            marginTop:4}
        },"Zatvori")
      )
    )
  );
}
const MATURA_ROKOVI=[
  {m:5, d:25, label:"mature iz matematike"},
  {m:7, d:19, label:"jesenskog roka"}
];
function nextMatura(){
  const now=new Date(); now.setHours(0,0,0,0);
  const yr=now.getFullYear();
  const cands=[];
  for(const r of MATURA_ROKOVI){
    cands.push({t:new Date(yr,r.m,r.d),label:r.label});
    cands.push({t:new Date(yr+1,r.m,r.d),label:r.label});
  }
  cands.sort((a,b)=>a.t-b.t);
  const next=cands.find(c=>c.t>=now);
  const days=Math.round((next.t-now)/86400000);
  return {days,label:next.label,today:days===0};
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
function _copyText(t){
  try{navigator.clipboard.writeText(t);return true;}
  catch(e){try{const ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);return true;}catch(e2){return false;}}
}
function wrappedToPng(d){
  return (async()=>{
    try{if(document.fonts&&document.fonts.ready)await document.fonts.ready;}catch(e){}
    const W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;
    const x=c.getContext("2d");if(!x)return false;
    const g=x.createRadialGradient(W*0.85,-H*0.15,80,W*0.5,H*0.5,H*1.15);
    g.addColorStop(0,"#2a5cb8");g.addColorStop(.45,"#163769");g.addColorStop(1,"#0a1730");
    x.fillStyle=g;x.fillRect(0,0,W,H);
    x.strokeStyle="rgba(255,255,255,.12)";x.lineWidth=2;x.strokeRect(44,44,W-88,H-88);
    const cx=W/2,serif='"DM Serif Display",Georgia,serif',sans='"Instrument Sans",system-ui,sans-serif';
    x.textAlign="center";x.textBaseline="alphabetic";
    x.fillStyle="#8fb4f5";x.font="600 38px "+sans;x.fillText("\u03a3  Discere",cx,140);
    x.fillStyle="rgba(143,180,245,.9)";x.font="700 24px "+sans;x.fillText("T V O J   M J E S E C",cx,196);
    x.fillStyle="#fff";x.font="76px "+serif;x.fillText(d.monthName+" "+d.year+".",cx,288);
    const trio=(val,lbl,px,yv,yl)=>{x.fillStyle="#fff";x.font="78px "+serif;x.fillText(val,px,yv);
      x.fillStyle="rgba(255,255,255,.6)";x.font="600 22px "+sans;x.fillText(lbl,px,yl);};
    trio(String(d.ispiti),"ISPITA",W*0.25,470,512);
    trio(d.mins+"\u2032","MINUTA",W*0.5,470,512);
    trio(String(d.streak),"DANA NIZ",W*0.75,470,512);
    trio(d.best+"%","NAJBOLJI",W*0.33,650,692);
    trio(d.avg+"%","PROSJEK",W*0.67,650,692);
    x.font="600 32px "+sans;
    let yy=812;
    if(d.topT){x.fillStyle="rgba(255,255,255,.92)";x.fillText("Najja\u010da tema:  "+d.topT.t+"  \u00b7  "+d.topT.p+"%",cx,yy);yy+=52;}
    if(d.weakT){x.fillStyle="rgba(255,255,255,.7)";x.fillText("Fokus za dalje:  "+d.weakT.t+"  \u00b7  "+d.weakT.p+"%",cx,yy);}
    x.strokeStyle="rgba(255,255,255,.15)";x.lineWidth=1;x.beginPath();x.moveTo(W*0.22,H-268);x.lineTo(W*0.78,H-268);x.stroke();
    x.fillStyle="#fff";x.font="52px "+serif;x.fillText("maturiraj.hr",cx,H-176);
    x.fillStyle="#8fb4f5";x.font="italic 30px "+serif;x.fillText("Matura nije sre\u0107a. Matura je priprema.",cx,H-118);
    return await new Promise(res=>{c.toBlob(b=>{
      if(!b){res(false);return;}
      try{const a=document.createElement("a");a.href=URL.createObjectURL(b);
        a.download="discere-"+String(d.monthName).toLowerCase()+"-"+d.year+".png";
        document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},100);res(true);}
      catch(e){res(false);}
    },"image/png");});
  })();
}
function parseHrDate(str){
  if(!str)return null;
  const m=String(str).match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
  return m?{d:+m[1],mo:+m[2],y:+m[3]}:null;
}
function WrappedModal({userData,onClose}){
  useEscape(true,onClose);
  const[copied,setCopied]=React.useState(null);
  const H=userData.history||[];
  const now=new Date();const mm=String(now.getMonth()+1).padStart(2,"0");const yy=now.getFullYear();
  const MJ=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"];
  const month=H.filter(h=>{const p=parseHrDate(h.date);return p&&p.mo===now.getMonth()+1&&p.y===yy;});
  const mins=Math.round(month.reduce((s,h)=>s+Object.values(h.qTimes||{}).reduce((a,b)=>a+b,0),0)/60);
  const best=month.length?Math.max(...month.map(h=>h.pct||0)):0;
  const avg=month.length?Math.round(month.reduce((s,h)=>s+(h.pct||0),0)/month.length):0;
  const agg={};month.forEach(h=>Object.entries(h.topic_breakdown||{}).forEach(([t,v])=>{const a=agg[t]=agg[t]||{c:0,n:0};a.c+=v.correct||0;a.n+=v.total||0;}));
  const tl=Object.entries(agg).filter(([,v])=>v.n>=3).map(([t,v])=>({t:TOPIC_LABELS[t]||t,p:Math.round(v.c/v.n*100)})).sort((a,b)=>b.p-a.p);
  const topT=tl[0],weakT=tl[tl.length-1];
  const week=H.filter(h=>{const p=parseHrDate(h.date);if(!p)return false;const d=new Date(p.y,p.mo-1,p.d);return (now-d)/86400000<=7;});
  const wAvg=week.length?Math.round(week.reduce((s,h)=>s+(h.pct||0),0)/week.length):0;
  const monthTxt="\uD83D\uDCCA Moj "+MJ[now.getMonth()]+" na Discere:\n\u2022 "+month.length+" ispita \u00b7 "+mins+" min u\u010denja\n\u2022 Najbolji rezultat: "+best+"% \u00b7 prosjek "+avg+"%\n\u2022 Streak: "+(userData.streak||0)+" dana \uD83D\uDD25"+(topT?"\n\u2022 Najja\u010da tema: "+topT.t+" ("+topT.p+"%)":"");
  const parentTxt="Pozdrav!\n\nMoj tjedni napredak u pripremi mature (matematika):\n\u2022 Rije\u0161eno ispita: "+week.length+"\n\u2022 Prosje\u010dni rezultat: "+wAvg+"%\n\u2022 Niz u\u010denja: "+(userData.streak||0)+" dana zaredom"+(weakT?"\n\u2022 Trenutni fokus: "+weakT.t:"")+"\n\n\u2014 poslano iz Discere (maturiraj.hr)";
  const stat=(v,l)=>e("div",{style:{textAlign:"center",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)",borderRadius:12,padding:"12px 6px"}},
    e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"#fff",marginBottom:2}},v),
    e("div",{style:{fontSize:9.5,letterSpacing:".05em",textTransform:"uppercase",color:"rgba(255,255,255,.6)"}},l));
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.66)",backdropFilter:"blur(4px)",zIndex:350,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:ev=>{if(ev.target===ev.currentTarget)onClose();}},
    e("div",{style:{width:"100%",maxWidth:420,borderRadius:20,overflow:"hidden",border:"1px solid rgba(74,144,217,.4)",boxShadow:"0 30px 70px -20px rgba(0,0,0,.65)",background:"radial-gradient(130% 130% at 85% -15%,#2a5cb8 0%,#163769 45%,#0a1730 100%)",padding:"24px 22px"}},
      e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}},
        e("div",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"#8fb4f5"}},"Discere \u00b7 Tvoj mjesec"),
        e("button",{onClick:onClose,style:{background:"rgba(255,255,255,.12)",border:"none",borderRadius:8,width:28,height:28,color:"#fff",cursor:"pointer",fontFamily:"var(--fb)"}},"\u2715")),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:26,color:"#fff",marginBottom:16,textTransform:"capitalize"}},MJ[now.getMonth()]+" "+yy+"."),
      e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}},
        stat(month.length,"ispita"),stat(mins+"\u2032","u\u010denja"),stat((userData.streak||0)+"\uD83D\uDD25","streak")),
      e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}},
        stat(best+"%","najbolji"),stat(avg+"%","prosjek")),
      topT&&e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.85)",marginBottom:4}},"\uD83D\uDCAA Najja\u010da tema: ",e("strong",null,topT.t+" ("+topT.p+"%)")),
      weakT&&tl.length>1&&e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.7)",marginBottom:16}},"\uD83C\uDFAF Fokus za sljede\u0107i mjesec: ",e("strong",null,weakT.t+" ("+weakT.p+"%)")),
      e("button",{onClick:async()=>{setCopied("img-load");const ok=await wrappedToPng({monthName:MJ[now.getMonth()],year:yy,ispiti:month.length,mins,streak:userData.streak||0,best,avg,topT,weakT});setCopied(ok?"img":"err");},
        style:{width:"100%",marginBottom:8,background:"linear-gradient(135deg,#e9b446,#ffd56b)",border:"none",borderRadius:10,padding:"12px",fontFamily:"var(--fb)",fontSize:13.5,fontWeight:800,color:"#3a2e0a",cursor:"pointer",boxShadow:"0 6px 18px -6px rgba(233,180,70,.5)"}},
        copied==="img-load"?"\u23f3 Pripremam sliku\u2026":copied==="img"?"\u2713 Slika spremljena!":"\uD83D\uDCF8 Spremi sliku za dijeljenje"),
      e("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        e("button",{onClick:()=>{setCopied(_copyText(monthTxt)?"m":"err");},style:{flex:1,minWidth:140,background:"#fff",border:"none",borderRadius:10,padding:"10px 12px",fontFamily:"var(--fb)",fontSize:12.5,fontWeight:800,color:"#0b1b3a",cursor:"pointer"}},copied==="m"?"\u2713 Kopirano!":"\uD83D\uDCCB Kopiraj tekst"),
        e("button",{onClick:()=>{const ok=_copyText(parentTxt);setCopied(ok?"p":"err");try{window.location.href="mailto:?subject="+encodeURIComponent("Tjedni napredak \u2014 matura matematika")+"&body="+encodeURIComponent(parentTxt);}catch(e2){}},style:{flex:1,minWidth:140,background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.28)",borderRadius:10,padding:"10px 12px",fontFamily:"var(--fb)",fontSize:12.5,fontWeight:800,color:"#fff",cursor:"pointer"}},copied==="p"?"\u2713 Spremno!":"\u2709\uFE0F Tjedni \u2014 roditelju")),
      copied==="err"&&e("div",{style:{fontSize:11,color:"#fca5a5",marginTop:8}},"Kopiranje nije uspjelo \u2014 ozna\u010di tekst ru\u010dno.")
    ));
}
function useEscape(active,onClose){
  React.useEffect(()=>{
    if(!active)return;
    const h=ev=>{if(ev.key==="Escape"){ev.stopPropagation();onClose();}};
    document.addEventListener("keydown",h);
    return()=>document.removeEventListener("keydown",h);
  },[active,onClose]);
}
function CountUp({to,duration,suffix}){
  const[v,setV]=React.useState(0);
  const raf=React.useRef(null);
  React.useEffect(()=>{
    const target=+to||0,dur=duration||700,t0=performance.now();
    if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches){setV(target);return;}
    cancelAnimationFrame(raf.current);
    const tick=(t)=>{const p=Math.min(1,(t-t0)/dur);const ease=1-Math.pow(1-p,3);
      setV(Math.round(target*ease));if(p<1)raf.current=requestAnimationFrame(tick);};
    raf.current=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf.current);
  },[to]);
  return e(React.Fragment,null,String(v)+(suffix||""));
}
function examTitle(exam){return (exam.season==="session"||exam.season==="random")?exam.label:exam.year+".  -  "+exam.label;}
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
function __pickDDayExam(razina, history){
  try{
    var keys=Object.keys(EXAMS).filter(function(k){return (EXAMS[k]&&EXAMS[k].razina)===razina;});
    if(!keys.length) return null;
    var done={}; (history||[]).forEach(function(h){ if(h&&h.examKey) done[h.examKey]=1; });
    var unused=keys.filter(function(k){return !done[k];});
    var pool=unused.length?unused:keys;
    return pool[Math.floor(Math.random()*pool.length)];
  }catch(e){ return null; }
}
function DDayModal(props){
  var e=React.createElement;
  var razina0=(props.razina==="A")?"A":"B", history=props.history||[], onStart=props.onStart, onClose=props.onClose;
  var _r=React.useState(razina0), raz=_r[0], setRaz=_r[1];
  var _e=React.useState(""), err=_e[0], setErr=_e[1];
  var mat=nextMatura(), days=mat.days;
  function start(){ var key=__pickDDayExam(raz, history); if(!key){ setErr("Nema dostupnih ispita za razinu "+raz+"."); return; } onStart(key); }
  return e("div",{style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,.55)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fi .2s"},onClick:onClose},
    e("div",{onClick:function(ev){ev.stopPropagation();},style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:20,maxWidth:440,width:"100%",padding:"28px 26px",boxShadow:"var(--shadow)",animation:"mcIn .35s"}},
      e("div",{style:{fontSize:42,textAlign:"center",marginBottom:6}},"\ud83c\udf93"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:22,fontWeight:800,textAlign:"center",marginBottom:6}},"Probna matura"),
      e("p",{style:{color:"var(--muted)",fontSize:13.5,lineHeight:1.6,textAlign:"center",marginBottom:16}},"Generalna proba pod stvarnim uvjetima: nasumi\u010dan pun ispit, s vremenskim ograni\u010denjem i bez pomo\u0107nih alata. Najbolji test prave spremnosti."),
      (days!=null&&!mat.today)&&e("div",{style:{textAlign:"center",marginBottom:18}},e("span",{style:{color:days<=14?"var(--red)":"var(--blue)",fontWeight:800,fontSize:18}},days),e("span",{style:{color:"var(--muted)",fontSize:13}}," "+(days===1?"dan":"dana")+" do "+mat.label)),
      e("div",{style:{display:"flex",gap:8,justifyContent:"center",marginBottom:6}},
        ["A","B"].map(function(r){return e("button",{key:r,onClick:function(){setRaz(r);setErr("");},style:{cursor:"pointer",borderRadius:10,padding:"8px 18px",fontSize:14,fontWeight:700,border:"1px solid "+(raz===r?"var(--blue)":"var(--bdr)"),background:raz===r?"var(--blue-d)":"var(--s2)",color:raz===r?"var(--blue)":"var(--text)",transition:"all .15s"}},"Razina "+r);})),
      e("div",{style:{textAlign:"center",fontSize:11,color:"var(--muted)",marginBottom:18}},"A = vi\u0161a \u00b7 B = osnovna razina"),
      err&&e("div",{style:{textAlign:"center",fontSize:12.5,color:"var(--red)",marginBottom:12}},err),
      e("button",{onClick:start,className:"shimmer-btn",style:{width:"100%",boxSizing:"border-box",background:"var(--blue)",color:"#fff",border:"none",borderRadius:12,padding:"13px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px -4px rgba(74,144,217,.55)",marginBottom:8}},"Zapo\u010dni probu \u2192"),
      e("button",{onClick:onClose,style:{width:"100%",background:"none",border:"none",color:"var(--muted)",fontSize:13,fontWeight:600,cursor:"pointer",padding:"4px"}},"Odustani")
    )
  );
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
function Calculator({onClose,warnNoCalc}){
  const[expr,setExpr]=React.useState("");
  const[res,setRes]=React.useState("");
  const[deg,setDeg]=React.useState(true);
  const[evaled,setEvaled]=React.useState(false);
  function push(t){
    setExpr(p=>{ if(evaled&&/[0-9.]/.test(t)){setEvaled(false);return t;} setEvaled(false); return p+t; });
  }
  function clearAll(){setExpr("");setRes("");setEvaled(false);}
  function back(){setExpr(p=>p.slice(0,-1));}
  function compute(){
    try{
      let str=expr;
      const o=(str.match(/\(/g)||[]).length,c=(str.match(/\)/g)||[]).length;
      str+=")".repeat(Math.max(0,o-c));
      str=str.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/\^/g,"**");
      str=str.replace(/log\(/g,"Math.log10(").replace(/ln\(/g,"Math.log(");
      str=str.replace(/sin\(/g,"_sin(").replace(/cos\(/g,"_cos(").replace(/tan\(/g,"_tan(");
      str=str.replace(/√/g,"Math.sqrt");
      str=str.replace(/π/g,"(Math.PI)").replace(/(?<![A-Za-z_])e(?![A-Za-z_])/g,"(Math.E)");
      const D=deg?Math.PI/180:1;
      const _sin=x=>Math.sin(x*D),_cos=x=>Math.cos(x*D),_tan=x=>Math.tan(x*D);
      const fn=new Function("_sin","_cos","_tan","Math","return ("+str+")");
      const r=fn(_sin,_cos,_tan,Math);
      if(r===undefined||r===null||!isFinite(r))throw 0;
      const rounded=Math.round(r*1e10)/1e10;
      setRes(String(rounded));setExpr(String(rounded));setEvaled(true);
    }catch(e){setRes("Greška");}
  }
  const B=(label,act,kind)=>e("button",{key:label,onClick:act,className:"calc-btn"+(kind?" calc-"+kind:"")},label);
  return e("div",{className:"calc-panel",onClick:ev=>ev.stopPropagation()},
    e("div",{className:"calc-head"},
      e("span",{style:{fontSize:12,fontWeight:800,letterSpacing:".05em",color:"var(--muted)"}},"\uD83E\uDDEE KALKULATOR"),
      e("button",{onClick:()=>setDeg(d=>!d),className:"calc-mode"},deg?"DEG":"RAD"),
      e("button",{onClick:onClose,className:"calc-x"},"\u2715")),
    warnNoCalc&&e("div",{className:"calc-warn"},"\u26a0\ufe0f Na maturi A kalkulator nije dopu\u0161ten u 1. dijelu"),
    e("div",{className:"calc-disp"},
      e("div",{className:"calc-expr"},expr||"0"),
      res!==""&&e("div",{className:"calc-res"},"= "+res)),
    e("div",{className:"calc-grid"},
      B("C",clearAll,"fn"),B("(",()=>push("("),"fn"),B(")",()=>push(")"),"fn"),B("\u232b",back,"fn"),B("\u00f7",()=>push("\u00f7"),"op"),
      B("sin",()=>push("sin("),"fn"),B("cos",()=>push("cos("),"fn"),B("tan",()=>push("tan("),"fn"),B("\u00d7",()=>push("\u00d7"),"op"),B("\u221a",()=>push("\u221a("),"fn"),
      B("7",()=>push("7")),B("8",()=>push("8")),B("9",()=>push("9")),B("\u2212",()=>push("\u2212"),"op"),B("x\u00b2",()=>push("^2"),"fn"),
      B("4",()=>push("4")),B("5",()=>push("5")),B("6",()=>push("6")),B("+",()=>push("+"),"op"),B("x\u02b8",()=>push("^"),"fn"),
      B("1",()=>push("1")),B("2",()=>push("2")),B("3",()=>push("3")),B("\u03c0",()=>push("\u03c0"),"fn"),B("log",()=>push("log("),"fn"),
      B("0",()=>push("0")),B(".",()=>push(".")),B("e",()=>push("e"),"fn"),B("ln",()=>push("ln("),"fn"),B("=",compute,"eq")));
}
const GraphInputM=React.memo(GraphInput);
const CalcQuestionM=React.memo(CalcQuestion);
function _calcTokenize(raw, allowVar, vars){
  var s=String(raw).replace(/,/g,".").replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/·/g,"*").replace(/²/g,"^2").replace(/³/g,"^3").replace(/\s/g,"");
  if(!s) throw "Prazno";
  var tokens=[],i=0,funcs=["sqrt","sin","cos","tan","asin","acos","atan","log","ln","abs"];
  while(i<s.length){
    var ch=s[i];
    if(/[0-9.]/.test(ch)){var n="";while(i<s.length&&/[0-9.]/.test(s[i])){n+=s[i++];}tokens.push({t:"num",v:parseFloat(n)});continue;}
    if(/[a-zA-Z]/.test(ch)){var w="";while(i<s.length&&/[a-zA-Z]/.test(s[i])){w+=s[i++];}
      if(w==="PI")tokens.push({t:"num",v:Math.PI});
      else if(w==="e"||w==="E")tokens.push({t:"num",v:Math.E});
      else if(allowVar&&(w==="x"||w==="X"))tokens.push({t:"var"});
      else if(vars&&typeof vars[w]==="number")tokens.push({t:"num",v:vars[w]});
      else if(funcs.indexOf(w)>=0)tokens.push({t:"func",v:w});
      else throw "Nepoznato: "+w;
      continue;}
    if(ch==="√"){tokens.push({t:"func",v:"sqrt"});i++;continue;}
    if(ch==="π"){tokens.push({t:"num",v:Math.PI});i++;continue;}
    if("+-*/^".indexOf(ch)>=0){tokens.push({t:"op",v:ch});i++;continue;}
    if(ch==="("){tokens.push({t:"lp"});i++;continue;}
    if(ch===")"){tokens.push({t:"rp"});i++;continue;}
    if(ch==="!"){tokens.push({t:"fact"});i++;continue;}
    throw "Neispravan znak";
  }
  var t2=[];
  for(var k=0;k<tokens.length;k++){
    if(k>0){ var L=tokens[k-1].t, R=tokens[k].t;
      if((L==="num"||L==="var"||L==="rp"||L==="fact")&&(R==="num"||R==="var"||R==="func"||R==="lp")) t2.push({t:"op",v:"*"}); }
    t2.push(tokens[k]);
  }
  return t2;
}
function _calcRPN(tokens){
  var out=[],ops=[],prec={"+":2,"-":2,"*":3,"/":3,"^":4,"u-":4},rt={"^":1,"u-":1},prev=null;
  for(var k=0;k<tokens.length;k++){
    var tk=tokens[k];
    if(tk.t==="num"||tk.t==="fact"||tk.t==="var")out.push(tk);
    else if(tk.t==="func")ops.push(tk);
    else if(tk.t==="op"){
      var o=tk.v;
      if(o==="-"&&(prev===null||prev.t==="op"||prev.t==="lp"))o="u-";
      while(ops.length){
        var top=ops[ops.length-1];
        if(top.t==="op"&&(rt[o]?prec[top.v]>prec[o]:prec[top.v]>=prec[o]))out.push(ops.pop());
        else if(top.t==="func")out.push(ops.pop());
        else break;
      }
      ops.push({t:"op",v:o});
    }
    else if(tk.t==="lp")ops.push(tk);
    else if(tk.t==="rp"){
      while(ops.length&&ops[ops.length-1].t!=="lp")out.push(ops.pop());
      if(!ops.length)throw "Zagrade ne valjaju";
      ops.pop();
      if(ops.length&&ops[ops.length-1].t==="func")out.push(ops.pop());
    }
    prev=tk;
  }
  while(ops.length){var z=ops.pop();if(z.t==="lp")throw "Zagrade ne valjaju";out.push(z);}
  return out;
}
function _calcEvalRPN(out, deg, xVal){
  var st=[],d2r=deg?Math.PI/180:1;
  function fact(x){if(x<0||x!==Math.floor(x)||x>170)return NaN;var r=1;for(var j=2;j<=x;j++)r*=j;return r;}
  for(var m=0;m<out.length;m++){
    var t2=out[m];
    if(t2.t==="num")st.push(t2.v);
    else if(t2.t==="var")st.push(xVal);
    else if(t2.t==="fact"){if(!st.length)throw "Izraz";st.push(fact(st.pop()));}
    else if(t2.t==="op"){
      if(t2.v==="u-"){if(!st.length)throw "Izraz";st.push(-st.pop());}
      else{if(st.length<2)throw "Izraz";var b=st.pop(),a=st.pop();st.push(t2.v==="+"?a+b:t2.v==="-"?a-b:t2.v==="*"?a*b:t2.v==="/"?a/b:Math.pow(a,b));}
    }
    else if(t2.t==="func"){
      if(!st.length)throw "Izraz";var x=st.pop(),r;
      if(t2.v==="sqrt")r=Math.sqrt(x);
      else if(t2.v==="sin")r=Math.sin(x*d2r);
      else if(t2.v==="cos")r=Math.cos(x*d2r);
      else if(t2.v==="tan")r=Math.tan(x*d2r);
      else if(t2.v==="asin")r=Math.asin(x)/d2r;
      else if(t2.v==="acos")r=Math.acos(x)/d2r;
      else if(t2.v==="atan")r=Math.atan(x)/d2r;
      else if(t2.v==="log")r=Math.log(x)/Math.LN10;
      else if(t2.v==="ln")r=Math.log(x);
      else if(t2.v==="abs")r=Math.abs(x);
      else r=NaN;
      st.push(r);
    }
  }
  if(st.length!==1||isNaN(st[0]))throw "Neispravan izraz";
  return st[0];
}
function calcEval(raw, deg, vars){ return _calcEvalRPN(_calcRPN(_calcTokenize(raw,false,vars)), deg, undefined); }
function calcCompile(raw){ var out=_calcRPN(_calcTokenize(raw,true)); return function(x){ return _calcEvalRPN(out, false, x); }; }
function _bisectRoot(f,a,b){ var fa; try{fa=f(a);}catch(e){return null;} if(!isFinite(fa))return null; for(var k=0;k<50;k++){ var m=(a+b)/2,fm; try{fm=f(m);}catch(e){return null;} if(!isFinite(fm))return null; if(Math.abs(fm)<1e-10)return m; if((fa<0)===(fm<0)){a=m;fa=fm;}else b=m; } return (a+b)/2; }
function _bisectDiff(f,g,a,b){ var fa; try{fa=f(a)-g(a);}catch(e){return null;} if(!isFinite(fa))return null; for(var k=0;k<50;k++){ var m=(a+b)/2,fm; try{fm=f(m)-g(m);}catch(e){return null;} if(!isFinite(fm))return null; if(Math.abs(fm)<1e-10)return m; if((fa<0)===(fm<0)){a=m;fa=fm;}else b=m; } return (a+b)/2; }
function _refineExt(f,xc,step,isMin){ var bx=xc,by; try{by=f(xc);}catch(e){return null;} if(!isFinite(by))return null; var a=xc-step,b=xc+step,M=50; for(var i=0;i<=M;i++){ var x=a+(b-a)*i/M,y; try{y=f(x);}catch(e){continue;} if(!isFinite(y))continue; if(isMin?(y<by):(y>by)){by=y;bx=x;} } return {x:bx,y:by}; }
function computeKeyPts(f,x0,x1){
  var out=[],N=1400,step=(x1-x0)/N,pX=null,pY=null,pS=null;
  function add(x,y,kind){ for(var i=0;i<out.length;i++){ if(out[i].kind===kind&&Math.abs(out[i].x-x)<0.06) return; } out.push({x:x,y:y,kind:kind}); }
  try{ var y0=f(0); if(x0<=0&&x1>=0&&isFinite(y0)) add(0,y0,"y"); }catch(e){}
  for(var i=0;i<=N;i++){
    var x=x0+i*step,y; try{y=f(x);}catch(e){y=NaN;}
    if(isFinite(y)){
      if(pY!=null&&isFinite(pY)&&((pY<0&&y>=0)||(pY>0&&y<=0))){ var zx=_bisectRoot(f,pX,x); if(zx!=null) add(zx,0,"zero"); }
      if(pY!=null&&isFinite(pY)){ var s=y-pY; if(pS!=null&&((pS<0&&s>0)||(pS>0&&s<0))){ var _r=_refineExt(f,pX,step,s>0); if(_r) add(_r.x,_r.y,s>0?"min":"max"); } pS=s; } else pS=null;
    } else pS=null;
    pX=x; pY=y; if(out.length>80) break;
  }
  return out;
}
function computeIntersections(arr,x0,x1){
  var out=[],on=[]; (arr||[]).forEach(function(f){ if(f.on&&f.compiled) on.push(f); });
  for(var a=0;a<on.length;a++)for(var b2=a+1;b2<on.length;b2++){
    var f=on[a].compiled,g=on[b2].compiled,N=1400,step=(x1-x0)/N,pX=null,pD=null;
    for(var i=0;i<=N;i++){ var x=x0+i*step,fv,gv; try{fv=f(x);gv=g(x);}catch(e){fv=NaN;gv=NaN;} var d=fv-gv;
      if(isFinite(d)){ if(pD!=null&&isFinite(pD)&&((pD<0&&d>=0)||(pD>0&&d<=0))){ var ix=_bisectDiff(f,g,pX,x); if(ix!=null){ var iy; try{iy=f(ix);}catch(e){iy=NaN;} if(isFinite(iy)) out.push({x:ix,y:iy}); } } pX=x; pD=d; } else pD=null;
      if(out.length>60) break;
    }
  }
  return out;
}
function _fmtN(n){ if(!isFinite(n))return "\u221e"; if(Math.abs(n-Math.round(n))<1e-9) return (""+Math.round(n)).replace("-","\u2212"); var r=Math.round(n*1e4)/1e4; var s=""+r; if(Math.abs(n)>=1e9) s=n.toExponential(4); return s.replace(/-/g,"\u2212").replace(".",","); }
function _polyStr(a,b,c){
  var parts=[];
  function term(coef,suf){ if(Math.abs(coef)<1e-9) return null; var sign=(parts.length===0)?(coef<0?"\u2212":""):(coef<0?" \u2212 ":" + "); var ac=Math.abs(coef); var num=(Math.abs(ac-1)<1e-9&&suf)?"":_fmtN(ac); return sign+num+suf; }
  var t1=term(a,"x\u00b2"); if(t1)parts.push(t1);
  var t2=term(b,"x"); if(t2)parts.push(t2);
  var t3=term(c,""); if(t3)parts.push(t3);
  return parts.length?parts.join(""):"0";
}
function numericSolve(f){
  var roots=[],x0=-30,x1=30,N=3000,step=(x1-x0)/N,pX=null,pY=null;
  for(var i=0;i<=N;i++){ var x=x0+i*step,y; try{y=f(x);}catch(e){y=NaN;}
    if(isFinite(y)){ if(pY!=null&&isFinite(pY)&&((pY<0&&y>=0)||(pY>0&&y<=0))){ var r=_bisectRoot(f,pX,x); if(r!=null){ var dup=false; for(var k=0;k<roots.length;k++) if(Math.abs(roots[k]-r)<1e-4)dup=true; if(!dup)roots.push(r); } } }
    pX=x; pY=y; if(roots.length>12)break;
  }
  if(roots.length===0) return {ok:true,steps:["Nije linearna ni kvadratna \u2014 rje\u0161avam numeri\u010dki.","Nema realnih rje\u0161enja u rasponu \u27e8\u221230, 30\u27e9."],result:"Nema realnih rje\u0161enja (u \u27e8\u221230, 30\u27e9)",roots:[]};
  return {ok:true,steps:["Nije linearna ni kvadratna \u2014 rje\u0161avam numeri\u010dki (pribli\u017eno).","Nulto\u010dke izraza LHS \u2212 RHS:"],result:roots.map(function(r){return "x \u2248 "+_fmtN(r);}).join(",  "),roots:roots,numeric:true};
}
function extractSolverEq(t){
  if(!t) return null;
  var s=String(t).replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3").replace(/\u2074/g,"^4").replace(/\u2075/g,"^5").replace(/\u2212/g,"-").replace(/[\u00b7\u22c5\u00d7]/g,"*");
  var re=/[0-9xX().,^\-+*\/\s]*=[0-9xX().,^\-+*\/\s]+/g, m, out=null;
  while((m=re.exec(s))){
    var cand=m[0];
    if(cand.indexOf("x")<0&&cand.indexOf("X")<0) continue;
    if(!/[0-9]/.test(cand)) continue;
    var norm=cand.replace(/X/g,"x").replace(/([0-9]),([0-9])/g,"$1.$2").replace(/\s+/g,"").replace(/^[*\/^).,=+\-]+/,"").replace(/[+\-*\/^.,=]+$/,"");
    if(norm.indexOf("=")<0||norm.length<3) continue;
    var _L=norm.split("=")[0]; if(/^[a-zA-Z]?\(x\)$/.test(_L)||/^[yY]$/.test(_L)) continue;
    try{ var r=solveEquation(norm); if(r&&r.ok&&!r.error&&((r.roots&&r.roots.length)||/dvostruko|kompleks/.test(r.result||""))){ out=norm; break; } }catch(e){}
  }
  return out;
}
function solveEquation(raw){
  if(!raw||!String(raw).trim()) return null;
  var parts=String(raw).split("=");
  if(parts.length>2) return {error:"Previ\u0161e znakova ="};
  var lhs=parts[0], rhs=parts.length===2?parts[1]:"0";
  var f;
  try{ var fl=calcCompile(lhs), fr=calcCompile(rhs); f=function(x){return fl(x)-fr(x);}; }
  catch(e){ return {error:"Ne razumijem izraz"+(typeof e==="string"?(": "+e):"")}; }
  var f0,f1,fm1,f2,f3;
  try{ f0=f(0); f1=f(1); fm1=f(-1); f2=f(2); f3=f(3); }catch(e){ return {error:"Gre\u0161ka u ra\u010dunanju"}; }
  if(!([f0,f1,fm1,f2,f3].every(isFinite))) return numericSolve(f);
  var c=f0, a=(f1+fm1)/2-c, b=(f1-fm1)/2;
  if(Math.abs(4*a+2*b+c-f2)>1e-6*(1+Math.abs(f2)) || Math.abs(9*a+3*b+c-f3)>1e-6*(1+Math.abs(f3))) return numericSolve(f);
  if(Math.abs(a)<1e-9)a=0; if(Math.abs(b)<1e-9)b=0; if(Math.abs(c)<1e-9)c=0;
  var steps=["Svedeno na oblik:  "+_polyStr(a,b,c)+" = 0"];
  if(a===0){
    if(b===0){ var res0=(Math.abs(c)<1e-9)?"Beskona\u010dno rje\u0161enja (identitet)":"Nema rje\u0161enja"; steps.push(res0); return {ok:true,steps:steps,result:res0,roots:[]}; }
    steps.push("Linearna jednad\u017eba (a = 0).");
    steps.push("x = \u2212c / b = \u2212("+_fmtN(c)+") / ("+_fmtN(b)+")");
    var xr=-c/b;
    return {ok:true,steps:steps,result:"x = "+_fmtN(xr),roots:[xr]};
  }
  steps.push("Kvadratna:  a = "+_fmtN(a)+",  b = "+_fmtN(b)+",  c = "+_fmtN(c));
  var D=b*b-4*a*c;
  steps.push("Diskriminanta:  D = b\u00b2 \u2212 4ac = ("+_fmtN(b)+")\u00b2 \u2212 4\u00b7("+_fmtN(a)+")\u00b7("+_fmtN(c)+") = "+_fmtN(D));
  if(D>1e-9){
    var sq=Math.sqrt(D);
    steps.push("D > 0 \u2192 dva realna rje\u0161enja:  x = (\u2212b \u00b1 \u221aD) / (2a)");
    steps.push("x = ("+_fmtN(-b)+" \u00b1 "+_fmtN(sq)+") / "+_fmtN(2*a));
    return {ok:true,steps:steps,result:"x\u2081 = "+_fmtN((-b+sq)/(2*a))+",   x\u2082 = "+_fmtN((-b-sq)/(2*a)),roots:[(-b+sq)/(2*a),(-b-sq)/(2*a)]};
  } else if(D>-1e-9){
    steps.push("D = 0 \u2192 jedno (dvostruko) rje\u0161enje:  x = \u2212b / (2a)");
    return {ok:true,steps:steps,result:"x = "+_fmtN(-b/(2*a))+"   (dvostruko)",roots:[-b/(2*a)]};
  } else {
    var sqi=Math.sqrt(-D), re=-b/(2*a), im=sqi/(2*a);
    steps.push("D < 0 \u2192 dva kompleksna rje\u0161enja:  x = (\u2212b \u00b1 \u221aD) / (2a)");
    return {ok:true,steps:steps,result:"x\u2081\u2082 = "+_fmtN(re)+" \u00b1 "+_fmtN(Math.abs(im))+"i",roots:[],complex:true};
  }
}
function _toFrac(x){ if(!isFinite(x))return null; var neg=x<0; x=Math.abs(x); var h1=1,h0=0,k1=0,k0=1,b=x; for(var i=0;i<40;i++){ var a=Math.floor(b); var h2=a*h1+h0,k2=a*k1+k0; if(k2>100000)break; h0=h1;h1=h2;k0=k1;k1=k2; if(Math.abs(h1/k1-x)<1e-10)break; var fr=b-a; if(fr<1e-12)break; b=1/fr; } if(k1>0&&Math.abs(h1/k1-x)<1e-9) return {p:(neg?-1:1)*h1,q:k1}; return null; }
function _simpRad(n){ n=Math.round(n); if(n<=0)return null; var a=1; for(var d=2;d*d<=n;d++){ while(n%(d*d)===0){ n=n/(d*d); a=a*d; } } return {coef:a,rad:n}; }
function exactFmt(x){
  if(!isFinite(x)) return calcFmt(x);
  if(Math.abs(x-Math.round(x))<1e-9) return (""+Math.round(x)).replace("-","\u2212");
  var fr=_toFrac(x); if(fr&&fr.q!==1&&fr.q<=10000){ return (fr.p<0?"\u2212":"")+Math.abs(fr.p)+"/"+fr.q; }
  var sq=x*x;
  if(Math.abs(sq-Math.round(sq))<1e-7){ var sr=_simpRad(Math.round(sq)); if(sr&&sr.rad>1){ return (x<0?"\u2212":"")+(sr.coef!==1?sr.coef:"")+"\u221a"+sr.rad; } }
  return calcFmt(x);
}
function calcFmt(n){
  if(!isFinite(n))return n<0?"−∞":"∞";
  if(n===0||Math.abs(n)<1e-12)return "0";
  var a=Math.abs(n),s;
  if(a>=1e12||a<1e-6)s=n.toExponential(6);
  else s=""+parseFloat(n.toFixed(8));
  return s.replace(".",",").replace("e","·10^").replace("^+","^");
}
function MathAssistant({qText,qType,seed}){
  var ND=(typeof window!=="undefined"&&window.nerdamer)?window.nerdamer:(typeof nerdamer!=="undefined"?nerdamer:null);
  var _ndb=React.useState(0),_bumpNdA=_ndb[1];
  React.useEffect(function(){ __ensureNerdamer().then(function(x){ if(x) _bumpNdA(function(y){ return y+1; }); }); },[]);
  var _in=React.useState(seed!=null?String(seed):""),input=_in[0],setInput=_in[1];
  var _op=React.useState("auto"),op=_op[0],setOp=_op[1];
  var _res=React.useState(null),res=_res[0],setRes=_res[1];
  var _ai=React.useState("idle"),aiState=_ai[0],setAiState=_ai[1];
  var _aio=React.useState(null),aiOut=_aio[0],setAiOut=_aio[1];
  var _up=React.useState(false),showUp=_up[0],setShowUp=_up[1];
  var _pp=React.useState(0),_setPp=_pp[1];
  React.useEffect(function(){var f=function(){_setPp(function(x){return x+1;});};window.addEventListener("discere-pro",f);return function(){window.removeEventListener("discere-pro",f);};},[]);
  function pretty(s){return String(s).replace(/\*\*/g,"^").replace(/\bsqrt\s*\(/g,"√(").replace(/\bsqrt\b/g,"√").replace(/\bpi\b/g,"π").replace(/<=/g,"≤").replace(/>=/g,"≥").replace(/\*/g,"·");}
  function askProfessor(){
    var raw=input.trim(); if(!raw){return;}
    if(!IS_PRO){ setShowUp(true); return; }
    if(aiState==="loading")return;
    setAiState("loading"); setAiOut(null);
    var hint=(res&&res.ok&&res.output&&!res.error&&!res.note)?("\nProvjera (simbolicki izracun daje): "+String(res.output).replace(/\n/g," ; ")+". Uskladi rjesenje s time.\n"):"";
    var prompt="Ti si strpljiv profesor matematike za hrvatsku drzavnu maturu. Rijesi zadatak korak po korak, jasno i pedagoski, na hrvatskom jeziku. Objasni SVAKI korak (ne samo sto, nego zasto se radi). Koristi jednostavan zapis: x^2, sqrt(...), razlomci kao a/b, * za mnozenje, pi, <=, >=. Ako je zadatak rijecni ili geometrijski, prvo postavi matematicki model pa rijesi.\n\nZadatak: "+raw+"\n"+hint+"\nVrati ISKLJUCIVO JSON (bez markdown, bez backtickova):\n{\"koraci\":[\"korak 1 s objasnjenjem\",\"korak 2\",\"...\"],\"rjesenje\":\"konacni odgovor, jasno\",\"napomena\":\"cesta greska ILI kljucni uvid, 1 recenica\"}";
    __aiPost(prompt,1100).then(function(data){ if(data.error||!data.content)throw new Error("api"); var t=(data.content[0]&&data.content[0].text)||"{}"; var o=JSON.parse(t.replace(/```json|```/g,"").trim()); if(!o.koraci||!o.koraci.length)throw new Error("fmt"); setAiOut(o); setAiState("done"); }).catch(function(){ setAiState("error"); });
  }

  function norm(s){
    return String(s)
      .replace(/\u2212/g,"-")
      .replace(/\u2264/g,"<=").replace(/\u2265/g,">=")
      .replace(/[\u00b7\u00d7\u2219]/g,"*")
      .replace(/\u221a/g,"sqrt")
      .replace(/\u03c0/g,"pi")
      .replace(/\u00b2/g,"^2").replace(/\u00b3/g,"^3")
      .replace(/[\u2070\u00b9\u2074\u2075\u2076\u2077\u2078\u2079]/g,function(c){var m={"\u2070":"0","\u00b9":"1","\u2074":"4","\u2075":"5","\u2076":"6","\u2077":"7","\u2078":"8","\u2079":"9"};return "^"+(m[c]||"");})
      .replace(/(\d),(\d)/g,"$1.$2")
      .trim();
  }
  function disp(s){
    s=String(s);
    s=s.replace(/\*\*/g,"^");
    s=s.replace(/sqrt/g,"\u221a");
    s=s.replace(/\bpi\b/g,"\u03c0");
    s=s.replace(/abs\(([^()]*)\)/g,"|$1|");
    s=s.replace(/\(-(\d+(?:\/\d+)?)\+([a-zA-Z])\)/g,"($2-$1)");
    s=s.replace(/\((\d+(?:\/\d+)?)\+([a-zA-Z])\)/g,"($2+$1)");
    s=s.replace(/\^(\([^)]*\)|[A-Za-z0-9]+(?:\.[0-9]+)?)/g,function(_,e){return e.charAt(0)==="("?"^"+e:"^("+e+")";});
    s=s.replace(/\*/g,"");
    s=s.replace(/(\d)\.(\d)/g,"$1,$2");
    s=s.replace(/-/g,"\u2212");
    return s;
  }
  function detectVar(expr){var m=String(expr).replace(/sqrt|sin|cos|tan|cot|log|ln|pi|abs|exp/g,"").match(/[a-zA-Z]/);return m?m[0]:"x";}
  function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=b;b=a%b;a=t;}return a||1;}
  function toFrac(x,tol){tol=tol||1e-9;if(!isFinite(x))return ""+x;var neg=x<0;x=Math.abs(x);if(Math.abs(x-Math.round(x))<tol)return (neg?-Math.round(x):Math.round(x))+"";var h1=1,h0=0,k1=0,k0=1,bb=x;for(var i=0;i<40;i++){var a=Math.floor(bb);var h2=a*h1+h0,k2=a*k1+k0;if(Math.abs(x-h2/k2)<tol||k2>1e6){var g=gcd(h2,k2);return (neg?"-":"")+(h2/g)+"/"+(k2/g);}h0=h1;h1=h2;k0=k1;k1=k2;bb=1/(bb-a);if(!isFinite(bb))break;}return (neg?-x:x)+"";}
  function evalNum(e){try{return parseFloat(ND(e).evaluate().text("decimals"));}catch(x){return NaN;}}
  function decOf(s){var d=evalNum(s);if(!isFinite(d))return null;if(Math.abs(d-Math.round(d))<1e-9)return null;return ((Math.round(d*1000)/1000)+"").replace(".",",");}
  function fracPi(q){for(var d=1;d<=12;d++){var n=q*d;if(Math.abs(n-Math.round(n))<1e-6){var nn=Math.round(n);var g=gcd(Math.abs(nn),d)||1;return[nn/g,d/g];}}return null;}
  function fmtPi(f){var n=f[0],d=f[1];if(n===0)return"0";if(d===1)return n===1?"\u03C0":n===-1?"\u2212\u03C0":(n<0?"\u2212":"")+Math.abs(n)+"\u03C0";var a=Math.abs(n);return (n<0?"\u2212":"")+(a===1?"":a)+"\u03C0/"+d;}
  function piMinus(f){var n=f[1]-f[0],d=f[1];var g=gcd(Math.abs(n),d)||1;return[n/g,d/g];}

  function solveExact(eqRaw,v){
    var parts=String(eqRaw).split("="); var lhs=parts[0], rhs=parts.length>1?parts[1]:"0";
    var Pstr="("+lhs+")-("+rhs+")";
    function S(val){return ND(Pstr).sub(v,"("+val+")").toString();}
    var c,f1,fm1,f2;
    try{ c=S(0); f1=S(1); fm1=S(-1); f2=S(2); }catch(e){ return {err:1}; }
    if([c,f1,fm1,f2].some(function(x){return /[a-df-hj-zA-DF-HJ-Z]/.test(String(x).replace(/sqrt|pi|exp/gi,""));})) return {err:1};
    var a=ND("(("+f1+")+("+fm1+")-2*("+c+"))/2").toString();
    var b=ND("(("+f1+")-("+fm1+"))/2").toString();
    if(ND("4*("+a+")+2*("+b+")+("+c+")").toString()!==f2) return {err:1};
    if(a==="0"){ if(b==="0") return {roots:[],sp:(c==="0"?"id":"none")}; return {roots:[ND("-("+c+")/("+b+")").toString()]}; }
    var D=ND("("+b+")^2-4*("+a+")*("+c+")").toString();
    if(evalNum(D)<0) return {roots:[],complex:1,D:D};
    var r1=ND("(-("+b+")+sqrt("+D+"))/(2*("+a+"))").toString();
    var r2=ND("(-("+b+")-sqrt("+D+"))/(2*("+a+"))").toString();
    return {roots:(r1===r2)?[r1]:[r1,r2],D:D,sum:ND("-("+b+")/("+a+")").toString(),prod:ND("("+c+")/("+a+")").toString()};
  }

  function solveInequality(raw){
    var m=raw.match(/(<=|>=|<|>|\u2264|\u2265)/); if(!m)return null;
    var opr=m[1].replace("\u2264","<=").replace("\u2265",">=");
    var parts=norm(raw).split(/<=|>=|<|>/); if(parts.length!==2)return {err:1};
    var v=detectVar(parts[0]+parts[1]);
    var f="("+parts[0]+")-("+parts[1]+")";
    var ex; try{ ex=solveExact(f+"=0",v); }catch(e){ return {err:1}; }
    if(!ex||ex.err)return {err:1};
    function fval(x){return parseFloat(ND(f).sub(v,"("+x+")").evaluate().text("decimals"));}
    var incl=(opr===">="||opr==="<="); var want=(opr==="<"||opr==="<=")?-1:1;
    var rn=ex.roots.map(function(r){return {s:r,n:evalNum(r)};}).filter(function(o){return isFinite(o.n);}).sort(function(a,b){return a.n-b.n;});
    if(rn.length===0){ var sg=Math.sign(fval(0)); return {v:v,set:((sg===want)?"\u211D":"\u2205")}; }
    var pts=[rn[0].n-1]; for(var i=0;i<rn.length-1;i++)pts.push((rn[i].n+rn[i+1].n)/2); pts.push(rn[rn.length-1].n+1);
    var sel=pts.map(function(x){return Math.sign(fval(x))===want;});
    var bounds=["\u2212\u221E"].concat(rn.map(function(r){return disp(r.s);})).concat(["+\u221E"]);
    var pieces=[];
    for(var i=0;i<sel.length;i++){ if(sel[i]){ var lc=(i>0&&incl),hc=(i<sel.length-1&&incl); pieces.push((lc?"[":"\u27E8")+bounds[i]+", "+bounds[i+1]+(hc?"]":"\u27E9")); } }
    if(incl){ rn.forEach(function(r,idx){ if(Math.abs(fval(r.n))<1e-7 && !sel[idx] && !sel[idx+1]) pieces.push("{"+disp(r.s)+"}"); }); }
    return {v:v,set:(pieces.length?pieces.join(" \u222A "):"\u2205")};
  }

  function solveTrig(raw,v){
    v=v||"x";
    var fm=raw.match(/(sin|cos|tan|tg)\s*\(\s*([a-zA-Z])\s*\)/i); if(!fm)return null;
    var func=fm[1].toLowerCase(); if(func==="tg")func="tan";
    var arg=fm[2];
    var eqU=norm(raw).replace(new RegExp(func+"\\s*\\(\\s*"+arg+"\\s*\\)","gi"),"u");
    var parts=eqU.split("="); if(parts.length!==2)return null;
    var aStr; try{ aStr=ND.solve("("+parts[0]+")-("+parts[1]+")","u").toString().replace(/^\[|\]$/g,""); }catch(e){ return null; }
    if(aStr===""||/,/.test(aStr))return null;
    var a=evalNum(aStr); if(!isFinite(a))return null;
    if((func==="sin"||func==="cos")&&Math.abs(a)>1+1e-9) return "Nema realnih rješenja ( |"+func+" "+v+"| \u2264 1 ).";
    var p;
    if(func==="sin"){
      if(Math.abs(a)<1e-9)return v+" = k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a-1)<1e-9)return v+" = \u03C0/2 + 2k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a+1)<1e-9)return v+" = \u2212\u03C0/2 + 2k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.asin(a)/Math.PI);
      if(!p)return v+" = arcsin("+disp(aStr)+") + 2k\u03C0   \u2228   "+v+" = \u03C0 \u2212 arcsin("+disp(aStr)+") + 2k\u03C0   (\u2248 "+((Math.round(Math.asin(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = "+fmtPi(p)+" + 2k\u03C0   \u2228   "+v+" = "+fmtPi(piMinus(p))+" + 2k\u03C0,  k \u2208 \u2124";
    }
    if(func==="cos"){
      if(Math.abs(a)<1e-9)return v+" = \u03C0/2 + k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a-1)<1e-9)return v+" = 2k\u03C0,  k \u2208 \u2124";
      if(Math.abs(a+1)<1e-9)return v+" = \u03C0 + 2k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.acos(a)/Math.PI);
      if(!p)return v+" = \u00B1arccos("+disp(aStr)+") + 2k\u03C0   (\u2248 "+((Math.round(Math.acos(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = \u00B1"+fmtPi(p)+" + 2k\u03C0,  k \u2208 \u2124";
    }
    if(func==="tan"){
      if(Math.abs(a)<1e-9)return v+" = k\u03C0,  k \u2208 \u2124";
      p=fracPi(Math.atan(a)/Math.PI);
      if(!p)return v+" = arctan("+disp(aStr)+") + k\u03C0   (\u2248 "+((Math.round(Math.atan(a)*1000)/1000)+"").replace(".",",")+")";
      return v+" = "+fmtPi(p)+" + k\u03C0,  k \u2208 \u2124";
    }
    return null;
  }

  function detect(raw){
    var s=String(raw).trim(); var expr=s, op=null, want=null;
    if(/(<=|>=|<|>|\u2264|\u2265)/.test(s)){ return {op:"inequality",expr:s.replace(/^\s*(rije[s\u0161]i\s*)?(nejednad[z\u017E]b\w*\s*)?/i,"").trim(),want:null}; }
    if(/\b(zbroj|suma|zbir)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="sum";
    else if(/\b(umno[z\u017E]ak|produkt)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="prod";
    else if(/\b(broj|koliko)\b/i.test(s)&&/rje[s\u0161]enj/i.test(s)) want="count";
    if(want){ op="solve"; expr=s.replace(/\b(zbroj|suma|zbir|umno[z\u017E]ak|produkt|broj|koliko\s+je|koliko)\b/gi,"").replace(/rje[s\u0161]enj\w*/gi,"").replace(/jednad[z\u017E]b\w*/gi,"").replace(/\bza\s+koje\b/gi,"").replace(/nulto[c\u010D]k\w*/gi,"").replace(/^[\s:,\-]+|[\s:,\-]+$/g,"").trim(); }
    if(!op){
      var KW=[
        [/\b(deriviraj|derivacij\w*|izvod)\b\s*(od\s+)?/i,"diff"],
        [/\b(integriraj|integral\w*|primitivn\w*|antideriv\w*)\b\s*(od\s+|funkcij\w*\s+)?/i,"integrate"],
        [/\b(faktoriziraj|faktorizacij\w*|rastavi(\s+na\s+faktore)?)\b\s*/i,"factor"],
        [/\b(razmnozi|razmno\u017Ei|raspisi|raspi\u0161i|pomnozi|pomno\u017Ei|umnozak|umno\u017Eak)\b\s*/i,"expand"],
        [/\b(pojednostavi\w*|skrati|sredi)\b\s*/i,"simplify"],
        [/\b(sustav)\b\s*(jednad\u017Eb\w*|jednadzb\w*)?\s*/i,"system"],
        [/\b(rijesi|rije\u0161i|nultock\w*|nulto\u010Dk\w*|rjesenj\w*|rje\u0161enj\w*)\b\s*/i,"solve"],
        [/\b(izracunaj|izra\u010Dunaj|vrijednost\w*)\b\s*/i,"eval"]
      ];
      for(var i=0;i<KW.length;i++){ var ns=expr.replace(KW[i][0],""); if(ns!==expr){ op=KW[i][1]; expr=ns.trim(); break; } }
    }
    var pm=expr.match(/(-?\d+(?:[.,]\d+)?)\s*%\s*(?:od|of)\s*(-?\d+(?:[.,]\d+)?)/i);
    if(pm){ expr="("+pm[1].replace(",",".")+"/100)*"+pm[2].replace(",","."); if(!op)op="eval"; }
    if(op==="diff"||op==="integrate"){ expr=expr.replace(/\u222B/g,"").replace(/d\s*\/\s*dx/gi,"").replace(/\bdx\b/gi,"").replace(/['\u2032]/g,"").replace(/^[\s,]+|[\s,]+$/g,"").trim(); }
    if(!op){
      if(/\u222B/.test(s)||/\bdx\b/i.test(s)){ op="integrate"; expr=expr.replace(/\u222B/g,"").replace(/\bdx\b/gi,"").trim(); }
      else if(/['\u2032]/.test(expr)){ op="diff"; expr=expr.replace(/['\u2032]/g,"").trim(); }
      else { var eqc=(expr.match(/=/g)||[]).length;
        if(eqc>=2) op="system"; else if(eqc===1) op="solve";
        else { var letters=expr.replace(/(sqrt|sin|cos|tan|cot|log|ln|abs|exp|pi)/gi,"").replace(/[eE]/g,"");
          if(!/[a-zA-Z]/.test(letters)&&/\d/.test(expr)) op="eval"; else op="simplify"; } }
    }
    return {op:op,expr:expr,want:want};
  }

  var OPS=[["solve","Riješi ="],["system","Sustav"],["inequality","Nejednadžba"],["simplify","Pojednostavi"],["factor","Faktoriziraj"],["expand","Razmnoži"],["diff","Deriviraj"],["integrate","Integriraj"],["eval","Izračunaj"]];
  var LBL={}; OPS.forEach(function(o){LBL[o[0]]=o[1];});

  function run(forced){
    if(!ND){ setRes({error:"Matematički modul se još učitava — pokušaj za koju sekundu."}); return; }
    var raw=input.trim(); if(!raw){ setRes(null); return; }
    var d=detect(raw);
    var useOp=(forced&&forced!=="auto")?forced:(op!=="auto"?op:d.op);
    var expr=d.expr, want=d.want;
    try{
      if(useOp==="inequality"){
        var iq=solveInequality(raw);
        if(!iq||iq.err){ setRes({ok:true,title:"Nejednadžba",output:"Mogu riješiti linearne i kvadratne nejednadžbe. Za složenije probaj AI profesora.",note:2}); return; }
        setRes({ok:true,title:"Rješenje nejednadžbe",output:iq.v+" \u2208 "+iq.set,plain:true}); return;
      }
      if(useOp==="system"){
        var eqs=norm(expr).split(/[\n;]+/).map(function(x){return x.trim();}).filter(Boolean);
        if(eqs.length<2){ setRes({ok:true,title:"Sustav",output:"Upiši barem dvije jednadžbe (odvojene ; ili u novi red).",note:1}); return; }
        var sol=ND.solveEquations(eqs);
        if(!sol||!sol.length){ setRes({ok:true,title:"Sustav",output:"Nema jednoznačnog rješenja.",note:1}); return; }
        var lines=sol.map(function(p){var fr=toFrac(p[1]);var dd=(/\//.test(fr))?("  (= "+((""+p[1]).replace(".",","))+")"):"";return p[0]+" = "+disp(fr)+dd;});
        setRes({ok:true,title:"Rješenje sustava",output:lines.join("\n"),plain:true}); return;
      }
      if(useOp==="solve"){
        var v=detectVar(norm(expr));
        if(/(sin|cos|tan|tg)\s*\(/i.test(expr)){
          var tr=solveTrig(expr,v);
          if(tr){ setRes({ok:true,title:"Opće rješenje",output:tr,plain:true}); return; }
        }
        var eqN=norm(expr); if(eqN.indexOf("=")<0) eqN+="=0";
        var ex=null; try{ ex=solveExact(eqN,v); }catch(e){ ex=null; }
        if(ex&&!ex.err){
          if(ex.complex){ setRes({ok:true,title:"Rješenja",output:"Nema realnih rješenja (D = "+disp(ex.D)+" < 0).",note:1}); return; }
          if(ex.roots.length===0){ setRes({ok:true,title:"Rješenja",output:ex.sp==="id"?"Beskonačno mnogo rješenja (identitet).":"Nema rješenja.",note:1}); return; }
          var out=ex.roots.map(disp).join(",   ");
          var decs=ex.roots.map(decOf).filter(Boolean);
          if(want==="sum"&&ex.sum!==undefined){ setRes({ok:true,title:"Zbroj rješenja",output:disp(ex.sum),sub:v+" = "+out}); return; }
          if(want==="prod"&&ex.prod!==undefined){ setRes({ok:true,title:"Umnožak rješenja",output:disp(ex.prod),sub:v+" = "+out}); return; }
          if(want==="count"){ setRes({ok:true,title:"Broj rješenja",output:String(ex.roots.length),sub:v+" = "+out}); return; }
          setRes({ok:true,title:v+" =",output:out,dec:decs.length?decs.join(";   "):null,sum:ex.sum!==undefined?disp(ex.sum):null,prod:ex.prod!==undefined?disp(ex.prod):null,roots:ex.roots.length}); return;
        }
        var arr=ND.solve(eqN,v).toString().replace(/^\[|\]$/g,"").split(",").map(function(x){return x.trim();}).filter(Boolean);
        var bad=arr.length>6||arr.some(function(r){return r.replace(/[^0-9]/g,"").length>10;});
        if(arr.length===0||bad){ setRes({ok:true,title:"Rješenje",output:"Ne mogu naći jednostavno egzaktno rješenje — vjerojatno traži numeričku ili trigonometrijsku metodu (probaj AI profesora).",note:2}); return; }
        setRes({ok:true,title:v+" =",output:arr.map(disp).join(",   "),roots:arr.length}); return;
      }
      var exprN=norm(expr).replace(/=.*$/,"").trim();
      if(useOp==="simplify"){ setRes({ok:true,title:"Pojednostavljeno",output:disp(ND("simplify("+exprN+")").toString())}); return; }
      if(useOp==="expand"){ setRes({ok:true,title:"Razmnoženo",output:disp(ND("expand("+exprN+")").toString())}); return; }
      if(useOp==="factor"){ setRes({ok:true,title:"Faktorizirano",output:disp(ND.factor(exprN).toString())}); return; }
      if(useOp==="diff"){ var dv=detectVar(exprN); setRes({ok:true,title:"Derivacija (po "+dv+")",output:disp(ND.diff(exprN,dv).toString())}); return; }
      if(useOp==="integrate"){ var iv=detectVar(exprN); setRes({ok:true,title:"\u222B \u2026 d"+iv,output:disp(ND.integrate(exprN,iv).toString())+" + C"}); return; }
      if(useOp==="eval"){
        var exact=disp(ND(exprN).toString());
        var dnum=null; try{ dnum=ND(exprN).evaluate().text("decimals"); }catch(e){}
        var outE=exact;
        if(dnum&&/[\u221a\/]/.test(exact)){ var sym=/\u221a/.test(exact)?"\u2248":"="; outE=exact+"  ("+sym+" "+((Math.round(parseFloat(dnum)*1000)/1000)+"").replace(".",",")+")"; }
        setRes({ok:true,title:"Rezultat",output:outE,plain:/[\u221a\/]/.test(exact)}); return;
      }
      setRes({ok:true,title:"Rezultat",output:disp(ND(exprN).toString())});
    }catch(err){
      setRes({error:"Ne razumijem izraz. Provjeri zapis — npr. x^2-5x+6=0, x^2-4<0, sin(x)=1/2, sqrt(x)."});
    }
  }

  var det=(op==="auto"&&input.trim())?detect(input):null;
  var inpBg="rgba(255,255,255,.06)", bd="var(--bdr2)";
  function rline(line,i,arr,mode){var small=mode==="small";return e("div",{key:i,style:{fontSize:small?13:(mode==="plain"?15.5:17),color:small?"rgba(255,255,255,.8)":"#fff",fontWeight:small?500:700,lineHeight:1.55,marginBottom:i<arr.length-1?6:0,wordBreak:"break-word"}},mode==="math"?renderOptText(line):line);}
  var rmode=res&&!res.error?(res.note?"small":(res.plain?"plain":"math")):null;
  return e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0,overflowY:"auto"}},
    e("div",{style:{marginBottom:10,flexShrink:0}},
      e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"#9ec5f0",marginBottom:4}},"\uD83D\uDCD0 Matematički asistent"),
      e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.55)",lineHeight:1.4}},"Upiši zadatak prirodno \u2014 sam prepoznaje što treba i daje egzaktan oblik (razlomak/korijen/interval).")),
    e("textarea",{value:input,onChange:function(ev){setInput(ev.target.value);},
      onKeyDown:function(ev){if(ev.key==="Enter"&&!ev.shiftKey){ev.preventDefault();run();}},
      placeholder:"npr.  x^2-5x+6<0   ·   sin(x)=1/2   ·   zbroj rješenja x^2-5x+6=0   ·   deriviraj x^3   ·   2x+3y=8; x-y=1",
      rows:2,style:{width:"100%",boxSizing:"border-box",padding:"11px 13px",borderRadius:10,border:"1px solid "+bd,background:inpBg,color:"#fff",fontSize:15,fontFamily:"var(--fm, monospace)",resize:"vertical",lineHeight:1.4}}),
    det&&e("div",{style:{display:"flex",alignItems:"center",gap:7,margin:"8px 0 2px",fontSize:11.5,color:"rgba(255,255,255,.6)",flexWrap:"wrap"}},
      e("span",{style:{color:"var(--blue)",fontWeight:700}},"\u2728 Prepoznato:"),
      e("span",{style:{fontWeight:700,color:"#fff",padding:"2px 9px",borderRadius:99,background:"var(--blue-d)",border:"1px solid var(--blue-b)"}},(LBL[det.op]||det.op)+(det.want?(" · "+(det.want==="sum"?"zbroj":det.want==="prod"?"umnožak":"broj")):"")),
      e("span",{style:{color:"rgba(255,255,255,.4)"}},"\u2014 promijeni dolje ako želiš")),
    e("div",{style:{display:"flex",flexWrap:"wrap",gap:6,margin:"10px 0"}},
      OPS.map(function(o){var fOn=op===o[0];var aOn=(op==="auto"&&det&&det.op===o[0]);
        return e("button",{key:o[0],onClick:function(){setOp(fOn?"auto":o[0]);if(input.trim())run(fOn?"auto":o[0]);},
          style:{padding:"5px 11px",borderRadius:99,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",
          border:"1px solid "+((fOn||aOn)?"var(--blue-b)":bd),background:fOn?"var(--blue)":aOn?"rgba(74,144,217,.18)":"rgba(255,255,255,.05)",color:fOn?"#fff":aOn?"var(--blue)":"#fff"}},o[1]);})),
    e("button",{onClick:function(){run();},style:{width:"100%",padding:"11px",borderRadius:10,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"var(--fb)",marginBottom:14}},
      "\u25B6 Riješi"+(op==="auto"?(det?(" \u00b7 "+(LBL[det.op]||"")):""):(" \u00b7 "+(LBL[op]||"")))),
    res&&e("div",{style:{borderRadius:12,padding:"13px 15px",marginBottom:14,
      background:res.error?"rgba(248,113,113,.1)":"rgba(80,200,120,.08)",border:"1px solid "+(res.error?"rgba(248,113,113,.4)":"rgba(80,200,120,.4)")}},
      res.error
        ? e("div",{style:{fontSize:13,color:"#fca5a5",lineHeight:1.5}},res.error)
        : e("div",null,
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",color:res.note===2?"var(--gold)":"var(--green)",marginBottom:7}},res.title),
            res.output.split("\n").map(function(l,i,arr){return rline(l,i,arr,rmode);}),
            res.sub&&e("div",{style:{fontSize:13,color:"rgba(255,255,255,.7)",marginTop:7,lineHeight:1.5}},renderOptText(res.sub)),
            res.dec&&e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.5)",marginTop:6}},"Decimalno: "+res.dec),
            (res.sum!=null||res.prod!=null)&&res.roots>1&&e("div",{style:{display:"flex",gap:16,marginTop:9,paddingTop:9,borderTop:"1px solid var(--bdr2)",fontSize:12.5,color:"rgba(255,255,255,.75)",flexWrap:"wrap"}},
              res.sum!=null&&e("span",null,"Zbroj: ",e("b",{style:{color:"#fff"}},renderOptText(res.sum))),
              res.prod!=null&&e("span",null,"Umnožak: ",e("b",{style:{color:"#fff"}},renderOptText(res.prod)))),
            res.roots>1&&!res.sub&&e("div",{style:{fontSize:11,color:"rgba(255,255,255,.45)",marginTop:6}},res.roots+" rješenja"),
            res.note===2&&e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.6)",marginTop:9,paddingTop:9,borderTop:"1px solid var(--bdr2)",lineHeight:1.5}},"\uD83C\uDF93 Za potpuno rješenje uz korake \u2014 AI profesor (uskoro u radnom prostoru).")
          )),
    input.trim()&&e("div",{style:{marginTop:4,marginBottom:14,paddingTop:14,borderTop:"1px solid var(--bdr2)"}},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7}},
        e("span",{style:{fontSize:13,fontWeight:800,color:"#e9b446"}},"🎓 AI profesor"),
        !IS_PRO&&e("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:".06em",color:"#0b1b3a",background:"#e9b446",borderRadius:99,padding:"2px 7px"}},"PRO")),
      e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.55)",lineHeight:1.45,marginBottom:11}},"Rješenje s objašnjenim koracima — i za riječne, geometrijske i dokazne zadatke koje CAS ne računa."),
      aiState==="error"&&e("div",{style:{fontSize:12,color:"#fca5a5",marginBottom:9}},__aiErrMsg()),
      (aiState==="done"&&aiOut)?e("div",{style:{borderRadius:12,padding:"13px 15px",background:"rgba(233,180,70,.08)",border:"1px solid rgba(233,180,70,.35)"}},
        e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".05em",textTransform:"uppercase",color:"#e9b446",marginBottom:9}},"Korak po korak"),
        (aiOut.koraci||[]).map(function(k,i){return e("div",{key:i,style:{display:"flex",gap:9,marginBottom:9,fontSize:13,lineHeight:1.55,color:"rgba(255,255,255,.92)"}},e("span",{style:{flexShrink:0,width:20,height:20,borderRadius:99,background:"rgba(233,180,70,.2)",color:"#e9b446",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}},i+1),e("span",null,pretty(k)));}),
        aiOut.rjesenje&&e("div",{style:{marginTop:4,paddingTop:11,borderTop:"1px solid var(--bdr2)",fontSize:14,fontWeight:700,color:"#fff"}},"✅ ",pretty(aiOut.rjesenje)),
        aiOut.napomena&&e("div",{style:{marginTop:9,fontSize:12,color:"rgba(255,255,255,.62)",lineHeight:1.5,fontStyle:"italic"}},"💡 ",pretty(aiOut.napomena)),
        e("button",{onClick:function(){setAiState("idle");setAiOut(null);},style:{marginTop:12,background:"transparent",border:"1px solid var(--bdr2)",color:"rgba(255,255,255,.6)",fontFamily:"var(--fb)",fontSize:11.5,fontWeight:600,padding:"6px 12px",borderRadius:8,cursor:"pointer"}},"↻ Novo pitanje"))
      :e("button",{onClick:askProfessor,disabled:aiState==="loading",style:{width:"100%",padding:"11px",borderRadius:10,fontFamily:"var(--fb)",fontWeight:800,fontSize:13.5,cursor:aiState==="loading"?"default":"pointer",background:IS_PRO?"#e9b446":"rgba(233,180,70,.14)",color:IS_PRO?"#0b1b3a":"#fff",border:IS_PRO?"none":"1px solid rgba(233,180,70,.4)"}},aiState==="loading"?"⏳ Profesor piše…":IS_PRO?"✨ Objasni korak po korak":planCta()),
      (!IS_PRO&&aiState!=="done")&&e("div",{style:{position:"relative",marginTop:12}},
        e("div",{"aria-hidden":"true",style:{filter:"blur(3.5px)",opacity:.55,pointerEvents:"none",userSelect:"none"}},e("div",{style:{fontSize:12.5,lineHeight:1.6,color:"rgba(255,255,255,.85)"}},"1. Prebaci sve na lijevu stranu: x²−5x+6=0.  2. Rastavi na faktore: (x−2)(x−3)=0.  3. Nultočke: x=2 ili x=3…")),
        e("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}},e("span",{style:{fontSize:10.5,fontWeight:700,color:"#fff",background:"rgba(10,23,48,.6)",border:"1px solid rgba(255,255,255,.2)",borderRadius:99,padding:"4px 11px",backdropFilter:"blur(2px)"}},"🔒 Koraci s objašnjenjem — uz Pro")))),
    showUp&&e(UpgradeModal,{onClose:function(){setShowUp(false);}}),
    e("div",{style:{fontSize:11,color:"rgba(255,255,255,.4)",lineHeight:1.6,marginTop:"auto",paddingTop:10}},
      e("div",{style:{fontWeight:700,marginBottom:3,color:"rgba(255,255,255,.55)"}},"Zapis:"),
      "x^2 \u00b7 sqrt(x) \u00b7 nejednadžba x^2-4<0 \u00b7 trig sin(x)=1/2 \u00b7 \u201ezbroj rješenja …\u201c \u00b7 Enter = riješi."),
    e("div",{style:{fontSize:10.5,color:"rgba(255,255,255,.35)",fontStyle:"italic",marginTop:8,lineHeight:1.5}},
      "Riječni zadaci, geometrija i dokazi \u2014 koristi AI profesora; CAS računa simbolički, bez koraka."));
}
function ScratchPad({onClose,wsKey,store,figure,qText,qOpts,qSteps,qSol,qType,answered,seedAsk,onSeedUsed,examMode}){
  const saved=React.useMemo(()=>(store&&wsKey&&store[wsKey])||null,[]);
  const cv=React.useRef(null), wrap=React.useRef(null);
  const draw=React.useRef({on:false});
  const gesture=React.useRef(null);
  const strokes=React.useRef(saved&&saved.strokes?saved.strokes:[]);
  const redoStk=React.useRef([]);
  const cur=React.useRef(null);
  const view=React.useRef({s:(saved&&saved.viewS)||1, ox:(saved&&typeof saved.viewOx==="number")?saved.viewOx:null, oy:(saved&&typeof saved.viewOy==="number")?saved.viewOy:null});
  const[zPct,setZPct]=React.useState(Math.round(((saved&&saved.viewS)||1)*100));
  const[mode,setMode]=React.useState(()=>{var _m=(seedAsk!=null)?"asistent":(saved&&saved.mode?saved.mode:"skica");if(_m==="solve")_m="asistent";if(examMode&&_m==="asistent")_m="skica";return _m;});
  React.useEffect(function(){if(seedAsk!=null&&onSeedUsed){onSeedUsed();}},[]);
  const[color,setColor]=React.useState(()=>saved&&saved.color?saved.color:"#1a1a1a");
  const[width,setWidth]=React.useState(()=>saved&&saved.width?saved.width:2.4);
  const[tool,setTool]=React.useState(()=>saved&&saved.tool?saved.tool:"pen");
  const[grid,setGrid]=React.useState(()=>saved?!!saved.grid:true);
  const[axes,setAxes]=React.useState(()=>saved?!!saved.axes:false);
  const[calcExpr,setCalcExpr]=React.useState(()=>saved&&saved.calcExpr?saved.calcExpr:"");
  const[calcHist,setCalcHist]=React.useState(()=>saved&&saved.calcHist?saved.calcHist:[]);
  const[deg,setDeg]=React.useState(()=>saved?(saved.deg!==false):true);
  const[vars,setVars]=React.useState(()=>(saved&&saved.vars)?saved.vars:{});
  const[exact,setExact]=React.useState(()=>saved?!!saved.exact:false);
  const[storeMode,setStoreMode]=React.useState(false);
  const[calcErr,setCalcErr]=React.useState("");
  const[funcs,setFuncs]=React.useState(()=>(saved&&saved.funcs)?saved.funcs:[]);
  const[showGraph,setShowGraph]=React.useState(()=>saved?!!saved.showGraph:false);
  const funcsRef=React.useRef([]);
  const[keyPts,setKeyPts]=React.useState(()=>saved?(saved.keyPts!==false):true);
  const keyPtsRef=React.useRef(true), readRef=React.useRef(null), intersRef=React.useRef([]);
  const[solveInput,setSolveInput]=React.useState(()=>saved&&saved.solveInput?saved.solveInput:"");
  const[solveRes,setSolveRes]=React.useState(null);
  const[figOn,setFigOn]=React.useState(false);
  const figRef=React.useRef(null);
  const figHiddenRef=React.useRef(null);
  const[peek,setPeek]=React.useState(false);
  const[taskOpen,setTaskOpen]=React.useState(()=>!!qText);
  const[showOfficial,setShowOfficial]=React.useState(false);
  const autoEq=React.useMemo(()=>extractSolverEq(qText),[]);
  React.useEffect(()=>{ if(autoEq && !((saved&&saved.solveInput)||"").trim()){ setSolveInput(autoEq); } },[]);
  const[intro,setIntro]=React.useState(()=>{try{return !localStorage.getItem(__rk("mat_ws_intro_v1"));}catch(e){return false;}});
  function dismissIntro(){ try{localStorage.setItem(__rk("mat_ws_intro_v1"),"1");}catch(e){} setIntro(false); }
  const colorRef=React.useRef(color), widthRef=React.useRef(width), toolRef=React.useRef(tool), axesRef=React.useRef(axes), gridRef=React.useRef(grid);
  React.useEffect(()=>{colorRef.current=color;},[color]);
  React.useEffect(()=>{widthRef.current=width;},[width]);
  React.useEffect(()=>{toolRef.current=tool;},[tool]);
  function persistAll(){ if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; var o=store[wsKey]; o.calcExpr=calcExpr;o.calcHist=calcHist;o.deg=deg;o.grid=grid;o.axes=axes;o.tool=tool;o.width=width;o.color=color;o.mode=mode;o.strokes=strokes.current;o.funcs=funcs.map(function(f){return{expr:f.expr,color:f.color,on:f.on};});o.showGraph=showGraph;o.keyPts=keyPts;o.solveInput=solveInput;o.vars=vars;o.exact=exact;o.figOn=figOn;o.viewS=view.current.s;o.viewOx=view.current.ox;o.viewOy=view.current.oy; } }
  React.useEffect(()=>{ persistAll(); },[calcExpr,calcHist,deg,grid,axes,tool,width,color,mode,funcs,showGraph,keyPts,solveInput,vars,exact,figOn]);
  React.useEffect(()=>{ if(figure&&saved&&saved.figOn){ var _t=setTimeout(importFigure,80); return function(){clearTimeout(_t);}; } },[]);
  function persistStrokes(){ if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; store[wsKey].strokes=strokes.current; } }
  function commitView(){ setZPct(Math.round(view.current.s*100)); if(store&&wsKey){ store[wsKey]=store[wsKey]||{}; var o=store[wsKey]; o.viewS=view.current.s;o.viewOx=view.current.ox;o.viewOy=view.current.oy; } }
  function s2w(sx,sy){var v=view.current;return {x:(sx-v.ox)/v.s, y:(sy-v.oy)/v.s};}
  function setXform(ctx,dpr){var v=view.current;ctx.setTransform(dpr*v.s,0,0,dpr*v.s,dpr*v.ox,dpr*v.oy);}
  function drawAxes(ctx,tl,br,sc){
    ctx.strokeStyle="rgba(40,60,90,.7)"; ctx.fillStyle="rgba(40,60,90,.7)"; ctx.lineWidth=1.6/sc; ctx.lineCap="butt";
    ctx.beginPath(); ctx.moveTo(tl.x,0); ctx.lineTo(br.x,0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,tl.y); ctx.lineTo(0,br.y); ctx.stroke();
    ctx.lineWidth=1/sc;
    var x0=Math.ceil(tl.x/24)*24;
    for(var x=x0;x<br.x;x+=24){ if(Math.abs(x)>1){ ctx.beginPath(); ctx.moveTo(x,-3/sc); ctx.lineTo(x,3/sc); ctx.stroke(); } }
    var y0=Math.ceil(tl.y/24)*24;
    for(var y=y0;y<br.y;y+=24){ if(Math.abs(y)>1){ ctx.beginPath(); ctx.moveTo(-3/sc,y); ctx.lineTo(3/sc,y); ctx.stroke(); } }
    ctx.font="italic 600 "+(12/sc)+"px Georgia,serif"; ctx.fillText("O",6/sc,15/sc);
  }
  function importFigure(){
    try{
      var host=figHiddenRef.current; if(!host) return;
      var svg=host.querySelector("svg"); if(!svg) return;
      var vb=svg.viewBox&&svg.viewBox.baseVal;
      var natW=(vb&&vb.width)||svg.clientWidth||240;
      var natH=(vb&&vb.height)||svg.clientHeight||(natW*0.8);
      var clone=svg.cloneNode(true);
      clone.setAttribute("width",natW); clone.setAttribute("height",natH);
      if(!clone.getAttribute("xmlns")) clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
      var str=new XMLSerializer().serializeToString(clone);
      var cs=getComputedStyle(document.documentElement);
      ["text","bg","muted","s1","s2","s3","bdr","bdr2","blue-d","blue-b","blue","gold-d","gold-b","gold","green-d","green-b","green","red-d","red","teal"].forEach(function(k){
        var val=cs.getPropertyValue("--"+k).trim(); if(val){ str=str.split("var(--"+k+")").join(val); }
      });
      var card=(cs.getPropertyValue("--s2").trim())||"#1a1f29";
      var img=new Image();
      img.onload=function(){
        var fw=288, fh=fw*(natH/natW); if(!isFinite(fh)||fh<=0) fh=fw*0.8;
        figRef.current={img:img,x:-fw/2,y:-fh/2,w:fw,h:fh,card:card};
        setFigOn(true); setGrid(false); setAxes(false);
        setColor(function(c){return c==="#1a1a1a"?"#e05252":c;});
        redraw();
      };
      img.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(str);
    }catch(e){}
  }
  function removeFigure(){ figRef.current=null; setFigOn(false); redraw(); }
  function redraw(){
    var c=cv.current; if(!c) return;
    var ctx=c.getContext("2d"); var dpr=window.devicePixelRatio||1;
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,c.width,c.height);
    setXform(ctx,dpr);
    var v=view.current; var Wc=c.width/dpr, Hc=c.height/dpr;
    var tl=s2w(0,0), br=s2w(Wc,Hc);
    if(figRef.current&&figRef.current.img){ var _f=figRef.current; try{ ctx.fillStyle=_f.card; var _p=12; ctx.beginPath(); if(ctx.roundRect){ctx.roundRect(_f.x-_p,_f.y-_p,_f.w+2*_p,_f.h+2*_p,10);}else{ctx.rect(_f.x-_p,_f.y-_p,_f.w+2*_p,_f.h+2*_p);} ctx.fill(); ctx.drawImage(_f.img,_f.x,_f.y,_f.w,_f.h); }catch(e){} }
    if(gridRef.current){
      ctx.strokeStyle="rgba(74,144,217,.16)"; ctx.lineWidth=1/v.s;
      var gx0=Math.floor(tl.x/24)*24;
      for(var gx=gx0;gx<br.x;gx+=24){ ctx.beginPath(); ctx.moveTo(gx,tl.y); ctx.lineTo(gx,br.y); ctx.stroke(); }
      var gy0=Math.floor(tl.y/24)*24;
      for(var gy=gy0;gy<br.y;gy+=24){ ctx.beginPath(); ctx.moveTo(tl.x,gy); ctx.lineTo(br.x,gy); ctx.stroke(); }
    }
    if(axesRef.current) drawAxes(ctx,tl,br,v.s);
    if(funcsRef.current&&funcsRef.current.length){
      var _Wpx=c.width/dpr; var _xs=(br.x-tl.x)/Math.max(60,_Wpx); var _yl=(br.y-tl.y);
      funcsRef.current.forEach(function(fn){
        if(!fn.on||!fn.compiled) return;
        ctx.strokeStyle=fn.color; ctx.lineWidth=2.2/v.s; ctx.lineCap="round"; ctx.lineJoin="round";
        ctx.beginPath(); var _prev=null,_drew=false;
        for(var _wx=tl.x; _wx<=br.x; _wx+=_xs){
          var _ux=_wx/24; var _my; try{ _my=fn.compiled(_ux); }catch(e){ _my=NaN; }
          if(typeof _my!=="number"||!isFinite(_my)){ _prev=null; continue; }
          var _py=-_my*24;
          if(_prev===null){ ctx.moveTo(_wx,_py); }
          else if(Math.abs(_py-_prev)>_yl*4){ ctx.moveTo(_wx,_py); }
          else { ctx.lineTo(_wx,_py); _drew=true; }
          _prev=_py;
        }
        if(_drew) ctx.stroke();
      });
    }
    strokes.current.forEach(function(st){
      ctx.globalCompositeOperation=st.erase?"destination-out":"source-over";
      ctx.strokeStyle=st.color; ctx.lineWidth=st.width; ctx.lineCap="round"; ctx.lineJoin="round";
      ctx.beginPath();
      st.pts.forEach(function(p,i){ if(i===0)ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
      if(st.pts.length===1){ctx.lineTo(st.pts[0].x+0.1/v.s,st.pts[0].y+0.1/v.s);}
      ctx.stroke();
    });
    ctx.globalCompositeOperation="source-over";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    var _V=view.current, _Wc=c.width/dpr;
    function _w2sx(wx){return wx*_V.s+_V.ox;} function _w2sy(wy){return wy*_V.s+_V.oy;}
    function _fc(n){var r=Math.round(n*100)/100; if(Math.abs(r)<1e-9)r=0; return (""+r).replace(".",",");}
    if(keyPtsRef.current){
      (funcsRef.current||[]).forEach(function(fn){
        if(!fn.on||!fn.compiled||!fn.keyPts) return;
        fn.keyPts.forEach(function(kp){
          if(kp.x*24<tl.x||kp.x*24>br.x) return;
          var sx=_w2sx(kp.x*24), sy=_w2sy(-kp.y*24);
          ctx.beginPath(); ctx.arc(sx,sy,4,0,6.2832); ctx.fillStyle=fn.color; ctx.fill(); ctx.lineWidth=1.5; ctx.strokeStyle="#fff"; ctx.stroke();
        });
      });
      (intersRef.current||[]).forEach(function(ip){
        if(ip.x*24<tl.x||ip.x*24>br.x) return;
        var sx=_w2sx(ip.x*24), sy=_w2sy(-ip.y*24);
        ctx.save(); ctx.translate(sx,sy); ctx.rotate(0.785398); ctx.fillStyle="#e9b446"; ctx.fillRect(-4,-4,8,8); ctx.lineWidth=1.5; ctx.strokeStyle="#fff"; ctx.strokeRect(-4,-4,8,8); ctx.restore();
      });
    }
    if(readRef.current){
      var R=readRef.current; var rsx=_w2sx(R.x*24), rsy=_w2sy(-R.y*24);
      ctx.setLineDash([4,4]); ctx.strokeStyle="rgba(40,60,90,.55)"; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(rsx,rsy); ctx.lineTo(rsx,_V.oy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rsx,rsy); ctx.lineTo(_V.ox,rsy); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(rsx,rsy,5,0,6.2832); ctx.fillStyle=R.color; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle="#fff"; ctx.stroke();
      var kn=R.kind?(({zero:"nulto\u010dka",min:"min",max:"max",y:"y-os"})[R.kind]+" "):"";
      var lbl=kn+"("+_fc(R.x)+"; "+_fc(R.y)+")";
      ctx.font="700 12.5px 'Instrument Sans',sans-serif"; var tw=ctx.measureText(lbl).width;
      var lx=rsx+12, ly=rsy-14; if(lx+tw+12>_Wc) lx=rsx-tw-18; if(ly<20) ly=rsy+26;
      ctx.fillStyle="rgba(9,13,26,.94)"; if(ctx.roundRect){ctx.beginPath();ctx.roundRect(lx-7,ly-15,tw+14,22,6);ctx.fill();}else ctx.fillRect(lx-7,ly-15,tw+14,22);
      ctx.fillStyle="#fff"; ctx.fillText(lbl,lx,ly+1);
    }
  }
  function strokeSeg(st,a,b){var ctx=cv.current.getContext("2d");ctx.globalCompositeOperation=st.erase?"destination-out":"source-over";ctx.strokeStyle=st.color;ctx.lineWidth=st.width;ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.globalCompositeOperation="source-over";}
  React.useEffect(()=>{gridRef.current=grid;redraw();},[grid]);
  React.useEffect(()=>{axesRef.current=axes;redraw();},[axes]);
  React.useEffect(()=>{
    const c=cv.current, w=wrap.current; if(!c||!w||mode!=="skica") return;
    function fit(){
      const r=w.getBoundingClientRect(); const dpr=window.devicePixelRatio||1;
      c.width=Math.round(r.width*dpr); c.height=Math.round(r.height*dpr);
      c.style.width=r.width+"px"; c.style.height=r.height+"px";
      if(view.current.ox==null){ view.current.ox=r.width/2; view.current.oy=r.height/2; }
      redraw();
    }
    fit(); window.addEventListener("resize",fit);
    return()=>window.removeEventListener("resize",fit);
  },[mode]);
  React.useEffect(()=>{
    const c=cv.current; if(!c) return;
    function onWheel(ev){ ev.preventDefault(); var r=c.getBoundingClientRect(); var px=ev.clientX-r.left, py=ev.clientY-r.top; var v=view.current; var factor=ev.deltaY<0?1.12:1/1.12; var ns=Math.max(0.3,Math.min(6,v.s*factor)); var wx=(px-v.ox)/v.s, wy=(py-v.oy)/v.s; v.s=ns; v.ox=px-wx*ns; v.oy=py-wy*ns; redraw(); commitView(); }
    c.addEventListener("wheel",onWheel,{passive:false});
    return()=>c.removeEventListener("wheel",onWheel);
  },[mode]);
  function ptScreen(ev){var r=cv.current.getBoundingClientRect();var t=ev.touches&&ev.touches[0]?ev.touches[0]:ev;return{x:t.clientX-r.left,y:t.clientY-r.top};}
  function start(ev){
    ev.preventDefault();
    var ts=ev.touches?Array.prototype.slice.call(ev.touches):[];
    if(ts.length>=2){ var r=cv.current.getBoundingClientRect(); var a={x:ts[0].clientX-r.left,y:ts[0].clientY-r.top}, b={x:ts[1].clientX-r.left,y:ts[1].clientY-r.top}; gesture.current={mode:"pinch",d0:Math.max(1,Math.hypot(b.x-a.x,b.y-a.y)),mid:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},s0:view.current.s,ox0:view.current.ox,oy0:view.current.oy}; draw.current.on=false; cur.current=null; return; }
    if(toolRef.current==="read"){ doReadout(ev); gesture.current={mode:"read"}; return; }
    if(toolRef.current==="pan"){ var pp=ptScreen(ev); gesture.current={mode:"pan",x:pp.x,y:pp.y,ox0:view.current.ox,oy0:view.current.oy}; return; }
    var p=ptScreen(ev); var w=s2w(p.x,p.y); var sw=widthRef.current/view.current.s;
    if(toolRef.current==="line"){cur.current={color:colorRef.current,width:sw,erase:false,line:true,pts:[w,w]};}
    else{cur.current={color:colorRef.current,width:(toolRef.current==="erase"?sw*6:sw),erase:toolRef.current==="erase",pts:[w]};}
    draw.current.on=true;
  }
  function move(ev){
    var g=gesture.current;
    if(g){
      ev.preventDefault();
      if(g.mode==="pinch"){
        var ts=ev.touches?Array.prototype.slice.call(ev.touches):[]; if(ts.length<2) return;
        var r=cv.current.getBoundingClientRect(); var a={x:ts[0].clientX-r.left,y:ts[0].clientY-r.top}, b={x:ts[1].clientX-r.left,y:ts[1].clientY-r.top};
        var d=Math.max(1,Math.hypot(b.x-a.x,b.y-a.y)); var mid={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
        var ns=Math.max(0.3,Math.min(6,g.s0*(d/g.d0)));
        var wmx=(g.mid.x-g.ox0)/g.s0, wmy=(g.mid.y-g.oy0)/g.s0;
        view.current.s=ns; view.current.ox=mid.x-wmx*ns; view.current.oy=mid.y-wmy*ns;
        redraw(); commitView(); return;
      }
      if(g.mode==="read"){ ev.preventDefault(); doReadout(ev); return; }
      if(g.mode==="pan"){ var pp=ptScreen(ev); view.current.ox=g.ox0+(pp.x-g.x); view.current.oy=g.oy0+(pp.y-g.y); redraw(); commitView(); return; }
    }
    if(!draw.current.on)return; ev.preventDefault();
    var p=ptScreen(ev); var w=s2w(p.x,p.y); var st=cur.current;
    if(st.line){st.pts[1]=w; redraw(); strokeSeg(st,st.pts[0],w);}
    else{st.pts.push(w); var n=st.pts.length; strokeSeg(st,st.pts[n-2],w);}
  }
  function end(){ if(gesture.current){gesture.current=null;return;} if(draw.current.on&&cur.current&&cur.current.pts.length){strokes.current.push(cur.current);redoStk.current=[];persistStrokes();} draw.current.on=false; cur.current=null; }
  function undo(){if(strokes.current.length){redoStk.current.push(strokes.current.pop());redraw();persistStrokes();}}
  function redo(){if(redoStk.current.length){strokes.current.push(redoStk.current.pop());redraw();persistStrokes();}}
  function clearAll(){strokes.current=[];redoStk.current=[];readRef.current=null;redraw();persistStrokes();}
  const FCOLORS=["#4a90d9","#e05252","#50c878","#e9b446"];
  React.useEffect(()=>{ funcsRef.current=funcs.map(function(f){var cf=null;if(f.expr){try{cf=calcCompile(f.expr);}catch(e){cf=null;}}return{expr:f.expr,color:f.color,on:f.on,compiled:cf,keyPts:cf?computeKeyPts(cf,-60,60):[]};}); intersRef.current=computeIntersections(funcsRef.current,-60,60); redraw(); },[funcs]);
  React.useEffect(()=>{keyPtsRef.current=keyPts;redraw();},[keyPts]);
  function addFn(){ setAxes(true); setGrid(true); setFuncs(function(fs){ return fs.length>=4?fs:fs.concat([{expr:"",color:FCOLORS[fs.length%4],on:true}]); }); }
  function removeFn(i){ setFuncs(function(fs){ return fs.filter(function(_x,j){return j!==i;}); }); }
  function setFnExpr(i,val){ var vv=val.replace(/^\s*(y|f\(x\))\s*=\s*/i,""); setFuncs(function(fs){ return fs.map(function(f,j){ return j===i?{expr:vv,color:f.color,on:f.on}:f; }); }); }
  function toggleFn(i){ setFuncs(function(fs){ return fs.map(function(f,j){ return j===i?{expr:f.expr,color:f.color,on:!f.on}:f; }); }); }
  function doReadout(ev){
    var p=ptScreen(ev); var V=view.current; var mx=((p.x-V.ox)/V.s)/24;
    var best=null,bestD=1e9;
    (funcsRef.current||[]).forEach(function(fn,fi){ if(!fn.on||!fn.compiled)return; var my; try{my=fn.compiled(mx);}catch(e){return;} if(!isFinite(my))return; var sy=(-my*24)*V.s+V.oy; var d=Math.abs(sy-p.y); if(d<bestD){bestD=d;best={fi:fi,mx:mx,my:my,color:fn.color};} });
    if(!best) return;
    var snap=null,snapD=18;
    (((funcsRef.current[best.fi]||{}).keyPts)||[]).forEach(function(kp){ var sx=(kp.x*24)*V.s+V.ox; var sy=(-kp.y*24)*V.s+V.oy; var dd=Math.hypot(sx-p.x,sy-p.y); if(dd<snapD){snapD=dd;snap=kp;} });
    if(snap) readRef.current={x:snap.x,y:snap.y,color:best.color,kind:snap.kind};
    else readRef.current={x:best.mx,y:best.my,color:best.color,kind:null};
    redraw();
  }
  function doSolve(){ var r; try{ r=solveEquation(solveInput); }catch(e){ r={error:"Ne mogu riješiti"}; } setSolveRes(r); }
  function zoomBy(factor){ var c=cv.current; if(!c)return; var dpr=window.devicePixelRatio||1; var Wc=c.width/dpr,Hc=c.height/dpr; var cxp=Wc/2,cyp=Hc/2; var v=view.current; var wx=(cxp-v.ox)/v.s, wy=(cyp-v.oy)/v.s; var ns=Math.max(0.3,Math.min(6,v.s*factor)); v.s=ns; v.ox=cxp-wx*ns; v.oy=cyp-wy*ns; redraw(); commitView(); }
  function zoomReset(){ var c=cv.current; if(!c)return; var dpr=window.devicePixelRatio||1; var Wc=c.width/dpr,Hc=c.height/dpr; var v=view.current; v.s=1; v.ox=Wc/2; v.oy=Hc/2; redraw(); commitView(); }
  function cins(t){setCalcErr("");setCalcExpr(function(x){return x+t;});}
  function cbksp(){setCalcErr("");setCalcExpr(function(x){if(!x)return x;var tk=["sqrt(","sin(","cos(","tan(","asin(","acos(","atan(","log(","ln(","abs("];for(var i=0;i<tk.length;i++){if(x.slice(-tk[i].length)===tk[i])return x.slice(0,-tk[i].length);}return x.slice(0,-1);});}
  function cans(){setCalcErr("");setCalcExpr(function(x){return x+(calcHist.length?calcHist[calcHist.length-1].r.replace(/·10\^/,"e").replace(/,/,"."):"");});}
  function cequals(){
    var m=calcExpr.match(/^\s*([A-D])\s*=\s*(.+)$/);
    if(m){ try{ var av=calcEval(m[2],deg,vars); setVars(function(vv){var nv=Object.assign({},vv);nv[m[1]]=av;return nv;}); setCalcHist(function(h){return h.concat([{e:m[1]+" =",r:(exact?exactFmt(av):calcFmt(av))}]).slice(-40);}); setCalcExpr(""); setCalcErr(""); }catch(err){ setCalcErr(typeof err==="string"?err:"Neispravan izraz"); } return; }
    try{ var v=calcEval(calcExpr,deg,vars); var r=exact?exactFmt(v):calcFmt(v); setCalcHist(function(h){return h.concat([{e:calcExpr,r:r}]).slice(-40);}); setCalcExpr(r); setCalcErr(""); }catch(err){ setCalcErr(typeof err==="string"?err:"Neispravan izraz"); }
  }
  function storeVar(L){
    var src=calcExpr.trim()?calcExpr:(calcHist.length?(""+calcHist[calcHist.length-1].r).replace(/\u00b710\^/,"e").replace(/,/,"."):"");
    if(!src){ setStoreMode(false); return; }
    try{ var val=calcEval(src,deg,vars); setVars(function(vv){var nv=Object.assign({},vv);nv[L]=val;return nv;}); setCalcHist(function(h){return h.concat([{e:L+" \u2190",r:(exact?exactFmt(val):calcFmt(val))}]).slice(-40);}); setCalcExpr(""); setCalcErr(""); }catch(e){ setCalcErr("Ne mogu spremiti"); }
    setStoreMode(false);
  }
  const COLORS=["#1a1a1a","#4a90d9","#e05252","#50c878"];
  const tbtn={padding:"6px 9px",borderRadius:8,borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(255,255,255,.3)",background:"transparent",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer",whiteSpace:"nowrap"};
  const actBtn=function(on){return Object.assign({},tbtn,on?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{});};
  const zbtn={width:30,height:30,borderRadius:99,border:"none",background:"transparent",color:"#fff",fontWeight:800,fontSize:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"};
  var preview="";
  if(mode==="calc"&&calcExpr.trim()){ var _mm=calcExpr.match(/^\s*([A-D])\s*=\s*(.+)$/); var _ex=_mm?_mm[2]:calcExpr; try{var pv=calcEval(_ex,deg,vars);if(isFinite(pv))preview=(_mm?(_mm[1]+" = "):"")+(exact?exactFmt(pv):calcFmt(pv));}catch(e){} }
  const BTNS=[
    {l:"C",a:()=>{setCalcExpr("");setCalcErr("");},k:"clr"},{l:"(",a:()=>cins("("),k:"par"},{l:")",a:()=>cins(")"),k:"par"},{l:"√",a:()=>cins("√("),k:"fn"},{l:"⌫",a:cbksp,k:"par"},
    {l:"sin",a:()=>cins("sin("),k:"fn"},{l:"cos",a:()=>cins("cos("),k:"fn"},{l:"tan",a:()=>cins("tan("),k:"fn"},{l:"x²",a:()=>cins("^2"),k:"fn"},{l:"^",a:()=>cins("^"),k:"op"},
    {l:"7",a:()=>cins("7"),k:"num"},{l:"8",a:()=>cins("8"),k:"num"},{l:"9",a:()=>cins("9"),k:"num"},{l:"π",a:()=>cins("π"),k:"fn"},{l:"÷",a:()=>cins("÷"),k:"op"},
    {l:"4",a:()=>cins("4"),k:"num"},{l:"5",a:()=>cins("5"),k:"num"},{l:"6",a:()=>cins("6"),k:"num"},{l:"e",a:()=>cins("e"),k:"fn"},{l:"×",a:()=>cins("×"),k:"op"},
    {l:"1",a:()=>cins("1"),k:"num"},{l:"2",a:()=>cins("2"),k:"num"},{l:"3",a:()=>cins("3"),k:"num"},{l:"log",a:()=>cins("log("),k:"fn"},{l:"−",a:()=>cins("−"),k:"op"},
    {l:"0",a:()=>cins("0"),k:"num"},{l:",",a:()=>cins(","),k:"num"},{l:"Ans",a:cans,k:"fn"},{l:"ln",a:()=>cins("ln("),k:"fn"},{l:"+",a:()=>cins("+"),k:"op"}
  ];
  function cbtn(b,i){
    var bg=b.k==="num"?"#fffdf6":b.k==="op"?"rgba(74,144,217,.2)":b.k==="clr"?"rgba(224,82,82,.2)":b.k==="par"?"rgba(255,255,255,.12)":"rgba(255,255,255,.07)";
    var col=b.k==="num"?"#161616":b.k==="clr"?"#ffb4b4":"#fff";
    return e("button",{key:i,onClick:b.a,style:{padding:"13px 0",borderRadius:10,border:"1px solid rgba(255,255,255,.12)",background:bg,color:col,fontWeight:700,fontSize:b.k==="fn"?13.5:16,cursor:"pointer",fontFamily:"var(--fb)"}},b.l);
  }
  return e("div",{className:"scratch-overlay",style:{zIndex:300,background:"rgba(9,13,26,.96)",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",display:"flex",flexDirection:"column",padding:10}},
    intro&&e("div",{style:{position:"absolute",inset:0,zIndex:50,background:"rgba(6,10,20,.93)",WebkitBackdropFilter:"blur(4px)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,overflowY:"auto"}},
      e("div",{style:{maxWidth:440,width:"100%",background:"linear-gradient(160deg,#101829,#0b101c)",border:"1px solid var(--bdr2)",borderRadius:16,padding:"22px 22px 18px",boxShadow:"0 24px 60px rgba(0,0,0,.55)"}},
        e("div",{style:{fontFamily:"var(--fh)",fontSize:23,marginBottom:4,color:"#fff"}},"Radni prostor"),
        e("div",{style:{fontSize:13,color:"rgba(255,255,255,.6)",marginBottom:17,lineHeight:1.5}},"Tvoj digitalni papir za ra\u010dun, uz svako pitanje. Evo \u0161to sve mo\u017ee:"),
        [["\u270f\ufe0f","Skica","Crtaj i skiciraj po beskona\u010dnom platnu \u2014 kvadrati\u0107i, ravnalo, gumica, zoom."],
         ["📈","Grafer","U Skici upi\u0161i f(x) \u2014 nacrta graf s nulto\u010dkama, tjemenima i sjeci\u0161tima."],
         ["📋","Figura zadatka","Uvuci sliku iz zadatka i crtaj ili mjeri direktno po njoj."],
         ["🧮","Ra\u010dunalo","Znanstveni kalkulator. Spremi vrijednosti (STO \u2192 A\u2013D), egzaktni mod (razlomci, \u221a)."],
         
         ["👁\ufe0f","Zadatak","Pogledaj tekst i sliku zadatka bez zatvaranja prostora."]
        ].filter(function(r){return !(examMode&&r[1]==="Grafer");}).map(function(r,i){return e("div",{key:i,style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}},
          e("span",{style:{fontSize:19,flexShrink:0,width:26,textAlign:"center",lineHeight:1.3}},r[0]),
          e("div",null,
            e("div",{style:{fontSize:14,fontWeight:800,color:"#fff",marginBottom:1}},r[1]),
            e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.62)",lineHeight:1.45}},r[2])));}),
        e("div",{style:{fontSize:12,color:"rgba(255,255,255,.45)",margin:"4px 0 16px",lineHeight:1.5}},"💾 Sve se pamti uz pitanje \u2014 kad se vrati\u0161, tu je."),
        e("button",{onClick:dismissIntro,style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"var(--fb)"}},"Kreni \u270f\ufe0f")
      )
    ),
    examMode&&e("div",{style:{display:"flex",alignItems:"center",gap:9,background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"8px 12px",marginBottom:10}},e("span",{style:{fontSize:15,flexShrink:0}},"📄"),e("div",{style:{fontSize:11.5,color:"rgba(255,255,255,.6)",lineHeight:1.4}},e("strong",{style:{color:"rgba(255,255,255,.85)"}},"Uvjeti mature:")," olovka, papir i osnovni kalkulator \u2014 bez AI-a i rje\u0161ava\u010da.")),
     e("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}},
      e("div",{style:{display:"flex",gap:3,marginRight:"auto",background:"rgba(0,0,0,.28)",borderRadius:99,padding:3,overflowX:"auto",maxWidth:"100%"}},
        (examMode?[["skica","✏️ Skica"],["calc","🧮 Računalo"]]:[["skica","✏️ Skica"],["calc","🧮 Računalo"],["asistent","📐 Asistent"]]).map(t=>e("button",{key:t[0],onClick:()=>setMode(t[0]),style:{padding:"6px 11px",borderRadius:99,border:"none",background:mode===t[0]?"var(--blue)":"transparent",color:"#fff",fontWeight:700,fontSize:12.5,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap",flexShrink:0}},t[1]))),
      (qText||figure)&&e("button",{onClick:()=>setPeek(p=>!p),title:"Pogledaj zadatak",style:{padding:"7px 11px",borderRadius:8,border:"1px solid var(--bdr2)",background:peek?"var(--blue)":"rgba(255,255,255,.08)",color:"#fff",fontWeight:700,fontSize:12.5,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap"}},"👁 zadatak"),
      e("button",{onClick:onClose,style:{padding:"7px 13px",borderRadius:8,border:"none",background:"var(--blue)",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer"}},"✓ Gotovo")
    ),
    qText&&e("div",{style:{marginBottom:8,borderRadius:10,border:"1px solid var(--bdr2)",background:"rgba(74,144,217,.08)",overflow:"hidden",flexShrink:0}},e("div",{onClick:()=>setTaskOpen(function(v){return !v;}),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 11px",cursor:"pointer",userSelect:"none"}},e("span",{style:{fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#9ec5f0"}},"📋 Zadatak"),e("span",{style:{marginLeft:"auto",fontSize:12,color:"rgba(255,255,255,.6)"}},taskOpen?"\u25be sakrij":"\u25b8 prika\u017ei")),taskOpen&&e("div",{style:{padding:"0 12px 11px",maxHeight:"26vh",overflowY:"auto"}},e("div",{style:{fontSize:14,lineHeight:1.55,color:"#fff",marginBottom:(qOpts&&qOpts.length)?8:0}},renderQText(qText)),(qOpts&&qOpts.length>0)&&e("div",{style:{display:"flex",flexDirection:"column",gap:4}},qOpts.map(function(opt,i){return e("div",{key:i,style:{fontSize:13,color:"rgba(255,255,255,.9)",display:"flex",gap:7,lineHeight:1.5}},e("span",{style:{fontWeight:800,color:"#9ec5f0",flexShrink:0}},"("+(["A","B","C","D","E","F"][i]||"?")+")"),e("span",null,renderOptText(opt)));})))),
    peek&&e("div",{onClick:()=>setPeek(false),style:{position:"absolute",top:50,left:0,right:0,bottom:0,zIndex:7,background:"rgba(0,0,0,.35)"}},
      e("div",{onClick:ev=>ev.stopPropagation(),style:{margin:"6px 8px",maxHeight:"calc(100% - 14px)",overflowY:"auto",background:"rgba(12,16,28,.99)",border:"1px solid var(--bdr2)",borderRadius:12,padding:"12px 14px",boxShadow:"0 18px 44px rgba(0,0,0,.55)"}},
        e("div",{style:{display:"flex",alignItems:"center",marginBottom:8}},
          e("span",{style:{fontSize:11,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#9ec5f0"}},"Zadatak"),
          e("button",{onClick:()=>setPeek(false),style:{marginLeft:"auto",padding:"4px 10px",borderRadius:7,border:"1px solid var(--bdr2)",background:"transparent",color:"rgba(255,255,255,.7)",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)"}},"\u00d7 zatvori")),
        qText&&e("div",{style:{fontSize:14.5,lineHeight:1.6,color:"#fff",marginBottom:(figure||(qOpts&&qOpts.length))?9:0}}, renderQText(qText)),
        figure&&e("div",{style:{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:10,padding:10,display:"inline-block",maxWidth:"100%",marginBottom:(qOpts&&qOpts.length)?9:0}}, figure),
        (qOpts&&qOpts.length>0)&&e("div",{style:{display:"flex",flexDirection:"column",gap:5}}, qOpts.map(function(opt,i){return e("div",{key:i,style:{fontSize:13.5,color:"rgba(255,255,255,.92)",display:"flex",gap:7,lineHeight:1.5}}, e("span",{style:{fontWeight:800,color:"#9ec5f0",flexShrink:0}},"("+(["A","B","C","D","E","F"][i]||"?")+")"), e("span",null,renderOptText(opt)));}))
      )
    ),
    figure&&e("div",{ref:figHiddenRef,"aria-hidden":true,style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none",left:-99999,top:-99999}}, figure),
    mode==="skica"&&e(React.Fragment,null,
      e("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"}},
        ...COLORS.map(col=>e("button",{key:col,onClick:()=>{setColor(col);setTool("pen");},title:"Boja",style:{width:24,height:24,borderRadius:99,background:col,border:(color===col&&tool!=="erase"&&tool!=="pan")?"3px solid #fff":"2px solid rgba(255,255,255,.4)",cursor:"pointer",padding:0}})),
        e("button",{onClick:()=>setTool("pen"),title:"Olovka",style:actBtn(tool==="pen")},"✎"),
        e("button",{onClick:()=>setTool("line"),title:"Ravnalo — ravna crta",style:actBtn(tool==="line")},"╱ crta"),
        e("button",{onClick:()=>setTool("erase"),title:"Gumica",style:actBtn(tool==="erase")},"⌫ guma"),
        e("button",{onClick:()=>setTool("pan"),title:"Pomakni (ili 2 prsta)",style:actBtn(tool==="pan")},"✋ pomak"),
        e("button",{onClick:()=>setWidth(w=>w<=2.4?4.2:2.4),title:"Debljina olovke",style:tbtn},width<=2.4?"│":"┃"),
        e("button",{onClick:()=>setGrid(g=>!g),title:"Kvadratići",style:actBtn(grid)},grid?"▦":"▢"),
        e("button",{onClick:()=>setAxes(a=>!a),title:"Koordinatne osi",style:actBtn(axes)},"✛ osi"),
        !examMode&&e("button",{onClick:()=>{ setShowGraph(function(g){ var nv=!g; if(nv){ setAxes(true); setGrid(true); setFuncs(function(fs){return fs.length?fs:[{expr:"",color:FCOLORS[0],on:true}];}); } return nv; }); },title:"Crtaj funkciju f(x)",style:actBtn(showGraph)},"📈 graf"),
        figure&&e("button",{onClick:()=>figOn?removeFigure():importFigure(),title:figOn?"Ukloni figuru":"Uvuci figuru zadatka",style:actBtn(figOn)},figOn?"📋 ukloni":"📋 figura"),
        e("button",{onClick:undo,title:"Poništi potez",style:tbtn},"↶"),
        e("button",{onClick:redo,title:"Ponovi potez",style:tbtn},"↷"),
        e("button",{onClick:clearAll,title:"Očisti sve",style:tbtn},"očisti")
      ),
      (!examMode&&showGraph)&&e("div",{style:{background:"rgba(255,255,255,.06)",borderRadius:10,padding:"9px 10px",marginBottom:8,display:"flex",flexDirection:"column",gap:7}},
        e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
          e("button",{onClick:()=>setKeyPts(v=>!v),title:"Nultočke, tjemena, sjecišta",style:Object.assign({},tbtn,{fontSize:11.5,padding:"5px 10px"},keyPts?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{})},"• ključne točke"),
          e("button",{onClick:()=>setTool(t=>t==="read"?"pen":"read"),title:"Dodirni krivulju za koordinate",style:Object.assign({},tbtn,{fontSize:11.5,padding:"5px 10px"},tool==="read"?{background:"rgba(255,255,255,.28)",borderColor:"#fff"}:{})},"📍 očitaj")),
        funcs.length===0?e("div",{style:{color:"rgba(255,255,255,.4)",fontSize:12.5,textAlign:"center"}},"Dodaj funkciju da je nacrtaš"):null,
        funcs.map(function(f,i){ var valid=true; if(f.expr){ try{ calcCompile(f.expr); }catch(e){ valid=false; } } return e("div",{key:i,style:{display:"flex",alignItems:"center",gap:8}},
          e("span",{onClick:()=>toggleFn(i),title:f.on?"Sakrij":"Prikaži",style:{width:15,height:15,borderRadius:99,background:f.color,opacity:f.on?1:.3,flexShrink:0,cursor:"pointer",border:"2px solid rgba(255,255,255,.25)"}}),
          e("span",{style:{color:"rgba(255,255,255,.7)",fontSize:14,fontWeight:700,fontFamily:"var(--fb)"}},"y ="),
          e("input",{value:f.expr,onChange:ev=>setFnExpr(i,ev.target.value),placeholder:"x^2 − 3",spellCheck:false,style:{flex:1,border:"1px solid "+(valid?"rgba(255,255,255,.18)":"#e05252"),background:"rgba(0,0,0,.28)",color:"#fff",borderRadius:8,padding:"7px 10px",fontSize:15,fontFamily:"var(--fb)",outline:"none",boxSizing:"border-box",minWidth:0}}),
          e("button",{onClick:()=>removeFn(i),title:"Ukloni",style:{background:"none",border:"none",color:"rgba(255,255,255,.5)",fontSize:16,cursor:"pointer",padding:"0 4px",flexShrink:0}},"✕")
        ); }),
        funcs.length<4&&e("button",{onClick:addFn,style:{alignSelf:"flex-start",background:"none",border:"1px dashed rgba(255,255,255,.3)",color:"#fff",borderRadius:8,padding:"6px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"+ funkcija")
      ),
      e("div",{ref:wrap,style:{flex:1,position:"relative",background:"#fefdf8",borderRadius:12,overflow:"hidden",boxShadow:"0 10px 40px -10px rgba(0,0,0,.5)",touchAction:"none"}},
        e("canvas",{ref:cv,onMouseDown:start,onMouseMove:move,onMouseUp:end,onMouseLeave:end,onTouchStart:start,onTouchMove:move,onTouchEnd:end,style:{display:"block",cursor:tool==="pan"?"grab":tool==="erase"?"cell":"crosshair"}}),
        e("div",{style:{position:"absolute",right:10,bottom:10,display:"flex",alignItems:"center",gap:2,background:"rgba(9,13,26,.85)",borderRadius:99,padding:"3px 5px",border:"1px solid rgba(255,255,255,.2)"}},
          e("button",{onClick:()=>zoomBy(1/1.25),title:"Smanji",style:zbtn},"−"),
          e("button",{onClick:zoomReset,title:"Vrati na 100%",style:{padding:"0 8px",height:30,borderRadius:99,border:"none",background:"transparent",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer",minWidth:46}},zPct+"%"),
          e("button",{onClick:()=>zoomBy(1.25),title:"Povećaj",style:zbtn},"+")
        )
      )
    ),
    mode==="calc"&&e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0}},
      e("div",{style:{flex:1,overflowY:"auto",marginBottom:8,display:"flex",flexDirection:"column",gap:4,justifyContent:"flex-end"}},
        calcHist.length===0
          ?e("div",{style:{color:"rgba(255,255,255,.32)",fontSize:12,textAlign:"center",padding:"14px 0"}},"Tu se slažu tvoji računi — dodirni rezultat za ponovnu upotrebu")
          :calcHist.map((h,i)=>e("button",{key:i,onClick:()=>setCalcExpr(x=>x+h.r.replace(/·10\^/,"e").replace(/,/,".")),style:{display:"flex",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,.05)",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontFamily:"var(--fb)",textAlign:"left"}},
            e("span",{style:{color:"rgba(255,255,255,.5)",fontSize:12.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},h.e),
            e("span",{style:{color:"#fff",fontSize:13,fontWeight:700,flexShrink:0}},"= "+h.r)))
      ),
      e("div",{style:{display:"flex",gap:6,marginBottom:6,alignItems:"center"}},
        e("button",{onClick:()=>setExact(v=>!v),title:exact?"Decimalni prikaz":"Egzaktno (razlomci, korijeni)",style:{padding:"4px 12px",borderRadius:99,border:"1px solid rgba(255,255,255,.22)",background:exact?"var(--gold)":"transparent",color:exact?"#1a1a1a":"#fff",fontWeight:800,fontSize:11,cursor:"pointer",fontFamily:"var(--fb)"}}, exact?"= egzaktno":"≈ decimala"),
        e("div",{style:{marginLeft:"auto",display:"flex",gap:6}}, ["DEG","RAD"].map(mm=>e("button",{key:mm,onClick:()=>setDeg(mm==="DEG"),title:mm==="DEG"?"Stupnjevi":"Radijani",style:{padding:"4px 12px",borderRadius:99,border:"1px solid rgba(255,255,255,.22)",background:(deg===(mm==="DEG"))?"var(--blue)":"transparent",color:"#fff",fontWeight:700,fontSize:11,cursor:"pointer"}},mm)))),
      e("div",{style:{background:"rgba(0,0,0,.28)",borderRadius:12,padding:"11px 14px",marginBottom:10}},
        e("input",{value:calcExpr,onChange:ev=>{setCalcExpr(ev.target.value);setCalcErr("");},onKeyDown:ev=>{if(ev.key==="Enter"){ev.preventDefault();cequals();}},placeholder:"npr. 2·(3+5)^2 − √16",inputMode:"text",spellCheck:false,style:{width:"100%",border:"none",background:"transparent",color:"#fff",fontSize:22,fontWeight:700,textAlign:"right",outline:"none",fontFamily:"var(--fb)",boxSizing:"border-box"}}),
        e("div",{style:{textAlign:"right",color:calcErr?"#ffb4b4":"rgba(255,255,255,.55)",fontSize:15,fontWeight:600,minHeight:20,marginTop:3}}, calcErr?("⚠ "+calcErr):(preview!==""?("= "+preview):""))
      ),
      e("div",{style:{display:"flex",gap:5,marginBottom:8,alignItems:"center"}},
        e("button",{onClick:()=>setStoreMode(s=>!s),title:storeMode?"Odustani":"Spremi prikaz u varijablu (pa odaberi A\u2013D)",style:{padding:"7px 9px",borderRadius:8,border:"1px solid "+(storeMode?"var(--gold)":"rgba(255,255,255,.16)"),background:storeMode?"var(--gold)":"rgba(255,255,255,.06)",color:storeMode?"#1a1a1a":"#fff",fontSize:12.5,fontWeight:800,cursor:"pointer",fontFamily:"var(--fb)",flexShrink:0,whiteSpace:"nowrap"}}, storeMode?"\u2192 ?":"STO"),
        ["A","B","C","D"].map(function(L){var val=vars[L]; return e("button",{key:L,onClick:()=>{ if(storeMode){storeVar(L);} else {cins(L);} },title:val!=null?(L+" = "+(exact?exactFmt(val):calcFmt(val))):("Umetni "+L),style:{flex:"1 1 0",minWidth:0,padding:"7px 4px",borderRadius:8,border:"1px solid "+(storeMode?"var(--gold)":"rgba(255,255,255,.16)"),background:storeMode?"rgba(233,180,70,.18)":(val!=null?"rgba(80,200,120,.18)":"rgba(255,255,255,.06)"),color:"#fff",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}, val!=null?(L+"="+(exact?exactFmt(val):calcFmt(val))):L);}),
        Object.keys(vars).length>0&&e("button",{onClick:()=>setVars({}),title:"O\u010disti memoriju A\u2013D",style:{padding:"7px 9px",borderRadius:8,border:"1px solid rgba(255,255,255,.16)",background:"transparent",color:"rgba(255,255,255,.6)",fontSize:12,cursor:"pointer",flexShrink:0}},"\u232b")
      ),
      e("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}}, BTNS.map(cbtn)),
      e("button",{onClick:cequals,style:{width:"100%",padding:"15px 0",marginTop:8,borderRadius:12,border:"none",background:"var(--green)",color:"#fff",fontWeight:800,fontSize:19,cursor:"pointer",fontFamily:"var(--fb)"}},"=")
    ),
    (!examMode&&mode==="asistent")&&e(MathAssistant,{qText:qText,qType:qType,seed:seedAsk}),
    mode==="solve"&&e("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0}},e("div",{style:{marginBottom:12,flexShrink:0}},e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"#9ec5f0",marginBottom:8}},"📐 Rije\u0161i ovaj zadatak"),(!(qSteps&&qSteps.length))?e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.45)",padding:"2px 0"}},"Za ovaj zadatak nema upisanog postupka \u2014 koristi solver ispod."):!answered?e("div",{style:{fontSize:12.5,color:"rgba(255,255,255,.6)",background:"rgba(255,255,255,.05)",border:"1px solid var(--bdr2)",borderRadius:10,padding:"10px 13px",lineHeight:1.5}},"🔒 Prvo rije\u0161i i provjeri zadatak \u2014 slu\u017ebeni postupak se otklju\u010da nakon toga."):!showOfficial?e("button",{onClick:()=>setShowOfficial(true),style:{padding:"9px 14px",borderRadius:10,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"var(--fb)"}},"📐 Prika\u017ei postupak korak po korak"):e("div",{style:{background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr2)",borderRadius:12,padding:"12px 14px"}},(qSol&&(qSol.cl||qSol.ans!=null||qSol.ex))&&e("div",{style:{fontSize:13.5,fontWeight:700,color:"var(--green)",marginBottom:9}},"\u2713 To\u010dno: "+(qSol.cl?qSol.cl:(qSol.ans!=null?String(qSol.ans):qSol.ex))),(function(){var num=0;return qSteps.map(function(step,i){if(step==="\u2500\u2500\u2500"||step==="---")return e("div",{key:i,style:{height:1,background:"var(--bdr)",margin:"7px 0"}});var st=(typeof step==="string")?{txt:step,note:null}:step;var isMeta=st.note&&/intuicija|verifikacija|odgovor|diagnostika|postupak/.test(st.note);var fin=isMeta||(typeof st.txt==="string"&&(st.txt.indexOf("\u2192")===0||st.txt.indexOf("\u2234")===0));if(!fin)num++;return e("div",{key:i,style:{display:"flex",gap:9,alignItems:"flex-start",padding:"4px 0"}},e("span",{style:{width:20,height:20,borderRadius:99,background:fin?"rgba(80,200,120,.2)":"rgba(74,144,217,.2)",color:fin?"var(--green)":"#9ec5f0",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--fb)"}},fin?"\u2192":num),e("span",{style:{fontSize:13.5,color:"#fff",lineHeight:1.5}},renderOptText(st.txt),st.note&&typeof st.note==="string"&&e("span",{style:{marginLeft:6,fontSize:10.5,color:"rgba(255,255,255,.45)",fontStyle:"italic"}},st.note)));});})()),e("div",{style:{height:1,background:"var(--bdr)",margin:"14px 0 10px"}}),e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:8}},"🧩 Ili rije\u0161i svoju jednad\u017ebu")),
      e("div",{style:{display:"flex",gap:8,marginBottom:8}},
        e("input",{value:solveInput,onChange:ev=>setSolveInput(ev.target.value),onKeyDown:ev=>{if(ev.key==="Enter"){ev.preventDefault();doSolve();}},placeholder:"npr. x^2 \u2212 4x + 3 = 0",spellCheck:false,style:{flex:1,border:"1px solid rgba(255,255,255,.2)",background:"rgba(0,0,0,.28)",color:"#fff",borderRadius:10,padding:"11px 13px",fontSize:17,fontWeight:700,fontFamily:"var(--fb)",outline:"none",boxSizing:"border-box",minWidth:0}}),
        e("button",{onClick:doSolve,style:{padding:"0 18px",borderRadius:10,border:"none",background:"var(--green)",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"var(--fb)",whiteSpace:"nowrap"}},"Rije\u0161i")
      ),
      e("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}},
        autoEq&&e("button",{onClick:()=>{setSolveInput(autoEq);setSolveRes(solveEquation(autoEq));},title:"Ubaci i rije\u0161i jednad\u017ebu iz zadatka",style:{background:"var(--green-d)",border:"1px solid var(--green)",color:"var(--green)",borderRadius:99,padding:"5px 11px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"📝 Iz zadatka"),
        ["2x+1=5","x^2-4x+3=0","x^2=2x+8","x^2+1=0"].map(function(ex){return e("button",{key:ex,onClick:()=>{setSolveInput(ex);setSolveRes(solveEquation(ex));},style:{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.15)",color:"rgba(255,255,255,.8)",borderRadius:99,padding:"5px 11px",fontSize:12,cursor:"pointer",fontFamily:"var(--fb)"}},ex);})
      ),
      e("div",{style:{flex:1,overflowY:"auto"}},
        !solveRes?e("div",{style:{color:"rgba(255,255,255,.35)",fontSize:13,textAlign:"center",padding:"20px 10px",lineHeight:1.6}},"Upi\u0161i linearnu ili kvadratnu jednad\u017ebu pa Rije\u0161i \u2014 prikazat \u0107u korake i rje\u0161enja."):
        solveRes.error?e("div",{style:{background:"rgba(224,82,82,.14)",border:"1px solid rgba(224,82,82,.4)",borderRadius:10,padding:"12px 14px",color:"#ffb4b4",fontSize:13.5,fontWeight:600}},"\u26a0 "+solveRes.error):
        e("div",null,
          e("div",{style:{display:"flex",flexDirection:"column",gap:9,marginBottom:13}},
            solveRes.steps.map(function(st,i){return e("div",{key:i,style:{display:"flex",gap:10,alignItems:"flex-start"}},
              e("span",{style:{width:22,height:22,borderRadius:99,background:"rgba(74,144,217,.22)",color:"#9ec5f0",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--fb)"}},(i+1)),
              e("span",{style:{fontSize:14.5,color:"#fff",lineHeight:1.55,fontFamily:"var(--fb)",paddingTop:1}},st));})
          ),
          e("div",{style:{background:"var(--green-d)",border:"1px solid var(--green)",borderRadius:12,padding:"14px 16px"}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--green)",marginBottom:5}},"Rje\u0161enje"),
            e("div",{style:{fontSize:19,fontWeight:800,color:"#fff",fontFamily:"var(--fb)"}},solveRes.result))
        )
      )
    )
  );
}
function SelfExplain({val,onChange}){
  const[open,setOpen]=React.useState(!!val);
  return e("div",{style:{padding:"9px 12px",marginTop:10,marginBottom:10,borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)"}},
    e("button",{onClick:()=>setOpen(o=>!o),style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0,color:"var(--muted)"}},
      e("span",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",marginRight:"auto",textAlign:"left"}},"✍️ Objasni svojim riječima"),
      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--green)"}},open?"sakrij ▴":"učvrsti ▾")
    ),
    open&&e("div",{style:{marginTop:9}},
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:7,lineHeight:1.5}},"Kad sam objasniš zašto je točno, pamtiš puno bolje nego kad samo pročitaš rješenje."),
      e("textarea",{defaultValue:val,onBlur:ev=>onChange(ev.target.value),placeholder:"npr. zašto baš ova opcija…",rows:2,style:{width:"100%",resize:"vertical",borderRadius:8,border:"1px solid var(--bdr)",background:"var(--s1)",color:"var(--text)",fontSize:13,padding:"8px 10px",fontFamily:"var(--fb)",lineHeight:1.5,boxSizing:"border-box"}})
    )
  );
}
const GLOSSARY={"determinanta": "Broj pridružen kvadratnoj matrici; za 2×2 matricu [[a,b],[c,d]] iznosi ad − bc.", "matrica": "Pravokutna tablica brojeva poredanih u retke i stupce.", "vektor": "Veličina određena iznosom (duljinom) i smjerom; u ravnini se piše kao uređeni par (x, y).", "skalar": "Obična brojčana veličina bez smjera, za razliku od vektora.", "derivacija": "Mjera trenutne brzine promjene funkcije; geometrijski je nagib tangente na graf.", "integral": "Operacija suprotna deriviranju; određeni integral daje površinu ispod grafa funkcije.", "limes": "Vrijednost kojoj se funkcija ili niz približava kad se argument približava nekoj vrijednosti.", "asimptota": "Pravac kojem se graf funkcije neograničeno približava, ali ga ne dodiruje.", "logaritam": "Eksponent na koji treba dignuti bazu da se dobije zadani broj: log baze a od b = c znači a^c = b.", "diskriminanta": "Izraz b² − 4ac kod kvadratne jednadžbe; predznak određuje broj realnih rješenja.", "faktorijel": "Umnožak svih prirodnih brojeva do n: n! = 1 · 2 · 3 · … · n.", "permutacija": "Svaki mogući poredak svih elemenata skupa; broj permutacija n elemenata je n!.", "kombinacija": "Izbor elemenata iz skupa kod kojeg poredak NIJE važan.", "varijacija": "Izbor elemenata iz skupa kod kojeg poredak JEST važan.", "vjerojatnost": "Mjera izglednosti događaja, broj od 0 do 1 (povoljni ishodi / svi ishodi).", "tangenta": "Pravac koji dira krivulju u jednoj točki i ima isti nagib kao krivulja u toj točki.", "normala": "Pravac okomit na tangentu u dodirnoj točki krivulje.", "domena": "Skup svih dopuštenih vrijednosti nezavisne varijable (ulaza) funkcije.", "kodomena": "Skup u koji funkcija preslikava — skup mogućih izlaznih vrijednosti.", "parabola": "Graf kvadratne funkcije; skup točaka jednako udaljenih od žarišta i ravnalice.", "hiperbola": "Krivulja s dvije grane; skup točaka kojima je razlika udaljenosti do dvaju žarišta stalna.", "elipsa": "Zatvorena krivulja; skup točaka kojima je zbroj udaljenosti do dvaju žarišta stalan.", "kružnica": "Skup svih točaka u ravnini jednako udaljenih od središta; ta udaljenost je polumjer.", "modul": "Apsolutna vrijednost; za kompleksan broj z = a + bi iznosi √(a² + b²).", "argument": "Kut koji radijvektor kompleksnog broja zatvara s pozitivnim dijelom realne osi.", "aritmetički niz": "Niz u kojem je razlika svaka dva susjedna člana stalna (npr. 2, 5, 8, 11 …).", "geometrijski niz": "Niz u kojem je omjer svaka dva susjedna člana stalan (npr. 3, 6, 12, 24 …).", "radijan": "Mjera kuta; puni kut iznosi 2π radijana (360°).", "sinus": "Trigonometrijska funkcija; u pravokutnom trokutu omjer nasuprotne katete i hipotenuze.", "kosinus": "Trigonometrijska funkcija; u pravokutnom trokutu omjer priležeće katete i hipotenuze.", "tangens": "Trigonometrijska funkcija; omjer sinusa i kosinusa.", "polinom": "Izraz oblika aₙxⁿ + … + a₁x + a₀ s nenegativnim cjelobrojnim eksponentima.", "vjerojatnosti": "Mjera izglednosti događaja, broj od 0 do 1."};
function GlossaryChips({text}){
  const low=" "+(text||"").toLowerCase()+" ";
  const found=[];
  for(const term in GLOSSARY){
    const esc=term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    const re=new RegExp("(^|[^a-zA-Zšđčćž])"+esc,"i");
    if(re.test(low)){found.push(term);if(found.length>=4)break;}
  }
  const[open,setOpen]=React.useState(false);
  const[sel,setSel]=React.useState(null);
  if(found.length===0)return null;
  return e("div",{style:{margin:"2px 0 12px"}},
    e("button",{onClick:()=>setOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 12px",borderRadius:99,background:"var(--s2)",border:"1px solid var(--bdr2)",color:"var(--muted)",fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"📖 Pojmovi u zadatku ("+found.length+")",e("span",{style:{opacity:.7}},open?" ▴":" ▾")),
    open&&e("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:9}},
      found.map((t,i)=>e("button",{key:i,onClick:()=>setSel(sel===t?null:t),style:{padding:"5px 9px",borderRadius:8,border:"1px solid "+(sel===t?"var(--blue-b)":"var(--bdr)"),background:sel===t?"var(--blue-d)":"var(--s1)",color:sel===t?"var(--blue)":"var(--text)",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"var(--fb)",textTransform:"capitalize"}},t))
    ),
    open&&sel&&e("div",{style:{marginTop:10,padding:"11px 14px",borderRadius:"var(--r)",background:"var(--blue-d)",border:"1px solid var(--blue-b)",fontSize:13,lineHeight:1.55,color:"var(--text)"}},e("strong",{style:{color:"var(--blue)",textTransform:"capitalize"}},sel),": "+GLOSSARY[sel])
  );
}
const TOPIC_FREQ=(()=>{const cnt={},exCnt={};try{Object.values(EXAMS).forEach(function(ex){const seen={};(ex.qs||[]).forEach(function(q){if(!q||!q.topic)return;cnt[q.topic]=(cnt[q.topic]||0)+1;if(!seen[q.topic]){seen[q.topic]=1;exCnt[q.topic]=(exCnt[q.topic]||0)+1;}});});}catch(_e){}return{cnt:cnt,exCnt:exCnt,totalExams:Object.keys(EXAMS).length};})();
function sliderRow(label,val,min,max,step,set){
  return e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6}},
    e("span",{style:{fontSize:13,fontWeight:700,width:22,color:"var(--blue)"}},label),
    e("input",{type:"range",min:min,max:max,step:step,value:val,onChange:ev=>set(+ev.target.value),style:{flex:1,accentColor:"#4a90d9"}}),
    e("span",{style:{fontSize:12,width:38,textAlign:"right",color:"var(--muted)",fontVariantNumeric:"tabular-nums"}},(+val).toFixed(1)));
}
function QuadViz(){
  const[a,setA]=React.useState(1),[b,setB]=React.useState(0),[c,setC]=React.useState(-2);
  const W=300,H=240,ox=W/2,oy=H/2,sx=W/14,sy=H/18,X=x=>ox+x*sx,Y=y=>oy-y*sy;
  let d="";for(let px=-7;px<=7;px+=0.1){const py=a*px*px+b*px+c;if(py>=-9&&py<=9)d+=(d?"L":"M")+X(px).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  const disc=b*b-4*a*c,vx=a!==0?-b/(2*a):0,vy=a*vx*vx+b*vx+c;
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("path",{d:d,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      a!==0&&vy>=-9&&vy<=9&&e("circle",{cx:X(vx),cy:Y(vy),r:4,fill:"#e05252"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+a.toFixed(1)+"x\u00b2 "+(b>=0?"+ ":"\u2212 ")+Math.abs(b).toFixed(1)+"x "+(c>=0?"+ ":"\u2212 ")+Math.abs(c).toFixed(1)),
    sliderRow("a",a,-3,3,0.1,setA),sliderRow("b",b,-6,6,0.5,setB),sliderRow("c",c,-6,6,0.5,setC),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.5}},"Diskriminanta D = "+disc.toFixed(1)+" \u2192 "+(disc>0.001?"2 realna rje\u0161enja":disc<-0.001?"nema realnih rje\u0161enja":"1 dvostruko rje\u0161enje")+(a!==0?" \u00b7 tjeme ("+vx.toFixed(1)+", "+vy.toFixed(1)+")":"")));
}
function LinViz(){
  const[k,setK]=React.useState(1),[l,setL]=React.useState(0);
  const W=300,H=240,ox=W/2,oy=H/2,sx=W/14,sy=H/14,X=x=>ox+x*sx,Y=y=>oy-y*sy;
  const y1=k*-7+l,y2=k*7+l;
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:X(-7),y1:Y(y1),x2:X(7),y2:Y(y2),stroke:"#4a90d9",strokeWidth:2.5}),
      Math.abs(l)<=9&&e("circle",{cx:X(0),cy:Y(l),r:4,fill:"#e05252"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+k.toFixed(1)+"x "+(l>=0?"+ ":"\u2212 ")+Math.abs(l).toFixed(1)),
    sliderRow("k",k,-4,4,0.25,setK),sliderRow("l",l,-6,6,0.5,setL),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.5}},"k = nagib ("+(k>0.01?"raste":k<-0.01?"pada":"konstanta")+") \u00b7 l = sjeci\u0161te s osi y \u00b7 nulto\u010dka x = "+(Math.abs(k)>0.01?(-l/k).toFixed(2):"\u2014")));
}
function CircleViz(){
  const[deg,setDeg]=React.useState(30);
  const W=300,H=240,cx=W/2,cy=H/2,R=90,rad=deg*Math.PI/180,px=cx+R*Math.cos(rad),py=cy-R*Math.sin(rad);
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:cy,x2:W,y2:cy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("circle",{cx:cx,cy:cy,r:R,fill:"none",stroke:"var(--bdr2)",strokeWidth:1.5}),
      e("line",{x1:cx,y1:cy,x2:px,y2:cy,stroke:"#50c878",strokeWidth:2}),
      e("line",{x1:px,y1:cy,x2:px,y2:py,stroke:"#e05252",strokeWidth:2}),
      e("line",{x1:cx,y1:cy,x2:px,y2:py,stroke:"#4a90d9",strokeWidth:2.5}),
      e("circle",{cx:px,cy:py,r:4,fill:"#4a90d9"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"\u03b8 = "+deg+"\u00b0"),
    sliderRow("\u03b8",deg,0,360,1,setDeg),
    e("div",{style:{fontSize:12.5,marginTop:8,lineHeight:1.7,textAlign:"center"}},
      e("span",{style:{color:"#50c878",fontWeight:700}},"cos \u03b8 = "+Math.cos(rad).toFixed(3))," \u00b7 ",
      e("span",{style:{color:"#e05252",fontWeight:700}},"sin \u03b8 = "+Math.sin(rad).toFixed(3)),e("br"),
      e("span",{style:{color:"var(--muted)"}},"tan \u03b8 = "+(Math.abs(Math.cos(rad))<0.001?"nedefiniran":Math.tan(rad).toFixed(3)))));
}
function tgBtn(on){return {padding:"6px 13px",borderRadius:99,border:"1px solid "+(on?"var(--teal-b)":"var(--bdr2)"),background:on?"var(--teal-d)":"var(--s2)",color:on?"var(--teal)":"var(--muted)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"};}
function vizSvg(children){return e("svg",{viewBox:"0 0 300 240",style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},children);}
function ExpLogViz(){
  var s=React.useState(2),a=s[0],setA=s[1];
  var W=300,H=240,ox=W/2,oy=H/2,sx=W/12,sy=H/12,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy};
  var sa=Math.abs(a-1)<0.06?1.06:a,i;
  var de="";for(i=-6;i<=6;i+=0.1){var py=Math.pow(sa,i);if(py>=-6&&py<=6)de+=(de?"L":"M")+X(i).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  var dl="";for(i=0.05;i<=6;i+=0.05){var qy=Math.log(i)/Math.log(sa);if(qy>=-6&&qy<=6)dl+=(dl?"L":"M")+X(i).toFixed(1)+" "+Y(qy).toFixed(1)+" ";}
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:X(-6),y1:Y(-6),x2:X(6),y2:Y(6),stroke:"var(--bdr2)",strokeWidth:1,strokeDasharray:"3 4"}),
      e("path",{key:4,d:de,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      e("path",{key:5,d:dl,fill:"none",stroke:"#50c878",strokeWidth:2.5}),
      e("circle",{key:6,cx:X(0),cy:Y(1),r:3.5,fill:"#e05252"}),
      e("circle",{key:7,cx:X(1),cy:Y(0),r:3.5,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#4a90d9"}},"y = "+a.toFixed(2)+"ˣ")," · ",e("span",{style:{color:"#50c878"}},"y = logₐ x")),
    sliderRow("a",a,0.2,3,0.05,setA),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Eksponencijalna uvijek prolazi (0, 1), logaritamska (1, 0). Međusobno su inverzne — simetrične oko pravca y = x. "+(a>1.01?"a > 1 → raste.":a<0.99?"0 < a < 1 → eksponencijalna pada.":"a ≈ 1.")));
}
function AnalGeoViz(){
  var sp=React.useState(1),p=sp[0],setP=sp[1],sq=React.useState(-1),q=sq[0],setQ=sq[1],sr=React.useState(3),r=sr[0],setR=sr[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=15,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},rr=Math.abs(r)<0.3?0.3:r;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("circle",{key:3,cx:X(p),cy:Y(q),r:rr*s,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(p),y1:Y(q),x2:X(p+rr),y2:Y(q),stroke:"#e9b446",strokeWidth:2}),
      e("circle",{key:5,cx:X(p),cy:Y(q),r:3.5,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"(x "+(p>=0?"− ":"+ ")+Math.abs(p).toFixed(1)+")² + (y "+(q>=0?"− ":"+ ")+Math.abs(q).toFixed(1)+")² = "+(rr*rr).toFixed(2)),
    sliderRow("p",p,-6,6,0.5,setP),sliderRow("q",q,-6,6,0.5,setQ),sliderRow("r",r,0.5,6,0.5,setR),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Središte (p, q) = ("+p.toFixed(1)+", "+q.toFixed(1)+") · polumjer r = "+rr.toFixed(1)+". U općoj jednadžbi x² + y² + Dx + Ey + F = 0 vrijedi p = −D/2, q = −E/2."));
}
function SeqViz(){
  var sg=React.useState(false),geom=sg[0],setGeom=sg[1],s1=React.useState(2),a1=s1[0],setA1=s1[1],sd=React.useState(1),d=sd[0],setD=sd[1];
  var W=300,H=240,oy=H-30,padL=20,n=8,bw=(W-padL-10)/n,terms=[],i;
  for(i=0;i<n;i++){terms.push(geom?a1*Math.pow(d,i):a1+i*d);}
  var mx=Math.max.apply(null,terms.map(Math.abs).concat([1])),sy=(H-60)/(mx*2),Y=function(v){return oy-v*sy;};
  var sum=terms.reduce(function(x,y){return x+y;},0);
  var bars=terms.map(function(v,i){var x0=padL+i*bw,y0=Y(v),yb=Y(0);return e("rect",{key:i,x:x0+2,y:Math.min(y0,yb),width:bw-4,height:Math.abs(y0-yb)||1,rx:2,fill:v>=0?"#4a90d9":"#e05252",opacity:.85});});
  return e("div",null,
    e("div",{style:{display:"flex",gap:6,marginBottom:8,justifyContent:"center"}},
      e("button",{onClick:function(){setGeom(false);},style:tgBtn(!geom)},"Aritmetički"),
      e("button",{onClick:function(){setGeom(true);},style:tgBtn(geom)},"Geometrijski")),
    vizSvg([e("line",{key:0,x1:0,y1:Y(0),x2:W,y2:Y(0),stroke:"var(--bdr2)",strokeWidth:1})].concat(bars)),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},geom?("aₙ = "+a1.toFixed(1)+" · "+d.toFixed(2)+"ⁿ⁻¹"):("aₙ = "+a1.toFixed(1)+(d>=0?" + ":" − ")+Math.abs(d).toFixed(1)+"(n−1)")),
    sliderRow("a1",a1,-5,5,0.5,setA1),sliderRow(geom?"q":"d",d,geom?-2:-4,geom?2:4,geom?0.05:0.5,setD),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},(geom?"Geometrijski: svaki član = prethodni · q. ":"Aritmetički: svaki član = prethodni + d. ")+"Zbroj prvih 8 ≈ "+sum.toFixed(2)+(geom&&Math.abs(d)<1?" · |q| < 1 → red konvergira (S = a₁/(1−q)).":"")));
}
function VecViz(){
  var a=React.useState(3),ax=a[0],setAx=a[1],b=React.useState(1),ay=b[0],setAy=b[1],c=React.useState(-1),bx=c[0],setBx=c[1],dd=React.useState(2),by=dd[0],setBy=dd[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=18,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},sxx=ax+bx,syy=ay+by;
  function arrow(x1,y1,x2,y2,col,k){var ang=Math.atan2(Y(y2)-Y(y1),X(x2)-X(x1)),hl=8;return [e("line",{key:k+"l",x1:X(x1),y1:Y(y1),x2:X(x2),y2:Y(y2),stroke:col,strokeWidth:2.5}),e("path",{key:k+"h",d:"M "+X(x2)+" "+Y(y2)+" L "+(X(x2)-hl*Math.cos(ang-0.4)).toFixed(1)+" "+(Y(y2)-hl*Math.sin(ang-0.4)).toFixed(1)+" L "+(X(x2)-hl*Math.cos(ang+0.4)).toFixed(1)+" "+(Y(y2)-hl*Math.sin(ang+0.4)).toFixed(1)+" Z",fill:col})];}
  var mag=Math.sqrt(sxx*sxx+syy*syy);
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:X(ax),y1:Y(ay),x2:X(sxx),y2:Y(syy),stroke:"#4a90d9",strokeWidth:1,strokeDasharray:"3 3",opacity:.5}),
      e("line",{key:4,x1:X(bx),y1:Y(by),x2:X(sxx),y2:Y(syy),stroke:"#50c878",strokeWidth:1,strokeDasharray:"3 3",opacity:.5})].concat(arrow(0,0,ax,ay,"#4a90d9","a")).concat(arrow(0,0,bx,by,"#50c878","b")).concat(arrow(0,0,sxx,syy,"#e05252","s"))),
    e("div",{style:{fontSize:12.5,fontWeight:700,textAlign:"center",margin:"10px 0",lineHeight:1.6}},e("span",{style:{color:"#4a90d9"}},"a("+ax+", "+ay+")")," + ",e("span",{style:{color:"#50c878"}},"b("+bx+", "+by+")")," = ",e("span",{style:{color:"#e05252"}},"("+sxx+", "+syy+")")),
    sliderRow("ax",ax,-5,5,1,setAx),sliderRow("ay",ay,-5,5,1,setAy),sliderRow("bx",bx,-5,5,1,setBx),sliderRow("by",by,-5,5,1,setBy),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Zbroj vektora = zbroj komponenti; geometrijski je to nadovezivanje (pravilo paralelograma). |a + b| = "+mag.toFixed(2)+"."));
}
function ComplexViz(){
  var sr=React.useState(3),re=sr[0],setRe=sr[1],si=React.useState(2),im=si[0],setIm=si[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=18,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},mod=Math.sqrt(re*re+im*im),arg=Math.atan2(im,re)*180/Math.PI;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:ox,y1:oy,x2:X(re),y2:Y(im),stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(re),y1:oy,x2:X(re),y2:Y(im),stroke:"#e05252",strokeWidth:1.5,strokeDasharray:"3 3"}),
      e("line",{key:5,x1:ox,y1:oy,x2:X(re),y2:oy,stroke:"#50c878",strokeWidth:1.5,strokeDasharray:"3 3"}),
      e("circle",{key:6,cx:X(re),cy:Y(im),r:4,fill:"#4a90d9"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"z = "+re+(im>=0?" + ":" − ")+Math.abs(im)+"i"),
    sliderRow("Re",re,-6,6,1,setRe),sliderRow("Im",im,-6,6,1,setIm),
    e("div",{style:{fontSize:12,marginTop:8,lineHeight:1.7,textAlign:"center"}},e("span",{style:{color:"#4a90d9",fontWeight:700}},"|z| = "+mod.toFixed(2))," · ",e("span",{style:{color:"var(--muted)"}},"arg z ≈ "+arg.toFixed(0)+"°"),e("br"),e("span",{style:{color:"var(--muted)",fontSize:11.5}},"Modul = udaljenost od ishodišta, argument = kut prema pozitivnoj realnoj osi.")));
}
function DerivViz(){
  var s=React.useState(1.5),x0=s[0],setX0=s[1];
  var W=300,H=240,ox=W/2,oy=H/2,sx=W/10,sy=H/16,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy},i;
  function f(x){return 0.3*x*x*x-x;}function fp(x){return 0.9*x*x-1;}
  var d="";for(i=-5;i<=5;i+=0.1){var py=f(i);if(py>=-7.5&&py<=7.5)d+=(d?"L":"M")+X(i).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  var m=fp(x0),y0=f(x0),tx1=x0-3,tx2=x0+3;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("path",{key:3,d:d,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(tx1),y1:Y(y0+m*(tx1-x0)),x2:X(tx2),y2:Y(y0+m*(tx2-x0)),stroke:"#e9b446",strokeWidth:2}),
      e("circle",{key:5,cx:X(x0),cy:Y(y0),r:4,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"f(x) = 0,3x³ − x · tangenta u x₀ = "+x0.toFixed(1)),
    sliderRow("x₀",x0,-4,4,0.1,setX0),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Nagib tangente = f′(x₀) = "+m.toFixed(2)+". Ondje funkcija "+(m>0.05?"raste":m<-0.05?"pada":"ima stacionarnu točku (f′ = 0)")+". Derivacija = trenutni nagib krivulje."));
}
function FnFamViz(){
  var si=React.useState(0),idx=si[0],setIdx=si[1],sa=React.useState(1),a=sa[0],setA=sa[1],sc=React.useState(0),c=sc[0],setC=sc[1],sd=React.useState(0),d=sd[0],setD=sd[1];
  var fams=[{n:"x²",f:function(x){return x*x;}},{n:"x³",f:function(x){return x*x*x;}},{n:"|x|",f:function(x){return Math.abs(x);}},{n:"√x",f:function(x){return x>=0?Math.sqrt(x):NaN;}},{n:"1/x",f:function(x){return x!==0?1/x:NaN;}},{n:"sin x",f:function(x){return Math.sin(x);}}];
  var fam=fams[idx],W=300,H=240,ox=W/2,oy=H/2,sx=W/12,sy=H/12,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy},i,dd="",prev=false;
  for(i=-6;i<=6;i+=0.08){var yv=a*fam.f(i-c)+d;if(isFinite(yv)&&yv>=-6&&yv<=6){dd+=(prev?"L":"M")+X(i).toFixed(1)+" "+Y(yv).toFixed(1)+" ";prev=true;}else{prev=false;}}
  var btns=fams.map(function(fm,k){return e("button",{key:k,onClick:function(){setIdx(k);},style:tgBtn(k===idx)},fm.n);});
  return e("div",null,
    e("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:8,justifyContent:"center"}},btns),
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),e("path",{key:3,d:dd,fill:"none",stroke:"#4a90d9",strokeWidth:2.5})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+a.toFixed(1)+" · f(x "+(c>=0?"− ":"+ ")+Math.abs(c).toFixed(1)+")"+(d>=0?" + ":" − ")+Math.abs(d).toFixed(1)+"   (f = "+fam.n+")"),
    sliderRow("a",a,-3,3,0.25,setA),sliderRow("c",c,-4,4,0.5,setC),sliderRow("d",d,-4,4,0.5,setD),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"a rasteže/zrcali okomito, c pomiče vodoravno (udesno za c > 0), d pomiče okomito. To su osnovne transformacije grafa funkcije."));
}
function StatViz(){
  var s=React.useState(8),out=s[0],setOut=s[1];
  var data=[3,4,4,5,6].concat([out]),sorted=data.slice().sort(function(x,y){return x-y;});
  var mean=data.reduce(function(x,y){return x+y;},0)/data.length,n=sorted.length,med=n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2;
  var W=300,H=240,padL=15,padR=15,axisY=H-50,maxV=20,X=function(v){return padL+(v/maxV)*(W-padL-padR);};
  var dots=data.map(function(v,i){return e("circle",{key:i,cx:X(v),cy:axisY-2-((i%3)*9),r:5,fill:i===data.length-1?"#e9b446":"#4a90d9",opacity:.9});});
  return e("div",null,
    vizSvg([e("line",{key:0,x1:padL,y1:axisY,x2:W-padR,y2:axisY,stroke:"var(--bdr2)",strokeWidth:1.5})].concat(dots).concat([e("line",{key:"mean",x1:X(mean),y1:20,x2:X(mean),y2:axisY,stroke:"#e05252",strokeWidth:2}),e("text",{key:"mt",x:X(mean),y:15,fill:"#e05252",fontSize:11,textAnchor:"middle"},"sredina"),e("line",{key:"med",x1:X(med),y1:axisY,x2:X(med),y2:axisY+22,stroke:"#50c878",strokeWidth:2}),e("text",{key:"mdt",x:X(med),y:axisY+34,fill:"#50c878",fontSize:11,textAnchor:"middle"},"medijan")])),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#e05252"}},"sredina = "+mean.toFixed(2))," · ",e("span",{style:{color:"#50c878"}},"medijan = "+med.toFixed(1))),
    sliderRow("zadnja",out,2,20,1,setOut),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Podatci: 3, 4, 4, 5, 6 i zadnja (žuta). Pomakni zadnju u stršeću vrijednost — aritmetička sredina se snažno mijenja, a medijan ostaje gotovo isti. Zato je medijan otporan na netipične podatke."));
}
function FinViz(){
  var sp=React.useState(1000),P=sp[0],setP=sp[1],sr=React.useState(5),rate=sr[0],setR=sr[1],syy=React.useState(10),yrs=syy[0],setY=syy[1];
  var W=300,H=240,padL=18,padB=28,X=function(t){return padL+(t/yrs)*(W-padL-12);},fin=P*Math.pow(1+rate/100,yrs),simple=P*(1+rate*yrs/100),maxV=Math.max(fin,simple,P*1.05);
  var Y=function(v){return (H-padB)-(v/maxV)*(H-padB-15);},dc="",t;
  for(t=0;t<=yrs;t+=Math.max(0.25,yrs/60)){var cv=P*Math.pow(1+rate/100,t);dc+=(dc?"L":"M")+X(t).toFixed(1)+" "+Y(cv).toFixed(1)+" ";}
  var ds="M "+X(0)+" "+Y(P)+" L "+X(yrs)+" "+Y(simple);
  return e("div",null,
    vizSvg([e("line",{key:1,x1:padL,y1:H-padB,x2:W-5,y2:H-padB,stroke:"var(--bdr2)",strokeWidth:1}),e("line",{key:2,x1:padL,y1:10,x2:padL,y2:H-padB,stroke:"var(--bdr2)",strokeWidth:1}),e("path",{key:3,d:ds,fill:"none",stroke:"#50c878",strokeWidth:1.8,strokeDasharray:"4 3"}),e("path",{key:4,d:dc,fill:"none",stroke:"#4a90d9",strokeWidth:2.5})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"C = "+P+" · (1 + "+(rate/100).toFixed(2)+")^"+yrs+" ≈ "+fin.toFixed(0)),
    sliderRow("glavnica",P,100,10000,100,setP),sliderRow("kamata %",rate,0,15,0.5,setR),sliderRow("godine",yrs,1,30,1,setY),
    e("div",{style:{fontSize:12,marginTop:8,lineHeight:1.7,textAlign:"center"}},e("span",{style:{color:"#4a90d9",fontWeight:700}},"složeno ≈ "+fin.toFixed(0))," · ",e("span",{style:{color:"#50c878"}},"jednostavno ≈ "+simple.toFixed(0)),e("br"),e("span",{style:{color:"var(--muted)",fontSize:11.5}},"Složeno ukamaćivanje (kamata na kamatu) raste eksponencijalno i nadmašuje jednostavno.")));
}
function GeoViz(){
  var s0=React.useState(0),tool=s0[0],setTool=s0[1];
  var sA=React.useState(50),A=sA[0],setA=sA[1];
  var sB=React.useState(60),B=sB[0],setB=sB[1];
  var sN=React.useState(6),N=sN[0],setN=sN[1];
  var sC=React.useState(100),arc=sC[0],setArc=sC[1];
  var sS=React.useState(0),solid=sS[0],setSolid=sS[1];
  var sR=React.useState(3),R=sR[0],setR=sR[1];
  var sH=React.useState(5),Hh=sH[0],setH=sH[1];
  var W=300,H=240;
  function triBlock(){
    var C=180-A-B;
    if(C<=2)return e("div",{style:{padding:24,color:"var(--muted)",fontSize:13,textAlign:"center"}},"Zbroj kutova mora biti manji od 180°. Smanji A ili B.");
    var a=A*Math.PI/180,b=B*Math.PI/180,ta=Math.tan(a),tb=Math.tan(b),L=1;
    var cx=L*tb/(ta+tb),cy=ta*cx;
    var minX=Math.min(0,cx),maxX=Math.max(L,cx),maxY=Math.max(cy,0.001),pad=34;
    var sc=Math.min((W-2*pad)/((maxX-minX)||1),(H-2*pad)/maxY),offx=(W-(maxX-minX)*sc)/2-minX*sc,offy=H-pad;
    function PX(x){return offx+x*sc;}function PY(y){return offy-y*sc;}
    var big=Math.max(A,B,C),typ=big>90.5?"tupokutan":(big<89.5?"šiljastokutan":"pravokutan");
    return e("div",null,
      vizSvg([e("polygon",{key:1,points:PX(0).toFixed(1)+","+PY(0).toFixed(1)+" "+PX(L).toFixed(1)+","+PY(0).toFixed(1)+" "+PX(cx).toFixed(1)+","+PY(cy).toFixed(1),fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5}),
        e("text",{key:2,x:PX(0)-6,y:PY(0)+15,fill:"var(--text)",fontSize:11.5},"A "+A+"°"),
        e("text",{key:3,x:PX(L)-6,y:PY(0)+15,fill:"var(--text)",fontSize:11.5},"B "+B+"°"),
        e("text",{key:4,x:PX(cx)-8,y:PY(cy)-6,fill:"var(--text)",fontSize:11.5},"C "+C+"°")]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},A+"° + "+B+"° + "+C+"° = 180° · "+typ),
      sliderRow("A",A,20,120,1,setA),sliderRow("B",B,20,120,1,setB),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"U svakom trokutu zbroj kutova je 180°. Najveći kut određuje vrstu: < 90° šiljastokutan, = 90° pravokutan, > 90° tupokutan."));
  }
  function circBlock(){
    var cx=W/2,cy=H/2+8,Rr=80,half=arc/2*Math.PI/180;
    var p1x=cx+Rr*Math.cos(Math.PI/2+half),p1y=cy-Rr*Math.sin(Math.PI/2+half),p2x=cx+Rr*Math.cos(Math.PI/2-half),p2y=cy-Rr*Math.sin(Math.PI/2-half),qx=cx,qy=cy+Rr;
    return e("div",null,
      vizSvg([e("circle",{key:1,cx:cx,cy:cy,r:Rr,fill:"none",stroke:"var(--bdr2)",strokeWidth:1.5}),
        e("line",{key:2,x1:cx,y1:cy,x2:p1x,y2:p1y,stroke:"#e05252",strokeWidth:2}),
        e("line",{key:3,x1:cx,y1:cy,x2:p2x,y2:p2y,stroke:"#e05252",strokeWidth:2}),
        e("line",{key:4,x1:qx,y1:qy,x2:p1x,y2:p1y,stroke:"#4a90d9",strokeWidth:2}),
        e("line",{key:5,x1:qx,y1:qy,x2:p2x,y2:p2y,stroke:"#4a90d9",strokeWidth:2}),
        e("circle",{key:6,cx:cx,cy:cy,r:3,fill:"#e05252"}),
        e("circle",{key:7,cx:qx,cy:qy,r:3.5,fill:"#4a90d9"})]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#e05252"}},"središnji = "+arc+"°")," · ",e("span",{style:{color:"#4a90d9"}},"obodni = "+(arc/2).toFixed(0)+"°")),
      sliderRow("luk",arc,20,180,2,setArc),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Obodni kut (plavi) nad istim je lukom uvijek POLOVICA središnjeg kuta (crveni) — ključno svojstvo kružnice."));
  }
  function polyBlock(){
    var cx=W/2,cy=H/2,Rr=80,pts=[],i;
    for(i=0;i<N;i++){var ang=-Math.PI/2+i*2*Math.PI/N;pts.push((cx+Rr*Math.cos(ang)).toFixed(1)+","+(cy+Rr*Math.sin(ang)).toFixed(1));}
    var interior=(N-2)*180/N,sum=(N-2)*180,ext=360/N;
    return e("div",null,
      vizSvg([e("polygon",{key:1,points:pts.join(" "),fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5})]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"Pravilni "+N+"-kut · unutarnji kut = "+interior.toFixed(1)+"°"),
      sliderRow("n",N,3,12,1,setN),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Zbroj unutarnjih kutova = (n − 2)·180° = "+sum+"°. Svaki = "+sum+"°/"+N+" = "+interior.toFixed(1)+"°. Vanjski kut = 360°/n = "+ext.toFixed(1)+"°."));
  }
  function solidBlock(){
    var cx=W/2,names=["valjak","stožac","kugla"],rpx=R*9,hpx=Hh*9,shapes;
    if(solid===0){var topY=H/2-hpx/2,botY=H/2+hpx/2;shapes=[e("ellipse",{key:1,cx:cx,cy:botY,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("line",{key:2,x1:cx-rpx,y1:topY,x2:cx-rpx,y2:botY,stroke:"#4a90d9",strokeWidth:2}),e("line",{key:3,x1:cx+rpx,y1:topY,x2:cx+rpx,y2:botY,stroke:"#4a90d9",strokeWidth:2}),e("ellipse",{key:4,cx:cx,cy:topY,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.18)",stroke:"#4a90d9",strokeWidth:2})];}
    else if(solid===1){var apex=H/2-hpx/2,base=H/2+hpx/2;shapes=[e("ellipse",{key:1,cx:cx,cy:base,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("line",{key:2,x1:cx-rpx,y1:base,x2:cx,y2:apex,stroke:"#4a90d9",strokeWidth:2}),e("line",{key:3,x1:cx+rpx,y1:base,x2:cx,y2:apex,stroke:"#4a90d9",strokeWidth:2})];}
    else{shapes=[e("circle",{key:1,cx:cx,cy:H/2,r:rpx,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("ellipse",{key:2,cx:cx,cy:H/2,rx:rpx,ry:rpx*0.3,fill:"none",stroke:"#4a90d9",strokeWidth:1,strokeDasharray:"3 3"})];}
    var V=solid===0?(R*R*Math.PI*Hh):(solid===1?(R*R*Math.PI*Hh/3):(4/3*Math.PI*R*R*R));
    var formula=solid===0?"V = r²·π·h":(solid===1?"V = r²·π·h / 3":"V = (4/3)·π·r³");
    return e("div",null,
      e("div",{style:{display:"flex",gap:6,marginBottom:8,justifyContent:"center"}},names.map(function(nm,k){return e("button",{key:k,onClick:function(){setSolid(k);},style:tgBtn(k===solid)},nm);})),
      vizSvg(shapes),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},formula+" ≈ "+V.toFixed(1)),
      sliderRow("r",R,1,8,0.5,setR),solid!==2&&sliderRow("h",Hh,1,10,0.5,setH),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Volumen valjka r²πh; stošca trećina toga; kugle (4/3)πr³. Oplošje i volumen rastu s polumjerom — kugla s r³."));
  }
  return e("div",null,
    e("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:10,justifyContent:"center"}},["Trokut","Kružni kutovi","Mnogokut","Tijela"].map(function(t,k){return e("button",{key:k,onClick:function(){setTool(k);},style:tgBtn(k===tool)},t);})),
    tool===0?triBlock():(tool===1?circBlock():(tool===2?polyBlock():solidBlock())));
}
function VizModal({kind,onClose}){
  return e("div",{onClick:onClose,style:{position:"fixed",inset:0,zIndex:280,background:"rgba(10,15,28,.7)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}},
    e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"18px 18px 20px",maxWidth:440,width:"100%",maxHeight:"92vh",overflowY:"auto"}},
      e("div",{style:{display:"flex",alignItems:"center",marginBottom:12}},
        e("span",{style:{fontFamily:"var(--fh)",fontSize:18,marginRight:"auto"}},({quad:"Kvadratna funkcija",lin:"Linearna funkcija",circle:"Trigonometrijska kružnica",explog:"Eksponencijalna i logaritamska",analgeo:"Kružnica u koordinatnom sustavu",seq:"Aritmetički i geometrijski niz",vec:"Zbrajanje vektora",complex:"Kompleksna ravnina",deriv:"Tangenta i derivacija",fnfam:"Transformacije funkcija",stat:"Aritmetička sredina i medijan",fin:"Složeni kamatni račun",geo:"Geometrijski alat"}[kind]||"Interaktivni prikaz")),
        e("button",{onClick:onClose,style:{border:"none",background:"var(--s2)",borderRadius:8,width:30,height:30,cursor:"pointer",fontSize:14,color:"var(--muted)"}},"\u2715")),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:12,lineHeight:1.5}},"Povla\u010di kliza\u010de i gledaj kako se mijenja graf \u2014 tako stvarno razumije\u0161."),
      kind==="quad"&&e(QuadViz,null),kind==="lin"&&e(LinViz,null),kind==="circle"&&e(CircleViz,null),kind==="explog"&&e(ExpLogViz,null),kind==="analgeo"&&e(AnalGeoViz,null),kind==="seq"&&e(SeqViz,null),kind==="vec"&&e(VecViz,null),kind==="complex"&&e(ComplexViz,null),kind==="deriv"&&e(DerivViz,null),kind==="fnfam"&&e(FnFamViz,null),kind==="stat"&&e(StatViz,null),kind==="fin"&&e(FinViz,null),kind==="geo"&&e(GeoViz,null)));
}
function StuckHelper(){
  const[open,setOpen]=React.useState(false);
  return e("div",{style:{marginTop:14}},
    e("button",{onClick:()=>setOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:7,padding:"7px 14px",borderRadius:99,background:open?"var(--gold-d)":"var(--s2)",border:"1px solid "+(open?"var(--gold-b)":"var(--bdr2)"),color:open?"var(--gold)":"var(--muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"\ud83e\udd14 Zaglavio/la sam?"),
    open&&e("div",{style:{marginTop:10,padding:"14px 16px",borderRadius:"var(--r)",background:"var(--gold-d)",border:"1px solid var(--gold-b)"}},
      e("div",{style:{fontSize:13.5,fontWeight:700,color:"var(--text)",marginBottom:4}},"Bez panike \u2014 zapinjanje zna\u010di da mozak radi. \ud83d\udcaa"),
      e("div",{style:{fontSize:12.5,color:"var(--muted)",lineHeight:1.55,marginBottom:10}},"Zapeti je normalno \u010dak i odlika\u0161ima. Probaj ovim redom:"),
      e("ol",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"var(--text)"}},
        e("li",null,"Pro\u010ditaj zadatak ponovno i podcrtaj \u0161to se ",e("strong",null,"to\u010dno tra\u017ei"),"."),
        e("li",null,"Zapi\u0161i \u0161to ti je ",e("strong",null,"zadano")," (brojevi, uvjeti) \u2014 koristi \u270f\ufe0f papir."),
        e("li",null,"Sjeti se koja ",e("strong",null,"formula")," povezuje zadano i tra\u017eeno \u2192 otvori \u201eKlju\u010dna formula\u201d ispod."),
        e("li",null,"Ako i dalje ne ide \u2192 \u201eOtkrij prvi korak\u201d pa poku\u0161aj sam/a nastaviti.")),
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginTop:10,fontStyle:"italic"}},"Cilj nije znati odmah \u2014 nego znati ZA\u0160TO. To pamti\u0161 za maturu.")));
}
function WarmupItem({q,a}){
  const[show,setShow]=React.useState(false);
  return e("button",{onClick:()=>setShow(true),style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,width:"100%",marginBottom:8,padding:"12px 14px",borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)",cursor:show?"default":"pointer",fontFamily:"var(--fb)",textAlign:"left"}},
    e("span",{style:{fontSize:14,fontWeight:600,color:"var(--text)"}},q),
    show?e("span",{style:{fontSize:15,fontWeight:800,color:"var(--green)"}},"= "+a):e("span",{style:{fontSize:11.5,color:"var(--muted)",fontWeight:700}},"tap \u2192"));
}
function FigZoom({fig,onClose}){
  const[z,setZ]=React.useState(1);
  const[pan,setPan]=React.useState({x:0,y:0});
  const drag=React.useRef(null);
  const pinch=React.useRef(null);
  const lastTap=React.useRef(0);
  const clampPan=(p,zz)=>{const m=Math.max(0,zz-1)*340+40;return{x:Math.max(-m,Math.min(m,p.x)),y:Math.max(-m,Math.min(m,p.y))};};
  const zoomTo=(nz)=>{nz=+Math.max(0.5,Math.min(4,nz)).toFixed(2);setZ(nz);setPan(p=>nz<=1?{x:0,y:0}:clampPan(p,nz));};
  const reset=()=>{setZ(1);setPan({x:0,y:0});};
  const onMouseDown=(ev)=>{if(z<=1)return;drag.current={sx:ev.clientX,sy:ev.clientY,bx:pan.x,by:pan.y};};
  const onMouseMove=(ev)=>{if(!drag.current)return;setPan(clampPan({x:drag.current.bx+(ev.clientX-drag.current.sx),y:drag.current.by+(ev.clientY-drag.current.sy)},z));};
  const endDrag=()=>{drag.current=null;};
  const onWheel=(ev)=>{ev.preventDefault();zoomTo(z+(ev.deltaY<0?0.25:-0.25));};
  const dist=(t)=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);
  const onTouchStart=(ev)=>{const t=ev.touches;if(t.length===2){pinch.current={d:dist(t),bz:z};}else if(t.length===1){const now=Date.now();if(now-lastTap.current<300){reset();}lastTap.current=now;if(z>1){drag.current={sx:t[0].clientX,sy:t[0].clientY,bx:pan.x,by:pan.y};}}};
  const onTouchMove=(ev)=>{const t=ev.touches;if(t.length===2&&pinch.current){ev.preventDefault();zoomTo(pinch.current.bz*(dist(t)/pinch.current.d));}else if(t.length===1&&drag.current){ev.preventDefault();setPan(clampPan({x:drag.current.bx+(t[0].clientX-drag.current.sx),y:drag.current.by+(t[0].clientY-drag.current.sy)},z));}};
  const onTouchEnd=(ev)=>{if(ev.touches.length===0){drag.current=null;pinch.current=null;}};
  const ctrl={minWidth:38,height:38,padding:"0 10px",borderRadius:9,border:"1px solid rgba(255,255,255,.25)",background:"rgba(255,255,255,.1)",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)",display:"flex",alignItems:"center",justifyContent:"center"};
  const interacting=!!(drag.current||pinch.current);
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.93)",zIndex:300,display:"flex",flexDirection:"column"},onClick:onClose},
    e("div",{onClick:ev=>ev.stopPropagation(),style:{display:"flex",alignItems:"center",gap:8,padding:"12px 16px",justifyContent:"center",flexWrap:"wrap"}},
      e("button",{title:"Smanji",onClick:()=>zoomTo(z-0.25),style:ctrl},"\u2212"),
      e("span",{style:{color:"#fff",fontSize:13,fontWeight:700,minWidth:54,textAlign:"center"}},Math.round(z*100)+"%"),
      e("button",{title:"Pove\u0107aj",onClick:()=>zoomTo(z+0.25),style:ctrl},"+"),
      e("button",{title:"Vrati na 100%",onClick:reset,style:Object.assign({},ctrl,{fontSize:16})},"\u27f2"),
      e("button",{title:"Zatvori (Esc)",onClick:onClose,style:Object.assign({},ctrl,{marginLeft:6,background:"rgba(255,255,255,.22)"})},"\u2715")),
    e("div",{onClick:ev=>ev.stopPropagation(),onMouseDown:onMouseDown,onMouseMove:onMouseMove,onMouseUp:endDrag,onMouseLeave:endDrag,onWheel:onWheel,onTouchStart:onTouchStart,onTouchMove:onTouchMove,onTouchEnd:onTouchEnd,onDoubleClick:reset,
      style:{flex:1,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 16px 6px",cursor:z>1?(interacting?"grabbing":"grab"):"default",touchAction:"none",userSelect:"none"}},
      e("div",{className:"zoom-fig-inner",style:{transform:"translate("+pan.x+"px,"+pan.y+"px) scale("+z+")",transformOrigin:"center center",transition:interacting?"none":"transform .12s ease",background:"#fff",borderRadius:14,padding:20,flexShrink:0}},fig)),
    e("div",{onClick:ev=>ev.stopPropagation(),style:{textAlign:"center",color:"rgba(255,255,255,.5)",fontSize:11,padding:"2px 16px 14px",lineHeight:1.4}},"Kota\u010di\u0107 / \u00b1 za zoom \u00b7 povuci za pomicanje \u00b7 dvoklik za reset"));
}
function ZoomableFig({fig}){
  const[zf,setZf]=React.useState(false);
  useEscape(zf,()=>setZf(false));
  return e(React.Fragment,null,
    e("div",{className:"fig-zoomable",style:{display:"inline-block"},onClick:()=>setZf(true)},
      fig,
      e("span",{className:"fig-zoom-badge"},"🔍 uvećaj")),
    zf&&e(FigZoom,{fig:fig,onClose:()=>setZf(false)}));
}
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
function FeedbackBox({q,a,rev,elapsed,avgTime}){
  if(!rev||q.type==="proof") return null;

  // Timing badge
  function timingBadge(){
    if(!elapsed||elapsed<=0) return null;
    const isSlower=avgTime&&elapsed>avgTime*1.5;
    const isFaster=avgTime&&elapsed<avgTime*0.7;
    const col=elapsed>90?"var(--red)":elapsed>45?"var(--gold)":"var(--green)";
    return e("div",{style:{
      display:"inline-flex",alignItems:"center",gap:6,
      fontSize:11,color:"var(--muted)",marginTop:6
    }},
      e("span",{style:{
        fontWeight:700,color:col,
        background:elapsed>90?"var(--red-d)":elapsed>45?"var(--gold-d)":"var(--green-d)",
        padding:"2px 7px",borderRadius:99
      }},elapsed+"s"),
      avgTime&&e("span",null,
        "· prosjek "+avgTime+"s · ",
        isSlower
          ?e("span",{style:{color:"var(--red)"}},"sporije od prosjeka")
          :isFaster
            ?e("span",{style:{color:"var(--green)"}},"brže od prosjeka ✓")
            :e("span",{style:{color:"var(--muted)"}},"u prosjeku")
      )
    );
  }

  // SA pitanja  -  samo timing, bez točno/netočno
  if(q.type==="sa"||q.type==="pa"){
    return elapsed>0?e("div",{className:"fb info",style:{marginTop:12}},
      e("div",{className:"fbtitle"},"✏️ Otvoren odgovor"),
      e("div",{className:"fbtext"},"Provjeri svoj odgovor s rješenjem."),
      timingBadge()
    ):null;
  }

  const ok=chk(q,a);
  if(ok===null) return null;
  const _diag=(q.steps||[]).find(st=>st&&st.note==="diagnostika");
  const _diagTxt=_diag?String(_diag.txt).replace(/^(Analiza distractora:|Diagnostika:)\s*/i,"").replace(/<br>\s*Rje\u0161enje:[\s\S]*$/i,"").trim():"";
  const _mistake=(q.why||[]).find(w=>typeof w==="string"&&/gre\u0161k|propust/i.test(w));
  const _mistakeTxt=_mistake?String(_mistake).replace(/^(Tipi\u010dan propust:|Tipi\u010dna gre\u0161ka:|\u010cesta gre\u0161ka:|Gre\u0161ka:)\s*/i,"").trim():"";
  const _topicLbl=TOPIC_LABELS[q.topic]||q.topic;
  return e("div",{className:"fb "+(ok?"ok":"bad"),style:{marginTop:12}},
    e("div",{className:"fbtitle"},ok?"✓ Točno!":"✗ Netočno"),
    // MC  -  pokaži točan odgovor
    ok&&q.warn&&e("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginTop:2,marginBottom:4,padding:"4px 11px",borderRadius:99,background:"var(--green-d)",border:"1px solid rgba(30,122,62,.4)",color:"var(--green)",fontSize:11.5,fontWeight:800}},"🛡️ Izbjegnuta česta greška"),
    !ok&&q.type==="mc"&&q.sol?.cl&&e("div",{className:"fbtext"},
      "Točan odgovor: "+q.sol.cl+"  -  "+(q.opts?.["ABCD".indexOf(q.sol.cl)]||"")
    ),
    // #1 ANALIZA DISTRAKTORA (netočan MC)
    !ok&&q.type==="mc"&&_diagTxt&&e("div",{className:"fb-diag"},
      e("div",{className:"fb-diag-label"},"\uD83D\uDD0D Za\u0161to su ostale opcije krive"),
      e("div",{className:"fb-diag-text"},renderOptText(_diagTxt))),
    // #2 ČESTA GREŠKA
    !ok&&_mistakeTxt&&e("div",{className:"fb-mistake"},
      e("div",{className:"fb-mistake-label"},"\u26a0\ufe0f \u010cesta gre\u0161ka"),
      e("div",{className:"fb-mistake-text"},renderOptText(_mistakeTxt))),
    // Num/calc  -  pokaži točan broj
    !ok&&(q.type==="num"||q.type==="calc")&&q.sol?.ans&&e("div",{className:"fbtext"},
      e("span",null, "Točan odgovor: ", renderOptText(q.sol.ans), q.sol.alt?.length ? e("span",{style:{opacity:.7}}, " (ili: ", q.sol.alt.join(", "), ")") : null)
    ),
    // Exp  -  kratko objašnjenje
    q.exp&&e("div",{className:"fbtext",style:{
      marginTop:6,paddingTop:6,
      borderTop:"1px solid rgba(255,255,255,.06)",
      fontStyle:"italic"
    }}, e("span",{style:{marginRight:6}}, "💡"), renderOptText(q.exp)),
    q.topic&&_topicLbl&&e("div",null,e("button",{className:"fb-topic-link",
      onClick:()=>{try{(window.parent||window).postMessage({type:"DISCERE_NAVIGATE",to:"skripte",topic:q.topic,topicLabel:_topicLbl},"*");}catch(e){}}},
      "\uD83D\uDCD6 Ponovi: "+_topicLbl+" \u2192")),
    timingBadge()
  );
}
function DisclaimerModal({onClose}){
  const totalExams=Object.keys(EXAMS).length;
  const totalQs=Object.values(EXAMS).reduce((s,ex)=>s+ex.qs.length,0);
  return e("div",{className:"disclaimer-modal-overlay",onClick:onClose},
    e("div",{className:"disclaimer-modal",onClick:ev=>ev.stopPropagation()},
      e("div",{className:"dm-tag"},"ℹ️ O aplikaciji"),
      e("h3",{style:{fontFamily:"var(--fh)",fontSize:20,marginBottom:10}},"Discere  -  "+SUBJECT.name),
      e("p",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.7}},
        "Simulator državne mature iz matematike  -  osnovna (B) i viša (A) razina. Trenutno sadrži ",
        e("strong",null,totalExams+" ispita"),
        " s više od ",
        e("strong",null,totalQs+" zadataka"),
        "  -  uz korak-po-korak rješenja, analitiku napretka i personalizirane preporuke."
      ),
      e("div",{className:"dm-section"},
        e("p",null,
          e("strong",null,"Što simulator nudi: "),
          "simulacija ispita, vježbanje, vježbanje s timerom, virtualni ispit, tematske sesije, dnevni izazov, pametno ponavljanje (SRS), spremljena pitanja, praćenje grešaka i PDF izvještaj."
        ),
        e("p",null,
          e("strong",null,"Ispitna pitanja"),
          " su vlasništvo ",
          e("a",{href:"https://www.ncvvo.hr",target:"_blank",rel:"noopener"},"NCVVO-a"),
          " i preuzeta su iz javno objavljenih ispita državne mature. Discere je autor svih objašnjenja, rješenja i analitičkih alata."
        )
      ),
      e("div",{className:"dm-section"},
        e("p",null,
          e("strong",null,"Format ispita B razine: "),
          "~16 MC + ~12 kratkih odgovora + opisni zadaci. Trajanje: 150 minuta."
        ),
        e("p",null,
          e("strong",null,"Format ispita A razine: "),
          "~15 MC + kratki i produženi odgovori. Trajanje: 180 minuta."
        ),
        e("p",{style:{marginBottom:0}},
          "Kontakt: ",
          e("a",{href:"mailto:info@discere.app",style:{color:"var(--blue)"}},"info@discere.app"),
          " · © "+new Date().getFullYear()+" Discere · Ispitna pitanja: © NCVVO"
        )
      ),
      e("div",{style:{marginTop:20,textAlign:"right"}},
        e("button",{className:"btn btn-gold",onClick:onClose},"Razumijem")
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
function ShareCard({exam,pct,g,gc,cor,total,userData}){
  const[copied,setCopied]=useState(false);
  const gradeEmoji={1:"😔",2:"😐",3:"🙂",4:"😊",5:"🏆"};
  const levelName=LEVEL_NAMES[getLevel(userData?.xp||0)]||"Početnik";

  function copyText(){
    const text=`${SUBJECT.shareTitle}\n${exam.season==="session"?exam.label:exam.year+". "+exam.label} (${exam.razina==="A"?"Viša":"Osnovna"} razina)\n\nOcjena: ${g}/5 (${pct}%)\nTočnih: ${cor}/${total}\n\nVježbao/la na Discere 🎓`;
    navigator.clipboard?.writeText(text).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});
  }

  return e("div",{className:"share-card-wrap"},
    e("div",{className:"share-card-inner"},
      e("div",{className:"share-card-logo"},SUBJECT.shareLogo),
      e("div",{className:"share-grade-big"},gradeEmoji[g]||"🎓"),
      e("div",{style:{fontFamily:"var(--fh)",fontSize:56,color:"var(--bg,#060910)",lineHeight:1,marginBottom:6,textShadow:"0 2px 12px rgba(0,0,0,.3)"}},g+"/5"),
      e("div",{className:"share-pct"},pct+"% · "+cor+"/"+total+" točnih"),
      e("div",{className:"share-tags"},
        e("span",{className:"share-tag"},examTitle(exam)),
        e("span",{className:"share-tag"},exam.razina==="A"?"Viša razina (A)":"Osnovna razina (B)"),
        (userData?.xp||0)>0&&e("span",{className:"share-tag"},levelName+" · "+(userData.xp||0)+" XP"),
        (userData?.streak||0)>1&&e("span",{className:"share-tag"},"🔥 "+(userData.streak)+" dana zaredom")
      ),
      e("div",{className:"share-btns"},
        e("button",{className:"btn-share btn-share-copy",onClick:copyText},
          copied?"✓ Kopirano!":"📋 Kopiraj rezultat"
        )
      )
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
function AnimatedRing({pct,gc,g}){
  const r=54,circ=2*Math.PI*r;
  const[dash,setDash]=useState(0);
  useEffect(()=>{
    const t=setTimeout(()=>setDash(circ*(pct/100)),100);
    return()=>clearTimeout(t);
  },[pct]);
  return e("div",{className:"score-ring score-anim"},
    e("svg",{width:140,height:140,viewBox:"0 0 140 140"},
      e("circle",{cx:70,cy:70,r:r,fill:"none",stroke:"var(--s3)",strokeWidth:10}),
      e("circle",{cx:70,cy:70,r:r,fill:"none",stroke:gc,strokeWidth:10,
        strokeDasharray:circ,strokeDashoffset:circ-dash,
        style:{transition:"stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)"},
        strokeLinecap:"round",transform:"rotate(-90 70 70)"})
    ),
    e("div",{className:"score-ring-text"},
      e("div",{className:"score-ring-num",style:{color:gc}},g),
      e("div",{className:"score-ring-pct"},pct+"%")
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
function TrendChart({history}){
  const[tooltip,setTooltip]=useState(null);
  const data=history.map(h=>({pct:h.pct,grade:h.grade,examLabel:h.examLabel,date:h.date,cor:h.cor,total:h.total,sim:(h.examMode===true||h.mode==="simulacija")}));
  const PASS=50;
  const n=data.length;
  if(n<3) return e("div",{style:{padding:"30px 16px",textAlign:"center"}},
    e("div",{style:{fontSize:30,marginBottom:8}},"📈"),
    e("div",{style:{fontSize:13.5,fontWeight:600,marginBottom:4}},"Trend rezultata"),
    e("div",{style:{fontSize:12.5,color:"var(--muted)"}},"Riješi još "+(3-n)+" "+(3-n===1?"ispit":"ispita")+" za prikaz trenda"));
  const W=560,H=180,PAD={l:36,r:16,t:18,b:32};
  const iW=W-PAD.l-PAD.r,iH=H-PAD.t-PAD.b;
  const xStep=n>1?iW/(n-1):0;
  function xPos(i){return PAD.l+(n>1?i*xStep:iW/2);}
  function yPos(pct){return PAD.t+iH-(pct/100)*iH;}
  const gridLines=[40,55,70,85];
  const pts=data.map((h,i)=>xPos(i)+","+yPos(h.pct));
  const avgPct=Math.round(data.reduce((a,h)=>a+h.pct,0)/n);
  return e("div",{style:{position:"relative"}},
    e("svg",{className:"trend-svg",viewBox:`0 0 ${W} ${H}`,preserveAspectRatio:"xMidYMid meet"},
      gridLines.map(pct=>e("g",{key:pct},
        e("line",{x1:PAD.l,y1:yPos(pct),x2:W-PAD.r,y2:yPos(pct),stroke:"var(--bdr2)",strokeWidth:1,strokeDasharray:"4 4"}),
        e("text",{x:PAD.l-4,y:yPos(pct)+4,textAnchor:"end",fontSize:9,fill:"var(--muted)"},pct+"%")
      )),
      n>1&&e("polyline",{points:pts.join(" "),fill:"none",stroke:"var(--blue)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),
      e("line",{x1:PAD.l,y1:yPos(PASS),x2:W-PAD.r,y2:yPos(PASS),stroke:"var(--red)",strokeWidth:1.5,strokeDasharray:"2 3",opacity:.55}),
      e("text",{x:W-PAD.r,y:yPos(PASS)-4,textAnchor:"end",fontSize:8.5,fill:"var(--red)",opacity:.8},"prag "+PASS+"%"),
      n>=3&&e("line",{x1:PAD.l,y1:yPos(avgPct),x2:W-PAD.r,y2:yPos(avgPct),stroke:"var(--bdr2)",strokeWidth:1,strokeDasharray:"6 3"}),
      data.map((h,i)=>e("text",{key:i,x:xPos(i),y:H-4,textAnchor:"middle",fontSize:9,fill:"var(--muted)"},
        h.examLabel?.slice(0,7)||"")),
      data.map((h,i)=>e("circle",{
        key:i,className:"trend-point",cx:xPos(i),cy:yPos(h.pct),r:h.sim?6:5,
        fill:GC[h.grade]||"var(--blue)",stroke:h.sim?"var(--gold)":"var(--bg)",strokeWidth:h.sim?2.5:2,
        onMouseEnter:()=>setTooltip({...h,i}),
        onMouseLeave:()=>setTooltip(null)
      }))
    ),
    tooltip&&e("div",{className:"trend-tooltip",style:{left:Math.min((tooltip.i/(n-1)*100),75)+"%",top:"10%"}},
      e("strong",{style:{color:GC[tooltip.grade]}},GLBL[tooltip.grade]+"  -  "+tooltip.pct+"%"),
      e("span",null,tooltip.examLabel),e("br"),
      e("span",{style:{color:"var(--muted)"}},tooltip.date+" · "+tooltip.cor+"/"+tooltip.total+" točnih")
    ),
    e("div",{className:"trend-legend"},
      e("div",{className:"trend-legend-item"},
        e("div",{className:"trend-legend-line",style:{background:"var(--blue)"}}),
        "Tvoj rezultat"),
      n>=3&&e("div",{className:"trend-legend-item"},
        e("div",{className:"trend-legend-line",style:{background:"var(--bdr2)"}}),
        "Prosjek "+avgPct+"%"),
      data.some(h=>h.sim)&&e("div",{className:"trend-legend-item"},
        e("div",{style:{width:9,height:9,borderRadius:"50%",background:"var(--muted)",border:"2px solid var(--gold)"}}),
        "Simulacija")
    ),
  );
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
function OnboardingModal({initialRazina,initialGrade,onSave,onClose,canClose}){
  const[raz,setRaz]=React.useState(initialRazina||null);
  const[grd,setGrd]=React.useState(initialGrade||null);
  const gCol={2:"var(--red)",3:"var(--gold)",4:"var(--blue)",5:"var(--green)"};
  const razCard=(key,emoji,name,desc)=>{
    const on=raz===key;
    return e("button",{key,onClick:()=>setRaz(key),style:{textAlign:"left",cursor:"pointer",fontFamily:"var(--fb)",borderRadius:14,padding:"15px 16px",border:"2px solid "+(on?"var(--blue)":"var(--bdr)"),background:on?"var(--blue-d)":"var(--s1)",display:"flex",gap:13,alignItems:"flex-start",transition:"all .15s",position:"relative",width:"100%"}},
      e("div",{style:{fontSize:24,flexShrink:0}},emoji),
      e("div",{style:{minWidth:0}},
        e("div",{style:{fontSize:15,fontWeight:800,color:on?"var(--blue)":"var(--text)",marginBottom:3}},name),
        e("div",{style:{fontSize:12,color:"var(--muted)",lineHeight:1.5}},desc)
      ),
      on&&e("div",{style:{position:"absolute",top:12,right:14,width:20,height:20,borderRadius:"50%",background:"var(--blue)",color:"#fff",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}},"\u2713")
    );
  };
  return e("div",{style:{position:"fixed",inset:0,background:"rgba(6,12,24,.62)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:16},
    onClick:e2=>{if(canClose&&e2.target===e2.currentTarget)onClose();}},
    e("div",{style:{background:"var(--bg)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",overflow:"auto",boxShadow:"0 30px 70px -20px rgba(0,0,0,.6)",border:"1px solid var(--bdr)"}},
      e("div",{style:{position:"relative",overflow:"hidden",padding:"26px 26px 22px",background:"radial-gradient(135% 130% at 86% -20%,#2a5cb8 0%,#163769 44%,#0a1730 100%)"}},
        e("div",{style:{position:"absolute",right:-12,bottom:-28,fontSize:120,fontFamily:"var(--fh)",color:"rgba(255,255,255,.05)",lineHeight:1,pointerEvents:"none",userSelect:"none"}},"\u2211"),
        canClose&&e("button",{onClick:onClose,style:{position:"absolute",top:14,right:16,background:"rgba(255,255,255,.13)",border:"none",borderRadius:8,width:30,height:30,color:"#fff",fontSize:15,cursor:"pointer",fontFamily:"var(--fb)"}},"\u2715"),
        e("div",{style:{position:"relative",zIndex:1,fontSize:11,fontWeight:800,letterSpacing:".13em",textTransform:"uppercase",color:"#8fb4f5",marginBottom:8}},"Discere"),
        e("div",{style:{position:"relative",zIndex:1,fontFamily:"var(--fh)",fontSize:24,color:"#fff",lineHeight:1.2,marginBottom:6}},"Postavimo tvoj plan"),
        e("div",{style:{position:"relative",zIndex:1,fontSize:13,color:"rgba(255,255,255,.75)",lineHeight:1.55}},"Dvije stvari i sve je prilago\u0111eno tebi \u2014 traje 10 sekundi.")
      ),
      e("div",{style:{padding:"22px 24px 24px"}},
        e("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11}},"Koju razinu mature pola\u017ee\u0161?"),
        e("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:22}},
          razCard("B","\uD83D\uDCD8","Osnovna razina (B)","Standardna razina. Dovoljna za upis na ve\u0107inu fakulteta."),
          razCard("A","\uD83D\uDCD7","Vi\u0161a razina (A)","Zahtjevnija. Za tehni\u010dke/prirodoslovne fakultete koji tra\u017ee A.")
        ),
        e("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"var(--muted)",marginBottom:11}},"Ciljana ocjena ",e("span",{style:{fontWeight:500,textTransform:"none",letterSpacing:0,color:"var(--muted)"}},"\u00b7 mo\u017ee\u0161 presko\u010diti")),
        e("div",{style:{display:"flex",gap:8,marginBottom:24}},
          [2,3,4,5].map(g=>{const on=grd===g;return e("button",{key:g,onClick:()=>setGrd(on?null:g),style:{flex:1,cursor:"pointer",fontFamily:"var(--fh)",fontSize:20,fontWeight:700,padding:"12px 0",borderRadius:12,border:"2px solid "+(on?gCol[g]:"var(--bdr)"),background:on?gCol[g]:"var(--s1)",color:on?"#fff":"var(--text)",transition:"all .15s"}},g);})
        ),
        e("button",{onClick:()=>{if(raz)onSave(raz,grd);},disabled:!raz,style:{width:"100%",border:"none",cursor:raz?"pointer":"not-allowed",fontFamily:"var(--fb)",fontSize:15,fontWeight:800,padding:"15px",borderRadius:13,color:raz?"#fff":"var(--muted)",background:raz?"linear-gradient(135deg,#2d6ad4 0%,#143a7a 100%)":"var(--s2)",boxShadow:raz?"0 12px 26px -10px rgba(45,106,212,.6)":"none",transition:"all .15s"}},
          raz?"Kreni \u2192":"Odaberi razinu")
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
function FormulaSheet({onExit,onHome}){
  var _m=React.useState("browse"),mode=_m[0],setMode=_m[1];
  var _q=React.useState(""),query=_q[0],setQuery=_q[1];
  var _open=React.useState(function(){var o={};FORMULE_DATA.forEach(function(s,i){o[i]=i<3;});return o;}),openSec=_open[0],setOpenSec=_open[1];
  var FR=function(str){return renderOptText(str);};

  // ---------- GAME (spoji parove) ----------
  var gamePool=React.useMemo(function(){
    var arr=[],id=0;
    FORMULE_DATA.forEach(function(s){s.items.forEach(function(it){
      if(it.n.length<=30 && it.f.length<=46) arr.push({id:id++,n:it.n,f:it.f});
    });});
    return arr;
  },[]);
  var _round=React.useState([]),round=_round[0],setRound=_round[1];
  var _names=React.useState([]),names=_names[0],setNames=_names[1];
  var _forms=React.useState([]),forms=_forms[0],setForms=_forms[1];
  var _selN=React.useState(null),selN=_selN[0],setSelN=_selN[1];
  var _matched=React.useState({}),matched=_matched[0],setMatched=_matched[1];
  var _wrong=React.useState(null),wrong=_wrong[0],setWrong=_wrong[1];
  var _moves=React.useState(0),moves=_moves[0],setMoves=_moves[1];
  var _t0=React.useState(0),t0=_t0[0],setT0=_t0[1];
  var _now=React.useState(0),nowT=_now[0],setNow=_now[1];
  var tickRef=React.useRef(null);
  var SIZE=5;
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function newRound(){
    var pick=shuffle(gamePool).slice(0,Math.min(SIZE,gamePool.length));
    setRound(pick); setNames(shuffle(pick)); setForms(shuffle(pick));
    setSelN(null); setMatched({}); setWrong(null); setMoves(0);
    setT0(Date.now()); setNow(Date.now());
  }
  React.useEffect(function(){
    if(mode==="game"&&round.length===0) newRound();
    if(mode==="game"){
      tickRef.current=setInterval(function(){setNow(Date.now());},250);
      return function(){clearInterval(tickRef.current);};
    }
  },[mode]);
  var doneCount=Object.keys(matched).length;
  var solved=round.length>0&&doneCount===round.length;
  React.useEffect(function(){ if(solved&&tickRef.current){clearInterval(tickRef.current);} },[solved]);
  function tapName(id){ if(matched[id]!==undefined||solved) return; setSelN(id); setWrong(null); }
  function tapForm(id){
    if(matched[id]!==undefined||solved) return;
    if(selN===null){ return; }
    setMoves(function(m){return m+1;});
    if(selN===id){ setMatched(function(o){var n=Object.assign({},o);n[id]=true;return n;}); setSelN(null); setWrong(null); }
    else { setWrong({n:selN,f:id}); var sv=selN; setSelN(null); setTimeout(function(){setWrong(null);},520); }
  }
  var secs=Math.max(0,Math.round((( solved? nowT : nowT)-t0)/1000));

  // ---------- RENDER ----------
  var header=e("div",{className:"nav"},
    e("button",{className:"btn btn-g",style:{fontSize:13,padding:"6px 12px"},onClick:onExit},"← Natrag"),
    e("span",{className:"ntitle"},"📐 Formule i tablice"),
    e("span",{className:"nsp"}));

  var modeTabs=e("div",{style:{display:"flex",gap:8,margin:"6px 0 16px"}},
    [["browse","📖 Formule"],["game","🎮 Spoji formule"]].map(function(m){var on=mode===m[0];
      return e("button",{key:m[0],onClick:function(){setMode(m[0]);},style:{flex:1,padding:"9px 12px",borderRadius:10,border:"1px solid "+(on?"var(--blue-b)":"var(--bdr)"),background:on?"var(--blue-d)":"var(--s1)",color:on?"var(--blue)":"var(--muted)",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"var(--fb)"}},m[1]);}));

  if(mode==="game"){
    var gameBody = gamePool.length<SIZE
      ? e("div",{style:{textAlign:"center",color:"var(--muted)",padding:20}},"Nedovoljno formula za igru.")
      : e("div",null,
        e("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14,fontSize:13,fontWeight:700,color:"var(--muted)"}},
          e("span",null,"✅ "+doneCount+"/"+round.length),
          e("span",null,"⏱ "+secs+"s"),
          e("span",null,"🎯 "+moves+" poteza"),
          e("button",{onClick:newRound,style:{marginLeft:"auto",fontSize:11.5,fontWeight:700,padding:"5px 12px",borderRadius:99,border:"1px solid var(--bdr2)",background:"var(--s1)",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)"}},"↻ Nova runda")),
        solved&&e("div",{style:{padding:"14px 16px",borderRadius:12,background:"var(--green-d, rgba(80,200,120,.15))",border:"1px solid rgba(80,200,120,.4)",marginBottom:14,textAlign:"center"}},
          e("div",{style:{fontSize:16,fontWeight:800,color:"var(--green)",marginBottom:4}},"🎉 Sve spojeno!"),
          e("div",{style:{fontSize:13,color:"var(--text)"}},round.length+"/"+round.length+" u "+secs+"s · "+moves+" poteza"),
          e("button",{className:"btn btn-blue",style:{marginTop:12},onClick:newRound},"▶ Nova runda")),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:2}},"Naziv"),
            names.map(function(it){var done=matched[it.id]!==undefined;var sel=selN===it.id;var isW=wrong&&wrong.n===it.id;
              return e("div",{key:it.id,onClick:function(){tapName(it.id);},style:{padding:"11px 12px",borderRadius:10,fontSize:12.5,fontWeight:600,cursor:done?"default":"pointer",lineHeight:1.3,
                border:"1px solid "+(done?"rgba(80,200,120,.45)":isW?"var(--red)":sel?"var(--blue-b)":"var(--bdr)"),
                background:done?"rgba(80,200,120,.14)":isW?"var(--red-d)":sel?"var(--blue-d)":"var(--s1)",
                color:done?"var(--green)":sel?"var(--blue)":"var(--text)",opacity:done?.7:1,transition:"all .15s"}},it.n);})),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
            e("div",{style:{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:2}},"Formula"),
            forms.map(function(it){var done=matched[it.id]!==undefined;var isW=wrong&&wrong.f===it.id;
              return e("div",{key:it.id,onClick:function(){tapForm(it.id);},style:{padding:"11px 12px",borderRadius:10,fontSize:13,cursor:done?"default":"pointer",lineHeight:1.4,minHeight:20,
                border:"1px solid "+(done?"rgba(80,200,120,.45)":isW?"var(--red)":"var(--bdr)"),
                background:done?"rgba(80,200,120,.14)":isW?"var(--red-d)":"var(--s1)",
                color:done?"var(--green)":"var(--text)",opacity:done?.7:1,transition:"all .15s"}},FR(it.f));}))
        ),
        e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:14,fontStyle:"italic"}},"Dodirni naziv pa pripadnu formulu."));
    return e("div",{className:"home",style:{maxWidth:680,margin:"0 auto",padding:"14px 16px"}}, header, modeTabs, gameBody);
  }

  // browse mode
  var ql=query.trim().toLowerCase();
  return e("div",{className:"home",style:{maxWidth:680,margin:"0 auto",padding:"14px 16px"}},
    header, modeTabs,
    e("input",{value:query,onChange:function(ev){setQuery(ev.target.value);},placeholder:"🔍 Traži formulu (npr. kvadratna, sinus, kugla)…",
      style:{width:"100%",padding:"11px 14px",borderRadius:10,border:"1px solid var(--bdr)",background:"var(--s1)",color:"var(--text)",fontSize:13.5,fontFamily:"var(--fb)",marginBottom:14,boxSizing:"border-box"}}),
    FORMULE_DATA.map(function(sec,si){
      var items=ql?sec.items.filter(function(it){return it.n.toLowerCase().indexOf(ql)>=0;}):sec.items;
      if(ql&&items.length===0) return null;
      var isOpen=ql?true:!!openSec[si];
      return e("div",{key:si,style:{marginBottom:10,border:"1px solid var(--bdr)",borderRadius:12,overflow:"hidden",background:"var(--s1)"}},
        e("div",{onClick:function(){if(!ql)setOpenSec(function(o){var n=Object.assign({},o);n[si]=!n[si];return n;});},
          style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",cursor:ql?"default":"pointer",background:"var(--s2)"}},
          e("span",{style:{fontSize:17}},sec.ic),
          e("span",{style:{fontFamily:"var(--fh)",fontSize:14.5,flex:1}},sec.t),
          sec.vsa&&e("span",{style:{fontSize:9.5,fontWeight:700,padding:"2px 7px",borderRadius:99,background:"var(--gold-d)",color:"var(--gold)",border:"1px solid var(--gold-b)"}},"VIŠA"),
          !ql&&e("span",{style:{fontSize:13,color:"var(--muted)"}},isOpen?"▲":"▼")),
        isOpen&&e("div",{style:{padding:"4px 0"}},
          items.map(function(it,ii){
            return e("div",{key:ii,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderTop:ii>0?"1px solid var(--bdr)":"none"}},
              e("div",{style:{flex:"0 0 38%",fontSize:12.5,fontWeight:600,color:"var(--muted)",lineHeight:1.3}},it.n),
              e("div",{style:{flex:1,fontSize:13.5,color:"var(--text)",lineHeight:1.5,wordBreak:"break-word"}},FR(it.f)));
          }))
      );
    }),
    e("div",{style:{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:8,padding:"12px",lineHeight:1.5,fontStyle:"italic"}},
      "Pregled ključnih formula za državnu maturu iz matematike (razine A i B). Viša razina uključuje derivacije i integrale.")
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
