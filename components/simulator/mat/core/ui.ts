// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Zajednicke UI konstante i hookovi koje dijele core i mat/viz/*. */
import React from 'react';
export const GLBL={1:"Nedovoljan",2:"Dovoljan",3:"Dobar",4:"Vrlo dobar",5:"Odličan"};
export const GC={1:"var(--red)",2:"#f97316",3:"var(--gold)",4:"#60a5fa",5:"var(--green)"};
export var SHORT_LABELS={"Skupovi i brojevi":"Skupovi","Algebarski izrazi":"Algebra","Linearne funkcije":"Linearne","Kvadratne funkcije":"Kvadratne","Eksponencijalne i log.":"Eksp/Log","Trigonometrija":"Trig","Geometrija":"Geometrija","Analitička geometrija":"Analit.geo","Nizovi i redovi":"Nizovi","Statistika i vjerojatnost":"Statistika","Financijska matematika":"Financije","Matrice i sustavi":"Sustavi","Kombinatorika":"Kombinat.","Kompleksni brojevi":"Kompleksni","Funkcije":"Funkcije","Derivacije i integrali":"Derivacije"};
export function useEscape(active,onClose){
  React.useEffect(()=>{
    if(!active)return;
    const h=ev=>{if(ev.key==="Escape"){ev.stopPropagation();onClose();}};
    document.addEventListener("keydown",h);
    return()=>document.removeEventListener("keydown",h);
  },[active,onClose]);
}
/* 5.3 (tools): XP razine i nazivi razina - dijele ih Home/App i ShareCard iz mat/tools. */
export const XP_LEVELS=[0,100,250,450,700,1000,1400,1900,2500,3200,4000];
export const LEVEL_NAMES={0:"Početnik",1:"Vježbač",2:"Student",3:"Napredni",4:"Stručnjak",5:"Majstor",6:"Ekspert",7:"Prvak",8:"Legenda",9:"Matematičar",10:"Genijalac"};
export function getLevel(xp){let l=0;for(let i=0;i<XP_LEVELS.length;i++){if(xp>=XP_LEVELS[i])l=i;}return l;}
/* 5.3 (screens): oznake tipa zadatka i slova opcija - dijele ih engine i mat/screens. */
export const TLBL={mc:"Jedan odgovor",num:"Numerički",calc:"Izračun",sa:"Kratki odgovor",pa:"Produženi odgovor",proof:"Dokaz/Opis"};
export const TBDG={mc:"b-mc",num:"b-num",calc:"b-calc",sa:"b-sa",pa:"b-proof",proof:"b-proof"};
export const LL=["A","B","C","D","E"];
/* 5.3 (sim): konfeti efekt - dijele ga Sim i App (zavrsetak ispita, otkljucano postignuce). */
export function fireConfetti(){
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
