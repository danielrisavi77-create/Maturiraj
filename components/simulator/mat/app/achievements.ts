// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Postignuca (znacke): razine/medalje i katalog s funkcijama napretka. */
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
export { TIER_MEDAL, TIER_NAME, achLevel, achNext, ACHIEVEMENTS };
