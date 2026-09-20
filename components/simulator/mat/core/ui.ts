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
