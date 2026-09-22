// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Grafovi statistike: mapa znanja, prsten rezultata, trend i brojac. */
import React from 'react';
import { TOPIC_LABELS } from '../core/state';
import { GC, GLBL, SHORT_LABELS } from '../core/ui';
const{createElement:e,useState,useEffect}=React;
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
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion:reduce)";
function subscribeReducedMotion(notify){
  if(!window.matchMedia) return ()=>{};
  const query=window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change",notify);
  return ()=>query.removeEventListener("change",notify);
}
function reducedMotionSnapshot(){
  return typeof window!=="undefined"&&!!window.matchMedia?.(REDUCED_MOTION_QUERY).matches;
}
const serverReducedMotionSnapshot=()=>false;
function CountUp({to,duration,suffix}){
  const[v,setV]=React.useState(0);
  const raf=React.useRef(null);
  const reducedMotion=React.useSyncExternalStore(subscribeReducedMotion,reducedMotionSnapshot,serverReducedMotionSnapshot);
  React.useEffect(()=>{
    if(reducedMotion) return;
    const target=+to||0,dur=duration||700,t0=performance.now();
    cancelAnimationFrame(raf.current);
    const tick=(t)=>{const p=Math.min(1,(t-t0)/dur);const ease=1-Math.pow(1-p,3);
      setV(Math.round(target*ease));if(p<1)raf.current=requestAnimationFrame(tick);};
    raf.current=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf.current);
  },[to,duration,reducedMotion]);
  return e(React.Fragment,null,String(reducedMotion?(+to||0):v)+(suffix||""));
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
export { KnowledgeMap, CountUp, AnimatedRing, TrendChart };
