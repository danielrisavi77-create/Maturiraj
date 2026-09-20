// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Stanje predmeta/plana, DS store + most prema parentu, oznake tema, formule. */
export const __MAT = { Q_IMAGES: {} };

export let IS_PRO = false;
// Tier i plan dolaze iz DISCERE_CONFIG-a (jedan izvor istine u platformi).
export let IS_PAID = false;
export let PLAN_NAME = "Pro";
// Fallback na trenutnu produkcijsku cijenu dok DISCERE_CONFIG ne stigne (ili je ne salje),
// da paywall CTA nikad ne ostane bez cijene.
export let PLAN_PRICE = "19,99 €/mj";
// Vjezbanje, pregled odgovora i razrada rezultata otkljucavaju se Standardom, a ne Prom
// (PLAN_NAME/PLAN_PRICE su Pro-only znacajke: AI asistent, AI analiza, AI plan).
export let STD_PLAN_NAME = "Standard";
export let STD_PLAN_PRICE = "9,99 €/mj";
// Besplatan ispitni mod: pravi ispit s timerom je besplatan na SVIM ispitima, a "locked" od
// sada znaci samo da je vjezbanje nad tim ispitom zakljucano. Zastavica stize iz DISCERE_CONFIG-a
// (MatFullSimulator salje freeExam:true) i cita se getterom jer se mijenja nakon importa.
let FREE_EXAM = false;
export function isFreeExam(){ return FREE_EXAM; }
// CTA tekst za zaključane značajke: naziv plana + cijena iz configa.
export function planCta(){ return "🔒 Otključaj uz "+PLAN_NAME+(PLAN_PRICE?" — "+PLAN_PRICE:""); }
// Vjezbanje i razrada rezultata su Standard, ne Pro — zato zaseban CTA.
export function standardCta(){ return "🔒 Otključaj uz "+STD_PLAN_NAME+(STD_PLAN_PRICE?" — "+STD_PLAN_PRICE:""); }
export const MAT_RESULTS_UPGRADE_URL="/pro?from=mat-results&plan=standard";
// Poruka parentu da korisnik želi nadogradnju; from/plan odreduju povratnu rutu i
// preselektirani plan na /pro (bez njih korisnik zavrsi na /pro?from=discere).
export function askUpgrade(from,plan){ try{ const msg={type:"DISCERE_UPGRADE",from:from||"discere",plan:plan||undefined};
  if(typeof window!=="undefined"&&window.__DISCERE_NATIVE_SAVE__){ window.__DISCERE_NATIVE_SAVE__(msg); return; }
  if(typeof window!=="undefined"&&window.parent&&window.parent!==window) window.parent.postMessage(msg,"*");
}catch(x){} }
// Per-subject branding/config singleton (Prirodni-engine family: mat/fiz/kem/bio).
// Defaults preserve current mat behavior for any caller that never sets this.
export let SUBJECT = {
  id: 'mat', name: 'Matematika', shortName: 'Matematika',
  symbol: '∑', storagePrefix: 'mat_', appId: 'discere-mat',
  navLabel: '∑ Matematika',
  onboardingTitle: 'Što je Discere Matematika?',
  shareTitle: '📐 Matematika  -  Državna matura',
  shareLogo: '∑ Discere - Matematika · Državna matura',
  docTitleTpl: function(razina){ return 'Matematika '+(razina||'A·B')+' — Simulator mature · maturiraj.hr'; },
};
// Rewrites the "mat_"-prefixed localStorage key literals scattered through this
// file to the active subject's prefix, so fiz/kem/bio don't collide with mat
// (or each other) in the same browser's localStorage. Call sites keep their
// original "mat_..." literals; only the actual storage key is remapped.
export function __rk(k){ return (typeof k==='string' && k.indexOf('mat_')===0) ? SUBJECT.storagePrefix+k.slice(4) : k; }
export function __setSubject(cfg){
  SUBJECT = Object.assign({}, SUBJECT, cfg);
  if (cfg && cfg.topicLabels) TOPIC_LABELS = cfg.topicLabels;
  if (cfg && cfg.formule) FORMULE_DATA = cfg.formule;
}
export const DS = (function(){
  const timers={};
  let linked=false;
  function lg(k){try{return localStorage.getItem(__rk(k))}catch(e){return null}}
  function ls(k,v){try{localStorage.setItem(__rk(k),v)}catch(e){}}
  function ld(k){try{localStorage.removeItem(__rk(k))}catch(e){}}
  function toParent(msg){try{if(typeof window!=="undefined"&&window.__DISCERE_NATIVE_SAVE__){window.__DISCERE_NATIVE_SAVE__(msg);return;}if(window.parent&&window.parent!==window)window.parent.postMessage(msg,"*");}catch(e){}}
  return {
    get(key){ return lg(key); },
    set(key,value){ ls(key,value); clearTimeout(timers[key]); timers[key]=setTimeout(()=>toParent({type:"DISCERE_SAVE",key,value}),600); },
    remove(key){ ld(key); toParent({type:"DISCERE_SAVE",key,value:null}); },
    hydrate(state){ if(!state||typeof state!=="object")return []; const ap=[]; Object.keys(state).forEach(k=>{const v=state[k]; if(v==null)return; ls(k, typeof v==="string"?v:JSON.stringify(v)); ap.push(k);}); linked=true; return ap; },
    isLinked(){ return linked; }
  };
})();
try {
  // Prihvati postMessage iz Next.js parent framea
  window.addEventListener("message", function(ev){
    const d=ev.data; if(!d) return;
    if(d.type==="DISCERE_CONFIG"){
      IS_PRO = !!d.isPro;
      // isPaid = bilo koji plaćeni plan (Standard ili Pro); fallback na isPro za starije parentove.
      IS_PAID = (d.isPaid===undefined||d.isPaid===null) ? !!d.isPro : !!d.isPaid;
      // Ispitni mod besplatan na svim ispitima (parent salje freeExam:true).
      FREE_EXAM = !!d.freeExam;
      if(d.planName) PLAN_NAME = String(d.planName);
      if(d.price!==undefined&&d.price!==null&&d.price!=="") PLAN_PRICE = String(d.price);
      if(d.standardPlanName) STD_PLAN_NAME = String(d.standardPlanName);
      if(d.standardPrice!==undefined&&d.standardPrice!==null&&d.standardPrice!=="") STD_PLAN_PRICE = String(d.standardPrice);
      try{window.__DISCERE_TIER__={isPro:IS_PRO,isPaid:IS_PAID,planName:PLAN_NAME,price:PLAN_PRICE};}catch(e){}
      try{window.dispatchEvent(new CustomEvent("discere-pro",{detail:IS_PRO}));}catch(e){}
    }
    else if(d.type==="DISCERE_HYDRATE"){ window.__DISCERE_HYDRATE__ = d.state||{}; try{window.dispatchEvent(new CustomEvent("discere-hydrate"));}catch(e){} }
  });
} catch(e){}
export let TOPIC_LABELS={
  "br":   "Skupovi i brojevi",
  "skupovi":"Skupovi i brojevi",
  "al":   "Algebarski izrazi",
  "alg":  "Algebarski izrazi",
  "lin":  "Linearne funkcije",
  "kv":   "Kvadratne funkcije",
  "exp":  "Eksponencijalne i log.",
  "ek":   "Eksponencijalne i log.",
  "eks":  "Eksponencijalne i log.",
  "log":  "Eksponencijalne i log.",
  "trig": "Trigonometrija",
  "trg":  "Trigonometrija",
  "geom": "Geometrija",
  "geo":  "Geometrija",
  "ge":   "Geometrija",
  "3d":   "Geometrija",
  "pov":  "Geometrija",
  "anal": "Analitička geometrija",
  "koo":  "Analitička geometrija",
  "kon":  "Analitička geometrija",
  "vek":  "Analitička geometrija",
  "vekt": "Analitička geometrija",
  "seq":  "Nizovi i redovi",
  "niz":  "Nizovi i redovi",
  "nizovi":"Nizovi i redovi",
  "red":  "Nizovi i redovi",
  "lim":  "Nizovi i redovi",
  "limes":"Nizovi i redovi",
  "stat": "Statistika i vjerojatnost",
  "st":   "Statistika i vjerojatnost",
  "ver":  "Statistika i vjerojatnost",
  "vjer": "Statistika i vjerojatnost",
  "fin":  "Financijska matematika",
  "pos":  "Financijska matematika",
  "mat":  "Matrice i sustavi",
  "je":   "Matrice i sustavi",
  "jed":  "Matrice i sustavi",
  "ne":   "Matrice i sustavi",
  "neje": "Matrice i sustavi",
  "comb": "Kombinatorika",
  "komb": "Kombinatorika",
  "komp": "Kombinatorika",
  "kompl":"Kombinatorika",
  "kompleks":"Kompleksni brojevi",
  "func": "Funkcije",
  "fn":   "Funkcije",
  "fnk":  "Funkcije",
  "fun":  "Funkcije",
  "funk": "Funkcije",
  "funkc":"Funkcije",
  "grf":  "Funkcije",
  "der":  "Derivacije i integrali",
  "de":   "Derivacije i integrali",
  "dif":  "Derivacije i integrali",
  "kp":   "Derivacije i integrali",
  "om":   "Ostalo",
  "omj":  "Ostalo",
  "omjer":"Ostalo",
  "opt":  "Ostalo",
  "ord":  "Ostalo",
  "mj":   "Ostalo",
  "ostalo":"Ostalo"
};

