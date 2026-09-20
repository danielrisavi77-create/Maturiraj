// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Lazy nerdamer (2.2), AI ruta /api/ai-simulator i kljuc registra slika. */
// ── 2.2: nerdamer (436 KB) tek kad zatreba — kalkulator, solver, provjera ───
let __ndPromise = null;
export function __ensureNerdamer(){
  if(typeof window === "undefined") return Promise.resolve(null);
  if(window.nerdamer) return Promise.resolve(window.nerdamer);
  if(__ndPromise) return __ndPromise;
  __ndPromise = new Promise(function(res){
    try{
      if(window.__MAT_ENSURE_NERDAMER__){ window.__MAT_ENSURE_NERDAMER__().then(function(){ res(window.nerdamer||null); }); return; }
      const ID = "mat-nerdamer";
      let sc = document.getElementById(ID);
      if(!sc){
        sc = document.createElement("script");
        sc.id = ID; sc.src = "/sim/nerdamer.js"; sc.async = true;
        document.head.appendChild(sc);
      }
      sc.addEventListener("load", function(){ res(window.nerdamer||null); }, {once:true});
      sc.addEventListener("error", function(){ res(null); }, {once:true});
    }catch(e){ res(null); }
  });
  return __ndPromise;
}
// 1.6: id zadatka zna imati zarez ("37,1"), registar slika koristi točku ("37.1").
export function __imgKey(ek,q){ const id=(q&&q._origId!==undefined)?q._origId:(q&&q.id); return String(ek)+"__"+String(id).replace(/,/g,"."); }
// Jedinstveni AI poziv: ruta /api/ai-simulator, model bira server.
export let __AI_LAST_ERR="";
export function __aiErrMsg(){ return __AI_LAST_ERR||"Greška pri generiranju. Pokušaj ponovo."; }
export function __aiPost(prompt,maxTokens){
  __AI_LAST_ERR="";
  return fetch("/api/ai-simulator",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({max_tokens:maxTokens,messages:[{role:"user",content:prompt}]})})
    .then(function(r){
      if(r.status===429){ const ra=r.headers.get("Retry-After"); __AI_LAST_ERR="Previše zahtjeva. Pokušaj ponovo za "+(ra||"10")+" s."; throw new Error("rate_limited"); }
      if(r.status===503){ __AI_LAST_ERR="AI je privremeno nedostupan. Pokušaj kasnije."; throw new Error("unavailable"); }
      if(!r.ok){ __AI_LAST_ERR="Greška pri generiranju. Pokušaj ponovo."; throw new Error("http_"+r.status); }
      return r.json();
    });
}
