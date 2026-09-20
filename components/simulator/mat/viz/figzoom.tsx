// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Zoom slike zadatka (FigZoom overlay + ZoomableFig omotac). */
import React from 'react';
import { useEscape } from '../core/ui';
const{createElement:e}=React;
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
    React.createElement("div",{onClick:ev=>ev.stopPropagation(),onMouseDown:onMouseDown,onMouseMove:onMouseMove,onMouseUp:endDrag,onMouseLeave:endDrag,onWheel:onWheel,onTouchStart:onTouchStart,onTouchMove:onTouchMove,onTouchEnd:onTouchEnd,onDoubleClick:reset,
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
export { FigZoom, ZoomableFig };
