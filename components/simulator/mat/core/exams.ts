// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Katalog ispita, lazy loader i upiti nad njim (2.1). */
import { __MAT, isFreeExam } from './state';

export let EXAMS = {};
// ── 2.1: ispiti se ucitavaju na zahtjev ─────────────────────────────────────
// Engine vise ne dobiva gotov EXAMS (7 MB); dobiva katalog iz index.json i loader.
// Pitanja stizu s loadExam(key), a cross-exam modovi s loadAllExams(onProgress).
let __examLoader = null;
const __examSubs = new Set();
const __examPending = {};
// ── Besplatan ispitni mod na zakljucanim ispitima ───────────────────────────
// Ispit s timerom je besplatan na SVIM ispitima; zakljucan ispit znaci samo da je
// vjezbanje zakljucano. Pitanja takvog ispita zato NIKAD ne idu u EXAMS[key].qs —
// odatle ih citaju cross-exam modovi (SRS, browse, virtualni ispit, filter, adaptivni,
// flashcards, mixed, oznake, statistika, errorTracker…) i free korisnik bi dobio
// cijelu placenu banku. Drze se u __EXAM_ONLY i vidi ih samo ispitni mod.
const __EXAM_ONLY = {};
export function isExamOnlyLoaded(k){ return !!__EXAM_ONLY[k]; }
export function examOnlyQs(k){ const r=__EXAM_ONLY[k]; return r ? r.qs : []; }
export function examOnlyExam(k){ const r=__EXAM_ONLY[k]; return r ? r.exam : null; }
function __notifyExams(){ __examSubs.forEach(function(f){ try{ f(); }catch(e){} }); }
export function __onExamsChanged(fn){ __examSubs.add(fn); return function(){ __examSubs.delete(fn); }; }
export function __setExamLoader(fn){ __examLoader = (typeof fn === "function") ? fn : null; }
// Katalog = meta bez pitanja (index.json). Home se iscrtava bez ijednog chunka.
export function __setExamCatalog(list){
  const next = {};
  (list||[]).forEach(function(m){
    if(!m || !m.key) return;
    next[m.key] = { key:m.key, year:m.year, season:m.season, razina:m.razina, label:m.label,
      duration:(m.durationSec||m.duration), questionCount:(m.questionCount||0),
      locked:!!m.locked, qs:[], _loaded:false };
  });
  EXAMS = next;
  // Novi katalog = nova tier-odluka; stari side-store zakljucanih ispita vise ne vrijedi.
  Object.keys(__EXAM_ONLY).forEach(function(k){ delete __EXAM_ONLY[k]; });
  __notifyExams();
}
// Spajanje gotovih ispita (uvezeni/custom) — dolaze s pitanjima, nista se ne dohvaca.
export function __addExams(map){
  Object.keys(map||{}).forEach(function(k){ const x=map[k]; if(x) EXAMS[k]=Object.assign({},x,{_loaded:true}); });
  __notifyExams();
}
export function isExamLoaded(k){ const x=EXAMS[k]; return !!(x && (x._loaded || (x.qs && x.qs.length))); }
// Zakljucani ispiti se nikad ne dohvacaju (free tier ne smije dobiti placenu banku zadataka),
// pa "sve ucitano" znaci: svi ispiti koje ovaj korisnik uopce smije dobiti.
export function isExamLocked(k){ const x=EXAMS[k]; return !!(x && x.locked); }
function __loadableKeys(){ return Object.keys(EXAMS).filter(function(k){ return !isExamLocked(k); }); }
export function allExamsLoaded(){ return __loadableKeys().every(isExamLoaded); }
// Broj zadataka za prikaz: iz ucitanog ispita ako ga ima, inace questionCount iz index.json.
export function examQCount(ex){
  if(!ex) return 0;
  if(ex.qs && ex.qs.length) return ex.qs.length;
  return ex.questionCount || 0;
}
// forExamMode: poziv dolazi iz ispitnog moda (ili njegovog izbornika). Samo tada se
// zakljucan ispit uopce smije dohvatiti — i tada ide u __EXAM_ONLY, nikad u EXAMS[key].qs.
export function loadExam(key, quiet, forExamMode){
  const ex = EXAMS[key];
  if(!ex) return Promise.reject(new Error("Nepoznat ispit: "+key));
  const examOnly = !!(ex.locked && isFreeExam() && forExamMode);
  if(examOnly){ if(isExamOnlyLoaded(key)) return Promise.resolve(__EXAM_ONLY[key].exam); }
  else if(isExamLoaded(key)) return Promise.resolve(ex);
  if(ex.locked && !examOnly) return Promise.reject(new Error("Ispit je zakljucan: "+key));
  if(!__examLoader) return Promise.reject(new Error("Loader ispita nije postavljen."));
  // Zaseban pending kljuc: isti ispit moze istovremeno ici u EXAMS i u __EXAM_ONLY.
  const pk = examOnly ? ("exam-only:"+key) : key;
  if(__examPending[pk]) return __examPending[pk];
  __examPending[pk] = Promise.resolve().then(function(){ return __examLoader(key); }).then(function(m){
    const qs = (m && m.qs) ? m.qs.filter(function(q){ return q && !q._META; }) : [];
    // Prazan rezultat je greska, a ne "ucitan prazan ispit" — inace UI tiho udje u sesiju s 0 pitanja.
    if(!qs.length) throw new Error("Ispit "+key+" je stigao bez pitanja.");
    if(examOnly) __EXAM_ONLY[key] = { qs:qs, exam:Object.assign({}, EXAMS[key], { qs:qs, _loaded:true }) };
    else EXAMS[key] = Object.assign({}, EXAMS[key], { qs:qs, _loaded:true });
    if(m && m.qImages) Object.assign(__MAT.Q_IMAGES, m.qImages);
    delete __examPending[pk];
    if(!quiet) __notifyExams();
    return examOnly ? __EXAM_ONLY[key].exam : EXAMS[key];
  }).catch(function(err){
    delete __examPending[pk];
    try{ console.warn("[mat] loadExam", key, err); }catch(e){}
    throw err; // pozivatelj mora znati da ispit NIJE ucitan (prikaz greske + ponovni pokusaj)
  });
  return __examPending[pk];
}
// ── Meta-sazetak ispita (summary.json) ──────────────────────────────────────
// Po ispitu popis pitanja {id, topic, type, points, img} BEZ sadrzaja (tekst, opcije,
// rjesenja, koraci). Home iz njega racuna bazen Treninga dana, spremnost i pokrivenost
// tema, pa ne dohvaca nijedan exam chunk; puni ispit stize tek kad korisnik pokrene
// sesiju. Sadrzaja nema ni namjerno: sazetak dobiva i free korisnik, a kroz njega ne
// smije procuriti banka zakljucanih ispita.
let __SUMMARY = null;
export function __setSummary(s){
  const src = (s && s.exams) ? s.exams : (s || null);
  if(!src){ __SUMMARY = null; __notifyExams(); return; }
  const next = {};
  Object.keys(src).forEach(function(k){
    const rows = Array.isArray(src[k]) ? src[k] : (src[k] && src[k].questions);
    if(Array.isArray(rows)) next[k] = rows;
  });
  __SUMMARY = next;
  __notifyExams();
}
export function getSummary(){ return __SUMMARY; }
export function hasSummary(){ return !!__SUMMARY; }
// Meta-pitanja svih ispita koje ovaj korisnik smije vidjeti izvan ispitnog moda.
// Ucitan ispit ima prednost pred sazetkom (uvezeni/custom ispiti nisu u summary.json),
// a zakljucani su izostavljeni — isto kao dosad, gdje im je EXAMS[key].qs uvijek prazan.
export function summaryQuestions(){
  const out = [];
  Object.keys(EXAMS).forEach(function(k){
    const ex = EXAMS[k];
    if(!ex || isExamLocked(k)) return;
    const rows = (ex.qs && ex.qs.length) ? ex.qs : (__SUMMARY ? __SUMMARY[k] : null);
    if(!rows) return;
    rows.forEach(function(q){
      if(!q || q._META) return;
      out.push({ examKey:k, razina:ex.razina, id:q.id, topic:q.topic, type:q.type, points:q.points, img:!!q.img });
    });
  });
  return out;
}
// Postupno ucitavanje zadanih ispita uz progress (0..1). Trening dana tako dohvaca samo
// ispite iz kojih su izabrana pitanja (par chunkova), a ne cijelu banku.
// Pojedinacni pad ne rusi cijelu seriju — zabiljezi se i nastavlja se dalje.
export function loadExams(list, onProgress){
  const seen = {};
  const keys = (list||[]).filter(function(k){
    if(seen[k] || !EXAMS[k] || isExamLocked(k) || isExamLoaded(k)) return false;
    seen[k] = 1; return true;
  });
  const total = keys.length;
  if(!total || !__examLoader){ if(onProgress) onProgress(1); return Promise.resolve({total:0,failed:0}); }
  let done = 0, failed = 0;
  if(onProgress) onProgress(0);
  const B = 6;
  function step(i){
    if(i >= total){ __notifyExams(); return Promise.resolve({total:total,failed:failed}); }
    return Promise.all(keys.slice(i, i+B).map(function(k){
      return loadExam(k, true).catch(function(){ failed++; }).then(function(){ done++; if(onProgress) onProgress(done/total); });
    })).then(function(){ __notifyExams(); return step(i+B); });
  }
  return step(0);
}
// Postupno ucitavanje svih ispita uz progress (0..1) za cross-exam modove.
export function loadAllExams(onProgress){ return loadExams(__loadableKeys(), onProgress); }
export function __setExams(x) { EXAMS = x || {}; }
/* 5.3 (tools): rokovi mature i naslov ispita - dijele ih ekrani i mat/tools (DDayModal, ShareCard). */
export const MATURA_ROKOVI=[
  {m:5, d:25, label:"mature iz matematike"},
  {m:7, d:19, label:"jesenskog roka"}
];
export function nextMatura(){
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
export function examTitle(exam){return (exam.season==="session"||exam.season==="random")?exam.label:exam.year+".  -  "+exam.label;}
