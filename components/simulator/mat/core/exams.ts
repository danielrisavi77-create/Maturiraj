// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Katalog ispita, lazy loader i upiti nad njim (2.1). */
import { __MAT } from './state';

export let EXAMS = {};
// ── 2.1: ispiti se ucitavaju na zahtjev ─────────────────────────────────────
// Engine vise ne dobiva gotov EXAMS (7 MB); dobiva katalog iz index.json i loader.
// Pitanja stizu s loadExam(key), a cross-exam modovi s loadAllExams(onProgress).
let __examLoader = null;
const __examSubs = new Set();
const __examPending = {};
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
  EXAMS = next; __notifyExams();
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
export function loadExam(key, quiet){
  const ex = EXAMS[key];
  if(!ex) return Promise.reject(new Error("Nepoznat ispit: "+key));
  if(isExamLoaded(key)) return Promise.resolve(ex);
  if(ex.locked) return Promise.reject(new Error("Ispit je zakljucan: "+key));
  if(!__examLoader) return Promise.reject(new Error("Loader ispita nije postavljen."));
  if(__examPending[key]) return __examPending[key];
  __examPending[key] = Promise.resolve().then(function(){ return __examLoader(key); }).then(function(m){
    const qs = (m && m.qs) ? m.qs.filter(function(q){ return q && !q._META; }) : [];
    // Prazan rezultat je greska, a ne "ucitan prazan ispit" — inace UI tiho udje u sesiju s 0 pitanja.
    if(!qs.length) throw new Error("Ispit "+key+" je stigao bez pitanja.");
    EXAMS[key] = Object.assign({}, EXAMS[key], { qs:qs, _loaded:true });
    if(m && m.qImages) Object.assign(__MAT.Q_IMAGES, m.qImages);
    delete __examPending[key];
    if(!quiet) __notifyExams();
    return EXAMS[key];
  }).catch(function(err){
    delete __examPending[key];
    try{ console.warn("[mat] loadExam", key, err); }catch(e){}
    throw err; // pozivatelj mora znati da ispit NIJE ucitan (prikaz greske + ponovni pokusaj)
  });
  return __examPending[key];
}
// Postupno ucitavanje svih ispita uz progress (0..1) za cross-exam modove.
// Pojedinacni pad ne rusi cijelu seriju — zabiljezi se i nastavlja se dalje.
export function loadAllExams(onProgress){
  const keys = __loadableKeys().filter(function(k){ return !isExamLoaded(k); });
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
