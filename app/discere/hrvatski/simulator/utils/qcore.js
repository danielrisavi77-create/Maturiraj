// Ciste funkcije nad pitanjima, bez Reacta i bez preglednickih API-ja.
// Odvojene od helpers.js jer helpers.js uvozi useState/useEffect/useRef, a ovaj modul
// preko pedagogy.js -> lib/learning/hrv-engine.ts zavrsava u serverskim route handlerima
// (app/api/game/discere-attempts, app/api/game/sessions/[sessionId]/complete). Pod
// react-server uvjetom ti hookovi ne postoje, pa bi uvoz rusio rutu.

export function chk(q,a){
  if(!a&&a!==0) return null;
  if(q.type==="mc"){return a===q.sol.cl;}
  if(q.type==="mat"){if(!a||typeof a!=="object") return null; return q.sol.pairs.every(p=>a[p.l]===p.r);}
  return null;
}

// Identitet pitanja: virtualne sesije (dnevni izazov, adaptivni trening, filter, greške,
// oznake) kopiraju pitanja iz više ispita i renumeriraju im id-eve, pa se izvorni ispit i
// izvorni id čuvaju u _examKey/_srcId. Sve što se sprema ili traži po ispitu (bookmarci,
// errorTracker, skripte, distraktori) mora ići preko ovoga, a ne preko exam.key/q.id.
export function qIdentity(q,exam){
  return{examKey:q?._examKey??exam?.key,qid:q?._srcId??q?.id};
}