export var FORMULE_DATA=[
  {t:"Algebra",ic:"🔢",items:[
    {n:"Kvadratna jednadžba",f:"ax² + bx + c = 0 ⇒ x₁,₂ = [FRAC:−b ± √(b²−4ac)|2a]"},
    {n:"Diskriminanta",f:"D = b² − 4ac"},
    {n:"Vièteove formule",f:"x₁ + x₂ = −[FRAC:b|a],  x₁ · x₂ = [FRAC:c|a]"},
    {n:"Razlika kvadrata",f:"a² − b² = (a − b)(a + b)"},
    {n:"Kvadrat zbroja",f:"(a + b)² = a² + 2ab + b²"},
    {n:"Kvadrat razlike",f:"(a − b)² = a² − 2ab + b²"},
    {n:"Kub zbroja",f:"(a + b)³ = a³ + 3a²b + 3ab² + b³"},
    {n:"Kub razlike",f:"(a − b)³ = a³ − 3a²b + 3ab² − b³"},
    {n:"Zbroj kubova",f:"a³ + b³ = (a + b)(a² − ab + b²)"},
    {n:"Razlika kubova",f:"a³ − b³ = (a − b)(a² + ab + b²)"},
    {n:"Potencije — množenje",f:"aᵐ · aⁿ = aᵐ⁺ⁿ"},
    {n:"Potencije — dijeljenje",f:"[FRAC:aᵐ|aⁿ] = aᵐ⁻ⁿ"},
    {n:"Potencija potencije",f:"(aᵐ)ⁿ = aᵐ·ⁿ"},
    {n:"Negativni eksponent",f:"a⁻ⁿ = [FRAC:1|aⁿ],   a⁰ = 1"},
    {n:"Racionalni eksponent",f:"a^([FRAC:m|n]) = ⁿ√(aᵐ)"},
    {n:"Logaritam — produkt",f:"logₐ(x · y) = logₐx + logₐy"},
    {n:"Logaritam — kvocijent",f:"logₐ([FRAC:x|y]) = logₐx − logₐy"},
    {n:"Logaritam — potencija",f:"logₐ(xⁿ) = n · logₐx"},
    {n:"Promjena baze",f:"logₐx = [FRAC:log x|log a]"}
  ]},
  {t:"Nizovi",ic:"📈",items:[
    {n:"Aritmetički — opći član",f:"aₙ = a₁ + (n − 1)d"},
    {n:"Aritmetički — suma",f:"Sₙ = [FRAC:n(a₁ + aₙ)|2]"},
    {n:"Geometrijski — opći član",f:"aₙ = a₁ · qⁿ⁻¹"},
    {n:"Geometrijski — suma",f:"Sₙ = a₁ · [FRAC:qⁿ − 1|q − 1],  q ≠ 1"},
    {n:"Beskonačni geometrijski red",f:"S = [FRAC:a₁|1 − q],  |q| < 1"}
  ]},
  {t:"Funkcije",ic:"📐",items:[
    {n:"Linearna funkcija",f:"f(x) = kx + l   (k = koeficijent smjera)"},
    {n:"Kvadratna funkcija",f:"f(x) = ax² + bx + c"},
    {n:"Tjeme parabole",f:"T(−[FRAC:b|2a], −[FRAC:D|4a])"},
    {n:"Eksponencijalna",f:"f(x) = aˣ   (a > 0, a ≠ 1)"},
    {n:"Logaritamska",f:"f(x) = logₐx   (a > 0, a ≠ 1)"}
  ]},
  {t:"Planimetrija",ic:"📏",items:[
    {n:"Pitagorin poučak",f:"a² + b² = c²"},
    {n:"Površina trokuta",f:"P = [FRAC:a · vₐ|2]"},
    {n:"Heronova formula",f:"P = √(s(s−a)(s−b)(s−c)),  s = [FRAC:a+b+c|2]"},
    {n:"Jednakostraničan trokut",f:"P = [FRAC:a²√3|4],  v = [FRAC:a√3|2]"},
    {n:"Kvadrat",f:"P = a²,  d = a√2"},
    {n:"Pravokutnik",f:"P = a · b,  d = √(a²+b²)"},
    {n:"Paralelogram",f:"P = a · vₐ"},
    {n:"Romb",f:"P = [FRAC:d₁ · d₂|2]"},
    {n:"Trapez",f:"P = [FRAC:(a + c) · v|2]"},
    {n:"Krug",f:"P = r²π,  O = 2rπ"},
    {n:"Duljina kružnog luka",f:"l = [FRAC:rπα|180°]   (α u °)"},
    {n:"Površina kružnog isječka",f:"P = [FRAC:r²πα|360°]"}
  ]},
  {t:"Stereometrija",ic:"🧊",items:[
    {n:"Kocka",f:"V = a³,  O = 6a²,  D = a√3"},
    {n:"Kvadar",f:"V = abc,  O = 2(ab + bc + ca)"},
    {n:"Prizma",f:"V = B · h"},
    {n:"Valjak",f:"V = r²πh,  O = 2rπ(r + h)"},
    {n:"Stožac",f:"V = [FRAC:r²πh|3],  O = rπ(r + s)"},
    {n:"Kugla",f:"V = [FRAC:4|3]r³π,  O = 4r²π"},
    {n:"Piramida",f:"V = [FRAC:B · h|3]"}
  ]},
  {t:"Trigonometrija",ic:"📐",items:[
    {n:"Definicije (pravokutni trokut)",f:"sin α = [FRAC:nasuprotna|hipotenuza],  cos α = [FRAC:priležeća|hipotenuza]"},
    {n:"Tangens",f:"tan α = [FRAC:sin α|cos α] = [FRAC:nasuprotna|priležeća]"},
    {n:"Osnovni identitet",f:"sin²α + cos²α = 1"},
    {n:"Sinusov poučak",f:"[FRAC:a|sin α] = [FRAC:b|sin β] = [FRAC:c|sin γ] = 2R"},
    {n:"Kosinusov poučak",f:"c² = a² + b² − 2ab · cos γ"},
    {n:"Površina trokuta (trig.)",f:"P = [FRAC:1|2] · a · b · sin γ"},
    {n:"Vrijednosti — sin",f:"sin 0°=0,  30°=[FRAC:1|2],  45°=[FRAC:√2|2],  60°=[FRAC:√3|2],  90°=1"},
    {n:"Adicijske (sin)",f:"sin(α ± β) = sin α cos β ± cos α sin β"},
    {n:"Adicijske (cos)",f:"cos(α ± β) = cos α cos β ∓ sin α sin β"}
  ]},
  {t:"Analitička geometrija",ic:"📍",items:[
    {n:"Udaljenost dviju točaka",f:"d = √((x₂−x₁)² + (y₂−y₁)²)"},
    {n:"Polovište dužine",f:"P([FRAC:x₁+x₂|2], [FRAC:y₁+y₂|2])"},
    {n:"Koeficijent smjera",f:"k = [FRAC:y₂ − y₁|x₂ − x₁] = tan φ"},
    {n:"Jednadžba pravca kroz točku",f:"y − y₁ = k(x − x₁)"},
    {n:"Paralelnost / okomitost",f:"k₁ = k₂   |   k₁ · k₂ = −1"},
    {n:"Jednadžba kružnice",f:"(x − p)² + (y − q)² = r²"},
    {n:"Udaljenost točke od pravca",f:"d = [FRAC:|Ax₀ + By₀ + C||√(A² + B²)]"}
  ]},
  {t:"Kombinatorika i vjerojatnost",ic:"🎲",items:[
    {n:"Permutacije",f:"Pₙ = n!"},
    {n:"Varijacije (bez ponavljanja)",f:"Vₙᵏ = [FRAC:n!|(n − k)!]"},
    {n:"Kombinacije",f:"Cₙᵏ = [FRAC:n!|k!(n − k)!]"},
    {n:"Klasična vjerojatnost",f:"P(A) = [FRAC:broj povoljnih|broj svih ishoda]"},
    {n:"Suprotni događaj",f:"P(A′) = 1 − P(A),  P(A) ∈ [0, 1]"}
  ]},
  {t:"Derivacije (viša razina)",ic:"📉",vsa:true,items:[
    {n:"Potencija",f:"(xⁿ)′ = n · xⁿ⁻¹"},
    {n:"Sinus / kosinus",f:"(sin x)′ = cos x,  (cos x)′ = −sin x"},
    {n:"Eksponencijalna / logaritam",f:"(eˣ)′ = eˣ,  (ln x)′ = [FRAC:1|x]"},
    {n:"Opća eksponencijalna",f:"(aˣ)′ = aˣ · ln a"},
    {n:"Pravilo produkta",f:"(u · v)′ = u′v + uv′"},
    {n:"Pravilo kvocijenta",f:"([FRAC:u|v])′ = [FRAC:u′v − uv′|v²]"},
    {n:"Pravilo kompozicije",f:"(f(g(x)))′ = f′(g(x)) · g′(x)"},
    {n:"Jednadžba tangente",f:"y − f(x₀) = f′(x₀)(x − x₀)"}
  ]},
  {t:"Integrali (viša razina)",ic:"∫",vsa:true,items:[
    {n:"Potencija",f:"∫ xⁿ dx = [FRAC:xⁿ⁺¹|n + 1] + C,  n ≠ −1"},
    {n:"Recipročna",f:"∫ [FRAC:1|x] dx = ln|x| + C"},
    {n:"Eksponencijalna",f:"∫ eˣ dx = eˣ + C"},
    {n:"Sinus / kosinus",f:"∫ sin x dx = −cos x + C,  ∫ cos x dx = sin x + C"},
    {n:"Površina ispod krivulje",f:"P = ∫ₐᵇ f(x) dx"}
  ]}
];
