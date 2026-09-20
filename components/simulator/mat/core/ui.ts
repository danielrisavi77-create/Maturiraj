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
