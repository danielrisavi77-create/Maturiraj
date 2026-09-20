// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Pomoc uz zadatak: tipovi pogresaka, samoobjasnjenje, pojmovnik, zagrijavanje i savjeti za slabe teme. */
import React from 'react';
const{createElement:e,useState,useEffect,useMemo,useRef,Fragment}=React;
var MISCONCEPTIONS={
 "Skupovi i brojevi":{title:"Provjeri pripadnost skupu",tip:"ℕ⊂ℤ⊂ℚ⊂ℝ⊂ℂ. √2 i π su iracionalni (∉ℚ); provjeri je li 0∈ℕ po NCVVO definiciji."},
 "Algebarski izrazi":{title:"Razlika kvadrata i kraćenje",tip:"a²−b²=(a−b)(a+b). Krati samo zajedničke faktore, nikad članove zbroja. Pazi predznak pri množenju zagrada."},
 "Linearne funkcije":{title:"Nagib i odsječak",tip:"y=kx+l: k je nagib (Δy/Δx), l odsječak na y-osi. Paralelni pravci imaju isti k, okomiti k₁·k₂=−1."},
 "Kvadratne funkcije":{title:"Ne zaboravi ± i diskriminantu",tip:"x=(−b±√D)/(2a), D=b²−4ac. Provjeri predznak D prije korjenovanja. Tjeme: x=−b/(2a)."},
 "Eksponencijalne i log.":{title:"Domena logaritma",tip:"logₐx postoji samo za x>0, a>0, a≠1. log(a·b)=log a+log b, ali log(a+b)≠log a+log b."},
 "Trigonometrija":{title:"Stupnjevi/radijani + kvadrant",tip:"Provjeri mjernu jedinicu kuta. SOH-CAH-TOA vrijedi samo u pravokutnom trokutu. Pazi predznak po kvadrantu."},
 "Geometrija":{title:"Površina vs opseg, jedinice",tip:"Ne miješaj formule za P i O. Provjeri jedinice (cm naspram cm²). Pitagora samo u pravokutnom trokutu."},
 "Analitička geometrija":{title:"Udaljenost i kružnica",tip:"d=√((x₂−x₁)²+(y₂−y₁)²). Kružnica: (x−p)²+(y−q)²=r²; pazi na predznak središta."},
 "Nizovi i redovi":{title:"Aritmetički vs geometrijski",tip:"Aritm.: aₙ=a₁+(n−1)d. Geom.: aₙ=a₁·qⁿ⁻¹. Suma GP postoji za |q|<1: S=a₁/(1−q)."},
 "Statistika i vjerojatnost":{title:"Sredina, medijan, komplement",tip:"Aritm. sredina=Σx/n; medijan=srednji poredani podatak. P(A′)=1−P(A); 'i'→množi, 'ili'(disjunktno)→zbrajaj."},
 "Financijska matematika":{title:"Postotak = ×(1±p/100)",tip:"Povećanje za p%: ×(1+p/100). Složeni kamatni: C=C₀·(1+p/100)ⁿ. Razlikuj jednostavni i složeni obračun."},
 "Matrice i sustavi":{title:"Predznak i provjera rješenja",tip:"Pri premještanju člana kroz jednakost mijenja se predznak. Uvrsti rješenje u OBJE jednadžbe za provjeru."},
 "Kombinatorika":{title:"Permutacije vs kombinacije",tip:"Bitan poredak → permutacije/varijacije; nije bitan → kombinacije C(n,k)=n!/(k!(n−k)!)."},
 "Kompleksni brojevi":{title:"i²=−1 i konjugat",tip:"i²=−1; |z|=√(a²+b²). Kod dijeljenja proširi konjugatom nazivnika (z̄)."},
 "Funkcije":{title:"Domena i nultočke",tip:"Provjeri domenu (nazivnik≠0, korijen≥0, log>0). Nultočke su sjecišta s x-osi; razlikuj rastuću/padajuću."},
 "Derivacije i integrali":{title:"Pravila deriviranja",tip:"(xⁿ)′=n·xⁿ⁻¹. Pazi na pravilo produkta/kvocijenta i lančano pravilo. Ekstrem: f′(x)=0."}
};
function WeakSpotTips({rows,onDrill}){
  var weak=(rows||[]).filter(function(r){return r.n>=1&&r.pct<60&&MISCONCEPTIONS[r.label];}).sort(function(a,b){return a.pct-b.pct;}).slice(0,3);
  if(!weak.length) return null;
  return e("div",{style:{margin:"4px 0 24px",padding:"14px 16px",borderRadius:14,background:"var(--gold-d)",border:"1px solid var(--gold-b)"}},
    e("div",{style:{fontSize:12.5,fontWeight:800,color:"var(--gold)",marginBottom:10,display:"flex",alignItems:"center",gap:7}},"🎯 Tvoje slabe točke — na što paziti"),
    weak.map(function(r,i){var m=MISCONCEPTIONS[r.label];return e("div",{key:r.label,style:{padding:i?"10px 0 0":"0",borderTop:i?"1px solid var(--bdr)":"none",marginTop:i?10:0}},
      e("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:4}},
        e("span",{style:{fontSize:13,fontWeight:700,color:"var(--text)"}},r.label),
        e("span",{style:{fontSize:11,fontWeight:800,color:"var(--red)"}},r.pct+"%"),
        onDrill&&e("button",{onClick:function(){onDrill(r.k,r.label);},style:{marginLeft:"auto",fontSize:11,fontWeight:700,padding:"4px 11px",borderRadius:99,border:"1px solid var(--blue-b)",background:"var(--blue-d)",color:"var(--blue)",cursor:"pointer",fontFamily:"var(--fb)"}},"🔁 Vježbaj")),
      e("div",{style:{fontSize:12.5,color:"var(--muted)",lineHeight:1.5}},e("strong",{style:{color:"var(--text)"}},m.title+": "),m.tip)
    );})
  );
}
const ERROR_TAGS=[
  {id:"predznak", label:"Pogrešan predznak"},
  {id:"formula",  label:"Nisam znao formulu"},
  {id:"racun",    label:"Greška u računanju"},
  {id:"citanje",  label:"Krivo pročitao/la"},
  {id:"jedinice", label:"Pomiješao/la jedinice"},
  {id:"zaokr",    label:"Krivo zaokružio/la"},
];
function ErrorTagger({qid,errorTags,setErrorTags}){
  const selected=errorTags[qid]||[];
  const[etOpen,setEtOpen]=React.useState(selected.length>0);
  function toggle(id){
    setErrorTags(p=>{
      const cur=p[qid]||[];
      return {...p,[qid]:cur.includes(id)?cur.filter(x=>x!==id):[...cur,id]};
    });
  }
  return e("div",{style:{padding:"9px 12px",marginBottom:10,borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)"}},
    e("button",{onClick:()=>setEtOpen(o=>!o),style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0,color:"var(--muted)"}},
      e("span",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",marginRight:"auto",textAlign:"left"}},"Zašto si pogriješio/la?"+(selected.length>0?" · "+selected.length:"")),
      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--blue)"}},etOpen?"sakrij ▴":"označi ▾")
    ),
    etOpen&&e("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:9}},
      ERROR_TAGS.map(({id,label})=>{
        const on=selected.includes(id);
        return e("button",{key:id,onClick:()=>toggle(id),style:{fontSize:11,padding:"4px 10px",borderRadius:99,cursor:"pointer",border:"1px solid "+(on?"var(--red)":"var(--bdr)"),background:on?"rgba(196,48,48,.12)":"var(--s1)",color:on?"var(--red)":"var(--muted)",fontWeight:on?700:400,transition:"all .15s"}},label);
      })
    ),
    etOpen&&selected.length>0&&e("div",{style:{fontSize:11,color:"var(--muted)",marginTop:8,fontStyle:"italic"}},"Bilježimo — pomoći će ti prepoznati vlastite obrasce grešaka.")
  );
}
function SelfExplain({val,onChange}){
  const[open,setOpen]=React.useState(!!val);
  return e("div",{style:{padding:"9px 12px",marginTop:10,marginBottom:10,borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)"}},
    e("button",{onClick:()=>setOpen(o=>!o),style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0,color:"var(--muted)"}},
      e("span",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",marginRight:"auto",textAlign:"left"}},"✍️ Objasni svojim riječima"),
      e("span",{style:{fontSize:11,fontWeight:700,color:"var(--green)"}},open?"sakrij ▴":"učvrsti ▾")
    ),
    open&&e("div",{style:{marginTop:9}},
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginBottom:7,lineHeight:1.5}},"Kad sam objasniš zašto je točno, pamtiš puno bolje nego kad samo pročitaš rješenje."),
      e("textarea",{defaultValue:val,onBlur:ev=>onChange(ev.target.value),placeholder:"npr. zašto baš ova opcija…",rows:2,style:{width:"100%",resize:"vertical",borderRadius:8,border:"1px solid var(--bdr)",background:"var(--s1)",color:"var(--text)",fontSize:13,padding:"8px 10px",fontFamily:"var(--fb)",lineHeight:1.5,boxSizing:"border-box"}})
    )
  );
}
const GLOSSARY={"determinanta": "Broj pridružen kvadratnoj matrici; za 2×2 matricu [[a,b],[c,d]] iznosi ad − bc.", "matrica": "Pravokutna tablica brojeva poredanih u retke i stupce.", "vektor": "Veličina određena iznosom (duljinom) i smjerom; u ravnini se piše kao uređeni par (x, y).", "skalar": "Obična brojčana veličina bez smjera, za razliku od vektora.", "derivacija": "Mjera trenutne brzine promjene funkcije; geometrijski je nagib tangente na graf.", "integral": "Operacija suprotna deriviranju; određeni integral daje površinu ispod grafa funkcije.", "limes": "Vrijednost kojoj se funkcija ili niz približava kad se argument približava nekoj vrijednosti.", "asimptota": "Pravac kojem se graf funkcije neograničeno približava, ali ga ne dodiruje.", "logaritam": "Eksponent na koji treba dignuti bazu da se dobije zadani broj: log baze a od b = c znači a^c = b.", "diskriminanta": "Izraz b² − 4ac kod kvadratne jednadžbe; predznak određuje broj realnih rješenja.", "faktorijel": "Umnožak svih prirodnih brojeva do n: n! = 1 · 2 · 3 · … · n.", "permutacija": "Svaki mogući poredak svih elemenata skupa; broj permutacija n elemenata je n!.", "kombinacija": "Izbor elemenata iz skupa kod kojeg poredak NIJE važan.", "varijacija": "Izbor elemenata iz skupa kod kojeg poredak JEST važan.", "vjerojatnost": "Mjera izglednosti događaja, broj od 0 do 1 (povoljni ishodi / svi ishodi).", "tangenta": "Pravac koji dira krivulju u jednoj točki i ima isti nagib kao krivulja u toj točki.", "normala": "Pravac okomit na tangentu u dodirnoj točki krivulje.", "domena": "Skup svih dopuštenih vrijednosti nezavisne varijable (ulaza) funkcije.", "kodomena": "Skup u koji funkcija preslikava — skup mogućih izlaznih vrijednosti.", "parabola": "Graf kvadratne funkcije; skup točaka jednako udaljenih od žarišta i ravnalice.", "hiperbola": "Krivulja s dvije grane; skup točaka kojima je razlika udaljenosti do dvaju žarišta stalna.", "elipsa": "Zatvorena krivulja; skup točaka kojima je zbroj udaljenosti do dvaju žarišta stalan.", "kružnica": "Skup svih točaka u ravnini jednako udaljenih od središta; ta udaljenost je polumjer.", "modul": "Apsolutna vrijednost; za kompleksan broj z = a + bi iznosi √(a² + b²).", "argument": "Kut koji radijvektor kompleksnog broja zatvara s pozitivnim dijelom realne osi.", "aritmetički niz": "Niz u kojem je razlika svaka dva susjedna člana stalna (npr. 2, 5, 8, 11 …).", "geometrijski niz": "Niz u kojem je omjer svaka dva susjedna člana stalan (npr. 3, 6, 12, 24 …).", "radijan": "Mjera kuta; puni kut iznosi 2π radijana (360°).", "sinus": "Trigonometrijska funkcija; u pravokutnom trokutu omjer nasuprotne katete i hipotenuze.", "kosinus": "Trigonometrijska funkcija; u pravokutnom trokutu omjer priležeće katete i hipotenuze.", "tangens": "Trigonometrijska funkcija; omjer sinusa i kosinusa.", "polinom": "Izraz oblika aₙxⁿ + … + a₁x + a₀ s nenegativnim cjelobrojnim eksponentima.", "vjerojatnosti": "Mjera izglednosti događaja, broj od 0 do 1."};
function StuckHelper(){
  const[open,setOpen]=React.useState(false);
  return e("div",{style:{marginTop:14}},
    e("button",{onClick:()=>setOpen(o=>!o),style:{display:"inline-flex",alignItems:"center",gap:7,padding:"7px 14px",borderRadius:99,background:open?"var(--gold-d)":"var(--s2)",border:"1px solid "+(open?"var(--gold-b)":"var(--bdr2)"),color:open?"var(--gold)":"var(--muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"}},"\ud83e\udd14 Zaglavio/la sam?"),
    open&&e("div",{style:{marginTop:10,padding:"14px 16px",borderRadius:"var(--r)",background:"var(--gold-d)",border:"1px solid var(--gold-b)"}},
      e("div",{style:{fontSize:13.5,fontWeight:700,color:"var(--text)",marginBottom:4}},"Bez panike \u2014 zapinjanje zna\u010di da mozak radi. \ud83d\udcaa"),
      e("div",{style:{fontSize:12.5,color:"var(--muted)",lineHeight:1.55,marginBottom:10}},"Zapeti je normalno \u010dak i odlika\u0161ima. Probaj ovim redom:"),
      e("ol",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7,color:"var(--text)"}},
        e("li",null,"Pro\u010ditaj zadatak ponovno i podcrtaj \u0161to se ",e("strong",null,"to\u010dno tra\u017ei"),"."),
        e("li",null,"Zapi\u0161i \u0161to ti je ",e("strong",null,"zadano")," (brojevi, uvjeti) \u2014 koristi \u270f\ufe0f papir."),
        e("li",null,"Sjeti se koja ",e("strong",null,"formula")," povezuje zadano i tra\u017eeno \u2192 otvori \u201eKlju\u010dna formula\u201d ispod."),
        e("li",null,"Ako i dalje ne ide \u2192 \u201eOtkrij prvi korak\u201d pa poku\u0161aj sam/a nastaviti.")),
      e("div",{style:{fontSize:11.5,color:"var(--muted)",marginTop:10,fontStyle:"italic"}},"Cilj nije znati odmah \u2014 nego znati ZA\u0160TO. To pamti\u0161 za maturu.")));
}
function WarmupItem({q,a}){
  const[show,setShow]=React.useState(false);
  return e("button",{onClick:()=>setShow(true),style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,width:"100%",marginBottom:8,padding:"12px 14px",borderRadius:"var(--r)",border:"1px solid var(--bdr)",background:"var(--s2)",cursor:show?"default":"pointer",fontFamily:"var(--fb)",textAlign:"left"}},
    e("span",{style:{fontSize:14,fontWeight:600,color:"var(--text)"}},q),
    show?e("span",{style:{fontSize:15,fontWeight:800,color:"var(--green)"}},"= "+a):e("span",{style:{fontSize:11.5,color:"var(--muted)",fontWeight:700}},"tap \u2192"));
}
export { WeakSpotTips, ERROR_TAGS, ErrorTagger, SelfExplain, GLOSSARY, StuckHelper, WarmupItem };
