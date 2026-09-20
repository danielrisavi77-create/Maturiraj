// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Napredak ucenika: postotak -> ocjena, XP po ispitu i dnevni niz (streak). */
export function grade(p){return p>=85?5:p>=70?4:p>=55?3:p>=40?2:1}
export function calcXpGain(pct,total){return Math.round(pct*0.5+total*2+(pct>=70?20:0))}
export function updateStreak(prev){
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
